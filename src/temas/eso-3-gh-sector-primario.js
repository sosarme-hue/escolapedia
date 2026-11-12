// Geografía e Historia 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, barras, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "3-eso",
  titulo: "El sector primario",
  minutos: 35,
  objetivos: ["Identificar las actividades del sector primario y los elementos del paisaje agrario", "Comparar la agricultura tradicional y la de mercado", "Describir la ganadería, la pesca y la explotación forestal y sus problemas"],
  claves: ["paisaje agrario", "parcela", "regadío", "agricultura de mercado", "ganadería intensiva", "acuicultura"],
  pregunta: {
    texto: "Hace un siglo, en España casi 6 de cada 10 trabajadores eran campesinos. Hoy son menos de 4 de cada 100, y sin embargo se producen muchos más alimentos. ¿Cómo es posible?",
    respuesta: "Gracias a la <mark>modernización del campo</mark>: tractores y cosechadoras, regadío, abonos, semillas mejoradas y técnicas científicas. Un solo agricultor produce hoy lo que antes necesitaba a decenas de personas. Muchos campesinos emigraron a las ciudades a trabajar en la industria y los servicios.",
  },
  bloques: [
    {
      html: `<h3>Las actividades del sector primario</h3><p>El <b>sector primario</b> obtiene recursos directamente de la naturaleza. Incluye la <mark>agricultura</mark> (cultivo de plantas), la <mark>ganadería</mark> (cría de animales), la <mark>pesca</mark> y la acuicultura, y la <mark>explotación forestal</mark> (aprovechamiento de los bosques: madera, corcho, resina). Aunque da poco empleo en los países ricos, es esencial: nos alimenta y proporciona materias primas a la industria.</p>`,
      svg: rueda("Actividades del sector primario", "PRIMARIO", [["agricultura", "var(--leaf)"], ["ganadería", "var(--sun)"], ["pesca", "var(--inf)"], ["forestal", "var(--ink)"]], "var(--leaf)"),
    },
    {
      html: `<h3>El paisaje agrario</h3><p>El <b>paisaje agrario</b> es el espacio transformado por la agricultura y la ganadería. Sus elementos son las <mark>parcelas</mark> (cada trozo de terreno cultivado), que pueden ser grandes o pequeñas, y estar <b>abiertas</b> o <b>cerradas</b> (con setos o muros); el tipo de <b>cultivo</b> (de secano, que depende de la lluvia, o de <b>regadío</b>, que recibe agua artificial); y el <b>poblamiento</b>, que puede ser <b>concentrado</b> en pueblos o <b>disperso</b> en casas aisladas.</p>`,
      svg: filas("Elementos del paisaje agrario", [["Parcelas", "grandes o pequeñas", "var(--leaf)"], ["Cierre", "openfield o cercado", "var(--sun)"], ["Agua", "secano o regadío", "var(--inf)"], ["Poblamiento", "concentrado o disperso", "var(--red)"]]),
    },
    {
      html: `<h3>Agricultura tradicional y de mercado</h3><p>La <mark>agricultura tradicional</mark> o de subsistencia produce para el consumo de la propia familia, con poca tecnología y mucho trabajo humano; predomina en zonas pobres de África, Asia y América Latina. La <mark>agricultura de mercado</mark> produce para vender, con grandes inversiones, máquinas, abonos y riego; busca el máximo rendimiento y se especializa en pocos cultivos. Es la de Europa, Estados Unidos o Australia.</p>`,
      svg: dos("Agricultura tradicional frente a agricultura de mercado", ["Tradicional", ["para la familia", "poca técnica", "mucha mano", "de obra", "policultivo"], "var(--sun)"], ["De mercado", ["para vender", "máquinas y riego", "poca mano", "de obra", "monocultivo"], "var(--pen)"]),
    },
    {
      html: `<h3>La ganadería</h3><p>La <b>ganadería</b> cría animales para obtener carne, leche, huevos, lana o piel. La <mark>extensiva</mark> deja a los animales pastar libremente en grandes espacios, como el cerdo ibérico en la dehesa o las vacas en los prados del norte. La <mark>intensiva</mark> los cría en granjas cerradas, con piensos y mucha tecnología, para producir mucho en poco espacio: pollos, cerdos o vacas lecheras. España es el primer productor de carne de cerdo de la Unión Europea.</p>`,
      svg: dos("Ganadería extensiva frente a intensiva", ["Extensiva", ["al aire libre", "pastos naturales", "pocos animales", "por hectárea", "ej.: dehesa"], "var(--leaf)"], ["Intensiva", ["en granjas", "con piensos", "muchos animales", "en poco espacio", "ej.: pollos"], "var(--red)"]),
    },
    {
      html: `<h3>La pesca y la explotación forestal</h3><p>La <b>pesca</b> puede ser <b>de bajura</b>, cerca de la costa en barcos pequeños, o <b>de altura</b> y gran altura, lejos, en grandes barcos congeladores. La <mark>acuicultura</mark> cría peces y mariscos en piscifactorías o bateas, como los mejillones de Galicia. La <b>explotación forestal</b> obtiene madera, papel, corcho o resina; para que sea sostenible hay que <b>repoblar</b> lo que se corta.</p>`,
      svg: filas("España en el sector primario: algunos puestos destacados", [["Aceite", "1.º productor del mundo", "var(--leaf)"], ["Porcino", "1.º productor de la UE", "var(--red)"], ["Corcho", "2.º productor del mundo", "var(--sun)"], ["Pesca", "mayor flota de la UE", "var(--inf)"]]),
    },
  ],
  figura: {
    titulo: "Paisajes agrarios del mundo",
    svg: figCols("Paisajes agrarios tradicionales y de mercado del mundo", [
      ["Itinerante", ["selva tropical", "se quema y cultiva", "luego se abandona", "África, Amazonia"], "var(--sun)"],
      ["Arrozal asiático", ["arroz de regadío", "en terrazas", "mucha mano de obra", "India, China"], "var(--leaf)"],
      ["Plantación", ["un solo cultivo", "café, cacao, caña", "para exportar", "América, África"], "var(--red)"],
      ["Mercado", ["muy mecanizada", "grandes parcelas", "cereal o soja", "EE. UU., Europa"], "var(--pen)"],
    ]),
  },
  video: { id: "wps2q-aU0Y4", titulo: "El sector primario: resumen completo en 12 minutos", canal: "La cuna de Halicarnaso", vistas: 174099, megusta: 0, busqueda: "sector primario agricultura ganadería pesca" },
  quiz: [
    { q: "¿Qué actividad NO es del sector primario?", o: ["Pesca", "Explotación forestal", "Fabricación de muebles"], a: 2, e: "Transformar la madera es industria." },
    { q: "Un cultivo que solo recibe el agua de la lluvia es de…", o: ["regadío", "secano", "invernadero"], a: 1, e: "El trigo y el olivo suelen ser de secano." },
    { q: "La agricultura de subsistencia produce…", o: ["para exportar", "para la propia familia", "solo flores"], a: 1, e: "Con poca tecnología." },
    { q: "Criar pollos en naves con pienso es ganadería…", o: ["extensiva", "intensiva", "trashumante"], a: 1, e: "Muchos animales en poco espacio." },
    { q: "Criar mejillones en bateas es…", o: ["acuicultura", "pesca de altura", "silvicultura"], a: 0, e: "Cultivo de especies acuáticas." },
  ],
  examen: [
    { q: "El poblamiento en casas aisladas se llama…", o: ["concentrado", "disperso", "urbano"], a: 1, e: "Típico de Galicia y Asturias." },
    { q: "La agricultura de mercado tiende al…", o: ["policultivo", "monocultivo", "autoconsumo"], a: 1, e: "Se especializa en lo más rentable." },
    { q: "Para que la explotación forestal sea sostenible hay que…", o: ["cortar todo", "repoblar lo que se corta", "quemar el bosque"], a: 1, e: "Así el bosque se renueva." },
  ],
  feynman: ["Qué actividades forman el sector primario", "Qué elementos tiene un paisaje agrario", "Qué diferencia la agricultura tradicional de la de mercado", "Por qué hay que cuidar los recursos pesqueros"],
  mapa: mapa("SECTOR PRIMARIO", "var(--leaf)", [
    ["Agricultura", "secano · regadío", "var(--leaf)"],
    ["Ganadería", "extensiva · intensiva", "var(--sun)"],
    ["Pesca", "bajura · altura · acuicultura", "var(--inf)"],
    ["Forestal", "madera · corcho · repoblar", "var(--ink)"],
  ], 260),
  tarjetas: [
    ["Regadío", "Cultivo que recibe agua artificialmente."],
    ["Agricultura de mercado", "Produce para vender, con máquinas y alta inversión."],
    ["Ganadería extensiva", "Animales que pastan libres en grandes espacios."],
    ["Acuicultura", "Cría de peces y mariscos en piscifactorías o bateas."],
    ["Poblamiento disperso", "Casas aisladas repartidas por el campo."],
  ],
  familias: ["En la compra, mirad el origen de la fruta y la verdura y buscad cuáles son de temporada.", "Si podéis, visitad un mercado o una granja y preguntad cómo trabajan.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: el sector primario, los paisajes agrarios, los sistemas agrarios del mundo y los retos de la sostenibilidad y la soberanía alimentaria (RD 217/2022, Geografía e Historia 3º).",
    ideas: ["Interpretar una fotografía aérea de un paisaje agrario.", "Investigar la PAC y su efecto en un producto de la comarca.", "Calcular la huella hídrica de varios alimentos."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ministerio de Agricultura, Pesca y Alimentación: estadísticas", url: "https://www.mapa.gob.es/es/estadistica/temas/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar los cambios recientes del campo y sus problemas", "Conocer el sector primario español y la Política Agraria Común"],
  bloques: [
    { tras: "Agricultura tradicional y de mercado", html: `<h3>La revolución verde y la agricultura actual</h3><p>Desde 1960, la <mark>revolución verde</mark> aumentó mucho la producción en Asia y América Latina gracias a semillas de alto rendimiento, abonos químicos, pesticidas y riego. Evitó hambrunas, pero tuvo costes: contaminación de suelos y aguas, pérdida de variedades locales y endeudamiento de pequeños campesinos. Hoy la agricultura avanza en dos direcciones. Por un lado, la <b>agricultura de precisión</b> usa drones, sensores y GPS para regar y abonar solo donde hace falta. Por otro, la <b>agricultura ecológica</b> prescinde de productos químicos de síntesis y respeta los ciclos naturales; España es el país europeo con más hectáreas de cultivo ecológico. También se debate sobre los <b>transgénicos</b>, plantas con genes modificados.</p>` },
    { tras: "La ganadería", html: `<h3>Los problemas del mundo rural</h3><p>El campo afronta grandes retos. En los países desarrollados, el <mark>éxodo rural</mark> ha vaciado muchos pueblos, que hoy tienen pocos habitantes y muy envejecidos. Los agricultores se quejan de los <b>bajos precios</b> que reciben, mientras los alimentos se encarecen al pasar por intermediarios y supermercados. La <b>ganadería intensiva</b> genera purines que contaminan acuíferos y emite gases de efecto invernadero. Además, la <b>sequía</b> y el cambio climático amenazan muchos cultivos. En los países pobres, el problema es el <b>hambre</b>: unos 700 millones de personas no comen lo suficiente, a menudo porque las mejores tierras se dedican a cultivos de exportación.</p>`, video: { id: "0or-GVxOp4A", titulo: "Paisajes agrarios del mundo actual", canal: "José María HerCal", vistas: 45625, megusta: 0 } },
    { tras: "La pesca y la explotación forestal", html: `<h3>La sobrepesca</h3><p>La flota mundial captura tantos peces que muchas especies no tienen tiempo de reproducirse: es la <mark>sobrepesca</mark>. Según la FAO, más de un tercio de las poblaciones de peces se pescan por encima de lo sostenible. Para evitarlo se fijan <b>cuotas</b> (cantidades máximas por especie), <b>tallas mínimas</b>, <b>vedas</b> (épocas en que no se puede pescar) y <b>reservas marinas</b>. Algunas artes de pesca, como el arrastre de fondo, dañan los fondos marinos. Cada país controla las <b>200 millas</b> de mar frente a su costa (la zona económica exclusiva); por eso las flotas lejanas, como muchas españolas, necesitan acuerdos con otros países para faenar en sus aguas.</p>` },
    { tras: "La pesca y la explotación forestal", html: `<h3>El sector primario en España</h3><p>Aunque da empleo a menos del 4 % de los trabajadores, el sector primario español es muy importante para la <b>exportación</b>. España es la «huerta de Europa»: exporta frutas y hortalizas de Almería, Murcia y Valencia, muchas cultivadas en <b>invernaderos</b>. Es el primer productor mundial de <mark>aceite de oliva</mark> (Jaén es la provincia olivarera más grande), un gran productor de vino y el primer productor de cerdo de la UE. Desde 1986 recibe ayudas de la <b>Política Agraria Común (PAC)</b> de la Unión Europea, que protege las rentas de los agricultores, fija normas de calidad y premia las prácticas respetuosas con el medio ambiente.</p>${tabla(["Paisaje agrario", "Dónde", "Rasgos"], [["Atlántico", "Galicia, Cantábrico", "prados, ganado vacuno, parcelas pequeñas cercadas"], ["Interior", "las dos Mesetas, valle del Ebro", "cereal, vid y olivo de secano; grandes parcelas"], ["Mediterráneo", "costa levantina, Andalucía", "huertas, cítricos, invernaderos de regadío"], ["Canario", "Canarias", "plátano, tomate y cultivos tropicales"]])}` },
  ],
  ejemplos: [
    { enunciado: "Una foto aérea muestra parcelas pequeñas rodeadas de setos, prados verdes, vacas y casas aisladas. ¿Qué paisaje agrario es?", pasos: ["Parcelas pequeñas y cerradas: típicas del norte.", "Prados y vacas: ganadería ligada a un clima lluvioso.", "Casas aisladas: poblamiento disperso."], resultado: "Paisaje agrario atlántico, como el de Galicia o Asturias." },
    { enunciado: "Un agricultor cultiva trigo en 200 hectáreas con un tractor y una cosechadora, y vende todo a una harinera. Clasifica su agricultura.", pasos: ["Produce para vender: agricultura de mercado.", "Usa máquinas: muy mecanizada.", "Un solo cultivo: monocultivo, probablemente de secano."], resultado: "Agricultura de mercado, mecanizada y de monocultivo." },
    { enunciado: "Explica por qué se fija una talla mínima para pescar merluza.", pasos: ["Los peces pequeños aún no se han reproducido.", "Si se pescan, la especie no se renueva.", "Con talla mínima, cada pez puede reproducirse al menos una vez."], resultado: "Para evitar la sobrepesca y que la especie se mantenga." },
  ],
  errores: [
    "Incluir la industria alimentaria (conservas, embutidos) en el sector primario: es sector secundario.",
    "Confundir secano (agua de lluvia) con regadío (agua artificial).",
    "Pensar que la ganadería extensiva es la que tiene más animales: es la intensiva.",
    "Creer que la pesca y la acuicultura son lo mismo.",
    "Pensar que el sector primario no importa porque da poco empleo.",
  ],
  ejercicios: [
    { q: "Nombra las cuatro actividades del sector primario.", sol: "Agricultura, ganadería, pesca (y acuicultura) y explotación forestal." },
    { q: "Explica los elementos del paisaje agrario.", sol: "Las parcelas (tamaño, forma, si están cerradas o abiertas), el tipo de cultivo (secano o regadío, policultivo o monocultivo) y el poblamiento (concentrado o disperso)." },
    { q: "Escribe tres diferencias entre la agricultura tradicional y la de mercado.", sol: "La tradicional produce para la familia, usa poca técnica y mucha mano de obra; la de mercado produce para vender, usa máquinas y mucha inversión y emplea a poca gente." },
    { q: "¿Qué es la agricultura itinerante?", sol: "La que se practica en la selva: se quema un trozo de bosque, se cultiva unos años y, cuando el suelo se agota, se abandona y se pasa a otro." },
    { q: "Pon un ejemplo de ganadería extensiva en España.", sol: "El cerdo ibérico en la dehesa extremeña o andaluza, o las vacas en los prados del norte." },
    { q: "¿Qué ventajas e inconvenientes tuvo la revolución verde?", sol: "Ventaja: mucha más producción, que evitó hambrunas. Inconvenientes: contaminación por abonos y pesticidas, pérdida de variedades locales y deudas de los pequeños campesinos." },
    { q: "¿Qué es la sobrepesca y cómo se combate?", sol: "Pescar más de lo que las especies pueden reponer. Se combate con cuotas, tallas mínimas, vedas y reservas marinas." },
    { q: "¿Qué es la PAC?", sol: "La Política Agraria Común de la Unión Europea: ayudas y normas para los agricultores y ganaderos." },
    { q: "Nombra tres productos agrarios de los que España es gran exportador.", sol: "Aceite de oliva, frutas y hortalizas (cítricos, tomates), vino y carne de cerdo." },
    { q: "¿Por qué se han despoblado muchos pueblos del interior?", sol: "Porque la mecanización del campo redujo el trabajo agrario y los jóvenes emigraron a las ciudades buscando empleo y servicios." },
  ],
  quiz: [
    { q: "España es el primer productor mundial de…", o: ["arroz", "aceite de oliva", "café"], a: 1, e: "Jaén es la gran provincia olivarera." },
    { q: "La zona económica exclusiva de un país llega hasta…", o: ["12 millas", "200 millas", "1.000 millas"], a: 1, e: "Allí controla la pesca." },
    { q: "Usar drones y sensores para regar solo donde hace falta es agricultura…", o: ["itinerante", "de precisión", "de subsistencia"], a: 1, e: "Ahorra agua y abonos." },
    { q: "Los invernaderos de Almería producen sobre todo…", o: ["cereales", "hortalizas", "corcho"], a: 1, e: "Para exportar a Europa." },
    { q: "La veda es…", o: ["una época en que no se puede pescar", "un barco", "un tipo de red"], a: 0, e: "Protege la reproducción." },
  ],
  tarjetas: [
    ["Revolución verde", "Aumento de la producción agraria desde 1960 con semillas mejoradas, abonos y riego."],
    ["Sobrepesca", "Pescar más de lo que las especies pueden reponer."],
    ["PAC", "Política Agraria Común de la UE."],
  ],
});
