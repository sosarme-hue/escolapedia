// Educación Plástica 5º de Primaria: el paisaje y la perspectiva. Dibujos propios en SVG.
const { tema, L, svg, tx, perspectiva1, AZ, RO, VE, NA, AM, AG } = require("./_pri5d");

const M = "Educación Plástica";

// Tres montañas en planos: la más lejana más clara y azulada.
const planosMontes = (label) => svg(label, `<rect x="10" y="10" width="240" height="150" rx="8" fill="${AZ}" fill-opacity=".08"/>
  <path d="M10 92 L 60 50 L 110 80 L 170 40 L 250 86 V 160 H 10 Z" fill="${AZ}" fill-opacity=".25"/>
  <path d="M10 116 L 70 78 L 130 108 L 190 70 L 250 110 V 160 H 10 Z" fill="${VE}" fill-opacity=".45"/>
  <path d="M10 140 L 90 110 L 170 136 L 250 120 V 160 H 10 Z" fill="${VE}" fill-opacity=".85"/>
  ${tx(214, 32, "fondo", { s: 10, c: AZ })}${tx(214, 82, "plano medio", { s: 10, c: VE })}${tx(214, 174, "primer plano", { s: 10, c: VE })}`);

module.exports = tema({
  materia: M,
  titulo: "El paisaje y la perspectiva",
  objetivos: ["Conocer el género del paisaje y sus tipos", "Organizar un paisaje en planos: primer plano, plano medio y fondo", "Crear sensación de profundidad con tamaño, superposición, color y nitidez", "Dibujar con la perspectiva de un punto de fuga"],
  claves: ["paisaje", "horizonte", "línea de horizonte", "primer plano", "plano medio", "fondo", "superposición", "perspectiva atmosférica", "perspectiva lineal", "punto de fuga", "líneas de fuga", "encuadre"],
  pregunta: [
    "Una hoja de papel es plana. ¿Cómo consiguen los pintores que un camino parezca alejarse kilómetros hacia el fondo?",
    "Con la <mark>perspectiva</mark>: un conjunto de trucos que engañan al ojo. Las cosas lejanas se dibujan <b>más pequeñas</b>, <b>más altas</b> en el papel, <b>más claras y azuladas</b>, y las líneas paralelas del camino se juntan en un <mark>punto de fuga</mark> sobre el horizonte. Así un dibujo plano parece tener <b>profundidad</b>.",
  ],
  bloques: [
    ["¿Qué es un paisaje?", `<p>Un <mark>paisaje</mark> es una obra que representa un lugar: la naturaleza, el campo, el mar o una ciudad. Durante siglos fue solo el fondo de los retratos y las escenas religiosas, pero en el siglo XVII se convirtió en un <b>género</b> propio. En el XIX, los pintores salieron a pintar <b>al aire libre</b> para captar la luz real.</p><p>Hay paisajes <b>naturales</b> (montañas, bosques, ríos), <b>marinas</b> (el mar y las costas), <b>urbanos</b> (calles y edificios) y <b>rurales</b> (campos, pueblos, granjas). También existen paisajes <b>imaginarios</b> o fantásticos.</p>`,
      L.filas("Tipos de paisaje", [["natural", "montañas, bosques, ríos", VE], ["marina", "el mar y las costas", AZ], ["urbano", "calles y edificios", NA], ["rural", "campos y pueblos", AM]])],
    ["La línea de horizonte", `<p>La <mark>línea de horizonte</mark> es la línea donde parece que el cielo se junta con la tierra o el mar. En un dibujo, coincide con la <b>altura de los ojos</b> de quien mira. Si estás tumbado en la playa, el horizonte está bajo; si miras desde una montaña, está alto.</p><p>Elegir dónde colocarla cambia el cuadro: un <b>horizonte bajo</b> deja mucho cielo y da sensación de amplitud; un <b>horizonte alto</b> muestra mucho suelo o mar. Un consejo de los fotógrafos: evita ponerla justo en la mitad; queda más interesante a un tercio.</p>`,
      svg("Dos paisajes, uno con horizonte bajo y otro con horizonte alto", `${[[14, 120, "horizonte bajo"], [134, 50, "horizonte alto"]].map(([x, h, n]) => `<rect x="${x}" y="20" width="112" height="130" rx="6" fill="${AZ}" fill-opacity=".15" stroke="var(--line)"/><rect x="${x}" y="${h}" width="112" height="${150 - h}" fill="${VE}" fill-opacity=".45"/><path d="M${x} ${h} H ${x + 112}" stroke="${RO}" stroke-width="2"/>${tx(x + 56, 168, n, { s: 10.5, c: RO })}`).join("")}<circle cx="44" cy="54" r="10" fill="${AM}"/>`)],
    ["Los planos del paisaje", `<p>Para ordenar un paisaje lo dividimos en <mark>planos</mark> según su distancia. El <b>primer plano</b> es lo más cercano: lo vemos grande, con detalles y colores intensos (una flor, una roca, una valla). El <b>plano medio</b> está a media distancia: árboles, casas, un río.</p><p>El <b>fondo</b> es lo más lejano: montañas, el cielo, una ciudad a lo lejos. Allí las cosas se ven pequeñas, sin detalles y más claras. Pensar en planos te ayudará a decidir qué dibujar primero y cuánto detalle poner en cada zona.</p>`,
      planosMontes("Paisaje de montañas en primer plano, plano medio y fondo")],
    ["Trucos de profundidad", `<p>Antes de usar reglas, hay trucos sencillos para dar <mark>profundidad</mark>. <b>1. Tamaño:</b> lo lejano se dibuja más pequeño. <b>2. Posición:</b> lo lejano se sitúa más arriba en el papel, cerca del horizonte. <b>3. Superposición:</b> lo que está delante tapa una parte de lo que está detrás.</p><p><b>4. Detalle:</b> lo cercano tiene detalles nítidos; lo lejano, formas simples. Combinando estos trucos, una fila de árboles de distinto tamaño ya parece un camino que se aleja, aunque no hayas trazado ninguna línea de fuga.</p>`,
      svg("Árboles de tamaños distintos que se superponen y parecen alejarse", `<path d="M10 70 H 250" stroke="${AG}" stroke-width="1.5"/>${[1, 0.72, 0.5, 0.34, 0.22].map((k, i) => { const x = 40 + i * 44, y = 160 - (160 - 70) * (1 - k) * 0.95; return `<path d="M${x} ${y} V ${y - 40 * k}" stroke="${NA}" stroke-width="${6 * k + 1}"/><circle cx="${x}" cy="${y - 52 * k}" r="${22 * k}" fill="${VE}" fill-opacity="${0.4 + k * 0.5}"/>`; }).join("")}${tx(60, 172, "cerca: grande y abajo", { s: 10, c: "var(--muted)" })}${tx(180, 50, "lejos: pequeño y arriba", { s: 10, c: "var(--muted)" })}`)],
    ["La perspectiva atmosférica", `<p>Cuando miramos a lo lejos, entre nosotros y las montañas hay mucho aire, polvo y humedad. Por eso lo lejano se ve <b>más claro</b>, <b>más azulado</b> y <b>menos nítido</b>. Los pintores imitan este efecto con la <mark>perspectiva atmosférica</mark>.</p><p>Para conseguirla: pinta el primer plano con colores <b>cálidos e intensos</b> y contornos marcados; el plano medio, con colores algo más suaves; y el fondo, con <b>azules y grises claros</b> y bordes difuminados. <b>Leonardo da Vinci</b> la usó en el fondo de la Gioconda, donde las montañas se pierden en una bruma azulada.</p>`,
      L.filas("Perspectiva atmosférica", [["primer plano", "colores intensos y cálidos, nítido", RO], ["plano medio", "colores más suaves", VE], ["fondo", "azulado, claro y borroso", AZ]]), "p4b"],
    ["La perspectiva lineal: el punto de fuga", `<p>En el siglo XV, arquitectos italianos como <b>Brunelleschi</b> descubrieron una regla geométrica: las líneas paralelas que se alejan de nosotros (los bordes de un camino, las vías del tren, los bordillos de una calle) parecen <b>juntarse</b> en un punto del horizonte llamado <mark>punto de fuga</mark>.</p><p>Las líneas que van hacia ese punto se llaman <mark>líneas de fuga</mark>. En la <b>perspectiva de un punto de fuga</b>, las líneas horizontales y verticales que miran de frente siguen siendo horizontales y verticales; solo las que «se alejan» van hacia el punto.</p>`,
      perspectiva1("Camino que se estrecha hacia un punto de fuga en el horizonte, con una caja y árboles")],
    ["Dibujar una calle paso a paso", `<p><b>1.</b> Traza la <b>línea de horizonte</b> y marca el <b>punto de fuga</b> en ella. <b>2.</b> Dibuja los bordes de la calle: dos líneas que salen de las esquinas de abajo y van al punto. <b>3.</b> Dibuja la fachada de un edificio como un rectángulo de frente, cerca de un borde.</p><p><b>4.</b> Une las esquinas de ese rectángulo con el punto de fuga (líneas suaves). <b>5.</b> Corta esas líneas con una vertical para marcar dónde acaba el edificio. <b>6.</b> Añade ventanas y puertas siguiendo las mismas líneas. <b>7.</b> Borra las líneas de ayuda y colorea.</p>`,
      svg("Calle en perspectiva con edificios a ambos lados y un punto de fuga", `<path d="M10 76 H 250" stroke="${AG}" stroke-width="1.5"/><circle cx="130" cy="76" r="4" fill="${RO}"/><path d="M30 170 L 130 76 L 230 170" fill="var(--line)" fill-opacity=".5"/><path d="M14 30 L 70 56 V 112 L 14 150 Z" fill="${NA}" fill-opacity=".45" stroke="${NA}" stroke-width="2"/><path d="M246 30 L 190 56 V 112 L 246 150 Z" fill="${AZ}" fill-opacity=".35" stroke="${AZ}" stroke-width="2"/><path d="M14 30 L 130 76 M14 150 L 130 76 M246 30 L 130 76 M246 150 L 130 76" stroke="${RO}" stroke-width="1" stroke-dasharray="4 3"/>${[0, 1].map((i) => `<path d="M${24 + i * 22} ${54 + i * 9} l 12 5 v 14 l -12 -5 Z" fill="var(--paper)" stroke="${NA}"/><path d="M${236 - i * 22} ${54 + i * 9} l -12 5 v 14 l 12 -5 Z" fill="var(--paper)" stroke="${AZ}"/>`).join("")}`)],
    ["Grandes paisajistas", `<p><b>Joaquín Sorolla</b> pintó las playas de Valencia llenas de luz. <b>Claude Monet</b>, impresionista francés, pintó muchas veces el mismo paisaje a distintas horas para estudiar cómo cambia la luz. <b>Vincent van Gogh</b> pintó campos de trigo y cielos en movimiento.</p><p>En España, <b>Aureliano de Beruete</b> pintó el Guadarrama y <b>Darío de Regoyos</b>, paisajes del norte. En la ciudad, <b>Antonio López</b> ha pintado vistas de Madrid con una perspectiva precisa durante años. Y en Japón, <b>Hokusai</b> hizo famosas sus estampas del monte Fuji.</p>`,
      L.filas("Pintores de paisaje", [["Sorolla", "playas llenas de luz", AM], ["Monet", "la luz a distintas horas", AZ], ["Antonio López", "vistas de Madrid", NA], ["Hokusai", "estampas del monte Fuji", RO]])],
    ["Taller: mi paisaje con profundidad", `<p>Crea un paisaje de tu entorno o imaginario aplicando lo aprendido. <b>1.</b> Elige dónde colocar el horizonte. <b>2.</b> Divide el espacio en tres planos. <b>3.</b> Dibuja un camino, un río o una calle que vaya hacia un <b>punto de fuga</b>. <b>4.</b> Coloca elementos grandes y detallados delante y pequeños y simples detrás.</p><p><b>5.</b> Colorea usando la <b>perspectiva atmosférica</b>: intenso y cálido delante, claro y azulado al fondo. Al acabar, enséñalo a un compañero: ¿qué trucos de profundidad descubre en tu dibujo?</p>`,
      L.filas("Lista del taller de paisaje", [["☐ horizonte", "bajo, alto o a un tercio", AG], ["☐ tres planos", "cerca, medio y lejos", VE], ["☐ punto de fuga", "camino, río o calle", RO], ["☐ color", "intenso delante, azulado al fondo", AZ]])],
  ],
  ejemplos: [
    ["En tu dibujo, dos árboles iguales tienen el mismo tamaño aunque uno está mucho más lejos. ¿Qué corriges?", ["Lo lejano se ve más pequeño.", "Además, se coloca más arriba, cerca del horizonte."], "Dibujar el árbol lejano más pequeño y más alto en el papel."],
    ["¿De qué color pintarías unas montañas muy lejanas?", ["Perspectiva atmosférica: el aire las aclara.", "Tonos fríos y suaves."], "Azul claro o grisáceo, con bordes difuminados."],
    ["Dibujas unas vías de tren que se alejan. ¿Cómo trazas los raíles?", ["Son paralelos que se alejan.", "Se juntan en el punto de fuga del horizonte."], "Como dos líneas que salen de abajo y se unen en el punto de fuga."],
  ],
  errores: [
    "Dibujar todo del mismo tamaño y en la misma línea: el paisaje queda plano.",
    "Poner el punto de fuga fuera de la línea de horizonte.",
    "Pintar el fondo con colores tan intensos como el primer plano.",
    "Hacer que las líneas verticales de los edificios se inclinen hacia el punto de fuga (en un punto de fuga siguen verticales).",
    "Dibujar el horizonte siempre en la mitad exacta del papel.",
  ],
  ejercicios: [
    ["¿Qué es la línea de horizonte?", "La línea donde parece unirse el cielo con la tierra o el mar; está a la altura de los ojos."],
    ["Nombra los tres planos de un paisaje.", "Primer plano, plano medio y fondo."],
    ["Escribe cuatro trucos para dar profundidad.", "Tamaño, posición más alta, superposición y menos detalle en lo lejano."],
    ["¿Qué es la perspectiva atmosférica?", "Representar lo lejano más claro, azulado y borroso por el aire que hay entre medias."],
    ["¿Qué es el punto de fuga?", "El punto del horizonte donde parecen juntarse las líneas paralelas que se alejan."],
    ["¿Qué son las líneas de fuga?", "Las líneas que van desde los objetos hasta el punto de fuga."],
    ["¿Qué pintor pintaba el mismo paisaje a distintas horas?", "Claude Monet."],
    ["¿Qué tipo de paisaje es una vista del puerto con barcos?", "Una marina (o paisaje urbano si predomina la ciudad)."],
    ["¿Qué sensación da un horizonte muy bajo?", "Amplitud, mucho cielo, espacio abierto."],
    ["Explica en tres pasos cómo dibujar un camino en perspectiva.", "Trazar el horizonte, marcar el punto de fuga y unir con él los dos bordes del camino."],
  ],
  figura: ["El paisaje en profundidad", L.columnas("Claves de la perspectiva en el paisaje", [["altura de los ojos", "HORIZONTE", ["bajo, alto", "o a un tercio"], AG], ["distancias", "PLANOS", ["primer plano", "medio y fondo"], VE], ["el aire", "ATMÓSFERA", ["lejos: claro", "y azulado"], AZ], ["líneas", "PUNTO DE FUGA", ["las paralelas", "se juntan"], RO]])],
  video: "p4v",
  quiz: [
    ["La línea de horizonte está a la altura de…", ["los ojos de quien mira", "el suelo", "lo alto del papel"], "Altura de los ojos."],
    ["Lo más cercano está en el…", ["primer plano", "fondo", "plano medio"], "Primer plano."],
    ["En un dibujo, lo lejano se dibuja…", ["más pequeño", "más grande", "igual"], "Más pequeño."],
    ["Si un objeto tapa a otro, el que tapa está…", ["delante", "detrás", "a la misma distancia"], "Superposición."],
    ["Las montañas lejanas se pintan…", ["claras y azuladas", "rojas e intensas", "negras"], "Perspectiva atmosférica."],
    ["El punto donde se juntan las líneas paralelas es el…", ["punto de fuga", "módulo", "eje"], "Punto de fuga."],
    ["El punto de fuga está en…", ["la línea de horizonte", "el primer plano", "fuera del papel siempre"], "En el horizonte."],
    ["La perspectiva lineal se descubrió en el…", ["siglo XV", "siglo XX", "Prehistoria"], "Renacimiento italiano."],
    ["Un cuadro del mar y la costa es una…", ["marina", "naturaleza muerta", "retrato"], "Marina."],
    ["¿Qué pintor es famoso por sus estampas del Fuji?", ["Hokusai", "Sorolla", "Monet"], "Japonés."],
  ],
  examen: [
    ["En un punto de fuga, las líneas verticales de un edificio…", ["siguen verticales", "van al punto de fuga", "desaparecen"], "Siguen verticales."],
    ["Lo lejano se coloca en el papel…", ["más arriba, cerca del horizonte", "abajo del todo", "en el borde"], "Más arriba."],
    ["Un paisaje de calles y edificios es…", ["urbano", "rural", "una marina"], "Urbano."],
    ["El fondo se pinta con…", ["menos detalle", "más detalle", "contornos muy marcados"], "Menos detalle."],
  ],
  feynman: ["Qué es un paisaje y qué tipos hay", "Qué son la línea de horizonte y los planos del paisaje", "Qué trucos dan sensación de profundidad, incluida la perspectiva atmosférica", "Cómo funciona la perspectiva de un punto de fuga"],
  mapa: ["EL PAISAJE", VE, [["Horizonte", "a la altura de los ojos", AG], ["Planos", "primer plano · medio · fondo", VE], ["Atmosférica", "lejos: claro y azulado", AZ], ["Lineal", "punto y líneas de fuga", RO]], 240],
  tarjetas: [
    ["Paisaje", "Obra que representa un lugar."],
    ["Línea de horizonte", "Donde se unen cielo y tierra; altura de los ojos."],
    ["Primer plano", "Lo más cercano, grande y detallado."],
    ["Fondo", "Lo más lejano, pequeño y simple."],
    ["Superposición", "Lo de delante tapa lo de detrás."],
    ["Perspectiva atmosférica", "Lo lejano, claro y azulado."],
    ["Punto de fuga", "Donde se juntan las paralelas en el horizonte."],
    ["Líneas de fuga", "Las que van hacia el punto de fuga."],
  ],
  familias: ["Mirad juntos una carretera recta o unas vías y observad cómo parecen juntarse a lo lejos.", "Haced una foto de un paisaje y señalad en ella el primer plano, el plano medio y el fondo."],
  saberes: "El paisaje como género; el espacio y la profundidad: planos, superposición, perspectiva atmosférica y perspectiva lineal con un punto de fuga (Educación Artística)",
  ideas: ["Salida al patio o a la calle para dibujar del natural un pasillo o una calle en perspectiva.", "Collage de paisaje en tres planos con papeles superpuestos.", "Comparar paisajes de Sorolla, Monet y Antonio López."],
  fuentes: [["Museo del Prado: el paisaje", "https://www.museodelprado.es/coleccion"], ["Museo Sorolla", "https://www.culturaydeporte.gob.es/msorolla/inicio.html"]],
});

