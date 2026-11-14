// Matemáticas 1º ESO · El sistema métrico decimal. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, formula, resumen, C, RD, DECRET, REV, vb, vg } = require("./_eso1L2");

// Escalera de 7 unidades con la principal resaltada.
const escalera = (label, u, principal, c, nota, h = 178) => lienzo(label, `
  ${u.map((n, i) => `<rect x="${12 + i * 34}" y="${126 - i * 14}" width="32" height="${24 + i * 14}" rx="4" fill="${n === principal ? c : "var(--card)"}" fill-opacity="${n === principal ? 0.35 : 1}" stroke="${c}" stroke-width="1.6"/>${tx(28 + i * 34, 142 - i * 7 - 6, n, { fs: 10.5, max: 30 })}`).join("")}
  ${tx(70, 30, "bajar: × " + nota, { fs: 11.5, c: "var(--leaf)", max: 110 })}${tx(196, 24, "subir: ÷ " + nota, { fs: 11.5, c: "var(--red)", max: 110 })}${tx(130, 168, "cada escalón, × " + nota, { fs: 11, c: "var(--muted)" })}`, h);

const magnitudes = cajas("Magnitudes y sus unidades principales: metro, kilogramo, litro y segundo", [
  ["Longitud", "metro (m)", "var(--pen)"],
  ["Masa", "kilogramo (kg)", "var(--inf)"],
  ["Capacidad", "litro (L)", "var(--sun)"],
  ["Tiempo", "segundo (s)", "var(--leaf)"],
], "Unidades principales");

const prefijos = tabla(["Prefijo", "Símbolo", "Significa"], [["kilo", "k", "× 1 000"], ["hecto", "h", "× 100"], ["deca", "da", "× 10"], ["(unidad)", "—", "× 1"], ["deci", "d", ": 10"], ["centi", "c", ": 100"], ["mili", "m", ": 1 000"]]);

const longitud = escalera("Escalera de unidades de longitud: de kilómetro a milímetro, multiplicando por 10 al bajar y dividiendo al subir", ["mm", "cm", "dm", "m", "dam", "hm", "km"], "m", "var(--pen)", "10");
const masa = escalera("Escalera de unidades de masa: del kilogramo al miligramo, de 10 en 10, con el gramo como base", ["mg", "cg", "dg", "g", "dag", "hg", "kg"], "g", "var(--inf)", "10");
const capacidad = escalera("Escalera de unidades de capacidad: del kilolitro al mililitro, de 10 en 10", ["mL", "cL", "dL", "L", "daL", "hL", "kL"], "L", "var(--sun)", "10");

const cuadricula = lienzo("Un decímetro cuadrado dividido en 10 por 10 centímetros cuadrados: 1 dm² son 100 cm²", `
  <rect x="30" y="24" width="120" height="120" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2"/>
  ${[...Array(9)].map((_, i) => `<path d="M${42 + i * 12} 24 V144 M30 ${36 + i * 12} H150" stroke="var(--leaf)" stroke-opacity=".45"/>`).join("")}<rect x="30" y="24" width="12" height="12" fill="var(--red)" fill-opacity=".6"/>
  ${tx(90, 162, "1 dm² = 100 cm²", { fs: 12.5, c: "var(--leaf)" })}${tx(208, 66, "cada escalón", { fs: 11.5, max: 96 })}${tx(208, 92, "× 100", { fs: 20, fam: D, c: "var(--red)", max: 96 })}${tx(208, 116, "(10 · 10)", { fs: 11, c: "var(--muted)", max: 96 })}`, 172);

const agrarias = comparar("Unidades agrarias: hectárea, área y centiárea y su equivalencia en metros cuadrados", [
  ["Hectárea (ha)", ["1 hm²", "10 000 m²", "una manzana grande"], "var(--leaf)"],
  ["Área (a)", ["1 dam²", "100 m²", "un piso amplio"], "var(--sun)"],
], "Medir el campo");

const metodo = pasos("Método para cambiar de unidad", [
  "Escribe la escalera",
  "Cuenta los escalones",
  "Bajar: multiplica",
  "Subir: divide",
  "Mueve la coma",
], "Cinco pasos");

const complejas = comparar("Forma compleja con varias unidades y forma incompleja con una sola unidad", [
  ["Compleja", ["3 km 250 m 40 cm", "varias unidades", "fácil de leer"], "var(--inf)"],
  ["Incompleja", ["3 250,4 m", "una sola unidad", "fácil de operar"], "var(--pen)"],
], "Dos formas de escribir");

