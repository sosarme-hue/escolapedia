// Infantil 3 años · Crecimiento en armonía: Mi cuerpo. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, t, nene, PROF, FUENTES } = require("./_inf3a");
const { dibujos, lista, mural, vid } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "3-anos",
  titulo: "Mi cuerpo",
  minutos: 10,
  objetivos: ["Nombrar y señalar las partes principales del cuerpo", "Saber qué hacemos con los ojos, las manos y los pies", "Aprender que mi cuerpo es mío y lo cuido"],
  claves: ["cabeza", "cara", "brazos", "manos", "piernas", "pies"],
  pregunta: {
    texto: "¿Dónde tienes la nariz? ¿Y los pies? ¡Señálalos!",
    respuesta: "La nariz está en la <mark>cara</mark>, en la cabeza. Los pies están <mark>abajo</mark>, al final de las piernas.",
  },
  bloques: [
    {
      html: `<h3>Este es mi cuerpo</h3><p>Tengo un <mark>cuerpo</mark> que se mueve, siente y crece.</p><p>Arriba está la <b>cabeza</b>. En medio, la <b>barriga</b>. A los lados, los <b>brazos</b>. Abajo, las <b>piernas</b> y los pies. ¡Vamos a conocerlo!</p>`,
      svg: escena("Un niño con sus partes: cabeza, barriga, brazos y piernas", `${nene(130, 104, 1.15)}
        ${t(50, 48, "cabeza", 20, R)}<path d="M80 44 L108 40" stroke="var(--muted)" stroke-width="2"/>
        ${t(212, 90, "brazos", 20, N)}<path d="M180 86 L166 98" stroke="var(--muted)" stroke-width="2"/>
        ${t(50, 108, "barriga", 20, A)}<path d="M84 104 L112 104" stroke="var(--muted)" stroke-width="2"/>
        ${t(212, 150, "piernas", 20, V)}<path d="M176 146 L146 140" stroke="var(--muted)" stroke-width="2"/>`),
    },
    {
      html: `<h3>La cara</h3><p>En la cabeza está la <mark>cara</mark>.</p><p>Con los <b>ojos</b> veo. Con las <b>orejas</b> oigo. Con la <b>nariz</b> huelo. Con la <b>boca</b> como, hablo y sonrío.</p><p>¡Toca tu nariz! ¡Toca tus orejas! ¿Dónde tienes la boca?</p>`,
      svg: dibujos("Las partes de la cara: ojos, orejas, nariz y boca", [["ojo", "ojos", A], ["oreja", "orejas", N], ["nariz", "nariz", R], ["boca", "boca", V]], { titulo: "Mi cara" }),
    },
    {
      html: `<h3>Brazos y manos</h3><p>Tengo dos <mark>brazos</mark> y dos <mark>manos</mark>. Cada mano tiene cinco dedos.</p><p>Con las manos cojo, pinto, aplaudo y saludo.</p><p>¡Abre y cierra las manos! ¡Ahora aplaude tres veces! ¡Y di adiós con la mano!</p>`,
      svg: dibujos("Con las manos aplaudo, pinto y cojo la pelota", [["mano", "aplaudo", A], ["lapiz", "pinto", R], ["pelota", "cojo", V]], { titulo: "Con mis manos…" }),
      video: vid("8aZ-t8vZB4U", "Cabeza, hombro, rodilla y pie (baile)", "El Payaso Plim Plim", 208578869),
    },
    {
      html: `<h3>Piernas y pies</h3><p>Tengo dos <mark>piernas</mark> y dos <mark>pies</mark>.</p><p>Con ellos camino, corro, salto y bailo. Los pies también tienen dedos pequeñitos.</p><p>¡Mueve los dedos de los pies! ¿Sabes andar de puntillas? ¿Y saltar con los dos pies a la vez?</p>`,
      svg: dibujos("Con los pies camino, chuto la pelota y bailo", [["pie", "camino", A], ["pelota", "chuto", R], ["nina", "bailo", V]], { titulo: "Con mis pies…" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Mi cuerpo me sirve para <mark>jugar</mark>, comer, abrazar y aprender.</p><p>Por eso lo cuido: como bien, duermo, me muevo y me lavo.</p><p>Mi cuerpo es <b>mío</b>. Nadie lo toca si yo no quiero.</p>`,
      svg: lista("Mi cuerpo sirve para jugar y abrazar; lo cuido y es mío", [["Juego y me muevo", A], ["Abrazo a quien quiero", R], ["Lo cuido: es mío", V]], { titulo: "Mi cuerpo" }),
    },
    {
      html: `<h3>Jugamos a «Simón dice»</h3><p>Un adulto dice: «Simón dice: <mark>tócate la cabeza</mark>». ¡Y te la tocas!</p><p>«Simón dice: levanta un pie». ¡Arriba!</p><p>Si no dice «Simón dice», no te mueves. ¡Hay que escuchar muy atento!</p>`,
      svg: dibujos("Juego de Simón dice: tócate la cabeza", [["bocadillo", "Simón dice…", A], ["nino", "¡la cabeza!", R]], { titulo: "¡A jugar!", nota: "Escucha y muévete" }),
    },
  ],
  figura: {
    titulo: "Las partes de mi cuerpo",
    svg: mural("Mi cuerpo: la cabeza con la cara, los brazos con las manos, las piernas con los pies, y lo cuido", [["nino", "cabeza", "ojos, nariz y boca", R], ["mano", "brazos", "dos manos, diez dedos", N], ["pie", "piernas", "dos pies para andar", A], ["corazon", "lo cuido", "mi cuerpo es mío", V]], "Mi cuerpo"),
  },
  video: { ...vid("pc06kmPcNkk", "Las partes del cuerpo: canción infantil", "Doremila", 12525225), busqueda: "partes del cuerpo canción infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuántos ojos tienes?",
      pasos: ["Mírate en el espejo.", "Toca un ojo: uno. Toca el otro: dos."],
      resultado: "tengo dos ojos." },
    { enunciado: "¿Con qué saltamos?",
      pasos: ["Salta en el sitio.", "¿Qué parte toca el suelo? ¡Los pies!"],
      resultado: "saltamos con las piernas y los pies." },
  ],
  errores: [
    "Llamar «mano» a todo el brazo: el brazo es largo y la mano está al final.",
    "Ir demasiado deprisa: a esta edad basta con 4 o 5 partes bien aprendidas.",
    "Olvidar decirle que su cuerpo es suyo y que puede decir «no» a un contacto que no quiere.",
  ],
  ejercicios: [
    { q: "Ponte delante del espejo y señala: ojos, nariz, boca y orejas.", sol: "Para la familia: decid cada parte despacio; si duda, tocadla juntos." },
    { q: "Canta y baila «Cabeza, hombros, rodillas y pies».", sol: "Para la familia: id cada vez más rápido; es un juego, no un examen." },
    { q: "Dibuja tu mano: apóyala en un papel y un adulto la repasa.", sol: "Para la familia: después contad juntos los cinco dedos." },
    { q: "Aplaude dos veces y salta una vez.", sol: "Para la familia: inventad otras órdenes con manos y pies." },
    { q: "Toca la cabeza de tu peluche. ¿Dónde tiene las piernas?", sol: "Para la familia: nombrar las partes en un muñeco ayuda mucho." },
    { q: "Di una cosa que haces con la boca.", sol: "Para la familia: comer, hablar, cantar, sonreír, soplar… todas valen." },
  ],
  quiz: [
    { q: "¿Con qué vemos?", o: ["con los ojos", "con los pies", "con las orejas"], a: 0, e: "Vemos con los ojos." },
    { q: "¿Con qué oímos?", o: ["con la nariz", "con las orejas", "con las manos"], a: 1, e: "Oímos con las orejas." },
    { q: "¿Dónde están los pies?", o: ["arriba", "en la cara", "abajo"], a: 2, e: "Al final de las piernas." },
    { q: "¿Cuántos dedos tiene una mano?", o: ["cinco", "dos", "diez"], a: 0, e: "Cinco dedos." },
    { q: "¿Con qué olemos una flor?", o: ["con la boca", "con la nariz", "con el pie"], a: 1, e: "Con la nariz." },
    { q: "Mi cuerpo es…", o: ["de todos", "mío", "de nadie"], a: 1, e: "Es mío y lo cuido." },
  ],
  examen: [
    { q: "¿Con qué aplaudimos?", o: ["con las manos", "con las rodillas", "con la nariz"], a: 0, e: "Con las manos." },
    { q: "¿Qué está en la cara?", o: ["la boca", "el pie", "la rodilla"], a: 0, e: "La boca está en la cara." },
    { q: "¿Con qué caminamos?", o: ["con las orejas", "con los pies", "con los ojos"], a: 1, e: "Con piernas y pies." },
  ],
  feynman: ["Las partes del cuerpo", "Para qué sirven los ojos, las manos y los pies", "Que mi cuerpo es mío"],
  mapa: mapa("MI CUERPO", "var(--inf)", [
    ["Cabeza", "ojos, orejas, nariz, boca", R],
    ["Brazos", "manos con cinco dedos", N],
    ["Piernas", "pies para andar y saltar", A],
    ["Lo cuido", "mi cuerpo es mío", V],
  ], 220),
  tarjetas: [
    ["¿Con qué vemos?", "Con los ojos"],
    ["¿Con qué oímos?", "Con las orejas"],
    ["¿Con qué olemos?", "Con la nariz"],
    ["¿Con qué saltamos?", "Con las piernas y los pies"],
    ["¿Cuántos dedos tiene una mano?", "Cinco"],
    ["¿De quién es mi cuerpo?", "Mío"],
  ],
  familias: [
    "En el baño o al vestirle, nombrad las partes del cuerpo: «ahora la manga por el brazo».",
    "Jugad a «Simón dice» con órdenes sencillas: tócate la nariz, levanta un pie.",
    "Usad los nombres correctos de todas las partes, también las íntimas, con naturalidad.",
    "Enseñadle que puede decir «no» a besos o abrazos que no quiere, y respetadlo.",
  ],
  profesores: PROF("El cuerpo y el control progresivo del mismo: imagen global y segmentaria del cuerpo, posibilidades de acción y autonomía; respeto al propio cuerpo", [
    "Silueta en papel continuo: cada niño se tumba, se dibuja su contorno y pegamos gomets en cabeza, manos y pies.",
    "Canciones con gestos («Cabeza, hombros, rodillas y pies») a velocidad creciente.",
    "Puzle del cuerpo en cuatro piezas para montar en asamblea.",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
