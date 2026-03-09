# TDG Configuration

## Project Information
- Language: TypeScript
- Framework: React 19 + Vite 7
- Test Framework: Vitest 4 + @testing-library/react

## Build Command
bun run build

## Test Command
bun run test

## Single Test Command
bunx vitest run --reporter=verbose {testFile}

## Type Check Command
bunx tsc --noEmit

## Coverage Command
bun run coverage

## Test File Patterns
- Test files: *.test.ts, *.test.tsx
- Test directory: src/ (co-located with source files)
