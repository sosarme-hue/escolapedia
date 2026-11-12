// Matemáticas B 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Matemáticas B",
  curso: "4-eso",
  titulo: "Combinatoria",
  minutos: 40,
  objetivos: ["Contar posibilidades con diagramas de árbol y el principio de multiplicación", "Distinguir variaciones, permutaciones y combinaciones", "Calcular factoriales y números combinatorios y aplicarlos a problemas"],
  claves: ["diagrama de árbol", "factorial", "variación", "permutación", "combinación", "orden"],
  pregunta: {
    texto: "Un candado tiene 4 ruedas con las cifras del 0 al 9. ¿Cuántas combinaciones tendría que probar un ladrón, como mucho, para abrirlo?",
    respuesta: "En cada rueda hay 10 opciones y se pueden repetir: 10 · 10 · 10 · 10 = <mark>10.000</mark>. Curiosamente, en matemáticas esto no es una «combinación» sino una <b>variación con repetición</b>, porque el orden importa: 1234 no abre lo mismo que 4321.",
  },
  bloques: [
    {
      html: `<h3>El principio de multiplicación</h3><p>Si una elección se hace en varias etapas, el número total de posibilidades es el <mark>producto</mark> de las opciones de cada etapa. Con 3 camisetas y 2 pantalones puedes vestirte de 3 · 2 = 6 formas. El <b>diagrama de árbol</b> permite verlo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de árbol: tres camisetas, cada una con dos pantalones, dan seis conjuntos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="24" cy="90" r="6" fill="var(--ink)"/>
        ${[0, 1, 2].map((i) => { const y = 34 + i * 56, c = ["var(--red)", "var(--pen)", "var(--leaf)"][i]; return `<path d="M24 90 L 100 ${y}" stroke="var(--muted)" stroke-width="2"/><rect x="92" y="${y - 10}" width="20" height="20" rx="4" fill="${c}"/>
          ${[-1, 1].map((s) => `<path d="M112 ${y} L 180 ${y + s * 14}" stroke="var(--muted)" stroke-width="2"/><rect x="182" y="${y + s * 14 - 8}" width="12" height="16" rx="2" fill="${s < 0 ? "var(--ink)" : "var(--inf)"}"/>`).join("")}`; }).join("")}
        <text x="226" y="94" text-anchor="middle" font-size="18" font-weight="700" fill="var(--ink)" ${F}>3·2</text><text x="226" y="116" text-anchor="middle" font-size="18" font-weight="700" fill="var(--red)" ${F}>= 6</text></svg>`,
    },
    {
      html: `<h3>El factorial</h3><p>El <b>factorial</b> de n, n!, es el producto de todos los números de n hasta 1: <mark>5! = 5 · 4 · 3 · 2 · 1 = 120</mark>. Por convenio, 0! = 1. Crece muy deprisa: 10! ya es más de 3,6 millones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Barras con los factoriales de 1 a 5: 1, 2, 6, 24 y 120, que crecen muy rápido">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/><path d="M20 150 H 246" stroke="var(--muted)" stroke-width="2"/>
        ${[[1, 1], [2, 2], [3, 6], [4, 24], [5, 120]].map(([n, v], i) => `<rect x="${30 + i * 44}" y="${150 - v}" width="30" height="${Math.max(2, v)}" rx="4" fill="var(--pen)"/><text x="${45 + i * 44}" y="${144 - v}" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${v}</text><text x="${45 + i * 44}" y="168" text-anchor="middle" font-size="12" font-weight="700" fill="var(--muted)" ${F}>${n}!</text>`).join("")}</svg>`,
    },
    {
      html: `<h3>Variaciones y permutaciones: el orden importa</h3><p>Las <b>variaciones</b> V(m, n) cuentan cuántas filas ordenadas de n elementos puedes formar con m: <mark>V(m, n) = m · (m − 1) · … (n factores)</mark>. Si usas todos los elementos (n = m) son <b>permutaciones</b>: Pₘ = m!. Si se pueden repetir, son variaciones con repetición: mⁿ.</p>
      <div class="formula"><span>Podio de 8 corredores: V(8, 3) = 8 · 7 · 6 = 336</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Podio con 8 opciones para oro, 7 para plata y 6 para bronce: 336 podios posibles">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="100" y="70" width="60" height="90" fill="var(--hl)"/><rect x="40" y="100" width="60" height="60" fill="var(--line)"/><rect x="160" y="120" width="60" height="40" fill="var(--inf)" fill-opacity=".5"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="130" y="110" font-size="22" fill="var(--hl-ink)">8</text><text x="70" y="136" font-size="20" fill="var(--ink)">7</text><text x="190" y="146" font-size="18" fill="var(--ink)">6</text>
        <text x="130" y="40" font-size="16" fill="var(--red)">8 · 7 · 6 = 336</text></g></svg>`,
    },
    {
      html: `<h3>Combinaciones: el orden no importa</h3><p>Las <b>combinaciones</b> C(m, n) cuentan <mark>grupos</mark> de n elementos elegidos entre m, sin importar el orden. Se calculan con el número combinatorio:</p><div class="formula"><span>C(m, n) = (m sobre n) = m! / (n! · (m − n)!)</span></div><p>Elegir 2 delegados entre 5: C(5, 2) = 10 parejas (Ana-Luis es la misma pareja que Luis-Ana).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Con 5 personas se forman 10 parejas distintas si el orden no importa; si importara, serían 20">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[...Array(5)].map((_, i) => { const a = (-90 + i * 72) * Math.PI / 180; return [80 + 52 * Math.cos(a), 90 + 52 * Math.sin(a)]; }).map((p, i, arr) => arr.slice(i + 1).map((q) => `<path d="M${p[0].toFixed(1)} ${p[1].toFixed(1)} L ${q[0].toFixed(1)} ${q[1].toFixed(1)}" stroke="var(--leaf)" stroke-width="2"/>`).join("") + `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="10" fill="var(--pen)"/><text x="${p[0].toFixed(1)}" y="${(p[1] + 4).toFixed(1)}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>${"ABCDE"[i]}</text>`).join("")}
        <g ${F} font-weight="700"><text x="150" y="80" font-size="15" fill="var(--leaf)">10 líneas</text><text x="150" y="100" font-size="13" fill="var(--ink)">= 10 parejas</text><text x="150" y="130" font-size="12" fill="var(--muted)">C(5, 2) = 10</text></g></svg>`,
    },
    {
      html: `<h3>¿Qué fórmula uso?</h3><p>Hazte tres preguntas: <mark>¿entran todos los elementos?</mark> (permutación), <mark>¿importa el orden?</mark> (variación) o no (combinación), y <mark>¿se pueden repetir?</mark>. Ejemplos: un número de teléfono (variación con repetición), ordenar libros en una estantería (permutación), una mano de cartas (combinación).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de decisión: si entran todos es permutación; si no, si importa el orden es variación y si no, combinación">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="70" y="14" width="120" height="32" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><text x="130" y="35" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>¿entran todos?</text>
        <path d="M100 46 L 54 70 M160 46 L 196 70" stroke="var(--muted)" stroke-width="2"/>
        <rect x="10" y="72" width="88" height="30" rx="10" fill="var(--inf)"/><text x="54" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>sí → P = m!</text>
        <rect x="140" y="72" width="112" height="30" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><text x="196" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>¿importa orden?</text>
        <path d="M170 102 L 140 128 M222 102 L 226 128" stroke="var(--muted)" stroke-width="2"/>
        <rect x="88" y="130" width="96" height="30" rx="10" fill="var(--pen)"/><text x="136" y="150" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>sí → variación</text>
        <rect x="188" y="130" width="64" height="30" rx="10" fill="var(--leaf)"/><text x="220" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>no → C</text></svg>`,
    },
  ],
  figura: {
    titulo: "Las fórmulas de contar, con un ejemplo cada una",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Tabla con permutaciones, variaciones, variaciones con repetición y combinaciones, su fórmula y un ejemplo">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Permutaciones", "Pₘ = m!", "ordenar 6 libros: 720", "var(--inf)"], ["Variaciones", "V(m, n) = m!/(m − n)!", "podio de 8: 336", "var(--pen)"], ["Var. con repetición", "VR(m, n) = mⁿ", "candado de 4 cifras: 10.000", "var(--red)"], ["Combinaciones", "C(m, n) = m!/(n!(m − n)!)", "2 delegados de 5: 10", "var(--leaf)"]].map(([n, f, e, c], i) => `<rect x="20" y="${18 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
        <text x="36" y="${45 + i * 50}" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text><text x="222" y="${45 + i * 50}" font-size="15" fill="var(--ink)" ${F}>${f}</text><text x="440" y="${45 + i * 50}" font-size="14" fill="var(--muted)" ${F}>${e}</text>`).join("")}
    </svg>`,
  },
  video: { id: "h4IfRXoVcpo", titulo: "Combinaciones, permutaciones y variaciones", canal: "Matemáticas profe Alex", vistas: 1661631, megusta: 49630, busqueda: "combinaciones permutaciones variaciones" },
  quiz: [
    { q: "¿Cuánto vale 4!?", o: ["16", "24", "10"], a: 1, e: "4 · 3 · 2 · 1 = 24." },
    { q: "¿De cuántas formas se pueden sentar 5 amigos en 5 sillas en fila?", o: ["25", "120", "10"], a: 1, e: "Permutaciones de 5: 5! = 120." },
    { q: "¿Cuántas matrículas de 3 letras (de 26) se pueden formar si se pueden repetir?", o: ["26³ = 17.576", "26 · 25 · 24", "C(26, 3)"], a: 0, e: "Importa el orden y se repiten: 26³." },
    { q: "¿Cuántos equipos de 3 se pueden elegir entre 6 personas?", o: ["120", "20", "18"], a: 1, e: "No importa el orden: C(6, 3) = 720 / (6 · 6) = 20." },
    { q: "Elegir presidente y secretario entre 10 personas es…", o: ["Combinación", "Variación", "Permutación"], a: 1, e: "Importa el orden (cargos distintos) y no entran todos: V(10, 2) = 90." },
  ],
  examen: [
    { q: "C(7, 2) =", o: ["21", "42", "14"], a: 0, e: "7 · 6 / 2 = 21." },
    { q: "¿Cuántos números de 3 cifras distintas se forman con 1, 2, 3, 4 y 5?", o: ["60", "125", "10"], a: 0, e: "V(5, 3) = 5 · 4 · 3 = 60." },
    { q: "Hay 4 caminos de A a B y 3 de B a C. ¿Cuántas formas de ir de A a C pasando por B?", o: ["7", "12", "64"], a: 1, e: "Principio de multiplicación: 4 · 3." },
  ],
  feynman: ["Qué dice el principio de multiplicación con un ejemplo de ropa", "Qué es el factorial y por qué 0! = 1 por convenio", "Qué diferencia hay entre una variación y una combinación", "Cómo decido qué fórmula usar"],
  mapa: mapa("COMBINATORIA", "var(--bac)", [
    ["Contar", "árbol · producto de opciones", "var(--ink)"],
    ["Permutaciones", "todos · Pₘ = m!", "var(--inf)"],
    ["Variaciones", "orden importa · mⁿ si se repite", "var(--pen)"],
    ["Combinaciones", "orden no importa · C(m, n)", "var(--leaf)"],
  ], 270),
  tarjetas: [
    ["n! =", "n · (n − 1) · … · 2 · 1; y 0! = 1."],
    ["¿Cuándo es permutación?", "Cuando se ordenan todos los elementos: m!."],
    ["¿Cuándo es combinación?", "Cuando se eligen grupos y el orden no importa."],
    ["Fórmula de C(m, n)", "m! / (n! · (m − n)!)"],
    ["Candado de 4 ruedas del 0 al 9", "Variación con repetición: 10⁴ = 10.000."],
  ],
  familias: ["Contad juntos de cuántas formas podéis sentaros a la mesa los de casa.", "Preguntadle cuántas apuestas distintas hay en una quiniela o una primitiva y por qué es tan difícil ganar.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido estocástico: técnicas de recuento, diagramas de árbol, variaciones, permutaciones y combinaciones (RD 217/2022, Matemáticas B 4º).",
    ideas: ["Contar a mano todas las parejas de un grupo pequeño y descubrir la fórmula.", "Calcular la probabilidad de acertar la lotería primitiva con números combinatorios.", "Construir el triángulo de Pascal y relacionarlo con C(m, n)."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Combinatoria, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Combinatoria" },
  ],
  revisado: "2026-11-12",
};
