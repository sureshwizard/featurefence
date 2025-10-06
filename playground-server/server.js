import express from "express";
import cors from "cors";
import { ESLint } from "eslint";
import config from "./eslint.config.mjs";

const app = express();
app.use(cors());
app.use(express.json({ limit: "200kb" }));

app.post("/lint", async (req, res) => {
  try {
    const { code } = req.body;
    if (typeof code !== "string") {
      return res.status(400).json({ error: "Missing code" });
    }

    const eslint = new ESLint({
      overrideConfig: config[0]   // ✅ ESLint v9-friendly
    });

    const results = await eslint.lintText(code, { filePath: "input.js" });
    const messages = results[0]?.messages || [];
    res.json({ messages });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: String(e) });
  }
});

// Bind to all interfaces; default port from env or 4073 if you prefer
const PORT = process.env.PORT || 4073;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`FeatureFence Playground API running on http://0.0.0.0:${PORT}`);
});

