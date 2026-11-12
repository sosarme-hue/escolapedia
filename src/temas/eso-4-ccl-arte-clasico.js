// Cultura Clásica 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas } = require("./_hum");

const columna = (x, tipo, c) => {
  const cap = tipo === "dórico" ? `<rect x="${x - 26}" y="34" width="52" height="10" fill="${c}"/><path d="M${x - 20} 44 h40 l -6 8 h -28 z" fill="${c}"/>`
    : tipo === "jónico" ? `<rect x="${x - 28}" y="34" width="56" height="8" fill="${c}"/><circle cx="${x - 22}" cy="48" r="7" fill="none" stroke="${c}" stroke-width="3"/><circle cx="${x + 22}" cy="48" r="7" fill="none" stroke="${c}" stroke-width="3"/><path d="M${x - 15} 46 h30" stroke="${c}" stroke-width="3"/>`
    : `<rect x="${x - 28}" y="30" width="56" height="8" fill="${c}"/>${[-18, -8, 2, 12].map((d) => `<path d="M${x + d} 56 q 3 -10 6 -18" stroke="${c}" stroke-width="3" fill="none"/>`).join("")}<path d="M${x - 16} 56 q -8 -8 -10 -16 M${x + 16} 56 q 8 -8 10 -16" stroke="${c}" stroke-width="3" fill="none"/>`;
  return `${cap}<rect x="${x - 14}" y="56" width="28" height="${tipo === "dórico" ? 96 : 92}" fill="${c}" opacity=".85"/>${[-7, 0, 7].map((d) => `<path d="M${x + d} 58 V 148" stroke="var(--paper)" stroke-width="1.5"/>`).join("")}${tipo === "dórico" ? "" : `<rect x="${x - 20}" y="148" width="40" height="6" fill="${c}"/>`}<rect x="${x - 24}" y="154" width="48" height="6" fill="var(--muted)"/>`;
};

