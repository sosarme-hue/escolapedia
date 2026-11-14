// Religión 1º de Primaria: la Iglesia, nuestra gran familia.
const { mapa } = require("./_util");
const { svg, rot, big, nino, iglesia, cruz, vela, corazon, casa, arbol, suelo, PROF, FUENTES } = require("./_pri1-dib");
const L3 = require("./_pri1L3");

const MADERA = "#8a5a2b";
const pila = (x, y) => `<g><path d="M${x - 24} ${y - 40} h48 q0 22 -24 24 q-24 -2 -24 -24z" fill="#a5adbd" stroke="var(--ink)" stroke-width="2"/><rect x="${x - 6}" y="${y - 16}" width="12" height="16" fill="#a5adbd" stroke="var(--ink)" stroke-width="2"/><ellipse cx="${x}" cy="${y - 40}" rx="22" ry="5" fill="var(--water)"/></g>`;
const campana = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-14 0 q0 -24 14 -24 q14 0 14 24 l4 4 h-36z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><circle cx="0" cy="8" r="4" fill="var(--ink)"/></g>`;
const altar = (x, y, w = 70) => `<g><rect x="${x - w / 2}" y="${y - 34}" width="${w}" height="34" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="${x - w / 2 - 4}" y="${y - 38}" width="${w + 8}" height="6" fill="var(--sun)"/></g>`;
const mundo = (x, y, r) => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="var(--water)"/><path d="M${x - r * 0.6} ${y - r * 0.5} q${r * 0.3} -${r * 0.2} ${r * 0.5} ${r * 0.1} q${r * 0.1} ${r * 0.4} -${r * 0.3} ${r * 0.6} q-${r * 0.4} -${r * 0.2} -${r * 0.2} -${r * 0.7}z M${x + r * 0.1} ${y + r * 0.1} q${r * 0.5} -${r * 0.3} ${r * 0.6} ${r * 0.2} q-${r * 0.1} ${r * 0.5} -${r * 0.5} ${r * 0.4}z" fill="var(--leaf)"/></g>`;

