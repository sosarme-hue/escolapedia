// Educación Plástica 1º de Primaria: los colores.
const { mapa } = require("./_util");
const { svg, txt, PROF, FUENTES } = require("./_pri1");

// Colores pintados (no dependen del tema claro/oscuro: son pinturas).
const P = { rojo: "#e53935", amarillo: "#fdd835", azul: "#1e88e5", verde: "#43a047", naranja: "#fb8c00", morado: "#8e24aa", blanco: "#ffffff", negro: "#212121", marron: "#795548", rosa: "#f48fb1", gris: "#9e9e9e", celeste: "#81d4fa" };
const mancha = (x, y, r, c) => `<path d="M${x - r} ${y} q 0 ${-r} ${r} ${-r} q ${r * 1.1} 0 ${r} ${r} q 0 ${r * 0.9} ${-r} ${r} q ${-r * 1.05} 0 ${-r} ${-r} Z" fill="${c}" stroke="var(--ink)" stroke-width="1"/>`;

module.exports = {
  materia: "Educación Plástica",
  curso: "1-primaria",
  titulo: "Los colores",
  minutos: 25,
  objetivos: ["Conocer los colores primarios y cómo se mezclan", "Distinguir colores cálidos y fríos", "Usar los colores para expresar ideas y emociones"],
  claves: ["primarios", "secundarios", "mezclar", "cálidos", "fríos", "claro", "oscuro"],
  pregunta: {
    texto: "Si solo tienes pintura amarilla y azul, ¿cómo puedes pintar la hierba verde?",
    respuesta: "<mark>Mezclando amarillo y azul</mark>. Al juntarlos sale el verde. ¡Con pocos colores se pueden hacer muchos!",
  },
  bloques: [
    {
      html: `<h3>Un mundo de colores</h3><p>Mira a tu alrededor: el cielo es azul, las fresas son rojas y el sol es amarillo. Los <mark>colores</mark> nos ayudan a reconocer las cosas.</p><p>Los artistas usan los colores para que sus dibujos sean <b>alegres, tranquilos o misteriosos</b>. ¡Tú también puedes!</p>`,
      svg: svg("Un arcoíris sobre una pradera verde con un sol amarillo", `${[P.rojo, P.naranja, P.amarillo, P.verde, P.azul, P.morado].map((c, i) => `<path d="M${30 + i * 9} 140 A ${100 - i * 9} ${100 - i * 9} 0 0 1 ${230 - i * 9} 140" stroke="${c}" stroke-width="9" fill="none"/>`).join("")}<rect x="10" y="140" width="240" height="30" rx="8" fill="${P.verde}" opacity=".6"/><circle cx="225" cy="35" r="16" fill="${P.amarillo}"/>`),
    },
    {
      html: `<h3>Los colores primarios</h3><p>Hay tres colores muy importantes: el <mark>rojo</mark>, el <mark>amarillo</mark> y el <mark>azul</mark>. Se llaman <b>primarios</b>.</p><p>No se pueden hacer mezclando otros colores. Con ellos, en cambio, podemos conseguir <b>casi todos los demás</b>. ¡Son como los ingredientes básicos de una receta!</p>`,
      svg: svg("Tres manchas de pintura: rojo, amarillo y azul", `${mancha(55, 80, 32, P.rojo)}${mancha(130, 80, 32, P.amarillo)}${mancha(205, 80, 32, P.azul)}${txt(55, 145, "rojo")}${txt(130, 145, "amarillo")}${txt(205, 145, "azul")}`),
      video: { id: "lvCrwRFWpPw", titulo: "Los colores primarios, secundarios y terciarios", canal: "Smile and Learn - Español", vistas: 3858629, megusta: 0 },
    },
    {
      html: `<h3>Mezclar colores</h3><p>Si mezclamos dos primarios, sale un color nuevo, un <mark>color secundario</mark>:</p><p><b>amarillo + azul = verde</b>. <b>rojo + amarillo = naranja</b>. <b>rojo + azul = morado</b>. Pruébalo con témperas y un pincel: ¡es casi magia!</p>`,
      svg: svg("Tres sumas de colores: amarillo y azul dan verde, rojo y amarillo dan naranja, rojo y azul dan morado", `${[[P.amarillo, P.azul, P.verde], [P.rojo, P.amarillo, P.naranja], [P.rojo, P.azul, P.morado]].map(([a, b, c], i) => `<circle cx="40" cy="${35 + i * 50}" r="16" fill="${a}"/><text x="68" y="${41 + i * 50}" font-size="20" font-weight="800" fill="var(--ink)">+</text><circle cx="100" cy="${35 + i * 50}" r="16" fill="${b}"/><text x="128" y="${41 + i * 50}" font-size="20" font-weight="800" fill="var(--ink)">=</text><circle cx="168" cy="${35 + i * 50}" r="20" fill="${c}"/>`).join("")}`),
    },
    {
      html: `<h3>El círculo de colores</h3><p>Podemos poner los colores en un <mark>círculo</mark>, como una rueda. Entre dos primarios colocamos el color que sale al mezclarlos.</p><p>Así vemos que el verde está entre el amarillo y el azul, y el naranja entre el rojo y el amarillo.</p>`,
      svg: svg("Un círculo cromático con seis colores: rojo, naranja, amarillo, verde, azul y morado", `<g transform="translate(130 90)">${[P.rojo, P.naranja, P.amarillo, P.verde, P.azul, P.morado].map((c, i) => { const a1 = (i * 60 - 120) * Math.PI / 180, a2 = ((i + 1) * 60 - 120) * Math.PI / 180, r = 70; return `<path d="M0 0 L ${(Math.cos(a1) * r).toFixed(1)} ${(Math.sin(a1) * r).toFixed(1)} A ${r} ${r} 0 0 1 ${(Math.cos(a2) * r).toFixed(1)} ${(Math.sin(a2) * r).toFixed(1)} Z" fill="${c}" stroke="var(--card)" stroke-width="3"/>`; }).join("")}<circle r="18" fill="var(--card)"/></g>`),
    },
    {
      html: `<h3>Colores cálidos y fríos</h3><p>El <b>rojo, el naranja y el amarillo</b> nos recuerdan al fuego y al sol: son <mark>colores cálidos</mark>. Dan sensación de calor y alegría.</p><p>El <b>azul, el verde y el morado</b> nos recuerdan al agua, al hielo y a la noche: son <mark>colores fríos</mark>. Dan sensación de calma.</p>`,
      svg: svg("A la izquierda una hoguera con colores cálidos y a la derecha una ola con colores fríos", `<rect x="10" y="20" width="115" height="120" rx="12" fill="${P.amarillo}" opacity=".25"/><path d="M67 125 q -35 -30 -5 -75 q 0 30 15 30 q 5 -20 -2 -35 q 35 35 18 80 Z" fill="${P.rojo}"/><path d="M67 125 q -18 -20 0 -45 q 5 20 15 20 q 5 15 -15 25 Z" fill="${P.amarillo}"/><rect x="135" y="20" width="115" height="120" rx="12" fill="${P.celeste}" opacity=".35"/><path d="M145 110 q 25 -50 55 -20 q -25 0 -15 20 q 25 -10 55 0 V 130 H 145 Z" fill="${P.azul}"/>${txt(67, 160, "cálidos", P.rojo)}${txt(192, 160, "fríos", P.azul)}`),
      video: { id: "nvOA3D184q0", titulo: "Fríos y cálidos: clases de artes para niños", canal: "CNTV Infantil", vistas: 523955, megusta: 0 },
    },
    {
      html: `<h3>Claro y oscuro</h3><p>Si a un color le añadimos <b>blanco</b>, se vuelve más <mark>claro</mark>: el rojo con blanco se vuelve rosa.</p><p>Si le añadimos <b>negro</b>, se vuelve más <mark>oscuro</mark>. Con poquito negro basta: ¡el negro es muy fuerte!</p>`,
      svg: svg("Una escala de azul que va de claro con blanco a oscuro con negro", `${["#e3f2fd", "#90caf9", "#1e88e5", "#1565c0", "#0d2a59"].map((c, i) => `<rect x="${20 + i * 45}" y="55" width="40" height="55" rx="6" fill="${c}" stroke="var(--line)"/>`).join("")}${txt(45, 140, "+ blanco", "var(--muted)", 13)}${txt(130, 140, "azul", P.azul, 13)}${txt(215, 140, "+ negro", "var(--muted)", 13)}`),
    },
    {
      html: `<h3>Los colores y las emociones</h3><p>Los colores también <mark>expresan cómo nos sentimos</mark>. Mucha gente pinta la alegría de amarillo, la calma de azul y el enfado de rojo.</p><p>No hay una única respuesta: cada persona puede elegir sus colores. ¿De qué color pintarías tú la felicidad?</p>`,
      svg: svg("Tres caras: una amarilla alegre, una azul tranquila y una roja enfadada", `${[[P.amarillo, "M-12 6 q 12 12 24 0"], [P.celeste, "M-10 8 h 20"], [P.rojo, "M-12 12 q 12 -10 24 0"]].map(([c, b], i) => `<g transform="translate(${50 + i * 80} 80)"><circle r="30" fill="${c}"/><circle cx="-10" cy="-6" r="4" fill="${P.negro}"/><circle cx="10" cy="-6" r="4" fill="${P.negro}"/><path d="${b}" stroke="${P.negro}" stroke-width="3" fill="none"/>${i === 2 ? `<path d="M-16 -16 l 10 5 M16 -16 l -10 5" stroke="${P.negro}" stroke-width="3"/>` : ""}</g>`).join("")}${txt(50, 140, "alegría", "var(--ink)", 13)}${txt(130, 140, "calma", "var(--ink)", 13)}${txt(210, 140, "enfado", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>Materiales para colorear</h3><p>Podemos pintar con <mark>lápices de colores</mark>, <mark>ceras</mark>, <mark>rotuladores</mark> y <mark>témperas</mark>.</p><p>Con los lápices coloreamos <b>sin salirnos</b> y en la misma dirección. Las témperas se ponen con pincel y luego lo lavamos con agua antes de cambiar de color.</p>`,
      svg: svg("Un lápiz, una cera, un rotulador y un pincel con un bote de témpera", `<rect x="20" y="40" width="16" height="90" rx="3" fill="${P.rojo}"/><path d="M20 130 L 28 150 L 36 130 Z" fill="#f5deb3"/><rect x="65" y="60" width="20" height="70" rx="4" fill="${P.azul}"/><rect x="65" y="75" width="20" height="30" fill="var(--card)" opacity=".6"/><rect x="110" y="40" width="18" height="95" rx="6" fill="${P.verde}"/><rect x="110" y="40" width="18" height="22" rx="6" fill="${P.negro}"/><rect x="170" y="100" width="55" height="45" rx="6" fill="${P.amarillo}" stroke="var(--ink)"/><path d="M200 105 L 230 30" stroke="#a1887f" stroke-width="6"/><path d="M196 110 l 6 -18 l 8 4 Z" fill="${P.amarillo}"/>`),
    },
    {
      html: `<h3>Juego: el laboratorio de colores</h3><p>Pon en un plato tres gotas de témpera: <b>roja, amarilla y azul</b>. Mezcla de dos en dos con un pincel y <mark>descubre los secundarios</mark>.</p><p>Después añade un poco de blanco a cada mezcla. Pinta una fila con todos los colores que hayas conseguido. ¿Cuántos tienes?</p>`,
      svg: svg("Un plato con gotas de pintura y mezclas", `<ellipse cx="130" cy="90" rx="110" ry="65" fill="var(--card)" stroke="var(--line)" stroke-width="3"/>${[[70, 70, P.rojo], [130, 50, P.amarillo], [190, 70, P.azul], [100, 60, P.naranja], [160, 60, P.verde], [130, 110, P.morado], [80, 115, P.rosa], [180, 115, P.celeste]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="13" fill="${c}"/>`).join("")}`),
    },
  ],
  figura: {
    titulo: "Primarios y secundarios",
    svg: `<svg viewBox="0 0 640 280" role="img" aria-label="Arriba los tres colores primarios. Abajo los secundarios: rojo y amarillo dan naranja, amarillo y azul dan verde, rojo y azul dan morado">
      <rect width="640" height="280" rx="16" fill="var(--paper)"/>
      ${txt(320, 28, "PRIMARIOS", "var(--muted)", 14)}
      ${[[P.rojo, "rojo"], [P.amarillo, "amarillo"], [P.azul, "azul"]].map(([c, t], i) => `<circle cx="${130 + i * 190}" cy="75" r="32" fill="${c}"/>${txt(130 + i * 190, 128, t, "var(--ink)", 15)}`).join("")}
      ${txt(320, 160, "SECUNDARIOS", "var(--muted)", 14)}
      ${[[P.naranja, "naranja", P.rojo, P.amarillo], [P.verde, "verde", P.amarillo, P.azul], [P.morado, "morado", P.rojo, P.azul]].map(([c, t, a, b], i) => `<circle cx="${95 + i * 190}" cy="205" r="11" fill="${a}"/><circle cx="${120 + i * 190}" cy="205" r="11" fill="${b}"/><text x="${140 + i * 190}" y="211" font-size="18" font-weight="800" fill="var(--ink)">=</text><circle cx="${180 + i * 190}" cy="205" r="26" fill="${c}"/>${txt(180 + i * 190, 255, t, "var(--ink)", 15)}`).join("")}
    </svg>`,
  },
  video: { id: "oVr7NhOJOn0", titulo: "Aprende los colores primarios con Mon el dragón", canal: "Babyradio", vistas: 1013031, megusta: 0, busqueda: "colores primarios para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cómo conseguimos el naranja?", pasos: ["Ponemos un poco de amarillo en el plato.", "Añadimos un poquito de rojo.", "Mezclamos con el pincel hasta que no se vean rayas."], resultado: "rojo + amarillo = naranja." },
    { enunciado: "Pinta un paisaje que dé sensación de frío.", pasos: ["Elegimos colores fríos: azules, verdes y morados.", "Pintamos montañas con nieve y un cielo azul.", "Evitamos el rojo y el naranja."], resultado: "un paisaje tranquilo y frío." },
    { enunciado: "¿Cómo hago un verde más claro?", pasos: ["Primero preparo el verde: amarillo + azul.", "Añado un poco de blanco.", "Mezclo bien."], resultado: "un verde claro, como el de las hojas nuevas." },
  ],
  errores: [
    "Mezclar todos los colores a la vez: sale un marrón oscuro. Mejor de dos en dos.",
    "No lavar el pincel al cambiar de color: ensucia la pintura.",
    "Poner mucho negro para oscurecer: basta una gota.",
    "Colorear con rayas en todas las direcciones: se ve mejor en una sola dirección.",
  ],
  ejercicios: [
    { q: "Di los tres colores primarios.", sol: "Rojo, amarillo y azul." },
    { q: "¿Qué color sale con amarillo y azul?", sol: "Verde." },
    { q: "¿Qué color sale con rojo y azul?", sol: "Morado." },
    { q: "¿Qué color sale con rojo y amarillo?", sol: "Naranja." },
    { q: "Nombra dos colores cálidos.", sol: "Por ejemplo, rojo y naranja." },
    { q: "Nombra dos colores fríos.", sol: "Por ejemplo, azul y verde." },
    { q: "¿Qué añado para hacer un color más claro?", sol: "Blanco." },
    { q: "Dibuja un sol con colores cálidos.", sol: "Un sol amarillo, naranja o rojo." },
    { q: "Pinta tu cara de hoy con el color de cómo te sientes.", sol: "Respuesta libre: lo importante es poder explicar por qué." },
    { q: "Busca en casa tres cosas de colores primarios.", sol: "Por ejemplo, un tomate rojo, un plátano amarillo y una toalla azul." },
  ],
  quiz: [
    { q: "¿Cuál es un color primario?", o: ["verde", "azul", "naranja"], a: 1, e: "Los primarios son rojo, amarillo y azul." },
    { q: "Amarillo + azul =", o: ["verde", "morado", "rosa"], a: 0, e: "Sale verde." },
    { q: "Rojo + amarillo =", o: ["naranja", "marrón", "azul"], a: 0, e: "Sale naranja." },
    { q: "Rojo + azul =", o: ["verde", "morado", "gris"], a: 1, e: "Sale morado." },
    { q: "¿Qué color es cálido?", o: ["azul", "rojo", "verde"], a: 1, e: "Recuerda al fuego." },
    { q: "¿Qué color es frío?", o: ["naranja", "amarillo", "azul"], a: 2, e: "Recuerda al agua." },
    { q: "Para aclarar un color añado…", o: ["negro", "blanco", "marrón"], a: 1, e: "El blanco aclara." },
    { q: "Rojo + blanco =", o: ["rosa", "verde", "negro"], a: 0, e: "Un rojo claro: rosa." },
    { q: "Antes de cambiar de color, el pincel…", o: ["se tira", "se lava", "se seca al sol"], a: 1, e: "Se lava con agua." },
    { q: "¿Cuántos colores primarios hay?", o: ["2", "3", "7"], a: 1, e: "Rojo, amarillo y azul." },
  ],
  examen: [
    { q: "El verde es un color…", o: ["primario", "secundario", "negro"], a: 1, e: "Sale de mezclar amarillo y azul." },
    { q: "¿Qué grupo es de colores cálidos?", o: ["rojo, naranja, amarillo", "azul, verde, morado", "blanco y negro"], a: 0, e: "Fuego y sol." },
    { q: "Para oscurecer un color añado…", o: ["blanco", "agua", "un poco de negro"], a: 2, e: "El negro oscurece." },
    { q: "El morado sale de…", o: ["rojo y azul", "rojo y amarillo", "azul y amarillo"], a: 0, e: "Rojo + azul." },
  ],
  feynman: ["Cuáles son los colores primarios", "Cómo se consiguen los secundarios", "Qué diferencia hay entre colores cálidos y fríos"],
  mapa: mapa("LOS COLORES", "var(--pri)", [
    ["Primarios", "rojo · amarillo · azul", "var(--red)"],
    ["Secundarios", "naranja · verde · morado", "var(--leaf)"],
    ["Cálidos y fríos", "fuego y sol · agua y hielo", "var(--sun)"],
    ["Claro y oscuro", "+ blanco · + negro", "var(--pen)"],
  ], 220),
  tarjetas: [
    ["Colores primarios", "Rojo, amarillo y azul"],
    ["Amarillo + azul", "Verde"],
    ["Rojo + amarillo", "Naranja"],
    ["Rojo + azul", "Morado"],
    ["Colores cálidos", "Rojo, naranja, amarillo"],
    ["Colores fríos", "Azul, verde, morado"],
    ["¿Qué aclara un color?", "El blanco"],
    ["¿Qué oscurece un color?", "Un poco de negro"],
  ],
  familias: [
    "Pintad juntos con témperas en un plato y descubrid las mezclas.",
    "Al pasear, buscad colores cálidos y fríos en escaparates, flores y coches.",
    "Preguntad «¿de qué color te sientes hoy?» y dejad que lo dibuje.",
    "Proteged la mesa con papel de periódico: la pintura se disfruta más sin miedo a manchar.",
  ],
  profesores: PROF("Educación Plástica y Visual: elementos del lenguaje visual (el color), colores primarios y secundarios, gama cálida y fría, y expresión de emociones con el color", ["Laboratorio de mezclas con témperas en pequeños grupos.", "Mural de clase dividido en zona cálida y zona fría.", "Termómetro de emociones con colores."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
