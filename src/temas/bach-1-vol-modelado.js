// Volumen, 1º de Bachillerato. Tema 4 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-vol");

module.exports = B.tema({
  titulo: "Técnicas aditivas: el modelado",
  minutos: 60,
  objetivos: [
    "Comprender el modelado como técnica aditiva",
    "Preparar, conservar y trabajar la arcilla y la plastilina",
    "Seguir el proceso del armazón a las masas y el detalle",
    "Conocer las técnicas cerámicas básicas y el secado y la cocción",
  ],
  claves: ["modelado", "técnica aditiva", "arcilla", "armazón", "palillos", "churros", "planchas", "cocción"],
  pregunta: {
    texto: "Si te equivocas tallando un bloque de mármol, no hay vuelta atrás. ¿Y si te equivocas modelando barro?",
    respuesta: "Pues lo arreglas: el modelado es una <mark>técnica aditiva</mark> y flexible. Se añade material, se quita, se aprieta y se vuelve a añadir. Por eso los escultores lo usan para pensar, probar y hacer los modelos de obras que luego se pasarán a otros materiales.",
  },
  lectura: {
    titulo: "Las manos piensan",
    html: `<p>Auguste Rodin modelaba deprisa, con las manos manchadas de barro, mientras sus modelos caminaban por el taller. Quería atrapar el movimiento antes de que desapareciera. Sus figuras conservan la huella de los dedos, como si aún estuvieran haciéndose.</p>
    <p>El modelado es la técnica más directa del volumen: una bola de barro, tus manos y unas pocas herramientas bastan para empezar. Con él aprenderás a construir una forma desde dentro hacia fuera, de lo general a lo particular, y a <b>corregir</b> sin miedo. Es la escuela de la paciencia y de la observación.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es modelar",
      html: `<p><b>Modelar</b> es dar forma a un material blando añadiendo, quitando, presionando y alisando. Es una técnica <b>aditiva</b>: la obra crece pieza a pieza, al contrario que la talla, que quita materia de un bloque. Se usan materiales plásticos: arcilla, plastilina, cera o pastas de modelar.</p>
      <p>Su gran ventaja es que permite <b>rectificar</b>. Por eso se emplea para bocetos y maquetas y para los modelos originales que después se reproducen en escayola, resina o bronce mediante moldes. Muchas grandes esculturas de bronce empezaron siendo de barro.</p>`,
      svg: B.sumarQuitar("Técnica aditiva frente a técnica sustractiva"),
    },
    {
      h: "Preparar y conservar el barro",
      html: `<p>La arcilla debe estar <b>homogénea</b>, sin burbujas de aire ni grumos. Para ello se <b>amasa</b> (o se «cuña») presionando y doblando, como el pan. Si está muy dura se humedece; si se pega a las manos, está demasiado mojada y hay que dejarla orear.</p>
      <p>Mientras se trabaja varios días, la obra se cubre con un <b>plástico</b> y un paño húmedo para que no se seque. Para unir dos piezas se rayan las superficies y se pegan con <b>barbotina</b>, barro muy líquido que actúa como cola. Sin esta precaución, las uniones se agrietan al secar.</p>`,
      svg: B.flujo("Unir dos piezas de barro", ["Rayar las dos superficies", "Aplicar barbotina", "Presionar y fundir la unión", "Alisar con el palillo"]),
    },
    {
      h: "Herramientas de modelado",
      html: `<p>Las herramientas principales son las <b>manos</b>. Además se usan <b>palillos</b> de madera o boj, con extremos planos, redondos o dentados, para empujar, alisar y marcar; <b>vaciadores</b> o desbastadores, con un aro de alambre, para quitar barro y vaciar; y <b>espátulas</b> para superficies lisas.</p>
      <p>Para la cerámica se usan también un <b>rodillo</b> y listones guía para hacer planchas de grosor uniforme, un hilo para cortar el bloque de barro, esponjas y un <b>torno</b> o placa giratoria, que permite girar la obra y verla desde todos los ángulos sin moverse.</p>`,
      svg: B.cajas("Herramientas de modelado", [["Manos", "presionar|y añadir"], ["Palillos", "empujar, alisar|marcar"], ["Vaciadores", "quitar|y vaciar"], ["Placa giratoria", "ver todos|los lados"]]),
      video: { id: "M0YXSTmsdbQ", titulo: "10 primeros pasos para modelar figuras o esculturas", canal: "Carlos Borras", vistas: 179377 },
    },
    {
      h: "El armazón o estructura",
      html: `<p>Una figura de barro alta, con brazos o piernas finas, se hunde o se rompe por su propio peso. Por eso se construye primero un <b>armazón</b>: una estructura interna de alambre, varilla o madera, sujeta a una base, que sostiene el material como un esqueleto.</p>
      <p>El armazón debe estar bien firme y no salirse de la forma final. En obras para cocer no se puede usar, porque el metal estalla en el horno: en ese caso la figura se hace compacta o hueca, o se modela sobre un soporte que se retira antes de secar.</p>`,
      svg: B.capas("Capas de una figura modelada", [["Base", "tablero firme"], ["Armazón", "alambre o varilla"], ["Masas", "barro en volúmenes grandes"], ["Detalle", "superficie y textura"]]),
    },
    {
      h: "De lo general a lo particular",
      html: `<p>El modelado sigue un orden. Primero se colocan las <b>grandes masas</b> (tronco, cabeza, extremidades) con bolas y rollos de barro, comprobando proporciones y equilibrio. Luego se definen los <b>planos</b> principales y las direcciones. Al final llegan el <b>detalle</b> y la <b>textura</b>.</p>
      <p>Es importante <b>girar</b> la obra constantemente y mirarla desde lejos y desde todos los lados: un error de perfil no se ve de frente. Igual que en el dibujo, conviene trabajar todo a la vez y no terminar una parte antes que las demás.</p>`,
      svg: B.flujo("Proceso del modelado", ["Boceto y armazón", "Grandes masas y proporción", "Planos y direcciones", "Detalle y textura", "Revisar desde todos los lados"]),
      video: { id: "5PCpVjvTg_I", titulo: "Modelado de un rostro femenino", canal: "fabian alejandro romero", vistas: 350467 },
    },
    {
      h: "El relieve modelado",
      html: `<p>Para modelar un relieve se parte de una <b>placa</b> de barro de grosor uniforme sobre un tablero. Se dibuja el motivo con un palillo y se trabaja de dos maneras: <b>añadiendo</b> barro para las zonas que sobresalen o <b>rebajando</b> el fondo.</p>
      <p>El reto del relieve es crear sensación de profundidad con muy poco grosor: los planos más cercanos sobresalen más y los lejanos menos, y las sombras hacen el resto. Es un buen ejercicio para empezar, porque la pieza es estable y se puede reproducir luego con un molde de escayola.</p>`,
      svg: B.relieves("Grados de relieve que se pueden modelar en una placa"),
    },
    {
      h: "Técnicas cerámicas básicas",
      html: `<p>La cerámica modela piezas huecas que se pueden cocer. La técnica del <b>pellizco</b> abre una bola con el pulgar y adelgaza las paredes presionando. La de <b>churros</b> superpone rollos de barro unidos y alisados; así se hicieron vasijas durante milenios. La de <b>planchas</b> corta láminas de barro y las une como paredes, ideal para formas geométricas.</p>
      <p>Con el <b>torno</b> de alfarero se levantan piezas redondas mientras giran. Todas estas técnicas producen paredes de grosor parecido, lo que evita roturas al secar y cocer.</p>`,
      svg: B.cajas("Técnicas cerámicas", [["Pellizco", "abrir una bola|con el pulgar"], ["Churros", "rollos superpuestos|y alisados"], ["Planchas", "láminas unidas|formas rectas"], ["Torno", "piezas redondas|que giran"]]),
    },
    {
      h: "Secado, cocción y acabado",
      html: `<p>El barro pierde agua y <b>encoge</b> al secar. Debe secar <b>despacio</b> y de forma uniforme, tapado al principio, para que no se agriete. Seco del todo se llama <b>bizcocho</b> tras la primera cocción, que se hace en un horno a unos 900-1.000 °C y convierte la arcilla en terracota.</p>
      <p>Después se puede dejar natural, patinar o <b>esmaltar</b> y volver a cocer para obtener una superficie vítrea y brillante. Si no hay horno, se puede usar pasta que seca al aire o reproducir la obra en escayola mediante un molde.</p>`,
      svg: B.flujo("Del barro húmedo a la pieza acabada", ["Modelar y vaciar", "Secar lento y tapado", "Primera cocción: bizcocho", "Esmaltar y segunda cocción"]),
    },
  ],
  figura: {
    titulo: "El modelado en cuatro claves",
    items: [["Aditivo", "+", "se añade", "y se corrige"], ["Estructura", "⌇", "armazón", "y base"], ["Proceso", "→", "masas, planos", "y detalle"], ["Cerámica", "♨", "churros, planchas", "y cocción"]],
  },
  video: { id: "nPO7rHGSRUQ", titulo: "Modelado en arcilla", canal: "TICPlasTIC", vistas: 581927 },
  quiz: [
    ["El modelado es una técnica…", ["sustractiva", "aditiva", "de fundición", "de soldadura"], 1, "Se añade material."],
    ["Amasar el barro sirve para…", ["secarlo", "quitar burbujas de aire y homogeneizarlo", "darle color", "cocerlo"], 1, "Evita roturas."],
    ["La barbotina es…", ["un palillo", "barro muy líquido para unir piezas", "un horno", "un esmalte"], 1, "Funciona como cola."],
    ["Para quitar barro y vaciar piezas se usa el…", ["vaciador", "pincel", "cincel", "torno"], 0, "Tiene un aro de alambre."],
    ["El esqueleto interno que sostiene una figura de barro es el…", ["molde", "armazón", "pedestal", "bizcocho"], 1, "De alambre o varilla."],
    ["El modelado se trabaja…", ["de lo particular a lo general", "de lo general a lo particular", "solo por delante", "sin girar la obra"], 1, "Primero las masas."],
    ["La técnica cerámica que superpone rollos de barro es la de…", ["planchas", "pellizco", "churros", "torno"], 2, "Muy antigua."],
    ["El barro, al secar…", ["crece", "encoge", "se vuelve líquido", "no cambia"], 1, "Pierde agua."],
    ["La pieza tras la primera cocción se llama…", ["barbotina", "bizcocho", "esmalte", "churro"], 1, "Todavía sin esmaltar."],
    ["Una obra de barro con armazón metálico interior…", ["se puede cocer sin problema", "no debe cocerse", "se esmalta antes", "se seca en el horno"], 1, "El metal y el barro se dilatan distinto."],
  ],
  examen: [
    ["Dos piezas de barro se separan al secar. ¿Qué faltó?", ["cocerlas más", "rayar y unir con barbotina", "pintarlas", "usar plastilina"], 1, "Así la unión queda firme."],
    ["Un brazo de barro se dobla y se cae. Faltaba…", ["textura", "armazón", "esmalte", "relieve"], 1, "Sostiene el peso."],
    ["Para hacer una caja cerámica con caras rectas es mejor la técnica de…", ["pellizco", "planchas", "torno", "churros"], 1, "Láminas unidas."],
    ["Un alumno termina perfectamente la nariz antes de colocar la cabeza entera. Su error es…", ["no seguir el orden de lo general a lo particular", "usar barro", "girar la obra", "usar palillos"], 0, "Primero las masas."],
    ["Una pieza se agrieta al secar al sol. Lo mejor habría sido…", ["secarla despacio y tapada", "mojarla en el horno", "añadir alambre", "esmaltarla húmeda"], 0, "Secado lento y uniforme."],
  ],
  feynman: ["Por qué el modelado es aditivo y flexible", "Cómo preparar, conservar y unir el barro", "Para qué sirve el armazón", "El proceso de las masas al detalle"],
  mapa: ["EL MODELADO", [["Material", "arcilla · plastilina · cera"], ["Útiles", "manos · palillos · vaciadores"], ["Proceso", "armazón · masas · detalle"], ["Cerámica", "churros · planchas · cocción"]]],
  tarjetas: [
    ["Modelar", "Dar forma a un material blando añadiendo y quitando."],
    ["Técnica aditiva", "La que construye la obra añadiendo material."],
    ["Amasar", "Trabajar el barro para quitar aire y homogeneizarlo."],
    ["Barbotina", "Barro líquido para unir piezas."],
    ["Armazón", "Estructura interna que sostiene la figura."],
    ["Churros", "Técnica cerámica de rollos superpuestos."],
    ["Bizcocho", "Pieza cerámica tras la primera cocción."],
    ["Esmalte", "Capa vítrea que se funde sobre la cerámica."],
  ],
  ejemplos: [
    ["Planifica una cabeza de barro de 20 cm que se va a cocer.", ["Sin armazón metálico interior.", "Modelar compacta sobre un soporte de papel que se retira.", "Vaciar por dentro dejando 1-2 cm de pared.", "Secar despacio y cocer."], "Cabeza hueca, sin metal y secada con cuidado."],
    ["Explica el orden para modelar una figura de pie.", ["Base y armazón de alambre.", "Masas de tronco, cabeza y piernas.", "Planos y contrapposto.", "Detalle y textura girando la obra."], "Del esqueleto al detalle, revisando todos los lados."],
    ["Elige técnica cerámica para un cuenco, un jarrón alto y una caja.", ["Cuenco: pellizco.", "Jarrón alto: churros o torno.", "Caja: planchas."], "Cada forma tiene su técnica más adecuada."],
  ],
  errores: [
    "Dejar el barro destapado entre sesiones.",
    "Unir piezas sin rayar ni barbotina.",
    "Detallar una parte antes de tener las masas.",
    "Hacer paredes muy gruesas o desiguales en piezas para cocer.",
  ],
  ejercicios: {
    b: [
      ["Define modelado y nombra tres materiales para modelar.", "Dar forma a un material blando añadiendo y quitando; arcilla, plastilina y cera."],
      ["¿Para qué sirve amasar el barro?", "Para eliminar burbujas de aire y que tenga una humedad uniforme."],
      ["Nombra tres herramientas de modelado y su función.", "Palillo (empujar, alisar), vaciador (quitar barro, vaciar), espátula (alisar superficies)."],
      ["¿Qué es un armazón?", "Una estructura interna de alambre o varilla que sostiene la figura."],
    ],
    m: [
      ["Explica cómo se unen dos piezas de barro.", "Se rayan las superficies, se aplica barbotina, se presionan y se alisa la unión."],
      ["Describe las técnicas de pellizco, churros y planchas.", "Pellizco: abrir una bola con el pulgar. Churros: rollos superpuestos. Planchas: láminas cortadas y unidas."],
      ["¿Por qué hay que girar la obra mientras se modela?", "Porque es tridimensional: hay que comprobar proporciones y formas desde todos los puntos de vista."],
      ["¿Qué ocurre durante el secado y la cocción del barro?", "Pierde agua y encoge; con la cocción se transforma en terracota, dura y resistente."],
    ],
    a: [
      ["Modela un relieve en una placa de barro con tres planos de profundidad.", "Respuesta abierta: placa uniforme, motivo dibujado, primer plano más alto, fondo rebajado, fotos con luz lateral."],
      ["Modela una figura de 25 cm con armazón y explica cada fase con fotos.", "Respuesta abierta: base, armazón, masas, planos, detalle; registro fotográfico desde varios lados."],
    ],
  },
  glosario: [
    ["Cuñar", "Amasar el barro para quitar el aire."],
    ["Orear", "Dejar que pierda humedad al aire."],
    ["Palillo", "Herramienta de madera para modelar."],
    ["Vaciador", "Herramienta con aro de alambre para quitar barro."],
    ["Torno", "Rueda giratoria para modelar piezas redondas."],
    ["Terracota", "Barro cocido."],
    ["Encoger", "Reducirse de tamaño al perder agua."],
    ["Esmaltar", "Cubrir la cerámica con una capa vítrea."],
  ],
  situacion: {
    titulo: "Retrato en barro",
    reto: "Modelar un retrato expresivo de un compañero o compañera.",
    pasos: [
      "Dibujad el rostro de frente y de perfil.",
      "Construid las masas de cabeza y cuello sobre un soporte.",
      "Situad ojos, nariz y boca con proporciones correctas.",
      "Trabajad la expresión y la textura y fotografiad desde cuatro lados.",
    ],
    producto: "Un retrato de barro y su registro fotográfico.",
    evaluacion: [
      "Las proporciones son correctas desde varios lados.",
      "Se sigue el orden de masas a detalle.",
      "La superficie y la textura aportan expresividad.",
      "La pieza está bien conservada y unida.",
    ],
  },
  familias: [
    "Modelad juntos con plastilina o pasta de secado al aire algo de la casa.",
    "Visitad un taller de cerámica o un alfar tradicional.",
    "Buscad en casa objetos de cerámica y averiguad cómo pudieron hacerse.",
    "Ayudad a guardar el barro bien tapado para la próxima clase.",
  ],
  saberes: "Técnicas aditivas: el modelado. Preparación y conservación de la arcilla, unión con barbotina, herramientas, armazón, proceso de las masas al detalle, relieve modelado, técnicas cerámicas (pellizco, churros, planchas, torno), secado, cocción y acabados.",
  ideas: [
    "Ejercicio de cabezas rápidas en plastilina en 10 minutos.",
    "Relieve modelado en placa para reproducir en escayola.",
    "Cuenco por pellizco y vasija por churros.",
    "Visita virtual al taller de un ceramista.",
  ],
  fuentes: [
    { t: "Museo Nacional de Cerámica y Artes Suntuarias González Martí", url: "https://www.culturaydeporte.gob.es/mnceramica/inicio.html" },
  ],
});
