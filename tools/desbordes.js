// Busca textos de los SVG que se salen de su dibujo.
// Uso: node tools/desbordes.js [filtro-de-ruta]   (sirve dist/ en un puerto libre)
const http = require("http");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const DIST = path.join(__dirname, "..", "dist");
const filtro = process.argv[2] || "";
const tipos = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml" };

function paginas(dir, out = []) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) paginas(p, out);
    else if (f.name === "index.html" && fs.existsSync(path.join(dir, "ficha"))) out.push(path.relative(DIST, dir));
  }
  return out;
}

(async () => {
  const srv = http.createServer((req, res) => {
    let p = path.join(DIST, decodeURIComponent(req.url.split("?")[0]));
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, "index.html");
    if (!fs.existsSync(p)) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { "Content-Type": tipos[path.extname(p)] || "application/octet-stream" });
    fs.createReadStream(p).pipe(res);
  }).listen(0);
  const port = srv.address().port;
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
  let total = 0;
  for (const rel of paginas(DIST).filter((r) => r.includes(filtro)).sort()) {
    await page.goto(`http://localhost:${port}/${rel}/`);
    const malos = await page.evaluate(() => {
      const res = [];
      document.querySelectorAll("svg[viewBox]").forEach((svg) => {
        if (svg.parentElement.closest("svg")) return;
        const r = svg.getBoundingClientRect();
        if (!r.width) return;
        svg.querySelectorAll("text").forEach((t) => {
          if (t.closest("svg") !== svg || !t.textContent.trim()) return;
          const b = t.getBoundingClientRect();
          if (b.left < r.left - 1 || b.right > r.right + 1 || b.top < r.top - 1 || b.bottom > r.bottom + 1) { res.push(t.textContent.trim().slice(0, 40)); return; }
          // Caja que lo contiene: el rectángulo más pequeño (no el fondo) que tiene dentro el centro del texto.
          const cx = (b.left + b.right) / 2, cy = (b.top + b.bottom) / 2;
          let caja = null;
          svg.querySelectorAll("rect").forEach((q) => {
            const k = q.getBoundingClientRect();
            if (k.width >= r.width * 0.95 && k.height >= r.height * 0.9) return;
            if (cx > k.left && cx < k.right && cy > k.top && cy < k.bottom && (!caja || k.width * k.height < caja.width * caja.height)) caja = k;
          });
          if (caja && (b.left < caja.left - 1 || b.right > caja.right + 1)) res.push("[caja] " + t.textContent.trim().slice(0, 40));
        });
      });
      return res;
    });
    if (malos.length) { total += malos.length; console.log(rel, "→", malos.join(" | ")); }
  }
  console.log(`Textos que se salen: ${total}`);
  await browser.close();
  srv.close();
})();
