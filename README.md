# RCCG Grace Tabernacle Website

Enterprise-grade Next.js application built with TypeScript and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Development Commands

```bash
npm run lint          # Run ESLint
npm run lint:fix      # Fix ESLint issues
npm run format        # Format code with Prettier
npm run format:check  # Check formatting
npm run type-check    # TypeScript type checking
```

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Next.js pages (Pages Router)
├── hooks/           # Custom React hooks
├── services/        # API and external services
├── utils/           # Helper functions
├── types/           # TypeScript definitions
├── constants/       # Application constants
├── config/          # Configuration files
└── styles/          # Global styles
```

## Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint + Prettier
- **Package Manager**: npm

## Development Standards

See [Development Standards](./docs/DEVELOPMENT_STANDARDS.md) for detailed coding conventions and best practices.

## Enterprise Features

- ✅ TypeScript strict mode
- ✅ ESLint + Prettier integration
- ✅ Path aliases configured
- ✅ Enterprise folder structure
- ✅ VS Code workspace settings
- ✅ Comprehensive documentation