// Ciencias de la Naturaleza 1º de Primaria. Formato ampliado de 1º: frases cortas y un dibujo propio en cada bloque.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, luna, check, RD } = require("./_peques");

// Alimentos sencillos (centrados en x, y).
const manzana = (x, y, r = 13) => `<g transform="translate(${x} ${y})"><circle r="${r}" fill="var(--red)"/><path d="M0 ${-r + 1} q2 -7 6 -9" stroke="var(--ink)" stroke-width="2" fill="none"/><ellipse cx="6" cy="${-r - 5}" rx="5" ry="3" fill="var(--leaf)"/></g>`;
const platano = (x, y) => `<path transform="translate(${x} ${y})" d="M-20 -6 Q 0 22 22 -8 Q 18 -4 14 -2 Q 0 10 -14 -6 Z" fill="var(--sun)" stroke="#c99a10" stroke-width="1.5"/>`;
const zanahoria = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-7 -14 L 7 -14 L 0 18 Z" fill="var(--inf)"/><path d="M0 -14 l -6 -10 M0 -14 l 0 -12 M0 -14 l 6 -10" stroke="var(--leaf)" stroke-width="3"/></g>`;
const brocoli = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-4 0 V 16 H 4 V 0" fill="#9ccc65"/><circle cx="-8" cy="-4" r="8" fill="var(--leaf)"/><circle cx="8" cy="-4" r="8" fill="var(--leaf)"/><circle cy="-12" r="9" fill="var(--leaf)"/></g>`;
const pan = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-24 8 Q -26 -12 0 -14 Q 26 -12 24 8 Z" fill="#d9a066" stroke="#a8702e" stroke-width="2"/><path d="M-10 -8 l 6 8 M2 -10 l 6 8" stroke="#a8702e" stroke-width="2"/></g>`;
const arroz = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-20 0 Q 0 22 20 0 Z" fill="var(--pen)"/><ellipse rx="20" ry="5" fill="#fff" stroke="var(--line)"/><ellipse cy="-4" rx="14" ry="6" fill="#fff"/></g>`;
const leche = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-12 -14 L -6 -24 H 6 L 12 -14 V 18 H -12 Z" fill="#fff" stroke="var(--ink)" stroke-width="2"/><rect x="-12" y="-4" width="24" height="10" fill="var(--water)"/></g>`;
const huevo = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="10" ry="13" fill="#fff" stroke="var(--ink)" stroke-width="2"/>`;
const pez = (x, y, c = "var(--water)") => `<g transform="translate(${x} ${y})"><ellipse rx="18" ry="9" fill="${c}"/><path d="M16 0 L 28 -9 V 9 Z" fill="${c}"/><circle cx="-9" cy="-2" r="2" fill="#1b2235"/></g>`;
const muslo = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="-4" cy="-2" rx="14" ry="11" fill="#b9773a"/><path d="M8 4 L 18 12" stroke="#e0d2b0" stroke-width="5" stroke-linecap="round"/></g>`;
const pastel = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-18 14 V -4 L 18 -12 V 14 Z" fill="#f5b5c8"/><path d="M-18 -4 L 18 -12" stroke="#fff" stroke-width="4"/><circle cx="6" cy="-14" r="4" fill="var(--red)"/></g>`;
const vaso = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-12 -18 L 12 -18 L 9 18 H -9 Z" fill="var(--water)" opacity=".5" stroke="var(--ink)" stroke-width="2"/></g>`;
const cepillo = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-30" y="-4" width="48" height="8" rx="4" fill="var(--pen)"/><rect x="14" y="-14" width="18" height="10" fill="#fff" stroke="var(--line)"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: "1-primaria",
  titulo: "Comer sano y cuidarse",
  minutos: 25,
  objetivos: ["Saber que los alimentos nos dan energía y nos ayudan a crecer", "Reconocer frutas, verduras, cereales, lácteos, carne, pescado y huevos", "Saber que los dulces se toman de vez en cuando", "Practicar hábitos sanos: agua, higiene, descanso y ejercicio"],
  claves: ["alimento", "fruta", "verdura", "agua", "higiene", "descanso"],
  pregunta: {
    texto: "¿Por qué no podemos comer solo chuches y galletas todos los días?",
    respuesta: "Porque el cuerpo necesita <mark>alimentos variados</mark> para crecer y estar fuerte: frutas, verduras, pan, leche, huevos, pescado… Los dulces solo se toman <b>de vez en cuando</b>.",
  },
  bloques: [
    {
      html: `<h3>Comemos para crecer</h3><p>Los alimentos nos dan <mark>energía</mark> para jugar, aprender y crecer.</p><p>Unos alimentos vienen de las <b>plantas</b>: la fruta, la verdura, el pan o las lentejas. Otros vienen de los <b>animales</b>: la leche, los huevos, la carne o el pescado.</p><p>Comer de todo un poco es <b>comer sano</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Alimentos de las plantas a la izquierda y de los animales a la derecha">${BG}
        <rect x="14" y="44" width="112" height="100" rx="12" fill="var(--ok-bg)"/><rect x="134" y="44" width="112" height="100" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        ${manzana(42, 80)}${zanahoria(78, 80)}${pan(56, 122)}${platano(100, 120)}
        ${leche(158, 90)}${huevo(192, 84)}${muslo(222, 84)}${pez(192, 124)}
        ${txt(70, 32, "de plantas", { size: 13, color: "var(--leaf)" })}${txt(190, 32, "de animales", { size: 13, color: "var(--inf)" })}
        ${txt(130, 166, "Comer de todo un poco", { size: 13, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Frutas y verduras</h3><p>Las <mark>frutas y las verduras</mark> son muy sanas. Tienen vitaminas que nos protegen de las enfermedades.</p><p>Hay que comerlas <b>todos los días</b>. Mejor si son de muchos colores: manzana roja, plátano amarillo, zanahoria naranja, brócoli verde.</p><p>Las frutas son un buen postre y un buen almuerzo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Manzana, plátano, zanahoria y brócoli de colores">${BG}
        ${manzana(40, 96, 18)}${platano(100, 96)}${zanahoria(160, 96)}${brocoli(218, 100)}
        ${txt(40, 146, "manzana", { size: 12 })}${txt(100, 146, "plátano", { size: 12 })}${txt(160, 146, "zanahoria", { size: 12 })}${txt(218, 146, "brócoli", { size: 12 })}
        ${txt(130, 34, "¡Todos los días!", { size: 16, color: "var(--leaf)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>Alimentos que dan energía</h3><p>El <mark>pan</mark>, el <mark>arroz</mark>, la pasta y las patatas nos dan <b>energía</b>. Son como la gasolina de un coche.</p><p>Las <b>legumbres</b> también son muy sanas. Son las lentejas, los garbanzos y las alubias.</p><p>Nos ayudan a correr, saltar y pensar en clase.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pan, un plato de arroz y lentejas, con un rayo de energía">${BG}
        ${pan(50, 100)}${arroz(130, 96)}
        <g transform="translate(210 100)"><path d="M-20 0 Q 0 22 20 0 Z" fill="var(--inf)"/><g fill="#8a5a2b">${[...Array(7)].map((_, i) => `<circle cx="${-12 + (i % 4) * 8}" cy="${-2 - Math.floor(i / 4) * 5}" r="3"/>`).join("")}</g></g>
        <path d="M130 20 L 120 44 H 132 L 124 64 L 144 36 H 132 L 140 20 Z" fill="var(--sun)"/>
        ${txt(50, 146, "pan", { size: 12 })}${txt(130, 146, "arroz", { size: 12 })}${txt(210, 146, "lentejas", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>Alimentos para crecer fuertes</h3><p>La <mark>leche</mark>, el yogur y el queso tienen calcio. El calcio pone fuertes los huesos y los dientes.</p><p>La carne, el pescado y los huevos ayudan a crecer. Hacen fuertes los músculos.</p><p>Hay que comer pescado varias veces a la semana.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Leche, queso, huevo, pescado y carne">${BG}
        ${leche(34, 96)}<path d="M66 110 L 104 110 L 104 90 Z" fill="var(--sun)" stroke="#c99a10" stroke-width="2"/>${huevo(130, 96)}${pez(176, 96)}${muslo(228, 96)}
        ${txt(34, 140, "leche", { size: 12 })}${txt(88, 140, "queso", { size: 12 })}${txt(130, 140, "huevo", { size: 12 })}${txt(180, 140, "pescado", { size: 12 })}${txt(228, 140, "carne", { size: 12 })}
        ${txt(130, 34, "Huesos y músculos fuertes", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>Dulces poco, agua mucho</h3><p>Los <mark>dulces</mark>, los refrescos y las chuches tienen mucho azúcar. Están ricos, pero se toman <b>de vez en cuando</b>. Por ejemplo, en un cumpleaños.</p><p>La mejor bebida es el <mark>agua</mark>. Bebemos agua cuando tenemos sed. También después de jugar o hacer deporte.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un pastel con la etiqueta de vez en cuando y un vaso de agua con la etiqueta todos los días">${BG}
        ${pastel(70, 94)}${vaso(190, 94)}
        ${txt(70, 140, "de vez en cuando", { size: 13, color: "var(--inf)" })}${txt(190, 140, "todos los días", { size: 13, color: "var(--water)" })}
        ${check(190, 44, true)}
        <g transform="translate(70 44)"><circle r="12" fill="var(--sun)"/><path d="M-5 0 H 5" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g></svg>`,
    },
    {
      html: `<h3>El plato saludable</h3><p>Un plato sano tiene <mark>de todo</mark>.</p><p>La mitad del plato es de <b>frutas y verduras</b>. Un trozo es de pan, arroz o pasta. Otro trozo es de pescado, carne, huevo o legumbres.</p><p>Para beber, agua. Y comemos despacio, sentados a la mesa y sin pantallas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Plato dividido: la mitad verduras, un cuarto cereales y un cuarto proteínas, con un vaso de agua">${BG}
        <circle cx="110" cy="96" r="70" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M110 96 V 26 A 70 70 0 0 0 110 166 Z" fill="var(--leaf)" opacity=".3"/><path d="M110 96 V 26 A 70 70 0 0 1 180 96 Z" fill="var(--sun)" opacity=".35"/><path d="M110 96 H 180 A 70 70 0 0 1 110 166 Z" fill="var(--red)" opacity=".25"/>
        ${brocoli(80, 80)}${zanahoria(76, 124)}${pan(146, 70)}${pez(144, 124, "var(--water)")}
        ${vaso(222, 110)}${txt(222, 148, "agua", { size: 12, color: "var(--water)" })}</svg>`,
    },
    {
      html: `<h3>Limpios y sanos</h3><p>La <mark>higiene</mark> también nos cuida. Nos lavamos las manos con agua y jabón. Lo hacemos antes de comer y después de ir al baño.</p><p>Nos cepillamos los <b>dientes</b> después de cada comida. Así no salen caries.</p><p>Nos duchamos a menudo y llevamos ropa limpia.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Manos con jabón y burbujas, y un cepillo de dientes con un diente sano">${BG}
        <g transform="translate(70 100)"><ellipse rx="34" ry="22" fill="#f2c9a0" stroke="#c48a60" stroke-width="2"/><path d="M-30 -6 Q 0 -20 30 -6" stroke="#c48a60" stroke-width="2" fill="none"/></g>
        <g fill="none" stroke="var(--water)" stroke-width="2">${[[40, 64, 9], [64, 54, 7], [92, 66, 10], [104, 92, 6], [36, 128, 7]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join("")}</g>
        ${cepillo(190, 66)}
        <g transform="translate(196 118)"><path d="M-18 -16 Q -20 -24 -10 -24 Q 0 -20 10 -24 Q 20 -24 18 -16 Q 16 0 10 20 Q 6 24 4 10 Q 0 4 -4 10 Q -6 24 -10 20 Q -16 0 -18 -16 Z" fill="#fff" stroke="var(--ink)" stroke-width="2"/></g>
        ${txt(70, 160, "agua y jabón", { size: 12 })}${txt(196, 160, "dientes limpios", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>Descansar y moverse</h3><p>Para estar sanos también necesitamos <mark>dormir</mark>. Los niños deben dormir unas <b>10 horas</b> cada noche. Así crecen y aprenden mejor.</p><p>Y necesitamos <mark>movernos</mark>. Correr, saltar, nadar o ir en bici nos hace fuertes.</p><p>Jugar al aire libre es mejor que estar mucho rato con pantallas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño durmiendo en la cama con la luna y otro niño corriendo al sol">${BG}
        <rect x="16" y="104" width="104" height="30" rx="6" fill="var(--pen)"/><rect x="16" y="90" width="10" height="56" fill="#8a5a2b"/><circle cx="40" cy="96" r="11" fill="#f2c9a0"/><rect x="50" y="94" width="66" height="14" rx="6" fill="var(--card)"/>
        ${luna(80, 46, 16)}${txt(100, 80, "z z", { size: 14, color: "var(--muted)", anchor: "start" })}
        ${persona(196, 150, 110, "var(--inf)")}
        <g stroke="var(--muted)" stroke-width="2"><path d="M160 90 h -14 M160 104 h -20"/></g>
        ${txt(68, 166, "dormir", { size: 13 })}${txt(196, 168, "moverse", { size: 13 })}</svg>`,
      video: { id: "jsqONxiLcYM", titulo: "Actividad física y alimentación | Camaleón", canal: "CNTV Infantil", vistas: 3104980, megusta: 0 },
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Comer sano y cuidarnos nos ayuda a <mark>tener energía</mark> todo el día.</p><p>Un buen <b>desayuno</b> es muy importante. Por ejemplo: leche, pan con tomate y una fruta. Así llegamos al cole con fuerzas para aprender.</p><p>Si nos cuidamos, nos ponemos menos enfermos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Desayuno sano: leche, pan con tomate y una naranja">${BG}
        <rect x="20" y="120" width="220" height="10" rx="5" fill="#c98a4a"/>
        <g transform="translate(60 110)"><path d="M-16 -36 h 32 l -4 36 h -24 Z" fill="#fff" stroke="var(--ink)" stroke-width="2"/></g>
        <g transform="translate(130 112)"><rect x="-26" y="-14" width="52" height="16" rx="6" fill="#d9a066"/><rect x="-22" y="-18" width="44" height="6" rx="3" fill="var(--red)"/></g>
        <circle cx="200" cy="98" r="18" fill="var(--inf)"/><ellipse cx="204" cy="80" rx="5" ry="3" fill="var(--leaf)"/>
        ${txt(60, 152, "leche", { size: 12 })}${txt(130, 152, "pan con tomate", { size: 12 })}${txt(200, 152, "fruta", { size: 12 })}
        ${txt(130, 34, "Un buen desayuno", { size: 16, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>Juego: el semáforo</h3><p>Jugamos al <mark>semáforo de los alimentos</mark>.</p><p><b>Verde</b>: todos los días. Frutas, verduras, agua, legumbres y pan.</p><p><b>Amarillo</b>: algunas veces por semana. Carne, huevos y pescado.</p><p><b>Rojo</b>: de vez en cuando. Chuches, refrescos y bollos.</p><p>Un adulto dice un alimento. ¿De qué color es?</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Semáforo: verde con manzana, amarillo con huevo y rojo con pastel">${BG}
        <rect x="30" y="16" width="56" height="150" rx="14" fill="var(--ink)"/>
        <circle cx="58" cy="44" r="18" fill="var(--leaf)"/><circle cx="58" cy="91" r="18" fill="var(--sun)"/><circle cx="58" cy="138" r="18" fill="var(--red)"/>
        ${manzana(120, 46)}${brocoli(150, 48)}${huevo(118, 92)}${pez(150, 92)}${pastel(124, 140)}
        ${txt(218, 50, "a diario", { size: 13, color: "var(--leaf)" })}${txt(218, 96, "a veces", { size: 13, color: "#b8860b" })}${txt(218, 144, "poco", { size: 13, color: "var(--red)" })}</svg>`,
    },
  ],
  figura: {
    titulo: "Hábitos para crecer sanos",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Cuatro hábitos sanos: comer de todo, beber agua, lavarse y dormir y moverse">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["COMER DE TODO", "var(--leaf)", manzana(-14, -14, 13) + brocoli(16, -12) + pan(0, 22)],
         ["BEBER AGUA", "var(--water)", vaso(0, 0)],
         ["LAVARSE", "var(--pen)", cepillo(4, -20) + `<path d="M-14 0 Q -16 -8 -6 -8 Q 0 -6 6 -8 Q 16 -8 14 0 Q 12 14 8 26 Q 4 28 2 16 Q 0 12 -2 16 Q -4 28 -8 26 Q -12 14 -14 0 Z" fill="#fff" stroke="var(--ink)" stroke-width="2"/>`],
         ["DORMIR Y MOVERSE", "var(--inf)", luna(0, 0, 24)]].map(([t, c, d], i) => `<rect x="${20 + i * 152}" y="40" width="140" height="220" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/><g transform="translate(${90 + i * 152} 130) scale(${i === 3 ? 1.6 : 2})">${d}</g>${txt(90 + i * 152, 240, t, { size: i === 3 ? 13 : 14, color: c, font: D, weight: 800 })}`).join("")}
      ${txt(320, 26, "Para estar sanos y fuertes", { size: 16, color: "var(--ink)" })}
    </svg>`,
  },
  video: { id: "Wr0_wULJnBE", titulo: "Alimentación saludable para niños - Hidratos de carbono, grasas, proteínas…", canal: "Smile and Learn - Español", vistas: 4089452, megusta: 0, busqueda: "alimentación saludable para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Prepara un almuerzo sano para el recreo.",
      pasos: ["Elige algo que dé energía: un bocadillo pequeño.", "Añade una fruta: una mandarina.", "Para beber, una botella de agua."],
      resultado: "bocadillo, mandarina y agua es un almuerzo sano." },
    { enunciado: "¿El zumo de bote es tan sano como una naranja?",
      pasos: ["La naranja entera tiene fibra y vitaminas.", "El zumo de bote suele tener azúcar añadido.", "Es mejor comer la fruta entera."],
      resultado: "es más sano comer la naranja entera." },
    { enunciado: "Has jugado al fútbol y tienes sed. ¿Qué bebes?",
      pasos: ["Al correr, el cuerpo pierde agua al sudar.", "Hay que recuperar esa agua.", "La mejor bebida es el agua."],
      resultado: "bebo agua." },
  ],
  errores: [
    "Pensar que comer sano es comer solo verdura: hay que comer de todo un poco.",
    "Creer que los zumos y refrescos son como el agua: tienen mucho azúcar.",
    "Lavarse las manos solo con agua: hace falta jabón y frotar bien.",
    "Pensar que dormir poco no importa: el cuerpo crece y descansa mientras dormimos.",
  ],
  ejercicios: [
    { q: "Di tres frutas.", sol: "Por ejemplo: manzana, plátano y naranja." },
    { q: "Di dos verduras.", sol: "Por ejemplo: zanahoria y lechuga." },
    { q: "¿Qué alimento viene de la vaca y pone fuertes los huesos?", sol: "La leche." },
    { q: "¿Las lentejas vienen de una planta o de un animal?", sol: "De una planta: son legumbres." },
    { q: "Dibuja tu plato saludable.", sol: "La mitad con frutas y verduras, un trozo con pan, arroz o pasta y otro con pescado, carne, huevo o legumbres." },
    { q: "¿Cuándo debes lavarte las manos?", sol: "Antes de comer y después de ir al baño." },
    { q: "Di de qué color del semáforo es la manzana.", sol: "Verde: se puede comer todos los días." },
    { q: "Di de qué color del semáforo son las chuches.", sol: "Rojo: solo de vez en cuando." },
    { q: "¿Cuántas horas tienen que dormir los niños más o menos?", sol: "Unas 10 horas." },
    { q: "Di un juego o deporte que te guste para moverte.", sol: "Por ejemplo: pillar, saltar a la comba o montar en bici." },
  ],
  quiz: [
    { q: "¿Cuál es la mejor bebida?", o: ["El refresco", "El agua", "El batido"], a: 1, e: "El agua es la más sana." },
    { q: "Las frutas y verduras se comen…", o: ["todos los días", "nunca", "solo en verano"], a: 0, e: "Todos los días, de muchos colores." },
    { q: "¿Qué alimento viene de un animal?", o: ["El huevo", "La manzana", "El pan"], a: 0, e: "Lo pone la gallina." },
    { q: "¿Qué pone fuertes los huesos?", o: ["La leche", "Los caramelos", "Los refrescos"], a: 0, e: "La leche tiene calcio." },
    { q: "Los dulces se comen…", o: ["en cada comida", "de vez en cuando", "en el desayuno siempre"], a: 1, e: "Tienen mucho azúcar." },
    { q: "Nos lavamos las manos…", o: ["solo con agua", "con agua y jabón", "con la camiseta"], a: 1, e: "El jabón quita los microbios." },
    { q: "¿Cuándo nos cepillamos los dientes?", o: ["Después de comer", "Una vez al mes", "Nunca"], a: 0, e: "Después de cada comida." },
    { q: "La mitad del plato saludable es de…", o: ["pasta", "frutas y verduras", "dulces"], a: 1, e: "La mitad son frutas y verduras." },
    { q: "Las lentejas son…", o: ["legumbres", "lácteos", "dulces"], a: 0, e: "Como los garbanzos y las alubias." },
    { q: "Para estar sanos también hay que…", o: ["dormir y moverse", "ver mucha tele", "no beber agua"], a: 0, e: "Descanso y ejercicio." },
  ],
  examen: [
    { q: "¿Qué alimento da energía?", o: ["El pan", "El agua", "La sal"], a: 0, e: "El pan, el arroz y la pasta dan energía." },
    { q: "Un desayuno sano es…", o: ["refresco y bollo", "leche, pan y fruta", "solo galletas"], a: 1, e: "Leche, pan y fruta." },
    { q: "¿De qué color del semáforo son las chuches?", o: ["Verde", "Amarillo", "Rojo"], a: 2, e: "Solo de vez en cuando." },
    { q: "¿Por qué nos cepillamos los dientes?", o: ["Para que no salgan caries", "Para dormir más", "Para crecer"], a: 0, e: "Así quitamos los restos de comida." },
  ],
  feynman: ["Por qué hay que comer de todo", "Cómo es un plato saludable", "Qué hábitos nos mantienen sanos"],
  mapa: mapa("COMER SANO Y CUIDARSE", "var(--pri)", [
    ["Todos los días", "frutas · verduras · agua · pan", "var(--leaf)"],
    ["A veces", "carne · pescado · huevos", "var(--sun)"],
    ["De vez en cuando", "dulces · refrescos", "var(--red)"],
    ["Hábitos", "lavarse · dormir · moverse", "var(--pen)"],
  ], 230),
  tarjetas: [
    ["¿Cuál es la mejor bebida?", "El agua"],
    ["¿Cuándo se comen las frutas y verduras?", "Todos los días"],
    ["¿Qué alimentos dan energía?", "Pan, arroz, pasta y patatas"],
    ["¿Qué pone fuertes los huesos?", "La leche, el yogur y el queso"],
    ["¿Cuándo se toman los dulces?", "De vez en cuando"],
    ["¿Cuándo nos lavamos las manos?", "Antes de comer y después del baño"],
    ["¿Cuántas horas duerme un niño?", "Unas 10 horas"],
    ["¿Cómo es un desayuno sano?", "Leche, pan y fruta"],
  ],
  familias: [
    "Haced la compra juntos y pedidle que elija frutas de tres colores distintos.",
    "Preparad juntos un plato saludable y que diga qué parte es cada alimento.",
    "Poned el semáforo de los alimentos en la nevera.",
    "Lavaos las manos juntos cantando una canción corta para frotar el tiempo suficiente.",
  ],
  profesores: {
    saberes: "Ciencias, Geografía e Historia: hábitos de vida saludable, alimentación equilibrada, higiene, descanso y actividad física (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Mural del plato saludable con recortes de folletos del supermercado.", "Registro semanal del almuerzo del recreo con pegatinas.", "Taller de lavado de manos con purpurina para ver los «microbios»."],
  },
  fuentes: [RD],
  revisado: "2026-11-12",
};
