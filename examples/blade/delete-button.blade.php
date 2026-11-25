{{-- Repeat per record; enforce authorization on the server. --}}
<form
    action="{{ route('items.destroy', $item) }}"
    method="POST"
    class="d-inline js-delete-form"
    data-item-name="{{ $item->name }}"
>
    @csrf
    @method('DELETE')
    <button type="submit" class="btn btn-sm btn-outline-danger">Hapus</button>
</form>
