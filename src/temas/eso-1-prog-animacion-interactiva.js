// Programación y robótica 1º ESO · Crear una animación interactiva. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, resumen, scratch, flujo, CAT, wiki, C, RD, REV } = require("./_eso1L2");

const verJugar = comparar("Animación lineal frente a interactiva: en la primera solo miras; en la segunda decides y la historia responde", [
  ["Lineal", ["solo miras", "siempre igual", "como una película"], "var(--muted)"],
  ["Interactiva", ["tú decides", "cambia cada vez", "como un juego"], "var(--pen)"],
], "Mirar o participar");

const fases = pasos("Fases para crear una animación interactiva: idea, guion, guion gráfico, programar, probar y compartir", [
  "Idea: tema y personajes",
  "Guion: qué pasa y qué se elige",
  "Guion gráfico: viñetas",
  "Programar escena a escena",
  "Probar, mejorar y compartir",
], "Del papel a la pantalla");

const storyboard = lienzo("Guion gráfico de cuatro viñetas: el gato en el bosque, encuentra dos caminos, elige el río o la cueva y final", `
  ${[["1. Bosque", "el gato pasea"], ["2. Cruce", "¿río o cueva?"], ["3a. Río", "un pez habla"], ["3b. Cueva", "un murciélago"]].map(([a, b], i) => { const x = 14 + (i % 2) * 120, y = 16 + Math.floor(i / 2) * 76; return `<rect x="${x}" y="${y}" width="112" height="68" rx="6" fill="var(--card)" stroke="${["var(--leaf)", "var(--sun)", "var(--pen)", "var(--muted)"][i]}" stroke-width="2"/>${tx(x + 56, y + 28, a, { fs: 11.5, max: 100 })}${tx(x + 56, y + 50, b, { fs: 10.5, c: "var(--muted)", max: 100 })}`; }).join("")}
  ${tx(130, 176, "dibujar antes de programar", { fs: 11.5, fam: D })}`, 184);

const eventos = cajas("Eventos de Scratch para interactuar: bandera verde, presionar tecla, hacer clic en objeto y cuando el fondo cambia", [
  ["al hacer clic en ⚑", "empieza todo", CAT.eventos],
  ["al presionar tecla", "el teclado", "var(--pen)"],
  ["al hacer clic aquí", "clic en el objeto", "var(--red)"],
  ["cuando fondo cambia", "nueva escena", "var(--leaf)"],
], "Formas de empezar");

const clicObjeto = scratch("Al hacer clic en este objeto: decir hola, tocar sonido y cambiar el color", [
  ["al hacer clic en este objeto", "eventos"], ["tocar sonido Pop", "sonido"], ["decir ¡Me has tocado! durante 1 seg", "apariencia"], ["cambiar efecto color por 25", "apariencia"],
], "Un objeto que responde");

const mensajes = lienzo("Mensajes: el gato envía el mensaje saludo y el perro, al recibirlo, responde", `
  <rect x="14" y="40" width="96" height="60" rx="10" fill="var(--card)" stroke="${CAT.eventos}" stroke-width="2.4"/>${tx(62, 64, "Gato", { fs: 12.5, max: 86 })}${tx(62, 86, "enviar «saludo»", { fs: 10, c: "var(--muted)", max: 88 })}
  <rect x="150" y="40" width="96" height="60" rx="10" fill="var(--card)" stroke="${CAT.eventos}" stroke-width="2.4"/>${tx(198, 64, "Perro", { fs: 12.5, max: 86 })}${tx(198, 86, "al recibir «saludo»", { fs: 10, c: "var(--muted)", max: 88 })}
  <path d="M112 70 H144" stroke="${CAT.eventos}" stroke-width="3"/><path d="M138 63 L147 70 L138 77" fill="none" stroke="${CAT.eventos}" stroke-width="3"/><rect x="116" y="58" width="22" height="14" rx="2" fill="var(--card)" stroke="${CAT.eventos}" stroke-width="1.6"/><path d="M116 58 L127 66 L138 58" fill="none" stroke="${CAT.eventos}" stroke-width="1.4"/>
  ${tx(130, 132, "un objeto avisa · los demás reaccionan", { fs: 11.5, fam: D })}`, 150);

const dialogo = scratch("Diálogo con mensajes: el gato dice hola y envía turno perro; el perro al recibir turno perro responde", [
  ["al hacer clic en ⚑", "eventos"], ["decir ¡Hola, Rex! durante 2 seg", "apariencia"], ["enviar turno perro y esperar", "eventos"], ["decir ¡Vamos al parque!", "apariencia"], ["al recibir turno perro", "eventos"], ["decir ¡Hola, Michi! durante 2 seg", "apariencia"],
], "Diálogo con mensajes");

const escenas = flujo("Escenas con elección: en el cruce se pregunta río o cueva y según la respuesta se cambia a un fondo u otro", [
  ["Escena 1: bosque", "ini"], ["Llegar al cruce", "proc"], ["¿Río o cueva?", "dec", "río: escena 3a", "cueva ↓"], ["Escena 3b: cueva", "proc"], ["Final", "ini"],
], "Una historia con dos caminos");

