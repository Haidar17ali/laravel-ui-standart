# Laravel Work Validation Checklist

Use this checklist before reporting any Laravel task complete. Mark only checks actually performed.

## Shared standards
- [ ] Latest shared standards fetched directly from GitHub `main` for this task.
- [ ] Project-specific instructions and architecture inspected.
- [ ] Deviations from shared standards documented with reasons.

## Backend and CRUD (when applicable)
- [ ] Route names, URI parameters, HTTP methods, and middleware verified.
- [ ] Controller signatures and model binding match route parameters.
- [ ] Model primary keys/custom route keys and relationships verified against code/schema.
- [ ] Blade/API callers pass the correct resource identifier.
- [ ] Store/update use validated input only.
- [ ] Authorization is enforced server-side.
- [ ] Delete/update do not use GET.
- [ ] Transactions and data integrity handled where required.
- [ ] Relevant automated tests run, or limitation stated.

## UI (when applicable)
- [ ] Index Edit action uses green success styling (`btn-success` in Bootstrap).
- [ ] Delete action uses danger styling and SweetAlert2 confirmation.
- [ ] SweetAlert2 submits only after explicit confirmation.
- [ ] Create, update, and delete success responses show a toast after server success.
- [ ] Failures and validation errors remain visible and useful.
- [ ] Searchable selects use Select2 with a theme compatible with the installed Bootstrap version.
- [ ] Select2 works in modals/dynamic content where relevant.
- [ ] Existing dependencies are reused; no duplicate framework/plugin copies added.
- [ ] Responsive layout, labels, focus, and accessible control names checked.

## Verification and report
- [ ] Relevant tests/build/formatter/static checks run and results recorded.
- [ ] Browser/runtime behavior verified where available; unverified behavior explicitly identified.
- [ ] No secrets or debug details exposed.
- [ ] Final report lists changed files, verification results, and remaining risks.
