# Laravel Coding Standard

These conventions apply to all Laravel projects. First inspect the project's actual Laravel/PHP version and established architecture; use version-compatible APIs.

## Naming and structure
- Classes: PascalCase; methods and variables: camelCase; database tables: plural snake_case; columns: snake_case.
- Controllers use singular resource names plus `Controller` (for example, `ProductController`).
- Models use singular PascalCase (for example, `Product`).
- Route names use the existing project convention and remain consistent across index/create/store/show/edit/update/destroy.
- Keep controllers focused. Use Form Requests, policies, services, actions, jobs, or events when justified by project complexity and existing patterns; do not create unnecessary abstraction layers.
- Avoid duplicated business logic. Reuse existing model scopes, relationships, services, and components.

## Request validation and persistence
- Validate all input server-side. Prefer a dedicated Form Request for complex or reusable validation; simple validation may use `$request->validate()`.
- Use only validated data for persistence: `$validated = $request->validated()` or `$request->validate(...)`.
- Do not mass-assign untrusted request data. Confirm model `$fillable` / `$guarded` rules.
- Use database transactions for logically atomic multi-write operations.
- Handle not-found, authorization, and validation failures using Laravel conventions.
- Do not swallow exceptions or return success when persistence failed.

## Eloquent and database
- Use Eloquent relationships instead of hand-built joins when they clearly express the domain; use query builder when appropriate.
- Avoid N+1 queries with deliberate eager loading.
- Use migrations for schema changes; never modify production schema manually as a substitute for a migration.
- Respect existing primary keys, foreign keys, soft deletes, casts, scopes, and database engine compatibility.
- Do not assume every primary key is `id`; inspect the model and schema.

## Consistency and correctness
- A route parameter, controller argument, bound model, and Blade route argument must refer to the same resource and key.
- Prefer implicit route model binding for standard resource CRUD where compatible with existing routes and keys.
- If custom keys or explicit binding are used, configure and apply them consistently.
- Use named routes rather than hard-coded URLs where the project uses named routes.
- Keep HTTP methods correct: GET for read-only pages; POST for create; PUT/PATCH for update; DELETE for delete. Never mutate state through GET.
- Keep authorization checks in policies, gates, middleware, or controller authorization methods.

## Responses
- Follow the project's established redirect, JSON API, and error response conventions.
- Flash success only after the operation succeeds.
- Use appropriate HTTP status codes for APIs.
- Avoid exposing stack traces, SQL, secrets, or internal exception details to users.

## Quality
- Add/update tests for behavior changes when practical.
- Run targeted tests, formatter, static analysis, and build checks that exist in the project.
- Do not run destructive commands or migrations against production without explicit authorization.
