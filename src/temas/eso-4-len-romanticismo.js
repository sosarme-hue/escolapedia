// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "El Romanticismo",
  minutos: 40,
  objetivos: ["Explicar cómo el Romanticismo rompe con las normas neoclásicas", "Reconocer sus temas: libertad, yo, amor imposible, muerte", "Identificar a Espronceda, Bécquer, Rosalía de Castro, Larra y Zorrilla"],
  claves: ["Romanticismo", "subjetividad", "libertad", "rimas", "leyendas", "drama romántico", "Bécquer"],
  pregunta: {
    texto: "«¿Qué es poesía?, dices mientras clavas en mi pupila tu pupila azul. ¿Qué es poesía? ¿Y tú me lo preguntas? Poesía… eres tú.» ¿Por qué estos versos de hace 150 años siguen apareciendo en carpetas y redes?",
    respuesta: "Porque expresan algo que sigue siendo actual: <mark>los sentimientos del yo</mark>. Bécquer, el autor, es el gran poeta del <b>Romanticismo</b>, el movimiento que puso las emociones, el amor y la libertad por encima de las reglas.",
  },
  bloques: [
    {
      html: `<h3>Rebeldes contra las normas</h3><p>El Romanticismo nace en Alemania e Inglaterra a finales del siglo XVIII y llega a España hacia <b>1830-1850</b>. Frente a la razón y las reglas neoclásicas, defiende la <mark>libertad</mark> (en el arte, en política y en el amor), la <mark>subjetividad</mark> (lo que siente el yo) y la imaginación.</p>`,
      svg: L.filas("Neoclasicismo frente a Romanticismo", [
        ["Neoclásico", "razón · normas · enseñar", "var(--muted)"],
        ["Romántico", "emoción · libertad · yo", "var(--red)"],
      ], "del siglo XVIII al XIX"),
    },
    {
      html: `<h3>Temas y ambientes</h3><p>Los románticos aman lo <b>nocturno</b>, las ruinas, los cementerios, las tormentas y la <b>Edad Media</b>. Sus héroes son rebeldes y marginados (piratas, mendigos) que buscan la libertad. Abundan el <mark>amor imposible</mark>, la soledad, el destino trágico y la muerte.</p>`,
      svg: L.filas("Temas del Romanticismo", [
        ["Libertad", "pirata, rebelde", "var(--red)"], ["Amor", "imposible o trágico", "var(--pen)"],
        ["Misterio", "noche, ruinas, leyendas", "var(--inf)"], ["Muerte", "destino fatal", "var(--muted)"],
      ]),
    },
    {
      html: `<h3>La poesía: Espronceda, Bécquer y Rosalía</h3><p><b>José de Espronceda</b> escribió la «Canción del pirata», canto a la libertad. <b>Gustavo Adolfo Bécquer</b> es el autor de las <i>Rimas</i>, poemas breves e íntimos sobre la poesía, el amor y el desengaño, y de las <i>Leyendas</i>. <b>Rosalía de Castro</b> escribió en gallego (<i>Cantares gallegos</i>) y en castellano (<i>En las orillas del Sar</i>).</p>`,
      svg: L.tabla("Poetas románticos y sus obras", ["Autor", "Obra"], [
        ["Espronceda", "Canción del pirata"], ["Bécquer", "Rimas · Leyendas"], ["Rosalía", "En las orillas del Sar"],
      ], "var(--red)"),
    },
    {
      html: `<h3>La prosa: Larra</h3><p><b>Mariano José de Larra</b> fue periodista. En sus <mark>artículos de costumbres</mark> critica con ironía los defectos de la sociedad: la pereza en «Vuelva usted mañana», donde un extranjero intenta hacer trámites en España y siempre le dicen que vuelva otro día.</p>`,
      svg: L.dialogo("Escena de Vuelva usted mañana de Larra", [
        ["monsieur Sans-délai", "¿Está listo mi expediente?", "var(--inf)"],
        ["el funcionario", "Vuelva usted mañana.", "var(--red)"],
        ["seis meses después", "…vuelva usted mañana.", "var(--muted)"],
      ]),
    },
    {
      html: `<h3>El teatro: el drama romántico</h3><p>Rompe la regla de las tres unidades: muchos lugares, años de acción, mezcla de verso y prosa, de lo trágico y lo cómico. <b>Don Álvaro o la fuerza del sino</b> (Duque de Rivas) y <b>Don Juan Tenorio</b> (Zorrilla, 1844), que todavía se representa cada año en torno al <mark>Día de Todos los Santos</mark>.</p>`,
      svg: L.filas("Dos dramas románticos", [
        ["Don Álvaro", "Duque de Rivas · 1835", "var(--inf)"],
        ["Don Juan Tenorio", "José Zorrilla · 1844", "var(--red)"],
      ], "el drama rompe las reglas"),
    },
  ],
  figura: {
    titulo: "Los grandes nombres del Romanticismo español",
    svg: L.eje("Autores románticos ordenados por fecha de su obra principal", [
      ["1835", "Duque de Rivas", ["Don Álvaro", "drama"], "var(--inf)"],
      ["1835", "Larra", ["Vuelva usted", "mañana"], "var(--muted)"],
      ["1840", "Espronceda", ["Canción", "del pirata"], "var(--red)"],
      ["1844", "Zorrilla", ["Don Juan", "Tenorio"], "var(--pen)"],
      ["1871", "Bécquer", ["Rimas", "(póstumas)"], "var(--leaf)"],
    ]),
  },
  video: { id: "X3EyPdskrHo", titulo: "Literatura del Romanticismo: autores y obras más destacadas", canal: "unProfesor", vistas: 228574, megusta: 0, busqueda: "Romanticismo literatura española Bécquer Espronceda" },
  quiz: [
    { q: "¿Qué valora por encima de todo el Romanticismo?", o: ["Las reglas clásicas", "La libertad y los sentimientos", "La ciencia"], a: 1, e: "El yo, la emoción y la libertad frente a la razón." },
    { q: "¿Quién escribió las Rimas?", o: ["Espronceda", "Bécquer", "Larra"], a: 1, e: "Gustavo Adolfo Bécquer; se publicaron tras su muerte, en 1871." },
    { q: "«Vuelva usted mañana» critica…", o: ["la pereza y la burocracia", "la guerra", "el amor"], a: 0, e: "Larra se burla de la lentitud de la administración." },
    { q: "Rosalía de Castro escribió en…", o: ["gallego y castellano", "catalán", "euskera"], a: 0, e: "Cantares gallegos y En las orillas del Sar." },
    { q: "El drama romántico…", o: ["respeta las tres unidades", "rompe las tres unidades", "solo usa prosa"], a: 1, e: "Mezcla lugares, tiempos, verso y prosa." },
  ],
  examen: [
    { q: "¿Qué obra se representa tradicionalmente en noviembre?", o: ["Don Juan Tenorio", "El sí de las niñas", "La Celestina"], a: 0, e: "La obra de Zorrilla transcurre en parte en la noche de difuntos." },
    { q: "Un ambiente típico romántico es…", o: ["un salón ordenado", "un cementerio de noche", "un laboratorio"], a: 1, e: "Noche, ruinas y misterio." },
    { q: "La «Canción del pirata» es un canto a…", o: ["la libertad", "la obediencia", "la razón"], a: 0, e: "«Que es mi barco mi tesoro, que es mi dios la libertad»." },
  ],
  feynman: ["Por qué el Romanticismo es una rebelión contra el Neoclasicismo", "Cuatro temas románticos", "Qué aportan Bécquer y Rosalía de Castro", "Qué critica Larra en sus artículos"],
  mapa: mapa("ROMANTICISMO", "var(--eso)", [
    ["Ideas", "libertad · yo · emoción", "var(--red)"],
    ["Poesía", "Espronceda · Bécquer", "var(--pen)"],
    ["Prosa", "Larra · leyendas", "var(--muted)"],
    ["Teatro", "Zorrilla · Duque de Rivas", "var(--inf)"],
  ]),
  tarjetas: [
    ["Rasgos del Romanticismo", "Libertad, subjetividad, imaginación, gusto por lo nocturno y lo medieval."],
    ["Rimas", "Poemas breves e íntimos de Bécquer sobre poesía, amor y desengaño."],
    ["Larra", "Periodista romántico; artículos de costumbres como «Vuelva usted mañana»."],
    ["Don Juan Tenorio", "Drama romántico de Zorrilla (1844)."],
    ["Rosalía de Castro", "Poeta romántica que escribió en gallego y en castellano."],
  ],
  familias: ["Leed juntos una rima de Bécquer y pedidle que la convierta en un mensaje de hoy.", "Buscad si en vuestra ciudad se representa el Tenorio este año.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación literaria: el Romanticismo en su contexto; lectura comentada de poesía, prosa y teatro románticos (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Recital de rimas con música de fondo elegida por el alumnado.", "Reescribir «Vuelva usted mañana» en un contexto actual (atención al cliente, apps).", "Leer una leyenda de Bécquer y crear un pódcast de misterio."],
  },
  fuentes: [
    L.BOE,
    { t: "Biblioteca Virtual Miguel de Cervantes: Gustavo Adolfo Bécquer", url: "https://www.cervantesvirtual.com/portales/gustavo_adolfo_becquer/" },
    { t: "Romanticismo en España, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Romanticismo_en_Espa%C3%B1a" },
  ],
  revisado: "2026-11-12",
};
