// Religión 1º de Primaria: la Semana Santa.
const { mapa } = require("./_util");
const { svg, rot, big, nino, sol, cruz, vela, corazon, suelo, PROF, FUENTES } = require("./_pri1-dib");

const MADERA = "#8a5a2b";
const jesus = (x, y, s = 1.1, pose = "brazos") => `${nino(x, y, { c: "var(--red)", nina: true, pelo: "#5b3a1e", s, pose })}<path d="M${x - 9 * s} ${y - 61 * s} q${9 * s} ${14 * s} ${18 * s} 0 q${-3 * s} ${4 * s} ${-9 * s} ${4 * s} q${-6 * s} 0 ${-9 * s} ${-4 * s}z" fill="#5b3a1e"/>`;
const palma = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 V-40" stroke="var(--leaf)" stroke-width="3"/>${[-34, -26, -18, -10].map((yy) => `<path d="M0 ${yy} q-12 -2 -16 6 M0 ${yy} q12 -2 16 6" stroke="var(--leaf)" stroke-width="3" fill="none"/>`).join("")}</g>`;
const pan = (x, y) => `<g><ellipse cx="${x}" cy="${y}" rx="18" ry="10" fill="#d9a35b"/><path d="M${x - 8} ${y - 4} l4 6 M${x} ${y - 6} l4 6 M${x + 8} ${y - 4} l4 6" stroke="#a8763a" stroke-width="2"/></g>`;
const copa = (x, y) => `<path d="M${x - 10} ${y - 30} h20 q0 16 -10 18 v10 h8 v4 h-16 v-4 h8 v-10 q-10 -2 -10 -18z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/>`;
const huevo = (x, y, c) => `<g><ellipse cx="${x}" cy="${y}" rx="11" ry="14" fill="${c}"/><path d="M${x - 10} ${y} q5 -4 10 0 q5 4 10 0" stroke="#fff" stroke-width="2" fill="none"/></g>`;

