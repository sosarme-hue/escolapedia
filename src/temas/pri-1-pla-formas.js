// Educación Plástica 1º de Primaria: formas y figuras. Tema a nivel libro. Dibujos propios en SVG.
const { tema, C, dibujos, lista, mural, vid, lienzo, texto } = require("./_pri1L2");
const { R, A, V, N, M, G, K } = C;

const B = `stroke="var(--ink)" stroke-width="2"`;
// Figura centrada en (x, y) con tamaño s.
const fig = (k, x, y, s, c) => ({
  circulo: `<circle cx="${x}" cy="${y}" r="${s / 2}" fill="${c}" ${B}/>`,
  cuadrado: `<rect x="${x - s / 2}" y="${y - s / 2}" width="${s}" height="${s}" fill="${c}" ${B}/>`,
  triangulo: `<path d="M${x} ${y - s / 2} L${x + s / 2} ${y + s / 2} L${x - s / 2} ${y + s / 2} Z" fill="${c}" ${B}/>`,
  rectangulo: `<rect x="${x - s * 0.75}" y="${y - s / 3}" width="${s * 1.5}" height="${s * 0.66}" fill="${c}" ${B}/>`,
  ovalo: `<ellipse cx="${x}" cy="${y}" rx="${s * 0.7}" ry="${s * 0.42}" fill="${c}" ${B}/>`,
}[k]);
// Fila de figuras con su nombre.
const figuras = (label, items, opts) => {
  const n = items.length, w = 248 / n;
  return lienzo(label, items.map(([k, nom, c, s = 50], i) => fig(k, 6 + w * (i + 0.5), 84, Math.min(s, w - 14), c) + texto(6 + w * (i + 0.5), 140, nom, { size: 15, max: w - 6, color: c })).join(""), opts);
};

const robot = lienzo("Un robot y una casa hechos solo con figuras geométricas", `${fig("triangulo", 70, 36, 12, "#fdd835")}${fig("cuadrado", 70, 59, 34, "#90caf9")}${fig("circulo", 62, 56, 8, "#fff")}${fig("circulo", 78, 56, 8, "#fff")}${fig("rectangulo", 70, 90, 40, "#ef9a9a")}${fig("rectangulo", 60, 112, 14, "#bdbdbd")}${fig("rectangulo", 80, 112, 14, "#bdbdbd")}
  ${fig("triangulo", 190, 64, 64, "#ef5350")}${fig("cuadrado", 190, 116, 56, "#ffe082")}${fig("rectangulo", 190, 130, 18, "#8d6e63")}${fig("circulo", 238, 40, 16, "#fdd835")}`, { titulo: "Dibujo con figuras" });

const libres = lienzo("Formas geométricas con bordes rectos y formas libres como una nube y una hoja", `${fig("cuadrado", 50, 78, 40, "#90caf9")}${fig("triangulo", 50, 128, 34, "#90caf9")}${texto(50, 168, "geométricas", { size: 14, max: 100, color: A })}
  <path d="M150 90 q -8 -26 18 -26 q 8 -18 30 -6 q 22 -8 26 14 q 18 6 6 22 q -4 14 -24 8 q -16 12 -32 0 q -26 4 -24 -12 z" fill="#e3f2fd" ${B}/>
  <path d="M170 150 q 16 -40 50 -30 q -10 40 -50 30 z" fill="#81c784" ${B}/>${texto(190, 168, "libres", { size: 14, max: 100, color: V })}`, { titulo: "Geométricas y libres" });

const collage = lienzo("Un collage de formas recortadas de papel de colores", `<rect x="20" y="36" width="220" height="120" rx="6" fill="#fff8e1" ${B}/>
  <path d="M40 140 q 10 -60 40 -70 q -6 40 20 70 z" fill="#43a047" ${B}/>${fig("circulo", 190, 70, 34, "#fb8c00")}<path d="M120 60 q 14 -18 26 0 q 14 18 0 32 q -12 14 -26 0 q -14 -16 0 -32 z" fill="#1e88e5" ${B}/>
  ${fig("triangulo", 160, 128, 30, "#e53935")}<path d="M200 140 l10 -24 l10 24 l-10 -6 z" fill="#8e24aa" ${B}/>`, { titulo: "Un collage de recortes" });

