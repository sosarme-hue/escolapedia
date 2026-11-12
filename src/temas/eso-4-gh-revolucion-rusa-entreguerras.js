// Geografía e Historia 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { linea, dos, flujo, rueda, figCols } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "La Revolución rusa y el período de entreguerras",
  minutos: 40,
  objetivos: ["Explicar las revoluciones rusas de 1917 y la creación de la URSS", "Analizar las causas y efectos del crac del 29", "Comparar fascismo, nazismo y estalinismo como totalitarismos"],
  claves: ["bolcheviques", "URSS", "crac del 29", "Gran Depresión", "fascismo", "nazismo"],
  pregunta: {
    texto: "En octubre de 1929 la Bolsa de Nueva York se hundió en pocos días. Cuatro años después, Hitler era canciller de Alemania. ¿Qué relación hay entre una crisis económica y la llegada de una dictadura?",
    respuesta: "La <mark>Gran Depresión</mark> dejó a millones de personas sin trabajo y sin esperanza. Muchas dejaron de confiar en la democracia y apoyaron a líderes autoritarios que prometían orden y empleo. Así crecieron los <b>totalitarismos</b>: fascismo en Italia, nazismo en Alemania y, por otro camino, el estalinismo en la URSS.",
  },
  bloques: [
    {
      html: `<h3>Las revoluciones de 1917 en Rusia</h3><p>La Rusia de los zares era un país campesino, con un monarca absoluto y una guerra mundial que causaba hambre. En <b>febrero de 1917</b> una revolución derrocó al zar Nicolás II y se formó un gobierno provisional. En <b>octubre</b> los <mark>bolcheviques</mark> de Lenin tomaron el poder con el lema «paz, pan y tierra»: salieron de la guerra, repartieron tierras y nacionalizaron la industria.</p>`,
      svg: linea("Rusia de 1917 a 1924", [["feb. 1917", "cae el zar"], ["oct. 1917", "Lenin y los|bolcheviques"], ["1918-21", "guerra civil|rojos/blancos"], ["1922", "nace la|URSS"]]),
    },
    {
      html: `<h3>La URSS de Stalin</h3><p>Tras una guerra civil se creó la <mark>Unión Soviética</mark> (1922). Al morir Lenin, <b>Stalin</b> impuso una dictadura personal: economía planificada con <b>planes quinquenales</b>, industrialización forzada, colectivización del campo, partido único, culto al líder y represión masiva (purgas y campos de trabajo, el <b>gulag</b>). Millones de personas murieron por hambrunas y represión.</p>`,
      svg: dos("Economía soviética frente a la capitalista", ["URSS", ["Estado planifica", "sin propiedad", "privada", "planes de 5 años", "partido único"], "var(--red)"], ["Capitalismo", ["mercado y precios", "propiedad privada", "empresas", "competencia", "varios partidos"], "var(--pen)"]),
    },
    {
      html: `<h3>Los felices años 20 y el crac del 29</h3><p>Tras la guerra, Estados Unidos vivió una gran prosperidad: coches, electrodomésticos, cine, jazz y compras a crédito. Mucha gente compró acciones con dinero prestado y la Bolsa subió sin control. El 24 de octubre de 1929, el «jueves negro», todos quisieron vender: era el <mark>crac del 29</mark>. Quebraron bancos y empresas, y el paro llegó al 25 %. La <b>Gran Depresión</b> se extendió por el mundo. Roosevelt respondió con el <b>New Deal</b>: obras públicas y ayudas sociales.</p>`,
      svg: flujo("Efecto dominó del crac del 29", ["Bolsa se|hunde", "bancos|quiebran", "sin|crédito", "empresas|cierran", "paro|25 %", "menos|consumo"], "var(--red)"),
    },
    {
      html: `<h3>Fascismo y nazismo</h3><p>Los <mark>totalitarismos</mark> controlaban toda la vida del país: partido único, líder carismático, propaganda, violencia contra opositores y nacionalismo agresivo. En Italia, <b>Mussolini</b> llegó al poder en 1922 tras la Marcha sobre Roma. En Alemania, la crisis del 29 hundió la República de Weimar y <b>Hitler</b> fue nombrado canciller en 1933. El <mark>nazismo</mark> añadió un racismo extremo, sobre todo antisemita: las leyes de Núremberg (1935) quitaron derechos a los judíos.</p>`,
      svg: rueda("Rasgos comunes de los totalitarismos", "TOTALITA-|RISMO", [["partido único", "var(--red)"], ["culto al líder", "var(--sun)"], ["propaganda", "var(--pen)"], ["represión", "var(--ink)"], ["nacionalismo", "var(--leaf)"], ["control social", "var(--muted)"]], "var(--soc, #c2410c)"),
    },
  ],
  figura: {
    titulo: "Tres totalitarismos de entreguerras",
    svg: figCols("Comparación de fascismo italiano, nazismo alemán y estalinismo soviético", [
      ["Fascismo · Italia", ["Mussolini, 1922", "Marcha sobre Roma", "Estado corporativo", "nacionalismo imperial", "camisas negras"], "var(--ink)"],
      ["Nazismo · Alemania", ["Hitler, 1933", "tras el crac del 29", "racismo antisemita", "espacio vital", "SS y Gestapo"], "var(--red)"],
      ["Estalinismo · URSS", ["Stalin, desde 1924", "economía planificada", "colectivización", "purgas y gulag", "partido comunista"], "var(--pen)"],
    ]),
  },
  video: { id: "-mnRwShLmXc", titulo: "La Revolución rusa en 7 minutos", canal: "Academia Play", vistas: 7094097, megusta: 150904, busqueda: "revolución rusa resumen" },
  quiz: [
    { q: "¿Quién dirigía a los bolcheviques en octubre de 1917?", o: ["Stalin", "Lenin", "Nicolás II"], a: 1, e: "Lenin encabezó la toma del poder con el lema «paz, pan y tierra»." },
    { q: "¿Qué fue el crac del 29?", o: ["Una guerra", "El hundimiento de la Bolsa de Nueva York", "Una revolución en Alemania"], a: 1, e: "En octubre de 1929 las acciones se desplomaron y empezó la Gran Depresión." },
    { q: "El New Deal de Roosevelt consistió en…", o: ["recortar todo el gasto público", "obras públicas y ayudas sociales para salir de la crisis", "declarar la guerra a Alemania"], a: 1, e: "El Estado intervino para crear empleo y proteger a los más afectados." },
    { q: "¿Qué rasgo es común a los totalitarismos?", o: ["Pluralidad de partidos", "Partido único y culto al líder", "Separación de poderes"], a: 1, e: "Fascismo, nazismo y estalinismo eliminaron la oposición y glorificaron al jefe." },
    { q: "¿En qué año llegó Hitler al poder?", o: ["1922", "1933", "1939"], a: 1, e: "Fue nombrado canciller en enero de 1933 y en pocos meses eliminó la democracia." },
  ],
  examen: [
    { q: "Los planes quinquenales de Stalin buscaban…", o: ["privatizar la industria", "industrializar rápidamente la URSS con planificación estatal", "repartir dinero a los campesinos"], a: 1, e: "Fijaban objetivos de producción a cinco años, sobre todo en industria pesada." },
    { q: "¿Por qué la Gran Depresión favoreció al nazismo?", o: ["Porque mejoró la economía alemana", "Porque el paro y la desesperación debilitaron la confianza en la democracia", "Porque Hitler era banquero"], a: 1, e: "Con seis millones de parados, muchos alemanes votaron a quien prometía orden y empleo." },
    { q: "Las leyes de Núremberg (1935)…", o: ["quitaron derechos a los judíos alemanes", "dieron el voto a las mujeres", "crearon la Sociedad de Naciones"], a: 0, e: "Prohibieron los matrimonios mixtos y retiraron la ciudadanía a los judíos." },
  ],
  feynman: ["Por qué hubo dos revoluciones en Rusia en 1917", "Cómo funcionaba la economía planificada de Stalin", "La cadena de efectos del crac del 29", "Qué tienen en común fascismo, nazismo y estalinismo"],
  mapa: mapa("ENTREGUERRAS", "var(--soc, #c2410c)", [
    ["Rusia 1917", "Lenin · bolcheviques · URSS", "var(--red)"],
    ["Stalin", "planes · colectivización · gulag", "var(--ink)"],
    ["Crac del 29", "Gran Depresión · New Deal", "var(--sun)"],
    ["Totalitarismos", "Mussolini · Hitler", "var(--pen)"],
  ], 260),
  tarjetas: [
    ["Lema de los bolcheviques", "«Paz, pan y tierra»."],
    ["¿Cuándo nació la URSS?", "En 1922."],
    ["Jueves negro", "24 de octubre de 1929, inicio del crac de la Bolsa de Nueva York."],
    ["New Deal", "Plan de Roosevelt de obras públicas y ayudas sociales contra la Gran Depresión."],
    ["Marcha sobre Roma", "1922: Mussolini llega al poder en Italia."],
  ],
  familias: ["Comentad juntos cómo la propaganda actual (anuncios, redes) usa técnicas parecidas a las de los años 30: mensajes simples y repetidos.", "Buscad qué pasó con los precios y el paro en la crisis de 2008 y comparadlo con 1929.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: la Revolución rusa, la crisis de 1929 y el ascenso de los totalitarismos; memoria democrática (RD 217/2022, Geografía e Historia 4º).",
    ideas: ["Análisis de carteles de propaganda soviética, fascista y nazi.", "Gráfica del paro en EE. UU. y Alemania de 1928 a 1934.", "Debate guiado: ¿cómo puede una democracia defenderse de los extremismos?"],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Revolución rusa, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Revoluci%C3%B3n_rusa" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar las causas y consecuencias de la Gran Depresión", "Comparar los regímenes totalitarios"],
  bloques: [
    { tras: "Las revoluciones de 1917", html: `<h3>La Rusia de los zares</h3><p>A comienzos del siglo XX Rusia era un imperio enorme gobernado por el <b>zar Nicolás II</b> como monarca absoluto (la <mark>autocracia</mark>). La mayoría de la población eran campesinos pobres que habían dejado de ser siervos hacía poco (1861) y la industria se concentraba en pocas ciudades. La derrota frente a Japón provocó la <b>revolución de 1905</b>: en el «Domingo Sangriento» la guardia disparó contra una manifestación pacífica. El zar creó un parlamento, la <b>Duma</b>, pero sin poder real. La Primera Guerra Mundial, con derrotas, hambre y millones de muertos, hundió definitivamente al zarismo.</p>` },
    { tras: "Las revoluciones de 1917", html: `<h3>Guerra civil y nacimiento de la URSS</h3><p>Tras tomar el poder, <b>Lenin</b> firmó la paz con Alemania (Brest-Litovsk, 1918), repartió la tierra y nacionalizó la banca y la industria. Los contrarios a los bolcheviques, los <b>blancos</b>, con apoyo extranjero, se enfrentaron al <mark>Ejército Rojo</mark> de Trotski en una guerra civil (1918-1921) que ganaron los rojos. La familia del zar fue ejecutada. Para recuperar la economía, Lenin aplicó la <b>NEP</b> (Nueva Política Económica), que permitía algo de comercio privado. En 1922 nació la <b>URSS</b>, la Unión de Repúblicas Socialistas Soviéticas.</p>` },
    { tras: "Los felices años 20", html: `<h3>La Gran Depresión</h3><p>En los años 20 la economía de EE. UU. creció mucho, pero se producía más de lo que se podía vender y muchos compraban acciones a crédito, esperando que subieran siempre: era una <mark>burbuja especulativa</mark>. El <b>jueves 24 de octubre de 1929</b> empezó el hundimiento de la Bolsa de Nueva York. Quebraron bancos y empresas, el paro llegó a una de cada cuatro personas en EE. UU. y la crisis se extendió al mundo porque los bancos estadounidenses retiraron sus préstamos a Europa. El presidente <b>Roosevelt</b> respondió con el <b>New Deal</b> (1933): obras públicas, ayudas a los parados y control de los bancos.</p>`, video: { id: "sxqzgjizzdo", titulo: "El crack del 29 y la Gran Depresión", canal: "Academia Play", vistas: 7263323, megusta: 0 } },
    { tras: "Fascismo y nazismo", html: `<h3>Rasgos comunes de los totalitarismos</h3>${tabla(["Rasgo", "Fascismo italiano", "Nazismo alemán", "Estalinismo"], [["Líder", "Mussolini (Duce)", "Hitler (Führer)", "Stalin"], ["Llegada al poder", "Marcha sobre Roma, 1922", "elecciones y nombramiento, 1933", "lucha interna tras morir Lenin"], ["Partido único", "Partido Fascista", "Partido Nazi", "Partido Comunista"], ["Represión", "policía política, cárcel", "Gestapo, campos de concentración", "NKVD, gulag"], ["Economía", "capitalista con control estatal", "capitalista con control estatal", "planificada, sin propiedad privada"]])}<p>Todos usaron la <mark>propaganda</mark>, el culto al líder y el control de la educación y de los medios.</p>` },
    { tras: "Fascismo y nazismo", html: `<h3>El ascenso de Hitler</h3><p>La <b>República de Weimar</b> sufría la humillación de Versalles, la hiperinflación de 1923 (el pan llegó a costar miles de millones de marcos) y, después, el paro masivo de la Gran Depresión. Hitler prometió orden, trabajo y venganza, y culpó a los judíos y a los comunistas. En 1932 el Partido Nazi fue el más votado y en <b>enero de 1933</b> Hitler fue nombrado canciller. En pocos meses prohibió los demás partidos y los sindicatos. Las <mark>Leyes de Núremberg</mark> (1935) quitaron la ciudadanía a los judíos, y en la <b>Noche de los Cristales Rotos</b> (1938) se atacaron sus sinagogas y comercios.</p>` },
  ],
  ejemplos: [
    { enunciado: "Explica la cadena que llevó del crac de la Bolsa al paro masivo.", pasos: ["Caen las acciones → muchos inversores se arruinan y no devuelven sus créditos.", "Los bancos quiebran → no hay préstamos para las empresas.", "Las empresas venden menos y cierran → despiden trabajadores.", "Con más paro, se consume aún menos."], resultado: "La crisis financiera se convirtió en una crisis económica general que se alimentaba a sí misma." },
    { enunciado: "Compara las revoluciones de febrero y octubre de 1917.", pasos: ["Febrero: caída del zar; gobierno provisional liberal que sigue en la guerra.", "Octubre: los bolcheviques de Lenin toman el poder; paz y tierra para los campesinos."], resultado: "Febrero acabó con la monarquía; octubre instauró un Estado comunista." },
    { enunciado: "¿Por qué los totalitarismos atraían a parte de la población en los años 30?", pasos: ["Había paro, miedo y crisis económica.", "Las democracias parecían débiles.", "Los líderes ofrecían orden, trabajo y un enemigo al que culpar.", "La propaganda era muy eficaz."], resultado: "La crisis y el miedo hicieron que muchos aceptaran perder libertades a cambio de seguridad." },
  ],
  errores: [
    "Confundir la revolución de febrero (cae el zar) con la de octubre (toman el poder los bolcheviques).",
    "Pensar que Hitler dio un golpe de Estado para llegar al poder en 1933: fue nombrado canciller tras ganar votos.",
    "Creer que el crac del 29 solo afectó a EE. UU.",
    "Llamar fascista al régimen de Stalin: era comunista, aunque también totalitario.",
    "Situar el New Deal antes del crac: es de 1933.",
  ],
  ejercicios: [
    { q: "¿Qué era la autocracia zarista?", sol: "El poder absoluto del zar, sin parlamento con poder real ni libertades." },
    { q: "¿Qué pasó en el Domingo Sangriento?", sol: "En 1905 la guardia del zar disparó contra una manifestación pacífica en San Petersburgo; empezó la revolución de 1905." },
    { q: "¿Qué prometían los bolcheviques con «paz, pan y tierra»?", sol: "Salir de la guerra, acabar con el hambre y repartir la tierra entre los campesinos." },
    { q: "¿Qué fue la NEP?", sol: "La Nueva Política Económica de Lenin (1921), que permitió algo de comercio y propiedad privada para recuperar la economía." },
    { q: "Explica qué eran los planes quinquenales de Stalin.", sol: "Planes de cinco años que fijaban la producción de toda la economía, dando prioridad a la industria pesada." },
    { q: "¿Qué es una burbuja especulativa?", sol: "Una subida de precios de un bien o de acciones muy por encima de su valor real, porque se compra solo para vender más caro." },
    { q: "Cita dos medidas del New Deal.", sol: "Obras públicas para dar empleo y subsidios a los parados; también más control de los bancos." },
    { q: "¿Qué fue la Marcha sobre Roma?", sol: "La movilización fascista de 1922 que llevó al rey a nombrar a Mussolini jefe del Gobierno." },
    { q: "¿Qué establecían las Leyes de Núremberg?", sol: "Quitaban la ciudadanía alemana a los judíos y prohibían los matrimonios entre judíos y no judíos (1935)." },
    { q: "¿Qué rasgos comparten los regímenes totalitarios?", sol: "Partido único, culto al líder, represión, propaganda y control total de la sociedad." },
  ],
  quiz: [
    { q: "La Duma era…", o: ["el parlamento ruso", "la policía del zar", "un partido"], a: 0, e: "Se creó tras la revolución de 1905." },
    { q: "La URSS nació en…", o: ["1917", "1922", "1945"], a: 1, e: "Tras la guerra civil." },
    { q: "El crac de la Bolsa de Nueva York empezó en…", o: ["octubre de 1929", "enero de 1933", "julio de 1914"], a: 0, e: "El llamado jueves negro." },
    { q: "El New Deal lo impulsó…", o: ["Roosevelt", "Wilson", "Truman"], a: 0, e: "Desde 1933." },
    { q: "Hitler fue nombrado canciller en…", o: ["1923", "1933", "1939"], a: 1, e: "En enero de 1933." },
  ],
  tarjetas: [
    ["Domingo Sangriento", "Matanza de 1905 que inicia la primera revolución rusa."],
    ["New Deal", "Plan de Roosevelt contra la Gran Depresión."],
    ["Totalitarismo", "Régimen que controla toda la vida de las personas."],
  ],
});
