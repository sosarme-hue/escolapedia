// Programación y robótica 1º ESO · Movimiento y apariencia. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, resumen, scratch, escenario, CAT, wiki, C, RD, REV } = require("./_eso1L2");

const moverGirar = scratch("Mover y girar: al hacer clic en la bandera, mover 50 pasos, girar 90 grados a la derecha y mover 50 pasos", [
  ["al hacer clic en ⚑", "eventos"], ["apuntar en dirección 90", "movimiento"], ["mover 50 pasos", "movimiento"], ["girar ↻ 90 grados", "movimiento"], ["mover 50 pasos", "movimiento"],
], "Pasos y giros");

const recorrido = escenario("Recorrido en el escenario: del centro avanza 120 pasos a la derecha y, tras girar, 100 pasos hacia abajo", [[0, 0, "inicio", "var(--leaf)"], [120, 0, "", "var(--pen)"], [120, -100, "final", "var(--red)"]], { flechas: [[0, 0, 115, 0], [120, -4, 120, -95]] });

const irA = scratch("Bloques de coordenadas: ir a x 0 y 0, deslizar en 2 segundos a x 150 y 100, sumar 10 a x", [
  ["al hacer clic en ⚑", "eventos"], ["ir a x: 0 y: 0", "movimiento"], ["deslizar en 2 seg a x: 150 y: 100", "movimiento"], ["sumar 10 a x", "movimiento"], ["fijar y a −50", "movimiento"],
], "Moverse con coordenadas");

const desliza = escenario("El bloque deslizar mueve el objeto suavemente desde el centro hasta el punto 150, 100 en dos segundos", [[0, 0, "(0, 0)", "var(--ink)"], [150, 100, "(150, 100)", "var(--pen)"]], { flechas: [[0, 0, 140, 93]] });

const rebote = lienzo("Rebotar si toca un borde: la pelota cambia de dirección al llegar al borde, y el estilo de rotación decide si se da la vuelta", `
  <rect x="20" y="20" width="220" height="120" rx="6" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>
  <path d="M40 120 L130 26 L220 120" fill="none" stroke="var(--pen)" stroke-width="2.4" stroke-dasharray="6 4"/><circle cx="40" cy="120" r="8" fill="var(--sun)"/><circle cx="130" cy="28" r="8" fill="var(--sun)" fill-opacity=".5"/><circle cx="220" cy="120" r="8" fill="var(--sun)" fill-opacity=".3"/>
  ${tx(130, 76, "¡rebota!", { fs: 11.5, c: "var(--red)" })}${tx(130, 162, "rebotar si toca un borde", { fs: 12, fam: D })}`, 172);

const rotacion = comparar("Estilos de rotación: en todas direcciones el gato queda boca abajo; izquierda-derecha solo se da la vuelta; no rotar no cambia", [
  ["Todas direc.", ["gira libre", "puede quedar", "boca abajo"], "var(--red)"],
  ["Izq.-derecha", ["solo se voltea", "ideal para", "personajes"], "var(--leaf)"],
], "Estilo de rotación");

const caminar = scratch("Animación de caminar: por siempre, mover 10 pasos, siguiente disfraz, esperar 0,1 segundos y rebotar si toca un borde", [
  ["al hacer clic en ⚑", "eventos"], ["fijar estilo de rotación izquierda-derecha", "movimiento"], ["por siempre", "control"], ["mover 10 pasos", "movimiento", 1], ["siguiente disfraz", "apariencia", 1], ["esperar 0.1 segundos", "control", 1], ["rebotar si toca un borde", "movimiento", 1],
], "El gato camina");

const fotogramas = lienzo("Fotogramas: imágenes fijas que, mostradas rápidamente una tras otra, crean la ilusión de movimiento", `
  ${[0, 1, 2, 3].map((i) => { const x = 22 + i * 56, cy = 60 - [0, 10, 0, -10][i] * 0; const pos = [0, 12, 24, 36][i]; return `<rect x="${x}" y="30" width="50" height="62" rx="4" fill="var(--card)" stroke="var(--muted)" stroke-width="1.6"/><circle cx="${x + 10 + pos * 0.8}" cy="${cy + [0, -12, -16, -12][i]}" r="7" fill="var(--red)"/>${tx(x + 25, 106, "" + (i + 1), { fs: 11, c: "var(--muted)", max: 40 })}`; }).join("")}
  ${tx(130, 136, "12 imágenes por segundo ≈ movimiento", { fs: 11.5, fam: D })}${tx(130, 156, "el cerebro rellena los huecos", { fs: 11, c: "var(--muted)" })}`, 166);

const efectos = cajas("Efectos gráficos de apariencia: color, ojo de pez, remolino, pixelar, mosaico, brillo y desvanecer", [
  ["Color", "cambia el tono", CAT.apariencia],
  ["Desvanecer", "transparente", "var(--inf)"],
  ["Remolino", "retuerce la imagen", "var(--red)"],
  ["Pixelar", "cuadraditos", "var(--leaf)"],
], "Efectos gráficos");

