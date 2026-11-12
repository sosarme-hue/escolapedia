// Estructura de Escolapedia según las enseñanzas mínimas LOMLOE (curso 2026-27).
// RD 95/2022 (Infantil), RD 157/2022 (Primaria), RD 217/2022 (ESO), RD 243/2022 (Bachillerato).
// El curso concreto en que se imparte cada materia de ESO puede variar según la comunidad autónoma.

// Familias de materias: dan color e icono comunes en toda la web.
const FAM = {
  natu: { c: "#2f9e44", i: "🌿" }, soc: { c: "#c2410c", i: "🌍" }, len: { c: "#1f4fd1", i: "📖" },
  mat: { c: "#7b3fc4", i: "➗" }, ing: { c: "#0e7490", i: "💬" }, art: { c: "#db2777", i: "🎨" },
  mus: { c: "#b45309", i: "🎵" }, ef: { c: "#dc2626", i: "⚽" }, val: { c: "#0f766e", i: "🤝" },
  tec: { c: "#475569", i: "💻" }, fis: { c: "#0369a1", i: "⚛️" }, cla: { c: "#92400e", i: "🏛️" },
  eco: { c: "#15803d", i: "📈" }, fil: { c: "#6d28d9", i: "💭" }, inf: { c: "#f08a24", i: "🧸" },
};

// s(nombre, familia, temas?) : temas = lista ordenada de títulos.
// grupo: "comun" (obligatoria), "lengua" (lenguas cooficiales y extranjeras) u "opcion" (optativas, opciones y Religión).
const s = (nombre, fam, temas = [], grupo = "comun", nota = "") => ({ nombre, fam, temas, grupo, nota });
const CAT = (n = "") => s(`Lengua Catalana y Literatura${n}`, "len", [], "lengua", "Cataluña, Baleares y Comunidad Valenciana (Valenciano)");
const FRA = (n = "", nota = "Segunda lengua extranjera") => s(`Francés${n}`, "ing", [], "opcion", nota);
const REL = () => s("Religión", "val", [], "opcion", "Voluntaria; alternativa: atención educativa");

const PRIMARIA_BASE = (n) => [
  s("Ciencias de la Naturaleza", "natu"), s("Ciencias Sociales", "soc"),
  s("Lengua Castellana y Literatura", "len"), s("Matemáticas", "mat"), s("Inglés", "ing"),
  s("Educación Plástica", "art"), s("Música", "mus"), s("Educación Física", "ef"),
  ...(n === 5 ? [s("Valores Cívicos y Éticos", "val", [], "comun", "En 5º o 6º según la comunidad")] : []),
  CAT(), ...(n >= 3 ? [FRA("", n >= 5 ? "Segunda lengua extranjera (tercer ciclo)" : "Segunda lengua extranjera, según la comunidad")] : []), REL(),
];

const SEXTO = [
  s("Ciencias de la Naturaleza", "natu", [
    "La célula y los niveles de organización", "La función de nutrición", "La función de relación: sistema nervioso y sentidos",
    "La reproducción humana", "La salud y los hábitos saludables", "La clasificación de los seres vivos",
    "La fotosíntesis: cómo comen las plantas", "Los ecosistemas y la biodiversidad", "La materia y sus cambios",
    "La energía y sus fuentes", "La electricidad y el magnetismo", "Máquinas, robots y programación",
  ]),
  s("Ciencias Sociales", "soc", [
    "El relieve de España y de Europa", "Los climas de España y de Europa", "La población de España y de Europa",
    "Los sectores económicos", "La organización política de España", "La Unión Europea",
    "La Edad Moderna en España", "El siglo XIX en España", "El siglo XX en España", "La Transición y la democracia",
  ]),
  s("Lengua Castellana y Literatura", "len", [
    "La comunicación y sus elementos", "El sustantivo y el adjetivo", "Determinantes y pronombres", "El verbo",
    "Adverbios, preposiciones y conjunciones", "La oración: sujeto y predicado", "Reglas de acentuación",
    "Ortografía: b/v, g/j, h y ll/y", "Textos narrativos, descriptivos y expositivos", "Los géneros literarios",
    "Las figuras literarias", "La poesía: métrica y rima",
  ]),
  s("Matemáticas", "mat", [
    "Números grandes y operaciones", "Potencias y raíz cuadrada", "Múltiplos, divisores y números primos",
    "Fracciones equivalentes", "Operaciones con fracciones", "Números decimales", "Porcentajes y proporcionalidad",
    "Medidas de longitud, masa y capacidad", "Ángulos y su medida", "Polígonos y circunferencia",
    "Áreas de figuras planas", "Cuerpos geométricos y volumen", "Estadística y probabilidad", "Pensamiento computacional",
  ]),
  s("Inglés", "ing", [
    "Present simple and continuous", "Past simple: regular and irregular verbs", "Comparatives and superlatives",
    "Going to and will", "There was / there were", "Countable and uncountable nouns", "Describing people and places",
    "Reading and writing an email",
  ], "lengua"),
  s("Educación Plástica", "art", [
    "El color: primarios, secundarios y complementarios", "La línea, la forma y la textura", "La perspectiva",
    "El cómic y la ilustración", "Fotografía y cine", "Grandes artistas españoles",
  ]),
  s("Música", "mus", [
    "Las cualidades del sonido", "Lenguaje musical: notas, figuras y compás", "Los instrumentos y la orquesta",
    "La voz y el canto", "Formas musicales", "Música en la historia",
  ]),
  s("Educación Física", "ef", [
    "Calentamiento y condición física", "El cuerpo en movimiento", "Juegos y deportes colectivos",
    "Actividades en la naturaleza", "Expresión corporal y danza", "Salud, alimentación y descanso",
  ]),
  CAT(), FRA("", "Segunda lengua extranjera (tercer ciclo)"), REL(),
];

