// Ayudas de Fundamentos de Administración y Gestión (2º de Bachillerato, optativa, nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza los dibujos de Economía de 1º (_bach1-eco.js: eco, barras, cajas, flujo, versus, cuadro, rueda...) y
// añade el saber básico propio y una comprobación del formato «nivel libro».
const E = require("./_bach1-eco");
const { txt, marco } = require("./_eso4L4");

// Saberes: la materia es optativa de configuración autonómica (no tiene enseñanzas mínimas estatales).
const SAB = (s) => `${s} (Fundamentos de Administración y Gestión, optativa de 2º de Bachillerato de configuración autonómica; por ejemplo, en Andalucía, bloques «Innovación empresarial», «La organización interna de la empresa», «Documentación y trámites para la puesta en marcha», «El plan de aprovisionamiento», «Gestión comercial y de marketing», «Gestión de los recursos humanos», «Gestión de la contabilidad», «Gestión de las necesidades de inversión y financiación» y «Exposición pública del desarrollo de la idea de negocio»; marco general del RD 243/2022).`;

const PGC = { t: "Plan General de Contabilidad (Real Decreto 1514/2007, BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-19884" };
const PAE = { t: "Punto de Atención al Emprendedor (PAE) y CIRCE, Ministerio de Industria", url: "https://paeelectronico.es/" };
const IPYME = { t: "Portal PYME del Ministerio de Industria: crear una empresa", url: "https://plataformapyme.es/" };
const AEAT = { t: "Agencia Tributaria: información para empresas y profesionales", url: "https://sede.agenciatributaria.gob.es/" };
const SS = { t: "Seguridad Social: afiliación, cotización y sistema RED", url: "https://www.seg-social.es/" };
const SEPE = { t: "SEPE: modelos de contrato de trabajo", url: "https://www.sepe.es/HomeSepe/empresas/Contratos-de-trabajo/modelos-contrato.html" };
const ICO = { t: "Instituto de Crédito Oficial (ICO): líneas de financiación para empresas", url: "https://www.ico.es/" };
const ENISA = { t: "ENISA: préstamos participativos para emprendedores", url: "https://www.enisa.es/" };
const OEPM = { t: "Oficina Española de Patentes y Marcas (OEPM)", url: "https://www.oepm.es/" };
const LSC = { t: "Ley de Sociedades de Capital (Real Decreto Legislativo 1/2010, BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2010-10544" };
const ET = { t: "Estatuto de los Trabajadores (Real Decreto Legislativo 2/2015, BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430" };
const LIVA = { t: "Ley 37/1992 del Impuesto sobre el Valor Añadido (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740" };
const DIRCE = { t: "INE: Directorio Central de Empresas (DIRCE)", url: "https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736160707&menu=ultiDatos&idp=1254735576550" };

// Matriz de cuatro cuadrantes (DAFO, BCG, Ansoff...): t, [ejeX, ejeY], [[título, texto] × 4] en orden ↖ ↗ ↙ ↘.
function cuadrante(t, [ex, ey], cs) {
  const top = t ? 30 : 10, W = 112, H = (166 - top) / 2, x0 = 26;
  const col = ["var(--leaf)", "var(--red)", "var(--pen)", "var(--sun)"];
  let s = t ? txt(t, 130, 15, 236, 12, 'font-weight="700"') : "";
  cs.forEach(([a, b], i) => {
    const x = x0 + (i % 2) * (W + 6), y = top + Math.floor(i / 2) * (H + 4);
    s += `<rect x="${x}" y="${y.toFixed(1)}" width="${W}" height="${(H - 2).toFixed(1)}" rx="8" fill="${col[i]}" fill-opacity=".14" stroke="${col[i]}" stroke-width="2"/>`;
    s += txt(a, x + W / 2, y + 12, W - 8, 10.5, `font-weight="700" fill="${col[i]}"`);
    s += txt(b, x + W / 2, y + 14 + (H - 14) / 2, W - 10, 8.8);
  });
  if (ey) s += `<text x="12" y="${top + (166 - top) / 2}" transform="rotate(-90 12 ${top + (166 - top) / 2})" text-anchor="middle" font-size="9" font-weight="700" fill="var(--muted)">${ey}</text>`;
  if (ex) s += `<text x="${x0 + W + 3}" y="176" text-anchor="middle" font-size="9" font-weight="700" fill="var(--muted)">${ex}</text>`;
  return marco(`${t || "Matriz"}: ${cs.map((c) => c[0]).join(", ")}`, s);
}

