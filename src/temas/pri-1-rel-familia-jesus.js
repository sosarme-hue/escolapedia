// Religión 1º de Primaria: la familia de Jesús.
const { mapa } = require("./_util");
const { svg, rot, big, nino, estrella, corazon, casa, suelo, PROF, FUENTES } = require("./_pri1-dib");
const L3 = require("./_pri1L3");

const MADERA = "#8a5a2b";
// Aureola sobre la cabeza de un niño dibujado con nino(x, y, { s }).
const aureola = (x, y, s = 1) => `<ellipse cx="${x}" cy="${y - 74 * s}" rx="${11 * s}" ry="${3.5 * s}" fill="none" stroke="var(--sun)" stroke-width="2.5"/>`;
const maria = (x, y, s = 1, pose = "pie") => nino(x, y, { c: "var(--water)", nina: true, pelo: "#5b3a1e", s, pose });
const jose = (x, y, s = 1, pose = "pie") => nino(x, y, { c: MADERA, pelo: "#3b2a1a", s, pose });
const jesus = (x, y, s = 0.7, pose = "pie") => nino(x, y, { c: "var(--red)", pelo: "#5b3a1e", s, pose });
const ninoGen = (x, y, c, s = 1, nina = false) => nino(x, y, { c, s, nina });

module.exports = {
  materia: "Religión",
  curso: "1-primaria",
  titulo: "La familia de Jesús",
  minutos: 50,
  objetivos: ["Conocer a María y a José, la familia de Jesús", "Saber cómo vivía Jesús de niño en Nazaret", "Valorar el cariño y la ayuda en la propia familia"],
  claves: ["Jesús", "María", "José", "Nazaret", "Sagrada Familia"],
  pregunta: {
    texto: "¿Quién te cuida en casa? ¿Quién cuidaba a Jesús cuando era pequeño?",
    respuesta: "Jesús tenía una familia como tú: su madre, <mark>María</mark>, y <mark>José</mark>, que lo cuidaba como un padre.",
  },
  lectura: L3.lect("El belén de casa", `<p>Llega diciembre y Pablo monta el belén con su madre.</p><p>Saca de una caja unas figuritas pequeñas. Hay un burro, un buey, unos pastores y una estrella dorada.</p><p>«¿Quiénes son estos?», pregunta Pablo, con tres figuras en la mano.</p><p>«Son María, José y el niño Jesús», responde su madre. «Son la familia de Jesús.»</p><p>Pablo coloca a María y a José juntos, mirando al niño. «Lo están cuidando, como tú me cuidas a mí», dice.</p><p>Su madre le da un abrazo muy fuerte.</p><p>¿Cómo era la familia de Jesús? ¿Dónde vivían? En este tema lo vas a descubrir.</p>`),
  bloques: [
    {
      html: `<h3>1. Jesús tiene una familia</h3><p>Jesús nació en una <mark>familia</mark>, igual que tú.</p><p>Su madre se llamaba <b>María</b>. <b>José</b> lo cuidaba como un padre.</p><p>Los tres vivían juntos, se querían mucho y se ayudaban. Los cristianos llamamos a esta familia <mark>la Sagrada Familia</mark>. Sagrada quiere decir que es muy especial para Dios.</p><p>Como en tu casa, cada uno tenía su tarea.</p><p>Como cualquier familia, celebraban fiestas, comían juntos y se contaban cosas.</p>`,
      svg: svg("José, Jesús niño y María de pie, juntos", `${jose(70, 150)}${jesus(130, 150)}${maria(190, 150)}${aureola(130, 150, 0.7)}${suelo(150)}${rot(70, 172, "José", { color: MADERA })}${rot(130, 172, "Jesús", { color: "var(--red)" })}${rot(190, 172, "María", { color: "var(--water)" })}`),
    },
    {
      html: `<h3>2. María, la madre de Jesús</h3><p>María era una joven buena de <b>Nazaret</b>.</p><p>Un día, un ángel llamado <b>Gabriel</b> la visitó. Le dijo: «Vas a ser la madre del Hijo de Dios».</p><p>María se sorprendió, pero confió en Dios. Respondió que <mark>sí</mark>. Por eso María es un ejemplo de confianza y de amor.</p><p>Los cristianos la queremos mucho y la llamamos <b>la Virgen María</b>.</p><p>Por eso muchas iglesias tienen imágenes de María con el niño Jesús en brazos.</p>`,
      svg: svg("Un ángel con alas habla con María", `<g transform="translate(70 150)"><path d="M-6 -50 q-30 -10 -34 18 q16 -6 30 0z M6 -50 q30 -10 34 18 q-16 -6 -30 0z" fill="var(--card)" stroke="var(--line)" stroke-width="2"/></g>${nino(70, 150, { c: "var(--sun)", pose: "arriba", pelo: "#e8b84a" })}${maria(180, 150, 1, "reza")}${suelo(150)}<path d="M100 60 q40 -26 60 -6" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="4 3"/>${rot(70, 172, "Gabriel", { color: "var(--inf)" })}${rot(180, 172, "María", { color: "var(--water)" })}`),
      video: { id: "1eNaSYnyLRM", titulo: "Historias de la Biblia para niños: José y María", canal: "Pequeños Heroes", vistas: 4126409 },
    },
    {
      html: `<h3>3. José, el carpintero</h3><p>José era <mark>carpintero</mark>: hacía mesas, sillas y puertas de madera.</p><p>Era un hombre bueno y trabajador. Cuidaba de María y de Jesús.</p><p>José también confió en Dios. Siempre <b>protegió</b> a su familia, aunque hubiera problemas. Gracias a su trabajo, en casa no faltaba comida.</p><p>Jesús aprendió de él a trabajar con las manos.</p><p>El taller de José olía a madera. Allí había martillos, sierras y clavos.</p>`,
      svg: svg("José con un martillo junto a una mesa de madera", `${jose(80, 150, 1, "lanza")}<rect x="56" y="70" width="16" height="7" rx="2" fill="var(--muted)" transform="rotate(-30 64 74)"/><rect x="130" y="104" width="90" height="10" rx="2" fill="${MADERA}"/><rect x="138" y="114" width="8" height="36" fill="${MADERA}"/><rect x="204" y="114" width="8" height="36" fill="${MADERA}"/>${suelo(150)}${rot(130, 172, "José trabaja la madera", { color: MADERA })}`),
    },
    {
      html: `<h3>4. Jesús nace en Belén</h3><p>María y José tuvieron que viajar a <b>Belén</b>.</p><p>Allí no encontraron sitio para dormir. Jesús nació en un <mark>establo</mark>, donde dormían los animales.</p><p>María lo envolvió en pañales y lo acostó en un pesebre. Una <b>estrella</b> brillaba en el cielo. Lo celebramos en <mark>Navidad</mark>.</p><p>Unos pastores fueron a verlo muy contentos.</p><p>Por eso en Navidad muchas familias ponen un belén en casa.</p>`,
      svg: svg("Un establo sencillo con una estrella encima y el niño Jesús en el pesebre", `${estrella(130, 28, 14)}<path d="M50 150 V80 L130 44 L210 80 V150" fill="none" stroke="${MADERA}" stroke-width="5" stroke-linejoin="round"/><path d="M106 150 l8 -22 h32 l8 22" fill="#c99a5b"/><ellipse cx="130" cy="124" rx="18" ry="7" fill="var(--sun)" opacity=".6"/><circle cx="130" cy="118" r="7" fill="#f3c9a1"/>${suelo(150)}${rot(130, 172, "Belén", { color: "var(--pen)" })}`),
    },
    L3.B("5. El viaje a Egipto", `<p>Después de nacer Jesús, un ángel avisó a José en sueños: <mark>«Hay peligro. Huye a Egipto»</mark>.</p><p>José se levantó por la noche. Cogió a María y al niño y viajaron lejos, a otro país.</p><p>Allí vivieron un tiempo, a salvo. Cuando pasó el peligro, volvieron a casa.</p><p>José cuidó de su familia con valentía. Muchas familias de hoy también tienen que viajar para estar seguras.</p>`, "José, María y el niño en un burro camino de Egipto bajo las estrellas", `<g transform="translate(130 130)"><ellipse cx="0" cy="-14" rx="30" ry="14" fill="#9aa3b5"/><circle cx="30" cy="-28" r="9" fill="#9aa3b5"/><path d="M-20 -2 V12 M-8 -2 V12 M10 -2 V12 M22 -2 V12" stroke="#6b7385" stroke-width="4" stroke-linecap="round"/></g>${L3.nino(130, 112, { c: "var(--water)", s: 0.9, nina: true, pose: "sentado" })}${L3.nino(60, 150, { c: "#8a5a2b", s: 1.1 })}${L3.estrella(200, 34, 9)}${L3.estrella(230, 60, 6)}${L3.estrella(170, 24, 6)}${L3.luna(40, 40, 12)}${L3.suelo(152)}${L3.t(130, 172, "Camino de Egipto", "var(--pen)", 13)}`),
    {
      html: `<h3>6. Jesús crece en Nazaret</h3><p>Después, la familia volvió a vivir a <mark>Nazaret</mark>, un pueblo pequeño.</p><p>Jesús <b>crecía</b> como cualquier niño. Jugaba, aprendía y ayudaba en casa.</p><p>También ayudaba a José en el taller. Rezaba con su familia y escuchaba las historias de Dios. Era obediente y <mark>muy cariñoso</mark>.</p><p>Así pasaron muchos años, felices y tranquilos.</p><p>Nazaret era un pueblo con casas de piedra, pozos de agua y campos de olivos.</p>`,
      svg: svg("Jesús niño lleva una tabla junto a su casa de Nazaret", `${casa(70, 150, "#c99a5b")}${casa(200, 150, "var(--inf)")}${jesus(130, 150, 0.85, "palmas")}<rect x="104" y="98" width="52" height="7" rx="2" fill="${MADERA}"/>${suelo(150)}${rot(130, 172, "Nazaret", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>7. Jesús en el templo</h3><p>Cuando Jesús tenía <b>doce años</b>, fue con sus padres a <b>Jerusalén</b>.</p><p>Al volver, ¡Jesús no estaba! María y José lo buscaron <mark>tres días</mark>.</p><p>Lo encontraron en el <b>templo</b>, hablando con los maestros. Todos se admiraban de lo que sabía. Después volvió a casa con ellos.</p><p>María guardaba todo esto en su corazón.</p><p>María y José se asustaron mucho. ¡Igual que tu familia si te pierdes!</p>`,
      svg: svg("Jesús hablando con dos maestros delante del templo", `<rect x="40" y="30" width="180" height="20" fill="var(--sun)" opacity=".7"/>${[0, 1, 2, 3, 4].map((i) => `<rect x="${52 + i * 38}" y="50" width="10" height="56" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>`).join("")}${nino(60, 150, { c: "var(--muted)", pose: "sentado", pelo: "#bbb" })}${nino(200, 150, { c: "var(--muted)", pose: "sentado", pelo: "#bbb" })}${jesus(130, 150, 0.85, "brazos")}${suelo(150)}${rot(130, 172, "Jesús en el templo", { color: "var(--pen)" })}`),
      video: L3.V("jkAcph4SDho", "Historias de la Biblia: Jesús, el hijo", "Saddleback Kids", 1851315),
    },
    {
      html: `<h3>8. Una familia que se quiere</h3><p>En la casa de Nazaret había mucho <mark>amor</mark>.</p><p>María, José y Jesús <b>se escuchaban</b>, se ayudaban y rezaban juntos.</p><p>La Iglesia celebra la fiesta de la <b>Sagrada Familia</b> después de Navidad. Ese día, las familias piden a Dios ayuda para quererse más.</p><p>Tu familia también puede parecerse a la de Nazaret.</p><p>Antes de comer, la familia de Nazaret daba gracias a Dios por los alimentos.</p>`,
      svg: svg("Un gran corazón con María, Jesús y José dentro", `${corazon(130, 120, 6.2, "var(--red)").replace('fill="var(--red)"', 'fill="var(--red)" opacity=".18"')}${jose(88, 140, 0.8)}${jesus(130, 140, 0.6)}${maria(172, 140, 0.8)}${rot(130, 168, "La Sagrada Familia", { color: "var(--red)" })}`),
    },
    {
      html: `<h3>9. ¿Para qué sirve? Mi familia</h3><p>Todas las familias son <mark>diferentes</mark>. Unas son grandes y otras pequeñas.</p><p>Hay familias con abuelos, con hermanos o con un solo adulto.</p><p>En todas podemos hacer lo mismo que Jesús: <b>querer</b>, <b>ayudar</b> y <b>obedecer</b>. Por ejemplo, poner la mesa o recoger los juguetes.</p><p>Un abrazo o un «gracias» también ayudan mucho.</p><p>Mira tu familia y piensa: ¿qué cosa buena hace cada uno por los demás?</p>`,
      svg: svg("Tres familias distintas: una con abuela, otra con dos niños y otra con un padre y una niña", `${ninoGen(30, 150, "var(--muted)", 0.8, true)}${ninoGen(62, 150, "var(--leaf)", 0.6)}<path d="M84 60 V150" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/>${ninoGen(108, 150, "var(--inf)", 0.8, true)}${ninoGen(136, 150, "var(--pen)", 0.55)}${ninoGen(158, 150, "var(--red)", 0.55, true)}<path d="M178 60 V150" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/>${ninoGen(204, 150, "var(--pen)", 0.85)}${ninoGen(234, 150, "var(--sun)", 0.6, true)}${suelo(150)}${rot(130, 172, "Familias diferentes, mismo amor", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>10. Juego: ¿quién es quién?</h3><p>Adivina con un amigo. Lee la pista y di el nombre.</p><p>«Era carpintero y cuidaba de Jesús». <mark>José</mark>.</p><p>«Un ángel le dio una gran noticia». <mark>María</mark>.</p><p>«Se quedó en el templo hablando con los maestros». <mark>Jesús</mark>.</p><p>Ahora inventa tú una pista nueva.</p><p>¡Gana quien acierte más!</p><p>Podéis representar la historia con disfraces sencillos: un pañuelo y una barba de papel.</p>`,
      svg: svg("Tres tarjetas con interrogaciones para adivinar quién es José, María y Jesús", `${["José", "María", "Jesús"].map((n, i) => `<rect x="${18 + i * 78}" y="30" width="68" height="96" rx="10" fill="var(--card)" stroke="${[MADERA, "var(--water)", "var(--red)"][i]}" stroke-width="3"/>${big(52 + i * 78, 90, "?", ["#8a5a2b", "var(--water)", "var(--red)"][i], 42)}`).join("")}${rot(130, 154, "¿Quién es?", { color: "var(--pen)", size: 16 })}`),
    },
    L3.B("11. Repaso: lo que ya sabes", `<p>La familia de Jesús es la <mark>Sagrada Familia</mark>: María, José y Jesús.</p><p>María dijo sí al ángel Gabriel. José era carpintero y cuidaba de todos.</p><p>Jesús nació en Belén, viajó a Egipto y creció en Nazaret. A los doce años se quedó en el templo.</p><p>En su casa había mucho amor. Tu familia también puede quererse así.</p>`, "María, José y Jesús niño juntos bajo un corazón", `${L3.nino(70, 150, { c: "#8a5a2b", s: 1.3 })}${L3.nino(130, 150, { c: "var(--water)", s: 0.85 })}${L3.nino(190, 150, { c: "var(--water)", s: 1.3, nina: true })}${L3.corazon(130, 40, 1.8)}${L3.suelo(152)}${L3.t(70, 172, "José", "#8a5a2b", 13)}${L3.t(130, 172, "Jesús", "var(--pen)", 13)}${L3.t(190, 172, "María", "var(--water)", 13)}`),
  ],
  figura: {
    titulo: "La familia de Jesús",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="María, Jesús y José con lo más importante de cada uno">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["María", "madre de Jesús · dijo «sí» a Dios", "var(--water)", maria(0, 0, 1.4)], ["Jesús", "crece en Nazaret · ayuda en casa", "var(--red)", jesus(0, 0, 1.1)], ["José", "carpintero · cuida de su familia", MADERA, jose(0, 0, 1.4)]].map(([n, d, c, dib], i) => {
        const x = 30 + i * 200;
        return `<rect x="${x}" y="20" width="180" height="260" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/><g transform="translate(${x + 90} 192) scale(1.4)">${dib}</g>${big(x + 90, 224, n, c, 26)}${rot(x + 90, 250, d.split(" · ")[0], { size: 13 })}${rot(x + 90, 268, d.split(" · ")[1], { size: 13, color: "var(--muted)" })}`;
      }).join("")}
    </svg>`,
  },
  video: { id: "3Xo_AT2EfMI", titulo: "La familia de Jesús", canal: "Delia Gato", vistas: 534015, megusta: 3818, busqueda: "la sagrada familia jesús maría y josé para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cómo se llamaban la madre de Jesús y el hombre que lo cuidaba?",
      pasos: ["Pensamos en la madre: un ángel la visitó.", "Se llamaba María.", "El carpintero que cuidaba de Jesús se llamaba José."],
      resultado: "María y José." },
    { enunciado: "¿Dónde nació Jesús y dónde creció?",
      pasos: ["Recordamos el viaje de María y José.", "Jesús nació en un establo de Belén.", "Luego la familia vivió en Nazaret."],
      resultado: "nació en Belén y creció en Nazaret." },
    { enunciado: "¿Cómo puedo ayudar en mi familia como Jesús?",
      pasos: ["Jesús ayudaba a José en el taller.", "Yo también puedo hacer pequeñas tareas.", "Por ejemplo: poner la mesa, recoger mis juguetes o ayudar a un hermano."],
      resultado: "ayudo en casa con tareas sencillas y con cariño." },
    { enunciado: "¿Por qué viajó la familia de Jesús a Egipto?", pasos: ["Un ángel avisó a José en sueños.", "Le dijo que había peligro para el niño.", "José llevó a María y a Jesús a Egipto para protegerlos."], resultado: "viajaron a Egipto para que Jesús estuviera a salvo." },
  ],
  errores: [
    "Confundir a María con otra persona de la Biblia: María es la madre de Jesús.",
    "Pensar que Jesús nació en Nazaret: nació en Belén y creció en Nazaret.",
    "Creer que solo hay un tipo de familia: todas son distintas, y en todas hay amor.",
    "Pensar que ayudar en casa es solo cosa de los mayores: los niños también pueden ayudar.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Cómo se llamaba la madre de Jesús?", sol: "María." },
    { nivel: "básico", q: "¿En qué trabajaba José?", sol: "Era carpintero: trabajaba la madera." },
    { nivel: "básico", q: "¿En qué pueblo creció Jesús?", sol: "En Nazaret." },
    { nivel: "básico", q: "¿Dónde nació Jesús?", sol: "En un establo de Belén." },
    { nivel: "básico", q: "¿Qué le dijo el ángel Gabriel a María?", sol: "Que iba a ser la madre del Hijo de Dios." },
    { nivel: "medio", q: "Dibuja a la Sagrada Familia: María, José y Jesús.", sol: "Deben aparecer tres personas: María, José y Jesús niño." },
    { nivel: "básico", q: "¿Dónde encontraron a Jesús cuando se perdió?", sol: "En el templo de Jerusalén, hablando con los maestros." },
    { nivel: "medio", q: "Di los nombres de las personas de tu familia.", sol: "Respuesta libre: lo importante es nombrar a quienes viven con él o ella." },
    { nivel: "medio", q: "Di dos cosas que puedes hacer para ayudar en casa.", sol: "Por ejemplo: poner la mesa y recoger los juguetes." },
    { nivel: "básico", q: "¿Qué hacía Jesús en Nazaret?", sol: "Crecía, jugaba, aprendía, ayudaba a José y rezaba con su familia." },
    L3.b("¿Adónde viajó la Sagrada Familia para estar a salvo?", "A Egipto."),
    L3.m("Ordena: Jesús crece en Nazaret, Jesús nace en Belén, viaje a Egipto.", "Nace en Belén, viaje a Egipto y crece en Nazaret."),
    L3.m("Une: María, José, Jesús. Carpintero, madre, hijo.", "María-madre; José-carpintero; Jesús-hijo."),
    L3.m("¿Qué herramientas había en el taller de José?", "Martillos, sierras y clavos."),
    L3.m("Haz un belén con plastilina con María, José y Jesús.", "Tres figuras y un pesebre."),
    L3.a("Cuenta con tus palabras qué pasó cuando Jesús se perdió en el templo.", "Sus padres lo buscaron tres días y lo encontraron hablando con los maestros."),
    L3.a("Explica qué tienen en común tu familia y la de Jesús.", "Por ejemplo: se quieren, se ayudan y comen juntos."),
    L3.a("Representa con tus compañeros la visita del ángel a María.", "Un niño hace de ángel y otro de María, que responde que sí."),
    L3.a("¿Por qué decimos que José era valiente?", "Porque protegió a su familia y viajó lejos cuando había peligro."),
    L3.a("Di qué hace cada persona de tu familia por los demás.", "Respuesta personal con un ejemplo por persona."),
    L3.a("Busca en casa o en la iglesia una imagen de María con Jesús y descríbela.", "Respuesta personal: colores, gestos y lo que transmite."),
    L3.a("Inventa una oración por tu familia.", "Por ejemplo: «Gracias, Dios, por mi familia. Ayúdanos a querernos»."),
  ],
  quiz: [
    { q: "¿Cómo se llamaba la madre de Jesús?", o: ["Marta", "María", "Ana"], a: 1, e: "La madre de Jesús es María." },
    { q: "¿Quién cuidaba a Jesús como un padre?", o: ["José", "Pedro", "Juan"], a: 0, e: "José cuidaba de Jesús y de María." },
    { q: "¿En qué trabajaba José?", o: ["Era pescador", "Era carpintero", "Era médico"], a: 1, e: "José trabajaba la madera." },
    { q: "¿Qué ángel visitó a María?", o: ["Gabriel", "Rafael", "Miguel"], a: 0, e: "El ángel Gabriel le dio la noticia." },
    { q: "¿Dónde nació Jesús?", o: ["En Roma", "En Nazaret", "En Belén"], a: 2, e: "Jesús nació en Belén." },
    { q: "¿Dónde creció Jesús?", o: ["En Nazaret", "En Madrid", "En el mar"], a: 0, e: "Jesús creció en Nazaret." },
    { q: "¿Qué brillaba en el cielo cuando nació Jesús?", o: ["Una estrella", "El arcoíris", "Un rayo"], a: 0, e: "Una estrella guiaba hacia Belén." },
    { q: "¿Dónde encontraron a Jesús a los doce años?", o: ["En el mercado", "En el templo", "En el río"], a: 1, e: "Estaba en el templo con los maestros." },
    { q: "¿Cómo llamamos a la familia de Jesús?", o: ["La Sagrada Familia", "La familia grande", "Los vecinos"], a: 0, e: "Es la Sagrada Familia." },
    { q: "Como Jesús, en casa puedo…", o: ["no hacer nada", "ayudar y querer", "enfadarme siempre"], a: 1, e: "Jesús ayudaba y quería a su familia." },
    L3.Q("¿Quién avisó a José de que había peligro?", ["Un ángel", "Un pastor", "Un rey"], 0, "Se lo dijo en sueños."),
    L3.Q("¿Adónde huyó la Sagrada Familia?", ["A Egipto", "A Roma", "Al mar"], 0, "Allí estuvieron a salvo."),
  ],
  examen: [
    { q: "¿Quiénes forman la Sagrada Familia?", o: ["Jesús, María y José", "Pedro y Juan", "Los Reyes Magos"], a: 0, e: "Jesús, María y José." },
    { q: "¿Qué respondió María al ángel?", o: ["No", "Sí", "Mañana"], a: 1, e: "María confió en Dios y dijo que sí." },
    { q: "¿Qué hacía Jesús en el taller?", o: ["Ayudaba a José", "Dormía", "Pescaba"], a: 0, e: "Jesús ayudaba a José a trabajar la madera." },
    { q: "Las familias son…", o: ["todas iguales", "todas diferentes", "solo de tres"], a: 1, e: "Cada familia es distinta, pero en todas hay amor." },
    L3.Q("¿Dónde nació Jesús?", ["En Belén", "En Nazaret", "En Egipto"], 0, "En un establo de Belén."),
    L3.Q("En la casa de Nazaret había…", ["mucho amor", "muchas peleas", "nadie"], 0, "Se querían y se ayudaban."),
  ],
  feynman: ["Quiénes eran María y José", "Cómo vivía Jesús de niño en Nazaret", "Cómo puedo ayudar en mi familia"],
  mapa: mapa("LA FAMILIA DE JESÚS", "var(--pri)", [
    ["María", "madre de Jesús · dijo «sí»", "var(--water)"],
    ["José", "carpintero · cuida a su familia", "#8a5a2b"],
    ["Nazaret", "Jesús crece, ayuda y reza", "var(--red)"],
    ["Mi familia", "querer · ayudar · obedecer", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["¿Cómo se llama la madre de Jesús?", "María."],
    ["¿Quién cuidaba a Jesús como un padre?", "José."],
    ["¿En qué trabajaba José?", "Era carpintero."],
    ["¿Dónde nació Jesús?", "En Belén."],
    ["¿Dónde creció Jesús?", "En Nazaret."],
    ["¿Qué ángel visitó a María?", "Gabriel."],
    ["¿Cómo se llama la familia de Jesús?", "La Sagrada Familia."],
    ["¿Qué puedo hacer en mi familia?", "Querer, ayudar y obedecer."],
    ["¿Adónde viajó la Sagrada Familia?", "A Egipto, para estar a salvo"],
    ["¿Qué había en el taller de José?", "Martillos, sierras y clavos"],
  ],
  glosario: [
    ["Sagrada Familia", "La familia de Jesús: María, José y Jesús."],
    ["María", "La madre de Jesús."],
    ["José", "El carpintero que cuidaba a Jesús como un padre."],
    ["Ángel", "Mensajero de Dios."],
    ["Nazaret", "El pueblo donde creció Jesús."],
    ["Belén", "El pueblo donde nació Jesús."],
    ["Carpintero", "Persona que trabaja la madera."],
    ["Templo", "Lugar grande de oración en Jerusalén."],
    ["Belén (de Navidad)", "Las figuritas que recuerdan el nacimiento de Jesús."],
  ],
  situacion: L3.sit("El álbum de mi familia", "Vamos a hacer un álbum que compare la vida de la familia de Jesús con la de nuestras familias.", ["Dibujamos una página con la casa de Nazaret y lo que hacían allí.", "En casa, hacemos una página con nuestra familia haciendo algo juntos.", "Escribimos o decimos una cosa buena que hace cada miembro.", "Compartimos el álbum en clase y rezamos o damos gracias por las familias."], "Un álbum con la familia de Jesús y la familia de cada niño.", ["Nombra a los miembros de la Sagrada Familia.", "Cuenta un momento de la vida de Jesús niño.", "Valora lo que hace su familia por él."]),
  familias: [
    "Mirad juntos fotos de la familia y contad quién es cada persona.",
    "Dadle una tarea sencilla para cada día, como poner las servilletas, y agradecédsela.",
    "Contad la historia de Jesús perdido en el templo y preguntadle qué haría él o ella si se perdiera.",
    "Haced un dibujo de vuestra familia y colgadlo en un lugar visible de casa.",
  ],
  profesores: PROF("Religión Católica, primer ciclo: la familia de Jesús (María y José) y la vida en Nazaret como modelo de convivencia familiar; respeto a la diversidad de familias. Área de opción dentro del marco del RD 157/2022", ["Árbol de la familia de cada alumno o alumna, con dibujos.", "Dramatización de Jesús perdido en el templo.", "Mural «En mi casa ayudo…» con una tarea de cada niño o niña."]),
  fuentes: FUENTES,
  revisado: "2026-11-14",
};