const tamano = scratch("Tamaño y efectos: fijar tamaño al 50 por ciento, repetir 10 veces cambiar tamaño en 10 y efecto color en 25", [
  ["al hacer clic en ⚑", "eventos"], ["fijar tamaño a 50 %", "apariencia"], ["quitar efectos gráficos", "apariencia"], ["repetir 10", "control"], ["cambiar tamaño por 10", "apariencia", 1], ["cambiar efecto color por 25", "apariencia", 1], ["esperar 0.2 segundos", "control", 1],
], "Crecer y cambiar de color");

const capas = lienzo("Capas: los objetos se dibujan uno encima de otro; ir a capa delantera pone un objeto delante de todos", `
  <rect x="40" y="50" width="90" height="70" rx="8" fill="var(--leaf)" fill-opacity=".55" stroke="var(--leaf)" stroke-width="2"/>${tx(70, 70, "árbol", { fs: 11, max: 50 })}
  <circle cx="132" cy="96" r="34" fill="var(--sun)" fill-opacity=".8" stroke="var(--sun)" stroke-width="2"/>${tx(140, 100, "sol", { fs: 11, max: 40 })}
  <rect x="150" y="68" width="70" height="62" rx="8" fill="var(--pen)" fill-opacity=".85" stroke="var(--pen)" stroke-width="2"/>${tx(185, 104, "casa", { fs: 11, c: "#fff", max: 60 })}
  ${tx(130, 26, "atrás → delante", { fs: 12, c: "var(--muted)" })}${tx(130, 156, "ir a capa delantera", { fs: 12, fam: D })}`, 166);

const dialogo = scratch("Diálogo entre dos personajes: el gato dice hola durante 2 segundos, espera y piensa hmm durante 2 segundos", [
  ["al hacer clic en ⚑", "eventos"], ["decir ¡Hola! durante 2 seg", "apariencia"], ["esperar 2 segundos", "control"], ["pensar Hmm… durante 2 seg", "apariencia"], ["decir ¡Encantado, Luna!", "apariencia"],
], "Hablar y pensar");

const mostrar = tabla(["Bloque", "Qué hace"], [["mostrar", "hace visible el objeto"], ["esconder", "lo oculta (sigue existiendo)"], ["cambiar disfraz a …", "pone un disfraz concreto"], ["siguiente disfraz", "pasa al siguiente de la lista"], ["fijar tamaño a … %", "cambia el tamaño"], ["ir a capa delantera", "lo pone delante de todos"]]);

const pez = scratch("Programa del pez que nada: ir a la izquierda, por siempre mover, cambiar disfraz y rebotar; al hacer clic, decir glu glu y crecer", [
  ["al hacer clic en ⚑", "eventos"], ["ir a x: −180 y: 0", "movimiento"], ["fijar estilo de rotación izquierda-derecha", "movimiento"], ["por siempre", "control"], ["mover 5 pasos", "movimiento", 1], ["siguiente disfraz", "apariencia", 1], ["rebotar si toca un borde", "movimiento", 1], ["esperar 0.1 segundos", "control", 1],
], "El pez que nada");