const L = "lengua", O = "opcion", M = "modalidad";
const CURSOS_ESO = {
  1: ["Biología y Geología|natu", "Geografía e Historia|soc", "Lengua Castellana y Literatura|len", "Matemáticas|mat", "Educación Física|ef", "Educación Plástica, Visual y Audiovisual|art", "Música|mus", "Tecnología y Digitalización|tec", `Inglés|ing|${L}`],
  2: ["Física y Química|fis", "Geografía e Historia|soc", "Lengua Castellana y Literatura|len", "Matemáticas|mat", "Educación Física|ef", "Música|mus", "Tecnología y Digitalización|tec", "Valores Cívicos y Éticos|val|comun|En 1º, 2º o 3º según la comunidad", `Inglés|ing|${L}`],
  3: ["Biología y Geología|natu", "Física y Química|fis", "Geografía e Historia|soc", "Lengua Castellana y Literatura|len", "Matemáticas|mat", "Educación Física|ef", "Educación Plástica, Visual y Audiovisual|art", "Tecnología y Digitalización|tec", `Inglés|ing|${L}`],
  4: ["Lengua Castellana y Literatura|len", "Matemáticas A|mat|comun|Se elige A o B", "Matemáticas B|mat|comun|Se elige A o B", "Geografía e Historia|soc", "Educación Física|ef", `Inglés|ing|${L}`,
      ...["Biología y Geología|natu", "Física y Química|fis", "Digitalización|tec", "Economía y Emprendimiento|eco", "Expresión Artística|art", "Latín|cla", "Música|mus", "Tecnología|tec", "Formación y Orientación Personal y Profesional|val"].map((x) => `${x}|${O}|Materia de opción (se eligen tres)`)],
};
const ESO_OPT = (n) => [
  s("Lengua Catalana y Literatura", "len", [], L, "Cataluña, Baleares y Comunidad Valenciana (Valenciano)"),
  s("Francés", "ing", [], O, n === 4 ? "Materia de opción: segunda lengua extranjera" : "Optativa: segunda lengua extranjera"),
  s("Religión", "val", [], O, "Voluntaria; alternativa: atención educativa"),
  ...(n <= 3 ? [s("Cultura Clásica", "cla", [], O, "Optativa"), s("Oratoria y debate", "len", [], O, "Optativa según la comunidad"), s("Programación y robótica", "tec", [], O, "Optativa según la comunidad")] : []),
];

