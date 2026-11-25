# Delete and Destructive Action Guideline

## Mandatory behavior

- Confirm deletes and other irreversible/destructive actions with SweetAlert2.
- Do not use native `window.confirm()`, `alert()`, or `prompt()`.
- Confirmation copy must identify the action and, when possible, the record being affected.
- The confirm button must clearly say **Hapus** or the relevant destructive action.
- The cancel button must be clear and safe.
- Submit only after explicit confirmation.

## Security

- The server must enforce authentication, authorization, validation, and CSRF protection.
- Confirmation dialogs are a usability safeguard, not a security control.
- Use a POST form with `@csrf` and `@method('DELETE')`.
- Never perform destructive actions through a GET route.

## AJAX deletes

For AJAX deletes, handle loading, success, and error responses. Update the UI only after the server confirms success. Do not silently remove a row before the request succeeds.

## Example

See [delete-confirmation.js](../examples/javascript/delete-confirmation.js) and [delete-button.blade.php](../examples/blade/delete-button.blade.php).
