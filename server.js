const express = require("express");
const path = require("path");
const app = express();

// Serve all static files in /public
app.use(express.static(path.join(__dirname, "public")));

// Explicit root route → send index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Optional: handle 404s (useful in logs)
app.use((req, res) => res.status(404).send("404 Not Found"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 App running on port ${PORT}`));