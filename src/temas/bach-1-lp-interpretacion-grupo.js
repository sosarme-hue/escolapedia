// Lenguaje y Práctica Musical, 1º de Bachillerato. Tema 7 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-lp");

module.exports = B.tema({
  titulo: "La interpretación en grupo",
  minutos: 60,
  objetivos: [
    "Conocer las principales agrupaciones musicales y los papeles de cada parte",
    "Mantener el pulso común, afinar y equilibrar el sonido del conjunto",
    "Seguir los gestos básicos de dirección y organizar un ensayo eficaz",
    "Preparar una actuación en público gestionando los nervios",
  ],
  claves: ["agrupación", "papeles", "empaste", "pulso común", "dirección", "ensayo", "actuación"],
  pregunta: {
    texto: "Si cada músico toca su parte perfectamente, ¿suena bien el grupo?",
    respuesta: "No necesariamente. Tocar en grupo exige algo más que saberse la parte: hay que <mark>escuchar a los demás</mark>, compartir el mismo pulso, afinar juntos, equilibrar el volumen y respirar las frases a la vez. Un grupo suena bien cuando cada persona toca pensando en el resultado común.",
  },
  lectura: {
    titulo: "Una orquesta que nació de un sueño",
    html: `<p>En 1975, el economista y músico venezolano <b>José Antonio Abreu</b> reunió a once jóvenes en un garaje de Caracas para tocar juntos. De aquel ensayo nació <b>El Sistema</b>, una red de orquestas y coros infantiles y juveniles que ha formado a cientos de miles de niños y niñas, muchos de barrios sin recursos.</p>
    <p>Abreu decía que una orquesta es una pequeña sociedad: cada uno tiene su papel, todos dependen de todos y el resultado solo es bueno si se escuchan. De El Sistema salieron directores como Gustavo Dudamel. Su lección vale para cualquier grupo, desde un cuarteto de cuerda hasta una banda de rock en el instituto.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Las agrupaciones musicales",
      html: `<p>Según el número de intérpretes, se habla de <b>dúo</b> (2), <b>trío</b> (3), <b>cuarteto</b> (4), <b>quinteto</b> (5) y así sucesivamente. Hasta unos diez músicos se considera <b>música de cámara</b>: cada persona toca una parte propia y no suele haber director.</p>
      <p>Las agrupaciones grandes sí suelen tenerlo: la <b>orquesta</b> sinfónica (cuerda, viento madera, viento metal y percusión), la <b>banda</b> (vientos y percusión), el <b>coro</b> (voces, normalmente soprano, contralto, tenor y bajo) y la <i>big band</i> de jazz.</p>
      <p>En la música popular, el <b>combo</b> o banda reúne voz, guitarras, teclado, bajo y batería.</p>`,
      svg: B.rejilla("Agrupaciones habituales", ["Agrupación", "Formación", "¿Director?"], [["Cuarteto de cuerda", "2 vl., viola, vc.", "no"], ["Coro mixto", "S, A, T, B", "sí"], ["Orquesta", "cuerda, viento, perc.", "sí"], ["Banda", "viento y percusión", "sí"], ["Combo pop", "voz, guit., bajo, bat.", "no"]]),
    },
    {
      h: "Los papeles dentro del grupo",
      html: `<p>En casi cualquier conjunto se reparten cuatro <b>papeles</b>. La <b>melodía</b> lleva la idea principal y debe oírse por encima. La <b>armonía</b> (acordes de teclado, guitarra, voces intermedias) da color y apoyo. El <b>bajo</b> sostiene los acordes desde abajo y marca los cambios. El <b>ritmo</b> (batería, percusión) organiza el pulso.</p>
      <p>Un mismo instrumento puede cambiar de papel según el momento. Saber qué papel tienes en cada pasaje te dice <mark>cuánto debes destacar</mark>: si acompañas, deja espacio a la melodía; si llevas el tema, proyecta el sonido.</p>`,
      svg: B.cajas("Los cuatro papeles de un conjunto", [["Melodía", "idea principal|en primer plano"], ["Armonía", "acordes|color y apoyo"], ["Bajo", "sostiene|los acordes"], ["Ritmo", "organiza|el pulso"]]),
    },
    {
      h: "Afinar y empastar",
      html: `<p>Antes de tocar, el grupo <b>afina</b> a partir de una nota común, normalmente el La 440 Hz dado por un afinador, un teclado o el oboe en la orquesta. Durante la obra hay que seguir escuchando: el frío, el calor o la fatiga desafinan.</p>
      <p>El <b>empaste</b> es la fusión de los sonidos individuales en uno común. Se consigue con un volumen equilibrado, un mismo tipo de ataque, vocales iguales en el coro y respiraciones compartidas.</p>
      <p>Una regla útil: <mark>si no oyes a tus compañeros, estás tocando demasiado fuerte</mark>. El equilibrio entre planos sonoros es responsabilidad de todos.</p>`,
      svg: B.flujo("Del sonido individual al sonido de grupo", ["Afinar a una nota común", "Igualar el ataque y el volumen", "Respirar las frases a la vez", "Escuchar y corregir sin parar"]),
    },
    {
      h: "El pulso común",
      html: `<p>Tocar juntos exige un <b>pulso compartido</b>. Al empezar, alguien da la <b>cuenta de entrada</b>: «un, dos, tres, cuatro» en el tempo de la obra, o un gesto del director. Esa cuenta fija el tempo y el momento exacto de inicio.</p>
      <p>Durante la obra, cada músico debe <b>contar los silencios</b> y estar listo para entrar a tiempo. En las músicas modernas, la batería o un metrónomo en auriculares (<i>click</i>) ayudan a no correr ni frenar.</p>
      <p>Los errores más comunes son acelerar en los pasajes fuertes y frenar en los difíciles: ensayar con metrónomo los corrige.</p>`,
      svg: B.rejilla("Cuenta de entrada en 4/4: el grupo entra en el siguiente pulso fuerte", ["Pulso", "1", "2", "3", "4", "1"], [["Se dice", "un", "dos", "tres", "cuatro", "—"], ["Se toca", "—", "—", "—", "—", "¡todos!"]]),
    },
    {
      h: "La dirección",
      html: `<p>El <b>director</b> unifica el tempo, las entradas, la dinámica y el carácter. Con la mano derecha (o la batuta) marca el <b>compás</b> con figuras fijas: en 2/4, abajo-arriba; en 3/4, abajo-derecha-arriba; en 4/4, abajo-izquierda-derecha-arriba. El primer pulso siempre va hacia abajo.</p>
      <p>Antes de empezar da un pulso de <b>preparación</b> (la anacrusa del gesto), en el que todos respiran. La mano izquierda indica dinámica, entradas y expresión. Para terminar, hace un gesto de <b>corte</b>.</p>
      <p>Mirar al director, aunque sea de reojo, es tan importante como leer la partitura.</p>`,
      svg: B.rejilla("Gestos básicos de dirección", ["Compás", "Recorrido de la mano"], [["2/4", "abajo · arriba"], ["3/4", "abajo · derecha · arriba"], ["4/4", "abajo · izq. · der. · arriba"], ["Preparación", "un pulso antes, se respira"], ["Corte", "círculo y cierre de la mano"]]),
    },
    {
      h: "Cómo ensayar",
      html: `<p>Un buen ensayo tiene un <b>objetivo</b> concreto. Una estructura eficaz: calentamiento y afinación; una pasada para ver el estado general; trabajo de <b>pasajes difíciles</b> por secciones y a tempo lento; unión de las partes; y una <b>pasada final</b> a tempo, sin parar, como en el concierto.</p>
      <p>Para corregir, es mejor parar poco y con indicaciones claras: «desde el compás 17, más suave». Hay que llevar lápiz para anotar en la partitura.</p>
      <p><b>Grabar</b> el ensayo y escucharlo después muestra problemas que no se notan mientras se toca.</p>`,
      svg: B.flujo("Estructura de un ensayo eficaz", ["Calentar y afinar", "Pasada general", "Pasajes difíciles lentos y por secciones", "Pasada final a tempo y grabación"]),
      video: { id: "0Ri7BIP-YXY", titulo: "Consejos para ensayar mejor con tu banda", canal: "Ariel Pozzo", vistas: 123689 },
    },
    {
      h: "Actitud en el grupo",
      html: `<p>La música de conjunto es un trabajo en equipo. Requiere <b>puntualidad</b>, llegar con la parte estudiada y cuidar el material. Exige <b>escucha</b> y <b>respeto</b>: no tocar mientras se dan indicaciones, aceptar las correcciones y comentar los problemas con amabilidad.</p>
      <p>Mucha comunicación es <b>no verbal</b>: miradas para coordinar una entrada, un gesto de cabeza para un final, una respiración visible antes de empezar. En la música de cámara, uno de los intérpretes suele hacer de guía con estos gestos.</p>
      <p>Cada persona es imprescindible: <mark>si falta una parte, la obra cojea</mark>.</p>`,
      svg: B.cajas("Actitudes que hacen sonar mejor al grupo", [["Preparación", "parte estudiada|puntualidad"], ["Escucha", "a los demás|y a mí"], ["Respeto", "silencio en|las indicaciones"], ["Comunicación", "miradas|y gestos"]]),
      video: { id: "D6Xl6Ru5zxo", titulo: "Así es un ensayo de músicos profesionales", canal: "Juan Fra Nieto", vistas: 212572 },
    },
    {
      h: "Actuar en público",
      html: `<p>La actuación es el resultado del trabajo. Conviene preparar también lo que no es música: el <b>orden</b> de las obras, la colocación en el escenario, la entrada, el <b>saludo</b> y la salida.</p>
      <p>Los <b>nervios</b> o miedo escénico son normales y, bien gestionados, dan energía. Ayudan la respiración lenta y profunda, un calentamiento tranquilo, centrarse en la música y no en el público y, sobre todo, haber ensayado la obra entera muchas veces.</p>
      <p>Si algo sale mal, la regla es <mark>no parar</mark>: se sigue contando y se entra en el siguiente punto seguro. El público casi nunca nota un error que no se muestra.</p>`,
      svg: B.flujo("Antes y durante la actuación", ["Ensayo general completo", "Respiración y calentamiento tranquilo", "Entrada, mirada al grupo y cuenta", "Ante un error: seguir y volver a entrar"]),
    },
  ],
  figura: {
    titulo: "Claves de la interpretación en grupo",
    items: [["Papeles", "M · A · B · R", "melodía, armonía", "bajo y ritmo"], ["Sonido", "La 440", "afinar", "y empastar"], ["Tiempo", "1 · 2 · 3 · 4", "cuenta y", "pulso común"], ["Equipo", "ensayo", "escucha", "y actitud"]],
  },
  video: { id: "T2g_1-N6Vlw", titulo: "¿Pueden desconocidos dirigir una orquesta?", canal: "Pablo Lluch", vistas: 646513 },
  quiz: [
    ["Una agrupación de cuatro músicos es un…", ["trío", "cuarteto", "quinteto", "dúo"], 1, "Cuatro partes."],
    ["La música de cámara se caracteriza por…", ["muchos músicos y director", "pocos músicos con parte propia, sin director", "solo voces", "solo percusión"], 1, "Hasta unos diez intérpretes."],
    ["Las voces del coro mixto son…", ["soprano, contralto, tenor y bajo", "solo sopranos", "tenor y bajo", "violín y viola"], 0, "SATB."],
    ["El papel que sostiene los acordes desde abajo es…", ["la melodía", "el bajo", "el ritmo", "la armonía"], 1, "Marca los cambios de acorde."],
    ["El empaste es…", ["tocar más fuerte", "la fusión de los sonidos en uno común", "afinar un instrumento", "un tipo de compás"], 1, "Sonido de grupo."],
    ["En la orquesta, la nota para afinar la da normalmente…", ["el violín", "el oboe", "la trompeta", "el timbal"], 1, "Un La 440 Hz."],
    ["En el gesto de dirección, el primer pulso del compás va…", ["arriba", "hacia abajo", "a la derecha", "a la izquierda"], 1, "Siempre hacia abajo."],
    ["El gesto de 3/4 es…", ["abajo-arriba", "abajo-derecha-arriba", "abajo-izquierda-derecha-arriba", "un círculo"], 1, "Tres movimientos."],
    ["Si te equivocas en un concierto debes…", ["parar y empezar de nuevo", "seguir contando y entrar en un punto seguro", "salir del escenario", "tocar más fuerte"], 1, "No parar."],
    ["Si no oyes a tus compañeros, probablemente…", ["tocas demasiado suave", "tocas demasiado fuerte", "estás desafinado", "vas lento"], 1, "Baja tu volumen."],
  ],
  examen: [
    ["En un pasaje acompañas a la flauta que lleva el tema. ¿Qué haces?", ["tocar más fuerte que ella", "tocar en segundo plano para dejarla oír", "dejar de tocar", "acelerar"], 1, "El acompañamiento deja espacio a la melodía."],
    ["El grupo acelera siempre en los pasajes fuertes. ¿Qué ayuda más?", ["tocar más suave", "ensayar esos pasajes con metrónomo", "cambiar de obra", "no ensayarlos"], 1, "El metrónomo fija el pulso."],
    ["¿Para qué sirve el pulso de preparación del director?", ["para afinar", "para fijar el tempo y que todos respiren y entren juntos", "para terminar", "para saludar"], 1, "Es la anacrusa del gesto."],
    ["¿Qué orden de ensayo es más eficaz?", ["pasada final, calentar, pasajes", "calentar, pasada general, pasajes difíciles, pasada final", "solo pasadas completas", "solo pasajes difíciles"], 1, "De lo general a lo concreto y vuelta al conjunto."],
    ["¿Qué es más útil para gestionar los nervios?", ["no ensayar para no cansarse", "respiración lenta y haber ensayado la obra entera", "mirar fijamente al público", "tocar más rápido"], 1, "Preparación y respiración."],
  ],
  feynman: ["Qué diferencia hay entre música de cámara y una orquesta", "Los cuatro papeles de un grupo y cómo cambian", "Cómo se marca el compás de 4/4 al dirigir", "Cómo organizar un ensayo eficaz"],
  mapa: ["LA INTERPRETACIÓN EN GRUPO", [["Agrupaciones", "cámara · orquesta · banda · coro"], ["Sonido", "papeles · afinación · empaste"], ["Coordinación", "pulso · cuenta · dirección"], ["Trabajo", "ensayo · actitud · actuación"]]],
  tarjetas: [
    ["Música de cámara", "Pequeño grupo con una parte por intérprete."],
    ["Cuarteto de cuerda", "Dos violines, viola y violonchelo."],
    ["Empaste", "Fusión de las voces o instrumentos en un sonido común."],
    ["Cuenta de entrada", "Pulsos que se cuentan antes de empezar a tocar."],
    ["Preparación", "Gesto previo del director para respirar y entrar."],
    ["Corte", "Gesto que indica el final del sonido."],
    ["Pasada", "Interpretación de la obra completa sin parar."],
    ["Miedo escénico", "Nervios ante la actuación en público."],
  ],
  ejemplos: [
    ["Reparte los papeles en una canción pop para voz, guitarra, teclado, bajo y batería.", ["Melodía: voz.", "Armonía: guitarra y teclado.", "Bajo: bajo eléctrico.", "Ritmo: batería."], "Voz (melodía), guitarra y teclado (armonía), bajo (bajo) y batería (ritmo)."],
    ["Da la cuenta de entrada para una obra en 3/4 a tempo de vals.", ["Elige el tempo cantando mentalmente el inicio.", "Cuenta un compás completo: «un, dos, tres».", "Todos entran en el siguiente «uno»."], "«Un, dos, tres» y entrada en el primer pulso del compás siguiente."],
    ["Planifica un ensayo de 50 minutos para un concierto en una semana.", ["5 min: calentar y afinar.", "10 min: pasada general.", "20 min: pasajes difíciles por secciones.", "10 min: pasada final grabada; 5 min: comentar."], "Un ensayo con objetivo, trabajo de detalle y pasada final grabada."],
  ],
  errores: [
    "Tocar siempre al mismo volumen sin tener en cuenta el papel de cada momento.",
    "No contar los silencios y perder la entrada.",
    "Parar ante cualquier error en lugar de seguir.",
    "Ensayar solo pasando la obra entera sin trabajar los pasajes difíciles.",
  ],
  ejercicios: {
    b: [
      ["Escribe la formación del cuarteto de cuerda y del coro mixto.", "Cuarteto: dos violines, viola y violonchelo. Coro mixto: soprano, contralto, tenor y bajo."],
      ["Nombra los cuatro papeles de un conjunto.", "Melodía, armonía, bajo y ritmo."],
      ["Describe el gesto de dirección del 2/4.", "Abajo en el primer pulso y arriba en el segundo."],
      ["¿Qué es el empaste?", "La fusión de los sonidos individuales en un sonido de grupo homogéneo."],
    ],
    m: [
      ["¿Por qué la música de cámara puede tocarse sin director?", "Porque hay pocos músicos, se ven y se escuchan bien y se coordinan con miradas, respiraciones y gestos de un intérprete guía."],
      ["Explica dos causas de desafinación en grupo y cómo evitarlas.", "Cambios de temperatura y fatiga; se evitan afinando antes y durante el ensayo y escuchando a los compañeros para corregir."],
      ["¿Qué hace la mano izquierda del director?", "Indica dinámica, entradas, expresión y cortes, mientras la derecha marca el compás."],
      ["Propón tres normas de actitud para un ensayo.", "Por ejemplo: llegar puntual y con la parte estudiada; guardar silencio durante las indicaciones; anotar las correcciones con lápiz."],
    ],
    a: [
      ["Graba un ensayo de tu grupo y analiza afinación, pulso, equilibrio y entradas. Propón una mejora para cada aspecto.", "Respuesta abierta: debe señalar momentos concretos (minuto o compás) y proponer acciones como metrónomo, trabajo por secciones o ajuste de volumen."],
      ["Dirige a tus compañeros en una pieza breve: cuenta o preparación, compás, una indicación de dinámica y el corte final.", "Respuesta abierta: se valora la claridad del gesto, el tempo estable y que el grupo responda a las indicaciones."],
    ],
  },
  glosario: [
    ["Big band", "Gran orquesta de jazz con saxos, trompetas, trombones y ritmo."],
    ["Combo", "Pequeño grupo de música popular o jazz."],
    ["Batuta", "Varilla con la que dirige el director."],
    ["Click", "Metrónomo que se escucha por auriculares."],
    ["Planos sonoros", "Niveles de importancia de cada parte en el conjunto."],
    ["Ensayo general", "Último ensayo completo, como en la actuación."],
    ["Intérprete guía", "Músico que coordina con gestos un grupo sin director."],
    ["Atril", "Soporte para la partitura."],
  ],
  situacion: {
    titulo: "Concierto de aula",
    reto: "Preparar en grupos una obra breve y presentarla en un pequeño concierto para otra clase.",
    pasos: [
      "Elegid la obra y repartid los papeles y las partes.",
      "Planificad tres ensayos con objetivos concretos.",
      "Grabad el segundo ensayo y anotad mejoras.",
      "Preparad la entrada, el saludo y actuad en el concierto.",
    ],
    producto: "La actuación en directo y un diario de ensayos del grupo.",
    evaluacion: [
      "El grupo mantiene el pulso y entra a tiempo.",
      "Hay equilibrio entre la melodía y el acompañamiento.",
      "Los ensayos tuvieron objetivos y se corrigieron errores.",
      "La actitud en escena es adecuada.",
    ],
  },
  familias: [
    "Asistid juntos a un concierto de una banda, coro u orquesta local.",
    "Preguntadle qué papel tiene en su grupo y qué le cuesta más.",
    "Escuchad una grabación de su ensayo y animadle con comentarios concretos.",
    "Ayudadle con la respiración tranquila antes de una actuación.",
  ],
  saberes: "Lenguaje y Práctica Musical: agrupaciones vocales e instrumentales; papeles en el conjunto; afinación, empaste y equilibrio; pulso común y cuenta de entrada; gesto básico de dirección; técnicas de ensayo; actitud y comunicación en el grupo; actuación en público y control del miedo escénico (RD 243/2022).",
  ideas: [
    "Rotar papeles y la función de director entre el alumnado.",
    "Ensayos con objetivos escritos en la pizarra.",
    "Grabar y escuchar los ensayos para autoevaluarse.",
    "Organizar pequeños conciertos de aula con público.",
  ],
  fuentes: [
    { t: "El Sistema (Venezuela), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sistema_Nacional_de_Orquestas_y_Coros_Juveniles_e_Infantiles_de_Venezuela" },
    { t: "Dirección de orquesta, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Direcci%C3%B3n_de_orquesta" },
  ],
});