const cubo = lienzo("Un cubo de 1 dm de arista tiene un volumen de 1 dm³, cabe 1 litro y lleno de agua pesa 1 kg", `
  <path d="M40 60 L110 60 L110 140 L40 140 Z" fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2"/><path d="M40 60 L70 34 L140 34 L110 60 M140 34 L140 114 L110 140" fill="var(--pen)" fill-opacity=".08" stroke="var(--pen)" stroke-width="2"/>
  <path d="M40 92 H110 L140 66" fill="none" stroke="var(--pen)" stroke-opacity=".6"/>${tx(75, 156, "1 dm = 10 cm", { fs: 11, c: "var(--muted)" })}
  ${tx(204, 58, "1 dm³", { fs: 16, fam: D, c: "var(--pen)", max: 100 })}${tx(204, 86, "= 1 L", { fs: 16, fam: D, c: "var(--sun)", max: 100 })}${tx(204, 114, "= 1 kg", { fs: 16, fam: D, c: "var(--inf)", max: 100 })}${tx(204, 136, "(de agua)", { fs: 11, c: "var(--muted)", max: 100 })}`, 170);

const tiempo = formula("Unidades de tiempo: no son decimales", "1 h = 60 min = 3 600 s", ["1 min = 60 s", "1 día = 24 h", "2,5 h = 2 h 30 min"], "var(--leaf)");

