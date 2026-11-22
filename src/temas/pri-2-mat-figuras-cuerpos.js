// Matemáticas 2º de Primaria: figuras planas y cuerpos geométricos.
const P = require("./_pri2a");
const { svg, num, txt, cubo, prisma, esfera, cilindro, cono, piramide, casa, pelota } = P;

const tri = (x, y, s = 1, c = "var(--sun)") => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 -26 L28 22 H-28z" fill="${c}" fill-opacity=".7" stroke="var(--ink)" stroke-width="2" stroke-linejoin="round"/>`;
const cuad = (x, y, l = 46, c = "var(--pen)") => `<rect x="${x - l / 2}" y="${y - l / 2}" width="${l}" height="${l}" fill="${c}" fill-opacity=".6" stroke="var(--ink)" stroke-width="2"/>`;
const rect = (x, y, w = 66, h = 40, c = "var(--leaf)") => `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" fill="${c}" fill-opacity=".6" stroke="var(--ink)" stroke-width="2"/>`;
const circ = (x, y, r = 24, c = "var(--red)") => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" fill-opacity=".6" stroke="var(--ink)" stroke-width="2"/>`;
const punto = (x, y, c = "var(--red)") => `<circle cx="${x}" cy="${y}" r="4.5" fill="${c}"/>`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Figuras planas y cuerpos geométricos",
  objetivos: ["Reconocer el triángulo, el cuadrado, el rectángulo y el círculo", "Contar los lados y los vértices de una figura", "Reconocer el cubo, el prisma, la esfera, el cilindro, el cono y la pirámide"],
  claves: ["figura plana", "lado", "vértice", "triángulo", "cuadrado", "rectángulo", "círculo", "cuerpo geométrico", "cubo", "esfera", "cilindro"],
  pregunta: ["Un dibujo de una pelota y una pelota de verdad, ¿son iguales?", "No del todo. El dibujo es <mark>plano</mark>: está en el papel y no se puede coger. La pelota de verdad es un <mark>cuerpo</mark>: tiene volumen y la puedes tocar por todos lados."],
  bloques: [
    ["Figuras planas", `<p>Las <mark>figuras planas</mark> son formas que podemos dibujar en un papel. Son <b>planas</b> como una hoja: no tienen grosor.</p><p>Las más conocidas son el <b>triángulo</b>, el <b>cuadrado</b>, el <b>rectángulo</b> y el <b>círculo</b>.</p><p>Las encontramos en señales de tráfico, ventanas, platos y baldosas.</p>`,
      svg("Un triángulo, un cuadrado, un rectángulo y un círculo", `${tri(40, 72)}${cuad(100, 72)}${rect(166, 72)}${circ(226, 72)}${txt(40, 124, "triángulo", "var(--ink)", 11)}${txt(100, 124, "cuadrado", "var(--ink)", 11)}${txt(166, 124, "rectángulo", "var(--ink)", 11)}${txt(226, 124, "círculo", "var(--ink)", 11)}${txt(130, 160, "Figuras planas", "var(--pen)", 15)}`)],
    ["Lados y vértices", `<p>Muchas figuras tienen <mark>lados</mark>: son las líneas rectas que forman su borde.</p><p>Donde se juntan dos lados hay una esquina. Se llama <mark>vértice</mark>.</p><p>Un triángulo tiene <b>3 lados</b> y <b>3 vértices</b>. El círculo no tiene lados ni vértices: su borde es una línea <b>curva</b>.</p>`,
      svg("Un triángulo con sus tres lados en azul y sus tres vértices en rojo", `<path d="M130 26 L206 140 H54z" fill="var(--sun)" fill-opacity=".3" stroke="var(--pen)" stroke-width="4" stroke-linejoin="round"/>${punto(130, 26)}${punto(206, 140)}${punto(54, 140)}${txt(212, 70, "lado", "var(--pen)", 14)}${txt(40, 32, "vértice", "var(--red)", 14)}<path d="M66 34 Q100 22 122 26" stroke="var(--red)" stroke-width="1.5" fill="none"/>${txt(130, 166, "3 lados y 3 vértices", "var(--ink)", 14)}`)],
    ["Cuadrado y rectángulo", `<p>El <mark>cuadrado</mark> y el <mark>rectángulo</mark> tienen <b>4 lados</b> y <b>4 vértices</b>.</p><p>En el cuadrado, los 4 lados son <b>iguales</b>. En el rectángulo, hay dos lados <b>largos</b> y dos <b>cortos</b>.</p><p>Una servilleta suele ser un cuadrado. Una puerta es un rectángulo.</p>`,
      svg("Un cuadrado con cuatro lados iguales y un rectángulo con dos lados largos y dos cortos", `${cuad(70, 76, 72)}${rect(190, 76, 100, 54)}${txt(70, 136, "4 lados iguales", "var(--pen)", 13)}${txt(190, 136, "2 largos, 2 cortos", "var(--leaf)", 13)}${txt(130, 166, "4 lados y 4 vértices", "var(--ink)", 14)}`)],
    ["Cuerpos geométricos", `<p>Los <mark>cuerpos geométricos</mark> no son planos: tienen <b>volumen</b>. Los podemos coger, tocar y girar.</p><p>Una caja, una pelota o una lata son cuerpos.</p><p>Los cuerpos tienen <b>caras</b>. Algunas caras son planas y otras son curvas. Si una caja tiene caras planas, la podemos <b>apilar</b>.</p>`,
      svg("Un cuadrado plano al lado de un cubo con volumen", `${cuad(66, 90, 60)}${txt(66, 140, "plano", "var(--pen)", 14)}${cubo(160, 76, 52)}${txt(196, 150, "con volumen", "var(--pen)", 14)}`), P.V("geoB")],
    ["Cubo y prisma", `<p>El <mark>cubo</mark> tiene <b>6 caras</b> y todas son cuadrados iguales. Un dado es un cubo.</p><p>El <mark>prisma</mark> también tiene caras planas, pero algunas son rectángulos. Una caja de zapatos o un ladrillo son prismas.</p><p>Los dos se pueden <b>apilar</b> y no ruedan.</p>`,
      svg("Un cubo como un dado y un prisma como una caja", `${cubo(34, 70, 54, "var(--red)")}${punto(48, 84, "var(--card)")}${punto(74, 110, "var(--card)")}${prisma(132, 84, 80, 40)}${txt(70, 152, "cubo", "var(--red)", 15)}${txt(180, 152, "prisma", "var(--sun)", 15)}`)],
    ["Esfera, cilindro y cono", `<p>Estos cuerpos tienen partes <mark>redondas</mark>, así que pueden <b>rodar</b>.</p><p>La <b>esfera</b> es redonda por todas partes, como una pelota.</p><p>El <b>cilindro</b> es como una lata: dos caras planas con forma de círculo y una curva.</p><p>El <b>cono</b> tiene una punta, como el cucurucho de un helado.</p>`,
      svg("Una esfera, un cilindro y un cono", `${esfera(50, 86, 30)}${cilindro(130, 60, 26, 56)}${cono(212, 120, 28, 70)}${txt(50, 152, "esfera", "var(--red)", 14)}${txt(130, 152, "cilindro", "var(--leaf)", 14)}${txt(212, 152, "cono", "var(--inf)", 14)}`)],
    ["La pirámide", `<p>La <mark>pirámide</mark> tiene una base abajo y caras con forma de <b>triángulo</b> que se juntan arriba en una punta.</p><p>Las famosas pirámides de <b>Egipto</b> tienen esta forma.</p><p>Sus caras son planas, así que la pirámide <b>no rueda</b>. Pero tampoco se puede apilar encima de su punta.</p>`,
      svg("Una pirámide con caras triangulares junto a un sol", `${piramide(100, 130, 110)}${P.sol(212, 50, 16)}${txt(100, 164, "pirámide", "var(--sun)", 15)}<path d="M10 140 H250" stroke="#c99a5b" stroke-width="3"/>`)],
    ["¿Para qué sirve?", `<p>Las figuras y los cuerpos están en <b>todas partes</b>.</p><p>Las ruedas son <b>círculos</b>, porque así ruedan bien. Las cajas son <b>prismas</b>, porque se apilan sin caerse.</p><p>Los arquitectos usan formas para construir casas y puentes. ¡Busca formas en tu calle!</p>`,
      svg("Una casa con figuras: cuadrado, triángulo y rectángulo, y una pelota que es una esfera", `<rect x="40" y="80" width="100" height="70" fill="var(--pen)" fill-opacity=".35" stroke="var(--ink)" stroke-width="2"/><path d="M30 80 L90 30 L150 80z" fill="var(--red)" fill-opacity=".6" stroke="var(--ink)" stroke-width="2"/><rect x="56" y="96" width="26" height="26" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><rect x="98" y="104" width="26" height="46" fill="#c99a5b" stroke="var(--ink)" stroke-width="1.5"/>${pelota(210, 130, 20)}${txt(200, 50, "triángulo", "var(--red)", 12)}${txt(200, 70, "cuadrado", "var(--sun)", 12)}${txt(200, 90, "rectángulo", "#8a5a2b", 12)}${txt(210, 168, "esfera", "var(--red)", 12)}`)],
    ["Juego: ¿rueda o no rueda?", `<p>Busca en casa una <b>pelota</b>, una <b>lata</b>, una <b>caja</b> y un <b>dado</b>. Ponlos en una mesa un poco inclinada.</p><p>¿Cuáles <mark>ruedan</mark>? La pelota y la lata, porque tienen partes curvas.</p><p>¿Cuáles <mark>no ruedan</mark>? La caja y el dado, porque todas sus caras son planas.</p>`,
      svg("Una rampa: la pelota y la lata ruedan, la caja y el dado no", `<path d="M14 150 L246 104 V150z" fill="var(--line)" opacity=".7"/>${esfera(70, 118, 14)}${cilindro(118, 94, 12, 26)}${cubo(170, 92, 20, "var(--red)")}${prisma(206, 82, 30, 18)}${txt(94, 50, "ruedan", "var(--leaf)", 15)}${txt(200, 50, "no ruedan", "var(--red)", 15)}`)],
  ],
  figura: ["Figuras planas y cuerpos", `<svg viewBox="0 0 640 260" role="img" aria-label="Arriba, cuatro figuras planas; abajo, seis cuerpos geométricos">
    <rect width="640" height="260" rx="16" fill="var(--paper)"/>
    ${txt(70, 40, "PLANAS", "var(--pen)", 14)}${tri(170, 70)}${cuad(270, 70)}${rect(380, 70)}${circ(490, 70)}
    ${txt(70, 160, "CUERPOS", "var(--leaf)", 14)}${cubo(130, 160, 40)}${prisma(220, 172, 56, 30)}${esfera(340, 180, 26)}${cilindro(420, 156, 22, 44)}${cono(500, 206, 24, 60)}${piramide(576, 206, 56)}
    ${["cubo", "prisma", "esfera", "cilindro", "cono", "pirámide"].map((t, i) => txt([152, 255, 340, 420, 500, 576][i], 240, t, "var(--ink)", 13)).join("")}
  </svg>`],
  video: P.V("geoV", true),
  ejemplos: [
    ["¿Cuántos lados y vértices tiene un cuadrado?", ["Contamos los lados: 1, 2, 3, 4.", "Contamos las esquinas: 1, 2, 3, 4."], "4 lados y 4 vértices."],
    ["¿Qué forma tiene una lata de refresco?", ["Arriba y abajo tiene dos círculos planos.", "Alrededor tiene una cara curva."], "es un cilindro."],
    ["¿Qué diferencia hay entre un círculo y una esfera?", ["El círculo es plano: se dibuja en el papel.", "La esfera tiene volumen: es como una pelota."], "el círculo es una figura plana y la esfera, un cuerpo."],
  ],
  errores: [
    "Llamar círculo a una pelota: la pelota es una esfera.",
    "Decir que el círculo tiene vértices: no tiene esquinas.",
    "Confundir el cuadrado y el rectángulo: el cuadrado tiene los 4 lados iguales.",
    "Pensar que un cubo puede rodar: sus caras son todas planas.",
  ],
  ejercicios: [
    ["Dibuja un triángulo y señala sus vértices.", "Un triángulo con 3 puntos en sus esquinas."],
    ["¿Cuántos lados tiene un rectángulo?", "4 lados."],
    ["¿Qué figura no tiene lados?", "El círculo."],
    ["Nombra algo de casa con forma de rectángulo.", "Por ejemplo, una puerta o un libro."],
    ["¿Qué cuerpo es un dado?", "Un cubo."],
    ["¿Qué cuerpo es una pelota?", "Una esfera."],
    ["¿Qué cuerpo es un cucurucho de helado?", "Un cono."],
    ["¿Cuántas caras tiene un cubo?", "6 caras."],
    ["Di dos cuerpos que ruedan.", "La esfera y el cilindro (también el cono, de lado)."],
    ["Busca en clase una figura de cada tipo.", "Respuesta libre: reloj (círculo), pizarra (rectángulo), escuadra (triángulo)…"],
  ],
  quiz: [
    ["¿Cuántos lados tiene un triángulo?", ["3", "4", "0"], "Tri significa tres."],
    ["La esquina donde se juntan dos lados se llama…", ["vértice", "cara", "círculo"], "Los vértices son las esquinas."],
    ["¿Qué figura tiene 4 lados iguales?", ["El cuadrado", "El rectángulo", "El triángulo"], "Todos sus lados miden lo mismo."],
    ["¿Qué figura no tiene vértices?", ["El círculo", "El cuadrado", "El triángulo"], "Su borde es curvo."],
    ["Una lata tiene forma de…", ["cilindro", "cubo", "pirámide"], "Dos círculos y una cara curva."],
    ["Una pelota tiene forma de…", ["esfera", "círculo", "cono"], "Es redonda por todas partes."],
    ["Una caja de zapatos tiene forma de…", ["prisma", "esfera", "cono"], "Sus caras son rectángulos."],
    ["¿Qué cuerpo rueda?", ["La esfera", "El cubo", "La pirámide"], "Tiene una superficie curva."],
    ["Un cubo tiene…", ["6 caras", "4 caras", "8 caras"], "Todas son cuadrados iguales."],
    ["Las figuras planas…", ["se dibujan en un papel", "se pueden coger", "ruedan"], "No tienen volumen."],
  ],
  examen: [
    ["¿Cuántos vértices tiene un rectángulo?", ["4", "3", "2"], "Uno en cada esquina."],
    ["Un cucurucho tiene forma de…", ["cono", "cilindro", "cubo"], "Tiene una punta."],
    ["¿Qué es plano?", ["El círculo", "La esfera", "El cilindro"], "El círculo se dibuja en el papel."],
    ["¿Qué cuerpo tiene la forma de las construcciones de Egipto?", ["La pirámide", "La esfera", "El cilindro"], "Las pirámides de Egipto."],
  ],
  feynman: ["Qué diferencia hay entre una figura plana y un cuerpo", "Qué son los lados y los vértices", "Por qué unos cuerpos ruedan y otros no"],
  mapa: ["FORMAS", [
    ["Planas", "triángulo, cuadrado…", "var(--pen)"],
    ["Partes", "lados y vértices", "var(--red)"],
    ["Ruedan", "esfera, cilindro, cono", "var(--leaf)"],
    ["No ruedan", "cubo, prisma, pirámide", "var(--sun)"],
  ]],
  tarjetas: [
    ["Lados del triángulo", "3"],
    ["Lados del cuadrado", "4 iguales"],
    ["¿Qué es un vértice?", "La esquina donde se juntan dos lados"],
    ["¿Tiene lados el círculo?", "No: su borde es curvo"],
    ["Un dado es un…", "cubo"],
    ["Una lata es un…", "cilindro"],
    ["Una pelota es una…", "esfera"],
    ["¿Qué cuerpos ruedan?", "Esfera, cilindro y cono"],
  ],
  familias: [
    "Id de paseo «cazando formas»: señales triangulares, ventanas rectangulares, ruedas circulares.",
    "En la cocina, clasificad envases: latas (cilindros), cajas (prismas), naranjas (esferas).",
    "Dibujad figuras con regla y contad juntos los lados y los vértices.",
    "Haced una torre con cajas y comprobad por qué las pelotas no se pueden apilar.",
  ],
  saberes: "Sentido espacial: figuras planas (triángulo, cuadrado, rectángulo y círculo) y sus elementos; cuerpos geométricos (cubo, prisma, esfera, cilindro, cono y pirámide)",
  ideas: ["Bolsa misteriosa: reconocer cuerpos por el tacto.", "Clasificar envases reales según rueden o no.", "Geoplano o palillos con plastilina para construir figuras y contar lados y vértices."],
});

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Reconocer el círculo, la circunferencia y otros polígonos", "Contar caras, aristas y vértices", "Distinguir líneas rectas y curvas", "Descubrir figuras y cuerpos en el arte y la ciudad"],
  lectura: { titulo: "El robot de cajas", html: `<p>Una tarde de lluvia, Irene y su primo Marcos no saben a qué jugar. Entonces Irene tiene una idea:</p><p>—¡Vamos a construir un robot con cosas del reciclaje!</p><p>Buscan en el cubo amarillo y encuentran de todo. Una caja de cereales será el cuerpo: es un prisma. Una caja de galletas cuadrada será la cabeza: es casi un cubo.</p><p>Para los brazos usan dos rollos de papel de cocina, que son cilindros. Para las piernas, dos botes de patatas fritas, también cilindros.</p><p>—Le falta un sombrero —dice Marcos.</p><p>Hacen un cono con una cartulina enrollada y lo pegan sobre la cabeza.</p><p>Por último, Irene recorta dos círculos para los ojos y un rectángulo para la boca.</p><p>—¡Se llama Geómetro! —anuncia Marcos.</p><p>Cuando llega su madre, le preguntan qué figuras ve. Ella las nombra todas… ¡menos el cono, que le parece un gorro de fiesta!</p>` },
  tras: {
    "Lados y vértices": [
      ["Líneas rectas y curvas", `<p>Todas las figuras están hechas de <mark>líneas</mark>. Hay dos clases principales:</p><ul><li><b>Línea recta</b>: va siempre en la misma dirección, sin torcerse. Como el borde de una regla.</li><li><b>Línea curva</b>: se va torciendo poco a poco. Como un arco iris.</li></ul><p>También hay líneas que mezclan las dos:</p><ul><li><b>Línea quebrada</b>: hecha de trozos rectos que cambian de dirección, como un zigzag o los dientes de una sierra.</li><li><b>Línea mixta</b>: tiene partes rectas y partes curvas, como una letra D.</li></ul><p>Las figuras que solo tienen lados rectos, como el triángulo o el cuadrado, se llaman <b>polígonos</b>. El círculo no es un polígono, porque su borde es curvo.</p><p><b>Actividad</b>: busca en tu nombre letras con líneas rectas, como la L, y letras con curvas, como la O.</p>`,
        L6.filas("Líneas", [["recta", "regla", cAZ], ["curva", "arco iris", cVE], ["quebrada", "zigzag", cRO], ["mixta", "letra D", cNA]]),
        ["4EPqwC0i2g8", "POCOYÓ en ESPAÑOL - Aprende Las FIGURAS GEOMÉTRICAS", "Pocoyó Español - Canal Oficial", 20237256]],
    ],
    "Cuadrado y rectángulo": [
      ["Más polígonos y el círculo", `<p>Además del triángulo, el cuadrado y el rectángulo, hay más <mark>polígonos</mark>. Su nombre depende del número de lados:</p><ul><li>El <b>pentágono</b> tiene <b>5</b> lados. Mira la forma de una casita dibujada.</li><li>El <b>hexágono</b> tiene <b>6</b> lados. Las celdas de un panal de abejas son hexágonos.</li><li>El <b>octógono</b> tiene <b>8</b> lados, como la señal de STOP.</li></ul><p>El <mark>círculo</mark> es diferente: no tiene lados ni vértices. Su borde se llama <b>circunferencia</b>.</p><ul><li>La <b>circunferencia</b> es solo la línea, como un aro o un anillo.</li><li>El <b>círculo</b> es la línea y todo lo de dentro, como una moneda o una galleta.</li></ul><p><b>Actividad</b>: dibuja un panal de abejas con hexágonos y colorea cada celda.</p>`,
        H6.dos("Redondo", ["ARO", ["circunferencia", "solo la línea", "un aro", "un anillo"], cAZ], ["CÍRCULO", ["línea y dentro", "una moneda", "una galleta"], cVE])],
    ],
    "Cubo y prisma": [
      ["Caras, aristas y vértices", `<p>Los cuerpos geométricos con caras planas tienen tres partes:</p><ul><li><mark>Caras</mark>: las superficies planas. Son polígonos.</li><li><mark>Aristas</mark>: las líneas donde se juntan dos caras.</li><li><mark>Vértices</mark>: las esquinas donde se juntan varias aristas.</li></ul><p>Vamos a contar las del <b>cubo</b>, como un dado:</p><ul><li>Tiene <b>6 caras</b>, todas cuadradas.</li><li>Tiene <b>12 aristas</b>.</li><li>Tiene <b>8 vértices</b>.</li></ul><p>Una caja de zapatos, que es un prisma, también tiene 6 caras, 12 aristas y 8 vértices, pero sus caras son rectángulos.</p><p>Para no equivocarte al contar, marca con un gomet cada vértice que ya has contado.</p><p><b>Actividad</b>: con plastilina y palillos, construye un cubo: las bolitas son los vértices y los palillos, las aristas.</p>`,
        L6.filas("El cubo", [["caras", "6", cNA], ["aristas", "12", cAZ], ["vértices", "8", cRO], ["caras de", "cuadrados", cVE]]),
        ["4G4aOfXFwoc", "PARTES DE UN PRISMA Super fácil - Cara, vértice, arista, base", "Daniel Carreón", 2418682]],
    ],
    "Esfera, cilindro y cono": [
      ["Cuerpos que ruedan y cuerpos que no", `<p>Los cuerpos geométricos se pueden dividir en dos grupos:</p><ul><li><mark>Cuerpos redondos</mark>: tienen alguna superficie curva. Son la <b>esfera</b>, el <b>cilindro</b> y el <b>cono</b>. Pueden <b>rodar</b>.</li><li><mark>Poliedros</mark>: todas sus caras son planas. Son el <b>cubo</b>, el <b>prisma</b> y la <b>pirámide</b>. No ruedan: se deslizan o se quedan quietos.</li></ul><p>Pero cada cuerpo redondo rueda a su manera:</p><ul><li>La esfera rueda hacia <b>cualquier lado</b>.</li><li>El cilindro rueda en <b>línea recta</b> si está tumbado. De pie, no rueda.</li><li>El cono rueda <b>en círculo</b>, alrededor de su punta.</li></ul><p>Por eso las ruedas de los coches y las pelotas son redondas, y los ladrillos y las cajas, que deben estar quietos, tienen caras planas.</p><p><b>Actividad</b>: haz rodar una pelota, una lata y un gorro de cumpleaños y observa su camino.</p>`,
        H6.dos("Cuerpos", ["REDONDOS", ["esfera", "cilindro, cono", "ruedan"], cVE], ["POLIEDROS", ["cubo, prisma", "pirámide", "no ruedan"], cRO])],
    ],
  },
  final: [
    ["Figuras en el arte y en la ciudad", `<p>Los artistas y los arquitectos usan <mark>figuras y cuerpos geométricos</mark> en sus obras.</p><ul><li>El pintor <b>Kandinsky</b> llenaba sus cuadros de círculos de colores, triángulos y líneas.</li><li>El pintor <b>Mondrian</b> pintaba cuadrados y rectángulos rojos, azules y amarillos separados por líneas negras.</li><li>Las <b>pirámides de Egipto</b> son enormes pirámides de piedra construidas hace miles de años.</li></ul><p>En tu ciudad también hay geometría:</p><ul><li>Los edificios suelen ser <b>prismas</b>.</li><li>Las farolas y las columnas son <b>cilindros</b>.</li><li>Las señales de tráfico son <b>triángulos</b>, <b>círculos</b>, cuadrados y octógonos.</li><li>Las cúpulas de algunas iglesias son media <b>esfera</b>.</li></ul><p><b>Actividad</b>: pinta un cuadro al estilo de Mondrian con rectángulos de colores y líneas negras.</p>`,
      L6.filas("Arte", [["Kandinsky", "círculos", cAZ], ["Mondrian", "rectángulos", cRO], ["Egipto", "pirámides", cNA], ["farola", "cilindro", cVE]])],
    ["Repaso: el robot Geómetro", `<p>Repasamos con el <mark>robot</mark> de Irene y Marcos:</p><ul><li>El cuerpo, una caja de cereales: <b>prisma</b>.</li><li>La cabeza, una caja cuadrada: <b>cubo</b>.</li><li>Los brazos y las piernas, rollos y botes: <b>cilindros</b>.</li><li>El sombrero: <b>cono</b>.</li><li>Los ojos: <b>círculos</b>. La boca: un <b>rectángulo</b>.</li></ul><p>Preguntas:</p><ul><li>¿Cuántos cilindros tiene el robot? 2 brazos + 2 piernas = <b>4</b>.</li><li>¿Cuántas caras tiene su cabeza? <b>6</b>, como todos los cubos.</li><li>¿Qué partes podrían rodar? Los cilindros y el cono.</li><li>¿Qué figuras planas tiene? Círculos y un rectángulo.</li></ul><p><b>Actividad</b>: construye tu propio robot con envases y escribe el nombre de cada cuerpo geométrico en una etiqueta.</p>`,
      H6.rueda("Robot", "ROBOT", [["prisma", cNA], ["cubo", cAZ], ["cilindro", cVE], ["cono", cRO]])],
  ],
  ejemplos: [
    ["¿Cuántas aristas tiene un dado?", ["Cuento las de arriba: 4.", "Las de abajo: 4. Las de los lados: 4."], "12 aristas."],
    ["¿Es el círculo un polígono?", ["Los polígonos tienen lados rectos.", "El círculo tiene borde curvo."], "No."],
  ],
  errores: ["Confundir la circunferencia (solo la línea) con el círculo.", "Pensar que el cilindro rueda de pie."],
  ejercicios: [
    ["b", "¿Cuántos lados tiene un hexágono?", "6."],
    ["b", "¿Qué figura tiene la señal de STOP?", "Un octógono."],
    ["b", "¿Cuántas caras tiene un cubo?", "6."],
    ["b", "Di un cuerpo que rueda.", "Esfera, cilindro o cono."],
    ["b", "¿Cómo se llama una línea en zigzag?", "Línea quebrada."],
    ["m", "¿Cuántos vértices tiene una caja de zapatos?", "8."],
    ["m", "¿En qué se diferencian el círculo y la circunferencia?", "La circunferencia es solo el borde; el círculo incluye lo de dentro."],
    ["m", "¿Cómo rueda un cono?", "En círculo, alrededor de su punta."],
    ["m", "Nombra dos poliedros.", "Cubo, prisma o pirámide."],
    ["m", "¿Qué cuerpo es una farola?", "Un cilindro."],
    ["a", "En la lectura, ¿qué cuerpo geométrico es el sombrero del robot?", "Un cono."],
    ["a", "¿Por qué las ruedas son redondas y los ladrillos tienen caras planas?", "Las ruedas deben rodar; los ladrillos, estar quietos."],
    ["a", "¿Cuántas figuras planas tiene la cara del robot? ¿Cuáles?", "3: dos círculos y un rectángulo."],
    ["a", "Describe un cuadro de Mondrian.", "Rectángulos y cuadrados de colores con líneas negras."],
  ],
  quiz: [
    ["Un pentágono tiene…", ["5 lados", "6 lados", "8 lados"], "Polígonos."],
    ["Las esquinas de un cuerpo se llaman…", ["vértices", "caras", "aristas"], "Partes."],
    ["Un cubo tiene…", ["12 aristas", "6 aristas", "8 aristas"], "Contar."],
    ["Rueda hacia cualquier lado la…", ["esfera", "pirámide", "caja"], "Rodar."],
    ["La línea en zigzag es…", ["quebrada", "curva", "recta"], "Líneas."],
  ],
  examen: [
    ["En la lectura, ¿de qué son los brazos del robot?", ["rollos de papel", "botes de patatas", "cajas"], "Lectura."],
    ["¿Cuántos cilindros tiene el robot?", ["4", "2", "6"], "Repaso."],
  ],
  tarjetas: [
    ["Cubo", "6 caras, 12 aristas y 8 vértices."],
    ["Redondos y poliedros", "Los redondos ruedan; los poliedros, no."],
  ],
  glosario: [
    ["Línea recta", "Línea que no se tuerce."],
    ["Línea curva", "Línea que se tuerce poco a poco."],
    ["Polígono", "Figura plana de lados rectos."],
    ["Hexágono", "Polígono de 6 lados."],
    ["Circunferencia", "Línea curva cerrada y redonda."],
    ["Círculo", "Figura redonda con su interior."],
    ["Cara", "Superficie plana de un cuerpo."],
    ["Arista", "Línea donde se juntan dos caras."],
    ["Vértice", "Esquina de una figura o cuerpo."],
    ["Poliedro", "Cuerpo con todas sus caras planas."],
  ],
  situacion: {
    titulo: "Museo de la geometría",
    reto: "La clase monta un museo con robots de envases, cuadros geométricos y fotos de figuras en el barrio.",
    pasos: ["Recoger envases y clasificarlos en redondos y poliedros.", "Construir un robot y etiquetar cada cuerpo.", "Pintar un cuadro con figuras planas al estilo de un artista.", "Contar caras, aristas y vértices de tres cuerpos."],
    producto: "Una exposición con robots, cuadros y fichas de cuerpos geométricos.",
    evaluacion: ["Nombra figuras planas y polígonos.", "Distingue círculo y circunferencia.", "Cuenta caras, aristas y vértices.", "Clasifica cuerpos que ruedan y que no."],
  },
});