module.exports = {
  materia: "Religión",
  curso: "1-primaria",
  titulo: "La Semana Santa",
  minutos: 20,
  objetivos: ["Conocer los días principales de la Semana Santa", "Saber que Jesús murió y resucitó por amor", "Aprender a perdonar y a empezar de nuevo"],
  claves: ["Semana Santa", "Domingo de Ramos", "Última Cena", "cruz", "resurrección", "Pascua"],
  pregunta: {
    texto: "En primavera hay unas vacaciones con procesiones y palmas. ¿Qué recordamos esos días?",
    respuesta: "Es la <mark>Semana Santa</mark>. Recordamos los últimos días de Jesús y la gran alegría de su <mark>resurrección</mark>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la Semana Santa?</h3><p>La Semana Santa es una semana <mark>muy importante</mark> para los cristianos.</p><p>Llega en <b>primavera</b>, cada año en una fecha un poco distinta.</p><p>Recordamos lo que vivió Jesús en sus <b>últimos días</b>. Hubo momentos alegres y momentos tristes. Pero termina con la noticia más feliz: ¡Jesús <mark>vive</mark>!</p><p>En muchos pueblos hay <b>procesiones</b> por las calles.</p>`,
      svg: svg("Una semana de siete días con una palma el primer día, pan el jueves, una cruz el viernes y un sol el domingo", `${["D", "L", "M", "X", "J", "V", "S", "D"].slice(0, 8).map((d, i) => `<rect x="${10 + i * 30.5}" y="40" width="28" height="70" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${big(24 + i * 30.5, 62, d, "var(--muted)", 15)}`).join("")}${palma(24, 104, 0.6)}${pan(146, 90).replace(/rx="18" ry="10"/, 'rx="11" ry="7"')}${cruz(176, 102, 0.6)}${sol(237, 88, 5)}${rot(130, 146, "Una semana para recordar", { color: "var(--pen)", size: 14 })}`),
    },
    {
      html: `<h3>El Domingo de Ramos</h3><p>Jesús llegó a la ciudad de <b>Jerusalén</b> montado en un <mark>burrito</mark>.</p><p>La gente estaba muy contenta. Movían <b>palmas</b> y ramos de olivo. Gritaban: «¡Hosanna! ¡Bendito el que viene!».</p><p>Hoy, ese domingo, muchos niños llevan palmas o ramos a la iglesia. Así recordamos aquella fiesta.</p><p>Algunos ramos se guardan en casa todo el año.</p>`,
      svg: svg("Jesús montado en un burro y personas con palmas que lo saludan", `<g transform="translate(90 150)"><ellipse cx="0" cy="-30" rx="34" ry="14" fill="var(--muted)"/><path d="M-24 -20 V0 M-12 -20 V0 M12 -20 V0 M24 -20 V0" stroke="var(--muted)" stroke-width="5" stroke-linecap="round"/><path d="M26 -36 l14 -18 l10 4 l-8 14z" fill="var(--muted)"/></g>${jesus(90, 112, 0.75, "sentado")}${nino(175, 150, { c: "var(--pen)", pose: "arriba", s: 0.85 })}${palma(187, 94, 0.7)}${nino(225, 150, { c: "var(--inf)", nina: true, pose: "arriba", s: 0.75 })}${palma(236, 102, 0.6)}${suelo(150)}${rot(130, 172, "«¡Hosanna!»", { color: "var(--leaf)" })}`),
      video: { id: "FrASuqLwJvo", titulo: "Domingo de Ramos para niños", canal: "Comunidad Catolikids", vistas: 134871 },
    },
    {
      html: `<h3>La Última Cena</h3><p>El <b>Jueves Santo</b>, Jesús cenó con sus doce amigos.</p><p>Antes de cenar, les <mark>lavó los pies</mark>. Quería enseñarles a servir a los demás.</p><p>Después tomó el <b>pan</b> y el <b>vino</b>, dio gracias y lo repartió. Les dijo: «Haced esto en memoria mía». Por eso los cristianos celebran la misa.</p><p>Fue la última vez que cenaron juntos antes de la cruz.</p>`,
      svg: svg("Una mesa con pan y una copa, y Jesús detrás repartiendo el pan", `${jesus(130, 118, 1, "palmas")}<rect x="30" y="110" width="200" height="12" rx="3" fill="${MADERA}"/><rect x="44" y="122" width="8" height="30" fill="${MADERA}"/><rect x="208" y="122" width="8" height="30" fill="${MADERA}"/>${pan(80, 102)}${copa(180, 110)}${suelo(152)}${rot(130, 172, "Jueves Santo", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>El Viernes Santo</h3><p>Algunas personas no querían a Jesús. Lo <b>condenaron</b> a morir en una <mark>cruz</mark>.</p><p>Fue un día muy triste. María y algunos amigos se quedaron con él.</p><p>Jesús no se enfadó. Al contrario, <mark>perdonó</mark> a todos. Los cristianos creemos que dio su vida <b>por amor</b> a todos.</p><p>Ese día, en las iglesias, se reza en silencio.</p>`,
      svg: svg("Una cruz sencilla sobre una colina, con un cielo gris", `<rect x="14" y="14" width="232" height="120" rx="10" fill="var(--line)" opacity=".6"/><path d="M14 150 Q130 90 246 150z" fill="var(--leaf)" opacity=".75"/>${cruz(130, 104, 2)}${corazon(200, 50, 1.3)}${rot(130, 170, "Jesús dio su vida por amor", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>¡Jesús ha resucitado!</h3><p>El <b>domingo</b> muy temprano, unas mujeres fueron al <b>sepulcro</b>.</p><p>¡La piedra de la entrada estaba quitada! El sepulcro estaba <mark>vacío</mark>.</p><p>Un ángel les dijo: «No está aquí. <mark>¡Ha resucitado!</mark>». Resucitar es volver a la vida. Las mujeres corrieron a contarlo, llenas de alegría.</p><p>Esta es la mejor noticia de toda la Biblia.</p>`,
      svg: svg("Un sepulcro en la roca con la piedra redonda apartada y el sol saliendo", `${sol(210, 50, 18)}<path d="M20 150 V90 q0 -40 60 -40 q60 0 60 40 V150z" fill="var(--muted)"/><path d="M58 150 V110 a22 22 0 0 1 44 0 V150z" fill="#1c2550"/><circle cx="160" cy="124" r="26" fill="#a5adbd" stroke="var(--ink)" stroke-width="2"/>${suelo(150)}${rot(130, 172, "¡El sepulcro está vacío!", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Jesús vive: la Pascua</h3><p>Después, Jesús se <b>apareció</b> a sus amigos. Comió con ellos y les habló.</p><p>Sus amigos estaban <mark>felicísimos</mark>. ¡Jesús estaba vivo!</p><p>Esta fiesta se llama <b>Pascua de Resurrección</b>. Es la fiesta más importante para los cristianos. Nos dice que el amor es más fuerte que la muerte.</p><p>Por eso en Pascua cantamos y celebramos con alegría.</p>`,
      svg: svg("Jesús resucitado con los brazos abiertos junto a dos amigos alegres y un sol brillante", `${sol(130, 40, 16)}${jesus(130, 150, 1.05, "arriba")}${nino(60, 150, { c: "var(--pen)", pose: "arriba", s: 0.9 })}${nino(200, 150, { c: "var(--inf)", nina: true, pose: "arriba", s: 0.9 })}${suelo(150)}${rot(130, 172, "¡Jesús vive!", { color: "var(--red)", size: 15 })}`),
    },
    {
      html: `<h3>Los símbolos de la Pascua</h3><p>La <b>palma</b> recuerda la entrada en Jerusalén. El <b>pan</b> y el vino recuerdan la Última Cena.</p><p>La <b>cruz</b> nos recuerda el amor de Jesús.</p><p>El <mark>cirio pascual</mark> es una vela grande que se enciende en Pascua. Significa que Jesús es luz. En Cataluña se regala la <b>mona de Pascua</b>. Suele llevar huevos de chocolate.</p>`,
      svg: svg("Cuatro símbolos: palma, pan, cruz y vela grande, más dos huevos de Pascua", `${palma(36, 110, 1.1)}${pan(86, 100)}${cruz(136, 110, 1.1)}${vela(186, 112)}${huevo(222, 100, "var(--inf)")}${huevo(240, 114, "var(--water)")}${["palma", "pan", "cruz", "cirio", "mona"].map((t, i) => rot([36, 86, 136, 186, 231][i], 140, t, { size: 12, color: "var(--muted)" })).join("")}${rot(130, 168, "Símbolos de Pascua", { color: "var(--pen)", size: 14 })}`),
    },
    {
      html: `<h3>¿Para qué sirve? Perdonar</h3><p>Jesús <mark>perdonó</mark> incluso a quienes le hicieron daño.</p><p>Nosotros también podemos perdonar. Si un amigo nos quita un juguete, hablamos y hacemos las paces.</p><p>Y si nos equivocamos, pedimos <b>perdón</b>. La Pascua nos enseña que siempre se puede <mark>empezar de nuevo</mark>.</p><p>Perdonar nos deja el corazón tranquilo y contento.</p>`,
      svg: svg("Dos niños se dan la mano y hacen las paces, con un corazón encima", `${nino(95, 150, { c: "var(--pen)", pose: "pie" })}${nino(165, 150, { c: "var(--inf)", nina: true, pose: "pie" })}<path d="M108 122 L130 112 L152 122" stroke="var(--muted)" stroke-width="4" fill="none" stroke-linecap="round"/>${corazon(130, 50, 2)}${suelo(150)}${rot(130, 172, "Hacemos las paces", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Juego: ordena la semana</h3><p>¿Recuerdas qué pasó cada día? Ponlos <mark>en orden</mark>.</p><p>1. <b>Domingo de Ramos</b>: palmas y alegría.</p><p>2. <b>Jueves Santo</b>: la Última Cena.</p><p>3. <b>Viernes Santo</b>: Jesús muere en la cruz.</p><p>4. <b>Domingo de Resurrección</b>: ¡Jesús vive!</p><p>Tapa los números y prueba otra vez.</p><p>¿Te acuerdas de todo?</p>`,
      svg: svg("Cuatro tarjetas numeradas: palma, pan, cruz y sol", `${[[palma(0, 0, 0.8), "Ramos"], [pan(0, -14), "Jueves"], [cruz(0, 2, 0.7), "Viernes"], [sol(0, -14, 10), "Domingo"]].map(([d, t], i) => `<rect x="${12 + i * 61}" y="30" width="54" height="100" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${big(39 + i * 61, 54, i + 1, "var(--pen)", 18)}<g transform="translate(${39 + i * 61} 104)">${d}</g>${rot(39 + i * 61, 124, t, { size: 11, color: "var(--muted)" })}`).join("")}${rot(130, 160, "¿Cuál va primero?", { color: "var(--pen)", size: 15 })}`),
    },
  ],
  figura: {
    titulo: "Los días de la Semana Santa",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Línea de cuatro días: Domingo de Ramos, Jueves Santo, Viernes Santo y Domingo de Resurrección con sus dibujos">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      <path d="M60 150 H580" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/>
      ${[["Domingo de Ramos", "palmas y alegría", palma(0, 0, 1.6), "var(--leaf)"], ["Jueves Santo", "Última Cena", `${pan(-14, -20)}${copa(22, -6)}`, "var(--sun)"], ["Viernes Santo", "la cruz", cruz(0, 6, 1.5), "#8a5a2b"], ["Domingo de Resurrección", "¡Jesús vive!", sol(0, -26, 22), "var(--red)"]].map(([t, d, dib, c], i) => {
        const x = 90 + i * 153;
        return `<circle cx="${x}" cy="150" r="12" fill="${c}"/><g transform="translate(${x} 118)">${dib}</g>${rot(x, 196, t.split(" de ")[0], { color: c, size: 16 })}${rot(x, 216, t.includes(" de ") ? "de " + t.split(" de ")[1] : "", { color: c, size: 16 })}${rot(x, 244, d, { size: 14, color: "var(--muted)" })}`;
      }).join("")}
    </svg>`,
  },
  video: { id: "kedaGPTc6EU", titulo: "Qué es la Semana Santa: explicación para niños de Primaria", canal: "Clases Particulares en Ávila", vistas: 359919, megusta: 3863, busqueda: "la semana santa explicada a los niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Por qué la gente movía palmas el Domingo de Ramos?",
      pasos: ["Jesús llegaba a Jerusalén en un burrito.", "La gente estaba contenta de verlo.", "Movían palmas y ramos para recibirlo con fiesta."],
      resultado: "para dar la bienvenida a Jesús con alegría." },
    { enunciado: "¿Qué hizo Jesús en la Última Cena?",
      pasos: ["Se reunió con sus doce amigos.", "Les lavó los pies para enseñarles a servir.", "Repartió el pan y el vino."],
      resultado: "lavó los pies a sus amigos y compartió el pan y el vino." },
    { enunciado: "¿Por qué la Pascua es una fiesta alegre?",
      pasos: ["El Viernes Santo Jesús murió en la cruz.", "El domingo, el sepulcro estaba vacío.", "Jesús había resucitado: volvía a vivir."],
      resultado: "porque celebramos que Jesús resucitó." },
  ],
  errores: [
    "Pensar que la Semana Santa termina triste: termina con la alegría de la resurrección.",
    "Confundir la Navidad con la Pascua: en Navidad nace Jesús; en Pascua resucita.",
    "Creer que resucitar es dormir: resucitar es volver a la vida.",
    "Pensar que perdonar es de débiles: Jesús nos enseñó que perdonar es de valientes.",
  ],
  ejercicios: [
    { q: "¿En qué estación del año es la Semana Santa?", sol: "En primavera." },
    { q: "¿En qué animal entró Jesús en Jerusalén?", sol: "En un burrito." },
    { q: "¿Qué llevaba la gente el Domingo de Ramos?", sol: "Palmas y ramos de olivo." },
    { q: "¿Qué compartió Jesús en la Última Cena?", sol: "El pan y el vino." },
    { q: "¿Qué hizo Jesús antes de cenar?", sol: "Lavó los pies a sus amigos." },
    { q: "¿Qué encontraron las mujeres el domingo?", sol: "El sepulcro vacío: Jesús había resucitado." },
    { q: "¿Qué significa resucitar?", sol: "Volver a la vida." },
    { q: "Dibuja una palma o un cirio de Pascua.", sol: "La palma tiene hojas largas; el cirio es una vela grande encendida." },
    { q: "Ordena: Viernes Santo · Domingo de Ramos · Domingo de Resurrección.", sol: "Domingo de Ramos → Viernes Santo → Domingo de Resurrección." },
    { q: "Di una situación en la que puedes perdonar.", sol: "Por ejemplo, cuando un amigo te quita un juguete y luego te pide perdón." },
  ],
  quiz: [
    { q: "¿Cuándo es la Semana Santa?", o: ["En primavera", "En verano", "En Navidad"], a: 0, e: "Es en primavera." },
    { q: "¿Cómo entró Jesús en Jerusalén?", o: ["En un caballo", "En un burrito", "Andando solo"], a: 1, e: "Montado en un burrito." },
    { q: "¿Qué movía la gente?", o: ["Palmas", "Paraguas", "Banderas"], a: 0, e: "Palmas y ramos de olivo." },
    { q: "¿Qué día fue la Última Cena?", o: ["Lunes", "Jueves Santo", "Sábado"], a: 1, e: "El Jueves Santo." },
    { q: "¿Qué compartió Jesús en la cena?", o: ["Pan y vino", "Pizza", "Fruta"], a: 0, e: "El pan y el vino." },
    { q: "¿Dónde murió Jesús?", o: ["En la cruz", "En el mar", "En Belén"], a: 0, e: "En la cruz, el Viernes Santo." },
    { q: "¿Qué hizo Jesús con quienes le hicieron daño?", o: ["Se vengó", "Los perdonó", "Gritó"], a: 1, e: "Jesús perdonó." },
    { q: "¿Cómo estaba el sepulcro el domingo?", o: ["Cerrado", "Vacío", "Lleno de flores"], a: 1, e: "Estaba vacío: Jesús resucitó." },
    { q: "Resucitar es…", o: ["volver a la vida", "irse de viaje", "dormir mucho"], a: 0, e: "Jesús volvió a la vida." },
    { q: "La fiesta más importante de los cristianos es…", o: ["la Pascua", "el carnaval", "el verano"], a: 0, e: "La Pascua de Resurrección." },
  ],
  examen: [
    { q: "¿Qué recordamos el Domingo de Ramos?", o: ["La entrada de Jesús en Jerusalén", "El nacimiento de Jesús", "Los Reyes Magos"], a: 0, e: "Jesús entra en Jerusalén entre palmas." },
    { q: "¿Qué celebramos el Domingo de Resurrección?", o: ["Que Jesús vive", "Que es verano", "Que nace Jesús"], a: 0, e: "Jesús ha resucitado." },
    { q: "¿Qué es el cirio pascual?", o: ["Una vela grande", "Un pan", "Una palma"], a: 0, e: "Una vela que significa que Jesús es luz." },
    { q: "La Pascua nos enseña a…", o: ["perdonar y empezar de nuevo", "enfadarnos", "no compartir"], a: 0, e: "Siempre se puede empezar de nuevo." },
  ],
  feynman: ["Qué pasó el Domingo de Ramos", "Qué hizo Jesús en la Última Cena", "Por qué la Pascua es una fiesta alegre"],
  mapa: mapa("LA SEMANA SANTA", "var(--pri)", [
    ["Domingo de Ramos", "palmas · «¡Hosanna!»", "var(--leaf)"],
    ["Jueves Santo", "Última Cena · pan y vino", "var(--inf)"],
    ["Viernes Santo", "la cruz · Jesús perdona", "#8a5a2b"],
    ["Resurrección", "¡Jesús vive! · Pascua", "var(--red)"],
  ], 230),
  tarjetas: [
    ["¿Cuándo es la Semana Santa?", "En primavera."],
    ["¿En qué entró Jesús en Jerusalén?", "En un burrito."],
    ["¿Qué movía la gente?", "Palmas y ramos de olivo."],
    ["¿Qué pasó el Jueves Santo?", "La Última Cena."],
    ["¿Qué pasó el Viernes Santo?", "Jesús murió en la cruz."],
    ["¿Qué pasó el domingo?", "¡Jesús resucitó!"],
    ["¿Qué es resucitar?", "Volver a la vida."],
    ["¿Qué nos enseña la Pascua?", "A perdonar y empezar de nuevo."],
  ],
  familias: [
    "Si vais a la iglesia el Domingo de Ramos, llevad una palma o un ramo de olivo.",
    "Haced juntos una mona de Pascua sencilla o decorad huevos cocidos.",
    "Usad el dibujo de los cuatro días para contar la historia en orden.",
    "Cuando haya una pequeña pelea en casa, practicad pedir perdón y perdonar.",
  ],
  profesores: PROF("Religión Católica, primer ciclo: los acontecimientos de la Semana Santa (entrada en Jerusalén, Última Cena, muerte y resurrección de Jesús), sus símbolos y el perdón como actitud cristiana. Área de opción dentro del marco del RD 157/2022", ["Línea del tiempo de la Semana Santa con dibujos del alumnado.", "Elaboración de palmas de papel para el Domingo de Ramos.", "Rincón del perdón: frases para hacer las paces en el aula."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
