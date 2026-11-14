// Educación Plástica 1º de Primaria: mirar obras de arte. Tema a nivel libro. Dibujos propios en SVG (versiones sencillas, no copias de las obras).
const { tema, C, dibujos, lista, mural, vid, lienzo, texto } = require("./_pri1L2");
const { R, A, V, N, M, G, K } = C;

const B = `stroke="var(--ink)" stroke-width="2"`;
// Marco dorado con un dibujo dentro; (x, y) esquina, w × h tamaño.
const marco = (x, y, w, h, inner, fondo = "#fffde7") => `<rect x="${x - 6}" y="${y - 6}" width="${w + 12}" height="${h + 12}" rx="3" fill="#c9a227" ${B}/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fondo}"/>${inner}`;
// Mini cuadros de cada género (dentro de una caja de 64 × 64 con esquina en x, y).
const g = {
  retrato: (x, y) => `<path d="M${x + 10} ${y + 64} q 0 -20 22 -20 q 22 0 22 20 z" fill="#5c6bc0"/><circle cx="${x + 32}" cy="${y + 30}" r="14" fill="#ffcc80"/><path d="M${x + 18} ${y + 26} q 14 -20 28 0" fill="#6d4c41"/><circle cx="${x + 27}" cy="${y + 30}" r="1.6" fill="#333"/><circle cx="${x + 37}" cy="${y + 30}" r="1.6" fill="#333"/><path d="M${x + 28} ${y + 37} q 4 3 8 0" fill="none" stroke="#333" stroke-width="1.4"/>`,
  paisaje: (x, y) => `<rect x="${x}" y="${y}" width="64" height="40" fill="#bbdefb"/><path d="M${x} ${y + 40} L${x + 18} ${y + 18} L${x + 36} ${y + 40} L${x + 50} ${y + 24} L${x + 64} ${y + 40} Z" fill="#8d6e63"/><rect x="${x}" y="${y + 40}" width="64" height="24" fill="#81c784"/><circle cx="${x + 52}" cy="${y + 12}" r="6" fill="#fdd835"/>`,
  bodegon: (x, y) => `<rect x="${x}" y="${y + 44}" width="64" height="20" fill="#a1887f"/><path d="M${x + 10} ${y + 46} q 0 -26 14 -26 q 14 0 14 26 z" fill="#4fc3f7" ${B}/><circle cx="${x + 46}" cy="${y + 38}" r="9" fill="#e53935"/><circle cx="${x + 54}" cy="${y + 42}" r="6" fill="#fdd835"/>`,
  noche: (x, y) => `<rect x="${x}" y="${y}" width="64" height="64" fill="#1a237e"/>${[[14, 14], [40, 10], [26, 30], [54, 26]].map(([a, b]) => `<circle cx="${x + a}" cy="${y + b}" r="4" fill="#fdd835"/><circle cx="${x + a}" cy="${y + b}" r="8" fill="none" stroke="#fff59d" stroke-width="1.5"/>`).join("")}<path d="M${x} ${y + 46} q 16 -10 32 0 t 32 0" fill="none" stroke="#64b5f6" stroke-width="3"/><path d="M${x + 8} ${y + 64} q 4 -40 10 -50 q 4 20 6 50 z" fill="#1b5e20"/><rect x="${x + 34}" y="${y + 52}" width="22" height="12" fill="#5d4037"/>`,
};

const generos = lienzo("Tres tipos de cuadros: retrato, paisaje y bodegón", [["retrato", "retrato"], ["paisaje", "paisaje"], ["bodegon", "bodegón"]].map(([k, n], i) => marco(16 + i * 82, 48, 64, 64, g[k](16 + i * 82, 48)) + texto(48 + i * 82, 148, n, { size: 15, max: 78 })).join(""), { titulo: "Tipos de cuadros" });
const cuadro = (k, label, titulo, nota) => lienzo(label, marco(90, 40, 80, 80, `<g transform="translate(90 40) scale(1.25) translate(${-0} ${-0})">${g[k](0, 0)}</g>`), { titulo, nota });

