// Geografía e Historia 1º ESO. Dibujos propios en SVG.
const { tema, H, F, tabla } = require("./_eso1d");
const V = require("./_eso1d-videos");

// Ciclo del agua.
const ciclo = `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo del agua: evaporación, condensación, precipitación y escorrentía">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <defs><marker id="cicloF" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>
  <circle cx="226" cy="30" r="16" fill="var(--sun)"/>
  <path d="M0 140 H 120 C 150 140 160 120 190 120 L 260 80 V 180 H 0 Z" fill="var(--leaf)" opacity=".8"/>
  <rect x="0" y="140" width="120" height="40" fill="var(--pen)" opacity=".7"/>
  <ellipse cx="130" cy="34" rx="34" ry="14" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
  <g stroke="var(--ink)" stroke-width="2" fill="none">
    <path d="M60 134 C 60 90 80 50 100 40" marker-end="url(#cicloF)" stroke-dasharray="4 3"/>
    <path d="M160 46 L 196 92" marker-end="url(#cicloF)"/>
    <path d="M200 116 C 170 136 150 142 126 144" marker-end="url(#cicloF)"/>
  </g>
  <g ${F} font-size="11" font-weight="700" fill="var(--ink)">
    <text x="16" y="84">evaporación</text><text x="130" y="38" text-anchor="middle">nubes</text><text x="96" y="66">condensación</text>
    <text x="186" y="66">precipitación</text><text x="140" y="168" fill="#fff">escorrentía</text><text x="18" y="164" fill="#fff">mar</text>
  </g>
</svg>`;

