// Cultura Audiovisual, 1º de Bachillerato. Tema 2 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ca");
const { marco, t, ln, rc, ci, pa, trazo } = B;

// Cámara oscura: la luz entra por un agujero y proyecta la imagen invertida.
const camaraOscura = marco("Cámara oscura: la imagen entra por un orificio y se proyecta invertida",
  `${rc(110, 40, 130, 100, 'fill="var(--ink)" fill-opacity=".85" rx="4"')}${rc(108, 84, 6, 12, 'fill="var(--paper)"')}
  ${pa("M30 140 V90 L50 60 L70 90 V140Z", 'fill="var(--leaf)"')}${ci(50, 54, 8, 'fill="var(--sun)"')}
  ${ln(50, 54, 236, 126, "var(--sun)", 1.3, 'stroke-dasharray="4 3"')}${ln(50, 140, 236, 56, "var(--sun)", 1.3, 'stroke-dasharray="4 3"')}
  <g transform="translate(222 92) scale(1 -1) translate(-222 -92)">${pa("M212 120 V100 L222 88 L232 100 V120Z", 'fill="var(--leaf)"')}${ci(222, 84, 4, 'fill="var(--sun)"')}</g>
  ${t(50, 164, "objeto", { color: "var(--muted)" })}${t(111, 32, "orificio", { fs: 10, color: "var(--muted)" })}${t(182, 164, "imagen invertida", { color: "var(--muted)", maxW: 120 })}`);

// Triángulo de exposición.
const triangulo = marco("Triángulo de exposición: apertura, velocidad e ISO",
  `${pa("M130 22 L230 160 H30Z", 'fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"')}${t(130, 104, "exposición", { bold: 1, fs: 12 })}
  ${t(130, 16, "Apertura (f)", { bold: 1, color: "var(--red)", maxW: 120 })}${t(70, 80, "profundidad de campo", { fs: 9.5, maxW: 70, color: "var(--muted)" })}
  ${t(42, 174, "Velocidad", { bold: 1, color: "var(--leaf)" })}${t(130, 148, "movimiento: congela o barre", { fs: 9.5, maxW: 130, color: "var(--muted)" })}
  ${t(220, 174, "ISO", { bold: 1, color: "var(--sun)" })}${t(196, 80, "sensibilidad y grano", { fs: 9.5, maxW: 70, color: "var(--muted)" })}`);

