// Biología y Geología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

const BASE = { A: "var(--leaf)", T: "var(--red)", G: "var(--sun)", C: "var(--pen)", U: "var(--inf)" };
const comp = { A: "T", T: "A", G: "C", C: "G" };

// Doble hélice en escalera: secuencia de una hebra.
function escalera(x, y, seq, dx = 26) {
  return seq.split("").map((b, i) => `<rect x="${x + i * dx}" y="${y}" width="${dx - 4}" height="22" rx="4" fill="${BASE[b]}"/><text x="${x + i * dx + (dx - 4) / 2}" y="${y + 16}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>${b}</text>
    <rect x="${x + i * dx}" y="${y + 26}" width="${dx - 4}" height="22" rx="4" fill="${BASE[comp[b]]}"/><text x="${x + i * dx + (dx - 4) / 2}" y="${y + 42}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>${comp[b]}</text>`).join("") +
    `<path d="M${x - 4} ${y - 4} H ${x + seq.length * dx} M${x - 4} ${y + 52} H ${x + seq.length * dx}" stroke="var(--ink)" stroke-width="3"/>`;
}

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "El ADN y la información genética",
  minutos: 40,
  objetivos: ["Describir la estructura del ADN y la complementariedad de bases", "Explicar la replicación del ADN", "Explicar cómo se fabrica una proteína: transcripción, traducción y código genético"],
  claves: ["nucleótido", "doble hélice", "gen", "replicación", "ARN mensajero", "código genético"],
  pregunta: {
    texto: "Si estiraras todo el ADN de una sola de tus células medirías unos 2 metros. ¿Cómo cabe en un núcleo de una centésima de milímetro y qué pone en él?",
    respuesta: "Cabe porque está <mark>superenrollado</mark> alrededor de proteínas, como un hilo en muchos carretes. Y lo que «pone» es un texto escrito con solo <b>cuatro letras (A, T, G, C)</b>: las instrucciones para fabricar todas tus proteínas. Cada fragmento con una instrucción es un <b>gen</b>.",
  },
  bloques: [
    {
      html: `<h3>La estructura del ADN</h3><p>El <b>ADN</b> (ácido desoxirribonucleico) es una cadena larguísima de <b>nucleótidos</b>, cada uno con un azúcar, un fosfato y una <b>base nitrogenada</b>: adenina (A), timina (T), guanina (G) o citosina (C). Watson, Crick y Franklin descubrieron en 1953 que forma una <mark>doble hélice</mark>: dos hebras enrolladas unidas por sus bases, como una escalera de caracol.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Doble hélice del ADN con peldaños de bases">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${Array.from({ length: 13 }, (_, i) => { const x = 20 + i * 18; const y1 = 90 - 50 * Math.sin(i * 0.6), y2 = 90 + 50 * Math.sin(i * 0.6); const b = "AGCTTAGCAGTCA"[i]; return `<path d="M${x} ${y1.toFixed(1)} V ${((y1 + y2) / 2).toFixed(1)}" stroke="${BASE[b]}" stroke-width="5"/><path d="M${x} ${((y1 + y2) / 2).toFixed(1)} V ${y2.toFixed(1)}" stroke="${BASE[comp[b]]}" stroke-width="5"/>`; }).join("")}
        <path d="M20 90 ${Array.from({ length: 121 }, (_, i) => `L ${20 + i * 1.8} ${(90 - 50 * Math.sin(i * 0.06)).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--ink)" stroke-width="3.5"/>
        <path d="M20 90 ${Array.from({ length: 121 }, (_, i) => `L ${20 + i * 1.8} ${(90 + 50 * Math.sin(i * 0.06)).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--muted)" stroke-width="3.5"/>
      </svg>`,
    },
    {
      html: `<h3>Las bases complementarias</h3><p>Las bases de las dos hebras no se emparejan de cualquier manera: <mark>la A siempre con la T</mark> y <mark>la G siempre con la C</mark>. Por eso, si conoces una hebra, puedes deducir la otra. Si una hebra dice ATGCCA, la complementaria es TACGGT.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fragmento de ADN: cada A frente a una T y cada G frente a una C">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${escalera(36, 46, "ATGCCAGT")}
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="130" y="134" fill="var(--leaf)">A — T</text><text x="130" y="154" fill="var(--sun)">G — C</text></g>
      </svg>`,
    },
    {
      html: `<h3>La replicación: copiar el ADN</h3><p>Antes de dividirse, la célula copia su ADN. La doble hélice se <b>abre como una cremallera</b> y cada hebra sirve de <mark>molde</mark> para fabricar una nueva, siguiendo la regla A-T y G-C. La enzima <b>ADN polimerasa</b> va colocando los nucleótidos. Al final hay dos moléculas iguales, cada una con una hebra vieja y otra nueva: la replicación es <b>semiconservativa</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La doble hélice se abre en horquilla y cada hebra se copia">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 82 H 100 M14 98 H 100" stroke="var(--ink)" stroke-width="4"/>
        ${[22, 40, 58, 76, 94].map((x) => `<path d="M${x} 84 V 96" stroke="var(--muted)" stroke-width="3"/>`).join("")}
        <path d="M100 82 L 240 30 M100 98 L 240 150" stroke="var(--ink)" stroke-width="4"/>
        <path d="M150 74 L 240 42 M150 106 L 240 138" stroke="var(--red)" stroke-width="4" stroke-dasharray="7 4"/>
        <circle cx="104" cy="90" r="10" fill="var(--sun)"/>
        <g ${F} font-size="11" font-weight="700"><text x="168" y="96" fill="var(--red)">hebras nuevas</text><text x="150" y="20" fill="var(--ink)">hebra molde</text><text x="66" y="128" fill="var(--sun)">enzimas</text></g>
      </svg>`,
    },
    {
      html: `<h3>Del gen a la proteína</h3><p>Un <b>gen</b> es un fragmento de ADN con la información para fabricar una proteína. El proceso tiene dos pasos. 1) <b>Transcripción</b>, en el núcleo: el gen se copia en una molécula de <mark>ARN mensajero</mark> (que lleva U, uracilo, en lugar de T). 2) <b>Traducción</b>, en los <mark>ribosomas</mark> del citoplasma: el ARNm se lee de tres en tres letras y se van uniendo aminoácidos hasta formar la proteína.</p>
      <div class="formula"><span>ADN</span><span class="op">→ transcripción →</span><span>ARNm</span><span class="op">→ traducción →</span><span>proteína</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Del núcleo sale el ARN mensajero hacia un ribosoma que une aminoácidos">
        <defs>${flecha("ad1", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="62" cy="80" r="48" fill="var(--inf)" opacity=".15" stroke="var(--inf)" stroke-width="2"/>
        <path d="M30 70 q 10 -10 20 0 t 20 0 t 20 0" fill="none" stroke="var(--ink)" stroke-width="3"/>
        <path d="M110 80 H 150" stroke="var(--inf)" stroke-width="3" marker-end="url(#ad1)"/>
        <ellipse cx="196" cy="70" rx="30" ry="18" fill="var(--sun)" opacity=".7"/><ellipse cx="196" cy="96" rx="40" ry="16" fill="var(--sun)"/>
        <path d="M150 96 H 246" stroke="var(--inf)" stroke-width="3"/>
        ${[0, 1, 2, 3].map((i) => `<circle cx="${196 - i * 16}" cy="${44 - i * 4}" r="7" fill="${["var(--red)", "var(--leaf)", "var(--pen)", "var(--red)"][i]}"/>`).join("")}
        <g ${F} font-size="11" font-weight="700"><text x="38" y="104" fill="var(--inf)">núcleo</text><text x="112" y="72" fill="var(--inf)">ARNm</text><text x="176" y="140" fill="var(--sun)">ribosoma</text><text x="142" y="22" fill="var(--red)">proteína</text></g>
      </svg>`,
    },
    {
      html: `<h3>El código genético</h3><p>Cada grupo de tres bases del ARNm se llama <b>codón</b> y corresponde a un aminoácido. Por ejemplo, <mark>AUG</mark> es la metionina y la señal de <b>inicio</b>; UAA, UAG y UGA son señales de <b>parada</b>. El código es <mark>universal</mark>: es el mismo en bacterias, plantas y humanos. Por eso una bacteria puede fabricar insulina humana si le damos el gen. Un cambio en la secuencia del ADN es una <b>mutación</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="ARN mensajero dividido en codones de tres bases, cada uno con su aminoácido">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${"AUGUUUGGCUAA".split("").map((b, i) => `<rect x="${16 + i * 19}" y="50" width="17" height="24" rx="3" fill="${BASE[b]}"/><text x="${24.5 + i * 19}" y="67" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>${b}</text>`).join("")}
        ${[["Met", "inicio", "var(--leaf)"], ["Phe", "", "var(--pen)"], ["Gly", "", "var(--sun)"], ["STOP", "parada", "var(--red)"]].map(([a, d, c], i) => `<path d="M${16 + i * 57} 80 H ${70 + i * 57}" stroke="var(--ink)" stroke-width="2"/><text x="${43 + i * 57}" y="102" text-anchor="middle" font-size="13" font-weight="700" fill="${c}" ${F}>${a}</text><text x="${43 + i * 57}" y="120" text-anchor="middle" font-size="10" fill="var(--muted)" ${F}>${d}</text>`).join("")}
        <text x="130" y="36" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>codón = 3 bases = 1 aminoácido</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "ADN y ARN: parecidos y diferencias",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Comparación de ADN y ARN: hebras, azúcar, bases y función">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["ADN", "doble hebra (doble hélice)", "azúcar: desoxirribosa", "bases A, T, G, C", "guarda la información, en el núcleo", "var(--pen)"], ["ARN", "una sola hebra", "azúcar: ribosa", "bases A, U, G, C", "lleva la información al ribosoma", "var(--inf)"]]
        .map(([n, a, b, c1, f, c], i) => `<rect x="${20 + i * 310}" y="20" width="290" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${165 + i * 310}" y="60" text-anchor="middle" font-size="28" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${165 + i * 310}" y="98" text-anchor="middle" font-size="15" fill="var(--ink)" ${F}>${a}</text>
          <text x="${165 + i * 310}" y="122" text-anchor="middle" font-size="15" fill="var(--ink)" ${F}>${b}</text>
          <text x="${165 + i * 310}" y="146" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" ${F}>${c1}</text>
          <text x="${165 + i * 310}" y="186" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "uEwyWgSvLc0", titulo: "Replicación del ADN", canal: "Bioquímica de Pastor", vistas: 2707951, megusta: 0, busqueda: "ADN replicación transcripción traducción" },
  quiz: [
    { q: "¿Con qué base se empareja siempre la adenina en el ADN?", o: ["Guanina", "Timina", "Citosina"], a: 1, e: "A con T y G con C." },
    { q: "Si una hebra de ADN es AGTC, ¿cuál es la complementaria?", o: ["TCAG", "AGTC", "GACT"], a: 0, e: "A→T, G→C, T→A, C→G: TCAG." },
    { q: "¿Qué es un gen?", o: ["Un cromosoma entero", "Un fragmento de ADN con la información para una proteína", "Una proteína"], a: 1, e: "Cada gen es una «receta» dentro del ADN." },
    { q: "¿Dónde ocurre la traducción?", o: ["En el núcleo", "En los ribosomas", "En la mitocondria"], a: 1, e: "Los ribosomas leen el ARNm y unen aminoácidos." },
    { q: "¿Cuántas bases forman un codón?", o: ["2", "3", "4"], a: 1, e: "Tres bases (un triplete) codifican un aminoácido." },
  ],
  examen: [
    { q: "¿Qué base tiene el ARN en lugar de la timina?", o: ["Uracilo", "Adenina", "Guanina"], a: 0, e: "El ARN usa uracilo (U), que también se empareja con la A." },
    { q: "¿Por qué se dice que la replicación es semiconservativa?", o: ["Porque solo se copia la mitad del ADN", "Porque cada molécula nueva conserva una hebra original", "Porque se pierde información"], a: 1, e: "Cada nueva doble hélice tiene una hebra vieja (molde) y una nueva." },
    { q: "Que el código genético sea universal permite…", o: ["que una bacteria fabrique insulina humana", "que no haya mutaciones", "que el ADN no se copie"], a: 0, e: "Todos los seres vivos leen los codones igual: es la base de la biotecnología." },
  ],
  feynman: ["Cómo es la estructura del ADN", "La regla de emparejamiento de las bases", "Cómo se copia el ADN antes de la división", "Los dos pasos para pasar de un gen a una proteína", "Qué es un codón y por qué el código es universal"],
  mapa: mapa("ADN", "var(--eso)", [
    ["Estructura", "doble hélice · A-T, G-C", "var(--pen)"],
    ["Replicación", "copia semiconservativa", "var(--red)"],
    ["Expresión", "transcripción → traducción", "var(--leaf)"],
    ["Código genético", "codón = 3 bases · universal", "var(--sun)"],
  ], 250),
  tarjetas: [
    ["Bases nitrogenadas del ADN", "Adenina, timina, guanina y citosina (A, T, G, C)."],
    ["Regla de complementariedad", "A con T (U en el ARN) y G con C."],
    ["¿Qué es la transcripción?", "La copia de un gen de ADN en una molécula de ARN mensajero, en el núcleo."],
    ["¿Qué es la traducción?", "La lectura del ARNm en los ribosomas para unir aminoácidos y formar una proteína."],
    ["¿Qué es un codón?", "Un grupo de tres bases del ARNm que corresponde a un aminoácido o a una señal de inicio o parada."],
  ],
  familias: ["Extraed ADN de un plátano o de fresas con sal, lavavajillas y alcohol frío: se ve como hilos blancos.", "Escribid un mensaje en «código genético» de tres letras y que lo descifre con una tabla.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Genética y evolución: estructura y función del ADN y del ARN, replicación, expresión génica y código genético (RD 217/2022, Biología y Geología 4º).",
    ideas: ["Extracción de ADN de fresas o kiwi en el laboratorio.", "Maqueta de doble hélice con gominolas y palillos con un código de colores para las bases.", "Simulación de transcripción y traducción con tarjetas de codones y aminoácidos."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ácido desoxirribonucleico, Wikipedia en español", url: "https://es.wikipedia.org/wiki/%C3%81cido_desoxirribonucleico" },
  ],
  revisado: "2026-11-12",
};
