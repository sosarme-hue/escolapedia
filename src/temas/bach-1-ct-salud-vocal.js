// Coro y Técnica Vocal I, 1º de Bachillerato. Tema 8 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ct");

module.exports = B.tema({
  titulo: "La salud vocal",
  minutos: 60,
  objetivos: [
    "Identificar los hábitos que cuidan la voz y los que la dañan",
    "Reconocer las señales de alarma de la fatiga vocal",
    "Conocer las lesiones vocales más comunes y cómo prevenirlas",
    "Elaborar un plan personal de higiene vocal",
  ],
  claves: ["higiene vocal", "hidratación", "fatiga vocal", "afonía", "disfonía", "nódulos", "reposo vocal", "foniatra"],
  pregunta: {
    texto: "Después de un partido o un concierto en el que has gritado mucho, al día siguiente apenas te sale la voz. ¿Qué ha pasado dentro de tu garganta?",
    respuesta: "Tus cuerdas vocales han chocado con demasiada fuerza durante horas y se han <mark>inflamado</mark>, como se inflama la piel con un roce. Por eso vibran mal y la voz sale ronca o no sale. Suele pasar en unos días con <mark>reposo</mark>, pero si se repite a menudo puede dejar lesiones. La voz se puede cuidar como cualquier otra parte del cuerpo.",
  },
  lectura: {
    titulo: "La profesión que más se resiente",
    html: `<p>¿Sabes qué trabajadores tienen más problemas de voz? Por delante de los cantantes están los <b>docentes</b>: hablan muchas horas al día, a menudo con ruido de fondo y sin haber aprendido técnica vocal. Muchos sufren ronquera crónica y algunos necesitan baja médica.</p>
    <p>Los cantantes profesionales, en cambio, cuidan su voz como un atleta cuida sus músculos: calientan, beben agua, descansan, evitan el humo y acuden al especialista ante cualquier problema. En este tema aprenderás esos hábitos, útiles para cantar y también para hablar toda la vida, en clase, en el trabajo o con los amigos.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es la salud vocal",
      html: `<p>La <b>salud vocal</b> es el buen estado del aparato fonador que permite hablar y cantar sin esfuerzo, sin dolor y con una voz estable. Depende de la <b>técnica</b> (cómo usamos la voz), de los <b>hábitos</b> (cómo vivimos) y del <b>entorno</b> (ruido, aire seco, humo).</p>
      <p>El conjunto de cuidados para mantenerla se llama <b>higiene vocal</b>. No se trata de dejar de usar la voz, sino de usarla bien y darle descanso, igual que hacemos con cualquier músculo.</p>`,
      svg: B.estrella("De qué depende la salud vocal", "Salud vocal", ["Técnica", "Hábitos", "Entorno", "Descanso", "Hidratación"]),
    },
    {
      h: "La hidratación",
      html: `<p>Las cuerdas vocales vibran cientos de veces por segundo y necesitan estar cubiertas por una fina capa de <b>moco</b> que las proteja y facilite el roce. Para eso hay que <b>beber agua</b> a lo largo del día (en torno a 1,5-2 litros), no solo cuando se canta.</p>
      <p>El agua que bebemos no toca las cuerdas vocales (va por el esófago), pero hidrata todo el cuerpo y, con él, la mucosa. También ayudan respirar <b>vapor</b> de agua y evitar ambientes muy secos. El café, el alcohol y las bebidas muy azucaradas resecan.</p>`,
      svg: B.comparar("Lo que hidrata y lo que reseca la voz", ["Hidrata", ["agua durante el día", "vapor de agua", "fruta y verdura", "ambiente húmedo"]], ["Reseca", ["café en exceso", "alcohol", "calefacción seca", "respirar por la boca"]]),
    },
    {
      h: "Hábitos que dañan la voz",
      html: `<p>Los principales enemigos de la voz son el <b>tabaco</b> (incluido el vapeo), que irrita y reseca la mucosa y está relacionado con el cáncer de laringe; <b>gritar</b> o hablar por encima del ruido (en discotecas, partidos o el patio); <b>carraspear</b> y <b>toser</b> a menudo; <b>susurrar</b> mucho, que tensa la laringe; y el <b>reflujo</b> de ácido del estómago, que irrita la garganta.</p>
      <p>También perjudican hablar o cantar mucho rato sin descanso, cantar fuera de la propia tesitura, imitar voces muy forzadas y dormir poco. Muchos de estos hábitos se pueden cambiar con pequeños gestos.</p>`,
      svg: B.cajas("Enemigos de la voz", [["Tabaco y vapeo", "irritan|y resecan"], ["Gritar", "golpe fuerte|de las cuerdas"], ["Carraspear", "roce brusco|repetido"], ["Susurrar mucho", "tensa|la laringe"], ["Ruido de fondo", "obliga|a forzar"], ["Poco descanso", "fatiga|vocal"]], { cols: 3 }),
      video: { id: "9H0U-b35Vi0", titulo: "Cuida tu voz: cómo curar la ronquera, la afonía y la disfonía", canal: "Miguel Manzo Vocal Studio", vistas: 2170498 },
    },
    {
      h: "La fatiga vocal y sus señales de alarma",
      html: `<p>La <b>fatiga vocal</b> es el cansancio de la voz tras un uso excesivo o incorrecto. Sus señales son: <b>ronquera</b> (voz áspera), sensación de <b>cuerpo extraño</b> o de tener que carraspear, <b>dolor</b> o escozor al hablar, pérdida de los <b>agudos</b> o de la potencia y voz que se «rompe».</p>
      <p>La <b>disfonía</b> es cualquier alteración de la voz (ronca, débil, aireada) y la <b>afonía</b> es su pérdida total. Si estos síntomas duran más de <b>dos o tres semanas</b>, hay que acudir al médico.</p>`,
      svg: B.flujo("Del cansancio a la lesión si no se cuida", ["Uso excesivo o con mala técnica", "Fatiga vocal: ronquera", "Disfonía que se repite", "Posible lesión en las cuerdas"]),
    },
    {
      h: "Lesiones vocales más comunes",
      html: `<p>Los <b>nódulos</b> son pequeños engrosamientos, como callos, que aparecen en el borde de las dos cuerdas vocales por el roce repetido; son frecuentes en docentes, cantantes y niños gritones. Los <b>pólipos</b> suelen ser una sola lesión blanda, a veces tras un esfuerzo brusco. La <b>laringitis</b> es una inflamación de la laringe, normalmente por infección o por abuso de la voz.</p>
      <p>Los nódulos impiden que las cuerdas cierren bien, y la voz sale ronca y aireada. Casi siempre se tratan con <b>reposo y reeducación vocal</b> con un logopeda; solo en algunos casos hace falta cirugía.</p>`,
      svg: B.rejilla("Lesiones vocales frecuentes", ["Lesión", "Causa", "Tratamiento"], [["Nódulos", "roce repetido", "logopedia"], ["Pólipo", "esfuerzo brusco", "a veces cirugía"], ["Laringitis", "infección o abuso", "reposo"], ["Fatiga", "uso excesivo", "descanso"]]),
      video: { id: "npPuWDxE-tg", titulo: "Nódulos en las cuerdas vocales: síntomas y por qué salen", canal: "Doc de la Voz", vistas: 301781 },
    },
    {
      h: "El reposo vocal y la voz en la adolescencia",
      html: `<p>El <b>reposo vocal</b> consiste en hablar y cantar lo mínimo durante un tiempo para que las cuerdas se recuperen. El reposo <b>relativo</b> permite hablar poco y en tono suave; el <b>absoluto</b>, que solo indica el médico, supone no usar la voz en absoluto. Ojo: susurrar no es reposo, porque tensa la laringe.</p>
      <p>En la <b>adolescencia</b> la voz cambia y es más frágil. Conviene cantar en la zona cómoda, sin buscar los extremos, sin imitar voces adultas forzadas y sin gritar en los momentos de muda.</p>`,
      svg: B.comparar("Reposo vocal relativo y absoluto", ["Relativo", ["hablar poco", "tono suave", "sin gritar", "sin cantar fuerte"]], ["Absoluto", ["no usar la voz", "lo indica el médico", "pocos días", "nada de susurrar"]]),
    },
    {
      h: "Los profesionales de la voz",
      html: `<p>Cuando la voz falla de forma persistente hay que acudir al especialista. El <b>otorrinolaringólogo</b> (otorrino) explora la laringe con una cámara (<b>laringoscopia</b>) y diagnostica las lesiones. El <b>foniatra</b> es el médico especializado en la voz y el habla.</p>
      <p>El <b>logopeda</b> se encarga de la <b>reeducación vocal</b>: enseña ejercicios de respiración, relajación y emisión para corregir los malos hábitos. Para cantar, además, el <b>profesor de técnica vocal</b> ayuda a usar la voz de forma sana y eficaz.</p>`,
      svg: B.cajas("Quién cuida la voz", [["Otorrino", "explora la laringe|diagnostica"], ["Foniatra", "médico|de la voz"], ["Logopeda", "reeducación|vocal"], ["Profesor de canto", "técnica|sana y eficaz"]]),
    },
    {
      h: "Un plan de higiene vocal",
      html: `<p>Un buen <b>plan de higiene vocal</b> incluye: beber agua durante el día; calentar antes de cantar o de hablar mucho rato y enfriar después; no gritar ni hablar por encima del ruido (acercarse o esperar); evitar el humo y el carraspeo (mejor tragar saliva o beber un sorbo); dormir lo suficiente y hacer pausas de voz.</p>
      <p>Y, sobre todo, <b>escuchar al cuerpo</b>: si la voz duele o se cansa, hay que parar. Un cantante que cuida su voz puede cantar durante toda la vida.</p>`,
      svg: B.ciclo("Hábitos diarios de higiene vocal", "Voz sana", ["Beber agua", "Calentar", "No gritar", "Sin humo", "Descansar"]),
    },
  ],
  figura: {
    titulo: "Cuidar la voz",
    items: [["Hidratar", "💧", "agua", "durante el día"], ["Evitar", "🚭", "humo, gritos", "carraspeo"], ["Descansar", "😴", "reposo", "y sueño"], ["Consultar", "🩺", "otorrino", "logopeda"]],
  },
  video: { id: "q3EAvk-yGjQ", titulo: "Limpiar la voz: ejercicios, remedios y consejos", canal: "Dra. Voz", vistas: 2990846 },
  quiz: [
    ["La higiene vocal es…", ["lavarse los dientes antes de cantar", "el conjunto de hábitos que cuidan la voz", "un tipo de vocalización", "una lesión"], 1, "Hábitos para mantener la voz sana."],
    ["El agua que bebemos…", ["toca directamente las cuerdas vocales", "hidrata el cuerpo y con él la mucosa vocal", "no sirve para la voz", "solo sirve si está fría"], 1, "Va por el esófago, pero hidrata la mucosa."],
    ["¿Cuál de estos hábitos daña la voz?", ["Beber agua", "Calentar", "Carraspear a menudo", "Dormir bien"], 2, "Roza bruscamente las cuerdas."],
    ["Susurrar mucho…", ["es un buen reposo vocal", "tensa la laringe", "hidrata la voz", "mejora los agudos"], 1, "No es reposo."],
    ["La pérdida total de la voz se llama…", ["disfonía", "afonía", "laringoscopia", "fatiga"], 1, "Afonía: sin voz."],
    ["Los nódulos vocales son…", ["engrosamientos por roce repetido en las cuerdas", "infecciones", "un tipo de coro", "músculos del cuello"], 0, "Como callos en las cuerdas."],
    ["Si la ronquera dura más de dos o tres semanas…", ["hay que gritar para ejercitar la voz", "hay que acudir al médico", "es normal siempre", "hay que cantar más"], 1, "Puede haber una lesión."],
    ["El especialista que hace la reeducación vocal es el…", ["dentista", "logopeda", "fisioterapeuta deportivo", "director del coro"], 1, "Enseña a usar bien la voz."],
    ["La laringoscopia sirve para…", ["ver la laringe con una cámara", "afinar", "respirar mejor", "medir la tesitura"], 0, "La hace el otorrino."],
    ["En lugar de carraspear conviene…", ["toser fuerte", "tragar saliva o beber un sorbo de agua", "gritar", "susurrar"], 1, "Así no se golpean las cuerdas."],
  ],
  examen: [
    ["La disfonía es…", ["una voz sana", "cualquier alteración de la voz", "un tipo de vocal", "la muda de la voz"], 1, "Ronca, débil, aireada…"],
    ["Un hábito que reseca la mucosa vocal es…", ["respirar vapor", "beber agua", "el exceso de café y alcohol", "comer fruta"], 2, "Deshidratan."],
    ["El reposo vocal absoluto…", ["lo decide cada uno siempre", "solo lo indica el médico", "consiste en susurrar", "dura meses"], 1, "Es una prescripción médica."],
    ["¿Qué profesión sufre más problemas de voz?", ["Los pilotos", "Los docentes", "Los programadores", "Los pintores"], 1, "Hablan muchas horas con ruido."],
    ["En la adolescencia, para cuidar la voz conviene…", ["cantar los extremos", "cantar en la zona cómoda sin forzar", "gritar en la muda", "no cantar nunca"], 1, "La voz está cambiando."],
  ],
  feynman: ["Qué es la higiene vocal y de qué depende la salud de la voz", "Qué hábitos dañan la voz y por qué", "Qué son la fatiga vocal, la disfonía y los nódulos", "Qué profesionales cuidan la voz"],
  mapa: ["LA SALUD VOCAL", [["Hábitos sanos", "agua · calentar · descansar"], ["Enemigos", "humo · gritos · carraspeo · ruido"], ["Alarmas y lesiones", "ronquera · nódulos · pólipos"], ["Profesionales", "otorrino · foniatra · logopeda"]]],
  tarjetas: [
    ["Higiene vocal", "Hábitos que mantienen la voz sana."],
    ["Fatiga vocal", "Cansancio de la voz por uso excesivo o incorrecto."],
    ["Disfonía", "Alteración de la voz."],
    ["Afonía", "Pérdida total de la voz."],
    ["Nódulos", "Engrosamientos en las cuerdas por roce repetido."],
    ["Reposo vocal", "Usar la voz lo mínimo para que se recupere."],
    ["Otorrino", "Médico que explora y diagnostica la laringe."],
    ["Logopeda", "Profesional de la reeducación de la voz."],
  ],
  ejemplos: [
    ["Un compañero está ronco tras un fin de semana de fiesta con música alta. ¿Qué le recomiendas?", ["Ha forzado la voz hablando por encima del ruido.", "Reposo vocal relativo unos días, sin susurrar.", "Beber agua y respirar vapor.", "Si sigue ronco más de dos o tres semanas, ir al otorrino."], "Reposo, hidratación y consulta si no mejora."],
    ["Diseña tu plan de higiene vocal para una semana de conciertos.", ["Beber agua repartida durante el día.", "Calentar antes de cada ensayo y enfriar después.", "Dormir 8 horas y evitar ambientes ruidosos.", "No gritar, no carraspear y alejarse del humo."], "Un plan sencillo, diario y realista."],
    ["Explica por qué los nódulos hacen la voz ronca y aireada.", ["Aparecen en el borde de las dos cuerdas, donde chocan.", "Al cantar, los nódulos chocan antes y dejan huecos a los lados.", "El aire escapa por esos huecos sin vibrar.", "La vibración es irregular."], "Las cuerdas no cierran bien: sale aire y la voz suena ronca."],
  ],
  errores: [
    "Creer que susurrar es descansar la voz.",
    "Pensar que una bebida caliente o un caramelo «curan» las cuerdas vocales.",
    "Seguir cantando o gritando con dolor de garganta.",
    "Esperar meses con ronquera sin ir al médico.",
  ],
  ejercicios: {
    b: [
      ["Escribe cuatro hábitos que cuidan la voz.", "Beber agua, calentar antes de cantar, dormir bien y no gritar (u otros: evitar el humo, hacer pausas)."],
      ["Escribe cuatro hábitos que la dañan.", "Fumar o vapear, gritar, carraspear y hablar por encima del ruido (o susurrar mucho, dormir poco)."],
      ["Diferencia disfonía y afonía.", "La disfonía es una alteración de la voz; la afonía, su pérdida total."],
      ["¿Qué hace un logopeda?", "La reeducación vocal: enseña a respirar, relajarse y emitir la voz correctamente para corregir malos hábitos."],
    ],
    m: [
      ["¿Por qué es importante la hidratación para las cuerdas vocales?", "Porque necesitan una capa de moco fluida que las proteja y facilite la vibración; con el cuerpo bien hidratado, la mucosa también lo está."],
      ["Explica qué son los nódulos y cómo se previenen.", "Engrosamientos en el borde de las cuerdas causados por el roce repetido; se previenen con buena técnica, sin gritar, con descanso e hidratación."],
      ["¿Por qué susurrar no es un buen reposo vocal?", "Porque tensa la laringe y obliga a forzar el paso del aire, lo que también cansa la voz."],
      ["¿Cuándo hay que acudir al médico por un problema de voz?", "Cuando la ronquera, el dolor o la pérdida de voz duran más de dos o tres semanas, o ante dolor intenso o sangrado."],
    ],
    a: [
      ["Durante una semana, anota cada día cuántas horas hablas, si gritas, cuánta agua bebes y cómo está tu voz por la noche. Analiza los datos y propón tres mejoras.", "Respuesta abierta: tabla con los datos, relación entre hábitos y estado de la voz y tres mejoras concretas."],
      ["Elabora una campaña (cartel o vídeo de 1 minuto) para cuidar la voz dirigida a los docentes o al alumnado de tu centro.", "Respuesta abierta: mensaje claro, consejos correctos, diseño atractivo y adecuado al público."],
    ],
  },
  glosario: [
    ["Higiene vocal", "Conjunto de hábitos para mantener la salud de la voz."],
    ["Fatiga vocal", "Cansancio de la voz tras un uso excesivo."],
    ["Disfonía", "Cualquier alteración de la calidad de la voz."],
    ["Afonía", "Pérdida completa de la voz."],
    ["Nódulos vocales", "Engrosamientos en los bordes de las cuerdas vocales."],
    ["Pólipo vocal", "Lesión blanda, normalmente única, en una cuerda vocal."],
    ["Laringitis", "Inflamación de la laringe."],
    ["Reposo vocal", "Reducción o supresión del uso de la voz para su recuperación."],
    ["Laringoscopia", "Exploración de la laringe con una cámara."],
    ["Reeducación vocal", "Tratamiento con ejercicios para corregir el uso de la voz."],
  ],
  situacion: {
    titulo: "Campaña «Cuida tu voz»",
    reto: "Diseñar una campaña para el Día Mundial de la Voz (16 de abril) en el centro.",
    pasos: [
      "Investigad los hábitos que cuidan y dañan la voz.",
      "Haced una encuesta breve sobre hábitos de voz en el centro.",
      "Diseñad carteles, un vídeo corto o una charla con consejos.",
      "Presentad la campaña y valorad su impacto.",
    ],
    producto: "Una campaña con carteles o vídeo y los resultados de la encuesta.",
    evaluacion: [
      "La información es correcta y está bien explicada.",
      "Los consejos son prácticos y realistas.",
      "El diseño es claro y atractivo.",
      "La encuesta se analiza con rigor.",
    ],
  },
  familias: [
    "Animad a beber agua y a evitar gritar en casa.",
    "Bajad el volumen de la televisión cuando se habla.",
    "Vigilad si la ronquera dura más de dos o tres semanas.",
    "Dad ejemplo evitando el humo de tabaco en casa.",
  ],
  saberes: "Coro y Técnica Vocal I: salud vocal e higiene vocal; hidratación; hábitos nocivos para la voz; fatiga vocal, disfonía y afonía; lesiones vocales frecuentes (nódulos, pólipos, laringitis); reposo vocal; la voz en la adolescencia; profesionales de la voz.",
  ideas: [
    "Celebrar el Día Mundial de la Voz (16 de abril) con una campaña.",
    "Invitar a un logopeda o foniatra a dar una charla.",
    "Incluir siempre botellas de agua en los ensayos.",
    "Hacer un diario de voz durante una semana.",
  ],
  fuentes: [
    { t: "Disfonía, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Disfon%C3%ADa" },
    { t: "Nódulo de cuerdas vocales, Wikipedia en español", url: "https://es.wikipedia.org/wiki/N%C3%B3dulo_de_cuerdas_vocales" },
  ],
});
