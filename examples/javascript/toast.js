// Load once, after the project's Bootstrap 5 JavaScript bundle.
(() => {
    const typeConfig = {
        success: { title: 'Berhasil', delay: 4000, role: 'status', live: 'polite' },
        error: { title: 'Gagal', delay: 6000, role: 'alert', live: 'assertive' },
        warning: { title: 'Perhatian', delay: 5000, role: 'status', live: 'polite' },
        info: { title: 'Informasi', delay: 4000, role: 'status', live: 'polite' },
    };

    const getContainer = () => {
        let container = document.querySelector('.app-toast-container');

        if (!container) {
            container = document.createElement('div');
            container.className = 'app-toast-container';
            container.setAttribute('aria-live', 'off');
            document.body.appendChild(container);
        }

        return container;
    };

    window.showAppToast = (type, message, title) => {
        const config = typeConfig[type];

        if (!config || !message || !window.bootstrap?.Toast) {
            if (!window.bootstrap?.Toast) {
                console.warn('Bootstrap 5 Toast is unavailable. Check the loaded Bootstrap bundle.');
            }
            return;
        }

        const toast = document.createElement('div');
        toast.className = `toast app-toast app-toast--${type}`;
        toast.setAttribute('role', config.role);
        toast.setAttribute('aria-live', config.live);
        toast.setAttribute('aria-atomic', 'true');
        toast.dataset.bsAutohide = 'true';
        toast.dataset.bsDelay = String(config.delay);

        const icon = document.createElement('div');
        icon.className = 'app-toast__icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = type === 'success' ? '✓' : type === 'info' ? 'i' : '!';

        const content = document.createElement('div');
        content.className = 'app-toast__content';

        const heading = document.createElement('div');
        heading.className = 'app-toast__title';
        heading.textContent = title || config.title;

        const body = document.createElement('div');
        body.className = 'app-toast__message';
        body.textContent = String(message);

        const close = document.createElement('button');
        close.type = 'button';
        close.className = 'app-toast__close';
        close.dataset.bsDismiss = 'toast';
        close.setAttribute('aria-label', 'Tutup notifikasi');

        const closeText = document.createElement('span');
        closeText.setAttribute('aria-hidden', 'true');
        closeText.textContent = '×';
        close.appendChild(closeText);

        content.append(heading, body);
        toast.append(icon, content, close);
        getContainer().appendChild(toast);

        toast.addEventListener('hidden.bs.toast', () => toast.remove(), { once: true });
        window.bootstrap.Toast.getOrCreateInstance(toast).show();
    };

    document.addEventListener('DOMContentLoaded', () => {
        if (!window.bootstrap?.Toast) {
            console.warn('Bootstrap 5 Toast is unavailable. Check the loaded Bootstrap bundle.');
            return;
        }

        document.querySelectorAll('.app-toast').forEach((element) => {
            window.bootstrap.Toast.getOrCreateInstance(element).show();
            element.addEventListener('hidden.bs.toast', () => element.remove(), { once: true });
        });
    });
})();
