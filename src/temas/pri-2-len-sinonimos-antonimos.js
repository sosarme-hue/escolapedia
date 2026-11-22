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

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Evitar repetir palabras usando sinónimos", "Formar antónimos con otros prefijos como a- y anti-", "Conocer palabras con varios significados", "Usar el diccionario de sinónimos"],
  lectura: { titulo: "La redacción de Hugo", html: `<p>Hugo ha escrito una redacción sobre su perro para el cole. Se la lee a su hermana Alba en voz alta:</p><p>«Mi perro es muy bonito. Tiene el pelo bonito y unos ojos bonitos. Su collar también es bonito. Cuando corre por el parque, está muy bonito».</p><p>Alba se ríe.</p><p>—Hugo, ¡has dicho «bonito» cinco veces!</p><p>—Es que es verdad: es muy bonito.</p><p>—Ya, pero puedes decirlo de otras formas. Mira: precioso, guapo, brillante, elegante…</p><p>Hugo coge un lápiz y cambia algunas palabras:</p><p>«Mi perro es precioso. Tiene el pelo brillante y unos ojos muy expresivos. Su collar rojo es elegante. Cuando corre por el parque, parece un rayo».</p><p>—¡Ahora sí! —dice Alba—. Suena mucho mejor.</p><p>Al día siguiente, la maestra le pone a Hugo un «¡Excelente!» con una estrella. Y Hugo piensa: «Excelente… otro sinónimo de muy bien».</p>` },
  tras: {
    "Sinónimos para escribir mejor": [
      ["No repetir palabras", `<p>Cuando escribimos, conviene <mark>no repetir</mark> la misma palabra muchas veces. El texto se vuelve aburrido, como la primera redacción de Hugo.</p><p>Para evitarlo, usamos <b>sinónimos</b>. Mira este ejemplo:</p><ul><li>Repetido: «Fui a la playa. En la playa había mucha gente. La playa estaba limpia».</li><li>Mejor: «Fui a la playa. Allí había mucha gente. La arena estaba limpia».</li></ul><p>Fíjate en que a veces no hace falta un sinónimo: podemos usar palabras como <b>allí</b>, <b>él</b>, <b>ella</b>, <b>lo</b> o <b>la</b> para no repetir.</p><p>Las palabras que más se repiten son: <b>bonito</b>, <b>grande</b>, <b>bueno</b>, <b>decir</b> y <b>hacer</b>. ¡Tenlo en cuenta!</p><p>Un buen truco es leer en voz alta lo que has escrito. Si oyes la misma palabra muchas veces, búscale un sinónimo.</p><p><b>Actividad</b>: escribe tres frases sobre tu juguete favorito sin repetir ningún adjetivo.</p>`,
        H6.dos("Hugo", ["ANTES", ["bonito", "bonito", "bonito…"], cRO], ["DESPUÉS", ["precioso", "brillante", "elegante"], cVE]),
        ["hNBZC1uf3Yc", "Sinónimos y antónimos con el Chavo", "Francisco Verdugo Rosas", 5202487]],
    ],
    "El sinónimo que encaja": [
      ["Palabras con varios significados", `<p>Algunas palabras tienen <mark>varios significados</mark>. Se escriben igual, pero quieren decir cosas distintas:</p><ul><li><b>Vela</b>: la de un barco o la de una tarta de cumpleaños.</li><li><b>Hoja</b>: la de un árbol o la de un cuaderno.</li><li><b>Ratón</b>: el animal o el del ordenador.</li><li><b>Sierra</b>: la herramienta para cortar madera o un grupo de montañas.</li><li><b>Copa</b>: la de beber, la de un árbol o el trofeo de un campeonato.</li></ul><p>Por eso, para elegir un sinónimo, primero tenemos que saber <b>qué significado</b> tiene la palabra en la frase.</p><p>«La hoja del árbol» → no tiene un sinónimo exacto.</p><p>«La hoja del cuaderno» → sinónimo: <b>página</b> o <b>folio</b>.</p><p><b>Actividad</b>: dibuja los dos significados de «vela» y de «ratón».</p>`,
        L6.filas("Varios", [["vela", "barco / tarta", cAZ], ["hoja", "árbol / papel", cVE], ["ratón", "animal / ordenador", cNA], ["copa", "vaso / trofeo", cRO]])],
    ],
    "Antónimos con in- e im-": [
      ["Más prefijos: a-, anti-, dis-", `<p>Además de <b>des-</b>, <b>in-</b> e <b>im-</b>, hay otros trocitos que forman <mark>antónimos</mark>:</p><ul><li><b>a-</b>: normal → <b>a</b>normal; típico → <b>a</b>típico.</li><li><b>anti-</b>: significa «en contra de». <b>anti</b>pático es lo contrario de simpático. Un <b>anti</b>faz tapa la cara.</li><li><b>i-</b>: delante de l o r: legal → <b>i</b>legal; real → <b>i</b>rreal (¡con rr!).</li><li><b>dis-</b>: gusto → <b>dis</b>gusto; conforme → <b>dis</b>conforme.</li></ul><p>No todas las palabras pueden llevar estos trocitos. No decimos «desalto» ni «inbonito». Los antónimos de alto y bonito son palabras distintas: <b>bajo</b> y <b>feo</b>.</p><p>Si dudas, busca la palabra en el diccionario o pregunta a un adulto.</p><p><b>Actividad</b>: forma el antónimo de: simpático, legal, gusto, normal.</p>`,
        H6.flujo("Prefijos", ["a-|anormal", "anti-|antipático", "i-|ilegal", "dis-|disgusto"], cAZ)],
    ],
    "¿Sinónimo o antónimo?": [
      ["El diccionario de sinónimos", `<p>Existe un diccionario especial para encontrar palabras parecidas y contrarias: el <mark>diccionario de sinónimos y antónimos</mark>.</p><p>Funciona como el diccionario normal: las palabras están en orden alfabético. Pero, en lugar de la definición, aparece una lista:</p><ul><li><b>contento</b>: alegre, feliz, satisfecho, animado. <i>Contrarios</i>: triste, apenado.</li><li><b>rápido</b>: veloz, ligero, raudo. <i>Contrarios</i>: lento, pausado.</li></ul><p>Los escritores lo usan mucho para encontrar la palabra perfecta.</p><p>También hay diccionarios de sinónimos en <b>internet</b> y en los programas del ordenador: escribes una palabra y te salen muchas parecidas.</p><p>¡Pero cuidado! No todos los sinónimos encajan igual en cada frase. Hay que leer la frase con el sinónimo nuevo y comprobar que suena bien.</p><p><b>Actividad</b>: busca en un diccionario de sinónimos tres palabras para «grande».</p>`,
        L6.filas("contento", [["sinónimo", "alegre", cVE], ["sinónimo", "feliz", cAZ], ["antónimo", "triste", cRO], ["antónimo", "apenado", cMO]])],
    ],
  },
  final: [
    ["El español de otros países", `<p>Muchas veces, la misma cosa se dice de <mark>formas distintas</mark> según el país o la región donde se habla español:</p><ul><li>En España decimos <b>coche</b>; en muchos países de América dicen <b>carro</b> o <b>auto</b>.</li><li>En España, <b>zumo</b>; en América, <b>jugo</b>.</li><li>En España, <b>gafas</b>; en América, <b>lentes</b> o <b>anteojos</b>.</li><li>En España, <b>patata</b>; en América, <b>papa</b>.</li><li>En España, <b>ordenador</b>; en América, <b>computadora</b>.</li></ul><p>Todas son palabras correctas. Son como sinónimos que se usan en lugares distintos.</p><p>El español lo hablan más de 500 millones de personas en el mundo. ¡Por eso tiene tantas palabras para decir lo mismo!</p><p>Si tienes compañeros de otros países, pregúntales cómo dicen ellos estas cosas.</p><p><b>Actividad</b>: haz una tabla con cinco palabras de España y cómo se dicen en otro país.</p>`,
      L6.filas("España / América", [["coche", "carro", cAZ], ["zumo", "jugo", cNA], ["gafas", "lentes", cVE], ["patata", "papa", cRO]])],
    ["Repaso: la redacción de Hugo", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>¿Qué palabra repetía Hugo? <b>Bonito</b>, cinco veces.</li><li>¿Qué sinónimos le dio Alba? <b>Precioso</b>, <b>guapo</b>, <b>brillante</b>, <b>elegante</b>.</li><li>¿Qué palabra escribió la maestra? <b>Excelente</b>, sinónimo de «muy bien».</li><li>Antónimo de bonito: <b>feo</b>.</li><li>Antónimo de brillante: <b>apagado</b> u <b>opaco</b>.</li><li>«Parece un rayo» es una <b>comparación</b>: corre muy rápido.</li></ul><p>Más preguntas:</p><ul><li>¿Qué palabra de la lectura tiene varios significados? <b>Rayo</b>: el de la tormenta y el de una rueda de bicicleta.</li><li>Antónimo de «contento» con prefijo: <b>descontento</b>.</li></ul><p><b>Actividad</b>: escribe una redacción sobre tu mascota o tu animal favorito sin repetir ningún adjetivo.</p>`,
      H6.rueda("Bonito", "BONITO", [["precioso", cRO], ["guapo", cAZ], ["brillante", cNA], ["feo ✗", cMO]])],
  ],
  ejemplos: [
    ["Cambia la palabra repetida: «Vi un perro. El perro ladraba».", ["Busco otra forma de nombrarlo.", "Puedo usar «él» o «el animal»."], "Vi un perro. El animal ladraba."],
    ["Forma el antónimo de «simpático».", ["Uso el prefijo anti-."], "Antipático."],
  ],
  errores: ["Inventar antónimos como «inbonito» o «desalto».", "Elegir un sinónimo sin pensar el significado de la frase."],
  ejercicios: [
    ["b", "Di un sinónimo de «bonito».", "Precioso, guapo, lindo…"],
    ["b", "Di dos significados de «hoja».", "La del árbol y la de papel."],
    ["b", "Antónimo de «legal».", "Ilegal."],
    ["b", "¿Cómo se dice «zumo» en América?", "Jugo."],
    ["b", "Antónimo de «simpático».", "Antipático."],
    ["m", "Escribe dos sinónimos y un antónimo de «rápido».", "Veloz, ligero; lento."],
    ["m", "Di dos significados de «copa».", "Vaso o trofeo (o copa de árbol)."],
    ["m", "Forma el antónimo de «gusto».", "Disgusto."],
    ["m", "Cambia la palabra repetida: «Mi casa es grande. Tiene un jardín grande».", "Por ejemplo: amplio o enorme."],
    ["m", "¿Por qué no decimos «desalto»?", "Porque el antónimo de alto es bajo."],
    ["a", "En la lectura, ¿por qué se ríe Alba?", "Porque Hugo repite «bonito» cinco veces."],
    ["a", "Escribe una frase con «sierra» de herramienta y otra con «sierra» de montañas.", "Respuesta libre."],
    ["a", "Reescribe: «El día fue bonito. Comimos una tarta bonita».", "Por ejemplo: El día fue estupendo. Comimos una tarta deliciosa."],
    ["a", "¿Para qué sirve el diccionario de sinónimos?", "Para encontrar palabras parecidas y contrarias."],
  ],
  quiz: [
    ["Para no repetir palabras usamos…", ["sinónimos", "antónimos", "rimas"], "Repetir."],
    ["«Vela» tiene…", ["varios significados", "un significado", "ningún sinónimo"], "Significados."],
    ["El antónimo de «normal» es…", ["anormal", "desnormal", "innormal"], "Prefijos."],
    ["En América, «patata» es…", ["papa", "papá", "tomate"], "Lenguas."],
    ["Un sinónimo de «contento» es…", ["feliz", "triste", "lento"], "Diccionario."],
  ],
  examen: [
    ["En la lectura, ¿qué palabra repite Hugo?", ["bonito", "perro", "parque"], "Lectura."],
    ["¿Qué le pone la maestra a Hugo?", ["¡Excelente!", "¡Bonito!", "Repite"], "Repaso."],
  ],
  tarjetas: [
    ["No repetir", "Sinónimos o palabras como él, ella, allí."],
    ["Prefijos", "des-, in-, im-, a-, anti-, dis-, i-."],
  ],
  glosario: [
    ["Sinónimo", "Palabra de significado parecido."],
    ["Antónimo", "Palabra de significado contrario."],
    ["Repetir", "Decir lo mismo varias veces."],
    ["Prefijo", "Trocito que va delante de una palabra."],
    ["Significado", "Lo que quiere decir una palabra."],
    ["Redacción", "Texto que escribimos sobre un tema."],
    ["Expresivo", "Que muestra lo que siente."],
    ["Excelente", "Muy bueno."],
    ["Antipático", "Que no es simpático."],
    ["Región", "Parte de un país."],
  ],
  situacion: {
    titulo: "Detectives de palabras repetidas",
    reto: "La clase revisa textos con palabras repetidas y los mejora con sinónimos, como hizo Hugo.",
    pasos: ["Leer un texto con palabras repetidas y subrayarlas.", "Buscar sinónimos en el diccionario.", "Reescribir el texto sin repeticiones.", "Leerlo en voz alta y comparar las dos versiones."],
    producto: "Un texto mejorado y un mural de sinónimos y antónimos.",
    evaluacion: ["Encuentra palabras repetidas.", "Usa sinónimos adecuados.", "Forma antónimos con prefijos.", "Distingue significados de una palabra."],
  },
});