const ordenes = cajas("Medidas de referencia para estimar: una puerta, un paso, una manzana y una cucharada", [
  ["Puerta", "unos 2 m de alto", "var(--pen)"],
  ["Paso", "unos 70 cm", "var(--leaf)"],
  ["Manzana", "unos 150 g", "var(--inf)"],
  ["Cucharada", "unos 15 mL", "var(--sun)"],
], "Para estimar");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "El sistema métrico decimal",
  minutos: 105,
  objetivos: [
    "Reconocer magnitudes y sus unidades del Sistema Internacional",
    "Conocer los prefijos del sistema métrico decimal",
    "Cambiar de unidad en longitud, masa y capacidad",
    "Cambiar unidades de superficie y relacionarlas con las agrarias",
    "Pasar medidas de forma compleja a incompleja y viceversa",
    "Relacionar volumen, capacidad y masa y resolver problemas de medida",
  ],
  claves: ["magnitud", "unidad", "metro", "gramo", "litro", "metro cuadrado", "hectárea", "forma compleja"],
  pregunta: {
    texto: "Una receta pide 250 g de harina y en casa la báscula marca kilos. ¿Cuánto tiene que marcar?",
    respuesta: "Un kilogramo son 1 000 gramos. Para pasar de gramos a kilos se divide entre 1 000: 250 : 1 000 = <mark>0,25 kg</mark>, es decir, un cuarto de kilo. El sistema métrico es <b>decimal</b>: las unidades van de 10 en 10, y cambiar de unidad es mover la coma.",
  },
  lectura: {
    titulo: "Un metro para todo el mundo",
    html: `<p>Antes de 1790, en Francia había más de 250 000 unidades de medida distintas. Un «pie» de París no medía lo mismo que uno de Lyon, y cada mercado tenía sus propias varas, libras y fanegas. Los comerciantes se engañaban unos a otros y los impuestos eran un caos. En España ocurría algo parecido: la vara de Castilla, la arroba, la legua…</p><p>Durante la Revolución Francesa, un grupo de científicos propuso una medida «para todos los pueblos y todos los tiempos». Decidieron que el <b>metro</b> sería la diezmillonésima parte de la distancia del Polo Norte al ecuador. Dos astrónomos, Delambre y Méchain, pasaron siete años midiendo el meridiano entre Dunkerque y Barcelona, entre guerras, detenciones y montañas. El resultado se grabó en una barra de platino.</p><p>Del metro salieron el resto de unidades: el litro (un cubo de un decímetro) y el kilogramo (lo que pesa ese litro de agua). Todo iba de 10 en 10, como nuestros números. España adoptó el sistema métrico en 1849. Hoy el metro se define con la velocidad de la luz, y casi todos los países del mundo usan el <b>Sistema Internacional</b>.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Magnitudes y unidades</h3><p>Una <b>magnitud</b> es una propiedad de un objeto que se puede <b>medir</b> y expresar con un número: la longitud, la masa, la capacidad, la superficie, el tiempo, la temperatura… La belleza, la simpatía o el miedo no son magnitudes, porque no se pueden medir con un número.</p><p><b>Medir</b> es comparar una cantidad con otra fija de la misma magnitud llamada <b>unidad</b>, y contar cuántas veces la contiene. Si una mesa mide 2 m, quiere decir que el metro cabe 2 veces a lo largo.</p><p>Una medida tiene siempre dos partes: un <b>número</b> y una <b>unidad</b>. Decir «la mesa mide 2» no sirve: ¿2 metros, 2 palmos, 2 kilómetros? Por eso, en matemáticas y en ciencias nunca se escribe un resultado de medida sin su unidad.</p>`, svg: magnitudes },
    { html: `<h3>1.2 El Sistema Internacional y los prefijos</h3><p>El <b>Sistema Internacional de Unidades (SI)</b> es el conjunto de unidades que se usa en casi todo el mundo. Sus unidades básicas son el metro (longitud), el kilogramo (masa), el segundo (tiempo), el kelvin (temperatura), el amperio (corriente eléctrica), el mol y la candela.</p><p>El sistema es <b>decimal</b>: a partir de la unidad principal se forman <b>múltiplos</b> (unidades mayores) y <b>submúltiplos</b> (unidades menores) añadiendo <b>prefijos</b> que indican potencias de 10. Los prefijos son los mismos para todas las magnitudes:</p>${prefijos}<p>Así, un <b>kilo</b>metro son 1 000 metros, un <b>kilo</b>gramo son 1 000 gramos y un <b>mili</b>litro es la milésima parte de un litro. En informática y ciencia también se usan mega (un millón) y micro (una millonésima).</p>` },
    { html: `<h3>1.3 Unidades de longitud</h3><p>La <b>longitud</b> mide la distancia entre dos puntos. La unidad principal es el <b>metro</b> (m). Ordenadas de mayor a menor:</p><p style="text-align:center"><b>km · hm · dam · m · dm · cm · mm</b></p><p>Cada unidad es <mark>10 veces mayor</mark> que la siguiente. Por eso:</p><ul><li>Para pasar a una unidad <b>menor</b> (bajar la escalera) se <b>multiplica</b> por 10 en cada escalón.</li><li>Para pasar a una unidad <b>mayor</b> (subir) se <b>divide</b> entre 10 en cada escalón.</li></ul><p>3,5 km a m: bajamos tres escalones → · 1 000 = 3 500 m. 47 cm a m: subimos dos escalones → : 100 = 0,47 m. Truco: tiene sentido que al pasar a una unidad pequeña salga un número más grande, porque necesitamos más unidades pequeñas para medir lo mismo.</p>`, svg: longitud, video: vb("smdB") },
    { html: `<h3>1.4 Unidades de masa</h3><p>La <b>masa</b> es la cantidad de materia que tiene un cuerpo. En el lenguaje de la calle decimos «peso», pero en ciencias el peso es otra cosa (la fuerza con que la Tierra nos atrae). La unidad del SI es el <b>kilogramo</b>, aunque la escalera se construye a partir del <b>gramo</b>:</p><p style="text-align:center"><b>kg · hg · dag · g · dg · cg · mg</b></p><p>Funciona igual que la longitud: de 10 en 10. 2,4 kg = 2 400 g; 350 mg = 0,35 g. Los medicamentos se dosifican en mg y los alimentos en g o kg.</p><p>Para masas grandes se usan la <b>tonelada</b> (1 t = 1 000 kg) y el <b>quintal métrico</b> (1 q = 100 kg). Un coche pesa más o menos 1,2 t; un camión cargado, 40 t; una ballena azul, ¡más de 100 t!</p>`, svg: masa },
    { html: `<h3>1.5 Unidades de capacidad</h3><p>La <b>capacidad</b> es la cantidad de líquido (o de cualquier cosa) que cabe en un recipiente. Su unidad principal es el <b>litro</b> (L):</p><p style="text-align:center"><b>kL · hL · daL · L · dL · cL · mL</b></p><p>También van de 10 en 10. Una lata de refresco tiene 33 cL = 0,33 L; una botella grande, 1,5 L = 150 cL; una cucharadita de jarabe, 5 mL.</p><p>Es habitual ver capacidades escritas de formas distintas en las etiquetas: 0,75 L, 75 cL y 750 mL son exactamente la misma cantidad (una botella de vino o de aceite). Antes de comparar precios de dos productos, hay que poner su capacidad en la misma unidad.</p>`, svg: capacidad },
    { html: `<h3>1.6 Cambiar de unidad paso a paso</h3><p>Hay un método seguro que funciona para longitud, masa y capacidad:</p><ol><li>Escribe la <b>escalera</b> de unidades de la magnitud.</li><li>Cuenta cuántos <b>escalones</b> hay entre la unidad de partida y la de llegada.</li><li>Si <b>bajas</b> (a una unidad menor), <b>multiplica</b> por 10 tantas veces como escalones.</li><li>Si <b>subes</b> (a una unidad mayor), <b>divide</b>.</li><li>En la práctica, basta con <b>mover la coma</b> tantos lugares como escalones: a la derecha si bajas y a la izquierda si subes, añadiendo ceros si hace falta.</li></ol><p>2,8 hL a L: 2 escalones abajo → 280 L. 650 mg a g: 3 escalones arriba → 0,650 g = 0,65 g. 0,4 dam a cm: 3 escalones abajo → 400 cm.</p>`, svg: metodo, video: vb("smdB2") },
    { html: `<h3>1.7 Unidades de superficie</h3><p>La <b>superficie</b> es la extensión de una figura plana. Su unidad es el <b>metro cuadrado</b> (m²): la superficie de un cuadrado de 1 m de lado.</p><p style="text-align:center"><b>km² · hm² · dam² · m² · dm² · cm² · mm²</b></p><p>¡Atención! Aquí cada escalón vale <mark>× 100</mark>, no × 10. ¿Por qué? Un cuadrado de 1 dm de lado tiene 10 cm de lado, y dentro caben 10 filas de 10 cuadraditos de 1 cm: 10 · 10 = 100 cm². Por eso 1 dm² = 100 cm².</p><p>Al mover la coma, en superficie se mueven <b>dos lugares por escalón</b>: 3 m² = 300 dm² = 30 000 cm²; 4 500 cm² = 0,45 m²; 0,03 km² = 30 000 m². Es el error más frecuente del tema: tratar las unidades cuadradas como si fueran de 10 en 10.</p>`, svg: cuadricula },
    { html: `<h3>1.8 Unidades agrarias</h3><p>Para medir campos, bosques y fincas se usan las <b>unidades agrarias</b>, que coinciden con unidades de superficie:</p><ul><li><b>Hectárea</b> (ha) = 1 hm² = <mark>10 000 m²</mark>. Es un cuadrado de 100 m de lado.</li><li><b>Área</b> (a) = 1 dam² = 100 m². Un cuadrado de 10 m de lado.</li><li><b>Centiárea</b> (ca) = 1 m².</li></ul><p>Un campo de fútbol tiene unos 105 m × 68 m ≈ 7 140 m², es decir, unas 0,7 ha. Cuando las noticias dicen que un incendio ha quemado 3 000 hectáreas, son 30 km², la superficie de una ciudad mediana.</p><p>Para pasar de hectáreas a metros cuadrados se multiplica por 10 000: 2,5 ha = 25 000 m². Y de m² a ha se divide: 8 000 m² = 0,8 ha.</p>`, svg: agrarias },
    { html: `<h3>2.1 Forma compleja e incompleja</h3><p>Una misma medida puede escribirse de dos formas:</p><ul><li><b>Forma compleja</b>: con varias unidades. 3 km 250 m 40 cm.</li><li><b>Forma incompleja</b>: con una sola unidad. 3 250,4 m.</li></ul><p><b>De compleja a incompleja</b>: se pasa cada parte a la misma unidad y se suma. 2 kg 35 g → 2 000 g + 35 g = 2 035 g, o bien 2,035 kg.</p><p><b>De incompleja a compleja</b>: se separan las cifras según la unidad que les corresponde. 4,075 L → 4 L 0 dL 7 cL 5 mL, es decir, 4 L 7 cL 5 mL.</p><p>Solo se pueden <b>sumar, restar o comparar</b> medidas que estén en la <mark>misma unidad</mark>. 1 m 20 cm + 85 cm = 120 cm + 85 cm = 205 cm = 2,05 m.</p>`, svg: complejas },
    { html: `<h3>2.2 Volumen, capacidad y masa</h3><p>El <b>volumen</b> es el espacio que ocupa un cuerpo y se mide en unidades cúbicas: m³, dm³, cm³… (en volumen cada escalón vale × 1 000, lo estudiarás a fondo en 2º). Hay una relación muy útil entre volumen, capacidad y masa de agua:</p>${tabla(["Volumen", "Capacidad", "Masa de agua"], [["1 m³", "1 000 L", "1 t"], ["1 dm³", "1 L", "1 kg"], ["1 cm³", "1 mL", "1 g"]])}<p>Un brik de leche es casi un cubo de 1 dm de arista y en él cabe 1 L. Una piscina de 50 m³ contiene <b>50 000 L</b> de agua, que pesan 50 t. Por eso las facturas del agua se cobran en m³: si en casa gastáis 12 m³ al mes, son 12 000 litros.</p>`, svg: cubo },
    { html: `<h3>2.3 El tiempo, una magnitud no decimal</h3><p>No todas las unidades van de 10 en 10. El <b>tiempo</b> usa un sistema <b>sexagesimal</b> (de 60 en 60) heredado de los babilonios: 1 hora = 60 minutos y 1 minuto = 60 segundos. Además, 1 día = 24 h, 1 semana = 7 días y 1 año = 365 días (366 si es bisiesto).</p><p>Por eso <b>no se puede mover la coma</b> con el tiempo. 2,5 h no son 2 h 50 min, sino <mark>2 h 30 min</mark>, porque 0,5 h es media hora. Y 90 min = 1,5 h = 1 h 30 min.</p><p>Ejemplo: un tren sale a las 9:45 y tarda 2 h 35 min. 45 + 35 = 80 min = 1 h 20 min, así que llega a las 9 + 2 + 1 = 12 h y 20 min: a las <b>12:20</b>. Los ángulos también se miden en grados, minutos y segundos de 60 en 60.</p>`, svg: tiempo },
    { html: `<h3>2.4 Estimar y resolver problemas de medida</h3><p>Antes de operar con medidas, pon todos los datos en la <b>misma unidad</b>. Algunos ejemplos:</p><ul><li>Una botella de 1,5 L llena vasos de 25 cL. 1,5 L = 150 cL → 150 : 25 = <b>6 vasos</b>.</li><li>Un camión transporta 4,2 t en cajas de 35 kg. 4,2 t = 4 200 kg → 4 200 : 35 = <b>120 cajas</b>.</li><li>Una finca de 2,5 ha se vende a 3 € el m². 2,5 ha = 25 000 m² → <b>75 000 €</b>.</li></ul><p>Es muy útil saber <b>estimar</b>: una puerta mide unos 2 m de alto; un paso, unos 70 cm; una manzana pesa unos 150 g; una cucharada, unos 15 mL. Con estas referencias puedes comprobar si un resultado tiene sentido. Si te sale que un vaso tiene 25 L o que un lápiz mide 18 m, ¡revisa las unidades!</p>`, svg: ordenes, video: vg("smdV") },
  ],
  ejemplos: [
    { enunciado: "Pasa 3,47 km a metros y a centímetros.", pasos: ["km → m: 3 escalones abajo, × 1 000 → 3 470 m.", "m → cm: 2 escalones más, × 100 → 347 000 cm."], resultado: "3 470 m = 347 000 cm." },
    { enunciado: "Pasa 2 500 mg a gramos y a kilogramos.", pasos: ["mg → g: : 1 000 → 2,5 g.", "g → kg: : 1 000 → 0,0025 kg."], resultado: "2,5 g = 0,0025 kg." },
    { enunciado: "Pasa 5,2 m² a cm².", pasos: ["m² → dm² → cm²: 2 escalones de × 100.", "5,2 · 10 000 = 52 000."], resultado: "52 000 cm²." },
    { enunciado: "Expresa 7 hL 3 daL 5 L en litros.", pasos: ["700 L + 30 L + 5 L."], resultado: "735 L." },
    { enunciado: "Expresa 12,305 km en forma compleja.", pasos: ["12 km, 3 hm, 0 dam, 5 m."], resultado: "12 km 3 hm 5 m." },
    { enunciado: "Un depósito de 2,4 m³ se llena de agua. ¿Cuántos litros caben y cuánto pesa el agua?", pasos: ["1 m³ = 1 000 L → 2 400 L.", "1 L de agua = 1 kg → 2 400 kg."], resultado: "2 400 L; 2,4 t." },
  ],
  errores: [
    "Multiplicar cuando se sube a una unidad mayor (o dividir al bajar).",
    "Usar escalones de 10 en las unidades de superficie, que van de 100 en 100.",
    "Sumar o comparar medidas que están en unidades distintas.",
    "Escribir un resultado sin unidad.",
    "Mover la coma en las unidades de tiempo: 2,5 h no son 2 h 50 min.",
    "Confundir mL (mililitro) con m (metro) o mg con m.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Cuáles son magnitudes: la altura, la amistad, la temperatura, el sabor, la masa?", sol: "La altura, la temperatura y la masa." },
    { nivel: "básico", q: "Pasa a metros: 4,5 km; 78 cm; 3 hm; 950 mm.", sol: "4 500 m; 0,78 m; 300 m; 0,95 m." },
    { nivel: "básico", q: "Pasa a gramos: 3,2 kg; 450 mg; 7 dag; 0,5 hg.", sol: "3 200 g; 0,45 g; 70 g; 50 g." },
    { nivel: "básico", q: "Pasa a litros: 75 cL; 2,5 hL; 350 mL; 4 daL.", sol: "0,75 L; 250 L; 0,35 L; 40 L." },
    { nivel: "básico", q: "Pasa a cm: 2,3 m; 45 mm; 1,05 dam.", sol: "230 cm; 4,5 cm; 1 050 cm." },
    { nivel: "básico", q: "¿Cuántos kg son 3,5 t? ¿Y 4 quintales?", sol: "3 500 kg; 400 kg." },
    { nivel: "básico", q: "Pasa a m²: 3 dam²; 500 dm²; 0,02 hm².", sol: "300 m²; 5 m²; 200 m²." },
    { nivel: "básico", q: "¿Cuántos m² tiene una finca de 3 ha?", sol: "30 000 m²." },
    { nivel: "básico", q: "Ordena de menor a mayor: 1,2 m; 115 cm; 0,011 km; 1 250 mm.", sol: "0,011 km (11 m) es el mayor. 115 cm < 1,2 m < 1 250 mm < 0,011 km." },
    { nivel: "básico", q: "¿Cuántos mL caben en una botella de 1 L? ¿Y cuántos cm³ ocupa?", sol: "1 000 mL; 1 000 cm³." },
    { nivel: "básico", q: "Expresa en minutos: 2 h; 1,5 h; 3 h 20 min.", sol: "120 min; 90 min; 200 min." },
    { nivel: "básico", q: "Escribe la unidad más adecuada para medir: el largo de un campo, la masa de una pastilla, el agua de una piscina.", sol: "m (o hm); mg; m³ o kL." },
    { nivel: "medio", q: "Expresa en metros: 2 km 4 hm 6 m 30 cm.", sol: "2 000 + 400 + 6 + 0,3 = 2 406,3 m." },
    { nivel: "medio", q: "Expresa en forma compleja: 5,0738 kg.", sol: "5 kg 7 dag 3 g 8 dg (= 5 kg 73 g 8 dg)." },
    { nivel: "medio", q: "Pasa 0,45 km² a m² y a hectáreas.", sol: "450 000 m²; 45 ha." },
    { nivel: "medio", q: "Pasa 36 000 cm² a m² y 2,5 dm² a mm².", sol: "3,6 m²; 25 000 mm²." },
    { nivel: "medio", q: "Suma y da el resultado en litros: 2 L + 35 cL + 400 mL + 1 dL.", sol: "2 + 0,35 + 0,4 + 0,1 = 2,85 L." },
    { nivel: "medio", q: "¿Cuántos vasos de 20 cL se llenan con una garrafa de 5 L?", sol: "500 cL : 20 = 25 vasos." },
    { nivel: "medio", q: "Una caja de galletas pesa 450 g. ¿Cuántas cajas forman 9 kg?", sol: "9 000 : 450 = 20 cajas." },
    { nivel: "medio", q: "Una película dura 135 min. Exprésalo en horas y minutos y en horas con decimales.", sol: "2 h 15 min = 2,25 h." },
    { nivel: "medio", q: "Una piscina de 8 m × 4 m × 1,5 m se llena de agua. ¿Cuántos litros caben?", sol: "48 m³ = 48 000 L." },
    { nivel: "medio", q: "Un atleta corre 12 vueltas a una pista de 400 m. ¿Cuántos km recorre?", sol: "4 800 m = 4,8 km." },
    { nivel: "medio", q: "Un terreno de 1,2 ha se divide en parcelas de 300 m². ¿Cuántas parcelas salen?", sol: "12 000 : 300 = 40 parcelas." },
    { nivel: "avanzado", q: "Un aceite cuesta 4,20 € la botella de 75 cL y 5,10 € la de 1 L. ¿Cuál sale más barato por litro?", sol: "75 cL: 4,20 : 0,75 = 5,60 €/L. 1 L: 5,10 €/L. La de 1 L." },
    { nivel: "avanzado", q: "Un grifo gotea 2 mL por segundo. ¿Cuántos litros se pierden en un día?", sol: "86 400 s · 2 mL = 172 800 mL = 172,8 L." },
    { nivel: "avanzado", q: "Un tren sale a las 22:50 y tarda 3 h 25 min. ¿A qué hora llega?", sol: "22:50 + 3 h = 1:50; + 25 min = 2:15 del día siguiente." },
    { nivel: "avanzado", q: "Una familia gasta 14 m³ de agua al mes y son 4 personas. ¿Cuántos litros gasta cada persona al día (mes de 30 días)?", sol: "14 000 L : 30 : 4 ≈ 116,7 L." },
    { nivel: "avanzado", q: "Un incendio quemó 2 500 ha. ¿Cuántos km² son? ¿Cuántos campos de fútbol de 0,7 ha aproximadamente?", sol: "25 km²; 2 500 : 0,7 ≈ 3 571 campos." },
    { nivel: "avanzado", q: "Encuentra el error: «3 m² = 30 dm²».", sol: "En superficie cada escalón es × 100: 3 m² = 300 dm²." },
    { nivel: "avanzado", q: "Un camión puede cargar 12 t. Lleva 85 sacos de 50 kg y cajas de 25 kg. ¿Cuántas cajas puede cargar como máximo?", sol: "12 000 − 4 250 = 7 750 kg; 7 750 : 25 = 310 cajas." },
  ],
  quiz: [
    { q: "¿Cuál es una magnitud?", o: ["la amistad", "la masa", "el color favorito", "la belleza"], a: 1, e: "Se puede medir." },
    { q: "Unidad de longitud del SI:", o: ["litro", "metro", "gramo", "segundo"], a: 1, e: "El metro." },
    { q: "«kilo» significa…", o: ["× 100", "× 1 000", ": 1 000", "× 10"], a: 1, e: "1 000." },
    { q: "«mili» significa…", o: ["× 1 000", ": 1 000", ": 100", ": 10"], a: 1, e: "Milésima." },
    { q: "2,3 km son…", o: ["230 m", "2 300 m", "23 000 m", "23 m"], a: 1, e: "× 1 000." },
    { q: "85 cm son…", o: ["8,5 m", "0,85 m", "850 m", "0,085 m"], a: 1, e: ": 100." },
    { q: "1 kg son…", o: ["100 g", "1 000 g", "10 g", "10 000 g"], a: 1, e: "Kilo = 1 000." },
    { q: "1 t son…", o: ["100 kg", "1 000 kg", "10 kg", "10 000 kg"], a: 1, e: "Tonelada." },
    { q: "Una lata de 33 cL tiene…", o: ["3,3 L", "0,33 L", "330 L", "0,033 L"], a: 1, e: ": 100." },
    { q: "750 mL son…", o: ["7,5 L", "0,75 L", "75 L", "0,075 L"], a: 1, e: ": 1 000." },
    { q: "En superficie, cada escalón vale…", o: ["× 10", "× 100", "× 1 000", "× 60"], a: 1, e: "10 · 10." },
    { q: "1 m² son…", o: ["10 dm²", "100 dm²", "1 000 dm²", "10 000 dm²"], a: 1, e: "De 100 en 100." },
    { q: "1 hectárea son…", o: ["100 m²", "10 000 m²", "1 000 m²", "1 km²"], a: 1, e: "1 hm²." },
    { q: "1 área son…", o: ["10 m²", "100 m²", "1 000 m²", "1 m²"], a: 1, e: "1 dam²." },
    { q: "1 dm³ equivale a…", o: ["1 mL", "1 L", "1 kL", "10 L"], a: 1, e: "Relación volumen-capacidad." },
    { q: "1 L de agua pesa…", o: ["1 g", "1 kg", "1 t", "100 g"], a: 1, e: "1 kg." },
    { q: "2 kg 35 g en gramos:", o: ["235 g", "2 035 g", "2 350 g", "20 035 g"], a: 1, e: "2 000 + 35." },
    { q: "2,5 h son…", o: ["2 h 50 min", "2 h 30 min", "2 h 5 min", "250 min"], a: 1, e: "Media hora son 30 min." },
    { q: "Para pasar de m a km se…", o: ["multiplica por 1 000", "divide entre 1 000", "multiplica por 100", "divide entre 100"], a: 1, e: "Se sube." },
    { q: "1 m³ son…", o: ["100 L", "1 000 L", "10 L", "10 000 L"], a: 1, e: "1 000 dm³." },
  ],
  examen: [
    { q: "4,08 hm en metros:", o: ["40,8 m", "408 m", "4 080 m", "0,408 m"], a: 1, e: "× 100." },
    { q: "6 500 g en kg:", o: ["65 kg", "6,5 kg", "0,65 kg", "650 kg"], a: 1, e: ": 1 000." },
    { q: "0,25 L en mL:", o: ["25 mL", "250 mL", "2 500 mL", "2,5 mL"], a: 1, e: "× 1 000." },
    { q: "4 m² en cm²:", o: ["400 cm²", "40 000 cm²", "4 000 cm²", "400 000 cm²"], a: 1, e: "Dos escalones de × 100." },
    { q: "3,5 ha en m²:", o: ["3 500 m²", "35 000 m²", "350 m²", "350 000 m²"], a: 1, e: "× 10 000." },
    { q: "3 L 4 dL 5 cL en L:", o: ["3,045 L", "3,45 L", "34,5 L", "345 L"], a: 1, e: "3 + 0,4 + 0,05." },
    { q: "Una piscina de 30 m³ contiene…", o: ["3 000 L", "30 000 L", "300 L", "300 000 L"], a: 1, e: "× 1 000." },
    { q: "110 min son…", o: ["1,10 h", "1 h 50 min", "1 h 10 min", "2 h 10 min"], a: 1, e: "60 + 50." },
  ],
  feynman: ["Qué es una magnitud y por qué una medida necesita unidad", "Por qué al bajar de unidad se multiplica y al subir se divide", "Por qué las unidades de superficie van de 100 en 100", "Qué relación hay entre 1 dm³, 1 L y 1 kg de agua"],
  figura: {
    titulo: "El sistema métrico en un vistazo",
    svg: resumen("Resumen: longitud, masa y capacidad de 10 en 10; superficie de 100 en 100; hectárea; 1 dm³ = 1 L", [
      ["Longitud", "km hm dam m dm cm mm · × 10", "var(--pen)"],
      ["Masa", "kg hg dag g dg cg mg · × 10", "var(--inf)"],
      ["Capacidad", "kL hL daL L dL cL mL · × 10", "var(--sun)"],
      ["Superficie", "km² … m² … mm² · × 100", "var(--leaf)"],
      ["Agrarias", "1 ha = 10 000 m² · 1 a = 100 m²", "var(--red)"],
      ["Volumen", "1 dm³ = 1 L = 1 kg de agua", "var(--ink)"],
    ]),
  },
  video: vg("smdV"),
  mapa: mapa("MEDIDA", "var(--pen)", [
    ["Magnitud y unidad", "SI · prefijos", "var(--inf)"],
    ["De 10 en 10", "longitud · masa · capacidad", "var(--pen)"],
    ["De 100 en 100", "superficie · hectárea", "var(--leaf)"],
    ["Relaciones", "1 dm³ = 1 L · tiempo", "var(--sun)"],
  ], 250),
  glosario: [
    ["Magnitud", "Propiedad que se puede medir y expresar con un número."],
    ["Unidad", "Cantidad fija con la que se compara al medir."],
    ["Sistema Internacional", "Conjunto de unidades acordado y usado en casi todo el mundo."],
    ["Múltiplo", "Unidad mayor que la principal (kilo, hecto, deca)."],
    ["Submúltiplo", "Unidad menor que la principal (deci, centi, mili)."],
    ["Metro", "Unidad principal de longitud."],
    ["Kilogramo", "Unidad de masa del SI; 1 000 gramos."],
    ["Litro", "Unidad de capacidad; equivale a 1 dm³."],
    ["Metro cuadrado", "Superficie de un cuadrado de 1 m de lado."],
    ["Hectárea", "Unidad agraria igual a 1 hm² = 10 000 m²."],
    ["Forma compleja", "Medida expresada con varias unidades."],
    ["Forma incompleja", "Medida expresada con una sola unidad."],
    ["Tonelada", "Unidad de masa igual a 1 000 kg."],
    ["Sexagesimal", "Sistema que agrupa de 60 en 60, como el tiempo."],
  ],
  situacion: {
    titulo: "Detectives de etiquetas",
    reto: "Vais a investigar las etiquetas de productos del supermercado para descubrir cuál sale más barato de verdad, comparando precios por kilo y por litro.",
    pasos: [
      "Recoged al menos 10 etiquetas o fotos de productos (bebidas, aceite, cereales, detergente) con su precio y su cantidad.",
      "Anotad la cantidad en la unidad que aparece (g, kg, cL, mL, L).",
      "Pasad todas las cantidades a kg o a L.",
      "Calculad el precio por kg o por L de cada producto y comparadlo con el que da la etiqueta.",
      "Elaborad un cartel con los «chollos» y las «trampas» que habéis encontrado.",
    ],
    producto: "Un cartel comparativo de precios por unidad con las conversiones explicadas.",
    evaluacion: ["Cambia de unidad correctamente.", "Calcula y compara precios por unidad.", "Detecta formatos engañosos.", "Presenta las conclusiones con claridad."],
  },
  tarjetas: [
    ["kilo", "× 1 000"], ["hecto", "× 100"], ["deca", "× 10"],
    ["deci", ": 10"], ["centi", ": 100"], ["mili", ": 1 000"],
    ["Bajar escalón", "Multiplicar"], ["Subir escalón", "Dividir"], ["Superficie", "Escalones de × 100"],
    ["1 ha", "10 000 m²"], ["1 dm³", "1 L = 1 kg de agua"], ["1 h", "60 min = 3 600 s"],
  ],
  familias: ["Leed juntos las etiquetas de la compra y calculad el precio por kilo o por litro.", "Cocinad una receta midiendo con báscula y vaso medidor.", "Mirad la factura del agua y calculad cuántos litros gastáis al día.", "Estimad medidas de casa (puerta, mesa, bañera) y comprobadlas con un metro."],
  profesores: {
    saberes: "Sentido de la medida: magnitudes, unidades del Sistema Internacional, cambios de unidad de longitud, masa, capacidad y superficie, unidades agrarias, forma compleja e incompleja, relación volumen-capacidad-masa y estimación (RD 217/2022, Matemáticas 1º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Medir objetos del aula y estimar antes de medir.", "Construir con cartulina un dm³ y llenarlo de agua.", "Trazar en el patio un área (10 m × 10 m) con cuerdas.", "Proyecto de etiquetas y precios por unidad."],
  },
  fuentes: [RD, DECRET, { t: "Centro Español de Metrología (CEM): Sistema Internacional de Unidades", url: "https://www.cem.es/" }, { t: "Wikipedia: Sistema métrico decimal", url: "https://es.wikipedia.org/wiki/Sistema_métrico_decimal" }],
  revisado: REV,
};
