// Volumen, 1º de Bachillerato. Tema 7 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-vol");

module.exports = B.tema({
  titulo: "Moldes y reproducción",
  minutos: 60,
  objetivos: [
    "Entender la relación entre positivo, negativo y copia",
    "Distinguir moldes rígidos y flexibles, de una o varias piezas",
    "Conocer el vaciado en escayola y resina y la fundición a la cera perdida",
    "Reflexionar sobre la copia, la serie y el original",
  ],
  claves: ["molde", "positivo", "negativo", "vaciado", "desmoldeante", "silicona", "cera perdida", "edición"],
  pregunta: {
    texto: "Si una escultura de bronce se rompe, ¿puede hacerse otra exactamente igual?",
    respuesta: "Sí, si se conserva el <mark>molde</mark>. Las esculturas de bronce no se tallan: se funden a partir de un modelo, normalmente de barro o cera, mediante moldes. Por eso de una misma obra de Rodin existen varias copias originales en distintos museos del mundo.",
  },
  lectura: {
    titulo: "Doce pensadores",
    html: `<p>Si viajas por el mundo, puedes encontrar <i>El pensador</i> de Rodin en París, Filadelfia, Tokio, Buenos Aires o Copenhague. ¿Cuál es el auténtico? Todos y ninguno. Rodin modeló la figura en barro, se sacó un molde y de él se fundieron bronces durante décadas, incluso después de su muerte.</p>
    <p>Los moldes permiten <b>reproducir</b> una obra, pasarla de un material frágil a otro duradero y hacer series. Son una técnica antigua (las monedas, los ladrillos y las figurillas romanas ya se moldeaban) y hoy esencial en el cine, el diseño y la industria. En este tema aprenderás a hacerlos.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Positivo, negativo y copia",
      html: `<p>Un <b>molde</b> es un hueco que conserva en negativo la forma de un objeto. El proceso tiene tres momentos: el <b>positivo</b> u original (por ejemplo, una figura de barro), el <b>negativo</b> o molde, que es su huella invertida, y la <b>copia</b>, un nuevo positivo que se obtiene al rellenar el molde con otro material.</p>
      <p>Los moldes sirven para tres cosas: pasar una obra de un material blando a otro <b>duradero</b> (barro a bronce), hacer <b>varias copias</b> iguales y reproducir objetos reales, como manos, hojas o rostros, con gran fidelidad.</p>`,
      svg: B.molde("Original, molde de dos piezas y copia"),
    },
    {
      h: "Desmoldeantes y contrasalidas",
      html: `<p>Para que el molde se separe del original sin romperlo hay que aplicar un <b>desmoldeante</b>: vaselina, jabón, cera o productos específicos. Sin él, la escayola se pega y el trabajo se pierde.</p>
      <p>El gran enemigo de los moldes son las <b>contrasalidas</b>: partes de la forma que impiden sacar la pieza, como el hueco bajo una oreja o entre los brazos y el cuerpo. Un molde rígido solo puede retirarse en una dirección, así que, si hay contrasalidas, hay que dividirlo en <b>varias piezas</b> o usar un material flexible.</p>`,
      svg: B.comparar("Forma fácil y forma con contrasalidas", ["Sin contrasalidas", ["relieve plano", "cuenco abierto", "molde de una pieza", "se saca hacia arriba"]], ["Con contrasalidas", ["cabeza, figura", "huecos y salientes", "molde de varias piezas", "o molde flexible"]]),
    },
    {
      h: "Molde rígido de escayola",
      html: `<p>El molde más sencillo es el de un <b>relieve</b>: se rodea la placa de barro con un muro de barro o tablillas, se cubre de escayola en varias capas y, tras fraguar, se separa. Es un molde <b>abierto</b> de una pieza.</p>
      <p>Para una figura se hace un molde de <b>dos o más piezas</b>: se divide el original con una línea de partición (con láminas metálicas o un muro de barro), se cubre cada parte, y se hacen <b>llaves</b>, entrantes y salientes que encajan para que las piezas vuelvan a cerrar exactamente. El molde se refuerza con estopa o arpillera.</p>`,
      svg: B.flujo("Molde de dos piezas en escayola", ["Línea de partición con láminas", "Primera capa fina de escayola", "Capas de refuerzo con estopa", "Llaves para encajar", "Abrir y sacar el original"]),
      video: { id: "JgYzeUPcCHc", titulo: "Cómo hacer moldes de yeso paso a paso", canal: "Joedibujando", vistas: 906045 },
    },
    {
      h: "Moldes flexibles",
      html: `<p>La <b>silicona</b> y el <b>látex</b> son materiales elásticos que se adaptan a las contrasalidas y copian detalles finísimos, como la textura de la piel. Como son blandos, se sostienen con una <b>madre</b> o contramolde rígido de escayola o resina que mantiene la forma.</p>
      <p>El <b>alginato</b>, el mismo que usan los dentistas, fragua en pocos minutos y sirve para sacar moldes de partes del cuerpo, como manos o caras, siempre con cuidado y con la nariz libre. Los moldes flexibles son más caros, pero permiten muchas copias y formas complejas.</p>`,
      svg: B.capas("Molde flexible con contramolde", [["Original", "figura con detalle"], ["Silicona", "copia el detalle"], ["Contramolde", "escayola rígida"], ["Copia", "resina o escayola"]]),
      video: { id: "3Afzt0DqqlY", titulo: "Cómo hacer un molde de silicona de dos partes para resina o escayola", canal: "Álvaro Díaz · Escultor e imaginero", vistas: 1823634 },
    },
    {
      h: "El vaciado",
      html: `<p><b>Vaciar</b> es llenar el molde con un material líquido que endurece. En <b>escayola</b> se vierte la mezcla, se mueve el molde para que llegue a todos los rincones y se elimina el aire. Si el molde es de escayola, se le aplica desmoldeante antes.</p>
      <p>Las <b>resinas</b> (poliéster, epoxi) y el <b>hormigón</b> dan copias más resistentes. Las piezas huecas se hacen por <b>colada</b>: se vierte barbotina en un molde de escayola, que absorbe agua y forma una pared; luego se vacía el sobrante, como en la fabricación de tazas. Al final se retoca la copia: se quitan las rebabas de las juntas.</p>`,
      svg: B.flujo("Vaciar en escayola", ["Aplicar desmoldeante", "Cerrar y atar el molde", "Verter y mover para quitar aire", "Dejar fraguar y abrir", "Retocar rebabas"]),
    },
    {
      h: "Fundición a la cera perdida",
      html: `<p>Es la técnica clásica del <b>bronce</b>, usada desde la Antigüedad. Se hace una copia del modelo en <b>cera</b>, se le añaden conductos de cera (bebederos y respiraderos) y se envuelve en un material refractario. Al calentarlo, la cera se derrite y sale: se «pierde».</p>
      <p>En el hueco que deja se vierte el bronce fundido, a más de 1.000 °C. Cuando se enfría, se rompe la cáscara, se cortan los conductos, se cincela la superficie y se aplica la <b>pátina</b>. Es un trabajo de fundición especializado, en el que colaboran escultores y artesanos.</p>`,
      svg: B.flujo("La cera perdida", ["Modelo en cera con conductos", "Envolver en material refractario", "Calentar: la cera sale", "Verter bronce fundido", "Romper, cincelar y patinar"]),
      video: { id: "uPgEIM-NbhQ", titulo: "Proceso de fundición a la cera perdida", canal: "National Sculpture Society", vistas: 494521 },
    },
    {
      h: "Reproducir objetos y cuerpos",
      html: `<p>Los moldes no solo copian esculturas: también reproducen <b>objetos reales</b>. Con barro o plastilina se pueden <b>estampar</b> hojas, conchas o texturas y luego vaciarlas en escayola. Con alginato se copian manos y rostros, como las antiguas máscaras mortuorias.</p>
      <p>Artistas como George Segal envolvieron personas con vendas de escayola para crear figuras blancas a tamaño real, y Rachel Whiteread vació en hormigón el <b>espacio interior</b> de una casa entera (<i>House</i>, 1993), convirtiendo el vacío en volumen. El cine y los parques temáticos usan moldes para máscaras, prótesis y decorados.</p>`,
      svg: B.estrella("Usos del molde", "Molde", ["Bronce", "Series", "Cuerpo", "Cine", "Industria"]),
    },
    {
      h: "Original, copia y serie",
      html: `<p>Si una obra puede reproducirse, ¿cuál es el original? En escultura, se considera <b>original</b> la obra realizada según la voluntad del artista, aunque haya varios ejemplares. Por eso las fundiciones hacen <b>ediciones limitadas</b> y numeradas (por ejemplo, 3/8: ejemplar tercero de ocho) y luego se suelen destruir los moldes.</p>
      <p>Las copias de escayola de los museos sirven para estudiar obras lejanas, y las <b>réplicas</b> protegen originales frágiles, como la Neocueva de Altamira. Copiar no es malo; lo que no se debe hacer es <b>engañar</b> presentando una copia como original.</p>`,
      svg: B.cajas("Tipos de ejemplar", [["Original", "obra del artista"], ["Edición", "serie numerada|y limitada"], ["Copia", "vaciado para estudio"], ["Réplica", "protege el original"]]),
    },
  ],
  figura: {
    titulo: "Moldes y reproducción en cuatro claves",
    items: [["Proceso", "+ − +", "positivo, negativo", "y copia"], ["Rígidos", "▣", "escayola", "varias piezas"], ["Flexibles", "≋", "silicona, látex", "alginato"], ["Bronce", "🔥", "cera perdida", "y pátina"]],
  },
  video: { id: "nlBDclSjAIA", titulo: "Vaciado en escayola", canal: "TICPlasTIC", vistas: 214056 },
  quiz: [
    ["El molde es la huella de la obra en…", ["positivo", "negativo", "relieve", "bizcocho"], 1, "Forma invertida."],
    ["Para que el molde no se pegue se usa…", ["barbotina", "desmoldeante", "pátina", "esmalte"], 1, "Vaselina, jabón, cera…"],
    ["Una parte que impide sacar la pieza del molde es una…", ["llave", "contrasalida", "rebaba", "colada"], 1, "Obliga a dividir el molde."],
    ["Las llaves de un molde sirven para…", ["cerrarlo con candado", "que las piezas encajen exactamente", "decorar", "verter el bronce"], 1, "Entrantes y salientes."],
    ["Un molde flexible se sostiene con un…", ["armazón", "contramolde o madre", "pedestal", "torno"], 1, "Rígido, de escayola o resina."],
    ["El material de los dentistas que sirve para moldear manos es el…", ["alginato", "mármol", "bronce", "acero"], 0, "Fragua en minutos."],
    ["Las tazas de cerámica se fabrican por…", ["talla", "colada de barbotina", "soldadura", "ranurado"], 1, "El molde absorbe agua."],
    ["En la técnica de la cera perdida, la cera…", ["se pinta", "se derrite y sale del molde", "se queda dentro", "se talla"], 1, "Deja el hueco para el bronce."],
    ["La numeración 3/8 en un bronce indica…", ["el precio", "el tercer ejemplar de una edición de ocho", "la altura", "el año"], 1, "Edición limitada."],
    ["Rachel Whiteread vació en hormigón…", ["un caballo", "el interior de una casa", "una moneda", "un barco"], 1, "House, 1993."],
  ],
  examen: [
    ["Quieres copiar una cabeza con orejas y mucho detalle. Lo mejor es…", ["molde abierto de una pieza", "molde de silicona con contramolde", "tallarla", "un armazón"], 1, "Se adapta a las contrasalidas."],
    ["Una copia de escayola tiene burbujas. Faltó…", ["mover el molde para quitar aire", "cocerla", "barbotina", "pátina"], 0, "Hay que eliminar el aire."],
    ["¿Por qué existen varias copias originales de El pensador?", ["Son falsificaciones", "Se fundieron en bronce a partir de moldes", "Se tallaron en mármol", "Son de plástico"], 1, "Ediciones autorizadas."],
    ["Una réplica de una cueva prehistórica sirve sobre todo para…", ["vender el original", "proteger el original frágil", "engañar", "hacer bronce"], 1, "Como la Neocueva de Altamira."],
    ["El orden correcto es…", ["copia, molde, original", "original, molde, copia", "molde, original, copia", "copia, original, molde"], 1, "Positivo, negativo, positivo."],
  ],
  feynman: ["Positivo, negativo y copia", "Por qué las contrasalidas obligan a dividir el molde", "Cómo se vacía en escayola", "Las fases de la cera perdida"],
  mapa: ["MOLDES Y REPRODUCCIÓN", [["Concepto", "positivo · negativo · copia"], ["Moldes", "rígidos · flexibles · piezas"], ["Vaciado", "escayola · resina · colada"], ["Bronce y serie", "cera perdida · edición"]]],
  tarjetas: [
    ["Molde", "Hueco que conserva en negativo la forma de un objeto."],
    ["Desmoldeante", "Producto que impide que el molde se pegue."],
    ["Contrasalida", "Parte que impide sacar la pieza del molde."],
    ["Llaves", "Entrantes y salientes para encajar las piezas del molde."],
    ["Contramolde", "Carcasa rígida que sostiene un molde flexible."],
    ["Vaciado", "Copia obtenida llenando un molde."],
    ["Cera perdida", "Fundición de bronce a partir de un modelo de cera."],
    ["Edición limitada", "Serie numerada de ejemplares de una obra."],
  ],
  ejemplos: [
    ["Haz el molde de un relieve de barro de 20 × 15 cm.", ["Levantar un muro de barro alrededor.", "Verter una primera capa fina de escayola.", "Reforzar con más capas y estopa.", "Fraguar, girar y separar el barro."], "Molde abierto de una pieza, listo para vaciar."],
    ["Explica qué molde necesita una mano en posición de saludo.", ["Tiene contrasalidas entre los dedos.", "Un molde rígido no saldría.", "Mejor silicona o alginato con contramolde."], "Molde flexible."],
    ["Describe la cadena de una escultura de bronce.", ["Modelo en barro.", "Molde y copia en cera.", "Cera perdida y colada de bronce.", "Cincelado y pátina."], "Del barro al bronce mediante moldes."],
  ],
  errores: [
    "Olvidar el desmoldeante.",
    "Hacer un molde rígido de una pieza con contrasalidas.",
    "No mover el molde y dejar burbujas.",
    "Presentar una copia como si fuera el original.",
  ],
  ejercicios: {
    b: [
      ["Define positivo, negativo y copia.", "Positivo: el original. Negativo: el molde, su huella invertida. Copia: nuevo positivo obtenido del molde."],
      ["Nombra tres desmoldeantes.", "Vaselina, jabón y cera."],
      ["¿Qué es una contrasalida?", "Una parte de la forma que impide sacar la pieza del molde rígido."],
      ["Cita dos materiales para moldes flexibles.", "Silicona y látex (también alginato)."],
    ],
    m: [
      ["Explica para qué sirven las llaves de un molde.", "Para que las piezas encajen siempre en la misma posición al cerrar el molde."],
      ["Describe la técnica de la cera perdida.", "Copia en cera con conductos, envuelta en refractario; se calienta, la cera sale, se vierte bronce y se rompe la cáscara."],
      ["¿Qué es la colada de barbotina?", "Verter barro líquido en un molde de escayola que absorbe agua y forma la pared; luego se vacía el sobrante."],
      ["¿Por qué se destruyen los moldes después de una edición limitada?", "Para garantizar que no se hagan más ejemplares y proteger el valor de la serie."],
    ],
    a: [
      ["Haz un molde de escayola de un relieve y obtén dos copias distintas (escayola y otro material).", "Respuesta abierta: proceso documentado, uso de desmoldeante, comparación de las copias."],
      ["Debate: ¿es igual de valioso un bronce fundido tras la muerte del artista? Argumenta.", "Respuesta abierta: voluntad del artista, edición autorizada, papel de la fundición y del mercado."],
    ],
  },
  glosario: [
    ["Línea de partición", "Línea por la que se divide un molde."],
    ["Estopa", "Fibra que refuerza la escayola."],
    ["Látex", "Material elástico para moldes."],
    ["Alginato", "Material de fraguado rápido para moldear el cuerpo."],
    ["Colada", "Vertido de material líquido en un molde."],
    ["Rebaba", "Resto de material en las juntas del molde."],
    ["Refractario", "Material que resiste altas temperaturas."],
    ["Réplica", "Copia fiel de una obra."],
  ],
  situacion: {
    titulo: "Huellas del entorno",
    reto: "Crear un mural de relieves con huellas de objetos y elementos naturales del centro.",
    pasos: [
      "Recoged hojas, cortezas, conchas y objetos con textura.",
      "Estampadlos en placas de barro y componed el relieve.",
      "Haced un molde de escayola de cada placa.",
      "Vaciad las copias y montad el mural.",
    ],
    producto: "Un mural de relieves vaciados en escayola.",
    evaluacion: [
      "Las huellas están bien elegidas y compuestas.",
      "Los moldes y copias se hacen correctamente.",
      "Se usan desmoldeante y normas de seguridad.",
      "El mural tiene unidad y está bien presentado.",
    ],
  },
  familias: [
    "Haced en casa la huella de una mano en masa de sal o arcilla.",
    "Buscad en museos o en internet obras que existan en varias copias.",
    "Fijaos en objetos moldeados: figuras de chocolate, juguetes, tazas.",
    "Visitad un museo de reproducciones o de calcos, si lo hay cerca.",
  ],
  saberes: "Moldes y reproducción: positivo, negativo y copia, desmoldeantes y contrasalidas, moldes rígidos de una y varias piezas, moldes flexibles y contramolde, vaciado en escayola, resina y colada, fundición a la cera perdida, reproducción de objetos y cuerpos, original, edición y réplica.",
  ideas: [
    "Molde de relieve y vaciado en clase.",
    "Huellas de texturas naturales en barro.",
    "Visita virtual a una fundición artística.",
    "Debate sobre original y copia.",
  ],
  fuentes: [
    { t: "Museo Nacional de Escultura: colección de reproducciones (Casa del Sol)", url: "https://www.culturaydeporte.gob.es/mnescultura/inicio.html" },
  ],
});
