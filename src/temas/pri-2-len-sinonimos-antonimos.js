// Lengua Castellana 2º de Primaria: sinónimos y antónimos. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, parejas } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "2-primaria",
  titulo: "Sinónimos y antónimos",
  minutos: 25,
  objetivos: ["Reconocer sinónimos y usarlos para no repetir palabras", "Formar antónimos con palabras distintas y con des- o in-", "Elegir el sinónimo que encaja en cada frase"],
  claves: ["sinónimo", "antónimo", "contrario", "prefijo des-", "prefijo in-"],
  pregunta: {
    texto: "¿Cómo dirías «el examen fue fácil» con otra palabra? ¿Y qué palabra dice lo contrario de «fácil»?",
    respuesta: "Puedes decir «el examen fue <b>sencillo</b>»: es un <mark>sinónimo</mark>. Lo contrario es <b>difícil</b>: es un <mark>antónimo</mark>.",
  },
  bloques: [
    {
      html: `<h3>Recordamos: sinónimos</h3><p>Los <mark>sinónimos</mark> son palabras que significan <b>lo mismo o casi lo mismo</b>.</p><p><i>Fácil</i> y <i>sencillo</i>. <i>Hablar</i> y <i>charlar</i>. <i>Empezar</i> y <i>comenzar</i>.</p><p>Si cambias una por otra, la frase sigue diciendo lo mismo: «Empieza la función» o «Comienza la función».</p><p>Otros sinónimos: <i>mirar</i> y <i>observar</i>, <i>bonito</i> y <i>lindo</i>, <i>enfadado</i> y <i>enojado</i>.</p>`,
      svg: parejas("Fácil igual a sencillo; hablar igual a charlar; empezar igual a comenzar", [[null, "fácil", null, "sencillo"], [null, "hablar", null, "charlar"], [null, "empezar", null, "comenzar"]], { izq: "palabra", der: "sinónimo", color: A, color2: Ve, flecha: "=" }),
      video: V("sinB"),
    },
    {
      html: `<h3>Sinónimos para escribir mejor</h3><p>Cuando repetimos mucho una palabra, el texto <mark>aburre</mark>.</p><p>«Fuimos a una casa <b>grande</b>. Tenía un jardín <b>grande</b> y una piscina <b>grande</b>.»</p><p>Con sinónimos suena mucho mejor: «una casa <b>grande</b>, un jardín <b>enorme</b> y una piscina <b>gigante</b>». ¡Los escritores siempre buscan palabras amigas!</p>`,
      svg: frase("Grande, enorme, gigante en lugar de repetir grande", [["casa grande", A], ["/"], ["jardín enorme", Ve], ["/"], ["piscina gigante", N]], { nota: "grande = enorme = gigante", fs: 22 }),
    },
    {
      html: `<h3>El sinónimo que encaja</h3><p>No todos los sinónimos sirven <mark>en todas las frases</mark>.</p><p><i>Viejo</i> y <i>antiguo</i> son sinónimos. Decimos «un castillo <b>antiguo</b>», pero de una persona decimos «un señor <b>mayor</b>», que es más amable.</p><p>Elige siempre el sinónimo que <b>suena bien</b> en tu frase. Léela en voz alta para comprobarlo.</p>`,
      svg: lista("Castillo antiguo; señor mayor; coche viejo", [["un castillo antiguo", A], ["un señor mayor", Ve], ["un coche viejo", N]], { titulo: "Cada uno en su sitio", marca: "✓" }),
    },
    {
      html: `<h3>Recordamos: antónimos</h3><p>Los <mark>antónimos</mark> son palabras que significan <b>lo contrario</b>.</p><p><i>Fácil</i> y <i>difícil</i>. <i>Limpio</i> y <i>sucio</i>. <i>Encender</i> y <i>apagar</i>. <i>Ganar</i> y <i>perder</i>.</p><p>Nos ayudan a <b>comparar</b>: «Mi habitación estaba sucia y ahora está limpia».</p><p>Más contrarios: <i>entrar</i> y <i>salir</i>, <i>dentro</i> y <i>fuera</i>, <i>mucho</i> y <i>poco</i>.</p>`,
      svg: parejas("Fácil y difícil; limpio y sucio; ganar y perder", [[null, "fácil", null, "difícil"], [null, "limpio", null, "sucio"], [null, "ganar", null, "perder"]], { izq: "palabra", der: "antónimo", color: A, color2: R, flecha: "↔" }),
      video: V("sinV", "antónimos para niños"),
    },
    {
      html: `<h3>Antónimos con des-</h3><p>Algunos antónimos se forman poniendo <mark>des-</mark> delante.</p><p><i>hacer → <b>des</b>hacer</i>, <i>abrochar → <b>des</b>abrochar</i>, <i>ordenado → <b>des</b>ordenado</i>, <i>conocido → <b>des</b>conocido</i>.</p><p>Ese trocito que va delante se llama <b>prefijo</b>. Des- le da la vuelta a la palabra, como un calcetín.</p>`,
      svg: parejas("Hacer deshacer; ordenado desordenado; conocido desconocido", [[null, "hacer", null, "deshacer"], [null, "ordenado", null, "desordenado"], [null, "atar", null, "desatar"]], { izq: "palabra", der: "con des-", color: A, color2: R, flecha: "→" }),
    },
    {
      html: `<h3>Antónimos con in- e im-</h3><p>Otro prefijo para hacer contrarios es <mark>in-</mark>.</p><p><i>útil → <b>in</b>útil</i>, <i>feliz → <b>in</b>feliz</i>, <i>visible → <b>in</b>visible</i>.</p><p>Delante de <b>p</b> o <b>b</b> se escribe <mark>im-</mark>: <i>posible → <b>im</b>posible</i>, <i>paciente → <b>im</b>paciente</i>. ¡Como siempre: m antes de p y b!</p>`,
      svg: parejas("Útil inútil; visible invisible; posible imposible", [[null, "útil", null, "inútil"], [null, "visible", null, "invisible"], [null, "posible", null, "imposible"]], { izq: "palabra", der: "in- / im-", color: A, color2: R, flecha: "→" }),
    },
    {
      html: `<h3>¿Sinónimo o antónimo?</h3><p>Para saberlo, pregúntate: <mark>¿dicen lo mismo o lo contrario?</mark></p><p><i>Rápido</i> y <i>veloz</i> dicen lo mismo: <b>sinónimos</b>. <i>Rápido</i> y <i>lento</i> dicen lo contrario: <b>antónimos</b>.</p><p>Usa los signos: <b>=</b> para sinónimos y <b>↔</b> para antónimos. ¡Así los ordenas en tu cuaderno!</p><p>Prueba: <i>alegre</i> y <i>triste</i>. ¿Qué signo pones?</p>`,
      svg: dibujos("Coche rápido igual a veloz; tortuga lenta, contrario de rápido", [["coche", "rápido = veloz", Ve], ["tortuga", "rápido ↔ lento", R]], { titulo: "¿Lo mismo o lo contrario?", nota: "= sinónimos · ↔ antónimos" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Con sinónimos <mark>explicamos palabras</mark> difíciles: «<i>veloz</i> quiere decir rápido».</p><p>Con antónimos <mark>describimos diferencias</mark>: «El elefante es pesado y la pluma es ligera».</p><p>Además, sirven para inventar adivinanzas, chistes y poemas. ¡Cuantas más palabras conoces, mejor te expresas!</p>`,
      svg: charla("La niña pregunta qué es veloz; el niño dice rápido, lo contrario de lento", [["nina", "¿Qué es «veloz»?", R], ["nino", "Muy rápido.", A], ["nina", "¿Y su contrario?", R], ["nino", "¡Lento!", A]]),
    },
    {
      html: `<h3>Juego: el dado de palabras</h3><p>Escribid palabras en tarjetas: <i>alegre</i>, <i>alto</i>, <i>abrir</i>, <i>limpio</i>, <i>posible</i>…</p><p>Tirad un dado. Si sale <b>par</b>, di un <mark>sinónimo</mark>. Si sale <b>impar</b>, di un <mark>antónimo</mark>.</p><p>«Alegre» con un 3: ¡triste! «Alegre» con un 4: ¡contento! Un punto por cada acierto.</p>`,
      svg: lista("Dado par: sinónimo, alegre igual a contento; impar: antónimo, alegre contrario de triste", [["Par → sinónimo", Ve], ["alegre = contento", Ve], ["Impar → antónimo", R], ["alegre ↔ triste", R]], { titulo: "El dado de palabras", marca: "n" }),
    },
  ],
  figura: {
    titulo: "Sinónimos y antónimos",
    svg: mural("Sinónimos como fácil y sencillo; antónimos como fácil y difícil; con des- e in-", [["coche", "rápido = veloz", "sinónimos: lo mismo", Ve], ["tortuga", "rápido ↔ lento", "antónimos: lo contrario", R], [null, "des-", "hacer ↔ deshacer", A], [null, "in- / im-", "posible ↔ imposible", N]], "Sinónimos para no repetir; antónimos para comparar"),
  },
  video: V("sinV", "antónimos para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Cambia la palabra repetida: «El perro es bonito y su casa es bonita».",
      pasos: ["La palabra repetida es bonito.", "Busca un sinónimo: precioso, lindo.", "Cambia la segunda."],
      resultado: "El perro es bonito y su casa es preciosa." },
    { enunciado: "Forma el antónimo de «obedecer».",
      pasos: ["¿Se puede añadir des-?", "des + obedecer.", "Desobedecer: no hacer caso."],
      resultado: "desobedecer." },
    { enunciado: "¿Inposible o imposible?",
      pasos: ["La palabra es posible: empieza por p.", "Delante de p se escribe m.", "im + posible."],
      resultado: "imposible." },
  ],
  errores: [
    "Confundir sinónimo (lo mismo) con antónimo (lo contrario).",
    "Usar un sinónimo que no encaja en la frase: un señor «antiguo» suena mal.",
    "Escribir «inposible»: delante de p y b se escribe im-.",
    "Poner des- a cualquier palabra: «descomer» no existe.",
  ],
  ejercicios: [
    { q: "Sinónimo de «comenzar».", sol: "empezar." },
    { q: "Sinónimo de «contento».", sol: "alegre, feliz." },
    { q: "Antónimo de «limpio».", sol: "sucio." },
    { q: "Antónimo de «encender».", sol: "apagar." },
    { q: "Antónimo con des- de «ordenar».", sol: "desordenar." },
    { q: "Antónimo con in- de «útil».", sol: "inútil." },
    { q: "Antónimo de «paciente».", sol: "impaciente." },
    { q: "¿Sinónimos o antónimos? «rápido» y «veloz».", sol: "Sinónimos." },
    { q: "¿Sinónimos o antónimos? «ganar» y «perder».", sol: "Antónimos." },
    { q: "Cambia «grande» por un sinónimo: «Vi un barco grande».", sol: "Vi un barco enorme (o gigante)." },
  ],
  quiz: [
    { q: "Los sinónimos significan…", o: ["lo mismo", "lo contrario", "nada"], a: 0, e: "Lo mismo o casi." },
    { q: "Sinónimo de «fácil»:", o: ["difícil", "sencillo", "lento"], a: 1, e: "sencillo." },
    { q: "Antónimo de «ganar»:", o: ["perder", "jugar", "vencer"], a: 0, e: "perder." },
    { q: "Antónimo de «hacer»:", o: ["rehacer", "deshacer", "hecho"], a: 1, e: "des- + hacer." },
    { q: "Antónimo de «posible»:", o: ["inposible", "imposible", "desposible"], a: 1, e: "im- delante de p." },
    { q: "Antónimo de «visible»:", o: ["invisible", "imvisible", "desvisible"], a: 0, e: "in- + visible." },
    { q: "«Charlar» es sinónimo de…", o: ["callar", "hablar", "correr"], a: 1, e: "hablar." },
    { q: "«Limpio» y «sucio» son…", o: ["sinónimos", "antónimos", "iguales"], a: 1, e: "Contrarios." },
    { q: "Des- e in- se llaman…", o: ["prefijos", "verbos", "plurales"], a: 0, e: "Van delante: prefijos." },
    { q: "Sinónimo de «enorme»:", o: ["diminuto", "gigante", "pequeño"], a: 1, e: "gigante." },
  ],
  examen: [
    { q: "Antónimo de «abrochar»:", o: ["desabrochar", "inabrochar", "cerrar"], a: 0, e: "des- + abrochar." },
    { q: "Sinónimo de «veloz»:", o: ["lento", "rápido", "quieto"], a: 1, e: "rápido." },
    { q: "Antónimo de «feliz»:", o: ["contento", "infeliz", "alegre"], a: 1, e: "in- + feliz." },
    { q: "¿Qué pareja son sinónimos?", o: ["alto y bajo", "empezar y comenzar", "frío y calor"], a: 1, e: "Dicen lo mismo." },
  ],
  feynman: ["Qué son los sinónimos y para qué sirven al escribir", "Qué son los antónimos", "Cómo se forman antónimos con des- e in-"],
  mapa: mapa("SINÓNIMOS Y ANTÓNIMOS", "var(--pri)", [
    ["Sinónimos", "lo mismo: fácil = sencillo", Ve],
    ["Antónimos", "lo contrario: fácil ↔ difícil", R],
    ["Con des-", "hacer ↔ deshacer", A],
    ["Con in- / im-", "útil ↔ inútil, posible ↔ imposible", N],
  ], 250),
  tarjetas: [
    ["¿Qué son los sinónimos?", "Palabras que significan lo mismo"],
    ["¿Qué son los antónimos?", "Palabras que significan lo contrario"],
    ["Sinónimo de «empezar»", "comenzar"],
    ["Antónimo de «encender»", "apagar"],
    ["Antónimo de «ordenado»", "desordenado"],
    ["Antónimo de «útil»", "inútil"],
    ["Antónimo de «posible»", "imposible"],
    ["¿Para qué sirven los sinónimos?", "Para no repetir palabras"],
  ],
  familias: [
    "Jugad al dado de palabras: par sinónimo, impar antónimo.",
    "Cuando escriba, buscad juntos la palabra que más se repite y cambiadla.",
    "Haced una lista de palabras con des- en la nevera.",
    "Al leer, preguntad: «¿Cómo lo dirías con otra palabra?».",
  ],
  profesores: PROF("Vocabulario: relaciones semánticas de sinonimia y antonimia, formación de antónimos con prefijos (des-, in-, im-) y uso de sinónimos para evitar repeticiones", ["Dado de sinónimos y antónimos.", "Texto con palabras repetidas para mejorar en parejas.", "Mural de prefijos des- e in-."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
