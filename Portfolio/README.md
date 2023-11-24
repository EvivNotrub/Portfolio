# React + Vite

# Prettier vs. EsLint

.eslintrc.cjs should have as last plugin in extends : 'prettier'
Run command below to check for conflicts:
npx eslint-config-prettier ./src/main.jsx
