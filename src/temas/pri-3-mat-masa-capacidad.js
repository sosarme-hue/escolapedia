// Matemáticas 3º de Primaria: medidas de masa y capacidad. Dibujos propios en SVG.
const P = require("./_pri3a");
const { svg, t, AZ, RO, VE, NA, SO, MO, AG } = P;

// Balanza de dos platos inclinada (incl > 0: baja el plato izquierdo). Etiquetas en los platos.
const balanza = (cx, cy, izq, der, incl = 0) => {
  const dy = incl * 12;
  return `<path d="M${cx} ${cy} V ${cy + 70} M${cx - 30} ${cy + 70} H ${cx + 30}" stroke="var(--ink)" stroke-width="3"/><path d="M${cx - 70} ${cy + dy} L ${cx + 70} ${cy - dy}" stroke="var(--ink)" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="4" fill="var(--ink)"/>${[[-70, dy, izq], [70, -dy, der]].map(([dx, d, txt]) => `<path d="M${cx + dx} ${cy + d} v 18" stroke="var(--muted)" stroke-width="1.5"/><path d="M${cx + dx - 30} ${cy + d + 18} q 30 16 60 0 Z" fill="${SO}" fill-opacity=".3" stroke="var(--ink)" stroke-width="1.8"/><circle cx="${cx + dx}" cy="${cy + d + 18 - (dx < 0 ? 11 : 6)}" r="${dx < 0 ? 11 : 6}" fill="${RO}" fill-opacity=".7"/>${t(cx + dx, cy + d + 44, txt, { s: 11.5 })}`).join("")}`;
};
// Botella o jarra con nivel de líquido (0 a 1).
const jarra = (x, y, w, h, nivel, c = AG, label = "") => `<rect x="${x}" y="${y + h * (1 - nivel)}" width="${w}" height="${h * nivel}" fill="${c}" fill-opacity=".45"/><path d="M${x} ${y} V ${y + h} H ${x + w} V ${y}" fill="none" stroke="var(--ink)" stroke-width="2"/>${label ? t(x + w / 2, y + h + 16, label, { s: 11.5 }) : ""}`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Medidas de masa y capacidad",
  minutos: 50,
  objetivos: ["Distinguir la masa (lo que pesa algo) de la capacidad (lo que cabe en un recipiente)", "Conocer el kilo, el medio kilo, el cuarto de kilo y el gramo", "Conocer el litro, el medio litro, el cuarto de litro y el mililitro", "Elegir la unidad adecuada, comparar medidas y resolver problemas"],
  claves: ["masa", "peso", "balanza", "báscula", "kilogramo (kg)", "gramo (g)", "medio kilo", "cuarto de kilo", "capacidad", "litro (l)", "mililitro (ml)", "medio litro", "cuarto de litro"],
  pregunta: ["¿Qué pesa más, un kilo de plumas o un kilo de hierro?", "¡Pesan <mark>lo mismo</mark>: un kilo! El hierro es más pequeño y las plumas ocupan muchísimo más, pero los dos tienen la misma <b>masa</b>. En este tema aprenderemos a medir cuánto pesan las cosas y cuánto líquido cabe en un recipiente."],
  bloques: [
    ["¿Qué es la masa?", `<p>La <b>masa</b> es la cantidad de materia que tiene un objeto. En la vida diaria decimos «cuánto <b>pesa</b>». Una sandía tiene más masa que una cereza.</p><p>Para medir la masa usamos la <b>balanza</b> o la <b>báscula</b>:</p><ul><li>La <b>balanza de dos platos</b> compara: el plato que baja tiene <mark>más masa</mark>. Si quedan a la misma altura, las dos cosas pesan igual.</li><li>La <b>báscula</b> nos dice directamente el número: 3 kg.</li></ul><p>Ojo: algo grande no siempre pesa más. Un globo es más grande que una piedra, ¡pero pesa mucho menos!</p>`,
      svg("Balanza de dos platos: la manzana pesa más que la fresa y su plato baja", `${balanza(130, 40, "manzana", "fresa", 1)}${t(130, 168, "baja el que pesa más", { s: 13, c: RO })}`)],
    ["El kilogramo y el gramo", `<p>La unidad principal de masa es el <b>kilogramo</b> o <b>kilo</b>, que se escribe <mark>kg</mark>. Pesan 1 kg un paquete de azúcar o una botella grande de agua (de 1 litro).</p><p>Para cosas ligeras usamos el <b>gramo</b>, que se escribe <mark>g</mark>. Un gramo es muy poquito: lo que pesa un clip o una judía seca.</p><p style="text-align:center"><b>1 kg = 1.000 g</b></p><p>Pesamos en kilos a las personas, la fruta o las maletas; y en gramos, una carta, un yogur (125 g) o una tableta de chocolate (100 g).</p>`,
      svg("Un paquete de azúcar de un kilo equivale a mil clips de un gramo", `<rect x="28" y="40" width="70" height="90" rx="6" fill="${AZ}" fill-opacity=".2" stroke="${AZ}" stroke-width="2"/>${t(63, 80, "AZÚCAR", { s: 11, c: AZ })}${t(63, 104, "1 kg", { s: 18, d: true, c: AZ })}${t(130, 90, "=", { s: 26 })}${[...Array(12)].map((_, i) => `<rect x="${166 + (i % 4) * 18}" y="${54 + Math.floor(i / 4) * 20}" width="12" height="6" rx="3" fill="none" stroke="${MO}" stroke-width="1.6"/>`).join("")}${t(200, 124, "1.000 clips", { s: 11, c: MO })}${t(200, 140, "de 1 g", { s: 11, c: MO })}${t(130, 168, "1 kg = 1.000 g", { s: 16, d: true, c: RO })}`)],
    ["Medio kilo y cuarto de kilo", `<p>En las tiendas se usan mucho las <b>fracciones</b> del kilo:</p><ul><li><b>Medio kilo</b> (1/2 kg) = <mark>500 g</mark>.</li><li><b>Un cuarto de kilo</b> (1/4 kg) = <mark>250 g</mark>.</li><li><b>Tres cuartos de kilo</b> (3/4 kg) = 750 g.</li></ul><p>Así, 1 kg = 2 medios kilos = 4 cuartos de kilo.</p><p>En el mercado puedes pedir: «Póngame un cuarto de kilo de queso y medio kilo de cerezas».</p>`,
      svg("Un kilo partido en dos medios kilos y en cuatro cuartos de kilo", `${[0, 1].map((i) => `<rect x="${24 + i * 108}" y="26" width="104" height="34" rx="6" fill="${VE}" fill-opacity=".25" stroke="${VE}" stroke-width="2"/>${t(76 + i * 108, 48, "1/2 kg = 500 g", { s: 11.5, c: VE })}`).join("")}${[0, 1, 2, 3].map((i) => `<rect x="${24 + i * 54}" y="76" width="50" height="34" rx="6" fill="${NA}" fill-opacity=".25" stroke="${NA}" stroke-width="2"/>${t(49 + i * 54, 92, "1/4 kg", { s: 10.5, c: NA })}${t(49 + i * 54, 104, "250 g", { s: 10.5, c: NA })}`).join("")}${t(130, 148, "1 kg = 2 medios = 4 cuartos", { s: 14, c: RO })}`)],
    ["¿Qué es la capacidad?", `<p>La <b>capacidad</b> es la cantidad de líquido (u otra cosa) que <mark>cabe</mark> dentro de un recipiente: una botella, un vaso, una piscina, una bañera…</p><p>Para comparar capacidades podemos llenar un recipiente y vaciarlo en otro. Si el agua rebosa, el segundo tiene <b>menos</b> capacidad. Si no se llena, tiene <b>más</b>.</p><p>¡Cuidado con las formas! Un vaso alto y estrecho puede tener la misma capacidad que uno bajo y ancho. Para saberlo hay que medir, no basta con mirar.</p>`,
      svg("Un vaso alto y estrecho y uno bajo y ancho con la misma cantidad de agua", `${jarra(52, 30, 36, 110, 0.7)}${jarra(150, 80, 80, 60, 0.75)}${t(70, 160, "alto y estrecho", { s: 11 })}${t(190, 160, "bajo y ancho", { s: 11 })}${t(130, 22, "¿cuál tiene más? ¡Mide!", { s: 12, c: RO })}`)],
    ["El litro y el mililitro", `<p>La unidad principal de capacidad es el <b>litro</b>, que se escribe <mark>l</mark> (o L). Un cartón de leche o una botella grande de agua tienen 1 litro.</p><p>Para cantidades pequeñas usamos el <b>mililitro</b>, que se escribe <mark>ml</mark>. Una cucharadita de jarabe tiene unos 5 ml; una lata de refresco, 330 ml.</p><p style="text-align:center"><b>1 l = 1.000 ml</b></p><p>Usamos litros para el agua de una bañera (unos 150 l), la gasolina o el aceite; y mililitros para las medicinas, los perfumes o los zumos pequeños.</p>`,
      svg("Un cartón de leche de un litro y una cucharilla de cinco mililitros", `<path d="M40 50 L 60 30 H 100 L 120 50 V 140 H 40 Z" fill="var(--card)" stroke="${AZ}" stroke-width="2"/><path d="M40 50 H 120" stroke="${AZ}" stroke-width="2"/>${t(80, 86, "LECHE", { s: 12, c: AZ })}${t(80, 112, "1 l", { s: 22, d: true, c: AZ })}<ellipse cx="190" cy="100" rx="18" ry="9" fill="${RO}" fill-opacity=".3" stroke="var(--ink)" stroke-width="1.6"/><path d="M208 98 L 244 90" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>${t(196, 132, "5 ml", { s: 16, d: true, c: RO })}${t(130, 166, "1 l = 1.000 ml", { s: 15, c: VE })}`)],
    ["Medio litro y cuarto de litro", `<p>Igual que con el kilo, con el litro usamos fracciones:</p><ul><li><b>Medio litro</b> (1/2 l) = <mark>500 ml</mark>. Una botella pequeña de agua.</li><li><b>Un cuarto de litro</b> (1/4 l) = <mark>250 ml</mark>. Un vaso, más o menos.</li><li><b>Tres cuartos de litro</b> (3/4 l) = 750 ml. Una botella de vino.</li></ul><p>Con 2 botellas de medio litro llenamos 1 litro, y con 4 vasos de un cuarto de litro, también.</p>`,
      svg("Un litro equivale a dos medios litros o a cuatro cuartos de litro", `${jarra(18, 40, 40, 90, 1, AG, "1 l")}${t(72, 90, "=", { s: 20 })}${jarra(86, 85, 26, 45, 1, VE, "")}${jarra(116, 85, 26, 45, 1, VE, "")}${t(114, 148, "2 × 1/2 l", { s: 11 })}${t(156, 90, "=", { s: 20 })}${[0, 1, 2, 3].map((i) => jarra(170 + i * 20, 108, 16, 22, 1, NA)).join("")}${t(208, 148, "4 × 1/4 l", { s: 11 })}`),
      P.V("masB")],
    ["¿Masa o capacidad? ¿Qué unidad uso?", `<p>Antes de medir, piensa qué quieres saber:</p><ul><li>¿Cuánto <b>pesa</b>? → <b>masa</b>: kg o g.</li><li>¿Cuánto <b>cabe</b> o cuánto líquido hay? → <b>capacidad</b>: l o ml.</li></ul>${P.tb(["objeto", "¿qué medimos?", "unidad"], [["una persona", "masa", "kg"], ["un caramelo", "masa", "g"], ["una piscina", "capacidad", "l"], ["un jarabe", "capacidad", "ml"]])}<p>Fíjate en las etiquetas de los productos del súper: el arroz pone «1 kg» y el aceite «1 l».</p>`,
      P.filas("Masa o capacidad", [["Masa", "kg y g: ¿cuánto pesa?", RO], ["Capacidad", "l y ml: ¿cuánto cabe?", AG], ["Arroz", "1 kg (masa)", NA], ["Aceite", "1 l (capacidad)", SO]])],
    ["Comparar y calcular", `<p>Para comparar, sumar o restar medidas, ponlas en la <mark>misma unidad</mark>.</p><p>¿Qué pesa más, 2 kg o 1.500 g? 2 kg = 2.000 g, y 2.000 &gt; 1.500. ¡Pesa más el de 2 kg!</p><p><b>Problema:</b> una jarra tiene 1 litro de zumo. Sirvo 3 vasos de 250 ml. ¿Cuánto queda?</p><ul><li>Lo que sirvo: 250 × 3 = 750 ml.</li><li>1 l = 1.000 ml. Queda: 1.000 − 750 = <b>250 ml</b> (un cuarto de litro).</li></ul>`,
      svg("Una jarra de un litro de la que se sirven tres vasos de 250 mililitros y quedan 250", `${jarra(24, 40, 54, 100, 0.25, NA, "quedan 250 ml")}${[0, 1, 2].map((i) => jarra(120 + i * 40, 92, 28, 48, 1, NA, "250")).join("")}${t(184, 76, "3 × 250 ml", { s: 12, c: RO })}${t(184, 60, "sirvo", { s: 11, c: RO })}${t(184, 28, "1 l = 1.000 ml", { s: 12, c: AZ })}`)],
    ["Estimar masas y capacidades", `<p>Es muy útil saber más o menos cuánto pesan o cuánto contienen las cosas. Algunas referencias:</p><ul><li>Un <b>huevo</b>: unos 60 g. Una <b>manzana</b>: unos 200 g.</li><li>Una <b>mochila</b> del cole no debería pesar más de 3 o 4 kg.</li><li>Un <b>vaso</b> de agua: unos 250 ml. Una <b>bañera</b>: unos 150 l.</li><li>Cada día deberías beber alrededor de <b>1 litro y medio</b> de agua.</li></ul><p>Juego: coge un objeto y adivina cuánto pesa. Después, pésalo en la báscula de la cocina. ¿Quién se acerca más?</p>`,
      P.filas("Masas y capacidades de referencia", [["Huevo", "unos 60 g", NA], ["Mochila", "no más de 3 o 4 kg", RO], ["Vaso", "unos 250 ml", AG], ["Bañera", "unos 150 l", AZ]])],
  ],
  figura: ["Medidas de masa y capacidad", P.columnas("Resumen: masa con kilos y gramos, capacidad con litros y mililitros", [["¿cuánto pesa?", "MASA", ["1 kg = 1.000 g", "1/2 kg = 500 g"], RO], ["balanza", "MEDIR MASA", ["báscula", "baja el que pesa más"], NA], ["¿cuánto cabe?", "CAPACIDAD", ["1 l = 1.000 ml", "1/2 l = 500 ml"], AG], ["misma unidad", "COMPARAR", ["2 kg = 2.000 g", "&gt; 1.500 g"], VE]])],
  video: P.V("masV", true),
  ejemplos: [
    ["Pasa a gramos: 3 kg y medio kilo.", ["3 kg = 3 × 1.000 = 3.000 g.", "Medio kilo = 1.000 : 2 = 500 g."], "3.000 g y 500 g"],
    ["¿Cuántos vasos de 250 ml se llenan con una botella de 2 litros?", ["2 l = 2.000 ml.", "2.000 : 250 = 8."], "8 vasos"],
    ["Compro 1/2 kg de fresas y 750 g de cerezas. ¿Cuánto pesa la fruta? ¿Pasa de 1 kg?", ["1/2 kg = 500 g.", "500 + 750 = 1.250 g.", "1.250 &gt; 1.000."], "1.250 g: sí, pasa de 1 kg."],
  ],
  errores: [
    "Confundir masa (lo que pesa) con capacidad (lo que cabe).",
    "Pensar que lo más grande siempre pesa más.",
    "Creer que 1 kg = 100 g (son 1.000 g).",
    "Comparar medidas en unidades distintas sin pasarlas a la misma.",
    "Juzgar la capacidad solo por la altura del recipiente.",
  ],
  ejercicios: [
    ["¿Con qué instrumentos medimos la masa?", "Con la balanza o la báscula."],
    ["Escribe la abreviatura de kilogramo, gramo, litro y mililitro.", "kg, g, l y ml."],
    ["¿Cuántos gramos tiene medio kilo? ¿Y un cuarto de kilo?", "500 g y 250 g."],
    ["¿Cuántos mililitros tiene un litro? ¿Y medio litro?", "1.000 ml y 500 ml."],
    ["¿Qué unidad usarías para: una sandía, un sobre, un depósito de agua, una gota de colirio?", "kg, g, l y ml."],
    ["Pasa a gramos: 5 kg. Pasa a mililitros: 3 l.", "5.000 g y 3.000 ml."],
    ["¿Qué es más: 1 l o 800 ml?", "1 l, porque son 1.000 ml."],
    ["¿Cuántas botellas de medio litro hacen falta para llenar 3 litros?", "6 botellas."],
    ["Una bolsa tiene 2 kg de patatas y se usan 750 g. ¿Cuánto queda?", "2.000 − 750 = 1.250 g."],
    ["Un bebé toma 4 biberones de 200 ml al día. ¿Cuánta leche toma? ¿Llega a un litro?", "800 ml: no llega a un litro."],
  ],
  quiz: [
    ["La masa nos dice…", ["cuánto pesa algo", "cuánto cabe", "cuánto mide"], "Se mide en kg y g."],
    ["1 kg =", ["1.000 g", "100 g", "10 g"], "Mil gramos."],
    ["Medio kilo son…", ["500 g", "250 g", "50 g"], "1.000 : 2."],
    ["La capacidad nos dice…", ["cuánto cabe", "cuánto pesa", "cuánto mide"], "Se mide en l y ml."],
    ["1 l =", ["1.000 ml", "100 ml", "500 ml"], "Mil mililitros."],
    ["Un cuarto de litro son…", ["250 ml", "500 ml", "25 ml"], "1.000 : 4."],
    ["En una balanza de platos, baja el plato que…", ["pesa más", "pesa menos", "es más grande"], "Más masa."],
    ["Para pesar una carta usamos…", ["gramos", "kilos", "litros"], "Es muy ligera."],
    ["¿Qué es más?", ["2 kg", "1.800 g", "1.500 g"], "2 kg = 2.000 g."],
    ["Una lata de refresco tiene…", ["330 ml", "33 l", "3 ml"], "Un poco más que un vaso."],
  ],
  examen: [
    ["3 kg =", ["3.000 g", "300 g", "30 g"], "3 × 1.000."],
    ["¿Cuántos vasos de 1/4 l llenan 1 litro?", ["4", "2", "10"], "4 cuartos."],
    ["Para medir el agua de una piscina usamos…", ["litros", "gramos", "milímetros"], "Capacidad grande."],
    ["Tenía 1 l de agua y bebo 400 ml. Quedan…", ["600 ml", "1.400 ml", "960 ml"], "1.000 − 400."],
  ],
  feynman: ["Qué diferencia hay entre masa y capacidad", "Cómo funciona una balanza de dos platos", "Cuántos gramos tiene un kilo, medio kilo y un cuarto de kilo", "Cuántos mililitros tiene un litro y medio litro", "Por qué hay que pasar a la misma unidad para comparar"],
  mapa: ["MASA Y CAPACIDAD", [["Masa", "¿cuánto pesa? kg y g", RO], ["1 kg", "= 1.000 g", NA], ["Capacidad", "¿cuánto cabe? l y ml", AG], ["1 l", "= 1.000 ml", AZ]]],
  tarjetas: [
    ["Masa", "Cantidad de materia de un objeto: lo que pesa."],
    ["Kilogramo (kg)", "Unidad principal de masa: 1 kg = 1.000 g."],
    ["Gramo (g)", "Unidad pequeña de masa: lo que pesa un clip."],
    ["Medio kilo y cuarto de kilo", "500 g y 250 g."],
    ["Capacidad", "Lo que cabe dentro de un recipiente."],
    ["Litro (l)", "Unidad principal de capacidad: 1 l = 1.000 ml."],
    ["Mililitro (ml)", "Unidad pequeña de capacidad: una cucharadita tiene unos 5 ml."],
    ["Medio litro y cuarto de litro", "500 ml y 250 ml."],
  ],
  familias: ["Pesad juntos la fruta en la báscula de la cocina y adivinad antes.", "Leed las etiquetas del súper: ¿pone kg, g, l o ml?", "Cocinad una receta midiendo gramos y mililitros.", "Llenad vasos con una botella de 1 litro y contad cuántos salen."],
  saberes: "Medida: masa y capacidad; instrumentos (balanza, báscula, recipientes graduados); kilogramo, gramo, medio y cuarto de kilo; litro, mililitro, medio y cuarto de litro; elección de la unidad adecuada; estimación, comparación y problemas",
  ideas: ["Balanza casera con una percha y dos vasos para comparar masas.", "Taller de trasvases de agua con recipientes de distintas formas.", "Mercadillo con productos de etiquetas reales para clasificar en masa o capacidad."],
});
