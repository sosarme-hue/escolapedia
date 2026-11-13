// Educación Plástica 4º de Primaria: el cómic. Viñetas y personajes propios en SVG.
const { tema, L, svg, tx, t, comic, persona, AZ, RO, VE, NA, AM, MO } = require("./_pri4d");

const M = "Educación Plástica";

// Bocadillo de un tipo: normal, pensamiento, grito o susurro.
const globo = (x, y, tipo, c) => {
  if (tipo === "piensa") return `<ellipse cx="${x}" cy="${y}" rx="30" ry="20" fill="var(--paper)" stroke="${c}" stroke-width="2"/><circle cx="${x - 8}" cy="${y + 28}" r="5" fill="var(--paper)" stroke="${c}" stroke-width="2"/><circle cx="${x - 14}" cy="${y + 40}" r="3" fill="var(--paper)" stroke="${c}" stroke-width="2"/>`;
  if (tipo === "grita") return `<path d="M${x - 32} ${y} l 8 -14 l 6 8 l 10 -16 l 6 12 l 12 -10 l 2 14 l 14 -2 l -6 12 l 10 8 l -14 4 l 4 12 l -14 -6 l -8 10 l -6 -10 l -12 6 l 0 -12 l -14 -2 z" fill="var(--paper)" stroke="${c}" stroke-width="2"/>`;
  if (tipo === "susurra") return `<ellipse cx="${x}" cy="${y}" rx="30" ry="20" fill="var(--paper)" stroke="${c}" stroke-width="2" stroke-dasharray="5 4"/><path d="M${x - 6} ${y + 19} l -4 12 l 12 -11" fill="var(--paper)" stroke="${c}" stroke-width="2" stroke-dasharray="5 4"/>`;
  return `<ellipse cx="${x}" cy="${y}" rx="30" ry="20" fill="var(--paper)" stroke="${c}" stroke-width="2"/><path d="M${x - 6} ${y + 19} l -4 12 l 12 -11" fill="var(--paper)" stroke="${c}" stroke-width="2"/>`;
};

