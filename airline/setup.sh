#!/usr/bin/env bash

set -e

# APP_NAME=$1
#
# if [ -z "$APP_NAME" ]; then
#   echo "❌ Usage: ./setup.sh my-app"
#   exit 1
# fi

########################################
# 1️⃣ Create project if not exists
########################################

# if [ ! -d "$APP_NAME" ]; then
#   echo "🚀 Creating Vite + React + TS project..."
#   bun create vite "$APP_NAME" --template react-ts
# else
#   echo "📁 Project already exists. Skipping creation."
# fi
#
# cd "$APP_NAME"

########################################
# 2️⃣ Install base deps
########################################

echo "📦 Installing base dependencies..."
bun install

########################################
# 3️⃣ Tailwind v4
########################################

if ! bun pm ls | grep -q tailwindcss; then
  echo "🎨 Installing Tailwind v4..."
  bun add -D tailwindcss @tailwindcss/postcss
else
  echo "🎨 Tailwind already installed."
fi

if [ ! -f postcss.config.js ]; then
cat <<EOF > postcss.config.js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}
EOF
fi

if ! grep -q 'tailwindcss' src/index.css 2>/dev/null; then
cat <<EOF > src/index.css
@import "tailwindcss";
EOF
fi

########################################
# 4️⃣ ESLint
########################################

if [ ! -f eslint.config.js ]; then
  echo "🧹 Setting up ESLint..."
  bun add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react-hooks eslint-plugin-react-refresh

cat <<EOF > eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
EOF
else
  echo "🧹 ESLint already configured."
fi

########################################
# 5️⃣ Prettier
########################################

if [ ! -f .prettierrc ]; then
  echo "💅 Adding Prettier..."
  bun add -D prettier

cat <<EOF > .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all"
}
EOF
fi

########################################
# 6️⃣ Vitest
########################################

if ! bun pm ls | grep -q vitest; then
  echo "🧪 Installing Vitest..."
  bun add -D vitest @testing-library/react @testing-library/jest-dom jsdom @vitest/coverage-v8
fi

if ! grep -q "vitest" vite.config.ts; then
cat <<EOF > vite.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  },
})
EOF
fi

mkdir -p src/test

if [ ! -f src/test/setup.ts ]; then
cat <<EOF > src/test/setup.ts
import '@testing-library/jest-dom'
EOF
fi

########################################
# 7️⃣ TypeScript config (base + app + test)
########################################

if [ ! -f tsconfig.base.json ]; then
  echo "📝 Setting up shared tsconfig..."
cat <<EOF > tsconfig.base.json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  }
}
EOF
fi

cat <<EOF > tsconfig.app.json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "types": ["vite/client"]
  },
  "include": ["src"],
  "exclude": ["src/**/*.test.ts", "src/**/*.test.tsx", "src/test"]
}
EOF

cat <<EOF > tsconfig.test.json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.test.tsbuildinfo",
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  },
  "include": ["src/**/*.test.ts", "src/**/*.test.tsx", "src/test"]
}
EOF

cat <<EOF > tsconfig.json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" },
    { "path": "./tsconfig.test.json" }
  ]
}
EOF


########################################
# 8️⃣ Husky
########################################

if [ ! -d .husky ]; then
  echo "🪝 Setting up Husky..."
  bun add -D husky lint-staged
  bunx husky init
fi

if [ ! -f .husky/pre-commit ]; then
cat <<EOF > .husky/pre-commit
bunx lint-staged
EOF
chmod +x .husky/pre-commit
fi

########################################
# 9️⃣ Add scripts safely
########################################

if ! grep -q '"test"' package.json; then
  bunx --bun jq '.scripts.test="vitest"' package.json > tmp && mv tmp package.json
fi

if ! grep -q '"coverage"' package.json; then
  bunx --bun jq '.scripts.coverage="vitest run --coverage"' package.json > tmp && mv tmp package.json
fi

if ! grep -q '"lint-staged"' package.json; then
  bunx --bun jq '.["lint-staged"]={"*.{ts,tsx}":["eslint --fix","prettier --write"]}' package.json > tmp && mv tmp package.json
fi

echo ""
echo "✅ Idempotent setup complete!"
echo "Run:"
echo "cd $APP_NAME"
echo "bun run dev"
echo ""
