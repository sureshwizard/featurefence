import express from "express";
import cors from "cors";
import { ESLint } from "eslint";
import config from "./eslint.config.mjs";

const app = express();
app.use(cors());
app.use(express.json({ limit: "200kb" }));

// Lint JS sent by the client and return messages
app.post("/lint", async (req, res) => {
  try {
    const { code } = req.body;
    if (typeof code !== "string") return res.status(400).json({ error: "Missing code" });

    const eslint = new ESLint({
      useEslintrc: false,
      overrideConfigFile: null,
      overrideConfig: config[0]
    });

    const results = await eslint.lintText(code, { filePath: "input.js" });
    const messages = results[0]?.messages || [];
    res.json({ messages });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: String(e) });
  }
});

app.listen(3000, () => {
  console.log("FeatureFence Playground API running on http://localhost:3000");
});
