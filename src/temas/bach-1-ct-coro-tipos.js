// Coro y Técnica Vocal I, 1º de Bachillerato. Tema 5 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ct");

module.exports = B.tema({
  titulo: "El coro y sus tipos",
  minutos: 60,
  objetivos: [
    "Definir qué es un coro y cómo se organiza en cuerdas",
    "Clasificar las voces por su tesitura y su timbre",
    "Distinguir los tipos de coro por sus voces, su tamaño y su función",
    "Conocer la disposición del coro y el papel del director",
  ],
  claves: ["coro", "cuerda", "SATB", "tesitura", "voces blancas", "coro mixto", "a cappella", "director"],
  pregunta: {
    texto: "¿Qué tienen en común un coro de iglesia del siglo XVI, un coro góspel, el grupo vocal Pentatonix y la grada de un estadio cantando el himno?",
    respuesta: "Todos son <mark>grupos de personas cantando juntas</mark>, pero no todos son coros en sentido musical. Un coro se organiza en <mark>cuerdas</mark> (grupos de voces parecidas) que cantan partes distintas y se escuchan entre sí para sonar como un solo instrumento.",
  },
  lectura: {
    titulo: "El instrumento más democrático",
    html: `<p>Un violín de buena calidad cuesta miles de euros; un piano de cola, decenas de miles. Para cantar en un coro solo hace falta lo que ya tienes: tu voz, tus oídos y ganas de escuchar a los demás.</p>
    <p>Por eso el coro es una de las formas de hacer música más extendidas del mundo. Hay coros en colegios, barrios, iglesias, universidades, empresas y hospitales. En España hay miles, y en países como Estonia o Gales cantar en un coro forma parte de la identidad nacional. En este tema verás cómo se organiza este instrumento hecho de personas.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es un coro",
      html: `<p>Un <b>coro</b> es una agrupación de cantantes que interpretan juntos una obra, normalmente a varias voces y bajo la guía de un <b>director</b>. A diferencia de un grupo de solistas, en el coro varias personas cantan la misma parte y deben <b>empastar</b>, es decir, fundir sus voces en un sonido común.</p>
      <p>Cada grupo de cantantes que interpreta una misma parte se llama <b>cuerda</b> (por ejemplo, la cuerda de sopranos). El coro puede cantar con acompañamiento instrumental o <b><i>a cappella</i></b>, solo con voces.</p>`,
      svg: B.estrella("Ingredientes de un coro", "Coro", ["Cuerdas", "Director", "Empaste", "Repertorio", "Escucha"]),
    },
    {
      h: "Las voces: tesitura y timbre",
      html: `<p>Las voces se clasifican por su <b>tesitura</b> (las notas que cantan con comodidad) y su <b>timbre</b> (su color). En las voces femeninas, de aguda a grave: <b>soprano</b>, <b>mezzosoprano</b> y <b>contralto</b>. En las masculinas: <b>tenor</b>, <b>barítono</b> y <b>bajo</b>. En el coro se suelen agrupar en cuatro cuerdas: soprano, contralto, tenor y bajo.</p>
      <p>La voz de un adolescente todavía está cambiando, así que la clasificación es <b>provisional</b>: lo importante es cantar en la zona cómoda y que el director pueda ajustar tu cuerda con el tiempo.</p>`,
      svg: B.tesituras("Tesituras aproximadas de las cuatro voces del coro"),
      video: { id: "t1Nwngt9qDk", titulo: "Esto es lo que debes saber sobre los tipos de voz", canal: "Blue Studios", vistas: 585221 },
    },
    {
      h: "El coro a cuatro voces (SATB)",
      html: `<p>La formación más habitual es el <b>coro mixto a cuatro voces</b>, abreviado <b>SATB</b>: <b>S</b>opranos, <b>A</b>ltos o contraltos, <b>T</b>enores y <b>B</b>ajos. Las sopranos suelen llevar la melodía; los bajos, la base armónica; contraltos y tenores rellenan el acorde con las voces intermedias.</p>
      <p>Una cuerda puede dividirse en dos (<i>divisi</i>): soprano I y II, tenor I y II… Así se obtienen coros a 5, 6, 8 o más voces. En la partitura, las cuatro voces se escriben en dos pentagramas (piano reducido) o en cuatro pentagramas, uno por cuerda.</p>`,
      svg: B.capas("Las cuatro cuerdas del coro SATB", [["S · Sopranos", "voz femenina aguda: melodía"], ["A · Contraltos", "voz femenina grave: relleno"], ["T · Tenores", "voz masculina aguda: relleno"], ["B · Bajos", "voz masculina grave: base"]]),
    },
    {
      h: "Tipos de coro según sus voces",
      html: `<p>Según las voces que lo forman, un coro puede ser: <b>de voces blancas o infantil</b> (niños y niñas antes de la muda), <b>de voces iguales</b> (solo mujeres o solo hombres), <b>mixto</b> (voces femeninas y masculinas) o <b>juvenil</b>, con voces en transformación.</p>
      <p>Los coros de <b>voces blancas</b> tienen una larga tradición en las catedrales y escolanías, como la Escolanía de Montserrat, una de las más antiguas de Europa. Los coros de voces iguales tienen repertorio propio, escrito para dos, tres o cuatro voces del mismo tipo.</p>`,
      svg: B.cajas("Tipos de coro según sus voces", [["Voces blancas", "niños y niñas|antes de la muda"], ["Voces iguales", "solo femeninas|o solo masculinas"], ["Mixto", "femeninas|y masculinas"], ["Juvenil", "voces en|transformación"]]),
      video: { id: "hAiECJf5Ouo", titulo: "Libera: Sanctus", canal: "Libera Official", vistas: 15344195 },
    },
    {
      h: "Tipos de coro según su tamaño y su función",
      html: `<p>Por su tamaño, va del <b>cuarteto o grupo vocal</b> (una voz por parte), pasando por el <b>coro de cámara</b> (de 12 a 30 cantantes, ágil y preciso), hasta el <b>gran coro sinfónico</b> (de 60 a más de 100), que canta con orquesta en obras como la Novena de Beethoven.</p>
      <p>Por su función o su repertorio, hay coros <b>litúrgicos</b>, <b>de ópera</b>, <b>escolares</b>, <b>universitarios</b>, <b>góspel</b>, <b>de música popular</b> o <b>a cappella</b> moderno, que imitan con la voz los instrumentos y la percusión (<i>beatbox</i>).</p>`,
      svg: B.barras("Número aproximado de cantantes según el tipo de coro", [["Grupo vocal", 6], ["Coro de cámara", 24], ["Coro escolar", 40], ["Coro sinfónico", 100]], { t: "Del grupo vocal al coro sinfónico", unidad: "" }),
    },
    {
      h: "El coro góspel y el a cappella moderno",
      html: `<p>El <b>góspel</b> nació en las iglesias afroamericanas de Estados Unidos. Se canta con gran energía, palmas y movimiento, con un solista que dialoga con el coro (<b>pregunta y respuesta</b>) e improvisaciones. Influyó en el soul, el R&amp;B y el pop.</p>
      <p>El <b><i>a cappella</i> moderno</b> lo hacen grupos pequeños que interpretan pop, rock o villancicos solo con voces: unos cantan la melodía, otros imitan el bajo eléctrico o los acordes y uno hace la batería con la boca. Es una puerta muy atractiva para que los jóvenes se acerquen al canto coral.</p>`,
      svg: B.comparar("Góspel frente a a cappella moderno", ["Góspel", ["iglesias afroamericanas", "solista y coro", "palmas y movimiento", "improvisación"]], ["A cappella moderno", ["grupos pequeños", "voces que imitan instrumentos", "beatbox", "pop y versiones"]]),
      video: { id: "AyFlLjdNqk8", titulo: "«Stand by Me»: Karen Gibson y The Kingdom Choir", canal: "BBC", vistas: 29021531 },
    },
    {
      h: "La disposición del coro",
      html: `<p>El coro se coloca normalmente en <b>semicírculo</b> frente al director, para que todos le vean y se escuchen. La disposición más común sitúa a las <b>sopranos</b> a la izquierda del director y las <b>contraltos</b> a la derecha, con <b>tenores</b> y <b>bajos</b> detrás, en una fila elevada.</p>
      <p>Hay otras disposiciones: por <b>cuartetos mezclados</b> (S-A-T-B, S-A-T-B…), que obliga a cada cantante a ser independiente y mejora el empaste, o en <b>dos coros enfrentados</b> (policoralidad), como en la música veneciana del Renacimiento.</p>`,
      svg: B.coro("Disposición habitual del coro mixto frente al director"),
    },
    {
      h: "El director y los cantantes",
      html: `<p>El <b>director</b> elige el repertorio, enseña las obras, cuida la afinación, el empaste y la expresión, y en el concierto marca con sus gestos la entrada, el tempo, la dinámica y los finales. Muchos coros tienen además un <b>pianista acompañante</b> y <b>jefes de cuerda</b> que ayudan en los ensayos.</p>
      <p>Cada cantante tiene también sus responsabilidades: asistir a los ensayos, estudiar su parte, cuidar su voz, <b>escuchar a los demás</b> y seguir al director. Un coro funciona como un equipo: nadie destaca solo, todos suman.</p>`,
      svg: B.comparar("Funciones del director y del cantante", ["Director", ["elige el repertorio", "enseña las obras", "afina y empasta", "dirige con gestos"]], ["Cantante", ["asiste y estudia", "cuida su voz", "escucha al resto", "sigue al director"]]),
    },
  ],
  figura: {
    titulo: "Un instrumento hecho de personas",
    items: [["Cuerdas", "SATB", "soprano, contralto", "tenor, bajo"], ["Voces", "♀ ♂", "blancas, iguales", "mixtas"], ["Tamaño", "👥", "cámara", "sinfónico"], ["Director", "🎼", "gestos", "y escucha"]],
  },
  video: { id: "D7o7BrlbaDs", titulo: "Eric Whitacre's Virtual Choir: «Lux Aurumque»", canal: "Eric Whitacre's Virtual Choir", vistas: 7076321 },
  quiz: [
    ["Un grupo de cantantes que interpreta la misma parte en el coro se llama…", ["sección rítmica", "cuerda", "solo", "tutti"], 1, "Por ejemplo, la cuerda de tenores."],
    ["Cantar a cappella significa…", ["con orquesta", "solo con voces", "con piano", "en latín"], 1, "Sin acompañamiento instrumental."],
    ["La voz femenina más grave es…", ["soprano", "mezzosoprano", "contralto", "tenor"], 2, "Contralto o alto."],
    ["En SATB, la «T» es de…", ["tiple", "tenor", "timbre", "tesitura"], 1, "Sopranos, Altos, Tenores, Bajos."],
    ["Habitualmente, la melodía principal la llevan…", ["los bajos", "los tenores", "las sopranos", "las contraltos"], 2, "Es la voz más aguda."],
    ["Un coro de niños y niñas antes de la muda es de…", ["voces iguales masculinas", "voces blancas", "voces mixtas", "cámara"], 1, "También llamado infantil."],
    ["Un coro de cámara tiene aproximadamente…", ["de 2 a 4 cantantes", "de 12 a 30", "más de 150", "1 cantante"], 1, "Es pequeño y ágil."],
    ["Dividir una cuerda en dos partes se llama…", ["divisi", "tutti", "unísono", "canon"], 0, "Soprano I y soprano II, por ejemplo."],
    ["El góspel nació en…", ["las catedrales europeas", "las iglesias afroamericanas de EE. UU.", "la ópera italiana", "los conservatorios"], 1, "Influyó en el soul y el pop."],
    ["Fundir las voces en un sonido común es…", ["afinar", "empastar", "articular", "proyectar"], 1, "El empaste es clave en el coro."],
  ],
  examen: [
    ["La tesitura es…", ["el color de la voz", "las notas que una voz canta con comodidad", "un tipo de coro", "la posición en el escenario"], 1, "Sirve para clasificar las voces."],
    ["En la disposición habitual, las sopranos se sitúan…", ["detrás de los bajos", "a la izquierda del director", "fuera del escenario", "junto al piano"], 1, "Contraltos a la derecha, hombres detrás."],
    ["Colocar el coro por cuartetos mezclados sirve para…", ["cantar más fuerte", "que cada cantante sea más independiente y mejore el empaste", "no ver al director", "cantar en canon"], 1, "Cada uno escucha todas las voces."],
    ["El beatbox es…", ["un tipo de coro litúrgico", "imitar la batería con la boca", "un gesto del director", "una vocal"], 1, "Típico del a cappella moderno."],
    ["La clasificación vocal de un adolescente es…", ["definitiva", "provisional", "imposible", "siempre de bajo"], 1, "La voz aún está cambiando."],
  ],
  feynman: ["Qué es un coro y qué es una cuerda", "Cómo se clasifican las voces", "Qué tipos de coro hay por voces, tamaño y función", "Qué hacen el director y los cantantes"],
  mapa: ["EL CORO Y SUS TIPOS", [["Voces", "soprano · contralto · tenor · bajo"], ["Por voces", "blancas · iguales · mixto · juvenil"], ["Por tamaño", "grupo vocal · cámara · sinfónico"], ["Organización", "cuerdas · disposición · director"]]],
  tarjetas: [
    ["Coro", "Agrupación de cantantes que cantan juntos a una o varias voces."],
    ["Cuerda", "Grupo de cantantes que interpreta la misma parte."],
    ["SATB", "Sopranos, contraltos, tenores y bajos."],
    ["A cappella", "Cantar solo con voces, sin instrumentos."],
    ["Voces blancas", "Voces infantiles antes de la muda."],
    ["Coro de cámara", "Coro pequeño, de unos 12 a 30 cantantes."],
    ["Divisi", "División de una cuerda en dos o más partes."],
    ["Empaste", "Fusión de las voces en un sonido común."],
  ],
  ejemplos: [
    ["Un coro escolar tiene 20 chicas y 6 chicos con voz ya cambiada. ¿Cómo lo organizarías?", ["Chicas: dividirlas en sopranos y contraltos (unas 10 y 10).", "Chicos: si hay agudos y graves, tenores y bajos; si no, una sola cuerda de barítonos.", "Elegir repertorio a tres voces (SAB) o SATB sencillo."], "Coro mixto a tres o cuatro voces, adaptado a lo que hay."],
    ["Clasifica: Escolanía de Montserrat, Pentatonix, coro de la Novena de Beethoven, coro de mujeres de un pueblo.", ["Escolanía: coro de voces blancas.", "Pentatonix: grupo vocal a cappella moderno.", "Novena: gran coro sinfónico mixto.", "Coro de mujeres: voces iguales."], "Voces blancas, a cappella, sinfónico y voces iguales."],
    ["Dibuja la disposición de un coro SATB de 24 cantantes.", ["Semicírculo frente al director.", "Delante: 6 sopranos a la izquierda y 6 contraltos a la derecha.", "Detrás, elevados: 6 tenores y 6 bajos.", "Todos ven al director."], "Disposición habitual en dos filas."],
  ],
  errores: [
    "Confundir cuerda (grupo de voces) con instrumento de cuerda.",
    "Pensar que los chicos siempre son bajos y las chicas siempre sopranos.",
    "Creer que a cappella es un estilo de música, cuando es una forma de interpretar.",
    "Cantar para destacar en lugar de empastar con la cuerda.",
  ],
  ejercicios: {
    b: [
      ["Ordena de aguda a grave: bajo, soprano, tenor, contralto.", "Soprano, contralto, tenor y bajo."],
      ["¿Qué significa SATB?", "Sopranos, Altos (contraltos), Tenores y Bajos."],
      ["Nombra tres tipos de coro según sus voces.", "Voces blancas, voces iguales y mixto (también juvenil)."],
      ["¿Qué quiere decir cantar a cappella?", "Cantar solo con voces, sin instrumentos."],
    ],
    m: [
      ["Explica la diferencia entre un coro de cámara y un coro sinfónico.", "El de cámara es pequeño (12-30 cantantes), ágil y para repertorio íntimo; el sinfónico es grande (60-100 o más) y canta con orquesta."],
      ["¿Por qué la clasificación de la voz de un adolescente es provisional?", "Porque la laringe y las cuerdas vocales aún están creciendo y la voz cambia de tesitura y color."],
      ["Describe la disposición habitual de un coro mixto.", "En semicírculo frente al director: sopranos a la izquierda, contraltos a la derecha y tenores y bajos detrás, en una fila elevada."],
      ["¿Qué aporta el góspel al mundo coral?", "Energía, movimiento, diálogo entre solista y coro e improvisación; además influyó en el soul, el R&B y el pop."],
    ],
    a: [
      ["Busca un coro de tu ciudad o comunidad autónoma. Investiga su tipo, número de cantantes, repertorio y director, y preséntalo en una ficha.", "Respuesta abierta: ficha con tipo de coro, voces, tamaño, repertorio, director y un enlace a una grabación."],
      ["Escucha el vídeo del Virtual Choir de Eric Whitacre. Explica qué es un coro virtual y qué ventajas e inconvenientes tiene frente a un coro presencial.", "Respuesta abierta: cada cantante se graba por separado y se montan juntos; ventajas: participación mundial; inconvenientes: no hay escucha mutua real ni empaste en directo."],
    ],
  },
  glosario: [
    ["Coro", "Conjunto de cantantes que interpretan juntos una obra."],
    ["Cuerda", "Sección del coro formada por voces del mismo tipo."],
    ["Tesitura", "Ámbito de notas cómodas de una voz."],
    ["Soprano", "Voz femenina más aguda."],
    ["Contralto", "Voz femenina más grave; en el coro, «alto»."],
    ["Tenor", "Voz masculina aguda."],
    ["Bajo", "Voz masculina más grave."],
    ["A cappella", "Interpretación vocal sin acompañamiento instrumental."],
    ["Divisi", "División de una cuerda en varias partes."],
    ["Escolanía", "Coro infantil vinculado a una iglesia o monasterio."],
  ],
  situacion: {
    titulo: "Fundamos nuestro coro",
    reto: "Organizar el coro de la clase: clasificar las voces, elegir la disposición y presentarlo con un nombre y un logotipo.",
    pasos: [
      "Haced una prueba de voz sencilla para conocer la tesitura de cada uno.",
      "Repartid las cuerdas y elegid jefes de cuerda.",
      "Decidid y dibujad la disposición en el escenario.",
      "Cread un nombre, un logotipo y una presentación del coro.",
    ],
    producto: "Una ficha del coro con cuerdas, disposición, nombre y logotipo.",
    evaluacion: [
      "La clasificación de voces está justificada.",
      "La disposición es adecuada y razonada.",
      "Se reparten funciones en el grupo.",
      "La presentación es clara y creativa.",
    ],
  },
  familias: [
    "Buscad juntos coros de vuestra localidad y asistid a un concierto.",
    "Escuchad un coro góspel, uno de voces blancas y uno a cappella.",
    "Hablad de qué tipo de voz tiene cada miembro de la familia.",
    "Animad a participar en el coro del centro o del barrio.",
  ],
  saberes: "Coro y Técnica Vocal I: el coro como agrupación; las cuerdas; clasificación de las voces por tesitura y timbre; coro SATB y divisi; tipos de coro según voces, tamaño y función; disposición del coro; funciones del director y de los cantantes.",
  ideas: [
    "Hacer una prueba de tesitura a cada alumno con el piano.",
    "Probar distintas disposiciones y comparar cómo suena el coro.",
    "Ver y comentar coros muy diferentes (góspel, escolanía, a cappella).",
    "Organizar un intercambio con el coro de otro centro.",
  ],
  fuentes: [
    { t: "Coro, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Coro" },
    { t: "Clasificación de las voces, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Clasificaci%C3%B3n_de_las_voces" },
  ],
});