const CT = "Modalidad de Ciencias y Tecnología", HCS = "Modalidad de Humanidades y Ciencias Sociales", ART = "Modalidad de Artes", GEN = "Modalidad General";
const BACH = {
  1: ["Lengua Castellana y Literatura I|len", "Filosofía|fil", "Educación Física|ef", `Inglés I|ing|${L}`,
      ...["Matemáticas I|mat", "Física y Química|fis", "Biología, Geología y Ciencias Ambientales|natu", "Dibujo Técnico I|art", "Tecnología e Ingeniería I|tec"].map((x) => `${x}|${M}|${CT}`),
      ...["Matemáticas Aplicadas a las Ciencias Sociales I|mat", "Latín I|cla", "Griego I|cla", "Economía|eco", "Historia del Mundo Contemporáneo|soc", "Literatura Universal|len"].map((x) => `${x}|${M}|${HCS}`),
      ...["Dibujo Artístico I|art", "Cultura Audiovisual|art", "Proyectos Artísticos|art", "Volumen|art", "Análisis Musical I|mus", "Artes Escénicas I|mus", "Lenguaje y Práctica Musical|mus", "Coro y Técnica Vocal I|mus"].map((x) => `${x}|${M}|${ART}`),
      ...["Matemáticas Generales|mat", "Economía, Emprendimiento y Actividad Empresarial|eco"].map((x) => `${x}|${M}|${GEN}`)],
  2: ["Lengua Castellana y Literatura II|len", "Historia de España|soc", "Historia de la Filosofía|fil", `Inglés II|ing|${L}`,
      ...["Matemáticas II|mat", "Física|fis", "Química|fis", "Biología|natu", "Geología y Ciencias Ambientales|natu", "Dibujo Técnico II|art", "Tecnología e Ingeniería II|tec"].map((x) => `${x}|${M}|${CT}`),
      ...["Matemáticas Aplicadas a las Ciencias Sociales II|mat", "Latín II|cla", "Griego II|cla", "Empresa y Diseño de Modelos de Negocio|eco", "Geografía|soc", "Historia del Arte|art"].map((x) => `${x}|${M}|${HCS}`),
      ...["Dibujo Artístico II|art", "Diseño|art", "Técnicas de Expresión Gráfico-Plástica|art", "Fundamentos Artísticos|art", "Análisis Musical II|mus", "Artes Escénicas II|mus", "Coro y Técnica Vocal II|mus", "Historia de la Música y de la Danza|mus", "Literatura Dramática|len"].map((x) => `${x}|${M}|${ART}`),
      ...["Ciencias Generales|natu", "Movimientos Culturales y Artísticos|art"].map((x) => `${x}|${M}|${GEN}`)],
};
const BACH_OPT = (n) => [
  s(`Lengua Catalana y Literatura ${n === 1 ? "I" : "II"}`, "len", [], L, "Cataluña, Baleares y Comunidad Valenciana (Valenciano)"),
  s(`Francés ${n === 1 ? "I" : "II"}`, "ing", [], O, "Optativa: segunda lengua extranjera"),
  s("Religión", "val", [], O, "Voluntaria"),
  ...(n === 1 ? [s("Anatomía Aplicada", "natu", [], O, "Optativa"), s("Tecnologías de la Información y la Comunicación I", "tec", [], O, "Optativa")]
              : [s("Psicología", "fil", [], O, "Optativa"), s("Fundamentos de Administración y Gestión", "eco", [], O, "Optativa"), s("Ciencias de la Tierra y del Medio Ambiente", "natu", [], O, "Optativa"), s("Tecnologías de la Información y la Comunicación II", "tec", [], O, "Optativa")]),
];
const parse = (arr) => arr.map((x) => { const [n, f, g = "comun", nota = ""] = x.split("|"); return s(n, f, [], g, nota); });

const INFANTIL = () => [
  s("Crecimiento en armonía", "inf"), s("Descubrimiento y exploración del entorno", "natu"),
  s("Comunicación y representación de la realidad", "len"),
  s("Primeros pasos en inglés", "ing", [], L, "Dentro del área de Comunicación"),
  s("Primeros pasos en catalán", "len", [], L, "Cataluña, Baleares y Comunidad Valenciana"),
  s("Religión", "val", [], O, "Voluntaria"),
];

module.exports = {
  FAM,
  ETAPAS: [
    { slug: "infantil", nombre: "Infantil", edad: "3 a 5 años", color: "#f08a24", decreto: "RD 95/2022",
      cursos: [3, 4, 5].map((n) => ({ slug: `${n}-anos`, nombre: `${n} años`, materias: INFANTIL() })) },
    { slug: "primaria", nombre: "Primaria", edad: "6 a 12 años", color: "#1f9d55", decreto: "RD 157/2022",
      cursos: [1, 2, 3, 4, 5, 6].map((n) => ({ slug: `${n}-primaria`, nombre: `${n}º`, largo: `${n}º de Primaria`, materias: n === 6 ? SEXTO : PRIMARIA_BASE(n) })) },
    { slug: "eso", nombre: "ESO", edad: "12 a 16 años", color: "#1f4fd1", decreto: "RD 217/2022",
      cursos: [1, 2, 3, 4].map((n) => ({ slug: `${n}-eso`, nombre: `${n}º`, largo: `${n}º de ESO`, materias: [...parse(CURSOS_ESO[n]), ...ESO_OPT(n)] })) },
    { slug: "bachillerato", nombre: "Bachillerato", edad: "16 a 18 años", color: "#7b3fc4", decreto: "RD 243/2022",
      cursos: [1, 2].map((n) => ({ slug: `${n}-bachillerato`, nombre: `${n}º`, largo: `${n}º de Bachillerato`, materias: [...parse(BACH[n]), ...BACH_OPT(n)] })) },
  ],
};
