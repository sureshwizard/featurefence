Contributing to FeatureFence

🎉 Thanks for your interest in contributing to FeatureFence!
This guide will help you get started with local setup, development, and submitting changes.

🚀 Getting Started

Fork & clone the repo

git clone https://github.com/<YOUR-USERNAME>/featurefence.git
cd featurefence


Install dependencies

Plugin package

cd packages/eslint-plugin-featurefence
npm install


Playground server

cd ../../playground-server
npm install

🧑‍💻 Development Workflow

Plugin development (in /packages/eslint-plugin-featurefence)
Add new rules in lib/rules/
Update utils/baseline.js if mapping new Baseline features
Test rules by linking plugin into the playground server
Run playground server locally
cd playground-server
npm start
Playground API runs at http://localhost:3000

Open playground-web/public/index.html in browser to test

✅ Testing

We use ESLint itself to run rules against sample code.
Run lint on sample:
npx eslint "test/samples/*.js"
Please add unit tests (coming soon) for new rules.

📦 Project Structure
featurefence/
├─ packages/
│  └─ eslint-plugin-featurefence/   # Core plugin
├─ playground-server/               # Node/Express API
├─ playground-web/                  # Static UI
└─ docs/                            # GitHub Pages site

💡 How to Contribute

Fork the repo on GitHub.
Create a new branch for your feature/fix:
git checkout -b feat/add-new-rule
Make your changes and commit:
git commit -m "feat: add detection for CSS nesting rule"
push to your fork:
git push origin feat/add-new-rule

Open a Pull Request on the main repo.

📝 Code Style

Use ESLint with our rules.
Follow Prettier formatting (coming soon).
Keep commits clean and messages meaningful.

📜 License

By contributing, you agree that your contributions will be licensed under the MIT License
.

✅ This file helps Devpost judges see you’re thinking about open source sustainability, which is a plus.