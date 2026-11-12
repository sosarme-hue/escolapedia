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
