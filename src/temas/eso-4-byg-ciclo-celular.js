// Biología y Geología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

// Célula redonda con cromosomas en forma de X (pares de colores).
function celula(cx, cy, r, crom, borde = "var(--pen)") {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--pen)" fill-opacity=".08" stroke="${borde}" stroke-width="2.5"/>` +
    crom.map(([x, y, c, rot = 0]) => `<g transform="rotate(${rot} ${cx + x} ${cy + y})"><path d="M${cx + x - 6} ${cy + y - 9} L ${cx + x + 6} ${cy + y + 9} M${cx + x + 6} ${cy + y - 9} L ${cx + x - 6} ${cy + y + 9}" stroke="${c}" stroke-width="4" stroke-linecap="round"/></g>`).join("");
}

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "El ciclo celular: mitosis y meiosis",
  minutos: 40,
  objetivos: ["Describir las etapas del ciclo celular", "Explicar las fases de la mitosis y su resultado", "Comparar la mitosis con la meiosis y relacionar la meiosis con la variabilidad"],
  claves: ["cromosoma", "interfase", "mitosis", "meiosis", "diploide (2n)", "haploide (n)"],
  pregunta: {
    texto: "Una herida en la rodilla se cierra en pocos días con piel nueva idéntica. Pero tú no eres idéntico a tus hermanos. ¿Qué tipo de división celular explica cada cosa?",
    respuesta: "La piel se repara por <mark>mitosis</mark>: una célula da dos hijas <b>idénticas</b>. Las diferencias entre hermanos vienen de la <mark>meiosis</mark>, que fabrica óvulos y espermatozoides con <b>mezclas distintas</b> de los genes de cada progenitor.",
  },
  bloques: [
    {
      html: `<h3>Los cromosomas</h3><p>El ADN de una célula eucariota está repartido en <b>cromosomas</b>. Antes de dividirse, cada cromosoma se copia y queda con <mark>dos cromátidas hermanas</mark> unidas por el centrómero: es la forma de «X» que ves en los libros. Los humanos tenemos <b>46 cromosomas</b> en 23 parejas: somos <b>diploides (2n = 46)</b>. Los gametos tienen la mitad: son <b>haploides (n = 23)</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cromosoma con dos cromátidas hermanas unidas por el centrómero">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M96 30 Q 120 90 96 150" fill="none" stroke="var(--pen)" stroke-width="16" stroke-linecap="round"/>
        <path d="M144 30 Q 120 90 144 150" fill="none" stroke="var(--pen)" stroke-width="16" stroke-linecap="round" opacity=".7"/>
        <circle cx="120" cy="90" r="9" fill="var(--red)"/>
        <g ${F} font-size="12" font-weight="700"><text x="160" y="40" fill="var(--pen)">cromátida</text><text x="160" y="94" fill="var(--red)">centrómero</text><text x="14" y="40" fill="var(--pen)">cromátida</text></g>
      </svg>`,
    },
    {
      html: `<h3>El ciclo celular</h3><p>Es la vida de una célula desde que nace hasta que se divide. Casi todo el tiempo está en <b>interfase</b>: crece (fase G1), <mark>duplica su ADN</mark> (fase S) y se prepara (fase G2). Después llega la <b>fase M</b>: la división del núcleo (mitosis) y del citoplasma (<b>citocinesis</b>). Si el ciclo se descontrola y las células se dividen sin parar, aparece un <b>cáncer</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Rueda del ciclo celular con las fases G1, S, G2 y M">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["G1", 0, 140, "var(--leaf)"], ["S", 140, 250, "var(--pen)"], ["G2", 250, 320, "var(--sun)"], ["M", 320, 360, "var(--red)"]].map(([t, a0, a1, c]) => { const r = 62, cx = 130, cy = 90, p = (a) => [cx + r * Math.sin((a * Math.PI) / 180), cy - r * Math.cos((a * Math.PI) / 180)]; const [x0, y0] = p(a0), [x1, y1] = p(a1), [xm, ym] = p((a0 + a1) / 2); return `<path d="M${x0.toFixed(1)} ${y0.toFixed(1)} A ${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1.toFixed(1)} ${y1.toFixed(1)}" fill="none" stroke="${c}" stroke-width="22"/><text x="${(cx + (xm - cx) * 1.0).toFixed(1)}" y="${(ym + 5).toFixed(1)}" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" ${F}>${t}</text>`; }).join("")}
        <text x="130" y="88" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>interfase</text><text x="130" y="104" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>≈ 90 % del tiempo</text>
      </svg>`,
    },
    {
      html: `<h3>Las fases de la mitosis</h3><p><b>Profase</b>: los cromosomas se condensan y desaparece la membrana del núcleo. <b>Metafase</b>: los cromosomas se colocan <mark>en el ecuador</mark> de la célula. <b>Anafase</b>: las cromátidas hermanas se separan hacia <mark>polos opuestos</mark>. <b>Telofase</b>: se forman dos núcleos nuevos. Truco para recordarlo: <b>PROMETe ANA TELO</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Las cuatro fases de la mitosis: profase, metafase, anafase y telofase">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${celula(36, 72, 28, [[-8, -6, "var(--red)", 20], [8, 6, "var(--pen)", -30]])}
        ${celula(100, 72, 28, [[0, -8, "var(--red)", 90], [0, 8, "var(--pen)", 90]])}
        <g transform="translate(164 72)"><circle r="28" fill="var(--pen)" fill-opacity=".08" stroke="var(--pen)" stroke-width="2.5"/><path d="M-16 -6 l 5 6 l -5 6 M-16 6 m 0 0 M16 -6 l -5 6 l 5 6" fill="none" stroke="var(--red)" stroke-width="3.5"/><path d="M-8 -6 l 5 6 l -5 6 M8 -6 l -5 6 l 5 6" fill="none" stroke="var(--pen)" stroke-width="3.5"/></g>
        <g transform="translate(226 72)"><ellipse rx="28" ry="30" fill="var(--pen)" fill-opacity=".08" stroke="var(--pen)" stroke-width="2.5"/><path d="M-28 0 H 28" stroke="var(--pen)" stroke-width="2" stroke-dasharray="3 3"/><circle cy="-14" r="9" fill="var(--inf)" opacity=".5"/><circle cy="14" r="9" fill="var(--inf)" opacity=".5"/></g>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)"><text x="36" y="124">profase</text><text x="100" y="124">metafase</text><text x="164" y="124">anafase</text><text x="226" y="124">telofase</text></g>
        <text x="130" y="158" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>resultado: 2 células idénticas (2n)</text>
      </svg>`,
    },
    {
      html: `<h3>La meiosis</h3><p>La <b>meiosis</b> solo ocurre en las células que forman los <b>gametos</b> (óvulos y espermatozoides). Tiene <mark>dos divisiones seguidas</mark> y de una célula diploide salen <b>cuatro células haploides</b>, con la mitad de cromosomas. Así, al unirse un óvulo (n = 23) y un espermatozoide (n = 23) en la fecundación, el cigoto recupera los 46.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Meiosis: una célula diploide da dos células y después cuatro células haploides">
        <defs><marker id="cc1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${celula(40, 90, 24, [[-6, 0, "var(--red)"], [6, 0, "var(--pen)"]])}
        ${celula(120, 50, 18, [[0, 0, "var(--red)"]])}${celula(120, 130, 18, [[0, 0, "var(--pen)"]])}
        ${[[210, 26, "var(--red)"], [210, 70, "var(--red)"], [210, 110, "var(--pen)"], [210, 154, "var(--pen)"]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="14" fill="var(--pen)" fill-opacity=".08" stroke="var(--pen)" stroke-width="2"/><path d="M${x} ${y - 8} V ${y + 8}" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`).join("")}
        <g stroke="var(--muted)" stroke-width="2" marker-end="url(#cc1)"><path d="M64 80 L 98 56"/><path d="M64 100 L 98 124"/><path d="M140 44 L 192 28"/><path d="M140 56 L 192 68"/><path d="M140 124 L 192 112"/><path d="M140 136 L 192 152"/></g>
        <g ${F} font-size="11" font-weight="700" fill="var(--muted)" text-anchor="middle"><text x="40" y="132">2n</text><text x="120" y="96">meiosis I</text><text x="246" y="94">n</text></g>
      </svg>`,
    },
    {
      html: `<h3>Meiosis y variabilidad</h3><p>La meiosis no solo reduce cromosomas: también <mark>baraja los genes</mark>. En la primera división, los cromosomas de cada pareja intercambian trozos (<b>sobrecruzamiento</b>) y luego se reparten al azar. Por eso cada gameto es único y dos hermanos (salvo gemelos idénticos) nunca son iguales. Esta <b>variabilidad</b> es la materia prima de la evolución.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Sobrecruzamiento: dos cromosomas homólogos intercambian fragmentos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="40" y="30" width="16" height="110" rx="8" fill="var(--red)"/><rect x="70" y="30" width="16" height="110" rx="8" fill="var(--pen)"/>
        <path d="M56 90 L 70 110 M70 90 L 56 110" stroke="var(--ink)" stroke-width="2"/>
        <text x="130" y="90" font-size="22" fill="var(--muted)" ${F}>→</text>
        <rect x="174" y="30" width="16" height="70" rx="8" fill="var(--red)"/><rect x="174" y="96" width="16" height="44" rx="8" fill="var(--pen)"/>
        <rect x="204" y="30" width="16" height="70" rx="8" fill="var(--pen)"/><rect x="204" y="96" width="16" height="44" rx="8" fill="var(--red)"/>
        <text x="130" y="166" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>sobrecruzamiento: nuevas combinaciones</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Mitosis frente a meiosis",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Comparación de mitosis y meiosis: divisiones, células hijas, cromosomas y para qué sirven">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["MITOSIS", "1 división", "2 células hijas 2n", "idénticas a la madre", "crecer y reparar tejidos", "var(--pen)"], ["MEIOSIS", "2 divisiones", "4 células hijas n", "todas distintas", "formar gametos", "var(--red)"]]
        .map(([n, a, b, c1, u, c], i) => `<rect x="${20 + i * 310}" y="20" width="290" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${165 + i * 310}" y="60" text-anchor="middle" font-size="26" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${165 + i * 310}" y="98" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)" ${F}>${a}</text>
          <text x="${165 + i * 310}" y="124" text-anchor="middle" font-size="16" fill="var(--ink)" ${F}>${b}</text>
          <text x="${165 + i * 310}" y="148" text-anchor="middle" font-size="15" fill="var(--ink)" ${F}>${c1}</text>
          <text x="${165 + i * 310}" y="188" text-anchor="middle" font-size="14" fill="var(--muted)" ${F}>sirve para: ${u}</text>`).join("")}
    </svg>`,
  },
  video: { id: "zrKdz93WlVk", titulo: "Mitosis vs. meiosis: comparación lado a lado", canal: "Amoeba Sisters", vistas: 9248868, megusta: 0, busqueda: "mitosis y meiosis" },
  quiz: [
    { q: "¿En qué fase del ciclo celular se duplica el ADN?", o: ["Fase S de la interfase", "Metafase", "Telofase"], a: 0, e: "En la fase S (síntesis) cada cromosoma hace una copia de sí mismo." },
    { q: "¿En qué fase de la mitosis se colocan los cromosomas en el ecuador?", o: ["Profase", "Metafase", "Anafase"], a: 1, e: "Metafase: «meta» en medio, en el plano ecuatorial." },
    { q: "Una célula humana tiene 46 cromosomas. ¿Cuántos tienen sus hijas tras la mitosis?", o: ["23", "46", "92"], a: 1, e: "La mitosis produce células idénticas a la madre, con 46 cromosomas." },
    { q: "¿Cuántas células produce la meiosis?", o: ["2 diploides", "4 haploides", "4 diploides"], a: 1, e: "Dos divisiones seguidas: 1 → 2 → 4 células con la mitad de cromosomas." },
    { q: "¿Por qué dos hermanos no son genéticamente idénticos?", o: ["Por la mitosis", "Por el sobrecruzamiento y el reparto al azar en la meiosis", "Porque tienen distinto número de cromosomas"], a: 1, e: "La meiosis baraja los genes y cada gameto lleva una combinación única." },
  ],
  examen: [
    { q: "¿Qué es una célula haploide?", o: ["La que tiene un solo juego de cromosomas (n)", "La que tiene dos juegos (2n)", "La que no tiene núcleo"], a: 0, e: "Los gametos son haploides: un cromosoma de cada pareja." },
    { q: "La división del citoplasma se llama…", o: ["citocinesis", "cariocinesis", "fecundación"], a: 0, e: "La mitosis divide el núcleo; la citocinesis, el citoplasma." },
    { q: "¿Qué enfermedad se relaciona con una división celular descontrolada?", o: ["La gripe", "El cáncer", "La diabetes"], a: 1, e: "Cuando fallan los controles del ciclo, las células se dividen sin parar y forman tumores." },
  ],
  feynman: ["Qué es un cromosoma y qué son las cromátidas hermanas", "Las fases del ciclo celular", "Las cuatro fases de la mitosis con el truco PROMETe ANA TELO", "Por qué la meiosis reduce a la mitad los cromosomas", "Cómo genera variabilidad la meiosis"],
  mapa: mapa("CICLO CELULAR", "var(--eso)", [
    ["Interfase", "G1 · S (copia ADN) · G2", "var(--leaf)"],
    ["Mitosis", "pro · meta · ana · telo", "var(--pen)"],
    ["Meiosis", "2 divisiones · 4 células n", "var(--red)"],
    ["Para qué", "crecer · reparar · gametos", "var(--ink)"],
  ], 250),
  tarjetas: [
    ["Fases de la mitosis", "Profase, metafase, anafase y telofase."],
    ["¿Qué ocurre en la anafase?", "Las cromátidas hermanas se separan y van a polos opuestos."],
    ["Resultado de la mitosis", "Dos células hijas diploides idénticas a la madre."],
    ["Resultado de la meiosis", "Cuatro células hijas haploides genéticamente distintas."],
    ["Número de cromosomas humanos", "46 (2n) en las células del cuerpo y 23 (n) en los gametos."],
  ],
  familias: ["Mirad fotos de cuando era bebé y ahora: ¿cuántas mitosis han hecho falta para crecer?", "Comparad rasgos entre hermanos o primos y hablad de por qué cada uno es distinto.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La célula: ciclo celular, mitosis y meiosis, y su importancia en el crecimiento, la reproducción y la variabilidad (RD 217/2022, Biología y Geología 4º).",
    ideas: ["Observar mitosis en raíz de cebolla con orceína acética.", "Simular la mitosis y la meiosis con calcetines o plastilina de dos colores.", "Calcular el porcentaje de células en cada fase en una micrografía."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ciclo celular, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ciclo_celular" },
  ],
  revisado: "2026-11-12",
};