const museo = lienzo("Una sala de museo con cuadros en la pared y una niña mirando", `<rect x="10" y="30" width="240" height="110" fill="#f5f5f5" ${B}/><rect x="10" y="140" width="240" height="20" fill="#d7ccc8"/>
  ${marco(34, 52, 40, 40, `<g transform="translate(34 52) scale(.625)">${g.paisaje(0, 0)}</g>`)}${marco(110, 52, 40, 40, `<g transform="translate(110 52) scale(.625)">${g.retrato(0, 0)}</g>`)}${marco(186, 52, 40, 40, `<g transform="translate(186 52) scale(.625)">${g.noche(0, 0)}</g>`)}
  <path d="M60 140 v-18 m-10 18 v-14" stroke="#c62828" stroke-width="3"/><circle cx="56" cy="114" r="7" fill="#ffcc80"/><rect x="48" y="120" width="16" height="16" rx="4" fill="#e53935"/>`, { titulo: "En el museo", nota: "Miro con los ojos, no con las manos" });

const escultura = lienzo("Una escultura sobre un pedestal y otra en una plaza", `<rect x="40" y="110" width="60" height="40" fill="#bdbdbd" ${B}/><circle cx="70" cy="62" r="12" fill="#e0e0e0" ${B}/><path d="M58 108 q 0 -30 12 -34 q 12 4 12 34 z" fill="#e0e0e0" ${B}/>${texto(70, 168, "en el museo", { size: 13, max: 100 })}
  <rect x="150" y="140" width="80" height="10" fill="#a1887f"/><path d="M168 140 c 0 -50 44 -50 44 0" fill="none" stroke="#ef5350" stroke-width="10"/><circle cx="190" cy="70" r="10" fill="#42a5f5" ${B}/>${texto(190, 168, "en la plaza", { size: 13, max: 100 })}`, { titulo: "Esculturas" });

const mirar = lista("Tres preguntas para mirar un cuadro: qué veo, qué pienso y qué siento", [["👀 ¿Qué veo?", A], ["💭 ¿Qué pienso?", V], ["❤️ ¿Qué siento?", R]], { titulo: "Mirar un cuadro", marca: "n" });

