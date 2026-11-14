// Programación y robótica 1º ESO · El pensamiento computacional. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, resumen, flujo, codigo, PS, wiki, C, RD, REV } = require("./_eso1L2");

const cuatro = cajas("Los cuatro pilares del pensamiento computacional: descomposición, patrones, abstracción y algoritmos", [
  ["Descomponer", "trocear el problema", "var(--pen)"],
  ["Patrones", "buscar lo que se repite", "var(--leaf)"],
  ["Abstraer", "quedarse con lo importante", "var(--sun)"],
  ["Algoritmo", "pasos para resolverlo", "var(--red)"],
], "Cuatro pilares");

const fiesta = lienzo("Descomponer la organización de una fiesta en partes pequeñas: invitaciones, comida, música y juegos", `
  <rect x="80" y="20" width="100" height="32" rx="10" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.4"/>${tx(130, 41, "Fiesta de clase", { fs: 12.5, max: 92 })}
  ${[["Invitaciones", 38, "var(--inf)"], ["Comida", 100, "var(--sun)"], ["Música", 162, "var(--leaf)"], ["Juegos", 224, "var(--red)"]].map(([t, x, c]) => `<path d="M130 52 L${x} 92" stroke="var(--muted)" stroke-width="1.6"/><rect x="${x - 29}" y="92" width="58" height="28" rx="7" fill="var(--card)" stroke="${c}" stroke-width="2"/>${tx(x, 110, t, { fs: 10, c, max: 52 })}`).join("")}
  ${[["lista", 38], ["compras", 100], ["altavoz", 162], ["premios", 224]].map(([t, x]) => `<path d="M${x} 120 V134" stroke="var(--muted)"/>${tx(x, 148, t, { fs: 10, c: "var(--muted)", max: 56 })}`).join("")}
  ${tx(130, 172, "cada parte es más fácil", { fs: 11.5, fam: D })}`, 180);

const patrones = lienzo("Reconocer patrones: una fila de figuras que se repite rojo, azul, azul; la siguiente es roja", `
  ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => { const c = i % 3 === 0 ? "var(--red)" : "var(--pen)"; const x = 22 + i * 28; return i % 3 === 0 ? `<circle cx="${x + 10}" cy="70" r="11" fill="${c}"/>` : `<rect x="${x}" y="60" width="20" height="20" rx="3" fill="${c}"/>`; }).join("")}
  ${tx(130, 34, "¿qué viene después?", { fs: 12.5, c: "var(--muted)" })}${tx(130, 112, "● ■ ■ · ● ■ ■ · ● ■ …", { fs: 13, fam: D })}${tx(130, 140, "el siguiente es un círculo rojo", { fs: 11.5, c: "var(--red)" })}`, 156);

const abstraccion = comparar("Abstracción: un plano de metro elimina los detalles y conserva solo las estaciones y las conexiones", [
  ["Realidad", ["calles y edificios", "distancias exactas", "árboles, coches…"], "var(--muted)"],
  ["Abstracción", ["solo estaciones", "líneas de colores", "conexiones"], "var(--pen)"],
], "Quedarse con lo importante");

