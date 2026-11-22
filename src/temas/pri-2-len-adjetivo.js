// Lengua Castellana 2º de Primaria: el adjetivo. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, parejas } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "2-primaria",
  titulo: "El adjetivo",
  minutos: 25,
  objetivos: ["Saber que el adjetivo dice cómo es el sustantivo", "Encontrar adjetivos en frases y usarlos para describir", "Hacer que el adjetivo concuerde con el sustantivo"],
  claves: ["adjetivo", "cualidad", "describir", "concordancia"],
  pregunta: {
    texto: "Si te digo «un gato», ¿te lo imaginas bien? ¿Y si te digo «un gato negro, pequeño y dormilón»?",
    respuesta: "Ahora sí te lo imaginas. <b>negro</b>, <b>pequeño</b> y <b>dormilón</b> dicen cómo es el gato: son <mark>adjetivos</mark>.",
  },
  bloques: [
    {
      html: `<h3>Palabras que dicen cómo es</h3><p>Los <mark>adjetivos</mark> son palabras que dicen <b>cómo es</b> algo o alguien.</p><p>Acompañan al sustantivo: <i>casa <b>grande</b></i>, <i>flor <b>roja</b></i>, <i>niño <b>alegre</b></i>.</p><p>Los adjetivos dicen <b>cualidades</b>: el color, el tamaño, la forma, cómo se siente… ¡Son como los colores de un dibujo!</p>`,
      svg: dibujos("Casa grande, flor roja y niño alegre", [["casa", "grande", A], ["flor", "roja", R], ["feliz", "alegre", Ve]], { titulo: "¿Cómo es?", nota: "casa grande · flor roja · niño alegre" }),
      video: V("adjV", "adjetivos calificativos para niños"),
    },
    {
      html: `<h3>Adjetivos de color y tamaño</h3><p>Muchos adjetivos dicen el <mark>color</mark>: <i>rojo</i>, <i>azul</i>, <i>verde</i>, <i>amarillo</i>.</p><p>Otros dicen el <mark>tamaño</mark>: <i>grande</i>, <i>pequeño</i>, <i>alto</i>, <i>bajo</i>, <i>largo</i>, <i>corto</i>.</p><p>«Un elefante <b>grande</b> y <b>gris</b>.» «Una hormiga <b>pequeña</b> y <b>negra</b>.» ¿Ves cómo ahora los imaginas mejor?</p>`,
      svg: parejas("Elefante grande y gris; hormiga pequeña y negra", [["elefante", "grande", "hormiga", "pequeña"], ["elefante", "gris", "hormiga", "negra"]], { izq: "elefante", der: "hormiga", color: A, color2: R, flecha: "·" }),
    },
    {
      html: `<h3>Adjetivos de forma y de tacto</h3><p>Los adjetivos también dicen la <mark>forma</mark>: <i>redondo</i>, <i>cuadrado</i>, <i>puntiagudo</i>.</p><p>Y cómo es al <mark>tocarlo</mark>: <i>suave</i>, <i>áspero</i>, <i>duro</i>, <i>blando</i>, <i>frío</i>, <i>caliente</i>.</p><p>«La pelota es <b>redonda</b> y <b>blanda</b>.» «El hielo está <b>frío</b> y <b>duro</b>.» Usa tus sentidos para encontrar adjetivos.</p>`,
      svg: dibujos("Pelota redonda, oso suave y nieve fría", [["pelota", "redonda", A], ["oso", "suave", Ve], ["nieve", "fría", N]], { titulo: "Forma y tacto", nota: "redonda · suave · fría" }),
    },
    {
      html: `<h3>Adjetivos de cómo somos</h3><p>Con adjetivos describimos a las <mark>personas</mark>: cómo son y cómo se sienten.</p><p>Por fuera: <i>alto</i>, <i>rubio</i>, <i>moreno</i>. Por dentro: <i>simpático</i>, <i>valiente</i>, <i>generoso</i>, <i>divertido</i>.</p><p>Y cómo están: <i>contento</i>, <i>triste</i>, <i>cansado</i>. ¿Qué adjetivos te describen a ti?</p>`,
      svg: dibujos("Caras contenta, triste y cansada", [["feliz", "contento", Ve], ["triste", "triste", A], ["cansado", "cansado", N]], { titulo: "¿Cómo estás hoy?", nota: "Los adjetivos también dicen cómo nos sentimos" }),
      video: V("adjB"),
    },
    {
      html: `<h3>¿Dónde está el adjetivo?</h3><p>El adjetivo suele ir <mark>cerca del sustantivo</mark>: delante o detrás.</p><p>«Un perro <b>pequeño</b>.» «Un <b>gran</b> día.»</p><p>También puede ir después de <i>es</i> o <i>está</i>: «El perro <b>es</b> pequeño». «La sopa <b>está</b> caliente.» Pregunta: <b>¿cómo es?</b> La respuesta es el adjetivo.</p>`,
      svg: frase("El perro es pequeño. La sopa está caliente", [["El perro", A], ["es", K], ["pequeño", R], ["/"], ["La sopa", A], ["está", K], ["caliente", R]], { titulo: "Pregunta: ¿cómo es?", nota: "En rojo, los adjetivos", fs: 22 }),
    },
    {
      html: `<h3>El adjetivo concuerda</h3><p>El adjetivo se pone <mark>igual que su sustantivo</mark>: masculino o femenino, uno o muchos.</p><p><i>gato blanc<b>o</b></i>, <i>gata blanc<b>a</b></i>, <i>gatos blanc<b>os</b></i>, <i>gatas blanc<b>as</b></i>.</p><p>Si no concuerdan, suena raro: «la gata blanco». Algunos adjetivos no cambian en masculino y femenino: <i>niño alegre</i>, <i>niña alegre</i>.</p>`,
      svg: parejas("Gato blanco, gata blanca; gatos blancos, gatas blancas", [["gato", "gato blanco", "gato", "gata blanca"], ["gato", "gatos blancos", "gato", "gatas blancas"]], { izq: "masculino", der: "femenino", color: A, color2: R, flecha: "·" }),
    },
    {
      html: `<h3>Describir con adjetivos</h3><p>Para <mark>describir</mark> bien, usa varios adjetivos.</p><p>Primero di qué es: <i>Mi mochila</i>. Después cómo es por fuera: <i>es azul y grande</i>. Después otras cosas: <i>tiene un bolsillo pequeño</i>.</p><p>«Mi mochila es azul y grande. Tiene un bolsillo pequeño. Es muy cómoda.» ¡Así cualquiera la reconocería!</p>`,
      svg: lista("Mi mochila es azul, grande, con un bolsillo pequeño y cómoda", [["Mi mochila es azul", A], ["Es grande", Ve], ["Tiene un bolsillo pequeño", N], ["Es muy cómoda", R]], { titulo: "Describo mi mochila", marca: "✓" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los adjetivos hacen que lo que contamos sea <mark>más claro y más bonito</mark>.</p><p>Si pierdes tu chaqueta, dirás: «Es <b>roja</b>, <b>larga</b> y con capucha». Así te ayudan a buscarla.</p><p>En los cuentos, los adjetivos nos hacen imaginar: «un bosque <b>oscuro</b>», «un lobo <b>feroz</b>». ¡Dan miedo y emoción!</p>`,
      svg: charla("Una niña dice que ha perdido su abrigo; el niño pregunta cómo es; ella dice rojo y largo", [["nina", "He perdido mi abrigo.", R], ["nino", "¿Cómo es?", A], ["nina", "Rojo, largo y suave.", R], ["nino", "¡Está aquí!", A]]),
    },
    {
      html: `<h3>Juego: ¿quién es?</h3><p>Piensa en un animal sin decirlo. Descríbelo solo con <mark>adjetivos</mark>.</p><p>«Es <b>grande</b>, <b>gris</b> y tiene orejas <b>enormes</b>.» ¡Es el elefante!</p><p>«Es <b>pequeño</b>, <b>lento</b> y lleva una casa <b>dura</b>.» ¡Es el caracol! Gana quien adivine con menos pistas.</p>`,
      svg: charla("Adivina: es pequeño, lento y lleva casa: el caracol", [["nino", "Pequeño y muy lento.", A], ["nina", "¿Algo más?", R], ["nino", "Lleva una casa dura.", A], ["caracol", "¡Soy el caracol!", Ve]]),
    },
  ],
  figura: {
    titulo: "El adjetivo",
    svg: mural("Adjetivos de color, tamaño, forma y de cómo somos", [["flor", "roja", "color", R], ["elefante", "grande", "tamaño", A], ["pelota", "redonda", "forma", Ve], ["feliz", "alegre", "cómo somos", N]], "El adjetivo dice cómo es el sustantivo y concuerda con él"),
  },
  video: V("adjV", "adjetivos calificativos para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Busca el adjetivo: «Tengo un balón nuevo».",
      pasos: ["Busca el sustantivo: balón.", "Pregunta: ¿cómo es el balón?", "Es nuevo."],
      resultado: "el adjetivo es «nuevo»." },
    { enunciado: "Completa: «La casa es …» (alto).",
      pasos: ["casa es femenino: la casa.", "El adjetivo debe ser femenino.", "alto → alta."],
      resultado: "La casa es alta." },
    { enunciado: "Describe una manzana con tres adjetivos.",
      pasos: ["Color: roja.", "Forma: redonda.", "Sabor: dulce."],
      resultado: "La manzana es roja, redonda y dulce." },
  ],
  errores: [
    "Confundir el adjetivo con el sustantivo: en «gato negro», el adjetivo es «negro».",
    "No hacer concordar: «las flores rojo» está mal; es «las flores rojas».",
    "Usar siempre los mismos adjetivos (bonito, bueno): busca otros más precisos.",
    "Pensar que solo hay adjetivos de color: también de tamaño, forma, carácter…",
  ],
  ejercicios: [
    { q: "Di tres adjetivos de color.", sol: "Por ejemplo: rojo, azul, verde." },
    { q: "Busca el adjetivo: «El sol es brillante».", sol: "brillante." },
    { q: "Contrario de «grande».", sol: "pequeño." },
    { q: "Completa: «unas flores …» (bonito).", sol: "bonitas." },
    { q: "Completa: «un perro …» (simpático).", sol: "simpático." },
    { q: "Describe tu fruta favorita con dos adjetivos.", sol: "Por ejemplo: el plátano es amarillo y dulce." },
    { q: "Di un adjetivo para el hielo.", sol: "frío, duro, resbaladizo…" },
    { q: "Busca los adjetivos: «Un ratón gris y rápido».", sol: "gris y rápido." },
    { q: "¿Cómo te sientes hoy? Dilo con un adjetivo.", sol: "Respuesta libre: contento, cansado, tranquilo…" },
    { q: "Corrige: «La niña está cansado».", sol: "La niña está cansada." },
  ],
  quiz: [
    { q: "El adjetivo dice…", o: ["cómo es algo", "qué hace", "cuántos hay"], a: 0, e: "Dice cualidades." },
    { q: "¿Cuál es un adjetivo?", o: ["mesa", "azul", "correr"], a: 1, e: "azul." },
    { q: "Adjetivo en «un coche rápido»:", o: ["un", "coche", "rápido"], a: 2, e: "¿Cómo es? Rápido." },
    { q: "¿Qué pregunta encuentra el adjetivo?", o: ["¿cómo es?", "¿quién?", "¿cuándo?"], a: 0, e: "¿Cómo es?" },
    { q: "Completa: «la mesa …»", o: ["redondo", "redonda", "redondos"], a: 1, e: "Femenino singular." },
    { q: "«Suave» es un adjetivo de…", o: ["tacto", "color", "número"], a: 0, e: "Cómo se siente al tocar." },
    { q: "Completa: «los gatos …»", o: ["negro", "negras", "negros"], a: 2, e: "Masculino plural." },
    { q: "¿Qué adjetivo describe cómo se siente alguien?", o: ["alto", "triste", "cuadrado"], a: 1, e: "triste." },
    { q: "¿Cuál NO es adjetivo?", o: ["valiente", "pequeño", "saltar"], a: 2, e: "saltar es una acción." },
    { q: "«Niño alegre» y «niña …»", o: ["alegra", "alegre", "alegres"], a: 1, e: "alegre no cambia." },
  ],
  examen: [
    { q: "Adjetivo en «Tengo una camiseta verde»:", o: ["camiseta", "verde", "tengo"], a: 1, e: "verde." },
    { q: "Completa: «unas casas …»", o: ["alto", "altas", "alta"], a: 1, e: "Femenino plural." },
    { q: "«Redondo» dice…", o: ["la forma", "el color", "el sabor"], a: 0, e: "La forma." },
    { q: "¿Qué frase está bien?", o: ["El perro es pequeña", "El perro es pequeño", "La perro es pequeño"], a: 1, e: "Concuerdan." },
  ],
  feynman: ["Qué es un adjetivo", "Qué tipos de cualidades dicen los adjetivos", "Por qué el adjetivo concuerda con el sustantivo"],
  mapa: mapa("EL ADJETIVO", "var(--pri)", [
    ["Qué es", "dice cómo es: casa grande", A],
    ["Cualidades", "color, tamaño, forma, carácter", R],
    ["Pregunta", "¿cómo es?", Ve],
    ["Concuerda", "gata blanca, gatos blancos", N],
  ], 240),
  tarjetas: [
    ["¿Qué es un adjetivo?", "Una palabra que dice cómo es algo"],
    ["Pregunta para encontrarlo", "¿Cómo es?"],
    ["Adjetivo de color", "rojo, azul…"],
    ["Adjetivo de tamaño", "grande, pequeño…"],
    ["Adjetivo de cómo nos sentimos", "contento, triste…"],
    ["«la flor …» (rojo)", "roja"],
    ["«los perros …» (blanco)", "blancos"],
    ["Adjetivo en «sol brillante»", "brillante"],
  ],
  familias: [
    "Jugad a «¿quién es?» describiendo animales solo con adjetivos.",
    "Al cocinar, describid alimentos: crujiente, blando, dulce, salado.",
    "Pedidle que describa su juguete favorito con tres adjetivos.",
    "Leed un cuento y buscad juntos los adjetivos del lobo o de la princesa.",
  ],
  profesores: PROF("Reflexión sobre la lengua: el adjetivo calificativo, su uso para describir y la concordancia en género y número con el sustantivo", ["Caja misteriosa: describir objetos por el tacto.", "Retrato de un compañero con cinco adjetivos.", "Adivinanzas de animales construidas con adjetivos."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Usar adjetivos de sabor, olor y sonido", "Comparar con más… que y menos… que", "Formar adjetivos con -ito y -ísimo", "Describir personas, animales y lugares"],
  lectura: { titulo: "El monstruo del armario", html: `<p>Todas las noches, Pablo oía un ruido extraño dentro de su armario. Era un ruido suave y raspado: «ras, ras, ras».</p><p>—Seguro que es un monstruo enorme, peludo y feroz —le decía a su hermana Lía.</p><p>Una noche, Lía decidió investigar. Cogió una linterna pequeña y amarilla y abrió la puerta despacio.</p><p>Dentro no había ningún monstruo gigante. Había un ratoncito gris, diminuto y muy asustado, que mordisqueaba una galleta vieja.</p><p>—¡Qué monstruo tan pequeñito! —se rió Lía.</p><p>El ratón tenía los ojos negros y brillantes, las orejas redondas y una cola larguísima.</p><p>Al día siguiente, su padre lo llevó con mucho cuidado al parque y lo dejó junto a un árbol viejo y grande.</p><p>Desde entonces, el armario de Pablo está silencioso y tranquilo. Pero a veces, cuando pasa por el parque, Pablo busca a su pequeño monstruo gris.</p>` },
  tras: {
    "Adjetivos de forma y de tacto": [
      ["Adjetivos para los sentidos", `<p>Con los adjetivos podemos contar lo que notamos con <mark>los cinco sentidos</mark>:</p><ul><li><b>Vista</b>: rojo, brillante, grande, oscuro.</li><li><b>Tacto</b>: suave, áspero, frío, mojado.</li><li><b>Gusto</b>: dulce, salado, amargo, ácido.</li><li><b>Olfato</b>: perfumado, apestoso, fresco.</li><li><b>Oído</b>: ruidoso, silencioso, agudo, grave.</li></ul><p>Fíjate en este ejemplo sobre un limón: «Es <b>amarillo</b>, <b>ácido</b>, <b>rugoso</b> y huele <b>fresco</b>».</p><p>Cuantos más sentidos usamos, mejor imagina el lector lo que describimos. Los escritores de cuentos hacen esto todo el tiempo: no solo dicen cómo son las cosas, sino cómo suenan, saben y huelen.</p><p><b>Actividad</b>: con los ojos cerrados, toca, huele y prueba una fruta. Escribe un adjetivo para cada sentido.</p>`,
        L6.filas("Sentidos", [["gusto", "dulce, salado", cRO], ["olfato", "perfumado", cMO], ["oído", "ruidoso", cAZ], ["tacto", "suave", cVE]])],
    ],
    "¿Dónde está el adjetivo?": [
      ["Comparar con adjetivos", `<p>Los adjetivos también sirven para <mark>comparar</mark> dos cosas. Usamos estas fórmulas:</p><ul><li><b>más … que</b>: «El elefante es <b>más</b> grande <b>que</b> el ratón».</li><li><b>menos … que</b>: «El ratón es <b>menos</b> pesado <b>que</b> el elefante».</li><li><b>tan … como</b>: «Mi hermano es <b>tan</b> alto <b>como</b> yo».</li></ul><p>¡Cuidado! Algunos adjetivos tienen una forma especial para comparar:</p><ul><li>No decimos «más bueno», sino <b>mejor</b>: «Este helado es mejor que ese».</li><li>No decimos «más malo», sino <b>peor</b>: «Hoy hace peor tiempo que ayer».</li></ul><p>Comparar ayuda a explicar las cosas con más precisión. Por ejemplo, no es lo mismo decir «mi perro es grande» que «mi perro es más grande que un león». ¡La segunda frase nos haría reír, porque es imposible!</p><p><b>Actividad</b>: compara dos animales con más… que, menos… que y tan… como.</p>`,
        H6.flujo("Comparar", ["más|que", "menos|que", "tan|como", "mejor|peor"], cAZ)],
    ],
    "El adjetivo concuerda": [
      ["Pequeñito y grandísimo", `<p>Podemos cambiar un adjetivo añadiéndole un trocito al final para que diga <mark>más cosas</mark>:</p><ul><li>Con <b>-ito / -ita</b> decimos que algo es pequeño o le tenemos cariño: pequeño → <b>pequeñito</b>; guapa → <b>guapita</b>; cerca → cerquita.</li><li>Con <b>-ísimo / -ísima</b> decimos que algo es <b>muy</b>, muy: alto → <b>altísimo</b>; buena → <b>buenísima</b>; largo → <b>larguísimo</b>.</li></ul><p>Así, «una cola larguísima» quiere decir «una cola muy, muy larga».</p><p>Fíjate en que a veces cambia alguna letra para que suene bien: largo → lar<b>gu</b>ísimo; rico → ri<b>qu</b>ísimo; feliz → feli<b>c</b>ísimo.</p><p><b>Actividad</b>: transforma estos adjetivos con -ísimo: grande, guapo, limpio, rico.</p>`,
        H6.dos("Cambiar", ["-ITO", ["pequeñito", "guapita", "cariño"], cVE], ["-ÍSIMO", ["altísimo", "riquísimo", "muy, muy"], cRO])],
    ],
    "Describir con adjetivos": [
      ["Describir un lugar", `<p>Además de personas y animales, podemos <mark>describir lugares</mark>. Para hacerlo bien, seguimos un orden:</p><ul><li>Decimos <b>qué lugar es</b>: un parque, una cocina, una playa.</li><li>Contamos cómo es <b>en general</b>: grande, tranquilo, luminoso.</li><li>Describimos las <b>cosas que hay</b>, de lo más cercano a lo más lejano, o de izquierda a derecha.</li><li>Terminamos con lo que <b>sentimos</b> allí.</li></ul><p>Ejemplo: «La playa de mi pueblo es <b>larga</b> y <b>tranquila</b>. La arena es <b>fina</b> y <b>dorada</b>. El agua está <b>fría</b> y es <b>transparente</b>. Al fondo hay unas rocas <b>oscuras</b>. Allí me siento <b>feliz</b>».</p><p>Una buena descripción hace que quien la lee pueda cerrar los ojos y ver el lugar como si estuviera allí. Por eso es importante no olvidar los detalles pequeños, como el color de una puerta o el olor de las flores.</p><p>Las palabras de lugar ayudan mucho: <b>delante</b>, <b>detrás</b>, <b>al fondo</b>, <b>a la derecha</b>.</p><p><b>Actividad</b>: describe tu habitación con al menos seis adjetivos.</p>`,
        L6.filas("Describir lugar", [["1", "qué lugar", cNA], ["2", "cómo es", cAZ], ["3", "qué hay", cVE], ["4", "qué siento", cRO]])],
    ],
  },
  final: [
    ["Adjetivos en los cuentos", `<p>Los cuentos están llenos de <mark>adjetivos</mark>. Gracias a ellos imaginamos a los personajes y los lugares:</p><ul><li>«Había una vez una niña <b>pobre</b> y <b>bondadosa</b>…»</li><li>«En un bosque <b>oscuro</b> y <b>frondoso</b> vivía un lobo <b>feroz</b>».</li><li>«La bruja tenía una nariz <b>larga</b> y <b>torcida</b>».</li></ul><p>Algunos personajes tienen un adjetivo en su nombre: el <b>Patito Feo</b>, la <b>Bella</b> Durmiente, el Gato <b>con Botas</b>, Caperucita <b>Roja</b>.</p><p>Los adjetivos también nos dicen si un personaje es bueno o malo. Si leemos «el gigante <b>amable</b>», ya sabemos que no hay que tenerle miedo.</p><p>En la lectura del monstruo, los adjetivos nos engañan al principio: «enorme, peludo y feroz». ¡Y al final era «diminuto y asustado»!</p><p><b>Actividad</b>: escoge tu cuento favorito y subraya todos sus adjetivos.</p>`,
      H6.rueda("Cuentos", "ADJ.", [["Patito Feo", cMO], ["Bella", cRO], ["lobo feroz", cAZ], ["Roja", cVE]])],
    ["Repaso: el monstruo del armario", `<p>Repasamos con la <mark>lectura</mark> de Pablo y Lía:</p><ul><li>¿Cómo imaginaba Pablo al monstruo? <b>Enorme, peludo y feroz</b>.</li><li>¿Cómo era de verdad? Un ratón <b>gris, diminuto</b> y <b>asustado</b>.</li><li>¿Qué adjetivo con -ísima tiene la cola? <b>Larguísima</b>.</li><li>¿Y con -ito? <b>Pequeñito</b>.</li><li>¿Cómo está el armario al final? <b>Silencioso</b> y <b>tranquilo</b>.</li></ul><p>Comparamos: «El ratón es <b>más</b> pequeño <b>que</b> el monstruo que imaginaba Pablo».</p><p>Concordancia: «linterna pequeña y amarilla» (femenino, singular); «ojos negros y brillantes» (masculino, plural).</p><p>¡Fíjate cuántos adjetivos caben en un cuento corto!</p><p><b>Actividad</b>: dibuja el monstruo que imaginaba Pablo y el ratón de verdad, y escribe tres adjetivos debajo de cada uno.</p>`,
      H6.dos("Monstruo", ["IMAGINADO", ["enorme", "peludo", "feroz"], cRO], ["DE VERDAD", ["diminuto", "gris", "asustado"], cVE])],
  ],
  ejemplos: [
    ["Compara un gato y un caballo.", ["Elijo un adjetivo: grande.", "Uso más… que."], "El caballo es más grande que el gato."],
    ["Pon -ísimo a «rico».", ["La c cambia a qu para que suene igual."], "Riquísimo."],
  ],
  errores: ["Decir «más bueno» en lugar de «mejor».", "Escribir «ricísimo» en vez de «riquísimo»."],
  ejercicios: [
    ["b", "Di un adjetivo de sabor.", "Dulce, salado, amargo, ácido."],
    ["b", "Di un adjetivo de sonido.", "Ruidoso, silencioso, agudo…"],
    ["b", "Pon -ito a «pequeño».", "Pequeñito."],
    ["b", "Pon -ísimo a «alto».", "Altísimo."],
    ["b", "¿Cómo se dice «más bueno»?", "Mejor."],
    ["m", "Completa: el ratón es … pesado … el elefante.", "Menos … que."],
    ["m", "Escribe tres adjetivos para un limón.", "Amarillo, ácido, rugoso."],
    ["m", "Transforma: grande, limpio, largo con -ísimo.", "Grandísimo, limpísimo, larguísimo."],
    ["m", "¿Qué adjetivo tiene el nombre «Patito Feo»?", "Feo."],
    ["m", "Ordena para describir un lugar: qué siento, qué lugar, qué hay, cómo es.", "Qué lugar, cómo es, qué hay, qué siento."],
    ["a", "En la lectura, ¿qué adjetivos usa Pablo para el monstruo?", "Enorme, peludo y feroz."],
    ["a", "Describe un parque con cinco adjetivos de distintos sentidos.", "Respuesta libre."],
    ["a", "Compara a dos personajes de cuento con tan… como.", "Por ejemplo: el lobo es tan listo como el zorro."],
    ["a", "¿Por qué los adjetivos de la lectura nos engañan al principio?", "Porque describen lo que imaginaba Pablo, no al ratón real."],
  ],
  quiz: [
    ["«Áspero» es un adjetivo de…", ["tacto", "gusto", "oído"], "Sentidos."],
    ["«Más bueno» se dice…", ["mejor", "buenísimo", "peor"], "Comparar."],
    ["«Larguísimo» significa…", ["muy, muy largo", "un poco largo", "corto"], "-ísimo."],
    ["Para comparar iguales uso…", ["tan … como", "más … que", "menos … que"], "Comparar."],
    ["«Ruidoso» es de…", ["oído", "vista", "olfato"], "Sentidos."],
  ],
  examen: [
    ["En la lectura, ¿qué había en el armario?", ["un ratoncito", "un monstruo", "un gato"], "Lectura."],
    ["«Ojos negros y brillantes» están en…", ["masculino plural", "femenino singular", "masculino singular"], "Repaso."],
  ],
  tarjetas: [
    ["Comparar", "más… que, menos… que, tan… como."],
    ["-ito / -ísimo", "Pequeñito: cariño; altísimo: muy, muy."],
  ],
  glosario: [
    ["Adjetivo", "Palabra que dice cómo es algo."],
    ["Sentidos", "Vista, oído, olfato, gusto y tacto."],
    ["Comparar", "Ver en qué se parecen o se diferencian."],
    ["Mejor", "Más bueno."],
    ["Peor", "Más malo."],
    ["Diminuto", "Muy pequeño."],
    ["Feroz", "Muy fiero y peligroso."],
    ["Describir", "Explicar cómo es algo."],
    ["Concordar", "Tener el mismo género y número."],
    ["Áspero", "Que no es suave al tocarlo."],
  ],
  situacion: {
    titulo: "Galería de monstruos",
    reto: "Cada niño inventa un monstruo, lo dibuja y lo describe con adjetivos para que los demás lo adivinen.",
    pasos: ["Dibujar un monstruo inventado.", "Escribir adjetivos de forma, color, tacto, sonido y olor.", "Comparar el monstruo con el de un compañero.", "Leer la descripción en voz alta y adivinar de quién es."],
    producto: "Una galería de dibujos con sus descripciones.",
    evaluacion: ["Usa adjetivos de varios sentidos.", "Compara con más… que y tan… como.", "Forma palabras con -ito e -ísimo.", "Hace concordar los adjetivos."],
  },
});