module.exports = tema({
  materia: "Educación Plástica",
  titulo: "Mirar obras de arte",
  minutos: 55,
  objetivos: ["Saber qué es una obra de arte y dónde se guardan", "Mirar un cuadro con atención: qué veo, qué pienso, qué siento", "Distinguir retrato, paisaje y bodegón", "Conocer a Van Gogh y a Velázquez", "Respetar las normas del museo"],
  claves: ["obra de arte", "museo", "cuadro", "retrato", "paisaje", "bodegón", "escultura", "artista"],
  pregunta: ["¿Por qué hay cuadros que la gente va a ver desde muy lejos?", "Porque son <mark>obras de arte</mark>: nos cuentan historias, nos sorprenden y nos hacen sentir cosas."],
  lectura: ["Marta en el museo", `<p>El sábado, Marta fue al museo con su abuelo.</p><p>Las salas eran enormes y silenciosas. En las paredes había cuadros con marcos dorados.</p><p>Marta se paró delante de uno muy azul, lleno de estrellas que daban vueltas.</p><p>—Abuelo, ¡el cielo se mueve!</p><p>—Lo pintó Van Gogh —dijo el abuelo—. ¿Qué te hace sentir?</p><p>Marta lo pensó. —Me hace sentir que estoy soñando.</p><p>Después vieron un cuadro de una niña con un vestido enorme. —¡Parece una princesa!</p><p>Al salir, Marta dijo: —Los cuadros también hablan. Solo hay que mirarlos despacio.</p>`],
  bloques: [
    ["¿Qué es una obra de arte?", `<p>Una <mark>obra de arte</mark> es algo que una persona crea para expresar ideas, sentimientos o belleza.</p><p>Son obras de arte los <b>cuadros</b>, las <b>esculturas</b>, los <b>dibujos</b> y muchas cosas más.</p><p>La persona que las hace se llama <b>artista</b>: pintor, pintora, escultor o escultora.</p><p>Algunas obras tienen cientos de años. Otras se hicieron ayer.</p><p>Tus dibujos también son pequeñas obras de arte. ¡Tú eres artista!</p>`,
      generos],
    ["Los museos", `<p>Las obras de arte más importantes se guardan en los <mark>museos</mark>.</p><p>Un museo es un edificio donde se cuidan las obras para que todo el mundo pueda verlas.</p><p>En el museo tenemos <b>normas</b>: miramos sin tocar, hablamos bajito y no corremos.</p><p>Así las obras duran muchos años y todos las disfrutan.</p><p>En España hay museos muy famosos, como el <b>Museo del Prado</b> de Madrid. ¡Puedes visitarlo también por internet!</p>`,
      museo],
    ["Cómo mirar un cuadro", `<p>Para disfrutar de un cuadro hay que <mark>mirarlo despacio</mark>.</p><p>Nos hacemos tres preguntas.</p><p><b>¿Qué veo?</b> Personas, animales, colores, formas.</p><p><b>¿Qué pienso?</b> ¿Qué está pasando? ¿Dónde es? ¿Es de día o de noche?</p><p><b>¿Qué siento?</b> Alegría, calma, miedo, curiosidad.</p><p>No hay respuestas equivocadas. Cada persona ve cosas distintas en el mismo cuadro.</p><p>Por eso es tan divertido mirar juntos y compartir.</p>`,
      mirar],
    ["Los retratos", `<p>Un <mark>retrato</mark> es un cuadro de una persona.</p><p>Normalmente vemos su <b>cara</b> y a veces su cuerpo entero.</p><p>Antes no había fotos. Las familias pedían a los pintores que los retrataran para recordarlos.</p><p>Cuando un pintor se pinta a sí mismo, se llama <b>autorretrato</b>. Se mira en un espejo y se pinta.</p><p>Mira un retrato: ¿cómo crees que es esa persona? ¿Está contenta o seria?</p>`,
      cuadro("retrato", "Un retrato sencillo de una persona sonriente", "Un retrato", "una persona")],
    ["Los paisajes", `<p>Un <mark>paisaje</mark> es un cuadro de un lugar: el campo, la montaña, el mar o una ciudad.</p><p>En un paisaje vemos el <b>cielo</b>, la <b>tierra</b> y a veces el <b>agua</b>.</p><p>Algunos pintores salían al aire libre con su caballete para pintar lo que veían.</p><p>Los paisajes pueden ser de día o de noche, en verano o en invierno.</p><p>¿Qué paisaje pintarías tú? ¿El que ves desde tu ventana?</p>`,
      cuadro("paisaje", "Un paisaje con montañas, prado verde y sol", "Un paisaje", "montañas, prado y sol")],
    ["Los bodegones", `<p>Un <mark>bodegón</mark> es un cuadro de cosas que no se mueven: fruta, jarras, flores o platos.</p><p>El pintor coloca los objetos encima de una mesa y los pinta con mucho cuidado.</p><p>En los bodegones se ven muy bien los <b>colores</b>, las <b>formas</b> y las <b>luces</b>.</p><p>Algunos parecen tan reales que dan ganas de coger la fruta.</p><p>Prueba en casa: pon tres frutas en la mesa y píntalas.</p>`,
      cuadro("bodegon", "Un bodegón con una jarra azul y frutas sobre una mesa", "Un bodegón", "jarra y frutas")],
    ["Van Gogh y su noche estrellada", `<p><mark>Vincent van Gogh</mark> fue un pintor de Holanda que vivió hace más de cien años.</p><p>Pintaba con pinceladas gruesas y colores muy fuertes.</p><p>Uno de sus cuadros más famosos es <b>La noche estrellada</b>. El cielo es azul oscuro y las estrellas parecen remolinos de luz.</p><p>También pintó girasoles amarillos y su habitación.</p><p>Mirando sus cuadros parece que todo se mueve. ¡Como dijo Marta, es como soñar!</p>`,
      cuadro("noche", "Un cielo nocturno con estrellas en remolino, inspirado en Van Gogh", "Una noche de estrellas", "al estilo de Van Gogh"),
      vid("N7DHaAqfKwE", "¿Sabes qué pintó Vincent van Gogh?", "FlexFlix Kids en Español", 344925)],
    ["Velázquez y Las Meninas", `<p><mark>Diego Velázquez</mark> fue un pintor español muy importante. Pintaba para el rey.</p><p>Su cuadro más famoso es <b>Las Meninas</b>. Está en el Museo del Prado.</p><p>En el centro hay una niña, la infanta Margarita, con un vestido enorme.</p><p>A su alrededor hay damas, un perro y ¡el propio Velázquez pintando!</p><p>Al fondo hay un espejo con dos personas. ¿Quiénes serán? Mira el cuadro y búscalas.</p>`,
      dibujos("Personajes de Las Meninas: una niña, un perro y un pintor", [["nina", "la infanta", R], ["perro", "el perro", G], ["lapiz", "el pintor", A]], { titulo: "¿Quién sale?" }),
      vid("bZ1XFmi44PA", "Lunnis de Leyenda: Velázquez", "Clan TVE", 116542)],
    ["Las esculturas", `<p>No todo el arte se cuelga en la pared. Las <mark>esculturas</mark> son obras con volumen.</p><p>Se pueden mirar por delante, por detrás y por los lados.</p><p>Se hacen de piedra, madera, metal o barro.</p><p>Hay esculturas en los museos y también en la calle: en las plazas, los parques y las fuentes.</p><p>La próxima vez que pasees, busca esculturas. ¿De qué material son? ¿Qué representan?</p>`,
      escultura],
    ["¿Para qué sirve el arte?", `<p>El arte sirve para <mark>expresar</mark> lo que sentimos y pensamos.</p><p>También nos cuenta cómo vivía la gente hace mucho tiempo: cómo vestían, qué comían, qué les gustaba.</p><p>El arte nos hace <b>disfrutar</b> y nos enseña a mirar con atención.</p><p>Y nos da ideas. Después de ver un cuadro, ¡dan ganas de pintar!</p><p>Por eso cuidamos las obras de arte: son un tesoro de todos.</p>`,
      dibujos("El arte expresa, enseña y hace disfrutar", [["corazon", "siento", R], ["libro", "aprendo", A], ["feliz", "disfruto", M]], { titulo: "El arte sirve para…" })],
    ["Juego: el cuadro vivo", `<p>Vamos a jugar al <mark>cuadro vivo</mark>.</p><p>La maestra enseña un cuadro con personas. Un grupo de niños y niñas lo imita: se colocan igual y se quedan quietos como estatuas.</p><p>Los demás miran el cuadro y el grupo. ¿Se parecen?</p><p>Después, los del cuadro pueden «despertar» y contar qué estaban haciendo sus personajes.</p><p>Así entramos dentro de las obras de arte. ¡Es como viajar en el tiempo!</p>`,
      dibujos("Niños imitando un cuadro como estatuas", [["nina", "quieta", R], ["nino", "quieto", A], ["estrella", "¡estatuas!", M]], { titulo: "El cuadro vivo" })],
    ["Repaso: lo que ya sé", `<p>Una <mark>obra de arte</mark> expresa ideas y sentimientos. La hace un <b>artista</b>.</p><p>Las obras se guardan en los <b>museos</b>, donde miramos sin tocar.</p><p>Para mirar un cuadro pregunto: ¿qué veo?, ¿qué pienso?, ¿qué siento?</p><p>Hay <b>retratos</b>, <b>paisajes</b> y <b>bodegones</b>. Y también <b>esculturas</b>.</p><p>Conozco a <b>Van Gogh</b> y a <b>Velázquez</b>.</p><p>¡Ya sé mirar el arte como un experto!</p>`,
      lista("Repaso de mirar obras de arte", [["Museo: miro sin tocar", A], ["Veo, pienso, siento", V], ["Retrato, paisaje, bodegón", R], ["Van Gogh y Velázquez", N]], { titulo: "Ya sé…" })],
  ],
  figura: ["Tipos de obras de arte", mural("Retrato, paisaje, bodegón y escultura", [["cara_a", "Retrato", "una persona", R], ["arbol", "Paisaje", "un lugar", V], ["manzana", "Bodegón", "cosas quietas", M], ["mano", "Escultura", "con volumen", A]], "Mirar obras de arte")],
  video: { ...vid("3cqdOhuboC4", "Obra comentada: Las meninas, de Velázquez", "Museo Nacional del Prado", 653731), busqueda: "Las Meninas para niños" },
  ejemplos: [
    ["Un cuadro muestra a una señora sentada. ¿Qué tipo es?", ["Miro qué sale: una persona.", "Un cuadro de una persona es un retrato.", "Lo digo."], "un retrato."],
    ["Un cuadro muestra un río y montañas. ¿Qué tipo es?", ["Miro qué sale: un lugar.", "Un cuadro de un lugar es un paisaje.", "Lo digo."], "un paisaje."],
    ["Mira La noche estrellada con las tres preguntas.", ["Veo: estrellas, un pueblo, un árbol.", "Pienso: es de noche y todos duermen.", "Siento: calma, o que sueño."], "veo, pienso y siento."],
    ["Estás en el museo y quieres tocar un cuadro. ¿Qué haces?", ["Recuerdo las normas.", "En el museo miramos sin tocar.", "Me acerco solo con los ojos."], "no lo toco: lo miro."],
  ],
  errores: [
    "Tocar los cuadros en el museo: se estropean.",
    "Pensar que solo hay una forma correcta de ver un cuadro: cada persona ve cosas distintas.",
    "Confundir paisaje y retrato: el retrato es de una persona; el paisaje, de un lugar.",
    "Creer que el arte solo está en los museos: también en la calle y en tus dibujos.",
  ],
  basico: [
    ["¿Dónde se guardan las obras de arte?", "En los museos."],
    ["¿Qué es un retrato?", "Un cuadro de una persona."],
    ["¿Qué es un paisaje?", "Un cuadro de un lugar."],
    ["¿Se pueden tocar los cuadros del museo?", "No."],
    ["¿Cómo se llama quien pinta cuadros?", "Pintor o pintora, artista."],
    ["Dibuja tu propio retrato.", "Autorretrato libre."],
    ["¿De qué color es el cielo de La noche estrellada?", "Azul oscuro."],
    ["Nombra un museo famoso de España.", "El Museo del Prado."],
  ],
  medio: [
    ["¿Qué es un bodegón?", "Un cuadro de cosas que no se mueven: fruta, jarras."],
    ["¿Cuáles son las tres preguntas para mirar un cuadro?", "¿Qué veo? ¿Qué pienso? ¿Qué siento?"],
    ["¿Quién pintó Las Meninas?", "Diego Velázquez."],
    ["¿Quién pintó La noche estrellada?", "Vincent van Gogh."],
    ["¿Qué es un autorretrato?", "Un retrato que el artista hace de sí mismo."],
    ["Dibuja un paisaje de tu barrio.", "Dibujo libre."],
    ["Pinta un bodegón con tres frutas.", "Dibujo libre."],
    ["¿En qué se diferencia una escultura de un cuadro?", "La escultura tiene volumen."],
    ["Nombra dos normas del museo.", "Mirar sin tocar, hablar bajito, no correr."],
  ],
  avanzado: [
    ["Elige un cuadro y explícalo con veo, pienso y siento.", "Respuesta libre en tres partes."],
    ["Juega al cuadro vivo con tu grupo.", "Imitar la postura de los personajes."],
    ["Pinta una noche estrellada a tu manera.", "Dibujo libre con estrellas en remolino."],
    ["Busca esculturas en tu barrio y di de qué material son.", "Respuesta libre."],
    ["Organiza un museo de clase con vuestros dibujos.", "Exposición con cartelas y normas."],
  ],
  quiz: [
    ["Un cuadro de una persona es un…", ["retrato", "paisaje", "bodegón"], 0, "Retrato."],
    ["Un cuadro de un lugar es un…", ["paisaje", "retrato", "bodegón"], 0, "Paisaje."],
    ["Un cuadro de fruta y jarras es un…", ["bodegón", "paisaje", "retrato"], 0, "Bodegón."],
    ["En el museo, los cuadros…", ["no se tocan", "se tocan", "se mueven"], 0, "No se tocan."],
    ["Velázquez pintó…", ["Las Meninas", "La noche estrellada", "los girasoles"], 0, "Las Meninas."],
    ["Van Gogh pintó…", ["La noche estrellada", "Las Meninas", "la Gioconda"], 0, "La noche estrellada."],
    ["Las Meninas está en el…", ["Museo del Prado", "cole", "parque"], 0, "Museo del Prado."],
    ["Una obra con volumen es una…", ["escultura", "pintura", "foto"], 0, "Escultura."],
    ["Al mirar un cuadro pregunto: ¿qué veo, qué pienso y qué…?", ["siento", "como", "compro"], 0, "Siento."],
    ["Quien crea una obra de arte es…", ["un artista", "un cartero", "un médico"], 0, "Un artista."],
    ["En el museo hablamos…", ["bajito", "gritando", "nunca"], 0, "Bajito."],
    ["Un autorretrato es cuando el pintor…", ["se pinta a sí mismo", "pinta un perro", "no pinta"], 0, "Se pinta a sí mismo."],
  ],
  examen: [
    ["¿Dónde se cuidan las obras de arte?", ["en los museos", "en la basura", "en el río"], 0, "En los museos."],
    ["Un paisaje muestra…", ["un lugar", "una persona", "una jarra"], 0, "Un lugar."],
    ["¿Quién sale en el centro de Las Meninas?", ["una niña", "un caballo", "un barco"], 0, "La infanta Margarita."],
    ["Van Gogh pintaba con colores…", ["muy fuertes", "solo gris", "transparentes"], 0, "Muy fuertes."],
    ["Las esculturas pueden estar…", ["en las plazas", "solo en libros", "en ningún sitio"], 0, "En museos y plazas."],
    ["Al mirar un cuadro, las respuestas…", ["pueden ser distintas", "son todas iguales", "están prohibidas"], 0, "Cada persona ve cosas distintas."],
  ],
  feynman: ["Qué es una obra de arte", "Cómo mirar un cuadro con tres preguntas", "La diferencia entre retrato, paisaje y bodegón"],
  mapa: ["OBRAS DE ARTE", [["Museo", "miro sin tocar", A], ["Mirar", "veo · pienso · siento", V], ["Tipos", "retrato · paisaje · bodegón", R], ["Artistas", "Van Gogh · Velázquez", N]], 230],
  tarjetas: [
    ["Obra de arte", "Expresa ideas y sentimientos"],
    ["Museo", "Edificio donde se cuidan las obras"],
    ["Retrato", "Cuadro de una persona"],
    ["Paisaje", "Cuadro de un lugar"],
    ["Bodegón", "Cuadro de cosas quietas"],
    ["Escultura", "Obra con volumen"],
    ["Autorretrato", "El pintor se pinta a sí mismo"],
    ["Van Gogh", "La noche estrellada"],
    ["Velázquez", "Las Meninas"],
    ["Mirar un cuadro", "Veo, pienso, siento"],
  ],
  glosario: [
    ["Obra de arte", "Creación que expresa ideas, sentimientos o belleza."],
    ["Artista", "Persona que crea obras de arte."],
    ["Museo", "Edificio donde se guardan y se enseñan obras."],
    ["Cuadro", "Pintura sobre un lienzo o una tabla."],
    ["Retrato", "Cuadro de una persona."],
    ["Paisaje", "Cuadro de un lugar."],
    ["Bodegón", "Cuadro de objetos que no se mueven."],
    ["Escultura", "Obra de arte con volumen."],
  ],
  situacion: ["El museo de la clase", "Vamos a convertir la clase en un museo para que nos visiten las familias.", ["Cada uno pinta una obra: un retrato, un paisaje o un bodegón.", "Escribimos una cartela con el título y el nombre del artista.", "Preparamos las normas del museo.", "Hacemos de guías y explicamos las obras con veo, pienso y siento."], "un museo de clase con visitas guiadas.", ["Distingue retrato, paisaje y bodegón.", "Explica una obra con las tres preguntas.", "Respeta y hace respetar las normas del museo."]],
  familias: [
    "Visitad un museo o una exposición, o hacedlo por internet (el Prado tiene visita virtual).",
    "Mirad juntos un cuadro y preguntaos: ¿qué veo, qué pienso, qué siento?",
    "Buscad esculturas en vuestro barrio y hablad de ellas.",
    "Colgad sus dibujos en casa como en un museo, con su título.",
  ],
  saberes: "Apreciación artística: obras de arte, museos y normas de visita, géneros pictóricos (retrato, paisaje, bodegón), escultura y artistas (Van Gogh, Velázquez). Estrategia veo, pienso, siento",
  ideas: ["Rutina de pensamiento veo-pienso-siento con obras proyectadas.", "Juego del cuadro vivo con Las Meninas.", "Museo de aula con cartelas y guías.", "Visita virtual al Museo del Prado."],
});
