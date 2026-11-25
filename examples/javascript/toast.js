// Load after Bootstrap 5's JavaScript bundle.
document.addEventListener('DOMContentLoaded', () => {
    if (!window.bootstrap?.Toast) {
        console.warn('Bootstrap Toast is not available; check the Bootstrap JS bundle.');
        return;
    }

    document.querySelectorAll('.toast').forEach((element) => {
        window.bootstrap.Toast.getOrCreateInstance(element).show();
    });
});