const eleccion = scratch("Elegir camino: preguntar río o cueva; si la respuesta es río, cambiar fondo a río; si no, cambiar fondo a cueva", [
  ["al recibir cruce", "eventos"], ["preguntar ¿Río o cueva? y esperar", "sensores"], ["si (respuesta) = río entonces", "control"], ["cambiar fondo a Río", "apariencia", 1], ["si no", "control"], ["cambiar fondo a Cueva", "apariencia", 1],
], "El jugador decide");

const fondoCambia = scratch("Al cambiar el fondo a cueva, el murciélago aparece; al cambiar a río, se esconde", [
  ["cuando el fondo cambie a Cueva", "eventos"], ["mostrar", "apariencia"], ["decir ¡Bienvenido a mi cueva!", "apariencia"], ["cuando el fondo cambie a Río", "eventos"], ["esconder", "apariencia"],
], "Personajes según la escena");

const detalle = cajas("Recursos para dar vida a la animación: sonidos, música, efectos y transiciones", [
  ["Sonidos", "pasos, puertas, voces", CAT.sonido],
  ["Música", "ambiente de cada escena", "var(--pen)"],
  ["Efectos", "desvanecer, brillo", CAT.apariencia],
  ["Transiciones", "fundidos entre escenas", "var(--leaf)"],
], "Los detalles cuentan");

const fundido = scratch("Transición de fundido: un objeto negro aumenta y luego reduce el efecto desvanecer al cambiar de escena", [
  ["al recibir cambiar escena", "eventos"], ["fijar efecto desvanecer a 100", "apariencia"], ["mostrar", "apariencia"], ["repetir 10", "control"], ["cambiar efecto desvanecer por −10", "apariencia", 1], ["siguiente fondo", "apariencia"],
], "Fundido a negro");

const probar = pasos("Probar y mejorar: jugar todos los caminos, pedir a otra persona que lo pruebe y corregir", [
  "Prueba todos los caminos",
  "Pide a alguien que lo juegue",
  "Anota lo que no se entiende",
  "Corrige y vuelve a probar",
  "Añade instrucciones y créditos",
], "Antes de compartir");

const rubrica = tabla(["Aspecto", "Pregunta para revisar"], [["Historia", "¿Tiene principio, nudo y final?"], ["Interacción", "¿El jugador decide algo de verdad?"], ["Programación", "¿Funcionan todos los caminos?"], ["Diseño", "¿Se leen bien los textos y se ven los personajes?"], ["Sonido", "¿Ayuda a la historia sin molestar?"], ["Créditos", "¿Se citan los recursos de otros?"]]);

