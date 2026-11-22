// Educación Plástica 3º de Primaria: el cómic, viñetas y bocadillos. Personajes propios en SVG.
const { tema, L, svg, tx, t, comic, persona, cara, AZ, RO, VE, NA, AM, AG, MO } = require("./_pri3d");

const M = "Educación Plástica";
// Bocadillo sencillo con texto y rabito hacia (rx, ry).
const bocadillo = (x, y, w, h, txt, c, tipo = "habla") => {
  const borde = tipo === "piensa" ? `<ellipse cx="${x}" cy="${y}" rx="${w / 2}" ry="${h / 2}" fill="var(--paper)" stroke="${c}" stroke-width="2"/><circle cx="${x - 6}" cy="${y + h / 2 + 8}" r="4" fill="var(--paper)" stroke="${c}" stroke-width="2"/><circle cx="${x - 12}" cy="${y + h / 2 + 18}" r="2.5" fill="var(--paper)" stroke="${c}" stroke-width="2"/>`
    : `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="var(--paper)" stroke="${c}" stroke-width="2" ${tipo === "susurra" ? 'stroke-dasharray="5 4"' : ""}/><path d="M${x - 8} ${y + h / 2 - 1} l -4 12 l 12 -11" fill="var(--paper)" stroke="${c}" stroke-width="2"/>`;
  return borde + tx(x, y + 4, txt, { s: 11, c });
};

