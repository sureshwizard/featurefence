---
title: FAQ
---

<link rel="stylesheet" href="{{ '/assets/site.css' | relative_url }}">
{% include nav.html %}

# ❓ FAQ

---

### 🟢 Is a live URL required?
No. For a plugin or library, a **GitHub Pages site** like this one is perfect.  
A simple playground URL is just a bonus.

---

### 📊 Which Baseline data do you use?
The plugin reads from the [`web-features`](https://www.npmjs.com/package/web-features) npm package  
to determine feature **Baseline** support status.

---

### 🌍 Does it support Browserslist targets?
Yes — config can accept Browserslist targets.  
The current demo focuses on **Baseline checks**; extended per-browser checks are on the roadmap.

---

### ⚡ Will it slow down ESLint?
No — the rule is lightweight.  
It performs only **basic lookups and string checks**.  
More rules can be toggled individually in the future.

---

### 📜 License
MIT
