// Programación y robótica 1º ESO · Scratch: el escenario y los objetos. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, resumen, scratch, escenario, CAT, wiki, C, RD, REV } = require("./_eso1L2");

const teatro = comparar("Scratch es como un teatro: el escenario es el fondo, los objetos son los actores y los programas son el guion", [
  ["Teatro", ["escenario", "actores", "vestuario", "guion"], "var(--muted)"],
  ["Scratch", ["escenario y fondos", "objetos", "disfraces", "programas"], "var(--pen)"],
], "Un teatro digital");

const interfaz = lienzo("Interfaz de Scratch: a la izquierda la paleta de bloques, en el centro el área de programas, arriba a la derecha el escenario y abajo la lista de objetos", `
  <rect x="10" y="14" width="240" height="150" rx="8" fill="var(--card)" stroke="var(--muted)" stroke-width="1.6"/>
  <rect x="16" y="22" width="18" height="136" rx="3" fill="var(--muted)" fill-opacity=".2"/>${Object.values(CAT).slice(0, 8).map((c, i) => `<circle cx="25" cy="${32 + i * 16}" r="5" fill="${c}"/>`).join("")}
  <rect x="38" y="22" width="56" height="136" rx="4" fill="${CAT.movimiento}" fill-opacity=".15" stroke="${CAT.movimiento}"/>${tx(66, 92, "bloques", { fs: 10.5, max: 50 })}
  <rect x="98" y="22" width="72" height="136" rx="4" fill="var(--leaf)" fill-opacity=".1" stroke="var(--leaf)"/>${tx(134, 86, "área de", { fs: 10.5, max: 66 })}${tx(134, 100, "programas", { fs: 10.5, max: 66 })}
  <rect x="174" y="22" width="70" height="56" rx="4" fill="var(--sun)" fill-opacity=".2" stroke="var(--sun)"/>${tx(209, 54, "escenario", { fs: 10.5, max: 64 })}
  <rect x="174" y="82" width="70" height="76" rx="4" fill="var(--red)" fill-opacity=".1" stroke="var(--red)"/>${tx(209, 116, "objetos", { fs: 10.5, max: 64 })}${tx(209, 130, "y fondos", { fs: 10, c: "var(--muted)", max: 64 })}
  <circle cx="184" cy="32" r="4" fill="var(--leaf)"/><rect x="192" y="28" width="8" height="8" fill="var(--red)"/>`, 172);

const coords = escenario("Escenario de Scratch de 480 por 360 pasos con el centro en x 0, y 0 y cuatro puntos de ejemplo", [[0, 0, "(0, 0)", "var(--ink)"], [150, 100, "(150, 100)", "var(--pen)"], [-160, 90, "(−160, 90)", "var(--leaf)"], [-150, -60, "(−150, −60)", "var(--red)"], [180, -110, "(180, −110)", "var(--sun)"]]);

const banderaPrograma = scratch("Primer programa: al hacer clic en la bandera verde, decir hola durante 2 segundos y moverse 10 pasos", [
  ["al hacer clic en ⚑", "eventos"], ["decir ¡Hola! durante 2 segundos", "apariencia"], ["mover 10 pasos", "movimiento"], ["tocar sonido Miau", "sonido"],
], "Mi primer programa");

const categorias = cajas("Categorías de bloques de Scratch por colores: movimiento azul, apariencia morado, sonido rosa, eventos amarillo, control naranja y sensores celeste", [
  ["Movimiento", "mover, girar, ir a", CAT.movimiento],
  ["Apariencia", "decir, disfraz", CAT.apariencia],
  ["Eventos", "bandera, teclas", CAT.eventos],
  ["Control", "esperar, repetir, si", CAT.control],
], "Cada color, una familia");

const objeto = lienzo("Propiedades de un objeto de Scratch: nombre, posición x e y, tamaño, dirección y si se muestra", `
  <circle cx="60" cy="86" r="34" fill="var(--sun)" fill-opacity=".3" stroke="var(--sun)" stroke-width="2.4"/><circle cx="50" cy="78" r="4" fill="var(--ink)"/><circle cx="70" cy="78" r="4" fill="var(--ink)"/><path d="M48 96 Q60 106 72 96" fill="none" stroke="var(--ink)" stroke-width="2"/>
  ${[["Nombre", "Gato"], ["x", "−50"], ["y", "20"], ["Tamaño", "100 %"], ["Dirección", "90°"], ["Mostrar", "sí"]].map(([a, b], i) => `${tx(124, 34 + i * 22, a, { fs: 11, c: "var(--muted)", a: "start", max: 66 })}${tx(244, 34 + i * 22, b, { fs: 12, fam: D, a: "end", max: 50 })}`).join("")}
  ${tx(60, 148, "un objeto", { fs: 11.5, c: "var(--muted)" })}`, 166);

