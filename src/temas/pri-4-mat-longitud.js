// Matemáticas 4º de Primaria: medidas de longitud. Dibujos propios en SVG.
const P = require("./_pri4a");
const { svg, t, AZ, RO, VE, NA, SO, MO } = P;

// Escalera de unidades: [abreviatura, color] de mayor a menor, con «× 10» al bajar.
const UNI = [["km", RO], ["hm", SO], ["dam", MO], ["m", AZ], ["dm", VE], ["cm", NA], ["mm", "var(--muted)"]];
const escalera = (marca = 3) => UNI.map(([u, c], i) => `<rect x="${12 + i * 34}" y="${24 + i * 16}" width="32" height="26" rx="5" fill="${c}" fill-opacity="${i === marca ? 0.45 : 0.2}" stroke="${c}" stroke-width="2"/>${t(28 + i * 34, 42 + i * 16, u, { s: 11, c: i === marca ? "var(--ink)" : c })}`).join("") + `${t(64, 150, "bajar: × 10", { s: 11, c: VE })}${t(196, 40, "subir: : 10", { s: 11, c: RO })}`;
// Regla con centímetros de 0 a n desde x0 con paso p.
const regla = (x0, y, n, p) => `<rect x="${x0 - 6}" y="${y}" width="${n * p + 12}" height="34" rx="4" fill="${SO}" fill-opacity=".25" stroke="${SO}" stroke-width="1.5"/>${[...Array(n * 10 + 1)].map((_, i) => `<path d="M${(x0 + (i * p) / 10).toFixed(1)} ${y} V ${y + (i % 10 ? (i % 5 ? 6 : 10) : 14)}" stroke="var(--ink)" stroke-width="${i % 10 ? 0.8 : 1.5}"/>`).join("")}${[...Array(n + 1)].map((_, i) => t(x0 + i * p, y + 27, String(i), { s: 10 })).join("")}`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Medidas de longitud",
  minutos: 50,
  objetivos: ["Conocer el metro y sus múltiplos y submúltiplos", "Elegir la unidad adecuada para medir cada longitud", "Cambiar de unidad multiplicando o dividiendo por 10, 100 y 1 000", "Medir con regla y resolver problemas de longitudes"],
  claves: ["longitud", "metro (m)", "decímetro", "centímetro", "milímetro", "kilómetro", "hectómetro", "decámetro", "regla", "cinta métrica", "estimar", "perímetro"],
  pregunta: ["Tu cuaderno mide unos 30 cm de largo y el patio unos 40 m. ¿Por qué no medimos el patio en centímetros?", "Podríamos, pero saldría un número muy grande: 40 m son <b>4 000 cm</b>. Por eso usamos <mark>unidades distintas según el tamaño</mark> de lo que medimos: centímetros para objetos pequeños, metros para habitaciones y patios, y kilómetros para las distancias entre ciudades."],
  bloques: [
    ["¿Qué es la longitud?", `<p>La <b>longitud</b> es lo que mide algo de un extremo a otro: lo largo, lo ancho o lo alto de un objeto, o la distancia entre dos lugares.</p><p>Antiguamente se medía con partes del cuerpo: palmos, pies, pasos… Pero cada persona tiene un pie distinto, ¡y las medidas no coincidían! Por eso se inventó una unidad igual para todos: el <mark>metro</mark>.</p><p>El <b>metro (m)</b> es la unidad principal de longitud. Un metro es, más o menos, lo que hay desde el suelo hasta la cintura de un adulto, o la anchura de una puerta.</p>`,
      svg("Medir con palmos da resultados distintos según la mano; el metro es igual para todos", `<rect x="20" y="40" width="220" height="16" rx="4" fill="${SO}" fill-opacity=".35" stroke="${SO}" stroke-width="1.5"/>${[0, 1, 2, 3].map((i) => `<path d="M${20 + i * 55} 64 q 27 14 55 0" fill="none" stroke="${AZ}" stroke-width="2"/>`).join("")}${t(130, 96, "4 palmos de un adulto", { s: 11, c: AZ })}${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M${20 + i * 36.6} 106 q 18 10 36.6 0" fill="none" stroke="${RO}" stroke-width="2"/>`).join("")}${t(130, 134, "6 palmos de un niño", { s: 11, c: RO })}${t(130, 164, "el metro: igual para todos", { s: 13, c: VE })}`)],
    ["Unidades más pequeñas que el metro", `<p>Para medir cosas más pequeñas que un metro usamos los <b>submúltiplos</b>:</p><ul><li><b>Decímetro (dm)</b>: 1 m = 10 dm. Un dm es como el ancho de una mano.</li><li><b>Centímetro (cm)</b>: 1 m = 100 cm. Un cm es el ancho de una uña.</li><li><b>Milímetro (mm)</b>: 1 m = 1 000 mm. Un mm es el grosor de una moneda fina.</li></ul><p>Y entre ellos: <mark>1 dm = 10 cm</mark> y <mark>1 cm = 10 mm</mark>.</p><p>En la regla del estuche están marcados los centímetros con números y, entre ellos, las rayitas pequeñas de los milímetros.</p>`,
      svg("Regla de 0 a 10 centímetros con las rayitas de los milímetros", `${regla(26, 50, 10, 21)}${t(130, 116, "1 cm = 10 mm", { s: 14, c: AZ })}${t(130, 142, "10 cm = 1 dm", { s: 14, c: VE })}`),
      P.V("lonB")],
    ["Unidades más grandes que el metro", `<p>Para medir distancias largas usamos los <b>múltiplos</b> del metro:</p><ul><li><b>Decámetro (dam)</b>: 1 dam = 10 m.</li><li><b>Hectómetro (hm)</b>: 1 hm = 100 m. Es como una pista de atletismo recta.</li><li><b>Kilómetro (km)</b>: 1 km = 1 000 m.</li></ul><p>El kilómetro es el múltiplo más usado: lo vemos en las señales de las carreteras y en las carreras populares de «5 km» o «10 km». Caminando a paso normal, se tarda unos <mark>12 o 15 minutos</mark> en recorrer 1 km.</p><p>El decámetro y el hectómetro casi no se usan en la vida diaria, pero son importantes para entender cómo se pasa de una unidad a otra.</p>`,
      P.filas("Múltiplos del metro", [["1 dam", "10 m", MO], ["1 hm", "100 m", SO], ["1 km", "1 000 m", RO]], "más grandes que el metro")],
    ["La escalera de las unidades", `<p>Todas las unidades de longitud se pueden ordenar en una <b>escalera</b>, de mayor a menor:</p><p style="text-align:center"><b>km · hm · dam · m · dm · cm · mm</b></p><p>Cada unidad es <mark>10 veces mayor</mark> que la que está a su derecha. Para pasar de una unidad a otra:</p><ul><li>Si <b>bajamos</b> (a una unidad más pequeña), <b>multiplicamos</b> por 10 en cada escalón.</li><li>Si <b>subimos</b> (a una unidad más grande), <b>dividimos</b> entre 10 en cada escalón.</li></ul><p>Tiene sentido: con unidades más pequeñas necesitamos más cantidad para medir lo mismo.</p>`,
      svg("Escalera de unidades de longitud de kilómetro a milímetro", escalera(3))],
    ["Cambiar de unidad", `<p>Veamos ejemplos con la escalera:</p><ul><li><b>3 m a cm</b>: bajo 2 escalones (m → dm → cm) → × 100 → <b>300 cm</b>.</li><li><b>5 km a m</b>: bajo 3 escalones → × 1 000 → <b>5 000 m</b>.</li><li><b>800 cm a m</b>: subo 2 escalones → : 100 → <b>8 m</b>.</li><li><b>40 mm a cm</b>: subo 1 escalón → : 10 → <b>4 cm</b>.</li></ul><p>Truco: cuenta los escalones y <mark>añade o quita un cero por cada escalón</mark> (si el número acaba en ceros).</p><p>A veces las medidas se dan con dos unidades: 1 m y 25 cm = 100 cm + 25 cm = <b>125 cm</b>.</p>`,
      P.filas("Cambios de unidad: multiplicar al bajar y dividir al subir", [["3 m → cm", "× 100 = 300 cm", VE], ["5 km → m", "× 1 000 = 5 000 m", VE], ["800 cm → m", ": 100 = 8 m", RO], ["40 mm → cm", ": 10 = 4 cm", RO]]),
      P.V("lonB2")],
    ["Elegir la unidad adecuada", `<p>Antes de medir, piensa qué unidad es la más <b>cómoda</b>:</p><ul><li><b>mm</b>: el grosor de un libro, el tamaño de una hormiga.</li><li><b>cm</b>: un lápiz, una hoja, tu altura (135 cm).</li><li><b>m</b>: una habitación, un autobús, una piscina.</li><li><b>km</b>: la distancia entre dos pueblos, un río, un viaje.</li></ul><p>Elegir bien evita números enormes o diminutos. Sería raro decir que un lápiz mide 0,00017 km o que Madrid y Valencia están a 35 000 000 cm. ¡Mucho mejor <mark>17 cm</mark> y <mark>350 km</mark>!</p>`,
      svg("Objetos y su unidad adecuada: hormiga en milímetros, lápiz en centímetros, autobús en metros y carretera en kilómetros", `${[["mm", "hormiga", NA], ["cm", "lápiz", VE], ["m", "autobús", AZ], ["km", "carretera", RO]].map(([u, o, c], i) => `<rect x="${14 + i * 60}" y="40" width="54" height="80" rx="10" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2"/>${t(41 + i * 60, 80, u, { s: 20, d: true, c })}${t(41 + i * 60, 108, o, { s: 10 })}`).join("")}${t(130, 152, "de lo más pequeño a lo más grande", { s: 11, c: "var(--muted)" })}`)],
    ["Medir con la regla y la cinta métrica", `<p>Para medir bien con la <b>regla</b>:</p><ol><li>Coloca el <mark>0</mark> de la regla justo en un extremo del objeto (¡no el borde de la regla!).</li><li>Mantén la regla recta y pegada al objeto.</li><li>Mira el número que coincide con el otro extremo. Si no cae justo en un número, cuenta los milímetros.</li></ol><p>Ejemplo: si el lápiz llega a la rayita 4 después del 12, mide <b>12 cm y 4 mm</b>, que son 124 mm.</p><p>Para longitudes más grandes usamos la <b>cinta métrica</b> (de costura o de obra) o el metro plegable.</p>`,
      svg("Lápiz medido con una regla desde el cero: llega a 7 centímetros y 5 milímetros", `${regla(26, 92, 10, 21)}<path d="M26 74 H 166" stroke="${SO}" stroke-width="12" stroke-linecap="butt"/><path d="M166 68 L 183.5 74 L 166 80 Z" fill="var(--ink)"/>${t(104, 50, "7 cm y 5 mm = 75 mm", { s: 13, c: RO })}<path d="M26 64 V 92 M183.5 64 V 92" stroke="${RO}" stroke-width="1.5" stroke-dasharray="3 3"/>${t(130, 162, "empieza siempre en el 0", { s: 12, c: "var(--muted)" })}`)],
    ["Estimar longitudes", `<p><b>Estimar</b> es calcular una medida aproximada sin instrumentos. Para hacerlo bien, ayuda tener <b>referencias</b> en la cabeza:</p><ul><li>El ancho de tu dedo: más o menos <b>1 cm</b>.</li><li>Tu palmo: unos <b>15 cm</b>.</li><li>Un paso largo de un adulto: casi <b>1 m</b>.</li><li>La altura de una puerta: unos <b>2 m</b>.</li><li>Lo que caminas en unos 15 minutos: <b>1 km</b>.</li></ul><p>Por ejemplo, si la pizarra mide como tres pasos largos, estimamos que mide unos <mark>3 m</mark>. Después podemos comprobarlo con la cinta métrica y ver cuánto nos hemos acercado.</p>`,
      P.filas("Referencias para estimar longitudes", [["Dedo", "≈ 1 cm", NA], ["Palmo", "≈ 15 cm", VE], ["Paso largo", "≈ 1 m", AZ], ["15 min andando", "≈ 1 km", RO]])],
    ["Problemas de longitud y perímetro", `<p>Para sumar o restar longitudes, todas deben estar en la <mark>misma unidad</mark>.</p><p><i>Una cinta mide 2 m y corto un trozo de 35 cm. ¿Cuánto queda?</i> Paso a cm: 2 m = 200 cm. 200 − 35 = <b>165 cm</b>.</p><p>El <b>perímetro</b> de una figura es la longitud de su borde: se suman todos sus lados. Un huerto rectangular de 8 m de largo y 5 m de ancho tiene un perímetro de 8 + 5 + 8 + 5 = <b>26 m</b>. Si queremos vallarlo, necesitaremos 26 metros de valla.</p>`,
      svg("Huerto rectangular de 8 por 5 metros: su perímetro es 26 metros", `<rect x="40" y="40" width="180" height="90" rx="4" fill="${VE}" fill-opacity=".18" stroke="${VE}" stroke-width="3"/>${t(130, 32, "8 m", { s: 13 })}${t(130, 148, "8 m", { s: 13 })}${t(24, 90, "5 m", { s: 13 })}${t(238, 90, "5 m", { s: 13 })}${t(130, 92, "8 + 5 + 8 + 5", { s: 13, c: VE })}${t(130, 170, "perímetro = 26 m", { s: 14, c: RO })}`)],
  ],
  figura: ["Medidas de longitud", P.columnas("Resumen: el metro, submúltiplos, múltiplos y cambios de unidad", [["unidad principal", "METRO", ["1 m", "una puerta de ancho"], AZ], ["más pequeñas", "dm · cm · mm", ["1 m = 100 cm", "1 cm = 10 mm"], VE], ["más grandes", "dam · hm · km", ["1 km = 1 000 m", "distancias"], RO], ["cada escalón × 10", "CAMBIAR", ["bajar: ×", "subir: :"], SO]])],
  video: P.V("lonV", true),
  ejemplos: [
    ["Expresa 4 m y 7 cm en centímetros.", ["4 m = 4 × 100 = 400 cm.", "400 cm + 7 cm = 407 cm."], "407 cm"],
    ["Ordena de menor a mayor: 2 m, 150 cm, 25 dm.", ["Lo paso todo a cm: 2 m = 200 cm; 25 dm = 250 cm.", "Comparo: 150 &lt; 200 &lt; 250."], "150 cm &lt; 2 m &lt; 25 dm"],
    ["Un ciclista recorre 3 km por la mañana y 1 500 m por la tarde. ¿Cuántos metros recorre en total?", ["3 km = 3 000 m.", "3 000 + 1 500 = 4 500 m."], "4 500 m (4 km y medio)"],
  ],
  errores: [
    "Medir con la regla empezando por el borde y no por el 0.",
    "Multiplicar cuando hay que dividir: al pasar a una unidad mayor, el número se hace más pequeño.",
    "Sumar longitudes en unidades distintas (2 m + 35 cm no es 37).",
    "Pensar que de m a cm se multiplica por 10 (son dos escalones: × 100).",
    "Elegir unidades poco adecuadas, como medir un viaje en centímetros.",
  ],
  ejercicios: [
    ["¿Cuántos centímetros son 6 m?", "600 cm."],
    ["¿Cuántos metros son 9 km?", "9 000 m."],
    ["Pasa 70 mm a cm y 500 cm a m.", "7 cm y 5 m."],
    ["¿Qué unidad usarías para medir una goma de borrar, una piscina y un río?", "cm (o mm), m y km."],
    ["Expresa en cm: 1 m y 45 cm.", "145 cm."],
    ["Ordena de mayor a menor: 1 km, 900 m, 12 hm.", "12 hm (1 200 m) &gt; 1 km &gt; 900 m."],
    ["Calcula 3 m − 80 cm en centímetros.", "300 − 80 = 220 cm."],
    ["Calcula el perímetro de un cuadrado de 15 cm de lado.", "15 × 4 = 60 cm."],
    ["Una carrera tiene 5 km. Laura lleva 3 750 m. ¿Cuántos metros le faltan?", "5 000 − 3 750 = 1 250 m."],
    ["Una cuerda de 12 m se corta en 4 trozos iguales. ¿Cuántos centímetros mide cada trozo?", "12 : 4 = 3 m = 300 cm."],
  ],
  quiz: [
    ["La unidad principal de longitud es…", ["el metro", "el kilómetro", "el centímetro"], "Las demás se forman a partir de él."],
    ["1 m =", ["100 cm", "10 cm", "1 000 cm"], "Dos escalones."],
    ["1 km =", ["1 000 m", "100 m", "10 000 m"], "Kilo significa mil."],
    ["1 cm =", ["10 mm", "100 mm", "1 mm"], "Un escalón."],
    ["Para medir un lápiz uso…", ["cm", "km", "hm"], "Es un objeto pequeño."],
    ["Al pasar de m a cm…", ["multiplico", "divido", "resto"], "Bajo en la escalera."],
    ["600 cm =", ["6 m", "60 m", "0,6 m"], "600 : 100."],
    ["¿Qué es más largo?", ["2 km", "1 900 m", "15 hm"], "2 000 m."],
    ["El perímetro es…", ["la suma de los lados", "lo que ocupa por dentro", "el lado más largo"], "La longitud del borde."],
    ["Un paso largo mide más o menos…", ["1 m", "1 cm", "1 km"], "Referencia para estimar."],
  ],
  examen: [
    ["3 dm =", ["30 cm", "300 cm", "3 cm"], "1 dm = 10 cm."],
    ["2 m y 5 cm =", ["205 cm", "25 cm", "250 cm"], "200 + 5."],
    ["8 000 m =", ["8 km", "80 km", "800 km"], "8 000 : 1 000."],
    ["Perímetro de un rectángulo de 6 m por 4 m:", ["20 m", "24 m", "10 m"], "6 + 4 + 6 + 4."],
  ],
  feynman: ["Por qué se inventó el metro", "Cuáles son los múltiplos y submúltiplos del metro", "Cómo se usa la escalera para cambiar de unidad", "Cómo se mide bien con una regla", "Qué es el perímetro y cómo se calcula"],
  mapa: ["MEDIDAS DE LONGITUD", [["Metro", "unidad principal", AZ], ["Submúltiplos", "dm · cm · mm", VE], ["Múltiplos", "dam · hm · km", RO], ["Cambiar", "bajar × 10 · subir : 10", SO]]],
  tarjetas: [
    ["Longitud", "Lo que mide algo de un extremo a otro."],
    ["Metro (m)", "Unidad principal de longitud."],
    ["1 m", "10 dm = 100 cm = 1 000 mm."],
    ["1 km", "1 000 m."],
    ["1 cm", "10 mm."],
    ["Bajar en la escalera", "Pasar a una unidad menor: multiplicar por 10 en cada escalón."],
    ["Subir en la escalera", "Pasar a una unidad mayor: dividir entre 10 en cada escalón."],
    ["Perímetro", "La suma de los lados de una figura."],
  ],
  familias: ["Medid juntos objetos de casa con una regla o una cinta métrica y apuntad las medidas.", "Antes de medir, intentad estimar y comparad después.", "En los viajes, leed las señales de kilómetros y calculad cuánto falta.", "Repasad las tarjetas dos minutos al día."],
  saberes: "Sentido de la medida: la longitud; el metro, sus múltiplos y submúltiplos; equivalencias y cambios de unidad; elección de la unidad adecuada; estimación, medición con instrumentos y perímetro",
  ideas: ["Medir el aula y el pasillo con pasos y con cinta métrica y comparar.", "Concurso de estimaciones de longitudes de objetos del aula.", "Escalera de unidades en el suelo para practicar los cambios saltando."],
});
