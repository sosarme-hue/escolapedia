/* Escolapedia: buscador e interacción de los temas (preguntas, explicación, tarjetas de repaso). Sin dependencias. */
/* ---------- buscador: materias, cursos, temas y PAU; tolera acentos y errores de tecleo ---------- */
(function () {
  const W = window, D = document;
  const norm = (t) => String(t).toLowerCase().replace(/l·l/g, "ll").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const slug = (t) => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  // Cursos y etapas que se pueden escribir en la búsqueda («2 eso», «2º de la ESO», «segundo de bachillerato», «4 años», «selectividad»…).
  const NUM = { primero: 1, primer: 1, primera: 1, segundo: 2, segunda: 2, segon: 2, tercero: 3, tercera: 3, tercer: 3, cuarto: 4, cuarta: 4, quart: 4, quinto: 5, quinta: 5, cinque: 5, sexto: 6, sexta: 6, sise: 6 };
  const ETAPA_FUERTE = { eso: "eso", primaria: "primaria", bachillerato: "bachillerato", bachiller: "bachillerato", batxillerat: "bachillerato", infantil: "infantil", pau: "pau", selectividad: "pau", selectivitat: "pau", evau: "pau", ebau: "pau", pevau: "pau", abau: "pau", pbau: "pau" };
  const ETAPA_DEBIL = { prim: "primaria", pri: "primaria", ep: "primaria", bach: "bachillerato", bachi: "bachillerato", batx: "bachillerato", bat: "bachillerato", bto: "bachillerato", inf: "infantil", anos: "infantil", ano: "infantil", anys: "infantil", any: "infantil" };
  // Abreviaturas que usan alumnos y familias.
  const ALIAS = { mates: "matematicas", mate: "matematicas", mat: "matematicas", fyq: "fisica quimica", fq: "fisica quimica", byg: "biologia geologia", gyh: "geografia historia", ef: "educacion fisica", gimnasia: "educacion fisica", tic: "tecnologias informacion", informatica: "tecnologias informacion", dt: "dibujo tecnico", macs: "matematicas aplicadas", mcs: "matematicas aplicadas", ccss: "ciencias sociales", naturales: "naturaleza", natus: "naturaleza", naturals: "naturaleza", socials: "sociales", angles: "ingles", english: "ingles", french: "frances", catala: "catalana", castella: "castellana", castellano: "castellana", plastica: "plastica", visual: "visual", religio: "religion", reli: "religion", eco: "economia", filo: "filosofia", latin: "latin", lengua: "lengua", llengua: "lengua" };
  const VACIAS = new Set("de del la el los las y e en a al un una i les els lo que con por para o".split(" "));

  // Distancia de edición con transposiciones (dos letras cambiadas de sitio cuentan como un error).
  function dist(a, b, max) {
    const n = a.length, m = b.length;
    if (Math.abs(n - m) > max) return max + 1;
    let p2 = null, p = Array.from({ length: m + 1 }, (_, j) => j);
    for (let i = 1; i <= n; i++) {
      const c = [i]; let low = i;
      for (let j = 1; j <= m; j++) {
        let v = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (p2 && i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, p2[j - 2] + 1);
        c.push(v); if (v < low) low = v;
      }
      if (low > max) return max + 1;
      p2 = p; p = c;
    }
    return p[m];
  }
  const COMUNES = new Set("como para pero sobre entre desde hasta cada todo toda todos todas este esta estos estas muy mas tambien donde cuando porque".split(" "));
  const sing = (x) => x.replace(/(es|s)$/, "");
  // Puntuación de una palabra escrita (q) frente a una palabra del índice (w).
  function sc(q, w, relax) {
    if (w === q) return 10;
    if (q.length >= 4 && sing(q) === sing(w)) return 9; // singular y plural
    if (q.length >= 2 && w.startsWith(q)) return q.length >= 3 ? 8 : 4;
    if (/^\d+$/.test(q)) return 0;
    if (q.length >= 4 && w.includes(q)) return 5;
    const min = relax ? 4 : 5; // con 3 o 4 letras, solo palabras que empiezan así
    if (q.length < min) return 0;
    if (q[0] !== w[0] && !(q[0] === w[1] && q[1] === w[0])) return 0; // casi nadie se equivoca en la primera letra
    if (COMUNES.has(w) || (w.length < q.length && q.length < 6)) return 0; // «cosmo» no es «como»
    const max = q.length < 4 ? 1 : (q.length >= 8 ? 2 : 1) + (relax ? 1 : 0);
    let d = dist(q, w, max);
    for (const k of [q.length - 1, q.length, q.length + 1]) if (k >= 5 && k < w.length) d = Math.min(d, dist(q, w.slice(0, k), max));
    return d > max ? 0 : d === 0 ? 8 : d === 1 ? 6 : 2;
  }

  // ---------- índice ----------
  let IX = null, VOC = null, VW = null, KW = false;
  const CACHE = new Map();
  // Texto completo de los temas: índice inverso repartido en ficheros por las dos primeras letras (se cargan al buscar).
  const TX = {}, TXC = new Map(), pideTx = new Set();
  W.EPTX = (k, v) => { TX[k] = v; activos.forEach((f) => f()); };
  function enTexto(t) {
    const k = t.slice(0, 2), sh = TX[k];
    if (!sh) return null;
    if (TXC.has(t)) return TXC.get(t);
    const r = new Map();
    for (const w in sh) { const v = sc(t, w); if (v < 8) continue; /* en el texto, solo palabras exactas, que empiezan igual o en plural */ for (const i of sh[w]) { const o = r.get(i); if (!o || o.s < v) r.set(i, { s: v, w }); } }
    if (TXC.size > 40) TXC.clear();
    TXC.set(t, r); return r;
  }
  function pedirTexto(toks) {
    for (const t of toks) {
      if (t.length < 3 || /^\d/.test(t)) continue;
      const k = t.slice(0, 2);
      if (TX[k] || pideTx.has(k)) continue;
      pideTx.add(k); js(`texto/${k}.js`, () => {});
    }
  }
  const ids = (t) => norm(t).split(" ").filter(Boolean).map((w) => { let i = VOC.get(w); if (i === undefined) { i = VW.length; VOC.set(w, i); VW.push(w); } return i; });
  function preparar() {
    const X = W.EPIX; VOC = new Map(); VW = [];
    IX = { C: X.c, M: X.m.map((m) => ({ n: m[0], c: m[1], u: m[2], nt: m[3], w: ids(m[0]), g: m[0].replace(/\s+(I|II|A|B)$/, "") })), P: X.p.map((p) => ({ t: p[0], u: p[1], w: ids(p[0]) })) };
    IX.T = X.t.map((t) => ({ t: t[0], m: t[1], w: ids(t[0]), k: [] }));
    if (W.EPKW) claves();
  }
  function claves() {
    if (!IX || KW || !W.EPKW) return;
    W.EPKW.forEach((k, i) => { if (IX.T[i]) IX.T[i].k = ids(k); });
    KW = true;
  }

  // ---------- interpretar lo escrito ----------
  function leer(q) {
    let s = norm(q).replace(/\b([1-6])(o|a|er|ero|r|n|nd|t|e|st|th)\b/g, "$1").replace(/\b(\d)([a-z]{2,})/g, "$1 $2").replace(/\b([a-z]{2,})(\d)\b/g, "$1 $2");
    let tk = s.split(" ").filter(Boolean);
    const orig = tk.slice();
    tk = tk.map((w) => (NUM[w] ? String(NUM[w]) : w));
    let etapa = null, n = 0, usado = new Set();
    const esNum = (w) => /^[1-6]$/.test(w);
    tk.forEach((w, i) => {
      let e = ETAPA_FUERTE[w];
      if (!e && ETAPA_DEBIL[w]) {
        // Las abreviaturas solo cuentan como curso si van junto a un número («2 bach», «3 inf»).
        const vec = [tk[i - 1], tk[i - 2], tk[i + 1], tk[i + 2]];
        if (vec.some((x) => x && esNum(x))) e = ETAPA_DEBIL[w];
      }
      if (!e && w.length >= 6) for (const k of ["primaria", "bachillerato", "selectividad", "infantil"]) if (dist(w, k, w.length >= 9 ? 2 : 1) <= (w.length >= 9 ? 2 : 1)) e = ETAPA_FUERTE[k];
      if (!e) return;
      etapa = e; usado.add(i);
      for (const j of [i - 1, i - 2, i + 1, i + 2]) {
        if (tk[j] && esNum(tk[j]) && (j === i - 1 || j === i + 1 || VACIAS.has(tk[(i + j) / 2 | 0]) || VACIAS.has(tk[Math.min(i, j) + 1]))) { n = +tk[j]; usado.add(j); break; }
      }
    });
    let suave = 0;
    if (!etapa) { const j = tk.findIndex((w, i) => esNum(w) && !NUM[orig[i]]); if (j >= 0) { suave = +tk[j]; usado.add(j); } }
    let txt = orig.filter((w, i) => !usado.has(i));
    if (etapa) txt = txt.filter((w) => !VACIAS.has(w)); // «de la ESO»
    const sinVacias = txt.filter((w) => !VACIAS.has(w));
    if (sinVacias.length) txt = sinVacias;
    const fr = txt.join(" ");
    const toks = [];
    for (const w of txt) for (const a of (ALIAS[w] || w).split(" ")) if (!toks.includes(a)) toks.push(a);
    // Cursos permitidos
    let cursos = null;
    if (etapa) {
      cursos = new Set();
      IX.C.forEach((c, i) => {
        const e = etapa === "pau" ? "bachillerato" : etapa;
        if (c[2] !== e) return;
        if (etapa === "pau" && !/^2/.test(c[1])) return;
        if (n && !new RegExp(`^${n}\\b`).test(c[1])) return;
        cursos.add(i);
      });
    }
    return { toks, fr, etapa, n, suave, cursos };
  }

  // ---------- buscar ----------
  function buscar(q, relax) {
    const L = leer(q), toks = L.toks;
    const out = { L, materias: [], temas: [], paginas: [], cursos: [] };
    if (L.cursos && !toks.length) {
      out.cursos = [...L.cursos].map((ci) => ({ c: IX.C[ci], ms: IX.M.filter((m) => m.c === ci) }));
      if (L.etapa === "pau") out.paginas = IX.P.filter((p) => /^pau\//.test(p.u)).slice(0, 6).map((p) => ({ p, s: 1 }));
      return out;
    }
    if (!toks.length) return out;
    // Puntuación de cada palabra del vocabulario para cada palabra escrita.
    const tabla = toks.map((t) => {
      const k = (relax ? "~" : "") + t + "|" + VW.length + "|" + !!TX[t.slice(0, 2)];
      if (CACHE.has(k)) return CACHE.get(k);
      const a = new Float32Array(VW.length); for (let i = 0; i < VW.length; i++) a[i] = sc(t, VW[i], relax);
      // Si la palabra existe tal cual (o empieza así) en títulos, materias o texto, no se buscan parecidos.
      const sh = TX[t.slice(0, 2)];
      if (!relax && (a.some((v) => v >= 8) || (sh && Object.keys(sh).some((w) => w.startsWith(t))))) for (let i = 0; i < a.length; i++) if (a[i] < 8 && a[i] !== 5) a[i] = 0;
      if (CACHE.size > 60) CACHE.clear();
      CACHE.set(k, a); return a;
    });
    const mejor = (ti, arr) => { let b = 0; for (const i of arr) if (tabla[ti][i] > b) b = tabla[ti][i]; return b; };
    const total = (parts) => {
      let s = 0, fal = 0;
      for (const v of parts) { if (v > 0) s += v; else fal++; }
      if (!fal) return s;
      if (relax ? fal < parts.length : toks.length >= 3 && fal === 1) return s * 0.6;
      return 0;
    };
    const frase = norm(L.fr);
    const bonus = (t) => { const nt = norm(t); return nt === frase ? 25 : nt.startsWith(frase) ? 14 : (" " + nt + " ").includes(" " + frase) ? 9 : 0; };
    const okCurso = (ci) => !L.cursos || L.cursos.has(ci);
    const suave = (ci) => (L.suave && new RegExp(`^${L.suave}\\b`).test(IX.C[ci][1]) ? 1.35 : 1);
    // Materias, agrupadas por nombre (Matemáticas de todos los cursos juntas).
    const MS = IX.M.map((m) => { if (!okCurso(m.c)) return 0; const s = total(toks.map((_, i) => 3 * mejor(i, m.w))); return s ? (s + bonus(m.n)) * suave(m.c) : 0; });
    const grupos = new Map();
    IX.M.forEach((m, i) => {
      if (!(MS[i] > 0)) return;
      const g = grupos.get(m.g) || { n: m.g, s: 0, ms: [] };
      g.s = Math.max(g.s, MS[i]); g.ms.push(m); grupos.set(m.g, g);
    });
    out.materias = [...grupos.values()].sort((a, b) => b.s - a.s);
    if (out.materias.length) { const top = out.materias[0].s; out.materias = out.materias.filter((g) => g.s >= top * 0.55); }
    // Temas: cuenta más el título, después la materia, las palabras clave y, por último, el texto del tema.
    const tx = relax ? [] : toks.map(enTexto);
    IX.T.forEach((t, i) => {
      const m = IX.M[t.m];
      if (!okCurso(m.c)) return;
      let en = null;
      const parts = toks.map((_, k) => {
        const v = Math.max(3 * mejor(k, t.w), 2 * mejor(k, m.w), 1.4 * mejor(k, t.k));
        if (v || !tx[k]) return v;
        const h = tx[k].get(i); if (!h) return 0;
        en = en || h.w; return 0.9 * h.s;
      });
      let s = total(parts);
      if (!s) return;
      s = (s + bonus(t.t)) * suave(m.c);
      out.temas.push({ t, m, s, i, en });
    });
    out.temas.sort((a, b) => b.s - a.s || a.i - b.i);
    // Otras páginas (PAU, familias, profesores).
    if (!L.cursos || L.etapa === "pau") IX.P.forEach((p) => {
      if (L.etapa === "pau" && !/^pau\//.test(p.u)) return;
      let s = total(toks.map((_, k) => 3 * mejor(k, p.w)));
      if (s) out.paginas.push({ p, s: s + bonus(p.t) });
    });
    out.paginas.sort((a, b) => b.s - a.s);
    if (relax) { const top = (out.temas[0] || {}).s || 0; out.temas = out.temas.filter((x) => x.s >= top * 0.6).slice(0, 8); }
    // Orden de las secciones: primero la que mejor encaja (las materias, con ventaja).
    out.orden = [["materias", ((out.materias[0] || {}).s || 0) * 1.25], ["temas", (out.temas[0] || {}).s || 0], ["paginas", ((out.paginas[0] || {}).s || 0) * (L.etapa === "pau" ? 3 : 1)]].sort((a, b) => b[1] - a[1]).map((x) => x[0]);
    return out;
  }

  // ---------- pintar resultados ----------
  const url = (u) => `${W.BASE || "/"}${u}${W.IDX || ""}`;
  function resaltar(texto, toks) {
    return texto.split(/(\s+)/).map((p) => {
      if (!p.trim()) return p;
      const ws = norm(p).split(" ").filter(Boolean);
      return ws.some((w) => toks.some((t) => sc(t, w) >= 5)) ? `<mark>${esc(p)}</mark>` : esc(p);
    }).join("");
  }
  const chip = (m) => {
    const c = IX.C[m.c]; const suf = /\s(A|B)$/.exec(m.n);
    return `<a class="rs-chip" href="${url(m.u)}" title="${esc(m.n)} · ${esc(c[0])}">${esc(c[1])}${suf ? " " + suf[1] : ""}</a>`;
  };
  function pintar(out, R, q, mas) {
    const toks = R.L.toks; let h = "";
    if (R.cursos.length) h += `<div class="rs-sec"><h4>${R.cursos.length > 1 ? "Cursos" : "Curso"}</h4>${R.cursos.map((x) => `<div class="rs-mat"><a class="rs-name" href="${url(x.c[3])}">${esc(x.c[0])} →</a><span class="rs-chips">${x.ms.map((m) => `<a class="rs-chip" href="${url(m.u)}">${esc(m.n)}</a>`).join("")}</span></div>`).join("")}</div>`;
    const pag = R.paginas.slice(0, R.L.etapa === "pau" ? 6 : 3), S = {};
    if (pag.length) S.paginas = `<div class="rs-sec"><h4>${R.L.etapa === "pau" ? "PAU" : "PAU, familias y profesores"}</h4>${pag.map((x) => `<a class="rs-t" href="${url(x.p.u)}">${resaltar(x.p.t, toks)}</a>`).join("")}</div>`;
    if (R.materias.length) S.materias = `<div class="rs-sec"><h4>Materias</h4>${R.materias.slice(0, 4).map((g) => `<div class="rs-mat"><span class="rs-name">${resaltar(g.n, toks)}</span><span class="rs-chips">${g.ms.sort((a, b) => a.c - b.c).map(chip).join("")}</span></div>`).join("")}</div>`;
    if (R.temas.length) {
      const n = mas ? 60 : 8, ts = R.temas.slice(0, n);
      S.temas = `<div class="rs-sec"><h4>Temas <small>${R.temas.length}</small></h4>${ts.map((x) => `<a class="rs-t" href="${url(x.m.u + slug(x.t.t) + "/")}">${resaltar(x.t.t, toks)}<small>${esc(x.m.n)} · ${esc(IX.C[x.m.c][0])}${x.en ? ` · en el texto: «${esc(x.en)}»` : ""}</small></a>`).join("")}${R.temas.length > n ? `<button type="button" class="rs-more">Ver ${Math.min(R.temas.length, 60) - n} temas más</button>` : ""}</div>`;
    }
    for (const k of R.orden || ["paginas"]) h += S[k] || "";
    out.innerHTML = h;
    const b = out.querySelector(".rs-more");
    if (b) b.addEventListener("click", () => { pintar(out, R, q, true); const a = out.querySelectorAll(".rs-t")[8]; if (a) a.focus(); });
    return !!h;
  }
  function ejecutar(input, out) {
    const q = input.value;
    if (norm(q).replace(/ /g, "").length < 3) { out.innerHTML = q.trim() ? `<small class="rs-hint">Escribe al menos 3 letras.</small>` : ""; return; }
    pedirTexto(leer(q).toks);
    let R = buscar(q);
    if (pintar(out, R, q)) return;
    R = buscar(q, true);
    if (R.materias.length || R.temas.length || R.paginas.length) { pintar(out, R, q); out.insertAdjacentHTML("afterbegin", `<small class="rs-hint">No hay resultados exactos para «${esc(q.trim())}». ¿Quizás buscabas…?</small>`); return; }
    out.innerHTML = `<small class="rs-hint">No encontramos «${esc(q.trim())}». Prueba con otra palabra, el nombre de la materia o el curso (por ejemplo «fracciones 5 primaria»).</small>`;
  }

  // ---------- carga del índice (solo cuando alguien va a buscar) ----------
  let estado = 0; const esperan = [], activos = new Set();
  function js(f, cb) { const s = D.createElement("script"); s.src = `${W.BASE || "/"}assets/${f}?v=${W.EPV || ""}`; s.async = true; s.onload = cb; D.head.appendChild(s); }
  function cargar(cb) {
    if (estado === 2) return cb();
    if (!estado && W.EPIX) { preparar(); estado = 2; return cb(); } // índice ya incluido en la página
    esperan.push(cb);
    if (estado) return;
    estado = 1;
    js("buscador.js", () => {
      preparar(); estado = 2; esperan.splice(0).forEach((f) => f());
      js("buscador-claves.js", () => { claves(); activos.forEach((f) => f()); });
    });
  }

  function conectar(form) {
    const input = form.querySelector("input"), out = form.parentNode.querySelector(".results") || form.nextElementSibling;
    if (!input || !out) return;
    let tm = 0;
    const run = () => cargar(() => ejecutar(input, out));
    activos.add(() => { if (input.value.trim()) ejecutar(input, out); });
    input.addEventListener("focus", () => cargar(() => {}), { once: true });
    input.addEventListener("input", () => { clearTimeout(tm); tm = setTimeout(run, 60); });
    form.addEventListener("submit", (e) => { e.preventDefault(); cargar(() => { ejecutar(input, out); const a = out.querySelector("a"); if (a) location.href = a.href; }); });
    // Flechas para moverse por los resultados.
    const links = () => [...out.querySelectorAll("a,button")];
    input.addEventListener("keydown", (e) => { if (e.key === "ArrowDown") { const l = links(); if (l[0]) { e.preventDefault(); l[0].focus(); } } });
    out.addEventListener("keydown", (e) => {
      const l = links(), i = l.indexOf(D.activeElement);
      if (e.key === "ArrowDown" && i < l.length - 1) { e.preventDefault(); l[i + 1].focus(); }
      if (e.key === "ArrowUp") { e.preventDefault(); (i > 0 ? l[i - 1] : input).focus(); }
    });
  }
  D.querySelectorAll("form[data-search]").forEach(conectar);

  // Lupa de la cabecera: abre el buscador en cualquier página.
  const ab = D.getElementById("bs-open"), pn = D.getElementById("bs-panel");
  if (ab && pn) {
    const cerrar = () => { pn.hidden = true; ab.setAttribute("aria-expanded", "false"); };
    ab.addEventListener("click", () => {
      if (!pn.hidden) return cerrar();
      pn.hidden = false; ab.setAttribute("aria-expanded", "true");
      pn.querySelector("input").focus();
    });
    D.addEventListener("keydown", (e) => { if (e.key === "Escape" && !pn.hidden) { cerrar(); ab.focus(); } });
    D.addEventListener("click", (e) => { if (!pn.hidden && !pn.contains(e.target) && !ab.contains(e.target)) cerrar(); });
  }
  W.EPBusca = { buscar, leer, cargar: () => { preparar(); claves(); } };
})();

(function () {
  const S = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  };
  const $ = (id) => document.getElementById(id);

  /* ---------- tema ---------- */
  const T = window.TEMA;
  if (!T) return;
  const K = (k) => `ep:${T.id}:${k}`;

  document.querySelectorAll("[data-go]").forEach((a) => a.addEventListener("click", (e) => {
    e.preventDefault(); $(a.dataset.go).scrollIntoView({ behavior: "smooth" });
  }));
  const rv = $("rv");
  if (rv) rv.addEventListener("click", () => { $("rv-text").hidden = false; });

  // Herramientas: imprimir ficha y modo proyectar (para profesores).
  const pj = $("t-proj");
  if (pj) pj.addEventListener("click", () => {
    const on = document.body.classList.toggle("proyectar");
    pj.setAttribute("aria-pressed", on);
  });

  // Paso 3: preguntas con corrección inmediata.
  const qz = $("quiz"); let right = 0, done = 0;
  T.quiz.forEach((it, i) => {
    const box = document.createElement("div"); box.className = "q";
    box.innerHTML = `<p>${i + 1}. ${it.q}</p><div class="opts">${it.o.map((o, j) => `<button type="button" class="opt" data-j="${j}">${o}</button>`).join("")}</div><div class="fb" aria-live="polite"></div>`;
    let answered = false;
    box.querySelectorAll(".opt").forEach((b) => b.addEventListener("click", () => {
      if (answered) return; answered = true; done++;
      const j = +b.dataset.j, fb = box.querySelector(".fb");
      box.querySelectorAll(".opt")[it.a].classList.add("right");
      if (j === it.a) { right++; fb.className = "fb good"; fb.textContent = "¡Correcto! " + it.e; }
      else { b.classList.add("wrong"); fb.className = "fb bad"; fb.textContent = "Casi. " + it.e; }
      if (done === T.quiz.length) {
        $("score").textContent = `Resultado: ${right} de ${T.quiz.length}. ${right === T.quiz.length ? "¡Tema dominado!" : "Repasa las tarjetas del paso 6 y vuelve a intentarlo mañana."}`;
        const prog = S.get("ep:progreso") || {}; prog[T.id] = { nota: right, de: T.quiz.length, fecha: Date.now() }; S.set("ep:progreso", prog);
      }
    }));
    qz.appendChild(box);
  });

  // Paso 4: explicación con sus palabras (se guarda en el navegador).
  const ta = $("feyn");
  ta.value = S.get(K("feyn")) || "";
  ta.addEventListener("input", () => S.set(K("feyn"), ta.value));
  document.querySelectorAll(".check input").forEach((c) => {
    c.checked = !!S.get(K(c.id)); c.addEventListener("change", () => S.set(K(c.id), c.checked));
  });

  // Paso 6: tarjetas con repaso espaciado (1, 3, 7 y 21 días).
  const CARDS = T.tarjetas.slice(), STEPS = [1, 3, 7, 21];
  let st = S.get(K("cards"));
  if (!st || st.length !== CARDS.length) st = CARDS.map((c, i) => ({ i, lvl: 0, due: 0 }));
  let cur = -1;
  const fl = $("flash"), gb = [...document.querySelectorAll(".grade button")];
  function show() {
    const now = Date.now();
    cur = st.findIndex((s) => s.due <= now);
    fl.classList.remove("flip"); gb.forEach((b) => (b.disabled = true));
    if (cur < 0) {
      const next = Math.min(...st.map((s) => s.due));
      $("fc-q").textContent = "¡Repaso de hoy terminado!";
      $("fc-a").textContent = "Vuelve el " + new Date(next).toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" }) + ".";
      $("fc-count").textContent = "";
      return;
    }
    $("fc-count").textContent = `Quedan ${st.filter((s) => s.due <= now).length} hoy`;
    $("fc-q").textContent = CARDS[st[cur].i][0];
    $("fc-a").textContent = CARDS[st[cur].i][1];
  }
  fl.addEventListener("click", () => { if (cur < 0) return; fl.classList.toggle("flip"); gb.forEach((b) => (b.disabled = false)); });
  gb.forEach((b) => b.addEventListener("click", () => {
    if (cur < 0) return;
    const g = +b.dataset.g, s = st[cur];
    if (g === 0) { s.lvl = 0; s.due = 0; st.push(st.splice(cur, 1)[0]); $("fc-next").textContent = "Volverá a salir al final de esta sesión."; }
    else {
      s.lvl = Math.min(STEPS.length - 1, s.lvl + g);
      const d = STEPS[s.lvl]; s.due = Date.now() + d * 864e5;
      $("fc-next").textContent = `Esta tarjeta volverá dentro de ${d} día${d > 1 ? "s" : ""}.`;
    }
    S.set(K("cards"), st); show();
  }));
  show();
})();

/* ---------- examen de prueba por trimestre ---------- */
(function () {
  const X = window.EXAMEN;
  if (!X) return;
  const $ = (id) => document.getElementById(id);
  const K = "ep:examen:" + X.id;
  let t0 = 0, iv = 0;
  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  $("ex-start").addEventListener("click", () => {
    if (iv) return;
    t0 = Date.now(); const tm = $("ex-timer"); tm.hidden = false;
    iv = setInterval(() => {
      const left = X.min * 60 - Math.floor((Date.now() - t0) / 1000);
      tm.textContent = left > 0 ? `Tiempo: ${fmt(left)}` : "Tiempo terminado";
      tm.classList.toggle("late", left <= 60);
    }, 1000);
    $("ex-start").textContent = "Examen en marcha";
    $("ex-list").scrollIntoView({ behavior: "smooth" });
  });
  $("ex-check").addEventListener("click", () => {
    clearInterval(iv);
    let ok = 0; const fallos = {};
    document.querySelectorAll("#ex-list > li").forEach((li) => {
      const i = +li.dataset.i, q = X.p[i], sel = li.querySelector("input:checked"), fb = li.querySelector(".fb");
      li.querySelectorAll("input").forEach((r) => (r.disabled = true));
      li.querySelectorAll(".abc > li")[q.a].classList.add("right");
      if (sel && +sel.value === q.a) { ok++; fb.className = "fb good"; fb.textContent = "Correcto. " + q.e; }
      else { if (sel) sel.closest("li").classList.add("wrong"); fb.className = "fb bad"; fb.textContent = (sel ? "Incorrecto. " : "Sin responder. ") + q.e; fallos[q.tema] = q.u; }
    });
    const nota = Math.round((ok / X.p.length) * 100) / 10;
    let prev = null; try { prev = JSON.parse(localStorage.getItem(K)); } catch (e) {}
    try { localStorage.setItem(K, JSON.stringify({ nota: Math.max(nota, (prev && prev.nota) || 0), ultima: nota, fecha: Date.now() })); } catch (e) {}
    const r = $("ex-result"); r.hidden = false;
    const t = Object.keys(fallos);
    r.innerHTML = `<h2>Tu nota: ${nota.toLocaleString("es-ES")} / 10</h2><p>${ok} de ${X.p.length} correctas${t0 ? ` en ${fmt(Math.floor((Date.now() - t0) / 1000))}` : ""}.${prev ? ` Tu mejor nota anterior: ${prev.nota.toLocaleString("es-ES")}.` : ""}</p>` +
      (t.length ? `<p><b>Repasa estos temas</b> y vuelve a intentarlo dentro de unos días:</p><ul>${t.map((n) => `<li><a href="${fallos[n]}${window.IDX || ""}">${n}</a></li>`).join("")}</ul>` : "<p><b>¡Trimestre dominado!</b></p>") +
      `<button type="button" class="big" onclick="location.reload()">Repetir examen</button>`;
    $("ex-check").hidden = true; document.querySelector(".examen").classList.add("corregido");
    r.scrollIntoView({ behavior: "smooth" });
  });
})();

/*fbbox 2026-11-23: recuadro Síguenos en Facebook*/
window.__FBBOX={url:'https://www.facebook.com/profile.php?id=61596961436318',def:'es',bg:'#1f4fd1',fg:'#fff',btn:'#ffe76a',btnfg:'#1b2235',
t:{es:['Síguenos en Facebook','Cada día, trucos para estudiar, retos para toda la familia y los temas nuevos de Escolapedia.','Seguir en Facebook']}};
/* Recuadro «Síguenos en Facebook» (se añade al final del JS común de cada web) */
(function () {
  var C = window.__FBBOX; if (!C || document.getElementById('fbbox')) return;
  var lang = (document.documentElement.lang || 'es').slice(0, 2);
  var T = C.t[lang] || C.t[C.def];
  var css = '#fbbox{max-width:' + (C.max || 1100) + 'px;margin:32px auto 24px;padding:0 16px;box-sizing:border-box;font-family:inherit}' +
    '#fbbox .fbb{display:flex;align-items:center;gap:18px;flex-wrap:wrap;background:' + C.bg + ';color:' + C.fg + ';border-radius:16px;padding:20px 22px;box-shadow:0 4px 18px rgba(0,0,0,.08)}' +
    '#fbbox .fbi{flex:none;width:52px;height:52px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center}' +
    '#fbbox .fbt{flex:1 1 260px;min-width:0}#fbbox .fbt b{display:block;font-size:1.15em;margin-bottom:4px;color:' + C.fg + '}' +
    '#fbbox .fbt span{opacity:.9;font-size:.97em;line-height:1.45}' +
    '#fbbox a.fbbtn{box-sizing:border-box;flex:none;display:inline-flex;align-items:center;gap:8px;background:' + C.btn + ';color:' + C.btnfg + ';text-decoration:none;font-weight:700;padding:12px 20px;border-radius:999px;font-size:1em;white-space:nowrap}' +
    '#fbbox a.fbbtn:hover{filter:brightness(1.08)}@media(max-width:560px){#fbbox a.fbbtn{width:100%;justify-content:center}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var ico = '<svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path fill="#1877F2" d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v2.9h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z"/></svg>';
  var d = document.createElement('section'); d.id = 'fbbox'; d.setAttribute('aria-label', 'Facebook');
  d.innerHTML = '<div class="fbb"><div class="fbi">' + ico + '</div><div class="fbt"><b>' + T[0] + '</b><span>' + T[1] + '</span></div>' +
    '<a class="fbbtn" href="' + C.url + '" target="_blank" rel="noopener">' + T[2] + ' →</a></div>';
  function put() { var f = document.querySelector('footer'); if (f && f.parentNode) f.parentNode.insertBefore(d, f); else document.body.appendChild(d); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', put); else put();
})();
