// Tecnología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Tecnología",
  curso: "4-eso",
  titulo: "Diseño e impresión 3D",
  minutos: 35,
  objetivos: ["Diseñar piezas sencillas con programas de modelado 3D", "Explicar el proceso de fabricación aditiva por deposición de filamento", "Preparar una impresión con el laminador eligiendo parámetros adecuados"],
  claves: ["modelado 3D", "fabricación aditiva", "STL", "laminador", "relleno", "soportes"],
  pregunta: {
    texto: "En la Estación Espacial Internacional, si se rompe una pieza no pueden ir a la ferretería. Desde 2014 tienen otra solución. ¿Cuál?",
    respuesta: "Una <mark>impresora 3D</mark>. Desde la Tierra les envían el archivo con el diseño y la imprimen allí, capa a capa. La impresión 3D permite <b>fabricar piezas a medida</b> en cualquier lugar: prótesis, repuestos, prototipos o maquetas.",
  },
  bloques: [
    {
      html: `<h3>Fabricación aditiva</h3><p>Las técnicas tradicionales son <b>sustractivas</b> (se quita material: tornear, fresar, cortar) o <b>conformadoras</b> (moldes). La impresión 3D es <b>aditiva</b>: construye el objeto <mark>añadiendo material capa a capa</mark>, a partir de un modelo digital. Así se pueden hacer formas huecas y complejas imposibles de otra manera y casi sin desperdiciar material. Se usa en medicina (prótesis, férulas), ingeniería, arquitectura, moda o alimentación.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fabricación sustractiva quita material de un bloque; la aditiva añade capas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="24" y="40" width="80" height="80" fill="var(--muted)" opacity=".3" stroke="var(--muted)" stroke-dasharray="4 3"/><path d="M44 120 V 70 Q 64 50 84 70 V 120 Z" fill="var(--pen)"/>
        ${Array.from({ length: 8 }, (_, i) => `<rect x="${150 + Math.abs(3.5 - i) * 2}" y="${120 - (i + 1) * 10}" width="${80 - Math.abs(3.5 - i) * 4}" height="9" rx="2" fill="var(--leaf)" opacity="${0.6 + i * 0.05}"/>`).join("")}
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="64" y="146" fill="var(--pen)">sustractiva</text><text x="64" y="162" font-size="10" fill="var(--muted)">se quita material</text><text x="190" y="146" fill="var(--leaf)">aditiva</text><text x="190" y="162" font-size="10" fill="var(--muted)">capa a capa</text></g>
      </svg>`,
    },
    {
      html: `<h3>Diseñar en 3D</h3><p>Primero se crea un <b>modelo 3D</b> en el ordenador. Con programas sencillos como <b>Tinkercad</b> se combinan <mark>formas básicas</mark> (cubos, cilindros, esferas) que se suman o se usan como «huecos» para restar. Programas más avanzados (FreeCAD, Fusion 360, Onshape) trabajan con <b>bocetos</b> 2D que se extruyen o revolucionan. Hay que pensar en las <b>medidas reales</b> en milímetros y en cómo se va a imprimir.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un cubo menos un cilindro hueco da un cubo con un agujero">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g stroke="var(--ink)" stroke-width="1.5">
          <path d="M20 80 L 40 70 H 80 L 60 80 Z" fill="var(--pen)" opacity=".5"/><path d="M20 80 H 60 V 120 H 20 Z" fill="var(--pen)"/><path d="M60 80 L 80 70 V 110 L 60 120 Z" fill="var(--pen)" opacity=".7"/>
          <ellipse cx="124" cy="74" rx="16" ry="6" fill="var(--muted)" opacity=".3" stroke-dasharray="3 2"/><path d="M108 74 V 116 M140 74 V 116" fill="none" stroke-dasharray="3 2"/><ellipse cx="124" cy="116" rx="16" ry="6" fill="none" stroke-dasharray="3 2"/>
          <path d="M180 80 L 200 70 H 240 L 220 80 Z" fill="var(--leaf)" opacity=".5"/><path d="M180 80 H 220 V 120 H 180 Z" fill="var(--leaf)"/><path d="M220 80 L 240 70 V 110 L 220 120 Z" fill="var(--leaf)" opacity=".7"/>
          <ellipse cx="210" cy="75" rx="10" ry="4" fill="var(--ink)"/>
        </g>
        <g ${F} font-size="20" font-weight="700" fill="var(--muted)"><text x="88" y="102">−</text><text x="152" y="102">=</text></g>
        <g ${F} font-size="10" font-weight="700" text-anchor="middle" fill="var(--ink)"><text x="50" y="144">sólido</text><text x="124" y="144">hueco</text><text x="210" y="144">pieza</text></g>
      </svg>`,
    },
    {
      html: `<h3>Cómo funciona una impresora FDM</h3><p>La tecnología más común es la <b>FDM</b> (modelado por deposición fundida). Una bobina de <b>filamento</b> de plástico entra en el <b>extrusor</b>, que lo calienta en una boquilla (unos 200 °C) y lo deposita como un hilo fino sobre la <b>cama</b>. Motores paso a paso mueven la boquilla en los ejes X e Y para dibujar cada capa y suben (eje Z) para empezar la siguiente. Existen otras técnicas: <b>resina</b> endurecida con luz (SLA) o <b>polvo</b> fundido con láser (SLS).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Impresora 3D FDM: bobina de filamento, extrusor con boquilla caliente, pieza y cama con ejes X, Y y Z">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M30 150 V 20 H 200 V 150" fill="none" stroke="var(--ink)" stroke-width="4"/>
        <circle cx="226" cy="40" r="20" fill="none" stroke="var(--red)" stroke-width="8"/><path d="M220 58 Q 180 70 130 72" fill="none" stroke="var(--red)" stroke-width="2"/>
        <path d="M30 60 H 200" stroke="var(--muted)" stroke-width="3"/><rect x="112" y="56" width="36" height="30" rx="4" fill="var(--pen)"/><path d="M124 86 L 130 96 L 136 86 Z" fill="var(--sun)"/>
        <rect x="70" y="140" width="120" height="8" fill="var(--muted)"/>${[0, 1, 2, 3].map((i) => `<rect x="${110 + i}" y="${132 - i * 8}" width="${40 - 2 * i}" height="7" fill="var(--leaf)"/>`).join("")}
        <g ${F} font-size="10" font-weight="700"><text x="206" y="82" fill="var(--red)">filamento</text><text x="58" y="80" fill="var(--pen)">extrusor</text><text x="70" y="166" fill="var(--muted)">cama caliente</text><text x="38" y="54" fill="var(--ink)">X · Y · Z</text></g>
      </svg>`,
    },
    {
      html: `<h3>Del modelo a la impresora: el laminador</h3><p>El modelo se exporta en formato <b>STL</b> (una malla de triángulos) y se abre en un <b>laminador</b> o <i>slicer</i> (Cura, PrusaSlicer). Este programa <mark>corta el objeto en capas</mark> y genera el <b>código G</b>: las órdenes de movimiento para la impresora. Hay que elegir parámetros: <b>altura de capa</b> (0,2 mm es habitual; más fina = más detalle y más tiempo), <b>relleno</b> interior (10-20 % para piezas normales), temperatura y <mark>soportes</mark> para las partes en voladizo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pieza cortada en capas con relleno interior en rejilla y soportes bajo un voladizo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M40 140 V 50 H 160 V 80 H 100 V 140 Z" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/>
        <g stroke="var(--pen)" stroke-width="1" opacity=".5">${Array.from({ length: 8 }, (_, i) => `<path d="M${46 + i * 7} 56 L ${46 + i * 7 + 40} 136"/><path d="M${94 - i * 7} 56 L ${54 - i * 7} 136"/>`).join("")}</g>
        <rect x="40" y="50" width="60" height="90" fill="none" stroke="var(--pen)" stroke-width="3"/>
        ${[110, 122, 134, 146].map((x) => `<path d="M${x} 82 V 140" stroke="var(--sun)" stroke-width="3" stroke-dasharray="4 2"/>`).join("")}
        <path d="M20 140 H 200" stroke="var(--ink)" stroke-width="3"/>
        <g ${F} font-size="10" font-weight="700"><text x="168" y="64" fill="var(--pen)">voladizo</text><text x="160" y="118" fill="var(--sun)">soportes</text><text x="44" y="164" fill="var(--pen)">relleno en rejilla</text></g>
      </svg>`,
    },
    {
      html: `<h3>Materiales y buenas prácticas</h3><p>El filamento más usado en los institutos es el <b>PLA</b>: se fabrica a partir de almidón de maíz, imprime fácil a baja temperatura y es <mark>biodegradable en condiciones industriales</mark>. El <b>PETG</b> es más resistente y el <b>TPU</b>, flexible. Buenas prácticas: orientar la pieza para necesitar pocos soportes, nivelar la cama, no tocar la boquilla caliente, ventilar el aula, imprimir solo lo necesario y <b>reciclar</b> los restos. Y respetar las licencias de los modelos descargados de repositorios.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres bobinas de filamento: PLA, PETG y TPU con sus características">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["PLA", "fácil · 200 °C", "var(--leaf)"], ["PETG", "resistente", "var(--pen)"], ["TPU", "flexible", "var(--red)"]].map(([n, d, c], i) => `<circle cx="${50 + i * 80}" cy="76" r="34" fill="none" stroke="${c}" stroke-width="16"/><circle cx="${50 + i * 80}" cy="76" r="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><text x="${50 + i * 80}" y="134" text-anchor="middle" font-size="14" font-weight="700" fill="${c}" ${F}>${n}</text><text x="${50 + i * 80}" y="152" text-anchor="middle" font-size="10" fill="var(--ink)" ${F}>${d}</text>`).join("")}
      </svg>`,
    },
  ],
  figura: {
    titulo: "De la idea a la pieza",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Cuatro pasos: diseñar en 3D, exportar STL, laminar en código G e imprimir">
      <defs>${flecha("i3", "var(--muted)")}</defs>
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["1", "Diseñar", "Tinkercad, FreeCAD", "var(--pen)"], ["2", "Exportar", "archivo .STL", "var(--inf)"], ["3", "Laminar", "capas → código G", "var(--sun)"], ["4", "Imprimir", "capa a capa", "var(--leaf)"]]
        .map(([n, t, d, c], i) => `<rect x="${16 + i * 156}" y="30" width="138" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <circle cx="${85 + i * 156}" cy="66" r="18" fill="${c}"/><text x="${85 + i * 156}" y="73" text-anchor="middle" font-size="18" font-weight="700" fill="#fff" ${D}>${n}</text>
          <text x="${85 + i * 156}" y="122" text-anchor="middle" font-size="20" font-weight="700" fill="${c}" ${D}>${t}</text>
          <text x="${85 + i * 156}" y="156" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${d}</text>
          ${i < 3 ? `<path d="M${156 + i * 156} 110 H ${170 + i * 156}" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#i3)"/>` : ""}`).join("")}
    </svg>`,
  },
  video: { id: "y5p8kzYt8Ig", titulo: "Impresoras 3D: funcionamiento, usos y precios", canal: "Tecnonauta", vistas: 4090931, megusta: 0, busqueda: "impresión 3D cómo funciona" },
  quiz: [
    { q: "¿Por qué la impresión 3D se llama fabricación aditiva?", o: ["Porque añade material capa a capa", "Porque suma piezas con tornillos", "Porque añade colores"], a: 0, e: "Construye el objeto depositando capas, en lugar de quitar material." },
    { q: "¿Qué formato de archivo se usa normalmente para enviar un modelo al laminador?", o: ["JPG", "STL", "MP3"], a: 1, e: "STL describe la superficie del objeto con triángulos." },
    { q: "¿Qué hace el laminador (slicer)?", o: ["Calienta el filamento", "Corta el modelo en capas y genera el código G", "Diseña la pieza"], a: 1, e: "Convierte el modelo en instrucciones de movimiento para la impresora." },
    { q: "¿Para qué sirven los soportes?", o: ["Para decorar la pieza", "Para sostener las partes en voladizo mientras se imprimen", "Para enfriar la boquilla"], a: 1, e: "El plástico no puede depositarse en el aire; luego se retiran." },
    { q: "¿Qué filamento es el más usado en los institutos por ser fácil de imprimir?", o: ["PLA", "TPU", "Acero"], a: 0, e: "Imprime a baja temperatura y procede de fuentes renovables como el maíz." },
  ],
  examen: [
    { q: "Si reduces la altura de capa de 0,3 mm a 0,1 mm, la impresión…", o: ["tiene más detalle pero tarda más", "tarda menos", "no cambia"], a: 0, e: "Hacen falta el triple de capas para la misma altura." },
    { q: "Un relleno del 15 % significa que…", o: ["la pieza es hueca del todo", "el interior se rellena con una estructura que ocupa un 15 %", "se imprime el 15 % de la pieza"], a: 1, e: "Ahorra material y tiempo manteniendo resistencia suficiente." },
    { q: "En la tecnología FDM, el plástico se funde en…", o: ["la cama", "la boquilla del extrusor", "la bobina"], a: 1, e: "La boquilla (hotend) lo calienta a unos 200 °C y lo deposita." },
  ],
  feynman: ["La diferencia entre fabricación sustractiva y aditiva", "Cómo se diseña una pieza con formas básicas y huecos", "Las partes de una impresora FDM", "Qué hace el laminador y qué parámetros se eligen", "Qué materiales se usan y qué buenas prácticas seguir"],
  mapa: mapa("IMPRESIÓN 3D", "var(--eso)", [
    ["Diseño", "formas básicas · huecos · mm", "var(--pen)"],
    ["Archivo", "STL → laminador → código G", "var(--sun)"],
    ["Impresora FDM", "filamento · extrusor · cama", "var(--red)"],
    ["Parámetros", "capa · relleno · soportes", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["¿Qué es la fabricación aditiva?", "Fabricar un objeto añadiendo material capa a capa a partir de un modelo digital."],
    ["¿Qué es un archivo STL?", "Un formato que describe la superficie de un modelo 3D con una malla de triángulos."],
    ["¿Qué es el laminador?", "El programa que corta el modelo en capas y genera el código G para la impresora."],
    ["¿Qué significa FDM?", "Modelado por deposición fundida: se funde un filamento y se deposita capa a capa."],
    ["¿Qué es el relleno en impresión 3D?", "La estructura interior de la pieza, expresada en porcentaje."],
  ],
  familias: ["Cread una cuenta gratuita en Tinkercad y diseñad juntos un llavero con vuestras iniciales.", "Buscad en internet prótesis impresas en 3D y comentad cómo cambian la vida de las personas.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Diseño asistido por ordenador y fabricación digital: modelado 3D, impresión 3D y su aplicación a la resolución de problemas (RD 217/2022, Tecnología 4º).",
    ideas: ["Reto: diseñar un soporte de móvil que cumpla medidas y no necesite soportes.", "Comparar el tiempo y el material de una pieza con distintas alturas de capa y rellenos.", "Proyecto solidario de piezas útiles para el centro (organizadores, ganchos, recambios)."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Impresión 3D, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Impresi%C3%B3n_3D" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Modelar piezas con operaciones de sólidos y huecos en un programa de diseño 3D", "Calcular el tiempo, el material y el coste aproximado de una impresión"],
  tras: {
    "Diseñar en 3D": [
      { html: `<h3>Modelar con Tinkercad paso a paso</h3><p><b>Tinkercad</b> es un programa gratuito que funciona en el navegador y es ideal para empezar. Se trabaja sobre un <b>plano de trabajo</b> cuadriculado en milímetros. Se arrastran <b>formas básicas</b> (caja, cilindro, esfera, cono, texto) y se ajusta su tamaño con los tiradores o escribiendo las medidas exactas. Cada forma puede ser <b>sólida</b> o <b>hueco</b>. Al <mark>agrupar</mark> un sólido con un hueco, el hueco «resta» su volumen: así se hacen agujeros, ranuras o letras grabadas. La herramienta <b>alinear</b> centra piezas entre sí y la de <b>copiar y duplicar</b> repite elementos a la misma distancia. Al terminar se exporta el modelo en formato <b>STL</b>. Programas más avanzados son FreeCAD, Fusion 360 u OnShape.</p>`, video: { id: "gOs6Mdj7y_4", titulo: "TinkerCAD: tutorial para principiantes en 9 minutos", canal: "Skills Factory", vistas: 1805833 } },
      { html: `<h3>Diseñar para imprimir</h3><p>No todo lo que se modela se puede imprimir bien. Unas reglas prácticas: apoyar la pieza sobre su <b>cara más grande y plana</b>; evitar <b>voladizos</b> de más de 45° o añadir soportes; dejar paredes de al menos <b>1-2 mm</b> de grosor; y, si dos piezas deben encajar, dejar una <mark>holgura</mark> de unos 0,2-0,3 mm, porque el plástico se dilata un poco. Los textos y detalles muy finos (de menos de 1 mm) se pierden. Las piezas grandes o con formas complicadas se pueden dividir en partes que se imprimen por separado y se pegan después. Un buen diseño ahorra material, tiempo y fallos.</p>` },
    ],
    "Cómo funciona una impresora FDM": [
      { html: `<h3>Otras tecnologías de fabricación aditiva</h3><p>Además de la FDM, hay otras técnicas. La <b>estereolitografía</b> (SLA) y sus variantes usan una <b>resina líquida</b> que se endurece con luz ultravioleta capa a capa: consiguen detalles finísimos y se usan en joyería, odontología y miniaturas, aunque la resina es tóxica antes de curarse y hay que manejarla con guantes. El <b>sinterizado selectivo por láser</b> (SLS) funde con un láser un <b>polvo</b> de plástico o de metal: fabrica piezas resistentes sin necesidad de soportes y se usa en la industria aeronáutica y en prótesis médicas. También existen impresoras de <mark>hormigón</mark>, que ya construyen casas, y bioimpresoras que depositan células para crear tejidos.</p>`, video: { id: "f6KzjUcSPBI", titulo: "¿Qué es la impresión 3D? Tipos de impresoras, técnicas y materiales", canal: "Arrowti3D", vistas: 37767 } },
    ],
    "Materiales y buenas prácticas": [
      { html: `<h3>Aplicaciones y propiedad intelectual</h3><p>La impresión 3D sirve para hacer <b>prototipos</b> rápidos antes de fabricar en serie, <b>piezas de repuesto</b> que ya no se venden, <b>prótesis</b> y férulas a medida, herramientas y utillajes para las fábricas, y piezas personalizadas. En repositorios como Thingiverse o Printables hay millones de modelos compartidos. Muchos tienen licencias <b>Creative Commons</b>, pero hay que <mark>respetar sus condiciones</mark>: citar al autor, no venderlos si la licencia es no comercial, etc. Imprimir copias de objetos protegidos por patentes o marcas registradas, o piezas peligrosas, puede ser ilegal. Compartir tus propios diseños con una licencia libre ayuda a otros a aprender y mejorar.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Una pieza necesita 40 g de PLA. Una bobina de 1 kg cuesta 20 €. ¿Cuánto cuesta el material de la pieza?", pasos: ["Precio por gramo: 20 € / 1.000 g = 0,02 €/g.", "Coste: 40 · 0,02 = 0,80 €."], resultado: "0,80 € de material." },
    { enunciado: "Una impresora de 120 W tarda 3 horas en imprimir una pieza. ¿Cuánta energía consume y cuánto cuesta a 0,15 €/kWh?", pasos: ["Energía: 0,12 kW · 3 h = 0,36 kWh.", "Coste: 0,36 · 0,15 = 0,054 €."], resultado: "0,36 kWh, unos 5 céntimos." },
    { enunciado: "Diseña en Tinkercad un llavero rectangular de 50 × 25 × 3 mm con un agujero de 5 mm de diámetro en una esquina.", pasos: ["Arrastra una caja sólida y ponle 50 × 25 × 3 mm.", "Arrastra un cilindro, conviértelo en hueco y ponle 5 × 5 mm de base y más de 3 mm de alto para que atraviese.", "Colócalo a unos 5 mm de los bordes de una esquina.", "Selecciona los dos objetos y agrúpalos: el hueco perfora la caja.", "Exporta en STL."], resultado: "Un llavero con su agujero, listo para laminar." },
  ],
  errores: [
    "Diseñar paredes demasiado finas, que se rompen o no se imprimen.",
    "Olvidar la holgura en piezas que deben encajar: salen demasiado apretadas.",
    "Imprimir una pieza apoyada sobre su lado más pequeño, con voladizos sin soporte.",
    "Mandar a imprimir el archivo STL directamente: primero hay que laminarlo para obtener el G-code.",
    "Descargar y vender un modelo con licencia no comercial.",
  ],
  ejercicios: [
    { q: "Explica la diferencia entre fabricación aditiva y sustractiva con un ejemplo de cada una.", sol: "La aditiva construye la pieza añadiendo capas (impresión 3D); la sustractiva la obtiene quitando material de un bloque (torno o fresadora)." },
    { q: "¿Qué hace el extrusor de una impresora FDM?", sol: "Empuja el filamento hacia una boquilla caliente que lo funde y lo deposita en hilos finos." },
    { q: "¿Qué formatos de archivo intervienen desde el diseño hasta la impresora?", sol: "El diseño se exporta en STL (malla de triángulos); el laminador lo convierte en G-code, las instrucciones de movimiento para la impresora." },
    { q: "¿Qué es el relleno y por qué no se imprime macizo?", sol: "La estructura interior de la pieza (en rejilla, panal…). Con un 15-20 % suele bastar: ahorra material y tiempo sin perder mucha resistencia." },
    { q: "¿Cuándo hacen falta soportes?", sol: "Cuando hay partes en voladizo con más de unos 45° de inclinación, que quedarían en el aire." },
    { q: "Compara PLA y PETG.", sol: "El PLA es fácil de imprimir y de origen vegetal, pero se ablanda con el calor. El PETG es más resistente y aguanta mejor el calor, aunque es algo más difícil de imprimir." },
    { q: "Una pieza usa 120 g de filamento a 25 €/kg. ¿Cuánto cuesta el material?", sol: "120 · 0,025 = 3 €." },
    { q: "¿Qué tecnología elegirías para unas figuras con detalles muy finos? ¿Y para piezas de metal?", sol: "Para detalles finos, resina (SLA). Para metal, sinterizado o fusión por láser de polvo metálico (SLS/SLM)." },
    { q: "Indica tres aplicaciones médicas de la impresión 3D.", sol: "Prótesis a medida, férulas y modelos de órganos para planificar operaciones (también implantes dentales)." },
    { q: "Descargas un modelo con licencia CC BY-NC. ¿Qué puedes y qué no puedes hacer?", sol: "Puedes imprimirlo, modificarlo y compartirlo citando al autor; no puedes venderlo ni usarlo con fines comerciales." },
  ],
  quiz: [
    { q: "En Tinkercad, para hacer un agujero se agrupa un sólido con…", o: ["otro sólido", "un hueco", "un texto"], a: 1, e: "El hueco resta volumen." },
    { q: "Para que dos piezas impresas encajen se deja una holgura de unos…", o: ["0,2-0,3 mm", "5 mm", "2 cm"], a: 0, e: "El plástico se dilata un poco." },
    { q: "La tecnología SLA usa…", o: ["filamento", "resina y luz ultravioleta", "polvo metálico"], a: 1, e: "Detalles muy finos." },
    { q: "El archivo que entiende la impresora es el…", o: ["STL", "G-code", "PDF"], a: 1, e: "Lo genera el laminador." },
    { q: "Un modelo con licencia no comercial…", o: ["se puede vender", "no se puede vender", "no se puede imprimir"], a: 1, e: "Hay que respetar sus condiciones." },
  ],
  tarjetas: [
    ["Sólido y hueco", "En Tinkercad, el hueco agrupado con un sólido resta su volumen."],
    ["Holgura", "Pequeño espacio (0,2-0,3 mm) para que dos piezas encajen."],
    ["SLA y SLS", "SLA: resina con luz UV. SLS: polvo fundido con láser."],
  ],
});
