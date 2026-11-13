// Lengua Castellana 2º de Primaria: la r y la rr, mp y mb. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, frase, charla, lista, mural, silabas: s } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "2-primaria",
  titulo: "La r y la rr, mp y mb",
  minutos: 25,
  objetivos: ["Distinguir el sonido suave y el sonido fuerte de la r", "Saber cuándo se escribe r y cuándo rr", "Escribir siempre m antes de p y de b"],
  claves: ["r suave", "r fuerte", "rr", "mp", "mb"],
  pregunta: {
    texto: "Di «pero» y luego «perro». ¿Suenan igual? ¿Qué cambia?",
    respuesta: "En <b>pero</b> la r suena <mark>suave</mark>. En <b>perro</b> suena <mark>fuerte</mark>, vibra más. Por eso <i>perro</i> se escribe con <b>rr</b>.",
  },
  bloques: [
    {
      html: `<h3>La r suave</h3><p>La <b>r</b> tiene un <mark>sonido suave</mark> cuando va entre vocales: <i>pe<b>r</b>a</i>, <i>lo<b>r</b>o</i>, <i>ca<b>r</b>a</i>.</p><p>También suena suave al final de sílaba: <i>ma<b>r</b></i>, <i>flo<b>r</b></i>, <i>ca<b>r</b>ta</i>.</p><p>Y detrás de otra consonante en la misma sílaba: <i><b>tr</b>en</i>, <i><b>br</b>azo</i>, <i><b>pr</b>imo</i>. ¡La lengua da un golpecito rápido!</p>`,
      svg: dibujos("Pera, flor y tren con r suave", [["pera", s("pe|r|a", Ve, 1), K], ["flor", s("flo|r", Ve, 1), K], ["tren", s("t|r|en", Ve, 1), K]], { titulo: "r suave", nota: "pera · flor · tren" }),
    },
    {
      html: `<h3>La r fuerte</h3><p>La <b>r</b> suena <mark>fuerte</mark> en otros sitios. La lengua vibra como un motor: «rrrr».</p><p>Al <b>empezar</b> una palabra: <i><b>r</b>atón</i>, <i><b>r</b>ueda</i>, <i><b>r</b>osa</i>.</p><p>Y después de <b>n</b>, <b>l</b> o <b>s</b>: <i>hon<b>r</b>a</i>, <i>al<b>r</b>ededor</i>, <i>Is<b>r</b>ael</i>. En estos casos se escribe una sola r, ¡aunque suene fuerte!</p>`,
      svg: dibujos("Ratón, rueda y rosa empiezan con r fuerte", [["raton", s("r|atón", R), K], ["rueda", s("r|ueda", R), K], ["rosa", s("r|osa", R), K]], { titulo: "r fuerte al empezar", nota: "Una sola r: ratón, rueda, rosa" }),
      video: V("rrB"),
    },
    {
      html: `<h3>La rr</h3><p>Cuando el sonido fuerte va <mark>entre dos vocales</mark>, escribimos <b>rr</b>.</p><p><i>pe<b>rr</b>o</i>, <i>go<b>rr</b>o</i>, <i>ca<b>rr</b>o</i>, <i>to<b>rr</b>e</i>, <i>guita<b>rr</b>a</i>.</p><p>La rr <b>nunca</b> va al principio de una palabra ni al final. Siempre está entre vocales. ¡Es como un sonido doble que necesita dos letras!</p>`,
      svg: dibujos("Perro, gorro y torre con rr entre vocales", [["perro", s("pe|rr|o", R, 1), K], ["gorro", s("go|rr|o", R, 1), K], ["torre", s("to|rr|e", R, 1), K]], { titulo: "rr entre vocales", nota: "perro · gorro · torre" }),
    },
    {
      html: `<h3>Una letra cambia todo</h3><p>Hay parejas de palabras que solo se diferencian en <mark>r o rr</mark>. ¡Y significan cosas distintas!</p><p><i>pero</i> y <i>pe<b>rr</b>o</i>. <i>caro</i> y <i>ca<b>rr</b>o</i>. <i>coro</i> y <i>co<b>rr</b>o</i>. <i>para</i> y <i>pa<b>rr</b>a</i>.</p><p>Por eso hay que escuchar bien y escribir con cuidado. Un perro no es lo mismo que un pero.</p>`,
      svg: frase("Pero y perro; caro y carro; coro y corro", [["pero", Ve], ["perro", R], ["/"], ["caro", Ve], ["carro", R], ["/"], ["coro", Ve], ["corro", R]], { titulo: "r o rr", nota: "Verde: suave · rojo: fuerte", fs: 22 }),
    },
    {
      html: `<h3>Separar la rr</h3><p>La <b>rr</b> va <mark>siempre junta</mark>. Al separar en sílabas no la partimos.</p><p><i>pe-<b>rr</b>o</i>, <i>to-<b>rr</b>e</i>, <i>ca-<b>rr</b>e-te-ra</i>.</p><p>Si al final de una línea partes la palabra, la rr baja entera a la línea siguiente: <i>ca-</i> / <i>rretera</i>. ¡Nunca <i>car-</i> / <i>retera</i>!</p>`,
      svg: fichas("Carretera separada en sílabas: ca, rre, te, ra", [["ca", A], ["rre", R], ["te", A], ["ra", A]], { titulo: "ca-rre-te-ra", nota: "La rr nunca se separa", grande: true }),
    },
    {
      html: `<h3>m antes de p</h3><p>Ahora una regla muy fácil: antes de <b>p</b> siempre se escribe <mark>m</mark>, nunca n.</p><p><i>ca<b>mp</b>o</i>, <i>la<b>mp</b>ara</i>, <i>tro<b>mp</b>a</i>, <i>co<b>mp</b>rar</i>, <i>tie<b>mp</b>o</i>.</p><p>Escucha: al decir «mp» juntas los labios dos veces seguidas. ¡La m y la p son amigas de labios!</p>`,
      svg: dibujos("Campo, lámpara y trompa con mp", [["arbol", s("ca|mp|o", A, 1), K], ["sol", s("lá|mp|ara", A, 1), K], ["elefante", s("tro|mp|a", A, 1), K]], { titulo: "m antes de p", nota: "campo · lámpara · trompa" }),
      video: V("rrV", "m antes de p y b para niños"),
    },
    {
      html: `<h3>m antes de b</h3><p>Antes de <b>b</b> también se escribe <mark>m</mark>.</p><p><i>ta<b>mb</b>or</i>, <i>so<b>mb</b>rero</i>, <i>ho<b>mb</b>re</i>, <i>ca<b>mb</b>iar</i>, <i>no<b>mb</b>re</i>.</p><p>Recuerda la frase: «<b>Antes de p y b, siempre m</b>». En cambio, antes de v se escribe n: <i>e<b>nv</b>iar</i>, <i>i<b>nv</b>ierno</i>.</p>`,
      svg: frase("Tambor, sombrero, hombre; antes de p y b siempre m", [["tambor", A], ["sombrero", A], ["/"], ["hombre", A], ["nombre", A]], { titulo: "m antes de b", nota: "Antes de p y b, siempre m", fs: 22 }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Estas reglas nos ayudan a <mark>escribir sin faltas</mark> palabras que usamos mucho.</p><p>En una carta al abuelo pondrás: «Fuimos al ca<b>mp</b>o con el pe<b>rr</b>o y vimos una to<b>rr</b>e».</p><p>Además, la r fuerte bien dicha ayuda a que te entiendan: ¡no es lo mismo comprar un carro que algo caro!</p>`,
      svg: charla("La niña pregunta cómo se escribe campo; el niño dice con m, porque va antes de p", [["nina", "¿Campo, con n o m?", R], ["nino", "Con m: va antes de p.", A], ["nina", "¿Y perro?", R], ["nino", "Con rr: entre vocales.", A]]),
    },
    {
      html: `<h3>Juego: el motor y la gota</h3><p>Un adulto dice palabras. Si la r suena <mark>fuerte</mark>, haz ruido de motor: «¡rrrrr!». Si suena <mark>suave</mark>, haz «plic», como una gota.</p><p>Probad: <i>rosa</i>, <i>pera</i>, <i>perro</i>, <i>loro</i>, <i>ratón</i>, <i>carro</i>.</p><p>Después, escribid las palabras de motor: ¿con r o con rr?</p>`,
      svg: lista("Juego: rosa motor, pera gota, perro motor, loro gota", [["rosa: ¡rrrr! (r)", R], ["pera: plic", Ve], ["perro: ¡rrrr! (rr)", R], ["loro: plic", Ve]], { titulo: "¿Motor o gota?", marca: "n" }),
    },
  ],
  figura: {
    titulo: "La r y la rr, mp y mb",
    svg: mural("R suave entre vocales, r fuerte al empezar, rr fuerte entre vocales, m antes de p y b", [["pera", "pera", "r suave", Ve], ["raton", "ratón", "r fuerte al empezar", R], ["perro", "perro", "rr entre vocales", N], ["campana", "campana", "m antes de p y b", A]], "Escucha bien: suave o fuerte; y antes de p y b, siempre m"),
  },
  video: V("rrV", "m antes de p y b para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿«Garrafa» o «garafa»?",
      pasos: ["Di la palabra: ga-rra-fa.", "La r suena fuerte.", "Está entre dos vocales (a y a)."],
      resultado: "garrafa, con rr." },
    { enunciado: "¿«Rueda» o «rrueda»?",
      pasos: ["La r suena fuerte.", "Pero está al principio de la palabra.", "Al principio siempre una sola r."],
      resultado: "rueda." },
    { enunciado: "Completa: ca__iar (m / n).",
      pasos: ["La letra que viene después es b.", "Antes de b siempre m.", "ca + m + biar."],
      resultado: "cambiar." },
  ],
  errores: [
    "Escribir rr al principio de palabra: es «ratón», no «rratón».",
    "Escribir r cuando suena fuerte entre vocales: es «perro», no «pero».",
    "Escribir n antes de p o b: es «campo» y «tambor», no «canpo» ni «tanbor».",
    "Separar la rr al partir en sílabas: es pe-rro, no per-ro.",
  ],
  ejercicios: [
    { q: "¿Suave o fuerte? «loro».", sol: "Suave." },
    { q: "¿Suave o fuerte? «ratón».", sol: "Fuerte, con una r porque va al principio." },
    { q: "Completa: pe__o (el animal).", sol: "perro." },
    { q: "Completa: to__e (r / rr).", sol: "torre." },
    { q: "Completa: __osa (r / rr).", sol: "rosa." },
    { q: "Completa: ca__po (m / n).", sol: "campo." },
    { q: "Completa: so__brero (m / n).", sol: "sombrero." },
    { q: "Separa en sílabas «carretera».", sol: "ca-rre-te-ra." },
    { q: "Escribe dos palabras con mb.", sol: "Por ejemplo: tambor, hombre, nombre, cambio." },
    { q: "Escribe dos palabras con rr.", sol: "Por ejemplo: perro, gorro, torre, carro." },
  ],
  quiz: [
    { q: "¿Cuál está bien escrita?", o: ["rratón", "ratón", "raton"], a: 1, e: "Al principio, una r." },
    { q: "¿Cuál está bien escrita?", o: ["perro", "pero (el animal)", "perrro"], a: 0, e: "Fuerte entre vocales: rr." },
    { q: "La rr va siempre…", o: ["entre vocales", "al principio", "al final"], a: 0, e: "Entre vocales." },
    { q: "En «pera», la r suena…", o: ["suave", "fuerte", "no suena"], a: 0, e: "Suave." },
    { q: "Antes de p y b se escribe…", o: ["n", "m", "ñ"], a: 1, e: "Siempre m." },
    { q: "¿Cuál está bien escrita?", o: ["canpo", "campo", "cango"], a: 1, e: "m antes de p." },
    { q: "¿Cuál está bien escrita?", o: ["tambor", "tanbor", "tanvor"], a: 0, e: "m antes de b." },
    { q: "¿Cómo se separa «torre»?", o: ["tor-re", "to-rre", "torr-e"], a: 1, e: "La rr no se separa." },
    { q: "«Caro» y «carro»…", o: ["significan lo mismo", "son distintos", "no existen"], a: 1, e: "Una letra cambia todo." },
    { q: "Antes de v se escribe…", o: ["m", "n", "rr"], a: 1, e: "enviar, invierno." },
  ],
  examen: [
    { q: "Completa: go__o", o: ["r", "rr"], a: 1, e: "gorro." },
    { q: "Completa: hó__bro (m / n)", o: ["m", "n"], a: 0, e: "hombro." },
    { q: "En «rosa», la r suena…", o: ["fuerte", "suave"], a: 0, e: "Fuerte al empezar." },
    { q: "¿Cuál está bien?", o: ["lánpara", "lámpara", "lámbara"], a: 1, e: "m antes de p." },
  ],
  feynman: ["Cuándo suena suave y cuándo fuerte la r", "Cuándo se escribe rr", "Qué letra va antes de p y de b"],
  mapa: mapa("R, RR, MP, MB", "var(--pri)", [
    ["r suave", "pera, flor, tren", Ve],
    ["r fuerte", "al empezar: ratón", R],
    ["rr", "fuerte entre vocales: perro", N],
    ["mp, mb", "campo, tambor", A],
  ], 230),
  tarjetas: [
    ["¿Cuándo se escribe rr?", "Sonido fuerte entre vocales"],
    ["¿Al principio de palabra?", "Una sola r"],
    ["¿Suena fuerte «ratón»?", "Sí, con una r"],
    ["Escribe: pe_o (animal)", "perro"],
    ["Antes de p y b…", "siempre m"],
    ["Escribe: ca_po", "campo"],
    ["Escribe: ta_bor", "tambor"],
    ["¿Se separa la rr?", "No: pe-rro"],
  ],
  familias: [
    "Jugad al motor y la gota con palabras de casa.",
    "Repetid trabalenguas con r: «Erre con erre, cigarro…».",
    "Buscad en la cocina palabras con mp y mb: lámpara, cambio, hambre.",
    "Dictadle frases cortas con perro, torre, campo y tambor.",
  ],
  profesores: PROF("Ortografía: sonidos de la r, uso de r y rr según la posición, y escritura de m antes de p y b", ["Trabalenguas de la r para trabajar la vibrante.", "Pares mínimos (pero/perro, caro/carro) con dibujos.", "Cartel de la regla «antes de p y b, siempre m»."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