module.exports = B.tema({
  titulo: "La fotografía",
  minutos: 60,
  objetivos: [
    "Conocer los hitos principales de la historia de la fotografía",
    "Comprender cómo funciona una cámara y el triángulo de exposición",
    "Aplicar recursos de composición, luz y punto de vista",
    "Distinguir géneros fotográficos y valorar la fotografía como documento y como arte",
  ],
  claves: ["cámara oscura", "daguerrotipo", "exposición", "apertura", "velocidad", "ISO", "composición", "fotoperiodismo"],
  pregunta: {
    texto: "Si cualquiera puede hacer una foto con el móvil, ¿por qué unas fotos nos emocionan y otras olvidamos en un segundo?",
    respuesta: "Porque fotografiar no es solo apretar un botón: es <mark>elegir</mark> el momento, el encuadre, la luz y el punto de vista. La cámara registra; la mirada del fotógrafo <b>decide qué contar</b>.",
  },
  lectura: {
    titulo: "Ocho horas para una foto",
    html: `<p>Hacia 1826, Nicéphore Niépce dejó una placa de metal cubierta de betún dentro de una caja con un agujero, frente a la ventana de su casa en Francia. Tuvo que esperar horas, quizá días, para que la luz dejara su huella. El resultado es una imagen borrosa de tejados: la fotografía más antigua que se conserva.</p>
    <p>Hoy una cámara de móvil hace la misma tarea en una milésima de segundo. Entre ambos momentos hay dos siglos de inventos y una idea que no ha cambiado: fotografiar es <b>escribir con luz</b>, que es lo que significa la palabra en griego.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "De la cámara oscura al daguerrotipo",
      html: `<p>La <b>cámara oscura</b> se conoce desde la Antigüedad: una habitación o caja cerrada con un pequeño orificio proyecta en la pared opuesta la imagen invertida del exterior. Los pintores del Renacimiento la usaban para dibujar con exactitud.</p>
      <p>Faltaba <b>fijar</b> esa imagen. Lo logró Niépce hacia 1826. En 1839, Louis Daguerre presentó el <b>daguerrotipo</b>, una imagen única y muy nítida sobre metal. Poco después, Fox Talbot inventó el <b>negativo</b> en papel, que permitía sacar muchas copias: la base de la fotografía durante más de un siglo.</p>`,
      svg: camaraOscura,
      video: { id: "LutIudRhm10", titulo: "La cámara oscura", canal: "The Art of Photography", vistas: 417329 },
    },
    {
      h: "La fotografía se hace popular",
      html: `<p>En 1888, Kodak lanzó una cámara sencilla con el lema «Usted apriete el botón, nosotros hacemos el resto». La fotografía salió de los estudios y llegó a las familias. En el siglo XX llegaron la <b>película de 35 mm</b>, las cámaras ligeras como la Leica, la <b>fotografía en color</b> y la Polaroid instantánea.</p>
      <p>Desde los años noventa, la <b>fotografía digital</b> sustituye la película por un <b>sensor</b> que convierte la luz en datos. Con el teléfono móvil y las redes sociales, la foto pasó a ser una forma de conversación diaria.</p>`,
      svg: B.cronologia("Cronología de la fotografía", [["1826", "Niépce"], ["1839", "daguerrotipo"], ["1888", "Kodak"], ["1936", "color"], ["1990", "digital"], ["2007", "móvil"]]),
    },
    {
      h: "Fotografía y pintura: una nueva mirada",
      html: `<p>La fotografía liberó a la pintura de la obligación de copiar la realidad. Los impresionistas exploraron la luz y el color, y más tarde las vanguardias se alejaron de la representación fiel.</p>
      <p>A la vez, la fotografía buscó su propio lenguaje: el <b>encuadre recortado</b>, el <b>instante decisivo</b> (Henri Cartier-Bresson) o la experimentación de las vanguardias (Man Ray). Hoy es un arte de pleno derecho, presente en museos y colecciones.</p>`,
      svg: B.comparar("Lo que aporta la fotografía frente a la pintura", ["Pintura", ["construye la imagen", "horas o meses", "pincelada visible", "libre interpretación"]], ["Fotografía", ["capta un instante", "fracciones de segundo", "registro de la luz", "encuadre y momento"]]),
    },
    {
      h: "Cómo funciona la cámara",
      html: `<p>Toda cámara tiene tres partes esenciales: el <b>objetivo</b> (lentes que enfocan la luz), el <b>diafragma</b> y el <b>obturador</b> (que regulan cuánta luz entra y durante cuánto tiempo) y un <b>soporte sensible</b> (película o sensor).</p>
      <p>La <b>exposición</b> depende de tres ajustes, el llamado triángulo de exposición. La <b>apertura</b> (número f) controla también la <b>profundidad de campo</b>: un f/1,8 desenfoca el fondo y un f/16 lo deja todo nítido. La <b>velocidad</b> de obturación congela el movimiento (1/1000 s) o lo barre (1 s). El <b>ISO</b> aumenta la sensibilidad, pero añade grano o ruido.</p>`,
      svg: triangulo,
    },
    {
      h: "Componer una fotografía",
      html: `<p>Componer es ordenar los elementos dentro del encuadre. Los recursos más útiles son la <b>regla de los tercios</b>, las <b>líneas guía</b> que conducen la mirada, el <b>enmarcado</b> (una ventana o un arco que rodea el motivo), la <b>simetría</b>, la <b>repetición</b> de formas y el <b>espacio negativo</b> que deja respirar al sujeto.</p>
      <p>El <b>punto de vista</b> también cuenta: a la altura de los ojos resulta natural; desde abajo engrandece; desde arriba empequeñece. Y conviene <mark>acercarse</mark>: muchas fotos mejoran simplemente eliminando lo que sobra.</p>`,
      svg: B.cajas("Recursos de composición fotográfica", [["Tercios", "motivo en un punto fuerte"], ["Líneas guía", "llevan la mirada"], ["Enmarcado", "marco dentro del marco"], ["Espacio negativo", "aire alrededor"]]),
      video: { id: "4OT4vj8mvY8", titulo: "5 reglas de composición fotográfica (aprende con ejemplos)", canal: "De Viaje con la Cámara", vistas: 1542071 },
    },
    {
      h: "La luz",
      html: `<p>La luz es la materia prima de la fotografía. Se valora por su <b>calidad</b>: <b>dura</b> (sol directo, sombras marcadas y contraste) o <b>suave</b> (día nublado, sombras difusas). Por su <b>dirección</b>: frontal (aplana), lateral (marca el volumen y la textura) o contraluz (siluetas y halos). Y por su <b>color</b>: cálida al amanecer y al atardecer, la llamada «hora dorada», y fría en la sombra o a mediodía.</p>
      <p>Elegir la hora y la posición respecto a la luz cambia por completo el carácter de una foto.</p>`,
      svg: B.cajas("La luz en fotografía: calidad, dirección y color", [["Dura", "sombras marcadas"], ["Suave", "sombras difusas"], ["Lateral", "volumen y textura"], ["Contraluz", "siluetas"]]),
    },
    {
      h: "Géneros fotográficos",
      html: `<p>Los principales géneros son el <b>retrato</b> (personas y su carácter), el <b>paisaje</b>, la <b>fotografía de calle</b>, el <b>bodegón</b> o producto, la <b>fotografía publicitaria y de moda</b>, la <b>científica</b> y la <b>artística</b> o de autor.</p>
      <p>El <b>fotoperiodismo</b> documenta hechos reales para la prensa. Fotos como la del miliciano de Robert Capa o la niña del napalm de Nick Ut influyeron en cómo el mundo vio una guerra. Su valor depende de la <mark>veracidad</mark>: manipular una foto de prensa es engañar.</p>`,
      svg: B.estrella("Géneros fotográficos", "Géneros", ["Retrato", "Paisaje", "Calle", "Prensa", "Publicidad", "Arte"]),
    },
    {
      h: "Fotografía digital, retoque y ética",
      html: `<p>La fotografía digital permite <b>editar</b> con facilidad: ajustar luz y color, recortar, eliminar objetos. Los filtros de redes y la <b>inteligencia artificial</b> pueden ya generar imágenes que parecen fotos sin haber existido nunca.</p>
      <p>Retocar no es malo en sí: el problema es <b>engañar</b>. En prensa se exige no alterar el contenido; en publicidad, algunos países obligan a avisar cuando un cuerpo ha sido retocado. Ante una foto sorprendente conviene preguntarse quién la hizo, dónde se publicó y si otras fuentes la confirman.</p>`,
      svg: B.flujo("Preguntas antes de creer una foto", ["¿Quién la hizo y dónde se publicó?", "¿Tiene fecha y lugar?", "¿La confirman otras fuentes?", "¿Hay señales de retoque o de IA?"]),
    },
  ],
  figura: {
    titulo: "La fotografía en cuatro claves",
    items: [["Historia", "1826", "Niépce, Daguerre", "Kodak, digital"], ["Cámara", "f · s · ISO", "triángulo de", "exposición"], ["Composición", "⅓", "tercios, líneas", "enmarcado"], ["Luz", "☀", "dura o suave", "hora dorada"]],
  },
  video: { id: "XS7_BQy8xM0", titulo: "Historia de la fotografía", canal: "Bully Magnets - Historia Documental", vistas: 234260 },
  quiz: [
    ["¿Qué significa «fotografía» en su origen griego?", ["Imagen rápida", "Escribir con luz", "Copia exacta", "Arte moderno"], 1, "Foto (luz) + grafía (escritura)."],
    ["La cámara oscura proyecta la imagen…", ["en color y del revés de izquierda a derecha", "invertida", "ampliada siempre", "sin luz"], 1, "Los rayos se cruzan en el orificio."],
    ["¿Quién presentó el daguerrotipo en 1839?", ["Niépce", "Talbot", "Daguerre", "Eastman"], 2, "Imagen única sobre metal muy nítida."],
    ["El negativo de Fox Talbot permitía…", ["fotos en color", "obtener muchas copias", "fotos instantáneas", "grabar sonido"], 1, "De un negativo salen muchos positivos."],
    ["Un número f bajo (f/1,8) produce…", ["todo nítido", "fondo desenfocado", "más grano", "movimiento barrido"], 1, "Poca profundidad de campo."],
    ["Para congelar a un atleta en pleno salto usarás una velocidad…", ["1 s", "1/15 s", "1/1000 s", "30 s"], 2, "Velocidades rápidas congelan el movimiento."],
    ["Subir mucho el ISO tiene como inconveniente…", ["menos nitidez del enfoque", "ruido o grano", "colores fríos", "fondo nítido"], 1, "Más sensibilidad, más ruido."],
    ["La luz lateral sirve sobre todo para…", ["aplanar el sujeto", "marcar volumen y textura", "crear siluetas", "eliminar sombras"], 1, "Las sombras laterales modelan."],
    ["La «hora dorada» es…", ["el mediodía", "el amanecer y el atardecer", "la noche", "cualquier hora nublada"], 1, "Luz baja, cálida y suave."],
    ["En fotoperiodismo, lo más importante es…", ["el retoque", "la veracidad", "el color", "la moda"], 1, "Documenta hechos reales: no se manipula."],
  ],
  examen: [
    ["Quieres un retrato con el fondo muy borroso. Eliges…", ["f/16", "f/2", "ISO 100", "1 s"], 1, "Apertura grande, poca profundidad de campo."],
    ["Una foto de una cascada con el agua sedosa se logra con…", ["velocidad lenta y trípode", "velocidad muy rápida", "ISO alto", "flash"], 0, "La exposición larga barre el movimiento del agua."],
    ["Un camino que lleva la vista hasta una casa es un ejemplo de…", ["simetría", "líneas guía", "contraluz", "espacio negativo"], 1, "Conduce la mirada al motivo."],
    ["La fotografía influyó en la pintura porque…", ["la sustituyó del todo", "la liberó de copiar fielmente la realidad", "la hizo más realista", "no tuvo relación"], 1, "La pintura exploró otras vías."],
    ["Una revista publica una modelo muy retocada sin avisar. ¿Qué problema ético hay?", ["Ninguno", "Transmite un ideal de cuerpo falso", "Es fotoperiodismo", "Baja la iconicidad"], 1, "Puede engañar y afectar a la autoestima del público."],
  ],
  feynman: ["Cómo funciona una cámara oscura", "Qué controla cada lado del triángulo de exposición", "Tres recursos para componer mejor", "Por qué manipular una foto de prensa es grave"],
  mapa: ["LA FOTOGRAFÍA", [["Historia", "cámara oscura → digital"], ["Técnica", "apertura · velocidad · ISO"], ["Lenguaje", "composición · luz · punto de vista"], ["Usos", "géneros · prensa · ética"]]],
  tarjetas: [
    ["Cámara oscura", "Caja con orificio que proyecta una imagen invertida."],
    ["Daguerrotipo", "Primer proceso fotográfico popular (1839): imagen única sobre metal."],
    ["Negativo", "Imagen invertida en luces que permite sacar muchas copias."],
    ["Apertura", "Tamaño del diafragma; controla la luz y la profundidad de campo."],
    ["Velocidad de obturación", "Tiempo de exposición; congela o barre el movimiento."],
    ["ISO", "Sensibilidad del sensor; si es alta, hay más ruido."],
    ["Instante decisivo", "Momento justo en que la escena alcanza su máxima expresión (Cartier-Bresson)."],
    ["Fotoperiodismo", "Fotografía que documenta hechos reales para los medios."],
  ],
  ejemplos: [
    ["Elige ajustes para fotografiar un partido de baloncesto en un pabellón con poca luz.", ["Hace falta congelar el movimiento: velocidad rápida, al menos 1/500 s.", "Para compensar la luz, apertura grande (f/2,8).", "Si aún falta luz, subir el ISO aceptando algo de ruido."], "1/500 s, f/2,8 e ISO alto (por ejemplo 3200)."],
    ["Mejora una foto de un amigo centrado delante de una pared llena de carteles.", ["Acercarse para eliminar lo que sobra.", "Situarlo en un tercio y buscar un fondo más limpio o desenfocarlo con apertura grande.", "Colocarlo con luz lateral suave, cerca de una ventana."], "Retrato más cercano, en un tercio, con fondo limpio y luz lateral."],
    ["Analiza la foto «Salida de la Tierra» (1968) según su género y función.", ["Género: fotografía científica y documental.", "Denotación: la Tierra asoma sobre el horizonte lunar.", "Connotación: fragilidad y unidad del planeta; impulsó el ecologismo."], "Documento científico con un gran poder simbólico."],
  ],
  errores: [
    "Pensar que una cámara más cara hace mejores fotos: decide más la mirada y la luz.",
    "Centrar siempre el motivo y dejar el horizonte en mitad de la imagen.",
    "Fotografiar a contraluz sin querer y obtener caras oscuras.",
    "Creer que una foto es verdad solo por parecer real.",
  ],
  ejercicios: {
    b: [
      ["¿Qué es una cámara oscura?", "Una caja o sala cerrada con un orificio que proyecta en el lado opuesto la imagen invertida del exterior."],
      ["Cita tres inventos clave de la historia de la fotografía con su fecha aproximada.", "Primera foto de Niépce (1826), daguerrotipo (1839), cámara Kodak (1888), fotografía digital (años noventa)."],
      ["Nombra los tres elementos del triángulo de exposición.", "Apertura, velocidad de obturación e ISO."],
      ["Enumera cinco géneros fotográficos.", "Retrato, paisaje, calle, fotoperiodismo, publicidad (o bodegón, científica, artística)."],
    ],
    m: [
      ["Explica qué efecto tiene cambiar de f/2 a f/16 en un paisaje.", "Entra menos luz y aumenta la profundidad de campo: todo, del primer plano al fondo, queda nítido. Habrá que compensar con más tiempo o más ISO."],
      ["¿Qué diferencia hay entre luz dura y luz suave? Pon un ejemplo de cuándo usar cada una.", "Dura: sombras marcadas y contraste, para fotos dramáticas o arquitectura. Suave: sombras difusas, favorecedora para retratos."],
      ["¿Por qué el negativo fue más importante que el daguerrotipo para la difusión de la fotografía?", "Porque permitía obtener muchas copias de una misma toma, mientras el daguerrotipo era una pieza única."],
      ["Describe tres recursos de composición que verías en una foto de una calle con soportales.", "Líneas guía (los soportales convergen), repetición de arcos y enmarcado del fondo por un arco."],
    ],
    a: [
      ["Escoge una foto histórica famosa y analízala: autor, contexto, composición, luz y efecto que tuvo.", "Respuesta abierta. Debe incluir ficha, descripción técnica (encuadre, luz, punto de vista), interpretación y su influencia social."],
      ["Debate: ¿debería indicarse siempre cuándo una imagen publicitaria está retocada o creada con IA? Argumenta.", "Respuesta abierta argumentada: derecho a la información veraz, efectos en la autoestima y la confianza, frente a la libertad creativa; pueden citarse normas que ya lo exigen."],
    ],
  },
  glosario: [
    ["Objetivo", "Conjunto de lentes que enfoca la luz sobre el sensor."],
    ["Diafragma", "Abertura regulable que controla la cantidad de luz."],
    ["Obturador", "Mecanismo que deja pasar la luz durante un tiempo."],
    ["Sensor", "Chip que convierte la luz en una imagen digital."],
    ["Profundidad de campo", "Zona de la imagen que aparece nítida."],
    ["Exposición", "Cantidad de luz que recibe la foto."],
    ["Contraluz", "Luz que llega desde detrás del sujeto."],
    ["Hora dorada", "Momento tras el amanecer o antes del ocaso con luz cálida y suave."],
    ["Bodegón", "Fotografía de objetos inanimados compuestos."],
    ["Retoque", "Modificación de una imagen tras tomarla."],
  ],
  situacion: {
    titulo: "Mi barrio en seis fotos",
    reto: "Contar con seis fotografías hechas con el móvil cómo es tu barrio o tu pueblo.",
    pasos: [
      "Piensa qué quieres contar y elige seis motivos (personas, lugares, detalles).",
      "Haz cada foto aplicando un recurso distinto: tercios, líneas guía, enmarcado, contraluz, detalle, retrato.",
      "Selecciona y edita con moderación: luz y recorte, sin alterar el contenido.",
      "Monta una pequeña exposición con un título y una línea de pie para cada foto.",
    ],
    producto: "Una serie de seis fotografías con título y pies de foto.",
    evaluacion: [
      "Cada foto aplica con claridad el recurso indicado.",
      "La serie cuenta una historia coherente.",
      "La edición es cuidada y honesta.",
      "Los pies de foto aportan contexto.",
    ],
  },
  familias: [
    "Mirad juntos el álbum familiar y comparad fotos antiguas y actuales.",
    "Proponedle hacer el retrato de un familiar junto a una ventana, con luz lateral.",
    "Comentad una foto de prensa del día: qué cuenta y cómo está hecha.",
    "Hablad sobre qué fotos se pueden publicar de otras personas y cuáles no.",
  ],
  saberes: "La fotografía: antecedentes (cámara oscura), invención y evolución técnica, funcionamiento de la cámara y triángulo de exposición, composición, luz y punto de vista, géneros fotográficos, fotoperiodismo y ética de la imagen digital.",
  ideas: [
    "Construir una cámara oscura con una caja de zapatos y papel vegetal.",
    "Reto fotográfico semanal con un recurso de composición distinto.",
    "Comparar la misma escena con tres aperturas y tres velocidades.",
    "Analizar en grupo fotos premiadas del World Press Photo.",
  ],
  fuentes: [
    { t: "Historia de la fotografía, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Historia_de_la_fotograf%C3%ADa" },
    { t: "World Press Photo", url: "https://www.worldpressphoto.org" },
  ],
});
