// Biología y Geología 1º ESO: la sostenibilidad y el medio ambiente. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Biología y Geología",
  curso: C,
  titulo: "La sostenibilidad y el medio ambiente",
  minutos: 55,
  objetivos: ["Distinguir recursos renovables y no renovables y valorar su uso responsable", "Identificar los principales problemas ambientales y sus causas", "Explicar el concepto de desarrollo sostenible y los Objetivos de Desarrollo Sostenible", "Proponer acciones personales y colectivas para cuidar el medio ambiente"],
  claves: ["medio ambiente", "recurso natural", "renovable", "no renovable", "impacto ambiental", "residuo", "cambio climático", "biodiversidad", "desarrollo sostenible", "ODS", "regla de las erres", "huella ecológica", "economía circular"],
  pregunta: {
    texto: "Si todas las personas del mundo vivieran como vive de media una persona en España, ¿cuántos planetas Tierra harían falta?",
    respuesta: "Según los cálculos de la <b>huella ecológica</b>, harían falta <b>más de dos planetas</b>, y si todos viviéramos como en Estados Unidos, unos cinco. La huella ecológica mide la superficie de tierra y mar que se necesita para producir lo que consumimos y absorber nuestros residuos. Como solo tenemos un planeta, la conclusión es clara: hay que consumir de forma más <b>sostenible</b>.",
  },
  bloques: [
    {
      html: `<h3>El medio ambiente y los recursos naturales</h3><p>El <mark>medio ambiente</mark> es el conjunto de elementos naturales (el aire, el agua, el suelo, los seres vivos) y sociales que rodean a las personas y con los que nos relacionamos. Del medio ambiente obtenemos los <mark>recursos naturales</mark>: todo lo que tomamos de la naturaleza para satisfacer nuestras necesidades, como el agua, los alimentos, la madera, los minerales o las fuentes de energía. Los recursos pueden ser <b>renovables</b> o <b>no renovables</b>. Los <mark>recursos renovables</mark> se regeneran de forma natural a un ritmo parecido al que los usamos, como la energía del <b>Sol</b>, del <b>viento</b> o del agua de los ríos, o la madera de los bosques y la pesca, siempre que no los sobreexplotemos. Los <mark>recursos no renovables</mark> existen en cantidades limitadas y tardan millones de años en formarse, así que se agotan al usarlos: el <b>petróleo</b>, el <b>carbón</b>, el <b>gas natural</b>, el uranio y los minerales. Hay recursos renovables que pueden dejar de serlo si los usamos mal: un acuífero del que se saca más agua de la que entra, o un caladero donde se pesca más de lo que se reproducen los peces.</p>${tabla(["Renovables", "No renovables"], [["energía solar, eólica e hidráulica", "petróleo, carbón y gas natural"], ["madera de bosques gestionados", "uranio"], ["agua (bien gestionada)", "minerales y metales"], ["pesca y agricultura sostenibles", "suelo fértil destruido (tarda siglos en formarse)"]])}`,
    },
    {
      html: `<h3>Los impactos ambientales</h3><p>Un <mark>impacto ambiental</mark> es cualquier cambio en el medio ambiente provocado por la actividad humana. Puede ser positivo, como reforestar un monte, pero normalmente hablamos de los negativos. Desde la Revolución Industrial, hace unos 250 años, la población mundial ha pasado de unos 1.000 millones a más de 8.000 millones de personas, y el consumo de recursos y energía ha crecido todavía más. Esto ha provocado varios problemas ambientales graves: la <b>contaminación</b> del aire, del agua y del suelo; la <b>sobreexplotación</b> de recursos como los bosques, los acuíferos o los caladeros de pesca; la <b>deforestación</b>, sobre todo de selvas tropicales para obtener madera, pastos o cultivos; la <b>desertificación</b>, que convierte suelos fértiles en terrenos casi desérticos (y que afecta a una parte importante de España); la acumulación de <b>residuos</b>, sobre todo de plásticos; la <b>pérdida de biodiversidad</b>; y el <b>cambio climático</b>. Todos estos problemas están relacionados entre sí y afectan también a la salud y al bienestar de las personas.</p>`,
    },
    {
      html: `<h3>El cambio climático</h3><p>El <mark>cambio climático</mark> es el aumento de la temperatura media de la Tierra y los cambios en el clima que provoca, causados principalmente por las actividades humanas. Al quemar <b>combustibles fósiles</b> (carbón, petróleo y gas) para producir electricidad, mover coches y aviones o calentar edificios, se emite mucho <b>dióxido de carbono</b>; la <b>deforestación</b> elimina árboles que lo absorbían; y la ganadería intensiva y los vertederos emiten <b>metano</b>. Estos gases refuerzan el <b>efecto invernadero</b>, y la Tierra retiene más calor: la temperatura media ya ha subido alrededor de <b>1,2 °C</b> desde finales del siglo XIX. Las consecuencias ya se notan: olas de calor más frecuentes e intensas, sequías e incendios, lluvias torrenciales, deshielo de glaciares y de los polos, <b>subida del nivel del mar</b>, acidificación de los océanos que daña los corales, y desplazamiento o extinción de especies. Para frenarlo, en el <b>Acuerdo de París</b> (2015) casi todos los países se comprometieron a reducir sus emisiones y a limitar el calentamiento muy por debajo de 2 °C.</p>`,
      video: { id: "kcr-Ryq6Nrk", titulo: "El cambio climático para niños - ¿Qué es?", canal: "Smile and Learn - Español", vistas: 2130995 },
    },
    {
      html: `<h3>Los residuos</h3><p>Un <mark>residuo</mark> es cualquier material que desechamos porque ya no nos sirve. Cada persona en España genera unos <b>470 kilos de residuos domésticos al año</b>, más de un kilo al día. Si no se gestionan bien, los residuos contaminan el suelo, el agua y el aire, ocupan mucho espacio en los vertederos y suponen un desperdicio de recursos. Un problema especialmente grave es el de los <b>plásticos</b>: son muy útiles y baratos, pero tardan cientos de años en degradarse, y millones de toneladas acaban cada año en el mar, donde los animales se enredan en ellos o se los comen; además, se rompen en trocitos minúsculos, los <b>microplásticos</b>, que ya se encuentran en el agua, en el pescado e incluso en nuestro cuerpo. Para gestionar bien los residuos es fundamental <b>separarlos en casa</b>: en España, el contenedor <b>amarillo</b> es para envases de plástico, latas y briks; el <b>azul</b>, para papel y cartón; el <b>verde</b>, para vidrio; el <b>marrón</b>, para restos orgánicos; y el <b>gris</b>, para el resto. Otros residuos, como pilas, aceite usado, aparatos electrónicos o medicamentos, se llevan a puntos limpios o a puntos de recogida especiales.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cinco contenedores de reciclaje: amarillo para envases, azul para papel y cartón, verde para vidrio, marrón para orgánico y gris para el resto">${BG}
        ${[["#facc15", "envases", "#713f12"], ["#2563eb", "papel", "#fff"], ["#16a34a", "vidrio", "#fff"], ["#92400e", "orgánico", "#fff"], ["#64748b", "resto", "#fff"]].map(([c, n, tc], i) => {
          const x = 12 + i * 49;
          return `<rect x="${x}" y="56" width="42" height="74" rx="5" fill="${c}"/><rect x="${x - 3}" y="48" width="48" height="10" rx="3" fill="${c}" stroke="var(--ink)" stroke-opacity=".3"/><rect x="${x + 14}" y="66" width="14" height="4" rx="2" fill="var(--ink)" fill-opacity=".4"/>${t(x + 21, 104, n, { size: n.length > 6 ? 8 : 9, color: tc })}`;
        }).join("")}
        ${t(130, 30, "separar en casa", { size: 12, color: COL.verde })}${t(130, 156, "pilas, aceite y aparatos: punto limpio", { size: 9.5, weight: 400, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La pérdida de biodiversidad</h3><p>La <b>biodiversidad</b> está disminuyendo a un ritmo muy rápido. Los científicos calculan que alrededor de <b>un millón de especies</b> están en peligro de extinción, y muchos hablan de una «sexta extinción masiva», esta vez causada por los seres humanos. Las principales causas son: la <b>destrucción y fragmentación de los hábitats</b> (por la agricultura intensiva, la construcción de ciudades y carreteras o la deforestación); la <b>sobreexplotación</b> por la caza y la pesca excesivas o el comercio ilegal de especies; la <b>contaminación</b>; las <b>especies invasoras</b>; y el <b>cambio climático</b>, que obliga a las especies a desplazarse o las deja sin su hábitat. Perder biodiversidad no es solo perder especies bonitas: es perder los <b>servicios</b> que nos dan los ecosistemas, como la polinización de los cultivos, el agua limpia, la fertilidad del suelo, la protección frente a inundaciones o nuevas medicinas. Para protegerla se crean <b>espacios naturales protegidos</b> (en España hay 16 parques nacionales, como Doñana, Picos de Europa o el Teide), se elaboran listas de especies amenazadas y se ponen en marcha planes de recuperación.</p>`,
    },
    {
      html: `<h3>El desarrollo sostenible</h3><p>El <mark>desarrollo sostenible</mark> es el que permite <b>satisfacer las necesidades de las personas de hoy sin comprometer la capacidad de las generaciones futuras</b> para satisfacer las suyas. Es decir, vivir bien ahora sin «robar» recursos y oportunidades a quienes vendrán después. Se apoya en tres pilares que deben equilibrarse: el <b>medioambiental</b> (cuidar los recursos y los ecosistemas), el <b>social</b> (que todas las personas tengan acceso a la salud, la educación y una vida digna) y el <b>económico</b> (que haya empleo y actividad económica). En 2015, las Naciones Unidas aprobaron la <b>Agenda 2030</b>, con <mark>17 Objetivos de Desarrollo Sostenible</mark> (ODS) que todos los países se comprometieron a alcanzar. Algunos de ellos son: fin de la pobreza, hambre cero, salud y bienestar, educación de calidad, igualdad de género, agua limpia, energía asequible y no contaminante, ciudades sostenibles, producción y consumo responsables, acción por el clima, vida submarina y vida de ecosistemas terrestres. Cada uno se representa con un icono de un color.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los tres pilares del desarrollo sostenible como tres círculos que se cruzan: medio ambiente, sociedad y economía; en el centro, lo sostenible">${BG}
        <circle cx="130" cy="64" r="44" fill="#22c55e" fill-opacity=".28" stroke="#15803d" stroke-width="2"/>
        <circle cx="100" cy="112" r="44" fill="#3b82f6" fill-opacity=".28" stroke="#1d4ed8" stroke-width="2"/>
        <circle cx="160" cy="112" r="44" fill="#f59e0b" fill-opacity=".28" stroke="#b45309" stroke-width="2"/>
        ${t(130, 50, "medio ambiente", { size: 9.5, color: "#15803d" })}${t(84, 132, "sociedad", { size: 10, color: "#1d4ed8" })}${t(178, 132, "economía", { size: 10, color: "#b45309" })}
        ${t(130, 102, "sostenible", { size: 9, color: "var(--ink)" })}</svg>`,
      video: { id: "ygMEp4bblts", titulo: "OBJETIVOS DE DESARROLLO SOSTENIBLE ¿Qué son los ODS?", canal: "Smile and Learn - Español", vistas: 365374 },
    },
    {
      html: `<h3>La regla de las erres y la economía circular</h3><p>Una forma sencilla de reducir nuestro impacto es aplicar la <mark>regla de las erres</mark>, en este orden de importancia. <b>Reducir</b>: consumir menos, comprar solo lo necesario, evitar los envases y los productos de usar y tirar (botellas de plástico, bolsas, vasos desechables), y no desperdiciar comida ni energía; es la erre más importante, porque el mejor residuo es el que no se produce. <b>Reutilizar</b>: dar una segunda vida a los objetos antes de tirarlos: usar una botella o una fiambrera rellenable, aprovechar libros y ropa de segunda mano, usar los folios por las dos caras. <b>Reparar</b> lo que se estropea en lugar de comprar algo nuevo. Y <b>reciclar</b>: separar los residuos para que se puedan convertir en materias primas y fabricar nuevos productos. Estas ideas forman parte de la <mark>economía circular</mark>, un modelo que propone que los productos se diseñen para durar, repararse y reciclarse, de modo que los materiales circulen una y otra vez y apenas se generen residuos, frente a la economía lineal de «extraer, fabricar, usar y tirar».</p>`,
    },
    {
      html: `<h3>¿Qué puedo hacer yo?</h3><p>Cuidar el medio ambiente depende de los gobiernos y las empresas, pero también de cada uno de nosotros. Algunas acciones sencillas tienen un gran efecto si las hacemos muchas personas. En la <b>energía</b>: apagar las luces y los aparatos que no se usan, no dejar el cargador enchufado, aprovechar la luz natural y no abusar de la calefacción ni del aire acondicionado. En el <b>transporte</b>: ir andando, en bici o en transporte público siempre que se pueda. En el <b>agua</b>: duchas cortas y cerrar el grifo. En la <b>alimentación</b>: comer más frutas, verduras y legumbres, elegir productos locales y de temporada, no tirar comida y llevar el almuerzo en una fiambrera. En el <b>consumo</b>: comprar menos ropa y aparatos, cuidarlos para que duren, y elegir productos con menos envases. En los <b>residuos</b>: separar bien en casa y llevar las pilas y los aparatos al punto limpio. Y en la <b>naturaleza</b>: no dejar basura en el campo ni en la playa, respetar a los animales y las plantas, y participar en actividades de voluntariado, como plantar árboles o limpiar ríos. Informarse, hablarlo en casa y en el instituto también es una forma de actuar.</p>`,
    },
  ],
  figura: {
    titulo: "Sostenibilidad en ocho ideas",
    svg: rejilla([
      ["Renovables", "sol, viento, agua", COL.verde],
      ["No renovables", "petróleo, carbón, gas", COL.gris],
      ["Cambio climático", "más CO₂: más calor", COL.rojo],
      ["Residuos", "separar: 5 contenedores", COL.sol],
      ["Biodiversidad", "1 millón de especies en peligro", COL.morado],
      ["Sostenible", "hoy sin quitar al mañana", COL.azul],
      ["ODS", "17 objetivos: Agenda 2030", COL.agua],
      ["Erres", "reducir, reutilizar, reciclar", COL.naranja],
    ], 4, 86, "Resumen: recursos, cambio climático, residuos, biodiversidad, desarrollo sostenible, ODS y regla de las erres"),
  },
  video: { id: "qo3V6bGFCYc", titulo: "MUNDO SOSTENIBLE", canal: "Elesapiens", vistas: 720393, megusta: 0, busqueda: "desarrollo sostenible explicación" },
  ejemplos: [
    { enunciado: "Clasifica estos recursos en renovables o no renovables: viento, gas natural, madera, cobre, energía solar.",
      pasos: ["Se regeneran pronto: viento, energía solar y madera (si se gestiona bien el bosque).", "Se agotan y tardan millones de años en formarse: gas natural y cobre."],
      resultado: "Renovables: viento, madera y energía solar. No renovables: gas natural y cobre." },
    { enunciado: "¿En qué contenedor va cada residuo? Un brik de leche, una caja de cereales, un tarro de mermelada, unas peladuras de naranja y una pila.",
      pasos: ["Brik: envase → amarillo.", "Caja de cartón → azul.", "Tarro de vidrio → verde (la tapa metálica, al amarillo).", "Peladuras → marrón (orgánico).", "Pila → punto de recogida de pilas o punto limpio."],
      resultado: "Amarillo, azul, verde, marrón y punto limpio." },
    { enunciado: "Lucía bebe cada día una botella de agua de plástico de medio litro en el instituto. ¿Cuántas botellas ahorraría en un curso (unos 175 días) con una botella reutilizable? ¿Qué erre aplica?",
      pasos: ["Una botella al día durante 175 días: 175 botellas.", "Usando siempre la misma botella rellenable, se evitan esas 175.", "Evitar el residuo es reducir; usar la botella muchas veces es reutilizar."],
      resultado: "Ahorra unas 175 botellas; aplica reducir y reutilizar." },
  ],
  errores: [
    "Pensar que reciclar es lo más importante: lo primero es reducir.",
    "Echar los briks en el contenedor azul: van al amarillo.",
    "Confundir el agujero de la capa de ozono con el cambio climático.",
    "Creer que los recursos renovables no se pueden agotar: se agotan si se sobreexplotan.",
    "Pensar que los gestos individuales no sirven: sumados, tienen un gran efecto.",
  ],
  ejercicios: [
    { q: "Diferencia entre recursos renovables y no renovables con dos ejemplos de cada uno.", sol: "Renovables: se regeneran (sol, viento). No renovables: se agotan (petróleo, carbón)." },
    { q: "¿Qué es un impacto ambiental? Pon dos ejemplos negativos.", sol: "Un cambio en el medio causado por las personas; deforestación y contaminación del agua." },
    { q: "¿Qué es la desertificación?", sol: "La degradación de suelos fértiles hasta convertirlos en terrenos casi desérticos." },
    { q: "Explica las causas del cambio climático.", sol: "La quema de combustibles fósiles, la deforestación y la ganadería intensiva, que aumentan los gases de efecto invernadero." },
    { q: "Escribe tres consecuencias del cambio climático.", sol: "Olas de calor y sequías, deshielo y subida del nivel del mar, desaparición de especies." },
    { q: "¿Por qué son un problema los microplásticos?", sol: "Porque no se degradan, están en el agua y los alimentos, y los ingieren los animales y las personas." },
    { q: "Escribe cuatro causas de la pérdida de biodiversidad.", sol: "Destrucción de hábitats, sobreexplotación, contaminación, especies invasoras y cambio climático." },
    { q: "Define desarrollo sostenible y nombra sus tres pilares.", sol: "Satisfacer las necesidades actuales sin comprometer las de las generaciones futuras; medioambiental, social y económico." },
    { q: "¿Qué es la economía circular?", sol: "Un modelo en el que los productos se diseñan para durar, repararse y reciclarse, de modo que apenas haya residuos." },
    { q: "Escribe cinco acciones que puedes hacer en tu día a día para cuidar el medio ambiente.", sol: "Ir andando o en bici, apagar luces, separar residuos, usar una botella reutilizable y no tirar comida." },
  ],
  quiz: [
    { q: "Un recurso no renovable es…", o: ["el viento", "el petróleo", "la luz solar"], a: 1, e: "El petróleo." },
    { q: "El principal gas responsable del cambio climático es el…", o: ["dióxido de carbono", "oxígeno", "nitrógeno"], a: 0, e: "CO₂." },
    { q: "Desde finales del siglo XIX la temperatura media ha subido unos…", o: ["1,2 °C", "10 °C", "0,01 °C"], a: 0, e: "Alrededor de 1,2 °C." },
    { q: "El Acuerdo de París se firmó en…", o: ["2015", "1987", "2000"], a: 0, e: "2015." },
    { q: "El contenedor amarillo es para…", o: ["envases", "vidrio", "papel"], a: 0, e: "Envases de plástico, latas y briks." },
    { q: "El vidrio va al contenedor…", o: ["verde", "azul", "gris"], a: 0, e: "Verde." },
    { q: "La erre más importante es…", o: ["reciclar", "reducir", "reutilizar"], a: 1, e: "Reducir." },
    { q: "Los ODS son…", o: ["17 objetivos de la ONU", "leyes de un país", "contenedores"], a: 0, e: "17 objetivos de la Agenda 2030." },
    { q: "La huella ecológica mide…", o: ["la superficie necesaria para nuestro consumo", "el tamaño del pie", "la temperatura"], a: 0, e: "La superficie que necesitamos." },
    { q: "Las pilas usadas se llevan…", o: ["al punto limpio", "al contenedor gris", "al marrón"], a: 0, e: "A un punto de recogida." },
  ],
  examen: [
    { q: "Un acuífero sobreexplotado es un recurso que…", o: ["puede agotarse", "nunca se agota", "no es natural"], a: 0, e: "Si se saca más de lo que entra, se agota." },
    { q: "Los tres pilares del desarrollo sostenible son…", o: ["ambiental, social y económico", "aire, agua y suelo", "reducir, reutilizar y reciclar"], a: 0, e: "Ambiental, social y económico." },
    { q: "Doñana y el Teide son…", o: ["parques nacionales", "ríos", "ODS"], a: 0, e: "Parques nacionales." },
  ],
  feynman: ["Qué diferencia hay entre recursos renovables y no renovables", "Por qué se produce el cambio climático y qué consecuencias tiene", "Qué es el desarrollo sostenible y qué puedo hacer yo"],
  mapa: mapa("SOSTENIBILIDAD", "var(--eso)", [
    ["Recursos", "renovables · no renovables", COL.verde],
    ["Problemas", "clima · residuos · biodiversidad", COL.rojo],
    ["Soluciones", "ODS · economía circular", COL.azul],
    ["Yo actúo", "reducir · reutilizar · reciclar", COL.naranja],
  ], 290),
  tarjetas: [
    ["Recurso renovable", "Se regenera a un ritmo parecido al de su uso."],
    ["Recurso no renovable", "Cantidad limitada; se agota: petróleo, carbón."],
    ["Impacto ambiental", "Cambio en el medio causado por la actividad humana."],
    ["Cambio climático", "Calentamiento global por más gases de efecto invernadero."],
    ["Desarrollo sostenible", "Cubrir las necesidades de hoy sin comprometer las del futuro."],
    ["ODS", "17 Objetivos de Desarrollo Sostenible de la Agenda 2030."],
    ["Regla de las erres", "Reducir, reutilizar, reparar y reciclar."],
    ["Economía circular", "Los materiales circulan y apenas hay residuos."],
  ],
  familias: ["Calculad juntos vuestra huella ecológica con una calculadora en línea y elegid un cambio para mejorarla.", "Revisad durante una semana cómo separáis los residuos en casa y corregid los errores.", "Planificad una compra con productos locales, de temporada y con pocos envases."],
  profesores: {
    saberes: "Sostenibilidad: recursos naturales renovables y no renovables, impactos ambientales, cambio climático, residuos, pérdida de biodiversidad, desarrollo sostenible y ODS, economía circular y hábitos sostenibles (RD 217/2022, Biología y Geología, bloque Ecología y sostenibilidad).",
    ideas: ["Auditoría de residuos del aula durante una semana y propuesta de mejora.", "Proyecto por grupos sobre un ODS aplicado al centro o al barrio.", "Campaña de reducción de envases en el almuerzo escolar."],
  },
  fuentes: [RD, wiki("Desarrollo sostenible", "Desarrollo_sostenible"), { t: "Naciones Unidas: Objetivos de Desarrollo Sostenible", url: "https://www.un.org/sustainabledevelopment/es/" }, { t: "Ministerio para la Transición Ecológica: residuos", url: "https://www.miteco.gob.es/es/calidad-y-evaluacion-ambiental/temas/prevencion-y-gestion-residuos.html" }],
  revisado: REV,
};
