// Lengua Castellana 2º de Primaria: cuentos y fábulas. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, parejas } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "2-primaria",
  titulo: "Cuentos y fábulas",
  minutos: 25,
  objetivos: ["Reconocer las partes de un cuento: inicio, nudo y desenlace", "Saber qué es una fábula y encontrar su moraleja", "Contar un cuento corto en orden"],
  claves: ["cuento", "personaje", "inicio", "nudo", "desenlace", "fábula", "moraleja"],
  pregunta: {
    texto: "En la carrera de la liebre y la tortuga, ¿quién gana? ¿Qué aprendemos de esa historia?",
    respuesta: "Gana la <b>tortuga</b>, que no para. Aprendemos que <mark>con constancia se llega lejos</mark>. Esa enseñanza se llama <b>moraleja</b>, y la historia es una <b>fábula</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un cuento?</h3><p>Un <mark>cuento</mark> es una historia corta e <b>inventada</b>.</p><p>Muchos empiezan con «<i>Érase una vez</i>» o «<i>Había una vez</i>». Y terminan con «<i>colorín colorado, este cuento se ha acabado</i>».</p><p>En los cuentos puede pasar de todo: animales que hablan, brujas, gigantes, castillos… ¡La imaginación no tiene límites!</p>`,
      svg: frase("Érase una vez… y colorín colorado, este cuento se ha acabado", [["Érase una vez…", A], ["/"], ["colorín colorado,", R], ["/"], ["este cuento se ha acabado", R]], { titulo: "Así empiezan y terminan", fs: 22 }),
      video: V("cueV", "el cuento y sus partes para niños"),
    },
    {
      html: `<h3>Los personajes</h3><p>Los <mark>personajes</mark> son quienes aparecen en el cuento. Pueden ser personas, animales o seres mágicos.</p><p>El <b>protagonista</b> es el más importante: a él le pasa la aventura. Caperucita es la protagonista de su cuento.</p><p>A veces hay un personaje que causa problemas, como el <b>lobo</b>. ¡Y otros que ayudan, como el cazador!</p>`,
      svg: dibujos("Personajes: Caperucita, el lobo y la abuela", [["nina", "Caperucita", R], ["lobo", "lobo", K], ["abuela", "abuela", A]], { titulo: "¿Quién sale en el cuento?", nota: "La protagonista es Caperucita" }),
    },
    {
      html: `<h3>Dónde y cuándo</h3><p>Todo cuento pasa en un <mark>lugar</mark> y en un <mark>tiempo</mark>.</p><p>El lugar puede ser un bosque, un castillo, el mar o una ciudad. El tiempo puede ser «hace mucho tiempo», «una noche de invierno» o «un día de sol».</p><p>Al leer, pregúntate: <b>¿dónde pasa?</b> y <b>¿cuándo pasa?</b> Así imaginas mejor la historia.</p>`,
      svg: dibujos("Lugares de cuento: un bosque, un castillo y el mar; de noche", [["arbol", "bosque", Ve], ["torre", "castillo", A], ["barco", "mar", N], ["luna", "de noche", M]], { titulo: "¿Dónde y cuándo?" }),
    },
    {
      html: `<h3>Las tres partes</h3><p>Los cuentos tienen <mark>tres partes</mark>.</p><p><b>Inicio</b>: se presentan los personajes y el lugar. <i>Había una vez una niña…</i></p><p><b>Nudo</b>: aparece un problema. <i>El lobo engañó a Caperucita…</i></p><p><b>Desenlace</b>: el problema se resuelve y termina la historia. <i>El cazador las salvó.</i></p>`,
      svg: lista("Inicio: se presentan; nudo: el problema; desenlace: se resuelve", [["Inicio: quién y dónde", Ve], ["Nudo: el problema", R], ["Desenlace: cómo acaba", A]], { titulo: "Las partes del cuento", marca: "n" }),
    },
    {
      html: `<h3>¿Qué es una fábula?</h3><p>Una <mark>fábula</mark> es un cuento corto con una <b>enseñanza</b>.</p><p>Sus personajes suelen ser <b>animales</b> que hablan y se comportan como personas: una zorra lista, una hormiga trabajadora, un león orgulloso.</p><p>Hace muchos siglos, un señor llamado <b>Esopo</b> escribió muchas fábulas. ¡Todavía las contamos hoy!</p>`,
      svg: dibujos("Animales de fábula: la tortuga, el león, la hormiga y el ratón", [["tortuga", "tortuga", Ve], ["leon", "león", M], ["hormiga", "hormiga", K], ["raton", "ratón", A]], { titulo: "Animales que hablan", nota: "Las fábulas enseñan algo" }),
      video: V("cueB"),
    },
    {
      html: `<h3>La moraleja</h3><p>La enseñanza de la fábula se llama <mark>moraleja</mark>. Suele estar al final.</p><p>En <i>El león y el ratón</i>, un ratón pequeño salva al gran león. Moraleja: <b>todos podemos ayudar, aunque seamos pequeños</b>.</p><p>En <i>La cigarra y la hormiga</i>, la hormiga guarda comida para el invierno. Moraleja: <b>hay que prepararse antes</b>.</p>`,
      svg: parejas("El león y el ratón: todos podemos ayudar; la cigarra y la hormiga: hay que prepararse", [["leon", "el león", "raton", "el ratón"], [null, "Moraleja:", null, "todos ayudan"]], { titulo: "El león y el ratón", color: M, color2: A, flecha: "+" }),
      video: V("cueB2"),
    },
    {
      html: `<h3>Contamos en orden</h3><p>Para contar un cuento, usa <mark>palabras de orden</mark>.</p><p><b>Primero</b>… <b>Después</b>… <b>Entonces</b>… <b>Al final</b>…</p><p>«Primero, la liebre corrió mucho. Después, se durmió bajo un árbol. Entonces, la tortuga la adelantó. Al final, ganó la tortuga.» ¡Así nadie se pierde!</p>`,
      svg: lista("Primero la liebre corre, después se duerme, entonces la tortuga adelanta, al final gana la tortuga", [["Primero: la liebre corre", A], ["Después: se duerme", N], ["Entonces: pasa la tortuga", Ve], ["Al final: ¡gana la tortuga!", R]], { titulo: "La liebre y la tortuga", marca: "n" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los cuentos nos <mark>hacen imaginar</mark>, reír y emocionarnos.</p><p>Las fábulas nos ayudan a <b>pensar</b> cómo portarnos: ser constantes, ayudar a los demás, no presumir.</p><p>Además, al leer cuentos aprendes palabras nuevas. ¡Y al contarlos, hablas mejor y en orden!</p>`,
      svg: charla("Un niño dice que la fábula le gustó y la niña pregunta qué aprendió: hay que ayudar", [["nino", "¡Qué fábula tan chula!", A], ["nina", "¿Qué aprendiste?", R], ["nino", "Que todos ayudamos.", A], ["nina", "¡Esa es la moraleja!", R]]),
    },
    {
      html: `<h3>Inventa tu fábula</h3><p>¡Ahora te toca a ti! Sigue estos <mark>pasos</mark>.</p><p><b>1.</b> Elige dos animales: un gato y un pez. <b>2.</b> Piensa un problema: el gato quiere comerse al pez. <b>3.</b> Piensa cómo se resuelve: se hacen amigos.</p><p><b>4.</b> Escribe la moraleja: «Es mejor tener amigos que enemigos». ¡Ya tienes tu fábula!</p>`,
      svg: lista("Inventa tu fábula: elige animales, un problema, cómo se resuelve y la moraleja", [["Elige dos animales", Ve], ["Piensa un problema", R], ["¿Cómo se resuelve?", A], ["Escribe la moraleja", N]], { titulo: "Mi fábula", marca: "n" }),
    },
  ],
  figura: {
    titulo: "Cuentos y fábulas",
    svg: mural("El cuento tiene inicio, nudo y desenlace; la fábula tiene animales y una moraleja", [["libro", "inicio", "quién, dónde, cuándo", Ve], ["lobo", "nudo", "aparece un problema", R], ["feliz", "desenlace", "se resuelve", A], ["tortuga", "fábula", "animales + moraleja", N]], "Érase una vez… colorín colorado, este cuento se ha acabado"),
  },
  video: V("cueV", "el cuento y sus partes para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuál es el nudo de «Los tres cerditos»?",
      pasos: ["Inicio: tres cerditos construyen sus casas.", "¿Qué problema aparece?", "El lobo sopla y derriba las casas."],
      resultado: "el nudo es cuando el lobo derriba las casas de paja y de madera." },
    { enunciado: "¿Qué moraleja tiene «La liebre y la tortuga»?",
      pasos: ["La liebre era rápida pero se durmió.", "La tortuga era lenta pero no paró.", "¿Qué nos enseña?"],
      resultado: "con constancia se llega a la meta; no hay que presumir." },
    { enunciado: "¿«La cigarra y la hormiga» es cuento o fábula?",
      pasos: ["¿Los personajes son animales que hablan? Sí.", "¿Nos enseña algo? Sí: prepararse.", "Tiene moraleja."],
      resultado: "es una fábula." },
  ],
  errores: [
    "Contar el cuento desordenado: usa primero, después, al final.",
    "Confundir el nudo con el inicio: el nudo es cuando aparece el problema.",
    "Pensar que toda historia con animales es una fábula: necesita una moraleja.",
    "Olvidar decir dónde y cuándo pasa la historia.",
  ],
  ejercicios: [
    { q: "¿Cómo empiezan muchos cuentos?", sol: "Érase una vez, Había una vez." },
    { q: "Di las tres partes de un cuento.", sol: "Inicio, nudo y desenlace." },
    { q: "¿Quién es la protagonista de Caperucita Roja?", sol: "Caperucita." },
    { q: "¿Dónde pasa Caperucita Roja?", sol: "En un bosque y en casa de la abuela." },
    { q: "¿Qué es una moraleja?", sol: "La enseñanza de una fábula." },
    { q: "¿Quién escribió muchas fábulas hace siglos?", sol: "Esopo." },
    { q: "¿Qué nos enseña «El león y el ratón»?", sol: "Que todos podemos ayudar, aunque seamos pequeños." },
    { q: "Ordena: al final / primero / después.", sol: "primero, después, al final." },
    { q: "Cuenta tu cuento favorito en tres frases.", sol: "Respuesta libre: una frase para el inicio, otra para el nudo y otra para el desenlace." },
    { q: "Inventa una moraleja.", sol: "Por ejemplo: «Compartir nos hace más felices»." },
  ],
  quiz: [
    { q: "Un cuento es una historia…", o: ["corta e inventada", "de verdad siempre", "sin personajes"], a: 0, e: "Corta e inventada." },
    { q: "La parte donde aparece el problema es el…", o: ["inicio", "nudo", "desenlace"], a: 1, e: "Nudo." },
    { q: "La parte donde se resuelve es el…", o: ["inicio", "nudo", "desenlace"], a: 2, e: "Desenlace." },
    { q: "El personaje más importante es el…", o: ["protagonista", "lugar", "título"], a: 0, e: "Protagonista." },
    { q: "Una fábula siempre tiene…", o: ["moraleja", "brujas", "rimas"], a: 0, e: "Una enseñanza." },
    { q: "Los personajes de las fábulas suelen ser…", o: ["animales", "coches", "números"], a: 0, e: "Animales que hablan." },
    { q: "¿Quién gana en «La liebre y la tortuga»?", o: ["la liebre", "la tortuga", "nadie"], a: 1, e: "La tortuga." },
    { q: "¿Qué palabra sirve para ordenar?", o: ["después", "azul", "mesa"], a: 0, e: "Primero, después, al final." },
    { q: "«Colorín colorado…» va al…", o: ["principio", "final", "medio"], a: 1, e: "Al final." },
    { q: "Esopo escribió…", o: ["fábulas", "canciones", "recetas"], a: 0, e: "Fábulas." },
  ],
  examen: [
    { q: "En el inicio se presentan…", o: ["los personajes y el lugar", "la moraleja", "el final"], a: 0, e: "Quién y dónde." },
    { q: "La moraleja de la cigarra y la hormiga:", o: ["hay que prepararse", "hay que cantar siempre", "las hormigas vuelan"], a: 0, e: "Prepararse antes." },
    { q: "¿Cuál es una fábula?", o: ["El león y el ratón", "Una receta", "Un poema de la luna"], a: 0, e: "Animales y moraleja." },
    { q: "¿Qué parte va primero?", o: ["desenlace", "nudo", "inicio"], a: 2, e: "Inicio." },
  ],
  feynman: ["Cuáles son las partes de un cuento", "Qué es una fábula y qué es la moraleja", "Cómo se cuenta una historia en orden"],
  mapa: mapa("CUENTOS Y FÁBULAS", "var(--pri)", [
    ["Cuento", "historia corta e inventada", A],
    ["Partes", "inicio, nudo, desenlace", R],
    ["Fábula", "animales que hablan", Ve],
    ["Moraleja", "la enseñanza", N],
  ], 230),
  tarjetas: [
    ["¿Qué es un cuento?", "Una historia corta e inventada"],
    ["Partes del cuento", "Inicio, nudo y desenlace"],
    ["¿Qué pasa en el nudo?", "Aparece un problema"],
    ["¿Qué pasa en el desenlace?", "Se resuelve el problema"],
    ["¿Qué es una fábula?", "Un cuento corto con enseñanza"],
    ["¿Qué es la moraleja?", "La enseñanza de la fábula"],
    ["¿Quién escribió fábulas?", "Esopo"],
    ["Palabras para ordenar", "Primero, después, al final"],
  ],
  familias: [
    "Leed un cuento cada noche y preguntad: ¿cuál fue el problema?",
    "Pedidle que os cuente el cuento usando primero, después y al final.",
    "Leed una fábula y buscad juntos la moraleja.",
    "Inventad una fábula entre todos con dos animales de casa o del parque.",
  ],
  profesores: PROF("Educación literaria: lectura y escucha de cuentos y fábulas, estructura narrativa (inicio, nudo y desenlace), personajes, espacio y tiempo, y la moraleja", ["Tira cómica de tres viñetas: inicio, nudo y desenlace.", "Rincón de fábulas de Esopo con marionetas.", "Escritura colectiva de una fábula con moraleja."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
