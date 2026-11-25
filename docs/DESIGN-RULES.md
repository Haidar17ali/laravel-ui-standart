# Design Rules — Clean Professional

## 1. Layout

- Use one consistent application shell: navigation, page container, page title, optional breadcrumbs, content, and footer.
- Keep page titles concise and place the main page action in a predictable location.
- Use the project's existing Blade layout and component conventions.
- Use Bootstrap 5 grid/container utilities only if Bootstrap 5 is already the project's framework.
- Avoid nesting cards inside cards unless there is a clear information-grouping need.

## 2. Typography and spacing

- Use the existing theme font. Prefer a small, consistent type scale.
- Keep labels and helper text readable; do not use tiny text for important information.
- Use consistent spacing utilities such as `mb-3`, `gap-2`, and `p-3`.
- Avoid arbitrary one-off margins and excessive uppercase text.

## 3. Colors and states

- Use the project's semantic theme colors: primary, secondary, success, warning, danger, and info.
- Status must include text or an icon in addition to color.
- Use danger styling for destructive actions, not ordinary navigation.
- Ensure adequate contrast and visible keyboard focus.

## 4. Buttons and actions

- Use clear action labels such as **Simpan**, **Perbarui**, **Batal**, and **Hapus**.
- Use one primary action per form or primary workflow area.
- Group related secondary actions; avoid multiple competing primary buttons.
- Disable or show a loading state during an in-flight submission where practical to prevent duplicate requests.

## 5. Forms

- Prefer a consistent vertical form layout.
- Every input must have a visible associated label.
- Use helper text only when it adds useful context.
- Show Laravel validation errors adjacent to the relevant field.
- Keep required/optional status clear.
- Use input groups only when the prefix/suffix is meaningful.

## 6. Tables and lists

- Use clear column headings and consistent alignment.
- Right-align numeric values where appropriate.
- Keep row actions predictable and avoid overcrowding.
- Wrap wide tables in `.table-responsive` when using Bootstrap.
- Provide useful empty states and loading states.
- Do not hide critical information solely behind hover interactions.

## 7. Responsive behavior

- Test narrow mobile widths, tablet, and desktop.
- Stack form columns on small screens.
- Allow action groups to wrap.
- Ensure modals and dropdowns fit within the viewport.
- Avoid fixed widths unless required by a specific device or print layout.

## 8. Accessibility

- Use semantic HTML and proper heading order.
- Associate labels with controls.
- Ensure keyboard operation and visible focus.
- Give icon-only buttons an accessible name.
- Use `aria-live` for dynamic feedback where appropriate.
- Do not rely on color alone to communicate validation or status.

## 9. Compatibility first

Before adding styles or scripts, inspect the project's Bootstrap/theme version, AdminLTE version, asset bundler, and existing components. These guidelines define visual behavior, not permission to replace the project's stack.
