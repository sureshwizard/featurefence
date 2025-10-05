---
title: Home
---

<link rel="stylesheet" href="{{ '/assets/site.css' | absolute_url }}">

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
  <a class="btn" href="https://github.com/sureshwizard/featurefence" target="_blank" rel="noopener">GitHub Repo</a>
</div>

## Why FeatureFence?
Modern APIs are great—until they fail in a user’s browser. **Baseline** gives a shared, up-to-date view of what’s safe. FeatureFence brings that insight *into your editor and CI*, so you catch issues early.

## Quick Install
```bash
npm i -D eslint eslint-plugin-featurefence web-features browserslist
