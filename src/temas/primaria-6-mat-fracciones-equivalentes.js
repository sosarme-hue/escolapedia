// Matemáticas 6º de Primaria. Dibujos propios en SVG.
const F = 'font-family="Atkinson Hyperlegible, sans-serif"';

// Barra dividida en n partes con k coloreadas.
function barra(x, y, w, h, n, k, color, etiqueta) {
  let out = "";
  for (let i = 0; i < n; i++) {
    const px = x + (w / n) * i;
    out += `<rect x="${px.toFixed(1)}" y="${y}" width="${(w / n).toFixed(1)}" height="${h}" fill="${i < k ? color : "var(--card)"}" stroke="var(--ink)" stroke-width="2"/>`;
  }
  if (etiqueta) out += `<text x="${x - 12}" y="${y + h / 2 + 6}" text-anchor="end" font-size="18" font-weight="700" fill="var(--ink)" ${F}>${etiqueta}</text>`;
  return out;
}

module.exports = {
  materia: "Matemáticas",
  curso: "6-primaria",
  titulo: "Fracciones equivalentes",
  minutos: 25,
  objetivos: ["Reconocer fracciones que valen lo mismo", "Obtenerlas por amplificación y simplificación", "Comprobarlas con los productos cruzados"],
  claves: ["numerador", "denominador", "amplificar", "simplificar", "fracción irreducible"],
  pregunta: {
    texto: "Lucía se come 1/2 pizza y Marco se come 4/8 de otra pizza igual. ¿Quién ha comido más?",
    respuesta: "Han comido <mark>exactamente lo mismo</mark>. Marco cortó su pizza en más trozos, pero más pequeños. 1/2 y 4/8 son fracciones equivalentes: se escriben distinto y valen igual.",
  },
  bloques: [
    {
      html: `<h3>Recuerda: qué dice una fracción</h3><p>En una fracción, el <b>denominador</b> (abajo) dice en cuántas partes iguales se divide la unidad. El <b>numerador</b> (arriba) dice cuántas partes tomamos. En 3/4 dividimos en 4 partes y tomamos 3.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Barra dividida en 4 partes con 3 coloreadas, y la fracción 3/4 con sus partes señaladas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${barra(30, 30, 200, 44, 4, 3, "var(--pen)")}
        <text x="80" y="140" text-anchor="middle" font-size="40" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">3</text>
        <line x1="60" y1="150" x2="100" y2="150" stroke="var(--ink)" stroke-width="3"/>
        <text x="80" y="176" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">4</text>
        <text x="116" y="118" font-size="14" font-weight="700" fill="var(--pen)" ${F}>numerador</text>
        <text x="116" y="134" font-size="13" fill="var(--muted)" ${F}>partes que tomo</text>
        <text x="116" y="160" font-size="14" font-weight="700" fill="var(--ink)" ${F}>denominador</text>
        <text x="116" y="176" font-size="13" fill="var(--muted)" ${F}>partes en total</text>
      </svg>`,
    },
    {
      html: `<h3>Mismo valor, distinta forma</h3><p>Dos fracciones son <mark>equivalentes</mark> cuando representan la misma cantidad. Mira las barras: 1/2, 2/4 y 4/8 ocupan el mismo trozo de la unidad, aunque estén partidas de forma distinta.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres barras iguales: 1/2, 2/4 y 4/8 coloreadas hasta la mitad">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${barra(70, 22, 170, 36, 2, 1, "var(--leaf)", "1/2")}
        ${barra(70, 72, 170, 36, 4, 2, "var(--leaf)", "2/4")}
        ${barra(70, 122, 170, 36, 8, 4, "var(--leaf)", "4/8")}
        <line x1="155" y1="12" x2="155" y2="168" stroke="var(--red)" stroke-width="2.5" stroke-dasharray="6 5"/>
      </svg>`,
    },
    {
      html: `<h3>Amplificar: multiplicar arriba y abajo</h3><p>Para conseguir una fracción equivalente, <mark>multiplica el numerador y el denominador por el mismo número</mark>. Es como cortar cada trozo en partes más pequeñas: hay más trozos, pero la cantidad no cambia.</p><div class="formula" aria-label="2 tercios por 3 arriba y abajo da 6 novenos"><span>2/3</span><span class="op">→ ×3 arriba y abajo →</span><span style="color:var(--pen)">6/9</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="2/3 se convierte en 6/9 al cortar cada tercio en tres partes">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${barra(70, 36, 170, 44, 3, 2, "var(--pen)", "2/3")}
        ${barra(70, 110, 170, 44, 9, 6, "var(--pen)", "6/9")}
        <text x="155" y="100" text-anchor="middle" font-size="14" font-weight="700" fill="var(--red)" ${F}>× 3 cada trozo</text>
      </svg>`,
    },
    {
      html: `<h3>Simplificar: dividir arriba y abajo</h3><p>También podemos <mark>dividir el numerador y el denominador entre el mismo número</mark>. Así la fracción se hace más sencilla. Cuando ya no se puede dividir más, decimos que es <b>irreducible</b>: 12/18 → 6/9 → 2/3.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escalera de simplificación: 12/18 entre 2 da 6/9, entre 3 da 2/3, irreducible">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g font-family="Baloo 2, sans-serif" font-weight="700" font-size="28">
          <text x="40" y="60" fill="var(--ink)">12/18</text>
          <text x="110" y="110" fill="var(--ink)">6/9</text>
          <text x="180" y="160" fill="var(--leaf)">2/3</text>
        </g>
        <g ${F} font-size="13" fill="var(--red)" font-weight="700">
          <text x="64" y="94">÷ 2</text><text x="134" y="144">÷ 3</text>
        </g>
        <path d="M70 70 L 100 92 M140 120 L 170 142" stroke="var(--red)" stroke-width="2.5" fill="none"/>
        <text x="186" y="176" font-size="12" fill="var(--muted)" ${F}>irreducible</text>
      </svg>`,
    },
    {
      html: `<h3>El truco para comprobarlo: productos cruzados</h3><p>¿Son equivalentes 3/4 y 9/12? Multiplica en cruz: 3 × 12 = 36 y 4 × 9 = 36. Si los dos productos <mark>dan lo mismo</mark>, las fracciones son equivalentes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Productos cruzados de 3/4 y 9/12: 3 por 12 igual a 36, 4 por 9 igual a 36">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g font-family="Baloo 2, sans-serif" font-weight="700" font-size="34" fill="var(--ink)">
          <text x="70" y="70" text-anchor="middle">3</text><text x="70" y="124" text-anchor="middle">4</text>
          <text x="180" y="70" text-anchor="middle">9</text><text x="180" y="124" text-anchor="middle">12</text>
        </g>
        <line x1="50" y1="84" x2="90" y2="84" stroke="var(--ink)" stroke-width="3"/><line x1="156" y1="84" x2="204" y2="84" stroke="var(--ink)" stroke-width="3"/>
        <path d="M86 58 L 160 116" stroke="var(--pen)" stroke-width="3"/><path d="M86 116 L 164 58" stroke="var(--inf)" stroke-width="3"/>
        <text x="20" y="166" font-size="15" font-weight="700" fill="var(--pen)" ${F}>3 × 12 = 36</text>
        <text x="140" y="166" font-size="15" font-weight="700" fill="var(--inf)" ${F}>4 × 9 = 36 ✓</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "La familia de 1/2 de un vistazo",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Cinco barras iguales coloreadas hasta la mitad: 1/2, 2/4, 3/6, 4/8 y 6/12">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${barra(110, 24, 480, 36, 2, 1, "var(--sun)", "1/2")}
      ${barra(110, 78, 480, 36, 4, 2, "var(--sun)", "2/4")}
      ${barra(110, 132, 480, 36, 6, 3, "var(--sun)", "3/6")}
      ${barra(110, 186, 480, 36, 8, 4, "var(--sun)", "4/8")}
      ${barra(110, 240, 480, 36, 12, 6, "var(--sun)", "6/12")}
      <line x1="350" y1="14" x2="350" y2="288" stroke="var(--red)" stroke-width="3" stroke-dasharray="8 6"/>
    </svg>`,
  },
  video: { titulo: "Fracciones equivalentes explicadas para Primaria", canal: "Selección pendiente", busqueda: "fracciones equivalentes primaria explicación" },
  quiz: [
    { q: "¿Cuál de estas fracciones es equivalente a 1/3?", o: ["2/3", "3/9", "1/6"], a: 1, e: "3/9 sale de multiplicar 1/3 por 3 arriba y abajo: 1×3 = 3 y 3×3 = 9." },
    { q: "Si amplificamos 2/5 por 4, ¿qué obtenemos?", o: ["8/20", "6/9", "8/5"], a: 0, e: "Se multiplican los dos términos: 2×4 = 8 y 5×4 = 20." },
    { q: "¿Cuál es la fracción irreducible de 10/15?", o: ["5/7", "2/3", "1/5"], a: 1, e: "Dividimos entre 5 arriba y abajo: 10÷5 = 2 y 15÷5 = 3. Ya no se puede simplificar más." },
    { q: "¿Son equivalentes 4/6 y 6/9?", o: ["Sí, porque 4×9 = 6×6 = 36", "No, porque tienen números distintos", "Solo si se simplifican"], a: 0, e: "Los productos cruzados dan igual (36 y 36), así que son equivalentes. Las dos se simplifican a 2/3." },
    { q: "Marta come 3/4 de tarta y Pablo 6/8 de otra tarta igual. ¿Quién come más?", o: ["Marta", "Pablo", "Los dos lo mismo"], a: 2, e: "6/8 simplificado entre 2 es 3/4. Han comido lo mismo." },
  ],
  feynman: ["Qué significan numerador y denominador", "Qué quiere decir que dos fracciones son equivalentes", "Cómo se amplifica y cómo se simplifica", "Cómo se comprueba con los productos cruzados"],
  mapa: `<svg viewBox="0 0 700 300" role="img" aria-label="Mapa mental de las fracciones equivalentes">
    <g ${F} font-size="15">
      <g stroke="var(--line)" stroke-width="3"><path d="M350 150 L 140 60"/><path d="M350 150 L 140 240"/><path d="M350 150 L 560 60"/><path d="M350 150 L 560 240"/></g>
      <rect x="230" y="122" width="240" height="56" rx="28" fill="var(--mat, #7b3fc4)"/>
      <text x="350" y="157" text-anchor="middle" font-size="19" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">FRACCIONES EQUIVALENTES</text>
      <rect x="40" y="34" width="200" height="52" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
      <text x="140" y="56" text-anchor="middle" font-weight="700" fill="var(--ink)">Qué son</text>
      <text x="140" y="75" text-anchor="middle" fill="var(--muted)" font-size="13">mismo valor, distinta forma</text>
      <rect x="460" y="34" width="200" height="52" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
      <text x="560" y="56" text-anchor="middle" font-weight="700" fill="var(--pen)">Amplificar</text>
      <text x="560" y="75" text-anchor="middle" fill="var(--ink)" font-size="13">× mismo número arriba y abajo</text>
      <rect x="40" y="214" width="200" height="52" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>
      <text x="140" y="236" text-anchor="middle" font-weight="700" fill="var(--leaf)">Simplificar</text>
      <text x="140" y="255" text-anchor="middle" fill="var(--ink)" font-size="13">÷ mismo número → irreducible</text>
      <rect x="460" y="214" width="200" height="52" rx="10" fill="var(--card)" stroke="var(--inf)" stroke-width="2"/>
      <text x="560" y="236" text-anchor="middle" font-weight="700" fill="var(--inf)">Comprobar</text>
      <text x="560" y="255" text-anchor="middle" fill="var(--ink)" font-size="13">productos cruzados iguales</text>
    </g>
  </svg>`,
  tarjetas: [
    ["¿Qué son fracciones equivalentes?", "Fracciones que representan la misma cantidad, como 1/2 y 2/4."],
    ["¿Cómo se amplifica una fracción?", "Multiplicando numerador y denominador por el mismo número."],
    ["¿Cómo se simplifica una fracción?", "Dividiendo numerador y denominador entre el mismo número."],
    ["¿Qué es una fracción irreducible?", "La que ya no se puede simplificar más, como 2/3."],
    ["¿Cómo compruebo si a/b y c/d son equivalentes?", "Si a × d = b × c."],
  ],
  familias: ["Al cortar una pizza o una tortilla, preguntad: «¿2/4 es más o menos que 1/2?».", "Usad una tableta de chocolate para formar fracciones equivalentes partiendo onzas.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sentido numérico: fracciones y su equivalencia; comparación y representación (RD 157/2022, tercer ciclo).",
    ideas: ["Tiras de papel: plegar en 2, 4 y 8 partes y comparar.", "Dominó de fracciones equivalentes por parejas.", "Recta numérica en el suelo para colocar fracciones que valen lo mismo."],
  },
  fuentes: [
    { t: "Real Decreto 157/2022, enseñanzas mínimas de Primaria (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296" },
  ],
  revisado: "2026-11-12",
};
