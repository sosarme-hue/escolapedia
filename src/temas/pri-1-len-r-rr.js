// Lengua Castellana 1º de Primaria: la r y la rr. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, parejas, fichas, charla, lista, mural, silabas: s, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "1-primaria",
  titulo: "La r y la rr",
  minutos: 20,
  objetivos: ["Distinguir el sonido suave y el sonido fuerte de la r", "Saber cuándo se escribe r y cuándo rr", "Leer y escribir palabras con r y rr"],
  claves: ["r suave", "r fuerte", "rr", "entre vocales", "al principio"],
  pregunta: {
    texto: "Di «pera» y luego «perra». ¿Suenan igual? ¿En qué se diferencian?",
    respuesta: "No suenan igual. En «pera» la r es <mark>suave</mark>. En «perra» la r es <mark>fuerte</mark> y se escribe con <b>dos erres</b>: rr.",
  },
  bloques: [
    {
      html: `<h3>Dos sonidos</h3><p>La letra <b>r</b> tiene <mark>dos sonidos</mark>: uno suave y otro fuerte.</p><p>En <i>pera</i>, la r suena <b>suave</b>, con un toquecito de lengua.</p><p>En <i>perro</i>, la r suena <b>fuerte</b>, como un motor: «rrrrr». La lengua vibra muchas veces. Prueba a decir las dos palabras y nota la diferencia.</p>`,
      svg: parejas("Pera con r suave y perro con r fuerte", [["pera", "pera", "perro", "perro"]], { izq: "r suave", der: "r fuerte", color: A, color2: R, flecha: "≠" }),
      video: vid("LJ7-REF1a9E", "Fonética para niños: el sonido /R/", "Smile and Learn - Español", 612579, 2376),
    },
    {
      html: `<h3>La r suave</h3><p>Cuando la r está <mark>entre dos vocales</mark> y es una sola, suena suave.</p><p><i>pe-<b>r</b>a</i>, <i>ca-<b>r</b>a</i>, <i>lo-<b>r</b>o</i>, <i>ma-<b>r</b>i-po-sa</i>.</p><p>La lengua da solo <b>un golpecito</b> arriba, detrás de los dientes. Es un sonido rápido y ligero, como una gota que cae.</p>`,
      svg: dibujos("Una pera, una cara y una mariposa: r suave entre vocales", [["pera", s("pe|ra", A, 1), K], ["cara_i", s("ca|ra", A, 1), K], ["mariposa", s("ma|ri|po|sa", A, 1), K]], { titulo: "r suave entre vocales" }),
    },
    {
      html: `<h3>La r fuerte al principio</h3><p>Si la r está <mark>al principio</mark> de la palabra, suena fuerte. ¡Pero se escribe con una sola r!</p><p><i><b>r</b>atón</i>, <i><b>r</b>osa</i>, <i><b>r</b>ueda</i>, <i><b>r</b>ana</i>.</p><p>Nunca escribimos «rratón». Al principio de la palabra, una r ya suena fuerte por sí sola.</p>`,
      svg: dibujos("Un ratón, una rosa y una rueda: r fuerte al principio con una sola r", [["raton", s("ra|tón", R), K], ["rosa", s("ro|sa", R), K], ["rueda", s("rue|da", R), K]], { titulo: "Al principio: una r fuerte" }),
    },
    {
      html: `<h3>La rr entre vocales</h3><p>¿Y si queremos el sonido fuerte <mark>entre dos vocales</mark>? Entonces escribimos <b>rr</b>, dos erres juntas.</p><p><i>pe-<b>rr</b>o</i>, <i>to-<b>rr</b>e</i>, <i>bu-<b>rr</b>o</i>, <i>ca-<b>rr</b>o</i>.</p><p>La doble r solo va <b>en medio</b> de la palabra. Nunca va al principio ni al final.</p>`,
      svg: dibujos("Un perro, una torre y un burro: rr entre vocales", [["perro", s("pe|rro", R, 1), K], ["torre", s("to|rre", R, 1), K], ["burro", s("bu|rro", R, 1), K]], { titulo: "rr entre vocales: fuerte" }),
      video: vid("gaSyW9qb3Us", "Aprende la letra R con el rap del rino Rufino", "Smile and Learn - Español", 3058082),
    },
    {
      html: `<h3>Una letra cambia la palabra</h3><p>Hay parejas de palabras que solo se diferencian en <mark>r o rr</mark>.</p><p><i>pero</i> y <i>perro</i>. <i>caro</i> y <i>carro</i>. <i>coro</i> y <i>corro</i>.</p><p>¡Significan cosas muy distintas! Por eso hay que escuchar bien y escribir con cuidado. Una letra de más o de menos cambia todo.</p>`,
      svg: parejas("Pero y perro, caro y carro, coro y corro", [[null, "pero", null, "perro"], [null, "caro", null, "carro"], [null, "coro", null, "corro"]], { izq: "r suave", der: "rr fuerte", color: A, color2: R, flecha: "≠" }),
    },
    {
      html: `<h3>La r al final de la sílaba</h3><p>A veces la r cierra una sílaba: <i>ma<b>r</b></i>, <i>flo<b>r</b></i>, <i>ba<b>r</b>-co</i>, <i>co-me<b>r</b></i>.</p><p>Ahí suena <mark>suave</mark> y se escribe con una sola r.</p><p>Muchas acciones terminan así: <i>cantar</i>, <i>saltar</i>, <i>dormir</i>. ¡Fíjate en cuántas palabras acaban en r!</p>`,
      svg: dibujos("Una flor, un barco y pan para comer: r al final de sílaba", [["flor", s("flo|r", A, 1), K], ["barco", s("ba|r|co", A, 1), K], ["pan", s("come|r", A, 1), K]], { titulo: "r al final de la sílaba" }),
    },
    {
      html: `<h3>Las reglas en resumen</h3><p>Vamos a juntar todo lo que hemos aprendido.</p><p>Al <b>principio</b>: una r que suena fuerte. <b>Entre vocales</b>: r suave o rr fuerte. Al <b>final</b> de sílaba: una r suave.</p><p>Si dudas, di la palabra en voz alta. ¿La lengua vibra mucho? Entonces es fuerte. ¿Da un toquecito? Es suave.</p>`,
      svg: lista("Resumen: al principio r fuerte, entre vocales r suave o rr fuerte, al final r suave", [["Al principio: r fuerte", R], ["En medio: r suave o rr", A], ["Al final: r suave", V]], { titulo: "Resumen de la r", marca: "n" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Pronunciar y escribir bien la r nos ayuda a que <mark>nos entiendan</mark>.</p><p>No es lo mismo «el perro es caro» que «el pero es carro». ¡No tiene sentido!</p><p>Además, la rr fuerte es divertida de practicar. Hay un trabalenguas famoso para entrenar la lengua. Lo puedes leer en el siguiente bloque.</p>`,
      svg: dibujos("Un perro y un carro: escribir bien la rr cambia el significado", [["perro", "perro", R], ["coche", "carro", R], ["pera", "pera", A]], { titulo: "Escribir bien para entendernos" }),
    },
    {
      html: `<h3>Jugamos con un trabalenguas</h3><p>Lee despacio y luego cada vez más rápido:</p><p>«<mark>Erre con erre, guitarra; erre con erre, barril. Rápido ruedan los carros cargados de azúcar del ferrocarril</mark>».</p><p>¿Cuántas rr has encontrado? Decidlo por turnos. Gana quien lo dice más rápido sin trabarse. Si os trabáis, ¡a reír y a empezar otra vez!</p>`,
      svg: charla("Dos niños dicen un trabalenguas con rr", [["nino", "Erre con erre, guitarra…", A], ["nina", "Erre con erre, barril…", R], ["nino", "¡Rápido ruedan los carros!", A]]),
    },
  ],
  figura: {
    titulo: "R suave, r fuerte y rr",
    svg: mural("Cuatro casos: pera con r suave, ratón con r fuerte al principio, perro con rr y flor con r al final", [["pera", "pera", "r suave en medio", A], ["raton", "ratón", "r fuerte al principio", R], ["perro", "perro", "rr fuerte en medio", R], ["flor", "flor", "r suave al final", A]], "Cuándo escribimos r y cuándo rr"),
  },
  video: { ...vid("7RonNmMPLP4", "La letra R: capítulo especial de El Mono Sílabo", "lunacreciente", 13737575), busqueda: "la r y la rr para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Se escribe «rrueda» o «rueda»?",
      pasos: ["Mira dónde está el sonido fuerte: al principio.", "Al principio de palabra, la r ya suena fuerte.", "Se escribe con una sola r."],
      resultado: "se escribe «rueda»." },
    { enunciado: "¿Se escribe «guitara» o «guitarra»?",
      pasos: ["Di la palabra: gui-ta-rra. La r suena fuerte.", "Está entre dos vocales: a y a.", "Fuerte entre vocales se escribe rr."],
      resultado: "se escribe «guitarra»." },
    { enunciado: "¿«Loro» lleva r o rr?",
      pasos: ["Di la palabra: lo-ro.", "La lengua da un solo toquecito: suena suave.", "Suave entre vocales: una r."],
      resultado: "«loro» se escribe con una r." },
  ],
  errores: [
    "Escribir rr al principio, como «rratón»: al principio basta una r.",
    "Escribir una r cuando suena fuerte entre vocales, como «pero» por «perro».",
    "Escribir rr al final de una palabra, como «florr»: al final va una sola r.",
    "Confundir parejas como caro y carro: escucha bien si suena suave o fuerte.",
  ],
  ejercicios: [
    { q: "¿Suave o fuerte? «pera».", sol: "Suave." },
    { q: "¿Suave o fuerte? «perro».", sol: "Fuerte." },
    { q: "Completa con r o rr: __atón.", sol: "Ratón (una r al principio)." },
    { q: "Completa con r o rr: to__e.", sol: "Torre." },
    { q: "Completa con r o rr: lo__o.", sol: "Loro." },
    { q: "Completa con r o rr: bu__o.", sol: "Burro." },
    { q: "Di dos palabras que empiecen por r.", sol: "Por ejemplo: rosa, rana, ratón, rueda." },
    { q: "¿Qué significa «caro»? ¿Y «carro»?", sol: "Caro: que cuesta mucho dinero. Carro: un vehículo con ruedas." },
    { q: "Di tres acciones que acaben en r.", sol: "Por ejemplo: cantar, comer, dormir." },
    { q: "Di el trabalenguas «Erre con erre» sin trabarte.", sol: "«Erre con erre, guitarra; erre con erre, barril…»." },
  ],
  quiz: [
    { q: "¿Cómo se escribe?", o: ["rratón", "ratón", "ratónn"], a: 1, e: "Al principio, una r." },
    { q: "¿Cómo se escribe?", o: ["pero (el animal)", "perro", "rrero"], a: 1, e: "Fuerte entre vocales: rr." },
    { q: "En «pera», la r suena…", o: ["suave", "fuerte", "no suena"], a: 0, e: "Una r entre vocales es suave." },
    { q: "¿Dónde nunca va la rr?", o: ["En medio", "Al principio", "Entre vocales"], a: 1, e: "Nunca al principio." },
    { q: "¿Cómo se escribe?", o: ["tore", "torre", "torrre"], a: 1, e: "to-rre." },
    { q: "¿Cuál suena fuerte?", o: ["loro", "rosa", "cara"], a: 1, e: "rosa: r al principio." },
    { q: "«Flor» termina en…", o: ["r", "rr", "re"], a: 0, e: "Al final va una r." },
    { q: "«Carro» es…", o: ["algo que cuesta mucho", "un vehículo con ruedas", "un color"], a: 1, e: "Carro es un vehículo." },
    { q: "¿Cómo se escribe?", o: ["guitarra", "guitara", "gitara"], a: 0, e: "gui-ta-rra." },
    { q: "La rr tiene…", o: ["una r", "dos r", "tres r"], a: 1, e: "Dos erres juntas." },
  ],
  examen: [
    { q: "¿Cómo se escribe?", o: ["rrosa", "rosa", "roza"], a: 1, e: "Una r al principio." },
    { q: "¿Cómo se escribe?", o: ["buro", "burro", "burrro"], a: 1, e: "Fuerte entre vocales: rr." },
    { q: "En «mariposa», la r suena…", o: ["suave", "fuerte", "como la l"], a: 0, e: "ma-ri-po-sa: suave." },
    { q: "¿Qué pareja cambia de significado?", o: ["pero y perro", "rosa y rosas", "rana y ranas"], a: 0, e: "Pero y perro son palabras distintas." },
  ],
  feynman: ["Qué diferencia hay entre la r suave y la fuerte", "Cuándo escribimos rr", "Por qué al principio de palabra basta una r"],
  mapa: mapa("LA R Y LA RR", "var(--pri)", [
    ["Al principio", "una r fuerte: ratón", R],
    ["Entre vocales", "r suave: pera", A],
    ["rr", "fuerte en medio: perro", V],
    ["Al final", "r suave: flor", N],
  ], 220),
  tarjetas: [
    ["¿Cuántos sonidos tiene la r?", "Dos: suave y fuerte"],
    ["¿Cómo suena la r de «pera»?", "Suave"],
    ["¿Cómo suena la r de «ratón»?", "Fuerte"],
    ["¿Cuándo escribimos rr?", "Sonido fuerte entre vocales"],
    ["¿Va rr al principio?", "Nunca"],
    ["Escribe bien «rrana»", "Rana"],
    ["Escribe bien «tore»", "Torre"],
    ["¿Qué diferencia hay entre caro y carro?", "Caro cuesta mucho; carro es un vehículo"],
  ],
  familias: [
    "Practicad trabalenguas con rr en casa: es un juego que entrena la lengua.",
    "Imitad el ruido de un motor «rrrr» para practicar la r fuerte.",
    "Buscad parejas que cambian: pero y perro, caro y carro.",
    "Si a vuestro hijo o hija aún le cuesta pronunciar la rr, es normal a esta edad; si persiste, comentadlo con el colegio.",
  ],
  profesores: PROF("Ortografía natural y conciencia fonológica: la vibrante simple y la múltiple, uso de r inicial, r y rr intervocálicas y r en final de sílaba", ["Clasificar dibujos en r suave y r fuerte.", "Trabalenguas con rr en voz alta y por parejas.", "Pares mínimos (pero/perro, caro/carro) con tarjetas."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
