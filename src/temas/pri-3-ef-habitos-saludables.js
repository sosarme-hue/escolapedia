// Educación Física 3º de Primaria: hábitos saludables. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, et, COL, rejilla, wiki, mapa, filas, fichas, flujo, columna, barras, vid, vgen, RD, PROF, nino, suelo, corazon, sol, tick, equis, estrella } = require("./_pri3b");

// Botella de agua, cama y manzana sencillas.
const botella = (x, y) => `<rect x="${x - 7}" y="${y - 34}" width="14" height="34" rx="4" fill="#bfdbfe" stroke="var(--ink)" stroke-width="1.2"/><rect x="${x - 4}" y="${y - 40}" width="8" height="6" fill="${COL.azul}"/><rect x="${x - 7}" y="${y - 20}" width="14" height="20" rx="3" fill="var(--water)" fill-opacity=".7"/>`;
const manzana = (x, y, r = 10) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${COL.rojo}"/><path d="M${x} ${y - r} q2 -6 6 -7" stroke="#15803d" stroke-width="2" fill="none"/>`;
const cama = (x, y) => `<rect x="${x - 30}" y="${y - 16}" width="60" height="12" rx="3" fill="#c4b5fd" stroke="var(--ink)" stroke-width="1.2"/><rect x="${x - 34}" y="${y - 28}" width="6" height="28" fill="#a16207"/><rect x="${x + 28}" y="${y - 20}" width="6" height="20" fill="#a16207"/><ellipse cx="${x - 18}" cy="${y - 20}" rx="9" ry="5" fill="#fff" stroke="var(--ink)"/>`;

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Hábitos saludables",
  minutos: 50,
  objetivos: ["Entender qué es la salud y qué son los hábitos saludables", "Valorar la actividad física diaria y conocer cuánto deben moverse los niños", "Aplicar normas de higiene antes, durante y después de la actividad física", "Relacionar alimentación, hidratación y descanso con el ejercicio", "Prevenir lesiones con calentamiento, buena postura y seguridad"],
  claves: ["salud", "hábito", "actividad física", "sedentarismo", "higiene", "hidratación", "alimentación", "descanso", "calentamiento", "estiramientos", "pulsaciones", "seguridad"],
  pregunta: {
    texto: "Un coche necesita gasolina, aceite, revisiones y un buen conductor para funcionar bien muchos años. ¿Qué necesita tu cuerpo para estar sano y en forma?",
    respuesta: "Tu cuerpo necesita <b>moverse</b> cada día, <b>comer</b> de forma variada, <b>beber agua</b>, <b>dormir</b> lo suficiente, estar <b>limpio</b> y tener <b>buen ánimo</b>. Cuando hacemos estas cosas todos los días, se convierten en <mark>hábitos saludables</mark>: costumbres que nos ayudan a crecer sanos y a sentirnos bien.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la salud?</h3><p>Estar <mark>sano</mark> no es solo no estar enfermo. La <b>salud</b> es sentirse bien en tres aspectos:</p><p>• <b>Salud del cuerpo</b>: que el cuerpo funcione bien, tenga energía y fuerza.<br>• <b>Salud de la mente</b>: estar tranquilo, contento, con ganas de aprender y de hacer cosas.<br>• <b>Salud social</b>: llevarse bien con los demás, tener amigos y sentirse querido.</p><p>Un <mark>hábito</mark> es algo que hacemos de forma repetida, casi sin pensar, como lavarnos los dientes después de comer. Los <b>hábitos saludables</b> son las costumbres que cuidan nuestra salud:</p><p>• Hacer <b>actividad física</b> todos los días.<br>• Comer de forma <b>equilibrada</b> y variada.<br>• Beber <b>agua</b>.<br>• <b>Dormir</b> las horas necesarias.<br>• Mantener una buena <b>higiene</b>.<br>• Tener una buena <b>postura</b>.<br>• No pasar demasiado tiempo frente a las <b>pantallas</b>.</p><p>Los hábitos se aprenden de pequeños. ¡Lo que hagas ahora te acompañará toda la vida!</p>`,
      svg: svg("Rueda de hábitos saludables: moverse, comer bien, agua, dormir e higiene", `${tit("Hábitos saludables")}${corazon(130, 104, 2)}${[["moverme", 130, 42, COL.verde], ["comer bien", 52, 80, COL.naranja], ["agua", 208, 80, COL.azul], ["dormir", 66, 150, COL.morado], ["higiene", 194, 150, COL.agua]].map(([s, x, y, c]) => et(x, y, s, 80, { size: 11.5, color: c })).join("")}`),
    },
    {
      html: `<h3>¡A moverse cada día!</h3><p>La <mark>actividad física</mark> es cualquier movimiento del cuerpo que gasta energía: jugar en el recreo, ir andando o en bici al colegio, subir escaleras, bailar, nadar, hacer deporte…</p><p>Los expertos en salud recomiendan que los niños y niñas hagan <b>al menos 60 minutos</b> (una hora) de actividad física <b>cada día</b>, y que varios días a la semana sea intensa: que haga sudar y respirar fuerte.</p><p>Moverse tiene muchos beneficios:</p><p>• Fortalece el <b>corazón</b>, los <b>pulmones</b>, los <b>músculos</b> y los <b>huesos</b>.<br>• Mejora la <b>coordinación</b> y el equilibrio.<br>• Ayuda a mantener un peso saludable.<br>• Hace que <b>durmamos mejor</b>.<br>• Mejora la <b>atención</b> y la memoria en clase.<br>• Nos pone de <b>buen humor</b> y nos ayuda a hacer amigos.</p><p>Lo contrario es el <mark>sedentarismo</mark>: pasar mucho tiempo sentados o quietos, por ejemplo frente a la televisión, la consola o el móvil. Es malo para la salud. Por eso se recomienda no pasar más de <b>dos horas al día</b> delante de pantallas para entretenerse, y levantarse a moverse cada rato.</p>`,
      svg: svg("Sesenta minutos de actividad física al día repartidos en recreo, ir al cole, educación física y parque", `${tit("60 minutos al día")}${barras([["recreo", 20, COL.verde], ["ir andando", 15, COL.azul], ["parque", 25, COL.naranja]], { unidad: " min", y0: 140, alto: 80, x0: 30, ancho: 200 })}${tx(130, 166, "20 + 15 + 25 = 60 minutos", 200)}`),
      video: vid("VMbRdSe8avs"),
    },
    {
      html: `<h3>El corazón y el esfuerzo</h3><p>Cuando hacemos ejercicio, el <b>corazón</b> late más deprisa para llevar más sangre con oxígeno a los músculos. Podemos notar los latidos tomándonos las <mark>pulsaciones</mark>:</p><p>1. Coloca los dedos índice y corazón (nunca el pulgar) en un lado del <b>cuello</b>, debajo de la mandíbula, o en la parte interior de la <b>muñeca</b>.<br>2. Busca el punto donde notas los latidos.<br>3. Cuenta los latidos durante <b>15 segundos</b>.<br>4. Multiplica por 4 y sabrás tus pulsaciones por minuto.</p><p>En <b>reposo</b>, un niño de tu edad tiene unas 80 o 90 pulsaciones por minuto. Después de correr un rato, pueden subir a 150 o más. Cuando paramos, el corazón vuelve poco a poco a su ritmo normal: cuanto más en forma estamos, más rápido se recupera.</p><p>Experimento: toma tus pulsaciones en reposo, después de saltar 30 segundos a la comba y tras dos minutos de descanso. Apunta los resultados y compáralos. ¿Qué observas?</p><p>Si alguna vez durante el ejercicio notas <b>mareo</b>, dolor en el pecho o mucho cansancio, para y avisa al profesor.</p>`,
      svg: svg("Tomar las pulsaciones en el cuello y gráfico de reposo, después de correr y recuperación", `${tit("Mis pulsaciones")}${barras([["reposo", 85, COL.verde], ["tras correr", 150, COL.rojo], ["2 min después", 100, COL.naranja]], { unidad: "", y0: 140, alto: 92, x0: 30, ancho: 200, max: 160 })}${tx(130, 166, "15 segundos × 4 = pulsaciones por minuto", 230)}`),
    },
    {
      html: `<h3>Higiene y actividad física</h3><p>La <mark>higiene</mark> es el conjunto de cuidados que mantienen limpio nuestro cuerpo para evitar enfermedades y sentirnos bien. En Educación Física tiene mucha importancia:</p><p><b>Antes de la clase</b>:</p><p>• Lleva <b>ropa deportiva</b> cómoda y que te deje moverte: chándal o pantalón corto y camiseta transpirable.<br>• Usa <b>zapatillas deportivas</b> bien atadas, con calcetines.<br>• Quítate pulseras, collares, relojes y pendientes largos, que pueden engancharse.<br>• Si tienes el pelo largo, recógetelo.</p><p><b>Después de la clase</b>:</p><p>• <b>Lávate las manos</b> y la cara con agua y jabón.<br>• Si has sudado mucho, <b>cámbiate la camiseta</b> por una limpia. Lleva una bolsa de aseo con toalla pequeña, jabón y una camiseta de repuesto.<br>• En casa, dúchate.<br>• Lava la ropa deportiva después de usarla.</p><p>Otros hábitos de higiene: lavarse las manos antes de comer y después de ir al baño, lavarse los dientes tres veces al día, cortarse las uñas y lavar el pelo con frecuencia.</p>`,
      svg: svg("Bolsa de aseo: toalla, jabón y camiseta de repuesto; lavarse las manos", `${tit("Bolsa de aseo")}${fichas([["Toalla", "pequeña", COL.azul], ["Jabón", "manos y cara", COL.agua], ["Camiseta", "de repuesto", COL.verde], ["Zapatillas", "bien atadas", COL.naranja]], 2, 36, 0)}`),
    },
    {
      html: `<h3>Comer y beber bien</h3><p>Para moverte, tu cuerpo necesita <b>energía</b>, y esa energía viene de los <b>alimentos</b>. Una <mark>alimentación</mark> saludable es variada y equilibrada:</p><p>• Mucha <b>fruta</b> y <b>verdura</b>: al menos cinco raciones al día entre las dos.<br>• <b>Cereales</b>, pan, pasta, arroz y patatas, que dan energía. Mejor integrales.<br>• <b>Legumbres</b>, pescado, huevos y carne, que ayudan a crecer y a formar músculos.<br>• <b>Leche</b>, yogur y queso, para tener los huesos fuertes.<br>• Pocos <b>dulces</b>, bollería, refrescos, golosinas y comida rápida.</p><p>El <b>desayuno</b> es muy importante: después de toda la noche sin comer, el cuerpo necesita energía para empezar el día. Un buen desayuno tiene un lácteo, un cereal y una fruta. Y en el recreo, mejor una fruta o un bocadillo que bollería.</p><p>La <mark>hidratación</mark> es igual de importante: al hacer ejercicio sudamos y perdemos agua. Hay que <b>beber agua</b> antes, durante (a pequeños sorbos) y después de la actividad física. Lleva siempre tu <b>botella de agua</b>. ¡El agua es la mejor bebida, mejor que los refrescos!</p>`,
      svg: svg("Botella de agua y manzana: beber agua y comer fruta", `${tit("Comer y beber")}${botella(64, 140)}${manzana(130, 124, 14)}${et(64, 160, "agua siempre", 80, { size: 10.5, color: COL.azul })}${et(130, 160, "fruta", 50, { size: 10.5, color: COL.rojo })}${filas([["desayuno", "lácteo + cereal + fruta", COL.naranja]], 60, 0, { x: 24, wa: 70, wb: 150 })}<path d="M180 108 h46 v28 h-46z" fill="var(--card)" stroke="var(--line)"/>${equis(203, 122)}${et(203, 160, "refrescos", 60, { size: 10.5, color: COL.rojo })}`),
    },
    {
      html: `<h3>Descansar y dormir</h3><p>El <mark>descanso</mark> es tan importante como el ejercicio. Mientras dormimos, el cuerpo <b>crece</b>, repara los músculos, recupera la energía y el cerebro ordena todo lo que hemos aprendido durante el día.</p><p>Los niños y niñas de tu edad necesitan dormir entre <b>9 y 12 horas</b> cada noche. Si duermes poco, al día siguiente estarás cansado, te costará prestar atención y tendrás menos ganas de jugar.</p><p>Consejos para dormir bien:</p><p>• Acuéstate y levántate <b>siempre a la misma hora</b>, también, más o menos, los fines de semana.<br>• Cena algo ligero, un rato antes de ir a la cama.<br>• <b>Apaga las pantallas</b> (tele, tableta, móvil) al menos una hora antes de dormir: su luz engaña al cerebro y no le deja descansar.<br>• Haz algo tranquilo antes de dormir: leer un cuento, hablar con tu familia, hacer respiraciones lentas.<br>• Que la habitación esté oscura, en silencio y con una temperatura agradable.</p><p>Durante el día también hay que <b>descansar</b> entre esfuerzos: en clase de Educación Física hay pausas para beber agua y recuperarse.</p>`,
      svg: svg("Niño durmiendo en la cama: entre 9 y 12 horas, sin pantallas", `${tit("Dormir bien")}${cama(90, 140)}<circle cx="70" cy="118" r="8" fill="#fcd9b6"/>${et(120, 80, "Z z z", 50, { size: 14, color: COL.morado })}${filas([["9-12 h", "cada noche", COL.morado], ["misma hora", "siempre", COL.azul], ["sin pantallas", "una hora antes", COL.rojo]], 66, 32, { x: 150, wa: 90, wb: 90, dos: true })}`),
    },
    {
      html: `<h3>Prevenir lesiones</h3><p>Hacer ejercicio es muy sano, pero hay que hacerlo con <b>seguridad</b> para no hacerse daño. Para prevenir lesiones:</p><p>• Haz siempre un buen <mark>calentamiento</mark> al empezar: movilidad de articulaciones y carrera suave.<br>• Al terminar, haz la <b>vuelta a la calma</b> y <mark>estiramientos</mark> suaves: estira despacio, sin rebotes, y mantén cada estiramiento unos segundos sin que duela.<br>• Usa el <b>material</b> de forma correcta y para lo que sirve. No te subas a las porterías ni a las canastas.<br>• Respeta las <b>normas</b> de los juegos y el espacio de los demás.<br>• Mira por dónde vas para no chocar.<br>• Adapta el esfuerzo a tu nivel: no te compares con otros ni intentes hacer lo que todavía no sabes.<br>• Si te duele algo o te haces daño, <b>para</b> y avisa al profesor.</p><p>Fuera del colegio, recuerda: <b>casco</b> para la bici, los patines y el patinete; <b>protector solar</b>, gorra y agua cuando hace sol y calor; y bañarte solo donde haya socorrista y sabiendo nadar.</p>`,
      svg: svg("Normas de seguridad: calentar, estirar, usar bien el material y casco en la bici", `${tit("Sin lesiones")}${columna([["calienta al empezar", COL.rojo], ["estira al terminar", COL.verde], ["usa bien el material", COL.azul], ["casco en bici y patines", COL.naranja], ["si te duele, para", COL.morado]], 130, 210, 34, 22, 6)}`),
    },
    {
      html: `<h3>Mente sana, cuerpo sano</h3><p>Los romanos ya decían «<i>mens sana in corpore sano</i>»: mente sana en cuerpo sano. Cuidar la mente y las emociones también es un hábito saludable.</p><p>La actividad física nos ayuda a sentirnos mejor: cuando nos movemos, el cerebro fabrica unas sustancias que nos ponen <b>contentos</b> y nos quitan los nervios. Además, al jugar con otros hacemos <b>amigos</b>.</p><p>Otros hábitos para cuidar la mente:</p><p>• <b>Relajarse</b>: hacer respiraciones lentas cuando estamos nerviosos o enfadados.<br>• <b>Expresar</b> lo que sentimos y hablar con alguien de confianza cuando algo nos preocupa.<br>• <b>Jugar al aire libre</b> y estar en contacto con la naturaleza.<br>• Ser <b>amables</b> con los demás y con nosotros mismos.<br>• Tener <b>tiempo libre</b> para jugar, leer, dibujar o no hacer nada.<br>• Usar las pantallas con <b>moderación</b>.</p><p>En Educación Física también cuidamos la salud social: respetamos a todos, ayudamos al que lo necesita, aceptamos ganar y perder y nadie se queda solo.</p>`,
      svg: svg("Mente sana en cuerpo sano: niños jugando al aire libre, contentos", `${tit("Mente sana")}${sol(220, 50, 12)}${suelo(150)}${nino(70, 150, { pose: "salta", s: 1.1, nina: true })}${nino(140, 150, { pose: "arriba", s: 1.1 })}${corazon(196, 110, 1.4)}${tx(130, 172, "moverse nos pone contentos", 200)}`),
      video: vid("cByEdyUcxO0"),
    },
    {
      html: `<h3>Mi semana saludable</h3><p>Ahora vamos a poner en práctica todo lo aprendido con un <b>reto de una semana</b>. Cada día apunta en una tabla si has cumplido estos hábitos, con una marca o un dibujo:</p><p>• He hecho al menos <b>60 minutos</b> de actividad física.<br>• He comido <b>fruta</b> y verdura.<br>• He bebido <b>agua</b> y no refrescos.<br>• He <b>desayunado</b> bien.<br>• Me he <b>lavado</b> las manos antes de comer y me he duchado después del ejercicio.<br>• He dormido al menos <b>9 horas</b>.<br>• He estado <b>menos de dos horas</b> con pantallas.</p><p>Al final de la semana, cuenta las marcas. ¿Qué hábito te ha resultado más fácil? ¿Cuál más difícil? Piensa en <b>un hábito que quieres mejorar</b> la próxima semana y escríbelo como objetivo: por ejemplo, «Voy a ir andando al colegio» o «Voy a llevar fruta para el recreo».</p><p>Compartid los resultados en clase y con las familias: ¡los hábitos saludables son más fáciles si se hacen en equipo!</p><p><b>Repaso:</b> ¿cuántos minutos de actividad física al día se recomiendan? → Al menos 60. ¿Cuándo hay que beber agua al hacer ejercicio? → Antes, durante y después.</p>`,
      svg: svg("Tabla de la semana saludable con marcas de hábitos cumplidos", `${tit("Mi semana saludable")}${["L", "M", "X", "J", "V", "S", "D"].map((d, i) => et(86 + i * 24, 46, d, 18, { size: 10.5, color: COL.azul })).join("")}${["moverme", "fruta", "agua", "dormir"].map((h, r) => `${et(20, 72 + r * 26, h, 60, { size: 10, anchor: "start" })}${[...Array(7)].map((_, i) => (i + r) % 4 === 3 ? `<rect x="${78 + i * 24}" y="${60 + r * 26}" width="16" height="14" rx="2" fill="none" stroke="var(--line)"/>` : tick(86 + i * 24, 66 + r * 26)).join("")}`).join("")}${estrella(130, 170, 8)}`),
    },
  ],
  figura: {
    titulo: "Los hábitos saludables en ocho ideas",
    svg: rejilla([
      ["Salud", "cuerpo, mente y amigos", COL.verde],
      ["60 minutos", "de actividad al día", COL.naranja],
      ["Sedentarismo", "menos pantallas", COL.rojo],
      ["Pulsaciones", "15 s × 4", COL.morado],
      ["Higiene", "lavarse y cambiarse", COL.agua],
      ["Agua", "antes, durante, después", COL.azul],
      ["Dormir", "9 a 12 horas", COL.morado],
      ["Seguridad", "calentar y estirar", COL.marron],
    ], 4, 86, "Resumen de hábitos saludables"),
  },
  video: vgen("E-P4KQ-aLmM", "hábitos saludables para niños"),
  ejemplos: [
    { enunciado: "En 15 segundos cuentas 22 latidos después de correr. ¿Cuántas pulsaciones por minuto tienes?",
      pasos: ["Un minuto tiene cuatro veces 15 segundos.", "Multiplicamos 22 × 4.", "22 × 4 = 88."],
      resultado: "88 pulsaciones por minuto." },
    { enunciado: "Hoy has jugado 25 minutos en el recreo y 50 en Educación Física. ¿Has cumplido la recomendación de actividad física?",
      pasos: ["Sumamos: 25 + 50 = 75 minutos.", "La recomendación es al menos 60 minutos.", "75 es mayor que 60."],
      resultado: "Sí, has hecho 75 minutos: ¡más de los 60 recomendados!" },
    { enunciado: "Te acuestas a las 21:30 y te levantas a las 7:30. ¿Cuántas horas duermes? ¿Es suficiente?",
      pasos: ["De 21:30 a 7:30 hay 10 horas.", "La recomendación es entre 9 y 12 horas."],
      resultado: "Duermes 10 horas: es suficiente." },
  ],
  errores: [
    "Pensar que estar sano es solo no estar enfermo.",
    "Beber agua solo al terminar el ejercicio, y de golpe.",
    "Ir a Educación Física con pulseras, collares o las zapatillas desatadas.",
    "Usar pantallas justo antes de dormir.",
  ],
  ejercicios: [
    { q: "¿Qué es la salud?", sol: "Sentirse bien en el cuerpo, en la mente y con los demás." },
    { q: "¿Qué es un hábito saludable? Pon dos ejemplos.", sol: "Una costumbre que cuida la salud. Ejemplos: hacer ejercicio cada día y lavarse los dientes." },
    { q: "¿Cuánta actividad física al día se recomienda a los niños?", sol: "Al menos 60 minutos." },
    { q: "¿Qué es el sedentarismo?", sol: "Pasar mucho tiempo sentado o quieto, sin moverse." },
    { q: "¿Cómo se toman las pulsaciones?", sol: "Con los dedos índice y corazón en el cuello o la muñeca, contando 15 segundos y multiplicando por 4." },
    { q: "Escribe tres normas de higiene en Educación Física.", sol: "Llevar ropa deportiva, lavarse las manos y la cara al terminar y cambiarse la camiseta." },
    { q: "¿Cuándo hay que beber agua al hacer ejercicio?", sol: "Antes, durante (a sorbos) y después." },
    { q: "¿Qué debe tener un buen desayuno?", sol: "Un lácteo, un cereal y una fruta." },
    { q: "¿Cuántas horas deben dormir los niños de tu edad?", sol: "Entre 9 y 12 horas." },
    { q: "Escribe tres formas de prevenir lesiones.", sol: "Calentar, estirar al terminar y usar bien el material." },
  ],
  quiz: [
    { q: "La salud incluye el cuerpo, la mente y…", o: ["las relaciones con los demás", "solo los músculos", "el dinero"], a: 0, e: "Las relaciones con los demás." },
    { q: "Los niños deben moverse al día al menos…", o: ["60 minutos", "5 minutos", "6 horas"], a: 0, e: "60 minutos." },
    { q: "Pasar mucho tiempo quieto frente a pantallas es…", o: ["sedentarismo", "deporte", "higiene"], a: 0, e: "Sedentarismo." },
    { q: "Las pulsaciones se toman con…", o: ["índice y corazón", "el pulgar", "el codo"], a: 0, e: "Con los dedos índice y corazón." },
    { q: "Tras hacer ejercicio, el corazón late…", o: ["más deprisa", "más despacio", "igual"], a: 0, e: "Más deprisa." },
    { q: "Después de Educación Física conviene…", o: ["lavarse y cambiarse la camiseta", "no hacer nada", "ponerse más ropa sudada"], a: 0, e: "Lavarse y cambiarse." },
    { q: "La mejor bebida es el…", o: ["agua", "refresco", "batido azucarado"], a: 0, e: "El agua." },
    { q: "Las pantallas se apagan antes de dormir…", o: ["una hora antes", "un minuto antes", "nunca"], a: 0, e: "Al menos una hora antes." },
    { q: "Los estiramientos se hacen…", o: ["despacio y sin rebotes", "con rebotes fuertes", "hasta que duela"], a: 0, e: "Despacio y sin rebotes." },
    { q: "Para montar en bici hay que llevar…", o: ["casco", "chanclas", "gafas de buceo"], a: 0, e: "Casco." },
  ],
  examen: [
    { q: "«Mens sana in corpore sano» significa…", o: ["mente sana en cuerpo sano", "come sano", "duerme mucho"], a: 0, e: "Mente sana en cuerpo sano." },
    { q: "Si te mareas haciendo ejercicio…", o: ["paras y avisas", "sigues más fuerte", "te escondes"], a: 0, e: "Paras y avisas al profesor." },
    { q: "Mientras dormimos, el cuerpo…", o: ["crece y se repara", "se para del todo", "gasta más energía que corriendo"], a: 0, e: "Crece y se repara." },
    { q: "Con 20 latidos en 15 segundos tienes…", o: ["80 pulsaciones", "20 pulsaciones", "200 pulsaciones"], a: 0, e: "20 × 4 = 80." },
  ],
  feynman: ["Qué es la salud y qué son los hábitos saludables", "Cómo se toman las pulsaciones", "Por qué son importantes el agua y el descanso al hacer ejercicio"],
  mapa: mapa("HÁBITOS SANOS", "var(--pri)", [
    ["Moverme", "60 min · pulsaciones", COL.verde],
    ["Higiene", "lavarse · ropa", COL.agua],
    ["Comer y beber", "fruta · agua", COL.naranja],
    ["Descansar", "dormir · seguridad", COL.morado],
  ], 250),
  tarjetas: [
    ["Salud", "Bienestar del cuerpo, la mente y social."],
    ["Hábito", "Costumbre que repetimos."],
    ["Actividad física", "Movimiento que gasta energía."],
    ["Sedentarismo", "Pasar mucho tiempo quieto."],
    ["Pulsaciones", "Latidos del corazón por minuto."],
    ["Higiene", "Cuidados para estar limpio."],
    ["Hidratación", "Beber agua para reponer la que perdemos."],
    ["Estiramientos", "Alargar los músculos despacio al terminar."],
  ],
  familias: ["Haced juntos el reto de la semana saludable.", "Id andando o en bici al colegio cuando sea posible.", "Preparad juntos almuerzos saludables para el recreo.", "Fijad un horario de pantallas y de sueño en casa."],
  profesores: PROF("Educación Física: salud física, mental y social; hábitos saludables; recomendaciones de actividad física y sedentarismo; frecuencia cardiaca y su toma; higiene en la actividad física; alimentación e hidratación; descanso y sueño; prevención de lesiones y seguridad", ["Toma de pulsaciones antes y después del esfuerzo.", "Bolsa de aseo tras cada sesión.", "Reto de la semana saludable con registro."]),
  fuentes: [RD, wiki("Salud", "Salud"), wiki("Actividad física", "Actividad física"), wiki("Sedentarismo", "Sedentarismo")],
  revisado: REV,
};
