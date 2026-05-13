# Next.js Component Folder Structure Rule

To maintain a clean, scalable, and maintainable codebase, all components must strictly follow these folder structure guidelines. **Do not** write large, monolithic components inside `page.tsx`. Instead, decompose your UI into respective components based on their scope and reusability.

## 1. Global / Reusable UI Components
Components that are generic, highly reusable, or form the core design system of the application (e.g., generic Buttons, Navbars, Inputs, Modals) should be placed in the global components directory.

- **Path:** `src/components/ui/`
- **Example:** `src/components/ui/button.tsx`, `src/components/ui/card.tsx`

## 2. Local / Feature-Specific Components
Components that are specifically tied to a single route group or feature (e.g., a Hero section for the marketing page, a specific data table for a dashboard) should be placed in a local `components` folder within that route group.

- **Path:** `src/app/(feature_name)/components/`
- **Example:** `src/app/(marketing)/components/HeroNavbar.tsx`, `src/app/(dashboard)/components/SalesChart.tsx`

### 2.1 logical grouping of components
When a local feature consists of multiple sub-components (e.g., a Hero section that includes a Navbar, Content, and Footer), they should be grouped within a logical subdirectory inside the local `components` folder to keep the directory organized.

- **Path:** `src/app/(feature_name)/components/(section_name)/`
- **Example:** `src/app/(marketing)/components/hero/HeroNavbar.tsx`, `src/app/(marketing)/components/hero/HeroFooter.tsx`

## 3. Page Composition (`page.tsx`)
A `page.tsx` file should minimalistically act as an entry layout. It should primarily be responsible for fetching data (if server-side) and assembling various local and global components together rather than containing the raw JSX/CSS implementations for the layout itself.

### Summary
*   If a component will be used across multiple different pages -> `src/components/ui/`
*   If a component is unique to one specific route/page -> `src/app/(route_name)/components/`
