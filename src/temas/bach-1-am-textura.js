// Análisis Musical I, 1º de Bachillerato. Tema 5 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-am");

module.exports = B.tema({
  titulo: "La textura",
  minutos: 60,
  objetivos: [
    "Definir la textura musical y sus parámetros: número de voces, densidad y relación entre líneas",
    "Distinguir monodia, melodía acompañada, homofonía y polifonía",
    "Reconocer la imitación, el canon y la fuga como procedimientos polifónicos",
    "Describir los cambios de textura de una obra y su efecto expresivo",
  ],
  claves: ["textura", "monodia", "homofonía", "polifonía", "melodía acompañada", "contrapunto", "canon", "fuga"],
  pregunta: {
    texto: "Un coro canta a cuatro voces y todos dicen las mismas palabras a la vez. En otro, cada voz entra por su cuenta y se persiguen. ¿Qué cambia entre uno y otro?",
    respuesta: "Cambia la <mark>textura</mark>: el modo en que se combinan las líneas. En el primero las voces se mueven juntas como un bloque (homofonía); en el segundo cada una es independiente (polifonía). Es como la diferencia entre una tela lisa y un tejido de hilos entrecruzados.",
  },
  lectura: {
    titulo: "Cuarenta voces",
    html: `<p>Hacia 1570, el compositor inglés Thomas Tallis escribió <i>Spem in alium</i>, un motete para cuarenta voces independientes repartidas en ocho coros. Cuando se canta, el sonido gira alrededor del público: una voz empieza, otra la imita, luego un coro entero responde, y en los momentos culminantes las cuarenta cantan a la vez.</p>
    <p>Es un ejemplo extremo de lo que llamamos <b>textura</b>: la manera de tejer las líneas sonoras. En este tema aprenderás a distinguir texturas de oído, desde una sola voz hasta el entramado de una fuga de Bach.</p>`,
  },
  secciones: [2, 4, 2],
  bloques: [
    {
      h: "Qué es la textura",
      html: `<p>La palabra <b>textura</b> viene de «tejido». En música describe cómo se combinan las distintas líneas (voces o instrumentos) que suenan a la vez: cuántas son y qué relación hay entre ellas.</p>
      <p>Para describirla se observan tres aspectos: el <b>número de voces</b> o planos sonoros, la <b>densidad</b> (textura ligera, con pocos instrumentos, o densa, con muchos) y la <b>relación entre las líneas</b>: si una manda y las demás acompañan, si se mueven juntas o si son independientes.</p>
      <p>La textura es uno de los elementos más fáciles de percibir y de los que más cambian dentro de una obra.</p>`,
      svg: B.cajas("Tres aspectos para describir la textura", [["Número", "de voces|o planos"], ["Densidad", "ligera|o densa"], ["Relación", "quién manda|y quién acompaña"]], { cols: 3 }),
    },
    {
      h: "Los cuatro tipos básicos",
      html: `<p>Las texturas se agrupan en cuatro tipos que estudiaremos uno por uno: <b>monodia</b> (una sola línea), <b>melodía acompañada</b> (una melodía principal con acompañamiento), <b>homofonía</b> (varias voces que se mueven a la vez con el mismo ritmo) y <b>polifonía</b> (varias voces independientes).</p>
      <p>En la práctica, muchas obras mezclan tipos o pasan de uno a otro para crear contraste.</p>
      <p>Una buena forma de reconocerlos es preguntarse qué cantarías si tuvieras que tararear la obra. Si solo hay una cosa que tararear, será monodia o melodía acompañada; si dudas entre varias melodías igual de importantes, probablemente estás ante una polifonía. La homofonía se reconoce porque todas las voces cambian de nota al mismo tiempo, como si respiraran juntas.</p>`,
      svg: B.texturas("Monodia, melodía acompañada, homofonía y polifonía"),
    },
    {
      h: "La monodia",
      html: `<p>La <b>monodia</b> es la textura más simple: una única línea melódica, sin acompañamiento. Puede cantarla una persona o muchas al unísono (todos la misma nota) o a la octava.</p>
      <p>Es la textura del <b>canto gregoriano</b>, de muchas canciones populares, de un pregón o de quien canta en la ducha. Cuando una melodía se interpreta a la vez con pequeñas variantes improvisadas por cada músico se habla de <b>heterofonía</b>, frecuente en la música tradicional de Oriente y del Mediterráneo.</p>`,
      svg: B.melodia("Monodia: una única línea melódica", [0, 2, 1, 3, 2, 4, 3, 2, 1, 0], { titulo: "Una sola línea" }),
    },
    {
      h: "La melodía acompañada",
      html: `<p>En la <b>melodía acompañada</b> hay una línea principal claramente protagonista y un acompañamiento que la sostiene con acordes, arpegios o un patrón rítmico. Es la textura dominante en la música actual: una voz canta y la guitarra, el piano, el bajo y la batería acompañan.</p>
      <p>Surgió con fuerza hacia 1600, con el nacimiento de la ópera y el <b>bajo continuo</b> del Barroco, y triunfó en el Clasicismo y el Romanticismo (los <i>Nocturnos</i> de Chopin, las canciones de Schubert).</p>`,
      svg: B.capas("Planos de la melodía acompañada", [["Melodía", "voz o solista"], ["Armonía", "guitarra, piano"], ["Bajo", "bajo eléctrico"], ["Ritmo", "batería"]]),
    },
    {
      h: "La homofonía",
      html: `<p>En la <b>homofonía</b> (o textura homorrítmica) todas las voces se mueven a la vez con el <b>mismo ritmo</b>, formando bloques de acordes. La voz superior suele llevar la melodía, pero todas pronuncian el texto al mismo tiempo, por lo que se entiende muy bien.</p>
      <p>Es la textura de los <b>corales</b> de Bach, los himnos, muchos villancicos del Renacimiento y los coros «a capela» que cantan en bloque. Transmite solidez, solemnidad y unidad.</p>`,
      svg: B.acordes("Homofonía: tres acordes que se mueven en bloque", [["1", -2, "todos a la vez"], ["2", 1, "mismo ritmo"], ["3", 2, "texto claro"]], "Voces en bloque"),
    },
    {
      h: "La polifonía y el contrapunto",
      html: `<p>En la <b>polifonía</b> varias líneas melódicas independientes suenan a la vez, cada una con su propio ritmo y perfil, y ninguna es mero acompañamiento. La técnica de componer así se llama <b>contrapunto</b> (de «punto contra punto», nota contra nota).</p>
      <p>Floreció en el <b>Renacimiento</b> (Palestrina, Tomás Luis de Victoria) y alcanzó su cima en el <b>Barroco</b> con Bach. Exige un oído atento: hay que seguir varias melodías a la vez, como varias conversaciones simultáneas.</p>`,
      svg: B.comparar("Homofonía frente a polifonía", ["Homofonía", ["voces en bloque", "mismo ritmo", "texto claro", "coral, himno"]], ["Polifonía", ["voces independientes", "ritmos distintos", "texto entrelazado", "motete, fuga"]]),
      video: { id: "WS1kvggJ9ro", titulo: "J. S. Bach: Tocata y fuga en re menor. Análisis de la fuga", canal: "Musicnetmaterials", vistas: 99182 },
    },
    {
      h: "Imitación, canon y fuga",
      html: `<p>El recurso más usado en la polifonía es la <b>imitación</b>: una voz presenta un motivo y las demás lo repiten después, entrando de forma escalonada. Si la imitación es estricta y continua, todas las voces cantan la misma melodía desfasada: es el <b>canon</b>, como «Frère Jacques» o el <i>Canon</i> de Pachelbel.</p>
      <p>La <b>fuga</b> es la forma polifónica más elaborada: un tema llamado <b>sujeto</b> entra sucesivamente en cada voz, se responde a otra altura y se desarrolla con gran ingenio. <i>El clave bien temperado</i> de Bach contiene 48 fugas.</p>`,
      svg: B.formas("Entradas escalonadas de un canon a tres voces", [["Voz 1", "A B C D"], ["Voz 2", "· A B C"], ["Voz 3", "· · A B"]]),
      video: { id: "10Y6SBoImkk", titulo: "Lo que nadie sabe de El Canon de Pachelbel", canal: "Jaime Altozano", vistas: 3293405 },
    },
    {
      h: "Cómo analizar la textura",
      html: `<p>Al escuchar, pregúntate: <b>1.</b> ¿Cuántas líneas o planos distingo? <b>2.</b> ¿Hay una melodía principal o todas son igual de importantes? <b>3.</b> ¿Se mueven juntas o por separado? <b>4.</b> ¿Hay imitaciones? <b>5.</b> ¿Cambia la textura a lo largo de la obra y con qué efecto?</p>
      <p>Los cambios de textura sirven para marcar secciones: un estribillo suele ser más denso que una estrofa, y un final, el momento de máxima densidad.</p>`,
      svg: B.flujo("Cinco preguntas para analizar la textura", ["¿Cuántas líneas?", "¿Hay protagonista?", "¿Juntas o separadas?", "¿Hay imitación?", "¿Cómo cambia?"]),
    },
  ],
  figura: {
    titulo: "Los cuatro tipos de textura",
    items: [["Monodia", "—", "una sola línea", "gregoriano"], ["Mel. acompañada", "— + ▭", "melodía y acordes", "pop, ópera"], ["Homofonía", "≡", "bloques", "coral, himno"], ["Polifonía", "≋", "líneas independientes", "canon, fuga"]],
  },
  video: { id: "4GkdTTXdXsk", titulo: "Los Miserables: la mejor fuga de Bach", canal: "Jaime Altozano", vistas: 1252478 },
  quiz: [
    ["La textura describe…", ["la velocidad", "cómo se combinan las líneas que suenan a la vez", "la letra", "la tonalidad"], 1, "Es el «tejido» musical."],
    ["El canto gregoriano tiene textura de…", ["monodia", "polifonía", "homofonía", "melodía acompañada"], 0, "Una única línea sin acompañamiento."],
    ["Una cantante con guitarra que toca acordes es…", ["monodia", "melodía acompañada", "polifonía", "canon"], 1, "Melodía principal y acompañamiento."],
    ["Voces que se mueven todas con el mismo ritmo forman…", ["polifonía", "homofonía", "heterofonía", "fuga"], 1, "Bloques de acordes."],
    ["Varias melodías independientes a la vez forman…", ["homofonía", "polifonía", "monodia", "unísono"], 1, "Cada voz tiene su propio ritmo y perfil."],
    ["La técnica de componer polifonía se llama…", ["armonía", "contrapunto", "orquestación", "bajo continuo"], 1, "Punto contra punto."],
    ["«Frère Jacques» cantado por grupos que entran de forma escalonada es un…", ["coral", "canon", "rondó", "himno"], 1, "Imitación estricta y continua."],
    ["En una fuga, el tema principal se llama…", ["estribillo", "sujeto", "coda", "ostinato"], 1, "Entra sucesivamente en cada voz."],
    ["Cantar todos la misma melodía a la vez es cantar al…", ["contrapunto", "unísono", "canon", "acorde"], 1, "Sigue siendo monodia."],
    ["¿Qué textura facilita más entender el texto en un coro?", ["Polifonía", "Homofonía", "Fuga", "Canon"], 1, "Todos pronuncian lo mismo a la vez."],
  ],
  examen: [
    ["Un estribillo con voz, coros, guitarras, bajo, batería y cuerdas tiene una textura…", ["ligera", "densa", "monódica", "vacía"], 1, "Muchos planos sonoros."],
    ["El bajo continuo del Barroco se relaciona con…", ["la monodia gregoriana", "la melodía acompañada", "el canon", "la atonalidad"], 1, "Un bajo y acordes acompañan a la melodía."],
    ["Una melodía tradicional tocada a la vez por varios músicos con pequeñas variantes es…", ["heterofonía", "homofonía", "fuga", "coral"], 0, "Misma melodía con variaciones simultáneas."],
    ["¿Qué distingue el canon de la imitación libre?", ["Nada", "En el canon la imitación es estricta y continua", "El canon no tiene voces", "La imitación libre es monódica"], 1, "Todas las voces repiten exactamente la melodía."],
    ["Los corales de Bach son un ejemplo típico de…", ["homofonía", "monodia", "heterofonía", "atonalidad"], 0, "Cuatro voces en bloque."],
  ],
  feynman: ["Qué es la textura y cómo se describe", "Diferencias entre homofonía y polifonía", "Qué es un canon con un ejemplo", "Para qué sirven los cambios de textura"],
  mapa: ["LA TEXTURA", [["Aspectos", "número · densidad · relación"], ["Una línea", "monodia · heterofonía"], ["Protagonista", "melodía acompañada · homofonía"], ["Independientes", "polifonía · canon · fuga"]]],
  tarjetas: [
    ["Textura", "Forma de combinarse las líneas que suenan a la vez."],
    ["Monodia", "Una sola línea melódica sin acompañamiento."],
    ["Melodía acompañada", "Melodía principal sostenida por un acompañamiento."],
    ["Homofonía", "Voces que se mueven a la vez con el mismo ritmo."],
    ["Polifonía", "Varias líneas melódicas independientes simultáneas."],
    ["Contrapunto", "Técnica de combinar melodías independientes."],
    ["Canon", "Imitación estricta y continua entre voces."],
    ["Fuga", "Forma polifónica basada en un sujeto que entra en todas las voces."],
  ],
  ejemplos: [
    ["Identifica la textura de un villancico cantado solo por un niño, sin instrumentos.", ["Hay una única línea melódica.", "No hay acompañamiento ni otras voces."], "Monodia."],
    ["Describe la textura de una balada pop: voz y piano, después entra la banda.", ["Al principio: voz (melodía) y piano (acordes): melodía acompañada ligera.", "Al entrar la banda se suman bajo, batería y guitarras.", "La relación no cambia, pero aumenta la densidad."], "Melodía acompañada que pasa de ligera a densa."],
    ["Analiza la textura del Canon de Pachelbel.", ["Un bajo repite el mismo esquema de ocho notas (ostinato).", "Tres violines tocan la misma melodía entrando uno tras otro.", "Cada violín es independiente pero imita al anterior."], "Polifonía imitativa en canon sobre un bajo ostinato."],
  ],
  errores: [
    "Llamar polifonía a cualquier música con muchos instrumentos: si hay una melodía y acompañamiento es melodía acompañada.",
    "Pensar que un coro al unísono es polifónico: sigue siendo monodia.",
    "Confundir densidad (cuántos) con tipo de textura (cómo se relacionan).",
    "Describir la textura de una obra entera sin fijarse en sus cambios.",
  ],
  ejercicios: {
    b: [
      ["Define textura musical.", "Es la forma en que se combinan las líneas (voces o instrumentos) que suenan a la vez: cuántas son y cómo se relacionan."],
      ["Nombra los cuatro tipos básicos de textura.", "Monodia, melodía acompañada, homofonía y polifonía."],
      ["Pon un ejemplo de monodia y otro de homofonía.", "Monodia: canto gregoriano. Homofonía: un coral de Bach o un himno."],
      ["¿Qué es un canon?", "Una obra polifónica en la que todas las voces cantan la misma melodía entrando de forma escalonada."],
    ],
    m: [
      ["Explica la diferencia entre homofonía y melodía acompañada.", "En la homofonía todas las voces llevan el mismo ritmo en bloque; en la melodía acompañada hay una melodía protagonista y un acompañamiento con ritmo propio (arpegios, rasgueos)."],
      ["¿Por qué la polifonía exige una escucha más atenta?", "Porque hay varias melodías independientes a la vez, cada una con su ritmo y su perfil, y el oyente debe seguirlas simultáneamente."],
      ["¿Qué es la heterofonía y dónde se da?", "Es la interpretación simultánea de una misma melodía con pequeñas variantes de cada músico; es frecuente en músicas tradicionales de Oriente y del Mediterráneo."],
      ["Explica qué es el sujeto de una fuga.", "Es el tema principal, que entra sucesivamente en cada voz y se desarrolla a lo largo de la obra."],
    ],
    a: [
      ["Escucha una canción y describe cómo cambia su textura de la estrofa al estribillo, con minutaje.", "Respuesta abierta: suele pasar de melodía acompañada ligera a densa; deben indicarse instrumentos que entran o salen y el efecto expresivo."],
      ["En grupo, cantad «Frère Jacques» a tres voces en canon y explicad qué textura se crea.", "Respuesta abierta: textura polifónica imitativa; cada voz canta lo mismo desfasado y el resultado es una armonía que surge de la superposición."],
    ],
  },
  glosario: [
    ["Plano sonoro", "Cada capa o línea que se distingue en una textura."],
    ["Densidad", "Cantidad de sonidos o instrumentos que suenan a la vez."],
    ["Unísono", "Varias voces cantando la misma nota a la vez."],
    ["Heterofonía", "Una melodía interpretada a la vez con variantes."],
    ["Bajo continuo", "Bajo con acordes que acompaña en el Barroco."],
    ["Coral", "Canto religioso a cuatro voces en homofonía."],
    ["Contrapunto", "Arte de combinar melodías independientes."],
    ["Imitación", "Repetición de un motivo en otra voz."],
    ["Sujeto", "Tema principal de una fuga."],
    ["Motete", "Obra vocal polifónica religiosa del Renacimiento."],
  ],
  situacion: {
    titulo: "Un mapa de texturas",
    reto: "Elaborar un musicograma que muestre los cambios de textura de una obra a elección.",
    pasos: [
      "Elegid una obra de entre 3 y 5 minutos (clásica o actual).",
      "Escuchadla anotando, con minutaje, cada cambio de textura y de densidad.",
      "Representadlo con colores: un color por tipo de textura y el grosor según la densidad.",
      "Explicad a la clase cómo usa el compositor la textura para crear contraste.",
    ],
    producto: "Un musicograma de texturas y una breve exposición.",
    evaluacion: [
      "Identifica correctamente los tipos de textura.",
      "Sitúa los cambios con minutaje preciso.",
      "Relaciona los cambios de textura con la forma.",
      "La representación gráfica es clara.",
    ],
  },
  familias: [
    "Escuchad un coro y adivinad si cantan juntos (homofonía) o persiguiéndose (polifonía).",
    "Cantad juntos un canon sencillo en casa.",
    "Comparad una canción en versión acústica y en versión con banda.",
    "Escuchad un fragmento de Bach y tratad de seguir dos melodías a la vez.",
  ],
  saberes: "Análisis Musical I: la textura musical, número de voces, densidad y relación entre planos; monodia, heterofonía, melodía acompañada, homofonía y polifonía; contrapunto, imitación, canon y fuga; la textura como recurso formal y expresivo.",
  ideas: [
    "Cantar un canon en clase antes de explicar la polifonía.",
    "Comparar un coral de Bach y una fuga del mismo autor.",
    "Usar colores en la pizarra para seguir las voces de una obra polifónica.",
    "Analizar cómo cambian las texturas en una banda sonora de cine.",
  ],
  fuentes: [
    { t: "Spem in alium (Tallis), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Spem_in_alium" },
    { t: "Textura (música), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Textura_(m%C3%BAsica)" },
  ],
});
