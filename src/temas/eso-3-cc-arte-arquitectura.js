// Cultura Clásica 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, figCols, ampliar, tabla, caja } = require("./_hum");

// Dibujo propio: tres capiteles de los órdenes griegos.
const ordenes = caja("Los tres órdenes griegos: dórico con capitel liso, jónico con volutas y corintio con hojas de acanto", `
  <g ${F} text-anchor="middle" font-size="12" font-weight="700">
    <g stroke="var(--ink)" stroke-width="2" fill="var(--card)">
      <rect x="22" y="40" width="56" height="10"/><path d="M28 50 L 72 50 L 66 62 L 34 62 Z"/><rect x="36" y="62" width="28" height="80"/>
      <rect x="102" y="40" width="56" height="10"/><circle cx="108" cy="58" r="8"/><circle cx="152" cy="58" r="8"/><rect x="108" y="52" width="44" height="10"/><rect x="116" y="62" width="28" height="80"/>
      <rect x="182" y="34" width="56" height="10"/><path d="M190 44 L 230 44 L 224 70 L 196 70 Z"/><path d="M198 70 Q 196 56 202 50 M210 70 Q 210 54 210 48 M222 70 Q 224 56 218 50" fill="none"/><rect x="196" y="70" width="28" height="72"/>
    </g>
    <path d="M44 66 V 138 M50 66 V 138 M56 66 V 138 M124 66 V 138 M130 66 V 138 M136 66 V 138 M204 74 V 138 M210 74 V 138 M216 74 V 138" stroke="var(--line)" stroke-width="1.5"/>
    <rect x="108" y="142" width="44" height="8" fill="var(--muted)"/><rect x="188" y="142" width="44" height="8" fill="var(--muted)"/>
    <text x="50" y="168" fill="var(--pen)">dórico</text><text x="130" y="168" fill="var(--red)">jónico</text><text x="210" y="168" fill="var(--leaf)">corintio</text>
    <text x="50" y="24" fill="var(--muted)" font-size="10.5">sin basa</text><text x="130" y="24" fill="var(--muted)" font-size="10.5">volutas</text><text x="210" y="24" fill="var(--muted)" font-size="10.5">acanto</text>
  </g>`);

