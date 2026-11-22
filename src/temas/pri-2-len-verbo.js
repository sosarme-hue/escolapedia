// Lengua Castellana 2º de Primaria: el verbo, las acciones. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, parejas } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "2-primaria",
  titulo: "El verbo: acciones",
  minutos: 25,
  objetivos: ["Saber que el verbo dice lo que hacen las personas, los animales y las cosas", "Encontrar el verbo en una frase", "Distinguir si la acción pasó, pasa ahora o pasará"],
  claves: ["verbo", "acción", "pasado", "presente", "futuro", "infinitivo"],
  pregunta: {
    texto: "Mira por la ventana. ¿Qué está haciendo la gente? ¿Y los pájaros?",
    respuesta: "La gente <b>camina</b>, <b>habla</b>, <b>espera</b>… Los pájaros <b>vuelan</b> y <b>cantan</b>. Todas esas palabras dicen acciones: son <mark>verbos</mark>.",
  },
  bloques: [
    {
      html: `<h3>Palabras de acción</h3><p>Los <mark>verbos</mark> son las palabras que dicen <b>lo que se hace</b>.</p><p>El niño <b>salta</b>. El perro <b>ladra</b>. La niña <b>lee</b>. El pájaro <b>vuela</b>.</p><p>Si puedes hacer el gesto con el cuerpo, ¡seguramente es un verbo! Prueba: corre, salta, aplaude, duerme.</p>`,
      svg: dibujos("Un niño salta, un perro ladra, una niña lee y un pájaro vuela", [["nino", "salta", R], ["perro", "ladra", A], ["libro", "lee", Ve], ["pajaro", "vuela", N]], { titulo: "¿Qué hacen?", nota: "salta · ladra · lee · vuela" }),
      video: V("verV", "qué es un verbo para niños"),
    },
    {
      html: `<h3>Verbos de todos los días</h3><p>Desde que te levantas haces muchas <mark>acciones</mark>.</p><p>Te <b>despiertas</b>, te <b>lavas</b>, te <b>vistes</b> y <b>desayunas</b>. En el cole <b>escribes</b>, <b>cuentas</b> y <b>juegas</b>.</p><p>Por la noche <b>cenas</b>, te <b>bañas</b> y <b>duermes</b>. ¡Cada cosa que haces es un verbo!</p>`,
      svg: lista("Por la mañana me despierto y desayuno; en el cole escribo y juego; por la noche ceno y duermo", [["Me despierto y desayuno", M], ["Escribo y juego", A], ["Ceno y me baño", Ve], ["Duermo", N]], { titulo: "Mi día en verbos", marca: "n" }),
      video: V("verB"),
    },
    {
      html: `<h3>El verbo en la frase</h3><p>En casi todas las frases hay un <mark>verbo</mark>. Para encontrarlo, pregunta: <b>¿qué hace?</b></p><p>«Mi abuelo <b>riega</b> las plantas.» ¿Qué hace mi abuelo? Riega.</p><p>«Las niñas <b>cantan</b> una canción.» ¿Qué hacen las niñas? Cantan. El verbo es el corazón de la frase.</p>`,
      svg: frase("Mi abuelo riega las plantas: riega es el verbo", [["Mi abuelo", A], ["riega", R], ["/"], ["las plantas", A]], { titulo: "Pregunta: ¿qué hace?", nota: "El verbo, en rojo", fs: 26 }),
    },
    {
      html: `<h3>El nombre del verbo</h3><p>Cada verbo tiene un <mark>nombre</mark>, como un apellido. Se llama <b>infinitivo</b>.</p><p>Los infinitivos terminan en <b>-ar</b>, <b>-er</b> o <b>-ir</b>: <i>salt<b>ar</b></i>, <i>com<b>er</b></i>, <i>viv<b>ir</b></i>.</p><p>«Salta», «saltamos» y «saltó» son del verbo <b>saltar</b>. Es la forma que buscamos en el diccionario.</p>`,
      svg: parejas("Salta es de saltar; come es de comer; escribe es de escribir", [[null, "salta", null, "saltar"], [null, "come", null, "comer"], [null, "escribe", null, "escribir"]], { izq: "en la frase", der: "infinitivo", color: A, color2: R, flecha: "→" }),
    },
    {
      html: `<h3>¿Quién lo hace?</h3><p>El verbo cambia según <mark>quién hace la acción</mark>.</p><p><i>Yo <b>canto</b>. Tú <b>cantas</b>. Ella <b>canta</b>.</i></p><p><i>Nosotros <b>cantamos</b>. Vosotros <b>cantáis</b>. Ellos <b>cantan</b>.</i></p><p>El final del verbo nos da una pista: «cantamos» nos dice que somos nosotros. ¡El verbo se pone el traje de cada persona!</p>`,
      svg: lista("Yo canto, tú cantas, nosotros cantamos, ellos cantan", [["yo canto · tú cantas", A], ["él o ella canta", Ve], ["nosotros cantamos", N], ["ellos cantan", R]], { titulo: "El verbo cantar", marca: "♪" }),
    },
    {
      html: `<h3>Ayer, hoy y mañana</h3><p>El verbo también dice <mark>cuándo</mark> pasa la acción.</p><p><b>Pasado</b> (ya pasó): <i>Ayer <b>jugué</b> al fútbol.</i></p><p><b>Presente</b> (pasa ahora): <i>Hoy <b>juego</b> al fútbol.</i></p><p><b>Futuro</b> (pasará): <i>Mañana <b>jugaré</b> al fútbol.</i> Las palabras <i>ayer</i>, <i>hoy</i> y <i>mañana</i> te ayudan a saberlo.</p>`,
      svg: lista("Pasado: ayer jugué; presente: hoy juego; futuro: mañana jugaré", [["Ayer jugué: pasado", N], ["Hoy juego: presente", Ve], ["Mañana jugaré: futuro", R]], { titulo: "¿Cuándo?", marca: "n" }),
    },
    {
      html: `<h3>Verbos para hablar y sentir</h3><p>No todos los verbos son de moverse. Hay verbos de <mark>hablar</mark>: <i>decir</i>, <i>preguntar</i>, <i>contar</i>, <i>gritar</i>.</p><p>Y verbos de <mark>pensar y sentir</mark>: <i>pensar</i>, <i>querer</i>, <i>recordar</i>, <i>soñar</i>.</p><p>«Lucía <b>piensa</b> en su abuela y la <b>quiere</b> mucho.» También son acciones, aunque no se vean.</p>`,
      svg: dibujos("Verbos de hablar, pensar y sentir: pregunta, piensa, quiere", [["interrogacion", "pregunta", A], ["nina", "piensa", Ve], ["corazon", "quiere", R]], { titulo: "Acciones que no se ven", nota: "decir · pensar · querer · soñar" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Sin verbos <mark>no podemos contar lo que pasa</mark>. «El perro… la pelota» no dice nada.</p><p>Con un verbo, todo cobra vida: «El perro <b>muerde</b> la pelota». «El perro <b>trae</b> la pelota».</p><p>Al contar lo que hiciste el fin de semana, usas verbos en pasado: «<b>fui</b> al parque», «<b>comí</b> helado».</p>`,
      svg: charla("Una niña cuenta lo que hizo: fui al parque, comí helado y monté en bici", [["nina", "¡Fui al parque!", R], ["nino", "¿Y qué hiciste?", A], ["nina", "Comí un helado.", R], ["nino", "¡Qué bien lo pasaste!", A]]),
    },
    {
      html: `<h3>Juego de mímica</h3><p>Escribid verbos en papelitos: <i>nadar</i>, <i>dormir</i>, <i>barrer</i>, <i>pintar</i>, <i>llorar</i>…</p><p>Un jugador saca un papel y hace la <mark>mímica</mark> sin hablar. Los demás adivinan el verbo.</p><p>Quien acierta lo dice en una frase: «¡Estás <b>nadando</b>!». Después le toca a él hacer la mímica.</p>`,
      svg: dibujos("Mímica de verbos: nadar, dormir, comer y pintar", [["pez", "nadar", N], ["cama", "dormir", A], ["cuchara", "comer", Ve], ["lapiz", "pintar", R]], { titulo: "¿Qué verbo es?", nota: "Haz el gesto sin hablar" }),
    },
  ],
  figura: {
    titulo: "El verbo",
    svg: mural("El verbo dice acciones; su nombre termina en ar, er, ir; cambia según quién y cuándo", [["nino", "salta", "acción: ¿qué hace?", R], [null, "-ar -er -ir", "infinitivo: saltar", A], ["nina", "yo · tú · ella", "¿quién lo hace?", Ve], ["reloj", "ayer · hoy · mañana", "¿cuándo?", N]], "El verbo es el corazón de la frase"),
  },
  video: V("verV", "qué es un verbo para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Busca el verbo: «El gato bebe leche».",
      pasos: ["Pregunta: ¿qué hace el gato?", "Bebe.", "Su infinitivo es beber."],
      resultado: "el verbo es «bebe» (beber)." },
    { enunciado: "¿Cuándo pasa? «Mañana iremos a la playa».",
      pasos: ["Busca la pista: mañana.", "La acción todavía no ha pasado.", "iremos es futuro."],
      resultado: "en el futuro." },
    { enunciado: "Completa con el verbo bailar: «Nosotros …».",
      pasos: ["Quién: nosotros.", "El final para nosotros es -amos.", "bail + amos."],
      resultado: "Nosotros bailamos." },
  ],
  errores: [
    "Confundir el verbo con el sustantivo: en «el baile», baile es un nombre; en «Ana baila», baila es verbo.",
    "Olvidar que los verbos de pensar y sentir también son verbos: quiero, pienso.",
    "Mezclar tiempos: «Ayer juego» está mal; es «Ayer jugué».",
    "No hacer coincidir el verbo con quién lo hace: «nosotros canta» está mal.",
  ],
  ejercicios: [
    { q: "Di tres verbos que haces en el recreo.", sol: "Por ejemplo: corro, salto, juego." },
    { q: "Busca el verbo: «El bebé llora».", sol: "llora (llorar)." },
    { q: "¿Cuál es el infinitivo de «comemos»?", sol: "comer." },
    { q: "¿Termina en -ar, -er o -ir? «vivir».", sol: "En -ir." },
    { q: "Completa: «Tú … (saltar)».", sol: "saltas." },
    { q: "¿Pasado, presente o futuro? «Ayer llovió».", sol: "Pasado." },
    { q: "¿Pasado, presente o futuro? «Mañana veré a mi abuela».", sol: "Futuro." },
    { q: "Pon en pasado: «Hoy juego».", sol: "Ayer jugué." },
    { q: "Escribe una frase con el verbo «nadar».", sol: "Por ejemplo: Los peces nadan en el mar." },
    { q: "Haz la mímica del verbo «barrer».", sol: "Mover los brazos como con una escoba." },
  ],
  quiz: [
    { q: "El verbo dice…", o: ["acciones", "colores", "nombres"], a: 0, e: "Lo que se hace." },
    { q: "¿Cuál es un verbo?", o: ["pelota", "correr", "rojo"], a: 1, e: "correr." },
    { q: "Verbo en «La niña lee un libro»:", o: ["niña", "lee", "libro"], a: 1, e: "¿Qué hace? Lee." },
    { q: "Los infinitivos terminan en…", o: ["-ar, -er, -ir", "-os, -as", "-ito"], a: 0, e: "saltar, comer, vivir." },
    { q: "Infinitivo de «canta»:", o: ["canción", "cantar", "cantante"], a: 1, e: "cantar." },
    { q: "«Ayer comí» está en…", o: ["pasado", "presente", "futuro"], a: 0, e: "Ya pasó." },
    { q: "«Mañana viajaré» está en…", o: ["pasado", "presente", "futuro"], a: 2, e: "Pasará." },
    { q: "Completa: «Nosotros …»", o: ["corre", "corremos", "corro"], a: 1, e: "corremos." },
    { q: "¿Qué pregunta encuentra el verbo?", o: ["¿qué hace?", "¿cómo es?", "¿cuántos?"], a: 0, e: "¿Qué hace?" },
    { q: "¿Cuál es un verbo de sentir?", o: ["querer", "mesa", "azul"], a: 0, e: "querer." },
  ],
  examen: [
    { q: "Verbo en «Los pájaros vuelan alto»:", o: ["pájaros", "vuelan", "alto"], a: 1, e: "vuelan." },
    { q: "Infinitivo de «escribimos»:", o: ["escribir", "escritor", "escrito"], a: 0, e: "escribir." },
    { q: "«Hoy juego» está en…", o: ["pasado", "presente", "futuro"], a: 1, e: "Ahora." },
    { q: "Completa: «Yo … (bailar)»", o: ["bailo", "baila", "bailan"], a: 0, e: "bailo." },
  ],
  feynman: ["Qué es un verbo y cómo se encuentra", "Qué es el infinitivo", "Cómo sabemos si una acción es pasada, presente o futura"],
  mapa: mapa("EL VERBO", "var(--pri)", [
    ["Qué es", "dice acciones: salta, lee", R],
    ["Infinitivo", "-ar, -er, -ir", A],
    ["¿Quién?", "yo canto, ellos cantan", Ve],
    ["¿Cuándo?", "jugué · juego · jugaré", N],
  ], 240),
  tarjetas: [
    ["¿Qué es un verbo?", "Una palabra que dice una acción"],
    ["Pregunta para encontrarlo", "¿Qué hace?"],
    ["Terminaciones del infinitivo", "-ar, -er, -ir"],
    ["Infinitivo de «corre»", "correr"],
    ["«Ayer salté» es…", "pasado"],
    ["«Hoy salto» es…", "presente"],
    ["«Mañana saltaré» es…", "futuro"],
    ["«Nosotros … (cantar)»", "cantamos"],
  ],
  familias: [
    "Jugad a la mímica de verbos después de cenar.",
    "Al acostarse, que cuente tres cosas que hizo hoy (verbos en pasado).",
    "Planead el fin de semana con verbos en futuro: iremos, veremos, comeremos.",
    "Leed un cuento y buscad qué hace cada personaje.",
  ],
  profesores: PROF("Reflexión sobre la lengua: el verbo como palabra que expresa acciones, el infinitivo, la concordancia con la persona y la noción de pasado, presente y futuro", ["Mímica de verbos por equipos.", "Línea del tiempo con ayer, hoy y mañana.", "Diario de clase con verbos en pasado."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer las tres terminaciones de los verbos: -ar, -er, -ir", "Usar verbos de órdenes en recetas e instrucciones", "Elegir verbos precisos en lugar de «hacer» y «decir»", "Conjugar verbos con yo, tú, él y ella"],
  lectura: { titulo: "La receta del abuelo", html: `<p>Los sábados, el abuelo Tomás cocina con su nieta Valeria. Hoy van a preparar tortitas para el desayuno.</p><p>El abuelo saca un papel viejo de un cajón: es su receta, escrita a mano hace muchos años.</p><p>Valeria la lee en voz alta:</p><p>«Primero, <b>casca</b> dos huevos en un bol. Después, <b>añade</b> un vaso de leche y <b>bate</b> bien. <b>Echa</b> poco a poco la harina y <b>remueve</b> sin parar. <b>Calienta</b> la sartén con un poco de mantequilla. <b>Vierte</b> un cucharón de masa y <b>espera</b> a que salgan burbujas. Entonces, <b>dale</b> la vuelta».</p><p>—Abuelo, ¡esta receta está llena de órdenes!</p><p>—Claro —se ríe él—. Las recetas nos dicen qué hacer, paso a paso.</p><p>Valeria bate, remueve y espera. La primera tortita sale un poco quemada, pero la segunda queda perfecta. Al final, las comen con miel y fresas. ¡Qué rico desayuno!</p>` },
  tras: {
    "El nombre del verbo": [
      ["Tres familias: -ar, -er, -ir", `<p>Todos los verbos, cuando los decimos por su nombre, terminan de una de estas <mark>tres formas</mark>:</p><ul><li>En <b>-ar</b>: cant<b>ar</b>, salt<b>ar</b>, jug<b>ar</b>, cocin<b>ar</b>, esper<b>ar</b>.</li><li>En <b>-er</b>: com<b>er</b>, beb<b>er</b>, corr<b>er</b>, le<b>er</b>, bat<b>er</b>.</li><li>En <b>-ir</b>: escrib<b>ir</b>, viv<b>ir</b>, dorm<b>ir</b>, sub<b>ir</b>, abr<b>ir</b>.</li></ul><p>Son como tres <b>familias</b> de verbos. Los de la misma familia cambian de forma parecida.</p><p>La familia más grande es la de <b>-ar</b>: ¡tiene muchísimos verbos! Cuando se inventan verbos nuevos, casi siempre son de -ar, como «chatear» o «tuitear».</p><p>Para saber de qué familia es un verbo, piensa en su nombre: «comemos» → comer → familia -er.</p><p>Los verbos <b>ir</b> y <b>ser</b> son muy cortos, pero también tienen nombre en -ir y en -er. ¡Hasta los verbos más pequeños pertenecen a una familia!</p><p><b>Actividad</b>: escribe cinco verbos de cada familia.</p>`,
        L6.filas("Familias", [["-ar", "cantar", cRO], ["-er", "comer", cAZ], ["-ir", "vivir", cVE], ["la mayor", "-ar", cNA]])],
    ],
    "¿Quién lo hace?": [
      ["Yo, tú, él, ella", `<p>El verbo cambia según <mark>quién</mark> hace la acción. Mira el verbo <b>cantar</b>:</p><ul><li><b>Yo</b> cant<b>o</b>.</li><li><b>Tú</b> cant<b>as</b>.</li><li><b>Él</b> o <b>ella</b> cant<b>a</b>.</li><li><b>Nosotros</b> cant<b>amos</b>.</li><li><b>Vosotros</b> cant<b>áis</b>.</li><li><b>Ellos</b> o <b>ellas</b> cant<b>an</b>.</li></ul><p>Las palabras yo, tú, él, ella, nosotros, vosotros, ellos y ellas se llaman <b>pronombres personales</b>. Sustituyen al nombre de las personas.</p><p>Cambiar el verbo así se llama <b>conjugar</b>. Fíjate en que el final cambia: -o, -as, -a, -amos, -áis, -an.</p><p>Gracias a esto, a veces no hace falta decir quién: «Cantamos» ya nos dice que somos nosotros.</p><p><b>Actividad</b>: conjuga el verbo «bailar» con todos los pronombres.</p>`,
        H6.flujo("cantar", ["yo|canto", "tú|cantas", "ella|canta", "nosotros|cantamos"], cAZ)],
    ],
    "Ayer, hoy y mañana": [
      ["Verbos que dan órdenes", `<p>Algunos verbos sirven para dar <mark>órdenes</mark> o <mark>instrucciones</mark>. Los usamos mucho en:</p><ul><li><b>Recetas</b>: «<b>Bate</b> los huevos», «<b>Calienta</b> la sartén».</li><li><b>Juegos</b>: «<b>Tira</b> el dado», «<b>Avanza</b> tres casillas».</li><li><b>Clase</b>: «<b>Abrid</b> el libro», «<b>Escribe</b> tu nombre».</li><li><b>Señales</b>: «<b>Empuje</b>», «<b>No pisar</b> el césped».</li></ul><p>Para pedir algo con educación, añadimos <b>por favor</b>: «Pásame la sal, por favor».</p><p>En las recetas, las órdenes van <b>en orden</b>, con palabras como primero, después, luego y al final. Si cambiamos el orden… ¡la tortita sale mal!</p><p>Fíjate en que las órdenes no llevan delante quién lo hace: no decimos «tú bate», sino solo «bate». ¡Ya se entiende que es para quien lee!</p><p><b>Actividad</b>: escribe las instrucciones para lavarte los dientes con cuatro verbos de orden.</p>`,
        H6.rueda("Órdenes", "¡HAZ!", [["receta", cNA], ["juego", cAZ], ["clase", cVE], ["señal", cRO]])],
    ],
    "Verbos para hablar y sentir": [
      ["Verbos más precisos", `<p>Hay dos verbos que usamos para casi todo: <mark>hacer</mark> y <mark>decir</mark>. Pero si buscamos un verbo más preciso, lo que escribimos queda mucho mejor:</p><ul><li>«Hacer un dibujo» → <b>dibujar</b>.</li><li>«Hacer una tarta» → <b>preparar</b> o <b>hornear</b> una tarta.</li><li>«Hacer una casa» → <b>construir</b> una casa.</li><li>«Decir un secreto» → <b>contar</b> o <b>susurrar</b> un secreto.</li><li>«Decir muy alto» → <b>gritar</b>.</li><li>«Decir una pregunta» → <b>preguntar</b>.</li></ul><p>También podemos cambiar <b>andar</b> por pasear, caminar, correr, trotar o cojear, según cómo se mueva el personaje.</p><p>Los buenos escritores siempre buscan el verbo justo.</p><p><b>Actividad</b>: cambia «hacer» en estas frases: hacer un poema, hacer una foto, hacer los deberes.</p>`,
        H6.dos("Mejor", ["HACER", ["un dibujo", "una tarta", "una casa"], cMO], ["PRECISO", ["dibujar", "hornear", "construir"], cVE])],
    ],
  },
  final: [
    ["Verbos que no son acciones", `<p>Casi todos los verbos expresan acciones: correr, saltar, comer. Pero hay algunos verbos que <mark>no son acciones</mark> que se vean:</p><ul><li><b>Ser</b> y <b>estar</b>: «Valeria <b>es</b> alta», «La sopa <b>está</b> caliente».</li><li><b>Tener</b>: «Tengo un hermano».</li><li><b>Parecer</b>: «Parece cansado».</li><li><b>Pensar</b>, <b>saber</b>, <b>recordar</b>: ocurren dentro de nuestra cabeza.</li><li><b>Gustar</b>, <b>querer</b>, <b>odiar</b>: hablan de sentimientos.</li></ul><p>Aunque no se vean, ¡también son verbos! Cambian con yo, tú, él (yo soy, tú eres, él es) y con ayer, hoy y mañana (fui, soy, seré).</p><p>Ser y estar son los verbos más usados del español. Aparecen en casi todas las conversaciones.</p><p>¡Hasta el verbo <b>dormir</b> es un verbo, aunque mientras dormimos estemos quietos!</p><p><b>Actividad</b>: escribe tres frases sobre ti con «soy», «estoy» y «tengo».</p>`,
      L6.filas("Sin acción", [["ser", "es alta", cNA], ["estar", "está caliente", cAZ], ["tener", "tengo", cVE], ["pensar", "en la cabeza", cRO]])],
    ["Repaso: la receta del abuelo", `<p>Repasamos con la <mark>lectura</mark> de Valeria:</p><ul><li>Verbos de orden: <b>casca</b>, <b>añade</b>, <b>bate</b>, <b>echa</b>, <b>remueve</b>, <b>calienta</b>, <b>vierte</b>, <b>espera</b>.</li><li>Su nombre: cascar, añadir, batir, echar, remover, calentar, verter, esperar.</li><li>Familias: <b>-ar</b> (cascar, echar, calentar, esperar), <b>-er</b> (remover, verter) e <b>-ir</b> (añadir, batir).</li><li>Tiempo: «cocina» (presente), «sale quemada» (presente), «las comen» (presente). Si fuera ayer: cocinó, salió, comieron.</li><li>Quién: «el abuelo cocina» → él; «las comen» → ellos.</li></ul><p>¡Una receta es perfecta para practicar los verbos!</p><p><b>Actividad</b>: escribe la receta de tu bocadillo favorito con verbos de orden y palabras de orden.</p>`,
      H6.flujo("Tortitas", ["casca|huevos", "bate|y echa", "calienta|sartén", "vierte|¡y vuelta!"], cNA)],
  ],
  ejemplos: [
    ["¿De qué familia es «escribimos»?", ["Busco el nombre: escribir.", "Termina en -ir."], "Familia -ir."],
    ["Cambia el verbo: «Hice un castillo de arena».", ["Busco uno más preciso."], "Construí un castillo de arena."],
  ],
  errores: ["Pensar que «ser» o «tener» no son verbos porque no son acciones que se vean.", "Usar siempre «hacer» y «decir» en lugar de verbos más precisos."],
  ejercicios: [
    ["b", "¿En qué terminan los nombres de los verbos?", "En -ar, -er o -ir."],
    ["b", "Di un verbo de la familia -er.", "Comer, beber, correr…"],
    ["b", "Conjuga «saltar» con yo.", "Yo salto."],
    ["b", "Escribe una orden de un juego.", "Tira el dado."],
    ["b", "Cambia «hacer un dibujo» por un verbo.", "Dibujar."],
    ["m", "Conjuga «comer» con tú y con nosotros.", "Tú comes; nosotros comemos."],
    ["m", "Clasifica: subir, leer, jugar.", "-ir, -er, -ar."],
    ["m", "Escribe dos verbos más precisos que «decir».", "Gritar, susurrar, contar…"],
    ["m", "¿Qué verbo no es una acción que se ve: correr o pensar?", "Pensar."],
    ["m", "Escribe una orden educada con «por favor».", "Pásame el agua, por favor."],
    ["a", "En la lectura, escribe tres verbos de orden y su nombre.", "Bate (batir), echa (echar), espera (esperar)…"],
    ["a", "¿Por qué la primera tortita sale quemada?", "Respuesta libre: quizá la sartén estaba demasiado caliente."],
    ["a", "Escribe instrucciones para plantar una semilla con cuatro órdenes.", "Respuesta libre."],
    ["a", "Pasa a ayer: «Valeria bate y espera».", "Valeria batió y esperó."],
  ],
  quiz: [
    ["«Escribir» es de la familia…", ["-ir", "-er", "-ar"], "Familias."],
    ["Yo, tú, él son…", ["pronombres", "verbos", "adjetivos"], "Pronombres."],
    ["«Bate los huevos» es una…", ["orden", "pregunta", "rima"], "Órdenes."],
    ["Un verbo más preciso que «hacer una casa» es…", ["construir", "decir", "jugar"], "Preciso."],
    ["«Ser» y «estar»…", ["son verbos", "no son verbos", "son nombres"], "Sin acción."],
  ],
  examen: [
    ["En la lectura, ¿qué preparan Valeria y su abuelo?", ["tortitas", "una tarta", "galletas"], "Lectura."],
    ["«Remover» es de la familia…", ["-er", "-ar", "-ir"], "Repaso."],
  ],
  tarjetas: [
    ["Familias", "-ar (cantar), -er (comer), -ir (vivir)."],
    ["Conjugar", "Yo canto, tú cantas, él canta…"],
  ],
  glosario: [
    ["Verbo", "Palabra que dice lo que se hace o pasa."],
    ["Infinitivo", "Nombre del verbo: cantar, comer, vivir."],
    ["Conjugar", "Cambiar el verbo según quién y cuándo."],
    ["Pronombre", "Palabra que sustituye al nombre: yo, tú…"],
    ["Orden", "Frase que dice lo que hay que hacer."],
    ["Instrucción", "Paso que hay que seguir."],
    ["Receta", "Instrucciones para cocinar algo."],
    ["Preciso", "Exacto, justo."],
    ["Batir", "Mover rápido para mezclar."],
    ["Verter", "Echar un líquido."],
  ],
  situacion: {
    titulo: "Recetario de la clase",
    reto: "Cada niño escribe con su familia una receta sencilla y la clase forma un recetario con todas.",
    pasos: ["Elegir una receta fácil y apuntar los ingredientes.", "Escribir los pasos con verbos de orden.", "Revisar que los verbos sean precisos y estén en orden.", "Ilustrar la receta y juntarlas en un libro."],
    producto: "Un recetario ilustrado de la clase.",
    evaluacion: ["Clasifica verbos en -ar, -er, -ir.", "Conjuga con yo, tú, él.", "Usa verbos de orden.", "Elige verbos precisos."],
  },
});
