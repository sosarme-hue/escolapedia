// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Realismo y Naturalismo",
  minutos: 40,
  objetivos: ["Explicar por qué la novela realista quiere reflejar la sociedad tal como es", "Distinguir Realismo y Naturalismo", "Conocer a Galdós, Clarín, Emilia Pardo Bazán y Valera"],
  claves: ["Realismo", "Naturalismo", "novela", "narrador omnisciente", "observación", "determinismo", "Galdós", "La Regenta"],
  pregunta: {
    texto: "Si un escritor quisiera retratar la España de hoy en una novela, ¿qué tendría que observar: palacios y héroes, o la vida corriente de la gente?",
    respuesta: "La <mark>vida corriente</mark>. Eso hicieron los <b>realistas</b> en la segunda mitad del siglo XIX: observaron la sociedad como un fotógrafo, con sus calles, sus problemas y sus personajes normales, y la convirtieron en <b>novela</b>.",
  },
  bloques: [
    {
      html: `<h3>Un espejo de la sociedad</h3><p>Hacia <b>1870</b>, cansados del sentimentalismo romántico, los escritores quieren <mark>reflejar la realidad</mark> de forma objetiva. Viven la época de la burguesía, el ferrocarril y la ciencia. El género preferido es la <b>novela</b>, que el francés Stendhal comparó con «un espejo a lo largo del camino».</p>`,
      svg: L.filas("Romanticismo frente a Realismo", [
        ["Romanticismo", "imaginación · el yo", "var(--muted)"],
        ["Realismo", "observación · la sociedad", "var(--pen)"],
      ], "del sueño a la calle"),
    },
    {
      html: `<h3>Rasgos de la novela realista</h3><p><b>Observación y documentación</b> (el autor toma notas, visita lugares). <b>Narrador omnisciente</b> que lo sabe todo, incluso lo que piensan los personajes. <b>Descripciones detalladas</b> de ambientes y ropa. Personajes de la clase media, lenguaje adaptado a cada uno y temas como el dinero, el matrimonio o la hipocresía.</p>`,
      svg: L.filas("Rasgos de la novela realista", [
        ["Narrador", "omnisciente", "var(--pen)"], ["Descripción", "muy detallada", "var(--leaf)"],
        ["Personajes", "gente corriente", "var(--inf)"], ["Temas", "sociedad, dinero", "var(--red)"],
      ]),
    },
    {
      html: `<h3>El Naturalismo</h3><p>Es una versión más extrema, creada por el francés <b>Émile Zola</b>. Aplica el método científico a la novela y muestra los ambientes más duros: pobreza, alcoholismo, violencia. Cree en el <mark>determinismo</mark>: la herencia y el ambiente marcan el destino de las personas. En España lo difundió <b>Emilia Pardo Bazán</b>.</p>`,
      svg: L.filas("Realismo y Naturalismo comparados", [
        ["Realismo", "retrata la sociedad", "var(--pen)"],
        ["Naturalismo", "la estudia como un científico", "var(--red)"],
        ["Determinismo", "herencia + ambiente = destino", "var(--muted)"],
      ]),
    },
    {
      html: `<h3>Benito Pérez Galdós</h3><p>Es el gran novelista realista español. Retrató Madrid y la historia de España en los 46 <i>Episodios nacionales</i> y en novelas como <i>Marianela</i>, <i>Misericordia</i> y su obra maestra, <mark><i>Fortunata y Jacinta</i></mark> (1887), sobre dos mujeres de distinta clase social enamoradas del mismo hombre.</p>`,
      svg: L.tabla("Obras de Galdós", ["Obra", "Año"], [
        ["Episodios", "1872-1912"], ["Marianela", "1878"], ["Fortunata y Jacinta", "1887"], ["Misericordia", "1897"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Clarín, Pardo Bazán y Valera</h3><p><b>Leopoldo Alas, «Clarín»</b>, escribió <mark><i>La Regenta</i></mark> (1884-1885), sobre Ana Ozores, que se ahoga en la hipocresía de Vetusta (Oviedo). <b>Emilia Pardo Bazán</b> retrató la Galicia rural en <i>Los pazos de Ulloa</i>. <b>Juan Valera</b> escribió <i>Pepita Jiménez</i>.</p>`,
      svg: L.filas("Otros novelistas realistas", [
        ["Clarín", "La Regenta", "var(--red)"], ["Pardo Bazán", "Los pazos de Ulloa", "var(--leaf)"],
        ["Valera", "Pepita Jiménez", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Novelas clave del Realismo español",
    svg: L.eje("Novelas realistas ordenadas por año", [
      ["1874", "Valera", ["Pepita", "Jiménez"], "var(--inf)"],
      ["1884", "Clarín", ["La Regenta"], "var(--red)"],
      ["1886", "Pardo Bazán", ["Los pazos", "de Ulloa"], "var(--leaf)"],
      ["1887", "Galdós", ["Fortunata", "y Jacinta"], "var(--pen)"],
    ]),
  },
  video: { id: "tTqvRedycbI", titulo: "El Realismo", canal: "Wayraeduca", vistas: 767248, megusta: 14162, busqueda: "Realismo y Naturalismo literatura española" },
  quiz: [
    { q: "¿Qué género predomina en el Realismo?", o: ["La poesía", "La novela", "El teatro"], a: 1, e: "La novela permite describir la sociedad con detalle." },
    { q: "El narrador típico de la novela realista es…", o: ["omnisciente", "protagonista", "inexistente"], a: 0, e: "Lo sabe todo sobre los personajes." },
    { q: "¿Quién escribió La Regenta?", o: ["Galdós", "Clarín", "Valera"], a: 1, e: "Leopoldo Alas, «Clarín», en 1884-1885." },
    { q: "El determinismo naturalista sostiene que…", o: ["la herencia y el ambiente marcan el destino", "el destino lo elige libremente cada persona", "todo es fruto de la imaginación"], a: 0, e: "Es la base científica del Naturalismo." },
    { q: "¿Quién difundió el Naturalismo en España?", o: ["Emilia Pardo Bazán", "Rosalía de Castro", "Bécquer"], a: 0, e: "Con La cuestión palpitante y Los pazos de Ulloa." },
  ],
  examen: [
    { q: "Fortunata y Jacinta es de…", o: ["Galdós", "Pardo Bazán", "Larra"], a: 0, e: "Benito Pérez Galdós, 1887." },
    { q: "¿Qué rasgo NO es realista?", o: ["Descripciones detalladas", "Ambientes fantásticos y medievales", "Personajes de clase media"], a: 1, e: "Lo fantástico y medieval es romántico." },
    { q: "El Naturalismo nació en Francia con…", o: ["Émile Zola", "Victor Hugo", "Molière"], a: 0, e: "Zola aplicó el método científico a la novela." },
  ],
  feynman: ["Qué buscaba la novela realista", "Cuatro rasgos de la novela realista", "En qué se diferencia el Naturalismo", "Dos novelas importantes y sus autores"],
  mapa: mapa("REALISMO", "var(--eso)", [
    ["Objetivo", "reflejar la sociedad", "var(--pen)"],
    ["Técnica", "omnisciente · descripción", "var(--leaf)"],
    ["Naturalismo", "Zola · determinismo", "var(--red)"],
    ["Autores", "Galdós · Clarín · Pardo Bazán", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["¿Qué es el Realismo?", "Movimiento de la segunda mitad del siglo XIX que refleja la sociedad de forma objetiva."],
    ["Narrador omnisciente", "El que lo sabe todo, también lo que piensan y sienten los personajes."],
    ["Naturalismo", "Realismo extremo que estudia la sociedad con método científico y cree en el determinismo."],
    ["La Regenta", "Novela de Clarín sobre Ana Ozores en la ciudad de Vetusta."],
    ["Benito Pérez Galdós", "Autor de los Episodios nacionales y Fortunata y Jacinta."],
  ],
  familias: ["Pedidle que describa vuestra cocina como lo haría un novelista realista: con todo detalle.", "Ved juntos una escena de una adaptación de La Regenta o Fortunata y Jacinta y comentad cómo se refleja la época.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación literaria: Realismo y Naturalismo; lectura de fragmentos de novela en relación con su contexto (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Taller de descripción realista a partir de una fotografía del barrio.", "Comparar el retrato de una mujer en La Regenta y en Fortunata y Jacinta.", "Debate: ¿marca el ambiente nuestro destino? (determinismo)."],
  },
  fuentes: [
    L.BOE,
    { t: "Biblioteca Virtual Miguel de Cervantes: Benito Pérez Galdós", url: "https://www.cervantesvirtual.com/portales/benito_perez_galdos/" },
    { t: "Realismo literario español, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Realismo_literario_espa%C3%B1ol" },
  ],
  revisado: "2026-11-12",
};
