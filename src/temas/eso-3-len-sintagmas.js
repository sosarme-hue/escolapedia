// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG. Terminología de la Nueva gramática (RAE-ASALE): grupo o sintagma.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "Los sintagmas",
  minutos: 45,
  objetivos: ["Saber qué es un sintagma y cuál es su núcleo", "Reconocer los cinco tipos de sintagma", "Analizar la estructura del sintagma nominal y del preposicional"],
  claves: ["sintagma", "grupo", "núcleo", "sintagma nominal", "sintagma verbal", "sintagma adjetival", "sintagma adverbial", "sintagma preposicional", "complemento del nombre"],
  pregunta: {
    texto: "En «El perro negro de mis vecinos ladra muchísimo», ¿cuántas palabras hay y en cuántos bloques se pueden agrupar?",
    respuesta: "Hay ocho palabras, pero se agrupan en <b>dos grandes bloques</b>: «El perro negro de mis vecinos» y «ladra muchísimo». Cada bloque se organiza alrededor de una palabra central, el <mark>núcleo</mark> (perro, ladra). Esos bloques son los <b>sintagmas</b> o grupos.",
  },
  bloques: [
    {
      html: `<h3>Qué es un sintagma</h3><p>Un <b>sintagma</b> (o grupo sintáctico) es una palabra o un conjunto de palabras que se organiza en torno a un <mark>núcleo</mark> y funciona como una unidad dentro de la oración. El núcleo es la palabra imprescindible: si la quitas, el grupo se deshace. Según la categoría del núcleo, hay cinco tipos de sintagma: <b>nominal</b>, <b>verbal</b>, <b>adjetival</b>, <b>adverbial</b> y <b>preposicional</b>.</p>`,
      svg: L.tabla("Los cinco sintagmas y su núcleo", ["Sintagma", "Núcleo", "Ejemplo"], [
        ["Nominal", "sustantivo", "mi casa"], ["Verbal", "verbo", "come pan"], ["Adjetival", "adjetivo", "muy alto"], ["Adverbial", "adverbio", "muy lejos"], ["Preposicional", "prep. + SN", "de madera"],
      ]),
    },
    {
      html: `<h3>El sintagma nominal</h3><p>Tiene como núcleo un <b>sustantivo</b> o un <b>pronombre</b>. A su alrededor pueden aparecer un <b>determinante</b> (delante) y uno o varios <b>complementos del nombre</b>: un adjetivo, un sintagma preposicional o una aposición. Su estructura completa es: <mark>determinante + núcleo + complementos</mark>. Ejemplo: «<i>las</i> <b>playas</b> <i>doradas de Cádiz</i>».</p>`,
      svg: L.frase("Sintagma nominal: las playas doradas de Cádiz", [
        ["las", "det.", "var(--muted)"], ["playas", "núcleo", "var(--pen)"], ["doradas", "CN (SAdj)", "var(--leaf)"], ["de Cádiz", "CN (SPrep)", "var(--red)"],
      ], "determinante + núcleo + complementos"),
    },
    {
      html: `<h3>El sintagma verbal</h3><p>Su núcleo es un <b>verbo</b> y funciona siempre como <mark>predicado</mark> de la oración. El verbo puede ir solo («Ana <i>duerme</i>») o con complementos que estudiarás en otro tema: directo, indirecto, circunstancial, atributo, predicativo, de régimen o agente. Ejemplo: «<b>regaló</b> <i>un libro</i> <i>a su madre</i> <i>ayer</i>».</p>`,
      svg: L.frase("Sintagma verbal: regaló un libro a su madre ayer", [
        ["regaló", "núcleo", "var(--pen)"], ["un libro", "CD", "var(--leaf)"], ["a su madre", "CI", "var(--red)"], ["ayer", "CC tiempo", "var(--inf)"],
      ], "verbo + complementos"),
    },
    {
      html: `<h3>Sintagmas adjetival y adverbial</h3><p>El <b>sintagma adjetival</b> tiene como núcleo un adjetivo, que puede llevar delante un <b>cuantificador</b> (muy, bastante, demasiado) y detrás un complemento con preposición: «<i>muy</i> <b>orgulloso</b> <i>de su hija</i>». El <b>sintagma adverbial</b> funciona igual, pero con un adverbio como núcleo: «<i>bastante</i> <b>lejos</b> <i>de aquí</i>».</p>`,
      svg: L.filas("Estructura de los sintagmas adjetival y adverbial", [
        ["SAdj", "muy + orgulloso + de su hija", "var(--leaf)"],
        ["SAdv", "bastante + lejos + de aquí", "var(--inf)"],
      ], "cuantificador + núcleo + complemento"),
    },
    {
      html: `<h3>El sintagma preposicional</h3><p>Es especial porque no tiene un núcleo único: está formado por un <b>enlace</b> (la preposición) y un <b>término</b>, que suele ser un sintagma nominal: «<i>de</i> + <i>madera</i>», «<i>con</i> + <i>mis amigos</i>». Puede complementar a un sustantivo (mesa <i>de madera</i>), a un adjetivo (lleno <i>de agua</i>), a un adverbio (cerca <i>de casa</i>) o a un verbo (vive <i>en Lugo</i>).</p>`,
      svg: L.frase("Sintagma preposicional: con mis amigos", [
        ["con", "enlace (prep.)", "var(--red)"], ["mis amigos", "término (SN)", "var(--pen)"],
      ], "preposición + término"),
    },
  ],
  figura: {
    titulo: "Los sintagmas de una oración",
    svg: L.columnas("Una oración dividida en sintagmas", [
      ["sujeto", "SN", ["El perro negro", "de mis vecinos"], "var(--pen)"],
      ["predicado", "SV", ["ladra", "muchísimo"], "var(--leaf)"],
      ["dentro del SN", "SPrep", ["de + mis vecinos", "complementa a perro"], "var(--red)"],
    ]),
  },
  video: { id: "S056gzNJaM8", titulo: "Sintagma nominal y verbal explicado en 3 minutos", canal: "La profe Mónica", vistas: 442875, megusta: 0, busqueda: "los sintagmas" },
  quiz: [
    { q: "El núcleo del sintagma nominal es…", o: ["un sustantivo o pronombre", "un verbo", "una preposición"], a: 0, e: "Por eso se llama nominal." },
    { q: "«Muy cansado» es un sintagma…", o: ["adjetival", "adverbial", "nominal"], a: 0, e: "El núcleo es el adjetivo «cansado»." },
    { q: "«Sin azúcar» es un sintagma…", o: ["preposicional", "nominal", "verbal"], a: 0, e: "Preposición + término." },
    { q: "En «la casa de mi abuela», «de mi abuela» es…", o: ["complemento del nombre", "núcleo", "determinante"], a: 0, e: "Complementa al sustantivo «casa»." },
    { q: "El sintagma verbal funciona como…", o: ["predicado", "sujeto", "complemento del nombre"], a: 0, e: "Siempre es el predicado." },
  ],
  examen: [
    { q: "«Demasiado tarde» es un sintagma…", o: ["adverbial", "adjetival", "preposicional"], a: 0, e: "Núcleo: el adverbio «tarde»." },
    { q: "En un sintagma preposicional, el SN que sigue a la preposición es el…", o: ["término", "enlace", "núcleo verbal"], a: 0, e: "Preposición (enlace) + término." },
    { q: "¿Cuál es un sintagma nominal?", o: ["Ellos", "Muy lejos", "Con ellos"], a: 0, e: "Un pronombre puede ser núcleo de SN." },
  ],
  feynman: ["Qué es un sintagma y qué es su núcleo", "Los cinco tipos de sintagma con un ejemplo de cada uno", "La estructura del sintagma nominal", "Por qué el sintagma preposicional es diferente de los demás"],
  mapa: mapa("SINTAGMAS", "var(--eso)", [
    ["Nominal", "det. + N + complementos", "var(--pen)"],
    ["Verbal", "V + complementos", "var(--leaf)"],
    ["Adj. y Adv.", "cuantif. + N + compl.", "var(--inf)"],
    ["Preposicional", "enlace + término", "var(--red)"],
  ]),
  tarjetas: [
    ["Sintagma", "Palabra o grupo de palabras organizado en torno a un núcleo que funciona como una unidad."],
    ["Núcleo", "La palabra imprescindible de un sintagma, que le da nombre."],
    ["Estructura del SN", "Determinante + núcleo (sustantivo o pronombre) + complementos del nombre."],
    ["Sintagma preposicional", "Preposición (enlace) + término, normalmente un SN."],
    ["Cuantificador", "Palabra como muy, bastante o demasiado que gradúa a un adjetivo o adverbio."],
  ],
  familias: ["Elegid un titular y pedidle que señale cuál es la palabra más importante de cada grupo.", "Jugad a alargar un sintagma: «el perro», «el perro negro», «el perro negro de Juan»…", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: grupos sintácticos (nominal, verbal, adjetival, adverbial y preposicional), núcleo y complementos (RD 217/2022, Lengua Castellana y Literatura, 3º ESO; Nueva gramática básica).",
    ideas: ["Tiras de papel con palabras para construir sintagmas cada vez más largos.", "Análisis con colores: un color por tipo de sintagma.", "Buscar el núcleo en sintagmas de nombres de comercios y calles."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE y ASALE, Nueva gramática básica de la lengua española", url: "https://www.rae.es/gram%C3%A1tica" },
    { t: "Sintagma, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sintagma" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Distinguir los tipos de complemento del nombre: adjetivo, preposicional y aposición", "Reconocer sintagmas dentro de otros sintagmas"],
  bloques: [
    { tras: "Qué es un sintagma", html: `<h3>Cómo encontrar el núcleo</h3><p>Para saber qué palabra es el núcleo de un grupo, hay dos pruebas sencillas. La primera es <b>eliminar</b>: el núcleo es la palabra que no se puede quitar sin que el grupo pierda su sentido. En «el coche rojo de mi tío» puedes quitar «rojo» y «de mi tío», pero no «coche». La segunda es la <b>concordancia</b>: en el sintagma nominal, el determinante y los adjetivos concuerdan en género y número con el núcleo («l<b>as</b> casa<b>s</b> blanc<b>as</b>»).</p><p>Recuerda que un sintagma puede estar formado por <mark>una sola palabra</mark>: «Ana» es un SN, «canta» es un SV y «aquí» es un SAdv. Lo que importa es que funcione como una unidad dentro de la oración.</p>` },
    { tras: "El sintagma nominal", html: `<h3>Los complementos del nombre</h3><p>El núcleo del SN puede llevar tres tipos de complementos:</p><ul><li><b>Sintagma adjetival</b>: «una película <i>muy divertida</i>». Concuerda con el núcleo.</li><li><b>Sintagma preposicional</b>: «una película <i>de miedo</i>», «el libro <i>sobre la mesa</i>». No concuerda.</li><li><b>Aposición</b>: un sintagma nominal que se coloca junto al núcleo y se refiere a la misma realidad. Puede ir <b>sin comas</b> («el río <i>Ebro</i>», «mi amigo <i>Pedro</i>») o <b>entre comas</b>, si explica algo: «Madrid, <i>la capital de España</i>, tiene más de tres millones de habitantes».</li></ul><p>Un mismo núcleo puede llevar varios complementos a la vez: «el <b>río</b> <i>Ebro</i>, <i>caudaloso</i> <i>en primavera</i>».</p>` },
    { tras: "El sintagma nominal", html: `<h3>Sintagmas nominales sin determinante</h3><p>El determinante no es obligatorio en todos los casos. No suelen llevarlo los <b>nombres propios</b> de persona («<i>Lucía</i> estudia»), los <b>sustantivos en plural o no contables</b> usados de forma general («Compro <i>manzanas</i>», «Bebe <i>agua</i>») ni los <b>pronombres</b>, que funcionan como núcleo por sí solos («<i>Nosotros</i> ganamos»).</p><p>También son frecuentes en refranes y titulares, que buscan brevedad: «<i>Perro</i> ladrador, poco mordedor»; «<i>Fuertes lluvias</i> en el norte». Fíjate en que, aunque falte el determinante, el sintagma sigue teniendo núcleo y puede tener complementos.</p>` },
    { tras: "El sintagma preposicional", html: `<h3>Sintagmas dentro de sintagmas</h3><p>Los sintagmas son como las <mark>muñecas rusas</mark>: unos van dentro de otros. En «el libro de la biblioteca del instituto», el SN tiene como núcleo «libro»; dentro hay un SPrep («de la biblioteca del instituto») cuyo término es otro SN («la biblioteca del instituto»), que a su vez contiene otro SPrep («del instituto»).</p><p>Para analizar sin perderse, ve de fuera adentro: primero el sintagma grande y su núcleo, después cada complemento y, dentro de cada uno, su estructura. En los esquemas se dibuja con <b>cajas o corchetes</b> que se van anidando. Recuerda que «del» y «al» son contracciones: contienen una preposición y un artículo (de + el, a + el).</p>` },
    { tras: "El sintagma preposicional", html: `<h3>Funciones de cada sintagma</h3>${L.tb(["Sintagma", "Funciones más habituales"], [["Nominal", "sujeto, CD, CI, atributo, aposición"], ["Verbal", "predicado"], ["Adjetival", "complemento del nombre, atributo, predicativo"], ["Adverbial", "complemento circunstancial"], ["Preposicional", "CN, CI, CC, C. de régimen, C. agente"]])}<p>No confundas la <b>categoría</b> del sintagma (qué es: nominal, adjetival…) con su <b>función</b> (qué hace en la oración: sujeto, complemento…). Un mismo SN puede ser sujeto en una oración («<i>Mi hermano</i> canta») y complemento directo en otra («Veo a <i>mi hermano</i>»).</p>` },
  ],
  videos: [
    ["El sintagma nominal", L.vid("iZIRvlnzjSQ", "Sintagma nominal", "tuespacioJoven", 542856)],
    ["Sintagmas adjetival y adverbial", L.vid("giPnEwDZmac", "Sintagma adjetival", "tuespacioJoven", 109823)],
  ],
  ejemplos: [
    ["Analiza el SN «aquellas viejas fotos de la boda».", ["Núcleo: fotos (sustantivo).", "Determinante: aquellas (demostrativo).", "Complementos del nombre: «viejas» (SAdj) y «de la boda» (SPrep: enlace «de» + término «la boda»)."], "det. + CN (SAdj) + N + CN (SPrep)."],
    ["Di de qué tipo es cada sintagma: «bastante caro», «a las diez», «muy pronto», «mi primo Luis».", ["«Bastante caro»: núcleo adjetivo → SAdj.", "«A las diez»: preposición + SN → SPrep.", "«Muy pronto»: núcleo adverbio → SAdv.", "«Mi primo Luis»: núcleo sustantivo «primo» con aposición «Luis» → SN."], "SAdj, SPrep, SAdv y SN."],
    ["Analiza «la casa del árbol de mi hermano».", ["SN con núcleo «casa» y determinante «la».", "CN: «del árbol de mi hermano» (SPrep: enlace «de», contraído con el artículo).", "Dentro, el término «el árbol de mi hermano» es un SN que lleva otro CN: «de mi hermano»."], "sintagmas anidados: SN > SPrep > SN > SPrep."],
  ],
  errores: [
    "Tomar el determinante o el adjetivo como núcleo del sintagma nominal.",
    "Pensar que un sintagma debe tener varias palabras: «Ana» o «aquí» ya son sintagmas.",
    "Confundir el SAdj con el SPrep como complementos del nombre: el adjetivo concuerda; el SPrep empieza por preposición.",
    "Olvidar que «del» y «al» contienen una preposición y un artículo.",
    "Mezclar categoría (SN, SAdj…) con función (sujeto, CD…).",
  ],
  ejercicios: [
    ["Señala el núcleo: «el famoso cuadro de Velázquez».", "cuadro."],
    ["¿Qué tipo de sintagma es «lejos de la ciudad»?", "Sintagma adverbial: núcleo «lejos» + complemento «de la ciudad» (SPrep)."],
    ["Escribe un SN con determinante, núcleo, un SAdj y un SPrep.", "Por ejemplo: «unas zapatillas nuevas de deporte»."],
    ["Señala la aposición: «Cervantes, el autor del Quijote, nació en Alcalá».", "«el autor del Quijote» (aposición explicativa, entre comas)."],
    ["Analiza el SPrep «con mucho cuidado».", "Enlace: con. Término: «mucho cuidado» (SN con determinante «mucho» y núcleo «cuidado»)."],
    ["Divide en SN sujeto y SV predicado: «Los alumnos de 3.º prepararon una obra de teatro».", "SN sujeto: «Los alumnos de 3.º». SV predicado: «prepararon una obra de teatro»."],
    ["¿Qué tipo de sintagma es «demasiado orgulloso de sí mismo»?", "Sintagma adjetival: cuantificador «demasiado» + núcleo «orgulloso» + complemento «de sí mismo»."],
    ["Escribe tres SN sin determinante.", "Por ejemplo: «Marta», «nosotros», «agua fresca»."],
    ["¿Qué hay dentro del SPrep «del instituto»?", "La preposición «de» y el SN «el instituto» (contraídos en «del»)."],
    ["Alarga «el perro» con dos complementos del nombre de clases distintas.", "Por ejemplo: «el perro pequeño de la vecina» (SAdj + SPrep)."],
  ],
  quiz: [
    ["En «el río Tajo», «Tajo» es…", ["aposición", "determinante", "núcleo"], 0, "SN junto al núcleo que nombra lo mismo."],
    ["«Muy cerca de casa» es un sintagma…", ["adverbial", "preposicional", "nominal"], 0, "Núcleo: cerca."],
    ["¿Qué complemento del nombre concuerda con él?", ["El SAdj", "El SPrep", "Ninguno"], 0, "El adjetivo concuerda en género y número."],
    ["En «Nosotros jugamos», el núcleo del sujeto es…", ["un pronombre", "un determinante", "un adverbio"], 0, "Los pronombres pueden ser núcleo de SN."],
    ["«al» equivale a…", ["a + el", "a + la", "al + el"], 0, "Contracción de preposición y artículo."],
  ],
  tarjetas: [
    ["Aposición", "SN que acompaña a otro y se refiere a lo mismo: el río Ebro; Madrid, la capital, …"],
    ["Prueba del núcleo", "Es la palabra que no se puede eliminar y con la que concuerdan las demás."],
    ["Categoría y función", "Categoría: qué es el sintagma (SN, SAdj…). Función: qué hace en la oración (sujeto, CD…)."],
  ],
});
