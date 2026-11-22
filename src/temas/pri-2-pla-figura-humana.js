// Educación Plástica 2º de Primaria: dibujar la figura humana. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, flechaR, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
// Figura de óvalos (con volumen). (x, y) = pies.
const ovalos = (x, y, c = P.azul, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" stroke="var(--ink)" stroke-width="1.5"><ellipse cx="0" cy="-118" rx="13" ry="15" fill="${P.piel}"/><rect x="-4" y="-104" width="8" height="6" fill="${P.piel}"/><ellipse cx="0" cy="-76" rx="17" ry="24" fill="${c}"/><ellipse cx="-24" cy="-78" rx="6" ry="20" transform="rotate(15 -24 -78)" fill="${c}"/><ellipse cx="24" cy="-78" rx="6" ry="20" transform="rotate(-15 24 -78)" fill="${c}"/><ellipse cx="-8" cy="-28" rx="7" ry="26" fill="${P.gris}"/><ellipse cx="8" cy="-28" rx="7" ry="26" fill="${P.gris}"/><ellipse cx="-10" cy="-1" rx="9" ry="4" fill="${P.negro}"/><ellipse cx="10" cy="-1" rx="9" ry="4" fill="${P.negro}"/></g>`;
const cara = (x, y, boca, cejas = "") => `<g transform="translate(${x} ${y})"><circle r="26" fill="${P.piel}" stroke="var(--ink)" stroke-width="2"/><circle cx="-9" cy="-4" r="3" fill="var(--ink)"/><circle cx="9" cy="-4" r="3" fill="var(--ink)"/>${cejas}<path d="${boca}" stroke="var(--ink)" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>`;

module.exports = {
  materia: "Educación Plástica",
  curso: "2-primaria",
  titulo: "Dibujar la figura humana",
  minutos: 25,
  objetivos: ["Dibujar una persona completa con cabeza, tronco y extremidades", "Respetar el tamaño de cada parte del cuerpo y las articulaciones", "Dibujar caras con emociones y personas en movimiento"],
  claves: ["figura humana", "cabeza", "tronco", "extremidades", "articulaciones", "proporción", "expresión", "movimiento"],
  pregunta: {
    texto: "Cuando dibujas a tu familia, ¿cómo haces que cada uno se parezca a quien es?",
    respuesta: "Fíjate en el <mark>tamaño</mark>, el <mark>pelo</mark>, la <mark>ropa</mark> y la cara de cada uno. Un adulto es más alto que un niño y cada persona tiene sus detalles.",
  },
  bloques: [
    {
      html: `<h3>Las partes del cuerpo</h3><p>Para dibujar a una persona necesitamos <mark>tres partes</mark>.</p><p>Arriba está la <b>cabeza</b>. En el centro está el <b>tronco</b>, que es el pecho y la barriga. Y salen las <b>extremidades</b>: dos brazos y dos piernas.</p><p>No olvides el <b>cuello</b>, que une la cabeza con el tronco. Y al final de los brazos y las piernas van las manos y los pies.</p>`,
      svg: svg("Una figura de óvalos con flechas que señalan cabeza, tronco, brazos y piernas", `${ovalos(110, 166, P.azul)}${flechaR(170, 48, 128, 48)}${etq(205, 52, "cabeza")}${flechaR(170, 92, 132, 92)}${etq(205, 96, "tronco")}${flechaR(52, 82, 82, 88)}${etq(32, 76, "brazo")}${flechaR(170, 140, 122, 140)}${etq(205, 144, "pierna")}`),
    },
    {
      html: `<h3>Del palito al volumen</h3><p>En 1º dibujábamos <mark>monigotes de palitos</mark>. Ahora damos un paso más.</p><p>Primero hacemos el esqueleto con palitos. Después lo rellenamos con <b>óvalos</b>, que son círculos alargados.</p><p>Un óvalo grande para el tronco y óvalos finos para brazos y piernas. Así la figura tiene <b>volumen</b>, como una persona de verdad. ¡Parece que se puede tocar!</p>`,
      svg: svg("Paso a paso: un monigote de palitos y la misma figura rellenada con óvalos", `${nino(70, 160, { c: "var(--ink)", s: 1.6 })}${flechaR(106, 100, 146, 100, "var(--muted)")}${ovalos(190, 166, P.verde, 1)}${etq(70, 26, "1. palitos")}${etq(190, 26, "2. óvalos")}`),
      video: V("pl3b"),
    },
    {
      html: `<h3>¿Cuánto mide cada parte?</h3><p>Las partes del cuerpo tienen <mark>un tamaño</mark> que debemos respetar. Eso se llama proporción.</p><p>La cabeza de un adulto cabe unas <b>siete veces</b> en su cuerpo. La de un niño, unas cinco o seis.</p><p>Los brazos son largos: las manos llegan a la mitad del muslo. Las piernas son la mitad del cuerpo. ¡No dibujes brazos cortitos!</p>`,
      svg: svg("Un adulto y un niño junto a una regla de cabezas: el adulto mide siete cabezas", `${[0, 1, 2, 3, 4, 5, 6].map((i) => `<ellipse cx="40" cy="${154 - i * 20 - 10}" rx="7" ry="9.5" fill="none" stroke="var(--muted)" stroke-width="1.5"/>`).join("")}${ovalos(110, 160, P.morado, 1.06)}${ovalos(186, 160, P.naranja, 0.74)}${etq(40, 172, "7 cabezas", "var(--muted)", 11)}${etq(110, 176, "adulto")}${etq(186, 176, "niño")}`),
    },
    {
      html: `<h3>Las articulaciones</h3><p>Nuestro cuerpo se dobla por <mark>las articulaciones</mark>.</p><p>Los brazos se doblan por el <b>codo</b> y por la <b>muñeca</b>. Las piernas se doblan por la <b>rodilla</b> y por el <b>tobillo</b>.</p><p>Al dibujar, marca estos puntos con un pequeño círculo. Así podrás doblar los brazos y las piernas en el sitio correcto. ¡Los brazos no se doblan como un fideo!</p>`,
      svg: svg("Un monigote con círculos en los hombros, codos, caderas y rodillas", `${nino(130, 160, { c: "var(--pen)", pose: "corre", s: 2 })}${[[130, 68], [102, 88], [154, 84], [130, 112], [102, 152], [150, 136]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="${P.rojo}"/>`).join("")}${etq(60, 90, "codo", P.rojo)}${etq(196, 140, "rodilla", P.rojo)}${suelo(162)}`),
    },
    {
      html: `<h3>La cara y sus emociones</h3><p>En la cara se ve <mark>cómo se siente</mark> una persona.</p><p>Los ojos van en la mitad de la cabeza, no arriba del todo. La nariz va entre los ojos y la boca.</p><p>Si cambias la boca y las cejas, cambias la emoción. Boca hacia arriba: alegre. Boca hacia abajo: triste. Cejas juntas: enfadado. Boca redonda: sorprendido.</p>`,
      svg: svg("Cuatro caras: alegre, triste, enfadada y sorprendida", `${cara(40, 70, "M-10 8 q10 10 20 0")}${cara(100, 70, "M-10 14 q10 -10 20 0")}${cara(160, 70, "M-9 12 h18", `<path d="M-15 -14 l10 5 M15 -14 l-10 5" stroke="var(--ink)" stroke-width="2.5"/>`)}${cara(220, 70, "M-4 10 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0")}${etq(40, 120, "alegre")}${etq(100, 120, "triste")}${etq(160, 120, "enfadado")}${etq(220, 120, "sorpresa")}${etq(130, 160, "Cambia la boca y las cejas", "var(--pen)", 14)}`),
    },
    {
      html: `<h3>Personas en movimiento</h3><p>Las personas <mark>no siempre están quietas</mark>. Corren, saltan, bailan o se sientan.</p><p>Para dibujar movimiento, inclina el tronco y dobla brazos y piernas por las articulaciones.</p><p>Si alguien corre, una pierna va delante y otra detrás. Si salta, los brazos van hacia arriba. Mira a tus compañeros en el recreo y fíjate en sus posturas.</p>`,
      svg: svg("Tres niños en movimiento: uno corre, otro salta y otro baila", `${nino(50, 150, { c: P.rojo, pose: "corre", s: 1.4 })}${nino(130, 140, { c: P.azul, pose: "salta", s: 1.4, nina: true })}${nino(210, 150, { c: P.verde, pose: "baila", s: 1.4 })}${suelo(152)}${etq(50, 172, "corre")}${etq(130, 172, "salta")}${etq(210, 172, "baila")}`),
    },
    {
      html: `<h3>Detalles que dan vida</h3><p>Cuando la figura está hecha, añadimos <mark>los detalles</mark>.</p><p>El pelo puede ser largo, corto, rizado o liso. La ropa tiene colores, rayas o lunares. Puedes poner gafas, un gorro o una mochila.</p><p>Los detalles hacen que cada persona sea <b>única</b>. Dibuja a alguien de tu familia y añade algo que le guste: un libro, un balón o un instrumento.</p>`,
      svg: svg("Dos personas con detalles: una niña con coletas y vestido de lunares, y un abuelo con gafas y bastón", `${ovalos(80, 162, P.rosa, 0.95)}${[[72, 84], [86, 96], [74, 106], [88, 76]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="${P.blanco}"/>`).join("")}<path d="M66 44 q-8 14 -2 22 M94 44 q8 14 2 22" stroke="${P.marron}" stroke-width="5" fill="none"/>${ovalos(180, 162, P.marron, 0.95)}<circle cx="175" cy="51" r="5" fill="none" stroke="var(--ink)" stroke-width="2"/><circle cx="187" cy="51" r="5" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M212 160 V100 q0 -8 -8 -8" stroke="${P.marron}" stroke-width="4" fill="none"/>`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Dibujar personas sirve para <mark>contar historias</mark> sin palabras.</p><p>Los ilustradores de cuentos dibujan a los personajes. Los dibujantes de cómics hacen viñetas con personas que hablan y se mueven.</p><p>Los diseñadores de ropa dibujan figuras para inventar vestidos. ¡Y tú puedes hacer un cómic de tu fin de semana!</p>`,
      svg: svg("Una viñeta de cómic con dos niños hablando y un bocadillo", `<rect x="14" y="14" width="232" height="152" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/>${nino(80, 150, { c: P.azul, s: 1.3 })}${nino(180, 150, { c: P.rojo, s: 1.3, nina: true, pose: "brazos" })}<rect x="104" y="26" width="120" height="36" rx="16" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M160 62 l-6 12 l14 -12" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${etq(164, 50, "¡Vamos a jugar!", "var(--ink)", 12)}`),
    },
    {
      html: `<h3>Jugamos al maniquí</h3><p>Un niño hace de <mark>maniquí</mark> y se pone en una postura: corriendo, sentado o con los brazos arriba.</p><p>Se queda quieto como una estatua durante un minuto. Los demás lo dibujan rápido, con palitos y óvalos.</p><p>Después cambiamos de modelo. Al final, comparamos: ¿se reconoce la postura en todos los dibujos?</p>`,
      svg: svg("Un niño posa como estatua con los brazos arriba y otro lo dibuja en un papel", `${nino(70, 150, { c: P.morado, pose: "arriba", s: 1.6 })}<rect x="150" y="50" width="90" height="100" rx="4" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${nino(195, 140, { c: "var(--ink)", pose: "arriba", s: 1 })}${suelo(152)}${etq(70, 172, "modelo")}${etq(195, 172, "mi dibujo")}`),
    },
  ],
  figura: {
    titulo: "Dibujar la figura humana paso a paso",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Tres pasos para dibujar una persona: palitos, óvalos y detalles"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${nino(120, 250, { c: "var(--ink)", s: 2.4 })}${ovalos(320, 262, P.verde, 1.45)}${ovalos(520, 262, P.azul, 1.45)}<path d="M500 88 q0 -26 20 -26 q20 0 20 26 q-6 -12 -20 -12 q-14 0 -20 12z" fill="${P.marron}"/>${[[514, 160], [528, 176], [512, 186]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="${P.blanco}"/>`).join("")}${rot(120, 288, "1. Palitos", { size: 16 })}${rot(320, 288, "2. Óvalos", { size: 16 })}${rot(520, 288, "3. Detalles", { size: 16 })}${flechaR(196, 150, 248, 150, "var(--muted)")}${flechaR(396, 150, 448, 150, "var(--muted)")}</svg>`,
  },
  video: V("pl3v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Dibuja a una persona saludando con la mano.",
      pasos: ["Haz el esqueleto de palitos.", "Un brazo sube y se dobla por el codo.", "Rellena con óvalos y añade la cara alegre."],
      resultado: "Una figura con un brazo levantado y una sonrisa." },
    { enunciado: "Dibuja a tu abuelo más alto que tú.",
      pasos: ["El adulto mide unas siete cabezas.", "El niño, unas cinco o seis.", "Dibuja los dos sobre la misma línea de suelo."],
      resultado: "El abuelo es más alto y su cabeza es más pequeña en proporción." },
    { enunciado: "Haz una cara sorprendida.",
      pasos: ["Ojos en la mitad de la cabeza.", "Cejas levantadas.", "Boca redonda, como una O."],
      resultado: "Una cara con la boca en O y las cejas altas." },
  ],
  errores: [
    "Olvidar el cuello: la cabeza parece pegada al tronco.",
    "Dibujar los brazos muy cortos: las manos llegan a la mitad del muslo.",
    "Poner los ojos arriba del todo: van en la mitad de la cabeza.",
    "Doblar brazos y piernas por cualquier sitio: se doblan por codos y rodillas.",
  ],
  ejercicios: [
    { q: "¿Cuáles son las tres partes del cuerpo que dibujamos?", sol: "Cabeza, tronco y extremidades." },
    { q: "¿Qué parte une la cabeza y el tronco?", sol: "El cuello." },
    { q: "¿Qué forma usamos para dar volumen a la figura?", sol: "Óvalos (círculos alargados)." },
    { q: "¿Por dónde se dobla el brazo?", sol: "Por el codo (y la muñeca)." },
    { q: "¿Por dónde se dobla la pierna?", sol: "Por la rodilla (y el tobillo)." },
    { q: "¿Dónde van los ojos en la cara?", sol: "En la mitad de la cabeza." },
    { q: "¿Cómo dibujas una cara triste?", sol: "Con la boca hacia abajo." },
    { q: "Dibuja a un niño corriendo.", sol: "Una pierna delante, otra detrás y los brazos doblados." },
    { q: "Dibuja a alguien de tu familia con un detalle especial.", sol: "Respuesta libre: por ejemplo, mamá con gafas y un libro." },
    { q: "Haz un cómic de dos viñetas con personas.", sol: "Respuesta libre: dos cuadros con personajes y bocadillos." },
  ],
  quiz: [
    { q: "Las extremidades son…", o: ["brazos y piernas", "cabeza y cuello", "ojos y boca"], a: 0, e: "Brazos y piernas." },
    { q: "El tronco es…", o: ["el pecho y la barriga", "la cabeza", "los pies"], a: 0, e: "La parte central." },
    { q: "Para dar volumen usamos…", o: ["óvalos", "líneas quebradas", "puntos"], a: 0, e: "Óvalos." },
    { q: "La pierna se dobla por…", o: ["el codo", "la rodilla", "el hombro"], a: 1, e: "Rodilla." },
    { q: "El brazo se dobla por…", o: ["el codo", "la rodilla", "el tobillo"], a: 0, e: "Codo." },
    { q: "Los ojos van…", o: ["arriba del todo", "en la mitad de la cabeza", "en la barbilla"], a: 1, e: "En la mitad." },
    { q: "Una boca hacia arriba expresa…", o: ["tristeza", "alegría", "enfado"], a: 1, e: "Alegría." },
    { q: "Las manos llegan…", o: ["a la cintura", "a la mitad del muslo", "a los pies"], a: 1, e: "Los brazos son largos." },
    { q: "Si alguien salta, sus brazos suelen ir…", o: ["hacia arriba", "pegados", "en los bolsillos"], a: 0, e: "Hacia arriba." },
    { q: "La cabeza de un adulto cabe en su cuerpo unas…", o: ["dos veces", "siete veces", "veinte veces"], a: 1, e: "Unas siete." },
  ],
  examen: [
    { q: "¿Qué une la cabeza con el tronco?", o: ["el cuello", "el hombro", "la cintura"], a: 0, e: "El cuello." },
    { q: "Unas cejas juntas y una boca recta expresan…", o: ["enfado", "alegría", "sueño"], a: 0, e: "Enfado." },
    { q: "Lo primero al dibujar una figura es…", o: ["el esqueleto de palitos", "los botones", "el pelo"], a: 0, e: "Primero la estructura." },
    { q: "Los detalles sirven para…", o: ["que cada persona sea única", "borrar", "hacerla más pequeña"], a: 0, e: "Dan personalidad." },
  ],
  feynman: ["Qué partes tiene una figura humana", "Cómo pasar de palitos a óvalos", "Cómo dibujar emociones y movimiento"],
  mapa: mapa("FIGURA HUMANA", "var(--pri)", [
    ["Partes", "cabeza, tronco, extremidades", "#1e88e5"],
    ["Proporción", "7 cabezas un adulto", "#e53935"],
    ["Articulaciones", "codos, rodillas", "#43a047"],
    ["Expresión", "caras y movimiento", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Partes del cuerpo", "Cabeza, tronco y extremidades"],
    ["Extremidades", "Dos brazos y dos piernas"],
    ["Óvalos", "Dan volumen a la figura"],
    ["Proporción", "El tamaño de cada parte respecto al cuerpo"],
    ["Adulto", "Mide unas siete cabezas"],
    ["Articulaciones", "Codos, muñecas, rodillas y tobillos"],
    ["Cara alegre", "Boca hacia arriba"],
    ["Movimiento", "Inclinar el tronco y doblar brazos y piernas"],
  ],
  familias: [
    "Posad por turnos como estatuas y dibujaos unos a otros.",
    "Haced un retrato de toda la familia, cada uno con su tamaño y sus detalles.",
    "Jugad a poner caras (alegre, triste, enfadado) y dibujadlas.",
    "Inventad juntos un cómic corto con dos o tres viñetas.",
  ],
  profesores: PROF("Educación Plástica y Visual: representación de la figura humana; esquema corporal en el dibujo; proporciones básicas; articulaciones y movimiento; expresión facial", ["Dibujo de modelo vivo en poses de un minuto.", "Esqueleto con palitos y relleno con óvalos.", "Ficha de emociones: cambiar boca y cejas."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer las figuras en movimiento de Keith Haring", "Dibujar siluetas y sombras", "Comparar figuras humanas de distintos artistas", "Dibujar grupos de personas y personajes con su ropa"],
  lectura: { titulo: "El dibujo de la familia", html: `<p>La maestra pidió a la clase que dibujara a su familia. Lía se puso muy contenta y empezó enseguida.</p><p>Dibujó a su padre con un círculo para la cabeza y un palito para el cuerpo. Después, a su madre, a su abuela y a su hermano pequeño. Todos eran palitos.</p><p>Cuando terminó, lo miró y frunció el ceño.</p><p>—Parecen todos iguales —dijo—. ¡Y mi padre es muy alto y mi hermano es muy bajito!</p><p>La maestra se acercó.</p><p>—Fíjate en lo que hace especial a cada uno —le sugirió.</p><p>Lía empezó de nuevo. Al padre lo dibujó <b>alto</b>, con <b>gafas</b> y su jersey de rayas. A la madre, con el <b>pelo rizado</b> y los brazos abiertos, porque siempre da abrazos. La abuela llevaba su <b>bastón</b> y su chal morado. Su hermano, <b>pequeñito</b>, saltaba con los brazos hacia arriba.</p><p>Esta vez, cuando miró el dibujo, sonrió. Ahora sí era su familia.</p>` },
  tras: {
    "Personas en movimiento": [
      ["Keith Haring, figuras que bailan", `<p><mark>Keith Haring</mark> fue un artista estadounidense que dibujaba figuras humanas muy sencillas, pero llenas de <b>movimiento</b>.</p><ul><li>Sus personajes no tienen cara: solo una <b>silueta</b> con un contorno grueso.</li><li>Los rellenaba con un <b>color liso</b> y muy vivo: rojo, amarillo, azul, verde.</li><li>Alrededor dibujaba <b>rayitas</b> que indican que se mueven o vibran.</li><li>Sus figuras <b>bailan, saltan, se abrazan</b> y juegan.</li><li>Pintaba en el metro, en paredes enormes y en hospitales para niños.</li></ul><p>Haring quería que el arte fuera para <b>todo el mundo</b>, no solo para los museos.</p><p><b>Actividad</b>: dibuja tres figuras al estilo Haring haciendo tres movimientos distintos y añade rayitas de movimiento.</p>`,
        L6.filas("Haring", [["contorno", "grueso", cMO], ["relleno", "color liso", cRO], ["rayitas", "movimiento", cNA], ["sin cara", "silueta", cAZ]]),
        ["E-Lsw0ba1LM", "Biografía de Keith Haring: arte para niños", "Dentro del arte", 40984]],
    ],
    "Del palito al volumen": [
      ["Siluetas y sombras", `<p>Una <mark>silueta</mark> es la forma de una figura rellena de un solo color, sin detalles por dentro. Es como una sombra.</p><ul><li>Pon a un compañero de lado, delante de una pared, y enciende una lámpara: su <b>sombra</b> aparece en la pared.</li><li>Pega un papel en la pared y dibuja el <b>contorno</b> de la sombra.</li><li>Recórtalo y pégalo sobre una cartulina de otro color.</li></ul><p>Así hacían retratos hace muchos años, antes de que existiera la fotografía.</p><p>También podemos tumbarnos sobre papel continuo y que un compañero dibuje nuestro <b>contorno</b> a tamaño real. ¡Así vemos lo grandes que somos!</p><p>Con las manos también podemos hacer <b>sombras chinescas</b>: un perro, un pájaro o un conejo.</p><p><b>Actividad</b>: dibuja tu contorno a tamaño real en papel continuo y píntalo con tu ropa de hoy.</p>`,
        H6.flujo("Silueta", ["lámpara|sombra", "papel|contorno", "recortar|forma", "pegar|cartulina"], cAZ)],
    ],
    "¿Cuánto mide cada parte?": [
      ["Figuras de muchos artistas", `<p>Cada artista dibuja o esculpe a las personas a su <mark>manera</mark>:</p><ul><li><b>Botero</b>, de Colombia, hace figuras muy <b>redondas</b> y grandes, con mucho volumen.</li><li><b>Giacometti</b>, de Suiza, hacía esculturas <b>muy delgadas</b> y alargadas, como palitos.</li><li><b>Picasso</b> dibujaba a veces las caras con los ojos de frente y la nariz de lado.</li><li>En el <b>antiguo Egipto</b>, pintaban la cabeza y las piernas de lado, pero el cuerpo de frente.</li></ul><p>Ninguna forma es incorrecta: los artistas cambian las proporciones a propósito para expresar algo.</p><p>Cuando queremos dibujar a alguien de forma <b>realista</b>, en cambio, sí miramos bien cuánto mide cada parte.</p><p><b>Actividad</b>: dibuja a la misma persona dos veces: una muy redonda, como Botero, y otra muy alargada, como Giacometti.</p>`,
        H6.dos("Estilos", ["REDONDAS", ["Botero", "volumen", "grandes"], cNA], ["DELGADAS", ["Giacometti", "alargadas", "palitos"], cVE])],
    ],
    "Detalles que dan vida": [
      ["La ropa cuenta quién es", `<p>La <mark>ropa</mark> y los objetos que lleva una persona nos dan pistas sobre quién es o qué hace:</p><ul><li>Un <b>bombero</b>: casco, traje con rayas brillantes y manguera.</li><li>Una <b>médica</b>: bata blanca y fonendoscopio.</li><li>Un <b>cocinero</b>: gorro alto y delantal.</li><li>Una <b>futbolista</b>: camiseta con número, pantalón corto y botas.</li><li>Un <b>astronauta</b>: traje grande y casco con cristal.</li></ul><p>También nos dicen el <b>tiempo</b> que hace: abrigo y bufanda en invierno; bañador y gorra en verano.</p><p>Al dibujar la ropa, piensa en sus <b>dibujos</b>: rayas, cuadros, lunares o flores. ¡Dan mucha vida!</p><p><b>Actividad</b>: dibuja a una persona con la ropa de la profesión que te gustaría tener de mayor.</p>`,
        L6.filas("Oficios", [["bombero", "casco", cRO], ["médica", "bata", cAZ], ["cocinero", "gorro", cNA], ["astronauta", "traje", cMO]])],
    ],
  },
  final: [
    ["Dibujar un grupo de personas", `<p>Cuando dibujamos a <mark>varias personas</mark> juntas, como una familia o un equipo, hay algunos trucos:</p><ul><li>Dibuja a cada persona con su <b>tamaño real</b>: los adultos más altos, los niños más bajos.</li><li>Ponlas sobre la <b>misma línea de suelo</b> para que no parezca que flotan.</li><li>Si alguien está <b>delante</b>, tapa un poco a quien está detrás.</li><li>Las personas <b>lejanas</b> se dibujan más pequeñas y más arriba en el papel.</li><li>Haz que <b>interactúen</b>: que se den la mano, se miren o jueguen juntas.</li></ul><p>Así el dibujo cuenta una <b>historia</b>: no son personas sueltas, sino un grupo que hace algo junto.</p><p><b>Actividad</b>: dibuja a tu familia o a tus amigos haciendo algo juntos, como un pícnic.</p>`,
      H6.flujo("Grupo", ["tamaños|reales", "suelo|común", "delante|tapa", "juntos|historia"], cVE)],
    ["Repaso: el dibujo de la familia", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Lía dibujó primero a toda su familia con <b>palitos</b>.</li><li>Todos parecían <b>iguales</b>.</li><li>La maestra le dijo que buscara lo que hace <b>especial</b> a cada uno.</li><li>El padre: <b>alto</b>, con gafas y jersey de rayas.</li><li>La madre: <b>pelo rizado</b> y brazos abiertos.</li><li>La abuela: <b>bastón</b> y chal morado. El hermano: <b>pequeño</b> y saltando.</li></ul><p>Los detalles, el tamaño y la postura hacen que cada persona sea única en el dibujo.</p><p><b>Actividad</b>: dibuja a un compañero con un detalle que lo haga especial y pide a la clase que adivine quién es.</p>`,
      L6.filas("Lía", [["padre", "alto, gafas", cAZ], ["madre", "pelo rizado", cRO], ["abuela", "bastón", cMO], ["hermano", "salta", cVE]])],
  ],
  ejemplos: [
    ["¿Qué indican las rayitas de Haring?", ["Están alrededor de las figuras."], "Que se mueven."],
    ["¿Cómo dibujas a alguien que está lejos?", ["Pensar en el tamaño."], "Más pequeño y más arriba."],
  ],
  errores: ["Dibujar a todas las personas del mismo tamaño.", "Hacer flotar las figuras sin una línea de suelo."],
  ejercicios: [
    ["b", "¿De dónde era Keith Haring?", "De Estados Unidos."],
    ["b", "¿Qué es una silueta?", "Una figura rellena de un color, sin detalles."],
    ["b", "¿Cómo son las figuras de Botero?", "Redondas y grandes."],
    ["b", "¿Qué lleva un bombero?", "Casco, traje y manguera."],
    ["b", "Di un detalle de la abuela de Lía.", "Bastón o chal morado."],
    ["m", "¿Cómo son las esculturas de Giacometti?", "Muy delgadas y alargadas."],
    ["m", "¿Cómo pintaban el cuerpo en el antiguo Egipto?", "Cabeza y piernas de lado y cuerpo de frente."],
    ["m", "¿Dónde pintaba Keith Haring?", "En el metro, en paredes y en hospitales."],
    ["m", "¿Qué ropa indica que es invierno?", "Abrigo y bufanda."],
    ["m", "¿Cómo se hacían retratos antes de la fotografía?", "Con siluetas de sombras."],
    ["a", "En la lectura, ¿por qué Lía no estaba contenta?", "Porque todos parecían iguales."],
    ["a", "¿Qué hace que un dibujo de grupo cuente una historia?", "Que las personas hagan algo juntas."],
    ["a", "¿Por qué los artistas cambian las proporciones?", "Para expresar algo."],
    ["a", "Dibuja una figura saltando al estilo Haring.", "Respuesta libre."],
  ],
  quiz: [
    ["Las figuras de Haring no tienen…", ["cara", "brazos", "color"], "Haring."],
    ["Para hacer una sombra necesitas…", ["una luz", "agua", "plastilina"], "Siluetas."],
    ["Botero hace figuras…", ["redondas", "de palitos", "invisibles"], "Estilos."],
    ["El gorro alto es del…", ["cocinero", "bombero", "astronauta"], "Oficios."],
    ["Quien está delante… al de detrás", ["tapa", "borra", "agranda"], "Grupo."],
  ],
  examen: [
    ["En la lectura, ¿cómo dibujó Lía primero a su familia?", ["con palitos", "con plastilina", "con fotos"], "Lectura."],
    ["¿Qué hace el hermano en el dibujo final?", ["salta", "duerme", "come"], "Repaso."],
  ],
  tarjetas: [
    ["Keith Haring", "Figuras sin cara, contorno grueso, color liso y rayitas de movimiento."],
    ["Grupo de personas", "Tamaños reales, suelo común, delante tapa y hacen algo juntos."],
  ],
  glosario: [
    ["Silueta", "Forma rellena de un color."],
    ["Contorno", "Línea que rodea una figura."],
    ["Sombra", "Zona oscura que deja un cuerpo ante la luz."],
    ["Haring", "Artista de figuras que bailan."],
    ["Botero", "Artista de figuras redondas."],
    ["Giacometti", "Escultor de figuras delgadas."],
    ["Proporción", "Tamaño de cada parte respecto a las demás."],
    ["Postura", "Posición del cuerpo."],
    ["Fonendoscopio", "Aparato del médico para escuchar el corazón."],
    ["Realista", "Que se parece a la realidad."],
  ],
  situacion: {
    titulo: "Nuestra clase a tamaño real",
    reto: "Cada alumno dibuja su contorno a tamaño real, lo decora con su ropa y detalles, y formamos un gran mural de la clase.",
    pasos: ["Por parejas, dibujar el contorno del compañero en papel continuo.", "Pintar la ropa y añadir detalles personales.", "Recortar las figuras.", "Colocarlas juntas en el pasillo como un grupo."],
    producto: "Un mural de la clase a tamaño real.",
    evaluacion: ["Conoce a Keith Haring.", "Dibuja siluetas.", "Compara estilos de artistas.", "Dibuja grupos con detalles."],
  },
});
