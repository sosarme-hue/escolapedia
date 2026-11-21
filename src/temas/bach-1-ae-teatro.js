// Artes Escénicas I, 1º de Bachillerato. Tema 2 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ae");
const { marco, t, ln, rc, ci, pa } = B;

// Teatro griego visto desde arriba: theatron, orchestra y skené.
const griego = marco("Partes del teatro griego: graderío, orquesta y escena",
  `${pa("M24 150 A106 106 0 0 1 236 150", 'fill="var(--sun)" fill-opacity=".18" stroke="var(--sun)" stroke-width="2"')}
  ${[0, 1, 2, 3].map((i) => pa(`M${34 + i * 10} 150 A${96 - i * 10} ${96 - i * 10} 0 0 1 ${226 - i * 10} 150`, 'fill="none" stroke="var(--sun)" stroke-width="1" stroke-opacity=".7"')).join("")}
  ${ci(130, 130, 32, 'fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="2"')}
  ${rc(70, 154, 120, 20, 'rx="3" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2"')}
  ${t(130, 32, "Theatron (graderío)", { bold: 1, color: "var(--sun)", maxW: 140 })}${t(130, 128, "Orchestra", { bold: 1, color: "var(--leaf)", fs: 10 })}${t(130, 140, "coro", { fs: 9, color: "var(--muted)" })}
  ${t(130, 168, "Skené (escena)", { fs: 9.5, bold: 1, color: "var(--pen)", maxW: 110 })}`);

