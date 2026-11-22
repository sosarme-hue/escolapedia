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
        <text x="80" y="171" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">4</text>
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
  video: { id: "osePKL39EBo", titulo: "Fracciones equivalentes súper fácil", canal: "Daniel Carreón", vistas: 10380320, megusta: 260262, busqueda: "fracciones equivalentes" },
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
      <rect x="200" y="122" width="300" height="56" rx="28" fill="var(--mat, #7b3fc4)"/>
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

// ---------- Nivel libro (6º de Primaria) ----------
// Este tema tenía el formato antiguo, sin ejemplos, errores, ejercicios ni examen: se preparan antes.
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
Object.assign(module.exports, { ejemplos: [], errores: [], ejercicios: [], examen: [] });
require("./_priL").libro(module.exports, {
  minutos: 75,
  objetivos: ["Simplificar de una vez usando el máximo común divisor", "Buscar el término que falta en una igualdad de fracciones", "Reducir a común denominador para comparar y ordenar", "Relacionar fracciones, decimales y porcentajes equivalentes"],
  lectura: { titulo: "Los panes de los escribas egipcios", html: `<p>Hace más de 3 600 años, un escriba egipcio llamado <b>Ahmes</b> copió en un largo rollo de papiro decenas de problemas de matemáticas. Hoy ese rollo se conoce como el <b>papiro de Rhind</b> y se guarda en el Museo Británico de Londres.</p><p>Muchos de sus problemas trataban de algo muy práctico: repartir panes y cerveza entre los trabajadores. Por ejemplo: ¿cómo se reparten <b>3 panes entre 4 personas</b>?</p><p>Nosotros diríamos que a cada uno le tocan 3/4 de pan. Pero los egipcios casi solo usaban fracciones con un 1 arriba, como 1/2, 1/4 o 1/8 (con alguna excepción, como 2/3). Así que lo resolvían de otra manera: partían dos panes por la mitad y el tercero en cuatro trozos. Cada persona recibía <b>1/2 + 1/4</b> de pan.</p><p>Fíjate: 1/2 son 2/4, y 2/4 + 1/4 = 3/4. ¡El reparto es exactamente el mismo! Los egipcios y nosotros escribimos las cantidades de forma distinta, pero cada persona come lo mismo. Esa idea, que una misma cantidad puede escribirse de muchas formas, es la clave de las <b>fracciones equivalentes</b>.</p>` },
  tras: {
    "Recuerda: qué dice una fracción": [
      ["Fracciones propias, impropias y números mixtos", `<p>Según cómo sean sus términos, las fracciones se clasifican en:</p><ul><li><b>Propias</b>: el numerador es <b>menor</b> que el denominador, como 3/4 o 2/5. Valen <b>menos que una unidad</b>.</li><li><b>Iguales a la unidad</b>: el numerador y el denominador son iguales, como 4/4 o 7/7. Valen exactamente <b>1</b>.</li><li><b>Impropias</b>: el numerador es <b>mayor</b> que el denominador, como 7/4 o 11/3. Valen <b>más que una unidad</b>.</li></ul><p>Una fracción impropia se puede escribir como <b>número mixto</b>: un número natural y una fracción propia. Para hacerlo se divide el numerador entre el denominador:</p><ul><li>7/4: 7 : 4 = 1 y sobran 3. Entonces 7/4 = <b>1 y 3/4</b>, es decir, una unidad entera y tres cuartos más.</li><li>11/3: 11 : 3 = 3 y sobran 2. Entonces 11/3 = <b>3 y 2/3</b>.</li></ul><p>Y al revés: para pasar 2 y 1/5 a fracción, se multiplica 2 × 5 = 10 y se suma 1: <b>11/5</b>.</p><p>Fíjate en que 4/4, 7/7 y 100/100 son fracciones equivalentes entre sí: todas valen 1.</p>`,
        L6.filas("Tipos de fracciones", [["propia", "3/4 < 1", cAZ], ["igual a 1", "4/4 = 1", cVE], ["impropia", "7/4 > 1", cRO], ["número mixto", "7/4 = 1 y 3/4", cNA]])],
    ],
    "Mismo valor, distinta forma": [
      ["Equivalentes en la recta numérica", `<p>Las fracciones también se pueden colocar en la <b>recta numérica</b>. Para situar una fracción, se divide cada unidad en tantas partes iguales como indica el denominador y se cuentan las partes que indica el numerador.</p><p>Si colocamos 1/2, 2/4 y 3/6 en la misma recta, ocurre algo muy claro: <b>las tres caen en el mismo punto</b>, justo en la mitad entre 0 y 1. Eso es lo que significa ser equivalentes: ocupar el mismo lugar en la recta.</p><ul><li>Para 1/2, dividimos la unidad en 2 partes y contamos 1.</li><li>Para 2/4, dividimos en 4 partes y contamos 2.</li><li>Para 3/6, dividimos en 6 partes y contamos 3.</li></ul><p>Lo mismo pasa con las fracciones impropias: 3/2 y 6/4 caen las dos en el mismo punto, entre el 1 y el 2, que corresponde al número decimal <b>1,5</b>.</p><p>La recta también ayuda a <b>comparar</b>: de dos fracciones, es mayor la que queda más a la derecha. Y a ver que entre dos fracciones cualesquiera siempre hay otras: entre 1/4 y 2/4 está, por ejemplo, 3/8, que es lo mismo que el punto medio entre 2/8 y 4/8.</p>`,
        H6.flujo("Situar 3/6", ["Dividir|en 6", "Contar|3", "Mismo punto|que 1/2"], cVE), ["TvLbbFKIfEw", "UBICAR VARIAS FRACCIONES EN LA RECTA Super facil - Para principiantes", "Daniel Carreón", 7427728]],
    ],
    "Simplificar: dividir arriba y abajo": [
      ["Simplificar de una vez con el m.c.d.", `<p>Para simplificar podemos ir dividiendo poco a poco: 24/36 → (entre 2) 12/18 → (entre 2) 6/9 → (entre 3) 2/3. Funciona, pero hacen falta varios pasos y es fácil equivocarse.</p><p>Hay un camino más rápido: dividir el numerador y el denominador entre su <b>máximo común divisor</b> (m.c.d.), que es el mayor número que divide a los dos. Así se llega a la fracción irreducible <b>en un solo paso</b>.</p><ul><li>24/36: los divisores comunes de 24 y 36 son 1, 2, 3, 4, 6 y 12. El mayor es 12. Entonces 24 : 12 = 2 y 36 : 12 = 3, y queda <b>2/3</b>.</li><li>18/24: m.c.d.(18, 24) = 6. Queda <b>3/4</b>.</li><li>45/60: m.c.d.(45, 60) = 15. Queda <b>3/4</b>.</li></ul><p>¿Cómo sabemos que una fracción ya es irreducible? Cuando el m.c.d. de sus términos es 1, es decir, cuando no tienen ningún divisor común aparte del 1. Por ejemplo, 8/15 es irreducible, porque 8 = 2 × 2 × 2 y 15 = 3 × 5 no comparten ningún factor.</p><p>Simplificar es muy útil: con números pequeños se calcula y se compara mucho mejor.</p>`,
        L6.filas("Simplificar con el m.c.d.", [["24/36", "m.c.d. 12 → 2/3", cAZ], ["18/24", "m.c.d. 6 → 3/4", cNA], ["45/60", "m.c.d. 15 → 3/4", cVE], ["8/15", "m.c.d. 1: irreducible", cMO]]), ["iT-VXhkCcLI", "Fracciones IRREDUCIBLES ➗ Cómo SIMPLIFICAR Fracciones", "Susi Profe", 1338847]],
    ],
    "El truco para comprobarlo: productos cruzados": [
      ["Buscar el término que falta", `<p>A veces sabemos que dos fracciones son equivalentes, pero falta uno de sus números. Por ejemplo: 3/5 = ?/20. ¿Qué número va en el hueco?</p><p><b>Método 1: buscar por cuánto se ha multiplicado.</b> El denominador ha pasado de 5 a 20, es decir, se ha multiplicado por 4. Como hay que hacer lo mismo arriba y abajo, el numerador será 3 × 4 = <b>12</b>. Así, 3/5 = 12/20.</p><p><b>Método 2: los productos cruzados.</b> Si son equivalentes, 3 × 20 = 5 × ?. Como 3 × 20 = 60, el hueco es 60 : 5 = <b>12</b>. Este método sirve incluso cuando los números no son múltiplos tan claros.</p><p>Más ejemplos:</p><ul><li>4/6 = 10/?: los productos cruzados dicen 4 × ? = 6 × 10 = 60, así que ? = 60 : 4 = <b>15</b>.</li><li>2/7 = 8/?: el numerador se ha multiplicado por 4, así que el denominador es 7 × 4 = <b>28</b>.</li></ul><p>Comprueba siempre el resultado: 4 × 15 = 60 y 6 × 10 = 60. ✔ Si los productos cruzados coinciden, has acertado.</p>`,
        H6.dos("3/5 = ?/20", ["Multiplicar", ["5 × 4 = 20", "3 × 4 = 12", "12/20"], cAZ], ["En cruz", ["3 × 20 = 60", "60 : 5 = 12", "12/20"], cNA])],
      ["Reducir a común denominador", `<p>¿Qué es mayor, 2/3 o 3/4? Con denominadores distintos es difícil saberlo a simple vista. La solución es transformarlas en fracciones equivalentes que tengan el <b>mismo denominador</b>. Esto se llama <b>reducir a común denominador</b>.</p><ol><li>Se calcula el <b>mínimo común múltiplo</b> de los denominadores: m.c.m.(3, 4) = 12. Ese será el nuevo denominador.</li><li>Se divide el nuevo denominador entre cada denominador antiguo: 12 : 3 = 4 y 12 : 4 = 3.</li><li>Se multiplica cada numerador por ese resultado: 2 × 4 = 8 y 3 × 3 = 9.</li></ol><p>Así, 2/3 = <b>8/12</b> y 3/4 = <b>9/12</b>. Ahora es fácil: 9/12 es mayor que 8/12, así que <b>3/4 &gt; 2/3</b>.</p><p>Otro ejemplo: ¿5/6 o 7/9? m.c.m.(6, 9) = 18. 5/6 = 15/18 y 7/9 = 14/18. Por tanto, 5/6 es mayor.</p><p>Reducir a común denominador también es imprescindible para <b>sumar y restar</b> fracciones con distinto denominador, porque solo se pueden sumar partes del mismo tamaño.</p>`,
        H6.flujo("2/3 y 3/4", ["m.c.m.|= 12", "8/12|y 9/12", "3/4|es mayor"], cNA)],
    ],
  },
  final: [
    ["Ordenar varias fracciones", `<p>Reducir a común denominador sirve también para <b>ordenar</b> muchas fracciones a la vez. Ordenemos de menor a mayor 1/2, 3/4, 2/3 y 5/6.</p><ol><li>Calculamos el m.c.m. de los denominadores 2, 3, 4 y 6: es <b>12</b>.</li><li>Escribimos cada fracción con denominador 12: 1/2 = 6/12, 2/3 = 8/12, 3/4 = 9/12 y 5/6 = 10/12.</li><li>Con el mismo denominador, es menor la que tiene menor numerador: 6 &lt; 8 &lt; 9 &lt; 10.</li></ol><p>Por tanto: <b>1/2 &lt; 2/3 &lt; 3/4 &lt; 5/6</b>.</p><p>Hay dos atajos que conviene conocer:</p><ul><li>Si dos fracciones tienen el <b>mismo numerador</b>, es mayor la de <b>menor denominador</b>, porque las partes son más grandes: 3/5 &gt; 3/8.</li><li>Si una fracción es propia y la otra impropia, la impropia es mayor, porque vale más que 1: 9/8 &gt; 7/8.</li></ul><p>Por último, si te piden ordenar fracciones y alguna se puede simplificar, simplifica primero: los cálculos serán más fáciles.</p>`,
      H6.barras("Con denominador 12", [["1/2", 6, cRO, "6/12"], ["2/3", 8, cNA, "8/12"], ["3/4", 9, cAZ, "9/12"], ["5/6", 10, cVE, "10/12"]], 12)],
    ["Fracciones, decimales y porcentajes", `<p>Una misma cantidad se puede escribir como <b>fracción</b>, como <b>número decimal</b> y como <b>porcentaje</b>. Las tres formas son equivalentes.</p><ul><li>Para pasar de fracción a decimal, se divide el numerador entre el denominador: 3/4 = 3 : 4 = <b>0,75</b>.</li><li>Para pasar a porcentaje, se busca la fracción equivalente con denominador 100: 3/4 = 75/100 = <b>75 %</b>.</li></ul><p>Conviene saber de memoria las más frecuentes:</p><ul><li>1/2 = 0,5 = 50 %</li><li>1/4 = 0,25 = 25 %</li><li>3/4 = 0,75 = 75 %</li><li>1/5 = 0,2 = 20 %</li><li>1/10 = 0,1 = 10 %</li></ul><p>Esto ayuda mucho en la vida diaria. Si una camiseta tiene un 50 % de descuento, cuesta la mitad. Si en un examen aciertas 18 de 24 preguntas, has acertado 18/24 = 3/4 = 75 %.</p><p>Fíjate en cómo se usan las equivalentes: para pasar 2/5 a porcentaje se amplifica por 20, porque 5 × 20 = 100: 2/5 = 40/100 = 40 %. Y 3/20, amplificando por 5, es 15/100 = 15 %.</p>`,
      L6.filas("Tres formas, un valor", [["1/2", "0,5 = 50 %", cAZ], ["1/4", "0,25 = 25 %", cNA], ["3/4", "0,75 = 75 %", cVE], ["1/5", "0,2 = 20 %", cRO]])],
    ["Equivalentes en la vida diaria", `<p>Las fracciones equivalentes aparecen en muchos momentos del día sin que nos demos cuenta:</p><ul><li><b>El reloj</b>: una hora tiene 60 minutos. Un cuarto de hora es 1/4 de hora = 15/60, es decir, 15 minutos. Media hora es 1/2 = 30/60, y tres cuartos de hora son 3/4 = 45/60.</li><li><b>Las recetas</b>: si una receta pide 1/2 vaso de leche y solo tienes un vaso medidor marcado en cuartos, necesitas 2/4. Si la receta es para 4 personas y cocinas para 8, se amplifican todas las cantidades por 2.</li><li><b>Las monedas</b>: 50 céntimos son 50/100 = 1/2 euro, y 25 céntimos son 1/4 de euro.</li><li><b>Los repartos</b>: repartir una pizza de 8 trozos entre 4 amigos da 2/8 a cada uno, que es lo mismo que 1/4 de la pizza.</li><li><b>Las notas</b>: sacar 7 sobre 10 es lo mismo que 14 sobre 20 o que un 70 %.</li></ul><p>Saber reconocer que dos cantidades son iguales aunque se escriban distinto nos ayuda a no dejarnos engañar y a hacer cálculos mentales rápidos.</p>`,
      L6.filas("En la vida diaria", [["cuarto de hora", "1/4 = 15/60", cAZ], ["media pizza", "1/2 = 4/8", cNA], ["50 céntimos", "1/2 euro", cVE], ["7 sobre 10", "14/20 = 70 %", cMO]])],
    ["Descomponer como los egipcios", `<p>Los escribas egipcios escribían casi todas las fracciones como <b>sumas de fracciones unitarias</b>, es decir, fracciones con un 1 en el numerador y todas distintas. Para descomponer así una fracción, las fracciones equivalentes son la herramienta perfecta.</p><p>Veamos cómo descomponer <b>5/8</b>. Buscamos la fracción unitaria más grande que quepa: 1/2, que es lo mismo que 4/8. Nos sobra 5/8 − 4/8 = 1/8, que ya es unitaria. Así que <b>5/8 = 1/2 + 1/8</b>.</p><p>Más ejemplos, pasando todo a un denominador común:</p><ul><li><b>3/4</b> = 2/4 + 1/4 = 1/2 + 1/4.</li><li><b>5/6</b> = 3/6 + 2/6 = 1/2 + 1/3.</li><li><b>7/12</b> = 4/12 + 3/12 = 1/3 + 1/4.</li></ul><p>¿Para qué servía? Para repartir de forma práctica. Si hay que dar 5/6 de pan a cada persona, es más fácil cortar mitades y tercios que sextos. Hoy apenas usamos este sistema, pero es un buen ejercicio para practicar las fracciones equivalentes y el cálculo mental.</p>`,
      L6.filas("Sumas de unitarias", [["5/8", "4/8 + 1/8 = 1/2 + 1/8", cAZ], ["3/4", "1/2 + 1/4", cNA], ["5/6", "3/6 + 2/6 = 1/2 + 1/3", cVE], ["7/12", "4/12 + 3/12 = 1/3 + 1/4", cMO]])],
  ],
  ejemplos: [
    ["Simplifica 24/36 hasta la fracción irreducible.", ["m.c.d.(24, 36) = 12.", "24 : 12 = 2 y 36 : 12 = 3."], "2/3."],
    ["Halla el número que falta: 4/6 = 10/?", ["Productos cruzados: 4 × ? = 6 × 10 = 60.", "? = 60 : 4."], "15."],
    ["¿Qué fracción es mayor, 2/3 o 3/4?", ["m.c.m.(3, 4) = 12.", "2/3 = 8/12 y 3/4 = 9/12."], "3/4 es mayor."],
    ["Escribe 7/4 como número mixto.", ["7 : 4 = 1 y sobran 3."], "1 y 3/4."],
    ["Escribe 3/4 como decimal y como porcentaje.", ["3 : 4 = 0,75.", "3/4 = 75/100."], "0,75 y 75 %."],
  ],
  errores: ["Multiplicar o dividir solo el numerador, o solo el denominador.", "Sumar el mismo número arriba y abajo: 1/2 y 2/3 no son equivalentes.", "Pensar que 4/8 es mayor que 1/2 porque sus números son más grandes.", "Dejar una fracción sin simplificar del todo, como 6/9 en lugar de 2/3.", "Comparar fracciones de distinto denominador mirando solo los numeradores.", "Creer que con el mismo numerador es mayor la de mayor denominador."],
  ejercicios: [
    ["b", "Escribe dos fracciones equivalentes a 2/5.", "Por ejemplo, 4/10 y 6/15."],
    ["b", "Amplifica 3/7 por 3.", "9/21."],
    ["b", "Simplifica 10/15.", "2/3."],
    ["b", "¿Son equivalentes 2/3 y 8/12?", "Sí: 2 × 12 = 3 × 8 = 24."],
    ["b", "Clasifica 5/8, 9/9 y 7/3.", "Propia, igual a la unidad, impropia."],
    ["b", "Escribe 1/2 como decimal y como porcentaje.", "0,5 y 50 %."],
    ["b", "¿Cuántos minutos son 3/4 de hora?", "45 minutos."],
    ["b", "Completa: 1/3 = ?/12.", "4."],
    ["m", "Simplifica 18/24 usando el m.c.d.", "m.c.d. 6: 3/4."],
    ["m", "Escribe 11/3 como número mixto.", "3 y 2/3."],
    ["m", "Pasa 2 y 1/5 a fracción.", "11/5."],
    ["m", "Halla el número que falta: 4/6 = 10/?", "15."],
    ["m", "¿Qué es mayor, 2/3 o 3/4? Redúcelas a común denominador.", "8/12 < 9/12: 3/4."],
    ["m", "¿Es 8/15 irreducible? Razónalo.", "Sí, m.c.d.(8, 15) = 1."],
    ["m", "Escribe 2/5 como porcentaje.", "40/100 = 40 %."],
    ["m", "Repartes una pizza de 8 trozos entre 4. ¿Qué fracción de pizza come cada uno? Simplifícala.", "2/8 = 1/4."],
    ["a", "Ordena de menor a mayor: 1/2, 3/4, 2/3 y 5/6.", "1/2 < 2/3 < 3/4 < 5/6."],
    ["a", "¿Qué es mayor, 5/6 o 7/9?", "15/18 > 14/18: 5/6."],
    ["a", "Simplifica 45/60 en un solo paso.", "m.c.d. 15: 3/4."],
    ["a", "Halla x: 2/7 = 8/x.", "28."],
    ["a", "Has acertado 18 de 24 preguntas. ¿Qué fracción irreducible y qué porcentaje es?", "3/4 = 75 %."],
    ["a", "Escribe una fracción comprendida entre 1/4 y 2/4.", "Por ejemplo, 3/8."],
    ["a", "¿Cómo reparten los egipcios 3 panes entre 4 personas? Comprueba que es 3/4.", "1/2 + 1/4 = 2/4 + 1/4 = 3/4."],
    ["a", "Escribe 3/20 como porcentaje y como decimal.", "15/100 = 15 % = 0,15."],
  ],
  quiz: [
    ["El m.c.d. de 24 y 36 es…", ["12", "6", "72"], "Mayor divisor común."],
    ["7/4 como número mixto es…", ["1 y 3/4", "1 y 4/7", "7 y 1/4"], "7 : 4 = 1, resto 3."],
    ["En 3/5 = ?/20, el número que falta es…", ["12", "15", "18"], "× 4."],
    ["Reducidas a común denominador, 2/3 y 3/4 son…", ["8/12 y 9/12", "2/12 y 3/12", "6/12 y 8/12"], "m.c.m. 12."],
    ["3/4 es igual a…", ["75 %", "34 %", "43 %"], "75/100."],
    ["Una fracción impropia vale…", ["más que 1", "menos que 1", "exactamente 1"], "Numerador mayor."],
    ["Con el mismo numerador, es mayor la de…", ["menor denominador", "mayor denominador", "ninguna"], "Partes más grandes."],
    ["Un cuarto de hora son…", ["15/60 de hora", "25/60 de hora", "4/60 de hora"], "15 minutos."],
    ["1/2, 2/4 y 3/6 en la recta numérica…", ["caen en el mismo punto", "están separadas", "caen fuera de la recta"], "Equivalentes."],
    ["Una fracción es irreducible cuando el m.c.d. de sus términos es…", ["1", "2", "0"], "Sin divisores comunes."],
  ],
  examen: [
    ["La fracción irreducible de 45/60 es…", ["3/4", "9/12", "15/20"], "m.c.d. 15."],
    ["En 4/6 = 10/?, el número que falta es…", ["15", "12", "8"], "60 : 4."],
    ["¿Cuál es mayor?", ["5/6", "7/9", "son iguales"], "15/18 y 14/18."],
    ["2/5 en porcentaje es…", ["40 %", "25 %", "52 %"], "40/100."],
    ["Ordenadas de menor a mayor…", ["1/2, 2/3, 3/4", "3/4, 2/3, 1/2", "2/3, 1/2, 3/4"], "6/12, 8/12, 9/12."],
    ["2 y 1/5 como fracción es…", ["11/5", "7/5", "3/5"], "2 × 5 + 1."],
  ],
  tarjetas: [
    ["Números mixtos", "7/4 = 1 y 3/4: se divide el numerador entre el denominador."],
    ["Simplificar con el m.c.d.", "Dividir arriba y abajo entre el m.c.d. da la irreducible en un paso."],
    ["Término que falta", "Productos cruzados: a/b = c/x → x = b × c : a."],
    ["Común denominador", "m.c.m. de los denominadores; luego amplificar cada fracción."],
    ["Fracción, decimal y porcentaje", "3/4 = 0,75 = 75 %."],
  ],
  glosario: [
    ["Fracción equivalente", "Fracción que representa la misma cantidad que otra."],
    ["Amplificar", "Multiplicar numerador y denominador por el mismo número."],
    ["Simplificar", "Dividir numerador y denominador entre el mismo número."],
    ["Fracción irreducible", "Fracción que no se puede simplificar más."],
    ["Fracción propia", "Fracción con el numerador menor que el denominador."],
    ["Fracción impropia", "Fracción con el numerador mayor que el denominador."],
    ["Número mixto", "Número natural acompañado de una fracción propia."],
    ["m.c.d.", "Máximo común divisor: el mayor divisor común de dos números."],
    ["m.c.m.", "Mínimo común múltiplo: el menor múltiplo común de dos números."],
    ["Común denominador", "Mismo denominador para varias fracciones."],
    ["Productos cruzados", "Multiplicar numerador de una por denominador de la otra."],
    ["Papiro de Rhind", "Rollo egipcio con problemas de matemáticas, de hace más de 3 600 años."],
  ],
  situacion: {
    titulo: "El dominó de las fracciones",
    reto: "La clase diseña y fabrica un dominó en el que cada ficha solo encaja con otra que tenga una fracción, un decimal o un porcentaje equivalente.",
    pasos: ["Elegid 7 cantidades (1/2, 1/4, 3/4, 1/5, 2/3, 1/10, 1) y buscad 3 formas distintas de escribir cada una.", "Dibujad las fichas en cartulina con fracciones, barras, decimales y porcentajes.", "Comprobad cada pareja con los productos cruzados o pasando a decimal.", "Jugad por equipos y explicad cada jugada en voz alta."],
    producto: "Un juego de dominó de fracciones equivalentes con sus instrucciones.",
    evaluacion: ["Genera fracciones equivalentes amplificando y simplificando.", "Relaciona fracciones, decimales y porcentajes.", "Comprueba la equivalencia con productos cruzados.", "Explica su razonamiento con claridad."],
  },
});
