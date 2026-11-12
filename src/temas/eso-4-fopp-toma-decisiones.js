// Formación y Orientación Personal y Profesional 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { flujo, filas, dos, barras, figCols } = require("./_hum");

module.exports = {
  materia: "Formación y Orientación Personal y Profesional",
  curso: "4-eso",
  titulo: "Toma de decisiones",
  minutos: 30,
  objetivos: ["Aplicar un proceso ordenado para tomar decisiones", "Reconocer los sesgos y presiones que influyen en las decisiones", "Valorar las consecuencias y aprender de los errores"],
  claves: ["decisión", "alternativas", "criterios", "sesgo", "presión de grupo", "plan B"],
  pregunta: {
    texto: "Al terminar 4.º de ESO tendrás que elegir: ¿Bachillerato o FP?, ¿qué modalidad?, ¿cerca de casa o en otra ciudad? Muchos eligen lo mismo que sus amigos. ¿Es una buena forma de decidir?",
    respuesta: "Puede salir bien, pero es arriesgado. Las <mark>decisiones</mark> importantes merecen un método: informarse, comparar alternativas con criterios propios, prever consecuencias y tener un <b>plan B</b>. Así reduces la influencia de la presión de grupo y de los sesgos.",
  },
  bloques: [
    {
      html: `<h3>Un proceso en seis pasos</h3><p>1) <b>Define</b> qué tienes que decidir y para cuándo. 2) <b>Infórmate</b> bien (webs oficiales, orientación, gente que lo ha vivido). 3) Haz una lista de <mark>alternativas</mark>, incluso las que no habías pensado. 4) Fija tus <b>criterios</b> (lo que te importa: gusto, salidas, distancia, duración). 5) <b>Compara</b> y elige. 6) <b>Actúa y revisa</b>: si no funciona, ajusta.</p>`,
      svg: flujo("Seis pasos para decidir", ["definir", "informarse", "alternativas", "criterios", "elegir", "revisar"], "var(--pri)"),
    },
    {
      html: `<h3>Comparar con una matriz</h3><p>Una <mark>matriz de decisión</mark> ayuda a ser objetivo: pones las alternativas en filas, los criterios en columnas, puntúas cada una de 1 a 5 y das más peso a los criterios que más te importan. La alternativa con más puntos no es obligatoria, pero te obliga a pensar por qué la eliges o no.</p>`,
      svg: barras("Puntuación de tres alternativas en una matriz de decisión", [["Bach. Ciencias", 28, "var(--pen)", "28 puntos"], ["FP Sanidad", 30, "var(--leaf)", "30 puntos"], ["Bach. General", 24, "var(--sun)", "24 puntos"]], 36),
    },
    {
      html: `<h3>Sesgos y presiones</h3><p>No siempre decidimos con la razón. Los <mark>sesgos</mark> son atajos mentales que nos engañan: el <b>efecto rebaño</b> (hacer lo que hace la mayoría), el <b>sesgo de confirmación</b> (buscar solo lo que nos da la razón), el <b>miedo a perder</b> o decidir por <b>emoción</b> del momento. También influyen la familia, los amigos, las redes y los estereotipos. Escuchar opiniones es bueno; dejar que otros decidan por ti, no.</p>`,
      svg: filas("Sesgos frecuentes al decidir", [["Rebaño", "«lo hacen todos mis amigos»", "var(--red)"], ["Confirmación", "solo leo lo que me gusta", "var(--sun)"], ["Emoción", "decido enfadado o eufórico", "var(--inf)"], ["Estereotipo", "«eso es de chicos/chicas»", "var(--bac)"]]),
    },
    {
      html: `<h3>Equivocarse también enseña</h3><p>Ninguna decisión es perfecta y casi todas tienen <b>vuelta atrás</b>: se puede cambiar de modalidad, pasar de FP a la universidad o al revés. Tener un <mark>plan B</mark> reduce la ansiedad. Tras decidir, conviene revisar: ¿qué salió bien?, ¿qué haría distinto? Así cada decisión te prepara para la siguiente.</p>`,
      svg: dos("Decisión impulsiva frente a decisión meditada", ["Impulsiva", ["sin información", "por presión", "sin criterios", "sin plan B", "más arrepentimiento"], "var(--red)"], ["Meditada", ["bien informada", "propia", "criterios claros", "con plan B", "más seguridad"], "var(--leaf)"]),
    },
  ],
  figura: {
    titulo: "Ejemplo de matriz de decisión",
    svg: `<svg viewBox="0 0 680 220" role="img" aria-label="Matriz con tres alternativas y cuatro criterios ponderados">
      <rect width="680" height="220" rx="16" fill="var(--paper)"/>
      <g ${F} font-size="13" text-anchor="middle">
        ${["alternativa", "me gusta (×3)", "salidas (×2)", "cerca (×1)", "duración (×1)", "total"].map((t, i) => `<text x="${[100, 240, 350, 450, 550, 630][i]}" y="36" font-weight="700" fill="var(--muted)">${t}</text>`).join("")}
        ${[["Bach. Ciencias", 4, 4, 5, 3, "var(--pen)"], ["FP Sanidad", 5, 4, 3, 4, "var(--leaf)"], ["Bach. General", 3, 3, 5, 4, "var(--sun)"]].map(([n, a, b, c, d, col], i) => { const y = 82 + i * 46; const tot = a * 3 + b * 2 + c + d; return `<rect x="20" y="${y - 26}" width="640" height="38" rx="8" fill="var(--card)" stroke="${col}" stroke-width="2"/><text x="100" y="${y}" font-weight="700" fill="${col}">${n}</text><text x="240" y="${y}" fill="var(--ink)">${a}</text><text x="350" y="${y}" fill="var(--ink)">${b}</text><text x="450" y="${y}" fill="var(--ink)">${c}</text><text x="550" y="${y}" fill="var(--ink)">${d}</text><text x="630" y="${y}" font-weight="700" font-size="16" fill="var(--ink)">${tot}</text>`; }).join("")}
      </g>
      <text x="340" y="208" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>puntúa de 1 a 5 y multiplica por el peso de cada criterio</text>
    </svg>`,
  },
  video: { id: "dbtyoNPFfp0", titulo: "Dos preguntas para tomar buenas decisiones. José Carlos Ruiz, filósofo y profesor", canal: "AprendemosJuntos", vistas: 2101560, megusta: 0, busqueda: "toma de decisiones adolescentes" },
  quiz: [
    { q: "¿Cuál es el primer paso para tomar una decisión?", o: ["Elegir rápido", "Definir qué hay que decidir", "Preguntar a un amigo y hacer lo mismo"], a: 1, e: "Saber qué decides y para cuándo ordena el resto del proceso." },
    { q: "El efecto rebaño consiste en…", o: ["decidir lo que hace la mayoría", "comparar con criterios", "informarse bien"], a: 0, e: "Es un sesgo social muy común." },
    { q: "En una matriz de decisión, los criterios son…", o: ["las opciones posibles", "los aspectos que te importan para comparar", "los resultados"], a: 1, e: "Gusto, salidas, distancia, duración, coste…" },
    { q: "Tener un plan B sirve para…", o: ["no decidir nunca", "reducir la ansiedad si algo no sale como esperabas", "complicar la decisión"], a: 1, e: "La mayoría de decisiones tienen vuelta atrás." },
    { q: "El sesgo de confirmación es…", o: ["buscar solo la información que nos da la razón", "pedir consejo", "cambiar de opinión"], a: 0, e: "Conviene buscar también argumentos en contra." },
  ],
  examen: [
    { q: "En la matriz del ejemplo, ¿por qué gana FP Sanidad?", o: ["Porque está más cerca", "Porque puntúa alto en el criterio con más peso (me gusta ×3)", "Por azar"], a: 1, e: "5 × 3 + 4 × 2 + 3 + 4 = 30 puntos, frente a 28 y 24." },
    { q: "Elegir modalidad por un estereotipo («eso es de chicos») es…", o: ["una decisión informada", "un sesgo que limita tus opciones", "lo recomendable"], a: 1, e: "Los estereotipos de género reducen las alternativas reales." },
    { q: "Después de decidir conviene…", o: ["no volver a pensar en ello", "revisar qué salió bien y qué cambiarías", "culpar a otros si sale mal"], a: 1, e: "Revisar convierte cada decisión en aprendizaje." },
  ],
  feynman: ["Los seis pasos para tomar una decisión", "Cómo funciona una matriz de decisión", "Cuatro sesgos o presiones que influyen al decidir", "Por qué equivocarse también enseña"],
  mapa: mapa("DECIDIR", "var(--pri)", [
    ["Proceso", "definir · informarse · elegir", "var(--pen)"],
    ["Matriz", "alternativas × criterios", "var(--leaf)"],
    ["Sesgos", "rebaño · confirmación", "var(--red)"],
    ["Plan B", "revisar · aprender", "var(--sun)"],
  ], 260),
  tarjetas: [
    ["Pasos para decidir", "Definir, informarse, alternativas, criterios, elegir, revisar."],
    ["Matriz de decisión", "Tabla que puntúa alternativas según criterios con peso."],
    ["Efecto rebaño", "Decidir lo que hace la mayoría sin pensar si te conviene."],
    ["Sesgo de confirmación", "Buscar solo la información que confirma lo que ya piensas."],
    ["Plan B", "Alternativa preparada por si la primera opción no funciona."],
  ],
  familias: ["Usad una matriz de decisión para una elección familiar real (vacaciones, una compra).", "Contadle una decisión importante que tomasteis y qué aprendisteis de ella.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Toma de decisiones responsable: proceso, sesgos, influencia del entorno y proyecto personal (RD 217/2022, Formación y Orientación Personal y Profesional 4º).",
    ideas: ["Matriz de decisión real sobre el itinerario tras 4.º con criterios propios.", "Análisis de sesgos en anuncios y redes sociales.", "Charla de antiguos alumnos que cambiaron de rumbo."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Sesgo cognitivo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sesgo_cognitivo" },
  ],
  revisado: "2026-11-12",
};
