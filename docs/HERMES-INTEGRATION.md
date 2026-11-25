# Hermes Integration Guide

## Important: a standards repository is not loaded automatically

Hermes only follows instructions it can discover in its active workspace/project context. Merely creating this GitHub repository does not guarantee that Hermes reads it for every Laravel project.

## Recommended setup

1. Clone this repository to a stable local path available to Hermes, for example:
   `~/shared/laravel-ui-standart`.
2. In each Laravel project's root `AGENTS.md`, add a short reference instruction that tells Hermes to read:
   - `~/shared/laravel-ui-standart/AGENTS.md`
   - the relevant documents under `~/shared/laravel-ui-standart/docs/`
3. If the standards repository is unavailable at that path, Hermes must ask for its location or clone it; it must not pretend it has read it.
4. When standards change, update the local clone with `git pull`.

## Suggested project-root AGENTS.md block

Append this to the existing project `AGENTS.md`; do not overwrite project-specific instructions:

```md
## Shared Laravel UI Standard

Before creating, editing, or refactoring any UI, read the shared standards:
- ~/shared/laravel-ui-standart/AGENTS.md
- ~/shared/laravel-ui-standart/docs/DESIGN-RULES.md
- The relevant FORM, SELECT2, DELETE, and TOAST guideline files.

Treat these as the shared UI baseline. Preserve this project's existing framework versions, dependencies, architecture, routes, and business logic. Do not install or replace frontend dependencies without checking compatibility and obtaining approval where appropriate.
```

Change the local path in the snippet if the repository is cloned somewhere else.

## Updating the standards

From the standards repository directory:

```bash
git pull origin main
```

To update a project's local instructions, edit its existing `AGENTS.md` carefully and preserve all existing project-specific guidance.
