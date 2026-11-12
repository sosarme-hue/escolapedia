/* Escolapedia: interacción de los temas (preguntas, explicación, tarjetas de repaso) y buscador. Sin dependencias. */
(function () {
  const S = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  };
  const $ = (id) => document.getElementById(id);

  /* ---------- buscador ---------- */
  const form = $("search");
  if (form && window.INDICE) {
    const input = $("q"), out = $("results");
    const norm = (t) => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    const run = () => {
      const v = norm(input.value.trim());
      out.innerHTML = "";
      if (v.length < 3) return;
      const hits = window.INDICE.filter((x) => norm(x.t + " " + x.m).includes(v)).slice(0, 8);
      out.innerHTML = hits.length
        ? hits.map((x) => `<a href="${window.BASE}${x.u}${window.IDX || ""}">${x.t}<br><small>${x.m} · ${x.c}${x.ok ? "" : " · próximamente"}</small></a>`).join("")
        : "<small>Aún no hay ningún tema con ese nombre. Prueba con otra palabra.</small>";
    };
    input.addEventListener("input", run);
    form.addEventListener("submit", (e) => { e.preventDefault(); run(); const a = out.querySelector("a"); if (a) location.href = a.href; });
  }

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
