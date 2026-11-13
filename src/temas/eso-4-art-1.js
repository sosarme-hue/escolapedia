// Expresión Artística 4º ESO (1 de 2). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

const M = "Expresión Artística";
const C = "4-eso";
const BG = `<rect width="260" height="180" rx="14" fill="var(--paper)"/>`;
const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };
const filas = (aria, rows) => `<svg viewBox="0 0 640 ${rows.length * 50 + 20}" role="img" aria-label="${aria}">
  <rect width="640" height="${rows.length * 50 + 20}" rx="16" fill="var(--paper)"/>
  ${rows.map(([n, d, c], i) => `<rect x="20" y="${12 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${39 + i * 50}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="250" y="${39 + i * 50}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
</svg>`;
const chips = (rows) => rows.map(([n, d, c], i) => `<rect x="14" y="${16 + i * 52}" width="232" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="26" y="${36 + i * 52}" font-size="13" font-weight="700" fill="${c}" ${F}>${n}</text><text x="26" y="${52 + i * 52}" font-size="12" fill="var(--ink)" ${F}>${d}</text>`).join("");
// Colores puros para el círculo cromático (no dependen del tema).
const RUEDA = ["#e53935", "#fb8c00", "#fdd835", "#7cb342", "#1e88e5", "#8e24aa"];

module.exports = [
  {
    materia: M, curso: C, titulo: "Técnicas gráfico-plásticas", minutos: 35,
    objetivos: ["Distinguir técnicas secas, húmedas y mixtas", "Elegir la técnica y el soporte adecuados a una intención expresiva", "Experimentar con técnicas de estampación y collage"],
    claves: ["técnica seca", "técnica húmeda", "soporte", "aglutinante", "collage", "estampación"],
    pregunta: {
      texto: "Picasso pegó un trozo de hule con dibujo de rejilla en un cuadro en 1912. ¿Por qué fue algo tan revolucionario?",
      respuesta: "Porque fue uno de los primeros <mark>collages</mark> del arte moderno: mezclaba pintura con objetos reales. Desde entonces, cualquier material puede ser una <b>técnica artística</b>, desde el papel de periódico hasta el plástico reciclado.",
    },
    bloques: [
      {
        html: `<h3>Técnicas secas</h3><p>Se aplican directamente, sin agua: <b>lápiz de grafito</b> (de H, duro y claro, a B, blando y oscuro), <b>lápices de colores</b>, <b>ceras</b>, <b>pastel</b> y <b>carboncillo</b>. Permiten trabajar el <mark>trazo y el sombreado</mark>: rayado, punteado, difuminado.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escala de durezas del lápiz de 4H, claro, a 6B, oscuro, y tres tipos de sombreado">${BG}
          ${["4H", "2H", "HB", "2B", "4B", "6B"].map((n, i) => `<rect x="${20 + i * 38}" y="24" width="32" height="40" rx="4" fill="var(--ink)" fill-opacity="${0.12 + i * 0.16}"/><text x="${36 + i * 38}" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
          <g stroke="var(--ink)" stroke-width="1.2">${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M${24 + i * 8} 140 L ${40 + i * 8} 104"/>`).join("")}</g>
          ${[...Array(30)].map((_, i) => `<circle cx="${110 + (i * 37) % 50}" cy="${106 + (i * 23) % 34}" r="1.6" fill="var(--ink)"/>`).join("")}
          <rect x="184" y="104" width="56" height="36" fill="url(#gr-dif)"/><defs><linearGradient id="gr-dif"><stop offset="0" stop-color="var(--ink)"/><stop offset="1" stop-color="var(--ink)" stop-opacity="0"/></linearGradient></defs>
          <g ${F} font-size="11" font-weight="700" text-anchor="middle" fill="var(--muted)"><text x="50" y="160">rayado</text><text x="134" y="160">punteado</text><text x="212" y="160">difuminado</text></g></svg>`,
      },
      {
        html: `<h3>Técnicas húmedas</h3><p>Usan un <b>pigmento</b> mezclado con un <b>aglutinante</b> y un disolvente. La <b>acuarela</b> es transparente y se trabaja de claro a oscuro; el <b>gouache</b> y la <b>témpera</b> son opacos; el <b>acrílico</b> seca rápido y es resistente; el <b>óleo</b> seca lento y permite <mark>mezclar sobre el lienzo</mark>. La tinta china, con plumilla o pincel, da trazos muy negros.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación de transparencia: la acuarela deja ver la línea de debajo y la témpera la tapa">${BG}
          <path d="M20 90 H 240" stroke="var(--ink)" stroke-width="4"/>
          <rect x="30" y="50" width="90" height="80" rx="8" fill="#1e88e5" fill-opacity=".35"/>
          <rect x="140" y="50" width="90" height="80" rx="8" fill="#1e88e5"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="75" y="152" fill="var(--ink)">acuarela</text><text x="75" y="168" fill="var(--muted)">transparente</text><text x="185" y="152" fill="var(--ink)">témpera</text><text x="185" y="168" fill="var(--muted)">opaca</text><text x="130" y="34" fill="var(--muted)">línea de lápiz debajo</text></g></svg>`,
      },
      {
        html: `<h3>Soportes y herramientas</h3><p>El <b>soporte</b> es la superficie donde se trabaja: papel (de distinto gramaje y textura), cartulina, lienzo, madera, muro. Cada técnica pide el suyo: la acuarela necesita <mark>papel grueso</mark> que no se ondule; el óleo, lienzo imprimado. Los pinceles pueden ser redondos, planos o de abanico.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres pinceles: redondo, plano y abanico, con la huella que deja cada uno">${BG}
          ${[["redondo", 50], ["plano", 130], ["abanico", 210]].map(([n, x], i) => `<rect x="${x - 3}" y="20" width="6" height="70" rx="3" fill="var(--hl-ink)"/><rect x="${x - 6}" y="88" width="12" height="12" fill="var(--muted)"/>${i === 0 ? `<path d="M${x - 6} 100 Q ${x} 130 ${x + 6} 100 Z" fill="var(--ink)"/>` : i === 1 ? `<rect x="${x - 10}" y="100" width="20" height="20" fill="var(--ink)"/>` : `<path d="M${x - 6} 100 L ${x - 22} 122 Q ${x} 132 ${x + 22} 122 L ${x + 6} 100 Z" fill="var(--ink)"/>`}<text x="${x}" y="152" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
        </svg>`,
      },
      {
        html: `<h3>Técnicas mixtas y collage</h3><p>Combinar técnicas abre posibilidades: acuarela con tinta, cera con acuarela (la cera <mark>repele el agua</mark>), o el <b>collage</b>, que pega recortes de papel, fotos, telas u objetos sobre el soporte. Es la técnica de las vanguardias (Picasso, Braque, Hannah Höch) y hoy del arte digital.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Collage de recortes de colores superpuestos con distintas formas">${BG}
          <rect x="40" y="24" width="100" height="80" fill="var(--pen)" fill-opacity=".6" transform="rotate(-6 90 64)"/>
          <circle cx="160" cy="80" r="44" fill="var(--hl)" fill-opacity=".9"/>
          <path d="M60 150 L 120 70 L 170 160 Z" fill="var(--red)" fill-opacity=".75"/>
          <rect x="170" y="110" width="70" height="44" fill="var(--leaf)" fill-opacity=".8" transform="rotate(8 205 132)"/>
          <g stroke="var(--ink)" stroke-width="1" opacity=".5">${[0, 1, 2, 3, 4].map((i) => `<path d="M44 ${40 + i * 12} H 120"/>`).join("")}</g></svg>`,
      },
      {
        html: `<h3>Estampación y grabado</h3><p>La <b>estampación</b> permite hacer <mark>varias copias</mark> de una imagen: se entinta una matriz y se presiona sobre el papel. Ejemplos sencillos: sellos de patata, monotipo, linograbado (tallar linóleo) o serigrafía. Ojo: la imagen sale <b>invertida</b>, como en un espejo.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Matriz con una letra R tallada y la estampa en el papel con la R invertida">${BG}
          <rect x="24" y="40" width="90" height="90" rx="8" fill="var(--hl-ink)" fill-opacity=".25" stroke="var(--hl-ink)" stroke-width="2.5"/>
          <text x="69" y="110" text-anchor="middle" font-size="64" font-weight="700" fill="var(--hl-ink)" transform="scale(-1 1) translate(-138 0)" ${D}>R</text>
          <path d="M124 85 H 140" stroke="var(--muted)" stroke-width="2.5"/><path d="M134 79 L 142 85 L 134 91" fill="none" stroke="var(--muted)" stroke-width="2.5"/>
          <rect x="150" y="40" width="90" height="90" rx="4" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>
          <text x="195" y="110" text-anchor="middle" font-size="64" font-weight="700" fill="var(--ink)" ${D}>R</text>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="69" y="152" fill="var(--hl-ink)">matriz</text><text x="195" y="152" fill="var(--ink)">estampa</text></g></svg>`,
      },
    ],
    figura: { titulo: "Qué técnica elegir", svg: filas("Técnicas secas, húmedas transparentes, húmedas opacas y mixtas con su uso", [["Secas", "grafito, carboncillo, pastel: dibujo y sombreado", "var(--ink)"], ["Húmedas transparentes", "acuarela, tinta diluida: luz y veladuras", "var(--pen)"], ["Húmedas opacas", "témpera, gouache, acrílico, óleo: color plano", "var(--red)"], ["Mixtas", "collage, cera + acuarela, estampación", "var(--leaf)"]]) },
    video: { id: "w5vi-0Z0T6c", titulo: "5 técnicas de arte increíbles (fáciles, divertidas y económicas)", canal: "Adriana Arunima", vistas: 1624552, megusta: 0, busqueda: "técnicas gráfico-plásticas" },
    quiz: [
      { q: "¿Cuál es una técnica seca?", o: ["Acuarela", "Carboncillo", "Acrílico"], a: 1, e: "Se aplica sin agua." },
      { q: "Un lápiz 6B es…", o: ["duro y claro", "blando y oscuro", "de color"], a: 1, e: "B = blando (black)." },
      { q: "¿Qué técnica húmeda es transparente?", o: ["Témpera", "Acuarela", "Gouache"], a: 1, e: "Deja ver el papel." },
      { q: "En la estampación, la imagen sale…", o: ["igual que en la matriz", "invertida", "más grande"], a: 1, e: "Como en un espejo." },
      { q: "Pegar recortes de papel y objetos sobre un soporte es…", o: ["un grabado", "un collage", "un esgrafiado"], a: 1, e: "Del francés coller, pegar." },
    ],
    examen: [
      { q: "El aglutinante sirve para…", o: ["unir el pigmento y fijarlo al soporte", "limpiar los pinceles", "dar brillo al papel"], a: 0, e: "Mantiene unido el pigmento." },
      { q: "Si pintas con cera y luego con acuarela encima…", o: ["la cera repele el agua", "la cera se disuelve", "no se ve nada"], a: 0, e: "Técnica de reserva." },
      { q: "¿Qué pintura seca más despacio y permite mezclar sobre el lienzo?", o: ["Acrílico", "Óleo", "Témpera"], a: 1, e: "Se basa en aceite." },
    ],
    feynman: ["Qué diferencia hay entre técnicas secas y húmedas", "Por qué la acuarela se trabaja de claro a oscuro", "Qué es un collage y quién lo popularizó", "Cómo funciona la estampación"],
    mapa: mapa("TÉCNICAS GRÁFICO-PLÁSTICAS", "var(--bac)", [["Secas", "grafito · pastel · carboncillo", "var(--ink)"], ["Húmedas", "acuarela · témpera · acrílico · óleo", "var(--pen)"], ["Mixtas", "collage · reservas", "var(--red)"], ["Estampación", "matriz · copia invertida", "var(--leaf)"]], 260),
    tarjetas: [["Técnica seca", "Se aplica sin agua: grafito, ceras, pastel, carboncillo."], ["Aglutinante", "Sustancia que une el pigmento y lo fija al soporte."], ["Acuarela", "Técnica húmeda transparente, de claro a oscuro."], ["Collage", "Obra hecha pegando recortes y materiales."], ["Estampación", "Obtener copias presionando una matriz entintada."]],
    familias: ["Haced juntos un sello con una patata o una goma de borrar y estampad tarjetas.", "Buscad en casa materiales para un collage: revistas, telas, envoltorios.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Técnicas, materiales y soportes: técnicas secas, húmedas y mixtas, estampación y experimentación (RD 217/2022, Expresión Artística 4º).", ideas: ["Muestrario de técnicas en una carpeta de 8 fichas.", "Linograbado o sellos de goma EVA para una tirada de postales.", "Collage colectivo con material reciclado."] },
    fuentes: [RD, { t: "Museo Reina Sofía, colección", url: "https://www.museoreinasofia.es/coleccion" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "El dibujo y el boceto", minutos: 35,
    objetivos: ["Usar el boceto para planificar una obra", "Encajar formas con figuras geométricas y proporciones", "Representar volumen con luz y sombra y profundidad con la perspectiva"],
    claves: ["boceto", "encaje", "proporción", "claroscuro", "perspectiva", "punto de fuga"],
    pregunta: {
      texto: "Leonardo da Vinci dejó más de 7.000 páginas de cuadernos. ¿Crees que estaban llenas de obras terminadas?",
      respuesta: "No: casi todo son <mark>bocetos</mark>, apuntes rápidos de máquinas, cuerpos, caras y agua. El boceto es la forma en que piensan los artistas y diseñadores: <b>probar ideas rápido</b> antes de hacer la obra definitiva.",
    },
    bloques: [
      {
        html: `<h3>Del apunte al dibujo final</h3><p>El <b>apunte</b> es rápido, para captar una idea o un momento. El <b>boceto</b> prueba composiciones y soluciones. El <b>dibujo definitivo</b> es la versión acabada. Dibujar muchos bocetos <mark>sin miedo a equivocarse</mark> es el secreto de los buenos dibujantes.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres fases de un dibujo de una taza: apunte de líneas sueltas, boceto con formas y dibujo acabado con sombra">${BG}
          <path d="M26 70 Q 50 60 70 72 M30 74 L 36 120 Q 50 128 64 120 L 70 74 M70 86 Q 84 90 70 104" fill="none" stroke="var(--muted)" stroke-width="1.5"/>
          <ellipse cx="130" cy="72" rx="22" ry="6" fill="none" stroke="var(--pen)" stroke-width="1.5"/><path d="M108 72 L 112 120 M152 72 L 148 120" stroke="var(--pen)" stroke-width="1.5"/><ellipse cx="130" cy="120" rx="18" ry="5" fill="none" stroke="var(--pen)" stroke-width="1.5"/><path d="M150 84 Q 166 92 149 106" fill="none" stroke="var(--pen)" stroke-width="1.5"/>
          <path d="M188 72 L 192 120 Q 210 128 228 120 L 232 72 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><path d="M210 72 L 214 124 Q 222 124 228 120 L 232 72 Z" fill="var(--ink)" fill-opacity=".25"/><ellipse cx="210" cy="72" rx="22" ry="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><path d="M231 84 Q 248 92 229 106" fill="none" stroke="var(--ink)" stroke-width="3"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="50" y="152" fill="var(--muted)">apunte</text><text x="130" y="152" fill="var(--pen)">boceto</text><text x="210" y="152" fill="var(--ink)">final</text></g></svg>`,
      },
      {
        html: `<h3>Encajar y medir proporciones</h3><p><b>Encajar</b> es reducir lo que ves a <mark>formas geométricas simples</mark> (círculos, rectángulos, triángulos) antes de dibujar detalles. Para medir proporciones, se toma una unidad (por ejemplo, la cabeza) y se compara: un adulto mide unas <b>7,5 cabezas</b> de alto.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Figura humana encajada con formas simples y una regla de proporción de unas 7 cabezas y media">${BG}
          ${[...Array(8)].map((_, i) => `<path d="M40 ${12 + i * 20} H 200" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/><text x="30" y="${27 + i * 20}" text-anchor="middle" font-size="10" font-weight="700" fill="var(--muted)" ${F}>${i + 1}</text>`).join("")}
          <circle cx="120" cy="22" r="10" fill="none" stroke="var(--pen)" stroke-width="2"/><path d="M104 34 L 136 34 L 132 80 L 108 80 Z" fill="none" stroke="var(--pen)" stroke-width="2"/><path d="M108 80 L 104 162 M132 80 L 136 162 M104 36 L 92 96 M136 36 L 148 96" stroke="var(--pen)" stroke-width="2"/>
          <text x="214" y="96" font-size="12" font-weight="700" fill="var(--pen)" ${F}>≈ 7,5</text><text x="214" y="112" font-size="12" font-weight="700" fill="var(--pen)" ${F}>cabezas</text></svg>`,
      },
      {
        html: `<h3>Luz, sombra y volumen</h3><p>El <b>claroscuro</b> da volumen a las formas. En un objeto iluminado hay: <b>luz</b>, <b>penumbra</b>, <b>sombra propia</b> (la parte del objeto que no recibe luz), <b>luz reflejada</b> y <b>sombra proyectada</b> en el suelo. Sin sombras, <mark>todo parece plano</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esfera iluminada desde la izquierda con luz, sombra propia y sombra proyectada">${BG}
          <defs><radialGradient id="esf-cl" cx=".35" cy=".35" r=".75"><stop offset="0" stop-color="var(--card)"/><stop offset=".6" stop-color="var(--muted)"/><stop offset="1" stop-color="var(--ink)"/></radialGradient></defs>
          <ellipse cx="150" cy="140" rx="60" ry="12" fill="var(--ink)" fill-opacity=".35"/><circle cx="120" cy="90" r="50" fill="url(#esf-cl)"/>
          <circle cx="30" cy="30" r="10" fill="var(--hl)"/><path d="M42 38 L 70 56" stroke="var(--hl-ink)" stroke-width="2"/>
          <g ${F} font-size="11" font-weight="700"><text x="104" y="76" fill="var(--ink)">luz</text><text x="180" y="96" fill="var(--ink)">sombra propia</text><text x="160" y="168" fill="var(--muted)">sombra proyectada</text></g></svg>`,
      },
      {
        html: `<h3>La perspectiva</h3><p>Sirve para dar <b>profundidad</b>. En la perspectiva <b>cónica frontal</b>, las líneas que se alejan convergen en un único <mark>punto de fuga</mark> situado en la línea del horizonte (a la altura de tus ojos). En la cónica oblicua hay dos puntos de fuga. Los objetos lejanos se ven más pequeños.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Perspectiva con un punto de fuga: un camino y unos postes que se hacen más pequeños hacia el horizonte">${BG}
          <path d="M10 70 H 250" stroke="var(--red)" stroke-width="2"/><circle cx="130" cy="70" r="5" fill="var(--red)"/>
          <path d="M40 170 L 130 70 L 220 170" fill="var(--hl)" fill-opacity=".4" stroke="var(--ink)" stroke-width="2"/>
          <path d="M20 170 L 130 70 M240 170 L 130 70" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/>
          ${[0, 1, 2, 3].map((i) => { const k = [1, 0.6, 0.36, 0.2][i]; return `<rect x="${130 - 104 * k}" y="${70 + 100 * k - 70 * k}" width="${8 * k}" height="${70 * k}" fill="var(--leaf)"/><rect x="${130 + 96 * k}" y="${70 + 100 * k - 70 * k}" width="${8 * k}" height="${70 * k}" fill="var(--leaf)"/>`; }).join("")}
          <g ${F} font-size="11" font-weight="700"><text x="138" y="62" fill="var(--red)">punto de fuga</text><text x="12" y="62" fill="var(--red)">horizonte</text></g></svg>`,
      },
      {
        html: `<h3>El cuaderno de bocetos</h3><p>Un <b>sketchbook</b> es tu laboratorio: dibuja a diario cosas que te rodean, gente en el metro, tus manos, objetos de casa. No hay que enseñar todo. <mark>La práctica constante</mark> mejora más que el talento: 10 minutos al día durante un curso son más de 30 horas de dibujo.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuaderno de bocetos abierto con pequeños dibujos de una mano, una taza y una cara">${BG}
          <path d="M30 30 L 128 40 V 160 L 30 150 Z M232 30 L 134 40 V 160 L 232 150 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
          <circle cx="76" cy="80" r="22" fill="none" stroke="var(--muted)" stroke-width="1.5"/><circle cx="68" cy="76" r="2" fill="var(--muted)"/><circle cx="84" cy="76" r="2" fill="var(--muted)"/><path d="M68 88 Q 76 94 84 88" fill="none" stroke="var(--muted)" stroke-width="1.5"/>
          <path d="M160 70 L 164 110 Q 178 116 192 110 L 196 70" fill="none" stroke="var(--muted)" stroke-width="1.5"/><ellipse cx="178" cy="70" rx="18" ry="5" fill="none" stroke="var(--muted)" stroke-width="1.5"/>
          <path d="M60 140 V 116 M68 140 V 110 M76 140 V 112 M84 140 V 118 M52 140 Q 50 126 56 122" stroke="var(--muted)" stroke-width="1.5" fill="none"/>
          <text x="183" y="140" text-anchor="middle" font-size="12" font-weight="700" fill="var(--pen)" ${F}>10 min al día</text></svg>`,
      },
    ],
    figura: { titulo: "Del boceto a la obra", svg: filas("Fases: observar, encajar, proporcionar, sombrear", [["1. Observar", "mirar más que dibujar, buscar formas", "var(--pen)"], ["2. Encajar", "formas geométricas simples y ejes", "var(--leaf)"], ["3. Proporcionar", "medir con una unidad y comparar", "var(--hl-ink)"], ["4. Sombrear", "luz, sombra propia y proyectada", "var(--ink)"]]) },
    video: { id: "WuZwT6Kgy0k", titulo: "10 trucos y consejos para dibujar mejor", canal: "Abranchoart", vistas: 1977171, megusta: 24602, busqueda: "consejos para dibujar mejor" },
    quiz: [
      { q: "Reducir lo que ves a formas geométricas simples se llama…", o: ["encajar", "colorear", "estampar"], a: 0, e: "Es el primer paso del dibujo." },
      { q: "¿Cuántas cabezas mide aproximadamente un adulto?", o: ["4", "7,5", "12"], a: 1, e: "Es el canon más usado." },
      { q: "La parte del objeto que no recibe luz es la…", o: ["sombra proyectada", "sombra propia", "luz reflejada"], a: 1, e: "Está en el propio objeto." },
      { q: "En la perspectiva cónica frontal hay… punto(s) de fuga.", o: ["un", "dos", "tres"], a: 0, e: "Todas las líneas que se alejan van a él." },
      { q: "El punto de fuga está situado en…", o: ["el suelo", "la línea del horizonte", "el borde del papel"], a: 1, e: "A la altura de los ojos." },
    ],
    examen: [
      { q: "Un apunte rápido para captar un momento es…", o: ["un boceto", "un apunte", "una ilustración final"], a: 1, e: "Es lo más rápido." },
      { q: "La sombra que el objeto deja en el suelo es la…", o: ["sombra propia", "sombra proyectada", "penumbra"], a: 1, e: "Se proyecta sobre otra superficie." },
      { q: "En perspectiva, los objetos lejanos se dibujan…", o: ["más grandes", "más pequeños", "igual"], a: 1, e: "Disminuyen hacia el punto de fuga." },
    ],
    feynman: ["Qué diferencia hay entre apunte, boceto y dibujo final", "Cómo se encaja una figura", "Qué partes tiene el claroscuro", "Qué es el punto de fuga"],
    mapa: mapa("DIBUJO Y BOCETO", "var(--bac)", [["Fases", "apunte · boceto · final", "var(--pen)"], ["Encaje", "formas simples · proporción", "var(--leaf)"], ["Claroscuro", "luz · sombra propia · proyectada", "var(--ink)"], ["Perspectiva", "horizonte · punto de fuga", "var(--red)"]], 250),
    tarjetas: [["Boceto", "Dibujo previo para probar ideas y composiciones."], ["Encajar", "Reducir la forma a figuras geométricas simples."], ["Canon humano", "Unas 7,5 cabezas de altura."], ["Sombra propia", "La parte del objeto que no recibe luz."], ["Punto de fuga", "Donde convergen las líneas que se alejan, en el horizonte."]],
    familias: ["Regalad o conseguid un cuaderno de bocetos y proponed un dibujo al día durante una semana.", "Visitad juntos un museo o su web y buscad bocetos de grandes artistas.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Lenguaje y técnicas del dibujo: boceto, encaje, proporción, claroscuro y sistemas de representación (RD 217/2022, Expresión Artística 4º).", ideas: ["Reto de 30 bocetos en 30 días con exposición final.", "Dibujo de bodegón con un foco lateral para el claroscuro.", "Fotografiar el pasillo del centro y trazar sus líneas de fuga."] },
    fuentes: [RD, { t: "Museo del Prado, dibujos y estampas", url: "https://www.museodelprado.es/coleccion/obras-de-arte?search=dibujo" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "El color", minutos: 35,
    objetivos: ["Distinguir la síntesis aditiva y la sustractiva del color", "Usar el círculo cromático para crear armonías y contrastes", "Analizar el significado y el uso expresivo del color"],
    claves: ["primarios", "complementarios", "tono", "saturación", "luminosidad", "armonía"],
    pregunta: {
      texto: "En una pantalla, mezclar luz roja y verde da amarillo. En tu caja de pinturas, mezclar rojo y verde da marrón. ¿Quién tiene razón?",
      respuesta: "¡Los dos! La <b>luz</b> se mezcla por <mark>síntesis aditiva</mark> (suma luz y se aclara) y los <b>pigmentos</b> por <mark>síntesis sustractiva</mark> (absorben luz y se oscurecen). Por eso los primarios de la pantalla y los de la pintura son distintos.",
    },
    bloques: [
      {
        html: `<h3>Color luz y color pigmento</h3><p><b>Síntesis aditiva</b> (luz, pantallas): primarios <b>rojo, verde y azul</b> (RGB); juntos dan <mark>blanco</mark>. <b>Síntesis sustractiva</b> (pigmentos, impresoras): primarios <b>cian, magenta y amarillo</b> (CMY); juntos dan casi <mark>negro</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Mezcla aditiva de luces roja, verde y azul que da blanco en el centro, y mezcla sustractiva de cian, magenta y amarillo que da negro">${BG}
          <rect x="10" y="10" width="116" height="140" rx="10" fill="#111"/>
          <g style="isolation:isolate"><circle cx="54" cy="64" r="30" fill="#f00" style="mix-blend-mode:screen"/><circle cx="82" cy="64" r="30" fill="#0f0" style="mix-blend-mode:screen"/><circle cx="68" cy="88" r="30" fill="#00f" style="mix-blend-mode:screen"/></g>
          <rect x="134" y="10" width="116" height="140" rx="10" fill="#fff"/>
          <g style="isolation:isolate"><circle cx="178" cy="64" r="30" fill="#0ff" style="mix-blend-mode:multiply"/><circle cx="206" cy="64" r="30" fill="#f0f" style="mix-blend-mode:multiply"/><circle cx="192" cy="88" r="30" fill="#ff0" style="mix-blend-mode:multiply"/></g>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="68" y="170" fill="var(--ink)">luz (RGB)</text><text x="192" y="170" fill="var(--ink)">pigmento (CMY)</text></g></svg>`,
      },
      {
        html: `<h3>El círculo cromático</h3><p>Ordena los colores: los <b>primarios</b>, los <b>secundarios</b> (mezcla de dos primarios) y los <b>terciarios</b>. Los <mark>complementarios</mark> están enfrentados (rojo–verde, azul–naranja, amarillo–violeta): juntos se refuerzan y crean el máximo contraste.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Círculo cromático de seis colores con una flecha que une dos complementarios: azul y naranja">${BG}
          ${RUEDA.map((c, i) => { const a1 = (i * 60 - 120) * Math.PI / 180, a2 = ((i + 1) * 60 - 120) * Math.PI / 180, cx = 84, cy = 90, r = 64; return `<path d="M${cx} ${cy} L ${(cx + r * Math.cos(a1)).toFixed(1)} ${(cy + r * Math.sin(a1)).toFixed(1)} A ${r} ${r} 0 0 1 ${(cx + r * Math.cos(a2)).toFixed(1)} ${(cy + r * Math.sin(a2)).toFixed(1)} Z" fill="${c}" stroke="var(--paper)" stroke-width="2"/>`; }).join("")}
          <circle cx="84" cy="90" r="22" fill="var(--paper)"/>
          <g ${F} font-size="12" font-weight="700"><text x="158" y="60" fill="var(--ink)">enfrentados =</text><text x="158" y="76" fill="var(--ink)">complementarios</text><text x="158" y="104" fill="#1e88e5">azul ↔</text><text x="158" y="120" fill="#fb8c00">naranja</text></g></svg>`,
      },
      {
        html: `<h3>Las cualidades del color</h3><p>Todo color tiene tres cualidades: <b>tono</b> o matiz (rojo, azul…), <b>saturación</b> (pureza: un color saturado es intenso; desaturado, grisáceo) y <b>luminosidad</b> o valor (claro u oscuro). Añadir blanco aclara; añadir negro, <mark>oscurece</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escala de saturación de azul a gris y escala de luminosidad de azul claro a azul oscuro">${BG}
          ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${20 + i * 38}" y="34" width="34" height="40" rx="4" fill="hsl(210 ${90 - i * 18}% 50%)"/><rect x="${20 + i * 38}" y="108" width="34" height="40" rx="4" fill="hsl(210 80% ${85 - i * 13}%)"/>`).join("")}
          <g ${F} font-size="12" font-weight="700"><text x="20" y="26" fill="var(--ink)">saturación: intenso → grisáceo</text><text x="20" y="100" fill="var(--ink)">luminosidad: claro → oscuro</text></g></svg>`,
      },
      {
        html: `<h3>Armonías y contrastes</h3><p>Una <b>armonía</b> usa colores que conviven bien: <b>análogos</b> (vecinos en el círculo, como amarillo, naranja y rojo) o una gama <b>monocroma</b> (un solo tono con distintas luminosidades). El <b>contraste</b> busca llamar la atención: complementarios, claro–oscuro o <mark>cálido–frío</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Paleta análoga de amarillo, naranja y rojo, paleta monocroma de verdes y paleta de contraste complementario de azul y naranja">${BG}
          ${[["#fdd835", "#fb8c00", "#e53935"], ["#c5e1a5", "#7cb342", "#33691e"], ["#1e88e5", "#fb8c00", "#1e88e5"]].map((p, j) => p.map((c, i) => `<rect x="${20 + i * 40}" y="${18 + j * 52}" width="36" height="36" rx="6" fill="${c}"/>`).join("") + `<text x="150" y="${42 + j * 52}" font-size="13" font-weight="700" fill="var(--ink)" ${F}>${["análogos", "monocroma", "complementarios"][j]}</text>`).join("")}
        </svg>`,
      },
      {
        html: `<h3>El color expresa</h3><p>Los colores <b>cálidos</b> (rojos, naranjas, amarillos) parecen acercarse y transmiten energía; los <b>fríos</b> (azules, verdes, violetas) se alejan y dan calma. Su significado cambia según la cultura: el blanco es luto en partes de Asia. Picasso pintó su <mark>época azul</mark> en un periodo de tristeza.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos ventanas con el mismo paisaje: en tonos cálidos transmite energía y en tonos fríos transmite calma">${BG}
          <defs><linearGradient id="col-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fdd835"/><stop offset="1" stop-color="#e53935"/></linearGradient><linearGradient id="col-f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#90caf9"/><stop offset="1" stop-color="#1a237e"/></linearGradient></defs>
          <rect x="16" y="20" width="108" height="110" rx="8" fill="url(#col-c)"/><path d="M16 110 L 50 80 L 80 100 L 124 70 V 130 H 16 Z" fill="#bf360c"/><circle cx="96" cy="46" r="12" fill="#fff59d"/>
          <rect x="136" y="20" width="108" height="110" rx="8" fill="url(#col-f)"/><path d="M136 110 L 170 80 L 200 100 L 244 70 V 130 H 136 Z" fill="#0d1b4c"/><circle cx="216" cy="46" r="12" fill="#e3f2fd"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="70" y="152" fill="#e53935">cálidos: energía</text><text x="190" y="152" fill="#1e88e5">fríos: calma</text></g></svg>`,
      },
    ],
    figura: { titulo: "Mapa del color", svg: filas("Primarios luz, primarios pigmento, complementarios y cualidades", [["Primarios luz (RGB)", "rojo, verde, azul → juntos: blanco", "var(--red)"], ["Primarios pigmento (CMY)", "cian, magenta, amarillo → juntos: negro", "var(--pen)"], ["Complementarios", "opuestos en el círculo: máximo contraste", "var(--leaf)"], ["Cualidades", "tono · saturación · luminosidad", "var(--inf)"]]) },
    video: { id: "PYjqhn-26TM", titulo: "Cómo combinar colores: armonía del color y círculo cromático", canal: "Profe Matos", vistas: 1723072, megusta: 62573, busqueda: "teoría del color círculo cromático" },
    quiz: [
      { q: "Los primarios de la luz son…", o: ["rojo, amarillo y azul", "rojo, verde y azul", "cian, magenta y amarillo"], a: 1, e: "RGB, como en las pantallas." },
      { q: "El complementario del azul es el…", o: ["verde", "naranja", "violeta"], a: 1, e: "Están enfrentados en el círculo." },
      { q: "Un color grisáceo tiene poca…", o: ["saturación", "luminosidad", "temperatura"], a: 0, e: "Es menos puro." },
      { q: "Mezclando todos los colores luz se obtiene…", o: ["negro", "blanco", "marrón"], a: 1, e: "Síntesis aditiva." },
      { q: "Los colores cálidos transmiten…", o: ["calma y distancia", "energía y cercanía", "tristeza"], a: 1, e: "Parecen acercarse." },
    ],
    examen: [
      { q: "Una impresora usa la síntesis…", o: ["aditiva", "sustractiva", "ninguna"], a: 1, e: "Trabaja con tintas CMYK." },
      { q: "Amarillo, naranja y rojo juntos forman una armonía de colores…", o: ["complementarios", "análogos", "fríos"], a: 1, e: "Son vecinos en el círculo." },
      { q: "Añadir negro a un color cambia su…", o: ["tono", "luminosidad", "material"], a: 1, e: "Lo oscurece." },
    ],
    feynman: ["Qué diferencia hay entre síntesis aditiva y sustractiva", "Cómo se organiza el círculo cromático", "Qué son tono, saturación y luminosidad", "Cómo usar el color para expresar emociones"],
    mapa: mapa("EL COLOR", "var(--bac)", [["Síntesis", "aditiva RGB · sustractiva CMY", "var(--red)"], ["Círculo", "primarios · secundarios · complementarios", "var(--pen)"], ["Cualidades", "tono · saturación · luminosidad", "var(--leaf)"], ["Expresión", "cálidos · fríos · armonía · contraste", "var(--inf)"]], 260),
    tarjetas: [["Primarios luz", "Rojo, verde y azul (RGB)."], ["Primarios pigmento", "Cian, magenta y amarillo (CMY)."], ["Complementarios", "Colores opuestos en el círculo cromático."], ["Saturación", "Pureza o intensidad de un color."], ["Colores análogos", "Vecinos en el círculo cromático."]],
    familias: ["Mirad juntos una pantalla con una lupa: veréis los píxeles rojos, verdes y azules.", "Buscad en carteles y logotipos qué colores complementarios se usan para llamar la atención.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Lenguaje visual: el color, síntesis aditiva y sustractiva, círculo cromático, cualidades, armonías y simbología (RD 217/2022, Expresión Artística 4º).", ideas: ["Mezcla de témperas a partir de los tres primarios CMY para obtener el círculo de 12.", "Linternas con filtros de colores para la síntesis aditiva.", "Reinterpretar una obra cambiando su gama de color."] },
    fuentes: [RD, { t: "Color, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Color" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "Fotografía", minutos: 35,
    objetivos: ["Conocer el funcionamiento básico de una cámara y la exposición", "Aplicar reglas de composición y tipos de plano", "Usar la fotografía como medio de expresión y respetar los derechos de imagen"],
    claves: ["exposición", "diafragma", "obturador", "ISO", "regla de los tercios", "encuadre"],
    pregunta: {
      texto: "La primera fotografía que se conserva necesitó unas 8 horas de exposición. ¿Cuánto tarda tu móvil?",
      respuesta: "Una milésima de segundo o menos. La foto de <b>Niépce</b> (hacia 1826) necesitó horas de luz para fijar la imagen. Hoy la <mark>luz</mark> sigue siendo la protagonista: fotografía significa «escribir con luz».",
    },
    bloques: [
      {
        html: `<h3>Cómo funciona una cámara</h3><p>Una cámara es una <b>caja oscura</b> con un agujero: la luz entra por el <b>objetivo</b> y forma una imagen invertida sobre el <b>sensor</b>. Es el mismo principio de la <mark>cámara oscura</mark> que ya conocían Aristóteles y los pintores del Renacimiento.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cámara oscura: los rayos de un árbol atraviesan el agujero y forman una imagen invertida al fondo">${BG}
          <path d="M40 60 V 140 M40 60 L 26 90 L 54 90 Z" fill="var(--leaf)" stroke="var(--leaf)" stroke-width="5"/>
          <rect x="120" y="40" width="120" height="110" fill="var(--ink)"/><rect x="117" y="88" width="6" height="14" fill="var(--paper)"/>
          <path d="M40 66 L 120 95 L 230 132 M40 138 L 120 95 L 230 54" stroke="var(--hl)" stroke-width="1.5"/>
          <path d="M228 132 V 54 M228 132 L 214 108 L 242 108 Z" fill="var(--leaf)" stroke="var(--leaf)" stroke-width="3" transform="translate(0 0)"/>
          <g ${F} font-size="11" font-weight="700"><text x="96" y="30" fill="var(--ink)">objetivo</text><text x="176" y="166" text-anchor="middle" fill="var(--muted)">imagen invertida en el sensor</text></g></svg>`,
      },
      {
        html: `<h3>El triángulo de la exposición</h3><p>La cantidad de luz depende de tres ajustes: el <b>diafragma</b> (apertura: más abierto, más luz y fondo más desenfocado), la <b>velocidad de obturación</b> (rápida congela el movimiento; lenta lo convierte en estela) y el <b>ISO</b> (sensibilidad: alto aclara pero añade ruido). Equilibrarlos da una <mark>foto bien expuesta</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Triángulo de la exposición con diafragma, velocidad de obturación e ISO en sus vértices">${BG}
          <path d="M130 24 L 226 150 L 34 150 Z" fill="var(--hl)" fill-opacity=".25" stroke="var(--hl-ink)" stroke-width="2.5"/>
          ${[["diafragma", 130, 24, "var(--pen)", 196, 30], ["velocidad", 226, 150, "var(--red)", 214, 176], ["ISO", 34, 150, "var(--leaf)", 46, 176]].map(([n, x, y, c, tx, ty]) => `<circle cx="${x}" cy="${y}" r="14" fill="${c}"/><text x="${tx}" y="${ty}" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" ${F}>${n}</text>`).join("")}
          <text x="130" y="118" text-anchor="middle" font-size="12" font-weight="700" fill="var(--hl-ink)" ${F}>exposición</text></svg>`,
      },
      {
        html: `<h3>Composición: la regla de los tercios</h3><p>Divide la imagen con dos líneas horizontales y dos verticales imaginarias. Coloca lo importante en las <mark>líneas o en sus cruces</mark>, no en el centro, y el horizonte en un tercio. Otras pautas: <b>líneas que guían</b> la mirada, <b>simetría</b>, <b>marcos naturales</b> y dejar aire en la dirección de la mirada.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Paisaje con cuadrícula de tercios: el horizonte en el tercio inferior y un árbol en un punto fuerte">${BG}
          <rect x="20" y="16" width="220" height="148" rx="6" fill="#bbdefb"/><rect x="20" y="115" width="220" height="49" fill="#a5d6a7"/>
          <path d="M93 16 V 164 M166 16 V 164 M20 65 H 240 M20 115 H 240" stroke="var(--card)" stroke-width="1.5" stroke-dasharray="5 4"/>
          <path d="M166 115 V 74" stroke="#6d4c41" stroke-width="5"/><circle cx="166" cy="64" r="20" fill="#43a047"/>
          ${[[93, 65], [166, 65], [93, 115], [166, 115]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="var(--red)"/>`).join("")}</svg>`,
      },
      {
        html: `<h3>Tipos de plano y ángulo</h3><p>Según cuánto se ve de la persona: <b>plano general</b> (persona entera en su entorno), <b>plano medio</b> (de cintura arriba), <b>primer plano</b> (rostro) y <b>plano detalle</b>. Según el ángulo: <b>picado</b> (desde arriba, empequeñece), <b>contrapicado</b> (desde abajo, engrandece) y normal. Cada uno <mark>cuenta algo distinto</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro encuadres de la misma figura: plano general, plano medio, primer plano y plano detalle">${BG}
          ${[["general", "0 0 56 90"], ["medio", "10 4 36 58"], ["primer", "18 6 20 32"], ["detalle", "22 12 12 19.3"]].map(([n, vb], i) => `<svg x="${12 + i * 61}" y="30" width="56" height="90" viewBox="${vb}"><rect x="-100" y="-100" width="300" height="300" fill="var(--card)"/><circle cx="28" cy="18" r="8" fill="var(--inf)"/><circle cx="25" cy="17" r="1.2" fill="var(--ink)"/><circle cx="31" cy="17" r="1.2" fill="var(--ink)"/><path d="M28 26 V 58 M28 58 L 20 82 M28 58 L 36 82 M28 32 L 16 50 M28 32 L 40 50" stroke="var(--inf)" stroke-width="4" stroke-linecap="round"/></svg><rect x="${12 + i * 61}" y="30" width="56" height="90" fill="none" stroke="var(--ink)" stroke-width="2"/><text x="${40 + i * 61}" y="140" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
        </svg>`,
      },
      {
        html: `<h3>Fotografía, ética y derechos</h3><p>La fotografía documenta (fotoperiodismo), expresa (fotografía artística) y vende (publicidad). En redes, recuerda: no publiques fotos de otras personas <mark>sin su permiso</mark>, y menos de menores; las imágenes tienen <b>derechos de autor</b>; y muchas fotos están retocadas o generadas con IA, así que mira con espíritu crítico.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres preguntas antes de publicar una foto: tengo permiso, es mía, está retocada">${BG}${[["¿Tengo permiso?", "de las personas que aparecen", "var(--red)"], ["¿Es mía?", "si no, respeta los derechos de autor", "var(--pen)"], ["¿Es real?", "retoque o IA: mira con espíritu crítico", "var(--leaf)"]].map(([n, d, c], i) => `<rect x="14" y="${16 + i * 52}" width="232" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="26" y="${36 + i * 52}" font-size="13" font-weight="700" fill="${c}" ${F}>${n}</text><text x="26" y="${52 + i * 52}" font-size="12" fill="var(--ink)" ${F}>${d}</text>`).join("")}</svg>`,
      },
    ],
    figura: { titulo: "Ajustes de la cámara y su efecto", svg: filas("Diafragma, velocidad, ISO y composición con sus efectos", [["Diafragma abierto", "más luz y fondo desenfocado (retratos)", "var(--pen)"], ["Velocidad rápida", "congela el movimiento (deportes)", "var(--red)"], ["ISO alto", "más sensibilidad, pero más ruido", "var(--leaf)"], ["Regla de los tercios", "lo importante en los puntos fuertes", "var(--hl-ink)"]]) },
    video: { id: "4OT4vj8mvY8", titulo: "5 reglas de composición fotográfica (con ejemplos)", canal: "De Viaje con la Cámara", vistas: 1538621, megusta: 83519, busqueda: "composición fotográfica regla de los tercios" },
    quiz: [
      { q: "¿Qué ajuste controla la apertura por la que entra la luz?", o: ["ISO", "Diafragma", "Balance de blancos"], a: 1, e: "Es el agujero del objetivo." },
      { q: "Para congelar a un atleta en pleno salto usarás una velocidad…", o: ["rápida", "lenta", "da igual"], a: 0, e: "1/1000 s o más." },
      { q: "En la regla de los tercios, el horizonte se coloca…", o: ["en el centro", "en una línea de tercio", "fuera del encuadre"], a: 1, e: "Arriba o abajo." },
      { q: "Un plano que muestra solo el rostro es un…", o: ["plano general", "primer plano", "plano medio"], a: 1, e: "Destaca la emoción." },
      { q: "Una foto tomada desde abajo es un…", o: ["picado", "contrapicado", "cenital"], a: 1, e: "Engrandece al sujeto." },
    ],
    examen: [
      { q: "Un ISO muy alto produce…", o: ["más ruido", "más nitidez", "colores más vivos"], a: 0, e: "Granulado en la imagen." },
      { q: "La imagen que se forma en el sensor está…", o: ["invertida", "derecha", "desenfocada"], a: 0, e: "Como en la cámara oscura." },
      { q: "Publicar la foto de un compañero en redes…", o: ["necesita su permiso", "siempre está permitido", "solo si es divertida"], a: 0, e: "Derecho a la propia imagen." },
    ],
    feynman: ["Cómo forma la imagen una cámara", "Qué hacen el diafragma, la velocidad y el ISO", "Qué es la regla de los tercios", "Qué expresa cada tipo de plano y ángulo"],
    mapa: mapa("FOTOGRAFÍA", "var(--bac)", [["Cámara", "cámara oscura · sensor", "var(--ink)"], ["Exposición", "diafragma · velocidad · ISO", "var(--pen)"], ["Composición", "tercios · líneas · planos", "var(--leaf)"], ["Ética", "permiso · derechos · retoque", "var(--red)"]], 250),
    tarjetas: [["Diafragma", "Abertura que regula la luz y la profundidad de campo."], ["Velocidad de obturación", "Tiempo que entra la luz; rápida congela, lenta da estela."], ["ISO", "Sensibilidad del sensor; alta da ruido."], ["Regla de los tercios", "Colocar lo importante en las líneas o cruces de una cuadrícula 3 × 3."], ["Contrapicado", "Ángulo desde abajo; engrandece al sujeto."]],
    familias: ["Proponed un paseo fotográfico con el móvil: 10 fotos aplicando la regla de los tercios.", "Hablad sobre qué fotos familiares se pueden publicar y cuáles no.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Imagen fija: la fotografía, funcionamiento de la cámara, exposición, composición, encuadre, usos y derechos de imagen (RD 217/2022, Expresión Artística 4º).", ideas: ["Construir una cámara oscura con una caja de zapatos.", "Concurso de fotografía en el centro con un tema y reglas de composición.", "Analizar fotos de prensa: qué plano, qué ángulo, qué intención."] },
    fuentes: [RD, { t: "Biblioteca Nacional de España, fotografía", url: "https://www.bne.es/es/colecciones/fotografias" }],
    revisado: "2026-11-12",
  },
];

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const L = require("./_lenguas");

L.amplia(module.exports[0], {
  minutos: 55,
  objetivos: ["Conocer los materiales de cada técnica y su comportamiento", "Planificar una obra eligiendo técnica, soporte y procedimiento"],
  bloques: [
    { tras: "Técnicas secas", html: `<h3>El grafito y el carboncillo a fondo</h3><p>El <b>lápiz de grafito</b> mezcla grafito y arcilla: cuanta más arcilla, más duro y claro es (serie <b>H</b>, de <i>hard</i>); cuanto más grafito, más blando y oscuro (serie <b>B</b>, de <i>black</i>). El <b>HB</b> está en el medio y sirve para escribir y encajar. Para un dibujo con muchos valores conviene usar al menos tres: un 2H para las líneas de construcción, un HB para los tonos medios y un 4B o 6B para las sombras más oscuras. El <b>carboncillo</b> es madera carbonizada: mancha mucho, se borra con facilidad con la <mark>goma moldeable</mark> y permite trabajar grandes formatos con rapidez. Como el polvo se desprende, al terminar se protege con un <b>fijador</b> en spray. El <b>pastel</b> es pigmento casi puro prensado en barras; da colores muy intensos y también necesita fijador.</p>` },
    { tras: "Técnicas húmedas", html: `<h3>Pigmento, aglutinante y disolvente</h3><p>Todas las pinturas tienen tres componentes: el <b>pigmento</b> (el polvo de color), el <b>aglutinante</b> (lo que lo une y lo pega al soporte) y el <b>disolvente</b> (lo que la hace más líquida). Lo que cambia de una pintura a otra es el aglutinante:</p>${L.tb(["Técnica", "Aglutinante", "Disolvente", "Rasgo principal"], [["Acuarela", "goma arábiga", "agua", "transparente, el blanco es el papel"], ["Témpera / gouache", "goma arábiga + carga blanca", "agua", "opaca y mate"], ["Acrílico", "resina acrílica", "agua (seco, resiste al agua)", "seca rápido, muy versátil"], ["Óleo", "aceite de linaza", "aguarrás o esencia de trementina", "seca lento, colores brillantes"]])}<p>Por eso la acuarela se puede volver a disolver cuando se seca, y el acrílico no.</p>` },
    { tras: "Técnicas húmedas", html: `<h3>Recursos de la acuarela</h3><p>La acuarela tiene sus propios procedimientos. En la técnica de <b>húmedo sobre húmedo</b> se moja primero el papel y después se aplica el color, que se expande y crea fondos suaves, cielos o efectos de niebla. En <b>húmedo sobre seco</b> se pinta sobre papel seco y se obtienen bordes nítidos y detalles. La <b>veladura</b> consiste en superponer capas transparentes, esperando a que cada una se seque, para oscurecer o mezclar colores ópticamente. Como no se usa pintura blanca, las zonas más claras se <mark>reservan</mark>: se deja el papel sin pintar o se protege con <b>líquido de enmascarar</b>. También se puede levantar color con un pincel limpio o un papel absorbente, o añadir sal sobre la pintura húmeda para conseguir texturas.</p>` },
    { tras: "Técnicas mixtas y collage", html: `<h3>Ensamblaje, fotomontaje y técnicas de reserva</h3><p>Las técnicas mixtas combinan materiales para conseguir efectos que ninguno logra solo. La <b>reserva con cera</b> es un ejemplo sencillo: se dibuja con cera blanca o de colores y después se pinta encima con acuarela; la cera repele el agua y el dibujo aparece. El <b>esgrafiado</b> consiste en cubrir un fondo de colores con una capa oscura y rascarla con un punzón. El <b>fotomontaje</b>, usado por los dadaístas como Hannah Höch y por los carteles políticos de John Heartfield, combina fragmentos de fotografías para crear imágenes nuevas, a menudo críticas. El <b>ensamblaje</b> lleva el collage a las tres dimensiones con objetos reales pegados o unidos. Hoy muchos artistas usan <mark>materiales reciclados</mark> para hablar del consumo y del medio ambiente.</p>` },
    { tras: "Estampación y grabado", html: `<h3>Tipos de grabado</h3><p>El grabado permite obtener muchas copias iguales de una imagen a partir de una <b>matriz</b>. Según cómo se trabaja la matriz, hay varios tipos:</p>${L.tb(["Tipo", "Matriz", "Cómo se entinta", "Ejemplo"], [["En relieve", "madera (xilografía) o linóleo", "se tinta lo que sobresale", "estampas japonesas de Hokusai"], ["En hueco", "plancha de metal (aguafuerte, punta seca)", "la tinta queda en los surcos", "Los Caprichos de Goya"], ["Plano", "piedra o plancha (litografía)", "la tinta se adhiere por la grasa", "carteles de Toulouse-Lautrec"], ["Permeográfico", "tela con plantilla (serigrafía)", "la tinta pasa por la malla", "Marilyn de Andy Warhol"]])}<p>Cada copia se numera a lápiz (por ejemplo, 3/20) y la firma el artista.</p>` },
  ],
  videos: [
    ["Técnicas húmedas", L.vid("lIGwYBOyLgQ", "Acuarela para principiantes: básico", "Catalina Novelli Ilustración", 2353672)],
    ["Estampación y grabado", L.vid("ryRNyMZlRak", "Técnicas de grabado", "Biblioteca Nacional de España", 558835)],
  ],
  ejemplos: [
    ["Quieres pintar un cielo de atardecer suave, con colores que se funden. ¿Qué técnica y procedimiento eliges?", ["Necesitas transiciones suaves y transparencia.", "La acuarela es transparente y se funde bien.", "El procedimiento húmedo sobre húmedo hace que los colores se expandan."], "Acuarela, húmedo sobre húmedo, sobre papel de acuarela grueso."],
    ["Debes hacer 30 felicitaciones iguales para el centro. ¿Qué técnica usarías?", ["Necesitas copias idénticas.", "El grabado permite repetir la imagen desde una matriz.", "El linóleo es blando y fácil de tallar con gubias en el aula."], "Linograbado (grabado en relieve) estampado con tinta y rodillo."],
    ["Un alumno pinta con témpera sobre folio fino y el papel se arruga y se rompe. ¿Qué ha fallado?", ["La témpera lleva agua y mucha carga.", "El folio de 80 g no aguanta la humedad.", "El soporte debe adecuarse a la técnica."], "Ha elegido mal el soporte: necesita cartulina o papel de más de 200 g."],
  ],
  errores: [
    "Usar pintura blanca en la acuarela en lugar de reservar el blanco del papel.",
    "Elegir un soporte inadecuado: folio fino para técnicas húmedas.",
    "Borrar el carboncillo con una goma normal, que ensucia: se usa goma moldeable.",
    "Olvidar que en el grabado la imagen se estampa invertida, como en un espejo.",
    "Confundir opaco y transparente: la témpera tapa, la acuarela deja ver lo de debajo.",
  ],
  ejercicios: [
    ["Ordena de más claro a más oscuro: 6B, 2H, HB, 2B.", "2H, HB, 2B, 6B."],
    ["¿Cuáles son los tres componentes de una pintura?", "Pigmento, aglutinante y disolvente."],
    ["¿Qué aglutinante tiene el óleo y con qué se limpia?", "Aceite de linaza; se limpia con aguarrás o esencia de trementina."],
    ["Explica la diferencia entre húmedo sobre húmedo y húmedo sobre seco.", "En el primero el color se expande y da fondos suaves; en el segundo da bordes nítidos."],
    ["¿Qué es una veladura?", "Una capa transparente de color sobre otra ya seca."],
    ["¿Por qué la cera repele la acuarela?", "Porque la cera es grasa y el agua no se mezcla con ella."],
    ["¿Qué tipo de grabado es la xilografía?", "Grabado en relieve sobre madera."],
    ["¿Qué significa 3/20 escrito bajo una estampa?", "Que es la copia número 3 de una tirada de 20."],
    ["Nombra un artista de fotomontaje.", "Hannah Höch o John Heartfield."],
    ["Planifica un collage sobre el consumo: materiales y técnica.", "Respuesta abierta: por ejemplo, envases y revistas recortadas pegados sobre cartón con cola blanca."],
  ],
  quiz: [
    ["El lápiz más blando y oscuro es…", ["6B", "HB", "4H"], 0, "La serie B es blanda."],
    ["El aglutinante del acrílico es…", ["resina acrílica", "aceite de linaza", "cera"], 0, "Seca rápido y resiste al agua."],
    ["En acuarela, el blanco se consigue…", ["reservando el papel", "con témpera blanca", "con lejía"], 0, "Es transparente."],
    ["Los Caprichos de Goya son grabados…", ["en hueco (aguafuerte)", "en relieve", "en serigrafía"], 0, "Plancha de metal."],
    ["La serigrafía usa…", ["una malla de tela", "una piedra", "madera"], 0, "Warhol la popularizó."],
  ],
  tarjetas: [
    ["Pigmento, aglutinante y disolvente", "Color, lo que lo une y lo que lo diluye."],
    ["Veladura", "Capa transparente sobre otra seca."],
    ["Tipos de grabado", "Relieve, hueco, plano y permeográfico."],
  ],
});

L.amplia(module.exports[1], {
  minutos: 55,
  objetivos: ["Aplicar el encaje y la medición para dibujar con proporción", "Representar el volumen y la profundidad con luz, sombra y perspectiva"],
  bloques: [
    { tras: "Del apunte al dibujo final", html: `<h3>Tipos de dibujo según su finalidad</h3><p>No todos los dibujos persiguen lo mismo. El <b>apunte</b> o <i>sketch</i> es rápido y capta la idea esencial de algo que se mueve o que cambia: una persona en el autobús, un gesto, una escena de la calle. El <b>boceto</b> sirve para pensar una obra: probar composiciones, encuadres o colores antes de empezar la definitiva. El <b>estudio</b> analiza a fondo un detalle, como unas manos o unos pliegues de tela. El <b>dibujo técnico</b> usa normas precisas (escalas, acotaciones, vistas) para que otra persona pueda fabricar el objeto. Finalmente, la <b>ilustración</b> acompaña un texto, un libro o un cartel. Saber qué tipo de dibujo estás haciendo te ayuda a decidir cuánto tiempo dedicarle y qué nivel de detalle necesitas: un apunte no debe ser perfecto, sino <mark>expresivo</mark>.</p>` },
    { tras: "Encajar y medir proporciones", html: `<h3>Cómo medir con el lápiz</h3><p>El método más usado para tomar medidas del natural es el de <b>la unidad de medida</b>. Se hace así:</p><ul><li>Estira el brazo del todo y cierra un ojo. El brazo siempre debe estar igual de estirado.</li><li>Sujeta el lápiz en vertical y haz coincidir la punta con un extremo del objeto; marca con el pulgar el otro extremo. Esa es tu <b>unidad</b> (por ejemplo, la altura de la cabeza).</li><li>Compara las demás medidas con esa unidad: «el cuerpo mide siete cabezas y media», «la jarra es el doble de alta que de ancha».</li><li>Usa el lápiz también para ver las <b>inclinaciones</b>: ponlo paralelo a una línea del modelo y llévalo al papel.</li></ul><p>En la figura humana adulta se suele tomar como canon unas <mark>7,5 cabezas</mark> de altura; en los niños, menos.</p>` },
    { tras: "Luz, sombra y volumen", html: `<h3>La escala de valores</h3><p>Un <b>valor</b> es el grado de claridad u oscuridad de una zona. Para dar volumen hay que observar cinco zonas en un objeto iluminado: la <b>luz</b> (la zona más clara), el <b>brillo</b> (un punto muy blanco en superficies lisas), la <b>penumbra</b> o tono medio, la <b>sombra propia</b> (la parte del objeto que no recibe luz) y la <b>sombra proyectada</b> (la que el objeto lanza sobre otra superficie). Entre la sombra propia y el borde suele aparecer una <b>luz reflejada</b>, más clara, que rebota del suelo. Practicar una escala de valores de nueve pasos, del blanco al negro, ayuda a controlar la presión del lápiz. Un truco útil es <mark>entornar los ojos</mark>: los detalles desaparecen y se ven mejor las grandes masas de luz y sombra.</p>` },
    { tras: "La perspectiva", html: `<h3>Perspectiva cónica con uno y dos puntos de fuga</h3><p>La <b>perspectiva cónica</b> imita cómo vemos: las cosas lejanas parecen más pequeñas y las líneas paralelas se juntan en un punto. Sus elementos son la <b>línea de horizonte</b> (a la altura de nuestros ojos) y los <b>puntos de fuga</b>, situados sobre ella.</p>${L.tb(["Tipo", "Puntos de fuga", "Cuándo se usa"], [["Frontal (paralela)", "uno, en el centro", "una calle o un pasillo vistos de frente"], ["Oblicua (angular)", "dos, a los lados", "un edificio visto desde una esquina"], ["Aérea o de tres puntos", "tres", "rascacielos vistos desde abajo o desde arriba"]])}<p>Las líneas verticales siguen siendo verticales en las dos primeras. Brunelleschi y los pintores del Renacimiento, como Piero della Francesca, la sistematizaron en el siglo XV.</p>` },
    { tras: "El cuaderno de bocetos", html: `<h3>Hábitos para dibujar mejor</h3><p>Dibujar es una habilidad que mejora con la práctica constante, igual que tocar un instrumento. Algunos hábitos que usan los ilustradores profesionales:</p><ul><li><b>Dibujar un poco cada día</b>: diez minutos diarios valen más que dos horas un domingo.</li><li><b>Dibujar del natural</b>: la observación directa entrena más que copiar fotografías.</li><li><b>Hacer dibujos rápidos</b> de uno o dos minutos para soltar la mano y captar el gesto.</li><li><b>Mirar más que dibujar</b>: el ojo debe estar más tiempo en el modelo que en el papel.</li><li><b>No borrar demasiado</b>: las líneas de construcción forman parte del dibujo y enseñan el proceso.</li></ul><p>Revisar los cuadernos antiguos permite ver cuánto has avanzado y recuperar ideas olvidadas.</p>` },
  ],
  videos: [
    ["Encajar y medir proporciones", L.vid("8wm4YXIvGO0", "Cómo dibujar bien: secretos de las proporciones y medidas", "Dibujar Bien", 290796)],
    ["La perspectiva", L.vid("nxc-Dz8tzt4", "Tutorial de perspectiva con un punto de fuga", "Leomeza", 1038171)],
  ],
  ejemplos: [
    ["Vas a dibujar una botella. ¿Cómo empiezas el encaje?", ["Traza un eje vertical de simetría.", "Mide la altura total y la anchura con el lápiz y compáralas.", "Encaja la forma con figuras simples: un rectángulo para el cuerpo y otro estrecho para el cuello."], "Eje, medidas relativas y formas geométricas simples antes de cualquier detalle."],
    ["Una esfera está iluminada desde la izquierda. ¿Dónde van las sombras?", ["La luz y el brillo, en la parte superior izquierda.", "La sombra propia, en la parte derecha de la esfera.", "La sombra proyectada, en el suelo, hacia la derecha."], "Sombra propia a la derecha y sombra proyectada en el suelo hacia la derecha."],
    ["Quieres dibujar la esquina de un edificio. ¿Qué perspectiva usas?", ["Ves dos fachadas que se alejan hacia los lados.", "Cada fachada tiene su propio punto de fuga.", "Los dos puntos van sobre la línea de horizonte."], "Perspectiva cónica oblicua, con dos puntos de fuga."],
  ],
  errores: [
    "Empezar por los detalles (ojos, botones) antes de encajar la forma general.",
    "Medir con el brazo doblado: las medidas cambian cada vez.",
    "Confundir sombra propia y sombra proyectada.",
    "Situar los puntos de fuga fuera de la línea de horizonte.",
    "Apretar mucho el lápiz desde el principio, lo que impide corregir.",
  ],
  ejercicios: [
    ["¿Qué diferencia hay entre un apunte y un boceto?", "El apunte capta algo rápido del natural; el boceto prepara una obra."],
    ["¿Cuántas cabezas mide aproximadamente una persona adulta?", "Unas 7,5 cabezas."],
    ["Nombra las cinco zonas de luz de un objeto.", "Luz, brillo, penumbra, sombra propia y sombra proyectada (más la luz reflejada)."],
    ["¿Qué es la luz reflejada?", "Una zona algo más clara dentro de la sombra propia, por la luz que rebota del suelo."],
    ["¿Dónde se sitúa la línea de horizonte?", "A la altura de los ojos del observador."],
    ["¿Cuántos puntos de fuga tiene la perspectiva frontal?", "Uno."],
    ["¿Para qué sirve entornar los ojos al sombrear?", "Para ver las grandes masas de luz y sombra sin detalles."],
    ["¿Quién sistematizó la perspectiva en el Renacimiento?", "Brunelleschi (y pintores como Piero della Francesca)."],
    ["Haz una escala de valores de cinco pasos y describe cómo cambias la presión.", "Respuesta abierta: de blanco (sin presión) a negro (máxima presión con lápiz blando)."],
    ["Propón un ejercicio de apunte de dos minutos.", "Respuesta abierta: dibujar a un compañero en distintas posturas, un minuto cada una."],
  ],
  quiz: [
    ["El boceto sirve para…", ["preparar una obra", "terminar una obra", "copiar una foto"], 0, "Probar ideas."],
    ["La sombra que un objeto lanza sobre el suelo es…", ["proyectada", "propia", "reflejada"], 0, "Sale del objeto."],
    ["La perspectiva oblicua tiene…", ["dos puntos de fuga", "uno", "ninguno"], 0, "Esquina de un edificio."],
    ["Para medir del natural, el brazo debe estar…", ["estirado siempre igual", "doblado", "apoyado"], 0, "Así las medidas son constantes."],
    ["El canon adulto es de unas…", ["7,5 cabezas", "4 cabezas", "12 cabezas"], 0, "Proporción humana."],
  ],
  tarjetas: [
    ["Unidad de medida", "Una parte del modelo con la que se comparan las demás."],
    ["Escala de valores", "Gradación de tonos del blanco al negro."],
    ["Perspectiva cónica", "Horizonte y puntos de fuga: frontal (1), oblicua (2), aérea (3)."],
  ],
});

L.amplia(module.exports[2], {
  minutos: 55,
  objetivos: ["Mezclar colores pigmento de forma intencionada", "Usar armonías, contrastes y simbolismo del color en una obra propia"],
  bloques: [
    { tras: "Color luz y color pigmento", html: `<h3>Síntesis aditiva y sustractiva</h3><p>El color luz y el color pigmento se mezclan de manera opuesta. En la <b>síntesis aditiva</b> (pantallas, focos de teatro) se suman luces: rojo + verde = amarillo; verde + azul = cian; azul + rojo = magenta; y las tres juntas dan <mark>blanco</mark>. Cada píxel de un móvil tiene tres pequeñas luces RGB que, combinadas, crean millones de colores. En la <b>síntesis sustractiva</b> (pinturas, tintas, impresoras) cada pigmento absorbe parte de la luz y refleja el resto: cian + magenta = azul; magenta + amarillo = rojo; amarillo + cian = verde; y los tres juntos dan un color muy oscuro, casi negro. Por eso las impresoras usan el sistema <b>CMYK</b>: añaden un cartucho de negro (K, de <i>key</i>) para que el negro sea intenso y se ahorre tinta de color. Si diseñas algo en pantalla para imprimirlo, conviene revisar los colores en CMYK, porque algunos tonos muy luminosos de la pantalla no se pueden reproducir con tinta.</p>` },
    { tras: "El círculo cromático", html: `<h3>Primarios, secundarios y terciarios</h3>${L.tb(["Tipo", "Cómo se obtienen", "Ejemplos (pigmento)"], [["Primarios", "no se obtienen mezclando", "cian, magenta, amarillo"], ["Secundarios", "mezclando dos primarios a partes iguales", "rojo, verde, azul violáceo"], ["Terciarios", "mezclando un primario y un secundario vecino", "amarillo verdoso, rojo anaranjado…"], ["Complementarios", "opuestos en el círculo", "amarillo y azul violáceo, cian y rojo, magenta y verde"]])}<p>En la escuela tradicional se enseñaban como primarios el <b>rojo, amarillo y azul</b>; hoy se prefieren cian, magenta y amarillo porque con ellos se consigue una gama de mezclas mucho más amplia y limpia. Al mezclar dos complementarios se obtiene un gris o marrón neutro, útil para <mark>apagar</mark> un color sin usar negro.</p>` },
    { tras: "Las cualidades del color", html: `<h3>Cómo modificar un color</h3><p>Cada cualidad del color se puede cambiar con una mezcla concreta. Para variar la <b>luminosidad</b>, se añade blanco (se obtiene un <i>tinte</i> o color más claro) o negro (una <i>sombra</i>, más oscura). Para bajar la <b>saturación</b> sin cambiar el tono, se añade gris o una pequeña cantidad del complementario; el color queda más apagado, «sucio» o elegante, según cómo se use. Para cambiar el <b>tono</b> se mezcla con un color vecino del círculo: un poco de amarillo hace el rojo más anaranjado. Ten en cuenta que el negro tiende a ensuciar mucho los amarillos, que se vuelven verdosos: para oscurecer un amarillo es mejor añadir un ocre o un poco de su complementario. Una buena práctica es hacer <mark>cartas de color</mark>: tablas con todas las mezclas probadas, para tenerlas siempre a mano.</p>` },
    { tras: "Armonías y contrastes", html: `<h3>Gamas cálidas y frías</h3><p>Los colores se dividen en <b>cálidos</b> (rojos, naranjas, amarillos) y <b>fríos</b> (azules, verdes azulados, violetas). Los cálidos parecen <mark>acercarse</mark> al espectador y transmiten energía, calor o pasión; los fríos parecen alejarse y transmiten calma, distancia o tristeza. Por eso en los paisajes las montañas lejanas se ven azuladas: es la <b>perspectiva atmosférica</b>, que Leonardo da Vinci ya estudió. Una obra puede usar una <b>gama cálida</b>, una <b>gama fría</b> o combinarlas para crear contraste. Además del contraste de complementarios, existen el contraste de <b>luminosidad</b> (claro-oscuro), el de <b>saturación</b> (vivo-apagado) y el de <b>cantidad</b>: una pequeña mancha de rojo en un cuadro casi todo verde llama muchísimo la atención.</p>` },
    { tras: "El color expresa", html: `<h3>El color en la historia del arte</h3><p>Muchos artistas han hecho del color el protagonista de su obra. Los <b>impresionistas</b>, como Monet, pintaban al aire libre para captar cómo la luz cambia los colores a cada hora, y ponían colores puros uno al lado del otro para que se mezclaran en el ojo. <b>Van Gogh</b> usaba complementarios intensos para expresar emociones, como los amarillos y azules de <i>La noche estrellada</i>. Los <b>fauvistas</b>, con Matisse, pintaban caras verdes o árboles rojos: el color ya no tenía que ser real. <b>Picasso</b> tuvo una <i>época azul</i>, triste y fría, y una <i>época rosa</i>, más alegre. Más tarde, <b>Mark Rothko</b> pintó grandes rectángulos de color para provocar emociones intensas en quien los mira. En España, <b>Sorolla</b> fue un maestro de la luz mediterránea.</p>` },
  ],
  videos: [
    ["Las cualidades del color", L.vid("MNKRUoKcWb0", "Teoría del color: todo lo que necesitas saber", "Agata del Barco", 589526)],
    ["El color expresa", L.vid("3RRuIxZX8ZU", "¿Psicología del color? Aprende el significado de los colores", "Mr. Rayden", 736163)],
  ],
  ejemplos: [
    ["Necesitas un verde apagado para un bosque en sombra. ¿Cómo lo consigues?", ["Mezcla amarillo y cian para obtener verde.", "Añade una pequeña cantidad de su complementario, el magenta.", "El verde pierde saturación sin volverse negro."], "Verde (amarillo + cian) con un toque de magenta."],
    ["Diseñas un cartel para un festival de verano. ¿Qué gama usas?", ["El verano se asocia al calor y la energía.", "La gama cálida transmite esas sensaciones.", "Un toque frío (azul) puede servir de contraste para el texto."], "Gama cálida (naranjas, amarillos, rojos) con un acento frío."],
    ["¿Por qué en una pantalla rojo + verde da amarillo, y en pintura da marrón?", ["La pantalla suma luces: síntesis aditiva.", "La pintura resta luz: cada pigmento absorbe parte.", "Rojo y verde pigmento son casi complementarios y se neutralizan."], "Porque la luz se suma y el pigmento resta."],
  ],
  errores: [
    "Confundir los primarios luz (RGB) con los primarios pigmento (CMY).",
    "Oscurecer siempre con negro: ensucia los colores, sobre todo el amarillo.",
    "Pensar que saturación y luminosidad son lo mismo.",
    "Creer que el significado del color es universal: cambia según la cultura (el blanco es luto en partes de Asia).",
    "Usar demasiados colores saturados a la vez, sin una armonía clara.",
    "Pintar las sombras siempre con gris o negro: en la naturaleza las sombras tienen color, a menudo azulado o del complementario de la luz.",
  ],
  ejercicios: [
    ["¿Qué da la suma de las tres luces primarias?", "Blanco."],
    ["¿Qué significa CMYK?", "Cian, magenta, amarillo y negro (key): las tintas de impresión."],
    ["¿Cuál es el complementario del amarillo en pigmento?", "El azul violáceo."],
    ["¿Cómo se obtiene un color terciario?", "Mezclando un primario y un secundario vecino."],
    ["¿Qué se obtiene al mezclar dos complementarios?", "Un gris o marrón neutro."],
    ["Explica la perspectiva atmosférica.", "Lo lejano se ve más azulado, claro y desaturado por el aire que hay entre medias."],
    ["Clasifica: naranja, azul, violeta, amarillo.", "Cálidos: naranja, amarillo. Fríos: azul, violeta."],
    ["¿Qué hacían los fauvistas con el color?", "Lo usaban de forma expresiva y no realista."],
    ["Nombra las dos épocas de Picasso relacionadas con el color.", "La época azul y la época rosa."],
    ["Diseña una paleta de tres colores para expresar calma.", "Respuesta abierta: por ejemplo, azul claro, verde agua y blanco."],
  ],
  quiz: [
    ["Las pantallas usan síntesis…", ["aditiva", "sustractiva", "mixta"], 0, "Suman luces RGB."],
    ["Para bajar la saturación se añade…", ["gris o el complementario", "más pigmento puro", "agua"], 0, "Se apaga el color."],
    ["Los colores fríos parecen…", ["alejarse", "acercarse", "brillar más"], 0, "Perspectiva atmosférica."],
    ["Los fauvistas pintaban…", ["con colores no realistas", "en blanco y negro", "solo paisajes"], 0, "Matisse."],
    ["Los primarios pigmento actuales son…", ["cian, magenta y amarillo", "rojo, verde y azul", "blanco y negro"], 0, "CMY."],
  ],
  tarjetas: [
    ["Síntesis aditiva / sustractiva", "Luz que se suma (blanco) / pigmento que resta (negro)."],
    ["Cálidos y fríos", "Cálidos se acercan y dan energía; fríos se alejan y dan calma."],
    ["Mezclar complementarios", "Da un neutro: sirve para apagar un color."],
  ],
});

L.amplia(module.exports[3], {
  minutos: 55,
  objetivos: ["Controlar la exposición en modo manual o semiautomático", "Componer y editar fotografías con intención expresiva y respetando derechos"],
  bloques: [
    { tras: "Cómo funciona una cámara", html: `<h3>Una breve historia de la fotografía</h3><p>La <b>cámara oscura</b>, una caja con un agujero que proyecta la imagen del exterior, ya se conocía desde la Antigüedad y la usaban los pintores como ayuda. La primera fotografía conservada es de <b>Nicéphore Niépce</b> (hacia 1826) y necesitó horas de exposición. En 1839 se presentó el <b>daguerrotipo</b>, de Daguerre, que daba una imagen única muy nítida. Poco después llegó el negativo de papel, que permitía hacer copias. En 1888, Kodak lanzó una cámara sencilla con el lema «Usted apriete el botón, nosotros hacemos el resto», y la fotografía se hizo popular. La película en color se extendió en el siglo XX, y desde los años 2000 la <mark>fotografía digital</mark> y los móviles han convertido a casi todo el mundo en fotógrafo.</p>` },
    { tras: "El triángulo de la exposición", html: `<h3>Los modos de la cámara</h3><p>Las cámaras y muchos móviles permiten elegir cuánto control quieres tener:</p>${L.tb(["Modo", "Qué eliges tú", "Qué decide la cámara", "Cuándo usarlo"], [["Automático", "nada", "todo", "fotos rápidas"], ["Prioridad a la apertura (A o Av)", "diafragma", "velocidad", "retratos con fondo desenfocado o paisajes nítidos"], ["Prioridad a la velocidad (S o Tv)", "velocidad", "diafragma", "deportes o agua en movimiento"], ["Manual (M)", "diafragma, velocidad e ISO", "nada", "control total, noche, estudio"]])}<p>Recuerda que un número f pequeño (f/1,8) significa un diafragma <b>muy abierto</b>, y uno grande (f/16), muy cerrado: es una de las confusiones más frecuentes al empezar.</p>` },
    { tras: "Composición: la regla de los tercios", html: `<h3>Más recursos de composición</h3><p>La regla de los tercios es solo una de muchas herramientas. Las <b>líneas guía</b> (un camino, una barandilla, un río) conducen la mirada hacia el motivo principal. El <b>encuadre natural</b> usa una ventana, un arco o unas ramas para «enmarcar» lo importante. La <b>simetría</b> transmite orden y calma, y es muy eficaz con reflejos en el agua. El <b>espacio negativo</b>, una gran zona vacía alrededor del motivo, da sensación de soledad o de calma. Los <b>patrones</b> repetidos llaman la atención, sobre todo si algo los rompe. Por último, la <b>luz</b> lo cambia todo: la <mark>hora dorada</mark>, justo después del amanecer y antes del atardecer, da una luz cálida y suave, mientras que el mediodía produce sombras duras. Conocer las reglas permite también romperlas con intención.</p>` },
    { tras: "Tipos de plano y ángulo", html: `<h3>Géneros fotográficos</h3><p>La fotografía tiene muchos <b>géneros</b>, cada uno con sus recursos. El <b>retrato</b> busca mostrar la personalidad: se suele enfocar a los ojos y desenfocar el fondo. El <b>paisaje</b> usa diafragmas cerrados para que todo esté nítido y a menudo un trípode. La <b>fotografía documental y el fotoperiodismo</b> cuentan hechos reales: <b>Robert Capa</b> fotografió la Guerra Civil española y <b>Gerda Taro</b>, su compañera, fue una de las primeras fotoperiodistas de guerra. La <b>fotografía de calle</b> capta momentos espontáneos; <b>Henri Cartier-Bresson</b> hablaba del «instante decisivo». En España destacan <b>Cristina García Rodero</b>, que retrató fiestas y ritos tradicionales, y <b>Chema Madoz</b>, con fotografías poéticas de objetos. La <b>fotografía artística</b> usa la imagen para expresar ideas, sin necesidad de documentar.</p>` },
    { tras: "Fotografía, ética y derechos", html: `<h3>Editar la fotografía</h3><p>Hoy casi todas las fotos se <b>editan</b>. Los ajustes básicos son la exposición (más clara o más oscura), el <b>contraste</b>, el <b>balance de blancos</b> (que corrige si la foto sale demasiado azul o anaranjada), la saturación y el <b>recorte</b>, que permite mejorar la composición o enderezar el horizonte. Programas gratuitos como GIMP o Darktable, y las propias aplicaciones del móvil, lo permiten. Si la cámara lo permite, disparar en <b>RAW</b> guarda toda la información del sensor y da más margen para editar que el JPG. Ahora bien, editar no es lo mismo que <mark>manipular</mark>: en el periodismo está prohibido añadir o quitar elementos de una foto, y en publicidad muchos países obligan a avisar cuando un cuerpo ha sido retocado. Las imágenes generadas por inteligencia artificial también deben indicarse como tales.</p>` },
  ],
  videos: [
    ["El triángulo de la exposición", L.vid("o-dj6qprNoM", "El triángulo de exposición", "Joan Vendrell", 1785885)],
    ["Tipos de plano y ángulo", L.vid("vqxgn8IbNa4", "13 planos de la fotografía que debes conocer", "Hanns", 396342)],
  ],
  ejemplos: [
    ["Quieres un retrato con el fondo muy desenfocado. ¿Qué ajustes usas?", ["El desenfoque depende de la profundidad de campo.", "Un diafragma muy abierto (f/1,8 o f/2,8) la reduce.", "Usa prioridad a la apertura y aléjate del fondo."], "Diafragma muy abierto (número f pequeño), modo A/Av."],
    ["Fotografías una carrera y las fotos salen movidas. ¿Qué cambias?", ["El movimiento se congela con una velocidad rápida.", "Sube a 1/1000 s o más en modo S/Tv.", "Si falta luz, sube el ISO o abre el diafragma."], "Velocidad de obturación más rápida (y más ISO si hace falta)."],
    ["Una foto de interior sale demasiado anaranjada. ¿Cómo se corrige?", ["La luz de las bombillas es cálida.", "El balance de blancos compensa el color de la luz.", "Se ajusta hacia el azul hasta que el blanco parezca blanco."], "Corrigiendo el balance de blancos, en la cámara o al editar."],
  ],
  errores: [
    "Pensar que f/16 es un diafragma más abierto que f/2: es al revés.",
    "Subir mucho el ISO sin necesidad: aparece ruido.",
    "Colocar siempre el motivo en el centro, sin pensar en la composición.",
    "Publicar fotos de otras personas sin su permiso.",
    "Confundir editar (ajustar luz y color) con manipular (cambiar lo que ocurrió).",
  ],
  ejercicios: [
    ["¿Quién hizo la primera fotografía conservada y cuándo?", "Nicéphore Niépce, hacia 1826."],
    ["¿Qué ventaja tenía el negativo frente al daguerrotipo?", "Permitía hacer muchas copias."],
    ["En modo A/Av, ¿qué decides tú y qué decide la cámara?", "Tú el diafragma; la cámara, la velocidad."],
    ["¿Qué es la hora dorada?", "El rato tras el amanecer y antes del atardecer, con luz cálida y suave."],
    ["Nombra tres recursos de composición además de la regla de los tercios.", "Líneas guía, encuadre natural, simetría (o espacio negativo, patrones)."],
    ["¿Qué es el «instante decisivo»?", "La idea de Cartier-Bresson de captar el momento exacto que resume una escena."],
    ["¿Qué fotografió Robert Capa en España?", "La Guerra Civil."],
    ["¿Para qué sirve el balance de blancos?", "Para corregir el color de la luz y que los blancos salgan blancos."],
    ["¿Qué ventaja tiene disparar en RAW?", "Guarda toda la información y da más margen al editar."],
    ["Propón una serie de tres fotos sobre tu barrio usando tres recursos distintos.", "Respuesta abierta: por ejemplo, líneas guía en una calle, encuadre natural en una ventana y simetría en un reflejo."],
  ],
  quiz: [
    ["El modo S o Tv da prioridad a…", ["la velocidad", "el diafragma", "el ISO"], 0, "Útil en deportes."],
    ["El daguerrotipo se presentó en…", ["1839", "1888", "1950"], 0, "Daguerre."],
    ["Las líneas guía sirven para…", ["llevar la mirada al motivo", "aumentar el ISO", "corregir el color"], 0, "Composición."],
    ["Chema Madoz es conocido por…", ["fotografías poéticas de objetos", "fotoperiodismo de guerra", "retratos de famosos"], 0, "Fotografía artística."],
    ["En fotoperiodismo, quitar un elemento de la foto es…", ["manipular y no está permitido", "un ajuste normal", "obligatorio"], 0, "Ética."],
  ],
  tarjetas: [
    ["Modos A/Av, S/Tv y M", "Prioridad a la apertura, a la velocidad o control manual."],
    ["Hora dorada", "Luz cálida y suave al amanecer y al atardecer."],
    ["Editar o manipular", "Ajustar luz y color frente a cambiar lo que ocurrió."],
  ],
});

// Nivel libro 4º ESO (lote 12): ver _eso4L12.js y _eso4L12-<clave>.js.
require("./_eso4L12").aplica(module.exports, ["tecnicas", "dibujo", "color", "fotografia"]);
