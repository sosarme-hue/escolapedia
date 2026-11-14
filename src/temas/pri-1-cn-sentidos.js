// Ciencias de la Naturaleza 1º de Primaria. Nivel libro: lectura, apartados numerados, ejercicios por niveles, glosario y situación.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, sol, flor, coche, check, RD } = require("./_peques");
const L3 = require("./_pri1L3");

// Iconos de los cinco órganos de los sentidos (centrados en x, y).
const ojo = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-26 0 Q 0 -22 26 0 Q 0 22 -26 0 Z" fill="#fff" stroke="var(--ink)" stroke-width="2.5"/><circle r="10" fill="var(--water)"/><circle r="5" fill="#1b2235"/><circle cx="3" cy="-3" r="2" fill="#fff"/></g>`;
const oreja = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-6 22 Q -20 20 -18 4 Q -18 -24 4 -24 Q 22 -24 20 -4 Q 18 10 6 12 Q 0 14 -2 22 Z" fill="#f2c9a0" stroke="#c48a60" stroke-width="2.5"/><path d="M-6 6 Q -10 -14 4 -14 Q 12 -14 10 -2" stroke="#c48a60" stroke-width="2.5" fill="none"/></g>`;
const nariz = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -24 Q -4 0 -16 10 Q -18 18 -8 18 Q 0 14 8 18 Q 18 18 16 10 Q 4 0 0 -24 Z" fill="#f2c9a0" stroke="#c48a60" stroke-width="2.5"/><circle cx="-7" cy="12" r="2.5" fill="#c48a60"/><circle cx="7" cy="12" r="2.5" fill="#c48a60"/></g>`;
const lengua = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-24 -8 Q 0 -18 24 -8 Q 26 -2 18 0 Q 0 4 -18 0 Q -26 -2 -24 -8 Z" fill="var(--red)"/><path d="M-14 -2 Q -16 22 0 24 Q 16 22 14 -2 Z" fill="#f08a8a" stroke="var(--red)" stroke-width="2"/><path d="M0 2 V 14" stroke="var(--red)" stroke-width="2"/></g>`;
const manoI = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#f2c9a0" stroke="#c48a60" stroke-width="2"><rect x="-13" y="-6" width="26" height="28" rx="8"/>${[-9, -3, 3, 9].map((dx, i) => `<rect x="${dx - 3}" y="${-28 + Math.abs(i - 1.5) * 3}" width="6" height="26" rx="3"/>`).join("")}<rect x="10" y="-2" width="16" height="7" rx="3.5" transform="rotate(-30 12 2)"/></g>`;
const ICON = [["ojos", "vista", ojo], ["orejas", "oído", oreja], ["nariz", "olfato", nariz], ["lengua", "gusto", lengua], ["piel", "tacto", manoI]];
// Limón y caramelo.
const limon = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="18" ry="13" fill="var(--sun)" stroke="#c99a10" stroke-width="2"/>`;
const caramelo = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-22 -8 L -12 0 L -22 8 Z M22 -8 L 12 0 L 22 8 Z" fill="var(--red)"/><circle r="12" fill="var(--red)"/><path d="M-6 -8 Q 0 0 -6 8 M2 -10 Q 8 0 2 10" stroke="#fff" stroke-width="2" fill="none"/></g>`;
const ondas = (x, y, color = "var(--pen)") => `<g stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round"><path d="M${x} ${y - 10} q 8 10 0 20"/><path d="M${x + 10} ${y - 18} q 14 18 0 36"/><path d="M${x + 20} ${y - 26} q 20 26 0 52"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: "1-primaria",
  titulo: "Los cinco sentidos",
  minutos: 50,
  objetivos: ["Nombrar los cinco sentidos y su órgano", "Usar los sentidos para describir cosas", "Saber que los sentidos nos avisan de peligros", "Cuidar los ojos, los oídos y la piel"],
  claves: ["vista", "oído", "olfato", "gusto", "tacto", "órgano"],
  pregunta: {
    texto: "Cierra los ojos. Alguien te da una naranja. ¿Cómo sabes qué es sin mirarla?",
    respuesta: "Puedes <mark>tocarla</mark> (es redonda y rugosa), <mark>olerla</mark> (huele a naranja) y hasta <mark>probarla</mark>. Usas otros sentidos: el <b>tacto</b>, el <b>olfato</b> y el <b>gusto</b>.",
  },
  lectura: L3.lect("El bizcocho de la abuela", `<p>Es domingo. Hugo entra en casa de su abuela Rosa.</p><p>«¡Qué bien huele!», dice Hugo. Su nariz nota un olor dulce.</p><p>En la cocina ve un bizcocho dorado encima de la mesa. Oye el «ding» del horno.</p><p>La abuela le da un trozo. Hugo lo toca: está blandito y todavía caliente.</p><p>Lo prueba con la lengua. «¡Está buenísimo! Sabe dulce, como el chocolate.»</p><p>La abuela se ríe. «Has usado tus cinco sentidos para comer un bizcocho.»</p><p>Hugo cuenta con los dedos. ¿Cuáles son? En este tema lo vas a aprender.</p>`),
  bloques: [
    {
      html: `<h3>1. Los cinco sentidos</h3><p>Los sentidos nos dicen <mark>cómo es el mundo</mark> que nos rodea. Tenemos cinco: la vista, el oído, el olfato, el gusto y el tacto.</p><p>Cada sentido tiene su <b>órgano</b>. Vemos con los ojos y oímos con las orejas. Olemos con la nariz y saboreamos con la lengua. Tocamos con la piel.</p><p>Los sentidos trabajan juntos. Al comer una fresa, la vemos roja, la olemos y notamos su sabor dulce.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los cinco órganos de los sentidos: ojo, oreja, nariz, lengua y mano">${BG}
        ${ICON.map(([o, n, f], i) => f(30 + i * 50, 82, 0.9) + txt(30 + i * 50, 130, n, { size: 13, color: "var(--pen)" }) + txt(30 + i * 50, 148, o, { size: 11, color: "var(--muted)", weight: 400 })).join("")}
        ${txt(130, 30, "5 sentidos", { size: 18, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
      video: L3.V("a_EfwFzm1ys", "Los cinco sentidos para niños", "Smile and Learn - Español", 5142904),
    },
    {
      html: `<h3>2. La vista</h3><p>Con la <mark>vista</mark> vemos las cosas. El órgano de la vista son los <b>ojos</b>.</p><p>Con la vista sabemos el color, la forma y el tamaño. También sabemos si están cerca o lejos.</p><p>Para ver necesitamos <b>luz</b>. En una habitación oscura no vemos nada.</p><p>Algunas personas ven mal de lejos o de cerca. Usan gafas y así ven mucho mejor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un ojo grande mira una flor roja, una pelota azul y un sol amarillo">${BG}
        ${ojo(60, 92, 1.7)}
        <g stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"><path d="M108 92 L 170 50 M108 92 L 170 96 M108 92 L 170 140"/></g>
        ${sol(200, 48, 13)}<circle cx="200" cy="98" r="14" fill="var(--pen)"/>${flor(200, 156, "var(--red)")}
        ${txt(60, 150, "color · forma", { size: 12, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>3. El oído</h3><p>Con el <mark>oído</mark> escuchamos los sonidos. El órgano del oído son las <b>orejas</b>.</p><p>Oímos la música, la voz de mamá o un perro.</p><p>Hay sonidos <b>fuertes</b>, como un trueno. Hay sonidos <b>suaves</b>, como un susurro. También sabemos de dónde viene un sonido. ¡Escucha bien!</p><p>Cierra los ojos y escucha. ¿Oyes coches, pájaros o voces? El oído trabaja aunque no mires.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una oreja escucha: un tambor suena fuerte y un pájaro canta suave">${BG}
        ${oreja(60, 92, 1.8)}
        <g transform="translate(180 64)"><ellipse rx="26" ry="9" fill="var(--red)"/><rect x="-26" y="0" width="52" height="24" fill="var(--red)"/><ellipse cy="24" rx="26" ry="9" fill="var(--red)"/><ellipse rx="26" ry="9" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/></g>
        ${ondas(118, 70, "var(--red)")}
        <g transform="translate(190 140)"><ellipse rx="16" ry="11" fill="var(--water)"/><circle cx="14" cy="-8" r="8" fill="var(--water)"/><path d="M21 -8 L 28 -6 L 21 -4 Z" fill="var(--inf)"/></g>
        ${txt(232, 76, "fuerte", { size: 12, color: "var(--red)" })}${txt(232, 160, "suave", { size: 12, color: "var(--water)" })}</svg>`,
    },
    {
      html: `<h3>4. El olfato</h3><p>Con el <mark>olfato</mark> notamos los olores. El órgano del olfato es la <b>nariz</b>.</p><p>Hay olores agradables, como el pan recién hecho o una flor. Hay olores desagradables, como la basura.</p><p>El olfato nos avisa si la comida está mala. También nos avisa si algo se quema.</p><p>Muchos animales tienen un olfato muy bueno. El perro huele cosas que nosotros no notamos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una nariz huele una flor con gusto y una basura que huele mal">${BG}
        ${nariz(130, 80, 1.9)}
        ${flor(46, 150, "var(--red)")}<g stroke="var(--leaf)" stroke-width="2" fill="none"><path d="M56 100 q 10 -6 20 0 t 20 0"/></g>
        <g transform="translate(212 150)"><rect x="-20" y="-40" width="40" height="40" rx="4" fill="var(--muted)"/><rect x="-24" y="-46" width="48" height="8" rx="3" fill="var(--ink)"/></g>
        <g stroke="var(--muted)" stroke-width="2" fill="none"><path d="M198 92 q 4 -8 0 -16 M212 90 q 4 -8 0 -16"/></g>
        ${check(46, 40, true)}${check(212, 40, false)}</svg>`,
    },
    {
      html: `<h3>5. El gusto</h3><p>Con el <mark>gusto</mark> notamos los sabores. El órgano del gusto es la <b>lengua</b>.</p><p>Hay cuatro sabores principales. Un caramelo es <b>dulce</b>. Las patatas fritas son <b>saladas</b>. El limón es <b>ácido</b>. Algunas verduras son <b>amargas</b>.</p><p>El gusto y el olfato trabajan juntos. Por eso, con catarro, la comida sabe menos.</p><p>En la lengua hay unos puntitos que notan los sabores. Mírala en el espejo. ¿Los ves?</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una lengua y cuatro sabores: dulce, salado, ácido y amargo">${BG}
        ${lengua(130, 50, 1.6)}
        ${caramelo(40, 120)}<g fill="var(--sun)"><rect x="90" y="108" width="8" height="26" rx="2"/><rect x="100" y="104" width="8" height="30" rx="2"/><rect x="110" y="110" width="8" height="24" rx="2"/></g>${limon(165, 121)}
        <g transform="translate(222 122)"><circle r="8" fill="var(--leaf)"/><circle cx="-8" cy="6" r="7" fill="var(--leaf)"/><circle cx="8" cy="6" r="7" fill="var(--leaf)"/><path d="M0 8 V 18" stroke="var(--leaf)" stroke-width="4"/></g>
        ${txt(40, 160, "dulce", { size: 12 })}${txt(104, 160, "salado", { size: 12 })}${txt(165, 160, "ácido", { size: 12 })}${txt(222, 160, "amargo", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>6. El tacto</h3><p>Con el <mark>tacto</mark> notamos las cosas al tocarlas. El órgano del tacto es la <b>piel</b>. La piel cubre todo el cuerpo.</p><p>Con el tacto sabemos si algo es <b>suave</b> o <b>áspero</b>. También si está <b>frío</b> o <b>caliente</b>.</p><p>Las yemas de los dedos notan muchísimo.</p><p>Las personas ciegas leen tocando unos puntitos con los dedos. Esa forma de leer se llama braille.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una mano toca un osito suave, una lija áspera, un helado frío y una taza caliente">${BG}
        ${manoI(130, 46, 1.4)}
        <g transform="translate(40 120)"><circle r="16" fill="#c98a4a"/><circle cx="-12" cy="-12" r="7" fill="#c98a4a"/><circle cx="12" cy="-12" r="7" fill="#c98a4a"/><circle cx="-5" cy="-3" r="2" fill="#1b2235"/><circle cx="5" cy="-3" r="2" fill="#1b2235"/></g>
        <rect x="80" y="104" width="40" height="32" rx="3" fill="#c9a36a"/><g fill="#8a6a3a">${[0, 1, 2, 3, 4, 5].map((i) => `<circle cx="${86 + (i % 3) * 13}" cy="${112 + Math.floor(i / 3) * 14}" r="2"/>`).join("")}</g>
        <g transform="translate(168 120)"><path d="M-10 0 L 0 26 L 10 0 Z" fill="#d9a066"/><circle cy="-6" r="12" fill="#f5b5c8"/></g>
        <g transform="translate(222 124)"><rect x="-14" y="-12" width="28" height="26" rx="4" fill="var(--pen)"/><path d="M14 -6 q 10 0 10 8 q 0 8 -10 8" stroke="var(--pen)" stroke-width="3" fill="none"/><path d="M-6 -16 q 4 -6 0 -12 M4 -16 q 4 -6 0 -12" stroke="var(--red)" stroke-width="2" fill="none"/></g>
        ${txt(40, 160, "suave", { size: 12 })}${txt(100, 160, "áspero", { size: 12 })}${txt(168, 160, "frío", { size: 12 })}${txt(222, 160, "caliente", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>7. Los sentidos nos protegen</h3><p>Los sentidos nos <mark>avisan de los peligros</mark>.</p><p>El oído oye la bocina de un coche. La vista ve el semáforo en rojo. El olfato huele el humo. El tacto nota que la sopa quema.</p><p>Así podemos parar, apartarnos o pedir ayuda a tiempo.</p><p>Si un sentido te avisa de un peligro, para y avisa a un adulto. ¡Hazle caso a tus sentidos!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño se para en la acera al oír la bocina de un coche y ver el semáforo en rojo">${BG}
        <rect x="14" y="140" width="232" height="26" fill="var(--muted)" opacity=".35"/>
        ${persona(50, 140, 100, "var(--leaf)")}
        <g transform="translate(110 40)"><rect x="-10" y="0" width="20" height="44" rx="5" fill="var(--ink)"/><circle cy="10" r="6" fill="var(--red)"/><circle cy="24" r="6" fill="#555"/><path d="M0 44 V 100" stroke="var(--ink)" stroke-width="4"/></g>
        ${coche(196, 162, "var(--pen)", 1.1)}
        ${txt(196, 110, "¡pi, pi!", { size: 15, color: "var(--red)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>8. Cuidamos los sentidos</h3><p>Los sentidos son muy importantes. Debemos <mark>cuidarlos</mark>.</p><p>No miramos directamente al sol. No vemos la tele muy de cerca. No escuchamos música demasiado alta.</p><p>Nos lavamos la cara y las manos. En verano, ponemos crema en la piel. Nunca metemos objetos en la nariz ni en las orejas.</p><p>Si notas que no ves o no oyes bien, díselo a tu familia. El médico te puede ayudar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una niña con gafas de sol y gorra se pone crema en la piel">${BG}
        ${sol(220, 40, 15)}
        ${persona(110, 166, 140, "var(--inf)")}
        <path d="M86 40 Q 110 20 134 40 Z" fill="var(--red)"/><rect x="94" y="48" width="12" height="9" rx="3" fill="var(--ink)"/><rect x="114" y="48" width="12" height="9" rx="3" fill="var(--ink)"/><path d="M106 52 H 114" stroke="var(--ink)" stroke-width="2"/>
        <rect x="160" y="110" width="22" height="40" rx="5" fill="var(--water)"/><rect x="164" y="102" width="14" height="10" fill="var(--card)" stroke="var(--line)"/>
        ${txt(60, 30, "Me cuido", { size: 16, color: "var(--leaf)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>9. ¿Para qué sirve?</h3><p>Usamos los sentidos <mark>todo el día</mark>, casi sin darnos cuenta.</p><p>En el desayuno olemos el pan y probamos la leche. En clase vemos la pizarra y oímos a la maestra. En el recreo tocamos el balón.</p><p>Algunas personas no ven o no oyen. Usan más los otros sentidos, como el tacto.</p><p>Muchas personas sordas hablan con las manos. Usan la lengua de signos. ¡Es otra forma de hablar!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un día con los sentidos: desayuno, clase y recreo">${BG}
        <g transform="translate(46 100)"><path d="M-22 -10 h 44 l -6 30 h -32 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><ellipse cy="-10" rx="22" ry="5" fill="#f3e6c8"/></g>
        <rect x="100" y="64" width="62" height="42" rx="4" fill="var(--leaf)"/><path d="M108 80 h 30 M108 92 h 40" stroke="#fff" stroke-width="2.5"/>
        <g transform="translate(212 98)"><circle r="20" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M0 -8 L 8 -2 L 5 7 H -5 L -8 -2 Z" fill="var(--ink)"/></g>
        ${txt(46, 150, "desayuno", { size: 12 })}${txt(131, 150, "clase", { size: 12 })}${txt(212, 150, "recreo", { size: 12 })}
        ${txt(130, 32, "Todo el día", { size: 16, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>10. Juego: la caja misteriosa</h3><p>Un adulto mete un objeto en una <mark>caja</mark> o en una bolsa. Tú no miras.</p><p>Metes la mano y lo tocas. ¿Es suave o áspero? ¿Es frío? ¿Es grande o pequeño?</p><p>Después lo hueles. Al final, di qué es. ¿Qué sentidos has usado? ¡El tacto y el olfato!</p><p>Después prueba con los ojos tapados: huele una naranja o un jabón. ¿Lo adivinas solo con la nariz?</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una caja con un agujero y una mano que entra a tocar algo misterioso">${BG}
        <rect x="70" y="70" width="120" height="86" rx="6" fill="var(--sun)" stroke="#c99a10" stroke-width="2"/>
        <ellipse cx="130" cy="104" rx="26" ry="18" fill="var(--ink)"/>
        ${manoI(130, 70, 1)}
        ${txt(130, 150, "?", { size: 26, color: "var(--pen)", font: D, weight: 800 })}
        ${txt(130, 30, "¿Qué hay dentro?", { size: 16, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
      video: { id: "FedXtehiVIc", titulo: "Luli Pampín - Los cinco sentidos", canal: "Luli Pampín", vistas: 33153191, megusta: 0 },
    },
    L3.B("11. Repaso: lo que ya sabes", `<p>Tenemos <mark>cinco sentidos</mark>: vista, oído, olfato, gusto y tacto.</p><p>Vemos con los ojos y oímos con las orejas. Olemos con la nariz. Saboreamos con la lengua. Tocamos con la piel.</p><p>Los sentidos nos dicen cómo es el mundo. También nos avisan de los peligros.</p><p>Por eso los cuidamos cada día: sin música muy alta, sin mirar al sol y con la cara limpia.</p>`, "Cinco círculos de colores con los nombres de los cinco sentidos", `${[["vista", "var(--pen)"], ["oído", "var(--red)"], ["olfato", "var(--leaf)"], ["gusto", "var(--sun)"], ["tacto", "var(--inf)"]].map(([s, c], i) => `<circle cx="${34 + i * 48}" cy="80" r="21" fill="${c}" opacity=".85"/>${L3.big(34 + i * 48, 89, i + 1, "var(--card)", 22)}${L3.t(34 + i * 48, 126, s, c, 13)}`).join("")}${L3.t(130, 162, "¡Cinco sentidos!", "var(--pen)", 16)}`),
  ],
  figura: {
    titulo: "Los cinco sentidos y sus órganos",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Cinco tarjetas: vista con los ojos, oído con las orejas, olfato con la nariz, gusto con la lengua y tacto con la piel">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${ICON.map(([o, n, f], i) => {
        const x = 70 + i * 125, c = ["var(--water)", "var(--red)", "var(--inf)", "var(--leaf)", "var(--pen)"][i];
        return `<rect x="${x - 54}" y="40" width="108" height="210" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${f(x, 120, 1.6)}${txt(x, 200, n.toUpperCase(), { size: 17, color: c, font: D, weight: 800 })}${txt(x, 226, o, { size: 14 })}`;
      }).join("")}
    </svg>`,
  },
  video: { id: "IhO5Je1Puyw", titulo: "Los sentidos para niños - El gusto, el tacto, la vista, el oído y el olfato", canal: "Smile and Learn - Español", vistas: 14233399, megusta: 0, busqueda: "los cinco sentidos para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué sentido usas para saber que el pan está recién hecho?",
      pasos: ["Piensa qué notas al entrar en la panadería.", "Notas un olor rico.", "Los olores se notan con la nariz."],
      resultado: "usas el olfato." },
    { enunciado: "Describe un limón con tres sentidos.",
      pasos: ["Vista: es amarillo y ovalado.", "Tacto: su piel es un poco rugosa.", "Gusto: es ácido."],
      resultado: "un limón es amarillo, rugoso y ácido." },
    { enunciado: "Oyes una sirena muy fuerte en la calle. ¿Qué haces?",
      pasos: ["El oído te avisa de algo importante.", "Miras con la vista de dónde viene el sonido.", "Te apartas y dejas pasar a la ambulancia."],
      resultado: "el oído y la vista te ayudan a estar seguro." },
    { enunciado: "Estás en la playa. ¿Qué notas con cada sentido?", pasos: ["Con la vista ves el mar azul.", "Con el oído oyes las olas.", "Con el tacto notas la arena caliente; con el olfato, el olor a mar; y con el gusto, el agua salada."], resultado: "en la playa usas los cinco sentidos." },
  ],
  errores: [
    "Pensar que el tacto está solo en las manos: está en toda la piel.",
    "Confundir el gusto con el olfato: el gusto está en la lengua y el olfato en la nariz.",
    "Mirar directamente al sol: puede dañar los ojos.",
    "Poner la música muy alta con cascos: puede dañar los oídos.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Di los cinco sentidos.", sol: "Vista, oído, olfato, gusto y tacto." },
    { nivel: "básico", q: "Señala el órgano del olfato.", sol: "La nariz." },
    { nivel: "básico", q: "Cierra los ojos y escucha un minuto. Di tres sonidos que oigas.", sol: "Por ejemplo: un coche, una voz y un pájaro." },
    { nivel: "básico", q: "Di algo dulce y algo salado.", sol: "Por ejemplo: un caramelo es dulce y las patatas fritas son saladas." },
    { nivel: "básico", q: "Toca tu mesa y tu jersey. ¿Cuál es más suave?", sol: "Normalmente el jersey." },
    { nivel: "medio", q: "Dibuja un ojo, una oreja, una nariz, una lengua y una mano.", sol: "Son los órganos de los cinco sentidos." },
    { nivel: "medio", q: "¿Qué sentido te avisa de que la sopa quema?", sol: "El tacto." },
    { nivel: "básico", q: "Di dos cosas que huelan bien.", sol: "Por ejemplo: una flor y el pan." },
    { nivel: "medio", q: "Di una forma de cuidar los ojos.", sol: "No mirar al sol o no ver la tele muy de cerca." },
    { nivel: "medio", q: "¿Qué sentidos usas para comer una manzana?", sol: "La vista, el tacto, el olfato y el gusto. ¡Y el oído si cruje!" },
    L3.b("¿Con qué órgano notas si el agua está fría?", "Con la piel: el tacto."),
    L3.b("Une: ojos-vista, orejas-…, nariz-…", "Orejas-oído; nariz-olfato."),
    L3.b("Di un sonido fuerte y uno suave.", "Por ejemplo: un trueno es fuerte y un susurro es suave."),
    L3.m("Di algo ácido y algo amargo.", "Por ejemplo: el limón es ácido y el café es amargo."),
    L3.m("Toca una piedra, una pluma y una toalla. Ordénalas de más áspera a más suave.", "Piedra, toalla, pluma."),
    L3.m("¿Qué sentido te avisa de que viene un coche que no ves?", "El oído: oyes el motor o la bocina."),
    L3.m("Rodea lo que NO debes hacer: mirar al sol, ponerte crema, escuchar música muy alta.", "Mirar al sol y escuchar música muy alta."),
    L3.m("¿Qué sentidos usa una persona ciega para leer?", "El tacto: lee con los dedos en braille."),
    L3.a("Elige una fruta y descríbela con los cinco sentidos.", "Por ejemplo: la naranja es naranja, redonda, rugosa, huele bien, sabe dulce y suena al pelarla."),
    L3.a("¿Por qué la comida sabe menos cuando tienes catarro?", "Porque la nariz está tapada y el olfato ayuda al gusto."),
    L3.a("Con los ojos tapados, adivina tres objetos por el tacto.", "Juego libre: hay que describir antes de adivinar."),
    L3.a("Inventa una adivinanza sobre un sentido.", "Por ejemplo: «Dos ventanas en tu cara, si las cierras no ves nada». Los ojos."),
  ],
  quiz: [
    { q: "¿Cuántos sentidos tenemos?", o: ["3", "5", "10"], a: 1, e: "Vista, oído, olfato, gusto y tacto." },
    { q: "Con los ojos usamos…", o: ["la vista", "el oído", "el gusto"], a: 0, e: "Los ojos son el órgano de la vista." },
    { q: "El órgano del oído son…", o: ["los ojos", "las orejas", "las manos"], a: 1, e: "Oímos con las orejas." },
    { q: "Olemos con…", o: ["la lengua", "la piel", "la nariz"], a: 2, e: "La nariz es el órgano del olfato." },
    { q: "Un limón sabe…", o: ["dulce", "ácido", "salado"], a: 1, e: "El limón es ácido." },
    { q: "El órgano del tacto es…", o: ["la piel", "la boca", "el pelo"], a: 0, e: "La piel cubre todo el cuerpo." },
    { q: "Para ver necesitamos…", o: ["silencio", "luz", "frío"], a: 1, e: "Sin luz no vemos." },
    { q: "Un susurro es un sonido…", o: ["fuerte", "suave", "salado"], a: 1, e: "Es un sonido muy suave." },
    { q: "¿Qué sentido nos avisa del humo?", o: ["El olfato", "El gusto", "La vista solo"], a: 0, e: "Olemos el humo con la nariz." },
    { q: "Para cuidar los oídos…", o: ["ponemos la música alta", "no metemos objetos en las orejas", "gritamos mucho"], a: 1, e: "Nunca metemos cosas en las orejas." },
    L3.Q("¿Con qué leen las personas ciegas?", ["Con los dedos", "Con la nariz", "Con las orejas"], 0, "Leen en braille con el tacto."),
    L3.Q("Para cuidar los ojos…", ["no miramos al sol", "vemos la tele muy cerca", "nos frotamos fuerte"], 0, "El sol daña los ojos."),
  ],
  examen: [
    { q: "¿Con qué sentido sabemos si algo es áspero?", o: ["Con el tacto", "Con el oído", "Con el olfato"], a: 0, e: "Lo notamos al tocarlo." },
    { q: "La lengua es el órgano del…", o: ["olfato", "gusto", "oído"], a: 1, e: "Con la lengua notamos sabores." },
    { q: "¿Qué sentido usas para ver los colores?", o: ["La vista", "El tacto", "El gusto"], a: 0, e: "Los colores se ven con los ojos." },
    { q: "Un caramelo sabe…", o: ["amargo", "dulce", "ácido"], a: 1, e: "Es dulce." },
    L3.Q("¿Qué sentido nota los olores?", ["El olfato", "El oído", "La vista"], 0, "Con la nariz."),
    L3.Q("Un trueno es un sonido…", ["fuerte", "suave", "dulce"], 0, "Se oye mucho."),
  ],
  feynman: ["Los cinco sentidos y sus órganos", "Cómo nos protegen los sentidos", "Cómo cuidamos los sentidos"],
  mapa: mapa("LOS CINCO SENTIDOS", "var(--pri)", [
    ["Vista y oído", "ojos · orejas", "var(--water)"],
    ["Olfato y gusto", "nariz · lengua", "var(--inf)"],
    ["Tacto", "la piel de todo el cuerpo", "var(--pen)"],
    ["Nos protegen", "avisan de peligros", "var(--red)"],
  ], 220),
  tarjetas: [
    ["¿Cuáles son los cinco sentidos?", "Vista, oído, olfato, gusto y tacto"],
    ["¿Con qué vemos?", "Con los ojos"],
    ["¿Con qué oímos?", "Con las orejas"],
    ["¿Con qué olemos?", "Con la nariz"],
    ["¿Con qué notamos los sabores?", "Con la lengua"],
    ["¿Dónde está el tacto?", "En la piel de todo el cuerpo"],
    ["¿Cuáles son los cuatro sabores?", "Dulce, salado, ácido y amargo"],
    ["¿Para qué sirven también los sentidos?", "Para avisarnos de peligros"],
    ["¿Qué es el braille?", "Una forma de leer tocando puntitos"],
    ["¿Qué sentidos trabajan juntos al comer?", "El gusto y el olfato"],
  ],
  glosario: [
    ["Sentido", "Lo que nos dice cómo es el mundo: vista, oído, olfato, gusto y tacto."],
    ["Órgano", "La parte del cuerpo de cada sentido, como los ojos."],
    ["Vista", "El sentido para ver."],
    ["Oído", "El sentido para escuchar."],
    ["Olfato", "El sentido para notar los olores."],
    ["Gusto", "El sentido para notar los sabores."],
    ["Tacto", "El sentido para notar las cosas al tocarlas."],
    ["Áspero", "Que raspa al tocarlo, como una lija."],
    ["Braille", "Letras de puntitos que se leen con los dedos."],
  ],
  situacion: L3.sit("El museo de los sentidos", "Vamos a preparar un museo en clase con un rincón para cada sentido. Las familias lo visitarán.", ["Formamos cinco grupos, uno por sentido.", "Cada grupo trae objetos: telas para el tacto, botes con olores, sonajeros, fotos de colores y alimentos para probar.", "Preparamos un cartel con el nombre del sentido y su órgano.", "Las familias visitan el museo con los ojos tapados y adivinan."], "Un museo con cinco rincones, uno para cada sentido.", ["Relaciona cada sentido con su órgano.", "Elige objetos adecuados para su rincón.", "Explica a los visitantes cómo se usa el sentido."]),
  familias: [
    "Jugad a la caja misteriosa con objetos de casa: que adivine solo con el tacto.",
    "En la comida, preguntad: ¿a qué huele?, ¿es dulce o salado?",
    "En un paseo, parad un minuto con los ojos cerrados y contad los sonidos.",
    "Revisad juntos el volumen de los cascos y la distancia a la pantalla.",
  ],
  profesores: {
    saberes: "Ciencias, Geografía e Historia: los sentidos y sus órganos, percepción del entorno y hábitos de cuidado (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Estaciones sensoriales: botes de olores, bolsa de texturas, cata de sabores y sonidos grabados.", "Paseo sensorial por el patio con una tabla de cinco columnas.", "Introducción al braille y a la lengua de signos para hablar de diversidad."],
  },
  fuentes: [RD],
  revisado: "2026-11-14",
};