// ---------- Nivel libro (5º de Primaria) ----------
const { L: L5, H: H5, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 75,
  objetivos: ["Elegir el encuadre y el formato de un paisaje", "Dibujar objetos con perspectiva de dos puntos de fuga", "Conocer cómo se descubrió la perspectiva en el Renacimiento", "Comparar el paisaje occidental con el paisaje tradicional chino"],
  lectura: { titulo: "El espejo de Brunelleschi", html: `<p>Florencia, hace unos seiscientos años. Un arquitecto llamado Filippo Brunelleschi se colocó en la puerta de la catedral con un extraño invento en las manos: una tablilla de madera con un pequeño agujero en el centro y un espejo.</p><p>En la tablilla había pintado el baptisterio, el edificio de ocho lados que tenía justo enfrente. Pero lo había pintado de una manera nueva: las líneas de los tejados y las cornisas se acercaban unas a otras a medida que se alejaban, como ocurre cuando miramos de verdad.</p><p>Brunelleschi pedía a los curiosos que miraran por el agujero desde detrás de la tablilla. Lo que veían era el reflejo de su pintura en el espejo. Luego quitaba el espejo de golpe… ¡y aparecía el baptisterio real, exactamente igual, en el mismo lugar!</p><p>La gente no daba crédito. Aquella pintura parecía una ventana abierta a la realidad.</p><p>Brunelleschi había descubierto las reglas de la <b>perspectiva lineal</b>. Poco después, su amigo Leon Battista Alberti las explicó en un libro para que todos los pintores pudieran usarlas.</p><p>Desde entonces, los artistas saben cómo dibujar calles, edificios y paisajes que parecen tener profundidad. Hoy tú también puedes hacerlo con una regla, un lápiz y un punto de fuga.</p>` },
  tras: {
    "La línea de horizonte": [
      ["Encuadre y formato", `<p>Antes de empezar un paisaje, hay que decidir dos cosas: el <b>formato</b> del papel y el <b>encuadre</b>, es decir, qué parte del paisaje vamos a incluir.</p><p>El <b>formato</b> puede ser:</p><ul><li><b>Horizontal</b> o apaisado: más ancho que alto. Es el más usado en los paisajes, porque nuestra vista es más ancha que alta. Por eso, en las impresoras, la opción horizontal se llama «paisaje».</li><li><b>Vertical</b>: más alto que ancho. Va bien para árboles altos, cascadas, torres o calles estrechas. Las impresoras lo llaman «retrato».</li><li><b>Panorámico</b>: muy alargado. Sirve para cordilleras, playas o vistas de ciudades.</li></ul><p>Para elegir el <b>encuadre</b>, puedes hacer un <b>visor</b>: recorta un rectángulo en el centro de una cartulina y mira el paisaje a través de él. Acércalo o aléjalo de los ojos hasta encontrar la vista que más te guste.</p><p>Un consejo: no pongas la línea de horizonte justo en el centro. Colócala a un <b>tercio</b> de la altura, más arriba si quieres destacar el suelo o el mar, o más abajo si quieres destacar el cielo. La composición quedará más interesante.</p>`,
        L5.filas("Formatos", [["horizontal", "paisajes, playas", cAZ], ["vertical", "árboles, torres", cVE], ["panorámico", "cordilleras, ciudades", cNA]])],
    ],
    "La perspectiva lineal: el punto de fuga": [
      ["Perspectiva con dos puntos de fuga", `<p>La perspectiva de un punto de fuga sirve cuando miramos algo <b>de frente</b>: una calle, un pasillo o unas vías de tren. Pero si miramos un edificio <b>desde una esquina</b>, vemos dos de sus lados a la vez, y cada lado se aleja hacia un punto distinto. Entonces necesitamos <b>dos puntos de fuga</b>.</p><p>Así se dibuja una caja o una casa en perspectiva de dos puntos:</p><ol><li>Traza la <b>línea de horizonte</b> y marca un punto de fuga en cada extremo.</li><li>Dibuja una <b>línea vertical</b> entre los dos puntos: será la esquina más cercana del edificio.</li><li>Une los extremos de esa línea con los dos puntos de fuga.</li><li>Dibuja dos <b>verticales</b> más, una a cada lado, para marcar dónde acaba cada pared.</li><li>Une los extremos de esas verticales con el punto de fuga contrario para cerrar el tejado o la base.</li><li>Borra las líneas que sobran y añade puertas y ventanas, que también se dirigen hacia los puntos de fuga.</li></ol><p>Recuerda: las líneas verticales siempre siguen siendo verticales; solo las horizontales se dirigen hacia los puntos de fuga.</p><p>Con esta técnica puedes dibujar un barrio entero visto desde un cruce de calles.</p>`,
        H5.dos("Uno o dos puntos", ["Un punto", ["de frente", "calle, pasillo", "vías del tren"], cAZ], ["Dos puntos", ["desde la esquina", "casa, caja", "cruce de calles"], cRO]), ["IREoh0PkgTw", "Perspectiva de 2 puntos para artistas - Muy fácil", "Arte Divierte", 1009012]],
    ],
    "Grandes paisajistas": [
      ["El descubrimiento de la perspectiva", `<p>Durante la Edad Media, los pintores no buscaban que sus cuadros parecieran reales. Las figuras importantes se pintaban más grandes, aunque estuvieran lejos, y los edificios parecían de juguete. Lo importante era el mensaje, no la profundidad.</p><p>Todo cambió en Florencia, a principios del siglo XV, en el <b>Renacimiento</b>. El arquitecto <b>Filippo Brunelleschi</b> hizo hacia 1415 su famoso experimento con una tablilla y un espejo y demostró que las líneas paralelas que se alejan parecen juntarse en un punto. Había descubierto el <b>punto de fuga</b>.</p><p>En 1435, <b>Leon Battista Alberti</b> escribió el libro <i>De la pintura</i>, donde explicaba cómo construir la perspectiva paso a paso. Decía que un cuadro debía ser como una <b>ventana abierta</b> por la que miramos el mundo.</p><p>Muy pronto, pintores como <b>Masaccio</b>, <b>Piero della Francesca</b> o <b>Leonardo da Vinci</b> usaron la perspectiva para crear espacios muy realistas. En <i>La Última Cena</i> de Leonardo, todas las líneas del techo y las paredes se dirigen hacia la cabeza de Jesús, que está en el centro: así el punto de fuga guía nuestra mirada hacia lo más importante.</p><p>Cinco siglos después, los videojuegos en 3D siguen usando las mismas reglas.</p>`,
        L5.filas("Pioneros de la perspectiva", [["Brunelleschi", "experimento, 1415", cAZ], ["Alberti", "De la pintura, 1435", cVE], ["Leonardo", "La Última Cena", cRO]]), ["bkNMM8uiMww", "Linear Perspective: Brunelleschi's Experiment", "Smarthistory", 617793]],
    ],
  },
  final: [
    ["Pintar al aire libre", `<p>Hasta el siglo XIX, la mayoría de los paisajes se pintaban en el <b>taller</b>, a partir de bocetos tomados al aire libre. Pero en ese siglo ocurrieron dos cosas que lo cambiaron todo.</p><p>En 1841 se inventaron los <b>tubos de pintura</b> de metal, como los de la pasta de dientes. Antes, los pintores tenían que moler los pigmentos y guardar la pintura en vejigas de animal que se secaban enseguida. Con los tubos, podían llevarse los colores a cualquier sitio. También se popularizaron los <b>caballetes plegables</b>.</p><p>Así nació la pintura <b>al aire libre</b> (en francés, <i>en plein air</i>). Los <b>impresionistas</b>, como Claude Monet, salían al campo, a la orilla del río o a la playa para pintar la luz tal como la veían en ese momento. Tenían que pintar rápido, porque la luz cambia cada pocos minutos. En España, <b>Joaquín Sorolla</b> pintaba en la playa de Valencia, a pleno sol, con lienzos enormes sujetos contra el viento.</p><p>Si quieres probar, prepara un <b>cuaderno de campo</b>, unos lápices de colores o acuarelas y un taburete. Elige un lugar, observa durante unos minutos y pinta solo lo esencial. Anota la hora y el tiempo que hace: si vuelves otro día a otra hora, el paisaje será distinto.</p>`,
      H5.flujo("Pintar al aire libre", ["Elegir|lugar", "Observar", "Pintar|rápido", "Anotar|hora"], cVE)],
    ["El paisaje en la pintura china", `<p>En China, el paisaje fue durante siglos el género más importante de la pintura. Se llama <b>shan shui</b>, que significa «montaña y agua», porque esos son sus dos protagonistas.</p><p>Tiene características muy diferentes de la pintura occidental:</p><ul><li>Se pinta con <b>tinta negra</b> y pincel sobre papel o seda, a veces con toques suaves de color.</li><li>No usa un único punto de fuga. El espectador recorre el cuadro con la mirada como si <b>paseara</b> por las montañas, de abajo arriba.</li><li>Los formatos suelen ser <b>rollos</b> muy alargados: verticales, que se cuelgan, u horizontales, que se van desenrollando poco a poco.</li><li>Los <b>espacios vacíos</b> son muy importantes: representan la niebla, el cielo o el agua, y dejan respirar la obra.</li><li>Las figuras humanas son muy <b>pequeñas</b>: un pescador en una barca o un sabio en un puente, para mostrar que el ser humano es una parte diminuta de la naturaleza.</li></ul><p>Muchos cuadros incluyen también un <b>poema</b> escrito con caligrafía y el <b>sello rojo</b> del artista.</p><p>Prueba a pintar un paisaje con tinta china y un pincel, usando solo negros y grises y dejando mucho papel en blanco para la niebla.</p>`,
      H5.dos("Dos maneras de pintar paisaje", ["Occidental", ["punto de fuga", "óleo, color", "lienzo"], cAZ], ["Chino", ["mirada que pasea", "tinta y vacío", "rollo"], cMO]), ["Yr_ffhwztUE", "Hermosos paisajes en pintura de tinta china // Wan Shanhong", "Traditional Chinese Paintings", 48504]],
  ],
  ejemplos: [
    ["Quieres dibujar una cascada muy alta. ¿Qué formato eliges?", ["La cascada es más alta que ancha.", "Necesitamos espacio vertical."], "Formato vertical."],
    ["Dibujas una casa vista desde la esquina. ¿Cuántos puntos de fuga necesitas?", ["Se ven dos paredes a la vez.", "Cada pared se aleja hacia un lado distinto."], "Dos puntos de fuga."],
  ],
  errores: ["Poner la línea de horizonte justo en el centro del papel: la composición queda partida en dos.", "Inclinar las líneas verticales en la perspectiva de dos puntos: siempre siguen siendo verticales."],
  ejercicios: [
    ["b", "¿Cómo se llama el formato más ancho que alto?", "Horizontal o apaisado."],
    ["b", "¿Para qué sirve un visor de cartulina?", "Para elegir el encuadre."],
    ["b", "¿Cuántos puntos de fuga se usan para dibujar un edificio desde la esquina?", "Dos."],
    ["b", "¿Quién hizo el experimento del espejo?", "Filippo Brunelleschi."],
    ["b", "¿Qué significa «shan shui»?", "Montaña y agua."],
    ["m", "¿Por qué los tubos de pintura cambiaron la pintura de paisaje?", "Permitieron llevar los colores fuera del taller y pintar al aire libre."],
    ["m", "¿Hacia dónde se dirigen las líneas en La Última Cena de Leonardo?", "Hacia la cabeza de Jesús, en el centro."],
    ["m", "¿Qué representan los espacios vacíos en la pintura china?", "La niebla, el cielo o el agua."],
    ["m", "Dibuja una caja en perspectiva de dos puntos.", "Respuesta abierta."],
    ["m", "¿Dónde colocarías el horizonte para destacar un cielo de tormenta?", "Bajo, a un tercio de la altura desde abajo."],
    ["a", "Pinta el mismo lugar a dos horas distintas del día y compara.", "Respuesta abierta."],
    ["a", "Dibuja un cruce de calles de tu barrio con dos puntos de fuga.", "Respuesta abierta."],
    ["a", "Haz un paisaje con tinta en formato de rollo vertical.", "Respuesta abierta."],
    ["a", "Construye un visor y fotografía tres encuadres del patio.", "Respuesta abierta."],
  ],
  quiz: [
    ["Las impresoras llaman «paisaje» al formato…", ["horizontal", "vertical", "cuadrado"], "Apaisado."],
    ["En la perspectiva de dos puntos, las verticales…", ["siguen verticales", "van al punto de fuga", "se curvan"], "No cambian."],
    ["Alberti escribió…", ["De la pintura", "La Última Cena", "El Quijote"], "1435."],
    ["Pintar al aire libre se llama en francés…", ["en plein air", "trompe l'oeil", "collage"], "Impresionistas."],
    ["La pintura china de paisaje se pinta con…", ["tinta y pincel", "óleo y espátula", "espray"], "Shan shui."],
  ],
  examen: [
    ["Los tubos de pintura se inventaron en…", ["1841", "1441", "1941"], "Siglo XIX."],
    ["En el shan shui, las figuras humanas son…", ["muy pequeñas", "enormes", "inexistentes siempre"], "Parte de la naturaleza."],
  ],
  tarjetas: [
    ["Formato y encuadre", "Horizontal, vertical, panorámico; horizonte a un tercio."],
    ["Dos puntos de fuga", "Para ver desde la esquina; las verticales no cambian."],
    ["Renacimiento", "Brunelleschi (espejo), Alberti (libro), Leonardo."],
    ["Shan shui", "Montaña y agua: tinta, vacío, rollos, figuras pequeñas."],
  ],
  glosario: [
    ["Formato", "Forma y orientación del soporte."],
    ["Encuadre", "Parte de la realidad que se incluye en la imagen."],
    ["Visor", "Cartulina con un hueco para elegir el encuadre."],
    ["Panorámico", "Formato muy alargado."],
    ["Punto de fuga", "Punto donde parecen juntarse las líneas que se alejan."],
    ["Perspectiva lineal", "Sistema para representar la profundidad con líneas."],
    ["Baptisterio", "Edificio donde se bautizaba, junto a una catedral."],
    ["En plein air", "Pintura hecha al aire libre."],
    ["Cuaderno de campo", "Libreta para dibujar y anotar fuera de casa."],
    ["Shan shui", "Pintura china de paisaje: montaña y agua."],
    ["Rollo", "Pintura alargada que se enrolla para guardarla."],
    ["Caballete", "Soporte para sujetar el cuadro mientras se pinta."],
  ],
  situacion: {
    titulo: "Paisajes de mi barrio",
    reto: "La clase hace una exposición de paisajes del barrio usando diferentes formatos, perspectivas y técnicas.",
    pasos: ["Salid a la calle con un visor y elegid encuadres: una calle de frente, una esquina y una vista amplia.", "Dibujad la calle con un punto de fuga y la esquina con dos puntos de fuga.", "Pintad la vista amplia al aire libre o en estilo de tinta china, en formato de rollo.", "Montad la exposición con una cartela que explique el formato y la técnica de cada obra."],
    producto: "Una exposición de paisajes del barrio con cartelas.",
    evaluacion: ["Elige formato y encuadre con intención.", "Aplica la perspectiva de uno y dos puntos.", "Explica el origen renacentista de la perspectiva.", "Compara la pintura occidental y la china."],
  },
});
