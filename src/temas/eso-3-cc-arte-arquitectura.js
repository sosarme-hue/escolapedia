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
