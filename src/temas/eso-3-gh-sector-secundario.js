// Geografía e Historia 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, flujo, barras, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "3-eso",
  titulo: "El sector secundario: industria y energía",
  minutos: 35,
  objetivos: ["Describir las actividades del sector secundario y los elementos de la industria", "Clasificar las fuentes de energía y valorar su impacto", "Explicar los factores de localización industrial y las grandes regiones industriales"],
  claves: ["materias primas", "industria", "fuentes de energía", "renovables", "localización industrial", "deslocalización"],
  pregunta: {
    texto: "Cada vez que enciendes la luz, cargas el móvil o viajas en coche usas energía. Pero ¿de dónde sale esa energía y por qué se habla tanto de pasar a las renovables?",
    respuesta: "La mayor parte de la energía del mundo aún sale del <b>petróleo</b>, el <b>gas</b> y el <b>carbón</b>, que se acaban y emiten CO₂, el principal causante del <mark>cambio climático</mark>. Las <b>renovables</b> (sol, viento, agua) no se agotan y contaminan mucho menos. En España ya generan más de la mitad de la electricidad.",
  },
  bloques: [
    {
      html: `<h3>El sector secundario</h3><p>El <b>sector secundario</b> transforma las materias primas en productos elaborados. Incluye la <mark>industria</mark>, la <b>construcción</b>, la <b>minería</b> y la producción de <b>energía</b>. Las <b>materias primas</b> pueden ser de origen vegetal (madera, algodón), animal (lana, leche) o mineral (hierro, cobre, petróleo). La industria es clave para el desarrollo: crea empleo, innova y fabrica casi todo lo que usamos.</p>`,
      svg: flujo("Del mineral al producto: el proceso industrial", ["materia|prima", "fábrica:|transformar", "producto|elaborado"], "var(--pen)"),
    },
    {
      html: `<h3>Las fuentes de energía</h3><p>Las <mark>no renovables</mark> existen en cantidad limitada y se agotan: <b>petróleo</b>, <b>gas natural</b> y <b>carbón</b> (los combustibles fósiles) y el <b>uranio</b> de la energía nuclear. Las <mark>renovables</mark> no se agotan: <b>hidráulica</b> (agua de los embalses), <b>eólica</b> (viento), <b>solar</b>, <b>biomasa</b> (restos vegetales), <b>geotérmica</b> (calor de la Tierra) y <b>mareomotriz</b> (mareas).</p>`,
      svg: dos("Energías no renovables y renovables", ["No renovables", ["petróleo", "gas natural", "carbón", "uranio (nuclear)", "se agotan"], "var(--red)"], ["Renovables", ["solar", "eólica", "hidráulica", "biomasa", "no se agotan"], "var(--leaf)"]),
    },
    {
      html: `<h3>Tipos de industria</h3><p>La <mark>industria de base</mark> o pesada transforma grandes cantidades de materias primas en productos semielaborados para otras fábricas: siderurgia (acero), química básica, cemento. La <mark>industria de bienes de equipo</mark> fabrica máquinas y herramientas para otras industrias. La <mark>industria de bienes de consumo</mark> o ligera produce para las personas: alimentos, ropa, coches, muebles, móviles. Hoy crece la industria de <b>alta tecnología</b>.</p>`,
      svg: filas("Tipos de industria según lo que producen", [["De base", "acero · cemento · química", "var(--ink)"], ["De equipo", "máquinas · motores · robots", "var(--pen)"], ["De consumo", "comida · ropa · coches", "var(--red)"], ["Alta tecnol.", "chips · fármacos · aviones", "var(--sun)"]]),
    },
    {
      html: `<h3>Factores de localización</h3><p>Las fábricas se instalan donde les resulta más rentable. Los <b>factores de localización</b> son: la cercanía a las <b>materias primas</b> y la <b>energía</b>, la existencia de <b>mano de obra</b> (barata o cualificada), unas buenas <b>comunicaciones</b> (puertos, autopistas), un gran <b>mercado</b> para vender, el <b>capital</b> y las <b>ayudas</b> de los gobiernos. Antes pesaban las materias primas; hoy pesan más las comunicaciones, la tecnología y el conocimiento.</p>`,
      svg: rueda("Factores de localización industrial", "FÁBRICA", [["materias primas", "var(--leaf)"], ["energía", "var(--sun)"], ["mercado", "var(--red)"], ["ayudas", "var(--muted)"], ["mano de obra", "var(--pen)"], ["transporte", "var(--ink)"]], "var(--pen)"),
    },
    {
      html: `<h3>Las grandes regiones industriales</h3><p>Durante el siglo XX, la industria se concentró en <b>Europa occidental</b>, <b>Estados Unidos</b> y <b>Japón</b>. Desde 1980, muchas fábricas se han <mark>deslocalizado</mark> hacia países con salarios más bajos, y hoy <b>China</b> es la primera potencia industrial del mundo, seguida de Estados Unidos. También crecen India, Corea del Sur, México, Brasil o Vietnam. Los países ricos se especializan en la industria de alta tecnología.</p>`,
      svg: barras("Producción industrial mundial por países, en porcentaje aproximado", [["China", 29, "var(--red)", "29 %"], ["EE. UU.", 16, "var(--pen)", "16 %"], ["Japón", 7, "var(--sun)", "7 %"], ["Alemania", 5, "var(--ink)", "5 %"], ["India", 3, "var(--leaf)", "3 %"]], 34),
    },
  ],
  figura: {
    titulo: "Las fuentes de energía de un vistazo",
    svg: figCols("Combustibles fósiles, energía nuclear y renovables con sus ventajas e inconvenientes", [
      ["Fósiles", ["petróleo · gas · carbón", "baratos y potentes", "emiten CO₂", "se agotan"], "var(--red)"],
      ["Nuclear", ["uranio", "no emite CO₂", "residuos peligrosos", "riesgo de accidente"], "var(--sun)"],
      ["Renovables", ["sol · viento · agua", "limpias e inagotables", "dependen del clima", "hay que almacenar"], "var(--leaf)"],
    ]),
  },
  video: { id: "oZyeHTJzCbw", titulo: "El sector secundario: resumen completo en 12 minutos", canal: "La cuna de Halicarnaso", vistas: 137550, megusta: 0, busqueda: "sector secundario industria energía" },
  quiz: [
    { q: "¿Qué actividad pertenece al sector secundario?", o: ["La construcción", "La pesca", "El comercio"], a: 0, e: "Transforma materiales en edificios." },
    { q: "¿Cuál es una energía renovable?", o: ["Carbón", "Eólica", "Gas natural"], a: 1, e: "El viento no se agota." },
    { q: "La siderurgia es una industria…", o: ["de base", "de consumo", "de alta tecnología"], a: 0, e: "Produce acero para otras industrias." },
    { q: "Una fábrica de muebles es una industria…", o: ["de base", "de bienes de consumo", "extractiva"], a: 1, e: "Produce para las personas." },
    { q: "Hoy, la primera potencia industrial del mundo es…", o: ["Alemania", "China", "Japón"], a: 1, e: "Produce casi un tercio de la industria mundial." },
  ],
  examen: [
    { q: "El uranio es la materia prima de la energía…", o: ["geotérmica", "nuclear", "solar"], a: 1, e: "Es no renovable." },
    { q: "Trasladar fábricas a países con salarios más bajos es…", o: ["deslocalizar", "industrializar", "reciclar"], a: 0, e: "Ha favorecido a Asia." },
    { q: "¿Qué factor de localización pesa más hoy?", o: ["Estar junto a una mina de carbón", "Las comunicaciones y la tecnología", "Tener un río"], a: 1, e: "La industria moderna busca conocimiento y buen transporte." },
  ],
  feynman: ["Qué hace el sector secundario", "Qué diferencia hay entre energías renovables y no renovables", "Qué tipos de industria existen", "Por qué una fábrica se instala en un lugar y no en otro"],
  mapa: mapa("INDUSTRIA Y ENERGÍA", "var(--pen)", [
    ["Materias primas", "vegetales · animales · minerales", "var(--leaf)"],
    ["Energía", "no renovable · renovable", "var(--sun)"],
    ["Industria", "base · equipo · consumo", "var(--pen)"],
    ["Localización", "factores · deslocalización", "var(--red)"],
  ], 270),
  tarjetas: [
    ["Materia prima", "Recurso natural que la industria transforma: hierro, algodón, petróleo…"],
    ["Combustibles fósiles", "Petróleo, gas natural y carbón: no renovables y emiten CO₂."],
    ["Industria de base", "Transforma materias primas en productos para otras industrias: acero, cemento."],
    ["Factores de localización", "Razones por las que una fábrica se instala en un lugar."],
    ["Deslocalización", "Traslado de fábricas a países con costes más bajos."],
  ],
  familias: ["Mirad juntos la factura de la luz: ¿qué porcentaje de la electricidad es renovable?", "Contad los aparatos enchufados en casa y pensad cuáles se podrían apagar.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: el sector secundario, las fuentes de energía, la localización industrial y la transición energética (RD 217/2022, Geografía e Historia 3º).",
    ideas: ["Analizar el mix eléctrico del día en la web de Red Eléctrica.", "Mapa de las centrales renovables de la comunidad autónoma.", "Debate: ¿cerrar o mantener las centrales nucleares?"],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Red Eléctrica: el sistema eléctrico español", url: "https://www.ree.es/es/datos/generacion" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar la evolución de la industria desde la Revolución Industrial", "Conocer la industria y la energía en España y la transición energética"],
  bloques: [
    { tras: "El sector secundario", html: `<h3>De la artesanía a la industria 4.0</h3><p>Hasta el siglo XVIII, los productos se hacían a mano en talleres <b>artesanos</b>. La <mark>Primera Revolución Industrial</mark> (Gran Bretaña, finales del XVIII) trajo la máquina de vapor, el carbón y las fábricas textiles. La <b>Segunda</b> (finales del XIX) usó la electricidad y el petróleo y creó la producción en <b>cadena</b>, como la de los coches Ford. La <b>Tercera</b> (desde 1970) incorporó la informática, la robótica y la automatización. Hoy hablamos de la <mark>industria 4.0</mark>: fábricas inteligentes con robots conectados a internet, inteligencia artificial e impresión 3D, que producen a medida y con muy pocos trabajadores, pero muy cualificados.</p>` },
    { tras: "Las fuentes de energía", html: `<h3>El problema de la energía</h3><p>Más del 75 % de la energía que se consume en el mundo procede aún de <b>combustibles fósiles</b>. Esto causa tres problemas. 1) Se <b>agotan</b>: sus reservas son limitadas. 2) Producen <mark>gases de efecto invernadero</mark>, sobre todo CO₂, que calientan el planeta. 3) Crean <b>dependencia</b>: muchos países, como España, tienen que importar casi todo el petróleo y el gas, y sus precios suben con las guerras y las crisis. La solución es la <b>transición energética</b>: ahorrar energía, ser más eficientes y sustituir los fósiles por renovables, el coche eléctrico o el hidrógeno verde.</p>`, video: { id: "Og6C1HyeaBs", titulo: "Energías renovables y no renovables: tipos de energía", canal: "EcologíaVerde", vistas: 776053, megusta: 0 } },
    { tras: "Factores de localización", html: `<h3>Paisajes industriales</h3><p>La industria crea paisajes propios. Las antiguas <b>cuencas mineras</b> y siderúrgicas, con chimeneas y altos hornos, como la ría de Bilbao o Asturias, sufrieron en los años 80 una dura <mark>reconversión industrial</mark>: cerraron muchas fábricas y se perdieron miles de empleos. Hoy, la industria se instala en <b>polígonos industriales</b> en las afueras de las ciudades, junto a autopistas. Los <b>parques tecnológicos</b> reúnen empresas de alta tecnología cerca de universidades, como el de Zamudio (Bizkaia) o el de Málaga (Málaga TechPark). Algunas fábricas antiguas se han convertido en museos o centros culturales, como el Guggenheim, levantado en una zona industrial de Bilbao.</p>` },
    { tras: "Las grandes regiones industriales", html: `<h3>Industria y energía en España</h3><p>La industria aporta alrededor del <b>16 % del PIB</b> español. Las principales áreas industriales son <b>Cataluña</b>, la <b>Comunidad de Madrid</b>, el <b>País Vasco</b>, la <b>Comunidad Valenciana</b> y el eje del Ebro. Destacan la industria del <mark>automóvil</mark> (España es el segundo fabricante de coches de Europa, tras Alemania), la agroalimentaria, la química y farmacéutica, la textil (con empresas como Inditex) y la aeronáutica. En energía, España depende del petróleo y el gas importados, pero es un líder en <b>renovables</b>: en 2024 más del 55 % de la electricidad fue renovable, sobre todo eólica y solar.</p>${tabla(["Fuente", "Electricidad en España (aprox. 2024)"], [["Eólica", "23 %"], ["Solar fotovoltaica", "17 %"], ["Nuclear", "20 %"], ["Hidráulica", "13 %"], ["Gas (ciclo combinado)", "14 %"], ["Otras", "13 %"]])}` },
  ],
  ejemplos: [
    { enunciado: "Una empresa quiere montar una fábrica de coches. Duda entre un pueblo del interior sin autopista y un polígono junto al puerto de Valencia. ¿Dónde la instalará y por qué?", pasos: ["Necesita recibir piezas de muchos proveedores: buen transporte.", "Exportará muchos coches: un puerto es una gran ventaja.", "Necesita mano de obra cualificada: la ciudad la ofrece."], resultado: "En el polígono junto al puerto, por las comunicaciones, el mercado y la mano de obra." },
    { enunciado: "Clasifica estas fuentes en renovables y no renovables: gas natural, biomasa, uranio, geotérmica, carbón, mareomotriz.", pasos: ["Se agotan: gas natural, uranio y carbón.", "Se renuevan: biomasa, geotérmica y mareomotriz."], resultado: "No renovables: gas, uranio, carbón. Renovables: biomasa, geotérmica, mareomotriz." },
    { enunciado: "Explica por qué la deslocalización ha cerrado fábricas textiles en Europa.", pasos: ["La fabricación de ropa necesita mucha mano de obra.", "En países como Bangladés o Vietnam los salarios son mucho más bajos.", "Las empresas trasladan allí la producción para reducir costes y venden en Europa."], resultado: "Por los salarios más bajos de Asia; Europa conserva el diseño y la venta." },
  ],
  errores: [
    "Incluir la agricultura en el sector secundario: es primario.",
    "Pensar que la energía nuclear es renovable: el uranio se agota.",
    "Creer que las renovables no tienen ningún impacto: también ocupan suelo y afectan al paisaje.",
    "Confundir industria de base (productos para otras fábricas) con industria de consumo (productos para las personas).",
    "Pensar que hoy las fábricas se instalan sobre todo junto a las minas.",
  ],
  ejercicios: [
    { q: "¿Qué actividades forman el sector secundario?", sol: "La industria, la construcción, la minería y la producción de energía." },
    { q: "Clasifica estas materias primas por su origen: algodón, hierro, lana, petróleo, madera.", sol: "Vegetal: algodón y madera. Animal: lana. Mineral: hierro y petróleo." },
    { q: "Escribe dos ventajas y dos inconvenientes de los combustibles fósiles.", sol: "Ventajas: son abundantes hoy y producen mucha energía. Inconvenientes: se agotan y emiten CO₂ que causa el cambio climático." },
    { q: "Explica la diferencia entre industria de base y de bienes de consumo con un ejemplo.", sol: "La de base produce para otras fábricas, como una acería; la de consumo produce para las personas, como una fábrica de galletas." },
    { q: "Cita cuatro factores de localización industrial.", sol: "Materias primas, energía, mano de obra, comunicaciones, mercado, capital y ayudas públicas." },
    { q: "¿Qué fue la reconversión industrial en España?", sol: "El cierre y la modernización de la industria pesada (siderurgia, astilleros, minería) en los años 80, que causó mucho paro en zonas como Asturias o el País Vasco." },
    { q: "¿Qué es la industria 4.0?", sol: "La industria actual con fábricas inteligentes: robots conectados, inteligencia artificial, internet de las cosas e impresión 3D." },
    { q: "¿Por qué España depende energéticamente del exterior?", sol: "Porque casi no tiene petróleo ni gas y tiene que importarlos." },
    { q: "Nombra tres regiones industriales de España.", sol: "Cataluña, Comunidad de Madrid, País Vasco (también Comunidad Valenciana y el valle del Ebro)." },
    { q: "Propón tres medidas de transición energética para tu centro escolar.", sol: "Por ejemplo: placas solares en el tejado, luces LED con sensores de presencia y apagar los aparatos al salir de clase." },
  ],
  quiz: [
    { q: "La máquina de vapor es de la…", o: ["Primera Revolución Industrial", "Segunda", "Tercera"], a: 0, e: "Finales del siglo XVIII." },
    { q: "La producción en cadena se asocia a…", o: ["Ford", "Watt", "Edison"], a: 0, e: "Fabricación de coches a principios del XX." },
    { q: "España es el segundo fabricante de Europa de…", o: ["aviones", "coches", "barcos"], a: 1, e: "Tras Alemania." },
    { q: "Un parque tecnológico reúne…", o: ["minas", "empresas de alta tecnología", "granjas"], a: 1, e: "Cerca de universidades." },
    { q: "En 2024, la electricidad renovable en España superó el…", o: ["20 %", "55 %", "90 %"], a: 1, e: "Sobre todo eólica y solar." },
  ],
  tarjetas: [
    ["Transición energética", "Cambio de los combustibles fósiles a energías limpias y más eficientes."],
    ["Reconversión industrial", "Cierre y modernización de la industria pesada española en los años 80."],
    ["Industria 4.0", "Fábricas inteligentes con robots conectados e inteligencia artificial."],
  ],
});
