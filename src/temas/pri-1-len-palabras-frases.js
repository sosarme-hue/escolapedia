// Lengua Castellana 1º de Primaria: palabras y frases. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", G = "var(--muted)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "1-primaria",
  titulo: "Palabras y frases",
  minutos: 20,
  objetivos: ["Saber que una palabra tiene significado", "Separar las palabras con un espacio al escribir", "Formar frases ordenadas que se entienden"],
  claves: ["palabra", "espacio", "frase", "orden", "nombre", "acción"],
  pregunta: {
    texto: "Lee esto en voz alta: «elperroladra». ¿Se entiende bien? ¿Qué le falta?",
    respuesta: "Le faltan los <mark>espacios</mark> entre las palabras. Así se lee mejor: «El perro ladra.» Son <b>tres palabras</b> que forman una <b>frase</b>.",
  },
  bloques: [
    {
      html: `<h3>Las palabras</h3><p>Con letras y sílabas formamos <mark>palabras</mark>.</p><p>Cada palabra <b>quiere decir algo</b>. Cuando oímos «gato», pensamos en un gato. Cuando oímos «sol», pensamos en el sol.</p><p>Hay palabras cortas, como <i>pan</i>, y largas, como <i>mariposa</i>. Todas sirven para nombrar cosas, decir lo que hacemos o contar cómo son.</p>`,
      svg: dibujos("Un gato, una mesa y un sol con su palabra debajo", [["gato", "gato", A], ["mesa", "mesa", R], ["sol", "sol", V]], { titulo: "Cada palabra dice algo" }),
    },
    {
      html: `<h3>Un espacio entre palabras</h3><p>Al escribir, dejamos un <mark>espacio</mark> entre palabra y palabra.</p><p>Si las juntamos todas, no se entiende nada: «elgatobebe».</p><p>Con espacios se lee muy bien: «El gato bebe». Un truco: deja un <b>dedo</b> de hueco entre palabra y palabra. Así tu cuaderno queda claro y ordenado.</p>`,
      svg: frase("Mal escrito: elgatobebe todo junto. Bien escrito: El gato bebe, con espacios", [["elgatobebe", R], ["/"], ["El", V], ["gato", V], ["bebe.", V]], { titulo: "¿Junto o separado?", nota: "Deja un dedo de hueco entre palabras", fs: 22 }),
    },
    {
      html: `<h3>Palabras que nombran</h3><p>Algunas palabras sirven para <mark>nombrar</mark>.</p><p>Nombran personas, como <i>Ana</i> o <i>abuelo</i>. Nombran animales, como <i>perro</i>. Nombran cosas, como <i>pelota</i>.</p><p>Se llaman <b>nombres</b>. Mira a tu alrededor: todo lo que ves tiene un nombre. La mesa, la silla, la ventana… ¡Hay muchísimos! Tu nombre también es una de estas palabras.</p>`,
      svg: dibujos("Una niña llamada Ana, un perro y una pelota: palabras que nombran", [["nina", "Ana", A], ["perro", "perro", R], ["pelota", "pelota", V]], { titulo: "Palabras que nombran" }),
    },
    {
      html: `<h3>Palabras que dicen lo que hacemos</h3><p>Otras palabras dicen lo que <mark>hacemos</mark>.</p><p><i>Comer</i>, <i>dormir</i>, <i>leer</i> y <i>jugar</i> son palabras de acción. Se llaman <b>verbos</b>.</p><p>Puedes hacer mímica con ellas. Un amigo hace como que duerme y tú dices: «¡Dormir!». Es un juego divertido para aprender acciones. ¿Qué acciones haces por la mañana?</p>`,
      svg: dibujos("Pan para comer, cama para dormir, libro para leer y pelota para jugar", [["pan", "comer", A], ["cama", "dormir", R], ["libro", "leer", V], ["pelota", "jugar", N]], { titulo: "Palabras de acción" }),
    },
    {
      html: `<h3>Palabras que dicen cómo es</h3><p>Hay palabras que dicen <mark>cómo son</mark> las cosas.</p><p>El elefante es <b>grande</b>. La hormiga es <b>pequeña</b>. La manzana es <b>roja</b>. El sol es <b>caliente</b>.</p><p>Con estas palabras explicamos mejor lo que vemos. No es igual «un perro» que «un perro pequeño y blanco». La segunda frase nos ayuda a imaginarlo.</p>`,
      svg: dibujos("Un elefante grande, una hormiga pequeña, una manzana roja y un sol caliente", [["elefante", "grande", A], ["hormiga", "pequeña", R], ["manzana", "roja", V], ["sol", "caliente", N]], { titulo: "Palabras que dicen cómo es" }),
    },
    {
      html: `<h3>La frase</h3><p>Si juntamos palabras <b>en orden</b>, formamos una <mark>frase</mark>.</p><p>Una frase cuenta algo completo: «El perro corre».</p><p>Al escribirla, empezamos con <b>mayúscula</b> y terminamos con un <b>punto</b>. Una frase puede ser corta, como «Hace sol». También puede ser larga, como «Hoy vamos al parque con la abuela».</p>`,
      svg: frase("La frase El perro corre, con mayúscula al principio y punto al final", [["El", R], ["perro", A], ["corre", A], [".", R]], { titulo: "Una frase", nota: "Mayúscula al empezar · punto al acabar", fs: 24 }),
      video: vid("W9vn4PU7e9Y", "La oración, el sujeto y el predicado", "Happy Learning Español", 6473821, 86590),
    },
    {
      html: `<h3>El orden de las palabras</h3><p>Las palabras de una frase van <mark>en orden</mark>.</p><p>Si las desordenamos, la frase no se entiende: «corre perro El».</p><p>Ordenadas, dicen algo claro: «El perro corre». Para ordenar, piensa primero <b>quién</b> es y luego <b>qué hace</b>. ¿Quién? El perro. ¿Qué hace? Corre. ¡Ya está ordenada!</p>`,
      svg: frase("Desordenado: corre perro El. Ordenado: El perro corre", [["corre", R], ["perro", R], ["El", R], ["/"], ["El", V], ["perro", V], ["corre.", V]], { titulo: "¿Se entiende?", nota: "Primero quién y luego qué hace", fs: 22 }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Con frases podemos <mark>contar</mark> lo que nos pasa y lo que queremos.</p><p>Podemos pedir algo: «¿Me das agua?». Podemos dar las gracias o contar un secreto.</p><p>También escribimos frases en notas y tarjetas. Por ejemplo: «Mamá, te quiero». ¡Una frase corta puede hacer muy feliz a alguien!</p>`,
      svg: charla("Una niña pide agua y su padre se la da", [["nina", "¿Me das agua, por favor?", R], ["papa", "¡Claro! Aquí tienes.", A]]),
    },
    {
      html: `<h3>Jugamos a frases que crecen</h3><p>Empezamos con una frase muy corta: «El gato».</p><p>Cada jugador añade <mark>una palabra más</mark>. «El gato come.» «El gato come pescado.»</p><p>Hay que repetir toda la frase sin equivocarse. ¿Hasta dónde llegáis? Es un juego estupendo para la memoria y para ordenar palabras.</p>`,
      svg: lista("La frase crece: El gato. El gato come. El gato come pescado.", [["El gato…", A], ["El gato come…", R], ["El gato come pescado.", V]], { titulo: "Una palabra más cada vez", marca: "n" }),
    },
  ],
  figura: {
    titulo: "De la palabra a la frase",
    svg: mural("Tres clases de palabras y la frase que forman: perro nombra, corre es acción, grande dice cómo es; juntas: El perro grande corre.", [["perro", "perro", "nombra", A], ["pelota", "corre", "dice qué hace", R], ["elefante", "grande", "dice cómo es", V], ["libro", "frase", "El perro grande corre.", N]], "Las palabras en orden forman una frase"),
  },
  video: { ...vid("ABNgbYjPk8k", "Jugamos a… acabamos las frases (nivel 1)", "Eugenia Romero", 1365057, 6360), busqueda: "palabras y frases para niños de primero" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuántas palabras hay en «Mi gato es negro»?",
      pasos: ["Lee la frase despacio, palabra por palabra.", "Toca cada palabra con el dedo: Mi, gato, es, negro.", "Cuenta los toques: uno, dos, tres, cuatro."],
      resultado: "hay 4 palabras." },
    { enunciado: "Ordena: «come Leo pan».",
      pasos: ["Busca quién hace algo: Leo.", "Busca qué hace: come.", "Pon lo que come al final: pan."],
      resultado: "«Leo come pan.»" },
    { enunciado: "Escribe bien: «lavacaesgrande».",
      pasos: ["Lee despacio para encontrar las palabras: la, vaca, es, grande.", "Escribe cada una dejando un dedo de hueco.", "Pon mayúscula al principio y punto al final."],
      resultado: "«La vaca es grande.»" },
  ],
  errores: [
    "Escribir las palabras pegadas, como «elsol»: deja un espacio entre palabras.",
    "Separar una palabra en dos, como «me sa»: las sílabas de una palabra van juntas.",
    "Desordenar la frase: piensa primero quién y después qué hace.",
    "Olvidar la mayúscula del principio o el punto del final.",
  ],
  ejercicios: [
    { q: "Di tres palabras que nombran animales.", sol: "Por ejemplo: perro, gato, pato." },
    { q: "Di tres palabras de acción.", sol: "Por ejemplo: correr, comer, saltar." },
    { q: "¿Cuántas palabras hay en «Ana lee»?", sol: "2." },
    { q: "Separa con espacios: «micasaesazul».", sol: "Mi casa es azul." },
    { q: "Ordena: «salta rana La».", sol: "La rana salta." },
    { q: "Completa: «El sol es…».", sol: "Por ejemplo: amarillo, grande, caliente." },
    { q: "Inventa una frase con la palabra «pelota».", sol: "Por ejemplo: «Juego con la pelota.»" },
    { q: "¿Es una frase «perro el azul»?", sol: "No: está desordenada y no se entiende." },
    { q: "Haz crecer la frase: «La niña…».", sol: "Por ejemplo: «La niña canta.» «La niña canta una canción.»" },
    { q: "Escribe una frase para alguien de tu familia.", sol: "Respuesta libre, con mayúscula y punto: «Papá, te quiero.»" },
  ],
  quiz: [
    { q: "¿Qué ponemos entre palabras al escribir?", o: ["Un espacio", "Un punto", "Nada"], a: 0, e: "Un espacio, como un dedo." },
    { q: "¿Cuál es una palabra que nombra?", o: ["correr", "mesa", "grande"], a: 1, e: "Mesa nombra una cosa." },
    { q: "¿Cuál es una palabra de acción?", o: ["saltar", "pelota", "rojo"], a: 0, e: "Saltar es algo que hacemos." },
    { q: "¿Qué frase está bien ordenada?", o: ["Pato el nada.", "El pato nada.", "Nada pato el."], a: 1, e: "El pato nada." },
    { q: "¿Cuántas palabras hay en «Yo como pan»?", o: ["2", "3", "4"], a: 1, e: "Yo, como, pan." },
    { q: "Una frase empieza con…", o: ["mayúscula", "punto", "número"], a: 0, e: "Siempre con mayúscula." },
    { q: "Una frase termina con…", o: ["coma", "punto", "nada"], a: 1, e: "Con punto." },
    { q: "«Grande» es una palabra que dice…", o: ["qué hacemos", "cómo es algo", "un nombre"], a: 1, e: "Dice cómo es algo." },
    { q: "¿Qué está bien escrito?", o: ["Elsol brilla.", "El sol brilla.", "El so lbrilla."], a: 1, e: "Con un espacio entre palabras." },
    { q: "Para ordenar una frase pienso primero…", o: ["quién", "el punto", "la última palabra"], a: 0, e: "Quién y luego qué hace." },
  ],
  examen: [
    { q: "¿Cuál es una frase?", o: ["perro", "El perro ladra.", "ladra el"], a: 1, e: "Cuenta algo completo y en orden." },
    { q: "¿Cuántas palabras tiene «La luna brilla»?", o: ["2", "3", "4"], a: 1, e: "La, luna, brilla." },
    { q: "«Dormir» es una palabra de…", o: ["acción", "nombre", "color"], a: 0, e: "Es algo que hacemos." },
    { q: "¿Qué falta en «elniñocanta»?", o: ["Espacios", "Letras", "Nada"], a: 0, e: "El niño canta." },
  ],
  feynman: ["Qué es una palabra", "Por qué dejamos espacios entre palabras", "Cómo se forma una frase que se entiende"],
  mapa: mapa("PALABRAS Y FRASES", "var(--pri)", [
    ["Nombran", "Ana, perro, pelota", A],
    ["Acción", "comer, saltar, leer", R],
    ["Cómo es", "grande, roja, caliente", V],
    ["Frase", "palabras en orden + punto", N],
  ], 220),
  tarjetas: [
    ["¿Qué hay entre palabras?", "Un espacio"],
    ["Una palabra que nombra", "Por ejemplo: mesa"],
    ["Una palabra de acción", "Por ejemplo: correr"],
    ["Una palabra que dice cómo es", "Por ejemplo: grande"],
    ["¿Qué es una frase?", "Palabras en orden que cuentan algo"],
    ["¿Cómo empieza una frase?", "Con mayúscula"],
    ["¿Cómo acaba una frase?", "Con punto"],
    ["Ordena: «nada pez El»", "El pez nada."],
  ],
  familias: [
    "Jugad a «frases que crecen» en la mesa o en el coche.",
    "Escribid juntos notas cortas para la nevera: «Hoy hay sopa.»",
    "Haced mímica de acciones y que adivine la palabra: comer, dormir, nadar.",
    "Al leer un cuento, contad juntos las palabras de una frase tocándolas con el dedo.",
  ],
  profesores: PROF("Comunicación escrita y reflexión sobre la lengua: la palabra y su significado, separación de palabras, la frase como unidad con sentido y su orden básico", ["Tarjetas de palabras para ordenar frases en la pizarra.", "Frases que crecen en corro, añadiendo una palabra cada vez.", "Clasificar palabras en tres cajas: nombran, acción, cómo es."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
