// Matemáticas 4º de Primaria: medidas de masa y capacidad. Dibujos propios en SVG.
const P = require("./_pri4a");
const { svg, t, AZ, RO, VE, NA, SO, MO } = P;

// Balanza de dos platos: texto en cada plato; inclinación (positiva: baja la derecha).
const balanza = (iz, de, inc = 0) => {
  const y1 = 70 - inc, y2 = 70 + inc;
  return `<path d="M130 150 V 52" stroke="var(--ink)" stroke-width="3"/><path d="M100 150 H 160" stroke="var(--ink)" stroke-width="4"/><path d="M60 ${y1} L 200 ${y2}" stroke="var(--ink)" stroke-width="3"/><circle cx="130" cy="70" r="5" fill="var(--ink)"/>
  <path d="M60 ${y1} V ${y1 + 26} M200 ${y2} V ${y2 + 26}" stroke="var(--muted)" stroke-width="1.5"/><path d="M30 ${y1 + 26} H 90 Q 60 ${y1 + 44} 30 ${y1 + 26} Z" fill="${AZ}" fill-opacity=".25" stroke="${AZ}" stroke-width="2"/><path d="M170 ${y2 + 26} H 230 Q 200 ${y2 + 44} 170 ${y2 + 26} Z" fill="${VE}" fill-opacity=".25" stroke="${VE}" stroke-width="2"/>${t(60, y1 + 18, iz, { s: 11 })}${t(200, y2 + 18, de, { s: 11 })}`;
};
// Recipiente con nivel de líquido (0-1), en x con ancho w y alto h.
const vaso = (x, y, w, h, nivel, c = AG()) => `<rect x="${x}" y="${y + h * (1 - nivel)}" width="${w}" height="${h * nivel}" fill="${c}" fill-opacity=".45"/><path d="M${x} ${y} V ${y + h} H ${x + w} V ${y}" fill="none" stroke="var(--ink)" stroke-width="2.4"/>`;
function AG() { return P.AG; }

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Medidas de masa y capacidad",
  minutos: 50,
  objetivos: ["Conocer el kilogramo y el gramo como unidades de masa", "Conocer el litro y sus submúltiplos como unidades de capacidad", "Cambiar de unidad multiplicando o dividiendo por 10, 100 y 1 000", "Elegir la unidad adecuada y resolver problemas de masa y capacidad"],
  claves: ["masa", "peso", "kilogramo (kg)", "gramo (g)", "miligramo", "tonelada", "medio kilo", "capacidad", "litro (l)", "decilitro", "centilitro", "mililitro", "balanza", "recipiente"],
  pregunta: ["¿Qué pesa más, un kilo de plumas o un kilo de hierro?", "¡Pesan <b>lo mismo</b>! Los dos tienen una <mark>masa de 1 kilogramo</mark>. Lo que pasa es que el kilo de plumas ocupa muchísimo más espacio. La masa nos dice cuánta materia tiene un objeto, no lo grande que es."],
  bloques: [
    ["La masa y cómo se mide", `<p>La <b>masa</b> es la cantidad de materia que tiene un objeto. En el lenguaje de todos los días la llamamos <b>peso</b>: «¿cuánto pesa esta sandía?».</p><p>La masa se mide con la <b>balanza</b> o la <b>báscula</b>. En una balanza de dos platos, el plato que baja es el que tiene <mark>más masa</mark>. Si los dos platos quedan a la misma altura, las masas son iguales.</p><p>Hoy usamos sobre todo básculas digitales: en la cocina, en la frutería o en el baño. Muestran el número directamente en una pantalla.</p>`,
      svg("Balanza de dos platos: el plato con la sandía baja porque tiene más masa", balanza("1 kg", "sandía", 16) + t(130, 26, "baja el que tiene más masa", { s: 11, c: "var(--muted)" }))],
    ["El kilogramo y el gramo", `<p>La unidad principal de masa es el <b>kilogramo (kg)</b>. Un paquete de azúcar o una botella grande de agua tienen 1 kg más o menos.</p><p>Para cosas ligeras usamos el <b>gramo (g)</b>:</p><p style="text-align:center"><mark>1 kg = 1 000 g</mark></p><p>Un gramo es muy poco: lo que pesa un clip o una alubia. Un folio pesa unos 5 g y una manzana unos 200 g.</p><p>También se usan <b>medio kilo</b> (1/2 kg = 500 g) y <b>un cuarto de kilo</b> (1/4 kg = 250 g). Por eso en la charcutería pedimos «un cuarto de jamón».</p>`,
      P.filas("Kilogramo, medio kilo y cuarto de kilo en gramos", [["1 kg", "1 000 g", AZ], ["1/2 kg", "500 g", VE], ["1/4 kg", "250 g", SO], ["1 clip", "≈ 1 g", RO]]),
      P.V("masB")],
    ["Otras unidades de masa", `<p>Igual que con la longitud, hay unidades mayores y menores que el gramo, y cada una es <b>10 veces</b> la siguiente:</p><p style="text-align:center"><b>kg · hg · dag · g · dg · cg · mg</b></p><p>Las más usadas son:</p><ul><li>El <b>miligramo (mg)</b>: 1 g = 1 000 mg. Aparece en los medicamentos.</li><li>La <b>tonelada (t)</b>: <mark>1 t = 1 000 kg</mark>. Sirve para cosas muy pesadas: un coche pesa más o menos 1 t y un elefante, unas 5 t.</li></ul><p>Para cambiar de unidad: al bajar, multiplicamos por 10 en cada escalón; al subir, dividimos entre 10.</p>`,
      svg("Escalera de unidades de masa de kilogramo a miligramo", `${[["kg", RO], ["hg", SO], ["dag", MO], ["g", AZ], ["dg", VE], ["cg", NA], ["mg", "var(--muted)"]].map(([u, c], i) => `<rect x="${12 + i * 34}" y="${24 + i * 16}" width="32" height="26" rx="5" fill="${c}" fill-opacity="${i === 3 || i === 0 ? 0.45 : 0.2}" stroke="${c}" stroke-width="2"/>${t(28 + i * 34, 42 + i * 16, u, { s: 11 })}`).join("")}${t(64, 150, "bajar: × 10", { s: 11, c: VE })}${t(196, 40, "1 t = 1 000 kg", { s: 11, c: RO })}`)],
    ["Cambiar unidades de masa", `<p>Los cambios más frecuentes son entre kilogramos y gramos:</p><ul><li>De <b>kg a g</b>: multiplicamos por <b>1 000</b>. 3 kg = 3 000 g.</li><li>De <b>g a kg</b>: dividimos entre <b>1 000</b>. 7 000 g = 7 kg.</li><li>De <b>t a kg</b>: multiplicamos por 1 000. 2 t = 2 000 kg.</li></ul><p>Medidas mezcladas: 2 kg y 300 g = 2 000 g + 300 g = <mark>2 300 g</mark>.</p><p>Pista para no equivocarte: si pasas a una unidad <b>más pequeña</b>, el número tiene que salir <b>más grande</b> (hacen falta más gramos que kilos para pesar lo mismo).</p>`,
      P.filas("Cambios entre unidades de masa", [["3 kg → g", "× 1 000 = 3 000 g", VE], ["7 000 g → kg", ": 1 000 = 7 kg", RO], ["2 t → kg", "× 1 000 = 2 000 kg", VE], ["2 kg y 300 g", "= 2 300 g", AZ]])],
    ["La capacidad y el litro", `<p>La <b>capacidad</b> es la cantidad de líquido (o de otra cosa) que <mark>cabe dentro de un recipiente</mark>: una botella, un vaso, una bañera…</p><p>La unidad principal de capacidad es el <b>litro (l)</b>. Muchas botellas de agua, de leche o de zumo tienen 1 litro.</p><p>También usamos:</p><ul><li><b>Medio litro</b>: 1/2 l. Dos medios litros llenan un litro.</li><li><b>Un cuarto de litro</b>: 1/4 l. Cuatro cuartos llenan un litro.</li></ul><p>Una lata de refresco tiene un poco más de un cuarto de litro.</p>`,
      svg("Un litro equivale a dos medios litros o a cuatro cuartos de litro", `${vaso(20, 40, 50, 90, 1)}${t(45, 150, "1 l", { s: 13 })}${t(84, 90, "=", { s: 16 })}${vaso(100, 74, 26, 56, 1)}${vaso(130, 74, 26, 56, 1)}${t(128, 150, "2 × 1/2 l", { s: 11 })}${t(170, 90, "=", { s: 16 })}${[0, 1, 2, 3].map((i) => vaso(184 + i * 17, 98, 14, 32, 1)).join("")}${t(214, 150, "4 × 1/4 l", { s: 11 })}`),
      P.V("masB2")],
    ["Submúltiplos del litro", `<p>Para recipientes pequeños usamos unidades menores que el litro:</p><ul><li><b>Decilitro (dl)</b>: 1 l = 10 dl. Un vaso pequeño.</li><li><b>Centilitro (cl)</b>: 1 l = 100 cl. Las latas de refresco suelen tener 33 cl.</li><li><b>Mililitro (ml)</b>: 1 l = 1 000 ml. Una cucharilla de jarabe tiene 5 ml.</li></ul><p>Y entre ellos: <mark>1 dl = 10 cl</mark> y <mark>1 cl = 10 ml</mark>.</p><p>Cambiamos de unidad igual que siempre: al bajar multiplicamos por 10 en cada escalón y al subir dividimos. Por ejemplo, 2 l = 200 cl = 2 000 ml.</p>`,
      P.filas("El litro y sus submúltiplos", [["1 l", "10 dl", AZ], ["1 l", "100 cl", VE], ["1 l", "1 000 ml", RO], ["1 lata", "33 cl", SO]], "unidades menores que el litro")],
    ["Elegir la unidad adecuada", `<p>Como en la longitud, elegimos la unidad más cómoda:</p>${P.tb(["masa", "unidad", "capacidad", "unidad"], [["una pastilla", "mg", "una cucharilla", "ml"], ["una manzana", "g", "un vaso", "cl o dl"], ["una persona", "kg", "una botella", "l"], ["un camión", "t", "una piscina", "miles de l"]])}<p>Es importante no confundir <b>masa</b> y <b>capacidad</b>: una botella de 1 l de agua pesa más o menos 1 kg, pero una botella de 1 l de aceite pesa algo menos. La capacidad dice <mark>cuánto cabe</mark>; la masa, <mark>cuánto pesa</mark>.</p>`,
      svg("Masa y capacidad son magnitudes distintas: la balanza mide la masa y la jarra la capacidad", `<rect x="20" y="50" width="100" height="84" rx="12" fill="var(--card)" stroke="${AZ}" stroke-width="2"/>${t(70, 80, "MASA", { s: 14, c: AZ })}${t(70, 104, "kg · g · t", { s: 12 })}${t(70, 124, "¿cuánto pesa?", { s: 10, c: "var(--muted)" })}<rect x="140" y="50" width="100" height="84" rx="12" fill="var(--card)" stroke="${P.AG}" stroke-width="2"/>${t(190, 80, "CAPACIDAD", { s: 13, c: P.AG })}${t(190, 104, "l · cl · ml", { s: 12 })}${t(190, 124, "¿cuánto cabe?", { s: 10, c: "var(--muted)" })}${t(130, 160, "dos preguntas distintas", { s: 11, c: "var(--muted)" })}`)],
    ["Estimar masas y capacidades", `<p>Tener algunas <b>referencias</b> ayuda a estimar:</p><ul><li>Un paquete de harina: <b>1 kg</b>.</li><li>Una tableta de chocolate: <b>100 g</b>.</li><li>Un niño de 9 años: unos <b>30 kg</b>.</li><li>Un vaso de agua: unos <b>20 cl</b> (un quinto de litro).</li><li>Un cubo de fregar: unos <b>10 l</b>.</li><li>Una bañera llena: unos <b>150 l</b>.</li></ul><p>Así, si alguien dice que su gato pesa 400 kg, sabrás que se ha equivocado: ¡eso es lo que pesa una vaca! Seguramente quería decir <mark>4 kg</mark>.</p>`,
      P.filas("Referencias para estimar masa y capacidad", [["Harina", "1 kg", AZ], ["Chocolate", "100 g", SO], ["Vaso de agua", "≈ 20 cl", VE], ["Cubo", "≈ 10 l", RO]])],
    ["Problemas de masa y capacidad", `<p>Recuerda pasar todo a la <mark>misma unidad</mark> antes de operar.</p><p><i>Para un bizcocho necesito 1/2 kg de harina y 250 g de azúcar. ¿Cuántos gramos uso en total?</i></p><p>1/2 kg = 500 g. 500 + 250 = <b>750 g</b>.</p><p><i>Una garrafa tiene 5 l de agua. ¿Cuántos vasos de 25 cl se pueden llenar?</i></p><p>5 l = 500 cl. 500 : 25 = <b>20 vasos</b>.</p><p>Comprueba siempre si el resultado es razonable: 20 vasos con una garrafa grande parece lógico.</p>`,
      svg("Garrafa de 5 litros que llena veinte vasos de 25 centilitros", `${vaso(26, 40, 70, 100, 0.85)}${t(61, 156, "5 l = 500 cl", { s: 11 })}${P.flecha(104, 90, 132, 90, RO)}${[...Array(20)].map((_, i) => vaso(140 + (i % 5) * 20, 40 + Math.floor(i / 5) * 26, 14, 20, 0.8)).join("")}${t(188, 156, "500 : 25 = 20", { s: 11, c: RO })}`)],
  ],
  figura: ["Masa y capacidad", P.columnas("Resumen: masa, gramos y toneladas, capacidad y litro", [["¿cuánto pesa?", "MASA", ["kg · balanza", "1 kg = 1 000 g"], AZ], ["muy pesado", "TONELADA", ["1 t", "= 1 000 kg"], RO], ["¿cuánto cabe?", "CAPACIDAD", ["litro (l)", "1/2 l · 1/4 l"], VE], ["más pequeñas", "dl · cl · ml", ["1 l = 100 cl", "1 l = 1 000 ml"], SO]])],
  video: P.V("masV", true),
  ejemplos: [
    ["Expresa 3 kg y 450 g en gramos.", ["3 kg = 3 000 g.", "3 000 + 450 = 3 450 g."], "3 450 g"],
    ["¿Cuántos centilitros hay en 3 l y medio?", ["3 l = 300 cl.", "Medio litro = 50 cl.", "300 + 50 = 350 cl."], "350 cl"],
    ["Un camión lleva 4 t de arena y descarga 1 500 kg. ¿Cuántos kilos quedan?", ["4 t = 4 000 kg.", "4 000 − 1 500 = 2 500 kg."], "2 500 kg"],
  ],
  errores: [
    "Confundir masa (cuánto pesa) con capacidad (cuánto cabe).",
    "Pensar que 1 kg son 100 g (son 1 000 g).",
    "Dividir cuando hay que multiplicar al pasar a una unidad menor.",
    "Operar con unidades distintas sin cambiarlas antes (1 kg + 300 g no es 301).",
    "Creer que lo que ocupa más espacio pesa más (el kilo de plumas).",
  ],
  ejercicios: [
    ["¿Cuántos gramos son 5 kg? ¿Y medio kilo?", "5 000 g y 500 g."],
    ["Pasa 9 000 g a kilos y 3 t a kilos.", "9 kg y 3 000 kg."],
    ["¿Cuántos mililitros son 2 l?", "2 000 ml."],
    ["Pasa 400 cl a litros.", "4 l."],
    ["¿Qué unidad usarías para medir la masa de un caballo y la capacidad de una taza?", "kg y cl (o ml)."],
    ["Ordena de menor a mayor: 1 kg, 750 g, 1 200 g.", "750 g &lt; 1 kg &lt; 1 200 g."],
    ["Compro 1/4 kg de queso y 1/2 kg de jamón. ¿Cuántos gramos compro en total?", "250 + 500 = 750 g."],
    ["Una jarra tiene 2 l de limonada. Sirvo 6 vasos de 25 cl. ¿Cuánta limonada queda?", "2 l = 200 cl; 6 × 25 = 150 cl; quedan 50 cl."],
    ["Un ascensor puede llevar 450 kg. ¿Pueden subir a la vez 5 personas de 80 kg?", "5 × 80 = 400 kg: sí, sobran 50 kg."],
    ["¿Cuántas botellas de 1/2 l se llenan con una garrafa de 8 l?", "16 botellas."],
  ],
  quiz: [
    ["La unidad principal de masa es…", ["el kilogramo", "el litro", "el metro"], "Se mide con la balanza."],
    ["1 kg =", ["1 000 g", "100 g", "10 g"], "Kilo = mil."],
    ["Medio kilo son…", ["500 g", "50 g", "250 g"], "1 000 : 2."],
    ["1 t =", ["1 000 kg", "100 kg", "10 000 kg"], "Para cosas muy pesadas."],
    ["La capacidad es…", ["lo que cabe en un recipiente", "lo que pesa un objeto", "lo largo de un objeto"], "Se mide en litros."],
    ["1 l =", ["100 cl", "10 cl", "1 000 cl"], "Dos escalones."],
    ["Una lata de refresco suele tener…", ["33 cl", "33 l", "33 ml"], "Un poco más de 1/4 l."],
    ["Para medir un medicamento en gotas uso…", ["ml", "l", "kg"], "Cantidades muy pequeñas."],
    ["2 kg y 50 g =", ["2 050 g", "2 500 g", "250 g"], "2 000 + 50."],
    ["¿Qué pesa más, 1 kg de plumas o 1 kg de hierro?", ["pesan lo mismo", "el hierro", "las plumas"], "Los dos tienen 1 kg."],
  ],
  examen: [
    ["4 000 ml =", ["4 l", "40 l", "400 l"], "4 000 : 1 000."],
    ["Un cuarto de litro son…", ["25 cl", "4 cl", "250 cl"], "100 : 4."],
    ["Un niño de 9 años pesa unos…", ["30 kg", "30 g", "3 t"], "Referencia."],
    ["3 kg − 800 g =", ["2 200 g", "2 800 g", "2 kg"], "3 000 − 800."],
  ],
  feynman: ["Qué diferencia hay entre masa y capacidad", "Cuántos gramos tiene un kilo, medio kilo y un cuarto", "Para qué sirve la tonelada", "Cuáles son los submúltiplos del litro", "Cómo resuelves un problema con unidades distintas"],
  mapa: ["MASA Y CAPACIDAD", [["Masa", "kg · g · t · balanza", AZ], ["Equivalencias", "1 kg = 1 000 g · 1 t = 1 000 kg", RO], ["Capacidad", "litro · 1/2 l · 1/4 l", VE], ["Submúltiplos", "dl · cl · ml", SO]]],
  tarjetas: [
    ["Masa", "Cantidad de materia de un objeto; lo que pesa."],
    ["1 kilogramo", "1 000 gramos."],
    ["Medio kilo", "500 gramos."],
    ["1 tonelada", "1 000 kilogramos."],
    ["Capacidad", "Lo que cabe dentro de un recipiente."],
    ["1 litro", "10 dl = 100 cl = 1 000 ml."],
    ["Medio litro", "50 cl = 500 ml."],
    ["Balanza", "Instrumento para medir la masa."],
  ],
  familias: ["Leed juntos las etiquetas de los envases: gramos, kilos, litros y centilitros.", "Cocinad una receta sencilla pesando y midiendo los ingredientes.", "Estimad cuánto pesan algunas frutas y comprobadlo con la báscula de la cocina.", "Repasad las tarjetas dos minutos al día."],
  saberes: "Sentido de la medida: masa y capacidad; kilogramo, gramo, tonelada y miligramo; litro y sus submúltiplos; equivalencias, cambios de unidad, estimación y problemas de la vida cotidiana",
  ideas: ["Taller de cocina pesando y midiendo ingredientes.", "Rellenar recipientes de distinta forma con la misma capacidad.", "Estimación de masas con una báscula de cocina en el aula."],
});

