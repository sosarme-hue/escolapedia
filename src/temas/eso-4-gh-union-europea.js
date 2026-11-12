// Geografía e Historia 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { linea, filas, rueda, dos, figLinea } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "La Unión Europea",
  minutos: 35,
  objetivos: ["Explicar el origen y las ampliaciones de la Unión Europea", "Identificar sus principales instituciones y su funcionamiento", "Valorar qué supone para España y su ciudadanía"],
  claves: ["CECA", "Tratado de Roma", "Maastricht", "euro", "Parlamento Europeo", "Comisión Europea"],
  pregunta: {
    texto: "Francia y Alemania se enfrentaron en tres guerras en menos de 80 años. Hoy comparten moneda, fronteras abiertas y un Parlamento. ¿Cómo dos enemigos se convirtieron en socios?",
    respuesta: "Tras la Segunda Guerra Mundial, algunos políticos pensaron que unir sus economías haría imposible otra guerra. Empezaron con el carbón y el acero en 1951 y, paso a paso, crearon la <mark>Unión Europea</mark>: hoy 27 países que comparten mercado, leyes, instituciones y, muchos de ellos, el euro.",
  },
  bloques: [
    {
      html: `<h3>El origen: del carbón al mercado común</h3><p>En 1950 el ministro francés Robert Schuman propuso poner en común la producción de carbón y acero, materias de la guerra. En 1951 seis países (Francia, Alemania occidental, Italia, Bélgica, Países Bajos y Luxemburgo) crearon la <b>CECA</b>. En 1957 el <mark>Tratado de Roma</mark> fundó la <b>Comunidad Económica Europea</b> (CEE), un mercado común sin aranceles entre sus miembros. El 9 de mayo, día de la declaración Schuman, es el Día de Europa.</p>`,
      svg: linea("Primeros pasos de la integración europea", [["1950", "declaración|Schuman"], ["1951", "CECA,|6 países"], ["1957", "Tratado|de Roma"], ["1968", "unión|aduanera"]], "var(--pen)"),
    },
    {
      html: `<h3>De la CEE a la Unión Europea</h3><p>El <mark>Tratado de Maastricht</mark> (1992) creó la <b>Unión Europea</b> y la ciudadanía europea. El espacio <b>Schengen</b> eliminó los controles en las fronteras interiores, y en 2002 empezaron a circular los billetes y monedas de <mark>euro</mark>. El Tratado de Lisboa (2007) reforzó el Parlamento. En 2020 el Reino Unido salió de la Unión (Brexit).</p>`,
      svg: filas("Tratados clave", [["Roma 1957", "nace la CEE", "var(--muted)"], ["Maastricht", "1992: UE y ciudadanía", "var(--pen)"], ["Euro 2002", "monedas y billetes", "var(--sun)"], ["Lisboa", "2007: más Parlamento", "var(--leaf)"], ["Brexit", "2020: sale el Reino Unido", "var(--red)"]]),
    },
    {
      html: `<h3>Las ampliaciones</h3><p>De 6 países fundadores se pasó a 9 (1973), 10 (Grecia, 1981) y 12 con <b>España y Portugal</b> (1986). En 2004 entraron diez países, la mayoría de Europa del Este, que habían sido comunistas. Hoy la UE tiene <mark>27 Estados miembros</mark> y unos 450 millones de habitantes. Para entrar hay que ser una democracia que respete los derechos humanos y tenga una economía de mercado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfico de escalones del número de países miembros: 6, 9, 10, 12, 15, 25, 27">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="11" text-anchor="middle">
        ${[[1957, 6], [1973, 9], [1981, 10], [1986, 12], [1995, 15], [2004, 25], [2013, 28], [2020, 27]].map(([y, n], i) => { const x = 22 + i * 30, h = n * 4.4; return `<rect x="${x}" y="${150 - h}" width="24" height="${h}" rx="3" fill="${y === 1986 ? "var(--red)" : "var(--pen)"}"/><text x="${x + 12}" y="${144 - h}" font-weight="700" fill="var(--ink)">${n}</text><text x="${x + 12}" y="166" fill="var(--muted)" font-size="9.5">${y}</text>`; }).join("")}
        </g>
      </svg>`,
    },
    {
      html: `<h3>Las instituciones</h3><p>La UE tiene instituciones propias. El <mark>Parlamento Europeo</mark>, elegido por los ciudadanos cada cinco años, aprueba las leyes y el presupuesto. El <b>Consejo de la UE</b> reúne a los ministros de cada país y también aprueba las leyes. La <b>Comisión Europea</b> propone las leyes y vela por su cumplimiento. El <b>Consejo Europeo</b> (jefes de Estado o de gobierno) marca las grandes líneas. El <b>Tribunal de Justicia</b> interpreta el derecho europeo y el <b>Banco Central Europeo</b> gestiona el euro.</p>`,
      svg: rueda("Instituciones de la Unión Europea", "UE", [["Parlamento", "var(--pen)"], ["Consejo UE", "var(--leaf)"], ["Comisión", "var(--red)"], ["Consejo Europeo", "var(--sun)"], ["Tribunal", "var(--ink)"], ["BCE", "var(--muted)"]], "var(--pen)"),
    },
    {
      html: `<h3>Qué supone para España</h3><p>La entrada en 1986 trajo <b>fondos europeos</b> para carreteras, trenes y modernización, más comercio e inversión. Los ciudadanos pueden vivir, estudiar y trabajar en cualquier país de la Unión: el programa <mark>Erasmus</mark> ya ha llevado a cientos de miles de estudiantes españoles a otros países. A cambio, España aplica normas comunes y comparte decisiones sobre economía, agricultura o medio ambiente.</p>`,
      svg: dos("Ventajas y compromisos de ser miembro", ["Ventajas", ["fondos europeos", "libre circulación", "euro", "Erasmus", "mercado de 450 M"], "var(--leaf)"], ["Compromisos", ["normas comunes", "límites de déficit", "aportar al", "presupuesto", "decidir con 27"], "var(--pen)"]),
    },
  ],
  figura: {
    titulo: "Cronología de la integración europea",
    svg: figLinea("Línea del tiempo de 1951 a 2020", [[40, "1951", "CECA", 1], [110, "1957", "Tratado de Roma", 0], [230, "1986", "entra España", 1], [320, "1992", "Maastricht", 0], [400, "2002", "euro en el bolsillo", 1], [480, "2004", "ampliación al Este", 0], [630, "2020", "Brexit", 1]], [[40, 320, "CECA y CEE", "var(--muted)"], [320, 640, "Unión Europea", "var(--pen)"]]),
  },
  video: { id: "gOT1cuvPZJw", titulo: "La Unión Europea: historia y resumen en mapas", canal: "Geo Historia", vistas: 491622, megusta: 8088, busqueda: "unión europea explicación" },
  quiz: [
    { q: "¿Qué tratado fundó la Comunidad Económica Europea en 1957?", o: ["Tratado de Maastricht", "Tratado de Roma", "Tratado de Lisboa"], a: 1, e: "Seis países crearon un mercado común sin aranceles entre ellos." },
    { q: "¿En qué año entró España en la CEE?", o: ["1975", "1986", "2002"], a: 1, e: "España y Portugal entraron el 1 de enero de 1986." },
    { q: "¿Qué institución eligen directamente los ciudadanos?", o: ["La Comisión Europea", "El Parlamento Europeo", "El Banco Central Europeo"], a: 1, e: "Se elige cada cinco años en elecciones europeas." },
    { q: "¿Qué país salió de la UE en 2020?", o: ["Grecia", "Reino Unido", "Suiza"], a: 1, e: "El Brexit se decidió en referéndum en 2016 y se hizo efectivo en 2020." },
    { q: "¿Cuántos Estados miembros tiene hoy la UE?", o: ["12", "27", "50"], a: 1, e: "Tras la salida del Reino Unido quedan 27." },
  ],
  examen: [
    { q: "¿Qué hizo el Tratado de Maastricht (1992)?", o: ["Crear la UE y la ciudadanía europea", "Crear la CECA", "Sacar al Reino Unido"], a: 0, e: "También preparó la moneda única." },
    { q: "La Comisión Europea…", o: ["es elegida por los ciudadanos", "propone las leyes y vela por su cumplimiento", "juzga los delitos"], a: 1, e: "Es el «motor» de la UE; las leyes las aprueban el Parlamento y el Consejo." },
    { q: "¿Qué permite el espacio Schengen?", o: ["Usar el euro", "Cruzar las fronteras interiores sin controles", "Votar al Parlamento"], a: 1, e: "Suprime los controles de pasaporte entre los países que lo forman." },
  ],
  feynman: ["Por qué la integración europea empezó con el carbón y el acero", "La diferencia entre CEE y UE", "Qué hace cada institución europea", "Ventajas y compromisos de ser miembro para España"],
  mapa: mapa("UNIÓN EUROPEA", "var(--pen)", [
    ["Origen", "CECA 1951 · Roma 1957", "var(--muted)"],
    ["UE", "Maastricht · euro · Schengen", "var(--sun)"],
    ["Instituciones", "Parlamento · Consejo · Comisión", "var(--pen)"],
    ["España", "1986 · fondos · Erasmus", "var(--red)"],
  ], 270),
  tarjetas: [
    ["CECA", "Comunidad Europea del Carbón y del Acero (1951), primer paso de la integración."],
    ["Tratado de Roma", "1957, crea la CEE."],
    ["Tratado de Maastricht", "1992, crea la Unión Europea."],
    ["Euro en circulación", "Desde el 1 de enero de 2002."],
    ["Día de Europa", "9 de mayo."],
  ],
  familias: ["Buscad juntos un cartel de «financiado por la Unión Europea» en una obra o edificio cercano.", "Mirad las caras nacionales de vuestras monedas de euro y averiguad de qué país vienen.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: el proceso de construcción europea, sus instituciones y la ciudadanía europea (RD 217/2022, Geografía e Historia 4º).",
    ideas: ["Simulación de una sesión del Parlamento Europeo sobre una propuesta real.", "Mapa de las ampliaciones con colores por año de entrada.", "Investigar un proyecto local financiado con fondos FEDER."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Unión Europea: historia, portal oficial european-union.europa.eu", url: "https://european-union.europa.eu/principles-countries-history/history-eu_es" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar las libertades del mercado único y el euro", "Conocer qué aporta la ciudadanía europea y los retos de la UE"],
  bloques: [
    { tras: "Las instituciones", html: `<h3>Quién hace qué</h3>${tabla(["Institución", "Sede", "Función"], [["Parlamento Europeo", "Estrasburgo y Bruselas", "elegido por los ciudadanos cada 5 años; aprueba leyes y presupuesto"], ["Consejo de la UE", "Bruselas", "ministros de cada país; aprueba leyes con el Parlamento"], ["Consejo Europeo", "Bruselas", "jefes de Estado o de Gobierno; marca las grandes orientaciones"], ["Comisión Europea", "Bruselas", "propone leyes y vigila que se cumplan"], ["Tribunal de Justicia", "Luxemburgo", "interpreta el Derecho de la UE"], ["Banco Central Europeo", "Fráncfort", "controla el euro y la inflación"]])}`, video: { id: "QaonMOWIW2w", titulo: "Guía básica para entender la Unión Europea", canal: "El Viejo Continente", vistas: 230204, megusta: 0 } },
    { tras: "De la CEE a la Unión Europea", html: `<h3>El mercado único y sus cuatro libertades</h3><p>Desde 1993 la UE es un <b>mercado único</b> sin aranceles ni controles en sus fronteras interiores. Se basa en cuatro libertades de circulación: de <mark>personas</mark> (vivir, estudiar y trabajar en otro país), de <mark>mercancías</mark>, de <mark>servicios</mark> y de <mark>capitales</mark>. El <b>espacio Schengen</b> eliminó los controles de pasaporte entre la mayoría de los países. Para que el mercado funcione, la UE fija normas comunes de seguridad, de protección al consumidor y de competencia; por ejemplo, la garantía de dos años al comprar un producto o el fin del roaming en el móvil.</p>` },
    { tras: "De la CEE a la Unión Europea", html: `<h3>El euro</h3><p>El <b>euro</b> se creó en 1999 como moneda de cuenta y llegó en monedas y billetes el <b>1 de enero de 2002</b>. Hoy lo usan 21 países (Bulgaria fue el último, en 2026), la llamada <mark>eurozona</mark>. Ventajas: se comparan precios fácilmente, desaparecen los gastos de cambio de moneda y hay más estabilidad. Inconveniente: cada país ya no puede cambiar el valor de su moneda ni fijar sus tipos de interés, que decide el <b>Banco Central Europeo</b>. Para entrar hay que cumplir requisitos de inflación, déficit y deuda (los criterios de Maastricht).</p>` },
    { tras: "Qué supone para España", html: `<h3>Ser ciudadano europeo</h3><p>Todo español es también <mark>ciudadano de la UE</mark>. Eso significa poder vivir y trabajar en cualquier país miembro, votar en las elecciones municipales y europeas allí donde se resida, recibir protección consular de otro país de la UE fuera de Europa, y usar la <b>Tarjeta Sanitaria Europea</b>. Los jóvenes pueden estudiar con <b>Erasmus+</b>, del que España es uno de los países que más estudiantes envía y recibe, o participar en el Cuerpo Europeo de Solidaridad. La <b>Carta de los Derechos Fundamentales</b> recoge los derechos de todos.</p>` },
    { tras: "Qué supone para España", html: `<h3>Los retos de la UE</h3><p>La UE afronta desafíos importantes: la salida del <b>Reino Unido</b> (<mark>Brexit</mark>, 2020), el auge de partidos euroescépticos, la gestión de la inmigración, la dependencia energética, la guerra en Ucrania y la competencia con EE. UU. y China. Tras la pandemia de 2020 se aprobó el fondo <b>Next Generation EU</b>, financiado con deuda común, para impulsar la transición verde y digital. El <b>Pacto Verde Europeo</b> fija el objetivo de que la UE sea climáticamente neutra en 2050.</p>` },
  ],
  ejemplos: [
    { enunciado: "Una estudiante española quiere hacer un curso en Italia y luego trabajar en Alemania. ¿Qué derechos de la UE usa?", pasos: ["Estudiar en Italia: libre circulación de personas y, quizá, una beca Erasmus+.", "Trabajar en Alemania: libre circulación de trabajadores, sin permiso de trabajo.", "Viajar sin pasaporte: espacio Schengen.", "Atención médica: Tarjeta Sanitaria Europea."], resultado: "Usa la ciudadanía europea y la libre circulación de personas." },
    { enunciado: "Explica cómo se aprueba una ley europea (procedimiento legislativo ordinario).", pasos: ["La Comisión propone la ley.", "El Parlamento Europeo la debate y la enmienda.", "El Consejo de la UE también la estudia.", "Si Parlamento y Consejo se ponen de acuerdo, se aprueba."], resultado: "La Comisión propone; el Parlamento y el Consejo deciden juntos." },
    { enunciado: "Calcula: si un producto cuesta 120 € en Francia y 110 € en España, ¿qué facilita el euro?", pasos: ["Ambos precios están en la misma moneda.", "No hay que calcular tipos de cambio ni pagar comisiones.", "La diferencia es de 10 €, fácil de ver."], resultado: "El euro permite comparar precios directamente y favorece la competencia." },
  ],
  errores: [
    "Confundir el Consejo Europeo (jefes de Estado o de Gobierno) con el Consejo de Europa (otra organización, en Estrasburgo).",
    "Pensar que todos los países de la UE usan el euro.",
    "Creer que la Comisión Europea se elige directamente: los ciudadanos eligen el Parlamento.",
    "Pensar que Schengen y la UE son lo mismo: algunos países están en uno y no en el otro.",
    "Situar la entrada de España en 1992: fue el 1 de enero de 1986.",
  ],
  ejercicios: [
    { q: "¿Qué propuso la Declaración Schuman (1950)?", sol: "Poner en común la producción de carbón y acero de Francia y Alemania para hacer imposible otra guerra entre ellas." },
    { q: "¿Qué seis países fundaron la CEE en 1957?", sol: "Francia, Alemania Occidental, Italia, Bélgica, Países Bajos y Luxemburgo." },
    { q: "¿Qué cambió el Tratado de Maastricht?", sol: "Creó la Unión Europea (1992), la ciudadanía europea y preparó el euro." },
    { q: "Cita las cuatro libertades del mercado único.", sol: "Libre circulación de personas, mercancías, servicios y capitales." },
    { q: "¿Qué institución representa directamente a los ciudadanos?", sol: "El Parlamento Europeo, elegido por sufragio universal cada cinco años." },
    { q: "¿Qué hace el Banco Central Europeo?", sol: "Gestiona el euro y fija los tipos de interés para mantener la inflación baja (cerca del 2 %)." },
    { q: "¿Qué es el espacio Schengen?", sol: "La zona sin controles de pasaporte entre los países que lo forman." },
    { q: "¿Qué fondos europeos han ayudado a España?", sol: "Los fondos estructurales y de cohesión (carreteras, trenes, formación) y, recientemente, los fondos Next Generation EU." },
    { q: "¿Qué fue el Brexit?", sol: "La salida del Reino Unido de la UE, efectiva en 2020." },
    { q: "¿Qué objetivo tiene el Pacto Verde Europeo?", sol: "Que la UE sea climáticamente neutra en 2050." },
  ],
  quiz: [
    { q: "El Parlamento Europeo se elige cada…", o: ["4 años", "5 años", "6 años"], a: 1, e: "Las últimas elecciones fueron en 2024." },
    { q: "La Comisión Europea…", o: ["propone las leyes", "juzga los delitos", "elige al Parlamento"], a: 0, e: "Y vigila que se cumplan." },
    { q: "El euro llegó a los bolsillos en…", o: ["1999", "2002", "1986"], a: 1, e: "El 1 de enero de 2002." },
    { q: "El Banco Central Europeo está en…", o: ["Fráncfort", "Bruselas", "Madrid"], a: 0, e: "En Alemania." },
    { q: "¿Cuál NO es una de las cuatro libertades?", o: ["libre circulación de capitales", "libre circulación de armas", "libre circulación de servicios"], a: 1, e: "Las cuatro son personas, mercancías, servicios y capitales." },
  ],
  tarjetas: [
    ["Mercado único", "Espacio sin aranceles con cuatro libertades de circulación."],
    ["Eurozona", "Países de la UE que usan el euro."],
    ["Ciudadanía europea", "Derechos de todos los nacionales de un país de la UE."],
  ],
});
