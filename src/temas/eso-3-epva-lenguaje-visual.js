// Educación Plástica, Visual y Audiovisual 3º ESO: el lenguaje visual y la comunicación. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

const M = "Educación Plástica, Visual y Audiovisual";

module.exports = {
  materia: M,
  curso: C,
  titulo: "El lenguaje visual y la comunicación",
  minutos: 50,
  objetivos: ["Identificar los elementos del proceso de comunicación visual", "Distinguir iconos, índices y símbolos", "Reconocer las funciones de la imagen y los niveles de lectura", "Comprender cómo percibimos las imágenes y las ilusiones ópticas"],
  claves: ["comunicación visual", "signo", "icono", "símbolo", "denotación", "percepción"],
  pregunta: {
    texto: "Viajas a Japón sin saber japonés. ¿Cómo sabrías dónde está el baño, la salida de emergencia o dónde no se puede fumar?",
    respuesta: "Por las <mark>señales visuales</mark>: un muñeco con falda, una persona corriendo hacia una puerta verde, un cigarrillo tachado. Las imágenes son un lenguaje que se entiende por encima de los idiomas, pero tiene sus propias reglas, y conocerlas te ayuda a leerlas y a crearlas.",
  },
  bloques: [
    {
      html: `<h3>Qué es la comunicación visual</h3><p>La <b>comunicación visual</b> es la que se produce mediante <b>imágenes</b>: fotografías, señales, carteles, cómics, vídeos, iconos de una app. Como cualquier comunicación, transmite un mensaje de un emisor a un receptor.</p><p>Vivimos rodeados de imágenes: se calcula que una persona ve <mark>miles de imágenes al día</mark> entre pantallas, calles y envases. Algunas llegan de forma <b>casual</b> (las nubes anuncian lluvia) y otras son <b>intencionadas</b>: alguien las ha creado para informar, convencer o emocionar. Aprender el lenguaje visual nos convierte en espectadores críticos y en creadores eficaces.</p>`,
    },
    {
      html: `<h3>Elementos de la comunicación visual</h3><ul><li><b>Emisor</b>: quien crea la imagen (un diseñador, una empresa, tú).</li><li><b>Receptor</b>: quien la ve e interpreta.</li><li><b>Mensaje</b>: la información que se transmite.</li><li><b>Código</b>: el sistema de signos y reglas (colores, formas, composición) que ambos deben conocer.</li><li><b>Canal o medio</b>: el soporte (papel, pantalla, muro).</li><li><b>Contexto</b>: la situación que rodea la comunicación.</li></ul><p>Si el receptor no comparte el código, el mensaje falla: en Occidente el blanco se asocia a las bodas, y en algunos países de Asia, al <mark>luto</mark>.</p>`,
      svg: svg("Esquema de la comunicación visual: emisor, mensaje por un canal, receptor, con el código y el contexto alrededor", `<defs><marker id="fl1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="var(--ink)"/></marker></defs>
        <rect x="14" y="66" width="64" height="40" rx="10" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.5"/>${t(46, 91, "emisor", { c: "var(--pen)", s: 12 })}
        <rect x="98" y="66" width="64" height="40" rx="10" fill="var(--hl)" stroke="var(--hl-ink)" stroke-width="2.5"/>${t(130, 91, "mensaje", { c: "var(--hl-ink)", s: 12 })}
        <rect x="182" y="66" width="64" height="40" rx="10" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2.5"/>${t(214, 91, "receptor", { c: "var(--leaf)", s: 12 })}
        <path d="M78 86 H 96 M162 86 H 180" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl1)"/>
        ${t(130, 40, "código compartido", { c: "var(--red)", s: 12 })}${t(130, 132, "canal: papel, pantalla…", { c: "var(--muted)", s: 11 })}${t(130, 156, "contexto", { c: "var(--inf)", s: 12 })}`),
    },
    {
      html: `<h3>Signos visuales: icono, índice y símbolo</h3><p>Un <b>signo</b> es algo que representa otra cosa. Según la relación con lo que representan, hay tres tipos:</p>${tabla(["Signo", "Relación", "Ejemplo"], [["<b>Icono</b>", "se parece a lo que representa", "silueta de un avión en el aeropuerto"], ["<b>Índice</b>", "es una huella o consecuencia", "humo (indica fuego), huellas en la arena"], ["<b>Símbolo</b>", "relación aprendida por convención", "paloma = paz, corazón = amor, ♻ = reciclaje"]])}<p>Los <b>pictogramas</b> son iconos muy simplificados que informan de forma rápida y universal: los de los Juegos Olímpicos, los de las señales de tráfico o los de las apps.</p>`,
      svg: svg("Tres signos: un icono de avión, un índice de humo saliendo de una chimenea y un símbolo de corazón", `<rect x="14" y="30" width="70" height="90" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><path d="M49 52 L 53 70 L 72 78 L 72 84 L 53 80 L 52 96 L 58 102 L 58 106 L 49 103 L 40 106 L 40 102 L 46 96 L 45 80 L 26 84 L 26 78 L 45 70 Z" fill="var(--pen)"/>
        <rect x="95" y="30" width="70" height="90" rx="10" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><rect x="118" y="80" width="14" height="30" fill="var(--ink)"/><path d="M125 76 q -10 -8 0 -16 q 10 -8 0 -16" fill="none" stroke="var(--muted)" stroke-width="5" stroke-linecap="round"/>
        <rect x="176" y="30" width="70" height="90" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><path d="M211 104 C 180 82, 186 52, 211 66 C 236 52, 242 82, 211 104 Z" fill="var(--red)"/>
        ${t(49, 142, "icono", { c: "var(--pen)", s: 12 })}${t(130, 142, "índice", { c: "var(--muted)", s: 12 })}${t(211, 142, "símbolo", { c: "var(--red)", s: 12 })}${t(130, 164, "se parece · huella · convención", { s: 10, c: "var(--muted)" })}`),
      video: { id: "XlpIIWoATX0", titulo: "¿Qué son los iconos, índices, símbolos y metáforas visuales?", canal: "DILO CON MONOS", vistas: 114279, megusta: 0 },
    },
    {
      html: `<h3>Las funciones de la imagen</h3><p>Toda imagen intencionada tiene una o varias <b>funciones</b>:</p><ul><li><b>Informativa</b>: transmite datos objetivos (un mapa, una infografía, una señal).</li><li><b>Exhortativa</b> o persuasiva: busca convencer o mover a actuar (publicidad, propaganda, campañas).</li><li><b>Expresiva</b>: comunica emociones o el punto de vista del autor (un autorretrato, un grafiti).</li><li><b>Estética</b>: busca la belleza y el placer de mirar (una obra de arte).</li><li><b>Descriptiva</b>: muestra cómo es algo con detalle (lámina de botánica, foto de producto).</li></ul><p>Un mismo cartel puede ser a la vez informativo y persuasivo: la clave es saber <mark>cuál predomina</mark>.</p>`,
    },
    {
      html: `<h3>Leer una imagen: denotación y connotación</h3><p>Una imagen se lee en dos niveles:</p><ul><li><b>Lectura denotativa</b> u objetiva: describe lo que <mark>se ve</mark>, sin interpretar. «Una chica corre por una playa al amanecer con unas zapatillas».</li><li><b>Lectura connotativa</b> o subjetiva: interpreta lo que la imagen <mark>sugiere</mark>: libertad, salud, juventud, superación.</li></ul><p>La publicidad trabaja sobre todo con la connotación: no vende unas zapatillas, vende la sensación de libertad. Para analizar una imagen, empieza siempre por la denotación y después pasa a la connotación, apoyándote en lo que ves (colores, gestos, encuadre).</p>`,
    },
    {
      html: `<h3>La percepción visual</h3><p>Ver no es solo recibir luz: el <b>cerebro interpreta</b> lo que llega a los ojos. Los psicólogos de la <b>Gestalt</b> describieron leyes que explican cómo agrupamos lo que vemos:</p><ul><li><b>Proximidad</b>: los elementos cercanos se ven como grupo.</li><li><b>Semejanza</b>: los elementos parecidos (color, forma) se agrupan.</li><li><b>Cierre</b>: completamos mentalmente las formas incompletas.</li><li><b>Figura y fondo</b>: separamos lo que destaca (figura) de lo que lo rodea (fondo).</li><li><b>Continuidad</b>: seguimos las líneas en la dirección que llevan.</li></ul>`,
      svg: svg("Leyes de la Gestalt: puntos próximos forman grupos y un círculo incompleto se percibe cerrado", `${[0, 1, 2].map((g) => [0, 1, 2, 3].map((i) => `<circle cx="${22 + g * 40 + (i % 2) * 14}" cy="${56 + Math.floor(i / 2) * 14}" r="5" fill="var(--pen)"/>`).join("")).join("")}
        <path d="M200 40 A 32 32 0 1 1 168 72" fill="none" stroke="var(--red)" stroke-width="5" stroke-linecap="round"/>
        ${t(70, 120, "proximidad:", { c: "var(--pen)", s: 12 })}${t(70, 136, "vemos 3 grupos", { s: 11 })}${t(200, 130, "cierre:", { c: "var(--red)", s: 12 })}${t(200, 146, "vemos un círculo", { s: 11 })}`),
    },
    {
      html: `<h3>Ilusiones ópticas</h3><p>Las <b>ilusiones ópticas</b> muestran que la percepción puede engañarnos. En la ilusión de <b>Müller-Lyer</b>, dos segmentos iguales parecen de distinto tamaño por las flechas de sus extremos. En las <b>figuras ambiguas</b>, como la copa de Rubin, el cerebro alterna entre ver una copa o dos caras de perfil, porque figura y fondo se intercambian.</p><p>Artistas como <b>M. C. Escher</b>, Victor Vasarely (op art) o los pintores de trampantojos han usado estos efectos para crear obras sorprendentes. Los diseñadores también los aprovechan: por ejemplo, el logotipo de una conocida empresa de mensajería esconde una flecha en el espacio entre dos letras.</p>`,
      svg: svg("Ilusión de Müller-Lyer: dos segmentos de igual longitud parecen distintos por las puntas de flecha", `<path d="M60 60 H 200" stroke="var(--ink)" stroke-width="3"/><path d="M74 46 L 60 60 L 74 74 M186 46 L 200 60 L 186 74" fill="none" stroke="var(--ink)" stroke-width="3"/>
        <path d="M60 120 H 200" stroke="var(--ink)" stroke-width="3"/><path d="M46 106 L 60 120 L 46 134 M214 106 L 200 120 L 214 134" fill="none" stroke="var(--ink)" stroke-width="3"/>
        <path d="M60 30 V 150 M200 30 V 150" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="4 4"/>${t(130, 166, "¡miden lo mismo!", { c: "var(--red)", s: 13 })}`),
      video: { id: "Kyr1IRO19wo", titulo: "Tipos de signos aplicados a la comunicación visual", canal: "Juan Pablo Sarmiento Parcha", vistas: 122480, megusta: 0 },
    },
    {
      html: `<h3>Imagen, cultura y responsabilidad</h3><p>Las imágenes no son neutrales: transmiten <b>valores</b> y pueden reforzar <b>estereotipos</b> (cómo «deben» ser los cuerpos, los roles de género, ciertos grupos sociales). Los filtros y retoques de las redes sociales crean una imagen irreal que puede afectar a la autoestima.</p><p>Por eso es importante:</p><ul><li>Preguntarse <mark>quién</mark> ha hecho la imagen y <mark>para qué</mark>.</li><li>Detectar retoques, montajes y deepfakes.</li><li>Respetar el <b>derecho a la propia imagen</b>: no publicar fotos de otros sin su permiso.</li><li>Respetar los <b>derechos de autor</b> y usar licencias libres (Creative Commons) cuando reutilices imágenes.</li></ul>`,
    },
    {
      html: `<h3>Crear mensajes visuales eficaces</h3><p>Para que una imagen comunique bien:</p><ol><li>Define el <b>objetivo</b> (informar, convencer, emocionar) y el <b>público</b>.</li><li>Elige una <b>idea central</b> y elimina lo que distrae: menos es más.</li><li>Usa <b>contraste</b> (tamaño, color, posición) para marcar lo importante.</li><li>Cuida la <b>legibilidad</b>: tipografía clara y tamaño suficiente.</li><li>Comprueba que el <b>código</b> lo entiende tu público: haz una prueba con alguien.</li></ol><p>Un buen ejemplo son los pictogramas de seguridad: con dos colores y una silueta, se entienden en <mark>menos de un segundo</mark>.</p>`,
    },
  ],
  figura: {
    titulo: "Cómo analizar una imagen",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Pasos para analizar una imagen: contexto y emisor, lectura denotativa, lectura connotativa y función de la imagen">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["1. Contexto", "¿quién la hizo, cuándo, dónde y para quién?", "var(--ink)"], ["2. Denotación", "describe lo que se ve, sin opinar", "var(--pen)"], ["3. Connotación", "qué sugiere: emociones, valores, ideas", "var(--red)"], ["4. Función", "informar, convencer, expresar, agradar", "var(--leaf)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="210" y="${42 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "Beecc4pLgI4", titulo: "Ícono, índice y símbolo (Peirce)", canal: "Educatina", vistas: 481221, megusta: 0, busqueda: "icono índice símbolo comunicación visual" },
  quiz: mezcla([
    { q: "En comunicación visual, el sistema de signos y reglas compartido es…", o: ["el canal", "el código", "el contexto"], a: 1, e: "Emisor y receptor deben conocerlo." },
    { q: "La silueta de un avión en un aeropuerto es…", o: ["un icono", "un índice", "un símbolo"], a: 0, e: "Se parece a lo que representa." },
    { q: "Unas huellas de lobo en la nieve son…", o: ["un icono", "un índice", "un símbolo"], a: 1, e: "Son una consecuencia de su paso." },
    { q: "La paloma blanca como paz es…", o: ["un icono", "un índice", "un símbolo"], a: 2, e: "Relación aprendida por convención." },
    { q: "Un anuncio de zapatillas tiene sobre todo función…", o: ["exhortativa", "descriptiva", "estética"], a: 0, e: "Quiere convencer de comprar." },
    { q: "«En la foto hay una mujer sentada en un banco» es una lectura…", o: ["connotativa", "denotativa", "simbólica"], a: 1, e: "Describe lo que se ve." },
    { q: "Ver tres grupos de puntos por su cercanía es la ley de…", o: ["cierre", "proximidad", "semejanza"], a: 1, e: "Ley de la Gestalt." },
    { q: "Completar mentalmente un círculo al que le falta un trozo es la ley de…", o: ["cierre", "continuidad", "figura y fondo"], a: 0, e: "El cerebro cierra la forma." },
    { q: "En la copa de Rubin se ve una copa o dos caras porque se intercambian…", o: ["los colores", "figura y fondo", "luz y sombra"], a: 1, e: "Es una figura ambigua." },
    { q: "Publicar la foto de un compañero sin su permiso vulnera…", o: ["sus derechos de autor", "su derecho a la propia imagen", "nada"], a: 1, e: "Necesitas su consentimiento." },
  ]),
  examen: mezcla([
    { q: "Un mapa del metro tiene función principalmente…", o: ["informativa", "expresiva", "persuasiva"], a: 0, e: "Transmite datos objetivos." },
    { q: "Las imágenes que transmiten ideas fijas sobre cómo «debe» ser un grupo son…", o: ["estereotipos", "pictogramas", "índices"], a: 0, e: "Simplificaciones injustas." },
    { q: "La ilusión de Müller-Lyer demuestra que…", o: ["la percepción puede engañar", "las flechas alargan las líneas", "los ojos fallan siempre"], a: 0, e: "El cerebro interpreta." },
  ]),
  feynman: ["Cuáles son los elementos de la comunicación visual, con un ejemplo", "Qué diferencia hay entre icono, índice y símbolo", "Cómo harías la lectura denotativa y connotativa de un anuncio", "Qué es una ley de la Gestalt"],
  mapa: mapa("LENGUAJE VISUAL", "var(--eso)", [
    ["Comunicación", "emisor · código · receptor", "var(--pen)"],
    ["Signos", "icono · índice · símbolo", "var(--leaf)"],
    ["Lectura", "denotación · connotación", "var(--red)"],
    ["Percepción", "Gestalt · ilusiones", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Código visual", "Sistema de signos y reglas que comparten emisor y receptor."],
    ["Icono", "Signo que se parece a lo que representa."],
    ["Índice", "Signo que es huella o consecuencia de algo."],
    ["Símbolo", "Signo cuya relación con lo que representa es convencional."],
    ["Función exhortativa", "La de las imágenes que buscan convencer."],
    ["Denotación", "Lo que se ve objetivamente en una imagen."],
    ["Connotación", "Lo que la imagen sugiere o evoca."],
    ["Gestalt", "Teoría que explica cómo el cerebro organiza lo que vemos."],
  ],
  familias: ["Buscad juntos cinco pictogramas en la calle o en el súper y clasificadlos en iconos o símbolos.", "Elegid un anuncio y haced por turnos su lectura denotativa y connotativa.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Lenguaje visual y comunicación: elementos de la comunicación, signos visuales, funciones de la imagen, lectura denotativa y connotativa, percepción (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Diseñar un sistema de pictogramas para el instituto.", "Análisis en grupo de anuncios con ficha de lectura.", "Mural de ilusiones ópticas creadas por el alumnado."],
  },
  fuentes: [RD, { t: "Museo Nacional Centro de Arte Reina Sofía: recursos educativos", url: "https://www.museoreinasofia.es/educacion" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Análisis guiados",
  ejemplos: [
    { enunciado: "Analiza la señal de «prohibido fumar».",
      pasos: ["Contexto: espacios públicos; emisor, la administración o el propietario del local.", "Denotación: círculo rojo con borde, cigarrillo negro y una banda diagonal roja.", "Signos: el cigarrillo es un icono; el círculo rojo tachado es un símbolo convencional de prohibición.", "Función: informativa y exhortativa (pide un comportamiento)."],
      resultado: "Pictograma universal que combina icono y símbolo para prohibir de forma inmediata." },
    { enunciado: "Haz la lectura de un anuncio en el que una familia sonriente desayuna cereales en una cocina luminosa.",
      pasos: ["Denotación: cuatro personas en una mesa, luz de mañana, colores cálidos, el paquete en primer plano.", "Connotación: felicidad, salud, unión familiar, buen comienzo del día.", "Función: exhortativa: asocia el producto a esos valores para que lo compremos."],
      resultado: "El anuncio no vende solo cereales, vende la idea de familia feliz." },
    { enunciado: "Aplica la Gestalt para diseñar el menú de una app con cinco iconos.",
      pasos: ["Semejanza: todos los iconos del mismo estilo y color.", "Proximidad: separa con más espacio el icono de «Salir» para que no se confunda con el grupo.", "Figura y fondo: iconos oscuros sobre fondo claro con contraste suficiente."],
      resultado: "Menú que se entiende de un vistazo." },
  ],
  errores: [
    "Mezclar descripción e interpretación en la lectura denotativa.",
    "Pensar que todos los signos se entienden igual en todas las culturas.",
    "Confundir índice (huella) con icono (parecido).",
    "Creer que una imagen es neutral y no transmite valores.",
    "Usar imágenes de internet sin comprobar su licencia.",
  ],
  ejercicios: [
    { q: "Identifica emisor, receptor, mensaje y canal en un cartel de una campaña de reciclaje en la parada del autobús.", sol: "Emisor: el ayuntamiento o una entidad. Receptor: los ciudadanos que esperan el autobús. Mensaje: hay que reciclar. Canal: un cartel impreso en la marquesina." },
    { q: "Clasifica en icono, índice o símbolo: la cruz verde de una farmacia, un charco en el suelo, el dibujo de una bicicleta en un carril, la balanza de la justicia.", sol: "Cruz verde: símbolo. Charco: índice (ha llovido). Bicicleta dibujada: icono. Balanza: símbolo." },
    { q: "¿Qué función predomina en una lámina de anatomía, un retrato expresionista y una valla publicitaria?", sol: "Descriptiva/informativa; expresiva; exhortativa." },
    { q: "Haz la lectura denotativa de una fotografía de tu elección en tres frases.", sol: "Respuesta abierta. Debe limitarse a lo que se ve: personas, objetos, lugar, colores, encuadre, sin opiniones." },
    { q: "Escribe tres connotaciones del color rojo y tres del color azul en publicidad.", sol: "Rojo: pasión, urgencia, energía. Azul: confianza, calma, frescura." },
    { q: "¿Qué ley de la Gestalt usa un logotipo formado por varias piezas separadas que vemos como una sola figura?", sol: "La ley de cierre (y la de proximidad)." },
    { q: "Explica por qué la señal de salida de emergencia usa una figura corriendo y el color verde.", sol: "La figura es un icono que se entiende sin idioma; el verde se asocia por convención a seguridad y «vía libre»." },
    { q: "Busca un ejemplo de estereotipo en la publicidad y propón cómo cambiarlo.", sol: "Respuesta abierta. Ej.: anuncios de limpieza solo con mujeres; cambiarlo mostrando a personas de cualquier género." },
    { q: "Dibuja una figura ambigua sencilla en la que figura y fondo se intercambien.", sol: "Respuesta abierta. Ej.: una copa cuyo contorno forma dos perfiles enfrentados." },
    { q: "Diseña tres pictogramas para la biblioteca del instituto (silencio, devolución de libros, ordenadores).", sol: "Respuesta abierta. Deben ser simples, de un solo color sobre fondo contrastado y entenderse sin texto." },
  ],
};
