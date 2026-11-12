// Geografía e Historia 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { rueda, dos, barras, filas, figCols } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "El mundo actual y la globalización",
  minutos: 35,
  objetivos: ["Definir la globalización y sus dimensiones económica, tecnológica y cultural", "Valorar sus ventajas e inconvenientes, incluidas las desigualdades", "Identificar los grandes retos del mundo actual y los Objetivos de Desarrollo Sostenible"],
  claves: ["globalización", "multinacional", "deslocalización", "desigualdad", "cambio climático", "ODS"],
  pregunta: {
    texto: "Tu móvil se diseñó en un país, sus piezas se fabricaron en otros cinco y se montó en un sexto. Lo compraste en una tienda española y ves en él vídeos de todo el planeta. ¿Cómo hemos llegado a esto?",
    respuesta: "Es la <mark>globalización</mark>: la creciente conexión de las economías, las sociedades y las culturas de todo el mundo, acelerada desde los años 90 por el fin de la Guerra Fría, el abaratamiento del transporte e Internet.",
  },
  bloques: [
    {
      html: `<h3>Qué es la globalización</h3><p>Tras la caída de la URSS (1991) el capitalismo se extendió por casi todo el planeta. La <mark>globalización</mark> tiene varias caras: <b>económica</b> (comercio y finanzas mundiales), <b>tecnológica</b> (Internet, móviles, contenedores), <b>política</b> (organismos como la ONU, la OMC o el G20), <b>cultural</b> (series, música y marcas compartidas) y <b>migratoria</b> (millones de personas viven fuera de su país).</p>`,
      svg: rueda("Dimensiones de la globalización", "GLOBALI-|ZACIÓN", [["economía", "var(--leaf)"], ["tecnología", "var(--pen)"], ["política", "var(--red)"], ["cultura", "var(--sun)"], ["migraciones", "var(--water)"], ["medio ambiente", "var(--muted)"]], "var(--soc, #c2410c)"),
    },
    {
      html: `<h3>Multinacionales y deslocalización</h3><p>Las <mark>empresas multinacionales</mark> tienen sede en un país y fábricas, oficinas y tiendas en muchos otros. Para reducir costes practican la <b>deslocalización</b>: trasladar la producción a países con salarios más bajos o menos normas. Así, Asia, sobre todo China, se ha convertido en la «fábrica del mundo». Esto abarata los productos, pero puede destruir empleo en los países de origen y fomentar malas condiciones laborales.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Recorrido de un móvil: diseño, piezas, montaje y venta en cuatro lugares">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <defs><marker id="glo-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>
        <path d="M60 50 C 120 20, 160 20, 200 50" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#glo-a)"/>
        <path d="M200 80 V 112" stroke="var(--ink)" stroke-width="2" marker-end="url(#glo-a)"/>
        <path d="M180 140 C 140 168, 110 168, 76 140" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#glo-a)"/>
        <g ${F} text-anchor="middle" font-size="11.5" font-weight="700">
          ${[[56, 64, "diseño", "EE. UU.", "var(--pen)"], [204, 64, "piezas", "Corea, Japón", "var(--leaf)"], [204, 128, "montaje", "China", "var(--red)"], [56, 128, "venta", "España", "var(--sun)"]].map(([x, y, t, l, c]) => `<rect x="${x - 46}" y="${y - 18}" width="92" height="36" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/><text x="${x}" y="${y - 2}" fill="${c}">${t}</text><text x="${x}" y="${y + 12}" fill="var(--ink)" font-weight="400" font-size="10.5">${l}</text>`).join("")}
        </g>
      </svg>`,
    },
    {
      html: `<h3>Un mundo desigual</h3><p>La globalización ha sacado de la pobreza extrema a cientos de millones de personas, sobre todo en Asia, pero las <mark>desigualdades</mark> siguen siendo enormes. Hay grandes diferencias entre el <b>Norte</b> rico (América del Norte, Europa, Japón, Australia) y el <b>Sur</b> (gran parte de África, Asia y América Latina), y también dentro de cada país. El <b>Índice de Desarrollo Humano</b> (IDH) mide la riqueza, la salud y la educación de cada país.</p>`,
      svg: barras("Esperanza de vida aproximada en años en distintos países", [["Japón", 84, "var(--pen)"], ["España", 84, "var(--leaf)"], ["Brasil", 76, "var(--sun)"], ["India", 72, "var(--inf)"], ["Nigeria", 54, "var(--red)"]], 90),
    },
    {
      html: `<h3>Los grandes retos</h3><p>El mundo actual afronta problemas que ningún país puede resolver solo: el <mark>cambio climático</mark> causado por los gases de efecto invernadero, las pandemias (como la COVID-19 en 2020), las migraciones forzadas por guerras y pobreza, el terrorismo internacional, nuevas guerras como la invasión rusa de Ucrania (2022) y los riesgos de la desinformación. Además, la inteligencia artificial está cambiando el trabajo y la comunicación.</p>`,
      svg: filas("Retos globales del siglo XXI", [["Clima", "calentamiento global", "var(--red)"], ["Salud", "pandemias como la COVID-19", "var(--leaf)"], ["Paz", "guerras y terrorismo", "var(--ink)"], ["Personas", "migraciones y refugiados", "var(--pen)"], ["Red", "desinformación e IA", "var(--sun)"]]),
    },
    {
      html: `<h3>La Agenda 2030</h3><p>En 2015 los países de la ONU aprobaron los 17 <mark>Objetivos de Desarrollo Sostenible</mark> (ODS) para 2030: acabar con la pobreza y el hambre, garantizar educación y salud de calidad, igualdad de género, energía limpia, acción por el clima, paz y justicia. Las personas también contribuyen con su consumo responsable, su voto y su participación ciudadana.</p>`,
      svg: dos("Globalización: ventajas e inconvenientes", ["Ventajas", ["más comercio", "productos baratos", "menos pobreza", "extrema en Asia", "intercambio cultural"], "var(--leaf)"], ["Riesgos", ["desigualdad", "deslocalización", "contaminación", "crisis que se", "contagian"], "var(--red)"]),
    },
  ],
  figura: {
    titulo: "Tres caras de la globalización",
    svg: figCols("Globalización económica, tecnológica y cultural con ejemplos", [
      ["Económica", ["comercio mundial", "multinacionales", "deslocalización", "OMC y FMI", "crisis de 2008"], "var(--leaf)"],
      ["Tecnológica", ["Internet (años 90)", "móviles y redes", "contenedores", "vuelos baratos", "inteligencia artificial"], "var(--pen)"],
      ["Cultural", ["series y música", "marcas globales", "inglés como lengua", "franca", "migraciones"], "var(--sun)"],
    ]),
  },
  video: { id: "fpkn6Eagl58", titulo: "La globalización: resumen. Globalización económica, política y cultural", canal: "Cuaderno de Historia", vistas: 1125668, megusta: 18511, busqueda: "globalización explicación" },
  quiz: [
    { q: "¿Qué es la globalización?", o: ["La conexión creciente de economías, sociedades y culturas de todo el mundo", "Un tipo de gobierno", "Una organización internacional"], a: 0, e: "Afecta a la economía, la tecnología, la política, la cultura y las migraciones." },
    { q: "La deslocalización consiste en…", o: ["trasladar la producción a países con costes más bajos", "cerrar todas las fábricas", "vender solo en el propio país"], a: 0, e: "Las multinacionales buscan salarios más bajos o menos normas para abaratar costes." },
    { q: "¿Qué mide el Índice de Desarrollo Humano?", o: ["Solo la riqueza", "Riqueza, salud y educación", "El número de habitantes"], a: 1, e: "Combina renta por habitante, esperanza de vida y años de escolarización." },
    { q: "¿Cuántos Objetivos de Desarrollo Sostenible aprobó la ONU en 2015?", o: ["8", "17", "30"], a: 1, e: "Los 17 ODS forman la Agenda 2030." },
    { q: "¿Qué hecho de 1991 aceleró la globalización?", o: ["La caída del muro de Berlín", "La disolución de la URSS y la extensión del capitalismo", "La creación de la ONU"], a: 1, e: "Con el fin de la Guerra Fría casi todo el mundo se integró en la economía de mercado." },
  ],
  examen: [
    { q: "Una empresa multinacional es…", o: ["una empresa con sede en un país y actividad en muchos otros", "una empresa pública", "una pequeña empresa familiar"], a: 0, e: "Apple, Inditex o Toyota son ejemplos de multinacionales." },
    { q: "¿Qué reto global causan los gases de efecto invernadero?", o: ["Las pandemias", "El cambio climático", "La deslocalización"], a: 1, e: "Su acumulación en la atmósfera calienta el planeta." },
    { q: "La división Norte-Sur se refiere a…", o: ["la diferencia de clima", "la desigualdad entre países ricos y pobres", "los hemisferios terrestres exactos"], a: 1, e: "No coincide exactamente con el ecuador: Australia está en el «Norte» rico." },
  ],
  feynman: ["Las dimensiones de la globalización con un ejemplo de cada una", "Qué es una multinacional y por qué deslocaliza", "Cómo se mide la desigualdad entre países", "Tres retos globales y qué son los ODS"],
  mapa: mapa("GLOBALIZACIÓN", "var(--soc, #c2410c)", [
    ["Qué es", "economía · tecnología · cultura", "var(--pen)"],
    ["Empresas", "multinacionales · deslocalización", "var(--leaf)"],
    ["Desigualdad", "Norte-Sur · IDH", "var(--red)"],
    ["Retos", "clima · pandemias · ODS", "var(--sun)"],
  ], 270),
  tarjetas: [
    ["Globalización", "Interconexión económica, tecnológica, política y cultural a escala mundial."],
    ["Deslocalización", "Trasladar la producción a países con costes más bajos."],
    ["IDH", "Índice de Desarrollo Humano: renta, salud y educación."],
    ["Agenda 2030", "17 Objetivos de Desarrollo Sostenible aprobados por la ONU en 2015."],
    ["«Fábrica del mundo»", "China, por su enorme producción industrial para la exportación."],
  ],
  familias: ["Mirad las etiquetas de cinco prendas o aparatos de casa y apuntad dónde se fabricaron.", "Elegid juntos un ODS y pensad una acción concreta para la familia.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Retos del mundo actual: globalización, desigualdad, desarrollo sostenible y emergencia climática (RD 217/2022, Geografía e Historia 4º).",
    ideas: ["Rastrear la cadena de producción de un producto cotidiano.", "Comparar el IDH de cinco países con datos del PNUD.", "Debate: ¿la globalización reduce o aumenta la desigualdad?"],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Objetivos de Desarrollo Sostenible, Naciones Unidas", url: "https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/" },
  ],
  revisado: "2026-11-12",
};
