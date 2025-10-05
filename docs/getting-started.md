## 1) Install
```bash
npm i -D eslint eslint-plugin-featurefence web-features browserslist
```   

## 2) Configure (ESLint flat config)
Create `eslint.config.mjs`:

```js
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
```   

## 3) Run ESLint
```bash
npx eslint "src/**/*.{js,jsx,ts,tsx}"
```   

## 4) CI Example (GitHub Actions)
```yaml
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
```   

## 5) Uninstall
```bash
npm remove eslint-plugin-featurefence
```   
