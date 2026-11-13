// Infantil 5 años · Descubrimiento y exploración del entorno: los seres vivos.
const { mapa } = require("./_util");
const { ic, vin, dibujos, mural, t, flecha, FUENTES, PROF, DE, vid, nota } = require("./_inf5a");

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "5-anos",
  titulo: "Los seres vivos",
  minutos: 15,
  objetivos: ["Distinguir seres vivos de cosas sin vida", "Saber que los seres vivos nacen, se alimentan, crecen y mueren", "Conocer tres grupos: personas, animales y plantas"],
  claves: ["ser vivo", "nacer", "crecer", "alimentarse", "animal", "planta", "piedra"],
  pregunta: { texto: "Un perro y una piedra: ¿cuál de los dos crece?", respuesta: "El <mark>perro</mark>. Es un ser vivo: nace, come, crece. La piedra no está viva." },
  bloques: [
    {
      html: `<h3>¿Qué es un ser vivo?</h3><p>Los <mark>seres vivos</mark> nacen, se alimentan, crecen, tienen hijos y un día mueren.</p><p>Las personas, los animales y las plantas son seres vivos. ¡Tú también eres un ser vivo!</p>`,
      svg: dibujos("Personas, animales y plantas son seres vivos", [["nina", "personas", "var(--pen)"], ["perro", "animales", "var(--inf)"], ["arbol", "plantas", "var(--leaf)"]], { titulo: "Seres vivos" }),
    },
    {
      html: `<h3>Cosas sin vida</h3><p>Una piedra, una silla o un coche <mark>no son seres vivos</mark>.</p><p>No nacen, no comen y no crecen. Un coche se mueve, pero no está vivo: ¡necesita que alguien lo conduzca!</p>`,
      svg: dibujos("Una piedra, una silla y un coche no son seres vivos", [["piedra", "piedra", "var(--muted)"], ["silla", "silla", "var(--muted)"], ["coche", "coche", "var(--muted)"]], { titulo: "Sin vida", nota: "no nacen, no comen, no crecen" }),
    },
    {
      html: `<h3>Nacen y crecen</h3><p>Todos los seres vivos <mark>nacen</mark> y <mark>crecen</mark>.</p><p>Un pollito sale de un huevo y se hace gallina. Una semilla se hace planta. Un bebé se hace mayor.</p>`,
      svg: vin("Un huevo se hace pollito y una semilla se hace planta", `${ic("huevo", 40, 56, 1.1)}${flecha(66, 56, 98)}${ic("pollo", 130, 56, 1.3)}${flecha(160, 56, 190)}${t(222, 62, "gallina", { size: 15, max: 64 })}${ic("semilla", 40, 130, 1.3)}${flecha(66, 130, 98)}${ic("brote", 130, 126, 1.2)}${flecha(160, 130, 190)}${ic("arbol", 222, 150, 1)}`),
    },
    {
      html: `<h3>Se alimentan</h3><p>Los seres vivos necesitan <mark>alimento</mark> y <mark>agua</mark>.</p><p>Las personas y los animales comen. Las plantas toman agua por las raíces y la luz del sol por las hojas.</p>`,
      svg: dibujos("La niña come, el conejo come zanahoria y la planta bebe agua y toma sol", [["nina", "come", "var(--pen)"], ["conejo", "come", "var(--inf)"], ["maceta", "agua y sol", "var(--leaf)"]], { titulo: "Necesitan comer" }),
    },
    {
      html: `<h3>¿Para qué sirve? Cuidar la vida</h3><p>Si sabemos qué está <mark>vivo</mark>, lo cuidamos mejor.</p><p>Regamos las plantas, damos de comer a nuestra mascota y no arrancamos flores ni pisamos hormigas.</p>`,
      svg: dibujos("Cuidamos la vida: regar plantas, dar de comer a la mascota y respetar a los insectos", [["flor", "regar", "var(--leaf)"], ["gato", "alimentar", "var(--inf)"], ["hormiga", "respetar", "var(--red)"]], { titulo: "Cuido la vida" }),
    },
    {
      html: `<h3>Juego: ¿vivo o no vivo?</h3><p>Sal al parque o al patio. Busca <mark>cosas vivas</mark> y <mark>cosas sin vida</mark>.</p><p>Un árbol, una hormiga, una piedra, un banco… Haz dos montones de dibujos o dos listas.</p>`,
      svg: vin("Dos cajas: vivo con árbol, hormiga y pájaro; no vivo con piedra, banco y pelota", `<rect x="10" y="30" width="114" height="120" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="3"/><rect x="136" y="30" width="114" height="120" rx="12" fill="var(--card)" stroke="var(--muted)" stroke-width="3"/>${t(67, 22, "vivo", { size: 17, color: "var(--leaf)" })}${t(193, 22, "no vivo", { size: 17, color: "var(--muted)" })}${ic("arbol", 46, 72, 0.9)}${ic("hormiga", 92, 72, 1)}${ic("pajaro", 67, 120, 1)}${ic("piedra", 170, 72, 0.9)}${ic("mesa", 216, 72, 0.9)}${ic("pelota", 193, 120, 0.9)}`),
    },
  ],
  figura: {
    titulo: "Los seres vivos",
    svg: mural("Mural: los seres vivos nacen, se alimentan, crecen y mueren; las piedras no", [["huevo", "nacen", "huevo o semilla", "var(--inf)"], ["manzana", "comen", "y beben agua", "var(--red)"], ["brote", "crecen", "poco a poco", "var(--leaf)"], ["piedra", "no vivo", "no crece", "var(--muted)"]]),
  },
  video: vid("kY-H8_aYBpc", "Seres vivos e inertes", "Steps Genius", 611289, "seres vivos e inertes para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Una flor es un ser vivo?", pasos: ["¿Nace? Sí, de una semilla.", "¿Se alimenta? Sí, de agua y sol.", "¿Crece? Sí."], resultado: "sí, la flor es un ser vivo." },
    { enunciado: "¿Un coche es un ser vivo?", pasos: ["¿Nace? No, se fabrica.", "¿Come? No, necesita gasolina o electricidad, pero no crece con ella.", "¿Crece? No."], resultado: "no, el coche no es un ser vivo." },
  ],
  errores: [
    "Pensar que todo lo que se mueve está vivo: un coche o el viento se mueven y no están vivos.",
    "Creer que las plantas no están vivas porque no se mueven.",
    "Pensar que los juguetes con pilas están vivos.",
  ],
  ejercicios: [
    { q: "Planta una lenteja en un algodón mojado y mírala cada día.", sol: nota("en 3 o 4 días brota; dibujad cómo crece.") },
    { q: "Separa fotos en dos montones: vivo y no vivo.", sol: nota("usad revistas o folletos.") },
    { q: "Busca en el parque tres seres vivos y tres cosas sin vida.", sol: nota("haced fotos con el móvil para mirarlas después.") },
    { q: "Cuida una planta durante una semana.", sol: nota("que sea su responsabilidad regarla.") },
    { q: "Di qué come tu mascota o un animal que conozcas.", sol: nota("si no tenéis mascota, mirad animales en un libro.") },
    { q: "Dibuja cómo un huevo se hace gallina.", sol: nota("tres dibujos: huevo, pollito y gallina.") },
  ],
  quiz: [
    { q: "¿Qué es un ser vivo?", o: ["un gato", "una piedra", "una silla"], a: 0, e: "El gato." },
    { q: "Los seres vivos…", o: ["nacen y crecen", "no comen nunca", "son de plástico"], a: 0, e: "Nacen, comen y crecen." },
    { q: "¿Las plantas están vivas?", o: ["sí", "no", "solo en verano"], a: 0, e: "Sí." },
    { q: "Una semilla se hace…", o: ["planta", "piedra", "coche"], a: 0, e: "Una planta." },
    { q: "¿Qué no es un ser vivo?", o: ["una pelota", "un pájaro", "un árbol"], a: 0, e: "La pelota." },
    { q: "Las plantas toman…", o: ["agua y sol", "chocolate", "nada"], a: 0, e: "Agua y luz del sol." },
  ],
  examen: [
    { q: "El coche se mueve, pero…", o: ["no está vivo", "está vivo", "come pan"], a: 0, e: "No está vivo." },
    { q: "Un pollito sale de…", o: ["un huevo", "una piedra", "una semilla"], a: 0, e: "De un huevo." },
    { q: "Personas, animales y plantas son…", o: ["seres vivos", "juguetes", "piedras"], a: 0, e: "Seres vivos." },
  ],
  feynman: ["Qué hacen los seres vivos", "Qué cosas no están vivas", "Cómo cuido la vida"],
  mapa: mapa("LOS SERES VIVOS", "var(--pen)", [
    ["Quiénes", "personas · animales · plantas", "var(--pen)"],
    ["Qué hacen", "nacen · comen · crecen", "var(--leaf)"],
    ["Sin vida", "piedra · silla · coche", "var(--muted)"],
    ["Cuidar", "regar · alimentar · respetar", "var(--red)"],
  ], 240),
  tarjetas: [
    ["¿Un perro es un ser vivo?", "Sí"],
    ["¿Una piedra es un ser vivo?", "No"],
    ["Los seres vivos…", "Nacen, comen y crecen"],
    ["¿Las plantas están vivas?", "Sí"],
    ["Una semilla se hace…", "Planta"],
    ["Tres grupos de seres vivos", "Personas, animales y plantas"],
  ],
  familias: [
    "Plantad semillas o lentejas y observad juntos cómo crecen.",
    "Responsabilizadle de regar una planta o alimentar a la mascota.",
    "En los paseos, preguntad: «¿está vivo o no?».",
    "Enseñad a respetar a los insectos y a no arrancar plantas.",
  ],
  profesores: PROF(DE, "Exploración de la naturaleza: seres vivos y elementos inertes, ciclo vital (nacer, crecer, reproducirse, morir) y actitudes de respeto y cuidado", ["Germinador de lentejas o judías con registro diario.", "Clasificar objetos y fotos en «vivo / no vivo».", "Terrario de gusanos de seda o caracoles en el aula."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
