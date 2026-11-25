{{-- Adapt route names and model fields to the target application. --}}
<form action="{{ route('items.store') }}" method="POST">
    @csrf

    <div class="mb-3">
        <label for="name" class="form-label">Nama</label>
        <input
            type="text"
            class="form-control @error('name') is-invalid @enderror"
            id="name"
            name="name"
            value="{{ old('name') }}"
            required
            autocomplete="off"
        >
        @error('name')
            <div class="invalid-feedback">{{ $message }}</div>
        @enderror
    </div>

    <div class="mb-3">
        <label for="category_id" class="form-label">Kategori</label>
        <select
            class="form-select js-select2 @error('category_id') is-invalid @enderror"
            id="category_id"
            name="category_id"
            data-placeholder="Pilih kategori"
            required
        >
            <option value=""></option>
            @foreach ($categories as $category)
                <option value="{{ $category->id }}" @selected(old('category_id') == $category->id)>
                    {{ $category->name }}
                </option>
            @endforeach
        </select>
        @error('category_id')
            <div class="invalid-feedback d-block">{{ $message }}</div>
        @enderror
    </div>

    <div class="d-flex flex-wrap justify-content-end gap-2">
        <a href="{{ route('items.index') }}" class="btn btn-outline-secondary">Batal</a>
        <button type="submit" class="btn btn-primary">Simpan</button>
    </div>
</form>
