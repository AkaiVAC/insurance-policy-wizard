# Insurance Policy Form Wizard

This web app has been developed, keeping in mind, the guidelines set down in the document provided along with the data.

The primary objectives of this application is to achieve the following:

-   Create a multi-step form (wizard) where user can fill in information, get price and buy an insurance policy.

The current solution tries to achieve the above goals in the best possible way within the available timeframe.

## Installation

To install this app locally, extract the project files to a directory of your choice and run the following commands to install all dependencies and start the app:

_Note_: The project uses PNPM as the package manager. You can get it using `npm i -g pnpm` command.

```bash
cd installation_directory
pnpm i
pnpm serve
```

## Building the app

```bash
pnpm build
```

## Running Tests

To run all unit tests in the project, use:

```bash
pnpm test:unit
```

To run the tests in watch mode, use:

```bash
pnpm test:watch
```

## Formatting

The following command formats all code using Prettier

```bash
pnpm format
```

## Linting

The following command runs the ESLint linter

```bash
pnpm lint
```

## Running Typechecks

The following command is used to run quick type checks

```bash
pnpm typecheck
```

## Tech Stack and File Structure

### Dependencies

The app uses the following dependencies for running and testing:

-   Vue 3 framework
-   Vite bundler
-   Pinia for State Management
-   Vitest for testing
-   Prettier for formatting
-   ESLint for linting

### Project Structure

```
project
│   vite.config.ts (Vite & Vitest configuration)
│   tsconfig.vitest.json       │
│   tsconfig.vite-config.json  │ (Typescript config)
│   tsconfig.json              │
│   README.md
│   package.json
│   pnpm-lock.yaml
│   index.html
│   .gitignore
│   .prettierignore
│   .prettierrc (Prettier configuration)
│   .eslintrc.cjs (ESLint configuration)
│
└───types
│   │   env.d.ts (Environment level typings)
│   │   index.d.ts (Global type declarations)
└───src
│   │   App.vue
│   │   main.ts
│   └─── utils (utility files and tests)
│   └─── stores (pinia stores and tests)
│   └─── components (all components and tests)
│   └─── assets (all base styles)
└───.vscode
    │   extensions.json
```

## Application Walkthrough

The application has been structured to enable future enhancements with minimal breaking changes needed.

### Stores

The pinia stores are where most of the application's logic resides. This is done to free up the components as much as possible to only be focused on presentation.

### Components

The components are also seperated into `lib` components and functional components. The lib components are built to be as generic as possible to make them easier to transfer between projects.

The functional components are in turn built composing multiple lib components.

### Utils

Any logic that doesn't fall under component or store logic falls under utility functions. All utilities included the word `Util` in the file name to easily identify them.

## Scope Reduction

The following features were excluded due to their scope and time constraints:

-   Unit tests were not added for `lib` components
-   `FormPage` label update functionality was not tested