const direcciones = lienzo("Direcciones en Scratch: 90 es derecha, menos 90 izquierda, 0 arriba y 180 abajo", `
  <circle cx="130" cy="88" r="56" fill="none" stroke="var(--muted)" stroke-dasharray="4 3"/><circle cx="130" cy="88" r="6" fill="var(--ink)"/>
  ${[[0, -1, "0° arriba"], [1, 0, "90° derecha"], [0, 1, "180° abajo"], [-1, 0, "−90° izquierda"]].map(([dx, dy, t]) => `<path d="M130 88 L${130 + dx * 50} ${88 + dy * 50}" stroke="var(--pen)" stroke-width="2.6"/><circle cx="${130 + dx * 50}" cy="${88 + dy * 50}" r="4" fill="var(--pen)"/>${dx ? tx(130 + dx * 66, 76, t, { fs: 10.5, max: 74 }) : tx(130, 88 + dy * 66 + 4, t, { fs: 10.5, max: 90 })}`).join("")}`, 172);

const disfraces = lienzo("Disfraces: el mismo objeto con varias imágenes; al cambiar rápido de disfraz parece que se mueve", `
  ${[0, 1, 2].map((i) => { const x = 50 + i * 80, a = [-14, 0, 14][i]; return `<rect x="${x - 34}" y="30" width="68" height="90" rx="8" fill="var(--card)" stroke="${CAT.apariencia}" stroke-width="2"/><circle cx="${x}" cy="56" r="11" fill="${CAT.apariencia}" fill-opacity=".5"/><path d="M${x} 67 V92 M${x} 92 L${x - 10 + a / 2} 112 M${x} 92 L${x + 10 - a / 2} 112 M${x} 74 L${x - 14 - a / 3} ${84 + a / 2} M${x} 74 L${x + 14 + a / 3} ${84 - a / 2}" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round"/>${tx(x, 136, "disfraz " + (i + 1), { fs: 10.5, c: CAT.apariencia, max: 66 })}`; }).join("")}
  ${tx(130, 162, "cambiar de disfraz = animación", { fs: 12, fam: D })}`, 172);

const fondos = scratch("Programa del escenario: al hacer clic en la bandera cambiar a fondo playa, esperar 3 segundos y cambiar a fondo bosque", [
  ["al hacer clic en ⚑", "eventos"], ["cambiar fondo a Playa", "apariencia"], ["esperar 3 segundos", "control"], ["cambiar fondo a Bosque", "apariencia"], ["tocar sonido Pájaros", "sonido"],
], "Programar el escenario");

const guardar = pasos("Cómo guardar un proyecto de Scratch: con cuenta en la nube o descargándolo al ordenador", [
  "Pon un nombre al proyecto",
  "En línea: Archivo › Guardar ahora",
  "Sin cuenta: Guardar en tu ordenador",
  "Se descarga un archivo .sb3",
  "Para seguir: Cargar desde tu ordenador",
], "Guardar el trabajo");

const compartir = comparar("Compartir un proyecto en la comunidad de Scratch con respeto: qué hacer y qué evitar", [
  ["Sí", ["dar créditos al remezclar", "comentar con respeto", "usar un alias"], "var(--leaf)"],
  ["No", ["datos personales", "fotos tuyas", "copiar sin citar"], "var(--red)"],
], "Comunidad segura");

const pila = scratch("Bloques que encajan formando una pila: un sombrero de evento arriba y bloques de pila debajo; el bloque en C abraza a otros", [
  ["al presionar tecla espacio", "eventos"], ["repetir 10", "control"], ["mover 10 pasos", "movimiento", 1], ["siguiente disfraz", "apariencia", 1], ["decir ¡Ya!", "apariencia"],
], "Bloques que encajan");

module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "Scratch: el escenario y los objetos",
  minutos: 100,
  objetivos: [
    "Conocer qué es Scratch y las partes de su interfaz",
    "Situar puntos en el escenario usando las coordenadas x e y",
    "Crear, renombrar y configurar objetos y entender sus propiedades",
    "Usar disfraces, fondos y sonidos en un proyecto",
    "Construir un primer programa con bloques de varias categorías",
    "Guardar, compartir y remezclar proyectos de forma segura y respetuosa",
  ],
  claves: ["Scratch", "escenario", "objeto", "coordenadas", "disfraz", "fondo", "sonido", "bloque", "programa", "remezcla"],
  pregunta: {
    texto: "Scratch se parece a un teatro. ¿Qué serían el escenario, los actores y el guion?",
    respuesta: "El <b>escenario</b> es el fondo blanco donde ocurre todo; los <b>actores</b> son los <mark>objetos</mark> (el gato y los demás personajes), que pueden cambiar de <b>disfraz</b>; y el <b>guion</b> son los <b>programas</b> hechos con bloques, que dicen a cada actor qué tiene que hacer y cuándo. Programar en Scratch es dirigir tu propia obra.",
  },
  lectura: {
    titulo: "Un gato que enseñó a programar al mundo",
    html: `<p>En 2007, un grupo de investigadores del laboratorio de medios del MIT, en Estados Unidos, dirigido por <b>Mitchel Resnick</b>, presentó un programa gratuito con un gato naranja como protagonista. Se llamaba <b>Scratch</b>, como el gesto que hacen los DJ al mover un disco con la mano para mezclar música: la idea era que cualquiera pudiera «mezclar» imágenes, sonidos y bloques de código para crear sus propias historias, juegos y animaciones.</p><p>Resnick se inspiró en las piezas de construcción de juguete: los bloques de Scratch encajan como piezas, y solo encajan si tienen sentido juntos. Así es casi imposible cometer errores de escritura, que son el principal obstáculo de quien empieza a programar con texto.</p><p>Hoy Scratch se usa en más de 150 países y está traducido a más de 70 idiomas. Su comunidad tiene decenas de millones de usuarios que han compartido más de cien millones de proyectos. Muchos programadores profesionales dieron sus primeros pasos con ese gato. Resnick resume su filosofía en cuatro palabras: proyectos, pasión, compañeros y juego. En este tema vas a conocer tu nuevo taller de creación.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 ¿Qué es Scratch?</h3><p><mark>Scratch</mark> es un <b>lenguaje de programación visual</b> creado en el MIT. En lugar de escribir código con palabras, se programa <b>arrastrando y encajando bloques</b> de colores, como si fueran piezas de un puzle. Cada bloque es una instrucción.</p><p>Es <b>gratuito</b> y se puede usar de dos formas: en línea, desde el navegador en la web oficial de Scratch, o descargando la aplicación de escritorio para trabajar sin internet. Con Scratch se pueden crear animaciones, historias interactivas, juegos, música, presentaciones e incluso controlar robots y placas electrónicas.</p><p>Para entender cómo funciona, piensa en un <b>teatro</b>: el escenario es el fondo donde ocurre todo, los objetos son los actores, los disfraces son su vestuario y los programas son el guion que dice a cada actor lo que debe hacer. Tú eres el director.</p>`, svg: teatro, video: { id: "pPueIUrLeVs", titulo: "Conoce la interfaz de Scratch (capítulo 2)", canal: "academia JAF", vistas: 49012 } },
    { html: `<h3>1.2 La interfaz de Scratch</h3><p>Al abrir Scratch, la pantalla tiene cuatro zonas principales:</p><ul><li>La <b>paleta de bloques</b> (izquierda): los bloques ordenados por categorías de colores.</li><li>El <b>área de programas</b> (centro): donde se arrastran y encajan los bloques para formar programas. Cada objeto tiene su propia área.</li><li>El <b>escenario</b> (arriba a la derecha): donde se ve el resultado. Encima tiene la <b>bandera verde</b>, que inicia el programa, y la <b>señal roja</b>, que lo detiene.</li><li>La <b>lista de objetos y fondos</b> (abajo a la derecha): todos los personajes del proyecto y el escenario.</li></ul><p>Arriba hay tres pestañas: <b>Código</b>, <b>Disfraces</b> (o Fondos, si está seleccionado el escenario) y <b>Sonidos</b>. También hay un botón para ver el escenario a pantalla completa y el menú Archivo para guardar y abrir proyectos.</p>`, svg: interfaz, video: { id: "A5QJrHhsnBg", titulo: "Descubriendo la interfaz de Scratch", canal: "Programamos", vistas: 14562 } },
    { html: `<h3>1.3 Las categorías de bloques</h3><p>Los bloques están agrupados en <b>categorías</b>, y cada una tiene su color:</p>${tabla(["Categoría", "Color", "Sirve para"], [["Movimiento", "azul", "mover, girar, ir a una posición"], ["Apariencia", "morado", "decir, pensar, disfraces, efectos"], ["Sonido", "rosa", "tocar sonidos, volumen"], ["Eventos", "amarillo", "empezar: bandera, teclas, clic"], ["Control", "naranja", "esperar, repetir, si…"], ["Sensores", "celeste", "detectar toques, teclas, ratón"], ["Operadores", "verde", "sumar, comparar, azar"], ["Variables", "naranja oscuro", "guardar datos: puntos, vidas"]])}<p>Además, con el botón de <b>extensiones</b> (abajo a la izquierda) se pueden añadir más categorías: lápiz para dibujar, música, traducción, vídeo o control de robots y placas como micro:bit. Conocer los colores ayuda a encontrar rápido el bloque que necesitas.</p>`, svg: categorias },
    { html: `<h3>1.4 Cómo encajan los bloques</h3><p>Los bloques tienen formas distintas que indican cómo se pueden unir:</p><ul><li>Los bloques <b>sombrero</b> (con la parte de arriba redondeada) <b>inician</b> un programa: «al hacer clic en la bandera», «al presionar tecla». Siempre van arriba.</li><li>Los bloques <b>de pila</b> tienen una muesca arriba y un saliente abajo: se apilan unos debajo de otros y se ejecutan en orden.</li><li>Los bloques <b>en forma de C</b> (repetir, si…) abrazan a otros bloques.</li><li>Los bloques <b>redondeados</b> y <b>hexagonales</b> son valores y condiciones que se meten dentro de los huecos de otros bloques.</li></ul><p>Un conjunto de bloques encajados es un <b>programa</b> (o script). Si un bloque no encaja en un sitio, es que no tiene sentido ahí. Los bloques sueltos, sin sombrero, no se ejecutan solos: hay que hacer clic sobre ellos o unirlos a un evento.</p>`, svg: pila },
    { html: `<h3>1.5 El escenario y sus coordenadas</h3><p>El <mark>escenario</mark> es un rectángulo de <b>480 pasos de ancho y 360 de alto</b>. Para saber dónde está cada objeto, se usan <b>coordenadas</b>, igual que en matemáticas:</p><ul><li>La coordenada <b>x</b> indica la posición horizontal: va de <b>−240</b> (borde izquierdo) a <b>240</b> (borde derecho).</li><li>La coordenada <b>y</b> indica la posición vertical: va de <b>−180</b> (abajo) a <b>180</b> (arriba).</li><li>El <b>centro</b> del escenario es el punto (0, 0).</li></ul><p>Así, un objeto en (150, 100) está a la derecha y arriba; uno en (−150, −60), a la izquierda y abajo. Cuando mueves el ratón sobre el escenario, puedes ver sus coordenadas. Con el bloque «ir a x: … y: …» se coloca un objeto exactamente donde quieras. Las coordenadas son la base de casi todos los juegos: saber dónde está cada personaje permite moverlos, detectar choques o poner límites.</p>`, svg: coords },
    { html: `<h3>1.6 Los objetos y sus propiedades</h3><p>Los <mark>objetos</mark> (en inglés, «sprites») son los personajes y elementos que aparecen en el escenario y pueden tener programas. El gato es el objeto que aparece por defecto, pero se pueden añadir muchos más de cuatro formas: <b>elegir</b> uno de la biblioteca, <b>pintar</b> uno nuevo con el editor, elegir uno <b>sorpresa</b> o <b>subir</b> una imagen del ordenador.</p><p>Cada objeto tiene unas <b>propiedades</b> que se ven debajo del escenario: su <b>nombre</b> (conviene ponerle uno claro, como «Jugador» o «Pelota»), su <b>posición</b> (x e y), su <b>tamaño</b> (en porcentaje), su <b>dirección</b> y si está <b>visible</b> u oculto.</p><p>Cada objeto tiene <b>sus propios programas, disfraces y sonidos</b>. Por eso, antes de añadir bloques, hay que comprobar qué objeto está seleccionado: si programas el gato pensando que es la pelota, no funcionará como esperas.</p>`, svg: objeto },
    { html: `<h3>1.7 La dirección de un objeto</h3><p>Además de su posición, cada objeto tiene una <b>dirección</b>: hacia dónde «mira». En Scratch se mide en grados:</p><ul><li><b>90</b>: mira a la derecha (es la dirección inicial).</li><li><b>−90</b>: mira a la izquierda.</li><li><b>0</b>: mira hacia arriba.</li><li><b>180</b>: mira hacia abajo.</li></ul><p>Cuando usas el bloque «mover 10 pasos», el objeto avanza en la dirección en que está mirando. Si mira a la derecha, x aumenta; si mira hacia arriba, aumenta y. Con «girar 15 grados» se cambia la dirección poco a poco, y con «apuntar en dirección 90» se fija de golpe.</p><p>Fíjate en que esta forma de medir no es igual que la de matemáticas, donde 0° está a la derecha. En Scratch el 0 está arriba, como en una brújula. Es un detalle importante para que los personajes vayan hacia donde quieres.</p>`, svg: direcciones },
    { html: `<h3>1.8 Los disfraces</h3><p>Un <mark>disfraz</mark> es cada una de las <b>imágenes</b> que puede tener un objeto. El gato, por ejemplo, tiene dos disfraces con las patas en posiciones distintas. Si se cambia rápidamente de uno a otro, parece que camina: así se crean las <b>animaciones</b>, igual que en los dibujos animados.</p><p>En la pestaña <b>Disfraces</b> se pueden ver, añadir, duplicar, borrar y editar. El <b>editor de imágenes</b> tiene dos modos: <b>vectorial</b> (figuras que se pueden estirar sin perder calidad) y <b>mapa de bits</b> (como pintar píxel a píxel). Cada disfraz tiene un nombre y un número.</p><p>Los bloques de <b>Apariencia</b> permiten cambiar de disfraz desde el programa: «cambiar disfraz a …» pone uno concreto y «siguiente disfraz» pasa al siguiente de la lista. Combinado con «esperar» y «repetir», el personaje cobra vida.</p>`, svg: disfraces },
    { html: `<h3>2.1 Fondos y sonidos</h3><p>El <b>escenario</b> también puede tener varias imágenes, llamadas <mark>fondos</mark>. Se eligen en la biblioteca (playa, espacio, castillo…), se pintan o se suben. Cambiar de fondo sirve para pasar de un lugar a otro en una historia o de un nivel a otro en un juego.</p><p>El escenario <b>no se puede mover</b>, pero sí tiene programas propios: puede cambiar de fondo, tocar música o enviar mensajes a los objetos. Para programarlo, se selecciona el escenario en la parte derecha.</p><p>Los <b>sonidos</b> se gestionan en su pestaña: se pueden elegir de la biblioteca, <b>grabar</b> con el micrófono o subir un archivo. El editor permite recortarlos, cambiar el volumen o añadir efectos como eco o robot. Con «tocar sonido … hasta que termine» el programa espera a que acabe; con «iniciar sonido», sigue mientras suena.</p>`, svg: fondos, video: { id: "Ti8I26KMeJ4", titulo: "Cómo cambiar de escenario en Scratch", canal: "Taller de Videojuegos", vistas: 241695 } },
    { html: `<h3>2.2 El primer programa</h3><p>Vamos a crear un programa sencillo para el gato:</p><ol><li>Selecciona el objeto gato.</li><li>De <b>Eventos</b>, arrastra «al hacer clic en ⚑» al área de programas.</li><li>De <b>Apariencia</b>, encaja debajo «decir ¡Hola! durante 2 segundos».</li><li>De <b>Movimiento</b>, añade «mover 10 pasos».</li><li>De <b>Sonido</b>, añade «tocar sonido Miau».</li><li>Pulsa la <b>bandera verde</b>.</li></ol><p>El gato saludará, se moverá un poco y maullará. Los bloques se ejecutan <b>de arriba abajo</b>, en orden: es una <b>secuencia</b>. Si cambias el orden, cambia lo que ocurre.</p><p>Prueba a modificar los números: pon 50 pasos, cambia el texto o el tiempo. Experimentar es la mejor forma de aprender Scratch: si algo no sale como esperabas, no pasa nada, se arregla y se vuelve a probar.</p>`, svg: banderaPrograma },
    { html: `<h3>2.3 Guardar y organizar el proyecto</h3><p>Es muy importante <b>guardar</b> el trabajo a menudo. Hay dos formas:</p><ul><li>Si usas Scratch <b>en línea con una cuenta</b>, el proyecto se guarda en la nube con «Archivo › Guardar ahora» (y se va guardando solo cada poco).</li><li>Si no tienes cuenta o usas la aplicación, usa «Archivo › <b>Guardar en tu ordenador</b>». Se descarga un archivo con extensión <b>.sb3</b>. Para seguir trabajando otro día, usa «Cargar desde tu ordenador».</li></ul><p>Para que un proyecto sea fácil de entender y de mejorar, conviene ser ordenado: poner <b>nombres claros</b> al proyecto, a los objetos, a los disfraces y a los fondos; no dejar bloques sueltos que no sirven; y usar <b>comentarios</b> (clic derecho › Añadir comentario) para explicar qué hace cada programa. Un programador ordenado ahorra muchísimo tiempo.</p>`, svg: guardar },
    { html: `<h3>2.4 Compartir y remezclar con respeto</h3><p>Scratch tiene una gran <b>comunidad</b> en línea. Si tienes una cuenta (los menores de 16 años necesitan el permiso de su familia), puedes <b>compartir</b> tus proyectos para que otras personas los vean, los comenten y los prueben.</p><p>También puedes ver el código de cualquier proyecto compartido y hacer una <mark>remezcla</mark>: una copia que puedes modificar. Remezclar está permitido y es una buena forma de aprender, pero hay que <b>dar crédito</b> al autor original y explicar qué has cambiado.</p><p>Normas para una comunidad segura y amable:</p><ul><li>No compartas <b>datos personales</b>: nombre completo, dirección, colegio, teléfono o fotos tuyas.</li><li>Usa un <b>nombre de usuario</b> que no te identifique.</li><li>Comenta con <b>respeto</b> y de forma constructiva.</li><li>Si ves algo inapropiado, usa el botón de <b>informar</b> y avisa a un adulto.</li></ul>`, svg: compartir },
  ],
  ejemplos: [
    { enunciado: "¿En qué zona del escenario está un objeto en (−200, 150)?", pasos: ["x negativa: a la izquierda.", "y positiva y alta: arriba."], resultado: "En la esquina superior izquierda." },
    { enunciado: "Queremos colocar el gato en el centro mirando a la derecha. ¿Qué bloques usamos?", pasos: ["ir a x: 0 y: 0.", "apuntar en dirección 90."], resultado: "Centro (0, 0) y dirección 90." },
    { enunciado: "Un objeto en (100, 0) mira a la derecha y ejecuta «mover 50 pasos». ¿Dónde acaba?", pasos: ["Dirección 90: avanza en x.", "100 + 50 = 150; y no cambia."], resultado: "En (150, 0)." },
    { enunciado: "Haz que el escenario pase de un fondo de día a uno de noche al pulsar la tecla n.", pasos: ["Selecciona el escenario.", "al presionar tecla n → cambiar fondo a Noche."], resultado: "Programa en el escenario con un evento de tecla." },
    { enunciado: "¿Qué ocurre si pones «decir ¡Hola!» debajo de «mover 10 pasos» en vez de encima?", pasos: ["Los bloques se ejecutan de arriba abajo.", "Primero se mueve y después habla."], resultado: "Cambia el orden de lo que se ve." },
    { enunciado: "Has remezclado un juego de otra persona. ¿Qué debes poner en las notas?", pasos: ["Nombrar al autor original.", "Explicar qué has cambiado o añadido."], resultado: "Créditos y descripción de los cambios." },
  ],
  errores: [
    "Programar un objeto distinto del que se quería (no comprobar cuál está seleccionado).",
    "Confundir las coordenadas x (horizontal) e y (vertical).",
    "Olvidar el bloque de evento (sombrero) y que el programa no empiece.",
    "Pensar que la dirección 0 es la derecha, cuando en Scratch es arriba.",
    "No guardar el proyecto y perder el trabajo.",
    "Compartir datos personales o remezclar sin dar crédito.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Qué es Scratch y quién lo creó?", sol: "Un lenguaje de programación visual con bloques, creado en el MIT (equipo de Mitchel Resnick)." },
    { nivel: "básico", q: "Nombra las cuatro zonas principales de la interfaz.", sol: "Paleta de bloques, área de programas, escenario y lista de objetos y fondos." },
    { nivel: "básico", q: "¿Qué hacen la bandera verde y la señal roja?", sol: "La bandera inicia el programa; la señal roja lo detiene." },
    { nivel: "básico", q: "¿Cuánto mide el escenario? ¿Cuáles son las coordenadas del centro?", sol: "480 × 360 pasos; el centro es (0, 0)." },
    { nivel: "básico", q: "¿Entre qué valores va x? ¿Y y?", sol: "x de −240 a 240; y de −180 a 180." },
    { nivel: "básico", q: "¿De qué color son los bloques de movimiento? ¿Y los de eventos?", sol: "Azul; amarillo." },
    { nivel: "básico", q: "¿Qué es un objeto? Escribe dos formas de añadir uno.", sol: "Un personaje o elemento con programas. Elegirlo de la biblioteca o pintarlo." },
    { nivel: "básico", q: "¿Qué es un disfraz?", sol: "Cada una de las imágenes que puede tener un objeto." },
    { nivel: "básico", q: "¿Cómo se llaman las imágenes del escenario?", sol: "Fondos." },
    { nivel: "básico", q: "¿Hacia dónde mira un objeto con dirección 90? ¿Y con 0?", sol: "Hacia la derecha; hacia arriba." },
    { nivel: "básico", q: "¿Qué extensión tienen los archivos de Scratch descargados?", sol: ".sb3." },
    { nivel: "básico", q: "¿Qué es una remezcla?", sol: "Una copia de un proyecto de otra persona que se modifica, dando crédito al autor." },
    { nivel: "medio", q: "Indica en qué cuadrante está cada punto: (120, 80), (−50, −90), (−200, 100), (60, −150).", sol: "Arriba derecha; abajo izquierda; arriba izquierda; abajo derecha." },
    { nivel: "medio", q: "Un objeto está en (0, 0) mirando hacia arriba y se mueve 100 pasos. ¿Dónde acaba?", sol: "En (0, 100)." },
    { nivel: "medio", q: "Escribe el programa para que el gato diga «¡Bienvenidos!» 3 segundos al pulsar la bandera.", sol: "al hacer clic en ⚑ → decir ¡Bienvenidos! durante 3 segundos." },
    { nivel: "medio", q: "¿Por qué conviene poner nombres claros a los objetos?", sol: "Para saber qué es cada uno y no programar el que no toca; facilita entender y mejorar el proyecto." },
    { nivel: "medio", q: "Explica la diferencia entre «tocar sonido hasta que termine» e «iniciar sonido».", sol: "El primero espera a que acabe el sonido antes del siguiente bloque; el segundo sigue mientras suena." },
    { nivel: "medio", q: "¿Puede moverse el escenario? ¿Puede tener programas?", sol: "No se mueve, pero sí puede tener programas (cambiar fondo, sonidos, mensajes)." },
    { nivel: "medio", q: "Coloca 4 objetos en las cuatro esquinas del escenario. Escribe sus coordenadas aproximadas.", sol: "(−200, 150), (200, 150), (−200, −150), (200, −150)." },
    { nivel: "medio", q: "¿Qué tipo de bloque inicia un programa y cómo se reconoce?", sol: "El bloque sombrero de eventos: tiene la parte de arriba redondeada." },
    { nivel: "medio", q: "Describe cómo crear una animación de un pájaro con dos disfraces.", sol: "Dibujar dos disfraces con las alas arriba y abajo y alternarlos con «siguiente disfraz» y «esperar»." },
    { nivel: "medio", q: "Escribe tres normas para usar la comunidad de Scratch de forma segura.", sol: "No dar datos personales, usar un alias, comentar con respeto (e informar de lo inapropiado)." },
    { nivel: "medio", q: "Un objeto mira a la izquierda (−90) en (50, 20) y avanza 80 pasos. ¿Dónde acaba?", sol: "En (−30, 20)." },
    { nivel: "avanzado", q: "Diseña en papel un proyecto con 2 objetos y 2 fondos: indica nombres, disfraces y qué hará cada uno.", sol: "Respuesta abierta: por ejemplo, Gato y Perro en Parque y Casa; el gato habla, el perro ladra; el fondo cambia con una tecla." },
    { nivel: "avanzado", q: "Un compañero dice que su programa «no hace nada». Escribe tres causas posibles.", sol: "Falta el bloque de evento; ha programado otro objeto; los bloques no están encajados." },
    { nivel: "avanzado", q: "Explica por qué en Scratch la dirección 0 es arriba mientras que en matemáticas el ángulo 0° apunta a la derecha.", sol: "Scratch usa el criterio de la brújula (0 = norte); en matemáticas los ángulos se miden desde el eje x positivo." },
    { nivel: "avanzado", q: "Un objeto en (230, 0) mira a la derecha y avanza 50 pasos. ¿Qué crees que pasa? Compruébalo.", sol: "No puede salir del todo del escenario: Scratch lo deja en el borde, con una parte visible." },
    { nivel: "avanzado", q: "Remezcla un proyecto sencillo de la comunidad y escribe las notas de créditos.", sol: "Respuesta abierta: incluir autor original, enlace y cambios realizados." },
    { nivel: "avanzado", q: "Compara programar con bloques y programar escribiendo texto. Escribe una ventaja de cada uno.", sol: "Bloques: no hay errores de escritura y es más visual. Texto: más potente y rápido para programas grandes." },
  ],
  quiz: [
    { q: "Scratch se creó en…", o: ["Google", "el MIT", "Microsoft", "la NASA"], a: 1, e: "Equipo de Mitchel Resnick." },
    { q: "En Scratch se programa…", o: ["escribiendo código", "encajando bloques", "hablando", "con un mando"], a: 1, e: "Lenguaje visual." },
    { q: "El programa empieza al pulsar…", o: ["la señal roja", "la bandera verde", "el gato", "el fondo"], a: 1, e: "Bandera verde." },
    { q: "El escenario mide…", o: ["100 × 100", "480 × 360", "240 × 180", "1 000 × 800"], a: 1, e: "Pasos." },
    { q: "El centro del escenario es…", o: ["(240, 180)", "(0, 0)", "(100, 100)", "(−240, 0)"], a: 1, e: "Origen." },
    { q: "La coordenada x indica la posición…", o: ["vertical", "horizontal", "el tamaño", "el color"], a: 1, e: "Izquierda-derecha." },
    { q: "Un objeto en (−100, 50) está…", o: ["a la derecha y abajo", "a la izquierda y arriba", "en el centro", "a la derecha y arriba"], a: 1, e: "x negativa, y positiva." },
    { q: "Los personajes de Scratch se llaman…", o: ["fondos", "objetos", "bloques", "variables"], a: 1, e: "Sprites." },
    { q: "Las imágenes de un objeto son sus…", o: ["fondos", "disfraces", "sonidos", "variables"], a: 1, e: "Disfraces." },
    { q: "Las imágenes del escenario son…", o: ["disfraces", "fondos", "objetos", "bloques"], a: 1, e: "Fondos." },
    { q: "Los bloques de movimiento son de color…", o: ["morado", "azul", "amarillo", "verde"], a: 1, e: "Azul." },
    { q: "Los bloques de apariencia son de color…", o: ["azul", "morado", "naranja", "rosa"], a: 1, e: "Morado." },
    { q: "Dirección 90 significa mirar hacia…", o: ["arriba", "la derecha", "abajo", "la izquierda"], a: 1, e: "Inicial." },
    { q: "Dirección 0 significa mirar hacia…", o: ["la derecha", "arriba", "abajo", "la izquierda"], a: 1, e: "Como una brújula." },
    { q: "El bloque que inicia un programa tiene forma de…", o: ["C", "sombrero", "hexágono", "círculo"], a: 1, e: "Bloque sombrero." },
    { q: "El escenario…", o: ["se puede mover", "no se mueve pero tiene programas", "no tiene programas", "es un objeto más"], a: 1, e: "Programas propios." },
    { q: "Para guardar sin cuenta se usa…", o: ["Guardar ahora", "Guardar en tu ordenador", "Compartir", "Remezclar"], a: 1, e: "Descarga .sb3." },
    { q: "Al remezclar hay que…", o: ["borrar el nombre del autor", "dar crédito al autor", "cobrar", "no cambiar nada"], a: 1, e: "Respeto." },
    { q: "Los bloques se ejecutan…", o: ["al azar", "de arriba abajo", "de abajo arriba", "todos a la vez"], a: 1, e: "Secuencia." },
    { q: "En la comunidad de Scratch NO debes compartir…", o: ["tus proyectos", "tu dirección", "comentarios amables", "remezclas"], a: 1, e: "Datos personales." },
  ],
  examen: [
    { q: "Un objeto en (60, 0) mira a la derecha y avanza 40. Acaba en…", o: ["(60, 40)", "(100, 0)", "(20, 0)", "(40, 60)"], a: 1, e: "x aumenta." },
    { q: "Un objeto en (0, 0) con dirección 180 avanza 50. Acaba en…", o: ["(0, 50)", "(0, −50)", "(50, 0)", "(−50, 0)"], a: 1, e: "Hacia abajo." },
    { q: "La esquina superior derecha es aproximadamente…", o: ["(−240, 180)", "(240, 180)", "(240, −180)", "(0, 180)"], a: 1, e: "x e y máximas." },
    { q: "Para que un pájaro mueva las alas se cambia de…", o: ["fondo", "disfraz", "sonido", "dirección"], a: 1, e: "Animación." },
    { q: "Si un programa no empieza, probablemente falta…", o: ["un sonido", "un bloque de evento", "un fondo", "un disfraz"], a: 1, e: "Sombrero." },
    { q: "Bloques «repetir» y «si» tienen forma de…", o: ["sombrero", "C", "círculo", "hexágono"], a: 1, e: "Abrazan bloques." },
    { q: "Pestaña para editar las imágenes del gato:", o: ["Código", "Disfraces", "Sonidos", "Fondos"], a: 1, e: "Disfraces." },
    { q: "Un archivo .sb3 es…", o: ["una imagen", "un proyecto de Scratch", "un sonido", "un vídeo"], a: 1, e: "Proyecto descargado." },
  ],
  feynman: ["Por qué Scratch se parece a un teatro", "Cómo funcionan las coordenadas del escenario", "Qué diferencia hay entre un objeto, un disfraz y un fondo", "Cómo se comparte y remezcla un proyecto de forma respetuosa"],
  figura: {
    titulo: "Scratch en un vistazo",
    svg: resumen("Resumen: interfaz, escenario, objetos, disfraces y fondos, programas y comunidad", [
      ["Interfaz", "bloques · programas · escenario · objetos", "var(--pen)"],
      ["Escenario", "480 × 360 · x de −240 a 240 · y de −180 a 180", "var(--sun)"],
      ["Objetos", "nombre · posición · tamaño · dirección", "var(--red)"],
      ["Imágenes", "disfraces (objetos) · fondos (escenario)", "var(--inf)"],
      ["Proyecto", "bandera verde · guardar .sb3 · remezclar", "var(--leaf)"],
    ]),
  },
  video: { id: "AFOjxoBQg0U", titulo: "Cambia el fondo o escenario en Scratch: cómo usar fondos personalizados", canal: "Laita Digital", vistas: 19232, megusta: 0, busqueda: "scratch escenario objetos interfaz" },
  mapa: mapa("SCRATCH", "var(--sun)", [
    ["Interfaz", "bloques · programas", "var(--pen)"],
    ["Escenario", "coordenadas · fondos", "var(--sun)"],
    ["Objetos", "disfraces · sonidos", "var(--red)"],
    ["Proyecto", "guardar · compartir", "var(--leaf)"],
  ], 250),
  glosario: [
    ["Scratch", "Lenguaje de programación visual por bloques creado en el MIT."],
    ["Bloque", "Pieza que representa una instrucción."],
    ["Programa o script", "Conjunto de bloques encajados."],
    ["Escenario", "Zona de 480 × 360 donde se ve el resultado."],
    ["Coordenadas", "Números (x, y) que indican una posición en el escenario."],
    ["Objeto (sprite)", "Personaje o elemento que puede tener programas."],
    ["Disfraz", "Cada imagen de un objeto."],
    ["Fondo", "Cada imagen del escenario."],
    ["Dirección", "Hacia dónde mira un objeto, en grados."],
    ["Bloque sombrero", "Bloque de evento que inicia un programa."],
    ["Extensión", "Categoría extra de bloques (lápiz, música, robots…)."],
    ["Remezcla", "Copia modificada de un proyecto de otra persona."],
    [".sb3", "Extensión de los archivos de proyecto de Scratch."],
  ],
  situacion: {
    titulo: "Mi tarjeta de presentación animada",
    reto: "Vas a crear en Scratch una tarjeta animada que presente tus aficiones (sin datos personales), con varios objetos, disfraces, fondos y sonidos.",
    pasos: [
      "Diseña en papel: qué objetos, qué fondos y qué dirá cada uno.",
      "Crea o elige los objetos y ponles nombres claros.",
      "Colócalos con coordenadas y prográmalos con la bandera verde.",
      "Añade un cambio de fondo y al menos un sonido.",
      "Guarda el proyecto, pruébalo con un compañero y mejora lo que no funcione.",
    ],
    producto: "Un proyecto de Scratch (.sb3) con una presentación animada.",
    evaluacion: ["Usa bien la interfaz y las coordenadas.", "Incluye objetos, disfraces, fondos y sonidos.", "El programa funciona con la bandera verde.", "Respeta la privacidad y está ordenado y comentado."],
  },
  tarjetas: [
    ["Scratch", "Programar con bloques"], ["Bandera verde", "Empezar"], ["Señal roja", "Parar"],
    ["Escenario", "480 × 360"], ["Centro", "(0, 0)"], ["x", "De −240 a 240"],
    ["y", "De −180 a 180"], ["Objeto", "Personaje con programas"], ["Disfraz", "Imagen de un objeto"],
    ["Fondo", "Imagen del escenario"], ["Dirección 90", "Derecha"], ["Remezcla", "Copiar dando crédito"],
  ],
  familias: ["Explorad juntos la web de Scratch y probad proyectos de la comunidad.", "Pedid a vuestro hijo o hija que os enseñe su primer programa y os explique cada bloque.", "Si se crea una cuenta, revisad juntos las normas de la comunidad y la privacidad.", "Buscad ejemplos de coordenadas en la vida diaria: mapas, juegos de barcos."],
  profesores: {
    saberes: "Entorno de programación por bloques: interfaz, escenario y sistema de coordenadas, objetos y propiedades, disfraces, fondos y sonidos, primer programa, guardado y uso responsable de la comunidad (materia optativa de Programación y robótica, en el marco del RD 217/2022).",
    ideas: ["Juego de coordenadas: dictar puntos y colocar objetos.", "Comparar la dirección de Scratch con una brújula.", "Galería del aula con las tarjetas animadas.", "Debate sobre privacidad y créditos al remezclar."],
  },
  fuentes: [RD, { t: "Scratch (MIT): página oficial", url: "https://scratch.mit.edu/" }, wiki("Scratch (lenguaje de programación)", "Scratch_(lenguaje_de_programación)"), wiki("Mitchel Resnick", "Mitchel_Resnick")],
  revisado: REV,
};
