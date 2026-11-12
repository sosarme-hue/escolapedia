// Genera el PDF de cada ficha (dist/.../ficha/ficha.pdf) para que el alumno lo descargue directamente.
// Uso: node build.js && node tools/pdfs.js   (necesita Playwright con Chromium)
const { chromium } = require("playwright");
const http = require("http");
const fs = require("fs");
const path = require("path");

const DIST = path.join(__dirname, "..", "dist");
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript" };

function fichas(dir, out = []) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) fichas(p, out);
    else if (f.name === "index.html" && path.basename(dir) === "ficha") out.push(path.relative(DIST, dir));
  }
  return out;
}

(async () => {
  const server = http.createServer((req, res) => {
    let p = path.join(DIST, decodeURIComponent(req.url.split("?")[0]));
    if (p.endsWith("/")) p += "index.html";
    fs.readFile(p, (err, data) => {
      if (err) { res.writeHead(404); return res.end(); }
      res.writeHead(200, { "Content-Type": TYPES[path.extname(p)] || "application/octet-stream" });
      res.end(data);
    });
  }).listen(0);
  const port = server.address().port;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const list = fichas(DIST);
  for (const rel of list) {
    await page.goto(`http://localhost:${port}/${rel}/`, { waitUntil: "networkidle" });
    await page.pdf({ path: path.join(DIST, rel, "ficha.pdf"), format: "A4", margin: { top: "12mm", bottom: "12mm", left: "10mm", right: "10mm" } });
  }
  await browser.close();
  server.close();
  console.log(`PDF generados: ${list.length}`);
})();
