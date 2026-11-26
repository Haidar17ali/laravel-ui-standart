{{-- Render this shared component once in the main application layout, near the end of <body>. --}}
@php
    $toastTypes = [
        'success' => ['title' => 'Berhasil', 'icon' => '✓', 'role' => 'status', 'live' => 'polite', 'delay' => 4000],
        'error' => ['title' => 'Gagal', 'icon' => '!', 'role' => 'alert', 'live' => 'assertive', 'delay' => 6000],
        'warning' => ['title' => 'Perhatian', 'icon' => '!', 'role' => 'status', 'live' => 'polite', 'delay' => 5000],
        'info' => ['title' => 'Informasi', 'icon' => 'i', 'role' => 'status', 'live' => 'polite', 'delay' => 4000],
    ];
@endphp

<div class="app-toast-container" aria-live="off">
    @foreach ($toastTypes as $type => $config)
        @if (session()->has($type) && filled(session($type)))
            <div
                class="toast app-toast app-toast--{{ $type }}"
                role="{{ $config['role'] }}"
                aria-live="{{ $config['live'] }}"
                aria-atomic="true"
                data-bs-autohide="true"
                data-bs-delay="{{ $config['delay'] }}"
            >
                <div class="app-toast__icon" aria-hidden="true">{{ $config['icon'] }}</div>

                <div class="app-toast__content">
                    <div class="app-toast__title">{{ $config['title'] }}</div>
                    <div class="app-toast__message">{{ session($type) }}</div>
                </div>

                <button
                    type="button"
                    class="app-toast__close"
                    data-bs-dismiss="toast"
                    aria-label="Tutup notifikasi"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        @endif
    @endforeach
</div>
