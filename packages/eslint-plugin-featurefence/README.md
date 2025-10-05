FeatureFence (ESLint Plugin)

A Baseline-powered ESLint plugin that warns when your code uses web features not in Baseline for your target browsers. Perfect for teams who want to adopt modern APIs safely without breaking cross-browser compatibility.

🚀 Install
npm i -D eslint eslint-plugin-featurefence web-features browserslist

⚙️ Usage (Flat Config)
// eslint.config.mjs
import featurefence from "eslint-plugin-featurefence";

export default [
  {
    plugins: { featurefence },
    rules: {
      "featurefence/no-unsupported-feature": ["warn", {
        targets: [">=0.5%", "last 2 versions", "not dead"],
        // optional: check Baseline only or Baseline + targets
        mode: "baseline-or-targets"
      }]
    }
  }
];

🔍 What it checks

Known high-impact features (examples):

CSS :has() pseudo-class

View Transitions API

Maps source code tokens to Baseline feature IDs using web-features.

Warns or errors if the feature is not safe for your configuration.

📦 Example Output
{
  "ruleId": "featurefence/no-unsupported-feature",
  "message": "‘CSS :has() pseudo-class’ may not be widely supported (Baseline check failed).",
  "line": 7,
  "column": 15,
  "severity": 1
}

📜 License

MIT

MIT License

Copyright (c) 2025 ...

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
...


✅ With this structure:

Developers see what the plugin is, how to install, how to configure, and what warnings look like.

You also link the LICENSE properly.