// Ciencias Sociales 2º de Primaria: el paisaje de montaña y de costa. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, nino, monte, mar, barca, faro, rio, pino, arbol, sol, nube, vaca, pez, ave, chip, flechaR, tick, equis, hierba, edificio, casa } = require("./_pri2b");

const valle = () => `${monte(50, 140, 120, 110, "#8a7a5a")}${monte(210, 140, 120, 100, "#7a6b4c")}<path d="M100 140 Q130 120 160 140Z" fill="var(--leaf)" opacity=".5"/>`;
const casita = (x, y, c = "var(--red)", s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-12" y="-18" width="24" height="18" fill="var(--card)" stroke="var(--ink)" stroke-width="1.2"/><path d="M-15 -18 L0 -30 L15 -18Z" fill="${c}"/></g>`;
const playa = (y = 132) => `<path d="M10 ${y} Q130 ${y - 10} 250 ${y} V170 H10Z" fill="#e8d29a"/>`;
const sombrilla = (x, y, c = "var(--red)") => `<g transform="translate(${x} ${y})"><path d="M0 0 V-34" stroke="var(--ink)" stroke-width="2"/><path d="M-20 -30 a20 12 0 0 1 40 0z" fill="${c}"/></g>`;
const acantilado = (x, y) => `<path d="M${x} ${y} V${y - 70} L${x + 30} ${y - 76} L${x + 60} ${y - 60} V${y}Z" fill="#a0805a" stroke="#7a5f3e" stroke-width="1.5"/>`;
const cabra = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cy="-14" rx="14" ry="8" fill="#e9e3d6" stroke="var(--muted)"/><circle cx="14" cy="-22" r="6" fill="#e9e3d6" stroke="var(--muted)"/><path d="M12 -28 q2 -8 -4 -10 M16 -28 q4 -8 0 -12" stroke="var(--ink)" stroke-width="1.5" fill="none"/><path d="M-8 -8 V0 M8 -8 V0" stroke="var(--ink)" stroke-width="2.5"/></g>`;
const gaviota = (x, y) => `<path d="M${x - 10} ${y} q5 -6 10 0 q5 -6 10 0" stroke="var(--ink)" stroke-width="2" fill="none" stroke-linecap="round"/>`;

module.exports = tema({
  materia: "Ciencias Sociales",
  titulo: "El paisaje de montaña y de costa",
  objetivos: ["Saber qué es un paisaje y qué elementos tiene", "Describir el paisaje de montaña y el de costa", "Distinguir elementos naturales y construidos, y cuidar el paisaje"],
  claves: ["paisaje", "montaña", "cima", "valle", "costa", "playa", "acantilado", "puerto"],
  pregunta: {
    texto: "En verano, una familia va a la playa y otra a la montaña. ¿Qué verá cada una cuando mire a su alrededor?",
    respuesta: "En la <mark>montaña</mark> verán cimas altas, bosques, ríos y, en invierno, nieve. En la <mark>costa</mark> verán el mar, la playa, las rocas y los barcos. Son dos <b>paisajes</b> muy distintos.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un paisaje?</h3><p>Un <mark>paisaje</mark> es todo lo que vemos cuando miramos un lugar a nuestro alrededor: el terreno, el agua, las plantas, los animales y lo que han construido las personas.</p><p>Hay paisajes de <b>montaña</b>, de <b>costa</b>, de <b>llanura</b> y de ciudad. Cada lugar tiene su paisaje y cambia con las estaciones.</p>`,
      svg: svg("Un niño mira un paisaje con montañas, un río y un pueblo", `${valle()}<rect x="10" y="140" width="240" height="30" fill="var(--leaf)" opacity=".35"/>${rio(150)}${casita(130, 140)}${pino(30, 150, 0.6)}${sol(220, 30, 12)}${nino(214, 168, { c: "var(--red)", s: 0.6 })}`),
    },
    {
      html: `<h3>La montaña</h3><p>Una <mark>montaña</mark> es una gran elevación del terreno. La parte más alta es la <b>cima</b>. Los lados son las <b>laderas</b>. Abajo, entre dos montañas, está el <b>valle</b>.</p><p>Muchas montañas juntas forman una <b>sierra</b> o una <b>cordillera</b>, como los Pirineos. En las montañas nacen muchos <b>ríos</b>.</p>`,
      svg: svg("Una montaña con su cima, su ladera y el valle", `${monte(100, 160, 170, 130, "#8a7a5a")}${monte(220, 160, 110, 80, "#7a6b4c", false)}${flechaR(140, 30, 108, 34, "var(--muted)")}${txt(176, 30, "cima", "var(--pen)", 15)}${flechaR(52, 80, 66, 98, "var(--muted)")}${txt(40, 70, "ladera", "var(--pen)", 15)}${chip(160, 166, 60, "valle", "var(--leaf)", 13)}`),
      video: V("QZsLWPVgB1c"),
    },
    {
      html: `<h3>Cómo es el paisaje de montaña</h3><p>En la montaña hace más <mark>frío</mark> cuanto más subimos. En invierno, las cimas se cubren de <b>nieve</b>.</p><p>Hay <b>bosques</b> de pinos, hayas y robles, y prados verdes. Viven animales como la cabra montés, el ciervo, el oso o el águila. Los ríos bajan rápidos y forman cascadas.</p>`,
      svg: svg("Montaña con nieve, bosque de pinos, una cabra y un águila", `${monte(130, 140, 200, 120, "#8a7a5a")}${[30, 54, 210, 234].map((x) => pino(x, 156, 0.8)).join("")}<rect x="10" y="140" width="240" height="30" fill="var(--leaf)" opacity=".35"/>${cabra(110, 150, 1)}${gaviota(200, 40)}${gaviota(222, 52)}${nube(50, 40, 0.8)}`),
    },
    {
      html: `<h3>Vivir en la montaña</h3><p>En las montañas hay <mark>pueblos</mark> pequeños, con casas de piedra y tejados muy inclinados para que resbale la nieve.</p><p>Las personas trabajan en la <b>ganadería</b> (vacas y ovejas), en el bosque y en el <b>turismo</b>: estaciones de esquí, rutas de senderismo y casas rurales. Para llegar se construyen carreteras con curvas y túneles.</p>`,
      svg: svg("Un pueblo de montaña con casas de tejado inclinado, vacas y una carretera con curvas", `${monte(70, 120, 140, 100, "#8a7a5a")}${monte(200, 120, 140, 90, "#7a6b4c")}<rect x="10" y="120" width="240" height="50" fill="var(--leaf)" opacity=".35"/>${casita(60, 150, "#555")}${casita(92, 156, "#555", 0.9)}${vaca(170, 160, 0.6)}${vaca(210, 164, 0.5)}<path d="M196 120 q30 -12 6 -22 q-24 -10 8 -24" stroke="#9aa3b5" stroke-width="5" fill="none" stroke-linecap="round"/>`),
    },
    {
      html: `<h3>La costa</h3><p>La <mark>costa</mark> es la tierra que está junto al <b>mar</b>. Allí el agua es salada y hay <b>olas</b> y mareas.</p><p>En la costa hay <b>playas</b> de arena, donde nos bañamos, y <b>acantilados</b>, que son rocas altas y cortadas junto al mar. A veces hay islas cerca y cabos que entran en el mar.</p>`,
      svg: svg("Una costa con una playa de arena, un acantilado y el mar", `${mar(100, 70)}${playa(140)}${acantilado(180, 140)}${sombrilla(60, 150)}${gaviota(120, 40)}${gaviota(140, 52)}${sol(40, 34, 12)}${txt(70, 168, "playa", "#8a5a2b", 13)}${txt(210, 160, "acantilado", "#fff", 12)}${chip(130, 118, 50, "mar", "var(--water)", 13)}`),
    },
    {
      html: `<h3>Vivir en la costa</h3><p>En la costa hay pueblos de <b>pescadores</b> y ciudades grandes con <mark>puerto</mark>. En el puerto atracan los barcos de pesca y de pasajeros.</p><p>Muchas personas trabajan en la <b>pesca</b>, en el puerto o en el <b>turismo</b>: hoteles, restaurantes y tiendas para los visitantes que vienen a la playa. El <b>faro</b> guía a los barcos por la noche.</p>`,
      svg: svg("Un puerto con barcas de pescadores, casas y un faro", `${mar(108, 62)}<rect x="10" y="100" width="130" height="14" fill="#9aa3b5"/>${[30, 56, 82, 108].map((x, i) => casita(x, 100, ["var(--red)", "var(--sun)", "var(--pen)", "var(--leaf)"][i])).join("")}${barca(60, 134, "var(--red)")}${barca(110, 146, "var(--pen)")}${faro(214, 112)}<rect x="196" y="112" width="36" height="10" fill="#a0805a"/><path d="M200 46 L150 30 M200 46 L160 60" stroke="var(--sun)" stroke-width="2" opacity=".7"/>`),
    },
    {
      html: `<h3>Elementos naturales y construidos</h3><p>En un paisaje hay <mark>elementos naturales</mark>, que existen sin que nadie los haga: montañas, ríos, el mar, las rocas, las plantas y los animales.</p><p>Y hay <mark>elementos construidos</mark> por las personas: casas, carreteras, puentes, puertos, presas y campos de cultivo. Un paisaje con muchas construcciones es un paisaje <b>humanizado</b>.</p>`,
      svg: svg("Un río con un puente y casas: el río es natural y el puente es construido", `${monte(60, 110, 120, 80, "#8a7a5a")}${rio(120)}<path d="M120 124 q30 -30 60 0" stroke="#9aa3b5" stroke-width="8" fill="none"/><path d="M110 124 H190" stroke="#9aa3b5" stroke-width="6"/>${casita(210, 120, "var(--red)")}${casita(236, 122, "var(--sun)", 0.8)}${chip(60, 160, 82, "natural", "var(--leaf)", 13)}${chip(190, 160, 96, "construido", "var(--red)", 13)}`),
    },
    {
      html: `<h3>¿Para qué sirve? Cuidar el paisaje</h3><p>Los paisajes son un <mark>tesoro de todos</mark>. Los visitamos para pasear, bañarnos o hacer deporte. Por eso hay que cuidarlos.</p><p>En la montaña y en la playa, <b>recoge tu basura</b> y llévatela. No hagas fuego en el monte. No arranques plantas ni molestes a los animales. Y sigue siempre los <b>caminos</b> señalizados.</p>`,
      svg: svg("Una niña recoge la basura en la playa y la mete en una bolsa", `${mar(90, 50)}${playa(134)}${nino(100, 160, { nina: true, c: "var(--red)", pose: "agacha" })}<path d="M130 152 q7 -12 14 0" stroke="var(--leaf)" stroke-width="2.5" fill="none"/><path d="M124 152 h26 l-3 18 h-20z" fill="var(--leaf)" stroke="var(--ink)"/><rect x="74" y="156" width="10" height="6" fill="#9aa3b5" transform="rotate(20 79 159)"/>${tick(196, 112)}${txt(196, 150, "¡limpio!", "var(--leaf)", 15)}`),
    },
    {
      html: `<h3>Juego: ¿montaña o costa?</h3><p>Lee las pistas: «Hay olas, arena y gaviotas»: <mark>costa</mark>. «Hay nieve en la cima y un río que baja rápido»: <mark>montaña</mark>.</p><p>«Hay un faro y un puerto»: <b>costa</b>. «Hay un valle con vacas y casas de piedra»: <b>montaña</b>. ¿Qué paisaje hay cerca de tu localidad?</p>`,
      svg: svg("A un lado montaña con nieve y al otro costa con faro", `<rect x="10" y="20" width="118" height="150" rx="10" fill="var(--leaf)" opacity=".1"/><rect x="132" y="20" width="118" height="150" rx="10" fill="var(--water)" opacity=".14"/>${monte(69, 140, 100, 90, "#8a7a5a")}${pino(28, 150, 0.6)}${pino(110, 150, 0.6)}<rect x="132" y="120" width="118" height="50" fill="var(--water)" opacity=".5"/>${faro(220, 122)}${barca(164, 136, "var(--red)")}${chip(69, 160, 80, "montaña", "var(--leaf)", 12)}${chip(180, 40, 64, "costa", "var(--water)", 12)}`),
    },
  ],
  figura: {
    titulo: "Montaña y costa",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Paisaje de montaña con cima, ladera y valle; paisaje de costa con playa, acantilado y puerto">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      <rect x="20" y="20" width="290" height="220" rx="14" fill="var(--leaf)" opacity=".08"/><rect x="330" y="20" width="290" height="220" rx="14" fill="var(--water)" opacity=".1"/>
      ${monte(110, 180, 170, 130, "#8a7a5a")}${monte(230, 180, 130, 100, "#7a6b4c")}<rect x="20" y="176" width="290" height="16" fill="var(--leaf)" opacity=".35"/>${pino(40, 186, 0.8)}${pino(290, 186, 0.8)}
      <rect x="330" y="120" width="290" height="72" fill="var(--water)" opacity=".5"/><path d="M330 172 Q420 160 480 176 V192 H330Z" fill="#e8d29a"/>${acantilado(540, 192)}${faro(510, 150)}${barca(400, 150, "var(--red)")}
      ${rot(165, 52, "Montaña", { size: 24, color: "var(--leaf)", w: 800 })}${rot(475, 52, "Costa", { size: 24, color: "var(--water)", w: 800 })}
      ${rot(165, 220, "cima · ladera · valle · río", { size: 15, color: "var(--ink)" })}${rot(475, 220, "playa · acantilado · puerto", { size: 15, color: "var(--ink)" })}
    </svg>`,
  },
  video: V("HvaAZDmwXV0", "paisaje de interior y de costa"),
  ejemplos: [
    { enunciado: "¿Cómo se llama la parte más alta de una montaña?", pasos: ["La montaña tiene laderas a los lados.", "Abajo, entre montañas, está el valle.", "Arriba del todo está la cima."], resultado: "la cima." },
    { enunciado: "Un puente sobre un río, ¿es natural o construido?", pasos: ["El río existe sin que nadie lo haga: es natural.", "El puente lo hicieron las personas.", "Lo que hacen las personas es construido."], resultado: "el puente es un elemento construido." },
    { enunciado: "¿Por qué los tejados de la montaña son muy inclinados?", pasos: ["En la montaña nieva mucho en invierno.", "La nieve pesa si se queda en el tejado.", "Con mucha inclinación, la nieve resbala."], resultado: "para que resbale la nieve." },
  ],
  errores: [
    "Pensar que el paisaje es solo lo bonito: es todo lo que vemos, también carreteras y casas.",
    "Confundir la playa y la costa: la playa es una parte de la costa.",
    "Creer que en lo alto de la montaña hace más calor porque está más cerca del sol: hace más frío.",
    "Dejar basura en la playa o el monte porque «ya lo recogerá alguien».",
  ],
  ejercicios: [
    { q: "¿Qué es un paisaje?", sol: "Todo lo que vemos al mirar un lugar a nuestro alrededor." },
    { q: "Escribe las partes de una montaña.", sol: "Cima, ladera y, abajo, el valle." },
    { q: "¿Qué es un valle?", sol: "La zona baja entre montañas, por donde suele ir un río." },
    { q: "Di dos animales de la montaña.", sol: "Por ejemplo: la cabra montés y el águila." },
    { q: "¿Qué es un acantilado?", sol: "Una roca alta y cortada junto al mar." },
    { q: "Di dos trabajos de la costa.", sol: "Pescador y trabajador de un hotel (turismo)." },
    { q: "¿Para qué sirve el faro?", sol: "Para guiar a los barcos por la noche." },
    { q: "Di dos elementos naturales y dos construidos.", sol: "Naturales: río y montaña. Construidos: puente y casa." },
    { q: "Escribe dos normas para cuidar la playa.", sol: "Recoger la basura y no molestar a los animales." },
    { q: "Dibuja un paisaje de montaña o de costa y escribe sus partes.", sol: "Respuesta libre: cima, ladera, valle o playa, acantilado, puerto." },
  ],
  quiz: [
    { q: "La parte más alta de la montaña es…", o: ["la cima", "el valle", "la playa"], a: 0, e: "Arriba del todo." },
    { q: "Entre dos montañas está…", o: ["el valle", "el acantilado", "el puerto"], a: 0, e: "Zona baja." },
    { q: "Muchas montañas juntas forman…", o: ["una cordillera", "una playa", "una isla"], a: 0, e: "Como los Pirineos." },
    { q: "En la cima de la montaña hace…", o: ["más frío", "más calor", "lo mismo"], a: 0, e: "Por eso hay nieve." },
    { q: "La tierra junto al mar es…", o: ["la costa", "el valle", "la sierra"], a: 0, e: "Con playas y acantilados." },
    { q: "Una roca alta y cortada junto al mar es…", o: ["un acantilado", "una playa", "un río"], a: 0, e: "Rocas altas." },
    { q: "Los barcos atracan en…", o: ["el puerto", "la cima", "el bosque"], a: 0, e: "En la costa." },
    { q: "Un puente es un elemento…", o: ["construido", "natural", "animal"], a: 0, e: "Lo hacen las personas." },
    { q: "Un río es un elemento…", o: ["natural", "construido", "inventado"], a: 0, e: "Existe sin que nadie lo haga." },
    { q: "En la playa, la basura…", o: ["me la llevo", "la entierro en la arena", "la tiro al mar"], a: 0, e: "Así cuidamos el paisaje." },
  ],
  examen: [
    { q: "¿Qué hay en un paisaje de costa?", o: ["Mar, playa y acantilados", "Nieve y pinos en la cima", "Solo rascacielos"], a: 0, e: "Junto al mar." },
    { q: "¿Qué trabajo es típico de la montaña?", o: ["Ganadería", "Pesca en el mar", "Faro"], a: 0, e: "Vacas y ovejas." },
    { q: "Los lados de la montaña son…", o: ["las laderas", "las playas", "los puertos"], a: 0, e: "Entre la cima y el valle." },
    { q: "En el monte no debemos…", o: ["hacer fuego", "seguir los caminos", "recoger la basura"], a: 0, e: "Puede provocar un incendio." },
  ],
  feynman: ["Qué es un paisaje", "Las partes de la montaña y cómo es su paisaje", "Cómo es el paisaje de costa"],
  mapaT: ["EL PAISAJE", [
    ["Montaña", "cima · ladera · valle", "var(--leaf)"],
    ["Costa", "playa · acantilado · puerto", "var(--water)"],
    ["Naturales", "río · mar · rocas", "#8a5a2b"],
    ["Construidos", "casas · puentes · faros", "var(--red)"],
  ]],
  tarjetas: [
    ["¿Qué es un paisaje?", "Todo lo que vemos en un lugar"],
    ["Parte más alta de la montaña", "La cima"],
    ["Zona baja entre montañas", "El valle"],
    ["Muchas montañas juntas", "Una cordillera o sierra"],
    ["Tierra junto al mar", "La costa"],
    ["Roca alta junto al mar", "El acantilado"],
    ["Donde atracan los barcos", "El puerto"],
    ["Un elemento construido", "Un puente o una casa"],
  ],
  familias: [
    "En una excursión, describid juntos el paisaje: ¿qué es natural y qué es construido?",
    "Mirad fotos de vacaciones y clasificadlas en montaña, costa o ciudad.",
    "Buscad en un mapa la montaña y la playa más cercanas a vuestra localidad.",
    "Llevad siempre una bolsa para la basura cuando vayáis al campo o a la playa.",
  ],
  saberes: "Sociedades y territorios: el paisaje, sus elementos naturales y construidos; el paisaje de montaña (cima, ladera, valle) y el de costa (playa, acantilado, puerto); la conservación del entorno",
  ideas: ["Maqueta de plastilina con una montaña y una costa.", "Clasificación de fotos de paisajes en la pizarra digital.", "Caja de arena para modelar cima, ladera y valle y echar agua para ver el río."],
});
