// Ciencias de la Naturaleza 3º de Primaria: los animales vertebrados. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, cj, et, COL, rejilla, wiki, mapa, flujo, filas, fichas, vid, vgen, RD, PROF, pez, pajaro, sol } = require("./_pri3b");

// Perro sencillo (mamífero).
const perro = (x, y, s = 1, c = COL.marron) => `<g transform="translate(${x} ${y}) scale(${s})" fill="${c}" fill-opacity=".75"><ellipse rx="22" ry="11"/><circle cx="22" cy="-12" r="10"/><path d="M26 -20 l8 -8 l2 12z"/><path d="M-16 8 v14 M-6 8 v14 M8 8 v14 M16 8 v14" stroke="${c}" stroke-width="4"/><path d="M-22 -4 q-10 -8 -8 -16" stroke="${c}" stroke-width="3" fill="none"/><circle cx="26" cy="-14" r="1.6" fill="var(--ink)"/></g>`;
// Pájaro posado (ave).
const ave = (x, y, s = 1, c = COL.azul) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse rx="16" ry="11" fill="${c}" fill-opacity=".7"/><circle cx="14" cy="-10" r="8" fill="${c}" fill-opacity=".85"/><path d="M21 -10 l8 2 l-8 3z" fill="var(--sun)"/><path d="M-6 -4 q-10 -8 -20 -2 q10 4 20 6z" fill="${c}"/><path d="M-4 10 v8 M4 10 v8" stroke="var(--sun)" stroke-width="2"/><circle cx="16" cy="-12" r="1.5" fill="var(--ink)"/></g>`;
// Lagarto (reptil).
const lagarto = (x, y, s = 1, c = "#15803d") => `<g transform="translate(${x} ${y}) scale(${s})" fill="${c}" fill-opacity=".8"><ellipse rx="20" ry="6"/><ellipse cx="22" cy="-1" rx="8" ry="5"/><path d="M-18 0 q-16 2 -26 10 q14 -2 26 -6z"/><path d="M-10 4 l-6 8 M8 4 l6 8 M-10 -4 l-6 -8 M8 -4 l6 -8" stroke="${c}" stroke-width="3"/></g>`;
// Rana (anfibio).
const rana = (x, y, s = 1, c = "var(--leaf)") => `<g transform="translate(${x} ${y}) scale(${s})" fill="${c}"><ellipse rx="16" ry="11"/><circle cx="-8" cy="-10" r="5"/><circle cx="8" cy="-10" r="5"/><circle cx="-8" cy="-11" r="2" fill="var(--ink)"/><circle cx="8" cy="-11" r="2" fill="var(--ink)"/><path d="M-16 6 q-10 2 -12 10 h8 M16 6 q10 2 12 10 h-8" stroke="${c}" stroke-width="3" fill="none"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Los animales vertebrados",
  minutos: 45,
  objetivos: ["Saber qué es un animal vertebrado", "Conocer los cinco grupos de vertebrados y sus características", "Distinguir animales vivíparos y ovíparos", "Clasificar animales según su alimentación", "Valorar y proteger a los animales en peligro"],
  claves: ["vertebrado", "esqueleto", "columna vertebral", "mamíferos", "aves", "peces", "reptiles", "anfibios", "pelo", "plumas", "escamas", "metamorfosis"],
  pregunta: {
    texto: "La ballena vive en el mar, tiene aletas y nada como un pez. Sin embargo, los científicos dicen que no es un pez. ¿Cómo puede ser?",
    respuesta: "Porque la ballena es un <mark>mamífero</mark>, como el perro o las personas. Respira <b>aire con pulmones</b> (por eso sube a la superficie), sus crías nacen del vientre de la madre y <b>toman leche</b>. Los peces, en cambio, respiran con <b>branquias</b> dentro del agua y la mayoría nacen de huevos.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un animal vertebrado?</h3><p>Los animales se dividen en dos grandes grupos según tengan o no huesos por dentro. Los <mark>vertebrados</mark> son los animales que tienen un <b>esqueleto interno</b> de huesos, con una <mark>columna vertebral</mark> en la espalda.</p><p>La columna vertebral está formada por muchos huesos pequeños, las <b>vértebras</b>, colocados uno encima de otro como las piezas de un collar. Gracias a ella el cuerpo se mantiene derecho y se puede doblar. Tócate la espalda: notarás los bultitos de tus vértebras.</p><p>Todos los vertebrados tienen el cuerpo dividido en <b>cabeza, tronco y extremidades</b>. Las extremidades pueden ser patas, alas, brazos o aletas. Casi siempre tienen cuatro.</p><p>Las personas somos vertebrados, igual que los perros, los gorriones, las truchas, las lagartijas o las ranas. Los vertebrados se clasifican en <b>cinco grupos</b>: mamíferos, aves, peces, reptiles y anfibios.</p>`,
      svg: svg("La columna vertebral está formada por vértebras; cinco grupos de vertebrados", `${tit("Tienen columna vertebral")}<g transform="translate(60 40)">${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<rect x="-14" y="${i * 15}" width="28" height="11" rx="4" fill="#f5efe0" stroke="var(--ink)" stroke-width="1.2"/>`).join("")}</g>${et(60, 172, "vértebras", 80, { size: 11 })}${filas([["mamíferos", "", COL.marron], ["aves", "", COL.azul], ["peces", "", COL.agua], ["reptiles", "", "#15803d"], ["anfibios", "", COL.verde]], 48, 26, { x: 130, wa: 100, wb: 10 })}`),
    },
    {
      html: `<h3>Los mamíferos</h3><p>Los <mark>mamíferos</mark> son los vertebrados que tienen estas características:</p><p>• Tienen el cuerpo cubierto de <b>pelo</b>.<br>• Respiran con <b>pulmones</b>.<br>• Son <b>vivíparos</b>: las crías se desarrollan dentro del vientre de la madre y nacen ya formadas.<br>• Las crías <b>maman</b>: toman la leche que producen las mamas de la madre. De ahí viene su nombre.<br>• Su temperatura es siempre la misma, aunque haga frío o calor.</p><p>La mayoría de los mamíferos viven en la tierra y caminan sobre cuatro patas, como el caballo, el gato o el oso. Pero hay excepciones curiosas: los <b>murciélagos</b> son mamíferos que vuelan, y los <b>delfines</b> y las <b>ballenas</b> son mamíferos que viven en el mar.</p><p>Las personas también somos mamíferos. ¡Y la ballena azul es el animal más grande que ha existido nunca, más que cualquier dinosaurio!</p>`,
      svg: svg("Mamífero: pelo, pulmones, nace de la madre y toma leche", `${tit("Mamíferos")}${perro(70, 100, 1.6)}${filas([["pelo", "cubre el cuerpo", COL.marron], ["pulmones", "respiran aire", COL.azul], ["vivíparos", "nacen de la madre", COL.rojo], ["maman", "toman leche", COL.sol]], 50, 30, { x: 140, wa: 90, wb: 100, dos: true })}`),
      video: vid("IPqxrcPgDjM"),
    },
    {
      html: `<h3>Las aves</h3><p>Las <mark>aves</mark> son los vertebrados que tienen:</p><p>• El cuerpo cubierto de <b>plumas</b>.<br>• Dos <b>alas</b> y dos <b>patas</b>.<br>• Un <b>pico</b> sin dientes.<br>• Respiración con <b>pulmones</b>.<br>• Son <b>ovíparas</b>: ponen <b>huevos</b> con cáscara dura, que <b>incuban</b> dándoles calor con su cuerpo hasta que nacen los pollitos.</p><p>La mayoría de las aves <b>vuelan</b>. Para ello tienen los huesos huecos y muy ligeros, y unas plumas fuertes en las alas y en la cola. Pero algunas no vuelan: el <b>avestruz</b> corre muy deprisa y el <b>pingüino</b> nada en el mar helado.</p><p>La forma del pico nos dice qué comen: el águila tiene un pico curvo para desgarrar carne; el gorrión, un pico corto para partir semillas; y el flamenco, un pico que filtra el agua. También muchas aves hacen <b>nidos</b> y algunas, como las cigüeñas o las golondrinas, viajan cada año a países lejanos: son las aves <b>migratorias</b>.</p>`,
      svg: svg("Ave con plumas, pico y alas; huevo en el nido", `${tit("Aves")}${ave(70, 96, 2)}<g transform="translate(70 152)"><path d="M-30 0 q30 18 60 0" stroke="${COL.marron}" stroke-width="5" fill="none"/><ellipse cx="-8" cy="-4" rx="8" ry="10" fill="#fff" stroke="var(--ink)" stroke-width="1"/><ellipse cx="8" cy="-4" rx="8" ry="10" fill="#fff" stroke="var(--ink)" stroke-width="1"/></g>${filas([["plumas", "cubren el cuerpo", COL.azul], ["pico y alas", "sin dientes", COL.sol], ["ovíparas", "ponen huevos", COL.naranja], ["pulmones", "respiran aire", COL.gris]], 50, 30, { x: 140, wa: 90, wb: 100, dos: true })}`),
    },
    {
      html: `<h3>Los peces</h3><p>Los <mark>peces</mark> son vertebrados que viven siempre en el <b>agua</b>, ya sea en el mar o en los ríos y lagos. Sus características son:</p><p>• Tienen el cuerpo cubierto de <mark>escamas</mark>, unas plaquitas duras y resbaladizas.<br>• Respiran con <mark>branquias</mark>, que están a los lados de la cabeza y toman el oxígeno disuelto en el agua. Por eso, fuera del agua no pueden respirar.<br>• Se mueven con <b>aletas</b> y con la cola. Su cuerpo alargado les ayuda a nadar rápido.<br>• La mayoría son <b>ovíparos</b>: ponen muchísimos huevos en el agua.</p><p>Muchos peces viven en el mar, como la sardina, el atún, la merluza o el tiburón. Otros viven en agua dulce, como la trucha o la carpa. El salmón nace en el río, vive en el mar y vuelve al río para poner sus huevos.</p><p>Los peces son muy importantes en nuestra alimentación. Hay que pescar con cuidado, sin capturar peces demasiado pequeños, para que no se acaben.</p>`,
      svg: svg("Pez con escamas, aletas y branquias", `${tit("Peces")}<g transform="translate(78 100) scale(3.2)">${pez(0, 0, "var(--water)")}</g><path d="M66 96 q-4 8 0 14" stroke="${COL.rojo}" stroke-width="2" fill="none"/>${[[86, 94], [98, 100], [90, 106], [102, 92]].map(([a, b]) => `<path d="M${a} ${b} a4 4 0 0 1 8 0" stroke="var(--pen)" stroke-width="1" fill="none"/>`).join("")}${et(60, 140, "branquias", 70, { size: 10, color: COL.rojo })}${filas([["escamas", "cubren el cuerpo", COL.agua], ["branquias", "respiran en el agua", COL.rojo], ["aletas", "para nadar", COL.azul], ["ovíparos", "muchos huevos", COL.naranja]], 50, 30, { x: 160, wa: 80, wb: 90, dos: true })}`),
    },
    {
      html: `<h3>Los reptiles</h3><p>Los <mark>reptiles</mark> son vertebrados que se caracterizan por:</p><p>• Tener la piel seca cubierta de <b>escamas</b> duras. Algunos tienen además un <b>caparazón</b>, como las tortugas.<br>• Respirar con <b>pulmones</b>, aunque vivan en el agua.<br>• Ser <b>ovíparos</b>: ponen huevos con una cáscara blanda como el cuero, normalmente bajo la arena o la tierra.<br>• Moverse <b>arrastrándose</b>, por eso se llaman reptiles. Tienen patas cortas o, como las serpientes, no tienen patas.</p><p>Los reptiles no pueden mantener su cuerpo caliente por sí solos. Por eso los ves <b>tomando el sol</b> en las piedras por la mañana, y en invierno muchos se esconden y duermen: <b>hibernan</b>.</p><p>Son reptiles la lagartija, el lagarto, la serpiente, la tortuga, el camaleón y el cocodrilo. Los dinosaurios eran también reptiles. En España vive el lagarto ocelado, que tiene manchas azules en los costados.</p>`,
      svg: svg("Reptil: lagarto con escamas tomando el sol sobre una piedra", `${tit("Reptiles")}${sol(48, 52, 12)}<path d="M20 150 q50 -36 110 0z" fill="${COL.gris}" fill-opacity=".45"/>${lagarto(80, 130, 1.4)}${filas([["escamas", "piel seca", "#15803d"], ["pulmones", "respiran aire", COL.azul], ["ovíparos", "huevos blandos", COL.naranja], ["se arrastran", "patas cortas o sin patas", COL.marron]], 50, 30, { x: 150, wa: 90, wb: 100, dos: true })}`),
    },
    {
      html: `<h3>Los anfibios</h3><p>Los <mark>anfibios</mark> son vertebrados que pasan parte de su vida en el agua y parte en la tierra. Su nombre significa «doble vida». Sus características son:</p><p>• Tienen la <b>piel desnuda</b>, sin pelo, plumas ni escamas. Es fina y siempre está húmeda.<br>• Son <b>ovíparos</b>: ponen huevos sin cáscara, blanditos, en el agua.<br>• Sufren una <mark>metamorfosis</mark>: cambian mucho de forma al crecer.</p><p>El ciclo de la rana es así: del huevo sale un <b>renacuajo</b>, que vive en el agua, tiene cola, no tiene patas y respira con <b>branquias</b>, como los peces. Poco a poco le salen las patas traseras, luego las delanteras, pierde la cola y desarrolla <b>pulmones</b>. ¡Ya es una rana adulta que puede salir del agua!</p><p>Las ranas, los sapos, los tritones y las salamandras son anfibios. Necesitan lugares húmedos. Muchos están en peligro porque se secan las charcas o se contamina el agua.</p>`,
      svg: svg("Metamorfosis de la rana: huevo, renacuajo, renacuajo con patas y rana", `${tit("Metamorfosis de la rana")}${flujo([["huevos", COL.gris], ["renacuajo", COL.agua], ["con patas", COL.verde], ["rana", "#15803d"]], 56, 34)}${[[34, 128], [44, 132], [38, 140]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="5" fill="var(--card)" stroke="var(--ink)" stroke-width="1"/><circle cx="${a}" cy="${b}" r="2" fill="var(--ink)"/>`).join("")}<g transform="translate(98 134)"><ellipse rx="8" ry="6" fill="${COL.gris}"/><path d="M6 0 q10 -6 18 2" stroke="${COL.gris}" stroke-width="3" fill="none"/></g><g transform="translate(160 134)"><ellipse rx="9" ry="7" fill="var(--leaf)"/><path d="M6 0 q6 -4 12 0" stroke="var(--leaf)" stroke-width="2" fill="none"/><path d="M-4 6 l-4 6 M4 6 l4 6" stroke="var(--leaf)" stroke-width="2"/></g>${rana(222, 138, 1)}${tx(130, 172, "branquias en el agua → pulmones en la tierra", 236)}`),
      video: vid("P-92RX0XqCc"),
    },
    {
      html: `<h3>¿Qué comen los vertebrados?</h3><p>Según su <b>alimentación</b>, los animales se clasifican en tres grupos:</p><p>• <mark>Herbívoros</mark>: comen solo <b>plantas</b>: hierba, hojas, frutos o semillas. Por ejemplo, la vaca, el caballo, el conejo, la oveja o la jirafa. Suelen tener dientes planos para masticar.</p><p>• <mark>Carnívoros</mark>: comen <b>otros animales</b>. Por ejemplo, el lobo, el león, el águila, el tiburón o el cocodrilo. Suelen tener dientes afilados o picos y garras para atrapar a sus presas.</p><p>• <mark>Omnívoros</mark>: comen de <b>todo</b>, plantas y animales. Por ejemplo, el oso, el cerdo, el jabalí, la gallina y las personas.</p><p>Los animales que cazan a otros se llaman <b>depredadores</b>, y los animales cazados se llaman <b>presas</b>. Muchas presas tienen trucos para defenderse: corren muy rápido, como la gacela; se esconden con colores parecidos al entorno, como el camaleón; o viven en grupo, como las cebras.</p>`,
      svg: svg("Herbívoros, carnívoros y omnívoros con ejemplos", `${tit("¿Qué comen?")}${fichas([["Herbívoros", "plantas: vaca, conejo", COL.verde], ["Carnívoros", "animales: lobo, águila", COL.rojo], ["Omnívoros", "de todo: oso, cerdo", COL.naranja]], 1, 36, 40)}`),
    },
    {
      html: `<h3>Clasificamos vertebrados</h3><p>Para saber a qué grupo pertenece un vertebrado, podemos hacernos estas preguntas, una detrás de otra:</p><p>1. ¿Tiene <b>pelo</b> y sus crías toman leche? → Es un <b>mamífero</b>.<br>2. ¿Tiene <b>plumas</b>? → Es un <b>ave</b>.<br>3. ¿Vive siempre en el agua, tiene <b>escamas y branquias</b>? → Es un <b>pez</b>.<br>4. ¿Tiene <b>escamas</b> y piel seca, y respira con pulmones? → Es un <b>reptil</b>.<br>5. ¿Tiene la <b>piel desnuda y húmeda</b>? → Es un <b>anfibio</b>.</p><p>Vamos a probarlo con el <b>murciélago</b>: vuela como un ave, pero no tiene plumas sino pelo, y sus crías maman. Es un mamífero.</p><p>Y el <b>pingüino</b>: nada en el mar y no vuela, pero tiene plumas y pone huevos. Es un ave.</p><p>¿Y la <b>tortuga marina</b>? Vive en el mar, pero respira con pulmones, tiene escamas y caparazón, y pone los huevos en la arena de la playa. Es un reptil.</p>`,
      svg: svg("Tabla de los cinco grupos: cubierta del cuerpo, respiración y reproducción", `${tit("Tabla de vertebrados")}${filas([["mamíferos", "pelo · pulmones · vivíparos", COL.marron], ["aves", "plumas · pulmones · huevos", COL.azul], ["peces", "escamas · branquias · huevos", COL.agua], ["reptiles", "escamas · pulmones · huevos", "#15803d"], ["anfibios", "piel desnuda · metamorfosis", COL.verde]], 46, 26, { x: 18, wa: 72, wb: 150 })}`),
    },
    {
      html: `<h3>Animales en peligro</h3><p>Algunos animales vertebrados están en <b>peligro de extinción</b>: quedan tan pocos que podrían desaparecer para siempre. En España, por ejemplo, el <b>lince ibérico</b>, el <b>oso pardo</b>, el <b>urogallo</b> o el <b>quebrantahuesos</b> necesitan protección.</p><p>Las causas principales son:</p><p>• La destrucción de los lugares donde viven, por construir carreteras, ciudades o por los incendios.<br>• La <b>contaminación</b> del agua, del aire y del suelo.<br>• La <b>caza</b> y la pesca excesivas.<br>• Los atropellos en las carreteras.</p><p>Para protegerlos se crean <b>parques naturales</b> y espacios protegidos, se crían animales y después se sueltan en libertad, y se prohíbe cazarlos. Gracias a esto, el lince ibérico, que estuvo a punto de desaparecer, hoy tiene muchos más ejemplares.</p><p>Tú también puedes ayudar: no dejes basura en el campo, respeta a los animales salvajes y no compres animales exóticos como mascota.</p>`,
      svg: svg("Animales en peligro: lince ibérico, oso pardo y quebrantahuesos; cómo ayudar", `${tit("¡Protejámoslos!")}${fichas([["Lince ibérico", "recuperándose", COL.naranja], ["Oso pardo", "montañas del norte", COL.marron], ["Quebrantahuesos", "Pirineos", COL.gris], ["Cómo ayudar", "no dejar basura", COL.verde]], 2, 36, 0)}`),
    },
  ],
  figura: {
    titulo: "Los vertebrados en ocho ideas",
    svg: rejilla([
      ["Vertebrado", "columna vertebral", COL.azul],
      ["Mamíferos", "pelo y leche", COL.marron],
      ["Aves", "plumas y huevos", COL.sol],
      ["Peces", "escamas y branquias", COL.agua],
      ["Reptiles", "escamas y pulmones", "#15803d"],
      ["Anfibios", "piel húmeda, metamorfosis", COL.verde],
      ["Alimentación", "herbívoro, carnívoro, omnívoro", COL.rojo],
      ["En peligro", "lince ibérico", COL.morado],
    ], 4, 86, "Resumen de los animales vertebrados"),
  },
  video: vgen("_o1Oq1IET3U", "animales vertebrados para niños"),
  ejemplos: [
    { enunciado: "¿A qué grupo pertenece el delfín? Vive en el mar, respira por un agujero en la cabeza y sus crías maman.",
      pasos: ["Respira aire con pulmones: no es un pez.", "Sus crías nacen de la madre y toman leche."],
      resultado: "Es un mamífero." },
    { enunciado: "Clasifica: gallina, lagartija, sardina, gato, salamandra.",
      pasos: ["Gallina: plumas → ave.", "Lagartija: escamas y pulmones → reptil.", "Sardina: escamas y branquias → pez.", "Gato: pelo → mamífero.", "Salamandra: piel húmeda → anfibio."],
      resultado: "Ave, reptil, pez, mamífero y anfibio." },
    { enunciado: "Un conejo come hierba y un zorro come conejos. ¿Qué tipo de animal es cada uno según su alimentación?",
      pasos: ["El conejo solo come plantas.", "El zorro come otros animales y es su depredador."],
      resultado: "Conejo herbívoro (presa) y zorro carnívoro (depredador)." },
  ],
  errores: [
    "Pensar que la ballena y el delfín son peces: son mamíferos.",
    "Creer que el murciélago es un ave porque vuela: es un mamífero.",
    "Confundir reptiles y anfibios: el reptil tiene escamas; el anfibio, piel desnuda y húmeda.",
    "Pensar que todas las aves vuelan: el avestruz y el pingüino no.",
  ],
  ejercicios: [
    { q: "¿Qué tienen en común todos los animales vertebrados?", sol: "Un esqueleto interno de huesos con columna vertebral." },
    { q: "Escribe los cinco grupos de vertebrados.", sol: "Mamíferos, aves, peces, reptiles y anfibios." },
    { q: "¿Qué cubre el cuerpo de cada grupo?", sol: "Mamíferos: pelo. Aves: plumas. Peces y reptiles: escamas. Anfibios: piel desnuda y húmeda." },
    { q: "¿Qué grupos respiran con pulmones?", sol: "Mamíferos, aves, reptiles y anfibios adultos. Los peces respiran con branquias." },
    { q: "¿Por qué la ballena es un mamífero?", sol: "Porque respira con pulmones, sus crías nacen de la madre y toman leche." },
    { q: "Explica la metamorfosis de la rana.", sol: "Huevo → renacuajo con cola y branquias → le salen las patas → pierde la cola y tiene pulmones → rana." },
    { q: "Escribe un animal herbívoro, uno carnívoro y uno omnívoro.", sol: "Por ejemplo: vaca, lobo y oso." },
    { q: "¿Por qué las lagartijas toman el sol?", sol: "Porque no pueden calentar su cuerpo por sí mismas y necesitan el calor del sol." },
    { q: "¿Qué es un animal en peligro de extinción? Pon un ejemplo de España.", sol: "Un animal del que quedan tan pocos que podría desaparecer. Por ejemplo, el lince ibérico." },
    { q: "Escribe dos cosas que puedes hacer para proteger a los animales.", sol: "No dejar basura en el campo y respetar a los animales salvajes (no molestarlos, no cazarlos)." },
  ],
  quiz: [
    { q: "Los vertebrados tienen…", o: ["columna vertebral", "concha siempre", "seis patas"], a: 0, e: "Esqueleto con columna vertebral." },
    { q: "Los animales con plumas son las…", o: ["aves", "ranas", "ballenas"], a: 0, e: "Las aves." },
    { q: "Los peces respiran con…", o: ["pulmones", "branquias", "la piel solo"], a: 1, e: "Con branquias." },
    { q: "El murciélago es un…", o: ["ave", "mamífero", "reptil"], a: 1, e: "Mamífero: tiene pelo y sus crías maman." },
    { q: "La serpiente es un…", o: ["reptil", "anfibio", "pez"], a: 0, e: "Reptil." },
    { q: "La cría de la rana se llama…", o: ["pollito", "renacuajo", "cachorro"], a: 1, e: "Renacuajo." },
    { q: "Las crías de los mamíferos toman…", o: ["leche", "semillas", "insectos"], a: 0, e: "Leche de su madre." },
    { q: "Un animal que come solo plantas es…", o: ["carnívoro", "herbívoro", "omnívoro"], a: 1, e: "Herbívoro." },
    { q: "Los anfibios tienen la piel…", o: ["desnuda y húmeda", "con plumas", "con pelo"], a: 0, e: "Desnuda y húmeda." },
    { q: "El lince ibérico está…", o: ["en peligro", "en todas las ciudades", "extinguido"], a: 0, e: "En peligro, aunque se está recuperando." },
  ],
  examen: [
    { q: "El pingüino es un ave porque…", o: ["nada", "tiene plumas", "vive en el frío"], a: 1, e: "Tiene plumas y pone huevos." },
    { q: "La metamorfosis la sufren los…", o: ["anfibios", "mamíferos", "reptiles"], a: 0, e: "Los anfibios." },
    { q: "La tortuga pone sus huevos en…", o: ["la arena", "el agua del mar", "un nido en un árbol"], a: 0, e: "En la arena." },
    { q: "Un animal que caza a otros se llama…", o: ["presa", "depredador", "herbívoro"], a: 1, e: "Depredador." },
  ],
  feynman: ["Qué es un vertebrado", "Cómo distinguir los cinco grupos de vertebrados", "Por qué la ballena no es un pez"],
  mapa: mapa("VERTEBRADOS", "var(--pri)", [
    ["Mamíferos y aves", "pelo · plumas", COL.marron],
    ["Peces", "escamas · branquias", COL.agua],
    ["Reptiles y anfibios", "escamas · piel húmeda", "#15803d"],
    ["Alimentación", "herbívoros · carnívoros · omnívoros", COL.rojo],
  ], 250),
  tarjetas: [
    ["Vertebrado", "Animal con columna vertebral."],
    ["Mamífero", "Pelo, pulmones, nace de la madre y mama."],
    ["Ave", "Plumas, pico, alas y huevos."],
    ["Pez", "Escamas, aletas y branquias."],
    ["Reptil", "Escamas, piel seca, pulmones y huevos."],
    ["Anfibio", "Piel húmeda y metamorfosis."],
    ["Herbívoro", "Animal que come solo plantas."],
    ["Omnívoro", "Animal que come de todo."],
  ],
  familias: ["En el parque o el campo, contad cuántos tipos de aves veis y cómo son sus picos.", "Jugad a las adivinanzas: uno dice pistas y el otro adivina el animal y su grupo.", "Visitad un acuario, una granja escuela o un centro de fauna.", "Buscad en internet qué animales de vuestra comunidad están protegidos."],
  profesores: PROF("Ciencias de la Naturaleza: animales vertebrados; características de mamíferos, aves, peces, reptiles y anfibios; reproducción vivípara y ovípara; metamorfosis; clasificación según la alimentación; especies amenazadas", ["Clave dicotómica sencilla con tarjetas de animales.", "Mural de los cinco grupos con fotos aportadas por el alumnado.", "Proyecto sobre una especie amenazada de la comunidad autónoma."]),
  fuentes: [RD, wiki("Vertebrata", "Vertebrados"), wiki("Mammalia", "Mamíferos"), wiki("Amphibia", "Anfibios")],
  revisado: REV,
};
