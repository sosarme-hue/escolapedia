// Expresión Artística 4º ESO (2 de 2). Dibujos propios en SVG.
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

module.exports = [
  {
    materia: M, curso: C, titulo: "Imagen digital", minutos: 35,
    objetivos: ["Distinguir imagen de mapa de bits e imagen vectorial", "Entender la resolución, el tamaño y los formatos de archivo", "Editar imágenes con capas y usar licencias libres de forma responsable"],
    claves: ["píxel", "resolución", "vectorial", "capas", "formatos", "Creative Commons"],
    pregunta: {
      texto: "Si amplías mucho una foto del móvil se ve «a cuadritos», pero un logotipo en SVG se ve perfecto a cualquier tamaño. ¿Por qué?",
      respuesta: "Porque la foto es un <mark>mapa de bits</mark>: una cuadrícula de píxeles que al ampliar se ven. El SVG es una <mark>imagen vectorial</mark>: guarda fórmulas de líneas y curvas y el ordenador las vuelve a dibujar a cualquier tamaño. Los dibujos de esta web son vectoriales.",
    },
    bloques: [
      {
        html: `<h3>Mapa de bits y vectorial</h3><p>Un <b>mapa de bits</b> (o ráster) es una cuadrícula de <b>píxeles</b>, cada uno de un color: ideal para fotografías, pero <mark>pierde calidad al ampliar</mark>. Una imagen <b>vectorial</b> se forma con puntos, líneas y curvas definidos matemáticamente: ideal para logotipos, iconos y tipografías, porque escala sin perder nitidez.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un círculo ampliado: en mapa de bits se ven los cuadrados de los píxeles; en vectorial el borde sigue siendo liso">${BG}
          ${[...Array(10)].flatMap((_, y) => [...Array(10)].map((_, x) => { const d = Math.hypot(x - 4.5, y - 4.5); return d < 4.6 ? `<rect x="${20 + x * 10}" y="${30 + y * 10}" width="10" height="10" fill="var(--pen)" fill-opacity="${d > 3.8 ? 0.45 : 1}"/>` : ""; })).join("")}
          <circle cx="195" cy="80" r="48" fill="var(--pen)"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="70" y="156" fill="var(--ink)">mapa de bits</text><text x="195" y="156" fill="var(--ink)">vectorial</text></g></svg>`,
      },
      {
        html: `<h3>Resolución y tamaño</h3><p>La <b>resolución</b> es cuántos píxeles hay por pulgada (ppp o ppi). Para <b>pantalla</b> basta con 72–150 ppp; para <b>imprimir</b> con calidad se necesitan unos <mark>300 ppp</mark>. Una foto de 3.000 × 2.000 píxeles tiene 6 megapíxeles. Más píxeles = más detalle, pero también archivo más pesado.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La misma pulgada con pocos píxeles se ve tosca y con muchos píxeles se ve detallada">${BG}
          <rect x="24" y="30" width="90" height="90" fill="none" stroke="var(--ink)" stroke-width="2"/>${[...Array(4)].flatMap((_, y) => [...Array(4)].map((_, x) => `<rect x="${24 + x * 22.5}" y="${30 + y * 22.5}" width="22.5" height="22.5" fill="var(--leaf)" fill-opacity="${((x + y) % 3) * 0.3 + 0.2}"/>`)).join("")}
          <rect x="146" y="30" width="90" height="90" fill="none" stroke="var(--ink)" stroke-width="2"/>${[...Array(15)].flatMap((_, y) => [...Array(15)].map((_, x) => `<rect x="${146 + x * 6}" y="${30 + y * 6}" width="6" height="6" fill="var(--leaf)" fill-opacity="${(Math.sin(x / 2) + Math.cos(y / 3) + 2) / 4.5 + 0.1}"/>`)).join("")}
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="69" y="142" fill="var(--ink)">72 ppp</text><text x="191" y="142" fill="var(--ink)">300 ppp</text><text x="130" y="166" fill="var(--muted)">la misma pulgada</text></g></svg>`,
      },
      {
        html: `<h3>Formatos de archivo</h3><ul><li><b>JPG</b>: fotos; comprime mucho pero <mark>pierde calidad</mark> cada vez que se guarda.</li><li><b>PNG</b>: sin pérdida y con <b>transparencia</b>; para gráficos y capturas.</li><li><b>GIF</b>: pocas colores y animación.</li><li><b>SVG</b>: vectorial, para la web.</li><li><b>WebP</b>: moderno, ligero, para webs.</li></ul>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Formatos: JPG para fotos, PNG con transparencia, GIF animado y SVG vectorial">${BG}
          ${[["JPG", "fotos", "var(--red)"], ["PNG", "sin pérdida", "var(--pen)"], ["GIF", "animado", "var(--leaf)"], ["SVG", "vectorial", "var(--inf)"]].map(([n, d, c], i) => `<path d="M${22 + i * 58} 28 H ${60 + i * 58} L ${72 + i * 58} 40 V 120 H ${22 + i * 58} Z" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><rect x="${22 + i * 58}" y="70" width="50" height="22" fill="${c}"/><text x="${47 + i * 58}" y="86" text-anchor="middle" font-size="13" font-weight="700" fill="var(--card)" ${F}>${n}</text><text x="${47 + i * 58}" y="140" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${d}</text>`).join("")}
        </svg>`,
      },
      {
        html: `<h3>Editar con capas</h3><p>Los programas de edición (GIMP, Krita, Photopea, Inkscape…) trabajan con <b>capas</b>: hojas transparentes apiladas. Puedes cambiar una sin tocar las demás, ajustar su <b>opacidad</b> o usar <b>máscaras</b>. Herramientas básicas: recortar, ajustar <mark>brillo y contraste</mark>, niveles, tono y saturación, y el tampón de clonar.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres capas transparentes apiladas: fondo, figura y texto, que juntas forman la imagen final">${BG}
          ${[["texto", "var(--red)"], ["figura", "var(--leaf)"], ["fondo", "var(--pen)"]].map(([n, c], i) => `<path d="M${60 + i * 0} ${30 + i * 40} L 170 ${30 + i * 40} L 210 ${60 + i * 40} L 100 ${60 + i * 40} Z" fill="${c}" fill-opacity="${i === 2 ? 0.5 : 0.25}" stroke="${c}" stroke-width="2"/><text x="222" y="${52 + i * 40}" font-size="12" font-weight="700" fill="${c}" ${F}>${n}</text>`).join("")}
          <circle cx="135" cy="85" r="10" fill="var(--leaf)"/><text x="135" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)" ${F}>Hola</text></svg>`,
      },
      {
        html: `<h3>Derechos y licencias</h3><p>Que una imagen esté en internet <mark>no significa que sea libre</mark>. Busca imágenes con licencias <b>Creative Commons</b> (CC BY: puedes usarla citando al autor; CC BY-NC: sin fines comerciales; CC0: dominio público) en bancos como Wikimedia Commons, y cita siempre la fuente. Con la IA generativa, indica cuándo una imagen la ha creado una máquina.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Licencias Creative Commons: BY, citar al autor; NC, no comercial; CC0, dominio público">${BG}${chips([["CC BY", "úsala citando al autor", "var(--leaf)"], ["CC BY-NC", "citando y sin fines comerciales", "var(--hl-ink)"], ["CC0", "dominio público: libre del todo", "var(--pen)"]])}</svg>`,
      },
    ],
    figura: { titulo: "Mapa de bits o vectorial", svg: filas("Comparación entre mapa de bits y vectorial", [["Unidad", "píxel ↔ líneas y curvas", "var(--ink)"], ["Al ampliar", "se pixela ↔ siempre nítida", "var(--pen)"], ["Para qué", "fotografías ↔ logotipos, iconos, letras", "var(--leaf)"], ["Formatos", "JPG, PNG, WebP ↔ SVG, PDF, AI", "var(--red)"]]) },
    video: { id: "wvb5oNuvBLU", titulo: "Explicación del tamaño y la resolución de la imagen", canal: "2-Minute Design", vistas: 141829, megusta: 0, busqueda: "resolución imagen digital píxeles" },
    quiz: [
      { q: "Un logotipo que debe verse bien en una taza y en una valla publicitaria conviene hacerlo en…", o: ["mapa de bits", "vectorial", "GIF"], a: 1, e: "Escala sin perder calidad." },
      { q: "¿Qué resolución se recomienda para imprimir con calidad?", o: ["72 ppp", "300 ppp", "10 ppp"], a: 1, e: "Para que no se noten los píxeles." },
      { q: "¿Qué formato admite transparencia y no pierde calidad?", o: ["JPG", "PNG", "BMP"], a: 1, e: "Ideal para gráficos." },
      { q: "En un editor, las hojas transparentes apiladas se llaman…", o: ["capas", "filtros", "píxeles"], a: 0, e: "Permiten editar por partes." },
      { q: "Una imagen CC BY se puede usar…", o: ["sin decir nada", "citando al autor", "nunca"], a: 1, e: "BY = reconocimiento." },
    ],
    examen: [
      { q: "Una foto de 4.000 × 3.000 píxeles tiene…", o: ["7 megapíxeles", "12 megapíxeles", "1,2 megapíxeles"], a: 1, e: "12.000.000 de píxeles." },
      { q: "Cada vez que guardas un JPG…", o: ["gana calidad", "puede perder calidad", "se convierte en vectorial"], a: 1, e: "Compresión con pérdida." },
      { q: "¿Qué programa libre sirve para dibujo vectorial?", o: ["Inkscape", "GIMP", "Audacity"], a: 0, e: "GIMP es de mapa de bits." },
    ],
    feynman: ["Qué diferencia hay entre mapa de bits y vectorial", "Qué es la resolución y cuánta se necesita para imprimir", "Para qué sirve cada formato de archivo", "Qué significan las licencias Creative Commons"],
    mapa: mapa("IMAGEN DIGITAL", "var(--bac)", [["Tipos", "mapa de bits · vectorial", "var(--pen)"], ["Resolución", "píxeles · ppp · megapíxeles", "var(--leaf)"], ["Formatos", "JPG · PNG · GIF · SVG", "var(--red)"], ["Uso", "capas · licencias CC", "var(--inf)"]], 250),
    tarjetas: [["Píxel", "El punto mínimo de color de una imagen digital."], ["Imagen vectorial", "Formada por líneas y curvas; escala sin perder calidad."], ["Resolución para imprimir", "Unos 300 ppp."], ["PNG", "Formato sin pérdida con transparencia."], ["CC BY", "Licencia que permite usar la obra citando al autor."]],
    familias: ["Ampliad juntos una foto del móvil hasta ver los píxeles.", "Buscad una imagen en Wikimedia Commons y mirad qué licencia tiene.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Imagen y comunicación digital: imagen de mapa de bits y vectorial, resolución, formatos, edición por capas y derechos de autor (RD 217/2022, Expresión Artística 4º).", ideas: ["Fotomontaje con capas en Photopea o GIMP.", "Rediseño vectorial de un logotipo en Inkscape.", "Pixel art en una cuadrícula para entender el píxel."] },
    fuentes: [RD, { t: "Creative Commons, sobre las licencias", url: "https://creativecommons.org/licenses/?lang=es" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "Cine y audiovisual", minutos: 35,
    objetivos: ["Conocer el lenguaje audiovisual: planos, ángulos y movimientos de cámara", "Identificar las fases de una producción audiovisual", "Crear un guion técnico o un storyboard para un vídeo breve"],
    claves: ["plano", "secuencia", "storyboard", "guion", "montaje", "fotograma"],
    pregunta: {
      texto: "Una película se ve con movimiento, pero en realidad son imágenes fijas. ¿Cuántas por segundo?",
      respuesta: "En el cine, <mark>24 fotogramas por segundo</mark>. Nuestro ojo y nuestro cerebro unen esas imágenes y percibimos movimiento continuo. Los hermanos <b>Lumière</b> proyectaron la primera sesión pública de cine en París en 1895.",
    },
    bloques: [
      {
        html: `<h3>De la imagen fija a la imagen en movimiento</h3><p>El cine es una sucesión de <b>fotogramas</b>: 24 por segundo. La unidad básica del relato es el <b>plano</b> (lo que se graba sin cortar); varios planos forman una <b>escena</b> (un mismo lugar y tiempo) y varias escenas, una <b>secuencia</b> (una unidad de la historia).</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tira de película con fotogramas de una pelota que bota: 24 fotogramas por segundo">${BG}
          <rect x="10" y="40" width="240" height="90" fill="var(--ink)"/>
          ${[...Array(12)].map((_, i) => `<rect x="${14 + i * 20}" y="44" width="12" height="8" rx="2" fill="var(--paper)"/><rect x="${14 + i * 20}" y="118" width="12" height="8" rx="2" fill="var(--paper)"/>`).join("")}
          ${[0, 1, 2, 3, 4].map((i) => `<rect x="${16 + i * 47}" y="58" width="42" height="54" fill="var(--card)"/><circle cx="${37 + i * 47}" cy="${[66, 82, 104, 82, 66][i]}" r="6" fill="var(--red)"/>`).join("")}
          <text x="130" y="156" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>24 fotogramas por segundo</text></svg>`,
      },
      {
        html: `<h3>Movimientos de cámara</h3><p>La cámara también narra: la <b>panorámica</b> gira sobre su eje para mostrar un espacio; el <b>travelling</b> se desplaza (sobre raíles, un dron o un estabilizador) para acompañar a un personaje; el <b>zoom</b> acerca o aleja la imagen sin mover la cámara. Una cámara fija transmite calma; una <mark>cámara en mano</mark>, tensión y realismo.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Panorámica: la cámara gira sobre sí misma; travelling: la cámara se desplaza en paralelo al personaje">${BG}
          <rect x="40" y="70" width="30" height="20" rx="4" fill="var(--pen)"/><path d="M70 74 L 80 70 V 90 L 70 86" fill="var(--pen)"/>
          <path d="M90 50 A 40 40 0 0 1 90 110" fill="none" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 3"/>
          <rect x="150" y="110" width="30" height="20" rx="4" fill="var(--red)"/><path d="M165 110 L 165 100" stroke="var(--red)" stroke-width="2"/>
          <path d="M140 140 H 240" stroke="var(--muted)" stroke-width="3"/><path d="M140 146 H 240" stroke="var(--muted)" stroke-width="3"/>
          <path d="M190 120 H 232" stroke="var(--red)" stroke-width="2"/><path d="M226 114 L 234 120 L 226 126" fill="none" stroke="var(--red)" stroke-width="2"/>
          <circle cx="210" cy="60" r="8" fill="var(--inf)"/><path d="M210 68 V 92" stroke="var(--inf)" stroke-width="5"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="60" y="140" fill="var(--pen)">panorámica</text><text x="190" y="168" fill="var(--red)">travelling</text></g></svg>`,
      },
      {
        html: `<h3>Las fases de una producción</h3><ul><li><b>Preproducción</b>: idea, guion, storyboard, localizaciones, reparto y plan de rodaje.</li><li><b>Producción</b>: el rodaje.</li><li><b>Postproducción</b>: <mark>montaje</mark>, sonido, música, efectos y color.</li></ul><p>Un cortometraje de 5 minutos puede necesitar semanas de preproducción.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres fases: preproducción, producción y postproducción">${BG}
          ${[["Pre", "guion · storyboard", "var(--pen)"], ["Rodaje", "producción", "var(--red)"], ["Post", "montaje · sonido", "var(--leaf)"]].map(([n, d, c], i) => `<rect x="${12 + i * 82}" y="46" width="74" height="74" rx="12" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2.5"/><text x="${49 + i * 82}" y="82" text-anchor="middle" font-size="13" font-weight="700" fill="${c}" ${F}>${n}</text><text x="${49 + i * 82}" y="144" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${d}</text>`).join("")}
        </svg>`,
      },
      {
        html: `<h3>Guion y storyboard</h3><p>El <b>guion literario</b> cuenta qué pasa y qué dicen los personajes. El <b>guion técnico</b> añade el plano, el ángulo, el movimiento y el sonido de cada toma. El <b>storyboard</b> es un <mark>cómic de la película</mark>: una viñeta por plano con anotaciones. Ahorra mucho tiempo en el rodaje.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Storyboard de tres viñetas: plano general de una casa, plano medio de una persona y primer plano de su cara sorprendida">${BG}
          ${[0, 1, 2].map((i) => `<rect x="${14 + i * 80}" y="28" width="72" height="54" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>`).join("")}
          <path d="M30 76 V 54 L 50 40 L 70 54 V 76 Z" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
          <circle cx="130" cy="46" r="8" fill="none" stroke="var(--ink)" stroke-width="1.5"/><path d="M116 82 Q 130 56 144 82" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
          <circle cx="210" cy="56" r="20" fill="none" stroke="var(--ink)" stroke-width="1.5"/><circle cx="203" cy="52" r="2.5" fill="var(--ink)"/><circle cx="217" cy="52" r="2.5" fill="var(--ink)"/><circle cx="210" cy="66" r="4" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
          <g ${F} font-size="10" font-weight="700" fill="var(--muted)"><text x="16" y="98">1. PG exterior</text><text x="96" y="98">2. PM, entra</text><text x="176" y="98">3. PP, sorpresa</text><text x="16" y="112">sonido: lluvia</text><text x="96" y="112">puerta</text><text x="176" y="112">música</text></g>
          <text x="130" y="150" text-anchor="middle" font-size="13" font-weight="700" fill="var(--pen)" ${F}>storyboard = cómic del rodaje</text></svg>`,
      },
      {
        html: `<h3>El montaje y el sonido</h3><p>El <b>montaje</b> ordena los planos y decide su duración: planos cortos dan <mark>ritmo y tensión</mark>; planos largos, calma. El <b>efecto Kuleshov</b> demostró que el significado de un plano cambia según el que va antes o después. El <b>sonido</b> (diálogos, efectos, música y silencio) es la mitad de la película.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea de tiempo de un editor de vídeo con pistas de vídeo, música y efectos">${BG}
          <rect x="14" y="30" width="232" height="120" rx="8" fill="var(--ink)"/>
          ${[[20, 40, "var(--pen)"], [62, 20, "var(--pen)"], [84, 12, "var(--pen)"], [98, 12, "var(--pen)"], [112, 60, "var(--pen)"], [174, 64, "var(--pen)"]].map(([x, w, c]) => `<rect x="${x}" y="44" width="${w}" height="28" rx="3" fill="${c}"/>`).join("")}
          <rect x="20" y="80" width="218" height="24" rx="3" fill="var(--leaf)"/><rect x="60" y="112" width="20" height="24" rx="3" fill="var(--hl)"/><rect x="150" y="112" width="30" height="24" rx="3" fill="var(--hl)"/>
          <path d="M100 36 V 144" stroke="var(--red)" stroke-width="2"/>
          <g ${F} font-size="10" font-weight="700"><text x="24" y="96" fill="var(--card)">música</text><text x="24" y="62" fill="var(--card)">vídeo</text><text x="24" y="128" fill="var(--card)">efectos</text></g>
          <text x="130" y="170" text-anchor="middle" font-size="12" font-weight="700" fill="var(--muted)" ${F}>planos cortos = ritmo</text></svg>`,
      },
    ],
    figura: { titulo: "Lenguaje audiovisual", svg: filas("Planos, ángulos, movimientos y montaje", [["Planos", "general · medio · primer plano · detalle", "var(--pen)"], ["Ángulos", "picado · contrapicado · cenital · normal", "var(--leaf)"], ["Movimientos", "panorámica · travelling · zoom · en mano", "var(--red)"], ["Montaje", "orden, duración y ritmo de los planos", "var(--inf)"]]) },
    video: { id: "CmPg9POBvV0", titulo: "Cinematografía: lenguaje audiovisual (escalas de plano, ángulos, movimientos)", canal: "Officium", vistas: 430190, megusta: 0, busqueda: "lenguaje audiovisual planos ángulos movimientos" },
    quiz: [
      { q: "¿Cuántos fotogramas por segundo tiene el cine tradicional?", o: ["12", "24", "60"], a: 1, e: "Lo justo para percibir movimiento fluido." },
      { q: "Lo que se graba sin cortar es un…", o: ["plano", "fotograma", "guion"], a: 0, e: "Unidad básica del relato." },
      { q: "Cuando la cámara se desplaza acompañando a un personaje es un…", o: ["zoom", "travelling", "picado"], a: 1, e: "La cámara se mueve físicamente." },
      { q: "El storyboard se prepara en la…", o: ["preproducción", "producción", "postproducción"], a: 0, e: "Antes de rodar." },
      { q: "¿En qué fase se hace el montaje?", o: ["Preproducción", "Rodaje", "Postproducción"], a: 2, e: "Tras grabar." },
    ],
    examen: [
      { q: "El efecto Kuleshov demuestra que…", o: ["el significado de un plano depende de los que lo rodean", "el color no importa", "los actores no son necesarios"], a: 0, e: "El montaje crea sentido." },
      { q: "Una sucesión rápida de planos cortos transmite…", o: ["calma", "tensión y ritmo", "silencio"], a: 1, e: "Típico de la acción." },
      { q: "La primera proyección pública de cine la hicieron…", o: ["los hermanos Lumière", "Charles Chaplin", "Walt Disney"], a: 0, e: "París, 1895." },
    ],
    feynman: ["Qué es un fotograma, un plano, una escena y una secuencia", "Qué diferencia hay entre panorámica, travelling y zoom", "Cuáles son las fases de una producción", "Para qué sirve el storyboard"],
    mapa: mapa("CINE Y AUDIOVISUAL", "var(--bac)", [["Unidades", "fotograma · plano · secuencia", "var(--ink)"], ["Cámara", "planos · ángulos · movimientos", "var(--pen)"], ["Fases", "pre · rodaje · post", "var(--red)"], ["Montaje", "ritmo · sonido · Kuleshov", "var(--leaf)"]], 250),
    tarjetas: [["Fotograma", "Cada imagen fija de una película; 24 por segundo."], ["Plano", "Lo que se graba sin cortar."], ["Travelling", "Movimiento de la cámara desplazándose."], ["Storyboard", "Viñetas que muestran cada plano antes de rodar."], ["Montaje", "Ordenar y unir los planos dándoles ritmo."]],
    familias: ["Ved juntos una escena de una película sin sonido y luego con sonido: ¿qué cambia?", "Contad los cortes de un anuncio de 20 segundos.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Imagen en movimiento: lenguaje audiovisual, fases de la producción, guion técnico, storyboard y montaje (RD 217/2022, Expresión Artística 4º).", ideas: ["Cortometraje de 1 minuto por grupos con el móvil y montaje en un editor gratuito.", "Recrear el efecto Kuleshov con fotos de los alumnos.", "Taller de foley: crear efectos de sonido con objetos."] },
    fuentes: [RD, { t: "Filmoteca Española", url: "https://www.cultura.gob.es/cultura/areas/cine/mc/fe/portada.html" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "Volumen y escultura", minutos: 35,
    objetivos: ["Distinguir bulto redondo, relieve y escultura contemporánea", "Conocer los procedimientos escultóricos: modelar, tallar, construir y moldear", "Crear una obra tridimensional con materiales sencillos"],
    claves: ["bulto redondo", "relieve", "modelado", "talla", "ensamblaje", "instalación"],
    pregunta: {
      texto: "Miguel Ángel decía que la escultura ya estaba dentro del bloque de mármol. ¿Qué crees que quería decir?",
      respuesta: "Que en la <mark>talla</mark> el escultor <b>quita material</b> hasta liberar la forma, a diferencia del <b>modelado</b>, en el que se añade. Su <i>David</i> salió de un bloque que otros escultores habían descartado.",
    },
    bloques: [
      {
        html: `<h3>Bulto redondo y relieve</h3><p>Una escultura de <b>bulto redondo</b> está exenta: se puede rodear y ver desde todos los puntos de vista. El <b>relieve</b> está unido a un fondo: <b>alto relieve</b> si sobresale mucho, <b>bajo relieve</b> si sobresale poco y <b>hueco relieve</b> si está rebajado. Las monedas tienen <mark>bajo relieve</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Perfiles: bulto redondo exento, alto relieve que sobresale mucho del fondo y bajo relieve que sobresale poco">${BG}
          <path d="M20 140 H 240" stroke="var(--muted)" stroke-width="2"/>
          <ellipse cx="50" cy="140" rx="24" ry="5" fill="var(--muted)" fill-opacity=".4"/><path d="M40 140 V 90 Q 50 70 60 90 V 140" fill="var(--hl-ink)" fill-opacity=".6" stroke="var(--hl-ink)" stroke-width="2"/><circle cx="50" cy="70" r="12" fill="var(--hl-ink)" fill-opacity=".6" stroke="var(--hl-ink)" stroke-width="2"/>
          <rect x="110" y="40" width="10" height="100" fill="var(--muted)"/><path d="M120 60 Q 150 70 146 100 Q 144 130 120 136 Z" fill="var(--hl-ink)" fill-opacity=".6" stroke="var(--hl-ink)" stroke-width="2"/>
          <rect x="190" y="40" width="10" height="100" fill="var(--muted)"/><path d="M200 60 Q 210 80 208 100 Q 206 130 200 136 Z" fill="var(--hl-ink)" fill-opacity=".6" stroke="var(--hl-ink)" stroke-width="2"/>
          <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="50" y="162" fill="var(--ink)">bulto redondo</text><text x="130" y="162" fill="var(--ink)">alto relieve</text><text x="205" y="162" fill="var(--ink)">bajo relieve</text></g></svg>`,
      },
      {
        html: `<h3>Procedimientos: sumar o quitar</h3><ul><li><b>Modelado</b> (aditivo): se añade y moldea material blando, como el barro, la cera o la plastilina.</li><li><b>Talla</b> (sustractivo): se quita material duro, como la piedra o la madera.</li><li><b>Construcción o ensamblaje</b>: se unen piezas.</li><li><b>Vaciado</b>: se hace un <mark>molde</mark> y se rellena (bronce, escayola, resina).</li></ul>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Modelado añadiendo bolas de barro y talla quitando trozos de un bloque">${BG}
          <circle cx="70" cy="100" r="34" fill="var(--inf)" fill-opacity=".5" stroke="var(--inf)" stroke-width="2"/><circle cx="40" cy="50" r="10" fill="var(--inf)"/><circle cx="104" cy="54" r="8" fill="var(--inf)"/><path d="M46 58 L 56 72 M98 60 L 88 72" stroke="var(--inf)" stroke-width="2"/>
          <rect x="150" y="60" width="80" height="80" fill="var(--muted)" fill-opacity=".25" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 3"/><path d="M170 140 V 100 Q 190 64 210 100 V 140 Z" fill="var(--muted)"/>
          <path d="M150 60 L 140 44 M230 60 L 242 46 M150 80 L 136 80" stroke="var(--muted)" stroke-width="2"/>
          <g ${F} font-size="13" font-weight="700" text-anchor="middle"><text x="70" y="160" fill="var(--inf)">modelar: + material</text><text x="190" y="160" fill="var(--ink)">tallar: − material</text></g></svg>`,
      },
      {
        html: `<h3>Elementos de la obra en volumen</h3><p>Al trabajar en tres dimensiones importan la <b>forma</b> y sus <b>vacíos</b> (Henry Moore y Chillida hicieron del hueco una parte de la obra), la <b>textura</b> (lisa, rugosa), el <b>material</b>, la <b>escala</b> respecto al cuerpo humano y la <mark>luz</mark>, que cambia la obra según la hora y el lugar.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Forma escultórica con un hueco central atravesado por la luz">${BG}
          <path d="M60 150 Q 40 60 110 40 Q 200 30 200 110 Q 200 150 160 150 Z" fill="var(--hl-ink)" fill-opacity=".55" stroke="var(--hl-ink)" stroke-width="2.5"/>
          <ellipse cx="124" cy="100" rx="28" ry="22" fill="var(--paper)" stroke="var(--hl-ink)" stroke-width="2.5"/>
          <path d="M30 40 L 112 94" stroke="var(--hl)" stroke-width="3"/><circle cx="26" cy="36" r="10" fill="var(--hl)"/>
          <g ${F} font-size="12" font-weight="700"><text x="160" y="170" text-anchor="middle" fill="var(--ink)">el vacío también es forma</text></g></svg>`,
      },
      {
        html: `<h3>Escultura contemporánea</h3><p>Desde el siglo XX la escultura usa cualquier material: hierro soldado (Julio González, Chillida), objetos encontrados, luz, sonido… La <b>instalación</b> ocupa un espacio que el espectador recorre, y el <b>land art</b> interviene en la naturaleza. A veces la obra es <mark>efímera</mark> y solo queda la fotografía.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escultura de hierro con formas que se abren al aire y una espiral de piedras en la naturaleza">${BG}
          <path d="M40 150 V 70 M40 70 Q 40 40 70 40 M40 90 Q 20 70 24 50 M40 70 L 80 70 Q 96 70 96 90" fill="none" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/>
          <path d="M20 150 H 110" stroke="var(--muted)" stroke-width="2"/>
          ${[...Array(28)].map((_, i) => { const a = i * 0.55, r = 4 + i * 1.6; return `<circle cx="${(190 + r * Math.cos(a)).toFixed(1)}" cy="${(100 + r * 0.6 * Math.sin(a)).toFixed(1)}" r="3.5" fill="var(--muted)"/>`; }).join("")}
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="60" y="170" fill="var(--ink)">hierro soldado</text><text x="190" y="170" fill="var(--leaf)">land art</text></g></svg>`,
      },
      {
        html: `<h3>Tu obra tridimensional</h3><p>Puedes empezar con materiales baratos: <b>arcilla</b> o pasta de modelar, <b>cartón</b> (planos que se encajan), <b>alambre</b> para hacer una estructura y luego cubrirla, o <b>material reciclado</b>. Haz primero un boceto desde varios puntos de vista y una <mark>maqueta</mark> pequeña. Si modelas en barro, vacíalo por dentro si es grueso para que no se agriete.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Estructura de alambre de una figura, la misma figura cubierta de papel y pasta, y la obra acabada">${BG}
          <path d="M50 150 V 80 M50 70 m -8 0 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0 M50 96 L 30 120 M50 96 L 70 120 M50 150 L 40 170 M50 150 L 60 170" fill="none" stroke="var(--muted)" stroke-width="2"/>
          <path d="M130 150 V 80 M130 96 L 110 120 M130 96 L 150 120" stroke="var(--hl-ink)" stroke-width="10" stroke-linecap="round" stroke-opacity=".6"/><circle cx="130" cy="70" r="10" fill="var(--hl-ink)" fill-opacity=".6"/>
          <path d="M210 150 V 80 M210 96 L 190 120 M210 96 L 230 120" stroke="var(--inf)" stroke-width="12" stroke-linecap="round"/><circle cx="210" cy="68" r="12" fill="var(--inf)"/>
          <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="50" y="40" fill="var(--muted)">1. alambre</text><text x="130" y="40" fill="var(--hl-ink)">2. cubrir</text><text x="210" y="40" fill="var(--inf)">3. acabado</text></g></svg>`,
      },
    ],
    figura: { titulo: "Procedimientos escultóricos", svg: filas("Modelado, talla, ensamblaje y vaciado con sus materiales", [["Modelado (+)", "barro, cera, plastilina, pasta", "var(--inf)"], ["Talla (−)", "piedra, madera, jabón, poliestireno", "var(--ink)"], ["Ensamblaje", "hierro, cartón, objetos encontrados", "var(--red)"], ["Vaciado", "molde + bronce, escayola o resina", "var(--hl-ink)"]]) },
    video: { id: "o_mkIBfkaLA", titulo: "Cómo modelar arcilla", canal: "Practicopedia", vistas: 283915, megusta: 2899, busqueda: "cómo modelar arcilla" },
    quiz: [
      { q: "Una escultura que se puede rodear es de…", o: ["bulto redondo", "bajo relieve", "hueco relieve"], a: 0, e: "Es exenta." },
      { q: "Tallar es un procedimiento…", o: ["aditivo", "sustractivo", "digital"], a: 1, e: "Se quita material." },
      { q: "Las figuras de una moneda están en…", o: ["alto relieve", "bajo relieve", "bulto redondo"], a: 1, e: "Sobresalen muy poco." },
      { q: "Hacer un molde y rellenarlo de bronce es…", o: ["vaciado", "modelado", "collage"], a: 0, e: "Permite copias." },
      { q: "Una obra que el espectador recorre en un espacio es una…", o: ["instalación", "estampa", "acuarela"], a: 0, e: "Arte contemporáneo." },
    ],
    examen: [
      { q: "¿Qué escultor vasco trabajó el hierro y el vacío?", o: ["Eduardo Chillida", "Velázquez", "Goya"], a: 0, e: "Por ejemplo, El peine del viento." },
      { q: "El land art se realiza…", o: ["en la naturaleza", "en papel", "en pantalla"], a: 0, e: "Interviene en el paisaje." },
      { q: "Antes de una escultura grande conviene hacer…", o: ["una maqueta", "una fotografía", "nada"], a: 0, e: "Para probar la forma." },
    ],
    feynman: ["Qué diferencia hay entre bulto redondo y relieve", "Qué procedimientos escultóricos existen y con qué materiales", "Por qué el vacío también forma parte de una escultura", "Qué es una instalación y qué es el land art"],
    mapa: mapa("VOLUMEN Y ESCULTURA", "var(--bac)", [["Tipos", "bulto redondo · relieve", "var(--hl-ink)"], ["Procedimientos", "modelar · tallar · ensamblar · vaciar", "var(--inf)"], ["Elementos", "forma · vacío · textura · luz", "var(--pen)"], ["Hoy", "instalación · land art", "var(--leaf)"]], 260),
    tarjetas: [["Bulto redondo", "Escultura exenta que se puede rodear."], ["Relieve", "Escultura unida a un fondo: alto, bajo o hueco."], ["Modelado", "Procedimiento aditivo con materiales blandos."], ["Talla", "Procedimiento sustractivo con materiales duros."], ["Instalación", "Obra que ocupa un espacio y el espectador recorre."]],
    familias: ["Visitad juntos una escultura pública de vuestra ciudad y rodeadla: ¿cambia según el punto de vista?", "Modelad algo pequeño con plastilina o pasta de sal.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Volumen: tipos de escultura, procedimientos y materiales, elementos de la forma tridimensional y escultura contemporánea (RD 217/2022, Expresión Artística 4º).", ideas: ["Talla en pastilla de jabón o bloque de escayola.", "Escultura de cartón con planos seriados.", "Intervención efímera de land art en el patio con documentación fotográfica."] },
    fuentes: [RD, { t: "Museo Chillida Leku", url: "https://www.museochillidaleku.com/" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "Proyecto artístico", minutos: 35,
    objetivos: ["Seguir las fases de un proyecto artístico desde la idea hasta la exposición", "Trabajar en equipo con roles y un calendario", "Presentar y evaluar el propio trabajo con un portafolio"],
    claves: ["briefing", "lluvia de ideas", "referentes", "portafolio", "exposición", "autoevaluación"],
    pregunta: {
      texto: "¿Crees que los artistas esperan a que les llegue la inspiración para empezar a trabajar?",
      respuesta: "Casi nunca. Picasso decía: <mark>«La inspiración existe, pero tiene que encontrarte trabajando»</mark>. Los artistas y diseñadores siguen un <b>proceso</b>: investigan, prueban muchas ideas, eligen, producen y muestran su obra.",
    },
    bloques: [
      {
        html: `<h3>Las fases de un proyecto</h3><p>Todo proyecto artístico sigue más o menos estas fases: <b>1. Encargo o problema</b> (qué, para quién, con qué límites). <b>2. Investigación</b> y referentes. <b>3. Ideas</b> y bocetos. <b>4. Producción</b>. <b>5. Presentación</b> y exposición. <b>6. Evaluación</b>. Es un proceso <mark>con idas y vueltas</mark>, no una línea recta.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Seis fases de un proyecto en círculo: encargo, investigación, ideas, producción, presentación y evaluación">${BG}
          ${["encargo", "investigar", "ideas", "producir", "presentar", "evaluar"].map((n, i) => { const a = (i * 60 - 90) * Math.PI / 180, x = 130 + 78 * Math.cos(a), y = 90 + 62 * Math.sin(a); return `<rect x="${(x - 41).toFixed(1)}" y="${(y - 13).toFixed(1)}" width="82" height="26" rx="13" fill="var(--card)" stroke="${["var(--ink)", "var(--pen)", "var(--hl-ink)", "var(--red)", "var(--leaf)", "var(--inf)"][i]}" stroke-width="2.5"/><text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${i + 1}. ${n}</text>`; }).join("")}
          <ellipse cx="130" cy="90" rx="50" ry="34" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 4"/></svg>`,
      },
      {
        html: `<h3>Investigar y buscar referentes</h3><p>Antes de crear, mira lo que otros han hecho: artistas, movimientos, diseños, la naturaleza. Haz un <b>moodboard</b> (panel de inspiración) con imágenes, colores, texturas y palabras. Inspirarse no es copiar: se trata de entender <mark>por qué funciona</mark> algo y hacerlo tuyo.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Moodboard con recortes de imágenes, muestras de color y palabras clave">${BG}
          <rect x="16" y="16" width="228" height="148" rx="8" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>
          <rect x="28" y="28" width="70" height="56" fill="var(--pen)" fill-opacity=".5" transform="rotate(-4 63 56)"/><rect x="110" y="30" width="56" height="70" fill="var(--leaf)" fill-opacity=".5" transform="rotate(3 138 65)"/>
          ${["#e53935", "#fb8c00", "#fdd835"].map((c, i) => `<circle cx="${196 + (i % 2) * 22}" cy="${40 + i * 18}" r="9" fill="${c}"/>`).join("")}
          <rect x="32" y="100" width="90" height="50" fill="var(--hl)" fill-opacity=".6" transform="rotate(2 77 125)"/>
          <g ${F} font-size="13" font-weight="700"><text x="140" y="124" fill="var(--ink)">«calma»</text><text x="150" y="146" fill="var(--red)">«ciudad»</text></g></svg>`,
      },
      {
        html: `<h3>Generar y elegir ideas</h3><p>Primero cantidad, luego calidad. Técnicas: <b>lluvia de ideas</b> (sin juzgar), <b>mapa mental</b>, <b>SCAMPER</b> (sustituir, combinar, adaptar, modificar, poner otro uso, eliminar, reordenar) o <b>miniaturas</b> (bocetos muy pequeños y rápidos). Después elige con criterios: ¿responde al encargo? ¿es <mark>original</mark>? ¿se puede hacer con el tiempo y los materiales?</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Embudo: muchas ideas arriba, pocas en medio y una elegida abajo">${BG}
          <path d="M30 24 H 230 L 150 110 V 150 H 110 V 110 Z" fill="var(--pen)" fill-opacity=".12" stroke="var(--pen)" stroke-width="2.5"/>
          ${[...Array(14)].map((_, i) => `<circle cx="${50 + (i % 7) * 27}" cy="${38 + Math.floor(i / 7) * 18}" r="6" fill="var(--hl)"/>`).join("")}
          ${[0, 1, 2].map((i) => `<circle cx="${112 + i * 18}" cy="90" r="6" fill="var(--hl-ink)"/>`).join("")}
          <circle cx="130" cy="132" r="9" fill="var(--red)"/>
          <g ${F} font-size="11" font-weight="700"><text x="236" y="40" text-anchor="end" fill="var(--muted)"></text><text x="166" y="94" fill="var(--hl-ink)">bocetos</text><text x="152" y="136" fill="var(--red)">la elegida</text><text x="30" y="170" fill="var(--muted)">primero cantidad, luego calidad</text></g></svg>`,
      },
      {
        html: `<h3>Trabajar en equipo</h3><p>En un proyecto de grupo, repartid <b>roles</b> (coordinación, documentación, materiales, diseño, comunicación), haced un <b>calendario</b> con tareas y fechas y revisad el avance cada semana. Las decisiones se toman <mark>escuchando a todos</mark>, y los conflictos se resuelven hablando de la obra, no de las personas.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Calendario de tres semanas con tareas repartidas entre cuatro miembros del equipo">${BG}
          ${["sem 1", "sem 2", "sem 3"].map((n, i) => `<text x="${96 + i * 54}" y="30" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)" ${F}>${n}</text>`).join("")}
          ${[["Ana", "var(--pen)", 0, 2], ["Leo", "var(--red)", 1, 2], ["Iris", "var(--leaf)", 0, 1], ["Max", "var(--inf)", 2, 1]].map(([n, c, s, l], i) => `<text x="20" y="${58 + i * 30}" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${n}</text><rect x="${70 + s * 54}" y="${44 + i * 30}" width="${l * 54 - 6}" height="20" rx="10" fill="${c}"/>`).join("")}
          <path d="M68 36 V 160" stroke="var(--muted)" stroke-width="1"/></svg>`,
      },
      {
        html: `<h3>Presentar, exponer y evaluar</h3><p>La obra se completa cuando alguien la ve. Prepara una <b>exposición</b> (en el centro o en una web), una <b>cartela</b> con título, autor, técnica y año, y explica tu proceso. Guarda todo en un <b>portafolio</b>: bocetos, fotos del proceso y la obra final. Para terminar, <mark>autoevalúate</mark>: ¿qué ha funcionado?, ¿qué cambiarías?</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Obra colgada en una pared con su cartela: título, autor, técnica y año">${BG}
          <rect x="30" y="24" width="110" height="90" fill="var(--card)" stroke="var(--ink)" stroke-width="5"/><circle cx="70" cy="60" r="16" fill="var(--hl)"/><path d="M36 108 L 80 70 L 110 96 L 134 80 V 108 Z" fill="var(--leaf)"/>
          <rect x="160" y="70" width="80" height="54" rx="4" fill="var(--card)" stroke="var(--muted)" stroke-width="1.5"/>
          <g ${F} font-size="10" fill="var(--ink)"><text x="168" y="86" font-weight="700">Título</text><text x="168" y="98">Autora, 4º B</text><text x="168" y="110">Acrílico, 2026</text></g>
          <path d="M20 150 H 240" stroke="var(--muted)" stroke-width="2"/><text x="130" y="170" text-anchor="middle" font-size="12" font-weight="700" fill="var(--muted)" ${F}>cartela</text></svg>`,
      },
    ],
    figura: { titulo: "Checklist del proyecto", svg: filas("Preguntas clave en cada fase del proyecto artístico", [["Encargo", "¿qué, para quién, cuándo, con qué?", "var(--ink)"], ["Ideas", "¿al menos 10 ideas y 3 bocetos?", "var(--hl-ink)"], ["Producción", "¿calendario, roles, materiales?", "var(--red)"], ["Presentación", "¿cartela, portafolio y autoevaluación?", "var(--leaf)"]]) },
    video: { id: "wPN6vEkbfCk", titulo: "¿Cómo se realiza un proyecto artístico?", canal: "Museos y Galerías ICA", vistas: 92058, megusta: 0, busqueda: "cómo se realiza un proyecto artístico" },
    quiz: [
      { q: "¿Qué es un moodboard?", o: ["Un panel de inspiración con imágenes, colores y palabras", "Un tipo de pincel", "Un examen"], a: 0, e: "Se usa en la investigación." },
      { q: "En la lluvia de ideas, al principio…", o: ["se juzgan las ideas", "no se juzga y se busca cantidad", "solo vale una idea"], a: 1, e: "Primero cantidad." },
      { q: "La cartela de una obra incluye…", o: ["título, autor, técnica y año", "el precio del material", "la nota"], a: 0, e: "La información básica." },
      { q: "Guardar bocetos, fotos del proceso y la obra final es hacer un…", o: ["portafolio", "storyboard", "collage"], a: 0, e: "Documenta el proceso." },
      { q: "Inspirarse en referentes es…", o: ["copiar", "entender por qué algo funciona y hacerlo tuyo", "innecesario"], a: 1, e: "No es plagio." },
    ],
    examen: [
      { q: "La primera fase de un proyecto es…", o: ["la exposición", "definir el encargo", "la producción"], a: 1, e: "Saber qué hay que resolver." },
      { q: "SCAMPER es una técnica para…", o: ["generar ideas", "limpiar pinceles", "colgar cuadros"], a: 0, e: "Transformar ideas existentes." },
      { q: "Un calendario con tareas y fechas sirve para…", o: ["organizar el trabajo en equipo", "elegir colores", "nada"], a: 0, e: "Planificación." },
    ],
    feynman: ["Cuáles son las fases de un proyecto artístico", "Qué es un moodboard y para qué sirve", "Cómo se generan y eligen ideas", "Qué debe tener un buen portafolio"],
    mapa: mapa("PROYECTO ARTÍSTICO", "var(--bac)", [["Inicio", "encargo · referentes · moodboard", "var(--pen)"], ["Ideas", "lluvia de ideas · bocetos · elegir", "var(--hl-ink)"], ["Producción", "roles · calendario", "var(--red)"], ["Cierre", "exposición · portafolio · evaluar", "var(--leaf)"]], 250),
    tarjetas: [["Fases del proyecto", "Encargo, investigación, ideas, producción, presentación y evaluación."], ["Moodboard", "Panel de inspiración."], ["Lluvia de ideas", "Generar muchas ideas sin juzgarlas."], ["Cartela", "Ficha con título, autor, técnica y año."], ["Portafolio", "Recopilación del proceso y las obras."]],
    familias: ["Pedid que os explique su proyecto con el portafolio en la mano.", "Visitad juntos una exposición y fijaos en las cartelas y el montaje.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Proyectos artísticos: fases, procesos creativos, trabajo cooperativo, difusión y evaluación (RD 217/2022, Expresión Artística 4º).", ideas: ["Exposición final del curso comisariada por el alumnado.", "Encargo real de un departamento o asociación del barrio.", "Portafolio digital en una web o un documento compartido."] },
    fuentes: [RD, { t: "Museo Thyssen-Bornemisza, Educathyssen", url: "https://www.educathyssen.org/" }],
    revisado: "2026-11-12",
  },
];

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const L = require("./_lenguas");

L.amplia(module.exports[0], {
  minutos: 55,
  objetivos: ["Calcular el tamaño de impresión y el peso de una imagen", "Elegir el formato, el modo de color y el programa adecuados a cada uso"],
  bloques: [
    { tras: "Mapa de bits y vectorial", html: `<h3>Comparar mapa de bits y vectorial</h3>${L.tb(["", "Mapa de bits", "Vectorial"], [["Se forma con", "píxeles", "puntos, líneas y curvas (nodos)"], ["Al ampliar", "se pixela y pierde calidad", "mantiene la nitidez"], ["Ideal para", "fotografía, pintura digital", "logotipos, iconos, letras, planos"], ["Programas libres", "GIMP, Krita, Photopea", "Inkscape"], ["Formatos", "JPG, PNG, GIF, WebP", "SVG, PDF, AI, EPS"]])}<p>Un mismo proyecto suele combinar los dos: en un cartel, la fotografía es un mapa de bits y el logotipo y el texto, vectoriales. Convertir un mapa de bits en vectorial se llama <b>vectorizar</b> o <i>trazar</i>, y funciona bien con imágenes sencillas de pocos colores.</p>` },
    { tras: "Resolución y tamaño", html: `<h3>Calcular el tamaño de impresión</h3><p>Para saber a qué tamaño se puede imprimir una imagen con calidad se divide el número de píxeles entre la resolución. Una pulgada mide <b>2,54 cm</b>. Por ejemplo, una foto de 3.000 × 2.000 píxeles impresa a 300 ppp mide 10 × 6,67 pulgadas, es decir, unos <mark>25,4 × 16,9 cm</mark>. Si la imprimes más grande, cada píxel ocupa más papel y la imagen se ve borrosa. Ampliar una imagen con un programa (<b>interpolar</b>) inventa píxeles nuevos a partir de los vecinos, pero no añade detalle real. En cambio, reducir el tamaño sí funciona bien. Por eso conviene trabajar siempre con el archivo original a la máxima resolución y guardar copias reducidas solo para la web o para enviar por mensajería, donde una imagen de 1.000 o 2.000 píxeles de ancho es suficiente.</p>` },
    { tras: "Formatos de archivo", html: `<h3>Compresión y modos de color</h3><p>La <b>compresión</b> reduce el peso de un archivo. La compresión <b>con pérdida</b> (JPG, WebP) elimina información que el ojo casi no nota; si se exagera, aparecen bloques y manchas llamados <i>artefactos</i>. La compresión <b>sin pérdida</b> (PNG) reduce el peso sin borrar nada, pero los archivos son más grandes. Además, una imagen tiene un <b>modo de color</b>: <mark>RGB</mark> para pantallas, <b>CMYK</b> para imprenta y <b>escala de grises</b> para blanco y negro. La <b>profundidad de color</b> indica cuántos colores puede tener cada píxel: con 8 bits por canal hay 256 niveles de rojo, verde y azul, unos 16,7 millones de colores. Un GIF, en cambio, solo admite 256 colores en total, por eso no sirve para fotos.</p>` },
    { tras: "Editar con capas", html: `<h3>Herramientas de selección y retoque</h3><p>Para editar una parte de la imagen hay que <b>seleccionarla</b>. Las herramientas más usadas son la selección rectangular y elíptica, el <b>lazo</b> (a mano alzada), la <b>varita mágica</b> (selecciona zonas de color parecido) y la selección por color. Las <b>máscaras de capa</b> permiten ocultar partes de una capa sin borrarlas: lo pintado en negro se oculta y lo pintado en blanco se ve, así que siempre se puede rectificar. Esto se llama <mark>edición no destructiva</mark>. Para retocar se usan el <b>tampón de clonar</b>, que copia una zona sobre otra, y el <b>pincel corrector</b>, que además mezcla la textura y la luz. Los <b>modos de fusión</b> (multiplicar, trama, superponer) cambian cómo se combina una capa con las de debajo y sirven para fotomontajes o efectos de luz.</p>` },
    { tras: "Derechos y licencias", html: `<h3>Crear con IA y con responsabilidad</h3><p>Las herramientas de <b>inteligencia artificial generativa</b> crean imágenes a partir de una descripción escrita (un <i>prompt</i>). Pueden ser útiles para generar ideas o bocetos rápidos, pero plantean preguntas importantes. Se han entrenado con millones de imágenes, muchas de artistas que no dieron permiso. Pueden reproducir <b>estereotipos</b> y generar imágenes falsas muy realistas, los <b>deepfakes</b>, que pueden dañar a personas reales. Por eso conviene seguir unas normas: no crear imágenes de personas reales sin su permiso, <mark>indicar siempre</mark> que una imagen se ha hecho con IA, no presentar como propio lo que ha hecho una máquina y comprobar las condiciones de uso de cada herramienta. La creatividad, el criterio y la mirada personal siguen siendo del artista.</p>` },
  ],
  videos: [
    ["Mapa de bits y vectorial", L.vid("9i_0cLdJE-s", "Mapas de bits e imágenes vectoriales: conoce bien las diferencias", "Hey Jaime", 67369)],
    ["Resolución y tamaño", L.vid("cRDbPzQlO0o", "¿Qué son los PPP, PPI y DPI? Resolución de imágenes", "Alex DM Estudio", 131686)],
  ],
  ejemplos: [
    ["¿A qué tamaño puedes imprimir con calidad una foto de 2.400 × 3.600 píxeles?", ["Para buena calidad se necesitan 300 ppp.", "2.400 / 300 = 8 pulgadas; 3.600 / 300 = 12 pulgadas.", "8 × 2,54 = 20,3 cm; 12 × 2,54 = 30,5 cm."], "Unos 20 × 30 cm."],
    ["Diseñas el logotipo de un club que irá en una camiseta y en una lona enorme. ¿Qué tipo de imagen y formato usas?", ["Debe ampliarse mucho sin perder calidad.", "Los vectores escalan sin pixelarse.", "SVG o PDF guardan la información vectorial."], "Imagen vectorial, en SVG o PDF."],
    ["Necesitas un icono con fondo transparente para una web. ¿JPG o PNG?", ["JPG no admite transparencia.", "PNG sí la admite y no pierde calidad.", "Si el icono es sencillo, también sirve SVG."], "PNG (o SVG si es vectorial)."],
  ],
  errores: [
    "Ampliar una imagen pequeña esperando que gane detalle: solo se inventan píxeles.",
    "Guardar un logotipo en JPG: aparecen artefactos y no hay transparencia.",
    "Volver a guardar un JPG muchas veces: pierde calidad en cada guardado.",
    "Trabajar sin capas y borrar en lugar de usar máscaras.",
    "Usar imágenes de internet sin comprobar la licencia.",
  ],
  ejercicios: [
    ["¿Cuántos megapíxeles tiene una imagen de 4.000 × 3.000 píxeles?", "12 megapíxeles."],
    ["¿Cuánto mide una pulgada?", "2,54 cm."],
    ["¿A qué tamaño se imprime a 300 ppp una imagen de 1.500 × 1.500 píxeles?", "5 × 5 pulgadas, unos 12,7 × 12,7 cm."],
    ["¿Qué es vectorizar?", "Convertir un mapa de bits en una imagen vectorial."],
    ["Diferencia entre compresión con pérdida y sin pérdida.", "Con pérdida elimina información (JPG); sin pérdida la conserva (PNG)."],
    ["¿Qué modo de color se usa para imprenta?", "CMYK."],
    ["¿Por qué un GIF no sirve para fotografías?", "Porque solo admite 256 colores."],
    ["¿Qué ocurre al pintar de negro en una máscara de capa?", "Se oculta esa parte de la capa, sin borrarla."],
    ["¿Qué hace el tampón de clonar?", "Copia una zona de la imagen sobre otra."],
    ["Escribe dos normas para usar IA generativa de forma responsable.", "Indicar que la imagen es de IA y no crear imágenes de personas reales sin su permiso."],
  ],
  quiz: [
    ["Inkscape es un programa de…", ["dibujo vectorial", "edición de vídeo", "maquetación de texto"], 0, "Libre y gratuito."],
    ["Interpolar una imagen es…", ["inventar píxeles al ampliarla", "comprimirla", "vectorizarla"], 0, "No añade detalle real."],
    ["Con 8 bits por canal hay…", ["unos 16,7 millones de colores", "256 colores", "2 colores"], 0, "256 × 256 × 256."],
    ["La edición no destructiva usa…", ["máscaras y capas", "la goma de borrar", "el recorte"], 0, "Se puede rectificar."],
    ["Un deepfake es…", ["una imagen o vídeo falso muy realista", "un formato de archivo", "un filtro de color"], 0, "IA generativa."],
  ],
  tarjetas: [
    ["Tamaño de impresión", "píxeles ÷ ppp = pulgadas; × 2,54 = cm."],
    ["Compresión", "Con pérdida (JPG) o sin pérdida (PNG)."],
    ["Máscara de capa", "Negro oculta, blanco muestra: edición no destructiva."],
  ],
});

L.amplia(module.exports[1], {
  minutos: 55,
  objetivos: ["Usar escalas de plano, ángulos y movimientos con intención narrativa", "Planificar y montar un cortometraje en grupo"],
  bloques: [
    { tras: "De la imagen fija a la imagen en movimiento", html: `<h3>Breve historia del cine</h3><p>El 28 de diciembre de 1895 los hermanos <b>Lumière</b> hicieron en París la primera proyección pública de pago con su cinematógrafo; películas como <i>La llegada de un tren</i> duraban menos de un minuto. <b>Georges Méliès</b> descubrió los trucos y la fantasía (<i>Viaje a la Luna</i>, 1902). En el cine mudo destacaron <b>Charles Chaplin</b> y <b>Buster Keaton</b>, y el cineasta soviético <b>Serguéi Eisenstein</b> desarrolló el montaje como arte. En 1927 llegó el <b>cine sonoro</b>, y después el color y la televisión. En España, <b>Luis Buñuel</b> rodó con Dalí <i>Un perro andaluz</i> (1929), una película surrealista. Hoy el cine convive con las series, las plataformas y los vídeos cortos de las redes, pero el lenguaje audiovisual básico sigue siendo el mismo.</p>` },
    { tras: "De la imagen fija a la imagen en movimiento", html: `<h3>Escalas de plano y ángulos</h3>${L.tb(["Plano", "Qué muestra", "Para qué sirve"], [["Gran plano general", "un paisaje enorme con personas diminutas", "situar, mostrar soledad o grandeza"], ["Plano general", "a la persona entera y su entorno", "presentar el espacio"], ["Plano americano", "de las rodillas hacia arriba", "acción y diálogo (wésterns)"], ["Plano medio", "de la cintura hacia arriba", "conversaciones"], ["Primer plano", "el rostro", "mostrar emociones"], ["Plano detalle", "un objeto o una parte pequeña", "destacar algo importante"]])}<p>El <b>ángulo</b> también cuenta: el <b>picado</b> (desde arriba) empequeñece al personaje; el <b>contrapicado</b> (desde abajo) lo engrandece; el <b>cenital</b> mira desde justo encima, y el <b>plano holandés</b>, inclinado, transmite inquietud.</p>` },
    { tras: "Guion y storyboard", html: `<h3>Cómo se escribe un guion</h3><p>Un guion literario se divide en <b>escenas</b>. Cada una empieza con un <b>encabezado</b> que indica si es interior o exterior, el lugar y si es de día o de noche: «INT. COCINA – NOCHE». Después viene la <b>acción</b>, en presente y describiendo solo lo que se ve y se oye, y los <b>diálogos</b>, con el nombre del personaje en mayúsculas. Una regla útil es que <mark>una página de guion equivale a un minuto</mark> de película. Muchas historias siguen la estructura en <b>tres actos</b>: planteamiento (conocemos al personaje y su deseo), nudo (aparecen obstáculos) y desenlace (el conflicto se resuelve). En un cortometraje conviene tener pocos personajes, pocas localizaciones y una idea clara. Mostrar es mejor que contar: en lugar de que un personaje diga «estoy triste», es mejor verlo.</p>` },
    { tras: "El montaje y el sonido", html: `<h3>Recursos del montaje</h3><p>El montaje tiene sus propias herramientas. El <b>corte directo</b> pasa de un plano a otro sin transición y es el más usado. El <b>fundido</b> a negro indica un final o un salto de tiempo, y el <b>encadenado</b> mezcla dos planos durante un instante. El <b>plano-contraplano</b> alterna los rostros de dos personas que hablan. El <b>montaje paralelo</b> alterna dos acciones que ocurren a la vez en lugares distintos, por ejemplo una persecución y alguien que espera. El <b>flashback</b> salta al pasado. Para que los cortes no molesten, se respeta la <b>regla de los 180 grados</b>: la cámara se queda siempre en el mismo lado de una línea imaginaria entre los personajes, para que no parezca que cambian de sitio. Programas gratuitos como DaVinci Resolve, Shotcut o CapCut permiten montar en el ordenador o el móvil.</p>` },
    { tras: "El montaje y el sonido", html: `<h3>Del corto a las redes</h3><p>Hoy el lenguaje audiovisual está en todas partes: anuncios, videoclips, tráileres, documentales, <i>streamings</i> y vídeos verticales de las redes. Cada formato tiene sus reglas. Los <b>vídeos cortos</b> deben captar la atención en los primeros segundos y se ven a menudo sin sonido, por eso llevan subtítulos. El formato <b>vertical</b> (9:16) se piensa para el móvil, mientras que el cine usa formatos horizontales anchos (16:9 o más). Analizar estos vídeos con espíritu crítico ayuda a descubrir cómo nos <mark>persuaden</mark>: qué planos usan, qué música, qué ritmo de montaje y qué se deja fuera de cuadro. Grabar con el móvil también requiere técnica: estabilizar la imagen, cuidar la luz, grabar el sonido cerca de quien habla y respetar el derecho a la propia imagen de las personas que aparecen.</p>` },
  ],
  videos: [
    ["Movimientos de cámara", L.vid("iN0rf5vUfxc", "Más de 15 movimientos de cámara cinematográficos: guía completa", "Aprendercine.com", 1051106)],
    ["Guion y storyboard", L.vid("8_N3-gap2Sc", "Storyboard: ¿qué es y cómo se hace?", "Soy de cine", 478720)],
  ],
  ejemplos: [
    ["Quieres que el público sienta que un personaje es poderoso y amenazante. ¿Qué plano y ángulo usas?", ["El contrapicado engrandece al personaje.", "Un plano medio o primer plano muestra su gesto.", "Una música grave puede reforzar la sensación."], "Contrapicado en plano medio o primer plano."],
    ["Escribe el encabezado de una escena en el patio del instituto por la mañana.", ["Indica si es interior o exterior.", "Indica el lugar.", "Indica el momento del día."], "EXT. PATIO DEL INSTITUTO – DÍA."],
    ["Dos personas hablan sentadas a una mesa. ¿Cómo lo rodarías?", ["Un plano general para situar el espacio.", "Plano-contraplano de cada uno al hablar.", "Respetar la regla de los 180 grados."], "Plano general de situación y plano-contraplano sin cruzar el eje."],
  ],
  errores: [
    "Confundir zoom con travelling: el zoom no mueve la cámara.",
    "Cruzar el eje de 180 grados y desorientar al espectador.",
    "Escribir en el guion pensamientos que no se ven ni se oyen.",
    "Empezar a grabar sin storyboard ni plan de rodaje.",
    "Olvidar el sonido: un audio malo estropea una buena imagen.",
  ],
  ejercicios: [
    ["¿Cuántos fotogramas por segundo tiene el cine?", "24."],
    ["¿Quiénes hicieron la primera proyección pública y cuándo?", "Los hermanos Lumière, el 28 de diciembre de 1895."],
    ["¿Qué aportó Méliès al cine?", "Los trucos, los efectos y la fantasía."],
    ["Ordena de más abierto a más cerrado: primer plano, plano general, plano medio, plano detalle.", "Plano general, plano medio, primer plano, plano detalle."],
    ["¿Qué transmite el picado?", "Que el personaje es pequeño, débil o vulnerable."],
    ["¿Cuánto dura una página de guion aproximadamente?", "Un minuto."],
    ["¿Cuáles son los tres actos de una historia?", "Planteamiento, nudo y desenlace."],
    ["¿Qué es el montaje paralelo?", "Alternar dos acciones simultáneas en lugares distintos."],
    ["¿Qué indica un fundido a negro?", "Un final o un salto de tiempo."],
    ["Diseña un storyboard de cuatro viñetas para un anuncio de 15 segundos.", "Respuesta abierta: cada viñeta con el plano, la acción, el sonido y la duración."],
  ],
  quiz: [
    ["El plano americano corta a la altura de…", ["las rodillas", "la cintura", "los ojos"], 0, "Típico de los wésterns."],
    ["Un perro andaluz (1929) es de…", ["Buñuel y Dalí", "Chaplin", "Méliès"], 0, "Cine surrealista."],
    ["«INT.» en un guion significa…", ["interior", "intermedio", "introducción"], 0, "Encabezado de escena."],
    ["El encadenado…", ["mezcla dos planos un instante", "corta de golpe", "congela la imagen"], 0, "Transición suave."],
    ["El formato vertical de las redes es…", ["9:16", "16:9", "4:3"], 0, "Pensado para el móvil."],
  ],
  tarjetas: [
    ["Escalas de plano", "General, americano, medio, primer plano, detalle."],
    ["Regla de los 180 grados", "La cámara no cruza el eje entre los personajes."],
    ["Estructura en tres actos", "Planteamiento, nudo y desenlace."],
  ],
});

L.amplia(module.exports[2], {
  minutos: 55,
  objetivos: ["Reconocer obras y escultores clave de la historia", "Planificar una pieza tridimensional con boceto, maqueta y elección de material"],
  bloques: [
    { tras: "Bulto redondo y relieve", html: `<h3>La escultura en la historia</h3><p>La escultura acompaña al ser humano desde la Prehistoria: la <b>Venus de Willendorf</b>, una pequeña figura de piedra, tiene unos 30.000 años. Los <b>griegos</b> buscaron la belleza ideal y la proporción; Policleto fijó un canon del cuerpo humano. En la Edad Media la escultura decoraba las iglesias con relieves en las portadas. En el <b>Renacimiento</b>, Miguel Ángel talló el <i>David</i> en un solo bloque de mármol. En el <b>Barroco</b>, Bernini consiguió que el mármol pareciera piel y movimiento, y en España los imagineros como Gregorio Fernández tallaron figuras de madera policromada. En el siglo XIX, <b>Auguste Rodin</b> (<i>El pensador</i>) abrió el camino a la escultura moderna, con superficies rugosas que captan la luz y figuras llenas de emoción.</p>` },
    { tras: "Procedimientos: sumar o quitar", html: `<h3>Materiales y herramientas</h3>${L.tb(["Material", "Procedimiento", "Herramientas", "Cuidados"], [["Barro o arcilla", "modelado", "manos, palillos de modelar, vaciadores", "secado lento; cocción en horno"], ["Pasta de secado al aire", "modelado", "palillos, agua", "no necesita horno; frágil"], ["Madera", "talla", "gubias, formones, mazo", "seguir la veta; cuidado con los cortes"], ["Piedra", "talla", "cinceles, punteros, martillo", "gafas de protección"], ["Escayola", "vaciado", "molde, recipiente, espátula", "fragua en minutos; no tirar por el desagüe"], ["Alambre y cartón", "construcción", "alicates, cúter, cola", "usar guantes y base de corte"]])}<p>El <b>bronce</b> se trabaja con la técnica de la <b>cera perdida</b>: se modela en cera, se cubre con un molde refractario, se calienta para que la cera salga y se vierte el metal fundido en el hueco.</p>` },
    { tras: "Elementos de la obra en volumen", html: `<h3>Escultura en el espacio público</h3><p>Muchas esculturas no están en los museos, sino en la calle, y transforman cómo vivimos la ciudad o el paisaje. <b>Eduardo Chillida</b> instaló en 1977 el <i>Peine del viento</i> en las rocas de la bahía de San Sebastián: tres piezas de acero que dialogan con el mar y el viento. En Gijón, su <i>Elogio del horizonte</i> enmarca el cielo y suena con el viento. <b>Jaume Plensa</b> crea grandes cabezas de mujeres jóvenes con los ojos cerrados que invitan al silencio, y en Chicago diseñó una fuente con rostros proyectados. Ante el Guggenheim de Bilbao están <i>Puppy</i>, un perro cubierto de flores de <b>Jeff Koons</b>, y <i>Mamá</i>, una enorme araña de <b>Louise Bourgeois</b>. Estas obras se piensan para el <mark>lugar concreto</mark> donde se colocan y para la gente que pasa junto a ellas.</p>` },
    { tras: "Escultura contemporánea", html: `<h3>Movimiento, luz y naturaleza</h3><p>Algunos escultores han querido que sus obras se muevan. <b>Alexander Calder</b> inventó los <b>móviles</b>: piezas de metal colgadas en equilibrio que giran con el aire. El <b>arte cinético</b> usa motores, luz o el movimiento del espectador para cambiar la obra. Otros trabajan directamente en la naturaleza: el <b>land art</b> nació en los años 60 en Estados Unidos; Robert Smithson construyó <i>Spiral Jetty</i> (1970), una espiral de rocas en un lago salado. La pareja <b>Christo y Jeanne-Claude</b> envolvió con tela edificios enteros, como el Reichstag de Berlín en 1995, durante pocos días. Estas obras <mark>efímeras</mark> plantean una pregunta interesante: ¿una obra de arte tiene que durar para siempre? A menudo solo quedan fotos, vídeos y los bocetos del proyecto.</p>` },
    { tras: "Tu obra tridimensional", html: `<h3>Paso a paso: modelar una cabeza en barro</h3><ul><li><b>Estructura</b>: haz una bola de papel de periódico sobre un palo fijado a una base; servirá de núcleo y ahorrará barro.</li><li><b>Volumen general</b>: cubre el núcleo con placas de barro de un centímetro y forma un huevo. Marca un eje vertical y una línea horizontal a media altura para los ojos.</li><li><b>Grandes planos</b>: añade la nariz y el mentón, y hunde las cuencas de los ojos. Gira la pieza a menudo para verla desde todos los lados.</li><li><b>Detalles</b>: modela labios, párpados y orejas con los palillos. Une siempre las piezas nuevas rayando las dos superficies y usando barbotina (barro líquido).</li><li><b>Secado</b>: cubre con plástico para que seque despacio y, si vas a cocerla, retira el núcleo de papel.</li></ul>` },
  ],
  videos: [
    ["Bulto redondo y relieve", L.vid("F4JtAW_P4Wg", "¿Qué es la escultura? Tipos de escultura y materiales", "Maxi Danza", 220258)],
    ["Procedimientos: sumar o quitar", L.vid("2lVgfqqmFws", "La técnica del vaciado en la escultura", "MemorANDA", 206378)],
  ],
  ejemplos: [
    ["Clasifica el David de Miguel Ángel: tipo de obra y procedimiento.", ["Se puede rodear: es de bulto redondo.", "Es de mármol, un material duro.", "Se obtuvo quitando material del bloque."], "Bulto redondo, tallado en mármol (procedimiento sustractivo)."],
    ["Quieres hacer diez copias iguales de una pequeña figura. ¿Qué procedimiento eliges?", ["Modelas el original en barro o plastilina.", "Haces un molde de silicona o escayola.", "Lo rellenas varias veces con escayola o resina."], "Vaciado a partir de un molde."],
    ["Una figura de barro se ha agrietado al secarse. ¿Qué ha podido pasar?", ["Era demasiado gruesa y no se vació por dentro.", "Se secó demasiado deprisa, cerca de un radiador.", "Las piezas se unieron sin rayar ni barbotina."], "Grosor excesivo, secado rápido o uniones mal hechas."],
  ],
  errores: [
    "Confundir modelado (añadir material blando) con talla (quitar material duro).",
    "Mirar la escultura solo de frente al trabajarla: hay que girarla.",
    "Unir piezas de barro sin rayar ni usar barbotina.",
    "Pensar que el hueco no forma parte de la obra: en Moore y Chillida es esencial.",
    "Tirar restos de escayola por el desagüe: se endurece y lo atasca.",
  ],
  ejercicios: [
    ["¿Qué diferencia hay entre bulto redondo y relieve?", "El bulto redondo se puede rodear; el relieve está unido a un fondo."],
    ["¿Qué tipo de relieve tiene una moneda?", "Bajo relieve."],
    ["Explica la técnica de la cera perdida.", "Se modela en cera, se hace un molde, la cera se derrite y se vierte bronce en el hueco."],
    ["¿Con qué herramientas se talla la madera?", "Con gubias, formones y mazo."],
    ["¿Qué es la barbotina?", "Barro líquido que sirve para pegar piezas de barro."],
    ["¿Quién inventó los móviles?", "Alexander Calder."],
    ["Cita una obra de Chillida en el espacio público.", "El Peine del viento (San Sebastián) o el Elogio del horizonte (Gijón)."],
    ["¿Qué es el land art?", "Arte que interviene en la naturaleza, a menudo de forma efímera."],
    ["¿Qué escultor del siglo XIX hizo El pensador?", "Auguste Rodin."],
    ["Diseña una escultura con material reciclado: material, procedimiento y tema.", "Respuesta abierta: por ejemplo, un pez de latas unidas con alambre (construcción) sobre la contaminación del mar."],
  ],
  quiz: [
    ["La Venus de Willendorf es de la…", ["Prehistoria", "Grecia", "Edad Media"], 0, "Unos 30.000 años."],
    ["El Peine del viento es de…", ["Chillida", "Plensa", "Rodin"], 0, "San Sebastián, 1977."],
    ["La araña Mamá es de…", ["Louise Bourgeois", "Jeff Koons", "Calder"], 0, "Guggenheim de Bilbao."],
    ["Spiral Jetty es un ejemplo de…", ["land art", "arte cinético", "imaginería"], 0, "Robert Smithson, 1970."],
    ["La gubia se usa para…", ["tallar madera", "modelar barro", "soldar hierro"], 0, "Herramienta de talla."],
  ],
  tarjetas: [
    ["Cera perdida", "Técnica para fundir esculturas de bronce."],
    ["Móvil", "Escultura colgante en equilibrio que se mueve con el aire (Calder)."],
    ["Land art", "Intervención artística en la naturaleza, a menudo efímera."],
  ],
});

L.amplia(module.exports[3], {
  minutos: 55,
  objetivos: ["Aplicar un método de diseño para resolver un encargo", "Documentar, difundir y evaluar un proyecto con criterios claros"],
  bloques: [
    { tras: "Las fases de un proyecto", html: `<h3>El encargo: definir bien el problema</h3><p>Un buen proyecto empieza con un buen <b>encargo</b>. Antes de dibujar nada, hay que responder a unas preguntas: <b>¿qué</b> hay que hacer (un mural, un cartel, una escultura, un vídeo)?, <b>¿para quién</b> (el público: niños, vecinos, compañeros)?, <b>¿para qué</b> (informar, decorar, emocionar, denunciar)?, <b>¿dónde</b> se va a mostrar?, <b>¿con qué</b> materiales y presupuesto?, y <b>¿cuándo</b> hay que entregarlo? Escribir las respuestas en un <mark>documento de encargo</mark> de media página evita malentendidos y sirve para evaluar al final si se ha cumplido. Si el encargo lo hace otra persona, como un departamento del centro o una asociación del barrio, conviene hacerle una pequeña entrevista y enseñarle bocetos antes de producir la obra final.</p>` },
    { tras: "Investigar y buscar referentes", html: `<h3>Cómo analizar un referente</h3><p>Mirar obras de otros artistas es útil si se hace con método. Para cada referente, apunta en tu cuaderno:</p>${L.tb(["Pregunta", "Ejemplo con un cartel de Toulouse-Lautrec"], [["¿Quién, cuándo y dónde?", "Toulouse-Lautrec, París, años 1890"], ["¿Qué técnica y materiales?", "litografía en color"], ["¿Cómo está compuesto?", "grandes manchas planas, diagonales, figura recortada"], ["¿Qué colores usa?", "pocos colores, planos y contrastados"], ["¿Qué quiere comunicar?", "anunciar un espectáculo y atraer público"], ["¿Qué me llevo a mi proyecto?", "simplificar las formas y usar pocas tintas"]])}<p>La última pregunta es la más importante: así la inspiración se convierte en aprendizaje y no en copia.</p>` },
    { tras: "Generar y elegir ideas", html: `<h3>El pensamiento de diseño</h3><p>El <b>design thinking</b> o pensamiento de diseño es un método muy usado por diseñadores y empresas para resolver problemas de forma creativa. Tiene cinco fases: <b>empatizar</b> (entender a las personas para las que se diseña, observándolas y hablando con ellas), <b>definir</b> el problema real, <b>idear</b> muchas soluciones posibles, <b>prototipar</b> (hacer una versión rápida y barata, como una maqueta o un boceto) y <b>testear</b> (probarla con usuarios y mejorarla). Es un proceso <mark>iterativo</mark>: después de probar, a menudo se vuelve a idear o incluso a definir. Por ejemplo, si el encargo es mejorar la señalización del instituto, primero hay que observar dónde se pierden los alumnos nuevos, y no empezar directamente a dibujar flechas bonitas.</p>` },
    { tras: "Trabajar en equipo", html: `<h3>Planificar el tiempo y los materiales</h3><p>Muchos proyectos fracasan no por falta de ideas, sino por falta de <b>planificación</b>. Un <b>cronograma</b> sencillo, una tabla con las semanas en columnas y las tareas en filas, permite ver de un vistazo qué hay que hacer y quién lo hace. Conviene dejar siempre un margen para imprevistos: si crees que algo durará una semana, calcula una y media. También es necesario un <b>presupuesto</b> y una lista de materiales: qué hay en el aula, qué hay que comprar y qué se puede reciclar. Fijad <mark>hitos</mark>, fechas en las que algo debe estar terminado (los bocetos elegidos, la maqueta, la obra final), y revisad el plan en cada hito. Herramientas digitales como los tableros de tareas o un documento compartido ayudan a que todo el equipo sepa en qué punto está el proyecto.</p>` },
    { tras: "Presentar, exponer y evaluar", html: `<h3>Evaluar con una rúbrica</h3><p>Una <b>rúbrica</b> es una tabla que describe qué se espera en cada criterio y en cada nivel. Sirve para que todos sepan desde el principio cómo se va a valorar el trabajo, y para la autoevaluación y la coevaluación entre compañeros.</p>${L.tb(["Criterio", "Inicial", "Adecuado", "Excelente"], [["Respuesta al encargo", "cumple en parte", "cumple el encargo", "lo cumple y aporta algo inesperado"], ["Proceso documentado", "pocos bocetos", "bocetos y fotos del proceso", "portafolio completo y reflexionado"], ["Técnica", "con errores visibles", "bien resuelta", "dominio y cuidado de los detalles"], ["Trabajo en equipo", "participa poco", "cumple su rol", "ayuda y coordina"], ["Presentación", "lee sin explicar", "explica la obra", "explica el proceso y responde preguntas"]])}` },
  ],
  videos: [
    ["Las fases de un proyecto", L.vid("ex6jYUVTb7o", "Cómo crear un proyecto artístico", "Melany Martín", 94890)],
    ["Generar y elegir ideas", L.vid("LeoEnRjAYM0", "Qué es el design thinking y para qué sirve: fases y ejemplos", "IEBS Business School", 227109)],
  ],
  ejemplos: [
    ["La biblioteca del centro pide un cartel para animar a leer. Redacta el encargo.", ["Qué: un cartel A3 para imprimir.", "Para quién: alumnado de 12 a 16 años; para qué: animar a ir a la biblioteca.", "Dónde y cuándo: pasillos del centro, entrega en tres semanas, con impresión en color."], "Cartel A3 para alumnado de ESO, que anime a usar la biblioteca, para los pasillos, en tres semanas."],
    ["Aplica SCAMPER a una silla para crear una escultura.", ["Sustituir: patas de libros.", "Combinar: silla y árbol.", "Poner otro uso: silla como maceta; Eliminar: quitar el asiento."], "Ideas como una silla de libros o una silla-árbol: SCAMPER multiplica las ideas."],
    ["Vuestro grupo va retrasado a dos semanas de la entrega. ¿Qué hacéis?", ["Revisar el cronograma y ver qué falta.", "Priorizar lo imprescindible y simplificar lo demás.", "Repartir de nuevo las tareas según el tiempo de cada uno."], "Replanificar, priorizar y redistribuir tareas."],
  ],
  errores: [
    "Empezar la obra final sin bocetos ni investigación.",
    "Copiar un referente en lugar de analizarlo y aprender de él.",
    "Quedarse con la primera idea sin generar alternativas.",
    "No planificar el tiempo y dejarlo todo para el final.",
    "Presentar la obra sin explicar el proceso ni reflexionar sobre él.",
    "Discutir sobre las personas en lugar de sobre la obra cuando hay desacuerdos en el equipo.",
  ],
  ejercicios: [
    ["Nombra las seis fases de un proyecto artístico.", "Encargo, investigación, ideas y bocetos, producción, presentación y evaluación."],
    ["¿Qué preguntas definen un encargo?", "Qué, para quién, para qué, dónde, con qué y cuándo."],
    ["¿Qué es un moodboard?", "Un panel de inspiración con imágenes, colores, texturas y palabras."],
    ["¿Qué significa cada letra de SCAMPER?", "Sustituir, combinar, adaptar, modificar, poner otro uso, eliminar, reordenar."],
    ["¿Cuáles son las cinco fases del design thinking?", "Empatizar, definir, idear, prototipar y testear."],
    ["¿Qué es un prototipo?", "Una versión rápida y barata de la idea para probarla."],
    ["¿Para qué sirve un cronograma?", "Para ver qué tareas hay, quién las hace y cuándo."],
    ["¿Qué es un hito?", "Una fecha en la que una parte del proyecto debe estar terminada."],
    ["¿Qué datos lleva una cartela?", "Título, autor, técnica y año."],
    ["Escribe tres preguntas de autoevaluación.", "¿Qué ha funcionado? ¿Qué cambiaría? ¿Qué he aprendido?"],
  ],
  quiz: [
    ["La primera fase del design thinking es…", ["empatizar", "prototipar", "testear"], 0, "Entender a las personas."],
    ["Un proceso iterativo…", ["vuelve atrás para mejorar", "va en línea recta", "no tiene fases"], 0, "Probar y corregir."],
    ["Una rúbrica sirve para…", ["evaluar con criterios claros", "dibujar", "comprar material"], 0, "Niveles y criterios."],
    ["Al analizar un referente, lo más importante es…", ["qué me llevo a mi proyecto", "copiarlo exacto", "su precio"], 0, "Aprender, no copiar."],
    ["Las miniaturas son…", ["bocetos muy pequeños y rápidos", "esculturas", "fotos"], 0, "Generar ideas."],
  ],
  tarjetas: [
    ["Design thinking", "Empatizar, definir, idear, prototipar y testear."],
    ["Cronograma e hitos", "Tareas en el tiempo y fechas clave."],
    ["Rúbrica", "Tabla de criterios y niveles para evaluar."],
  ],
});