module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "Movimiento y apariencia",
  minutos: 100,
  objetivos: [
    "Mover objetos con pasos, giros y direcciones",
    "Situar y desplazar objetos usando coordenadas",
    "Controlar los rebotes y el estilo de rotación",
    "Crear animaciones cambiando de disfraz",
    "Usar tamaño, efectos gráficos, capas y visibilidad",
    "Hacer hablar y pensar a los personajes y combinar todo en un proyecto",
  ],
  claves: ["mover", "girar", "dirección", "coordenadas", "deslizar", "rebotar", "estilo de rotación", "disfraz", "animación", "efecto", "capa"],
  pregunta: {
    texto: "En los dibujos animados, un personaje parece que camina, pero en realidad solo vemos imágenes fijas una tras otra. ¿Cómo se consigue lo mismo en Scratch?",
    respuesta: "Se combinan dos cosas: <b>mover</b> el objeto unos pocos pasos y cambiar a su <mark>siguiente disfraz</mark> (con las piernas en otra posición), con una pequeña <b>espera</b> entre medias. Si se repite muchas veces, nuestro cerebro une las imágenes y vemos al personaje <b>caminar</b>. Es el mismo truco que usan el cine y los dibujos animados.",
  },
  lectura: {
    titulo: "Muybridge y el caballo que volaba",
    html: `<p>En 1872, en California, se discutía una pregunta curiosa: cuando un caballo galopa, ¿hay algún momento en que tiene las cuatro patas en el aire? El ojo humano no era capaz de verlo, porque el movimiento es demasiado rápido. Un rico aficionado a los caballos contrató al fotógrafo <b>Eadweard Muybridge</b> para resolverlo.</p><p>Muybridge colocó doce cámaras en fila a lo largo de una pista. Cada una se disparaba cuando el caballo rompía un hilo al pasar. Así obtuvo una serie de fotos tomadas con muy poco tiempo de diferencia. Y sí: en una de ellas, el caballo tenía las cuatro patas en el aire. Pero lo más sorprendente llegó después: cuando Muybridge mostró las fotos rápidamente, una tras otra, con un aparato giratorio, ¡el caballo parecía correr!</p><p>Había descubierto el principio de la <b>animación</b>: imágenes fijas mostradas a gran velocidad crean la ilusión de movimiento. Ese mismo principio se usa en el cine, en los dibujos animados, en los videojuegos y en Scratch, cuando haces que un personaje cambie de disfraz una y otra vez. En este tema aprenderás a mover y dar vida a tus personajes.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Moverse con pasos y giros</h3><p>Los bloques de <b>Movimiento</b> (azules) permiten desplazar y girar los objetos. Los más sencillos son:</p><ul><li><b>«mover 10 pasos»</b>: avanza el número de pasos indicado <b>en la dirección en que mira</b> el objeto. Con un número negativo, retrocede.</li><li><b>«girar ↻ 15 grados»</b> y <b>«girar ↺ 15 grados»</b>: giran a la derecha o a la izquierda.</li><li><b>«apuntar en dirección 90»</b>: fija hacia dónde mira (90 derecha, −90 izquierda, 0 arriba, 180 abajo).</li><li><b>«apuntar hacia puntero del ratón»</b> o hacia otro objeto.</li></ul><p>Combinando pasos y giros se pueden hacer recorridos. Por ejemplo, para dibujar con el movimiento un cuadrado: mover 50, girar 90, cuatro veces. Fíjate en que el objeto no se mueve «hacia la derecha» o «hacia arriba», sino <b>hacia delante</b>: lo que cambia es hacia dónde mira.</p>`, svg: moverGirar, video: { id: "svCOUdnbTbc", titulo: "Scratch 3: cómo mover nuestro personaje", canal: "TIC_Educacion URJC", vistas: 58011 } },
    { html: `<h3>1.2 Seguir un recorrido</h3><p>Cuando un objeto se mueve con pasos y giros, conviene imaginar su <b>recorrido</b> en el escenario antes de programarlo. Un truco útil es ponerse en el lugar del personaje: «yo miro a la derecha, avanzo 120 pasos, giro 90° a la derecha (ahora miro hacia abajo) y avanzo 100 pasos».</p><p>Si el objeto empieza en (0, 0) mirando a la derecha, tras avanzar 120 pasos estará en (120, 0). Al girar 90° a la derecha pasa a mirar hacia abajo (dirección 180), y al avanzar 100 pasos acaba en (120, −100).</p><p>Un detalle importante: los movimientos con «mover» son <b>instantáneos</b>. Si pones varios bloques seguidos sin esperas, solo verás el resultado final, porque el ordenador los ejecuta en milésimas de segundo. Para ver el recorrido, añade un bloque «esperar 0,5 segundos» entre cada paso o usa el bloque «deslizar».</p>`, svg: recorrido },
    { html: `<h3>1.3 Moverse con coordenadas</h3><p>Otra forma de mover objetos es usar las <b>coordenadas</b> del escenario (x de −240 a 240; y de −180 a 180):</p><ul><li><b>«ir a x: … y: …»</b>: coloca el objeto en un punto exacto, de golpe.</li><li><b>«deslizar en 1 seg a x: … y: …»</b>: lo lleva a ese punto <b>suavemente</b>, en el tiempo indicado.</li><li><b>«ir a posición aleatoria»</b> o «ir a puntero del ratón».</li><li><b>«sumar 10 a x»</b>: lo mueve 10 pasos a la derecha (con −10, a la izquierda), sin importar hacia dónde mira.</li><li><b>«fijar x a …»</b>: cambia solo la coordenada x.</li><li>Lo mismo con y: «sumar 10 a y» lo sube; «sumar −10 a y» lo baja.</li></ul><p>Es muy habitual empezar un programa con «ir a x: … y: …» para que el personaje vuelva siempre a su posición inicial cada vez que se pulsa la bandera verde.</p>`, svg: irA },
    { html: `<h3>1.4 Pasos o coordenadas: cuándo usar cada uno</h3><p>Los dos sistemas sirven para mover, pero se usan en situaciones distintas:</p>${tabla(["Situación", "Mejor usar"], [["Personaje que avanza y gira (coche, robot)", "mover y girar"], ["Colocar algo en un sitio exacto", "ir a x: y:"], ["Movimiento suave hasta un punto", "deslizar"], ["Mover con las flechas del teclado", "sumar a x / sumar a y"], ["Saltar (subir y bajar)", "sumar a y"]])}<p>El bloque <b>«deslizar»</b> es muy útil para animaciones sencillas: el personaje se desplaza por sí solo, sin necesidad de repetir pasos. Mientras desliza, el programa espera a que termine antes de pasar al siguiente bloque.</p><p>En la parte inferior de la categoría Movimiento hay unas casillas para <b>mostrar en el escenario</b> la posición x, la posición y y la dirección del objeto. Activarlas ayuda mucho a entender qué está pasando mientras pruebas el programa.</p>`, svg: desliza },
    { html: `<h3>1.5 Rebotar y estilo de rotación</h3><p>¿Qué pasa si un objeto llega al borde del escenario? Con el bloque <b>«rebotar si toca un borde»</b>, el objeto cambia de dirección como una pelota que choca contra una pared. Es muy útil dentro de un bucle «por siempre» para que un personaje vaya y venga sin salirse.</p><p>Al rebotar, el objeto gira, y a veces queda <b>boca abajo</b>. Para controlarlo existe el bloque <b>«fijar estilo de rotación»</b>, con tres opciones:</p><ul><li><b>En todas direcciones</b>: gira libremente (útil para una pelota, una nave, un coche visto desde arriba).</li><li><b>Izquierda-derecha</b>: solo se da la vuelta mirando a un lado o al otro; nunca queda boca abajo. Es la mejor opción para personajes que caminan.</li><li><b>No rotar</b>: nunca cambia su imagen, aunque cambie su dirección.</li></ul>`, svg: rebote },
    { html: `<h3>1.6 Elegir el estilo de rotación adecuado</h3><p>Elegir bien el estilo de rotación evita muchos resultados extraños. Imagina un juego en el que un perro corre de un lado a otro de la pantalla: con «en todas direcciones», al rebotar en el borde derecho se pondría patas arriba; con «izquierda-derecha», simplemente se da la vuelta y corre hacia la izquierda, como haría un perro de verdad.</p><p>En cambio, para una nave espacial que puede ir hacia cualquier sitio, o para una pelota que rebota en diagonal, «en todas direcciones» es lo adecuado, porque queremos que apunte hacia donde se mueve.</p><p>Y «no rotar» sirve para objetos que se mueven pero cuya imagen no debe cambiar: un texto, un botón, un letrero o una nube. El estilo de rotación también se puede cambiar sin programar, en el panel de propiedades del objeto, haciendo clic en la dirección.</p>`, svg: rotacion },
    { html: `<h3>1.7 Los disfraces y la animación</h3><p>Ya sabes que cada objeto puede tener varios <b>disfraces</b>. Los bloques de <b>Apariencia</b> (morados) permiten cambiarlos desde el programa:</p><ul><li><b>«cambiar disfraz a …»</b>: pone un disfraz concreto.</li><li><b>«siguiente disfraz»</b>: pasa al siguiente de la lista; tras el último, vuelve al primero.</li><li>El valor <b>«disfraz (número)»</b> indica qué disfraz lleva puesto.</li></ul><p>Para que un personaje <b>camine</b>, se combinan movimiento y disfraces dentro de un bucle: «por siempre: mover 10 pasos, siguiente disfraz, esperar 0,1 segundos, rebotar si toca un borde». La espera es importante: sin ella, los disfraces cambiarían tan rápido que no se notaría la animación. Probando distintos valores de espera y de pasos, el personaje andará más despacio o más deprisa.</p>`, svg: caminar, video: { id: "PER63YudX4c", titulo: "Scratch: movimiento de objetos con cambio de disfraz en diferentes escenas", canal: "CuriosoYas", vistas: 251285 } },
    { html: `<h3>1.8 El principio de la animación</h3><p>¿Por qué vemos movimiento donde solo hay imágenes fijas? Nuestro ojo y nuestro cerebro conservan cada imagen una fracción de segundo. Si las imágenes cambian muy deprisa, el cerebro «rellena los huecos» y percibe un movimiento continuo. Cada imagen se llama <b>fotograma</b>.</p><p>El cine clásico usa 24 fotogramas por segundo; los dibujos animados, a menudo 12; los videojuegos, 30, 60 o más. En Scratch, el programa se actualiza unas 30 veces por segundo.</p><p>Para que una animación quede bien, los disfraces deben cambiar <b>poco</b> de uno a otro: si las piernas del personaje dan un salto enorme entre un disfraz y el siguiente, el movimiento se verá brusco. Por eso los animadores dibujan muchas posiciones intermedias. En Scratch puedes <b>duplicar</b> un disfraz y modificarlo un poco para crear la siguiente posición.</p>`, svg: fotogramas },
    { html: `<h3>2.1 Tamaño y efectos gráficos</h3><p>Los bloques de Apariencia también cambian el aspecto del objeto:</p><ul><li><b>«fijar tamaño a 100 %»</b> y <b>«cambiar tamaño por 10»</b>: hacen el objeto más grande o más pequeño. 100 % es su tamaño original; 50 %, la mitad; 200 %, el doble.</li><li><b>«cambiar efecto color por 25»</b> y <b>«fijar efecto … a …»</b>: aplican efectos gráficos: <b>color</b>, <b>ojo de pez</b>, <b>remolino</b>, <b>pixelar</b>, <b>mosaico</b>, <b>brillo</b> y <b>desvanecer</b> (transparencia).</li><li><b>«quitar efectos gráficos»</b>: devuelve el aspecto original.</li></ul><p>Con efectos y tamaño se consiguen animaciones vistosas: un personaje que crece al comer, un fantasma que se desvanece, una estrella que cambia de color sin parar. Es buena costumbre empezar los programas con «fijar tamaño a 100 %» y «quitar efectos gráficos» para que todo vuelva a su estado inicial.</p>`, svg: tamano, video: { id: "QRs1ZZkiRm0", titulo: "Apariencia de personajes en Scratch 1", canal: "Profe Javier", vistas: 4413 } },
    { html: `<h3>2.2 Mostrar, esconder y capas</h3><p>Hay bloques para controlar si un objeto se ve y qué objeto queda delante:</p>${mostrar}<p>Un objeto escondido <b>sigue existiendo</b> y sus programas pueden seguir funcionando: simplemente no se ve. Esto es útil para que aparezcan personajes en un momento de la historia, o para que una moneda desaparezca cuando el jugador la recoge.</p><p>Cuando dos objetos se superponen, uno queda <b>delante</b> del otro, como en capas de papel. Con «ir a capa delantera» o «ir a capa trasera» se elige cuál se ve encima, y con «ir 1 capa hacia atrás» se ajusta poco a poco. Así, por ejemplo, un personaje puede pasar por detrás de un árbol.</p>`, svg: capas },
    { html: `<h3>2.3 Hablar y pensar</h3><p>Los personajes pueden comunicarse con <b>bocadillos</b> de texto:</p><ul><li><b>«decir ¡Hola! durante 2 segundos»</b>: muestra un bocadillo de habla y lo quita al pasar el tiempo. El programa espera.</li><li><b>«decir ¡Hola!»</b>: muestra el bocadillo y lo deja hasta que se diga otra cosa. El programa sigue.</li><li><b>«pensar Hmm… durante 2 segundos»</b> y <b>«pensar Hmm…»</b>: igual, pero con un bocadillo de nube, de pensamiento.</li></ul><p>Para crear un <b>diálogo</b> entre dos personajes, hay que coordinar los tiempos: mientras uno habla 2 segundos, el otro espera 2 segundos, y luego responde. Es como escribir el guion de una obra con los tiempos de cada actor. Para borrar un bocadillo que no tiene tiempo, se usa «decir» con el texto vacío. En el tema de animaciones interactivas verás una forma más elegante de coordinar personajes: los mensajes.</p>`, svg: dialogo },
    { html: `<h3>2.4 Un ejemplo completo: el pez que nada</h3><p>Vamos a juntar todo lo aprendido en un pequeño proyecto: un pez que nada por el fondo del mar.</p><ol><li>Elige el fondo «Underwater» y el objeto «Fish», que tiene varios disfraces.</li><li>Al hacer clic en la bandera: ir a x: −180, y: 0 y fijar el estilo de rotación izquierda-derecha.</li><li>Por siempre: mover 5 pasos, siguiente disfraz, rebotar si toca un borde y esperar 0,1 segundos.</li><li>Añade otro programa: «al hacer clic en este objeto», decir «¡Glu, glu!» durante 1 segundo y cambiar el tamaño por 10.</li><li>Prueba, ajusta los números y añade más peces con colores distintos (efecto color).</li></ol><p>Has usado movimiento, coordenadas, rebote, estilo de rotación, disfraces, tamaño y bocadillos. ¡Ya tienes un acuario animado! Puedes mejorarlo con burbujas que suben (sumar a y) y desaparecen al llegar arriba.</p>`, svg: pez },
  ],
  ejemplos: [
    { enunciado: "Un objeto está en (0, 0) mirando a la derecha. Ejecuta: mover 80, girar ↺ 90, mover 50. ¿Dónde acaba?", pasos: ["mover 80 → (80, 0).", "girar a la izquierda 90 → mira hacia arriba.", "mover 50 → (80, 50)."], resultado: "En (80, 50)." },
    { enunciado: "Haz que el gato dibuje con su movimiento un triángulo equilátero.", pasos: ["Repetir 3 veces: mover 100, girar 120 grados.", "Añadir esperas para verlo."], resultado: "Tres lados de 100 y giros de 120°." },
    { enunciado: "Un personaje camina y al rebotar se pone boca abajo. ¿Cómo se arregla?", pasos: ["El estilo de rotación es «en todas direcciones».", "Añadir al principio «fijar estilo de rotación izquierda-derecha»."], resultado: "Ya solo se da la vuelta." },
    { enunciado: "Haz que un fantasma desaparezca poco a poco.", pasos: ["repetir 10: cambiar efecto desvanecer por 10; esperar 0,1 s.", "Al final, esconder."], resultado: "Se vuelve transparente y desaparece." },
    { enunciado: "Mueve el gato a la esquina superior derecha de forma suave en 3 segundos.", pasos: ["Esquina superior derecha ≈ (200, 140).", "deslizar en 3 seg a x: 200 y: 140."], resultado: "Usa «deslizar»." },
    { enunciado: "Crea un diálogo: el gato dice «¿Quién eres?» 2 s y el perro responde «¡Soy Rex!».", pasos: ["Gato: decir ¿Quién eres? durante 2 segundos.", "Perro: esperar 2 segundos; decir ¡Soy Rex! durante 2 segundos."], resultado: "Los tiempos se coordinan con esperas." },
  ],
  errores: [
    "Poner varios movimientos sin esperas y no ver el recorrido, solo el resultado final.",
    "Confundir «mover» (según la dirección) con «sumar a x» (siempre horizontal).",
    "Olvidar el estilo de rotación y que el personaje quede boca abajo.",
    "Animar sin esperas: los disfraces cambian tan rápido que no se ve nada.",
    "No reiniciar posición, tamaño y efectos al empezar, y que el proyecto empiece «raro».",
    "Desincronizar los diálogos: dos personajes hablando a la vez.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿De qué color son los bloques de movimiento y los de apariencia?", sol: "Azul y morado." },
    { nivel: "básico", q: "¿Qué hace «mover 10 pasos»?", sol: "Avanza 10 pasos en la dirección en que mira el objeto." },
    { nivel: "básico", q: "¿Qué diferencia hay entre «ir a x: y:» y «deslizar … a x: y:»?", sol: "Ir a lo coloca de golpe; deslizar lo lleva suavemente en un tiempo." },
    { nivel: "básico", q: "¿Qué bloque usas para mover un objeto 10 pasos hacia arriba sin girarlo?", sol: "sumar 10 a y." },
    { nivel: "básico", q: "¿Para qué sirve «rebotar si toca un borde»?", sol: "Para que el objeto cambie de dirección al llegar al borde." },
    { nivel: "básico", q: "Escribe los tres estilos de rotación.", sol: "En todas direcciones, izquierda-derecha y no rotar." },
    { nivel: "básico", q: "¿Qué hace «siguiente disfraz»?", sol: "Pone el siguiente disfraz de la lista; tras el último vuelve al primero." },
    { nivel: "básico", q: "¿Qué tamaño tiene un objeto al 200 %?", sol: "El doble de su tamaño original." },
    { nivel: "básico", q: "Nombra cuatro efectos gráficos.", sol: "Color, ojo de pez, remolino, pixelar (también mosaico, brillo, desvanecer)." },
    { nivel: "básico", q: "¿Qué diferencia hay entre «decir» y «pensar»?", sol: "Decir muestra un bocadillo de habla; pensar, uno de nube." },
    { nivel: "básico", q: "Un objeto escondido, ¿sigue existiendo?", sol: "Sí; no se ve, pero sus programas pueden funcionar." },
    { nivel: "básico", q: "¿Qué es un fotograma?", sol: "Cada una de las imágenes fijas que forman una animación." },
    { nivel: "medio", q: "Un objeto en (−50, 20) ejecuta «sumar 30 a x» y «sumar −40 a y». ¿Dónde queda?", sol: "En (−20, −20)." },
    { nivel: "medio", q: "Un objeto en (0, 0) mira hacia arriba. Ejecuta: mover 60, girar ↻ 90, mover 40. ¿Dónde acaba?", sol: "Arriba 60 → (0, 60); gira a la derecha y avanza 40 → (40, 60)." },
    { nivel: "medio", q: "Escribe el programa para que un objeto dibuje con su movimiento un cuadrado de lado 80.", sol: "Repetir 4: mover 80, girar 90 grados (con esperas para verlo)." },
    { nivel: "medio", q: "Escribe el programa de un murciélago que vuela de lado a lado batiendo las alas.", sol: "Estilo izquierda-derecha; por siempre: mover 8, siguiente disfraz, rebotar si toca un borde, esperar 0,1 s." },
    { nivel: "medio", q: "¿Por qué hace falta «esperar» en una animación con disfraces?", sol: "Sin espera los cambios son tan rápidos que no se perciben." },
    { nivel: "medio", q: "Explica qué estilo de rotación usarías para una pelota, un perro y un letrero.", sol: "Pelota: todas direcciones (o no rotar); perro: izquierda-derecha; letrero: no rotar." },
    { nivel: "medio", q: "Haz que una estrella cambie de color sin parar.", sol: "Por siempre: cambiar efecto color por 10; esperar 0,1 s." },
    { nivel: "medio", q: "¿Cómo harías que un personaje pase por detrás de un árbol?", sol: "Poner el árbol en la capa delantera o el personaje una capa hacia atrás." },
    { nivel: "medio", q: "Coordina un diálogo de 3 frases entre dos personajes con «decir» y «esperar».", sol: "A dice 2 s; B espera 2 s y dice 2 s; A espera 2 s y dice 2 s." },
    { nivel: "medio", q: "¿Por qué conviene empezar con «ir a x: y:», «fijar tamaño a 100 %» y «quitar efectos gráficos»?", sol: "Para que el proyecto empiece siempre igual, aunque antes se hayan cambiado." },
    { nivel: "medio", q: "Un globo debe subir despacio desde abajo hasta arriba. Escribe dos formas de programarlo.", sol: "Deslizar en 5 s a la y de arriba; o repetir 60: sumar 5 a y, esperar 0,05 s." },
    { nivel: "avanzado", q: "Programa un objeto que dibuje con su movimiento un hexágono regular. ¿Qué ángulo debe girar?", sol: "Repetir 6: mover 60, girar 60 grados (360 : 6)." },
    { nivel: "avanzado", q: "Crea un personaje que «salte»: suba 50 pasos y vuelva a bajar suavemente al pulsar la barra espaciadora.", sol: "Al presionar espacio: repetir 10 sumar 5 a y; repetir 10 sumar −5 a y (con esperas cortas)." },
    { nivel: "avanzado", q: "Diseña una animación de 4 disfraces para una flor que se abre. Describe cada disfraz y el programa.", sol: "Capullo, medio abierta, casi abierta, abierta; cambiar disfraz a capullo y repetir 3: esperar 0,5 s, siguiente disfraz." },
    { nivel: "avanzado", q: "Un compañero dice que su personaje «no se mueve» aunque tiene «mover 10 pasos» dentro de «por siempre». Da dos causas posibles.", sol: "Falta el evento de inicio o el objeto está escondido/fuera del escenario o tiene otro objeto delante; o el programa está en otro objeto." },
    { nivel: "avanzado", q: "Crea un efecto de «teletransporte»: el objeto se desvanece, aparece en una posición aleatoria y vuelve a hacerse visible.", sol: "Repetir 10 desvanecer +10; ir a posición aleatoria; repetir 10 desvanecer −10." },
    { nivel: "avanzado", q: "Amplía el pez que nada: añade burbujas que suben desde el pez y desaparecen al llegar arriba.", sol: "Burbuja: ir a la posición del pez, mostrar, repetir hasta y > 170: sumar 3 a y; esconder." },
  ],
  quiz: [
    { q: "«mover 10 pasos» mueve el objeto…", o: ["siempre a la derecha", "en la dirección en que mira", "hacia arriba", "al azar"], a: 1, e: "Según su dirección." },
    { q: "Dirección −90 es…", o: ["derecha", "izquierda", "arriba", "abajo"], a: 1, e: "Izquierda." },
    { q: "«girar ↻ 90» gira…", o: ["a la izquierda", "a la derecha", "180°", "nada"], a: 1, e: "Sentido horario." },
    { q: "«ir a x: 0 y: 0» lleva al objeto…", o: ["a una esquina", "al centro", "fuera", "abajo"], a: 1, e: "Origen." },
    { q: "Para moverse suavemente hasta un punto se usa…", o: ["ir a", "deslizar", "mover", "girar"], a: 1, e: "Deslizar." },
    { q: "«sumar 10 a y» mueve el objeto…", o: ["a la derecha", "hacia arriba", "hacia abajo", "a la izquierda"], a: 1, e: "y aumenta." },
    { q: "«sumar −10 a x» mueve…", o: ["a la derecha", "a la izquierda", "arriba", "abajo"], a: 1, e: "x disminuye." },
    { q: "Para que no se salga del escenario se usa…", o: ["esconder", "rebotar si toca un borde", "girar", "decir"], a: 1, e: "Rebote." },
    { q: "Para que un personaje no quede boca abajo se usa el estilo…", o: ["todas direcciones", "izquierda-derecha", "ninguno", "remolino"], a: 1, e: "Solo se voltea." },
    { q: "Cambiar de disfraz rápidamente crea…", o: ["un sonido", "una animación", "un error", "una variable"], a: 1, e: "Ilusión de movimiento." },
    { q: "En una animación, la espera sirve para…", o: ["nada", "que se vean los cambios", "borrar disfraces", "guardar"], a: 1, e: "Ritmo." },
    { q: "Tamaño 50 % es…", o: ["el doble", "la mitad", "igual", "invisible"], a: 1, e: "Mitad." },
    { q: "El efecto que vuelve transparente es…", o: ["color", "desvanecer", "pixelar", "remolino"], a: 1, e: "Desvanecer." },
    { q: "«quitar efectos gráficos»…", o: ["borra el objeto", "devuelve el aspecto original", "lo esconde", "cambia el disfraz"], a: 1, e: "Reinicia efectos." },
    { q: "Un objeto escondido…", o: ["se borra", "no se ve pero existe", "deja de tener programas", "cambia de nombre"], a: 1, e: "Sigue ahí." },
    { q: "Para poner un objeto delante de todos…", o: ["ir a capa trasera", "ir a capa delantera", "mostrar", "deslizar"], a: 1, e: "Capas." },
    { q: "«pensar» muestra un bocadillo de…", o: ["habla", "nube", "grito", "error"], a: 1, e: "Pensamiento." },
    { q: "«decir … durante 2 segundos»…", o: ["no espera", "espera 2 s antes de seguir", "repite 2 veces", "suena 2 s"], a: 1, e: "El programa espera." },
    { q: "El cine clásico usa…", o: ["2 fotogramas por segundo", "24 fotogramas por segundo", "1 000 por segundo", "1 por segundo"], a: 1, e: "24 fps." },
    { q: "Muybridge demostró que el caballo al galopar…", o: ["nunca levanta las patas", "tiene momentos con las 4 patas en el aire", "vuela", "salta solo con 2"], a: 1, e: "Fotos en serie." },
  ],
  examen: [
    { q: "Objeto en (10, 10), «sumar 20 a x»:", o: ["(10, 30)", "(30, 10)", "(20, 20)", "(−10, 10)"], a: 1, e: "Solo cambia x." },
    { q: "En (0, 0) mirando arriba, «mover 30»:", o: ["(30, 0)", "(0, 30)", "(0, −30)", "(−30, 0)"], a: 1, e: "Dirección 0." },
    { q: "Para un cuadrado se gira…", o: ["45°", "90°", "120°", "60°"], a: 1, e: "360 : 4." },
    { q: "Para un triángulo equilátero se gira…", o: ["60°", "120°", "90°", "180°"], a: 1, e: "Ángulo exterior." },
    { q: "Bloque para poner el disfraz número 1:", o: ["siguiente disfraz", "cambiar disfraz a disfraz1", "mostrar", "fijar tamaño"], a: 1, e: "Disfraz concreto." },
    { q: "Si el perro rebota y queda boca abajo, falta…", o: ["un sonido", "fijar estilo de rotación izquierda-derecha", "un fondo", "una espera"], a: 1, e: "Estilo de rotación." },
    { q: "Para que un fantasma se vuelva transparente:", o: ["efecto color", "efecto desvanecer", "efecto remolino", "efecto ojo de pez"], a: 1, e: "Transparencia." },
    { q: "Un personaje debe pasar por detrás de un árbol:", o: ["esconder el árbol", "árbol en capa delantera", "cambiar el fondo", "girar 180"], a: 1, e: "Capas." },
  ],
  feynman: ["Qué diferencia hay entre mover con pasos y mover con coordenadas", "Para qué sirve el estilo de rotación y cuál elegir para un personaje", "Cómo se crea una animación con disfraces y por qué hace falta esperar", "Cómo se coordina un diálogo entre dos personajes"],
  figura: {
    titulo: "Movimiento y apariencia en un vistazo",
    svg: resumen("Resumen: pasos y giros, coordenadas, rebote, disfraces, efectos y bocadillos", [
      ["Pasos y giros", "mover · girar · apuntar en dirección", CAT.movimiento],
      ["Coordenadas", "ir a · deslizar · sumar a x / y", "var(--pen)"],
      ["Bordes", "rebotar · estilo de rotación", "var(--leaf)"],
      ["Disfraces", "siguiente disfraz + esperar = animación", CAT.apariencia],
      ["Aspecto", "tamaño · efectos · capas · decir y pensar", "var(--red)"],
    ]),
  },
  video: { id: "j_BILVTK9k8", titulo: "Cómo hacer caminar un personaje en Scratch", canal: "dalia hinojosa", vistas: 47718, megusta: 0, busqueda: "scratch bloques movimiento apariencia" },
  mapa: mapa("MOVER Y ANIMAR", "var(--pen)", [
    ["Movimiento", "pasos · giros · dirección", CAT.movimiento],
    ["Posición", "coordenadas · deslizar", "var(--leaf)"],
    ["Animación", "disfraces · esperas", CAT.apariencia],
    ["Aspecto", "tamaño · efectos · bocadillos", "var(--red)"],
  ], 250),
  glosario: [
    ["Paso", "Unidad de movimiento en Scratch."],
    ["Dirección", "Hacia dónde mira un objeto, en grados."],
    ["Girar", "Cambiar la dirección de un objeto."],
    ["Deslizar", "Mover un objeto suavemente hasta un punto en un tiempo dado."],
    ["Rebotar", "Cambiar de dirección al tocar el borde."],
    ["Estilo de rotación", "Forma en que la imagen del objeto gira al cambiar de dirección."],
    ["Disfraz", "Cada imagen de un objeto."],
    ["Animación", "Ilusión de movimiento creada con imágenes que cambian rápidamente."],
    ["Fotograma", "Cada imagen fija de una animación."],
    ["Efecto gráfico", "Cambio de aspecto: color, desvanecer, remolino, pixelar…"],
    ["Capa", "Orden en que se dibujan los objetos, unos delante de otros."],
    ["Bocadillo", "Globo de texto con lo que un personaje dice o piensa."],
  ],
  situacion: {
    titulo: "El acuario animado",
    reto: "Vas a crear en Scratch un acuario con varios animales marinos que se mueven, se animan y reaccionan al hacer clic sobre ellos.",
    pasos: [
      "Elige un fondo marino y al menos tres objetos (peces, medusa, cangrejo).",
      "Coloca cada objeto con coordenadas y elige su estilo de rotación.",
      "Anima cada uno con movimiento, disfraces y esperas.",
      "Añade reacciones al clic: decir algo, cambiar tamaño o color.",
      "Incluye un detalle extra (burbujas, capas, desvanecer) y presenta tu acuario.",
    ],
    producto: "Un proyecto de Scratch con un acuario animado e interactivo.",
    evaluacion: ["Usa movimientos y coordenadas correctamente.", "Las animaciones con disfraces son fluidas.", "Elige estilos de rotación adecuados.", "Usa efectos, capas y bocadillos con sentido."],
  },
  tarjetas: [
    ["mover", "Avanza según su dirección"], ["girar", "Cambia la dirección"], ["ir a x: y:", "Posición exacta, de golpe"],
    ["deslizar", "Movimiento suave"], ["sumar a x", "Horizontal"], ["sumar a y", "Vertical"],
    ["rebotar", "Cambia de sentido en el borde"], ["izquierda-derecha", "No queda boca abajo"], ["siguiente disfraz", "Animación"],
    ["fijar tamaño", "100 % = original"], ["desvanecer", "Transparencia"], ["pensar", "Bocadillo de nube"],
  ],
  familias: ["Haced juntos un folioscopio (dibujos en las esquinas de un cuaderno) para entender la animación.", "Pedid que os enseñe a mover un personaje con pasos y con coordenadas.", "Ved juntos cómo se hacían los primeros dibujos animados.", "Proponed un reto: hacer que el gato dibuje la inicial de vuestro nombre."],
  profesores: {
    saberes: "Programación por bloques: movimiento con pasos, giros, direcciones y coordenadas, rebote y estilo de rotación, disfraces y animación, tamaño, efectos gráficos, capas, visibilidad y bocadillos (materia optativa de Programación y robótica, en el marco del RD 217/2022).",
    ideas: ["Folioscopio en papel antes de animar en Scratch.", "Retos de recorridos: llegar a un punto con pasos y giros.", "Concurso de animaciones de 4 disfraces.", "Proyecto de acuario con galería en el aula."],
  },
  fuentes: [RD, { t: "Scratch (MIT): página oficial", url: "https://scratch.mit.edu/" }, wiki("Animación", "Animación"), wiki("Eadweard Muybridge", "Eadweard_Muybridge")],
  revisado: REV,
};
