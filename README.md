# Documentation Websites

## Development

### Getting Started

```bash
>>> git clone https://github.com/vintach/websites.git

>>> cd websites

>>> pnpm install
```

### Useful Commands

- `pnpm build` - Build all packages and apps
- `pnpm dev` - Run all apps locally
- `pnpm format:check` - Check if your files are formatted
- `pnpm format:write` - Format all files
- `pnpm lint` - Lint all packages
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

## Apps and Packages

This monorepo includes the following packages and applications:

- `apps/raddix`: Documentation website for raddix
- `packages/vintex`: React component library shared by applications
- `packages/tsconfig`: Shared `tsconfig.json`s used throughout the Turborepo
- `packages/tailwind-config`: ESLint shared config
