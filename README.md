# Vite, Vue 3, Vuetify 2, Pinia 2, Typescript Starter Template

## Features

- `Vue 2.7` + `Vuetify`, `Typescript`,
- `Vite` for the frontend build tooling, instead of Vue Cli
- Using `Composition API` syntax from Vue 2(see the official [Script Setup documentation](https://v3.vuejs.org/api/composition-api.html))
- Pulling up API requests using `axios`
- `Eslint` for code styling
- // Unit tests with Vitest and Vue test utils
- // Cypress.io e2e tests (configured similarly to `vue-cli`)
- // Cypress.io component tests

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

# Getting Started

## Prerequities
### Yarn
```
npm install --global yarn
```
### Typescript
```
yarn global add typescript
```

## Build, run, lint
### Install dependencies
```
yarn install
```
  ```bash
  # Using npm
  npm install

  # Using Yarn
  yarn
  ```

### Compile and Hot-Reload for Development

  ```bash
  # Using npm
  npm run dev

  # Using Yarn
  yarn dev
  ```

### Type-Check, Compile and Minify for Production

  ```sh
  # Using npm
  npm run build

  # Using Yarn
  yarn build
  ```

### Run Unit Tests with [Vitest](https://vitest.dev/)

  ```sh
  # Using npm
  npm run test:unit

  # Using Yarn
  yarn test:unit
  ```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

  ```sh
  # Using npm
  npm run build
  npm run test:e2e # or `npm run test:e2e:ci` for headless testing

  # Using Yarn
  yarn build
  yarn test:e2e
  ```

### Lint with [ESLint](https://eslint.org/)

```sh
  # Using npm
  npm run lint

  # Using Yarn
  yarn lint
```
