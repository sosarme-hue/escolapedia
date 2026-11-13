// Educación Física 4º ESO. Tema nivel libro. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, rueda, flujo, figCols, piramide, barras } = require("./_hum");
const { escalon, B, QS, EJ, EX, poses, rejilla, RD } = require("./_eso4L13");

module.exports = {
  materia: "Educación Física",
  curso: "4-eso",
  titulo: "Expresión corporal y danza",
  minutos: 110,
  objetivos: [
    "Comprender el cuerpo como medio de expresión y comunicación no verbal",
    "Utilizar los elementos del movimiento expresivo: cuerpo, espacio, tiempo, energía y relación",
    "Practicar técnicas de expresión: relajación, mimo, improvisación y dramatización",
    "Conocer y bailar danzas sociales, populares y del mundo, y crear una coreografía",
    "Realizar montajes de acrosport con seguridad y valorar la cooperación y la desinhibición",
  ],
  claves: ["expresión corporal", "comunicación no verbal", "Laban", "espacio", "ritmo", "coreografía", "acrosport", "portor", "ágil"],
  pregunta: {
    texto: "Si una persona te dice «estoy bien» con los brazos cruzados, la mirada en el suelo y la voz apagada, ¿la crees?",
    respuesta: "Probablemente no. Gran parte de lo que comunicamos lo transmite el <mark>cuerpo</mark>: la postura, los gestos, la mirada, la distancia o el tono de voz. Cuando las palabras y el cuerpo dicen cosas distintas, solemos creer al cuerpo. Aprender a usarlo y a leerlo es aprender a comunicarse mejor.",
  },
  lectura: {
    titulo: "Bailar para expresar lo que no se puede decir",
    html: `<p>Pina Bausch, una de las coreógrafas más influyentes del siglo XX, no preguntaba a sus bailarines «¿cómo te mueves?», sino «¿qué te mueve?». En sus ensayos les pedía que respondieran con el cuerpo a preguntas como «¿qué haces cuando tienes miedo?» o «¿cómo pides cariño?». De esas respuestas nacían sus obras, mezcla de danza, teatro y gestos cotidianos, en las que los espectadores se reconocían. Su idea era revolucionaria: no hace falta ser un virtuoso para bailar, porque el movimiento es una forma de expresar emociones que todos tenemos.</p><p>Esa idea está en la base de la expresión corporal. Desde las danzas rituales de la prehistoria hasta los bailes urbanos que se comparten hoy en las redes sociales, el ser humano siempre ha usado el cuerpo para comunicarse, celebrar, relacionarse y crear. En Educación Física, la expresión corporal no busca formar bailarines profesionales, sino que descubras las posibilidades expresivas de tu cuerpo, ganes confianza, colabores con los demás y disfrutes del movimiento con música. En este tema explorarás el lenguaje corporal, las técnicas expresivas, la danza y el acrosport.</p>`,
  },
  bloques: [
    B("1.1 El cuerpo como medio de expresión", `<p>La <b>expresión corporal</b> es la capacidad de comunicar ideas, emociones y sensaciones a través del <mark>movimiento, el gesto y la postura</mark>. En Educación Física se entiende como un contenido que desarrolla la creatividad, la desinhibición, el conocimiento de uno mismo y la relación con los demás.</p><p>Se suelen distinguir tres finalidades: <b>expresar</b> (manifestar hacia fuera lo que sentimos), <b>comunicar</b> (transmitir un mensaje a otra persona que lo interpreta) y <b>crear</b> (elaborar algo nuevo y original con el cuerpo, como una coreografía o una escena). También se diferencian la expresión <b>espontánea</b>, que surge sin preparación, y la expresión <b>elaborada</b>, que se ensaya y se presenta ante un público.</p><p>Practicar expresión corporal tiene muchos beneficios: mejora la <b>autoestima</b> y la confianza al actuar delante de otros; ayuda a reconocer y gestionar las <b>emociones</b>; desarrolla la <b>coordinación</b>, el equilibrio y el ritmo; fomenta la <b>cooperación</b> y la escucha; y es una fuente de disfrute. Para que funcione, el grupo debe crear un clima de <b>respeto</b>: nadie se ríe de nadie, todas las propuestas son válidas y cada uno avanza a su ritmo. Al principio puede dar vergüenza, pero con práctica y confianza el bloqueo desaparece.</p>`,
      rueda("Finalidades y beneficios", "CUERPO", [["expresar", "var(--red)"], ["comunicar", "var(--pen)"], ["crear", "var(--sun)"], ["autoestima", "var(--leaf)"], ["emociones", "var(--bac)"], ["cooperar", "var(--inf)"]], "var(--ink)")),
    B("1.2 La comunicación no verbal", `<p>Cuando nos comunicamos, transmitimos mucha información sin palabras. La <mark>comunicación no verbal</mark> incluye varios canales:</p>${tabla(["Canal", "Qué es", "Ejemplo"], [["Expresión facial", "movimientos de la cara: cejas, boca, ojos", "sonrisa, ceño fruncido"], ["Mirada", "dirección, duración, intensidad", "mirar a los ojos transmite atención"], ["Gestos", "movimientos de manos, brazos y cabeza", "pulgar arriba, encogerse de hombros"], ["Postura", "posición global del cuerpo", "erguida (seguridad), encogida (inseguridad)"], ["Proxémica", "uso de la distancia con los demás", "distancia íntima, personal, social y pública"], ["Paralenguaje", "cómo se dice: tono, volumen, ritmo, silencios", "hablar rápido y alto cuando estamos nerviosos"], ["Contacto físico", "tocar a otros", "dar la mano, un abrazo"]])}<p>El psicólogo Paul Ekman describió seis <b>emociones básicas</b> que se expresan con la cara de forma parecida en todas las culturas: alegría, tristeza, miedo, ira, sorpresa y asco. Sin embargo, muchos gestos <b>dependen de la cultura</b>: el gesto de «OK» o la distancia adecuada para hablar cambian de un país a otro. Saber leer el lenguaje no verbal nos ayuda a entender mejor a los demás, y ser conscientes del nuestro nos permite transmitir seguridad en una exposición oral o en una entrevista.</p>`,
      rejilla("Emociones básicas (Ekman)", [["Alegría", "sonrisa, ojos vivos"], ["Tristeza", "mirada baja"], ["Miedo", "ojos muy abiertos"], ["Ira", "ceño y mandíbula"], ["Sorpresa", "cejas arriba"], ["Asco", "nariz arrugada"]])),
    B("1.3 Los elementos del movimiento expresivo", `<p>El coreógrafo Rudolf von Laban estudió el movimiento humano y propuso analizarlo a partir de unos <mark>elementos</mark> que podemos combinar para expresar:</p>${tabla(["Elemento", "Posibilidades"], [["Cuerpo", "qué partes se mueven: todo el cuerpo o partes aisladas; acciones (girar, saltar, caer, extender, contraer)"], ["Espacio", "personal (kinesfera) o total; niveles alto, medio y bajo; direcciones; trayectorias rectas o curvas; tamaño amplio o reducido"], ["Tiempo", "velocidad (rápido o lento), ritmo, pausas, aceleraciones; con o sin música"], ["Energía o intensidad", "fuerte o suave, súbita o sostenida, directa o indirecta, pesada o ligera"], ["Relación", "solo, por parejas o en grupo; con objetos; acciones de imitar, contrastar, conducir, seguir, en espejo, en canon"]])}<p>Combinando estos elementos un mismo movimiento cambia de significado. Caminar <b>lento, pesado y en nivel bajo</b> transmite tristeza o cansancio; caminar <b>rápido, ligero y con trayectorias curvas</b> transmite alegría. Laban también describió ocho <b>acciones básicas de esfuerzo</b> combinando peso, tiempo y espacio, como <i>golpear</i> (fuerte, súbito, directo), <i>flotar</i> (ligero, sostenido, indirecto), <i>presionar</i> o <i>deslizar</i>. Explorarlas ayuda a ampliar el vocabulario de movimiento y a salir de los gestos de siempre.</p>`,
      poses("Niveles del espacio", [["salto", "alto", "var(--red)"], ["de pie", "medio", "var(--pen)"], ["rodillas", "medio-bajo", "var(--sun)"], ["tumbado", "bajo", "var(--leaf)"]])),
    B("1.4 Relajación y conciencia corporal", `<p>Antes de expresarse, hay que <b>conocer y escuchar el propio cuerpo</b>. La <mark>conciencia corporal</mark> es la capacidad de percibir la postura, la tensión de los músculos y la respiración. Para desarrollarla se usan técnicas de relajación y de respiración que, además, son muy útiles para gestionar el estrés de los exámenes o los nervios antes de actuar.</p>${tabla(["Técnica", "Cómo se hace"], [["Respiración diafragmática", "inspirar por la nariz llevando el aire al abdomen (que se hincha) y espirar lentamente por la boca"], ["Relajación progresiva de Jacobson", "tensar un grupo muscular 5-7 segundos y soltarlo, notando la diferencia, de los pies a la cara"], ["Entrenamiento autógeno de Schultz", "concentrarse en sensaciones de peso y calor en distintas partes del cuerpo con frases como «mi brazo pesa»"], ["Visualización", "imaginar un lugar tranquilo con todos los sentidos"], ["Atención plena (mindfulness)", "observar la respiración y las sensaciones del momento presente sin juzgarlas"]])}<p>Para practicar la relajación se busca un lugar tranquilo, ropa cómoda, una postura cómoda (tumbado boca arriba o sentado) y una música suave o silencio. Al terminar hay que <b>volver poco a poco</b>: mover dedos de manos y pies, estirarse y abrir los ojos lentamente. Unos minutos de respiración diafragmática bastan para bajar la frecuencia cardiaca y sentirse más centrado antes de una presentación, una prueba o un partido.</p>`,
      flujo("Relajación progresiva", ["postura|cómoda", "respirar|lento", "tensar|5-7 s", "soltar|y notar", "volver|despacio"], "var(--bac)")),
    B("1.5 El mimo y la pantomima", `<p>El <mark>mimo</mark> es el arte de comunicar historias, personajes y emociones únicamente con el cuerpo y el gesto, sin palabras. La <b>pantomima</b> es la representación de una historia completa mediante el mimo. Tiene una larga tradición: desde los mimos de la antigua Roma hasta la <i>commedia dell'arte</i>, el cine mudo de Charles Chaplin y Buster Keaton, o el mimo francés Marcel Marceau con su personaje Bip.</p><p>Algunas técnicas básicas del mimo son:</p><p><b>El punto fijo</b>: una parte del cuerpo se queda inmóvil en el espacio, como si estuviera apoyada en algo real (la mano sobre una pared invisible). <b>Los objetos imaginarios</b>: manipularlos con precisión, respetando su tamaño, peso y forma (si cogemos una maleta pesada, el cuerpo se inclina). <b>La pared invisible</b>, <b>la cuerda</b> (tirar de una cuerda imaginaria), <b>la escalera</b> o <b>caminar contra el viento</b>. <b>La exageración</b> de los gestos y la expresión facial, para que se vean desde lejos. <b>La claridad</b>: cada acción tiene un principio, un desarrollo y un final, con pequeñas pausas que la «subrayan».</p><p>Practicar el mimo mejora la observación de los gestos cotidianos, la precisión de los movimientos y la capacidad de contar historias con claridad.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Mimo empujando una pared invisible con las dos manos apoyadas en el aire">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M168 22 V 140" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 5"/>
        <circle cx="112" cy="46" r="13" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/>
        <path d="M106 44 h 3 M 115 44 h 3 M 108 52 q 4 3 8 0" stroke="var(--ink)" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M112 59 L 118 100 M 114 70 L 140 62 L 166 52 M 114 72 L 142 82 L 166 80 M 118 100 L 100 140 M 118 100 L 136 140" stroke="var(--ink)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M166 44 v 14 M 166 74 v 14" stroke="var(--red)" stroke-width="5" stroke-linecap="round"/>
        <g ${F} font-size="10.5" font-weight="700"><text x="176" y="56" fill="var(--red)">punto fijo:</text><text x="176" y="70" fill="var(--red)">las manos no</text><text x="176" y="84" fill="var(--red)">se mueven</text><text x="176" y="138" fill="var(--muted)">pared</text><text x="176" y="152" fill="var(--muted)">invisible</text></g>
        <path d="M86 140 H 180" stroke="var(--line)" stroke-width="2"/>
      </svg>`),
    B("1.6 Improvisación y dramatización", `<p>La <mark>improvisación</mark> consiste en crear movimientos o escenas en el momento, sin preparación previa, a partir de un estímulo: una palabra, una música, un objeto, una imagen o una situación. Es la base de la creatividad expresiva. Para improvisar bien hay unas reglas sencillas: <b>aceptar</b> las propuestas de los compañeros y construir sobre ellas (la regla del «sí, y además…»), escuchar al grupo, no bloquear la escena, no buscar el chiste fácil y comprometerse con el personaje.</p><p>La <b>dramatización</b> es la representación de una historia con personajes, conflicto y desenlace, en la que se combinan movimiento, gesto y, a veces, palabra. Para crear una escena breve se puede seguir la estructura <b>planteamiento-nudo-desenlace</b> y definir claramente quién, dónde y qué ocurre. Algunas técnicas útiles en clase son:</p>${tabla(["Técnica", "Descripción"], [["Estatuas o imágenes congeladas", "el grupo forma una imagen fija que representa una situación"], ["Espejo", "por parejas, uno imita los movimientos del otro como en un espejo"], ["Máquina", "cada uno se añade con un movimiento y un sonido repetido hasta formar una máquina"], ["Sombras chinas", "representar tras una tela iluminada"], ["Teatro de objetos", "un objeto cotidiano se transforma en otra cosa"]])}<p>Estas técnicas mejoran la escucha, la confianza en el grupo y la capacidad de resolver situaciones inesperadas, muy útil también fuera del aula.</p>`,
      rejilla("Juegos de improvisación", [["Sí, y además…", "aceptar y sumar"], ["Espejo", "imitar a la par"], ["Estatuas", "imagen congelada"], ["Máquina", "gesto y sonido"]])),
    B("1.7 El ritmo y la música", `<p>La danza y muchas actividades expresivas se apoyan en la <b>música</b>. Para movernos con ella hay que entender algunos conceptos de <mark>ritmo</mark>:</p>${tabla(["Concepto", "Definición"], [["Pulso", "latido regular y constante de la música; es lo que marcamos con el pie"], ["Acento", "pulso que suena más fuerte; suele ser el primero de cada compás"], ["Compás", "agrupación de pulsos: binario (2), ternario (3, como el vals) o cuaternario (4)"], ["Tempo", "velocidad del pulso, medida en pulsaciones por minuto (bpm)"], ["Frase musical", "unidad de la música; en el baile suele contarse en bloques de 8 tiempos"]])}<p>En la mayoría de la música actual, los bailarines cuentan en <b>ochos</b>: «5, 6, 7, 8» es la cuenta que se hace antes de empezar, y la coreografía se organiza en frases de 8 tiempos. Para encontrar el pulso, escucha la batería o el bajo y da palmadas siguiendo el latido; después, intenta marcar solo el primer tiempo de cada compás (el acento).</p><p>El movimiento puede ir <b>con el ritmo</b> (un paso por pulso), <b>a contratiempo</b> (entre pulsos), a <b>doble velocidad</b> (dos movimientos por pulso) o a <b>media velocidad</b> (un movimiento cada dos pulsos). Jugar con estas variaciones hace que una coreografía sea más interesante. Recuerda que los tempos más habituales para bailar están entre 100 y 130 bpm.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Cuenta de ocho tiempos con acentos en el uno y el cinco">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => `<circle cx="${28 + i * 29}" cy="80" r="${n === 1 || n === 5 ? 13 : 9}" fill="${n === 1 || n === 5 ? "var(--red)" : "var(--pen)"}"/><text x="${28 + i * 29}" y="${n === 1 || n === 5 ? 85 : 84}" text-anchor="middle" font-size="${n === 1 || n === 5 ? 13 : 11}" font-weight="700" fill="#fff" ${F}>${n}</text>`).join("")}
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="130" y="40" fill="var(--ink)">una frase = 8 tiempos</text><text x="130" y="124" fill="var(--red)">acento en el 1 (y el 5)</text><text x="130" y="148" fill="var(--muted)">«5, 6, 7, 8… ¡y empezamos!»</text></g>
      </svg>`),
    B("1.8 Danzas y bailes: tipos", `<p>La <b>danza</b> es la expresión mediante movimientos del cuerpo, generalmente con música, que siguen un ritmo y una estructura. Se pueden clasificar en varios grupos:</p>${tabla(["Tipo", "Características", "Ejemplos"], [["Danzas populares o folclóricas", "transmitidas de generación en generación; ligadas a fiestas y tradiciones de un lugar", "jota, sardana, muñeira, sevillanas, fandango"], ["Danzas del mundo", "propias de otras culturas, con su música y su significado", "haka (Nueva Zelanda), sirtaki (Grecia), danzas africanas, bollywood"], ["Bailes de salón o sociales", "por parejas, con pasos codificados", "vals, tango, salsa, bachata, rock and roll, swing"], ["Danzas urbanas", "nacen en la calle y en los clubes, muy ligadas a la música actual", "hip hop, breaking, locking, popping, house"], ["Danzas escénicas", "creadas para el espectáculo", "danza clásica, contemporánea, española, jazz"]])}<p>Las <b>danzas populares españolas</b> son muy variadas: la <b>jota</b> (Aragón, Navarra, Castilla y otras regiones), con saltos y ritmo ternario; la <b>sardana</b> (Cataluña), una danza en corro con las manos unidas; la <b>muñeira</b> (Galicia), con acompañamiento de gaita; o las <b>sevillanas</b> (Andalucía), bailadas en pareja en cuatro partes. Bailar danzas de distintas culturas ayuda a conocerlas y respetarlas. Desde 2024 el <b>breaking</b> ha sido incluso disciplina olímpica, lo que muestra la importancia creciente de las danzas urbanas.</p>`,
      rejilla("Tipos de danza", [["Populares", "jota, sardana"], ["Del mundo", "haka, sirtaki"], ["De salón", "vals, salsa"], ["Urbanas", "hip hop, breaking"], ["Escénicas", "clásica, contemporánea"], ["Creativas", "tu coreografía"]]),
      { id: "1saGBuRJqd4", titulo: "Historia de la danza", canal: "TeleUV", vistas: 189994, megusta: 0 }),
    B("1.9 Crear una coreografía", `<p>Una <mark>coreografía</mark> es una secuencia de movimientos organizada para ser bailada con una música. Crear una en grupo es uno de los retos más completos de la expresión corporal. Estos son los pasos:</p><p><b>1. Elegir la música</b> y escucharla varias veces, identificando el pulso, las frases de 8 tiempos y las partes (introducción, estrofa, estribillo, final). <b>2. Definir la idea</b>: ¿qué queremos expresar? Puede ser una historia, una emoción o simplemente un estilo. <b>3. Crear los pasos</b> por bloques de 8 tiempos, aprovechando los elementos del movimiento: cambios de nivel, de dirección, de velocidad. <b>4. Organizar el espacio</b>: diseñar las <b>formaciones</b> (en línea, en V, en círculo, en filas alternas) y los desplazamientos entre ellas. <b>5. Usar recursos coreográficos</b>: <b>unísono</b> (todos a la vez), <b>canon</b> (el mismo movimiento empieza en momentos distintos, como una ola), <b>pregunta-respuesta</b> (un grupo hace y otro responde), <b>contraste</b> (unos rápidos, otros lentos) y <b>solos</b>. <b>6. Ensayar</b> contando en voz alta y luego sin contar. <b>7. Presentar</b> con un principio y un final claros (posición inicial y final congeladas).</p><p>Una buena coreografía escolar no es la más difícil, sino la que está bien sincronizada, aprovecha el espacio, se ajusta a la música y transmite energía.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Formaciones coreográficas vistas desde arriba: línea, V, círculo y filas alternas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[[0, 0], [12, 0], [24, 0], [36, 0], [48, 0]], [[0, -12], [12, -4], [24, 4], [36, -4], [48, -12]], [[24, -14], [37, -4], [32, 12], [16, 12], [11, -4]], [[0, -8], [24, -8], [48, -8], [12, 8], [36, 8]]].map((pts, k) => { const ox = 16 + (k % 2) * 126, oy = 52 + Math.floor(k / 2) * 72; return pts.map(([x, y]) => `<circle cx="${ox + 30 + x}" cy="${oy + y}" r="6" fill="${["var(--red)", "var(--pen)", "var(--leaf)", "var(--sun)"][k]}"/>`).join("") + `<text x="${ox + 54}" y="${oy + 32}" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${["línea", "V", "círculo", "filas alternas"][k]}</text>`; }).join("")}
        <text x="130" y="20" text-anchor="middle" font-size="10.5" fill="var(--muted)" ${F}>público ↓ (vista desde arriba)</text>
      </svg>`),
    B("1.10 El acrosport: qué es y seguridad", `<p>El <mark>acrosport</mark> es una actividad gimnástica y expresiva en la que varias personas forman <b>figuras o pirámides humanas</b>, combinadas con elementos de enlace (giros, saltos, desplazamientos, pasos de baile) y acompañadas de música. Procede de la gimnasia acrobática, deporte de competición, y en la escuela se practica por su gran valor <b>cooperativo</b>: ninguna figura sale sin la colaboración de todos.</p><p>En cada figura hay tres <b>roles</b>: el <b>portor</b> o base, que sostiene el peso de los compañeros (suele ser quien tiene más fuerza y estabilidad); el <b>ágil</b>, que se sitúa encima (suele ser más ligero y con buen equilibrio); y el <b>ayudante</b>, que colabora en el montaje y desmontaje y vigila para evitar caídas. Todos los roles son igual de importantes y conviene rotarlos.</p><p>Las <b>normas de seguridad</b> son fundamentales: trabajar sobre colchonetas, sin calzado o con calcetines antideslizantes y sin objetos (relojes, pendientes); calentar bien muñecas, hombros y espalda; el portor mantiene la <b>espalda recta</b> y apoya las manos bajo los hombros y las rodillas bajo la cadera; el ágil apoya los pies y las manos sobre las <b>zonas seguras</b> del portor (cadera, hombros, muslos cerca de la rodilla), <b>nunca en el centro de la espalda</b> ni en zonas blandas; se sube y se baja de forma controlada, sin saltar desde arriba; y la figura se mantiene unos 3 segundos con la mirada al frente. Si algo falla, se deshace la figura con calma.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Zonas de apoyo seguras del portor a cuatro patas: hombros y cadera sí, centro de la espalda no">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M30 140 H 230" stroke="var(--line)" stroke-width="2"/>
        <circle cx="60" cy="84" r="12" fill="none" stroke="var(--pen)" stroke-width="3.5"/>
        <path d="M76 88 L 176 88 M 80 90 L 80 140 M 176 90 L 176 140 M 176 90 L 196 138" stroke="var(--pen)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="84" cy="88" r="9" fill="var(--leaf)" fill-opacity=".85"/><circle cx="172" cy="88" r="9" fill="var(--leaf)" fill-opacity=".85"/>
        <path d="M118 80 l 14 14 m 0 -14 l -14 14" stroke="var(--red)" stroke-width="4" stroke-linecap="round"/>
        <g ${F} font-size="10.5" font-weight="700"><text x="58" y="40" fill="var(--leaf)">SÍ: hombros</text><text x="158" y="40" fill="var(--leaf)">SÍ: cadera</text><text x="98" y="68" fill="var(--red)">NO: centro</text><text x="20" y="164" fill="var(--pen)">portor: espalda recta, manos bajo hombros</text></g>
        <path d="M84 48 V 74 M 172 48 V 74" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="3 3"/>
      </svg>`),
    B("1.11 Figuras y montaje de acrosport", `<p>Las figuras se clasifican según el número de participantes: <b>parejas</b>, <b>tríos</b>, <b>cuartetos</b> y <b>grupos</b> más numerosos. Pueden ser <b>estáticas</b> (se mantienen inmóviles) o <b>dinámicas</b> (con movimiento, como volteos o transportes, solo para niveles avanzados y con ayudas). Algunas figuras básicas por parejas son: el <b>banco</b> (el portor a cuatro patas y el ágil apoyado encima en distintas posiciones), el <b>avión</b> (el portor tumbado sostiene con los pies al ágil por la cadera), la <b>silla</b> o los <b>equilibrios</b> con apoyos mutuos.</p><p>Todo montaje sigue tres fases: <b>montaje</b> (subir al ágil de forma ordenada, con ayuda), <b>mantenimiento</b> (3 segundos con buena postura y expresión) y <b>desmontaje</b> (en orden inverso, de arriba abajo, con control). Una composición de acrosport completa incluye:</p>${tabla(["Elemento", "Descripción"], [["Figuras", "al menos de dos tipos: parejas, tríos, grupos"], ["Transiciones o enlaces", "giros, volteretas, saltos, pasos de baile entre figura y figura"], ["Música", "que marque el ritmo y el carácter"], ["Coordinación", "todas las figuras montadas y desmontadas al unísono o en canon"], ["Expresividad", "actitud, mirada al público, inicio y final claros"]])}<p>Para diseñar la composición se dibujan las figuras en fichas (con monigotes) y se planifica su orden en un guion con los tiempos de la música. El acrosport desarrolla la fuerza, el equilibrio y la confianza en los compañeros.</p>`,
      filas("Roles del acrosport", [["Portor", "base: fuerza y estabilidad", "var(--pen)"], ["Ágil", "encima: ligero, equilibrio", "var(--red)"], ["Ayudante", "monta, desmonta, vigila", "var(--leaf)"], ["Todos", "rotan los roles", "var(--sun)"]]),
      { id: "fcKK9YqNZN4", titulo: "Presentación de acrosport", canal: "InosEfi", vistas: 418206, megusta: 0 }),
    B("1.12 Expresión, inclusión y estereotipos", `<p>La expresión corporal y la danza son espacios privilegiados para trabajar la <mark>igualdad y la inclusión</mark>. Durante mucho tiempo, la danza se consideró «cosa de chicas», y muchos chicos dejaban de bailar por miedo a las burlas, mientras que a las chicas se les desanimaba de actividades de fuerza o de riesgo. Hoy sabemos que estos <b>estereotipos de género</b> limitan a todas las personas: bailarines como Nacho Duato o Ángel Corella y bailarinas que dirigen grandes compañías demuestran que el talento no depende del género.</p><p>También hay que cuidar la <b>imagen corporal</b>: las redes sociales muestran cuerpos retocados y modelos poco realistas que pueden generar inseguridad. La expresión corporal invita a aceptar y valorar el propio cuerpo por lo que puede <b>hacer y comunicar</b>, no solo por su aspecto. En clase, ningún comentario sobre el cuerpo de los demás es aceptable.</p><p>Por último, la danza es accesible a todos: existen compañías de <b>danza inclusiva</b> que integran a personas con y sin discapacidad, como la española Psicoballet o la británica Candoco. Adaptar los movimientos (sentado, con apoyos, a otro ritmo) permite que todos participen. Valorar la diversidad de cuerpos, estilos y capacidades enriquece cualquier creación colectiva.</p>`,
      escalon("Un clima expresivo", [["respeto", "var(--pen)"], ["confianza", "var(--leaf)"], ["sin estereotipos", "var(--sun)"], ["todas las personas bailan", "var(--red)"]])),
  ],
  figura: {
    titulo: "Expresión corporal y danza",
    svg: figCols("Expresión corporal y danza", [["Lenguaje", ["gesto", "mirada", "postura"], "var(--pen)"], ["Elementos", ["espacio", "tiempo", "energía"], "var(--red)"], ["Danza", ["ritmo en 8", "estilos", "coreografía"], "var(--sun)"], ["Acrosport", ["portor", "ágil", "ayudante"], "var(--leaf)"]]),
  },
  video: { id: "b-y_9GscbTg", titulo: "Expresión corporal: conceptos básicos", canal: "Rocío Núñez", vistas: 227974, megusta: 2708, busqueda: "expresión corporal conceptos" },
  ejemplos: [
    EX("Expresa «tristeza» caminando, usando los elementos de Laban.", ["Tiempo: lento, con pausas.", "Energía: pesada, sostenida.", "Espacio: nivel medio-bajo, trayectoria recta, mirada al suelo.", "Cuerpo: hombros caídos, brazos colgando."], "El mismo gesto cambia de significado con los elementos."),
    EX("Una canción tiene 120 bpm. ¿Cuántos segundos dura una frase de 8 tiempos?", ["120 pulsos en 60 s: 1 pulso cada 0,5 s.", "8 tiempos × 0,5 s = 4 s.", "Una coreografía de 1 minuto tiene 15 frases."], "4 segundos por frase de 8."),
    EX("Diseña una escena de mimo de 30 segundos: «abrir un regalo».", ["Planteamiento: encuentra una caja y la mira con curiosidad.", "Nudo: no puede abrirla, tira de la cinta, pesa mucho.", "Desenlace: la abre y reacciona con sorpresa.", "Mantener el tamaño y el peso de la caja imaginaria."], "Historia clara con principio, nudo y final."),
    EX("Aplica un canon en una frase de 8 tiempos con 4 grupos.", ["Grupo 1 empieza en el tiempo 1.", "Grupo 2 en el tiempo 3.", "Grupo 3 en el 5 y grupo 4 en el 7.", "Se produce un efecto de ola."], "El mismo movimiento desplazado en el tiempo."),
    EX("Organiza un trío de acrosport: dos portores a cuatro patas y un ágil.", ["Portores juntos, espaldas rectas, manos bajo hombros.", "Ayudante (o el ágil con apoyo) sube apoyando en caderas y hombros.", "Ágil de rodillas o de pie sobre las zonas seguras, 3 segundos.", "Desmontaje de arriba abajo con ayuda."], "Montaje, mantenimiento y desmontaje controlados."),
    EX("Interpreta el lenguaje no verbal: brazos cruzados, ceño fruncido, cuerpo girado.", ["Brazos cruzados: actitud cerrada o defensiva.", "Ceño fruncido: enfado o desacuerdo.", "Cuerpo girado: falta de interés o rechazo."], "Probable rechazo o enfado; conviene confirmar preguntando."),
  ],
  errores: [
    "Reírse de los compañeros cuando se expresan: rompe el clima de confianza.",
    "Hacer gestos pequeños y rápidos que el público no puede ver.",
    "Olvidar el tamaño y el peso de los objetos imaginarios en el mimo.",
    "Bailar sin escuchar el pulso de la música.",
    "Apoyar al ágil en el centro de la espalda del portor o saltar desde arriba en el acrosport.",
    "Pensar que bailar es «cosa de chicas» o que hay que ser un experto para disfrutarlo.",
  ],
  ejercicios: EJ([
    ["Define expresión corporal.", "Capacidad de comunicar ideas, emociones y sensaciones con el movimiento, el gesto y la postura."],
    ["¿Cuáles son las tres finalidades de la expresión corporal?", "Expresar, comunicar y crear."],
    ["Escribe cuatro canales de la comunicación no verbal.", "Expresión facial, mirada, gestos y postura (también proxémica, paralenguaje y contacto)."],
    ["¿Qué son las seis emociones básicas de Ekman?", "Alegría, tristeza, miedo, ira, sorpresa y asco."],
    ["Escribe los elementos del movimiento según Laban.", "Cuerpo, espacio, tiempo, energía y relación."],
    ["¿Cuáles son los tres niveles del espacio?", "Alto, medio y bajo."],
    ["¿Qué es el mimo?", "Comunicar historias y emociones solo con el cuerpo y el gesto, sin palabras."],
    ["¿Qué es el pulso musical?", "El latido regular y constante de la música."],
    ["¿Cuántos tiempos tiene una frase en el baile?", "Normalmente 8."],
    ["Escribe dos danzas populares españolas.", "Jota y sardana (también muñeira, sevillanas)."],
    ["¿Cuáles son los roles del acrosport?", "Portor, ágil y ayudante."],
    ["¿Cuánto tiempo se mantiene una figura de acrosport?", "Unos 3 segundos."],
  ], [
    ["Diferencia expresión espontánea y elaborada.", "Espontánea: surge sin preparación. Elaborada: se ensaya y se presenta ante un público."],
    ["¿Qué es la proxémica? Pon un ejemplo.", "El uso de la distancia con los demás; por ejemplo, nos acercamos más a un amigo que a un desconocido."],
    ["¿Por qué algunos gestos no significan lo mismo en todas las culturas?", "Porque muchos gestos son convenciones culturales aprendidas, no universales, como el gesto de OK o la distancia al hablar."],
    ["Explica cómo cambia el significado de caminar según la energía y el tiempo.", "Lento y pesado transmite tristeza o cansancio; rápido y ligero, alegría; fuerte y súbito, enfado."],
    ["Describe la relajación progresiva de Jacobson.", "Tensar un grupo muscular 5-7 segundos y soltarlo notando la diferencia, recorriendo el cuerpo de los pies a la cara."],
    ["Explica la técnica del punto fijo en el mimo.", "Una parte del cuerpo se queda inmóvil en el espacio como si estuviera apoyada en algo real, dando sensación de objeto."],
    ["Explica la regla del «sí, y además…» en la improvisación.", "Aceptar las propuestas de los compañeros y añadir algo nuevo, sin bloquear la escena."],
    ["Diferencia compás binario, ternario y cuaternario.", "Agrupan los pulsos de 2, 3 o 4 en 4; el vals es ternario y la mayoría de la música pop es cuaternaria."],
    ["Diferencia danza popular y danza urbana.", "Popular: tradicional, transmitida de generación en generación y ligada a fiestas. Urbana: nace en la calle y los clubes con la música actual."],
    ["Explica qué son el unísono y el canon.", "Unísono: todos hacen lo mismo a la vez. Canon: el mismo movimiento empieza en momentos distintos, como una ola."],
    ["Describe tres formaciones coreográficas.", "En línea, en V y en círculo (también filas alternas o grupos)."],
    ["¿Cuáles son las zonas seguras de apoyo sobre el portor?", "Hombros, cadera y muslos cerca de la rodilla; nunca el centro de la espalda."],
    ["Explica las tres fases de una figura de acrosport.", "Montaje (subir de forma ordenada), mantenimiento (3 s) y desmontaje (en orden inverso y controlado)."],
    ["¿Por qué los estereotipos de género perjudican en la danza?", "Porque limitan a las personas: alejan a chicos de la danza y a chicas de actividades de fuerza, por miedo a burlas o expectativas sociales."],
  ], [
    ["Crea en grupo una coreografía de 6 frases de 8 tiempos con dos formaciones, un canon y un final congelado. Escribe el guion.", "Respuesta abierta: guion por frases (1-8) con pasos, formación, recurso coreográfico y transiciones."],
    ["Diseña una composición de acrosport con 2 figuras de pareja, 1 de trío y 1 de grupo, con enlaces y música.", "Respuesta abierta: fichas de figuras con roles, orden, enlaces (giros, volteretas, pasos) y tiempos musicales."],
    ["Analiza el lenguaje no verbal de un personaje de una película o serie en una escena sin sonido.", "Respuesta abierta: describir expresión facial, postura, gestos, distancia y deducir emociones y relaciones."],
    ["Explica cómo usarías la respiración y la relajación antes de una exposición oral.", "Respiración diafragmática unos minutos, tensar y soltar hombros y manos, visualizar el éxito y una postura erguida al empezar."],
    ["Compara dos danzas del mundo: origen, música, significado y movimientos.", "Respuesta abierta; por ejemplo, haka (ritual maorí, sin instrumentos, gestos fuertes de desafío) y sirtaki (Grecia, en línea, de lento a rápido)."],
    ["Crea una pantomima por parejas con un conflicto y al menos tres objetos imaginarios.", "Respuesta abierta con planteamiento, nudo y desenlace, objetos con tamaño y peso coherentes y exageración de gestos."],
    ["Debate: ¿deberían los chicos y las chicas hacer las mismas actividades expresivas en clase? Argumenta.", "Respuesta abierta argumentada; se espera defender la igualdad de oportunidades y la ruptura de estereotipos."],
    ["Diseña una sesión de 50 minutos de expresión corporal para 1º ESO con calentamiento, parte principal y vuelta a la calma.", "Respuesta abierta: juegos de desinhibición, exploración de niveles y energías, creación breve en grupo y relajación final."],
    ["Explica cómo adaptarías una coreografía para que participe un compañero en silla de ruedas.", "Movimientos de brazos, tronco y cabeza, desplazamientos con la silla en las formaciones, papel central en algún momento y ritmo compartido."],
    ["Reflexiona sobre la influencia de las redes sociales en la imagen corporal y la danza (retos virales).", "Pueden difundir la danza y motivar, pero también mostrar cuerpos irreales y comparar; hay que disfrutar del movimiento y valorar lo que el cuerpo puede hacer."],
  ]),
  quiz: QS([
    ["La expresión corporal comunica mediante…", ["el movimiento, el gesto y la postura", "solo la voz", "solo la escritura", "la música grabada"], "Lenguaje del cuerpo."],
    ["Una finalidad de la expresión corporal es…", ["crear", "competir", "ganar puntos", "correr rápido"], "Expresar, comunicar y crear."],
    ["La proxémica estudia…", ["la distancia entre las personas", "los gestos de las manos", "el tono de voz", "la expresión facial"], "Espacio interpersonal."],
    ["El paralenguaje es…", ["cómo se dice algo: tono, volumen, ritmo", "lo que se dice", "los gestos", "la mirada"], "Voz."],
    ["Las emociones básicas de Ekman son…", ["seis", "dos", "diez", "veinte"], "Universales."],
    ["Laban analizó el movimiento con elementos como…", ["espacio, tiempo y energía", "goles y faltas", "notas musicales", "colores"], "También cuerpo y relación."],
    ["Moverse tumbado en el suelo es usar el nivel…", ["bajo", "alto", "medio", "aéreo"], "Niveles."],
    ["En la relajación de Jacobson se…", ["tensa y se suelta cada grupo muscular", "corre", "salta", "estira con rebotes"], "Progresiva."],
    ["El mimo comunica…", ["sin palabras", "solo con palabras", "con disfraces", "con música obligatoria"], "Gesto."],
    ["El punto fijo consiste en…", ["mantener inmóvil una parte del cuerpo", "saltar", "mirar a un punto", "girar"], "Pared invisible."],
    ["En la improvisación conviene…", ["aceptar las propuestas", "bloquear la escena", "buscar el chiste fácil", "no escuchar"], "«Sí, y además»."],
    ["El latido regular de la música es…", ["el pulso", "el acento", "la melodía", "la frase"], "Se marca con el pie."],
    ["El vals tiene un compás…", ["ternario", "binario", "cuaternario", "sin compás"], "1, 2, 3."],
    ["La sardana es una danza de…", ["Cataluña", "Galicia", "Andalucía", "Aragón"], "En corro."],
    ["El breaking es una danza…", ["urbana", "popular", "de salón", "clásica"], "Olímpica en 2024."],
    ["El canon en una coreografía es…", ["el mismo movimiento en momentos distintos", "todos a la vez", "un solo", "una pausa"], "Efecto ola."],
    ["En acrosport, quien sostiene el peso es…", ["el portor", "el ágil", "el ayudante", "el público"], "Base."],
    ["El ágil nunca debe apoyarse…", ["en el centro de la espalda del portor", "en los hombros", "en la cadera", "en el suelo"], "Zona insegura."],
    ["Las figuras se desmontan…", ["de arriba abajo, con control", "saltando desde arriba", "de golpe", "todas a la vez sin orden"], "Orden inverso."],
    ["Bailar es…", ["para todas las personas", "solo para chicas", "solo para expertos", "solo para jóvenes"], "Sin estereotipos."],
  ]),
  examen: QS([
    ["La cuenta «5, 6, 7, 8» se hace…", ["antes de empezar a bailar", "al final", "en el estribillo", "nunca"], "Entrada."],
    ["A 120 bpm, una frase de 8 tiempos dura…", ["4 segundos", "8 segundos", "1 segundo", "16 segundos"], "0,5 s por pulso."],
    ["La técnica en que uno imita al otro a la vez es…", ["el espejo", "la máquina", "el canon", "la estatua"], "Por parejas."],
    ["El portor mantiene…", ["la espalda recta", "la espalda curvada", "los brazos doblados", "la cabeza baja"], "Estabilidad."],
    ["En acrosport, las figuras con movimiento se llaman…", ["dinámicas", "estáticas", "simples", "fijas"], "Nivel avanzado."],
    ["La danza inclusiva…", ["integra a personas con y sin discapacidad", "excluye a principiantes", "es solo competitiva", "solo es para profesionales"], "Psicoballet, Candoco."],
    ["El gesto de «OK» con los dedos…", ["puede significar cosas distintas según la cultura", "es universal", "significa enfado", "no existe"], "Cultural."],
    ["Flotar, según Laban, es un movimiento…", ["ligero, sostenido e indirecto", "fuerte y súbito", "pesado y directo", "rápido y recto"], "Acciones de esfuerzo."],
  ]),
  feynman: ["Qué es la expresión corporal y para qué sirve", "Cómo comunicamos sin palabras", "Cuáles son los elementos del movimiento de Laban", "Cómo se crea una coreografía siguiendo la música", "Cómo se montan figuras de acrosport con seguridad"],
  mapa: mapa("EXPRESIÓN Y DANZA", "var(--red)", [
    ["Lenguaje", "gesto · mirada · postura", "var(--pen)"],
    ["Técnicas", "relajación · mimo · improvisación", "var(--bac)"],
    ["Danza", "ritmo · estilos · coreografía", "var(--sun)"],
    ["Acrosport", "portor · ágil · seguridad", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Expresión corporal", "Comunicar con movimiento, gesto y postura."],
    ["Comunicación no verbal", "Cara, mirada, gestos, postura, distancia, voz."],
    ["Proxémica", "Uso de la distancia con los demás."],
    ["Elementos de Laban", "Cuerpo, espacio, tiempo, energía, relación."],
    ["Niveles", "Alto, medio y bajo."],
    ["Mimo", "Comunicar sin palabras."],
    ["Improvisación", "Crear en el momento: «sí, y además»."],
    ["Pulso", "Latido regular de la música."],
    ["Frase de baile", "8 tiempos."],
    ["Canon", "Mismo movimiento en momentos distintos."],
    ["Portor", "Base que sostiene en el acrosport."],
    ["Zonas seguras", "Hombros y cadera, nunca el centro de la espalda."],
  ],
  glosario: [
    ["Expresión corporal", "Comunicación de ideas y emociones mediante el cuerpo."],
    ["Lenguaje no verbal", "Información transmitida sin palabras."],
    ["Proxémica", "Estudio del uso de la distancia interpersonal."],
    ["Paralenguaje", "Aspectos de la voz como tono, volumen y ritmo."],
    ["Kinesfera", "Espacio personal que alcanzamos sin desplazarnos."],
    ["Mimo", "Arte de representar sin palabras."],
    ["Pantomima", "Representación de una historia mediante el mimo."],
    ["Improvisación", "Creación espontánea a partir de un estímulo."],
    ["Pulso", "Unidad regular de tiempo de la música."],
    ["Compás", "Agrupación de pulsos con un acento."],
    ["Tempo", "Velocidad de la música en pulsos por minuto."],
    ["Coreografía", "Secuencia de movimientos organizada con música."],
    ["Canon", "Recurso en el que un movimiento se repite desfasado en el tiempo."],
    ["Acrosport", "Actividad de figuras humanas cooperativas con música."],
    ["Portor", "Persona que hace de base en una figura."],
    ["Ágil", "Persona que se sitúa encima en una figura."],
  ],
  situacion: {
    titulo: "Gala de fin de trimestre",
    reto: "El instituto celebra una gala y vuestro grupo debe presentar una pieza de 2-3 minutos que combine danza, expresión corporal y acrosport sobre el tema «lo que nos une».",
    pasos: [
      "Elegid una música y analizad su pulso, frases y partes.",
      "Decidid la idea expresiva y el mensaje de la pieza.",
      "Diseñad las figuras de acrosport con sus fichas y las frases coreográficas con formaciones y recursos (unísono, canon).",
      "Ensayad aplicando las normas de seguridad y rotando roles.",
      "Presentad la pieza y grabadla en vídeo.",
      "Autoevaluad y coevaluad la pieza con una rúbrica.",
    ],
    producto: "Pieza escénica de 2-3 minutos, guion coreográfico y fichas de figuras.",
    evaluacion: [
      "La pieza se ajusta a la música y usa recursos coreográficos variados.",
      "Las figuras de acrosport se montan y desmontan con seguridad y control.",
      "Transmite el mensaje con expresividad y energía.",
      "Coopera con el grupo, respeta las propuestas y participa en todos los roles.",
    ],
  },
  familias: ["Bailad juntos alguna danza tradicional de vuestra región o de vuestro origen.", "Comentad el lenguaje no verbal de personajes en una película sin sonido.", "Valorad el esfuerzo y la creatividad más que la perfección.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Manifestaciones de la cultura motriz y Autorregulación emocional e interacción social (RD 217/2022, Educación Física 4º ESO): técnicas expresivas, comunicación no verbal, relajación y gestión emocional, danzas populares, del mundo y urbanas, creación de composiciones coreográficas y acrosport, superación de estereotipos y valoración de la diversidad corporal.",
    ideas: ["Juegos de desinhibición y confianza al inicio de la unidad.", "Proyecto de coreografía colectiva con grabación y rúbrica.", "Acrosport con fichas de figuras y roles rotativos.", "Coordinación con Música (ritmo, compás) y con Artes Escénicas y Danza."],
  },
  fuentes: [
    RD,
    { t: "Consejo Superior de Deportes: igualdad y deporte", url: "https://www.csd.gob.es/es/mujer-y-deporte" },
    { t: "Compañía Nacional de Danza: recursos educativos", url: "https://cndanza.mcu.es/" },
    { t: "Real Federación Española de Gimnasia: gimnasia acrobática", url: "https://rfegimnasia.es/" },
  ],
  revisado: "2026-11-13",
};
