// Dibujo Artístico I, 1º de Bachillerato. Tema 8, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L41");
const { marco, t, ln, rc, ci, el, pa, trazo } = B;

// Apunte en tres tiempos: 1, 5 y 20 minutos con más detalle.
const tiempos = marco("El mismo árbol dibujado en 1 minuto, 5 minutos y 20 minutos: de la silueta al detalle",
  `${[["1 min", 14], ["5 min", 96], ["20 min", 178]].map(([n, x], i) => `${rc(x, 24, 70, 92, 'fill="var(--card)" stroke="var(--line)" rx="4"')}${t(x + 35, 136, n, { bold: 1 })}${pa(`M${x + 35} 108 V78`, trazo("var(--ink)", 2.4))}${i === 0 ? ci(x + 35, 62, 18, trazo("var(--leaf)", 2)) : ""}${i === 1 ? `${ci(x + 35, 62, 18, trazo("var(--leaf)", 2))}${ci(x + 28, 56, 8, trazo("var(--leaf)", 1.4))}${ci(x + 42, 66, 8, trazo("var(--leaf)", 1.4))}${ln(x + 20, 108, x + 52, 108, "var(--muted)", 1.2)}` : ""}${i === 2 ? `${ci(x + 35, 60, 20, 'fill="var(--leaf)" fill-opacity=".3" stroke="var(--leaf)" stroke-width="2"')}${ci(x + 28, 54, 8, 'fill="var(--leaf)" fill-opacity=".4"')}${ci(x + 44, 66, 9, 'fill="var(--leaf)" fill-opacity=".5"')}${ln(x + 35, 90, x + 24, 78, "var(--ink)", 1.6)}${ln(x + 35, 86, x + 46, 74, "var(--ink)", 1.6)}${pa(`M${x + 14} 112 Q${x + 35} 100 ${x + 56} 112`, 'fill="#000" fill-opacity=".18"')}${ln(x + 14, 108, x + 56, 108, "var(--muted)", 1.2)}` : ""}`).join("")}${t(130, 166, "más tiempo = más información, no más líneas", { color: "var(--muted)", maxW: 230 })}`);

// Horizonte y perspectiva intuitiva en una calle.
const calle = marco("Calle en perspectiva intuitiva: horizonte a la altura de los ojos y fugas hacia un punto",
  `${ln(10, 84, 250, 84, "var(--red)", 1.6, 'stroke-dasharray="5 3"')}${t(130, 76, "horizonte", { fs: 9.5, color: "var(--red)", maxW: 50 })}${ln(130, 84, 14, 164, "var(--line)", 1.6)}${ln(130, 84, 246, 164, "var(--line)", 1.6)}
  ${pa("M14 164 L14 40 L56 60 L56 130Z", 'fill="var(--card)" stroke="var(--ink)" stroke-width="2"')}${pa("M246 164 L246 40 L204 60 L204 130Z", 'fill="var(--card)" stroke="var(--ink)" stroke-width="2"')}${pa("M56 60 L96 74 L96 108 L56 130Z", 'fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"')}${pa("M204 60 L164 74 L164 108 L204 130Z", 'fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"')}${ci(130, 84, 3.5, 'fill="var(--red)"')}${t(130, 176, "punto de fuga", { fs: 9.5, color: "var(--muted)", maxW: 80 })}`);

// Página de cuaderno con notas.
const pagina = marco("Página de cuaderno: apunte, fecha, lugar y notas sobre color y luz",
  `${rc(40, 14, 180, 152, 'fill="#fffdf4" stroke="var(--ink)" stroke-width="1.8" rx="6"')}${pa("M52 128 L52 66 L82 52 L82 122Z M82 52 L124 64 L124 128 L82 122Z", trazo("var(--ink)", 2))}${ln(130, 130, 210, 130, "var(--muted)", 1.2)}${ci(180, 56, 12, trazo("var(--sun)", 2))}${pa("M150 110 Q170 86 200 110", trazo("var(--leaf)", 2))}
  ${t(130, 30, "Plaza de Oriente · 14 nov · 11:30", { fs: 9.5, maxW: 160, bold: 1 })}${t(70, 146, "piedra cálida", { fs: 9, maxW: 70, anchor: "start", color: "var(--muted)" })}${t(150, 146, "sombra violeta", { fs: 9, maxW: 70, anchor: "start", color: "var(--muted)" })}${t(130, 160, "luz de la derecha", { fs: 9, maxW: 90, color: "var(--muted)" })}`);