module.exports = B.tema({
  titulo: "El teatro",
  minutos: 60,
  objetivos: [
    "Definir el teatro y reconocer sus elementos: texto, acción dramática, personajes y conflicto",
    "Distinguir los grandes géneros dramáticos: tragedia, comedia y drama",
    "Recorrer los momentos clave de la historia del teatro occidental y español",
    "Leer un texto teatral identificando diálogo, acotaciones y estructura",
  ],
  claves: ["teatro", "acción dramática", "conflicto", "tragedia", "comedia", "drama", "acotación", "Siglo de Oro"],
  pregunta: {
    texto: "¿Qué tienen en común una tragedia griega de hace 2.500 años y una comedia de hoy?",
    respuesta: "Las dos ponen en escena <mark>personajes en conflicto</mark> ante un público. Cambian los temas, el lenguaje y los escenarios, pero el motor del teatro sigue siendo la <b>acción dramática</b>.",
  },
  lectura: {
    titulo: "Una fiesta para el dios",
    html: `<p>Atenas, siglo V antes de Cristo. Es primavera y la ciudad celebra las fiestas en honor de Dioniso. Desde el amanecer, miles de ciudadanos suben a la ladera de la Acrópolis y se sientan en las gradas de piedra. Abajo, en un círculo de tierra, un coro de quince hombres canta y baila; delante, tres actores con máscaras interpretan a reyes, dioses y héroes.</p>
    <p>Durante tres días se representan tragedias y comedias, y un jurado elige la mejor. Los espectadores lloran con Edipo y se ríen con las burlas de Aristófanes a los políticos de la ciudad. Sin saberlo, están viviendo el nacimiento del <b>teatro</b> tal como lo conocemos.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es el teatro",
      html: `<p>El <b>teatro</b> es el arte de representar historias ante un público mediante actores que encarnan <b>personajes</b>. La palabra viene del griego <i>theatron</i>, «lugar para mirar». Su núcleo es la <b>acción dramática</b>: lo que los personajes hacen para conseguir algo.</p>
      <p>Sin <b>conflicto</b> no hay teatro. Un personaje quiere algo y otro personaje, la sociedad o él mismo se lo impide. El choque de fuerzas genera tensión y empuja la historia hacia delante. Por eso, al analizar una obra, la primera pregunta es siempre: ¿quién quiere qué y quién se lo impide?</p>`,
      svg: B.flujo("Motor de la acción dramática", ["Un personaje quiere algo", "Algo o alguien se opone: conflicto", "La tensión crece", "Desenlace: lo consigue o fracasa"]),
    },
    {
      h: "El texto teatral",
      html: `<p>Casi todo el teatro parte de un <b>texto dramático</b> escrito para ser representado. Tiene dos tipos de texto: el <b>diálogo</b> (lo que dicen los personajes, a veces en forma de monólogo o aparte) y las <b>acotaciones</b>, indicaciones del autor sobre el lugar, los gestos o la luz, normalmente en cursiva y entre paréntesis.</p>
      <p>Se organiza en <b>actos</b> (grandes partes, separadas a menudo por un descanso) y <b>escenas</b> (cambian cuando entra o sale un personaje). Su estructura clásica es <b>planteamiento, nudo y desenlace</b>.</p>`,
      svg: B.capas("Estructura del texto teatral", [["Obra", "la pieza completa"], ["Actos", "grandes partes"], ["Escenas", "entra o sale alguien"], ["Diálogo", "lo que dicen"], ["Acotaciones", "cómo y dónde"]]),
    },
    {
      h: "Los géneros dramáticos",
      html: `<p>La <b>tragedia</b> presenta héroes enfrentados a un destino que no pueden vencer; termina en desgracia y busca la <b>catarsis</b>, la purificación del público a través de la compasión y el miedo. La <b>comedia</b> muestra personajes corrientes con defectos y termina bien; usa el humor para entretener y criticar.</p>
      <p>El <b>drama</b> mezcla lo serio y lo cómico, como la vida misma. Hay además géneros menores: el entremés, la farsa, el sainete o el monólogo cómico.</p>`,
      svg: B.rejilla("Géneros dramáticos", ["Género", "Personajes", "Final"], [["Tragedia", "héroes, nobles", "desgraciado"], ["Comedia", "gente común", "feliz"], ["Drama", "mezcla", "variable"], ["Farsa", "caricaturas", "cómico"]]),
      video: { id: "xXqjFZEaj3U", titulo: "GÉNERO DRAMÁTICO: descubre su estructura y subgéneros: tragedia, comedia y drama", canal: "Natalia López EducaDif", vistas: 175023 },
    },
    {
      h: "Grecia y Roma",
      html: `<p>El teatro occidental nace en <b>Grecia</b> a partir de los cantos rituales a Dioniso. Esquilo, Sófocles y Eurípides escriben tragedias (<i>Edipo rey</i>, <i>Antígona</i>, <i>Medea</i>) y Aristófanes, comedias. Los actores llevan <b>máscaras</b> y el <b>coro</b> comenta la acción.</p>
      <p>El edificio griego aprovecha una ladera: el <b>graderío</b> (theatron), la <b>orquesta</b> circular para el coro y la <b>escena</b> (skené) al fondo. <b>Roma</b> copia el modelo, lo construye en piedra sobre terreno llano y prefiere la comedia de Plauto y Terencio y los grandes espectáculos.</p>`,
      svg: griego,
      video: { id: "adTRuyQUKB4", titulo: "Historia del Teatro 1. Del ritual al teatro", canal: "Jc m edu", vistas: 136111 },
    },
    {
      h: "De la Edad Media al Renacimiento",
      html: `<p>En la <b>Edad Media</b> el teatro renace dentro de las iglesias con dramas religiosos y sale después a las plazas en <b>carros</b> y tablados. En el <b>Renacimiento</b> italiano surge la <b>commedia dell'arte</b>: compañías ambulantes que improvisan sobre un guion con personajes fijos y máscaras (Arlequín, Pantalone, Colombina).</p>
      <p>En Inglaterra, <b>Shakespeare</b> escribe para teatros públicos como el Globe tragedias como <i>Hamlet</i> o <i>Macbeth</i> y comedias como <i>El sueño de una noche de verano</i>.</p>`,
      svg: B.epocas("Momentos de la historia del teatro", [["s. V a. C.", "Grecia"], ["Edad Media", "teatro religioso"], ["s. XVI", "commedia dell'arte"], ["s. XVII", "Siglo de Oro"], ["s. XX", "vanguardias"]]),
    },
    {
      h: "El Siglo de Oro español",
      html: `<p>En los siglos XVI y XVII España vive una edad dorada del teatro. Las obras se representan en los <b>corrales de comedias</b>, patios de vecinos con un tablado al fondo, como el que se conserva en <b>Almagro</b>. El público, de todas las clases sociales, era ruidoso y exigente.</p>
      <p><b>Lope de Vega</b> crea la <b>comedia nueva</b>: tres actos, mezcla de lo trágico y lo cómico, versos variados y el personaje del <b>gracioso</b>. Le siguen <b>Tirso de Molina</b> (<i>El burlador de Sevilla</i>) y <b>Calderón de la Barca</b> (<i>La vida es sueño</i>).</p>`,
      svg: B.cajas("La comedia nueva de Lope", [["3 actos", "no 5 como los clásicos"], ["Mezcla", "trágico y cómico"], ["Verso", "variado y musical"], ["Gracioso", "criado cómico"]]),
    },
    {
      h: "El teatro moderno y contemporáneo",
      html: `<p>En el siglo XIX triunfa el <b>realismo</b>: decorados que imitan habitaciones y personajes cotidianos (Ibsen, Chéjov). En el XX llegan las rupturas: el <b>teatro épico</b> de Brecht, que quiere que el público piense y no solo se emocione; el <b>teatro del absurdo</b> de Beckett; y en España <b>Valle-Inclán</b> con el esperpento y <b>García Lorca</b> con <i>La casa de Bernarda Alba</i>.</p>
      <p>Hoy conviven el teatro de texto con formas nuevas: teatro físico, documental, inmersivo o con tecnología digital.</p>`,
      svg: B.cajas("Corrientes del teatro moderno", [["Realismo", "Ibsen · Chéjov"], ["Teatro épico", "Brecht"], ["Absurdo", "Beckett · Ionesco"], ["España", "Valle-Inclán · Lorca"]]),
      video: { id: "600CSMfUhnU", titulo: "Comedia del Arte", canal: "Tresheridas1", vistas: 114538 },
    },
    {
      h: "Leer un texto teatral",
      html: `<p>Un texto teatral se lee pensando en la escena. Primero, localiza <b>quién</b> habla, <b>dónde</b> y <b>cuándo</b> (lo dicen las acotaciones). Después, busca el <b>conflicto</b>: qué quiere cada personaje y qué se lo impide. Por último, imagina cómo se diría y se movería cada réplica.</p>
      <p>Al leer en voz alta en grupo, conviene marcar las pausas y los cambios de intención. El texto es una <mark>partitura</mark>: solo cobra vida completa cuando se representa, y cada director puede leerla de una forma distinta.</p>`,
      svg: B.flujo("Pasos para leer teatro", ["Personajes, lugar y tiempo", "Qué quiere cada uno", "Dónde está el conflicto", "Cómo se diría y se movería"]),
    },
  ],
  figura: {
    titulo: "El teatro en cuatro claves",
    items: [["Personajes", "☺", "actores que", "los encarnan"], ["Conflicto", "⚡", "fuerzas que", "chocan"], ["Texto", "✎", "diálogo y", "acotaciones"], ["Público", "◉", "mira y", "reacciona"]],
  },
  video: { id: "VeDBN1mX_Ec", titulo: "Historia del Teatro", canal: "Luichi Tejeda Parra", vistas: 747624 },
  quiz: [
    ["El motor del teatro es…", ["la escenografía", "la acción dramática basada en un conflicto", "el telón", "la música"], 1, "Personajes que quieren algo y encuentran oposición."],
    ["Las acotaciones son…", ["las partes cantadas", "indicaciones del autor sobre lugar, gestos o luz", "los descansos", "los aplausos"], 1, "Van en cursiva o entre paréntesis."],
    ["Una escena cambia cuando…", ["cae el telón", "entra o sale un personaje", "se apagan las luces", "habla el público"], 1, "Unidad menor que el acto."],
    ["La catarsis es propia de…", ["la comedia", "la tragedia", "la farsa", "el sainete"], 1, "Purificación del público por compasión y miedo."],
    ["El teatro occidental nace en…", ["Roma", "Grecia", "Egipto", "Inglaterra"], 1, "En las fiestas a Dioniso."],
    ["La parte circular del teatro griego donde actuaba el coro es…", ["la skené", "la orchestra", "el theatron", "el proscenio"], 1, "Orchestra significa lugar para danzar."],
    ["La commedia dell'arte se caracteriza por…", ["textos en verso fijo", "improvisación sobre personajes fijos con máscara", "temas religiosos", "ser solo cantada"], 1, "Arlequín, Pantalone, Colombina…"],
    ["Lope de Vega dividió la comedia nueva en…", ["cinco actos", "tres actos", "un acto", "dos partes"], 1, "Frente a los cinco del teatro clásico."],
    ["Los corrales de comedias eran…", ["teatros de ópera", "patios con un tablado donde se representaba", "iglesias", "plazas de toros"], 1, "Se conserva el de Almagro."],
    ["¿Quién escribió La casa de Bernarda Alba?", ["Calderón", "Valle-Inclán", "García Lorca", "Lope de Vega"], 2, "Federico García Lorca, 1936."],
  ],
  examen: [
    ["En una obra, una hija quiere casarse y su madre se lo prohíbe. Esto es…", ["la acotación", "el conflicto", "el desenlace", "el coro"], 1, "Deseo frente a oposición."],
    ["«(Entra Juan, empapado, y deja el paraguas en el suelo.)» es…", ["un aparte", "una acotación", "un monólogo", "un diálogo"], 1, "Indicación escénica del autor."],
    ["Una obra con personajes corrientes, enredos y final feliz es…", ["tragedia", "comedia", "auto sacramental", "drama épico"], 1, "Rasgos de la comedia."],
    ["¿Qué autor quería que el público reflexionara en lugar de identificarse con los personajes?", ["Shakespeare", "Brecht", "Sófocles", "Lope"], 1, "Teatro épico y distanciamiento."],
    ["¿Qué personaje de la comedia nueva es un criado que hace reír?", ["El galán", "El gracioso", "El coro", "El barba"], 1, "Contrapunto cómico del galán."],
  ],
  feynman: ["Qué es la acción dramática y el conflicto", "Qué diferencia hay entre diálogo y acotación", "Cómo era el teatro griego", "Qué aportó Lope de Vega"],
  mapa: ["EL TEATRO", [["Elementos", "personajes · conflicto · texto · público"], ["Géneros", "tragedia · comedia · drama"], ["Historia", "Grecia · Edad Media · Siglo de Oro · s. XX"], ["Lectura", "quién · qué quiere · conflicto"]]],
  tarjetas: [
    ["Acción dramática", "Lo que hacen los personajes para lograr sus objetivos."],
    ["Conflicto", "Choque entre fuerzas opuestas que mueve la obra."],
    ["Acotación", "Indicación del autor sobre la escena, en cursiva o entre paréntesis."],
    ["Acto", "Gran parte de una obra teatral."],
    ["Tragedia", "Género con héroes vencidos por el destino y final desgraciado."],
    ["Comedia", "Género con personajes comunes, humor y final feliz."],
    ["Commedia dell'arte", "Teatro italiano de improvisación con personajes fijos y máscaras."],
    ["Corral de comedias", "Patio donde se representaba el teatro del Siglo de Oro."],
  ],
  ejemplos: [
    ["Encuentra el conflicto en Romeo y Julieta.", ["Romeo y Julieta quieren estar juntos.", "Sus familias, los Montesco y los Capuleto, son enemigas.", "El amor choca con el odio familiar y termina en tragedia."], "Conflicto: amor de los jóvenes frente al odio de las familias."],
    ["Clasifica: «Pedro: (Mirando por la ventana.) Ya llega el tren.»", ["«Pedro:» indica quién habla.", "«(Mirando por la ventana.)» es una acotación.", "«Ya llega el tren.» es diálogo."], "Nombre del personaje, acotación y réplica de diálogo."],
    ["Explica por qué La vida es sueño no es una comedia en sentido moderno.", ["Trata temas serios: libertad, destino y sentido de la vida.", "En el Siglo de Oro «comedia» significaba cualquier obra teatral.", "Mezcla momentos graves y cómicos (el gracioso Clarín)."], "Es un drama filosófico; «comedia» era el nombre genérico de la obra teatral."],
  ],
  errores: [
    "Confundir acotaciones con diálogo al leer en voz alta.",
    "Pensar que «comedia» en el Siglo de Oro significa siempre obra de risa.",
    "Creer que el teatro necesita siempre un edificio con telón.",
    "Leer el texto teatral como una novela, sin imaginar la escena.",
  ],
  ejercicios: {
    b: [
      ["¿Qué significa la palabra «teatro» en griego?", "Theatron: lugar para mirar."],
      ["Nombra las tres partes del teatro griego.", "Theatron (graderío), orchestra (espacio del coro) y skené (escena)."],
      ["Diferencia acto y escena.", "El acto es una gran parte de la obra; la escena cambia cuando entra o sale un personaje."],
      ["Cita tres autores del Siglo de Oro.", "Lope de Vega, Tirso de Molina y Calderón de la Barca."],
    ],
    m: [
      ["Compara tragedia y comedia en tres rasgos.", "Tragedia: héroes, destino, final desgraciado. Comedia: gente común, humor, final feliz."],
      ["Explica qué era la commedia dell'arte y nombra dos personajes.", "Teatro italiano de compañías ambulantes que improvisaban sobre un guion con personajes fijos: Arlequín y Pantalone."],
      ["¿Cómo eran los corrales de comedias y su público?", "Patios entre casas con un tablado al fondo; el público, de todas las clases, era ruidoso y exigente."],
      ["Resume qué cambia en el teatro del siglo XX.", "Rupturas con el realismo: teatro épico de Brecht, absurdo de Beckett, esperpento de Valle-Inclán, búsquedas formales nuevas."],
    ],
    a: [
      ["Lee una escena breve de un texto teatral y señala personajes, conflicto, acotaciones y cómo la pondrías en escena.", "Respuesta abierta. Debe distinguir diálogo y acotación y justificar las decisiones escénicas."],
      ["Escribe una escena de una página con un conflicto claro, diálogo y al menos tres acotaciones.", "Respuesta abierta. Se valora un conflicto claro y el uso correcto de las acotaciones."],
    ],
  },
  glosario: [
    ["Personaje", "Ser ficticio que actúa en la obra."],
    ["Réplica", "Cada intervención de un personaje en el diálogo."],
    ["Monólogo", "Parlamento largo de un personaje que habla solo."],
    ["Aparte", "Lo que dice un personaje al público sin que lo oigan los demás."],
    ["Coro", "Grupo que en el teatro griego canta y comenta la acción."],
    ["Máscara", "Objeto que cubre el rostro y define al personaje."],
    ["Gracioso", "Criado cómico del teatro del Siglo de Oro."],
    ["Esperpento", "Estilo de Valle-Inclán que deforma la realidad para criticarla."],
  ],
  situacion: {
    titulo: "Lectura dramatizada",
    reto: "Preparar en grupo la lectura dramatizada de una escena de un clásico.",
    pasos: [
      "Elegid una escena de Lope, Calderón, Shakespeare o Lorca.",
      "Analizad personajes, conflicto y acotaciones.",
      "Repartid los papeles y ensayad la lectura con intención, pausas y miradas.",
      "Presentadla ante la clase y explicad en un minuto el contexto de la obra.",
    ],
    producto: "Lectura dramatizada de 3 a 5 minutos con una breve introducción.",
    evaluacion: [
      "La lectura transmite el conflicto.",
      "Se respetan las acotaciones y el ritmo.",
      "La voz se oye y es expresiva.",
      "La introducción sitúa la obra en su época.",
    ],
  },
  familias: [
    "Leed juntos en voz alta una escena corta, cada uno con un personaje.",
    "Buscad si hay un corral de comedias o un teatro histórico cerca y visitadlo.",
    "Ved una adaptación de una obra clásica y comentad su conflicto.",
    "Preguntadle qué personaje de teatro le gustaría interpretar y por qué.",
  ],
  saberes: "El teatro: acción dramática, conflicto, personajes; el texto dramático (diálogo, acotaciones, actos y escenas); géneros (tragedia, comedia, drama); historia: Grecia y Roma, Edad Media, commedia dell'arte, Shakespeare, Siglo de Oro, realismo y teatro del siglo XX.",
  ideas: [
    "Comparar una escena de tragedia y otra de comedia leídas en voz alta.",
    "Construir una maqueta de teatro griego o de corral de comedias.",
    "Improvisar con los personajes tipo de la commedia dell'arte.",
    "Asistir a una función de teatro clásico y analizarla en clase.",
  ],
  fuentes: [
    { t: "Teatro, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Teatro" },
    { t: "Corral de Comedias de Almagro", url: "https://www.corraldecomedias.com" },
  ],
});
