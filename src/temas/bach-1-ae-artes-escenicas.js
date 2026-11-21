// Artes Escénicas I, 1º de Bachillerato. Tema 1 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ae");
const { marco, t, ln, rc, ci, pa } = B;

// El hecho escénico: alguien hace algo ante alguien, aquí y ahora.
const hecho = marco("El hecho escénico: intérprete, público, espacio y tiempo compartidos",
  `${rc(14, 30, 88, 110, 'rx="10" fill="var(--pen)" fill-opacity=".12" stroke="var(--pen)" stroke-width="2"')}${rc(158, 30, 88, 110, 'rx="10" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="2"')}
  ${ci(58, 70, 10, 'fill="var(--pen)"')}${pa("M58 80 V108 M58 88 L44 100 M58 88 L72 98 M58 108 L48 128 M58 108 L68 128", 'fill="none" stroke="var(--pen)" stroke-width="3.5" stroke-linecap="round"')}
  ${[0, 1, 2].map((i) => `${ci(178 + i * 24, 84, 7, 'fill="var(--leaf)"')}${rc(170 + i * 24, 94, 16, 22, 'rx="6" fill="var(--leaf)" fill-opacity=".6"')}`).join("")}
  ${pa("M108 76 C122 62 138 62 152 76", 'fill="none" stroke="var(--red)" stroke-width="2.5"')}${pa("M152 96 C138 110 122 110 108 96", 'fill="none" stroke="var(--red)" stroke-width="2.5"')}
  ${t(58, 22, "Intérprete", { bold: 1, color: "var(--pen)" })}${t(202, 22, "Público", { bold: 1, color: "var(--leaf)" })}
  ${t(130, 58, "acción", { fs: 9, maxW: 44, color: "var(--red)" })}${t(130, 122, "reacción", { fs: 9, maxW: 44, color: "var(--red)" })}
  ${t(130, 160, "mismo espacio · mismo tiempo · en directo", { fs: 10, bold: 1, maxW: 236 })}`);

