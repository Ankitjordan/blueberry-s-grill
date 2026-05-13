# Code Writing Style Rules

## 1. General Principles

- Write clean, readable, and maintainable code.
- Follow consistent structure across the entire project.
- Avoid unnecessary complexity.
- Prefer clarity over cleverness.

---

## 2. No Inline Comments Rule

- ❌ Do NOT use inline comments in `.tsx` files.
- ❌ Do NOT use `//` or `/* */` inside components.
- Code should be self-explanatory through proper naming.

---

## 3. Naming Conventions

### Components

- Use **PascalCase**
- Example:
  - `MenuCard.tsx`
  - `HeroSection.tsx`

---

### Functions

- Use **camelCase**
- Function names must clearly describe the action
- Examples:
  - `getMenuItems`
  - `handleAddToCart`

---

### Variables

- Use **camelCase**
- Use meaningful names (no `x`, `data`, `temp`)
- Examples:
  - `menuItems`
  - `totalPrice`

---

### Constants

- Use **UPPER_CASE**
- Examples:
  - `MAX_ITEMS`
  - `API_URL`

---

## 5. Component Structure

Each component should follow this order:

1. Imports
2. Constants (if any)
3. Component definition
4. Export

Example structure:

```tsx
import ...

const CONSTANT = ...

function ComponentName() {
  return (...)
}

export default ComponentName
```

---

## 6. Function Rules

- Functions should do **one thing only**
- Avoid large functions
- Break logic into smaller reusable functions

---

## 7. Formatting Rules

- Use consistent indentation (2 spaces or 4 spaces)
- Always use semicolons
- Keep line length reasonable
- Use proper spacing between blocks

---

## 8. JSX Rules

- Keep JSX clean and minimal
- Avoid deeply nested JSX
- Extract complex UI into smaller components

---

## 11. Reusability

- Reuse components whenever possible
- Avoid duplication of logic
