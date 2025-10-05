// Sample code to demonstrate FeatureFence warnings

// 🚨 This should trigger a warning (View Transitions API)
document.startViewTransition(() => {
  console.log("Starting a view transition...");
});

// 🚨 This should trigger a warning (CSS :has())
const css = "main:has(nav) { padding: 1rem; }";

// ✅ This is safe (just a regular function)
function helloWorld() {
  return "Hello, Baseline!";
}
