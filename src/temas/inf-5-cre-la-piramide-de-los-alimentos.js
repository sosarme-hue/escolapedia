// Infantil 5 años · Crecimiento en armonía: la pirámide de los alimentos.
const { mapa } = require("./_util");
const { ic, vin, dibujos, mural, t, FUENTES, PROF, CA, vid, nota } = require("./_inf5a");

// Pirámide de 4 pisos con dibujos en cada uno (de abajo arriba: mucho → poco).
const PISOS = [
  [["agua", "pan", "arroz"], "var(--water)", "todos los días: mucho"],
  [["manzana", "zanahoria", "brocoli", "platano"], "var(--leaf)", "fruta y verdura: mucho"],
  [["leche", "huevo", "pez"], "var(--inf)", "un poco cada día"],
  [["caramelo"], "var(--red)", "muy poco"],
];
const piramide = (label) => {
  let out = "";
  PISOS.forEach(([items, c], i) => {
    const y = 160 - i * 38, half = 112 - i * 26, top = half - 26;
    out += `<path d="M${130 - half} ${y} L${130 + half} ${y} L${130 + top} ${y - 36} L${130 - top} ${y - 36}z" fill="${c}" opacity=".28" stroke="${c}" stroke-width="2"/>`;
    items.forEach((d, k) => { out += ic(d, (130 + (k - (items.length - 1) / 2) * 36).toFixed(1), y - 18, 0.62); });
  });
  return vin(label, out);
};

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "5-anos",
  titulo: "La pirámide de los alimentos",
  minutos: 15,
  objetivos: ["Saber que hay alimentos para comer mucho y otros para comer poco", "Reconocer frutas, verduras, cereales, lácteos, huevos, pescado y dulces", "Elegir un plato y una merienda sanos"],
  claves: ["fruta", "verdura", "cereales", "leche", "agua", "dulces"],
  pregunta: { texto: "¿Podríamos comer solo caramelos todo el día?", respuesta: "No. El cuerpo necesita <mark>de todo</mark>: fruta, verdura, pan, leche, huevos, pescado… y los dulces, muy poquito." },
  bloques: [
    {
      html: `<h3>Comer de todo</h3><p>Ningún alimento tiene todo lo que necesitamos. Por eso hay que <mark>comer de todo</mark>.</p><p>La <b>pirámide de los alimentos</b> nos dice qué comer mucho y qué comer poco.</p>`,
      svg: piramide("Pirámide de los alimentos: abajo agua, pan y arroz; luego fruta y verdura; después leche, huevo y pescado; arriba dulces"),
    },
    {
      html: `<h3>Abajo: mucho cada día</h3><p>En la parte de <mark>abajo</mark>, la más ancha, está lo que comemos más: <b>agua</b>, pan, arroz, pasta…</p><p>Y encima, mucha <b>fruta</b> y <b>verdura</b>, de muchos colores. ¡Cinco veces al día!</p>`,
      svg: dibujos("Agua, pan, manzana, zanahoria y brócoli: comer mucho", [["agua", "agua", "var(--water)"], ["pan", "pan", "var(--muted)"], ["manzana", "fruta", "var(--red)"], ["brocoli", "verdura", "var(--leaf)"]], { titulo: "¡Mucho!" }),
    },
    {
      html: `<h3>En medio: un poco</h3><p>En el <mark>medio</mark> están la <b>leche</b>, el queso y el yogur, que hacen fuertes los huesos.</p><p>También los <b>huevos</b>, el <b>pescado</b>, la carne y las legumbres. Los comemos un poco cada día.</p>`,
      svg: dibujos("Leche, queso, huevo y pescado: un poco cada día", [["leche", "leche", "var(--muted)"], ["queso", "queso", "var(--inf)"], ["huevo", "huevo", "var(--inf)"], ["pez", "pescado", "var(--water)"]], { titulo: "Un poco" }),
    },
    {
      html: `<h3>Arriba: muy poquito</h3><p>En la <mark>punta</mark>, que es muy pequeña, están los <b>dulces</b>, las chucherías, los bollos y los refrescos.</p><p>Están ricos, pero solo son para <b>días especiales</b>.</p>`,
      svg: dibujos("Caramelos y pasteles: muy poco, para días especiales", [["caramelo", "caramelos", "var(--red)"], ["pastel", "pasteles", "var(--red)"]], { titulo: "Muy poco", nota: "solo días especiales" }),
    },
    {
      html: `<h3>¿Para qué sirve? Un plato sano</h3><p>Un <mark>plato sano</mark> tiene la mitad de verdura, un trozo de pescado, huevo o carne, y pan o arroz.</p><p>Para beber, <b>agua</b>. Y de postre, <b>fruta</b>.</p>`,
      svg: vin("Un plato con mitad de verdura, un poco de pescado y un poco de arroz, con agua y fruta", `<circle cx="110" cy="96" r="68" fill="var(--card)" stroke="var(--muted)" stroke-width="3"/><path d="M110 28 V164" stroke="var(--line)" stroke-width="2"/><path d="M110 96 H178" stroke="var(--line)" stroke-width="2"/>${ic("brocoli", 76, 80, 1)}${ic("zanahoria", 82, 124, 0.9)}${ic("pez", 146, 66, 0.9)}${ic("arroz", 146, 128, 0.8)}${ic("agua", 214, 66, 1)}${ic("manzana", 214, 132, 1)}`),
    },
    {
      html: `<h3>Juego: el supermercado</h3><p>Recorta comida de los <mark>folletos del supermercado</mark>.</p><p>Dibuja una pirámide grande y pega cada cosa en su piso: abajo lo que comemos mucho, arriba lo que comemos poco.</p>`,
      svg: vin("Tijeras y folletos para recortar comida y pegarla en una pirámide vacía", `${ic("tijeras", 44, 60, 1.4)}${ic("periodico", 44, 124, 1.4)}<path d="M100 160 H240 L170 26z" fill="var(--card)" stroke="var(--inf)" stroke-width="3"/><path d="M121 120 H219 M142 80 H198 M159 47 H181" stroke="var(--inf)" stroke-width="2" stroke-dasharray="5 4"/>${ic("manzana", 150, 142, 0.6)}${ic("pan", 190, 142, 0.6)}${t(170, 174, "¿dónde va?", { size: 14, color: "var(--muted)", max: 140 })}`),
    },
  ],
  figura: {
    titulo: "Qué como mucho y qué como poco",
    svg: mural("Mural: agua y cereales mucho; fruta y verdura mucho; leche, huevos y pescado un poco; dulces muy poco", [["agua", "agua y pan", "mucho", "var(--water)"], ["manzana", "fruta y verdura", "mucho", "var(--leaf)"], ["leche", "leche y huevos", "un poco", "var(--inf)"], ["caramelo", "dulces", "muy poco", "var(--red)"]]),
  },
  video: vid("5mJ_QkvUsvI", "La pirámide alimenticia para niños", "El club de Raimundo y Facundo", 245379, "pirámide de los alimentos para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Dónde va el plátano en la pirámide?", pasos: ["El plátano es una fruta.", "La fruta se come mucho, cada día.", "Va en la parte de abajo, con las verduras."], resultado: "abajo: se come mucho." },
    { enunciado: "Elegimos una merienda sana.", pasos: ["Miramos lo que hay: bollo, yogur, manzana, refresco.", "El bollo y el refresco están en la punta: muy poco.", "Cogemos yogur y manzana, y agua para beber."], resultado: "yogur, manzana y agua." },
  ],
  errores: [
    "Pensar que hay alimentos «prohibidos»: los dulces se pueden comer, pero muy poco.",
    "Beber zumos o refrescos en vez de agua.",
    "Comer siempre lo mismo: hay que variar.",
  ],
  ejercicios: [
    { q: "Pega recortes de comida en una pirámide dibujada.", sol: nota("abajo cereales, fruta y verdura; en medio leche, huevos, pescado y carne; arriba dulces.") },
    { q: "Cuenta cuántas frutas has comido hoy.", sol: nota("el objetivo son unas cinco raciones de fruta y verdura al día.") },
    { q: "Busca en la cocina tres alimentos de colores distintos.", sol: nota("comer de colores es comer variado.") },
    { q: "Ayuda a preparar una ensalada.", sol: nota("lavar la lechuga o echar los tomates le hace probar más.") },
    { q: "Dibuja tu plato favorito y mira si es sano.", sol: nota("comprobad si tiene verdura, algo de proteína y cereal.") },
    { q: "Prueba una fruta o verdura nueva esta semana.", sol: nota("a veces hay que ofrecerla varias veces antes de que guste.") },
  ],
  quiz: [
    { q: "¿Qué comemos más?", o: ["caramelos", "fruta y verdura", "refrescos"], a: 1, e: "Fruta y verdura, mucho." },
    { q: "Arriba de la pirámide están…", o: ["los dulces", "el agua", "el pan"], a: 0, e: "Los dulces: muy poco." },
    { q: "Para beber, lo mejor es…", o: ["refresco", "agua", "zumo con azúcar"], a: 1, e: "Agua." },
    { q: "La leche ayuda a tener fuertes…", o: ["los huesos", "las uñas", "las cejas"], a: 0, e: "Los huesos." },
    { q: "¿Qué es una verdura?", o: ["la zanahoria", "el caramelo", "el pastel"], a: 0, e: "La zanahoria." },
    { q: "De postre, mejor…", o: ["fruta", "bollo", "chucherías"], a: 0, e: "Fruta." },
  ],
  examen: [
    { q: "¿Qué va abajo en la pirámide?", o: ["dulces", "pan y arroz", "refrescos"], a: 1, e: "Pan, arroz y pasta." },
    { q: "Los pasteles son para…", o: ["todos los días", "días especiales", "el desayuno siempre"], a: 1, e: "Días especiales." },
    { q: "Un plato sano tiene mucha…", o: ["verdura", "chuchería", "sal"], a: 0, e: "Verdura." },
  ],
  feynman: ["Qué comemos mucho", "Qué comemos poco", "Cómo es un plato sano"],
  mapa: mapa("LA PIRÁMIDE", "var(--inf)", [
    ["Abajo: mucho", "agua · pan · arroz", "var(--water)"],
    ["Fruta y verdura", "cinco al día", "var(--leaf)"],
    ["En medio: un poco", "leche · huevo · pescado", "var(--inf)"],
    ["Arriba: muy poco", "dulces · refrescos", "var(--red)"],
  ], 230),
  tarjetas: [
    ["¿Qué comemos más?", "Fruta, verdura, pan y arroz"],
    ["¿Qué bebemos?", "Agua"],
    ["Arriba de la pirámide…", "Dulces: muy poco"],
    ["La leche cuida…", "Los huesos"],
    ["Postre sano", "Fruta"],
    ["¿Cuántas frutas y verduras al día?", "Cinco"],
  ],
  familias: [
    "Llevadle a la compra y que elija una fruta o verdura cada semana.",
    "Poned agua en la mesa y dejad los refrescos para ocasiones especiales.",
    "Cocinad juntos platos sencillos: ensalada, macedonia, tortilla.",
    "Comed en familia sin pantallas y hablad de los colores del plato.",
  ],
  profesores: PROF(CA, "Hábitos de vida saludable: alimentación variada y equilibrada, grupos de alimentos y frecuencia de consumo", ["Pirámide gigante en el aula con recortes de folletos.", "Calendario de almuerzos saludables: fruta, bocadillo, lácteo.", "Cata a ciegas de frutas y verduras de temporada."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
