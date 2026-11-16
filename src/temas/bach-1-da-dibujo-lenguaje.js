// Dibujo Artístico I, 1º de Bachillerato. Tema 1, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L41");
const { marco, t, ln, rc, ci, el, pa, trazo } = B;

// Puntos: tamaño y agrupación crean tono y ritmo.
const puntos = marco("El punto: un solo punto, una nube de puntos y una gradación de puntos",
  `${ci(46, 60, 7, 'fill="var(--ink)"')}${t(46, 100, "un punto", { color: "var(--muted)" })}
  ${Array.from({ length: 40 }, (_, i) => ci(104 + (i % 8) * 8 + ((i * 7) % 5), 40 + Math.floor(i / 8) * 11 + ((i * 3) % 4), 1.8 + (i % 3) * 0.5, 'fill="var(--pen)"')).join("")}${t(136, 106, "una trama", { color: "var(--muted)" })}
  ${Array.from({ length: 70 }, (_, i) => { const col = i % 14, fila = Math.floor(i / 14); return ci(18 + col * 17, 124 + fila * 8, Math.max(0.8, 4.4 - col * 0.3), 'fill="var(--red)"'); }).join("")}${t(130, 174, "más grandes y juntos = más oscuro", { fs: 9.5, color: "var(--muted)", maxW: 200 })}`);

// Figura y fondo: vaso de Rubin.
const figuraFondo = marco("Figura y fondo: un vaso blanco y dos perfiles enfrentados",
  `${rc(40, 24, 180, 120, 'fill="var(--ink)" rx="6"')}${pa("M105 24 Q125 52 108 74 Q96 92 118 110 Q106 124 110 144 H150 Q154 124 142 110 Q164 92 152 74 Q135 52 155 24Z", 'fill="var(--paper)"')}
  ${t(130, 164, "¿vaso o dos perfiles? Fondo y figura se necesitan", { maxW: 230, color: "var(--muted)" })}`);

// Indicios de profundidad.
const profundidad = marco("Indicios de profundidad: superposición, tamaño, altura y convergencia",
  `${ln(10, 96, 250, 96, "var(--muted)", 1.2)}${ln(130, 96, 36, 176, "var(--line)", 1.4)}${ln(130, 96, 224, 176, "var(--line)", 1.4)}
  ${rc(20, 118, 52, 48, 'fill="var(--pen)" fill-opacity=".75" stroke="var(--ink)" stroke-width="1.5"')}${rc(42, 132, 44, 38, 'fill="var(--red)" fill-opacity=".8" stroke="var(--ink)" stroke-width="1.5"')}
  ${rc(150, 80, 14, 14, 'fill="var(--leaf)" stroke="var(--ink)"')}${rc(176, 70, 26, 24, 'fill="var(--leaf)" fill-opacity=".8" stroke="var(--ink)"')}${rc(214, 58, 34, 36, 'fill="var(--leaf)" stroke="var(--ink)"')}
  ${t(60, 30, "se tapa = detrás", { anchor: "middle", bold: 1, maxW: 100 })}${t(60, 44, "superposición", { color: "var(--muted)", maxW: 100 })}${t(196, 30, "grande = cerca", { bold: 1, maxW: 100 })}${t(196, 44, "pequeño = lejos", { color: "var(--muted)", maxW: 100 })}`);

