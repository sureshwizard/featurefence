"use strict";

const rule = require("./rules/no-unsupported-feature");

module.exports = {
  meta: {
    name: "eslint-plugin-featurefence",
    version: "0.1.0"
  },
  rules: {
    "no-unsupported-feature": rule
  }
};