module.exports = tema({
  materia: "Geografía e Historia",
  titulo: "Las aguas: ríos, mares y océanos",
  objetivos: ["Explicar qué es la hidrosfera y cómo se reparte el agua del planeta", "Describir el ciclo del agua", "Diferenciar océanos y mares y conocer los movimientos del agua marina", "Describir las partes y características de un río y las aguas continentales"],
  claves: ["hidrosfera", "ciclo del agua", "océano", "mar", "olas", "mareas", "corrientes", "río", "caudal", "cuenca", "afluente", "lago", "acuífero", "glaciar"],
  pregunta: [
    "Si miras la Tierra desde el espacio, casi tres cuartas partes son azules. Y sin embargo, en muchos lugares del mundo falta agua para beber. ¿Cómo es posible?",
    "Porque casi toda el agua del planeta es <mark>salada</mark>: el 97 % está en los mares y océanos. Del pequeño 3 % de agua dulce, la mayor parte está congelada en los polos y los glaciares, o escondida bajo tierra. El agua dulce que podemos usar fácilmente, la de ríos y lagos, es menos del 1 % del total. Por eso el agua es un recurso valioso que hay que cuidar.",
  ],
  bloques: [
    ["La hidrosfera", `<p>La <mark>hidrosfera</mark> es el conjunto de las aguas de la Tierra, en cualquiera de sus estados: líquida (mares, ríos, lagos, aguas subterráneas), sólida (hielo de los polos y glaciares) y gaseosa (vapor de agua del aire). Cubre alrededor del <b>71 %</b> de la superficie del planeta.</p><p>El agua no está repartida por igual. La inmensa mayoría es <b>agua salada</b>, en mares y océanos. El <b>agua dulce</b> es solo un 3 %, y de ella unas dos terceras partes están congeladas. El resto es sobre todo agua subterránea, y solo una mínima parte forma los ríos, lagos y la humedad del aire. El agua es imprescindible para la vida, la agricultura, la industria y la energía.</p>`,
      H.barras("Reparto del agua de la Tierra", [["Salada", 97, "var(--pen)", "97 %"], ["Hielo", 2, "var(--muted)", "≈ 2 %"], ["Subterránea", 0.8, "var(--bac)", "< 1 %"], ["Ríos y lagos", 0.3, "var(--leaf)", "mínima"]], 97)],
    ["El ciclo del agua", `<p>El agua de la Tierra está siempre en movimiento, pasando de un lugar a otro y cambiando de estado. Este recorrido sin fin se llama <mark>ciclo del agua</mark> y lo mueve la energía del Sol.</p><p>El calor del Sol <b>evapora</b> el agua de mares, ríos y plantas, que sube como vapor. Al ascender se enfría y se <b>condensa</b> en gotitas que forman las nubes. Cuando las gotas pesan, caen como <b>precipitación</b>: lluvia, nieve o granizo. Parte del agua corre por la superficie (<b>escorrentía</b>) y llega a los ríos y al mar; otra parte se <b>infiltra</b> en el suelo y forma acuíferos. Así, el agua que bebes hoy pudo estar en el océano hace unos meses.</p>`,
      ciclo],
    ["Océanos y mares", `<p>Los <mark>océanos</mark> son las grandes masas de agua salada que separan los continentes. Hay cinco: el <b>Pacífico</b>, el mayor y más profundo; el <b>Atlántico</b>, que baña las costas de España; el <b>Índico</b>; el <b>Glacial Ártico</b>, en el polo norte; y el <b>Glacial Antártico</b>, alrededor de la Antártida.</p><p>Los <b>mares</b> son masas de agua salada más pequeñas y menos profundas, situadas junto a las costas o rodeadas en parte por tierra. Por ejemplo, el <b>mar Mediterráneo</b>, casi cerrado y comunicado con el Atlántico por el estrecho de Gibraltar, o el mar Cantábrico. El agua del mar es salada porque los ríos arrastran sales minerales que se acumulan durante millones de años.</p>`,
      H.figCols("Los cinco océanos", [["Pacífico", ["el mayor", "y más profundo"], "var(--bac)"], ["Atlántico", ["baña España", "segundo mayor"], "var(--pen)"], ["Índico", ["entre África,", "Asia y Oceanía"], "var(--leaf)"], ["Glaciales", ["Ártico (norte)", "Antártico (sur)"], "var(--muted)"]])],
    ["Los movimientos del mar", `<p>El agua del mar nunca está quieta. Las <mark>olas</mark> son ondulaciones de la superficie provocadas por el <b>viento</b>; cuanto más fuerte y largo sopla, más grandes son. Al llegar a la costa rompen y desgastan las rocas.</p><p>Las <b>mareas</b> son subidas y bajadas del nivel del mar que se repiten dos veces al día. Las provoca la atracción de la <b>Luna</b> (y, en menor medida, del Sol). Cuando el agua sube se llama <b>pleamar</b> y cuando baja, <b>bajamar</b>. Las <b>corrientes marinas</b> son como ríos dentro del océano que trasladan agua cálida o fría a grandes distancias; la <b>corriente del Golfo</b> lleva agua templada a Europa y suaviza su clima.</p>`,
      H.filas("Movimientos del agua del mar", [["Olas", "las provoca el viento", "var(--pen)"], ["Mareas", "las provoca la Luna", "var(--muted)"], ["Corrientes", "ríos dentro del océano", "var(--bac)"]])],
    ["Los ríos y sus partes", `<p>Un <mark>río</mark> es una corriente continua de agua que fluye por un cauce desde las tierras altas hasta el mar, un lago u otro río. El lugar donde nace es el <b>nacimiento</b> y el lugar donde termina, la <b>desembocadura</b>.</p><p>En su recorrido se distinguen tres tramos. En el <b>curso alto</b>, cerca de las montañas, hay mucha pendiente; el agua baja rápida y erosiona, formando valles estrechos en forma de V. En el <b>curso medio</b> la pendiente es menor y el río <b>transporta</b> materiales y traza curvas llamadas meandros. En el <b>curso bajo</b>, casi llano, el agua va lenta y <b>deposita</b> sedimentos. La desembocadura puede ser un <b>delta</b>, con forma de abanico (como el del Ebro), o un <b>estuario</b>, donde el mar entra en el río.</p>`,
      H.flujo("Curso de un río", ["nacimiento", "alto:|erosiona", "medio:|transporta", "bajo:|deposita", "desembo-|cadura"], "var(--pen)"), V.gh4b],
    ["Caudal, afluentes y cuencas", `<p>El <mark>caudal</mark> es la cantidad de agua que lleva un río en un momento; se mide en metros cúbicos por segundo (m³/s). El <b>régimen</b> es cómo varía el caudal a lo largo del año: en las <b>crecidas</b> lleva mucha agua (por lluvias o deshielo) y en el <b>estiaje</b> muy poca (en verano, en España).</p><p>Los ríos que desembocan en otro río más grande se llaman <b>afluentes</b>; el Pisuerga, por ejemplo, es afluente del Duero. El territorio cuyas aguas van a parar a un mismo río es su <b>cuenca hidrográfica</b>. Y el conjunto de cuencas que vierten al mismo mar forma una <b>vertiente</b>: en España hay vertiente atlántica, cantábrica y mediterránea.</p>`,
      tabla(["Concepto", "Qué es", "Ejemplo"], [["Caudal", "agua que lleva el río (m³/s)", "el Ebro, unos 400 m³/s"], ["Afluente", "río que desemboca en otro", "el Pisuerga → Duero"], ["Cuenca", "territorio que vierte a un río", "cuenca del Tajo"], ["Vertiente", "cuencas que van al mismo mar", "mediterránea"]])],
    ["Lagos, acuíferos y glaciares", `<p>No toda el agua dulce corre por ríos. Los <mark>lagos</mark> son masas de agua acumuladas en zonas hundidas del terreno; el mayor de España es el de <b>Sanabria</b>, de origen glaciar. Los <b>embalses</b> o pantanos son lagos artificiales que se crean con una presa para guardar agua y producir electricidad.</p><p>Las <b>aguas subterráneas</b> se acumulan bajo tierra en rocas porosas llamadas <b>acuíferos</b>; se aprovechan con pozos y salen de forma natural en los <b>manantiales</b>. Los <b>glaciares</b> son grandes masas de hielo que se forman en montañas altas y zonas polares; al fundirse alimentan a muchos ríos. Por el calentamiento global, la mayoría de glaciares, incluidos los de los Pirineos, están retrocediendo.</p>`,
      H.rueda("Aguas continentales", "AGUA|DULCE", [["ríos", "var(--pen)"], ["lagos", "var(--bac)"], ["embalses", "var(--leaf)"], ["acuíferos", "var(--sun)"], ["glaciares", "var(--muted)"]], "var(--pen)")],
    ["Cuidar el agua", `<p>El agua dulce es un <mark>recurso limitado</mark>. La usamos en las casas, pero sobre todo en la <b>agricultura</b>, que en España consume alrededor del 80 % del agua. Los problemas principales son la <b>escasez</b> en épocas de sequía, la <b>contaminación</b> por vertidos, plásticos o fertilizantes, y la <b>sobreexplotación</b> de los acuíferos.</p><p>Para protegerla se depuran las aguas residuales, se mejoran los sistemas de riego (el riego por goteo ahorra mucho) y se protegen ríos y humedales. En casa también se puede ayudar: ducharse en vez de bañarse, cerrar el grifo al lavarse los dientes y no tirar aceites ni toallitas por el váter.</p>`,
      H.dos("El agua: problemas y soluciones", ["Problemas", ["sequías", "contaminación", "sobreexplotación", "plásticos"], "var(--red)"], ["Soluciones", ["depurar", "riego por goteo", "ahorrar en casa", "proteger ríos"], "var(--leaf)"])],
  ],
  ejemplos: [
    ["Un río de montaña tiene aguas rápidas y un valle estrecho en forma de V. ¿En qué tramo estamos?", ["Mucha pendiente y agua rápida son propias del principio del río.", "El valle en V se forma por la erosión intensa."], "En el curso alto."],
    ["¿Por qué el Ebro forma un delta y no un estuario?", ["En un delta el río deposita muchos sedimentos en la desembocadura.", "El Mediterráneo tiene mareas muy débiles que no se los llevan."], "Porque deposita muchos sedimentos y las mareas débiles no los arrastran."],
    ["En verano el Guadalquivir lleva poca agua y en invierno, mucha. ¿Cómo se llaman esos momentos?", ["Poca agua: estiaje.", "Mucha agua: crecida."], "Estiaje en verano y crecidas en invierno; es su régimen."],
  ],
  errores: [
    "Pensar que hay mucha agua dulce disponible: es menos del 1 % del total.",
    "Confundir mar y océano: el océano es mucho mayor y separa continentes.",
    "Creer que las olas las provoca la Luna: las provoca el viento; la Luna provoca las mareas.",
    "Confundir afluente (río que desemboca en otro) con cuenca (territorio).",
    "Pensar que el agua subterránea es un río bajo tierra: suele estar empapando rocas porosas (acuíferos).",
  ],
  ejercicios: [
    ["¿Qué es la hidrosfera?", "El conjunto de las aguas de la Tierra en estado líquido, sólido y gaseoso."],
    ["¿Qué porcentaje del agua es salada?", "Alrededor del 97 %."],
    ["Explica las fases del ciclo del agua.", "Evaporación, condensación en nubes, precipitación y escorrentía o infiltración, que devuelven el agua al mar o al subsuelo."],
    ["Nombra los cinco océanos.", "Pacífico, Atlántico, Índico, Glacial Ártico y Glacial Antártico."],
    ["¿Qué diferencia hay entre pleamar y bajamar?", "Pleamar: el nivel del mar está alto. Bajamar: está bajo."],
    ["¿Para qué sirve la corriente del Golfo?", "Lleva agua templada hacia Europa y suaviza su clima."],
    ["¿Qué hace el río en cada tramo?", "Curso alto: erosiona. Curso medio: transporta. Curso bajo: deposita."],
    ["¿Qué es el caudal y en qué unidad se mide?", "La cantidad de agua que lleva un río; en metros cúbicos por segundo."],
    ["¿Qué es un acuífero?", "Una capa de roca porosa bajo tierra que almacena agua."],
    ["Escribe tres gestos para ahorrar agua en casa.", "Ducharse en lugar de bañarse, cerrar el grifo al lavarse los dientes, poner la lavadora llena (otras respuestas válidas)."],
  ],
  figura: ["Las aguas de la Tierra", H.figCols("Las aguas de la Tierra", [["Hidrosfera", ["97 % salada", "3 % dulce", "71 % superficie", "ciclo del agua"], "var(--pen)"], ["Mares", ["5 océanos", "mares", "olas · mareas", "corrientes"], "var(--bac)"], ["Ríos", ["alto · medio · bajo", "caudal", "afluentes", "cuencas"], "var(--leaf)"], ["Otras", ["lagos", "acuíferos", "glaciares", "¡cuidarla!"], "var(--muted)"]])],
  video: V.gh4v,
  quiz: [
    ["La hidrosfera cubre más o menos…", ["el 71 % de la superficie", "el 30 %", "el 100 %"], "Casi tres cuartas partes."],
    ["El motor del ciclo del agua es…", ["el Sol", "la Luna", "el viento"], "Su calor evapora el agua."],
    ["El paso de vapor a gotitas en las nubes es…", ["condensación", "evaporación", "infiltración"], "Al enfriarse el vapor."],
    ["El océano más grande es el…", ["Pacífico", "Atlántico", "Índico"], "También el más profundo."],
    ["Las mareas las provoca sobre todo…", ["la Luna", "el viento", "los ríos"], "Su atracción gravitatoria."],
    ["Las olas las provoca…", ["el viento", "la Luna", "los terremotos siempre"], "Sopla sobre la superficie."],
    ["En el curso bajo, el río…", ["deposita sedimentos", "erosiona mucho", "nace"], "Va lento."],
    ["Un río que desemboca en otro es un…", ["afluente", "delta", "acuífero"], "Como el Pisuerga."],
    ["La desembocadura en forma de abanico es un…", ["delta", "estuario", "meandro"], "Como el del Ebro."],
    ["El periodo de menos caudal es el…", ["estiaje", "deshielo", "pleamar"], "En verano, en España."],
  ],
  examen: [
    ["El agua dulce que más abunda está…", ["congelada", "en los ríos", "en los lagos"], "En polos y glaciares."],
    ["Un embalse es…", ["un lago artificial", "un río subterráneo", "un tipo de ola"], "Se crea con una presa."],
    ["La actividad que más agua consume en España es…", ["la agricultura", "la ducha", "la industria del cine"], "Alrededor del 80 %."],
  ],
  feynman: ["Cómo se reparte el agua de la Tierra", "Cómo funciona el ciclo del agua", "Cómo se mueven los mares y océanos", "Cuáles son las partes de un río y cómo trabaja en cada tramo"],
  mapa: ["LAS AGUAS", "var(--pen)", [["Hidrosfera", "97 % salada · 3 % dulce", "var(--pen)"], ["Ciclo", "evaporación · lluvia", "var(--sun)"], ["Mares", "océanos · olas · mareas", "var(--bac)"], ["Ríos", "tramos · caudal · cuenca", "var(--leaf)"]], 230],
  tarjetas: [
    ["Hidrosfera", "Conjunto de las aguas de la Tierra."],
    ["Ciclo del agua", "Evaporación, condensación, precipitación y escorrentía."],
    ["Océano", "Gran masa de agua salada que separa continentes."],
    ["Marea", "Subida y bajada del mar por la atracción de la Luna."],
    ["Caudal", "Cantidad de agua de un río (m³/s)."],
    ["Afluente", "Río que desemboca en otro."],
    ["Cuenca hidrográfica", "Territorio cuyas aguas van a un mismo río."],
    ["Acuífero", "Agua almacenada bajo tierra en rocas porosas."],
  ],
  familias: ["Mirad el recibo del agua de casa y calculad cuántos litros gasta la familia al día; pensad juntos cómo reducirlo.", "Averiguad en qué río y en qué cuenca está vuestro pueblo o ciudad y de dónde viene el agua del grifo."],
  saberes: "La hidrosfera: distribución del agua, ciclo del agua, océanos y mares, ríos y aguas continentales; el agua como recurso y su uso sostenible (Geografía e Historia, 1º ESO, RD 217/2022).",
  ideas: ["Experimento del ciclo del agua en una bolsa con agua pegada a la ventana.", "Medir el caudal de un río con los datos del SAIH de la confederación hidrográfica.", "Auditoría del consumo de agua del instituto."],
  fuentes: [["Ministerio para la Transición Ecológica: el agua en España", "https://www.miteco.gob.es/es/agua/temas.html"], ["AEMET: el ciclo del agua", "https://www.aemet.es/es/conocermas"]],
});
