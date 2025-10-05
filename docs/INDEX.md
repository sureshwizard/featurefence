---
title: Home
---

<link rel="stylesheet" href="{{ '/assets/site.css' | relative_url }}">

<div class="hero">
  <img src="{{ '/assets/featurefence-hero.png' | relative_url }}" alt="FeatureFence hero">
  <div class="badges">
    <span class="badge">ESLint Plugin</span>
    <span class="badge">Baseline Data</span>
    <span class="badge">Cross-browser Safety</span>
  </div>
</div>

{% include nav.html %}

# FeatureFence

*A Baseline-powered ESLint plugin that fences off unsupported web features before they break your users’ browsers.*

- Warns when your code uses **non-Baseline** features (or features risky for your targets)
- Integrates with **ESLint** and **CI**
- Ideal for teams that care about **cross-browser compatibility**

<div class="btns">
  <a class="btn primary" href="{{ '/getting-started' | relative_url }}">Get Started</a>
  <a class="btn" href="{{ '/examples' | relative_url }}">See Examples</a>
  <a class="btn" href="https://github.com/sureshwizard/baselineproject" target="_blank" rel="noopener">GitHub Repo</a>
</div>

## Why FeatureFence?
Modern APIs are great—until they fail in a user’s browser. **Baseline** gives a shared, up-to-date view of what’s safe. FeatureFence brings that insight *into your editor and CI*, so you catch issues early.

## Quick Install
```bash
npm i -D eslint eslint-plugin-featurefence web-features browserslist
Example Warning (JSON)
json
Copy code
{
  "ruleId": "featurefence/no-unsupported-feature",
  "message": "‘CSS :has() pseudo-class’ may not be widely supported (Baseline check failed).",
  "line": 7,
  "column": 15,
  "severity": 1
}
Live Playground (Optional)
Hosted UI: https://your-domain.com/featurefence/

API: https://your-domain.com/api/lint

Tip: Add a screenshot/GIF of your playground below and place the file at docs/assets/demo-screenshot.png.


vbnet
Copy code

And make sure your `docs/_config.yml` has the correct base path for your repo:

```yml
title: FeatureFence
description: Baseline-powered ESLint plugin for safer web features
theme: jekyll-theme-cayman
url: "https://sureshwizard.github.io"
baseurl: "/baselineproject"
markdown: kramdown
