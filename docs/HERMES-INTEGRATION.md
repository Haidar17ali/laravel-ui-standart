# Hermes Integration — Live GitHub, No Local Clone

## Goal
Make the latest shared Laravel standards available to Hermes for **every Laravel project**, without cloning this repository or maintaining a local copy on the agent machine.

Repository: https://github.com/Haidar17ali/laravel-ui-standart
Source branch: `main`
Raw base URL: `https://raw.githubusercontent.com/Haidar17ali/laravel-ui-standart/main`

## Important behavior
A GitHub repository is not automatically part of Hermes' system prompt. Hermes must explicitly fetch and read the raw files at the start of each new Laravel task. Merely adding a link to a project instruction file is not enough unless the agent actually follows it.

## Live-read protocol (mandatory)
At the beginning of every new Laravel task, fetch these files from the current `main` branch and read their complete response:
1. `AGENTS.md`
2. `README.md`
3. `docs/CODING-STANDARD.md`
4. `docs/ROUTE-CONTROLLER-CRUD.md`

When UI is involved, also fetch:
- `docs/DESIGN-RULES.md`
- `docs/FORM-GUIDELINE.md`
- `docs/SELECT2-GUIDELINE.md`
- `docs/DELETE-GUIDELINE.md`
- `docs/TOAST-GUIDELINE.md`
- `docs/VALIDATION-CHECKLIST.md`

Use HTTPS GET through the available browser/HTTP capability. In a shell-enabled environment, a direct read-only example is:

```bash
curl -fsSL https://raw.githubusercontent.com/Haidar17ali/laravel-ui-standart/main/AGENTS.md
```

Fetch each required raw file directly and inspect its response. Do not use `git clone`, `git pull`, a submodule, a Composer package, or a persistent local mirror for this standards repository. Do not save a stale copy and claim it is current.

If fetching fails:
1. Retry once.
2. If still unavailable, stop before substantial Laravel code changes.
3. Tell the user which raw URL failed and that live standards could not be verified.
4. Do not silently use stale local documentation or claim compliance.

Fetch current `main` again at the start of each distinct task. A temporary in-memory response during the active task is acceptable.

## Project-level instruction
Add the following short block to the root `AGENTS.md` of each Laravel project, preserving all existing project-specific instructions. If no project `AGENTS.md` exists, create one containing this block plus any project-specific guidance the user approves.

```md
## Mandatory Shared Laravel Standards (Live GitHub)

Before starting any Laravel task (backend, database, API, routes, controllers, models, tests, or UI), read the latest shared standards from:
https://github.com/Haidar17ali/laravel-ui-standart

Fetch and read the current raw files directly from the main branch; do not clone or maintain a local copy:
- https://raw.githubusercontent.com/Haidar17ali/laravel-ui-standart/main/AGENTS.md
- https://raw.githubusercontent.com/Haidar17ali/laravel-ui-standart/main/README.md
- https://raw.githubusercontent.com/Haidar17ali/laravel-ui-standart/main/docs/CODING-STANDARD.md
- https://raw.githubusercontent.com/Haidar17ali/laravel-ui-standart/main/docs/ROUTE-CONTROLLER-CRUD.md

For UI work, also read the relevant docs listed in the shared AGENTS.md, especially Select2, delete confirmation, toast, and validation checklist.

If GitHub cannot be reached after one retry, stop before substantial changes and report the failure. Never claim to have read standards that were not fetched. Apply the standards, inspect this project's existing architecture, and run the relevant validation checklist before reporting completion.
```

## Important limitation
This protocol is an instruction, not a magical always-on connection. It works only if the Hermes runtime can access HTTPS and is configured to read project `AGENTS.md` files. The integration must be tested in the actual Hermes runtime. If Hermes does not automatically discover project instructions, configure its supported project/workspace instruction mechanism; do not assume this file alone changes its runtime behavior.

## Verification test
In a Laravel project, ask Hermes to:
1. Start a new task and state the shared raw files it fetched.
2. Make a small, non-destructive review of an existing CRUD flow.
3. Identify route parameter, controller signature, model binding, and Blade route argument consistency.
4. Check index edit button style, delete SweetAlert, and CRUD toast behavior.
5. Report what it could and could not verify.

Do not make production code changes during this verification-only test.
