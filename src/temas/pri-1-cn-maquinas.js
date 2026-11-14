// Ciencias de la Naturaleza 1º de Primaria. Nivel libro: lectura, apartados numerados, ejercicios por niveles, glosario y situación.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, check, RD } = require("./_peques");
const L3 = require("./_pri1L3");

// Máquinas y aparatos sencillos. (x, y) = centro.
const rueda = (x, y, r = 16) => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="var(--ink)" stroke-width="4"/><circle cx="${x}" cy="${y}" r="3" fill="var(--ink)"/>${[0, 60, 120].map((a) => { const c = Math.cos((a * Math.PI) / 180) * r, s = Math.sin((a * Math.PI) / 180) * r; return `<path d="M${(x - c).toFixed(1)} ${(y - s).toFixed(1)} L ${(x + c).toFixed(1)} ${(y + s).toFixed(1)}" stroke="var(--ink)" stroke-width="1.5"/>`; }).join("")}</g>`;
const bici = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">${rueda(-26, 0, 16)}${rueda(26, 0, 16)}<path d="M-26 0 L -6 -24 L 18 -24 L 26 0 M-6 -24 L 0 0 L 18 -24 M-10 -30 H 0 M18 -24 L 14 -36 H 24" stroke="var(--red)" stroke-width="3.5" fill="none" stroke-linejoin="round"/><circle cy="0" r="4" fill="var(--ink)"/></g>`;
const lavadora = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-26" y="-30" width="52" height="60" rx="5" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-26 -18 H 26" stroke="var(--ink)" stroke-width="1.5"/><circle cx="16" cy="-24" r="3" fill="var(--pen)"/><circle cy="6" r="15" fill="var(--water)" fill-opacity=".4" stroke="var(--ink)" stroke-width="2"/></g>`;
const nevera = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-20" y="-38" width="40" height="76" rx="5" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-20 -10 H 20 M12 -30 V -18 M12 -2 V 14" stroke="var(--ink)" stroke-width="2"/></g>`;
const ordenador = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-30" y="-26" width="60" height="40" rx="4" fill="var(--ink)"/><rect x="-26" y="-22" width="52" height="32" fill="var(--water)" fill-opacity=".5"/><path d="M-36 18 H 36 L 30 24 H -30 Z" fill="var(--muted)"/></g>`;
const enchufe = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-16" y="-16" width="32" height="32" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="-6" r="3" fill="var(--ink)"/><circle cx="6" r="3" fill="var(--ink)"/></g>`;
const rayo = (x, y, s = 1) => `<path transform="translate(${x} ${y}) scale(${s})" d="M4 -18 L -8 2 H 2 L -4 18 L 10 -4 H 0 Z" fill="var(--sun)" stroke="#c99a10" stroke-width="1"/>`;
const pila = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-8" y="-18" width="16" height="36" rx="3" fill="var(--leaf)"/><rect x="-3" y="-22" width="6" height="4" fill="var(--muted)"/><path d="M-4 -6 H 4 M0 -10 V -2" stroke="#fff" stroke-width="2"/></g>`;
const tijeras = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-2 -2 L 24 -16 M-2 2 L 24 16" stroke="#6b7385" stroke-width="4" stroke-linecap="round"/><circle cx="-10" cy="-8" r="7" fill="none" stroke="var(--red)" stroke-width="3.5"/><circle cx="-10" cy="8" r="7" fill="none" stroke="var(--red)" stroke-width="3.5"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: "1-primaria",
  titulo: "Las máquinas y la tecnología",
  minutos: 50,
  objetivos: ["Saber que las máquinas nos ayudan a hacer trabajos con menos esfuerzo", "Distinguir máquinas sencillas y máquinas con muchas piezas", "Reconocer máquinas de casa y del colegio y qué energía usan", "Usar las máquinas y los aparatos eléctricos con seguridad"],
  claves: ["máquina", "rueda", "rampa", "electricidad", "pila", "tecnología"],
  pregunta: {
    texto: "Tienes que llevar una caja muy pesada hasta el final del pasillo. ¿Cómo lo harías con menos esfuerzo?",
    respuesta: "Puedes ponerla en un <mark>carrito con ruedas</mark>. La rueda es una <b>máquina</b>: nos ayuda a mover cosas pesadas con menos esfuerzo.",
  },
  lectura: L3.lect("El robot de Izan", `<p>Izan quiere construir un robot. Busca en casa una caja de cartón, unos tapones y unos rollos de papel.</p><p>«¿Cómo hago que se mueva?», se pregunta.</p><p>Su madre le da cuatro ruedas de un coche viejo de juguete. Izan las pega debajo de la caja.</p><p>Le da un pequeño empujón y... ¡el robot rueda por el pasillo!</p><p>«Las ruedas son una máquina muy antigua», le explica su madre. «Se inventaron hace miles de años.»</p><p>Izan está muy contento. Ahora quiere que su robot tenga luz. ¿Necesitará pilas?</p><p>En este tema vas a conocer las máquinas que nos ayudan cada día.</p>`),
  bloques: [
    {
      html: `<h3>1. ¿Qué es una máquina?</h3><p>Una <mark>máquina</mark> es un objeto que nos ayuda a hacer un trabajo. Con ella cuesta menos esfuerzo o se hace más deprisa.</p><p>Las tijeras nos ayudan a cortar. La bicicleta nos ayuda a ir lejos. La lavadora lava la ropa.</p><p>Las personas inventan máquinas para vivir mejor.</p><p>Hay máquinas grandes, como una grúa, y pequeñas, como un sacapuntas. Todas nos ayudan a hacer algo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Unas tijeras, una bicicleta y una lavadora">${BG}
        ${tijeras(40, 96, 1.1)}${bici(134, 112, 1)}${lavadora(216, 100, 1)}
        ${txt(44, 150, "cortar", { size: 12 })}${txt(134, 150, "moverse", { size: 12 })}${txt(216, 150, "lavar", { size: 12 })}
        ${txt(130, 32, "Nos ayudan", { size: 16, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>2. Máquinas sencillas</h3><p>Algunas máquinas tienen <mark>muy pocas piezas</mark>. Son máquinas sencillas.</p><p>La <b>rueda</b> ayuda a mover cosas: carritos, coches, patinetes. La <b>rampa</b> ayuda a subir cosas sin levantarlas. El <b>balancín</b> del parque es una palanca: ayuda a levantar peso.</p><p>Las máquinas sencillas se usan desde hace miles de años.</p><p>Mira el tobogán del parque. ¡Es una rampa! Sirve para bajar deprisa y divertirse mucho.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una rueda, una rampa con una caja y un balancín">${BG}
        ${rueda(44, 100, 24)}
        <path d="M86 130 L 160 130 L 160 92 Z" fill="var(--sun)"/><rect x="118" y="96" width="18" height="18" fill="#c98a4a" transform="rotate(-27 127 105)"/>
        <g transform="translate(214 120)"><path d="M-4 10 L 0 0 L 4 10 Z" fill="var(--ink)"/><path d="M-36 -10 L 36 10" stroke="var(--red)" stroke-width="5" stroke-linecap="round"/><rect x="-36" y="-28" width="16" height="16" fill="var(--pen)"/></g>
        ${txt(44, 152, "rueda", { size: 12 })}${txt(124, 152, "rampa", { size: 12 })}${txt(214, 152, "balancín", { size: 12 })}</svg>`,
      video: { id: "aR6NfRBz7ME", titulo: "Las máquinas para niños - Máquinas simples y compuestas", canal: "Smile and Learn - Español", vistas: 1138879, megusta: 0 },
    },
    {
      html: `<h3>3. Máquinas con muchas piezas</h3><p>Otras máquinas tienen <mark>muchas piezas</mark> que trabajan juntas.</p><p>La <b>bicicleta</b> tiene ruedas, pedales, cadena, manillar y frenos. Si falta una pieza, no funciona bien.</p><p>El coche, el ascensor y la grúa también tienen muchísimas piezas. Los mecánicos saben arreglarlas. Usan muchas herramientas.</p><p>Las piezas de una máquina se cuidan. Si la bici tiene la cadena sucia, pedalear cuesta más.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Bicicleta grande con las ruedas, el pedal, el manillar y el sillín señalados">${BG}
        ${bici(120, 120, 2)}
        <g font-size="12" font-weight="700" ${F}>
          <path d="M80 140 L 54 162" stroke="var(--pen)" stroke-width="2"/><text x="20" y="172" fill="var(--pen)">rueda</text>
          <path d="M120 128 L 128 160" stroke="var(--red)" stroke-width="2"/><text x="112" y="172" fill="var(--red)">pedal</text>
          <path d="M100 60 L 70 40" stroke="var(--leaf)" stroke-width="2"/><text x="26" y="38" fill="var(--leaf)">sillín</text>
          <path d="M162 48 L 196 34" stroke="var(--inf)" stroke-width="2"/><text x="198" y="38" fill="var(--inf)">manillar</text></g></svg>`,
    },
    {
      html: `<h3>4. Máquinas en casa</h3><p>En casa usamos muchas máquinas. Muchas se llaman <mark>electrodomésticos</mark>.</p><p>La <b>nevera</b> mantiene fría la comida. La <b>lavadora</b> lava la ropa. El <b>horno</b> cocina. La <b>aspiradora</b> limpia el suelo.</p><p>También hay máquinas sencillas: el abrelatas, el exprimidor o la escoba. ¡Cuántas máquinas hay en casa!</p><p>Algunas máquinas de casa nos avisan con un pitido. Así sabemos que el microondas o la lavadora han terminado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una cocina con nevera, lavadora y horno">${BG}
        ${nevera(50, 104, 1.3)}${lavadora(130, 112, 1.1)}
        <g transform="translate(206 112)"><rect x="-28" y="-30" width="56" height="60" rx="5" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="-22" y="-10" width="44" height="32" rx="3" fill="var(--inf)" fill-opacity=".35" stroke="var(--ink)" stroke-width="1.5"/><circle cx="-12" cy="-20" r="3" fill="var(--ink)"/><circle cx="0" cy="-20" r="3" fill="var(--ink)"/></g>
        ${txt(50, 166, "nevera", { size: 12 })}${txt(130, 166, "lavadora", { size: 12 })}${txt(206, 166, "horno", { size: 12 })}
        ${txt(130, 30, "Electrodomésticos", { size: 15, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>5. La tecnología en el cole</h3><p>La <mark>tecnología</mark> son las máquinas y los inventos que usamos cada día.</p><p>En el cole hay <b>ordenadores</b>, tabletas y pizarras digitales. Sirven para buscar información, escribir, dibujar y jugar a aprender.</p><p>También usamos máquinas sencillas: el sacapuntas y la grapadora.</p><p>Las pantallas se usan un rato y con un adulto. Después descansamos los ojos y jugamos fuera.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una pizarra digital, un ordenador y un sacapuntas">${BG}
        <rect x="20" y="40" width="110" height="70" rx="6" fill="var(--ink)"/><rect x="26" y="46" width="98" height="58" fill="var(--leaf)" fill-opacity=".6"/>${txt(75, 82, "A B C", { size: 16, color: "#fff", font: D, weight: 800 })}
        ${ordenador(194, 84, 1.3)}
        <g transform="translate(80 140)"><rect x="-14" y="-10" width="28" height="20" rx="4" fill="var(--pen)"/><path d="M-26 0 H -14" stroke="var(--sun)" stroke-width="6"/></g>
        ${txt(194, 140, "ordenador", { size: 12 })}${txt(80, 168, "sacapuntas", { size: 12 })}</svg>`,
    },
    {
      html: `<h3>6. ¿Cómo funcionan?</h3><p>Las máquinas necesitan <mark>energía</mark> para funcionar.</p><p>Algunas funcionan con nuestra <b>fuerza</b>: la bici, las tijeras o el balancín.</p><p>Otras funcionan con <b>electricidad</b>. Se enchufan, como la nevera. Otras llevan <b>pilas</b> o batería. Así funcionan el móvil o un coche de juguete. ¡Cuidado con los enchufes!</p><p>Las pilas gastadas no van a la basura normal. Se llevan a un contenedor especial para pilas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Energía de nuestra fuerza, de un enchufe y de una pila">${BG}
        ${persona(46, 130, 80, "var(--red)")}
        ${enchufe(130, 100, 1.4)}${rayo(158, 70, 1)}
        ${pila(214, 100, 1.4)}
        ${txt(46, 148, "fuerza", { size: 13 })}${txt(130, 148, "electricidad", { size: 13 })}${txt(214, 148, "pilas", { size: 13 })}
        ${txt(130, 32, "Energía", { size: 16, color: "#b8860b", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>7. Con mucho cuidado</h3><p>Las máquinas pueden ser <mark>peligrosas</mark> si no las usamos bien.</p><p>Nunca metemos los dedos ni objetos en los <b>enchufes</b>. No tocamos aparatos eléctricos con las manos mojadas. No tocamos el horno ni la plancha calientes.</p><p>Usamos las tijeras de punta redonda. Si una máquina se rompe, avisamos a un adulto.</p><p>Las máquinas de cortar, como las de la cocina, son solo para adultos. Los niños miramos desde lejos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un enchufe tachado con una mano mojada y unas tijeras de punta redonda con un visto bueno">${BG}
        ${enchufe(70, 92, 2)}${rayo(110, 60, 1.3)}
        <g fill="var(--water)"><path d="M34 52 q 5 8 0 12 q -5 -4 0 -12"/><path d="M46 44 q 5 8 0 12 q -5 -4 0 -12"/></g>
        ${check(70, 146, false)}
        ${tijeras(190, 92, 1.6)}${check(190, 146, true)}
        ${txt(130, 28, "¡Cuidado!", { size: 16, color: "var(--red)", font: D, weight: 800 })}</svg>`,
    },
    {
      html: `<h3>8. Antes y ahora</h3><p>Hace muchos años no había tantas máquinas. La gente lavaba la ropa <mark>a mano</mark>, en el río.</p><p>Para ir lejos, se viajaba a caballo o andando. Para escribir una carta, se usaba pluma y papel.</p><p>Hoy tenemos lavadoras, coches y ordenadores. Los inventos <b>cambian</b> nuestra forma de vivir.</p><p>Pregunta a tus abuelos qué máquinas no tenían de pequeños. ¡Te sorprenderá su respuesta!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Antes: lavar la ropa a mano en un barreño. Ahora: una lavadora">${BG}
        <rect x="14" y="40" width="112" height="126" rx="10" fill="#f3e6c8"/><rect x="134" y="40" width="112" height="126" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        <g transform="translate(70 130)"><path d="M-34 -14 H 34 L 26 14 H -26 Z" fill="#a8702e"/><ellipse cy="-14" rx="34" ry="7" fill="var(--water)" fill-opacity=".6"/><rect x="-10" y="-30" width="20" height="16" fill="var(--red)" transform="rotate(-15)"/></g>
        ${lavadora(190, 112, 1.2)}
        ${txt(70, 30, "antes", { size: 14, color: "#a8702e" })}${txt(190, 30, "ahora", { size: 14, color: "var(--pen)" })}</svg>`,
      video: L3.V("DML24R1x3W0", "La rueda: grandes inventos que cambiaron la historia", "Happy Learning Español", 1050495),
    },
    {
      html: `<h3>9. ¿Para qué sirve?</h3><p>Las máquinas nos ahorran <mark>tiempo y esfuerzo</mark>. Nos dejan más tiempo para jugar, leer y estar en familia.</p><p>Algunas máquinas cuidan de nuestra salud, como las de los hospitales.</p><p>Pero también gastan energía. Por eso <b>apagamos</b> la luz y la tele cuando no las usamos.</p><p>Los inventores piensan cómo resolver problemas. Tú también puedes inventar: dibuja una máquina que te ayude a recoger tus juguetes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño apaga la luz de una habitación vacía">${BG}
        ${persona(80, 160, 120, "var(--leaf)")}
        <rect x="120" y="70" width="22" height="32" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="126" y="80" width="10" height="12" rx="2" fill="var(--muted)"/>
        <path d="M100 98 L 122 88" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>
        <g transform="translate(200 50)"><path d="M0 -18 Q 16 -18 16 -2 Q 16 8 6 14 V 22 H -6 V 14 Q -16 8 -16 -2 Q -16 -18 0 -18 Z" fill="var(--line)" stroke="var(--ink)" stroke-width="2"/></g>
        ${txt(200, 100, "apagada", { size: 12, color: "var(--muted)" })}
        ${txt(190, 150, "¡Ahorro energía!", { size: 13, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>10. Juego: ¿fuerza o electricidad?</h3><p>Un adulto dice el nombre de una <mark>máquina</mark>. Tú dices cómo funciona.</p><p>Si funciona con tu fuerza, mueve los brazos. Si necesita electricidad o pilas, haz un rayo con los dedos.</p><p>Prueba: tijeras, nevera, patinete, tableta, escoba, televisión.</p><p>Fuerza: tijeras, patinete y escoba. Electricidad: las otras tres.</p><p>Ahora inventa tú más máquinas para el juego. ¿Una linterna? ¿Un columpio? ¿Una aspiradora?</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos grupos: tijeras y patinete con la fuerza; nevera y tableta con electricidad">${BG}
        <rect x="14" y="40" width="112" height="110" rx="10" fill="var(--ok-bg)"/><rect x="134" y="40" width="112" height="110" rx="10" fill="#fff6c2"/>
        ${tijeras(48, 90, 1)}<g transform="translate(96 110)"><path d="M-12 0 H 12 M8 0 L 4 -40 H 12" stroke="var(--pen)" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="-12" cy="4" r="5" fill="var(--ink)"/><circle cx="12" cy="4" r="5" fill="var(--ink)"/></g>
        ${nevera(166, 98, 0.8)}<rect x="196" y="78" width="36" height="48" rx="5" fill="var(--ink)"/><rect x="200" y="82" width="28" height="38" fill="var(--water)" fill-opacity=".6"/>
        ${txt(70, 30, "fuerza", { size: 14, color: "var(--leaf)" })}${txt(190, 30, "electricidad", { size: 14, color: "#b8860b" })}${rayo(244, 30, 0.7)}</svg>`,
    },
    L3.B("11. Repaso: lo que ya sabes", `<p>Una <mark>máquina</mark> nos ayuda a hacer un trabajo con menos esfuerzo.</p><p>Hay máquinas <b>sencillas</b>, como la rueda, la rampa o la palanca. Y máquinas con <b>muchas piezas</b>, como la bici o el coche.</p><p>Unas funcionan con nuestra fuerza y otras con electricidad o pilas.</p><p>Las usamos con cuidado y apagamos lo que no usamos para ahorrar energía.</p>`, "Una rueda, una rampa y un enchufe con un rayo", `<circle cx="50" cy="100" r="30" fill="none" stroke="var(--ink)" stroke-width="6"/><circle cx="50" cy="100" r="5" fill="var(--ink)"/><path d="M50 70 V130 M20 100 H80" stroke="var(--ink)" stroke-width="2"/><path d="M100 130 L170 130 L170 80 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/><rect x="190" y="74" width="46" height="56" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M216 82 l-10 20 h10 l-8 20" stroke="var(--red)" stroke-width="3" fill="none"/>${L3.t(50, 156, "rueda")}${L3.t(135, 156, "rampa")}${L3.t(213, 156, "electricidad")}`),
  ],
  figura: {
    titulo: "Las máquinas que nos ayudan",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Máquinas sencillas, máquinas con muchas piezas, en casa y en el cole, con su energía">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["SENCILLAS", "rueda · rampa · tijeras", "var(--pen)", rueda(0, 0, 30)],
         ["MUCHAS PIEZAS", "bici · coche · grúa", "var(--red)", bici(0, 14, 1.4)],
         ["EN CASA", "nevera · lavadora", "var(--water)", lavadora(0, 0, 1.3)],
         ["EN EL COLE", "ordenador · tableta", "var(--leaf)", ordenador(0, 0, 1.3)]].map(([t, d, c, dib], i) => {
        const x = 90 + i * 153;
        return `<rect x="${x - 70}" y="30" width="140" height="200" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/><g transform="translate(${x} 100)">${dib}</g>${txt(x, 180, t, { size: 15, color: c, font: D, weight: 800 })}${txt(x, 204, d, { size: 12 })}`;
      }).join("")}
      ${txt(320, 268, "Funcionan con nuestra fuerza, con electricidad o con pilas", { size: 15, color: "var(--ink)" })}
    </svg>`,
  },
  video: { id: "Ak3M5tFro_I", titulo: "Máquinas simples y compuestas", canal: "Happy Learning Español", vistas: 2810562, megusta: 0, busqueda: "las máquinas para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿El patinete es una máquina?",
      pasos: ["¿Nos ayuda a hacer un trabajo? Sí, a movernos más deprisa.", "Tiene ruedas, manillar y una tabla.", "Funciona con la fuerza de nuestra pierna."],
      resultado: "sí, el patinete es una máquina que funciona con nuestra fuerza." },
    { enunciado: "¿Qué energía usa una linterna?",
      pasos: ["La linterna no se enchufa.", "Si la abrimos, dentro hay pilas.", "Cuando se gastan, deja de alumbrar."],
      resultado: "la linterna funciona con pilas." },
    { enunciado: "Tu hermano quiere enchufar la tableta con las manos mojadas. ¿Qué le dices?",
      pasos: ["El agua y la electricidad juntas son peligrosas.", "Primero hay que secarse bien las manos.", "Mejor que lo haga un adulto."],
      resultado: "que se seque las manos y pida ayuda a un adulto." },
    { enunciado: "¿Cómo subimos una caja pesada a un camión sin levantarla?", pasos: ["Levantarla cuesta mucha fuerza.", "Ponemos una tabla inclinada: una rampa.", "Empujamos la caja por la rampa hasta arriba."], resultado: "con una rampa cuesta menos esfuerzo." },
  ],
  errores: [
    "Pensar que solo son máquinas las que llevan motor: las tijeras y la rueda también lo son.",
    "Meter objetos en los enchufes: es muy peligroso.",
    "Dejar luces y aparatos encendidos sin usarlos: gastan energía.",
    "Creer que las máquinas lo hacen todo solas: alguien tiene que manejarlas con cuidado.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Di tres máquinas que haya en tu casa.", sol: "Por ejemplo: la nevera, la lavadora y la tele." },
    { nivel: "básico", q: "Di una máquina que funcione con tu fuerza.", sol: "Por ejemplo: la bici o las tijeras." },
    { nivel: "básico", q: "Di una máquina que use pilas.", sol: "Por ejemplo: un mando a distancia o un coche de juguete." },
    { nivel: "básico", q: "Dibuja una bicicleta y señala las ruedas y los pedales.", sol: "Deben verse dos ruedas y los pedales en el centro." },
    { nivel: "medio", q: "¿Qué hace la nevera?", sol: "Mantiene fría la comida." },
    { nivel: "básico", q: "Busca tres cosas con ruedas en la calle.", sol: "Por ejemplo: un coche, un carrito y una bici." },
    { nivel: "medio", q: "¿Por qué no se tocan los enchufes con las manos mojadas?", sol: "Porque la electricidad y el agua juntas son peligrosas." },
    { nivel: "básico", q: "Di una máquina que haya en el cole.", sol: "Por ejemplo: el ordenador o el sacapuntas." },
    { nivel: "básico", q: "¿Cómo lavaba la gente la ropa antes de la lavadora?", sol: "A mano, en el río o en un barreño." },
    { nivel: "medio", q: "Di algo que puedes hacer para ahorrar energía.", sol: "Apagar la luz al salir de una habitación." },
    L3.b("Rodea las máquinas: tijeras, piedra, bicicleta, flor.", "Tijeras y bicicleta."),
    L3.b("¿Qué máquina de casa lava la ropa?", "La lavadora."),
    L3.b("Di una máquina sencilla del parque.", "El balancín o el tobogán."),
    L3.m("Clasifica: escoba, nevera, patinete, televisión. ¿Fuerza o electricidad?", "Fuerza: escoba y patinete. Electricidad: nevera y televisión."),
    L3.m("¿Dónde tiramos las pilas gastadas?", "En un contenedor especial para pilas."),
    L3.m("Di dos normas para usar las máquinas sin peligro.", "No tocar enchufes y no tocar aparatos con las manos mojadas."),
    L3.m("Di dos piezas de una bicicleta.", "Por ejemplo: las ruedas y los pedales."),
    L3.a("Dibuja una máquina inventada por ti y di para qué sirve.", "Dibujo libre; debe explicar qué trabajo hace."),
    L3.a("Pregunta a un abuelo qué máquina no tenía de pequeño.", "Por ejemplo: el móvil, el ordenador o la tableta."),
    L3.a("¿Por qué la rueda es un invento tan importante?", "Porque ayuda a mover cosas pesadas y está en coches, bicis y carros."),
    L3.a("Haz una lista de las máquinas que usas en un día.", "Por ejemplo: el cepillo eléctrico, la nevera, el ascensor y el coche."),
    L3.a("Explica cómo ahorrar energía en casa.", "Apagar luces, televisión y cargadores cuando no se usan."),
  ],
  quiz: [
    { q: "Una máquina sirve para…", o: ["hacer trabajos con menos esfuerzo", "comer", "dormir"], a: 0, e: "Nos ayuda a trabajar." },
    { q: "¿Cuál es una máquina sencilla?", o: ["La rueda", "El coche", "El ordenador"], a: 0, e: "Tiene muy pocas piezas." },
    { q: "La bicicleta funciona con…", o: ["electricidad", "nuestra fuerza", "pilas"], a: 1, e: "Pedaleamos con las piernas." },
    { q: "¿Qué máquina enfría la comida?", o: ["El horno", "La nevera", "La lavadora"], a: 1, e: "La nevera." },
    { q: "Un mando a distancia funciona con…", o: ["pilas", "agua", "fuerza"], a: 0, e: "Lleva pilas." },
    { q: "La rampa sirve para…", o: ["subir cosas sin levantarlas", "cortar papel", "lavar"], a: 0, e: "Es una máquina sencilla." },
    { q: "Con las manos mojadas…", o: ["tocamos los enchufes", "no tocamos aparatos eléctricos", "encendemos la tele"], a: 1, e: "Es peligroso." },
    { q: "La lavadora, la nevera y el horno son…", o: ["electrodomésticos", "animales", "juguetes"], a: 0, e: "Máquinas de casa con electricidad." },
    { q: "Antes de la lavadora, la ropa se lavaba…", o: ["a mano", "con el ordenador", "en el horno"], a: 0, e: "A mano, en el río." },
    { q: "Para ahorrar energía…", o: ["dejamos la luz encendida", "apagamos la luz", "abrimos la nevera"], a: 1, e: "Apagamos lo que no usamos." },
    L3.Q("Las pilas gastadas van…", ["a un contenedor especial", "a la basura normal", "al río"], 0, "Contaminan si no se reciclan."),
    L3.Q("El tobogán del parque es una…", ["rampa", "nevera", "pila"], 0, "Es una rampa para bajar."),
  ],
  examen: [
    { q: "¿Qué máquina tiene muchas piezas?", o: ["La rueda", "La bicicleta", "La rampa"], a: 1, e: "Ruedas, pedales, cadena…" },
    { q: "El ordenador funciona con…", o: ["electricidad", "nuestra fuerza", "agua"], a: 0, e: "Se enchufa o lleva batería." },
    { q: "El balancín del parque es una…", o: ["palanca", "nevera", "pila"], a: 0, e: "Es una máquina sencilla." },
    { q: "Si una máquina se rompe…", o: ["la arreglo solo", "aviso a un adulto", "la enchufo"], a: 1, e: "Siempre avisamos a un adulto." },
    L3.Q("¿Qué máquina sencilla ayuda a mover cosas?", ["La rueda", "La lana", "La piedra"], 0, "Carritos, coches y patinetes."),
    L3.Q("Las tijeras funcionan con…", ["nuestra fuerza", "electricidad", "pilas"], 0, "Las movemos con la mano."),
  ],
  feynman: ["Qué es una máquina", "Máquinas sencillas y con muchas piezas", "Cómo usamos las máquinas con seguridad"],
  mapa: mapa("LAS MÁQUINAS", "var(--pri)", [
    ["Sencillas", "rueda · rampa · palanca", "var(--pen)"],
    ["Muchas piezas", "bici · coche · lavadora", "var(--red)"],
    ["Energía", "fuerza · electricidad · pilas", "#b8860b"],
    ["Seguridad", "enchufes · calor · avisar", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["¿Qué es una máquina?", "Un objeto que nos ayuda a trabajar con menos esfuerzo"],
    ["Di tres máquinas sencillas", "Rueda, rampa y palanca"],
    ["¿Qué máquina tiene pedales y cadena?", "La bicicleta"],
    ["¿Qué es un electrodoméstico?", "Una máquina de casa que usa electricidad"],
    ["¿Con qué funcionan las máquinas?", "Con fuerza, electricidad o pilas"],
    ["¿Qué hay en el cole?", "Ordenadores, tabletas y pizarras digitales"],
    ["¿Se tocan los enchufes?", "Nunca, y menos con las manos mojadas"],
    ["¿Cómo ahorramos energía?", "Apagando lo que no usamos"],
    ["¿Dónde van las pilas gastadas?", "A un contenedor especial"],
    ["¿Qué máquina sencilla hay en el tobogán?", "Una rampa"],
  ],
  glosario: [
    ["Máquina", "Objeto que nos ayuda a hacer un trabajo."],
    ["Máquina sencilla", "Máquina con pocas piezas, como la rueda."],
    ["Rueda", "Pieza redonda que gira y ayuda a mover cosas."],
    ["Rampa", "Superficie inclinada para subir o bajar cosas."],
    ["Palanca", "Barra que ayuda a levantar peso, como el balancín."],
    ["Electrodoméstico", "Máquina de casa que usa electricidad, como la nevera."],
    ["Electricidad", "Energía que llega por los enchufes."],
    ["Pila", "Objeto pequeño que da energía a algunas máquinas."],
    ["Tecnología", "Las máquinas e inventos que usamos cada día."],
  ],
  situacion: L3.sit("El taller de inventores", "Vamos a inventar y construir una máquina sencilla con materiales reutilizados.", ["Pensamos un problema: mover un juguete, subir una caja o levantar un peso.", "Elegimos una máquina sencilla: rueda, rampa o palanca.", "La construimos con cajas, tapones, palitos y cinta.", "Presentamos nuestro invento: qué hace y cómo funciona."], "Una máquina sencilla hecha con materiales reutilizados.", ["Elige una máquina sencilla adecuada.", "Explica para qué sirve su invento.", "Usa materiales reutilizados con cuidado."]),
  familias: [
    "Haced una «caza de máquinas» en casa y clasificadlas: fuerza, enchufe o pilas.",
    "Preguntad a los abuelos cómo se lavaba la ropa o se escuchaba música cuando eran pequeños.",
    "Revisad juntos las normas de seguridad con enchufes, horno y plancha.",
    "Encargadle apagar las luces de las habitaciones vacías.",
  ],
  profesores: {
    saberes: "Ciencias, Geografía e Historia: máquinas y aparatos del entorno, su función, la energía que usan y su uso seguro y responsable (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Construcción de un coche con tapones, pajitas y cartón.", "Rampa con libros para comparar el esfuerzo de subir una caja con y sin rampa.", "Línea del tiempo de inventos con objetos de casa de los abuelos."],
  },
  fuentes: [RD],
  revisado: "2026-11-14",
};
