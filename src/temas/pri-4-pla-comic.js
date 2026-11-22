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

// ---------- Nivel libro (4º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer la historia del cómic en España y en el mundo", "Diseñar un personaje con una hoja de modelo", "Seguir las fases profesionales de un cómic", "Distinguir el manga, la tira cómica y la novela gráfica"],
  lectura: { titulo: "El cajón de los tebeos", html: `<p>Mientras ayudaba a su abuelo Julián a ordenar el trastero, Elsa encontró una caja de cartón llena de revistas viejas, con las esquinas dobladas y el papel amarillento.</p><p>—¡Mis tebeos! —exclamó el abuelo, emocionado—. Los compraba en el quiosco con la paga del domingo.</p><p>Elsa abrió uno. Dos agentes secretos muy despistados, uno calvo y otro con un sombrero, se metían en un lío detrás de otro. Uno de ellos se disfrazaba de cualquier cosa: de farola, de cactus, de gallina…</p><p>—Son <b>Mortadelo y Filemón</b> —le explicó el abuelo—. Los dibujaba Francisco Ibáñez. Me reía tanto que mi madre me decía que iba a despertar a los vecinos.</p><p>Elsa siguió sacando tebeos: unos gemelos traviesos llamados <b>Zipi y Zape</b>, un caballero valiente, el <b>Capitán Trueno</b>… Algunos tenían más de sesenta años.</p><p>Esa noche, Elsa se llevó el montón a su habitación y estuvo leyendo hasta tarde. Al día siguiente, en el colegio, sacó de la mochila uno de los tebeos y su amigo Lucas, que solo leía <b>manga</b>, lo miró con curiosidad.</p><p>—¡Se lee al revés que mis mangas! —dijo.</p><p>—No —respondió Elsa—. Tus mangas se leen al revés que esto.</p><p>Se rieron y decidieron intercambiar: una semana, tebeos del abuelo; la siguiente, mangas de Lucas.</p>` },
  tras: {
    "¿Qué es un cómic?": [
      ["Historia del cómic", `<p>El cómic tiene poco más de cien años, aunque contar historias con imágenes es muy antiguo: piensa en las pinturas de las cuevas o en los relieves egipcios.</p><p>En <mark>España</mark>, algunos momentos importantes son:</p><ul><li>En <b>1917</b> nace la revista <b>TBO</b>, que dio nombre a los «tebeos».</li><li>En <b>1948</b>, Josep Escobar crea a <b>Zipi y Zape</b>, dos gemelos traviesos.</li><li>En <b>1956</b> aparece el <b>Capitán Trueno</b>, un caballero que viaja por el mundo defendiendo a los débiles.</li><li>En <b>1958</b>, <b>Francisco Ibáñez</b> crea a <b>Mortadelo y Filemón</b>, los agentes más torpes de la historia. Ibáñez dibujó sus aventuras durante más de sesenta años.</li></ul><p>En el <mark>mundo</mark> también nacieron cómics muy famosos:</p><ul><li><b>Tintín</b> (Bélgica, 1929), de Hergé: un joven reportero que viaja por todo el mundo con su perro Milú.</li><li><b>Astérix</b> (Francia, 1959): un galo que, gracias a una poción mágica, resiste a los romanos.</li><li><b>Mafalda</b> (Argentina, 1964), de Quino: una niña que hace preguntas muy inteligentes sobre el mundo.</li><li>Los <b>superhéroes</b> estadounidenses, como Superman (1938).</li></ul><p>Hoy en día hay cómics de todo tipo: de humor, de aventuras, de ciencia, de historia… ¡e incluso adaptaciones de grandes novelas!</p>`,
        L6.filas("Cómic español", [["TBO", "1917", cNA], ["Zipi y Zape", "1948", cAZ], ["Capitán Trueno", "1956", cRO], ["Mortadelo", "1958", cVE]]), ["4V0yu7f5gWw", "Francisco Ibáñez, autor de Mortadelo y Filemón", "Retroclips", 55036]],
    ],
    "Los personajes y sus gestos": [
      ["Diseñar un personaje", `<p>Los grandes personajes de cómic se reconocen con solo ver su <mark>silueta</mark>. Para diseñar el tuyo, sigue estos pasos:</p><ul><li><b>1. Piensa cómo es por dentro</b>: ¿es valiente, despistado, gruñón, curioso? ¿Qué le gusta? ¿Qué le da miedo? Su forma de ser decidirá su aspecto.</li><li><b>2. Empieza con formas básicas</b>: un círculo para la cabeza, un óvalo o un rectángulo para el cuerpo. Un personaje redondo parece simpático; uno con formas puntiagudas, más malvado o nervioso; uno cuadrado, fuerte.</li><li><b>3. Añade rasgos especiales</b>: un peinado, unas gafas, un sombrero, una bufanda, un color concreto. Algo que lo haga <b>único</b>. Piensa en el tupé de Tintín o en el sombrero de Filemón.</li><li><b>4. Hazlo sencillo</b>: tendrás que dibujarlo muchas veces, así que no lo llenes de detalles complicados.</li><li><b>5. Haz su hoja de modelo</b>: dibújalo de <b>frente</b>, de <b>perfil</b> y de <b>espaldas</b>, y con varias <b>expresiones</b> (contento, triste, enfadado, sorprendido). Los dibujantes profesionales la usan para que el personaje sea siempre igual.</li></ul><p>Por último, dale un <b>nombre</b> que encaje con su personalidad. ¡Ya tienes tu protagonista!</p>`,
        H6.flujo("Mi personaje", ["carácter|cómo es", "formas|básicas", "rasgo|único", "hoja de|modelo"], cMO)],
    ],
    "Los planos en el cómic": [
      ["Cómo se hace un cómic profesional", `<p>Un cómic profesional pasa por varias <mark>fases</mark>. A veces una sola persona hace todo, y otras veces trabaja un equipo:</p><ul><li><b>1. Guion</b>: el guionista escribe la historia, viñeta a viñeta, con lo que se ve y lo que dicen los personajes.</li><li><b>2. Bocetos</b> o storyboard: dibujos rápidos y pequeños de cada página para decidir cómo se reparten las viñetas.</li><li><b>3. Lápiz</b>: el dibujante hace las páginas a tamaño grande, con lápiz suave, cuidando los detalles.</li><li><b>4. Entintado</b>: se repasan las líneas buenas con <b>tinta negra</b> (plumilla, pincel o rotulador). Después se borra el lápiz.</li><li><b>5. Rotulación</b>: se escriben los textos de los bocadillos, las cartelas y las onomatopeyas. Antes se hacía a mano, letra a letra.</li><li><b>6. Color</b>: el colorista da color a las páginas, hoy casi siempre con el ordenador. El color ayuda a crear ambientes: noche, día, peligro, alegría.</li><li><b>7. Edición e imprenta</b>: se revisan las páginas, se diseña la portada y se imprime.</li></ul><p>Un álbum de cómic puede llevar meses o incluso años de trabajo. ¡Cada viñeta es un pequeño cuadro!</p>`,
        L6.filas("Fases", [["guion", "la historia", cAZ], ["lápiz", "el dibujo", cVE], ["entintado", "tinta negra", cMO], ["color", "ambientes", cRO]])],
    ],
  },
  final: [
    ["El manga", `<p>El <mark>manga</mark> es el cómic japonés. Es muy popular en todo el mundo y tiene algunas características especiales:</p><ul><li>Se lee <b>de derecha a izquierda</b>: el libro empieza por lo que para nosotros es el final, y las viñetas y los bocadillos también se leen de derecha a izquierda. Es la forma tradicional de leer en Japón.</li><li>Casi siempre es en <b>blanco y negro</b>, porque se publica en revistas semanales con mucha rapidez.</li><li>Los personajes suelen tener <b>ojos grandes</b> y muy expresivos.</li><li>Usa muchos <b>símbolos visuales</b>: una gota de sudor gigante en la cabeza (vergüenza), una cruz en la frente (enfado), sangre por la nariz, mejillas rayadas (sonrojo)…</li><li>Usa muchas <b>líneas cinéticas</b> y onomatopeyas en japonés.</li></ul><p>El gran maestro del manga fue <b>Osamu Tezuka</b>, llamado «el dios del manga», creador de <b>Astro Boy</b> (1952), un niño robot. Otro autor muy conocido es <b>Akira Toriyama</b>, creador de <b>Dragon Ball</b>.</p><p>Muchos mangas se convierten después en series de dibujos animados, que se llaman <b>anime</b>.</p>`,
      H6.dos("Cómo se lee", ["CÓMIC", ["izquierda", "a derecha", "suele ir en color"], cAZ], ["MANGA", ["derecha", "a izquierda", "blanco y negro"], cRO]), ["R0xyx_WhYx0", "¿Por qué los mangas se leen de derecha a izquierda?", "DialingShrimp37", 7244]],
    ["Tiras cómicas y novelas gráficas", `<p>No todos los cómics tienen la misma <mark>extensión</mark>:</p><ul><li>La <b>tira cómica</b> es una historia muy corta, de <b>tres o cuatro viñetas</b> en fila, que suele terminar con un chiste. Se publicaba en los periódicos cada día. Las más famosas son <b>Snoopy</b> (Peanuts), de Charles Schulz; <b>Garfield</b>, el gato perezoso que adora la lasaña; y <b>Mafalda</b>.</li><li>La <b>historieta</b> o tebeo tiene unas pocas páginas, como las aventuras cortas de Mortadelo y Filemón.</li><li>El <b>álbum</b> es un libro con una aventura completa de unas 40 o 60 páginas, como los de Tintín o Astérix.</li><li>La <b>novela gráfica</b> es un cómic largo, como una novela, que cuenta una historia profunda y completa. Muchas tratan temas serios: la historia, los recuerdos, la familia, la vejez. En España, una muy premiada es «Arrugas», de <b>Paco Roca</b>.</li><li>El <b>webcómic</b> se publica en internet. Algunos se leen deslizando hacia abajo en el móvil.</li></ul><p>La tira cómica es perfecta para empezar a crear: con solo tres viñetas tienes que presentar, desarrollar y rematar con un final sorprendente.</p>`,
      L6.filas("Formatos", [["tira cómica", "3-4 viñetas", cNA], ["historieta", "pocas páginas", cAZ], ["álbum", "40-60 páginas", cVE], ["novela gráfica", "historia larga", cMO]])],
  ],
  ejemplos: [
    ["Abres un manga por lo que parece la última página. ¿Lo estás leyendo bien?", ["El manga se lee de derecha a izquierda.", "Empieza por lo que para nosotros es el final."], "Sí, el manga empieza por ahí."],
    ["Tu personaje es un villano nervioso. ¿Qué formas básicas usas?", ["Las formas transmiten carácter.", "Las puntiagudas parecen nerviosas o malvadas."], "Formas puntiagudas y angulosas."],
  ],
  errores: ["Diseñar un personaje con demasiados detalles: hay que dibujarlo muchas veces y debe ser sencillo.", "Pasar directamente a la tinta sin hacer antes los bocetos y el lápiz."],
  ejercicios: [
    ["b", "¿De dónde viene la palabra «tebeo»?", "De la revista TBO."],
    ["b", "¿Quién creó Mortadelo y Filemón?", "Francisco Ibáñez."],
    ["b", "¿Cómo se lee un manga?", "De derecha a izquierda."],
    ["b", "¿Cuántas viñetas tiene una tira cómica?", "Tres o cuatro."],
    ["b", "¿Qué es una hoja de modelo?", "Dibujos del personaje de frente, perfil, espaldas y con expresiones."],
    ["m", "Ordena las fases: color, guion, entintado, lápiz.", "Guion, lápiz, entintado, color."],
    ["m", "¿Qué es el anime?", "La serie de dibujos animados basada en el manga."],
    ["m", "¿Por qué el manga suele ser en blanco y negro?", "Porque se publica muy rápido en revistas semanales."],
    ["m", "¿Qué diferencia hay entre una tira cómica y una novela gráfica?", "La tira es muy corta; la novela gráfica es larga y profunda."],
    ["m", "¿Quién fue «el dios del manga»?", "Osamu Tezuka."],
    ["a", "Diseña tu personaje y haz su hoja de modelo.", "Respuesta abierta."],
    ["a", "Dibuja una tira cómica de tres viñetas con un final sorpresa.", "Respuesta abierta."],
    ["a", "Entinta una página que hayas hecho a lápiz.", "Respuesta abierta."],
    ["a", "Pregunta en casa qué tebeos leían de pequeños.", "Respuesta abierta."],
  ],
  quiz: [
    ["Zipi y Zape son…", ["gemelos traviesos", "agentes secretos", "galos"], "Historia."],
    ["Tintín es de…", ["Bélgica", "Japón", "España"], "Historia."],
    ["Repasar el lápiz con tinta se llama…", ["entintado", "rotulación", "guion"], "Fases."],
    ["Astro Boy es de…", ["Osamu Tezuka", "Hergé", "Quino"], "Manga."],
    ["Garfield es protagonista de una…", ["tira cómica", "novela gráfica", "ópera"], "Formatos."],
  ],
  examen: [
    ["En la lectura, ¿cómo compraba el abuelo sus tebeos?", ["con la paga en el quiosco", "por internet", "en la biblioteca"], "Lectura."],
    ["¿Quién escribió la novela gráfica «Arrugas»?", ["Paco Roca", "Ibáñez", "Toriyama"], "Formatos."],
  ],
  tarjetas: [
    ["Historia", "TBO 1917, Zipi y Zape, Capitán Trueno, Mortadelo; Tintín, Astérix, Mafalda."],
    ["Personaje", "Carácter, formas básicas, rasgo único, hoja de modelo."],
    ["Fases", "Guion, bocetos, lápiz, entintado, rotulación, color."],
    ["Manga y formatos", "Derecha a izquierda; tira, álbum, novela gráfica."],
  ],
  glosario: [
    ["Tebeo", "Revista de historietas; viene de TBO."],
    ["Silueta", "Contorno de una figura."],
    ["Hoja de modelo", "Dibujos de referencia de un personaje."],
    ["Guionista", "Quien escribe la historia del cómic."],
    ["Boceto", "Dibujo rápido de prueba."],
    ["Entintado", "Repaso de las líneas con tinta."],
    ["Rotulación", "Escritura de los textos del cómic."],
    ["Colorista", "Quien da color a las páginas."],
    ["Manga", "Cómic japonés."],
    ["Anime", "Dibujos animados japoneses."],
    ["Tira cómica", "Historieta de pocas viñetas en fila."],
    ["Novela gráfica", "Cómic largo con una historia completa."],
  ],
  situacion: {
    titulo: "La editorial de la clase",
    reto: "La clase funciona como una editorial y publica una revista de cómics.",
    pasos: ["Formar equipos con guionista, dibujante, entintador y colorista.", "Diseñar un personaje con su hoja de modelo.", "Hacer una tira cómica y una historieta de una página siguiendo todas las fases.", "Montar la revista con portada y presentarla en la biblioteca."],
    producto: "Una revista de cómics de la clase.",
    evaluacion: ["Conoce la historia del cómic.", "Diseña un personaje coherente.", "Sigue las fases de producción.", "Distingue formatos y el manga."],
  },
});
