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
