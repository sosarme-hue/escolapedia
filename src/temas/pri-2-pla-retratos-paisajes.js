// Educación Plástica 2º de Primaria: retratos y paisajes. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, sol, luna, nube, arbol, casa, pajaro, estrella, flechaR, V, P, marco2, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
// Cara de retrato centrada en (x, y) con radio r.
const cara = (x, y, r = 30, pelo = P.marron, extra = "") => `<g transform="translate(${x} ${y})"><rect x="${-r * 0.35}" y="${r * 0.8}" width="${r * 0.7}" height="${r * 0.5}" fill="${P.piel}"/><path d="M${-r * 1.3} ${r * 1.9} q0 ${-r * 0.7} ${r * 1.3} ${-r * 0.7} q${r * 1.3} 0 ${r * 1.3} ${r * 0.7}z" fill="${P.azul}"/><ellipse rx="${r * 0.85}" ry="${r}" fill="${P.piel}" stroke="var(--ink)" stroke-width="1.5"/><path d="M${-r * 0.88} ${-r * 0.1} q0 ${-r * 1.05} ${r * 0.88} ${-r * 1.05} q${r * 0.88} 0 ${r * 0.88} ${r * 1.05} q${-r * 0.3} ${-r * 0.6} ${-r * 0.88} ${-r * 0.6} q${-r * 0.58} 0 ${-r * 0.88} ${r * 0.6}z" fill="${pelo}"/><circle cx="${-r * 0.3}" cy="${r * 0.05}" r="${r * 0.08}" fill="var(--ink)"/><circle cx="${r * 0.3}" cy="${r * 0.05}" r="${r * 0.08}" fill="var(--ink)"/><path d="M0 ${r * 0.15} v${r * 0.25}" stroke="var(--ink)" stroke-width="1.5"/><path d="M${-r * 0.25} ${r * 0.58} q${r * 0.25} ${r * 0.2} ${r * 0.5} 0" stroke="var(--ink)" stroke-width="2" fill="none"/>${extra}</g>`;
const montana = (x, y, w, h, c) => `<path d="M${x - w / 2} ${y} L${x} ${y - h} L${x + w / 2} ${y}z" fill="${c}" stroke="var(--ink)" stroke-width="1"/><path d="M${x - w * 0.12} ${y - h * 0.76} L${x} ${y - h} L${x + w * 0.12} ${y - h * 0.76} l${-w * 0.06} 6 l${-w * 0.06} -6 l${-w * 0.06} 6z" fill="#fff"/>`;
const chip = (x, y, t) => `<rect x="${x - 30}" y="${y - 12}" width="60" height="16" rx="8" fill="var(--card)" opacity=".9"/>${etq(x, y, t, "var(--ink)", 11)}`;

