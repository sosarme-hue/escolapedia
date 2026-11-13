// Educación Física 2º de Primaria: expresión corporal y mímica. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, flechaR, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
// Cara grande con distintas emociones.
const cara = (x, y, r, c, boca, cejas = "") => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><circle cx="${x - r * 0.35}" cy="${y - r * 0.15}" r="${r * 0.1}" fill="var(--ink)"/><circle cx="${x + r * 0.35}" cy="${y - r * 0.15}" r="${r * 0.1}" fill="var(--ink)"/><path d="${boca}" transform="translate(${x} ${y}) scale(${r / 20})" stroke="var(--ink)" stroke-width="2" fill="none"/>${cejas ? `<path d="${cejas}" transform="translate(${x} ${y}) scale(${r / 20})" stroke="var(--ink)" stroke-width="2" fill="none"/>` : ""}`;
const BOCA = { alegre: "M-9 6 q9 10 18 0", triste: "M-9 11 q9 -8 18 0", sorpresa: "M-4 8 a4 5 0 1 0 8 0 a4 5 0 1 0 -8 0", enfado: "M-8 10 h16" };
const CEJA = { enfado: "M-12 -10 l8 4 M12 -10 l-8 4", triste: "M-12 -7 l8 -3 M12 -7 l-8 -3", sorpresa: "M-12 -12 q6 -4 10 0 M12 -12 q-6 -4 -10 0" };
const mimo = (x, y, s = 1, pared = false) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -52 V-24 ${pared ? "M0 -46 L30 -50 M0 -44 L30 -36" : "M0 -46 L-14 -30 M0 -46 L14 -30"} M0 -24 L-8 0 M0 -24 L8 0" stroke="var(--ink)" stroke-width="4.5" stroke-linecap="round" fill="none"/>${[-48, -42, -36, -30].map((yy) => `<path d="M-5 ${yy} h10" stroke="#fff" stroke-width="2.5"/>`).join("")}<circle cx="0" cy="-62" r="10" fill="#fff" stroke="var(--ink)"/><circle cx="-3.5" cy="-63" r="1.3" fill="var(--ink)"/><circle cx="3.5" cy="-63" r="1.3" fill="var(--ink)"/><path d="M-3 -58 h6" stroke="${P.rojo}" stroke-width="2"/><path d="M-10 -68 h20 l-4 -8 h-12z" fill="var(--ink)"/></g>`;

