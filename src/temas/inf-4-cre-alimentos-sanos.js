// Infantil 4 años · Crecimiento en armonía: alimentos sanos.
const { marco, dibujos, cuantos, lista, ic, t, tick, equis, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "4-anos",
  titulo: "Alimentos sanos",
  minutos: 15,
  objetivos: ["Reconocer frutas, verduras y otros alimentos sanos", "Saber que los dulces son para de vez en cuando", "Beber agua cuando hay sed"],
  claves: ["fruta", "verdura", "agua", "de vez en cuando"],
  pregunta: {
    texto: "Tienes hambre a media mañana. ¿Qué es mejor: una manzana o un bollo de chocolate?",
    respuesta: "Es mejor la <mark>manzana</mark>. La fruta nos da energía y vitaminas. El bollo es para <mark>de vez en cuando</mark>.",
  },
  bloques: [
    {
      html: `<h3>Comer para crecer</h3><p>La comida nos da <mark>fuerza</mark> para jugar, aprender y crecer.</p><p>Hay alimentos que nos cuidan mucho: la <b>fruta</b>, la <b>verdura</b>, la leche, el pescado, los huevos y el pan. Por eso comemos un poco de cada cosa.</p>`,
      svg: dibujos("Manzana, zanahoria, leche, pez, huevo y pan", [["manzana", "fruta", "var(--red)"], ["zanahoria", "verdura", "var(--inf)"], ["leche", "leche", "var(--water)"], ["pez", "pescado", "var(--pen)"], ["huevo", "huevo", "var(--sun)"], ["pan", "pan", "var(--inf)"]]),
    },
    {
      html: `<h3>Frutas y verduras</h3><p>Las frutas y las verduras tienen muchos <mark>colores</mark>: rojo, naranja, verde, amarillo…</p><p>Hay que comer <b>un poco cada día</b>. ¡Cuantos más colores en el plato, mejor! Prueba una fruta nueva esta semana.</p>`,
      svg: dibujos("Plátano, naranja, brócoli y uva de colores", [["platano", "plátano", "var(--sun)"], ["naranja", "naranja", "var(--inf)"], ["brocoli", "brócoli", "var(--leaf)"], ["uva", "uva", "var(--pen)"]], { titulo: "Un arcoíris en el plato" }),
    },
    {
      html: `<h3>Agua, la mejor bebida</h3><p>Cuando tengo sed, bebo <mark>agua</mark>. El agua es la bebida más sana.</p><p>Los zumos de bote y los refrescos llevan mucho azúcar. Son para un día especial. Llévala siempre en tu mochila al parque.</p>`,
      svg: marco("Un vaso de agua con un visto bueno", `${ic("agua", 90, 90, 2.6)}${tick(180, 70)}${t(180, 120, "¡agua!", { color: "var(--water)", size: 24, max: 120 })}${t(180, 150, "cuando hay sed", { color: "var(--muted)", size: 15, max: 120 })}`),
    },
    {
      html: `<h3>De vez en cuando</h3><p>Las chuches, los pasteles y los bollos están ricos, pero tienen <mark>mucho azúcar</mark>.</p><p>No los comemos todos los días. Son para <b>de vez en cuando</b>, como en un cumpleaños. Mejor una fruta de postre, ¿vale?</p>`,
      svg: cuantos("Fruta muchas veces; pasteles y caramelos poco", [["manzana", "fruta", "cada día", 4], ["pastel", "pastel", "a veces", 1], ["caramelo", "chuches", "a veces", 1]], { izq: "alimento", der: "¿cuánto?", color2: "var(--inf)" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Comer bien nos ayuda a tener <mark>energía</mark>, unos dientes fuertes y a no ponernos malitos.</p><p>También es importante comer sentados, despacio y masticando bien. Masticar despacio ayuda a la barriga.</p>`,
      svg: lista("Comer bien: energía, dientes fuertes y comer despacio", [["Tengo energía para jugar", "var(--leaf)"], ["Mis dientes están fuertes", "var(--pen)"], ["Como sentado y despacio", "var(--inf)"]]),
    },
    {
      html: `<h3>Juego: el plato sano</h3><p>Llena tu plato imaginario. Pon una <mark>verdura</mark>, una <mark>fruta</mark> y algo con fuerza, como huevo o pescado.</p><p>¿Y el caramelo? ¡Ese se queda fuera hoy! Mira qué plato tan bonito y lleno de colores.</p>`,
      svg: marco("Un plato con brócoli, manzana y huevo; el caramelo queda fuera tachado", `<ellipse cx="110" cy="96" rx="88" ry="60" fill="#fff" stroke="var(--line)" stroke-width="4"/>${ic("brocoli", 76, 84, 1.3)}${ic("manzana", 140, 80, 1.3)}${ic("huevo", 108, 124, 1.2)}${ic("caramelo", 222, 70, 1)}${equis(222, 70)}${t(222, 120, "hoy no", { color: "var(--red)", size: 15, max: 60 })}`),
    },
  ],
  figura: figura("Alimentos que me cuidan", "Manzana, brócoli, leche, pescado y agua", [["manzana", "fruta", "var(--red)"], ["brocoli", "verdura", "var(--leaf)"], ["leche", "leche", "var(--water)"], ["pez", "pescado", "var(--pen)"], ["agua", "agua", "var(--water)"]]),
  video: vid("Ti9RWObC1UU", "Canción de verduras: hábitos y alimentación saludables para niños", "Hurra Canciones Infantiles", 18797835, "frutas y verduras para niños infantil"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Preparamos el almuerzo del cole.", pasos: ["Elegimos una fruta: una mandarina.", "Añadimos un bocadillo pequeño.", "Llenamos la botella de agua."], resultado: "un almuerzo sano y con fuerza." },
    { enunciado: "Separamos en dos montones.", pasos: ["En uno: fruta, verdura, pan, leche.", "En otro: chuches y pasteles.", "Decimos cuál es para cada día."], resultado: "el primer montón es para cada día; el segundo, para de vez en cuando." },
  ],
  errores: [
    "Pensar que el zumo de bote es igual que la fruta: lleva mucho azúcar.",
    "Comer dulces todos los días: son para ocasiones especiales.",
    "Beber refrescos cuando hay sed: lo mejor es el agua.",
  ],
  ejercicios: [
    { q: "Nombra tres frutas que te gusten.", sol: "Por ejemplo: manzana, plátano y fresa." },
    { q: "Busca en la nevera algo verde y algo naranja.", sol: "Nota para la familia: lechuga, pepino, zanahoria, naranja…" },
    { q: "Dibuja tu plato favorito con una verdura.", sol: "Ayudadle a añadir la verdura si no la pone." },
    { q: "Separa en la cocina lo de cada día y lo de vez en cuando.", sol: "Fruta, pan, leche cada día; galletas de chocolate, a veces." },
    { q: "Bebe un vaso de agua y cuenta los sorbos.", sol: "Recordad el agua después de correr." },
    { q: "Ayuda a lavar la fruta antes de comerla.", sol: "Es una tarea segura y le anima a probarla." },
  ],
  quiz: [
    { q: "¿Qué es más sano?", o: ["Una chuche", "Una manzana", "Un refresco"], a: 1, e: "La fruta nos cuida." },
    { q: "Cuando tengo sed, bebo…", o: ["refresco", "nada", "agua"], a: 2, e: "El agua es la mejor bebida." },
    { q: "Los pasteles son para…", o: ["de vez en cuando", "cada día", "el desayuno siempre"], a: 0, e: "Tienen mucho azúcar." },
    { q: "La zanahoria es…", o: ["una fruta", "un dulce", "una verdura"], a: 2, e: "Es una verdura naranja." },
    { q: "¿Cómo comemos?", o: ["Sentados y despacio", "Corriendo", "De pie en la calle"], a: 0, e: "Sentados y masticando bien." },
    { q: "¿Qué tiene mucho azúcar?", o: ["El brócoli", "Las chuches", "El agua"], a: 1, e: "Las chuches son casi todo azúcar." },
  ],
  examen: [
    { q: "Cada día comemos…", o: ["solo chuches", "fruta y verdura", "solo pasteles"], a: 1, e: "Fruta y verdura cada día." },
    { q: "El plátano es…", o: ["una fruta", "una bebida", "un pescado"], a: 0, e: "Es una fruta amarilla." },
    { q: "La mejor bebida es…", o: ["el refresco", "el batido de chocolate", "el agua"], a: 2, e: "El agua no tiene azúcar." },
  ],
  feynman: ["Qué alimentos comemos cada día", "Qué alimentos son de vez en cuando", "Por qué bebemos agua"],
  mapa: mapa("COMO SANO", "var(--inf)", [
    ["Cada día", "fruta y verdura", "var(--leaf)"],
    ["Con fuerza", "huevo, pescado, pan", "var(--pen)"],
    ["Para beber", "agua", "var(--water)"],
    ["A veces", "dulces y chuches", "var(--red)"],
  ], 220),
  tarjetas: [
    ["¿Qué bebo si tengo sed?", "Agua"],
    ["Di una fruta", "Manzana, plátano, naranja…"],
    ["Di una verdura", "Zanahoria, brócoli…"],
    ["¿Cuándo comemos chuches?", "De vez en cuando"],
    ["¿Cómo comemos?", "Sentados y despacio"],
    ["¿Qué nos da la comida?", "Fuerza para crecer"],
  ],
  familias: [
    "Llevadle al mercado y dejad que elija una fruta nueva para probar.",
    "Poned siempre agua en la mesa en lugar de refrescos.",
    "Cocinad juntos algo sencillo: una macedonia o una ensalada.",
    "Guardad los dulces para fiestas y explicadle por qué.",
  ],
  profesores: PROF("Crecimiento en armonía: alimentación saludable, hábitos de vida sana y autonomía en la comida", ["Rincón del mercado con frutas de juguete.", "Clasificar tarjetas en «cada día» y «de vez en cuando».", "Almuerzo saludable por días de la semana."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
