// Programación y robótica 1º ESO: crear una animación interactiva en Scratch. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "Crear una animación interactiva",
  minutos: 60,
  objetivos: ["Planificar una animación interactiva con guion y guion gráfico", "Usar distintos eventos para que el usuario participe: clics, teclas y sonido", "Coordinar objetos y escenas con mensajes", "Probar, mejorar y compartir un proyecto propio respetando la autoría"],
  claves: ["animación", "interactividad", "guion", "guion gráfico", "escena", "evento", "al hacer clic en este objeto", "al presionar tecla", "mensaje", "enviar", "recibir", "sincronizar", "fondo", "remezcla", "compartir"],
  pregunta: {
    texto: "¿Qué diferencia hay entre ver un dibujo animado en la tele y jugar con una animación interactiva?",
    respuesta: "En un dibujo animado lo único que puedes hacer es <b>mirar</b>: la historia es siempre igual. En una animación <b>interactiva</b>, quien la usa <b>participa</b>: hace clic en los personajes, pulsa teclas, elige qué camino seguir o responde preguntas, y la historia cambia según lo que haga. Para programarla, cada acción del usuario tiene que estar unida a un <b>evento</b> que pone en marcha una parte del programa.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una animación interactiva?</h3><p>Una <mark>animación</mark> es una sucesión de imágenes que, mostradas rápidamente, crean la ilusión de movimiento. En Scratch se consigue cambiando la posición y el disfraz de los objetos con pequeñas esperas. Una animación es <mark>interactiva</mark> cuando el usuario puede <b>participar</b> y modificar lo que ocurre: tocar un personaje para que hable, pulsar una tecla para que salte, elegir entre dos puertas o responder a una pregunta. Ejemplos de animaciones interactivas son una <b>postal animada</b> que reacciona al pasar el ratón, un <b>cuento</b> en el que el lector elige el final, una <b>presentación</b> de un tema de clase en la que cada personaje explica algo al tocarlo, un <b>instrumento musical</b> en el que cada objeto suena al hacer clic, o una <b>visita virtual</b> a un museo. En este tema reunimos todo lo aprendido (movimiento, apariencia, bucles, condiciones y sensores) para crear un proyecto propio, y aprendemos una herramienta nueva: los <b>mensajes</b>.</p>`,
    },
    {
      html: `<h3>Planificar: idea, guion y guion gráfico</h3><p>Antes de abrir Scratch hay que <b>planificar</b>, como hacen los estudios de animación. Primero, la <b>idea</b>: qué queremos contar y para quién, en una o dos frases («Un pequeño robot se pierde en un bosque y el usuario le ayuda a volver a casa eligiendo caminos»). Después, el <mark>guion</mark>: los personajes, los escenarios y lo que ocurre en cada escena, incluidos los diálogos y qué puede hacer el usuario en cada momento. Por último, el <mark>guion gráfico</mark> o <i>storyboard</i>: una serie de viñetas dibujadas a mano, una por escena, con notas de lo que pasa, como un cómic. Para cada escena conviene anotar: fondo, objetos que aparecen, qué hacen, qué <b>evento</b> la pone en marcha y cómo se pasa a la siguiente. Un consejo importante: empezar con un proyecto <b>pequeño</b> (dos o tres escenas) y terminarlo bien, antes que uno enorme que se quede a medias. Siempre se puede ampliar después.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Guion gráfico de tres viñetas: el robot en el bosque, el usuario elige un camino y el robot llega a casa, con flechas entre viñetas">${BG}
        ${[["1. bosque", "el robot se pierde", COL.verde], ["2. cruce", "el usuario elige", COL.sol], ["3. casa", "final feliz", COL.azul]].map(([a, b, c], i) => {
          const x = 10 + i * 84;
          return `<rect x="${x}" y="30" width="72" height="66" rx="4" fill="var(--card)" stroke="${c}" stroke-width="2"/>${t(x + 36, 116, a, { size: 10, color: c })}${et(x + 36, 132, b, 76, { size: 9, weight: 400 })}`;
        }).join("")}
        <path d="M24 84 q 10 -26 20 0 q 10 -22 20 0" fill="none" stroke="var(--leaf)" stroke-width="2"/><rect x="38" y="62" width="14" height="14" rx="3" fill="#94a3b8" stroke="var(--ink)"/>
        <path d="M130 90 V 70 M130 70 L 112 50 M130 70 L 148 50" stroke="var(--ink)" stroke-width="2"/>${t(112, 46, "A", { size: 10 })}${t(148, 46, "B", { size: 10 })}
        <path d="M200 86 V 62 L 214 50 L 228 62 V 86 Z" fill="#fde68a" stroke="var(--ink)"/>
        ${fl(82, 63, 92, 63, "var(--ink)", 1.6)}${fl(166, 63, 176, 63, "var(--ink)", 1.6)}
        ${t(130, 160, "una viñeta por escena, con notas", { size: 9.5, weight: 400, color: "var(--muted)" })}</svg>`,
      video: { id: "rJ91tXDqWRM", titulo: "Historia animada en Scratch", canal: "Practicas TIC", vistas: 197394 },
    },
    {
      html: `<h3>Eventos para interactuar</h3><p>Los <mark>eventos</mark> (categoría Eventos, en amarillo) son los bloques con forma de sombrero que ponen en marcha un programa cuando ocurre algo. Para la interactividad, los más útiles son: <b>«al hacer clic en la bandera verde»</b>, para preparar todo al empezar (posiciones, disfraces, fondo inicial, variables a cero); <mark>«al hacer clic en este objeto»</mark>, para que un personaje reaccione cuando el usuario lo toca (hablar, saltar, sonar); <mark>«al presionar tecla…»</mark>, para controlar personajes con el teclado o elegir opciones («pulsa A o B»); <b>«cuando el fondo cambie a…»</b>, para que los objetos sepan que ha empezado una nueva escena; <b>«cuando volumen &gt; 10»</b>, para reaccionar a un sonido o una palmada a través del micrófono; y <b>«al hacer clic en el escenario»</b>. Un mismo objeto puede tener <b>varios programas</b>, cada uno con su evento, funcionando a la vez. Así, un personaje puede caminar por siempre y, además, decir algo cuando se le hace clic.</p>${tabla(["Evento", "Cuándo se activa", "Uso típico"], [["al hacer clic en 🏁", "al empezar", "colocar todo en su sitio"], ["al hacer clic en este objeto", "al tocar el objeto", "que hable o suene"], ["al presionar tecla…", "al pulsar una tecla", "mover, elegir opción"], ["cuando el fondo cambie a…", "al cambiar de escena", "que aparezcan personajes"], ["cuando volumen > …", "al haber ruido", "reaccionar a una palmada"], ["al recibir mensaje…", "al llegar un mensaje", "coordinar objetos"]])}`,
    },
    {
      html: `<h3>Los mensajes: coordinar objetos</h3><p>En una animación con varios personajes, a menudo uno tiene que avisar a otro de que algo ha ocurrido: «ya he terminado de hablar, te toca», «el usuario ha elegido la puerta B», «empieza la escena 2». Para eso se usan los <mark>mensajes</mark>. El bloque <mark>«enviar mensaje…»</mark> lanza un aviso con un nombre (por ejemplo, «tu turno» o «escena 2») que llega a <b>todos</b> los objetos y al escenario a la vez. Y el bloque de evento <mark>«al recibir…»</mark> pone en marcha un programa cuando llega ese mensaje. Es como en una carrera de relevos: el corredor que termina pasa el testigo y el siguiente empieza a correr. También existe «enviar … y esperar», que espera a que todos los programas que han recibido el mensaje terminen antes de seguir. Los mensajes son mucho más fiables que sincronizar a base de esperas («espera 3 segundos y habla»): si cambiamos la duración de un diálogo, con esperas habría que recalcularlo todo, pero con mensajes todo sigue encajando. Conviene ponerles <b>nombres claros</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El gato envía el mensaje tu turno y el perro, al recibir tu turno, responde: los mensajes coordinan a los personajes">${BG}
        ${t(64, 22, "gato", { size: 10.5, color: COL.naranja })}${t(196, 22, "perro", { size: 10.5, color: COL.marron })}
        <rect x="10" y="30" width="110" height="20" rx="4" fill="#c98a00"/>${et(16, 44, "al hacer clic en 🏁", 100, { anchor: "start", color: "#fff", size: 9.5 })}
        <rect x="10" y="52" width="110" height="20" rx="4" fill="#9966ff"/>${et(16, 66, "decir «¿Jugamos?» 2 s", 100, { anchor: "start", color: "#fff", size: 9.5 })}
        <rect x="10" y="74" width="110" height="20" rx="4" fill="#c98a00"/>${et(16, 88, "enviar «tu turno»", 100, { anchor: "start", color: "#fff", size: 9.5 })}
        <rect x="140" y="74" width="110" height="20" rx="4" fill="#c98a00"/>${et(146, 88, "al recibir «tu turno»", 100, { anchor: "start", color: "#fff", size: 9.5 })}
        <rect x="140" y="96" width="110" height="20" rx="4" fill="#9966ff"/>${et(146, 110, "decir «¡Sí!» 2 s", 100, { anchor: "start", color: "#fff", size: 9.5 })}
        ${fl(122, 84, 138, 84, "var(--red)", 2.2)}
        ${t(130, 150, "enviar → al recibir", { size: 10.5, color: COL.rojo })}${t(130, 166, "el mensaje llega a todos los objetos", { size: 9, weight: 400, color: "var(--muted)" })}</svg>`,
      video: { id: "I5crrXa8mlA", titulo: "Scratch 2.0: enviar y recibir mensajes", canal: "AREATECNOLOGIA", vistas: 9002 },
    },
    {
      html: `<h3>Escenas y elecciones</h3><p>Una animación con varias <b>escenas</b> se organiza normalmente con los <b>fondos</b> del escenario. Para cambiar de escena se usa «cambiar fondo a…», y los objetos reaccionan con <b>«cuando el fondo cambie a…»</b>: los que deben aparecer en esa escena se muestran y se colocan en su sitio; los que no, se esconden. Otra opción es enviar un mensaje con el nombre de la escena. Para que el usuario <mark>elija</mark> qué pasa, hay varias formas: <b>dos objetos-botón</b> («Camino del río» y «Camino de la montaña»), cada uno con «al hacer clic en este objeto: cambiar fondo a…»; pulsar una tecla («pulsa A o B», con «al presionar tecla A» y «al presionar tecla B»); o el bloque «preguntar» con una condición sobre la respuesta. Cada elección lleva a una escena distinta, y así se construye una historia <b>ramificada</b>, con varios finales posibles. Es buena idea dibujar antes un esquema en árbol con todas las escenas y las flechas entre ellas, para no perderse.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema en árbol de una historia ramificada: inicio, elección entre río y montaña, y cuatro finales posibles">${BG}
        ${cj(96, 12, 68, 26, "inicio", COL.gris, { size: 10 })}
        ${cj(30, 66, 68, 26, "río", COL.agua, { size: 10 })}${cj(162, 66, 68, 26, "montaña", COL.verde, { size: 10 })}
        ${[["barca", 6], ["puente", 70], ["cueva", 138], ["cima", 202]].map(([s, x]) => cj(x, 124, 54, 24, s, COL.morado, { size: 9.5 })).join("")}
        <path d="M130 38 L 64 66 M130 38 L 196 66 M64 92 L 33 124 M64 92 L 97 124 M196 92 L 165 124 M196 92 L 229 124" stroke="var(--muted)" stroke-width="1.5"/>
        ${t(130, 170, "cada elección lleva a otra escena", { size: 9.5, weight: 400, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Animar con detalle: sonido y efectos</h3><p>Algunos recursos dan mucha calidad a una animación. Los <b>sonidos</b>: una música de fondo en el escenario, con «por siempre: tocar sonido … hasta que termine»; efectos al tocar objetos; o voces grabadas con el micrófono para los diálogos. La extensión <b>Texto a voz</b> permite que los personajes lean sus frases en voz alta, y la extensión <b>Música</b>, tocar notas e instrumentos. Las <b>transiciones</b> entre escenas, por ejemplo con un bucle que cambie el efecto desvanecer o brillo del escenario o de un objeto que lo cubra. El movimiento <b>suave</b> con «deslizar» y con bucles de pasos pequeños, mejor que saltos bruscos. Los <b>disfraces</b> para las expresiones (contento, sorprendido, triste) y para caminar. Y los <b>textos en pantalla</b>, como un título inicial y unas instrucciones claras («Haz clic en el robot para empezar», «Usa las flechas»). Una animación interactiva debe dejar claro al usuario <b>qué puede hacer</b> en cada momento.</p>`,
      video: { id: "9OtVYJGaK0o", titulo: "Cómo hacer una animación en Scratch", canal: "Taller de Videojuegos", vistas: 98010 },
    },
    {
      html: `<h3>Probar, mejorar y compartir</h3><p>Al terminar cada escena hay que <b>probarla</b>: ¿todos los objetos empiezan en su sitio al pulsar la bandera?, ¿pasa algo raro si se hace clic dos veces seguidas?, ¿qué ocurre si se pulsa una tecla en la escena equivocada?, ¿se esconden los objetos que no deben verse? Es muy útil pedir a un <b>compañero</b> que la pruebe sin explicarle nada: si no sabe qué hacer, hay que mejorar las instrucciones. Con sus comentarios se hace una lista de mejoras y se van aplicando una a una. Cuando el proyecto esté listo, se puede <mark>compartir</mark> en la comunidad de Scratch, con un título claro, unas <b>instrucciones</b> de uso y unas <b>notas y créditos</b> en las que se cite de dónde salen las imágenes o sonidos que no son propios. Si se parte del proyecto de otra persona, se usa la opción <mark>remezclar</mark>, que mantiene un enlace al original y reconoce su autoría. Al comentar proyectos ajenos, hay que ser <b>respetuoso y constructivo</b>: decir lo que gusta y sugerir mejoras con amabilidad.</p>`,
    },
  ],
  figura: {
    titulo: "La animación interactiva en ocho ideas",
    svg: rejilla([
      ["Interactiva", "el usuario participa", COL.naranja],
      ["Guion", "personajes, escenas, diálogos", COL.gris],
      ["Guion gráfico", "viñetas por escena", COL.sol],
      ["Clic en objeto", "reacciona al tocarlo", COL.azul],
      ["Teclas", "controlar y elegir", COL.agua],
      ["Mensajes", "enviar y recibir", COL.rojo],
      ["Escenas", "fondos que cambian", COL.verde],
      ["Compartir", "créditos y remezcla", COL.morado],
    ], 4, 86, "Resumen: interactividad, guion, guion gráfico, eventos de clic y teclas, mensajes, escenas y compartir"),
  },
  video: { id: "Ee6zISfSQfE", titulo: "Scratch: historia interactiva", canal: "Redint Getafe", vistas: 32085, megusta: 0, busqueda: "historia interactiva scratch mensajes" },
  ejemplos: [
    { enunciado: "Haz un instrumento: tres objetos (tambor, guitarra, campana) que suenan al hacer clic en ellos y cambian de tamaño mientras suenan.",
      pasos: ["En cada objeto: al hacer clic en este objeto.", "Cambiar tamaño por 20; tocar sonido … hasta que termine.", "Cambiar tamaño por −20."],
      resultado: "Tres programas iguales con su sonido, uno por objeto." },
    { enunciado: "El narrador presenta la historia y, cuando termina, debe aparecer el protagonista. ¿Cómo lo coordinas sin usar esperas?",
      pasos: ["Narrador: decir su texto; enviar «presentación terminada».", "Protagonista: al hacer clic en la bandera, esconder.", "Protagonista: al recibir «presentación terminada», mostrar y saludar."],
      resultado: "Con un mensaje que el narrador envía al acabar." },
    { enunciado: "El usuario debe elegir entre la puerta roja y la azul. ¿Cómo lo programarías con objetos-botón?",
      pasos: ["Dos objetos: puerta roja y puerta azul, visibles en la escena del pasillo.", "Puerta roja: al hacer clic en este objeto, cambiar fondo a «Sala del tesoro».", "Puerta azul: al hacer clic en este objeto, cambiar fondo a «Dragón».", "Las puertas: cuando el fondo cambie a otro, esconder."],
      resultado: "Cada botón cambia a un fondo; los objetos reaccionan al cambio." },
  ],
  errores: [
    "Empezar a programar sin guion ni guion gráfico.",
    "Sincronizar diálogos solo con esperas, que se descuadran al cambiar algo.",
    "No esconder los objetos que no pertenecen a la escena.",
    "No reiniciar posiciones, disfraces y fondo al pulsar la bandera verde.",
    "No explicar al usuario qué tiene que hacer.",
    "Usar imágenes o sonidos ajenos sin citarlos.",
  ],
  ejercicios: [
    { q: "¿Qué hace interactiva a una animación?", sol: "Que el usuario participa y puede cambiar lo que ocurre." },
    { q: "¿Qué es un guion gráfico?", sol: "Una serie de viñetas dibujadas, una por escena, con notas de lo que ocurre." },
    { q: "Escribe tres eventos útiles para la interactividad.", sol: "Al hacer clic en este objeto, al presionar tecla y cuando el fondo cambie a." },
    { q: "¿Para qué sirven los mensajes?", sol: "Para que un objeto avise a otros de que algo ha ocurrido y coordinarlos." },
    { q: "¿A quién llega un mensaje enviado?", sol: "A todos los objetos y al escenario." },
    { q: "¿Por qué es mejor coordinar con mensajes que con esperas?", sol: "Porque si cambian las duraciones, todo sigue encajando." },
    { q: "¿Cómo se organiza una animación con varias escenas?", sol: "Con fondos distintos y objetos que reaccionan al cambio de fondo." },
    { q: "Escribe dos formas de que el usuario elija entre dos opciones.", sol: "Con dos objetos-botón o pulsando dos teclas distintas." },
    { q: "¿Qué hay que poner al compartir un proyecto?", sol: "Título, instrucciones y notas y créditos." },
    { q: "¿Qué es remezclar un proyecto?", sol: "Crear uno nuevo a partir del de otra persona, manteniendo el enlace y el reconocimiento al original." },
  ],
  quiz: [
    { q: "Los eventos tienen forma de…", o: ["sombrero", "hexágono", "C"], a: 0, e: "Sombrero." },
    { q: "Para que un objeto reaccione al tocarlo se usa…", o: ["al hacer clic en este objeto", "por siempre", "esperar"], a: 0, e: "Clic en este objeto." },
    { q: "Para avisar a otros objetos se usa…", o: ["enviar mensaje", "decir", "pensar"], a: 0, e: "Enviar." },
    { q: "Un mensaje llega a…", o: ["todos los objetos", "solo al siguiente", "solo al escenario"], a: 0, e: "A todos." },
    { q: "Las viñetas que planifican las escenas forman el…", o: ["guion gráfico", "código", "fondo"], a: 0, e: "Storyboard." },
    { q: "Una historia con varios finales es…", o: ["ramificada", "lineal", "infinita"], a: 0, e: "Ramificada." },
    { q: "Para reaccionar a una palmada se usa…", o: ["cuando volumen >", "al presionar tecla", "cronómetro"], a: 0, e: "Volumen." },
    { q: "Para que los personajes lean en voz alta se usa la extensión…", o: ["Texto a voz", "Lápiz", "Música"], a: 0, e: "Texto a voz." },
    { q: "Al partir del proyecto de otra persona se usa…", o: ["remezclar", "copiar a escondidas", "borrar"], a: 0, e: "Remezclar." },
    { q: "Al pulsar la bandera conviene…", o: ["colocar todo en su sitio", "no hacer nada", "borrar los objetos"], a: 0, e: "Reiniciar." },
  ],
  examen: [
    { q: "«Enviar … y esperar» espera a que…", o: ["terminen los programas que lo reciben", "pase un segundo", "el usuario pulse"], a: 0, e: "Que terminen los receptores." },
    { q: "Un objeto puede tener…", o: ["varios programas con distintos eventos", "un solo evento", "ningún evento"], a: 0, e: "Varios." },
    { q: "Al probar un proyecto conviene pedir ayuda a…", o: ["un compañero que no lo conozca", "nadie", "el autor"], a: 0, e: "Prueba sin explicaciones." },
  ],
  feynman: ["Cómo se planifica una animación antes de programarla", "Para qué sirven los mensajes y en qué se parecen a una carrera de relevos", "Cómo hacer que el usuario elija el camino de una historia"],
  mapa: mapa("ANIMACIÓN INTERACTIVA", "var(--eso)", [
    ["Planificar", "idea · guion · guion gráfico", COL.gris],
    ["Interactuar", "clic · teclas · volumen", COL.azul],
    ["Coordinar", "mensajes · escenas · fondos", COL.rojo],
    ["Compartir", "probar · créditos · remezcla", COL.morado],
  ], 300),
  tarjetas: [
    ["Animación interactiva", "Animación en la que el usuario participa."],
    ["Guion gráfico", "Viñetas que planifican cada escena."],
    ["Al hacer clic en este objeto", "Evento que se activa al tocar el objeto."],
    ["Al presionar tecla", "Evento que se activa al pulsar una tecla."],
    ["Enviar mensaje", "Avisa a todos los objetos de algo."],
    ["Al recibir", "Evento que se activa al llegar un mensaje."],
    ["Cuando el fondo cambie a", "Evento que se activa al cambiar de escena."],
    ["Remezclar", "Crear un proyecto a partir de otro citando al autor."],
  ],
  familias: ["Inventad juntos una pequeña historia con dos finales y dibujad su guion gráfico.", "Grabad voces o sonidos de casa para usarlos en el proyecto.", "Probad la animación que hayan creado y dad sugerencias amables."],
  profesores: {
    saberes: "Proyecto de animación interactiva: planificación (guion y storyboard), eventos de interacción, mensajes para sincronizar objetos, escenas con fondos, historias ramificadas, sonido y extensiones, prueba con usuarios, publicación, licencias y remezcla (materia optativa de Programación y robótica, en el marco del RD 217/2022).",
    ideas: ["Cuento interactivo con dos finales a partir de un guion gráfico en papel.", "Presentación interactiva de un tema de Biología o Geografía.", "Instrumento musical con objetos y la extensión Música."],
  },
  fuentes: [RD, wiki("Animación", "Animación"), wiki("Guion gráfico", "Guion_gráfico"), { t: "Scratch: ideas y tutoriales", url: "https://scratch.mit.edu/ideas" }],
  revisado: REV,
};
