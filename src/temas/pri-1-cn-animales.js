// Ciencias de la Naturaleza 1º de Primaria. Formato ampliado de 1º: frases cortas y un dibujo propio en cada bloque.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, sol, nube, arbol, casa, RD } = require("./_peques");

// Animales sencillos. (x, y) = donde apoyan las patas; s = escala.
const g = (x, y, s, body) => `<g transform="translate(${x} ${y}) scale(${s})">${body}</g>`;
const ojo = (x, y) => `<circle cx="${x}" cy="${y}" r="2" fill="#1b2235"/>`;
const perro = (x, y, s = 1) => g(x, y, s, `<ellipse cy="-16" rx="22" ry="11" fill="#b9773a"/><circle cx="22" cy="-28" r="10" fill="#b9773a"/><ellipse cx="18" cy="-36" rx="4" ry="8" fill="#7a4a1f"/>${ojo(25, -30)}<circle cx="32" cy="-26" r="2.2" fill="#1b2235"/><path d="M-14 -8 V 0 M-6 -8 V 0 M8 -8 V 0 M14 -8 V 0" stroke="#7a4a1f" stroke-width="4" stroke-linecap="round"/><path d="M-22 -18 q -8 -6 -6 -14" stroke="#b9773a" stroke-width="4" fill="none" stroke-linecap="round"/>`);
const gato = (x, y, s = 1) => g(x, y, s, `<ellipse cy="-14" rx="18" ry="10" fill="#9aa3b5"/><circle cx="18" cy="-26" r="9" fill="#9aa3b5"/><path d="M12 -32 L 13 -42 L 19 -34 Z M20 -34 L 26 -42 L 26 -31 Z" fill="#9aa3b5"/>${ojo(17, -27)}${ojo(23, -27)}<path d="M-12 -6 V 0 M-4 -6 V 0 M6 -6 V 0 M12 -6 V 0" stroke="#6b7385" stroke-width="3.5" stroke-linecap="round"/><path d="M-18 -16 q -14 -4 -10 -22" stroke="#9aa3b5" stroke-width="4" fill="none" stroke-linecap="round"/>`);
const vaca = (x, y, s = 1) => g(x, y, s, `<rect x="-26" y="-36" width="46" height="24" rx="10" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><ellipse cx="-10" cy="-28" rx="7" ry="5" fill="var(--ink)"/><ellipse cx="8" cy="-20" rx="5" ry="4" fill="var(--ink)"/><rect x="16" y="-46" width="18" height="18" rx="7" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><ellipse cx="27" cy="-31" rx="8" ry="5" fill="#f5b5c8"/>${ojo(22, -40)}<path d="M18 -46 l -4 -6 M32 -46 l 4 -6" stroke="var(--ink)" stroke-width="2"/><path d="M-20 -12 V 0 M-10 -12 V 0 M6 -12 V 0 M14 -12 V 0" stroke="var(--ink)" stroke-width="4"/>`);
const gallina = (x, y, s = 1) => g(x, y, s, `<ellipse cy="-18" rx="16" ry="13" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><circle cx="12" cy="-32" r="8" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><path d="M8 -40 q 3 -6 6 0 q 3 -6 5 1" fill="var(--red)"/><path d="M20 -32 L 26 -30 L 20 -28 Z" fill="var(--inf)"/>${ojo(14, -34)}<path d="M-4 -5 V 0 M4 -5 V 0" stroke="var(--inf)" stroke-width="3"/>`);
const pez = (x, y, s = 1, c = "var(--inf)") => g(x, y, s, `<ellipse cy="-10" rx="20" ry="10" fill="${c}"/><path d="M-18 -10 L -32 -20 V 0 Z" fill="${c}"/>${ojo(10, -12)}`);
const pajaro = (x, y, s = 1, c = "var(--water)") => g(x, y, s, `<ellipse cy="-12" rx="14" ry="9" fill="${c}"/><circle cx="12" cy="-20" r="7" fill="${c}"/><path d="M18 -20 L 25 -18 L 18 -16 Z" fill="var(--inf)"/>${ojo(14, -22)}<path d="M-6 -16 Q 2 -30 8 -14 Z" fill="#fff" opacity=".6"/>`);
const serpiente = (x, y, s = 1) => g(x, y, s, `<path d="M-34 -4 Q -24 -18 -12 -4 T 10 -4 T 30 -8" stroke="var(--leaf)" stroke-width="8" fill="none" stroke-linecap="round"/><ellipse cx="32" cy="-9" rx="7" ry="5" fill="var(--leaf)"/>${ojo(33, -11)}`);
const rana = (x, y, s = 1) => g(x, y, s, `<ellipse cy="-10" rx="16" ry="10" fill="var(--leaf)"/><circle cx="-7" cy="-20" r="5" fill="var(--leaf)"/><circle cx="7" cy="-20" r="5" fill="var(--leaf)"/>${ojo(-7, -21)}${ojo(7, -21)}<path d="M-16 -2 l -8 2 M16 -2 l 8 2" stroke="var(--leaf)" stroke-width="4" stroke-linecap="round"/>`);
const leon = (x, y, s = 1) => g(x, y, s, `<ellipse cy="-18" rx="24" ry="12" fill="var(--sun)"/><circle cx="24" cy="-32" r="15" fill="#c97a1e"/><circle cx="24" cy="-32" r="9" fill="var(--sun)"/>${ojo(22, -34)}${ojo(28, -34)}<path d="M-14 -8 V 0 M-6 -8 V 0 M10 -8 V 0 M16 -8 V 0" stroke="#c99a10" stroke-width="5" stroke-linecap="round"/><path d="M-24 -20 q -10 4 -8 -12" stroke="#c99a10" stroke-width="3" fill="none"/>`);
const elefante = (x, y, s = 1) => g(x, y, s, `<ellipse cy="-26" rx="28" ry="18" fill="#9aa3b5"/><circle cx="26" cy="-34" r="14" fill="#9aa3b5"/><ellipse cx="16" cy="-34" rx="9" ry="12" fill="#7d8698"/><path d="M36 -28 Q 42 -10 34 -2" stroke="#9aa3b5" stroke-width="7" fill="none" stroke-linecap="round"/>${ojo(30, -38)}<path d="M-18 -10 V 0 M-6 -10 V 0 M8 -10 V 0 M18 -10 V 0" stroke="#7d8698" stroke-width="7"/>`);
const mariposa = (x, y, s = 1) => g(x, y, s, `<ellipse cx="-9" cy="-10" rx="9" ry="12" fill="var(--inf)"/><ellipse cx="9" cy="-10" rx="9" ry="12" fill="var(--inf)"/><ellipse cx="-7" cy="6" rx="6" ry="7" fill="var(--sun)"/><ellipse cx="7" cy="6" rx="6" ry="7" fill="var(--sun)"/><rect x="-2" y="-14" width="4" height="26" rx="2" fill="var(--ink)"/>`);
const huevo = (x, y, s = 1) => `<ellipse cx="${x}" cy="${y}" rx="${10 * s}" ry="${13 * s}" fill="#fff" stroke="var(--ink)" stroke-width="2"/>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: "1-primaria",
  titulo: "Los animales",
  minutos: 25,
  objetivos: ["Distinguir animales domésticos y salvajes", "Saber cómo nacen, cómo se mueven y qué comen los animales", "Reconocer si un animal tiene pelo, plumas o escamas", "Respetar y cuidar a los animales"],
  claves: ["doméstico", "salvaje", "huevo", "pelo", "plumas", "escamas"],
  pregunta: {
    texto: "Un perro y un león tienen cuatro patas y pelo. ¿Por qué uno vive en casa y el otro no?",
    respuesta: "El perro es un animal <mark>doméstico</mark>: vive con las personas y lo cuidamos. El león es un animal <mark>salvaje</mark>: vive libre en la naturaleza y busca su propia comida.",
  },
  bloques: [
    {
      html: `<h3>Hay animales en todas partes</h3><p>Los animales son <mark>seres vivos</mark>. Nacen, crecen, comen, respiran y mueren.</p><p>Hay animales muy grandes, como el elefante. Hay animales muy pequeños, como la hormiga.</p><p>Viven en casas, granjas, bosques, mares o selvas. Hay millones de animales distintos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un elefante grande, un perro, un pájaro y un pez pequeño">${BG}
        ${elefante(66, 146, 1.6)}${perro(170, 146, 1)}${pajaro(210, 70, 1.1)}${pez(230, 146, 0.8)}
        <path d="M14 148 H 246" stroke="var(--leaf)" stroke-width="3"/>
        ${txt(70, 168, "grande", { size: 12, color: "var(--muted)" })}${txt(196, 168, "pequeños", { size: 12, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Animales domésticos</h3><p>Los <mark>animales domésticos</mark> viven con las personas. Nosotros les damos comida, agua y un lugar para vivir.</p><p>Algunos son <b>mascotas</b>, como el perro, el gato o el hámster.</p><p>Otros viven en la <b>granja</b>: la vaca, la gallina o la oveja. Nos dan leche, huevos o lana.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Animales domésticos: un perro y un gato junto a la casa, y una vaca y una gallina en la granja">${BG}
        ${casa(40, 120, 1)}${perro(78, 150, 0.75)}${gato(124, 150, 0.8)}
        <path d="M152 150 V 120 M152 126 H 248 M152 140 H 248" stroke="#8a5a2b" stroke-width="3"/>
        ${vaca(186, 150, 0.95)}${gallina(236, 150, 0.7)}
        <path d="M14 152 H 246" stroke="var(--leaf)" stroke-width="3"/>
        ${txt(70, 30, "mascotas", { size: 14, color: "var(--pen)" })}${txt(194, 30, "granja", { size: 14, color: "var(--leaf)" })}</svg>`,
      video: { id: "O5aibKRLz0o", titulo: "Los animales de la granja para niños - Vocabulario para niños", canal: "Smile and Learn - Español", vistas: 34343421, megusta: 0 },
    },
    {
      html: `<h3>Animales salvajes</h3><p>Los <mark>animales salvajes</mark> viven libres en la naturaleza. Buscan su comida y su refugio ellos solos.</p><p>Viven en la selva, el bosque, el desierto o el mar. El león, el elefante, el lobo y el delfín son salvajes.</p><p>No debemos tocarlos ni darles de comer.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un león y un elefante en la sabana, con árboles y sol">${BG}
        ${sol(220, 38, 14)}${arbol(30, 150, 0.9)}${leon(100, 150, 1.2)}${elefante(196, 150, 1.2)}
        <path d="M14 152 H 246" stroke="var(--sun)" stroke-width="3"/>
        ${txt(110, 34, "libres en la naturaleza", { size: 13, color: "var(--inf)" })}</svg>`,
    },
    {
      html: `<h3>¿Cómo nacen?</h3><p>Algunos animales nacen de la <mark>tripa de su madre</mark>. Así nacen el perro, la vaca y el elefante. De pequeños toman leche de su madre.</p><p>Otros animales nacen de un <mark>huevo</mark>. Así nacen las gallinas, los peces, las ranas y las tortugas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una perra con su cachorro y una gallina con un huevo y un pollito">${BG}
        ${perro(54, 140, 1.1)}${perro(100, 140, 0.55)}
        <path d="M130 30 V 160" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 5"/>
        ${gallina(176, 140, 1)}${huevo(214, 126)}
        <g transform="translate(240 140)"><circle cy="-8" r="8" fill="var(--sun)"/>${ojo(3, -10)}</g>
        ${txt(70, 166, "de la tripa", { size: 13, color: "var(--pen)" })}${txt(196, 166, "de un huevo", { size: 13, color: "var(--inf)" })}</svg>`,
      video: { id: "L6_evGHFhJE", titulo: "Animales ovíparos y vivíparos para niños", canal: "Heiditablox", vistas: 775439, megusta: 0 },
    },
    {
      html: `<h3>¿Cómo se mueven?</h3><p>Los animales se mueven de <mark>muchas formas</mark>.</p><p>El perro y el caballo <b>andan</b> y corren con sus patas. El pájaro y la mariposa <b>vuelan</b> con sus alas. El pez <b>nada</b> con sus aletas.</p><p>La serpiente <b>repta</b>: se arrastra por el suelo. La rana y el canguro <b>saltan</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un pájaro vuela, un perro anda, un pez nada, una serpiente repta y una rana salta">${BG}
        ${pajaro(50, 58, 1.2)}${mariposa(110, 48, 0.9)}${perro(46, 132, 0.9)}${serpiente(130, 136, 0.8)}${rana(214, 102, 1)}
        <path d="M196 120 q 16 -30 32 0" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="3 3"/>
        <rect x="170" y="124" width="76" height="40" rx="6" fill="var(--water)" opacity=".3"/>${pez(212, 156, 0.7)}
        ${txt(160, 46, "vuelan", { size: 12, color: "var(--water)" })}${txt(46, 162, "anda", { size: 12 })}${txt(130, 162, "repta", { size: 12 })}${txt(214, 64, "salta", { size: 12, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>¿Qué comen?</h3><p>Todos los animales necesitan <mark>comer</mark>.</p><p>Algunos comen solo <b>plantas</b>: hierba, hojas o frutas. La vaca y el conejo comen plantas.</p><p>Otros comen <b>carne</b> de otros animales, como el león o el tiburón.</p><p>Otros comen <b>de todo</b>: el oso, la gallina o las personas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una vaca come hierba, un león come carne y un oso come de todo">${BG}
        ${vaca(50, 136, 0.95)}<g stroke="var(--leaf)" stroke-width="3">${[0, 1, 2, 3].map((i) => `<path d="M${20 + i * 12} 140 l 3 -10"/>`).join("")}</g>
        ${leon(132, 136, 0.9)}
        <g transform="translate(212 136)"><ellipse cy="-20" rx="22" ry="16" fill="#8a5a2b"/><circle cx="18" cy="-36" r="12" fill="#8a5a2b"/><circle cx="12" cy="-46" r="4" fill="#8a5a2b"/><circle cx="24" cy="-46" r="4" fill="#8a5a2b"/>${ojo(20, -38)}<path d="M-12 -6 V 0 M10 -6 V 0" stroke="#6b3f1f" stroke-width="6"/></g>
        <path d="M14 138 H 246" stroke="var(--line)" stroke-width="2"/>
        ${txt(50, 162, "plantas", { size: 13, color: "var(--leaf)" })}${txt(132, 162, "carne", { size: 13, color: "var(--red)" })}${txt(212, 162, "de todo", { size: 13, color: "var(--inf)" })}</svg>`,
    },
    {
      html: `<h3>Pelo, plumas o escamas</h3><p>El cuerpo de los animales está <mark>cubierto</mark> de distintas formas.</p><p>El perro, el gato y la vaca tienen <b>pelo</b>. Las gallinas y los pájaros tienen <b>plumas</b>. Los peces y las serpientes tienen <b>escamas</b>.</p><p>La rana tiene la piel <b>desnuda</b> y húmeda.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres cuadros: pelo de gato, pluma de pájaro y escamas de pez">${BG}
        ${[0, 1, 2].map((i) => `<rect x="${14 + i * 80}" y="40" width="72" height="90" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>`).join("")}
        <g stroke="#6b7385" stroke-width="2.5" stroke-linecap="round">${[...Array(12)].map((_, i) => `<path d="M${26 + (i % 4) * 14} ${56 + Math.floor(i / 4) * 22} q 4 8 0 14"/>`).join("")}</g>
        <g transform="translate(130 86) rotate(-30)"><path d="M0 -34 Q 18 0 0 34 Q -18 0 0 -34 Z" fill="var(--water)"/><path d="M0 -34 V 40" stroke="var(--pen)" stroke-width="2"/></g>
        <g fill="var(--inf)" stroke="#c46a10" stroke-width="1.5">${[...Array(9)].map((_, i) => `<path d="M${188 + (i % 3) * 16 + (Math.floor(i / 3) % 2) * 8} ${60 + Math.floor(i / 3) * 20} a 9 9 0 0 1 18 0 Z"/>`).join("")}</g>
        ${txt(50, 150, "pelo", { size: 13 })}${txt(130, 150, "plumas", { size: 13 })}${txt(210, 150, "escamas", { size: 13 })}</svg>`,
    },
    {
      html: `<h3>¿Dónde viven?</h3><p>Cada animal vive en el lugar que le va bien.</p><p>Muchos viven en la <mark>tierra</mark>: el conejo, el caballo o la hormiga.</p><p>Otros viven en el <mark>agua</mark>: los peces, los pulpos y las ballenas.</p><p>Los pájaros vuelan por el <mark>aire</mark>. Hacen sus nidos en los árboles.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un paisaje con aire, tierra y agua: un pájaro en el cielo, un gato en la tierra y un pez en el mar">${BG}
        <rect x="14" y="14" width="232" height="70" rx="10" fill="var(--water)" opacity=".12"/>
        <rect x="14" y="88" width="110" height="78" rx="10" fill="var(--leaf)" opacity=".2"/><rect x="128" y="88" width="118" height="78" rx="10" fill="var(--water)" opacity=".35"/>
        ${nube(60, 40, 0.8)}${pajaro(160, 60, 1.2)}${gato(84, 156, 1.1)}${pez(196, 140, 1.1, "var(--inf)")}
        ${txt(232, 34, "aire", { size: 13, color: "var(--water)", anchor: "end" })}${txt(28, 108, "tierra", { size: 13, color: "var(--leaf)", anchor: "start" })}${txt(232, 108, "agua", { size: 13, color: "var(--pen)", anchor: "end" })}</svg>`,
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los animales nos <mark>ayudan</mark> mucho. Nos dan leche, huevos, lana y miel. Algunos perros ayudan a personas ciegas.</p><p>Por eso los cuidamos y los <b>respetamos</b>. Si tienes una mascota, dale comida, agua y cariño. Llévala al veterinario.</p><p>No maltratamos a ningún animal.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una niña da agua a su perro y lo acaricia, junto a una vaca y una abeja">${BG}
        ${persona(60, 156, 110, "var(--red)")}${perro(120, 156, 1)}
        <path d="M144 156 h 22 l -3 -8 h -16 Z" fill="var(--pen)"/>
        <path d="M120 70 C 108 60 112 46 120 54 C 128 46 132 60 120 70 Z" fill="var(--red)"/>
        <g transform="translate(212 80)"><ellipse rx="14" ry="10" fill="var(--sun)"/><path d="M-6 -10 V 10 M2 -10 V 10" stroke="var(--ink)" stroke-width="3"/><ellipse cx="-4" cy="-14" rx="8" ry="5" fill="#fff" opacity=".8"/><ellipse cx="6" cy="-14" rx="8" ry="5" fill="#fff" opacity=".8"/></g>
        ${txt(212, 116, "miel", { size: 12, color: "#b8860b" })}
        <path d="M14 158 H 246" stroke="var(--line)" stroke-width="2"/></svg>`,
    },
    {
      html: `<h3>Juego: ¿quién soy?</h3><p>Escucha las pistas y adivina el <mark>animal</mark>.</p><p>1. Tengo plumas, pongo huevos y digo «cocoricó». ¿Quién soy?</p><p>2. Tengo escamas, vivo en el agua y nado con aletas. ¿Quién soy?</p><p>3. Tengo pelo, vivo en casa y digo «miau». ¿Quién soy?</p><p>Soluciones: el gallo, el pez y el gato.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres tarjetas con signos de interrogación y debajo un gallo, un pez y un gato">${BG}
        ${[0, 1, 2].map((i) => `<rect x="${18 + i * 78}" y="20" width="68" height="70" rx="10" fill="var(--pen)"/>${txt(52 + i * 78, 70, "?", { size: 40, color: "#fff", font: D, weight: 800 })}`).join("")}
        ${gallina(48, 160, 1)}${pez(140, 150, 1, "var(--water)")}${gato(204, 160, 1.1)}</svg>`,
    },
  ],
  figura: {
    titulo: "Cómo son los animales",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Cuadro resumen: domésticos y salvajes, cómo nacen, cómo se mueven y de qué se cubren">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["DOMÉSTICOS", "viven con nosotros", "var(--pen)", perro(-6, 30, 1.3)], ["SALVAJES", "viven libres", "var(--inf)", leon(-12, 30, 1.2)], ["NACEN", "de madre o de huevo", "var(--leaf)", gallina(-12, 30, 1.3) + huevo(26, 18, 1)], ["SE CUBREN", "pelo · plumas · escamas", "var(--red)", pez(6, 22, 1.3, "var(--water)")]].map(([t, d, c, dib], i) => {
        const x = 90 + i * 153;
        return `<rect x="${x - 70}" y="30" width="140" height="240" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/><g transform="translate(${x} 120)">${dib}</g>${txt(x, 200, t, { size: 17, color: c, font: D, weight: 800 })}${txt(x, 228, d, { size: 12 })}`;
      }).join("")}
    </svg>`,
  },
  video: { id: "SkkzIvhj1s8", titulo: "Características de los Animales | Camaleón", canal: "CNTV Infantil", vistas: 4430163, megusta: 0, busqueda: "animales domésticos y salvajes para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿El conejo es doméstico o salvaje?",
      pasos: ["Hay conejos que viven en casa como mascotas.", "También hay conejos que viven libres en el campo.", "Depende de dónde viva y de quién lo cuide."],
      resultado: "el conejo de casa es doméstico; el conejo del campo es salvaje." },
    { enunciado: "Describe a la gallina.",
      pasos: ["¿Cómo nace? De un huevo.", "¿Cómo se cubre? Con plumas.", "¿Qué come? De todo: grano, hierba e insectos."],
      resultado: "la gallina nace de un huevo, tiene plumas y come de todo." },
    { enunciado: "¿Cómo se mueve un delfín?",
      pasos: ["El delfín vive en el mar.", "No tiene patas.", "Mueve la cola y las aletas en el agua."],
      resultado: "el delfín nada." },
  ],
  errores: [
    "Pensar que todos los animales nacen de un huevo: muchos nacen de la tripa de su madre.",
    "Creer que el delfín y la ballena son peces: nacen de su madre y toman leche.",
    "Pensar que se puede tocar o dar de comer a un animal salvaje: puede ser peligroso.",
    "Creer que una mascota es un juguete: es un ser vivo que necesita cuidados cada día.",
  ],
  ejercicios: [
    { q: "Di tres animales domésticos.", sol: "Por ejemplo: perro, gato y gallina." },
    { q: "Di tres animales salvajes.", sol: "Por ejemplo: león, elefante y lobo." },
    { q: "¿Qué animal nos da la leche?", sol: "La vaca (también la cabra y la oveja)." },
    { q: "Di un animal que nace de un huevo.", sol: "Por ejemplo: la gallina, el pez o la tortuga." },
    { q: "Imita cómo se mueve una serpiente, un pájaro y una rana.", sol: "Repta, vuela y salta." },
    { q: "¿Qué tiene el pájaro en el cuerpo: pelo, plumas o escamas?", sol: "Plumas." },
    { q: "¿Dónde vive un pulpo?", sol: "En el agua, en el mar." },
    { q: "¿La vaca come plantas o carne?", sol: "Plantas: come hierba." },
    { q: "Dibuja tu animal favorito y di si es doméstico o salvaje.", sol: "Respuesta libre: comprueba que lo clasifica bien." },
    { q: "Di dos cosas que necesita una mascota.", sol: "Por ejemplo: comida y agua (y cariño)." },
  ],
  quiz: [
    { q: "¿Cuál es un animal doméstico?", o: ["El león", "El gato", "El lobo"], a: 1, e: "El gato vive con las personas." },
    { q: "¿Cuál es un animal salvaje?", o: ["El elefante", "La vaca", "La gallina"], a: 0, e: "Vive libre en la naturaleza." },
    { q: "La gallina nace…", o: ["de un huevo", "de la tripa de su madre", "de una semilla"], a: 0, e: "Sale de un huevo." },
    { q: "El perro nace…", o: ["de un huevo", "de la tripa de su madre", "del agua"], a: 1, e: "Nace de su madre y toma leche." },
    { q: "Los peces tienen…", o: ["plumas", "pelo", "escamas"], a: 2, e: "Escamas." },
    { q: "La serpiente se mueve…", o: ["volando", "reptando", "saltando"], a: 1, e: "Se arrastra: repta." },
    { q: "¿Qué come la vaca?", o: ["Hierba", "Carne", "Peces"], a: 0, e: "Come plantas." },
    { q: "El león come…", o: ["hierba", "carne", "fruta"], a: 1, e: "Come otros animales." },
    { q: "¿Qué animal nos da miel?", o: ["La abeja", "La vaca", "El pez"], a: 0, e: "Las abejas fabrican miel." },
    { q: "¿Dónde viven las ballenas?", o: ["En el aire", "En el agua", "En la selva"], a: 1, e: "Viven en el mar." },
  ],
  examen: [
    { q: "Los animales domésticos…", o: ["viven con las personas", "viven en la selva", "no comen"], a: 0, e: "Viven con nosotros y los cuidamos." },
    { q: "¿Qué animal tiene plumas?", o: ["El gato", "El pájaro", "El pez"], a: 1, e: "Los pájaros tienen plumas." },
    { q: "La rana se mueve…", o: ["saltando", "volando", "reptando"], a: 0, e: "Salta con sus patas largas." },
    { q: "¿Qué animal nace de un huevo?", o: ["La vaca", "La tortuga", "El perro"], a: 1, e: "Las tortugas salen de huevos." },
  ],
  feynman: ["Qué diferencia hay entre animales domésticos y salvajes", "Cómo nacen los animales", "Cómo se mueven y de qué se cubren"],
  mapa: mapa("LOS ANIMALES", "var(--pri)", [
    ["Dónde viven", "domésticos · salvajes", "var(--pen)"],
    ["Cómo nacen", "de la madre · de un huevo", "var(--leaf)"],
    ["Cómo se mueven", "andan · vuelan · nadan · reptan", "var(--inf)"],
    ["Cómo se cubren", "pelo · plumas · escamas", "var(--red)"],
  ], 240),
  tarjetas: [
    ["¿Qué es un animal doméstico?", "Uno que vive con las personas"],
    ["¿Qué es un animal salvaje?", "Uno que vive libre en la naturaleza"],
    ["¿Cómo nace la gallina?", "De un huevo"],
    ["¿Cómo nace el perro?", "De la tripa de su madre"],
    ["¿Qué tienen los pájaros?", "Plumas"],
    ["¿Qué tienen los peces?", "Escamas"],
    ["¿Cómo se mueve la serpiente?", "Repta"],
    ["¿Qué come la vaca?", "Plantas: hierba"],
  ],
  familias: [
    "En un paseo o en la granja escuela, nombrad los animales y decid si son domésticos o salvajes.",
    "Jugad a «¿quién soy?» dando tres pistas: cómo nace, cómo se mueve y de qué se cubre.",
    "Si tenéis mascota, que ayude a darle de comer y agua cada día.",
    "Leed un cuento o un libro de animales y buscad uno con pelo, otro con plumas y otro con escamas.",
  ],
  profesores: {
    saberes: "Ciencias, Geografía e Historia: los animales del entorno, características observables, clasificación sencilla y respeto a los seres vivos (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Clasificación con fotos en una tabla: cómo nace, cómo se mueve y de qué se cubre.", "Visita a una granja escuela o a un centro de recuperación de fauna.", "Terrario de gusanos de seda o caracoles con observación diaria."],
  },
  fuentes: [RD],
  revisado: "2026-11-12",
};
