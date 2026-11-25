# AGENTS.md — Mandatory Laravel UI Standards

## When this file applies

These instructions apply whenever you create, edit, review, or refactor UI in any Laravel project. This includes Blade views, layouts, components, forms, tables, modals, navigation, dashboards, JavaScript interactions, and notifications.

## Required workflow

1. Before making UI changes, read this repository's `README.md` and relevant files under `docs/`.
2. Inspect the target project before coding:
   - Laravel and PHP versions from `composer.json`.
   - Bootstrap/theme/AdminLTE version and installed frontend packages.
   - Vite, Laravel Mix, CDN, or other asset loading strategy.
   - Existing Blade layouts, components, naming conventions, and JavaScript initialization.
3. Reuse the existing design system and dependencies. Do not add a second Bootstrap, jQuery, Select2, SweetAlert2, icon pack, or CSS framework.
4. Implement the smallest consistent change. Do not redesign unrelated screens.
5. Preserve existing routes, permissions, validation, business logic, localization, and responsive behavior.
6. Verify the result: inspect rendered markup/JS behavior where possible, run relevant tests or build checks, and report anything that could not be verified.

## Mandatory interaction standards

- **Selects:** use Select2 for searchable/enhanced select fields. Use a Bootstrap 5-compatible theme when the project uses Bootstrap 5. Do not apply a Bootstrap 4 theme to Bootstrap 5.
- **Delete/destructive actions:** use SweetAlert2 confirmation. Never use native `window.confirm()`, `alert()`, or `prompt()` for application UI.
- **Save feedback:** show a Bootstrap Toast for successful and failed save/update operations. For validation errors, retain Laravel's field-level validation messages; a toast may summarize the failure but must not replace them.
- **Forms:** show labels, preserve `old()` values, display validation errors, use CSRF protection, and use method spoofing for PUT/PATCH/DELETE.
- **Accessibility:** use semantic elements, associated labels, keyboard-operable controls, visible focus, and meaningful button text/ARIA labels.
- **Responsive layout:** support narrow mobile widths without horizontal overflow. Tables may use Bootstrap's responsive wrapper.

## Visual direction: Clean Professional

- Use clear hierarchy, restrained colors, consistent spacing, and readable typography.
- Prefer Bootstrap utilities and existing theme tokens over arbitrary inline styles.
- Use consistent page headers, action placement, form spacing, table density, and empty/loading states.
- Avoid excessive gradients, shadows, borders, animations, oversized cards, and decorative icons.
- Keep primary actions visually distinct; destructive actions must be visually identifiable and confirmed.
- Do not use color alone to communicate status.

## Technical and security rules

- Never trust client-side visibility as authorization. Enforce permissions on the server.
- Use Laravel route names and existing route conventions; do not invent routes without checking.
- Use `@csrf` and `@method(...)` as required.
- Escape output with Blade's `{{ }}` by default. Use raw output only for trusted/sanitized HTML.
- Do not put secrets or credentials in Blade, JavaScript, commits, or logs.
- Avoid inline event handlers for new code when the project uses modular JavaScript; follow the existing asset pattern.
- Initialize plugins safely and avoid duplicate initialization after partial/AJAX rendering.
- Do not replace a project's existing notification system without explicit approval.

## Project-specific overrides

A project's own `AGENTS.md`, architecture documentation, or explicit user instruction may refine these standards. Resolve conflicts by preserving security and existing architecture first, then explicit project instructions, then this shared standard. Mention material deviations in the completion summary.

## Reference documents

- `docs/DESIGN-RULES.md`
- `docs/FORM-GUIDELINE.md`
- `docs/SELECT2-GUIDELINE.md`
- `docs/DELETE-GUIDELINE.md`
- `docs/TOAST-GUIDELINE.md`
- `examples/blade/`
- `examples/javascript/`

## Hermes integration note

When working in a Laravel project, locate this standards repository or its checked-out local copy and read this file before UI work. If the repository is not available locally, ask the user to clone it or provide its path; do not claim to have read files that are unavailable.
