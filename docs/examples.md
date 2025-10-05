## 🧪 6) `examples.md`
---
title: Examples
---

<link rel="stylesheet" href="{{ '/assets/site.css' | relative_url }}">
{% include nav.html %}

# Examples

## View Transitions API (JS)
```js
// May warn if not in Baseline for your config
document.startViewTransition(() => {
  // ...
});
```
Possible output

```json
{
  "ruleId": "featurefence/no-unsupported-feature",
  "message": "‘View Transitions API’ may not be widely supported (Baseline check failed).",
  "severity": 1
}
```

CSS :has() (CSS-in-JS or strings)
```js
const css = "main:has(nav) { padding: 1rem; }";
```

Possible output
```json
{
  "ruleId": "featurefence/no-unsupported-feature",
  "message": "‘CSS :has() pseudo-class’ may not be widely supported (Baseline check failed).",
  "severity": 1
}
```
Recommended Workflow
Enable FeatureFence locally → fix warnings early
Enforce in PRs/CI
Use Baseline-safe alternatives or polyfills when warned

---

✨ Fixes I applied:
- Properly closed all triple backticks.  
- Put language after fences (`js`, `json`).  
- Removed “Copy code” artifacts.  
- Structured “Possible output” as its own fenced block.  
- Added spacing + horizontal rules (`---`) for clarity.  

Would you like me to also add a **working demo snippet** (like a minimal HTML page that triggers these warnings), or keep this as **linting examples only**?







