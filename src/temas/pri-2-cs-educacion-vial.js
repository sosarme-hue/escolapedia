// Ciencias Sociales 2º de Primaria: educación vial. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, nino, coche, bus, bici, semaforo, semaforoPeaton, pasoCebra, calzada, senal, casco, suelo, chip, tick, equis, flechaR, edificio } = require("./_pri2b");

const acera = (y = 120, h = 16) => `<rect x="10" y="${y}" width="240" height="${h}" fill="#cfd5df"/><path d="M10 ${y + h} H250" stroke="#9aa3b5" stroke-width="2"/>`;
const agente = (x, y) => `${nino(x, y, { s: 1.2, c: "#1f6feb", pose: "brazos" })}<path transform="translate(${x} ${y - 88})" d="M-12 0 q0 -12 12 -12 q12 0 12 12z M8 -2 h10 v3 h-10z" fill="#1f6feb"/>`;
const chaleco = (x, y) => `<path transform="translate(${x} ${y})" d="M-10 -40 L-14 -14 H14 L10 -40 Z" fill="#c6f000" opacity=".85"/>`;

module.exports = tema({
  materia: "Ciencias Sociales",
  titulo: "Educación vial",
  objetivos: ["Conocer las partes de la calle y las normas del peatón", "Saber cómo funcionan el semáforo y algunas señales de tráfico", "Viajar seguros como pasajeros y en bici"],
  claves: ["peatón", "acera", "calzada", "paso de cebra", "semáforo", "señal de tráfico", "cinturón"],
  pregunta: {
    texto: "Vas con tu padre a cruzar la calle. El semáforo de los peatones tiene el muñeco en rojo, pero no viene ningún coche. ¿Cruzáis?",
    respuesta: "<mark>No.</mark> Con el muñeco en rojo hay que <b>esperar</b>, aunque no venga nadie. Cuando se pone en <b>verde</b>, miramos a los dos lados y cruzamos por el <b>paso de cebra</b>, sin correr.",
  },
  bloques: [
    {
      html: `<h3>Las partes de la calle</h3><p>La calle tiene dos partes. La <mark>acera</mark> es para los <b>peatones</b>, las personas que van andando. Está un poco más alta.</p><p>La <mark>calzada</mark> es para los <b>vehículos</b>: coches, autobuses, motos y bicis. Los peatones solo pisamos la calzada para cruzar, y por el sitio correcto.</p>`,
      svg: svg("Una calle con acera para peatones y calzada para coches", `${acera(76, 20)}${calzada(96, 56)}${acera(152, 16)}${nino(60, 96, { c: "var(--red)", s: 0.75 })}${nino(84, 96, { c: "var(--pen)", s: 0.6, nina: true })}${coche(170, 136, "var(--leaf)", 1)}${txt(200, 66, "acera", "#5b6475", 14)}${txt(60, 118, "calzada", "#fff", 14)}`),
    },
    {
      html: `<h3>Normas del peatón</h3><p>Cuando vamos andando somos <mark>peatones</mark>. Caminamos siempre por la <b>acera</b>, por la parte de dentro, lejos del bordillo.</p><p>Los niños pequeños van de la <b>mano</b> de una persona mayor. No jugamos ni corremos en la acera cerca de los coches. Y en una carretera sin acera, andamos por el <b>lado izquierdo</b>, de cara a los coches.</p>`,
      svg: svg("Un niño de la mano de su madre por la parte de dentro de la acera", `${edificio(40, 110, 50, 90, "#b9c2d3")}${edificio(100, 110, 50, 70, "#9aa3b5")}${acera(110, 22)}${calzada(132, 38)}${nino(150, 128, { s: 1.15, c: "var(--red)", nina: true })}${nino(126, 128, { s: 0.75, c: "var(--pen)" })}<path d="M134 102 L140 104" stroke="#f3c9a1" stroke-width="3"/>${coche(214, 168, "var(--muted)", 0.8)}${tick(214, 40)}${txt(214, 72, "de la mano", "var(--leaf)", 13)}`),
    },
    {
      html: `<h3>Cruzar la calle</h3><p>Para cruzar usamos el <mark>paso de cebra</mark>, las rayas blancas de la calzada. Antes de cruzar: <b>paramos</b> en el bordillo, <b>miramos</b> a la izquierda, a la derecha y otra vez a la izquierda, y <b>escuchamos</b>.</p><p>Si no viene nadie o los coches se han parado, cruzamos <b>en línea recta</b>, andando, sin correr y sin el móvil.</p>`,
      svg: svg("Un niño espera en el bordillo y mira a los dos lados antes del paso de cebra", `${acera(40, 20)}${calzada(60, 90)}${pasoCebra(100, 60, 90, 90)}${acera(150, 12)}${nino(146, 58, { c: "var(--red)", s: 0.6 })}<path d="M128 26 q-14 0 -22 6 M164 26 q14 0 22 6" stroke="var(--pen)" stroke-width="2" stroke-dasharray="3 3" fill="none"/>${coche(50, 100, "var(--leaf)", 0.9)}${txt(130, 176, "paro · miro · escucho", "var(--pen)", 12)}`),
    },
    {
      html: `<h3>El semáforo</h3><p>El <mark>semáforo</mark> nos dice cuándo pasar. El de los coches tiene tres luces: <b>rojo</b> (parar), <b>ámbar</b> (precaución, va a cambiar) y <b>verde</b> (pasar).</p><p>El de los <b>peatones</b> tiene dos muñecos: el <b>rojo</b> quieto, que significa esperar, y el <b>verde</b> andando, que significa que puedes cruzar mirando antes.</p>`,
      svg: svg("Un semáforo de coches con tres luces y uno de peatones con dos", `${semaforo(70, 160, "rojo", 1.6)}${semaforoPeaton(184, 140, true)}${txt(118, 52, "parar", "#e5484d", 13)}${txt(118, 86, "cuidado", "#f5a524", 13)}${txt(118, 120, "pasar", "#30a46c", 13)}${txt(184, 160, "peatones", "var(--pen)", 13)}${txt(70, 174, "coches", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>Las señales de tráfico</h3><p>Las <mark>señales de tráfico</mark> son dibujos que dan avisos a conductores y peatones. Hay que conocerlas y respetarlas.</p><p>Las <b>redondas con borde rojo</b> prohíben algo. Las <b>triangulares</b> avisan de un peligro. Las <b>cuadradas azules</b> informan, como la del paso de peatones. Y la <b>octogonal roja</b> es la señal de STOP: hay que pararse del todo.</p>`,
      svg: svg("Cuatro señales: prohibido, peligro, paso de peatones y STOP", `${suelo(150)}${senal(40, 150, "prohibido")}${senal(98, 150, "peligro")}${senal(160, 150, "paso")}${senal(220, 150, "stop")}${txt(40, 170, "prohíbe", "var(--red)", 11)}${txt(98, 170, "peligro", "var(--red)", 11)}${txt(160, 170, "informa", "#1f6feb", 11)}${txt(220, 170, "stop", "var(--red)", 11)}`),
      video: V("W5pewg39ibk"),
    },
    {
      html: `<h3>El agente de tráfico</h3><p>A veces hay un <mark>agente de policía</mark> dirigiendo el tráfico con sus brazos y su silbato. Lo que dice el agente es <b>lo más importante</b>, más que el semáforo.</p><p>Si el agente levanta el brazo, todos paramos. Si nos hace una señal con la mano, podemos pasar. ¡Hay que estar muy atentos!</p>`,
      svg: svg("Un agente de tráfico con los brazos abiertos en medio del cruce", `${calzada(110, 52)}${agente(130, 140)}<circle cx="148" cy="64" r="4" fill="#9aa3b5"/>${coche(40, 154, "var(--red)", 0.8)}${coche(220, 154, "var(--leaf)", 0.8)}${txt(130, 30, "¡El agente manda!", "#1f6feb", 15)}`),
    },
    {
      html: `<h3>En el coche y en el autobús</h3><p>Cuando vamos en un vehículo somos <mark>pasajeros</mark>. En el coche nos sentamos <b>detrás</b>, en nuestra <b>silla</b> o alzador, y siempre con el <b>cinturón</b> puesto, aunque el viaje sea corto.</p><p>Bajamos del coche por el lado de la <b>acera</b>. No sacamos los brazos por la ventanilla ni molestamos al conductor. En el autobús, vamos sentados o bien agarrados.</p>`,
      svg: svg("Un niño baja del coche por el lado de la acera", `${calzada(124, 46)}${acera(108, 16)}<g transform="translate(140 132)"><path d="M-60 -8 V-34 H-34 L-20 -54 H20 L36 -34 H60 V-8Z" fill="var(--pen)"/><rect x="-14" y="-50" width="28" height="16" fill="var(--water)" opacity=".7"/><circle cx="-36" cy="-6" r="12" fill="#1b2235"/><circle cx="36" cy="-6" r="12" fill="#1b2235"/></g>${nino(52, 108, { c: "var(--red)", s: 0.7 })}${flechaR(96, 86, 72, 86, "var(--leaf)")}${txt(70, 40, "por la acera", "var(--leaf)", 13)}${tick(140, 40)}`),
    },
    {
      html: `<h3>En bici y en patinete</h3><p>Para ir en <mark>bici</mark> o en patinete, siempre con <b>casco</b>. Si es de noche, con <b>luces</b> y ropa que se vea, como un chaleco reflectante.</p><p>Los niños montan en bici en el <b>parque</b>, en el carril bici o en calles tranquilas, siempre con una persona mayor. Hay que comprobar que los <b>frenos</b> funcionan bien.</p>`,
      svg: svg("Una niña en bici con casco y chaleco por el carril bici", `<rect x="10" y="110" width="240" height="56" fill="#3f8f5a" opacity=".55"/><path d="M14 138 H246" stroke="#fff" stroke-width="2" stroke-dasharray="12 8"/>${bici(120, 156, 1.3)}${nino(120, 134, { nina: true, c: "var(--red)", pose: "sentado", s: 0.85 })}${chaleco(120, 124)}${casco(120, 70, "var(--sun)")}${chip(54, 36, 70, "casco", "var(--sun)", 13)}${chip(196, 36, 84, "chaleco", "#7a9a00", 13)}`),
    },
    {
      html: `<h3>Juego: ¿bien o mal?</h3><p>Decide si cada niño lo hace <mark>bien o mal</mark>. «Cruzo por el paso de cebra cuando el muñeco está verde»: <b>bien</b>. «Cruzo corriendo entre dos coches aparcados»: <b>mal</b>.</p><p>«Voy en el coche sin cinturón porque es cerca»: <b>mal</b>. «Monto en bici con casco»: <b>bien</b>. «Juego a la pelota en la acera junto a la calzada»: <b>mal</b>. ¡Muy bien!</p>`,
      svg: svg("Un niño cruza por el paso de cebra con visto bueno y otro sale entre coches con una cruz", `${calzada(60, 90)}${pasoCebra(20, 60, 90, 90)}${nino(64, 124, { c: "var(--leaf)", s: 0.7 })}${semaforoPeaton(30, 56, true)}${tick(64, 36)}${coche(176, 98, "var(--muted)", 0.8)}${coche(176, 146, "var(--muted)", 0.8)}${nino(216, 128, { c: "var(--red)", s: 0.7, pose: "corre" })}${equis(216, 36)}`),
    },
  ],
  figura: {
    titulo: "Para cruzar seguro",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Uno: para en el bordillo. Dos: mira a los dos lados. Tres: escucha. Cuatro: cruza por el paso de cebra sin correr">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[["1. Paro", "en el bordillo", "var(--red)"], ["2. Miro", "izquierda y derecha", "var(--sun)"], ["3. Escucho", "¿viene algo?", "var(--pen)"], ["4. Cruzo", "por el paso de cebra", "var(--leaf)"]].map(([t, d, c], i) => `<rect x="${16 + i * 156}" y="24" width="140" height="212" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${rot(86 + i * 156, 196, t, { size: 21, color: c, w: 800 })}${rot(86 + i * 156, 220, d, { size: 13, color: "var(--muted)" })}`).join("")}
      ${nino(86, 160, { c: "var(--red)", s: 1.3, pose: "brazos" })}
      ${nino(242, 160, { c: "var(--sun)", s: 1.3 })}<path d="M210 70 q-18 0 -26 8 M274 70 q18 0 26 8" stroke="var(--sun)" stroke-width="3" stroke-dasharray="4 4" fill="none"/>
      ${nino(398, 160, { c: "var(--pen)", s: 1.3 })}<path d="M372 64 q-10 12 0 24 M424 64 q10 12 0 24" stroke="var(--pen)" stroke-width="3" fill="none"/>
      ${pasoCebra(500, 110, 120, 60)}${nino(554, 160, { c: "var(--leaf)", s: 1.1 })}
    </svg>`,
  },
  video: V("7nO1D2NYM6g", "educación vial para niños"),
  ejemplos: [
    { enunciado: "El muñeco del semáforo está verde. ¿Cruzas ya corriendo?", pasos: ["El verde dice que puedo cruzar.", "Pero antes miro a los dos lados por si algún coche no para.", "Cruzo andando, en línea recta, por el paso de cebra."], resultado: "cruzo andando después de mirar." },
    { enunciado: "Vas en coche al cole, que está muy cerca. ¿Te pones el cinturón?", pasos: ["Los accidentes pueden pasar en viajes cortos.", "El cinturón nos sujeta si el coche frena de golpe.", "La norma es llevarlo siempre."], resultado: "sí, siempre con cinturón." },
    { enunciado: "Ves una señal triangular con borde rojo. ¿Qué te dice?", pasos: ["Las señales triangulares avisan.", "Avisan de un peligro.", "Hay que ir con más cuidado."], resultado: "avisa de un peligro." },
  ],
  errores: [
    "Cruzar con el muñeco rojo porque no viene nadie: hay que esperar siempre al verde.",
    "Cruzar entre coches aparcados: los conductores no nos ven.",
    "Pensar que con el muñeco verde no hay que mirar: algún coche podría no parar.",
    "Quitarse el cinturón porque el viaje es corto: se lleva siempre.",
  ],
  ejercicios: [
    { q: "¿Para quién es la acera? ¿Y la calzada?", sol: "La acera, para los peatones; la calzada, para los vehículos." },
    { q: "¿Qué es un peatón?", sol: "Una persona que va andando." },
    { q: "¿Por dónde cruzamos la calle?", sol: "Por el paso de cebra." },
    { q: "Escribe los pasos para cruzar.", sol: "Paro, miro a los dos lados, escucho y cruzo andando en línea recta." },
    { q: "¿Qué significan las tres luces del semáforo de coches?", sol: "Rojo: parar. Ámbar: precaución. Verde: pasar." },
    { q: "¿Qué significa el muñeco rojo del semáforo de peatones?", sol: "Que hay que esperar." },
    { q: "Dibuja una señal de STOP. ¿Qué forma tiene?", sol: "Octogonal (ocho lados) y roja, con la palabra STOP." },
    { q: "¿Quién manda más, el agente o el semáforo?", sol: "El agente de tráfico." },
    { q: "¿Por qué lado bajamos del coche?", sol: "Por el lado de la acera." },
    { q: "¿Qué necesitas para montar en bici seguro?", sol: "Casco, frenos que funcionen y luces si es de noche." },
  ],
  quiz: [
    { q: "La acera es para…", o: ["los peatones", "los coches", "los camiones"], a: 0, e: "Para ir andando." },
    { q: "Cruzamos por…", o: ["el paso de cebra", "en medio de la calle", "entre coches"], a: 0, e: "Las rayas blancas." },
    { q: "La luz roja significa…", o: ["pasar", "parar", "correr"], a: 1, e: "Hay que detenerse." },
    { q: "El muñeco verde significa…", o: ["puedo cruzar mirando", "esperar", "volver"], a: 0, e: "Siempre mirando antes." },
    { q: "La luz ámbar significa…", o: ["precaución", "fiesta", "acelerar"], a: 0, e: "Va a cambiar a rojo." },
    { q: "Las señales triangulares…", o: ["avisan de un peligro", "son de adorno", "dan premios"], a: 0, e: "Triángulo con borde rojo." },
    { q: "En el coche siempre llevo…", o: ["el cinturón", "la ventanilla abierta", "los pies fuera"], a: 0, e: "Aunque el viaje sea corto." },
    { q: "Para ir en bici me pongo…", o: ["casco", "sombrero", "chanclas"], a: 0, e: "Protege la cabeza." },
    { q: "Antes de cruzar miramos…", o: ["a los dos lados", "al cielo", "al móvil"], a: 0, e: "Izquierda, derecha e izquierda." },
    { q: "La señal de STOP obliga a…", o: ["pararse del todo", "ir más rápido", "tocar el claxon"], a: 0, e: "Es octogonal y roja." },
  ],
  examen: [
    { q: "¿Qué hacemos con el muñeco rojo aunque no vengan coches?", o: ["Esperar", "Cruzar", "Correr"], a: 0, e: "Siempre esperamos." },
    { q: "¿Quién dirige el tráfico con los brazos?", o: ["El agente de policía", "El panadero", "El cartero"], a: 0, e: "Hay que obedecerle." },
    { q: "Un niño pequeño por la calle va…", o: ["de la mano de un mayor", "solo y corriendo", "por la calzada"], a: 0, e: "Por la parte de dentro de la acera." },
    { q: "Las señales cuadradas azules…", o: ["informan", "prohíben", "avisan de peligro"], a: 0, e: "Como la del paso de peatones." },
  ],
  feynman: ["Las partes de la calle y quién usa cada una", "Cómo cruzar la calle de forma segura", "Qué nos dicen el semáforo y las señales"],
  mapaT: ["EDUCACIÓN VIAL", [
    ["La calle", "acera · calzada", "var(--muted)"],
    ["Cruzar", "paso de cebra · miro · escucho", "var(--leaf)"],
    ["Semáforo", "rojo para · verde pasa", "var(--red)"],
    ["Viajar seguro", "cinturón · casco", "var(--pen)"],
  ]],
  tarjetas: [
    ["¿Qué es un peatón?", "Una persona que va andando"],
    ["¿Para quién es la acera?", "Para los peatones"],
    ["¿Para quién es la calzada?", "Para los vehículos"],
    ["¿Por dónde cruzamos?", "Por el paso de cebra"],
    ["Luz roja", "Parar"],
    ["Muñeco verde", "Puedo cruzar mirando antes"],
    ["Señal triangular", "Avisa de un peligro"],
    ["En el coche siempre…", "Cinturón y silla"],
  ],
  familias: [
    "En cada cruce, dejad que sea él o ella quien diga los pasos: paro, miro, escucho y cruzo.",
    "Buscad juntos tres señales de tráfico en el camino al cole y explicad qué significan.",
    "Revisad la bici: frenos, luces y casco bien ajustado.",
    "Dad ejemplo: cruzad siempre en verde y por el paso de cebra, aunque tengáis prisa.",
  ],
  saberes: "Educación vial: la calle (acera y calzada), normas básicas del peatón y del pasajero, el semáforo, señales de tráfico sencillas y uso seguro de la bicicleta",
  ideas: ["Circuito vial en el patio con pasos de cebra pintados con tiza y semáforos de cartulina.", "Visita de la policía local para una charla de educación vial.", "Paseo por el entorno del colegio identificando señales."],
});

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Distinguir las formas y colores de las señales", "Conocer las normas del pasajero en el transporte público", "Saber cómo actuar en caso de accidente", "Ser visible de noche y con mal tiempo"],
  lectura: { titulo: "El camino al cole de Leo", html: `<p>Este curso, Leo va andando al cole con su hermano mayor, Mario. Su madre les ha enseñado el camino más seguro.</p><p>Salen de casa y van siempre por la acera, lejos del bordillo. En la esquina hay un semáforo. Está en rojo para los peatones, así que esperan.</p><p>—Mira, Mario, no viene ningún coche. ¿Pasamos?</p><p>—No. Si el muñeco está en rojo, no se cruza. Aunque no venga nadie.</p><p>Cuando el muñeco se pone verde, miran a la izquierda, a la derecha y otra vez a la izquierda. Un coche se ha parado. Mario saluda al conductor y cruzan por el paso de peatones.</p><p>Más adelante hay una calle sin semáforo, pero con un paso de cebra. Allí, una señora con chaleco amarillo y una señal en la mano les ayuda a cruzar: es la agente que vigila la entrada del cole.</p><p>—¡Buenos días, chicos! —les dice.</p><p>Leo llega a clase a tiempo y orgulloso: hoy ha sido un peatón responsable.</p>` },
  tras: {
    "Las señales de tráfico": [
      ["Formas y colores de las señales", `<p>Las señales de tráfico se entienden por su <mark>forma</mark> y su <mark>color</mark>, aunque no sepamos leer:</p><ul><li><b>Círculo rojo</b>: <b>prohibición</b>. Algo que no se puede hacer. Por ejemplo: prohibido pasar bicicletas.</li><li><b>Triángulo rojo</b>: <b>peligro</b>. Avisa de algo: niños, curva, animales sueltos.</li><li><b>Círculo azul</b>: <b>obligación</b>. Algo que hay que hacer: camino solo para bicis, para peatones.</li><li><b>Cuadrado o rectángulo azul</b>: <b>información</b>. Paso de peatones, hospital, aparcamiento.</li></ul><p>Hay dos señales especiales: el <b>STOP</b>, con forma de octógono rojo, que obliga a pararse del todo; y el <b>ceda el paso</b>, un triángulo al revés, que obliga a dejar pasar a otros.</p><p><b>Actividad</b>: en el camino al cole, busca una señal de cada tipo y dibújala.</p>`,
        L6.filas("Señales", [["círculo rojo", "prohíbe", cRO], ["triángulo rojo", "peligro", cNA], ["círculo azul", "obliga", cAZ], ["cuadrado azul", "informa", cVE]]),
        ["rnb0fkpeOao", "Las señales de tráfico, seguridad vial niños", "Greenlight", 2948983]],
    ],
    "En el coche y en el autobús": [
      ["El buen pasajero", `<p>Un <mark>pasajero</mark> es quien viaja en un vehículo sin conducirlo. También tiene sus normas:</p><p>En el <b>coche</b>:</p><ul><li>Los niños viajan siempre <b>detrás</b>, en su <b>silla o elevador</b>, con el cinturón abrochado.</li><li>Se sube y se baja por el lado de la <b>acera</b>.</li><li>No se molesta al conductor ni se sacan los brazos por la ventanilla.</li></ul><p>En el <b>autobús</b> o el metro:</p><ul><li>Esperar en la <b>parada</b>, sin acercarse al borde.</li><li>Dejar <b>salir</b> antes de entrar.</li><li>Ceder el asiento a personas mayores, embarazadas o con muletas.</li><li>Agarrarse a la barra si vamos de pie.</li><li>No cruzar por <b>delante</b> del autobús al bajar: esperar a que se vaya.</li></ul><p><b>Actividad</b>: haced un autobús con sillas en clase y practicad las normas.</p>`,
        H6.dos("Pasajero", ["COCHE", ["detrás", "silla", "cinturón"], cAZ], ["AUTOBÚS", ["dejar salir", "ceder asiento", "agarrarse"], cVE])],
    ],
    "En bici y en patinete": [
      ["Ser visible", `<p>Para estar seguros en la calle, es muy importante que los conductores nos <mark>vean</mark>. Sobre todo:</p><ul><li>Al <b>anochecer</b> y de <b>noche</b>.</li><li>Con <b>lluvia</b> o <b>niebla</b>.</li><li>En carreteras sin aceras, en el campo.</li></ul><p>¿Cómo hacernos visibles?</p><ul><li>Llevar ropa de <b>colores claros</b> o vivos: amarillo, naranja, blanco.</li><li>Usar un <b>chaleco reflectante</b>, que brilla cuando le dan las luces de los coches.</li><li>Poner <b>pegatinas reflectantes</b> en la mochila, el casco y la bici.</li><li>Llevar <b>luces</b> en la bici: blanca delante y roja detrás.</li><li>En carretera, caminar por la <b>izquierda</b>, de frente a los coches.</li></ul><p>Con ropa oscura, de noche, un conductor tarda mucho en vernos. ¡Con reflectantes nos ve desde muy lejos!</p><p><b>Actividad</b>: decora tu mochila con tiras reflectantes.</p>`,
        H6.rueda("Visible", "VERTE", [["ropa clara", cNA], ["chaleco", cVE], ["luces", cAZ], ["pegatinas", cRO]])],
    ],
    "El agente de tráfico": [
      ["Si hay un accidente", `<p>A veces ocurren <mark>accidentes</mark> en la calle. Si ves uno, debes saber qué hacer:</p><ul><li><b>Mantén la calma</b> y no te acerques a la carretera.</li><li><b>Avisa a un adulto</b> enseguida.</li><li>Si no hay ningún adulto, llama al <b>112</b>. Es el teléfono de emergencias: sirve para ambulancias, bomberos y policía.</li><li>Di <b>qué ha pasado</b> y <b>dónde</b> estás.</li><li>No muevas a una persona herida: espera a que lleguen los profesionales.</li></ul><p>El 112 es gratis y funciona desde cualquier teléfono, incluso sin saldo. Pero solo se llama para <b>emergencias de verdad</b>: si llamas en broma, puedes quitarle la línea a alguien que lo necesita.</p><p>Aprende también tu dirección y el teléfono de tus padres de memoria.</p><p><b>Actividad</b>: practica con un compañero una llamada al 112 explicando qué ha pasado y dónde.</p>`,
        H6.flujo("Accidente", ["calma|lejos", "avisar|adulto", "llamar|112", "decir|qué y dónde"], cRO)],
    ],
  },
  final: [
    ["Caminos escolares seguros", `<p>En muchas ciudades hay <mark>caminos escolares seguros</mark>: recorridos preparados para que los niños puedan ir andando al colegio con tranquilidad.</p><ul><li>Tienen <b>aceras anchas</b> y pasos de peatones bien pintados.</li><li>Hay <b>señales</b> que avisan a los coches de que pasan niños.</li><li>En algunos sitios hay <b>comercios amigos</b> con una pegatina: si un niño necesita ayuda, puede entrar.</li><li>Hay <b>agentes</b> o voluntarios en los cruces a la hora de entrada y salida.</li></ul><p>También existe el <b>bus andando</b>: un grupo de niños va al cole caminando juntos, acompañados de adultos, y van recogiendo a otros por paradas, como un autobús.</p><p>Ir andando al cole es sano, contamina menos y ayuda a conocer el barrio.</p><p><b>Actividad</b>: dibuja un plano de tu camino al cole y marca los cruces y los lugares seguros.</p>`,
      L6.filas("Camino seguro", [["aceras", "anchas", cAZ], ["pasos", "bien pintados", cVE], ["comercios", "amigos", cNA], ["bus andando", "en grupo", cRO]])],
    ["Repaso: el camino de Leo", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Leo y Mario van por la <b>acera</b>, lejos del bordillo.</li><li>Esperan con el muñeco en <b>rojo</b>, aunque no venga nadie.</li><li>Miran a la <b>izquierda</b>, a la <b>derecha</b> y otra vez a la izquierda.</li><li>Cruzan por el <b>paso de peatones</b>, cuando el coche se ha parado.</li><li>Mario saluda al conductor: así se aseguran de que <b>les ha visto</b>.</li><li>Una <b>agente</b> con chaleco amarillo les ayuda en el paso de cebra.</li></ul><p>Leo ha sido un buen <b>peatón</b>. ¿Y si fuera de noche? Debería llevar ropa clara o algo reflectante para ser <b>visible</b>.</p><p><b>Actividad</b>: escribe cinco normas para ir al cole andando de forma segura.</p>`,
      H6.flujo("Leo", ["acera|por dentro", "rojo|esperar", "mirar|izq. y der.", "cruzar|paso"], cVE)],
  ],
  ejemplos: [
    ["¿Qué significa un círculo rojo?", ["Rojo y redondo.", "Es una prohibición."], "Que algo está prohibido."],
    ["¿Por dónde caminamos en una carretera sin acera?", ["Debemos ver los coches de frente."], "Por la izquierda."],
  ],
  errores: ["Cruzar con el muñeco en rojo porque no viene nadie.", "Llamar al 112 en broma."],
  ejercicios: [
    ["b", "¿Qué indica un triángulo rojo?", "Peligro."],
    ["b", "¿Qué forma tiene la señal de STOP?", "Octógono."],
    ["b", "¿Dónde van los niños en el coche?", "Detrás, en su silla, con cinturón."],
    ["b", "¿Cuál es el teléfono de emergencias?", "112."],
    ["b", "Di una forma de ser visible de noche.", "Chaleco reflectante, ropa clara…"],
    ["m", "¿Qué indica un círculo azul?", "Obligación."],
    ["m", "¿Por qué no cruzamos por delante del autobús al bajar?", "Porque los coches no nos ven."],
    ["m", "¿Qué luces lleva una bici?", "Blanca delante y roja detrás."],
    ["m", "¿Qué decimos al llamar al 112?", "Qué ha pasado y dónde."],
    ["m", "¿Qué es el bus andando?", "Un grupo de niños que va al cole a pie con adultos."],
    ["a", "En la lectura, ¿por qué no cruzan aunque no venga ningún coche?", "Porque el muñeco está en rojo."],
    ["a", "¿Por qué Mario saluda al conductor?", "Para asegurarse de que les ha visto."],
    ["a", "Explica qué harías si ves un accidente.", "Calma, avisar a un adulto o llamar al 112."],
    ["a", "Diseña una señal para la puerta del cole.", "Respuesta libre con forma y color adecuados."],
  ],
  quiz: [
    ["Las señales de prohibición son…", ["círculos rojos", "cuadrados azules", "triángulos"], "Señales."],
    ["En el autobús, antes de entrar…", ["dejamos salir", "empujamos", "corremos"], "Pasajero."],
    ["De noche conviene llevar…", ["reflectantes", "ropa negra", "nada"], "Visible."],
    ["El teléfono de emergencias es el…", ["112", "123", "911"], "Accidente."],
    ["En carretera sin acera caminamos por la…", ["izquierda", "derecha", "mitad"], "Visible."],
  ],
  examen: [
    ["En la lectura, ¿quién ayuda a cruzar en el paso de cebra?", ["una agente", "un perro", "un profesor"], "Lectura."],
    ["Leo mira primero a la…", ["izquierda", "derecha", "arriba"], "Repaso."],
  ],
  tarjetas: [
    ["Señales", "Rojo prohíbe o avisa; azul obliga o informa."],
    ["112", "Emergencias: qué pasa y dónde."],
  ],
  glosario: [
    ["Prohibición", "Algo que no se puede hacer."],
    ["Obligación", "Algo que hay que hacer."],
    ["Ceda el paso", "Señal que obliga a dejar pasar."],
    ["Pasajero", "Persona que viaja sin conducir."],
    ["Reflectante", "Que brilla con la luz de los coches."],
    ["Visible", "Que se puede ver."],
    ["Emergencia", "Situación grave que necesita ayuda urgente."],
    ["112", "Teléfono de emergencias."],
    ["Elevador", "Asiento para que el niño use bien el cinturón."],
    ["Camino escolar", "Recorrido seguro hasta el colegio."],
  ],
  situacion: {
    titulo: "Agentes del camino seguro",
    reto: "La clase estudia el camino al colegio y propone mejoras para que sea más seguro.",
    pasos: ["Dibujar un plano con el camino al cole.", "Marcar señales, semáforos y cruces peligrosos.", "Proponer mejoras y escribir normas para peatones.", "Presentar el plano y las propuestas al equipo directivo."],
    producto: "Un plano del camino escolar con normas y propuestas.",
    evaluacion: ["Interpreta señales por forma y color.", "Conoce las normas del pasajero.", "Sabe hacerse visible.", "Sabe actuar ante un accidente."],
  },
});
