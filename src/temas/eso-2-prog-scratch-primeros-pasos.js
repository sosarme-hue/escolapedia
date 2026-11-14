// Programación y robótica 2º ESO · Scratch: primeros pasos. Tema nivel libro (lote 8).
// Contenido y dibujos propios: bloques de Scratch y esquemas de _eso2L8 y dibujos de la versión anterior del tema.
const H = require("./_eso2L8");
const S = "prog-scratch-primeros-pasos";
const [vTuto, vCoord] = H.videos(S);
const K = H.CAT;

const queEs = H.radial("Qué es Scratch: lenguaje de bloques gratuito del MIT, con comunidad en línea, que funciona en el navegador o sin conexión y está en muchos idiomas", "SCRATCH", ["Lenguaje de bloques", "Gratis (MIT, 2007)", "En el navegador", "Sin conexión", "Comunidad en línea", "En 70 idiomas"], "var(--pen)");
const seguro = H.comparar("Normas para usar la comunidad de Scratch con seguridad: sí a compartir proyectos y comentar con respeto; no a dar datos personales ni copiar sin citar", [
  ["Sí", ["nombre de usuario sin datos", "comentar con respeto", "citar al autor"], "var(--leaf)"],
  ["No", ["nombre real ni dirección", "fotos personales", "insultos o spam"], "var(--red)"],
], "En la comunidad");
const objetos = H.cajas("Objetos y escenario: los objetos se mueven y tienen disfraces; el escenario tiene fondos y está detrás", [
  ["Objeto", "personaje o cosa", "var(--pen)"],
  ["Disfraces", "aspectos del objeto", K.apariencia],
  ["Escenario", "fondo, detrás de todo", "var(--leaf)"],
  ["Fondos", "aspectos del escenario", "var(--sun)"],
], "¿Quién hay en el proyecto?");
const formas = H.cajas("Formas de los bloques de Scratch: sombrero para empezar, pila para acciones, en C para repetir o decidir, reportero redondo para valores, booleano hexagonal para preguntas y tapa para terminar", [
  ["Sombrero", "empieza un programa", K.eventos],
  ["Pila", "una acción", K.movimiento],
  ["En C", "abraza bloques", K.control],
  ["Reportero", "redondo: un valor", K.operadores],
  ["Booleano", "hexagonal: sí o no", K.sensores],
  ["Tapa", "termina", "var(--red)"],
], "La forma dice cómo encaja");
const mover = H.scratch("Programa de movimiento: al hacer clic en la bandera ir a x 0 y 0, apuntar en dirección 90, mover 100 pasos, girar 90 grados, deslizar en 1 segundo a x 150 y 100", [
  ["al hacer clic en ⚑", "eventos"], ["ir a x: 0 y: 0", "movimiento"], ["apuntar en dirección 90", "movimiento"], ["mover 100 pasos", "movimiento"], ["girar ↻ 90 grados", "movimiento"], ["deslizar en 1 s a x: 150 y: 100", "movimiento"], ["rebotar si toca un borde", "movimiento"],
], "Bloques de Movimiento");
const animar = H.scratch("Animación con disfraces: al hacer clic en la bandera, repetir 10 veces siguiente disfraz, mover 10 pasos y esperar 0,2 segundos", [
  ["al hacer clic en ⚑", "eventos"], ["cambiar disfraz a gato-a", "apariencia"], ["repetir 10", "control"], ["siguiente disfraz", "apariencia", 1], ["mover 10 pasos", "movimiento", 1], ["esperar 0.2 segundos", "control", 1], ["decir ¡He llegado! 2 s", "apariencia"],
], "Andar con disfraces");
const sonido = H.scratch("Bloques de sonido: al presionar la tecla espacio, iniciar sonido salto, fijar volumen al 80 por ciento y tocar sonido miau hasta que termine", [
  ["al presionar tecla espacio", "eventos"], ["fijar volumen al 80 %", "sonido"], ["iniciar sonido Salto", "sonido"], ["cambiar y en 50", "movimiento"], ["esperar 0.3 segundos", "control"], ["cambiar y en −50", "movimiento"], ["tocar sonido Miau hasta que termine", "sonido"],
], "Sonido y movimiento");
const fondos = H.scratch("Programa del escenario: al hacer clic en la bandera cambiar fondo a portada, esperar 3 segundos, cambiar fondo a bosque e iniciar sonido de música", [
  ["al hacer clic en ⚑", "eventos"], ["cambiar fondo a Portada", "apariencia"], ["esperar 3 segundos", "control"], ["cambiar fondo a Bosque", "apariencia"], ["por siempre", "control"], ["tocar sonido Música hasta que termine", "sonido", 1],
], "Programar el escenario");
const pintura = H.compara("Editor de pintura de Scratch: modo vectorial, con formas que se pueden estirar sin perder calidad, frente a modo mapa de bits, formado por píxeles", ["Vectorial", "var(--pen)", ["formas y líneas", "se estira sin pixelar", "fácil de editar", "recomendado"]], ["Mapa de bits", "var(--red)", ["cuadritos (píxeles)", "se pixela al ampliar", "como una foto", "para texturas"]], "Dos formas de dibujar");
const guardar = H.pasos("Buenas prácticas al trabajar con Scratch: poner título, guardar a menudo, nombrar objetos, ordenar los bloques, escribir comentarios y compartir con instrucciones", [
  "Pon título al proyecto",
  "Guarda a menudo (o descarga una copia)",
  "Da nombre a objetos y disfraces",
  "Ordena los programas (clic derecho → Limpiar)",
  "Añade comentarios que expliquen",
  "Comparte con instrucciones y créditos",
], "Trabajar con orden");
const pruebas = H.scratch("Programa para probar bloques: al hacer clic en este objeto, decir mi posición x e y con el bloque unir y pensar Hmm durante 1 segundo", [
  ["al hacer clic en este objeto", "eventos"], ["decir (unir (posición en x) (posición en y)) 2 s", "apariencia"], ["pensar Hmm… 1 s", "apariencia"], ["cambiar efecto color en 25", "apariencia"], ["cambiar tamaño en 10", "apariencia"],
], "Explorar con un clic");

