// Música 1º ESO: los instrumentos musicales. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "Los instrumentos musicales",
  minutos: 50,
  objetivos: ["Clasificar los instrumentos según cómo producen el sonido", "Conocer cordófonos, aerófonos, membranófonos, idiófonos y electrófonos", "Identificar las familias de la orquesta sinfónica", "Reconocer instrumentos por su timbre"],
  claves: ["cordófono", "aerófono", "membranófono", "idiófono", "electrófono", "orquesta"],
  pregunta: {
    texto: "Un piano tiene cuerdas, pero se toca golpeando teclas. ¿Es un instrumento de cuerda o de percusión?",
    respuesta: "Depende de cómo clasifiques. Si miras <b>qué vibra</b>, es un <b>cordófono</b>: el sonido lo producen cuerdas tensas. Si miras <b>cómo se toca</b>, sus macillos golpean las cuerdas, y por eso en la orquesta a veces se coloca junto a la percusión. <mark>La clasificación científica se fija en el material que vibra</mark>, y para ella el piano es un cordófono de cuerda percutida.",
  },
  bloques: [
    {
      html: `<h3>Cómo se clasifican los instrumentos</h3><p>Existen miles de instrumentos en el mundo. Para ordenarlos, los musicólogos <b>Erich von Hornbostel y Curt Sachs</b> propusieron en 1914 una clasificación según <b>qué es lo que vibra</b> para producir el sonido:</p>${tabla(["Grupo", "Qué vibra", "Ejemplos"], [["Cordófonos", "una cuerda tensa", "guitarra, violín, piano, arpa"], ["Aerófonos", "una columna de aire", "flauta, trompeta, gaita, órgano"], ["Membranófonos", "una membrana tensa", "tambor, timbal, pandero"], ["Idiófonos", "el propio cuerpo del instrumento", "xilófono, castañuelas, platillos"], ["Electrófonos", "un circuito eléctrico", "sintetizador, theremín"]])}<p>Esta clasificación sirve para instrumentos de cualquier cultura.</p>`,
      svg: svg("Cinco iconos: una cuerda, un tubo con aire, un tambor, un triángulo y un enchufe, para los cinco grupos de instrumentos", `${[["cordófono", "var(--red)", `<path d="M14 60 H 74" stroke="var(--red)" stroke-width="2"/><path d="M14 66 Q 44 74 74 66" stroke="var(--red)" stroke-width="1.5" fill="none" opacity=".6"/>`], ["aerófono", "var(--pen)", `<rect x="16" y="56" width="56" height="16" rx="8" fill="none" stroke="var(--pen)" stroke-width="2.5"/>${[0, 1, 2].map((k) => `<circle cx="${34 + k * 12}" cy="64" r="3" fill="var(--pen)"/>`).join("")}`], ["membranófono", "var(--sun)", `<ellipse cx="44" cy="54" rx="26" ry="8" fill="var(--sun)" fill-opacity=".35" stroke="var(--sun)" stroke-width="2.5"/><path d="M18 54 V 78 Q 44 88 70 78 V 54" fill="none" stroke="var(--sun)" stroke-width="2.5"/>`], ["idiófono", "var(--leaf)", `<path d="M44 46 L 70 82 H 18 Z" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>`], ["electrófono", "var(--inf)", `<rect x="22" y="50" width="44" height="28" rx="5" fill="none" stroke="var(--inf)" stroke-width="2.5"/><path d="M34 50 V 40 M54 50 V 40" stroke="var(--inf)" stroke-width="3"/>`]].map(([n, c, g], i) => `<g transform="translate(${i < 3 ? i * 86 : 43 + (i - 3) * 86} ${i < 3 ? 0 : 84})">${g}${t(44, 102 - 2, n, { s: 10, c })}</g>`).join("")}`, 186),
    },
    {
      html: `<h3>Cordófonos</h3><p>En los <b>cordófonos</b> vibra una <b>cuerda tensa</b>. Casi siempre tienen una <b>caja de resonancia</b> de madera que amplifica el sonido. Según cómo se pone en vibración la cuerda:</p><ul><li><b>Frotada</b> con un arco: violín, viola, violonchelo, contrabajo.</li><li><b>Pulsada</b> con los dedos o una púa: guitarra, arpa, laúd, bandurria, ukelele.</li><li><b>Percutida</b> con macillos: piano, dulcémele.</li></ul><p>Cuanto más <b>corta, fina y tensa</b> es la cuerda, más agudo suena. Por eso el violín es agudo y el contrabajo, grave. La guitarra española es uno de los cordófonos más importantes de nuestra tradición.</p>`,
      video: vb("insB"),
    },
    {
      html: `<h3>Aerófonos</h3><p>En los <b>aerófonos</b> vibra una <b>columna de aire</b> dentro de un tubo. Cuanto más <b>largo</b> es el tubo, más <b>grave</b> el sonido. Se dividen según cómo se hace vibrar el aire:</p><ul><li><b>De bisel</b>: el aire choca contra un borde afilado. Flauta dulce, flauta travesera.</li><li><b>De lengüeta</b>: vibra una caña fina. Clarinete, saxofón (simple); oboe, fagot, dulzaina (doble).</li><li><b>De boquilla</b>: vibran los labios del intérprete. Trompeta, trompa, trombón, tuba.</li></ul><p>También son aerófonos la <b>gaita</b> (con un saco que guarda el aire), el <b>acordeón</b> y el <b>órgano</b>, el mayor instrumento que existe.</p>`,
      video: vb("insB2"),
    },
    {
      html: `<h3>Membranófonos e idiófonos</h3><p>Son los instrumentos de <b>percusión</b>, los más antiguos de la humanidad.</p><ul><li><b>Membranófonos</b>: vibra una <b>membrana</b> (piel o plástico) tensada sobre un marco o caja. Tambor, bombo, caja, timbales, pandero, bongós, darbuka.</li><li><b>Idiófonos</b>: vibra el <b>propio cuerpo</b> del instrumento, sin cuerdas ni membranas. Xilófono, metalófono, triángulo, platillos, castañuelas, maracas, claves, caja china.</li></ul><p>Algunos dan sonidos de <b>altura determinada</b> (los timbales, el xilófono: pueden tocar melodías) y otros de <b>altura indeterminada</b> (el bombo, las maracas: solo ritmo). Los instrumentos escolares <b>Orff</b> son en su mayoría idiófonos.</p>`,
    },
    {
      html: `<h3>Electrófonos</h3><p>En los <b>electrófonos</b> el sonido se genera o se transforma mediante <b>electricidad</b>.</p><ul><li><b>Electrónicos</b>: el sonido nace de un circuito, sin nada que vibre físicamente. El <b>sintetizador</b>, el <b>theremín</b> (se toca sin tocarlo, moviendo las manos cerca de dos antenas) o los programas de ordenador.</li><li><b>Electroacústicos</b>: vibra una cuerda o una lámina y una pastilla convierte esa vibración en señal eléctrica que luego se amplifica. La <b>guitarra eléctrica</b>, el bajo eléctrico, el piano eléctrico.</li></ul><p>Los electrófonos aparecieron en el siglo XX y hoy están en casi toda la música popular, el cine y los videojuegos.</p>`,
    },
    {
      html: `<h3>La orquesta sinfónica</h3><p>La <b>orquesta sinfónica</b> reúne entre 60 y 100 músicos organizados en cuatro <b>familias</b>, colocados en semicírculo frente al <b>director</b>:</p>${tabla(["Familia", "Instrumentos", "Posición"], [["Cuerda", "violines I y II, violas, violonchelos, contrabajos", "delante (la más numerosa)"], ["Viento madera", "flautas, oboes, clarinetes, fagotes", "centro"], ["Viento metal", "trompas, trompetas, trombones, tuba", "detrás"], ["Percusión", "timbales, platillos, bombo, xilófono", "al fondo"]])}<p>Los más suaves van delante y los más potentes detrás, para que el sonido quede equilibrado. Ojo: la flauta travesera es de metal pero pertenece al <b>viento madera</b>, porque antiguamente se fabricaba en madera y es de bisel.</p>`,
      svg: svg("Plano de la orquesta en semicírculo: director delante, cuerda en primera fila, madera en el centro, metal detrás y percusión al fondo", `${[[118, "var(--red)", "cuerda"], [90, "var(--leaf)", "madera"], [64, "var(--sun)", "metal"], [40, "var(--pen)", "percusión"]].map(([r, c, n]) => `<path d="M${130 - r} 168 A ${r} ${r * 0.85} 0 0 1 ${130 + r} 168" fill="none" stroke="${c}" stroke-width="12" stroke-opacity=".45"/>${t(130, 172 - r * 0.85, n, { s: 10, c: "var(--ink)" })}`).join("")}<circle cx="130" cy="166" r="6" fill="var(--ink)"/>${t(130, 154, "director", { s: 9 })}`, 176),
    },
    {
      html: `<h3>Otras agrupaciones instrumentales</h3><ul><li><b>Orquesta de cámara</b>: pequeña, de 10 a 30 músicos, sobre todo cuerda.</li><li><b>Cuarteto de cuerda</b>: dos violines, viola y violonchelo.</li><li><b>Banda</b>: viento y percusión, sin cuerda. Muy extendida en España: casi cada pueblo de la Comunidad Valenciana tiene la suya.</li><li><b>Rondalla</b>: bandurrias, laúdes y guitarras.</li><li><b>Big band</b>: saxofones, trompetas, trombones y base rítmica, típica del jazz.</li><li><b>Grupo de pop o rock</b>: voz, guitarra eléctrica, bajo, batería y teclados.</li></ul><p>Cada agrupación tiene un sonido propio según la mezcla de timbres que reúne.</p>`,
    },
    {
      html: `<h3>Reconocer instrumentos de oído</h3><p>Para identificar un instrumento al escucharlo, hazte estas preguntas:</p><ol><li>¿Suena <b>agudo o grave</b>? Te dirá el tamaño.</li><li>¿El sonido se <b>mantiene</b> (arco, soplo) o se <b>apaga</b> enseguida (pulsado, golpeado)?</li><li>¿Es <b>brillante y potente</b> (metal) o <b>suave y redondo</b> (madera, cuerda)?</li><li>¿Puede tocar <b>melodías</b> o solo ritmos?</li></ol><p>Actividad: escucha fragmentos de un minuto de distintos instrumentos y anota el grupo al que pertenecen. Construye además un instrumento con material reciclado (unas maracas, un tambor con un bote, una guitarra de gomas) y clasifícalo.</p>`,
    },
  ],
  figura: {
    titulo: "Los instrumentos en un vistazo",
    svg: filas("Resumen: cordófonos con cuerda frotada, pulsada o percutida; aerófonos de bisel, lengüeta o boquilla; membranófonos; idiófonos; electrófonos; orquesta con cuerda, madera, metal y percusión", [["Cordófonos", "frotada · pulsada · percutida", "var(--red)"], ["Aerófonos", "bisel · lengüeta · boquilla", "var(--pen)"], ["Membranófonos", "vibra una membrana", "var(--sun)"], ["Idiófonos", "vibra el propio cuerpo", "var(--leaf)"], ["Electrófonos", "electricidad", "var(--inf)"], ["Orquesta", "cuerda · madera · metal · perc.", "var(--ink)"]], 200),
  },
  video: vg("insV"),
  quiz: mezcla([
    { q: "En un cordófono vibra…", o: ["una cuerda", "una membrana", "una columna de aire"], a: 0, e: "Cuerda tensa." },
    { q: "La flauta dulce es un aerófono de…", o: ["bisel", "lengüeta", "boquilla"], a: 0, e: "El aire choca con un borde." },
    { q: "Las castañuelas son…", o: ["idiófonos", "membranófonos", "cordófonos"], a: 0, e: "Vibra el propio cuerpo." },
    { q: "El tambor es un…", o: ["membranófono", "idiófono", "aerófono"], a: 0, e: "Vibra la piel." },
    { q: "El violín es de cuerda…", o: ["frotada", "pulsada", "percutida"], a: 0, e: "Con arco." },
    { q: "La trompeta pertenece al…", o: ["viento metal", "viento madera", "cuerda"], a: 0, e: "Boquilla." },
    { q: "La familia más numerosa de la orquesta es la…", o: ["cuerda", "percusión", "metal"], a: 0, e: "Delante." },
    { q: "Un tubo más largo da un sonido más…", o: ["grave", "agudo", "fuerte"], a: 0, e: "Columna de aire mayor." },
    { q: "El theremín es un…", o: ["electrófono", "aerófono", "idiófono"], a: 0, e: "Se toca sin contacto." },
    { q: "Una banda se diferencia de la orquesta en que no tiene…", o: ["cuerda", "percusión", "viento"], a: 0, e: "Viento y percusión." },
  ]),
  examen: mezcla([
    { q: "¿Por qué la flauta travesera es de viento madera?", o: ["por su forma de producir el sonido y su origen", "porque es de madera hoy", "porque suena grave"], a: 0, e: "Bisel; antiguamente de madera." },
    { q: "El piano, según Hornbostel-Sachs, es un…", o: ["cordófono", "idiófono", "membranófono"], a: 0, e: "Vibran cuerdas." },
    { q: "La guitarra eléctrica es un electrófono…", o: ["electroacústico", "electrónico", "de bisel"], a: 0, e: "Vibra una cuerda y se amplifica." },
  ]),
  feynman: ["En qué se basa la clasificación de Hornbostel y Sachs", "Cómo se hace sonar un cordófono", "Tipos de aerófonos", "Diferencia entre membranófono e idiófono", "Cómo se organiza la orquesta sinfónica"],
  mapa: mapa("INSTRUMENTOS", "var(--eso)", [
    ["Cuerda", "cordófonos", "var(--red)"],
    ["Viento", "aerófonos", "var(--pen)"],
    ["Percusión", "membranófonos · idiófonos", "var(--sun)"],
    ["Electricidad", "electrófonos", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Cordófono", "Instrumento en el que vibra una cuerda tensa."],
    ["Aerófono", "Instrumento en el que vibra una columna de aire."],
    ["Membranófono", "Instrumento en el que vibra una membrana."],
    ["Idiófono", "Instrumento en el que vibra su propio cuerpo."],
    ["Electrófono", "Instrumento que usa la electricidad."],
    ["Caja de resonancia", "Parte hueca que amplifica el sonido."],
    ["Lengüeta", "Caña fina que vibra en clarinetes, oboes y saxos."],
    ["Orquesta sinfónica", "Cuerda, viento madera, viento metal y percusión."],
  ],
  familias: ["Buscad en casa objetos que sean idiófonos (vasos, llaves, cucharas).", "Construid juntos un instrumento reciclado.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Instrumentos: clasificación organológica, familias de la orquesta y agrupaciones; discriminación auditiva de timbres; construcción de instrumentos (RD 217/2022, Música, escucha y percepción; interpretación y creación).",
    ideas: ["Taller de instrumentos reciclados clasificados por grupos.", "Juego de audiciones de 10 segundos: ¿qué familia suena?", "Plano de la orquesta en el patio con los alumnos como instrumentos."],
  },
  fuentes: [RD, { t: "Museu de la Música de Barcelona", url: "https://www.museumusica.bcn.cat/es/" }],
  revisado: REV,
  ejemplosTitulo: "Ejercicios resueltos",
  ejemplos: [
    { enunciado: "Clasifica: arpa, oboe, pandero, maracas, sintetizador.", pasos: ["Arpa: vibra una cuerda pulsada (cordófono).", "Oboe: lengüeta doble (aerófono).", "Pandero: membrana (membranófono).", "Maracas: vibra el cuerpo (idiófono).", "Sintetizador: circuito (electrófono)."], resultado: "Uno de cada grupo." },
    { enunciado: "¿Qué suena más grave, un violín o un violonchelo? ¿Por qué?", pasos: ["El violonchelo es mucho más grande.", "Sus cuerdas son más largas y gruesas.", "Vibran más despacio: menor frecuencia."], resultado: "El violonchelo." },
    { enunciado: "Construye un aerófono con pajitas.", pasos: ["Corta pajitas de distintas longitudes.", "Pégalas en fila de la más larga a la más corta.", "Sopla por encima del borde (bisel)."], resultado: "Una flauta de pan: las largas suenan graves y las cortas, agudas." },
  ],
  errores: [
    "Clasificar por el material: un instrumento de metal no siempre es de viento metal.",
    "Pensar que el piano es de percusión en la clasificación científica.",
    "Confundir membranófono (piel) con idiófono (cuerpo).",
    "Creer que todos los instrumentos de percusión solo hacen ritmo.",
    "Pensar que la guitarra eléctrica no tiene nada que vibre.",
  ],
  ejercicios: [
    { q: "Escribe los cinco grupos de Hornbostel y Sachs con dos ejemplos de cada uno.", sol: "Cordófonos (guitarra, violín), aerófonos (flauta, trompeta), membranófonos (tambor, timbal), idiófonos (xilófono, castañuelas), electrófonos (sintetizador, guitarra eléctrica)." },
    { q: "Nombra un instrumento de cuerda frotada, uno de pulsada y uno de percutida.", sol: "Violín, guitarra, piano." },
    { q: "Clasifica por su forma de producir el sonido: clarinete, flauta travesera, trombón.", sol: "Lengüeta simple, bisel, boquilla." },
    { q: "¿Por qué un tubo largo suena más grave?", sol: "Porque la columna de aire es mayor y vibra más despacio." },
    { q: "Escribe las cuatro familias de la orquesta en orden desde el director hacia el fondo.", sol: "Cuerda, viento madera, viento metal, percusión." },
    { q: "¿Qué instrumentos forman un cuarteto de cuerda?", sol: "Dos violines, viola y violonchelo." },
    { q: "Diferencia una orquesta de una banda.", sol: "La banda no tiene cuerda; solo viento y percusión." },
    { q: "Cita tres instrumentos de percusión de altura determinada.", sol: "Timbales, xilófono, metalófono, campanas tubulares." },
    { q: "¿Qué es un electrófono electrónico? Pon un ejemplo.", sol: "El sonido nace de un circuito sin vibración física; sintetizador." },
    { q: "Diseña un instrumento reciclado y clasifícalo.", sol: "Respuesta abierta." },
  ],
};
