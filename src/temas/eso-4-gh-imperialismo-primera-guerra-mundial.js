// Geografía e Historia 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { rueda, dos, linea, filas, figLinea } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "El imperialismo y la Primera Guerra Mundial",
  minutos: 40,
  objetivos: ["Explicar las causas y consecuencias del imperialismo", "Identificar las causas y los bloques de la Primera Guerra Mundial", "Describir las fases de la guerra y la paz de París"],
  claves: ["imperialismo", "colonia", "Conferencia de Berlín", "Triple Alianza", "Triple Entente", "guerra de trincheras"],
  pregunta: {
    texto: "En 1914 casi toda África estaba repartida entre siete países europeos. Ese mismo año, esos países empezaron una guerra que mató a unos 10 millones de soldados. ¿Tienen algo que ver?",
    respuesta: "Sí. La carrera por las <mark>colonias</mark> (el imperialismo) aumentó la rivalidad entre las potencias europeas, que formaron alianzas militares y se armaron. Un atentado en Sarajevo bastó para que estallara la <b>Primera Guerra Mundial</b> (1914-1918).",
  },
  bloques: [
    {
      html: `<h3>Por qué Europa se repartió el mundo</h3><p>Entre 1870 y 1914 las potencias industriales conquistaron gran parte de África y Asia. Las causas fueron <b>económicas</b> (materias primas, mercados para sus productos, inversiones), <b>demográficas</b> (emigrar el exceso de población), <b>políticas</b> (prestigio y bases estratégicas) e <b>ideológicas</b>: el <mark>racismo</mark> que afirmaba la superioridad europea y su supuesta «misión civilizadora».</p>`,
      svg: rueda("Causas del imperialismo", "IMPERIA-|LISMO", [["materias primas", "var(--leaf)"], ["mercados", "var(--pen)"], ["población", "var(--sun)"], ["prestigio", "var(--red)"], ["racismo", "var(--muted)"], ["bases navales", "var(--water)"]], "var(--soc, #c2410c)"),
    },
    {
      html: `<h3>El reparto de África y Asia</h3><p>En la <mark>Conferencia de Berlín</mark> (1884-1885) las potencias pactaron las reglas para repartirse África sin tener en cuenta a sus pueblos. Gran Bretaña construyó el mayor imperio (India, Egipto, Sudáfrica) y Francia el segundo (norte y oeste de África, Indochina). Para los pueblos colonizados supuso explotación, pérdida de tierras y fronteras artificiales que aún causan conflictos.</p>`,
      svg: filas("Grandes imperios coloniales hacia 1914", [["Reino Unido", "India, Egipto, Sudáfrica…", "var(--red)"], ["Francia", "Argelia, Senegal, Indochina", "var(--pen)"], ["Alemania", "Camerún, Tanganica", "var(--ink)"], ["Bélgica", "Congo", "var(--sun)"], ["España", "norte de Marruecos, Guinea", "var(--leaf)"]]),
    },
    {
      html: `<h3>Las causas de la Gran Guerra</h3><p>Las rivalidades coloniales, la carrera de armamentos y los nacionalismos (Francia quería recuperar Alsacia y Lorena; Austria-Hungría y Rusia chocaban en los Balcanes) dividieron Europa en dos bloques: la <mark>Triple Alianza</mark> (Alemania, Austria-Hungría, Italia) y la <mark>Triple Entente</mark> (Francia, Reino Unido, Rusia). El 28 de junio de 1914 un nacionalista serbio asesinó en <b>Sarajevo</b> al heredero austriaco, Francisco Fernando: fue la chispa.</p>`,
      svg: dos("Los dos bloques en 1914", ["Triple Alianza", ["Alemania", "Austria-Hungría", "Italia (cambió", "de bando en 1915)"], "var(--ink)"], ["Triple Entente", ["Francia", "Reino Unido", "Rusia", "+ EE. UU. en 1917"], "var(--pen)"]),
    },
    {
      html: `<h3>Una guerra nueva y total</h3><p>Alemania quiso vencer rápido a Francia, pero fue frenada en el Marne (1914). Empezó la <mark>guerra de trincheras</mark>: años de frentes inmóviles con batallas terribles como Verdún (1916). Aparecieron armas nuevas: ametralladoras, gases tóxicos, tanques, aviones y submarinos. Fue una <b>guerra total</b>: la economía entera y la población civil se pusieron al servicio del conflicto, y las mujeres ocuparon puestos en las fábricas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte de dos trincheras enfrentadas con alambradas y la tierra de nadie en medio">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M10 100 H 60 V 130 H 90 V 100 H 170 V 130 H 200 V 100 H 250 V 168 H 10 Z" fill="var(--muted)" opacity=".5"/>
        <path d="M10 100 H 60 V 130 H 90 V 100 H 170 V 130 H 200 V 100 H 250" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        ${[100, 115, 145, 160].map((x) => `<path d="M${x} 100 l 6 -12 l 6 12 l 6 -12" fill="none" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}
        <circle cx="75" cy="120" r="6" fill="var(--pen)"/><circle cx="185" cy="120" r="6" fill="var(--red)"/>
        <text x="130" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>tierra de nadie</text>
        <text x="75" y="156" text-anchor="middle" font-size="11" fill="var(--ink)" ${F}>trinchera</text><text x="185" y="156" text-anchor="middle" font-size="11" fill="var(--ink)" ${F}>trinchera</text>
        <text x="130" y="36" text-anchor="middle" font-size="14" font-weight="700" fill="var(--red)" ${D}>Verdún 1916</text>
      </svg>`,
    },
    {
      html: `<h3>1917, el final y la paz</h3><p>En 1917 hubo dos giros: <b>Estados Unidos</b> entró en la guerra con la Entente y <b>Rusia</b> se retiró tras su revolución. Agotados, los imperios centrales se rindieron y el <b>armisticio</b> se firmó el 11 de noviembre de 1918. En la Conferencia de París, el <mark>Tratado de Versalles</mark> (1919) culpó a Alemania, le quitó territorios y colonias, limitó su ejército y le impuso enormes reparaciones. Desaparecieron cuatro imperios y se creó la <b>Sociedad de Naciones</b>.</p>`,
      svg: linea("Final de la guerra y paz", [["1917", "EE. UU. entra;|Rusia sale"], ["1918", "armisticio|11 nov."], ["1919", "Tratado de|Versalles"], ["1920", "Sociedad de|Naciones"]]),
    },
  ],
  figura: {
    titulo: "De la Conferencia de Berlín a Versalles",
    svg: figLinea("Línea del tiempo del imperialismo y la Primera Guerra Mundial", [[50, "1884", "Conferencia de Berlín", 1], [170, "1898", "desastre del 98", 0], [300, "1914", "Sarajevo y el Marne", 1], [390, "1916", "Verdún", 0], [470, "1917", "EE. UU. entra", 1], [550, "1918", "armisticio", 0], [630, "1919", "Versalles", 1]], [[50, 300, "reparto colonial", "var(--sun)"], [300, 550, "Gran Guerra", "var(--red)"]]),
  },
  video: { id: "8xrsyuXO3_o", titulo: "La Primera Guerra Mundial en 10 minutos", canal: "Infonimados", vistas: 12288690, megusta: 0, busqueda: "imperialismo y primera guerra mundial resumen" },
  quiz: [
    { q: "¿Qué se decidió en la Conferencia de Berlín (1884-1885)?", o: ["El reparto de África entre potencias europeas", "El final de la Primera Guerra Mundial", "La unificación alemana"], a: 0, e: "Las potencias fijaron las reglas para ocupar África sin contar con sus habitantes." },
    { q: "¿Qué países formaban la Triple Entente?", o: ["Alemania, Austria-Hungría e Italia", "Francia, Reino Unido y Rusia", "España, Portugal y Francia"], a: 1, e: "La Entente se enfrentó a la Triple Alianza encabezada por Alemania." },
    { q: "¿Qué hecho desencadenó la guerra en 1914?", o: ["El hundimiento del Lusitania", "El asesinato del archiduque Francisco Fernando en Sarajevo", "La revolución rusa"], a: 1, e: "Austria-Hungría declaró la guerra a Serbia y las alianzas arrastraron al resto." },
    { q: "La guerra de trincheras se caracterizó por…", o: ["avances rápidos de caballería", "frentes estancados durante años", "batallas solo en el mar"], a: 1, e: "En el frente occidental los ejércitos apenas se movieron entre 1914 y 1918." },
    { q: "El Tratado de Versalles…", o: ["culpó a Alemania y le impuso reparaciones", "dio colonias nuevas a Alemania", "unificó Austria y Alemania"], a: 0, e: "Alemania perdió territorios, colonias y ejército, y tuvo que pagar enormes indemnizaciones." },
  ],
  examen: [
    { q: "¿Por qué 1917 fue un año clave?", o: ["Empezó la guerra", "Entró Estados Unidos y salió Rusia", "Se firmó la paz"], a: 1, e: "EE. UU. aportó hombres y recursos a la Entente, mientras Rusia abandonó tras la revolución bolchevique." },
    { q: "Se llama «guerra total» porque…", o: ["duró mucho", "movilizó toda la economía y la población civil", "participaron todos los países del mundo"], a: 1, e: "La industria, la propaganda y la retaguardia se pusieron al servicio de la guerra." },
    { q: "¿Qué justificación ideológica usó el imperialismo?", o: ["La igualdad de los pueblos", "La supuesta superioridad europea y la «misión civilizadora»", "La democracia"], a: 1, e: "El racismo de la época sirvió para justificar la dominación colonial." },
  ],
  feynman: ["Las cuatro causas del imperialismo", "Cómo se repartió África y qué consecuencias tuvo", "Las causas profundas y la chispa de la Primera Guerra Mundial", "Qué impuso el Tratado de Versalles y por qué fue polémico"],
  mapa: mapa("IMPERIALISMO Y IGM", "var(--soc, #c2410c)", [
    ["Imperialismo", "materias primas · mercados · racismo", "var(--sun)"],
    ["Bloques", "Alianza vs. Entente", "var(--ink)"],
    ["Guerra", "trincheras · guerra total · 1917", "var(--red)"],
    ["Paz", "Versalles · Sociedad de Naciones", "var(--pen)"],
  ], 280),
  tarjetas: [
    ["¿Qué es una colonia?", "Un territorio dominado y explotado por una potencia extranjera."],
    ["Conferencia de Berlín", "1884-1885: reparto de África entre potencias europeas."],
    ["Chispa de la Primera Guerra Mundial", "Asesinato del archiduque Francisco Fernando en Sarajevo (28 de junio de 1914)."],
    ["Fecha del armisticio", "11 de noviembre de 1918."],
    ["Tratado de Versalles", "1919: Alemania culpable, pierde territorios y paga reparaciones."],
  ],
  familias: ["Mirad juntos un mapa de África actual y buscad fronteras en línea recta: ¿por qué serán así?", "Preguntad a los abuelos si conocen a alguien de la familia que estuviera en la guerra de Marruecos o emigrara a América.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: el imperialismo, la Primera Guerra Mundial y la crisis del orden internacional (RD 217/2022, Geografía e Historia 4º).",
    ideas: ["Comparar el mapa de África de 1880 y de 1914.", "Lectura de cartas de soldados desde las trincheras.", "Debate: ¿preparó Versalles la Segunda Guerra Mundial?"],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Primera Guerra Mundial, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Primera_Guerra_Mundial" },
  ],
  revisado: "2026-11-12",
};
