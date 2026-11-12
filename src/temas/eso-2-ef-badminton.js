// Educación Física 2º ESO: deportes de adversario, bádminton. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Deportes de adversario: bádminton",
  minutos: 45,
  objetivos: ["Conocer las características de los deportes de adversario", "Aprender el reglamento básico del bádminton", "Ejecutar la empuñadura, el saque y los golpes básicos", "Aplicar una táctica sencilla: mover al rival y volver al centro"],
  claves: ["deporte de adversario", "bádminton", "volante", "empuñadura", "saque", "clear", "dejada", "posición base"],
  pregunta: {
    texto: "El volante de bádminton puede salir de la raqueta a más de 400 km/h, pero luego frena muchísimo. ¿Por qué?",
    respuesta: "Por su forma: la base de corcho es pesada y la falda de plumas (o nailon) crea mucha <b>resistencia del aire</b>. Sale rapidísimo, pero <mark>frena enseguida</mark> y cae casi en vertical. Por eso en bádminton se alternan golpes rapidísimos con golpes muy suaves.",
  },
  bloques: [
    {
      html: `<h3>Los deportes de adversario</h3><p>En los <b>deportes de adversario</b> se enfrentan dos jugadores (individuales) o dos parejas (dobles). Hay dos grandes grupos:</p><ul><li><b>Con implemento y red</b>: bádminton, tenis, pádel, tenis de mesa. No hay contacto; cada uno en su campo.</li><li><b>De lucha</b>: judo, kárate, esgrima. Hay contacto directo o con un arma deportiva.</li></ul><p>En todos ellos la clave es <b>leer al rival</b>: anticiparse a lo que va a hacer y buscar sus puntos débiles.</p>`,
      video: { id: "X8qJW5d59nQ", titulo: "Qué es el bádminton y cómo se juega", canal: "HABLEMOS DE DEPORTES", vistas: 61985 },
    },
    {
      html: `<h3>El material y la pista</h3><ul><li><b>Raqueta</b>: muy ligera (unos 85 g), con mango, varilla y cabeza con cordaje.</li><li><b>Volante</b>: base de corcho y falda de 16 plumas, o de nailon en los escolares.</li><li><b>Pista</b>: 13,40 m de largo; 5,18 m de ancho en individuales y 6,10 m en dobles. La red está a <b>1,55 m</b> de altura en los extremos (1,524 m en el centro).</li></ul><p>El bádminton es deporte olímpico desde 1992. España tiene una de las mejores jugadoras de la historia: <b>Carolina Marín</b>, campeona olímpica en Río 2016.</p>`,
      svg: svg("Pista de bádminton vista desde arriba con red central y líneas de saque", `<rect x="20" y="30" width="220" height="110" fill="var(--leaf)" fill-opacity=".08" stroke="var(--ink)" stroke-width="2"/><path d="M130 22 V 148" stroke="var(--ink)" stroke-width="4"/><path d="M20 39 H 240 M20 131 H 240" stroke="var(--muted)" stroke-width="1.5"/><path d="M100 30 V 140 M160 30 V 140" stroke="var(--pen)" stroke-width="2"/><path d="M30 85 H 100 M160 85 H 230" stroke="var(--pen)" stroke-width="2"/><path d="M28 30 V 140 M232 30 V 140" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 3"/>
        ${t(130, 16, "red 1,55 m", { s: 10 })}${t(115, 160, "línea de saque corto", { c: "var(--pen)", s: 10, a: "end" })}${t(130, 174, "13,40 m", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>Reglas básicas</h3><ul><li>Se juega al <b>mejor de 3 sets de 21 puntos</b>, con 2 puntos de diferencia (máximo 30).</li><li>Cada jugada da un punto (punto directo). Quien gana el punto saca.</li><li>El volante solo se puede golpear <b>una vez</b> por lado.</li><li>Es falta si el volante cae fuera, no pasa la red, toca el cuerpo o el jugador toca la red.</li><li>El <b>saque</b> se hace en diagonal, por debajo de la cintura, desde el cuadro derecho si tu puntuación es par y desde el izquierdo si es impar.</li><li>El volante sacado debe pasar la <b>línea de saque corto</b>.</li></ul>`,
      video: { id: "ZhtNcHrhcvo", titulo: "Reglas básicas del saque", canal: "SIKANA Español", vistas: 150544 },
    },
    {
      html: `<h3>La empuñadura y la posición base</h3><p>La <b>empuñadura universal</b> se coge como «dar la mano» a la raqueta: la V entre pulgar e índice sobre el canto del mango, dedos relajados. Para el <b>revés</b>, se gira un poco y el pulgar se apoya plano en el mango.</p><p>La <b>posición base</b> se adopta en el centro de la pista entre golpe y golpe: pies separados a la anchura de los hombros, rodillas flexionadas, peso en la parte delantera de los pies y raqueta delante, a la altura del pecho. Desde ahí se llega antes a cualquier rincón.</p>`,
      svg: svg("Muñeco en posición base con rodillas flexionadas y raqueta delante del pecho", `${persona(130, 34, "var(--pen)", { brazos: [[-18, 10], [24, 0]], piernas: [[-20, 28], [20, 28]] })}<ellipse cx="166" cy="40" rx="10" ry="14" fill="none" stroke="var(--sun)" stroke-width="2.5"/><path d="M154 48 L 160 50" stroke="var(--sun)" stroke-width="2.5"/><path d="M80 126 H 180" stroke="var(--line)" stroke-width="3"/>${t(130, 146, "pies separados · rodillas flexionadas", { c: "var(--muted)", s: 11 })}${t(130, 162, "raqueta delante · peso adelante", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Los golpes básicos</h3>${tabla(["Golpe", "Cómo es", "Para qué"], [["Saque corto", "suave, el volante pasa rozando la red", "evitar que el rival ataque"], ["Saque largo", "alto y profundo, al fondo", "alejar al rival de la red (individuales)"], ["Clear", "alto y profundo desde el fondo", "ganar tiempo y llevar al rival atrás"], ["Dejada", "suave, cae justo tras la red", "obligar al rival a subir"], ["Remate (smash)", "fuerte y hacia abajo", "ganar el punto"], ["Drive", "plano y rápido por encima de la red", "ataque rápido en medio campo"]])}`,
      video: { id: "mMUXYqbpID4", titulo: "Los 11 golpes básicos en bádminton", canal: "Tobias Wadenka", vistas: 259237 },
    },
    {
      html: `<h3>Las trayectorias</h3><p>Cada golpe dibuja una trayectoria distinta. Combinarlas es la base de la táctica:</p>`,
      svg: svg("Trayectorias de clear alta y profunda, dejada corta tras la red y remate descendente", `<path d="M20 150 H 240" stroke="var(--ink)" stroke-width="2"/><path d="M130 150 V 112" stroke="var(--ink)" stroke-width="4"/><circle cx="34" cy="96" r="5" fill="var(--ink)"/>
        <path d="M34 96 Q 120 -10 228 140" fill="none" stroke="var(--pen)" stroke-width="2.5"/><path d="M34 96 Q 110 80 150 146" fill="none" stroke="var(--leaf)" stroke-width="2.5"/><path d="M60 60 L 196 146" stroke="var(--red)" stroke-width="2.5"/>
        ${t(196, 40, "clear", { c: "var(--pen)", s: 12 })}${t(100, 134, "dejada", { c: "var(--leaf)", s: 12 })}${t(126, 70, "remate", { c: "var(--red)", s: 12 })}${t(70, 172, "tu campo", { c: "var(--muted)", s: 10 })}${t(190, 172, "campo rival", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>Táctica básica</h3><ul><li><b>Mover al rival</b>: alterna golpes largos (clear) y cortos (dejada) para obligarle a recorrer toda la pista.</li><li><b>Volver al centro</b> tras cada golpe a la posición base.</li><li><b>Buscar el espacio libre</b>: golpea donde no está el rival.</li><li><b>Atacar los volantes altos</b> con remate; defender los bajos con golpes que suban.</li><li>En dobles: si atacáis, uno delante y otro detrás; si defendéis, uno al lado del otro.</li></ul>`,
    },
    {
      html: `<h3>Juego limpio en los deportes de raqueta</h3><p>En bádminton escolar a menudo no hay árbitro, así que los propios jugadores cantan los puntos. Normas de juego limpio:</p><ul><li>Cantar el marcador en voz alta antes de sacar.</li><li>Si dudas si el volante ha caído dentro, se da el punto al rival o se repite.</li><li>Devolver el volante al rival de forma cómoda para que saque.</li><li>Saludar en la red al final del partido.</li></ul>`,
    },
  ],
  figura: {
    titulo: "El bádminton en un vistazo",
    svg: filas("Resumen del bádminton: tipo de deporte, material, reglas, empuñadura, golpes y táctica", [["Tipo", "adversario · red · sin contacto", "var(--pen)"], ["Material", "raqueta ligera · volante · red 1,55 m", "var(--sun)"], ["Reglas", "3 sets a 21 · un golpe por lado · saque cruzado", "var(--red)"], ["Base", "empuñadura universal · posición base", "var(--inf)"], ["Golpes", "saque · clear · dejada · remate · drive", "var(--leaf)"], ["Táctica", "largo-corto · volver al centro", "var(--ink)"]], 200),
  },
  video: { id: "X8qJW5d59nQ", titulo: "Qué es el bádminton y cómo se juega", canal: "HABLEMOS DE DEPORTES", vistas: 61985, megusta: 0, busqueda: "bádminton reglas y golpes básicos" },
  quiz: mezcla([
    { q: "El bádminton es un deporte de…", o: ["adversario", "invasión", "lucha"], a: 0, e: "Uno contra uno o parejas." },
    { q: "Un set de bádminton se juega a…", o: ["21 puntos", "15 puntos", "25 puntos"], a: 0, e: "Con 2 de diferencia." },
    { q: "El saque se realiza…", o: ["en diagonal y por debajo de la cintura", "en línea recta y por arriba", "desde cualquier sitio"], a: 0, e: "Saque cruzado." },
    { q: "Con puntuación par se saca desde el cuadro…", o: ["derecho", "izquierdo", "central"], a: 0, e: "Impar: izquierdo." },
    { q: "El golpe alto y profundo al fondo es el…", o: ["clear", "drive", "dejada"], a: 0, e: "Gana tiempo." },
    { q: "El golpe suave que cae justo tras la red es la…", o: ["dejada", "remate", "clear"], a: 0, e: "Hace subir al rival." },
    { q: "El golpe más fuerte y descendente es el…", o: ["remate", "saque corto", "clear"], a: 0, e: "Smash." },
    { q: "Tras cada golpe hay que volver a…", o: ["la posición base en el centro", "la red", "el fondo"], a: 0, e: "Llegar antes a todo." },
    { q: "¿Cuántas veces puede golpear un jugador el volante en su lado?", o: ["una", "dos", "tres"], a: 0, e: "A diferencia del voleibol." },
    { q: "Carolina Marín fue campeona olímpica en…", o: ["Río 2016", "Barcelona 1992", "Londres 2012"], a: 0, e: "Bádminton individual femenino." },
  ]),
  examen: mezcla([
    { q: "La empuñadura universal se coge como si…", o: ["dieras la mano a la raqueta", "agarraras un martillo de punta", "cogieras un lápiz"], a: 0, e: "V sobre el canto." },
    { q: "Para mover al rival conviene alternar…", o: ["golpes largos y cortos", "solo remates", "solo saques"], a: 0, e: "Clear y dejada." },
    { q: "En dobles, cuando la pareja ataca se coloca…", o: ["uno delante y otro detrás", "uno al lado del otro", "los dos en la red"], a: 0, e: "Formación de ataque." },
  ]),
  feynman: ["Qué es un deporte de adversario", "Reglas básicas del bádminton", "Empuñadura y posición base", "Los golpes: clear, dejada, remate", "La táctica de mover al rival"],
  mapa: mapa("BÁDMINTON", "var(--eso)", [
    ["Reglas", "21 puntos · saque cruzado", "var(--red)"],
    ["Base", "empuñadura · posición", "var(--inf)"],
    ["Golpes", "clear · dejada · remate", "var(--leaf)"],
    ["Táctica", "largo-corto · centro", "var(--pen)"],
  ], 230),
  tarjetas: [
    ["Deporte de adversario", "Enfrenta a un jugador o pareja contra otra."],
    ["Volante", "Proyectil de corcho y plumas o nailon."],
    ["Saque", "En diagonal y por debajo de la cintura."],
    ["Clear", "Golpe alto y profundo al fondo."],
    ["Dejada", "Golpe suave que cae tras la red."],
    ["Remate", "Golpe fuerte hacia abajo."],
    ["Posición base", "Centro de la pista, rodillas flexionadas."],
    ["Set", "21 puntos con 2 de diferencia."],
  ],
  familias: ["Jugad con raquetas y un volante en el parque, sin red, intentando mantener el peloteo.", "Ved un vídeo de Carolina Marín y comentad sus desplazamientos.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Deportes de adversario con implemento: reglamento, técnica básica (empuñadura, saque, clear, dejada, remate) y principios tácticos; juego limpio y autoarbitraje (RD 217/2022, Educación Física, resolución de problemas en situaciones motrices).",
    ideas: ["Liga escolar de individuales con autoarbitraje.", "Retos de precisión con aros en la pista.", "Juego de «rey de la pista» con rotación."],
  },
  fuentes: [RD, { t: "Federación Española de Bádminton", url: "https://www.badminton.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Vas ganando 7-4 y te toca sacar. ¿Desde qué cuadro?", pasos: ["Tu puntuación es 7.", "7 es impar."], resultado: "Desde el cuadro izquierdo, en diagonal." },
    { enunciado: "Tu rival está muy pegado a la red. ¿Qué golpe eliges?", pasos: ["El espacio libre está al fondo.", "Un golpe alto y profundo le obliga a correr hacia atrás."], resultado: "Un clear al fondo." },
    { enunciado: "El marcador va 20-20. ¿Cuándo termina el set?", pasos: ["Hace falta ganar por 2 puntos.", "Si siguen empatando, el máximo es 30."], resultado: "Al conseguir 2 de ventaja (22-20, 23-21…) o al llegar a 30." },
  ],
  errores: [
    "Coger la raqueta como un martillo con la palma detrás.",
    "Quedarse donde se golpeó en lugar de volver al centro.",
    "Sacar por encima de la cintura o en línea recta.",
    "Golpear siempre igual, sin alternar largo y corto.",
    "Discutir los puntos en lugar de repetir la jugada dudosa.",
  ],
  ejercicios: [
    { q: "Define deporte de adversario y escribe tres ejemplos.", sol: "Enfrenta a jugadores o parejas: bádminton, tenis, judo." },
    { q: "¿A cuántos puntos se juega un set? ¿Y el partido?", sol: "21 puntos; al mejor de 3 sets." },
    { q: "Explica dos reglas del saque.", sol: "En diagonal y por debajo de la cintura (y pasando la línea de saque corto)." },
    { q: "Describe la posición base.", sol: "Centro de la pista, pies separados, rodillas flexionadas, raqueta delante." },
    { q: "Diferencia clear y dejada.", sol: "Clear: alto y al fondo. Dejada: suave tras la red." },
    { q: "¿Cuándo usarías un remate?", sol: "Cuando el volante llega alto y cerca, para ganar el punto." },
    { q: "Si el marcador es 12-15 y sacas tú con 12, ¿desde qué cuadro?", sol: "Derecho (12 es par)." },
    { q: "Explica la táctica de mover al rival.", sol: "Alternar golpes largos y cortos para que recorra toda la pista." },
    { q: "Escribe tres normas de juego limpio en bádminton.", sol: "Cantar el marcador, repetir jugadas dudosas, saludar al final." },
    { q: "¿Por qué el volante frena tan rápido?", sol: "Su falda de plumas genera mucha resistencia del aire." },
  ],
};
