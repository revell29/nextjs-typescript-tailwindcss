<div align="center">
  <h1>🚀 ts-nextjs-tailwind-starter</h1>
  <p>Next.js + Tailwind CSS + TypeScript</p>
</div>

## Features

- Next.js 12
- React 18
- TypeScript
- Tailwind CSS 3 — Configured with CSS Variables to extend the **primary** color
- Jest — Configured for unit testing
- Absolute Import and Path Alias — Import components using `@/` prefix
- ESLint — Find and fix problems in your code, also will **auto sort** your imports
- Prettier — Format your code consistently
- Husky & Lint Staged — Run scripts on your staged files before they are committed
- Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- Release Please — Generate your changelog by activating the `release-please` workflow
- Github Actions — Lint your code on PR
- Automatic Branch and Issue Autolink — Branch will be automatically created on issue **assign**, and auto linked on PR
- Snippets — A collection of useful snippets
- Site Map — Automatically generate sitemap.xml
- React Query
- Zustand - A small, fast and scalable bearbones state-management solution using simplified flux principles.

## Getting Started

### 1. Clone this repository

### 2. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn install
```

### 3. Run the development server

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.

### 4. Commit Message Convention

This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.
