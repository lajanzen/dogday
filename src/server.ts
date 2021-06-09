import express from "express";
import dotenv from "dotenv";
dotenv.config();

const { PORT = 3000 } = process.env;

const app = express();

// Serve storybook production bundle
app.use("/storybook", express.static("dist/storybook"));

// Serve app production bundle
app.use(express.static("dist/app"));

app.listen(PORT, () => {
  console.log(`Boilerplate listening at http://localhost:${PORT}`);
});
