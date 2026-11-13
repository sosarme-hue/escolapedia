// Ciencias Sociales 3º de Primaria: los sectores de trabajo. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, et, COL, rejilla, wiki, mapa, filas, fichas, flujo, columna, barras, vid, vgen, RD, PROF, arbol, casa, sol, suelo, nino } = require("./_pri3b");

// Pequeños dibujos de cada sector.
const trigo = (x, y) => `<path d="M${x} ${y} V${y - 28}" stroke="#a16207" stroke-width="2"/>${[0, 1, 2, 3].map((i) => `<ellipse cx="${x - 4}" cy="${y - 26 + i * 6}" rx="4" ry="2.4" fill="#eab308" transform="rotate(-30 ${x - 4} ${y - 26 + i * 6})"/><ellipse cx="${x + 4}" cy="${y - 26 + i * 6}" rx="4" ry="2.4" fill="#eab308" transform="rotate(30 ${x + 4} ${y - 26 + i * 6})"/>`).join("")}`;
const fabrica = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-36 0 V-30 L-20 -40 V-30 L-4 -40 V-30 L12 -40 V-30 H36 V0z" fill="#94a3b8" stroke="var(--ink)" stroke-width="1.5"/><rect x="18" y="-62" width="10" height="32" fill="#64748b" stroke="var(--ink)" stroke-width="1.5"/><circle cx="26" cy="-70" r="6" fill="#e2e8f0"/><circle cx="34" cy="-78" r="7" fill="#e2e8f0"/><rect x="-28" y="-20" width="10" height="10" fill="#fde68a"/><rect x="-8" y="-20" width="10" height="10" fill="#fde68a"/></g>`;
const tienda = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-30" y="-40" width="60" height="40" fill="#fff7ed" stroke="var(--ink)" stroke-width="1.5"/>${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M${-30 + i * 10} -52 h10 v10 q-5 6 -10 0z" fill="${i % 2 ? "#fff" : COL.rojo}" stroke="var(--ink)" stroke-width="1"/>`).join("")}<rect x="-24" y="-30" width="22" height="18" fill="#93c5fd" stroke="var(--ink)"/><rect x="6" y="-30" width="16" height="30" fill="#92400e"/></g>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "Los sectores de trabajo",
  minutos: 45,
  objetivos: ["Entender por qué trabajan las personas y qué son las materias primas", "Conocer el sector primario: agricultura, ganadería, pesca, minería y explotación forestal", "Conocer el sector secundario: industria, artesanía y construcción", "Conocer el sector terciario o de servicios", "Seguir el camino de un producto desde la materia prima hasta el consumidor"],
  claves: ["trabajo", "profesión", "materia prima", "producto", "sector primario", "agricultura", "ganadería", "pesca", "sector secundario", "industria", "sector terciario", "servicios"],
  pregunta: {
    texto: "Esta mañana has desayunado leche con galletas. Para que llegaran a tu mesa ha hecho falta el trabajo de un ganadero, un agricultor, una fábrica, un camionero y una tienda. ¿Cómo se organizan tantos trabajos?",
    respuesta: "Los trabajos se agrupan en tres <mark>sectores</mark>. El <b>sector primario</b> obtiene las materias primas de la naturaleza, como la leche o el trigo. El <b>sector secundario</b> las transforma en productos, como las galletas. Y el <b>sector terciario</b> ofrece servicios, como transportarlas y venderlas. ¡Todos los trabajos son necesarios!",
  },
  bloques: [
    {
      html: `<h3>¿Por qué trabajamos?</h3><p>Las personas adultas <b>trabajan</b> para ganar dinero con el que comprar lo que necesitan: comida, ropa, una casa, transporte… El dinero que se recibe por trabajar se llama <b>sueldo</b> o salario.</p><p>Pero el trabajo no sirve solo para ganar dinero. Con su trabajo, cada persona <b>ayuda a los demás</b>: el panadero hace el pan que comemos, la médica nos cura, el maestro nos enseña y el conductor del autobús nos lleva al colegio. Todos dependemos del trabajo de todos.</p><p>Cada tipo de trabajo es una <mark>profesión</mark> u oficio. Para muchas profesiones hay que <b>estudiar</b> y prepararse durante años. Algunas personas trabajan para una empresa y otras tienen su propio negocio.</p><p>En España, los niños y niñas <b>no pueden trabajar</b>: su tarea es estudiar, jugar y crecer. Las personas pueden trabajar a partir de los 16 años y, al hacerse mayores, se jubilan y dejan de trabajar.</p><p>Todos los trabajos se agrupan en <b>tres sectores</b>, según lo que hacen: obtener cosas de la naturaleza, transformarlas o dar servicios.</p>`,
      svg: svg("Los tres sectores: primario obtiene, secundario transforma y terciario da servicios", `${tit("Tres sectores")}${flujo([["primario", COL.verde], ["secundario", COL.gris], ["terciario", COL.azul]], 50, 32)}${filas([["obtiene", "de la naturaleza", COL.verde], ["transforma", "en productos", COL.gris], ["da servicios", "a las personas", COL.azul]], 108, 22, { x: 24, wa: 84, wb: 120 })}`),
    },
    {
      html: `<h3>Las materias primas</h3><p>Las <mark>materias primas</mark> son los materiales que obtenemos directamente de la <b>naturaleza</b> y que se usan para fabricar otros productos. Pueden ser de tres tipos:</p><p>• De origen <b>vegetal</b>: vienen de las plantas. Por ejemplo, el <b>trigo</b> para hacer harina, el <b>algodón</b> para hacer ropa, las <b>aceitunas</b> para el aceite o la <b>madera</b> de los árboles para los muebles y el papel.</p><p>• De origen <b>animal</b>: vienen de los animales. Por ejemplo, la <b>leche</b> para el queso y el yogur, la <b>lana</b> de las ovejas para los jerséis, el <b>cuero</b> para los zapatos o los <b>huevos</b>.</p><p>• De origen <b>mineral</b>: vienen del suelo y de las rocas. Por ejemplo, el <b>hierro</b> para el acero, la <b>arena</b> para el vidrio, el <b>petróleo</b> para el plástico y la gasolina, o la <b>arcilla</b> para los ladrillos.</p><p>Las materias primas no son infinitas: algunas, como el petróleo, se pueden agotar. Por eso es importante <b>reciclar</b> y no malgastar.</p>`,
      svg: svg("Materias primas de origen vegetal, animal y mineral", `${tit("Materias primas")}${trigo(50, 110)}${arbol(78, 110, 0.5)}<ellipse cx="130" cy="96" rx="18" ry="12" fill="#f5f5f4" stroke="var(--ink)"/><circle cx="148" cy="88" r="6" fill="#57534e"/><path d="M200 110 l14 -24 l14 24z" fill="#78716c"/><path d="M190 110 l10 -14 l10 14z" fill="#a8a29e"/>${et(64, 130, "vegetal", 60, { size: 10.5, color: COL.verde })}${et(134, 130, "animal", 60, { size: 10.5, color: COL.marron })}${et(208, 130, "mineral", 60, { size: 10.5, color: COL.gris })}${tx(130, 162, "trigo, madera · leche, lana · hierro, arena", 236)}`),
    },
    {
      html: `<h3>El sector primario</h3><p>El <mark>sector primario</mark> agrupa los trabajos que <b>obtienen materias primas</b> de la naturaleza. Son los siguientes:</p><p>• La <mark>agricultura</mark>: cultivar la tierra para obtener alimentos y otros productos, como cereales, frutas, verduras, olivos o vid. Lo hacen los agricultores. Los cultivos pueden ser de <b>secano</b>, que solo reciben el agua de la lluvia, o de <b>regadío</b>, que se riegan.</p><p>• La <mark>ganadería</mark>: criar animales para obtener carne, leche, huevos, lana o cuero. Lo hacen los ganaderos y pastores, con vacas, ovejas, cerdos, cabras o gallinas.</p><p>• La <mark>pesca</mark>: capturar peces y mariscos en el mar o en los ríos. Lo hacen los pescadores en barcos. También hay <b>piscifactorías</b>, donde se crían peces.</p><p>• La <b>minería</b>: sacar minerales y rocas de las minas y canteras. Lo hacen los mineros.</p><p>• La <b>explotación forestal</b>: obtener madera, corcho o resina de los bosques. Lo hacen los leñadores y los trabajadores forestales, que también plantan árboles nuevos.</p>`,
      svg: svg("Trabajos del sector primario: agricultura, ganadería, pesca, minería y explotación forestal", `${tit("Sector primario")}${fichas([["Agricultura", "cultivar la tierra", COL.verde], ["Ganadería", "criar animales", COL.marron], ["Pesca", "peces y marisco", COL.azul], ["Minería", "minerales y rocas", COL.gris], ["Forestal", "madera y corcho", COL.verde], ["¿Qué obtienen?", "materias primas", COL.naranja]], 2, 34, 0)}`),
      video: vid("C6sXOX5vfC0"),
    },
    {
      html: `<h3>El sector secundario</h3><p>El <mark>sector secundario</mark> agrupa los trabajos que <b>transforman las materias primas</b> en productos elaborados. Por ejemplo, convierten la leche en queso, el algodón en camisetas o el hierro en coches.</p><p>Hay tres grandes actividades:</p><p>• La <mark>industria</mark>: se fabrican muchos productos iguales en <b>fábricas</b>, usando <b>máquinas</b>. Hay industrias de alimentación, de coches, textiles (ropa), químicas, de muebles, de papel… Los obreros trabajan a menudo en <b>cadenas de montaje</b>, donde cada persona o máquina hace una parte del producto.</p><p>• La <mark>artesanía</mark>: se fabrican productos <b>a mano</b> o con herramientas sencillas, uno a uno. Cada pieza es diferente. Son artesanos el alfarero, que hace vasijas de barro; el carpintero, el herrero, el zapatero o la tejedora.</p><p>• La <mark>construcción</mark>: se construyen edificios, carreteras, puentes, túneles y presas. Trabajan en ella arquitectos, albañiles, fontaneros, electricistas y pintores.</p><p>También pertenece a este sector la <b>producción de energía</b>, como la electricidad de las centrales.</p>`,
      svg: svg("Una fábrica, un artesano y la construcción de una casa", `${tit("Sector secundario")}${fabrica(60, 140, 1)}${casa(196, 140, 0.8)}<path d="M164 140 V80 M164 80 H230 M220 80 v14" stroke="#eab308" stroke-width="3"/>${suelo(140)}${et(60, 160, "industria", 60, { size: 10.5, color: COL.gris })}${et(196, 160, "construcción", 80, { size: 10.5, color: COL.naranja })}${tx(130, 176, "también la artesanía: hecho a mano", 220)}`),
    },
    {
      html: `<h3>El sector terciario o de servicios</h3><p>El <mark>sector terciario</mark>, también llamado <b>sector servicios</b>, agrupa los trabajos que no obtienen ni fabrican nada, sino que <b>prestan servicios</b> a las personas. En España es el sector en el que trabaja más gente: ¡más de siete de cada diez trabajadores!</p><p>Algunos servicios son:</p><p>• <b>Comercio</b>: vender productos en tiendas, mercados, supermercados o por internet. Trabajan dependientes, cajeros, vendedores.<br>• <b>Transporte</b>: llevar personas y mercancías en camiones, trenes, aviones y barcos. Trabajan conductores, pilotos, marineros.<br>• <b>Sanidad</b>: cuidar la salud. Trabajan médicos, enfermeras, farmacéuticos.<br>• <b>Educación</b>: maestros y profesores.<br>• <b>Turismo</b> y hostelería: hoteles, restaurantes, guías turísticos. España recibe muchísimos turistas.<br>• <b>Seguridad</b>: policías, bomberos.<br>• Otros: bancos, comunicaciones, peluquerías, limpieza, cultura, deporte…</p>`,
      svg: svg("Trabajos de servicios: comercio, transporte, sanidad, educación y turismo", `${tit("Sector terciario")}${tienda(56, 110, 1)}${et(56, 130, "comercio", 60, { size: 10, color: COL.rojo })}${columna([["transporte", COL.azul], ["sanidad", COL.rojo], ["educación", COL.verde], ["turismo", COL.naranja]], 180, 110, 36, 22, 6)}${tx(130, 172, "7 de cada 10 trabajan en servicios", 230)}`),
    },
    {
      html: `<h3>Del campo a tu mesa</h3><p>Los tres sectores están <b>conectados</b>. Para que un producto llegue a nuestras manos hace falta el trabajo de los tres. Sigamos el camino de un <b>yogur</b>:</p><p>1. <b>Sector primario</b>: el <b>ganadero</b> cuida a las vacas y las ordeña para obtener la <b>leche</b>, que es la materia prima.</p><p>2. <b>Sector terciario</b>: un camión cisterna <b>transporta</b> la leche hasta la fábrica.</p><p>3. <b>Sector secundario</b>: en la <b>fábrica</b>, las máquinas calientan la leche, le añaden unos fermentos y frutas, y la envasan en tarros de yogur.</p><p>4. <b>Sector terciario</b>: otros camiones llevan los yogures a las <b>tiendas</b> y supermercados, y allí los dependientes los venden.</p><p>5. Por último, tu familia lo compra y te lo comes. Tú eres el <b>consumidor</b>.</p><p>Lo mismo pasa con el pan (agricultor, harinera, panadería), con una camiseta (algodón, fábrica textil, tienda de ropa) o con un libro (árbol, fábrica de papel e imprenta, librería).</p>`,
      svg: svg("El camino de un yogur: leche de la granja, fábrica, transporte y tienda", `${tit("El camino del yogur")}${flujo([["granja", COL.verde], ["fábrica", COL.gris], ["tienda", COL.azul]], 54, 32)}${filas([["primario", "el ganadero ordeña", COL.verde], ["secundario", "se hace el yogur", COL.gris], ["terciario", "se transporta y vende", COL.azul]], 112, 22, { x: 24, wa: 76, wb: 130 })}`),
      video: vid("SMNQ3S0a16E"),
    },
    {
      html: `<h3>Los trabajos de mi localidad</h3><p>Cada lugar tiene trabajos diferentes según su paisaje y sus recursos:</p><p>• En los <b>pueblos de interior</b> hay más trabajos del sector primario: agricultores, ganaderos y trabajadores forestales. También hay talleres de artesanía y pequeñas tiendas.</p><p>• En los <b>pueblos de costa</b> abundan los pescadores, los trabajadores del puerto y, en verano, los trabajos del turismo: hoteles, restaurantes, socorristas.</p><p>• En las <b>ciudades</b> hay muchas fábricas en los <b>polígonos industriales</b>, a las afueras, y sobre todo muchos trabajos de servicios: oficinas, comercios, hospitales, universidades, transporte público…</p><p>Hoy muchas personas trabajan con <b>ordenadores</b> e internet, y han aparecido profesiones nuevas que hace años no existían, como programador de videojuegos, diseñadora web o técnico de drones. Otras, en cambio, casi han desaparecido, como el afilador o el sereno.</p><p>¿En qué trabajan las personas de tu familia? ¿A qué sector pertenece cada trabajo?</p>`,
      svg: svg("Encuesta de la clase: cuántas familias trabajan en cada sector", `${tit("Trabajos en mi clase")}${barras([["primario", 3, COL.verde], ["secundario", 7, COL.gris], ["terciario", 20, COL.azul]], { unidad: "", y0: 146, alto: 100, x0: 30, ancho: 200 })}`),
    },
    {
      html: `<h3>Todos los trabajos son importantes</h3><p>Todas las profesiones son <b>necesarias</b> y merecen el mismo <b>respeto</b>. Sin agricultores no tendríamos comida; sin barrenderos, las calles estarían sucias; sin médicos, no nos curarían; sin camioneros, no llegarían los productos a las tiendas.</p><p>Además, <b>cualquier persona</b> puede hacer cualquier trabajo, sea hombre o mujer. Antes se pensaba que había trabajos «de chicos» y trabajos «de chicas», pero eso no es verdad. Hay mujeres pilotos, ingenieras, bomberas y mecánicas, y hombres enfermeros, maestros de infantil y cocineros.</p><p>Trabajar bien significa ser <b>responsable</b>, cumplir el horario, colaborar con los compañeros y hacer las cosas con cuidado. También significa trabajar con <b>seguridad</b>: muchos trabajadores llevan casco, guantes, gafas o chalecos reflectantes para protegerse.</p><p>Algunas personas trabajan sin cobrar para ayudar a los demás: son los <b>voluntarios</b>, que colaboran en comedores sociales, en la protección de animales o en la limpieza de playas y bosques.</p>`,
      svg: svg("Niños y niñas pueden ser lo que quieran: todas las profesiones son importantes", `${tit("Puedo ser lo que quiera")}${suelo(146)}${nino(46, 146, { pose: "brazos", s: 1, nina: true })}${nino(102, 146, { pose: "pie", s: 1 })}${nino(158, 146, { pose: "arriba", s: 1, nina: true })}${nino(214, 146, { pose: "brazos", s: 1 })}${tx(130, 170, "todos los trabajos son importantes", 220)}`),
    },
    {
      html: `<h3>¡Jugamos a los oficios!</h3><p>Vamos a jugar a clasificar profesiones. En tarjetas, escribid o dibujad muchos oficios: agricultora, panadero, médica, pescador, albañil, cajera, maestro, minero, carpintera, conductor de autobús, ganadera, costurera, bombero, leñador, mecánica, peluquero…</p><p>Haced tres cajas con carteles: <b>primario</b> (verde), <b>secundario</b> (gris) y <b>terciario</b> (azul). Cada alumno saca una tarjeta, la representa con mímica para que los demás adivinen el oficio y después la coloca en la caja correcta.</p><p>Para clasificar, hazte estas preguntas:</p><p>• ¿Saca algo de la naturaleza? → <b>Primario</b>.<br>• ¿Fabrica o construye algo? → <b>Secundario</b>.<br>• ¿Ayuda o atiende a las personas sin fabricar nada? → <b>Terciario</b>.</p><p><b>Repaso:</b> el panadero ¿a qué sector pertenece? → Al secundario, porque transforma la harina en pan. ¿Y la persona que vende el pan en una tienda? → Al terciario.</p>`,
      svg: svg("Tres cajas para clasificar oficios: primario, secundario y terciario", `${tit("Clasifica oficios")}${[["primario", COL.verde, "pescador"], ["secundario", COL.gris, "panadero"], ["terciario", COL.azul, "médica"]].map(([s, c, o], i) => `<rect x="${20 + i * 80}" y="96" width="60" height="60" rx="6" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2"/>${et(50 + i * 80, 132, s, 56, { size: 10, color: c })}<rect x="${26 + i * 80}" y="50" width="48" height="26" rx="4" fill="var(--card)" stroke="var(--line)"/>${et(50 + i * 80, 67, o, 44, { size: 9.5 })}${fl(50 + i * 80, 78, 50 + i * 80, 94, "var(--muted)", 1.5)}`).join("")}`),
    },
  ],
  figura: {
    titulo: "Los sectores en ocho ideas",
    svg: rejilla([
      ["Trabajo", "sueldo y ayudar", COL.naranja],
      ["Materia prima", "de la naturaleza", COL.marron],
      ["Primario", "obtiene", COL.verde],
      ["Agricultura", "cultivar", COL.verde],
      ["Secundario", "transforma", COL.gris],
      ["Industria", "fábricas y máquinas", COL.gris],
      ["Terciario", "servicios", COL.azul],
      ["Consumidor", "quien lo usa", COL.morado],
    ], 4, 86, "Resumen de los sectores de trabajo"),
  },
  video: vgen("NsJfgkBl9Xo", "sectores económicos primario secundario terciario para niños"),
  ejemplos: [
    { enunciado: "¿A qué sector pertenece una pescadora?",
      pasos: ["Saca peces del mar: obtiene algo de la naturaleza.", "Eso es obtener materias primas."],
      resultado: "Al sector primario." },
    { enunciado: "Sigue el camino de una camiseta de algodón.",
      pasos: ["El agricultor cultiva el algodón: primario.", "Una fábrica textil hace la tela y cose la camiseta: secundario.", "Un camión la lleva a la tienda y allí la venden: terciario."],
      resultado: "Primario → secundario → terciario." },
    { enunciado: "En una clase, 20 familias trabajan en servicios, 7 en industria y 3 en el campo. ¿Cuántas son en total?",
      pasos: ["Sumamos: 20 + 7 + 3.", "20 + 7 = 27; 27 + 3 = 30."],
      resultado: "30 familias; la mayoría trabaja en servicios." },
  ],
  errores: [
    "Pensar que el panadero es del sector primario: transforma la harina, así que es secundario.",
    "Creer que el comercio fabrica productos: solo los vende, es terciario.",
    "Pensar que hay trabajos solo para hombres o solo para mujeres.",
    "Confundir materia prima (de la naturaleza) con producto elaborado.",
  ],
  ejercicios: [
    { q: "¿Para qué trabajan las personas?", sol: "Para ganar dinero con el que vivir y para ayudar a los demás con su trabajo." },
    { q: "¿Qué es una materia prima? Pon un ejemplo.", sol: "Un material que se obtiene de la naturaleza para fabricar productos. Ejemplo: la madera." },
    { q: "Escribe una materia prima vegetal, una animal y una mineral.", sol: "Vegetal: trigo; animal: lana; mineral: hierro." },
    { q: "Escribe tres actividades del sector primario.", sol: "Agricultura, ganadería y pesca (también minería y explotación forestal)." },
    { q: "¿Qué hace el sector secundario?", sol: "Transforma las materias primas en productos elaborados." },
    { q: "¿Qué diferencia hay entre la industria y la artesanía?", sol: "La industria fabrica muchos productos iguales con máquinas; la artesanía hace piezas a mano, una a una." },
    { q: "Escribe cuatro servicios del sector terciario.", sol: "Por ejemplo: comercio, transporte, sanidad, educación o turismo." },
    { q: "¿En qué sector trabaja más gente en España?", sol: "En el sector terciario o de servicios." },
    { q: "Clasifica: albañil, ganadero, enfermera.", sol: "Albañil: secundario; ganadero: primario; enfermera: terciario." },
    { q: "Explica el camino del pan.", sol: "El agricultor cultiva el trigo (primario), la harinera y la panadería hacen el pan (secundario) y una tienda lo vende (terciario)." },
  ],
  quiz: [
    { q: "La leche es una materia prima de origen…", o: ["animal", "mineral", "vegetal"], a: 0, e: "Animal." },
    { q: "El hierro es de origen…", o: ["mineral", "animal", "vegetal"], a: 0, e: "Mineral." },
    { q: "Cultivar la tierra es la…", o: ["agricultura", "ganadería", "industria"], a: 0, e: "La agricultura." },
    { q: "Criar animales es la…", o: ["ganadería", "pesca", "minería"], a: 0, e: "La ganadería." },
    { q: "Transformar materias primas es del sector…", o: ["secundario", "primario", "terciario"], a: 0, e: "Secundario." },
    { q: "Fabricar con máquinas en serie es la…", o: ["industria", "artesanía", "pesca"], a: 0, e: "La industria." },
    { q: "Un alfarero que hace vasijas a mano trabaja en la…", o: ["artesanía", "minería", "sanidad"], a: 0, e: "La artesanía." },
    { q: "Un maestro trabaja en el sector…", o: ["terciario", "primario", "secundario"], a: 0, e: "Terciario: educación." },
    { q: "Un minero trabaja en el sector…", o: ["primario", "terciario", "secundario"], a: 0, e: "Primario." },
    { q: "La persona que compra y usa un producto es el…", o: ["consumidor", "fabricante", "agricultor"], a: 0, e: "El consumidor." },
  ],
  examen: [
    { q: "El albañil trabaja en la…", o: ["construcción", "pesca", "ganadería"], a: 0, e: "En la construcción (sector secundario)." },
    { q: "El transporte pertenece al sector…", o: ["terciario", "primario", "secundario"], a: 0, e: "Terciario." },
    { q: "Los cultivos que solo reciben agua de lluvia son de…", o: ["secano", "regadío", "invernadero"], a: 0, e: "De secano." },
    { q: "Las personas que ayudan sin cobrar son…", o: ["voluntarias", "jubiladas", "turistas"], a: 0, e: "Voluntarias." },
  ],
  feynman: ["Qué es una materia prima y de dónde viene", "Los tres sectores de trabajo con ejemplos", "El camino de un producto desde el campo hasta tu mesa"],
  mapa: mapa("LOS SECTORES", "var(--pri)", [
    ["Primario", "agricultura · pesca", COL.verde],
    ["Secundario", "industria · construcción", COL.gris],
    ["Terciario", "comercio · sanidad", COL.azul],
    ["Conectados", "del campo a la mesa", COL.naranja],
  ], 250),
  tarjetas: [
    ["Profesión", "Tipo de trabajo u oficio."],
    ["Materia prima", "Material que se saca de la naturaleza."],
    ["Sector primario", "Obtiene materias primas."],
    ["Ganadería", "Criar animales."],
    ["Sector secundario", "Transforma materias primas en productos."],
    ["Artesanía", "Fabricar a mano, pieza a pieza."],
    ["Sector terciario", "Presta servicios a las personas."],
    ["Consumidor", "Persona que compra y usa productos."],
  ],
  familias: ["Hablad de la profesión de cada persona de la familia y de su sector.", "En el supermercado, elegid un producto y averiguad su materia prima y dónde se fabricó.", "Visitad un mercado, un taller artesano o una granja.", "Pensad juntos qué trabajos han aparecido o desaparecido desde que los abuelos eran pequeños."],
  profesores: PROF("Ciencias Sociales: el trabajo y las profesiones; materias primas de origen vegetal, animal y mineral; sectores primario, secundario y terciario; cadena de producción; trabajos de la localidad; igualdad y respeto a todas las profesiones", ["Juego de clasificar oficios con mímica.", "Encuesta sobre los trabajos de las familias y gráfico de barras.", "Seguir el camino de un producto desde su origen."]),
  fuentes: [RD, wiki("Sector primario", "Sector primario"), wiki("Sector secundario", "Sector secundario"), wiki("Sector terciario", "Sector terciario")],
  revisado: REV,
};
