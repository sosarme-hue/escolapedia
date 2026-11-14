// Religión 1º de Primaria: la Semana Santa.
const { mapa } = require("./_util");
const { svg, rot, big, nino, sol, cruz, vela, corazon, suelo, PROF, FUENTES } = require("./_pri1-dib");
const L3 = require("./_pri1L3");

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
  minutos: 50,
  objetivos: ["Conocer los días principales de la Semana Santa", "Saber que Jesús murió y resucitó por amor", "Aprender a perdonar y a empezar de nuevo"],
  claves: ["Semana Santa", "Domingo de Ramos", "Última Cena", "cruz", "resurrección", "Pascua"],
  pregunta: {
    texto: "En primavera hay unas vacaciones con procesiones y palmas. ¿Qué recordamos esos días?",
    respuesta: "Es la <mark>Semana Santa</mark>. Recordamos los últimos días de Jesús y la gran alegría de su <mark>resurrección</mark>.",
  },
  lectura: L3.lect("La palma de Martín", `<p>Es domingo por la mañana. Martín se pone su ropa nueva y coge una palma blanca muy larga.</p><p>«¿Por qué llevamos palmas hoy?», pregunta a su abuela.</p><p>«Hoy es Domingo de Ramos», responde ella. «Recordamos cuando Jesús llegó a Jerusalén y la gente lo recibió con alegría.»</p><p>En la puerta de la iglesia, muchos niños mueven sus palmas y ramos de olivo. Martín levanta la suya muy alto.</p><p>Al volver a casa, la abuela cuelga un ramo de olivo en el balcón. «Así lo recordamos todo el año.»</p><p>¿Qué pasó en la Semana Santa? En este tema lo vas a descubrir.</p>`),
  bloques: [
    {
      html: `<h3>1. ¿Qué es la Semana Santa?</h3><p>La Semana Santa es una semana <mark>muy importante</mark> para los cristianos.</p><p>Llega en <b>primavera</b>, cada año en una fecha un poco distinta.</p><p>Recordamos lo que vivió Jesús en sus <b>últimos días</b>. Hubo momentos alegres y momentos tristes. Pero termina con la noticia más feliz: ¡Jesús <mark>vive</mark>!</p><p>En muchos pueblos hay <b>procesiones</b> por las calles.</p><p>Muchos colegios tienen vacaciones esos días. Las familias aprovechan para estar juntas.</p>`,
      svg: svg("Una semana de siete días con una palma el primer día, pan el jueves, una cruz el viernes y un sol el domingo", `${["D", "L", "M", "X", "J", "V", "S", "D"].slice(0, 8).map((d, i) => `<rect x="${10 + i * 30.5}" y="40" width="28" height="70" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${big(24 + i * 30.5, 62, d, "var(--muted)", 15)}`).join("")}${palma(24, 104, 0.6)}${pan(146, 90).replace(/rx="18" ry="10"/, 'rx="11" ry="7"')}${cruz(176, 102, 0.6)}${sol(237, 88, 5)}${rot(130, 146, "Una semana para recordar", { color: "var(--pen)", size: 14 })}`),
    },
    {
      html: `<h3>2. El Domingo de Ramos</h3><p>Jesús llegó a la ciudad de <b>Jerusalén</b> montado en un <mark>burrito</mark>.</p><p>La gente estaba muy contenta. Movían <b>palmas</b> y ramos de olivo. Gritaban: «¡Hosanna! ¡Bendito el que viene!».</p><p>Hoy, ese domingo, muchos niños llevan palmas o ramos a la iglesia. Así recordamos aquella fiesta.</p><p>Algunos ramos se guardan en casa todo el año.</p><p>En Elche se hacen palmas blancas muy bonitas, trenzadas a mano.</p>`,
      svg: svg("Jesús montado en un burro y personas con palmas que lo saludan", `<g transform="translate(90 150)"><ellipse cx="0" cy="-30" rx="34" ry="14" fill="var(--muted)"/><path d="M-24 -20 V0 M-12 -20 V0 M12 -20 V0 M24 -20 V0" stroke="var(--muted)" stroke-width="5" stroke-linecap="round"/><path d="M26 -36 l14 -18 l10 4 l-8 14z" fill="var(--muted)"/></g>${jesus(90, 112, 0.75, "sentado")}${nino(175, 150, { c: "var(--pen)", pose: "arriba", s: 0.85 })}${palma(187, 94, 0.7)}${nino(225, 150, { c: "var(--inf)", nina: true, pose: "arriba", s: 0.75 })}${palma(236, 102, 0.6)}${suelo(150)}${rot(130, 172, "«¡Hosanna!»", { color: "var(--leaf)" })}`),
      video: { id: "FrASuqLwJvo", titulo: "Domingo de Ramos para niños", canal: "Comunidad Catolikids", vistas: 134871 },
    },
    {
      html: `<h3>3. La Última Cena</h3><p>El <b>Jueves Santo</b>, Jesús cenó con sus doce amigos.</p><p>Antes de cenar, les <mark>lavó los pies</mark>. Quería enseñarles a servir a los demás.</p><p>Después tomó el <b>pan</b> y el <b>vino</b>, dio gracias y lo repartió. Les dijo: «Haced esto en memoria mía». Por eso los cristianos celebran la misa.</p><p>Fue la última vez que cenaron juntos antes de la cruz.</p><p>Lavar los pies era un trabajo de sirvientes. ¡Jesús lo hizo para enseñar a servir!</p>`,
      svg: svg("Una mesa con pan y una copa, y Jesús detrás repartiendo el pan", `${jesus(130, 118, 1, "palmas")}<rect x="30" y="110" width="200" height="12" rx="3" fill="${MADERA}"/><rect x="44" y="122" width="8" height="30" fill="${MADERA}"/><rect x="208" y="122" width="8" height="30" fill="${MADERA}"/>${pan(80, 102)}${copa(180, 110)}${suelo(152)}${rot(130, 172, "Jueves Santo", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>4. El Viernes Santo</h3><p>Algunas personas no querían a Jesús. Lo <b>condenaron</b> a morir en una <mark>cruz</mark>.</p><p>Fue un día muy triste. María y algunos amigos se quedaron con él.</p><p>Jesús no se enfadó. Al contrario, <mark>perdonó</mark> a todos. Los cristianos creemos que dio su vida <b>por amor</b> a todos.</p><p>Ese día, en las iglesias, se reza en silencio.</p><p>Ese día los cristianos recuerdan el amor de Jesús con mucho respeto.</p>`,
      svg: svg("Una cruz sencilla sobre una colina, con un cielo gris", `<rect x="14" y="14" width="232" height="120" rx="10" fill="var(--line)" opacity=".6"/><path d="M14 150 Q130 90 246 150z" fill="var(--leaf)" opacity=".75"/>${cruz(130, 104, 2)}${corazon(200, 50, 1.3)}${rot(130, 170, "Jesús dio su vida por amor", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>5. ¡Jesús ha resucitado!</h3><p>El <b>domingo</b> muy temprano, unas mujeres fueron al <b>sepulcro</b>.</p><p>¡La piedra de la entrada estaba quitada! El sepulcro estaba <mark>vacío</mark>.</p><p>Un ángel les dijo: «No está aquí. <mark>¡Ha resucitado!</mark>». Resucitar es volver a la vida. Las mujeres corrieron a contarlo, llenas de alegría.</p><p>Esta es la mejor noticia de toda la Biblia.</p><p>Las mujeres fueron las primeras en saber la buena noticia. ¡Y corrieron a contarla!</p>`,
      svg: svg("Un sepulcro en la roca con la piedra redonda apartada y el sol saliendo", `${sol(210, 50, 18)}<path d="M20 150 V90 q0 -40 60 -40 q60 0 60 40 V150z" fill="var(--muted)"/><path d="M58 150 V110 a22 22 0 0 1 44 0 V150z" fill="#1c2550"/><circle cx="160" cy="124" r="26" fill="#a5adbd" stroke="var(--ink)" stroke-width="2"/>${suelo(150)}${rot(130, 172, "¡El sepulcro está vacío!", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>6. Jesús vive: la Pascua</h3><p>Después, Jesús se <b>apareció</b> a sus amigos. Comió con ellos y les habló.</p><p>Sus amigos estaban <mark>felicísimos</mark>. ¡Jesús estaba vivo!</p><p>Esta fiesta se llama <b>Pascua de Resurrección</b>. Es la fiesta más importante para los cristianos. Nos dice que el amor es más fuerte que la muerte.</p><p>Por eso en Pascua cantamos y celebramos con alegría.</p><p>En Pascua, muchas familias se reúnen y comparten una comida especial.</p>`,
      svg: svg("Jesús resucitado con los brazos abiertos junto a dos amigos alegres y un sol brillante", `${sol(130, 40, 16)}${jesus(130, 150, 1.05, "arriba")}${nino(60, 150, { c: "var(--pen)", pose: "arriba", s: 0.9 })}${nino(200, 150, { c: "var(--inf)", nina: true, pose: "arriba", s: 0.9 })}${suelo(150)}${rot(130, 172, "¡Jesús vive!", { color: "var(--red)", size: 15 })}`),
      video: L3.V("QGVunuMsIHc", "Semana Santa para niños", "El Show del Castillo Mágico", 2839549),
    },
    {
      html: `<h3>7. Los símbolos de la Pascua</h3><p>La <b>palma</b> recuerda la entrada en Jerusalén. El <b>pan</b> y el vino recuerdan la Última Cena.</p><p>La <b>cruz</b> nos recuerda el amor de Jesús.</p><p>El <mark>cirio pascual</mark> es una vela grande que se enciende en Pascua. Significa que Jesús es luz. En Cataluña se regala la <b>mona de Pascua</b>. Suele llevar huevos de chocolate.</p><p>El padrino o la padrina regala la mona a su ahijado el lunes de Pascua.</p>`,
      svg: svg("Cuatro símbolos: palma, pan, cruz y vela grande, más dos huevos de Pascua", `${palma(36, 110, 1.1)}${pan(86, 100)}${cruz(136, 110, 1.1)}${vela(186, 112)}${huevo(222, 100, "var(--inf)")}${huevo(240, 114, "var(--water)")}${["palma", "pan", "cruz", "cirio", "mona"].map((t, i) => rot([36, 86, 136, 186, 231][i], 140, t, { size: 12, color: "var(--muted)" })).join("")}${rot(130, 168, "Símbolos de Pascua", { color: "var(--pen)", size: 14 })}`),
    },
    L3.B("8. Las procesiones", `<p>En Semana Santa, en muchos pueblos y ciudades hay <mark>procesiones</mark>.</p><p>Una procesión es un desfile lento por las calles. Se llevan imágenes de Jesús y de María, que recuerdan lo que pasó.</p><p>Suenan tambores y trompetas. Algunas personas llevan velas o túnicas de colores.</p><p>Si vas a ver una, miramos con respeto y en silencio.</p>`, "Una procesión con personas que llevan velas y un tambor", `${[0, 1, 2].map((i) => `${L3.nino(50 + i * 60, 150, { c: "var(--inf)", s: 1.1 })}${L3.vela(66 + i * 60, 110)}`).join("")}${L3.tambor(220, 140, 0.9)}${L3.suelo(152)}${L3.t(130, 30, "Procesión", "var(--pen)", 16)}`),
    {
      html: `<h3>9. ¿Para qué sirve? Perdonar</h3><p>Jesús <mark>perdonó</mark> incluso a quienes le hicieron daño.</p><p>Nosotros también podemos perdonar. Si un amigo nos quita un juguete, hablamos y hacemos las paces.</p><p>Y si nos equivocamos, pedimos <b>perdón</b>. La Pascua nos enseña que siempre se puede <mark>empezar de nuevo</mark>.</p><p>Perdonar nos deja el corazón tranquilo y contento.</p><p>Perdonar no siempre es fácil. Pero cuando lo hacemos, nos sentimos mejor.</p>`,
      svg: svg("Dos niños se dan la mano y hacen las paces, con un corazón encima", `${nino(95, 150, { c: "var(--pen)", pose: "pie" })}${nino(165, 150, { c: "var(--inf)", nina: true, pose: "pie" })}<path d="M108 122 L130 112 L152 122" stroke="var(--muted)" stroke-width="4" fill="none" stroke-linecap="round"/>${corazon(130, 50, 2)}${suelo(150)}${rot(130, 172, "Hacemos las paces", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>10. Juego: ordena la semana</h3><p>¿Recuerdas qué pasó cada día? Ponlos <mark>en orden</mark>.</p><p>1. <b>Domingo de Ramos</b>: palmas y alegría.</p><p>2. <b>Jueves Santo</b>: la Última Cena.</p><p>3. <b>Viernes Santo</b>: Jesús muere en la cruz.</p><p>4. <b>Domingo de Resurrección</b>: ¡Jesús vive!</p><p>Tapa los números y prueba otra vez.</p><p>¿Te acuerdas de todo?</p><p>Después, dibuja cada día en una tarjeta y ordénalas con un compañero.</p>`,
      svg: svg("Cuatro tarjetas numeradas: palma, pan, cruz y sol", `${[[palma(0, 0, 0.8), "Ramos"], [pan(0, -14), "Jueves"], [cruz(0, 2, 0.7), "Viernes"], [sol(0, -14, 10), "Domingo"]].map(([d, t], i) => `<rect x="${12 + i * 61}" y="30" width="54" height="100" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${big(39 + i * 61, 54, i + 1, "var(--pen)", 18)}<g transform="translate(${39 + i * 61} 104)">${d}</g>${rot(39 + i * 61, 124, t, { size: 11, color: "var(--muted)" })}`).join("")}${rot(130, 160, "¿Cuál va primero?", { color: "var(--pen)", size: 15 })}`),
    },
    L3.B("11. Repaso: lo que ya sabes", `<p>La <mark>Semana Santa</mark> recuerda los últimos días de Jesús.</p><p>El <b>Domingo de Ramos</b> entró en Jerusalén en un burrito. El <b>Jueves Santo</b> hizo la Última Cena. El <b>Viernes Santo</b> murió en la cruz.</p><p>El <b>Domingo de Resurrección</b>, ¡Jesús resucitó! Es la Pascua, la fiesta más importante.</p><p>La Pascua nos enseña a perdonar y a empezar de nuevo.</p>`, "Cuatro tarjetas con los días de la Semana Santa: palma, pan, cruz y sol", `${[["Ramos", "var(--leaf)"], ["Jueves", "#c48a00"], ["Viernes", "var(--muted)"], ["Pascua", "var(--sun)"]].map(([s, c], i) => `<rect x="${12 + i * 61}" y="40" width="54" height="80" rx="8" fill="var(--card)" stroke="${c}" stroke-width="3"/>${L3.t(39 + i * 61, 140, s, c, 13)}`).join("")}<path d="M39 110 V60 M39 70 l-10 -8 M39 80 l10 -8 M39 90 l-10 -8" stroke="var(--leaf)" stroke-width="3"/><ellipse cx="100" cy="86" rx="18" ry="12" fill="#c48a5a"/>${L3.cruz(161, 110, 1.2)}${L3.sol(222, 80, 14)}`),
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
    { enunciado: "¿Qué nos enseña Jesús al lavar los pies a sus amigos?", pasos: ["Lavar los pies era un trabajo de sirvientes.", "Jesús, que era el maestro, lo hizo él mismo.", "Quería enseñar que hay que ayudar y servir a los demás."], resultado: "nos enseña a servir y ayudar a los demás." },
  ],
  errores: [
    "Pensar que la Semana Santa termina triste: termina con la alegría de la resurrección.",
    "Confundir la Navidad con la Pascua: en Navidad nace Jesús; en Pascua resucita.",
    "Creer que resucitar es dormir: resucitar es volver a la vida.",
    "Pensar que perdonar es de débiles: Jesús nos enseñó que perdonar es de valientes.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿En qué estación del año es la Semana Santa?", sol: "En primavera." },
    { nivel: "básico", q: "¿En qué animal entró Jesús en Jerusalén?", sol: "En un burrito." },
    { nivel: "básico", q: "¿Qué llevaba la gente el Domingo de Ramos?", sol: "Palmas y ramos de olivo." },
    { nivel: "básico", q: "¿Qué compartió Jesús en la Última Cena?", sol: "El pan y el vino." },
    { nivel: "básico", q: "¿Qué hizo Jesús antes de cenar?", sol: "Lavó los pies a sus amigos." },
    { nivel: "básico", q: "¿Qué encontraron las mujeres el domingo?", sol: "El sepulcro vacío: Jesús había resucitado." },
    { nivel: "básico", q: "¿Qué significa resucitar?", sol: "Volver a la vida." },
    { nivel: "medio", q: "Dibuja una palma o un cirio de Pascua.", sol: "La palma tiene hojas largas; el cirio es una vela grande encendida." },
    { nivel: "básico", q: "Ordena: Viernes Santo · Domingo de Ramos · Domingo de Resurrección.", sol: "Domingo de Ramos → Viernes Santo → Domingo de Resurrección." },
    { nivel: "medio", q: "Di una situación en la que puedes perdonar.", sol: "Por ejemplo, cuando un amigo te quita un juguete y luego te pide perdón." },
    L3.b("¿Qué es una procesión?", "Un desfile lento por las calles con imágenes."),
    L3.m("Une: palma, pan y vino, sepulcro vacío. Domingo de Ramos, Jueves Santo, Resurrección.", "Palma-Ramos; pan y vino-Jueves Santo; sepulcro vacío-Resurrección."),
    L3.m("¿Quién regala la mona de Pascua?", "El padrino o la padrina."),
    L3.m("¿Quiénes fueron las primeras en saber que Jesús había resucitado?", "Unas mujeres que fueron al sepulcro."),
    L3.m("Haz una palma de papel para el Domingo de Ramos.", "Tiras de papel verde o amarillo pegadas a un palo."),
    L3.m("¿Cómo nos comportamos al ver una procesión?", "Con respeto y en silencio."),
    L3.a("Cuenta con tus palabras qué pasó en la Última Cena.", "Jesús lavó los pies, compartió el pan y el vino y dijo «haced esto en memoria mía»."),
    L3.a("Explica por qué la Pascua es una fiesta alegre.", "Porque Jesús resucitó: el amor es más fuerte que la muerte."),
    L3.a("Dibuja la Semana Santa en cuatro viñetas ordenadas.", "Ramos, Última Cena, cruz y resurrección."),
    L3.a("Di una vez en que perdonaste a alguien y cómo te sentiste.", "Respuesta personal: tranquilo y contento."),
    L3.a("Busca qué costumbres de Semana Santa hay en tu pueblo o ciudad.", "Por ejemplo: procesiones, palmas o la mona de Pascua."),
    L3.a("¿Qué significa el cirio pascual?", "Que Jesús es luz y está vivo."),
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
    L3.Q("En una procesión se llevan…", ["imágenes de Jesús y María", "balones", "cometas"], 0, "Recuerdan lo que pasó."),
    L3.Q("¿Quién regala la mona?", ["El padrino o la padrina", "El panadero", "Nadie"], 0, "El lunes de Pascua."),
  ],
  examen: [
    { q: "¿Qué recordamos el Domingo de Ramos?", o: ["La entrada de Jesús en Jerusalén", "El nacimiento de Jesús", "Los Reyes Magos"], a: 0, e: "Jesús entra en Jerusalén entre palmas." },
    { q: "¿Qué celebramos el Domingo de Resurrección?", o: ["Que Jesús vive", "Que es verano", "Que nace Jesús"], a: 0, e: "Jesús ha resucitado." },
    { q: "¿Qué es el cirio pascual?", o: ["Una vela grande", "Un pan", "Una palma"], a: 0, e: "Una vela que significa que Jesús es luz." },
    { q: "La Pascua nos enseña a…", o: ["perdonar y empezar de nuevo", "enfadarnos", "no compartir"], a: 0, e: "Siempre se puede empezar de nuevo." },
    L3.Q("¿Qué día fue la Última Cena?", ["El Jueves Santo", "El Domingo de Ramos", "El sábado"], 0, "Jesús cenó con sus amigos."),
    L3.Q("Resucitar es…", ["volver a la vida", "dormirse", "irse de viaje"], 0, "Jesús vive."),
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
    ["¿Qué es una procesión?", "Un desfile lento con imágenes por las calles"],
    ["¿Qué es la mona de Pascua?", "Un pastel con huevos de chocolate que regalan los padrinos"],
  ],
  glosario: [
    ["Semana Santa", "La semana en que recordamos los últimos días de Jesús."],
    ["Domingo de Ramos", "El día en que Jesús entró en Jerusalén."],
    ["Última Cena", "La cena de Jesús con sus amigos el Jueves Santo."],
    ["Cruz", "Donde murió Jesús; símbolo de su amor."],
    ["Sepulcro", "El lugar donde se pone a una persona que ha muerto."],
    ["Resucitar", "Volver a la vida."],
    ["Pascua", "La fiesta de la resurrección de Jesús."],
    ["Procesión", "Desfile lento por las calles con imágenes."],
    ["Mona de Pascua", "Pastel con huevos de chocolate que se regala en Cataluña."],
  ],
  situacion: L3.sit("El camino de la Semana Santa", "Vamos a hacer un camino en el pasillo con los días de la Semana Santa para que otras clases lo recorran.", ["Por grupos, preparamos un cartel de cada día: Ramos, Jueves, Viernes y Domingo de Resurrección.", "Dibujamos el símbolo de cada día: palma, pan, cruz y sol.", "Colocamos los carteles en orden por el pasillo.", "Guiamos a otra clase por el camino y contamos qué pasó cada día."], "Un camino con cuatro carteles de la Semana Santa.", ["Ordena los días de la Semana Santa.", "Relaciona cada día con su símbolo.", "Explica el mensaje de la Pascua: perdonar y empezar de nuevo."]),
  familias: [
    "Si vais a la iglesia el Domingo de Ramos, llevad una palma o un ramo de olivo.",
    "Haced juntos una mona de Pascua sencilla o decorad huevos cocidos.",
    "Usad el dibujo de los cuatro días para contar la historia en orden.",
    "Cuando haya una pequeña pelea en casa, practicad pedir perdón y perdonar.",
  ],
  profesores: PROF("Religión Católica, primer ciclo: los acontecimientos de la Semana Santa (entrada en Jerusalén, Última Cena, muerte y resurrección de Jesús), sus símbolos y el perdón como actitud cristiana. Área de opción dentro del marco del RD 157/2022", ["Línea del tiempo de la Semana Santa con dibujos del alumnado.", "Elaboración de palmas de papel para el Domingo de Ramos.", "Rincón del perdón: frases para hacer las paces en el aula."]),
  fuentes: FUENTES,
  revisado: "2026-11-14",
};
