# Form Guideline

## Required structure

- Use the existing Blade layout and form components.
- Use POST for create operations and the appropriate method spoofing for updates.
- Include `@csrf` in every state-changing form.
- Include `@method('PUT')`, `@method('PATCH')`, or `@method('DELETE')` when required.
- Use named routes that already exist in the application.
- Preserve old input and show validation feedback.

## Validation

Use Laravel's validation bag and show errors beside the field. A general error summary can be added for long forms, but it must not replace field-level messages.

## Select fields

Use Select2 for searchable or long option lists. Follow [SELECT2-GUIDELINE.md](SELECT2-GUIDELINE.md). Keep selected values and old input working after validation redirects.

## Submission UX

- Keep the submit button label action-oriented.
- Prevent accidental double submission where practical.
- On success, use a toast and redirect according to the established workflow.
- On failure, show field errors and a concise toast if the failure is not already obvious.

## Example

See [form.blade.php](../examples/blade/form.blade.php).
