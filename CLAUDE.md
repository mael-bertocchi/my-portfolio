# Claude Code Instructions

These guidelines apply to the entire project.

- This repository holds the personal portfolio, a web frontend only: React, TypeScript, Vite, Tailwind CSS v4, React Router and i18next.
- Run `npm run lint` and `npm run build` before committing; both must pass.

## Project structure

- `src/components`: shared components (navigation, footer, section heading, tags, icons).
- `src/pages`: one folder per route, with the home page sections in `src/pages/home/sections`.
- `src/data/portfolio.tsx`: static content and its interfaces (navigation, experience, education, projects).
- `src/locales/{fr,en}.json`: every displayed text, in French (default) and English. Keep both files in sync.
- `src/models.tsx`: shared utility types (`Maybe<T>`, `Perhaps<T>`).
- `src/styles/index.css`: Tailwind theme (brand colors, fonts) and custom utilities.
- `public`: favicons, logos, profile picture, and the CV PDFs in `public/files` (generated elsewhere, do not edit).
- Use the path aliases from `vite.config.ts` (`@/`, `@components/`, `@pages/`, `@utils/`, `@locales/`) rather than relative imports.

## Documentation comments

Use the project's JSDoc/Doxygen hybrid style for constants, interfaces, types, classes, and functions, including React components and the functions declared inside them.

### Requirements

- Use a `/** ... */` documentation block.
- Include the appropriate tag:
  - `@constant` for constants
  - `@interface` for interfaces
  - `@type` for type definitions
  - `@class` for classes
  - `@method` for methods
  - `@function` for functions and React components
- Include `@description` in every documentation block.
- Document function parameters with `@param {Type} name Description`.
- Document interface and object properties with inline comments in this format:
  `/*!< Comment text */`

### Example

```typescript
/**
 * @interface NavigationItem
 * @description Represents a link of the navigation bar
 */
export interface NavigationItem {
    id: string; /*!< Identifier of the targeted section */
}
```

### No other comments

- Write no comment other than the documentation blocks `/** ... */` and the property comments `/*!< ... */`.
- Do not write `//` or `/* */` comments, inside or outside function bodies.
- When code needs an explanation, put it in the `@description` of the documented function or constant, or move the code into a named and documented function or constant.

## Coding standards

### Types and nullability

- Use `interface` for data structures.
- Use `Maybe<T>` for nullable values (`T | null`).
- Use `Perhaps<T>` for optional values (`T | undefined`).

### Type safety

- Do not use TypeScript type assertions with `as`.
- Use schema validation or type guards to narrow types (see `isLanguage` and `isStringArray`).
- Use `unknown` only when a cast is unavoidable and no safer alternative exists.

### Control flow

- Prefer early returns and guard clauses to reduce nesting.
- Always use braces for `if` and `else` blocks, even when the block contains only one statement.

```typescript
// Bad
if (x) return;
if (x) { return; }

// Good
if (x) {
    return;
}
```

### Functions

- Always specify an explicit return type, such as `: void`, `: JSX.Element` or `: Maybe<JSX.Element>`, including on arrow functions, `map` callbacks and effect callbacks.

### Line breaks

- Keep each expression and each list on one line, whatever its length: ternaries, boolean and arithmetic expressions, method chains, call arguments, parameters, type arguments and unions, and import and export lists.
- Only the inside of an object literal, an array literal, a function body or a JSX element may span several lines, and a line may break only right after the `{`, `[` or `(` that opens one of them.
- When a line would be hard to read, move its parts into named constants or functions instead of breaking it.

```typescript
// Bad
const label: string = isActive
    ? 'Active'
    : 'Inactive';
const total: number = items
    .filter(isVisible)
    .reduce(sum, 0);

// Good
const label: string = isActive ? 'Active' : 'Inactive';
const total: number = items.filter(isVisible).reduce(sum, 0);
```

### HTML and JSX

- Keep each tag on one line with all its attributes, whatever their number or the line's length.
- When an attribute's value would span several lines (a callback with a body, a block of JSX, a long conditional class list), move it out of the tag into a named function or constant, so the tag stays on one line.

```tsx
// Bad
<a
    href={`#${item.id}`}
    onClick={() => {
        closeMenu();
        track(item.id);
    }}
>

// Good
<a href={`#${item.id}`} onClick={followLink}>
```

## Design

- Keep the site light and clear: no dark theme.
- Use the brand colors and utilities from `src/styles/index.css` (`text-gradient`, `bg-gradient-brand`, `card-surface`) rather than new colors.
- No vanity figures (years of experience, project counts) and no status badges in the hero.

## Commit and push workflow

When pending changes are ready, use the following workflow:

1. Group changes by intent, not by file.
2. Squash changes that are too small to stand alone into the related commit.
3. Create a commit using Conventional Commits, matching the style already used in the repository:
   - Use a lowercase description.
   - Use an optional scope in parentheses.
   - Keep the message to exactly one line.
   - Do not add a body, co-author trailer, or tool-attribution trailer.
4. Do not open pull requests: changes go directly to `main`.
5. Do not push. Push only when the user explicitly asks for it in the current conversation; otherwise, once committed, stop and ask.

### Version bumps

Create the version bump in a separate commit. Determine the version change using SemVer:

- Bug fix: patch version
- New capability: minor version
- Breaking change: major version

Update `package.json` and `package-lock.json` together. Use this commit format:

```text
chore: bump version to X.Y.Z
```
