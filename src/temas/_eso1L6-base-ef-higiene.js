// Educación Física 1º ESO: higiene y hábitos saludables. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, persona, mezcla, vb, vg } = require("./_eso1c");

const M = "Educación Física";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Higiene y hábitos saludables",
  minutos: 45,
  objetivos: ["Aplicar hábitos de higiene antes, durante y después de la actividad física", "Conocer las normas de higiene postural en la vida diaria", "Relacionar la alimentación, la hidratación y el descanso con la salud", "Identificar hábitos perjudiciales y proponer alternativas"],
  claves: ["higiene", "higiene postural", "hidratación", "alimentación equilibrada", "descanso", "hábito"],
  pregunta: {
    texto: "¿Por qué después de clase de Educación Física hay que ducharse o al menos asearse y cambiarse de camiseta?",
    respuesta: "Porque al hacer ejercicio sudamos para enfriar el cuerpo. El <b>sudor</b> en sí apenas huele, pero en la piel y la ropa húmeda <mark>las bacterias lo descomponen y producen mal olor</mark>, y pueden aparecer irritaciones u hongos. Asearse y cambiarse es un <b>hábito de higiene</b> que cuida tu salud y la convivencia con los demás.",
  },
  bloques: [
    {
      html: `<h3>Salud y hábitos</h3><p>La Organización Mundial de la Salud define la <b>salud</b> como un estado de completo <b>bienestar físico, mental y social</b>, y no solo como la ausencia de enfermedad.</p><p>Un <b>hábito</b> es una conducta que repetimos tanto que la hacemos casi sin pensar. Los hábitos pueden ser <b>saludables</b> o <b>perjudiciales</b>, y los que adquieres en la adolescencia suelen acompañarte toda la vida.</p><p>Los grandes pilares de un estilo de vida saludable son:</p><ul><li><b>Actividad física</b> regular.</li><li><b>Alimentación</b> equilibrada e <b>hidratación</b>.</li><li><b>Higiene</b> personal y postural.</li><li><b>Descanso</b> suficiente.</li><li><b>Bienestar emocional</b> y relaciones sanas.</li></ul>`,
      svg: svg("Cinco pilares sosteniendo el tejado de la salud: actividad física, alimentación, higiene, descanso y bienestar emocional", `<path d="M20 52 L 130 16 L 240 52 Z" fill="var(--leaf)" fill-opacity=".35" stroke="var(--leaf)" stroke-width="2.5"/>${t(130, 44, "SALUD", { s: 13, c: "var(--ink)" })}${[["actividad", "var(--red)"], ["alimentación", "var(--sun)"], ["higiene", "var(--inf)"], ["descanso", "var(--pen)"], ["emociones", "var(--leaf)"]].map(([n, c], i) => `<rect x="${28 + i * 44}" y="58" width="28" height="80" rx="3" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="2"/>${t(42 + i * 44, i % 2 ? 168 : 154, n, { s: 9, c })}`).join("")}<path d="M20 140 H 240" stroke="var(--ink)" stroke-width="3"/>`, 176),
      video: vb("higB2"),
    },
    {
      html: `<h3>Higiene en la actividad física</h3>${tabla(["Momento", "Qué hacer"], [["Antes", "ropa deportiva cómoda y transpirable; calzado deportivo bien atado; quitarse pendientes, anillos y relojes; pelo largo recogido"], ["Durante", "beber agua en pequeños sorbos; protegerse del sol si es al aire libre"], ["Después", "ducharse o, al menos, asearse; cambiarse de camiseta y de calcetines; secarse bien los pies"]])}<p>Lleva siempre en la bolsa de deporte: <b>toalla pequeña</b>, <b>camiseta de recambio</b>, desodorante, chanclas si hay ducha y una botella de agua <b>reutilizable</b> marcada con tu nombre. Lava la ropa deportiva después de cada uso.</p>`,
    },
    {
      html: `<h3>Cuidado de los pies y del calzado</h3><p>Los pies soportan todo nuestro peso al correr y saltar. Para cuidarlos:</p><ul><li>Usar <b>calzado deportivo</b> adecuado a la actividad, de tu talla y con buena sujeción. Nunca deportes con zapatos de calle o con chanclas.</li><li>Calcetines de <b>algodón</b> o tejido técnico, limpios cada día.</li><li><b>Secar bien</b> entre los dedos para evitar hongos (pie de atleta).</li><li>Cortar las uñas <b>rectas</b>.</li><li>Usar <b>chanclas</b> en duchas y vestuarios comunes.</li><li>Airear las zapatillas después de usarlas.</li></ul><p>Las <b>ampollas</b> suelen aparecer por roce con calzado nuevo o calcetines arrugados: estrena las zapatillas poco a poco.</p>`,
    },
    {
      html: `<h3>La higiene postural</h3><p>La <b>higiene postural</b> es el conjunto de normas para mantener posturas correctas en la vida diaria y proteger la <b>columna vertebral</b>, que tiene tres curvas naturales.</p><ul><li><b>Sentado</b>: espalda apoyada en el respaldo, pies en el suelo, pantalla a la altura de los ojos. Levántate cada 45-60 minutos.</li><li><b>De pie</b>: peso repartido en los dos pies; si estás mucho rato, apoya un pie en un escalón y alterna.</li><li><b>Con el móvil</b>: súbelo a la altura de los ojos en vez de bajar la cabeza.</li><li><b>Durmiendo</b>: de lado o boca arriba, mejor que boca abajo.</li></ul>`,
      svg: svg("Postura sentada correcta con la espalda recta y apoyada frente a una incorrecta con la espalda curvada y la cabeza adelantada", `<g stroke="var(--leaf)" stroke-width="3.2" stroke-linecap="round" fill="none"><circle cx="60" cy="40" r="8" fill="var(--leaf)" fill-opacity=".2"/><path d="M60 48 V 92 H 92 V 124 M60 60 L 84 78"/></g><path d="M50 40 V 100 H 96" stroke="var(--muted)" stroke-width="3" fill="none"/><path d="M76 78 H 110" stroke="var(--ink)" stroke-width="3"/>${t(70, 148, "correcto", { s: 11, c: "var(--leaf)" })}<g stroke="var(--red)" stroke-width="3.2" stroke-linecap="round" fill="none"><circle cx="184" cy="54" r="8" fill="var(--red)" fill-opacity=".2"/><path d="M178 60 Q 166 76 172 96 H 204 V 124 M174 68 L 200 82"/></g><path d="M156 40 V 100 H 208" stroke="var(--muted)" stroke-width="3" fill="none"/><path d="M192 82 H 226" stroke="var(--ink)" stroke-width="3"/>${t(190, 148, "incorrecto", { s: 11, c: "var(--red)" })}`, 166),
      video: vb("higB"),
    },
    {
      html: `<h3>La mochila y el levantamiento de pesos</h3><ul><li>La <b>mochila</b> no debería pesar más del <b>10 %</b> de tu peso corporal (si pesas 45 kg, unos 4,5 kg como máximo).</li><li>Llévala con las <b>dos asas</b>, ajustada a la espalda y con lo más pesado pegado al cuerpo.</li><li>Lleva solo lo que necesites cada día.</li></ul><p>Para <b>levantar un objeto</b> del suelo:</p><ol><li>Acércate al objeto y separa los pies.</li><li><b>Flexiona las rodillas</b>, no la espalda.</li><li>Agarra el objeto pegado al cuerpo.</li><li>Levántate estirando las piernas con la espalda recta.</li><li>No gires el tronco con el peso en las manos: gira con los pies.</li></ol>`,
      svg: svg("Forma correcta de levantar una caja: rodillas flexionadas y espalda recta; forma incorrecta: piernas rectas y espalda doblada", `<g stroke="var(--leaf)" stroke-width="3.2" stroke-linecap="round" fill="none"><circle cx="64" cy="46" r="7" fill="var(--leaf)" fill-opacity=".2"/><path d="M64 53 L 62 92 L 82 104 L 72 128 M62 92 L 48 108 L 50 128 M63 66 L 76 104"/></g><rect x="70" y="104" width="26" height="24" fill="var(--sun)" fill-opacity=".5" stroke="var(--sun)" stroke-width="2"/>${t(64, 152, "bien: dobla rodillas", { s: 10, c: "var(--leaf)" })}<g stroke="var(--red)" stroke-width="3.2" stroke-linecap="round" fill="none"><circle cx="212" cy="64" r="7" fill="var(--red)" fill-opacity=".2"/><path d="M206 68 Q 186 60 172 80 L 168 128 M172 80 L 180 128 M198 70 L 210 104"/></g><rect x="198" y="104" width="26" height="24" fill="var(--sun)" fill-opacity=".5" stroke="var(--sun)" stroke-width="2"/>${t(190, 152, "mal: dobla la espalda", { s: 10, c: "var(--red)" })}<path d="M14 130 H 246" stroke="var(--line)" stroke-width="2"/>`, 166),
    },
    {
      html: `<h3>Alimentación e hidratación</h3><p>Una <b>alimentación equilibrada</b> aporta la energía y los nutrientes que necesitas para crecer y moverte:</p><ul><li>Base de <b>frutas, verduras</b>, legumbres y cereales integrales.</li><li><b>Proteínas</b> de calidad: legumbres, huevos, pescado, carne magra.</li><li><b>Lácteos</b> para el calcio de los huesos.</li><li>Pocos ultraprocesados, bollería, refrescos y comida rápida.</li><li>Un buen <b>desayuno</b> antes de ir a clase.</li></ul><p><b>Hidratación</b>: bebe agua a lo largo del día, antes, durante y después del ejercicio, aunque no tengas sed. El <b>agua</b> es la mejor bebida; las bebidas energéticas, con mucha cafeína y azúcar, <b>no son adecuadas</b> para adolescentes.</p>`,
    },
    {
      html: `<h3>El descanso</h3><p>Durante el sueño el cuerpo crece, repara los músculos y el cerebro ordena lo aprendido. A tu edad se recomienda dormir entre <b>9 y 11 horas</b> diarias.</p><p>Consejos para dormir mejor:</p><ul><li>Acostarse y levantarse a <b>horas regulares</b>, también el fin de semana.</li><li><b>Apagar las pantallas</b> al menos una hora antes de dormir: su luz retrasa el sueño.</li><li>No tener el móvil en la habitación por la noche.</li><li>Cenar de forma ligera y no tarde.</li><li>Hacer ejercicio durante el día (pero no justo antes de dormir).</li></ul><p>Dormir poco provoca cansancio, falta de concentración, mal humor y más riesgo de lesiones.</p>`,
    },
    {
      html: `<h3>Hábitos perjudiciales</h3>${tabla(["Hábito", "Consecuencias", "Alternativa"], [["Sedentarismo y exceso de pantallas", "pérdida de forma física, mala postura, peor sueño", "pausas activas, deporte, ocio al aire libre"], ["Tabaco y vapeadores", "adicción a la nicotina, daño pulmonar", "decir no, buscar amigos que no fumen"], ["Alcohol", "daño al cerebro en desarrollo, accidentes", "ocio sin alcohol"], ["Bebidas energéticas", "nerviosismo, insomnio, taquicardia", "agua"], ["Saltarse comidas", "falta de energía y concentración", "desayunar y comer a horas regulares"]])}<p>Pedir ayuda a la familia, al profesorado o al personal sanitario es siempre una buena decisión.</p>`,
    },
  ],
  figura: {
    titulo: "Higiene y hábitos saludables en un vistazo",
    svg: filas("Resumen: salud como bienestar físico, mental y social; higiene antes, durante y después del ejercicio; cuidado de los pies; higiene postural y mochila; alimentación e hidratación; descanso de 9 a 11 horas", [["Salud", "bienestar físico · mental · social", "var(--leaf)"], ["Higiene en EF", "ropa · agua · asearse", "var(--inf)"], ["Postura", "espalda apoyada · móvil arriba", "var(--pen)"], ["Mochila", "máx. 10 % del peso · 2 asas", "var(--sun)"], ["Alimentación", "fruta · verdura · agua", "var(--red)"], ["Descanso", "9-11 h · sin pantallas", "var(--ink)"]], 200),
  },
  video: vg("higV"),
  quiz: mezcla([
    { q: "Según la OMS, la salud es…", o: ["bienestar físico, mental y social", "no estar enfermo", "estar delgado"], a: 0, e: "Definición amplia." },
    { q: "Después de EF conviene…", o: ["asearse y cambiarse de camiseta", "dejar la ropa húmeda puesta", "no beber agua"], a: 0, e: "Higiene." },
    { q: "Para evitar hongos en los pies hay que…", o: ["secarlos bien entre los dedos", "llevar calcetines húmedos", "ir descalzo en las duchas"], a: 0, e: "Pie de atleta." },
    { q: "La mochila no debería pesar más del…", o: ["10 % del peso corporal", "50 %", "30 %"], a: 0, e: "Y con dos asas." },
    { q: "Para levantar un peso del suelo hay que doblar…", o: ["las rodillas", "la espalda", "los codos solo"], a: 0, e: "Espalda recta." },
    { q: "Al usar el móvil conviene…", o: ["subirlo a la altura de los ojos", "bajar mucho la cabeza", "usarlo tumbado boca abajo"], a: 0, e: "Cuello." },
    { q: "La mejor bebida para hidratarse es…", o: ["el agua", "un refresco", "una bebida energética"], a: 0, e: "Sin azúcar ni cafeína." },
    { q: "A tu edad se recomienda dormir…", o: ["9-11 horas", "5-6 horas", "13-14 horas"], a: 0, e: "Descanso." },
    { q: "Las pantallas antes de dormir…", o: ["retrasan el sueño", "ayudan a dormir", "no influyen"], a: 0, e: "Luz azul." },
    { q: "Un hábito es…", o: ["una conducta que repetimos casi sin pensar", "algo que hacemos una vez", "una enfermedad"], a: 0, e: "Saludable o perjudicial." },
  ]),
  examen: mezcla([
    { q: "Si pesas 50 kg, tu mochila debería pesar como máximo unos…", o: ["5 kg", "15 kg", "1 kg"], a: 0, e: "10 %." },
    { q: "¿Por qué huele la ropa deportiva sudada?", o: ["porque las bacterias descomponen el sudor", "porque el sudor es tóxico", "por el detergente"], a: 0, e: "Ropa húmeda." },
    { q: "Las bebidas energéticas en adolescentes…", o: ["no son adecuadas", "son lo mejor para entrenar", "sustituyen al agua"], a: 0, e: "Cafeína y azúcar." },
  ]),
  feynman: ["Qué es la salud y qué es un hábito", "Hábitos de higiene antes, durante y después de la actividad física", "Normas de higiene postural", "Qué es una alimentación equilibrada y por qué beber agua", "Por qué es tan importante dormir bien"],
  mapa: mapa("HÁBITOS SALUDABLES", "var(--eso)", [
    ["Higiene", "ropa · aseo · pies", "var(--inf)"],
    ["Postura", "sentado · mochila · levantar", "var(--pen)"],
    ["Alimentación", "equilibrio · agua", "var(--red)"],
    ["Descanso", "9-11 h · sin pantallas", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Salud", "Bienestar físico, mental y social."],
    ["Hábito", "Conducta repetida que se hace casi sin pensar."],
    ["Higiene postural", "Normas para mantener posturas correctas y proteger la espalda."],
    ["Mochila", "Máximo el 10 % del peso corporal, con las dos asas."],
    ["Levantar pesos", "Rodillas flexionadas, espalda recta, objeto pegado al cuerpo."],
    ["Hidratación", "Beber agua antes, durante y después del ejercicio."],
    ["Descanso", "Dormir 9-11 horas a tu edad."],
    ["Pie de atleta", "Infección por hongos que se evita secando bien los pies."],
  ],
  familias: ["Pesad juntos la mochila y comprobad que no supera el 10 % del peso.", "Acordad una hora de apagar pantallas para toda la familia.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Hábitos de vida saludable: higiene personal y en la actividad física, higiene postural, alimentación e hidratación, descanso, prevención de hábitos nocivos (RD 217/2022, Educación Física, vida activa y saludable).",
    ideas: ["Registro semanal de hábitos (sueño, agua, actividad) con gráfica personal.", "Taller de higiene postural en el aula y con la mochila.", "Revisión de la bolsa de aseo para EF al inicio del curso."],
  },
  fuentes: [RD, { t: "Organización Mundial de la Salud", url: "https://www.who.int/es" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Lucía pesa 40 kg y su mochila 7 kg. ¿Es adecuado?", pasos: ["El 10 % de 40 kg es 4 kg.", "7 kg supera ese límite.", "Debe llevar solo lo necesario o usar taquilla."], resultado: "No: lleva casi el doble de lo recomendado." },
    { enunciado: "Daniel se acuesta a la 1 con el móvil y se levanta a las 7:30. ¿Qué le recomiendas?", pasos: ["Duerme 6,5 horas; necesita 9-11.", "Las pantallas retrasan el sueño.", "Debe apagar el móvil una hora antes y acostarse hacia las 22:30."], resultado: "Adelantar la hora de dormir y dejar el móvil fuera del cuarto." },
    { enunciado: "Prepara la bolsa de EF para un día de clase al aire libre en verano.", pasos: ["Ropa transpirable y zapatillas.", "Gorra y crema solar.", "Botella de agua, toalla y camiseta de recambio."], resultado: "Bolsa completa para practicar e higienizarse." },
  ],
  errores: [
    "Pensar que sudar es «sucio» y que mejor no moverse.",
    "Beber solo cuando ya se tiene mucha sed.",
    "Llevar la mochila colgada de un solo hombro.",
    "Doblar la espalda para coger objetos del suelo.",
    "Creer que dormir poco entre semana se recupera durmiendo mucho el sábado.",
  ],
  ejercicios: [
    { q: "Define salud según la OMS.", sol: "Estado de completo bienestar físico, mental y social." },
    { q: "Escribe tres hábitos de higiene para después de la clase de EF.", sol: "Ducharse o asearse, cambiarse de camiseta y calcetines, secarse bien los pies." },
    { q: "¿Qué debe llevar tu bolsa de EF?", sol: "Toalla, camiseta de recambio, desodorante, chanclas y botella de agua." },
    { q: "Escribe cuatro consejos para cuidar los pies.", sol: "Calzado adecuado, calcetines limpios, secar bien, uñas rectas, chanclas en duchas." },
    { q: "Describe la postura correcta para estudiar sentado.", sol: "Espalda apoyada, pies en el suelo, pantalla a la altura de los ojos, pausas." },
    { q: "Explica cómo levantar una caja pesada del suelo.", sol: "Acercarse, flexionar rodillas, espalda recta, caja pegada al cuerpo, levantar con las piernas." },
    { q: "Calcula el peso máximo de tu mochila.", sol: "El 10 % de tu peso corporal." },
    { q: "¿Por qué no son adecuadas las bebidas energéticas a tu edad?", sol: "Por su cafeína y azúcar: nerviosismo, insomnio, taquicardia." },
    { q: "Escribe cinco consejos para dormir mejor.", sol: "Horario regular, sin pantallas antes, móvil fuera, cena ligera, ejercicio durante el día." },
    { q: "Elige un hábito que quieras mejorar y escribe un plan de dos semanas.", sol: "Respuesta personal." },
  ],
};
