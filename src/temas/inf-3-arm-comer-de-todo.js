// Infantil 3 años · Crecimiento en armonía: Comer de todo. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, PROF, FUENTES } = require("./_inf3a");
const { dibujos, lista, mural, vid, ic } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", S = "var(--sun)", W = "var(--water)";

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "3-anos",
  titulo: "Comer de todo",
  minutos: 10,
  objetivos: ["Conocer alimentos de cada día: fruta, verdura, pan, leche, huevo y pescado", "Saber que el agua es la mejor bebida", "Probar alimentos nuevos y comer sentado y despacio"],
  claves: ["fruta", "verdura", "agua", "desayuno", "probar"],
  pregunta: {
    texto: "¿Qué has comido hoy? ¿Tenía muchos colores?",
    respuesta: "Un plato con <mark>muchos colores</mark> suele ser un plato sano: rojo de tomate, verde de verdura, amarillo de plátano…",
  },
  bloques: [
    {
      html: `<h3>Comemos de todo</h3><p>Para crecer fuerte necesito comer <mark>de todo un poco</mark>.</p><p>Fruta, verdura, pan, leche, huevos y pescado. También legumbres, como las lentejas.</p><p>Cada alimento me da algo bueno. ¡Mi comida tiene muchos colores!</p>`,
      svg: dibujos("Alimentos de cada día: fruta, verdura, pan, leche, huevo y pescado", [["manzana", "fruta", R], ["zanahoria", "verdura", N], ["pan", "pan", A], ["leche", "leche", W], ["huevo", "huevo", S], ["pez", "pescado", V]]),
    },
    {
      html: `<h3>Frutas y verduras</h3><p>Las <mark>frutas y las verduras</mark> me dan energía y me cuidan.</p><p>Hay de muchos colores: la manzana roja, el plátano amarillo, la zanahoria naranja y el brócoli verde.</p><p>¿Cuál es tu favorita?</p>`,
      svg: dibujos("Frutas y verduras de colores: manzana roja, plátano amarillo, zanahoria naranja y brócoli verde", [["manzana", "roja", R], ["platano", "amarilla", S], ["zanahoria", "naranja", N], ["brocoli", "verde", V]], { titulo: "De todos los colores" }),
    },
    {
      html: `<h3>El agua</h3><p>Cuando tengo sed, bebo <mark>agua</mark>. Es la mejor bebida.</p><p>Los zumos y los refrescos tienen mucho azúcar. Las chuches y los pasteles, solo de vez en cuando, por ejemplo en una fiesta.</p>`,
      svg: lista("El agua siempre, la fruta cada día y las chuches solo a veces", [["Agua: siempre", W], ["Fruta: cada día", V], ["Chuches: a veces", R]], { titulo: "¿Cuándo?" }),
    },
    {
      html: `<h3>A la mesa</h3><p>Antes de comer me lavo las manos. Me siento bien en la silla y uso la <mark>cuchara</mark>.</p><p>Como despacio y mastico bien. Y pruebo los alimentos nuevos, aunque sea un poquito. ¡A lo mejor me encantan!</p>`,
      svg: dibujos("A la mesa: la silla, el plato y la cuchara", [["silla", "me siento", A], ["plato", "mi plato", V], ["cuchara", "cuchara", R]], { titulo: "¡A comer!" }),
      video: vid("xqGyWmLlWqE", "Vamos a comer: canción para la hora de comer", "El Payaso Plim Plim", 148933926),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Comer bien me da <mark>fuerza</mark> para correr, jugar y aprender. Me ayuda a crecer y a no ponerme malito.</p><p>El desayuno es muy importante: ¡es la gasolina para empezar el día con energía!</p>`,
      svg: lista("Comer bien da fuerza para jugar, ayuda a crecer, y el desayuno es importante", [["Fuerza para jugar", N], ["Crecer sano", V], ["Un buen desayuno", S]], { titulo: "Comer bien me ayuda" }),
    },
    {
      html: `<h3>Jugamos: el plato de colores</h3><p>Dibuja un plato grande. Pon algo <mark>rojo</mark>, algo verde, algo amarillo y algo blanco.</p><p>Puedes pegar fotos de revistas. ¿Qué colores tiene tu comida de hoy? ¡Cuantos más colores, mejor!</p>`,
      svg: escena("Un plato con comida de cuatro colores: manzana roja, brócoli verde, plátano amarillo y huevo blanco", `<ellipse cx="130" cy="104" rx="112" ry="62" fill="#fff" stroke="var(--muted)" stroke-width="3"/><ellipse cx="130" cy="104" rx="84" ry="44" fill="none" stroke="var(--line)" stroke-width="2"/>
        ${ic("manzana", 90, 86, 1.3)}${ic("brocoli", 168, 84, 1.3)}${ic("platano", 96, 126, 1.3)}${ic("huevo", 166, 126, 1.1)}`, "Mi plato de colores"),
    },
  ],
  figura: {
    titulo: "Comer de todo",
    svg: mural("Comer sano: fruta y verdura, agua para beber, comer sentado y probar cosas nuevas", [["manzana", "fruta", "cada día", R], ["brocoli", "verdura", "de colores", V], ["agua", "agua", "la mejor bebida", W], ["cuchara", "a la mesa", "despacio y sentado", A]], "Comer de todo"),
  },
  video: { ...vid("OkjtI6Umevk", "Comer sano, ¡me gusta!", "Bichikids", 3935188), busqueda: "comer sano canción infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Preparamos un desayuno.",
      pasos: ["Elegimos algo de beber: leche.", "Algo para dar fuerza: pan o cereales.", "Y una fruta: un plátano."],
      resultado: "leche, pan y plátano: ¡buen desayuno!" },
    { enunciado: "Tengo sed. ¿Qué bebo?",
      pasos: ["Pensamos: ¿refresco, zumo o agua?", "El agua no tiene azúcar y quita la sed."],
      resultado: "bebo agua." },
  ],
  errores: [
    "Obligar a acabarse el plato: mejor raciones pequeñas y repetir si quiere.",
    "Rendirse si rechaza un alimento: a veces hay que ofrecerlo muchas veces antes de que lo acepte.",
    "Premiar con chuches: la comida no debería ser premio ni castigo.",
  ],
  ejercicios: [
    { q: "Ve a la cocina con un adulto y busca una fruta roja y una verdura verde.", sol: "Para la familia: tomate, fresa, manzana; lechuga, brócoli, judías… Nombradlas juntos." },
    { q: "Dibuja tu plato de colores con pinturas.", sol: "Para la familia: preguntadle qué ha pintado y si lo ha comido alguna vez." },
    { q: "Prueba una fruta nueva con los ojos cerrados. ¿Qué es?", sol: "Para la familia: un juego de adivinar sabores ayuda a perder el miedo a probar." },
    { q: "Ayuda a lavar la fruta antes de comerla.", sol: "Para la familia: cocinar y preparar juntos anima a comer de todo." },
    { q: "Señala en el dibujo la bebida que más nos conviene.", sol: "Para la familia: el agua." },
    { q: "Juega a las tiendas: compra pan, leche y una fruta.", sol: "Para la familia: con comida de juguete o envases vacíos." },
  ],
  quiz: [
    { q: "¿Cuál es una fruta?", o: ["la manzana", "el pan", "la leche"], a: 0, e: "La manzana es una fruta." },
    { q: "¿Cuál es la mejor bebida cuando tengo sed?", o: ["el refresco", "el agua", "el batido"], a: 1, e: "El agua." },
    { q: "¿De qué color es el brócoli?", o: ["verde", "rojo", "azul"], a: 0, e: "Verde." },
    { q: "Las chuches se comen…", o: ["todos los días", "solo a veces", "en el desayuno"], a: 1, e: "Solo de vez en cuando." },
    { q: "Antes de comer me…", o: ["lavo las manos", "pongo el abrigo", "voy a dormir"], a: 0, e: "Me lavo las manos." },
    { q: "¿Cuál es una verdura?", o: ["la zanahoria", "el pastel", "el plátano"], a: 0, e: "La zanahoria." },
  ],
  examen: [
    { q: "¿Qué alimento sale de la vaca?", o: ["la leche", "el pan", "la naranja"], a: 0, e: "La leche." },
    { q: "Para crecer fuerte como…", o: ["de todo un poco", "solo pasteles", "solo pan"], a: 0, e: "De todo un poco." },
    { q: "Cuando como, estoy…", o: ["sentado", "corriendo", "saltando"], a: 0, e: "Sentado y tranquilo." },
  ],
  feynman: ["Alimentos de cada día", "Por qué bebo agua", "Cómo me porto en la mesa"],
  mapa: mapa("COMER DE TODO", "var(--inf)", [
    ["Fruta", "cada día", R],
    ["Verdura", "de colores", V],
    ["Agua", "la mejor bebida", W],
    ["En la mesa", "sentado y despacio", A],
  ], 220),
  tarjetas: [
    ["¿Qué fruta es roja?", "La manzana o la fresa"],
    ["¿Qué verdura es naranja?", "La zanahoria"],
    ["¿Qué bebo si tengo sed?", "Agua"],
    ["¿Qué nos da la vaca?", "Leche"],
    ["¿Cuándo comemos chuches?", "Solo a veces"],
    ["¿Qué hago antes de comer?", "Lavarme las manos"],
  ],
  familias: [
    "Comed juntos en la mesa, sin pantallas, y nombrad los colores de la comida.",
    "Ofreced un alimento nuevo junto a otro que ya le guste, en poca cantidad.",
    "Dejad que ayude: lavar la fruta, pelar un plátano, poner las servilletas.",
    "Tened agua siempre a mano y dejad los zumos y refrescos para ocasiones especiales.",
  ],
  profesores: PROF("Hábitos de vida saludable: alimentación variada, hidratación con agua, autonomía en la mesa y disposición a probar alimentos nuevos", [
    "Desayuno saludable en el aula un día a la semana: cada niño trae una fruta.",
    "Clasificar fotos de alimentos en «todos los días» y «a veces».",
    "Huerto en un cajón: plantar lentejas en algodón y ver cómo crecen.",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
