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

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar el fin de la Guerra Fría y el nuevo orden mundial", "Analizar los efectos de la revolución digital y las migraciones"],
  bloques: [
    { tras: "Qué es la globalización", html: `<h3>Del mundo bipolar al multipolar</h3><p>La caída del <b>muro de Berlín</b> (1989) y la desaparición de la <b>URSS</b> (1991) acabaron con la Guerra Fría. Durante unos años, EE. UU. fue la única superpotencia. Hoy el mundo es <mark>multipolar</mark>: junto a EE. UU. ganan peso <b>China</b>, segunda economía del mundo, la <b>Unión Europea</b>, la <b>India</b> y otras potencias regionales como Brasil, Rusia o Turquía. Los atentados del <b>11 de septiembre de 2001</b> en Nueva York abrieron una etapa de guerras contra el terrorismo yihadista (Afganistán, Irak), y la invasión rusa de <b>Ucrania</b> en 2022 devolvió la guerra a gran escala a Europa.</p>` },
    { tras: "Qué es la globalización", html: `<h3>La revolución digital</h3><p>Internet, los teléfonos inteligentes y las redes sociales han hecho que la información circule al instante por todo el planeta. Más de dos tercios de la población mundial usa internet. Esto facilita el comercio, el teletrabajo y el aprendizaje, pero también plantea problemas: la <mark>brecha digital</mark> entre quien tiene acceso y quien no, la desinformación y los bulos, la pérdida de privacidad y el poder de unas pocas grandes empresas tecnológicas. La <b>inteligencia artificial</b> está transformando muchos trabajos.</p>`, video: { id: "JJ0nFD19eT8", titulo: "La globalización explicada", canal: "explainitychannel", vistas: 5058568, megusta: 0 } },
    { tras: "Un mundo desigual", html: `<h3>Indicadores de desarrollo</h3>${tabla(["Indicador", "Qué mide", "Ejemplo de contraste"], [["PIB por habitante", "riqueza media por persona", "más de 50.000 $ en los países más ricos; menos de 1.000 $ en los más pobres"], ["Esperanza de vida", "años que se espera vivir al nacer", "más de 80 en España; alrededor de 55-60 en algunos países del Sahel"], ["IDH", "combina salud, educación e ingresos (de 0 a 1)", "Noruega o Suiza ≈ 0,96; Sudán del Sur o Somalia por debajo de 0,4"]])}<p>El <mark>Índice de Desarrollo Humano</mark> (IDH) de la ONU es más completo que el PIB porque no solo mide el dinero.</p>` },
    { tras: "Un mundo desigual", html: `<h3>Las migraciones</h3><p>Más de <b>280 millones de personas</b> viven fuera de su país de nacimiento. Las causas son económicas (buscar trabajo), políticas (guerras, persecución) y, cada vez más, ambientales. Los <mark>refugiados</mark> huyen de guerras o persecuciones y están protegidos por el derecho internacional. España pasó de ser un país de emigrantes a recibir millones de inmigrantes desde los años 90. Las migraciones rejuvenecen la población y aportan trabajadores, pero exigen políticas de integración y combatir el racismo y las mafias que trafican con personas.</p>` },
    { tras: "Los grandes retos", html: `<h3>El cambio climático</h3><p>La quema de combustibles fósiles (carbón, petróleo y gas) emite <b>gases de efecto invernadero</b> que calientan el planeta: la temperatura media ya ha subido alrededor de <b>1,2 °C</b> desde la época preindustrial. Las consecuencias son olas de calor, sequías, subida del nivel del mar y fenómenos extremos más frecuentes. En el <mark>Acuerdo de París</mark> (2015) casi todos los países se comprometieron a limitar el calentamiento muy por debajo de 2 °C. Para lograrlo hacen falta energías renovables, eficiencia energética y cambios en el transporte y el consumo.</p>` },
  ],
  ejemplos: [
    { enunciado: "Pon un ejemplo de cómo la globalización afecta a un objeto de tu vida diaria.", pasos: ["Un móvil se diseña en EE. UU. o Corea.", "Sus minerales se extraen en África o Sudamérica.", "Se ensambla en China u otro país asiático.", "Se vende en todo el mundo y se usa con aplicaciones de empresas globales."], resultado: "Un solo producto depende de muchos países: eso es la globalización económica." },
    { enunciado: "¿Por qué el IDH es mejor que el PIB por habitante para comparar países?", pasos: ["El PIB por habitante solo mide la riqueza media.", "Un país rico puede tener mala sanidad o educación.", "El IDH incluye esperanza de vida, años de estudio e ingresos."], resultado: "Porque mide el desarrollo de las personas y no solo el dinero." },
    { enunciado: "Clasifica las causas de estas migraciones: huir de una guerra, buscar empleo, una sequía que arruina las cosechas.", pasos: ["Guerra: causa política; la persona puede ser refugiada.", "Empleo: causa económica.", "Sequía: causa ambiental (relacionada con el clima)."], resultado: "Política, económica y ambiental." },
  ],
  errores: [
    "Pensar que la globalización es solo económica: también es cultural, política y tecnológica.",
    "Confundir inmigrante y refugiado: el refugiado huye de guerras o persecución y tiene protección especial.",
    "Creer que el PIB lo dice todo sobre el desarrollo de un país.",
    "Decir que el cambio climático es solo un problema futuro: sus efectos ya se notan.",
    "Pensar que el mundo actual sigue siendo bipolar.",
  ],
  ejercicios: [
    { q: "¿Qué hechos marcan el fin de la Guerra Fría?", sol: "La caída del muro de Berlín (1989) y la disolución de la URSS (1991)." },
    { q: "¿Qué significa que el mundo actual es multipolar?", sol: "Que hay varios centros de poder: EE. UU., China, la UE, la India y otras potencias regionales." },
    { q: "¿Qué es una multinacional? Pon un ejemplo.", sol: "Una empresa con sede en un país y filiales en muchos otros; por ejemplo, una gran marca de ropa o de tecnología." },
    { q: "¿Qué es la deslocalización?", sol: "Trasladar fábricas a países con salarios o impuestos más bajos." },
    { q: "Explica qué es la brecha digital.", sol: "La diferencia entre quienes tienen acceso a internet y a la tecnología y quienes no." },
    { q: "¿Qué mide el IDH?", sol: "La salud (esperanza de vida), la educación (años de estudio) y los ingresos por habitante." },
    { q: "Cita dos consecuencias positivas y una negativa de la inmigración en España.", sol: "Positivas: rejuvenece la población y aporta trabajadores y cotizaciones. Negativa o reto: necesidad de integración y riesgo de discriminación." },
    { q: "¿Qué se acordó en París en 2015?", sol: "Limitar el calentamiento global muy por debajo de 2 °C y reducir las emisiones." },
    { q: "¿Qué es el comercio justo?", sol: "Un sistema que paga precios dignos a los productores de países pobres y respeta sus derechos." },
    { q: "Cita tres ODS de la Agenda 2030.", sol: "Por ejemplo: fin de la pobreza, educación de calidad y acción por el clima." },
  ],
  quiz: [
    { q: "La URSS desapareció en…", o: ["1989", "1991", "2001"], a: 1, e: "Se dividió en 15 repúblicas." },
    { q: "El IDH va de…", o: ["0 a 1", "1 a 100", "0 a 10"], a: 0, e: "Cuanto más cerca de 1, más desarrollo." },
    { q: "Un refugiado es alguien que…", o: ["huye de una guerra o persecución", "viaja de vacaciones", "cambia de ciudad por trabajo"], a: 0, e: "Tiene derecho a protección internacional." },
    { q: "El Acuerdo de París trata sobre…", o: ["el cambio climático", "el comercio", "la OTAN"], a: 0, e: "Se firmó en 2015." },
    { q: "La segunda economía del mundo es…", o: ["China", "Brasil", "Rusia"], a: 0, e: "Por detrás de EE. UU." },
  ],
  tarjetas: [
    ["Mundo multipolar", "Orden con varios centros de poder."],
    ["IDH", "Índice que combina salud, educación e ingresos."],
    ["Acuerdo de París", "Compromiso de 2015 contra el cambio climático."],
  ],
});
