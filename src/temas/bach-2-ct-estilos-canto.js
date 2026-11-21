// Coro y Técnica Vocal II, 2º de Bachillerato. Tema 4 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ct");

module.exports = B.tema({
  titulo: "Estilos de canto: lírico, moderno, góspel y jazz",
  minutos: 60,
  objetivos: [
    "Reconocer los rasgos técnicos del canto lírico y del canto moderno",
    "Conocer recursos del canto moderno como el belting, el twang y los efectos",
    "Identificar las características vocales del góspel y del jazz",
    "Adaptar la propia voz al estilo de cada obra del repertorio",
  ],
  claves: ["canto lírico", "canto moderno", "vibrato", "belting", "twang", "góspel", "scat", "micrófono"],
  pregunta: {
    texto: "¿Por qué una cantante de ópera llena un teatro sin micrófono y una cantante de pop necesita uno aunque cante en una sala pequeña?",
    respuesta: "Porque usan <mark>técnicas distintas</mark> para objetivos distintos. El canto lírico busca proyectar la voz por encima de una orquesta sin amplificación, con mucha resonancia. El canto moderno nace con el <mark>micrófono</mark>, que permite matices íntimos, susurros y un sonido cercano al habla.",
  },
  lectura: {
    titulo: "Un mismo cuerpo, muchas voces",
    html: `<p>Hay cantantes capaces de pasar en una misma noche de un aria de Mozart a un tema de musical y de ahí a una balada de jazz. No cambian de garganta: cambian de <b>técnica</b>. Ajustan la posición de la laringe, la forma de la boca, la cantidad de aire y el vibrato.</p>
    <p>Un coro de 2º de Bachillerato canta hoy polifonía renacentista, mañana un arreglo de pop y pasado un góspel. Conocer los estilos ayuda a cantar cada obra «como se canta», con respeto a su tradición, y a no forzar la voz intentando imitar lo que se oye en las grabaciones.</p>`,
  },
  secciones: [2, 3, 2],
  bloques: [
    {
      h: "El canto lírico o clásico",
      html: `<p>El <b>canto lírico</b> es la técnica de la ópera, el oratorio y la canción de concierto. Se desarrolló para que la voz se oyera sin amplificación en teatros grandes y sobre una orquesta. Busca un sonido redondo, con mucha <b>resonancia</b>, una laringe relativamente baja y estable y una gran <b>proyección</b>.</p>
      <p>Usa un <b>vibrato</b> amplio y regular, une las notas en un legato continuo y homogeneiza los registros para que no se noten los cambios. Las vocales se modifican en los agudos para mantener el color. En el coro clásico se toma esta base, aunque con un vibrato más contenido para empastar.</p>`,
      svg: B.cajas("Rasgos del canto lírico", [["Resonancia", "sonido redondo|y proyectado"], ["Laringe", "baja|y estable"], ["Vibrato", "amplio|y regular"], ["Legato", "frases unidas|registros iguales"]]),
    },
    {
      h: "El canto moderno",
      html: `<p>El <b>canto moderno</b> (pop, rock, musical, soul) parte de la <b>voz hablada</b>: las palabras se entienden como en una conversación y el timbre personal es más importante que la uniformidad. El <b>micrófono</b> permite cantar suave, con aire, con matices muy íntimos, y el vibrato suele aparecer solo al final de las notas largas.</p>
      <p>En el canto moderno se usa más la voz de pecho o una voz mixta con mucho cuerpo en la zona media y aguda. También se emplean <b>efectos</b> como el aire en la voz, el <i>vocal fry</i> (sonido crujiente grave) o los adornos rápidos (<i>riffs</i> y <i>runs</i>).</p>`,
      svg: B.comparar("Lírico frente a moderno", ["Lírico", ["sin micrófono", "laringe baja", "vibrato constante", "registros iguales"]], ["Moderno", ["con micrófono", "cercano al habla", "vibrato al final", "timbre personal"]]),
      video: { id: "d6VtNNVO7oI", titulo: "10 diferencias entre canto lírico y canto popular", canal: "Cantá Lírico", vistas: 52273 },
    },
    {
      h: "Belting y twang",
      html: `<p>El <b>belting</b> es la técnica del musical y del pop para cantar agudos potentes con un sonido parecido a una llamada o a un grito controlado. No es empujar la voz de pecho: se consigue con una voz mixta muy brillante, mucho apoyo, la boca abierta en vocales como «e» o «a» y una laringe algo más alta.</p>
      <p>El <b>twang</b> es un estrechamiento de la zona justo encima de las cuerdas vocales (el esfínter ariepiglótico) que da un sonido metálico y brillante, como el de un pato o una sirena de juguete. Aumenta la potencia sin más esfuerzo. Ambas técnicas deben aprenderse con un profesor y con mucho cuidado de la salud vocal.</p>`,
      svg: B.flujo("Hacia el belting sin forzar", ["Voz hablada con energía: «¡ey!»", "Añadir twang: sonido brillante", "Subir en voz mixta", "Abrir la vocal y apoyar"]),
      video: { id: "NHu1qIb2gic", titulo: "Cómo cantar notas altas con voz de pecho: belting sin forzar la voz", canal: "Natalia Bliss", vistas: 124048 },
    },
    {
      h: "El góspel",
      html: `<p>El <b>góspel</b> nació en las iglesias afroamericanas de Estados Unidos a principios del siglo XX, a partir de los <i>spirituals</i> y del blues. Su sonido vocal es potente, con mucho cuerpo, voz de pecho y voz mixta brillante, abundantes adornos y una gran <b>libertad expresiva</b>.</p>
      <p>Los coros góspel cantan casi siempre a tres voces (sopranos, contraltos y tenores), aprenden muchas veces de oído y usan la estructura de <b>pregunta y respuesta</b> entre solista y coro. El cuerpo participa: palmas en el segundo y cuarto tiempo, balanceo y movimiento coordinado.</p>`,
      svg: B.estrella("Ingredientes del góspel", "Góspel", ["Solista y coro", "Palmas 2 y 4", "Voz potente", "Adornos", "Movimiento"]),
      video: { id: "6bHHVZRIa4g", titulo: "«Me has convencido»", canal: "Coro Góspel Metropolitano", vistas: 355460 },
    },
    {
      h: "El jazz vocal",
      html: `<p>El <b>jazz vocal</b> se caracteriza por el <b>swing</b>, un ritmo que «balancea» las corcheas, por las armonías ricas (acordes con séptimas, novenas y más) y por la <b>improvisación</b>. Los cantantes de jazz juegan con la melodía: la adelantan, la retrasan, cambian notas y la adornan.</p>
      <p>Una técnica característica es el <b><i>scat</i></b>: improvisar con sílabas sin significado («du-bi-du-ba») imitando a un instrumento. Ella Fitzgerald y Louis Armstrong fueron grandes maestros del scat. En el ámbito coral destacan los grupos vocales de jazz, con armonías cerradas a cuatro, cinco o seis voces.</p>`,
      svg: B.rejilla("Recursos del jazz vocal", ["Recurso", "Qué es"], [["Swing", "corcheas balanceadas"], ["Scat", "improvisar con sílabas"], ["Armonía", "séptimas y novenas"], ["Fraseo libre", "adelantar o retrasar"]]),
    },
    {
      h: "El micrófono y la voz",
      html: `<p>El <b>micrófono</b> cambió la forma de cantar en el siglo XX. Los <i>crooners</i>, como Bing Crosby o Frank Sinatra, aprendieron a cantar suave y cerca, como si hablaran al oído del oyente. La distancia al micrófono es una herramienta expresiva: más cerca, más graves e intimidad; más lejos, para las notas fuertes.</p>
      <p>Si un coro escolar canta con micrófonos, conviene recordar que el técnico de sonido equilibra el volumen: no hay que empujar la voz. El micrófono amplifica también los defectos, como las respiraciones ruidosas, las «p» explosivas o una afinación dudosa.</p>`,
      svg: B.barras("Distancia orientativa al micrófono de mano", [["Susurro", 3], ["Voz suave", 5], ["Voz media", 10], ["Agudo fuerte", 20]], { t: "Más fuerte, más lejos (cm)", unidad: " cm" }),
    },
    {
      h: "Adaptar la voz a cada estilo",
      html: `<p>Un buen cantante de coro sabe <b>cambiar de estilo</b>. En la polifonía renacentista se pide un sonido limpio, con poco vibrato y vocales puras; en un oratorio romántico, más cuerpo y legato; en un arreglo pop, dicción natural y ritmo preciso; en un góspel, energía, voz de pecho y libertad.</p>
      <p>Para adaptarse hay que <b>escuchar</b> grabaciones de referencia de cada estilo, analizar qué hacen los cantantes y elegir con el director el tipo de sonido. Ningún estilo es «mejor»: cada uno tiene su técnica y sus riesgos, y todos se cantan mejor con una voz sana y bien apoyada.</p>`,
      svg: B.rejilla("El sonido de cada estilo", ["Estilo", "Vibrato", "Sonido"], [["Renacimiento", "mínimo", "limpio"], ["Romántico", "moderado", "cálido"], ["Pop", "al final", "natural"], ["Góspel", "libre", "potente"]]),
    },
  ],
  figura: {
    titulo: "Cuatro maneras de cantar",
    items: [["Lírico", "🎭", "resonancia", "sin micrófono"], ["Moderno", "🎤", "voz hablada", "y efectos"], ["Góspel", "👏", "solista y coro", "energía"], ["Jazz", "🎷", "swing", "y scat"]],
  },
  video: { id: "5SpT72wo6CY", titulo: "Canto moderno frente a canto lírico", canal: "Natalia Bliss", vistas: 48573 },
  quiz: [
    ["El canto lírico se desarrolló para…", ["cantar con micrófono", "oírse sin amplificación sobre una orquesta", "cantar en la radio", "improvisar"], 1, "Por eso busca tanta proyección."],
    ["En el canto moderno el punto de partida es…", ["la voz hablada", "el falsete", "la laringe muy baja", "el vibrato constante"], 0, "Se entiende como una conversación."],
    ["El belting sirve para…", ["cantar graves suaves", "cantar agudos potentes con sonido de llamada", "susurrar", "afinar"], 1, "Típico del musical y el pop."],
    ["El twang da a la voz un sonido…", ["oscuro", "metálico y brillante", "con aire", "grave"], 1, "Aumenta la potencia sin más esfuerzo."],
    ["El góspel nació en…", ["las iglesias afroamericanas de EE. UU.", "la ópera italiana", "los monasterios medievales", "Broadway"], 0, "A partir de spirituals y blues."],
    ["En el góspel las palmas suelen ir en los tiempos…", ["1 y 3", "2 y 4", "solo el 1", "en ninguno"], 1, "Los tiempos débiles."],
    ["El scat es…", ["una forma de respirar", "improvisar con sílabas sin significado", "un tipo de micrófono", "una vocal"], 1, "Ella Fitzgerald fue una maestra."],
    ["El swing consiste en…", ["corcheas balanceadas", "cantar sin ritmo", "un tipo de vibrato", "cantar en falsete"], 0, "Ritmo característico del jazz."],
    ["En la polifonía renacentista se pide normalmente…", ["mucho vibrato", "sonido limpio y poco vibrato", "belting", "scat"], 1, "Para que las voces se entrelacen claras."],
    ["Con el micrófono, para una nota fuerte conviene…", ["acercarse más", "alejarse un poco", "taparlo", "gritar"], 1, "Así no se satura el sonido."],
  ],
  examen: [
    ["Los crooners como Sinatra se caracterizan por…", ["cantar muy fuerte", "cantar suave y cerca del micrófono", "cantar ópera", "usar scat siempre"], 1, "Aprovecharon el micrófono."],
    ["¿Cuál es un rasgo del canto lírico?", ["vibrato solo al final", "registros homogéneos y mucha resonancia", "vocal fry", "voz hablada"], 1, "Busca uniformidad y proyección."],
    ["Los coros góspel suelen cantar a…", ["una voz", "tres voces (S, A, T)", "ocho voces", "dos voces graves"], 1, "Sopranos, contraltos y tenores."],
    ["El belting correcto se basa en…", ["empujar la voz de pecho", "voz mixta brillante y mucho apoyo", "cantar en falsete", "cantar sin aire"], 1, "No es gritar."],
    ["¿Por qué un estilo no es «mejor» que otro?", ["Porque todos son iguales", "Porque cada uno tiene su técnica y su propósito", "Porque solo importa el volumen", "Porque no hay técnica"], 1, "Se adapta la voz a cada uno."],
  ],
  feynman: ["Qué diferencia el canto lírico del moderno", "Qué son el belting y el twang", "Cómo suena y se organiza un coro góspel", "Qué recursos usa el jazz vocal"],
  mapa: ["ESTILOS DE CANTO", [["Lírico", "resonancia · vibrato · legato"], ["Moderno", "voz hablada · micrófono · efectos"], ["Góspel", "solista y coro · palmas · energía"], ["Jazz", "swing · scat · armonía rica"]]],
  tarjetas: [
    ["Canto lírico", "Técnica de la ópera: resonancia y proyección sin micrófono."],
    ["Canto moderno", "Técnica del pop, rock y musical, basada en la voz hablada."],
    ["Vibrato", "Oscilación regular de la altura de una nota."],
    ["Belting", "Agudos potentes con voz mixta brillante."],
    ["Twang", "Sonido metálico que da brillo y potencia."],
    ["Góspel", "Canto religioso afroamericano con solista y coro."],
    ["Scat", "Improvisación vocal con sílabas sin significado."],
    ["Swing", "Ritmo balanceado de las corcheas en el jazz."],
  ],
  ejemplos: [
    ["El coro prepara un motete de Victoria y una versión coral de una canción pop. ¿Qué sonido pides en cada uno?", ["Victoria: sonido limpio, vibrato mínimo, vocales puras y legato.", "Pop: dicción natural, ritmo preciso, consonantes claras.", "En los dos: voz bien apoyada, sin forzar."], "Dos sonidos distintos adaptados a cada estilo."],
    ["Un alumno quiere cantar un tema de musical con agudos muy potentes y se queda ronco. ¿Qué le aconsejas?", ["No empujar la voz de pecho.", "Trabajar el twang y la voz mixta con un profesor.", "Calentar antes y descansar después.", "Bajar el tono si es necesario."], "Belting con técnica y cuidado de la salud vocal."],
    ["Organiza un coro góspel de 15 personas con 9 chicas y 6 chicos.", ["Sopranos: unas 5 chicas; contraltos: 4 chicas.", "Tenores: los 6 chicos (con voz mixta en los agudos).", "Elegir un solista para la pregunta y respuesta.", "Ensayar palmas en 2 y 4 y movimiento sencillo."], "Coro góspel a tres voces con solista."],
  ],
  errores: [
    "Pensar que el canto moderno no necesita técnica.",
    "Confundir belting con gritar o empujar la voz de pecho.",
    "Cantar polifonía antigua con un vibrato muy amplio.",
    "Imitar el timbre de un cantante famoso en lugar de usar la propia voz.",
  ],
  ejercicios: {
    b: [
      ["Di dos rasgos del canto lírico y dos del canto moderno.", "Lírico: resonancia y vibrato regular (también laringe baja y legato). Moderno: parte de la voz hablada y usa micrófono (también efectos y vibrato al final)."],
      ["¿Qué es el scat?", "Improvisar cantando sílabas sin significado, imitando a un instrumento."],
      ["¿Dónde nació el góspel?", "En las iglesias afroamericanas de Estados Unidos."],
      ["¿Qué es el swing?", "Un ritmo característico del jazz en el que las corcheas se interpretan balanceadas."],
    ],
    m: [
      ["Explica cómo cambió el micrófono la forma de cantar.", "Permitió cantar suave, con aire y matices íntimos sin necesidad de proyectar; nació el estilo de los crooners."],
      ["¿Qué diferencia hay entre belting y gritar?", "El belting usa voz mixta brillante, twang y apoyo sin tensión; gritar empuja la voz de pecho con tensión y daña la voz."],
      ["Explica la estructura de pregunta y respuesta del góspel.", "El solista canta una frase y el coro le responde con otra, en un diálogo que se repite y crece en intensidad."],
      ["¿Por qué un coro clásico controla el vibrato?", "Porque un vibrato amplio y distinto en cada cantante dificulta la afinación y el empaste."],
    ],
    a: [
      ["Escucha la misma canción cantada por una cantante lírica y por una de pop. Compara emisión, vibrato, dicción y uso del micrófono.", "Respuesta abierta: comparación de los cuatro aspectos con ejemplos concretos de la audición."],
      ["Prepara con tu cuerda una frase cantada en tres estilos: renacentista, pop y góspel. Graba las versiones y explica qué cambiaste.", "Respuesta abierta: cambios de vibrato, ataque, dicción, ritmo y energía justificados según el tema."],
    ],
  },
  glosario: [
    ["Proyección", "Capacidad de la voz para oírse lejos sin amplificación."],
    ["Vibrato", "Oscilación regular de altura que da vida al sonido."],
    ["Legato", "Unión continua de las notas."],
    ["Belting", "Técnica de agudos potentes en el canto moderno."],
    ["Twang", "Ajuste que da a la voz un sonido metálico y brillante."],
    ["Vocal fry", "Sonido grave y crujiente usado como efecto."],
    ["Riff", "Adorno rápido de varias notas en el canto moderno."],
    ["Crooner", "Cantante que canta suave y cerca del micrófono."],
    ["Scat", "Improvisación con sílabas sin significado."],
  ],
  situacion: {
    titulo: "Gira de estilos",
    reto: "Preparar un breve concierto con tres obras de estilos diferentes y explicar al público cómo cambia la voz en cada una.",
    pasos: [
      "Elegir una obra clásica, una moderna y una de góspel o jazz.",
      "Analizar grabaciones de referencia de cada estilo.",
      "Ensayar con el sonido propio de cada estilo.",
      "Preparar una breve presentación oral antes de cada obra.",
    ],
    producto: "Un miniconcierto de tres obras con presentación.",
    evaluacion: [
      "Cada obra se canta con el sonido de su estilo.",
      "La presentación explica rasgos técnicos correctos.",
      "Se cuida la salud vocal en todo el repertorio.",
      "Hay coordinación y escucha en el grupo.",
    ],
  },
  familias: [
    "Escuchad en casa un aria de ópera, una canción de pop y un góspel.",
    "Comentad qué diferencias notáis en la forma de cantar.",
    "Ved juntos un musical y fijaos en el belting.",
    "Recordad que imitar a ídolos sin técnica puede dañar la voz.",
  ],
  saberes: "Coro y Técnica Vocal II: estilos de interpretación vocal; técnica del canto lírico y del canto moderno; recursos y efectos vocales; góspel y jazz vocal; el micrófono como herramienta expresiva; adaptación de la emisión al estilo; salud vocal.",
  ideas: [
    "Comparar grabaciones de la misma canción en estilos distintos.",
    "Invitar a un cantante de musical o de góspel al aula.",
    "Hacer un taller de scat con bases de jazz.",
    "Probar micrófonos y distancias en el ensayo.",
  ],
  fuentes: [
    { t: "Canto, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Canto" },
    { t: "Gospel, Wikipedia en español", url: "https://es.wikipedia.org/wiki/G%C3%B3spel" },
    { t: "Scat, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Scat" },
  ],
});
