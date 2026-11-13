// Ciencias Sociales 3º de Primaria: las fuentes de la historia y la línea del tiempo. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, et, COL, rejilla, wiki, mapa, filas, fichas, flujo, linea, columna, vid, vgen, RD, PROF, nino, suelo, casa } = require("./_pri3b");

// Reloj sencillo y calendario.
const reloj = (x, y, r = 22) => `<circle cx="${x}" cy="${y}" r="${r}" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${[...Array(12)].map((_, i) => { const a = (i * Math.PI) / 6; return `<circle cx="${(x + Math.sin(a) * (r - 5)).toFixed(1)}" cy="${(y - Math.cos(a) * (r - 5)).toFixed(1)}" r="1.4" fill="var(--ink)"/>`; }).join("")}<path d="M${x} ${y} V${y - r * 0.6} M${x} ${y} L${x + r * 0.45} ${y + r * 0.2}" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>`;
const calendario = (x, y) => `<rect x="${x - 24}" y="${y - 22}" width="48" height="44" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><rect x="${x - 24}" y="${y - 22}" width="48" height="12" rx="4" fill="${COL.rojo}"/>${[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => `<rect x="${x - 19 + c * 10}" y="${y - 5 + r * 8}" width="6" height="5" fill="#cbd5e1"/>`).join("")).join("")}`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "Las fuentes de la historia y la línea del tiempo",
  minutos: 45,
  objetivos: ["Medir el tiempo con unidades: día, semana, mes, año, década, siglo", "Usar las nociones de pasado, presente y futuro", "Saber qué es la historia y qué son las fuentes históricas", "Distinguir fuentes orales, escritas, materiales y visuales", "Construir e interpretar una línea del tiempo de su propia vida"],
  claves: ["tiempo", "pasado", "presente", "futuro", "década", "siglo", "historia", "historiador", "fuente histórica", "fuente oral", "fuente escrita", "línea del tiempo"],
  pregunta: {
    texto: "Tus abuelos te cuentan que cuando eran pequeños no había móviles ni internet, y en casa tienes fotos en blanco y negro de tus bisabuelos. ¿Cómo podemos saber cómo vivía la gente hace muchísimos años, cuando nadie de los que hoy viven había nacido?",
    respuesta: "Gracias a las <mark>fuentes de la historia</mark>: todas las huellas que nos dejaron las personas del pasado. Pueden ser <b>objetos</b>, como herramientas o edificios; <b>escritos</b>, como libros y cartas; <b>imágenes</b>, como fotos y pinturas; o <b>relatos</b> que nos cuentan los mayores. Los <b>historiadores</b> las estudian como detectives.",
  },
  bloques: [
    {
      html: `<h3>Medimos el tiempo</h3><p>El tiempo pasa sin parar y no lo podemos ver ni tocar, pero sí podemos <b>medirlo</b>. Para medir el tiempo usamos <b>unidades</b>:</p><p>• Para tiempos cortos: el <b>segundo</b>, el <b>minuto</b> (60 segundos) y la <b>hora</b> (60 minutos). Los medimos con el <mark>reloj</mark>.<br>• Para tiempos más largos: el <b>día</b> (24 horas), la <b>semana</b> (7 días), el <b>mes</b> (28, 30 o 31 días) y el <b>año</b> (12 meses o 365 días). Los organizamos con el <mark>calendario</mark>.<br>• Para tiempos muy largos: la <mark>década</mark> (10 años), el <mark>siglo</mark> (100 años) y el <b>milenio</b> (1.000 años).</p><p>Los siglos se escriben con <b>números romanos</b>: ahora estamos en el siglo <b>XXI</b> (veintiuno), que empezó en el año 2001 y terminará en el año 2100. Tus abuelos nacieron en el siglo <b>XX</b> (veinte).</p><p>Antes de que existieran los relojes, las personas medían el tiempo observando el Sol, la Luna y las estaciones, y usaban relojes de sol, de arena o de agua.</p>`,
      svg: svg("Un reloj para horas y un calendario para días y meses; década 10 años, siglo 100 años", `${tit("Medimos el tiempo")}${reloj(60, 76, 26)}${calendario(196, 76)}${et(60, 118, "reloj: horas", 80, { size: 10, color: COL.azul })}${et(196, 118, "calendario: días", 100, { size: 10, color: COL.rojo })}${et(70, 150, "década = 10 años", 110, { size: 10, color: COL.verde })}${et(190, 150, "siglo = 100 años", 110, { size: 10, color: COL.morado })}${tx(130, 172, "ahora: siglo XXI", 160)}`),
    },
    {
      html: `<h3>Pasado, presente y futuro</h3><p>Para ordenar lo que ocurre en el tiempo usamos tres ideas:</p><p>• El <mark>pasado</mark> es lo que <b>ya ha ocurrido</b>: ayer, el año pasado, cuando eras un bebé, cuando nacieron tus abuelos, cuando vivían los romanos. Para hablar del pasado usamos palabras como <i>antes</i>, <i>ayer</i>, <i>hace mucho tiempo</i>.</p><p>• El <mark>presente</mark> es lo que <b>está ocurriendo ahora</b>: hoy, este momento, este curso. Usamos palabras como <i>ahora</i>, <i>hoy</i>, <i>actualmente</i>.</p><p>• El <mark>futuro</mark> es lo que <b>todavía no ha ocurrido</b>: mañana, el próximo verano, cuando seas mayor. Usamos palabras como <i>después</i>, <i>mañana</i>, <i>dentro de unos años</i>.</p><p>Las cosas cambian con el tiempo. Tú has cambiado mucho desde que eras un bebé: has crecido, has aprendido a hablar, a andar, a leer. También cambian las ciudades, la ropa, los juguetes, los medios de transporte… Pero algunas cosas <b>permanecen</b>: por ejemplo, seguimos celebrando cumpleaños y jugando al escondite, como hacían nuestros abuelos.</p>`,
      svg: svg("Flecha del tiempo: pasado, presente y futuro", `${tit("Pasado, presente, futuro")}${fl(16, 96, 248, 96, "var(--ink)", 2.5)}${[["pasado", 50, COL.marron, "ayer"], ["presente", 130, COL.verde, "hoy"], ["futuro", 210, COL.azul, "mañana"]].map(([s, x, c, w]) => `<circle cx="${x}" cy="96" r="7" fill="${c}"/>${et(x, 76, s, 70, { size: 11.5, color: c })}${tx(x, 120, w, 60)}`).join("")}${tx(130, 160, "antes · ahora · después", 200)}`),
    },
    {
      html: `<h3>¿Qué es la historia?</h3><p>La <mark>historia</mark> es la ciencia que estudia el <b>pasado</b> de las personas: cómo vivían, qué comían, cómo vestían, en qué trabajaban, qué inventos hicieron, cómo se organizaban y qué acontecimientos importantes ocurrieron.</p><p>Las personas que estudian la historia se llaman <mark>historiadores</mark>. Trabajan como <b>detectives</b>: buscan pistas del pasado, las observan con atención, las comparan y sacan conclusiones.</p><p>Les ayudan otros científicos, como los <b>arqueólogos</b>, que excavan con cuidado la tierra para encontrar restos de casas, herramientas, vasijas o huesos de personas que vivieron hace miles de años.</p><p>Conocer la historia es muy útil: nos ayuda a <b>entender</b> cómo hemos llegado a vivir como vivimos hoy, a valorar los avances que han conseguido las personas y a no repetir los errores del pasado.</p><p>Tú también tienes tu propia historia: la <b>historia personal</b>, que empieza el día que naciste. Y tu familia tiene una <b>historia familiar</b>, que puedes conocer preguntando a tus abuelos.</p>`,
      svg: svg("Un arqueólogo excava y encuentra una vasija antigua", `${tit("Detectives del pasado")}${suelo(110)}<rect x="10" y="110" width="240" height="60" fill="#a16207" fill-opacity=".35"/>${nino(80, 110, { pose: "agacha", s: 0.75 })}<ellipse cx="196" cy="140" rx="17" ry="13" fill="#c2410c" stroke="var(--ink)" stroke-width="1.5"/><rect x="189" y="120" width="14" height="9" fill="#c2410c" stroke="var(--ink)" stroke-width="1.5"/><path d="M186 120 h20" stroke="var(--ink)" stroke-width="2"/>${et(120, 140, "vasija antigua", 90, { size: 10.5, color: "#7c2d12" })}${fl(158, 138, 176, 138, "#7c2d12", 1.5)}${tx(130, 166, "el arqueólogo excava con cuidado", 220)}`),
      video: vid("51OO5kyufSM"),
    },
    {
      html: `<h3>Las fuentes históricas</h3><p>Las pistas que estudian los historiadores se llaman <mark>fuentes históricas</mark>: son todas las huellas que nos ha dejado el pasado. Hay cuatro tipos:</p><p>• <mark>Fuentes orales</mark>: lo que nos <b>cuentan</b> las personas que vivieron los hechos, como los recuerdos de los abuelos, o las canciones, leyendas y cuentos que pasan de padres a hijos.</p><p>• <mark>Fuentes escritas</mark>: todo lo que está <b>escrito</b>: libros, cartas, periódicos, diarios, documentos como el libro de familia o el DNI, inscripciones en piedra…</p><p>• <mark>Fuentes materiales</mark>: los <b>objetos</b> y <b>construcciones</b> del pasado: herramientas, juguetes, ropa, monedas, vasijas, armas, casas, castillos, iglesias, puentes…</p><p>• <mark>Fuentes visuales</mark> o gráficas: las <b>imágenes</b>, como fotografías, pinturas, dibujos, mapas antiguos y películas.</p><p>Para estudiar los tiempos más antiguos, cuando la gente aún no sabía escribir, solo tenemos fuentes materiales, como las pinturas de las cuevas y las herramientas de piedra.</p>`,
      svg: svg("Cuatro tipos de fuentes: orales, escritas, materiales y visuales", `${tit("Tipos de fuentes")}${fichas([["Orales", "lo que nos cuentan", COL.naranja], ["Escritas", "libros y cartas", COL.azul], ["Materiales", "objetos y edificios", COL.marron], ["Visuales", "fotos y pinturas", COL.morado]], 2, 36, 0)}`),
    },
    {
      html: `<h3>Las fuentes de mi historia</h3><p>Tú también puedes investigar tu propia historia usando fuentes, como un historiador:</p><p>• <b>Fuentes orales</b>: pregunta a tu familia. ¿Dónde nací? ¿Cuánto pesé? ¿Cuál fue mi primera palabra? ¿Cuándo di mis primeros pasos? ¿A qué jugaba de pequeño?</p><p>• <b>Fuentes escritas</b>: el <b>libro de familia</b>, donde se apuntó tu nacimiento; tu <b>partida de nacimiento</b>; tu cartilla de vacunas; las notas del colegio; las felicitaciones de cumpleaños.</p><p>• <b>Fuentes materiales</b>: tu primera ropita, el chupete, un juguete antiguo, el primer diente que se te cayó, la pulsera del hospital.</p><p>• <b>Fuentes visuales</b>: las fotos y los vídeos de cuando eras bebé, tus primeros dibujos.</p><p>Con todas esas fuentes puedes contar tu historia y ordenarla en el tiempo.</p><p>Hay que <b>cuidar</b> las fuentes, porque si se pierden o se rompen ya no podremos saber lo que contaban. Por eso guardamos las fotos antiguas, los documentos importantes y los objetos de valor en museos, archivos y bibliotecas.</p>`,
      svg: svg("Fuentes de mi historia: foto de bebé, libro de familia, chupete y abuela que cuenta", `${tit("Mi historia")}<rect x="22" y="44" width="56" height="46" rx="3" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><circle cx="50" cy="62" r="9" fill="#fcd9b6"/><path d="M38 86 q12 -14 24 0" fill="#93c5fd"/><rect x="104" y="44" width="50" height="46" rx="3" fill="#bbf7d0" stroke="var(--ink)" stroke-width="1.5"/><path d="M112 58 h34 M112 66 h34 M112 74 h24" stroke="var(--ink)"/><circle cx="208" cy="64" r="10" fill="#f9a8d4" stroke="var(--ink)"/><rect x="202" y="72" width="12" height="10" rx="3" fill="#a5b4fc" stroke="var(--ink)"/>${et(50, 104, "foto", 50, { size: 10, color: COL.morado })}${et(129, 104, "libro de familia", 90, { size: 9.5, color: COL.azul })}${et(208, 104, "chupete", 60, { size: 10, color: COL.marron })}${tx(130, 140, "y lo que me cuenta mi familia", 220)}`),
    },
    {
      html: `<h3>La línea del tiempo</h3><p>Una <mark>línea del tiempo</mark> es una representación que sirve para <b>ordenar</b> los acontecimientos según cuándo ocurrieron. Es como una regla en la que cada trozo es un periodo de tiempo.</p><p>Para hacer una línea del tiempo:</p><p>1. Dibuja una <b>línea recta</b>, normalmente horizontal, y pon una flecha al final para indicar que el tiempo sigue avanzando.<br>2. Divídela en <b>partes iguales</b>. Cada parte representa el mismo tiempo: un año, una década o un siglo.<br>3. Escribe las <b>fechas</b> debajo de cada marca, de izquierda a derecha: lo más antiguo, a la izquierda; lo más reciente, a la derecha.<br>4. Coloca los <b>acontecimientos</b> en su lugar, con una frase corta o un dibujo.</p><p>La línea del tiempo nos ayuda a ver de un vistazo qué pasó antes y qué pasó después, y cuánto tiempo hay entre dos hechos. Es muy útil para estudiar la historia y para contar tu propia vida.</p>`,
      svg: svg("Línea del tiempo de la vida de un niño: nacimiento, primeros pasos, colegio y tercero", `${tit("Mi línea del tiempo")}${linea([["2018", "nazco", COL.rojo], ["2019", "ando", COL.naranja], ["2021", "infantil", COL.verde], ["2024", "1º", COL.azul], ["2026", "3º", COL.morado]], { y: 100 })}`),
      video: vid("SLd-OshkqfA"),
    },
    {
      html: `<h3>Así ha cambiado la vida</h3><p>Comparando fuentes de distintas épocas descubrimos cómo ha cambiado la vida. Fíjate en lo que nos cuentan los abuelos sobre cuando eran niños, hace unos <b>60 años</b>:</p><p>• <b>Las casas</b>: muchas no tenían calefacción ni agua caliente; se calentaban con estufas de leña o carbón. Pocas familias tenían televisión, y era en blanco y negro.<br>• <b>La comunicación</b>: no había móviles ni internet. Se escribían cartas y había teléfono en pocas casas.<br>• <b>El transporte</b>: pocas familias tenían coche, y los viajes eran más largos.<br>• <b>Los juegos</b>: se jugaba mucho en la calle, a la comba, a las canicas, a la peonza, al escondite. Los juguetes eran sencillos, a veces hechos en casa.<br>• <b>El colegio</b>: los niños escribían con pluma y tintero, y muchas veces las niñas y los niños iban a clases separadas.</p><p>Hoy tenemos muchos avances que hacen la vida más cómoda. Pero algunas cosas de antes merecen recuperarse, como jugar en la calle con los amigos o aprovechar mejor las cosas sin tirarlas.</p>`,
      svg: svg("Antes y ahora: teléfono antiguo frente a móvil, carta frente a mensaje", `${tit("Antes y ahora")}${filas([["antes", "carta, teléfono fijo, peonza", COL.marron], ["ahora", "móvil, internet, videojuegos", COL.azul]], 64, 50, { x: 24, wa: 60, wb: 190, dos: true })}${tx(130, 166, "algunas cosas cambian y otras permanecen", 230)}`),
    },
    {
      html: `<h3>Las etapas de la historia</h3><p>Los historiadores dividen la historia de la humanidad en grandes periodos llamados <mark>edades</mark> o etapas. Cada una empieza con un acontecimiento muy importante:</p><p>• La <b>Prehistoria</b>: desde los primeros seres humanos hasta que se inventó la <b>escritura</b>, hace unos 5.000 años. Las personas vivían de la caza y la recolección, y luego aprendieron a cultivar y a criar animales.<br>• La <b>Edad Antigua</b>: desde la escritura hasta la caída del Imperio romano. Es la época de los egipcios, los griegos y los romanos.<br>• La <b>Edad Media</b>: la época de los castillos, los caballeros y las catedrales.<br>• La <b>Edad Moderna</b>: empieza con el descubrimiento de América, en 1492.<br>• La <b>Edad Contemporánea</b>: desde finales del siglo XVIII hasta hoy. Es la época de las fábricas, los coches, los aviones, la electricidad y los ordenadores.</p><p>En próximos cursos estudiarás cada una de estas edades. ¡Ya verás qué interesante es viajar al pasado!</p>`,
      svg: svg("Las cinco edades de la historia en orden", `${tit("Las edades")}${columna([["Prehistoria", COL.marron], ["Edad Antigua", COL.naranja], ["Edad Media", COL.rojo], ["Edad Moderna", COL.morado], ["Edad Contemporánea", COL.azul]], 130, 190, 34, 22, 6)}`),
    },
    {
      html: `<h3>Mi caja del tiempo</h3><p>Vamos a hacer dos actividades de historiadores.</p><p><b>1. Mi línea del tiempo.</b> En una tira larga de cartulina, dibuja una línea dividida en tantas partes como años tienes. Debajo de cada marca escribe el año. Pide a tu familia fotos o datos y coloca en su sitio: cuando naciste, tu primera palabra, tus primeros pasos, tu primer día de colegio, el nacimiento de un hermano, un viaje especial… Al final, presenta tu línea a la clase.</p><p><b>2. Una caja del tiempo.</b> Entre toda la clase, preparad una caja con fuentes del presente para que alguien la abra dentro de muchos años: una foto de la clase, un periódico de hoy, un dibujo de cada uno, una carta contando cómo es vuestra vida, un juguete que ya no uséis… Cerrad la caja, escribid la fecha y guardadla en el colegio. ¡Seréis las fuentes de la historia del futuro!</p><p><b>Repaso:</b> la foto de la clase, ¿qué tipo de fuente es? → Visual. ¿Y la carta? → Escrita.</p>`,
      svg: svg("Una caja del tiempo con foto, carta, dibujo y juguete", `${tit("Caja del tiempo")}<rect x="60" y="80" width="140" height="80" fill="#d6a77a" stroke="var(--ink)" stroke-width="2"/><path d="M60 80 L84 52 H224 L200 80z" fill="#e7c49b" stroke="var(--ink)" stroke-width="2"/><rect x="80" y="60" width="30" height="22" fill="#fff" stroke="var(--ink)" transform="rotate(-10 95 71)"/><rect x="124" y="56" width="26" height="30" fill="#fef9c3" stroke="var(--ink)"/><circle cx="174" cy="66" r="9" fill="${COL.rojo}"/>${et(130, 124, "abrir en 2050", 100, { size: 11.5, color: "#fff" })}`),
    },
  ],
  figura: {
    titulo: "La historia en ocho ideas",
    svg: rejilla([
      ["Década / siglo", "10 / 100 años", COL.verde],
      ["Pasado", "lo que ya pasó", COL.marron],
      ["Presente", "lo que pasa hoy", COL.verde],
      ["Futuro", "lo que pasará", COL.azul],
      ["Historia", "estudia el pasado", COL.rojo],
      ["Fuentes", "pistas del pasado", COL.naranja],
      ["4 tipos", "oral, escrita, material, visual", COL.morado],
      ["Línea del tiempo", "ordena hechos", COL.gris],
    ], 4, 86, "Resumen de las fuentes de la historia"),
  },
  video: vgen("LPha22TK1n0", "fuentes de la historia para niños"),
  ejemplos: [
    { enunciado: "¿Qué tipo de fuente es cada una? Una moneda romana, una foto de la boda de tus abuelos y una canción que te enseñó tu abuela.",
      pasos: ["La moneda es un objeto: material.", "La foto es una imagen: visual.", "La canción se transmite hablando: oral."],
      resultado: "Material, visual y oral." },
    { enunciado: "Tu abuela nació en 1960. ¿En qué siglo nació? ¿Cuántos años cumple en 2026?",
      pasos: ["Los años del 1901 al 2000 son el siglo XX.", "2026 − 1960 = 66."],
      resultado: "En el siglo XX; cumple 66 años." },
    { enunciado: "Ordena en una línea del tiempo: empiezo 3º (2026), nazco (2018), empiezo 1º (2024).",
      pasos: ["El año más antiguo va a la izquierda: 2018.", "Después 2024.", "Lo más reciente, a la derecha: 2026."],
      resultado: "2018 nazco → 2024 empiezo 1º → 2026 empiezo 3º." },
  ],
  errores: [
    "Poner lo más reciente a la izquierda en la línea del tiempo: lo más antiguo va a la izquierda.",
    "Dividir la línea del tiempo en partes desiguales para tiempos iguales.",
    "Pensar que las fotos son fuentes escritas: son visuales.",
    "Creer que la historia solo habla de reyes: estudia la vida de todas las personas.",
  ],
  ejercicios: [
    { q: "¿Cuántos años tiene una década? ¿Y un siglo?", sol: "Una década, 10 años; un siglo, 100 años." },
    { q: "¿En qué siglo estamos? Escríbelo en números romanos.", sol: "En el siglo XXI." },
    { q: "Escribe una frase en pasado, otra en presente y otra en futuro.", sol: "Por ejemplo: «Ayer fui al parque», «Hoy estudio», «Mañana iré a la playa»." },
    { q: "¿Qué es la historia?", sol: "La ciencia que estudia el pasado de las personas." },
    { q: "¿Qué hace un arqueólogo?", sol: "Excava la tierra para encontrar restos del pasado." },
    { q: "¿Qué son las fuentes históricas?", sol: "Las huellas o pistas que nos dejó el pasado y que nos permiten conocerlo." },
    { q: "Escribe los cuatro tipos de fuentes con un ejemplo de cada una.", sol: "Oral: relato del abuelo; escrita: una carta; material: una vasija; visual: una foto." },
    { q: "¿Qué es una línea del tiempo?", sol: "Una representación que ordena los acontecimientos según cuándo ocurrieron." },
    { q: "Escribe dos cosas que han cambiado desde que tus abuelos eran niños.", sol: "Por ejemplo: ahora hay móviles e internet; ahora casi todas las familias tienen coche." },
    { q: "Escribe las cinco edades de la historia en orden.", sol: "Prehistoria, Edad Antigua, Edad Media, Edad Moderna y Edad Contemporánea." },
  ],
  quiz: [
    { q: "Un siglo tiene…", o: ["100 años", "10 años", "1.000 años"], a: 0, e: "100 años." },
    { q: "Una década tiene…", o: ["10 años", "100 años", "12 meses"], a: 0, e: "10 años." },
    { q: "Lo que ya ha ocurrido es el…", o: ["pasado", "presente", "futuro"], a: 0, e: "El pasado." },
    { q: "La ciencia que estudia el pasado es la…", o: ["historia", "geografía", "biología"], a: 0, e: "La historia." },
    { q: "Lo que te cuenta tu abuelo es una fuente…", o: ["oral", "escrita", "material"], a: 0, e: "Oral." },
    { q: "Una carta antigua es una fuente…", o: ["escrita", "oral", "visual"], a: 0, e: "Escrita." },
    { q: "Un castillo es una fuente…", o: ["material", "oral", "escrita"], a: 0, e: "Material." },
    { q: "Una fotografía es una fuente…", o: ["visual", "oral", "material"], a: 0, e: "Visual." },
    { q: "En la línea del tiempo, lo más antiguo va a la…", o: ["izquierda", "derecha", "mitad"], a: 0, e: "A la izquierda." },
    { q: "La Prehistoria termina con la invención de la…", o: ["escritura", "rueda", "electricidad"], a: 0, e: "La escritura." },
  ],
  examen: [
    { q: "El siglo XXI empezó en el año…", o: ["2001", "1900", "2100"], a: 0, e: "En el año 2001." },
    { q: "Quien excava para encontrar restos del pasado es el…", o: ["arqueólogo", "meteorólogo", "astronauta"], a: 0, e: "El arqueólogo." },
    { q: "El documento donde se apunta tu nacimiento es el…", o: ["libro de familia", "calendario", "mapa"], a: 0, e: "El libro de familia." },
    { q: "La época de los castillos y los caballeros es la…", o: ["Edad Media", "Prehistoria", "Edad Contemporánea"], a: 0, e: "La Edad Media." },
  ],
  feynman: ["Las unidades para medir el tiempo largo: década y siglo", "Los cuatro tipos de fuentes históricas", "Cómo se hace una línea del tiempo"],
  mapa: mapa("LA HISTORIA", "var(--pri)", [
    ["Tiempo", "década · siglo", COL.verde],
    ["Pasado", "presente · futuro", COL.marron],
    ["Fuentes", "oral · escrita · material", COL.naranja],
    ["Línea del tiempo", "ordenar hechos", COL.azul],
  ], 250),
  tarjetas: [
    ["Década", "Periodo de 10 años."],
    ["Siglo", "Periodo de 100 años."],
    ["Pasado", "Lo que ya ocurrió."],
    ["Historia", "Ciencia que estudia el pasado."],
    ["Fuente oral", "Lo que nos cuentan las personas."],
    ["Fuente escrita", "Libros, cartas, documentos."],
    ["Fuente material", "Objetos y construcciones del pasado."],
    ["Línea del tiempo", "Ordena los hechos según cuándo pasaron."],
  ],
  familias: ["Buscad juntos fotos y objetos para hacer la línea del tiempo de vuestro hijo o hija.", "Que los abuelos cuenten a qué jugaban y cómo era su colegio.", "Mirad el libro de familia y explicad para qué sirve.", "Visitad un museo de historia o un monumento cercano."],
  profesores: PROF("Ciencias Sociales: unidades de medida del tiempo histórico (década, siglo, milenio); nociones de pasado, presente y futuro; cambio y permanencia; la historia y el trabajo del historiador; fuentes orales, escritas, materiales y visuales; la línea del tiempo; las edades de la historia", ["Línea del tiempo personal en cartulina.", "Caja del tiempo de la clase.", "Entrevista a un abuelo o abuela sobre su infancia."]),
  fuentes: [RD, wiki("Historia", "Historia"), wiki("Fuente histórica", "Fuente histórica"), wiki("Línea de tiempo", "Línea de tiempo")],
  revisado: REV,
};
