// Load after jQuery and Select2. Theme must match the project's verified theme package.
export function initSelect2(root = document) {
    if (!window.jQuery || !window.jQuery.fn.select2) {
        console.warn('Select2 is not available; check the project asset loading order.');
        return;
    }

    const $ = window.jQuery;

    $(root).find('.js-select2').each(function () {
        const $select = $(this);
        if ($select.hasClass('select2-hidden-accessible')) return;

        const $modal = $select.closest('.modal');
        const options = {
            width: '100%',
            theme: 'bootstrap-5',
            placeholder: $select.data('placeholder') || 'Pilih opsi',
            allowClear: !$select.prop('required'),
        };

        if ($modal.length) options.dropdownParent = $modal;
        $select.select2(options);
    });
}
