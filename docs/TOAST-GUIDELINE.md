# Toast Notification Guideline

## 1. Design direction

All application notifications must follow the **Clean Professional** visual style:

- Compact white notification card with a subtle border and soft shadow.
- A slim semantic accent on the left; do not fill the entire card with a saturated status color.
- A small, clear status icon inside a softly tinted icon tile.
- A short title and a concise message with readable hierarchy.
- A visible close button with an accessible label.
- Consistent placement at the top-right of the viewport, below fixed application chrome where necessary.
- Consistent spacing, radius, typography, width, and animation across all Laravel modules.

Do not create a different toast design per module. Use the shared Blade markup, CSS, and JavaScript example in this repository.

## 2. Notification types

| Type | Title | Use |
|---|---|---|
| success | Berhasil | Create, update, delete, or other completed actions |
| error | Gagal | Server, network, or operation failure |
| warning | Perhatian | Non-blocking warning that needs user awareness |
| info | Informasi | Neutral status or helpful information |

Use clear Indonesian messages by default:
- Data berhasil disimpan.
- Data berhasil diperbarui.
- Data berhasil dihapus.
- Data gagal disimpan. Silakan coba lagi.

Do not use vague messages such as Success, Error, or Something went wrong when a useful message is available.

## 3. Mandatory behavior

- Use Bootstrap Toast for non-blocking feedback after save, update, delete, and similar operations.
- Show success only after the server confirms that the operation succeeded.
- Never show success before a request completes.
- Do not use native alert() or browser notifications for ordinary CRUD feedback.
- Avoid duplicate notifications for the same event.
- Keep field-level Laravel validation errors beside their inputs. A toast may summarize a validation or request failure, but must not replace field-level errors.
- Do not use a toast for a decision that requires confirmation; use a modal/dialog instead.
- Escape server-rendered message content using Blade's escaped output syntax.

## 4. Laravel session flash

For standard form submissions:

1. Complete the operation in the controller.
2. Redirect using the project's established flow and flash a semantic message, e.g. return redirect()->route('products.index')->with('success', 'Data berhasil disimpan.').
3. Render the shared toast component once in the main application layout.
4. Initialize it once after the Bootstrap JavaScript bundle is loaded.

Support success, error, warning, and info flash keys. Do not render empty toast elements.

## 5. AJAX / fetch

- Show a success toast only after receiving a successful response from the server.
- Show an error toast when the request fails; prefer a useful server message when safe and available.
- Preserve form input and field validation feedback on failure.
- Use the shared window.showAppToast(type, message, title) helper from the JavaScript example.
- Pass plain text to the helper. It inserts messages using textContent, not innerHTML.
- Do not initialize the same toast or register duplicate global handlers repeatedly.

Example:

~~~javascript
window.showAppToast('success', 'Data berhasil disimpan.');
window.showAppToast('error', 'Data gagal disimpan. Silakan coba lagi.');
~~~

## 6. Timing and accessibility

- Success/info: approximately 4 seconds.
- Warning: approximately 5 seconds.
- Error: approximately 6 seconds so the user has time to read it.
- Allow manual dismissal at all times.
- Use role="status" and polite live announcements for success/info; use role="alert" and assertive announcements for errors when rendered in the DOM.
- Include meaningful text; never communicate status by color or icon alone.
- Respect reduced-motion preferences.
- Ensure the toast remains usable on narrow screens and does not cover essential navigation or form controls.

## 7. Bootstrap and project compatibility

- Inspect the installed Bootstrap version and the project's AdminLTE/theme before implementation.
- The reference example in this repository uses Bootstrap 5 Toast APIs (bootstrap.Toast, data-bs-*).
- If the project uses Bootstrap 4, adapt the data attributes and JavaScript API to its installed version; do not mix Bootstrap 4 and 5 APIs or load a second Bootstrap bundle.
- Load the project's Bootstrap JavaScript bundle only once.
- Load toast.css and toast.js through the project's existing asset pipeline (Vite, Mix, or established asset layout). Do not add duplicate CDN dependencies.

## 8. Reference implementation

- [Blade markup](../examples/blade/toast.blade.php)
- [Toast styles](../examples/css/toast.css)
- [JavaScript helper](../examples/javascript/toast.js)

Use these examples as the shared baseline. Adapt only the integration points needed by the target project's existing layout and Bootstrap version; preserve the visual system and behavior.
