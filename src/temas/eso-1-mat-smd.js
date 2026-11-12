// Matemáticas 1º ESO: el sistema métrico decimal. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, rejilla, vb, vg } = require("./_eso1c");

// Escalera de unidades: lista de nombres, la unidad principal resaltada.
const escalera = (u, principal, c) => u.map((n, i) => `<rect x="${10 + i * 34}" y="${118 - i * 14}" width="32" height="${24 + i * 14}" rx="4" fill="${n === principal ? c : "var(--card)"}" fill-opacity="${n === principal ? 0.35 : 1}" stroke="${c}" stroke-width="1.6"/>${t(26 + i * 34, 136 - i * 14 + (24 + i * 14) / 2 - 12, n, { s: 10 })}`).join("");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "El sistema métrico decimal",
  minutos: 55,
  objetivos: ["Conocer las magnitudes y las unidades del Sistema Internacional", "Pasar de unas unidades a otras de longitud, masa y capacidad", "Cambiar unidades de superficie y relacionarlas con las agrarias", "Pasar de forma compleja a incompleja y resolver problemas de medida"],
  claves: ["magnitud", "unidad", "metro", "gramo", "litro", "metro cuadrado"],
  pregunta: {
    texto: "Una receta pide 250 g de harina y en casa la báscula marca kilos. ¿Cuánto tiene que marcar?",
    respuesta: "Un kilogramo son 1 000 gramos. Para pasar de gramos a kilos se divide entre 1 000: 250 : 1 000 = <mark>0,25 kg</mark>, es decir, un cuarto de kilo. El sistema métrico es <b>decimal</b>: las unidades van de 10 en 10, y cambiar es mover la coma.",
  },
  bloques: [
    {
      html: `<h3>Magnitudes y unidades</h3><p>Una <b>magnitud</b> es una propiedad que se puede <b>medir</b>: la longitud, la masa, la capacidad, la superficie, el tiempo… La belleza o la simpatía no son magnitudes, porque no se pueden medir con un número.</p><p><b>Medir</b> es comparar con una cantidad fija llamada <b>unidad</b>. Antes cada región usaba las suyas (pies, varas, arrobas…) y había mucha confusión. Por eso, desde finales del siglo XVIII se creó el <b>sistema métrico decimal</b>, que hoy forma parte del <b>Sistema Internacional (SI)</b>.</p>${tabla(["Magnitud", "Unidad principal", "Símbolo"], [["Longitud", "metro", "m"], ["Masa", "kilogramo (y el gramo)", "kg, g"], ["Capacidad", "litro", "L"], ["Superficie", "metro cuadrado", "m²"], ["Tiempo", "segundo", "s"]])}`,
    },
    {
      html: `<h3>Unidades de longitud</h3><p>La unidad principal es el <b>metro</b>. Los <b>múltiplos</b> (más grandes) y <b>submúltiplos</b> (más pequeños) van de <mark>10 en 10</mark>:</p><p style="text-align:center"><b>km · hm · dam · m · dm · cm · mm</b></p><ul><li>Para pasar a una unidad <b>menor</b> (bajar) se <b>multiplica</b> por 10 en cada escalón.</li><li>Para pasar a una unidad <b>mayor</b> (subir) se <b>divide</b> entre 10 en cada escalón.</li></ul><p>3,5 km → m: tres escalones → · 1 000 = 3 500 m. 47 cm → m: dos escalones → : 100 = 0,47 m.</p><p>Los prefijos se repiten en todas las magnitudes: kilo = 1 000, hecto = 100, deca = 10, deci = 0,1, centi = 0,01, mili = 0,001.</p>`,
      svg: svg("Escalera de unidades de longitud: de kilómetro a milímetro, multiplicando por 10 al bajar y dividiendo al subir", `${escalera(["mm", "cm", "dm", "m", "dam", "hm", "km"], "m", "var(--pen)")}${t(194, 30, "subir: ÷ 10", { c: "var(--red)", s: 11 })}${t(70, 34, "bajar: × 10", { c: "var(--leaf)", s: 11 })}${t(130, 166, "cada escalón, × 10", { c: "var(--muted)", s: 10 })}`),
      video: vb("smdB"),
    },
    {
      html: `<h3>Unidades de masa y de capacidad</h3><p>La <b>masa</b> es la cantidad de materia de un cuerpo. Se usa el <b>gramo</b> como base de la escalera, aunque la unidad oficial del SI es el kilogramo:</p><p style="text-align:center"><b>kg · hg · dag · g · dg · cg · mg</b></p><p>Para grandes masas se usan la <b>tonelada</b> (1 t = 1 000 kg) y el <b>quintal</b> (1 q = 100 kg).</p><p>La <b>capacidad</b> es lo que cabe en un recipiente. Su unidad es el <b>litro</b>:</p><p style="text-align:center"><b>kL · hL · daL · L · dL · cL · mL</b></p><p>Una lata de refresco tiene 33 cL = 0,33 L; un jarabe se da en mL. También van de 10 en 10.</p>`,
    },
    {
      html: `<h3>Unidades de superficie</h3><p>La <b>superficie</b> es la extensión de una figura. Su unidad es el <b>metro cuadrado</b> (m²): un cuadrado de 1 m de lado.</p><p>Aquí los escalones van de <mark>100 en 100</mark>, porque un cuadrado de 1 dm de lado contiene 10 · 10 = 100 cuadraditos de 1 cm de lado.</p><p style="text-align:center"><b>km² · hm² · dam² · m² · dm² · cm² · mm²</b></p><p>Ejemplos: 3 m² = 300 dm² = 30 000 cm². 4 500 cm² = 0,45 m².</p><p>En el campo se usan las <b>unidades agrarias</b>: <b>hectárea</b> (1 ha = 1 hm² = 10 000 m²), <b>área</b> (1 a = 1 dam² = 100 m²) y <b>centiárea</b> (1 ca = 1 m²). Un campo de fútbol tiene cerca de 0,7 ha.</p>`,
      svg: svg("Un decímetro cuadrado dividido en 10 por 10 centímetros cuadrados: 1 dm² son 100 cm²", `<rect x="30" y="30" width="110" height="110" fill="var(--leaf)" fill-opacity=".15"/>${rejilla(30, 30, 10, 10, 11, "var(--leaf)")}<rect x="30" y="30" width="11" height="11" fill="var(--red)" fill-opacity=".6"/>${t(85, 160, "1 dm² = 100 cm²", { s: 12, c: "var(--leaf)" })}${t(200, 74, "cada escalón", { s: 11 })}${t(200, 94, "× 100", { s: 18, d: true, c: "var(--red)" })}${t(200, 116, "(10 · 10)", { c: "var(--muted)", s: 11 })}`),
      video: vb("smdB2"),
    },
    {
      html: `<h3>Cambiar de unidad paso a paso</h3><p>Método seguro:</p><ol><li>Escribe la escalera de la magnitud.</li><li>Cuenta cuántos <b>escalones</b> hay entre la unidad de partida y la de llegada.</li><li>Si bajas, <b>multiplica</b>; si subes, <b>divide</b>. Cada escalón es ·/: 10 (o 100 en superficie).</li><li>En la práctica, mover la coma tantos lugares como escalones (el doble en superficie), añadiendo ceros si hace falta.</li></ol><p>2,8 hL → L: 2 escalones abajo → 280 L. 650 mg → g: 3 escalones arriba → 0,65 g. 0,03 km² → m²: 3 escalones de 100 → 30 000 m².</p>`,
    },
    {
      html: `<h3>Forma compleja e incompleja</h3><p>Una medida puede escribirse:</p><ul><li>En <b>forma compleja</b>, con varias unidades: 3 km 250 m 40 cm.</li><li>En <b>forma incompleja</b>, con una sola unidad: 3 250,4 m.</li></ul><p><b>De compleja a incompleja</b>: se pasa cada parte a la misma unidad y se suma. 2 kg 35 g → 2 000 g + 35 g = 2 035 g.</p><p><b>De incompleja a compleja</b>: se separan las cifras según su unidad. 4,075 L → 4 L 7 cL 5 mL.</p><p>Solo se pueden <b>sumar o comparar</b> medidas que estén en la <mark>misma unidad</mark>.</p>`,
    },
    {
      html: `<h3>Relación entre volumen y capacidad</h3><p>El <b>volumen</b> es el espacio que ocupa un cuerpo y se mide en unidades cúbicas (m³, dm³, cm³). Hay una relación muy útil con la capacidad:</p>${tabla(["Volumen", "Capacidad", "Masa (de agua)"], [["1 dm³", "1 L", "1 kg"], ["1 cm³", "1 mL", "1 g"], ["1 m³", "1 000 L", "1 t"]])}<p>Un brik de leche es casi un cubo de 1 dm de arista y cabe 1 L. Una piscina de 50 m³ contiene <b>50 000 L</b> de agua. Por eso las facturas del agua se cobran en m³.</p>`,
    },
    {
      html: `<h3>Problemas de medida</h3><p>Antes de operar, pon todos los datos en la <b>misma unidad</b>:</p><ul><li>Una botella de 1,5 L llena vasos de 25 cL. 1,5 L = 150 cL → 150 : 25 = <b>6 vasos</b>.</li><li>Un camión transporta 4,2 t y lleva cajas de 35 kg. 4,2 t = 4 200 kg → 4 200 : 35 = <b>120 cajas</b>.</li><li>Una finca de 2,5 ha se vende a 3 € el m². 2,5 ha = 25 000 m² → <b>75 000 €</b>.</li></ul><p>Pregúntate si el resultado tiene sentido: ¡un vaso de 25 cL es un vaso normal, no un cubo!</p>`,
    },
  ],
  figura: {
    titulo: "El sistema métrico en un vistazo",
    svg: filas("Resumen: longitud en metros, masa en gramos, capacidad en litros, de 10 en 10; superficie de 100 en 100; hectárea; 1 dm³ = 1 L", [["Longitud", "km hm dam m dm cm mm · ×10", "var(--pen)"], ["Masa", "kg hg dag g dg cg mg · ×10", "var(--inf)"], ["Capacidad", "kL hL daL L dL cL mL · ×10", "var(--sun)"], ["Superficie", "km² … m² … mm² · ×100", "var(--leaf)"], ["Agrarias", "1 ha = 10 000 m² · 1 a = 100 m²", "var(--red)"], ["Volumen", "1 dm³ = 1 L = 1 kg de agua", "var(--ink)"]], 190),
  },
  video: vg("smdV"),
  quiz: mezcla([
    { q: "¿Cuál es una magnitud?", o: ["la masa", "la alegría", "el color favorito"], a: 0, e: "Se puede medir." },
    { q: "2,3 km son…", o: ["2 300 m", "230 m", "23 000 m"], a: 0, e: "· 1 000." },
    { q: "85 cm son…", o: ["0,85 m", "8,5 m", "850 m"], a: 0, e: ": 100." },
    { q: "1 kg son…", o: ["1 000 g", "100 g", "10 g"], a: 0, e: "Kilo = 1 000." },
    { q: "Una lata de 33 cL tiene…", o: ["0,33 L", "3,3 L", "330 L"], a: 0, e: ": 100." },
    { q: "1 m² son…", o: ["100 dm²", "10 dm²", "1 000 dm²"], a: 0, e: "De 100 en 100." },
    { q: "1 hectárea son…", o: ["10 000 m²", "100 m²", "1 000 m²"], a: 0, e: "1 hm²." },
    { q: "1 dm³ de agua equivale a…", o: ["1 L", "1 mL", "1 kL"], a: 0, e: "Y pesa 1 kg." },
    { q: "1 t son…", o: ["1 000 kg", "100 kg", "10 000 kg"], a: 0, e: "Tonelada." },
    { q: "3 m 5 cm en forma incompleja:", o: ["3,05 m", "3,5 m", "305 m"], a: 0, e: "300 cm + 5 cm = 305 cm." },
  ]),
  examen: mezcla([
    { q: "0,5 m² son…", o: ["5 000 cm²", "50 cm²", "500 cm²"], a: 0, e: "· 10 000." },
    { q: "¿Cuántos vasos de 20 cL salen de 2 L?", o: ["10", "100", "1"], a: 0, e: "200 : 20." },
    { q: "2 kg 40 g en gramos:", o: ["2 040 g", "2 400 g", "240 g"], a: 0, e: "2 000 + 40." },
  ]),
  feynman: ["Qué es una magnitud y qué es medir", "Por qué se llama sistema métrico decimal", "Cómo se pasa de km a cm", "Por qué en superficie se multiplica por 100", "Qué relación hay entre el dm³ y el litro"],
  mapa: mapa("SISTEMA MÉTRICO", "var(--eso)", [
    ["Longitud", "metro · ×10", "var(--pen)"],
    ["Masa y capacidad", "gramo · litro · ×10", "var(--sun)"],
    ["Superficie", "m² · ×100 · hectárea", "var(--leaf)"],
    ["Volumen", "1 dm³ = 1 L", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Magnitud", "Propiedad que se puede medir."],
    ["kilo", "1 000 veces la unidad."],
    ["mili", "La milésima parte de la unidad."],
    ["Bajar en la escalera", "Multiplicar."],
    ["Subir en la escalera", "Dividir."],
    ["Superficie", "Escalones de 100 en 100."],
    ["Hectárea", "1 ha = 1 hm² = 10 000 m²."],
    ["1 dm³", "1 litro (1 kg de agua)."],
  ],
  familias: ["Leed las etiquetas de la compra y pasad las cantidades a otra unidad (g a kg, mL a L).", "Medid una habitación y calculad su superficie en m² y en cm².", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Magnitudes, unidades del SI, cambios de unidad de longitud, masa, capacidad y superficie, formas compleja e incompleja (RD 217/2022, Matemáticas, sentido de la medida).",
    ideas: ["Construir un dm³ con cartulina y comprobar que cabe 1 L.", "Medir el patio y expresarlo en áreas.", "Escalera de unidades en el suelo para practicar saltos."],
  },
  fuentes: [RD, { t: "Centro Español de Metrología: el Sistema Internacional de Unidades", url: "https://www.cem.es/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Expresa en metros: 2 km 3 hm 45 cm.", pasos: ["2 km = 2 000 m.", "3 hm = 300 m.", "45 cm = 0,45 m. Suma: 2 300,45 m."], resultado: "2 300,45 m" },
    { enunciado: "Pasa 3,6 dm² a cm² y a m².", pasos: ["dm² → cm²: un escalón abajo, · 100 → 360 cm².", "dm² → m²: un escalón arriba, : 100.", "→ 0,036 m²."], resultado: "360 cm² y 0,036 m²." },
    { enunciado: "Un depósito de 1,2 m³ se llena con cubos de 8 L. ¿Cuántos cubos hacen falta?", pasos: ["1 m³ = 1 000 L, así que 1,2 m³ = 1 200 L.", "1 200 : 8 = 150.", "Comprobación: 150 · 8 = 1 200."], resultado: "150 cubos." },
  ],
  errores: [
    "Multiplicar por 10 en cada escalón de superficie (es por 100).",
    "Multiplicar cuando hay que dividir: al pasar a una unidad mayor el número se hace más pequeño.",
    "Sumar medidas en unidades distintas sin pasarlas antes a la misma.",
    "Confundir hm (hectómetro) con ha (hectárea).",
    "Escribir mal los símbolos: «Km», «mts» o «grs» en lugar de km, m y g.",
  ],
  ejercicios: [
    { q: "Pasa a metros: 4,5 km; 67 dm; 1 250 mm.", sol: "4 500 m; 6,7 m; 1,25 m." },
    { q: "Pasa a gramos: 3,2 kg; 450 mg; 7 dag.", sol: "3 200 g; 0,45 g; 70 g." },
    { q: "Pasa a litros: 250 mL; 3 hL; 75 cL.", sol: "0,25 L; 300 L; 0,75 L." },
    { q: "Pasa a m²: 5 dam²; 4 000 cm²; 0,2 km².", sol: "500 m²; 0,4 m²; 200 000 m²." },
    { q: "¿Cuántas hectáreas son 45 000 m²?", sol: "4,5 ha." },
    { q: "Escribe en forma incompleja en kg: 3 t 4 q 25 kg.", sol: "3 000 + 400 + 25 = 3 425 kg." },
    { q: "Escribe en forma compleja: 5,307 km.", sol: "5 km 3 hm 7 m." },
    { q: "Ordena: 1,2 m; 115 cm; 0,0013 km; 11 dm.", sol: "11 dm (1,1 m) < 115 cm (1,15 m) < 1,2 m < 0,0013 km (1,3 m)." },
    { q: "¿Cuántas botellas de 75 cL se llenan con 30 L de aceite?", sol: "30 L = 3 000 cL; 3 000 : 75 = 40 botellas." },
    { q: "Un acuario mide 60 cm × 30 cm × 40 cm. ¿Cuántos litros caben?", sol: "72 000 cm³ = 72 dm³ = 72 L." },
  ],
};
