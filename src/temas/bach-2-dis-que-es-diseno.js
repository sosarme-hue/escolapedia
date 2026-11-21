// Diseño, 2º de Bachillerato. Tema 1 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-dis");

module.exports = B.tema({
  titulo: "¿Qué es el diseño? Concepto, funciones y ámbitos",
  minutos: 60,
  objetivos: [
    "Definir el diseño como actividad que da forma a objetos, mensajes y espacios para resolver necesidades",
    "Distinguir diseño, arte y artesanía, y reconocer las funciones práctica, estética y simbólica",
    "Identificar los grandes ámbitos del diseño y sus profesiones",
    "Aplicar criterios de «buen diseño» para analizar objetos cotidianos",
  ],
  claves: ["diseño", "función", "forma", "usuario", "arte y diseño", "ámbitos", "buen diseño", "encargo"],
  pregunta: {
    texto: "¿Quién decidió la forma de la silla en la que estás sentado?",
    respuesta: "Alguien la <mark>diseñó</mark>: pensó en tu cuerpo, en el material, en el precio y en cómo se apila. Casi todo lo que nos rodea, desde una app hasta una señal de tráfico, es fruto de decisiones de diseño.",
  },
  lectura: {
    titulo: "El clip que nadie ve",
    html: `<p>Un clip de papel es un trozo de alambre doblado tres veces. Parece que no tiene mérito, pero resuelve un problema con muy poco material, no rompe el papel, se fabrica por millones y casi no ha cambiado en más de cien años. Por eso muchos diseñadores lo ponen como ejemplo de <b>buen diseño</b>: funciona tan bien que se vuelve invisible.</p>
    <p>El diseño está en lo que usamos sin pensar: el pictograma del baño, el botón de «me gusta», el envase de la leche o la letra de este texto. Este curso aprenderás a mirar esas cosas con ojos de diseñador y a proponer las tuyas.</p>`,
  },
  secciones: [3, 2, 2],
  bloques: [
    {
      h: "Diseñar: dar forma a una solución",
      html: `<p><b>Diseñar</b> es planificar la forma de algo (un objeto, un mensaje, un espacio o un servicio) para que cumpla una <b>función</b> y responda a las necesidades de unas personas concretas, los <b>usuarios</b>. La palabra viene del italiano <i>disegno</i>, que significaba a la vez dibujo e idea.</p>
      <p>El diseño casi siempre nace de un <b>encargo</b> o de un problema: un cliente necesita una marca, una ciudad necesita orientar a los visitantes, una persona mayor no puede abrir un bote. El diseñador investiga, propone soluciones, las prueba y las mejora. Por eso se dice que el diseño es una actividad <b>proyectual</b>: se anticipa a la fabricación. Un error detectado en el boceto cuesta minutos; descubierto en la fábrica, cuesta miles de euros.</p>`,
      svg: B.flujo("Del problema a la solución", ["Problema o encargo", "Investigar al usuario", "Idear y bocetar", "Probar y mejorar", "Producir y comunicar"]),
    },
    {
      h: "Diseño, arte y artesanía",
      html: `<p>Arte y diseño comparten herramientas (dibujo, color, composición), pero tienen fines distintos. La obra de arte expresa la visión personal del artista y puede plantear preguntas sin resolver nada práctico. El diseño parte de un <b>problema ajeno</b> y se valora si funciona para otros.</p>
      <p>La <b>artesanía</b> fabrica objetos útiles a mano, pieza a pieza. El diseño moderno nació con la <b>industria</b>: se diseña un prototipo que luego se reproduce en serie. Hoy las fronteras son difusas: hay diseñadores que hacen piezas únicas y artistas que trabajan con métodos de diseño.</p>`,
      svg: B.comparar("Arte frente a diseño", ["Arte", ["expresión personal", "pieza única", "plantea preguntas", "lo juzga la crítica"]], ["Diseño", ["resuelve un encargo", "producción en serie", "atiende al usuario", "lo juzga el uso"]]),
    },
    {
      h: "Las funciones del diseño",
      html: `<p>Todo objeto diseñado cumple a la vez varias funciones. La <b>función práctica</b> es para qué sirve: una silla sostiene, un cartel informa. La <b>función estética</b> es cómo se percibe: proporción, color, textura, la emoción que despierta. La <b>función simbólica</b> es lo que comunica sobre quien lo usa: estatus, pertenencia a un grupo, valores.</p>
      <p>Una zapatilla deportiva protege el pie (práctica), tiene colores y líneas atractivas (estética) y su marca dice algo de nosotros (simbólica). Un buen diseño equilibra las tres según el encargo: en una señal de emergencia manda lo práctico; en un perfume, lo simbólico.</p>`,
      svg: B.cajas("Las tres funciones", [["Práctica", "para qué sirve|cómo se usa"], ["Estética", "forma, color,|textura, emoción"], ["Simbólica", "qué comunica|de quien lo usa"], ["Equilibrio", "depende|del encargo"]]),
    },
    {
      h: "Los ámbitos del diseño",
      html: `<p>El diseño se organiza en grandes <b>ámbitos</b>. El <b>diseño gráfico</b> y de comunicación visual crea marcas, carteles, libros, envases y señalética. El <b>diseño de producto</b> o industrial da forma a objetos fabricados en serie. El <b>diseño de interiores y del espacio</b> organiza viviendas, tiendas y exposiciones. El <b>diseño de moda</b> crea prendas y complementos.</p>
      <p>A ellos se suman ámbitos nuevos: el <b>diseño digital</b> de interfaces y experiencia de usuario (UX/UI), el diseño de servicios y el diseño de juegos. En España se estudian en las Escuelas de Arte y Superiores de Diseño y en grados universitarios. Aunque cada ámbito tiene sus técnicas, todos comparten el mismo método de proyecto y la atención al usuario.</p>`,
      svg: B.estrella("Ámbitos del diseño", "Diseño", ["Gráfico", "Producto", "Espacio", "Moda", "Digital", "Servicios"]),
      video: { id: "sAZ2A1bztwQ", titulo: "¿Qué es diseño gráfico, diseño UX y diseño UI?", canal: "EDteam", vistas: 209405 },
    },
    {
      h: "Forma y función",
      html: `<p>A principios del siglo XX el arquitecto Louis Sullivan resumió una idea clave: «<b>la forma sigue a la función</b>». Significa que la forma de un objeto debe derivar de su uso, sin adornos innecesarios. Fue el lema del <b>funcionalismo</b> y de la Bauhaus.</p>
      <p>Más tarde se matizó: la forma también comunica, emociona y crea identidad. Un exprimidor puede ser solo eficaz o, además, una pieza que la gente quiere tener en casa. El diseñador busca que forma y función se refuercen, no que una anule a la otra.</p>`,
      svg: B.comparar("Dos actitudes", ["Funcionalismo", ["la forma sigue", "a la función", "sin adornos", "geometría simple"]], ["Diseño emocional", ["la forma también", "comunica y emociona", "identidad", "sorpresa y juego"]]),
    },
    {
      h: "¿Qué es un buen diseño?",
      html: `<p>El diseñador alemán <b>Dieter Rams</b> propuso diez principios que siguen siendo una referencia: el buen diseño es innovador, útil, estético, comprensible, discreto, honesto, duradero, minucioso, respetuoso con el medio ambiente y es «el menor diseño posible» (<i>menos, pero mejor</i>).</p>
      <p>A esa lista hoy se añade que sea <b>inclusivo</b> (que lo puedan usar personas con capacidades distintas) y <b>ético</b> (que no manipule al usuario). Estos criterios sirven como guía para evaluar cualquier propuesta, también las tuyas.</p>`,
      svg: B.cajas("Criterios de buen diseño", [["Útil", "resuelve|el problema"], ["Comprensible", "se entiende|sin manual"], ["Honesto", "no engaña|al usuario"], ["Duradero", "y respetuoso|con el planeta"]]),
    },
    {
      h: "El diseño en la sociedad",
      html: `<p>El diseño tiene <b>responsabilidad social</b>: influye en lo que compramos, en cómo nos movemos por la ciudad y en la cantidad de residuos que generamos. Un mal envase multiplica el plástico; una mala señal puede provocar un accidente; una app adictiva roba tiempo.</p>
      <p>Por eso el currículo pide analizar el diseño de forma <b>crítica</b>: quién lo encarga, a quién beneficia, qué impacto tiene. El diseñador no es solo un estilista, sino un mediador entre las personas, la industria y el entorno. Sus decisiones, multiplicadas por miles de copias, cambian hábitos y paisajes.</p>`,
      svg: B.ciclo("Impactos del diseño", "Diseño", ["Personas", "Economía", "Planeta", "Cultura"]),
    },
  ],
  figura: {
    titulo: "El diseño en cuatro claves",
    items: [["Encargo", "?", "un problema", "de otros"], ["Usuario", "👤", "necesidades", "reales"], ["Funciones", "3", "práctica, estética", "y simbólica"], ["Ámbitos", "✦", "gráfico, producto,", "espacio, digital"]],
  },
  video: { id: "vm87hI94Wk8", titulo: "Forma o Función? Aquí te dejo la respuesta", canal: "Arq Inu", vistas: 370499 },
  quiz: [
    ["Diseñar es, sobre todo…", ["decorar objetos", "planificar la forma de algo para resolver una necesidad", "copiar modelos de moda", "dibujar bien"], 1, "El diseño es proyectual y parte de un problema."],
    ["La palabra «diseño» viene del italiano <i>disegno</i>, que significaba…", ["máquina", "dibujo e idea", "fábrica", "color"], 1, "Unía el trazo y el pensamiento."],
    ["¿Qué distingue el diseño de la artesanía tradicional?", ["El diseño no usa las manos", "El diseño prepara un prototipo para producir en serie", "La artesanía no es útil", "No hay diferencias"], 1, "El diseño moderno nace con la industria."],
    ["La función simbólica de un objeto es…", ["para qué sirve", "lo que comunica sobre quien lo usa", "su precio", "su material"], 1, "Estatus, valores, pertenencia."],
    ["En una señal de salida de emergencia predomina la función…", ["simbólica", "práctica", "decorativa", "artística"], 1, "Debe entenderse al instante."],
    ["«La forma sigue a la función» es una frase de…", ["Dieter Rams", "Louis Sullivan", "William Morris", "Coco Chanel"], 1, "Arquitecto de Chicago."],
    ["El lema «menos, pero mejor» se asocia a…", ["Dieter Rams", "Andy Warhol", "Antoni Gaudí", "Steve Jobs"], 0, "Diseñador de Braun."],
    ["El diseño de interfaces y experiencia de usuario pertenece al ámbito…", ["de moda", "digital", "de interiores", "textil"], 1, "UX/UI."],
    ["Un diseño inclusivo es el que…", ["solo usan expertos", "pueden usar personas con capacidades diversas", "es muy caro", "lleva mucho color"], 1, "Diseño para todos."],
    ["Analizar el diseño de forma crítica supone preguntarse…", ["solo si es bonito", "quién lo encarga, a quién beneficia y qué impacto tiene", "cuánto cuesta el diseñador", "nada"], 1, "Responsabilidad social."],
  ],
  examen: [
    ["Un artista pinta un cuadro sobre su infancia; un diseñador crea el cartel de un festival. ¿Qué los diferencia?", ["Nada", "El cartel responde a un encargo y debe comunicar a un público", "El cuadro no usa color", "El cartel no es visual"], 1, "Encargo y función frente a expresión personal."],
    ["Una botella de agua tiene forma ergonómica, colores frescos y el logo de una marca ecológica. Identifica las funciones.", ["Solo práctica", "Práctica, estética y simbólica", "Solo estética", "Solo simbólica"], 1, "Agarre, aspecto y valores de marca."],
    ["Un mando de televisión tiene 60 botones iguales. ¿Qué principio de buen diseño incumple?", ["Ser duradero", "Ser comprensible", "Ser innovador", "Ser barato"], 1, "No se entiende sin manual."],
    ["¿Qué ámbito del diseño se ocupa de la señalética de un hospital?", ["Moda", "Gráfico y comunicación visual", "Producto", "Joyería"], 1, "Pictogramas, rótulos y orientación."],
    ["Un exprimidor muy bonito que no exprime bien es un ejemplo de…", ["equilibrio forma-función", "forma que anula la función", "funcionalismo puro", "diseño inclusivo"], 1, "La estética no debe impedir el uso."],
  ],
  feynman: ["Qué es diseñar y por qué es una actividad proyectual", "En qué se diferencian arte, artesanía y diseño", "Las tres funciones de un objeto con un ejemplo", "Qué significa «la forma sigue a la función»"],
  mapa: ["EL DISEÑO", [["Concepto", "encargo · usuario · proyecto"], ["Funciones", "práctica · estética · simbólica"], ["Ámbitos", "gráfico · producto · espacio · moda · digital"], ["Buen diseño", "útil · comprensible · honesto · sostenible"]]],
  tarjetas: [
    ["Diseño", "Planificación de la forma de algo para que cumpla una función y responda a unas necesidades."],
    ["Encargo", "Petición de un cliente que plantea el problema que el diseño debe resolver."],
    ["Usuario", "Persona que usará el objeto, mensaje o espacio diseñado."],
    ["Función práctica", "Para qué sirve y cómo se usa un objeto."],
    ["Función estética", "Cómo se percibe: forma, color, textura y emoción."],
    ["Función simbólica", "Lo que el objeto comunica sobre quien lo usa."],
    ["Funcionalismo", "Corriente que defiende que la forma debe derivar de la función."],
    ["«Menos, pero mejor»", "Lema de Dieter Rams: el buen diseño es el menor diseño posible."],
  ],
  ejemplos: [
    ["Analiza las funciones de una mochila escolar.", ["Práctica: transportar libros repartiendo el peso en los dos hombros.", "Estética: colores, materiales y forma que gustan a su público.", "Simbólica: la marca o el estilo indican gustos y pertenencia a un grupo."], "Las tres funciones conviven; el encargo decide cuál pesa más."],
    ["Clasifica en ámbitos: una app de transporte, una lámpara, el logotipo de un club y el stand de una feria.", ["App: diseño digital (UX/UI).", "Lámpara: diseño de producto.", "Logotipo: diseño gráfico.", "Stand: diseño del espacio (efímero)."], "Cuatro ámbitos distintos con el mismo método proyectual."],
    ["Evalúa una tetera con el asa metálica que quema.", ["Útil: sirve el té, pero hace daño: falla.", "Comprensible: sí se entiende cómo usarla.", "Propuesta: asa de madera o con aislante y prueba con usuarios."], "La forma bonita no compensa un fallo de uso; hay que rediseñar."],
  ],
  errores: [
    "Pensar que diseñar es solo decorar o «hacer bonito».",
    "Confundir diseño con arte: el diseño responde a un encargo y a usuarios.",
    "Olvidar la función simbólica, que explica muchas decisiones de forma.",
    "Evaluar un diseño solo por el gusto personal, sin criterios.",
  ],
  ejercicios: {
    b: [
      ["Define diseño con tus palabras e incluye las ideas de función y usuario.", "Diseñar es planificar la forma de un objeto, mensaje o espacio para que cumpla una función y responda a las necesidades de sus usuarios."],
      ["Nombra las tres funciones de un objeto y pon un ejemplo de cada una con un reloj.", "Práctica: dar la hora. Estética: forma y materiales atractivos. Simbólica: un reloj de lujo indica estatus."],
      ["Cita cinco ámbitos del diseño.", "Gráfico, producto, espacio e interiores, moda y digital (también servicios y juegos)."],
      ["¿Quién dijo «la forma sigue a la función» y qué significa?", "Louis Sullivan: la forma de un objeto debe derivar de su uso, sin adornos innecesarios."],
    ],
    m: [
      ["Compara una silla de diseño industrial con una silla tallada por un artesano.", "La industrial se diseña como prototipo para fabricar en serie, con materiales y costes controlados; la artesanal es pieza única hecha a mano. Ambas pueden ser bellas y útiles."],
      ["Escoge un objeto de tu casa y evalúalo con cuatro principios de Dieter Rams.", "Respuesta abierta: se valora aplicar con justificación útil, comprensible, honesto, duradero o respetuoso con el medio ambiente."],
      ["Explica por qué en un perfume pesa más la función simbólica que la práctica.", "El frasco apenas cambia su uso; lo que se vende es una imagen y unos valores. La forma comunica lujo, frescura o rebeldía."],
      ["Pon un ejemplo de mal diseño que te haya causado un problema y propón una mejora.", "Respuesta abierta: describir el fallo (uso, comprensión, seguridad), el usuario afectado y una solución concreta."],
    ],
    a: [
      ["Escribe un texto de 150 palabras sobre la responsabilidad social del diseñador con dos ejemplos actuales.", "Respuesta abierta: impacto en consumo, residuos, accesibilidad o adicción digital, con ejemplos argumentados."],
      ["Elabora una ficha de análisis de un objeto cotidiano: encargo, usuario, funciones, ámbito y valoración crítica.", "Respuesta abierta. Se valora la estructura completa y una valoración argumentada con criterios, no solo con gustos."],
    ],
  },
  glosario: [
    ["Proyectual", "Que se planifica antes de producirse."],
    ["Prototipo", "Primer modelo de un producto, que sirve para probarlo."],
    ["Producción en serie", "Fabricación de muchas unidades iguales."],
    ["Artesanía", "Fabricación manual de objetos útiles, pieza a pieza."],
    ["Briefing", "Documento que resume el encargo de diseño."],
    ["Diseño inclusivo", "Diseño pensado para personas con capacidades diversas."],
    ["UX", "Experiencia de usuario: cómo se siente alguien al usar un producto."],
    ["UI", "Interfaz de usuario: lo que se ve y se toca en una pantalla."],
  ],
  situacion: {
    titulo: "Detectives del diseño",
    reto: "Analizar tres objetos del instituto y proponer la mejora de uno de ellos.",
    pasos: [
      "Elegid tres objetos o mensajes del centro (una silla, un cartel, una papelera…).",
      "Analizad para cada uno el encargo, el usuario y las tres funciones.",
      "Evaluadlos con cuatro criterios de buen diseño y elegid el que más falla.",
      "Bocetad una propuesta de mejora y presentadla en dos minutos.",
    ],
    producto: "Fichas de análisis de tres objetos y boceto de mejora de uno.",
    evaluacion: [
      "Identifica bien las funciones y el usuario.",
      "Aplica criterios de buen diseño con argumentos.",
      "La propuesta de mejora resuelve el fallo detectado.",
    ],
  },
  familias: [
    "Jugad a encontrar en casa el objeto mejor y peor diseñado y explicad por qué.",
    "Preguntadle qué ámbito del diseño le interesa más y buscad juntos dónde se estudia.",
    "Fijaos en los envases del supermercado: ¿qué os dicen antes de leer la etiqueta?",
    "Visitad una tienda de diseño o un museo de artes decorativas.",
  ],
  saberes: "Concepto de diseño y su evolución; diferencias y relaciones entre arte, artesanía y diseño; funciones práctica, estética y simbólica; ámbitos y profesiones del diseño; forma y función; criterios de calidad y responsabilidad social del diseño",
  ideas: [
    "Exposición en el aula de objetos traídos de casa con su ficha de funciones.",
    "Debate «¿es arte o es diseño?» con imágenes de objetos ambiguos.",
    "Charla de un profesional del diseño de la zona o de una Escuela de Arte.",
    "Análisis colectivo de la señalética del centro.",
  ],
  fuentes: [
    { t: "Diseño, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dise%C3%B1o" },
    { t: "Dieter Rams, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dieter_Rams" },
  ],
});
