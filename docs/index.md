---
layout: default
title: Home
---


<section class="hero ff-container">
<div class="glow" aria-hidden="true"></div>
<span class="tag">Baseline‑powered <span class="dot">•</span> ESLint Plugin</span>
<h1>Fence off risky web features <br>before they break your users’ browsers.</h1>
<p class="lead">FeatureFence brings <strong>Baseline</strong> support data into ESLint, warning you when you use non‑Baseline APIs or features unsafe for your target browsers. Catch issues early—in your editor and CI.</p>
<div class="cta">
<a class="button primary" href="{{ '/getting-started' | relative_url }}">Get Started</a>
<a class="button" href="{{ '/examples' | relative_url }}">See Examples</a>
<a class="button" href="https://github.com/sureshwizard/featurefence" target="_blank" rel="noopener">GitHub Repo</a>
</div>
</section>


<section class="ff-container">
<div class="grid cols-3">
<div class="card">
<h3>Baseline aware</h3>
<p>Uses up‑to‑date Baseline data to flag features not yet widely supported.</p>
</div>
<div class="card">
<h3>ESLint native</h3>
<p>Drop‑in rules that fit your existing ESLint + CI workflows.</p>
</div>
<div class="card">
<h3>Team‑friendly</h3>
<p>Consistent, actionable warnings—great for PR reviews and pre‑commit hooks.</p>
</div>
</div>
</section>


<section class="ff-container">
<h2>Quick Install</h2>


```bash
npm i -D eslint eslint-plugin-featurefence web-features browserslist
