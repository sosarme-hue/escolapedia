// Geografía e Historia 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, barras, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "3-eso",
  titulo: "Desarrollo sostenible y desigualdades",
  minutos: 35,
  objetivos: ["Explicar qué es el desarrollo y cómo se mide con el IDH", "Analizar las desigualdades entre países y dentro de cada país, y sus causas", "Conocer los problemas ambientales y los Objetivos de Desarrollo Sostenible"],
  claves: ["desarrollo", "IDH", "desigualdad", "huella ecológica", "cambio climático", "ODS"],
  pregunta: {
    texto: "Un niño que nace hoy en Noruega puede esperar vivir unos 83 años y estudiar casi 19. Uno que nace en Chad, unos 55 años y estudiar 8. ¿Es solo cuestión de suerte dónde naces?",
    respuesta: "El lugar de nacimiento marca muchísimo, pero no por azar: detrás hay causas <b>históricas</b> (colonialismo), <b>económicas</b> (comercio desigual, deuda), <b>políticas</b> (guerras, corrupción) y <b>ambientales</b>. Reducir esas diferencias sin destruir el planeta es la idea del <mark>desarrollo sostenible</mark>.",
  },
  bloques: [
    {
      html: `<h3>Qué es el desarrollo</h3><p>Durante mucho tiempo se midió el desarrollo solo con la riqueza: el <b>PIB por habitante</b>. Pero un país rico puede tener mucha pobreza si la riqueza está mal repartida. Por eso la ONU creó el <mark>Índice de Desarrollo Humano (IDH)</mark>, que combina tres aspectos: una <b>vida larga y saludable</b> (esperanza de vida), el <b>acceso a la educación</b> (años de escolarización) y un <b>nivel de vida digno</b> (ingresos por habitante). Va de 0 a 1.</p>`,
      svg: rueda("Las tres dimensiones del Índice de Desarrollo Humano", "IDH", [["salud", "var(--leaf)"], ["educación", "var(--pen)"], ["ingresos", "var(--sun)"]].concat([["de 0 a 1", "var(--muted)"]]), "var(--red)"),
    },
    {
      html: `<h3>Un mundo desigual</h3><p>Los países con <b>IDH muy alto</b> están en Europa, Norteamérica, Japón, Corea del Sur o Australia. Los de <mark>IDH bajo</mark> se concentran en el <b>África subsahariana</b> y algunas zonas de Asia. A menudo se habla de un <b>Norte</b> rico y un <b>Sur</b> pobre, aunque es una simplificación: hay países emergentes, como China, India o Brasil, que crecen muy deprisa. Unos 700 millones de personas viven en <b>pobreza extrema</b>, con menos de 3 dólares al día.</p>`,
      svg: barras("Índice de Desarrollo Humano de algunos países, hacia 2023", [["Suiza", 0.97, "var(--leaf)", "0,97"], ["España", 0.92, "var(--pen)", "0,92"], ["Brasil", 0.79, "var(--sun)", "0,79"], ["India", 0.69, "var(--red)", "0,69"], ["Chad", 0.42, "var(--ink)", "0,42"]], 1.1),
    },
    {
      html: `<h3>Las causas de la desigualdad</h3><p>Las causas son muchas y se mezclan. <b>Históricas</b>: muchos países pobres fueron colonias explotadas hasta el siglo XX. <b>Económicas</b>: exportan materias primas baratas e importan productos caros, y arrastran grandes <b>deudas externas</b>. <b>Políticas</b>: guerras, gobiernos corruptos o dictaduras. <b>Sociales</b>: falta de escuelas y hospitales. <b>Ambientales</b>: sequías, desertificación o desastres naturales que golpean más a quien tiene menos recursos.</p>`,
      svg: filas("Causas de la desigualdad entre países", [["Historia", "colonialismo", "var(--ink)"], ["Economía", "comercio desigual · deuda", "var(--sun)"], ["Política", "guerras · corrupción", "var(--red)"], ["Sociedad", "sin escuelas ni hospitales", "var(--pen)"], ["Ambiente", "sequías · desastres", "var(--leaf)"]]),
    },
    {
      html: `<h3>Los problemas ambientales</h3><p>El crecimiento económico ha traído graves problemas. El <mark>cambio climático</mark>, causado por los gases de efecto invernadero, eleva la temperatura, el nivel del mar y los fenómenos extremos. También preocupan la <b>deforestación</b> (sobre todo de las selvas tropicales), la <b>pérdida de biodiversidad</b>, la contaminación del aire, del agua y de los océanos por <b>plásticos</b>, y el <b>agotamiento de recursos</b> como el agua dulce o los suelos fértiles.</p>`,
      svg: rueda("Grandes problemas ambientales", "PLANETA", [["cambio climático", "var(--red)"], ["deforestación", "var(--leaf)"], ["biodiversidad", "var(--sun)"], ["plásticos", "var(--inf)"], ["contaminación", "var(--ink)"], ["agua", "var(--pen)"]], "var(--leaf)"),
    },
    {
      html: `<h3>El desarrollo sostenible</h3><p>El <b>desarrollo sostenible</b> es el que satisface las necesidades del presente <mark>sin comprometer las de las generaciones futuras</mark> (Informe Brundtland, 1987). Une tres dimensiones: <b>económica</b> (crear riqueza y empleo), <b>social</b> (reducir la pobreza y la desigualdad) y <b>ambiental</b> (cuidar el planeta). En 2015, la ONU aprobó la <b>Agenda 2030</b>, con 17 <b>Objetivos de Desarrollo Sostenible</b> (ODS), como acabar con el hambre, lograr la igualdad de género o actuar por el clima.</p>`,
      svg: dos("Las dimensiones del desarrollo sostenible", ["Personas", ["sin pobreza", "sin hambre", "salud", "educación", "igualdad"], "var(--pen)"], ["Planeta", ["clima", "océanos y bosques", "energía limpia", "empleo digno", "consumir menos"], "var(--leaf)"]),
    },
  ],
  figura: {
    titulo: "Del problema a la solución",
    svg: figCols("Problemas, respuestas globales y acciones personales", [
      ["Problemas", ["pobreza extrema", "desigualdad", "cambio climático", "pérdida de especies"], "var(--red)"],
      ["Respuestas", ["Agenda 2030 y ODS", "Acuerdo de París", "ayuda al desarrollo", "comercio justo"], "var(--pen)"],
      ["Tú puedes", ["consumir menos", "reciclar y reparar", "moverte a pie o en bici", "informarte y participar"], "var(--leaf)"],
    ]),
  },
  video: { id: "MCKH5xk8X-g", titulo: "Los Objetivos de Desarrollo Sostenible: qué son y cómo alcanzarlos", canal: "UNESCO en español", vistas: 6359554, megusta: 0, busqueda: "desarrollo sostenible ODS" },
  quiz: [
    { q: "¿Qué tres aspectos combina el IDH?", o: ["Salud, educación e ingresos", "Población, superficie y clima", "Industria, comercio y turismo"], a: 0, e: "Va de 0 a 1." },
    { q: "La zona del mundo con más países de IDH bajo es…", o: ["Europa", "el África subsahariana", "Norteamérica"], a: 1, e: "Allí se concentra la pobreza extrema." },
    { q: "¿Qué es la deuda externa?", o: ["Lo que un país debe a otros países o bancos", "Lo que ahorran las familias", "Un impuesto"], a: 0, e: "Pagarla frena la inversión en escuelas y hospitales." },
    { q: "El cambio climático lo causan sobre todo…", o: ["los gases de efecto invernadero", "los terremotos", "las mareas"], a: 0, e: "Sobre todo el CO₂ de los combustibles fósiles." },
    { q: "¿Cuántos son los Objetivos de Desarrollo Sostenible?", o: ["8", "17", "30"], a: 1, e: "Aprobados en 2015 para 2030." },
  ],
  examen: [
    { q: "El desarrollo sostenible satisface las necesidades del presente…", o: ["sin pensar en el futuro", "sin comprometer las de las generaciones futuras", "solo de los países ricos"], a: 1, e: "Definición del Informe Brundtland (1987)." },
    { q: "¿Qué es un país emergente?", o: ["Un país que crece muy deprisa, como India o Brasil", "Un país en guerra", "Una isla nueva"], a: 0, e: "Están entre el Norte y el Sur." },
    { q: "Una causa histórica de la pobreza de muchos países es…", o: ["el colonialismo", "la imprenta", "el euro"], a: 0, e: "Fueron explotados hasta el siglo XX." },
  ],
  feynman: ["Cómo se mide el desarrollo", "Dónde están los países más y menos desarrollados", "Por qué hay tanta desigualdad", "Qué son los ODS y qué puedo hacer yo"],
  mapa: mapa("DESARROLLO SOSTENIBLE", "var(--leaf)", [
    ["Desarrollo", "PIB · IDH", "var(--pen)"],
    ["Desigualdad", "Norte · Sur · causas", "var(--red)"],
    ["Ambiente", "clima · bosques · plásticos", "var(--leaf)"],
    ["Soluciones", "Agenda 2030 · 17 ODS", "var(--sun)"],
  ], 260),
  tarjetas: [
    ["IDH", "Índice de Desarrollo Humano: salud, educación e ingresos, de 0 a 1."],
    ["Pobreza extrema", "Vivir con menos de unos 3 dólares al día."],
    ["Deuda externa", "Dinero que un país debe a otros países, bancos u organismos."],
    ["Desarrollo sostenible", "Satisfacer el presente sin comprometer el futuro."],
    ["ODS", "17 Objetivos de Desarrollo Sostenible de la Agenda 2030 de la ONU."],
  ],
  familias: ["Calculad juntos la huella ecológica de la familia con una calculadora en línea y elegid una mejora.", "Buscad en casa un producto de comercio justo o con sello ecológico.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Retos del mundo actual: desarrollo, desigualdades, emergencia climática, Objetivos de Desarrollo Sostenible y ciudadanía global (RD 217/2022, Geografía e Historia 3º).",
    ideas: ["Cada grupo investiga un ODS y propone una acción para el centro.", "Comparar el IDH de cinco países con un gráfico de barras.", "Seguir durante una semana noticias relacionadas con los ODS."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Naciones Unidas: Objetivos de Desarrollo Sostenible", url: "https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Comparar indicadores de desarrollo y valorar la desigualdad dentro de los países", "Proponer acciones personales y colectivas para la sostenibilidad"],
  bloques: [
    { tras: "Un mundo desigual", html: `<h3>Indicadores de desarrollo</h3>${tabla(["Indicador", "Noruega", "España", "Chad"], [["Esperanza de vida", "≈ 83 años", "≈ 84 años", "≈ 55 años"], ["Años de escolarización", "≈ 13", "≈ 11", "≈ 3"], ["Mortalidad infantil (‰)", "≈ 2", "≈ 3", "≈ 65"], ["Acceso a electricidad", "100 %", "100 %", "≈ 12 %"]])}<p>Además del IDH, se usan otros indicadores: el porcentaje de población con <b>agua potable</b>, el número de <b>médicos</b> por habitante, la <b>alfabetización</b> o el acceso a <b>internet</b>. Juntos dibujan una brecha enorme: en algunos países, la mayoría de las niñas no termina la primaria y dar a luz sigue siendo peligroso.</p>` },
    { tras: "Las causas de la desigualdad", html: `<h3>La desigualdad dentro de los países</h3><p>No solo hay diferencias entre países: también <mark>dentro de cada país</mark>. En muchas ciudades de América Latina o de África, un barrio rico con rascacielos convive con barrios de chabolas. En los países desarrollados también hay pobreza: personas sin hogar, paro de larga duración o familias que no pueden pagar la calefacción (<b>pobreza energética</b>). Las desigualdades afectan más a las <b>mujeres</b> (cobran menos y cargan con más trabajo de cuidados no pagado), a los <b>niños</b>, a las personas mayores, a los migrantes y a las minorías. Para medirla se usa el <b>índice de Gini</b>, de 0 (igualdad total) a 1 (desigualdad máxima). Los <b>impuestos progresivos</b> y los servicios públicos ayudan a reducirla.</p>`, video: { id: "UfvdnEZ9i7U", titulo: "Norte y Sur global, ¿qué son o dónde están?", canal: "AJ+ Español", vistas: 32755, megusta: 0 } },
    { tras: "Los problemas ambientales", html: `<h3>La huella ecológica</h3><p>La <mark>huella ecológica</mark> mide la superficie de tierra y mar que necesita una persona para producir lo que consume y absorber sus residuos. Si todos los habitantes del planeta vivieran como un español medio, harían falta unas <b>2,5 Tierras</b>; como un estadounidense medio, unas 5. Esto muestra otra desigualdad: los países ricos consumen la mayor parte de los recursos y emiten la mayor parte de los gases históricos, mientras que los países pobres sufren con más fuerza las consecuencias del cambio climático (sequías, inundaciones, hambre). Por eso se habla de <b>justicia climática</b>. Cada año, el «día de la sobrecapacidad de la Tierra» marca la fecha en que la humanidad ha gastado ya los recursos que el planeta regenera en todo el año.</p>` },
    { tras: "El desarrollo sostenible", html: `<h3>Qué se está haciendo y qué puedes hacer tú</h3><p>A nivel mundial, el <mark>Acuerdo de París</mark> (2015) compromete a casi todos los países a limitar el calentamiento global por debajo de 2 °C y, si es posible, de 1,5 °C. La <b>ayuda oficial al desarrollo</b> (los países ricos se comprometieron a dedicar el 0,7 % de su riqueza) y las <b>ONG</b> financian escuelas, pozos y hospitales. La Unión Europea tiene su <b>Pacto Verde</b>. Pero el cambio también depende de cada persona: aplicar las <b>tres erres</b> (reducir, reutilizar y reciclar), ahorrar agua y energía, usar el transporte público o la bicicleta, comer más alimentos de temporada y de cercanía, comprar productos de <b>comercio justo</b> y participar en asociaciones o en el voluntariado.</p>` },
  ],
  ejemplos: [
    { enunciado: "El país A tiene un PIB por habitante alto, pero baja esperanza de vida y poca escolarización. El país B tiene un PIB menor, pero buena sanidad y educación. ¿Cuál tendrá mejor IDH?", pasos: ["El IDH combina salud, educación e ingresos.", "A solo destaca en ingresos; B destaca en salud y educación.", "Dos dimensiones buenas pesan más que una."], resultado: "Probablemente B: el desarrollo no es solo riqueza." },
    { enunciado: "Explica cómo el comercio desigual frena el desarrollo de un país que exporta cacao.", pasos: ["El país vende cacao barato, cuyo precio sube y baja en los mercados internacionales.", "Compra productos industriales caros, como maquinaria o medicamentos.", "Ingresa poco y gasta mucho: se endeuda y no puede invertir en escuelas y hospitales."], resultado: "Vender materias primas baratas y comprar manufacturas caras crea deuda y pobreza." },
    { enunciado: "Relaciona cada acción con un ODS: a) comedor escolar gratuito, b) placas solares en el instituto, c) campaña contra el acoso machista.", pasos: ["a) Garantizar comida a los niños: ODS 2, Hambre cero.", "b) Energía renovable: ODS 7, Energía asequible y no contaminante, y ODS 13, Acción por el clima.", "c) Igualdad entre mujeres y hombres: ODS 5, Igualdad de género."], resultado: "a) ODS 2; b) ODS 7 y 13; c) ODS 5." },
  ],
  errores: [
    "Medir el desarrollo solo con el dinero: el IDH incluye salud y educación.",
    "Pensar que en los países ricos no hay pobreza.",
    "Explicar la pobreza de un país con una sola causa.",
    "Creer que el desarrollo sostenible es solo ecologismo: también incluye lo social y lo económico.",
    "Pensar que las acciones individuales no sirven: sumadas, cambian el consumo y las leyes.",
  ],
  ejercicios: [
    { q: "¿Por qué el PIB por habitante no basta para medir el desarrollo?", sol: "Porque es una media y no muestra cómo se reparte la riqueza ni si la gente tiene salud y educación." },
    { q: "¿Qué mide el IDH y entre qué valores está?", sol: "La esperanza de vida, la educación y los ingresos; va de 0 a 1." },
    { q: "Escribe tres causas de la desigualdad entre países.", sol: "Por ejemplo: el pasado colonial, el comercio desigual y la deuda externa, y las guerras o la corrupción." },
    { q: "¿Qué son los países emergentes? Pon dos ejemplos.", sol: "Países con un crecimiento económico rápido que se están industrializando, como China, India, Brasil o México." },
    { q: "Explica dos consecuencias del cambio climático.", sol: "Subida del nivel del mar, más olas de calor, sequías e inundaciones, deshielo y pérdida de especies." },
    { q: "¿Qué es la huella ecológica?", sol: "La superficie de tierra y mar necesaria para producir lo que una persona consume y absorber sus residuos." },
    { q: "¿Qué significa justicia climática?", sol: "Que los países y personas que más han contaminado asuman más responsabilidad, porque los más pobres sufren más las consecuencias del cambio climático." },
    { q: "Define desarrollo sostenible.", sol: "El que satisface las necesidades del presente sin comprometer la capacidad de las generaciones futuras para satisfacer las suyas." },
    { q: "Nombra cinco Objetivos de Desarrollo Sostenible.", sol: "Por ejemplo: fin de la pobreza, hambre cero, salud y bienestar, educación de calidad, igualdad de género, agua limpia, energía no contaminante, acción por el clima." },
    { q: "Propón tres acciones que puedas hacer tú por la sostenibilidad.", sol: "Por ejemplo: ir al instituto andando o en bici, reducir el plástico usando una botella reutilizable y separar los residuos para reciclar." },
  ],
  quiz: [
    { q: "El índice de Gini mide…", o: ["la desigualdad de ingresos", "la contaminación", "la población"], a: 0, e: "De 0 (igualdad) a 1." },
    { q: "Si todos vivieran como un español medio harían falta unas…", o: ["0,5 Tierras", "2,5 Tierras", "10 Tierras"], a: 1, e: "Consumimos más de lo que el planeta regenera." },
    { q: "El Acuerdo de París (2015) trata de…", o: ["limitar el calentamiento global", "el comercio de armas", "la pesca"], a: 0, e: "Por debajo de 2 °C." },
    { q: "Las tres erres son…", o: ["reducir, reutilizar y reciclar", "recoger, romper y reparar", "rápido, real y rentable"], a: 0, e: "La más importante es reducir." },
    { q: "Los países ricos se comprometieron a dedicar a la ayuda al desarrollo el…", o: ["0,7 % de su riqueza", "10 %", "50 %"], a: 0, e: "Pocos lo cumplen." },
  ],
  tarjetas: [
    ["Huella ecológica", "Superficie que necesita una persona para producir lo que consume y absorber sus residuos."],
    ["Acuerdo de París", "Compromiso de 2015 para limitar el calentamiento global."],
    ["Justicia climática", "Que quien más contamina asuma más responsabilidad."],
  ],
});
