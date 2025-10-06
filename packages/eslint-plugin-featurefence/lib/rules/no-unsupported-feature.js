"use strict";

const { isAllowed } = require("../utils/baseline");

// Utility: check member/call chain like document.startViewTransition()
function isDotChain(node, chain) {
  const segs = [];
  let n = node;
  while (n && (n.type === "MemberExpression" || n.type === "CallExpression")) {
    if (n.type === "CallExpression") n = n.callee;
    if (n.type === "MemberExpression") {
      if (n.property && n.property.type === "Identifier") segs.unshift(n.property.name);
      n = n.object;
    }
  }
  if (n && n.type === "Identifier") segs.unshift(n.name);
  return segs.join(".") === chain.join(".");
}

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Warn on web features not in Baseline or not supported by targets",
      recommended: false
    },
    schema: [{
      type: "object",
      properties: {
        targets: { type: "array", items: { type: "string" } },
        mode: { enum: ["baseline-only", "baseline-or-targets"] }
      },
      additionalProperties: false
    }],
    messages: {
      unsupported: "‘{{featureName}}’ may not be widely supported (Baseline check failed)."
    }
  },

  create(context) {
    const options = context.options[0] || {};
    const mode = options.mode || "baseline-or-targets";

    function report(featureId, node, pretty) {
      if (!isAllowed(featureId, mode)) {
        context.report({
          node,
          messageId: "unsupported",
          data: { featureName: pretty || featureId }
        });
      }
    }

    return {
      // JS: document.startViewTransition(...)
      CallExpression(node) {
        if (isDotChain(node, ["document", "startViewTransition"])) {
          report("view-transitions", node, "View Transitions API");
        }
      },

      // CSS-in-JS / strings: detect ":has("
      TemplateLiteral(node) {
        const raw = node.quasis.map(q => q.value.raw).join("");
        if (raw.includes(":has(")) report("css-has-pseudo", node, "CSS :has() pseudo-class");
      },
      Literal(node) {
        if (typeof node.value === "string" && node.value.includes(":has(")) {
          report("css-has-pseudo", node, "CSS :has() pseudo-class");
        }
      }
    };
  }
};
