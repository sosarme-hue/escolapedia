// Programación y robótica 2º ESO: Scratch, primeros pasos. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV, bl, SC } = require("./_eso2a");
const M = "Programación y robótica";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Scratch: primeros pasos",
  minutos: 50,
  objetivos: ["Conocer qué es Scratch y cómo se accede a él", "Identificar las zonas de la pantalla y las categorías de bloques", "Mover objetos usando pasos, giros y coordenadas", "Cambiar disfraces, fondos y sonidos y crear una primera animación"],
  claves: ["Scratch", "objeto", "escenario", "fondo", "disfraz", "bloque", "programa", "coordenadas", "bandera verde", "lápiz", "proyecto"],
  pregunta: {
    texto: "¿Cómo puede un gato dibujado «caminar» por la pantalla si en realidad es solo una imagen quieta?",
    respuesta: "Con dos trucos que se combinan. Por un lado, el programa lo <b>mueve</b> unos pocos pasos cada vez, muy rápido. Por otro, <b>cambia de disfraz</b>: el gato de Scratch tiene dos dibujos con las patas en posiciones distintas, y al alternarlos parece que camina. Es el mismo principio que los dibujos animados: muchas imágenes quietas, una tras otra.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es Scratch?</h3><p><mark>Scratch</mark> es un <b>lenguaje de programación por bloques</b> creado en 2007 por el grupo Lifelong Kindergarten del <b>MIT</b> (Instituto Tecnológico de Massachusetts). Es gratuito, está traducido a más de 70 idiomas y lo usan millones de estudiantes de todo el mundo para crear <b>historias interactivas, animaciones, juegos, música y simulaciones</b>. Se puede usar directamente en el navegador, entrando en <b>scratch.mit.edu</b> y pulsando «Crear», o descargando la aplicación para usarla sin internet. Si te creas una cuenta (los menores necesitan el correo de un adulto), puedes guardar tus proyectos en la nube y compartirlos en la comunidad de Scratch, donde otras personas pueden verlos, comentarlos y hacer una <b>remezcla</b>, es decir, una copia propia para modificarla. Su lema resume la idea: <i>imagina, programa, comparte</i>.</p>`,
    },
    {
      html: `<h3>La pantalla de Scratch</h3><p>Al abrir un proyecto, la pantalla tiene varias zonas. A la izquierda está la <mark>paleta de bloques</mark>, con las instrucciones ordenadas por <b>categorías de colores</b>. En el centro está el <mark>área de programación</mark>, donde se arrastran y encajan los bloques para formar programas. Arriba a la derecha está el <mark>escenario</mark>, el rectángulo donde ocurre todo, con la <b>bandera verde</b> (para empezar) y el <b>botón rojo</b> (para parar). Debajo del escenario está la <b>lista de objetos</b> (en inglés, <i>sprites</i>): los personajes y elementos del proyecto, como el gato que aparece al empezar, y a su lado el selector de <b>fondos</b>. Encima del área de programación hay tres pestañas: <b>Código</b>, <b>Disfraces</b> (para dibujar o cambiar el aspecto del objeto) y <b>Sonidos</b>. Cada objeto tiene sus propios programas, disfraces y sonidos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pantalla de Scratch: paleta de bloques a la izquierda, área de programación en el centro, escenario arriba a la derecha y lista de objetos debajo">${BG}
        <rect x="8" y="10" width="244" height="160" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>
        <rect x="14" y="18" width="54" height="146" rx="5" fill="${SC.mov}" fill-opacity=".14" stroke="${SC.mov}" stroke-width="1.5"/>${t(41, 92, "bloques", { size: 9.5, color: SC.mov })}
        ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="20" y="${28 + i * 10}" width="40" height="6" rx="2" fill="${Object.values(SC)[i]}"/>`).join("")}
        <rect x="72" y="18" width="90" height="146" rx="5" fill="var(--muted)" fill-opacity=".08" stroke="var(--muted)" stroke-width="1.5"/>${t(117, 156, "programación", { size: 9.5 })}
        ${bl(80, 40, 70, SC.eve, "al ⚑", 16)}${bl(80, 58, 70, SC.mov, "mover", 16)}
        <rect x="166" y="18" width="80" height="62" rx="5" fill="#fff" stroke="var(--pen)" stroke-width="1.5"/>${t(206, 54, "escenario", { size: 9.5, color: "var(--pen)" })}<circle cx="178" cy="28" r="4" fill="var(--leaf)"/><circle cx="190" cy="28" r="4" fill="var(--red)"/>
        <rect x="166" y="86" width="80" height="78" rx="5" fill="#e6a100" fill-opacity=".12" stroke="#b8860b" stroke-width="1.5"/>${t(206, 130, "objetos", { size: 9.5, color: "#b8860b" })}</svg>`,
      video: { id: "kIR_xWzONtk", titulo: "Scratch: tutorial completo desde cero en español para principiantes", canal: "Yo Androide", vistas: 529817 },
    },
    {
      html: `<h3>Las categorías de bloques</h3><p>Los bloques se agrupan por colores según lo que hacen. Los de <b>Movimiento</b> (azul) mueven y giran el objeto. Los de <b>Apariencia</b> (morado) hacen que hable o piense con bocadillos, cambie de disfraz, de tamaño o de efecto, y aparezca o se esconda. Los de <b>Sonido</b> (rosa) tocan sonidos y cambian el volumen. Los de <b>Eventos</b> (amarillo) indican cuándo empieza un programa. Los de <b>Control</b> (naranja) esperan, repiten y deciden. Los de <b>Sensores</b> (azul claro) detectan si el objeto toca algo, si se pulsa una tecla o la posición del ratón. Los de <b>Operadores</b> (verde) hacen cálculos y comparaciones. Y los de <b>Variables</b> (naranja oscuro) guardan datos como los puntos. Además, en el botón de abajo a la izquierda se pueden añadir <b>extensiones</b>, como el <b>Lápiz</b> para dibujar, la Música, el Texto a voz o las que controlan placas y robots como micro:bit o LEGO.</p>`,
    },
    {
      html: `<h3>Programar un objeto</h3><p>Para programar se <b>arrastran los bloques</b> desde la paleta al área de programación y se encajan unos debajo de otros: cuando están lo bastante cerca, se pegan solos. Un programa empieza siempre por un bloque de <mark>evento</mark>, con forma de sombrero, por ejemplo «al hacer clic en la bandera verde». Para probar un bloque suelto basta con hacer clic sobre él. Para borrar un bloque, se arrastra de vuelta a la paleta. Si haces clic con el botón derecho en el área, puedes «ordenar bloques» o añadir un comentario para explicar qué hace el programa. El primer programa típico: al hacer clic en la bandera, decir «¡Hola!» durante 2 segundos, mover 10 pasos y tocar el sonido «miau». Puedes cambiar los números y los textos que hay dentro de los bloques haciendo clic en los huecos blancos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Primer programa: al hacer clic en la bandera, decir Hola durante 2 segundos, mover 10 pasos, tocar sonido miau; el gato saluda en el escenario">${BG}
        <path d="M14 30 q 30 -16 60 0 h 90 v 22 h -126 l -4 4 h -10 l -4 -4 h -6 Z" fill="${SC.eve}" stroke="var(--ink)" stroke-opacity=".25"/>${t(22, 46, "al hacer clic en ⚑", { size: 10, color: "#fff", anchor: "start" })}
        ${bl(14, 56, 156, SC.apa, "decir ¡Hola! durante 2 s")}${bl(14, 80, 120, SC.mov, "mover 10 pasos")}${bl(14, 104, 140, SC.son, "tocar sonido miau")}
        <rect x="180" y="40" width="70" height="90" rx="6" fill="#fff" stroke="var(--muted)" stroke-width="1.5"/>
        <circle cx="214" cy="100" r="14" fill="#f2a33a"/><path d="M203 90 l 2 -10 l 6 6 M225 90 l -2 -10 l -6 6" fill="#f2a33a"/><circle cx="209" cy="98" r="2" fill="var(--ink)"/><circle cx="219" cy="98" r="2" fill="var(--ink)"/>
        <rect x="186" y="50" width="56" height="20" rx="8" fill="var(--card)" stroke="var(--muted)"/>${t(214, 64, "¡Hola!", { size: 10 })}
        ${t(130, 156, "clic en la bandera y ¡en marcha!", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Moverse por el escenario: las coordenadas</h3><p>El escenario de Scratch mide <b>480 × 360</b> puntos y funciona como unos <mark>ejes de coordenadas</mark> de matemáticas. Cada punto se indica con dos números: <b>x</b>, la posición horizontal, que va de −240 (borde izquierdo) a 240 (borde derecho); e <b>y</b>, la posición vertical, que va de −180 (abajo) a 180 (arriba). El centro del escenario es el punto <b>(0, 0)</b>. Así, (200, 150) está arriba a la derecha y (−200, −150), abajo a la izquierda. Con el bloque <b>«ir a x: … y: …»</b> el objeto salta a un punto exacto; con <b>«deslizar en 1 segundos a x: … y: …»</b> va hasta allí poco a poco; y con <b>«cambiar x en 10»</b> se mueve 10 puntos a la derecha (o a la izquierda si es −10). Cuando mueves un objeto con el ratón, los bloques de movimiento se actualizan solos con su posición, lo que ayuda mucho.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escenario de Scratch con los ejes de coordenadas: x de menos 240 a 240, y de menos 180 a 180, centro en 0,0 y un punto en 120,90">${BG}
        <rect x="30" y="20" width="200" height="150" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/>
        <path d="M30 95 H 230 M130 20 V 170" stroke="var(--muted)" stroke-width="1.5"/>
        ${t(36, 90, "−240", { size: 8.5, anchor: "start", color: "var(--muted)" })}${t(224, 90, "240", { size: 8.5, anchor: "end", color: "var(--muted)" })}${t(136, 32, "180", { size: 8.5, anchor: "start", color: "var(--muted)" })}${t(136, 164, "−180", { size: 8.5, anchor: "start", color: "var(--muted)" })}
        <circle cx="130" cy="95" r="3.5" fill="var(--ink)"/>${t(134, 108, "(0, 0)", { size: 9, anchor: "start" })}
        <circle cx="180" cy="57" r="5" fill="var(--red)"/><path d="M180 57 V 95 M180 57 H 130" stroke="var(--red)" stroke-dasharray="3 3"/>${t(186, 54, "(120, 90)", { size: 9.5, color: "var(--red)", anchor: "start" })}
        ${t(244, 99, "x", { size: 11, color: "var(--pen)", anchor: "start" })}${t(130, 14, "y", { size: 11, color: "var(--pen)" })}</svg>`,
      video: { id: "EFOjJwJSxlU", titulo: "Coordenadas X e Y en Scratch 3.0", canal: "Docente Pro", vistas: 9577 },
    },
    {
      html: `<h3>Pasos, giros y dirección</h3><p>Además de las coordenadas, un objeto tiene una <mark>dirección</mark>, el sentido hacia el que mira, medida en grados: <b>90</b> es hacia la derecha (el valor inicial), <b>−90</b> hacia la izquierda, <b>0</b> hacia arriba y <b>180</b> hacia abajo. El bloque <b>«mover 10 pasos»</b> avanza en la dirección en la que mira el objeto, y los bloques <b>«girar ↻ 15 grados»</b> y <b>«girar ↺ 15 grados»</b> lo giran a derecha o izquierda. Con <b>«apuntar en dirección 90»</b> se fija la dirección. Un problema frecuente: al girar hacia la izquierda, el gato queda boca abajo. Para evitarlo se usa el bloque <b>«fijar estilo de rotación a izquierda-derecha»</b>. Y para que un objeto no se salga del escenario existe el bloque <b>«rebotar si toca un borde»</b>, que lo hace dar la vuelta automáticamente.</p>`,
    },
    {
      html: `<h3>Disfraces, fondos y sonidos</h3><p>Cada objeto puede tener varios <mark>disfraces</mark>: imágenes distintas que se pueden cambiar con los bloques <b>«cambiar a disfraz…»</b> y <b>«siguiente disfraz»</b>. Si alternamos dos disfraces mientras el objeto se mueve, conseguimos una <b>animación</b>, como un gato que camina o un pájaro que aletea. En la pestaña Disfraces hay un <b>editor de dibujo</b> para modificar los disfraces o crear los tuyos, y una gran biblioteca de objetos ya hechos; también puedes subir una imagen o hacer una foto. El <mark>escenario</mark> tiene <b>fondos</b>, que también se eligen de una biblioteca, se dibujan o se suben, y se cambian con «cambiar fondo a…», por ejemplo para pasar de un nivel a otro de un juego. En la pestaña Sonidos se pueden elegir sonidos de la biblioteca, grabar tu voz con el micrófono o subir un archivo, y luego usarlos con «tocar sonido… hasta que termine» o «iniciar sonido».</p>`,
    },
    {
      html: `<h3>Dibujar con el lápiz</h3><p>La extensión <mark>Lápiz</mark> convierte al objeto en una especie de tortuga que dibuja al moverse. Se añade desde el botón de extensiones y aporta bloques verdes oscuros: <b>«borrar todo»</b> limpia el escenario; <b>«bajar lápiz»</b> hace que el objeto deje rastro al moverse; <b>«subir lápiz»</b> deja de dibujar; y otros bloques fijan el <b>color</b> y el <b>tamaño</b> del lápiz. Para dibujar un cuadrado de 100 pasos de lado: borrar todo, ir a x: 0 y: 0, apuntar en dirección 90, bajar lápiz y repetir 4 veces { mover 100 pasos; girar 90 grados }. Cambiando el número de repeticiones y el ángulo se dibujan otros polígonos: para un polígono de <b>n lados</b> se gira <b>360 / n grados</b>. Si se repite muchas veces un giro pequeño y se cambia el color en cada vuelta, salen figuras y espirales muy vistosas. Es una forma divertida de practicar a la vez matemáticas y programación.</p>${tabla(["Figura", "Repetir", "Girar"], [["Triángulo", "3", "120°"], ["Cuadrado", "4", "90°"], ["Pentágono", "5", "72°"], ["Hexágono", "6", "60°"], ["Octógono", "8", "45°"], ["Casi un círculo", "36", "10°"]])}`,
    },
    {
      html: `<h3>Guardar y compartir un proyecto</h3><p>Un proyecto de Scratch incluye todos sus objetos, programas, disfraces, sonidos y fondos. Para no perder el trabajo, conviene ponerle un <b>nombre</b> claro en el cuadro de arriba y <b>guardarlo a menudo</b>: si tienes cuenta, con «Archivo → Guardar ahora» se guarda en la nube; sin cuenta, con «Archivo → Guardar en tu ordenador» se descarga un archivo con la extensión <b>.sb3</b>, que luego se puede volver a abrir con «Cargar desde tu ordenador». Cuando el proyecto está listo, el botón <b>«Compartir»</b> lo publica en la web de Scratch. Antes conviene escribir unas <b>instrucciones</b> claras (qué teclas usar) y unas <b>notas y créditos</b>, reconociendo de quién son las ideas, imágenes o sonidos que has usado. En la comunidad hay que respetar las normas: ser amable, dar ideas constructivas, no compartir datos personales y dar crédito cuando se remezcla el trabajo de otros.</p>`,
    },
  ],
  figura: {
    titulo: "Las categorías de bloques de Scratch",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Ocho categorías de bloques de Scratch con su color y un ejemplo: movimiento, apariencia, sonido, eventos, control, sensores, operadores y variables">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Movimiento", "mover 10 pasos", SC.mov], ["Apariencia", "decir ¡Hola!", SC.apa], ["Sonido", "tocar sonido", SC.son], ["Eventos", "al hacer clic en ⚑", SC.eve], ["Control", "repetir 10", SC.con], ["Sensores", "¿tocando borde?", SC.sen], ["Operadores", "número al azar", SC.ope], ["Variables", "sumar a puntos 1", SC.var]].map(([a, b, col], i) => { const x = 20 + (i % 4) * 152; const y = 22 + Math.floor(i / 4) * 100; return `<rect x="${x}" y="${y}" width="140" height="86" rx="12" fill="${col}" fill-opacity=".14" stroke="${col}" stroke-width="2.5"/><circle cx="${x + 20}" cy="${y + 26}" r="9" fill="${col}"/>${t(x + 36, y + 31, a, { size: 14, anchor: "start" })}${t(x + 70, y + 66, b, { size: 11, weight: 400 })}`; }).join("")}
    </svg>`,
  },
  video: { id: "D-nW4jvzRr8", titulo: "Guía para principiantes de Scratch (muy simple)", canal: "ZonxScratch", vistas: 1702365, megusta: 0, busqueda: "Scratch primeros pasos principiantes" },
  ejemplos: [
    { enunciado: "Haz que el gato vaya al centro, mire a la derecha y avance hasta el borde rebotando.",
      pasos: ["Al hacer clic en la bandera: ir a x: 0 y: 0; apuntar en dirección 90.", "Fijar estilo de rotación a izquierda-derecha.", "Por siempre: mover 5 pasos; rebotar si toca un borde."],
      resultado: "El gato va y viene sin quedar boca abajo." },
    { enunciado: "Anima al gato para que parezca que camina.",
      pasos: ["Al hacer clic en la bandera: por siempre.", "Dentro: mover 10 pasos; siguiente disfraz.", "Esperar 0,2 segundos para que no vaya demasiado rápido."],
      resultado: "Alterna disfraces mientras avanza." },
    { enunciado: "Dibuja un hexágono con el lápiz.",
      pasos: ["Borrar todo; bajar lápiz.", "Repetir 6 veces: mover 60 pasos; girar 60 grados (360 / 6).", "Subir lápiz."],
      resultado: "Hexágono regular." },
  ],
  errores: [
    "Olvidar el bloque de evento: el programa no arranca con la bandera.",
    "Confundir x (horizontal) con y (vertical).",
    "No fijar el estilo de rotación y que el gato quede boca abajo.",
    "No añadir esperas en las animaciones: van tan rápido que no se ven.",
    "No guardar el proyecto y perder el trabajo.",
  ],
  ejercicios: [
    { q: "¿Quién creó Scratch y qué se puede hacer con él?", sol: "El MIT; historias, animaciones, juegos, música y simulaciones." },
    { q: "Nombra las zonas principales de la pantalla de Scratch.", sol: "Paleta de bloques, área de programación, escenario y lista de objetos." },
    { q: "¿De qué color son los bloques de Eventos y para qué sirven?", sol: "Amarillos; indican cuándo empieza un programa." },
    { q: "¿Cuáles son las coordenadas del centro del escenario?", sol: "(0, 0)." },
    { q: "¿Dónde está el punto (−200, 150)?", sol: "Arriba a la izquierda." },
    { q: "¿Hacia dónde mira un objeto con dirección 180?", sol: "Hacia abajo." },
    { q: "Diferencia «ir a x: y:» y «deslizar en 1 segundos a x: y:».", sol: "El primero salta al punto; el segundo va poco a poco." },
    { q: "¿Qué es un disfraz y cómo se hace una animación con ellos?", sol: "Una imagen del objeto; se alternan disfraces con «siguiente disfraz» mientras se mueve." },
    { q: "¿Cuántos grados se gira para dibujar un pentágono?", sol: "72 grados (360 / 5)." },
    { q: "¿Qué extensión tienen los archivos de Scratch guardados en el ordenador?", sol: ".sb3." },
  ],
  quiz: [
    { q: "Scratch es un lenguaje…", o: ["por bloques", "de texto", "máquina"], a: 0, e: "Por bloques." },
    { q: "Para empezar un programa se pulsa…", o: ["el botón rojo", "la bandera verde", "la tecla Esc"], a: 1, e: "La bandera verde." },
    { q: "Los personajes de Scratch se llaman…", o: ["objetos", "fondos", "bloques"], a: 0, e: "Objetos (sprites)." },
    { q: "Los bloques de Movimiento son…", o: ["azules", "rosas", "verdes"], a: 0, e: "Azules." },
    { q: "El escenario mide…", o: ["480 × 360", "100 × 100", "1920 × 1080"], a: 0, e: "480 × 360." },
    { q: "La x va de…", o: ["−240 a 240", "−180 a 180", "0 a 480"], a: 0, e: "Horizontal." },
    { q: "Dirección 90 significa mirar…", o: ["arriba", "a la derecha", "a la izquierda"], a: 1, e: "Derecha." },
    { q: "Para no salirse del escenario se usa…", o: ["rebotar si toca un borde", "esconder", "borrar todo"], a: 0, e: "Rebotar." },
    { q: "Para dibujar hay que añadir la extensión…", o: ["Música", "Lápiz", "Vídeo"], a: 1, e: "Lápiz." },
    { q: "Para un cuadrado se repite…", o: ["4 veces 90°", "3 veces 120°", "6 veces 60°"], a: 0, e: "4 · 90 = 360." },
  ],
  examen: [
    { q: "Si el gato se mueve a la izquierda y queda boca abajo, falta…", o: ["fijar estilo de rotación", "un sonido", "un fondo"], a: 0, e: "Izquierda-derecha." },
    { q: "«cambiar x en −10» mueve el objeto…", o: ["a la izquierda", "arriba", "a la derecha"], a: 0, e: "x disminuye." },
    { q: "Hacer una copia propia de un proyecto ajeno se llama…", o: ["remezcla", "pirateo", "depuración"], a: 0, e: "Remezcla, dando crédito." },
  ],
  feynman: ["Cuáles son las zonas de la pantalla de Scratch", "Cómo funcionan las coordenadas del escenario", "Cómo se hace una animación con disfraces"],
  mapa: mapa("SCRATCH", "var(--eso)", [
    ["Pantalla", "bloques · área · escenario · objetos", "var(--pen)"],
    ["Movimiento", "pasos · giros · x, y", SC.mov],
    ["Apariencia", "disfraces · fondos · sonidos", SC.apa],
    ["Proyecto", "guardar .sb3 · compartir", "var(--leaf)"],
  ], 290),
  tarjetas: [
    ["Scratch", "Lenguaje por bloques del MIT."],
    ["Objeto (sprite)", "Personaje o elemento con sus programas."],
    ["Escenario", "Zona de 480 × 360 donde ocurre todo."],
    ["Coordenadas", "x horizontal (−240 a 240), y vertical (−180 a 180)."],
    ["Dirección", "90 derecha, −90 izquierda, 0 arriba, 180 abajo."],
    ["Disfraz", "Imagen de un objeto; se alternan para animar."],
    ["Lápiz", "Extensión para dibujar al moverse."],
    ["Remezcla", "Copia propia de un proyecto ajeno, con crédito."],
  ],
  familias: ["Entrad juntos en scratch.mit.edu y explorad proyectos de la comunidad.", "Cread una felicitación animada para un cumpleaños familiar.", "Grabad vuestras voces y usadlas como sonidos de un proyecto."],
  profesores: {
    saberes: "Programación por bloques: entorno de Scratch, objetos y escenario, eventos, movimiento y coordenadas, apariencia, sonido, extensión Lápiz, gestión y publicación responsable de proyectos (RD 217/2022 y currículos autonómicos de Programación y robótica).",
    ideas: ["Reto de polígonos y espirales con el Lápiz.", "Animación de presentación personal con dos objetos que dialogan.", "Búsqueda del tesoro en coordenadas: llevar al gato a puntos dados."],
  },
  fuentes: [RD, wiki("Scratch (lenguaje de programación)", "Scratch_(lenguaje_de_programación)"), { t: "Scratch (MIT): web oficial", url: "https://scratch.mit.edu/" }],
  revisado: REV,
};
