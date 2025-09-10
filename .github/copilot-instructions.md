---
applyTo: '**'
---

# Project general coding standards

## Naming Conventions

- Use PascalCase for component names, interfaces, and type aliases
- Use camelCase for variables, functions, and methods
- Prefix private class members with underscore (\_)
- Use ALL_CAPS for constants

## Error Handling

- Use try/catch blocks for async operations
- Implement proper error boundaries in React components
- Always log errors with contextual information

## Design System

- Use shadcn with Tailwind CSS for UI components
- Use theme tokens for colors, spacing, and typography to support multiple themes including light and dark modes

## Translations

- Add translations to messages/\*.json files for i18n support and then use them in the codebase with the `t` function from `next-intl` `useTranslations` hook