module.exports = {
  materia: "Educación Plástica",
  curso: "2-primaria",
  titulo: "Retratos y paisajes",
  minutos: 25,
  objetivos: ["Saber qué es un retrato, un autorretrato y un paisaje", "Dibujar un retrato colocando bien ojos, nariz y boca", "Pintar un paisaje con cielo, horizonte, fondo y primer plano"],
  claves: ["retrato", "autorretrato", "paisaje", "horizonte", "primer plano", "fondo", "lejos", "cerca"],
  pregunta: {
    texto: "En los museos hay cuadros de personas y cuadros de montañas, playas o ciudades. ¿Sabes cómo se llama cada tipo?",
    respuesta: "Un cuadro de una persona es un <mark>retrato</mark>. Si el pintor se pinta a sí mismo, es un <b>autorretrato</b>. Un cuadro de un lugar es un <mark>paisaje</mark>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un retrato?</h3><p>Un <mark>retrato</mark> es un dibujo o una pintura de una persona.</p><p>Puede ser solo de la cara, de medio cuerpo o del cuerpo entero. El pintor intenta que se parezca a esa persona y que se note cómo es.</p><p>Antes de existir las fotos, la gente se hacía retratos para recordar cómo era. ¡Algunos tardaban meses en pintarse!</p>`,
      svg: svg("Tres retratos enmarcados: solo la cara, medio cuerpo y cuerpo entero", `${marco2(14, 26, 70, 92, cara(49, 66, 22, P.negro))}${marco2(96, 26, 70, 92, cara(131, 62, 16, P.amarillo))}${marco2(178, 26, 70, 92, `<g transform="translate(213 108)"><path d="M-6 0 v-20 M6 0 v-20" stroke="${P.gris}" stroke-width="5"/><rect x="-11" y="-46" width="22" height="28" rx="5" fill="${P.rojo}"/><circle cx="0" cy="-56" r="9" fill="${P.piel}" stroke="var(--ink)"/><path d="M-9 -58 q9 -12 18 0" fill="${P.marron}"/></g>`)}${etq(49, 140, "cara")}${etq(131, 140, "medio")}${etq(213, 140, "entero")}${etq(130, 162, "Tres tipos de retrato", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>Dónde va cada cosa</h3><p>Para dibujar una cara usamos un <mark>truco de medidas</mark>.</p><p>Dibuja un óvalo, como un huevo. Traza una línea suave por la <b>mitad</b>: ahí van los ojos.</p><p>La nariz va entre los ojos y la barbilla. La boca, un poco más abajo de la nariz. Las orejas van a la altura de los ojos y la nariz. ¡Los ojos no van en la frente!</p>`,
      svg: svg("Guía de la cara: un óvalo con una línea en la mitad donde van los ojos, y marcas para la nariz y la boca", `<ellipse cx="90" cy="92" rx="48" ry="62" fill="${P.piel}" stroke="var(--ink)" stroke-width="2"/><path d="M42 92 H138" stroke="${P.rojo}" stroke-width="2" stroke-dasharray="5 4"/><path d="M90 30 V154" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="3 4"/><ellipse cx="70" cy="92" rx="8" ry="5" fill="#fff" stroke="var(--ink)"/><circle cx="70" cy="92" r="3" fill="var(--ink)"/><ellipse cx="110" cy="92" rx="8" ry="5" fill="#fff" stroke="var(--ink)"/><circle cx="110" cy="92" r="3" fill="var(--ink)"/><path d="M86 106 q4 14 -2 18 h10" stroke="var(--ink)" stroke-width="2" fill="none"/><path d="M76 134 q14 8 28 0" stroke="${P.rojo}" stroke-width="3" fill="none"/><ellipse cx="40" cy="104" rx="6" ry="12" fill="${P.piel}" stroke="var(--ink)"/><ellipse cx="140" cy="104" rx="6" ry="12" fill="${P.piel}" stroke="var(--ink)"/>${flechaR(196, 92, 146, 92, P.rojo)}${etq(214, 82, "ojos en", P.rojo)}${etq(214, 98, "la mitad", P.rojo)}${etq(214, 128, "nariz y boca", "var(--muted)")}${etq(214, 144, "más abajo", "var(--muted)")}`),
    },
    {
      html: `<h3>El autorretrato</h3><p>Cuando un artista <mark>se pinta a sí mismo</mark>, hace un autorretrato.</p><p>Para hacerlo, se mira en un espejo y dibuja lo que ve. Así puede fijarse en su pelo, el color de sus ojos o sus pecas.</p><p>Algunos pintores hicieron muchísimos autorretratos a lo largo de su vida. Prueba tú: mírate en un espejo y dibuja tu cara con cuidado.</p>`,
      svg: svg("Una niña se mira en un espejo y se dibuja en un papel", `${cara(60, 76, 28, P.amarillo)}<ellipse cx="154" cy="76" rx="36" ry="46" fill="${P.celeste}" opacity=".5" stroke="#9aa5c0" stroke-width="5"/>${cara(154, 70, 20, P.amarillo)}<rect x="196" y="56" width="52" height="66" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${cara(222, 82, 13, P.amarillo)}${etq(60, 160, "yo")}${etq(154, 160, "espejo")}${etq(222, 160, "mi dibujo")}`),
      video: V("pl7b"),
    },
    {
      html: `<h3>¿Qué es un paisaje?</h3><p>Un <mark>paisaje</mark> es un dibujo o una pintura de un lugar.</p><p>Puede ser un paisaje de <b>montaña</b>, con picos y nieve. De <b>costa</b>, con mar y playa. De <b>campo</b>, con árboles y prados. O de <b>ciudad</b>, con edificios y calles.</p><p>Muchos pintores salen al aire libre con su caballete para pintar lo que ven. ¿Qué paisaje ves desde tu ventana?</p>`,
      svg: svg("Cuatro paisajes pequeños: montaña, mar, campo y ciudad", `${[0, 1, 2, 3].map((i) => { const x = 14 + (i % 2) * 120, y = 14 + Math.floor(i / 2) * 78; return `<rect x="${x}" y="${y}" width="112" height="70" rx="6" fill="${P.celeste}" opacity=".5"/>`; }).join("")}${montana(70, 72, 70, 50, P.morado)}${montana(96, 72, 50, 34, "#7e57c2")}<rect x="134" y="54" width="112" height="30" fill="${P.azul}" opacity=".7"/><rect x="134" y="72" width="112" height="12" fill="${P.amarillo}"/>${sol(220, 32, 10)}<rect x="14" y="134" width="112" height="28" fill="${P.verde}" opacity=".8"/>${arbol(50, 140, 0.7)}${arbol(90, 140, 0.6)}${[0, 1, 2, 3].map((i) => `<rect x="${144 + i * 24}" y="${110 - (i % 2) * 18}" width="20" height="${52 + (i % 2) * 18}" fill="${[P.gris, P.rojo, P.naranja, P.gris][i]}" stroke="var(--ink)"/>`).join("")}${chip(46, 32, "montaña")}${chip(166, 32, "costa")}${chip(46, 110, "campo")}${chip(220, 110, "ciudad")}`),
    },
    {
      html: `<h3>La línea del horizonte</h3><p>En un paisaje, la línea donde parece que <mark>el cielo toca la tierra</mark> o el mar se llama horizonte.</p><p>Es lo primero que dibujamos: una línea recta de lado a lado.</p><p>Si la pones baja, se ve mucho cielo. Si la pones alta, se ve mucho suelo. Arriba del horizonte pintamos el cielo; abajo, la tierra o el agua.</p>`,
      svg: svg("Dos paisajes: uno con el horizonte bajo y mucho cielo y otro con el horizonte alto y mucho suelo", `<rect x="14" y="30" width="110" height="110" fill="${P.celeste}" opacity=".6"/><rect x="14" y="114" width="110" height="26" fill="${P.verde}" opacity=".8"/><path d="M14 114 H124" stroke="${P.rojo}" stroke-width="3"/>${nube(60, 60, 0.7)}${sol(100, 50, 10)}<rect x="136" y="30" width="110" height="110" fill="${P.verde}" opacity=".8"/><rect x="136" y="30" width="110" height="26" fill="${P.celeste}" opacity=".6"/><path d="M136 56 H246" stroke="${P.rojo}" stroke-width="3"/>${arbol(170, 110, 0.7)}${arbol(212, 128, 0.8)}${etq(69, 160, "horizonte bajo")}${etq(191, 160, "horizonte alto")}`),
    },
    {
      html: `<h3>Cerca y lejos</h3><p>Las cosas que están <mark>cerca</mark> se ven grandes y con muchos detalles. Están en el primer plano, abajo del dibujo.</p><p>Las cosas que están <mark>lejos</mark> se ven pequeñas y más claras. Están al fondo, cerca del horizonte.</p><p>Por eso, un árbol cercano se dibuja grande y uno lejano, pequeñito. ¡Así el dibujo parece tener profundidad!</p>`,
      svg: svg("Un camino que se estrecha hacia el horizonte con un árbol grande cerca y árboles pequeños lejos", `<rect x="14" y="14" width="232" height="70" fill="${P.celeste}" opacity=".6"/><rect x="14" y="84" width="232" height="82" fill="${P.verde}" opacity=".7"/><path d="M110 166 L126 84 h8 L150 166z" fill="#d8b47a"/>${arbol(60, 160, 1.6)}${arbol(176, 100, 0.5)}${arbol(196, 96, 0.4)}${arbol(98, 96, 0.4)}${etq(56, 32, "cerca: grande", "var(--ink)", 12)}${etq(196, 32, "lejos: pequeño", "var(--ink)", 12)}`),
    },
    {
      html: `<h3>Colores del paisaje</h3><p>El mismo paisaje cambia de <mark>color</mark> según la hora y la estación.</p><p>Al mediodía el cielo es azul y todo brilla. Al atardecer el cielo se pone naranja, rosa y morado. De noche, azul oscuro con estrellas.</p><p>En otoño los árboles son marrones y naranjas; en primavera, verdes y con flores. Elige un momento y píntalo con sus colores.</p>`,
      svg: svg("El mismo paisaje de día, al atardecer y de noche", `${[[`${P.celeste}`, sol(60, 40, 10), "día"], [P.naranja, sol(130, 70, 12), "atardecer"], ["#1a237e", `${luna(200, 40, 10)}${estrella(222, 30, 4, "#fff")}${estrella(176, 52, 3, "#fff")}`, "noche"]].map(([c, d, t], i) => `<rect x="${14 + i * 78}" y="20" width="72" height="110" rx="6" fill="${c}" opacity=".85"/>${d}<path d="M${14 + i * 78} 100 l20 -20 l18 14 l16 -18 l18 24 v30 h-72z" fill="${i === 2 ? "#1b3a1d" : P.verde}"/>${etq(50 + i * 78, 152, t)}`).join("")}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los retratos y los paisajes nos sirven para <mark>recordar personas y lugares</mark>.</p><p>Gracias a los retratos antiguos sabemos cómo vestían los reyes. Gracias a los paisajes vemos cómo eran las ciudades hace siglos.</p><p>Hoy hacemos lo mismo con fotos y selfis, que son autorretratos con el móvil. ¡Pero dibujar te hace mirar con más atención!</p>`,
      svg: svg("Un retrato antiguo de una reina con corona y un paisaje antiguo de una ciudad con castillo", `${marco2(20, 20, 100, 128, cara(70, 72, 24, P.marron, `<path d="M-18 -26 l6 -14 l6 8 l6 -12 l6 12 l6 -8 l6 14z" fill="${P.amarillo}" stroke="var(--ink)"/>`), "#b8860b")}${marco2(136, 34, 108, 90, `<rect x="142" y="40" width="96" height="78" fill="${P.celeste}" opacity=".5"/><rect x="142" y="96" width="96" height="22" fill="${P.verde}" opacity=".7"/><rect x="170" y="66" width="40" height="32" fill="${P.gris}" stroke="var(--ink)"/><rect x="164" y="56" width="12" height="42" fill="${P.gris}" stroke="var(--ink)"/><rect x="204" y="56" width="12" height="42" fill="${P.gris}" stroke="var(--ink)"/>`, "#b8860b")}${etq(70, 166, "retrato")}${etq(190, 146, "paisaje")}`),
    },
    {
      html: `<h3>Jugamos al retrato a ciegas</h3><p>Nos ponemos <mark>por parejas</mark>, uno enfrente del otro.</p><p>Cada uno dibuja la cara de su compañero <b>sin mirar el papel</b>, solo mirando su cara. ¡No vale espiar!</p><p>Los retratos salen muy divertidos, con ojos fuera de sitio y narices torcidas. Después hacemos otro mirando el papel y comparamos los dos. ¿Cuál se parece más?</p>`,
      svg: svg("Dos retratos del mismo niño: uno a ciegas, divertido y torcido, y otro mirando el papel", `<rect x="14" y="20" width="110" height="124" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><path d="M40 60 q-10 50 24 60 q40 6 36 -40 q-8 -40 -40 -30" stroke="var(--ink)" stroke-width="2" fill="none"/><circle cx="56" cy="64" r="4" fill="var(--ink)"/><circle cx="92" cy="80" r="4" fill="var(--ink)"/><path d="M70 82 l10 14" stroke="var(--ink)" stroke-width="2"/><path d="M54 110 q20 -10 30 6" stroke="var(--ink)" stroke-width="2" fill="none"/><rect x="136" y="20" width="110" height="124" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${cara(191, 70, 26, P.negro)}${etq(69, 162, "a ciegas")}${etq(191, 162, "mirando")}`),
    },
  ],
  figura: {
    titulo: "Retratos y paisajes",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="A la izquierda un retrato con la guía de la cara; a la derecha un paisaje con horizonte, fondo y primer plano"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${marco2(40, 40, 200, 220, cara(140, 130, 52, P.marron))}${rot(140, 284, "Retrato: una persona", { size: 16 })}<rect x="290" y="40" width="310" height="220" rx="6" fill="${P.celeste}" opacity=".6"/><rect x="290" y="150" width="310" height="110" fill="${P.verde}" opacity=".75"/><path d="M290 150 H600" stroke="${P.rojo}" stroke-width="3"/>${montana(520, 150, 120, 70, P.morado)}${arbol(360, 250, 2)}${arbol(470, 160, 0.5)}${sol(560, 80, 18)}${pajaro(420, 80)}${pajaro(445, 92)}${rot(360, 142, "horizonte", { size: 13, color: P.rojo })}${rot(330, 70, "fondo", { size: 13 })}${rot(430, 240, "primer plano", { size: 13 })}${rot(445, 284, "Paisaje: un lugar", { size: 16 })}</svg>`,
  },
  video: V("pl7v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Dibuja la cara de tu mejor amigo.",
      pasos: ["Haz un óvalo y una línea suave en la mitad.", "Pon los ojos en esa línea y la nariz y la boca debajo.", "Añade su pelo, sus pecas o sus gafas."],
      resultado: "Un retrato con las facciones bien colocadas." },
    { enunciado: "Pinta un paisaje de playa.",
      pasos: ["Traza la línea del horizonte.", "Arriba pinta el cielo; abajo, el mar y la arena.", "Pon una sombrilla grande cerca y un barco pequeño lejos."],
      resultado: "Un paisaje de costa con profundidad." },
    { enunciado: "¿Por qué una montaña lejana se pinta pequeña y clara?",
      pasos: ["Las cosas lejanas se ven más pequeñas.", "Entre ellas y nosotros hay mucho aire.", "Por eso parecen más claras y azuladas."],
      resultado: "Para que el paisaje tenga profundidad." },
  ],
  errores: [
    "Poner los ojos en la frente: van en la mitad de la cabeza.",
    "Dibujar todos los árboles del mismo tamaño: los lejanos son más pequeños.",
    "Olvidar la línea del horizonte: el paisaje queda flotando.",
    "Llamar paisaje a un retrato: el retrato es de una persona, el paisaje de un lugar.",
  ],
  ejercicios: [
    { q: "¿Qué es un retrato?", sol: "Un dibujo o pintura de una persona." },
    { q: "¿Qué es un autorretrato?", sol: "Un retrato que el artista hace de sí mismo." },
    { q: "¿Qué es un paisaje?", sol: "Un dibujo o pintura de un lugar." },
    { q: "¿Dónde van los ojos en la cara?", sol: "En la mitad de la cabeza." },
    { q: "¿Qué es la línea del horizonte?", sol: "La línea donde parece que el cielo toca la tierra o el mar." },
    { q: "¿Cómo se dibuja un árbol lejano?", sol: "Más pequeño y con menos detalles." },
    { q: "Di tres tipos de paisaje.", sol: "Montaña, costa, campo o ciudad." },
    { q: "¿De qué color es el cielo al atardecer?", sol: "Naranja, rosa y morado." },
    { q: "Haz tu autorretrato mirándote en un espejo.", sol: "Respuesta libre." },
    { q: "Pinta el paisaje que ves desde tu ventana.", sol: "Respuesta libre: con horizonte, fondo y primer plano." },
  ],
  quiz: [
    { q: "Un cuadro de una persona es un…", o: ["retrato", "paisaje", "bodegón"], a: 0, e: "Retrato." },
    { q: "Si el pintor se pinta a sí mismo hace un…", o: ["autorretrato", "paisaje", "collage"], a: 0, e: "Autorretrato." },
    { q: "Un cuadro de un lugar es un…", o: ["retrato", "paisaje", "cómic"], a: 1, e: "Paisaje." },
    { q: "Los ojos van…", o: ["en la frente", "en la mitad de la cabeza", "en la barbilla"], a: 1, e: "En la mitad." },
    { q: "Para un autorretrato usamos…", o: ["un espejo", "una regla", "un mapa"], a: 0, e: "Un espejo." },
    { q: "La línea donde el cielo toca la tierra es…", o: ["el horizonte", "la cenefa", "el contorno"], a: 0, e: "El horizonte." },
    { q: "Lo que está lejos se dibuja…", o: ["más pequeño", "más grande", "igual"], a: 0, e: "Más pequeño." },
    { q: "El primer plano está…", o: ["cerca, abajo del dibujo", "en el cielo", "en el horizonte"], a: 0, e: "Cerca." },
    { q: "Un paisaje de costa tiene…", o: ["mar y playa", "rascacielos", "nieve"], a: 0, e: "Mar y playa." },
    { q: "Un selfi es un…", o: ["autorretrato", "paisaje", "collage"], a: 0, e: "Te retratas a ti mismo." },
  ],
  examen: [
    { q: "Si pones el horizonte bajo, se ve mucho…", o: ["cielo", "suelo", "mar"], a: 0, e: "Mucho cielo." },
    { q: "La nariz va entre…", o: ["los ojos y la barbilla", "las orejas y el pelo", "la frente y el pelo"], a: 0, e: "En el centro de la parte baja." },
    { q: "Un paisaje de noche se pinta con…", o: ["azul oscuro y estrellas", "amarillo brillante", "verde claro"], a: 0, e: "Colores oscuros." },
    { q: "Antes de las fotos, los retratos servían para…", o: ["recordar cómo era la gente", "medir casas", "jugar"], a: 0, e: "Recordar." },
  ],
  feynman: ["Qué diferencia hay entre retrato, autorretrato y paisaje", "Dónde se colocan ojos, nariz y boca", "Cómo se pinta lo cercano y lo lejano en un paisaje"],
  mapa: mapa("RETRATOS Y PAISAJES", "var(--pri)", [
    ["Retrato", "una persona", "#e53935"],
    ["Autorretrato", "me pinto a mí: espejo", "#1e88e5"],
    ["Paisaje", "un lugar: horizonte", "#43a047"],
    ["Profundidad", "cerca grande, lejos pequeño", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Retrato", "Dibujo o pintura de una persona"],
    ["Autorretrato", "El artista se pinta a sí mismo"],
    ["Paisaje", "Dibujo o pintura de un lugar"],
    ["Ojos", "En la mitad de la cabeza"],
    ["Horizonte", "Línea donde el cielo toca la tierra o el mar"],
    ["Primer plano", "Lo que está cerca: grande y con detalles"],
    ["Fondo", "Lo que está lejos: pequeño y más claro"],
    ["Tipos de paisaje", "Montaña, costa, campo y ciudad"],
  ],
  familias: [
    "Haced retratos a ciegas en familia y reíros con el resultado.",
    "Dibujad un autorretrato cada uno mirándoos en el espejo.",
    "En una excursión, pintad el paisaje con su horizonte.",
    "Mirad fotos antiguas de la familia y comparadlas con un retrato dibujado.",
  ],
  profesores: PROF("Educación Plástica y Visual: géneros artísticos (retrato, autorretrato, paisaje); proporciones del rostro; línea de horizonte; planos y profundidad; el color según la luz del día", ["Retrato a ciegas por parejas.", "Autorretrato con espejo.", "Paisaje por planos con horizonte marcado."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
