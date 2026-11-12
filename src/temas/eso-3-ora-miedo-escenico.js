// Oratoria y debate 3º ESO (optativa). Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Oratoria y debate",
  curso: "3-eso",
  titulo: "Hablar en público sin miedo",
  minutos: 45,
  objetivos: ["Entender qué es el miedo escénico y por qué aparece", "Aplicar técnicas de respiración, preparación y pensamiento para controlarlo", "Saber reaccionar ante imprevistos durante una exposición"],
  claves: ["miedo escénico", "nervios", "adrenalina", "respiración diafragmática", "visualización", "pensamientos", "preparación", "imprevistos", "exposición gradual"],
  pregunta: {
    texto: "Te tiemblan las piernas, se te seca la boca y el corazón te late a mil antes de exponer. ¿Significa que no sirves para hablar en público?",
    respuesta: "En absoluto. Es una reacción <mark>normal</mark> del cuerpo, que se prepara ante algo importante. Les pasa también a actores, cantantes y políticos con años de experiencia. La clave no es hacer desaparecer los nervios, sino <b>aprender a manejarlos</b> para que te ayuden en lugar de bloquearte.",
  },
  bloques: [
    {
      html: `<h3>Qué es el miedo escénico</h3><p>El <b>miedo escénico</b> es la ansiedad que sentimos antes o durante una actuación ante otras personas. Es muy frecuente: muchas encuestas lo sitúan entre los miedos más comunes. Aparece porque el cerebro interpreta que estamos ante un <mark>peligro</mark> (que nos juzguen, hacer el ridículo) y prepara el cuerpo para huir o luchar, aunque no haya ningún peligro real.</p>`,
      svg: L.filas("Por qué aparece el miedo escénico", [
        ["El cerebro", "cree que hay un peligro", "var(--red)"],
        ["El cuerpo", "se prepara para huir", "var(--pen)"],
        ["Pero", "no hay peligro real", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Qué le pasa al cuerpo</h3><p>Al sentir miedo, el cuerpo libera <b>adrenalina</b>. Por eso el corazón se acelera, la respiración se vuelve rápida, sudan las manos, se seca la boca, tiemblan las piernas o la voz y a veces la mente se queda «en blanco». Son síntomas <mark>molestos pero inofensivos</mark>, y además el público los nota mucho menos de lo que creemos. Bien gestionada, esa energía nos hace estar más despiertos.</p>`,
      svg: L.tabla("Síntomas del miedo escénico", ["Dónde", "Síntoma"], [
        ["Corazón", "late más rápido"], ["Boca", "se seca"], ["Manos", "sudan, tiemblan"], ["Mente", "se queda en blanco"],
      ]),
    },
    {
      html: `<h3>La respiración, tu mejor aliada</h3><p>Cuando estamos nerviosos respiramos rápido y con el pecho, lo que aumenta la ansiedad. Para calmarte, practica la <b>respiración diafragmática</b>: coge aire lentamente por la nariz hinchando la tripa, mantenlo un par de segundos y suéltalo muy despacio por la boca, alargando la espiración. Repite varias veces antes de empezar. Al soltar el aire despacio, el corazón se calma y la voz sale más firme.</p>`,
      svg: L.linea("Respiración para calmar los nervios", [
        ["4 s", "inspira por la nariz (tripa)", "var(--pen)"],
        ["2 s", "mantén el aire", "var(--leaf)"],
        ["6 s", "suelta despacio por la boca", "var(--red)"],
      ]),
    },
    {
      html: `<h3>La preparación quita miedo</h3><p>La mayor fuente de nervios es la <b>inseguridad</b>. Cuanto mejor conoces el tema y más has ensayado, menos miedo sientes. Ensaya en voz alta varias veces, <mark>memoriza el principio</mark> (los primeros segundos son los peores) y ten a mano un guion con palabras clave. Llega con tiempo para conocer el lugar, probar el ordenador y ver dónde estará el público.</p>`,
      svg: L.filas("La preparación reduce los nervios", [
        ["Domina", "el tema: investiga", "var(--pen)"],
        ["Ensaya", "en voz alta, varias veces", "var(--leaf)"],
        ["Memoriza", "los primeros 30 segundos", "var(--red)"],
        ["Conoce", "el lugar: llega pronto", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Cambiar los pensamientos</h3><p>El miedo crece con pensamientos negativos: «Lo voy a hacer fatal», «Se van a reír de mí». Cámbialos por otros más <b>realistas</b> y útiles: «Estoy nervioso porque me importa hacerlo bien», «Me he preparado», «El público quiere que me salga bien». Recuerda que el público no es un enemigo: la mayoría de tus compañeros también estarán nerviosos cuando les toque.</p>`,
      svg: L.filas("Cambiar pensamientos negativos por realistas", [
        ["En vez de…", "«Lo haré fatal»", "var(--red)"],
        ["Piensa…", "«Me he preparado bien»", "var(--leaf)"],
        ["En vez de…", "«Se reirán de mí»", "var(--red)"],
        ["Piensa…", "«Quieren que salga bien»", "var(--leaf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Plan contra los nervios",
    svg: L.columnas("Plan para controlar el miedo escénico", [
      ["días antes", "PREPARA", ["investiga", "y ensaya"], "var(--pen)"],
      ["justo antes", "RESPIRA", ["lento, con", "la tripa"], "var(--leaf)"],
      ["en la cabeza", "PIENSA", ["en positivo", "y realista"], "var(--red)"],
      ["durante", "SIGUE", ["si fallas,", "pausa y adelante"], "var(--inf)"],
    ]),
  },
  video: { id: "UqyOvP21sN8", titulo: "Trucos para superar el miedo escénico", canal: "Teresa Baró · Comunicación de éxito", vistas: 130414, megusta: 0, busqueda: "miedo a hablar en público" },
  quiz: [
    { q: "El miedo escénico es…", o: ["una reacción normal y frecuente", "una enfermedad grave", "señal de que no sirves"], a: 0, e: "Les pasa incluso a profesionales." },
    { q: "La sustancia que provoca los síntomas es…", o: ["la adrenalina", "la cafeína", "el azúcar"], a: 0, e: "Prepara el cuerpo para huir o luchar." },
    { q: "Para calmarte conviene…", o: ["soltar el aire despacio", "respirar muy rápido", "aguantar la respiración mucho rato"], a: 0, e: "La espiración lenta calma el corazón." },
    { q: "La parte del discurso que conviene memorizar es…", o: ["el principio", "todo", "nada"], a: 0, e: "Los primeros segundos son los más difíciles." },
    { q: "«El público quiere que me salga bien» es un pensamiento…", o: ["realista y útil", "negativo", "falso"], a: 0, e: "Sustituye al miedo a ser juzgado." },
  ],
  examen: [
    { q: "El público nota los nervios del orador…", o: ["mucho menos de lo que creemos", "siempre muchísimo", "nunca"], a: 0, e: "Por dentro se siente más de lo que se ve." },
    { q: "La mayor fuente de nervios suele ser…", o: ["la inseguridad por falta de preparación", "el color de la ropa", "la hora"], a: 0, e: "Prepararse reduce el miedo." },
    { q: "La respiración diafragmática se nota porque…", o: ["se hincha la tripa", "se suben los hombros", "no se mueve nada"], a: 0, e: "El aire llega abajo." },
  ],
  feynman: ["Por qué aparece el miedo escénico", "Qué síntomas produce y por qué no son peligrosos", "Cómo se hace la respiración para calmarse", "Cómo cambiar un pensamiento negativo por uno realista"],
  mapa: mapa("SIN MIEDO", "var(--eso)", [
    ["Es normal", "adrenalina, no peligro", "var(--red)"],
    ["Respira", "lento, con la tripa", "var(--leaf)"],
    ["Prepárate", "ensaya e inicio de memoria", "var(--pen)"],
    ["Piensa bien", "realista y positivo", "var(--inf)"],
  ]),
  tarjetas: [
    ["Miedo escénico", "Ansiedad antes o durante una actuación ante otras personas."],
    ["Adrenalina", "Sustancia que el cuerpo libera ante un peligro: acelera el corazón y la respiración."],
    ["Respiración diafragmática", "Inspirar por la nariz hinchando la tripa y soltar el aire despacio."],
    ["Memorizar el inicio", "Saberse de memoria los primeros 30 segundos para arrancar con seguridad."],
    ["Pensamiento realista", "«Estoy nervioso porque me importa; me he preparado y lo haré bien»."],
  ],
  familias: ["Haced de público amable en sus ensayos y empezad siempre por decirle algo positivo.", "Practicad juntos la respiración 4-2-6 antes de un examen o una exposición.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación oral: gestión de las emociones en la producción oral; estrategias de autorregulación y autoconfianza (materia optativa de Oratoria y debate; relación con el RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Exposición gradual: hablar 30 segundos en parejas, luego en grupos y luego ante la clase.", "Rutina de respiración al empezar cada sesión de exposiciones.", "Mural de pensamientos negativos transformados en realistas."],
  },
  fuentes: [
    L.BOE,
    { t: "Miedo escénico, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Miedo_esc%C3%A9nico" },
    { t: "Glosofobia, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Glosofobia" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Afrontar los imprevistos sin bloquearse", "Ganar confianza poco a poco con la práctica"],
  bloques: [
    { tras: "Qué le pasa al cuerpo", html: `<h3>Los nervios también ayudan</h3><p>Un poco de nervios es <mark>bueno</mark>. La activación que produce la adrenalina nos hace estar más atentos, pensar más rápido y transmitir energía. Los psicólogos explican que el rendimiento mejora con un nivel medio de activación: si estamos demasiado relajados, nos falta chispa; si estamos demasiado nerviosos, nos bloqueamos.</p><p>Por eso muchos oradores no intentan eliminar los nervios, sino <b>reinterpretarlos</b>: en lugar de pensar «Estoy aterrado», piensan «Estoy activado y con ganas». El cuerpo siente casi lo mismo con la emoción que con el miedo; lo que cambia es cómo lo interpretamos. Decirte en voz baja «Estoy emocionado» antes de empezar puede ayudarte.</p>` },
    { tras: "La respiración, tu mejor aliada", html: `<h3>Otras técnicas para el cuerpo</h3><ul><li><b>Movimiento</b>: antes de entrar, camina, sacude suavemente las manos y los brazos, mueve los hombros. Ayuda a «gastar» el exceso de adrenalina.</li><li><b>Relajación muscular</b>: aprieta fuerte los puños cinco segundos y suéltalos; haz lo mismo con los hombros y las piernas. Al soltar, notarás cómo se relaja la tensión.</li><li><b>Agua</b>: ten un vaso o una botella a mano para la boca seca; beber un sorbo también te da una pausa para pensar.</li><li><b>Postura de seguridad</b>: ponerse de pie, recto y con los hombros abiertos durante un par de minutos ayuda a muchas personas a sentirse más seguras.</li></ul><p>Evita las bebidas con mucha cafeína o azúcar justo antes: aumentan el nerviosismo.</p>` },
    { tras: "La preparación quita miedo", html: `<h3>Visualizar el éxito</h3><p>La <b>visualización</b> es una técnica que usan deportistas y artistas. Consiste en <mark>imaginar con detalle</mark> que todo sale bien: cierra los ojos, respira tranquilo e imagina que entras en el aula, saludas, empiezas con tu primera frase, ves a tus compañeros atentos, explicas tus ideas con calma y terminas mientras te aplauden.</p><p>Hazlo varias veces en los días previos. El cerebro se acostumbra a la situación y, cuando llega el momento real, le resulta más familiar y menos amenazante. Funciona mejor si incluyes detalles concretos: la ropa que llevarás, el lugar exacto, las caras del público, la sensación de alivio al acabar.</p>` },
    { tras: "Cambiar los pensamientos", html: `<h3>Qué hacer si algo sale mal</h3><p>Los imprevistos les pasan a todos. Lo importante es <mark>no dramatizar</mark>:</p>${L.tb(["Si…", "Haz esto"], [["Te quedas en blanco", "respira, mira tu ficha, repite la última idea y continúa"], ["Te equivocas en una palabra", "corrígela con naturalidad y sigue"], ["Falla el proyector", "explica sin él; por eso llevas tus fichas"], ["Alguien se ríe", "sonríe, haz una pausa y sigue: casi nunca es por ti"], ["Te pasas de tiempo", "salta a la conclusión"]])}<p>No pidas perdón continuamente ni digas «Uy, qué nervios»: el público a menudo ni se da cuenta del fallo si tú no lo señalas.</p>` },
    { tras: "Cambiar los pensamientos", html: `<h3>La confianza se entrena</h3><p>Nadie pierde el miedo de un día para otro. La confianza crece con la <b>práctica gradual</b>: empieza hablando en situaciones fáciles y ve aumentando la dificultad. Por ejemplo: leer en voz alta en casa, explicar algo a un amigo, hacer una pregunta en clase, exponer en un grupo pequeño y, al final, ante toda la clase.</p><p>Después de cada intervención, haz un <b>balance amable</b>: anota tres cosas que salieron bien y una que quieres mejorar. Fíjate en tu progreso, no en la perfección. Y recuerda que tus compañeros sienten lo mismo: <mark>apoyaos</mark> entre vosotros con aplausos, miradas amables y valoraciones constructivas. Un aula que se apoya es el mejor escenario para perder el miedo.</p>` },
  ],
  videos: [
    ["La respiración, tu mejor aliada", L.vid("FbJ4_bS98Ls", "Cómo vencer los nervios al hablar en público: ejercicio de respiración", "Sebastián Lora", 732911)],
    ["Qué hacer si algo sale mal", L.vid("oRkP1m6e2Ms", "7 trucos para controlar los nervios al hablar en público", "Nacho Tellez", 1005828)],
  ],
  ejemplos: [
    ["Transforma estos pensamientos: «Voy a tartamudear», «Todos me van a mirar», «Seguro que me quedo en blanco».", ["«Voy a tartamudear» → «Si me trabo, hago una pausa y sigo».", "«Todos me van a mirar» → «Me miran porque les interesa lo que voy a contar».", "«Me quedaré en blanco» → «Tengo mis fichas; si me pasa, respiro y las miro»."], "pensamientos realistas que dan un plan de acción."],
    ["Diseña tu rutina de los cinco minutos anteriores a exponer.", ["Beber un poco de agua y repasar la ficha de la primera frase.", "Hacer tres respiraciones 4-2-6.", "Apretar y soltar los puños y adoptar una postura recta."], "agua + respiración + relajación + postura."],
    ["Durante tu exposición, el ordenador se apaga. ¿Qué haces?", ["No dramatizar: sonreír y decir con calma «Seguimos sin diapositivas».", "Usar las fichas con palabras clave.", "Describir con palabras lo que mostraba la imagen."], "seguir con el plan B sin pedir perdón constantemente."],
  ],
  errores: [
    "Pensar que los nervios significan que lo harás mal.",
    "No ensayar «para no ponerse más nervioso».",
    "Pedir perdón continuamente o anunciar que estás nervioso.",
    "Tomar bebidas energéticas justo antes de hablar.",
    "Compararse con los demás en lugar de fijarse en el propio progreso.",
  ],
  ejercicios: [
    ["Escribe tres síntomas del miedo escénico que hayas sentido alguna vez.", "Respuesta abierta. Por ejemplo: corazón acelerado, boca seca, voz temblorosa."],
    ["Explica por qué el cuerpo reacciona así.", "Porque el cerebro interpreta la situación como un peligro y libera adrenalina para prepararnos para huir o luchar."],
    ["Practica tres veces la respiración 4-2-6 y describe cómo te sientes.", "Respuesta abierta. Lo habitual es notar el corazón más lento y una sensación de calma."],
    ["Escribe de memoria la primera frase de tu próxima exposición.", "Respuesta abierta. Debe ser una frase completa con gancho (pregunta, dato o anécdota)."],
    ["Transforma: «Soy malísimo hablando en público».", "Por ejemplo: «Todavía estoy aprendiendo, y cada vez que practico lo hago un poco mejor»."],
    ["¿Qué harías si un compañero se ríe mientras hablas?", "Sonreír, hacer una pausa breve y continuar; probablemente no se ríe de ti."],
    ["Describe una visualización de tu próxima exposición en cinco líneas.", "Respuesta abierta. Debe incluir detalles concretos y terminar con una sensación de éxito."],
    ["Ordena de más fácil a más difícil: exponer ante la clase, leer en voz alta en casa, preguntar en clase, explicar algo a un amigo.", "Leer en casa, explicar a un amigo, preguntar en clase, exponer ante la clase."],
    ["¿Por qué un poco de nervios puede ser bueno?", "Porque nos mantiene atentos y con energía; el rendimiento es mejor con una activación media."],
    ["Escribe un balance amable de tu última exposición: tres cosas buenas y una mejora.", "Respuesta abierta. Por ejemplo: «Miré al público, hablé claro, terminé a tiempo; la próxima vez haré más pausas»."],
  ],
  quiz: [
    ["Imaginar con detalle que todo sale bien se llama…", ["visualización", "refutación", "proxémica"], 0, "La usan deportistas y artistas."],
    ["Si te quedas en blanco…", ["respira y mira tu ficha", "sal corriendo", "pide perdón muchas veces"], 0, "Pausa y continúa."],
    ["La confianza se gana con…", ["práctica gradual", "suerte", "no hablar nunca"], 0, "De lo fácil a lo difícil."],
    ["Apretar y soltar los puños es una técnica de…", ["relajación muscular", "argumentación", "dicción"], 0, "Libera tensión."],
    ["Antes de hablar conviene evitar…", ["bebidas con mucha cafeína", "el agua", "respirar"], 0, "Aumentan el nerviosismo."],
  ],
  tarjetas: [
    ["Visualización", "Imaginar con detalle que la exposición sale bien para acostumbrar al cerebro."],
    ["Plan B", "Tener fichas y saber qué hacer si algo falla: proyector, quedarse en blanco…"],
    ["Balance amable", "Tres cosas que salieron bien y una que mejorar."],
  ],
});
