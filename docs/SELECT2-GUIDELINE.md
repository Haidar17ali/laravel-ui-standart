# Select2 Guideline

## Standard

Use Select2 for searchable or long select lists. In a Bootstrap 5 project, use a Select2 theme explicitly compatible with the installed Bootstrap 5 and Select2 versions. Do not use a Bootstrap 4 theme in a Bootstrap 5 application.

## Before implementation

1. Inspect `package.json`, lockfiles, compiled assets, and existing Select2 initialization.
2. Confirm the installed Select2 version and theme compatibility from the package documentation.
3. Confirm whether jQuery is already loaded. Select2 requires jQuery; do not load a second copy.
4. Follow the project's Vite/Mix/CDN and AdminLTE conventions.
5. Do not install packages or alter versions without checking compatibility and obtaining approval if the change is significant.

## Initialization expectations

- Apply the project's Bootstrap 5-compatible theme.
- Use `width: '100%'` so the control aligns with form fields.
- Use `dropdownParent` inside Bootstrap modals so the dropdown is not clipped or placed behind the modal.
- Use a clear placeholder and allow clearing only when the field is optional.
- Preserve selected values after validation errors.
- Initialize dynamically inserted controls once, using a reusable initializer.
- Destroy or avoid duplicate instances when replacing DOM fragments.

## Accessibility and usability

- Provide a visible label.
- Ensure placeholder text does not replace the label.
- Use clear option labels and sensible search behavior.
- Keep keyboard navigation available.
- For remote/AJAX data, show loading and no-results states and validate submitted IDs on the server.

## Example

See [select2.js](../examples/javascript/select2.js) and [form.blade.php](../examples/blade/form.blade.php).

## Exception

If a project uses a non-Bootstrap design system or a custom Select2 integration, preserve its working architecture and apply equivalent spacing, focus, accessibility, and responsive behavior. Document the exception rather than introducing conflicting theme assets.