module.exports = tema({
  materia: M,
  titulo: "El cómic",
  objetivos: ["Conocer qué es un cómic y cómo se lee", "Identificar sus elementos: viñeta, bocadillo, cartela, onomatopeya y líneas de movimiento", "Expresar emociones con los gestos de los personajes", "Crear una historieta corta con principio, nudo y final"],
  claves: ["cómic", "historieta", "viñeta", "bocadillo", "cartela", "onomatopeya", "línea cinética", "personaje", "guion", "tebeo"],
  pregunta: [
    "En un cómic no hay sonido, pero «oyes» los golpes, los gritos y hasta los ronquidos. ¿Cómo lo consiguen los dibujantes?",
    "Con trucos del <mark>lenguaje del cómic</mark>: las <b>onomatopeyas</b> (¡CRASH!, ¡ZZZ!) escriben los sonidos, los <b>bocadillos</b> con formas distintas muestran si alguien grita o susurra, y las <b>líneas de movimiento</b> hacen que las cosas parezcan moverse. ¡Todo se dibuja!",
  ],
  bloques: [
    ["¿Qué es un cómic?", `<p>Un <mark>cómic</mark>, también llamado <b>historieta</b> o <b>tebeo</b>, es una historia contada con <b>dibujos ordenados</b> y, casi siempre, con textos. Se lee como un libro: de izquierda a derecha y de arriba abajo, siguiendo el orden de los dibujos.</p><p>En España la palabra «tebeo» viene de una revista infantil muy antigua llamada <i>TBO</i>. Hay cómics de humor, de aventuras, de superhéroes, de misterio y hasta de ciencia. El cómic mezcla dos artes: el <b>dibujo</b> y la <b>literatura</b>.</p>`,
      comic("Tira de tres viñetas: saludo, pregunta y risa", [["¡Hola!", AZ], ["¿Jugamos?", RO], ["", VE, "¡JA, JA!"]])],
    ["La viñeta", `<p>Cada uno de los recuadros de un cómic se llama <mark>viñeta</mark>. Una viñeta muestra un <b>momento</b> de la historia, como una foto. Al pasar de una viñeta a otra, el tiempo avanza y nuestra imaginación rellena lo que ocurre entre medias.</p><p>Las viñetas pueden ser de muchos tamaños y formas: grandes para un momento importante, pequeñas para acciones rápidas, alargadas para un paisaje. El espacio blanco entre viñetas se llama <b>calle</b>. Una fila de viñetas es una <b>tira</b>, y una hoja entera, una <b>página</b>.</p>`,
      svg("Página de cómic con viñetas de distintos tamaños y su orden de lectura", `<rect x="50" y="10" width="160" height="160" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-opacity=".3"/>${[[58, 18, 70, 50, 1], [134, 18, 68, 50, 2], [58, 74, 144, 40, 3], [58, 120, 44, 42, 4], [108, 120, 94, 42, 5]].map(([x, y, w, h, n]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>${t(x + w / 2, y + h / 2 + 6, String(n), { s: 16, c: AZ })}`).join("")}${tx(232, 92, "calle", { s: 10, c: "var(--muted)" })}`)],
    ["Bocadillos y cartelas", `<p>Lo que dicen los personajes se escribe dentro de un <mark>bocadillo</mark> (o globo), que tiene un rabito o <b>delta</b> que señala quién habla. La forma del bocadillo indica <b>cómo</b> se habla: con borde normal, se habla tranquilo; con borde en <b>picos</b>, se grita; con borde de <b>puntitos</b>, se susurra; y con forma de <b>nube</b> y burbujas, el personaje está pensando.</p><p>La <mark>cartela</mark> es un recuadro, normalmente arriba de la viñeta, donde el narrador cuenta algo: «Mientras tanto…», «Al día siguiente…».</p>`,
      svg("Cuatro tipos de bocadillo: habla, piensa, grita y susurra", `${globo(50, 50, "habla", AZ)}${globo(180, 50, "piensa", VE)}${globo(50, 124, "grita", RO)}${globo(180, 124, "susurra", MO)}${tx(50, 54, "hablar", { s: 10.5, c: AZ })}${tx(180, 54, "pensar", { s: 10.5, c: VE })}${tx(50, 128, "gritar", { s: 10.5, c: RO })}${tx(180, 128, "susurrar", { s: 10.5, c: MO })}`), "pl7b"],
    ["Onomatopeyas", `<p>Las <mark>onomatopeyas</mark> son palabras que imitan sonidos. En los cómics se dibujan con letras grandes, de colores y con formas que expresan el sonido: <b>¡BOOM!</b> (explosión), <b>¡CRASH!</b> (algo se rompe), <b>¡RING!</b> (timbre), <b>¡ZZZ!</b> (dormir), <b>¡ÑAM!</b> (comer), <b>¡TOC, TOC!</b> (llamar a la puerta), <b>¡GUAU!</b> (perro).</p><p>Muchas vienen del inglés, porque los cómics americanos se hicieron muy famosos: <i>crash</i>, <i>bang</i>, <i>splash</i>. ¡Inventa las tuyas! ¿Cómo sonaría un dinosaurio estornudando?</p>`,
      svg("Onomatopeyas dibujadas con letras grandes", `${[["¡BOOM!", 60, 50, RO, 24, -8], ["¡ZZZ!", 190, 46, AZ, 20, 6], ["¡CRASH!", 70, 126, NA, 22, 4], ["¡ÑAM!", 192, 124, VE, 22, -6]].map(([s, x, y, c, f, r]) => `<g transform="rotate(${r} ${x} ${y})">${t(x, y, s, { s: f, c, d: true })}</g>`).join("")}`)],
    ["Líneas de movimiento y metáforas visuales", `<p>Para que un dibujo quieto parezca moverse, se dibujan <mark>líneas cinéticas</mark> o de movimiento: rayitas detrás de alguien que corre, curvas alrededor de una mano que saluda o nubecillas de polvo bajo los pies.</p><p>También se usan <b>metáforas visuales</b>, dibujos que expresan algo sin palabras: una <b>bombilla</b> encima de la cabeza significa «¡tengo una idea!»; <b>estrellitas</b> alrededor, que se ha dado un golpe; <b>corazones</b>, que está enamorado; una <b>nube negra</b>, que está de mal humor.</p>`,
      svg("Personaje corriendo con líneas de movimiento y otro con una bombilla", `${persona(80, 70, AZ, { brazos: [[-14, 4], [14, 18]], piernas: [[-14, 22], [14, 18]] })}${[0, 1, 2].map((i) => `<path d="M${20 + i * 6} ${78 + i * 12} h 30" stroke="${AZ}" stroke-width="2"/>`).join("")}<ellipse cx="60" cy="130" rx="8" ry="4" fill="var(--line)"/>${persona(190, 76, VE)}<circle cx="190" cy="38" r="12" fill="${AM}"/><rect x="185" y="48" width="10" height="7" fill="var(--muted)"/>${[0, 1, 2, 3, 4].map((i) => { const a = (-150 + i * 30) * Math.PI / 180; return `<path d="M${(190 + 16 * Math.cos(a)).toFixed(1)} ${(38 + 16 * Math.sin(a)).toFixed(1)} l ${(6 * Math.cos(a)).toFixed(1)} ${(6 * Math.sin(a)).toFixed(1)}" stroke="${AM}" stroke-width="2"/>`; }).join("")}${tx(70, 160, "líneas de movimiento", { s: 10.5, c: AZ })}${tx(190, 160, "¡una idea!", { s: 10.5, c: VE })}`)],
    ["Los personajes y sus gestos", `<p>En un cómic, los <b>personajes</b> se reconocen por su aspecto (ropa, pelo, tamaño) y por su forma de ser. Para que el lector entienda lo que sienten, los dibujantes exageran los <mark>gestos</mark>: los ojos, las cejas y la boca cambian con cada emoción.</p><p>Con las cejas hacia abajo, el personaje está <b>enfadado</b>; con la boca muy abierta y las cejas arriba, <b>sorprendido</b>; con la boca curvada hacia abajo y lágrimas, <b>triste</b>. Practica delante de un espejo: haz la cara y luego dibújala.</p>`,
      svg("Cuatro caras: alegre, triste, enfadada y sorprendida", `${[["alegre", "M-10 6 q 10 10 20 0", "", AM], ["triste", "M-10 10 q 10 -8 20 0", "", AZ], ["enfadado", "M-10 8 h 20", "M-12 -12 l 8 4 M12 -12 l -8 4", RO], ["sorpresa", "", "M-10 -16 q 4 -4 8 0 M2 -16 q 4 -4 8 0", VE]].map(([n, boca, cejas, c], i) => { const x = 36 + i * 62, y = 74; return `<circle cx="${x}" cy="${y}" r="24" fill="${c}" fill-opacity=".25" stroke="${c}" stroke-width="2"/><g transform="translate(${x} ${y})"><circle cx="-8" cy="-4" r="3" fill="var(--ink)"/><circle cx="8" cy="-4" r="3" fill="var(--ink)"/>${boca ? `<path d="${boca}" fill="none" stroke="var(--ink)" stroke-width="2"/>` : `<ellipse cx="0" cy="10" rx="5" ry="7" fill="var(--ink)"/>`}${cejas ? `<path d="${cejas}" fill="none" stroke="var(--ink)" stroke-width="2"/>` : ""}</g>${tx(x, 124, n, { s: 11, c })}`; }).join("")}`)],
    ["Los planos en el cómic", `<p>Igual que en la fotografía, el dibujante elige el <b>plano</b> de cada viñeta. Un <b>plano general</b> enseña dónde ocurre la acción (una ciudad, un bosque). Un <b>plano medio</b> se usa en las conversaciones. Un <b>primer plano</b> muestra la cara para que veamos una emoción fuerte.</p><p>Cambiar de plano hace que el cómic sea más interesante y parezca una película. Un buen truco: empieza la historia con un plano general para situar al lector y usa el primer plano en el momento más emocionante.</p>`,
      L.filas("Planos en las viñetas", [["plano general", "dónde ocurre", VE], ["plano medio", "conversaciones", AZ], ["primer plano", "emociones fuertes", RO]], "¿Qué plano elijo?")],
    ["Del guion a las viñetas", `<p>Antes de dibujar un cómic, los autores escriben un <mark>guion</mark>: deciden la historia y qué pasa en cada viñeta. Una historieta corta necesita, como un cuento, un <b>principio</b> (presentamos a los personajes), un <b>nudo</b> (aparece un problema) y un <b>final</b> (se resuelve, a veces con humor).</p><p>Después se hace un <b>boceto</b> a lápiz, se escriben los textos, se repasa con rotulador negro (<b>entintar</b>) y, por último, se colorea. ¡Deja espacio para los bocadillos antes de dibujar, o no cabrán las palabras!</p>`,
      L.filas("Pasos para hacer un cómic", [["1. Guion", "historia y viñetas", AZ], ["2. Boceto", "dibujo a lápiz", VE], ["3. Textos", "bocadillos y cartelas", NA], ["4. Tinta y color", "repasar y colorear", RO]], "Paso a paso")],
    ["Taller: mi historieta de cuatro viñetas", `<p>Inventa una historieta de <b>cuatro viñetas</b> con un personaje propio (un animal, un robot, un niño con un superpoder). <b>Viñeta 1:</b> presenta al personaje y el lugar con un plano general. <b>Viñetas 2 y 3:</b> aparece un problema; usa una onomatopeya y líneas de movimiento.</p><p><b>Viñeta 4:</b> final sorprendente o divertido, con un primer plano. Usa al menos dos tipos de bocadillo y una cartela («Al rato…»). Al terminar, intercambia tu cómic con un compañero: ¿lo entiende sin que se lo expliques?</p>`,
      comic("Historieta inventada: un robot, un problema y un final feliz", [["Soy Bip.", AZ], ["", RO, "¡CRASH!"], ["¡Uf, ya está!", VE]])],
  ],
  ejemplos: [
    ["¿Qué bocadillo uso si el personaje está pensando en un helado?", ["Pensar no es hablar en voz alta.", "El bocadillo de pensamiento tiene forma de nube con burbujas."], "Un bocadillo de nube con burbujitas."],
    ["Escribe una onomatopeya para un vaso que se cae y se rompe.", ["Busca un sonido de algo que se rompe.", "Letras grandes y en picos."], "¡CRASH! (o ¡CRAC!)."],
    ["¿Cómo dibujo que un personaje acaba de tener una idea?", ["Hay una metáfora visual muy conocida.", "Una bombilla encendida sobre su cabeza."], "Una bombilla encima de la cabeza."],
  ],
  errores: [
    "Dibujar primero y luego no tener sitio para los bocadillos.",
    "Poner demasiado texto en un bocadillo: el cómic se cuenta sobre todo con dibujos.",
    "Olvidar el rabito del bocadillo: no se sabe quién habla.",
    "Leer las viñetas en desorden: se leen de izquierda a derecha y de arriba abajo.",
    "Dibujar a los personajes con la misma cara siempre: los gestos muestran las emociones.",
  ],
  ejercicios: [
    ["¿Qué otros nombres tiene el cómic?", "Historieta y tebeo."],
    ["¿Qué es una viñeta?", "Cada recuadro del cómic, que muestra un momento de la historia."],
    ["¿Para qué sirve el bocadillo?", "Para escribir lo que dicen o piensan los personajes."],
    ["¿Cómo es el bocadillo de un grito?", "Con el borde en picos."],
    ["¿Qué es una cartela?", "Un recuadro con lo que cuenta el narrador."],
    ["Escribe tres onomatopeyas y su significado.", "¡ZZZ! (dormir), ¡BOOM! (explosión), ¡ÑAM! (comer)."],
    ["¿Qué son las líneas cinéticas?", "Líneas que indican movimiento."],
    ["¿Qué significan unas estrellitas alrededor de la cabeza?", "Que el personaje se ha dado un golpe o está mareado."],
    ["¿Qué plano usarías para mostrar una sorpresa?", "Un primer plano."],
    ["Escribe el guion de una tira de tres viñetas.", "Respuesta libre: 1) un gato ve un pez; 2) salta y ¡SPLASH!, cae al agua; 3) sale mojado y enfadado."],
  ],
  figura: ["El lenguaje del cómic", L.columnas("Elementos del cómic", [["recuadro", "VIÑETA", ["un momento", "de la historia"], AZ], ["lo que dicen", "BOCADILLO", ["habla, piensa", "grita, susurra"], VE], ["sonidos", "¡BOOM!", ["onomatopeyas"], RO], ["movimiento", "LÍNEAS", ["cinéticas", "metáforas"], AM]])],
  video: "pl7v",
  quiz: [
    ["Cada recuadro de un cómic es una…", ["viñeta", "cartela", "calle"], "Viñeta."],
    ["El cómic se lee…", ["de izquierda a derecha y de arriba abajo", "de abajo arriba", "en cualquier orden"], "Como un libro."],
    ["Un bocadillo con forma de nube indica que el personaje…", ["piensa", "grita", "susurra"], "Pensamiento."],
    ["Un bocadillo con picos indica que el personaje…", ["grita", "piensa", "duerme"], "Grito."],
    ["La palabra que imita un sonido es una…", ["onomatopeya", "cartela", "viñeta"], "Onomatopeya."],
    ["«¡ZZZ!» significa que alguien…", ["duerme", "come", "llama"], "Dormir."],
    ["Las líneas que indican movimiento se llaman…", ["cinéticas", "rectas", "calles"], "Cinéticas."],
    ["Una bombilla sobre la cabeza significa…", ["una idea", "sueño", "enfado"], "Idea."],
    ["El texto del narrador va en la…", ["cartela", "onomatopeya", "calle"], "Cartela."],
    ["Antes de dibujar un cómic se escribe el…", ["guion", "eslogan", "índice"], "Guion."],
  ],
  examen: [
    ["El espacio entre viñetas se llama…", ["calle", "tira", "delta"], "Calle."],
    ["Un bocadillo con borde de puntitos indica…", ["susurro", "grito", "pensamiento"], "Susurro."],
    ["Para mostrar dónde ocurre la acción se usa el…", ["plano general", "primer plano", "plano detalle"], "General."],
    ["La palabra «tebeo» viene de…", ["una revista llamada TBO", "un dibujante", "un país"], "TBO."],
  ],
  feynman: ["Qué es un cómic y cómo se lee", "Qué son la viñeta, el bocadillo y la cartela", "Cómo se representan los sonidos y el movimiento", "Qué pasos se siguen para crear una historieta"],
  mapa: ["EL CÓMIC", RO, [["Viñeta", "un momento · tira · página", AZ], ["Textos", "bocadillo · cartela", VE], ["Sonido", "onomatopeyas: ¡BOOM!", RO], ["Movimiento", "líneas cinéticas · metáforas", AM]], 240],
  tarjetas: [
    ["Cómic", "Historia contada con dibujos ordenados y textos."],
    ["Viñeta", "Cada recuadro del cómic."],
    ["Bocadillo", "Globo con lo que dice o piensa un personaje."],
    ["Cartela", "Recuadro con la voz del narrador."],
    ["Onomatopeya", "Palabra que imita un sonido: ¡CRASH!"],
    ["Líneas cinéticas", "Rayitas que indican movimiento."],
    ["Metáfora visual", "Dibujo que expresa una idea: bombilla = idea."],
    ["Guion", "La historia escrita antes de dibujar."],
  ],
  familias: ["Leed juntos un tebeo y buscad onomatopeyas, tipos de bocadillo y metáforas visuales.", "Haced entre todos una tira de cómic sobre algo divertido que os haya pasado."],
  saberes: "El cómic como lenguaje: viñeta, bocadillo, cartela, onomatopeya, líneas cinéticas, gestos y planos; creación de historietas (Educación Plástica y Visual)",
  ideas: ["Historieta de cuatro viñetas con guion previo.", "Muestrario de bocadillos y onomatopeyas inventadas.", "Rincón de lectura de tebeos de la biblioteca escolar."],
  fuentes: [["Biblioteca Nacional de España: cómic", "https://www.bne.es/es/colecciones/comic"], ["Diccionario de la RAE: cómic", "https://dle.rae.es/c%C3%B3mic"]],
});