module.exports = {
  materia: "Cultura Clásica",
  curso: "4-eso",
  titulo: "El arte clásico y su pervivencia",
  minutos: 60,
  objetivos: ["Distinguir los órdenes arquitectónicos dórico, jónico y corintio", "Reconocer las etapas y rasgos de la escultura griega", "Explicar las aportaciones del arte y la ingeniería romanos", "Identificar la pervivencia del arte clásico en edificios y obras posteriores"],
  claves: ["orden arquitectónico", "templo", "canon", "arco", "acueducto", "neoclasicismo"],
  pregunta: {
    texto: "El Congreso de los Diputados, el Banco de España, el Capitolio de Washington o el Museo del Prado tienen columnas, frontones triangulares y escalinatas. ¿Por qué tantos edificios importantes se parecen a un templo griego?",
    respuesta: "Porque el <mark>arte clásico</mark> se convirtió en el modelo de la belleza, el equilibrio y el poder. Se imitó en el Renacimiento, en el Neoclasicismo y hasta hoy. Saber leer sus columnas y frontones es aprender un idioma que sigue en nuestras calles.",
  },
  bloques: [
    {
      html: `<h3>Los ideales del arte griego</h3><p>Los griegos buscaban la <mark>belleza</mark> a través de la <b>proporción</b>, la <b>armonía</b> y el <b>equilibrio</b>. Pensaban que lo bello se puede medir: todas las partes de un edificio o de una escultura guardan una relación matemática con el conjunto. También tenían como medida al <b>ser humano</b>: sus templos no eran gigantescos como las pirámides egipcias, sino a escala humana, y su escultura representaba sobre todo el cuerpo humano idealizado.</p>`,
    },
    {
      html: `<h3>El templo griego</h3><p>El edificio más importante era el <b>templo</b>, la casa del dios, donde se guardaba su estatua. Los fieles no entraban: los ritos se hacían en el altar exterior. Tenía planta rectangular, una sala central (<b>naos</b> o <i>cella</i>) y estaba rodeado de <mark>columnas</mark>. Se apoyaba sobre unas gradas (<b>crepidoma</b>) y se cubría con un tejado a dos aguas, que formaba en la fachada un triángulo, el <b>frontón</b>, decorado con esculturas. El templo más famoso es el <b>Partenón</b> (447-432 a. C.), dedicado a Atenea en la Acrópolis de Atenas, dirigido por el escultor Fidias.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fachada de un templo griego: crepidoma, columnas, entablamento y frontón">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M30 56 L 130 18 L 230 56 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>
        <rect x="30" y="56" width="200" height="16" fill="var(--pen)"/>
        ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${42 + i * 34}" y="72" width="14" height="66" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}
        <rect x="24" y="138" width="212" height="8" fill="var(--muted)"/><rect x="18" y="146" width="224" height="8" fill="var(--muted)" opacity=".7"/>
        <g ${F} font-size="11" font-weight="700" fill="var(--ink)"><text x="130" y="48" text-anchor="middle">frontón</text><text x="130" y="68" text-anchor="middle" fill="#fff">entablamento</text><rect x="96" y="98" width="68" height="18" rx="4" fill="var(--paper)"/><text x="130" y="111" text-anchor="middle">columnas</text><text x="130" y="170" text-anchor="middle">crepidoma (gradas)</text></g></svg>`,
    },
    {
      html: `<h3>Los órdenes arquitectónicos</h3><p>Un <b>orden</b> es un sistema de proporciones y adornos para la columna y el entablamento. Se distinguen por el <mark>capitel</mark>, la parte de arriba de la columna:</p>${tabla(["Orden", "Rasgos", "Ejemplo"], [["Dórico", "sin basa, columna robusta, capitel liso y sencillo; aspecto sobrio y fuerte", "Partenón"], ["Jónico", "con basa, columna más esbelta, capitel con dos volutas (espirales)", "Erecteion"], ["Corintio", "con basa, capitel con hojas de acanto; el más decorado", "Templo de Zeus Olímpico"]])}<p>Un truco para recordarlos: el dórico es el más «duro» y sencillo; el jónico tiene «ojos» (volutas); el corintio tiene «coronas» de hojas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres columnas: dórica con capitel liso, jónica con volutas y corintia con hojas de acanto">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${columna(50, "dórico", "var(--pen)")}${columna(130, "jónico", "var(--leaf)")}${columna(210, "corintio", "var(--red)")}
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="50" y="174" fill="var(--pen)">dórico</text><text x="130" y="174" fill="var(--leaf)">jónico</text><text x="210" y="174" fill="var(--red)">corintio</text></g></svg>`,
      video: { id: "OHI2o7GC9ek", titulo: "Columnas dóricas, jónicas y corintias: ¿en qué se diferencian?", canal: "Experiencias con Arte", vistas: 103070, megusta: 0 },
    },
    {
      html: `<h3>La escultura griega</h3><p>La escultura evolucionó en tres etapas. En la época <b>arcaica</b> (siglos VII-VI a. C.) las figuras, los <b>kouros</b> (jóvenes) y las <b>korai</b> (muchachas), eran rígidas, frontales y con la «sonrisa arcaica». En la época <b>clásica</b> (siglo V a. C.) se alcanzó el equilibrio y el ideal de belleza: <b>Mirón</b> captó el movimiento en el <i>Discóbolo</i>; <b>Policleto</b> fijó el <mark>canon</mark> de proporciones (la cabeza mide 1/7 del cuerpo) en el <i>Doríforo</i>; <b>Fidias</b> decoró el Partenón. En el <b>Helenismo</b> se buscó la emoción, el dramatismo y el movimiento: el <i>Laocoonte</i> o la <i>Victoria de Samotracia</i>.</p>`,
      svg: filas("Etapas de la escultura griega", [["Arcaica", "kouros: rígido, frontal", "var(--muted)"], ["Clásica", "Discóbolo: equilibrio", "var(--pen)"], ["Helenística", "Laocoonte: dramatismo", "var(--red)"]]),
    },
    {
      html: `<h3>El arte romano: práctico y monumental</h3><p>Los romanos admiraban el arte griego (copiaron muchas estatuas, gracias a lo cual las conocemos), pero aportaron su sentido <mark>práctico</mark>. Usaron el <b>arco</b> de medio punto, la <b>bóveda</b> y la <b>cúpula</b>, y un material revolucionario: el <b>hormigón</b> (<i>opus caementicium</i>). Así pudieron cubrir grandes espacios, como el <b>Panteón</b> de Roma, con una cúpula de 43 metros de diámetro que sigue en pie casi 2.000 años después. En escultura destacaron el <b>retrato</b> realista, con arrugas y defectos, y los relieves históricos de columnas y arcos de triunfo.</p>`,
      svg: dos("Arte griego frente a arte romano", ["Grecia", ["belleza ideal", "columna y dintel", "templo", "mármol", "escala humana"], "var(--pen)"], ["Roma", ["utilidad", "arco y bóveda", "obra pública", "hormigón", "monumental"], "var(--red)"]),
    },
    {
      html: `<h3>Ingeniería y obras públicas</h3><p>Roma llenó su imperio de construcciones útiles para la vida en la ciudad:</p>${tabla(["Obra", "Función", "Ejemplo en España"], [["Acueducto", "llevar agua a la ciudad", "Segovia"], ["Puente", "cruzar ríos con las calzadas", "Alcántara (Cáceres)"], ["Teatro", "representaciones", "Mérida"], ["Anfiteatro", "luchas de gladiadores y fieras", "Tarragona, Itálica"], ["Circo", "carreras de carros", "Mérida, Tarragona"], ["Termas", "baños públicos", "Baños de la Encina, Caldes de Montbui"], ["Faro", "orientar a los barcos", "Torre de Hércules (A Coruña), aún en uso"]])}`,
      video: { id: "VOBysBBlki0", titulo: "El arte de la antigua Grecia: arquitectura", canal: "Belén Montilla", vistas: 75534, megusta: 0 },
    },
    {
      html: `<h3>Pintura, cerámica y mosaico</h3><p>De la pintura griega sobre tabla casi no queda nada, pero conocemos su estilo por la <b>cerámica</b>: en los vasos de <mark>figuras negras</mark> (siglo VI a. C.) las siluetas se pintaban en negro sobre el barro rojo; en los de <mark>figuras rojas</mark> (desde el 530 a. C.) se hacía al revés, lo que permitía dibujar más detalles. Los romanos decoraron sus casas con <b>pinturas murales</b> (las de Pompeya se conservaron bajo la ceniza del Vesubio) y con <b>mosaicos</b>, imágenes hechas con miles de pequeñas piezas de piedra o vidrio llamadas <i>teselas</i>. En España hay mosaicos espléndidos en Mérida, Itálica o la villa de La Olmeda (Palencia).</p>`,
    },
    {
      html: `<h3>La pervivencia del arte clásico</h3><p>El arte clásico nunca se olvidó del todo. En el <b>Renacimiento</b> (siglos XV-XVI), arquitectos como Brunelleschi o Palladio recuperaron columnas, cúpulas y proporciones; Miguel Ángel se inspiró en el <i>Laocoonte</i>. En el <b>Neoclasicismo</b> (siglo XVIII y XIX) se copiaron directamente los templos: en Madrid, el <b>Museo del Prado</b>, el <b>Congreso de los Diputados</b> o la Puerta de Alcalá; en Washington, el Capitolio y la Casa Blanca. Hoy sigue presente en el diseño: los trofeos, las medallas olímpicas, logotipos de bancos y universidades usan columnas como símbolo de <mark>solidez y prestigio</mark>.</p>`,
      svg: filas("Edificios inspirados en el arte clásico", [["Prado", "Madrid, neoclásico", "var(--pen)"], ["Congreso", "Madrid, frontón y columnas", "var(--red)"], ["Capitolio", "Washington, cúpula", "var(--sun)"], ["Panteón París", "copia del de Roma", "var(--leaf)"]]),
    },
  ],
  figura: {
    titulo: "Cómo distinguir los tres órdenes",
    svg: `<svg viewBox="0 0 680 220" role="img" aria-label="Comparación de los órdenes dórico, jónico y corintio con su capitel y un ejemplo">
      <rect width="680" height="220" rx="16" fill="var(--paper)"/>
      ${[["Dórico", "sin basa · capitel liso", "Partenón", "var(--pen)", "dórico"], ["Jónico", "basa · volutas", "Erecteion", "var(--leaf)", "jónico"], ["Corintio", "basa · hojas de acanto", "Panteón de Roma", "var(--red)", "corintio"]].map(([t, d, e, c, k], i) => `<rect x="${20 + i * 218}" y="16" width="204" height="188" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><g transform="translate(${20 + i * 218 - 10} 10) scale(0.9)">${columna(70, k, c)}</g><text x="${172 + i * 218}" y="74" text-anchor="middle" font-size="18" font-weight="700" fill="${c}" ${D}>${t}</text><text x="${172 + i * 218}" y="104" text-anchor="middle" font-size="11" fill="var(--ink)" ${F}>${d.split(" · ")[0]}</text><text x="${172 + i * 218}" y="122" text-anchor="middle" font-size="11" fill="var(--ink)" ${F}>${d.split(" · ")[1]}</text><text x="${172 + i * 218}" y="156" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)" ${F}>${e}</text>`).join("")}
    </svg>`,
  },
  video: { id: "tmK8iqWAqK4", titulo: "La arquitectura griega en 2 minutos", canal: "Con Mucho Arte", vistas: 116281, megusta: 0, busqueda: "órdenes arquitectónicos arquitectura griega" },
  ejemplos: [
    { enunciado: "Ves una columna sin basa, gruesa, con un capitel formado por una simple losa. ¿De qué orden es?", pasos: ["No tiene basa: es un rasgo del dórico.", "El capitel es liso, sin volutas ni hojas.", "Su aspecto robusto también es típico del dórico."], resultado: "Orden dórico." },
    { enunciado: "Describe el Discóbolo de Mirón y explica a qué etapa pertenece.", pasos: ["Representa a un atleta en el momento justo antes de lanzar el disco.", "Capta el movimiento, pero el rostro está sereno y el cuerpo es idealizado y proporcionado.", "Busca el equilibrio entre movimiento y armonía."], resultado: "Pertenece a la escultura clásica (siglo V a. C.)." },
    { enunciado: "¿Por qué el acueducto de Segovia sigue en pie sin argamasa?", pasos: ["Está hecho con bloques de granito colocados unos sobre otros.", "Usa arcos de medio punto, que reparten el peso hacia los pilares.", "Cada pieza presiona a la de al lado y el conjunto se sostiene por equilibrio de fuerzas."], resultado: "Por la forma del arco, que transmite las cargas hacia el suelo." },
  ],
  errores: [
    "Confundir los órdenes: el jónico tiene volutas y el corintio, hojas de acanto.",
    "Pensar que los templos griegos eran blancos: estaban pintados de colores vivos que se han perdido.",
    "Creer que los fieles entraban en el templo griego: los ritos se hacían en el altar exterior.",
    "Pensar que los romanos solo copiaron: inventaron técnicas como el hormigón y generalizaron el arco y la bóveda.",
    "Confundir anfiteatro (gladiadores, forma ovalada) con teatro (semicircular, obras dramáticas).",
  ],
  ejercicios: [
    { q: "Escribe tres ideales del arte griego.", sol: "Proporción, armonía y equilibrio (también la medida humana y la belleza ideal)." },
    { q: "Nombra y explica cuatro partes de un templo griego.", sol: "Crepidoma (gradas de base), columnas, entablamento (parte horizontal sobre las columnas) y frontón (triángulo de la fachada); también la naos o cella." },
    { q: "Diferencia los tres órdenes por su capitel.", sol: "Dórico: liso; jónico: con volutas; corintio: con hojas de acanto." },
    { q: "¿A quién estaba dedicado el Partenón y quién dirigió su decoración?", sol: "A Atenea; lo dirigió el escultor Fidias." },
    { q: "¿Qué es el canon de Policleto?", sol: "Un sistema de proporciones ideales del cuerpo humano, en el que la cabeza mide una séptima parte de la altura." },
    { q: "Compara un kouros arcaico con el Laocoonte helenístico.", sol: "El kouros es rígido, frontal y sereno; el Laocoonte muestra movimiento violento, dolor y dramatismo." },
    { q: "¿Qué tres elementos constructivos generalizaron los romanos?", sol: "El arco, la bóveda y la cúpula (y el hormigón como material)." },
    { q: "Escribe cuatro obras públicas romanas en España.", sol: "Acueducto de Segovia, puente de Alcántara, teatro de Mérida y Torre de Hércules (también anfiteatros de Tarragona o Itálica)." },
    { q: "Explica qué fue el Neoclasicismo y pon dos ejemplos en Madrid.", sol: "Un estilo de los siglos XVIII y XIX que imitaba el arte grecorromano. Ejemplos: el Museo del Prado y el Congreso de los Diputados." },
    { q: "¿Por qué se usan columnas en edificios de bancos o tribunales?", sol: "Porque evocan el arte clásico y transmiten solidez, prestigio, orden y tradición." },
  ],
  quiz: [
    { q: "El capitel con volutas es del orden…", o: ["jónico", "dórico", "corintio"], a: 0, e: "Volutas en espiral." },
    { q: "El capitel con hojas de acanto es…", o: ["corintio", "dórico", "jónico"], a: 0, e: "El más decorado." },
    { q: "El orden sin basa es el…", o: ["dórico", "jónico", "corintio"], a: 0, e: "La columna apoya en el suelo." },
    { q: "El Partenón está dedicado a…", o: ["Atenea", "Zeus", "Apolo"], a: 0, e: "En la Acrópolis." },
    { q: "El triángulo de la fachada del templo es el…", o: ["frontón", "capitel", "fuste"], a: 0, e: "Decorado con esculturas." },
    { q: "El Discóbolo es de…", o: ["Mirón", "Fidias", "Praxíteles"], a: 0, e: "Época clásica." },
    { q: "El Laocoonte pertenece a la época…", o: ["helenística", "arcaica", "clásica"], a: 0, e: "Dramatismo y movimiento." },
    { q: "Los romanos inventaron un material llamado…", o: ["hormigón", "acero", "ladrillo cocido"], a: 0, e: "Opus caementicium." },
    { q: "El acueducto más famoso de España está en…", o: ["Segovia", "Mérida", "Sevilla"], a: 0, e: "Siglo I-II d. C." },
    { q: "El Museo del Prado es de estilo…", o: ["neoclásico", "gótico", "románico"], a: 0, e: "Imita el arte clásico." },
  ],
  examen: [
    { q: "El canon de Policleto fija que la cabeza mide…", o: ["1/7 del cuerpo", "1/2", "1/10"], a: 0, e: "En el Doríforo." },
    { q: "La Torre de Hércules es un…", o: ["faro romano", "templo griego", "circo"], a: 0, e: "En A Coruña, aún funciona." },
    { q: "El retrato romano se caracteriza por…", o: ["el realismo", "la idealización total", "la sonrisa arcaica"], a: 0, e: "Con arrugas y defectos." },
  ],
  feynman: ["Las partes de un templo griego", "Cómo distinguir los tres órdenes", "Las tres etapas de la escultura griega", "Qué aportaron los romanos y dónde vemos hoy el arte clásico"],
  mapa: mapa("ARTE CLÁSICO", "var(--sun)", [
    ["Grecia", "templo · órdenes · Partenón", "var(--pen)"],
    ["Escultura", "arcaica · clásica · helenística", "var(--sun)"],
    ["Roma", "arco · hormigón · obras públicas", "var(--red)"],
    ["Pervivencia", "Renacimiento · Neoclasicismo", "var(--leaf)"],
  ], 270),
  tarjetas: [
    ["Orden dórico", "Sin basa, capitel liso, aspecto robusto."],
    ["Orden jónico", "Con basa y capitel de volutas."],
    ["Orden corintio", "Capitel con hojas de acanto."],
    ["Frontón", "Triángulo de la fachada del templo, decorado con esculturas."],
    ["Canon", "Sistema de proporciones ideales del cuerpo (Policleto)."],
    ["Helenismo en escultura", "Dramatismo, emoción y movimiento (Laocoonte)."],
    ["Opus caementicium", "Hormigón romano."],
    ["Neoclasicismo", "Estilo de los siglos XVIII y XIX que imita el arte clásico."],
  ],
  familias: ["Dad un paseo por vuestra ciudad buscando columnas y averiguad su orden.", "Visitad juntos un museo o un yacimiento romano cercano.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Cultura Clásica (optativa autonómica): arquitectura y escultura griegas, arte e ingeniería romanos, patrimonio romano en España y pervivencia en el arte posterior.",
    ideas: ["Gincana fotográfica de columnas en la localidad.", "Construir un arco de medio punto con piezas de cartón.", "Mapa del patrimonio romano de la comunidad autónoma."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Orden clásico, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Orden_cl%C3%A1sico" },
  ],
  revisado: "2026-11-12",
};
