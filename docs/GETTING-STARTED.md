---
title: Getting Started
---

<link rel="stylesheet" href="{{ '/assets/site.css' | relative_url }}">
{% include nav.html %}

# Getting Started

## 1) Install
```bash
npm i -D eslint eslint-plugin-featurefence web-features browserslist
2) Configure (ESLint flat config)
Create eslint.config.mjs:

js
Copy code
import featurefence from "eslint-plugin-featurefence";

export default [
  {
    languageOptions: { ecmaVersion: 2022, sourceType: "module" },
    plugins: { featurefence },
    rules: {
      "featurefence/no-unsupported-feature": ["warn", {
        mode: "baseline-or-targets",
        targets: [">=0.5%", "last 2 versions", "not dead"]
      }]
    }
  }
];
Options
mode: "baseline-only" or "baseline-or-targets" (default)

targets: Browserslist array (used for future extensions)

3) Run
bash
Copy code
npx eslint "src/**/*.{js,jsx,ts,tsx}"
CI Example (GitHub Actions)
yaml
Copy code
name: lint
on: [push, pull_request]
jobs:
  eslint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npx eslint "src/**/*.{js,jsx,ts,tsx}"
Uninstall
bash
Copy code
npm remove eslint-plugin-featurefence