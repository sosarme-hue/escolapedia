// Geografía e Historia 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, flujo, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "3-eso",
  titulo: "La organización política de las sociedades",
  minutos: 35,
  objetivos: ["Explicar qué es un Estado y cuáles son sus elementos", "Distinguir democracias y dictaduras y la división de poderes", "Conocer la organización política y territorial de España y las organizaciones internacionales"],
  claves: ["Estado", "soberanía", "democracia", "dictadura", "división de poderes", "Constitución"],
  pregunta: {
    texto: "En un país, el presidente puede encarcelar a un periodista que le critica sin pasar por un juez. En otro, un juez puede condenar a un ministro. ¿Qué diferencia de fondo hay entre los dos países?",
    respuesta: "En el segundo existe la <mark>división de poderes</mark>: quien gobierna no es quien juzga, y todos, también los gobernantes, deben cumplir la ley. Es una de las bases de la <b>democracia</b> y del <b>Estado de derecho</b>. En el primero, un solo poder lo controla todo: es una <b>dictadura</b>.",
  },
  bloques: [
    {
      html: `<h3>El Estado y sus elementos</h3><p>Un <b>Estado</b> es una organización política que gobierna a una población en un territorio con leyes propias. Tiene tres elementos: un <mark>territorio</mark> con fronteras (tierra, mar y espacio aéreo), una <mark>población</mark> que vive en él y una <mark>soberanía</mark>, el poder de gobernarse sin depender de otros. Hoy hay unos 195 Estados en el mundo; la ONU reconoce a 193 como miembros.</p>`,
      svg: rueda("Los tres elementos de un Estado", "ESTADO", [["territorio", "var(--leaf)"], ["población", "var(--pen)"], ["soberanía", "var(--red)"], ["leyes propias", "var(--sun)"]], "var(--ink)"),
    },
    {
      html: `<h3>La división de poderes</h3><p>En el siglo XVIII, el pensador <b>Montesquieu</b> propuso separar el poder en tres para evitar abusos. El <mark>poder legislativo</mark> hace las leyes (el Parlamento). El <mark>poder ejecutivo</mark> gobierna y aplica las leyes (el Gobierno). El <mark>poder judicial</mark> juzga y vela por que se cumplan las leyes (jueces y tribunales). Cada poder controla a los otros.</p>`,
      svg: filas("Los tres poderes del Estado", [["Legislativo", "hace las leyes: Parlamento", "var(--pen)"], ["Ejecutivo", "gobierna: Gobierno", "var(--red)"], ["Judicial", "juzga: jueces y tribunales", "var(--leaf)"]]),
    },
    {
      html: `<h3>Democracias y dictaduras</h3><p>En una <mark>democracia</mark> el poder pertenece al pueblo, que elige a sus gobernantes en elecciones libres y periódicas; hay varios partidos, división de poderes, libertad de prensa y derechos garantizados por una <b>Constitución</b>. En una <mark>dictadura</mark> el poder lo concentra una persona o un grupo que no se somete a elecciones libres; se persigue a la oposición, se censura la prensa y no se respetan los derechos.</p>`,
      svg: dos("Diferencias entre democracia y dictadura", ["Democracia", ["elecciones libres", "varios partidos", "prensa libre", "poderes separados", "derechos"], "var(--leaf)"], ["Dictadura", ["sin elecciones", "partido único", "censura", "poder concentrado", "represión"], "var(--red)"]),
    },
    {
      html: `<h3>La organización política de España</h3><p>Según la <b>Constitución de 1978</b>, España es una <mark>monarquía parlamentaria</mark>: el Rey es el jefe del Estado, pero no gobierna. Las <b>Cortes Generales</b> (Congreso y Senado) son el poder legislativo y las eligen los ciudadanos cada cuatro años. El <b>Gobierno</b>, con su presidente, es el ejecutivo. Los <b>jueces</b>, independientes, forman el judicial. El <b>Tribunal Constitucional</b> vigila que las leyes respeten la Constitución.</p>`,
      svg: flujo("Cómo se forma el Gobierno en España", ["votan los|ciudadanos", "eligen el|Congreso", "investidura|presidente", "forma el|Gobierno"], "var(--red)"),
    },
    {
      html: `<h3>La organización territorial de España</h3><p>España se organiza en <b>municipios</b>, <b>provincias</b> y <b>comunidades autónomas</b>. Los municipios (más de 8.100) los gobiernan los <b>ayuntamientos</b>, con el alcalde y los concejales. Las 50 provincias tienen diputaciones. Las <mark>17 comunidades autónomas</mark> y las <b>ciudades autónomas</b> de Ceuta y Melilla tienen su propio parlamento, gobierno y <b>Estatuto de Autonomía</b>, y gestionan, por ejemplo, la educación y la sanidad.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres niveles: 17 comunidades autónomas y 2 ciudades, 50 provincias y más de 8.100 municipios">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["17 comunidades + 2 ciudades", "parlamento y gobierno propios", "var(--red)", 170], ["50 provincias", "diputaciones", "var(--sun)", 180], ["8.100 municipios", "ayuntamientos y alcaldes", "var(--pen)", 190]].map(([t, d, c, w], i) => `<rect x="${130 - w / 2 - 20}" y="${20 + i * 50}" width="${w + 40}" height="40" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="130" y="${37 + i * 50}" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" ${F}>${t}</text><text x="130" y="${53 + i * 50}" text-anchor="middle" font-size="10.5" fill="var(--ink)" ${F}>${d}</text>`).join("")}</svg>`,
    },
  ],
  figura: {
    titulo: "Los poderes del Estado en España",
    svg: figCols("Poder legislativo, ejecutivo y judicial en España con sus órganos", [
      ["Legislativo", ["Cortes Generales", "Congreso (350)", "Senado", "aprueban leyes"], "var(--pen)"],
      ["Ejecutivo", ["Gobierno", "presidente", "ministros", "aplican las leyes"], "var(--red)"],
      ["Judicial", ["jueces y tribunales", "Tribunal Supremo", "CGPJ", "juzgan"], "var(--leaf)"],
    ]),
  },
  video: { id: "Fff82LnHahU", titulo: "Diferencias entre democracia y dictadura para escolares", canal: "InstitutoIEDL", vistas: 133643, megusta: 0, busqueda: "democracia y dictadura diferencias" },
  quiz: [
    { q: "¿Cuál NO es un elemento del Estado?", o: ["Territorio", "Soberanía", "Moneda"], a: 2, e: "Los elementos son territorio, población y soberanía." },
    { q: "El poder que hace las leyes es el…", o: ["ejecutivo", "legislativo", "judicial"], a: 1, e: "En España, las Cortes Generales." },
    { q: "¿Quién propuso la división de poderes?", o: ["Montesquieu", "Napoleón", "Platón"], a: 0, e: "En su obra «El espíritu de las leyes» (1748)." },
    { q: "España es una…", o: ["república presidencialista", "monarquía parlamentaria", "monarquía absoluta"], a: 1, e: "Según la Constitución de 1978." },
    { q: "¿Cuántas comunidades autónomas tiene España?", o: ["15", "17", "50"], a: 1, e: "Además de las ciudades autónomas de Ceuta y Melilla." },
  ],
  examen: [
    { q: "En una dictadura…", o: ["hay elecciones libres", "el poder se concentra en una persona o grupo", "hay libertad de prensa"], a: 1, e: "No hay división de poderes real." },
    { q: "Los ayuntamientos gobiernan…", o: ["las provincias", "los municipios", "las comunidades"], a: 1, e: "Con el alcalde y los concejales." },
    { q: "¿Qué órgano vigila que las leyes respeten la Constitución?", o: ["El Senado", "El Tribunal Constitucional", "El Gobierno"], a: 1, e: "Puede anular las leyes que no la respeten." },
  ],
  feynman: ["Qué elementos tiene un Estado", "Por qué es importante la división de poderes", "Qué diferencia una democracia de una dictadura", "Cómo se organiza España política y territorialmente"],
  mapa: mapa("ORGANIZACIÓN POLÍTICA", "var(--ink)", [
    ["Estado", "territorio · población · soberanía", "var(--leaf)"],
    ["Poderes", "legislativo · ejecutivo · judicial", "var(--pen)"],
    ["Regímenes", "democracia · dictadura", "var(--red)"],
    ["España", "monarquía parlamentaria · CC. AA.", "var(--sun)"],
  ], 280),
  tarjetas: [
    ["Soberanía", "Poder de un Estado para gobernarse sin depender de otro."],
    ["Poder ejecutivo", "Gobierna y aplica las leyes: el Gobierno."],
    ["Poder judicial", "Juzga y hace cumplir las leyes: jueces y tribunales."],
    ["Monarquía parlamentaria", "El Rey es jefe del Estado, pero gobiernan el Parlamento y el Gobierno."],
    ["Estatuto de Autonomía", "Norma básica de cada comunidad autónoma."],
  ],
  familias: ["Leed juntos un artículo de la Constitución (por ejemplo, el 14 o el 27) y comentadlo.", "Averiguad quién es el alcalde o alcaldesa de vuestro municipio y qué servicios presta el ayuntamiento.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Compromiso cívico: el Estado, la organización política y territorial de España, la Constitución de 1978, la Unión Europea y las organizaciones internacionales (RD 217/2022, Geografía e Historia 3º).",
    ideas: ["Simulación de un pleno municipal sobre un problema del barrio.", "Lectura guiada de artículos de la Constitución por grupos.", "Mapa mural de las comunidades autónomas y sus capitales."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Constitución Española de 1978 (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Conocer los derechos y deberes de la Constitución", "Identificar las principales organizaciones internacionales y la Unión Europea"],
  bloques: [
    { tras: "El Estado y sus elementos", html: `<h3>Formas de Estado y de gobierno</h3><p>Según quién es el <b>jefe del Estado</b>, hay <mark>monarquías</mark> (un rey o reina que hereda el cargo) y <mark>repúblicas</mark> (un presidente elegido por un tiempo limitado). Las monarquías pueden ser <b>absolutas</b>, donde el rey tiene todo el poder (hoy son muy pocas, como Arabia Saudí), o <b>parlamentarias</b>, donde el rey reina pero no gobierna (España, Reino Unido, Suecia). Las repúblicas pueden ser <b>presidencialistas</b>, en las que el presidente también dirige el gobierno (Estados Unidos, México), o <b>parlamentarias</b> (Italia, Alemania). Según cómo reparten el poder en el territorio, los Estados son <b>centralizados</b> (Francia) o <b>descentralizados</b>: federales (Alemania, EE. UU.) o autonómicos (España).</p>` },
    { tras: "La división de poderes", html: `<h3>El Estado de derecho</h3><p>Un <mark>Estado de derecho</mark> es aquel en el que todos, ciudadanos y gobernantes, están sometidos a la ley. Sus bases son: una <b>Constitución</b> como ley suprema, la <b>división de poderes</b>, el respeto a los <b>derechos humanos</b> y la <b>independencia judicial</b>. En él, nadie puede ser detenido sin motivo legal, las leyes se publican para que todos las conozcan (en España, en el <b>Boletín Oficial del Estado</b>) y cualquier persona puede recurrir a los tribunales si cree que el Estado ha vulnerado sus derechos. Los <b>partidos políticos</b>, los <b>sindicatos</b>, las asociaciones y los medios de comunicación permiten participar en la vida pública y controlar al poder.</p>`, video: { id: "Z4xzjX_kKpg", titulo: "Los 3 poderes del Estado: ejecutivo, legislativo y judicial", canal: "Francisco Shibata", vistas: 699787, megusta: 0 } },
    { tras: "La organización política de España", html: `<h3>Derechos y deberes en la Constitución</h3><p>La Constitución de 1978 se aprobó en referéndum el <b>6 de diciembre</b>, el Día de la Constitución. Su primera parte recoge los <b>derechos y deberes</b> de los ciudadanos. El artículo 14 establece la <mark>igualdad ante la ley</mark> sin discriminación por nacimiento, raza, sexo, religión u opinión. Reconoce derechos como la vida, la libertad de expresión y de religión, la educación (art. 27), el voto, la protección de la salud y una vivienda digna. También establece deberes: <b>pagar impuestos</b> según la capacidad económica, defender España y respetar las leyes. Con 18 años, todos los españoles pueden votar y ser elegidos.</p>` },
    { tras: "La organización territorial de España", html: `<h3>Las comunidades autónomas</h3>${tabla(["Comunidad", "Capital"], [["Andalucía", "Sevilla"], ["Aragón", "Zaragoza"], ["Asturias", "Oviedo"], ["Illes Balears", "Palma"], ["Canarias", "Santa Cruz de Tenerife y Las Palmas"], ["Cantabria", "Santander"], ["Castilla y León", "Valladolid (sede de las instituciones)"], ["Castilla-La Mancha", "Toledo"], ["Cataluña", "Barcelona"], ["Comunidad Valenciana", "Valencia"], ["Extremadura", "Mérida"], ["Galicia", "Santiago de Compostela"], ["La Rioja", "Logroño"], ["Comunidad de Madrid", "Madrid"], ["Región de Murcia", "Murcia"], ["Navarra", "Pamplona"], ["País Vasco", "Vitoria-Gasteiz"]])}<p>Algunas tienen <mark>lengua cooficial</mark> junto al castellano: catalán, valenciano, gallego y euskera.</p>` },
    { tras: "La organización territorial de España", html: `<h3>Organizaciones internacionales</h3><p>Los Estados colaboran en organizaciones internacionales. La <mark>ONU</mark> (Organización de las Naciones Unidas, 1945) reúne a 193 países para mantener la paz, defender los derechos humanos y promover el desarrollo; tiene agencias como UNICEF, la OMS o la UNESCO. La <b>Unión Europea</b> es una organización de 27 países que comparten instituciones, leyes, un mercado único y, muchos de ellos, el euro; España forma parte desde 1986. La <b>OTAN</b> es una alianza militar de defensa. También existen <b>ONG</b> (organizaciones no gubernamentales), como Cruz Roja, Médicos Sin Fronteras o Amnistía Internacional, que no dependen de los Estados.</p>` },
  ],
  ejemplos: [
    { enunciado: "Clasifica cada institución en su poder: Congreso de los Diputados, Tribunal Supremo, Consejo de Ministros, Senado.", pasos: ["Congreso y Senado forman las Cortes Generales, que hacen las leyes: legislativo.", "El Consejo de Ministros es el Gobierno reunido: ejecutivo.", "El Tribunal Supremo es el tribunal más alto: judicial."], resultado: "Legislativo: Congreso y Senado. Ejecutivo: Consejo de Ministros. Judicial: Tribunal Supremo." },
    { enunciado: "Un país tiene un presidente elegido por los ciudadanos que además dirige el Gobierno, y el poder se reparte entre Estados federados. ¿Qué tipo de Estado es?", pasos: ["Presidente elegido: república.", "El presidente dirige el Gobierno: presidencialista.", "Estados federados con poder propio: Estado federal."], resultado: "República presidencialista y federal, como Estados Unidos." },
    { enunciado: "¿Qué administración se ocupa de cada servicio en España: el alumbrado de tu calle, el colegio público y el ejército?", pasos: ["Alumbrado y limpieza de calles: ayuntamiento (municipio).", "Educación: comunidad autónoma.", "Defensa y ejército: Estado central."], resultado: "Ayuntamiento, comunidad autónoma y Estado, respectivamente." },
  ],
  errores: [
    "Pensar que el Rey de España gobierna: es jefe del Estado, pero gobierna el presidente del Gobierno.",
    "Confundir el Gobierno (ejecutivo) con las Cortes (legislativo).",
    "Creer que todas las monarquías son dictaduras o que todas las repúblicas son democracias.",
    "Confundir provincia con comunidad autónoma.",
    "Pensar que la ONU es un gobierno mundial: es una organización de Estados soberanos.",
  ],
  ejercicios: [
    { q: "Define Estado y cita sus tres elementos.", sol: "Organización política que gobierna una población en un territorio con leyes propias. Elementos: territorio, población y soberanía." },
    { q: "¿Para qué sirve la división de poderes?", sol: "Para evitar que una sola persona o grupo concentre todo el poder y abuse de él: cada poder controla a los otros." },
    { q: "Escribe tres rasgos de una democracia y tres de una dictadura.", sol: "Democracia: elecciones libres, varios partidos, libertad de prensa. Dictadura: sin elecciones libres, partido único o ninguno, censura y represión." },
    { q: "¿Qué diferencia hay entre monarquía absoluta y parlamentaria?", sol: "En la absoluta, el rey tiene todo el poder; en la parlamentaria, el rey es jefe del Estado pero el poder lo ejercen el Parlamento y el Gobierno elegidos." },
    { q: "¿Qué cámaras forman las Cortes Generales?", sol: "El Congreso de los Diputados y el Senado." },
    { q: "¿Qué es un Estatuto de Autonomía?", sol: "La norma básica de una comunidad autónoma: fija sus instituciones, sus competencias y, en su caso, su lengua cooficial." },
    { q: "Cita dos derechos y dos deberes de la Constitución de 1978.", sol: "Derechos: igualdad ante la ley, educación, libertad de expresión, voto. Deberes: pagar impuestos, respetar las leyes." },
    { q: "¿Cuándo se celebra el Día de la Constitución y por qué?", sol: "El 6 de diciembre, porque ese día de 1978 los españoles la aprobaron en referéndum." },
    { q: "Nombra tres agencias u órganos de la ONU.", sol: "Por ejemplo: UNICEF (infancia), OMS (salud), UNESCO (educación y cultura), el Consejo de Seguridad o la Asamblea General." },
    { q: "¿Qué es una ONG? Pon un ejemplo.", sol: "Una organización sin ánimo de lucro que no depende de los gobiernos y trabaja por causas sociales, como Cruz Roja o Médicos Sin Fronteras." },
  ],
  quiz: [
    { q: "Estados Unidos es una república…", o: ["presidencialista", "parlamentaria", "absoluta"], a: 0, e: "El presidente es jefe del Estado y del Gobierno." },
    { q: "La Constitución española se aprobó en…", o: ["1975", "1978", "1986"], a: 1, e: "En referéndum, el 6 de diciembre." },
    { q: "El artículo 14 de la Constitución trata de…", o: ["la igualdad ante la ley", "la educación", "el Rey"], a: 0, e: "Prohíbe la discriminación." },
    { q: "La ONU se fundó en…", o: ["1919", "1945", "1992"], a: 1, e: "Al terminar la Segunda Guerra Mundial." },
    { q: "Un Estado formado por Estados federados con mucho poder propio es…", o: ["centralizado", "federal", "absoluto"], a: 1, e: "Como Alemania o Estados Unidos." },
  ],
  tarjetas: [
    ["Estado de derecho", "Todos, también los gobernantes, están sometidos a la ley."],
    ["República", "Forma de Estado cuyo jefe es un presidente elegido."],
    ["ONU", "Organización de las Naciones Unidas (1945): paz, derechos humanos y desarrollo."],
  ],
});