module.exports = tema({
  materia: M,
  titulo: "El cómic: viñetas y bocadillos",
  objetivos: ["Saber qué es un cómic y en qué orden se lee", "Reconocer la viñeta, el bocadillo, la cartela y la onomatopeya", "Expresar emociones con las caras y los gestos de los personajes", "Crear una tira cómica de tres viñetas con principio, nudo y final"],
  claves: ["cómic", "tebeo", "historieta", "viñeta", "tira", "bocadillo", "cartela", "onomatopeya", "personaje", "líneas de movimiento"],
  pregunta: [
    "En una tira de cómic ves a un perro mirando un hueso, luego saltando y al final con el hueso en la boca. ¿Cómo sabes lo que pasó entre un dibujo y otro si nadie te lo cuenta?",
    "Porque el cómic cuenta la historia en <mark>viñetas</mark>, como fotos de momentos importantes puestas en orden. Tu imaginación une los momentos: <b>principio</b> (ve el hueso), <b>nudo</b> (salta) y <b>final</b> (lo consigue). ¡El lector completa la historia!",
  ],
  bloques: [
    ["¿Qué es un cómic?", `<p>Un <mark>cómic</mark> es una historia contada con <b>dibujos</b> colocados en orden y, normalmente, con <b>textos</b> cortos. También se llama <b>tebeo</b> o <b>historieta</b>. Se lee igual que un libro: de <b>izquierda a derecha</b> y de <b>arriba abajo</b>.</p><p>Los cómics pueden ser de risa, de aventuras, de animales, de superhéroes o de misterio. Algunos personajes de tebeo son muy famosos en España, como <b>Mortadelo y Filemón</b>, creados por Francisco Ibáñez.</p>`,
      comic("Tira cómica de tres viñetas: un perro ve un hueso, salta y lo consigue", [["¡Un hueso!", AZ], ["", RO, "¡HOP!"], ["¡Ñam!", VE]])],
    ["La viñeta y la tira", `<p>Cada recuadro de un cómic es una <mark>viñeta</mark>. En cada viñeta se ve un <b>momento</b> de la historia, como si hiciéramos una foto. Varias viñetas en fila forman una <mark>tira</mark>, y varias tiras forman una <b>página</b>.</p><p>Las viñetas suelen tener un borde, pero pueden ser de distintos tamaños: una muy grande para el momento más emocionante y otras pequeñitas para acciones rápidas. Entre viñeta y viñeta hay un espacio en blanco que se llama <b>calle</b>.</p>`,
      svg("Una página de cómic con tres tiras de viñetas numeradas", `<rect x="40" y="10" width="180" height="160" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-opacity=".3"/>${[[48, 18, 80, 44, 1], [134, 18, 78, 44, 2], [48, 68, 164, 50, 3], [48, 124, 52, 38, 4], [106, 124, 106, 38, 5]].map(([x, y, w, h, n]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>${t(x + w / 2, y + h / 2 + 6, String(n), { s: 16, c: AZ })}`).join("")}${tx(244, 46, "tira", { s: 10, c: "var(--muted)" })}`)],
    ["Los bocadillos", `<p>Lo que dicen los personajes se escribe dentro de un <mark>bocadillo</mark> o globo. Tiene una colita, el <b>rabito</b>, que apunta al personaje que habla. El borde del bocadillo nos dice <b>cómo</b> habla.</p><p>Con borde <b>normal</b>, habla tranquilo. Con forma de <b>nube</b> y burbujitas, está <b>pensando</b>. Con borde de <b>picos</b>, está <b>gritando</b>. Con borde de <b>rayitas</b>, está <b>susurrando</b> (hablando muy bajito). Escribe con letra clara y deja espacio antes de dibujar.</p>`,
      svg("Bocadillos de hablar, pensar y susurrar", `${bocadillo(70, 40, 96, 30, "¡Hola!", AZ)}${bocadillo(190, 40, 96, 34, "Mmm…", VE, "piensa")}${bocadillo(70, 120, 96, 30, "chsss…", MO, "susurra")}${tx(70, 82, "habla", { s: 10.5, c: "var(--muted)" })}${tx(190, 100, "piensa", { s: 10.5, c: "var(--muted)" })}${tx(70, 162, "susurra", { s: 10.5, c: "var(--muted)" })}<path d="M156 108 l 8 -12 l 6 8 l 10 -14 l 6 10 l 12 -8 l 0 12 l 14 0 l -8 10 l 8 10 l -14 2 l 2 12 l -14 -6 l -8 10 l -6 -10 l -12 4 l 2 -12 l -12 -4 l 8 -8 z" fill="var(--paper)" stroke="${RO}" stroke-width="2"/>${tx(190, 124, "¡NO!", { s: 12, c: RO })}${tx(190, 162, "grita", { s: 10.5, c: "var(--muted)" })}`)],
    ["La cartela", `<p>A veces en el cómic hay un <b>narrador</b> que nos cuenta cosas que no dicen los personajes: dónde están, qué hora es o qué pasó antes. Esos textos van en la <mark>cartela</mark>, un recuadro rectangular que suele estar en una esquina de arriba de la viñeta.</p><p>Ejemplos de cartelas: «Érase una vez…», «Mientras tanto, en el castillo…», «Al día siguiente…», «¡Fin!». La cartela no tiene rabito, porque no habla ningún personaje.</p>`,
      svg("Una viñeta con cartela arriba y un personaje", `<rect x="40" y="16" width="180" height="140" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/><rect x="40" y="16" width="130" height="26" fill="${AM}" fill-opacity=".35" stroke="var(--ink)" stroke-width="1.5"/>${tx(105, 34, "Al día siguiente…", { s: 11.5 })}${persona(130, 84, VE)}<path d="M40 140 H 220" stroke="var(--line)" stroke-width="2"/>${tx(130, 172, "la cartela: voz del narrador", { s: 10.5, c: "var(--muted)" })}`)],
    ["Onomatopeyas", `<p>Una <mark>onomatopeya</mark> es una palabra que imita un <b>sonido</b>. En los cómics se escriben grandes, de colores y con formas divertidas, fuera de los bocadillos. <b>¡RIIING!</b> es un timbre o un teléfono. <b>¡PLAF!</b>, algo que cae al suelo. <b>¡ZZZ!</b>, alguien que duerme. <b>¡GUAU!</b>, un perro. <b>¡MIAU!</b>, un gato. <b>¡TOC, TOC!</b>, alguien que llama a la puerta.</p><p>Inventa tú también: ¿cómo suena una pompa de chicle que explota? ¡PLOP!</p>`,
      svg("Onomatopeyas: RIIING, PLAF, ZZZ y TOC TOC", `${[["¡RIIING!", 66, 52, AZ, 20, -6], ["¡ZZZ!", 196, 48, MO, 22, 6], ["¡PLAF!", 70, 126, RO, 22, 4], ["¡TOC, TOC!", 190, 128, NA, 18, -4]].map(([s, x, y, c, f, r]) => `<g transform="rotate(${r} ${x} ${y})">${t(x, y, s, { s: f, c, d: true })}</g>`).join("")}`), "pl6b"],
    ["Caras que hablan: las emociones", `<p>En un cómic las caras son muy importantes, porque nos dicen lo que <b>sienten</b> los personajes sin necesidad de palabras. Fíjate en tres partes: los <b>ojos</b>, las <b>cejas</b> y la <b>boca</b>.</p><p><b>Contento:</b> boca hacia arriba. <b>Triste:</b> boca hacia abajo y quizá una lágrima. <b>Enfadado:</b> cejas bajas hacia el centro. <b>Sorprendido:</b> ojos muy abiertos y boca en forma de O. Practica delante del espejo y dibuja lo que ves.</p>`,
      svg("Caras contenta, triste, normal y sorprendida", `${[["contento", "bien", VE], ["triste", "mal", AZ], ["serio", "regular", NA], ["sorpresa", "sorpresa", MO]].map(([n, tp, c], i) => `${cara(36 + i * 63, 74, 24, tp, c)}${tx(36 + i * 63, 124, n, { s: 11, c })}`).join("")}<path d="M98 82 q -3 6 0 8 q 3 -2 0 -8" fill="${AG}"/>`)],
    ["Líneas de movimiento", `<p>Los dibujos de un cómic están quietos, pero podemos hacer que parezcan moverse con <mark>líneas de movimiento</mark>: rayas detrás de algo que corre, curvas alrededor de una mano que saluda, nubecitas de polvo bajo los pies o gotas de sudor cuando alguien se esfuerza.</p><p>También se usan <b>símbolos</b>: una <b>bombilla</b> encendida es una idea; <b>estrellitas</b> alrededor de la cabeza, un golpe; <b>corazones</b>, amor; una <b>nube negra</b>, mal humor. ¡Todo el mundo los entiende!</p>`,
      svg("Una pelota con líneas de movimiento y un personaje con una bombilla", `<circle cx="96" cy="70" r="16" fill="${RO}"/>${[0, 1, 2].map((i) => `<path d="M${30 + i * 4} ${58 + i * 12} h 40" stroke="${RO}" stroke-width="2.5" stroke-linecap="round"/>`).join("")}${persona(190, 80, VE)}<circle cx="190" cy="40" r="11" fill="${AM}"/><rect x="185" y="50" width="10" height="6" fill="var(--muted)"/>${[0, 1, 2, 3, 4].map((i) => { const a = (-150 + i * 30) * Math.PI / 180; return `<path d="M${(190 + 15 * Math.cos(a)).toFixed(1)} ${(40 + 15 * Math.sin(a)).toFixed(1)} l ${(6 * Math.cos(a)).toFixed(1)} ${(6 * Math.sin(a)).toFixed(1)}" stroke="${AM}" stroke-width="2"/>`; }).join("")}${tx(70, 130, "¡se mueve!", { s: 11, c: RO })}${tx(190, 150, "¡una idea!", { s: 11, c: VE })}`)],
    ["Principio, nudo y final", `<p>Una tira cómica corta cuenta una historia completa en <b>tres viñetas</b>, igual que un cuento. En la <mark>primera</mark> presentamos al personaje y dónde está (<b>principio</b>). En la <mark>segunda</mark> pasa algo: un problema o una sorpresa (<b>nudo</b>). En la <mark>tercera</mark> se resuelve, muchas veces de forma divertida (<b>final</b>).</p><p>Antes de dibujar, escribe en una frase qué pasa en cada viñeta: es el <b>guion</b>. Por ejemplo: 1) Una niña hace un castillo de arena. 2) Llega una ola: ¡CHOF! 3) La niña se ríe y hace un barco.</p>`,
      L.filas("Las tres viñetas de una historia", [["1. Principio", "personaje y lugar", AZ], ["2. Nudo", "un problema: ¡CHOF!", RO], ["3. Final", "se resuelve", VE]], "Guion de una tira")],
    ["Taller: mi tira cómica", `<p>Inventa un <b>personaje</b>: un animal, un robot, una niña con un superpoder. Dibuja tres recuadros iguales con regla. Escribe primero el guion de tres frases. Haz los dibujos a lápiz y <b>deja sitio</b> arriba para los bocadillos.</p><p>Usa al menos un <b>bocadillo</b>, una <b>onomatopeya</b> y unas <b>líneas de movimiento</b>. Repasa con rotulador negro y colorea. Al final, juntad todas las tiras de la clase en un <b>tebeo</b> grapado y llevadlo a la biblioteca del cole.</p>`,
      comic("Tira cómica: un castillo de arena, una ola y un barco", [["¡Mi castillo!", AM], ["", AG, "¡CHOF!"], ["¡Ahora|un barco!", VE]])],
  ],
  ejemplos: [
    ["El personaje está pensando en una pizza. ¿Qué bocadillo uso?", ["Pensar no es hablar en voz alta.", "El bocadillo de pensar tiene forma de nube."], "Un bocadillo de nube con burbujitas."],
    ["¿Dónde escribo «Mientras tanto, en la selva…»?", ["Lo dice el narrador, no un personaje.", "El texto del narrador va en un recuadro."], "En una cartela."],
    ["Escribe la onomatopeya de un teléfono.", ["Imita el sonido del timbre.", "Letras grandes y alargadas."], "¡RIIING!"],
  ],
  errores: [
    "Dibujar primero y no dejar espacio para los bocadillos.",
    "Olvidar el rabito del bocadillo y no saber quién habla.",
    "Escribir demasiado texto: en el cómic manda el dibujo.",
    "Leer las viñetas en desorden: de izquierda a derecha y de arriba abajo.",
    "Poner a los personajes siempre con la misma cara aunque sientan cosas distintas.",
  ],
  ejercicios: [
    ["¿Qué otros nombres tiene el cómic?", "Tebeo e historieta."],
    ["¿Cómo se lee un cómic?", "De izquierda a derecha y de arriba abajo."],
    ["¿Qué es una viñeta?", "Cada recuadro del cómic, que muestra un momento."],
    ["¿Qué es una tira?", "Varias viñetas en fila."],
    ["¿Cómo es el bocadillo de un grito?", "Con el borde en picos."],
    ["¿Para qué sirve la cartela?", "Para el texto del narrador."],
    ["Escribe tres onomatopeyas y qué sonido imitan.", "¡GUAU! (perro), ¡PLAF! (caída), ¡ZZZ! (dormir)."],
    ["¿Cómo dibujo una cara enfadada?", "Con las cejas bajas hacia el centro y la boca recta o hacia abajo."],
    ["¿Qué significa una bombilla encima de la cabeza?", "Que el personaje ha tenido una idea."],
    ["Escribe el guion de una tira de tres viñetas.", "Respuesta libre: 1) Un gato ve un ratón. 2) Corre y ¡PLAF!, choca con la puerta. 3) El ratón se ríe."],
  ],
  figura: ["El cómic", L.columnas("Elementos del cómic", [["recuadros", "VIÑETA", ["un momento", "tira, página"], AZ], ["lo que dicen", "BOCADILLO", ["habla, piensa", "grita, susurra"], VE], ["narrador", "CARTELA", ["Al día", "siguiente…"], AM], ["sonidos", "¡PLAF!", ["onomatopeyas"], RO]])],
  video: "pl6v",
  quiz: [
    ["Cada recuadro de un cómic es una…", ["viñeta", "cartela", "página"], "Viñeta."],
    ["Varias viñetas en fila forman una…", ["tira", "calle", "cartela"], "Tira."],
    ["El cómic se lee de…", ["izquierda a derecha", "derecha a izquierda", "abajo arriba"], "Izquierda a derecha."],
    ["Lo que dice un personaje va en un…", ["bocadillo", "cartela", "marco"], "Bocadillo."],
    ["Un bocadillo en forma de nube indica que…", ["piensa", "grita", "susurra"], "Piensa."],
    ["Un bocadillo con picos indica que…", ["grita", "duerme", "piensa"], "Grita."],
    ["El texto del narrador va en la…", ["cartela", "viñeta vacía", "onomatopeya"], "Cartela."],
    ["«¡ZZZ!» significa que alguien…", ["duerme", "come", "corre"], "Duerme."],
    ["Una bombilla sobre la cabeza es…", ["una idea", "un enfado", "un golpe"], "Idea."],
    ["La segunda viñeta de una tira suele ser el…", ["nudo", "principio", "final"], "Nudo."],
  ],
  examen: [
    ["Otro nombre del cómic es…", ["tebeo", "retrato", "mural"], "Tebeo."],
    ["El espacio blanco entre viñetas se llama…", ["calle", "tira", "margen"], "Calle."],
    ["Un bocadillo con borde de rayitas indica…", ["susurro", "grito", "canción"], "Susurro."],
    ["Mortadelo y Filemón los creó…", ["Francisco Ibáñez", "Picasso", "Miró"], "Ibáñez."],
  ],
  feynman: ["Qué es un cómic y cómo se lee", "Qué son la viñeta, el bocadillo y la cartela", "Cómo se dibujan los sonidos, el movimiento y las emociones", "Cómo hago una tira con principio, nudo y final"],
  mapa: ["EL CÓMIC", RO, [["Viñeta", "momento · tira · página", AZ], ["Bocadillo", "habla · piensa · grita", VE], ["Cartela", "voz del narrador", AM], ["Sonido y movimiento", "¡PLAF! · líneas", RO]], 240],
  tarjetas: [
    ["Cómic", "Historia contada con dibujos en orden y textos."],
    ["Viñeta", "Cada recuadro del cómic."],
    ["Tira", "Varias viñetas en fila."],
    ["Bocadillo", "Globo con lo que dice o piensa un personaje."],
    ["Cartela", "Recuadro con la voz del narrador."],
    ["Onomatopeya", "Palabra que imita un sonido: ¡PLAF!"],
    ["Líneas de movimiento", "Rayas que hacen que algo parezca moverse."],
    ["Guion", "Lo que pasa en cada viñeta, escrito antes de dibujar."],
  ],
  familias: ["Leed juntos un tebeo y buscad bocadillos de distintos tipos, cartelas y onomatopeyas.", "Inventad entre todos una tira de tres viñetas sobre algo divertido de la familia."],
  saberes: "El cómic como lenguaje visual: viñeta, tira, bocadillos, cartela, onomatopeyas, expresión de emociones, líneas de movimiento y narración en tres tiempos (Educación Plástica y Visual)",
  ideas: ["Tebeo de la clase con una tira de cada alumno.", "Muestrario de onomatopeyas inventadas.", "Rincón de lectura de cómics en la biblioteca."],
  fuentes: [["Biblioteca Nacional de España: el cómic", "https://www.bne.es/es/colecciones/comic"], ["Diccionario de la RAE: tebeo", "https://dle.rae.es/tebeo"]],
});

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Crear un personaje de cómic con rasgos propios", "Usar planos y fondos en las viñetas", "Conocer la historia del cómic y sus autores", "Planificar un cómic con guion y boceto"],
  lectura: { titulo: "El superhéroe de Hugo", html: `<p>Hugo no sabía escribir cuentos largos. Cada vez que la maestra pedía una redacción, se quedaba mirando la hoja en blanco durante media hora.</p><p>Un día, la maestra propuso algo distinto:</p><p>—Esta semana vamos a contar una historia en un cómic de seis viñetas.</p><p>A Hugo se le iluminó la cara. Le encantaba dibujar. Esa tarde inventó a su personaje: el Capitán Calcetín, un calcetín desparejado que buscaba a su compañero por toda la casa.</p><p>En la primera viñeta, el Capitán salía de la lavadora. En la segunda, buscaba bajo la cama y un bocadillo decía: «¿Dónde estás, hermano?». En la tercera, un perro enorme lo perseguía: «¡GUAU, GUAU!». Hugo dibujó líneas de movimiento para que se notara lo rápido que corría.</p><p>En la última viñeta, el calcetín encontraba a su pareja en la mochila del perro. Los dos se abrazaban con corazones alrededor.</p><p>Cuando Hugo leyó su cómic en voz alta, toda la clase se rio.</p><p>—¿Ves? —le dijo la maestra—. Sí sabes contar historias. Solo necesitabas tu propia forma de hacerlo.</p>` },
  tras: {
    "La viñeta y la tira": [
      ["Planos en las viñetas", `<p>En el cómic, igual que en el cine, el dibujante decide <mark>desde qué distancia</mark> vemos a los personajes. Cada forma de encuadrar se llama <b>plano</b>.</p><ul><li><b>Plano general</b>: se ve el personaje entero y mucho paisaje alrededor. Sirve para mostrar <b>dónde</b> ocurre la historia: una ciudad, un bosque, una playa.</li><li><b>Plano entero</b>: se ve al personaje de pies a cabeza. Sirve para ver lo que hace, por ejemplo correr o saltar.</li><li><b>Plano medio</b>: se ve de la cintura para arriba. Es el plano típico de las conversaciones.</li><li><b>Primer plano</b>: solo se ve la cara. Sirve para mostrar <b>emociones</b>: sorpresa, miedo, alegría.</li><li><b>Plano detalle</b>: se ve una sola cosa muy de cerca, como una llave, un ojo o una nota. Sirve para que el lector se fije en algo importante.</li></ul><p>Un buen cómic <b>combina</b> planos distintos. Si todas las viñetas tienen el mismo plano, la historia resulta aburrida. Normalmente se empieza con un plano general para situar al lector.</p><p><b>Actividad</b>: dibuja a un mismo personaje en tres viñetas: plano general, plano medio y primer plano.</p>`,
        H6.flujo("Planos", ["general|lugar", "entero|acción", "medio|diálogo", "primer|emoción"], cAZ)],
    ],
    "Los bocadillos": [
      ["Las letras en el cómic", `<p>En un cómic, las <mark>letras</mark> también se dibujan, y su forma nos dice cómo se habla.</p><ul><li>Las letras <b>normales</b>, en mayúsculas y claras, son para hablar en tono normal. Muchos cómics escriben todo en mayúsculas para que se lea bien.</li><li>Las letras <b>grandes y gruesas</b> indican que el personaje <b>grita</b>: «¡SOCORRO!».</li><li>Las letras <b>pequeñitas</b> indican que habla muy bajo, que susurra o que está cansado.</li><li>Las letras <b>temblorosas</b> indican miedo o frío.</li><li>Las letras <b>en negrita</b> señalan la palabra más importante de una frase.</li></ul><p>Los dibujantes usan también <b>signos</b> dentro de los bocadillos para expresar sin palabras:</p><ul><li>«<b>?</b>» para la duda o la sorpresa.</li><li>«<b>!</b>» para el asombro.</li><li>«<b>...</b>» cuando el personaje se queda callado.</li><li>Una <b>bombilla</b> para una idea; <b>notas musicales</b> para cantar; <b>zzz</b> para dormir; <b>sapos y culebras</b> o rayos para los enfados.</li></ul><p>Estos signos se llaman <b>metáforas visuales</b>, porque dicen con un dibujo lo que siente o piensa el personaje.</p><p><b>Actividad</b>: escribe «hola» de cuatro maneras distintas: gritando, susurrando, con miedo y con alegría.</p>`,
        L6.filas("Letras", [["grandes", "grita", cRO], ["pequeñas", "susurra", cAZ], ["temblorosas", "miedo", cMO], ["bombilla", "idea", cNA]])],
    ],
    "Caras que hablan: las emociones": [
      ["Crear un personaje", `<p>Todo cómic necesita un buen <mark>personaje</mark>. Para crearlo, hazte estas preguntas:</p><ul><li><b>¿Quién es?</b> Puede ser una persona, un animal, un robot o incluso un objeto, como el calcetín de la lectura.</li><li><b>¿Cómo es por fuera?</b> Elige una forma sencilla para la cabeza y el cuerpo (un círculo, un rectángulo, un triángulo) y un <b>rasgo especial</b> que lo distinga: un pelo de punta, unas gafas enormes, una capa, un sombrero.</li><li><b>¿Cómo es por dentro?</b> ¿Es valiente, despistado, gruñón, miedoso? Su carácter decidirá cómo actúa.</li><li><b>¿Qué quiere?</b> Todo personaje busca algo, y eso mueve la historia.</li></ul><p>Un consejo muy importante: el personaje tiene que ser <b>fácil de dibujar</b>, porque lo vas a repetir en todas las viñetas. Si es muy complicado, en cada viñeta te saldrá diferente.</p><p>Los dibujantes hacen una <b>hoja de personaje</b>: lo dibujan de frente, de perfil y de espaldas, con varias expresiones, para que siempre se parezca.</p><p><b>Actividad</b>: inventa un personaje y dibuja su hoja de personaje: de frente, de perfil, contento y enfadado.</p>`,
        H6.rueda("Personaje", "¿QUIÉN?", [["forma", cAZ], ["rasgo", cRO], ["carácter", cVE], ["deseo", cNA]])],
    ],
    "Líneas de movimiento": [
      ["El fondo y el color", `<p>Los personajes no flotan en el aire: están en un <mark>lugar</mark>. El <b>fondo</b> de la viñeta nos dice dónde ocurre la escena y si es de día o de noche.</p><p>No hace falta dibujar el fondo en todas las viñetas. Un truco de los dibujantes es dibujarlo con detalle en la primera viñeta de cada escena (en plano general) y luego simplificarlo, o poner solo un color, para que destaquen los personajes.</p><p>El <b>color</b> también cuenta cosas:</p><ul><li>Colores <b>cálidos</b> (rojo, naranja) para escenas de acción, peligro o enfado.</li><li>Colores <b>fríos</b> (azul, violeta) para la noche, la tristeza o el misterio.</li><li>Un fondo <b>de un solo color</b> muy vivo, sin dibujo, para un momento de sorpresa.</li></ul><p>Muchos cómics se colorean después de dibujar a lápiz y repasar con <b>tinta negra</b>. Este repaso se llama <b>entintado</b> y hace que las líneas queden limpias.</p><p>También hay cómics en <b>blanco y negro</b>, como muchos mangas japoneses, que usan tramas de puntos y rayas para hacer sombras.</p><p><b>Actividad</b>: dibuja la misma viñeta dos veces: una de día con colores cálidos y otra de noche con colores fríos.</p>`,
        H6.dos("Color", ["CÁLIDOS", ["acción", "peligro", "alegría"], cRO], ["FRÍOS", ["noche", "tristeza", "misterio"], cAZ])],
    ],
    "Principio, nudo y final": [
      ["Del guion al boceto", `<p>Los profesionales no dibujan un cómic directamente. Siguen unos <mark>pasos</mark>:</p><ul><li><b>1. La idea</b>: se piensa de qué tratará la historia en una o dos frases. Por ejemplo: «Un calcetín busca a su pareja por toda la casa».</li><li><b>2. El guion</b>: se escribe qué pasa en cada viñeta, qué dicen los personajes y qué sonidos hay. Es como el plan de la historia.</li><li><b>3. El boceto</b>: se dibujan las viñetas con muy poco detalle, con «muñecos de palitos», para decidir dónde va cada cosa y cuánto espacio dejar a los bocadillos.</li><li><b>4. El dibujo</b>: se dibuja a lápiz con detalle.</li><li><b>5. El entintado</b>: se repasan las líneas con rotulador negro y se borra el lápiz.</li><li><b>6. El color y las letras</b>: se colorea y se escriben los textos.</li></ul><p>En los cómics grandes, cada paso lo hace una persona distinta: <b>guionista</b>, <b>dibujante</b>, <b>entintador</b>, <b>colorista</b> y <b>rotulista</b>. ¡Es un trabajo en equipo!</p><p>Un error frecuente es escribir los bocadillos al final y que no quepan. Por eso, en el boceto, hay que dejar el espacio de los textos desde el principio.</p><p><b>Actividad</b>: escribe el guion de una tira de cuatro viñetas antes de dibujarla.</p>`,
        L6.filas("Pasos", [["1 idea", "una frase", cNA], ["2 guion", "qué pasa", cAZ], ["3 boceto", "palitos", cVE], ["4 tinta", "y color", cRO]]),
        ["ID0swKPytGA", "Cómo crear una historieta paso a paso (con ejemplos fáciles)", "Te Lo Explico", 702848]],
    ],
  },
  final: [
    ["Historia del cómic", `<p>Contar historias con dibujos es muy antiguo. Las pinturas de las cuevas, los relieves de Egipto o los tapices medievales ya mostraban escenas en orden. Pero el <mark>cómic moderno</mark> nació a finales del siglo XIX en los periódicos.</p><ul><li>En <b>Estados Unidos</b> aparecieron las primeras tiras cómicas en los periódicos de los domingos. Después llegaron los superhéroes, como Superman (1938).</li><li>En <b>España</b>, los cómics se llamaron <b>tebeos</b> por una revista infantil llamada <i>TBO</i>, nacida en 1917. Muy famosos son <b>Mortadelo y Filemón</b>, de Francisco Ibáñez, y <b>Zipi y Zape</b>.</li><li>En <b>Bélgica y Francia</b> nacieron <b>Tintín</b>, el joven reportero de Hergé, y <b>Astérix</b>, el galo que bebe una poción mágica.</li><li>En <b>Japón</b> se llaman <b>manga</b> y se leen de derecha a izquierda. Sus personajes suelen tener ojos muy grandes.</li><li>En <b>Argentina</b>, Quino creó a <b>Mafalda</b>, una niña que hacía preguntas muy inteligentes sobre el mundo.</li></ul><p>Hoy el cómic se considera un arte, a veces llamado <b>el noveno arte</b>, y hay museos y festivales dedicados a él.</p><p><b>Actividad</b>: trae a clase tu tebeo favorito y explica de qué país es y quién lo creó.</p>`,
      L6.filas("Países", [["España", "tebeo, Mortadelo", cRO], ["Bélgica", "Tintín", cAZ], ["Japón", "manga", cMO], ["Argentina", "Mafalda", cVE]])],
    ["Cómics sin palabras", `<p>Algunos cómics se cuentan <mark>sin una sola palabra</mark>: todo se entiende por los dibujos. Se llaman <b>cómics mudos</b>.</p><p>Para que se entiendan bien, el dibujante tiene que:</p><ul><li>Dibujar las <b>expresiones</b> de las caras muy claras: cejas, ojos y boca dicen lo que siente el personaje.</li><li>Usar <b>gestos</b> del cuerpo exagerados: brazos arriba para la alegría, hombros caídos para la tristeza.</li><li>Ordenar bien las <b>acciones</b>, paso a paso, para que el lector no se pierda.</li><li>Usar <b>metáforas visuales</b> y onomatopeyas, que no son palabras de un idioma concreto.</li></ul><p>Los cómics mudos tienen una gran ventaja: los puede leer <b>cualquier persona del mundo</b>, hable el idioma que hable, e incluso niños que todavía no saben leer.</p><p>También sirven para practicar: si tu historia se entiende sin texto, es que los dibujos están bien contados. Muchos dibujantes prueban primero sus viñetas sin bocadillos para comprobarlo.</p><p><b>Actividad</b>: dibuja una tira muda de cuatro viñetas sobre algo que te pasó en el recreo. Pásala a un compañero y pídele que te cuente lo que entiende.</p>`,
      H6.dos("Sin texto", ["SE USAN", ["caras", "gestos", "orden"], cVE], ["VENTAJA", ["todo el mundo", "sin idioma", "sin leer"], cNA])],
  ],
  ejemplos: [
    ["¿Qué plano usarías para mostrar el miedo de un personaje?", ["El miedo se ve en la cara.", "El plano que muestra la cara es el primer plano."], "Primer plano."],
    ["¿Cómo se escribe que un personaje grita?", ["Las letras muestran el tono.", "Para gritar, letras grandes y gruesas."], "Con letras grandes, gruesas y exclamaciones."],
  ],
  errores: ["Dibujar los bocadillos al final sin dejar espacio, y que el texto no quepa.", "Crear un personaje tan complicado que sale distinto en cada viñeta."],
  ejercicios: [
    ["b", "¿Qué plano muestra el lugar de la historia?", "El plano general."],
    ["b", "¿Qué significa una bombilla sobre la cabeza?", "Que el personaje tiene una idea."],
    ["b", "¿Cómo se llaman los cómics en Japón?", "Manga."],
    ["b", "¿Qué es el entintado?", "Repasar con tinta negra el dibujo a lápiz."],
    ["b", "En la lectura, ¿quién es el Capitán Calcetín?", "Un calcetín desparejado que busca a su compañero."],
    ["m", "Ordena: boceto, idea, entintado, guion.", "Idea, guion, boceto, entintado."],
    ["m", "¿Por qué se llaman tebeos en España?", "Por la revista infantil TBO."],
    ["m", "¿Qué es una hoja de personaje?", "Dibujos del personaje desde varios lados y con varias expresiones."],
    ["m", "¿Qué colores usarías para una escena de noche?", "Colores fríos: azul y violeta."],
    ["m", "Nombra dos ventajas de un cómic mudo.", "Lo entiende cualquier persona y niños que no saben leer."],
    ["a", "En la lectura, ¿qué recursos usa Hugo para que su cómic sea divertido?", "Un personaje original, bocadillos, la onomatopeya GUAU, líneas de movimiento y corazones."],
    ["a", "Escribe el guion de un cómic de seis viñetas.", "Respuesta abierta."],
    ["a", "Dibuja una tira usando al menos tres planos distintos.", "Respuesta abierta."],
    ["a", "Compara un cómic español y un manga.", "Respuesta abierta (sentido de lectura, ojos grandes, color)."],
  ],
  quiz: [
    ["El plano que muestra solo una cosa muy de cerca es…", ["plano detalle", "plano general", "plano medio"], "Planos."],
    ["Las letras pequeñitas indican que el personaje…", ["susurra", "grita", "canta"], "Letras."],
    ["Mortadelo y Filemón los creó…", ["Francisco Ibáñez", "Hergé", "Quino"], "Historia."],
    ["El primer paso para hacer un cómic es…", ["la idea", "el color", "el entintado"], "Pasos."],
    ["Un cómic sin palabras se llama…", ["cómic mudo", "tebeo", "guion"], "Sin texto."],
  ],
  examen: [
    ["En la lectura, ¿dónde encuentra el calcetín a su pareja?", ["en la mochila del perro", "en la lavadora", "bajo la cama"], "Lectura."],
    ["Mafalda es un cómic de…", ["Argentina", "Japón", "Bélgica"], "Historia."],
  ],
  tarjetas: [
    ["Planos", "General, entero, medio, primer plano y detalle."],
    ["Letras y signos", "Grandes para gritar, pequeñas para susurrar; bombilla, zzz."],
    ["Pasos", "Idea, guion, boceto, dibujo, entintado, color y letras."],
    ["Historia", "Tebeo, Mortadelo, Tintín, Astérix, manga, Mafalda."],
  ],
  glosario: [
    ["Plano", "Distancia desde la que vemos la escena."],
    ["Primer plano", "Plano que muestra la cara."],
    ["Plano general", "Plano que muestra el lugar."],
    ["Metáfora visual", "Dibujo que expresa una idea o emoción."],
    ["Hoja de personaje", "Dibujos de un personaje desde varios lados."],
    ["Fondo", "Lugar dibujado detrás de los personajes."],
    ["Guion", "Plan escrito de lo que pasa en cada viñeta."],
    ["Boceto", "Dibujo rápido de prueba."],
    ["Entintado", "Repaso del dibujo con tinta negra."],
    ["Tebeo", "Nombre del cómic en España."],
    ["Manga", "Cómic japonés."],
    ["Cómic mudo", "Cómic sin palabras."],
  ],
  situacion: {
    titulo: "El tebeo de la clase",
    reto: "Cada alumno crea un personaje y una tira, y la clase los reúne en un tebeo para la biblioteca del colegio.",
    pasos: ["Inventar un personaje y hacer su hoja de personaje.", "Escribir la idea y el guion de una tira de seis viñetas.", "Hacer el boceto con planos variados y espacio para los bocadillos.", "Dibujar, entintar, colorear y unir todas las tiras en un tebeo con portada."],
    producto: "Un tebeo de la clase con todas las tiras y una portada.",
    evaluacion: ["Crea un personaje reconocible en todas las viñetas.", "Usa planos, bocadillos y onomatopeyas.", "Sigue los pasos de guion, boceto y entintado.", "La historia tiene principio, nudo y final."],
  },
});