const senales = figuras("Señales de tráfico: círculo de prohibido, triángulo de peligro y cuadrado de información", [["circulo", "prohibido", "#e53935"], ["triangulo", "¡cuidado!", "#fb8c00"], ["cuadrado", "información", "#1e88e5"]], { titulo: "Formas que avisan" });

const tamanos = lienzo("Tres círculos: grande, mediano y pequeño", `${fig("circulo", 52, 88, 70, "#ef9a9a")}${fig("circulo", 135, 96, 46, "#ef9a9a")}${fig("circulo", 215, 104, 26, "#ef9a9a")}${texto(52, 150, "grande", { size: 15, max: 80 })}${texto(135, 150, "mediano", { size: 15, max: 74 })}${texto(215, 150, "pequeño", { size: 15, max: 74 })}`, { titulo: "Grande, mediano, pequeño" });

module.exports = tema({
  materia: "Educación Plástica",
  titulo: "Formas y figuras",
  minutos: 50,
  objetivos: ["Reconocer el círculo, el cuadrado, el triángulo, el rectángulo y el óvalo", "Descubrir las formas en los objetos de nuestro alrededor", "Dibujar personajes y objetos combinando figuras", "Distinguir formas geométricas y formas libres", "Crear un collage con formas recortadas"],
  claves: ["forma", "círculo", "cuadrado", "triángulo", "rectángulo", "óvalo", "collage"],
  pregunta: ["¿Qué tienen en común una pizza, una rueda y la luna llena?", "¡Que todas tienen forma de <mark>círculo</mark>! Las formas están escondidas en todas las cosas."],
  lectura: ["La ciudad de las formas", `<p>En un país muy lejano había una ciudad hecha solo de formas.</p><p>Las casas eran cuadrados con un sombrero de triángulo.</p><p>Las ruedas de los coches eran círculos, y las puertas, rectángulos.</p><p>Un día llegó una nube blandita. No era redonda ni cuadrada.</p><p>—¡Tú no tienes forma! —le dijeron.</p><p>—Sí que tengo —respondió la nube—. Mi forma es libre: cambio cuando quiero.</p><p>Las formas se quedaron pensando. Al final la invitaron a quedarse.</p><p>Desde entonces, la ciudad tiene formas geométricas y formas libres. ¡Y es mucho más bonita!</p>`],
  bloques: [
    ["Formas por todas partes", `<p>Todas las cosas tienen <mark>forma</mark>. La forma es el dibujo de su borde.</p><p>Una pelota es <b>redonda</b>. Un libro es <b>rectangular</b>. Un trozo de pizza es como un <b>triángulo</b>.</p><p>Si miras con atención, encontrarás formas en tu clase, en tu casa y en la calle.</p><p>Los artistas se fijan mucho en las formas. Así consiguen dibujar las cosas bien.</p><p>¡Vamos a aprender a mirar como ellos!</p>`,
      dibujos("Objetos con forma: pelota redonda, libro rectangular, reloj redondo y casa", [["pelota", "redonda", R], ["libro", "rectángulo", A], ["reloj", "redondo", V], ["casa", "2 formas", N]], { titulo: "¿Qué forma tiene?" }),
      vid("8EooNSe0oA4", "Figuras geométricas para niños: formas y figuras", "Patico De Hule", 44814967)],
    ["El círculo", `<p>El <mark>círculo</mark> es redondo. No tiene esquinas ni lados rectos.</p><p>Si lo recorres con el dedo, nunca encuentras un pico.</p><p>Tienen forma de círculo las ruedas, los botones, las monedas y el sol de nuestros dibujos.</p><p>Para dibujar un círculo, puedes rodear un vaso o una tapa con el lápiz.</p><p>¡Los círculos ruedan! Por eso las ruedas son redondas y no cuadradas.</p>`,
      figuras("Círculos de varios colores", [["circulo", "círculo", R], ["circulo", "rueda", K, 40], ["circulo", "moneda", M, 32]], { titulo: "Redondo, sin esquinas" })],
    ["El cuadrado", `<p>El <mark>cuadrado</mark> tiene <b>4 lados</b> iguales y <b>4 esquinas</b>.</p><p>Todos sus lados miden lo mismo, ¡ninguno es más largo!</p><p>Tienen forma de cuadrado algunas ventanas, las baldosas, las servilletas dobladas y los cubos de los dados.</p><p>Para comprobar si algo es un cuadrado, cuenta sus lados y mira si son iguales.</p><p>Con muchos cuadrados juntos podemos hacer un tablero de ajedrez.</p>`,
      figuras("Cuadrados de varios tamaños", [["cuadrado", "cuadrado", A], ["cuadrado", "baldosa", G, 38], ["cuadrado", "ventana", N, 44]], { titulo: "4 lados iguales" })],
    ["El triángulo", `<p>El <mark>triángulo</mark> tiene <b>3 lados</b> y <b>3 esquinas</b> o picos.</p><p>Es como el tejado de una casa, un trozo de pizza o la vela de un barco.</p><p>Las montañas de nuestros dibujos también suelen ser triángulos.</p><p>Si giras un triángulo, puede quedar con el pico arriba o con el pico abajo. ¡Sigue siendo un triángulo!</p><p>Las señales de peligro tienen forma de triángulo.</p>`,
      figuras("Triángulos: tejado, pizza y vela", [["triangulo", "triángulo", V], ["triangulo", "tejado", R, 44], ["triangulo", "pizza", M, 38]], { titulo: "3 lados, 3 picos" }),
      vid("NooFRrvZ5vw", "Las formas geométricas: aprende a dibujar", "Genius Kids", 19178067)],
    ["El rectángulo y el óvalo", `<p>El <mark>rectángulo</mark> tiene 4 lados y 4 esquinas, como el cuadrado. Pero dos lados son <b>largos</b> y dos son <b>cortos</b>.</p><p>Son rectángulos las puertas, los libros, la pizarra y las pantallas.</p><p>El <mark>óvalo</mark> es como un círculo estirado. Tiene forma de <b>huevo</b>.</p><p>Son óvalos los huevos, algunas caras y los espejos del baño.</p><p>¿Ves la diferencia con el círculo y el cuadrado?</p>`,
      figuras("Un rectángulo y un óvalo", [["rectangulo", "rectángulo", N, 60], ["ovalo", "óvalo", M, 56]], { titulo: "Estirados" })],
    ["Grande, mediano y pequeño", `<p>Una misma forma puede tener <mark>tamaños</mark> distintos.</p><p>Hay círculos <b>grandes</b>, como una pizza, y círculos <b>pequeños</b>, como un botón.</p><p>En un dibujo, las cosas que están <b>cerca</b> se dibujan más grandes. Las que están <b>lejos</b>, más pequeñas.</p><p>Por eso un árbol que está lejos se ve pequeñito.</p><p>Ordena tres formas de la más grande a la más pequeña. ¡Parece una familia de formas!</p>`,
      tamanos],
    ["Dibujar con formas", `<p>Con formas sencillas podemos <mark>dibujar casi todo</mark>.</p><p>Una <b>casa</b> es un cuadrado con un triángulo encima.</p><p>Un <b>robot</b> es un cuadrado de cabeza, un rectángulo de cuerpo y círculos de ojos.</p><p>Un <b>gato</b> puede ser un círculo con dos triángulos de orejas.</p><p>Antes de dibujar algo difícil, piensa: ¿qué formas tiene escondidas? Dibuja primero las formas y después los detalles.</p>`,
      robot],
    ["Formas geométricas y formas libres", `<p>El círculo, el cuadrado y el triángulo son <mark>formas geométricas</mark>. Tienen bordes rectos o curvas perfectas.</p><p>Otras formas no se parecen a ninguna figura: una nube, una hoja, un charco. Son <mark>formas libres</mark>.</p><p>En la naturaleza hay muchas formas libres.</p><p>Las personas fabricamos muchas cosas con formas geométricas, como mesas y ventanas.</p><p>En tus dibujos puedes mezclar las dos. ¡Quedan muy bien juntas!</p>`,
      libres],
    ["El collage de formas", `<p>Un <mark>collage</mark> es una obra hecha pegando trozos de papel sobre una hoja.</p><p>Recortamos formas de papel de colores: círculos, triángulos y formas libres.</p><p>Después las movemos por la hoja hasta que nos gusta cómo quedan. ¡Y las pegamos!</p><p>El pintor <b>Henri Matisse</b> hacía collages con recortes de colores cuando ya no podía pintar.</p><p>Recorta con cuidado y pide ayuda con las tijeras si la necesitas.</p>`,
      collage],
    ["¿Para qué sirven?", `<p>Las formas nos ayudan a <mark>entender el mundo</mark>.</p><p>Las <b>señales de tráfico</b> usan formas: los círculos rojos prohíben, los triángulos avisan de peligro y los cuadrados azules informan.</p><p>Las formas sirven para construir: los ladrillos son rectángulos y las ruedas, círculos.</p><p>Y en el arte, las formas sirven para inventar personajes y paisajes.</p><p>¡Fíjate en las formas de las señales de camino al cole!</p>`,
      senales],
    ["Juego: la bolsa misteriosa", `<p>Vamos a jugar a la <mark>bolsa misteriosa</mark>.</p><p>Dentro de una bolsa hay formas de cartón o de madera: círculos, cuadrados, triángulos y rectángulos.</p><p>Mete la mano sin mirar y toca una forma.</p><p>¿Tiene picos? ¿Cuántos? ¿Es redonda? ¿Tiene lados largos y cortos?</p><p>Di qué forma crees que es y sácala. ¿Has acertado?</p><p>Con este juego aprendes las formas con las manos, no solo con los ojos.</p>`,
      dibujos("Una mano toca formas escondidas en una bolsa", [["mano", "toco", A], ["interrogacion", "¿qué es?", R], ["estrella", "¡acierto!", M]], { titulo: "La bolsa misteriosa" })],
    ["Repaso: lo que ya sé", `<p>Todas las cosas tienen <mark>forma</mark>.</p><p>El <b>círculo</b> es redondo. El <b>cuadrado</b> tiene 4 lados iguales. El <b>triángulo</b> tiene 3 lados.</p><p>El <b>rectángulo</b> tiene 2 lados largos y 2 cortos. El <b>óvalo</b> parece un huevo.</p><p>Hay formas <b>geométricas</b> y formas <b>libres</b>.</p><p>Con formas podemos dibujar casi todo y hacer collages.</p><p>¡Ahora ya sabes mirar las formas como un artista!</p>`,
      lista("Repaso de las formas", [["Círculo: redondo", R], ["Cuadrado: 4 lados iguales", A], ["Triángulo: 3 lados", V], ["Rectángulo y óvalo", N]], { titulo: "Ya sé…" })],
  ],
  figura: ["Las figuras básicas", figuras("Círculo, cuadrado, triángulo y rectángulo", [["circulo", "círculo", R, 44], ["cuadrado", "cuadrado", A, 40], ["triangulo", "triángulo", V, 44], ["rectangulo", "rectángulo", N, 34]], { titulo: "Las figuras" })],
  video: { ...vid("xa7PoZRYRng", "Figurativo y abstracto: clases de artes para niños", "CNTV Infantil", 648347), busqueda: "formas en el arte para niños" },
  ejemplos: [
    ["¿Qué forma tiene una puerta?", ["Cuento sus lados: 4.", "Dos son largos y dos cortos.", "Es un rectángulo."], "rectángulo."],
    ["Dibuja un gato con formas.", ["Cabeza: un círculo.", "Orejas: dos triángulos.", "Cuerpo: un óvalo."], "un gato de círculo, triángulos y óvalo."],
    ["¿Una nube es geométrica o libre?", ["Miro su borde.", "No es círculo ni cuadrado.", "Cambia de forma."], "una forma libre."],
    ["¿Qué avisa una señal triangular?", ["Miro su forma: 3 lados.", "Los triángulos de tráfico avisan.", "Avisan de peligro."], "¡cuidado, peligro!"],
  ],
  errores: [
    "Llamar cuadrado a cualquier forma de 4 lados: si dos lados son más largos, es un rectángulo.",
    "Confundir círculo y óvalo: el óvalo está estirado, como un huevo.",
    "Creer que un triángulo girado ya no es triángulo: sigue teniendo 3 lados.",
    "Pensar que todo tiene forma geométrica: las nubes y las hojas tienen formas libres.",
  ],
  basico: [
    ["Dibuja un círculo, un cuadrado y un triángulo.", "Las tres figuras."],
    ["¿Cuántos lados tiene un triángulo?", "3."],
    ["¿Cuántos lados tiene un cuadrado?", "4, todos iguales."],
    ["¿Qué forma tiene una rueda?", "Círculo."],
    ["¿Qué forma tiene un huevo?", "Óvalo."],
    ["Busca en clase algo con forma de rectángulo.", "Por ejemplo: la pizarra, la puerta, un libro."],
    ["¿El círculo tiene esquinas?", "No."],
    ["Colorea de rojo los círculos y de azul los cuadrados de una ficha.", "Respuesta libre."],
  ],
  medio: [
    ["Dibuja una casa con un cuadrado y un triángulo.", "Cuadrado de casa y triángulo de tejado."],
    ["¿En qué se diferencian el cuadrado y el rectángulo?", "El rectángulo tiene 2 lados largos y 2 cortos."],
    ["Ordena tres círculos de grande a pequeño.", "Grande, mediano, pequeño."],
    ["Nombra dos formas libres de la naturaleza.", "Por ejemplo: una nube y una hoja."],
    ["¿Qué forma tiene la señal de peligro?", "Triángulo."],
    ["Dibuja un robot solo con figuras.", "Dibujo libre con figuras geométricas."],
    ["¿Por qué las ruedas son redondas?", "Porque los círculos ruedan."],
    ["¿Qué es un collage?", "Una obra hecha pegando trozos de papel."],
    ["¿Qué forma tiene un trozo de pizza?", "Parecida a un triángulo."],
  ],
  avanzado: [
    ["Haz un collage con 5 formas recortadas.", "Collage libre con formas geométricas y libres."],
    ["Dibuja un animal usando al menos 4 figuras distintas.", "Dibujo libre."],
    ["Explica a un compañero cómo reconocer un cuadrado.", "Tiene 4 lados iguales y 4 esquinas."],
    ["Busca en tu casa 3 objetos de formas distintas y dibújalos.", "Respuesta libre."],
    ["Inventa una señal nueva para el cole con una forma y un color.", "Respuesta libre con forma y significado."],
  ],
  quiz: [
    ["¿Qué figura es redonda?", ["círculo", "cuadrado", "triángulo"], 0, "El círculo."],
    ["¿Cuántos lados tiene el triángulo?", ["3", "4", "5"], 0, "3."],
    ["El cuadrado tiene 4 lados…", ["iguales", "curvos", "distintos"], 0, "Iguales."],
    ["Una puerta tiene forma de…", ["rectángulo", "círculo", "óvalo"], 0, "Rectángulo."],
    ["Un huevo tiene forma de…", ["óvalo", "cuadrado", "triángulo"], 0, "Óvalo."],
    ["Una nube tiene forma…", ["libre", "cuadrada", "triangular"], 0, "Libre."],
    ["El tejado de una casa suele ser un…", ["triángulo", "círculo", "óvalo"], 0, "Triángulo."],
    ["¿Qué figura no tiene esquinas?", ["círculo", "cuadrado", "rectángulo"], 0, "El círculo."],
    ["Un collage se hace…", ["pegando papeles", "con plastilina", "con agua"], 0, "Pegando papeles."],
    ["La señal de peligro es un…", ["triángulo", "círculo", "óvalo"], 0, "Triángulo."],
    ["Lo que está lejos se dibuja…", ["más pequeño", "más grande", "igual"], 0, "Más pequeño."],
    ["Un gato puede empezar con un círculo y dos…", ["triángulos", "rectángulos", "óvalos"], 0, "Triángulos de orejas."],
  ],
  examen: [
    ["¿Qué figura tiene 3 lados?", ["triángulo", "cuadrado", "círculo"], 0, "Triángulo."],
    ["Una moneda es un…", ["círculo", "cuadrado", "rectángulo"], 0, "Círculo."],
    ["Un libro es un…", ["rectángulo", "óvalo", "triángulo"], 0, "Rectángulo."],
    ["Una hoja de árbol tiene forma…", ["libre", "cuadrada", "redonda perfecta"], 0, "Libre."],
    ["Una casa es un cuadrado con un…", ["triángulo", "óvalo", "círculo"], 0, "Triángulo encima."],
    ["Matisse hacía collages con…", ["recortes de papel", "barro", "piedras"], 0, "Recortes de papel."],
  ],
  feynman: ["Cómo distinguir círculo, cuadrado y triángulo", "Qué son las formas libres", "Cómo dibujar algo con figuras"],
  mapa: ["FORMAS", [["Círculo", "redondo", R], ["Cuadrado", "4 lados iguales", A], ["Triángulo", "3 lados", V], ["Libres", "nube · hoja", N]], 230],
  tarjetas: [
    ["Círculo", "Redondo, sin esquinas"],
    ["Cuadrado", "4 lados iguales"],
    ["Triángulo", "3 lados y 3 picos"],
    ["Rectángulo", "2 lados largos y 2 cortos"],
    ["Óvalo", "Como un huevo"],
    ["Forma libre", "Como una nube o una hoja"],
    ["Casa con formas", "Cuadrado + triángulo"],
    ["Collage", "Obra con papeles pegados"],
    ["Señal de peligro", "Triángulo"],
    ["Lo que está lejos", "Se dibuja más pequeño"],
  ],
  glosario: [
    ["Forma", "El dibujo del borde de una cosa."],
    ["Figura geométrica", "Forma con lados rectos o curvas perfectas."],
    ["Lado", "Cada línea recta del borde de una figura."],
    ["Esquina", "El pico donde se juntan dos lados."],
    ["Círculo", "Figura redonda, sin esquinas."],
    ["Óvalo", "Círculo estirado, con forma de huevo."],
    ["Forma libre", "Forma que no es ninguna figura geométrica."],
    ["Collage", "Obra hecha pegando recortes."],
  ],
  situacion: ["La ciudad de las formas", "Vamos a construir entre todos la ciudad de la lectura en un mural.", ["Cada grupo recorta figuras de papel de colores.", "Construimos casas, coches y árboles combinando formas.", "Añadimos formas libres: nubes, charcos y hojas.", "Presentamos la ciudad y contamos qué formas hay."], "un mural-collage de la ciudad de las formas.", ["Reconoce y nombra las figuras.", "Combina formas para crear objetos.", "Usa formas geométricas y libres."]],
  familias: [
    "Jugad a buscar formas en casa: ¿qué es redondo, qué es rectangular?",
    "Preparad una bolsa misteriosa con objetos de distintas formas.",
    "Recortad formas de revistas y haced un collage juntos.",
    "Fijaos en las señales de tráfico y su forma de camino al cole.",
  ],
  saberes: "Elementos del lenguaje plástico: la forma. Figuras geométricas básicas, formas libres, tamaño, composición con figuras y técnica del collage",
  ideas: ["Bolsa misteriosa para reconocer formas con el tacto.", "Collage colectivo de la ciudad de las formas.", "Paseo por el entorno del centro buscando señales.", "Dibujar personajes a partir de figuras geométricas."],
});
