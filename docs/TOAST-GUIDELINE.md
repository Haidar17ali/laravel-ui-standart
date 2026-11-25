# Toast Notification Guideline

## Mandatory behavior

Use Bootstrap Toast for non-blocking success and failure feedback after save, update, or similar operations.

- Success: concise confirmation, e.g. **Data berhasil disimpan.**
- Failure: concise explanation, e.g. **Data gagal disimpan. Silakan coba lagi.**
- Validation: keep field-level validation messages; a toast is supplementary.
- Do not use native `alert()`.
- Do not show success before the server confirms the operation.
- Avoid duplicate notifications for the same event.

## Laravel session flash

For normal form submissions, use Laravel session flash data and render a toast from the shared layout. Follow the project's established redirect flow.

## AJAX

For asynchronous requests, show a success toast only after a successful response. On failure, show a useful message and preserve the user's input where possible.

## Accessibility

Use an appropriate live region and ensure the toast remains readable. Do not rely on color alone; include clear text. Keep duration long enough to read and do not use a toast for information requiring a decision.

## Example

See [toast.blade.php](../examples/blade/toast.blade.php) and [toast.js](../examples/javascript/toast.js).
