// Infantil 5 años · Descubrimiento y exploración del entorno: medir con palmos y pasos.
const { mapa } = require("./_util");
const { nino, ic, vin, mural, t, FUENTES, PROF, DE, vid, nota } = require("./_inf5a");

// Mesa medida con «n» palmos.
const mesaPalmos = (n) => `<rect x="30" y="70" width="${n * 40}" height="12" rx="3" fill="#a0703c"/><path d="M38 82 V140 M${22 + n * 40} 82 V140" stroke="#a0703c" stroke-width="6"/>${[...Array(n)].map((_, i) => `<g transform="translate(${52 + i * 40} 54) scale(1.08)">${ic("palmo", 0, 0, 1)}</g>`).join("")}`;

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "5-anos",
  titulo: "Medir con palmos y pasos",
  minutos: 15,
  objetivos: ["Saber que medir es ver cuántas veces cabe algo", "Medir con palmos, pies y pasos", "Comparar largo y corto, alto y bajo"],
  claves: ["medir", "palmo", "paso", "pie", "largo", "corto"],
  pregunta: { texto: "¿Cuántos palmos mide tu mesa?", respuesta: "Pon la mano abierta una y otra vez, sin dejar huecos, y <mark>cuenta</mark>. ¡Ese número es lo que mide en palmos!" },
  bloques: [
    {
      html: `<h3>¿Qué es medir?</h3><p><mark>Medir</mark> es saber cuánto mide algo: lo largo, lo alto o lo ancho que es.</p><p>Para medir, contamos cuántas veces cabe una cosa en otra. ¡Podemos medir con el cuerpo!</p>`,
      svg: vin("Una mesa medida con cuatro palmos", `${mesaPalmos(4)}${t(110, 168, "4 palmos", { size: 22, color: "var(--pen)" })}`),
    },
    {
      html: `<h3>El palmo</h3><p>Un <mark>palmo</mark> es la mano bien abierta, del dedo gordo al meñique.</p><p>Pongo la mano, marco donde acaba, y pongo la mano otra vez justo detrás. Cuento: uno, dos, tres…</p>`,
      svg: vin("Una mano abierta: de punta a punta es un palmo", `${ic("palmo", 130, 80, 3)}<path d="M74 140 H186 M74 132 V148 M186 132 V148" stroke="var(--red)" stroke-width="3"/>${t(130, 168, "1 palmo", { size: 20, color: "var(--red)" })}`),
    },
    {
      html: `<h3>Pies y pasos</h3><p>Para cosas largas, como la clase o el pasillo, usamos los <mark>pies</mark> o los <mark>pasos</mark>.</p><p>Con pies: un pie pegado delante del otro. Con pasos: andamos normal y contamos.</p>`,
      svg: vin("Huellas de pie una detrás de otra y pasos más largos", `${[0, 1, 2, 3, 4, 5].map((i) => ic("huella", 30 + i * 30, 60, 0.75)).join("")}${t(230, 66, "pies", { size: 16, max: 50 })}${[0, 1, 2].map((i) => ic("huella", 30 + i * 70, 130, 0.75)).join("")}${t(230, 136, "pasos", { size: 16, max: 50 })}`),
    },
    {
      html: `<h3>Cada uno mide distinto</h3><p>Si mido la mesa yo, salen <b>5 palmos</b>. Si la mide papá, salen <b>3</b>. ¿Por qué?</p><p>¡Porque su mano es <mark>más grande</mark>! Por eso los mayores usan una regla o un metro.</p>`,
      svg: vin("Una mano pequeña y una grande: la grande cabe menos veces", `${ic("palmo", 70, 70, 1.2)}${ic("palmo", 190, 70, 2)}${t(70, 130, "5 palmos", { size: 18, color: "var(--pen)" })}${t(190, 130, "3 palmos", { size: 18, color: "var(--leaf)" })}${ic("regla", 130, 160, 1.4)}`),
    },
    {
      html: `<h3>¿Para qué sirve? Comparar</h3><p>Midiendo sabemos qué es más <mark>largo</mark> o más <mark>corto</mark>, más <mark>alto</mark> o más <mark>bajo</mark>.</p><p>¿Cabe el sofá por la puerta? ¿Quién es más alto? ¡Medimos y lo sabemos!</p>`,
      svg: vin("Un niño alto y otro bajo; un lápiz largo y otro corto", `${nino(50, 150, { c: "var(--pen)", s: 1.4 })}${nino(100, 150, { c: "var(--leaf)", s: 0.9, nina: true })}${t(75, 172, "alto · bajo", { size: 15, max: 110 })}<rect x="150" y="60" width="96" height="12" rx="5" fill="var(--sun)"/><rect x="150" y="100" width="44" height="12" rx="5" fill="var(--sun)"/>${t(198, 140, "largo · corto", { size: 15, max: 100 })}`),
    },
    {
      html: `<h3>Juego: ¿cuántos pasos?</h3><p>Adivina <mark>cuántos pasos</mark> hay de tu cama a la puerta. Di un número.</p><p>Ahora mídelo andando y contando. ¿Te has acercado? Prueba con la cocina y el baño.</p>`,
      svg: vin("Pasos desde la cama hasta la puerta", `${ic("cama", 40, 100, 1.4)}${[0, 1, 2, 3].map((i) => ic("huella", 90 + i * 30, 120 - (i % 2) * 14, 0.45)).join("")}<rect x="208" y="40" width="34" height="100" rx="3" fill="#a0703c"/><circle cx="234" cy="92" r="3" fill="var(--sun)"/>${t(130, 168, "¿cuántos pasos?", { size: 17, color: "var(--pen)" })}`),
    },
  ],
  figura: {
    titulo: "Medimos con el cuerpo",
    svg: mural("Mural: palmo para cosas pequeñas, pie y paso para cosas largas, regla para medir igual", [["palmo", "palmo", "la mesa", "var(--pen)"], ["huella", "pie", "la alfombra", "var(--leaf)"], ["nino", "paso", "el pasillo", "var(--inf)"], ["regla", "regla", "todos igual", "var(--red)"]]),
  },
  video: vid("Cs7-qX5VcuY", "Longitud: palmo, pie y paso", "Mundo Primaria", 577327, "medir con palmos pies y pasos"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Medimos la cama con palmos.", pasos: ["Ponemos la mano abierta en una punta.", "Movemos la mano justo detrás, sin dejar hueco, y contamos.", "Seguimos hasta la otra punta."], resultado: "la cama mide unos 8 palmos (depende de la mano)." },
    { enunciado: "¿Qué es más largo, el pasillo o la cocina?", pasos: ["Medimos el pasillo en pasos: 10.", "Medimos la cocina en pasos: 6.", "Comparamos: 10 es más que 6."], resultado: "el pasillo es más largo." },
  ],
  errores: [
    "Dejar huecos entre un palmo y otro, o montarlos uno encima de otro.",
    "Medir unas veces con pasos grandes y otras con pasos pequeños.",
    "Pensar que todos los palmos son iguales.",
  ],
  ejercicios: [
    { q: "Mide tu mesa con palmos.", sol: nota("que marque con el dedo donde acaba cada palmo.") },
    { q: "Mide la alfombra con pies, un pie delante del otro.", sol: nota("es un buen ejercicio de equilibrio, además.") },
    { q: "Cuenta cuántos pasos hay de tu cama a la puerta.", sol: nota("comparad con los pasos de un adulto.") },
    { q: "Mide un libro con palmos y luego con clips.", sol: nota("con objetos pequeños sale un número mayor.") },
    { q: "Busca algo más largo y algo más corto que tu brazo.", sol: nota("comparad poniéndolos uno al lado del otro.") },
    { q: "Mide la mesa tú y luego un adulto. ¿Sale lo mismo?", sol: nota("explicad que las manos son distintas: por eso existe la regla.") },
  ],
  quiz: [
    { q: "Un palmo es…", o: ["la mano abierta", "un pie", "un paso"], a: 0, e: "La mano abierta." },
    { q: "Para medir el pasillo usamos…", o: ["pasos", "uñas", "dientes"], a: 0, e: "Pasos." },
    { q: "Medir es contar cuántas veces…", o: ["cabe algo", "salto", "canto"], a: 0, e: "Cabe una cosa en otra." },
    { q: "La mano de papá es más grande. Mide…", o: ["menos palmos", "más palmos", "igual"], a: 0, e: "Menos palmos: cabe menos veces." },
    { q: "Lo contrario de largo es…", o: ["corto", "alto", "grande"], a: 0, e: "Corto." },
    { q: "Para medir todos igual usamos…", o: ["una regla", "la mano", "el pie"], a: 0, e: "Una regla o un metro." },
  ],
  examen: [
    { q: "El pasillo mide 10 pasos y la cocina 6. ¿Qué es más largo?", o: ["el pasillo", "la cocina", "igual"], a: 0, e: "El pasillo." },
    { q: "Al medir con palmos, ¿dejo huecos?", o: ["no", "sí", "a veces"], a: 0, e: "No, uno detrás de otro." },
    { q: "Lo contrario de alto es…", o: ["bajo", "largo", "rápido"], a: 0, e: "Bajo." },
  ],
  feynman: ["Qué es medir", "Cómo mido con palmos y pasos", "Por qué cada uno mide distinto"],
  mapa: mapa("MEDIR", "var(--pen)", [
    ["Palmo", "mano abierta", "var(--pen)"],
    ["Pie y paso", "para cosas largas", "var(--leaf)"],
    ["Sin huecos", "uno detrás de otro", "var(--inf)"],
    ["Comparar", "largo · corto · alto · bajo", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Medir es…", "Contar cuántas veces cabe algo"],
    ["Un palmo es…", "La mano abierta"],
    ["Para medir el pasillo…", "Pasos"],
    ["¿Dejo huecos al medir?", "No"],
    ["Contrario de largo", "Corto"],
    ["Para que todos midan igual…", "Una regla"],
  ],
  familias: [
    "Medid muebles de casa con palmos y apuntad los resultados.",
    "Comparad alturas de la familia poniéndoos de espaldas.",
    "Contad pasos en los paseos: de casa a la esquina, del banco al columpio.",
    "Dejadle usar una cinta métrica, aunque aún no lea los números.",
  ],
  profesores: PROF(DE, "Diálogo corporal con el entorno y exploración creativa: magnitudes de longitud con unidades no convencionales (palmo, pie, paso) y comparación de longitudes", ["Medir la clase en pasos de distintos niños y comparar.", "Tira de papel del tamaño de cada niño para ordenar alturas.", "Medir objetos con clips o cubos encajables y registrar."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
