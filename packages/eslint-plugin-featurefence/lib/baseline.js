"use strict";

/**
 * Utilities to query Baseline via web-features package.
 * We use a minimal subset to keep the demo small.
 */

const browserslist = require("browserslist");
const wf = require("web-features");

// Build a map: { featureId -> featureObject }
const featureMap = {};
for (const f of wf.features || []) {
  // Expect shape like: { id, name, status: { baseline: boolean }, compat: {...} }
  if (f && f.id) featureMap[f.id] = f;
}

/**
 * Return the web-features entry for a known id (e.g. "css-has-pseudo")
 */
function getFeatureById(id) {
  return featureMap[id] || null;
}

/**
 * Returns true if feature is in Baseline (wf.status.baseline === true)
 */
function isInBaseline(id) {
  const f = getFeatureById(id);
  return !!(f && f.status && f.status.baseline === true);
}

/**
 * Very light "targets" support check:
 *  - If Baseline is true, we treat it as widely supported for now.
 *  - Otherwise, we could extend to look at caniuse/MDN data; for demo we rely on baseline.
 * Returns true if OK for given mode ("baseline-only" | "baseline-or-targets")
 */
function isAllowed(id, mode = "baseline-or-targets") {
  const baseline = isInBaseline(id);
  if (mode === "baseline-only") return baseline;
  // baseline-or-targets: baseline implies allowed. Otherwise, we flag as not allowed in demo.
  return baseline;
}

/**
 * Example mapping from code "signals" -> Baseline feature IDs
 * Extend this as you add more detections.
 */
const CODE_TO_FEATURE = {
  // JS global signals
  "document.startViewTransition": "view-transitions",          // View Transitions API
  "CSS.supportsSelector(':has(*)')": "css-has-pseudo",         // just an example signal

  // CSS signals (for simple string-based detection fallback)
  ":has(": "css-has-pseudo"
};

module.exports = {
  getFeatureById,
  isInBaseline,
  isAllowed,
  CODE_TO_FEATURE
};
