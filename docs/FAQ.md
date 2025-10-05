## ❓ 7) `faq.md`
```md
---
title: FAQ
---

<link rel="stylesheet" href="{{ '/assets/site.css' | relative_url }}">
{% include nav.html %}

# FAQ

### Is a live URL required?
No. For a plugin/library, a **GitHub Pages site** like this one is perfect. A simple playground URL is a bonus.

### Which Baseline data do you use?
The plugin reads from the `web-features` npm package to understand feature Baseline status.

### Does it support Browserslist targets?
Yes (config accepted). Current demo focuses on Baseline; extended per-browser checks are on the roadmap.

### Will it slow down ESLint?
The rule is lightweight; only basic lookups and string checks. More rules can be toggled individually later.

### License?
MIT.
