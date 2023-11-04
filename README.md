# PawPrint

Fetch wonderful pictures of cute doggos 🐶🐶🐶.

This project is built using [Vite](https://vitejs.dev/) and uses [React](https://react.dev/) and [Typescript](https://www.typescriptlang.org/).
You can see it live on [https://paw-print.netlify.app/](https://paw-print.netlify.app/).

## Table of Contents

- [Installation](#installation)
- [Running the App](#running-the-app)
  - [Development Mode](#development-mode)
  - [Production Build](#production-build)
- [Testing](#testing)
  - [Unit](#unit)
  - [End to End](#end-to-end)
- [Known issues](#known-issues)

## Installation

1. Clone the repository:

```bash
git clone git@github.com:pxlmvr/pawprint.git
```

2. Install dependencies:

```bash
cd pawprint
npm install
```

## Running the app

### Development Mode

To run the app in development mode:

```bash
npm run dev
```

By default views are on [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

### Production Build

To create a production build of the app:

```bash
npm run build
```

This will generate an optimized build in the `dist` directory.

## Testing

### Unit

We use Jest for running unit tests. To execute unit tests:

```bash
npm run test
```

### End to End

We use Cypress for End to end testing. To run e2e tests in headless mode:

```bash
npm run dev
npm run e2e:headless
```

Note: this command assumes you have Chrome installed on your machine.

Alternatively if you want to run tests through Cypress' UI run:

```bash
npm run dev
npm run e2e
```

## Known issues

If you are running node v.20.6.0 you could run into the following error while running the app in development mode:

```bash
[plugin:vite:react-babel] Cannot redefine property: File
```

It's recommended to use the latest lts version of node to get rid of the issue.
