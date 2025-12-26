# RCCG Grace Tabernacle - Development Standards

## Code Style & Formatting

### ESLint & Prettier
- **ESLint**: Enforces code quality and consistency
- **Prettier**: Handles code formatting automatically
- Run `npm run lint` before commits
- Run `npm run format` to auto-format code

### Import Organization
```typescript
// 1. Node modules
import React from 'react'
import { NextPage } from 'next'

// 2. Internal modules (alphabetical)
import { Button } from '@/components/ui'
import { useAuth } from '@/hooks'
import { ApiService } from '@/services'
```

## File & Folder Conventions

### Naming
- **Components**: PascalCase (`UserProfile.tsx`)
- **Hooks**: camelCase with 'use' prefix (`useAuth.ts`)
- **Utils**: camelCase (`formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS.ts`)
- **Types**: PascalCase (`UserTypes.ts`)

### Component Structure
```typescript
// ComponentName.tsx
interface ComponentNameProps {
  // Props definition
}

const ComponentName: React.FC<ComponentNameProps> = ({ prop }) => {
  // Component logic
  return <div>{/* JSX */}</div>
}

export default ComponentName
```

### Folder Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Next.js pages
├── hooks/         # Custom React hooks
├── services/      # API and external services
├── utils/         # Helper functions
├── types/         # TypeScript type definitions
├── constants/     # Application constants
├── config/        # Configuration files
└── styles/        # Global styles
```

## TypeScript Standards

### Type Definitions
- Use interfaces for object shapes
- Use type aliases for unions/primitives
- Export types from dedicated files
- Use strict TypeScript settings

### Error Handling
```typescript
// Use Result pattern for API calls
type Result<T> = {
  success: true
  data: T
} | {
  success: false
  error: string
}
```

## Performance Guidelines

### Next.js Optimization
- Use `next/image` for all images
- Implement proper SEO meta tags
- Use dynamic imports for code splitting
- Optimize bundle size with tree shaking

### React Best Practices
- Use React.memo for expensive components
- Implement proper key props in lists
- Avoid inline functions in render
- Use useCallback/useMemo appropriately

## Git Workflow

### Commit Messages
```
feat: add user authentication
fix: resolve navigation bug
docs: update API documentation
style: format code with prettier
refactor: optimize component structure
```

### Branch Naming
- `feature/user-authentication`
- `bugfix/navigation-issue`
- `hotfix/critical-security-patch`

## Code Quality Checklist

Before submitting code:
- [ ] ESLint passes without errors
- [ ] Prettier formatting applied
- [ ] TypeScript compilation successful
- [ ] No console.log statements in production code
- [ ] Proper error handling implemented
- [ ] Component props properly typed
- [ ] Accessibility considerations addressed