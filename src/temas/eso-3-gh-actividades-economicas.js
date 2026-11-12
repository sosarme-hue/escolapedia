// Geografía e Historia 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, flujo, barras, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "3-eso",
  titulo: "Las actividades económicas",
  minutos: 35,
  objetivos: ["Explicar qué es la economía y cuáles son los factores de producción", "Clasificar las actividades en sectores económicos", "Distinguir sistemas económicos y describir la globalización"],
  claves: ["economía", "factores de producción", "sectores económicos", "población activa", "mercado", "globalización"],
  pregunta: {
    texto: "Tu móvil se diseñó en Estados Unidos, sus minerales se extrajeron en África, se montó en China y lo compraste en una tienda de tu ciudad. ¿Cuántos trabajos distintos hay detrás de él?",
    respuesta: "Cientos: mineros, ingenieros, obreros de fábrica, transportistas, publicistas, vendedores… Cada uno pertenece a un <mark>sector económico</mark> distinto, y todos están conectados en una red mundial. Esa interdependencia entre países es la <b>globalización</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la economía?</h3><p>Las personas tenemos <b>necesidades</b> (comer, vestir, aprender, divertirnos) y las cubrimos con <b>bienes</b> (cosas materiales, como el pan) y <b>servicios</b> (actividades, como una clase o una consulta médica). Pero los recursos son <mark>escasos</mark>: no hay de todo para todos. La <b>economía</b> estudia cómo se producen, se distribuyen y se consumen los bienes y servicios. Los <b>agentes económicos</b> son las familias, las empresas y el Estado.</p>`,
      svg: rueda("Los agentes económicos: familias que consumen, empresas que producen y Estado que regula, unidos por el mercado", "ECONOMÍA", [["familias", "var(--pen)"], ["empresas", "var(--red)"], ["Estado", "var(--leaf)"], ["mercado", "var(--sun)"]], "var(--ink)"),
    },
    {
      html: `<h3>Los factores de producción</h3><p>Para producir se necesitan <b>factores de producción</b>. Los <mark>recursos naturales</mark> (tierra, agua, minerales, energía). El <mark>trabajo</mark>, el esfuerzo físico e intelectual de las personas. El <mark>capital</mark>: el dinero, las máquinas, los edificios y las herramientas. Hoy se añade un cuarto: la <b>tecnología</b> y el conocimiento, y la capacidad de organizar todo esto, que aporta el empresario.</p>`,
      svg: filas("Los factores de producción", [["Naturales", "tierra · agua · minerales", "var(--leaf)"], ["Trabajo", "esfuerzo de las personas", "var(--pen)"], ["Capital", "dinero · máquinas · edificios", "var(--red)"], ["Tecnología", "conocimiento e innovación", "var(--sun)"]]),
    },
    {
      html: `<h3>Los sectores económicos</h3><p>Las actividades se agrupan en sectores. El <mark>sector primario</mark> obtiene recursos de la naturaleza: agricultura, ganadería, pesca, explotación forestal. El <mark>secundario</mark> los transforma: industria, construcción, energía y minería. El <mark>terciario</mark> ofrece servicios: comercio, transporte, sanidad, educación, turismo. A veces se habla de un <b>sector cuaternario</b>, dedicado a la información, la investigación y la tecnología.</p>`,
      svg: flujo("Del trigo al pan: un ejemplo de los tres sectores", ["cultivar|trigo", "harina y|panadería", "vender en|la tienda"], "var(--sun)"),
    },
    {
      html: `<h3>La población activa</h3><p>La <b>población activa</b> son las personas de 16 años o más que trabajan (<b>ocupadas</b>) o que buscan trabajo (<b>paradas</b>). La <b>inactiva</b> no trabaja ni lo busca: estudiantes, jubilados, personas que cuidan del hogar. La <mark>tasa de paro</mark> es el porcentaje de parados sobre la población activa. En los países desarrollados, la mayoría de los ocupados trabaja en los servicios.</p>`,
      svg: barras("Ocupados por sector en España, en porcentaje", [["primario", 4, "var(--leaf)", "4 %"], ["industria", 14, "var(--pen)", "14 %"], ["construcción", 7, "var(--sun)", "7 %"], ["servicios", 75, "var(--red)", "75 %"]], 90),
    },
    {
      html: `<h3>Los sistemas económicos</h3><p>Cada sociedad decide qué, cómo y para quién producir. En la <mark>economía de mercado</mark> (capitalismo) deciden las empresas y los consumidores, y los precios dependen de la oferta y la demanda. En la <mark>economía planificada</mark> (como la de la antigua URSS) decide el Estado, dueño de las empresas. Hoy casi todos los países tienen una <b>economía mixta</b>: mercado libre, pero con un Estado que regula y presta servicios públicos.</p>`,
      svg: dos("Economía de mercado frente a economía planificada", ["Mercado", ["empresas privadas", "oferta y demanda", "competencia", "precios libres", "ej.: EE. UU."], "var(--pen)"], ["Planificada", ["empresas del Estado", "plan del gobierno", "sin competencia", "precios fijados", "ej.: la URSS"], "var(--red)"]),
    },
  ],
  figura: {
    titulo: "Los sectores de la economía",
    svg: figCols("Sector primario, secundario, terciario y cuaternario con ejemplos", [
      ["Primario", ["agricultura", "ganadería", "pesca", "silvicultura"], "var(--leaf)"],
      ["Secundario", ["industria", "construcción", "energía", "minería"], "var(--pen)"],
      ["Terciario", ["comercio", "transporte", "sanidad", "turismo"], "var(--red)"],
      ["Cuaternario", ["investigación", "informática", "datos", "innovación"], "var(--sun)"],
    ]),
  },
  video: { id: "dRjzjihvTpw", titulo: "¿Qué son las actividades económicas? Sector primario, secundario y terciario", canal: "GeografiAndo", vistas: 417823, megusta: 0, busqueda: "sectores económicos primario secundario terciario" },
  quiz: [
    { q: "Una consulta médica es…", o: ["un bien", "un servicio", "un factor de producción"], a: 1, e: "Es una actividad, no un objeto." },
    { q: "¿Qué factor de producción es una fábrica?", o: ["Recurso natural", "Trabajo", "Capital"], a: 2, e: "Edificios y máquinas son capital." },
    { q: "La construcción pertenece al sector…", o: ["primario", "secundario", "terciario"], a: 1, e: "Transforma materiales." },
    { q: "¿Quién forma parte de la población activa?", o: ["Un jubilado", "Una persona en paro que busca empleo", "Un estudiante de 3º ESO"], a: 1, e: "Activos = ocupados + parados." },
    { q: "En la economía de mercado, los precios dependen de…", o: ["el gobierno", "la oferta y la demanda", "el azar"], a: 1, e: "Si hay mucha demanda y poca oferta, sube el precio." },
  ],
  examen: [
    { q: "La economía estudia cómo se usan unos recursos…", o: ["ilimitados", "escasos", "gratuitos"], a: 1, e: "Por eso hay que elegir." },
    { q: "La tasa de paro se calcula sobre…", o: ["toda la población", "la población activa", "la población inactiva"], a: 1, e: "Parados / activos × 100." },
    { q: "La mayoría de los países tiene hoy una economía…", o: ["planificada", "mixta", "de subsistencia"], a: 1, e: "Mercado con un Estado que regula." },
  ],
  feynman: ["Qué diferencia hay entre bienes y servicios", "Cuáles son los factores de producción", "A qué sector pertenece cada trabajo", "Qué es la globalización y cómo nos afecta"],
  mapa: mapa("ACTIVIDADES ECONÓMICAS", "var(--sun)", [
    ["Economía", "necesidades · bienes · servicios", "var(--ink)"],
    ["Factores", "naturaleza · trabajo · capital", "var(--leaf)"],
    ["Sectores", "primario · secundario · terciario", "var(--pen)"],
    ["Sistemas", "mercado · planificada · mixta", "var(--red)"],
  ], 280),
  tarjetas: [
    ["Bien económico", "Objeto material que satisface una necesidad."],
    ["Capital", "Dinero, máquinas y edificios usados para producir."],
    ["Sector terciario", "Actividades de servicios: comercio, transporte, sanidad, turismo."],
    ["Población activa", "Personas de 16 años o más que trabajan o buscan trabajo."],
    ["Economía mixta", "Mercado libre con un Estado que regula y presta servicios públicos."],
  ],
  familias: ["Haced una lista de los trabajos de la familia y clasificadlos por sectores.", "Mirad las etiquetas de cinco productos de casa y anotad dónde se fabricaron.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: las actividades económicas, los factores de producción, los sectores, el mercado de trabajo y la globalización (RD 217/2022, Geografía e Historia 3º).",
    ideas: ["Rastrear el recorrido de un producto cotidiano (camiseta, chocolate, móvil).", "Encuesta en clase sobre los trabajos de las familias y gráfico por sectores.", "Debate: ventajas e inconvenientes de la globalización."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "INE: Encuesta de Población Activa (EPA)", url: "https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736176918" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Calcular la tasa de actividad y la tasa de paro", "Explicar las causas y consecuencias de la globalización"],
  bloques: [
    { tras: "Los factores de producción", html: `<h3>Las empresas</h3><p>La <b>empresa</b> es la unidad que combina los factores de producción para producir bienes o servicios y obtener un <mark>beneficio</mark> (ingresos − costes). Se clasifican por su <b>tamaño</b>: microempresas (menos de 10 trabajadores), pequeñas, medianas (las <b>pymes</b>, que en España dan la mayor parte del empleo) y grandes. Por la <b>propiedad</b>, son <b>privadas</b> (de particulares), <b>públicas</b> (del Estado, como Correos) o mixtas. Y por su ámbito, locales, nacionales o <b>multinacionales</b>, con fábricas y oficinas en muchos países, como Inditex, Toyota o Apple.</p>`, video: { id: "z0A4angPNU8", titulo: "¿Qué son los factores de producción? Explicado fácil", canal: "Economipedia", vistas: 270707, megusta: 0 } },
    { tras: "La población activa", html: `<h3>Calcular las tasas del mercado de trabajo</h3><p>Hay dos tasas principales. La <mark>tasa de actividad</mark> = población activa / población de 16 años o más × 100: indica qué parte de la población en edad de trabajar quiere trabajar. La <mark>tasa de paro</mark> = parados / población activa × 100. En España, la tasa de paro ha sido alta durante décadas: llegó al 26 % en 2013 y ronda hoy el 10–11 %, una de las más altas de la Unión Europea. Afecta sobre todo a los <b>jóvenes</b> (más del 25 %) y a quienes tienen menos formación. Otros problemas del trabajo actual son la <b>temporalidad</b> (contratos cortos) y la brecha salarial entre hombres y mujeres.</p>${tabla(["Grupo", "Quiénes son"], [["Ocupados", "trabajan a cambio de un sueldo o por cuenta propia"], ["Parados", "no trabajan, pero buscan empleo activamente"], ["Inactivos", "estudiantes, jubilados, personas que no buscan empleo"]])}` },
    { tras: "Los sistemas económicos", html: `<h3>El mercado: oferta y demanda</h3><p>El <b>mercado</b> es cualquier lugar, físico o digital, donde se encuentran compradores y vendedores. La <mark>demanda</mark> es la cantidad que los consumidores quieren comprar; la <mark>oferta</mark>, la cantidad que los productores quieren vender. Si la demanda supera la oferta, el precio sube (como las entradas de un concierto muy esperado); si la oferta supera la demanda, el precio baja (como la fruta de temporada). El <b>Estado</b> interviene en el mercado: cobra <b>impuestos</b>, presta <b>servicios públicos</b> (sanidad, educación, pensiones), fija un salario mínimo y protege a los consumidores y la competencia.</p>` },
    { tras: "Los sistemas económicos", html: `<h3>La globalización</h3><p>La <mark>globalización</mark> es la creciente interdependencia entre las economías del mundo. Ha sido posible gracias a la mejora del <b>transporte</b> (barcos portacontenedores, aviones), las <b>tecnologías de la comunicación</b> (internet) y la eliminación de barreras al comercio. Las empresas multinacionales <b>deslocalizan</b> su producción: diseñan en un país, fabrican en otro con salarios más bajos y venden en todo el mundo. Ventajas: más comercio, productos más baratos, intercambio de ideas. Inconvenientes: cierre de fábricas en los países ricos, malas condiciones laborales en algunos países pobres, más contaminación por el transporte y crisis que se extienden rápido de un país a otro, como la de 2008.</p>` },
  ],
  ejemplos: [
    { enunciado: "Un país tiene 30 millones de personas de 16 años o más; 18 millones son activos y, de ellos, 2,7 millones están en paro. Calcula la tasa de actividad y la tasa de paro.", pasos: ["Tasa de actividad = 18 / 30 × 100 = 60 %.", "Tasa de paro = 2,7 / 18 × 100 = 15 %."], resultado: "Actividad del 60 % y paro del 15 %." },
    { enunciado: "Clasifica por sectores: pescador, enfermera, albañil, programadora de videojuegos, minero, conductor de autobús.", pasos: ["Obtiene recursos de la naturaleza: pescador (primario).", "Transforma o construye: albañil y minero (secundario).", "Ofrece servicios: enfermera y conductor (terciario).", "Información y tecnología: programadora (terciario o cuaternario)."], resultado: "Primario: pescador. Secundario: albañil, minero. Terciario: enfermera, conductor, programadora." },
    { enunciado: "En verano sube mucho el precio de los hoteles en la costa. Explícalo con la oferta y la demanda.", pasos: ["En verano muchísimas personas quieren alojarse en la costa: la demanda aumenta.", "El número de habitaciones (oferta) es casi el mismo.", "Con más demanda que oferta, el precio sube."], resultado: "La subida de la demanda con una oferta fija hace subir los precios." },
  ],
  errores: [
    "Incluir a los estudiantes o jubilados en la población activa.",
    "Calcular la tasa de paro sobre toda la población en lugar de sobre los activos.",
    "Pensar que la minería es sector primario: en España se suele incluir en el secundario, con la industria y la energía.",
    "Confundir bien (objeto) con servicio (actividad).",
    "Creer que la globalización solo tiene efectos positivos o solo negativos.",
  ],
  ejercicios: [
    { q: "Pon dos ejemplos de bienes y dos de servicios que hayas usado hoy.", sol: "Bienes: el desayuno, la ropa. Servicios: el autobús escolar, la clase del profesor." },
    { q: "¿Cuáles son los factores de producción? Pon un ejemplo de cada uno en una panadería.", sol: "Recursos naturales: harina, agua. Trabajo: el panadero. Capital: el horno y el local. Tecnología: las recetas y la maquinaria moderna." },
    { q: "¿Qué es el beneficio de una empresa?", sol: "La diferencia entre lo que ingresa por sus ventas y lo que le cuesta producir." },
    { q: "Clasifica: agricultor, fábrica de coches, banco, central solar, guía turístico.", sol: "Agricultor: primario. Fábrica de coches y central solar: secundario. Banco y guía turístico: terciario." },
    { q: "Calcula la tasa de paro si hay 500 parados y 4.000 activos.", sol: "500 / 4.000 × 100 = 12,5 %." },
    { q: "¿Por qué en los países ricos la mayoría trabaja en los servicios?", sol: "Porque la agricultura y la industria están muy mecanizadas y necesitan poca mano de obra, y la población demanda muchos servicios: sanidad, educación, ocio, comercio." },
    { q: "Explica qué pasa con el precio cuando la oferta es mayor que la demanda.", sol: "El precio baja, porque los vendedores tienen que atraer a los pocos compradores." },
    { q: "Escribe tres funciones del Estado en la economía.", sol: "Cobrar impuestos, prestar servicios públicos (sanidad, educación) y regular el mercado (salario mínimo, protección al consumidor)." },
    { q: "¿Qué es la deslocalización?", sol: "Trasladar la producción de una empresa a otro país, normalmente con salarios o costes más bajos." },
    { q: "Escribe dos ventajas y dos inconvenientes de la globalización.", sol: "Ventajas: más comercio y productos más baratos; intercambio de ideas. Inconvenientes: cierre de fábricas y pérdida de empleo en algunos lugares; malas condiciones laborales y más contaminación." },
  ],
  quiz: [
    { q: "Las pymes son…", o: ["empresas públicas", "pequeñas y medianas empresas", "multinacionales"], a: 1, e: "Dan la mayor parte del empleo en España." },
    { q: "Si la demanda supera a la oferta, el precio…", o: ["sube", "baja", "no cambia"], a: 0, e: "Hay más compradores que productos." },
    { q: "Con 20 parados y 200 activos, la tasa de paro es…", o: ["10 %", "20 %", "5 %"], a: 0, e: "20 / 200 × 100." },
    { q: "Inditex es una empresa…", o: ["pública", "multinacional", "del sector primario"], a: 1, e: "Tiene tiendas y fábricas en muchos países." },
    { q: "Trasladar una fábrica a otro país con salarios más bajos es…", o: ["globalizar", "deslocalizar", "planificar"], a: 1, e: "Es una consecuencia de la globalización." },
  ],
  tarjetas: [
    ["Tasa de paro", "Parados / población activa × 100."],
    ["Oferta y demanda", "Lo que se quiere vender y lo que se quiere comprar; fijan el precio."],
    ["Globalización", "Interdependencia creciente entre las economías de todo el mundo."],
  ],
});
