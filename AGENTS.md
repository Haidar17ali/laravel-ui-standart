# AGENTS.md — Mandatory Standards for All Laravel Projects

## Scope and authority
These instructions apply to **all work in every Laravel project**, not only UI work: new features, bug fixes, refactors, routes, controllers, models, migrations, services, jobs, APIs, Blade, JavaScript, tests, and documentation.

This repository's `main` branch is the single source of truth for shared Laravel standards. Project-specific instructions may add constraints, but must not silently weaken security or correctness.

## Mandatory live-GitHub workflow
Hermes must read the current version from GitHub at the beginning of **every new Laravel task/session**, before inspecting or editing project code:
- `https://raw.githubusercontent.com/Haidar17ali/laravel-ui-standart/main/AGENTS.md`
- `https://raw.githubusercontent.com/Haidar17ali/laravel-ui-standart/main/README.md`
- `https://raw.githubusercontent.com/Haidar17ali/laravel-ui-standart/main/docs/CODING-STANDARD.md`
- `https://raw.githubusercontent.com/Haidar17ali/laravel-ui-standart/main/docs/ROUTE-CONTROLLER-CRUD.md`
- Relevant UI documents listed below when UI is involved.

Use the agent's HTTP/browser fetch capability or execute a direct HTTPS GET (for example, `curl -fsSL <raw-url>`) and read the response in the current task context. **Do not clone this repository, do not create a persistent local copy, and do not rely on a stale cached copy.** A temporary in-memory response is acceptable; do not save a local mirror.

If live GitHub access fails, do not pretend the standards were read and do not proceed with substantial code changes. Retry once; then report the access failure and ask for the required access/network restoration. Never silently fall back to an old local copy.

At the start of each distinct Laravel task, fetch the current `main` content again. Within one task, do not repeatedly fetch unchanged files unless a new standard is relevant or the branch may have changed.

## Required project inspection
Before coding, inspect the target project and identify:
- Laravel and PHP versions from `composer.json` and runtime.
- Existing route style, route names, middleware, authorization, and route model binding.
- Models, primary keys, relationships, casts, scopes, and existing service/action patterns.
- Database schema and migrations relevant to the change.
- Existing tests and coding conventions.
- Bootstrap/theme/AdminLTE version, JavaScript libraries, Select2/SweetAlert2 versions, and Vite/Mix/CDN asset strategy when UI is involved.

Do not assume a dependency or version. Do not install, upgrade, replace, or duplicate frontend packages without compatibility checks and user approval for material dependency changes.

## Mandatory implementation rules
1. Follow the current shared coding and CRUD standards. Keep naming, parameter types, route names, model variables, request validation, and response behavior consistent end-to-end.
2. Inspect existing code before changing it. Prefer the smallest complete change; do not redesign or refactor unrelated functionality.
3. Preserve business logic, data integrity, permissions, localization, and backwards compatibility unless the task explicitly changes them.
4. Validate all untrusted input server-side. Enforce authorization server-side; hiding a button is not authorization.
5. Use transactions when a multi-step database operation must be atomic.
6. Do not invent schema columns, relationships, routes, or APIs. Verify them in the project.
7. Add or update tests where practical, and run the most relevant checks available.
8. Never claim a test, build, browser interaction, or runtime behavior was verified unless it was actually run.

## Mandatory UI interaction standards
- **Index actions:** Edit uses the green semantic success style (`btn-success` in Bootstrap projects); Delete uses danger; Create uses primary. Preserve project-specific theme equivalents when Bootstrap is not used.
- **Selects:** use Select2 for searchable/enhanced select fields. In Bootstrap 5 projects use a theme compatible with the installed Bootstrap and Select2 versions. Handle modals and dynamic content correctly.
- **Delete/destructive actions:** use SweetAlert2 confirmation. Never use native `window.confirm()`, `alert()`, or `prompt()` for application UI. Submit only after explicit confirmation.
- **CRUD feedback:** successful create, update, and delete operations must show a non-blocking toast after the server confirms success. Failed operations should provide useful feedback; validation errors must remain visible beside fields.
- **Forms:** labels, `old()` values, field-level validation errors, CSRF, and method spoofing are required where applicable.
- **Compatibility:** reuse the existing layout, theme, libraries, and asset pipeline. Do not introduce a second copy of Bootstrap, jQuery, Select2, SweetAlert2, or an icon pack.

## UI documents to fetch when relevant
- `docs/DESIGN-RULES.md`
- `docs/FORM-GUIDELINE.md`
- `docs/SELECT2-GUIDELINE.md`
- `docs/DELETE-GUIDELINE.md`
- `docs/TOAST-GUIDELINE.md`
- `docs/VALIDATION-CHECKLIST.md`
- Relevant examples under `examples/`

## Conflict resolution
Resolve conflicts in this order:
1. Security, data integrity, and correctness.
2. Explicit user instruction for the current task.
3. Existing project's architecture and project-root instructions.
4. This shared standard.

If a deviation is necessary, explain why in the completion report. Do not silently ignore a standard.

## Completion report
Before saying the task is complete, report:
- Files/areas changed.
- Tests/build/static checks actually run and their outcomes.
- UI behaviors verified (or explicitly not verified).
- Any deviations, risks, or remaining work.

Use `docs/VALIDATION-CHECKLIST.md` as the final checklist.
