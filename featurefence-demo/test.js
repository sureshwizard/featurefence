// Safe
function add(a, b) { return a + b; }

// Risky: View Transitions
document.startViewTransition(() => {});

// Risky: :has()
const css = "main:has(nav) { padding: 1rem; }";
