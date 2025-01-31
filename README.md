# Node.js TypeScript Backend

This is a bare framework setup for a Node.js backend using TypeScript. The project includes Prettier, ESLint, commit message guards, and database connection setup.

## Features

- **TypeScript** for static typing and better developer experience.
- **ESLint & Prettier** for code linting and formatting.
- **Husky & Commitlint** to enforce commit message conventions.
- **Nodemon** for hot-reloading in development.
- **Cross-env** for handling environment variables across platforms.

## Installation

Clone the repository and install dependencies:

```sh
npm install
```

Create your .env file from the .env.example and update accordingly

## Scripts

### Development

```sh
npm run dev
```

Starts the server in development mode using `nodemon`.

### Production

```sh
npm run start
```

Builds the project and starts the server in production mode.

### Linting & Formatting

```sh
npm run lint        # Run ESLint
npm run lint:fix    # Fix ESLint errors
npm run format:check # Check Prettier formatting
npm run format:fix  # Fix Prettier formatting
```

### Pre-commit & Commit Message Guards

- **Husky** is used to enforce pre-commit and commit message rules.
- **Commitlint** ensures commit messages follow conventional standards.