# Laravel UI Standart

**Clean Professional UI standards for all Laravel projects maintained with Hermes.**

This repository is the shared UI reference for Laravel applications. It defines consistent layout, forms, tables, feedback, destructive actions, accessibility, and responsive behavior.

## Start here

1. Read [AGENTS.md](AGENTS.md) before changing UI in any Laravel project.
2. Apply [Design Rules](docs/DESIGN-RULES.md).
3. Follow the form, Select2, delete, and toast guidelines in [docs](docs/).
4. Adapt examples to the dependencies and asset pipeline already installed in the target project.

## Core interaction standards

- Bootstrap 5 conventions when the target project uses Bootstrap 5.
- Select2 with a Bootstrap 5-compatible theme for searchable selects.
- SweetAlert2 for delete and destructive-action confirmations.
- Bootstrap Toast for non-blocking success and failure feedback.
- Laravel Blade validation, CSRF protection, and server-side authorization.

## Compatibility first

Do not blindly install, upgrade, replace, or duplicate frontend dependencies. Inspect the target project's Laravel version, Bootstrap version, AdminLTE/theme, Vite/Mix/CDN setup, and existing JavaScript plugins first. Reuse the existing stack where possible. If the project uses a different major UI framework, preserve its architecture and translate these design principles rather than introducing a conflicting framework.

## Scope

These standards apply to all Laravel projects unless a project-specific instruction explicitly overrides them. Security, accessibility, existing project architecture, and correctness take priority over visual consistency.