module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "Crear una animación interactiva",
  minutos: 110,
  objetivos: [
    "Distinguir una animación lineal de una interactiva",
    "Planificar un proyecto con idea, guion y guion gráfico",
    "Usar eventos de teclado, ratón y fondo para que el usuario participe",
    "Coordinar varios objetos con mensajes",
    "Crear escenas y elecciones que cambien la historia",
    "Mejorar el proyecto con sonido y efectos, probarlo y compartirlo",
  ],
  claves: ["animación interactiva", "guion", "guion gráfico", "evento", "mensaje", "enviar", "recibir", "escena", "fondo", "elección", "transición"],
  pregunta: {
    texto: "¿Qué diferencia hay entre ver un dibujo animado en la tele y jugar con una animación interactiva?",
    respuesta: "En la tele solo <b>miras</b>: la historia es siempre igual. En una animación <mark>interactiva</mark> tú <b>participas</b>: haces clic, pulsas teclas o eliges un camino, y la historia <b>responde</b> y cambia según lo que hagas. Para conseguirlo hacen falta <b>eventos</b> que detecten lo que haces y <b>mensajes</b> que coordinen a los personajes.",
  },
  lectura: {
    titulo: "Elige tu propia aventura",
    html: `<p>En 1979 apareció en Estados Unidos un tipo de libro muy curioso. Al final de algunas páginas, en lugar de seguir leyendo, el lector tenía que decidir: «Si quieres entrar en la cueva, ve a la página 42. Si prefieres seguir por el río, ve a la página 17». Cada decisión llevaba a una historia distinta, y había decenas de finales posibles. Se llamaron libros de «Elige tu propia aventura» y vendieron más de 250 millones de ejemplares en todo el mundo.</p><p>Esos libros eran, en realidad, <b>programas en papel</b>. Cada página era una escena, cada elección era una condición y cada «ve a la página…» era un salto en el programa. Los autores tenían que dibujar un mapa con todas las ramas para no perderse.</p><p>Hoy, los videojuegos de aventuras, las series interactivas y muchas aplicaciones educativas funcionan igual: el usuario decide y la historia responde. En este tema vas a aprender a crear tu propia historia interactiva en Scratch, desde la idea en papel hasta el proyecto terminado que otras personas puedan jugar.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 ¿Qué es una animación interactiva?</h3><p>Una <b>animación</b> es una sucesión de imágenes que crea ilusión de movimiento. Una <b>animación lineal</b> es como una película: siempre ocurre lo mismo, del principio al final, y el espectador solo mira.</p><p>Una <mark>animación interactiva</mark> responde a lo que hace el usuario: hacer clic en un personaje, pulsar una tecla, escribir una respuesta o elegir un camino. Cada vez que se juega puede ser distinta, porque depende de las decisiones de quien la usa.</p><p>Entre los proyectos interactivos más habituales en Scratch están las <b>historias con elecciones</b>, los <b>cuentos animados</b> en los que se toca a los personajes para que hablen, las <b>presentaciones</b> con botones, los <b>quiz</b> y los <b>juegos</b>. Todos usan las mismas herramientas: eventos, mensajes, condiciones y cambios de fondo. Crear uno es como ser a la vez guionista, dibujante, músico y programador.</p>`, svg: verJugar },
    { html: `<h3>1.2 Planificar: idea y guion</h3><p>Antes de abrir Scratch, hay que <b>planificar</b>. Un proyecto sin plan suele acabar en un lío de bloques que nadie entiende. Los pasos son:</p><ol><li><b>Idea</b>: ¿de qué trata?, ¿quiénes son los personajes?, ¿dónde ocurre?, ¿para quién es?</li><li><b>Guion</b>: escribir qué pasa en cada momento, qué dice cada personaje y qué puede decidir el usuario.</li><li><b>Guion gráfico</b>: dibujar las escenas en viñetas.</li><li><b>Programar</b> escena a escena.</li><li><b>Probar, mejorar y compartir</b>.</li></ol><p>Una historia interactiva necesita, como cualquier historia, un <b>planteamiento</b> (presentación de personajes y lugar), un <b>nudo</b> (un problema o una decisión) y un <b>desenlace</b> (uno o varios finales). Lo mejor es empezar con algo pequeño, con dos o tres escenas, y ampliarlo cuando funcione.</p>`, svg: fases, video: { id: "rJ91tXDqWRM", titulo: "Historia animada en Scratch", canal: "Practicas TIC", vistas: 197394 } },
    { html: `<h3>1.3 El guion gráfico</h3><p>El <mark>guion gráfico</mark> (en inglés, «storyboard») es una serie de <b>viñetas</b> dibujadas, como un cómic, que muestran cada escena de la historia. Lo usan el cine, la publicidad y los estudios de videojuegos antes de empezar a producir.</p><p>En cada viñeta se dibuja el <b>fondo</b>, los <b>personajes</b> y su posición, y debajo se anota qué ocurre: qué dicen, qué sonido suena y qué puede hacer el usuario. Si hay una elección, se dibujan <b>flechas</b> hacia las viñetas de cada camino.</p><p>No hace falta dibujar bien: basta con figuras sencillas. Lo importante es que al mirarlo se entienda la historia completa y todas sus ramas. Con el guion gráfico se ve rápidamente cuántos fondos y objetos harán falta, qué mensajes habrá que enviar y qué partes pueden ser difíciles de programar. ¡Es mucho más fácil corregir un dibujo que un programa!</p>`, svg: storyboard },
    { html: `<h3>1.4 Eventos para interactuar</h3><p>Los <b>eventos</b> (bloques amarillos con forma de sombrero) son los que hacen que un programa reaccione a lo que hace el usuario:</p><ul><li><b>«al hacer clic en ⚑»</b>: empieza el proyecto.</li><li><b>«al presionar tecla …»</b>: reacciona a una tecla concreta o a cualquiera.</li><li><b>«al hacer clic en este objeto»</b>: reacciona cuando se hace clic sobre el personaje. Ideal para botones o personajes que hablan al tocarlos.</li><li><b>«cuando el fondo cambie a …»</b>: se ejecuta al empezar una escena.</li><li><b>«cuando el volumen &gt; …»</b> o «cronómetro &gt; …»: reaccionan al sonido del micrófono o al tiempo.</li><li><b>«al recibir …»</b>: reacciona a un mensaje.</li></ul><p>Un mismo objeto puede tener <b>varios programas</b>, cada uno con su evento, y todos pueden estar activos a la vez. Así, un personaje puede caminar por siempre y, además, hablar cuando se le hace clic.</p>`, svg: eventos },
    { html: `<h3>1.5 Objetos que responden al clic</h3><p>El evento <b>«al hacer clic en este objeto»</b> convierte cualquier personaje en un <b>botón</b>. Es la forma más sencilla de hacer un proyecto interactivo: un cuento en el que, al tocar cada personaje, este habla, suena o se mueve.</p><p>Ejemplo: «al hacer clic en este objeto: tocar sonido Pop, decir ¡Me has tocado! durante 1 segundo y cambiar efecto color por 25». Cada clic cambia un poco el color.</p><p>También se pueden crear <b>botones</b> de verdad: un objeto con forma de botón y el texto «Empezar», «Siguiente» o «Jugar otra vez». Al hacer clic, el botón envía un mensaje para que empiece la escena o se reinicie el juego.</p><p>Consejo de diseño: el usuario tiene que saber <b>qué puede tocar</b>. Se puede indicar con un texto («Toca a los animales»), con un pequeño efecto cuando el ratón pasa por encima, o haciendo que los objetos interactivos se muevan un poco para llamar la atención.</p>`, svg: clicObjeto },
    { html: `<h3>1.6 Los mensajes: coordinar objetos</h3><p>En una historia, los personajes tienen que actuar <b>coordinados</b>: uno habla y el otro responde; cuando termina una escena, empieza otra. Para eso se usan los <mark>mensajes</mark> (en la categoría Eventos):</p><ul><li><b>«enviar mensaje1»</b>: manda un aviso a todos los objetos y al escenario, y el programa sigue.</li><li><b>«enviar mensaje1 y esperar»</b>: manda el aviso y espera a que terminen todos los programas que lo reciben.</li><li><b>«al recibir mensaje1»</b>: el programa que empieza cuando llega ese aviso.</li></ul><p>Es como una <b>señal</b> o un silbato: un objeto avisa y los que estaban esperando ese aviso reaccionan. Conviene dar a los mensajes <b>nombres claros</b> («turno perro», «empieza escena 2», «fin del juego») en lugar de mensaje1, mensaje2…, para no perderse.</p>`, svg: mensajes, video: { id: "I5crrXa8mlA", titulo: "Scratch 2.0: enviar y recibir mensajes", canal: "AREATECNOLOGIA", vistas: 9002 } },
    { html: `<h3>1.7 Diálogos con mensajes</h3><p>Con «decir» y «esperar» se pueden hacer diálogos, pero si se cambia la duración de una frase, hay que recalcular todas las esperas. Con <b>mensajes</b> es mucho más fácil y fiable:</p><ol><li>El gato dice «¡Hola, Rex!» durante 2 segundos.</li><li>El gato envía «turno perro» y espera.</li><li>El perro, al recibir «turno perro», dice «¡Hola, Michi!» durante 2 segundos.</li><li>Cuando el perro termina, el gato continúa: «¡Vamos al parque!».</li></ol><p>El bloque «enviar y esperar» es clave: el gato no sigue hasta que el perro ha terminado de hablar. Así, aunque cambies los textos o los tiempos, el diálogo siempre irá en orden.</p><p>Este sistema de «turnos» se puede ampliar a muchos personajes: cada uno tiene su propio mensaje y habla cuando le toca. Es como un director de teatro dando paso a cada actor.</p>`, svg: dialogo },
    { html: `<h3>1.8 Escenas y elecciones</h3><p>Una historia suele tener varias <b>escenas</b>: lugares o momentos distintos. En Scratch, cada escena es un <b>fondo</b> del escenario. Para cambiar de escena se usa «cambiar fondo a …» o «siguiente fondo».</p><p>Lo interesante es dejar que el <b>usuario elija</b>. Por ejemplo, en un cruce de caminos:</p><ul><li>Con <b>«preguntar y esperar»</b> y una condición: «¿Río o cueva?»; si respuesta = río, cambiar al fondo Río; si no, al fondo Cueva.</li><li>Con <b>botones</b>: dos objetos («Río» y «Cueva») que, al hacer clic, cambian al fondo correspondiente.</li><li>Con <b>teclas</b>: «pulsa R para el río o C para la cueva».</li></ul><p>Cada elección abre una <b>rama</b> distinta de la historia. Cuantas más ramas, más rica es la experiencia, pero también más trabajo: por eso conviene dibujar el mapa de escenas como un diagrama de flujo antes de programar.</p>`, svg: escenas },
    { html: `<h3>2.1 Programar las elecciones</h3><p>Veamos cómo se programa una elección con «preguntar». En el escenario (o en el narrador), «al recibir cruce»: «preguntar ¿Río o cueva? y esperar»; «si respuesta = río entonces cambiar fondo a Río; si no, cambiar fondo a Cueva».</p><p>Hay que pensar en lo que puede escribir el usuario: ¿y si escribe «el río», «RIO» o «cueba»? Scratch no distingue mayúsculas, pero sí las palabras distintas. Algunas soluciones:</p><ul><li>Pedir una sola letra: «Escribe R o C».</li><li>Usar <b>botones</b> en lugar de texto, que evitan errores de escritura.</li><li>Repetir la pregunta <b>hasta que</b> la respuesta sea válida.</li></ul><p>Fíjate en que con «si… si no», cualquier respuesta que no sea «río» lleva a la cueva. A veces es lo que queremos; otras, es mejor comprobar las dos opciones y avisar si la respuesta no es ninguna de ellas.</p>`, svg: eleccion },
    { html: `<h3>2.2 Personajes en cada escena</h3><p>Cuando cambia el fondo, cada personaje debe saber si tiene que <b>aparecer</b>, <b>desaparecer</b> o <b>moverse</b>. Para eso es muy útil el evento <b>«cuando el fondo cambie a …»</b>.</p><p>Ejemplo: el murciélago solo vive en la cueva. Tiene dos programas: «cuando el fondo cambie a Cueva: mostrar y decir ¡Bienvenido a mi cueva!» y «cuando el fondo cambie a Río: esconder».</p><p>Una buena costumbre es que <b>todos los objetos</b> se coloquen y se escondan o muestren al pulsar la bandera verde, para que el proyecto empiece siempre en el mismo estado. Muchos errores de las historias interactivas vienen de personajes que se quedaron visibles o en un sitio raro de la partida anterior.</p><p>También se pueden usar los mensajes: el narrador envía «escena cueva» y cada personaje decide qué hacer al recibirlo. Las dos formas funcionan; lo importante es ser ordenado y coherente.</p>`, svg: fondoCambia },
    { html: `<h3>2.3 Animar con detalle: sonido y efectos</h3><p>Los detalles convierten una historia correcta en una historia que emociona:</p><ul><li><b>Sonidos</b>: pasos, puertas que se abren, voces grabadas con el micrófono. Se pueden editar (recortar, más alto, eco…).</li><li><b>Música de fondo</b>: una para cada escena, con «tocar sonido … hasta que termine» dentro de un «por siempre». Al cambiar de escena, «detener todos los sonidos».</li><li><b>Animaciones</b>: personajes que respiran o parpadean con disfraces, nubes que se desplazan, hojas que caen.</li><li><b>Efectos</b>: desvanecer para que un fantasma aparezca, brillo para el amanecer, color para la magia.</li><li><b>Transiciones</b>: un fundido a negro entre escenas, con un objeto negro que se hace opaco y luego transparente.</li></ul><p>Pero cuidado: demasiados efectos y sonidos a la vez cansan y distraen. Usa cada recurso con una intención.</p>`, svg: fundido, video: { id: "9OtVYJGaK0o", titulo: "Cómo hacer una animación en Scratch", canal: "Taller de Videojuegos", vistas: 98010 } },
    { html: `<h3>2.4 Probar, mejorar y compartir</h3><p>Antes de dar el proyecto por terminado, hay que <b>probarlo a fondo</b>:</p><ul><li>Recorre <b>todos los caminos</b> de la historia, no solo el tuyo favorito.</li><li>Pide a otra persona que lo juegue <b>sin explicarle nada</b> y fíjate en dónde se atasca o qué no entiende.</li><li>Comprueba que al pulsar la bandera verde todo vuelve a empezar bien.</li></ul>${rubrica}<p>Añade una pantalla de <b>instrucciones</b> y unos <b>créditos</b> al final, con tu alias y los recursos de otras personas que hayas usado (músicas, imágenes, remezclas). Después ya puedes <b>compartirlo</b> con tu clase o en la comunidad de Scratch, respetando siempre las normas de privacidad.</p>`, svg: probar },
  ],
  ejemplos: [
    { enunciado: "Haz que un perro ladre cuando se haga clic sobre él.", pasos: ["Evento: al hacer clic en este objeto.", "tocar sonido Ladrido; decir ¡Guau! 1 s."], resultado: "El perro funciona como un botón." },
    { enunciado: "Haz que, al pulsar la tecla n, la escena pase a ser de noche.", pasos: ["En el escenario: al presionar tecla n.", "cambiar fondo a Noche."], resultado: "Evento de teclado en el escenario." },
    { enunciado: "Coordina un diálogo: el gato pregunta y el perro responde, sin usar esperas calculadas.", pasos: ["Gato: decir ¿Jugamos? 2 s; enviar turno perro y esperar.", "Perro: al recibir turno perro, decir ¡Sí! 2 s."], resultado: "«Enviar y esperar» mantiene el orden." },
    { enunciado: "Al elegir «cueva», el murciélago debe aparecer. ¿Cómo?", pasos: ["Murciélago: cuando el fondo cambie a Cueva → mostrar.", "Al pulsar la bandera → esconder."], resultado: "Evento de cambio de fondo." },
    { enunciado: "Crea un botón «Jugar otra vez».", pasos: ["Objeto botón: al hacer clic en este objeto → enviar reiniciar.", "Cada objeto: al recibir reiniciar → volver a la posición y estado inicial."], resultado: "Un mensaje que reinicia todo." },
    { enunciado: "El usuario escribe «el rio» y la historia lo manda a la cueva. ¿Cómo se mejora?", pasos: ["La condición solo acepta «río».", "Pedir una letra (R/C) o usar botones."], resultado: "Evitar respuestas de texto libre." },
  ],
  errores: [
    "Empezar a programar sin guion ni guion gráfico.",
    "Coordinar diálogos solo con esperas, que se desajustan al cambiar un texto.",
    "Poner nombres poco claros a los mensajes (mensaje1, mensaje2…).",
    "Olvidar reiniciar posiciones, fondos y visibilidad al pulsar la bandera verde.",
    "No prever respuestas inesperadas del usuario al preguntar.",
    "Llenar el proyecto de sonidos y efectos que distraen de la historia.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Qué diferencia hay entre una animación lineal y una interactiva?", sol: "En la lineal solo se mira; en la interactiva el usuario participa y la historia responde." },
    { nivel: "básico", q: "Escribe las fases para crear una animación interactiva.", sol: "Idea, guion, guion gráfico, programar, probar y compartir." },
    { nivel: "básico", q: "¿Qué es un guion gráfico?", sol: "Una serie de viñetas dibujadas que muestran las escenas." },
    { nivel: "básico", q: "Nombra cuatro eventos de Scratch.", sol: "Al hacer clic en la bandera, al presionar tecla, al hacer clic en este objeto, cuando el fondo cambie a…" },
    { nivel: "básico", q: "¿Para qué sirven los mensajes?", sol: "Para coordinar objetos: uno avisa y los demás reaccionan." },
    { nivel: "básico", q: "¿Qué bloque recibe un mensaje?", sol: "«al recibir …»." },
    { nivel: "básico", q: "¿Qué es una escena en Scratch?", sol: "Un momento o lugar de la historia, normalmente un fondo." },
    { nivel: "básico", q: "¿Qué bloque cambia de escena?", sol: "«cambiar fondo a …» o «siguiente fondo»." },
    { nivel: "básico", q: "¿Puede un objeto tener varios programas a la vez?", sol: "Sí, cada uno con su evento." },
    { nivel: "básico", q: "Escribe tres partes de una historia.", sol: "Planteamiento, nudo y desenlace." },
    { nivel: "básico", q: "¿Qué debes incluir al final de un proyecto que usa recursos de otros?", sol: "Los créditos." },
    { nivel: "básico", q: "¿Qué evento usarías para que un personaje hable al tocarlo?", sol: "«al hacer clic en este objeto»." },
    { nivel: "medio", q: "¿Qué diferencia hay entre «enviar» y «enviar y esperar»?", sol: "El primero sigue enseguida; el segundo espera a que terminen los programas que reciben el mensaje." },
    { nivel: "medio", q: "Programa un diálogo de 3 frases entre dos personajes usando mensajes.", sol: "A dice, envía turno B y espera; B al recibir dice y envía turno A y espera…; A al recibir responde." },
    { nivel: "medio", q: "Programa un botón «Siguiente» que pase a la escena siguiente.", sol: "Botón: al hacer clic en este objeto → enviar siguiente escena; escenario: al recibir → siguiente fondo." },
    { nivel: "medio", q: "Programa una elección con preguntar entre «playa» y «montaña».", sol: "preguntar ¿Playa o montaña?; si respuesta = playa → fondo Playa; si no → fondo Montaña." },
    { nivel: "medio", q: "Un personaje solo debe aparecer en la escena del castillo. ¿Qué programas necesita?", sol: "Al pulsar bandera: esconder. Cuando el fondo cambie a Castillo: mostrar. Cuando cambie a otro: esconder." },
    { nivel: "medio", q: "Dibuja el guion gráfico (4 viñetas) de una historia con una elección.", sol: "Respuesta abierta: inicio, momento de elección, dos viñetas con cada camino (y flechas)." },
    { nivel: "medio", q: "¿Por qué conviene que todos los objetos se reinicien al pulsar la bandera verde?", sol: "Para que el proyecto empiece siempre igual y no queden restos de la partida anterior." },
    { nivel: "medio", q: "Programa música de fondo distinta para dos escenas.", sol: "Cuando el fondo cambie a A: detener sonidos, por siempre tocar MúsicaA. Igual para B." },
    { nivel: "medio", q: "Pon nombres claros a los mensajes de una historia con 3 escenas y un final.", sol: "Por ejemplo: «empieza bosque», «llega al cruce», «escena río», «escena cueva», «final»." },
    { nivel: "medio", q: "¿Qué ventaja tienen los botones frente a «preguntar» para elegir?", sol: "Evitan errores de escritura: el usuario solo hace clic." },
    { nivel: "medio", q: "Programa un fundido a negro entre dos escenas.", sol: "Objeto negro: desvanecer 100, mostrar, repetir 10 cambiar desvanecer −10, cambiar fondo, repetir 10 cambiar desvanecer +10, esconder." },
    { nivel: "avanzado", q: "Diseña el mapa (diagrama de flujo) de una historia con 2 elecciones y 3 finales.", sol: "Respuesta abierta: inicio → elección 1 → (rama A → final 1) / (rama B → elección 2 → final 2 o final 3)." },
    { nivel: "avanzado", q: "Programa una pregunta que se repita hasta que la respuesta sea R o C.", sol: "repetir hasta que respuesta = R o respuesta = C: preguntar «Escribe R o C»." },
    { nivel: "avanzado", q: "Un compañero dice que en su historia «a veces el perro habla antes de que el gato termine». ¿Qué le recomiendas?", sol: "Usar «enviar y esperar» o coordinar con mensajes en lugar de esperas calculadas." },
    { nivel: "avanzado", q: "Crea un cuento interactivo de 3 escenas en el que, en cada una, haya al menos un personaje que reaccione al clic.", sol: "Respuesta abierta: comprobar eventos de clic, cambios de fondo y mensajes." },
    { nivel: "avanzado", q: "Evalúa el proyecto de un compañero con la tabla de revisión del tema y escribe dos propuestas de mejora.", sol: "Respuesta abierta: comentarios respetuosos y concretos sobre historia, interacción, programación, diseño, sonido y créditos." },
    { nivel: "avanzado", q: "Explica qué relación hay entre los libros de «Elige tu propia aventura» y un programa.", sol: "Cada página es una escena, cada elección una condición y cada «ve a la página» un salto o mensaje." },
  ],
  quiz: [
    { q: "En una animación interactiva el usuario…", o: ["solo mira", "participa y decide", "no hace nada", "dibuja"], a: 1, e: "La historia responde." },
    { q: "El guion gráfico se hace…", o: ["al final", "antes de programar", "nunca", "solo en el cine"], a: 1, e: "Planificar." },
    { q: "Un guion gráfico está formado por…", o: ["bloques", "viñetas", "variables", "sonidos"], a: 1, e: "Como un cómic." },
    { q: "Los eventos tienen forma de…", o: ["C", "sombrero", "hexágono", "círculo"], a: 1, e: "Inician programas." },
    { q: "Para reaccionar al clic sobre un personaje:", o: ["al presionar tecla", "al hacer clic en este objeto", "al recibir", "por siempre"], a: 1, e: "Clic en objeto." },
    { q: "Para coordinar personajes se usan…", o: ["disfraces", "mensajes", "lápices", "fondos"], a: 1, e: "Enviar y recibir." },
    { q: "«enviar … y esperar»…", o: ["no espera", "espera a que terminen los receptores", "repite", "borra el mensaje"], a: 1, e: "Mantiene el orden." },
    { q: "El bloque que reacciona a un mensaje es…", o: ["enviar", "al recibir", "decir", "preguntar"], a: 1, e: "Receptor." },
    { q: "Una escena en Scratch suele ser…", o: ["un objeto", "un fondo", "un sonido", "una variable"], a: 1, e: "Fondo." },
    { q: "Para que el usuario elija escribiendo se usa…", o: ["decir", "preguntar y esperar", "mover", "sellar"], a: 1, e: "Respuesta." },
    { q: "Para que un personaje aparezca en una escena:", o: ["cuando el fondo cambie a … → mostrar", "por siempre esconder", "girar", "deslizar"], a: 0, e: "Evento de fondo." },
    { q: "Es buena idea que los mensajes se llamen…", o: ["mensaje1, mensaje2", "con nombres claros", "con números al azar", "igual todos"], a: 1, e: "Orden." },
    { q: "Para reiniciar todo se usa normalmente…", o: ["la señal roja", "la bandera verde", "un disfraz", "un sonido"], a: 1, e: "Estado inicial." },
    { q: "Un fundido a negro usa el efecto…", o: ["remolino", "desvanecer", "pixelar", "ojo de pez"], a: 1, e: "Transparencia." },
    { q: "Antes de compartir hay que…", o: ["borrar los fondos", "probar todos los caminos", "quitar el sonido", "cambiar el nombre"], a: 1, e: "Probar." },
    { q: "Los créditos sirven para…", o: ["ganar dinero", "citar recursos y autores", "borrar errores", "cambiar de escena"], a: 1, e: "Respeto." },
    { q: "Una historia necesita planteamiento, nudo y…", o: ["botones", "desenlace", "variables", "sonidos"], a: 1, e: "Final." },
    { q: "Las elecciones con botones evitan…", o: ["los sonidos", "errores de escritura", "los fondos", "los mensajes"], a: 1, e: "Solo clic." },
    { q: "Un objeto puede tener…", o: ["un solo programa", "varios programas a la vez", "ningún evento", "un solo disfraz"], a: 1, e: "Varios eventos." },
    { q: "«Elige tu propia aventura» eran…", o: ["videojuegos", "libros con elecciones", "películas", "robots"], a: 1, e: "Programas en papel." },
  ],
  examen: [
    { q: "Para que el perro hable solo después del gato:", o: ["esperas al azar", "enviar y esperar", "dos banderas", "un bucle"], a: 1, e: "Coordinación." },
    { q: "Para cambiar a la escena de noche con la tecla n:", o: ["al presionar tecla n → cambiar fondo a Noche", "por siempre noche", "decir noche", "girar"], a: 0, e: "Evento de teclado." },
    { q: "Si respuesta = río va al río; si no, a la cueva. El usuario escribe «mar». Va a…", o: ["el río", "la cueva", "ninguna", "error"], a: 1, e: "El si no lo recoge." },
    { q: "Para que un murciélago no aparezca en el río:", o: ["cuando el fondo cambie a Río → esconder", "mover 10", "cambiar color", "decir"], a: 0, e: "Evento de fondo." },
    { q: "Un botón «Siguiente» suele…", o: ["enviar un mensaje", "borrar objetos", "cambiar el tamaño", "girar"], a: 0, e: "Avisa al escenario." },
    { q: "La herramienta para planificar escenas es…", o: ["el lápiz", "el guion gráfico", "el cronómetro", "el cuentagotas"], a: 1, e: "Storyboard." },
    { q: "Si un personaje aparece en un sitio raro al empezar, falta…", o: ["un sonido", "reiniciarlo con la bandera verde", "un fondo", "un mensaje de fin"], a: 1, e: "Estado inicial." },
    { q: "Varios programas de un objeto…", o: ["no pueden ir a la vez", "pueden funcionar a la vez", "se borran", "dan error"], a: 1, e: "En paralelo." },
  ],
  feynman: ["Qué diferencia hay entre una animación lineal y una interactiva", "Para qué sirve el guion gráfico antes de programar", "Cómo funcionan los mensajes para coordinar personajes", "Cómo se programa una elección que cambia la escena"],
  figura: {
    titulo: "La animación interactiva en un vistazo",
    svg: resumen("Resumen: planificar, eventos, mensajes, escenas y elecciones, detalles y prueba", [
      ["Planificar", "idea · guion · guion gráfico", "var(--leaf)"],
      ["Eventos", "bandera · tecla · clic · cambio de fondo", CAT.eventos],
      ["Mensajes", "enviar (y esperar) · al recibir", "var(--sun)"],
      ["Escenas", "fondos · preguntar · botones", "var(--pen)"],
      ["Acabado", "sonido · efectos · probar · créditos", "var(--red)"],
    ]),
  },
  video: { id: "Ee6zISfSQfE", titulo: "Scratch: historia interactiva", canal: "Redint Getafe", vistas: 32085, megusta: 0, busqueda: "historia interactiva scratch mensajes" },
  mapa: mapa("INTERACTIVA", "var(--pen)", [
    ["Planificar", "guion · viñetas", "var(--leaf)"],
    ["Interactuar", "eventos · clic · teclas", CAT.eventos],
    ["Coordinar", "mensajes · turnos", "var(--sun)"],
    ["Escenas", "fondos · elecciones", "var(--red)"],
  ], 250),
  glosario: [
    ["Animación interactiva", "Animación que responde a lo que hace el usuario."],
    ["Guion", "Texto que describe qué ocurre y qué dice cada personaje."],
    ["Guion gráfico", "Viñetas dibujadas que muestran las escenas."],
    ["Evento", "Suceso que inicia un programa: clic, tecla, mensaje…"],
    ["Mensaje", "Aviso que un objeto envía para que otros reaccionen."],
    ["Enviar y esperar", "Enviar un mensaje y esperar a que los receptores terminen."],
    ["Al recibir", "Evento que se activa al llegar un mensaje."],
    ["Escena", "Momento o lugar de la historia, normalmente un fondo."],
    ["Elección", "Decisión del usuario que cambia la historia."],
    ["Rama", "Cada camino posible de una historia con elecciones."],
    ["Transición", "Efecto para pasar de una escena a otra."],
    ["Créditos", "Lista de autores y recursos usados."],
  ],
  situacion: {
    titulo: "Nuestra aventura interactiva",
    reto: "En parejas, vais a crear una historia interactiva en Scratch con al menos tres escenas, una elección que cambie la historia y dos finales distintos.",
    pasos: [
      "Pensad la idea, los personajes y el público al que va dirigida.",
      "Escribid el guion y dibujad el guion gráfico con las ramas.",
      "Preparad fondos, objetos y sonidos.",
      "Programad escena a escena con eventos y mensajes con nombres claros.",
      "Probad todos los caminos con otra pareja, mejorad y añadid instrucciones y créditos.",
    ],
    producto: "Una historia interactiva en Scratch con su guion gráfico.",
    evaluacion: ["La historia tiene planteamiento, nudo y finales.", "La elección del usuario cambia la historia.", "Usa eventos y mensajes de forma ordenada.", "Está probada, cuidada y con créditos."],
  },
  tarjetas: [
    ["Interactiva", "El usuario decide"], ["Guion", "Qué pasa y qué se dice"], ["Guion gráfico", "Viñetas"],
    ["Evento", "Lo que inicia un programa"], ["Clic en objeto", "Botones y personajes"], ["Mensaje", "Aviso entre objetos"],
    ["Enviar y esperar", "Mantiene el orden"], ["Al recibir", "Reaccionar al aviso"], ["Escena", "Un fondo"],
    ["Elección", "Rama de la historia"], ["Transición", "Fundido entre escenas"], ["Créditos", "Citar autores"],
  ],
  familias: ["Leed juntos un libro de «elige tu aventura» o inventad uno oral.", "Jugad con la historia interactiva de vuestro hijo o hija y dadle ideas.", "Dibujad juntos un guion gráfico de un día especial.", "Hablad sobre cómo los videojuegos responden a las decisiones del jugador."],
  profesores: {
    saberes: "Proyecto de animación interactiva: planificación (guion y guion gráfico), eventos de usuario, comunicación entre objetos mediante mensajes, escenas y elecciones, sonido y efectos, prueba, evaluación entre iguales y créditos (materia optativa de Programación y robótica, en el marco del RD 217/2022).",
    ideas: ["Plantilla de guion gráfico con ramas.", "Coevaluación con la tabla de revisión del tema.", "Colaboración con Lengua para el guion.", "Muestra final de historias interactivas en el aula."],
  },
  fuentes: [RD, { t: "Scratch (MIT): página oficial", url: "https://scratch.mit.edu/" }, wiki("Guion gráfico", "Guion_gráfico"), wiki("Elige tu propia aventura", "Elige_tu_propia_aventura")],
  revisado: REV,
};
