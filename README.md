# Laravel UI Standart

**Clean Professional UI and consistent Laravel engineering standards for every Laravel project maintained with Hermes.**

This repository is the single source of truth for shared standards. Hermes must read the latest version directly from GitHub `main` at the start of every Laravel task. No local clone or persistent copy is required.

## Live source

- Repository: https://github.com/Haidar17ali/laravel-ui-standart
- Branch: `main`
- Raw base: https://raw.githubusercontent.com/Haidar17ali/laravel-ui-standart/main/

## Mandatory starting point

1. Read [AGENTS.md](AGENTS.md).
2. Read [Hermes Live GitHub Integration](docs/HERMES-INTEGRATION.md).
3. Read [Laravel Coding Standard](docs/CODING-STANDARD.md).
4. Read [Route, Controller, Model Binding, and CRUD Standard](docs/ROUTE-CONTROLLER-CRUD.md).
5. For UI work, read the relevant documents under [docs](docs/), especially design, forms, Select2, delete confirmation, toast, and validation checklist.
6. Inspect the target project's existing architecture and dependencies before implementation.

## Mandatory interaction standards

- Index **Edit** action uses green success styling (`btn-success` in Bootstrap projects).
- Delete/destructive actions use SweetAlert2 confirmation; never native browser confirm/alert.
- Successful create, update, and delete operations show a Bootstrap Toast after the server confirms success.
- Searchable selects use Select2 with a theme compatible with the installed Bootstrap and Select2 versions.
- Route parameters, controller signatures, model binding, model keys, and Blade route arguments must identify the same record.
- Preserve project architecture, authorization, validation, security, and business logic.

## Compatibility first

Do not blindly install, upgrade, replace, or duplicate frontend dependencies. Inspect Laravel/PHP, Bootstrap/theme/AdminLTE, Select2, jQuery, SweetAlert2, and Vite/Mix/CDN setup first. Reuse the existing stack where possible. If a project uses a different major UI framework, preserve its architecture and translate the interaction standards rather than introducing a conflicting framework.

## Core documents

- [AGENTS.md](AGENTS.md) — mandatory rules for all Laravel work.
- [CODING-STANDARD.md](docs/CODING-STANDARD.md) — naming, validation, Eloquent, security, and quality.
- [ROUTE-CONTROLLER-CRUD.md](docs/ROUTE-CONTROLLER-CRUD.md) — route/controller/model/Blade identity consistency.
- [DESIGN-RULES.md](docs/DESIGN-RULES.md) — Clean Professional visual system.
- [FORM-GUIDELINE.md](docs/FORM-GUIDELINE.md) — form and validation behavior.
- [SELECT2-GUIDELINE.md](docs/SELECT2-GUIDELINE.md) — Select2 setup and compatibility.
- [DELETE-GUIDELINE.md](docs/DELETE-GUIDELINE.md) — SweetAlert2 destructive-action confirmation.
- [TOAST-GUIDELINE.md](docs/TOAST-GUIDELINE.md) — success and failure feedback.
- [VALIDATION-CHECKLIST.md](docs/VALIDATION-CHECKLIST.md) — required completion checks.
- [HERMES-INTEGRATION.md](docs/HERMES-INTEGRATION.md) — live GitHub protocol and project instruction snippet.

## Scope and precedence

These standards apply to all Laravel projects. Resolve conflicts by prioritizing security/data integrity, explicit user instructions, and the target project's established architecture before shared conventions. Explain any material deviation in the completion report.
