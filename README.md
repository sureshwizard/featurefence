FeatureFence

A Baseline-powered ESLint plugin that fences off unsupported web features before they break your users’ browsers.


📖 Overview

Modern web APIs are powerful — but they don’t always work across browsers. Teams often discover too late that a feature they shipped isn’t in Baseline or lacks support in Safari, Firefox, or older versions.

FeatureFence solves this by integrating Baseline web features data directly into ESLint. It warns developers at development time when they’re using features not in Baseline or not safe for their configured target browsers.

The project includes:

ESLint Plugin (eslint-plugin-featurefence) → detects unsupported features.
Playground Web App → paste code and see lint warnings live.
GitHub Pages Docs → landing page, install steps, screenshots.

🚀 Quick Start
Install Plugin
npm i -D eslint eslint-plugin-featurefence web-features browserslist


Configure in eslint.config.mjs:

import featurefence from "eslint-plugin-featurefence";

export default [
  {
    plugins: { featurefence },
    rules: {
      "featurefence/no-unsupported-feature": ["warn", {
        targets: [">=0.5%", "last 2 versions", "not dead"],
        mode: "baseline-or-targets"
      }]
    }
  }
];

🎮 Playground Demo

Hosted Playground UI → Live Try-Out
API Endpoint → https://your-domain.com/api/lint
Paste JavaScript or CSS-in-JS code, hit Lint, and see FeatureFence warnings instantly.

Example input:

document.startViewTransition(() => { /* ... */ });
const css = "main:has(nav) { padding: 1rem; }";


Output:

{
  "ruleId": "featurefence/no-unsupported-feature",
  "message": "‘View Transitions API’ may not be widely supported (Baseline check failed).",
  "severity": 1
}

🌐 Docs

See the GitHub Pages site for:

Installation guide

Example rules & outputs

Screenshots/GIFs

👉 FeatureFence Docs

🏗️ Project Structure
featurefence/
├─ packages/
│  └─ eslint-plugin-featurefence/   # Core ESLint plugin
├─ playground-server/               # Node/Express API
├─ playground-web/                  # Static UI (HTML/JS)
└─ docs/                            # GitHub Pages site

🛠️ Built With

JavaScript (Node.js)
ESLint
web-features npm package
Browserslist
Express (for API demo)
GitHub Pages (for docs site)

🏆 Hackathon Context

This project was built for the Baseline Tooling Hackathon 2025.
It aligns with the goal of making Baseline adoption easier for developers by integrating it directly into their everyday tooling (linting, CI, editors).

📜 License

MIT

✅ With this root README, judges will immediately see:

What FeatureFence is.
How to try it (Playground + Docs).
Why it matters (Baseline + compatibility)."# futurefence" 
