// Latín 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { dos, filas, arbol, barras } = require("./_hum");

const LENGUAS = [["español", "noche", "var(--red)"], ["portugués", "noite", "var(--leaf)"], ["gallego", "noite", "var(--water)"], ["catalán", "nit", "var(--sun)"], ["francés", "nuit", "var(--pen)"], ["italiano", "notte", "var(--leaf)"], ["rumano", "noapte", "var(--bac)"]];

module.exports = {
  materia: "Latín",
  curso: "4-eso",
  titulo: "El latín y las lenguas romances",
  minutos: 35,
  objetivos: ["Situar el latín dentro de la familia indoeuropea", "Explicar cómo el latín vulgar dio origen a las lenguas romances", "Distinguir palabras patrimoniales, cultismos y latinismos"],
  claves: ["indoeuropeo", "latín vulgar", "lenguas romances", "palabra patrimonial", "cultismo", "latinismo"],
  pregunta: {
    texto: "En español decimos «noche»; en catalán, «nit»; en francés, «nuit»; en italiano, «notte»; en portugués, «noite». Se parecen demasiado para ser casualidad. ¿Por qué?",
    respuesta: "Porque todas vienen de la misma palabra latina, <mark>nox, noctis</mark>. El español, el catalán, el gallego, el francés, el italiano, el portugués o el rumano son <b>lenguas romances</b>: el latín que hablaba la gente en el Imperio romano, transformado durante siglos de forma distinta en cada región.",
  },
  bloques: [
    {
      html: `<h3>Una lengua indoeuropea</h3><p>El latín pertenece a la gran familia <mark>indoeuropea</mark>, a la que también pertenecen el griego, las lenguas germánicas (inglés, alemán), eslavas (ruso, polaco) o el sánscrito de la India. Por eso hay parecidos lejanos: latín <i>pater</i>, griego <i>patér</i>, inglés <i>father</i>, alemán <i>Vater</i>. El latín nació en el <b>Lacio</b>, la región de Roma, y se extendió con las conquistas romanas.</p>`,
      svg: filas("La palabra padre en lenguas indoeuropeas", [["latín", "pater", "var(--red)"], ["griego", "patér", "var(--pen)"], ["sánscrito", "pitar", "var(--sun)"], ["inglés", "father", "var(--leaf)"], ["alemán", "Vater", "var(--muted)"]]),
    },
    {
      html: `<h3>Latín culto y latín vulgar</h3><p>Los escritores como Cicerón o Virgilio usaban el <b>latín clásico</b> o culto. El pueblo hablaba el <mark>latín vulgar</mark>, más sencillo y cambiante: decía <i>caballus</i> en lugar de <i>equus</i>, o <i>casa</i> en lugar de <i>domus</i>. Tras la caída del Imperio de Occidente (476), cada región quedó aislada y su latín vulgar evolucionó por separado hasta convertirse, hacia los siglos IX y X, en lenguas nuevas.</p>`,
      svg: dos("Latín clásico frente a latín vulgar", ["Clásico", ["equus", "domus", "os (boca)", "loqui (hablar)", "escritores"], "var(--pen)"], ["Vulgar", ["caballus → caballo", "casa → casa", "bucca → boca", "fabulare → hablar", "pueblo"], "var(--red)"]),
    },
    {
      html: `<h3>Las lenguas romances</h3><p>Las <mark>lenguas romances</mark> o románicas son las que derivan del latín. En la península ibérica: <b>castellano</b>, <b>catalán</b>, <b>gallego</b> y <b>portugués</b>, además del asturleonés y el aragonés. Fuera: <b>francés</b>, <b>italiano</b>, <b>rumano</b>, occitano, sardo o romanche. El vasco o euskera es una excepción: es anterior a los romanos y no procede del latín. Hoy unos 900 millones de personas hablan una lengua romance.</p>`,
      svg: barras("Hablantes nativos aproximados de lenguas romances en millones", [["español", 485, "var(--red)", "≈ 485 M"], ["portugués", 235, "var(--leaf)", "≈ 235 M"], ["francés", 75, "var(--pen)", "≈ 75 M"], ["italiano", 65, "var(--sun)", "≈ 65 M"], ["rumano", 24, "var(--bac)", "≈ 24 M"]], 560),
    },
    {
      html: `<h3>Patrimoniales, cultismos y latinismos</h3><p>Las <mark>palabras patrimoniales</mark> llegaron del latín hablado y sufrieron todos los cambios fonéticos: <i>oculum</i> → <b>ojo</b>. Los <mark>cultismos</mark> se tomaron más tarde del latín escrito, casi sin cambios: <i>ocularis</i> → <b>ocular</b>. A veces una misma palabra latina dio las dos, formando un <b>doblete</b>: <i>clavem</i> → llave (patrimonial) y clave (cultismo). Los <b>latinismos</b> son expresiones latinas que usamos tal cual: <i>currículum</i>, <i>ultimátum</i>, <i>a priori</i>, <i>in situ</i>.</p>`,
      svg: arbol("Dobletes: de una palabra latina salen una patrimonial y un cultismo", [["clavem", ["llave", "clave"], "var(--red)", ["patrimonial", "cultismo"]], ["auriculam", ["oreja", "aurícula"], "var(--pen)", ["patrimonial", "cultismo"]]]),
    },
  ],
  figura: {
    titulo: "Nox, noctis en siete lenguas romances",
    svg: `<svg viewBox="0 0 680 220" role="img" aria-label="Del latín noctem salen noche, noite, nit, nuit, notte y noapte">
      <rect width="680" height="220" rx="16" fill="var(--paper)"/>
      <rect x="270" y="16" width="140" height="44" rx="22" fill="var(--red)"/>
      <text x="340" y="45" text-anchor="middle" font-size="20" font-weight="700" fill="#fff" ${D}>noctem</text>
      <g ${F} text-anchor="middle">
      ${LENGUAS.map(([l, w, c], i) => { const x = 60 + i * 93; return `<path d="M340 60 L ${x} 130" stroke="var(--line)" stroke-width="2.5"/><rect x="${x - 42}" y="130" width="84" height="66" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="${x}" y="160" font-size="17" font-weight="700" fill="var(--ink)">${w}</text><text x="${x}" y="182" font-size="11.5" fill="var(--muted)">${l}</text>`; }).join("")}
      </g>
    </svg>`,
  },
  video: { id: "9p0wq_64n0U", titulo: "¿Lengua más parecida al latín?", canal: "Linguriosa", vistas: 1358125, megusta: 52668, busqueda: "lenguas romances latín evolución" },
  quiz: [
    { q: "¿A qué familia de lenguas pertenece el latín?", o: ["Semítica", "Indoeuropea", "Urálica"], a: 1, e: "Comparte origen con el griego, el sánscrito y las lenguas germánicas y eslavas." },
    { q: "Las lenguas romances proceden del…", o: ["latín clásico escrito", "latín vulgar hablado", "griego"], a: 1, e: "El latín que hablaba el pueblo evolucionó de forma distinta en cada región." },
    { q: "¿Cuál NO es una lengua romance?", o: ["Gallego", "Euskera", "Rumano"], a: 1, e: "El euskera es anterior a la llegada de los romanos y no procede del latín." },
    { q: "«Ocular» es un…", o: ["cultismo", "palabra patrimonial", "latinismo"], a: 0, e: "Se tomó del latín escrito casi sin cambios; la patrimonial es «ojo»." },
    { q: "«Currículum» es un…", o: ["cultismo adaptado", "latinismo", "palabra patrimonial"], a: 1, e: "Es una palabra latina que usamos tal cual." },
  ],
  examen: [
    { q: "Llave y clave forman un…", o: ["doblete", "sinónimo griego", "latinismo"], a: 0, e: "Vienen de clavem: una por vía popular y otra por vía culta." },
    { q: "¿En qué región nació el latín?", o: ["Grecia", "El Lacio", "Hispania"], a: 1, e: "Del Lacio (Latium) viene su nombre." },
    { q: "Caballo viene del latín vulgar caballus. ¿Cómo se decía en latín clásico?", o: ["equus", "domus", "bucca"], a: 0, e: "De equus nos quedan cultismos como «equino» o «ecuestre»." },
  ],
  feynman: ["Qué es la familia indoeuropea con un ejemplo", "Diferencia entre latín clásico y latín vulgar", "Qué lenguas romances se hablan en la península", "Diferencia entre palabra patrimonial, cultismo y latinismo"],
  mapa: mapa("LATÍN Y ROMANCES", "var(--red)", [
    ["Origen", "indoeuropeo · Lacio", "var(--muted)"],
    ["Latín vulgar", "habla del pueblo", "var(--sun)"],
    ["Romances", "castellano · catalán · gallego…", "var(--pen)"],
    ["Léxico", "patrimonial · cultismo · latinismo", "var(--leaf)"],
  ], 270),
  tarjetas: [
    ["¿Qué es una lengua romance?", "Una lengua que procede del latín vulgar."],
    ["Palabra patrimonial", "Viene del latín hablado con todos los cambios fonéticos (oculum → ojo)."],
    ["Cultismo", "Tomado del latín escrito casi sin cambios (ocular)."],
    ["Doblete", "Pareja patrimonial-cultismo de una misma palabra latina (llave/clave)."],
    ["¿Por qué el euskera no es romance?", "Porque es anterior a los romanos y no procede del latín."],
  ],
  familias: ["Buscad juntos latinismos en las noticias (ultimátum, déficit, referéndum, statu quo).", "Comparad cómo se dice una palabra (agua, noche, leche) en las lenguas que conozca la familia.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El latín como lengua de origen: familia indoeuropea, latín vulgar, lenguas romances y léxico de origen latino (RD 217/2022, Latín 4º).",
    ideas: ["Tabla comparativa de diez palabras en cinco lenguas romances.", "Caza de dobletes en el diccionario.", "Mapa de las lenguas de Europa coloreando las romances."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Lenguas romances, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Lenguas_romances" },
  ],
  revisado: "2026-11-12",
};
