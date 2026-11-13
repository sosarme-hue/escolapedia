// Ciencias de la Naturaleza 4º de Primaria: los aparatos digestivo y respiratorio. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, ciclo, vid, vgen, RD, PROF, nino, tick, equis } = require("./_pri4b");

// Silueta de tronco humano para los dibujos de aparatos.
const torso = (x = 80) => `<path d="M${x - 26} 40 q26 -16 52 0 l10 22 v100 h-72 v-100z" fill="#f5d0b0" fill-opacity=".45" stroke="var(--line)" stroke-width="1.5"/><circle cx="${x}" cy="30" r="14" fill="#f5d0b0" fill-opacity=".45" stroke="var(--line)" stroke-width="1.5"/>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Los aparatos digestivo y respiratorio",
  minutos: 45,
  objetivos: ["Conocer los órganos del aparato digestivo y su función", "Explicar las etapas de la digestión", "Conocer los órganos del aparato respiratorio", "Describir la inspiración, la espiración y el intercambio de gases", "Adoptar hábitos que cuidan ambos aparatos"],
  claves: ["aparato digestivo", "tubo digestivo", "glándulas", "saliva", "estómago", "intestino delgado", "absorción", "aparato respiratorio", "pulmones", "alvéolos", "inspiración", "espiración"],
  pregunta: {
    texto: "Si ahora mismo te comes una galleta y respiras hondo, ¿qué camino siguen la galleta y el aire dentro de tu cuerpo? ¿Se cruzan en algún momento?",
    respuesta: "¡Sí, se cruzan en la <b>faringe</b>, en la garganta! La galleta baja por el <b>esófago</b> hasta el <b>estómago</b> y el <b>intestino</b>, donde se convierte en nutrientes. El aire baja por la <b>tráquea</b> hasta los <b>pulmones</b>. Una tapita llamada <mark>epiglotis</mark> cierra la tráquea al tragar para que la comida no se vaya «por el otro camino».",
  },
  bloques: [
    {
      html: `<h3>El aparato digestivo</h3><p>El <mark>aparato digestivo</mark> se encarga de transformar los alimentos en <b>nutrientes</b>, unas partículas tan pequeñas que pueden pasar a la sangre. Este proceso se llama <b>digestión</b>.</p><p>El aparato digestivo tiene dos partes:</p><p>• El <mark>tubo digestivo</mark>: un tubo muy largo, de unos <b>8 o 9 metros</b> en una persona adulta, por donde pasan los alimentos. Está formado por la <b>boca</b>, la <b>faringe</b>, el <b>esófago</b>, el <b>estómago</b>, el <b>intestino delgado</b>, el <b>intestino grueso</b> y el <b>ano</b>. Para caber en la tripa, el intestino está muy plegado, como una manguera enrollada.</p><p>• Las <mark>glándulas</mark> digestivas: órganos que fabrican <b>jugos</b> que ayudan a deshacer los alimentos. Son las <b>glándulas salivales</b>, que producen la saliva; el <b>hígado</b>, el órgano más grande del interior del cuerpo, que produce la bilis; y el <b>páncreas</b>, que produce el jugo pancreático.</p><p>Los alimentos tardan entre uno y tres días en recorrer todo el tubo.</p>`,
      svg: svg("Órganos del aparato digestivo: boca, esófago, estómago, hígado, intestinos", `${tit("Aparato digestivo")}<g transform="translate(0 12)">${torso(80)}<path d="M80 40 V78" stroke="${COL.naranja}" stroke-width="4"/><path d="M80 78 q24 -4 22 14 q-4 14 -26 8" fill="${COL.rojo}" fill-opacity=".45" stroke="${COL.rojo}" stroke-width="2"/><path d="M52 76 q16 -8 26 4 q-10 12 -26 6z" fill="${COL.marron}" fill-opacity=".6"/><path d="M60 110 q20 -6 40 0 q-20 6 -40 10 q20 6 40 2 q-20 8 -40 10" stroke="${COL.sol}" stroke-width="5" fill="none"/><path d="M54 106 V146 H106 V106" stroke="${COL.morado}" stroke-width="5" fill="none"/>${filas([["boca", "", COL.azul], ["esófago", "", COL.naranja], ["estómago", "", COL.rojo], ["hígado", "", COL.marron], ["int. delgado", "", COL.sol], ["int. grueso", "", COL.morado]], 50, 21, { x: 150, wa: 96, wb: 4 })}</g>`),
      video: vid("H19lcJcX7FE"),
    },
    {
      html: `<h3>La digestión en la boca</h3><p>La digestión empieza en la <b>boca</b>. Allí ocurren dos cosas a la vez:</p><p>• Los <b>dientes</b> trocean y trituran los alimentos. Cada tipo de diente tiene su tarea: los <b>incisivos</b>, delante, cortan; los <b>caninos</b>, puntiagudos, desgarran; y los <b>premolares</b> y <b>molares</b>, al fondo, trituran como si fueran una piedra de molino.</p><p>• La <b>saliva</b>, que fabrican las glándulas salivales, moja los alimentos y empieza a deshacer algunos, como el almidón del pan. Por eso, si masticas un trozo de pan durante un rato, notas que empieza a saber dulce.</p><p>La <b>lengua</b> mueve la comida, la mezcla con la saliva y forma una bola blanda llamada <mark>bolo alimenticio</mark>. Después la empuja hacia la garganta para tragarla.</p><p>Por eso es tan importante <b>masticar bien</b>: cuanto más pequeños son los trozos, más fácil será el trabajo del resto del aparato digestivo. Recuerda que a tu edad estás cambiando los dientes de leche por los <b>dientes definitivos</b>, que tendrás que cuidar toda la vida.</p>`,
      svg: svg("Los tipos de dientes y la saliva forman el bolo alimenticio", `${tit("En la boca")}${fichas([["Incisivos", "cortan", COL.azul], ["Caninos", "desgarran", COL.rojo], ["Molares", "trituran", COL.morado]], 3, 36, 56)}${cj(30, 112, 90, 40, "saliva", COL.agua)}${fl(124, 132, 148, 132, "var(--muted)", 2)}<circle cx="190" cy="132" r="22" fill="${COL.naranja}" fill-opacity=".35" stroke="${COL.naranja}" stroke-width="2"/>${et(190, 170, "bolo alimenticio", 110, { size: 11, color: COL.naranja })}`),
    },
    {
      html: `<h3>Del esófago al intestino delgado</h3><p>Al tragar, el bolo pasa por la <b>faringe</b> y baja por el <mark>esófago</mark>, un tubo que lo empuja con movimientos ondulados de sus músculos, como cuando aprietas un tubo de pasta de dientes. ¡Por eso podrías tragar incluso haciendo el pino!</p><p>El bolo llega al <mark>estómago</mark>, una bolsa con forma de judía y paredes muy musculosas. Allí se mezcla durante unas horas con el <b>jugo gástrico</b>, que es muy ácido. El estómago se mueve y amasa la comida hasta convertirla en una papilla llamada <b>quimo</b>.</p><p>Después, el quimo pasa al <mark>intestino delgado</mark>, un tubo estrecho de unos 6 o 7 metros. Allí recibe la <b>bilis</b> del hígado y el <b>jugo pancreático</b>, que terminan de deshacer los alimentos. La papilla se convierte en un líquido llamado <b>quilo</b>, lleno de nutrientes.</p><p>Las paredes del intestino delgado están cubiertas de millones de pliegues diminutos, las <b>vellosidades intestinales</b>, que lo hacen parecer de terciopelo.</p>`,
      svg: svg("Recorrido de los alimentos: bolo, quimo y quilo", `${tit("Los alimentos se transforman")}${columna([["boca: bolo alimenticio", COL.azul], ["esófago: lo empuja", COL.naranja], ["estómago: quimo", COL.rojo], ["intestino delgado: quilo", COL.sol]], 130, 200, 36, 26, 10)}`),
    },
    {
      html: `<h3>Absorción y eliminación</h3><p>En el intestino delgado ocurre algo fundamental: la <mark>absorción</mark>. Los nutrientes atraviesan las paredes de las vellosidades y <b>pasan a la sangre</b>, que los repartirá por todo el cuerpo. Las vellosidades sirven para que haya mucha superficie: si pudieras extender todo el intestino delgado con sus pliegues, ¡ocuparía unos 30 metros cuadrados, como el suelo de un aula pequeña!</p><p>Lo que el cuerpo no puede aprovechar continúa hasta el <mark>intestino grueso</mark>, más ancho y más corto (alrededor de un metro y medio). Allí se absorbe sobre todo el <b>agua</b>, y los restos se van secando y formando las <b>heces</b>. En el intestino grueso viven billones de <b>bacterias beneficiosas</b>, la <b>flora intestinal</b>, que nos ayudan a digerir y nos protegen.</p><p>Por último, las heces salen del cuerpo por el <b>ano</b>. Esto se llama <b>egestión</b>.</p><p>La <b>fibra</b>, que está en las frutas, las verduras, las legumbres y los cereales integrales, ayuda a que los restos avancen bien por el intestino. Por eso, comer fibra y beber agua evita el estreñimiento.</p>`,
      svg: svg("Absorción de nutrientes en las vellosidades y formación de heces en el intestino grueso", `${tit("Absorción")}<path d="M20 120 ${[...Array(9)].map((_, i) => `q8 -40 16 0`).join(" ")}" fill="${COL.sol}" fill-opacity=".3" stroke="${COL.sol}" stroke-width="2"/><path d="M20 140 H170" stroke="${COL.rojo}" stroke-width="6" stroke-opacity=".6"/>${[44, 76, 108, 140].map((x) => fl(x, 108, x, 134, COL.rojo, 2)).join("")}${et(96, 160, "los nutrientes pasan a la sangre", 160, { size: 11, color: COL.rojo })}${cj2(182, 64, 70, 70, "grueso", "agua y heces", COL.morado)}${tx(96, 58, "vellosidades", 120, { weight: 700, color: COL.sol })}`),
    },
    {
      html: `<h3>El aparato respiratorio</h3><p>El <mark>aparato respiratorio</mark> se encarga de tomar el <b>oxígeno</b> del aire, que todas las células necesitan, y de expulsar el <b>dióxido de carbono</b>, un gas de desecho. Tiene dos partes:</p><p>• Las <b>vías respiratorias</b>, por donde pasa el aire: las <b>fosas nasales</b>, la <b>faringe</b>, la <b>laringe</b> (donde están las cuerdas vocales que nos permiten hablar), la <mark>tráquea</mark>, un tubo reforzado con anillos de cartílago, los dos <b>bronquios</b>, que entran uno en cada pulmón, y los <b>bronquiolos</b>, cada vez más finos, como las ramas de un árbol.</p><p>• Los <mark>pulmones</mark>: dos órganos esponjosos y rosados que ocupan casi todo el pecho, protegidos por las costillas. El izquierdo es un poco más pequeño para dejar sitio al corazón. Al final de los bronquiolos están los <mark>alvéolos</mark>, millones de saquitos diminutos llenos de aire, rodeados de vasos sanguíneos muy finos.</p><p>Debajo de los pulmones está el <b>diafragma</b>, un músculo con forma de cúpula que nos ayuda a respirar.</p>`,
      svg: svg("Órganos del aparato respiratorio: fosas nasales, tráquea, bronquios, pulmones y diafragma", `${tit("Aparato respiratorio")}<g transform="translate(0 12)">${torso(80)}<path d="M80 40 V82 M80 82 L64 94 M80 82 L96 94" stroke="${COL.azul}" stroke-width="4" fill="none"/><path d="M76 84 q-34 -2 -30 40 q2 22 28 18z" fill="${COL.rojo}" fill-opacity=".35" stroke="${COL.rojo}" stroke-width="2"/><path d="M84 84 q30 -2 28 40 q-2 22 -26 18z" fill="${COL.rojo}" fill-opacity=".35" stroke="${COL.rojo}" stroke-width="2"/><path d="M44 150 q36 -16 72 0" stroke="${COL.morado}" stroke-width="3" fill="none"/>${filas([["fosas nasales", "", COL.verde], ["tráquea", "", COL.azul], ["bronquios", "", COL.naranja], ["pulmones", "", COL.rojo], ["diafragma", "", COL.morado]], 54, 24, { x: 150, wa: 96, wb: 4 })}</g>`),
      video: vid("JaISgsXU_a4"),
    },
    {
      html: `<h3>Inspiración y espiración</h3><p>Respirar tiene dos movimientos, que repetimos unas <b>15 a 20 veces por minuto</b> sin pensar en ello, ¡incluso dormidos!</p><p>• En la <mark>inspiración</mark> el aire <b>entra</b>. El diafragma baja y los músculos de entre las costillas levantan el pecho. Los pulmones se hinchan como globos y el aire entra por la nariz.</p><p>• En la <mark>espiración</mark> el aire <b>sale</b>. El diafragma sube, las costillas bajan, los pulmones se encogen y empujan el aire hacia fuera.</p><p>Pon una mano en tu pecho y otra en tu tripa y respira hondo: notarás cómo se mueven.</p><p>Conviene respirar <b>por la nariz</b>, porque los pelillos y la mucosidad de las fosas nasales <b>filtran</b> el polvo y los microbios, y además el aire se <b>calienta</b> y se humedece antes de llegar a los pulmones.</p><p>Cuando haces ejercicio, tus músculos necesitan más oxígeno y por eso respiras más deprisa. Cuando estás tranquilo o dormido, respiras más despacio. Los estornudos y la tos son formas que tiene el cuerpo de expulsar de golpe lo que molesta en las vías respiratorias.</p>`,
      svg: svg("Inspiración: entra aire y baja el diafragma. Espiración: sale aire y sube el diafragma", `${tit("Entra y sale el aire")}${[[66, "INSPIRACIÓN", "entra el aire", COL.azul, 1.15, 156], [194, "ESPIRACIÓN", "sale el aire", COL.naranja, 0.85, 140]].map(([x, a, b, c, s, yd]) => `${et(x, 46, a, 110, { size: 12, color: c })}<ellipse cx="${x - 16}" cy="104" rx="${14 * s}" ry="${28 * s}" fill="${COL.rojo}" fill-opacity=".3" stroke="${COL.rojo}" stroke-width="2"/><ellipse cx="${x + 16}" cy="104" rx="${14 * s}" ry="${28 * s}" fill="${COL.rojo}" fill-opacity=".3" stroke="${COL.rojo}" stroke-width="2"/><path d="M${x - 40} ${yd - 10} q40 ${yd > 150 ? 6 : -14} 80 0" stroke="${COL.morado}" stroke-width="3" fill="none"/>${tx(x, 172, b, 110, { weight: 700 })}`).join("")}${fl(66, 74, 66, 56, COL.azul, 2)}${fl(194, 56, 194, 74, COL.naranja, 2)}`),
    },
    {
      html: `<h3>El intercambio de gases</h3><p>¿Qué pasa con el aire cuando llega a los pulmones? En los <b>alvéolos</b> ocurre el <mark>intercambio de gases</mark>:</p><p>• El <b>oxígeno</b> del aire atraviesa la finísima pared de los alvéolos y <b>pasa a la sangre</b>.</p><p>• El <b>dióxido de carbono</b> que traía la sangre desde las células <b>pasa a los alvéolos</b> y sale al exterior con la espiración.</p><p>Después, la sangre cargada de oxígeno viaja al corazón, que la envía a todo el cuerpo. Así cada célula recibe oxígeno para obtener energía de los nutrientes, como si «quemara» el alimento poco a poco. Al hacerlo, produce dióxido de carbono, que la sangre recoge y lleva de vuelta a los pulmones.</p><p>Por eso el aire que <b>expulsamos</b> tiene menos oxígeno y más dióxido de carbono que el que respiramos. También sale más caliente y con <b>vapor de agua</b>: echa el aliento sobre un espejo frío y verás cómo se empaña.</p><p>Tenemos unos 300 millones de alvéolos. Si se extendieran, ocuparían unos 70 metros cuadrados, como el suelo de un piso pequeño.</p>`,
      svg: svg("En el alvéolo el oxígeno pasa a la sangre y el dióxido de carbono sale", `${tit("En el alvéolo")}<circle cx="96" cy="100" r="48" fill="${COL.azul}" fill-opacity=".12" stroke="${COL.azul}" stroke-width="2.5"/><path d="M150 46 q20 54 0 108" stroke="${COL.rojo}" stroke-width="12" stroke-opacity=".5" fill="none"/>${fl(118, 82, 152, 82, COL.azul, 2.5)}${fl(156, 120, 122, 120, COL.gris, 2.5)}${et(96, 96, "aire", 60, { size: 13, color: COL.azul })}${tx(204, 78, "oxígeno → sangre", 90, { weight: 700, color: COL.azul })}${tx(204, 124, "CO₂ → fuera", 90, { weight: 700, color: COL.gris })}${tx(204, 158, "capilar con sangre", 90, { color: COL.rojo })}`),
    },
    {
      html: `<h3>Cuidar los dos aparatos</h3><p>Algunos hábitos sencillos ayudan a que digestión y respiración funcionen bien:</p><p><b>Para el aparato digestivo:</b></p><p>• Comer <b>despacio</b> y masticar bien.<br>• Tomar <b>fibra</b> y beber agua.<br>• <b>Cepillarse los dientes</b> después de cada comida y visitar al dentista.<br>• Lavarse las manos antes de comer y lavar frutas y verduras.<br>• No bañarse en la piscina justo después de una comida muy abundante.</p><p><b>Para el aparato respiratorio:</b></p><p>• Respirar por la <b>nariz</b>.<br>• Hacer <b>ejercicio</b> al aire libre: los pulmones se hacen más eficaces.<br>• Ventilar las habitaciones cada día.<br>• Abrigarse cuando hace frío y taparse la boca con el <b>codo</b> al toser o estornudar.<br>• No fumar nunca y evitar los lugares con humo de tabaco: el humo daña los alvéolos para siempre.</p><p>Algunos problemas frecuentes son el <b>catarro</b>, el <b>asma</b>, que estrecha los bronquios, la <b>gastroenteritis</b>, que provoca vómitos y diarrea, o la <b>caries</b>.</p>`,
      svg: svg("Hábitos para cuidar los aparatos digestivo y respiratorio", `${tit("Hábitos saludables")}${cj(10, 34, 115, 24, "DIGESTIVO", COL.naranja)}${cj(135, 34, 115, 24, "RESPIRATORIO", COL.azul)}${["masticar bien", "fibra y agua", "cepillar dientes", "manos limpias"].map((s, i) => `${tick(22, 78 + i * 24)}${tx(74, 82 + i * 24, s, 86)}`).join("")}${["respirar por la nariz", "hacer ejercicio", "ventilar", "nada de humo"].map((s, i) => `${tick(146, 78 + i * 24)}${tx(198, 82 + i * 24, s, 90)}`).join("")}`),
    },
    {
      html: `<h3>Experimenta: un pulmón en una botella</h3><p>Puedes construir un modelo que explica cómo funcionan los pulmones y el diafragma. Necesitas una <b>botella de plástico</b>, dos <b>globos</b>, una pajita, plastilina y unas tijeras (pide ayuda a un adulto para cortar).</p><p>1. Corta la botella por la mitad y quédate con la parte de arriba.<br>2. Mete la pajita en un globo pequeño y sujétalo con una goma: será el <b>pulmón</b>.<br>3. Pasa la pajita por el tapón y sella el agujero con plastilina: la pajita será la <b>tráquea</b>.<br>4. Corta el otro globo, haz un nudo en su cuello y estíralo para tapar la parte abierta de la botella: será el <b>diafragma</b>.</p><p>Ahora <b>tira suavemente del nudo</b> hacia abajo: el globo de dentro se hincha (<b>inspiración</b>). Suéltalo: el globo se deshincha (<b>espiración</b>).</p><p>¿Por qué ocurre? Al bajar el diafragma, queda más espacio dentro de la botella y el aire de fuera entra para ocuparlo. Exactamente lo mismo pasa en tu pecho cada vez que respiras.</p>`,
      svg: svg("Modelo de pulmón con una botella, una pajita y dos globos", `${tit("Pulmón en una botella")}<path d="M110 40 h40 v14 q30 10 30 40 v56 h-100 v-56 q0 -30 30 -40z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M130 30 V92" stroke="${COL.azul}" stroke-width="4"/><circle cx="130" cy="108" r="18" fill="${COL.rojo}" fill-opacity=".5"/><path d="M80 150 q50 18 100 0" stroke="${COL.morado}" stroke-width="4" fill="none"/><path d="M130 158 v10" stroke="${COL.morado}" stroke-width="3"/>${tx(42, 64, "tráquea", 70, { weight: 700, color: COL.azul })}${tx(42, 110, "pulmón", 70, { weight: 700, color: COL.rojo })}${tx(218, 160, "diafragma", 76, { weight: 700, color: COL.morado })}${fl(62, 60, 124, 46, "var(--muted)", 1.5)}${fl(66, 108, 110, 108, "var(--muted)", 1.5)}`),
    },
  ],
  figura: {
    titulo: "Digestión y respiración en ocho ideas",
    svg: rejilla([
      ["Tubo digestivo", "boca → ano", COL.naranja],
      ["Glándulas", "salivales, hígado, páncreas", COL.marron],
      ["Boca", "dientes y saliva: bolo", COL.azul],
      ["Estómago", "jugo gástrico: quimo", COL.rojo],
      ["Intestino", "absorción de nutrientes", COL.sol],
      ["Vías", "nariz, tráquea, bronquios", COL.verde],
      ["Pulmones", "alvéolos", COL.agua],
      ["Intercambio", "entra O₂, sale CO₂", COL.morado],
    ], 4, 86, "Resumen de los aparatos digestivo y respiratorio"),
  },
  video: vgen("LNzUhQLig6o", "aparato digestivo para niños"),
  ejemplos: [
    { enunciado: "Ordena el recorrido de un trozo de manzana: intestino delgado, boca, estómago, esófago, intestino grueso.",
      pasos: ["Empieza en la boca, donde se mastica.", "Baja por el esófago hasta el estómago.", "Pasa al intestino delgado, donde se absorben los nutrientes.", "Los restos van al intestino grueso."],
      resultado: "Boca → esófago → estómago → intestino delgado → intestino grueso." },
    { enunciado: "Si respiras 16 veces por minuto, ¿cuántas veces respiras en una hora?",
      pasos: ["Una hora tiene 60 minutos.", "16 × 60 = 960."],
      resultado: "Unas 960 veces cada hora." },
    { enunciado: "¿Por qué el espejo se empaña al echarle el aliento?",
      pasos: ["El aire que espiramos sale caliente y con vapor de agua.", "Al tocar el espejo frío, el vapor se enfría y se convierte en gotitas."],
      resultado: "Porque el aire espirado lleva vapor de agua." },
  ],
  errores: [
    "Pensar que la digestión ocurre solo en el estómago: empieza en la boca y termina en el intestino.",
    "Creer que los nutrientes se absorben en el estómago: se absorben sobre todo en el intestino delgado.",
    "Confundir esófago (comida) con tráquea (aire).",
    "Decir que en la espiración sale solo dióxido de carbono: sale aire con menos oxígeno y más dióxido de carbono.",
    "Pensar que el hígado es parte del tubo digestivo: es una glándula.",
  ],
  ejercicios: [
    { q: "¿Para qué sirve el aparato digestivo?", sol: "Para transformar los alimentos en nutrientes que pasan a la sangre." },
    { q: "Escribe las partes del tubo digestivo en orden.", sol: "Boca, faringe, esófago, estómago, intestino delgado, intestino grueso y ano." },
    { q: "Nombra tres glándulas digestivas.", sol: "Glándulas salivales, hígado y páncreas." },
    { q: "¿Qué hacen los incisivos, los caninos y los molares?", sol: "Los incisivos cortan, los caninos desgarran y los molares trituran." },
    { q: "¿Qué es el bolo alimenticio? ¿Y el quimo?", sol: "El bolo es la bola de comida masticada con saliva. El quimo es la papilla que se forma en el estómago." },
    { q: "¿Dónde se absorben los nutrientes y adónde van?", sol: "En el intestino delgado; pasan a la sangre." },
    { q: "Escribe el camino del aire desde la nariz hasta los alvéolos.", sol: "Fosas nasales, faringe, laringe, tráquea, bronquios, bronquiolos y alvéolos." },
    { q: "Explica qué pasa en la inspiración.", sol: "El diafragma baja, el pecho se ensancha, los pulmones se hinchan y entra el aire." },
    { q: "¿Qué gases se intercambian en los alvéolos?", sol: "El oxígeno pasa a la sangre y el dióxido de carbono sale de ella hacia los alvéolos." },
    { q: "Escribe dos hábitos para cada aparato.", sol: "Digestivo: masticar bien y cepillarse los dientes. Respiratorio: respirar por la nariz y no fumar." },
  ],
  quiz: [
    { q: "La digestión empieza en…", o: ["el estómago", "la boca", "el intestino"], a: 1, e: "En la boca." },
    { q: "Los dientes que trituran son los…", o: ["molares", "incisivos", "caninos"], a: 0, e: "Molares." },
    { q: "La papilla del estómago se llama…", o: ["bolo", "quimo", "heces"], a: 1, e: "Quimo." },
    { q: "La bilis la fabrica el…", o: ["páncreas", "hígado", "esófago"], a: 1, e: "El hígado." },
    { q: "Los nutrientes pasan a la sangre en el…", o: ["intestino grueso", "esófago", "intestino delgado"], a: 2, e: "Intestino delgado." },
    { q: "En el intestino grueso se absorbe sobre todo…", o: ["agua", "proteínas", "aire"], a: 0, e: "Agua." },
    { q: "El tubo que lleva el aire a los bronquios es la…", o: ["faringe", "tráquea", "laringe"], a: 1, e: "La tráquea." },
    { q: "Los saquitos de los pulmones son los…", o: ["alvéolos", "bronquios", "vellosidades"], a: 0, e: "Alvéolos." },
    { q: "Cuando sale el aire hablamos de…", o: ["inspiración", "espiración", "absorción"], a: 1, e: "Espiración." },
    { q: "El músculo bajo los pulmones es el…", o: ["diafragma", "corazón", "estómago"], a: 0, e: "Diafragma." },
  ],
  examen: [
    { q: "El hígado es…", o: ["una glándula", "parte del tubo", "un pulmón"], a: 0, e: "Una glándula digestiva." },
    { q: "La epiglotis evita que la comida vaya a la…", o: ["tráquea", "boca", "nariz"], a: 0, e: "A la tráquea." },
    { q: "Al hacer ejercicio respiramos…", o: ["más despacio", "más deprisa", "igual"], a: 1, e: "Más deprisa." },
    { q: "La fibra ayuda a…", o: ["respirar", "que los restos avancen por el intestino", "ver mejor"], a: 1, e: "Evita el estreñimiento." },
  ],
  feynman: ["Qué recorrido siguen los alimentos y en qué se transforman", "Dónde se absorben los nutrientes", "Cómo respiramos y qué pasa en los alvéolos"],
  mapa: mapa("DIGESTIÓN Y RESPIRACIÓN", "var(--pri)", [
    ["Tubo digestivo", "boca → estómago → intestino", COL.naranja],
    ["Digestión", "bolo · quimo · absorción", COL.rojo],
    ["Respiratorio", "tráquea · pulmones", COL.azul],
    ["Respiración", "inspirar · espirar · gases", COL.morado],
  ], 250),
  tarjetas: [
    ["Digestión", "Transformación de los alimentos en nutrientes."],
    ["Bolo alimenticio", "Bola de comida masticada y mezclada con saliva."],
    ["Estómago", "Bolsa donde la comida se mezcla con jugo gástrico."],
    ["Absorción", "Paso de los nutrientes del intestino a la sangre."],
    ["Tráquea", "Tubo con anillos que lleva el aire a los bronquios."],
    ["Alvéolos", "Saquitos de los pulmones donde se intercambian gases."],
    ["Inspiración", "Entrada de aire en los pulmones."],
    ["Diafragma", "Músculo bajo los pulmones que ayuda a respirar."],
  ],
  familias: ["Construid juntos el pulmón en una botella y probadlo.", "Contad cuántas veces respiráis en un minuto en reposo y después de saltar.", "Masticad un trozo de pan durante un minuto y notad cómo se vuelve dulce.", "Repasad el cepillado de dientes después de cada comida durante una semana."],
  profesores: PROF("Ciencias de la Naturaleza: el aparato digestivo, órganos y proceso de la digestión; el aparato respiratorio, órganos, ventilación e intercambio de gases; hábitos saludables", ["Construcción del modelo de pulmón con botella y globos.", "Medir con una cuerda una longitud de 8 metros en el patio para visualizar el tubo digestivo.", "Contar las respiraciones por minuto en reposo y tras el ejercicio, y hacer un gráfico."]),
  fuentes: [RD, wiki("Aparato digestivo", "Aparato_digestivo"), wiki("Aparato respiratorio", "Aparato_respiratorio"), wiki("Alvéolo pulmonar", "Alvéolo_pulmonar")],
  revisado: REV,
};
