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
