// Análisis Musical II, 2º de Bachillerato. Tema 5 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-am");

module.exports = B.tema({
  titulo: "El Clasicismo: forma sonata, sinfonía y cuarteto",
  minutos: 60,
  objetivos: [
    "Reconocer el estilo clásico: frases simétricas, melodía acompañada y claridad formal",
    "Analizar la forma sonata (exposición, desarrollo y reexposición) por audición",
    "Identificar la estructura en movimientos de la sinfonía, la sonata, el cuarteto y el concierto",
    "Reconocer el minueto con trío, el rondó y el tema con variaciones",
  ],
  claves: ["forma sonata", "exposición", "desarrollo", "reexposición", "sinfonía", "cuarteto", "minueto", "bajo Alberti"],
  pregunta: {
    texto: "¿Por qué una sinfonía de Mozart parece una conversación tan fácil de seguir?",
    respuesta: "Porque el Clasicismo busca la <mark>claridad</mark>: frases de cuatro y ocho compases que preguntan y responden, temas contrastados que se presentan, se discuten y vuelven, y una forma, la sonata, que el oyente de la época conocía y esperaba, como hoy esperamos el estribillo de una canción.",
  },
  lectura: {
    titulo: "Música para un público nuevo",
    html: `<p>En la segunda mitad del siglo XVIII, la música sale poco a poco de la iglesia y del palacio. En Londres, París o Viena aparecen los conciertos públicos: cualquiera que pague una entrada puede escuchar una sinfonía. Ese público burgués quiere música agradable, clara, elegante, que se entienda a la primera.</p>
    <p>Haydn, Mozart y el joven Beethoven respondieron con un lenguaje basado en el equilibrio y en una forma muy eficaz, la <b>forma sonata</b>, que organiza casi todos los primeros movimientos de sinfonías, sonatas, cuartetos y conciertos. Si aprendes a reconocerla, tendrás la llave de cientos de obras.</p>`,
  },
  secciones: [2, 3, 3],
  bloques: [
    {
      h: "El estilo clásico",
      html: `<p>El Clasicismo (hacia 1750-1820) reacciona contra la complejidad del Barroco tardío. Desaparece el bajo continuo y domina la <b>melodía acompañada</b>: una melodía clara en la voz aguda y un acompañamiento sencillo, como el <b>bajo Alberti</b> (acordes desplegados en el piano). Las frases son <b>simétricas</b>, de cuatro u ocho compases, organizadas en pregunta y respuesta (<b>antecedente y consecuente</b>).</p>
      <p>La armonía es tonal y clara, con predominio de tónica y dominante. Los contrastes ya no se dan por movimientos, sino <b>dentro</b> de un mismo movimiento: temas de carácter distinto, <b>crescendos</b> y <b>sforzandos</b>.</p>`,
      svg: B.formas("Frase clásica de ocho compases", [["Frase", "Ante Ante Cons Cons"]], "Antecedente (pregunta) y consecuente (respuesta)"),
    },
    {
      h: "La orquesta y el piano",
      html: `<p>La <b>orquesta clásica</b> se estandariza: cuerda en cinco secciones (violines I y II, violas, violonchelos y contrabajos), maderas a dos (flautas, oboes, fagots y, desde Mozart, clarinetes), dos trompas, dos trompetas y timbales. Unos treinta o cuarenta músicos.</p>
      <p>El <b>pianoforte</b> sustituye al clave, porque permite tocar piano y forte, matizar y hacer crescendos. Se convierte en el instrumento doméstico de la burguesía y en protagonista de sonatas y conciertos.</p>`,
      svg: B.orquesta("Plano de la orquesta clásica: cuerda delante, maderas y metales detrás, timbales al fondo"),
    },
    {
      h: "La forma sonata",
      html: `<p>Es la forma del primer movimiento (y a veces de otros). Tiene tres partes. La <b>exposición</b> presenta el <b>tema A</b> en la tónica; un <b>puente</b> modula a la dominante (o al relativo mayor si la obra es menor); allí aparece el <b>tema B</b>, de carácter contrastante, a menudo más lírico; una <b>coda</b> o tema conclusivo cierra la sección, que suele repetirse.</p>
      <p>El <b>desarrollo</b> fragmenta y transforma los temas, modula por tonalidades lejanas y crea tensión. La <b>reexposición</b> vuelve a presentar A y B, pero ahora los dos en la <b>tónica</b>, resolviendo el conflicto. Puede haber una <b>introducción</b> lenta y una <b>coda</b> final.</p>`,
      svg: B.formas("Forma sonata", [["Exposición", "A puente B coda"], ["Desarrollo", "Desarrollo"], ["Reexposición", "A puente B Coda"]], "A en tónica · B en dominante y luego en tónica"),
      video: { id: "DZz0Ow9c0ak", titulo: "Mozart, Sonata K. 545 «Fácil», 1. Allegro (análisis)", canal: "Rafael Fernández de Larrinoa", vistas: 158593 },
    },
    {
      h: "Cómo seguir una forma sonata al oído",
      html: `<p>Al escuchar, busca estos indicios. El tema A suele ser enérgico y rítmico; tras un pasaje de transición con escalas y arpegios, una pequeña pausa anuncia el tema B, más cantable. Si la exposición se repite, ya sabes dónde termina. En el desarrollo oirás fragmentos de los temas en tonalidades inestables, a menudo en menor y con más tensión.</p>
      <p>La señal de la reexposición es clara: vuelve el tema A exactamente como al principio, con sensación de «llegar a casa». Anota el minutaje de cada uno de estos momentos.</p>`,
      svg: B.flujo("Indicios de la forma sonata", ["Tema A enérgico", "Puente que modula", "Tema B cantable", "Desarrollo inestable", "Vuelve A: reexposición"]),
    },
    {
      h: "Los géneros en varios movimientos",
      html: `<p>La <b>sonata</b> (para piano solo o un instrumento y piano), el <b>trío</b>, el <b>cuarteto de cuerda</b> (dos violines, viola y violonchelo) y la <b>sinfonía</b> (para orquesta) comparten un esquema en <b>cuatro movimientos</b>: I rápido en forma sonata; II lento (forma ternaria, variaciones o sonata); III <b>minueto y trío</b>; IV rápido (rondó o sonata). La sonata suele tener tres.</p>
      <p>El cuarteto, que Haydn llevó a la perfección, es el género más íntimo: una conversación entre cuatro instrumentos iguales.</p>`,
      svg: B.rejilla("Movimientos de la sinfonía clásica", ["Mov.", "Tempo", "Forma"], [["I", "Allegro", "sonata"], ["II", "Andante/Adagio", "ABA, variaciones"], ["III", "Allegretto", "minueto y trío"], ["IV", "Allegro/Presto", "rondó o sonata"]]),
      video: { id: "TR7tBaLP17E", titulo: "La Sinfonía «de los adioses» de Haydn, una obra única: análisis", canal: "Música Explicada", vistas: 59171 },
    },
    {
      h: "Minueto, rondó y variaciones",
      html: `<p>El <b>minueto y trío</b> es una danza en 3/4 con forma ternaria: minueto (A), trío (B, más suave, a menudo con menos instrumentos) y vuelta al minueto (A), con cada parte en forma binaria con repeticiones. Beethoven lo sustituyó por el <b>scherzo</b>, más rápido y enérgico.</p>
      <p>El <b>rondó</b> (A B A C A) es típico de los finales por su carácter alegre y su estribillo pegadizo. El <b>tema con variaciones</b> presenta una melodía sencilla y la transforma en ritmo, modo, textura u ornamentación: las variaciones de Mozart sobre «Ah, vous dirai-je, maman» son un ejemplo célebre.</p>`,
      svg: B.formas("Tres formas del Clasicismo", [["Minueto", "A B A"], ["Rondó", "A B A C A"], ["Variaciones", "A A' A'' A'''"]], "Minueto (A) y trío (B)"),
    },
    {
      h: "El concierto clásico y la ópera",
      html: `<p>El <b>concierto clásico</b> enfrenta a un solista, casi siempre piano o violín, con la orquesta, en tres movimientos (rápido-lento-rápido). Su primer movimiento combina forma sonata y ritornello con una <b>doble exposición</b> (primero la orquesta, luego el solista) y una <b>cadencia</b>: pasaje virtuoso del solista, antes improvisado, justo antes del final.</p>
      <p>En la ópera, <b>Gluck</b> la reformó para hacerla más natural, y <b>Mozart</b> brilló tanto en la ópera bufa italiana (<i>Las bodas de Fígaro</i>, <i>Don Giovanni</i>) como en el <b>singspiel</b> alemán con diálogos hablados (<i>La flauta mágica</i>).</p>`,
      svg: B.comparar("Concierto barroco y concierto clásico", ["Barroco", ["ritornello", "tutti y solo", "ritmo motor", "sin cadencia"]], ["Clásico", ["doble exposición", "temas A y B", "piano o violín", "cadencia del solista"]]),
    },
    {
      h: "Haydn, Mozart y Beethoven",
      html: `<p><b>Haydn</b> (104 sinfonías, 68 cuartetos) fijó los géneros y es famoso por su humor y sus sorpresas (la Sinfonía «Sorpresa»). <b>Mozart</b> llevó el estilo a la máxima elegancia en sinfonías como la n.º 40 y la «Júpiter», conciertos para piano y óperas. <b>Beethoven</b> partió del modelo clásico y lo amplió: desarrollos enormes, codas largas, el scherzo y, en la Novena Sinfonía, un coro final.</p>
      <p>Por eso se le considera el puente hacia el Romanticismo, que estudiarás en el tema siguiente.</p>`,
      svg: B.cronologia("La Escuela de Viena", [["1759", "Haydn sinf. 1"], ["1772", "cuartetos op. 20"], ["1786", "Fígaro"], ["1788", "Mozart 40"], ["1804", "Heroica"], ["1824", "Novena"]]),
    },
  ],
  figura: {
    titulo: "Claves del Clasicismo",
    items: [["Estilo", "4 + 4", "frases", "simétricas"], ["Forma sonata", "Ex · Des · Reex", "temas A", "y B"], ["Géneros", "4 movimientos", "sinfonía", "cuarteto"], ["Autores", "Viena", "Haydn, Mozart", "Beethoven"]],
  },
  video: { id: "9kEFC2wezJ8", titulo: "Te explico la Sinfonía 40 de Mozart", canal: "ElSus MG", vistas: 9876 },
  quiz: [
    ["El acompañamiento típico del piano clásico es el…", ["bajo continuo", "bajo Alberti", "ostinato", "pedal"], 1, "Acordes desplegados."],
    ["Las frases clásicas suelen tener…", ["3 y 5 compases", "4 y 8 compases", "compases irregulares", "un solo compás"], 1, "Simetría pregunta-respuesta."],
    ["En la exposición, el tema B aparece en…", ["la tónica", "la dominante o el relativo mayor", "cualquier tono", "el modo dórico"], 1, "Contraste tonal."],
    ["La sección que fragmenta los temas y modula es el…", ["puente", "desarrollo", "trío", "ritornello"], 1, "Zona de tensión."],
    ["En la reexposición, A y B están en…", ["la dominante", "la tónica", "tonos lejanos", "el relativo menor"], 1, "Se resuelve el conflicto."],
    ["El cuarteto de cuerda lo forman…", ["4 violines", "2 violines, viola y violonchelo", "piano y tres cuerdas", "violín, flauta, oboe y chelo"], 1, "Plantilla fijada por Haydn."],
    ["El tercer movimiento de la sinfonía clásica suele ser…", ["una fuga", "un minueto y trío", "un recitativo", "una gigue"], 1, "Danza en 3/4."],
    ["El instrumento que sustituye al clave es el…", ["órgano", "pianoforte", "laúd", "arpa"], 1, "Permite matices de dinámica."],
    ["La cadencia del concierto es…", ["un acorde final", "un pasaje virtuoso del solista", "una danza", "el tema B"], 1, "Antes improvisada."],
    ["La flauta mágica es un…", ["oratorio", "singspiel", "concierto", "cuarteto"], 1, "Ópera alemana con diálogos hablados."],
  ],
  examen: [
    ["Tras un desarrollo inestable vuelve el tema inicial exactamente igual. ¿Qué empieza?", ["Exposición", "Reexposición", "Trío", "Coda"], 1, "Vuelta a la tónica."],
    ["Escuchas una danza en 3/4 con una sección central más suave y vuelta al principio. Es…", ["un rondó", "un minueto y trío", "una sonata", "una fuga"], 1, "A B A."],
    ["Una melodía infantil se repite transformada siete veces. ¿Qué forma es?", ["Rondó", "Tema con variaciones", "Sonata", "Binaria"], 1, "Como las de «Ah, vous dirai-je, maman»."],
    ["¿Qué rasgo indica Clasicismo y no Barroco?", ["Bajo continuo", "Bajo Alberti y crescendos", "Fuga", "Ritmo motor constante"], 1, "Melodía acompañada y matices graduales."],
    ["El finale de una sinfonía repite un estribillo alegre entre secciones distintas. Su forma es…", ["sonata", "rondó", "minueto", "da capo"], 1, "A B A C A."],
  ],
  feynman: ["Rasgos del estilo clásico", "Las tres partes de la forma sonata", "Movimientos de una sinfonía clásica", "Diferencias entre concierto barroco y clásico"],
  mapa: ["EL CLASICISMO", [["Estilo", "claridad · frases simétricas · Alberti"], ["Forma sonata", "exposición · desarrollo · reexposición"], ["Géneros", "sinfonía · cuarteto · sonata · concierto"], ["Otras formas", "minueto · rondó · variaciones"]]],
  tarjetas: [
    ["Bajo Alberti", "Acompañamiento de acordes desplegados en la mano izquierda."],
    ["Exposición", "Primera parte de la sonata: presenta los temas A y B."],
    ["Puente", "Transición que modula entre los temas A y B."],
    ["Desarrollo", "Parte central que fragmenta los temas y modula."],
    ["Reexposición", "Vuelta de los temas, ahora en la tónica."],
    ["Cuarteto de cuerda", "Dos violines, viola y violonchelo."],
    ["Minueto y trío", "Danza en 3/4 con forma A B A."],
    ["Cadencia del concierto", "Pasaje virtuoso del solista sin orquesta."],
  ],
  ejemplos: [
    ["Primer movimiento de 7 minutos: tema enérgico 0:00, tema lírico 0:45, la exposición se repite 1:40, pasaje inestable 3:20, vuelve el tema inicial 4:30. Esquema.", ["0:00-3:20 exposición (repetida).", "3:20-4:30 desarrollo.", "4:30 reexposición."], "Forma sonata: Exposición (A 0:00, B 0:45, repetición 1:40), Desarrollo 3:20, Reexposición 4:30."],
    ["Un cuarteto en Do mayor tiene su tema B en Sol mayor en la exposición. ¿En qué tono estará en la reexposición?", ["Exposición: B en dominante.", "Reexposición: todo en tónica."], "En Do mayor."],
    ["Explica por qué la Novena de Beethoven anuncia el Romanticismo.", ["Dimensiones enormes.", "Scherzo en lugar de minueto.", "Coro y solistas en el final."], "Amplía la forma clásica y añade la voz, rompiendo los límites del género."],
  ],
  errores: [
    "Decir que el tema B de la reexposición sigue en la dominante.",
    "Confundir forma sonata con el género sonata.",
    "Llamar desarrollo a cualquier sección nueva.",
    "Atribuir bajo continuo a la música clásica.",
  ],
  ejercicios: {
    b: [
      ["Enumera cuatro rasgos del estilo clásico.", "Melodía acompañada, frases simétricas, armonía tonal clara, contrastes dentro del movimiento (y orquesta clásica sin continuo)."],
      ["Indica las partes de la forma sonata.", "Exposición (A, puente, B, coda), desarrollo y reexposición (A y B en tónica), con posible introducción y coda."],
      ["¿Qué instrumentos forman la orquesta clásica?", "Cuerda, maderas a dos (flauta, oboe, clarinete, fagot), dos trompas, dos trompetas y timbales."],
      ["Escribe la forma del rondó y del minueto con trío.", "Rondó: A B A C A. Minueto con trío: A B A."],
    ],
    m: [
      ["Explica el plan tonal de la forma sonata en una obra en tono mayor.", "Exposición: A en tónica, B en dominante. Desarrollo: tonos alejados. Reexposición: A y B en tónica."],
      ["Compara el cuarteto de cuerda y la sinfonía.", "Misma estructura en cuatro movimientos; el cuarteto es de cámara (4 músicos iguales) y la sinfonía es orquestal."],
      ["¿Qué es la doble exposición del concierto clásico?", "La orquesta presenta los temas en la tónica y después el solista los repite con la orquesta, modulando al tema B."],
      ["Diferencia minueto y scherzo.", "Ambos en 3/4 y forma A B A; el scherzo, introducido por Beethoven, es más rápido, enérgico y con sorpresas."],
    ],
    a: [
      ["Escucha el primer movimiento de la Sinfonía n.º 40 de Mozart y marca con minutaje las secciones de la forma sonata.", "Respuesta abierta: tema A (inicio), puente, tema B en el relativo mayor, repetición, desarrollo, reexposición con B en sol menor y coda."],
      ["Compara un concierto de Vivaldi con uno para piano de Mozart en cinco rasgos.", "Respuesta abierta: continuo / sin continuo, ritornello / doble exposición, ritmo motor / temas contrastados, sin / con cadencia, orquesta de cuerda / orquesta clásica."],
    ],
  },
  glosario: [
    ["Antecedente", "Primera mitad de una frase, como una pregunta."],
    ["Consecuente", "Segunda mitad, que responde y cierra."],
    ["Sforzando", "Acento fuerte y repentino."],
    ["Pianoforte", "Primer piano, capaz de tocar suave y fuerte."],
    ["Scherzo", "Movimiento rápido en 3/4 que sustituye al minueto."],
    ["Coda", "Sección final que cierra una obra o movimiento."],
    ["Ópera bufa", "Ópera cómica italiana."],
    ["Singspiel", "Ópera alemana con diálogos hablados."],
    ["Escuela de Viena", "Haydn, Mozart y Beethoven."],
  ],
  situacion: {
    titulo: "Mapa sonoro de una sinfonía",
    reto: "Elaborar un mapa visual interactivo del primer movimiento de una sinfonía clásica.",
    pasos: [
      "Elegid un primer movimiento de Haydn o Mozart.",
      "Escuchadlo y marcad con minutaje temas, puente, desarrollo y reexposición.",
      "Diseñad un mapa con colores para cada sección y tonalidad.",
      "Presentadlo a la clase siguiendo la audición en directo.",
    ],
    producto: "Un mapa sonoro de la forma sonata con minutaje.",
    evaluacion: [
      "Localiza correctamente las secciones.",
      "Indica el plan tonal.",
      "Diferencia el carácter de los temas.",
      "Explica la obra con vocabulario técnico.",
    ],
  },
  familias: [
    "Escuchad juntos el inicio de la Sinfonía 40 de Mozart y tarareadla.",
    "Pedidle que os avise cuando vuelva el tema en una reexposición.",
    "Ved un fragmento de La flauta mágica y buscad el aria de la Reina de la Noche.",
    "Comentad por qué la música clásica sigue usándose en anuncios.",
  ],
  saberes: "Análisis Musical II: la música del Clasicismo: estilo galante y clásico, melodía acompañada, frase simétrica; orquesta clásica y pianoforte; forma sonata; sonata, cuarteto, sinfonía y concierto clásico; minueto y trío, scherzo, rondó y tema con variaciones; ópera bufa y singspiel; Haydn, Mozart y Beethoven.",
  ideas: [
    "Seguir la forma sonata con tarjetas de colores que se levantan en cada sección.",
    "Comparar el mismo tema en la exposición y en la reexposición.",
    "Bailar un minueto para comprender su compás y su frase.",
    "Crear variaciones de una melodía infantil cambiando ritmo y modo.",
  ],
  fuentes: [
    { t: "Forma sonata, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Forma_sonata" },
    { t: "Sinfonía n.º 40 (Mozart), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sinfon%C3%ADa_n.%C2%BA_40_(Mozart)" },
  ],
});
