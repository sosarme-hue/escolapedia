// Ciencias de la Naturaleza 1º de Primaria. Formato de 1º: frases cortas y un dibujo propio en cada bloque.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, sol, arbol, flor, coche, check, RD } = require("./_peques");

// Piedra sencilla.
const piedra = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-22 0 Q -26 -16 -10 -20 Q 6 -28 18 -16 Q 28 -6 20 0 Z" fill="#9aa3b5" stroke="var(--ink)" stroke-width="1.5"/></g>`;
// Pelota.
const pelota = (x, y, r = 14) => `<g transform="translate(${x} ${y})"><circle r="${r}" fill="var(--red)"/><path d="M${-r} 0 H ${r}" stroke="#fff" stroke-width="3"/></g>`;
// Perro sencillo.
const perro = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="-16" rx="22" ry="11" fill="#b9773a"/><circle cx="22" cy="-28" r="10" fill="#b9773a"/><ellipse cx="18" cy="-36" rx="4" ry="8" fill="#7a4a1f"/><circle cx="25" cy="-30" r="1.8" fill="#1b2235"/><circle cx="32" cy="-26" r="2.2" fill="#1b2235"/><path d="M-14 -8 V 0 M-6 -8 V 0 M8 -8 V 0 M14 -8 V 0" stroke="#7a4a1f" stroke-width="4" stroke-linecap="round"/><path d="M-22 -18 q -8 -6 -6 -14" stroke="#b9773a" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;
// Pollito y huevo.
const pollito = (x, y) => `<g transform="translate(${x} ${y})"><circle cy="-12" r="12" fill="var(--sun)"/><circle cx="4" cy="-14" r="1.8" fill="#1b2235"/><path d="M10 -12 L 16 -10 L 10 -8 Z" fill="var(--inf)"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: "1-primaria",
  titulo: "Seres vivos y seres inertes",
  minutos: 20,
  objetivos: ["Distinguir un ser vivo de un objeto que no tiene vida", "Saber que los seres vivos nacen, crecen, se alimentan y mueren", "Poner ejemplos de animales, plantas y personas"],
  claves: ["ser vivo", "ser inerte", "nacer", "crecer", "alimentarse", "morir"],
  pregunta: {
    texto: "Una piedra y un gato están en el jardín. ¿Cuál de los dos ha nacido? ¿Cuál come?",
    respuesta: "El <mark>gato</mark>: nació de su madre, come y crece. La piedra no nace, no come y no crece. El gato es un <b>ser vivo</b> y la piedra es un <b>ser inerte</b>.",
  },
  bloques: [
    {
      html: `<h3>Seres vivos</h3><p>Mira a tu alrededor. Hay personas, animales y plantas. Todos son <mark>seres vivos</mark>: tienen vida.</p><p>Los seres vivos nacen y crecen. Necesitan comida, agua y aire. Tú también eres un ser vivo. Naciste siendo un bebé y sigues creciendo.</p><p>Hay tres grupos: <b>personas</b>, <b>animales</b> y <b>plantas</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una niña, un perro y una flor: los tres son seres vivos">${BG}
        ${persona(55, 140, 92, "var(--red)")}${perro(135, 140, 1.3)}${flor(215, 140, "var(--inf)")}
        <path d="M14 146 H 246" stroke="var(--leaf)" stroke-width="3"/>
        ${txt(130, 168, "Persona · Animal · Planta", { color: "var(--leaf)" })}
        ${txt(130, 26, "¡Tienen vida!", { size: 16, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>Seres inertes</h3><p>Una piedra, una pelota o una silla <mark>no tienen vida</mark>. Son <b>seres inertes</b>. Inerte quiere decir «sin vida».</p><p>No nacen ni crecen. No comen, no beben y no respiran. Si nadie los mueve, se quedan quietos.</p><p>Unos están en la naturaleza: piedras, agua o arena. Otros los fabricamos: juguetes, lápices o mesas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una piedra, una pelota y una silla: no tienen vida">${BG}
        ${piedra(55, 120, 1.4)}${pelota(130, 106, 18)}
        <g stroke="#8a5a2b" stroke-width="5" stroke-linecap="round" fill="none"><path d="M190 70 V 124 M190 98 H 222 V 124"/></g>
        <path d="M14 126 H 246" stroke="var(--line)" stroke-width="3"/>
        ${txt(55, 152, "piedra")}${txt(130, 152, "pelota")}${txt(205, 152, "silla")}
        ${txt(130, 30, "No tienen vida", { size: 16, color: "var(--muted)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>Nacen y crecen</h3><p>Todos los seres vivos <mark>nacen</mark>. Los perros y las personas nacen de la tripa de su madre. Los pollitos y las tortugas salen de un <b>huevo</b>. Las plantas nacen de una <b>semilla</b>.</p><p>Después, los seres vivos <b>crecen</b>. Un pollito se convierte en gallina. Una semilla se convierte en árbol.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un huevo, un pollito y una gallina: el pollito nace del huevo y crece">${BG}
        <ellipse cx="45" cy="104" rx="16" ry="21" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        ${pollito(125, 125)}
        <g transform="translate(205 125)"><ellipse cy="-20" rx="26" ry="20" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="20" cy="-44" r="11" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M18 -56 q 4 -6 8 0" fill="var(--red)"/><path d="M30 -44 L 37 -42 L 30 -40 Z" fill="var(--inf)"/><circle cx="23" cy="-46" r="1.8" fill="#1b2235"/></g>
        <g stroke="var(--muted)" stroke-width="2.5" fill="none"><path d="M70 104 H 100"/><path d="M150 104 H 170"/></g>
        <path d="M96 99 L 103 104 L 96 109 M166 99 L 173 104 L 166 109" fill="none" stroke="var(--muted)" stroke-width="2.5"/>
        ${txt(45, 152, "huevo")}${txt(125, 152, "nace")}${txt(205, 152, "crece")}</svg>`,
    },
    {
      html: `<h3>Se alimentan y se mueven</h3><p>Los seres vivos necesitan <mark>alimento y agua</mark>. Las personas y los animales comen. Las plantas toman agua con sus raíces. Con la luz del sol fabrican su comida.</p><p>Los animales se mueven solos: andan, vuelan, nadan o saltan. Las plantas no andan, pero giran sus hojas hacia la luz.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un perro come de su cuenco y una planta recibe agua y sol">${BG}
        ${perro(70, 128, 1.2)}<path d="M98 128 h 34 l -5 -12 h -24 Z" fill="var(--pen)"/>
        ${sol(220, 40, 14)}${flor(200, 128, "var(--red)")}
        <g fill="var(--water)"><path d="M178 72 q 4 8 0 12 q -4 -4 0 -12"/><path d="M188 84 q 4 8 0 12 q -4 -4 0 -12"/></g>
        <path d="M14 134 H 246" stroke="var(--leaf)" stroke-width="3"/>
        ${txt(80, 160, "come")}${txt(200, 160, "agua y sol")}</svg>`,
    },
    {
      html: `<h3>¿Vivo o inerte?</h3><p>Si dudamos, nos hacemos <mark>tres preguntas</mark>: ¿Ha nacido? ¿Crece? ¿Necesita comer, beber y respirar?</p><p>Si las respuestas son <b>sí</b>, es un ser vivo. Si son <b>no</b>, es inerte.</p><p>Un árbol nació de una semilla, crece y bebe. ¡Está vivo! Una pelota no nace ni crece. Es inerte.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tabla: el árbol ha nacido, crece y bebe; la pelota no">${BG}
        ${arbol(52, 82, 0.8)}${pelota(52, 136, 16)}
        <g font-size="12" font-weight="700" fill="var(--muted)" text-anchor="middle" ${F}><text x="125" y="24">¿nace?</text><text x="175" y="24">¿crece?</text><text x="225" y="24">¿come?</text></g>
        ${[125, 175, 225].map((x) => check(x, 60, true) + check(x, 132, false)).join("")}
        <path d="M14 100 H 246" stroke="var(--line)" stroke-width="2"/></svg>`,
      video: { id: "_W2NuihVz2M", titulo: "Seres Vivos e Inertes", canal: "Proyecto Investic", vistas: 1314808, megusta: 7116 },
    },
    {
      html: `<h3>Respiran</h3><p>Todos los seres vivos <mark>respiran</mark>. Necesitan aire para vivir. Nosotros tomamos aire por la nariz.</p><p>Pon la mano delante de la nariz. ¿Notas el aire? ¡Estás respirando!</p><p>Los peces respiran el aire que hay dentro del agua. Las plantas respiran por sus hojas. Una piedra no respira.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño respira por la nariz y un pez respira dentro del agua">${BG}
        ${persona(70, 160, 110, "var(--leaf)")}
        <g stroke="var(--water)" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M88 80 q 10 -4 18 0 M88 88 q 12 -2 22 4"/></g>
        <rect x="150" y="60" width="96" height="86" rx="10" fill="var(--water)" opacity=".25"/>
        <g transform="translate(192 108)"><ellipse rx="22" ry="12" fill="var(--inf)"/><path d="M20 0 L 34 -10 V 10 Z" fill="var(--inf)"/><circle cx="-12" cy="-3" r="2" fill="#1b2235"/></g>
        <g fill="none" stroke="var(--pen)" stroke-width="2"><circle cx="170" cy="86" r="4"/><circle cx="164" cy="74" r="3"/></g>
        ${txt(70, 30, "aire", { color: "var(--water)" })}${txt(198, 40, "aire en el agua", { size: 12, color: "var(--water)" })}</svg>`,
    },
    {
      html: `<h3>Todos mueren</h3><p>Los seres vivos nacen, crecen y, al final, <mark>mueren</mark>. Una flor se seca. Un árbol muy viejo se cae.</p><p>Antes, muchos tienen <b>crías</b> o dejan semillas. Así nacen seres vivos nuevos. Es el <b>ciclo de la vida</b>: nacer, crecer, tener crías y morir.</p><p>Una piedra no nace ni muere. Solo se rompe.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo de vida de una planta: semilla, planta pequeña, planta con flor y flor seca">${BG}
        <ellipse cx="40" cy="120" rx="8" ry="5" fill="#8a5a2b"/>
        <g transform="translate(100 124)"><path d="M0 0 V -22" stroke="var(--leaf)" stroke-width="3"/><ellipse cx="-7" cy="-18" rx="7" ry="3.5" fill="var(--leaf)"/><ellipse cx="7" cy="-22" rx="7" ry="3.5" fill="var(--leaf)"/></g>
        ${flor(160, 124, "var(--red)")}
        <g transform="translate(220 124)"><path d="M0 0 Q 2 -20 10 -26" stroke="#9a8a5a" stroke-width="3" fill="none"/><circle cx="12" cy="-28" r="6" fill="#b49a6a"/></g>
        <path d="M14 126 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(40, 152, "nace", { size: 13 })}${txt(100, 152, "crece", { size: 13 })}${txt(160, 152, "da flores", { size: 13 })}${txt(220, 152, "muere", { size: 13 })}
        ${txt(130, 32, "El ciclo de la vida", { size: 16, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>Cuidamos a los seres vivos</h3><p>Cada ser vivo necesita un <mark>lugar para vivir</mark>. Los peces viven en el agua. Los pájaros hacen nidos en los árboles.</p><p>Podemos ayudarlos. Regamos las plantas y damos agua a las mascotas. En el parque no arrancamos flores ni pisamos hormigueros. Si cuidamos a los seres vivos, todos vivimos mejor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una niña riega una flor con una regadera">${BG}
        ${persona(70, 150, 100, "var(--red)")}
        <g transform="translate(110 92)"><path d="M0 0 h 28 v 22 h -28 Z" fill="var(--pen)"/><path d="M28 6 L 52 -6" stroke="var(--pen)" stroke-width="5" stroke-linecap="round"/></g>
        <g fill="var(--water)"><circle cx="160" cy="98" r="2.5"/><circle cx="166" cy="108" r="2.5"/><circle cx="158" cy="116" r="2.5"/></g>
        ${flor(170, 150, "var(--inf)")}${flor(205, 150, "var(--red)")}
        <path d="M14 152 H 246" stroke="var(--leaf)" stroke-width="3"/>
        ${txt(130, 30, "Los cuidamos", { size: 16, color: "var(--leaf)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saber qué está vivo nos ayuda a <mark>cuidar bien las cosas</mark>. Una tortuga necesita comida y agua limpia. Un juguete solo necesita que lo guardes.</p><p>También nos ayuda a respetar la naturaleza. Una planta del parque está viva. Si la arrancamos, se muere. Veterinarios y jardineros cuidan seres vivos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño da de comer a una tortuga y guarda un juguete en una caja">${BG}
        ${persona(60, 150, 100, "var(--pen)")}
        <g transform="translate(120 146)"><ellipse cy="-12" rx="22" ry="13" fill="var(--leaf)"/><circle cx="24" cy="-12" r="6" fill="var(--leaf)"/><circle cx="26" cy="-14" r="1.5" fill="#1b2235"/><path d="M-14 -2 V 2 M14 -2 V 2" stroke="var(--leaf)" stroke-width="5"/></g>
        <path d="M150 146 h 22 l -3 -8 h -16 Z" fill="var(--red)"/>
        <rect x="190" y="112" width="50" height="34" rx="4" fill="var(--sun)"/>
        ${coche(215, 108, "var(--pen)", 0.6)}
        <path d="M14 148 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(130, 172, "vivo: le doy comida", { size: 12, color: "var(--leaf)" })}
        ${txt(130, 30, "Cada cosa, su cuidado", { size: 16, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>Juego: ¿vivo o no vivo?</h3><p>Un adulto dice una cosa. Si es un <mark>ser vivo</mark>, te pones de pie. Si es <b>inerte</b>, te sientas.</p><p>Prueba: gato, lápiz, rosa, nube, caracol, zapato, abuela, roca.</p><p>Vivos: gato, rosa, caracol y abuela. Inertes: lápiz, nube, zapato y roca. Si dudas, haz las tres preguntas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos aros: en el verde van los seres vivos y en el gris los inertes">${BG}
        <ellipse cx="70" cy="100" rx="58" ry="50" fill="var(--ok-bg)" stroke="var(--leaf)" stroke-width="3"/>
        <ellipse cx="190" cy="100" rx="58" ry="50" fill="var(--card)" stroke="var(--muted)" stroke-width="3"/>
        ${flor(50, 124, "var(--red)")}${pollito(90, 124)}
        ${piedra(175, 124, 0.9)}${pelota(210, 104, 12)}
        ${txt(70, 30, "VIVO", { size: 16, color: "var(--leaf)", font: D, weight: 800 })}${txt(190, 30, "NO VIVO", { size: 16, color: "var(--muted)", font: D, weight: 800 })}</svg>`,
    },
  ],
  figura: {
    titulo: "Seres vivos y seres inertes",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="A la izquierda, los seres vivos: persona, perro, árbol y flor. A la derecha, los seres inertes: piedra, pelota y silla">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      <rect x="16" y="16" width="296" height="268" rx="14" fill="var(--ok-bg)"/><rect x="328" y="16" width="296" height="268" rx="14" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
      ${txt(164, 50, "SERES VIVOS", { size: 22, color: "var(--leaf)", font: D, weight: 800 })}${txt(476, 50, "SERES INERTES", { size: 22, color: "var(--muted)", font: D, weight: 800 })}
      ${persona(64, 220, 100, "var(--pen)")}${perro(150, 220, 1.3)}${arbol(240, 220, 1.1)}
      ${piedra(390, 210, 1.6)}${pelota(476, 190, 22)}
      <g stroke="#8a5a2b" stroke-width="6" stroke-linecap="round" fill="none"><path d="M540 140 V 214 M540 180 H 584 V 214"/></g>
      ${txt(164, 262, "nacen · crecen · se alimentan · mueren", { size: 14, color: "var(--ink)" })}${txt(476, 262, "no nacen · no crecen · no comen", { size: 14, color: "var(--ink)" })}
    </svg>`,
  },
  video: { id: "1HITSsx9rZM", titulo: "Seres vivos y lo inerte | Camaleón", canal: "CNTV Infantil", vistas: 4311087, megusta: 24884, busqueda: "seres vivos y seres inertes para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Una margarita es un ser vivo o un ser inerte?",
      pasos: ["¿Ha nacido? Sí, nació de una semilla.", "¿Crece? Sí, cada día está un poco más alta.", "¿Necesita comer o beber? Sí, necesita agua y luz."],
      resultado: "la margarita es un ser vivo." },
    { enunciado: "¿Un coche de juguete es un ser vivo? Se mueve cuando le das cuerda.",
      pasos: ["¿Ha nacido? No, lo fabricaron en una fábrica.", "¿Crece? No, siempre tiene el mismo tamaño.", "¿Come o bebe? No. Solo se mueve si alguien le da cuerda."],
      resultado: "el coche de juguete es un ser inerte." },
    { enunciado: "¿Un pez es un ser vivo? Vive dentro del agua.",
      pasos: ["¿Ha nacido? Sí, salió de un huevo.", "¿Crece? Sí, de pequeño es muy chiquito.", "¿Come y respira? Sí, come y respira el aire que hay en el agua."],
      resultado: "el pez es un ser vivo." },
  ],
  errores: [
    "Pensar que todo lo que se mueve está vivo: un coche o el viento se mueven, pero no tienen vida.",
    "Pensar que las plantas no son seres vivos porque no andan: nacen, crecen y necesitan agua.",
    "Creer que un muñeco está vivo porque tiene cara: no nace, no crece y no come.",
    "Pensar que el sol o el fuego están vivos porque se mueven o cambian: no nacen ni comen.",
  ],
  ejercicios: [
    { q: "Di en voz alta tres seres vivos que veas en tu casa o en la calle.", sol: "Por ejemplo: mi hermano, un pájaro y una planta." },
    { q: "Di tres seres inertes que haya en tu clase.", sol: "Por ejemplo: la mesa, el lápiz y la pizarra." },
    { q: "¿La lombriz es un ser vivo? ¿Por qué?", sol: "Sí: nace, crece, come y se mueve." },
    { q: "¿El agua de un vaso es un ser vivo?", sol: "No. El agua no nace ni crece. Es un ser inerte que los seres vivos necesitan." },
    { q: "Dibuja un ser vivo y un ser inerte. Rodea el ser vivo de color verde.", sol: "El dibujo vivo puede ser un animal, una planta o una persona." },
    { q: "Ordena: árbol grande, semilla, árbol pequeño.", sol: "Semilla, árbol pequeño, árbol grande." },
    { q: "¿Una mesa de madera está viva?", sol: "No. La madera vino de un árbol, pero la mesa ya no crece ni bebe." },
    { q: "Pon la mano delante de la nariz y respira. ¿Qué notas?", sol: "Notas el aire que sale. Respirar es una señal de vida." },
    { q: "Di dos cosas que puedes hacer para cuidar a un ser vivo.", sol: "Por ejemplo: regar una planta y poner agua a una mascota." },
    { q: "Completa: los seres vivos nacen, crecen y…", sol: "…mueren." },
  ],
  quiz: [
    { q: "¿Cuál es un ser vivo?", o: ["Una piedra", "Un gato", "Una silla"], a: 1, e: "El gato nace, crece y come." },
    { q: "¿Cuál es un ser inerte?", o: ["Un árbol", "Un niño", "Una pelota"], a: 2, e: "La pelota no tiene vida." },
    { q: "Las plantas…", o: ["son seres vivos", "son seres inertes", "no necesitan agua"], a: 0, e: "Nacen, crecen y beben agua." },
    { q: "¿De dónde nace un pollito?", o: ["De una semilla", "De un huevo", "De una piedra"], a: 1, e: "Los pollitos salen de un huevo." },
    { q: "¿Qué necesitan todos los seres vivos?", o: ["Juguetes", "Agua", "Zapatos"], a: 1, e: "Sin agua no pueden vivir." },
    { q: "Un coche se mueve, pero…", o: ["es un ser vivo", "no tiene vida", "come gasolina porque crece"], a: 1, e: "No nace ni crece: es inerte." },
    { q: "¿Por dónde respiran las plantas?", o: ["Por las hojas", "Por la nariz", "No respiran"], a: 0, e: "Las plantas respiran por las hojas." },
    { q: "¿Qué es una mesa?", o: ["Un ser vivo", "Un ser inerte", "Una planta"], a: 1, e: "No nace ni crece." },
    { q: "¿Qué pasa al final del ciclo de la vida?", o: ["Nacen", "Mueren", "Crecen"], a: 1, e: "Nacer, crecer y, al final, morir." },
    { q: "¿Cómo cuidamos a una planta?", o: ["La regamos", "La pisamos", "La dejamos sin luz"], a: 0, e: "Necesita agua y luz." },
  ],
  examen: [
    { q: "¿Qué hacen todos los seres vivos?", o: ["Nacen y crecen", "Vuelan", "Hablan"], a: 0, e: "Todos nacen y crecen." },
    { q: "¿Qué es un ser inerte?", o: ["Algo que tiene vida", "Algo que no tiene vida", "Un animal pequeño"], a: 1, e: "Inerte quiere decir sin vida." },
    { q: "Una planta nace de…", o: ["un huevo", "una semilla", "una roca"], a: 1, e: "Las plantas nacen de semillas." },
    { q: "¿Cuál de estos NO es un ser vivo?", o: ["Un caracol", "Una nube", "Una rosa"], a: 1, e: "La nube no nace ni come." },
  ],
  feynman: ["Qué es un ser vivo", "Qué es un ser inerte", "Las tres preguntas para saber si algo está vivo"],
  mapa: mapa("SERES VIVOS E INERTES", "var(--pri)", [
    ["Seres vivos", "personas · animales · plantas", "var(--leaf)"],
    ["Seres inertes", "piedra · pelota · silla", "var(--muted)"],
    ["Nacen y crecen", "de la madre, huevo o semilla", "var(--pen)"],
    ["Necesitan", "alimento · agua · aire", "var(--water)"],
  ], 220),
  tarjetas: [
    ["¿Un perro es un ser vivo?", "Sí"],
    ["¿Una piedra crece?", "No, es un ser inerte"],
    ["¿Qué tres grupos de seres vivos hay?", "Personas, animales y plantas"],
    ["¿De qué nace una planta?", "De una semilla"],
    ["¿Qué necesitan los seres vivos?", "Alimento, agua y aire"],
    ["¿Qué quiere decir «inerte»?", "Que no tiene vida"],
    ["¿Los peces respiran?", "Sí, el aire que hay en el agua"],
    ["¿Cuál es el ciclo de la vida?", "Nacer, crecer, tener crías y morir"],
  ],
  familias: [
    "En un paseo, jugad a «¿vivo o no vivo?»: señalad cosas y que diga cuál es cuál y por qué.",
    "Plantad una lenteja en un algodón húmedo y mirad juntos cómo nace y crece.",
    "Si dice que algo que se mueve está vivo, preguntadle: «¿ha nacido? ¿come?».",
    "Mirad fotos de cuando era bebé: también él o ella ha crecido.",
  ],
  profesores: {
    saberes: "Ciencias, Geografía e Historia: los seres vivos y su diferencia con la materia inerte; funciones básicas (nacer, crecer, alimentarse) (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Caja misteriosa con objetos y fotos de seres vivos para clasificar en dos aros.", "Semillero de lentejas en clase con dibujo diario de su crecimiento.", "Paseo por el patio con una lista: tres seres vivos y tres inertes."],
  },
  fuentes: [RD],
  revisado: "2026-11-12",
};
