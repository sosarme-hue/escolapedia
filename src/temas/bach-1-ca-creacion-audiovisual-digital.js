// Cultura Audiovisual, 1º de Bachillerato. Tema 8 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ca");
const { marco, t, rc, pa, trazo } = B;

// Guion gráfico (storyboard): cuatro viñetas con plano y nota.
const storyboard = marco("Storyboard: cuatro viñetas con el plano, la acción y el sonido",
  [["PG", "llega al instituto", "música suave"], ["PM", "abre la taquilla", "golpe metálico"], ["PD", "una nota dentro", "silencio"], ["PP", "sonríe", "música sube"]].map(([p, a, s], i) => {
    const x = 10 + (i % 2) * 124, y = 10 + Math.floor(i / 2) * 84;
    return `${rc(x, y, 116, 50, 'fill="var(--card)" stroke="var(--ink)" stroke-width="1.6" rx="4"')}${t(x + 14, y + 14, p, { fs: 10, bold: 1, color: "var(--red)", maxW: 24 })}
      ${i === 0 ? pa(`M${x + 70} ${y + 44} V${y + 22} H${x + 104} V${y + 44}`, trazo("var(--muted)", 1.5)) : ""}${i === 2 ? rc(x + 40, y + 16, 36, 22, 'fill="var(--sun)" fill-opacity=".6"') : ""}
      ${t(x + 58, y + 64, a, { fs: 9.5, maxW: 112 })}${t(x + 58, y + 76, `♪ ${s}`, { fs: 9, maxW: 112, color: "var(--muted)" })}`;
  }).join(""));