module.exports = B.tema({
  titulo: "El dibujo como lenguaje",
  minutos: 100,
  objetivos: [
    "Explicar qué es dibujar y distinguir el dibujo artístico del técnico y del científico",
    "Identificar las funciones del dibujo: representar, expresar, proyectar y pensar",
    "Reconocer y emplear los elementos básicos del lenguaje visual: punto, línea, plano, forma, textura y valor",
    "Analizar una imagen sencilla y aplicar principios elementales de composición y de representación del espacio",
  ],
  claves: ["dibujo", "lenguaje visual", "punto", "línea", "plano", "forma", "textura", "figura y fondo", "composición", "boceto"],
  pregunta: {
    texto: "Un niño de cuatro años y un arquitecto pueden decir «esta es mi casa» con un lápiz. ¿Por qué entendemos las dos imágenes sin que nadie las traduzca?",
    respuesta: "Porque el dibujo es un <mark>lenguaje visual</mark>: usa signos (puntos, líneas, formas, valores) que combinamos con unas reglas y que cualquiera aprende a leer desde pequeño. Dibujar no es copiar lo que se ve, sino <b>decidir qué se dice</b> y con qué elementos se dice.",
  },
  lectura: {
    titulo: "La mano en la cueva de El Castillo",
    html: `<p>En la cueva de El Castillo, en Cantabria, hay una mano pintada en rojo. Es una de las imágenes más antiguas de Europa: tiene más de cuarenta mil años. Alguien apoyó la palma sobre la roca, sopló pigmento alrededor y retiró la mano. Quedó una huella en negativo, y la huella dice algo muy sencillo: «yo estuve aquí».</p>
    <p>No hay palabras, no hay alfabeto, no hay idioma, y sin embargo la entendemos. Esa es la fuerza del dibujo. Antes de escribir, la humanidad dibujó para cazar mejor, para recordar, para rezar, para contar. Un niño que garabatea su primera casa repite, sin saberlo, el mismo gesto: convierte lo que piensa y siente en señales visibles que otro puede leer.</p>
    <p>En este curso aprenderás a dibujar con intención. No se trata de tener «mano» ni «talento», sino de mirar con atención, elegir bien los elementos y practicar. En este primer tema conocerás el vocabulario básico de ese lenguaje: qué es dibujar, para qué sirve, con qué elementos se construye una imagen y cómo se organizan en el papel.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Qué es dibujar",
      html: `<p><b>Dibujar</b> es representar una idea, un objeto o una emoción mediante <mark>trazos sobre una superficie</mark>. Parece una definición sencilla, pero encierra tres acciones distintas: <b>observar</b> (o imaginar), <b>decidir</b> qué información es importante y <b>ejecutar</b> los trazos con un instrumento. Quien dibuja no copia el mundo: lo traduce a un lenguaje de líneas y manchas en dos dimensiones.</p>
      <p>Esa traducción exige simplificar. Un árbol real tiene millones de hojas; en un dibujo bastan una silueta y unas sombras para que lo reconozcamos. Elegir qué se queda y qué se elimina es la primera decisión artística, y es lo que distingue un dibujo vivo de una fotocopia sin alma.</p>
      <p>Por eso se dice que dibujar es una forma de <b>pensar</b>. Cuando intentas dibujar tu mano descubres que no sabías cuántos pliegues tiene, qué proporción guardan los dedos o cómo se curva la palma. El dibujo obliga a mirar con precisión, y mirar con precisión es aprender.</p>
      <p>Además, dibujar es una <b>habilidad que se entrena</b>, como tocar un instrumento o nadar. La técnica se adquiere con práctica regular y con método, y la sensibilidad crece al mismo tiempo que la técnica.</p>`,
      svg: B.estrella("Dibujar reúne observar, decidir, simplificar, ejecutar y pensar", "DIBUJAR", ["Observar", "Decidir", "Simplificar", "Ejecutar", "Pensar"]),
    },
    {
      h: "Dibujo artístico, técnico y científico",
      html: `<p>No todos los dibujos persiguen lo mismo. Según su finalidad se distinguen tres grandes familias:</p>
      <ul><li><b>Dibujo artístico</b>: busca expresar, interpretar o transmitir una sensación. Admite la libertad personal, la deformación, el énfasis y la ambigüedad. Es el objeto de esta asignatura.</li>
      <li><b>Dibujo técnico</b>: comunica información exacta para fabricar o construir (planos, piezas, circuitos). Se rige por <mark>normas</mark> (UNE, ISO) y no admite interpretaciones: si dos operarios leen el plano, deben construir lo mismo.</li>
      <li><b>Dibujo científico</b>: documenta lo observado con fidelidad (botánica, anatomía, arqueología, geología). Prima la <b>exactitud</b> sobre la expresión, aunque a menudo es de una gran belleza.</li></ul>
      <p>Las fronteras son porosas. Leonardo da Vinci dibujaba anatomía con rigor científico y con una elegancia artística que aún admiramos. Un diseñador industrial empieza con bocetos libres y termina en planos normalizados. Entender para qué dibujas te dice <b>qué reglas</b> debes seguir y cuáles puedes romper.</p>`,
      svg: B.rejilla("Comparación entre dibujo artístico, técnico y científico", ["", "Artístico", "Técnico", "Científico"], [["Fin", "expresar", "construir", "documentar"], ["Reglas", "libres", "normas", "rigor"], ["Lectura", "subjetiva", "única", "objetiva"], ["Ejemplo", "retrato", "plano", "lámina"]], { t: "Tres finalidades" }),
    },
    {
      h: "Un breve viaje por la historia del dibujo",
      html: `<p>El dibujo es anterior a la escritura. Las <b>pinturas rupestres</b> de Altamira o de El Castillo (hace más de 20 000 y hasta 40 000 años) muestran animales con una síntesis sorprendente: con unas pocas líneas de carbón y ocre se sugiere el volumen del bisonte.</p>
      <p>En el Antiguo Egipto el dibujo siguió un <b>canon</b> rígido: cabeza de perfil, ojo de frente, hombros de frente y piernas de perfil. Buscaba claridad y permanencia, no parecido óptico. Grecia y Roma pusieron el acento en la proporción y en el cuerpo ideal. En la Edad Media se dibujó para iluminar manuscritos y para trazar proyectos de catedrales.</p>
      <p>El <b>Renacimiento</b> (siglos XV y XVI) cambió el rumbo: con la perspectiva lineal y el estudio del natural, dibujar pasó a ser una forma de conocimiento. Leonardo, Durero y Miguel Ángel convirtieron el boceto en obra. El papel barato se generalizó y nacieron los cuadernos de estudio y las academias.</p>
      <p>Desde el siglo XIX, con la fotografía liberando al dibujo de la obligación de copiar, los artistas exploraron la expresión: Goya, Van Gogh, Picasso, Kollwitz. Hoy el dibujo convive con las tabletas digitales, pero el gesto de la mano y el cuaderno siguen siendo la base de todo diseñador, ilustrador y arquitecto.</p>`,
      svg: B.flujo("Línea del tiempo del dibujo", ["Prehistoria: carbón y ocre en las cuevas", "Egipto y Grecia: canon y proporción", "Renacimiento: perspectiva y natural", "Siglo XIX: fotografía y libertad", "Hoy: papel y pantalla conviven"], { t: "De la cueva a la tableta" }),
      video: { id: "RtrXP4FjW90", titulo: "¿Qué son las Artes Visuales?", canal: "Juantum XD", vistas: 318261 },
    },
    {
      h: "Para qué sirve dibujar: las cuatro funciones",
      html: `<p>El dibujo cumple funciones que se combinan casi siempre en una misma imagen:</p>
      <ul><li><b>Función representativa</b>: mostrar cómo es algo (un retrato, un paisaje, un mapa).</li>
      <li><b>Función expresiva</b>: comunicar un estado de ánimo o una opinión (una caricatura, un dibujo de Goya sobre la guerra).</li>
      <li><b>Función proyectual</b>: imaginar algo que todavía no existe (el boceto de una silla, el plano de una casa, el <i>storyboard</i> de una película).</li>
      <li><b>Función cognitiva</b>: ayudar a pensar y recordar (un esquema, el cuaderno de campo de un naturalista, el garabato mientras se escucha una charla).</li></ul>
      <p>Un mismo dibujo puede cumplir varias. El apunte de una calle sirve para <i>representar</i> el lugar, para <i>expresar</i> cómo te hizo sentir y para <i>pensar</i> la composición de un cuadro posterior. Cuando empieces un dibujo, pregúntate cuál de estas funciones es la principal, porque eso orienta tus decisiones de técnica, de materiales y de acabado.</p>`,
      svg: B.cajas("Las cuatro funciones del dibujo", [["Representar", "cómo es algo"], ["Expresar", "qué sentimos"], ["Proyectar", "algo que no existe"], ["Pensar", "ideas y memoria"]], { t: "Cuatro usos" }),
    },
    {
      h: "El punto",
      html: `<p>El <b>punto</b> es la marca mínima: lo que deja la punta del lápiz al apoyarse. Tiene fama de insignificante, pero genera <mark>tensión y atención</mark>: un solo punto sobre un papel en blanco se convierte en el centro de la mirada, y dos puntos sugieren ya una distancia y una dirección.</p>
      <p>Muchos puntos juntos producen una <b>trama</b>. Cuanto más grandes y más cercanos están, más oscuro se ve el conjunto. Así funciona el <b>puntillismo</b> y también la impresión de periódicos y las imágenes en pantalla, donde la vista mezcla los puntos y percibe tonos continuos. Georges Seurat construyó cuadros enteros con puntos de color puro.</p>
      <p>En la práctica, el punto sirve para <b>marcar referencias</b> al encajar (extremos, cruces, puntos de paso), para <b>dar textura</b> (arena, piel, hierba) y para <b>modelar</b> volúmenes con degradados de densidad. Si controlas el tamaño y el espaciado de los puntos, controlas el tono.</p>`,
      svg: puntos,
    },
    {
      h: "La línea",
      html: `<p>La <b>línea</b> es una sucesión de puntos o el recorrido de un punto en movimiento. Es el elemento más característico del dibujo, porque con ella se <mark>delimita</mark>, se <mark>separa</mark> y se <mark>sugiere movimiento</mark>. En la naturaleza no existen líneas (existen bordes entre zonas de distinto tono), pero la mente las interpreta de maravilla.</p>
      <p>Según su forma, la línea puede ser <b>recta</b> (orden, firmeza, rigidez), <b>curva</b> (suavidad, ritmo, organicidad), <b>quebrada</b> (nerviosismo, tensión), <b>mixta</b> o <b>espiral</b> (crecimiento, movimiento). Según su dirección: <b>horizontal</b> transmite calma y estabilidad; <b>vertical</b>, altura y solemnidad; <b>oblicua</b>, dinamismo e inestabilidad.</p>
      <p>También cuenta su <b>calidad</b>: grosor, presión, continuidad y velocidad. Una línea fina y uniforme resulta fría y precisa; una línea gruesa que varía de grosor, llamada <i>línea modulada</i>, resulta viva y transmite volumen. La modulación del trazo es una de las cosas que mejor distingue a un dibujante con oficio.</p>`,
      svg: B.lineasMuestra("Tipos de línea: recta, curva, quebrada, mixta y espiral"),
      video: { id: "Xzck4hTMwjA", titulo: "Tipos de líneas, muy fácil para principiantes", canal: "Daniel Carreón", vistas: 1139351 },
    },
    {
      h: "El plano, la forma y la figura-fondo",
      html: `<p>Cuando una línea se cierra, o una mancha de tono se extiende, aparece el <b>plano</b> y con él la <b>forma</b>. Las formas pueden ser <b>geométricas</b> (círculo, cuadrado, triángulo: regulares, precisas, de aire artificial) u <b>orgánicas</b> (irregulares, como una hoja, una nube o un charco: naturales y cambiantes). También pueden ser <b>abiertas</b> o <b>cerradas</b>, según si sus bordes se pueden recorrer del todo.</p>
      <p>Cada forma que dibujamos crea a la vez otra: el espacio que queda alrededor. Es la relación <b>figura-fondo</b>. La figura es lo que la vista destaca; el fondo, lo que se queda en segundo término. Pero ambos se necesitan: el famoso <i>vaso de Rubin</i> muestra que un mismo dibujo puede verse como un vaso blanco o como dos perfiles negros enfrentados.</p>
      <p>Tener presente el fondo mejora mucho los dibujos. A los espacios que quedan entre los objetos los llamamos <b>espacios negativos</b>, y dibujarlos en lugar de dibujar el objeto es un truco clásico para corregir proporciones: nuestro cerebro, que sabe muy bien cómo es una silla, se confunde menos con la forma abstracta que queda entre sus patas.</p>`,
      svg: figuraFondo,
    },
    {
      h: "Textura y valor",
      html: `<p>La <b>textura</b> es el aspecto de una superficie: lisa, rugosa, blanda, áspera. Puede ser <b>táctil</b> (la que se nota con la mano, como el relieve de un cartón o un óleo con empastes) o <b>visual</b> (la que se imita con trazos, aunque el papel esté liso). Dibujar una corteza, una tela o la piel es crear <mark>patrones de marcas</mark> que el espectador reconoce.</p>
      <p>Para la textura visual se combinan trazos cortos, cruzados, puntos, manchas y borrados. No hace falta dibujar cada hoja: basta con una <i>sugerencia</i> bien ritmada de hojas en la zona de luz y masa oscura en la sombra.</p>
      <p>El <b>valor</b> es la mayor o menor claridad de una zona, del blanco al negro pasando por los grises. Es el elemento que más contribuye a que un dibujo parezca <b>tener volumen y profundidad</b>. Una escala de valores de unos ocho o nueve pasos es la herramienta de trabajo habitual en el aula. Más adelante, en el tema del claroscuro, aprenderás a usarla con método.</p>`,
      svg: B.escala("Escala de valores de ocho tonos", 8, "Una escala de valores"),
    },
    {
      h: "Mirar antes de dibujar",
      html: `<p>El gran obstáculo para dibujar bien no es la mano: es el <b>cerebro</b>. Cuando miramos un objeto lo identificamos enseguida («es una silla», «es un ojo») y dibujamos lo que sabemos de él, no lo que vemos. Dibujamos símbolos aprendidos: el ojo almendrado con pestañas, la casa con tejado triangular, la nariz en forma de ele.</p>
      <p>La educadora Betty Edwards popularizó la idea de que hay que pasar del <b>modo verbal y simbólico</b> («esto es un ojo») al <b>modo visual y perceptivo</b> («esto es una mancha oscura con una curva clara encima»). Los ejercicios clásicos para lograrlo son dibujar <mark>sin mirar el papel</mark> (dibujo de contorno ciego), dibujar un objeto <b>al revés</b> y dibujar <b>espacios negativos</b>.</p>
      <p>Otros hábitos útiles: entornar los ojos para ver los valores sin detalle, medir proporciones con el lápiz a brazo extendido y comparar siempre una parte con las demás. Mirar de verdad significa <b>comparar constantemente</b>: «esto es dos veces más largo que aquello», «esta línea es más inclinada que la otra».</p>`,
      svg: B.comparar("Dibujar lo que se sabe frente a dibujar lo que se ve", ["Lo que sé", ["ojo almendrado", "casa con triángulo", "cara plana", "símbolos"]], ["Lo que veo", ["manchas y formas", "inclinaciones reales", "luces y sombras", "relaciones"]]),
      video: { id: "azf4z_hQW3U", titulo: "Elemento del lenguaje visual: la línea", canal: "90 minutos de arte", vistas: 98546 },
    },
    {
      h: "Composición básica",
      html: `<p><b>Componer</b> es decidir dónde va cada elemento dentro del formato para que la imagen se lea con claridad y tenga intención. Una buena composición guía la mirada del espectador: primero a lo principal, luego a lo secundario y finalmente fuera, o de vuelta al principio.</p>
      <p>Algunos recursos fundamentales: el <b>equilibrio</b> (simétrico, con los pesos repartidos por igual, o asimétrico, con pesos compensados por posición y tono), el <b>ritmo</b> (repetición de formas o intervalos), la <b>jerarquía</b> (un elemento domina y los demás lo apoyan), el <b>contraste</b> (de tamaño, valor o forma que atrae la mirada) y la <b>unidad</b> (todo parece pertenecer al mismo conjunto).</p>
      <p>Una guía muy extendida es la <b>regla de los tercios</b>: se divide el formato con dos líneas verticales y dos horizontales y se colocan los elementos importantes sobre las líneas o en sus cuatro cruces. Centrar siempre el motivo suele dar imágenes estáticas; descentrarlo un poco crea tensión y movimiento. Es una guía, no una ley: los grandes artistas la rompen cuando tienen un motivo.</p>`,
      svg: B.tercios("Regla de los tercios con sus cuatro puntos fuertes"),
    },
    {
      h: "Representar el espacio en el papel",
      html: `<p>El papel es plano, pero el mundo tiene tres dimensiones. Para sugerir profundidad usamos <b>indicios</b> que el cerebro interpreta automáticamente:</p>
      <ul><li><b>Superposición</b>: lo que tapa a otro objeto se ve más cerca.</li>
      <li><b>Tamaño</b>: objetos iguales parecen menores cuanto más lejos están.</li>
      <li><b>Altura en el plano</b>: lo que está más arriba del papel (bajo la línea de horizonte) parece más lejano.</li>
      <li><b>Perspectiva</b>: las líneas paralelas convergen hacia un punto del horizonte.</li>
      <li><b>Perspectiva atmosférica</b>: lo lejano se ve más claro, más azulado y con menos contraste.</li>
      <li><b>Gradiente de textura</b>: las texturas se hacen más pequeñas y densas con la distancia.</li></ul>
      <p>Combinar varios indicios produce un efecto convincente. Nota que ninguno exige técnica sofisticada: un dibujo muy sencillo con una montaña pequeña, más clara y tapada por otra mayor ya <i>parece</i> profundo. En los temas siguientes ampliarás el repertorio con el encaje, la proporción y el claroscuro.</p>`,
      svg: profundidad,
    },
    {
      h: "El proceso de trabajo y el cuaderno de bocetos",
      html: `<p>Un dibujo no se hace de golpe. Los dibujantes experimentados siguen un <b>proceso</b>: observan y pueden hacer <b>miniaturas</b> (pequeños bocetos de composición), <b>encajan</b> con trazos suaves, <b>construyen</b> las formas generales, <b>valoran</b> con luces y sombras y, solo al final, <b>concretan</b> el detalle. Al terminar, se aleja uno del dibujo (o lo mira en el espejo) para detectar errores.</p>
      <p>El <b>cuaderno de bocetos</b> es la herramienta de entrenamiento por excelencia. En él no se busca la perfección: se prueba, se falla, se repite. Conviene fechar cada página, escribir notas (qué material, cuánto tiempo, qué se aprendió) y llenar el cuaderno con regularidad: <mark>quince minutos diarios</mark> valen más que cinco horas un día suelto al mes.</p>
      <p>Una actitud importante es <b>no borrar compulsivamente</b>: las líneas de construcción forman parte del dibujo, y borrar a cada paso destruye el papel y la frescura. Mejor corregir encima y quedarse con la línea que mejor funciona.</p>`,
      svg: B.ciclo("Proceso de dibujo: observar, encajar, construir, valorar y revisar", "Proceso", ["Observar", "Encajar", "Construir", "Valorar", "Revisar"]),
      video: { id: "djdoB2YavIg", titulo: "Entiende la composición visual", canal: "Gartzia Artz", vistas: 186945 },
    },
  ],
  figura: {
    titulo: "Los elementos del lenguaje visual",
    items: [["Punto", "·", "marca mínima", "tono y trama"], ["Línea", "—", "contorno y gesto", "dirección y ritmo"], ["Plano y forma", "▲ ●", "figura y fondo", "geométrica u orgánica"], ["Valor y textura", "▒", "luz y sombra", "superficie"]],
  },
  video: { id: "RtrXP4FjW90", titulo: "¿Qué son las Artes Visuales?", canal: "Juantum XD", vistas: 318261 },
  quiz: [
    ["¿Qué es dibujar según este tema?", ["Copiar la realidad con exactitud", "Representar una idea o realidad mediante trazos eligiendo qué decir", "Colorear formas dadas", "Usar solo lápiz y papel"], 1, "Dibujar implica observar, decidir y ejecutar; no es una copia mecánica sino una traducción."],
    ["¿Cuál de estos dibujos se rige por normas estrictas (UNE, ISO)?", ["El artístico", "El caricaturesco", "El técnico", "El de apunte"], 2, "El dibujo técnico comunica información exacta y se normaliza."],
    ["El dibujo científico prioriza sobre todo…", ["la expresividad", "la exactitud", "el color", "la rapidez"], 1, "Documenta lo observado con fidelidad, aunque pueda ser bello."],
    ["¿Qué civilización siguió un canon rígido con cabeza de perfil y ojo de frente?", ["La griega", "La egipcia", "La romana", "La renacentista"], 1, "El canon egipcio buscaba claridad y permanencia."],
    ["El Renacimiento aportó al dibujo principalmente…", ["la perspectiva lineal y el estudio del natural", "el uso del color acrílico", "la fotografía", "el boceto digital"], 0, "Con Leonardo, Durero o Miguel Ángel, el dibujo se convirtió en conocimiento."],
    ["Un boceto previo a un edificio cumple la función…", ["cognitiva únicamente", "proyectual", "decorativa", "científica"], 1, "Imagina algo que todavía no existe: es la función proyectual."],
    ["Un conjunto de puntos más grandes y juntos produce una zona…", ["más clara", "más oscura", "sin tono", "de color distinto"], 1, "Cuanto mayor y más densa es la trama, más oscuro se percibe el tono."],
    ["Una línea horizontal transmite habitualmente…", ["dinamismo e inestabilidad", "calma y estabilidad", "tensión nerviosa", "altura solemne"], 1, "La horizontal sugiere reposo; la oblicua, movimiento."],
    ["La línea modulada es la que…", ["siempre mantiene el mismo grosor", "varía de grosor y presión", "solo es recta", "no se puede borrar"], 1, "Variar la presión da vida y sensación de volumen."],
    ["En el vaso de Rubin, la relación que se pone de manifiesto es…", ["luz y sombra", "figura y fondo", "color y valor", "punto y línea"], 1, "Figura y fondo se necesitan mutuamente."],
    ["Los espacios negativos son…", ["las zonas más oscuras", "los espacios entre y alrededor de los objetos", "los bordes borrados", "los errores del dibujo"], 1, "Dibujarlos ayuda a corregir las proporciones."],
    ["La textura visual se consigue…", ["usando papel rugoso", "imitándola con trazos, puntos o manchas", "pegando materiales", "con relieve real"], 1, "La textura visual se simula; la táctil se nota con la mano."],
    ["El valor de una zona es…", ["su tono de color", "su grado de claridad u oscuridad", "su precio", "su textura"], 1, "El valor va del blanco al negro."],
    ["¿Cuál de estos ejercicios ayuda a pasar al modo visual de percepción?", ["Copiar de memoria", "Dibujar al revés o contornos sin mirar el papel", "Usar regla", "Calcar"], 1, "Evitan que el cerebro dibuje símbolos en lugar de lo que ve."],
    ["¿Qué es la regla de los tercios?", ["Dividir el formato en tres partes iguales con líneas y usar los cruces", "Usar tres colores", "Dibujar en tres pasos", "Dibujar con tres lápices"], 0, "Los cuatro cruces son puntos fuertes de la composición."],
    ["Centrar siempre el motivo suele producir imágenes…", ["más dinámicas", "más estáticas", "más oscuras", "más rápidas"], 1, "Descentrar un poco crea tensión y movimiento."],
    ["Cuál NO es un indicio de profundidad:", ["superposición", "perspectiva atmosférica", "tamaño relativo", "grosor del papel"], 3, "El grosor del papel no sugiere distancia en la imagen."],
    ["Según la perspectiva atmosférica, lo lejano se ve…", ["más claro y azulado, con menos contraste", "más oscuro y rojizo", "más grande", "más nítido"], 0, "El aire interpuesto suaviza contraste y detalle."],
    ["Un hábito recomendable del cuaderno de bocetos es…", ["usarlo solo para dibujos perfectos", "dibujar con regularidad y anotar lo aprendido", "arrancar las páginas fallidas", "hacerlo una vez al mes"], 1, "La constancia diaria vale más que sesiones largas y esporádicas."],
    ["En el proceso de trabajo, el detalle se concreta…", ["al principio", "justo después de la miniatura", "al final", "nunca"], 2, "Primero encaje, construcción y valoración; el detalle al final."],
  ],
  examen: [
    ["Un ilustrador científico dibuja una flor para un herbario. Su prioridad es…", ["la expresividad", "la exactitud en la observación", "la rapidez", "el color llamativo"], 1, "El dibujo científico documenta con fidelidad."],
    ["Una línea quebrada, vibrante y gruesa sugiere más bien…", ["calma", "tensión y nerviosismo", "suavidad", "silencio"], 1, "La quebrada transmite agitación; la curva, suavidad."],
    ["¿Qué función cumple un storyboard?", ["Cognitiva", "Representativa", "Proyectual", "Decorativa"], 2, "Ordena una película que aún no se ha rodado."],
    ["Un trozo de montaña que se superpone a otro nos indica que…", ["es más antiguo", "está más cerca", "está más lejos", "es más oscuro"], 1, "Lo que tapa se percibe delante."],
    ["En la regla de los tercios, los puntos fuertes son…", ["los cuatro vértices del formato", "los cuatro cruces de las líneas de tercios", "el centro", "los lados"], 1, "Se colocan allí los elementos principales."],
    ["¿Cuál de las siguientes técnicas ayuda a corregir proporciones?", ["Dibujar con muchos colores", "Dibujar los espacios negativos", "Borrar con goma", "Usar papel grueso"], 1, "El espacio entre objetos es una forma abstracta, que se compara mejor."],
    ["Entornar los ojos al mirar un modelo sirve para…", ["ver mejor el detalle", "percibir los valores sin detalle", "ver más color", "descansar"], 1, "Simplifica la imagen en masas de luz y sombra."],
    ["El puntillismo consiste en…", ["dibujar con líneas continuas", "construir tonos y colores con muchos puntos", "dibujar sin mirar", "usar plantillas"], 1, "Seurat y Signac lo cultivaron con puntos de color."],
  ],
  feynman: ["Qué es dibujar y por qué no es lo mismo que copiar", "Para qué sirve el dibujo: las cuatro funciones", "Cómo se construye una imagen con punto, línea, plano, textura y valor", "Cómo se sugiere profundidad en una hoja plana"],
  mapa: ["EL DIBUJO COMO LENGUAJE", [["Qué es", "observar · decidir · ejecutar"], ["Elementos", "punto · línea · forma · valor"], ["Composición", "equilibrio · tercios · jerarquía"], ["Espacio", "superposición · tamaño · perspectiva"]]],
  tarjetas: [
    ["Dibujar", "Representar ideas o realidades con trazos, decidiendo qué se dice y cómo."],
    ["Dibujo artístico, técnico y científico", "Expresar, construir con normas y documentar con exactitud, respectivamente."],
    ["Cuatro funciones del dibujo", "Representar, expresar, proyectar y pensar."],
    ["Punto", "Marca mínima; muchos puntos forman tramas y tonos."],
    ["Línea modulada", "La que varía de grosor y presión; da viveza y volumen."],
    ["Figura y fondo", "La figura destaca y el fondo la rodea; ambos se necesitan."],
    ["Espacio negativo", "El que queda alrededor y entre los objetos."],
    ["Textura táctil y visual", "La que se toca y la que se imita con trazos."],
    ["Valor", "Grado de claridad de una zona, del blanco al negro."],
    ["Regla de los tercios", "Dividir el formato en tercios y colocar lo importante en los cruces."],
    ["Indicios de profundidad", "Superposición, tamaño, altura, perspectiva y atmósfera."],
    ["Cuaderno de bocetos", "Herramienta de práctica diaria: probar, fallar, anotar y repetir."],
  ],
  ejemplos: [
    ["Clasifica el tipo de dibujo: (a) plano de una pieza con cotas, (b) lámina de una mariposa para un museo, (c) retrato expresionista de tu abuela.", ["(a) comunica medidas exactas para fabricar: técnico.", "(b) documenta con fidelidad: científico.", "(c) busca expresar, con libertad: artístico."], "(a) técnico; (b) científico; (c) artístico."],
    ["Describe cómo representarías profundidad en un paisaje con tres colinas usando solo tres indicios.", ["Superposición: la colina de delante tapa parte de la segunda y esta de la tercera.", "Valor y color: la más lejana, más clara y azulada (perspectiva atmosférica).", "Tamaño y altura: los árboles se hacen más pequeños y el borde de las colinas más alto cuanto más lejos."], "Tres colinas escalonadas, tapándose entre sí, con tono cada vez más claro hacia el fondo."],
    ["Un dibujo tiene el motivo principal exactamente en el centro y se ve estático. ¿Cómo lo corregirías?", ["Aplica la regla de los tercios: desplaza el motivo a un punto fuerte.", "Equilibra el peso visual con un elemento menor en el lado opuesto.", "Si hace falta, recorta o amplía el formato."], "Motivo en un cruce de tercios, compensado por un elemento pequeño al lado contrario: más dinámico."],
    ["¿Qué ejercicio usarías para dejar de dibujar «un ojo de símbolo» y dibujar el ojo que ves?", ["Dibujar la foto del ojo girada 180 grados.", "Concentrarse en manchas de valor y en curvas, no en «ojo».", "Dibujar también los espacios negativos alrededor."], "Al invertir la imagen el cerebro no reconoce el ojo y dibuja formas reales."],
    ["Explica cómo conseguir una zona gris media con puntos.", ["Elige puntos de tamaño medio.", "Sepáralos una distancia aproximadamente igual a su diámetro.", "Compara con tu escala y ajusta: más juntos si es más oscuro, más separados si es más claro."], "Una trama regular de puntos medianos separados un diámetro da un gris medio."],
    ["Planifica una sesión de 20 minutos de cuaderno de bocetos sobre una taza.", ["2 min: mirar y elegir encuadre; 3 min: tres miniaturas.", "8 min: dibujo de la mejor composición con encaje y valores.", "5 min: textura y detalles; 2 min: anotar fecha, material y qué mejorar."], "Sesión con observación, composición, ejecución y nota de revisión."],
  ],
  errores: [
    "Creer que dibujar bien es cuestión de talento y no de observación y práctica.",
    "Dibujar símbolos aprendidos (ojos almendrados, casas con triángulo) en lugar de lo que realmente se ve.",
    "Empezar por el detalle sin haber encajado la forma general.",
    "Borrar sin parar: se ensucia el papel y se pierde la frescura del trazo.",
    "Confundir la línea con un borde real: en la naturaleza solo hay cambios de tono y de plano.",
    "Centrarlo todo en el formato y olvidar el fondo y los espacios negativos.",
  ],
  ejercicios: {
    b: [
      ["Define con tus palabras qué es dibujar.", "Representar una idea, objeto o emoción mediante trazos sobre una superficie, decidiendo qué información se muestra y simplificando lo observado."],
      ["Cita las tres familias de dibujo según su finalidad.", "Artístico (expresar), técnico (construir con normas) y científico (documentar con exactitud)."],
      ["Enumera las cuatro funciones del dibujo.", "Representativa, expresiva, proyectual y cognitiva."],
      ["Di qué función predomina en: un mapa, una caricatura, el boceto de una silla, un cuaderno de campo.", "Mapa: representativa; caricatura: expresiva; boceto de silla: proyectual; cuaderno de campo: cognitiva (y representativa)."],
      ["¿Qué es un punto en dibujo y para qué se usa?", "La marca mínima. Sirve para marcar referencias, crear texturas y modelar tonos mediante tramas."],
      ["Nombra cinco tipos de línea según su forma.", "Recta, curva, quebrada, mixta y espiral."],
      ["¿Qué transmite una línea horizontal, una vertical y una oblicua?", "Horizontal: calma y estabilidad; vertical: altura y solemnidad; oblicua: dinamismo e inestabilidad."],
      ["¿Qué diferencia hay entre forma geométrica y orgánica? Pon dos ejemplos de cada una.", "La geométrica es regular y precisa (círculo, cuadrado); la orgánica es irregular y natural (hoja, nube)."],
      ["Explica qué es la figura y el fondo.", "La figura es lo que destaca; el fondo, lo que la rodea. Se necesitan mutuamente para que se lea la imagen."],
      ["¿Qué es el valor en un dibujo?", "El grado de claridad u oscuridad de una zona, del blanco al negro pasando por los grises."],
      ["Cita tres indicios de profundidad.", "Superposición, tamaño decreciente, altura en el plano, perspectiva, perspectiva atmosférica o gradiente de textura (tres cualesquiera)."],
      ["Indica dos hábitos útiles del cuaderno de bocetos.", "Dibujar con regularidad (por ejemplo quince minutos diarios) y anotar fecha, material y qué se ha aprendido; no buscar la perfección."],
    ],
    m: [
      ["Un arquitecto dibuja primero a mano alzada y luego con CAD. ¿Qué tipo de dibujo es cada uno y por qué?", "El boceto a mano es artístico-proyectual: busca ideas con libertad. El CAD es técnico: está normalizado, con medidas exactas para construir."],
      ["Explica por qué el dibujo es una forma de pensar.", "Porque obliga a observar con precisión, a decidir qué es importante y a descubrir lo que no se sabe (proporciones, pliegues, relaciones). Quien dibuja una cosa la comprende mejor."],
      ["¿En qué se diferencia una línea fina uniforme de una modulada? Di qué efecto da cada una.", "La fina y uniforme es fría y precisa; la modulada varía de grosor y presión, resulta viva y sugiere volumen y profundidad."],
      ["Dibuja (describe) cómo sugerirías el volumen de una esfera solo con puntos.", "Puntos muy separados en la zona de luz y cada vez más juntos y grandes hacia la sombra propia, dejando algo menos de densidad en el reflejo."],
      ["Describe qué ocurre con el vaso de Rubin y por qué sirve para entender figura y fondo.", "Se ve un vaso blanco o dos perfiles negros según se tome el blanco o el negro como figura. Demuestra que fondo y figura se definen mutuamente."],
      ["Se te pide dibujar una silla y te salen las patas torcidas. Propón una estrategia con espacios negativos.", "Dibujar las formas del aire entre las patas y bajo el asiento: al ser formas abstractas se comparan mejor que las patas, y el contorno de la silla surge solo."],
      ["Propón una composición asimétrica pero equilibrada con un árbol grande y una casita.", "Árbol grande, oscuro, en un punto fuerte de un lado; casita pequeña, clara y con ventana encendida, alejada hacia el otro lado: el contraste y la distancia compensan el menor tamaño."],
      ["Indica qué indicios de profundidad aparecen en un camino que se estrecha hacia una colina azulada.", "Perspectiva lineal (convergencia), tamaño decreciente, altura en el plano, perspectiva atmosférica (colina clara y azulada) y gradiente de textura."],
      ["¿Por qué conviene entornar los ojos para valorar un modelo? ¿Qué se gana?", "Se pierde el detalle y se ven masas de valor; se simplifica el contraste y se decide mejor qué zonas son claras, medias y oscuras."],
      ["Un compañero dibuja siempre ojos «almendrados». ¿Qué le recomiendas?", "Copiar un ojo de modelo girado al revés o dibujar el contorno ciego para romper el símbolo, observando formas reales, manchas y el espacio negativo."],
    ],
    a: [
      ["Compara el canon egipcio con el sistema de perspectiva del Renacimiento. ¿Qué buscaba cada uno?", "El egipcio buscaba claridad conceptual y permanencia mostrando cada parte desde su ángulo más reconocible. El renacentista buscaba la apariencia óptica del espacio mediante la perspectiva lineal y el estudio del natural."],
      ["¿Por qué la fotografía liberó al dibujo en el siglo XIX? Argumenta con un ejemplo.", "Porque el dibujo dejó de ser el único medio de registrar fielmente la realidad. Los artistas pudieron explorar la expresión (Van Gogh deforma y exagera la pincelada) en lugar de limitarse a copiar."],
      ["Diseña tres miniaturas de composición para el retrato de una persona que lee y justifica la mejor.", "A: figura centrada (estática). B: figura en el tercio izquierdo mirando hacia el espacio vacío (dinámica y con aire). C: primer plano recortado de manos y libro. Se justifica la B por equilibrio y dirección de la mirada."],
      ["Un dibujo tiene todos los valores en grises medios. ¿Qué le ocurre y cómo se corrige?", "Se ve plano y sin profundidad. Se corrige ampliando la escala: añadir sombras profundas y luces claras, con un punto de máximo contraste en el centro de interés."],
      ["Analiza un cartel que uses a diario (una etiqueta, un póster) como lenguaje visual: identifica punto, línea, plano, valor y jerarquía.", "Respuesta abierta; debe identificar elementos concretos: por ejemplo, el titular domina por tamaño y contraste (jerarquía), la franja inferior es un plano, los iconos funcionan como puntos, etc."],
      ["Dibuja (describe) un objeto con tres texturas distintas (madera, tela, metal) usando solo lápiz.", "Madera: líneas largas sinuosas y nudos; tela: trazos cruzados suaves y pliegues; metal: valores muy contrastados con brillos reservados en blanco y bordes nítidos."],
      ["¿Por qué un dibujo muy detallado puede parecer plano y uno simple profundo? Justifica.", "La profundidad depende de relaciones (superposición, valores, tamaños), no de la cantidad de detalle; si el detalle iguala todos los planos se pierden las jerarquías."],
      ["Elabora una pauta semanal de entrenamiento de 5 días con ejercicios distintos.", "Lunes: líneas y modulación; martes: contorno ciego de un objeto; miércoles: escala de valores y esfera; jueves: espacios negativos de una silla; viernes: apunte libre de 20 min y revisión con anotaciones."],
    ],
  },
  glosario: [
    ["Dibujo", "Representación de ideas o realidades mediante trazos sobre una superficie."],
    ["Lenguaje visual", "Sistema de signos gráficos (punto, línea, forma, valor…) que sirve para comunicar."],
    ["Boceto", "Dibujo rápido y sin acabar que sirve para explorar ideas."],
    ["Canon", "Conjunto de reglas de representación, sobre todo de proporción."],
    ["Punto", "Marca mínima producida por la herramienta al apoyarse."],
    ["Trama", "Conjunto de puntos o líneas que crea un tono o una textura."],
    ["Línea modulada", "Línea que varía de grosor e intensidad."],
    ["Plano", "Superficie delimitada por líneas o por un cambio de valor."],
    ["Figura y fondo", "Relación entre lo que destaca y lo que lo rodea."],
    ["Espacio negativo", "Espacio entre y alrededor de las formas representadas."],
    ["Textura", "Aspecto de una superficie, táctil o visual."],
    ["Valor", "Grado de claridad u oscuridad de una zona."],
    ["Composición", "Organización de los elementos dentro del formato."],
    ["Regla de los tercios", "Pauta de composición basada en dividir el formato en tres partes por eje."],
    ["Perspectiva atmosférica", "Efecto por el que lo lejano se ve más claro y con menos contraste."],
    ["Miniatura", "Boceto pequeño para ensayar composiciones."],
  ],
  situacion: {
    titulo: "Mi primer abecedario visual",
    reto: "Cada alumno crea una lámina personal que presente los elementos del lenguaje visual aplicados a un mismo objeto cotidiano: una hoja, una concha, una llave, una fruta.",
    pasos: [
      "Elige un objeto, obsérvalo diez minutos y escribe tres adjetivos que lo describan.",
      "Dibuja el objeto con puntos, con líneas, con planos de tono y con textura en cuatro recuadros de la misma lámina.",
      "Haz tres miniaturas de composición y elige la mejor aplicando equilibrio y tercios.",
      "Ejecuta el dibujo final con valores en una escala de ocho tonos e incluye un indicio de profundidad.",
      "Añade al margen una pequeña nota que explique qué función del dibujo predomina y por qué.",
    ],
    producto: "Una lámina A3 con el objeto representado de cuatro maneras, una composición final y una nota explicativa, expuesta en el aula.",
    evaluacion: [
      "Los cuatro recuadros muestran con claridad el punto, la línea, el plano y la textura.",
      "La composición final es equilibrada y tiene un centro de interés claro.",
      "El dibujo usa un rango amplio de valores y al menos un indicio de profundidad.",
      "La nota explicativa utiliza con corrección el vocabulario del tema.",
    ],
  },
  familias: [
    "Pedidle que os enseñe su cuaderno y que explique qué quería conseguir en cada página.",
    "Dibujad juntos el mismo objeto durante diez minutos y comparad después cómo lo ha visto cada uno.",
    "Jugad a dibujar sin mirar el papel: es divertido y entrena la observación.",
    "Visitad una exposición de dibujo o fijaos en los bocetos de un museo en línea.",
  ],
  saberes: "Lenguaje visual y expresión gráfica: elementos básicos del lenguaje visual (punto, línea, plano, forma, textura, valor), funciones del dibujo, principios básicos de composición y de representación del espacio, y hábito de trabajo (observación, boceto y cuaderno).",
  ideas: [
    "Empezar cada clase con un calentamiento de cinco minutos de líneas y contornos ciegos.",
    "Analizar en grupo dibujos de Altamira, Durero y Picasso con el vocabulario del tema.",
    "Montar un cuaderno de bocetos colectivo con una página por alumno y por semana.",
    "Hacer un concurso de «el mismo objeto, cuatro miradas» con rúbrica compartida.",
  ],
  fuentes: [
    { t: "Cueva de El Castillo (Cantabria), Ministerio de Cultura", url: "https://www.cultura.gob.es" },
    { t: "Dibujo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dibujo" },
    { t: "Elementos del lenguaje visual, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Lenguaje_visual" },
  ],
});