module.exports = B.tema({
  titulo: "El apunte y el dibujo del natural",
  minutos: 100,
  objetivos: [
    "Distinguir apunte, boceto, estudio y obra, y reconocer el valor del dibujo del natural",
    "Organizar un cuaderno de apuntes con materiales mínimos, notas y un hábito regular",
    "Resolver apuntes rápidos (1, 5 y 20 minutos) de paisaje urbano, arquitectura, objetos, figuras y naturaleza",
    "Tomar decisiones de motivo, encuadre y síntesis en el lugar y trabajar con ética y respeto en espacios públicos",
  ],
  claves: ["apunte", "boceto", "estudio", "dibujo del natural", "cuaderno", "síntesis", "urban sketching", "croquis", "encuadre", "hábito"],
  pregunta: {
    texto: "Con una cámara de móvil en el bolsillo, ¿por qué siguen miles de personas sentándose en una plaza con un cuaderno para dibujar lo que ven?",
    respuesta: "Porque dibujar del natural no es solo <mark>registrar</mark>, es <b>comprender</b>. Al dibujar un lugar lo miras de verdad: decides qué importa, entiendes cómo está construido, notas la luz y lo recuerdas durante años. La foto lo guarda; el apunte te lo enseña. Y además es el mejor entrenamiento de observación, rapidez y síntesis que existe.",
  },
  lectura: {
    titulo: "Goya y su cuaderno italiano",
    html: `<p>Francisco de Goya tenía unos veinticuatro años cuando viajó a Italia, y desde joven llevaba un cuaderno. En sus páginas anotó figuras, caricaturas, esbozos de cuadros, esculturas antiguas, escenas de la calle... Nadie le había encargado esos dibujos; no eran obras para vender sino un <b>diario visual</b> de lo que veía y pensaba. Más de cincuenta años después, en Burdeos, ya anciano y sordo, escribió bajo un dibujo suyo una frase: «Aún aprendo».</p>
    <p>Los grandes artistas han sido grandes apuntadores: Leonardo anotaba remolinos de agua y expresiones de cara; Velázquez dibujaba a sus modelos antes de pintarlos; Picasso llenó decenas de cuadernos; hoy, ilustradores y arquitectos de todo el mundo llevan un pequeño cuaderno y se reúnen por grupos para dibujar sus ciudades.</p>
    <p>En este último tema del curso aprenderás a dibujar <b>lo que tienes delante</b>, rápido y con intención. Pondrás en práctica todo lo aprendido: la línea, el encaje, la proporción, la luz y el color. El apunte del natural es la forma de que todo lo demás se convierta en un hábito y en una forma personal de mirar.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Apunte, boceto, estudio y obra",
      html: `<p>Los términos del dibujo se usan a veces de manera confusa, pero tienen matices:</p>
      <ul><li><b>Apunte</b> (o <i>croquis</i>): dibujo rápido tomado del natural para <b>registrar</b> lo que se ve. Suele ser breve (de 30 segundos a 20 minutos) y sin pretensiones de acabado.</li>
      <li><b>Boceto</b>: dibujo preparatorio de una obra futura. Explora ideas, composiciones o alternativas.</li>
      <li><b>Estudio</b>: dibujo más cuidadoso de una parte concreta (una mano, un pliegue, un árbol) para resolver un problema.</li>
      <li><b>Obra</b> o dibujo terminado: pieza completa y pensada, con intención expresiva.</li></ul>
      <p>Un mismo dibujo puede cumplir varias funciones. Muchos apuntes de grandes artistas se han conservado y admirado como obras por su espontaneidad. El valor del apunte está en que es <mark>honesto</mark>: no oculta los errores y deja ver cómo piensa el dibujante.</p>
      <p>Una cosa importante: el apunte <b>no se hace para gustar a nadie</b>. Se hace para ver, aprender y recordar. Quien dibuja pensando en el resultado perfecto, dibuja menos y aprende menos.</p>`,
      svg: B.rejilla("Cuatro tipos de dibujo", ["Tipo", "Fin", "Tiempo"], [["Apunte", "registrar", "1-20 min"], ["Boceto", "explorar", "variable"], ["Estudio", "resolver", "30-90 min"], ["Obra", "expresar", "horas"]], { t: "Del apunte a la obra" }),
    },
    {
      h: "Por qué dibujar del natural",
      html: `<p>Dibujar del <b>natural</b> (del modelo real, no de una foto) es insustituible por razones prácticas:</p>
      <ul><li><b>Tres dimensiones reales</b>: la foto aplana el espacio, la luz y los valores; el natural muestra profundidad, cambios de luz, movimiento y detalles que el ojo explora.</li>
      <li><b>Información completa</b>: puedes cambiar de punto de vista, acercarte, esperar a que cambie la luz.</li>
      <li><b>Atención plena</b>: el tiempo limitado y la presencia obligan a mirar con intensidad. La memoria del lugar queda asociada a lo dibujado.</li>
      <li><b>Decisión constante</b>: sin la «ayuda» de la fotografía (que lo da todo hecho), tienes que seleccionar, simplificar y componer.</li></ul>
      <p>Las fotos son útiles como <b>complemento</b> (para recordar un color o un detalle), pero conviene no depender de ellas: quien copia fotografías copia también sus errores de perspectiva, de contraste y de saturación. Por eso, la regla del taller es: <mark>mejor mal del natural que bien de foto</mark>.</p>
      <p>Y además, es agradable. Dibujar en un parque, una plaza o una terraza es una forma de estar presente en el sitio y de descubrir detalles que habías pasado por alto mil veces.</p>`,
      svg: B.comparar("Natural frente a fotografía", ["Del natural", ["3D real", "luz que cambia", "decides tú", "memoria viva"]], ["De foto", ["plano", "contraste fijo", "todo decidido", "copia errores"]]),
      video: { id: "Q-5vYyAd9nE", titulo: "DIBUJO ARQUITECTÓNICO A MANO  - Plano a mano", canal: "ARQUIROCK", vistas: 549804 },
    },
    {
      h: "El cuaderno y los materiales mínimos",
      html: `<p>El cuaderno es tu <b>laboratorio personal</b>. Para salir a dibujar basta un equipo ligero:</p>
      <ul><li><b>Cuaderno</b>: de tapa dura o con un buen respaldo, de tamaño A5 o A6 (para llevarlo en el bolsillo o en una mano). Papel de 120-150 g si vas a usar húmedo.</li>
      <li><b>Un lápiz o portaminas 2B</b> y una goma, o un <b>bolígrafo o rotulador fino</b> resistente al agua.</li>
      <li><b>Opcionales</b>: pequeña acuarela de viaje con pincel de agua, lápices de color, un rotulador gris, una banqueta plegable o un cartón para apoyar.</li></ul>
      <p>Sobre el uso del cuaderno: <b>no arranques páginas</b> (aunque salgan mal), usa las dos páginas en abierto si el motivo es largo, dibuja con tinta si quieres ganar seguridad y acepta que no todo será bonito. Conviene numerar las páginas, anotar fecha y lugar y dibujar un poco <b>cada día</b>, aunque sea cinco minutos.</p>
      <p>Una buena regla: que <mark>no pese tanto que lo dejes en casa</mark>. El mejor cuaderno es el que llevas encima. Con menos material y más práctica, el resultado mejora más que con un estuche enorme.</p>`,
      svg: B.cajas("Kit mínimo de apunte", [["Cuaderno", "A5, tapa dura"], ["Lápiz 2B", "o bolígrafo fino"], ["Goma y sacapuntas", "pocos y pequeños"], ["Color opcional", "acuarelas o lápices"]], { t: "Ligero y siempre contigo" }),
    },
    {
      h: "Rapidez y síntesis: apuntes en 1, 5 y 20 minutos",
      html: `<p>El tiempo disponible decide lo que se puede decir. Una forma de entrenar es organizar el trabajo en <b>tres formatos</b>:</p>
      <ul><li><b>1 minuto</b>: solo <i>gesto, silueta y proporciones generales</i>. Un solo trazo continuo por masa. Sirve para figuras en movimiento y para captar el carácter.</li>
      <li><b>5 minutos</b>: esquema, encaje, <i>tres valores</i> (luz, medio, sombra) y un par de detalles. Para calles, edificios y objetos.</li>
      <li><b>20 minutos</b>: encaje cuidadoso, valoración completa, textura y detalles en el centro de interés. El apunte alcanza casi la categoría de estudio.</li></ul>
      <p>Lo importante es no adelantar el detalle: en los apuntes cortos se busca la <b>síntesis</b>, que consiste en saber qué <i>no</i> dibujar. Un buen truco: pregúntate «si solo pudiera hacer tres líneas, ¿cuáles serían?». Otro: ajusta la <b>densidad de información</b> al centro de interés, con más detalle en una zona pequeña y casi nada en el resto, para que la mirada del espectador tenga dónde descansar.</p>
      <p>Un cronómetro de móvil ayuda a evitar el perfeccionismo: cuando suena, <mark>se pasa a otro dibujo</mark> aunque el anterior no esté terminado. Así se aprende más rápido que dedicando tres horas a una sola pieza.</p>`,
      svg: tiempos,
    },
    {
      h: "Elegir el motivo y el encuadre en el lugar",
      html: `<p>Lo primero que hay que hacer cuando llegas a un sitio es <b>mirar</b> antes de dibujar. Da una vuelta, observa desde distintos puntos, fíjate en dónde da la luz y busca algo que te llame la atención: un contraste, una forma interesante, una escena con vida. Evita la tentación de dibujar «todo»: un buen apunte tiene un <b>centro de interés</b> claro.</p>
      <p>Para el encuadre, usa un <b>visor</b> (un marco de cartón o los dedos formando un rectángulo) y decide qué incluyes y qué dejas fuera. Aplica lo aprendido en los temas anteriores: formato horizontal o vertical según el motivo, regla de los tercios, aire en la dirección de la mirada, primer plano que dé profundidad y fondo que no compita. Haz una pequeña <b>miniatura</b> de composición antes de empezar, de pocos segundos.</p>
      <p>Cuida también las condiciones prácticas: busca una <b>sombra</b> o resguardo si hace sol o viento, una posición cómoda y segura, y que el sol no dé en el papel (el blanco deslumbra y se pierde la lectura de valores). Un truco: <mark>si el motivo cambia de luz con rapidez</mark> (un atardecer), decide el esquema de sombras en los primeros minutos y no lo modifiques.</p>`,
      svg: B.flujo("Qué hacer al llegar", ["Mirar y caminar sin dibujar", "Elegir centro de interés", "Encuadrar con visor", "Miniatura de composición", "Encaje y primer valor"], { t: "Antes del primer trazo" }),
    },
    {
      h: "El dibujo urbano (urban sketching)",
      html: `<p>El <b>dibujo urbano</b> o <i>urban sketching</i> es el movimiento mundial de personas que dibujan <b>del natural y en el lugar</b> ciudades, calles y escenas cotidianas, y comparten sus cuadernos. Nació en 2007 con Gabi Campanario, periodista y dibujante de Seattle, que fundó el grupo «Urban Sketchers»; hoy hay miles de miembros y grupos locales en casi todos los países, y también en España (Madrid, Barcelona, Valencia, Sevilla...).</p>
      <p>Se rige por un manifiesto de ocho principios, entre ellos: dibujar en el lugar, de la experiencia directa; reflejar el tiempo y el lugar donde vivimos y viajamos; ser <b>veraces</b> al dibujar lo que vemos; usar cualquier medio y apoyar y compartir con los demás. Es una forma de relación social y de mirar de manera nueva lo cotidiano.</p>
      <p>El estilo suele combinar <b>línea ágil de tinta</b> con <b>manchas de acuarela</b> o lápices de color, con lettering manuscrito y anotaciones. Muchos urban sketchers trabajan con la regla de la <i>«línea primero y color después»</i>, o a la inversa, mancha primero y línea encima. Conviene probar y encontrar el propio estilo sin imitar a los demás.</p>`,
      svg: B.cajas("Qué caracteriza al dibujo urbano", [["En el lugar", "dibujar del natural"], ["Veraz", "lo que se ve"], ["Cuaderno", "pequeño y portátil"], ["Comunidad", "compartir y salir juntos"]], { t: "Urban sketching" }),
      video: { id: "tRq2jnnXJBQ", titulo: "Técnica de dibujo en 5 pasos: dibujo urbano", canal: "Juan Linares", vistas: 49570 },
    },
    {
      h: "Paisaje y arquitectura",
      html: `<p>Para dibujar paisajes y edificios sin dominar la perspectiva formal basta con aplicar una <b>perspectiva intuitiva</b>:</p>
      <ul><li>Sitúa primero la <b>línea de horizonte</b>, que está siempre a la altura de tus ojos (si estás sentado, está baja).</li>
      <li>Las líneas horizontales paralelas que se alejan <b>convergen</b> hacia un punto del horizonte (punto de fuga). Las líneas por encima del horizonte bajan hacia él y las de debajo suben.</li>
      <li>Las <b>verticales</b> se mantienen verticales (salvo en vistas muy cercanas o desde abajo).</li>
      <li>Usa el lápiz para comparar <b>inclinaciones</b> y proporciones (ancho respecto a alto, ventana respecto a fachada).</li></ul>
      <p>En un paisaje, organiza el espacio en <b>tres planos</b> (primero, medio y fondo) y aplica la perspectiva atmosférica. Añade elementos con escala conocida (una persona, un árbol, una farola) para sugerir tamaño. Dibuja lo <b>esencial</b>: la silueta de las casas, el ritmo de las ventanas (sin dibujar cada una), la masa de los árboles.</p>
      <p>En arquitectura, empieza por la <b>caja general</b> del edificio y su inclinación, y añade los elementos estructurales: cornisas, huecos, tejados. La luz lateral crea sombras proyectadas que dan <mark>profundidad inmediata</mark> a las fachadas (balcones, aleros, columnas).</p>`,
      svg: calle,
      video: { id: "S_ku0AVnorY", titulo: "MEJORA TU TRAZO CON 5 EJERCICIOS | DRAWINGNINJA", canal: "DrawingNinja", vistas: 165898 },
    },
    {
      h: "Personas, animales y movimiento",
      html: `<p>Las personas dan vida a un apunte urbano, pero se mueven. El procedimiento: observa un movimiento repetitivo (alguien que lee en un banco, un camarero que va y viene, un perro que pasa), memoriza la <b>pose</b> más característica y dibújala con una línea de acción; si se va, <mark>no la corrijas</mark> y pasa a otra. Con el tiempo se construye una memoria visual de poses.</p>
      <p>Algunas pautas: dibuja a las personas lejanas como <b>siluetas simples</b> (una mancha ovalada con cabeza), reduciendo la figura a pocas formas; usa la <b>regla de las cabezas</b>: si todas están en la línea de horizonte, estás a su misma altura; las personas más cercanas son más grandes y con más detalle; observa el <b>grupo</b> (cómo se agrupan, hacia dónde miran) más que cada uno.</p>
      <p>Los <b>animales</b> se tratan igual: una línea de acción, formas básicas (óvalos y cilindros) y mucha rapidez. Perros, gatos y pájaros se mueven con ritmos característicos que se aprenden con la repetición. Los museos, los zoológicos y las terrazas son excelentes lugares de práctica.</p>
      <p>Respeta siempre la intimidad: no dibujes a nadie con la intención de que se reconozca ni lo hagas de forma que le incomode. Si te lo piden, enseña el dibujo con una sonrisa; la mayoría de las personas se sienten halagadas.</p>`,
      svg: B.flujo("Dibujar a alguien que se mueve", ["Observar el movimiento repetido", "Memorizar la pose clave", "Línea de acción y masas", "Si se va, pasar a otra", "Repetir: memoria de poses"], { t: "Figuras en movimiento" }),
    },
    {
      h: "Objetos cotidianos y naturalezas",
      html: `<p>No hace falta salir de casa para dibujar del natural: el hogar es un estudio inagotable. Los <b>objetos cotidianos</b> (una taza, unas llaves, un zapato, una silla, la planta de la ventana) son modelos pacientes que no se mueven y que permiten estudiar la luz, la forma y la textura con calma.</p>
      <p>Una práctica clásica es el <b>dibujo diario de un objeto</b>: elegir uno cada día, dibujarlo durante 10 a 15 minutos con lápiz o tinta y anotar fecha y observaciones. A los 30 días, el cuaderno es un inventario personal y una prueba clara de progreso. Dibuja objetos pequeños en un tamaño considerable y mira desde puntos de vista inusuales (desde arriba, de cerca, cortado por el borde).</p>
      <p>En la <b>naturaleza</b> se dibujan plantas, hojas, conchas, piedras y troncos. Esta tradición viene del dibujo científico (<i>cuadernos de campo</i> de naturalistas como Darwin o Humboldt). Aquí se mezclan la observación atenta y el rigor: contar las hojas, medir las proporciones, anotar el color y el lugar. Las plantas se simplifican con formas geométricas (conos, cilindros) y se dibujan primero las masas y después los detalles característicos.</p>`,
      svg: B.cajas("Modelos al alcance", [["Objetos", "taza, llaves, zapato"], ["Plantas", "hojas, flores, ramas"], ["Naturaleza", "conchas, piedras"], ["Interiores", "rincones y muebles"]], { t: "Siempre hay algo que dibujar" }),
    },
    {
      h: "Notas, fecha y color en el cuaderno",
      html: `<p>Un apunte no es solo un dibujo: es un <b>documento</b>. Escribir al lado ayuda a recordar y a estudiar:</p>
      <ul><li><b>Fecha, hora y lugar</b>: sitúan el apunte y dan valor de diario.</li>
      <li><b>Condiciones</b>: tiempo que hizo, de dónde venía la luz, cuánto se tardó.</li>
      <li><b>Anotaciones de color</b>: si no pintas en el sitio, escribe «ocre cálido», «gris azulado», «verde amarillento» en cada zona. Luego podrás colorear más tarde con memoria cromática o consultar el apunte.</li>
      <li><b>Medidas y comentarios técnicos</b> (altura aproximada de un edificio, detalles de una puerta).</li>
      <li><b>Reflexiones</b>: qué salió bien, qué mejorar, qué ha sido difícil.</li></ul>
      <p>El <b>lettering</b> a mano (la letra como elemento gráfico) puede convertirse en parte de la composición, con títulos, globos y flechas. Pero evita que el texto invada el dibujo: <mark>el apunte es lo principal</mark> y la nota, un apoyo.</p>
      <p>Revisa de vez en cuando tus cuadernos antiguos: te sorprenderá lo que has avanzado y descubrirás ideas que quizá puedas desarrollar.</p>`,
      svg: pagina,
    },
    {
      h: "Del apunte a la obra: estudios previos y memoria visual",
      html: `<p>Los apuntes son la <b>materia prima</b> de trabajos más ambiciosos. Casi todos los grandes cuadros han partido de bocetos y estudios del natural. Un método de trabajo habitual es:</p>
      <ol><li><b>Recopilar</b> apuntes de un tema (un mercado, una plaza, un oficio).</li>
      <li><b>Seleccionar</b> los mejores y analizar qué funciona (composición, luz, tema).</li>
      <li>Hacer <b>miniaturas</b> de composición combinando elementos de varios apuntes.</li>
      <li>Realizar <b>estudios</b> detallados de las partes difíciles (figuras, objetos, arquitectura).</li>
      <li>Ejecutar la <b>obra final</b> en un formato mayor, con un material elegido y con tiempo.</li></ol>
      <p>Ligado a esto está la <b>memoria visual</b>: la capacidad de recordar formas, proporciones y colores sin tener el modelo delante. Se entrena con un ejercicio sencillo: observa un objeto 2 minutos, retira el modelo y dibújalo de memoria; luego compara y corrige. Cuanto más dibujes del natural, más rica será la «biblioteca» de formas de tu cabeza, y más fácil será dibujar de imaginación con credibilidad.</p>`,
      svg: B.flujo("De los apuntes a la obra final", ["Recopilar apuntes del tema", "Seleccionar los mejores", "Miniaturas de composición", "Estudios de las partes difíciles", "Obra final en formato mayor"], { t: "Un método de proyecto" }),
    },
    {
      h: "Ética, seguridad y constancia",
      html: `<p>Dibujar en el espacio público exige algunos cuidados:</p>
      <ul><li><b>Respeto a las personas</b>: la imagen de una persona es un dato personal. Dibujar apuntes para uso privado y de estudio no plantea problemas, pero si se va a <b>publicar o vender</b> un retrato reconocible, conviene pedir permiso. A los menores conviene tratarlos con especial cuidado.</li>
      <li><b>Respeto al lugar</b>: no obstruyas el paso, no ensucies, no pintes en superficies o monumentos y recoge todos tus materiales.</li>
      <li><b>Seguridad</b>: elige lugares seguros, protégete del sol y del frío, ten cuidado con tus pertenencias y no te abstraigas de lo que pasa alrededor.</li>
      <li><b>Derechos de autor</b>: tus apuntes son tuyos; si dibujas una obra protegida (un cuadro, un cómic, un logotipo) como práctica, no hay problema, pero no la publiques como propia.</li></ul>
      <p>Por último, la <b>constancia</b>. Los resultados no llegan de golpe sino con práctica regular: unos pocos minutos cada día valen más que sesiones largas y raras. Un reto muy popular es el de <i>«un dibujo al día»</i> durante 30 o 100 días, o el de completar un cuaderno de 100 páginas. Lleva un registro de lo que haces y celebra los pequeños avances: <mark>quien dibuja cada día mejora cada día</mark>, aunque no se note de un día para otro.</p>`,
      svg: B.cajas("Buenas prácticas", [["Respeto", "personas y lugar"], ["Seguridad", "sol, frío, pertenencias"], ["Autoría", "tuyo y de otros"], ["Constancia", "cada día un poco"]], { t: "Dibujar con cabeza" }),
    },
  ],
  figura: {
    titulo: "El apunte del natural",
    items: [["Apuntar", "1 · 5 · 20 min", "gesto, esquema", "y estudio"], ["Cuaderno", "A5 + 2B", "fecha, lugar", "y notas"], ["Motivo", "visor", "centro de interés", "y miniatura"], ["Hábito", "cada día", "ética y", "constancia"]],
  },
  video: { id: "tRq2jnnXJBQ", titulo: "Técnica de dibujo en 5 pasos: dibujo urbano", canal: "Juan Linares", vistas: 49570 },
  quiz: [
    ["El apunte se caracteriza por ser…", ["un dibujo muy acabado", "un dibujo rápido tomado del natural para registrar lo que se ve", "un dibujo técnico", "una copia de una foto"], 1, "Es breve y sin pretensiones de acabado."],
    ["El boceto es…", ["un dibujo preparatorio de una obra futura", "un dibujo terminado", "una fotografía", "un calco"], 0, "Explora ideas y composiciones."],
    ["Un estudio es…", ["un dibujo cuidadoso de una parte concreta para resolver un problema", "un dibujo de memoria", "un apunte de 30 s", "una obra final"], 0, "Por ejemplo, una mano o un pliegue."],
    ["Dibujar del natural se prefiere porque…", ["es más fácil", "ofrece 3D real, luz cambiante y obliga a decidir", "no necesita material", "es más rápido que la foto"], 1, "La foto aplana y lo da todo decidido."],
    ["¿Qué cuaderno es el ideal para salir a dibujar?", ["Uno grande y pesado", "Uno pequeño que siempre lleves contigo", "Un lienzo", "Un papel suelto"], 1, "El mejor cuaderno es el que llevas encima."],
    ["En un apunte de 1 minuto se busca…", ["el detalle", "el gesto y la silueta", "las texturas", "el color"], 1, "Síntesis máxima."],
    ["En un apunte de 5 minutos conviene resolver…", ["solo el contorno", "esquema, encaje y tres valores", "todos los detalles", "el fondo"], 1, "Un nivel intermedio de información."],
    ["La síntesis consiste en…", ["dibujar todo", "saber qué no dibujar", "copiar la foto", "borrar mucho"], 1, "Elegir lo esencial."],
    ["Antes de dibujar en un lugar nuevo hay que…", ["empezar de inmediato", "mirar, caminar y elegir un centro de interés", "sacar fotos", "dibujar el fondo"], 1, "Se busca el motivo y el encuadre."],
    ["Un visor sirve para…", ["borrar", "elegir y comprobar el encuadre", "sombrear", "medir ángulos"], 1, "Se usa un marco de cartón o los dedos."],
    ["El urban sketching nació en…", ["1807", "2007", "1950", "1987"], 1, "Lo fundó Gabi Campanario en Seattle."],
    ["Un principio del dibujo urbano es…", ["dibujar de fotos", "dibujar en el lugar y ser veraz", "no compartir", "dibujar solo monumentos"], 1, "Se dibuja desde la experiencia directa."],
    ["La línea del horizonte está…", ["siempre en el centro", "a la altura de los ojos del observador", "arriba del papel", "debajo de los pies"], 1, "Si estás sentado, está baja."],
    ["Las verticales en un dibujo de edificios…", ["siempre convergen", "se mantienen verticales por lo general", "se curvan", "desaparecen"], 1, "En la perspectiva intuitiva se mantienen verticales."],
    ["Para personas que se mueven conviene…", ["dibujar cada detalle", "memorizar una pose y dibujar con línea de acción", "esperar a que paren", "fotografiarlas"], 1, "Si se van, se pasa a otra."],
    ["La memoria visual se entrena…", ["con fotos", "mirando un objeto, retirándolo y dibujándolo de memoria", "no se entrena", "copiando"], 1, "Se compara luego con el modelo."],
    ["En el cuaderno conviene anotar…", ["solo el título", "fecha, lugar, condiciones y notas de color", "nada", "solo precios"], 1, "Convierte el apunte en documento."],
    ["Si vas a publicar un retrato reconocible de un desconocido…", ["no importa", "conviene pedir permiso", "se firma con otro nombre", "se borra la cara"], 1, "La imagen personal es un dato personal."],
    ["Un buen hábito es…", ["dibujar mucho un día y nada el resto", "dibujar un poco cada día", "dibujar solo en vacaciones", "no usar cuaderno"], 1, "La constancia gana a la intensidad."],
    ["Los apuntes sirven de materia prima para…", ["nada", "bocetos, estudios y obras posteriores", "solo exámenes", "carteles"], 1, "Casi todo gran cuadro parte de apuntes."],
  ],
  examen: [
    ["Dibujas una plaza y el sol te da de frente en el papel. ¿Qué haces?", ["Sigues igual", "Buscas sombra para que el blanco no deslumbre", "Cierras el cuaderno", "Cambias de papel"], 1, "El brillo del blanco impide leer los valores."],
    ["Tienes 3 minutos para dibujar a una persona que lee. ¿Qué priorizas?", ["Las pestañas", "La pose, línea de acción y masas", "El fondo entero", "Los botones"], 1, "Se prioriza la síntesis."],
    ["Un edificio se ve desde un punto de vista bajo. El horizonte estará…", ["bajo", "alto", "en el centro del papel siempre", "fuera"], 0, "La línea de horizonte está a la altura de los ojos."],
    ["Para recordar el color de un atardecer sin pintar, anotas…", ["nada", "«naranja cálido y violeta» sobre cada zona", "el precio de las pinturas", "tu edad"], 1, "Las notas de color ayudan a colorear después."],
    ["¿Cuál es el mejor formato de entrenamiento?", ["Una pieza de 3 horas al mes", "Apuntes cortos y frecuentes con cronómetro", "Solo copiar fotos", "Solo bocetos sin ver"], 1, "Lo frecuente y breve aprende más rápido."],
    ["Al dibujar un árbol en 20 minutos, el detalle va en…", ["todas las hojas", "el centro de interés, con masas simples en el resto", "el fondo", "la sombra solo"], 1, "Se adapta la densidad de información."],
    ["Un estudiante dibuja una calle y todas las ventanas por igual. El problema es…", ["falta de síntesis", "exceso de sombras", "falta de lápiz", "falta de papel"], 0, "Hay que sugerir el ritmo, no dibujar cada ventana."],
    ["El dibujo del natural se complementa con fotos para…", ["copiarlas por completo", "recordar un color o detalle puntual", "no dibujar", "decidir el encuadre por ti"], 1, "La foto es un apoyo, no un sustituto."],
  ],
  feynman: ["La diferencia entre apunte, boceto, estudio y obra", "Cómo se organiza un apunte de 1, 5 y 20 minutos", "Cómo se elige el motivo y el encuadre en un lugar", "Cómo se usa el cuaderno y qué hábitos conviene tener"],
  mapa: ["EL APUNTE Y EL DIBUJO DEL NATURAL", [["Tipos", "apunte · boceto · estudio · obra"], ["Cuaderno", "A5 · 2B · fecha y notas"], ["Motivo", "visor · tercios · síntesis"], ["Hábito", "1-5-20 min · ética · constancia"]]],
  tarjetas: [
    ["Apunte", "Dibujo rápido del natural para registrar lo que se ve."],
    ["Boceto", "Dibujo preparatorio de una obra futura."],
    ["Estudio", "Dibujo cuidado de una parte concreta."],
    ["Dibujar del natural", "Hacerlo con el modelo real delante: 3D, luz cambiante y decisión."],
    ["Síntesis", "Saber qué no dibujar y quedarse con lo esencial."],
    ["Apunte de 1, 5 y 20 minutos", "Gesto, esquema con tres valores y estudio con detalle."],
    ["Visor", "Marco para elegir el encuadre."],
    ["Urban sketching", "Movimiento de dibujo del natural en ciudades, nacido en 2007."],
    ["Línea del horizonte", "Siempre a la altura de los ojos del observador."],
    ["Perspectiva intuitiva", "Horizonte, fuga de paralelas y verticales verticales."],
    ["Memoria visual", "Capacidad de recordar formas sin el modelo."],
    ["Notas del cuaderno", "Fecha, lugar, luz, color y reflexión."],
  ],
  ejemplos: [
    ["Planifica una salida de 90 minutos para dibujar una plaza.", ["10 min: pasear, elegir motivo, visor y miniaturas.", "30 min: tres apuntes de 5 minutos de rincones distintos.", "40 min: un apunte de 20 minutos del mejor motivo con notas de color; 10 min: revisión y anotaciones."], "Salida con observación, apuntes cortos, un estudio y revisión."],
    ["Un apunte de 5 minutos de una fachada: ordena los pasos.", ["Horizonte y caja general del edificio (1 min).", "Huecos y ritmo de ventanas con trazos simples (1,5 min).", "Tres valores: tejado, sombras de balcones y fachada (2 min); nota de color (30 s)."], "Fachada con caja, ritmo de huecos y tres valores."],
    ["Cómo dibujar a un grupo de personas sentadas en una terraza sin que se muevan demasiado.", ["Observar 30 segundos y elegir tres figuras.", "Silueta ovalada con línea de acción y cabeza.", "Dejar sin cara o con rasgos mínimos y fijar el grupo con sombra."], "Grupo en siluetas con pocas formas y centro de interés."],
    ["Plantea un reto de 30 días «un objeto al día». ¿Qué pautas y cómo lo evalúas?", ["Un objeto distinto cada día, 10-15 minutos, con lápiz o tinta.", "Anotar fecha, objeto y una observación.", "Evaluar a la semana 2 y a la semana 4 comparando proporción y valores."], "30 objetos y una comparación de progreso."],
    ["Un dibujante nota que el sol baja y las sombras cambian. ¿Cómo evita que el dibujo se descomponga?", ["En los primeros 5 minutos marca la forma de las sombras principales.", "Mantiene esa decisión sin modificar el esquema.", "Fotografía la escena para consultar un detalle si es necesario."], "Esquema de sombras fijado al principio."],
    ["Pasa de tres apuntes de una calle a una obra final en formato A3.", ["Selecciona el apunte con mejor composición.", "Combina la figura de otro apunte y un detalle de un tercero en una miniatura.", "Haz un estudio de las figuras y la obra final con el material elegido."], "Obra final planificada a partir de tres apuntes."],
  ],
  errores: [
    "Querer terminar cada apunte y no pasar a otro cuando se acaba el tiempo.",
    "Dibujar todas las ventanas, hojas o ladrillos en lugar de sugerir el ritmo.",
    "Arrancar páginas del cuaderno por vergüenza a los errores.",
    "Depender de la foto y dejar de mirar el motivo real.",
    "Sentarse con el sol de frente sobre el papel y perder la lectura de los valores.",
    "Dibujar a personas reconocibles para publicarlas sin su permiso.",
  ],
  ejercicios: {
    b: [
      ["Diferencia apunte y boceto.", "El apunte registra lo que se ve en el momento; el boceto prepara una obra futura."],
      ["¿Qué es un estudio?", "Un dibujo cuidado de una parte concreta para resolver un problema."],
      ["Cita dos ventajas de dibujar del natural.", "Tres dimensiones reales, luz cambiante, atención plena y obligación de decidir y sintetizar."],
      ["Enumera el material mínimo para salir a dibujar.", "Cuaderno A5, lápiz 2B o bolígrafo fino, goma y sacapuntas; opcionalmente, acuarela de viaje o lápices de color."],
      ["¿Qué se busca en un apunte de un minuto?", "El gesto, la silueta y las proporciones generales."],
      ["¿Qué es la síntesis en el apunte?", "Saber qué no dibujar y conservar lo esencial."],
      ["¿Para qué sirve un visor?", "Para elegir y comprobar el encuadre antes de dibujar."],
      ["¿Qué es el urban sketching?", "Un movimiento de dibujo del natural y en el lugar, sobre todo de ciudades, que comparte los cuadernos."],
      ["¿A qué altura está la línea del horizonte?", "A la altura de los ojos del observador."],
      ["¿Qué debes anotar junto a un apunte?", "Fecha, hora, lugar, condiciones de luz y anotaciones de color."],
      ["¿Qué es la memoria visual?", "La capacidad de recordar formas, proporciones y colores sin el modelo delante."],
      ["Cita una norma de respeto al dibujar en la calle.", "No obstruir el paso, no ensuciar y pedir permiso para publicar retratos reconocibles."],
    ],
    m: [
      ["Tienes 20 minutos para dibujar una calle. Reparte el tiempo.", "3 min mirar y encuadrar; 3 min miniatura y encaje; 4 min esquema y perspectiva; 7 min valores y detalles del centro de interés; 3 min notas y revisión."],
      ["Explica por qué «mejor mal del natural que bien de foto».", "Porque el natural entrena la observación, la decisión y la síntesis; copiar una foto reproduce sus errores y la información aplanada sin desarrollar el ojo."],
      ["¿Por qué conviene un cuaderno pequeño?", "Porque se lleva siempre, se llena rápido y quita presión al resultado; así se dibuja más a menudo."],
      ["Describe cómo situarías el horizonte al dibujar sentado en una terraza.", "Bajo, a la altura de tus ojos sentado; las cabezas de la gente de pie quedan sobre él y las de los sentados casi sobre la línea."],
      ["Un apunte de una persona leyendo se ha movido. ¿Qué haces?", "Mantener el gesto memorizado, completar con la línea de acción y masas, y si cambia, pasar a otra pose sin corregir."],
      ["Explica cómo aplicarías los tres valores en un apunte de 5 minutos de un patio.", "Luz (suelo y paredes iluminadas), medio (muros en penumbra) y sombra (puertas, ventanas y debajo de aleros), con tres tonos de lápiz."],
      ["Diseña un reto de dibujo para una semana de vacaciones con tu cuaderno.", "Un apunte de cada lugar visitado, uno de una comida, otro de un transporte y uno de memoria al volver, con fecha y notas de color."],
      ["¿Qué ventajas tiene dibujar con bolígrafo en el cuaderno?", "Obliga a decidir, no permite borrar, gana seguridad en el trazo y deja ver el proceso."],
      ["¿Cómo preparar un apunte para su coloreado posterior sin pintura?", "Anotar nombres de color en cada zona, marcar la dirección de la luz y señalar valores con números (1-5)."],
      ["Comenta la importancia del centro de interés en un apunte rápido.", "Concentra el detalle en una zona pequeña y deja el resto simple; da jerarquía y evita que el apunte se convierta en un inventario de objetos."],
    ],
    a: [
      ["Diseña un plan de entrenamiento de un mes con apuntes de objetos, figuras y paisaje, y define el criterio de evaluación.", "Semana 1: objetos (10-15 min diarios); semana 2: figuras en gestos y 5 min; semana 3: paisaje urbano en 5 y 20 min; semana 4: proyecto final a partir de apuntes. Evaluación: síntesis, proporción, valores, constancia y reflexión."],
      ["Una compañera quiere publicar en una red social un apunte con un desconocido reconocible. ¿Qué le aconsejas?", "Valorar si es identificable; pedir permiso o simplificar los rasgos; evitar menores; recordar que la imagen es un dato personal y priorizar el respeto."],
      ["Compara la perspectiva intuitiva con la perspectiva cónica formal. Ventajas e inconvenientes en el apunte.", "La intuitiva es rápida, flexible y suficiente en la mayoría de apuntes, pero puede ser imprecisa; la formal es exacta y necesaria para encargos técnicos, pero lenta y poco práctica en un apunte de 5 minutos."],
      ["Analiza el cuaderno de un artista (Goya, Leonardo o Picasso) y extrae tres rasgos que lo hacen valioso.", "Respuesta abierta: libertad, variedad de temas, anotaciones, prueba de ideas y evidencia del proceso mental."],
      ["Elabora una pauta de autoevaluación de un apunte urbano de 20 minutos.", "¿Hay centro de interés? ¿Está bien encajado y proporcionado? ¿Hay tres valores? ¿Hay síntesis? ¿Se ven notas de fecha y color? ¿Qué mejoraría la próxima vez?"],
      ["Plantea cómo transformarías tres apuntes (un mercado, una persona y una fachada) en una obra de formato mayor.", "Seleccionar el apunte de composición, integrar la figura con una miniatura, estudiar la fachada con perspectiva y ejecutar la obra con material elegido, sin copiar los apuntes sino reinterpretándolos."],
      ["Justifica por qué el ejercicio de memoria visual mejora el dibujo de imaginación.", "Obliga a almacenar formas, proporciones y relaciones; cuanto más se dibuja del natural, más completo es el repertorio mental, y ese banco de formas se usa después sin modelo."],
      ["Propón una actividad colectiva de «paseo de dibujo» para tu clase con normas de seguridad y respeto.", "Ruta corta con paradas, apuntes de 5 y 15 minutos, parejas de seguridad, respeto a los viandantes y al espacio y una exposición final con comentarios."],
    ],
  },
  glosario: [
    ["Apunte", "Dibujo rápido del natural para registrar lo que se ve."],
    ["Croquis", "Dibujo esquemático y rápido de un lugar u objeto."],
    ["Boceto", "Dibujo preparatorio de una obra."],
    ["Estudio", "Dibujo detallado de una parte para resolver un problema."],
    ["Natural", "El modelo real, no la foto."],
    ["Síntesis", "Selección y simplificación de lo esencial."],
    ["Visor", "Marco para elegir el encuadre."],
    ["Miniatura", "Boceto pequeño de composición."],
    ["Centro de interés", "Zona que concentra la atención."],
    ["Urban sketching", "Dibujo del natural de escenas urbanas, compartido en comunidad."],
    ["Línea de horizonte", "Línea a la altura de los ojos del observador."],
    ["Punto de fuga", "Punto del horizonte donde convergen las paralelas."],
    ["Lettering", "Rotulación a mano como parte del dibujo."],
    ["Memoria visual", "Capacidad de recordar formas sin el modelo."],
    ["Cuaderno de campo", "Cuaderno de observación y registro de la naturaleza."],
    ["Derechos de imagen", "Derecho de las personas sobre el uso de su imagen."],
  ],
  situacion: {
    titulo: "Un día, una ciudad, un cuaderno",
    reto: "Recorre un barrio o un parque de tu localidad con tu cuaderno y crea un pequeño diario visual de una jornada, con apuntes de distinta duración y una obra final a partir de ellos.",
    pasos: [
      "Planifica una ruta de unos 90 minutos con tres paradas y prepara el material mínimo.",
      "En cada parada, elige centro de interés con visor, haz una miniatura y un apunte de 5 minutos; en una de ellas, uno de 20.",
      "Añade gestos de 1 minuto de personas y objetos, notas de fecha, lugar, luz y color en cada página.",
      "En casa, selecciona tres apuntes y combínalos en una miniatura de composición para una obra final.",
      "Ejecuta la obra en un A3 con el material elegido y escribe una reflexión de media página sobre el proceso.",
    ],
    producto: "Un cuaderno con al menos 8 apuntes anotados, una obra final a partir de ellos y una reflexión escrita.",
    evaluacion: [
      "Los apuntes muestran síntesis, centro de interés y proporciones razonables.",
      "El cuaderno incluye notas de fecha, lugar, luz y color en todas las páginas.",
      "La obra final reinterpreta los apuntes con una composición coherente.",
      "La reflexión identifica aprendizajes concretos y propone mejoras.",
    ],
  },
  familias: [
    "Salid a dibujar juntos al parque o a una terraza, aunque sean diez minutos.",
    "Dejad que lleve su cuaderno en la mochila y preguntadle por los apuntes de cada día.",
    "Respetad que sus apuntes no son «para enseñar»: son un laboratorio. Mostrar lo que quiera.",
    "Haced un reto familiar de «un objeto de casa al día» durante un mes.",
  ],
  saberes: "Dibujo del natural y apunte: apunte, boceto y estudio, el cuaderno de apuntes, síntesis y rapidez, motivo y encuadre en el lugar, dibujo urbano, paisaje, figura y objetos, notas y memoria visual, desarrollo de proyectos y hábitos y ética del dibujo en espacios públicos.",
  ideas: [
    "Organizar un paseo de dibujo de la clase con paradas y tiempos de apunte.",
    "Montar una exposición «Nuestro barrio en cuadernos» con apuntes y obras finales.",
    "Proponer el reto «un dibujo al día» durante un mes con revisión semanal.",
    "Invitar a un urban sketcher local a una sesión práctica.",
  ],
  fuentes: [
    { t: "Urban Sketchers, organización internacional", url: "https://www.urbansketchers.org" },
    { t: "Urban sketching, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Urban_sketching" },
    { t: "Boceto, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Boceto" },
  ],
});
