// Ciencias Sociales 6º de Primaria: la Unión Europea. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, barras, fichas, linea, vid, vgen, RD, PROF, estrella } = require("./_pri6b");

// Bandera europea: doce estrellas doradas en círculo sobre fondo azul.
function bandera(cx, cy, w = 120) {
  const h = w * 2 / 3, r = h * 0.33;
  const est = [...Array(12)].map((_, i) => {
    const a = (i * Math.PI) / 6, x = cx + r * Math.sin(a), y = cy - r * Math.cos(a);
    const p = [...Array(10)].map((_, k) => { const rr = k % 2 ? 2.2 : 5, b = -Math.PI / 2 + (k * Math.PI) / 5; return `${(x + rr * Math.cos(b)).toFixed(1)},${(y + rr * Math.sin(b)).toFixed(1)}`; }).join(" ");
    return `<polygon points="${p}" fill="#facc15"/>`;
  }).join("");
  return `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" fill="#1d4ed8" rx="3"/>${est}`;
}

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "La Unión Europea",
  minutos: 50,
  objetivos: ["Saber qué es la Unión Europea y por qué nació", "Conocer su historia y sus países miembros", "Identificar sus símbolos", "Distinguir las principales instituciones europeas", "Explicar qué ventajas tiene para España y para los ciudadanos"],
  claves: ["Unión Europea", "Tratado de Roma", "países miembros", "euro", "eurozona", "bandera europea", "Parlamento Europeo", "Comisión Europea", "Consejo Europeo", "ciudadanía europea", "Erasmus", "espacio Schengen"],
  pregunta: {
    texto: "Una familia de Valencia viaja en coche a Italia. Cruza Francia, no tiene que enseñar el pasaporte en ninguna frontera y paga con euros en todas partes. ¿Cómo es posible?",
    respuesta: "Porque España, Francia e Italia forman parte de la <mark>Unión Europea</mark>. Sus ciudadanos pueden moverse libremente por casi todos los países miembros sin controles en las fronteras (el <b>espacio Schengen</b>), y muchos de ellos comparten la misma moneda, el <b>euro</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la Unión Europea?</h3><p>La <mark>Unión Europea</mark> (UE) es una asociación de <b>27 países</b> europeos que han decidido unirse para trabajar juntos, ayudarse y tomar decisiones en común en muchos asuntos: la economía, el comercio, el medio ambiente, la agricultura, la ciencia o los derechos de las personas.</p><p>Los países miembros siguen siendo independientes, con su propio gobierno, su lengua y su cultura. Pero han cedido a la Unión algunas decisiones, y todos respetan las leyes europeas.</p><p>La UE tiene unos <b>450 millones de habitantes</b>, más que Estados Unidos, y es una de las mayores economías del mundo. En ella se hablan <b>24 lenguas oficiales</b>, entre ellas el español.</p><p>Su lema es <b>«Unida en la diversidad»</b>: los europeos tienen historias, lenguas y costumbres distintas, pero comparten valores comunes como:</p><p>• El respeto a la <b>dignidad humana</b> y a los derechos humanos.<br>• La <b>libertad</b> y la <b>democracia</b>.<br>• La <b>igualdad</b> entre todas las personas.<br>• El <b>Estado de Derecho</b>: todos cumplen las leyes.</p><p>Para entrar en la UE, un país debe ser europeo, democrático y respetar estos valores.</p>`,
      svg: svg("Bandera de la Unión Europea con doce estrellas doradas y sus cifras principales", `${tit("La Unión Europea")}${bandera(70, 92, 108)}${filas([["27", "países", COL.azul], ["450 M", "habitantes", COL.verde], ["24", "lenguas", COL.morado]], 72, 30, { x: 146, wa: 40, wb: 64 })}${tx(130, 168, "«Unida en la diversidad»", 220, { weight: 700, color: COL.azul })}`),
    },
    {
      html: `<h3>¿Por qué nació?</h3><p>En la primera mitad del siglo XX, Europa sufrió dos guerras terribles: la <b>Primera Guerra Mundial</b> (1914-1918) y la <b>Segunda Guerra Mundial</b> (1939-1945). Murieron decenas de millones de personas y muchas ciudades quedaron destruidas.</p><p>Al terminar, algunos políticos europeos pensaron que la mejor forma de evitar nuevas guerras era que los países que habían sido enemigos <b>cooperaran</b> y dependieran unos de otros. Si sus economías estaban unidas, la guerra entre ellos sería impensable.</p><p>El 9 de mayo de 1950, el ministro francés Robert Schuman propuso que Francia y Alemania pusieran en común su carbón y su acero, que eran los materiales necesarios para fabricar armas. Por eso el <b>9 de mayo</b> se celebra el <mark>Día de Europa</mark>.</p><p>Gracias a esa unión, los países de la UE llevan más de setenta años en paz entre ellos. En 2012, la Unión Europea recibió el <b>Premio Nobel de la Paz</b> por haber contribuido a la paz, la reconciliación, la democracia y los derechos humanos en Europa.</p>`,
      svg: svg("De la guerra a la cooperación: la Unión Europea nació para mantener la paz", `${tit("De la guerra a la paz")}${flujo([["guerras", COL.gris], ["cooperar", COL.naranja], ["paz", COL.verde]], 46, 46)}${et(130, 122, "9 de mayo: Día de Europa", 220, { size: 12, color: COL.azul })}${tx(130, 104, "más de 70 años sin guerras entre ellos", 230)}${tx(130, 146, "2012: Premio Nobel de la Paz", 220, { weight: 700 })}`),
      video: vid("mGHNhz3YX7M"),
    },
    {
      html: `<h3>Historia de la Unión Europea</h3><p>La Unión Europea ha ido creciendo poco a poco:</p><p>• <b>1951</b>: seis países (Francia, Alemania Occidental, Italia, Bélgica, Países Bajos y Luxemburgo) crean la Comunidad Europea del Carbón y del Acero.</p><p>• <b>1957</b>: los mismos seis países firman el <mark>Tratado de Roma</mark> y crean la Comunidad Económica Europea (CEE), también llamada Mercado Común, para comerciar sin aranceles (impuestos en las fronteras).</p><p>• <b>1973-1981</b>: entran Reino Unido, Irlanda, Dinamarca y Grecia.</p><p>• <b>1986</b>: entran <b>España</b> y Portugal.</p><p>• <b>1992</b>: se firma el <b>Tratado de Maastricht</b> y nace oficialmente la <b>Unión Europea</b>, con más competencias y la ciudadanía europea.</p><p>• <b>2002</b>: empiezan a circular las monedas y billetes de <b>euro</b>.</p><p>• <b>2004-2013</b>: entran muchos países del centro y el este de Europa; el último en entrar fue Croacia, en 2013.</p><p>• <b>2020</b>: el Reino Unido sale de la Unión. Es el llamado <b>Brexit</b>, y la UE pasa de 28 a 27 países.</p>`,
      svg: svg("Línea del tiempo de la Unión Europea desde 1957 hasta 2020", `${tit("La UE crece")}${linea([["1957", "Tratado de Roma", COL.azul], ["1986", "entra España", COL.rojo], ["1992", "nace la UE", COL.verde], ["2002", "llega el euro", COL.sol], ["2020", "sale R. Unido", COL.gris]], { y: 100 })}`),
    },
    {
      html: `<h3>Los países miembros</h3><p>Hoy la Unión Europea tiene <mark>27 países miembros</mark>:</p><p>Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, <b>España</b>, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, Chequia, Rumanía y Suecia.</p><p>Hay países muy grandes y poblados, como <b>Alemania</b> (unos 84 millones de habitantes), Francia, Italia y España, y otros muy pequeños, como <b>Malta</b> (poco más de medio millón) o Luxemburgo.</p><p>Algunos países europeos <b>no</b> forman parte de la UE: Noruega, Suiza, Islandia, el Reino Unido, Serbia, Ucrania… Algunos de ellos son <b>candidatos</b> y quieren entrar, como Ucrania, Moldavia, Montenegro o Albania. Para entrar deben cumplir unas condiciones: ser una democracia estable, respetar los derechos humanos, tener una economía que funcione y aceptar las leyes europeas.</p><p>Para memorizar los países y sus capitales ayuda mucho practicar con un mapa mudo: empieza por los vecinos de España (Portugal y Francia) y avanza hacia el este.</p>`,
      svg: svg("Los cuatro países más poblados de la Unión Europea en millones de habitantes, aproximado", `${tit("Más poblados de la UE (millones)")}${barras([["Alemania", 84, COL.gris], ["Francia", 68, COL.azul], ["Italia", 59, COL.verde], ["España", 49, COL.rojo], ["Malta", 0.5, COL.morado]], { max: 90, y0: 140, alto: 94 })}${tx(130, 172, "27 países · el último en entrar: Croacia", 236)}`),
      video: vid("xPnqGugag-0"),
    },
    {
      html: `<h3>Los símbolos de Europa</h3><p>La Unión Europea tiene unos <mark>símbolos</mark> que la representan:</p><p>• La <b>bandera</b>: un círculo de <b>doce estrellas doradas</b> sobre fondo azul. El número doce no indica el número de países: es un símbolo de perfección, unidad y armonía. Por eso no cambia aunque entren o salgan países.</p><p>• El <b>himno</b>: es la melodía de la «Oda a la alegría», el último movimiento de la Novena Sinfonía de Ludwig van Beethoven. Se interpreta sin letra, para no elegir ningún idioma.</p><p>• El <b>lema</b>: «Unida en la diversidad».</p><p>• El <b>Día de Europa</b>: el 9 de mayo.</p><p>• La <b>moneda</b>: el <b>euro</b> (€). Es la moneda oficial de 20 de los 27 países, que forman la <b>eurozona</b>. Las monedas de euro tienen una cara común en todos los países y otra cara propia de cada país. En las monedas españolas aparecen, por ejemplo, el rey, la catedral de Santiago de Compostela o Miguel de Cervantes.</p><p>Antes del euro, en España se usaba la <b>peseta</b>. Un euro equivalía a 166,386 pesetas.</p>`,
      svg: svg("Símbolos de la Unión Europea: bandera, himno, lema, día y moneda", `${tit("Símbolos de Europa")}${fichas([["Bandera", "12 estrellas doradas", COL.azul], ["Himno", "Oda a la alegría", COL.morado], ["Lema", "unida en la diversidad", COL.verde], ["Día", "9 de mayo", COL.rojo], ["Moneda", "el euro (€)", COL.sol], ["Eurozona", "20 países", COL.naranja]], 2, 34)}`),
    },
    {
      html: `<h3>Las instituciones europeas</h3><p>La Unión Europea toma decisiones a través de varias <mark>instituciones</mark>:</p><p>• El <b>Parlamento Europeo</b> representa a los <b>ciudadanos</b>. Sus diputados, unos 720, se eligen cada cinco años en las <b>elecciones europeas</b>, en las que votan los ciudadanos de todos los países. Aprueba las leyes europeas y el presupuesto. Tiene su sede en <b>Estrasburgo</b> (Francia) y también trabaja en Bruselas.</p><p>• La <b>Comisión Europea</b> es como el «gobierno» de la Unión. Propone las leyes y vigila que se cumplan. Tiene un comisario por cada país. Su sede está en <b>Bruselas</b> (Bélgica).</p><p>• El <b>Consejo Europeo</b> reúne a los <b>jefes de Estado o de Gobierno</b> de los 27 países. Marca las grandes líneas y prioridades de la Unión.</p><p>• El <b>Consejo de la Unión Europea</b> reúne a los <b>ministros</b> de cada país según el tema. Aprueba las leyes junto con el Parlamento.</p><p>• El <b>Tribunal de Justicia</b>, en Luxemburgo, vigila que las leyes europeas se cumplan igual en todos los países.</p><p>• El <b>Banco Central Europeo</b>, en Fráncfort (Alemania), se ocupa del euro.</p>`,
      svg: svg("Principales instituciones de la Unión Europea y sus sedes", `${tit("Instituciones de la UE")}${filas([["Parlamento", "ciudadanos · Estrasburgo", COL.azul], ["Comisión", "propone leyes · Bruselas", COL.verde], ["Consejo", "jefes de Gobierno", COL.morado], ["Tribunal", "justicia · Luxemburgo", COL.rojo], ["Banco Central", "el euro · Fráncfort", COL.sol]], 50, 25, { wa: 94, wb: 130 })}`),
    },
    {
      html: `<h3>Ser ciudadano europeo</h3><p>Todas las personas que tienen la nacionalidad de un país miembro son también <mark>ciudadanos europeos</mark>. Eso les da derechos importantes:</p><p>• <b>Libre circulación</b>: pueden viajar, vivir, estudiar y trabajar en cualquier país de la UE. Además, en el <b>espacio Schengen</b>, formado por la mayoría de los países de la UE y algunos de fuera, no hay controles en las fronteras interiores.</p><p>• <b>Votar</b> y presentarse en las elecciones municipales y europeas del país de la UE donde vivan, aunque no sea el suyo.</p><p>• Recibir <b>protección consular</b> de la embajada de cualquier país de la UE si viajan fuera de Europa y su país no tiene embajada allí.</p><p>• <b>Atención sanitaria</b> en otros países de la UE con la Tarjeta Sanitaria Europea.</p><p>• Dirigirse a las instituciones europeas en su propia lengua.</p><p>Uno de los programas más conocidos es <b>Erasmus+</b>, que permite a estudiantes, profesores y deportistas pasar una temporada estudiando o formándose en otro país europeo. España es uno de los países que más estudiantes envía y recibe.</p>`,
      svg: svg("Derechos de la ciudadanía europea", `${tit("Soy ciudadano europeo")}${fichas([["Moverme libre", "vivir, estudiar, trabajar", COL.azul], ["Votar", "municipales y europeas", COL.verde], ["Sanidad", "Tarjeta Sanitaria Europea", COL.rojo], ["Erasmus+", "estudiar en otro país", COL.morado]])}`),
    },
    {
      html: `<h3>España en la Unión Europea</h3><p>España entró en la Comunidad Económica Europea el <b>1 de enero de 1986</b>, después de que el rey y el presidente del Gobierno firmaran el tratado de adhesión en 1985. Fue un momento muy importante: España dejaba atrás el aislamiento de la dictadura y se unía a los países democráticos de Europa.</p><p>La pertenencia a la UE ha traído a España muchos <mark>beneficios</mark>:</p><p>• <b>Fondos europeos</b> para construir autovías, trenes de alta velocidad, puertos, depuradoras de agua y para modernizar la agricultura.<br>• Un gran <b>mercado</b> sin aranceles para vender sus productos: buena parte de lo que España exporta va a otros países de la UE.<br>• Más <b>turistas</b>, sobre todo europeos.<br>• Ayudas para investigación, formación y empleo.<br>• Normas comunes para proteger a los consumidores, el medio ambiente y los derechos de los trabajadores.</p><p>España también <b>aporta</b>: contribuye al presupuesto europeo, participa en todas las instituciones, tiene unos 61 diputados en el Parlamento Europeo y ha presidido el Consejo de la UE varias veces. Varios españoles han ocupado cargos muy importantes en las instituciones europeas.</p>`,
      svg: svg("España en la Unión Europea desde 1986: fondos, mercado, turismo y normas comunes", `${tit("España en la UE desde 1986")}${columna([["fondos: autovías, trenes", COL.azul], ["mercado sin aranceles", COL.verde], ["turistas europeos", COL.naranja], ["normas comunes", COL.morado]], 130, 210, 36, 24, 12)}`),
    },
    {
      html: `<h3>Retos de la Unión Europea</h3><p>La Unión Europea se enfrenta hoy a grandes <mark>retos</mark>:</p><p>• El <b>cambio climático</b>: la UE se ha propuesto ser el primer continente <b>climáticamente neutro</b> en 2050, es decir, no emitir más gases de efecto invernadero de los que se puedan absorber. Para ello impulsa las energías renovables y el transporte limpio.</p><p>• La <b>transformación digital</b>: proteger los datos de las personas en internet y promover el uso responsable de la tecnología.</p><p>• Las <b>migraciones</b>: acoger a las personas refugiadas y organizar la llegada de inmigrantes respetando sus derechos.</p><p>• La <b>paz y la seguridad</b>: ayudar a los países vecinos en conflicto, como Ucrania.</p><p>• La <b>igualdad</b> entre territorios: que las regiones más pobres se acerquen a las más ricas.</p><p>• Que los ciudadanos, sobre todo los jóvenes, <b>participen</b> y se sientan europeos.</p><p>Los jóvenes tenéis un papel importante: podéis participar en programas como Erasmus+ o el Cuerpo Europeo de Solidaridad, aprender otras lenguas y, cuando cumpláis 18 años (16 en algunos países), votar en las elecciones europeas.</p>`,
      svg: svg("Retos de la Unión Europea: clima, digital, migraciones, paz e igualdad", `${tit("Retos de la UE")}${filas([["Clima", "neutros en 2050", COL.verde], ["Digital", "proteger los datos", COL.azul], ["Migraciones", "acoger con derechos", COL.naranja], ["Paz", "ayudar a los vecinos", COL.morado], ["Igualdad", "regiones más parejas", COL.rojo]], 50, 25, { wa: 84, wb: 140 })}`),
    },
  ],
  figura: {
    titulo: "La Unión Europea en ocho ideas",
    svg: rejilla([
      ["27 países", "450 M de personas", COL.azul],
      ["Nació", "para la paz", COL.verde],
      ["1957", "Tratado de Roma", COL.morado],
      ["1986", "entra España", COL.rojo],
      ["Euro", "20 países", COL.sol],
      ["Parlamento", "lo elegimos", "#0e7490"],
      ["Comisión", "propone leyes", "#15803d"],
      ["Ciudadanía", "libre circulación", COL.naranja],
    ], 4, 86, "Resumen de la Unión Europea"),
  },
  video: vgen("SFeB9fMGJ9k", "qué es la Unión Europea explicado"),
  ejemplos: [
    { enunciado: "¿Cuántos años lleva España en la Unión Europea en 2026?",
      pasos: ["Entró el 1 de enero de 1986.", "2026 − 1986 = 40."],
      resultado: "40 años." },
    { enunciado: "Una estudiante de Sevilla quiere estudiar un curso en Alemania. ¿Qué derecho y qué programa le ayudan?",
      pasos: ["Como ciudadana europea tiene libre circulación para estudiar en otro país de la UE.", "El programa Erasmus+ ofrece becas para estudiar en otro país."],
      resultado: "Libre circulación y Erasmus+." },
    { enunciado: "¿Qué institución…? a) Eligen los ciudadanos. b) Propone las leyes. c) Reúne a los jefes de Gobierno.",
      pasos: ["Elección directa: Parlamento Europeo.", "Propone y vigila: Comisión Europea.", "Jefes de Estado o de Gobierno: Consejo Europeo."],
      resultado: "a) Parlamento; b) Comisión; c) Consejo Europeo." },
  ],
  errores: [
    "Pensar que las 12 estrellas de la bandera son los países: son un símbolo de unidad.",
    "Creer que todos los países de Europa están en la UE: Suiza, Noruega o el Reino Unido no lo están.",
    "Pensar que todos los países de la UE usan el euro: lo usan 20 de los 27.",
    "Confundir el Consejo Europeo (jefes de Gobierno) con el Consejo de Europa, que es otra organización distinta.",
    "Creer que al entrar en la UE un país deja de ser independiente: sigue teniendo su gobierno, lengua y cultura.",
  ],
  ejercicios: [
    { q: "¿Qué es la Unión Europea y cuántos países la forman?", sol: "Una asociación de 27 países europeos que cooperan y toman decisiones en común." },
    { q: "¿Por qué nació la Unión Europea?", sol: "Para evitar nuevas guerras tras las dos guerras mundiales, uniendo las economías de los países." },
    { q: "¿Qué tratado se firmó en 1957 y qué creó?", sol: "El Tratado de Roma, que creó la Comunidad Económica Europea." },
    { q: "¿Cuándo entró España? ¿Y qué país salió en 2020?", sol: "En 1986. Salió el Reino Unido (Brexit)." },
    { q: "Escribe cinco países de la UE con su capital.", sol: "Por ejemplo: Francia-París, Alemania-Berlín, Italia-Roma, Portugal-Lisboa, Grecia-Atenas." },
    { q: "Describe la bandera europea y di cuál es el himno.", sol: "Doce estrellas doradas en círculo sobre fondo azul; la «Oda a la alegría» de Beethoven." },
    { q: "¿Qué es la eurozona?", sol: "Los países de la UE que usan el euro: 20." },
    { q: "¿Qué hace el Parlamento Europeo y dónde tiene su sede?", sol: "Representa a los ciudadanos y aprueba las leyes y el presupuesto; Estrasburgo." },
    { q: "Escribe tres derechos de los ciudadanos europeos.", sol: "Libre circulación, votar en municipales y europeas donde vivan, atención sanitaria en otros países." },
    { q: "Escribe tres beneficios que ha tenido para España entrar en la UE.", sol: "Fondos para infraestructuras, mercado sin aranceles, más turistas (y normas comunes)." },
  ],
  quiz: [
    { q: "La Unión Europea tiene…", o: ["15 países", "27 países", "50 países"], a: 1, e: "27 países." },
    { q: "El Día de Europa es el…", o: ["6 de diciembre", "1 de enero", "9 de mayo"], a: 2, e: "9 de mayo." },
    { q: "España entró en…", o: ["2002", "1986", "1957"], a: 1, e: "En 1986." },
    { q: "La bandera europea tiene…", o: ["27 estrellas", "50 estrellas", "12 estrellas"], a: 2, e: "Doce estrellas." },
    { q: "El himno europeo es de…", o: ["Vivaldi", "Mozart", "Beethoven"], a: 2, e: "Beethoven, «Oda a la alegría»." },
    { q: "El euro empezó a circular en…", o: ["1950", "1986", "2002"], a: 2, e: "En 2002." },
    { q: "Los diputados europeos los eligen…", o: ["la Comisión", "los ciudadanos", "los reyes"], a: 1, e: "Los ciudadanos." },
    { q: "La Comisión Europea tiene su sede en…", o: ["Madrid", "Bruselas", "Roma"], a: 1, e: "Bruselas." },
    { q: "Un país que salió de la UE es…", o: ["Portugal", "Reino Unido", "Francia"], a: 1, e: "El Reino Unido." },
    { q: "El programa para estudiar en otro país es…", o: ["Maastricht", "Schengen", "Erasmus+"], a: 2, e: "Erasmus+." },
  ],
  examen: [
    { q: "El lema de la UE es…", o: ["Libertad, igualdad, fraternidad", "Unida en la diversidad", "Plus ultra"], a: 1, e: "Unida en la diversidad." },
    { q: "El espacio sin fronteras interiores se llama…", o: ["Erasmus", "eurozona", "Schengen"], a: 2, e: "Schengen." },
    { q: "Un país europeo que no es de la UE es…", o: ["Italia", "Grecia", "Suiza"], a: 2, e: "Suiza." },
    { q: "La UE se propone ser climáticamente neutra en…", o: ["1992", "2010", "2050"], a: 2, e: "En 2050." },
  ],
  feynman: ["Por qué y cuándo nació la Unión Europea", "Qué hacen el Parlamento y la Comisión Europea", "Qué derechos tienes por ser ciudadano europeo"],
  mapa: mapa("UE", "var(--pri)", [
    ["Historia", "1957 · 1986 España · 1992", COL.morado],
    ["Símbolos", "bandera · himno · euro", COL.azul],
    ["Instituciones", "Parlamento · Comisión · Consejo", COL.verde],
    ["Ciudadanía", "libre circulación · Erasmus+", COL.naranja],
  ], 260),
  tarjetas: [
    ["Unión Europea", "Asociación de 27 países europeos que cooperan."],
    ["Tratado de Roma", "1957: crea la Comunidad Económica Europea."],
    ["Eurozona", "Países de la UE que usan el euro."],
    ["Parlamento Europeo", "Representa a los ciudadanos; aprueba leyes."],
    ["Comisión Europea", "Propone las leyes y vigila que se cumplan."],
    ["Consejo Europeo", "Reúne a los jefes de Estado o de Gobierno."],
    ["Espacio Schengen", "Zona sin controles en las fronteras interiores."],
    ["Erasmus+", "Programa para estudiar o formarse en otro país europeo."],
  ],
  familias: ["Buscad en vuestras monedas de euro las caras de distintos países.", "Escuchad juntos la «Oda a la alegría» de Beethoven.", "Jugad a localizar los 27 países en un mapa mudo.", "Buscad carteles de obras pagadas con fondos europeos en vuestra localidad."],
  profesores: PROF("Ciencias Sociales: la Unión Europea, origen, evolución y países miembros; símbolos; instituciones principales; ciudadanía europea y sus derechos; España en la Unión Europea; retos actuales", ["Celebrar el Día de Europa con un mural de los 27 países.", "Juego de rol: sesión del Parlamento Europeo para aprobar una ley sobre el clima.", "Colección de monedas de euro y localización de su país de origen en el mapa."]),
  fuentes: [RD, { t: "Unión Europea: sitio oficial", url: "https://european-union.europa.eu/index_es" }, { t: "Rincón de aprendizaje de la UE", url: "https://learning-corner.learning.europa.eu/index_es" }, wiki("Unión Europea", "Unión_Europea")],
  revisado: REV,
};

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer a las personas que impulsaron la construcción europea", "Reconocer decisiones europeas que afectan a nuestra vida diaria", "Identificar proyectos financiados por la Unión Europea en nuestro entorno", "Valorar la diversidad de lenguas de Europa y el papel de la UE en el mundo"],
  lectura: { titulo: "De Auschwitz al Parlamento Europeo", html: `<p>Simone nació en 1927 en Niza, en Francia. Cuando tenía 16 años, en plena Segunda Guerra Mundial, fue detenida junto a su familia por ser judía y deportada al campo de concentración de <b>Auschwitz</b>. Allí vivió el horror más absoluto. Su madre murió en el campo, y su padre y su hermano desaparecieron para siempre.</p><p>Simone sobrevivió. Cuando terminó la guerra, regresó a Francia, estudió Derecho y trabajó como magistrada. Se convirtió en una política muy respetada que defendió los derechos de las mujeres y de los presos.</p><p>Muchas personas que habían sufrido la guerra pensaban que había que hacer algo para que nunca más se repitiera. Simone, a la que todos conocían como <b>Simone Veil</b>, creía firmemente que la respuesta era una <b>Europa unida</b>, donde los antiguos enemigos trabajaran juntos.</p><p>En 1979 se celebraron por primera vez elecciones directas al Parlamento Europeo: los ciudadanos de los países miembros votaron a sus diputados. Y el nuevo Parlamento eligió como presidenta a Simone Veil. La joven que había sobrevivido a Auschwitz presidía ahora la institución que representaba a los europeos unidos en paz.</p>` },
  tras: {
    "Historia de la Unión Europea": [
      ["Las personas que soñaron Europa", `<p>Detrás de la Unión Europea hay personas que, tras dos guerras mundiales terribles, se atrevieron a imaginar un continente en paz. Se les llama a menudo los <b>padres fundadores</b>:</p><ul><li><b>Jean Monnet</b>, francés, fue quien diseñó la idea de poner en común el carbón y el acero, las materias primas de la guerra, para que Francia y Alemania no pudieran volver a enfrentarse.</li><li><b>Robert Schuman</b>, ministro francés, presentó esa propuesta el 9 de mayo de 1950. Él mismo había vivido en una región que pasó varias veces de Francia a Alemania.</li><li><b>Konrad Adenauer</b>, canciller de Alemania, aceptó la mano tendida de Francia.</li><li><b>Alcide De Gasperi</b>, de Italia, y <b>Paul-Henri Spaak</b>, de Bélgica, impulsaron los tratados.</li><li><b>Altiero Spinelli</b>, italiano, escribió durante la guerra, cuando estaba preso en una isla, un manifiesto por una Europa libre y unida.</li></ul><p>También hubo mujeres que lucharon por Europa, como la periodista francesa <b>Louise Weiss</b> o la propia <b>Simone Veil</b>. Hoy algunos edificios del Parlamento Europeo llevan sus nombres. Todos ellos compartían una idea: es mejor resolver los problemas hablando y cooperando que con las armas.</p>`,
        L6.filas("Pioneros de Europa", [["Jean Monnet", "carbón y acero", cAZ], ["Robert Schuman", "9 de mayo de 1950", cNA], ["Adenauer", "Alemania", cMO], ["Simone Veil", "presidenta en 1979", cVE]])],
    ],
    "Las instituciones europeas": [
      ["Europa en tu vida diaria", `<p>Muchas decisiones que se toman en Bruselas y Estrasburgo afectan a nuestra vida cotidiana, aunque no siempre nos demos cuenta:</p><ul><li>Desde 2017, al viajar a otro país de la UE puedes usar el móvil <b>sin pagar más</b> por las llamadas y los datos: se eliminó el llamado roaming.</li><li>Desde finales de 2024, los móviles, tabletas y muchos aparatos nuevos vendidos en la UE deben usar el mismo <b>cargador universal</b> con conector USB-C. Así se ahorra dinero y se generan menos residuos.</li><li>Las botellas de plástico de bebidas deben llevar el <b>tapón unido</b> al envase, para que no acabe tirado en la naturaleza.</li><li>Las etiquetas de los alimentos deben indicar los <b>alérgenos</b> de forma destacada, y los juguetes deben cumplir normas de <b>seguridad</b> comunes y llevar el marcado CE.</li><li>Las normas de <b>protección de datos</b> obligan a las empresas a cuidar nuestra información personal.</li><li>Si un vuelo se retrasa mucho o se cancela, los pasajeros tienen <b>derecho a una compensación</b>.</li></ul><p>Estas normas las proponen la Comisión Europea y las aprueban el Parlamento Europeo, elegido por los ciudadanos, y el Consejo, donde están los gobiernos de los países.</p>`,
        L6.filas("Europa en casa", [["2017", "fin del roaming", cAZ], ["2024", "cargador USB-C común", cVE], ["botellas", "tapón unido", cNA], ["juguetes", "marcado CE", cRO]]), ["teM-LZCuks8", "Unión Europea, las historias insólitas y las curiosidades más increíbles", "Un Mundo Inmenso", 1139034]],
    ],
    "España en la Unión Europea": [
      ["Proyectos europeos cerca de ti", `<p>Si te fijas, en muchas obras, edificios y proyectos de tu entorno verás un cartel con la bandera azul de las doce estrellas y el texto «Financiado por la Unión Europea» o «Cofinanciado por la Unión Europea». Significa que una parte del dinero viene de los <b>fondos europeos</b>, que pagan entre todos los países miembros.</p><p>Algunos de estos fondos son:</p><ul><li>El <b>FEDER</b> (Fondo Europeo de Desarrollo Regional) ayuda a las regiones con menos recursos: carreteras, depuradoras, hospitales, centros de investigación.</li><li>El <b>Fondo Social Europeo</b> financia formación para el empleo y ayudas a personas con dificultades.</li><li>La <b>Política Agrícola Común</b> (PAC) apoya a los agricultores y ganaderos y el desarrollo de los pueblos.</li></ul><p>También hay programas para los centros educativos:</p><ul><li><b>eTwinning</b> permite a los colegios hacer proyectos por internet con escuelas de otros países europeos.</li><li><b>Erasmus+</b> organiza intercambios de alumnos y profesores, también en Primaria.</li><li>El <b>Cuerpo Europeo de Solidaridad</b> permite a los jóvenes hacer voluntariado en otros países.</li></ul><p>Busca carteles europeos en tu localidad: te sorprenderá cuántos hay.</p>`,
        H6.rueda("Fondos y programas", "UE", [["FEDER", cAZ], ["PAC", cVE], ["Erasmus+", cNA], ["eTwinning", cMO]])],
    ],
  },
  final: [
    ["Las lenguas de Europa", `<p>En la Unión Europea hay <b>24 lenguas oficiales</b>. Cualquier ciudadano puede escribir a las instituciones europeas en su lengua y recibir la respuesta en ella. Por eso trabajan en Bruselas y Luxemburgo miles de traductores e intérpretes.</p><p>La mayoría de las lenguas europeas pertenecen a la gran familia <b>indoeuropea</b> y se agrupan en ramas:</p><ul><li><b>Lenguas romances</b>, que vienen del latín: español, portugués, francés, italiano, rumano, catalán, gallego…</li><li><b>Lenguas germánicas</b>: alemán, inglés, neerlandés, sueco, danés…</li><li><b>Lenguas eslavas</b>: polaco, checo, eslovaco, búlgaro, croata, esloveno…</li><li>Otras ramas, como el <b>griego</b>, las <b>bálticas</b> (lituano y letón) o las <b>célticas</b> (irlandés).</li></ul><p>Hay lenguas que no son indoeuropeas, como el <b>húngaro</b>, el <b>finés</b> y el <b>estonio</b>. Y el <b>euskera</b> es especial: no se ha podido relacionar con ninguna otra lengua conocida.</p><p>Como las lenguas de una misma rama se parecen, si sabes español te resultará más fácil entender el portugués o el italiano. Cada 26 de septiembre se celebra el <b>Día Europeo de las Lenguas</b>, para animar a todos a aprender idiomas.</p>`,
      L6.filas("Familias de lenguas", [["romances", "español, francés…", cRO], ["germánicas", "alemán, inglés…", cAZ], ["eslavas", "polaco, checo…", cVE], ["no indoeuropeas", "húngaro, finés, euskera", cMO]]), ["yMi5vduNWtI", "El ORIGEN de los IDIOMAS", "Xataka", 450786]],
    ["La Unión Europea en el mundo", `<p>La Unión Europea no solo trabaja dentro de sus fronteras. También tiene un papel importante en el mundo:</p><ul><li>Es uno de los mayores <b>mercados</b> del planeta y comercia con casi todos los países.</li><li>La UE y sus países miembros, juntos, son el <b>mayor donante de ayuda al desarrollo</b> del mundo: financian escuelas, hospitales, agua potable y vacunas en países con menos recursos.</li><li>Envían <b>ayuda humanitaria</b> cuando hay terremotos, inundaciones, guerras o hambrunas.</li><li>Defienden en los foros internacionales los <b>derechos humanos</b>, la democracia y la lucha contra el <b>cambio climático</b>.</li><li>Organizan misiones para ayudar a mantener la <b>paz</b> en algunas zonas en conflicto.</li></ul><p>En 2012, la Unión Europea recibió el <b>Premio Nobel de la Paz</b> por haber contribuido durante más de seis décadas a la paz, la reconciliación, la democracia y los derechos humanos en Europa.</p><p>La UE también tiene problemas y recibe críticas: decisiones lentas, desacuerdos entre países o la sensación de algunos ciudadanos de que está lejos de ellos. Por eso es importante informarse y participar, por ejemplo votando en las elecciones europeas, que se celebran cada cinco años.</p>`,
      H6.dos("La UE en el mundo", ["Ayuda", ["desarrollo", "humanitaria", "vacunas y agua"], cVE], ["Valores", ["derechos humanos", "democracia", "clima y paz"], cAZ])],
  ],
  ejemplos: [
    ["¿Cuántos años pasaron entre la declaración Schuman (1950) y las primeras elecciones europeas (1979)?", ["1979 − 1950."], "29 años."],
    ["¿Qué familia de lenguas es el italiano? ¿Y el sueco?", ["El italiano viene del latín.", "El sueco es germánico."], "Romance y germánica."],
  ],
  errores: ["Pensar que lo que decide Europa no nos afecta: muchas normas diarias son europeas.", "Creer que todas las lenguas de Europa vienen del latín."],
  ejercicios: [
    ["b", "¿Quién fue la primera presidenta del Parlamento Europeo elegido por los ciudadanos?", "Simone Veil, en 1979."],
    ["b", "¿Cuántas lenguas oficiales tiene la UE?", "24."],
    ["b", "¿Qué se eliminó en 2017 para los móviles en la UE?", "El roaming."],
    ["b", "¿Qué significa un cartel «Financiado por la Unión Europea»?", "Que el proyecto se ha pagado en parte con fondos europeos."],
    ["b", "¿Qué premio recibió la UE en 2012?", "El Premio Nobel de la Paz."],
    ["m", "¿Por qué Jean Monnet propuso poner en común el carbón y el acero?", "Para que Francia y Alemania no pudieran volver a hacerse la guerra."],
    ["m", "Di tres normas europeas que afecten a tu vida diaria.", "Fin del roaming, cargador USB-C común, tapón unido a la botella."],
    ["m", "¿Qué es eTwinning?", "Un programa para hacer proyectos entre colegios europeos por internet."],
    ["m", "Clasifica: portugués, polaco, alemán, rumano.", "Romances: portugués, rumano. Eslava: polaco. Germánica: alemán."],
    ["m", "¿Qué tiene de especial el euskera?", "No se ha podido relacionar con ninguna otra lengua."],
    ["a", "¿Qué ventaja ecológica tiene el cargador universal?", "Se fabrican y tiran menos cargadores, se generan menos residuos."],
    ["a", "¿Por qué la historia de Simone Veil simboliza el sentido de la UE?", "Porque una superviviente de la guerra presidió la institución de la Europa unida en paz."],
    ["a", "Da dos críticas que se hacen a la UE.", "Decisiones lentas y sensación de lejanía de los ciudadanos (también desacuerdos)."],
    ["a", "Busca un proyecto financiado por la UE en tu comunidad y explica para qué sirve.", "Respuesta abierta."],
  ],
  quiz: [
    ["La declaración Schuman se presentó el…", ["9 de mayo de 1950", "12 de octubre de 1492", "6 de diciembre de 1978"], "Historia."],
    ["El FEDER ayuda sobre todo a…", ["las regiones con menos recursos", "los equipos de fútbol", "los bancos"], "Fondos."],
    ["El Día Europeo de las Lenguas es el…", ["26 de septiembre", "1 de enero", "9 de mayo"], "Lenguas."],
    ["El húngaro y el finés son lenguas…", ["no indoeuropeas", "romances", "eslavas"], "Lenguas."],
    ["Las elecciones europeas se celebran cada…", ["cinco años", "año", "diez años"], "Participar."],
  ],
  examen: [
    ["Simone Veil sobrevivió al campo de…", ["Auschwitz", "Waterloo", "Verdún"], "Lectura."],
    ["La UE y sus países son juntos el mayor donante de…", ["ayuda al desarrollo", "armas", "petróleo"], "Mundo."],
  ],
  tarjetas: [
    ["Padres de Europa", "Monnet, Schuman, Adenauer, De Gasperi, Spinelli; Simone Veil y Louise Weiss."],
    ["Europa en tu vida", "Fin del roaming (2017), cargador USB-C, tapón unido, alérgenos, marcado CE."],
    ["Fondos y programas", "FEDER, Fondo Social, PAC, Erasmus+, eTwinning."],
    ["Lenguas", "24 oficiales; romances, germánicas, eslavas y otras."],
  ],
  glosario: [
    ["Padres fundadores", "Políticos que impulsaron la unión europea tras la guerra."],
    ["Deportar", "Expulsar a una persona de su país por la fuerza."],
    ["Roaming", "Recargo por usar el móvil en otro país."],
    ["Marcado CE", "Señal de que un producto cumple las normas europeas."],
    ["Fondos europeos", "Dinero común de la UE para proyectos."],
    ["FEDER", "Fondo Europeo de Desarrollo Regional."],
    ["PAC", "Política Agrícola Común."],
    ["eTwinning", "Programa de colaboración entre colegios europeos."],
    ["Lengua romance", "Lengua que procede del latín."],
    ["Indoeuropeo", "Gran familia de lenguas de Europa y parte de Asia."],
    ["Intérprete", "Persona que traduce oralmente."],
    ["Ayuda humanitaria", "Ayuda urgente a víctimas de catástrofes o guerras."],
  ],
  situacion: {
    titulo: "Embajadores europeos",
    reto: "La clase investiga cómo la Unión Europea está presente en su localidad y organiza una jornada europea para el colegio.",
    pasos: ["Recorred el barrio o el pueblo buscando carteles de proyectos financiados por la UE y fotografiadlos.", "Investigad qué fondo los financió, cuánto costaron y para qué sirven.", "Preparad juegos sobre las 24 lenguas, los países y los símbolos de Europa.", "Celebrad una jornada europea el 9 de mayo y presentad vuestro mapa de proyectos."],
    producto: "Un mapa de proyectos europeos de la localidad y una jornada europea.",
    evaluacion: ["Identifica la presencia de la UE en su entorno.", "Investiga y contrasta información.", "Valora la diversidad lingüística y cultural.", "Comunica y organiza actividades en equipo."],
  },
});
