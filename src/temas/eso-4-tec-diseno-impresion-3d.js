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

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 110,
  revisado: "2026-11-13",
  lectura: {
    titulo: "Una mano impresa",
    html: `<p>En 2013, un carpintero sudafricano que había perdido varios dedos en un accidente se puso en contacto con un artista de efectos especiales de Estados Unidos. Juntos diseñaron una mano mecánica sencilla, con dedos que se cierran al doblar la muñeca gracias a unos hilos que hacen de tendones. Decidieron publicar el diseño en internet con una licencia libre para que cualquiera pudiera imprimirlo. Así nació una red mundial de voluntarios que, con impresoras 3D domésticas y escolares, ha fabricado miles de manos y brazos para niños y niñas de todo el mundo por una fracción del precio de una prótesis comercial.</p>
      <p>Esta historia resume lo que hace especial a la impresión 3D: un diseño digital puede viajar por internet y convertirse en un objeto físico en cualquier lugar, adaptado a cada persona. En este tema aprenderás a diseñar piezas en 3D, desde las formas básicas de Tinkercad hasta el diseño paramétrico, a prepararlas en el laminador, a elegir materiales y parámetros, a resolver los fallos típicos y a acabar las piezas. También verás cómo se escanean objetos reales, qué dice la ley sobre copiar diseños y qué papel puede tener esta tecnología en una fabricación más sostenible.</p>`,
  },
  svgs: {
    "Modelar con Tinkercad paso a paso": L.flujo("Pasos para modelar una pieza en Tinkercad", ["Arrastrar formas básicas", "Ajustar medidas en mm", "Añadir huecos", "Alinear las piezas", "Agrupar y exportar STL"], { t: "Tinkercad paso a paso" }),
    "Diseñar para imprimir": L.cajas("Reglas de diseño para imprimir bien", [["Base plana", "cara grande|sobre la cama"], ["Voladizos", "menos de 45°|o soportes"], ["Paredes", "al menos|1,2 mm"], ["Puentes", "cortos, de|pocos cm"]], { t: "Diseñar para imprimir" }),
    "Otras tecnologías de fabricación aditiva": L.rejilla("Comparación de tecnologías de impresión 3D", ["Tecnología", "Material", "Uso"], [["FDM", "filamento", "prototipos"], ["SLA", "resina + UV", "detalle fino"], ["SLS", "polvo + láser", "piezas técnicas"], ["Metal", "polvo metálico", "industria"]], { t: "Tecnologías aditivas" }),
    "Aplicaciones y propiedad intelectual": L.estrella("Aplicaciones de la impresión 3D", "Impresión 3D", ["prototipos", "repuestos", "medicina", "educación", "arquitectura", "arte"]),
  },
  tras: {
    "Diseñar en 3D": [
      {
        html: `<h3>Diseño paramétrico y croquis</h3><p>Tinkercad combina formas ya hechas, pero los programas de CAD profesionales, como <b>FreeCAD</b>, <b>Onshape</b> o <b>Fusion</b>, trabajan de otra manera: el <b>diseño paramétrico</b>. Se empieza dibujando un <b>croquis</b> en 2D sobre un plano (rectángulos, círculos, líneas) y se le ponen <mark>restricciones</mark>: cotas (esta línea mide 40 mm), relaciones geométricas (estas dos líneas son paralelas, este círculo es tangente) y simetrías. Después, una <b>operación</b> convierte el croquis en sólido: la <b>extrusión</b> lo estira en altura, la <b>revolución</b> lo hace girar alrededor de un eje (perfecto para vasos o ruedas) y el <b>vaciado</b> deja la pieza hueca.</p>
          <p>La gran ventaja es que el programa guarda el <b>historial</b> de operaciones y las medidas como <b>parámetros</b>. Si después quieres que la caja mida 50 mm en lugar de 40, cambias el número y todo el modelo se recalcula: agujeros, redondeos y tapas se ajustan solos. Por eso la industria diseña así. Además, estos programas permiten crear <b>ensamblajes</b> de varias piezas, comprobar que no chocan y generar automáticamente los <b>planos</b> con vistas y cotas. OpenSCAD va más allá: el modelo se describe escribiendo código, y las medidas son variables de un programa.</p>`,
        svg: L.flujo("Proceso de diseño paramétrico", ["Croquis 2D en un plano", "Restricciones y cotas", "Extrusión o revolución", "Redondeos y agujeros", "Cambiar un parámetro: se recalcula"], { t: "Diseño paramétrico" }),
      },
    ],
    "Diseñar para imprimir": [
      {
        html: `<h3>Encajes, uniones y tolerancias</h3><p>Muchos proyectos tienen varias piezas que deben unirse: una caja con su tapa, un eje que gira dentro de un agujero, un mecanismo con engranajes. La impresora no es perfectamente exacta: el plástico se dilata al salir caliente y se contrae al enfriarse, y los agujeros suelen salir algo más pequeños de lo diseñado. Por eso hay que prever una <b>holgura</b> o <mark>tolerancia</mark>: un espacio entre las piezas de unos <b>0,2-0,3 mm</b> por lado para que encajen a presión suave, y algo más (0,4-0,5 mm) si deben deslizar o girar.</p>
          <p>Hay varias formas de unir piezas impresas. Los <b>encajes a presión</b> (<i>snap-fit</i>) usan una pestaña flexible que se dobla y se engancha. Las <b>colas de milano</b> deslizan una pieza dentro de otra. Para atornillar, se diseña un agujero algo menor que el tornillo o se deja hueco para una <b>tuerca</b> hexagonal, o se insertan <b>insertos roscados</b> de latón con el soldador. También se pueden usar imanes, pasadores o pegamento. Una buena práctica es imprimir primero una <b>pieza de prueba</b> pequeña con varios agujeros de distintas medidas para conocer cómo se comporta tu impresora antes de imprimir el proyecto completo.</p>`,
        svg: L.comparar("Holgura recomendada según el tipo de unión", ["Encaje fijo", ["0,2-0,3 mm", "a presión", "tapas y cajas", "no se mueve"]], ["Encaje móvil", ["0,4-0,5 mm", "desliza o gira", "ejes y bisagras", "con juego"]]),
      },
    ],
    "Del modelo a la impresora: el laminador": [
      {
        html: `<h3>Problemas frecuentes y cómo resolverlos</h3><p>Imprimir en 3D requiere paciencia: muchas piezas fallan, sobre todo al principio. La mayoría de problemas tiene una causa conocida. El más común es que la <b>primera capa no se pega</b> a la cama: suele deberse a una cama mal nivelada, sucia (con grasa de los dedos) o a una boquilla demasiado alejada; se arregla nivelando, limpiando con alcohol y usando un <b>borde</b> (<i>brim</i>) o una <b>balsa</b> (<i>raft</i>). El <b>warping</b> es la deformación de las esquinas, que se levantan al enfriarse el plástico; aparece más en ABS y se reduce con cama caliente y sin corrientes de aire.</p>
          <p>Los <b>hilos</b> (<i>stringing</i>), finos filamentos entre partes de la pieza, se corrigen ajustando la <mark>retracción</mark> y bajando la temperatura. Si la pieza tiene huecos o capas débiles, puede haber <b>subextrusión</b>: boquilla parcialmente atascada, filamento húmedo o temperatura baja. Si las capas se desplazan, las correas pueden estar flojas o la boquilla chocó con la pieza. Una buena costumbre es vigilar las primeras capas, guardar un registro de los parámetros que funcionan con cada filamento y guardar el filamento en un lugar seco, porque la humedad lo estropea.</p>`,
        svg: L.rejilla("Problemas frecuentes en impresión 3D, causa y solución", ["Problema", "Causa", "Solución"], [["No se pega", "cama mal nivelada", "nivelar, limpiar"], ["Warping", "enfriamiento", "cama caliente"], ["Hilos", "sin retracción", "retraer, bajar T"], ["Huecos", "subextrusión", "limpiar boquilla"]], { t: "Fallos típicos" }),
      },
    ],
    "Materiales y buenas prácticas": [
      {
        html: `<h3>Postprocesado y acabado</h3><p>Una pieza recién impresa casi nunca está terminada. El primer paso es <b>retirar los soportes</b> con cuidado, con alicates o una espátula, y quitar el borde o la balsa. Las marcas que dejan se eliminan con una <b>cuchilla</b> y <b>lija</b>, empezando por un grano grueso (120-220) y terminando con uno fino (400-800), mejor en húmedo para que el plástico no se caliente. Las líneas de las capas se notan menos si se aplica una <b>imprimación</b> de relleno y se vuelve a lijar antes de <b>pintar</b> con acrílico o espray.</p>
          <p>Hay otros acabados: las piezas de PLA se pueden unir con pegamento de cianoacrilato; las de ABS se alisan con vapor de acetona, un proceso que solo debe hacerse con supervisión y ventilación porque es inflamable y tóxico; las de resina SLA deben lavarse en alcohol isopropílico y curarse con luz ultravioleta. Al postprocesar hay que usar <mark>equipos de protección</mark>: gafas, guantes de nitrilo con la resina y mascarilla al lijar. Un buen acabado convierte un prototipo en un producto que se puede presentar, y forma parte del proceso de diseño: conviene pensar desde el principio qué caras se verán.</p>`,
        svg: L.flujo("Pasos del postprocesado de una pieza impresa", ["Retirar soportes y borde", "Repasar con cuchilla", "Lijar de grueso a fino", "Imprimación y lijado", "Pintar y proteger"], { t: "Acabado de una pieza" }),
      },
    ],
    "Aplicaciones y propiedad intelectual": [
      {
        html: `<h3>Escaneado 3D e ingeniería inversa</h3><p>No siempre se parte de cero: a veces se quiere copiar o medir un objeto que ya existe. El <b>escáner 3D</b> captura la forma de un objeto real y genera una <b>nube de puntos</b> que se convierte en una malla de triángulos. Hay escáneres de <b>luz estructurada</b>, que proyectan un patrón de franjas y observan cómo se deforma; escáneres <b>láser</b>, muy precisos; y la <mark>fotogrametría</mark>, que reconstruye el modelo a partir de decenas de fotos tomadas desde distintos ángulos, incluso con un móvil.</p>
          <p>El resultado suele necesitar limpieza: tapar agujeros, eliminar el fondo y reducir el número de triángulos. La <b>ingeniería inversa</b> consiste en analizar una pieza existente, medirla con el <b>calibre</b> o escanearla y volver a modelarla en CAD para fabricar un repuesto, mejorarla o adaptarla. Se usa para recuperar piezas de máquinas antiguas, en museos para digitalizar esculturas y fósiles, en medicina para crear férulas a partir del escaneo del brazo del paciente y en el diseño de calzado y ropa a medida. Recuerda que copiar objetos protegidos por patentes o derechos de autor puede no estar permitido.</p>`,
        svg: L.flujo("Del objeto real al modelo imprimible", ["Objeto real", "Escáner o fotogrametría", "Nube de puntos y malla", "Limpiar y reparar", "Modelo listo para imprimir"], { t: "Escaneado 3D" }),
      },
      {
        html: `<h3>Impresión 3D, sostenibilidad y futuro</h3><p>La fabricación aditiva puede ser más sostenible que la tradicional: usa solo el material necesario (en el mecanizado se puede desperdiciar más de la mitad del bloque), permite fabricar <b>bajo demanda</b> y cerca del usuario, sin almacenes ni transporte, y alarga la vida de los aparatos al imprimir <b>repuestos</b> que ya no se venden. Además, un mismo equipo puede fabricar piezas muy distintas sin moldes, que son caros y solo compensan en grandes series. Las piezas con <b>estructuras aligeradas</b> y diseñadas por algoritmos de <mark>optimización topológica</mark>, con formas parecidas a huesos, pesan menos y ahorran combustible en aviones y coches.</p>
          <p>Pero también tiene problemas: muchas impresiones son pruebas fallidas o adornos que acaban en la basura, la mayoría de filamentos son plásticos derivados del petróleo y el PLA solo se composta en plantas industriales. Algunas soluciones son reciclar los restos para fabricar filamento nuevo, usar filamentos reciclados y diseñar con cuidado para fallar menos. El futuro de la tecnología es asombroso: se imprimen casas de hormigón en pocos días, puentes de acero, cohetes, alimentos y se investiga la <b>bioimpresión</b> de tejidos con células vivas. También se trabaja en la impresión 4D, con materiales que cambian de forma con el calor o la humedad.</p>`,
        svg: L.comparar("Ventajas e inconvenientes ambientales de la impresión 3D", ["Ventajas", ["poco desperdicio", "bajo demanda", "repuestos", "piezas ligeras"]], ["Inconvenientes", ["pruebas fallidas", "plásticos fósiles", "PLA industrial", "consumo eléctrico"]]),
      },
    ],
  },
  secciones: [6, 6, 3],
  niveles: "mbbbbmmmbm",
  ejercicios: [
    { nivel: "básico", q: "¿Qué es un croquis en un programa de CAD paramétrico?", sol: "Un dibujo 2D sobre un plano, con cotas y restricciones, que después se convierte en sólido con una operación como la extrusión." },
    { nivel: "básico", q: "Explica la diferencia entre extrusión y revolución.", sol: "La extrusión estira el croquis en una dirección (da altura a un perfil); la revolución lo hace girar alrededor de un eje (sirve para piezas redondas como vasos o ruedas)." },
    { nivel: "básico", q: "¿Qué holgura dejarías entre una caja y su tapa para que encaje a presión?", sol: "Unos 0,2-0,3 mm por lado." },
    { nivel: "básico", q: "¿Qué es el warping y cómo se evita?", sol: "La deformación de las esquinas de una pieza, que se levantan al enfriarse. Se evita con cama caliente, buena adhesión (brim) y sin corrientes de aire." },
    { nivel: "básico", q: "Enumera los pasos para lijar una pieza impresa.", sol: "Retirar soportes, repasar con cuchilla, lijar empezando con grano grueso (120-220) y acabar con fino (400-800), mejor en húmedo." },
    { nivel: "básico", q: "¿Qué es la fotogrametría?", sol: "Una técnica que reconstruye un modelo 3D a partir de muchas fotos de un objeto tomadas desde distintos ángulos." },
    { nivel: "básico", q: "Nombra tres ventajas ambientales de la impresión 3D.", sol: "Poco desperdicio de material, fabricación bajo demanda cerca del usuario y posibilidad de imprimir repuestos para alargar la vida de los aparatos." },
    { nivel: "medio", q: "¿Qué ventaja tiene el diseño paramétrico frente a combinar formas en Tinkercad?", sol: "Las medidas son parámetros y se guarda el historial: si cambias una cota, todo el modelo se recalcula automáticamente sin rehacerlo." },
    { nivel: "medio", q: "Diseñas un eje de 8 mm que debe girar dentro de un agujero. ¿Qué diámetro le das al agujero?", sol: "Unos 8,8-9 mm (holgura de 0,4-0,5 mm por lado), porque debe girar y los agujeros impresos suelen salir algo más pequeños." },
    { nivel: "medio", q: "Una pieza tiene muchos hilos finos entre sus torres. ¿Qué parámetros ajustarías?", sol: "Aumentar la retracción (distancia o velocidad) y bajar unos grados la temperatura de la boquilla; también secar el filamento si está húmedo." },
    { nivel: "medio", q: "La primera capa no se pega a la cama. Propón tres soluciones.", sol: "Nivelar la cama y ajustar la distancia de la boquilla, limpiar la cama con alcohol y añadir un borde (brim) o subir la temperatura de la cama." },
    { nivel: "medio", q: "Compara tres formas de unir dos piezas impresas.", sol: "Encaje a presión: rápido, sin piezas extra, pero puede romperse. Tornillo y tuerca: resistente y desmontable, necesita hueco para la tuerca. Pegamento: sencillo, pero la unión es permanente." },
    { nivel: "medio", q: "¿Qué precauciones de seguridad tomarías al postprocesar piezas de resina?", sol: "Guantes de nitrilo y gafas, ventilación, lavar con alcohol isopropílico lejos de llamas, curar con UV y no tirar resina líquida por el desagüe." },
    { nivel: "medio", q: "Explica qué es la ingeniería inversa con un ejemplo.", sol: "Analizar y medir un objeto existente para volver a modelarlo en CAD. Ejemplo: medir con el calibre la rueda rota de una persiana antigua, modelarla e imprimir un repuesto." },
    { nivel: "medio", q: "Una pieza mecanizada parte de un bloque de 500 g y queda en 180 g. ¿Qué porcentaje de material se desperdicia? ¿Y si se imprime usando 200 g con soportes?", sol: "Mecanizado: (500 − 180) / 500 = 64 % de desperdicio. Impresión: (200 − 180) / 200 = 10 %." },
    { nivel: "medio", q: "¿Por qué el PLA no es tan «ecológico» como parece?", sol: "Aunque procede de plantas, solo se composta en plantas industriales a alta temperatura; en un vertedero o en la naturaleza tarda muchísimo en degradarse." },
    { nivel: "avanzado", q: "Diseña con croquis y operaciones (sin dibujar) un vaso de 70 mm de diámetro, 90 mm de alto y 2 mm de pared.", sol: "Opción 1: croquis de un círculo de 70 mm, extrusión de 90 mm y vaciado de 2 mm dejando abierta la cara superior. Opción 2: croquis del perfil en L (pared de 2 mm y fondo de 2 mm) y revolución de 360° alrededor del eje central." },
    { nivel: "avanzado", q: "Imprimes una pieza de prueba con agujeros de 5,0, 5,2, 5,4 y 5,6 mm para un tornillo de 5 mm. Solo entra a presión en el de 5,4 y holgado en el de 5,6. ¿Qué conclusión sacas para tus diseños?", sol: "Tu impresora hace los agujeros unos 0,3-0,4 mm más pequeños; para un ajuste a presión debes diseñar con +0,4 mm y para que gire, +0,6 mm o más." },
    { nivel: "avanzado", q: "Una pieza de ABS se deforma en las esquinas y se agrieta entre capas. Explica las causas y propón un plan de mejora.", sol: "El ABS se contrae mucho al enfriarse; el aire frío provoca warping y mala unión entre capas. Plan: cama a 100 °C, cerramiento o caja que mantenga el calor, sin ventilador de capa, borde amplio y redondear esquinas en el diseño; o cambiar a PETG si no se necesita ABS." },
    { nivel: "avanzado", q: "Escribe en pseudocódigo (estilo OpenSCAD) un modelo paramétrico de una caja con variables para largo, ancho, alto y pared.", sol: "largo = 60; ancho = 40; alto = 30; pared = 2;\ndifference() {\n  cube([largo, ancho, alto]);\n  translate([pared, pared, pared])\n    cube([largo - 2*pared, ancho - 2*pared, alto]);\n}" },
    { nivel: "avanzado", q: "Planifica cómo digitalizar con fotogrametría una figura de cerámica de 20 cm.", sol: "Iluminación difusa sin sombras, fondo neutro, tomar 50-100 fotos en varias alturas girando alrededor (con solapamiento del 60-70 %), procesar en un programa de fotogrametría, limpiar y cerrar la malla, escalarla con una medida real y exportar STL." },
    { nivel: "avanzado", q: "Calcula el coste total de una pieza: 85 g de PLA a 22 €/kg, 4 horas a 150 W con electricidad a 0,18 €/kWh y un 20 % de piezas fallidas.", sol: "Material: 0,085 · 22 = 1,87 €. Energía: 0,15 · 4 = 0,6 kWh · 0,18 = 0,11 €. Subtotal: 1,98 €. Con un 20 % de fallos: 1,98 · 1,2 ≈ 2,38 €." },
    { nivel: "avanzado", q: "¿Qué es la optimización topológica y por qué interesa en aviones?", sol: "Un método en que un algoritmo elimina el material que no soporta esfuerzos y deja formas orgánicas parecidas a huesos. En aviones reduce el peso de las piezas manteniendo la resistencia, lo que ahorra combustible y emisiones; la impresión 3D permite fabricar esas formas complejas." },
    { nivel: "avanzado", q: "Debate: ¿debería una persona poder imprimir en casa repuestos de cualquier aparato? Considera derechos de autor, seguridad y sostenibilidad.", sol: "A favor: alarga la vida de los productos y reduce residuos, en línea con el derecho a reparar. En contra o con límites: algunas piezas están protegidas por patentes o diseños registrados, y piezas de seguridad (frenos, gas, juguetes infantiles) requieren materiales y certificaciones. Conclusión: repuestos sí, respetando licencias y sin piezas críticas para la seguridad." },
    { nivel: "avanzado", q: "Diseña un proceso para reciclar en el instituto los restos de impresión.", sol: "Separar los restos por material (PLA, PETG) y color, triturarlos, secarlos y fabricar filamento nuevo con una extrusora de reciclaje, o enviarlos a una empresa que los recicle. Registrar los kilos recuperados y reducir fallos imprimiendo piezas de prueba pequeñas." },
  ],
  ejemplos: [
    { enunciado: "Diseña con FreeCAD una arandela de 20 mm de diámetro exterior, 8 mm de agujero y 2 mm de grosor.", pasos: ["Crear un croquis en el plano XY.", "Dibujar dos círculos concéntricos y acotarlos: 20 mm y 8 mm.", "Restringir el centro de ambos al origen.", "Extruir (pad) el croquis 2 mm.", "Exportar la pieza como STL."], resultado: "Una arandela paramétrica: cambiando las cotas se obtiene cualquier tamaño." },
    { enunciado: "Calcula el diámetro del hueco para que una tuerca M3 quede encajada a presión en una pieza.", pasos: ["La tuerca M3 mide 5,5 mm entre caras planas.", "Se añade una holgura de 0,2-0,3 mm por lado: 5,5 + 0,5 = 6,0 mm.", "Se diseña un hueco hexagonal de 6,0 mm entre caras y 2,6 mm de profundidad (algo más que la tuerca)."], resultado: "Hueco hexagonal de 6,0 mm entre caras." },
    { enunciado: "Diagnostica una pieza con hilos finos entre dos torres y la superficie algo brillante y blanda.", pasos: ["Hilos y brillo indican plástico demasiado caliente y fluido.", "Bajar 5-10 °C la temperatura de la boquilla.", "Aumentar la retracción 1 mm.", "Imprimir una torre de temperatura para encontrar el valor óptimo."], resultado: "Temperatura más baja y más retracción." },
  ],
  errores: ["Diseñar un agujero con la medida exacta del tornillo o del eje: sale más pequeño y no encaja; hay que dejar holgura."],
  cuarta: ["Porque añade capas de pintura", "PNG", "Pinta la pieza", "Para pegar la pieza a la cama", "Madera maciza", "una imagen", "1 cm", "arcilla y horno", "MP4", "solo se puede regalar"],
  quiz: [
    { q: "En CAD paramétrico, el dibujo 2D con cotas se llama…", o: ["render", "croquis", "malla", "STL"], a: 1, e: "Después se extruye o revoluciona." },
    { q: "Para crear una rueda a partir de un perfil se usa…", o: ["la extrusión", "la revolución", "el texto", "el borrado"], a: 1, e: "Gira el perfil alrededor de un eje." },
    { q: "Para que un eje gire dentro de un agujero se deja una holgura de unos…", o: ["0,4-0,5 mm", "0 mm", "5 mm", "2 cm"], a: 0, e: "Algo más que para un encaje fijo." },
    { q: "El warping es…", o: ["un tipo de filamento", "la deformación de las esquinas al enfriarse", "una tecnología de impresión", "un formato de archivo"], a: 1, e: "Se reduce con cama caliente." },
    { q: "Los hilos finos entre partes de la pieza se corrigen con…", o: ["más relleno", "la retracción", "más velocidad de ventilador de la cama", "otra cama"], a: 1, e: "Y bajando la temperatura." },
    { q: "Un borde (brim) sirve para…", o: ["decorar", "mejorar la adhesión de la primera capa", "ahorrar plástico", "enfriar"], a: 1, e: "Aumenta la superficie de contacto." },
    { q: "Al lijar una pieza se empieza por…", o: ["grano fino", "grano grueso", "pintura", "acetona"], a: 1, e: "Y se termina con grano fino." },
    { q: "La fotogrametría crea un modelo 3D a partir de…", o: ["un único dibujo", "muchas fotos", "un sonido", "un texto"], a: 1, e: "Tomadas desde varios ángulos." },
    { q: "La optimización topológica sirve para…", o: ["aligerar piezas manteniendo la resistencia", "colorear modelos", "comprimir archivos", "nivelar la cama"], a: 0, e: "Deja formas parecidas a huesos." },
    { q: "La bioimpresión imprime…", o: ["papel", "tejidos con células vivas", "metal", "hormigón"], a: 1, e: "Es un campo de investigación." },
  ],
  cuartaEx: ["se imprime más rápido sin cambios", "la pieza tiene un 15 % de soportes", "el extremo de la bobina"],
  examen: [
    { q: "En diseño paramétrico, si cambias una cota…", o: ["el modelo se recalcula", "hay que empezar de cero", "se borra la pieza", "nada cambia"], a: 0, e: "Gracias al historial y los parámetros." },
    { q: "Un encaje a presión con pestaña flexible se llama…", o: ["snap-fit", "raft", "brim", "G-code"], a: 0, e: "La pestaña se dobla y engancha." },
    { q: "La subextrusión puede deberse a…", o: ["boquilla parcialmente atascada", "demasiado relleno", "cama fría", "un modelo grande"], a: 0, e: "También a filamento húmedo." },
    { q: "Las piezas de resina SLA se terminan…", o: ["lavándolas y curándolas con UV", "pintándolas sin lavar", "metiéndolas en agua fría", "con acetona"], a: 0, e: "Con guantes y ventilación." },
    { q: "Una ventaja ambiental de la impresión 3D es…", o: ["fabricar bajo demanda con poco desperdicio", "no consumir energía", "que todo es biodegradable", "que no falla nunca"], a: 0, e: "Aunque también tiene inconvenientes." },
  ],
  tarjetas: [
    ["Diseño paramétrico", "Medidas como parámetros e historial: cambias una cota y se recalcula."],
    ["Holgura", "0,2-0,3 mm para encaje fijo; 0,4-0,5 mm si gira o desliza."],
    ["Warping", "Esquinas que se levantan al enfriarse; cama caliente y brim."],
    ["Fotogrametría", "Modelo 3D a partir de muchas fotos."],
  ],
  glosario: [
    ["Fabricación aditiva", "Fabricación que construye el objeto añadiendo material capa a capa."],
    ["CAD", "Diseño asistido por ordenador."],
    ["Croquis", "Dibujo 2D con cotas y restricciones que sirve de base a un sólido."],
    ["Extrusión", "Operación que da altura a un croquis estirándolo en una dirección."],
    ["Revolución", "Operación que gira un perfil alrededor de un eje."],
    ["Diseño paramétrico", "Diseño en que las medidas son parámetros modificables."],
    ["STL", "Formato de archivo que describe la superficie con triángulos."],
    ["Laminador", "Programa que corta el modelo en capas y genera el código G."],
    ["Código G", "Instrucciones de movimiento y temperatura que entiende la impresora."],
    ["Extrusor", "Parte de la impresora que empuja y funde el filamento."],
    ["Relleno", "Estructura interior de la pieza, expresada en porcentaje."],
    ["Soportes", "Estructuras provisionales que sostienen los voladizos."],
    ["Holgura", "Espacio que se deja entre piezas para que encajen."],
    ["Warping", "Deformación de las esquinas al contraerse el plástico."],
    ["Retracción", "Retroceso del filamento para evitar hilos."],
    ["Fotogrametría", "Reconstrucción 3D a partir de fotografías."],
    ["Ingeniería inversa", "Análisis y modelado de un objeto existente para reproducirlo o mejorarlo."],
  ],
  situacion: {
    titulo: "Repuestos para alargar la vida",
    reto: "Muchos aparatos y muebles se tiran por una pieza rota pequeña. Cada equipo buscará un objeto de casa o del instituto con una pieza de plástico rota o perdida, la diseñará en CAD a partir de medidas reales e imprimirá un repuesto que funcione.",
    pasos: [
      "Elegid el objeto, fotografiad la pieza rota y comprobad que no es una pieza crítica para la seguridad.",
      "Medid la pieza con el calibre y haced un croquis acotado a mano.",
      "Modeladla en CAD paramétrico, previendo holguras y uniones.",
      "Preparad la impresión en el laminador (orientación, soportes, relleno) y calculad coste y tiempo.",
      "Imprimid, postprocesad, probad el encaje y repetid con mejoras si hace falta.",
      "Documentad el proceso y publicad el diseño con una licencia libre.",
    ],
    producto: "Un repuesto impreso que funciona y una ficha técnica con croquis, modelo, parámetros, coste e iteraciones.",
    evaluacion: ["El croquis y el modelo tienen medidas correctas y holguras adecuadas.", "Los parámetros de impresión están justificados y el coste calculado.", "La pieza encaja y funciona tras las iteraciones necesarias.", "La documentación es clara y respeta la propiedad intelectual."],
  },
  objetivos: ["Diseñar piezas con CAD paramétrico previendo holguras y uniones", "Resolver fallos de impresión, postprocesar piezas y valorar la sostenibilidad de la fabricación aditiva"],
  fuentes: [{ t: "FreeCAD: documentación oficial", url: "https://wiki.freecad.org/" }],
});
