// Infantil 4 años · Crecimiento en armonía: los cinco sentidos.
const { marco, dibujos, parejas, lista, ic, t, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "4-anos",
  titulo: "Los cinco sentidos",
  minutos: 15,
  objetivos: ["Nombrar los cinco sentidos", "Unir cada sentido con su parte del cuerpo", "Usar los sentidos para descubrir cosas"],
  claves: ["vista", "oído", "olfato", "gusto", "tacto"],
  pregunta: {
    texto: "Si cierras los ojos y te dan una fruta, ¿cómo puedes saber qué es?",
    respuesta: "Puedes <mark>tocarla</mark>, <mark>olerla</mark> y <mark>probarla</mark>. Así usas el tacto, el olfato y el gusto sin mirar.",
  },
  bloques: [
    {
      html: `<h3>Cinco ayudantes</h3><p>Tenemos <mark>cinco sentidos</mark>. Son como cinco ayudantes que nos cuentan cómo es el mundo.</p><p>Se llaman <b>vista, oído, olfato, gusto y tacto</b>. ¡Cuéntalos con los dedos de una mano! Cada uno vive en una parte del cuerpo.</p>`,
      svg: dibujos("Ojo, oreja, nariz, boca y mano: los cinco sentidos", [["ojo", "vista", "var(--water)"], ["oreja", "oído", "var(--pen)"], ["nariz", "olfato", "var(--leaf)"], ["boca", "gusto", "var(--red)"], ["mano", "tacto", "var(--inf)"]]),
    },
    {
      html: `<h3>La vista y el oído</h3><p>Con los <mark>ojos</mark> vemos los colores, las formas y a las personas.</p><p>Con las <mark>orejas</mark> oímos la música, los pájaros y la voz de mamá o papá. Unos sonidos son fuertes y otros, suaves.</p>`,
      svg: parejas("El ojo sirve para ver y la oreja para oír", [["ojo", "ver", "arcoiris", "colores"], ["oreja", "oír", "campana", "sonidos"]], { color: "var(--water)", color2: "var(--pen)" }),
    },
    {
      html: `<h3>El olfato y el gusto</h3><p>Con la <mark>nariz</mark> olemos: una flor huele bien y la basura, mal.</p><p>Con la <mark>lengua</mark>, dentro de la boca, notamos los sabores: dulce como el plátano, salado como las patatas fritas. ¡Mmm, qué rico!</p>`,
      svg: parejas("La nariz huele la flor y la boca prueba el plátano", [["nariz", "oler", "flor", "flor"], ["boca", "probar", "platano", "dulce"]], { color: "var(--leaf)", color2: "var(--red)" }),
    },
    {
      html: `<h3>El tacto</h3><p>Con la <mark>piel</mark> tocamos y sentimos. La piel cubre todo el cuerpo, pero los dedos notan mucho.</p><p>Algo puede ser <b>suave</b> como un peluche, <b>duro</b> como una piedra, <b>frío</b> como el hielo o <b>caliente</b>.</p>`,
      svg: dibujos("Un oso de peluche suave, un cubito de hielo frío y una taza de sopa caliente", [["oso", "suave", "var(--inf)"], ["hielo", "frío", "var(--water)"], ["sopa", "caliente", "var(--red)"]], { titulo: "Con la mano noto…" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los sentidos nos <mark>avisan</mark> y nos protegen.</p><p>Si huele a quemado, hay peligro. Si la sopa quema, soplamos. Si oímos un coche, esperamos antes de cruzar. Los sentidos nos cuidan todo el día.</p>`,
      svg: lista("Los sentidos avisan: huele a quemado, la sopa quema, oigo un coche", [["Huele a quemado: ¡aviso!", "var(--red)"], ["La sopa quema: soplo", "var(--inf)"], ["Oigo un coche: espero", "var(--pen)"]], { marca: "!" }),
    },
    {
      html: `<h3>Juego: la caja misteriosa</h3><p>Metemos cosas en una caja: una pelota, una cuchara, un peluche.</p><p>Con los ojos cerrados, mete la mano. <mark>Toca, huele y escucha</mark>. ¿Qué es? ¡Adivina! Después cambiamos y adivina el adulto.</p>`,
      svg: marco("Una caja con un interrogante y una mano que entra; dentro, pelota, cuchara y peluche", `<rect x="60" y="70" width="140" height="90" rx="8" fill="var(--inf)"/><rect x="95" y="62" width="70" height="16" rx="8" fill="var(--ink)"/>${t(130, 130, "?", { size: 46, color: "#fff" })}${ic("mano", 130, 40, 1.2)}${ic("pelota", 30, 120, 0.9)}${ic("cuchara", 230, 120, 0.9)}${ic("oso", 230, 50, 0.9)}`),
    },
  ],
  figura: figura("Mis cinco sentidos", "Vista, oído, olfato, gusto y tacto", [["ojo", "vista", "var(--water)"], ["oreja", "oído", "var(--pen)"], ["nariz", "olfato", "var(--leaf)"], ["boca", "gusto", "var(--red)"], ["mano", "tacto", "var(--inf)"]]),
  video: vid("lF0y3glPWis", "Los 5 sentidos. Canciones educativas para niños", "Happy Learning Español", 1755198, "los sentidos canción infantil"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Probamos un trozo de limón y otro de plátano.", pasos: ["Huele cada trozo con la nariz.", "Pruébalos con la lengua.", "Di cuál es dulce y cuál es ácido."], resultado: "el plátano es dulce y el limón, ácido: lo notan la nariz y la lengua." },
    { enunciado: "Cerramos los ojos y escuchamos.", pasos: ["Quedaos en silencio un ratito.", "Di todos los sonidos que oigas.", "Abre los ojos y busca de dónde venían."], resultado: "con las orejas descubrimos cosas que no vemos." },
  ],
  errores: [
    "Pensar que solo tocamos con las manos: toda la piel siente, también los pies y la cara.",
    "Confundir olfato y gusto: el olfato está en la nariz y el gusto en la lengua.",
    "Creer que si no veo algo, no está: lo puedo oír, oler o tocar.",
  ],
  ejercicios: [
    { q: "Señala tus ojos, orejas, nariz, boca y manos diciendo el sentido.", sol: "Vista, oído, olfato, gusto y tacto." },
    { q: "Con los ojos cerrados, adivina tres sonidos de casa.", sol: "Por ejemplo: un grifo, una puerta, un timbre." },
    { q: "Huele tres cosas de la cocina y di si te gustan.", sol: "Nota para la familia: canela, limón y café funcionan bien." },
    { q: "Busca algo suave y algo duro en tu cuarto.", sol: "Un peluche es suave; un juguete de madera es duro." },
    { q: "Dibuja una cosa que te guste ver.", sol: "Cualquier dibujo vale: preguntadle de qué color es." },
    { q: "Prueba algo dulce y algo salado.", sol: "Una fruta (dulce) y una galleta salada o una aceituna." },
  ],
  quiz: [
    { q: "¿Con qué vemos?", o: ["Con la nariz", "Con los ojos", "Con los pies"], a: 1, e: "La vista está en los ojos." },
    { q: "¿Con qué oímos la música?", o: ["Con la boca", "Con las manos", "Con las orejas"], a: 2, e: "El oído está en las orejas." },
    { q: "¿Con qué olemos una flor?", o: ["Con la nariz", "Con el codo", "Con los ojos"], a: 0, e: "El olfato está en la nariz." },
    { q: "El plátano es dulce. Lo notas con…", o: ["la oreja", "el pelo", "la lengua"], a: 2, e: "El gusto está en la lengua." },
    { q: "¿Cuántos sentidos tenemos?", o: ["5", "3", "10"], a: 0, e: "Vista, oído, olfato, gusto y tacto." },
    { q: "El hielo está…", o: ["caliente", "frío", "dulce"], a: 1, e: "Lo notamos con el tacto." },
  ],
  examen: [
    { q: "¿Qué sentido usamos al tocar un peluche?", o: ["El oído", "El tacto", "La vista"], a: 1, e: "Tocamos con la piel." },
    { q: "Huele a quemado. ¿Qué sentido avisa?", o: ["El olfato", "El gusto", "El tacto"], a: 0, e: "La nariz nos avisa." },
    { q: "Con los ojos cerrados no puedo…", o: ["oír", "oler", "ver"], a: 2, e: "Sin ojos abiertos no vemos, pero sí oímos y olemos." },
  ],
  feynman: ["Los cinco sentidos", "Qué parte del cuerpo usa cada uno", "Cómo nos avisan del peligro"],
  mapa: mapa("LOS 5 SENTIDOS", "var(--inf)", [
    ["Vista y oído", "ojos y orejas", "var(--water)"],
    ["Olfato", "la nariz", "var(--leaf)"],
    ["Gusto", "la lengua", "var(--red)"],
    ["Tacto", "la piel", "var(--pen)"],
  ], 220),
  tarjetas: [
    ["¿Con qué vemos?", "Con los ojos"],
    ["¿Con qué oímos?", "Con las orejas"],
    ["¿Con qué olemos?", "Con la nariz"],
    ["¿Con qué notamos los sabores?", "Con la lengua"],
    ["¿Con qué tocamos?", "Con la piel"],
    ["¿Cuántos sentidos hay?", "Cinco"],
  ],
  familias: [
    "Jugad a «veo, veo» con colores en lugar de letras.",
    "En la cocina, dadle a oler especias y frutas con los ojos cerrados.",
    "Preparad una bolsa con objetos de distintas texturas para adivinar tocando.",
    "En el parque, parad un minuto y contad los sonidos que oís.",
  ],
  profesores: PROF("Crecimiento en armonía: los sentidos y sus funciones; exploración sensorial del entorno", ["Caja o bolsa misteriosa de texturas.", "Botes de olores con algodón empapado.", "Lotería de sonidos grabados."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
