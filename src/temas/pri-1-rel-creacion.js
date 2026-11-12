// Religión 1º de Primaria: la creación, regalo de Dios.
const { mapa } = require("./_util");
const { svg, rot, big, nino, sol, luna, nube, arbol, flor, estrella, corazon, pez, pajaro, suelo, PROF, FUENTES } = require("./_pri1-dib");

// Iconos pequeños de cada día de la creación.
const dia = (n, x, y, dib) => `<g><rect x="${x}" y="${y}" width="36" height="52" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${dib}${big(x + 18, y + 48, n, "var(--pen)", 14)}</g>`;

module.exports = {
  materia: "Religión",
  curso: "1-primaria",
  titulo: "La creación, regalo de Dios",
  minutos: 20,
  objetivos: ["Conocer el relato de la creación de la Biblia", "Descubrir que el mundo es un regalo de Dios", "Aprender a cuidar la naturaleza y a dar gracias"],
  claves: ["creación", "Dios", "regalo", "Biblia", "cuidar", "gracias"],
  pregunta: {
    texto: "Mira por la ventana. ¿Qué cosas bonitas ves? ¿Quién las hizo?",
    respuesta: "Los cristianos creemos que <mark>Dios creó el mundo</mark> por amor. El sol, los árboles y los animales son un regalo para todos.",
  },
  bloques: [
    {
      html: `<h3>Un mundo lleno de regalos</h3><p>El sol, el mar, las flores y los animales son <mark>regalos</mark>.</p><p>Los cristianos creemos que <b>Dios</b> los hizo con mucho amor.</p><p>Crear es hacer algo nuevo. Por eso decimos que el mundo es <b>la creación</b> de Dios.</p><p>Nadie nos los ha vendido. Están ahí para que todos podamos <b>disfrutarlos</b>.</p>`,
      svg: svg("Un niño con los brazos abiertos bajo el sol, junto a un árbol y unas flores", `${sol(210, 40)}${nube(80, 36)}${arbol(50, 150)}${flor(170, 150)}${flor(195, 150, "var(--inf)")}${nino(120, 150, { pose: "brazos" })}${suelo(150)}${rot(130, 172, "¡Todo es un regalo!", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>La Biblia nos lo cuenta</h3><p>La <b>Biblia</b> es el libro más importante para los cristianos.</p><p>Su primera parte cuenta cómo Dios <mark>creó el mundo</mark>.</p><p>Lo explica como si Dios trabajara <b>seis días</b>. Cada día hizo cosas nuevas. Al final, vio que todo era <mark>muy bueno</mark>.</p><p>Este relato no es un libro de ciencias. Nos enseña algo muy importante: <b>Dios nos quiere</b>.</p>`,
      svg: svg("Una Biblia abierta con una estrella encima", `<path d="M130 60 Q95 46 50 52 V140 Q95 134 130 148 Q165 134 210 140 V52 Q165 46 130 60z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><path d="M130 60 V148" stroke="var(--ink)" stroke-width="2"/>${[0, 1, 2, 3].map((i) => `<path d="M64 ${74 + i * 16} H118 M142 ${74 + i * 16} H196" stroke="var(--line)" stroke-width="3"/>`).join("")}${estrella(130, 30, 14)}${rot(130, 170, "La Biblia", { color: "var(--pen)", size: 15 })}`),
    },
    {
      html: `<h3>La luz, el día y la noche</h3><p>Primero, Dios hizo <mark>la luz</mark>.</p><p>Separó la luz de la oscuridad. Así nacieron <b>el día</b> y <b>la noche</b>.</p><p>Más tarde puso el <b>sol</b> para el día. Y puso la <b>luna</b> y las <b>estrellas</b> para la noche.</p><p>De día jugamos y vamos al cole. De noche, el cielo se oscurece y <b>dormimos</b> para descansar.</p>`,
      svg: svg("A la izquierda el día con el sol; a la derecha la noche con la luna y estrellas", `<rect x="14" y="14" width="114" height="130" rx="10" fill="#bfe3ff"/><rect x="132" y="14" width="114" height="130" rx="10" fill="#1c2550"/>${sol(70, 70, 20)}${luna(185, 50, 18)}${estrella(220, 90, 7, "#ffe9a0")}${estrella(160, 110, 6, "#ffe9a0")}${estrella(215, 125, 5, "#ffe9a0")}${rot(71, 166, "el día", { color: "var(--pen)" })}${rot(189, 166, "la noche", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>El cielo, el agua y la tierra</h3><p>Después, Dios separó <b>el cielo</b> de <b>las aguas</b>.</p><p>Juntó el agua en los <mark>mares</mark> y apareció la <mark>tierra seca</mark>.</p><p>En la tierra hay montañas, campos y caminos. En el mar hay olas y mucha agua salada.</p><p>El agua es muy necesaria. Sin agua no podrían vivir las plantas, los animales ni las personas.</p>`,
      svg: svg("Paisaje con cielo y nubes, una montaña verde y el mar azul con olas", `<rect x="14" y="14" width="232" height="70" rx="10" fill="#bfe3ff"/>${nube(70, 40)}${nube(190, 44, 0.8)}<path d="M14 120 L80 62 L140 120z" fill="var(--leaf)"/><rect x="14" y="118" width="120" height="30" fill="#c99a5b"/><rect x="134" y="100" width="112" height="48" fill="var(--water)"/><path d="M144 116 q8 -6 16 0 q8 6 16 0 q8 -6 16 0 q8 6 16 0 q8 -6 16 0" stroke="#fff" stroke-width="2.5" fill="none"/>${rot(74, 170, "la tierra", { color: "var(--leaf)" })}${rot(190, 170, "el mar", { color: "var(--water)" })}`),
    },
    {
      html: `<h3>Las plantas y los animales</h3><p>Dios llenó la tierra de <mark>plantas</mark>: árboles, flores y hierba.</p><p>Luego hizo los <b>peces</b> del mar y los <b>pájaros</b> del cielo.</p><p>Por último, hizo los animales de la tierra. Hay animales grandes, como el elefante, y pequeños, como la hormiga.</p><p>Las plantas dan sombra, flores y frutas. Los animales viven en el campo, en el mar y en el aire.</p>`,
      svg: svg("Un árbol, flores, pájaros volando y peces en el agua", `${arbol(45, 120)}${flor(90, 120)}${flor(110, 120, "var(--inf)")}${pajaro(150, 40)}${pajaro(185, 30)}${pajaro(215, 48)}<rect x="130" y="96" width="116" height="52" rx="8" fill="var(--water)" opacity=".35"/>${pez(165, 120, "var(--inf)")}${pez(215, 112)}${suelo(122)}${rot(130, 170, "plantas · pájaros · peces", { color: "var(--pen)", size: 13 })}`),
      video: { id: "_I-wzwOb3sA", titulo: "Dios hace todo | Historia de la Biblia | Mi primera biblia", canal: "Mi Primera Biblia", vistas: 2883033 },
    },
    {
      html: `<h3>Las personas, lo más especial</h3><p>El último día, Dios creó a <b>las personas</b>.</p><p>La Biblia dice que nos hizo <mark>a su imagen</mark>: podemos pensar, querer y elegir.</p><p>Cada persona es <b>única</b>. Nadie es igual que tú. ¡Dios te quiere tal como eres!</p><p>Dios nos pidió algo importante: <mark>cuidar el mundo</mark> y querernos unos a otros.</p>`,
      svg: svg("Dos niños diferentes de la mano con un corazón entre ellos", `${nino(95, 150, { c: "var(--pen)" })}${nino(165, 150, { c: "var(--red)", nina: true, pelo: "#8a5a2b" })}<path d="M108 108 Q130 118 152 108" stroke="var(--muted)" stroke-width="3" fill="none"/>${corazon(130, 50, 2)}${suelo(150)}${rot(130, 172, "Cada persona es única", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>El día de descanso</h3><p>Al séptimo día, Dios <mark>descansó</mark>.</p><p>Por eso los cristianos tienen un día para descansar: <b>el domingo</b>. Es un día para la familia y para Dios.</p><p>Descansar también es bueno. Después de trabajar y estudiar, necesitamos tiempo para jugar y estar juntos.</p><p>Muchas familias van a misa el domingo. Allí dan <b>gracias</b> a Dios por todo lo bueno.</p>`,
      svg: svg("Una semana de siete casillas: las seis primeras con una herramienta y la séptima con un corazón", `${[...Array(7)].map((_, i) => `<rect x="${12 + i * 34}" y="40" width="32" height="56" rx="6" fill="${i === 6 ? "var(--sun)" : "var(--card)"}" stroke="var(--ink)" stroke-width="1.5"/>${big(28 + i * 34, 64, i + 1, i === 6 ? "var(--ink)" : "var(--pen)", 18)}${i === 6 ? corazon(28 + i * 34, 82, 0.8) : `<circle cx="${28 + i * 34}" cy="82" r="5" fill="var(--leaf)"/>`}`).join("")}${rot(110, 130, "6 días de trabajo", { color: "var(--leaf)", size: 13 })}${rot(214, 130, "descanso", { color: "var(--red)", size: 13 })}`),
    },
    {
      html: `<h3>¿Para qué sirve? Cuidar la creación</h3><p>Dios nos dejó el mundo para <mark>cuidarlo</mark>.</p><p>Tú también puedes ayudar: <b>riega</b> las plantas, no tires papeles al suelo y <b>cierra el grifo</b>.</p><p>Trata bien a los animales. Si cuidamos la naturaleza, todos podremos disfrutarla mucho tiempo.</p><p>Así también damos <mark>gracias</mark> a Dios por su regalo.</p>`,
      svg: svg("Una niña riega una flor y un papel va a la papelera", `${nino(70, 150, { pose: "palmas", nina: true, c: "var(--leaf)" })}<path d="M84 104 l26 8 l-4 10 l-22 -4z" fill="var(--water)"/><path d="M112 118 q4 6 2 14 M118 116 q6 8 4 16" stroke="var(--water)" stroke-width="2" fill="none"/>${flor(125, 150)}<path d="M190 118 h34 l-4 32 h-26z" fill="var(--leaf)"/><circle cx="180" cy="80" r="7" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M188 84 q14 6 18 26" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="4 3"/>${suelo(150)}${rot(130, 172, "Cuidamos el mundo", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Juego: los días de la creación</h3><p>Vamos a <mark>repasar</mark>. Mira cada casilla y di qué hizo Dios ese día.</p><p>1 la luz · 2 el cielo · 3 la tierra y las plantas · 4 el sol y la luna · 5 peces y pájaros · 6 animales y personas.</p><p>¿Y el día 7? ¡Descansó!</p><p>Ahora tapa los números con la mano. ¿Te acuerdas del orden? Pide a un amigo que te pregunte.</p>`,
      svg: svg("Seis casillas numeradas con un dibujo de cada día de la creación", `${dia(1, 10, 40, `<circle cx="28" cy="62" r="8" fill="var(--sun)"/>`)}${dia(2, 50, 40, nube(68, 62, 0.45))}${dia(3, 90, 40, `<path d="M98 72 L108 56 L118 72z" fill="var(--leaf)"/>`)}${dia(4, 130, 40, luna(146, 52, 8))}${dia(5, 170, 40, pez(188, 62, "var(--water)").replace("translate(188 62)", "translate(186 62) scale(.6)"))}${dia(6, 210, 40, corazon(228, 64, 0.7))}${rot(130, 130, "¿Qué hizo Dios cada día?", { color: "var(--pen)" })}${rot(130, 154, "Día 7: descanso", { color: "var(--muted)", size: 13 })}`),
    },
  ],
  figura: {
    titulo: "Los siete días de la creación",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Siete tarjetas con lo que creó Dios cada día: luz, cielo, tierra y plantas, sol y luna, peces y aves, animales y personas, y descanso">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["Luz", "var(--sun)"], ["Cielo", "var(--water)"], ["Tierra y plantas", "var(--leaf)"], ["Sol, luna y estrellas", "var(--inf)"], ["Peces y aves", "var(--water)"], ["Animales y personas", "var(--red)"], ["Descanso", "var(--pen)"]].map(([t, c], i) => {
        const x = 20 + (i % 4) * 152, y = i < 4 ? 30 : 160;
        const xx = i < 4 ? x : x + 76;
        return `<rect x="${xx}" y="${y}" width="140" height="110" rx="12" fill="var(--card)" stroke="${c}" stroke-width="3"/>${big(xx + 70, y + 46, i + 1, c, 34)}${rot(xx + 70, y + 86, t, { size: 14 })}`;
      }).join("")}
    </svg>`,
  },
  video: { id: "UVou_Dmndqc", titulo: "Biblia para Niños - La Creación - Génesis 1", canal: "Ana Upia", vistas: 5868846, megusta: 40248, busqueda: "la creación del mundo para niños biblia" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Quién creó el mundo, según la Biblia?",
      pasos: ["Recordamos el primer libro de la Biblia.", "Cuenta que Dios hizo la luz, el cielo, la tierra, los animales y las personas.", "Lo hizo por amor, como un regalo."],
      resultado: "Dios creó el mundo." },
    { enunciado: "Ordena: animales y personas · luz · plantas.",
      pasos: ["Primero Dios hizo la luz.", "Después, la tierra con sus plantas.", "Al final, los animales y las personas."],
      resultado: "luz → plantas → animales y personas." },
    { enunciado: "Ves un papel en el suelo del parque. ¿Qué haces?",
      pasos: ["Pensamos: el parque es parte de la creación.", "Cuidar la creación es mantenerla limpia.", "Recogemos el papel y lo echamos a la papelera."],
      resultado: "lo tiro a la papelera para cuidar la naturaleza." },
  ],
  errores: [
    "Pensar que las cosas de la naturaleza no son de nadie y se pueden romper: son un regalo para todos y hay que cuidarlas.",
    "Creer que las personas somos iguales a las cosas: cada persona es única y muy querida por Dios.",
    "Confundir el orden: la luz fue lo primero y las personas, lo último.",
    "Pensar que descansar es perder el tiempo: el descanso también es bueno.",
  ],
  ejercicios: [
    { q: "Di tres cosas de la naturaleza que te gusten.", sol: "Por ejemplo: el mar, los perros y las flores. Cualquier respuesta de la naturaleza vale." },
    { q: "¿Qué hizo Dios el primer día?", sol: "La luz, y separó el día de la noche." },
    { q: "Dibuja el día y la noche en dos partes de una hoja.", sol: "En el día debe haber sol; en la noche, luna y estrellas." },
    { q: "¿Dónde viven los peces? ¿Y los pájaros?", sol: "Los peces, en el agua. Los pájaros, en el cielo y en los árboles." },
    { q: "¿Qué creó Dios en último lugar?", sol: "A las personas." },
    { q: "¿Qué hizo Dios el séptimo día?", sol: "Descansó." },
    { q: "Di dos cosas que puedes hacer para cuidar la naturaleza.", sol: "Por ejemplo: regar las plantas y no tirar papeles al suelo." },
    { q: "¿Por qué decimos que cada persona es única?", sol: "Porque no hay nadie igual a otra persona; Dios nos quiere a cada uno." },
    { q: "Rodea lo que hizo Dios: el sol · un coche · un árbol · un pez.", sol: "El sol, el árbol y el pez. El coche lo hicieron las personas." },
    { q: "Inventa una frase para dar gracias por la naturaleza.", sol: "Por ejemplo: «Gracias, Dios, por el sol y los árboles»." },
  ],
  quiz: [
    { q: "¿Qué libro nos cuenta la creación?", o: ["La Biblia", "Un cuento de hadas", "El diccionario"], a: 0, e: "La Biblia cuenta cómo Dios creó el mundo." },
    { q: "¿Qué hizo Dios el primer día?", o: ["Los peces", "La luz", "Las personas"], a: 1, e: "Primero hizo la luz." },
    { q: "¿Para qué puso Dios el sol?", o: ["Para la noche", "Para el día", "Para el mar"], a: 1, e: "El sol alumbra el día." },
    { q: "¿Qué hay en la noche?", o: ["La luna y las estrellas", "El sol", "Nada"], a: 0, e: "La luna y las estrellas brillan de noche." },
    { q: "¿Qué creó Dios al final?", o: ["Las plantas", "La luz", "Las personas"], a: 2, e: "Las personas fueron lo último." },
    { q: "¿Cuántos días trabajó Dios en el relato?", o: ["Seis", "Dos", "Diez"], a: 0, e: "Seis días, y el séptimo descansó." },
    { q: "¿Qué hizo Dios el séptimo día?", o: ["Hizo el mar", "Descansó", "Hizo los peces"], a: 1, e: "El séptimo día descansó." },
    { q: "¿Cómo cuidamos la creación?", o: ["Tirando papeles", "Regando las plantas", "Rompiendo ramas"], a: 1, e: "Regar las plantas es cuidar la naturaleza." },
    { q: "Las personas somos…", o: ["todas iguales", "únicas", "cosas"], a: 1, e: "Cada persona es única." },
    { q: "¿Qué decimos al recibir un regalo?", o: ["Gracias", "Nada", "¡Quiero más!"], a: 0, e: "Damos gracias, también a Dios por el mundo." },
  ],
  examen: [
    { q: "¿Quién creó el mundo, según la Biblia?", o: ["Los animales", "Dios", "El sol"], a: 1, e: "Dios creó el mundo por amor." },
    { q: "¿Dónde viven los peces?", o: ["En el agua", "En el cielo", "En los árboles"], a: 0, e: "Dios hizo los peces del mar." },
    { q: "¿Qué es cuidar la creación?", o: ["Ensuciar el río", "No tirar basura", "Pisar las flores"], a: 1, e: "Mantener limpio el mundo es cuidarlo." },
    { q: "¿Qué día descansan muchos cristianos?", o: ["El domingo", "El lunes", "El miércoles"], a: 0, e: "El domingo es el día del Señor." },
  ],
  feynman: ["Qué cuenta la Biblia sobre la creación", "Por qué el mundo es un regalo", "Cómo puedo cuidar la naturaleza"],
  mapa: mapa("LA CREACIÓN", "var(--pri)", [
    ["Dios crea", "por amor, como un regalo", "var(--pen)"],
    ["Seis días", "luz, cielo, tierra, seres vivos", "var(--leaf)"],
    ["Las personas", "únicas, a imagen de Dios", "var(--red)"],
    ["Cuidar y agradecer", "cuidar el mundo · dar gracias", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["¿Quién creó el mundo?", "Dios, por amor."],
    ["¿Qué libro lo cuenta?", "La Biblia."],
    ["¿Qué hizo Dios primero?", "La luz."],
    ["¿Qué hizo Dios al final?", "Las personas."],
    ["¿Qué hizo el séptimo día?", "Descansar."],
    ["¿Cómo somos las personas?", "Únicas y queridas por Dios."],
    ["¿Cómo cuido la creación?", "Riego, no ensucio y trato bien a los animales."],
    ["¿Qué le decimos a Dios por el mundo?", "¡Gracias!"],
  ],
  familias: [
    "Dad un paseo por un parque y nombrad juntos las cosas de la naturaleza que veáis.",
    "Cuidad una planta en casa: que el niño o la niña se encargue de regarla.",
    "Por la noche, mirad la luna y las estrellas y recordad el relato de la creación.",
    "Antes de comer o de dormir, decid juntos una frase de gracias por algo bonito del día.",
  ],
  profesores: PROF("Religión Católica, primer ciclo: el mundo y la vida como don de Dios; el relato de la creación (Gn 1) y el cuidado de la casa común. Área de opción dentro del marco del RD 157/2022", ["Mural de los siete días con dibujos del alumnado.", "Paseo por el patio para descubrir seres vivos e inertes.", "Rincón de la planta: turnos para regarla y oración de gracias."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
