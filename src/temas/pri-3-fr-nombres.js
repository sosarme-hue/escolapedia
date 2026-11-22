// Francés 3º de Primaria: los números del 1 al 20. Explicaciones en español, ejemplos en francés. Dibujos propios en SVG.
const P = require("./_pri3a");
const { svg, t, AZ, RO, VE, NA, SO, MO, AG } = P;

const N = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt"];
// Rejilla de tarjetas: números desde «de» hasta «a», en filas de 5.
const tarjetas = (de, a, c, y0 = 18) => {
  let s = "";
  for (let n = de; n <= a; n++) { const i = n - de, x = 14 + (i % 5) * 47, y = y0 + Math.floor(i / 5) * 56; s += `<rect x="${x}" y="${y}" width="42" height="50" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"/>${t(x + 21, y + 24, String(n), { s: 18, d: true, c })}${t(x + 21, y + 42, N[n], { s: N[n].length > 7 ? 7.5 : 9 })}`; }
  return s;
};

module.exports = P.tema({
  materia: "Francés",
  titulo: "Les nombres de 1 à 20",
  minutos: 45,
  objetivos: ["Contar del 1 al 20 en francés", "Leer y escribir los números del 1 al 20", "Preguntar y responder cuántos hay con combien de… ?", "Usar los números para decir la edad, el teléfono y hacer sumas sencillas"],
  claves: ["les nombres", "un", "deux", "trois", "dix", "onze", "seize", "dix-sept", "vingt", "combien ?", "il y a", "plus", "moins", "égale"],
  pregunta: ["¿Sabes contar hasta tres en francés? Seguro que lo has oído en alguna carrera: «Un, deux, trois… partez!»", "¡Exacto! <i>Un, deux, trois</i> son 1, 2 y 3, y <i>partez!</i> significa «¡salid!». Hoy aprenderás a contar <mark>hasta veinte</mark> en francés. Verás que, a partir del 17, los números se forman como un pequeño puzle."],
  bloques: [
    ["Del 1 al 5", `<p>Empezamos por los cinco primeros números. Léelos en voz alta:</p><ul><li><b>un</b> («an»): 1.</li><li><b>deux</b> («dö»): 2.</li><li><b>trois</b> («truá»): 3.</li><li><b>quatre</b> («katr»): 4.</li><li><b>cinq</b> («sank»): 5.</li></ul><p>Fíjate en que la <b>x</b> de <i>deux</i> y la <b>s</b> de <i>trois</i> no se pronuncian. Para ayudarte a recordarlos, cuenta con los <mark>dedos de una mano</mark> diciéndolos en francés.</p><p>El cero se dice <b>zéro</b> («seró»).</p>`,
      svg("Tarjetas de los números del uno al cinco en francés", `${tarjetas(1, 5, AZ, 40)}${t(130, 130, "un, deux, trois, quatre, cinq", { s: 12, c: AZ })}`)],
    ["Del 6 al 10", `<p>Seguimos con la otra mano:</p><ul><li><b>six</b> («sis»): 6.</li><li><b>sept</b> («set»): 7. ¡La p no suena!</li><li><b>huit</b> («uit»): 8. La h no suena.</li><li><b>neuf</b> («nöf»): 9.</li><li><b>dix</b> («dis»): 10.</li></ul><p>Truco: <i>sept</i> se parece a «septiembre», <i>huit</i> viene, como «ocho», del latín <i>octo</i> y <i>dix</i> a «diez». Ya sabes contar <mark>hasta diez</mark>. ¡Practica con las dos manos!</p>`,
      svg("Tarjetas de los números del seis al diez en francés", `${tarjetas(6, 10, VE, 40)}${t(130, 130, "six, sept, huit, neuf, dix", { s: 12, c: VE })}`),
      P.V("nomB")],
    ["Del 11 al 16", `<p>Los números del 11 al 16 son <b>especiales</b>: todos terminan en <mark>-ze</mark> y hay que aprenderlos de memoria.</p>${P.tb(["número", "français", "se dice"], [["11", "onze", "«ons»"], ["12", "douze", "«dus»"], ["13", "treize", "«tres»"], ["14", "quatorze", "«katórs»"], ["15", "quinze", "«kans»"], ["16", "seize", "«ses»"]])}<p>¡Se parecen mucho al español! Onze-once, douze-doce, treize-trece, quatorze-catorce, quinze-quince, seize-dieciséis. Hasta el final <b>-ze</b> recuerda a nuestro «-ce».</p>`,
      svg("Tarjetas de los números del once al dieciséis en francés, todos terminan en ze", `${tarjetas(11, 15, RO, 22)}<rect x="14" y="78" width="42" height="50" rx="8" fill="var(--card)" stroke="${RO}" stroke-width="2"/>${t(35, 102, "16", { s: 18, d: true, c: RO })}${t(35, 120, "seize", { s: 9 })}${t(160, 108, "todos acaban en -ze", { s: 13, c: RO })}`)],
    ["Del 17 al 20", `<p>Del 17 al 19 los números se forman como un <b>puzle</b>: <mark>dix + el número</mark>, con un guion.</p><ul><li><b>dix-sept</b> (10 + 7) = 17. Se dice «dis-set».</li><li><b>dix-huit</b> (10 + 8) = 18. Se dice «dis-uit».</li><li><b>dix-neuf</b> (10 + 9) = 19. Se dice «dis-nöf».</li></ul><p>¡Igual que en español decimos dieci-siete, dieci-ocho, dieci-nueve!</p><p>Y el 20 tiene nombre propio: <b>vingt</b> («van»). Casi todas sus letras son mudas.</p>`,
      svg("El diecisiete es diez más siete: dix-sept; el veinte es vingt", `${[["dix", "+", "sept", "17"], ["dix", "+", "huit", "18"], ["dix", "+", "neuf", "19"]].map(([a, m, b, n], i) => { const y = 34 + i * 34; return `<rect x="20" y="${y - 18}" width="44" height="26" rx="6" fill="${AZ}" fill-opacity=".18" stroke="${AZ}" stroke-width="1.6"/>${t(42, y, a, { s: 12, c: AZ })}${t(76, y, "-", { s: 14 })}<rect x="88" y="${y - 18}" width="44" height="26" rx="6" fill="${VE}" fill-opacity=".18" stroke="${VE}" stroke-width="1.6"/>${t(110, y, b, { s: 12, c: VE })}${t(150, y, "=", { s: 14 })}${t(176, y, n, { s: 17, d: true, c: RO })}`; }).join("")}${t(130, 152, "20 = vingt", { s: 18, d: true, c: MO })}`)],
    ["¿Cuántos hay?: combien ?", `<p>Para preguntar cuántas cosas hay decimos <b>Combien de… ?</b> («combián de») — <mark>¿Cuántos…?</mark></p><ul><li><i>Combien de crayons ?</i> — ¿Cuántos lápices?</li><li><i>Il y a huit crayons.</i> — Hay ocho lápices.</li></ul><p><b>Il y a</b> («il ia») significa «<b>hay</b>». Es una expresión muy útil: <i>Dans ma classe, il y a vingt élèves</i> (En mi clase hay veinte alumnos).</p><p>Para preguntar <b>cuánto cuesta</b> algo: <i>C'est combien ?</i> — <i>C'est deux euros.</i></p>`,
      svg("Ocho lápices: combien de crayons? Il y a huit crayons", `${[...Array(8)].map((_, i) => `<path d="M${30 + i * 26} 110 V 50 l 6 -12 l 6 12 V 110 Z" fill="${[RO, AZ, VE, SO, MO, NA, RO, AZ][i]}" fill-opacity=".55" stroke="var(--ink)" stroke-width="1.2"/>`).join("")}${t(130, 28, "Combien de crayons ?", { s: 13, c: AZ })}${t(130, 140, "Il y a huit crayons.", { s: 14, c: VE })}`)],
    ["Sumas y restas en francés", `<p>Podemos hacer <b>cálculos</b> en francés:</p><ul><li><b>plus</b> («plüs»): más (+).</li><li><b>moins</b> («muán»): menos (−).</li><li><b>égale</b> o <b>font</b>: igual a (=).</li></ul><p>Ejemplos:</p><ul><li><i>Deux plus trois égale cinq.</i> (2 + 3 = 5)</li><li><i>Dix moins quatre égale six.</i> (10 − 4 = 6)</li><li><i>Huit plus huit font seize.</i> (8 + 8 = 16)</li></ul><p>¡Así practicas a la vez las matemáticas y el francés!</p>`,
      P.filas("Sumas y restas en francés", [["2 + 3 = 5", "deux plus trois égale cinq", AZ], ["10 − 4 = 6", "dix moins quatre égale six", RO], ["8 + 8 = 16", "huit plus huit font seize", VE]])],
    ["Números para la vida diaria", `<p>Los números sirven para muchas cosas:</p><ul><li>La <b>edad</b>: <i>J'ai neuf ans.</i> (Tengo nueve años.)</li><li>La <b>fecha</b>: <i>Aujourd'hui, c'est le douze.</i> (Hoy es día doce.)</li><li>El <b>número de casa</b>: <i>J'habite au numéro quinze.</i> (Vivo en el número quince.)</li><li>El <b>teléfono</b>: en Francia se dice de dos en dos cifras: 06 12 15 18 20 → <i>zéro six, douze, quinze, dix-huit, vingt</i>.</li></ul><p>Y en los juegos: <i>Un, deux, trois, soleil !</i> es el «escondite inglés» francés.</p>`,
      P.filas("Números en la vida diaria", [["J'ai neuf ans.", "Tengo nueve años.", AZ], ["C'est le douze.", "Es día doce.", VE], ["numéro quinze", "número quince", SO], ["Un, deux, trois, soleil", "un juego", RO]])],
    ["Contar hacia atrás y de dos en dos", `<p>Para dominar los números, practica contando de formas distintas:</p><ul><li><b>Hacia atrás</b>, como en el despegue de un cohete: <i>dix, neuf, huit, sept, six, cinq, quatre, trois, deux, un… zéro !</i></li><li>De <b>dos en dos</b> (números pares): <i>deux, quatre, six, huit, dix, douze, quatorze, seize, dix-huit, vingt</i>.</li><li>Los <b>impares</b>: <i>un, trois, cinq, sept, neuf, onze, treize, quinze, dix-sept, dix-neuf</i>.</li></ul><p>Reto: ¿quién cuenta del <mark>20 al 0</mark> sin equivocarse?</p>`,
      svg("Un cohete despega con la cuenta atrás en francés", `<path d="M190 30 C 214 54 214 100 206 124 H 174 C 166 100 166 54 190 30 Z" fill="var(--card)" stroke="${AZ}" stroke-width="2.5"/><circle cx="190" cy="70" r="9" fill="${AG}" fill-opacity=".5" stroke="${AZ}" stroke-width="2"/><path d="M174 110 l -12 18 h 14 M206 110 l 12 18 h -14" fill="${RO}" fill-opacity=".5" stroke="${AZ}" stroke-width="2"/><path d="M182 128 q 8 26 16 0" fill="${SO}" stroke="${NA}" stroke-width="2"/>${["dix", "neuf", "huit", "…", "un", "zéro !"].map((w, i) => t(70, 34 + i * 24, w, { s: i === 5 ? 16 : 13, c: i === 5 ? RO : "var(--ink)", d: i === 5 })).join("")}`)],
    ["Canciones y juegos con números", `<p>La mejor forma de aprender los números es <b>jugando</b>:</p><ul><li><b>Bingo</b>: la profe dice números en francés y tachas los que tienes en tu cartón.</li><li><b>¿Cuántos dedos?</b>: un compañero enseña dedos y tú dices el número en francés.</li><li><b>Pío pío</b>: contamos en ronda, y en los múltiplos de 5 hay que decir <i>«Pouf !»</i> en vez del número.</li><li><b>Canciones</b>: como <i>Un, deux, trois, nous irons au bois</i>, una canción infantil francesa muy antigua.</li></ul><p>Escucha y canta: los números se te quedarán <mark>sin darte cuenta</mark>.</p>`,
      svg("Cartón de bingo con números del uno al veinte", `<rect x="40" y="20" width="180" height="114" rx="10" fill="var(--card)" stroke="${MO}" stroke-width="2.5"/>${[3, 7, 11, 15, 20, 1, 9, 13, 17, 19, 4, 6, 12, 16, 18].map((n, i) => `${t(62 + (i % 5) * 34, 50 + Math.floor(i / 5) * 34, String(n), { s: 15, d: true, c: [7, 13, 18].includes(n) ? RO : "var(--ink)" })}${[7, 13, 18].includes(n) ? `<circle cx="${62 + (i % 5) * 34}" cy="${45 + Math.floor(i / 5) * 34}" r="12" fill="none" stroke="${RO}" stroke-width="2"/>` : ""}`).join("")}${t(130, 160, "Bingo ! dix-huit !", { s: 14, d: true, c: MO })}`)],
  ],
  figura: ["Les nombres de 1 à 20", P.columnas("Resumen: números del 1 al 10, del 11 al 16, del 17 al 20 y combien", [["1 · 2 · 3 · 4 · 5", "UN → CINQ", ["un, deux, trois", "quatre, cinq"], AZ], ["6 · 7 · 8 · 9 · 10", "SIX → DIX", ["six, sept, huit", "neuf, dix"], VE], ["acaban en -ze", "ONZE → SEIZE", ["dix-sept, dix-huit", "dix-neuf, vingt"], RO], ["¿cuántos?", "COMBIEN ?", ["Il y a…", "plus · moins"], SO]])],
  video: P.V("nomV", true),
  ejemplos: [
    ["Escribe en francés: 7, 12 y 18.", ["7 = sept (la p no suena).", "12 = douze (de los acabados en -ze).", "18 = dix + huit = dix-huit."], "sept, douze, dix-huit"],
    ["Calcula y escribe en francés: cinq plus six.", ["5 + 6 = 11.", "11 = onze."], "Cinq plus six égale onze."],
    ["Responde: Combien de doigts as-tu ? (¿Cuántos dedos tienes?)", ["Tenemos 10 dedos en las manos.", "10 = dix. Usamos J'ai…"], "J'ai dix doigts."],
  ],
  errores: [
    "Pronunciar letras mudas: deux no es «deus» ni sept «sept» con p.",
    "Confundir seize (16) con six (6).",
    "Escribir dixsept sin guion (es dix-sept).",
    "Confundir quatre (4) con quatorze (14).",
    "Decir «il est huit crayons» en vez de il y a huit crayons.",
  ],
  ejercicios: [
    ["Cuenta en francés del 1 al 10.", "Un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix."],
    ["¿Qué número es «quinze»? ¿Y «treize»?", "15 y 13."],
    ["Escribe en francés: 11, 14 y 16.", "Onze, quatorze y seize."],
    ["¿Cómo se forma el 19 en francés?", "Dix + neuf: dix-neuf."],
    ["Escribe en francés el 20.", "Vingt."],
    ["Traduce: ¿Cuántos libros hay? Hay cuatro libros.", "Combien de livres ? Il y a quatre livres."],
    ["Calcula en francés: dix moins trois.", "Sept (7)."],
    ["Escribe los números pares del 2 al 20 en francés.", "Deux, quatre, six, huit, dix, douze, quatorze, seize, dix-huit, vingt."],
    ["Escribe tu edad en francés.", "Por ejemplo: J'ai huit ans (o J'ai neuf ans)."],
    ["Cuenta hacia atrás del 5 al 0 en francés.", "Cinq, quatre, trois, deux, un, zéro."],
  ],
  quiz: [
    ["«Trois» es…", ["3", "13", "30"], "Truá."],
    ["El 5 en francés es…", ["cinq", "six", "sept"], "Sank."],
    ["«Huit» es…", ["8", "18", "6"], "Uit."],
    ["El 10 se dice…", ["dix", "deux", "douze"], "Dis."],
    ["«Douze» es…", ["12", "2", "20"], "Doce."],
    ["El 15 se dice…", ["quinze", "quatorze", "cinq"], "Kans."],
    ["«Dix-sept» es…", ["17", "70", "7"], "10 + 7."],
    ["El 20 se dice…", ["vingt", "deux-dix", "douze"], "Van."],
    ["«Combien ?» significa…", ["¿Cuántos?", "¿Cómo?", "¿Quién?"], "Combián."],
    ["«Il y a» significa…", ["hay", "tiene", "es"], "Il ia."],
  ],
  examen: [
    ["«Seize» es…", ["16", "6", "7"], "Ses."],
    ["Deux plus quatre égale…", ["six", "huit", "deux"], "2 + 4 = 6."],
    ["El 19 se escribe…", ["dix-neuf", "neuf-dix", "dixneuf"], "Con guion."],
    ["¿Qué número NO acaba en -ze?", ["dix", "onze", "treize"], "11 a 16 acaban en -ze."],
  ],
  feynman: ["Cómo se cuenta del 1 al 10 en francés", "Qué tienen en común los números del 11 al 16", "Cómo se forman el 17, el 18 y el 19", "Cómo se pregunta cuántos hay", "Cómo se dice una suma en francés"],
  mapa: ["LES NOMBRES", [["1 a 10", "un, deux… dix", AZ], ["11 a 16", "onze… seize (-ze)", RO], ["17 a 20", "dix-sept… vingt", VE], ["Usar", "combien ? · il y a · plus", SO]]],
  tarjetas: [
    ["un · deux · trois", "1 · 2 · 3"],
    ["quatre · cinq · six", "4 · 5 · 6"],
    ["sept · huit · neuf · dix", "7 · 8 · 9 · 10"],
    ["onze · douze · treize", "11 · 12 · 13"],
    ["quatorze · quinze · seize", "14 · 15 · 16"],
    ["dix-sept · dix-huit · dix-neuf", "17 · 18 · 19 (diez + número)"],
    ["vingt", "20"],
    ["Combien ? · Il y a…", "¿Cuántos? · Hay…"],
  ],
  familias: ["Contad en francés al subir escaleras o al poner la mesa.", "Jugad al bingo en casa diciendo los números en francés.", "Haced sumas sencillas en francés durante un viaje en coche.", "Escuchad una canción infantil francesa de números."],
  saberes: "Léxico básico en lengua extranjera: los números del 0 al 20; formación de los números del 17 al 19; preguntar y responder por cantidades (combien, il y a); operaciones sencillas (plus, moins, égale); uso de los números en contextos cotidianos (edad, fecha, teléfono); canciones y juegos tradicionales",
  ideas: ["Bingo de números en francés.", "Juego de la cuenta atrás con el cohete de papel.", "Rayuela en el patio diciendo los números en francés."],
});

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Contar de diez en diez hasta cien", "Usar il y a, decir la hora en punto y preguntar precios", "Usar los ordinales premier, deuxième, troisième", "Decir la fecha de nuestro cumpleaños"],
  lectura: { titulo: "Al mercado con mamie", html: `<p>Es sábado por la mañana en Niza, una ciudad del sur de Francia junto al mar. Léa va al mercado con su abuela.</p><p>—<i>Quelle heure est-il ?</i> —pregunta la abuela.</p><p>—<i>Il est neuf heures, mamie !</i> —responde Léa mirando el reloj de la plaza.</p><p>En el mercado hay muchos puestos. Il y a des tomates rouges, des citrons jaunes y des fleurs de todos los colores. Huele a lavanda.</p><p>La abuela le da un monedero a Léa: —Hoy compras tú.</p><p>Léa se acerca al puesto de fruta y dice muy educada:</p><p>—<i>Bonjour ! Six pommes, s'il vous plaît.</i></p><p>El vendedor las cuenta: <i>un, deux, trois, quatre, cinq, six</i>. —<i>Voilà ! Ça fait trois euros.</i></p><p>Léa saca una moneda de dos euros y una de un euro. —<i>Un, deux, trois euros. Merci, monsieur !</i></p><p>—<i>Merci, mademoiselle. Au revoir !</i></p><p>La abuela sonríe orgullosa. —<i>Bravo, Léa !</i> Ahora vamos a por pan. Pero primero… <i>une glace</i>?</p><p>Léa da un salto: —<i>Oui ! Deux boules, s'il te plaît !</i></p>` },
  tras: {
    "Del 1 al 5": [
      ["Números que se unen: la liaison", `<p>En francés, muchas letras finales <b>no se pronuncian</b>: en <i>deux</i> la <b>x</b> no suena, y en <i>trois</i> la <b>s</b> tampoco. Pero ¡atención! Si la palabra siguiente empieza por <b>vocal</b>, esa letra «se despierta» y se une a la palabra siguiente. Se llama <mark>liaison</mark> (enlace).</p><ul><li><i>deux amis</i> — se dice «de-<b>z</b>ami» (dos amigos)</li><li><i>trois enfants</i> — «trua-<b>z</b>anfan» (tres niños)</li><li><i>six ans</i> — «si-<b>z</b>an» (seis años)</li><li><i>dix euros</i> — «di-<b>z</b>euró» (diez euros)</li><li><i>un ami</i> — «un-<b>n</b>ami» (un amigo)</li></ul><p>Fíjate: la <b>s</b> y la <b>x</b> suenan como una <b>z</b> suave, como el zumbido de una abeja.</p><p>Y otro detalle: <i>six</i> y <i>dix</i> solos se pronuncian «sis» y «dis», pero delante de consonante pierden el final: <i>six chats</i> «si cha», <i>dix livres</i> «di livr».</p><p><b>Actividad</b>: lee en voz alta: <i>deux oranges, trois amis, six euros, dix ans</i>. ¿Oyes la «z»?</p>`,
        L6.filas("Liaison", [["deux amis", "de-z-ami", cAZ], ["trois enfants", "trua-z-anfan", cVE], ["six ans", "si-z-an", cNA], ["un ami", "un-n-ami", cRO]])],
    ],
    "Del 17 al 20": [
      ["De diez en diez hasta cien", `<p>Ya sabemos llegar a <b>vingt</b> (20). Ahora contamos de diez en diez:</p><ul><li>30 <b>trente</b> · 40 <b>quarante</b> · 50 <b>cinquante</b> · 60 <b>soixante</b></li></ul><p>Y aquí viene lo curioso. Los franceses no tienen una palabra para 70, 80 y 90: ¡hacen <mark>cuentas</mark>!</p><ul><li>70 = <b>soixante-dix</b> («sesenta y diez»)</li><li>80 = <b>quatre-vingts</b> («cuatro veintes», 4 × 20)</li><li>90 = <b>quatre-vingt-dix</b> («cuatro veintes y diez», 4 × 20 + 10)</li><li>100 = <b>cent</b></li></ul><p>Esta forma de contar con veintes es muy antigua: hace siglos, se contaba de veinte en veinte, quizá usando los dedos de las manos y de los pies.</p><p>En <b>Bélgica</b> y en <b>Suiza</b>, donde también se habla francés, es más sencillo: dicen <i>septante</i> (70) y <i>nonante</i> (90). En algunas zonas de Suiza dicen incluso <i>huitante</i> (80).</p><p><b>Actividad</b>: escribe en francés tu edad, la de un adulto de tu familia y el número 80. ¿Qué cuenta hay escondida en <i>quatre-vingts</i>?</p>`,
        L6.filas("Dizaines", [["30, 40, 50", "trente, quarante, cinquante", cAZ], ["60", "soixante", cVE], ["70", "soixante-dix", cNA], ["80", "quatre-vingts", cRO]])],
    ],
    "¿Cuántos hay?: combien ?": [
      ["Il y a: hay", `<p>Para decir «hay» en francés usamos dos palabritas que van siempre juntas: <mark>il y a</mark> (se pronuncia «il-i-a»). Sirve igual para una cosa o para muchas:</p><ul><li><i><b>Il y a</b> un chat sur le lit.</i> — Hay un gato en la cama.</li><li><i><b>Il y a</b> trois livres sur la table.</i> — Hay tres libros en la mesa.</li><li><i><b>Il y a</b> vingt élèves dans ma classe.</i> — Hay veinte alumnos en mi clase.</li></ul><p>Para preguntar «¿cuántos hay?» lo unimos con <b>combien</b>:</p><ul><li><i><b>Combien de</b> crayons <b>il y a</b> ?</i> — ¿Cuántos lápices hay?</li><li><i><b>Il y a</b> douze crayons.</i> — Hay doce lápices.</li></ul><p>Y si no hay nada: <i><b>Il n'y a pas de</b> chien.</i> — No hay perro.</p><p>Fíjate en que en francés decimos <b>combien de</b> + cosa: <i>combien de pommes, combien d'amis</i>.</p><p>Juego: <b>Il y a… dans ma trousse</b>. Abre tu estuche y cuenta en francés: <i>Il y a cinq crayons, deux gommes et une règle.</i></p><p><b>Actividad</b>: describe tu habitación con cuatro frases con <i>il y a</i>.</p>`,
        L6.dialogo("Combien ?", [["Prof", "Combien d'élèves il y a ?", cAZ], ["Léo", "Il y a vingt élèves.", cRO], ["Prof", "Et combien de filles ?", cAZ], ["Léo", "Il y a onze filles.", cRO]]),
        ["L7xq6q9WASQ", "French Lesson - NUMBERS 1-20 - Compter jusqu'à 20 - Learn French", "The French Minute", 7372678]],
    ],
    "Sumas y restas en francés": [
      ["Quelle heure est-il ? La hora", `<p>Con los números del 1 al 12 ya podemos decir la <mark>hora en punto</mark>. La pregunta es:</p><p style="text-align:center"><b>Quelle heure est-il ?</b> — ¿Qué hora es?</p><p>La respuesta empieza siempre por <b>Il est…</b> y termina con <b>heure(s)</b>:</p><ul><li>1:00 — <i>Il est <b>une heure</b>.</i> (en singular)</li><li>3:00 — <i>Il est <b>trois heures</b>.</i> (en plural, con -s)</li><li>8:00 — <i>Il est <b>huit heures</b>.</i></li><li>12:00 del mediodía — <i>Il est <b>midi</b>.</i></li><li>12:00 de la noche — <i>Il est <b>minuit</b>.</i></li></ul><p>Para la hora y media se añade <b>et demie</b>: <i>Il est quatre heures et demie.</i> (las cuatro y media).</p><p>En francés también se usan mucho las horas de 13 a 24, sobre todo en los horarios de trenes y en la tele: <i>Le film commence à vingt heures.</i> (La película empieza a las ocho de la tarde.)</p><p>Para decir a qué hora hacemos algo usamos <b>à</b>: <i>L'école commence à neuf heures.</i></p><p><b>Actividad</b>: dibuja cuatro relojes y escribe la hora en francés debajo.</p>`,
        L6.filas("L'heure", [["1:00", "Il est une heure.", cAZ], ["3:00", "Il est trois heures.", cVE], ["12:00", "Il est midi.", cNA], ["4:30", "quatre heures et demie", cRO]])],
    ],
    "Números para la vida diaria": [
      ["Ça coûte combien ? Los precios", `<p>En Francia, como en España, se paga con <mark>euros</mark> (<i>les euros</i>). Para preguntar el precio decimos:</p><ul><li><i><b>Ça coûte combien ?</b></i> — ¿Cuánto cuesta?</li><li><i><b>C'est combien ?</b></i> — ¿Cuánto es?</li></ul><p>Las respuestas:</p><ul><li><i>Ça coûte <b>deux euros</b>.</i> — Cuesta dos euros.</li><li><i>Ça fait <b>cinq euros</b>.</i> — Son cinco euros (al pagar todo).</li><li><i>Un euro cinquante.</i> — Un euro con cincuenta.</li></ul><p>Recuerda la liaison: <i>deux euros</i> suena «de-zeuró» y <i>trois euros</i> «trua-zeuró».</p><p>Así es una compra educada en una tienda francesa:</p><ul><li>Se saluda siempre al entrar: <i>Bonjour !</i></li><li>Se pide con <i>s'il vous plaît</i>: <i>Une baguette, s'il vous plaît.</i></li><li>Se da el dinero: <i>Voilà.</i> (Aquí tiene.)</li><li>Se despide: <i>Merci, au revoir !</i></li></ul><p>En Francia es muy importante decir <i>bonjour</i> al entrar en una tienda; si no, parece de mala educación.</p><p><b>Actividad</b>: con un compañero, representa una compra en una panadería francesa con precios.</p>`,
        L6.dialogo("À la boulangerie", [["Léa", "Une baguette, s'il vous plaît.", cAZ], ["Vendeur", "Voilà ! Un euro.", cRO], ["Léa", "Ça coûte combien, le croissant ?", cAZ], ["Vendeur", "Un euro cinquante.", cRO]])],
    ],
    "Contar hacia atrás y de dos en dos": [
      ["Premier, deuxième, troisième", `<p>Los números <mark>ordinales</mark> sirven para decir el orden: primero, segundo, tercero… En francés se forman de una manera muy fácil: se añade <b>-ième</b> al número.</p><ul><li>2 deux → <b>deuxième</b> (segundo)</li><li>3 trois → <b>troisième</b> (tercero)</li><li>4 quatre → <b>quatrième</b> (cuarto): se quita la -e.</li><li>6 six → <b>sixième</b> · 10 dix → <b>dixième</b></li></ul><p>Hay algunos cambios pequeños:</p><ul><li>5 cinq → <b>cinquième</b>: se añade una <b>u</b>.</li><li>9 neuf → <b>neuvième</b>: la <b>f</b> se convierte en <b>v</b>.</li></ul><p>Y el primero es especial: <b>premier</b> (masculino) y <b>première</b> (femenino).</p><ul><li><i>Je suis <b>premier</b> !</i> — ¡Soy el primero!</li><li><i>Elle est <b>première</b>.</i> — Ella es la primera.</li><li><i>J'habite au <b>troisième</b> étage.</i> — Vivo en el tercer piso.</li></ul><p>En las carreras se dan medallas al <i>premier</i>, al <i>deuxième</i> y al <i>troisième</i>.</p><p><b>Actividad</b>: haz una fila con cinco compañeros y di la posición de cada uno: <i>Ana est première, Pablo est deuxième…</i></p>`,
        L6.filas("Ordinaux", [["1", "premier, première", cNA], ["2", "deuxième", cAZ], ["3", "troisième", cRO], ["5", "cinquième", cVE]])],
    ],
  },
  final: [
    ["Los meses y mi cumpleaños", `<p>Los <mark>meses</mark> en francés se parecen mucho al español, y se escriben con <b>minúscula</b>:</p><ul><li><i>janvier, février, mars, avril, mai, juin</i></li><li><i>juillet, août, septembre, octobre, novembre, décembre</i></li></ul><p>Fíjate en <i>août</i> (agosto): se pronuncia «ut», ¡muy corto!</p><p>Para decir la fecha usamos <b>le</b> + número + mes: <i>le 5 avril</i> (el 5 de abril), <i>le 20 juin</i>. Pero el día uno es especial: decimos <b>le premier</b>: <i>le premier mai</i> (el 1 de mayo).</p><p>Para hablar del cumpleaños:</p><ul><li><i>C'est quand, ton anniversaire ?</i> — ¿Cuándo es tu cumpleaños?</li><li><i>Mon anniversaire, c'est <b>le 12 mars</b>.</i> — Mi cumpleaños es el 12 de marzo.</li></ul><p>Algunas fechas importantes en Francia: <i>le premier janvier</i> (Año Nuevo), <i>le 14 juillet</i> (fiesta nacional) y <i>le 25 décembre</i> (Navidad, <i>Noël</i>).</p><p><b>Actividad</b>: haz un calendario de cumpleaños de la clase. Cada alumno dice: <i>Mon anniversaire, c'est le…</i></p>`,
      H6.flujo("La date", ["le|premier", "le 5|avril", "le 14|juillet", "le 25|décembre"], cMO)],
  ],
  ejemplos: [
    ["Escribe 80 en francés y explica la cuenta.", ["Los franceses cuentan con veintes.", "80 son cuatro veintes."], "quatre-vingts (4 × 20)"],
    ["Pregunta cuántas manzanas hay y responde que hay siete.", ["Usamos combien de + cosa.", "Hay se dice il y a."], "Combien de pommes il y a ? — Il y a sept pommes."],
  ],
  errores: ["Decir «Il est un heure» en lugar de «Il est une heure» (heure es femenino).", "Decir «unième» en lugar de premier o première."],
  ejercicios: [
    ["b", "¿Cómo se dice «hay» en francés?", "Il y a."],
    ["b", "Escribe 50 en francés.", "Cinquante."],
    ["b", "¿Cómo se pregunta la hora?", "Quelle heure est-il ?"],
    ["b", "¿Cómo se dice «primero»?", "Premier (première en femenino)."],
    ["b", "En la lectura, ¿cuántas manzanas compra Léa?", "Seis."],
    ["m", "Escribe 70 y 90 en francés.", "Soixante-dix y quatre-vingt-dix."],
    ["m", "Di la hora: 12:00 del mediodía y 7:00.", "Il est midi. Il est sept heures."],
    ["m", "Traduce: Hay veinte alumnos en mi clase.", "Il y a vingt élèves dans ma classe."],
    ["m", "Escribe en francés el ordinal de 5 y de 9.", "Cinquième y neuvième."],
    ["m", "¿Cómo dicen 70 en Bélgica y en Suiza?", "Septante."],
    ["a", "Escribe un diálogo de compra en una tienda francesa con precio.", "Respuesta abierta."],
    ["a", "Escribe la fecha de tu cumpleaños y la de dos familiares.", "Ejemplo: Mon anniversaire, c'est le 3 juin."],
    ["a", "Describe tu clase con cuatro frases con il y a y números.", "Respuesta abierta."],
    ["a", "Explica qué es la liaison con dos ejemplos.", "Es la unión de la letra final muda con la vocal siguiente: deux amis, trois enfants."],
  ],
  quiz: [
    ["80 en francés es…", ["quatre-vingts", "huitante", "soixante-vingt"], "Números."],
    ["«Il est ___.» (12:00 del mediodía)", ["midi", "minuit", "douze heure"], "Hora."],
    ["«¿Cuánto cuesta?» se dice…", ["Ça coûte combien ?", "Il y a combien ?", "Quelle heure est-il ?"], "Precios."],
    ["El ordinal de 1 en femenino es…", ["première", "unième", "premier"], "Ordinales."],
    ["«El 1 de mayo» se dice…", ["le premier mai", "le un mai", "le unième mai"], "Fecha."],
  ],
  examen: [
    ["En la lectura, ¿cuánto pagan por las manzanas?", ["trois euros", "six euros", "deux euros"], "Lectura."],
    ["¿Qué se dice al entrar en una tienda francesa?", ["Bonjour !", "Au revoir !", "Voilà !"], "Cortesía."],
  ],
  tarjetas: [
    ["Dizaines", "trente, quarante, cinquante, soixante, soixante-dix, quatre-vingts, quatre-vingt-dix, cent."],
    ["Il y a", "Il y a trois livres. Combien de… il y a ?"],
    ["L'heure", "Quelle heure est-il ? Il est une heure, trois heures, midi, minuit."],
    ["Ordinaux y fecha", "premier, deuxième, troisième; le premier mai, le 5 avril."],
  ],
  glosario: [
    ["Liaison", "Unión de una letra final muda con la vocal siguiente."],
    ["Trente", "Treinta."],
    ["Soixante-dix", "Setenta."],
    ["Quatre-vingts", "Ochenta."],
    ["Cent", "Cien."],
    ["Il y a", "Hay."],
    ["Quelle heure est-il ?", "¿Qué hora es?"],
    ["Midi", "Mediodía."],
    ["Minuit", "Medianoche."],
    ["Ça coûte combien ?", "¿Cuánto cuesta?"],
    ["Premier", "Primero."],
    ["Août", "Agosto."],
  ],
  situacion: {
    titulo: "Le marché de la classe",
    reto: "La clase monta un mercado francés con precios en euros, horarios y un calendario de cumpleaños.",
    pasos: ["Hacer etiquetas de precios en francés para productos dibujados.", "Poner un cartel con el horario: Le marché ouvre à neuf heures.", "Representar compras con Bonjour, Ça coûte combien ? y Merci.", "Al final, contar con il y a cuántos productos quedan."],
    producto: "Un mercado francés en el aula con etiquetas y diálogos.",
    evaluacion: ["Dice números hasta 100 de diez en diez.", "Pregunta y dice precios y horas.", "Usa il y a y combien de correctamente.", "Es educado en los diálogos de compra."],
  },
});
