// Geografía e Historia 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, barras, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "3-eso",
  titulo: "El sector terciario: servicios, comercio y turismo",
  minutos: 35,
  objetivos: ["Clasificar los servicios y explicar la terciarización de la economía", "Describir el comercio interior y exterior y los medios de transporte", "Analizar el turismo en el mundo y en España y su impacto"],
  claves: ["servicios", "terciarización", "comercio", "balanza comercial", "transporte", "turismo"],
  pregunta: {
    texto: "España, con 49 millones de habitantes, recibe cada año más de 90 millones de turistas extranjeros. ¿Qué supone eso para su economía… y para los vecinos de Barcelona, Málaga o Palma?",
    respuesta: "El <mark>turismo</mark> aporta más del 12 % del PIB y millones de empleos en hoteles, restaurantes, transportes o comercios. Pero, si se concentra demasiado, encarece la vivienda, satura calles y playas y consume mucha agua. El reto es un <b>turismo sostenible</b> que beneficie a todos.",
  },
  bloques: [
    {
      html: `<h3>Qué son los servicios</h3><p>El <b>sector terciario</b> no produce bienes materiales, sino <mark>servicios</mark>: actividades que satisfacen necesidades de personas y empresas. Es un sector muy variado: comercio, transporte, turismo, sanidad, educación, banca, administración, comunicación, ocio o informática. En los países desarrollados da trabajo a <b>tres de cada cuatro</b> personas: por eso se habla de <mark>terciarización</mark> de la economía.</p>`,
      svg: rueda("Ejemplos de servicios", "SERVICIOS", [["comercio", "var(--red)"], ["transporte", "var(--ink)"], ["turismo", "var(--sun)"], ["sanidad", "var(--leaf)"], ["educación", "var(--pen)"], ["banca", "var(--muted)"]], "var(--red)"),
    },
    {
      html: `<h3>Servicios públicos y privados</h3><p>Los <mark>servicios públicos</mark> los presta el Estado (o las comunidades y ayuntamientos) para todos, y se pagan con impuestos: sanidad pública, educación, justicia, policía, recogida de basuras. Los <mark>servicios privados</mark> los ofrecen empresas que buscan beneficio: tiendas, bancos, hoteles, gimnasios. Otra forma de clasificarlos es por su destinatario: a las <b>personas</b> (peluquería, ocio) o a las <b>empresas</b> (publicidad, asesoría, informática).</p>`,
      svg: dos("Servicios públicos y privados", ["Públicos", ["los da el Estado", "con impuestos", "para todos", "ej.: hospital", "y colegio públicos"], "var(--pen)"], ["Privados", ["los dan empresas", "con beneficio", "pagan los clientes", "ej.: tienda,", "hotel, gimnasio"], "var(--red)"]),
    },
    {
      html: `<h3>El comercio</h3><p>El <b>comercio</b> es la compra y venta de bienes y servicios. El <mark>comercio interior</mark> se hace dentro de un país: al por mayor (de fabricantes a tiendas) y al por menor (de tiendas a consumidores), en mercados, supermercados, centros comerciales y, cada vez más, por <b>internet</b>. El <mark>comercio exterior</mark> se hace entre países: las <b>exportaciones</b> son ventas al extranjero y las <b>importaciones</b>, compras. La diferencia entre ambas es la <b>balanza comercial</b>.</p>`,
      svg: filas("Formas de comercio", [["Interior", "dentro del país", "var(--pen)"], ["Mayorista", "del fabricante a la tienda", "var(--ink)"], ["Minorista", "de la tienda al cliente", "var(--leaf)"], ["Exterior", "exportar e importar", "var(--red)"], ["Online", "compra por internet", "var(--sun)"]]),
    },
    {
      html: `<h3>El transporte</h3><p>El <b>transporte</b> lleva personas y mercancías de un lugar a otro y es imprescindible para el comercio. El <mark>terrestre</mark> (carretera y ferrocarril) es el más usado dentro de los países; el <b>tren de alta velocidad</b> compite con el avión en distancias medias. El <mark>marítimo</mark> transporta la mayor parte del comercio mundial en barcos portacontenedores. El <mark>aéreo</mark> es rápido pero caro y contaminante; se usa para viajeros y mercancías valiosas o perecederas.</p>`,
      svg: barras("Parte del comercio mundial que viaja en cada medio, en volumen", [["barco", 80, "var(--inf)", "≈ 80 %"], ["carretera", 10, "var(--sun)", "≈ 10 %"], ["tren", 5, "var(--ink)", "≈ 5 %"], ["avión", 1, "var(--red)", "< 1 %"]], 95),
    },
    {
      html: `<h3>El turismo</h3><p>El <b>turismo</b> son los viajes por ocio, cultura, negocios o salud fuera del lugar de residencia. Creció mucho desde 1960 gracias a las vacaciones pagadas, el coche y los vuelos baratos. Hay muchos tipos: de <mark>sol y playa</mark>, cultural, de naturaleza, rural, de nieve, gastronómico, de negocios y congresos o religioso. Francia, España y Estados Unidos son los países que más turistas internacionales reciben.</p>`,
      svg: barras("Turistas internacionales en 2024, en millones", [["Francia", 100, "var(--pen)", "100"], ["España", 94, "var(--red)", "94"], ["EE. UU.", 72, "var(--ink)", "72"], ["Italia", 58, "var(--leaf)", "58"], ["Turquía", 52, "var(--sun)", "52"]], 115),
    },
  ],
  figura: {
    titulo: "Los grandes grupos de servicios",
    svg: figCols("Servicios de distribución, sociales, a empresas y de ocio", [
      ["Distribución", ["comercio", "transporte", "comunicaciones", "logística"], "var(--red)"],
      ["Sociales", ["sanidad", "educación", "servicios sociales", "administración"], "var(--leaf)"],
      ["A empresas", ["banca y seguros", "publicidad", "asesoría", "informática"], "var(--pen)"],
      ["Ocio", ["turismo", "hostelería", "cultura", "deporte"], "var(--sun)"],
    ]),
  },
  video: { id: "C8PiTSfASEY", titulo: "Sector terciario de la economía", canal: "Flex Flix Teens en Español", vistas: 313793, megusta: 0, busqueda: "sector terciario servicios" },
  quiz: [
    { q: "¿Qué es un servicio?", o: ["Un objeto fabricado", "Una actividad que satisface una necesidad", "Una materia prima"], a: 1, e: "Como una clase o un viaje en autobús." },
    { q: "La terciarización es…", o: ["el aumento del peso de los servicios", "el regreso al campo", "la industrialización"], a: 0, e: "Tres de cada cuatro empleos en países ricos." },
    { q: "Vender aceite a Japón es para España una…", o: ["importación", "exportación", "venta interior"], a: 1, e: "Exportar es vender al extranjero." },
    { q: "La mayor parte del comercio mundial viaja en…", o: ["avión", "barco", "tren"], a: 1, e: "En grandes portacontenedores." },
    { q: "¿Qué país recibe más turistas internacionales?", o: ["España", "Francia", "Italia"], a: 1, e: "España es la segunda." },
  ],
  examen: [
    { q: "Un hospital público es un servicio…", o: ["privado", "público", "industrial"], a: 1, e: "Se paga con impuestos." },
    { q: "La balanza comercial compara…", o: ["exportaciones e importaciones", "ingresos y gastos del Estado", "turistas y habitantes"], a: 0, e: "Si se exporta más, tiene superávit." },
    { q: "El transporte aéreo es…", o: ["barato y lento", "rápido pero caro y contaminante", "el que más mercancías mueve"], a: 1, e: "Se usa para viajeros y mercancías urgentes." },
  ],
  feynman: ["Qué son los servicios y por qué crecen", "Qué diferencia hay entre servicios públicos y privados", "Cómo funciona el comercio exterior", "Qué ventajas e inconvenientes tiene el turismo"],
  mapa: mapa("SECTOR TERCIARIO", "var(--red)", [
    ["Servicios", "públicos · privados", "var(--pen)"],
    ["Comercio", "interior · exterior · online", "var(--red)"],
    ["Transporte", "tierra · mar · aire", "var(--ink)"],
    ["Turismo", "tipos · impacto", "var(--sun)"],
  ], 260),
  tarjetas: [
    ["Terciarización", "Aumento del peso de los servicios en el empleo y la economía."],
    ["Servicio público", "El que presta el Estado para todos y se paga con impuestos."],
    ["Exportación", "Venta de bienes o servicios a otro país."],
    ["Balanza comercial", "Diferencia entre exportaciones e importaciones."],
    ["Turismo de sol y playa", "El tipo de turismo más importante en España."],
  ],
  familias: ["Enumerad los servicios que ha usado la familia en un día y separadlos en públicos y privados.", "Si habéis viajado, comentad qué tipo de turismo hicisteis y qué impacto tuvo en el lugar.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: el sector servicios, el comercio, las redes de transporte y el turismo; sostenibilidad y consumo responsable (RD 217/2022, Geografía e Historia 3º).",
    ideas: ["Mapa de la red de alta velocidad española y tiempos de viaje.", "Estudio del impacto del turismo en una ciudad con datos del INE.", "Diseñar un folleto de turismo sostenible para la propia comarca."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "ONU Turismo: barómetro del turismo mundial", url: "https://www.unwto.org/es/barometro-turismo-mundial-onu-turismo" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Calcular la balanza comercial y explicar los flujos del comercio mundial", "Valorar el turismo sostenible y el comercio justo"],
  bloques: [
    { tras: "Servicios públicos y privados", html: `<h3>Por qué crecen los servicios</h3><p>La <b>terciarización</b> tiene varias causas. Al subir el nivel de vida, las familias gastan más en <b>ocio</b>, viajes, restaurantes y cultura. El <b>Estado del bienestar</b> ofrece sanidad, educación, pensiones y servicios sociales a toda la población. El <b>envejecimiento</b> aumenta la demanda de cuidados y atención médica. Las empresas contratan cada vez más servicios externos: limpieza, publicidad, informática. Y la <mark>revolución digital</mark> ha creado empleos nuevos, como programadores, diseñadores web, analistas de datos o creadores de contenido. En España, los servicios suponen alrededor del 75 % del empleo y del PIB.</p>` },
    { tras: "El comercio", html: `<h3>El comercio internacional</h3><p>El comercio entre países ha crecido muchísimo con la globalización. La <mark>Organización Mundial del Comercio (OMC)</mark> fija las reglas y busca reducir los <b>aranceles</b>, los impuestos sobre los productos importados. Los países también forman <b>áreas de libre comercio</b> o uniones, como la Unión Europea. Los grandes flujos comerciales unen <b>Asia oriental</b> (China, Japón, Corea), <b>Norteamérica</b> y <b>Europa</b>. Los países ricos exportan sobre todo productos industriales y servicios de alto valor, mientras que muchos países pobres exportan materias primas baratas, lo que crea un <b>intercambio desigual</b>. El <b>comercio justo</b> intenta corregirlo pagando precios dignos a los pequeños productores.</p>`, video: { id: "hMGGfDjAbHw", titulo: "¿Cómo funciona el comercio internacional?", canal: "INCEA Comercio y Aduanas", vistas: 469020, megusta: 0 } },
    { tras: "El transporte", html: `<h3>Las redes de transporte en España</h3><p>España tiene una red de <b>autovías y autopistas</b> de más de 17.000 km, de las mayores de Europa, con un diseño radial desde Madrid. Su red de <mark>alta velocidad ferroviaria</mark> (AVE), con más de 4.000 km, es la más larga de Europa y la segunda del mundo tras China. Los grandes <b>aeropuertos</b> son Madrid-Barajas y Barcelona-El Prat, y los de las islas y la costa reciben millones de turistas. Los principales <b>puertos</b> de mercancías son Algeciras, Valencia y Barcelona. Uno de los retos es completar los <b>corredores</b> ferroviarios del Mediterráneo y del Atlántico para llevar mercancías en tren hasta Europa y contaminar menos.</p>` },
    { tras: "El turismo", html: `<h3>El turismo en España y sus impactos</h3><p>España es una gran potencia turística por su clima, sus playas, su patrimonio (es de los países con más bienes Patrimonio de la Humanidad), su gastronomía y su seguridad. Los turistas se concentran en <b>Cataluña</b>, <b>Baleares</b>, <b>Canarias</b>, <b>Andalucía</b>, la <b>Comunidad Valenciana</b> y <b>Madrid</b>, y vienen sobre todo del Reino Unido, Francia y Alemania. <b>Impactos positivos</b>: empleo, ingresos, conservación del patrimonio. <b>Impactos negativos</b>: empleo temporal y mal pagado, subida del precio de la vivienda por los pisos turísticos, masificación, consumo de agua y construcción en la costa. El <mark>turismo sostenible</mark> busca repartir los visitantes en el tiempo y el espacio, proteger el entorno y beneficiar a la población local.</p>`, video: { id: "27DRW0mz6eM", titulo: "Ciencia animada: turismo sostenible", canal: "Universitat de Barcelona", vistas: 46305, megusta: 0 } },
  ],
  ejemplos: [
    { enunciado: "Un país exporta por valor de 380.000 millones de euros e importa por valor de 420.000 millones. Calcula su balanza comercial y di si tiene superávit o déficit.", pasos: ["Balanza comercial = exportaciones − importaciones.", "380.000 − 420.000 = −40.000 millones.", "El resultado es negativo: compra más de lo que vende."], resultado: "Déficit comercial de 40.000 millones de euros." },
    { enunciado: "Elige el mejor medio de transporte: a) 20.000 toneladas de soja de Brasil a España; b) un órgano para un trasplante de Sevilla a Barcelona; c) un viaje de negocios Madrid–Valencia.", pasos: ["Mercancía pesada, barata y sin prisa a otro continente: barco.", "Carga muy valiosa y urgente: avión.", "Viajeros en distancia media: tren de alta velocidad."], resultado: "a) barco, b) avión, c) AVE." },
    { enunciado: "Una isla recibe 10 veces más turistas que habitantes en verano. Señala dos problemas y dos soluciones.", pasos: ["Problemas: falta de agua y masificación de playas y calles; subida del precio de la vivienda.", "Soluciones: limitar plazas o pisos turísticos y una tasa turística para financiar servicios.", "También: promocionar la temporada baja y el turismo de naturaleza."], resultado: "Limitar y repartir la llegada de turistas y financiar los servicios con una tasa." },
  ],
  errores: [
    "Confundir exportación (vender fuera) con importación (comprar fuera).",
    "Pensar que todo el sector terciario es privado: la sanidad o la educación públicas también son servicios.",
    "Creer que el avión transporta la mayor parte del comercio: es el barco.",
    "Pensar que el turismo solo tiene efectos positivos.",
    "Incluir la fabricación de un ordenador en el sector terciario: eso es industria; reparar o programar sí son servicios.",
  ],
  ejercicios: [
    { q: "¿Qué es la terciarización y por qué se produce?", sol: "El aumento del peso de los servicios en la economía. Se debe al mayor nivel de vida, al Estado del bienestar, al envejecimiento y a la revolución digital." },
    { q: "Clasifica en públicos o privados: comisaría, peluquería, biblioteca municipal, banco, centro de salud.", sol: "Públicos: comisaría, biblioteca municipal, centro de salud. Privados: peluquería, banco." },
    { q: "Explica la diferencia entre comercio mayorista y minorista.", sol: "El mayorista compra grandes cantidades al fabricante y las vende a las tiendas; el minorista vende a los consumidores en pequeñas cantidades." },
    { q: "Si un país exporta 50 y importa 30 (miles de millones), ¿qué balanza tiene?", sol: "50 − 30 = +20: superávit comercial." },
    { q: "¿Qué es un arancel?", sol: "Un impuesto que se cobra a los productos que entran desde otro país." },
    { q: "¿Qué ventajas tiene el transporte marítimo y cuál es su inconveniente?", sol: "Ventajas: puede llevar enormes cantidades a bajo coste y largas distancias. Inconveniente: es lento." },
    { q: "Cita cinco tipos de turismo.", sol: "Sol y playa, cultural, rural, de naturaleza, de nieve, gastronómico, de negocios, religioso o de salud." },
    { q: "¿Por qué España es una potencia turística?", sol: "Por su clima, sus playas, su patrimonio histórico y artístico, su gastronomía, su seguridad y su cercanía a los países europeos." },
    { q: "Escribe dos impactos negativos del turismo masivo.", sol: "Por ejemplo: subida del precio de la vivienda por los pisos turísticos y masificación con consumo excesivo de agua." },
    { q: "¿Qué es el comercio justo?", sol: "Un sistema que paga precios dignos a pequeños productores de países pobres y respeta sus derechos laborales y el medio ambiente." },
  ],
  quiz: [
    { q: "La OMC se ocupa de…", o: ["la salud", "las reglas del comercio mundial", "el turismo"], a: 1, e: "Organización Mundial del Comercio." },
    { q: "La red de alta velocidad de España es…", o: ["la más larga de Europa", "la más corta de Europa", "solo de mercancías"], a: 0, e: "Más de 4.000 km." },
    { q: "El principal puerto de mercancías de España es…", o: ["Algeciras o Valencia", "Bilbao", "Santander"], a: 0, e: "Compiten por el primer puesto." },
    { q: "Exportar 20 e importar 25 da una balanza…", o: ["positiva", "negativa", "nula"], a: 1, e: "Déficit de 5." },
    { q: "Los pisos turísticos pueden provocar…", o: ["que baje el precio de la vivienda", "que suba el precio del alquiler", "más industria"], a: 1, e: "Hay menos viviendas para los vecinos." },
  ],
  tarjetas: [
    ["Arancel", "Impuesto sobre los productos importados."],
    ["Comercio justo", "Comercio que paga precios dignos a pequeños productores."],
    ["Turismo sostenible", "Turismo que protege el entorno y beneficia a la población local."],
  ],
});
