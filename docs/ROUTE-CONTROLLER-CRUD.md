# Route, Controller, Model Binding, and CRUD Standard

## Core rule
One resource must have one consistent identity from route to database lookup to Blade form/action. Never route by one identifier and fetch/update/delete a different record using another identifier.

## Preferred resource routes
For conventional CRUD, prefer Laravel resource routes and implicit route model binding when compatible with the project's existing conventions:

```php
use App\\Http\\Controllers\\ProductController;

Route::resource('products', ProductController::class);
```

The resource parameter is normally `{product}`. Controller methods should type-hint the matching model:

```php
public function edit(Product $product)
{
    return view('products.edit', compact('product'));
}

public function update(UpdateProductRequest $request, Product $product)
{
    $product->update($request->validated());

    return redirect()
        ->route('products.index')
        ->with('success', 'Data berhasil diperbarui.');
}

public function destroy(Product $product)
{
    $product->delete();

    return redirect()
        ->route('products.index')
        ->with('success', 'Data berhasil dihapus.');
}
```

## Identity consistency checklist
For every CRUD action, verify all of the following refer to the same record:
1. Route URI parameter name and route model binding.
2. Controller method argument name and type.
3. Model primary key or custom route key.
4. Blade `route(...)` argument.
5. Form action and HTTP method.
6. Authorization policy target.
7. Query/update/delete target.

Example: `{product}` + `Product $product` + `route('products.edit', $product)` is consistent. Do not use `{id}` while expecting implicit binding to `Product $product` unless explicit binding has been deliberately configured and tested.

## When using scalar IDs
Some existing applications intentionally use scalar IDs. Keep them consistent end-to-end:

```php
Route::get('/products/{id}/edit', [ProductController::class, 'edit'])
    ->name('products.edit');

public function edit(int $id)
{
    $product = Product::findOrFail($id);

    return view('products.edit', compact('product'));
}
```

Blade must pass the same model key:
```blade
<a href="{{ route('products.edit', $product->getKey()) }}">Edit</a>
```

Do not mix scalar-ID and implicit-model-binding patterns within the same resource without an explicit reason.

## Custom route keys
If the model uses a custom key such as SKU or UUID, inspect the migration/model and configure binding deliberately (for example, `getRouteKeyName()` or `{product:sku}`). Pass the bound model or the correct route key consistently. Never assume the primary key is named `id`.

## CRUD HTTP behavior
- index/create/show/edit: GET, read-only.
- store: POST.
- update: PUT or PATCH.
- destroy: DELETE.
- Every state-changing Blade form includes `@csrf` and the correct `@method(...)`.
- Never implement deletion or updates through GET links.

## Blade examples
```blade
<a href="{{ route('products.edit', $product) }}" class="btn btn-success btn-sm">
    <i class="fas fa-edit" aria-hidden="true"></i> Edit
</a>

<form action="{{ route('products.destroy', $product) }}" method="POST" class="d-inline js-delete-form">
    @csrf
    @method('DELETE')
    <button type="submit" class="btn btn-danger btn-sm">
        <i class="fas fa-trash" aria-hidden="true"></i> Hapus
    </button>
</form>
```

The delete form must be intercepted by the project's shared SweetAlert2 handler. Do not add inline handlers if the project uses modular JavaScript.

## Review before completion
Inspect the actual registered routes (for example, `php artisan route:list`), controller signatures, model keys/bindings, Blade arguments, and tests. A visually correct link is not enough; confirm it targets the intended record.
