# React + Vite

# Prettier vs. EsLint

.eslintrc.cjs should have as the last plugin in extends : 'prettier'
Run command below to check for conflicts:

- `npx eslint-config-prettier ./src/main.jsx`

# Dev environnement

## Installation

- `yarn install`

## Lancement de l'application en mode dev

- `yarn dev`

## Tests

- `yarn test`

Info: use `screen.debug()` in test will print the state of the DOM tree, pass a node as argument to change output.

## Build and deploy for github pages:

This will add /Portfolio/ to the base path when build
/!\ ----> run build after that for / basepath and be able to use preview or other deployment <------- /!\

- `yarn deploy` // validate ssh // -`yarn build`

## Normal/Local Build & Serve:

- `yarn build`
- `yarn preview`

## Format code with prettier then EsLint:

- `yarn format`
