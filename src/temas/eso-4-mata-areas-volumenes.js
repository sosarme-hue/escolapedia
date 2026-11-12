// Matemáticas A 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Geometría: áreas y volúmenes",
  minutos: 45,
  objetivos: ["Aplicar el teorema de Pitágoras para calcular longitudes", "Calcular áreas de figuras planas y de cuerpos geométricos", "Calcular volúmenes de prismas, cilindros, pirámides, conos y esferas en problemas reales"],
  claves: ["Pitágoras", "área lateral", "área total", "volumen", "prisma", "cilindro"],
  pregunta: {
    texto: "Una lata de refresco mide 6,6 cm de diámetro y 11,5 cm de alto. ¿Caben de verdad los 33 cl que pone en la etiqueta?",
    respuesta: "Es un <mark>cilindro</mark>: V = π · r² · h = 3,14 · 3,3² · 11,5 ≈ 393 cm³ = 39,3 cl. Caben los 33 cl y queda <b>espacio para el gas y la dilatación</b>. Con fórmulas de volumen se diseñan envases de todo tipo.",
  },
  bloques: [
    {
      html: `<h3>El teorema de Pitágoras</h3><p>En un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos:</p><div class="formula"><span>a² = b² + c²</span></div><p>Sirve para calcular diagonales, alturas y distancias: una tele de 80 cm × 45 cm tiene una diagonal de √(80² + 45²) ≈ <mark>92 cm</mark> (unas 36 pulgadas).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Triángulo rectángulo de catetos 3 y 4 con cuadrados sobre cada lado: 9 más 16 igual a 25">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M100 124 L 136 124 L 100 76 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <rect x="100" y="124" width="36" height="36" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2"/>
        <rect x="52" y="76" width="48" height="48" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2"/>
        <path d="M100 76 L 136 124 L 184 88 L 148 40 Z" fill="var(--red)" fill-opacity=".2" stroke="var(--red)" stroke-width="2"/>
        <g ${F} font-size="12" font-weight="700"><text x="118" y="146" text-anchor="middle" fill="var(--pen)">c² = 9</text><text x="76" y="104" text-anchor="middle" fill="var(--leaf)">b² = 16</text><text x="142" y="86" text-anchor="middle" fill="var(--red)">a² = 25</text><text x="244" y="160" text-anchor="end" fill="var(--ink)">9 + 16 = 25</text></g></svg>`,
    },
    {
      html: `<h3>Áreas de figuras planas</h3><p>Las más usadas: rectángulo <b>b · h</b>, triángulo <b>b · h / 2</b>, trapecio <b>(B + b) · h / 2</b>, polígono regular <b>perímetro · apotema / 2</b> y círculo <mark>π · r²</mark>. Para figuras raras, se descomponen en otras conocidas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro figuras con sus fórmulas de área: rectángulo, triángulo, trapecio y círculo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="16" y="24" width="90" height="50" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2.5"/>
        <path d="M150 74 L 240 74 L 180 20 Z" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2.5"/>
        <path d="M16 158 L 106 158 L 86 110 L 36 110 Z" fill="var(--inf)" fill-opacity=".25" stroke="var(--inf)" stroke-width="2.5"/>
        <circle cx="194" cy="132" r="28" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="2.5"/><path d="M194 132 H 222" stroke="var(--red)" stroke-width="2"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="61" y="92" fill="var(--pen)">b · h</text><text x="195" y="92" fill="var(--leaf)">b · h / 2</text><text x="61" y="176" fill="var(--inf)">(B + b) · h / 2</text><text x="194" y="176" fill="var(--red)">π · r²</text></g></svg>`,
    },
    {
      html: `<h3>Áreas de cuerpos: el desarrollo plano</h3><p>Para el área de un cuerpo, imagina que lo <mark>abres y lo extiendes</mark> sobre la mesa. El área total es la suma de todas sus caras. En un cilindro: dos círculos más un rectángulo cuyo largo es la longitud de la circunferencia:</p><div class="formula"><span>A_total = 2πr² + 2πr · h</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Desarrollo plano de un cilindro: un rectángulo de largo 2 pi r y alto h, con dos círculos de radio r">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="40" y="56" width="180" height="70" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.5"/>
        <circle cx="100" cy="32" r="22" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="2.5"/><circle cx="100" cy="150" r="22" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="2.5"/>
        <g ${F} font-size="12" font-weight="700"><text x="130" y="96" text-anchor="middle" fill="var(--pen)">2πr · h</text><text x="228" y="96" fill="var(--muted)">h</text><text x="180" y="50" fill="var(--muted)">2πr</text><text x="100" y="36" text-anchor="middle" fill="var(--red)">πr²</text><text x="100" y="154" text-anchor="middle" fill="var(--red)">πr²</text></g></svg>`,
    },
    {
      html: `<h3>Volúmenes de prismas y cilindros</h3><p>Su volumen es siempre <mark>área de la base × altura</mark>. Un ortoedro de 2 × 3 × 4 m tiene 24 m³; un cilindro, π · r² · h. Recuerda: <b>1 dm³ = 1 litro</b>, y 1 m³ = 1.000 litros.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Prisma y cilindro: el volumen es el área de la base por la altura">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M24 70 L 54 50 H 114 L 84 70 Z" fill="var(--hl)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M24 70 V 150 H 84 V 70 M84 150 L 114 130 V 50" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <ellipse cx="190" cy="56" rx="40" ry="12" fill="var(--hl)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M150 56 V 140 M230 56 V 140" stroke="var(--ink)" stroke-width="2"/><path d="M150 140 A 40 12 0 0 0 230 140" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="70" y="172" fill="var(--ink)">V = A_base · h</text><text x="190" y="172" fill="var(--ink)">V = πr² · h</text><text x="70" y="40" fill="var(--hl-ink)">base</text></g></svg>`,
    },
    {
      html: `<h3>Pirámides, conos y esferas</h3><p>Una pirámide o un cono tienen <mark>un tercio</mark> del volumen del prisma o cilindro con la misma base y altura: V = A_base · h / 3. La esfera tiene volumen <b>4/3 · π · r³</b> y área <b>4 · π · r²</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un cono cabe tres veces en el cilindro de igual base y altura; una esfera con su fórmula de volumen">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <ellipse cx="70" cy="140" rx="40" ry="12" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M30 140 V 40 M110 140 V 40" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/><ellipse cx="70" cy="40" rx="40" ry="12" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
        <path d="M30 140 L 70 40 L 110 140" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2.5"/>
        <circle cx="190" cy="90" r="44" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.5"/><ellipse cx="190" cy="90" rx="44" ry="12" fill="none" stroke="var(--pen)" stroke-width="1.5" stroke-dasharray="4 4"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="70" y="170" fill="var(--leaf)">cono = cilindro / 3</text><text x="190" y="164" fill="var(--pen)">V = 4/3 · π · r³</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Formulario de volúmenes",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Formulario: prisma y cilindro área de la base por altura; pirámide y cono un tercio; esfera cuatro tercios de pi por r al cubo">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Prisma", "A_base · h", "var(--pen)"], ["Cilindro", "π · r² · h", "var(--pen)"], ["Pirámide", "A_base · h / 3", "var(--leaf)"], ["Cono", "π · r² · h / 3", "var(--leaf)"], ["Esfera", "4/3 · π · r³", "var(--red)"]].map(([n, f, c], i) => `<rect x="${16 + i * 124}" y="24" width="112" height="172" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
        <text x="${72 + i * 124}" y="70" text-anchor="middle" font-size="18" font-weight="700" fill="${c}" ${D}>${n}</text>
        <foreignObject x="${22 + i * 124}" y="96" width="100" height="80"><p xmlns="http://www.w3.org/1999/xhtml" style="margin:0;font:700 15px Atkinson Hyperlegible,sans-serif;text-align:center;color:var(--ink)">${f}</p></foreignObject>`).join("")}
    </svg>`,
  },
  video: { id: "n0j1XwaroHs", titulo: "Volumen de prismas, súper fácil", canal: "Daniel Carreón", vistas: 7735359, megusta: 0, busqueda: "áreas y volúmenes de cuerpos geométricos" },
  quiz: [
    { q: "Los catetos de un triángulo rectángulo miden 6 y 8 cm. ¿Cuánto mide la hipotenusa?", o: ["10 cm", "14 cm", "48 cm"], a: 0, e: "√(36 + 64) = √100 = 10." },
    { q: "El área de un círculo de radio 5 cm es aproximadamente…", o: ["31,4 cm²", "78,5 cm²", "15,7 cm²"], a: 1, e: "3,14 · 25 = 78,5." },
    { q: "Un acuario de 50 × 30 × 40 cm, ¿cuántos litros caben?", o: ["60 L", "600 L", "6 L"], a: 0, e: "60.000 cm³ = 60 dm³ = 60 L." },
    { q: "El volumen de un cono es… el de un cilindro con igual base y altura.", o: ["la mitad", "un tercio", "el doble"], a: 1, e: "V = A_base · h / 3." },
    { q: "1 m³ equivale a…", o: ["100 L", "1.000 L", "10 L"], a: 1, e: "1 m³ = 1.000 dm³ = 1.000 L." },
  ],
  examen: [
    { q: "Volumen de una esfera de radio 3 cm (π ≈ 3,14):", o: ["113 cm³", "37,7 cm³", "28,3 cm³"], a: 0, e: "4/3 · 3,14 · 27 ≈ 113." },
    { q: "Área lateral de un cilindro de r = 2 cm y h = 10 cm:", o: ["≈ 125,6 cm²", "≈ 62,8 cm²", "≈ 40 cm²"], a: 0, e: "2 · 3,14 · 2 · 10 = 125,6." },
    { q: "Una escalera de 5 m está a 3 m de la pared. ¿A qué altura llega?", o: ["4 m", "2 m", "8 m"], a: 0, e: "√(25 − 9) = 4." },
  ],
  feynman: ["Qué dice el teorema de Pitágoras y un uso real", "Cómo se calcula el área total de un cilindro con su desarrollo", "Por qué el volumen de un prisma es base por altura", "Qué relación hay entre el volumen del cono y del cilindro"],
  mapa: mapa("ÁREAS Y VOLÚMENES", "var(--bac)", [
    ["Pitágoras", "a² = b² + c²", "var(--red)"],
    ["Áreas planas", "b·h · b·h/2 · πr²", "var(--pen)"],
    ["Áreas de cuerpos", "desarrollo plano", "var(--leaf)"],
    ["Volúmenes", "base·h · /3 · 4/3πr³", "var(--inf)"],
  ], 250),
  tarjetas: [
    ["Teorema de Pitágoras", "a² = b² + c² (a es la hipotenusa)."],
    ["Área del círculo", "π · r²"],
    ["Volumen del cilindro", "π · r² · h"],
    ["Volumen de la esfera", "4/3 · π · r³"],
    ["1 dm³ =", "1 litro"],
  ],
  familias: ["Medid juntos una lata o un brik y comprobad si la capacidad de la etiqueta encaja con el volumen.", "Calculad cuánta pintura hace falta para una habitación (área de las paredes).", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido de la medida y espacial: teorema de Pitágoras, áreas y volúmenes de cuerpos geométricos en contextos reales (RD 217/2022, Matemáticas A 4º).",
    ideas: ["Experimento de llenar un cono y verterlo en el cilindro de igual base y altura.", "Diseñar un envase con el mínimo de cartón para un volumen dado.", "Medir el aula y calcular su volumen de aire por alumno."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Volumen, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Volumen" },
  ],
  revisado: "2026-11-12",
};
