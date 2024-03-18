# Portfolio
Portfolio made at the end of the Open Classrooms program.

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

# gh-pages dependency, Deployment & Caveats:

previous commit 762f7b7c15f7b7fe920f452c37b4a76e1985a339 had an older version with readme indications and tutorial followed.

Changes made after some reading of vite documentation, different script in package.json indicate now the base required (/ or /Portfolio/), and "basename" for Router gets the value import.meta.env.BASE_URL => it works in both development and two build options: local and gh-pages.
in script predeploy: "&& cp ./dist/index.html ./dist/404.html" is neaded since refreshing the page on gh-pages gives you a 404 message.
in case of problems deploying: commit sha e1f41d1cca39d9f92591ffa9d45b56d7fe9cbd72

