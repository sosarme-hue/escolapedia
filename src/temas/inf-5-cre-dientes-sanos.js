// Infantil 5 años · Crecimiento en armonía: dientes sanos.
const { mapa } = require("./_util");
const { ic, vin, dibujos, lista, mural, t, bola, flecha, FUENTES, PROF, CA, vid, nota } = require("./_inf5a");

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "5-anos",
  titulo: "Dientes sanos",
  minutos: 15,
  objetivos: ["Saber para qué sirven los dientes", "Cepillarse bien los dientes después de comer", "Conocer qué alimentos cuidan los dientes y cuáles los estropean"],
  claves: ["dientes", "cepillo", "pasta", "caries", "dentista", "dientes de leche"],
  pregunta: { texto: "¿Qué pasa si no te lavas los dientes en muchos días?", respuesta: "Se quedan restos de comida y pueden salir <mark>caries</mark>: agujeros que duelen." },
  bloques: [
    {
      html: `<h3>Mis dientes</h3><p>Los <mark>dientes</mark> sirven para morder y masticar la comida. También nos ayudan a hablar y a sonreír.</p><p>Ahora tienes <b>dientes de leche</b>. Pronto se caerán y saldrán otros más fuertes.</p>`,
      svg: dibujos("Los dientes sirven para morder, masticar y sonreír", [["manzana", "morder", "var(--red)"], ["diente", "masticar", "var(--pen)"], ["feliz", "sonreír", "var(--leaf)"]]),
    },
    {
      html: `<h3>Cepillo y pasta</h3><p>Para lavar los dientes necesitamos un <mark>cepillo</mark> y un poco de <b>pasta de dientes</b>, del tamaño de un guisante.</p><p>Cada uno tiene su propio cepillo. ¡No se presta!</p>`,
      svg: vin("Un cepillo de dientes y un tubo de pasta con una bolita del tamaño de un guisante", `${ic("cepillo", 76, 86, 2.4)}${ic("pasta", 190, 86, 2.2)}${t(76, 156, "cepillo", { size: 20, color: "var(--water)" })}${t(190, 156, "pasta", { size: 20, color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Cómo me cepillo</h3><p>Cepillamos <mark>por fuera</mark>, <mark>por dentro</mark> y <mark>por arriba</mark>, donde masticamos. Con circulitos suaves.</p><p>Al final, la lengua. Y escupimos la pasta. Tardamos <b>dos minutos</b>, como una canción.</p>`,
      svg: lista("Pasos: por fuera, por dentro, por arriba y la lengua", [["por fuera", "var(--pen)"], ["por dentro", "var(--leaf)"], ["por arriba", "var(--inf)"], ["la lengua", "var(--red)"]], { marca: "n", titulo: "Dos minutos" }),
    },
    {
      html: `<h3>¿Cuándo?</h3><p>Nos lavamos los dientes <mark>después de comer</mark>.</p><p>Lo más importante es <b>antes de dormir</b>: por la noche la boca descansa y los restos de comida hacen más daño.</p>`,
      svg: vin("Tres momentos para cepillarse: por la mañana, después de comer y antes de dormir", `${ic("sol", 50, 76, 1.3)}${ic("cuchara", 130, 76, 1.3)}${ic("luna", 210, 76, 1.3)}${t(50, 128, "mañana", { size: 16 })}${t(130, 128, "comida", { size: 16 })}${t(210, 128, "noche", { size: 18, color: "var(--red)" })}${ic("cepillo", 210, 160, 0.8)}`),
    },
    {
      html: `<h3>¿Para qué sirve? Evitar caries</h3><p>Los dulces y los zumos con azúcar se pegan a los dientes y hacen <mark>caries</mark>.</p><p>La fruta, el queso y el agua los cuidan. Y vamos al <b>dentista</b> una vez al año.</p>`,
      svg: vin("Los caramelos dan caries; el queso y el agua dejan los dientes fuertes", `${ic("caramelo", 40, 56, 1.1)}${flecha(70, 56, 110)}${ic("caries", 140, 56, 1.3)}${t(205, 62, "caries", { size: 20, color: "var(--red)", max: 90 })}${ic("queso", 30, 130, 1)}${ic("agua", 66, 130, 0.9)}${flecha(90, 130, 120)}${ic("diente", 150, 130, 1.3)}${t(208, 136, "fuerte", { size: 20, color: "var(--leaf)", max: 90 })}`),
    },
    {
      html: `<h3>Juego: ¡dientes brillantes!</h3><p>Pon una canción de <mark>dos minutos</mark> y cepíllate mientras suena.</p><p>Después, sonríe al espejo. ¿Están limpios por fuera, por dentro y por arriba? ¡Dientes brillantes!</p>`,
      svg: vin("Un espejo con una sonrisa brillante y notas de música", `<rect x="70" y="20" width="120" height="120" rx="60" fill="var(--card)" stroke="var(--muted)" stroke-width="5"/>${ic("feliz", 130, 80, 2)}${t(40, 60, "♪", { size: 30, color: "var(--pen)" })}${t(220, 70, "♫", { size: 30, color: "var(--red)" })}${bola(130, 160, "2'", "var(--leaf)", 15)}`),
    },
  ],
  figura: {
    titulo: "Cuido mis dientes",
    svg: mural("Mural: cepillo y pasta, cepillarse después de comer, fruta y agua, ir al dentista", [["cepillo", "cepillo", "y poca pasta", "var(--water)"], ["luna", "por la noche", "¡siempre!", "var(--pen)"], ["manzana", "fruta y agua", "cuidan", "var(--leaf)"], ["caramelo", "dulces", "pocos", "var(--red)"]]),
  },
  video: vid("C_S8pmC2KMI", "Cómo lavarse los dientes paso a paso", "Smile and Learn - Español", 4772943, "cómo lavarse los dientes niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Nos lavamos los dientes antes de dormir.", pasos: ["Ponemos pasta del tamaño de un guisante.", "Cepillamos por fuera, por dentro y por arriba, con circulitos.", "Cepillamos la lengua y escupimos."], resultado: "dientes limpios para toda la noche." },
    { enunciado: "¿Qué merienda cuida mejor los dientes: galletas de chocolate o queso con fruta?", pasos: ["Las galletas tienen mucho azúcar que se pega.", "El queso y la fruta no se pegan tanto.", "Elegimos lo que cuida los dientes."], resultado: "queso con fruta." },
  ],
  errores: [
    "Ponerse mucha pasta: basta con un guisante.",
    "Cepillar solo por delante: también por dentro y por arriba.",
    "Tragarse la pasta: se escupe.",
  ],
  ejercicios: [
    { q: "Cepíllate los dientes con una canción de dos minutos.", sol: nota("hasta los 7 u 8 años conviene que un adulto repase el cepillado.") },
    { q: "Cuenta tus dientes delante del espejo.", sol: nota("un niño de 5 años suele tener 20 dientes de leche.") },
    { q: "Señala en el espejo los dientes de arriba y los de abajo.", sol: nota("aprovechad para ver si alguno se mueve.") },
    { q: "Separa en dos montones: comida que cuida los dientes y comida que los estropea.", sol: nota("usad recortes de folletos del supermercado.") },
    { q: "Dibuja un diente feliz y un diente con caries.", sol: nota("hablad de qué hace que cada uno esté así.") },
    { q: "Juega a ser el dentista con un muñeco.", sol: nota("ayuda a perder el miedo a la primera visita.") },
  ],
  quiz: [
    { q: "Con los dientes…", o: ["masticamos", "oímos", "vemos"], a: 0, e: "Masticamos la comida." },
    { q: "¿Cuánta pasta ponemos?", o: ["como un guisante", "todo el tubo", "nada"], a: 0, e: "Como un guisante." },
    { q: "El momento más importante para cepillarse es…", o: ["antes de dormir", "al despertar", "en el parque"], a: 0, e: "Antes de dormir." },
    { q: "Los dulces pueden hacer…", o: ["caries", "músculos", "pelo"], a: 0, e: "Caries." },
    { q: "¿Qué cuida los dientes?", o: ["caramelos", "agua", "refrescos"], a: 1, e: "El agua." },
    { q: "¿Quién cuida los dientes en la consulta?", o: ["el dentista", "el panadero", "el bombero"], a: 0, e: "El dentista." },
  ],
  examen: [
    { q: "¿Cuánto tiempo nos cepillamos?", o: ["dos minutos", "un segundo", "una hora"], a: 0, e: "Dos minutos." },
    { q: "La pasta, al final…", o: ["se traga", "se escupe", "se guarda"], a: 1, e: "Se escupe." },
    { q: "El cepillo de dientes…", o: ["se presta", "es solo mío", "se comparte"], a: 1, e: "Cada uno tiene el suyo." },
  ],
  feynman: ["Para qué sirven los dientes", "Cómo me cepillo", "Qué comida los cuida"],
  mapa: mapa("DIENTES SANOS", "var(--inf)", [
    ["Sirven para", "morder · masticar · sonreír", "var(--pen)"],
    ["Cepillado", "fuera · dentro · arriba", "var(--water)"],
    ["Cuándo", "después de comer · noche", "var(--leaf)"],
    ["Cuidado con", "dulces → caries", "var(--red)"],
  ], 230),
  tarjetas: [
    ["¿Para qué sirven los dientes?", "Para masticar"],
    ["¿Cuánta pasta?", "Como un guisante"],
    ["¿Cuándo es más importante?", "Antes de dormir"],
    ["¿Cuánto tiempo?", "Dos minutos"],
    ["Agujero en el diente", "Caries"],
    ["¿Quién revisa los dientes?", "El dentista"],
  ],
  familias: [
    "Cepillaos los dientes a la vez: aprende imitando.",
    "Repasad su cepillado por la noche hasta los 7 u 8 años.",
    "Dejad los dulces para días especiales y ofreced agua en lugar de zumos.",
    "Pedid cita al dentista cada año y habladle de ello sin miedo.",
  ],
  profesores: PROF(CA, "Autocuidado y vida saludable: higiene bucodental, alimentación y hábitos que previenen la caries", ["Cepillado después de comer en el aula con canción de dos minutos.", "Clasificar alimentos en «cuidan» y «estropean» los dientes.", "Registro de dientes caídos de la clase con un mural."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
