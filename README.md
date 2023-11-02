# PawPrint

Fetch wonderful pictures of cute doggos 🐶🐶🐶

## Table of Contents

- [Installation](#installation)
- [Running the App](#running-the-app)
  - [Development Mode](#development-mode)
  - [Production Build](#production-build)
- [Testing](#testing)
  - [Unit](#unit)
  - [End to End](#end-to-end)

## Installation

1. Clone the repository:

```bash
git clone git@github.com:pxlmvr/deliveristo-technical-assessment.git
```

2. Install dependencies:

```bash
cd deliveristo-technical-assessment
npm install
```

## Running the app

### Development Mode

To run the app in development mode:

```bash
   npm run dev
```

### Production Build

To create a production build of the app:

```bash
   npm run build
```

This will generate an optimized build in the `build` directory.

## Testing

### Unit

We use Jest for running unit tests. To execute unit tests:

```bash
npm run test
```

### End to End

We use Cypress for End to end testing. To run e2e tests in headless mode:

```bash
npm run e2e:headless
```

Alternatively if you want to run tests through Cypress' UI run:

```bash
npm run e2e
```
