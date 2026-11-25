{{-- Place once in the shared layout after main content. Bootstrap 5 JS must be loaded. --}}
<div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 1090;">
    @if (session('success'))
        <div class="toast text-bg-success border-0" role="status" aria-live="polite"
             aria-atomic="true" data-bs-delay="4000">
            <div class="d-flex">
                <div class="toast-body">{{ session('success') }}</div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto"
                        data-bs-dismiss="toast" aria-label="Tutup"></button>
            </div>
        </div>
    @endif

    @if (session('error'))
        <div class="toast text-bg-danger border-0" role="alert" aria-live="assertive"
             aria-atomic="true" data-bs-delay="6000">
            <div class="d-flex">
                <div class="toast-body">{{ session('error') }}</div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto"
                        data-bs-dismiss="toast" aria-label="Tutup"></button>
            </div>
        </div>
    @endif
</div>
