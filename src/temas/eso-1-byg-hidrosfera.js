// Biología y Geología 1º ESO: la hidrosfera. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Biología y Geología",
  curso: C,
  titulo: "La hidrosfera",
  minutos: 55,
  objetivos: ["Describir la distribución del agua en la Tierra", "Relacionar las propiedades del agua con su importancia para la vida", "Explicar las etapas del ciclo del agua", "Identificar las causas de la contaminación del agua y proponer formas de ahorrarla"],
  claves: ["hidrosfera", "agua salada", "agua dulce", "glaciar", "acuífero", "disolvente", "ciclo del agua", "evaporación", "condensación", "precipitación", "infiltración", "potabilización", "depuración"],
  pregunta: {
    texto: "Si casi tres cuartas partes de la Tierra están cubiertas de agua, ¿por qué se dice que el agua es un recurso escaso?",
    respuesta: "Porque casi toda es <b>salada</b>: el 97 % está en mares y océanos. Del 3 % que es dulce, la mayor parte está <b>congelada</b> en los polos y glaciares o escondida bajo tierra. El agua dulce fácil de usar, la de ríos y lagos, es <b>menos del 1 %</b> del total. Si toda el agua de la Tierra cupiera en una botella de 1,5 litros, el agua dulce de ríos y lagos sería <b>apenas unas gotas</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la hidrosfera?</h3><p>La <mark>hidrosfera</mark> es el conjunto de toda el <b>agua de la Tierra</b>, en cualquiera de sus estados: <b>líquida</b> en mares, océanos, ríos, lagos y bajo el suelo; <b>sólida</b> en los casquetes polares, los glaciares y la nieve; y <b>gaseosa</b> como vapor de agua en la atmósfera. La Tierra es el único planeta conocido con grandes cantidades de agua líquida en su superficie, y por eso desde el espacio se ve azul: el agua cubre alrededor del <b>71 %</b> de su superficie. Se cree que el agua procede del vapor que expulsaron los volcanes cuando la Tierra era joven y que, al enfriarse el planeta, se condensó y cayó en forma de lluvias torrenciales que llenaron las zonas bajas y formaron los océanos. Parte del agua también pudo llegar en meteoritos y cometas. La cantidad total de agua de la Tierra es prácticamente la misma desde hace millones de años: no se gasta, sino que circula y se recicla.</p>`,
    },
    {
      html: `<h3>Cómo se reparte el agua</h3><p>El <b>97 %</b> del agua de la Tierra es <mark>agua salada</mark> y está en <b>mares y océanos</b>. Contiene sales disueltas, sobre todo cloruro de sodio, unos 35 gramos por litro, por lo que no se puede beber ni usar para regar. Solo el <b>3 %</b> es <mark>agua dulce</mark>, con muy pocas sales, y se reparte de forma muy desigual: unas dos terceras partes están congeladas en <b>glaciares y casquetes polares</b>, sobre todo en la Antártida y Groenlandia; casi todo el resto son <mark>aguas subterráneas</mark>, que llenan los poros y grietas de las rocas formando <b>acuíferos</b>, de los que se saca agua con pozos y que alimentan los manantiales; y solo una mínima parte forma los <b>ríos, lagos</b>, la humedad del suelo, el vapor de la atmósfera y el agua de los seres vivos. Por eso, aunque parezca abundante, el agua dulce disponible es un <b>bien escaso</b> que hay que cuidar.</p>${tabla(["Dónde está", "Porcentaje aproximado del total"], [["Mares y océanos (salada)", "97 %"], ["Glaciares y polos", "2 %"], ["Aguas subterráneas", "0,7 %"], ["Ríos, lagos, atmósfera y seres vivos", "menos del 0,1 %"]])}`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Reparto del agua: 97 de cada 100 litros son salados; de los 3 dulces, 2 están congelados y casi 1 es subterráneo">${BG}
        ${Array.from({ length: 100 }, (_, i) => { const x = 20 + (i % 20) * 11, y = 26 + Math.floor(i / 20) * 18; const c = i < 97 ? "#2b8ad8" : i < 99 ? "#bae6fd" : "#2f9e44"; return `<path d="M${x + 4} ${y} q 4 7 0 11 q -4 -4 0 -11 Z" fill="${c}" stroke="${i < 97 ? "none" : "var(--ink)"}" stroke-width=".6"/>`; }).join("")}
        <rect x="20" y="126" width="12" height="12" rx="3" fill="#2b8ad8"/>${t(38, 136, "salada 97", { size: 10, anchor: "start" })}
        <rect x="104" y="126" width="12" height="12" rx="3" fill="#bae6fd" stroke="var(--ink)" stroke-width=".6"/>${t(122, 136, "hielo 2", { size: 10, anchor: "start" })}
        <rect x="176" y="126" width="12" height="12" rx="3" fill="#2f9e44"/>${t(194, 136, "resto 1", { size: 10, anchor: "start" })}
        ${t(130, 162, "de cada 100 gotas de agua", { size: 10, weight: 400, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Las propiedades del agua</h3><p>El agua es una sustancia muy común, pero tiene propiedades excepcionales que la hacen imprescindible para la vida. Es el <mark>disolvente universal</mark>, porque disuelve muchísimas sustancias; gracias a ello, la sangre y la savia transportan nutrientes, y dentro de las células se producen las reacciones químicas de la vida. Tiene un <b>alto calor específico</b>: necesita mucha energía para calentarse y tarda en enfriarse, de modo que los mares <b>suavizan el clima</b> de las costas y el agua del cuerpo nos ayuda a mantener la temperatura; al sudar, la evaporación del agua nos refresca. A diferencia de casi todas las sustancias, el <b>hielo es menos denso</b> que el agua líquida y por eso <b>flota</b>: en invierno, los lagos se hielan por arriba y el hielo aísla el agua de debajo, donde los peces pueden sobrevivir. Además, el agua es el principal componente de los seres vivos: una persona adulta tiene alrededor de un 60 % de agua.</p>`,
    },
    {
      html: `<h3>El ciclo del agua</h3><p>El agua de la Tierra está en continuo movimiento entre los océanos, la atmósfera y los continentes. Este recorrido sin fin se llama <mark>ciclo del agua</mark> o ciclo hidrológico, y lo mueven la <b>energía del Sol</b> y la <b>gravedad</b>. El Sol calienta el agua de los océanos, lagos y ríos, que se <b>evapora</b> y sube como vapor; las plantas también expulsan vapor por sus hojas (<b>transpiración</b>). Al subir, el vapor se enfría y se <b>condensa</b> en gotitas diminutas que forman las <b>nubes</b>. Cuando las gotas crecen y pesan demasiado, caen como <b>precipitación</b>: lluvia, nieve o granizo. Una parte del agua caída corre por la superficie (<b>escorrentía</b>) y forma arroyos y ríos que vuelven al mar; otra parte se <b>infiltra</b> en el suelo y alimenta los acuíferos; y en las montañas puede quedar almacenada como nieve o hielo hasta que se funde en primavera. Al evaporarse, el agua deja atrás las sales: por eso la lluvia es dulce aunque venga del mar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo del agua: evaporación desde el mar, condensación en nubes, precipitación sobre la montaña, escorrentía por un río e infiltración en el suelo">${BG}
        <circle cx="232" cy="26" r="14" fill="#f6b417"/>
        <path d="M10 130 L 60 70 L 100 130 Z" fill="#a8a29e"/><path d="M60 70 L 70 82 L 52 82 Z" fill="#fff"/>
        <rect x="10" y="130" width="140" height="40" fill="#c08457"/><rect x="150" y="130" width="100" height="40" fill="#2b8ad8"/>
        <path d="M86 130 C 110 128 130 134 152 132" fill="none" stroke="#2b8ad8" stroke-width="4"/>
        <ellipse cx="80" cy="36" rx="26" ry="11" fill="#cbd5e1"/><ellipse cx="100" cy="30" rx="20" ry="10" fill="#cbd5e1"/>
        ${fl(190, 124, 160, 54, COL.rojo, 2)}${fl(140, 34, 124, 34, "var(--muted)", 2)}
        ${[0, 1, 2].map((i) => `<path d="M${70 + i * 12} ${52} l -3 10" stroke="#2b8ad8" stroke-width="2"/>`).join("")}
        ${fl(60, 146, 60, 164, "#1e3a8a", 2)}
        ${t(198, 92, "evaporación", { size: 9.5, anchor: "start", color: COL.rojo })}${t(150, 22, "condensación", { size: 9.5, color: "var(--muted)" })}${t(30, 62, "lluvia", { size: 9.5, color: COL.azul })}${t(118, 124, "río", { size: 9.5, color: "#fff" })}${t(66, 160, "infiltración", { size: 9, anchor: "start", color: "#fff" })}${t(200, 156, "mar", { size: 10, color: "#fff" })}</svg>`,
      video: { id: "3QVj99UGk3Q", titulo: "El ciclo del agua para niños - ¿Qué es el ciclo del agua? - ¿Por qué llueve?", canal: "Smile and Learn - Español", vistas: 3507215 },
    },
    {
      html: `<h3>Las aguas continentales</h3><p>El agua dulce que está sobre los continentes forma las <mark>aguas continentales</mark>. Los <b>ríos</b> son corrientes de agua continuas que nacen en manantiales, lagos o glaciares, y bajan por la pendiente hasta desembocar en el mar, en un lago o en otro río; el terreno que vierte sus aguas a un mismo río se llama <b>cuenca hidrográfica</b>. En España, los grandes ríos que van al Atlántico son el Miño, el Duero, el Tajo, el Guadiana y el Guadalquivir, y el gran río que va al Mediterráneo es el Ebro. Los <b>lagos</b> son masas de agua acumuladas en zonas hundidas del terreno, y los <b>embalses</b> son lagos artificiales creados con presas para almacenar agua y producir electricidad. Los <b>humedales</b>, como Doñana o las Tablas de Daimiel, son zonas inundadas de forma permanente o temporal y tienen una gran riqueza de aves y plantas. Las <b>aguas subterráneas</b> se acumulan en los acuíferos y salen de forma natural por manantiales o fuentes.</p>`,
    },
    {
      html: `<h3>Los usos del agua</h3><p>Los seres humanos usamos el agua para muchas actividades. En España, la que más agua consume es, con mucha diferencia, la <b>agricultura</b>, sobre todo para el regadío: alrededor del <b>80 %</b> del total. El resto se reparte entre el <b>uso doméstico</b> (beber, cocinar, lavar, la cisterna del váter…), la <b>industria</b>, que la necesita para fabricar, limpiar y refrigerar, la producción de <b>energía</b> en centrales hidroeléctricas y térmicas, y el <b>ocio</b>, como piscinas o campos de golf. Una persona en España gasta en casa unos <b>130 litros al día</b>: una ducha de cinco minutos consume unos 50 litros, un baño puede gastar 200, y un grifo abierto mientras te lavas los dientes desperdicia unos 12 litros. También hay un consumo de agua «invisible», llamado <b>huella hídrica</b>: el agua que hace falta para producir lo que comemos o usamos, como los unos 2.500 litros necesarios para fabricar una camiseta de algodón.</p>`,
    },
    {
      html: `<h3>Agua potable y aguas residuales</h3><p>El agua de los ríos o acuíferos no se puede beber directamente, porque puede llevar tierra, restos de seres vivos o microorganismos que causan enfermedades. Antes de llegar a nuestras casas pasa por una <mark>potabilizadora</mark> (estación de tratamiento de agua potable), donde se filtra para eliminar partículas, se deja reposar para que los sólidos se depositen y se <b>desinfecta</b>, normalmente con cloro, para matar los microorganismos. Así se obtiene <b>agua potable</b>, apta para el consumo. Después de usarla, el agua sale de las casas y las fábricas sucia: son las <mark>aguas residuales</mark>. Por las alcantarillas llegan a una <mark>depuradora</mark> (EDAR), donde se eliminan la basura, las grasas, la materia orgánica y parte de los contaminantes antes de devolverla al río o al mar. Hoy, en muchos lugares, el agua depurada también se reutiliza para regar parques y cultivos. En zonas costeras con poca agua, como Canarias, se usan <b>desaladoras</b>, que quitan la sal al agua del mar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Recorrido del agua en la ciudad: del río a la potabilizadora, a las casas, a la depuradora y de vuelta al río">${BG}
        ${cj(10, 20, 72, 34, "río", COL.agua)}${cj(178, 20, 74, 34, "potabilizadora", COL.azul)}${cj(178, 124, 74, 34, "casas", COL.sol)}${cj(10, 124, 72, 34, "depuradora", COL.verde)}
        ${fl(86, 37, 172, 37, "var(--ink)", 2)}${fl(215, 58, 215, 118, "var(--ink)", 2)}${fl(172, 141, 88, 141, "var(--ink)", 2)}${fl(46, 120, 46, 60, "var(--ink)", 2)}
        ${et(130, 30, "captación", 80, { size: 9.5, weight: 400 })}${et(208, 100, "agua potable", 70, { size: 9.5, weight: 400, anchor: "end" })}${et(130, 134, "aguas residuales", 80, { size: 9.5, weight: 400 })}${et(52, 84, "agua depurada", 72, { size: 9.5, weight: 400, anchor: "start" })}</svg>`,
    },
    {
      html: `<h3>La contaminación del agua</h3><p>El agua se <mark>contamina</mark> cuando recibe sustancias o microorganismos que la hacen perjudicial para los seres vivos o inservible para nuestros usos. Las principales causas son: los <b>vertidos urbanos</b> sin depurar, que llevan materia orgánica, detergentes y microorganismos; los <b>vertidos industriales</b>, con metales pesados como el mercurio o el plomo y otras sustancias tóxicas; los <b>fertilizantes y pesticidas</b> agrícolas, que se infiltran en los acuíferos o llegan a los ríos; los <b>purines</b> de las granjas; los <b>plásticos</b>, que se rompen en microplásticos y acaban en el mar y en los animales que comemos; y los <b>vertidos de petróleo</b> de barcos. Un efecto típico del exceso de fertilizantes es la <b>eutrofización</b>: las algas crecen sin control, al morir se pudren, se agota el oxígeno del agua y mueren los peces. Es lo que ha ocurrido en el Mar Menor de Murcia, que se ha convertido en un ejemplo de lo frágiles que son los ecosistemas acuáticos.</p>`,
    },
    {
      html: `<h3>Ahorrar y cuidar el agua</h3><p>Cuidar el agua significa <b>gastar menos</b> y <b>contaminar menos</b>. En casa podemos: <b>ducharnos en lugar de bañarnos</b> y acortar la ducha; <b>cerrar el grifo</b> mientras nos enjabonamos, nos lavamos los dientes o fregamos; poner la lavadora y el lavavajillas <b>solo cuando estén llenos</b>; arreglar los grifos que gotean (un grifo que gotea puede perder 30 litros al día); instalar <b>aireadores</b> en los grifos y cisternas de doble descarga; y regar las plantas al anochecer, cuando se evapora menos. Para no contaminar: <b>no tirar al váter</b> toallitas, bastoncillos, medicamentos ni restos de aceite de cocina (que se llevan a un punto limpio); usar detergentes ecológicos y en la cantidad justa; y no dejar basura en playas, ríos y montes. En el campo, el riego por goteo ahorra mucha agua respecto al riego por inundación. Y recuerda la huella hídrica: comprar menos ropa y desperdiciar menos comida también es ahorrar agua.</p>`,
      video: { id: "TOD_9kWu3bA", titulo: "Trucos para AHORRAR AGUA - Salvemos el planeta - Medio ambiente para niños", canal: "Smile and Learn - Español", vistas: 612380 },
    },
  ],
  figura: {
    titulo: "La hidrosfera en ocho ideas",
    svg: rejilla([
      ["Salada 97 %", "mares y océanos", COL.azul],
      ["Dulce 3 %", "casi toda helada o subterránea", COL.agua],
      ["Disolvente", "transporta nutrientes", COL.verde],
      ["Hielo flota", "protege la vida en lagos", COL.morado],
      ["Evaporación", "el Sol la convierte en vapor", COL.rojo],
      ["Condensación", "forma las nubes", COL.gris],
      ["Precipitación", "lluvia, nieve y granizo", COL.azul],
      ["Ahorro", "ducha corta, grifo cerrado", COL.sol],
    ], 4, 86, "Resumen: reparto del agua, propiedades, ciclo del agua y ahorro"),
  },
  video: { id: "1i_ZAHyl2EQ", titulo: "¿Qué es la HIDROSFERA? + el CICLO del AGUA", canal: "EcologíaVerde", vistas: 377976, megusta: 0, busqueda: "la hidrosfera explicación" },
  ejemplos: [
    { enunciado: "Una familia de 4 personas se ducha cada día 10 minutos y cada minuto salen 10 litros. ¿Cuánta agua ahorran a la semana si reducen la ducha a 5 minutos?",
      pasos: ["Ahorro por persona y día: 5 minutos · 10 L = 50 L.", "Por familia y día: 4 · 50 = 200 L.", "Por semana: 7 · 200 = 1.400 L."],
      resultado: "Ahorran unos 1.400 litros a la semana." },
    { enunciado: "Explica qué cambio de estado ocurre en cada caso: a) se forman nubes; b) se seca la ropa tendida; c) se derrite la nieve en primavera.",
      pasos: ["a) El vapor se enfría y pasa a gotitas líquidas: condensación.", "b) El agua líquida de la ropa pasa a vapor: evaporación.", "c) El hielo pasa a líquido: fusión."],
      resultado: "a) condensación; b) evaporación; c) fusión." },
    { enunciado: "En un lago cercano a unos campos de cultivo muy abonados aparecen muchas algas verdes y, semanas después, peces muertos. ¿Qué ha pasado?",
      pasos: ["El exceso de fertilizantes llega al lago con la lluvia y la escorrentía.", "Los nutrientes hacen crecer las algas sin control.", "Al morir, las algas se descomponen, se gasta el oxígeno del agua y los peces se asfixian."],
      resultado: "Es un caso de eutrofización." },
  ],
  errores: [
    "Pensar que la mayor parte del agua dulce está en ríos y lagos: la mayoría está helada o bajo tierra.",
    "Creer que el agua del ciclo «se gasta»: circula y se recicla siempre.",
    "Confundir potabilizadora (agua para beber) y depuradora (limpia el agua usada).",
    "Pensar que el mayor consumo de agua es el doméstico: en España es la agricultura.",
    "Tirar aceite o toallitas por el váter pensando que «el agua se lo lleva».",
  ],
  ejercicios: [
    { q: "Define hidrosfera y nombra los tres estados en que aparece el agua.", sol: "Es toda el agua de la Tierra; líquida, sólida (hielo, nieve) y gaseosa (vapor)." },
    { q: "¿Qué porcentaje del agua es salada? ¿Dónde está la mayor parte del agua dulce?", sol: "El 97 %; la mayor parte del agua dulce está en glaciares y casquetes polares." },
    { q: "¿Qué es un acuífero?", sol: "Una capa de rocas porosas o agrietadas bajo el suelo que almacena agua subterránea." },
    { q: "¿Por qué decimos que el agua es el disolvente universal? ¿Por qué es importante?", sol: "Disuelve muchas sustancias; permite transportar nutrientes y que ocurran las reacciones de las células." },
    { q: "¿Qué ventaja tiene para los peces que el hielo flote?", sol: "El lago se hiela por arriba y el hielo aísla el agua de debajo, que sigue líquida." },
    { q: "Ordena: precipitación, evaporación, escorrentía, condensación.", sol: "Evaporación, condensación, precipitación y escorrentía." },
    { q: "¿Qué dos «motores» mueven el ciclo del agua?", sol: "La energía del Sol y la gravedad." },
    { q: "¿Qué actividad consume más agua en España?", sol: "La agricultura (regadío), alrededor del 80 %." },
    { q: "¿Qué diferencia hay entre una potabilizadora y una depuradora?", sol: "La potabilizadora prepara el agua para beber; la depuradora limpia las aguas residuales antes de devolverlas al medio." },
    { q: "Escribe cuatro gestos para ahorrar agua en casa.", sol: "Ducharse en vez de bañarse, cerrar el grifo al lavarse los dientes, poner la lavadora llena y arreglar los grifos que gotean." },
  ],
  quiz: [
    { q: "El agua cubre aproximadamente el…", o: ["71 % de la superficie", "30 %", "99 %"], a: 0, e: "Un 71 %." },
    { q: "El agua salada es el…", o: ["50 %", "97 %", "3 %"], a: 1, e: "97 %." },
    { q: "La mayor parte del agua dulce está…", o: ["en los ríos", "helada", "en las nubes"], a: 1, e: "En glaciares y polos." },
    { q: "El paso de vapor a gotitas de agua es la…", o: ["evaporación", "condensación", "infiltración"], a: 1, e: "Condensación." },
    { q: "La energía que mueve el ciclo del agua procede…", o: ["del Sol", "del viento", "de la Luna"], a: 0, e: "Del Sol (y la gravedad)." },
    { q: "El hielo flota porque es…", o: ["más denso", "menos denso que el agua", "salado"], a: 1, e: "Menos denso." },
    { q: "El agua que penetra en el suelo se…", o: ["infiltra", "condensa", "sublima"], a: 0, e: "Se infiltra." },
    { q: "El agua se desinfecta en la potabilizadora con…", o: ["sal", "cloro", "aceite"], a: 1, e: "Normalmente con cloro." },
    { q: "La eutrofización la provoca el exceso de…", o: ["fertilizantes", "hielo", "oxígeno"], a: 0, e: "Fertilizantes." },
    { q: "Una persona en España gasta en casa unos…", o: ["13 L al día", "130 L al día", "1.300 L al día"], a: 1, e: "Unos 130 L." },
  ],
  examen: [
    { q: "Las desaladoras sirven para…", o: ["quitar la sal al agua de mar", "salar el agua", "depurar aceite"], a: 0, e: "Obtener agua dulce del mar." },
    { q: "El terreno que vierte sus aguas a un río es su…", o: ["cuenca hidrográfica", "acuífero", "delta"], a: 0, e: "Cuenca." },
    { q: "La lluvia es dulce aunque el agua venga del mar porque…", o: ["las sales no se evaporan", "las nubes filtran la sal", "llueve sobre tierra"], a: 0, e: "Al evaporarse, la sal se queda." },
  ],
  feynman: ["Cómo se reparte el agua de la Tierra y por qué el agua dulce es escasa", "Las etapas del ciclo del agua", "El recorrido del agua desde el río hasta tu casa y de vuelta"],
  mapa: mapa("HIDROSFERA", "var(--eso)", [
    ["Reparto", "97 % salada · 3 % dulce", COL.azul],
    ["Propiedades", "disolvente · hielo que flota", COL.morado],
    ["Ciclo", "evaporación · nubes · lluvia", COL.agua],
    ["Cuidado", "ahorrar · no contaminar", COL.verde],
  ], 280),
  tarjetas: [
    ["Hidrosfera", "Toda el agua de la Tierra en sus tres estados."],
    ["Agua dulce", "Solo el 3 % del agua; casi toda helada o subterránea."],
    ["Acuífero", "Capa de roca bajo el suelo que almacena agua."],
    ["Ciclo del agua", "Evaporación, condensación, precipitación, escorrentía e infiltración."],
    ["Condensación", "Paso de vapor a líquido: forma las nubes."],
    ["Potabilizadora", "Prepara el agua para que se pueda beber."],
    ["Depuradora", "Limpia las aguas residuales antes de devolverlas."],
    ["Eutrofización", "Exceso de nutrientes: algas, falta de oxígeno y muerte de peces."],
  ],
  familias: ["Mirad juntos la factura del agua y calculad cuántos litros gasta la familia por persona y día.", "Poned una jarra bajo el grifo de la ducha mientras sale el agua caliente y usadla para regar.", "Averiguad de qué embalse o acuífero viene el agua de vuestra localidad."],
  profesores: {
    saberes: "La hidrosfera: distribución del agua, propiedades e importancia para la vida, ciclo hidrológico, aguas continentales, usos, potabilización y depuración, contaminación y gestión sostenible (RD 217/2022, Biología y Geología, bloques Geología y Ecología y sostenibilidad).",
    ideas: ["Modelo del ciclo del agua en una bolsa con cierre pegada a la ventana.", "Auditoría de consumo de agua del centro escolar.", "Filtro de agua casero con arena, grava y carbón (sin beber el resultado)."],
  },
  fuentes: [RD, wiki("Hidrosfera", "Hidrosfera"), wiki("Ciclo hidrológico", "Ciclo_hidrológico"), { t: "Instituto Nacional de Estadística: estadísticas del agua", url: "https://www.ine.es/" }],
  revisado: REV,
};
