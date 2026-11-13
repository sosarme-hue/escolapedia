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