const metro = lienzo("Un plano de metro es una abstracción: líneas rectas de colores con las estaciones como puntos", `
  ${[["var(--red)", "M20 60 H240"], ["var(--pen)", "M70 20 V160"], ["var(--leaf)", "M30 150 L190 30"]].map(([c, d]) => `<path d="${d}" stroke="${c}" stroke-width="5" fill="none" stroke-linecap="round"/>`).join("")}
  ${[[70, 60], [150, 60], [210, 60], [70, 120], [110, 90], [70, 160], [30, 60]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>`).join("")}
  ${tx(84, 50, "Centro", { fs: 10.5, a: "start", max: 60 })}${tx(196, 140, "solo lo necesario", { fs: 11, c: "var(--muted)", max: 110 })}`, 176);

const alg = flujo("Algoritmo para cruzar la calle con semáforo: mirar el semáforo, si está verde mirar a los lados y cruzar; si no, esperar", [
  ["Inicio", "ini"], ["Mirar el semáforo", "proc"], ["¿Está en verde?", "dec", "", "sí ↓"], ["Mirar a los lados", "proc"], ["Cruzar", "proc"],
], "Cruzar la calle", { vuelta: [2, 1], etiqueta: "no" });

const desench = pasos("Actividad desenchufada: programar a un compañero en una cuadrícula con flechas", [
  "Dibujad una cuadrícula en el suelo",
  "Uno hace de robot",
  "Otro escribe flechas ↑ ↓ ← →",
  "El robot las sigue al pie de la letra",
  "Si falla, depurad el programa",
], "Programar sin ordenador");

const cuadricula = lienzo("Cuadrícula con un robot y un tesoro: el programa es avanzar dos, girar a la derecha y avanzar tres", `
  ${[...Array(6)].map((_, i) => `<path d="M${40 + i * 30} 24 V144 M40 ${24 + i * 24} H190" stroke="var(--muted)" stroke-opacity=".5"/>`).join("").replace(/M40 144 H190/, "")}
  <rect x="40" y="24" width="150" height="120" fill="none" stroke="var(--muted)" stroke-width="1.6"/>
  <path d="M55 132 V84 H140" fill="none" stroke="var(--pen)" stroke-width="3" stroke-dasharray="6 4"/>
  <circle cx="55" cy="132" r="9" fill="var(--pen)"/>${tx(55, 136, "R", { fs: 10, c: "#fff", max: 14 })}<text x="145" y="90" text-anchor="middle" font-size="16">★</text>
  ${tx(226, 54, "↑ ↑", { fs: 14, fam: D, max: 64 })}${tx(226, 78, "↷", { fs: 14, fam: D, max: 64 })}${tx(226, 102, "→ → →", { fs: 13, fam: D, max: 64 })}${tx(115, 164, "programa con flechas", { fs: 11.5, c: "var(--muted)" })}`, 174);

const evaluar = pasos("Ciclo de mejora: probar, encontrar el error, corregir y volver a probar", [
  "Probar el algoritmo",
  "Observar qué falla",
  "Pensar por qué",
  "Corregir (depurar)",
  "Volver a probar",
], "Aprender del error");

const fuerzaBruta = tabla(["Problema", "Pilar que más ayuda"], [["Hacer un mural entre 4", "descomposición"], ["Dibujar 8 casas iguales", "patrones"], ["Dibujar el mapa del instituto", "abstracción"], ["Explicar cómo llegar a casa", "algoritmo"]]);

const vida = cajas("El pensamiento computacional fuera de la informática: medicina, deporte, cocina y ciencia", [
  ["Medicina", "patrones en síntomas", "var(--red)"],
  ["Deporte", "analizar jugadas", "var(--leaf)"],
  ["Cocina", "recetas paso a paso", "var(--sun)"],
  ["Ciencia", "modelos del clima", "var(--pen)"],
], "Sirve para todo");

const programa = codigo("Ejemplo de patrón convertido en repetición: en lugar de escribir cuatro veces avanzar y girar, se repite cuatro veces", [
  ["// sin patrón", 0, PS.com], ["avanzar 50 · girar 90°", 0, PS.txt], ["avanzar 50 · girar 90°", 0, PS.txt], ["avanzar 50 · girar 90°", 0, PS.txt], ["avanzar 50 · girar 90°", 0, PS.txt], ["// con patrón", 0, PS.com], ["REPETIR 4 VECES", 0, PS.clave], ["avanzar 50 · girar 90°", 1, PS.ok],
], "Dibujar un cuadrado");

module.exports = {
  materia: "Programación y robótica",
  curso: C,
  titulo: "El pensamiento computacional",
  minutos: 100,
  objetivos: [
    "Explicar qué es el pensamiento computacional y para qué sirve",
    "Descomponer un problema complejo en partes más sencillas",
    "Reconocer patrones y aprovecharlos para simplificar soluciones",
    "Abstraer la información importante y descartar los detalles",
    "Diseñar algoritmos y probarlos con actividades desenchufadas",
    "Evaluar soluciones y aprender de los errores",
  ],
  claves: ["pensamiento computacional", "descomposición", "patrón", "abstracción", "algoritmo", "evaluación", "depurar", "desenchufado"],
  pregunta: {
    texto: "Organizar una fiesta de cumpleaños para toda la clase parece un lío enorme. ¿Cómo lo harías para que no se te olvide nada?",
    respuesta: "Lo mejor es <b>dividir</b> el problema en partes (invitaciones, comida, música, juegos), ver qué tareas se <b>repiten</b> (comprar, avisar), quedarse con lo <b>importante</b> (cuántos vienen, cuánto dinero hay) y hacer una <b>lista de pasos</b> ordenada. Sin darte cuenta, has usado el <mark>pensamiento computacional</mark>: la forma de pensar de los programadores, que sirve para cualquier problema.",
  },
  lectura: {
    titulo: "Jeannette Wing y una idea para todos",
    html: `<p>En 2006, la informática estadounidense <b>Jeannette Wing</b> publicó un artículo de solo tres páginas que dio la vuelta al mundo. Su título era «Pensamiento computacional», y su idea principal era sencilla pero revolucionaria: la forma en que los informáticos resuelven problemas no debería ser solo cosa de informáticos. Debería aprenderla todo el mundo, igual que se aprende a leer, a escribir o a hacer cuentas.</p><p>Wing explicaba que pensar computacionalmente no significa pensar como un ordenador, sino pensar como una persona que quiere que un ordenador le ayude. Significa saber dividir un problema grande en trozos, encontrar lo que se repite, quedarse con lo esencial y describir la solución con pasos claros.</p><p>Desde entonces, muchos países han incluido el pensamiento computacional en sus escuelas. Y no solo en clase de informática: los médicos lo usan para encontrar patrones en enfermedades, los biólogos para estudiar el ADN, los meteorólogos para predecir el tiempo y los entrenadores para analizar partidos. En este tema descubrirás sus cuatro herramientas y verás que ya las usas más de lo que crees.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 ¿Qué es el pensamiento computacional?</h3><p>El <mark>pensamiento computacional</mark> es una forma de resolver problemas que usan los programadores, pero que sirve para cualquier situación de la vida. Consiste en analizar un problema y plantear una solución de manera que la pueda llevar a cabo una persona o una máquina.</p><p>No es lo mismo que saber usar un ordenador, ni que programar. Programar es escribir instrucciones en un lenguaje concreto; el pensamiento computacional es lo que pasa <b>antes</b>, en tu cabeza: entender el problema y diseñar la solución. Se puede practicar con papel y lápiz, con juegos o con cartas, sin ninguna pantalla.</p><p>Se apoya en cuatro pilares que vas a estudiar en este tema: la <b>descomposición</b>, el <b>reconocimiento de patrones</b>, la <b>abstracción</b> y los <b>algoritmos</b>. A ellos se suma una quinta habilidad muy importante: la <b>evaluación</b>, es decir, comprobar si la solución funciona y mejorarla.</p>`, svg: cuatro, video: { id: "veXgaxaNICM", titulo: "Pensamiento computacional", canal: "Ucorp", vistas: 79185 } },
    { html: `<h3>1.2 Descomposición: trocear el problema</h3><p>La <mark>descomposición</mark> consiste en dividir un problema grande y complicado en <b>partes más pequeñas</b> y fáciles de resolver. Cada parte se puede pensar por separado, e incluso repartir entre varias personas.</p><p>Organizar una fiesta parece difícil, pero si la divides en invitaciones, comida, música y juegos, cada tarea es sencilla. Y cada parte se puede volver a dividir: la comida, en hacer la lista, comprar y preparar.</p><p>En programación se hace lo mismo. Un videojuego es enorme, pero se descompone en partes: mover al personaje, detectar choques, contar puntos, poner música… Cada parte es un pequeño programa. Las grandes empresas de videojuegos tienen equipos distintos para cada parte, y al final todo se junta. Cuando un problema te parezca imposible, pregúntate: ¿en qué partes lo puedo dividir?</p>`, svg: fiesta },
    { html: `<h3>1.3 Reconocimiento de patrones</h3><p>Un <mark>patrón</mark> es algo que se <b>repite</b> o que es parecido en varios casos. Reconocer patrones permite aprovechar lo que ya sabemos y no tener que resolver lo mismo una y otra vez.</p><p>Hay patrones en todas partes: en las series de figuras (círculo, cuadrado, cuadrado, círculo…), en las tablas de multiplicar, en las estaciones del año, en las rimas de una canción o en las jugadas de un equipo de fútbol.</p><p>En programación, cuando ves que unas instrucciones se repiten, puedes usar un <b>bucle</b>: en vez de escribir cuatro veces «avanzar y girar» para dibujar un cuadrado, escribes «repetir 4 veces: avanzar y girar». Y si ves que varios problemas se parecen (dibujar un cuadrado, un triángulo, un hexágono), puedes encontrar una solución general que sirva para todos: solo cambia el número de lados y el ángulo.</p>`, svg: patrones },
    { html: `<h3>1.4 Patrones que ahorran trabajo</h3><p>Encontrar un patrón no solo hace el trabajo más corto: también evita errores. Si copias cuatro veces las mismas instrucciones, es fácil equivocarse en una; si usas una repetición, solo hay que escribirlas bien una vez.</p><p>Fíjate en el ejemplo: dibujar un cuadrado sin patrón necesita 8 instrucciones; con el patrón, solo 2 dentro de un bucle. Y si quieres un octógono, basta con cambiar «4 veces» por «8 veces» y «90°» por «45°».</p><p>Los patrones también ayudan a <b>predecir</b>. Los meteorólogos buscan patrones en datos de muchos años para prever el tiempo; las tiendas online buscan patrones en lo que compran sus clientes para recomendar productos; los médicos buscan patrones en los síntomas para hacer un diagnóstico. Detectar patrones es una de las habilidades más valiosas del pensamiento computacional.</p>`, svg: programa },
    { html: `<h3>1.5 Abstracción: quedarse con lo importante</h3><p>La <mark>abstracción</mark> consiste en fijarse solo en la información <b>importante</b> para resolver un problema y <b>descartar los detalles</b> que no hacen falta.</p><p>Un ejemplo perfecto es el plano del metro: no muestra calles, edificios ni distancias reales, solo las estaciones y las líneas que las unen. Es un dibujo muy simplificado, pero contiene justo lo que necesitas para no perderte. Si tuviera todos los detalles de la ciudad, sería imposible de leer.</p><p>Cuando haces un resumen, un esquema o un mapa conceptual, también abstraes. Y en programación, cuando creas un personaje de un videojuego, no necesitas saber de qué color son sus calcetines: te importan su posición, su velocidad y sus vidas. Saber qué datos son importantes y cuáles no es clave para que los programas sean sencillos y funcionen bien.</p>`, svg: abstraccion },
    { html: `<h3>1.6 Modelos: abstracciones que se pueden usar</h3><p>Cuando abstraemos un fenómeno real para estudiarlo o simularlo, creamos un <b>modelo</b>. Un modelo es una representación simplificada de algo real que conserva sus características esenciales.</p><p>Un mapa es un modelo de un territorio; una maqueta, de un edificio; un globo terráqueo, de la Tierra. En informática, los modelos se convierten en programas: un simulador de vuelo es un modelo de un avión; un videojuego de fútbol, un modelo de un partido; una aplicación del tiempo, un modelo de la atmósfera.</p><p>Todo modelo deja cosas fuera, y por eso nunca es perfecto. La clave es elegir bien qué se conserva. En el plano del metro se pierden las distancias reales: dos estaciones que parecen muy juntas pueden estar lejos. Por eso es importante saber para qué sirve cada modelo y cuáles son sus límites.</p>`, svg: metro },
    { html: `<h3>1.7 Algoritmos: describir la solución</h3><p>Una vez entendido el problema, hay que describir la solución con un <mark>algoritmo</mark>: una lista ordenada y precisa de pasos que, si se sigue, resuelve el problema siempre.</p><p>Por ejemplo, para cruzar la calle con semáforo: mirar el semáforo; si está en verde, mirar a los dos lados y cruzar; si no, esperar y volver a mirar. Este algoritmo combina una <b>secuencia</b> (pasos en orden), una <b>decisión</b> (¿está en verde?) y una <b>repetición</b> (volver a mirar mientras no esté verde).</p><p>Un buen algoritmo debe ser <b>preciso</b> (sin ambigüedades), <b>ordenado</b> y <b>finito</b> (que termine). Se puede escribir con palabras, dibujar con un diagrama de flujo o programar con bloques. En el tema de los algoritmos profundizarás en todo esto; aquí lo importante es ver que el algoritmo es el último paso de un proceso que empieza descomponiendo, buscando patrones y abstrayendo.</p>`, svg: alg, video: { id: "TvbRJtfRZiM", titulo: "¿Qué es el pensamiento computacional?", canal: "El Profe Nor", vistas: 64014 } },
    { html: `<h3>1.8 Los cuatro pilares trabajando juntos</h3><p>En los problemas reales, los cuatro pilares se usan <b>a la vez</b>. Imagina que tienes que diseñar un juego de laberinto:</p><ul><li><b>Descomposición</b>: dibujar el laberinto, mover al personaje, detectar las paredes, detectar la salida.</li><li><b>Patrones</b>: moverse arriba, abajo, izquierda y derecha es casi igual; solo cambia la dirección.</li><li><b>Abstracción</b>: el laberinto es una cuadrícula de casillas libres u ocupadas; no importa el color de las paredes.</li><li><b>Algoritmo</b>: «al pulsar una flecha, si la casilla de destino está libre, moverse; si es la salida, ganar».</li></ul>${fuerzaBruta}<p>No hay un orden fijo: a veces, al escribir el algoritmo, descubres un patrón nuevo o te das cuenta de que tienes que descomponer más. Pensar es un proceso de ida y vuelta.</p>` },
    { html: `<h3>2.1 Actividades desenchufadas</h3><p>Se puede aprender a pensar como un programador <b>sin ordenador</b>. Estas actividades se llaman <mark>desenchufadas</mark> («unplugged» en inglés) y son una forma muy divertida de practicar.</p><p>Un ejemplo clásico: se dibuja una cuadrícula en el suelo con cinta adhesiva. Un compañero hace de <b>robot</b> y otro, de <b>programador</b>. El programador escribe en un papel una secuencia de flechas (avanzar, girar a la derecha, girar a la izquierda) para llevar al robot desde la salida hasta un tesoro. El robot debe seguir las flechas <b>al pie de la letra</b>, aunque vea que se equivoca.</p><p>Otros juegos desenchufados: ordenar cartas con un método fijo, dibujar una figura siguiendo instrucciones que dicta un compañero sin enseñarla, o adivinar un número con preguntas de sí o no. Todas entrenan la precisión, el orden y la búsqueda de errores.</p>`, svg: desench },
    { html: `<h3>2.2 Programar un robot en la cuadrícula</h3><p>Vamos a practicar con un ejemplo. El robot R está en la esquina inferior izquierda, mirando hacia arriba. El tesoro está tres casillas a la derecha y dos hacia arriba. Un programa posible es:</p><p style="text-align:center"><b>↑ ↑ ↷ → → →</b></p><p>Es decir: avanzar 2, girar a la derecha y avanzar 3. Pero hay otras soluciones: girar primero a la derecha, avanzar 3, girar a la izquierda y avanzar 2. Las dos llegan al tesoro; la primera usa un giro menos, así que es un poco más <b>eficiente</b>.</p><p>Si hay obstáculos en la cuadrícula, el programa se complica y aparecen las decisiones: «si hay una pared delante, girar». Y si el camino tiene tramos iguales, aparecen los patrones: «repetir 3 veces: avanzar». Prueba a inventar tus propios retos con un compañero y a encontrar el programa más corto.</p>`, svg: cuadricula },
    { html: `<h3>2.3 Evaluar y aprender del error</h3><p>Ninguna solución sale perfecta a la primera. Por eso el pensamiento computacional incluye la <mark>evaluación</mark>: comprobar si la solución funciona, si es correcta en todos los casos y si se puede mejorar.</p><p>Cuando algo falla, no hay que desanimarse: hay que <b>depurar</b>. Depurar es buscar el error, entender por qué ocurre y corregirlo. Los programadores profesionales pasan gran parte de su tiempo depurando. Se dice que el término inglés «bug» (bicho) para los errores informáticos se popularizó cuando la científica Grace Hopper encontró una polilla atrapada en un ordenador en 1947.</p><p>Preguntas útiles para evaluar: ¿hace lo que tenía que hacer?, ¿funciona con todos los datos, también con los extremos?, ¿se puede hacer con menos pasos?, ¿lo entendería otra persona? Equivocarse forma parte de aprender: cada error encontrado es una pista para mejorar.</p>`, svg: evaluar },
    { html: `<h3>2.4 Pensamiento computacional en todas partes</h3><p>Aunque nació en la informática, el pensamiento computacional sirve para casi cualquier campo:</p><ul><li>En <b>medicina</b>, para encontrar patrones en síntomas y en imágenes médicas.</li><li>En el <b>deporte</b>, para analizar jugadas y diseñar estrategias.</li><li>En la <b>cocina</b>, cada receta es un algoritmo, y un menú se descompone en platos.</li><li>En la <b>ciencia</b>, para crear modelos del clima, de las epidemias o del universo.</li><li>En los <b>estudios</b>, para organizar un trabajo en grupo, hacer esquemas (abstracción) o planificar la semana (algoritmo).</li></ul><p>Por eso se dice que es una competencia básica del siglo XXI, como leer o calcular. Y no se trata de pensar como una máquina: las máquinas ejecutan, pero las personas son las que entienden los problemas, imaginan soluciones creativas y deciden si son justas y útiles.</p>`, svg: vida },
  ],
  ejemplos: [
    { enunciado: "Descompón el problema «preparar una excursión de clase».", pasos: ["Transporte: autobús, horario.", "Permisos: autorizaciones de las familias.", "Comida: bocadillos, agua.", "Actividades: ruta, juegos."], resultado: "Cuatro partes que se pueden repartir entre grupos." },
    { enunciado: "Encuentra el patrón: 2, 5, 8, 11, … ¿Qué número sigue?", pasos: ["Cada número es el anterior + 3."], resultado: "14." },
    { enunciado: "Para hacer un mapa del recorrido a tu casa, ¿qué información conservas y cuál descartas?", pasos: ["Conservar: calles, cruces, giros, referencias (farmacia, parque).", "Descartar: color de las casas, coches aparcados, árboles."], resultado: "Abstracción: solo lo necesario para orientarse." },
    { enunciado: "Escribe un algoritmo para lavarse las manos.", pasos: ["Abrir el grifo y mojarse las manos.", "Poner jabón y frotar 20 segundos.", "Aclarar, cerrar el grifo y secarse."], resultado: "Una secuencia de pasos precisa y ordenada." },
    { enunciado: "Un robot debe ir 4 casillas hacia delante, girar a la derecha y repetirlo hasta volver al inicio. Usa un patrón.", pasos: ["El trozo «avanzar 4, girar a la derecha» se repite.", "Hay que hacerlo 4 veces para cerrar el cuadrado."], resultado: "REPETIR 4 VECES: avanzar 4, girar derecha." },
    { enunciado: "Un compañero ha programado: ↑ ↑ ↶ → →. El robot no llega. ¿Qué ha pasado?", pasos: ["Tras ↶ el robot mira a la izquierda.", "Las flechas → no tienen sentido de girar; probablemente quería ↷."], resultado: "Hay que cambiar el giro a la izquierda por un giro a la derecha: depurar." },
  ],
  errores: [
    "Intentar resolver un problema grande de una vez, sin descomponerlo.",
    "Repetir instrucciones a mano en lugar de aprovechar el patrón con un bucle.",
    "Llenar la solución de detalles que no hacen falta (falta de abstracción).",
    "Escribir pasos ambiguos que cada uno interpreta de forma distinta.",
    "No probar la solución o rendirse ante el primer error.",
    "Creer que el pensamiento computacional solo sirve para ordenadores.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Qué es el pensamiento computacional?", sol: "Una forma de resolver problemas analizándolos y planteando soluciones que pueda ejecutar una persona o una máquina." },
    { nivel: "básico", q: "Escribe los cuatro pilares del pensamiento computacional.", sol: "Descomposición, reconocimiento de patrones, abstracción y algoritmos." },
    { nivel: "básico", q: "¿Qué es descomponer un problema?", sol: "Dividirlo en partes más pequeñas y sencillas." },
    { nivel: "básico", q: "Descompón la tarea «limpiar tu habitación».", sol: "Recoger la ropa, hacer la cama, ordenar la mesa, barrer." },
    { nivel: "básico", q: "¿Qué número sigue? 1, 2, 4, 8, 16…", sol: "32 (se multiplica por 2)." },
    { nivel: "básico", q: "¿Qué figura sigue? ▲ ● ● ▲ ● ● ▲ …", sol: "●." },
    { nivel: "básico", q: "¿Qué es la abstracción?", sol: "Quedarse con la información importante y descartar los detalles innecesarios." },
    { nivel: "básico", q: "Pon un ejemplo de abstracción de la vida diaria.", sol: "Un plano de metro, un resumen o un esquema." },
    { nivel: "básico", q: "¿Qué es una actividad desenchufada?", sol: "Una actividad para aprender a programar sin ordenador." },
    { nivel: "básico", q: "¿Qué significa depurar?", sol: "Buscar los errores de una solución y corregirlos." },
    { nivel: "básico", q: "¿Quién escribió en 2006 el famoso artículo sobre pensamiento computacional?", sol: "Jeannette Wing." },
    { nivel: "básico", q: "Di qué pilar se usa: «Dividir un trabajo de grupo en partes para cada uno».", sol: "Descomposición." },
    { nivel: "medio", q: "Descompón el problema «hacer un videojuego de carreras» en al menos 5 partes.", sol: "Dibujar la pista, mover el coche, detectar choques, contar el tiempo, poner música, pantalla de victoria." },
    { nivel: "medio", q: "Escribe con un patrón (repetición) las instrucciones para dibujar un triángulo equilátero.", sol: "REPETIR 3 VECES: avanzar 50, girar 120°." },
    { nivel: "medio", q: "¿Qué datos de un jugador son importantes para un videojuego de fútbol? ¿Cuáles descartarías?", sol: "Posición, velocidad, equipo, si tiene el balón. Descartar: color de los cordones, nombre de su mascota." },
    { nivel: "medio", q: "Escribe un algoritmo para preparar un vaso de cacao con leche.", sol: "Coger un vaso, echar 200 mL de leche, añadir 2 cucharadas de cacao, remover 20 segundos." },
    { nivel: "medio", q: "Encuentra el patrón y continúa: 3, 6, 9, 12, … y 1, 4, 9, 16, …", sol: "15 (de 3 en 3); 25 (cuadrados: 1², 2², 3², 4², 5²)." },
    { nivel: "medio", q: "En una cuadrícula, el robot mira hacia arriba y el tesoro está 2 a la derecha y 3 arriba. Escribe un programa con flechas.", sol: "↑ ↑ ↑ ↷ → → (avanzar 3, girar derecha, avanzar 2)." },
    { nivel: "medio", q: "Explica por qué un plano de metro no sirve para calcular cuánto se tarda andando entre dos estaciones.", sol: "Porque es una abstracción que no conserva las distancias reales." },
    { nivel: "medio", q: "Relaciona cada problema con el pilar que más ayuda: hacer un horario semanal, dibujar 10 árboles iguales, explicar un juego.", sol: "Descomposición (por días); patrones; algoritmo." },
    { nivel: "medio", q: "Un robot debe recorrer un pasillo de 6 casillas. Escribe el programa sin patrón y con patrón.", sol: "Sin patrón: avanzar ×6 escritos. Con patrón: REPETIR 6 VECES: avanzar." },
    { nivel: "medio", q: "¿Por qué se dice «bug» a un error informático?", sol: "Por la anécdota de una polilla encontrada en un ordenador en 1947, popularizada por Grace Hopper." },
    { nivel: "medio", q: "Pon dos ejemplos de profesiones que usen el pensamiento computacional y explica cómo.", sol: "Médico: patrones de síntomas. Meteoróloga: modelos del clima." },
    { nivel: "avanzado", q: "Aplica los cuatro pilares a «organizar el torneo deportivo del instituto».", sol: "Descomponer: inscripciones, calendario, pistas, árbitros. Patrones: todos los partidos siguen el mismo esquema. Abstracción: importan equipos, horarios y resultados. Algoritmo: pasos para crear los cruces y registrar ganadores." },
    { nivel: "avanzado", q: "Diseña un reto desenchufado para un compañero: una cuadrícula de 5 × 5 con dos obstáculos y un tesoro. Escribe la solución más corta.", sol: "Respuesta abierta: debe incluir el dibujo, la solución con flechas y comprobar que no atraviesa obstáculos." },
    { nivel: "avanzado", q: "Generaliza: escribe un único algoritmo que dibuje cualquier polígono regular de n lados.", sol: "REPETIR n VECES: avanzar 50, girar 360/n grados." },
    { nivel: "avanzado", q: "Un compañero dice: «El pensamiento computacional es pensar como un ordenador». ¿Estás de acuerdo? Razónalo.", sol: "No: es pensar como una persona que quiere resolver un problema, a veces con ayuda de una máquina; la creatividad y el juicio son humanos." },
    { nivel: "avanzado", q: "Crea un modelo (abstracción) del comedor del instituto para un programa que calcule cuánta gente cabe. ¿Qué datos guardarías?", sol: "Número de mesas, sillas por mesa, turnos; no hacen falta el color de las paredes ni el menú." },
    { nivel: "avanzado", q: "Encuentra el error: «Para ir del aula al patio: sal del aula, baja las escaleras, gira, sal al patio».", sol: "«Gira» es ambiguo: falta el sentido (derecha o izquierda) y el lugar exacto." },
    { nivel: "avanzado", q: "Explica con un ejemplo cómo la evaluación puede llevarte a volver a descomponer un problema.", sol: "Si al probar un juego el personaje atraviesa paredes, descubres que falta una parte («detectar choques») y la añades." },
  ],
  quiz: [
    { q: "El pensamiento computacional sirve para…", o: ["solo para usar ordenadores", "resolver problemas de cualquier tipo", "jugar a videojuegos", "escribir más rápido"], a: 1, e: "Es una forma de pensar." },
    { q: "Dividir un problema en partes es…", o: ["abstracción", "descomposición", "algoritmo", "patrón"], a: 1, e: "Descomponer." },
    { q: "Buscar lo que se repite es…", o: ["descomposición", "reconocer patrones", "depurar", "abstraer"], a: 1, e: "Patrones." },
    { q: "Quedarse con lo importante es…", o: ["patrón", "abstracción", "algoritmo", "bucle"], a: 1, e: "Abstracción." },
    { q: "Una lista de pasos ordenados y precisos es…", o: ["un patrón", "un algoritmo", "un modelo", "un bug"], a: 1, e: "Algoritmo." },
    { q: "Un plano de metro es un ejemplo de…", o: ["descomposición", "abstracción", "bucle", "error"], a: 1, e: "Solo lo esencial." },
    { q: "¿Qué sigue? 5, 10, 15, 20…", o: ["30", "25", "21", "40"], a: 1, e: "De 5 en 5." },
    { q: "Un patrón en programación se aprovecha con…", o: ["un error", "un bucle", "un fondo", "un sonido"], a: 1, e: "Repetición." },
    { q: "Dibujar un cuadrado con un bucle: repetir…", o: ["2 veces", "4 veces", "8 veces", "1 vez"], a: 1, e: "4 lados." },
    { q: "Una actividad desenchufada…", o: ["necesita internet", "se hace sin ordenador", "es un videojuego", "es un robot"], a: 1, e: "Sin pantalla." },
    { q: "Buscar y corregir errores es…", o: ["descomponer", "depurar", "abstraer", "compilar"], a: 1, e: "Depurar." },
    { q: "Jeannette Wing popularizó el término en…", o: ["1947", "2006", "1843", "2020"], a: 1, e: "Artículo de 2006." },
    { q: "Un modelo es…", o: ["una copia exacta", "una representación simplificada", "un error", "un robot"], a: 1, e: "Abstracción útil." },
    { q: "En una cuadrícula, ↷ significa…", o: ["avanzar", "girar a la derecha", "retroceder", "saltar"], a: 1, e: "Giro horario." },
    { q: "«Mirar si el semáforo está verde» es una…", o: ["secuencia", "decisión", "abstracción", "patrón"], a: 1, e: "Pregunta de sí o no." },
    { q: "Evaluar una solución es…", o: ["borrarla", "comprobar si funciona y mejorarla", "copiarla", "dibujarla"], a: 1, e: "Evaluar." },
    { q: "La palabra «bug» se asocia a…", o: ["una mariposa", "una polilla en un ordenador", "un virus", "un gusano"], a: 1, e: "Anécdota de 1947." },
    { q: "¿Qué dato es importante para mover un personaje?", o: ["su color favorito", "su posición", "su cumpleaños", "su nombre"], a: 1, e: "Abstracción." },
    { q: "Los médicos usan el pensamiento computacional para…", o: ["nada", "encontrar patrones en síntomas", "programar robots", "dibujar"], a: 1, e: "Patrones." },
    { q: "El orden de los cuatro pilares…", o: ["es siempre fijo", "puede ir y volver", "no importa usar solo uno", "empieza por el algoritmo"], a: 1, e: "Proceso de ida y vuelta." },
  ],
  examen: [
    { q: "Repartir un trabajo de grupo en partes es…", o: ["abstracción", "descomposición", "patrón", "depuración"], a: 1, e: "Descomponer." },
    { q: "¿Qué sigue? ■ ● ■ ● ■ …", o: ["■", "●", "▲", "nada"], a: 1, e: "Alternan." },
    { q: "Para dibujar un hexágono: repetir 6 veces avanzar y girar…", o: ["90°", "60°", "45°", "120°"], a: 1, e: "360 : 6." },
    { q: "Un resumen de un tema es una…", o: ["descomposición", "abstracción", "repetición", "decisión"], a: 1, e: "Lo importante." },
    { q: "El robot mira arriba y hace ↑ ↷ ↑. ¿Dónde acaba?", o: ["dos arriba", "uno arriba y uno a la derecha", "uno a la izquierda", "en el inicio"], a: 1, e: "Avanza, gira, avanza." },
    { q: "Una solución que no se prueba…", o: ["siempre funciona", "puede tener errores ocultos", "es más eficiente", "es un patrón"], a: 1, e: "Hay que evaluar." },
    { q: "Un simulador de vuelo es un…", o: ["patrón", "modelo", "bucle", "bug"], a: 1, e: "Modelo de un avión." },
    { q: "¿Qué pilar NO es del pensamiento computacional?", o: ["abstracción", "memorización", "descomposición", "patrones"], a: 1, e: "No se trata de memorizar." },
  ],
  feynman: ["Qué es el pensamiento computacional y por qué no es lo mismo que programar", "Cómo se descompone un problema grande con un ejemplo", "Qué es la abstracción y por qué un plano de metro es un buen ejemplo", "Por qué equivocarse y depurar forma parte de aprender"],
  figura: {
    titulo: "El pensamiento computacional en un vistazo",
    svg: resumen("Resumen: descomposición, patrones, abstracción, algoritmos y evaluación", [
      ["Descomponer", "dividir en partes pequeñas", "var(--pen)"],
      ["Patrones", "lo que se repite → bucle", "var(--leaf)"],
      ["Abstraer", "solo lo importante · modelos", "var(--sun)"],
      ["Algoritmo", "pasos precisos y ordenados", "var(--red)"],
      ["Evaluar", "probar · depurar · mejorar", "var(--inf)"],
    ]),
  },
  video: { id: "vDrfsiy21To", titulo: "¿Qué es el pensamiento computacional? Explicado para niños", canal: "Guadalupe Gómez (Code and Play)", vistas: 33378, megusta: 0, busqueda: "pensamiento computacional para estudiantes" },
  mapa: mapa("PENSAR", "var(--pen)", [
    ["Descomponer", "trocear el problema", "var(--pen)"],
    ["Patrones", "repeticiones · bucles", "var(--leaf)"],
    ["Abstraer", "lo esencial · modelos", "var(--sun)"],
    ["Algoritmo", "pasos · evaluar", "var(--red)"],
  ], 250),
  glosario: [
    ["Pensamiento computacional", "Forma de resolver problemas propia de la informática que sirve para cualquier ámbito."],
    ["Descomposición", "División de un problema en partes más pequeñas."],
    ["Patrón", "Algo que se repite o es parecido en varios casos."],
    ["Abstracción", "Seleccionar lo importante y descartar los detalles."],
    ["Modelo", "Representación simplificada de algo real."],
    ["Algoritmo", "Lista ordenada y precisa de pasos para resolver un problema."],
    ["Evaluación", "Comprobación de que una solución funciona y puede mejorarse."],
    ["Depurar", "Buscar y corregir errores."],
    ["Bug", "Error en un programa."],
    ["Desenchufado", "Actividad para aprender a programar sin ordenador."],
    ["Bucle", "Repetición de instrucciones."],
    ["Generalizar", "Encontrar una solución que sirva para muchos casos parecidos."],
  ],
  situacion: {
    titulo: "Diseñamos un juego de mesa",
    reto: "En grupos, vais a diseñar un juego de mesa sencillo aplicando los cuatro pilares del pensamiento computacional, y otro grupo lo probará siguiendo solo vuestras instrucciones.",
    pasos: [
      "Descomponed el juego: tablero, fichas, reglas, cómo se gana.",
      "Buscad patrones: turnos que se repiten, casillas parecidas.",
      "Abstraed: decidid qué información es imprescindible en el tablero.",
      "Escribid las reglas como un algoritmo claro, con decisiones y repeticiones.",
      "Haced que otro grupo juegue con vuestras reglas, anotad dudas y depurad.",
    ],
    producto: "Un juego de mesa con su tablero y sus reglas escritas como algoritmo.",
    evaluacion: ["Descompone el juego en partes claras.", "Aprovecha patrones y abstrae lo esencial.", "Las reglas son precisas y no ambiguas.", "Mejora el juego tras la prueba."],
  },
  tarjetas: [
    ["Pensamiento computacional", "Resolver problemas como un programador"], ["Descomponer", "Trocear"], ["Patrón", "Lo que se repite"],
    ["Abstraer", "Solo lo importante"], ["Modelo", "Realidad simplificada"], ["Algoritmo", "Pasos precisos"],
    ["Evaluar", "¿Funciona? ¿Mejora?"], ["Depurar", "Corregir errores"], ["Bug", "Error"],
    ["Desenchufado", "Sin ordenador"], ["Bucle", "Aprovechar un patrón"], ["Jeannette Wing", "Pensamiento para todos"],
  ],
  familias: ["Descomponed juntos una tarea de casa grande (una mudanza de habitación, una comida familiar).", "Buscad patrones en canciones, baldosas o calendarios.", "Jugad al «robot humano» dando instrucciones precisas para preparar un bocadillo.", "Dibujad un plano simplificado del barrio con solo lo importante."],
  profesores: {
    saberes: "Pensamiento computacional: descomposición, reconocimiento de patrones, abstracción, algoritmos, evaluación y depuración; actividades desenchufadas (materia optativa de Programación y robótica, en el marco del RD 217/2022).",
    ideas: ["Cuadrícula en el suelo con cinta y roles de robot y programador.", "Fichas de patrones con dificultad creciente.", "Comparar un mapa real con un plano de metro.", "Diseño de juegos de mesa por equipos con prueba cruzada."],
  },
  fuentes: [RD, wiki("Pensamiento computacional", "Pensamiento_computacional"), wiki("Jeannette Wing", "Jeannette_Wing"), { t: "CS Unplugged: actividades desenchufadas", url: "https://www.csunplugged.org/es/" }],
  revisado: REV,
};