module.exports = {
  materia: "Religión",
  curso: "1-primaria",
  titulo: "La Iglesia, nuestra gran familia",
  minutos: 50,
  objetivos: ["Saber que la Iglesia es la gran familia de los cristianos", "Conocer el templo y lo que hay dentro", "Descubrir cómo la Iglesia se reúne, celebra y ayuda"],
  claves: ["Iglesia", "templo", "Bautismo", "misa", "parroquia", "comunidad"],
  pregunta: {
    texto: "En tu pueblo o barrio seguro que hay un edificio con una cruz y campanas. ¿Qué es? ¿Quién va allí?",
    respuesta: "Es una <mark>iglesia</mark>. Allí se reúnen los cristianos, que forman una gran familia: <mark>la Iglesia</mark>.",
  },
  lectura: L3.lect("El bautizo de Bruno", `<p>Hoy es un día especial. El hermanito de Clara, Bruno, se bautiza en la parroquia del barrio.</p><p>Toda la familia está allí: los padres, los abuelos, los tíos y los primos.</p><p>Las campanas suenan: ¡din, don, din, don! Clara entra en la iglesia y ve el altar, las velas y una cruz grande.</p><p>El sacerdote echa un poco de agua en la cabeza de Bruno. El bebé llora un poquito y todos se ríen.</p><p>«Ahora Bruno forma parte de la Iglesia, una familia muy grande», explica la madre.</p><p>Clara le da un beso a su hermano. ¿Qué es la Iglesia? En este tema lo vas a descubrir.</p>`),
  bloques: [
    {
      html: `<h3>1. Una familia muy grande</h3><p>Los amigos de Jesús siguieron reuniéndose después de la Pascua.</p><p>Cada vez eran más. Así nació la <mark>Iglesia</mark>: la gran familia de los que siguen a Jesús.</p><p>Hoy hay cristianos en <b>todo el mundo</b>. Hablan idiomas distintos y viven en países lejanos. Pero todos son hermanos en la misma familia.</p><p>¡Tú también puedes formar parte!</p><p>En la Iglesia hay personas de todas las edades, desde bebés hasta abuelos.</p>`,
      svg: svg("La Tierra con niños de distintos colores de la mano alrededor", `${mundo(130, 78, 46)}${["var(--pen)", "var(--inf)", "var(--leaf)", "var(--red)", "var(--sun)"].map((c, i) => nino(30 + i * 50, 156, { c, nina: i % 2 === 1, pose: "brazos", s: 0.6, pelo: ["var(--ink)", "#8a5a2b", "#222", "#e8b84a", "#5b3a1e"][i] })).join("")}${rot(130, 174, "Hermanos en todo el mundo", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>2. Iglesia e iglesia</h3><p>La palabra iglesia sirve para <b>dos cosas</b>.</p><p>Con mayúscula, <mark>la Iglesia</mark> es la familia de los cristianos: las personas.</p><p>Con minúscula, <mark>la iglesia</mark> es el edificio donde se reúnen. Suele tener una <b>cruz</b> y un <b>campanario</b>. Las campanas avisan de que empieza la celebración. ¿Hay una iglesia cerca de tu casa?</p><p>Algunas iglesias son muy antiguas, de hace cientos de años. ¡Son verdaderos tesoros!</p>`,
      svg: svg("A la izquierda un grupo de personas; a la derecha el edificio de una iglesia", `${nino(30, 150, { c: "var(--pen)", s: 0.8 })}${nino(60, 150, { c: "var(--inf)", nina: true, s: 0.7 })}${nino(90, 150, { c: "var(--leaf)", s: 0.8 })}${iglesia(185, 150)}${suelo(150)}${rot(60, 172, "la Iglesia", { color: "var(--pen)" })}${rot(185, 172, "la iglesia", { color: "var(--red)" })}`),
    },
    {
      html: `<h3>3. Entramos por el Bautismo</h3><p>Para formar parte de la Iglesia, recibimos el <mark>Bautismo</mark>.</p><p>El sacerdote echa <b>agua</b> en la cabeza. Y dice el nombre de quien se bautiza.</p><p>Muchos se bautizan de bebés. Los <b>padres</b> y los <b>padrinos</b> prometen ayudarle a conocer a Jesús. Desde ese día, es hijo de Dios y miembro de la Iglesia.</p><p>El agua del Bautismo es un signo de vida nueva. Se enciende también una vela.</p>`,
      svg: svg("Una pila bautismal con agua y un bebé en brazos de su madre a un lado", `${pila(80, 150)}${nino(170, 150, { c: "var(--inf)", nina: true, pose: "palmas" })}<ellipse cx="170" cy="112" rx="15" ry="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><circle cx="159" cy="110" r="5" fill="#f3c9a1"/><path d="M80 98 q-6 -16 6 -20" stroke="var(--water)" stroke-width="3" fill="none"/><circle cx="80" cy="64" r="3" fill="var(--water)"/><circle cx="72" cy="78" r="2.5" fill="var(--water)"/>${suelo(150)}${rot(130, 172, "El Bautismo", { color: "var(--water)" })}`),
      video: { id: "44or7MkDMpk", titulo: "Los 7 Sacramentos explicados para niños", canal: "Catekids", vistas: 164027 },
    },
    {
      html: `<h3>4. Dentro de la iglesia</h3><p>Dentro de la iglesia hay muchos <b>bancos</b> para sentarse.</p><p>Delante está el <mark>altar</mark>, una mesa donde se celebra la misa. Cerca está el <b>ambón</b>, para leer la Biblia.</p><p>También hay una <b>cruz</b>, velas y una <b>pila bautismal</b>. En el <mark>sagrario</mark> se guarda el pan consagrado. Una lucecita roja lo indica.</p><p>Dentro hablamos bajito.</p><p>En muchas iglesias hay vidrieras de colores. Cuando entra el sol, ¡parecen arcoíris!</p>`,
      svg: svg("Interior de una iglesia: cruz al fondo, altar con velas, y bancos delante", `${cruz(130, 60, 1.3)}${altar(130, 112, 90)}${vela(100, 74)}${vela(160, 74)}<rect x="200" y="60" width="26" height="22" rx="3" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><circle cx="213" cy="50" r="4" fill="var(--red)"/>${[0, 1].map((i) => `<rect x="${30 + i * 120}" y="132" width="80" height="8" rx="2" fill="${MADERA}"/><rect x="${30 + i * 120}" y="140" width="80" height="12" fill="${MADERA}" opacity=".6"/>`).join("")}${rot(130, 172, "altar · cruz · sagrario · bancos", { color: "var(--pen)", size: 12 })}`),
    },
    {
      html: `<h3>5. Las personas de la Iglesia</h3><p>En la gran familia de la Iglesia cada uno tiene su <b>tarea</b>.</p><p>El <mark>Papa</mark> vive en Roma y guía a toda la Iglesia. Los <b>obispos</b> cuidan de una zona.</p><p>Los <b>sacerdotes</b> celebran la misa en las parroquias. Los <b>catequistas</b> enseñan quién es Jesús. Y todos los cristianos, también los niños, son importantes.</p><p>¡Cada uno ayuda como puede!</p><p>Las religiosas y los religiosos también ayudan mucho en colegios y hospitales.</p>`,
      svg: svg("Cinco personas con su papel: Papa, obispo, sacerdote, catequista y un niño", `${[["Papa", "#c9d0de", 1], ["obispo", "var(--bac)", 0.95], ["sacerdote", "var(--leaf)", 0.95], ["catequista", "var(--inf)", 0.9]].map(([t, c, s], i) => `${nino(36 + i * 62, 140, { c, s, nina: i === 3 })}${i === 0 ? `<path d="M30 66 h12 l-2 -8 h-8z" fill="var(--sun)"/>` : ""}${rot(36 + i * 62, 164, t, { size: 11, color: "var(--muted)" })}`).join("")}${suelo(140)}`),
    },
    {
      html: `<h3>6. La misa del domingo</h3><p>Los domingos, la familia de la Iglesia se reúne en la <mark>misa</mark>.</p><p>Escuchamos la <b>Palabra de Dios</b>. Cantamos y rezamos juntos.</p><p>Después, el sacerdote hace lo que hizo Jesús en la Última Cena: bendice el <b>pan</b> y el vino. Al final nos damos la <mark>paz</mark>. Y salimos a querer a los demás.</p><p>Los niños también participan.</p><p>En la misa, los niños pueden cantar, leer una petición o llevar las ofrendas.</p>`,
      svg: svg("Una familia sentada en un banco mira al altar donde está el sacerdote", `${altar(196, 120, 70)}${nino(196, 86, { c: "var(--leaf)", pose: "arriba", s: 0.65 })}${cruz(240, 74, 0.6)}${nino(40, 150, { c: "var(--pen)", pose: "sentado", s: 0.85 })}${nino(76, 150, { c: "var(--inf)", nina: true, pose: "reza", s: 0.65 })}${nino(110, 150, { c: "var(--red)", pose: "sentado", s: 0.85 })}<rect x="18" y="126" width="112" height="8" rx="2" fill="${MADERA}"/>${suelo(150)}${rot(130, 172, "Nos reunimos el domingo", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>7. La Iglesia ayuda</h3><p>Jesús ayudaba a los pobres y a los enfermos. La Iglesia quiere hacer <mark>lo mismo</mark>.</p><p>Hay grupos como <b>Cáritas</b>. Dan comida, ropa y compañía a quien lo necesita.</p><p>Los <b>misioneros</b> viajan a países lejanos. Allí construyen escuelas y hospitales. Ayudar es una forma de <mark>querer</mark> como Jesús.</p><p>Tú también puedes ayudar.</p><p>En clase podemos hacer una recogida de alimentos o juguetes para quien lo necesita.</p>`,
      svg: svg("Una mano da una caja de comida a otra mano, con un corazón encima", `<path d="M20 120 q30 -10 60 0 h30 v20 h-30 q-30 6 -60 -4z" fill="#f3c9a1" stroke="var(--ink)" stroke-width="1.5"/><path d="M240 120 q-30 -10 -60 0 h-30 v20 h30 q30 6 60 -4z" fill="#d9a06d" stroke="var(--ink)" stroke-width="1.5"/><rect x="104" y="80" width="52" height="40" rx="4" fill="#c99a5b" stroke="var(--ink)" stroke-width="1.5"/><circle cx="118" cy="78" r="6" fill="var(--red)"/><rect x="128" y="66" width="8" height="16" fill="var(--sun)"/><circle cx="146" cy="76" r="5" fill="var(--leaf)"/>${corazon(130, 46, 1.6)}${rot(130, 168, "Compartimos con quien lo necesita", { color: "var(--pen)", size: 13 })}`),
      video: L3.V("-ypszsYOS90", "Todos a la iglesia: canción para niños", "AYI", 904725),
    },
    {
      html: `<h3>8. ¿Para qué sirve? Mi parroquia</h3><p>La <mark>parroquia</mark> es la comunidad cristiana de tu barrio o pueblo.</p><p>Allí hay misas, bautizos, bodas y fiestas. También hay <b>catequesis</b> para niños.</p><p>En la parroquia conoces a otras familias y haces amigos. Puedes ayudar en una recogida de alimentos o cantar en el coro. ¡Todos tienen sitio!</p><p>Pregunta a tu familia cómo se llama tu parroquia.</p><p>Algunas parroquias organizan campamentos y excursiones. ¡Son muy divertidos!</p>`,
      svg: svg("Un pueblo pequeño con casas, árboles y una iglesia en el centro", `${casa(36, 150, "var(--inf)")}${arbol(80, 150, 0.8)}${iglesia(130, 150)}${arbol(180, 150, 0.8)}${casa(224, 150, "var(--water)")}${suelo(150)}${rot(130, 172, "La parroquia de mi barrio", { color: "var(--pen)", size: 13 })}`),
    },
    L3.B("9. Iglesias de muchas formas", `<p>Hay iglesias de <mark>muchas formas y tamaños</mark>.</p><p>Una <b>ermita</b> es una iglesia pequeña, muchas veces en el campo o en una montaña.</p><p>Una <b>catedral</b> es una iglesia muy grande. Allí está el obispo. En Barcelona está la Sagrada Familia, ¡famosa en todo el mundo!</p><p>En un <b>monasterio</b> viven monjes o monjas que rezan y trabajan.</p>`, "Una ermita pequeña y una catedral grande con torres", `${L3.iglesia(60, 150)}<g transform="translate(180 150)"><rect x="-44" y="-70" width="88" height="70" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-44 -70 V-110 l-8 -16 l-8 16 V-70" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M44 -70 V-110 l8 -16 l8 16 V-70" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="0" cy="-44" r="14" fill="var(--inf)" opacity=".7"/><rect x="-10" y="-24" width="20" height="24" fill="var(--pen)"/></g>${L3.suelo(152)}${L3.t(60, 172, "ermita", "var(--pen)", 13)}${L3.t(180, 172, "catedral", "var(--pen)", 13)}`),
    {
      html: `<h3>10. Juego: ¿qué es cada cosa?</h3><p>Mira los dibujos y di su nombre.</p><p>La <mark>campana</mark> avisa de que empieza la misa. El <mark>altar</mark> es la mesa de la misa.</p><p>La <mark>pila</mark> tiene el agua del Bautismo. La <mark>cruz</mark> nos recuerda el amor de Jesús.</p><p>Cuando vayas a una iglesia, búscalos. ¿Los encuentras todos?</p><p>¡Ya eres un experto!</p><p>Pide a tu familia que te enseñe una iglesia de tu localidad. ¿Qué cosas reconoces?</p>`,
      svg: svg("Cuatro tarjetas con una campana, un altar, una pila bautismal y una cruz", `${[[campana(0, -10, 1.1), "campana"], [altar(0, 0, 40), "altar"], [`<g transform="scale(.7)">${pila(0, 6)}</g>`, "pila"], [cruz(0, 6, 0.9), "cruz"]].map(([d, t], i) => `<rect x="${12 + i * 61}" y="30" width="54" height="100" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><g transform="translate(${39 + i * 61} 96)">${d}</g>${rot(39 + i * 61, 122, t, { size: 11, color: "var(--muted)" })}`).join("")}${rot(130, 160, "¿Cómo se llama?", { color: "var(--pen)", size: 15 })}`),
    },
    L3.B("11. Repaso: lo que ya sabes", `<p>La <mark>Iglesia</mark> es la gran familia de los que siguen a Jesús. La <b>iglesia</b> es el edificio donde se reúnen.</p><p>Entramos en la Iglesia por el <b>Bautismo</b>.</p><p>Dentro de la iglesia están el altar, el ambón, la cruz y la pila bautismal.</p><p>El Papa, los obispos, los sacerdotes y los catequistas ayudan. Los domingos hay misa. Y la Iglesia ayuda a quien lo necesita.</p>`, "Una iglesia con campanario rodeada de personas de la mano", `${L3.iglesia(130, 110)}${[0, 1, 2, 3, 4].map((i) => L3.nino(30 + i * 50, 168, { c: ["var(--red)", "var(--pen)", "var(--leaf)", "var(--inf)", "var(--sun)"][i], pose: "brazos", s: 0.65, nina: i % 2 === 1 })).join("")}`),
  ],
  figura: {
    titulo: "La Iglesia: personas y templo",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="A la izquierda la iglesia edificio; a la derecha cuatro cosas que hace la Iglesia: se reúne, celebra, enseña y ayuda">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      <g transform="translate(150 250) scale(1.9)">${iglesia(0, 0)}</g>
      <path d="M30 250 H290" stroke="var(--line)" stroke-width="4"/>
      ${rot(150, 280, "la iglesia (edificio)", { color: "var(--red)", size: 16 })}
      ${[["Se reúne", "en la misa del domingo", "var(--pen)"], ["Celebra", "Bautismo, Navidad, Pascua", "var(--leaf)"], ["Enseña", "catequesis: quién es Jesús", "var(--inf)"], ["Ayuda", "a pobres y enfermos", "var(--red)"]].map(([t, d, c], i) => `<rect x="330" y="${24 + i * 64}" width="290" height="54" rx="12" fill="var(--card)" stroke="${c}" stroke-width="3"/>${rot(345, 48 + i * 64, t, { color: c, size: 17, anchor: "start" })}${rot(345, 68 + i * 64, d, { size: 14, anchor: "start", w: 400 })}`).join("")}
    </svg>`,
  },
  video: { id: "0LEbrZAm7RA", titulo: "¿Qué es la Iglesia? (explicado para niños)", canal: "El Mundo de Cat - Católicos del Mundo", vistas: 329465, megusta: 3774, busqueda: "la iglesia explicada a los niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué diferencia hay entre «la Iglesia» y «la iglesia»?",
      pasos: ["Con mayúscula hablamos de las personas.", "Con minúscula hablamos del edificio.", "Las personas se reúnen dentro del edificio."],
      resultado: "la Iglesia es la familia de los cristianos; la iglesia es el templo." },
    { enunciado: "¿Cómo se entra a formar parte de la Iglesia?",
      pasos: ["Recordamos la pila con agua.", "El sacerdote echa agua y dice el nombre.", "Ese sacramento se llama Bautismo."],
      resultado: "por el Bautismo." },
    { enunciado: "¿Cómo ayuda la Iglesia a los demás?",
      pasos: ["Pensamos en lo que hacía Jesús: ayudaba a los pobres y enfermos.", "Cáritas da comida, ropa y compañía.", "Los misioneros hacen escuelas y hospitales."],
      resultado: "con Cáritas, los misioneros y la ayuda de todos." },
    { enunciado: "¿Qué diferencia hay entre una ermita y una catedral?", pasos: ["Las dos son iglesias: lugares donde se reúnen los cristianos.", "La ermita es pequeña y suele estar en el campo.", "La catedral es muy grande y en ella está el obispo."], resultado: "la ermita es pequeña y la catedral, muy grande." },
  ],
  errores: [
    "Pensar que la Iglesia es solo el edificio: sobre todo son las personas que siguen a Jesús.",
    "Creer que en la Iglesia solo cuentan los mayores: los niños también son importantes.",
    "Confundir el altar con una mesa cualquiera: es la mesa donde se celebra la misa.",
    "Pensar que la Iglesia solo reza: también enseña y ayuda a quien lo necesita.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Qué es la Iglesia, con mayúscula?", sol: "La gran familia de los que siguen a Jesús." },
    { nivel: "básico", q: "¿Qué hay en lo alto del campanario?", sol: "Campanas y, muchas veces, una cruz." },
    { nivel: "básico", q: "¿Cómo se entra en la Iglesia?", sol: "Por el Bautismo." },
    { nivel: "básico", q: "¿Qué se echa en la cabeza en el Bautismo?", sol: "Agua." },
    { nivel: "básico", q: "¿Cómo se llama la mesa donde se celebra la misa?", sol: "El altar." },
    { nivel: "básico", q: "¿Quién guía a toda la Iglesia?", sol: "El Papa." },
    { nivel: "básico", q: "¿Qué día se reúnen los cristianos en la misa?", sol: "El domingo." },
    { nivel: "medio", q: "Dibuja una iglesia con su campanario y su cruz.", sol: "El dibujo debe tener el edificio, la torre y una cruz." },
    { nivel: "básico", q: "Di una forma en que la Iglesia ayuda.", sol: "Por ejemplo: Cáritas da comida y ropa." },
    { nivel: "medio", q: "¿Cómo se llama la comunidad cristiana de tu barrio?", sol: "La parroquia (pueden decir su nombre)." },
    L3.b("¿Qué es una ermita?", "Una iglesia pequeña, muchas veces en el campo."),
    L3.m("Une: altar, pila, campana. Bautismo, misa, avisar.", "Altar-misa; pila-Bautismo; campana-avisar."),
    L3.m("Ordena de mayor a menor: ermita, catedral.", "Catedral y ermita."),
    L3.m("¿Qué pueden hacer los niños en la misa?", "Cantar, leer una petición o llevar las ofrendas."),
    L3.m("Dibuja una vidriera de colores.", "Dibujo con trozos de colores separados por líneas negras."),
    L3.m("¿Qué signos hay en el Bautismo?", "El agua y una vela encendida."),
    L3.a("Explica por qué decimos que la Iglesia es una familia.", "Porque todos los que siguen a Jesús son hermanos y se ayudan."),
    L3.a("Organiza con tu clase una recogida de alimentos.", "Traer alimentos y llevarlos a Cáritas o a un banco de alimentos."),
    L3.a("Busca información de la Sagrada Familia de Barcelona.", "Es una gran iglesia diseñada por Gaudí, famosa en todo el mundo."),
    L3.a("Pregunta en casa si estás bautizado y cuándo fue.", "Respuesta personal."),
    L3.a("Describe una iglesia que hayas visto.", "Por ejemplo: tenía campanario, vidrieras, altar y bancos."),
    L3.a("Di cómo puedes ayudar en tu parroquia o en tu barrio.", "Por ejemplo: en una recogida de alimentos o cantando en el coro."),
  ],
  quiz: [
    { q: "La Iglesia es…", o: ["la familia de los cristianos", "un parque", "un colegio"], a: 0, e: "Es la gran familia de los que siguen a Jesús." },
    { q: "La iglesia con minúscula es…", o: ["un edificio", "una persona", "una canción"], a: 0, e: "Es el templo donde se reúnen." },
    { q: "¿Qué avisa de que empieza la misa?", o: ["Las campanas", "Un silbato", "Un timbre de casa"], a: 0, e: "Las campanas suenan para avisar." },
    { q: "¿Con qué se bautiza?", o: ["Con agua", "Con arena", "Con leche"], a: 0, e: "Se echa agua en la cabeza." },
    { q: "¿Cómo se llama la mesa de la misa?", o: ["Altar", "Pupitre", "Mostrador"], a: 0, e: "El altar." },
    { q: "¿Dónde vive el Papa?", o: ["En Roma", "En Belén", "En París"], a: 0, e: "El Papa vive en Roma." },
    { q: "¿Quién celebra la misa en la parroquia?", o: ["El sacerdote", "El médico", "El panadero"], a: 0, e: "El sacerdote." },
    { q: "¿Qué día es la misa principal?", o: ["El domingo", "El martes", "El jueves"], a: 0, e: "Los cristianos se reúnen el domingo." },
    { q: "¿Qué hace Cáritas?", o: ["Ayuda a quien lo necesita", "Vende juguetes", "Hace carreras"], a: 0, e: "Da comida, ropa y compañía." },
    { q: "En la Iglesia, los niños…", o: ["también son importantes", "no cuentan", "no pueden ir"], a: 0, e: "Todos tienen sitio en la gran familia." },
    L3.Q("Una catedral es…", ["una iglesia muy grande", "una casa pequeña", "un parque"], 0, "Allí está el obispo."),
    L3.Q("En un monasterio viven…", ["monjes o monjas", "pescadores", "astronautas"], 0, "Rezan y trabajan."),
  ],
  examen: [
    { q: "¿Por qué decimos que la Iglesia es una familia?", o: ["Porque todos son hermanos", "Porque viven en la misma casa", "Porque se apellidan igual"], a: 0, e: "Todos los cristianos son hermanos." },
    { q: "¿Qué sacramento nos hace parte de la Iglesia?", o: ["El Bautismo", "La Navidad", "El recreo"], a: 0, e: "El Bautismo." },
    { q: "¿Qué hay en el sagrario?", o: ["El pan consagrado", "Libros", "Juguetes"], a: 0, e: "Se guarda el pan consagrado." },
    { q: "La parroquia es…", o: ["la comunidad cristiana del barrio", "un mercado", "un hospital"], a: 0, e: "Es la Iglesia cerca de casa." },
    L3.Q("¿Cómo se entra en la Iglesia?", ["Por el Bautismo", "Comprando una entrada", "Corriendo"], 0, "El Bautismo nos hace miembros."),
    L3.Q("¿Qué es una ermita?", ["Una iglesia pequeña", "Una catedral", "Un colegio"], 0, "Suele estar en el campo."),
  ],
  feynman: ["Qué es la Iglesia y qué es una iglesia", "Qué hay dentro de una iglesia", "Cómo ayuda la Iglesia a los demás"],
  mapa: mapa("LA IGLESIA", "var(--pri)", [
    ["Familia", "los que siguen a Jesús", "var(--pen)"],
    ["Bautismo", "así entramos en la Iglesia", "var(--water)"],
    ["Templo", "altar · cruz · sagrario", "var(--red)"],
    ["Ayuda", "Cáritas · misioneros", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["¿Qué es la Iglesia?", "La gran familia de los cristianos."],
    ["¿Qué es una iglesia?", "El edificio donde se reúnen."],
    ["¿Cómo se entra en la Iglesia?", "Por el Bautismo."],
    ["¿Qué es el altar?", "La mesa donde se celebra la misa."],
    ["¿Quién guía a toda la Iglesia?", "El Papa."],
    ["¿Quién celebra la misa?", "El sacerdote."],
    ["¿Qué es la parroquia?", "La comunidad cristiana del barrio."],
    ["¿Qué hace Cáritas?", "Ayuda a quien lo necesita."],
    ["¿Qué es una catedral?", "Una iglesia muy grande donde está el obispo"],
    ["¿Qué es una ermita?", "Una iglesia pequeña en el campo"],
  ],
  glosario: [
    ["Iglesia", "La gran familia de los que siguen a Jesús."],
    ["iglesia", "El edificio donde se reúnen los cristianos."],
    ["Bautismo", "El sacramento que nos hace miembros de la Iglesia."],
    ["Altar", "La mesa donde se celebra la misa."],
    ["Misa", "La celebración de los cristianos, sobre todo el domingo."],
    ["Parroquia", "La comunidad cristiana del barrio o del pueblo."],
    ["Sacerdote", "Quien celebra la misa en la parroquia."],
    ["Catedral", "Iglesia muy grande donde está el obispo."],
    ["Cáritas", "Grupo de la Iglesia que ayuda a quien lo necesita."],
  ],
  situacion: L3.sit("Nuestra iglesia de cartón", "Vamos a construir una maqueta de iglesia y a explicar qué hay dentro y para qué sirve cada cosa.", ["Por grupos, construimos la iglesia con una caja: campanario, cruz y puerta.", "Dentro ponemos los bancos, el altar, el ambón, la pila y las velas.", "Hacemos etiquetas con el nombre de cada cosa.", "Presentamos la maqueta y explicamos qué es la Iglesia y cómo ayuda."], "Una maqueta de iglesia con sus partes nombradas.", ["Nombra las partes de una iglesia.", "Distingue Iglesia (personas) e iglesia (edificio).", "Explica una forma en que la Iglesia ayuda."]),
  familias: [
    "Visitad juntos la iglesia del barrio y buscad el altar, la cruz, la pila y el sagrario.",
    "Mirad fotos del bautizo del niño o la niña, o de un familiar, y contad cómo fue.",
    "Preguntad en la parroquia por actividades para niños, como la catequesis o el coro.",
    "Participad juntos en una recogida de alimentos o de ropa.",
  ],
  profesores: PROF("Religión Católica, primer ciclo: la Iglesia como comunidad de los seguidores de Jesús, el Bautismo, el templo y sus elementos, y la acción caritativa de la Iglesia. Área de opción dentro del marco del RD 157/2022", ["Visita guiada a la parroquia cercana con una ficha de objetos para encontrar.", "Mural de la gran familia con fotos o dibujos de cada niño o niña.", "Campaña de clase para Cáritas o una ONG cercana."]),
  fuentes: FUENTES,
  revisado: "2026-11-14",
};