// Organigrama de dos niveles: raíz y hasta 4 hijos (cada hijo puede llevar 1 o 2 subcajas).
function organi(t, raiz, hijos) {
  const top = t ? 28 : 8, n = hijos.length, W = (236 - (n - 1) * 6) / n;
  let s = t ? txt(t, 130, 14, 236, 12, 'font-weight="700"') : "";
  s += `<rect x="80" y="${top}" width="100" height="26" rx="7" fill="var(--pen)"/>` + txt(raiz, 130, top + 13, 94, 10, 'font-weight="700" fill="#fff"');
  const yh = top + 52;
  s += `<path d="M130 ${top + 26} V ${top + 40} M ${12 + W / 2} ${top + 40} H ${12 + (n - 1) * (W + 6) + W / 2}" stroke="var(--muted)" stroke-width="1.8" fill="none"/>`;
  hijos.forEach(([h, subs = []], i) => {
    const x = 12 + i * (W + 6), cx = x + W / 2, c = ["var(--red)", "var(--leaf)", "var(--sun)", "var(--inf)"][i % 4];
    s += `<path d="M${cx} ${top + 40} V ${yh}" stroke="var(--muted)" stroke-width="1.8"/>`;
    s += `<rect x="${x}" y="${yh}" width="${W}" height="28" rx="7" fill="var(--card)" stroke="${c}" stroke-width="2"/>` + txt(h, cx, yh + 14, W - 6, 9.5, 'font-weight="700"');
    subs.forEach((sb, j) => {
      const y = yh + 40 + j * 34;
      s += `<path d="M${cx} ${y - 12} V ${y}" stroke="var(--muted)" stroke-width="1.4"/><rect x="${x + 4}" y="${y}" width="${W - 8}" height="26" rx="6" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="1.4"/>` + txt(sb, cx, y + 13, W - 14, 8.5);
    });
  });
  return marco(`Organigrama: ${t || raiz}. ${raiz}: ${hijos.map((h) => h[0]).join(", ")}`, s);
}

// Balance en dos columnas: activo (izquierda) y patrimonio neto + pasivo (derecha), con alturas proporcionales.
// izq / der: [[masa, importe], ...]
function balance(t, izq, der) {
  const top = t ? 30 : 10, H = 172 - top, sum = (a) => a.reduce((x, y) => x + y[1], 0);
  const tot = Math.max(sum(izq), sum(der));
  const col = ["var(--pen)", "var(--leaf)", "var(--sun)", "var(--red)", "var(--inf)"];
  let s = t ? txt(t, 130, 15, 236, 12, 'font-weight="700"') : "";
  const pila = (x, xs, k) => { let y = top; return xs.map(([m, v], i) => { const h = (v / tot) * H, c = col[(i + k) % col.length]; const r = `<rect x="${x}" y="${y.toFixed(1)}" width="114" height="${(h - 2).toFixed(1)}" rx="5" fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="1.8"/>` + txt(`${m}: ${v.toLocaleString("es-ES")} €`, x + 57, y + h / 2, 106, h < 22 ? 8 : 9.2, 'font-weight="700"'); y += h; return r; }).join(""); };
  s += pila(10, izq, 0) + pila(136, der, 2);
  return marco(`Balance: ${t || ""}. Activo: ${izq.map((a) => `${a[0]} ${a[1]}`).join(", ")}. Patrimonio neto y pasivo: ${der.map((a) => `${a[0]} ${a[1]}`).join(", ")}`, s);
}

// Comprobación del formato «nivel libro» (avisa por consola; no bloquea).
const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
function libro(T) {
  const av = [];
  const w = T.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 2000 || w > 3200) av.push(`${w} palabras`);
  if (T.bloques.length < 10 || T.bloques.length > 16) av.push(`${T.bloques.length} bloques`);
  if (T.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  const c = (n) => T.ejercicios.filter((e) => e.nivel === n).length;
  if (T.ejercicios.length < 30 || T.ejercicios.length > 40) av.push(`${T.ejercicios.length} ejercicios (${c("básico")}/${c("medio")}/${c("avanzado")})`);
  if (T.quiz.length !== 20 || T.quiz.some((q) => q.o.length !== 4)) av.push(`quiz ${T.quiz.length}`);
  if (T.examen.length !== 8 || T.examen.some((q) => q.o.length !== 4)) av.push(`examen ${T.examen.length}`);
  if (T.tarjetas.length !== 12) av.push(`tarjetas ${T.tarjetas.length}`);
  if (T.ejemplos.length !== 6 || T.errores.length !== 6) av.push(`ejemplos ${T.ejemplos.length} errores ${T.errores.length}`);
  if (T.glosario.length < 12 || T.glosario.length > 20) av.push(`glosario ${T.glosario.length}`);
  if (T.situacion.pasos.length < 4 || T.situacion.pasos.length > 6) av.push("situación");
  const lw = strip(T.lectura.html).split(" ").length;
  if (lw < 150 || lw > 250) av.push(`lectura ${lw} palabras`);
  const vb = T.bloques.filter((b) => b.video).length;
  if (vb < 2) av.push(`${vb} vídeos de bloque`);
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro] ${T.titulo}: ${av.join(", ")}`);
  if (process.env.FAG_PALABRAS) console.log(`[fag] ${T.titulo}: ${w} palabras, lectura ${lw}`);
  return T;
}

module.exports = { ...E, SAB, PGC, PAE, IPYME, AEAT, SS, SEPE, ICO, ENISA, OEPM, LSC, ET, LIVA, DIRCE, cuadrante, organi, balance, libro };
