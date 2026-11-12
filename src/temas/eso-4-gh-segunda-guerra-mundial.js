// Geografía e Historia 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { dos, linea, barras, rueda, figLinea } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "La Segunda Guerra Mundial",
  minutos: 40,
  objetivos: ["Explicar las causas de la Segunda Guerra Mundial", "Describir las fases y los bandos del conflicto", "Analizar el Holocausto y las consecuencias de la guerra"],
  claves: ["Eje", "Aliados", "guerra relámpago", "Holocausto", "bomba atómica", "ONU"],
  pregunta: {
    texto: "Entre 1939 y 1945 murieron unos 60 millones de personas, más de la mitad civiles. Fue la guerra más destructiva de la historia. ¿Cómo pudo pasar solo veinte años después de la «guerra que acabaría con todas las guerras»?",
    respuesta: "La paz de 1919 dejó a Alemania humillada, la crisis del 29 llevó al poder a <b>Hitler</b> y las democracias cedieron una y otra vez ante sus conquistas. Cuando Alemania invadió <mark>Polonia en 1939</mark>, Francia y Reino Unido le declararon la guerra.",
  },
  bloques: [
    {
      html: `<h3>Las causas</h3><p>El <b>Tratado de Versalles</b> creó resentimiento en Alemania. La <b>Gran Depresión</b> facilitó el ascenso de los totalitarismos con políticas expansionistas: Japón invadió Manchuria (1931), Italia Etiopía (1935) y Alemania se rearmó, ocupó Renania, se anexionó Austria (1938) y los Sudetes. Francia y Reino Unido practicaron la <mark>política de apaciguamiento</mark>: ceder para evitar la guerra. En agosto de 1939 Hitler firmó un pacto de no agresión con Stalin y el 1 de septiembre invadió Polonia.</p>`,
      svg: linea("Expansión alemana antes de la guerra", [["1936", "Renania"], ["1938", "Austria y|Sudetes"], ["ago. 1939", "pacto con|Stalin"], ["sep. 1939", "invade|Polonia"]], "var(--ink)"),
    },
    {
      html: `<h3>Los bandos</h3><p>Por un lado, las potencias del <mark>Eje</mark>: Alemania, Italia y Japón. Por otro, los <mark>Aliados</mark>: Reino Unido y Francia desde el principio, y desde 1941 la <b>URSS</b> (invadida por Hitler) y <b>Estados Unidos</b> (atacado por Japón en Pearl Harbor). España, con Franco, fue oficialmente no beligerante, aunque envió la División Azul a luchar contra la URSS.</p>`,
      svg: dos("Eje frente a Aliados", ["Eje", ["Alemania", "Italia", "Japón"], "var(--ink)"], ["Aliados", ["Reino Unido", "Francia", "URSS (1941)", "EE. UU. (1941)"], "var(--pen)"]),
    },
    {
      html: `<h3>Las fases de la guerra</h3><p><b>1939-1941, éxitos del Eje</b>: la <mark>guerra relámpago</mark> (Blitzkrieg) alemana conquistó Polonia, Francia (1940) y gran parte de Europa; Reino Unido resistió en la batalla de Inglaterra. En 1941 Alemania invadió la URSS y Japón atacó Pearl Harbor. <b>1942-1945, victoria aliada</b>: Midway (1942), <b>Stalingrado</b> (1943), el desembarco de <b>Normandía</b> (6 de junio de 1944). Alemania se rindió el 8 de mayo de 1945 y Japón en septiembre, tras las bombas atómicas de Hiroshima y Nagasaki.</p>`,
      svg: dos("Dos fases de la guerra", ["1939-1941", ["avanza el Eje", "guerra relámpago", "cae Francia", "invasión URSS", "Pearl Harbor"], "var(--ink)"], ["1942-1945", ["avanzan Aliados", "Stalingrado", "Normandía", "rendición alemana", "Hiroshima"], "var(--pen)"]),
    },
    {
      html: `<h3>El Holocausto</h3><p>Los nazis organizaron el exterminio sistemático de los judíos de Europa: el <mark>Holocausto</mark> o Shoá. Primero los encerraron en guetos; desde 1942 los deportaron a <b>campos de exterminio</b> como Auschwitz. Asesinaron a unos <b>6 millones de judíos</b>, además de gitanos, personas con discapacidad, homosexuales y opositores. Unos 9 000 republicanos españoles murieron en el campo de Mauthausen.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Vela encendida en memoria de las víctimas del Holocausto">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="112" y="70" width="36" height="80" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M130 70 V 60" stroke="var(--ink)" stroke-width="2"/>
        <path d="M130 30 C 120 44, 122 58, 130 60 C 138 58, 140 44, 130 30 Z" fill="var(--sun)"/>
        <rect x="96" y="150" width="68" height="8" rx="3" fill="var(--ink)"/>
        <text x="130" y="176" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>27 de enero: Día de la Memoria</text>
      </svg>`,
    },
    {
      html: `<h3>Las consecuencias</h3><p>Unos <b>60 millones de muertos</b> y Europa destruida. Alemania quedó dividida y los líderes nazis fueron juzgados en <b>Núremberg</b> por crímenes contra la humanidad. En 1945 se creó la <mark>ONU</mark> para mantener la paz, y en 1948 se aprobó la <b>Declaración Universal de los Derechos Humanos</b>. Estados Unidos y la URSS salieron como superpotencias rivales: empezaba la Guerra Fría.</p>`,
      svg: barras("Muertos aproximados en millones por país o grupo", [["URSS", 26, "var(--red)", "≈ 26 M"], ["China", 15, "var(--sun)", "≈ 15 M"], ["Alemania", 7, "var(--ink)", "≈ 7 M"], ["Polonia", 6, "var(--pen)", "≈ 6 M"], ["Japón", 3, "var(--muted)", "≈ 3 M"]], 28),
    },
  ],
  figura: {
    titulo: "Cronología de la Segunda Guerra Mundial",
    svg: figLinea("Línea del tiempo de 1939 a 1945", [[40, "1939", "invasión de Polonia", 1], [130, "1940", "cae Francia", 0], [220, "1941", "URSS y Pearl Harbor", 1], [320, "1942", "Midway", 0], [410, "1943", "Stalingrado", 1], [510, "1944", "Normandía", 0], [630, "1945", "rendición y bombas", 1]], [[40, 260, "avanza el Eje", "var(--ink)"], [260, 630, "avanzan los Aliados", "var(--pen)"]]),
  },
  video: { id: "AYQ8hT8cVTE", titulo: "La Segunda Guerra Mundial en 17 minutos", canal: "Academia Play", vistas: 33293168, megusta: 733744, busqueda: "segunda guerra mundial resumen" },
  quiz: [
    { q: "¿Qué hecho inició la Segunda Guerra Mundial?", o: ["El ataque a Pearl Harbor", "La invasión alemana de Polonia (1 de septiembre de 1939)", "La batalla de Stalingrado"], a: 1, e: "Dos días después, Francia y Reino Unido declararon la guerra a Alemania." },
    { q: "¿Qué países formaban el Eje?", o: ["Alemania, Italia y Japón", "Alemania, URSS y España", "Reino Unido, Francia y EE. UU."], a: 0, e: "Fueron las tres potencias totalitarias y expansionistas." },
    { q: "La «guerra relámpago» consistía en…", o: ["ataques rápidos con tanques y aviación", "guerra de trincheras", "bombardeos atómicos"], a: 0, e: "La Blitzkrieg combinaba blindados y aviones para romper el frente en pocos días." },
    { q: "¿Qué fue el Holocausto?", o: ["Una batalla naval", "El exterminio sistemático de los judíos por los nazis", "Un tratado de paz"], a: 1, e: "Unos 6 millones de judíos fueron asesinados, junto a otros grupos perseguidos." },
    { q: "¿Qué organización se creó en 1945 para mantener la paz?", o: ["La OTAN", "La Sociedad de Naciones", "La ONU"], a: 2, e: "La Organización de las Naciones Unidas sustituyó a la fracasada Sociedad de Naciones." },
  ],
  examen: [
    { q: "La política de apaciguamiento consistió en…", o: ["declarar la guerra a Hitler en 1936", "ceder ante las exigencias de Hitler para evitar la guerra", "aliarse con Japón"], a: 1, e: "En Múnich (1938) Francia y Reino Unido aceptaron que Alemania se quedara con los Sudetes." },
    { q: "¿Qué batalla marcó el giro en el frente oriental?", o: ["Stalingrado (1942-1943)", "Waterloo", "Normandía"], a: 0, e: "La derrota alemana en Stalingrado inició el avance soviético hacia Berlín." },
    { q: "¿Qué se juzgó en Núremberg?", o: ["A los líderes nazis por crímenes contra la humanidad", "A Franco", "A los soldados aliados"], a: 0, e: "Fue el primer gran tribunal internacional por crímenes de guerra y genocidio." },
  ],
  feynman: ["Las causas de la guerra y la política de apaciguamiento", "Quién formaba el Eje y quién los Aliados", "Las dos fases y las batallas clave", "Qué fue el Holocausto y qué consecuencias dejó la guerra"],
  mapa: mapa("II GUERRA MUNDIAL", "var(--soc, #c2410c)", [
    ["Causas", "Versalles · crisis · apaciguamiento", "var(--muted)"],
    ["Bandos", "Eje vs. Aliados", "var(--ink)"],
    ["Fases", "Blitzkrieg · Stalingrado · Normandía", "var(--pen)"],
    ["Consecuencias", "Holocausto · ONU · Guerra Fría", "var(--red)"],
  ], 280),
  tarjetas: [
    ["Inicio de la Segunda Guerra Mundial", "1 de septiembre de 1939: Alemania invade Polonia."],
    ["Desembarco de Normandía", "6 de junio de 1944 (Día D)."],
    ["Rendición de Alemania", "8 de mayo de 1945."],
    ["Holocausto", "Exterminio de unos 6 millones de judíos por los nazis."],
    ["Creación de la ONU", "1945."],
  ],
  familias: ["Leed juntos un fragmento del «Diario de Ana Frank» y comentadlo.", "Buscad si hay en vuestra ciudad una placa o «piedra de la memoria» dedicada a deportados a Mauthausen.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: la Segunda Guerra Mundial, el Holocausto y el nuevo orden internacional; derechos humanos (RD 217/2022, Geografía e Historia 4º).",
    ideas: ["Trabajo con testimonios de supervivientes (Yad Vashem, Centro Sefarad-Israel).", "Mapa de Europa en 1942 frente a 1945.", "Lectura de la Declaración Universal de 1948 y relación con lo ocurrido en la guerra."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Segunda Guerra Mundial, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Segunda_Guerra_Mundial" },
  ],
  revisado: "2026-11-12",
};
