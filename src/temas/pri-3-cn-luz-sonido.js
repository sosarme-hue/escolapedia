// Ciencias de la Naturaleza 3º de Primaria: la luz y el sonido. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, cj, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF, sol, nino, suelo, bombi, tambor } = require("./_pri3b");

// Linterna que apunta a la derecha.
const linterna = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-26" y="-7" width="26" height="14" rx="3" fill="${COL.gris}"/><path d="M0 -7 l10 -5 v24 l-10 -5z" fill="${COL.gris}"/><rect x="-18" y="-3" width="6" height="6" fill="var(--red)"/></g>`;
// Ondas de sonido (arcos) que salen hacia la derecha.
const ondas = (x, y, n = 3, c = "var(--pen)") => [...Array(n)].map((_, i) => `<path d="M${x + i * 10} ${y - 8 - i * 5} q${6 + i * 3} ${8 + i * 5} 0 ${16 + i * 10}" stroke="${c}" stroke-width="2" fill="none"/>`).join("");

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "La luz y el sonido",
  minutos: 45,
  objetivos: ["Distinguir fuentes de luz naturales y artificiales", "Explicar que la luz viaja en línea recta y forma sombras", "Clasificar materiales en transparentes, translúcidos y opacos", "Saber cómo se produce el sonido y cómo se propaga", "Distinguir sonidos fuertes y débiles, agudos y graves, y cuidar el oído"],
  claves: ["luz", "fuente de luz", "sombra", "transparente", "translúcido", "opaco", "reflexión", "arcoíris", "sonido", "vibración", "eco", "ruido"],
  pregunta: {
    texto: "En una tormenta primero ves el rayo y unos segundos después oyes el trueno, aunque los dos se producen a la vez. ¿Por qué no llegan juntos?",
    respuesta: "Porque la <mark>luz</mark> viaja muchísimo más rápido que el <mark>sonido</mark>. La luz del rayo llega a tus ojos casi al instante, mientras que el sonido del trueno tarda unos tres segundos en recorrer cada kilómetro. Si cuentas los segundos entre el rayo y el trueno y los divides entre tres, sabrás aproximadamente a cuántos kilómetros está la tormenta.",
  },
  bloques: [
    {
      html: `<h3>La luz y las fuentes de luz</h3><p>Gracias a la <mark>luz</mark> podemos <b>ver</b> lo que nos rodea. Sin luz, todo está oscuro y no vemos nada, aunque tengamos los ojos abiertos. La luz también da <b>calor</b> y permite a las plantas fabricar su alimento.</p><p>Los objetos que producen luz propia se llaman <mark>fuentes de luz</mark>. Pueden ser:</p><p>• <b>Naturales</b>: no las ha fabricado el ser humano. El <b>Sol</b> es la fuente de luz más importante. También las demás estrellas, los rayos de una tormenta, el fuego y algunos animales, como las luciérnagas.<br>• <b>Artificiales</b>: las han inventado las personas. Las <b>bombillas</b>, las linternas, las velas, las pantallas o los faros de un coche.</p><p>La mayoría de los objetos no producen luz: solo los vemos porque la luz de una fuente <b>rebota</b> en ellos y llega hasta nuestros ojos.</p><p>¿Y la Luna? Aunque brilla mucho de noche, no es una fuente de luz: solo refleja la luz que le llega del Sol, como un espejo gigante.</p>`,
      svg: svg("Fuentes de luz naturales (sol, fuego, rayo) y artificiales (bombilla, linterna)", `${tit("Fuentes de luz")}<path d="M130 34 V170" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/>${et(66, 48, "naturales", 100, { size: 12, color: COL.sol })}${et(196, 48, "artificiales", 100, { size: 12, color: COL.azul })}${sol(46, 90, 14)}<path d="M96 70 l-10 20 h10 l-8 22 l20 -28 h-10 l8 -14z" fill="var(--sun)"/><path d="M66 150 q-14 -16 0 -34 q2 12 8 14 q4 -10 0 -18 q20 18 4 38z" fill="${COL.naranja}"/>${bombi(176, 104, 1.6)}${linterna(234, 130, 1)}${tx(66, 166, "sol, rayo, fuego", 110)}${tx(196, 166, "bombilla, linterna", 110)}`),
    },
    {
      html: `<h3>La luz viaja en línea recta</h3><p>La luz sale de las fuentes de luz y viaja en <b>todas las direcciones</b>, siempre en <b>línea recta</b>. Lo puedes ver cuando entran rayos de sol por una ventana en una habitación con polvo, o cuando enciendes una linterna en la oscuridad: el haz de luz es recto.</p><p>La luz viaja rapidísimo: es lo más rápido que existe. ¡La luz del Sol tarda solo unos ocho minutos en llegar a la Tierra, aunque está a ciento cincuenta millones de kilómetros!</p><p>Cuando la luz choca con un objeto que no la deja pasar, detrás de él se forma una zona oscura: la <mark>sombra</mark>. La sombra tiene la forma del objeto.</p><p>El tamaño de la sombra cambia según dónde esté la fuente de luz:</p><p>• Si la luz está <b>baja</b>, por ejemplo, el sol al amanecer o al atardecer, las sombras son muy <b>largas</b>.<br>• Si la luz está <b>alta</b>, por ejemplo, el sol al mediodía, las sombras son <b>cortas</b>.</p><p>Con una linterna y tus manos puedes hacer <b>sombras chinas</b> con forma de animales en la pared.</p>`,
      svg: svg("La linterna ilumina en línea recta y el niño proyecta una sombra en la pared", `${tit("La sombra")}${suelo(158)}${linterna(40, 108, 1.2)}<path d="M54 104 L240 50 V158 L54 112z" fill="var(--sun)" fill-opacity=".22"/>${nino(130, 158, { c: COL.azul, s: 1 })}<path d="M240 50 V158" stroke="var(--ink)" stroke-width="3"/><path d="M212 158 V96 l-8 -6 h16 l-8 6" fill="var(--ink)" fill-opacity=".55"/><g fill="var(--ink)" fill-opacity=".55"><circle cx="212" cy="80" r="12"/><rect x="204" y="92" width="16" height="44"/><rect x="200" y="134" width="8" height="24"/><rect x="216" y="134" width="8" height="24"/></g>${et(212, 172, "sombra", 70, { size: 11 })}${et(60, 84, "luz", 50, { size: 11, color: COL.sol })}`),
    },
    {
      html: `<h3>Transparentes, translúcidos y opacos</h3><p>No todos los materiales dejan pasar la luz de la misma manera:</p><p>• Los materiales <mark>transparentes</mark> dejan pasar <b>toda la luz</b>, y a través de ellos vemos los objetos con claridad. Por ejemplo, el vidrio de las ventanas, el agua limpia, el aire o el plástico de una botella de agua.</p><p>• Los materiales <mark>translúcidos</mark> dejan pasar <b>solo una parte</b> de la luz, y a través de ellos vemos los objetos borrosos. Por ejemplo, el papel de seda, el cristal esmerilado de algunas puertas de baño, una cortina fina o el papel vegetal.</p><p>• Los materiales <mark>opacos</mark> <b>no dejan pasar la luz</b>, y no podemos ver nada a través de ellos. Por ejemplo, la madera, el metal, la piedra, el cartón o nuestro cuerpo. Los objetos opacos son los que forman sombras.</p><p>Elegimos los materiales según lo que necesitamos: las ventanas son transparentes para que entre la luz; las persianas son opacas para dormir a oscuras; y las lámparas suelen tener pantallas translúcidas para que la luz sea más suave.</p>`,
      svg: svg("Linterna frente a vidrio (pasa toda la luz), papel (pasa parte) y madera (no pasa)", `${tit("¿Deja pasar la luz?")}${[[46, "transparente", "vidrio", 0.15, 1], [130, "translúcido", "papel", 0.5, 0.45], [214, "opaco", "madera", 1, 0]].map(([x, a, b, op, paso]) => `<path d="M${x - 34} 92 h22" stroke="var(--sun)" stroke-width="6" stroke-opacity=".8"/><rect x="${x - 8}" y="62" width="16" height="60" fill="${op === 1 ? COL.marron : op > 0.3 ? "#f5f5f4" : "var(--water)"}" fill-opacity="${op === 1 ? 0.8 : 0.6}" stroke="var(--ink)" stroke-width="1.2"/>${paso ? `<path d="M${x + 12} 92 h22" stroke="var(--sun)" stroke-width="6" stroke-opacity="${paso * 0.8}"/>` : ""}${et(x, 142, a, 80, { size: 11, color: COL.azul })}${tx(x, 158, b, 70)}`).join("")}`),
    },
    {
      html: `<h3>La luz rebota y se descompone</h3><p>Cuando la luz llega a un objeto, una parte <b>rebota</b>. Esto se llama <mark>reflexión</mark>. Las superficies lisas y brillantes, como los <b>espejos</b>, el agua tranquila de un lago o una cuchara de metal, reflejan muy bien la luz. Por eso podemos vernos en ellas.</p><p>La luz también cambia de dirección cuando pasa de un material a otro, por ejemplo, del aire al agua. Por eso, si metes un lápiz en un vaso de agua, parece que está <b>roto</b>. ¡Pruébalo!</p><p>La luz del Sol parece blanca, pero en realidad está formada por <b>muchos colores</b> mezclados. Cuando la luz atraviesa gotas de agua, se separa en sus colores. Así se forma el <mark>arcoíris</mark>, que aparece cuando llueve y hace sol a la vez. Sus siete colores son: rojo, naranja, amarillo, verde, azul, añil y violeta.</p><p>Los objetos tienen color porque reflejan algunos colores de la luz y absorben los demás. Un tomate es rojo porque refleja la luz roja. Un objeto blanco refleja todos los colores y uno negro los absorbe todos. Por eso la ropa negra se calienta más al sol.</p>`,
      svg: svg("Arcoíris con siete colores y un lápiz que parece roto en un vaso de agua", `${tit("Reflexión y arcoíris")}${["#dc2626", "#ea580c", "#eab308", "#16a34a", "#2563eb", "#4f46e5", "#7c3aed"].map((c, i) => `<path d="M${30 + i * 6} 140 A${70 - i * 6} ${70 - i * 6} 0 0 1 ${170 - i * 6} 140" stroke="${c}" stroke-width="6" fill="none"/>`).join("")}<g transform="translate(214 150)"><rect x="-18" y="-60" width="36" height="60" fill="none" stroke="var(--ink)" stroke-width="1.5"/><rect x="-18" y="-36" width="36" height="36" fill="var(--water)" fill-opacity=".45"/><path d="M-14 -78 L0 -36" stroke="${COL.naranja}" stroke-width="4"/><path d="M4 -36 L12 -6" stroke="${COL.naranja}" stroke-width="4"/></g>${et(100, 164, "arcoíris: 7 colores", 140, { size: 11 })}${et(214, 170, "¿lápiz roto?", 80, { size: 10.5 })}`),
      video: vid("xZa7EphfGEE"),
    },
    {
      html: `<h3>¿Qué es el sonido?</h3><p>El <mark>sonido</mark> es lo que percibimos con el <b>oído</b>. Oímos la voz de nuestros amigos, la música, el canto de los pájaros, el timbre del colegio o el ruido de los coches.</p><p>El sonido se produce cuando un objeto <mark>vibra</mark>, es decir, se mueve muy rápido hacia delante y hacia atrás. Lo puedes comprobar:</p><p>• Pon la mano en tu garganta y di «aaaa». Notarás que vibra: son tus <b>cuerdas vocales</b>.<br>• Estira una goma elástica entre los dedos y pellízcala. La verás vibrar y sonar.<br>• Golpea un tambor con unos granos de arroz encima. ¡Los granos saltan porque la piel del tambor vibra!</p><p>Las cosas que producen sonido se llaman <b>fuentes de sonido</b>. Pueden ser <b>naturales</b>, como la voz, los animales, el viento, la lluvia o un trueno; o <b>artificiales</b>, como los instrumentos musicales, los timbres, las sirenas o los altavoces.</p>`,
      svg: svg("Un tambor vibra y produce ondas de sonido que llegan al oído", `${tit("El sonido es vibración")}<g transform="translate(70 128)"><path d="M-30 -30 V0 a30 8 0 0 0 60 0 V-30" fill="var(--red)" fill-opacity=".8"/><ellipse cx="0" cy="-30" rx="30" ry="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${[[-10, -46], [0, -52], [12, -44]].map(([a, b]) => `<ellipse cx="${a}" cy="${b}" rx="2.5" ry="1.6" fill="${COL.marron}"/>`).join("")}<path d="M-6 -40 l-4 -4 M6 -40 l4 -4" stroke="var(--ink)" stroke-width="1"/></g>${ondas(110, 98, 4)}<g transform="translate(214 98)"><path d="M-6 -22 q22 -6 22 18 q0 14 -12 18 q-4 2 -4 8 q-2 6 -8 4" fill="#f3c9a1" stroke="var(--ink)" stroke-width="1.6"/><path d="M0 -10 q8 -2 8 8 q0 6 -6 6" stroke="var(--ink)" stroke-width="1.4" fill="none"/></g>${et(70, 160, "vibra", 70, { size: 11, color: COL.rojo })}${et(140, 140, "ondas", 70, { size: 11, color: COL.azul })}${et(214, 140, "oído", 60, { size: 11 })}`),
    },
    {
      html: `<h3>¿Cómo viaja el sonido?</h3><p>Cuando un objeto vibra, hace vibrar también el aire que lo rodea. Esas vibraciones se transmiten de una partícula a otra, como cuando tiras una piedra a un estanque y se forman <b>ondas</b>. Así el sonido llega hasta nuestro oído.</p><p>El sonido necesita algo por donde viajar: un <b>gas</b> como el aire, un <b>líquido</b> como el agua o un <b>sólido</b> como la madera o la pared. Por eso:</p><p>• Oímos a los vecinos a través de la pared.<br>• Los delfines y las ballenas se comunican bajo el agua.<br>• Si pegas la oreja a una mesa y alguien da golpecitos al otro lado, lo oyes muy bien. ¡En los sólidos el sonido viaja mejor que en el aire!</p><p>En el espacio, donde no hay aire, no se oye nada: los astronautas hablan por radio.</p><p>Cuando el sonido choca contra una superficie grande, como una montaña o la pared de una sala vacía, <b>rebota</b> y vuelve: es el <mark>eco</mark>. Algunos animales, como los murciélagos y los delfines, usan el eco para orientarse y cazar en la oscuridad.</p>`,
      svg: svg("El sonido rebota en una montaña y vuelve: el eco", `${tit("El eco")}${suelo(158)}${nino(46, 158, { c: COL.azul, pose: "canta", s: 1.1 })}<path d="M180 158 L230 60 L262 158z" fill="${COL.marron}" fill-opacity=".45"/>${fl(72, 92, 176, 92, COL.azul, 2.5)}${fl(176, 112, 72, 112, COL.morado, 2.5)}${et(124, 84, "¡Hola!", 60, { size: 12, color: COL.azul })}${et(124, 130, "hola… hola…", 90, { size: 11, color: COL.morado })}${tx(130, 174, "el sonido rebota y vuelve", 200)}`),
    },
    {
      html: `<h3>Cualidades del sonido</h3><p>No todos los sonidos son iguales. Los podemos distinguir por:</p><p>• La <b>intensidad</b>: un sonido puede ser <mark>fuerte</mark>, como un grito, un trueno o un petardo; o <mark>débil</mark>, como un susurro o el tictac de un reloj. Cuanto más lejos estamos de la fuente, más débil lo oímos. El volumen del sonido se mide en <b>decibelios</b>.</p><p>• El <b>tono</b>: un sonido puede ser <mark>agudo</mark>, como el canto de un pájaro, un silbato o la voz de un bebé; o <mark>grave</mark>, como el mugido de una vaca, un tambor grande o la sirena de un barco. En una guitarra, las cuerdas finas suenan agudas y las gruesas, graves.</p><p>• El <b>timbre</b>: nos permite reconocer <b>quién o qué</b> produce el sonido. Aunque una flauta y un violín toquen la misma nota, sabemos cuál es cuál. Y reconoces la voz de tu madre por teléfono sin verla.</p><p>• La <b>duración</b>: un sonido puede ser <b>largo</b>, como una sirena, o <b>corto</b>, como una palmada.</p>`,
      svg: svg("Cualidades del sonido: fuerte o débil, agudo o grave, timbre y duración", `${tit("Cualidades del sonido")}${fichas([["Intensidad", "fuerte o débil", COL.rojo], ["Tono", "agudo o grave", COL.azul], ["Timbre", "quién suena", COL.morado], ["Duración", "largo o corto", COL.verde]], 2, 36, 0)}`),
      video: vid("NtuuPcuFaBg"),
    },
    {
      html: `<h3>El ruido y el cuidado del oído</h3><p>Llamamos <mark>ruido</mark> a los sonidos <b>molestos</b>, desagradables o demasiado fuertes: el tráfico, las obras, las motos sin silenciador o los gritos en el comedor. El exceso de ruido es una forma de <b>contaminación</b>, la <b>contaminación acústica</b>.</p><p>El ruido nos hace daño: nos pone nerviosos, nos impide concentrarnos y descansar, y puede dañar nuestros oídos para siempre si es muy fuerte o dura mucho tiempo.</p><p>Para cuidar el oído y reducir el ruido:</p><p>• No escuches música con los <b>auriculares</b> a todo volumen ni durante muchas horas.<br>• Habla en un tono normal, sin gritar, en clase y en el comedor.<br>• No metas objetos en las orejas para limpiarlas.<br>• Protégete los oídos en lugares con mucho ruido.<br>• Respeta el descanso de los vecinos por la noche.</p><p>En muchos colegios hay «semáforos del ruido» que se ponen en rojo cuando hay demasiado jaleo. ¿Hay uno en tu clase?</p>`,
      svg: svg("Semáforo del ruido: verde tranquilo, amarillo cuidado, rojo demasiado ruido", `${tit("Semáforo del ruido")}<rect x="40" y="36" width="56" height="132" rx="12" fill="var(--ink)"/>${[["#16a34a", 62], ["#eab308", 102], ["#dc2626", 142]].map(([c, y]) => `<circle cx="68" cy="${y}" r="15" fill="${c}"/>`).join("")}${filas([["verde", "tranquilos", "#16a34a"], ["amarillo", "bajamos la voz", "#ca8a04"], ["rojo", "demasiado ruido", "#dc2626"]], 66, 40, { x: 120, wa: 70, wb: 110, dos: true })}`),
    },
    {
      html: `<h3>¡Experimentamos con la luz y el sonido!</h3><p><b>1. Teléfono de vasos.</b> Haz un agujerito en el fondo de dos vasos de yogur. Pasa un hilo largo y átalo por dentro. Estira el hilo bien tenso: uno habla dentro de un vaso y el otro escucha en el otro vaso. El sonido viaja por el hilo, que vibra.</p><p><b>2. Xilófono de agua.</b> Llena varios vasos de cristal iguales con distintas cantidades de agua. Golpéalos suavemente con una cuchara. ¿Cuál suena más agudo? ¿Y más grave?</p><p><b>3. El reloj de sol.</b> Clava un palo en la tierra en un lugar soleado. Marca dónde cae la sombra a las 10, a las 12 y a las 14 horas. ¿Cuándo es más corta? ¿Hacia dónde se mueve?</p><p><b>4. ¿Qué deja pasar la luz?</b> Enciende una linterna y pon delante una hoja de papel, un trozo de cartón, un plástico transparente y una tela. Clasifícalos en transparentes, translúcidos y opacos.</p><p>Recuerda: nunca mires directamente al Sol, ni siquiera con gafas de sol, porque daña los ojos.</p>`,
      svg: svg("Teléfono de vasos unidos por un hilo y vasos con agua que suenan distinto", `${tit("Experimentos")}<path d="M34 70 l12 -14 h10 l12 14z" fill="${COL.rojo}" fill-opacity=".7"/><path d="M192 70 l12 -14 h10 l12 14z" fill="${COL.azul}" fill-opacity=".7"/><path d="M56 56 L204 56" stroke="var(--ink)" stroke-width="1.5"/>${et(130, 48, "teléfono de vasos", 120, { size: 10.5 })}${[0.2, 0.4, 0.6, 0.8].map((n, i) => `<g transform="translate(${70 + i * 40} 158)"><rect x="-13" y="${-50 * n}" width="26" height="${50 * n}" fill="var(--water)" fill-opacity=".55"/><path d="M-13 -50 V0 H13 V-50" stroke="var(--ink)" stroke-width="1.5" fill="none"/></g>`).join("")}${et(70, 172, "agudo", 50, { size: 10 })}${et(190, 172, "grave", 50, { size: 10 })}`),
    },
  ],
  figura: {
    titulo: "La luz y el sonido en ocho ideas",
    svg: rejilla([
      ["Fuentes de luz", "sol, bombilla", COL.sol],
      ["Línea recta", "forma sombras", COL.gris],
      ["Opaco", "no deja pasar la luz", COL.marron],
      ["Arcoíris", "7 colores", COL.morado],
      ["Sonido", "objetos que vibran", COL.azul],
      ["Se propaga", "aire, agua, sólidos", COL.agua],
      ["Eco", "el sonido rebota", COL.verde],
      ["Ruido", "cuida tus oídos", COL.rojo],
    ], 4, 86, "Resumen de la luz y el sonido"),
  },
  video: vgen("FL0taZbSqj0", "la luz para niños"),
  ejemplos: [
    { enunciado: "Clasifica en fuentes de luz naturales o artificiales: Sol, vela, luciérnaga, linterna, rayo.",
      pasos: ["No las fabrica el ser humano: Sol, luciérnaga y rayo.", "Las fabrican las personas: vela y linterna."],
      resultado: "Naturales: Sol, luciérnaga y rayo. Artificiales: vela y linterna." },
    { enunciado: "Ves un rayo y cuentas 9 segundos hasta oír el trueno. ¿A cuántos kilómetros está la tormenta?",
      pasos: ["El sonido tarda unos 3 segundos en recorrer 1 km.", "9 ÷ 3 = 3."],
      resultado: "A unos 3 kilómetros." },
    { enunciado: "¿El sonido es agudo o grave: un silbato, un tambor grande, un pajarito, una tuba?",
      pasos: ["Silbato y pajarito tienen sonidos finos: agudos.", "Tambor grande y tuba suenan gordos: graves."],
      resultado: "Agudos: silbato y pajarito. Graves: tambor y tuba." },
  ],
  errores: [
    "Pensar que la Luna es una fuente de luz: refleja la luz del Sol.",
    "Creer que el sonido viaja en el espacio: necesita aire, agua o un sólido.",
    "Confundir fuerte con agudo: fuerte es volumen; agudo es tono.",
    "Pensar que las sombras siempre tienen el mismo tamaño.",
  ],
  ejercicios: [
    { q: "¿Qué es una fuente de luz? Escribe dos naturales y dos artificiales.", sol: "Un objeto que produce luz propia. Naturales: el Sol y el fuego. Artificiales: la bombilla y la linterna." },
    { q: "¿Cómo viaja la luz?", sol: "En línea recta y muy deprisa, en todas las direcciones." },
    { q: "¿Por qué se forma una sombra?", sol: "Porque un objeto opaco no deja pasar la luz y detrás queda una zona oscura." },
    { q: "¿Cuándo son más largas las sombras: al mediodía o al atardecer?", sol: "Al atardecer, porque el Sol está bajo." },
    { q: "Clasifica: vidrio, madera, papel de seda, agua, cartón.", sol: "Transparentes: vidrio y agua. Translúcido: papel de seda. Opacos: madera y cartón." },
    { q: "¿Cuándo aparece el arcoíris?", sol: "Cuando llueve y hace sol a la vez: la luz se separa en colores al atravesar las gotas." },
    { q: "¿Cómo se produce el sonido?", sol: "Cuando un objeto vibra." },
    { q: "¿Qué es el eco?", sol: "El sonido que rebota en una superficie grande y vuelve a nosotros." },
    { q: "¿Qué diferencia hay entre un sonido fuerte y uno agudo?", sol: "Fuerte se refiere a la intensidad (volumen); agudo se refiere al tono (fino)." },
    { q: "Escribe tres consejos para cuidar el oído.", sol: "No usar auriculares muy altos, no gritar y no meter objetos en las orejas." },
  ],
  quiz: [
    { q: "La fuente de luz más importante es…", o: ["la Luna", "el Sol", "una bombilla"], a: 1, e: "El Sol." },
    { q: "La luz viaja en…", o: ["línea recta", "zigzag", "círculos"], a: 0, e: "En línea recta." },
    { q: "El vidrio de la ventana es…", o: ["opaco", "transparente", "translúcido"], a: 1, e: "Transparente." },
    { q: "La madera es…", o: ["opaca", "transparente", "translúcida"], a: 0, e: "Opaca." },
    { q: "La sombra la forman los objetos…", o: ["opacos", "transparentes", "de cristal"], a: 0, e: "Los opacos." },
    { q: "El arcoíris tiene…", o: ["3 colores", "7 colores", "10 colores"], a: 1, e: "Siete colores." },
    { q: "El sonido se produce cuando algo…", o: ["vibra", "brilla", "se enfría"], a: 0, e: "Vibra." },
    { q: "El sonido que rebota es el…", o: ["eco", "ruido", "tono"], a: 0, e: "El eco." },
    { q: "El silbato tiene un sonido…", o: ["agudo", "grave", "mudo"], a: 0, e: "Agudo." },
    { q: "En el espacio, sin aire…", o: ["no se oye nada", "se oye más fuerte", "todo es eco"], a: 0, e: "No se oye nada." },
  ],
  examen: [
    { q: "La Luna brilla porque…", o: ["refleja la luz del Sol", "tiene bombillas", "es una estrella"], a: 0, e: "Refleja la luz del Sol." },
    { q: "Reconocer la voz de tu madre por teléfono es gracias al…", o: ["timbre", "eco", "volumen"], a: 0, e: "Al timbre." },
    { q: "Al mediodía las sombras son…", o: ["cortas", "largas", "de colores"], a: 0, e: "Cortas." },
    { q: "Llega antes…", o: ["la luz del rayo", "el sonido del trueno", "los dos igual"], a: 0, e: "La luz es más rápida." },
  ],
  feynman: ["Cómo se forma una sombra", "Qué materiales dejan pasar la luz", "Cómo se produce y viaja el sonido"],
  mapa: mapa("LUZ Y SONIDO", "var(--pri)", [
    ["Luz", "fuentes · línea recta", COL.sol],
    ["Materiales", "transparente · opaco", COL.marron],
    ["Sonido", "vibración · eco", COL.azul],
    ["Cualidades", "fuerte · agudo · timbre", COL.morado],
  ], 250),
  tarjetas: [
    ["Fuente de luz", "Objeto que produce luz propia."],
    ["Sombra", "Zona oscura detrás de un objeto opaco."],
    ["Transparente", "Deja pasar toda la luz: vidrio."],
    ["Translúcido", "Deja pasar parte de la luz: papel de seda."],
    ["Opaco", "No deja pasar la luz: madera."],
    ["Sonido", "Lo que oímos; se produce por vibraciones."],
    ["Eco", "Sonido que rebota y vuelve."],
    ["Agudo y grave", "Tono fino o tono gordo."],
  ],
  familias: ["Jugad a las sombras chinas con una linterna en una habitación a oscuras.", "Fabricad juntos un teléfono de vasos y un xilófono de agua.", "Escuchad los sonidos de la calle y clasificadlos en fuertes y débiles.", "Revisad juntos el volumen de los auriculares y las pantallas."],
  profesores: PROF("Ciencias de la Naturaleza: la luz; fuentes de luz naturales y artificiales; propagación rectilínea y sombras; materiales transparentes, translúcidos y opacos; reflexión y descomposición de la luz; el sonido, vibración y propagación; cualidades del sonido; contaminación acústica", ["Teatro de sombras y medición de sombras en el patio a distintas horas.", "Clasificación de materiales con una linterna.", "Teléfono de vasos y xilófono de agua con registro de observaciones."]),
  fuentes: [RD, wiki("Luz", "Luz"), wiki("Sonido", "Sonido"), wiki("Arcoíris", "Arcoíris")],
  revisado: REV,
};
