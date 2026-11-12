// Educación Plástica, Visual y Audiovisual 1º ESO: el lenguaje visual. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, caja, vb, vg } = require("./_eso1c");

const M = "Educación Plástica, Visual y Audiovisual";

module.exports = {
  materia: M,
  curso: C,
  titulo: "El lenguaje visual",
  minutos: 50,
  objetivos: ["Explicar qué es el lenguaje visual y dónde lo usamos", "Identificar los elementos de la comunicación visual", "Reconocer cómo percibimos las imágenes: figura y fondo, agrupación e ilusiones ópticas", "Distinguir iconos, símbolos e indicios y leer una imagen de forma objetiva y subjetiva"],
  claves: ["lenguaje visual", "emisor", "mensaje", "percepción", "figura y fondo", "símbolo"],
  pregunta: {
    texto: "En un aeropuerto de un país cuyo idioma no entiendes, ¿cómo encuentras los baños o la salida?",
    respuesta: "Gracias a los <b>pictogramas</b>: dibujos sencillos que todo el mundo entiende, como el muñeco y la muñeca de los baños o la flecha con el hombre corriendo de la salida. <mark>Las imágenes son un lenguaje que no necesita palabras</mark>, y por eso se usan en señales de todo el planeta.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el lenguaje visual?</h3><p>El <b>lenguaje visual</b> es el que usa <b>imágenes</b> para comunicar: dibujos, fotografías, señales, carteles, cómics, vídeos, iconos de una app… Igual que el lenguaje oral tiene palabras y reglas, el visual tiene <b>elementos</b> (punto, línea, forma, color, textura) y <b>normas de composición</b>.</p><p>Tiene grandes ventajas: es <mark>rápido</mark> (una imagen se entiende en un instante), es casi <b>universal</b> (no depende del idioma) y <b>emociona</b> (un color o un gesto transmiten sentimientos).</p><p>Vivimos rodeados de imágenes: se calcula que vemos miles al día entre pantallas, publicidad y calles. Aprender a mirarlas con atención nos hace más libres.</p>`,
    },
    {
      html: `<h3>Los elementos de la comunicación visual</h3><p>Como en cualquier comunicación, hay:</p>${tabla(["Elemento", "Qué es", "Ejemplo: una señal de tráfico"], [["Emisor", "quien crea y envía la imagen", "la Dirección General de Tráfico"], ["Receptor", "quien la ve e interpreta", "el conductor"], ["Mensaje", "lo que se quiere comunicar", "«peligro: curva a la derecha»"], ["Código", "las reglas que comparten", "forma triangular, borde rojo, flecha"], ["Canal", "el soporte o medio", "la placa metálica junto a la carretera"], ["Contexto", "la situación", "una carretera de montaña"]])}<p>Si el receptor no conoce el código, el mensaje falla: por eso hay que aprender las señales antes de conducir.</p>`,
      svg: svg("Esquema de la comunicación visual: el emisor envía un mensaje a través de un canal al receptor, con un código común", `${caja(10, 60, 70, 40, "emisor", "var(--pen)", { s: 12 })}${caja(95, 60, 70, 40, "mensaje", "var(--sun)", { s: 12 })}${caja(180, 60, 70, 40, "receptor", "var(--leaf)", { s: 12 })}<path d="M80 80 H 95 M165 80 H 180" stroke="var(--ink)" stroke-width="2.5"/>${t(130, 40, "canal: papel, pantalla, muro…", { c: "var(--muted)", s: 10 })}${t(130, 160, "código compartido", { c: "var(--red)", s: 12 })}<path d="M45 108 Q 130 156 215 108" fill="none" stroke="var(--red)" stroke-width="1.8" stroke-dasharray="4 3"/>`),
    },
    {
      html: `<h3>Cómo percibimos: el ojo y el cerebro</h3><p>La <b>percepción visual</b> no es solo «ver»: el ojo capta la luz y el <b>cerebro</b> la interpreta, completando y ordenando lo que recibe. Por eso a veces nos «engaña».</p><p>Algunas leyes de la percepción (estudiadas por la escuela de la <b>Gestalt</b>):</p><ul><li><b>Proximidad</b>: los elementos cercanos se ven como un grupo.</li><li><b>Semejanza</b>: los elementos parecidos (color, forma) se agrupan.</li><li><b>Cierre</b>: el cerebro completa las figuras incompletas.</li><li><b>Continuidad</b>: seguimos las líneas en la misma dirección.</li></ul><p>Los diseñadores de logotipos y señales usan estas leyes para que sus imágenes se entiendan al instante.</p>`,
      svg: svg("Ejemplos de leyes de la percepción: puntos cercanos forman grupos y un círculo incompleto se ve cerrado", `${[0, 1, 2].map((g) => [0, 1].map((i) => `<circle cx="${24 + g * 40 + i * 12}" cy="60" r="5" fill="var(--pen)"/>`).join("")).join("")}${t(70, 96, "proximidad", { c: "var(--pen)", s: 11 })}<path d="M196 40 A 26 26 0 1 1 180 50" fill="none" stroke="var(--red)" stroke-width="4"/>${t(195, 108, "cierre", { c: "var(--red)", s: 11 })}${[0, 1, 2, 3, 4].map((i) => `<rect x="${24 + i * 22}" y="${126}" width="12" height="12" fill="${i % 2 ? "var(--leaf)" : "var(--sun)"}"/>`).join("")}${t(70, 162, "semejanza", { c: "var(--leaf)", s: 11 })}`),
      video: vb("lenB"),
    },
    {
      html: `<h3>Figura y fondo</h3><p>Al mirar una imagen, el cerebro separa lo que destaca, la <b>figura</b>, de lo que queda detrás, el <b>fondo</b>. Normalmente la figura es más pequeña, está cerrada y tiene más contraste.</p><p>A veces figura y fondo se pueden <mark>intercambiar</mark>: es la <b>imagen reversible</b>. En la famosa copa de Rubin se ve una copa blanca o dos perfiles negros enfrentados, pero nunca las dos cosas a la vez.</p><p>Muchos logotipos esconden un segundo dibujo en el espacio vacío entre sus letras o formas. Buscar estas «figuras escondidas» es un buen ejercicio para entrenar la mirada.</p>`,
      svg: svg("Imagen reversible: se ve una copa clara en el centro o dos perfiles oscuros enfrentados", `<rect x="40" y="20" width="180" height="140" rx="8" fill="var(--ink)"/><path d="M95 20 C 95 50 110 60 110 72 C 110 84 100 86 104 96 C 108 106 118 108 118 124 C 118 140 100 148 100 160 H 160 C 160 148 142 140 142 124 C 142 108 152 106 156 96 C 160 86 150 84 150 72 C 150 60 165 50 165 20 Z" fill="var(--paper)"/>${t(130, 176, "¿copa o dos caras?", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Las ilusiones ópticas</h3><p>Una <b>ilusión óptica</b> es una imagen que el cerebro interpreta de forma distinta a la realidad. Algunas famosas:</p><ul><li><b>Müller-Lyer</b>: dos segmentos iguales parecen de distinto tamaño según las puntas de flecha de sus extremos.</li><li><b>Contraste de tamaño</b>: un círculo rodeado de círculos grandes parece más pequeño que el mismo rodeado de pequeños.</li><li><b>Figuras imposibles</b>: dibujos que parecen tener volumen pero no podrían existir, como el triángulo de Penrose.</li></ul><p>Artistas como <b>M. C. Escher</b> o los pintores del <b>op art</b> (arte óptico) crearon obras enteras jugando con estos efectos.</p>`,
      svg: svg("Ilusión de Müller-Lyer: dos segmentos iguales parecen de distinta longitud por las puntas de sus extremos", `<path d="M60 56 H 200 M60 56 l 14 -12 M60 56 l 14 12 M200 56 l -14 -12 M200 56 l -14 12" stroke="var(--pen)" stroke-width="3" fill="none"/><path d="M60 116 H 200 M60 116 l -14 -12 M60 116 l -14 12 M200 116 l 14 -12 M200 116 l 14 12" stroke="var(--red)" stroke-width="3" fill="none"/>${t(130, 150, "¡miden lo mismo!", { s: 12 })}`),
      video: vb("lenB2"),
    },
    {
      html: `<h3>Signos visuales: icono, símbolo e indicio</h3><ul><li><b>Icono</b>: se <b>parece</b> a lo que representa. El dibujo de una bici en un carril bici, una foto.</li><li><b>Símbolo</b>: representa algo por <b>acuerdo</b> o convención, no por parecido. Una paloma blanca = paz; un corazón = amor; el color rojo en un semáforo = parar.</li><li><b>Indicio</b>: es una <b>huella</b> o consecuencia de algo. Humo = fuego; huellas en la nieve = alguien pasó.</li></ul><p>Los <b>pictogramas</b> son iconos muy simplificados con significado claro: los de los Juegos Olímpicos, los de los aeropuertos o los de los iconos del móvil.</p>`,
    },
    {
      html: `<h3>Leer una imagen: denotación y connotación</h3><p>Una imagen se puede leer en dos niveles:</p><ul><li><b>Lectura objetiva o denotativa</b>: describir lo que se ve, sin opinar. «Una niña sentada en un banco bajo la lluvia, con un paraguas amarillo».</li><li><b>Lectura subjetiva o connotativa</b>: interpretar lo que <mark>transmite o sugiere</mark>. «Transmite soledad, pero el amarillo aporta esperanza».</li></ul><p>La lectura denotativa es igual para todos; la connotativa depende de cada persona, su cultura y sus experiencias. Para analizar cualquier imagen, empieza siempre describiendo y después interpreta.</p>`,
    },
    {
      html: `<h3>Funciones de la imagen</h3><p>Las imágenes se crean con distintas <b>intenciones</b>:</p>${tabla(["Función", "Intención", "Ejemplo"], [["Informativa", "mostrar cómo es algo", "foto de un periódico, mapa"], ["Exhortativa o persuasiva", "convencer o hacer actuar", "anuncio publicitario, cartel de campaña"], ["Expresiva", "transmitir emociones", "un retrato expresionista"], ["Estética", "buscar la belleza", "un paisaje pintado"], ["Didáctica", "enseñar", "una infografía, un esquema del libro"], ["Simbólica o señalizadora", "indicar u orientar", "señales de tráfico, pictogramas"]])}<p>Muchas imágenes tienen varias funciones a la vez: un buen cartel informa, convence y además es bonito.</p>`,
    },
  ],
  figura: {
    titulo: "El lenguaje visual en un vistazo",
    svg: filas("Resumen: lenguaje con imágenes; emisor, mensaje, receptor y código; leyes de la percepción; figura y fondo; icono, símbolo e indicio; denotación y connotación", [["Lenguaje visual", "comunicar con imágenes", "var(--pen)"], ["Comunicación", "emisor · mensaje · receptor · código", "var(--inf)"], ["Percepción", "proximidad · semejanza · cierre", "var(--sun)"], ["Figura y fondo", "imágenes reversibles", "var(--leaf)"], ["Signos", "icono · símbolo · indicio", "var(--red)"], ["Lectura", "denotativa · connotativa", "var(--ink)"]], 200),
  },
  video: vg("lenV"),
  quiz: mezcla([
    { q: "El lenguaje visual comunica con…", o: ["imágenes", "sonidos", "olores"], a: 0, e: "Dibujos, fotos, señales…" },
    { q: "En una señal de tráfico, el receptor es…", o: ["el conductor", "la DGT", "la placa"], a: 0, e: "Quien la interpreta." },
    { q: "Las reglas que comparten emisor y receptor son el…", o: ["código", "canal", "contexto"], a: 0, e: "Ej.: triángulo = peligro." },
    { q: "Ver como grupo los elementos cercanos es la ley de…", o: ["proximidad", "cierre", "semejanza"], a: 0, e: "Gestalt." },
    { q: "Completar mentalmente una figura incompleta es…", o: ["cierre", "continuidad", "contraste"], a: 0, e: "El cerebro la cierra." },
    { q: "Una imagen en la que figura y fondo se intercambian es…", o: ["reversible", "denotativa", "un indicio"], a: 0, e: "Copa de Rubin." },
    { q: "Una paloma blanca como paz es un…", o: ["símbolo", "icono", "indicio"], a: 0, e: "Por convención." },
    { q: "El humo como señal de fuego es un…", o: ["indicio", "símbolo", "pictograma"], a: 0, e: "Es una consecuencia." },
    { q: "Describir lo que se ve sin opinar es la lectura…", o: ["denotativa", "connotativa", "persuasiva"], a: 0, e: "Objetiva." },
    { q: "Un anuncio busca sobre todo la función…", o: ["persuasiva", "estética", "didáctica"], a: 0, e: "Convencer." },
  ]),
  examen: mezcla([
    { q: "El dibujo de una bici en un carril bici es…", o: ["un icono", "un indicio", "un símbolo"], a: 0, e: "Se parece a lo que representa." },
    { q: "«Transmite tristeza» es una lectura…", o: ["connotativa", "denotativa", "informativa"], a: 0, e: "Interpretación." },
    { q: "El arte que juega con efectos ópticos se llama…", o: ["op art", "pop art", "arte rupestre"], a: 0, e: "Arte óptico." },
  ]),
  feynman: ["Por qué el lenguaje visual es casi universal", "Los elementos de la comunicación visual con un ejemplo", "Qué es una imagen reversible", "Diferencia entre icono, símbolo e indicio", "Cómo se lee una imagen en dos niveles"],
  mapa: mapa("LENGUAJE VISUAL", "var(--eso)", [
    ["Comunicación", "emisor · código · receptor", "var(--pen)"],
    ["Percepción", "Gestalt · ilusiones", "var(--sun)"],
    ["Signos", "icono · símbolo · indicio", "var(--leaf)"],
    ["Lectura y funciones", "denotar · connotar", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Lenguaje visual", "Comunicación mediante imágenes."],
    ["Código visual", "Reglas que comparten emisor y receptor."],
    ["Gestalt", "Leyes de cómo el cerebro organiza lo que ve."],
    ["Figura y fondo", "Lo que destaca y lo que queda detrás."],
    ["Icono", "Se parece a lo que representa."],
    ["Símbolo", "Representa por convención."],
    ["Denotación", "Descripción objetiva de la imagen."],
    ["Connotación", "Lo que la imagen sugiere o transmite."],
  ],
  familias: ["Jugad a buscar pictogramas por la calle o en un centro comercial y explicad qué significan.", "Elegid una foto familiar: uno la describe (denotación) y otro dice qué transmite (connotación).", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Lenguaje visual y comunicación, percepción visual, signos visuales y lectura de imágenes (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Mural de pictogramas inventados para el centro.", "Colección de ilusiones ópticas con explicación.", "Lectura denotativa y connotativa de fotos de prensa."],
  },
  fuentes: [RD, { t: "Museo Nacional Centro de Arte Reina Sofía: recursos educativos", url: "https://www.museoreinasofia.es/educacion" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Analiza la comunicación de un cartel de «No pisar el césped» en un parque.", pasos: ["Emisor: el ayuntamiento. Receptor: los visitantes.", "Mensaje: no se puede pisar. Código: círculo rojo con barra y dibujo de un pie.", "Canal: placa en el parque. Contexto: zona ajardinada."], resultado: "Comunicación visual completa con función señalizadora." },
    { enunciado: "Clasifica: huella de perro en el barro, dibujo de un teléfono en un botón, trébol de cuatro hojas como suerte.", pasos: ["Huella: consecuencia del paso del perro → indicio.", "Teléfono dibujado: se parece al objeto → icono.", "Trébol = suerte por tradición → símbolo."], resultado: "Indicio, icono y símbolo." },
    { enunciado: "Haz la lectura denotativa y connotativa de una foto de un faro iluminado en una noche de tormenta.", pasos: ["Denotativa: un faro blanco en una roca, olas grandes y cielo oscuro; el faro emite luz.", "Connotativa: transmite fuerza, seguridad y esperanza en medio del peligro.", "La connotación puede variar según quien la mire."], resultado: "Se describe primero y se interpreta después." },
  ],
  errores: [
    "Mezclar descripción y opinión al leer una imagen.",
    "Pensar que todos los signos visuales se parecen a lo que representan (los símbolos no).",
    "Creer que vemos «tal cual»: el cerebro interpreta y puede engañarse.",
    "Confundir el canal (el soporte) con el código (las reglas).",
  ],
  ejercicios: [
    { q: "Escribe cinco lugares o situaciones en los que uses el lenguaje visual cada día.", sol: "Por ejemplo: iconos del móvil, señales de tráfico, publicidad, emojis, el libro de texto." },
    { q: "Identifica los elementos de la comunicación en el icono de la papelera de un ordenador.", sol: "Emisor: quien diseñó el programa; receptor: el usuario; mensaje: «aquí se borran archivos»; código: dibujo de papelera; canal: pantalla." },
    { q: "Dibuja tres puntos juntos y tres separados. ¿Qué ley de la percepción demuestras?", sol: "La de proximidad: los cercanos se ven como grupo." },
    { q: "Explica con tus palabras qué es una imagen reversible y pon un ejemplo.", sol: "Una imagen en la que figura y fondo se intercambian, como la copa de Rubin." },
    { q: "Dibuja la ilusión de Müller-Lyer y comprueba con la regla que los segmentos son iguales.", sol: "Respuesta práctica: los dos miden lo mismo." },
    { q: "Pon un ejemplo de icono, de símbolo y de indicio que no aparezcan en el tema.", sol: "Icono: foto de carné; símbolo: la cruz verde de farmacia; indicio: un charco (ha llovido)." },
    { q: "Diseña un pictograma para la biblioteca del instituto.", sol: "Respuesta abierta: por ejemplo, un libro abierto con un dedo sobre los labios (silencio)." },
    { q: "Haz la lectura denotativa de la portada de tu libro de texto.", sol: "Respuesta abierta: describir solo lo que se ve (colores, figuras, textos)." },
    { q: "¿Qué funciones tiene un cartel de una campaña de reciclaje?", sol: "Persuasiva (que reciclemos), informativa (dónde y cómo) y a veces estética." },
    { q: "Busca un logotipo con una figura escondida en el fondo y explícalo.", sol: "Respuesta abierta: describir la figura y el fondo del logotipo elegido." },
  ],
};
