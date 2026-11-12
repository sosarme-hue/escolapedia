// Programación y robótica 1º ESO: movimiento y apariencia en Scratch. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

// Bloque de Scratch simple (rectángulo de color con texto blanco).
const bq = (x, y, w, s, c) => `<rect x="${x}" y="${y}" width="${w}" height="22" rx="4" fill="${c}"/>${et(x + 8, y + 15.5, s, w - 14, { anchor: "start", color: "#fff", size: 10.5 })}`;
// Pez propio: sx = 1 mira a la derecha, -1 a la izquierda; sy = -1 lo pone boca abajo.
const pez = (x, y, sx, sy) => `<g transform="translate(${x} ${y}) scale(${sx} ${sy})"><path d="M-14 0 l -12 -10 v 20 z" fill="#e8892c" stroke="var(--ink)"/><ellipse cx="0" cy="0" rx="17" ry="10" fill="#fbbf24" stroke="var(--ink)"/><path d="M-2 -10 q 6 -8 12 -2" fill="#e8892c" stroke="var(--ink)"/><circle cx="9" cy="-3" r="2.2" fill="var(--ink)"/></g>`;
const AZ = "#4c97ff", MO = "#9966ff", AM = "#c98a00", NA = "#e8892c";

module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "Movimiento y apariencia",
  minutos: 55,
  objetivos: ["Mover objetos por el escenario con pasos, giros y coordenadas", "Usar deslizamientos y el control de la dirección", "Cambiar la apariencia de un objeto: disfraces, tamaño, efectos y visibilidad", "Hacer que los objetos hablen y piensen, y combinar movimiento y apariencia en una animación"],
  claves: ["movimiento", "mover pasos", "girar", "grados", "dirección", "ir a", "deslizar", "rebotar", "estilo de rotación", "apariencia", "disfraz", "tamaño", "efecto", "mostrar y esconder", "decir y pensar"],
  pregunta: {
    texto: "En los dibujos animados, un personaje parece que camina, pero en realidad solo vemos imágenes fijas una tras otra. ¿Cómo se consigue lo mismo en Scratch?",
    respuesta: "Combinando dos cosas: el <b>movimiento</b>, que cambia la posición del objeto en el escenario poco a poco, y el <b>cambio de disfraz</b>, que alterna imágenes con las piernas en distintas posiciones. Si en cada paso el objeto avanza un poco y cambia de disfraz, y se hace una pequeña pausa, nuestro ojo lo interpreta como un movimiento continuo, igual que en el cine.",
  },
  bloques: [
    {
      html: `<h3>Moverse con pasos y giros</h3><p>Los bloques de <mark>Movimiento</mark> (color azul) cambian la posición y la dirección de un objeto. El más sencillo es <b>«mover 10 pasos»</b>: el objeto avanza 10 puntos <b>en la dirección hacia la que mira</b>. Si el número es negativo, retrocede. Para cambiar la dirección están <b>«girar ↻ 15 grados»</b> (en el sentido de las agujas del reloj) y <b>«girar ↺ 15 grados»</b> (en sentido contrario). Una vuelta completa son <b>360 grados</b>; media vuelta, 180; y un cuarto de vuelta, 90. La dirección de un objeto se mide en grados: <b>90</b> es hacia la derecha, <b>−90</b> hacia la izquierda, <b>0</b> hacia arriba y <b>180</b> hacia abajo. Con <b>«apuntar en dirección 90»</b> se fija la dirección exacta, y con <b>«apuntar hacia puntero del ratón»</b> o hacia otro objeto, el objeto se orienta hacia él. Combinando pasos y giros se pueden hacer recorridos: avanzar 100, girar 90°, avanzar 100… Si un movimiento sucede de golpe y no se ve, hay que añadir pequeñas <b>esperas</b> entre bloques.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Rosa de direcciones de Scratch: 0 arriba, 90 derecha, 180 abajo y menos 90 izquierda, con un objeto en el centro mirando a la derecha">${BG}
        <circle cx="110" cy="92" r="60" fill="var(--card)" stroke="var(--line)" stroke-width="1.5"/>
        ${fl(110, 92, 110, 38, "var(--ink)", 1.8)}${fl(110, 92, 164, 92, COL.azul, 2.6)}${fl(110, 92, 110, 146, "var(--ink)", 1.8)}${fl(110, 92, 56, 92, "var(--ink)", 1.8)}
        ${t(110, 28, "0", { size: 11 })}${t(176, 96, "90", { size: 11, anchor: "start", color: COL.azul })}${t(110, 166, "180", { size: 11 })}${t(46, 96, "−90", { size: 11, anchor: "end" })}
        <circle cx="110" cy="92" r="9" fill="var(--sun)" stroke="var(--ink)"/>
        ${t(232, 60, "dirección", { size: 10, color: COL.azul })}${t(232, 76, "en grados", { size: 9.5, weight: 400 })}${t(232, 110, "360° =", { size: 9.5, weight: 400 })}${t(232, 124, "una vuelta", { size: 9.5, weight: 400 })}</svg>`,
      video: { id: "svCOUdnbTbc", titulo: "Scratch 3: cómo mover nuestro personaje", canal: "TIC_Educacion URJC", vistas: 58011 },
    },
    {
      html: `<h3>Moverse con coordenadas</h3><p>Otra forma de mover un objeto es usar las <mark>coordenadas</mark> del escenario (x horizontal, de −240 a 240; y vertical, de −180 a 180). El bloque <b>«ir a x: 0 y: 0»</b> coloca el objeto en ese punto exacto <b>al instante</b>; es el bloque ideal para colocar los objetos al empezar el programa. <b>«Ir a posición aleatoria»</b> lo lleva a un lugar al azar, y <b>«ir a puntero del ratón»</b> lo pega al ratón. Para que el movimiento se vea, se usa <mark>«deslizar en 1 segundos a x: 100 y: 50»</mark>, que lleva al objeto hasta ese punto de forma suave, en el tiempo indicado. También se puede cambiar solo una coordenada: <b>«sumar 10 a x»</b> mueve el objeto 10 puntos a la derecha (con −10, a la izquierda), sin importar hacia dónde mire, y <b>«sumar 10 a y»</b> lo sube 10 puntos. Estos bloques son muy útiles para controlar un personaje con las flechas del teclado: al pulsar la flecha derecha, sumar 10 a x; al pulsar la flecha arriba, sumar 10 a y; y así con las demás. Los valores actuales de x, y y la dirección se pueden consultar en los bloques redondeados «posición en x», «posición en y» y «dirección».</p>${tabla(["Bloque", "Qué hace", "Cuándo usarlo"], [["mover 10 pasos", "avanza hacia donde mira", "caminar, recorridos con giros"], ["ir a x: y:", "salta al punto al instante", "posición inicial"], ["deslizar en 1 s a x: y:", "va al punto suavemente", "animaciones"], ["sumar 10 a x", "se mueve en horizontal", "control con flechas"], ["sumar 10 a y", "se mueve en vertical", "saltar, subir y bajar"]])}`,
    },
    {
      html: `<h3>Rebotar y estilo de rotación</h3><p>Cuando un objeto avanza sin parar, acaba llegando al borde del escenario y se queda pegado. El bloque <mark>«rebotar si toca un borde»</mark> hace que cambie de dirección al tocarlo, como una pelota contra una pared. Con «por siempre: mover 10 pasos; rebotar si toca un borde», el objeto va y viene sin parar. Pero aparece un problema: al rebotar hacia la izquierda, el objeto gira 180° y se queda <b>boca abajo</b>. Para evitarlo está el bloque <mark>«fijar estilo de rotación»</mark>, con tres opciones: <b>«en todas direcciones»</b> (gira libremente, el estilo por defecto), <b>«izquierda-derecha»</b> (solo mira a la izquierda o a la derecha, como un personaje de un juego de plataformas: es el más usado) y <b>«no rotar»</b> (nunca cambia de orientación, aunque cambie su dirección de movimiento). Elegir bien el estilo de rotación es un detalle pequeño que hace que las animaciones queden mucho más naturales.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un objeto rebota en el borde derecho; con estilo en todas direcciones queda boca abajo y con estilo izquierda-derecha queda bien">${BG}
        <rect x="14" y="20" width="232" height="60" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>
        <path d="M40 50 H 236" stroke="var(--muted)" stroke-dasharray="4 3"/>${fl(200, 44, 232, 44, COL.azul, 2)}${fl(232, 58, 200, 58, COL.rojo, 2)}
        ${t(110, 40, "rebotar si toca un borde", { size: 9.5, color: "var(--muted)" })}
        ${pez(70, 116, -1, -1)}
        ${t(70, 160, "todas direcciones", { size: 9.5, color: COL.rojo })}${t(70, 172, "queda boca abajo", { size: 8.5, weight: 400 })}
        ${pez(190, 116, -1, 1)}${t(190, 160, "izquierda-derecha", { size: 9.5, color: COL.verde })}${t(190, 172, "se da la vuelta bien", { size: 8.5, weight: 400 })}</svg>`,
    },
    {
      html: `<h3>Los disfraces</h3><p>Los bloques de <mark>Apariencia</mark> (color morado) cambian el aspecto de los objetos. Recuerda que cada objeto puede tener varios <b>disfraces</b>, que se ven en la pestaña Disfraces. El bloque <mark>«siguiente disfraz»</mark> cambia al disfraz que va a continuación; cuando llega al último, vuelve al primero. Si se repite con una pequeña espera, se consigue una <b>animación</b>: el gato parece que camina, un pájaro que aletea o una llama que se mueve. El bloque <b>«cambiar disfraz a…»</b> pone un disfraz concreto, por su nombre o su número; es útil, por ejemplo, para mostrar una cara triste cuando un personaje pierde, o para que el personaje empiece siempre con el disfraz correcto. Como en el movimiento, la <b>velocidad</b> de la animación depende de la espera: con 0,1 segundos el cambio es rápido y fluido; con 1 segundo, se ve a saltos. El escenario tiene bloques parecidos para los fondos: <b>«cambiar fondo a…»</b> y <b>«siguiente fondo»</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Programa de animación: al hacer clic en la bandera, por siempre mover 5 pasos, siguiente disfraz y esperar 0,2 segundos">${BG}
        ${bq(40, 26, 170, "al hacer clic en 🏁", AM)}
        <path d="M40 52 h 170 v 22 H 60 v 70 h 150 v 14 H 40 Z" fill="${NA}"/>${et(48, 67.5, "por siempre", 150, { anchor: "start", color: "#fff", size: 10.5 })}
        ${bq(60, 78, 140, "mover 5 pasos", AZ)}${bq(60, 102, 140, "siguiente disfraz", MO)}${bq(60, 126, 140, "esperar 0,2 segundos", NA)}
        ${t(130, 174, "moverse + cambiar disfraz = caminar", { size: 9.5, weight: 400, color: "var(--muted)" })}</svg>`,
      video: { id: "PER63YudX4c", titulo: "Scratch: movimiento de objetos con cambio de disfraz en diferentes escenas", canal: "CuriosoYas", vistas: 251285 },
    },
    {
      html: `<h3>Tamaño, efectos y capas</h3><p>Otros bloques de Apariencia permiten transformar el objeto. <b>«Fijar tamaño al 100 %»</b> pone un tamaño concreto (50 % es la mitad; 200 %, el doble), y <b>«cambiar tamaño por 10»</b> lo agranda poco a poco (con −10, lo encoge); repetido, da un efecto de acercamiento o alejamiento. Los <mark>efectos gráficos</mark> cambian el aspecto: <b>color</b> (cambia el tono), <b>ojo de pez</b> (lo deforma como una lupa), <b>remolino</b> (lo retuerce), <b>pixelar</b>, <b>mosaico</b> (lo repite en pequeñito), <b>brillo</b> y <b>desvanecer</b> (lo hace transparente). Se aplican con «fijar efecto color a 0» o «cambiar efecto color por 25», y se eliminan todos con <b>«quitar efectos gráficos»</b>. Con un bucle que cambie el efecto desvanecer de 10 en 10 se consigue que un objeto aparezca o desaparezca poco a poco. Además, <b>«mostrar»</b> y <b>«esconder»</b> hacen visible o invisible el objeto, y <b>«ir a capa delantera»</b> o «ir atrás» deciden qué objeto se ve por encima cuando se solapan.</p>`,
    },
    {
      html: `<h3>Hablar y pensar</h3><p>Los objetos también pueden comunicarse con <b>bocadillos</b>, como en un cómic. El bloque <mark>«decir ¡Hola! durante 2 segundos»</mark> muestra un bocadillo con el texto durante ese tiempo y luego lo quita; el programa espera a que termine antes de seguir. El bloque <b>«decir ¡Hola!»</b> (sin tiempo) deja el bocadillo puesto hasta que el objeto diga otra cosa o se diga un texto vacío. Los bloques <b>«pensar Mmm… durante 2 segundos»</b> y «pensar Mmm…» hacen lo mismo, pero con un bocadillo de pensamiento, en forma de nube. Con estos bloques se pueden crear <b>diálogos</b> entre personajes: si un objeto dice algo durante 2 segundos, el otro debe esperar 2 segundos antes de responder, para que no hablen a la vez. Para que los objetos lean el texto en voz alta existe la extensión <b>Texto a voz</b>, que se añade desde el botón de extensiones (abajo a la izquierda) y permite elegir el idioma y el tipo de voz.</p>`,
      video: { id: "QRs1ZZkiRm0", titulo: "Apariencia de personajes en Scratch 1", canal: "Profe Javier", vistas: 4413 },
    },
    {
      html: `<h3>Un ejemplo completo: el pez que nada</h3><p>Juntemos lo aprendido en un pequeño proyecto. Elegimos el fondo «Underwater» y añadimos un pez de la biblioteca que tiene varios disfraces. El programa del pez: <b>al hacer clic en la bandera verde</b> → <b>ir a x: −150 y: 0</b> (posición inicial) → <b>apuntar en dirección 90</b> → <b>fijar estilo de rotación izquierda-derecha</b> → <b>fijar tamaño al 80 %</b> → <b>quitar efectos gráficos</b> → <b>por siempre</b>: mover 4 pasos, rebotar si toca un borde, siguiente disfraz, esperar 0,1 segundos. Al pulsar la bandera, el pez nada de un lado a otro del escenario, se da la vuelta correctamente al llegar al borde y mueve la cola. Podemos añadir un segundo programa al mismo pez: <b>al hacer clic en este objeto</b> → decir «¡Glup!» durante 1 segundo y cambiar efecto color por 25, para que cambie de color cada vez que lo toquemos. Así se ve que un objeto puede tener <b>varios programas</b> funcionando a la vez, cada uno con su evento.</p>`,
    },
  ],
  figura: {
    titulo: "Movimiento y apariencia en ocho ideas",
    svg: rejilla([
      ["Mover pasos", "hacia donde mira", COL.azul],
      ["Girar", "360° = una vuelta", COL.agua],
      ["Ir a x, y", "salto al punto", COL.verde],
      ["Deslizar", "movimiento suave", COL.gris],
      ["Rebotar", "en el borde", COL.naranja],
      ["Siguiente disfraz", "+ espera = animación", COL.morado],
      ["Efectos", "color, desvanecer…", COL.rojo],
      ["Decir y pensar", "bocadillos", COL.sol],
    ], 4, 86, "Resumen: pasos, giros, coordenadas, deslizar, rebotar, disfraces, efectos y bocadillos"),
  },
  video: { id: "j_BILVTK9k8", titulo: "Cómo hacer caminar un personaje en Scratch", canal: "dalia hinojosa", vistas: 47718, megusta: 0, busqueda: "scratch bloques movimiento apariencia" },
  ejemplos: [
    { enunciado: "Un objeto está en (0, 0) mirando a la derecha. Ejecuta: mover 50 pasos; girar ↺ 90 grados; mover 30 pasos. ¿Dónde acaba?",
      pasos: ["Mover 50 hacia la derecha: (50, 0).", "Girar 90° en sentido contrario a las agujas: ahora mira hacia arriba.", "Mover 30 hacia arriba: (50, 30)."],
      resultado: "En (50, 30), mirando hacia arriba." },
    { enunciado: "Quieres que un fantasma desaparezca poco a poco. ¿Qué bloques usarías?",
      pasos: ["Repetir 10 veces: cambiar efecto desvanecer por 10; esperar 0,1 segundos.", "Al final, esconder.", "Al empezar el programa: quitar efectos gráficos y mostrar."],
      resultado: "Bucle con el efecto desvanecer y luego esconder." },
    { enunciado: "Haz un diálogo: el gato dice «¿Cómo te llamas?» y el perro responde «Me llamo Tobi».",
      pasos: ["Gato: al hacer clic en la bandera, decir «¿Cómo te llamas?» durante 2 segundos.", "Perro: al hacer clic en la bandera, esperar 2 segundos, decir «Me llamo Tobi» durante 2 segundos."],
      resultado: "La espera del perro coincide con la duración de la frase del gato." },
  ],
  errores: [
    "Olvidar las esperas: el movimiento o la animación ocurren tan rápido que no se ven.",
    "Usar «mover pasos» esperando un desplazamiento vertical cuando el objeto mira a la derecha.",
    "No fijar el estilo de rotación y que el personaje quede boca abajo al rebotar.",
    "No reiniciar tamaño, efectos y posición al empezar.",
    "Hacer que dos personajes hablen a la vez por no sincronizar las esperas.",
  ],
  ejercicios: [
    { q: "¿Qué hace «mover 10 pasos»? ¿Y con −10?", sol: "Avanza 10 puntos hacia donde mira; con −10 retrocede." },
    { q: "¿Qué dirección corresponde a mirar hacia arriba? ¿Y hacia la izquierda?", sol: "0; −90." },
    { q: "Diferencia entre «ir a x: y:» y «deslizar a x: y:».", sol: "«Ir a» salta al instante; «deslizar» va suavemente durante un tiempo." },
    { q: "¿Para qué sirve «rebotar si toca un borde»?", sol: "Para que el objeto cambie de dirección al llegar al borde." },
    { q: "¿Qué estilo de rotación usarías para un personaje de plataformas?", sol: "Izquierda-derecha." },
    { q: "¿Cómo se consigue que un objeto parezca caminar?", sol: "Repitiendo mover unos pasos, siguiente disfraz y una pequeña espera." },
    { q: "Escribe tres efectos gráficos de Scratch.", sol: "Color, remolino y desvanecer." },
    { q: "¿Qué tamaño tiene un objeto fijado al 50 %?", sol: "La mitad de su tamaño original." },
    { q: "Diferencia entre «decir» y «pensar».", sol: "«Decir» muestra un bocadillo de habla; «pensar», uno de pensamiento en forma de nube." },
    { q: "Escribe el programa para mover un objeto a la derecha con la flecha derecha.", sol: "Al presionar tecla flecha derecha: sumar 10 a x." },
  ],
  quiz: [
    { q: "Una vuelta completa son…", o: ["360°", "180°", "90°"], a: 0, e: "360°." },
    { q: "La dirección 90 es hacia…", o: ["la derecha", "arriba", "abajo"], a: 0, e: "Derecha." },
    { q: "Para que un objeto vaya suave a un punto se usa…", o: ["deslizar", "ir a", "sumar a x"], a: 0, e: "Deslizar." },
    { q: "Los bloques de Apariencia son de color…", o: ["morado", "azul", "amarillo"], a: 0, e: "Morado." },
    { q: "«Siguiente disfraz» en el último disfraz…", o: ["vuelve al primero", "se para", "da error"], a: 0, e: "Vuelve al primero." },
    { q: "Para hacer transparente un objeto se usa el efecto…", o: ["desvanecer", "remolino", "pixelar"], a: 0, e: "Desvanecer." },
    { q: "«Sumar 10 a y» mueve el objeto…", o: ["hacia arriba", "a la derecha", "hacia abajo"], a: 0, e: "Arriba." },
    { q: "Para hacer invisible un objeto se usa…", o: ["esconder", "quitar efectos", "girar"], a: 0, e: "Esconder." },
    { q: "El bocadillo en forma de nube es de…", o: ["pensar", "decir", "sonido"], a: 0, e: "Pensar." },
    { q: "Un objeto puede tener…", o: ["varios programas a la vez", "solo uno", "ninguno"], a: 0, e: "Varios." },
  ],
  examen: [
    { q: "Desde (10, 10) mirando arriba, «mover 20 pasos» lleva a…", o: ["(10, 30)", "(30, 10)", "(10, −10)"], a: 0, e: "Sube 20." },
    { q: "Para que no quede boca abajo al rebotar se fija el estilo…", o: ["izquierda-derecha", "todas direcciones", "aleatorio"], a: 0, e: "Izquierda-derecha." },
    { q: "«Cambiar tamaño por −10» hace que el objeto…", o: ["encoja", "crezca", "gire"], a: 0, e: "Encoge." },
  ],
  feynman: ["Qué diferencia hay entre mover con pasos y mover con coordenadas", "Cómo se crea una animación de caminar", "Para qué sirven los estilos de rotación"],
  mapa: mapa("MOVIMIENTO Y APARIENCIA", "var(--eso)", [
    ["Movimiento", "pasos · giros · dirección", COL.azul],
    ["Coordenadas", "ir a · deslizar · sumar a x, y", COL.verde],
    ["Apariencia", "disfraces · tamaño · efectos", COL.morado],
    ["Comunicar", "decir · pensar · texto a voz", COL.sol],
  ], 300),
  tarjetas: [
    ["Mover 10 pasos", "Avanza 10 puntos en la dirección del objeto."],
    ["Girar 90 grados", "Cambia la dirección un cuarto de vuelta."],
    ["Dirección 90", "Mirar hacia la derecha."],
    ["Deslizar", "Ir a un punto de forma suave durante un tiempo."],
    ["Rebotar si toca un borde", "Cambiar de dirección al llegar al borde."],
    ["Estilo de rotación", "Cómo gira el objeto al cambiar de dirección."],
    ["Siguiente disfraz", "Cambia al disfraz siguiente: base de la animación."],
    ["Efecto desvanecer", "Hace el objeto más transparente."],
  ],
  familias: ["Pedid que os enseñen a programar un personaje que camine y salude.", "Haced juntos un flipbook de papel para entender la animación.", "Grabad vuestras voces para un diálogo entre dos personajes de Scratch."],
  profesores: {
    saberes: "Scratch: bloques de movimiento (pasos, giros, dirección, coordenadas, deslizar, rebotar, estilo de rotación) y de apariencia (disfraces, tamaño, efectos gráficos, capas, visibilidad, bocadillos), animación por cambio de disfraz (materia optativa de Programación y robótica, en el marco del RD 217/2022).",
    ideas: ["Acuario animado con varios peces de distinta velocidad.", "Diálogo de dos personajes sincronizado con esperas.", "Reto de coordenadas: llevar un objeto a cinco puntos marcados en el fondo Xy-grid."],
  },
  fuentes: [RD, wiki("Scratch", "Scratch_(lenguaje_de_programación)"), { t: "Scratch: tutoriales oficiales", url: "https://scratch.mit.edu/projects/editor/?tutorial=getStarted" }, { t: "ScratchEd (Harvard): guía creativa de computación", url: "https://scratched.gse.harvard.edu/" }],
  revisado: REV,
};