module.exports = {
  materia: "Cultura Clásica",
  curso: "3-eso",
  titulo: "Arte y arquitectura clásica",
  minutos: 35,
  objetivos: ["Reconocer los órdenes arquitectónicos griegos", "Describir el templo griego y las grandes obras de la ingeniería romana", "Distinguir la escultura griega y la romana"],
  claves: ["orden dórico, jónico y corintio", "templo", "Partenón", "arco y bóveda", "hormigón", "anfiteatro", "acueducto", "canon"],
  pregunta: {
    texto: "El Banco de España, el Congreso de los Diputados o muchos museos tienen columnas y un frontón triangular en la fachada. ¿Por qué se construyen así edificios de los siglos XIX y XX?",
    respuesta: "Porque imitan los <mark>templos griegos</mark>. La arquitectura clásica transmite equilibrio, orden y solemnidad, y por eso se copió en el Renacimiento, en el Neoclasicismo y hasta hoy para edificios importantes. Aprender sus elementos te permite «leer» las fachadas de tu ciudad.",
  },
  bloques: [
    {
      html: `<h3>Los órdenes griegos</h3><p>Los griegos construían con un sistema <b>adintelado</b>: columnas verticales que sostienen vigas horizontales (el <i>dintel</i>). Las proporciones y la decoración de cada edificio seguían unas reglas llamadas <mark>órdenes</mark>. El <b>dórico</b> es el más sencillo y robusto: columna sin basa y capitel liso. El <b>jónico</b> es más esbelto, con basa y un capitel con dos espirales, las <b>volutas</b>. El <b>corintio</b>, el más decorado, tiene un capitel con hojas de <b>acanto</b>; fue el favorito de los romanos.</p>`,
      svg: ordenes,
    },
    {
      html: `<h3>El templo griego</h3><p>El edificio más importante del arte griego era el <mark>templo</mark>, la casa del dios. No era un lugar de reunión de fieles: dentro solo estaba la <b>estatua del dios</b>, en una sala llamada <b>naos</b> o cella, y las ceremonias se hacían fuera, en el altar. Se levantaba sobre unas gradas, estaba rodeado de columnas y tenía un tejado a dos aguas que formaba en la fachada un triángulo, el <b>frontón</b>, decorado con esculturas. El más famoso es el <mark>Partenón</mark>, dedicado a Atenea en la Acrópolis de Atenas (siglo V a. C.).</p>`,
      svg: filas("Partes del templo griego", [["Frontón", "triángulo de la fachada", "var(--red)"], ["Friso", "relieves bajo el tejado", "var(--sun)"], ["Columnas", "rodean la naos", "var(--pen)"], ["Naos", "estatua del dios", "var(--leaf)"]]),
    },
    {
      html: `<h3>La escultura griega</h3><p>Los escultores griegos buscaban la <mark>belleza ideal</mark>: cuerpos perfectos, proporcionados y serenos. Usaron el mármol y el bronce y representaron sobre todo dioses y atletas, a menudo desnudos. Con el tiempo pasaron de figuras rígidas a cuerpos en movimiento. <b>Mirón</b> esculpió el <i>Discóbolo</i>, un atleta a punto de lanzar el disco; <b>Policleto</b> fijó un <b>canon</b> de proporciones (la cabeza mide 1/7 del cuerpo) en el <i>Doríforo</i>; y <b>Fidias</b> dirigió la decoración del Partenón. Curiosamente, las esculturas estaban <b>pintadas</b> de colores, que se han perdido.</p>`,
      svg: filas("Grandes escultores griegos", [["Mirón", "Discóbolo: movimiento", "var(--pen)"], ["Policleto", "Doríforo: canon", "var(--red)"], ["Fidias", "Partenón", "var(--sun)"], ["Praxíteles", "curva y gracia", "var(--leaf)"]]),
    },
    {
      html: `<h3>La arquitectura romana</h3><p>Los romanos copiaron los órdenes griegos, pero su gran aportación fue técnica. Usaron el <mark>arco de medio punto</mark>, la <b>bóveda</b> (un arco prolongado) y la <b>cúpula</b> (un arco girado), que permitían cubrir grandes espacios sin columnas. Inventaron además el <b>hormigón</b> (<i>opus caementicium</i>), una mezcla de cal, arena volcánica, agua y piedras, barato y resistente. Gracias a ello construyeron edificios enormes, como el <b>Panteón</b> de Roma, con una cúpula de 43 metros de diámetro que sigue en pie casi 2.000 años después.</p>`,
      svg: dos("Del sistema griego al romano", ["Grecia", ["columna y dintel", "piedra y mármol", "templos", "belleza"], "var(--pen)"], ["Roma", ["arco, bóveda, cúpula", "hormigón y ladrillo", "obras públicas", "utilidad"], "var(--red)"]),
    },
    {
      html: `<h3>Obras públicas romanas</h3><p>Roma construyó por todo el Imperio obras para la vida de las ciudades: <b>acueductos</b> que traían agua desde kilómetros de distancia, como el de <b>Segovia</b>; <b>puentes</b>, como el de Alcántara; <b>calzadas</b> que unían las provincias; <b>termas</b>; y edificios para espectáculos: el <b>teatro</b>, el <mark>anfiteatro</mark> (para gladiadores, como el Coliseo) y el <b>circo</b> (para carreras de carros). También levantaron <b>arcos de triunfo</b> para conmemorar victorias. El arte romano es, ante todo, un arte <mark>práctico</mark> y al servicio del poder.</p>`,
      svg: filas("Obras públicas romanas y su función", [["Acueducto", "traer agua", "var(--inf)"], ["Calzada", "unir provincias", "var(--muted)"], ["Termas", "baños públicos", "var(--red)"], ["Anfiteatro", "gladiadores", "var(--leaf)"], ["Circo", "carreras de carros", "var(--sun)"]]),
    },
  ],
  figura: {
    titulo: "Arte griego y arte romano",
    svg: figCols("Comparación entre el arte griego y el romano", [["Grecia", ["templo y órdenes", "columna y dintel", "escultura ideal", "Partenón"], "var(--pen)"], ["Roma", ["arco y bóveda", "hormigón", "retrato realista", "Panteón, Coliseo"], "var(--red)"], ["Hispania", ["acueducto de Segovia", "teatro de Mérida", "puente de Alcántara", "Itálica"], "var(--leaf)"]]),
  },
  video: { id: "OHI2o7GC9ek", titulo: "Columnas dóricas, jónicas y corintias: ¿en qué se diferencian?", canal: "Experiencias con Arte", vistas: 103068, megusta: 0, busqueda: "órdenes arquitectónicos griegos" },
  quiz: [
    { q: "¿Qué orden tiene capitel con volutas?", o: ["Dórico", "Jónico", "Corintio"], a: 1, e: "Dos espirales en el capitel." },
    { q: "¿A qué diosa estaba dedicado el Partenón?", o: ["Hera", "Atenea", "Afrodita"], a: 1, e: "En la Acrópolis de Atenas." },
    { q: "¿Qué esculpió Mirón?", o: ["El Discóbolo", "El Doríforo", "La Venus de Milo"], a: 0, e: "Atleta lanzando el disco." },
    { q: "¿Qué material inventaron los romanos?", o: ["El hormigón", "El acero", "El vidrio"], a: 0, e: "Opus caementicium." },
    { q: "¿Para qué servía un acueducto?", o: ["Para llevar agua", "Para carreras", "Para rezar"], a: 0, e: "Como el de Segovia." },
  ],
  examen: [
    { q: "El sistema griego de columna y viga se llama…", o: ["adintelado", "abovedado", "de arco"], a: 0, e: "Columnas que sostienen el dintel." },
    { q: "Las carreras de carros se celebraban en el…", o: ["circo", "anfiteatro", "teatro"], a: 0, e: "El anfiteatro era para gladiadores." },
    { q: "El canon de Policleto establece que la cabeza mide…", o: ["1/7 del cuerpo", "1/2 del cuerpo", "1/20 del cuerpo"], a: 0, e: "En el Doríforo." },
  ],
  feynman: ["Cómo se distinguen los tres órdenes griegos", "Qué partes tiene un templo griego y para qué servía", "Qué buscaban los escultores griegos", "Qué aportaron los romanos a la arquitectura"],
  mapa: mapa("ARTE CLÁSICO", "var(--sun)", [
    ["Órdenes", "dórico · jónico · corintio", "var(--pen)"],
    ["Templo", "Partenón · frontón", "var(--sun)"],
    ["Escultura", "belleza ideal · canon", "var(--leaf)"],
    ["Roma", "arco · hormigón · obras", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Orden dórico", "Columna sin basa y capitel liso."],
    ["Orden jónico", "Columna esbelta con basa y capitel de volutas."],
    ["Orden corintio", "Capitel decorado con hojas de acanto."],
    ["Frontón", "Triángulo de la fachada del templo."],
    ["Anfiteatro", "Edificio elíptico para luchas de gladiadores."],
  ],
  familias: ["Pasead por el centro de vuestra ciudad y buscad columnas: ¿son dóricas, jónicas o corintias?", "Mirad juntos fotos del Partenón y del Panteón y comparad cómo se cubre cada uno.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El arte y la arquitectura de Grecia y Roma: órdenes, templo, escultura, técnicas constructivas romanas, obras públicas y su pervivencia (Cultura Clásica, materia optativa que ofertan las comunidades autónomas en el marco del RD 217/2022).",
    ideas: ["Caza de órdenes clásicos en fachadas del barrio con fotos.", "Construir un arco de medio punto con piezas de cartón y una clave.", "Comparar el Discóbolo con fotos de un lanzador actual."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Museo Nacional de Arte Romano (Mérida)", url: "https://www.culturaydeporte.gob.es/mnromano/home.html" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Distinguir los edificios romanos para espectáculos", "Reconocer la pervivencia del arte clásico en épocas posteriores"],
  bloques: [
    { tras: "El templo griego", html: `<h3>La Acrópolis de Atenas</h3><p>La <mark>Acrópolis</mark> («ciudad alta») era una colina fortificada que, tras las Guerras Médicas, <b>Pericles</b> mandó reconstruir como el gran santuario de Atenas. Se entraba por una puerta monumental, los <b>Propileos</b>. El edificio principal era el <b>Partenón</b> (447–432 a. C.), de orden dórico, obra de los arquitectos Ictino y Calícrates, con esculturas de Fidias y una gran estatua de Atenea de oro y marfil en su interior. Al lado está el <b>Erecteion</b>, de orden jónico, famoso por su pórtico de las <b>Cariátides</b>: columnas con forma de mujer. Los arquitectos usaron trucos ópticos, como curvar ligeramente las líneas, para que el edificio pareciera perfectamente recto.</p>` },
    { tras: "La escultura griega", html: `<h3>La escultura romana: el retrato</h3><p>Los romanos admiraban la escultura griega y la copiaron mucho: gran parte de las obras griegas que conocemos son en realidad <b>copias romanas</b> en mármol de originales en bronce perdidos. Su aportación propia fue el <mark>retrato realista</mark>: bustos que muestran a la persona tal como era, con arrugas, calvas o verrugas, porque se usaban para recordar a los antepasados. Los emperadores encargaban estatuas que transmitían poder, como el <b>Augusto de Prima Porta</b>. Además, crearon <b>relieves históricos</b> que narraban victorias, como la columna de Trajano, una especie de cómic en espiral de 200 metros.</p>` },
    { tras: "Obras públicas romanas", html: `<h3>Teatro, anfiteatro y circo</h3>${tabla(["Edificio", "Forma", "Espectáculo", "Ejemplo"], [["Teatro", "semicírculo", "comedias y tragedias", "Mérida"], ["Anfiteatro", "elipse cerrada", "gladiadores y fieras", "Coliseo (Roma), Itálica"], ["Circo", "rectángulo alargado con una spina central", "carreras de carros", "Circo Máximo, Toledo"]])}<p>El <mark>Coliseo</mark> (Anfiteatro Flavio), inaugurado en el 80 d. C., tenía cuatro pisos con los tres órdenes superpuestos (dórico abajo, luego jónico y corintio), capacidad para unos 50.000 espectadores y un toldo, el <i>velarium</i>, para dar sombra.</p>`, video: { id: "p5m8uLafEqw", titulo: "Cómo se construyó el Panteón de Roma: secretos de una cúpula sin igual", canal: "SLICE Iberia", vistas: 244701, megusta: 0 } },
    { tras: "La arquitectura romana", html: `<h3>La pervivencia del arte clásico</h3><p>El arte clásico nunca desapareció del todo. En el <b>Renacimiento</b> (siglos XV–XVI), artistas como Brunelleschi o Miguel Ángel estudiaron las ruinas de Roma y volvieron a usar columnas, frontones y cúpulas. En el <mark>Neoclasicismo</mark> (siglos XVIII–XIX) se copiaron directamente los templos: en Madrid lo vemos en la Puerta de Alcalá, el Museo del Prado o el Congreso de los Diputados, con su pórtico de columnas y frontón. En Washington, el Capitolio y muchos edificios oficiales siguen el mismo modelo. Hasta los estadios actuales, con gradas alrededor de la pista, recuerdan a los anfiteatros y circos romanos.</p>` },
  ],
  ejemplos: [
    { enunciado: "Una columna tiene basa y un capitel con dos espirales. ¿De qué orden es?", pasos: ["El dórico no tiene basa: se descarta.", "Las espirales son volutas.", "El corintio tendría hojas de acanto."], resultado: "Orden jónico." },
    { enunciado: "¿Por qué los romanos pudieron cubrir espacios más grandes que los griegos?", pasos: ["Los griegos usaban columna y dintel: la piedra horizontal se rompe si es muy larga.", "El arco reparte el peso hacia los lados.", "Bóvedas y cúpulas, con hormigón, cubren grandes espacios sin columnas."], resultado: "Por el uso del arco, la bóveda, la cúpula y el hormigón." },
    { enunciado: "Un busto muestra a un hombre mayor con arrugas y calvo. ¿Es más probable que sea griego o romano?", pasos: ["La escultura griega buscaba la belleza ideal.", "El retrato romano buscaba el parecido real, para recordar a los antepasados."], resultado: "Romano: es un retrato realista." },
  ],
  errores: [
    "Confundir el capitel jónico (volutas) con el corintio (hojas de acanto).",
    "Pensar que en el templo griego se reunían los fieles dentro, como en una iglesia.",
    "Creer que las esculturas griegas eran blancas: estaban pintadas.",
    "Confundir anfiteatro (gladiadores) con teatro (obras teatrales) o circo (carreras).",
    "Pensar que los romanos solo copiaron a los griegos: aportaron el arco, el hormigón y las obras públicas.",
  ],
  ejercicios: [
    { q: "Describe los tres órdenes griegos.", sol: "Dórico: sin basa y capitel liso. Jónico: con basa, esbelto, capitel con volutas. Corintio: capitel con hojas de acanto." },
    { q: "¿Qué es un sistema adintelado?", sol: "El que usa columnas verticales que sostienen elementos horizontales, los dinteles." },
    { q: "Nombra las partes del templo griego.", sol: "Gradas, columnas, naos o cella, friso, frontón y tejado a dos aguas." },
    { q: "¿Qué son las cariátides y dónde están las más famosas?", sol: "Columnas con forma de mujer. En el Erecteion, en la Acrópolis de Atenas." },
    { q: "¿Qué es un canon en escultura?", sol: "Un sistema de proporciones ideales del cuerpo humano, como el de Policleto." },
    { q: "Cita tres elementos constructivos que difundieron los romanos.", sol: "El arco de medio punto, la bóveda y la cúpula (y el hormigón)." },
    { q: "¿Qué diferencia hay entre anfiteatro y circo?", sol: "El anfiteatro es elíptico y acogía luchas de gladiadores; el circo es alargado y acogía carreras de carros." },
    { q: "¿Qué caracteriza el retrato romano?", sol: "Su realismo: representa a la persona tal como era, con sus rasgos y defectos." },
    { q: "Nombra tres obras romanas que se conserven en España.", sol: "El acueducto de Segovia, el teatro de Mérida y el puente de Alcántara (también Itálica, la torre de Hércules…)." },
    { q: "Pon un ejemplo de edificio neoclásico inspirado en el templo griego.", sol: "El Congreso de los Diputados o el Museo del Prado, en Madrid." },
  ],
  quiz: [
    { q: "Los Propileos eran…", o: ["la entrada a la Acrópolis", "un templo", "un teatro"], a: 0, e: "Puerta monumental." },
    { q: "La cúpula del Panteón mide unos…", o: ["43 m", "10 m", "100 m"], a: 0, e: "De diámetro." },
    { q: "El velarium del Coliseo era…", o: ["un toldo", "una puerta", "un palco"], a: 0, e: "Daba sombra al público." },
    { q: "Muchas esculturas griegas las conocemos por…", o: ["copias romanas", "fotografías antiguas", "dibujos"], a: 0, e: "Los originales en bronce se perdieron." },
    { q: "La columna de Trajano narra…", o: ["victorias militares", "mitos", "la vida de Augusto"], a: 0, e: "Relieve en espiral." },
  ],
  tarjetas: [
    ["Cariátide", "Columna con forma de figura femenina."],
    ["Retrato romano", "Busto realista, con los rasgos reales de la persona."],
    ["Neoclasicismo", "Estilo de los siglos XVIII–XIX que imita el arte clásico."],
  ],
});

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["Un templo que esconde curvas", `<p>Si te pones delante del Partenón, en lo alto de la Acrópolis de Atenas, verás un edificio que parece hecho con reglas perfectas: columnas rectas, escalones planos y un frontón simétrico. Pero es una ilusión. Los arquitectos <b>Ictino y Calícrates</b> sabían que el ojo humano engaña: una línea larga y recta, vista desde abajo, parece hundirse por el centro. Por eso curvaron ligeramente los escalones hacia arriba, inclinaron las columnas hacia dentro e hincharon un poco su fuste. Casi nada en el Partenón es del todo recto, y precisamente por eso lo vemos perfecto.</p><p>Dos mil quinientos años después, ese mismo edificio inspira bancos, museos, parlamentos y universidades de todo el mundo. Cuando ves columnas y un frontón triangular en la fachada de un edificio importante de tu ciudad, estás viendo una herencia directa de Grecia y Roma. En este tema aprenderás a «leer» esos edificios y esas estatuas: a reconocer un orden, a distinguir una escultura griega de un retrato romano y a descubrir los trucos de ingeniería con los que los romanos levantaron cúpulas, puentes y acueductos que aún siguen en pie.</p>`],
  mas: [
    ["<h3>Los órdenes griegos</h3>", `<p>Cada orden es un <b>sistema completo</b>, no solo un tipo de capitel: fija las proporciones de la columna, la forma del entablamento y la decoración del friso. El dórico tiene un friso con <b>triglifos</b> (placas con tres estrías) y <b>metopas</b> (espacios con relieves); el jónico y el corintio llevan un <b>friso corrido</b>, una banda continua de relieves. Por eso, aunque solo veas la parte alta de un edificio, puedes adivinar su orden.</p>`],
    ["<h3>El templo griego</h3>", `<p>El templo no era un lugar de reunión para los fieles, sino la <b>casa del dios</b>: dentro de la <b>naos</b> o <i>cella</i> se guardaba su estatua. Las ceremonias y los sacrificios se hacían fuera, en un altar situado delante de la fachada. Por eso el interior era pequeño y oscuro, y todo el esfuerzo decorativo se concentraba en el exterior, para que lo contemplara la ciudad entera.</p>`],
    ["<h3>La escultura griega</h3>", `<p>Los griegos buscaban la <b>belleza ideal</b>: no retrataban a una persona concreta, sino un cuerpo perfecto, armonioso y sereno. Las estatuas originales eran casi siempre de <b>bronce</b> y estaban <b>pintadas</b> con colores vivos; el mármol blanco que vemos hoy es el resultado del paso del tiempo y de las copias romanas, que perdieron la pintura.</p>`],
    ["<h3>La arquitectura romana</h3>", `<p>La gran ventaja del <b>arco</b> es que reparte el peso hacia los lados y permite cubrir espacios mucho más amplios que una viga de piedra. Repitiendo arcos en profundidad se obtiene la <b>bóveda de cañón</b>; cruzando dos bóvedas, la <b>bóveda de arista</b>; y girando un arco sobre su eje, la <b>cúpula</b>. Con estas formas y el hormigón, Roma construyó termas, basílicas y mercados enormes.</p>`],
    ["<h3>Obras públicas romanas</h3>", `<p>Los ingenieros romanos calculaban la pendiente de los acueductos con un instrumento llamado <b>chorobates</b>, una mesa larga con una ranura de agua que hacía de nivel. El agua bajaba por gravedad con una inclinación mínima, a veces de solo unos centímetros por cada cien metros. Las calzadas tenían varias capas de piedra y grava, y hitos llamados <b>miliarios</b> marcaban las millas.</p>`],
    ["<h3>La pervivencia del arte clásico</h3>", `<p>Hoy seguimos usando el lenguaje clásico en edificios que quieren transmitir <b>autoridad, orden y permanencia</b>: el Congreso de los Diputados de Madrid tiene columnas corintias y un frontón con relieves; el Capitolio de Washington copia la cúpula sobre columnas; y muchas universidades, bancos y museos imitan la fachada de un templo.</p>`],
    ["<h3>La Acrópolis de Atenas</h3>", `<p>La Acrópolis se reconstruyó por orden de <b>Pericles</b> después de que los persas la destruyeran en el 480 a. C. Se pagó en parte con el tesoro de la Liga de Delos, la alianza de ciudades que Atenas dirigía, y fue a la vez un santuario y un mensaje político: la prueba en piedra del poder y la riqueza de la democracia ateniense.</p>`],
  ],
  svgs: [
    ["<h3>La Acrópolis de Atenas</h3>", "Edificios de la Acrópolis de Atenas", [["Propileos", "la entrada monumental"], ["Partenón", "templo de Atenea Pártenos"], ["Erecteion", "las cariátides"]], "Atenas, siglo V a. C."],
    ["<h3>La escultura romana: el retrato</h3>", "Rasgos del retrato romano", [["Realismo", "arrugas, calvas, verrugas"], ["Origen", "máscaras de cera de antepasados"], ["Poder", "emperadores idealizados"]], "retratar a una persona real"],
    ["<h3>La pervivencia del arte clásico</h3>", "Etapas que recuperan el arte clásico", [["Renacimiento", "siglos XV y XVI"], ["Neoclasicismo", "siglo XVIII"], ["Hoy", "parlamentos, bancos, museos"]], "volver a Grecia y Roma"],
    ["<h3>Teatro, anfiteatro y circo</h3>", "Tres edificios para espectáculos romanos", [["Teatro", "semicírculo: obras"], ["Anfiteatro", "óvalo: gladiadores"], ["Circo", "pista larga: carros"]]],
  ],
  bloques: [
    { tras: "<h3>El templo griego</h3>", html: `<h3>Las correcciones ópticas</h3><p>Los arquitectos griegos sabían que la vista deforma las formas grandes, y corrigieron esas deformaciones con pequeños trucos llamados <mark>correcciones ópticas</mark>. El <b>estilóbato</b> (el escalón sobre el que se apoyan las columnas) se curva hacia arriba unos centímetros en el centro, para que no parezca hundido. Las columnas tienen <b>éntasis</b>, un leve abultamiento a un tercio de su altura que evita que parezcan más estrechas en el centro. Además, se inclinan un poco hacia dentro: si se prolongaran, se juntarían a más de dos kilómetros de altura. Las columnas de las esquinas son algo más gruesas, porque al recortarse contra el cielo luminoso parecerían más finas.</p><p>Todo esto exigía un trabajo de precisión enorme: cada bloque de mármol se tallaba a medida para su lugar exacto, sin dos piezas iguales. El resultado es un edificio que transmite equilibrio y vida, y que se considera la cumbre del <b>orden dórico</b>.</p>`, svg: ["Correcciones ópticas del Partenón", [["Estilóbato", "curvado hacia arriba"], ["Éntasis", "fuste algo abultado"], ["Inclinación", "columnas hacia dentro"]], "trucos contra la ilusión óptica"] },
    { tras: "<h3>La escultura griega</h3>", html: `<h3>Las etapas de la escultura griega</h3><p>La escultura griega evolucionó en tres grandes etapas. En la época <mark>arcaica</mark> (siglos VII-VI a. C.) se hicieron los <b>kuroi</b> (jóvenes desnudos) y las <b>korai</b> (muchachas vestidas): figuras rígidas, frontales, con un pie adelantado y una sonrisa fija llamada <b>sonrisa arcaica</b>, influidas por el arte egipcio.</p><p>En la época <mark>clásica</mark> (siglo V a. C.) las figuras ganan naturalidad. Policleto inventa el <b>contrapposto</b>: el peso del cuerpo descansa sobre una pierna, la cadera se inclina y los hombros compensan el movimiento. Fidias dirige la decoración del Partenón y Mirón congela el instante del lanzamiento en el Discóbolo. En la época <mark>helenística</mark> (siglos III-I a. C.) se busca la emoción y el movimiento: el dolor del <b>Laocoonte</b>, el viento en las ropas de la <b>Victoria de Samotracia</b> o la vejez y la infancia, que antes casi no se representaban.</p>`, svg: ["Tres etapas de la escultura griega", [["Arcaica", "rígida, sonrisa arcaica"], ["Clásica", "equilibrio, contrapposto"], ["Helenística", "emoción y movimiento"]], "de la rigidez al movimiento"] },
    { tras: "<h3>La escultura romana: el retrato</h3>", html: `<h3>Relieves, pintura y mosaico</h3><p>Los romanos usaron el <mark>relieve histórico</mark> para contar hechos reales con propaganda política. En el <b>Ara Pacis</b> (Altar de la Paz) aparece la familia de Augusto en procesión, y en los arcos de triunfo se muestran los desfiles de las legiones con el botín conquistado.</p><p>La <b>pintura mural</b> decoraba las casas. Gracias a la erupción del Vesubio del año 79, que sepultó Pompeya, conocemos frescos de colores intensos, con el famoso <b>rojo pompeyano</b>, paisajes, falsas columnas y escenas mitológicas. El <mark>mosaico</mark> se hacía con pequeñas piezas de piedra, vidrio o cerámica llamadas <b>teselas</b>, colocadas sobre argamasa. Cubría los suelos de casas y termas con dibujos geométricos, animales, estaciones del año o escenas del mar. Hispania conserva mosaicos magníficos, como los de la villa de La Olmeda (Palencia), los de Itálica o los del Museo de Mérida.</p>`, svg: ["Otras artes romanas", [["Relieve", "Ara Pacis, arcos"], ["Pintura", "frescos de Pompeya"], ["Mosaico", "teselas en el suelo"]], "decorar y contar"] },
    { tras: "<h3>La arquitectura romana</h3>", html: `<h3>El Panteón de Roma</h3><p>El <mark>Panteón</mark> es el edificio romano mejor conservado. Lo construyó el emperador <b>Adriano</b> hacia el año 125 sobre un templo anterior de Agripa, cuyo nombre aún se lee en la fachada. Era un templo dedicado a todos los dioses (eso significa <i>pantheon</i>) y combina un pórtico griego de columnas corintias con una gran sala circular cubierta por una cúpula.</p><p>La cúpula mide unos <b>43 metros</b> de diámetro, exactamente lo mismo que su altura, de modo que dentro cabría una esfera perfecta. Para que no se hundiera por su peso, los constructores usaron un hormigón cada vez más ligero hacia arriba (con piedra pómez en la parte alta), aligeraron el interior con <b>casetones</b> (huecos cuadrados) y dejaron en el centro un agujero de unos 9 metros, el <b>óculo</b>, que es la única fuente de luz. Durante más de mil años fue la cúpula más grande del mundo, y todavía es la mayor de hormigón sin armar.</p>`, svg: ["El Panteón de Roma", [["Diámetro", "43 m, igual que la altura"], ["Casetones", "aligeran la cúpula"], ["Óculo", "9 m, única luz"]], "hacia el año 125"], video: "panteon" },
    { html: `<h3>Cómo comentar una obra clásica</h3><p>Para analizar un edificio o una escultura clásica conviene seguir siempre el mismo orden. Primero, la <b>identificación</b>: título, autor si se conoce, fecha, lugar y material. Segundo, la <b>descripción</b>: qué vemos, sus partes y su composición (planta, alzado, orden; o postura, proporciones y vestido de la figura). Tercero, el <b>estilo</b>: qué rasgos permiten situarla (contrapposto, éntasis, realismo romano, arco y bóveda). Cuarto, la <b>función</b>: para qué se hizo y a quién iba dirigida. Y por último, el <b>contexto y la pervivencia</b>: qué nos cuenta de su época y qué obras posteriores se inspiraron en ella.</p><p>Un buen comentario no es una lista de datos: relaciona lo que se ve con lo que significa. Por ejemplo, decir que el retrato de un emperador lleva coraza y brazo alzado es describir; explicar que así se presenta como jefe militar que habla a sus tropas es interpretar.</p>`, svg: ["Pasos para comentar una obra", [["1 Identificar", "autor, fecha, lugar"], ["2 Describir", "partes y composición"], ["3 Estilo y función", "rasgos y finalidad"], ["4 Contexto", "época y pervivencia"]]] },
  ],
  videos: [["<h3>La Acrópolis de Atenas</h3>", "partenon"]],
  ejemplos: [
    ["Un edificio tiene columnas con capitel de hojas de acanto y un friso corrido con relieves. ¿Qué orden es?", ["Las hojas de acanto en el capitel son el rasgo propio del corintio.", "El friso corrido descarta el dórico, que lleva triglifos y metopas.", "El corintio es el orden más decorado y fue muy usado por los romanos."], "Orden corintio."],
    ["Una estatua de un joven de pie, rígido, frontal, con un pie adelantado y una sonrisa fija. ¿De qué etapa es?", ["La rigidez y la frontalidad indican poca naturalidad.", "La sonrisa fija es la llamada sonrisa arcaica.", "Es un kuros, típico de los siglos VII-VI a. C."], "Escultura griega de época arcaica."],
    ["¿Por qué la cúpula del Panteón no se ha hundido en casi 1.900 años?", ["El hormigón es más pesado abajo y más ligero arriba, con piedra pómez.", "Los casetones quitan peso sin restar resistencia.", "El óculo elimina la parte central, la más difícil de sostener.", "Los gruesos muros circulares soportan los empujes."], "Por la combinación de materiales cada vez más ligeros, casetones, óculo y muros muy gruesos."],
  ],
  errores: ["Creer que las estatuas griegas eran blancas: estaban pintadas y muchas eran de bronce."],
  niveles: "bbbbmbbmmm",
  ejercicios: [
    ["b", "¿Qué tres etapas tiene la escultura griega?", "Arcaica (siglos VII-VI a. C.), clásica (siglo V a. C.) y helenística (siglos III-I a. C.)."],
    ["b", "¿Qué son los triglifos y las metopas?", "Son las piezas que alternan en el friso dórico: los triglifos son placas con tres estrías verticales y las metopas, los espacios entre ellos, a menudo decorados con relieves."],
    ["b", "Define teselas.", "Pequeñas piezas de piedra, vidrio o cerámica con las que se forma un mosaico, colocadas sobre argamasa."],
    ["b", "¿Quién construyó el Panteón y cuánto mide su cúpula?", "El emperador Adriano, hacia el año 125. La cúpula mide unos 43 m de diámetro, igual que la altura del edificio."],
    ["b", "¿Qué es el óculo?", "El agujero circular de unos 9 m en el centro de la cúpula del Panteón, que es su única fuente de luz."],
    ["m", "Explica qué es el contrapposto y quién lo introdujo.", "Postura en la que el peso descansa sobre una pierna: la cadera se inclina y los hombros compensan el movimiento, dando naturalidad. Lo desarrolló Policleto en el siglo V a. C., por ejemplo en el Doríforo."],
    ["m", "Describe tres correcciones ópticas del Partenón y su finalidad.", "La curvatura del estilóbato, para que no parezca hundido; la éntasis del fuste, para que la columna no parezca más estrecha en el centro; y la inclinación de las columnas hacia dentro, para dar estabilidad visual."],
    ["m", "¿Por qué el interior del templo griego era pequeño y oscuro?", "Porque era la casa del dios, donde se guardaba su estatua, y no un lugar de reunión. Las ceremonias se hacían en el altar exterior, así que la decoración se concentraba fuera."],
    ["m", "Compara la escultura griega clásica y el retrato romano.", "La griega busca la belleza ideal y un cuerpo perfecto y sereno; el retrato romano busca el parecido real, con arrugas y defectos, y nace de las máscaras de cera de los antepasados."],
    ["m", "Explica cómo se obtienen la bóveda de cañón, la de arista y la cúpula a partir del arco.", "Prolongando un arco en profundidad se forma la bóveda de cañón; cruzando dos bóvedas de cañón, la de arista; y haciendo girar un arco sobre su eje vertical, la cúpula."],
    ["m", "¿Por qué conocemos tan bien la pintura romana? Cita un rasgo.", "Porque la erupción del Vesubio del año 79 sepultó Pompeya y Herculano y conservó sus frescos. Un rasgo es el intenso rojo pompeyano y los fondos con falsas columnas y paisajes."],
    ["m", "Di qué etapa de la escultura griega representan el Laocoonte y la Victoria de Samotracia y por qué.", "La helenística: muestran movimiento, emoción intensa, dramatismo y efectos como el viento en los ropajes."],
    ["m", "¿Qué función tenía el relieve histórico romano? Pon un ejemplo.", "Contar hechos reales con fines de propaganda política, para glorificar al emperador. Ejemplos: el Ara Pacis de Augusto o la columna de Trajano."],
    ["m", "Cita dos lugares de España con mosaicos romanos importantes.", "La villa romana de La Olmeda (Palencia) e Itálica (Santiponce, Sevilla); también el Museo Nacional de Arte Romano de Mérida."],
    ["a", "Comenta brevemente el Partenón siguiendo los pasos del comentario de una obra.", "Identificación: templo de Atenea Pártenos, Ictino y Calícrates con Fidias, 447-432 a. C., Acrópolis de Atenas, mármol. Descripción: períptero octástilo de orden dórico con frontones y friso de triglifos y metopas. Estilo: proporción y correcciones ópticas. Función: casa de la diosa y símbolo del poder de Atenas. Pervivencia: modelo de fachadas neoclásicas."],
    ["a", "Explica por qué el Panteón combina tradición griega e innovación romana.", "El pórtico de columnas corintias y frontón sigue el modelo del templo griego; la sala circular con cúpula de hormigón, casetones y óculo es una solución romana basada en el arco y en el hormigón, imposible con el sistema adintelado."],
    ["a", "Un edificio moderno de tu ciudad tiene columnas y frontón. Razona qué quiere transmitir quien lo diseñó.", "Quiere transmitir autoridad, solidez, orden y tradición, asociando la institución (banco, museo, parlamento, universidad) al prestigio de Grecia y Roma. Respuesta abierta según el edificio elegido."],
    ["a", "Razona por qué los romanos pudieron construir espacios cubiertos mucho mayores que los griegos.", "Porque el arco, la bóveda y la cúpula reparten los empujes hacia los lados y no dependen de vigas de piedra de longitud limitada, y porque el hormigón permitía formas continuas, ligeras y baratas, con mano de obra no especializada."],
    ["a", "Compara un kuros arcaico con el Doríforo de Policleto en cuatro rasgos.", "Postura: rígida y frontal frente al contrapposto. Expresión: sonrisa arcaica frente a serenidad. Anatomía: esquemática frente a estudiada. Proporción: sin canon frente al canon de siete cabezas."],
    ["a", "¿Por qué se dice que muchas esculturas griegas las conocemos «de segunda mano»? ¿Qué problemas plantea?", "Porque los originales de bronce se fundieron y solo quedan copias romanas en mármol. Problemas: cambia el material, se añaden apoyos (troncos) para sostener el peso, se pierde la pintura y a veces se modifican detalles."],
    ["a", "Diseña un recorrido de un día por monumentos romanos de España y justifica el orden.", "Respuesta abierta. Ejemplo: Segovia (acueducto, ingeniería), Mérida (teatro, anfiteatro, puente y museo, ocio y vida urbana) y Tarragona (anfiteatro y circo). Se justifica por proximidad y para ver distintos tipos de obras."],
    ["a", "Explica la diferencia entre describir e interpretar una obra con un ejemplo propio.", "Describir es decir lo que se ve (Augusto lleva coraza y alza el brazo); interpretar es explicar su sentido (se presenta como general victorioso que arenga a sus tropas, para legitimar su poder). Respuesta abierta con otro ejemplo similar."],
  ],
  cuartas: ["Gótico", "Ártemis", "La Victoria de Samotracia", "El plástico", "Para defender la ciudad", "un mercado", "25 m", "una red para las fieras", "postales del siglo XIX", "la fundación de Roma", "gótico", "foro", "1/3 del cuerpo"],
  quiz: [
    ["¿Qué es la éntasis?", ["Un leve abultamiento del fuste", "Un tipo de capitel", "La entrada de un templo", "Un mosaico"], 0, "Evita que la columna parezca más estrecha en el centro."],
    ["La sonrisa arcaica aparece en…", ["los kuroi y las korai", "los retratos romanos", "el Laocoonte", "el Panteón"], 0, "Escultura griega de los siglos VII-VI a. C."],
    ["¿Quién desarrolló el contrapposto?", ["Policleto", "Mirón", "Adriano", "Vitruvio"], 0, "En obras como el Doríforo."],
    ["El Laocoonte pertenece a la etapa…", ["helenística", "arcaica", "clásica", "romana republicana"], 0, "Dramatismo y movimiento."],
    ["El óculo del Panteón mide unos…", ["9 m", "43 m", "1 m", "20 m"], 0, "Es su única fuente de luz."],
    ["Las teselas son…", ["piezas de un mosaico", "columnas pequeñas", "frescos", "monedas"], 0, "De piedra, vidrio o cerámica."],
    ["¿Qué ciudad conservó sus frescos gracias al Vesubio?", ["Pompeya", "Atenas", "Mérida", "Cartago"], 0, "Erupción del año 79."],
    ["En el friso dórico se alternan…", ["triglifos y metopas", "volutas y acantos", "arcos y bóvedas", "teselas y frescos"], 0, "El jónico y el corintio llevan friso corrido."],
    ["La bóveda de cañón resulta de…", ["prolongar un arco en profundidad", "cruzar dos cúpulas", "apilar vigas", "girar una columna"], 0, "Cruzando dos se obtiene la de arista."],
    ["El Ara Pacis se hizo para…", ["Augusto", "Pericles", "Trajano", "Constantino"], 0, "Altar de la Paz augustea."],
  ],
  examen: [
    ["El primer paso para comentar una obra es…", ["identificarla", "interpretarla", "compararla", "copiarla"], 0, "Título, autor, fecha, lugar, material."],
    ["El Panteón estaba dedicado a…", ["todos los dioses", "Júpiter", "Augusto", "Atenea"], 0, "Pantheon: «de todos los dioses»."],
    ["Las esculturas griegas originales eran sobre todo de…", ["bronce pintado", "madera", "mármol sin pintar", "yeso"], 0, "Muchas se fundieron; quedan copias en mármol."],
    ["Los casetones de una cúpula sirven para…", ["aligerarla", "iluminarla", "decorarla con pinturas", "sostener las columnas"], 0, "Quitan peso sin perder resistencia."],
    ["La Olmeda (Palencia) es famosa por sus…", ["mosaicos", "acueductos", "templos griegos", "teatros"], 0, "Una gran villa romana."],
  ],
  tarjetas: [["Éntasis", "Leve abultamiento del fuste de una columna."], ["Contrapposto", "Postura con el peso sobre una pierna que da naturalidad."], ["Óculo", "Abertura circular en lo alto de una cúpula."], ["Tesela", "Pieza pequeña con la que se hace un mosaico."]],
  glosario: [["Capitel", "Parte superior de la columna, que la une con el entablamento."], ["Fuste", "Cuerpo alargado de la columna."], ["Entablamento", "Conjunto de arquitrabe, friso y cornisa sobre las columnas."], ["Frontón", "Remate triangular de la fachada del templo."], ["Naos o cella", "Sala interior del templo donde estaba la estatua del dios."], ["Estilóbato", "Último escalón sobre el que se apoyan las columnas."], ["Éntasis", "Abultamiento del fuste para corregir una ilusión óptica."], ["Kuros", "Estatua arcaica de joven desnudo, rígida y frontal."], ["Contrapposto", "Postura equilibrada con el peso apoyado en una pierna."], ["Canon", "Regla de proporciones ideales del cuerpo humano."], ["Bóveda", "Cubierta curva formada por la prolongación o el cruce de arcos."], ["Hormigón", "Mezcla romana de cal, arena volcánica, agua y piedras."], ["Mosaico", "Imagen hecha con teselas sobre argamasa."], ["Fresco", "Pintura sobre la pared con el enlucido aún húmedo."]],
  situacion: { titulo: "Guía de arte clásico de mi ciudad", reto: "Descubrir y explicar la huella del arte clásico en los edificios y monumentos cercanos.", pasos: ["Buscar en tu localidad o en una ciudad cercana tres edificios con elementos clásicos (columnas, frontones, arcos, cúpulas).", "Fotografiarlos o dibujarlos e identificar sus elementos y su orden.", "Compararlos con un modelo griego o romano concreto (Partenón, Panteón, arco de triunfo).", "Redactar una ficha de comentario de cada uno con los cinco pasos.", "Montar una guía digital o un mural con un mapa del recorrido."], producto: "Guía ilustrada de tres monumentos con sus fichas de comentario y un mapa.", evaluacion: ["Identifica correctamente órdenes y elementos constructivos.", "Relaciona cada edificio con su modelo clásico.", "Usa el vocabulario técnico con precisión.", "Presenta la guía de forma clara y atractiva."] },
  familias: ["Pasead por el centro de vuestra ciudad buscando columnas, frontones y arcos, y adivinad juntos su orden."],
  saberes: "el arte y la arquitectura de Grecia y Roma, el patrimonio arqueológico y su conservación.",
  minutos: 100,
});
