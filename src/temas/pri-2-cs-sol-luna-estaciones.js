// Ciencias Sociales 2º de Primaria: el Sol, la Luna y las estaciones. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, tema, V, nino, sol, luna, estrella, nube, arbol, flor, copo, tierraPlaneta, casa, chip, flechaR, linea } = require("./_pri2b");

// Luna en distintas fases: lado iluminado según la fase.
const lunaLlena = (x, y, r = 16) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#f2e7b8" stroke="#c9b97a" stroke-width="1.5"/><circle cx="${x - r * 0.3}" cy="${y - r * 0.2}" r="${r * 0.18}" fill="#d9cc93"/><circle cx="${x + r * 0.35}" cy="${y + r * 0.3}" r="${r * 0.12}" fill="#d9cc93"/>`;
const lunaNueva = (x, y, r = 16) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#3d4459" stroke="#7d869a" stroke-width="1.5"/>`;
const cuarto = (x, y, r = 16, creciente = true) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#3d4459" stroke="#7d869a" stroke-width="1.5"/><path d="M${x} ${y - r} a${r} ${r} 0 0 ${creciente ? 1 : 0} 0 ${r * 2}z" fill="#f2e7b8"/>`;
const noche = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="#1f2a4a"/>`;
const hoja = (x, y, c = "#d35400", a = 0) => `<path transform="translate(${x} ${y}) rotate(${a})" d="M0 -8 q8 4 0 16 q-8 -12 0 -16z" fill="${c}"/>`;
const arbolSeco = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 V-40 M0 -24 l-14 -14 M0 -30 l12 -14 M0 -40 l-6 -10 M0 -40 l6 -10" stroke="#8a5a2b" stroke-width="4" stroke-linecap="round" fill="none"/></g>`;
const arbolColor = (x, y, c, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-5" y="-26" width="10" height="26" fill="#8a5a2b"/><circle cx="0" cy="-40" r="20" fill="${c}"/></g>`;
const panel = (x, y, w, h, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${c}" opacity=".14"/>`;

module.exports = tema({
  materia: "Ciencias Sociales",
  titulo: "El Sol, la Luna y las estaciones",
  objetivos: ["Saber qué son el Sol y la Luna", "Explicar por qué hay día y noche y cómo cambia la Luna", "Conocer las cuatro estaciones del año y sus cambios"],
  claves: ["Sol", "estrella", "Luna", "día", "noche", "fases de la Luna", "estaciones", "año"],
  pregunta: {
    texto: "Por la noche no vemos el Sol. ¿Dónde se ha ido? ¿Se apaga?",
    respuesta: "El Sol <b>no se apaga</b> ni se va. Es la <mark>Tierra</mark> la que gira como una peonza. Cuando nuestra casa mira hacia el Sol es de <mark>día</mark>, y cuando mira hacia el otro lado es de <mark>noche</mark>.",
  },
  bloques: [
    {
      html: `<h3>El Sol</h3><p>El <mark>Sol</mark> es una <b>estrella</b>: una bola enorme de gas muy caliente que brilla.</p><p>Nos da <b>luz</b> y <b>calor</b>. Sin el Sol, las plantas no crecerían y en la Tierra haría muchísimo frío. El Sol es muchísimo más grande que la Tierra, pero lo vemos pequeño porque está muy lejos.</p>`,
      svg: svg("Un Sol muy grande da luz y calor a la Tierra, que es pequeña", `${noche(10, 10, 240, 160)}<circle cx="70" cy="90" r="66" fill="var(--sun)" opacity=".25"/><circle cx="70" cy="90" r="56" fill="var(--sun)"/>${[...Array(5)].map((_, i) => `<path d="M146 ${50 + i * 20} H186" stroke="var(--sun)" stroke-width="2" stroke-dasharray="6 5"/>`).join("")}${tierraPlaneta(212, 90, 18)}${txt(212, 132, "Tierra", "#fff", 14)}${txt(70, 96, "Sol", "#8a5a00", 20)}`),
    },
    {
      html: `<h3>El día y la noche</h3><p>La <mark>Tierra</mark> gira sobre sí misma, como una peonza. Tarda un día entero en dar una vuelta.</p><p>La parte de la Tierra que mira al Sol tiene luz: es de <mark>día</mark>. La parte que no mira al Sol está a oscuras: es de <mark>noche</mark>. Por eso cada día sale el Sol por la mañana y se esconde por la tarde.</p>`,
      svg: svg("La Tierra con la mitad iluminada por el Sol, de día, y la otra mitad oscura, de noche", `${sol(30, 90, 20)}${[60, 90, 120].map((y) => `<path d="M58 ${y} H104" stroke="var(--sun)" stroke-width="2" stroke-dasharray="6 5"/>`).join("")}${tierraPlaneta(160, 90, 46)}<path d="M160 44 a46 46 0 0 1 0 92z" fill="#1f2a4a" opacity=".7"/><path d="M110 40 a60 30 0 0 1 100 0" stroke="var(--muted)" stroke-width="2" fill="none"/><path d="M204 34 l8 6 l-10 3" stroke="var(--muted)" stroke-width="2" fill="none"/>${txt(132, 160, "día", "#b8860b", 15)}${txt(196, 160, "noche", "var(--pen)", 15)}`),
    },
    {
      html: `<h3>La Luna</h3><p>La <mark>Luna</mark> es una bola de roca que gira alrededor de la Tierra. Es nuestro <b>satélite</b>.</p><p>La Luna <b>no tiene luz propia</b>: brilla porque la ilumina el Sol, como un espejo. En la Luna no hay aire ni agua. Los astronautas fueron a la Luna y dejaron sus huellas en el polvo.</p>`,
      svg: svg("La Luna con cráteres en el cielo de noche sobre una casa", `${noche(10, 10, 240, 160)}${lunaLlena(170, 70, 40)}${[30, 70, 100, 230, 220].map((x, i) => estrella(x, [30, 60, 24, 140, 30][i], 5, "#fff")).join("")}${casa(70, 160, "var(--red)")}${txt(170, 136, "la Luna", "#f2e7b8", 15)}`),
      video: V("lfPcs0cCJjU"),
    },
    {
      html: `<h3>Las fases de la Luna</h3><p>Cada noche vemos la Luna con una <b>forma distinta</b>. Son las <mark>fases de la Luna</mark>.</p><p>En <b>luna nueva</b> casi no se ve. Después crece: es el <b>cuarto creciente</b>. Luego se ve redonda: es la <b>luna llena</b>. Al final mengua: es el <b>cuarto menguante</b>. El ciclo dura casi un mes.</p>`,
      svg: svg("Cuatro fases de la Luna en orden: nueva, cuarto creciente, llena y cuarto menguante", `${noche(10, 30, 240, 100)}${lunaNueva(42, 74, 20)}${cuarto(102, 74, 20, true)}${lunaLlena(162, 74, 20)}${cuarto(216, 74, 20, false)}${txt(42, 116, "nueva", "#cfd6e6", 11)}${txt(102, 116, "creciente", "#cfd6e6", 11)}${txt(162, 116, "llena", "#cfd6e6", 11)}${txt(214, 116, "menguante", "#cfd6e6", 10)}${flechaR(30, 152, 230, 152, "var(--muted)")}${txt(130, 172, "casi un mes", "var(--muted)", 12)}`),
    },
    {
      html: `<h3>Las estrellas</h3><p>Por la noche, si el cielo está despejado, vemos muchas <mark>estrellas</mark>.</p><p>Las estrellas son soles muy lejanos. Por eso las vemos como puntitos de luz. De día también están ahí, pero la luz del Sol no nos deja verlas. Algunas forman dibujos en el cielo: son las <b>constelaciones</b>.</p>`,
      svg: svg("Un niño mira con un telescopio el cielo de noche lleno de estrellas", `${noche(10, 10, 240, 160)}${[[30, 30], [60, 54], [96, 26], [140, 46], [176, 22], [206, 52], [236, 30], [120, 80], [220, 92], [40, 96]].map(([x, y], i) => estrella(x, y, 4 + (i % 3), "#fff")).join("")}<path d="M140 46 L176 22 L206 52 L236 30" stroke="#cfd6e6" stroke-width="1" stroke-dasharray="3 3" fill="none"/>${luna(70, 70, 12)}<rect x="10" y="150" width="240" height="20" fill="#2f5d3a"/><path d="M110 142 L148 118" stroke="#9aa3b5" stroke-width="8" stroke-linecap="round"/><path d="M118 138 l-6 18 M118 138 l8 18" stroke="#9aa3b5" stroke-width="2"/>${nino(90, 166, { c: "var(--red)", s: 0.7 })}`),
    },
    {
      html: `<h3>Las cuatro estaciones</h3><p>La Tierra, además de girar, da una <b>vuelta alrededor del Sol</b>. Tarda un <mark>año</mark> en dar la vuelta completa.</p><p>Por eso, a lo largo del año, hace más frío o más calor y el paisaje cambia. Así tenemos las cuatro <mark>estaciones</mark>: <b>primavera</b>, <b>verano</b>, <b>otoño</b> e <b>invierno</b>.</p>`,
      svg: svg("La Tierra da la vuelta al Sol y en cada lado del camino hay una estación", `<ellipse cx="130" cy="90" rx="100" ry="58" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="6 5"/>${sol(130, 90, 20)}${tierraPlaneta(30, 90, 12)}${tierraPlaneta(130, 32, 12)}${tierraPlaneta(230, 90, 12)}${tierraPlaneta(130, 148, 12)}${txt(130, 14, "primavera", "var(--leaf)", 12)}${txt(230, 116, "verano", "var(--red)", 12)}${txt(130, 176, "otoño", "#d35400", 12)}${txt(30, 116, "invierno", "var(--pen)", 12)}<path d="M206 46 l10 6 l-12 2" stroke="var(--muted)" stroke-width="2" fill="none"/>`),
      video: V("RRLMBbt778A"),
    },
    {
      html: `<h3>Primavera y verano</h3><p>En <mark>primavera</mark> los días se alargan y la temperatura es suave. Los árboles se llenan de hojas, salen las <b>flores</b> y llueve a veces.</p><p>En <mark>verano</mark> hace <b>calor</b> y los días son los más largos del año. Terminan las clases, vamos a la playa o a la piscina, y nos protegemos del Sol.</p>`,
      svg: svg("A la izquierda la primavera con flores y un árbol verde; a la derecha el verano con sol fuerte y una sombrilla", `${panel(10, 20, 116, 150, "var(--leaf)")}${panel(134, 20, 116, 150, "var(--red)")}${arbolColor(50, 150, "#7cc36b")}${flor(86, 152, "var(--red)")}${flor(104, 152, "#e056a0")}${flor(26, 156, "var(--sun)")}${sol(220, 50, 18)}<path d="M146 140 Q192 126 238 140 V160 H146Z" fill="#e8d29a"/><path d="M180 140 V100" stroke="var(--ink)" stroke-width="2"/><path d="M160 104 a20 12 0 0 1 40 0z" fill="var(--red)"/>${txt(68, 40, "primavera", "var(--leaf)", 13)}${txt(176, 40, "verano", "var(--red)", 13)}`),
    },
    {
      html: `<h3>Otoño e invierno</h3><p>En <mark>otoño</mark> refresca y los días se acortan. Las hojas de muchos árboles se ponen <b>amarillas y marrones</b> y se caen. Volvemos al colegio.</p><p>En <mark>invierno</mark> hace <b>frío</b> y los días son los más cortos. Algunos árboles se quedan sin hojas y en las montañas nieva. Nos abrigamos mucho.</p>`,
      svg: svg("A la izquierda el otoño con un árbol de hojas naranjas que caen; a la derecha el invierno con un árbol sin hojas y nieve", `${panel(10, 20, 116, 150, "#d35400")}${panel(134, 20, 116, 150, "var(--pen)")}${arbolColor(60, 150, "#e67e22")}${hoja(92, 100, "#d35400", 20)}${hoja(100, 130, "#b9770e", -30)}${hoja(26, 120, "#d35400", 40)}<path d="M14 156 h108" stroke="#b9770e" stroke-width="6" stroke-linecap="round"/>${arbolSeco(192, 150, 1.4)}${[150, 176, 214, 236, 160, 226].map((x, i) => copo(x, 50 + (i % 3) * 22, 5)).join("")}<path d="M138 150 Q192 140 246 150 V166 H138Z" fill="#fff" stroke="var(--line)"/>${txt(68, 40, "otoño", "#d35400", 13)}${txt(192, 40, "invierno", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>Cuidado con el Sol</h3><p>El Sol es bueno, pero hay que tener <mark>cuidado</mark>.</p><p><b>Nunca</b> miramos el Sol directamente, ni con gafas de sol: puede dañar los ojos. En verano usamos <b>crema</b>, gorra y camiseta, bebemos <b>agua</b> y buscamos la sombra en las horas de más calor.</p>`,
      svg: svg("Una niña con gorra, gafas y crema bajo una sombrilla y un vaso de agua; mirar el Sol está prohibido", `${sol(46, 46, 18)}<circle cx="46" cy="46" r="34" fill="none" stroke="var(--red)" stroke-width="4"/><path d="M22 70 L70 22" stroke="var(--red)" stroke-width="4"/><path d="M150 72 a46 22 0 0 1 92 0z" fill="var(--pen)"/><path d="M196 72 V160" stroke="var(--ink)" stroke-width="2"/>${nino(160, 166, { nina: true, c: "var(--sun)" })}<path d="M151 99 a9 8 0 0 1 18 0z" fill="var(--red)"/><rect x="226" y="136" width="14" height="22" rx="2" fill="var(--water)" opacity=".6" stroke="var(--ink)"/>${chip(60, 132, 76, "crema", "var(--leaf)", 13)}${chip(60, 160, 76, "agua", "var(--water)", 13)}`),
    },
  ],
  figura: {
    titulo: "El Sol, la Luna y las estaciones",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="A la izquierda el día con el Sol y la noche con la Luna; a la derecha las cuatro estaciones con un árbol en cada una">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      <rect x="20" y="20" width="130" height="220" rx="14" fill="var(--water)" opacity=".18"/>${noche(160, 20, 130, 220)}
      ${sol(85, 100, 30)}${lunaLlena(225, 100, 30)}${estrella(180, 50, 6, "#fff")}${estrella(270, 160, 5, "#fff")}${estrella(190, 170, 4, "#fff")}
      ${rot(85, 200, "día", { size: 20, color: "#b8860b", w: 800 })}${rot(225, 200, "noche", { size: 20, color: "#f2e7b8", w: 800 })}
      ${panel(310, 20, 72, 220, "var(--leaf)")}${panel(388, 20, 72, 220, "var(--red)")}${panel(466, 20, 72, 220, "#d35400")}${panel(544, 20, 76, 220, "var(--pen)")}
      ${arbolColor(346, 170, "#7cc36b", 1.2)}${flor(328, 196, "var(--red)")}${arbolColor(424, 170, "#2e9b44", 1.2)}${sol(440, 60, 14)}${arbolColor(502, 170, "#e67e22", 1.2)}${hoja(522, 120, "#d35400", 30)}${arbolSeco(582, 170, 1.5)}${copo(560, 60, 6)}${copo(600, 80, 6)}
      ${rot(346, 222, "primavera", { size: 13, color: "var(--leaf)", w: 800 })}${rot(424, 222, "verano", { size: 13, color: "var(--red)", w: 800 })}${rot(502, 222, "otoño", { size: 13, color: "#d35400", w: 800 })}${rot(582, 222, "invierno", { size: 13, color: "var(--pen)", w: 800 })}
    </svg>`,
  },
  video: V("ivHOIcPoJl0", "el Sol, la Luna y la Tierra para niños"),
  ejemplos: [
    { enunciado: "En España es de día. ¿Qué pasa en la otra cara de la Tierra?", pasos: ["La Tierra es una bola que gira.", "Solo la mitad que mira al Sol tiene luz.", "La otra mitad no mira al Sol."], resultado: "allí es de noche." },
    { enunciado: "Esta noche la Luna se ve redonda del todo. ¿Qué fase es?", pasos: ["Cuando no se ve, es luna nueva.", "Cuando se ve media, es un cuarto.", "Cuando se ve redonda y entera, es la llena."], resultado: "es luna llena." },
    { enunciado: "Las hojas de los árboles se caen y empieza el colegio. ¿Qué estación es?", pasos: ["En primavera salen hojas y flores.", "En verano hace calor y no hay clase.", "En otoño caen las hojas y volvemos al cole."], resultado: "es otoño." },
  ],
  errores: [
    "Creer que el Sol se apaga por la noche: es la Tierra la que gira.",
    "Pensar que la Luna tiene luz propia: la ilumina el Sol.",
    "Creer que la Luna cambia de tamaño: solo vemos una parte iluminada distinta.",
    "Mirar el Sol directamente, aunque sea con gafas de sol: daña los ojos.",
  ],
  ejercicios: [
    { q: "¿Qué es el Sol?", sol: "Una estrella que nos da luz y calor." },
    { q: "¿Por qué hay día y noche?", sol: "Porque la Tierra gira y la parte que mira al Sol tiene día." },
    { q: "¿Cuánto tarda la Tierra en dar una vuelta sobre sí misma?", sol: "Un día." },
    { q: "¿Qué es la Luna?", sol: "Una bola de roca que gira alrededor de la Tierra: nuestro satélite." },
    { q: "Escribe las cuatro fases de la Luna.", sol: "Luna nueva, cuarto creciente, luna llena y cuarto menguante." },
    { q: "¿Por qué de día no vemos las estrellas?", sol: "Porque la luz del Sol no nos deja verlas." },
    { q: "¿Cuánto tarda la Tierra en dar la vuelta al Sol?", sol: "Un año." },
    { q: "Escribe las cuatro estaciones en orden empezando por la primavera.", sol: "Primavera, verano, otoño e invierno." },
    { q: "¿En qué estación caen las hojas?", sol: "En otoño." },
    { q: "Dibuja tu estación favorita y escribe qué tiempo hace.", sol: "Respuesta libre: por ejemplo, el verano, con calor y sol." },
  ],
  quiz: [
    { q: "El Sol es…", o: ["una estrella", "un planeta", "un satélite"], a: 0, e: "Una bola de gas que brilla." },
    { q: "El Sol nos da…", o: ["luz y calor", "lluvia", "nieve"], a: 0, e: "Sin él haría mucho frío." },
    { q: "Es de noche cuando nuestra parte de la Tierra…", o: ["no mira al Sol", "mira al Sol", "se para"], a: 0, e: "La Tierra gira." },
    { q: "La Luna gira alrededor de…", o: ["la Tierra", "la Luna", "las estrellas"], a: 0, e: "Es nuestro satélite." },
    { q: "La Luna brilla porque…", o: ["la ilumina el Sol", "tiene bombillas", "tiene fuego"], a: 0, e: "Como un espejo." },
    { q: "Cuando la Luna se ve redonda es…", o: ["luna llena", "luna nueva", "cuarto menguante"], a: 0, e: "Entera e iluminada." },
    { q: "La Tierra tarda en dar la vuelta al Sol…", o: ["un año", "un día", "una semana"], a: 0, e: "Y así pasan las estaciones." },
    { q: "La estación de las flores es…", o: ["la primavera", "el otoño", "el invierno"], a: 0, e: "Salen hojas y flores." },
    { q: "La estación más calurosa es…", o: ["el verano", "el invierno", "el otoño"], a: 0, e: "Días largos y calor." },
    { q: "En invierno…", o: ["hace frío", "caen todas las flores", "hace mucho calor"], a: 0, e: "Y puede nevar." },
  ],
  examen: [
    { q: "¿Cuántas estaciones tiene el año?", o: ["Cuatro", "Dos", "Doce"], a: 0, e: "Primavera, verano, otoño e invierno." },
    { q: "¿Qué estación va después del otoño?", o: ["El invierno", "La primavera", "El verano"], a: 0, e: "Después del otoño llega el frío." },
    { q: "¿Qué vemos en luna nueva?", o: ["Casi nada", "La Luna redonda", "Media Luna"], a: 0, e: "La cara iluminada no mira hacia nosotros." },
    { q: "¿Qué hacemos para protegernos del Sol?", o: ["Crema, gorra, agua y sombra", "Mirarlo fijamente", "Ponernos abrigo"], a: 0, e: "Así cuidamos la piel y los ojos." },
  ],
  feynman: ["Qué es el Sol y por qué hay día y noche", "Qué es la Luna y sus fases", "Por qué hay estaciones y cómo es cada una"],
  mapaT: ["EL SOL, LA LUNA Y LAS ESTACIONES", [
    ["El Sol", "estrella · luz y calor", "#b8860b"],
    ["Día y noche", "la Tierra gira", "var(--pen)"],
    ["La Luna", "satélite · fases", "var(--muted)"],
    ["Estaciones", "primavera · verano · otoño · invierno", "var(--leaf)"],
  ]],
  tarjetas: [
    ["¿Qué es el Sol?", "Una estrella"],
    ["¿Por qué hay día y noche?", "Porque la Tierra gira"],
    ["Satélite de la Tierra", "La Luna"],
    ["¿Tiene luz propia la Luna?", "No, la ilumina el Sol"],
    ["Luna redonda y entera", "Luna llena"],
    ["Tiempo de una vuelta al Sol", "Un año"],
    ["Estación en que caen las hojas", "El otoño"],
    ["Estación más fría", "El invierno"],
  ],
  familias: [
    "Mirad la Luna varias noches seguidas y dibujad cómo cambia su forma.",
    "Con una linterna y una pelota, explicad juntos el día y la noche.",
    "Buscad fotos de la familia en cada estación y ordenadlas.",
    "Preparad juntos la mochila del verano: crema, gorra y agua.",
  ],
  saberes: "Sociedades y territorios: el Sol y la Luna; el día y la noche por el giro de la Tierra; las fases de la Luna; el año y las cuatro estaciones, con sus cambios en el paisaje y en la vida cotidiana",
  ideas: ["Linterna y globo terráqueo para ver el día y la noche.", "Diario de la Luna durante un mes con dibujos de cada noche.", "Mural de las cuatro estaciones con hojas, flores y fotos."],
});