module.exports = {
  materia: "Educación Física",
  curso: "2-primaria",
  titulo: "Expresión corporal y mímica",
  minutos: 20,
  objetivos: ["Expresar emociones con la cara y el cuerpo, sin palabras", "Imitar personajes, animales y objetos con gestos", "Representar pequeñas escenas de mímica y adivinar las de los demás"],
  claves: ["expresión corporal", "gesto", "mímica", "emoción", "postura", "imitar", "mimo", "escena"],
  pregunta: {
    texto: "¿Se puede contar algo sin decir ni una palabra?",
    respuesta: "¡Sí! Con la <mark>cara</mark>, las <b>manos</b> y todo el <b>cuerpo</b> podemos contar muchísimas cosas. Eso es la <mark>expresión corporal</mark>. Y cuando contamos una historia solo con gestos, hacemos <b>mímica</b>.",
  },
  bloques: [
    {
      html: `<h3>El cuerpo también habla</h3><p>Aunque no hablemos, el cuerpo <mark>comunica</mark> lo que sentimos.</p><p>Si estamos contentos, saltamos y abrimos los brazos. Si estamos tristes, bajamos la cabeza y caminamos despacio. Si tenemos miedo, nos encogemos.</p><p>Fíjate en tus compañeros: ¿sabes cómo se sienten solo con mirarlos? ¡Eso es leer el lenguaje del cuerpo!</p>`,
      svg: svg("Tres niños: uno contento salta con los brazos abiertos, uno triste con la cabeza baja y uno con miedo encogido", `${nino(46, 140, { c: P.amarillo, pose: "salta", s: 1.2 })}${etq(46, 172, "contento", "#a07800", 12)}${nino(130, 156, { c: P.azul, pose: "pie", s: 1.2, boca: "cerrada" })}${etq(130, 172, "triste", P.azul, 12)}${nino(214, 156, { c: P.morado, pose: "agacha", s: 1.2, boca: "abierta" })}${etq(214, 172, "miedo", P.morado, 12)}${suelo(158)}`),
      video: V("ef7b"),
    },
    {
      html: `<h3>Las caras: emociones</h3><p>La <mark>cara</mark> es lo que más expresa. Movemos las cejas, los ojos y la boca.</p><p><b>Alegría</b>: sonrisa grande. <b>Tristeza</b>: boca hacia abajo. <b>Enfado</b>: cejas juntas y boca apretada. <b>Sorpresa</b>: cejas arriba y boca abierta.</p><p>Practicamos delante de un espejo. ¿Cuál es la más difícil de poner?</p>`,
      svg: svg("Cuatro caras: alegría, tristeza, enfado y sorpresa", `${[["alegría", P.amarillo, "alegre", ""], ["tristeza", P.celeste, "triste", "triste"], ["enfado", P.rojo, "enfado", "enfado"], ["sorpresa", P.naranja, "sorpresa", "sorpresa"]].map(([t, c, b, ce], i) => `${cara(36 + i * 63, 80, 26, c, BOCA[b], CEJA[ce] || "")}${etq(36 + i * 63, 134, t, "var(--ink)", 12)}`).join("")}`),
    },
    {
      html: `<h3>Posturas y formas de andar</h3><p>No solo la cara: también la <mark>postura</mark> y la forma de andar cuentan cosas.</p><p>Probamos a caminar como si fuéramos muy viejitos, como un rey orgulloso, como alguien que tiene mucha prisa o como si el suelo quemara.</p><p>¿Cambia tu espalda? ¿Y tus pasos? ¿Y tus brazos? Cada personaje tiene su forma de moverse.</p>`,
      svg: svg("Cuatro formas de andar: viejito con bastón, rey con corona, con prisa y saltando porque quema el suelo", `${nino(34, 156, { c: P.gris, pose: "agacha", s: 1.1, pelo: P.gris })}<path d="M48 126 V156" stroke="#8b4513" stroke-width="3"/>${etq(34, 174, "viejito", "var(--ink)", 11)}${nino(98, 156, { c: P.morado, pose: "pie", s: 1.1 })}<path d="M86 76 l4 -10 l6 6 l4 -8 l4 8 l6 -6 l4 10z" fill="${P.amarillo}" stroke="#c49000"/>${etq(98, 174, "rey", P.morado, 11)}${nino(162, 156, { c: P.azul, pose: "corre", s: 1.1 })}${etq(162, 174, "con prisa", P.azul, 11)}${nino(226, 146, { c: P.rojo, pose: "salta", s: 1.1 })}<path d="M210 158 q4 -8 0 -14 M226 158 q4 -8 0 -14 M242 158 q4 -8 0 -14" stroke="${P.naranja}" stroke-width="2" fill="none"/>${etq(226, 174, "¡quema!", P.rojo, 11)}${suelo(158)}`),
    },
    {
      html: `<h3>Imitar animales</h3><p>Una forma divertida de expresarse es <mark>imitar animales</mark>.</p><p>El elefante camina lento y pesado, con la trompa colgando. La serpiente se arrastra por el suelo. El canguro salta con los pies juntos. El mono se rasca y salta de rama en rama.</p><p>Hay que observar bien cómo se mueve cada animal. ¡Sin hacer ruidos, solo con el cuerpo!</p>`,
      svg: svg("Niños imitando animales: elefante con el brazo como trompa, serpiente por el suelo y canguro saltando", `${nino(46, 156, { c: P.gris, pose: "agacha", s: 1.3 })}<path d="M46 86 q-2 30 -10 40" stroke="${P.gris}" stroke-width="5" fill="none" stroke-linecap="round"/>${etq(46, 174, "elefante", "var(--ink)", 11)}<path d="M96 150 q12 -12 24 0 q12 12 24 0 q8 -8 14 -4" stroke="${P.verde}" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="164" cy="144" r="7" fill="${P.piel}"/>${etq(128, 174, "serpiente", P.verde, 11)}${nino(214, 140, { c: P.marron, pose: "salta", s: 1.2 })}${etq(214, 174, "canguro", P.marron, 11)}${suelo(158)}`),
    },
    {
      html: `<h3>¿Qué es la mímica?</h3><p>La <mark>mímica</mark> es contar algo solo con gestos, sin hablar y sin hacer ruidos.</p><p>Los <b>mimos</b> son artistas que hacen mímica. Llevan la cara pintada de blanco para que se vean mejor sus gestos.</p><p>Un mimo puede hacer como que hay una pared invisible, que sube una escalera o que tira de una cuerda. ¡Y parece de verdad!</p>`,
      svg: svg("Un mimo con la cara blanca y camiseta de rayas toca una pared invisible con las manos", `${mimo(110, 158, 1.8, true)}<path d="M168 30 V158" stroke="${P.celeste}" stroke-width="3" stroke-dasharray="6 6"/>${[[150, 66], [150, 98]].map(([x, y]) => `<rect x="${x}" y="${y}" width="16" height="20" rx="5" fill="#fff" stroke="var(--ink)"/>`).join("")}${etq(214, 80, "pared", P.azul, 12)}${etq(214, 98, "invisible", P.azul, 12)}${suelo(160)}`),
    },
    {
      html: `<h3>Objetos invisibles</h3><p>En mímica usamos <mark>objetos imaginarios</mark>: no están, pero el público los «ve».</p><p>Para que se entiendan, los gestos deben ser claros y algo exagerados. Si cogemos un vaso imaginario, la mano tiene la forma del vaso. Si pesa mucho una caja, nos doblamos al levantarla.</p><p>¡El truco es creérselo de verdad!</p>`,
      svg: svg("Un niño levanta una caja imaginaria muy pesada y otro bebe de un vaso invisible", `${nino(70, 156, { c: P.verde, pose: "agacha", s: 1.4 })}<rect x="44" y="104" width="52" height="34" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4"/>${etq(70, 176, "caja pesada", P.verde, 11)}${nino(190, 156, { c: P.naranja, pose: "canta", s: 1.4 })}<path d="M206 80 h12 l-2 22 h-8z" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 3"/>${etq(190, 176, "vaso invisible", P.naranja, 11)}${suelo(158)}`),
    },
    {
      html: `<h3>Pequeñas escenas</h3><p>Ahora juntamos todo y hacemos una <mark>escena</mark> corta, con principio, medio y final.</p><p>Por ejemplo: me levanto con sueño, me lavo la cara con agua muy fría, ¡qué susto!, y salgo corriendo al colegio.</p><p>Antes de empezar, pensamos los tres momentos. Al terminar, nos quedamos quietos un segundo y saludamos. ¡El público aplaude!</p>`,
      svg: svg("Tres viñetas de una escena: desperezarse con sueño, lavarse la cara con un susto y salir corriendo", `${[["1 sueño", "arriba", P.morado], ["2 ¡qué frío!", "brazos", P.azul], ["3 ¡al cole!", "corre", P.rojo]].map(([t, pose, c], i) => `<rect x="${10 + i * 82}" y="20" width="76" height="136" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/>${nino(48 + i * 82, 130, { c, pose, s: 0.9, boca: i === 1 ? "abierta" : "sonrisa" })}${etq(48 + i * 82, 148, t, c, 11)}`).join("")}${etq(130, 174, "principio · medio · final", "var(--pen)", 12)}`),
    },
    {
      html: `<h3>Ser buen público</h3><p>Cuando un compañero actúa, nosotros somos el <mark>público</mark>.</p><p>Miramos con atención y en silencio. No nos reímos de él, sino con él. Si no adivinamos lo que hace, levantamos la mano y preguntamos al final.</p><p>Actuar delante de otros da un poco de vergüenza. Por eso, ¡un aplauso al terminar ayuda mucho!</p>`,
      svg: svg("Un público de niños sentados aplaude a una compañera que hace una reverencia", `${nino(200, 140, { c: P.rosa, pose: "agacha", s: 1.3, nina: true })}<rect x="160" y="140" width="90" height="8" fill="#cd853f"/>${[0, 1, 2].map((i) => nino(34 + i * 44, 160, { c: [P.azul, P.verde, P.naranja][i], pose: "palmas", s: 0.9 })).join("")}${etq(78, 40, "¡bravo!", P.rojo, 14)}${etq(200, 40, "¡gracias!", P.rosa, 13)}`),
    },
    {
      html: `<h3>Jugamos a las películas mudas</h3><p>Cada uno saca una <mark>tarjeta</mark> con algo dibujado: un oficio, un animal o una acción.</p><p>Sale delante y lo representa con mímica, sin hablar. Los demás intentan adivinarlo. Quien acierta, sale el siguiente.</p><p>Ejemplos: un bombero apagando un fuego, un pescador que pesca un pez enorme o un niño comiendo un helado que se derrite.</p>`,
      svg: svg("Tres tarjetas: bombero, pescador y helado; un niño hace mímica y otro adivina", `${[["bombero", P.rojo], ["pescador", P.azul], ["helado", P.rosa]].map(([t, c], i) => `<rect x="${14 + i * 56}" y="30" width="50" height="62" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${etq(39 + i * 56, 66, t, c, 9)}`).join("")}${nino(206, 150, { c: P.azul, pose: "lanza", s: 1.3 })}<path d="M190 70 l-10 -40" stroke="var(--ink)" stroke-width="2"/><path d="M180 30 q-20 40 -6 80" stroke="var(--muted)" fill="none" stroke-dasharray="3 3"/>${etq(80, 118, "¿qué es?", "var(--pen)", 14)}${etq(80, 140, "¡un pescador!", P.verde, 12)}${suelo(152)}`),
    },
  ],
  figura: {
    titulo: "Expresión corporal y mímica",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Caras con emociones, un mimo con una pared invisible y niños imitando animales"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 40, "Contamos sin palabras", { size: 22, color: "var(--pen)" })}${cara(70, 110, 28, P.amarillo, BOCA.alegre)}${cara(150, 110, 28, P.celeste, BOCA.triste, CEJA.triste)}${cara(70, 190, 28, P.rojo, BOCA.enfado, CEJA.enfado)}${cara(150, 190, 28, P.naranja, BOCA.sorpresa, CEJA.sorpresa)}${rot(110, 240, "la cara", { size: 16 })}${mimo(320, 250, 2.2, true)}<path d="M386 90 V250" stroke="${P.celeste}" stroke-width="3" stroke-dasharray="6 6"/>${rot(320, 280, "la mímica", { size: 16 })}${nino(500, 250, { c: P.marron, pose: "salta", s: 2 })}${rot(500, 280, "el cuerpo entero", { size: 16 })}${suelo(254)}</svg>`,
  },
  video: V("ef7v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Expresa enfado solo con la cara.",
      pasos: ["Junta las cejas.", "Aprieta la boca.", "Mira fijo, sin moverte."],
      resultado: "Todos ven que estás enfadado." },
    { enunciado: "Haz como que subes una escalera invisible.",
      pasos: ["Levanta una rodilla bien alta.", "Agarra una barandilla imaginaria.", "Sube un escalón detrás de otro."],
      resultado: "Parece que la escalera está ahí." },
    { enunciado: "Representa una escena corta: comer un helado que se derrite.",
      pasos: ["Principio: coges el helado contento.", "Medio: empieza a gotear y lames deprisa.", "Final: se cae al suelo y pones cara triste."],
      resultado: "Una escena con principio, medio y final." },
  ],
  errores: [
    "Hablar o hacer ruidos durante la mímica.",
    "Hacer gestos muy pequeños: hay que exagerarlos un poco.",
    "Reírse del compañero que actúa en lugar de animarlo.",
    "Olvidar el final de la escena: se termina quietos y saludando.",
  ],
  ejercicios: [
    { q: "¿Qué es la expresión corporal?", sol: "Comunicar con el cuerpo y la cara, sin palabras." },
    { q: "¿Qué es la mímica?", sol: "Contar algo solo con gestos, sin hablar ni hacer ruidos." },
    { q: "¿Cómo se pone la cara de sorpresa?", sol: "Cejas arriba y boca abierta." },
    { q: "¿Cómo camina alguien triste?", sol: "Despacio, con la cabeza baja y los hombros caídos." },
    { q: "¿Por qué los mimos se pintan la cara de blanco?", sol: "Para que se vean mejor sus gestos." },
    { q: "¿Qué es un objeto imaginario?", sol: "Un objeto que no está, pero que hacemos ver con gestos." },
    { q: "¿Qué partes tiene una escena?", sol: "Principio, medio y final." },
    { q: "¿Cómo es un buen público?", sol: "Mira en silencio, no se ríe del actor y aplaude al final." },
    { q: "Imita a tres animales con todo el cuerpo.", sol: "Respuesta libre." },
    { q: "Inventa una escena de mímica y represéntala en casa.", sol: "Respuesta libre." },
  ],
  quiz: [
    { q: "En la mímica…", o: ["no se habla", "se canta", "se grita"], a: 0, e: "Solo gestos." },
    { q: "La alegría se nota en…", o: ["una sonrisa", "las cejas juntas", "la boca hacia abajo"], a: 0, e: "Sonrisa." },
    { q: "Las cejas juntas expresan…", o: ["enfado", "alegría", "sueño"], a: 0, e: "Enfado." },
    { q: "Un mimo lleva la cara…", o: ["blanca", "verde", "tapada"], a: 0, e: "Blanca." },
    { q: "Un elefante se imita caminando…", o: ["lento y pesado", "muy rápido", "saltando"], a: 0, e: "Lento." },
    { q: "Para que se entienda la mímica, los gestos son…", o: ["claros y exagerados", "muy pequeños", "invisibles"], a: 0, e: "Claros." },
    { q: "Una escena tiene…", o: ["principio, medio y final", "solo final", "solo palabras"], a: 0, e: "Tres partes." },
    { q: "Al terminar la escena…", o: ["saludamos", "salimos corriendo", "hablamos"], a: 0, e: "Saludo." },
    { q: "El público…", o: ["mira en silencio", "interrumpe", "se va"], a: 0, e: "En silencio." },
    { q: "Con miedo, el cuerpo…", o: ["se encoge", "salta feliz", "se estira mucho"], a: 0, e: "Se encoge." },
  ],
  examen: [
    { q: "La parte del cuerpo que más expresa es…", o: ["la cara", "el codo", "la rodilla"], a: 0, e: "La cara." },
    { q: "Una pared invisible es un…", o: ["objeto imaginario", "objeto real", "animal"], a: 0, e: "Imaginario." },
    { q: "Para levantar una caja imaginaria pesada…", o: ["nos doblamos", "la levantamos con un dedo", "saltamos"], a: 0, e: "Como si pesara." },
    { q: "Las películas mudas son…", o: ["sin palabras", "con muchas canciones", "de dibujos"], a: 0, e: "Sin palabras." },
  ],
  feynman: ["Cómo expresamos emociones con la cara y el cuerpo", "Qué es la mímica y cómo se usan objetos imaginarios", "Cómo preparar una escena corta"],
  mapa: mapa("EXPRESIÓN", "var(--pri)", [
    ["Cara", "alegría, tristeza, enfado", "#fb8c00"],
    ["Postura", "andar como personajes", "#1e88e5"],
    ["Mímica", "gestos y objetos invisibles", "#8e24aa"],
    ["Escena", "principio, medio, final", "#43a047"],
  ], 230),
  tarjetas: [
    ["Expresión corporal", "Comunicar con el cuerpo"],
    ["Mímica", "Contar sin palabras ni ruidos"],
    ["Mimo", "Artista de la mímica, cara blanca"],
    ["Emoción", "Alegría, tristeza, enfado, sorpresa"],
    ["Postura", "Cómo colocamos el cuerpo"],
    ["Objeto imaginario", "No está, pero se ve con gestos"],
    ["Escena", "Principio, medio y final"],
    ["Público", "Mira, respeta y aplaude"],
  ],
  familias: [
    "Jugad a las películas: uno hace mímica y los demás adivinan.",
    "Poned caras delante del espejo y adivinad la emoción.",
    "Imitad entre todos a los animales de un cuento.",
    "Representad juntos una escena de la vida diaria sin hablar.",
  ],
  profesores: PROF("Educación Física: expresión corporal y comunicación no verbal; emociones básicas en el rostro y la postura; imitación de personajes y animales; mímica con objetos imaginarios; pequeñas dramatizaciones; actitud de público", ["Espejo de emociones por parejas.", "Desplazamientos caracterizados.", "Juego de las películas mudas con tarjetas."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
