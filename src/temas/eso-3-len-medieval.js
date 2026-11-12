// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "La literatura medieval",
  minutos: 55,
  objetivos: ["Situar la literatura medieval en su contexto histórico", "Distinguir el mester de juglaría y el mester de clerecía", "Reconocer las obras y autores principales: el Cantar de mio Cid, Berceo, el Arcipreste de Hita, don Juan Manuel, el Romancero y Jorge Manrique"],
  claves: ["Edad Media", "juglar", "mester de juglaría", "mester de clerecía", "jarchas", "cantar de gesta", "Cantar de mio Cid", "Berceo", "El conde Lucanor", "Romancero", "Manrique"],
  pregunta: {
    texto: "En la Edad Media casi nadie sabía leer. ¿Cómo llegaba entonces la literatura a la gente?",
    respuesta: "Por el <b>oído</b>. Los <mark>juglares</mark> recitaban y cantaban poemas en plazas, castillos y mercados, a menudo acompañados de música. Por eso muchas obras medievales son anónimas, se transmitían de memoria y cambiaban con cada recitado. La escritura quedaba sobre todo en manos de los clérigos, en los monasterios.",
  },
  bloques: [
    {
      html: `<h3>El contexto: la sociedad medieval</h3><p>La Edad Media va desde el siglo V hasta finales del XV. En la península ibérica conviven cristianos, musulmanes y judíos, y los reinos cristianos avanzan hacia el sur en la <b>Reconquista</b>. La sociedad es <b>feudal</b> y se divide en tres estamentos: la <mark>nobleza</mark> (que guerrea), el <mark>clero</mark> (que reza y conserva la cultura) y el <mark>pueblo llano</mark> (que trabaja). La visión del mundo es <b>teocéntrica</b>: Dios es el centro de todo.</p>`,
      svg: L.filas("Los tres estamentos de la sociedad medieval", [
        ["Nobleza", "guerrea y gobierna", "var(--red)"],
        ["Clero", "reza y conserva la cultura", "var(--pen)"],
        ["Pueblo llano", "trabaja la tierra", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>La lírica primitiva</h3><p>Las primeras muestras de literatura en lenguas romances peninsulares son breves canciones populares de amor, casi siempre en boca de una mujer que se queja por la ausencia del amado. Las <b>jarchas</b> (siglos XI-XII) son estrofillas en mozárabe que cerraban poemas árabes o hebreos. En Galicia surgieron las <b>cantigas de amigo</b> y en Castilla, los <b>villancicos</b>.</p>`,
      svg: L.tabla("La lírica primitiva peninsular", ["Forma", "Zona"], [
        ["Jarchas", "al-Ándalus"], ["Cantigas de amigo", "Galicia"], ["Villancicos", "Castilla"],
      ]),
    },
    {
      html: `<h3>El mester de juglaría: el Cantar de mio Cid</h3><p>El <b>mester de juglaría</b> es el oficio de los juglares, que recitaban <b>cantares de gesta</b>: poemas épicos que narraban las hazañas de un héroe. Usaban versos de medida irregular con rima asonante. El más importante es el <mark>Cantar de mio Cid</mark> (hacia 1200), que cuenta cómo Rodrigo Díaz de Vivar, desterrado por el rey Alfonso VI, recupera su <b>honra</b> con sus victorias y con la boda de sus hijas.</p>`,
      svg: L.linea("Las tres partes del Cantar de mio Cid", [
        ["I", "Cantar del destierro", "var(--pen)"],
        ["II", "Cantar de las bodas", "var(--leaf)"],
        ["III", "Cantar de la afrenta de Corpes", "var(--red)"],
      ]),
    },
    {
      html: `<h3>El mester de clerecía</h3><p>En el siglo XIII aparece el <b>mester de clerecía</b>, la escuela de poetas cultos, normalmente clérigos, que escriben para <mark>enseñar y transmitir valores religiosos y morales</mark>. Usan la <b>cuaderna vía</b>: estrofas de cuatro versos alejandrinos (14 sílabas) con una sola rima consonante (AAAA). El primer autor de nombre conocido es <b>Gonzalo de Berceo</b>, autor de los <i>Milagros de Nuestra Señora</i>.</p>`,
      svg: L.filas("Mester de juglaría frente a mester de clerecía", [
        ["Juglaría", "anónima, oral, rima asonante", "var(--pen)"],
        ["Clerecía", "culta, escrita, cuaderna vía", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>La prosa y el siglo XV</h3><p>El rey <b>Alfonso X el Sabio</b> (siglo XIII) impulsó el castellano como lengua de cultura con obras de historia, derecho y ciencia. Su sobrino <b>don Juan Manuel</b> escribió <i>El conde Lucanor</i> (1335), una colección de cuentos con moraleja. En el siglo XV destacan el <b>Romancero</b>, poemas populares en octosílabos, y <b>Jorge Manrique</b>, autor de las <i>Coplas por la muerte de su padre</i>, una reflexión sobre el paso del tiempo y la muerte.</p>`,
      svg: L.linea("Hitos de la literatura medieval castellana", [
        ["1200", "Cantar de mio Cid", "var(--pen)"],
        ["1250", "Berceo y Alfonso X", "var(--leaf)"],
        ["1335", "El conde Lucanor", "var(--red)"],
        ["1476", "Coplas de Manrique", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "La literatura medieval en un vistazo",
    svg: L.eje("Línea del tiempo de la literatura medieval", [
      ["s. XI", "Jarchas", ["lírica popular", "en mozárabe"], "var(--muted)"],
      ["1200", "Mio Cid", ["mester de", "juglaría"], "var(--pen)"],
      ["s. XIII", "Berceo", ["mester de", "clerecía"], "var(--leaf)"],
      ["s. XIV", "Lucanor · Hita", ["prosa y", "Buen amor"], "var(--red)"],
      ["s. XV", "Manrique", ["Romancero", "y Coplas"], "var(--inf)"],
    ]),
  },
  video: { id: "lz5srr7MwPE", titulo: "Literatura medieval española: resumen", canal: "JavierRuescas", vistas: 122605, megusta: 0, busqueda: "literatura medieval española" },
  quiz: [
    { q: "Los juglares…", o: ["recitaban obras en plazas y castillos", "escribían en monasterios", "eran reyes"], a: 0, e: "Transmitían la literatura de forma oral." },
    { q: "El Cantar de mio Cid es un…", o: ["cantar de gesta", "soneto", "libro de cuentos"], a: 0, e: "Poema épico del mester de juglaría." },
    { q: "La cuaderna vía tiene…", o: ["cuatro alejandrinos con una sola rima", "ocho octosílabos", "catorce endecasílabos"], a: 0, e: "AAAA de 14 sílabas." },
    { q: "Gonzalo de Berceo pertenece al…", o: ["mester de clerecía", "mester de juglaría", "Renacimiento"], a: 0, e: "Fue un clérigo culto del siglo XIII." },
    { q: "El conde Lucanor es obra de…", o: ["don Juan Manuel", "Jorge Manrique", "Alfonso X"], a: 0, e: "Colección de cuentos con moraleja (1335)." },
  ],
  examen: [
    { q: "El tema central del Cantar de mio Cid es…", o: ["la recuperación de la honra", "el amor cortés", "la muerte"], a: 0, e: "El Cid pasa del destierro a la honra." },
    { q: "Las jarchas estaban escritas en…", o: ["mozárabe", "latín", "gallego"], a: 0, e: "La lengua romance de al-Ándalus." },
    { q: "Las Coplas por la muerte de su padre tratan sobre…", o: ["el paso del tiempo y la muerte", "las hazañas del Cid", "el amor"], a: 0, e: "Jorge Manrique, siglo XV." },
  ],
  feynman: ["Cómo era la sociedad medieval y cómo influyó en su literatura", "La diferencia entre mester de juglaría y mester de clerecía", "De qué trata el Cantar de mio Cid", "Qué aportan don Juan Manuel y Jorge Manrique"],
  mapa: mapa("EDAD MEDIA", "var(--eso)", [
    ["Lírica", "jarchas · cantigas · villancicos", "var(--muted)"],
    ["Juglaría", "Cantar de mio Cid", "var(--pen)"],
    ["Clerecía", "Berceo · Arcipreste", "var(--leaf)"],
    ["Prosa y s. XV", "Lucanor · Manrique", "var(--red)"],
  ]),
  tarjetas: [
    ["Juglar", "Artista que recitaba y cantaba poemas en público a cambio de dinero o comida."],
    ["Cantar de gesta", "Poema épico que narra las hazañas de un héroe: el Cantar de mio Cid."],
    ["Cuaderna vía", "Estrofa de cuatro alejandrinos con una sola rima consonante (AAAA)."],
    ["El conde Lucanor", "Cuentos de don Juan Manuel en los que Patronio aconseja al conde con un ejemplo."],
    ["Jorge Manrique", "Autor de las Coplas por la muerte de su padre (siglo XV)."],
  ],
  familias: ["Leed juntos un cuento de El conde Lucanor y comentad su moraleja.", "Buscad en el mapa los lugares del destierro del Cid (Vivar, Burgos, Valencia).", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación literaria: lectura de obras y fragmentos de la literatura medieval en su contexto; mester de juglaría y de clerecía; prosa y lírica del siglo XV (RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Recitado juglaresco de un fragmento del Cid en grupos.", "Escribir un cuento con estructura de El conde Lucanor sobre un problema actual.", "Comparar las Coplas de Manrique con una canción actual sobre la pérdida."],
  },
  fuentes: [
    L.BOE,
    { t: "Biblioteca Virtual Miguel de Cervantes: Cantar de mio Cid", url: "https://www.cervantesvirtual.com/portales/cantar_de_mio_cid/" },
    { t: "Literatura medieval española, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Literatura_espa%C3%B1ola_de_la_Edad_Media" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 70,
  objetivos: ["Conocer el Libro de buen amor y el Romancero", "Comentar fragmentos medievales identificando sus rasgos"],
  bloques: [
    { tras: "El mester de juglaría", html: `<h3>Rasgos del Cantar de mio Cid</h3><p>El Cantar se conserva en un único manuscrito copiado por un tal Per Abbat. Tiene unos 3.700 versos anisosilábicos (de medida irregular), divididos en dos mitades o <b>hemistiquios</b> por una pausa, y agrupados en <b>tiradas</b> con la misma rima asonante. Como estaba pensado para ser recitado, el juglar usa recursos para captar la atención: <b>epítetos épicos</b> que se repiten («el que en buen hora nació», «el de la luenga barba»), llamadas al público («¡Oíd lo que dijo!») y fórmulas fijas.</p><p>A diferencia de otras epopeyas europeas, es bastante <mark>realista</mark>: los lugares existen, los personajes son históricos y el Cid es un héroe humano, buen padre, buen esposo y vasallo leal, que no hace milagros.</p>` },
    { tras: "El mester de clerecía", html: `<h3>Berceo y el Arcipreste de Hita</h3><p><b>Gonzalo de Berceo</b> vivió en el monasterio de San Millán de la Cogolla (La Rioja). En los <i>Milagros de Nuestra Señora</i> cuenta veinticinco historias en las que la Virgen ayuda a quienes la veneran. Escribe con un lenguaje sencillo, con comparaciones de la vida campesina, para que el pueblo lo entienda.</p><p>En el siglo XIV, <b>Juan Ruiz, Arcipreste de Hita</b>, escribe el <i>Libro de buen amor</i>, una obra muy variada que mezcla una falsa autobiografía amorosa con fábulas, sátiras, poemas religiosos y canciones. Dice que su intención es enseñar a evitar el «loco amor» (el amor carnal) y elegir el «buen amor» (el amor a Dios), pero lo hace con mucho humor e ironía. En él aparece <b>Trotaconventos</b>, una alcahueta que anticipa a la Celestina.</p>` },
    { tras: "La prosa y el siglo XV", html: `<h3>El conde Lucanor: la estructura de los ejemplos</h3><p><i>El conde Lucanor</i> contiene cincuenta y un cuentos o «ejemplos» con la <mark>misma estructura</mark>:</p><ol><li>El conde Lucanor plantea un <b>problema</b> a su consejero Patronio.</li><li>Patronio responde contando un <b>cuento</b> en el que pasa algo parecido.</li><li>Patronio aplica la enseñanza del cuento al <b>caso</b> del conde, que sigue el consejo y le va bien.</li><li>Don Juan Manuel cierra con una <b>moraleja</b> en verso.</li></ol><p>Algunos cuentos son muy conocidos, como el de <i>Lo que sucedió a un mozo que casó con una mujer muy fuerte y muy brava</i> (que inspiró <i>La fierecilla domada</i> de Shakespeare) o el de la lechera, doña Truhana.</p>` },
    { tras: "La prosa y el siglo XV", html: `<h3>El Romancero</h3><p>Los <b>romances</b> son poemas narrativos, generalmente anónimos, formados por una serie indefinida de <b>octosílabos</b> con rima asonante en los versos pares. Muchos nacieron de fragmentos de los cantares de gesta que el público pedía repetir y que se independizaron. Se transmitían oralmente, por eso existen muchas versiones de un mismo romance.</p><p>Sus temas son variados: <b>históricos</b> (sobre el Cid o la conquista de Granada), <b>fronterizos</b> (entre moros y cristianos), <b>novelescos</b> y <b>líricos</b> (el <i>Romance del conde Arnaldos</i>, el <i>Romance del prisionero</i>). Su estilo es dramático: empiezan <i>in medias res</i>, tienen mucho diálogo y a veces terminan de forma abrupta, dejando al oyente con la intriga.</p>` },
    { tras: "La prosa y el siglo XV", html: `<h3>Las Coplas de Jorge Manrique</h3><p>Jorge Manrique (1440-1479) fue un noble y soldado que murió en combate. Sus <i>Coplas por la muerte de su padre</i> son una <b>elegía</b> de cuarenta estrofas de <b>copla manriqueña</b> (versos de ocho y cuatro sílabas). En ellas reflexiona sobre tres grandes temas: la <mark>fugacidad de la vida</mark> («Nuestras vidas son los ríos / que van a dar en la mar, / que es el morir»), la muerte que iguala a todos, ricos y pobres, y la <mark>fama</mark> que sobrevive a la persona.</p><p>Distingue tres vidas: la terrenal, que se acaba; la de la fama, que dura más; y la eterna, que se gana con las buenas obras. Al final aparece la Muerte personificada, que habla con su padre, don Rodrigo, y este la acepta con serenidad.</p>` },
  ],
  videos: [
    ["El mester de juglaría", L.vid("cVZvYZnhcPE", "El Cantar del mio Cid: resumen animado de los tres cantares", "Seni Libros", 260642)],
    ["Las Coplas de Jorge Manrique", L.vid("5DeLxf8b-Rc", "Jorge Manrique: Coplas a la muerte de su padre con comentarios", "El Edén de los Cínicos", 121008)],
  ],
  ejemplos: [
    ["¿A qué escuela pertenece esta estrofa? «Yo, maestro Gonzalo de Berceo nomnado, / yendo en romería caecí en un prado / verde e bien sencido, de flores bien poblado, / logar cobdiciaduero pora omne cansado».", ["Cuatro versos de unas catorce sílabas, divididos en dos mitades.", "Una sola rima consonante en -ado: AAAA.", "El autor dice su nombre y es un clérigo."], "mester de clerecía, cuaderna vía (Berceo, Milagros de Nuestra Señora)."],
    ["Explica qué es un epíteto épico con un ejemplo del Cid.", ["Es una expresión que acompaña al nombre del héroe y destaca una cualidad.", "Se repite a lo largo del poema, lo que ayuda al juglar a recordar y al público a reconocer al personaje.", "Ejemplos: «el que en buen hora nació», «el de la luenga barba»."], "fórmula fija que caracteriza al héroe."],
    ["Comenta los versos «Nuestras vidas son los ríos / que van a dar en la mar, / que es el morir».", ["Hay una metáfora: la vida es un río y la muerte es el mar.", "Igual que todos los ríos acaban en el mar, todas las vidas acaban en la muerte.", "Tema: la fugacidad de la vida y la muerte igualadora."], "metáfora de la vida como río; tema de la fugacidad y la muerte."],
  ],
  errores: [
    "Pensar que los juglares escribían las obras: las recitaban, y casi siempre eran anónimas.",
    "Confundir juglaría (popular, oral, rima asonante) y clerecía (culta, escrita, cuaderna vía).",
    "Creer que el Cid del Cantar es un personaje inventado: está basado en Rodrigo Díaz de Vivar.",
    "Atribuir El conde Lucanor a Alfonso X: es de don Juan Manuel, su sobrino.",
    "Confundir el romance (poema en octosílabos) con las lenguas romances.",
  ],
  ejercicios: [
    ["Explica qué eran los tres estamentos medievales.", "Nobleza (guerreaba y gobernaba), clero (rezaba y conservaba la cultura) y pueblo llano (trabajaba)."],
    ["¿Qué son las jarchas?", "Breves canciones de amor en mozárabe que cerraban poemas árabes o hebreos (siglos XI-XII); son de lo más antiguo de la lírica romance peninsular."],
    ["Resume en tres frases el Cantar de mio Cid.", "El Cid es desterrado por el rey y pierde su honra. Gana batallas, conquista Valencia y casa a sus hijas con los infantes de Carrión. Tras la afrenta de Corpes, se hace justicia y sus hijas se casan con príncipes, con lo que su honra es mayor que nunca."],
    ["Escribe dos diferencias entre mester de juglaría y de clerecía.", "La juglaría era oral, anónima y popular, con métrica irregular; la clerecía era escrita, culta, de autor conocido y usaba la cuaderna vía."],
    ["¿Qué es el «buen amor» según el Arcipreste de Hita?", "El amor a Dios, frente al «loco amor» o amor carnal."],
    ["Describe la estructura de un ejemplo de El conde Lucanor.", "El conde plantea un problema, Patronio cuenta un cuento, lo aplica al caso y el autor cierra con una moraleja en verso."],
    ["¿Qué rasgos tiene un romance?", "Octosílabos con rima asonante en los pares, anónimo, de transmisión oral, con diálogo y comienzo in medias res."],
    ["Mide «Nuestras vidas son los ríos».", "Nues-tras-vi-das-son-los-rí-os: 8 sílabas, final llano: octosílabo."],
    ["¿Qué tres vidas distingue Manrique?", "La vida terrenal, la vida de la fama y la vida eterna."],
    ["Escribe una moraleja de dos versos al estilo de don Juan Manuel sobre un problema actual.", "Respuesta abierta. Ejemplo: «Quien todo lo cree en la red, / pronto en la trampa se ve»."],
  ],
  quiz: [
    ["Las mitades de un verso separadas por una pausa se llaman…", ["hemistiquios", "estrofas", "tiradas"], 0, "Típico del Cantar de mio Cid."],
    ["El Libro de buen amor es de…", ["Juan Ruiz, Arcipreste de Hita", "Berceo", "Manrique"], 0, "Siglo XIV."],
    ["El consejero del conde Lucanor es…", ["Patronio", "Per Abbat", "Trotaconventos"], 0, "Cuenta los ejemplos."],
    ["El Romancero está formado por…", ["octosílabos con rima asonante en los pares", "sonetos", "cuaderna vía"], 0, "Poemas narrativos populares."],
    ["En las Coplas, la mar simboliza…", ["la muerte", "el amor", "la guerra"], 0, "«…que es el morir»."],
  ],
  tarjetas: [
    ["Libro de buen amor", "Obra del Arcipreste de Hita (s. XIV) que mezcla autobiografía, fábulas y poemas, con humor."],
    ["Romance", "Poema narrativo anónimo de octosílabos con rima asonante en los pares."],
    ["Epíteto épico", "Fórmula que acompaña al héroe: «el que en buen hora nació»."],
  ],
});
