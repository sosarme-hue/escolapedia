// Educación Física 6º de Primaria: actividades en la naturaleza. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, barras, fichas, ciclo, vid, vgen, RD, PROF, nino, suelo, arbol, sol, nube } = require("./_pri6b");

// Brújula sencilla con la aguja apuntando al norte.
function brujula(cx, cy, r = 40) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="${r - 8}" fill="none" stroke="var(--line)"/><path d="M${cx} ${cy - r + 10} L${cx + 7} ${cy} L${cx - 7} ${cy} Z" fill="var(--red)"/><path d="M${cx} ${cy + r - 10} L${cx + 7} ${cy} L${cx - 7} ${cy} Z" fill="#94a3b8"/><circle cx="${cx}" cy="${cy}" r="3" fill="var(--ink)"/>${t(cx, cy - r - 4, "N", { size: 12, color: COL.rojo })}${t(cx, cy + r + 13, "S", { size: 12 })}${t(cx + r + 9, cy + 4, "E", { size: 12 })}${t(cx - r - 9, cy + 4, "O", { size: 12 })}`;
}

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Actividades en la naturaleza",
  minutos: 50,
  objetivos: ["Conocer actividades físicas que se practican en el medio natural", "Orientarse con el sol, la brújula y un mapa sencillo", "Participar en una carrera de orientación", "Preparar una excursión con seguridad", "Respetar y cuidar el medio natural"],
  claves: ["medio natural", "senderismo", "orientación", "puntos cardinales", "brújula", "mapa", "leyenda", "baliza", "carrera de orientación", "acampada", "señales de sendero", "no dejar rastro"],
  pregunta: {
    texto: "Vas de excursión con tu clase por el monte y te separas un momento del grupo. No hay cobertura en el móvil. ¿Qué harías para orientarte y que te encuentren?",
    respuesta: "Lo primero es <b>no seguir andando sin rumbo</b>: quédate en un lugar visible, junto al camino, y haz ruido (un silbato es ideal). Si sabes <mark>orientarte</mark>, puedes usar el sol, una brújula o las señales del sendero para volver. Por eso, antes de cualquier salida a la naturaleza hay que aprender a orientarse y conocer unas normas básicas de seguridad.",
  },
  bloques: [
    {
      html: `<h3>La actividad física en la naturaleza</h3><p>Las <mark>actividades en el medio natural</mark> son las que se practican al aire libre, en lugares como el monte, el bosque, la playa, los ríos o la nieve. Tienen muchas ventajas:</p><p>• Son muy buenas para la <b>salud</b>: se camina, se trepa, se nada, se respira aire limpio.<br>• Ayudan a <b>relajarse</b> y a reducir el estrés.<br>• Permiten <b>conocer y valorar</b> la naturaleza.<br>• Se hacen en <b>grupo</b>, y fomentan la cooperación y la convivencia.<br>• Desarrollan la <b>autonomía</b>: aprendes a organizarte, orientarte y resolver problemas.</p><p>Algunas actividades que se pueden practicar:</p><p>• En tierra: <b>senderismo</b>, <b>orientación</b>, escalada en rocódromo, ciclismo de montaña, acampada.<br>• En el agua: <b>piragüismo</b>, vela, surf, natación en aguas abiertas.<br>• En la nieve: <b>esquí</b>, raquetas de nieve.<br>• En el aire: tirolinas o parapente (estas, solo para adultos o con monitores).</p><p>Muchas de estas actividades se pueden adaptar al <b>entorno del colegio</b>: el patio, un parque cercano o el propio gimnasio pueden servir para aprender a orientarse o a montar una tienda de campaña.</p>`,
      svg: svg("Actividades en la naturaleza en tierra, agua y nieve", `${tit("Al aire libre")}${sol(220, 52, 13)}${nube(60, 50, 0.8)}<path d="M10 150 L70 80 L110 120 L150 70 L210 150 Z" fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2"/><path d="M138 84 L150 70 L162 84 Z" fill="#fff"/>${arbol(40, 150, 0.7)}${arbol(196, 150, 0.7)}<path d="M200 150 Q225 140 250 150 V160 H200 Z" fill="var(--water)" fill-opacity=".6"/>${nino(96, 150, { pose: "pie", s: 0.65 })}${tx(130, 172, "senderismo · orientación · piragüismo · nieve", 240)}`),
    },
    {
      html: `<h3>El senderismo</h3><p>El <mark>senderismo</mark> consiste en recorrer caminos y senderos a pie. Es la actividad más sencilla y accesible para disfrutar de la naturaleza. En España hay miles de kilómetros de senderos señalizados con marcas de pintura en árboles y rocas:</p><p>• <b>GR</b> (Gran Recorrido): más de 50 km, varios días. Marcas <b>blanca y roja</b>.<br>• <b>PR</b> (Pequeño Recorrido): entre 10 y 50 km, una jornada. Marcas <b>blanca y amarilla</b>.<br>• <b>SL</b> (Sendero Local): menos de 10 km. Marcas <b>blanca y verde</b>.</p><p>Las marcas indican:</p><p>• Dos rayas paralelas: <b>continuidad</b>, vas por buen camino.<br>• Dos rayas que forman un ángulo: <b>cambio de dirección</b>.<br>• Un aspa (X): <b>dirección equivocada</b>, por aquí no.</p><p>Para caminar bien por el monte: ve a un ritmo que te permita hablar, sube con pasos cortos y baja con cuidado, flexionando un poco las rodillas; en grupo, el más lento va delante para marcar el ritmo y alguien con experiencia cierra el grupo. Haz paradas cortas para beber y comer algo.</p>`,
      svg: svg("Señales de sendero: continuidad, cambio de dirección y dirección equivocada", `${tit("Señales del sendero (PR)")}${[["sigue", 46, "par"], ["gira", 130, "giro"], ["por aquí no", 214, "x"]].map(([s, x, k]) => {
        const marca = k === "par" ? `<rect x="${x - 18}" y="60" width="36" height="9" fill="#fff" stroke="var(--line)"/><rect x="${x - 18}" y="72" width="36" height="9" fill="#eab308"/>` : k === "giro" ? `<path d="M${x - 16} 82 L${x + 8} 82 L${x + 8} 60" stroke="#fff" stroke-width="9" fill="none"/><path d="M${x - 16} 94 L${x + 20} 94 L${x + 20} 60" stroke="#eab308" stroke-width="9" fill="none"/>` : `<path d="M${x - 16} 58 L${x + 16} 92" stroke="#fff" stroke-width="9"/><path d="M${x + 16} 58 L${x - 16} 92" stroke="#eab308" stroke-width="9"/>`;
        return `<rect x="${x - 34}" y="44" width="68" height="64" rx="8" fill="#a8a29e" fill-opacity=".45"/>${marca}${tx(x, 128, s, 82, { weight: 700 })}`;
      }).join("")}${tx(130, 166, "GR blanca-roja · PR blanca-amarilla · SL blanca-verde", 240)}`),
    },
    {
      html: `<h3>Orientarse con el sol</h3><p><mark>Orientarse</mark> es saber dónde estás y hacia dónde tienes que ir. Para ello se usan los <b>puntos cardinales</b>: <b>norte</b> (N), <b>sur</b> (S), <b>este</b> (E) y <b>oeste</b> (O).</p><p>La forma más antigua de orientarse es con el <b>sol</b>:</p><p>• El sol sale aproximadamente por el <b>este</b> y se pone por el <b>oeste</b>.<br>• A mediodía, en España, el sol está hacia el <b>sur</b>.</p><p>Un truco: por la mañana, colócate con el brazo derecho señalando hacia donde sale el sol (el este). Entonces tendrás delante el <b>norte</b>, detrás el <b>sur</b> y a tu izquierda el <b>oeste</b>.</p><p>También puedes usar la <b>sombra</b>: clava un palo en el suelo y marca el extremo de su sombra; espera unos 15 minutos y marca otra vez. La línea que une la primera marca con la segunda va, aproximadamente, de oeste a este.</p><p>Por la noche, en el hemisferio norte, la <b>Estrella Polar</b> señala el norte. Se encuentra prolongando cinco veces la distancia entre las dos estrellas de la parte delantera del «carro» de la Osa Mayor.</p><p>Cuidado: el musgo en los árboles <b>no</b> es un método fiable. Crece donde hay humedad y sombra, y eso depende de muchas cosas.</p>`,
      svg: svg("Orientarse con el sol: con el brazo derecho hacia el este, delante queda el norte", `${tit("Orientarse con el sol")}${sol(222, 98, 14)}${nino(130, 150, { pose: "brazos", s: 1.1 })}${t(130, 50, "N (delante)", { size: 12, color: COL.rojo })}${t(196, 132, "E", { size: 13, color: COL.naranja })}${t(64, 132, "O", { size: 13 })}${tx(130, 170, "el sol sale por el este", 200, { weight: 700, color: COL.naranja })}`),
    },
    {
      html: `<h3>La brújula</h3><p>La <mark>brújula</mark> es un instrumento que sirve para orientarse. Tiene una <b>aguja imantada</b> que siempre señala hacia el <b>norte magnético</b> de la Tierra, porque la Tierra se comporta como un gran imán. Fue inventada en China hace casi mil años y permitió a los navegantes cruzar los océanos.</p><p>Partes de una brújula de orientación:</p><p>• La <b>aguja</b>: su punta roja (o fosforescente) señala el norte.<br>• El <b>limbo</b>: la rueda que gira, con los puntos cardinales y los grados de 0 a 360.<br>• La <b>flecha de dirección</b>: indica hacia dónde caminar.<br>• La <b>base</b> transparente, con una regla para medir en el mapa.</p><p>Cómo usarla:</p><p>1. Coloca la brújula plana sobre la palma de la mano, lejos de objetos metálicos o imanes (también del móvil).<br>2. Espera a que la aguja se quede quieta.<br>3. Gira tu cuerpo hasta que la punta roja coincida con la N del limbo.<br>4. Ahora ya sabes dónde está cada punto cardinal.</p><p>En una brújula, los grados indican direcciones: el norte es 0°, el este 90°, el sur 180° y el oeste 270°.</p>`,
      svg: svg("Brújula con la aguja roja hacia el norte y los grados de cada punto cardinal", `${tit("La brújula")}${brujula(84, 104, 44)}${filas([["N", "0°", COL.rojo], ["E", "90°", COL.naranja], ["S", "180°", COL.gris], ["O", "270°", COL.azul]], 62, 26, { x: 168, wa: 22, wb: 50 })}`),
    },
    {
      html: `<h3>Leer un mapa</h3><p>Un <mark>mapa</mark> es una representación reducida y vista desde arriba de un territorio. Para orientarse con él hay que conocer sus elementos:</p><p>• El <b>norte</b>: normalmente está en la parte de arriba del mapa, indicado con una flecha.<br>• La <b>escala</b>: indica cuántas veces se ha reducido la realidad. Por ejemplo, en una escala 1:10.000, un centímetro del mapa son 10.000 cm en la realidad, es decir, 100 metros.<br>• La <b>leyenda</b>: explica qué significa cada símbolo y color. En los mapas de orientación, por ejemplo, el <b>verde</b> indica vegetación espesa, el <b>blanco</b> bosque fácil de atravesar, el <b>amarillo</b> zonas abiertas, el <b>azul</b> agua y el <b>marrón</b> el relieve.<br>• Las <b>curvas de nivel</b>: líneas que unen puntos a la misma altura. Si están muy juntas, la pendiente es fuerte.</p><p>Para usar un mapa hay que <b>orientarlo</b>: girarlo hasta que su norte coincida con el norte real (con ayuda de la brújula o de elementos que reconozcas, como un camino o un edificio). Así, lo que tienes a la derecha en el mapa estará también a tu derecha en la realidad.</p><p>Una buena forma de empezar es hacer el <b>plano del colegio</b> o del patio y usarlo para encontrar objetos escondidos.</p>`,
      svg: svg("Elementos de un mapa: norte, escala, leyenda y curvas de nivel", `${tit("Elementos del mapa")}<rect x="12" y="34" width="132" height="128" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="20" y="42" width="60" height="44" fill="var(--leaf)" fill-opacity=".35"/><path d="M90 150 Q100 110 136 100" stroke="var(--water)" stroke-width="4" fill="none"/><path d="M24 150 L70 90 L120 60" stroke="#a16207" stroke-width="2.5" stroke-dasharray="6 3" fill="none"/>${[18, 26, 34].map((r) => `<ellipse cx="104" cy="66" rx="${r}" ry="${r * 0.6}" fill="none" stroke="#a16207" stroke-opacity=".6"/>`).join("")}${fl(130, 154, 130, 126, "var(--red)", 2)}${t(130, 120, "N", { size: 10, color: COL.rojo })}${filas([["norte", "flecha", COL.rojo], ["escala", "1:10.000", COL.gris], ["leyenda", "símbolos", COL.verde], ["curvas", "relieve", COL.marron]], 52, 32, { x: 158, wa: 60, wb: 80, dos: true })}`),
    },
    {
      html: `<h3>La carrera de orientación</h3><p>La <mark>carrera de orientación</mark> es un deporte en el que hay que recorrer un terreno, normalmente un bosque o un parque, pasando por una serie de puntos de control en el orden marcado y en el menor tiempo posible, usando solo un <b>mapa</b> y una <b>brújula</b>.</p><p>Los puntos de control están señalizados con <b>balizas</b>: unos prismas de tela con los colores <b>blanco y naranja</b>. En cada baliza hay una <b>pinza</b> con una forma de picar diferente o un sistema electrónico, para demostrar que has pasado por ella. En el colegio se pueden usar pegatinas, letras o palabras escondidas.</p><p>Se dice que es el deporte de la «mente y las piernas», porque no gana necesariamente el que corre más, sino el que mejor <b>elige su ruta</b> y no se equivoca.</p><p>Consejos:</p><p>• Mantén siempre el mapa <b>orientado</b> y sigue con el dedo por dónde vas.<br>• Antes de salir hacia la siguiente baliza, <b>planifica la ruta</b>: ¿es mejor ir recto o rodear por el camino?<br>• Busca <b>puntos de referencia</b> fáciles de reconocer: un cruce, una fuente, un edificio.<br>• Si te pierdes, vuelve al último punto que reconozcas con seguridad.</p>`,
      svg: svg("Carrera de orientación: mapa, brújula y balizas blancas y naranjas", `${tit("Carrera de orientación")}<path d="M40 70 H70 L55 110 Z" fill="#fff" stroke="var(--line)"/><path d="M40 70 L70 70 L40 110 Z" fill="#f97316"/><path d="M55 110 V150" stroke="var(--ink)" stroke-width="2"/>${et(55, 166, "baliza", 70, { size: 11, color: COL.naranja })}${columna([["1. orienta el mapa", COL.azul], ["2. planifica la ruta", COL.verde], ["3. busca referencias", COL.morado]], 170, 150, 46, 26, 12)}`),
      video: vid("HkeoWFjgIWg"),
    },
    {
      html: `<h3>Preparar una excursión</h3><p>Una buena excursión empieza en casa, con una buena <mark>preparación</mark>:</p><p>• <b>Informarse</b> de la ruta: distancia, desnivel, duración y dificultad. Que sea adecuada para todo el grupo.<br>• Consultar la <b>previsión del tiempo</b>. Si se anuncian tormentas o mucho calor, mejor dejarla para otro día.<br>• Avisar a alguien de <b>adónde vais</b> y cuándo pensáis volver.</p><p>En la <b>mochila</b> no debe faltar:</p><p>• <b>Agua</b> suficiente (al menos un litro por persona) y comida energética: bocadillo, fruta, frutos secos.<br>• Ropa de abrigo y chubasquero, aunque haga buen tiempo al salir: en el monte el tiempo cambia rápido. Mejor varias capas finas que una muy gruesa.<br>• Gorra, gafas de sol y crema solar.<br>• Un pequeño botiquín.<br>• Mapa, brújula, silbato y teléfono con batería.<br>• Una bolsa para la basura.</p><p>Usa <b>calzado</b> cómodo y ya usado, con buena suela, nunca estrenado ese día, y calcetines gruesos para evitar rozaduras.</p><p>Coloca lo más pesado de la mochila pegado a la espalda y ajusta bien las correas.</p>`,
      svg: svg("Qué llevar en la mochila de excursión", `${tit("La mochila")}${fichas([["Agua", "1 litro o más", COL.agua], ["Comida", "bocadillo, fruta", COL.verde], ["Ropa", "capas y chubasquero", COL.azul], ["Sol", "gorra y crema", COL.sol], ["Botiquín", "tiritas, gasas", COL.rojo], ["Orientación", "mapa, brújula, silbato", COL.morado]], 2, 34)}`),
    },
    {
      html: `<h3>Seguridad en la naturaleza</h3><p>En el medio natural hay que extremar las <mark>precauciones</mark>:</p><p>• <b>No te separes</b> nunca del grupo y respeta las indicaciones de los adultos.<br>• <b>No salgas de los senderos</b> señalizados.<br>• Si te pierdes: <b>para</b>, quédate en un lugar visible y seguro, y usa el <b>silbato</b> (tres pitidos seguidos es la señal de auxilio).<br>• No bebas agua de ríos o fuentes que no sepas que es potable.<br>• No toques ni comas plantas, setas o frutos que no conozcas.<br>• No te bañes en ríos o lagos sin permiso y vigilancia: el agua puede estar muy fría o tener corrientes.<br>• Si hay <b>tormenta</b>, aléjate de árboles aislados, cumbres y objetos metálicos.<br>• Protégete del <b>sol</b> y bebe a menudo para evitar golpes de calor.<br>• Si ves un animal salvaje, no te acerques ni le des comida.</p><p>En caso de emergencia, el número de teléfono es el <b>112</b>, que funciona en toda la Unión Europea, gratis y aunque no tengas saldo. Hay que decir qué ha pasado, dónde estáis (con la ayuda de puntos de referencia o la ubicación del móvil) y cuántas personas necesitan ayuda.</p>`,
      svg: svg("Si te pierdes: para, quédate visible, usa el silbato y llama al 112", `${tit("Si te pierdes…")}${columna([["PARA: no sigas sin rumbo", COL.rojo], ["quédate en un sitio visible", COL.naranja], ["silbato: 3 pitidos", COL.azul], ["emergencias: 112", COL.verde]], 130, 220, 34, 24, 12)}`),
    },
    {
      html: `<h3>Cuidar la naturaleza</h3><p>Cuando vamos a la naturaleza somos <b>invitados</b> en la casa de muchos seres vivos. Por eso hay que seguir la regla de <mark>«no dejar rastro»</mark>: que el lugar quede igual o mejor que como lo encontramos.</p><p>• <b>Llévate tu basura</b> de vuelta a casa, también los restos orgánicos como las cáscaras de fruta, que tardan mucho en descomponerse y atraen animales.<br>• No hagas <b>ruido</b> innecesario: molesta a los animales y a otras personas.<br>• No arranques plantas ni flores ni cojas piedras o nidos.<br>• No hagas <b>fuego</b>: está prohibido en el monte casi todo el año, y una chispa puede provocar un incendio forestal.<br>• Camina por los senderos para no pisar la vegetación ni provocar erosión.<br>• Observa a los animales desde lejos, sin tocarlos ni darles comida.<br>• Respeta las normas de los <b>espacios naturales protegidos</b>: parques nacionales, parques naturales, reservas.</p><p>España tiene <b>16 parques nacionales</b>, como el Teide, Doñana, Picos de Europa, Ordesa y Monte Perdido o la Sierra de Guadarrama. Son lugares de enorme valor que debemos conservar para las generaciones futuras.</p>`,
      svg: svg("No dejar rastro: llevarse la basura, no hacer fuego, no arrancar plantas, no hacer ruido", `${tit("No dejar rastro")}${filas([["basura", "a casa, toda", COL.gris], ["fuego", "nunca en el monte", COL.rojo], ["plantas", "no se arrancan", COL.verde], ["animales", "mirar de lejos", COL.marron], ["ruido", "el mínimo", COL.morado]], 50, 25, { wa: 70, wb: 140 })}`),
    },
  ],
  figura: {
    titulo: "Actividades en la naturaleza en ocho ideas",
    svg: rejilla([
      ["Senderismo", "GR · PR · SL", COL.verde],
      ["Puntos cardinales", "N · S · E · O", COL.rojo],
      ["Sol", "sale por el este", COL.sol],
      ["Brújula", "la aguja al norte", COL.azul],
      ["Mapa", "escala y leyenda", "#0e7490"],
      ["Orientación", "balizas", COL.naranja],
      ["Seguridad", "silbato y 112", COL.morado],
      ["No dejar rastro", "cuidar el entorno", COL.marron],
    ], 4, 86, "Resumen de actividades en la naturaleza"),
  },
  video: vgen("j_fKjJUnv-Q", "orientación con brújula y sol para niños"),
  ejemplos: [
    { enunciado: "En un mapa a escala 1:10.000, entre dos balizas hay 3 cm. ¿Qué distancia real hay?",
      pasos: ["1 cm del mapa = 10.000 cm = 100 m.", "3 cm = 3 × 100 m = 300 m."],
      resultado: "300 metros." },
    { enunciado: "Son las 9 de la mañana y el sol está a tu derecha. ¿Hacia dónde miras?",
      pasos: ["Por la mañana el sol está hacia el este.", "Si el este está a tu derecha, delante tienes el norte."],
      resultado: "Miras hacia el norte." },
    { enunciado: "En un sendero ves dos rayas blanca y amarilla formando un ángulo. ¿Qué significa?",
      pasos: ["Blanco y amarillo: PR, pequeño recorrido.", "Rayas en ángulo: cambio de dirección."],
      resultado: "Que el PR cambia de dirección: hay que girar." },
  ],
  errores: [
    "Fiarse del musgo de los árboles para encontrar el norte.",
    "Usar la brújula junto al móvil o un objeto metálico.",
    "Seguir andando sin rumbo cuando te has perdido.",
    "Dejar las cáscaras de fruta en el monte porque «son naturales».",
    "Estrenar las botas el día de la excursión.",
  ],
  ejercicios: [
    { q: "Escribe tres ventajas de hacer actividad física en la naturaleza.", sol: "Mejora la salud, relaja y ayuda a conocer y valorar la naturaleza (también la cooperación)." },
    { q: "¿Qué colores marcan un GR, un PR y un SL?", sol: "GR: blanco y rojo. PR: blanco y amarillo. SL: blanco y verde." },
    { q: "¿Qué significa un aspa en las marcas de un sendero?", sol: "Dirección equivocada." },
    { q: "Explica cómo orientarte con el sol por la mañana.", sol: "Señala con el brazo derecho hacia donde sale el sol (este); delante tendrás el norte." },
    { q: "¿Qué indica la punta roja de la aguja de una brújula? ¿Por qué?", sol: "El norte magnético, porque la aguja está imantada y la Tierra actúa como un imán." },
    { q: "¿Cuántos grados corresponden al este y al sur en la brújula?", sol: "Este: 90°. Sur: 180°." },
    { q: "¿Qué es la escala de un mapa? ¿Y la leyenda?", sol: "La escala indica cuánto se ha reducido la realidad; la leyenda explica los símbolos." },
    { q: "¿Qué es una baliza y de qué colores es?", sol: "La señal que marca un punto de control en orientación; blanca y naranja." },
    { q: "Escribe seis cosas que llevar en la mochila de una excursión.", sol: "Agua, comida, ropa de abrigo, crema solar, botiquín, mapa y silbato." },
    { q: "Escribe cuatro normas para no dejar rastro.", sol: "Llevarse la basura, no hacer fuego, no arrancar plantas, no hacer ruido." },
  ],
  quiz: [
    { q: "El sol sale aproximadamente por el…", o: ["norte", "este", "oeste"], a: 1, e: "Por el este." },
    { q: "A mediodía, en España, el sol está hacia el…", o: ["norte", "sur", "oeste"], a: 1, e: "Hacia el sur." },
    { q: "La aguja de la brújula señala el…", o: ["norte", "sol", "este"], a: 0, e: "El norte magnético." },
    { q: "El oeste en la brújula son…", o: ["180°", "90°", "270°"], a: 2, e: "270°." },
    { q: "Las marcas de un PR son…", o: ["blanca y verde", "blanca y amarilla", "blanca y roja"], a: 1, e: "Blanca y amarilla." },
    { q: "Lo que explica los símbolos de un mapa es la…", o: ["brújula", "escala", "leyenda"], a: 2, e: "La leyenda." },
    { q: "Las balizas de orientación son…", o: ["blancas y naranjas", "verdes", "rojas y negras"], a: 0, e: "Blancas y naranjas." },
    { q: "Si te pierdes, lo primero es…", o: ["separarte más", "parar y quedarte visible", "correr"], a: 1, e: "Parar y quedarte en un sitio visible." },
    { q: "El teléfono de emergencias es el…", o: ["010", "112", "091"], a: 1, e: "El 112." },
    { q: "En el monte, hacer fuego…", o: ["está bien si hace frío", "es obligatorio", "está prohibido casi siempre"], a: 2, e: "Riesgo de incendio." },
  ],
  examen: [
    { q: "La Estrella Polar señala el…", o: ["sur", "norte", "este"], a: 1, e: "El norte." },
    { q: "Curvas de nivel muy juntas indican…", o: ["pendiente fuerte", "un río", "terreno llano"], a: 0, e: "Mucha pendiente." },
    { q: "Tres pitidos seguidos de silbato significan…", o: ["auxilio", "comida", "llegada"], a: 0, e: "Señal de auxilio." },
    { q: "España tiene…", o: ["16 parques nacionales", "2 parques nacionales", "100 parques nacionales"], a: 0, e: "16." },
  ],
  feynman: ["Cómo orientarte con el sol y con una brújula", "Qué es una carrera de orientación y cómo se juega", "Qué significa «no dejar rastro» y cómo lo cumples"],
  mapa: mapa("NATURALEZA", "var(--pri)", [
    ["Actividades", "senderismo · orientación · agua", COL.verde],
    ["Orientarse", "sol · brújula · mapa", COL.azul],
    ["Seguridad", "mochila · silbato · 112", COL.rojo],
    ["Respeto", "no dejar rastro", COL.marron],
  ], 260),
  tarjetas: [
    ["Senderismo", "Recorrer caminos y senderos a pie."],
    ["Puntos cardinales", "Norte, sur, este y oeste."],
    ["Brújula", "Instrumento con una aguja imantada que señala el norte."],
    ["Escala", "Relación entre el tamaño del mapa y la realidad."],
    ["Leyenda", "Explicación de los símbolos de un mapa."],
    ["Baliza", "Señal blanca y naranja de un punto de control."],
    ["112", "Teléfono de emergencias en toda la Unión Europea."],
    ["No dejar rastro", "Dejar el lugar igual o mejor que como estaba."],
  ],
  familias: ["Haced juntos el plano de vuestra casa o del barrio con su leyenda.", "Salid a caminar por un sendero señalizado y buscad las marcas.", "Practicad a orientaros con el sol a distintas horas del día.", "Preparad juntos la mochila de una excursión con la lista del tema."],
  profesores: PROF("Educación Física: actividades físicas en el medio natural; técnicas básicas de orientación con el sol, la brújula y el mapa; carreras de orientación en el centro y su entorno; planificación y seguridad en salidas; respeto y conservación del medio", ["Plano del centro y carrera de orientación por el patio con balizas de papel.", "Gymkana de senderismo con marcas PR pintadas en el patio.", "Salida a un parque cercano con plan de mochila elaborado por grupos."]),
  fuentes: [RD, { t: "Federación Española de Deportes de Montaña y Escalada: senderos", url: "https://www.fedme.es/" }, { t: "Federación Española de Orientación", url: "https://www.fedo.org/" }, wiki("Carrera de orientación", "Carrera_de_orientación")],
  revisado: REV,
};

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Orientarse de noche con la estrella polar", "Practicar con seguridad actividades en el agua y en la nieve", "Conocer la escalada y sus normas de seguridad", "Respetar los espacios naturales protegidos"],
  lectura: { titulo: "La noche en el refugio", html: `<p>Era la primera excursión de dos días de la clase de sexto. Después de cinco horas de senderismo por la montaña, llegaron al refugio cuando empezaba a anochecer. Estaban cansados, pero felices.</p><p>Después de cenar, la monitora, Elena, los sacó a todos fuera. Apagaron las linternas y, poco a poco, sus ojos se acostumbraron a la oscuridad. Entonces lo vieron: el cielo estaba lleno de estrellas, muchas más de las que habían visto nunca en la ciudad. Se veía incluso la Vía Láctea, como una nube blanca que cruzaba el cielo.</p><p>—¿Sabéis encontrar el norte sin brújula? —preguntó Elena.</p><p>Nadie sabía. Ella les enseñó a buscar el Carro, la figura de siete estrellas de la Osa Mayor. Luego les dijo que prolongaran cinco veces la distancia entre las dos estrellas de la parte trasera.</p><p>—Esa estrella, la que no es muy brillante pero está sola, es la estrella polar. Siempre señala el norte.</p><p>Iker, que nunca había salido de la ciudad, se quedó mirándola un rato largo.</p><p>—Entonces, si me perdiera de noche, podría saber hacia dónde ir.</p><p>—Exacto —sonrió Elena—. Pero lo mejor es no perderse: no os separéis nunca del grupo.</p>` },
  tras: {
    "La brújula": [
      ["Orientarse de noche: la estrella polar", `<p>En el hemisferio norte, donde está España, hay una estrella que sirve para orientarse de noche: la <b>estrella polar</b>. Está casi exactamente encima del polo norte de la Tierra, así que, mientras el resto de estrellas parecen girar durante la noche, ella se queda <b>casi quieta</b>. Si miras hacia ella, estás mirando al <b>norte</b>.</p><p>Para encontrarla:</p><ol><li>Busca la constelación de la <b>Osa Mayor</b>, en concreto el <b>Carro</b>: siete estrellas brillantes con forma de cazo o de carro.</li><li>Fíjate en las dos estrellas de la parte trasera del «cazo».</li><li>Imagina una línea que las une y prolóngala unas <b>cinco veces</b> esa distancia.</li><li>Llegarás a una estrella no muy brillante y bastante sola: es la <b>estrella polar</b>, que es además el extremo de la cola de la Osa Menor.</li></ol><p>Una vez sabes dónde está el norte, a tu espalda queda el sur, a tu derecha el este y a tu izquierda el oeste.</p><p>Para ver bien las estrellas, aléjate de las luces de las ciudades. La <b>contaminación lumínica</b> hace que en muchas ciudades solo se vean unas pocas estrellas.</p>`,
        H6.flujo("Encontrar el norte", ["busca|el Carro", "dos estrellas|traseras", "prolonga|×5", "estrella|polar = N"], cAZ), ["-QURWUxWkf8", "Localizando la Estrella Polar | Museo de la Ciencia CosmoCaixa", "Fundación \"la Caixa\"", 107093]],
    ],
    "Seguridad en la naturaleza": [
      ["En el agua y en la nieve", `<p>El agua y la nieve son lugares estupendos para hacer actividad física, pero tienen sus propios riesgos.</p><p><b>En el agua</b> (playa, río, lago, piscina):</p><ul><li>Báñate siempre en <b>zonas vigiladas</b> y con un adulto cerca. Nunca te bañes solo.</li><li>En la playa, fíjate en las <b>banderas</b>: <b>verde</b>, baño permitido; <b>amarilla</b>, precaución; <b>roja</b>, prohibido bañarse.</li><li>No te tires de cabeza en lugares donde no conoces la profundidad.</li><li>En ríos y lagos, cuidado con las corrientes, las rocas resbaladizas y el agua muy fría.</li><li>Si te arrastra una corriente, no nades contra ella: nada en paralelo a la orilla y pide ayuda levantando el brazo.</li><li>En kayak, piragua o vela, lleva siempre <b>chaleco salvavidas</b>.</li></ul><p><b>En la nieve</b> (esquí, raquetas, trineo):</p><ul><li>Usa <b>casco</b>, gafas de sol o de ventisca y protección solar: la nieve refleja mucho el sol.</li><li>Abrígate por <b>capas</b> y protege manos, pies y orejas.</li><li>Esquía por las pistas de tu nivel y respeta las señales.</li><li>No salgas de las zonas señalizadas: hay riesgo de <b>aludes</b>.</li></ul>`,
        L6.filas("Banderas de playa", [["verde", "baño permitido", cVE], ["amarilla", "precaución", cNA], ["roja", "prohibido", cRO], ["en la nieve", "casco y capas", cAZ]])],
    ],
    "Preparar una excursión": [
      ["La acampada", `<p>Dormir en la naturaleza, en una <b>tienda de campaña</b> o en un <b>refugio</b>, es una experiencia inolvidable. Para que salga bien, hay que tener en cuenta algunas cosas:</p><ul><li><b>Dónde acampar</b>: solo en <b>zonas autorizadas</b> (campings, áreas de acampada). En muchos espacios naturales la acampada libre está prohibida.</li><li><b>Elegir el sitio</b>: un terreno llano, sin piedras, lejos del cauce de ríos y barrancos (puede haber crecidas), y nunca debajo de árboles con ramas secas.</li><li><b>Montar la tienda</b>: con la puerta en dirección contraria al viento, bien tensada y sujeta con piquetas.</li><li><b>El saco de dormir y la esterilla</b>: la esterilla aísla del frío y la humedad del suelo.</li><li><b>El fuego</b>: está prohibido hacer hogueras en el monte casi todo el año por el riesgo de incendio. Se cocina solo en zonas preparadas o con hornillos permitidos.</li><li><b>La basura</b>: todo lo que llevas, te lo llevas de vuelta.</li></ul><p>Por la noche, lleva siempre una <b>linterna frontal</b>, y recuerda que el silencio también es una forma de respetar a los animales que viven allí.</p>`,
        H6.rueda("Acampar bien", "TIENDA", [["zona autorizada", cVE], ["terreno llano", cAZ], ["sin hogueras", cRO], ["sin basura", cMO]])],
    ],
  },
  final: [
    ["La escalada", `<p>La <b>escalada</b> consiste en subir por paredes de roca o por <b>rocódromos</b> (paredes artificiales con presas de colores). Es un deporte muy completo: trabaja la fuerza, la flexibilidad, el equilibrio, la coordinación y, sobre todo, la <b>concentración</b> y la <b>confianza</b>. Desde los Juegos de Tokio 2020 es deporte olímpico.</p><p>Hay varias modalidades:</p><ul><li><b>Búlder</b>: paredes bajas, sin cuerda, con colchonetas gruesas debajo. Es la más adecuada para empezar en el colegio, siempre a poca altura.</li><li><b>Escalada con cuerda</b>: en paredes altas. El escalador lleva un <b>arnés</b> atado a una cuerda y un compañero, el <b>asegurador</b>, la controla desde abajo para frenar una caída.</li><li><b>Escalada de velocidad</b>: subir una pared estándar lo más rápido posible.</li></ul><p>Normas de seguridad: escalar siempre con supervisión de un adulto formado, usar <b>casco</b> en roca, revisar el arnés y los nudos antes de subir (el nudo más usado es el <b>ocho</b>), y comunicarse con el asegurador con órdenes claras.</p><p>En la escalada, la confianza en el compañero es fundamental: tu seguridad está en sus manos, y la suya en las tuyas.</p>`,
      L6.filas("Escalada", [["búlder", "baja, sin cuerda", cVE], ["con cuerda", "arnés y asegurador", cAZ], ["velocidad", "contra el reloj", cRO], ["nudo", "el ocho", cMO]])],
    ["Los espacios naturales protegidos", `<p>Algunos lugares tienen un valor natural tan grande que se <b>protegen por ley</b>. En España hay muchas figuras de protección: <b>parques nacionales</b>, parques naturales, reservas, monumentos naturales…</p><p>Los <b>parques nacionales</b> son los de máxima protección. España tiene <b>16</b>, entre ellos:</p><ul><li><b>Picos de Europa</b> (Asturias, Cantabria y Castilla y León), el primero, de 1918 (entonces llamado Montaña de Covadonga).</li><li><b>Ordesa y Monte Perdido</b> (Aragón), también de 1918.</li><li><b>Doñana</b> (Andalucía), uno de los humedales más importantes de Europa.</li><li><b>El Teide</b> (Tenerife), con el pico más alto de España.</li><li><b>Sierra de Guadarrama</b> (Madrid y Castilla y León) y <b>Sierra de las Nieves</b> (Málaga), de los más recientes.</li></ul><p>Cuando visitamos un espacio protegido hay que cumplir sus <b>normas</b>: ir por los senderos marcados, no coger plantas, piedras ni animales, no dar de comer a la fauna, no hacer ruido, no llevar perros sueltos y llevarse toda la basura. A veces hay que pedir permiso para ciertas actividades o el número de visitantes está limitado.</p><p>Disfrutar de la naturaleza es un derecho, pero cuidarla es una responsabilidad de todos.</p>`,
      H6.dos("Espacios protegidos", ["PARQUES", ["Picos de Europa", "Doñana", "Teide"], cVE], ["NORMAS", ["por el sendero", "sin coger nada", "sin ruido"], cAZ])],
  ],
  ejemplos: [
    ["Encuentras la estrella polar delante de ti. ¿Dónde está el este?", ["Delante = norte.", "El este queda a la derecha."], "A tu derecha."],
    ["En la playa ondea la bandera amarilla. ¿Qué haces?", ["Amarilla = precaución.", "Puedes bañarte con cuidado y cerca de la orilla."], "Bañarse con mucha precaución, en zona vigilada."],
  ],
  errores: ["Hacer una hoguera en el monte para cocinar.", "Bañarse solo o en zonas sin vigilancia."],
  ejercicios: [
    ["b", "¿Qué estrella señala el norte?", "La estrella polar."],
    ["b", "¿Qué significa la bandera roja en la playa?", "Prohibido bañarse."],
    ["b", "¿Qué es un rocódromo?", "Una pared artificial para escalar."],
    ["b", "¿Cuántos parques nacionales tiene España?", "16."],
    ["b", "¿Para qué sirve la esterilla en una acampada?", "Para aislar del frío y la humedad del suelo."],
    ["m", "Explica cómo encontrar la estrella polar.", "Buscar el Carro, prolongar cinco veces la distancia entre las dos estrellas traseras."],
    ["m", "¿Qué hay que hacer si te arrastra una corriente?", "Nadar en paralelo a la orilla y pedir ayuda levantando el brazo."],
    ["m", "¿Dónde no hay que montar una tienda y por qué?", "Junto a ríos y barrancos, por las crecidas; bajo árboles con ramas secas."],
    ["m", "¿Qué hace el asegurador en escalada?", "Controla la cuerda desde abajo para frenar una caída."],
    ["m", "¿Por qué Iker no había visto tantas estrellas?", "Por la contaminación lumínica de la ciudad."],
    ["a", "Prepara la lista de material para una acampada de dos días.", "Respuesta abierta."],
    ["a", "Investiga un parque nacional y presenta sus normas y sus valores naturales.", "Respuesta abierta."],
    ["a", "Diseña un cartel de seguridad para la playa o la nieve.", "Respuesta abierta."],
    ["a", "Una noche despejada, encuentra la estrella polar con tu familia y dibuja el Carro.", "Respuesta abierta."],
  ],
  quiz: [
    ["La estrella polar…", ["casi no se mueve en el cielo", "es la más brillante", "señala el sur"], "Orientación."],
    ["En la nieve conviene abrigarse…", ["por capas", "con una sola prenda gorda", "con ropa de verano"], "Nieve."],
    ["El búlder se escala…", ["sin cuerda y a poca altura", "con cuerda a 50 metros", "en el agua"], "Escalada."],
    ["Doñana es un parque nacional de…", ["Andalucía", "Galicia", "Aragón"], "Espacios protegidos."],
    ["En el monte, las hogueras…", ["están prohibidas casi todo el año", "son siempre libres", "se hacen bajo los árboles"], "Acampada."],
  ],
  examen: [
    ["¿Qué figura buscaron para encontrar el norte?", ["el Carro", "Orión", "la Cruz del Sur"], "Lectura."],
    ["El nudo más usado en escalada es el…", ["ocho", "lazo", "as de guía doble"], "Escalada."],
  ],
  tarjetas: [
    ["Estrella polar", "Carro de la Osa Mayor → prolongar ×5 → norte."],
    ["Agua y nieve", "Bandera verde, amarilla, roja; chaleco; casco y capas en la nieve."],
    ["Acampada", "Zona autorizada, terreno llano, sin hogueras, sin basura."],
    ["Espacios protegidos", "16 parques nacionales; sendero, no coger nada, no hacer ruido."],
  ],
  glosario: [
    ["Estrella polar", "Estrella que señala el norte."],
    ["Osa Mayor", "Constelación que contiene el Carro."],
    ["Contaminación lumínica", "Exceso de luz artificial que impide ver el cielo."],
    ["Corriente", "Movimiento del agua que puede arrastrar a un bañista."],
    ["Alud", "Gran masa de nieve que cae por una ladera."],
    ["Refugio", "Edificio de montaña para dormir y protegerse."],
    ["Piqueta", "Clavo para sujetar la tienda al suelo."],
    ["Rocódromo", "Pared artificial para escalar."],
    ["Búlder", "Escalada de poca altura sin cuerda."],
    ["Arnés", "Equipo que une al escalador con la cuerda."],
    ["Asegurador", "Persona que controla la cuerda del escalador."],
    ["Parque nacional", "Espacio natural con la máxima protección."],
  ],
  situacion: {
    titulo: "Nuestra salida a la naturaleza",
    reto: "La clase planifica con detalle una salida de dos días a un espacio natural cercano.",
    pasos: ["Elegid el destino, informaos de sus normas y trazad la ruta en un mapa.", "Preparad la lista de material, el menú y el plan de seguridad (agua, calor, frío).", "Organizad actividades: orientación de día, observación de estrellas de noche y juegos.", "Tras la salida, haced una memoria con fotos y una valoración del respeto al entorno."],
    producto: "Un plan de salida completo y una memoria de la experiencia.",
    evaluacion: ["Se orienta de día y de noche.", "Conoce y aplica normas de seguridad.", "Prepara el material adecuado.", "Respeta el medio natural y sus normas."],
  },
});