// ---------- Nivel libro (4º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Distinguir la masa del tamaño de los objetos", "Leer la masa y la capacidad en las etiquetas y comparar precios", "Relacionar el litro con el decímetro cúbico y el kilogramo", "Calcular el agua que gastamos y proponer cómo ahorrarla"],
  lectura: { titulo: "Las magdalenas de Candela", html: `<p>El sábado, Candela y su tío Raúl decidieron hacer magdalenas. La receta de la abuela decía:</p><p><i>250 g de harina, 200 g de azúcar, 3 huevos, 125 ml de aceite y 1/4 de litro de leche.</i></p><p>Candela sacó la báscula de la cocina. Puso un bol encima y la báscula marcó 300 g.</p><p>—¡Pero si todavía no he echado nada!</p><p>—Es lo que pesa el bol —explicó su tío—. Pulsa este botón para poner la báscula a cero, y así solo pesarás la harina.</p><p>Candela lo hizo y fue echando harina hasta que la pantalla marcó 250.</p><p>Luego vino la leche. En la jarra medidora había rayitas: 100, 200, 250, 500 ml…</p><p>—Un cuarto de litro… ¿dónde está? —preguntó.</p><p>—Un litro son 1 000 mililitros. La cuarta parte es…</p><p>—¡250 ml! —gritó Candela, y llenó la jarra justo hasta esa raya.</p><p>Media hora después, la cocina olía de maravilla. Salieron doce magdalenas doradas.</p><p>—Si las hubiéramos hecho «a ojo» —dijo el tío Raúl—, quizá no habrían subido tanto. En la cocina, medir bien es la mitad del secreto.</p><p>Candela se comió una todavía caliente y pensó que las matemáticas, a veces, saben a limón.</p>` },
  tras: {
    "La masa y cómo se mide": [
      ["Masa y tamaño no son lo mismo", `<p>Una adivinanza muy antigua dice: <i>¿Qué pesa más, un kilo de paja o un kilo de hierro?</i> Mucha gente responde «el hierro», pero la respuesta correcta es que <mark>pesan lo mismo</mark>: un kilo es un kilo.</p><p>Lo que ocurre es que el kilo de paja ocupa muchísimo más <b>espacio</b> que el kilo de hierro. Por eso nos confunde.</p><p>La <b>masa</b> no depende del tamaño, sino de la cantidad de materia y de cómo de «apretada» esté:</p><ul><li>Un <b>globo</b> grande lleno de aire tiene muy poca masa.</li><li>Una <b>canica</b> de cristal, pequeña, pesa más que muchas bolitas de corcho del mismo tamaño.</li><li>Una <b>almohada</b> de plumas es grande pero ligera; un <b>libro</b> gordo, más pequeño, pesa más.</li><li>Una <b>pelota de playa</b> y una <b>bola de petanca</b>: la de playa es mayor, pero la de petanca pesa mucho más.</li></ul><p>Por eso no podemos saber cuánto pesa algo solo mirándolo. Hay que <b>cogerlo</b> para estimarlo, o mejor, <b>medirlo con la báscula</b>.</p><p>Esta propiedad, cuánta masa hay en un espacio, la estudiarás más adelante en Ciencias con el nombre de <b>densidad</b>. Por ella, unas cosas flotan en el agua y otras se hunden.</p>`,
        H6.dos("1 kilo", ["PAJA", ["1 kg", "mucho", "espacio"], cNA], ["HIERRO", ["1 kg", "poco", "espacio"], cAZ])],
    ],
    "Submúltiplos del litro": [
      ["Leer etiquetas", `<p>Todos los productos envasados deben indicar en la etiqueta <b>cuánto contienen</b>. Fíjate la próxima vez que vayas a la compra:</p><ul><li>Los <b>sólidos</b> indican la masa: «<b>peso neto</b> 500 g», «1 kg».</li><li>Los <b>líquidos</b> indican la capacidad: «1 L», «33 cl», «750 ml».</li><li>Algunos alimentos que vienen en líquido, como las aceitunas o el atún, indican también el <b>peso escurrido</b>: lo que pesa el alimento sin el líquido.</li><li>A veces aparece una <b>e</b> pequeña junto a la cantidad. Indica que el envase cumple las normas europeas sobre la cantidad que contiene.</li></ul><p>En las tiendas también hay que fijarse en el <mark>precio por kilo o por litro</mark>, que suele aparecer en letra pequeña en la etiqueta de la estantería. Así podemos comparar envases de distinto tamaño.</p><p>Ejemplo: una botella de zumo de 1 L cuesta 2 €; otra de 500 ml cuesta 1,20 €. ¿Cuál sale más barata?</p><ul><li>500 ml es medio litro: dos botellas pequeñas hacen 1 L y cuestan 2,40 €.</li><li>La grande sale más barata: 2 € el litro frente a 2,40 €.</li></ul><p>¡No siempre el envase grande es más barato! Por eso conviene comparar.</p>`,
        L6.filas("Etiquetas", [["peso neto", "500 g", cAZ], ["escurrido", "sin líquido", cVE], ["capacidad", "33 cl", cNA], ["precio", "por kilo o litro", cRO]])],
    ],
    "Problemas de masa y capacidad": [
      ["Problemas de varios pasos", `<p>En la vida real los problemas de masa y capacidad suelen mezclar <b>unidades</b> y <b>precios</b>. Lee bien y resuelve paso a paso.</p><p><b>Problema 1.</b> <i>Las manzanas cuestan 2 € el kilo. Compro 1 kg y 500 g. ¿Cuánto pago?</i></p><ol><li>500 g es medio kilo, que cuesta 1 €.</li><li>Pago 2 € + 1 € = <b>3 €</b>.</li></ol><p><b>Problema 2.</b> <i>Una garrafa tiene 5 L de agua. Lleno 8 vasos de 25 cl. ¿Cuánta agua queda?</i></p><ol><li>Paso todo a centilitros: 5 L = 500 cl.</li><li>Los vasos: 8 × 25 = 200 cl.</li><li>Quedan 500 − 200 = <b>300 cl</b>, es decir, <b>3 L</b>.</li></ol><p><b>Problema 3.</b> <i>Un camión puede cargar 3 toneladas. Lleva 40 sacos de 50 kg. ¿Cuántos kilos más puede cargar?</i></p><ol><li>3 t = 3 000 kg.</li><li>Los sacos: 40 × 50 = 2 000 kg.</li><li>Puede cargar 3 000 − 2 000 = <b>1 000 kg</b> más.</li></ol><p>Recuerda: <mark>primero, todo a la misma unidad</mark>; después, opera; y al final, escribe la respuesta con la unidad.</p>`,
        H6.flujo("Resolver", ["unidad|la misma", "operar|por pasos", "responder|con unidad", "revisar|¿sentido?"], cVE)],
    ],
  },
  final: [
    ["El litro, el decímetro cúbico y el kilo", `<p>Hay una relación muy curiosa entre la capacidad, el volumen y la masa, que inventaron los mismos científicos que crearon el metro.</p><p>Imagina una caja con forma de cubo cuyos lados miden <b>10 cm</b> (es decir, 1 decímetro). Su espacio interior es un <b>decímetro cúbico</b> (dm³). Si la llenas de agua, cabe exactamente <mark>1 litro</mark>.</p><p style="text-align:center">1 L = 1 dm³</p><p>Y ese litro de agua pura tiene una masa de <b>1 kilogramo</b>. De hecho, al principio el kilogramo se definió así: la masa de un litro de agua.</p><p>Otra relación útil: un cubito de <b>1 cm</b> de lado (1 cm³) contiene <b>1 mililitro</b>, y si es de agua, pesa <b>1 gramo</b>.</p><ul><li>1 L de agua → 1 dm³ → 1 kg</li><li>1 ml de agua → 1 cm³ → 1 g</li></ul><p>¡Ojo! Esto solo funciona con el agua. Un litro de aceite pesa menos de un kilo (por eso el aceite flota en el agua) y un litro de miel pesa más.</p><p>Gracias a esta relación, si una piscina tiene 50 000 litros, sabemos que el agua pesa unos 50 000 kg, ¡como diez elefantes!</p>`,
      L6.filas("Agua", [["1 L", "1 dm³", cAZ], ["1 L de agua", "1 kg", cVE], ["1 ml", "1 cm³", cNA], ["1 ml de agua", "1 g", cRO]])],
    ["¿Cuánta agua gastamos?", `<p>El agua es un recurso valioso y en muchas zonas de España escasea, sobre todo en épocas de <b>sequía</b>. Saber cuánta gastamos es el primer paso para ahorrarla.</p><p>Algunos gastos aproximados:</p><ul><li><b>Ducha</b> de 5 minutos: entre 50 y 100 litros.</li><li><b>Bañera</b> llena: unos 200 litros.</li><li><b>Cisterna</b> del váter: entre 6 y 10 litros cada vez.</li><li><b>Grifo abierto</b>: puede salir más de 10 litros por minuto.</li><li><b>Lavadora</b>: unos 50 litros por lavado.</li></ul><p>En España, cada persona gasta en casa unos <mark>130 litros al día</mark>. ¡Son 130 botellas grandes de agua!</p><p>Ideas para ahorrar:</p><ul><li>Ducharse en lugar de bañarse, y no muy largo.</li><li>Cerrar el grifo mientras te lavas los dientes o te enjabonas: si tardas 2 minutos, ahorras unos 20 litros cada vez.</li><li>Poner la lavadora y el lavavajillas solo cuando estén llenos.</li><li>Arreglar los grifos que gotean: un goteo puede desperdiciar muchos litros al día.</li><li>Regar las plantas al atardecer, cuando el agua se evapora menos.</li></ul><p>Calcula con tu familia cuánta agua gastáis un día. Te sorprenderá.</p>`,
      L6.filas("Gasto de agua", [["ducha 5 min", "50-100 L", cAZ], ["bañera", "unos 200 L", cRO], ["cisterna", "6-10 L", cNA], ["por persona", "130 L al día", cVE]]), ["EhfLMKOd8J0", "Uso del agua - Explicado para niños: Planeta Darwin", "CNTV Infantil", 761911]],
  ],
  ejemplos: [
    ["El aceite cuesta 8 € el litro. ¿Cuánto cuesta una botella de 750 ml?", ["1 L = 1 000 ml; 250 ml cuestan 2 €.", "750 ml = 3 × 250 ml."], "6 €."],
    ["¿Cuántos kilos pesa el agua de un acuario de 60 litros?", ["1 L de agua pesa 1 kg.", "60 × 1."], "60 kg."],
  ],
  errores: ["Pensar que un objeto grande siempre pesa más que uno pequeño.", "Operar con medidas en unidades distintas sin pasarlas antes a la misma."],
  ejercicios: [
    ["b", "¿Qué pesa más, 1 kg de plumas o 1 kg de piedras?", "Pesan lo mismo."],
    ["b", "¿Cuántos litros caben en 1 dm³?", "1 litro."],
    ["b", "¿Cuánto pesa 1 litro de agua?", "1 kg."],
    ["b", "¿Qué significa «peso neto» en una etiqueta?", "La masa del producto sin el envase."],
    ["b", "¿Cuántos litros de agua gasta en casa cada persona al día en España?", "Unos 130 litros."],
    ["m", "Las peras cuestan 3 € el kilo. ¿Cuánto cuestan 2 kg y medio?", "7,50 €."],
    ["m", "Una botella de 1,5 L. ¿Cuántos vasos de 25 cl se llenan?", "150 : 25 = 6 vasos."],
    ["m", "¿Qué sale más barato: 1 kg de arroz por 1,80 € o 2 paquetes de 500 g a 0,95 € cada uno?", "El de 1 kg (1,80 € frente a 1,90 €)."],
    ["m", "Si te duchas 5 minutos y salen 12 L por minuto, ¿cuánta agua gastas?", "60 L."],
    ["m", "¿Cuántos gramos pesan 250 ml de agua?", "250 g."],
    ["a", "Compara en el supermercado el precio por kilo de tres envases de un mismo producto.", "Respuesta abierta."],
    ["a", "Calcula el agua que gasta tu familia en una semana y propón cómo reducirla.", "Respuesta abierta."],
    ["a", "Construye un cubo de cartulina de 10 cm de lado y comprueba que cabe 1 L de arroz o arena.", "Respuesta abierta."],
    ["a", "Un camión de 5 t lleva 60 cajas de 75 kg. ¿Puede cargar 10 cajas más?", "60 × 75 = 4 500 kg; quedan 500 kg; 10 cajas son 750 kg: no."],
  ],
  quiz: [
    ["Un kilo de paja y un kilo de hierro…", ["pesan lo mismo", "pesa más el hierro", "pesa más la paja"], "Masa y tamaño."],
    ["1 L de agua pesa…", ["1 kg", "1 g", "10 kg"], "Relación."],
    ["El peso escurrido es…", ["lo que pesa el alimento sin el líquido", "lo que pesa el envase", "el peso del agua"], "Etiquetas."],
    ["3 t son…", ["3 000 kg", "300 kg", "30 kg"], "Problemas."],
    ["Una ducha de 5 minutos gasta…", ["entre 50 y 100 L", "1 L", "1 000 L"], "Agua."],
  ],
  examen: [
    ["En la lectura, ¿por qué la báscula marcaba 300 g antes de echar harina?", ["por el peso del bol", "porque estaba rota", "por la harina"], "Lectura."],
    ["1 cm³ de agua pesa…", ["1 g", "1 kg", "100 g"], "Relación."],
  ],
  tarjetas: [
    ["Masa y tamaño", "Un kilo es un kilo: la paja ocupa más espacio que el hierro."],
    ["Etiquetas", "Peso neto, peso escurrido, capacidad y precio por kilo o litro."],
    ["Problemas", "Misma unidad, operar paso a paso, respuesta con unidad."],
    ["Agua", "1 L = 1 dm³ = 1 kg de agua; unos 130 L por persona al día."],
  ],
  glosario: [
    ["Masa", "Cantidad de materia de un objeto."],
    ["Báscula", "Aparato para medir la masa."],
    ["Capacidad", "Cantidad que cabe en un recipiente."],
    ["Volumen", "Espacio que ocupa un cuerpo."],
    ["Decímetro cúbico", "Cubo de 10 cm de lado; en él cabe 1 litro."],
    ["Peso neto", "Masa del producto sin envase."],
    ["Peso escurrido", "Masa del alimento sin el líquido."],
    ["Precio por kilo", "Lo que cuesta un kilogramo de un producto."],
    ["Tonelada", "Mil kilogramos."],
    ["Densidad", "Cuánta masa hay en un espacio determinado."],
    ["Sequía", "Largo periodo sin lluvias suficientes."],
    ["Jarra medidora", "Recipiente con marcas para medir líquidos."],
  ],
  situacion: {
    titulo: "Detectives del agua",
    reto: "La clase calcula cuánta agua se gasta en el colegio y en casa y propone medidas de ahorro.",
    pasos: ["Medid con una jarra cuánta agua sale de un grifo en un minuto.", "Calculad el gasto de lavarse las manos, la cisterna y la fuente del patio.", "Registrad durante una semana el gasto de agua en casa con ayuda de la familia.", "Elaborad carteles con datos y consejos para ahorrar."],
    producto: "Un informe con mediciones y carteles de ahorro de agua.",
    evaluacion: ["Mide capacidades con precisión.", "Cambia de unidad correctamente.", "Resuelve problemas de varios pasos.", "Propone acciones responsables."],
  },
});
