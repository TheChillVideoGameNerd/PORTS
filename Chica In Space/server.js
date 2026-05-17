const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5000;

const mimeTypes = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".mp3": "audio/mpeg",
  ".ogg": "audio/ogg",
  ".wav": "audio/wav",
  ".m4a": "audio/x-m4a",
  ".cch": "application/octet-stream",
  ".cc1": "application/octet-stream",
  ".cc2": "application/octet-stream",
  ".cc3": "application/octet-stream",
};

app.use((req, res, next) => {
  if (req.url !== "/" && !req.url.endsWith(".html")) {
    console.log(`${req.method} ${req.url} [${res.statusCode}]`);
  }
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Range, Content-Type");
  res.setHeader("Access-Control-Expose-Headers", "Content-Length, Content-Range, Accept-Ranges");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  const ext = path.extname(req.url).toLowerCase();
  const contentType = mimeTypes[ext];
  if (contentType) {
    res.setHeader("Content-Type", contentType);
  }

  if (ext === ".mp3" || ext === ".ogg" || ext === ".wav" || ext === ".m4a") {
    res.setHeader("Accept-Ranges", "bytes");
    res.setHeader("Cache-Control", "public, max-age=3600");
  }

  next();
});

app.use(express.static(path.join(__dirname), {
  setHeaders: (res, filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext];
    if (contentType) {
      res.setHeader("Content-Type", contentType);
    }
  }
}));

app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
