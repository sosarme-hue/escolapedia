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