module.exports = B.tema({
  titulo: "La creación audiovisual digital",
  minutos: 60,
  objetivos: [
    "Conocer las fases de una producción audiovisual: preproducción, rodaje y posproducción",
    "Elaborar una idea, una sinopsis, un guion y un storyboard sencillos",
    "Aplicar técnicas básicas de grabación, edición y sonido con medios digitales",
    "Difundir una obra respetando los derechos de autor, la imagen de las personas y el uso responsable de la IA",
  ],
  claves: ["preproducción", "guion", "storyboard", "rodaje", "posproducción", "edición", "derechos de autor", "Creative Commons", "inteligencia artificial"],
  pregunta: {
    texto: "Con el móvil que llevas en el bolsillo se han rodado películas que han ido a festivales. ¿Qué te falta a ti para hacer la tuya?",
    respuesta: "Probablemente solo <mark>método</mark>: una buena idea, un guion claro, planificar los planos y cuidar el sonido. La tecnología ya está al alcance de todos; lo que marca la diferencia es <b>saber contar</b>.",
  },
  lectura: {
    titulo: "Una película rodada con tres teléfonos",
    html: `<p>En 2015, el director estadounidense Sean Baker estrenó <i>Tangerine</i> en el festival de Sundance. La había rodado con tres teléfonos móviles, una app de grabación de pocos euros y unos adaptadores para el objetivo. Casi nadie en la sala lo notó: lo que vieron fue una historia viva, con personajes intensos y una luz dorada de Los Ángeles.</p>
    <p>Desde entonces, muchos cortometrajes y videoclips se hacen así. La creación audiovisual se ha democratizado: cualquiera puede grabar, editar y publicar. En este tema verás cómo hacerlo con método, paso a paso.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Las tres fases de una producción",
      html: `<p>Toda obra audiovisual, desde un largometraje hasta un vídeo de un minuto para redes, pasa por tres fases. En la <b>preproducción</b> se planifica todo: idea, guion, storyboard, localizaciones, reparto, material y calendario. En la <b>producción</b> o rodaje se graban las imágenes y el sonido. En la <b>posproducción</b> se edita, se trabaja el sonido y el color, se añaden títulos y efectos y se exporta.</p>
      <p>Un error típico es saltar directamente a grabar. Cuanto mejor se prepara, más fácil y rápido es el rodaje: la regla de oro es <mark>planificar antes de grabar</mark>.</p>`,
      svg: B.flujo("Las tres fases de una producción audiovisual", ["Preproducción: idea, guion, plan", "Producción: rodaje de imagen y sonido", "Posproducción: edición, sonido, color", "Difusión: publicar y compartir"]),
      video: { id: "0q6g7O0C3hE", titulo: "Cómo hacer un cortometraje cinematográfico (5 pasos)", canal: "Dann Lamadrid", vistas: 371934 },
    },
    {
      h: "De la idea al guion",
      html: `<p>Todo empieza con una <b>idea</b> que se puede resumir en una frase (la <i>logline</i>): «Una chica descubre que su abuela fue la primera mujer piloto de su pueblo». Después se escribe la <b>sinopsis</b>, un resumen de la historia en un párrafo, con planteamiento, nudo y desenlace.</p>
      <p>El <b>guion literario</b> divide la historia en escenas, cada una con su encabezado (INT. o EXT., lugar, DÍA o NOCHE), la acción descrita en presente y los diálogos. El <b>guion técnico</b> añade para cada plano el tipo de encuadre, el movimiento de cámara y el sonido.</p>`,
      svg: B.capas("Del germen a la planificación", [["Idea", "una frase"], ["Sinopsis", "un párrafo"], ["Guion literario", "escenas y diálogos"], ["Guion técnico", "planos y sonido"]]),
    },
    {
      h: "El storyboard",
      html: `<p>El <b>storyboard</b> o guion gráfico es una serie de viñetas dibujadas que muestran cómo será cada plano: encuadre, posición de los personajes, movimiento de cámara y una nota de la acción y el sonido. No hace falta dibujar bien: bastan figuras esquemáticas.</p>
      <p>Sirve para pensar la película antes de rodarla, comunicar a todo el equipo lo que se quiere y ahorrar tiempo en el rodaje. En animación y en publicidad es imprescindible.</p>`,
      svg: storyboard,
      video: { id: "8_N3-gap2Sc", titulo: "Storyboard: ¿qué es y cómo se hace?", canal: "Soy de cine", vistas: 479747 },
    },
    {
      h: "Grabar con el móvil",
      html: `<p>Algunas claves para grabar bien con un teléfono: limpiar el objetivo; grabar en <b>horizontal</b> si el destino es una pantalla de cine o televisión, y en vertical solo para redes que lo usan; <b>bloquear el enfoque y la exposición</b> tocando la pantalla; evitar el zoom digital (mejor acercarse); y <b>estabilizar</b> con un trípode, un apoyo o los dos brazos pegados al cuerpo.</p>
      <p>Graba cada plano unos segundos antes y después de la acción para tener margen al editar, y varía la escala de planos: general, medio y primer plano de cada escena.</p>`,
      svg: B.cajas("Claves para grabar con el móvil", [["Horizontal", "según el destino"], ["Bloquear", "enfoque y exposición"], ["Estabilizar", "trípode o apoyo"], ["Sin zoom", "mejor acercarse"]]),
      video: { id: "ac5GwDEXHP8", titulo: "Domina el vídeo con móvil en 15 minutos", canal: "RBG Escuela", vistas: 698447 },
    },
    {
      h: "Luz y sonido en el rodaje",
      html: `<p>La <b>luz</b> natural de una ventana es la mejor aliada: coloca al personaje de cara o de lado a ella, nunca de espaldas si no buscas un contraluz. En exteriores, las primeras y últimas horas del día dan una luz más bonita. Un esquema clásico es la <b>iluminación de tres puntos</b>: luz principal, luz de relleno y contraluz.</p>
      <p>El <b>sonido</b> es la mitad de una película: un público perdona una imagen imperfecta, pero no un sonido malo. Graba en lugares silenciosos, acerca el micrófono a quien habla (un micrófono de solapa barato ayuda mucho) y graba unos segundos de <b>sonido ambiente</b> de cada lugar.</p>`,
      svg: B.cajas("Iluminación de tres puntos", [["Principal", "luz fuerte|a un lado"], ["Relleno", "suaviza|las sombras"], ["Contraluz", "separa|del fondo"]], { cols: 3 }),
    },
    {
      h: "Edición y posproducción",
      html: `<p>Con aplicaciones gratuitas de edición, en el móvil o en el ordenador, se trabaja sobre una <b>línea de tiempo</b>: se importan los clips, se ordenan, se recortan y se ajusta el <b>ritmo</b>. Después se añade el sonido: diálogos, música y efectos, con el volumen equilibrado.</p>
      <p>La <b>corrección de color</b> unifica los planos y el <b>etalonaje</b> les da un estilo (cálido, frío, contrastado). Por último se añaden títulos y créditos y se <b>exporta</b> en el formato adecuado (por ejemplo, 1080p en MP4). Menos es más: transiciones sencillas y efectos solo cuando aportan algo.</p>`,
      svg: B.flujo("Pasos de la edición", ["Importar y ordenar los clips", "Recortar y ajustar el ritmo", "Sonido: diálogos, música, efectos", "Color, títulos y créditos", "Exportar"]),
    },
    {
      h: "Derechos de autor y derecho a la imagen",
      html: `<p>La música, las imágenes y los vídeos ajenos tienen <b>derechos de autor</b>: usarlos sin permiso puede hacer que una plataforma bloquee tu vídeo. Usa material propio o con licencias libres, como <b>Creative Commons</b> o bibliotecas de música sin derechos, y cita siempre a sus autores.</p>
      <p>Además, toda persona tiene <b>derecho a su propia imagen</b>: necesitas su permiso para grabarla y publicarla, y en el caso de menores, el de sus familias. Tu obra también está protegida: puedes elegir una licencia para indicar cómo pueden usarla otros.</p>`,
      svg: B.comparar("Qué se puede usar en tu vídeo", ["Sí", ["material propio", "Creative Commons", "música libre", "con permiso"]], ["No", ["música comercial", "imágenes de otros", "personas sin permiso", "sin citar autor"]]),
    },
    {
      h: "Difusión e inteligencia artificial",
      html: `<p>Para difundir una obra hay que pensar en el <b>formato</b> de cada plataforma (horizontal o vertical, duración), en un título y una miniatura atractivos y en el público al que se dirige. Los festivales de cortos escolares y juveniles son una gran oportunidad.</p>
      <p>La <b>inteligencia artificial</b> ya ayuda a generar imágenes, voces, subtítulos o música. Bien usada, es una herramienta creativa; pero conviene <b>indicar cuándo se ha usado</b>, respetar la imagen y la voz de personas reales y no presentar como propio lo que no lo es. La mirada, la historia y las decisiones siguen siendo del autor.</p>`,
      svg: B.estrella("Uso responsable de la IA en la creación audiovisual", "IA responsable", ["Indicar su uso", "Respetar a personas", "Citar fuentes", "Decidir tú"]),
    },
  ],
  figura: {
    titulo: "Crear un vídeo en cuatro pasos",
    items: [["Idea", "💡", "logline", "y sinopsis"], ["Planificar", "▭▭", "guion", "y storyboard"], ["Rodar", "🎥", "luz, sonido", "estabilidad"], ["Editar", "✂", "ritmo, color", "y difusión"]],
  },
  video: { id: "dRmzSzcQ2m0", titulo: "Cómo empezar en edición de vídeo desde cero (paso a paso)", canal: "Mirko Vigna", vistas: 662994 },
  quiz: [
    ["La fase en la que se planifica todo es la…", ["posproducción", "preproducción", "difusión", "producción"], 1, "Idea, guion, storyboard y plan."],
    ["La frase que resume una historia se llama…", ["sinopsis", "logline", "escaleta", "créditos"], 1, "Una sola frase."],
    ["El guion técnico añade al literario…", ["los diálogos", "el tipo de plano, el movimiento y el sonido de cada toma", "la música final", "el presupuesto"], 1, "Concreta cómo se rodará."],
    ["El storyboard es…", ["un programa de edición", "una serie de viñetas que muestran cada plano", "un tipo de micrófono", "una licencia"], 1, "Guion gráfico."],
    ["Al grabar con el móvil conviene…", ["usar mucho zoom digital", "estabilizar y bloquear enfoque y exposición", "grabar siempre a contraluz", "no limpiar el objetivo"], 1, "Mejora mucho la calidad."],
    ["La iluminación de tres puntos usa…", ["principal, relleno y contraluz", "flash, foco y lámpara", "sol, luna y vela", "solo luz natural"], 0, "Esquema clásico."],
    ["¿Qué suele perdonar menos el público?", ["Una imagen imperfecta", "Un sonido malo", "Un plano corto", "Un título sencillo"], 1, "El sonido es la mitad de la película."],
    ["Dar un estilo de color a los planos se llama…", ["etalonaje", "raccord", "zoom", "briefing"], 0, "Va tras la corrección de color."],
    ["Una licencia Creative Commons permite…", ["usar cualquier música comercial", "usar una obra según las condiciones que fija su autor", "no citar a nadie", "vender obras ajenas"], 1, "Normalmente exige citar la autoría."],
    ["Para publicar un vídeo donde aparece un compañero necesitas…", ["nada", "su permiso (y el de su familia si es menor)", "solo el del profesor", "pagarle"], 1, "Derecho a la propia imagen."],
  ],
  examen: [
    ["Un grupo empieza a grabar sin guion y pierde horas. ¿Qué fase se saltó?", ["Posproducción", "Preproducción", "Difusión", "Exportación"], 1, "Planificar ahorra tiempo."],
    ["En un guion literario, «EXT. PLAYA – NOCHE» es…", ["un diálogo", "el encabezado de escena", "una transición", "un plano"], 1, "Indica interior o exterior, lugar y momento."],
    ["Quieres un vídeo para una red que se ve en vertical. Grabas…", ["en horizontal", "en vertical", "en cuadrado siempre", "da igual"], 1, "Se adapta al formato de destino."],
    ["Usas una canción famosa sin permiso y la plataforma bloquea el vídeo. Debiste…", ["subirla más alta", "usar música libre o con licencia", "cambiar el título", "acortar el vídeo"], 1, "Respetar los derechos de autor."],
    ["Si usas IA para crear la voz del narrador, lo correcto es…", ["ocultarlo", "indicarlo en los créditos", "decir que es tu voz", "no usar música"], 1, "Transparencia con el público."],
  ],
  feynman: ["Las tres fases de una producción", "Diferencia entre guion literario, técnico y storyboard", "Cinco claves para grabar con el móvil", "Qué puedo usar en mi vídeo sin infringir derechos"],
  mapa: ["CREACIÓN DIGITAL", [["Preproducción", "idea · guion · storyboard"], ["Rodaje", "encuadre · luz · sonido"], ["Posproducción", "edición · color · títulos"], ["Difusión", "derechos · IA · plataformas"]]],
  tarjetas: [
    ["Preproducción", "Fase de planificación: idea, guion, storyboard, plan de rodaje."],
    ["Logline", "Resumen de la historia en una sola frase."],
    ["Guion técnico", "Guion con plano, movimiento y sonido de cada toma."],
    ["Storyboard", "Viñetas que muestran cómo será cada plano."],
    ["Tres puntos", "Luz principal, de relleno y contraluz."],
    ["Línea de tiempo", "Espacio del editor donde se ordenan clips y sonidos."],
    ["Etalonaje", "Tratamiento del color para dar estilo a la imagen."],
    ["Creative Commons", "Licencias que permiten usar obras con ciertas condiciones."],
  ],
  ejemplos: [
    ["Escribe la logline y la sinopsis de un corto sobre el primer día de clase.", ["Logline: «Un chico tímido descubre que su compañero de mesa es tan nuevo como él».", "Planteamiento: llega solo y asustado al instituto.", "Nudo: se sienta junto a otro alumno que tampoco conoce a nadie y surge un malentendido.", "Desenlace: acaban riéndose y salen juntos al patio."], "Una frase de idea y un párrafo con inicio, nudo y final."],
    ["Escribe el guion técnico de tres planos de la escena «abre la taquilla y encuentra una nota».", ["Plano 1: PM, cámara fija; abre la taquilla; sonido: golpe metálico.", "Plano 2: PD de la nota; travelling de avance lento; silencio.", "Plano 3: PP del rostro, sonríe; entra la música."], "Tres planos con tipo, movimiento, acción y sonido."],
    ["Tu entrevista grabada en el patio tiene mucho ruido. ¿Cómo lo arreglas para la próxima?", ["Grabar en un lugar más silencioso o a otra hora.", "Usar un micrófono de solapa cerca de la boca.", "Grabar sonido ambiente aparte y bajarlo en la edición."], "Elegir el lugar, acercar el micrófono y controlar el ambiente."],
  ],
  errores: [
    "Ponerse a grabar sin guion ni storyboard.",
    "Descuidar el sonido pensando que solo importa la imagen.",
    "Abusar de transiciones y efectos llamativos.",
    "Usar música o imágenes ajenas sin permiso ni cita.",
  ],
  ejercicios: {
    b: [
      ["Enumera las tres fases de una producción audiovisual.", "Preproducción, producción (rodaje) y posproducción; después, la difusión."],
      ["¿Qué es un storyboard?", "Una serie de viñetas que muestran cómo será cada plano de la obra."],
      ["Cita tres consejos para grabar con el móvil.", "Limpiar el objetivo, estabilizar la cámara y bloquear enfoque y exposición (también: acercarse en vez de usar zoom)."],
      ["¿Qué es el derecho a la propia imagen?", "El derecho de cada persona a decidir si se graba y se publica su imagen."],
    ],
    m: [
      ["Diferencia guion literario y guion técnico.", "El literario cuenta las escenas con acción y diálogos; el técnico añade para cada plano el encuadre, el movimiento de cámara y el sonido."],
      ["¿Por qué conviene grabar unos segundos antes y después de cada acción?", "Para tener margen al editar y poder hacer cortes limpios y transiciones."],
      ["Explica qué aporta cada luz en la iluminación de tres puntos.", "La principal ilumina al sujeto; la de relleno suaviza las sombras; el contraluz lo separa del fondo."],
      ["¿Qué ventajas e inconvenientes tiene usar IA en un vídeo escolar?", "Ventajas: ahorra tiempo (subtítulos, música, imágenes). Inconvenientes: riesgo de plagio, de suplantar a personas y de perder la voz propia; hay que indicar su uso."],
    ],
    a: [
      ["Realiza un vídeo de 60 segundos siguiendo las tres fases y entrega la logline, el storyboard y el vídeo.", "Respuesta abierta: se evaluará la coherencia entre la planificación y el resultado, la variedad de planos, el sonido y la edición."],
      ["Busca un festival de cortos para jóvenes y redacta las condiciones que debería cumplir tu obra para presentarse.", "Respuesta abierta: duración, formato, temática, derechos de la música e imágenes, autorizaciones de imagen y plazos."],
    ],
  },
  glosario: [
    ["Sinopsis", "Resumen de la historia en un párrafo."],
    ["Localización", "Lugar real donde se rueda."],
    ["Plan de rodaje", "Calendario de qué se graba, dónde y cuándo."],
    ["Micrófono de solapa", "Micrófono pequeño que se coloca cerca de la boca."],
    ["Sonido ambiente", "Sonido de fondo de un lugar."],
    ["Corrección de color", "Ajuste para que todos los planos tengan un color coherente."],
    ["Exportar", "Generar el archivo final del vídeo."],
    ["Derechos de autor", "Derechos que protegen las obras de sus creadores."],
    ["Licencia", "Permiso que fija cómo puede usarse una obra."],
  ],
  situacion: {
    titulo: "Festival de cortos del instituto",
    reto: "Producir en grupo un cortometraje de uno a tres minutos sobre la convivencia en el centro y presentarlo en un festival de aula.",
    pasos: [
      "Preproducción: logline, sinopsis, guion técnico, storyboard y autorizaciones de imagen.",
      "Rodaje con el móvil cuidando estabilidad, luz y sonido.",
      "Edición con música libre, títulos y créditos (indicando si se ha usado IA).",
      "Proyección, votación del público y coloquio con los equipos.",
    ],
    producto: "Un cortometraje con su carpeta de producción.",
    evaluacion: [
      "La carpeta de preproducción es completa y coherente.",
      "El corto tiene buena imagen y sonido inteligible.",
      "La edición tiene ritmo y cuida la continuidad.",
      "Se respetan derechos de autor e imagen.",
    ],
  },
  familias: [
    "Animadle a grabar un pequeño vídeo de una receta o tradición familiar.",
    "Hablad sobre qué se puede publicar de la familia en redes y qué no.",
    "Ved juntos el making of de alguna película.",
    "Si participa en un festival escolar, acompañadle a la proyección.",
  ],
  saberes: "La creación audiovisual digital: fases de producción, de la idea al guion (logline, sinopsis, guion literario y técnico), storyboard, técnicas de grabación con dispositivos móviles, iluminación y sonido, edición y posproducción, derechos de autor e imagen, licencias libres, difusión y uso responsable de la inteligencia artificial.",
  ideas: [
    "Reto de un plano: contar algo en un solo plano de 30 segundos.",
    "Taller de sonido: grabar la misma frase con y sin micrófono de solapa.",
    "Intercambio de storyboards: otro grupo rueda tu guion.",
    "Organizar un festival de fin de curso con premios votados por el público.",
  ],
  fuentes: [
    { t: "Creative Commons en español", url: "https://creativecommons.org/licenses/?lang=es" },
    { t: "Ley de Propiedad Intelectual (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930" },
  ],
});
