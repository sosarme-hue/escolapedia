// Diseño, 2º de Bachillerato. Tema 11 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-dis");

module.exports = B.tema({
  titulo: "Diseño del espacio: interiores, efímero y escaparatismo",
  minutos: 60,
  objetivos: [
    "Comprender el espacio como materia del diseño: dimensiones, recorridos y usos",
    "Aplicar criterios de distribución, iluminación, color y materiales en un interior",
    "Conocer el diseño efímero (stands, exposiciones, escenografías) y el escaparatismo",
    "Representar un espacio con plantas, secciones y maquetas a escala",
  ],
  claves: ["espacio", "interiorismo", "distribución", "circulación", "iluminación", "diseño efímero", "stand", "escaparate"],
  pregunta: {
    texto: "¿Por qué en unas tiendas te apetece quedarte y en otras quieres salir enseguida?",
    respuesta: "Porque el <mark>espacio está diseñado</mark>: la luz, el color, la música, la anchura de los pasillos y el orden de los productos influyen en cómo te sientes y en lo que haces.",
  },
  lectura: {
    titulo: "Un pabellón de cuatro meses",
    html: `<p>En 1929, Barcelona celebró una Exposición Internacional. Alemania encargó su pabellón a Ludwig Mies van der Rohe y Lilly Reich: un edificio pequeño de mármol, vidrio, acero y agua, con paredes que no cerraban habitaciones sino que guiaban al visitante en un recorrido fluido.</p>
    <p>Dentro solo había unas pocas sillas diseñadas para la ocasión, la famosa silla Barcelona. Al acabar la exposición, el pabellón se desmontó. Pero su influencia fue tan grande que en 1986 se reconstruyó en el mismo lugar. Un espacio efímero, pensado para unos meses, cambió la forma de entender el espacio interior en todo el mundo.</p>`,
  },
  secciones: [3, 2, 2],
  bloques: [
    {
      h: "El espacio como materia del diseño",
      html: `<p>El diseño del espacio organiza lugares donde las personas viven, trabajan, compran o aprenden. A diferencia de un objeto, el espacio se <b>recorre</b> y se vive desde dentro, con todos los sentidos: vista, oído, tacto, olfato y temperatura.</p>
      <p>Abarca el <b>diseño de interiores</b> o interiorismo (viviendas, oficinas, comercios, restaurantes), el <b>diseño efímero</b> (stands, exposiciones, escenografías, eventos), el <b>escaparatismo</b> y el diseño de <b>espacios públicos</b> y mobiliario urbano. El interiorista trabaja dentro de una arquitectura ya existente o en colaboración con el arquitecto, y debe cumplir normas de seguridad, accesibilidad y evacuación.</p>`,
      svg: B.estrella("Ámbitos del espacio", "Espacio", ["Vivienda", "Comercio", "Oficina", "Exposición", "Escenografía", "Calle"]),
    },
    {
      h: "Analizar y distribuir",
      html: `<p>El proyecto empieza con un <b>programa de necesidades</b>: quién usará el espacio, qué actividades hará, qué muebles y equipos necesita. Después se analiza el lugar: medidas, orientación, luz natural, instalaciones, entradas.</p>
      <p>Con esos datos se hace la <b>distribución</b> o zonificación: se agrupan las zonas por usos (públicas y privadas, ruidosas y tranquilas) y se trazan las <b>circulaciones</b>, los caminos que siguen las personas. Un pasillo debe medir al menos unos 90 cm, y más si debe pasar una silla de ruedas. Una buena distribución evita cruces innecesarios y deja espacio libre alrededor de los muebles para abrir puertas y cajones o sentarse con comodidad.</p>`,
      svg: B.flujo("Del encargo a la distribución", ["Programa de necesidades", "Análisis del lugar", "Zonas por usos", "Circulaciones", "Mobiliario"]),
    },
    {
      h: "Escala y proporción",
      html: `<p>Un espacio se percibe en relación con el <b>cuerpo humano</b>. Un techo muy alto impresiona y uno bajo resulta íntimo; una sala estrecha y larga empuja a avanzar. La <b>escala</b> de los muebles debe corresponder a la del espacio: un sofá enorme en un salón pequeño lo hace agobiante, y una silla diminuta en un gran vestíbulo parece perdida.</p>
      <p>Para estudiarlo se dibujan <b>planos a escala</b> (1:50 en interiorismo es habitual) y se colocan figuras humanas como referencia. El arquitecto Le Corbusier propuso el <b>Modulor</b>, un sistema de medidas basado en la figura humana y la proporción áurea.</p>`,
      svg: B.comparar("Escala del espacio", ["Techo alto", ["impresiona", "solemnidad", "amplitud", "eco"]], ["Techo bajo", ["intimidad", "recogimiento", "calidez", "cercanía"]]),
    },
    {
      h: "Luz, color y materiales",
      html: `<p>La <b>iluminación</b> transforma un espacio. La luz natural se aprovecha y se controla con cortinas o lamas. La artificial se planifica en capas: <b>general</b> (ambiente), <b>de trabajo</b> (sobre la mesa o la encimera) y de <b>acento</b> (para destacar un cuadro o un producto). La temperatura de color importa: la luz cálida relaja y la fría activa.</p>
      <p>El <b>color</b> modifica la percepción: los claros amplían, los oscuros acogen o empequeñecen. Los <b>materiales</b> y texturas (madera, piedra, textiles, metal) aportan calidez o frialdad, y también condicionan la acústica, la limpieza y el mantenimiento.</p>`,
      svg: B.capas("Capas de luz", [["General", "ilumina todo el espacio"], ["De trabajo", "donde se hace la tarea"], ["De acento", "destaca un elemento"], ["Natural", "se aprovecha y se controla"]]),
      video: { id: "14akJT18R2c", titulo: "Elementos y principios del diseño de interiores", canal: "DECO IDEAS con estilo", vistas: 164359 },
    },
    {
      h: "Diseño efímero",
      html: `<p>El <b>diseño efímero</b> crea espacios temporales: <b>stands</b> de ferias, <b>exposiciones</b> en museos, <b>escenografías</b> de teatro, conciertos y televisión, y montajes de eventos. Debe causar un gran impacto en poco tiempo, montarse y desmontarse con rapidez y, cada vez más, reutilizarse.</p>
      <p>Un stand comunica la identidad de una marca en pocos metros: suele tener una zona abierta de atracción, una de exposición de productos y otra de reunión. En una exposición, el <b>diseño museográfico</b> organiza el recorrido, la luz, los soportes y los textos para contar una historia con las obras.</p>`,
      svg: B.cajas("Claves del diseño efímero", [["Impacto", "en poco|tiempo"], ["Montaje", "rápido|y seguro"], ["Identidad", "de la marca|o el tema"], ["Reutilizar", "módulos|y materiales"]]),
    },
    {
      h: "El escaparatismo",
      html: `<p>El <b>escaparate</b> es la cara de una tienda hacia la calle: en pocos segundos debe atraer al peatón, comunicar el estilo del comercio e invitar a entrar. El escaparatista trabaja la composición, el color, la luz y la narración, a menudo con un <b>tema</b> que cambia con las estaciones y las campañas.</p>
      <p>Se usan recursos como el punto focal a la altura de los ojos, la composición en triángulo o en repetición, el contraste de escalas y la iluminación de acento. Dentro de la tienda, el <b>visual merchandising</b> ordena los productos y los recorridos para facilitar la compra: lo más buscado suele ir al fondo, para que el cliente recorra toda la tienda.</p>`,
      svg: B.tercios("El punto focal del escaparate, en un punto fuerte a la altura de los ojos"),
    },
    {
      h: "Representar el espacio",
      html: `<p>El espacio se representa con <b>plantas</b> (vista desde arriba con muebles y circulaciones), <b>alzados</b> y <b>secciones</b> (cortes verticales que muestran alturas), siempre a escala y con cotas. Las <b>perspectivas</b> y los renders muestran el ambiente final, y los paneles de materiales enseñan colores, texturas y acabados.</p>
      <p>Las <b>maquetas</b> a escala, de cartón pluma o madera de balsa, ayudan a entender volúmenes y recorridos. Hoy se usan modelos 3D y recorridos virtuales que permiten al cliente «caminar» por el espacio antes de construirlo y opinar sobre cada detalle.</p>`,
      svg: B.rejilla("Cómo se representa", ["Dibujo", "Muestra", "Escala"], [["Planta", "distribución", "1:50"], ["Sección", "alturas", "1:50"], ["Perspectiva", "ambiente", "libre"], ["Maqueta", "volumen", "1:20-1:100"]]),
    },
  ],
  figura: {
    titulo: "Diseñar el espacio en cuatro claves",
    items: [["Usos", "◫", "programa y", "distribución"], ["Escala", "↕", "cuerpo y", "proporción"], ["Ambiente", "☀", "luz, color", "y materiales"], ["Efímero", "▲", "stand, expo", "y escaparate"]],
  },
  video: { id: "iPAvt5oHbgY", titulo: "Diseño de interiores de principio a fin", canal: "Domestika", vistas: 5497225 },
  quiz: [
    ["El espacio se diferencia de un objeto en que…", ["no tiene forma", "se recorre y se vive desde dentro", "no se diseña", "solo es visual"], 1, "Experiencia con todos los sentidos."],
    ["El programa de necesidades recoge…", ["el presupuesto de la obra", "quién usará el espacio, qué hará y qué necesita", "los colores", "el horario"], 1, "Punto de partida."],
    ["Las circulaciones son…", ["las tuberías", "los caminos que siguen las personas", "las ventanas", "los muebles"], 1, "Recorridos."],
    ["Una escala habitual en planos de interiorismo es…", ["1:1.000", "1:50", "1:1", "10:1"], 1, "Muebles visibles y medibles."],
    ["El Modulor es…", ["un mueble", "un sistema de medidas basado en el cuerpo humano", "un tipo de luz", "un material"], 1, "Le Corbusier."],
    ["La luz de acento sirve para…", ["iluminar todo", "destacar un elemento concreto", "ahorrar", "trabajar"], 1, "Cuadros, productos."],
    ["Los colores claros en un interior…", ["empequeñecen", "dan sensación de amplitud", "no influyen", "dan calor siempre"], 1, "Reflejan más luz."],
    ["Un stand de feria es un ejemplo de…", ["interiorismo doméstico", "diseño efímero", "diseño de producto", "diseño editorial"], 1, "Espacio temporal."],
    ["El visual merchandising organiza…", ["la contabilidad", "productos y recorridos dentro de la tienda", "la publicidad en radio", "el almacén"], 1, "Facilitar la compra."],
    ["Una sección es…", ["una vista desde arriba", "un corte vertical que muestra alturas", "una foto", "un render"], 1, "Representación del espacio."],
  ],
  examen: [
    ["En una cocina hay que cruzar el comedor para ir de la nevera al fregadero. ¿Qué falla?", ["El color", "La distribución y las circulaciones", "La tipografía", "Nada"], 1, "Recorridos ineficientes."],
    ["Un salón pequeño se ve agobiante con un sofá enorme y paredes oscuras. ¿Qué propones?", ["Más muebles", "Mobiliario a escala y colores claros", "Techo más bajo", "Quitar la luz"], 1, "Escala y color."],
    ["Una tienda de joyas quiere destacar cada pieza. ¿Qué iluminación usa?", ["Solo general", "De acento", "Ninguna", "Luz de emergencia"], 1, "Focalizar."],
    ["Una marca va a cinco ferias al año. ¿Qué tipo de stand le conviene?", ["Uno distinto cada vez y de usar y tirar", "Uno modular y reutilizable", "Ninguno", "Uno de obra"], 1, "Sostenible y económico."],
    ["Quieres comprobar las alturas de un altillo. ¿Qué dibujas?", ["Una planta", "Una sección", "Un logotipo", "Un moodboard"], 1, "Corte vertical."],
  ],
  feynman: ["Qué es el programa de necesidades y la distribución", "Cómo influye la escala en la sensación de un espacio", "Las capas de iluminación", "Qué tienen en común un stand y un escaparate"],
  mapa: ["DISEÑO DEL ESPACIO", [["Analizar", "necesidades · lugar · usos"], ["Organizar", "zonas · circulación · escala"], ["Ambientar", "luz · color · materiales"], ["Efímero", "stand · exposición · escaparate"]]],
  tarjetas: [
    ["Interiorismo", "Diseño de espacios interiores para su uso."],
    ["Programa de necesidades", "Lista de usuarios, actividades y equipamiento de un espacio."],
    ["Circulación", "Recorrido que siguen las personas en un espacio."],
    ["Escala", "Relación entre las medidas del dibujo y las reales."],
    ["Luz de acento", "Iluminación que destaca un elemento concreto."],
    ["Diseño efímero", "Diseño de espacios temporales como stands o exposiciones."],
    ["Escaparatismo", "Diseño de escaparates para atraer al público."],
    ["Sección", "Corte vertical que muestra las alturas de un espacio."],
  ],
  ejemplos: [
    ["Redacta el programa de necesidades de una sala de estudio del instituto.", ["Usuarios: 20 estudiantes, en silencio, por la tarde.", "Actividades: estudio individual y en pequeño grupo.", "Necesidades: mesas, enchufes, buena luz de trabajo, estanterías y zona separada para hablar."], "Programa que guía la distribución."],
    ["Planifica la iluminación de una pequeña librería.", ["General: luz cálida uniforme en techo.", "Trabajo: luz sobre el mostrador.", "Acento: focos en el escaparate y en la mesa de novedades."], "Tres capas de luz con intención."],
    ["Esquema de un stand de 3 × 3 m para una marca de bicicletas.", ["Zona abierta delantera con una bici destacada e iluminada.", "Pared trasera con la marca y una pantalla.", "Pequeña mesa lateral para atender."], "Atracción, exposición y reunión en 9 m²."],
  ],
  errores: [
    "Colocar muebles sin pensar en los recorridos.",
    "Usar una única luz general para todo.",
    "Elegir muebles fuera de escala para el espacio.",
    "Diseñar espacios efímeros que se tiran tras un solo uso.",
  ],
  ejercicios: {
    b: [
      ["Cita cuatro ámbitos del diseño del espacio.", "Interiores, diseño efímero, escaparatismo y espacios públicos."],
      ["¿Qué es una circulación y qué ancho mínimo aproximado tiene un pasillo?", "El recorrido de las personas; unos 90 cm, más si debe pasar una silla de ruedas."],
      ["Nombra las tres capas de luz artificial.", "General, de trabajo y de acento."],
      ["¿Qué diferencia una planta de una sección?", "La planta se ve desde arriba; la sección es un corte vertical que muestra alturas."],
    ],
    m: [
      ["Dibuja la planta de tu habitación a escala 1:50 con los muebles y los recorridos.", "Respuesta gráfica: medidas reales, muebles a escala y circulaciones marcadas."],
      ["Explica cómo usarías el color para que un pasillo estrecho parezca más ancho.", "Paredes claras, techo claro, quizá la pared del fondo más oscura para acortar, buena iluminación."],
      ["Analiza un escaparate de tu localidad: tema, punto focal, composición y luz.", "Respuesta abierta: describir los recursos y valorar su eficacia."],
      ["¿Por qué el diseño efímero tiende hoy a la reutilización?", "Para reducir residuos y costes: se usan módulos y materiales que se montan en distintos eventos."],
    ],
    a: [
      ["Rediseña un rincón del instituto (entrada, biblioteca o pasillo): programa, planta, luz, color y maqueta.", "Respuesta abierta. Se valora la coherencia entre necesidades y propuesta, y la representación a escala."],
      ["Diseña un escaparate temático para un comercio de tu barrio y preséntalo con un boceto en perspectiva.", "Respuesta abierta: tema, composición, punto focal, iluminación y materiales."],
    ],
  },
  glosario: [
    ["Zonificación", "División del espacio en zonas según sus usos."],
    ["Cota", "Medida indicada en un plano."],
    ["Temperatura de color", "Tono cálido o frío de una luz, medido en kelvin."],
    ["Escenografía", "Diseño del espacio de una representación."],
    ["Museografía", "Diseño de la presentación de las obras en un museo."],
    ["Cartón pluma", "Material ligero usado para maquetas."],
    ["Mobiliario urbano", "Bancos, farolas, papeleras y otros elementos de la calle."],
    ["Recorrido virtual", "Visita a un espacio en un modelo 3D."],
  ],
  situacion: {
    titulo: "Nuestra sala de exposiciones",
    reto: "Diseñar el montaje de una exposición de los proyectos de Diseño en un espacio del centro.",
    pasos: [
      "Medid el espacio y dibujad la planta a escala.",
      "Definid el discurso y el recorrido del visitante.",
      "Diseñad soportes, iluminación y señalética de la exposición.",
      "Haced una maqueta y montad la exposición real.",
    ],
    producto: "Planta, maqueta y exposición montada en el centro.",
    evaluacion: [
      "El recorrido es claro y accesible.",
      "La luz y los soportes realzan los proyectos.",
      "Planos y maqueta están a escala y bien presentados.",
    ],
  },
  familias: [
    "Pensad juntos cómo mejorar la distribución de una habitación de casa.",
    "Fijaos en la luz de distintas tiendas y restaurantes.",
    "Visitad una exposición y comentad cómo está montada.",
    "Mirad escaparates en Navidad y elegid el mejor diseñado.",
  ],
  saberes: "Diseño del espacio: interiorismo, diseño efímero, escaparatismo y espacio público; programa de necesidades, distribución y circulaciones; escala, proporción y antropometría; iluminación, color y materiales; representación del espacio (planta, sección, perspectiva, maqueta, modelo 3D)",
  ideas: [
    "Levantamiento de la planta del aula por grupos.",
    "Maquetas de cartón pluma de espacios del centro.",
    "Visita a una feria, un museo o un teatro para ver el montaje.",
    "Concurso de escaparates con comercios del barrio.",
  ],
  fuentes: [
    { t: "Pabellón de Alemania (Barcelona), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Pabell%C3%B3n_de_Alemania_(Barcelona)" },
    { t: "Diseño de interiores, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dise%C3%B1o_de_interiores" },
  ],
});
