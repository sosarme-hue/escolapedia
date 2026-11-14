// Programación y robótica 1º ESO · Bucles y repeticiones. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, resumen, scratch, flujo, codigo, PS, CAT, wiki, C, RD, REV } = require("./_eso1L2");

const poligono = (cx, cy, n, r, c, rot = -90) => {
  const pts = [...Array(n)].map((_, i) => { const a = ((rot + (i * 360) / n) * Math.PI) / 180; return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`; });
  return `<polygon points="${pts.join(" ")}" fill="none" stroke="${c}" stroke-width="2.4"/>`;
};

const sinCon = comparar("Sin bucle hay que copiar los mismos bloques muchas veces; con un bucle se escriben una sola vez", [
  ["Sin bucle", ["mover · girar", "mover · girar", "mover · girar…"], "var(--red)"],
  ["Con bucle", ["repetir 4", "mover · girar", "más corto y claro"], "var(--leaf)"],
], "¿Copiar o repetir?");

const repetir4 = scratch("Bucle repetir 4 veces que dibuja un cuadrado: bajar lápiz, repetir 4 mover 100 pasos y girar 90 grados", [
  ["al hacer clic en ⚑", "eventos"], ["borrar todo", "lapiz"], ["bajar lápiz", "lapiz"], ["repetir 4", "control"], ["mover 100 pasos", "movimiento", 1], ["girar ↻ 90 grados", "movimiento", 1], ["subir lápiz", "lapiz"],
], "Repetir 4 veces");

const tipos = cajas("Los tres bucles de Scratch: repetir un número de veces, por siempre y repetir hasta que se cumpla una condición", [
  ["repetir 10", "número fijo de veces", CAT.control],
  ["por siempre", "no para nunca", "var(--red)"],
  ["repetir hasta", "hasta que algo ocurra", "var(--leaf)"],
  ["Dentro", "los bloques abrazados", "var(--pen)"],
], "Tres bucles");

const porSiempre = scratch("Bucle por siempre: el objeto apunta hacia el ratón y se mueve 5 pasos sin parar", [
  ["al hacer clic en ⚑", "eventos"], ["por siempre", "control"], ["apuntar hacia puntero del ratón", "movimiento", 1], ["mover 5 pasos", "movimiento", 1],
], "Sigue al ratón por siempre");

const hasta = scratch("Bucle repetir hasta: mover 5 pasos hasta que toque el borde, y luego decir he llegado", [
  ["al hacer clic en ⚑", "eventos"], ["ir a x: −200 y: 0", "movimiento"], ["repetir hasta que ¿tocando borde?", "control"], ["mover 5 pasos", "movimiento", 1], ["decir ¡He llegado!", "apariencia"],
], "Repetir hasta que…");

const flujoHasta = flujo("Diagrama de flujo de repetir hasta: comprobar si toca el borde; si no, mover 5 pasos y volver a comprobar", [
  ["Inicio", "ini"], ["¿Tocando el borde?", "dec", "sí: salir", "no ↓"], ["Mover 5 pasos", "proc"], ["(vuelve a preguntar)", "proc"],
], "Así funciona «repetir hasta»", { vuelta: [3, 1] });

const poligonos = lienzo("Polígonos regulares dibujados con el lápiz: triángulo, cuadrado, pentágono y hexágono; se gira 360 entre el número de lados", `
  ${[[3, 40, "var(--red)"], [4, 102, "var(--pen)"], [5, 164, "var(--leaf)"], [6, 226, "var(--sun)"]].map(([n, x, c]) => `${poligono(x, 68, n, 26, c, n === 4 ? -45 : -90)}${tx(x, 116, n + " lados", { fs: 10.5, c, max: 56 })}${tx(x, 134, "gira " + Math.round(360 / n) + "°", { fs: 10.5, c: "var(--muted)", max: 56 })}`).join("")}
  ${tx(130, 162, "ángulo = 360 : lados", { fs: 13, fam: D })}`, 172);

const lapiz = tabla(["Bloque de Lápiz", "Qué hace"], [["borrar todo", "limpia los dibujos del escenario"], ["bajar lápiz", "empieza a pintar al moverse"], ["subir lápiz", "deja de pintar"], ["fijar color del lápiz a …", "elige el color"], ["fijar tamaño del lápiz a …", "grosor del trazo"], ["sellar", "estampa la imagen del objeto"]]);

const anidados = scratch("Bucles anidados: repetir 8 veces un cuadrado y girar 45 grados, formando una flor", [
  ["al hacer clic en ⚑", "eventos"], ["borrar todo", "lapiz"], ["bajar lápiz", "lapiz"], ["repetir 8", "control"], ["repetir 4", "control", 1], ["mover 60 pasos", "movimiento", 2], ["girar ↻ 90 grados", "movimiento", 2], ["girar ↻ 45 grados", "movimiento", 1],
], "Un bucle dentro de otro");

const flor = lienzo("Flor formada por 8 cuadrados girados 45 grados cada uno, resultado de dos bucles anidados", `
  ${[...Array(8)].map((_, i) => `<rect x="130" y="${88 - 52}" width="52" height="52" fill="none" stroke="${["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"][i % 4]}" stroke-width="2" transform="rotate(${i * 45} 130 88)"/>`).join("")}
  ${tx(130, 178, "8 × 4 = 32 lados", { fs: 12.5, fam: D })}`, 186);

const contador = scratch("Contador con una variable: fijar vueltas a 0, repetir 10 veces sumar 1 a vueltas y decir vueltas", [
  ["al hacer clic en ⚑", "eventos"], ["dar a vueltas el valor 0", "variables"], ["repetir 10", "control"], ["sumar a vueltas 1", "variables", 1], ["decir (vueltas) durante 0.5 seg", "apariencia", 1], ["decir ¡Fin!", "apariencia"],
], "Un contador");

const tablaContador = codigo("Tabla de multiplicar con un bucle y un contador: n de 1 a 10, decir 7 por n", [
  ["n = 1", 0, PS.txt], ["REPETIR 10 VECES", 0, PS.clave], ["ESCRIBIR 7 · n", 1, PS.ok], ["n = n + 1", 1, PS.txt], ["FIN REPETIR", 0, PS.clave], ["// escribe 7, 14, 21… 70", 0, PS.com],
], "La tabla del 7");

const elegir = pasos("Cómo elegir el bucle adecuado: preguntas para decidir", [
  "¿Sé cuántas veces? → repetir n",
  "¿Debe durar todo el juego? → por siempre",
  "¿Hasta que pase algo? → repetir hasta",
  "¿Cambia algo dentro? → evita el bucle infinito",
], "¿Qué bucle uso?");


module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "Bucles y repeticiones",
  minutos: 100,
  objetivos: [
    "Explicar qué es un bucle y por qué ahorra trabajo",
    "Usar los bucles repetir, por siempre y repetir hasta",
    "Dibujar polígonos y figuras con la extensión Lápiz",
    "Construir bucles anidados y predecir su resultado",
    "Usar contadores y evitar los bucles infinitos no deseados",
    "Elegir el bucle más adecuado para cada problema",
  ],
  claves: ["bucle", "repetición", "repetir", "por siempre", "repetir hasta", "condición", "lápiz", "polígono", "anidado", "contador", "bucle infinito"],
  pregunta: {
    texto: "Un profesor castiga a un alumno a escribir 500 veces «no hablaré en clase». El alumno, que sabe programar, tarda diez segundos. ¿Cómo lo hace?",
    respuesta: "Usa un <mark>bucle</mark>: «repetir 500 veces: escribir “no hablaré en clase”». En lugar de copiar la misma instrucción 500 veces, la escribe <b>una sola vez</b> y le dice al ordenador cuántas veces debe repetirla. Los bucles son una de las ideas más potentes de la programación: hacen en un momento lo que a mano llevaría horas.",
  },
  lectura: {
    titulo: "El telar que leía tarjetas",
    html: `<p>A principios del siglo XIX, tejer telas con dibujos complicados era un trabajo lentísimo. En cada pasada del hilo, un ayudante tenía que levantar a mano los hilos correctos según el dibujo. En 1804, el francés <b>Joseph-Marie Jacquard</b> inventó un telar que lo hacía solo, leyendo <b>tarjetas perforadas</b>: cada tarjeta indicaba qué hilos levantar en una pasada, y las tarjetas se encadenaban unas detrás de otras.</p><p>Lo más ingenioso era que, si el dibujo tenía un motivo que se repetía (una flor, una hoja), no hacía falta fabricar las tarjetas una y otra vez: bastaba con <b>volver a pasar</b> el mismo grupo de tarjetas. Era un bucle hecho de cartón.</p><p>Ada Lovelace y Charles Babbage se inspiraron en el telar de Jacquard para su máquina analítica. Ada escribió que la máquina «teje patrones algebraicos igual que el telar de Jacquard teje flores y hojas». Y las tarjetas perforadas se usaron para programar ordenadores hasta los años setenta. Cada vez que usas un bucle en Scratch, estás usando una idea que nació en un taller textil hace más de doscientos años.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 ¿Qué es un bucle?</h3><p>Un <mark>bucle</mark> (o estructura de repetición) es un bloque que hace que un grupo de instrucciones se <b>repita</b> varias veces. En lugar de copiar los mismos bloques una y otra vez, se escriben una sola vez dentro del bucle.</p><p>Los bucles tienen tres grandes ventajas:</p><ul><li>Los programas son <b>más cortos</b> y fáciles de leer.</li><li>Hay <b>menos errores</b>: si hay que cambiar algo, se cambia en un solo sitio.</li><li>Son <b>flexibles</b>: para repetir 100 veces en lugar de 4, basta con cambiar un número.</li></ul><p>Los bucles están en todas partes: un reloj que avanza cada segundo, una lavadora que da vueltas, las vueltas a una pista, las estrofas de una canción que repiten el estribillo. En Scratch, los bucles están en la categoría <b>Control</b> (naranja) y tienen forma de <b>C</b>: abrazan a los bloques que se repiten.</p>`, svg: sinCon, video: { id: "ZNkHWaiBEvA", titulo: "Estructura repetitiva REPETIR: introducción a los algoritmos y la programación", canal: "TodoCode", vistas: 190060 } },
    { html: `<h3>1.2 Repetir un número de veces</h3><p>El bucle <b>«repetir 10»</b> ejecuta los bloques de dentro el <b>número exacto de veces</b> que se indique. Cuando termina, el programa continúa con el bloque que hay debajo.</p><p>Es el bucle adecuado cuando <b>sabemos de antemano</b> cuántas veces hay que repetir: dibujar los 4 lados de un cuadrado, dar 3 saltos, hacer parpadear una luz 5 veces, contar del 1 al 10.</p><p>Ejemplo: para dibujar un cuadrado, en vez de escribir ocho bloques (mover, girar, mover, girar…), se escribe «repetir 4: mover 100 pasos, girar 90 grados». El resultado es el mismo con muchos menos bloques. Fíjate en que el bloque «subir lápiz» queda <b>fuera</b> del bucle: se ejecuta una sola vez, cuando el bucle ha terminado. Colocar cada bloque dentro o fuera del bucle es la decisión más importante al programar repeticiones.</p>`, svg: repetir4 },
    { html: `<h3>1.3 Los tres bucles de Scratch</h3><p>Scratch tiene tres tipos de bucles, cada uno para una situación:</p><ul><li><b>«repetir n»</b>: repite un número fijo de veces. Termina y sigue.</li><li><b>«por siempre»</b>: repite <b>sin parar</b> hasta que se pulsa la señal roja. No tiene salida por debajo: nada puede ir después de él.</li><li><b>«repetir hasta que …»</b>: repite mientras <b>no</b> se cumpla una condición; cuando se cumple, sale del bucle y continúa.</li></ul><p>Los tres comparten la forma en C, pero se distinguen por su parte de abajo: «por siempre» tiene el borde inferior plano (no se le puede encajar nada debajo), mientras que los otros dos tienen muesca para seguir el programa.</p><p>Elegir bien el bucle es parte de pensar el algoritmo: ¿sé cuántas veces?, ¿debe durar siempre?, ¿depende de algo que pase?</p>`, svg: tipos },
    { html: `<h3>1.4 El bucle por siempre</h3><p>El bucle <b>«por siempre»</b> repite sus bloques una y otra vez mientras el programa esté en marcha. Se usa para comportamientos que deben estar activos <b>todo el tiempo</b>:</p><ul><li>Un personaje que sigue al ratón.</li><li>Un enemigo que patrulla de un lado a otro.</li><li>Una música de fondo que no para.</li><li>Comprobar continuamente si el jugador toca una moneda.</li></ul><p>Casi todos los videojuegos tienen al menos un bucle «por siempre»: el llamado <b>bucle principal</b> del juego, que en cada vuelta lee el teclado, mueve a los personajes, comprueba los choques y dibuja la pantalla, unas 30 o 60 veces por segundo.</p><p>Como nunca termina, todo lo que pongas debajo de un «por siempre» nunca se ejecutaría; por eso Scratch no deja encajar nada ahí. Si necesitas hacer otra cosa a la vez, crea otro programa con su propio evento.</p>`, svg: porSiempre },
    { html: `<h3>1.5 Repetir hasta que…</h3><p>El bucle <b>«repetir hasta que &lt;condición&gt;»</b> repite sus bloques <b>mientras la condición sea falsa</b>. Antes de cada vuelta, comprueba la condición: si es verdadera, sale del bucle y sigue con el programa.</p><p>La condición es un bloque <b>hexagonal</b> (de Sensores u Operadores) que se responde con verdadero o falso: «¿tocando borde?», «¿tecla espacio presionada?», «puntos &gt; 10».</p><p>Ejemplo: «repetir hasta que ¿tocando borde?: mover 5 pasos», y después «decir ¡He llegado!». El objeto avanza poco a poco hasta llegar al borde, y entonces habla.</p><p>Es el bucle adecuado cuando <b>no sabemos cuántas veces</b> hay que repetir, pero sí sabemos <b>cuándo parar</b>: caminar hasta llegar a la puerta, esperar hasta que el agua hierva, pedir una contraseña hasta que sea correcta.</p>`, svg: hasta },
    { html: `<h3>1.6 Cómo funciona por dentro «repetir hasta»</h3><p>Para entender bien este bucle, conviene dibujarlo como un <b>diagrama de flujo</b>. Lo primero que hace es <b>preguntar</b>: ¿se cumple la condición? Si la respuesta es sí, sale del bucle sin hacer nada. Si es no, ejecuta los bloques de dentro y vuelve a preguntar.</p><p>De aquí salen dos consecuencias importantes:</p><ul><li>Si la condición ya se cumple al principio, los bloques de dentro <b>no se ejecutan ni una vez</b>. Si el objeto ya está tocando el borde, no se mueve.</li><li>Dentro del bucle tiene que pasar algo que <b>acabe haciendo verdadera</b> la condición. Si el objeto no se mueve dentro del bucle, nunca tocará el borde y el bucle no terminará.</li></ul><p>Hacer una traza (seguir el bucle paso a paso con lápiz y papel) ayuda a comprobar que el bucle termina y que hace lo que esperas.</p>`, svg: flujoHasta },
    { html: `<h3>1.7 Dibujar con bucles: la extensión Lápiz</h3><p>La extensión <b>Lápiz</b> (se añade con el botón de extensiones, abajo a la izquierda) permite que los objetos <b>dibujen</b> en el escenario al moverse, como si llevaran un rotulador.</p>${lapiz}<p>Con Lápiz y bucles se dibujan figuras geométricas fácilmente. Para un <b>polígono regular</b> de n lados: «repetir n: mover L pasos, girar 360/n grados». La clave es que, al terminar el polígono, el objeto ha dado <b>una vuelta completa</b> (360°), repartida entre todos los lados.</p><p>Triángulo: 3 veces, 120°. Cuadrado: 4 veces, 90°. Pentágono: 5 veces, 72°. Hexágono: 6 veces, 60°. Si pruebas con 36 lados de 10 pasos y giros de 10°, ¡sale casi un círculo!</p>`, svg: poligonos, video: { id: "KFwgPVjMjak", titulo: "Scratch: dibujar polígonos (formas)", canal: "Computing in a Nutshell", vistas: 128745 } },
    { html: `<h3>1.8 Bucles anidados</h3><p>Un bucle puede ir <b>dentro de otro</b>: son los <mark>bucles anidados</mark>. El bucle de dentro se ejecuta <b>completo</b> en cada vuelta del bucle de fuera.</p><p>Ejemplo: «repetir 8: [repetir 4: mover 60, girar 90], girar 45». El bucle de dentro dibuja un cuadrado; el de fuera lo repite 8 veces girando 45° entre uno y otro (8 × 45 = 360°). Resultado: una <b>flor</b> de 8 cuadrados. En total se dibujan 8 × 4 = <b>32</b> lados.</p><p>Para saber cuántas veces se ejecuta un bloque del bucle interior, se <b>multiplican</b> las repeticiones: si el de fuera repite 5 veces y el de dentro 3, el bloque interior se ejecuta 15 veces.</p><p>Los bucles anidados sirven para recorrer filas y columnas (como una cuadrícula o un tablero), dibujar mosaicos o repetir una animación en varios niveles. ¡Prueba a cambiar los números y verás figuras sorprendentes!</p>`, svg: anidados },
    { html: `<h3>2.1 Arte con bucles</h3><p>Combinando bucles, giros y colores se pueden crear dibujos espectaculares. Algunas ideas:</p><ul><li><b>Rosetones</b>: repetir un polígono muchas veces girando un poco cada vez (como la flor de cuadrados).</li><li><b>Espirales</b>: en cada vuelta, avanzar un poco más que en la anterior. Para ello hace falta una <b>variable</b> que vaya creciendo.</li><li><b>Arcoíris</b>: dentro del bucle, cambiar el color del lápiz con «cambiar color del lápiz en 10».</li><li><b>Estrellas</b>: repetir 5 veces mover 100 y girar 144°.</li></ul><p>Este tipo de dibujos tiene una larga historia: en los años sesenta, el lenguaje Logo usaba una «tortuga» que dibujaba con un lápiz y se programaba con bucles, exactamente igual que el lápiz de Scratch. Muchos niños aprendieron geometría programando a esa tortuga. Hoy esos dibujos se llaman <b>arte generativo</b>.</p>`, svg: flor },
    { html: `<h3>2.2 Contadores</h3><p>Muchas veces queremos saber <b>en qué vuelta</b> va el bucle. Para eso se usa un <mark>contador</mark>: una <b>variable</b> que empieza en un valor (normalmente 0 o 1) y aumenta en 1 en cada vuelta.</p><p>En Scratch se crea en la categoría <b>Variables</b> con «Crear una variable». Después: «dar a vueltas el valor 0» antes del bucle, y «sumar a vueltas 1» dentro del bucle. Si marcas la casilla de la variable, su valor se ve en el escenario.</p><p>Con un contador se pueden hacer cosas muy útiles:</p><ul><li>Mostrar la <b>tabla de multiplicar</b>: decir 7 · n, con n de 1 a 10.</li><li>Hacer una <b>cuenta atrás</b>: empezar en 10 y sumar −1 en cada vuelta.</li><li>Dibujar una <b>espiral</b>: mover tantos pasos como diga el contador.</li><li>Contar los <b>puntos</b> o las <b>vidas</b> de un juego.</li></ul><p>Fíjate en que «dar el valor 0» va <b>fuera</b> del bucle: si estuviera dentro, el contador se reiniciaría en cada vuelta.</p>`, svg: contador },
    { html: `<h3>2.3 Bucles infinitos: amigos y enemigos</h3><p>Un <mark>bucle infinito</mark> es un bucle que no termina nunca. A veces es exactamente lo que queremos: el bucle «por siempre» del juego que mueve a los personajes sin parar.</p><p>Pero otras veces es un <b>error</b>: el programa se queda «colgado» repitiendo algo y nunca sigue. Suele pasar con «repetir hasta» cuando la condición <b>nunca llega a cumplirse</b>:</p><ul><li>«repetir hasta que x &gt; 100: sumar −5 a x»: x baja en lugar de subir y nunca pasa de 100.</li><li>«repetir hasta que ¿tocando Manzana?: decir Tengo hambre»: el objeto no se mueve, así que nunca toca la manzana.</li><li>«repetir hasta que puntos = 10: sumar 3 a puntos»: los puntos van 3, 6, 9, 12… y nunca valen exactamente 10. Mejor usar «puntos &gt; 9».</li></ul><p>Para evitarlo, pregúntate siempre: ¿qué cambia dentro del bucle que acabará haciendo verdadera la condición?</p>`, svg: tablaContador },
    { html: `<h3>2.4 Elegir el bucle adecuado</h3><p>Antes de programar, piensa qué tipo de repetición necesitas:</p>${tabla(["Situación", "Bucle"], [["Dibujar un hexágono", "repetir 6"], ["Música de fondo de un juego", "por siempre"], ["Caminar hasta llegar a la meta", "repetir hasta que ¿tocando Meta?"], ["Parpadear 3 veces", "repetir 3"], ["Enemigo que patrulla", "por siempre"], ["Pedir una contraseña hasta acertar", "repetir hasta que respuesta = clave"]])}<p>Reglas prácticas: si conoces el <b>número</b> de repeticiones, usa «repetir n»; si debe durar <b>todo el programa</b>, «por siempre»; si depende de que <b>ocurra algo</b>, «repetir hasta». Y recuerda: lo que debe pasar una sola vez (preparar, reiniciar variables, decir «¡Fin!») va <b>fuera</b> del bucle; lo que se repite, <b>dentro</b>.</p>`, svg: elegir, video: { id: "8bLtTjs3F3I", titulo: "Concepto de bucle o ciclo en programación con Scratch 3.0", canal: "Docente Pro", vistas: 13307 } },
  ],
  ejemplos: [
    { enunciado: "Dibuja un triángulo equilátero de lado 120 con el lápiz.", pasos: ["bajar lápiz.", "repetir 3: mover 120, girar 120 grados.", "subir lápiz."], resultado: "Triángulo con giros de 360 : 3 = 120°." },
    { enunciado: "¿Cuántas veces dice «Hola» este programa? repetir 3 [repetir 4 [decir Hola 0,2 s]].", pasos: ["Bucle interior: 4 veces.", "Se ejecuta completo 3 veces."], resultado: "3 · 4 = 12 veces." },
    { enunciado: "Haz que el gato camine hasta tocar el borde y luego maúlle.", pasos: ["repetir hasta que ¿tocando borde?: mover 5, siguiente disfraz, esperar 0,1 s.", "Después: tocar sonido Miau."], resultado: "Repetir hasta + bloque después del bucle." },
    { enunciado: "Haz una cuenta atrás de 10 a 1 y luego di «¡Despegue!».", pasos: ["dar a n el valor 10.", "repetir 10: decir n 1 s; sumar a n −1.", "decir ¡Despegue!"], resultado: "Contador que baja." },
    { enunciado: "Dibuja una estrella de 5 puntas.", pasos: ["repetir 5: mover 100, girar 144 grados."], resultado: "5 · 144 = 720°: dos vueltas completas." },
    { enunciado: "¿Por qué este bucle no termina? «dar a x el valor 0; repetir hasta que x = 7: sumar 2 a x».", pasos: ["x vale 2, 4, 6, 8…: nunca vale 7."], resultado: "Usar «x > 6» o sumar 1 en lugar de 2." },
  ],
  errores: [
    "Poner dentro del bucle bloques que solo deben ejecutarse una vez (o al revés).",
    "Intentar encajar bloques debajo de «por siempre».",
    "Crear un «repetir hasta» cuya condición nunca se cumple: bucle infinito no deseado.",
    "Reiniciar el contador dentro del bucle, de modo que nunca avanza.",
    "Equivocarse en el ángulo de giro de un polígono (debe ser 360 entre los lados).",
    "Olvidar bajar el lápiz (no dibuja) o subirlo al final (sigue pintando).",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Qué es un bucle?", sol: "Una estructura que repite un grupo de instrucciones varias veces." },
    { nivel: "básico", q: "Escribe dos ventajas de usar bucles.", sol: "Programas más cortos y con menos errores (y fáciles de cambiar)." },
    { nivel: "básico", q: "Nombra los tres bucles de Scratch.", sol: "repetir n, por siempre, repetir hasta que." },
    { nivel: "básico", q: "¿En qué categoría y de qué color están los bucles?", sol: "En Control, de color naranja." },
    { nivel: "básico", q: "¿Por qué no se puede encajar nada debajo de «por siempre»?", sol: "Porque nunca termina, así que lo de debajo nunca se ejecutaría." },
    { nivel: "básico", q: "¿Qué bucle usarías para dibujar un pentágono?", sol: "repetir 5." },
    { nivel: "básico", q: "¿Cuántos grados se gira en cada lado de un hexágono regular?", sol: "360 : 6 = 60°." },
    { nivel: "básico", q: "¿Qué hacen «bajar lápiz» y «subir lápiz»?", sol: "Empezar y dejar de dibujar al moverse." },
    { nivel: "básico", q: "¿Qué es un bucle anidado?", sol: "Un bucle dentro de otro." },
    { nivel: "básico", q: "¿Qué es un contador?", sol: "Una variable que aumenta (o disminuye) en cada vuelta del bucle." },
    { nivel: "básico", q: "¿Qué es un bucle infinito?", sol: "Un bucle que no termina nunca." },
    { nivel: "básico", q: "¿Qué bucle usarías para la música de fondo de un juego?", sol: "por siempre." },
    { nivel: "medio", q: "Escribe el programa para dibujar un octógono de lado 50.", sol: "bajar lápiz; repetir 8: mover 50, girar 45 grados." },
    { nivel: "medio", q: "¿Cuántas veces se ejecuta «mover» en repetir 6 [repetir 5 [mover 10]]?", sol: "30 veces." },
    { nivel: "medio", q: "Escribe un programa que haga parpadear un objeto 5 veces.", sol: "repetir 5: esconder, esperar 0,3 s, mostrar, esperar 0,3 s." },
    { nivel: "medio", q: "Programa un objeto que caiga hasta tocar el suelo (un objeto verde).", sol: "repetir hasta que ¿tocando color verde?: sumar −5 a y." },
    { nivel: "medio", q: "Escribe la tabla del 5 con un contador.", sol: "n = 1; repetir 10: decir 5 · n 1 s; sumar 1 a n." },
    { nivel: "medio", q: "Explica qué pasa si «dar a puntos el valor 0» se pone dentro del bucle.", sol: "Se reinicia en cada vuelta y nunca pasa de 0 o 1." },
    { nivel: "medio", q: "Un compañero dibuja un cuadrado con giros de 60°. ¿Qué sale y cómo se corrige?", sol: "No se cierra (sale parte de un hexágono); hay que girar 90°." },
    { nivel: "medio", q: "¿Qué bucle usarías para pedir una contraseña hasta que sea correcta? Escríbelo.", sol: "repetir hasta que respuesta = clave: preguntar ¿Contraseña? y esperar." },
    { nivel: "medio", q: "Dibuja una flor de 6 triángulos con bucles anidados. ¿Cuánto gira el bucle exterior?", sol: "repetir 6 [repetir 3 [mover 60, girar 120], girar 60]; el exterior gira 60°." },
    { nivel: "medio", q: "Haz una traza: n = 1; repetir hasta que n > 20: n = n · 2. ¿Qué valores toma n?", sol: "1, 2, 4, 8, 16, 32 (sale con 32)." },
    { nivel: "medio", q: "Explica por qué «repetir hasta que ¿tocando Manzana?: decir Tengo hambre» puede no terminar.", sol: "Dentro no hay movimiento, así que el objeto nunca llega a tocar la manzana." },
    { nivel: "avanzado", q: "Escribe un único programa que dibuje un polígono de n lados usando una variable lados.", sol: "repetir lados: mover 60, girar 360 / lados grados." },
    { nivel: "avanzado", q: "Programa una espiral cuadrada usando un contador como longitud del paso.", sol: "dar a L el valor 5; repetir 40: mover L, girar 90, sumar 5 a L." },
    { nivel: "avanzado", q: "Dibuja un tablero de 4 × 4 cuadrados con dos bucles anidados (filas y columnas).", sol: "repetir 4 filas [repetir 4 columnas: sellar o dibujar cuadrado, sumar 40 a x]; volver x al inicio, sumar −40 a y." },
    { nivel: "avanzado", q: "¿Por qué la estrella de 5 puntas gira 144° y no 72°? Calcula cuántas vueltas da.", sol: "Con 72° sale un pentágono; con 144° se salta un vértice: 5 · 144 = 720°, dos vueltas." },
    { nivel: "avanzado", q: "Diseña un bucle principal de un juego sencillo: ¿qué comprobarías en cada vuelta?", sol: "Leer teclas y mover, comprobar choques con enemigos y monedas, actualizar puntos y vidas." },
    { nivel: "avanzado", q: "Crea un arcoíris de 7 arcos concéntricos con bucles y cambio de color del lápiz.", sol: "repetir 7: dibujar semicírculo (repetir 18: mover R, girar 10), cambiar color del lápiz, reducir el radio y recolocar." },
  ],
  quiz: [
    { q: "Un bucle sirve para…", o: ["borrar bloques", "repetir instrucciones", "cambiar de fondo", "guardar"], a: 1, e: "Repetición." },
    { q: "Los bucles en Scratch tienen forma de…", o: ["sombrero", "C", "círculo", "hexágono"], a: 1, e: "Abrazan bloques." },
    { q: "«repetir 10» repite…", o: ["sin parar", "10 veces", "hasta tocar el borde", "1 vez"], a: 1, e: "Número fijo." },
    { q: "«por siempre» se detiene…", o: ["a las 10 vueltas", "con la señal roja", "solo", "al tocar el borde"], a: 1, e: "No termina." },
    { q: "«repetir hasta que» sale cuando la condición es…", o: ["falsa", "verdadera", "cero", "un número"], a: 1, e: "Hasta que se cumpla." },
    { q: "La condición de «repetir hasta» es un bloque…", o: ["redondo", "hexagonal", "sombrero", "en C"], a: 1, e: "Verdadero o falso." },
    { q: "Debajo de «por siempre»…", o: ["se puede poner cualquier bloque", "no se puede poner nada", "va el evento", "va un sonido"], a: 1, e: "Nunca se llegaría." },
    { q: "Para un cuadrado se repite 4 veces y se gira…", o: ["45°", "90°", "60°", "120°"], a: 1, e: "360 : 4." },
    { q: "Para un triángulo equilátero se gira…", o: ["60°", "120°", "90°", "180°"], a: 1, e: "360 : 3." },
    { q: "La extensión para dibujar se llama…", o: ["Música", "Lápiz", "Vídeo", "Texto"], a: 1, e: "Lápiz." },
    { q: "«bajar lápiz» hace que…", o: ["se borre", "se dibuje al moverse", "el lápiz cambie de color", "se pare"], a: 1, e: "Empieza a pintar." },
    { q: "Un bucle dentro de otro es un bucle…", o: ["infinito", "anidado", "roto", "doble"], a: 1, e: "Anidado." },
    { q: "repetir 3 [repetir 5 [mover]] mueve…", o: ["8 veces", "15 veces", "3 veces", "5 veces"], a: 1, e: "3 · 5." },
    { q: "Un contador es…", o: ["un sonido", "una variable que cuenta vueltas", "un fondo", "un disfraz"], a: 1, e: "Variable." },
    { q: "El valor inicial del contador se pone…", o: ["dentro del bucle", "antes del bucle", "después del bucle", "en otro objeto"], a: 1, e: "Fuera, antes." },
    { q: "Un bucle que no termina nunca es…", o: ["anidado", "infinito", "contador", "lápiz"], a: 1, e: "Infinito." },
    { q: "«repetir hasta que x = 7: sumar 2 a x» desde x = 0…", o: ["termina en 7", "no termina nunca", "termina en 6", "da error"], a: 1, e: "x es siempre par." },
    { q: "Para caminar hasta la meta se usa…", o: ["repetir 10", "repetir hasta que ¿tocando Meta?", "por siempre", "esperar"], a: 1, e: "Depende de un suceso." },
    { q: "Jacquard usaba bucles en…", o: ["un reloj", "un telar con tarjetas perforadas", "un coche", "una calculadora"], a: 1, e: "Telar de 1804." },
    { q: "La tortuga que dibujaba con bucles era del lenguaje…", o: ["Python", "Logo", "Java", "Scratch"], a: 1, e: "Logo." },
  ],
  examen: [
    { q: "Pentágono regular: se gira…", o: ["60°", "72°", "90°", "108°"], a: 1, e: "360 : 5." },
    { q: "repetir 4 [repetir 6 [decir Hola]] dice Hola…", o: ["10 veces", "24 veces", "6 veces", "4 veces"], a: 1, e: "4 · 6." },
    { q: "n = 0; repetir 5: sumar 3 a n. Al final n vale…", o: ["5", "15", "8", "3"], a: 1, e: "5 · 3." },
    { q: "Si el objeto ya toca el borde, «repetir hasta que ¿tocando borde?: mover 5»…", o: ["se mueve una vez", "no se mueve", "se mueve siempre", "da error"], a: 1, e: "Comprueba antes." },
    { q: "Para que un enemigo patrulle todo el juego:", o: ["repetir 2", "por siempre", "repetir hasta", "esperar"], a: 1, e: "Sin fin." },
    { q: "Un cuadrado dibujado con giros de 60° …", o: ["sale bien", "no se cierra", "sale un círculo", "sale una estrella"], a: 1, e: "Debe ser 90°." },
    { q: "repetir 36: mover 10, girar 10 dibuja casi…", o: ["un cuadrado", "un círculo", "una estrella", "una línea"], a: 1, e: "36 · 10 = 360." },
    { q: "Si «dar a n el valor 0» está dentro del bucle, n…", o: ["crece bien", "se reinicia en cada vuelta", "se borra", "vale 10"], a: 1, e: "Error típico." },
  ],
  feynman: ["Qué es un bucle y por qué hace los programas más cortos", "Qué diferencia hay entre repetir, por siempre y repetir hasta", "Por qué para dibujar un polígono se gira 360 entre el número de lados", "Cuándo un bucle infinito es un error y cómo evitarlo"],
  figura: {
    titulo: "Los bucles en un vistazo",
    svg: resumen("Resumen: tipos de bucles, polígonos con lápiz, anidados, contadores y bucles infinitos", [
      ["repetir n", "número fijo de veces · polígonos", CAT.control],
      ["por siempre", "todo el programa · bucle principal", "var(--red)"],
      ["repetir hasta", "hasta que la condición sea verdadera", "var(--leaf)"],
      ["Anidados", "veces = exterior × interior", "var(--pen)"],
      ["Contador", "variable que suma 1 cada vuelta", CAT.variables],
    ]),
  },
  video: { id: "-a739uTtpZw", titulo: "Cómo usar bucles en Scratch 3.0", canal: "Cosas de Informatica", vistas: 4399, megusta: 0, busqueda: "bucles en scratch repetir por siempre" },
  mapa: mapa("BUCLES", CAT.control, [
    ["Tipos", "repetir · por siempre · hasta", CAT.control],
    ["Dibujar", "lápiz · polígonos · 360/n", CAT.lapiz],
    ["Anidados", "uno dentro de otro", "var(--pen)"],
    ["Contadores", "variables · evitar infinitos", "var(--red)"],
  ], 250),
  glosario: [
    ["Bucle", "Estructura que repite un grupo de instrucciones."],
    ["Iteración", "Cada una de las vueltas de un bucle."],
    ["repetir n", "Bucle que se repite un número fijo de veces."],
    ["por siempre", "Bucle que se repite sin fin."],
    ["repetir hasta", "Bucle que se repite hasta que una condición es verdadera."],
    ["Condición", "Pregunta que se responde con verdadero o falso."],
    ["Bucle anidado", "Bucle que está dentro de otro."],
    ["Contador", "Variable que cuenta las vueltas de un bucle."],
    ["Variable", "Espacio con nombre que guarda un dato que puede cambiar."],
    ["Bucle infinito", "Bucle que no termina nunca."],
    ["Lápiz", "Extensión de Scratch para dibujar al mover objetos."],
    ["Polígono regular", "Figura de lados y ángulos iguales."],
    ["Bucle principal", "Bucle «por siempre» que mantiene en marcha un juego."],
  ],
  situacion: {
    titulo: "Galería de arte generativo",
    reto: "Vais a crear con Scratch una obra de arte geométrico usando bucles, el lápiz y colores, y la expondréis en una galería virtual de la clase.",
    pasos: [
      "Investigad ejemplos de rosetones, mandalas y espirales.",
      "Dibujad en papel la idea y calculad los ángulos necesarios.",
      "Programad la figura base (un polígono) con un bucle.",
      "Usad bucles anidados, contadores y cambios de color para completar la obra.",
      "Escribid una ficha explicando qué bucles habéis usado y cuántas veces se repite cada bloque.",
    ],
    producto: "Un proyecto de Scratch con una obra de arte generativo y su ficha técnica.",
    evaluacion: ["Usa bucles adecuados y bien construidos.", "Calcula correctamente ángulos y repeticiones.", "Incluye bucles anidados o contadores.", "Explica con claridad cómo funciona."],
  },
  tarjetas: [
    ["Bucle", "Repetir instrucciones"], ["repetir n", "Número fijo"], ["por siempre", "Sin fin"],
    ["repetir hasta", "Hasta que se cumpla"], ["Forma de C", "Abraza bloques"], ["Polígono", "Girar 360 : lados"],
    ["Lápiz", "Dibujar al moverse"], ["Anidado", "Bucle dentro de bucle"], ["Total anidado", "Exterior × interior"],
    ["Contador", "Sumar 1 cada vuelta"], ["Bucle infinito", "No termina"], ["Jacquard", "Telar con tarjetas"],
  ],
  familias: ["Buscad bucles en casa: la lavadora, el reloj, las canciones con estribillo.", "Jugad a dar instrucciones repetidas: «repite 3 veces: da un paso y aplaude».", "Mirad juntos dibujos de mosaicos o rosetones y pensad cómo se repiten.", "Pedid que os enseñe una figura dibujada con bucles y os explique los ángulos."],
  profesores: {
    saberes: "Estructuras de repetición: bucles con número fijo de repeticiones, infinitos y condicionales, bucles anidados, contadores, dibujo con lápiz y polígonos regulares, detección de bucles infinitos (materia optativa de Programación y robótica, en el marco del RD 217/2022).",
    ideas: ["Actividad desenchufada: «robot humano» con instrucciones repetidas.", "Relacionar ángulos exteriores de polígonos con Matemáticas.", "Galería de arte generativo en el aula.", "Trazas en papel de bucles con contadores."],
  },
  fuentes: [RD, { t: "Scratch (MIT): página oficial", url: "https://scratch.mit.edu/" }, wiki("Bucle (programación)", "Bucle_(programación)"), wiki("Telar de Jacquard", "Telar_de_Jacquard"), wiki("Logo (lenguaje de programación)", "Logo_(lenguaje_de_programación)")],
  revisado: REV,
};
