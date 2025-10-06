"use strict";

/**
 * Minimal Baseline helpers using web-features.
 */
const wf = require("web-features");

// Build id -> feature map
const featureMap = {};
for (const f of wf.features || []) {
  if (f && f.id) featureMap[f.id] = f;
}

function getFeatureById(id) {
  return featureMap[id] || null;
}

function isInBaseline(id) {
  const f = getFeatureById(id);
  return !!(f && f.status && f.status.baseline === true);
}

/**
 * For demo we treat "Baseline === true" as allowed.
 * mode: "baseline-only" | "baseline-or-targets"
 */
function isAllowed(id, mode = "baseline-or-targets") {
  const baseline = isInBaseline(id);
  if (mode === "baseline-only") return baseline;
  return baseline;
}

module.exports = { getFeatureById, isInBaseline, isAllowed };