module.exports = {
  materia: H.MATERIA,
  curso: H.CURSO,
  titulo: "Scratch: primeros pasos",
  minutos: 110,
  objetivos: [
    "Conocer qué es Scratch, su comunidad y las normas para usarla con seguridad",
    "Identificar las partes de la pantalla de Scratch: bloques, área de programas, escenario y objetos",
    "Reconocer las categorías y las formas de los bloques y cómo encajan",
    "Crear un primer programa con eventos, movimiento, apariencia y sonido",
    "Situar objetos en el escenario con coordenadas x e y",
    "Dibujar objetos y fondos y guardar, compartir y reinventar proyectos de forma responsable",
  ],
  claves: ["Scratch", "objeto", "escenario", "disfraz", "fondo", "bloque", "categoría", "evento", "bandera verde", "coordenadas", "x", "y", "dirección", "vectorial", "reinventar"],
  pregunta: {
    texto: "¿Por qué el gato de Scratch no se mueve aunque hayas puesto el bloque «mover 10 pasos» en el área de programas?",
    respuesta: "Porque un bloque suelto no se ejecuta solo: necesita un <mark>evento</mark> que lo ponga en marcha. Hay que encajarlo debajo de un bloque sombrero, como «al hacer clic en ⚑», y después pulsar la <b>bandera verde</b>. También puedes hacer clic directamente sobre el bloque para probarlo. Además, 10 pasos son muy pocos en un escenario de 480 de ancho: casi no se nota.",
  },
  lectura: {
    titulo: "Un gato que ya tiene más de 100 millones de proyectos",
    html: `<p>En el Laboratorio de Medios del <b>MIT</b> (Instituto Tecnológico de Massachusetts), un equipo dirigido por el profesor <b>Mitchel Resnick</b> se hizo una pregunta: ¿por qué programar parece tan difícil? Su respuesta fue que los lenguajes de texto obligaban a los principiantes a pelearse con comas, paréntesis y mensajes de error antes de poder crear nada divertido.</p>
<p>En 2007 presentaron <b>Scratch</b>, un lenguaje en el que los programas se construyen <b>encajando bloques</b> como piezas de LEGO. Si dos bloques no pueden ir juntos, simplemente no encajan. El nombre viene del <i>scratching</i> de los DJ, que mezclan trozos de discos para crear música nueva: en Scratch también se pueden mezclar proyectos de otros para crear algo distinto.</p>
<p>Hoy Scratch es gratuito, está traducido a más de 70 idiomas y su comunidad ha compartido <b>más de 100 millones de proyectos</b>: juegos, historias animadas, simulaciones científicas, tarjetas de felicitación y hasta conciertos. Muchas programadoras y programadores profesionales escribieron su primer programa moviendo al gato naranja. En este tema darás tus primeros pasos con él.</p>`,
  },
  bloques: [
    {
      html: `<h3>3.1 ¿Qué es Scratch?</h3><p><mark>Scratch</mark> es un <b>lenguaje de programación por bloques</b> creado por el MIT y publicado en 2007. Es gratuito y está pensado para aprender a programar creando historias, juegos y animaciones. Los programas se construyen arrastrando y encajando bloques de colores; cada bloque es una instrucción.</p><p>Se puede usar de dos maneras:</p><p>• <b>En línea</b>, desde el navegador, en la web scratch.mit.edu. No hay que instalar nada y los proyectos se guardan en la nube si tienes cuenta.<br>• <b>Sin conexión</b>, con la aplicación <b>Scratch Desktop</b>, que se instala en el ordenador. Los proyectos se guardan como archivos con extensión <b>.sb3</b>.</p><p>Aunque parezca un juego, Scratch es un lenguaje completo: tiene eventos, bucles, condicionales, variables, listas, operadores y hasta bloques propios. Además, con sus <b>extensiones</b> puede dibujar con un lápiz, reconocer la voz, traducir textos o controlar placas y robots como micro:bit o LEGO.</p>`,
      svg: queEs,
    },
    {
      html: `<h3>3.2 La comunidad de Scratch y la seguridad</h3><p>Una de las cosas más especiales de Scratch es su <b>comunidad</b>: millones de personas comparten sus proyectos, los comentan y aprenden unas de otras. Para participar hace falta una cuenta, que en el instituto suele crear el profesorado para la clase.</p><p>Como en cualquier red en línea, hay que seguir unas <b>normas</b>:</p><p>• Elige un <b>nombre de usuario</b> que no incluya tu nombre real, tu edad ni tu ciudad.<br>• No compartas <b>datos personales</b>, fotos tuyas ni tu contraseña.<br>• Comenta con <b>respeto</b>: critica el proyecto, nunca a la persona, y propón mejoras.<br>• Si algo te molesta, usa el botón <b>Informar</b> y cuéntaselo a un adulto.<br>• Respeta la <b>autoría</b>: si usas trabajo de otros, cítalo.</p><p>Scratch tiene moderadores que revisan los contenidos, pero la mejor protección es tu propio sentido común.</p>`,
      svg: seguro,
    },
    {
      html: `<h3>3.3 La pantalla de Scratch</h3><p>Al abrir el editor de Scratch («Crear») verás cuatro zonas principales:</p><p>• La <b>paleta de bloques</b>, a la izquierda: los bloques organizados por categorías de colores.<br>• El <b>área de programas</b>, en el centro: donde arrastras y encajas los bloques para construir los programas.<br>• El <b>escenario</b>, arriba a la derecha: donde se ve el resultado. Encima tiene la <b>bandera verde</b>, que inicia el proyecto, y la <b>señal roja</b>, que lo detiene. También hay un botón para verlo a pantalla completa.<br>• La <b>lista de objetos</b>, debajo del escenario: los personajes del proyecto y, a su lado, el escenario.</p><p>Arriba de la paleta hay tres pestañas: <b>Código</b>, para programar; <b>Disfraces</b> (o Fondos, si has elegido el escenario), para dibujar; y <b>Sonidos</b>, para grabar o editar sonidos. Cada objeto tiene sus propios programas, disfraces y sonidos.</p>`,
      svg: H.viejo(S, 1),
    },
    {
      html: `<h3>3.4 Objetos y escenario</h3><p>En Scratch, los personajes y elementos que se mueven se llaman <mark>objetos</mark> (en inglés, <i>sprites</i>). El gato que aparece al empezar es un objeto, pero puedes añadir muchos más: elegirlos de la biblioteca, dibujarlos, subir una imagen o pedir uno <b>sorpresa</b>.</p><p>Cada objeto tiene:</p><p>• Un <b>nombre</b>, que conviene cambiar por uno claro («Jugador», «Enemigo»).<br>• Una <b>posición</b> (x, y), una <b>dirección</b> y un <b>tamaño</b>.<br>• Sus <mark>disfraces</mark>: los distintos aspectos que puede tener. Cambiar de disfraz rápidamente crea una animación.<br>• Sus propios <b>programas</b> y <b>sonidos</b>.</p><p>El <mark>escenario</mark> es el fondo sobre el que actúan los objetos. No se mueve, pero tiene <b>fondos</b> (sus «disfraces») y también puede tener programas, por ejemplo para cambiar de pantalla o poner música. En un proyecto solo hay un escenario, pero puede haber muchos objetos.</p>`,
      svg: objetos,
    },
    {
      html: `<h3>3.5 Las categorías y las formas de los bloques</h3><p>Los bloques están agrupados en <b>categorías</b> de colores: <b>Movimiento</b> (azul), <b>Apariencia</b> (morado), <b>Sonido</b> (rosa), <b>Eventos</b> (amarillo), <b>Control</b> (naranja), <b>Sensores</b> (azul claro), <b>Operadores</b> (verde), <b>Variables</b> (naranja oscuro) y <b>Mis bloques</b> (rosa fuerte).</p><p>Además del color, la <b>forma</b> de cada bloque indica cómo encaja:</p><p>• <b>Sombrero</b>: tiene la parte de arriba redondeada y empieza un programa («al hacer clic en ⚑»).<br>• <b>Pila</b>: una acción con muescas arriba y abajo («mover 10 pasos»).<br>• <b>En C</b>: abraza otros bloques («repetir 10», «si… entonces»).<br>• <b>Reportero</b>: redondeado; da un valor, como un número o un texto («posición en x»).<br>• <b>Booleano</b>: hexagonal; responde sí o no («¿tocando borde?»).<br>• <b>Tapa</b>: termina un programa y no deja encajar nada debajo («detener todos»).</p>`,
      svg: formas,
    },
    {
      html: `<h3>3.6 El primer programa</h3><p>Un programa de Scratch es una <b>pila de bloques</b> encajados, que empieza siempre con un bloque de <mark>evento</mark> (un sombrero). Los bloques se ejecutan de arriba abajo.</p><p>Para hacer tu primer programa:</p><p>1. Arrastra desde <b>Eventos</b> el bloque «al hacer clic en ⚑».<br>2. Desde <b>Apariencia</b>, encaja debajo «decir ¡Hola! durante 2 segundos».<br>3. Desde <b>Movimiento</b>, añade «mover 10 pasos».<br>4. Desde <b>Sonido</b>, añade «tocar sonido Miau».<br>5. Pulsa la bandera verde y observa el escenario.</p><p>Si quieres probar un bloque suelto, haz clic sobre él y se ejecutará una vez. Para quitar un bloque, arrástralo de vuelta a la paleta. Si arrastras un bloque del medio de una pila, se llevan también todos los de debajo; para separar uno solo, arrástralo y luego vuelve a encajar el resto. Experimenta sin miedo: con <b>Ctrl + Z</b> se deshacen los cambios.</p>`,
      svg: H.viejo(S, 3),
      video: vTuto,
    },
    {
      html: `<h3>3.7 Las coordenadas del escenario</h3><p>El escenario de Scratch mide <b>480 pasos de ancho</b> y <b>360 de alto</b>. Para indicar dónde está un objeto se usan dos números, sus <mark>coordenadas</mark>:</p><p>• <b>x</b>: la posición horizontal. Va de <b>−240</b> (borde izquierdo) a <b>240</b> (borde derecho).<br>• <b>y</b>: la posición vertical. Va de <b>−180</b> (abajo) a <b>180</b> (arriba).</p><p>El centro del escenario es el punto <b>(0, 0)</b>. Un objeto en (120, 90) está en la parte de arriba a la derecha; uno en (−200, −150), abajo a la izquierda. Es el mismo sistema de ejes cartesianos que usas en Matemáticas.</p><p>Debajo del escenario, en la información del objeto, puedes ver y escribir sus coordenadas. Cuando mueves un objeto con el ratón, los bloques «ir a x: y:» de la paleta se actualizan con su posición: un truco muy útil para colocar personajes al empezar.</p>`,
      svg: H.viejo(S, 4),
      video: vCoord,
    },
    {
      html: `<h3>3.8 Mover objetos</h3><p>La categoría <b>Movimiento</b> tiene los bloques para desplazar y girar los objetos:</p><p>• «<b>mover 10 pasos</b>»: avanza en la dirección hacia la que apunta el objeto. Con números negativos retrocede.<br>• «<b>girar 15 grados</b>»: gira a la derecha (↻) o a la izquierda (↺).<br>• «<b>apuntar en dirección 90</b>»: fija la dirección. En Scratch, 90 es a la derecha, −90 a la izquierda, 0 arriba y 180 abajo.<br>• «<b>ir a x: y:</b>»: salta a un punto. «<b>deslizar en 1 segundos a x: y:</b>» va hasta allí de forma suave.<br>• «<b>cambiar x en 10</b>» y «<b>cambiar y en 10</b>»: se mueven solo en horizontal o en vertical, sin importar la dirección.<br>• «<b>rebotar si toca un borde</b>»: da la vuelta al llegar al límite.</p><p>Con «fijar estilo de rotación» decides si el objeto gira entero, solo se da la vuelta a izquierda y derecha, o no gira: útil para que un personaje no camine boca abajo.</p>`,
      svg: mover,
    },
    {
      html: `<h3>3.9 Disfraces y animación</h3><p>La categoría <b>Apariencia</b> controla cómo se ve un objeto. Los bloques «<b>decir</b>» y «<b>pensar</b>» muestran bocadillos de texto, durante unos segundos o hasta que otro bloque los cambie.</p><p>Para <mark>animar</mark> un personaje se cambian sus disfraces rápidamente, como en los dibujos animados: «<b>siguiente disfraz</b>» pasa al siguiente y «<b>cambiar disfraz a…</b>» elige uno concreto. Si alternas los dos disfraces del gato mientras se mueve, parece que camina. Un bloque «esperar» entre cambios regula la velocidad de la animación.</p><p>Otros bloques de apariencia cambian el <b>tamaño</b> («fijar tamaño al 50 %»), aplican <b>efectos</b> (color, ojo de pez, remolino, fantasma para hacerlo transparente…), <b>muestran o esconden</b> el objeto y lo envían <b>al frente</b> o <b>atrás</b> cuando varios objetos se solapan. El bloque «quitar efectos gráficos» devuelve el aspecto original.</p>`,
      svg: animar,
    },
    {
      html: `<h3>3.10 Sonidos</h3><p>Cada objeto puede tener sus propios sonidos. En la pestaña <b>Sonidos</b> puedes elegirlos de la biblioteca, <b>grabarlos</b> con el micrófono o subir un archivo, y después editarlos: recortarlos, cambiar la velocidad, añadir eco, subir o bajar el volumen o invertirlos.</p><p>Los dos bloques principales de la categoría <b>Sonido</b> parecen iguales, pero no lo son:</p><p>• «<b>iniciar sonido</b>»: empieza a sonar y el programa <b>sigue</b> inmediatamente con el bloque siguiente. Sirve para efectos que acompañan una acción, como un salto.<br>• «<b>tocar sonido hasta que termine</b>»: el programa <b>espera</b> a que acabe el sonido antes de seguir. Sirve, por ejemplo, para la música de fondo dentro de un bucle «por siempre».</p><p>También hay bloques para fijar o cambiar el <b>volumen</b>, aplicar efectos de tono y detener todos los sonidos. Con la extensión <b>Música</b> se pueden tocar notas e instrumentos.</p>`,
      svg: sonido,
    },
    {
      html: `<h3>3.11 Fondos y programas del escenario</h3><p>El escenario funciona casi como un objeto más, con algunas diferencias: no se puede mover ni girar, y en lugar de disfraces tiene <mark>fondos</mark>. Para elegir un fondo, pulsa el botón de la esquina inferior derecha de la pantalla: puedes escogerlo de la biblioteca, dibujarlo o subir una imagen.</p><p>Al seleccionar el escenario, en la pestaña Código aparecen sus propios bloques. Es buena idea poner en el escenario los programas que afectan a todo el proyecto, por ejemplo:</p><p>• Mostrar una <b>portada</b> al empezar y cambiar al fondo del juego después de unos segundos.<br>• Tocar la <b>música de fondo</b> en un bucle.<br>• Cambiar de <b>nivel</b> o mostrar la pantalla de «Fin».</p><p>Los objetos pueden reaccionar a los cambios de fondo con el evento «<b>cuando el fondo cambie a…</b>». Así se coordinan las escenas de una historia: cuando aparece el fondo «Bosque», el lobo entra en escena.</p>`,
      svg: fondos,
    },
    {
      html: `<h3>3.12 El editor de pintura</h3><p>En la pestaña <b>Disfraces</b> (o <b>Fondos</b>) hay un editor para dibujar o modificar imágenes. Tiene herramientas de pincel, línea, círculo, rectángulo, texto, relleno, borrador y selección. Funciona en dos modos:</p><p>• <b>Vectorial</b>: las imágenes están hechas de <b>formas</b> (líneas, curvas, figuras). Se pueden mover, deformar y ampliar sin perder calidad. Es el modo recomendado para personajes.<br>• <b>Mapa de bits</b>: las imágenes están hechas de <b>píxeles</b>, cuadritos de color, como una foto. Al ampliarlas se ven los cuadritos («se pixelan»), pero permiten efectos de pintura más libres.</p><p>Un detalle importante es el <b>centro del disfraz</b>, marcado con una pequeña cruz: es el punto alrededor del cual gira el objeto y el que se usa para sus coordenadas. Si el dibujo no está centrado, el objeto girará de forma extraña. Para crear una animación, duplica un disfraz y cambia solo un detalle, como la posición de las piernas.</p>`,
      svg: pintura,
    },
    {
      html: `<h3>3.13 Explorar y probar</h3><p>La mejor forma de aprender Scratch es <b>experimentar</b>. Algunas costumbres que ayudan:</p><p>• Haz clic sobre un bloque o una pila para ver qué hace, sin necesidad de pulsar la bandera.<br>• Cambia los números de los bloques y observa la diferencia: ¿qué pasa si mueves 100 pasos en vez de 10?, ¿y −10?<br>• Marca la casilla junto a los bloques reporteros, como «posición en x», para ver su valor en el escenario mientras el programa funciona.<br>• Usa «decir» para mostrar valores y comprobar si el programa hace lo que crees.<br>• Consulta los <b>tutoriales</b> integrados (botón con el icono de bombilla) y las tarjetas de actividades del sitio web.</p><p>Probar y equivocarse no es perder el tiempo: es exactamente como trabajan los programadores. Cada vez que algo no sale como esperabas, has descubierto cómo funciona realmente un bloque.</p>`,
      svg: pruebas,
    },
    {
      html: `<h3>3.14 Guardar, compartir y reinventar</h3><p>Con una cuenta, el proyecto se guarda en la nube con «<b>Guardar ahora</b>». Sin cuenta, o para tener una copia, se usa «Archivo → <b>Guardar en tu ordenador</b>», que descarga un archivo .sb3 que luego se puede volver a cargar. Guarda a menudo para no perder trabajo.</p><p>Cuando un proyecto está listo, se puede <b>compartir</b>. En su página conviene escribir <b>instrucciones</b> (cómo se juega, qué teclas se usan) y <b>notas y créditos</b> (quién ha hecho qué, de dónde salen las imágenes o los sonidos).</p><p>Cualquier proyecto compartido se puede <mark>reinventar</mark> (<i>remix</i>): se crea una copia propia para modificarla. Scratch indica automáticamente de qué proyecto procede, pero es de buena educación agradecerlo en los créditos y aportar algo nuevo. Antes de compartir, revisa también el orden: nombres claros para los objetos, bloques bien colocados (clic derecho → «Limpiar bloques») y <b>comentarios</b> que expliquen las partes difíciles.</p>`,
      svg: guardar,
    },
  ],
  figura: H.figura(S),
  video: { id: "5OUb91fDKXw", titulo: "Primeros pasos para usar Scratch 3.0 desde cero: introducción a Scratch", canal: "Laita Digital", vistas: 166946, busqueda: "scratch 3.0 tutorial principiantes interfaz" },
  ejemplos: [
    { enunciado: "Haz que el gato salude, camine hasta el centro y maúlle al pulsar la bandera.", pasos: ["Evento: «al hacer clic en ⚑».", "«ir a x: −180 y: 0» para colocarlo a la izquierda.", "«decir ¡Hola! durante 2 segundos».", "«deslizar en 2 segundos a x: 0 y: 0».", "«tocar sonido Miau hasta que termine»."], resultado: "Un programa de 5 bloques que siempre empieza igual gracias a «ir a»." },
    { enunciado: "¿En qué zona del escenario está un objeto en (−150, 120)? ¿Y en (200, −100)?", pasos: ["x negativa → mitad izquierda; y positiva → mitad de arriba.", "x positiva → derecha; y negativa → abajo."], resultado: "(−150, 120): arriba a la izquierda. (200, −100): abajo a la derecha." },
    { enunciado: "Anima al gato para que camine 10 pasos de animación con sus dos disfraces.", pasos: ["«al hacer clic en ⚑».", "«repetir 10» y dentro: «siguiente disfraz», «mover 10 pasos», «esperar 0,2 segundos».", "La espera evita que la animación vaya demasiado rápida."], resultado: "El gato avanza 100 pasos moviendo las patas." },
    { enunciado: "El gato camina hacia la izquierda pero aparece boca abajo. ¿Cómo se arregla?", pasos: ["Al apuntar en dirección −90, el objeto gira 180° completo.", "Se usa «fijar estilo de rotación a izquierda-derecha».", "Ahora solo se da la vuelta como en un espejo."], resultado: "Con el estilo izquierda-derecha camina derecho en los dos sentidos." },
    { enunciado: "Haz que el escenario muestre una portada 3 segundos y luego el fondo del juego con música.", pasos: ["Selecciona el escenario.", "«al hacer clic en ⚑», «cambiar fondo a Portada», «esperar 3 segundos».", "«cambiar fondo a Juego».", "«por siempre» con «tocar sonido Música hasta que termine» dentro."], resultado: "Portada, cambio de escena y música en bucle desde el escenario." },
    { enunciado: "Al pulsar espacio, el gato debe saltar con un sonido. ¿«iniciar sonido» o «tocar sonido hasta que termine»?", pasos: ["El sonido debe oírse mientras el gato sube y baja.", "Si usamos «tocar… hasta que termine», el gato esperaría al final del sonido para saltar.", "Con «iniciar sonido», el sonido empieza y el salto ocurre a la vez."], resultado: "«iniciar sonido Salto» seguido de «cambiar y en 50», esperar y «cambiar y en −50»." },
  ],
  errores: [
    "Dejar bloques sueltos sin un evento arriba: no se ejecutan al pulsar la bandera.",
    "Confundir x con y: x es horizontal (de −240 a 240) e y es vertical (de −180 a 180).",
    "Olvidar colocar los objetos al empezar con «ir a x: y:»: cada vez que se pulsa la bandera empiezan donde se quedaron.",
    "Usar «tocar sonido hasta que termine» cuando el programa debe seguir mientras suena: entonces se usa «iniciar sonido».",
    "Programar en el objeto equivocado: cada objeto tiene sus propios programas; hay que mirar cuál está seleccionado.",
    "Compartir proyectos con datos personales o reinventar sin dar créditos al autor original.",
  ],
  ejercicios: H.nivelar([
    ["¿Qué es Scratch, quién lo creó y en qué año?", "Es un lenguaje de programación por bloques, gratuito, creado por el Laboratorio de Medios del MIT y publicado en 2007."],
    ["Nombra las cuatro zonas principales de la pantalla de Scratch.", "Paleta de bloques, área de programas, escenario y lista de objetos."],
    ["¿Para qué sirven la bandera verde y la señal roja?", "La bandera verde inicia los programas que empiezan con «al hacer clic en ⚑»; la señal roja detiene todo."],
    ["¿Qué es un objeto y qué es un disfraz?", "Un objeto es un personaje o elemento del proyecto que puede tener programas. Un disfraz es cada uno de los aspectos que puede tener ese objeto."],
    ["¿Qué valores puede tomar x en el escenario? ¿Y y?", "x va de −240 a 240 y y va de −180 a 180. El centro es (0, 0)."],
    ["Escribe el color de las categorías Movimiento, Eventos, Control y Apariencia.", "Movimiento: azul. Eventos: amarillo. Control: naranja. Apariencia: morado."],
    ["¿Qué forma tiene un bloque que empieza un programa? Pon un ejemplo.", "Forma de sombrero, con la parte de arriba redondeada. Ejemplo: «al hacer clic en ⚑»."],
    ["Escribe tres normas para usar la comunidad de Scratch con seguridad.", "No usar el nombre real en el usuario, no compartir datos personales ni fotos, y comentar siempre con respeto (y avisar a un adulto o usar «Informar» si algo molesta)."],
    ["¿Qué extensión tienen los archivos de Scratch guardados en el ordenador?", ".sb3."],
    ["¿Hacia dónde apunta un objeto con dirección 90? ¿Y con 0?", "Con 90, hacia la derecha. Con 0, hacia arriba."],
    ["Escribe un programa para que el gato diga «Hola», espere 1 segundo y diga «Me llamo Gato».", "«al hacer clic en ⚑» · «decir Hola durante 2 segundos» · «esperar 1 segundo» · «decir Me llamo Gato durante 2 segundos»."],
    ["¿Qué diferencia hay entre «mover 10 pasos» y «cambiar x en 10»?", "«mover» avanza en la dirección hacia la que apunta el objeto; «cambiar x en 10» siempre mueve 10 a la derecha, sin importar la dirección."],
    ["Un objeto está en (50, 50). ¿Dónde estará después de «cambiar x en −100» y «cambiar y en −80»?", "x = 50 − 100 = −50; y = 50 − 80 = −30. Estará en (−50, −30), abajo a la izquierda del centro."],
    ["¿Qué diferencia hay entre «iniciar sonido» y «tocar sonido hasta que termine»?", "«iniciar sonido» lo pone en marcha y el programa sigue enseguida; «tocar sonido hasta que termine» espera a que acabe antes de seguir."],
    ["Explica qué son los bloques reportero y booleano y pon un ejemplo de cada uno.", "El reportero es redondeado y da un valor (por ejemplo «posición en x»). El booleano es hexagonal y responde sí o no (por ejemplo «¿tocando borde?»)."],
    ["Escribe un programa que haga que el gato vaya a las cuatro esquinas del escenario.", "«ir a x: −200 y: 150» · «deslizar en 1 s a x: 200 y: 150» · «deslizar a x: 200 y: −150» · «deslizar a x: −200 y: −150» · «deslizar a x: −200 y: 150»."],
    ["¿Para qué sirve «fijar estilo de rotación a izquierda-derecha»?", "Para que el objeto, al cambiar de dirección, solo se dé la vuelta horizontalmente y no aparezca boca abajo."],
    ["Explica la diferencia entre el modo vectorial y el mapa de bits del editor de pintura.", "El vectorial usa formas que se pueden ampliar sin perder calidad; el mapa de bits usa píxeles, como una foto, y se pixela al ampliar."],
    ["¿Qué ocurre si haces clic sobre un bloque suelto del área de programas?", "El bloque (o la pila entera) se ejecuta una vez. Es útil para probar qué hace."],
    ["¿Qué es reinventar un proyecto y qué debes hacer si lo haces?", "Crear una copia propia de un proyecto compartido para modificarlo. Hay que dar créditos al autor original y aportar algo nuevo."],
    ["Programa una animación de un pájaro que vuela con dos disfraces de alas arriba y abajo.", "«al hacer clic en ⚑» · «por siempre»: «siguiente disfraz», «mover 5 pasos», «rebotar si toca un borde», «esperar 0,15 segundos»."],
    ["Explica por qué conviene poner «ir a x: y:» al principio de cada programa.", "Para que los objetos empiecen siempre en el mismo sitio. Si no, cada vez que pulsas la bandera empiezan donde se quedaron la vez anterior."],
    ["Diseña una pequeña historia de 2 escenas: en la primera el gato está en casa y en la segunda en la playa. Escribe los programas del escenario y del gato.", "Escenario: ⚑ · fondo Casa · esperar 4 s · fondo Playa. Gato: ⚑ · decir «Qué aburrido» 2 s · y «cuando el fondo cambie a Playa»: decir «¡Al agua!» y deslizar hacia el mar."],
    ["Escribe un programa que haga crecer un globo un 10 % cada vez que se haga clic sobre él y que diga «¡Pum!» al llegar a 200 %.", "«al hacer clic en este objeto» · «cambiar tamaño en 10» · «si tamaño > 200 entonces» «decir ¡Pum! 1 s», «esconder»."],
    ["Calcula cuántos pasos recorre un objeto que va de (−240, 0) a (240, 0). ¿Y de (0, −180) a (0, 180)?", "En horizontal: 240 − (−240) = 480 pasos. En vertical: 180 − (−180) = 360 pasos. Son el ancho y el alto del escenario."],
    ["¿Por qué un objeto puede girar de forma extraña aunque el programa esté bien? ¿Cómo se arregla?", "Porque el centro del disfraz no está en el centro del dibujo y el objeto gira alrededor de ese punto. Se arregla centrando el dibujo sobre la cruz del editor."],
    ["Programa un objeto que dibuje un camino de ida y vuelta: va de la izquierda a la derecha con «mover» y vuelve, 3 veces.", "«ir a x: −200 y: 0» · «apuntar en dirección 90» · «repetir 3»: «repetir 40: mover 10 pasos», «girar 180 grados» (o «rebotar si toca un borde»), con estilo de rotación izquierda-derecha."],
    ["Propón cómo usar los efectos de apariencia para que un fantasma aparezca poco a poco.", "Empezar con «fijar efecto fantasma a 100» (invisible) y luego «repetir 10: cambiar efecto fantasma en −10, esperar 0,1 s»."],
    ["Compara Scratch en línea y Scratch Desktop: ¿cuándo usarías cada uno?", "En línea no hay que instalar nada y se puede compartir y guardar en la nube; Desktop funciona sin internet y guarda archivos .sb3. Usaría Desktop si no hay conexión y la versión en línea para compartir."],
    ["Escribe un programa de presentación personal (sin datos privados) con al menos un evento, un movimiento, un cambio de disfraz, un sonido y un cambio de fondo.", "Por ejemplo: ⚑ · fondo Inicio · ir a (−150, 0) · decir «Hola, me gusta el baloncesto» · deslizar al centro · siguiente disfraz · iniciar sonido Aplausos · cambiar fondo a Pista. Combina las categorías trabajadas."],
  ]),
  quiz: H.test([
    ["Scratch fue creado por…", ["el MIT", "Google", "Microsoft", "Apple"], "Laboratorio de Medios del MIT, 2007."],
    ["En Scratch, los programas se construyen…", ["encajando bloques", "escribiendo texto", "con ceros y unos", "dibujando circuitos"], "Lenguaje por bloques."],
    ["Los personajes de un proyecto se llaman…", ["objetos", "fondos", "escenarios", "bloques"], "En inglés, sprites."],
    ["Los aspectos de un objeto son sus…", ["disfraces", "fondos", "sonidos", "programas"], "Cambiarlos crea animaciones."],
    ["El escenario tiene…", ["fondos", "disfraces", "coordenadas negativas solo", "objetos dentro"], "Equivalen a sus disfraces."],
    ["El centro del escenario es…", ["(0, 0)", "(240, 180)", "(−240, −180)", "(100, 100)"], "Ejes cartesianos."],
    ["La x del escenario va de…", ["−240 a 240", "0 a 480", "−180 a 180", "0 a 360"], "480 de ancho."],
    ["La y del escenario va de…", ["−180 a 180", "−240 a 240", "0 a 360", "0 a 180"], "360 de alto."],
    ["Un objeto en (−100, −100) está…", ["abajo a la izquierda", "arriba a la derecha", "arriba a la izquierda", "abajo a la derecha"], "x e y negativas."],
    ["La dirección 90 apunta hacia…", ["la derecha", "arriba", "la izquierda", "abajo"], "0 es arriba."],
    ["Los bloques de Eventos son de color…", ["amarillo", "azul", "morado", "verde"], "Y muchos tienen forma de sombrero."],
    ["Un bloque hexagonal es un…", ["booleano: responde sí o no", "evento", "bloque en C", "reportero de números"], "Como «¿tocando borde?»."],
    ["Un bloque en forma de C…", ["abraza otros bloques", "empieza un programa", "da un número", "termina un programa"], "Como «repetir 10»."],
    ["«cambiar x en 10» mueve el objeto…", ["10 a la derecha", "10 hacia donde apunta", "10 hacia arriba", "10 grados"], "Solo cambia la x."],
    ["«siguiente disfraz» repetido sirve para…", ["animar", "cambiar de fondo", "borrar el objeto", "subir el volumen"], "Como los dibujos animados."],
    ["«tocar sonido hasta que termine»…", ["espera a que acabe el sonido", "sigue sin esperar", "repite el sonido siempre", "graba un sonido"], "«iniciar sonido» no espera."],
    ["En el modo vectorial del editor, las imágenes…", ["se amplían sin perder calidad", "están hechas de píxeles", "no se pueden mover", "son siempre en blanco y negro"], "Están hechas de formas."],
    ["El efecto «fantasma» hace que el objeto…", ["se vuelva transparente", "cambie de color", "se haga grande", "dé vueltas"], "Útil para aparecer o desaparecer."],
    ["Reinventar un proyecto es…", ["hacer una copia propia para modificarla", "borrarlo", "copiarlo sin decir nada", "denunciarlo"], "Remix, con créditos."],
    ["Los archivos de Scratch descargados tienen extensión…", [".sb3", ".doc", ".exe", ".mp3"], "Scratch 3."],
  ], 3),
  examen: H.test([
    ["Un objeto en (30, 40) recibe «cambiar x en −50». Queda en…", ["(−20, 40)", "(30, −10)", "(80, 40)", "(−20, −10)"], "Solo cambia la x."],
    ["Un bloque suelto sin evento arriba…", ["no se ejecuta con la bandera", "se ejecuta siempre", "da error", "borra el proyecto"], "Necesita un sombrero."],
    ["Para que un personaje empiece siempre en el mismo sitio se usa…", ["«ir a x: y:» al principio", "«rebotar si toca un borde»", "«siguiente disfraz»", "«esperar»"], "Inicializar la posición."],
    ["Si el gato camina boca abajo hacia la izquierda, se usa…", ["fijar estilo de rotación izquierda-derecha", "cambiar tamaño", "efecto fantasma", "cambiar fondo"], "Solo voltea."],
    ["El programa de la música de fondo de todo el juego suele ir en…", ["el escenario", "cada objeto", "la paleta", "el editor de pintura"], "Afecta a todo el proyecto."],
    ["La distancia horizontal de un borde al otro del escenario es…", ["480 pasos", "240 pasos", "360 pasos", "180 pasos"], "−240 a 240."],
    ["El centro del disfraz marca…", ["el punto alrededor del cual gira el objeto", "el color principal", "el sonido", "el fondo"], "Y sus coordenadas."],
    ["Para que un salto suene mientras el gato sube se usa…", ["iniciar sonido", "tocar sonido hasta que termine", "detener todos los sonidos", "fijar volumen"], "No espera."],
  ], 1),
  feynman: ["Qué es Scratch y cómo se usa su comunidad con seguridad", "Qué hay en cada zona de la pantalla de Scratch", "Cómo funcionan las coordenadas x e y del escenario", "Cómo se anima un personaje con disfraces", "Qué diferencia hay entre iniciar un sonido y tocarlo hasta que termine"],
  mapa: H.mapa("SCRATCH", "var(--eso)", [
    ["Pantalla", "bloques · programas · escenario · objetos", "var(--pen)"],
    ["Bloques", "categorías de color · formas", "#b8860b"],
    ["Escenario", "x de −240 a 240 · y de −180 a 180", "var(--red)"],
    ["Crear", "disfraces · sonidos · compartir", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Scratch", "Lenguaje de bloques gratuito del MIT (2007)."],
    ["Objeto", "Personaje o elemento con sus programas, disfraces y sonidos."],
    ["Disfraz", "Cada aspecto de un objeto."],
    ["Escenario", "Fondo del proyecto; tiene fondos y programas."],
    ["Bandera verde", "Inicia los programas con «al hacer clic en ⚑»."],
    ["Coordenada x", "Horizontal: de −240 a 240."],
    ["Coordenada y", "Vertical: de −180 a 180."],
    ["Dirección 90", "Derecha (0 arriba, 180 abajo, −90 izquierda)."],
    ["Bloque sombrero", "Empieza un programa: un evento."],
    ["Bloque booleano", "Hexagonal: responde sí o no."],
    ["iniciar sonido", "Suena y el programa sigue sin esperar."],
    ["Reinventar", "Copia propia de un proyecto, con créditos al autor."],
  ],
  glosario: [
    ["Scratch", "Lenguaje de programación por bloques creado por el MIT para aprender a programar creando proyectos."],
    ["Objeto (sprite)", "Personaje o elemento de un proyecto de Scratch que puede tener programas, disfraces y sonidos."],
    ["Disfraz", "Cada una de las imágenes que puede mostrar un objeto."],
    ["Escenario", "Fondo sobre el que actúan los objetos; tiene fondos y sus propios programas."],
    ["Fondo", "Cada una de las imágenes que puede mostrar el escenario."],
    ["Paleta de bloques", "Zona de la pantalla con los bloques ordenados por categorías."],
    ["Área de programas", "Zona donde se arrastran y encajan los bloques."],
    ["Evento", "Suceso que pone en marcha un programa, como pulsar la bandera o una tecla."],
    ["Bloque sombrero", "Bloque de evento con la parte superior redondeada que inicia un programa."],
    ["Bloque reportero", "Bloque redondeado que da un valor, como un número o un texto."],
    ["Bloque booleano", "Bloque hexagonal que responde verdadero o falso."],
    ["Coordenadas", "Par de números (x, y) que indica la posición de un objeto en el escenario."],
    ["Dirección", "Ángulo hacia el que apunta un objeto; 90 es la derecha."],
    ["Gráfico vectorial", "Imagen formada por figuras geométricas que se amplía sin perder calidad."],
    ["Mapa de bits", "Imagen formada por píxeles, como una fotografía."],
    ["Reinventar (remix)", "Crear una versión propia de un proyecto compartido, reconociendo al autor original."],
  ],
  situacion: {
    titulo: "Tarjeta animada para el día del libro",
    reto: "La biblioteca del instituto organiza una exposición digital por el día del libro. Cada pareja creará en Scratch una tarjeta animada que presente un libro que le guste, con personajes que se muevan, hablen y suenen.",
    pasos: [
      "Elegid el libro y escribid un guion corto de 3 o 4 frases con dos escenas.",
      "Dibujad en el editor de pintura (modo vectorial) un personaje con dos disfraces y un fondo para cada escena.",
      "Programad el escenario para cambiar de escena y poner música de fondo.",
      "Programad los personajes con eventos, coordenadas, movimiento, animación con disfraces y bocadillos de texto.",
      "Probad la tarjeta con otra pareja, corregid lo que no funcione y compartidla con instrucciones y créditos.",
    ],
    producto: "Proyecto de Scratch compartido en el estudio de la clase con instrucciones y créditos.",
    evaluacion: [
      "Usa correctamente eventos, movimiento con coordenadas, apariencia y sonido.",
      "Incluye una animación con disfraces y al menos un cambio de fondo.",
      "Los objetos tienen nombres claros y los programas están ordenados y comentados.",
      "La tarjeta es original y respeta la autoría y las normas de la comunidad.",
    ],
  },
  familias: ["Pedid que os enseñe su proyecto de Scratch y os explique un programa.", "Jugad a «hundir la flota» con coordenadas positivas y negativas.", "Grabad juntos un sonido divertido para usarlo en un proyecto.", "Repasad las normas de seguridad en internet y en la comunidad de Scratch."],
  profesores: {
    saberes: H.saberes("Entornos de programación por bloques: interfaz, objetos y escenario; eventos, secuencias de instrucciones, movimiento en un sistema de coordenadas, apariencia, sonido; creación de recursos gráficos vectoriales y de mapa de bits; publicación y reutilización de proyectos respetando licencias y autoría; seguridad y bienestar digital", "programació per blocs, creació de continguts digitals, ús segur de les comunitats en línia i respecte per la propietat intel·lectual."),
    ideas: [
      "Crear un estudio de Scratch de la clase para compartir los proyectos.",
      "Juego de coordenadas: colocar objetos con «ir a x: y:» siguiendo un mapa.",
      "Reto de animación: dar vida a un personaje con solo dos disfraces.",
      "Relacionar el plano cartesiano con Matemáticas de 1º y 2º de ESO.",
      "Dinámica de crítica constructiva: comentarios en parejas con la regla «una cosa que me gusta y una mejora».",
    ],
  },
  fuentes: [H.RD, H.DEC, H.SCRATCH, { t: "Scratch: guía para educadores", url: "https://scratch.mit.edu/educators" }, H.wiki("Scratch (lenguaje de programación)", "Scratch_(lenguaje_de_programaci%C3%B3n)")],
  revisado: H.REV,
};
