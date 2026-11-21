// Artes Escénicas II, 2º de Bachillerato. Tema 8 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ae");

module.exports = B.tema({
  titulo: "La dirección escénica y el diseño del espectáculo",
  minutos: 60,
  objetivos: [
    "Conocer las funciones de la dirección escénica y el concepto de propuesta de dirección",
    "Comprender cómo se diseñan el espacio, la luz, el sonido, el vestuario y la caracterización",
    "Utilizar herramientas de dirección: cuaderno, planta, trazo y composición",
    "Elaborar una propuesta de puesta en escena coherente para una escena breve",
  ],
  claves: ["dirección escénica", "propuesta", "cuaderno de dirección", "trazo", "composición", "escenografía", "diseño de iluminación", "espacio sonoro"],
  pregunta: {
    texto: "¿Por qué la misma obra puede parecer dos espectáculos distintos?",
    respuesta: "Porque cada dirección hace una <mark>lectura</mark> diferente. Un <i>Hamlet</i> puede pasar en un castillo, en una oficina o en un escenario vacío. La <b>dirección escénica</b> decide qué contar y con qué lenguajes, y los equipos de diseño lo hacen visible y audible.",
  },
  lectura: {
    titulo: "Bernarda en blanco",
    html: `<p>Dos institutos montan <i>La casa de Bernarda Alba</i> el mismo año. El primero reproduce una casa andaluza con muebles de madera oscura, vestidos negros de época y luz cálida de ventana. El segundo coloca a las actrices en un cubo completamente blanco, con ropa actual negra y una luz fría que se va cerrando hasta dejar solo sus caras.</p>
    <p>En el coloquio, el público discute cuál es «la buena». La profesora explica que ninguna es más fiel que la otra: la primera subraya la época y el ambiente; la segunda, el encierro y la asfixia. Las dos han partido del mismo texto, pero han tomado decisiones distintas de <b>dirección</b> y de <b>diseño</b>.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué hace la dirección escénica",
      html: `<p>El director o directora de escena es el <b>responsable artístico</b> del espectáculo. Elige o acepta el texto, define la <b>propuesta</b> (qué se quiere contar y por qué ahora), forma el equipo, dirige a los intérpretes y coordina a los diseñadores para que todos los lenguajes vayan en la misma dirección.</p>
      <p>Su trabajo empieza mucho antes del primer ensayo, con el estudio de la obra, y termina en el estreno, cuando el espectáculo pasa a manos de la regiduría y de los intérpretes. Durante los ensayos da <b>notas</b> concretas y cuida el ritmo general de la función.</p>`,
      svg: B.estrella("Funciones de la dirección", "Dirección", ["Leer el texto", "Definir la propuesta", "Formar el equipo", "Dirigir intérpretes", "Coordinar el diseño", "Dar ritmo"]),
      video: { id: "mNBM83_1awY", titulo: "Dirección escénica", canal: "Benjamín Slavutzky", vistas: 12436 },
    },
    {
      h: "La propuesta y el cuaderno de dirección",
      html: `<p>La <b>propuesta de dirección</b> resume en pocas frases la lectura del montaje: el tema central, el punto de vista, el estilo (realista, simbólico, expresionista, épico…) y la relación con el público. A partir de ella se toman todas las decisiones.</p>
      <p>El <b>cuaderno de dirección</b> recoge el análisis del texto, los cortes, las referencias visuales (cuadros, fotos, películas), las plantas del espacio, el trazo de cada escena y las notas de ensayo. Es la memoria del proceso y la herramienta para comunicarse con el equipo.</p>`,
      svg: B.cajas("Contenido del cuaderno de dirección", [["Análisis", "tema y conflicto"], ["Referencias", "imágenes, música"], ["Plantas", "espacio y trazo"], ["Notas", "de cada ensayo"]]),
    },
    {
      h: "Trazo y composición escénica",
      html: `<p>El <b>trazo</b> o movimiento escénico es el conjunto de entradas, salidas y desplazamientos de los intérpretes. Se dibuja en la <b>planta</b> del escenario y debe tener un sentido: acercarse, huir, dominar, esconderse.</p>
      <p>La <b>composición</b> organiza los cuerpos como en un cuadro: niveles (de pie, sentado, en el suelo), diagonales, simetrías y asimetrías, distancia entre personajes y focos de atención. Las zonas del escenario no tienen la misma fuerza: el <b>centro del proscenio</b> es la más potente y el fondo lateral, la más débil.</p>`,
      svg: B.zonas("Las nueve zonas del escenario y su fuerza"),
    },
    {
      h: "El espacio: escenografía",
      html: `<p>La <b>escenografía</b> crea el lugar de la acción y su sentido. Puede ser <b>realista</b> (reproduce un lugar), <b>simbólica</b> (lo sugiere con pocos elementos), <b>abstracta</b> o <b>funcional</b> (estructuras que se transforman). El escenógrafo trabaja con bocetos, planos y <b>maquetas</b> a escala.</p>
      <p>También hay que decidir la relación con el público (a la italiana, a tres bandas, circular, itinerante) y resolver los cambios de lugar con rapidez, mediante elementos móviles, giratorios o con la luz. Todo debe ser seguro, estable y fácil de montar si el espectáculo sale de gira.</p>`,
      svg: B.comparar("Escenografía realista frente a simbólica", ["Realista", ["imita un lugar", "muchos detalles", "época concreta", "cambios lentos"]], ["Simbólica", ["sugiere el lugar", "pocos elementos", "abierta a la imaginación", "cambios rápidos"]]),
      video: { id: "Y7DPBgJT20s", titulo: "Cómo se hace escenografía: oficio y proceso creativo", canal: "Tengo algo que EnsayARTE", vistas: 66506 },
    },
    {
      h: "La luz",
      html: `<p>El <b>diseño de iluminación</b> hace visible la escena, pero sobre todo crea <b>atmósfera</b>, dirige la mirada, marca el tiempo (día, noche, recuerdo) y el ritmo. Se trabaja con la dirección (frontal, lateral, contraluz, cenital), la intensidad, el color y la forma del haz.</p>
      <p>Los aparatos más comunes son los <b>PC</b> y <b>fresnel</b> (luz suave), los <b>recortes</b> (haz preciso) y los <b>LED</b> de color. El diseño se plasma en un plano de luces y en una lista de <b>efectos</b> numerados que la regiduría ordena durante la función.</p>`,
      svg: B.luces("Tres direcciones básicas de la luz en escena"),
      video: { id: "Bk-KyLTt-Ww", titulo: "Iluminación escénica", canal: "AC. Colectivo de Teatro", vistas: 48928 },
    },
    {
      h: "El espacio sonoro",
      html: `<p>El <b>espacio sonoro</b> incluye la música (en directo o grabada), los efectos (lluvia, puerta, tráfico), los ambientes y la amplificación de las voces. Sirve para situar la acción, crear tensión, marcar transiciones y provocar emociones.</p>
      <p>El diseñador de sonido decide qué suena, desde dónde (altavoces delante, detrás, alrededor del público) y cuándo, y también cuándo hay <b>silencio</b>, que en escena es un recurso de enorme fuerza.</p>`,
      svg: B.cajas("Elementos del espacio sonoro", [["Música", "directo o grabada"], ["Efectos", "sonidos concretos"], ["Ambiente", "fondo continuo"], ["Silencio", "tensión y foco"]]),
    },
    {
      h: "Vestuario y caracterización",
      html: `<p>El <b>vestuario</b> informa de la época, la clase social, la edad y el carácter del personaje, y debe permitir moverse y cambiarse con rapidez. El figurinista dibuja <b>figurines</b> y elige tejidos y colores en diálogo con la escenografía y la luz.</p>
      <p>La <b>caracterización</b> (maquillaje, peluquería, prótesis, máscaras) transforma el rostro y el cuerpo del intérprete. En el teatro actual a veces se busca lo contrario: mostrar al intérprete tal como es, con ropa propia.</p>`,
      svg: B.rejilla("Qué cuenta el vestuario", ["Dato", "Ejemplo"], [["Época", "corsé, siglo XIX"], ["Clase social", "uniforme, traje"], ["Carácter", "colores apagados"], ["Cambio", "ropa que se rompe"]]),
    },
    {
      h: "La coherencia de la puesta en escena",
      html: `<p>Una buena puesta en escena es <b>coherente</b>: espacio, luz, sonido, vestuario e interpretación responden a la misma propuesta y se refuerzan entre sí. Para lograrlo, la dirección se reúne con el equipo desde el principio, comparte referencias y revisa cada decisión.</p>
      <p>El momento clave es el <b>ensayo técnico</b>, cuando todos los lenguajes se juntan por primera vez y se ajustan. Al final, el público no debería ver «muchas cosas», sino una sola idea expresada con muchos medios.</p>`,
      svg: B.ciclo("Lenguajes al servicio de la propuesta", "propuesta", ["Espacio", "Luz", "Sonido", "Vestuario"]),
    },
  ],
  figura: {
    titulo: "Dirigir y diseñar en cuatro claves",
    items: [["Propuesta", "◎", "qué contar", "y por qué"], ["Trazo", "➜", "cuerpos", "en el espacio"], ["Diseño", "☼", "espacio, luz,", "sonido, vestuario"], ["Coherencia", "✓", "una idea,", "muchos medios"]],
  },
  video: { id: "YdJKBEdeeXU", titulo: "Dirección escénica. Parte 2. Dirección teatral", canal: "cultura24.tv", vistas: 9409 },
  quiz: [
    ["La propuesta de dirección es…", ["el presupuesto", "la lectura que el montaje hace de la obra", "la lista de actores", "el cartel"], 1, "Qué contar y por qué."],
    ["El trazo es…", ["el maquillaje", "el conjunto de entradas, salidas y desplazamientos", "el plano de luces", "el texto"], 1, "Se dibuja en la planta."],
    ["La zona más fuerte del escenario a la italiana suele ser…", ["el fondo lateral", "el centro del proscenio", "los laterales", "el telar"], 1, "Más cerca y en el centro."],
    ["Una escenografía que sugiere el lugar con pocos elementos es…", ["realista", "simbólica", "naturalista", "historicista"], 1, "Abierta a la imaginación."],
    ["La maqueta sirve para…", ["iluminar", "ver la escenografía a escala", "componer la música", "vender entradas"], 1, "Herramienta del escenógrafo."],
    ["La luz que viene por detrás del intérprete es el…", ["frontal", "contraluz", "lateral", "cenital"], 1, "Recorta la silueta."],
    ["Un recorte es un aparato de luz…", ["de haz suave", "de haz preciso", "de sonido", "de humo"], 1, "Bordes definidos."],
    ["El silencio en el espacio sonoro…", ["es un error", "es un recurso expresivo de gran fuerza", "no existe", "solo sirve en los cambios"], 1, "Tensión y foco."],
    ["El figurinista diseña…", ["la luz", "el vestuario", "la música", "el texto"], 1, "Figurines."],
    ["El momento en que se juntan y ajustan todos los lenguajes es el…", ["ensayo de mesa", "ensayo técnico", "casting", "estreno"], 1, "Antes del general."],
  ],
  examen: [
    ["Un montaje de Lorca en un cubo blanco con luz fría que se cierra busca transmitir…", ["el encierro y la asfixia", "la alegría", "la época exacta", "el humor"], 0, "Lectura simbólica."],
    ["En una escena de poder, el personaje dominante se sitúa de pie en el centro del proscenio y el otro sentado al fondo. Se trabaja…", ["la composición", "el vestuario", "el sonido", "la producción"], 0, "Niveles y zonas."],
    ["Para mostrar un recuerdo, el diseño de luz puede…", ["apagarlo todo para siempre", "cambiar a una luz de otro color y dirección", "encender las luces de sala", "no cambiar nada"], 1, "La luz marca el tiempo."],
    ["Un personaje entra con un vestido impecable y sale con él roto y manchado. El vestuario cuenta…", ["la época", "un cambio en el personaje", "el presupuesto", "el clima"], 1, "Transformación."],
    ["Si cada diseñador trabaja por su cuenta sin hablar con la dirección, el riesgo es…", ["una puesta en escena incoherente", "más público", "menos ensayos", "mejor sonido"], 0, "Falta de una idea común."],
  ],
  feynman: ["Qué es una propuesta de dirección", "Para qué sirve el trazo", "Qué aporta la luz además de iluminar", "Por qué es clave la coherencia"],
  mapa: ["DIRECCIÓN Y DISEÑO", [["Dirección", "propuesta · cuaderno · equipo"], ["Movimiento", "trazo · composición · zonas"], ["Diseño", "escenografía · luz · sonido · vestuario"], ["Unidad", "ensayo técnico · coherencia"]]],
  tarjetas: [
    ["Dirección escénica", "Responsabilidad artística global del espectáculo."],
    ["Propuesta", "Lectura que hace el montaje: tema, estilo y punto de vista."],
    ["Trazo", "Entradas, salidas y desplazamientos de los intérpretes."],
    ["Composición", "Organización de los cuerpos en el espacio como en un cuadro."],
    ["Maqueta", "Modelo a escala de la escenografía."],
    ["Contraluz", "Luz que llega por detrás y recorta la silueta."],
    ["Espacio sonoro", "Música, efectos, ambientes y silencios del espectáculo."],
    ["Figurín", "Dibujo del diseño de vestuario de un personaje."],
  ],
  ejemplos: [
    ["Redacta una propuesta de dirección de dos frases para Romeo y Julieta.", ["Tema: el odio heredado que destruye a los jóvenes.", "Estilo: actual, en un barrio dividido por dos bandas, con espacio casi vacío."], "Propuesta breve que orienta todas las decisiones."],
    ["Diseña la luz de una escena de despedida nocturna.", ["Base: luz azul fría, lateral, baja intensidad.", "Foco: un recorte cálido sobre las manos que se sueltan.", "Final: el recorte se apaga lentamente y queda el azul."], "La luz dirige la mirada y marca el final."],
    ["Propón el espacio sonoro de una escena en un hospital.", ["Ambiente: zumbido de máquinas y pasos lejanos.", "Efecto: pitido del monitor en el momento clave.", "Silencio total cuando llega la noticia."], "El sonido crea tensión y el silencio la culmina."],
  ],
  errores: [
    "Pensar que dirigir es solo decir a los actores dónde ponerse.",
    "Acumular efectos de luz y sonido sin relación con la propuesta.",
    "Diseñar un vestuario bonito que impide moverse o cambiarse.",
    "Dejar los ajustes técnicos para el día del estreno.",
  ],
  ejercicios: {
    b: [
      ["Nombra cuatro funciones de la dirección escénica.", "Leer el texto, definir la propuesta, formar el equipo, dirigir a los intérpretes, coordinar el diseño y dar ritmo."],
      ["¿Qué es una maqueta?", "Un modelo a escala de la escenografía."],
      ["Cita las cuatro direcciones básicas de la luz.", "Frontal, lateral, contraluz y cenital."],
      ["¿Qué informa el vestuario sobre un personaje?", "Época, clase social, edad, carácter y cambios a lo largo de la obra."],
    ],
    m: [
      ["Explica qué contiene un cuaderno de dirección.", "Análisis del texto, cortes, referencias visuales y sonoras, plantas del espacio, trazo de cada escena y notas de ensayo."],
      ["Compara escenografía realista y simbólica.", "La realista imita un lugar con detalle y época concreta; la simbólica lo sugiere con pocos elementos y deja trabajar la imaginación."],
      ["¿Qué funciones tiene la luz en escena además de iluminar?", "Crear atmósfera, dirigir la mirada, marcar tiempo y lugar, dar ritmo y transmitir emociones."],
      ["¿Por qué es importante el ensayo técnico?", "Porque se juntan por primera vez todos los lenguajes y se ajustan efectos, cambios y tiempos antes del ensayo general."],
    ],
    a: [
      ["Elabora una propuesta de puesta en escena para una escena breve: propuesta, planta con trazo, boceto de espacio, tres efectos de luz, espacio sonoro y figurines.", "Respuesta abierta. Se valora la coherencia entre todos los lenguajes."],
      ["Compara dos montajes de la misma obra (en vídeo) y explica las diferencias de dirección y diseño.", "Respuesta abierta. Debe identificar la propuesta de cada montaje y cómo la expresan los lenguajes."],
    ],
  },
  glosario: [
    ["Planta", "Dibujo del escenario visto desde arriba."],
    ["Proscenio", "Parte delantera del escenario, cerca del público."],
    ["Boceto", "Dibujo previo del diseño."],
    ["PC y fresnel", "Proyectores de luz de haz suave."],
    ["Cenital", "Luz que cae verticalmente desde arriba."],
    ["Plano de luces", "Plano con la posición y función de cada aparato."],
    ["Caracterización", "Transformación del aspecto con maquillaje, peluquería o prótesis."],
    ["Utilería", "Objetos que usan los intérpretes en escena."],
  ],
  situacion: {
    titulo: "Dos puestas para una escena",
    reto: "Diseñar dos puestas en escena opuestas para el mismo fragmento teatral.",
    pasos: [
      "Elegid un fragmento de dos o tres minutos.",
      "Escribid dos propuestas de dirección distintas (por ejemplo, realista y simbólica).",
      "Diseñad para cada una espacio, luz, sonido y vestuario con los medios del centro.",
      "Representad ambas versiones y debatid qué cuenta cada una.",
    ],
    producto: "Dos versiones representadas y dosier de dirección y diseño.",
    evaluacion: [
      "Cada propuesta está clara y bien argumentada.",
      "Los lenguajes son coherentes con su propuesta.",
      "El trazo y la composición tienen sentido.",
      "El debate identifica las diferencias de lectura.",
    ],
  },
  familias: [
    "Al salir del teatro, comentad cómo eran el espacio, la luz y el vestuario.",
    "Visitad las jornadas de puertas abiertas de un teatro.",
    "Ayudadle a buscar referencias visuales para un montaje.",
    "Ved dos versiones de la misma obra o película y comparadlas.",
  ],
  saberes: "Representación y escenificación: la dirección escénica, propuesta y cuaderno de dirección; trazo, composición y zonas del escenario; diseño del espectáculo: escenografía (tipos, bocetos, maquetas), iluminación (direcciones, aparatos, efectos), espacio sonoro, vestuario y caracterización; coordinación del equipo y coherencia de la puesta en escena.",
  ideas: [
    "Dibujar plantas y trazos de una escena conocida.",
    "Construir maquetas con cajas de zapatos.",
    "Probar las direcciones de la luz con linternas.",
    "Crear el espacio sonoro de una escena con objetos del aula.",
  ],
  fuentes: [
    { t: "Director de escena, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Director_de_escena" },
    { t: "Asociación de Directores de Escena de España (ADE)", url: "https://www.adeteatro.com" },
  ],
});
