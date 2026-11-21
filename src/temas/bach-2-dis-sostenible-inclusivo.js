// Diseño, 2º de Bachillerato. Tema 12 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-dis");

module.exports = B.tema({
  titulo: "Diseño sostenible e inclusivo",
  minutos: 60,
  objetivos: [
    "Explicar el ecodiseño y la economía circular aplicados a productos, gráfica y espacios",
    "Aplicar estrategias para reducir el impacto ambiental de un diseño en todo su ciclo de vida",
    "Conocer los principios del diseño universal y la accesibilidad",
    "Valorar el diseño social y participativo como herramienta para mejorar la comunidad",
  ],
  claves: ["ecodiseño", "economía circular", "ciclo de vida", "reciclaje", "diseño universal", "accesibilidad", "diseño social", "greenwashing"],
  pregunta: {
    texto: "¿Puede un diseñador ayudar a salvar el planeta o a que nadie se quede fuera?",
    respuesta: "Sí, y mucho. Se calcula que alrededor del <mark>80 %</mark> del impacto ambiental de un producto se decide en la fase de diseño. Y un diseño pensado para todos evita barreras que excluyen a millones de personas.",
  },
  lectura: {
    titulo: "Un bordillo que lo cambió todo",
    html: `<p>En los años setenta, activistas con discapacidad de Berkeley, en California, reclamaron rebajar los bordillos de las aceras para poder cruzar en silla de ruedas. Cuando se hizo, se descubrió algo inesperado: los rebajes los usaban también personas con carritos de bebé, maletas, bicicletas o carros de la compra.</p>
    <p>A este fenómeno se le llama hoy «efecto bordillo»: lo que se diseña pensando en quienes tienen más dificultades acaba beneficiando a todo el mundo. Es la idea central del diseño universal y, junto con el cuidado del planeta, uno de los grandes retos del diseño del siglo XXI.</p>`,
  },
  secciones: [4, 3],
  bloques: [
    {
      h: "El impacto ambiental del diseño",
      html: `<p>Cada objeto, envase, folleto o espacio consume materias primas, agua y energía, y genera emisiones y residuos. Como el diseñador decide los materiales, la forma, el tamaño y la duración, tiene una gran influencia sobre ese impacto.</p>
      <p>El modelo tradicional es <b>lineal</b>: extraer, fabricar, usar y tirar. Frente a él, la <b>economía circular</b> busca que los materiales vuelvan a usarse una y otra vez, como en la naturaleza, donde no existen los residuos. El diseño es la puerta de entrada de esa economía: un producto que no se ha pensado para repararse o reciclarse difícilmente lo será, por mucho que se esfuercen después los usuarios o las plantas de reciclaje.</p>`,
      svg: B.comparar("Dos modelos", ["Economía lineal", ["extraer", "fabricar", "usar", "tirar"]], ["Economía circular", ["diseñar bien", "usar más tiempo", "reparar y reutilizar", "reciclar"]]),
    },
    {
      h: "Ecodiseño",
      html: `<p>El <b>ecodiseño</b> incorpora criterios ambientales en todas las fases del proyecto. Se apoya en el <b>análisis del ciclo de vida</b> (ACV), que mide el impacto de un producto desde la extracción de materias hasta su fin de vida, para saber dónde intervenir.</p>
      <p>Sus estrategias principales son: usar <b>menos material</b> y materiales de bajo impacto (reciclados, renovables, locales); reducir la <b>energía</b> en fabricación y uso; optimizar el <b>transporte</b> (piezas apilables, envases planos); alargar la <b>vida útil</b> (calidad, reparación, diseño atemporal) y facilitar el <b>fin de vida</b> (desmontaje, monomateriales, etiquetado de materiales).</p>`,
      svg: B.ciclo("Estrategias de ecodiseño en el ciclo de vida", "Ecodiseño", ["Material", "Fabricación", "Transporte", "Uso", "Fin de vida"]),
      video: { id: "4VReody58_0", titulo: "¿Qué es el ecodiseño y el diseño sostenible? No es lo mismo", canal: "Diseño industrial y estratégico con Irene Ramos", vistas: 40471 },
    },
    {
      h: "Ecodiseño gráfico y digital",
      html: `<p>El diseño gráfico también tiene huella: papel, tintas, envases y residuos. Se puede reducir con papel <b>reciclado o certificado</b> (FSC, PEFC), tintas vegetales, formatos que aprovechan el pliego de papel sin desperdicio, menos tintas y acabados que no impidan el reciclaje (plastificados, purpurinas).</p>
      <p>En lo digital, cada imagen pesada y cada vídeo en reproducción automática consumen energía en servidores y redes. El <b>diseño web sostenible</b> optimiza imágenes, reduce elementos innecesarios y usa alojamientos con energía renovable. Una web ligera además carga más rápido y funciona mejor con malas conexiones.</p>`,
      svg: B.cajas("Gráfica con menos huella", [["Papel", "reciclado|o certificado"], ["Tintas", "vegetales|y menos colores"], ["Formato", "sin|desperdicio"], ["Web", "ligera|y renovable"]]),
    },
    {
      h: "El greenwashing",
      html: `<p>Algunas empresas presumen de ser ecológicas sin serlo realmente: es el <b>greenwashing</b> o «lavado verde». Se reconoce por mensajes vagos («natural», «respetuoso»), sellos inventados, imágenes de hojas y colores verdes que no se apoyan en datos, o por destacar un detalle mínimo para ocultar un gran impacto.</p>
      <p>El diseñador tiene aquí una responsabilidad ética: no debe usar el diseño para engañar. La normativa europea ya prohíbe las afirmaciones ambientales genéricas sin pruebas. Un diseño honesto informa con <b>datos verificables</b> y sellos oficiales, aunque sean menos llamativos que una hoja verde.</p>`,
      svg: B.comparar("¿Verde de verdad?", ["Greenwashing", ["«natural» sin más", "sellos inventados", "hojas y verde", "sin datos"]], ["Información honesta", ["dato concreto", "sello oficial", "qué y cuánto", "verificable"]]),
    },
    {
      h: "Diseño universal",
      html: `<p>El <b>diseño universal</b> o diseño para todos busca que productos, entornos y servicios puedan usarlos todas las personas, en la mayor medida posible, sin necesidad de adaptaciones. Se formuló en los años noventa con <b>siete principios</b>: uso equitativo, flexibilidad, uso simple e intuitivo, información perceptible, tolerancia al error, poco esfuerzo físico y tamaño y espacio adecuados.</p>
      <p>No se trata de hacer productos especiales para personas con discapacidad, sino de pensar desde el principio en la <b>diversidad</b> humana: edad, tamaño, fuerza, visión, audición, capacidades cognitivas, idioma. Un diseño así no se nota: simplemente funciona para más gente.</p>`,
      svg: B.rejilla("Siete principios del diseño universal", ["Principio", "Ejemplo"], [["Uso equitativo", "puerta automática"], ["Flexibilidad", "tijeras para zurdos y diestros"], ["Simple e intuitivo", "icono claro"], ["Información perceptible", "aviso sonoro y luminoso"], ["Tolerancia al error", "deshacer"], ["Poco esfuerzo", "grifo de palanca"]]),
      video: { id: "ZnUmI-7Pw08", titulo: "Diseño universal: espacios y productos para todos", canal: "CEDECOM", vistas: 8915 },
    },
    {
      h: "Accesibilidad en la práctica",
      html: `<p>La <b>accesibilidad</b> se concreta en decisiones de diseño: contraste suficiente y letra legible, textos en <b>lectura fácil</b>, pictogramas, braille y relieves, subtítulos y lengua de signos en los vídeos, rampas y ascensores, botones grandes y alcanzables, alternativas al color para transmitir información.</p>
      <p>En España, la <b>Ley General de derechos de las personas con discapacidad</b> y las normas de accesibilidad obligan a cumplir estos criterios en edificios, transportes, webs públicas y, cada vez más, en productos y servicios. La mejor forma de lograrlo es incluir a personas con discapacidad en el proceso de diseño, no solo comprobar al final.</p>`,
      svg: B.estrella("Accesibilidad", "Para todos", ["Contraste", "Lectura fácil", "Braille", "Subtítulos", "Rampas", "Botones"]),
    },
    {
      h: "Diseño social y participativo",
      html: `<p>El <b>diseño social</b> aplica las herramientas del diseño a problemas colectivos: salud, educación, vivienda, migración, soledad no deseada. El diseño <b>participativo</b> o codiseño invita a las personas afectadas a diseñar junto a los profesionales, porque son quienes mejor conocen el problema.</p>
      <p>Ejemplos son el rediseño de una plaza con los vecinos, materiales educativos creados con el alumnado o sistemas de pictogramas para hospitales hechos con pacientes. Este enfoque une lo aprendido en el curso: método, empatía, creatividad y responsabilidad. El diseño no solo da forma a las cosas: también ayuda a construir una sociedad más justa y sostenible.</p>`,
      svg: B.flujo("Codiseño con la comunidad", ["Escuchar a quienes viven el problema", "Definirlo juntos", "Idear en talleres abiertos", "Prototipar y probar en el lugar", "Mantener y mejorar"]),
    },
  ],
  figura: {
    titulo: "Diseñar con responsabilidad",
    items: [["Circular", "↻", "materiales que", "vuelven"], ["Ecodiseño", "🌱", "menos impacto", "en el ciclo"], ["Universal", "♿", "para todas", "las personas"], ["Social", "🤝", "con la", "comunidad"]],
  },
  video: { id: "S9G9ScizpMQ", titulo: "Economía circular: definición y ejemplos", canal: "Sustainability Illustrated", vistas: 7970 },
  quiz: [
    ["Se calcula que el impacto ambiental de un producto se decide sobre todo en…", ["el transporte", "la fase de diseño", "la tienda", "el reciclaje"], 1, "Alrededor del 80 %."],
    ["La economía circular busca…", ["fabricar más rápido", "que los materiales se reutilicen una y otra vez", "tirar menos publicidad", "usar solo madera"], 1, "Cerrar el ciclo."],
    ["El análisis del ciclo de vida mide…", ["el precio", "el impacto desde las materias primas hasta el residuo", "la belleza", "las ventas"], 1, "ACV."],
    ["Un monomaterial facilita…", ["el reciclaje", "la publicidad", "el color", "el transporte"], 0, "No hay que separar."],
    ["FSC y PEFC son sellos de…", ["tintas", "papel y madera de bosques gestionados de forma sostenible", "plásticos", "electricidad"], 1, "Certificación forestal."],
    ["El greenwashing es…", ["reciclar papel", "presumir de ecológico sin serlo", "un color", "una técnica de impresión"], 1, "Lavado verde."],
    ["El «efecto bordillo» muestra que…", ["las aceras son caras", "lo diseñado para quien tiene dificultades beneficia a todos", "hay que quitar bordillos", "no sirve la accesibilidad"], 1, "Diseño universal."],
    ["Un principio del diseño universal es…", ["uso exclusivo", "tolerancia al error", "máximo esfuerzo", "información oculta"], 1, "Permitir equivocarse sin consecuencias graves."],
    ["La lectura fácil sirve para…", ["ahorrar papel", "que textos se entiendan por personas con dificultades de comprensión", "decorar", "traducir"], 1, "Accesibilidad cognitiva."],
    ["El codiseño consiste en…", ["copiar diseños", "diseñar junto a las personas afectadas", "diseñar solo con ordenador", "diseñar en secreto"], 1, "Diseño participativo."],
  ],
  examen: [
    ["Un envase combina cartón, plástico y aluminio pegados. ¿Qué problema tiene?", ["Es caro", "Es muy difícil de separar y reciclar", "Es feo", "Ninguno"], 1, "Mejor monomaterial."],
    ["Una botella pone «100 % natural» con hojas verdes, sin más datos. ¿Qué podría ser?", ["Ecodiseño", "Greenwashing", "Diseño universal", "Codiseño"], 1, "Afirmación vaga."],
    ["Un grifo de pomo redondo cuesta de abrir con las manos enjabonadas. ¿Qué propones?", ["Pomo más pequeño", "Grifo de palanca", "Grifo de otro color", "Nada"], 1, "Poco esfuerzo físico."],
    ["Un ayuntamiento quiere rediseñar una plaza. ¿Qué enfoque recomiendas?", ["Encargarlo sin preguntar", "Codiseño con vecinos y comercios", "Copiar otra plaza", "No hacer nada"], 1, "Diseño participativo."],
    ["Un folleto con plastificado brillante y purpurina…", ["se recicla fácilmente", "dificulta el reciclaje del papel", "no tiene impacto", "es accesible"], 1, "Acabados problemáticos."],
  ],
  feynman: ["Diferencia entre economía lineal y circular", "Cinco estrategias de ecodiseño", "Qué es el greenwashing y cómo detectarlo", "Qué es el diseño universal y el efecto bordillo"],
  mapa: ["DISEÑO RESPONSABLE", [["Circular", "reducir · reutilizar · reciclar"], ["Ecodiseño", "ciclo de vida · ACV"], ["Universal", "7 principios · accesibilidad"], ["Social", "codiseño · comunidad · ética"]]],
  tarjetas: [
    ["Economía circular", "Modelo en el que los materiales vuelven a usarse en lugar de convertirse en residuo."],
    ["Ecodiseño", "Diseño que reduce el impacto ambiental en todo el ciclo de vida."],
    ["ACV", "Análisis del ciclo de vida: mide el impacto de un producto de principio a fin."],
    ["Monomaterial", "Producto o envase hecho de un solo material, fácil de reciclar."],
    ["Greenwashing", "Publicidad que exagera o inventa ventajas ambientales."],
    ["Diseño universal", "Diseño utilizable por todas las personas sin adaptaciones."],
    ["Lectura fácil", "Método de redacción y diseño para textos comprensibles por todos."],
    ["Codiseño", "Diseño hecho junto a las personas usuarias."],
  ],
  ejemplos: [
    ["Aplica tres estrategias de ecodiseño a una silla de comedor escolar.", ["Material: polipropileno reciclado de un solo tipo.", "Transporte: sillas apilables para ocupar menos.", "Vida útil: piezas atornilladas que se cambian si se rompen."], "Silla circular, duradera y reciclable."],
    ["Convierte un aviso del centro a lectura fácil.", ["Frases cortas, una idea por frase.", "Letra grande y clara, alineada a la izquierda.", "Pictogramas junto a las palabras clave."], "Aviso que entiende más gente."],
    ["Detecta greenwashing en un anuncio de un coche «eco».", ["Mensaje vago: «respeta el planeta».", "Imagen de bosque sin datos de emisiones.", "Lo honesto: consumo, emisiones y sello oficial."], "Pedir datos verificables."],
  ],
  errores: [
    "Creer que basta con usar el color verde para ser sostenible.",
    "Pensar en el reciclaje solo al final, cuando ya está todo decidido.",
    "Diseñar «para personas con discapacidad» como algo aparte en vez de para todos.",
    "Comprobar la accesibilidad solo al terminar, sin usuarios reales.",
  ],
  ejercicios: {
    b: [
      ["Diferencia economía lineal y economía circular.", "Lineal: extraer, fabricar, usar y tirar. Circular: diseñar para usar más tiempo, reparar, reutilizar y reciclar."],
      ["Cita cinco estrategias de ecodiseño.", "Menos material, materiales de bajo impacto, menos energía, transporte optimizado, vida útil larga, fácil desmontaje y reciclaje."],
      ["Enumera los siete principios del diseño universal.", "Uso equitativo, flexibilidad, simple e intuitivo, información perceptible, tolerancia al error, poco esfuerzo físico, tamaño y espacio adecuados."],
      ["¿Qué es el greenwashing?", "Presentar como ecológico algo que no lo es o exagerar sus ventajas ambientales."],
    ],
    m: [
      ["Analiza el envase de un producto de tu casa con criterios de ecodiseño.", "Respuesta abierta: materiales, cantidad, separación, información de reciclaje y propuestas."],
      ["Explica el efecto bordillo con otro ejemplo distinto del de las aceras.", "Respuesta abierta: subtítulos (los usan en sitios ruidosos), puertas automáticas, mandos de botones grandes…"],
      ["Propón cómo hacer más accesible la web del instituto.", "Contraste, textos alternativos, navegación con teclado, lectura fácil en avisos importantes, subtítulos en vídeos."],
      ["¿Por qué el diseño participativo da mejores resultados en problemas sociales?", "Porque las personas afectadas conocen el problema, aportan ideas realistas y se implican en mantener la solución."],
    ],
    a: [
      ["Rediseña un producto cotidiano para que sea circular y universal a la vez. Presenta bocetos y justificación.", "Respuesta abierta. Se valora combinar estrategias ambientales y principios de diseño universal."],
      ["Organiza un taller de codiseño con alumnado de otro curso para mejorar un espacio del centro y redacta sus conclusiones.", "Respuesta abierta: preparación, dinámicas, ideas recogidas y propuesta final."],
    ],
  },
  glosario: [
    ["Huella ambiental", "Impacto total de una actividad sobre el medio ambiente."],
    ["Vida útil", "Tiempo que un producto sirve para su función."],
    ["Desmontaje", "Separación de las piezas de un producto."],
    ["FSC", "Sello de madera y papel de bosques gestionados de forma responsable."],
    ["Accesibilidad cognitiva", "Facilidad para comprender entornos, textos y productos."],
    ["Efecto bordillo", "Beneficio general de una mejora pensada para quien tiene más dificultades."],
    ["Diseño social", "Diseño aplicado a problemas colectivos."],
    ["Upcycling", "Reutilizar un material dándole más valor que el original."],
  ],
  situacion: {
    titulo: "Instituto circular y para todos",
    reto: "Detectar barreras y residuos en el centro y proponer soluciones de diseño.",
    pasos: [
      "Recorred el centro con criterios de accesibilidad y de residuos.",
      "Entrevistad a personas con distintas necesidades y al personal de limpieza.",
      "Elegid un problema y diseñad una solución circular e inclusiva.",
      "Prototipad, probadla con usuarios y presentadla a la dirección.",
    ],
    producto: "Informe de diagnóstico y prototipo de solución presentado a la dirección.",
    evaluacion: [
      "El diagnóstico se basa en observación y entrevistas.",
      "La solución reduce impacto y aplica principios de diseño universal.",
      "El prototipo se prueba con usuarios diversos.",
      "La presentación es clara y argumentada.",
    ],
  },
  familias: [
    "Revisad juntos la basura de un día y pensad qué envases se podrían evitar.",
    "Intentad reparar algo antes de comprar uno nuevo.",
    "Fijaos en las barreras de vuestro barrio para una persona en silla de ruedas o con carrito.",
    "Leed con atención los mensajes «eco» de los productos y buscad los datos.",
  ],
  saberes: "Diseño, sostenibilidad y sociedad: economía circular; ecodiseño y análisis del ciclo de vida; ecodiseño gráfico y digital; greenwashing y ética; diseño universal y sus principios; accesibilidad física, sensorial y cognitiva; diseño social y participativo",
  ideas: [
    "Auditoría de residuos y accesibilidad del centro.",
    "Taller de upcycling con materiales de desecho.",
    "Simulación de dificultades (gafas, guantes) para entender barreras.",
    "Colaboración con asociaciones locales en un proyecto de codiseño.",
  ],
  fuentes: [
    { t: "Diseño universal, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dise%C3%B1o_universal" },
    { t: "Economía circular, Ministerio para la Transición Ecológica", url: "https://www.miteco.gob.es/es/calidad-y-evaluacion-ambiental/temas/economia-circular.html" },
  ],
});