module.exports = B.tema({
  titulo: "Las artes escénicas",
  minutos: 60,
  objetivos: [
    "Definir las artes escénicas y reconocer qué las distingue de otras artes",
    "Identificar los elementos del hecho escénico: intérprete, público, espacio, tiempo y texto o partitura",
    "Distinguir las grandes disciplinas escénicas: teatro, danza, espectáculo musical y formas mixtas",
    "Valorar las funciones sociales de las artes escénicas y sus salidas profesionales",
  ],
  claves: ["artes escénicas", "hecho escénico", "intérprete", "público", "efímero", "teatro", "danza", "performance"],
  pregunta: {
    texto: "¿Por qué una obra de teatro grabada en vídeo ya no es exactamente la misma obra?",
    respuesta: "Porque las artes escénicas suceden <mark>en directo</mark>: intérpretes y público comparten el mismo espacio y el mismo tiempo, y cada función es única. La grabación es un <b>registro</b>, no el espectáculo.",
  },
  lectura: {
    titulo: "Nunca dos veces igual",
    html: `<p>Lucía ha visto la misma obra tres veces en el teatro de su ciudad. La primera noche el público reía en cada escena; la segunda, un móvil sonó en el momento más tenso y la actriz principal lo convirtió en una broma que no estaba en el texto; la tercera, había muchos niños y el ritmo fue más rápido.</p>
    <p>El texto, los actores, la música y las luces eran los mismos, pero Lucía tiene la sensación de haber visto tres funciones distintas. Esa es la magia y la fragilidad de las <b>artes escénicas</b>: ocurren una sola vez, ante unas personas concretas, y después solo quedan en la memoria de quienes estaban allí.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué son las artes escénicas",
      html: `<p>Las <b>artes escénicas</b> son las que se crean para ser representadas <b>en vivo</b> ante un público, en un espacio y un tiempo compartidos. Su materia principal es el <b>cuerpo humano</b> en acción: lo que el intérprete hace, dice, canta o baila.</p>
      <p>Las principales son el <b>teatro</b>, la <b>danza</b> y el <b>espectáculo musical</b> (ópera, zarzuela, musical), junto a formas como el circo, los títeres, la performance o el teatro de calle. A diferencia de la pintura o el cine, la obra no queda fijada en un objeto: <mark>existe mientras se representa</mark>.</p>`,
      svg: B.estrella("Disciplinas de las artes escénicas", "Artes escénicas", ["Teatro", "Danza", "Ópera", "Musical", "Circo", "Performance"]),
    },
    {
      h: "El hecho escénico",
      html: `<p>Llamamos <b>hecho escénico</b> al encuentro entre unos <b>intérpretes</b> que actúan y un <b>público</b> que mira, en el mismo lugar y al mismo tiempo. Si falta uno de los dos, no hay espectáculo: un ensayo sin público es preparación; un público sin intérpretes, una sala vacía.</p>
      <p>Entre escena y sala se crea una corriente de <b>acción y reacción</b>: la risa, el silencio o el aplauso cambian el ritmo de los intérpretes. Por eso se dice que el público también «hace» la función.</p>`,
      svg: hecho,
    },
    {
      h: "Un arte efímero y en directo",
      html: `<p>Las artes escénicas son <b>efímeras</b>: cada representación es irrepetible. Aunque se haga la misma obra cien noches, ninguna función es idéntica a otra, porque cambian los cuerpos, las energías y el público.</p>
      <p>Hoy muchas funciones se graban o se emiten en directo por internet, y eso ayuda a difundirlas y a estudiarlas. Pero la grabación es un <b>documento</b> de la obra, no la obra: se pierde la presencia física, el riesgo del directo y la relación con la sala.</p>`,
      svg: B.comparar("Función en directo frente a grabación", ["En directo", ["presencia física", "irrepetible", "riesgo y error", "relación con la sala"]], ["Grabación", ["imagen en pantalla", "se repite igual", "montaje cerrado", "espectador aislado"]]),
      video: { id: "hUZZ7WTThLo", titulo: "ARTES ESCÉNICAS", canal: "Mariangel Sánchez", vistas: 52174 },
    },
    {
      h: "Los elementos del espectáculo",
      html: `<p>Todo espectáculo combina unos elementos básicos. El <b>intérprete</b> (actor, actriz, bailarín, cantante) y el <b>público</b>. El <b>espacio</b>: un teatro, una plaza, un patio. El <b>tiempo</b> de la función. Y casi siempre un <b>texto</b> dramático, una <b>coreografía</b> o una <b>partitura</b> que sirven de punto de partida.</p>
      <p>A ellos se suman los lenguajes de la puesta en escena: <b>escenografía</b>, <b>vestuario</b>, <b>maquillaje</b>, <b>iluminación</b> y <b>sonido</b>. Una obra escénica es, por tanto, un arte de síntesis que reúne la palabra, el movimiento, la música y la imagen.</p>`,
      svg: B.cajas("Elementos del espectáculo", [["Intérprete", "cuerpo y voz"], ["Público", "mira y reacciona"], ["Espacio", "dónde ocurre"], ["Texto o partitura", "punto de partida"]]),
    },
    {
      h: "Teatro, danza y música en escena",
      html: `<p>Cada disciplina pone el acento en un lenguaje. En el <b>teatro</b> manda la <b>acción dramática</b>: personajes en conflicto que hablan y actúan. En la <b>danza</b>, el <b>movimiento</b> del cuerpo en el espacio y el ritmo, a menudo sin palabras. En el <b>espectáculo musical</b>, la <b>música</b> y el canto llevan la historia.</p>
      <p>Las fronteras no son rígidas. Hay teatro físico casi sin texto, danza-teatro que cuenta historias, musicales donde se baila tanto como se canta y espectáculos que mezclan circo, vídeo y música en directo.</p>`,
      svg: B.rejilla("Disciplinas y su lenguaje principal", ["Disciplina", "Lenguaje", "Ejemplo"], [["Teatro", "palabra y acción", "Bodas de sangre"], ["Danza", "movimiento", "El lago de los cisnes"], ["Ópera", "canto", "Carmen"], ["Musical", "canto y baile", "Los Miserables"], ["Circo", "destreza", "acrobacia"]]),
    },
    {
      h: "Funciones de las artes escénicas",
      html: `<p>Desde sus orígenes en los <b>rituales</b>, las artes escénicas han tenido muchas funciones: <b>celebrar</b> (fiestas, ceremonias), <b>entretener</b>, <b>educar</b> y transmitir valores, <b>criticar</b> el poder o la sociedad y <b>expresar</b> emociones colectivas.</p>
      <p>Hoy también sirven para la <b>inclusión</b> y la convivencia (teatro social, teatro en hospitales o prisiones) y para el desarrollo personal: hacer teatro o danza mejora la expresión, la empatía, la memoria y la confianza.</p>`,
      svg: B.ciclo("Funciones de las artes escénicas", "escena", ["Celebrar", "Entretener", "Educar", "Criticar"]),
    },
    {
      h: "Las artes escénicas en España",
      html: `<p>España tiene una gran tradición escénica: el <b>teatro del Siglo de Oro</b> (Lope de Vega, Calderón), la <b>zarzuela</b>, el <b>flamenco</b> (Patrimonio de la Humanidad desde 2010) y autores como <b>Federico García Lorca</b>. Hay compañías públicas como el Centro Dramático Nacional, la Compañía Nacional de Danza o el Ballet Nacional de España.</p>
      <p>Festivales como el de <b>Teatro Clásico de Almagro</b> o el de <b>Mérida</b>, que usa el teatro romano de hace dos mil años, acercan cada verano estos espectáculos a miles de personas de todas las edades.</p>`,
      svg: B.cajas("Tradiciones escénicas españolas", [["Siglo de Oro", "comedia nueva"], ["Zarzuela", "teatro con música"], ["Flamenco", "cante, toque y baile"], ["Festivales", "Almagro · Mérida"]]),
    },
    {
      h: "Oficios y estudios",
      html: `<p>Detrás de cada función trabajan muchas personas: <b>intérpretes</b>, <b>dramaturgos</b> y coreógrafos, <b>directores</b>, escenógrafos, figurinistas, técnicos de luz y sonido, regidores y productores. Es un sector que combina creación, técnica y gestión.</p>
      <p>Tras el Bachillerato de Artes se puede estudiar en las <b>Escuelas Superiores de Arte Dramático</b> (interpretación, dirección escénica y dramaturgia, escenografía), en los <b>Conservatorios Superiores de Danza</b> y de Música, o grados universitarios y ciclos de Formación Profesional de técnicas del espectáculo.</p>`,
      svg: B.flujo("Del aula a la profesión", ["Bachillerato de Artes", "Escuela de Arte Dramático o Conservatorio", "Grado o Formación Profesional", "Compañías, teatros, festivales"]),
      video: { id: "CMuuvZVhSvA", titulo: "¿Quieres estudiar artes escénicas? Esto es todo lo que debes saber", canal: "MásEducación", vistas: 85500 },
    },
  ],
  figura: {
    titulo: "Las artes escénicas en cuatro claves",
    items: [["En vivo", "●", "intérpretes y", "público juntos"], ["Efímeras", "⧗", "cada función", "es única"], ["Síntesis", "+", "palabra, cuerpo,", "música e imagen"], ["Colectivas", "♣", "muchos oficios", "en equipo"]],
  },
  video: { id: "OdzNr0pzoC0", titulo: "¿Qué es el TEATRO y cuáles son sus elementos? Características y tipos", canal: "Astraway", vistas: 435989 },
  quiz: [
    ["Las artes escénicas se caracterizan por…", ["quedar fijadas en un objeto", "representarse en vivo ante un público", "no usar el cuerpo", "hacerse siempre en un teatro"], 1, "Intérpretes y público comparten espacio y tiempo."],
    ["El hecho escénico es…", ["el texto de la obra", "el encuentro entre intérpretes y público", "el edificio del teatro", "el ensayo general"], 1, "Sin uno de los dos no hay espectáculo."],
    ["Decimos que son artes efímeras porque…", ["son baratas", "cada función es irrepetible", "duran poco en cartel", "no tienen texto"], 1, "Ninguna función es idéntica a otra."],
    ["Una grabación de una obra es…", ["la misma obra", "un documento o registro de la obra", "una obra mejor", "un ensayo"], 1, "Se pierde la presencia y el directo."],
    ["¿Qué lenguaje domina en la danza?", ["La palabra", "El movimiento", "La escenografía", "El texto escrito"], 1, "El cuerpo en el espacio y el ritmo."],
    ["La zarzuela es…", ["una danza", "teatro con partes habladas y cantadas", "un tipo de circo", "un mimo"], 1, "Género lírico español."],
    ["¿Qué elemento NO es imprescindible en todo espectáculo?", ["Intérprete", "Público", "Telón", "Espacio"], 2, "Hay espectáculos sin telón, en la calle o en arena."],
    ["El flamenco es Patrimonio de la Humanidad desde…", ["1992", "2010", "2001", "1975"], 1, "Declarado por la UNESCO en 2010."],
    ["Una función de las artes escénicas desde el origen es…", ["vender entradas", "celebrar rituales y fiestas", "sustituir al cine", "grabar vídeos"], 1, "Nacen ligadas al rito."],
    ["¿Dónde se estudia interpretación en España tras el Bachillerato?", ["En una Escuela Superior de Arte Dramático", "Solo en la universidad de Medicina", "En la autoescuela", "No se puede estudiar"], 0, "Enseñanzas artísticas superiores."],
  ],
  examen: [
    ["Una compañía representa la misma obra 40 noches. ¿Por qué cada función es distinta?", ["Porque cambian el texto cada día", "Porque cambian el público, la energía y los cuerpos en directo", "Porque cambian de teatro", "No es distinta"], 1, "El directo es irrepetible."],
    ["Un espectáculo sin palabras en el que los intérpretes cuentan una historia con el cuerpo es…", ["ópera", "danza-teatro o teatro físico", "zarzuela", "radioteatro"], 1, "Mezcla movimiento y acción dramática."],
    ["El público se ríe y el actor alarga la pausa antes de la siguiente frase. Es un ejemplo de…", ["acción y reacción entre escena y sala", "error de dirección", "texto dramático", "escenografía"], 0, "El público influye en la función."],
    ["¿Qué oficio diseña el vestuario de un espectáculo?", ["El regidor", "El figurinista", "El dramaturgo", "El coreógrafo"], 1, "Figurinista o diseñador de vestuario."],
    ["Un taller de teatro en un hospital cumple sobre todo una función…", ["comercial", "social y de inclusión", "publicitaria", "de crítica política"], 1, "Teatro social."],
  ],
  feynman: ["Qué hace que algo sea un arte escénico", "Qué es el hecho escénico", "Por qué la grabación no es la obra", "Qué funciones han tenido las artes escénicas"],
  mapa: ["LAS ARTES ESCÉNICAS", [["Qué son", "arte en vivo ante un público"], ["Elementos", "intérprete · público · espacio · tiempo"], ["Disciplinas", "teatro · danza · música · circo"], ["Funciones", "celebrar · entretener · educar · criticar"]]],
  tarjetas: [
    ["Artes escénicas", "Artes creadas para representarse en vivo ante un público."],
    ["Hecho escénico", "Encuentro entre intérpretes y público en un espacio y tiempo compartidos."],
    ["Efímero", "Que ocurre una vez y no se repite igual."],
    ["Intérprete", "Persona que actúa, baila o canta en escena."],
    ["Función", "Cada una de las representaciones de un espectáculo."],
    ["Puesta en escena", "Conjunto de decisiones para llevar una obra al escenario."],
    ["Performance", "Acción artística en vivo, a menudo sin personajes ni texto previo."],
    ["Arte de síntesis", "Arte que reúne varios lenguajes: palabra, cuerpo, música e imagen."],
  ],
  ejemplos: [
    ["Decide si estos casos son artes escénicas: un musical en un teatro, una película en el cine y un espectáculo de clown en la plaza.", ["Musical: intérpretes en vivo ante público. Sí.", "Película: imágenes grabadas, sin presencia física. No (es arte audiovisual).", "Clown en la plaza: intérprete en vivo ante público, aunque sea en la calle. Sí."], "Musical y clown sí; la película no."],
    ["Identifica los elementos del hecho escénico en un recital de flamenco en un patio.", ["Intérpretes: cantaor, guitarrista y bailaora.", "Público: vecinos sentados en el patio; espacio: el patio; tiempo: la hora del recital.", "Punto de partida: los palos y letras del flamenco (partitura oral)."], "Están todos: intérpretes, público, espacio, tiempo y una base musical."],
    ["Explica qué función cumple una obra satírica sobre los políticos.", ["Usa el humor para señalar defectos del poder.", "Invita al público a reflexionar y a reírse de lo que critica.", "Además entretiene."], "Función crítica (y de entretenimiento)."],
  ],
  errores: [
    "Pensar que una grabación de una obra es lo mismo que verla en directo.",
    "Creer que solo es teatro lo que ocurre en un edificio con telón.",
    "Olvidar que el público forma parte del hecho escénico.",
    "Reducir las artes escénicas al trabajo de los actores, sin los oficios técnicos.",
  ],
  ejercicios: {
    b: [
      ["Define artes escénicas.", "Artes que se crean para representarse en vivo ante un público, en un espacio y tiempo compartidos."],
      ["Nombra cinco disciplinas escénicas.", "Teatro, danza, ópera, musical, zarzuela, circo, títeres o performance."],
      ["¿Qué significa que sean efímeras?", "Que cada representación ocurre una sola vez y no se repite exactamente igual."],
      ["Cita cuatro elementos del espectáculo.", "Intérprete, público, espacio y tiempo (y texto, coreografía o partitura)."],
    ],
    m: [
      ["Explica la relación de acción y reacción entre escena y sala con un ejemplo.", "Si el público ríe, el actor espera a que acabe la risa antes de seguir; el silencio tenso hace que se alargue una pausa."],
      ["Compara teatro, danza y ópera según su lenguaje principal.", "Teatro: palabra y acción; danza: movimiento; ópera: canto y música."],
      ["¿Por qué decimos que las artes escénicas son un arte de síntesis?", "Porque reúnen palabra, cuerpo, música, imagen, luz y espacio en una sola obra."],
      ["Indica tres funciones de las artes escénicas con un ejemplo de cada una.", "Celebrar (procesión o fiesta), entretener (comedia), criticar (sátira política), educar (teatro escolar)."],
    ],
    a: [
      ["Asiste o mira un fragmento de un espectáculo y describe sus elementos y su función principal.", "Respuesta abierta. Debe identificar intérpretes, público, espacio, lenguajes y una función justificada."],
      ["Debate: ¿un concierto de rock es un arte escénico? Argumenta a favor y en contra.", "Respuesta abierta. A favor: directo, público, puesta en escena; en contra: el centro es la música, no la acción dramática."],
    ],
  },
  glosario: [
    ["Escena", "Lugar donde actúan los intérpretes; también, parte de una obra."],
    ["Sala", "Lugar del público en un teatro."],
    ["Representación", "Acto de interpretar una obra ante el público."],
    ["Dramaturgo", "Autor de textos teatrales."],
    ["Coreógrafo", "Creador de los movimientos de una danza."],
    ["Figurinista", "Diseñador del vestuario de un espectáculo."],
    ["Compañía", "Grupo estable de artistas que crean y representan espectáculos."],
    ["Teatro social", "Teatro hecho con y para colectivos con un fin de inclusión o cambio."],
  ],
  situacion: {
    titulo: "Un minuto de escena",
    reto: "Crear en grupo una pieza escénica de un minuto en un rincón del instituto.",
    pasos: [
      "Elegid un espacio (pasillo, escalera, patio) y quién será vuestro público.",
      "Decidid si la pieza se apoya más en la palabra, el movimiento o la música.",
      "Ensayadla tres veces y representadla dos veces ante públicos distintos.",
      "Anotad qué cambió entre las dos funciones y por qué.",
    ],
    producto: "Pieza de un minuto representada dos veces y un breve diario de las diferencias entre funciones.",
    evaluacion: [
      "La pieza es clara y se adapta al espacio.",
      "Hay intención en el uso del cuerpo y la voz.",
      "El grupo coopera y respeta los tiempos.",
      "El diario explica bien el carácter efímero del directo.",
    ],
  },
  familias: [
    "Id juntos a ver un espectáculo en directo, aunque sea gratuito o en la calle.",
    "Comentad después qué os hizo reír, emocionaros o pensar.",
    "Preguntadle qué diferencia hay entre ver teatro en vivo y en una pantalla.",
    "Consultad la programación de teatros y festivales cercanos.",
  ],
  saberes: "Las artes escénicas: concepto y características (directo, efímero, síntesis de lenguajes); el hecho escénico y sus elementos; disciplinas (teatro, danza, espectáculo musical, circo, performance); funciones sociales; tradición escénica española; profesiones y estudios.",
  ideas: [
    "Ver el mismo fragmento grabado y representado en el aula y comparar sensaciones.",
    "Elaborar un mapa de los teatros, festivales y compañías de la comunidad.",
    "Entrevistar a una persona que trabaje en un oficio escénico.",
    "Hacer un mural con las disciplinas escénicas y un ejemplo de cada una.",
  ],
  fuentes: [
    { t: "Artes escénicas, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Artes_esc%C3%A9nicas" },
    { t: "Instituto Nacional de las Artes Escénicas y de la Música (INAEM)", url: "https://www.culturaydeporte.gob.es/cultura/areas/artes-escenicas.html" },
  ],
});
