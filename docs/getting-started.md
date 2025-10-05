---
title: Getting Started
---

<link rel="stylesheet" href="{{ '/assets/site.css' | absolute_url }}">
{% include nav.html %}

# Getting Started

## 1) Install
```bash
npm i -D eslint eslint-plugin-featurefence web-features browserslist
2) Configure (ESLint flat config)
Create eslint.config.mjs:

js
Copy code
// eslint.config.mjs
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

targets: Browserslist array (accepted for per-target checks)

3) Run ESLint
bash
Copy code
npx eslint "src/**/*.{js,jsx,ts,tsx}"
4) CI Example (GitHub Actions)
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
        with:
          node-version: '20'
      - run: npm ci
      - run: npx eslint "src/**/*.{js,jsx,ts,tsx}"
5) Uninstall
bash
Copy code
npm remove eslint-plugin-featurefence
yaml
Copy code

---

⚠️ Important: notice how each code block is opened with three backticks **and closed with three backticks**. That’s the main fix you were missing.  

👉 If you copy this as-is, your page will render perfectly:  
- Headings (`##`) look correct  
- Code blocks are highlighted  
- CSS and nav are included  

Would you like me to now do the **same cleanup for your `index.md`, `examples.md`, and `faq.md`** so none of them break like this?






