// Load after SweetAlert2. Delegated listener supports dynamically rendered forms.
document.addEventListener('submit', async (event) => {
    const form = event.target.closest('.js-delete-form');
    if (!form) return;
    if (form.dataset.confirmed === 'true') return;

    event.preventDefault();

    const itemName = form.dataset.itemName || 'data ini';
    const result = await Swal.fire({
        title: 'Hapus data?',
        text: `Apakah Anda yakin ingin menghapus ${itemName}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, hapus',
        cancelButtonText: 'Batal',
        confirmButtonColor: '#dc3545',
        reverseButtons: true,
        focusCancel: true,
    });

    if (result.isConfirmed) {
        form.dataset.confirmed = 'true';
        form.requestSubmit();
    }
});
