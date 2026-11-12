// Biología y Geología 1º ESO: las plantas. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

const guia = (x1, y1, x2, y2, s, anchor = "start") => `<path d="M${x1} ${y1} L ${x2} ${y2}" stroke="var(--ink)" stroke-width="1"/>${t(x2 + (anchor === "start" ? 3 : -3), y2 + 3.5, s, { size: 9.5, anchor })}`;

module.exports = {
  materia: "Biología y Geología",
  curso: C,
  titulo: "Las plantas",
  minutos: 60,
  objetivos: ["Describir las características del reino Plantas y las partes de una planta", "Clasificar las plantas en musgos, helechos, gimnospermas y angiospermas", "Explicar la nutrición de las plantas y la fotosíntesis", "Describir la relación y la reproducción de las plantas, y valorar su importancia"],
  claves: ["planta", "raíz", "tallo", "hoja", "musgo", "helecho", "gimnosperma", "angiosperma", "fotosíntesis", "savia", "estoma", "tropismo", "flor", "polinización", "semilla", "fruto"],
  pregunta: {
    texto: "Un roble de 20 metros pesa varias toneladas, pero el suelo que hay a su alrededor apenas ha disminuido. ¿De dónde ha sacado el árbol toda esa materia?",
    respuesta: "Sorprendentemente, ¡casi todo viene del <b>aire</b>! La madera está hecha sobre todo de carbono, y el árbol lo toma del <b>dióxido de carbono</b> del aire por los pequeños poros de sus hojas. Con él y con el <b>agua</b> que absorben las raíces, usando la <b>energía de la luz</b>, fabrica azúcares en la <b>fotosíntesis</b>. Del suelo solo toma agua y una pequeña cantidad de sales minerales.",
  },
  bloques: [
    {
      html: `<h3>El reino de las plantas</h3><p>Las <mark>plantas</mark> son seres vivos <b>eucariotas</b>, <b>pluricelulares</b> y con <b>tejidos</b>, cuyas células tienen una <b>pared de celulosa</b> y <b>cloroplastos</b>. Son <b>autótrofas</b>: fabrican su propio alimento mediante la fotosíntesis. Viven <b>fijas al suelo</b>, aunque pueden mover algunas partes, como las hojas o los pétalos. Se conocen unas 400.000 especies, desde musgos de pocos milímetros hasta secuoyas de más de 100 metros, y viven en casi todos los ambientes terrestres y en muchos acuáticos. Las plantas son fundamentales para la vida: producen el <b>oxígeno</b> que respiramos, son la base de casi todas las <b>cadenas alimentarias</b> terrestres, retienen el suelo con sus raíces, absorben dióxido de carbono y nos proporcionan alimentos, madera, fibras como el algodón, medicinas y combustibles. Las plantas más complejas tienen tres órganos principales: la raíz, el tallo y las hojas; y muchas tienen además flores, frutos y semillas.</p>`,
    },
    {
      html: `<h3>Raíz, tallo y hojas</h3><p>La <mark>raíz</mark> crece normalmente bajo tierra. Sus funciones son <b>sujetar</b> la planta al suelo y <b>absorber agua y sales minerales</b> a través de los <b>pelos absorbentes</b>, unas prolongaciones finísimas de las células de su extremo. Algunas raíces almacenan sustancias de reserva, como la zanahoria o la remolacha. El <mark>tallo</mark> <b>sostiene</b> las hojas, las flores y los frutos, y <b>transporta</b> la savia por unos tubos llamados <b>vasos conductores</b>. Puede ser <b>herbáceo</b> (verde y flexible, como el del trigo) o <b>leñoso</b> (duro, con madera y corteza, como el tronco de los árboles). Las <mark>hojas</mark> son los órganos donde se realiza la <b>fotosíntesis</b>. Tienen una parte plana y ancha, el <b>limbo</b>, unida al tallo por el <b>peciolo</b>, y están recorridas por <b>nervios</b>, que son vasos conductores. En su superficie, sobre todo en el envés, hay unos poros microscópicos, los <mark>estomas</mark>, por los que entran y salen gases y se pierde vapor de agua.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Partes de una planta con flor: raíz con pelos absorbentes bajo el suelo, tallo, hojas con limbo y peciolo, flor y fruto">${BG}
        <rect x="10" y="122" width="240" height="50" fill="#c08457" fill-opacity=".5"/>
        <path d="M110 122 V 40" stroke="#2f9e44" stroke-width="5"/>
        <path d="M110 122 l -20 22 l -10 8 M110 122 l 18 26 M110 122 l 2 36 M96 140 l -12 4 M124 140 l 10 6" stroke="#a16207" stroke-width="2.5" fill="none"/>
        <path d="M110 92 l 22 -10" stroke="#2f9e44" stroke-width="2.5"/><ellipse cx="148" cy="76" rx="20" ry="9" fill="#4ade80" stroke="#15803d" transform="rotate(-20 148 76)"/><path d="M132 82 L 164 70" stroke="#15803d" stroke-width="1"/>
        <path d="M110 70 l -20 -8" stroke="#2f9e44" stroke-width="2.5"/><ellipse cx="74" cy="56" rx="18" ry="8" fill="#4ade80" stroke="#15803d" transform="rotate(20 74 56)"/>
        ${[0, 1, 2, 3, 4].map((i) => { const a = (i / 5) * Math.PI * 2 - Math.PI / 2; return `<ellipse cx="${(110 + 9 * Math.cos(a)).toFixed(1)}" cy="${(32 + 9 * Math.sin(a)).toFixed(1)}" rx="6" ry="4" fill="#f472b6" transform="rotate(${(a * 180) / Math.PI} ${(110 + 9 * Math.cos(a)).toFixed(1)} ${(32 + 9 * Math.sin(a)).toFixed(1)})"/>`; }).join("")}<circle cx="110" cy="32" r="4" fill="#facc15"/>
        ${guia(118, 30, 170, 22, "flor")}${guia(160, 72, 196, 60, "hoja (limbo)")}${guia(124, 87, 196, 94, "peciolo")}${guia(110, 108, 60, 102, "tallo", "end")}${guia(126, 148, 190, 150, "raíz")}${guia(84, 152, 50, 160, "pelos", "end")}</svg>`,
    },
    {
      html: `<h3>Plantas sin semillas: musgos y helechos</h3><p>Las plantas se clasifican en dos grandes grupos según tengan semillas o no. Las <b>plantas sin semillas</b> se reproducen por <b>esporas</b>, células que se dispersan con el aire o el agua y que necesitan humedad para desarrollarse. Los <mark>musgos</mark> (briófitos) son plantas pequeñas, de pocos centímetros, que forman alfombras verdes en lugares húmedos y sombríos, como rocas, troncos o muros. Son las plantas más sencillas: <b>no tienen vasos conductores</b> ni verdaderas raíces, tallos y hojas; en lugar de raíces tienen unos filamentos llamados <b>rizoides</b> que los sujetan, y absorben el agua por toda su superficie. Por eso no pueden crecer mucho. Los <mark>helechos</mark> (pteridófitos) ya tienen <b>vasos conductores</b> y verdaderas raíces, tallo y hojas. Su tallo suele ser subterráneo (un <b>rizoma</b>) y sus hojas, llamadas <b>frondes</b>, nacen enrolladas como un báculo y son grandes y divididas. En el envés de las hojas tienen unos puntitos marrones, los <b>soros</b>, donde se forman las esporas. Hace unos 300 millones de años había bosques de helechos gigantes, cuyos restos formaron el carbón.</p>`,
    },
    {
      html: `<h3>Plantas con semillas</h3><p>Las <b>plantas con semillas</b> (espermatófitas) son las más abundantes y evolucionadas. Tienen raíz, tallo y hojas con vasos conductores, producen <b>flores</b> y se reproducen mediante <mark>semillas</mark>: estructuras que contienen un <b>embrión</b> (una plantita en miniatura) y una reserva de alimento, protegidos por una cubierta; gracias a ellas pueden vivir en lugares secos. Se dividen en dos grupos. Las <mark>gimnospermas</mark> («semilla desnuda») tienen flores sencillas y sin pétalos, agrupadas en conos, y sus semillas <b>no están encerradas en un fruto</b>: se forman en <b>piñas</b>. Casi todas son árboles o arbustos de hoja perenne, a menudo en forma de aguja o escama, como los <b>pinos</b>, los abetos, los cipreses o el enebro. Las <mark>angiospermas</mark> («semilla en un recipiente») tienen <b>flores vistosas</b>, muchas veces con pétalos de colores, y sus semillas están protegidas dentro de un <b>fruto</b>. Son el grupo más numeroso e incluyen casi todas las plantas que conocemos: rosales, encinas, naranjos, trigo, tomateras, girasoles o césped.</p>${tabla(["Grupo", "Vasos", "Se reproduce por", "Ejemplos"], [["Musgos", "no", "esporas", "musgo de los muros"], ["Helechos", "sí", "esporas (en soros)", "helecho común"], ["Gimnospermas", "sí", "semillas sin fruto (piñas)", "pino, abeto, ciprés"], ["Angiospermas", "sí", "semillas dentro de un fruto", "encina, rosal, trigo"]])}`,
    },
    {
      html: `<h3>La nutrición de las plantas: la fotosíntesis</h3><p>La nutrición de las plantas es <b>autótrofa</b> y tiene varias etapas. 1) <b>Absorción</b>: las raíces toman <b>agua y sales minerales</b> del suelo; esta mezcla se llama <mark>savia bruta</mark>. 2) <b>Transporte</b>: la savia bruta sube por los vasos leñosos del tallo hasta las hojas. 3) <b>Intercambio de gases</b>: por los estomas de las hojas entra <b>dióxido de carbono</b> del aire. 4) <mark>Fotosíntesis</mark>: en los cloroplastos, la <b>clorofila</b> capta la <b>energía de la luz</b> y la usa para transformar el agua y el dióxido de carbono en <b>materia orgánica</b> (glucosa y otros azúcares), liberando <b>oxígeno</b> al aire. 5) La materia orgánica, disuelta en agua, forma la <mark>savia elaborada</mark>, que se reparte por toda la planta por los vasos liberianos para crecer y obtener energía; el sobrante se almacena como reserva, por ejemplo en forma de almidón en la patata. 6) <b>Respiración</b>: como todos los seres vivos, las plantas respiran día y noche, toman oxígeno y desprenden dióxido de carbono; pero de día hacen mucha más fotosíntesis, así que, en total, <b>producen más oxígeno del que consumen</b>. Además, por los estomas pierden mucho vapor de agua: es la <b>transpiración</b>, que ayuda a que la savia bruta suba.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fotosíntesis en la hoja: entran luz, dióxido de carbono y agua; salen oxígeno y azúcares (savia elaborada)">${BG}
        <circle cx="26" cy="26" r="13" fill="#f6b417"/>${fl(40, 36, 88, 70, COL.sol, 2.5)}${t(56, 44, "luz", { size: 10, color: COL.sol, anchor: "start" })}
        <ellipse cx="130" cy="92" rx="62" ry="28" fill="#4ade80" stroke="#15803d" stroke-width="2"/><path d="M68 92 H 192" stroke="#15803d" stroke-width="1.5"/>
        ${t(130, 86, "clorofila", { size: 10, color: "#14532d" })}
        ${fl(14, 100, 64, 96, "var(--muted)", 2)}${t(14, 116, "CO₂", { size: 11, anchor: "start", color: "var(--muted)" })}
        ${fl(130, 168, 130, 124, COL.azul, 2)}${t(138, 164, "agua (savia bruta)", { size: 9.5, anchor: "start", color: COL.azul })}
        ${fl(176, 66, 214, 34, COL.verde, 2)}${t(220, 28, "O₂", { size: 12, color: COL.verde })}
        ${fl(194, 100, 240, 120, COL.naranja, 2)}${t(242, 138, "azúcares", { size: 9.5, anchor: "end", color: COL.naranja })}</svg>`,
      video: { id: "tdDg1uSKyns", titulo: "LA FOTOSÍNTESIS | Vídeos Educativos para Niños", canal: "Happy Learning Español", vistas: 2677959 },
    },
    {
      html: `<h3>La relación de las plantas</h3><p>Aunque no se desplacen, las plantas también <b>captan estímulos y responden</b> a ellos, normalmente con movimientos lentos de crecimiento. Los <mark>tropismos</mark> son crecimientos orientados según la dirección del estímulo. El <b>fototropismo</b> es la respuesta a la luz: los tallos crecen hacia ella (por eso las plantas de interior se inclinan hacia la ventana). El <b>geotropismo</b> es la respuesta a la gravedad: las raíces crecen hacia abajo y los tallos hacia arriba, aunque pongas la semilla del revés. El <b>hidrotropismo</b> hace que las raíces crezcan hacia donde hay agua, y el <b>tigmotropismo</b> hace que los zarcillos de la vid o del guisante se enrollen al tocar un soporte. Las <mark>nastias</mark> son respuestas que no dependen de la dirección del estímulo, como las flores que se abren con la luz y se cierran de noche, las hojas de la mimosa que se pliegan al tocarlas o las hojas de la planta carnívora atrapamoscas, que se cierran en un instante. Además, muchas plantas responden a los cambios de estación: florecen en primavera, y los árboles caducifolios pierden sus hojas en otoño para ahorrar agua durante el invierno.</p>`,
    },
    {
      html: `<h3>La flor y la polinización</h3><p>La <mark>flor</mark> es el órgano de la <b>reproducción sexual</b> de las plantas con semillas. Una flor completa tiene: el <b>cáliz</b>, formado por los <b>sépalos</b>, hojitas verdes que la protegen cuando es un capullo; la <b>corola</b>, formada por los <b>pétalos</b>, a menudo de colores llamativos y perfumados, que atraen a los insectos; los <mark>estambres</mark>, el aparato reproductor masculino, en cuyas <b>anteras</b> se produce el <b>polen</b>, que contiene los gametos masculinos; y el <mark>pistilo</mark>, el aparato reproductor femenino, con forma de botella, cuya parte superior pegajosa es el <b>estigma</b> y cuya base ensanchada es el <b>ovario</b>, que contiene los <b>óvulos</b>. La <mark>polinización</mark> es el transporte del polen desde los estambres hasta el estigma de otra flor (o de la misma). Puede hacerse por el <b>viento</b>, en flores pequeñas y poco vistosas que producen mucho polen, como las del pino, el olivo o las gramíneas, que causan muchas alergias; o por los <b>animales</b>, sobre todo insectos como las abejas, que visitan las flores atraídos por los colores y el néctar y se llevan el polen pegado a su cuerpo. Sin las abejas y otros polinizadores, muchas plantas cultivadas no darían fruto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Partes de la flor en corte: sépalos, pétalos, estambres con anteras y polen, y pistilo con estigma y ovario con óvulos">${BG}
        <path d="M130 170 V 132" stroke="#2f9e44" stroke-width="5"/>
        <path d="M130 132 l -40 -10 q 10 16 40 14 Z M130 132 l 40 -10 q -10 16 -40 14 Z" fill="#22c55e"/>
        <path d="M130 128 C 70 120 56 60 84 40 C 96 70 110 100 130 120 Z" fill="#f9a8d4" stroke="#db2777" stroke-width="1.5"/><path d="M130 128 C 190 120 204 60 176 40 C 164 70 150 100 130 120 Z" fill="#f9a8d4" stroke="#db2777" stroke-width="1.5"/>
        <path d="M120 128 q -6 -26 10 -52 q 16 26 10 52 Z" fill="#a7f3d0" stroke="#15803d" stroke-width="1.5"/><path d="M130 76 V 50" stroke="#15803d" stroke-width="3"/><ellipse cx="130" cy="48" rx="8" ry="4" fill="#15803d"/>
        <circle cx="126" cy="114" r="3" fill="#fde68a" stroke="#a16207"/><circle cx="134" cy="106" r="3" fill="#fde68a" stroke="#a16207"/><circle cx="127" cy="98" r="3" fill="#fde68a" stroke="#a16207"/>
        <path d="M116 122 Q 104 96 102 70 M144 122 Q 156 96 158 70" stroke="#ca8a04" stroke-width="2" fill="none"/><ellipse cx="102" cy="66" rx="5" ry="7" fill="#facc15"/><ellipse cx="158" cy="66" rx="5" ry="7" fill="#facc15"/>
        ${guia(134, 46, 196, 18, "estigma")}${guia(160, 62, 212, 50, "antera")}${guia(140, 110, 212, 100, "ovario")}${guia(86, 50, 40, 36, "pétalo", "end")}${guia(98, 126, 40, 140, "sépalo", "end")}${guia(126, 104, 40, 88, "óvulos", "end")}</svg>`,
      video: { id: "5-CLWbeBkrs", titulo: "LA REPRODUCCIÓN SEXUAL DE LAS PLANTAS. Las partes de una flor", canal: "Happy Learning Español", vistas: 2662328 },
    },
    {
      html: `<h3>Fecundación, semillas y frutos</h3><p>Cuando un grano de polen llega al estigma, forma un <b>tubo polínico</b> que crece por el interior del pistilo hasta llegar a un óvulo. Allí se produce la <mark>fecundación</mark>: el gameto masculino se une con el femenino y se forma un cigoto. Después, la flor cambia por completo: los pétalos y los estambres se secan y caen; cada óvulo fecundado se transforma en una <mark>semilla</mark>, con el embrión y su reserva de alimento; y el ovario crece y se transforma en el <mark>fruto</mark>, que protege las semillas y ayuda a dispersarlas. Los frutos pueden ser <b>carnosos</b>, como el melocotón, la uva o el tomate, o <b>secos</b>, como la nuez, la almendra o la vaina de las judías. La <b>dispersión</b> de las semillas es importante para que la nueva planta no compita con su madre: unas viajan con el <b>viento</b> gracias a alas o pelos (como el diente de león), otras con los <b>animales</b> que comen el fruto y expulsan las semillas en sus excrementos o que las llevan enganchadas en el pelo, y otras con el agua. Cuando una semilla encuentra humedad y temperatura adecuadas, se produce la <b>germinación</b>: el embrión se hincha, sale primero la raíz y después el tallo con las primeras hojas.</p>`,
    },
    {
      html: `<h3>Reproducción asexual de las plantas</h3><p>Muchas plantas también pueden reproducirse de forma <mark>asexual</mark>, a partir de un fragmento de la planta madre, sin flores ni semillas. Las nuevas plantas son <b>idénticas</b> a la madre. Algunas formas naturales son los <b>estolones</b>, tallos que crecen por el suelo y echan raíces en algunos puntos, como en la fresa; los <b>tubérculos</b>, tallos subterráneos con reservas y yemas («ojos»), como la patata; los <b>bulbos</b>, como la cebolla o el tulipán; y los <b>rizomas</b>, como el lirio o el jengibre. Los agricultores y jardineros aprovechan esta capacidad con técnicas como los <b>esquejes</b> (cortar un trozo de tallo y ponerlo en agua o tierra hasta que echa raíces, como se hace con el geranio o el potos) o los <b>injertos</b> (unir una rama de una variedad buena al tronco de otra planta resistente, muy usado en frutales y viñas). Así se consiguen rápidamente muchas plantas iguales a una que tiene buenas características.</p>`,
    },
  ],
  figura: {
    titulo: "Las plantas en ocho ideas",
    svg: rejilla([
      ["Raíz", "sujeta y absorbe agua", COL.marron],
      ["Tallo", "sostiene y transporta savia", COL.verde],
      ["Hoja", "fotosíntesis y estomas", COL.agua],
      ["Sin semillas", "musgos y helechos: esporas", COL.gris],
      ["Gimnospermas", "semillas en piñas", COL.azul],
      ["Angiospermas", "flores y frutos", COL.rojo],
      ["Fotosíntesis", "CO₂ + agua + luz → azúcar + O₂", COL.sol],
      ["Flor", "polinización y fecundación", COL.morado],
    ], 4, 86, "Resumen: órganos, grupos de plantas, fotosíntesis y flor"),
  },
  video: { id: "gNS9Im61baQ", titulo: "PARTES de una PLANTA + sus FUNCIONES", canal: "EcologíaVerde", vistas: 377428, megusta: 0, busqueda: "partes de la planta raíz tallo hoja" },
  ejemplos: [
    { enunciado: "Una planta tiene vasos conductores, hojas grandes y divididas con puntitos marrones en el envés y no tiene flores. ¿Qué tipo de planta es?",
      pasos: ["Tiene vasos: no es un musgo.", "No tiene flores ni semillas: no es gimnosperma ni angiosperma.", "Los puntitos marrones son soros con esporas."],
      resultado: "Es un helecho." },
    { enunciado: "Pones dos plantas iguales, una junto a la ventana y otra en un armario oscuro, con el mismo riego. ¿Qué ocurrirá al cabo de dos semanas y por qué?",
      pasos: ["Sin luz, la segunda planta no puede hacer la fotosíntesis.", "Gasta sus reservas al respirar y no fabrica alimento nuevo.", "Se pone amarillenta y débil, mientras la otra crece inclinada hacia la ventana (fototropismo)."],
      resultado: "La de la ventana crece hacia la luz; la del armario se debilita." },
    { enunciado: "Ordena estos pasos de la reproducción sexual de una angiosperma: fruto, polinización, germinación, fecundación, formación de la semilla.",
      pasos: ["Primero el polen llega al estigma (polinización).", "Se unen los gametos (fecundación) y el óvulo se convierte en semilla mientras el ovario forma el fruto.", "Cuando la semilla cae en un buen lugar, germina."],
      resultado: "Polinización, fecundación, semilla y fruto, germinación." },
  ],
  errores: [
    "Pensar que las plantas «comen» tierra: del suelo solo toman agua y sales; la materia viene del CO₂.",
    "Decir que las plantas no respiran o que solo respiran de noche.",
    "Confundir polinización (transporte de polen) con fecundación (unión de gametos).",
    "Creer que el fruto procede del pétalo: procede del ovario.",
    "Llamar «hojas» a las acículas del pino y pensar que no son hojas: sí lo son, en forma de aguja.",
  ],
  ejercicios: [
    { q: "Escribe cuatro características del reino Plantas.", sol: "Eucariotas, pluricelulares con tejidos, con pared de celulosa y cloroplastos, autótrofas y fijas al suelo." },
    { q: "¿Qué funciones tiene la raíz? ¿Qué son los pelos absorbentes?", sol: "Sujetar la planta y absorber agua y sales; prolongaciones finas que absorben el agua." },
    { q: "¿Qué son los estomas y para qué sirven?", sol: "Poros microscópicos de las hojas por los que entran y salen gases y se pierde vapor de agua." },
    { q: "¿Por qué los musgos son siempre pequeños?", sol: "Porque no tienen vasos conductores para transportar el agua a cierta altura." },
    { q: "Diferencia entre gimnospermas y angiospermas.", sol: "Las gimnospermas tienen semillas desnudas (en piñas); las angiospermas tienen flores vistosas y semillas dentro de un fruto." },
    { q: "Escribe qué entra y qué sale en la fotosíntesis.", sol: "Entran agua, dióxido de carbono y energía de la luz; salen azúcares (materia orgánica) y oxígeno." },
    { q: "Diferencia entre savia bruta y savia elaborada.", sol: "La bruta es agua con sales que sube de la raíz; la elaborada lleva la materia orgánica fabricada en las hojas." },
    { q: "Pon un ejemplo de fototropismo y otro de nastia.", sol: "El tallo crece hacia la ventana; la mimosa pliega las hojas al tocarla." },
    { q: "¿Qué partes de la flor son los aparatos reproductores masculino y femenino?", sol: "Los estambres (masculino) y el pistilo (femenino)." },
    { q: "Escribe tres formas de reproducción asexual de las plantas con un ejemplo.", sol: "Estolones (fresa), tubérculos (patata), esquejes (geranio); también bulbos e injertos." },
  ],
  quiz: [
    { q: "Las plantas son…", o: ["heterótrofas", "autótrofas", "procariotas"], a: 1, e: "Autótrofas." },
    { q: "Los musgos no tienen…", o: ["clorofila", "vasos conductores", "células"], a: 1, e: "No tienen vasos." },
    { q: "Los helechos se reproducen por…", o: ["semillas", "esporas", "frutos"], a: 1, e: "Esporas en los soros." },
    { q: "El pino es una…", o: ["angiosperma", "gimnosperma", "briófita"], a: 1, e: "Gimnosperma." },
    { q: "La fotosíntesis se hace en los…", o: ["cloroplastos", "pelos absorbentes", "estambres"], a: 0, e: "Cloroplastos." },
    { q: "En la fotosíntesis se libera…", o: ["oxígeno", "nitrógeno", "dióxido de carbono"], a: 0, e: "Oxígeno." },
    { q: "Las raíces que crecen hacia abajo muestran…", o: ["fototropismo", "geotropismo", "una nastia"], a: 1, e: "Geotropismo." },
    { q: "El polen se produce en las…", o: ["anteras", "raíces", "semillas"], a: 0, e: "Anteras de los estambres." },
    { q: "El fruto se forma a partir del…", o: ["ovario", "pétalo", "tallo"], a: 0, e: "Ovario." },
    { q: "La patata es un…", o: ["tubérculo", "fruto", "bulbo"], a: 0, e: "Tallo subterráneo: tubérculo." },
  ],
  examen: [
    { q: "La materia de la madera de un árbol procede sobre todo…", o: ["del CO₂ del aire", "de la tierra", "del abono"], a: 0, e: "Del CO₂ captado en la fotosíntesis." },
    { q: "La pérdida de vapor de agua por los estomas se llama…", o: ["transpiración", "respiración", "germinación"], a: 0, e: "Transpiración." },
    { q: "Las flores que se polinizan por el viento suelen ser…", o: ["pequeñas y poco vistosas", "grandes y perfumadas", "rojas"], a: 0, e: "Producen mucho polen." },
  ],
  feynman: ["Cómo fabrica una planta su alimento", "Qué diferencia a musgos, helechos, gimnospermas y angiospermas", "Cómo se pasa de una flor a un fruto con semillas"],
  mapa: mapa("PLANTAS", "var(--eso)", [
    ["Órganos", "raíz · tallo · hojas", COL.marron],
    ["Grupos", "musgos · helechos · con semillas", COL.verde],
    ["Nutrición", "savia · fotosíntesis · respiración", COL.sol],
    ["Reproducción", "flor · semilla · fruto", COL.rojo],
  ], 290),
  tarjetas: [
    ["Estoma", "Poro de la hoja para el intercambio de gases."],
    ["Musgos", "Plantas sin vasos ni semillas; viven en lugares húmedos."],
    ["Gimnospermas", "Plantas con semillas sin fruto, en piñas: pino, abeto."],
    ["Angiospermas", "Plantas con flores vistosas y semillas dentro de un fruto."],
    ["Fotosíntesis", "CO₂ + agua + luz → materia orgánica + oxígeno."],
    ["Savia bruta", "Agua y sales que sube desde la raíz."],
    ["Tropismo", "Crecimiento orientado hacia un estímulo: luz, gravedad, agua."],
    ["Polinización", "Transporte del polen desde los estambres al estigma."],
  ],
  familias: ["Germinad unas lentejas en algodón húmedo y observad cada día cómo salen la raíz y el tallo.", "Haced un esqueje de potos o geranio en un vaso de agua y comprobad cuándo echa raíces.", "En un paseo, buscad un musgo, un helecho, un pino y una planta con flor."],
  profesores: {
    saberes: "Las plantas: características, órganos, clasificación (briófitos, pteridófitos, gimnospermas y angiospermas), nutrición y fotosíntesis, relación (tropismos y nastias), reproducción sexual y asexual, importancia ecológica y económica (RD 217/2022, Biología y Geología, bloque Seres vivos).",
    ideas: ["Disección de una flor (lirio, tulipán) e identificación de sus partes.", "Experimento de almidón en hojas tapadas y destapadas con lugol.", "Herbario de la clase con hojas de árboles del entorno y su nombre científico."],
  },
  fuentes: [RD, wiki("Plantae", "Plantae"), wiki("Fotosíntesis", "Fotosíntesis"), { t: "Real Jardín Botánico (CSIC)", url: "https://www.rjb.csic.es/" }],
  revisado: REV,
};
