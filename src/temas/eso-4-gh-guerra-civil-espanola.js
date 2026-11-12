// Geografía e Historia 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { dos, linea, filas, rueda, figLinea } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "La Guerra Civil española",
  minutos: 40,
  objetivos: ["Explicar las causas y el inicio de la Guerra Civil", "Comparar la evolución de las dos zonas y la dimensión internacional", "Valorar las consecuencias humanas y la memoria democrática"],
  claves: ["golpe de Estado", "bando republicano", "bando sublevado", "Brigadas Internacionales", "Guernica", "exilio"],
  pregunta: {
    texto: "En 1937 Picasso pintó un cuadro enorme en blanco, negro y gris, lleno de gritos, un caballo herido y una madre con su hijo muerto. Se llama «Guernica». ¿Qué había pasado?",
    respuesta: "La Legión Cóndor, aviación de la Alemania nazi aliada de Franco, había bombardeado la villa vasca de Guernica. Era la <mark>Guerra Civil española</mark> (1936-1939), que empezó con un golpe militar contra la República y dejó cientos de miles de muertos y exiliados.",
  },
  bloques: [
    {
      html: `<h3>El golpe de Estado de julio de 1936</h3><p>El 17 y 18 de julio de 1936 una parte del ejército, dirigida por los generales <b>Mola</b> y <b>Franco</b>, se sublevó contra el gobierno de la República. El <mark>golpe de Estado</mark> fracasó en las grandes ciudades (Madrid, Barcelona, Valencia, Bilbao) y triunfó en otras zonas. España quedó partida en dos y empezó una guerra de casi tres años.</p>`,
      svg: dos("Los dos bandos de la guerra", ["Republicano", ["gobierno legal", "izquierdas, obreros", "nacionalistas", "vascos y catalanes", "apoyo de la URSS"], "var(--bac)"], ["Sublevado", ["militares golpistas", "derechas, Falange", "Iglesia, carlistas", "terratenientes", "Alemania e Italia"], "var(--ink)"]),
    },
    {
      html: `<h3>La dimensión internacional</h3><p>Francia y Reino Unido promovieron un <b>Comité de No Intervención</b> para que nadie ayudara a ninguno de los bandos, pero no se cumplió. La <b>Alemania nazi</b> y la <b>Italia fascista</b> enviaron aviones, tanques y soldados a Franco. La República recibió armas de la <b>URSS</b> y de México, y unos 35 000 voluntarios de todo el mundo en las <mark>Brigadas Internacionales</mark>. Muchos vieron la guerra como un ensayo de la Segunda Guerra Mundial.</p>`,
      svg: rueda("Apoyos internacionales de cada bando", "ESPAÑA|1936", [["Alemania", "var(--ink)"], ["Italia", "var(--ink)"], ["Portugal", "var(--ink)"], ["URSS", "var(--bac)"], ["México", "var(--bac)"], ["Brigadas Int.", "var(--bac)"]], "var(--red)"),
    },
    {
      html: `<h3>Las fases de la guerra</h3><p>Primero, el avance hacia <b>Madrid</b>, que resistió («¡No pasarán!», noviembre de 1936). En 1937 los sublevados conquistaron el <b>norte</b> (bombardeo de Guernica). En 1938 llegaron al Mediterráneo y partieron en dos la zona republicana, que lanzó su último gran ataque en la batalla del <mark>Ebro</mark>, la más larga y sangrienta. A principios de 1939 cayó Cataluña y el <b>1 de abril de 1939</b> Franco dio la guerra por terminada.</p>`,
      svg: linea("Fases militares de la guerra", [["1936", "batalla de|Madrid"], ["1937", "frente norte|Guernica"], ["1938", "Ebro"], ["1939", "cae Cataluña|1 de abril"]], "var(--red)"),
    },
    {
      html: `<h3>Dos zonas muy diferentes</h3><p>En la <b>zona republicana</b> el gobierno perdió el control al principio y hubo una revolución social (colectivizaciones) y violencia contra religiosos y derechistas, hasta que los gobiernos de Largo Caballero y Negrín reforzaron el Estado. En la <b>zona sublevada</b> Franco se convirtió en jefe único («Caudillo»), unificó los partidos en <b>FET y de las JONS</b>, devolvió a la Iglesia su papel y aplicó una represión sistemática. Hubo violencia y represión en ambas zonas.</p>`,
      svg: filas("Gobiernos de cada zona", [["República", "1936: Largo Caballero", "var(--bac)"], ["República", "1937-39: Negrín", "var(--bac)"], ["Sublevados", "1936: Franco, Caudillo", "var(--ink)"], ["Sublevados", "1937: partido único", "var(--ink)"]]),
    },
    {
      html: `<h3>Las consecuencias</h3><p>La guerra causó cientos de miles de muertos en combate, por la represión y por el hambre. Unas <mark>450 000 personas</mark> se exiliaron en 1939, entre ellas muchos científicos, artistas y maestros. El país quedó arruinado y comenzó una larga <b>dictadura</b>. Hoy la <b>memoria democrática</b> busca recordar a las víctimas, localizar a los desaparecidos y evitar que algo así se repita.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Maleta del exilio con la cifra de 450 000 exiliados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="70" y="58" width="120" height="78" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/>
        <path d="M108 58 V 44 H 152 V 58" fill="none" stroke="var(--ink)" stroke-width="3"/>
        <path d="M70 84 H 190" stroke="var(--ink)" stroke-width="2"/>
        <text x="130" y="116" text-anchor="middle" font-size="20" font-weight="700" fill="var(--red)" ${D}>450 000</text>
        <text x="130" y="160" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>exiliados en 1939</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Cronología de la Guerra Civil",
    svg: figLinea("Línea del tiempo de julio de 1936 a abril de 1939", [[50, "jul. 1936", "golpe de Estado", 1], [150, "nov. 1936", "batalla de Madrid", 0], [270, "abr. 1937", "Guernica", 1], [370, "oct. 1937", "cae el norte", 0], [470, "jul. 1938", "batalla del Ebro", 1], [560, "ene. 1939", "cae Barcelona", 0], [630, "1-4-1939", "fin de la guerra", 1]], [[50, 630, "", "var(--red)"]]),
  },
  video: { id: "yj9N9DTtdas", titulo: "La Guerra Civil española", canal: "Academia Play", vistas: 6342358, megusta: 120006, busqueda: "guerra civil española resumen" },
  quiz: [
    { q: "¿Cuándo empezó la Guerra Civil?", o: ["Con el golpe de Estado del 17-18 de julio de 1936", "Con la proclamación de la República en 1931", "En 1939"], a: 0, e: "La sublevación militar fracasó en parte del país y la división dio paso a la guerra." },
    { q: "¿Qué países ayudaron al bando sublevado?", o: ["Francia y Reino Unido", "Alemania e Italia", "URSS y México"], a: 1, e: "Hitler y Mussolini enviaron aviones, tanques y miles de soldados." },
    { q: "¿Qué eran las Brigadas Internacionales?", o: ["Voluntarios extranjeros que lucharon por la República", "Tropas alemanas", "Observadores de la ONU"], a: 0, e: "Unos 35 000 voluntarios de más de 50 países." },
    { q: "¿Cuál fue la batalla más larga y sangrienta?", o: ["Madrid", "Guadalajara", "El Ebro"], a: 2, e: "Duró de julio a noviembre de 1938 y supuso el fin del ejército republicano." },
    { q: "¿Quién bombardeó Guernica en 1937?", o: ["La aviación republicana", "La Legión Cóndor alemana", "La aviación francesa"], a: 1, e: "La aviación nazi, aliada de Franco, bombardeó la villa el 26 de abril de 1937." },
  ],
  examen: [
    { q: "El Comité de No Intervención…", o: ["impidió eficazmente toda ayuda extranjera", "no se cumplió: Alemania, Italia y la URSS intervinieron", "fue creado por Franco"], a: 1, e: "Francia y Reino Unido lo promovieron, pero otras potencias lo ignoraron." },
    { q: "FET y de las JONS fue…", o: ["el partido único de la zona sublevada", "un sindicato republicano", "una brigada internacional"], a: 0, e: "Franco unificó en 1937 a falangistas y carlistas en un solo partido." },
    { q: "¿Qué busca hoy la memoria democrática?", o: ["Olvidar el pasado", "Recordar a las víctimas y localizar a los desaparecidos", "Repetir la guerra"], a: 1, e: "Reconocer a las víctimas y conocer la verdad ayuda a convivir en democracia." },
  ],
  feynman: ["Por qué el golpe de 1936 se convirtió en guerra", "Quién apoyó a cada bando desde fuera", "Las fases militares de la guerra", "Qué consecuencias humanas tuvo y qué es la memoria democrática"],
  mapa: mapa("GUERRA CIVIL", "var(--soc, #c2410c)", [
    ["Inicio", "golpe 17-18 julio 1936", "var(--red)"],
    ["Bandos", "republicano vs. sublevado", "var(--bac)"],
    ["Fases", "Madrid · Norte · Ebro · 1939", "var(--ink)"],
    ["Consecuencias", "muertos · exilio · dictadura", "var(--muted)"],
  ], 260),
  tarjetas: [
    ["Inicio de la Guerra Civil", "Golpe de Estado del 17-18 de julio de 1936."],
    ["Final de la guerra", "1 de abril de 1939."],
    ["Brigadas Internacionales", "Voluntarios extranjeros (unos 35 000) que lucharon por la República."],
    ["Batalla del Ebro", "1938, la más larga y sangrienta de la guerra."],
    ["Exilio de 1939", "Unas 450 000 personas salieron de España."],
  ],
  familias: ["Ved juntos el «Guernica» de Picasso (está en el Museo Reina Sofía) y comentad qué figuras aparecen.", "Si en la familia hay recuerdos de la guerra o del exilio, escuchadlos con respeto y anotadlos.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: la Guerra Civil española, su dimensión internacional y la memoria democrática (RD 217/2022, Geografía e Historia 4º; Ley 20/2022 de Memoria Democrática).",
    ideas: ["Análisis del «Guernica» y de carteles de ambos bandos.", "Testimonios orales del exilio (niños de la guerra, maestros republicanos).", "Mapa de la evolución de los frentes en 1936, 1937 y 1938."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Guerra civil española, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Guerra_civil_espa%C3%B1ola" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar las principales batallas y la evolución de los frentes", "Valorar la memoria democrática y la cultura durante la guerra"],
  bloques: [
    { tras: "El golpe de Estado", html: `<h3>Por qué fracasó el golpe y empezó una guerra</h3><p>Los militares sublevados, dirigidos por el general <b>Mola</b> y con <b>Franco</b> al frente del ejército de África, esperaban controlar el país en pocos días. Triunfaron en Galicia, Castilla y León, Navarra, parte de Andalucía y Aragón, y en Canarias, Baleares (salvo Menorca) y el protectorado de Marruecos. Pero en <b>Madrid, Barcelona, Valencia, Bilbao</b> y la mayoría de las ciudades industriales, la resistencia de parte del ejército, de las fuerzas de orden y de las milicias obreras lo hizo fracasar. España quedó partida en dos y el golpe se convirtió en una <mark>guerra civil</mark> que duró casi tres años.</p>` },
    { tras: "La dimensión internacional", html: `<h3>Ayuda exterior y Brigadas Internacionales</h3>${tabla(["Bando", "Recibió ayuda de", "En qué consistía"], [["Sublevado", "Alemania nazi e Italia fascista; Portugal", "Legión Cóndor, aviones, tanques, unos 80.000 soldados italianos"], ["Republicano", "URSS y México", "aviones, tanques y asesores pagados con el oro del Banco de España"], ["Republicano", "Brigadas Internacionales", "unos 35.000-40.000 voluntarios de decenas de países"]])}<p>Reino Unido y Francia crearon el <mark>Comité de No Intervención</mark>, que en la práctica perjudicó a la República, porque Alemania e Italia no lo respetaron.</p>` },
    { tras: "Las fases de la guerra", html: `<h3>Las grandes batallas</h3><p>En 1936 los sublevados avanzaron desde el sur hacia Madrid, pero la capital resistió al grito de «<mark>¡No pasarán!</mark>». Tras fracasar en el Jarama y en Guadalajara (1937), Franco se dirigió al norte: el <b>bombardeo de Guernica</b> (26 de abril de 1937) por la Legión Cóndor destruyó la villa y conmovió al mundo. En 1938 los sublevados llegaron al Mediterráneo y partieron en dos la zona republicana. La <b>batalla del Ebro</b> (julio-noviembre de 1938), la más larga y sangrienta, agotó al ejército republicano. Cataluña cayó a comienzos de 1939 y Madrid, el 28 de marzo.</p>`, video: { id: "CESgr9hmh8I", titulo: "La Guerra Civil española: resumen fácil y breve", canal: "Haroo", vistas: 2315433, megusta: 0 } },
    { tras: "Dos zonas muy diferentes", html: `<h3>La represión en las dos retaguardias</h3><p>En ambas zonas hubo violencia contra la población civil. En la republicana, sobre todo en los primeros meses, grupos incontrolados asesinaron a personas consideradas de derechas, a religiosos y a propietarios (las sacas, los «paseos»). En la sublevada, la represión fue <mark>sistemática y organizada</mark> desde arriba: fusilamientos de maestros, sindicalistas, políticos y autoridades republicanas, como el poeta <b>Federico García Lorca</b>, y continuó después de la guerra. Hoy las leyes de <b>memoria democrática</b> buscan localizar e identificar a los desaparecidos y reconocer a todas las víctimas.</p>` },
    { tras: "Las consecuencias", html: `<h3>Cultura y arte en guerra</h3><p>Durante la guerra el arte se puso al servicio de cada bando con <b>carteles</b> de propaganda. En el pabellón de la República en la Exposición de París de 1937 se mostró el <mark>Guernica de Picasso</mark>, hoy en el Museo Reina Sofía, que denuncia el horror de los bombardeos. Muchos escritores se comprometieron: Antonio Machado murió en el exilio en 1939 y Miguel Hernández, en la cárcel en 1942. Se salvaron las obras del <b>Museo del Prado</b> llevándolas a Valencia, Cataluña y finalmente a Ginebra.</p>` },
  ],
  ejemplos: [
    { enunciado: "Explica por qué la ayuda exterior fue decisiva para el resultado de la guerra.", pasos: ["Los sublevados recibieron mucha ayuda de Alemania e Italia, constante y a crédito.", "Gracias a ella pasaron el ejército de África a la Península en 1936.", "La República solo tuvo la ayuda de la URSS y México, pagada y más irregular.", "Francia y Reino Unido no ayudaron a la República por la No Intervención."], resultado: "El desequilibrio de ayudas favoreció claramente a los sublevados." },
    { enunciado: "Analiza el Guernica como fuente histórica.", pasos: ["Autor: Picasso, 1937, por encargo de la República.", "Contenido: figuras deformadas, madre con hijo muerto, caballo herido, toro: dolor y destrucción.", "Contexto: bombardeo de la villa vasca por la aviación alemana.", "Finalidad: denunciar ante el mundo la guerra y pedir apoyo."], resultado: "Es una fuente que muestra el sufrimiento civil y sirvió de propaganda contra el fascismo." },
    { enunciado: "Ordena: caída de Madrid, Guernica, batalla del Ebro, golpe de Estado, caída de Cataluña.", pasos: ["Golpe: julio de 1936.", "Guernica: abril de 1937.", "Ebro: julio-noviembre de 1938.", "Cataluña: enero-febrero de 1939.", "Madrid: marzo de 1939."], resultado: "Golpe → Guernica → Ebro → Cataluña → Madrid." },
  ],
  errores: [
    "Decir que la guerra empezó porque estalló una revolución: empezó con un golpe militar que fracasó en parte.",
    "Pensar que la No Intervención fue neutral en la práctica: Alemania e Italia ayudaron a los sublevados.",
    "Atribuir el bombardeo de Guernica a la aviación republicana: fue la Legión Cóndor alemana.",
    "Creer que la represión terminó con la guerra: siguió en la posguerra.",
    "Confundir la batalla del Ebro (1938) con la defensa de Madrid (1936).",
  ],
  ejercicios: [
    { q: "¿Dónde triunfó y dónde fracasó el golpe de 1936?", sol: "Triunfó en Galicia, Castilla y León, Navarra, Canarias, parte de Andalucía y Marruecos; fracasó en Madrid, Barcelona, Valencia, Bilbao y las zonas industriales." },
    { q: "¿Qué fue el Comité de No Intervención?", sol: "Un acuerdo de las potencias europeas para no ayudar a ningún bando, que Alemania e Italia incumplieron." },
    { q: "¿Quiénes eran los brigadistas internacionales?", sol: "Voluntarios extranjeros, unos 35.000-40.000, que vinieron a luchar por la República." },
    { q: "¿Qué ocurrió en Guernica en 1937?", sol: "La aviación alemana de la Legión Cóndor bombardeó la villa y causó muchos muertos civiles." },
    { q: "¿Por qué fue importante la batalla del Ebro?", sol: "Fue la más larga y sangrienta; su derrota dejó a la República sin capacidad de resistir." },
    { q: "¿Cuándo terminó la guerra?", sol: "El 1 de abril de 1939, con el último parte de guerra de Franco." },
    { q: "Compara la represión en las dos zonas.", sol: "En la republicana hubo asesinatos sobre todo al principio y fuera de control; en la sublevada fue sistemática, organizada y continuó tras la guerra." },
    { q: "¿Qué buscan las leyes de memoria democrática?", sol: "Reconocer a las víctimas, localizar e identificar a los desaparecidos y conocer la verdad de lo ocurrido." },
    { q: "Cita dos escritores víctimas de la guerra.", sol: "Federico García Lorca, asesinado en 1936; Antonio Machado, muerto en el exilio en 1939; Miguel Hernández, muerto en prisión en 1942." },
    { q: "¿Cuántas personas se exiliaron al terminar la guerra?", sol: "Alrededor de medio millón cruzaron la frontera francesa a comienzos de 1939; muchos no volvieron nunca." },
  ],
  quiz: [
    { q: "El golpe de Estado fracasó en…", o: ["Madrid y Barcelona", "Pamplona y Burgos", "Sevilla y Cádiz"], a: 0, e: "Por eso empezó una guerra." },
    { q: "El bombardeo de Guernica lo realizó…", o: ["la Legión Cóndor", "la aviación soviética", "la aviación francesa"], a: 0, e: "Era una unidad alemana." },
    { q: "La batalla más larga de la guerra fue…", o: ["la del Ebro", "la del Jarama", "la de Brunete"], a: 0, e: "Duró de julio a noviembre de 1938." },
    { q: "El Guernica de Picasso está hoy en…", o: ["el Museo Reina Sofía", "el Prado", "el Louvre"], a: 0, e: "En Madrid." },
    { q: "La República recibió ayuda sobre todo de…", o: ["la URSS y México", "Alemania e Italia", "EE. UU."], a: 0, e: "Pagada con el oro del Banco de España en el caso soviético." },
  ],
  tarjetas: [
    ["Brigadas Internacionales", "Voluntarios extranjeros que lucharon por la República."],
    ["Batalla del Ebro", "La más larga de la guerra (1938)."],
    ["Guernica", "Villa bombardeada en 1937 y cuadro de Picasso que lo denuncia."],
  ],
});
