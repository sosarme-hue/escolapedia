// Ciencias de la Naturaleza 2º de Primaria: los sentidos. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, nino, perro, cara, flor, sol, manzana, chip, flechaR, tick, equis, nota, pastel, suelo } = require("./_pri2b");

// Órganos de los sentidos (dibujos grandes y sencillos).
const ojoG = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-30 0 Q0 -24 30 0 Q0 24 -30 0Z" fill="#fff" stroke="var(--ink)" stroke-width="2"/><circle r="11" fill="#2f7d4f"/><circle r="5" fill="#1b2235"/><circle cx="3" cy="-3" r="2" fill="#fff"/></g>`;
const orejaG = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-10 -30 q28 -6 30 20 q2 18 -12 26 q-8 4 -6 14 q-2 12 -14 8 q-12 -6 -12 -20" fill="#f3c9a1" stroke="#c68b5c" stroke-width="2.5"/><path d="M0 -14 q12 0 10 14 q-2 8 -8 8" stroke="#c68b5c" stroke-width="2.5" fill="none"/></g>`;
const narizG = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -30 q-4 24 -16 34 q-4 8 8 8 q8 -2 8 -6 q0 4 8 6 q12 0 8 -8 q-12 -10 -16 -34" fill="#f3c9a1" stroke="#c68b5c" stroke-width="2.5"/><circle cx="-6" cy="8" r="2.5" fill="#c68b5c"/><circle cx="6" cy="8" r="2.5" fill="#c68b5c"/></g>`;
const bocaG = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-28 -6 Q0 -16 28 -6 Q20 24 0 24 Q-20 24 -28 -6Z" fill="#8a2f3c"/><path d="M-14 4 Q0 -2 14 4 Q12 20 0 20 Q-12 20 -14 4Z" fill="#f08a9a"/><path d="M0 4 V16" stroke="#d76476" stroke-width="2"/><path d="M-28 -6 Q0 -16 28 -6" stroke="#d76476" stroke-width="4" fill="none"/></g>`;
const manoG = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#f3c9a1" stroke="#c68b5c" stroke-width="2"><rect x="-16" y="-10" width="32" height="30" rx="10"/>${[-12, -4, 4, 12].map((a, i) => `<rect x="${a - 4}" y="${-34 + (i === 0 || i === 3 ? 6 : 0)}" width="8" height="${28 - (i === 0 || i === 3 ? 6 : 0)}" rx="4"/>`).join("")}<rect x="-30" y="-2" width="18" height="8" rx="4" transform="rotate(-30 -16 2)"/></g>`;
const limon = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="18" ry="13" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/>`;
const SENT = [["vista", "ojos"], ["oído", "orejas"], ["olfato", "nariz"], ["gusto", "lengua"], ["tacto", "piel"]];

module.exports = tema({
  materia: "Ciencias de la Naturaleza",
  titulo: "Los sentidos",
  objetivos: ["Nombrar los cinco sentidos y su órgano", "Saber qué información nos da cada sentido", "Aprender a cuidar los órganos de los sentidos"],
  claves: ["vista", "oído", "olfato", "gusto", "tacto", "órgano de los sentidos"],
  pregunta: {
    texto: "Con los ojos cerrados, ¿cómo sabrías que en la cocina están haciendo bizcocho?",
    respuesta: "Por el <mark>olfato</mark>: la nariz nota el olor dulce. Si te dejan probarlo, el <b>gusto</b> te dirá que está rico, y el <b>tacto</b> que está calentito.",
  },
  bloques: [
    {
      html: `<h3>Los cinco sentidos</h3><p>Tenemos <mark>cinco sentidos</mark>: la vista, el oído, el olfato, el gusto y el tacto.</p><p>Los sentidos nos dicen <b>cómo es el mundo</b>: sus colores, sus sonidos, sus olores, sus sabores y si algo está frío o caliente. Cada sentido tiene su propio <b>órgano</b>, una parte del cuerpo que recoge la información.</p>`,
      svg: svg("Ojo, oreja, nariz, boca y mano: los órganos de los cinco sentidos", `${ojoG(40, 70, 0.8)}${orejaG(92, 72, 0.9)}${narizG(140, 70, 0.9)}${bocaG(186, 70, 0.75)}${manoG(232, 82, 0.8)}${SENT.map(([t], i) => chip(32 + i * 49, 140, 46, t, "var(--pen)", 11)).join("")}${big(130, 30, "5 sentidos", "var(--pen)", 18)}`),
    },
    {
      html: `<h3>La vista</h3><p>Vemos con los <mark>ojos</mark>. Gracias a la <b>vista</b> sabemos los colores, las formas y el tamaño de las cosas.</p><p>También vemos si algo está lejos o cerca y si se mueve. Para ver hace falta <b>luz</b>: en una habitación muy oscura no vemos nada.</p>`,
      svg: svg("Un ojo mira una flor roja y un sol amarillo", `${ojoG(60, 90, 1.4)}${flechaR(110, 90, 160, 90, "var(--muted)")}${flor(196, 120, "var(--red)")}${sol(222, 44, 14)}${txt(60, 150, "ojos", "var(--pen)", 16)}${txt(196, 150, "colores y formas", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>El oído</h3><p>Oímos con las <mark>orejas</mark>. El <b>oído</b> nos dice si un sonido es fuerte o suave, y si está cerca o lejos.</p><p>Oímos la música, la voz de los amigos o el timbre del cole. El oído también nos avisa de peligros: ¡oímos el claxon de un coche antes de verlo!</p>`,
      svg: svg("Una oreja escucha notas musicales", `${orejaG(70, 86, 1.15)}${nota(160, 80)}${nota(196, 110, "var(--red)")}${nota(220, 70, "var(--leaf)", false)}<path d="M124 80 q-10 16 0 32 M138 70 q-16 26 0 52" stroke="var(--pen)" stroke-width="3" fill="none" stroke-linecap="round"/>${txt(70, 160, "orejas", "var(--pen)", 16)}${txt(190, 160, "sonidos", "var(--ink)", 14)}`),
    },
    {
      html: `<h3>El olfato</h3><p>Olemos con la <mark>nariz</mark>. El <b>olfato</b> nos dice si algo huele bien o mal.</p><p>Las flores y el pan recién hecho huelen bien. La basura huele mal. El olfato también nos <b>protege</b>: si la comida huele raro, es mejor no comerla. ¡Y nos avisa si algo se quema!</p>`,
      svg: svg("Una nariz huele una flor y un pan", `${narizG(66, 96, 1.6)}<path d="M100 70 q10 -8 20 0 t20 0 M100 90 q10 -8 20 0 t20 0" stroke="var(--leaf)" stroke-width="2.5" fill="none"/>${flor(176, 110, "var(--inf)")}<g transform="translate(222 104)"><path d="M-24 8 Q-26 -12 0 -14 Q26 -12 24 8Z" fill="#d9a25f" stroke="#8a5a2b" stroke-width="1.5"/></g>${txt(66, 160, "nariz", "var(--pen)", 16)}${txt(198, 160, "olores", "var(--ink)", 14)}`),
    },
    {
      html: `<h3>El gusto</h3><p>Notamos los sabores con la <mark>lengua</mark>. Es el sentido del <b>gusto</b>.</p><p>Hay sabores <b>dulces</b>, como el pastel; <b>salados</b>, como las patatas fritas; <b>ácidos</b>, como el limón; y <b>amargos</b>, como algunas verduras. El gusto y el olfato trabajan juntos: con la nariz tapada, ¡la comida sabe menos!</p>`,
      svg: svg("Una boca con la lengua, un pastel dulce y un limón ácido", `${bocaG(70, 84, 1.4)}${pastel(170, 82)}${limon(226, 88)}${txt(70, 150, "lengua", "var(--pen)", 16)}${txt(170, 122, "dulce", "var(--red)", 13)}${txt(226, 122, "ácido", "var(--sun)", 13)}`),
    },
    {
      html: `<h3>El tacto</h3><p>Tocamos con la <mark>piel</mark>. La piel cubre todo el cuerpo, por eso el <b>tacto</b> está en todas partes.</p><p>Con el tacto sabemos si algo está <b>frío o caliente</b>, si es <b>suave o áspero</b>, y si es <b>duro o blando</b>. Las yemas de los dedos son la parte más sensible.</p>`,
      svg: svg("Una mano toca un cubito de hielo frío y una taza caliente", `${manoG(130, 110, 1.3)}<rect x="30" y="80" width="34" height="34" rx="6" fill="#cfe9f7" stroke="var(--water)" stroke-width="2"/><g transform="translate(212 104)"><rect x="-16" y="-18" width="32" height="30" rx="4" fill="var(--red)"/><path d="M16 -10 q12 0 12 10 q0 10 -12 10" stroke="var(--red)" stroke-width="4" fill="none"/><path d="M-6 -24 q-4 -8 0 -14 M4 -24 q-4 -8 0 -14" stroke="var(--muted)" stroke-width="2" fill="none"/></g>${txt(47, 140, "frío", "var(--water)", 15)}${txt(212, 140, "caliente", "var(--red)", 15)}${txt(130, 166, "piel", "var(--pen)", 16)}`),
      video: V("Hl3r0LG2t3c"),
    },
    {
      html: `<h3>Los sentidos trabajan juntos</h3><p>Casi siempre usamos <mark>varios sentidos a la vez</mark>.</p><p>Cuando comes una manzana, la <b>ves</b> roja, la <b>hueles</b>, la <b>tocas</b> lisa, la <b>oyes</b> crujir y notas su <b>sabor</b> dulce. ¡Los cinco sentidos a la vez! El cerebro junta todo y así conocemos la manzana.</p>`,
      svg: svg("Una manzana en el centro rodeada de los cinco sentidos", `${manzana(130, 98, 26)}${SENT.map(([t], i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5; const x = 130 + Math.cos(a) * 88, y = 96 + Math.sin(a) * 62; return chip(x.toFixed(0) * 1, y.toFixed(0) * 1 + 4, 62, t, "var(--pen)", 12); }).join("")}`),
    },
    {
      html: `<h3>Cuidamos los sentidos</h3><p>Los órganos de los sentidos son <mark>delicados</mark>. Hay que cuidarlos.</p><p>No mires directamente al sol. Ponte gafas de sol en verano. No escuches música muy alta y nunca metas objetos en las orejas ni en la nariz. Lava tus manos y tu cuerpo. Y lávate los dientes después de comer.</p>`,
      svg: svg("Un niño con gafas de sol; no mirar al sol, no poner música alta", `${suelo(156)}${nino(70, 156, { c: "var(--pen)" })}<g transform="translate(70 96)"><rect x="-12" y="-4" width="10" height="7" rx="2" fill="#1b2235"/><rect x="2" y="-4" width="10" height="7" rx="2" fill="#1b2235"/><path d="M-2 -1 h4" stroke="#1b2235" stroke-width="2"/></g>${tick(110, 70)}${sol(180, 56, 14)}${equis(212, 56)}<g transform="translate(180 124)"><rect x="-16" y="-14" width="32" height="28" rx="4" fill="var(--muted)"/><circle r="8" fill="#1b2235"/></g>${equis(212, 124)}${txt(194, 168, "¡Muy alto, no!", "var(--red)", 12)}`),
    },
    {
      html: `<h3>Juego: ¿qué sentido uso?</h3><p>Lee cada frase y di el sentido: «La sopa <b>quema</b>» es el <mark>tacto</mark>. «El perro <b>ladra</b>» es el <mark>oído</mark>.</p><p>«El arcoíris tiene <b>colores</b>» es la <b>vista</b>. «El chocolate está <b>dulce</b>» es el <b>gusto</b>. «La rosa <b>huele</b> bien» es el <b>olfato</b>. ¡Inventa tú otras frases!</p>`,
      svg: svg("Un arcoíris se ve con la vista; un perro ladrando se oye con el oído", `${["var(--red)", "var(--sun)", "var(--leaf)", "var(--pen)"].map((c, i) => `<path d="M${20 + i * 7} 116 a${54 - i * 7} ${54 - i * 7} 0 0 1 ${108 - i * 14} 0" stroke="${c}" stroke-width="6" fill="none"/>`).join("")}${chip(74, 146, 60, "vista", "var(--pen)", 13)}${perro(190, 116, 1.2)}<path d="M236 70 q8 8 0 16 M246 62 q14 16 0 32" stroke="var(--pen)" stroke-width="2.5" fill="none"/>${chip(200, 146, 60, "oído", "var(--pen)", 13)}`),
    },
  ],
  figura: {
    titulo: "Cada sentido y su órgano",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Vista con los ojos, oído con las orejas, olfato con la nariz, gusto con la lengua y tacto con la piel">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${ojoG(70, 110, 1.4)}${orejaG(194, 116, 1.6)}${narizG(320, 112, 1.6)}${bocaG(444, 110, 1.3)}${manoG(568, 128, 1.4)}
      ${SENT.map(([t, o], i) => rot(70 + i * 124, 206, t, { size: 22, color: "var(--pen)", w: 800 }) + rot(70 + i * 124, 232, o, { size: 15, color: "var(--muted)" })).join("")}
    </svg>`,
  },
  video: V("a_EfwFzm1ys", "los cinco sentidos para niños"),
  ejemplos: [
    { enunciado: "¿Con qué sentido sabes que la tiza es blanca?", pasos: ["El color se conoce mirando.", "Miramos con los ojos.", "Los ojos son el órgano de la vista."], resultado: "con la vista." },
    { enunciado: "¿Qué sentido te avisa de que el agua de la bañera quema?", pasos: ["Metes la mano en el agua.", "La piel nota el calor.", "La piel es el órgano del tacto."], resultado: "el tacto." },
    { enunciado: "Comes una patata frita. ¿Qué sentidos usas?", pasos: ["La ves dorada: vista.", "La oyes crujir: oído.", "La notas salada: gusto. La hueles: olfato. La tocas: tacto."], resultado: "¡los cinco sentidos!" },
  ],
  errores: [
    "Pensar que el tacto solo está en las manos: está en toda la piel.",
    "Decir que olemos con la boca: olemos con la nariz.",
    "Confundir oír con escuchar: oímos sin querer, pero escuchar es poner atención.",
    "Creer que el gusto funciona solo: con la nariz tapada, la comida sabe mucho menos.",
  ],
  ejercicios: [
    { q: "Escribe los cinco sentidos.", sol: "Vista, oído, olfato, gusto y tacto." },
    { q: "Une cada sentido con su órgano: vista, oído, olfato, gusto, tacto.", sol: "Ojos, orejas, nariz, lengua y piel." },
    { q: "Di dos cosas que huelan bien y una que huela mal.", sol: "Por ejemplo: flores y pan; la basura huele mal." },
    { q: "Di un alimento dulce, uno salado y uno ácido.", sol: "Por ejemplo: miel (dulce), patatas fritas (salado) y limón (ácido)." },
    { q: "Cierra los ojos y escucha un minuto. ¿Qué sonidos oyes?", sol: "Respuesta libre: voces, coches, pájaros, el reloj…" },
    { q: "Toca tu mesa y tu jersey. ¿Cuál es suave y cuál es duro?", sol: "El jersey es suave; la mesa es dura." },
    { q: "¿Qué sentido usas para saber si una sopa está caliente?", sol: "El tacto (y con cuidado)." },
    { q: "Di dos formas de cuidar los ojos.", sol: "No mirar al sol y usar gafas de sol; no estar mucho rato con pantallas." },
    { q: "¿Por qué es peligroso escuchar música muy alta?", sol: "Porque puede dañar el oído." },
    { q: "Dibuja una cara y rodea los órganos de cuatro sentidos.", sol: "Ojos, orejas, nariz y boca (lengua)." },
  ],
  quiz: [
    { q: "¿Cuántos sentidos tenemos?", o: ["Tres", "Cinco", "Diez"], a: 1, e: "Vista, oído, olfato, gusto y tacto." },
    { q: "Vemos con…", o: ["las orejas", "los ojos", "la nariz"], a: 1, e: "Es el sentido de la vista." },
    { q: "El órgano del olfato es…", o: ["la nariz", "la lengua", "la piel"], a: 0, e: "Olemos con la nariz." },
    { q: "Notamos los sabores con…", o: ["la lengua", "los ojos", "las orejas"], a: 0, e: "Es el sentido del gusto." },
    { q: "El tacto está en…", o: ["solo las manos", "toda la piel", "los ojos"], a: 1, e: "La piel cubre todo el cuerpo." },
    { q: "El limón tiene sabor…", o: ["dulce", "ácido", "salado"], a: 1, e: "Es ácido." },
    { q: "Para ver hace falta…", o: ["luz", "ruido", "frío"], a: 0, e: "Sin luz no vemos nada." },
    { q: "Oír el timbre del cole es el sentido del…", o: ["oído", "gusto", "olfato"], a: 0, e: "Lo oímos con las orejas." },
    { q: "¿Qué cuida los ojos en verano?", o: ["Gafas de sol", "Música alta", "Mirar al sol"], a: 0, e: "Protegen de la luz fuerte." },
    { q: "Si algo huele raro y es comida…", o: ["mejor no comerla", "comerla rápido", "olerla más"], a: 0, e: "El olfato nos protege." },
  ],
  examen: [
    { q: "¿Qué sentido nos dice si algo es áspero?", o: ["El tacto", "La vista", "El oído"], a: 0, e: "Lo notamos al tocar." },
    { q: "La sopa está salada. ¿Qué sentido lo nota?", o: ["El gusto", "El olfato", "El oído"], a: 0, e: "La lengua nota el sabor." },
    { q: "¿Qué NO debemos hacer?", o: ["Meter objetos en las orejas", "Lavarnos las manos", "Usar gafas de sol"], a: 0, e: "Puede dañar el oído." },
    { q: "Al comer usamos…", o: ["solo el gusto", "varios sentidos a la vez", "ningún sentido"], a: 1, e: "Vista, olfato, tacto, gusto y oído." },
  ],
  feynman: ["Los cinco sentidos y su órgano", "Qué nos dice cada sentido", "Cómo cuidar los ojos y los oídos"],
  mapaT: ["LOS SENTIDOS", [
    ["Vista y oído", "ojos · orejas", "var(--pen)"],
    ["Olfato y gusto", "nariz · lengua", "var(--leaf)"],
    ["Tacto", "toda la piel", "var(--red)"],
    ["Cuidados", "gafas · volumen bajo · higiene", "var(--sun)"],
  ]],
  tarjetas: [
    ["¿Cuántos sentidos hay?", "Cinco"],
    ["Órgano de la vista", "Los ojos"],
    ["Órgano del oído", "Las orejas"],
    ["Órgano del olfato", "La nariz"],
    ["Órgano del gusto", "La lengua"],
    ["Órgano del tacto", "La piel"],
    ["Cuatro sabores", "Dulce, salado, ácido y amargo"],
    ["¿Qué hace falta para ver?", "Luz"],
  ],
  familias: [
    "Juego de la bolsa misteriosa: meted objetos y que adivine qué son solo con el tacto.",
    "Con los ojos tapados, que pruebe alimentos y diga si son dulces, salados o ácidos.",
    "En un paseo, parad un minuto en silencio y contad cuántos sonidos distintos oís.",
    "Revisad juntos el volumen de los cascos o la tablet: siempre por debajo de la mitad.",
  ],
  saberes: "El cuerpo humano: los sentidos y sus órganos; hábitos de cuidado e higiene",
  ideas: ["Rincón de los sentidos con cajas de olores, bolsas de texturas y botes de sonidos.", "Cata de sabores (dulce, salado, ácido, amargo) con registro en una tabla.", "Paseo sensorial por el patio con una ficha para cada sentido."],
});
