// Matemáticas 3º de Primaria: medidas de longitud. Dibujos propios en SVG.
const P = require("./_pri3a");
const { svg, t, flecha, AZ, RO, VE, NA, SO, MO } = P;

// Regla de x0 a x1 con n marcas numeradas (cada «paso» píxeles) y milímetros opcionales.
const regla = (x0, y, n, paso, o = {}) => {
  let s = `<rect x="${x0 - 6}" y="${y}" width="${n * paso + 12}" height="34" rx="4" fill="${SO}" fill-opacity=".2" stroke="${SO}" stroke-width="1.8"/>`;
  for (let i = 0; i <= n; i++) {
    s += `<path d="M${x0 + i * paso} ${y} V ${y + 14}" stroke="var(--ink)" stroke-width="1.6"/>${t(x0 + i * paso, y + 28, String(i), { s: 10 })}`;
    if (o.mm && i < n) for (let k = 1; k < 10; k++) s += `<path d="M${(x0 + i * paso + (k * paso) / 10).toFixed(1)} ${y} V ${y + (k === 5 ? 10 : 6)}" stroke="var(--ink)" stroke-width=".8"/>`;
  }
  return s;
};

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Medidas de longitud",
  minutos: 50,
  objetivos: ["Saber qué es medir y por qué usamos unidades iguales para todos", "Conocer el metro, el centímetro, el milímetro y el kilómetro", "Medir con la regla y elegir la unidad adecuada", "Pasar de una unidad a otra sencilla y resolver problemas de longitudes"],
  claves: ["longitud", "medir", "unidad", "metro (m)", "centímetro (cm)", "milímetro (mm)", "kilómetro (km)", "regla", "cinta métrica", "estimar", "distancia"],
  pregunta: ["Mide tu mesa con palmos y pide a un adulto que la mida con los suyos. ¿Os sale lo mismo?", "¡No! Sus palmos son más grandes que los tuyos, así que le salen <b>menos palmos</b>. Para que todo el mundo obtenga la misma medida, usamos <mark>unidades iguales para todos</mark>: el metro y sus amigos, el centímetro, el milímetro y el kilómetro."],
  bloques: [
    ["¿Qué es medir?", `<p>La <b>longitud</b> es lo que mide algo de largo, de ancho o de alto: el largo de una mesa, la altura de una persona, la distancia entre dos pueblos.</p><p><b>Medir</b> es comparar una longitud con otra que usamos como <mark>unidad</mark> y ver cuántas veces cabe. Si un lápiz cabe 6 veces a lo largo de la mesa, la mesa mide 6 lápices.</p><p>Antiguamente se medía con partes del cuerpo: <b>palmos</b>, <b>pies</b>, <b>pasos</b>… Pero cada persona tiene un tamaño distinto, y eso causaba líos. Por eso se inventaron unidades iguales para todo el mundo.</p>`,
      svg("Una mesa medida con palmos: un niño cuenta más palmos que un adulto", `<rect x="20" y="60" width="220" height="14" rx="3" fill="${NA}" fill-opacity=".4" stroke="${NA}" stroke-width="2"/><path d="M30 74 V 126 M230 74 V 126" stroke="${NA}" stroke-width="4"/>${[...Array(8)].map((_, i) => `<path d="M${20 + i * 27.5} 58 q 14 -16 27.5 0" fill="none" stroke="${VE}" stroke-width="2"/>`).join("")}${t(130, 30, "niño: 8 palmos", { s: 12, c: VE })}${[...Array(5)].map((_, i) => `<path d="M${20 + i * 44} 78 q 22 18 44 0" fill="none" stroke="${RO}" stroke-width="2"/>`).join("")}${t(130, 118, "adulto: 5 palmos", { s: 12, c: RO })}${t(130, 158, "¿cuál es la medida buena?", { s: 13, c: AZ })}`)],
    ["El metro", `<p>La unidad principal de longitud es el <b>metro</b>, que se escribe <mark>m</mark> (sin punto). Un metro es, más o menos, la distancia desde el suelo hasta la cintura de un adulto, o un paso muy largo.</p><p>Para medir en metros usamos la <b>cinta métrica</b> (la de los costureros), el <b>metro plegable</b> (el de los carpinteros) o el <b>flexómetro</b> (el que se enrolla).</p><p>Medimos en metros cosas como el largo de la clase (unos 8 m), la altura de una casa (unos 10 m) o la longitud de una piscina (25 m).</p>`,
      svg("Una niña junto a un metro: el metro le llega más o menos a la altura de la cintura de un adulto", `${P.persona(70, 46, AZ, { piernas: [[-10, 52], [10, 52]], brazos: [[-16, 22], [16, 22]] })}<path d="M70 53 V 106" stroke="${AZ}" stroke-width="3.2"/><rect x="120" y="56" width="16" height="104" fill="${SO}" fill-opacity=".35" stroke="${SO}" stroke-width="2"/>${[...Array(11)].map((_, i) => `<path d="M120 ${56 + i * 10.4} h ${i % 5 ? 5 : 9}" stroke="var(--ink)" stroke-width="1.2"/>`).join("")}${t(196, 100, "1 metro", { s: 18, d: true, c: SO })}${t(196, 124, "1 m", { s: 14, c: RO })}<path d="M20 160 H 240" stroke="var(--muted)" stroke-width="2"/>`)],
    ["El centímetro y el milímetro", `<p>Para medir cosas pequeñas el metro es muy grande. Por eso lo partimos:</p><ul><li>Si partimos el metro en <b>100</b> partes iguales, cada parte es un <b>centímetro</b> (<mark>cm</mark>). Un centímetro es más o menos el ancho de tu dedo meñique.</li><li>Si partimos el centímetro en <b>10</b> partes, cada parte es un <b>milímetro</b> (<mark>mm</mark>). Es muy pequeñito: el grosor de una tarjeta.</li></ul><p style="text-align:center"><b>1 m = 100 cm · 1 cm = 10 mm</b></p><p>La <b>regla</b> del estuche mide en centímetros, y las rayitas pequeñas entre los números son los milímetros.</p>`,
      svg("Regla de diez centímetros con sus milímetros", `${regla(26, 50, 10, 20, { mm: true })}<path d="M46 40 V 34 H 66 V 40" stroke="${RO}" stroke-width="2" fill="none"/>${t(56, 28, "1 cm", { s: 12, c: RO })}${t(130, 118, "1 cm = 10 mm", { s: 16, d: true, c: AZ })}${t(130, 148, "1 m = 100 cm", { s: 16, d: true, c: VE })}`),
      P.V("lonB")],
    ["El kilómetro", `<p>Para medir distancias muy largas (de una ciudad a otra, una carrera, un viaje), usamos el <b>kilómetro</b>, que se escribe <mark>km</mark>.</p><p style="text-align:center"><b>1 km = 1.000 m</b></p><p>Un kilómetro es lo que recorres andando en unos 12 o 15 minutos, o unas 10 vueltas a una pista de 100 metros.</p><p>En las carreteras hay señales con kilómetros: «Barcelona 120 km». Y los coches tienen un aparato que cuenta los kilómetros recorridos: el <b>cuentakilómetros</b>.</p>`,
      svg("Señal de carretera con distancias en kilómetros y un camino de mil metros", `<rect x="40" y="22" width="180" height="56" rx="8" fill="${AZ}" stroke="var(--ink)" stroke-width="1.5"/>${t(130, 46, "Barcelona 120 km", { s: 14, c: "#fff" })}${t(130, 68, "Girona 25 km", { s: 13, c: "#fff" })}<path d="M128 78 V 104 M132 78 V 104" stroke="var(--muted)" stroke-width="3"/><path d="M20 130 H 240" stroke="${NA}" stroke-width="6" stroke-linecap="round" stroke-dasharray="1 14"/>${t(130, 160, "1 km = 1.000 m", { s: 16, d: true, c: RO })}`)],
    ["Medir con la regla", `<p>Para medir bien con la regla hay que seguir unos pasos:</p><ol><li>Coloca el <b>0</b> de la regla justo en el <b>principio</b> del objeto (¡no el borde de la regla!).</li><li>Mantén la regla <b>recta</b>, pegada al objeto.</li><li>Mira el número que coincide con el <b>final</b> del objeto.</li><li>Escribe el número y la <b>unidad</b>: 7 cm.</li></ol><p>Si el final queda entre dos números, cuenta las rayitas de los milímetros: 7 cm y 5 mm. A veces lo redondeamos al centímetro más cercano.</p>`,
      svg("Un lápiz medido con la regla desde el cero: mide siete centímetros", `<rect x="26" y="36" width="124" height="14" fill="${SO}" fill-opacity=".5" stroke="var(--ink)" stroke-width="1.5"/><path d="M150 36 L 166 43 L 150 50 Z" fill="${NA}" fill-opacity=".4" stroke="var(--ink)" stroke-width="1.5"/>${regla(26, 62, 10, 20)}<path d="M26 54 V 62 M166 54 V 62" stroke="${RO}" stroke-width="2" stroke-dasharray="3 2"/>${t(14, 122, "empieza en 0", { s: 11, c: RO, a: "start" })}${t(166, 122, "acaba en 7", { s: 11, c: RO })}${t(130, 156, "el lápiz mide 7 cm", { s: 16, d: true, c: AZ })}`)],
    ["¿Qué unidad uso?", `<p>Para cada cosa elegimos la unidad más <b>cómoda</b>:</p>${P.tb(["unidad", "para medir…", "ejemplo"], [["mm", "cosas muy pequeñas", "una hormiga: 5 mm"], ["cm", "objetos pequeños", "un lápiz: 15 cm"], ["m", "objetos grandes y alturas", "una puerta: 2 m"], ["km", "distancias largas", "Madrid–Toledo: 70 km"]])}<p>No diríamos que un lápiz mide 0,15 m ni que el viaje a la playa es de 300.000 m. ¡Sería muy incómodo!</p><p>También es importante <mark>estimar</mark>: antes de medir, intenta adivinar cuánto mide. Así entrenas el ojo.</p>`,
      P.filas("Qué unidad de longitud usar", [["mm", "hormiga, grosor de una moneda", MO], ["cm", "lápiz, libro, mano", AZ], ["m", "puerta, clase, piscina", VE], ["km", "viaje, carrera, río", RO]])],
    ["Pasar de una unidad a otra", `<p>A veces necesitamos cambiar de unidad. Usamos las equivalencias:</p><ul><li><b>Metros a centímetros</b>: multiplicamos por 100. 3 m = 300 cm.</li><li><b>Centímetros a milímetros</b>: multiplicamos por 10. 4 cm = 40 mm.</li><li><b>Kilómetros a metros</b>: multiplicamos por 1.000. 2 km = 2.000 m.</li></ul><p>Y al revés, <mark>dividimos</mark>: 500 cm = 5 m; 60 mm = 6 cm; 3.000 m = 3 km.</p><p>Truco: si pasas a una unidad <b>más pequeña</b>, te salen <b>más</b> unidades (el número crece). Si pasas a una <b>más grande</b>, te salen menos.</p>`,
      svg("Escalera de unidades: kilómetro, metro, centímetro y milímetro con sus equivalencias", `${[["km", RO], ["m", VE], ["cm", AZ], ["mm", MO]].map(([u, c], i) => `<rect x="${14 + i * 60}" y="${22 + i * 30}" width="54" height="30" rx="8" fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="2"/>${t(41 + i * 60, 42 + i * 30, u, { s: 16, d: true, c })}`).join("")}${t(41, 68, "× 1.000", { s: 10.5, c: "var(--muted)" })}${t(101, 98, "× 100", { s: 10.5, c: "var(--muted)" })}${t(161, 128, "× 10", { s: 10.5, c: "var(--muted)" })}${t(70, 160, "bajo: multiplico", { s: 12, c: VE })}${t(196, 160, "subo: divido", { s: 12, c: RO })}`)],
    ["Sumar y comparar longitudes", `<p>Para <b>sumar</b>, <b>restar</b> o <b>comparar</b> longitudes, tienen que estar en la <mark>misma unidad</mark>.</p><p>¿Qué es más largo, una cuerda de 2 m o una de 150 cm? Pasamos 2 m a centímetros: 200 cm. Como 200 &gt; 150, la cuerda de 2 m es más larga.</p><p><b>Problema:</b> Laura salta 1 m y 20 cm, y Pablo salta 95 cm. ¿Cuánto más salta Laura?</p><ul><li>1 m y 20 cm = 100 cm + 20 cm = 120 cm.</li><li>120 − 95 = <b>25 cm</b>.</li></ul><p>Laura salta 25 cm más que Pablo.</p>`,
      svg("Comparar dos saltos: 120 centímetros y 95 centímetros, diferencia 25", `<path d="M20 60 H 224" stroke="${AZ}" stroke-width="8" stroke-linecap="round"/>${t(122, 46, "Laura: 1 m 20 cm = 120 cm", { s: 11.5, c: AZ })}<path d="M20 100 H 182" stroke="${VE}" stroke-width="8" stroke-linecap="round"/>${t(100, 86, "Pablo: 95 cm", { s: 11.5, c: VE })}<path d="M182 100 H 224" stroke="${RO}" stroke-width="3" stroke-dasharray="4 3"/>${t(204, 122, "25 cm", { s: 12, c: RO })}${t(130, 158, "120 − 95 = 25 cm", { s: 16, d: true, c: RO })}`)],
    ["Medidas del mundo", `<p>Algunas longitudes curiosas:</p><ul><li>Una <b>pulga</b> mide unos 2 mm, pero salta ¡hasta 30 cm!</li><li>Un niño de 3.º mide aproximadamente 1 m y 30 cm.</li><li>Una <b>jirafa</b> mide unos 5 m de alto.</li><li>La <b>Torre Eiffel</b> mide unos 330 m.</li><li>El río <b>Ebro</b> mide unos 930 km.</li></ul><p>Actividad: mide con una cinta métrica tu altura, tu palmo y tu paso. ¿Cuántos pasos tuyos hay de la puerta de clase a la pizarra? Así sabrás usar tu cuerpo para <mark>estimar</mark> distancias.</p>`,
      P.filas("Longitudes curiosas", [["Pulga", "2 mm (salta 30 cm)", MO], ["Niño de 3.º", "unos 130 cm", AZ], ["Jirafa", "unos 5 m", SO], ["Río Ebro", "unos 930 km", RO]])],
  ],
  figura: ["Medidas de longitud", P.columnas("Resumen: kilómetro, metro, centímetro y milímetro", [["distancias largas", "km", ["1 km", "= 1.000 m"], RO], ["unidad principal", "m", ["1 m", "= 100 cm"], VE], ["objetos pequeños", "cm", ["1 cm", "= 10 mm"], AZ], ["muy pequeño", "mm", ["regla:", "rayitas"], MO]])],
  video: P.V("lonV", true),
  ejemplos: [
    ["Pasa a centímetros: 4 m y 2 m 35 cm.", ["4 m = 4 × 100 = 400 cm.", "2 m 35 cm = 200 cm + 35 cm = 235 cm."], "400 cm y 235 cm"],
    ["Ordena de menor a mayor: 3 m, 250 cm, 1 km.", ["Pasamos todo a cm: 3 m = 300 cm.", "1 km = 1.000 m = 100.000 cm.", "250 &lt; 300 &lt; 100.000."], "250 cm &lt; 3 m &lt; 1 km"],
    ["Un caracol avanza 15 cm cada minuto. ¿Cuánto avanza en 8 minutos? ¿Llega a 1 m?", ["15 × 8 = 120 cm.", "1 m = 100 cm; 120 &gt; 100."], "Avanza 120 cm: sí, pasa del metro."],
  ],
  errores: [
    "Empezar a medir desde el borde de la regla y no desde el 0.",
    "Olvidar escribir la unidad: «mide 7» no dice nada.",
    "Comparar medidas en unidades distintas sin pasarlas a la misma.",
    "Pensar que 1 m = 10 cm (son 100 cm).",
    "Elegir una unidad poco adecuada, como medir un viaje en centímetros.",
  ],
  ejercicios: [
    ["¿Por qué no es buena idea medir con palmos?", "Porque cada persona tiene un palmo distinto y salen medidas diferentes."],
    ["Escribe la abreviatura de metro, centímetro, milímetro y kilómetro.", "m, cm, mm y km."],
    ["¿Cuántos centímetros tiene un metro? ¿Cuántos metros tiene un kilómetro?", "100 cm y 1.000 m."],
    ["¿Qué unidad usarías para medir una goma, una piscina y un viaje?", "cm, m y km."],
    ["Pasa a centímetros: 6 m y 3 m 8 cm.", "600 cm y 308 cm."],
    ["Pasa a milímetros: 5 cm. Pasa a metros: 700 cm.", "50 mm y 7 m."],
    ["¿Qué es más largo: 1 m o 90 cm?", "1 m, porque son 100 cm."],
    ["Pasa a metros: 4 km.", "4.000 m."],
    ["Una cinta mide 80 cm y otra 1 m y 15 cm. ¿Cuánto miden juntas?", "80 + 115 = 195 cm (1 m y 95 cm)."],
    ["María corre 3 km y su hermano 2.500 m. ¿Quién corre más? ¿Cuánto más?", "María: 3.000 − 2.500 = 500 m más."],
  ],
  quiz: [
    ["La unidad principal de longitud es…", ["el metro", "el kilo", "el litro"], "Se escribe m."],
    ["1 m =", ["100 cm", "10 cm", "1.000 cm"], "Cien centímetros."],
    ["1 cm =", ["10 mm", "100 mm", "1 mm"], "Diez milímetros."],
    ["1 km =", ["1.000 m", "100 m", "10 m"], "Mil metros."],
    ["Para medir un lápiz usamos…", ["cm", "km", "m"], "Es pequeño."],
    ["Para medir de Madrid a Sevilla usamos…", ["km", "cm", "mm"], "Distancia larga."],
    ["Al medir con la regla empezamos en…", ["el 0", "el 1", "el borde"], "El 0 al principio del objeto."],
    ["5 m =", ["500 cm", "50 cm", "5.000 cm"], "5 × 100."],
    ["¿Qué es más largo?", ["2 m", "150 cm", "190 cm"], "2 m = 200 cm."],
    ["3.000 m =", ["3 km", "30 km", "300 km"], "3.000 : 1.000."],
  ],
  examen: [
    ["8 cm =", ["80 mm", "8 mm", "800 mm"], "8 × 10."],
    ["1 m 40 cm =", ["140 cm", "104 cm", "41 cm"], "100 + 40."],
    ["¿Qué mide más o menos 2 m?", ["una puerta", "un lápiz", "un campo de fútbol"], "Altura de una puerta."],
    ["Un tren recorre 2 km y luego 500 m. En total…", ["2.500 m", "502 m", "7 km"], "2.000 + 500."],
  ],
  feynman: ["Qué es medir y por qué necesitamos unidades iguales para todos", "Cuántos centímetros tiene un metro y cuántos milímetros un centímetro", "Cómo se mide bien con la regla", "Qué unidad usarías para medir distintas cosas", "Por qué hay que pasar a la misma unidad antes de comparar"],
  mapa: ["MEDIDAS DE LONGITUD", [["km", "1 km = 1.000 m", RO], ["m", "1 m = 100 cm", VE], ["cm y mm", "1 cm = 10 mm", AZ], ["Medir", "regla desde el 0", SO]]],
  tarjetas: [
    ["Longitud", "Lo que mide algo de largo, ancho o alto."],
    ["Metro (m)", "Unidad principal de longitud."],
    ["Centímetro (cm)", "Cada una de las 100 partes de un metro."],
    ["Milímetro (mm)", "Cada una de las 10 partes de un centímetro."],
    ["Kilómetro (km)", "1.000 metros; para distancias largas."],
    ["Regla", "Se mide desde el 0, recta y pegada al objeto."],
    ["Estimar", "Calcular más o menos cuánto mide antes de medir."],
    ["Misma unidad", "Para comparar o sumar longitudes, pasa todo a la misma unidad."],
  ],
  familias: ["Medid la altura de toda la familia con una cinta métrica y anotadla.", "En los viajes, mirad las señales de kilómetros que faltan.", "Jugad a estimar: ¿cuánto mide la mesa? Después, medidla.", "Medid juguetes con la regla y ordenadlos de más corto a más largo."],
  saberes: "Medida: la longitud; unidades no convencionales y necesidad de unidades convencionales; metro, centímetro, milímetro y kilómetro y sus relaciones; instrumentos de medida; estimación; elección de la unidad adecuada; comparación y problemas con longitudes",
  ideas: ["Medir la clase con pasos y con cinta métrica y comparar.", "Concurso de estimación de longitudes de objetos.", "Salto de longitud en el patio midiendo en metros y centímetros."],
});

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer la historia del metro", "Estimar longitudes con referencias", "Calcular el perímetro de figuras sencillas", "Medir el propio cuerpo y distancias en un mapa"],
  lectura: { titulo: "La mesa del carpintero", html: `<p>El abuelo Ramón era carpintero, y aquel sábado Nico le ayudó a hacer una mesa para la casa de muñecas de su prima.</p><p>—Primero, hay que medir el hueco donde va a ir —dijo el abuelo, sacando un metro plegable de madera, de esos que se abren como un acordeón.</p><p>Nico lo desplegó. El hueco medía 35 centímetros de largo.</p><p>—Y ahora, el tablero —siguió el abuelo—. ¿Cuánto tiene que medir?</p><p>—¡35 centímetros también!</p><p>—Casi. Si lo hacemos exacto, no entrará. Le quitamos un poco: 34 centímetros y medio.</p><p>Nico marcó con un lápiz en la tabla. El abuelo serró por la línea con mucho cuidado.</p><p>—Mi padre, tu bisabuelo, no usaba metro —contó mientras serraba—. Medía con palmos y con pulgadas. Y cada carpintero tenía la mano de un tamaño… ¡Imagínate el lío!</p><p>Luego midieron las patas: cuatro trocitos de 12 centímetros cada uno. Nico se encargó de que fueran todos exactamente iguales, comprobándolos con la regla dos veces.</p><p>—Si una pata mide un milímetro más, la mesa cojeará —le advirtió el abuelo.</p><p>Al final, pintaron la mesa de azul. Cuando Nico la colocó en la casa de muñecas, encajó perfectamente.</p><p>—Medir bien —dijo el abuelo, satisfecho— es la mitad del trabajo.</p>` },
  tras: {
    "El metro": [
      ["La historia del metro", `<p>Hace siglos, cada pueblo medía con sus propias unidades: <b>palmos</b>, <b>pies</b>, <b>codos</b>, <b>varas</b>, <b>leguas</b>… El problema era que no medían lo mismo en todas partes. La vara de un sitio era más larga que la de otro, y eso causaba muchas peleas en los mercados.</p><p>A finales del siglo XVIII, en <b>Francia</b>, unos científicos decidieron inventar una unidad que fuera <mark>igual para todo el mundo</mark> y que no dependiera del cuerpo de nadie. La llamaron <b>metro</b>, que en griego significa «medida».</p><ul><li>Decidieron que el metro sería una parte muy pequeña de la distancia entre el <b>Polo Norte</b> y el <b>ecuador</b>: la diezmillonésima parte.</li><li>Para calcularlo, dos astrónomos, <b>Delambre</b> y <b>Méchain</b>, midieron durante siete años la distancia entre <b>Dunkerque</b> (Francia) y <b>Barcelona</b>, subiendo a montañas y torres.</li><li>Con sus medidas se fabricó una barra de metal que medía exactamente <b>un metro</b>. Se guardó en París como modelo.</li></ul><p>España adoptó el metro en <b>1849</b>, y hoy lo usan casi todos los países. Hoy en día los científicos definen el metro con la velocidad de la <b>luz</b>, que es todavía más exacta.</p><p>Algunos países, como Estados Unidos, todavía usan pies, pulgadas y millas.</p>`,
        H6.flujo("El metro", ["palmos|y varas", "Francia|siglo XVIII", "Dunkerque|Barcelona", "barra|patrón"], cAZ), ["v1-cQyITiZA", "¿Cómo Sabemos que un metro mide un metro? / 2. El metro", "CENTRO ESPAÑOL DE METROLOGIA", 131511]],
    ],
    "¿Qué unidad uso?": [
      ["Estimar longitudes", `<p><mark>Estimar</mark> una longitud es calcularla <b>a ojo</b>, de forma aproximada, sin regla. Es muy útil cuando no tenemos con qué medir o solo queremos hacernos una idea.</p><p>Para estimar bien, conviene tener <b>referencias</b>: cosas cuya medida ya conocemos.</p><ul><li>El <b>ancho de tu dedo meñique</b>: más o menos <b>1 cm</b>.</li><li>Tu <b>palmo</b> (de la punta del pulgar a la del meñique, con la mano abierta): unos <b>15 cm</b>.</li><li>Un <b>folio</b>: casi <b>30 cm</b> de largo.</li><li>Tu <b>paso</b> normal: unos <b>50 cm</b>.</li><li>La <b>altura de una puerta</b>: unos <b>2 m</b>.</li><li>Una <b>piscina</b> olímpica: <b>50 m</b> de largo.</li></ul><p><b>Cómo estimar</b>: compara lo que quieres medir con una referencia. «La mesa del profesor es como tres folios de larga: unos 90 cm.»</p><p><b>Juego de estimación</b>: antes de medir algo, cada uno escribe su estimación. Después se mide con la regla o la cinta métrica. Gana quien más se haya acercado. Si practicas, cada vez estimarás mejor.</p><p>Los carpinteros, albañiles y costureras tienen tanta práctica que calculan a ojo con muy poco error.</p>`,
        L6.filas("Referencias", [["dedo", "≈ 1 cm", cAZ], ["palmo", "≈ 15 cm", cVE], ["paso", "≈ 50 cm", cNA], ["puerta", "≈ 2 m", cRO]])],
    ],
    "Sumar y comparar longitudes": [
      ["El perímetro", `<p>El <mark>perímetro</mark> de una figura es la longitud de su <b>borde</b>, es decir, la suma de lo que miden todos sus lados. Es como si dieras la vuelta a la figura caminando por su borde.</p><p><b>Ejemplos</b>:</p><ul><li>Un <b>triángulo</b> con lados de 3 cm, 4 cm y 5 cm: 3 + 4 + 5 = <b>12 cm</b> de perímetro.</li><li>Un <b>rectángulo</b> de 6 cm de largo y 2 cm de ancho: tiene dos lados de 6 y dos lados de 2. 6 + 2 + 6 + 2 = <b>16 cm</b>.</li><li>Un <b>cuadrado</b> de 5 cm de lado: como sus 4 lados son iguales, 5 × 4 = <b>20 cm</b>.</li></ul><p>¿Para qué sirve calcular el perímetro?</p><ul><li>Para saber cuánta <b>valla</b> hace falta para rodear un huerto.</li><li>Para saber cuánta <b>cinta</b> necesitas para decorar el borde de un cuadro.</li><li>Para saber cuánto corres si das una <b>vuelta</b> al patio.</li></ul><p><b>Actividad</b>: mide con una cinta métrica los lados de tu mesa y calcula su perímetro. Después, da una vuelta al patio contando pasos y calcula el perímetro aproximado, sabiendo que cada paso mide unos 50 cm.</p>`,
        H6.dos("Perímetro", ["RECTÁNGULO", ["6 + 2 + 6 + 2", "= 16 cm", "dos y dos"], cAZ], ["CUADRADO", ["5 × 4", "= 20 cm", "4 iguales"], cVE]), ["d3rI0ONOMMY", "¿Qué es el perímetro? - Geometría para niños", "Smile and Learn - Español", 1019069]],
    ],
  },
  final: [
    ["Mi cuerpo en centímetros", `<p>Nuestro cuerpo esconde <mark>medidas curiosas</mark>. Con una cinta métrica y un compañero, puedes descubrirlas:</p><ul><li><b>Altura</b>: de pie, sin zapatos, contra la pared.</li><li><b>Envergadura</b>: con los brazos abiertos en cruz, de la punta de un dedo corazón a la del otro. En la mayoría de las personas, la envergadura es <b>casi igual que la altura</b>. ¡Compruébalo!</li><li><b>Palmo</b> y <b>pie</b>: el pie de un adulto suele medir algo más que su palmo.</li><li><b>Contorno de la cabeza</b>: rodea la frente con la cinta.</li></ul><p>Hace más de 500 años, <b>Leonardo da Vinci</b> dibujó el famoso <b>Hombre de Vitruvio</b>: un hombre con los brazos y las piernas abiertos, dentro de un círculo y de un cuadrado. Con él quería mostrar las proporciones del cuerpo humano: por ejemplo, que la envergadura es igual a la altura, y por eso el cuerpo cabe en un cuadrado.</p><p><b>Actividad</b>: mide a cinco compañeros y apunta en una tabla su altura y su envergadura. ¿Se cumple la regla de Leonardo? ¿Cuál es la diferencia más grande?</p><p>Recuerda: todos crecemos a ritmos distintos. ¡No hay medidas mejores ni peores!</p>`,
      L6.filas("Mi cuerpo", [["altura", "de pie", cAZ], ["envergadura", "≈ altura", cVE], ["palmo", "mano abierta", cNA], ["cabeza", "contorno", cMO]])],
    ["Distancias en el mapa", `<p>En un <mark>mapa</mark> las ciudades están dibujadas mucho más cerca que en la realidad. Para saber la distancia real, los mapas tienen una <b>escala</b>: una barra que dice cuántos kilómetros reales equivalen a cada centímetro del mapa.</p><p><b>Ejemplo</b>: en un mapa, la escala dice que <b>1 cm = 10 km</b>.</p><ul><li>Medimos con la regla la distancia entre dos pueblos: <b>4 cm</b>.</li><li>Calculamos: 4 × 10 = <b>40 km</b> de distancia real.</li></ul><p>Pero ¡cuidado! Esa es la distancia <b>en línea recta</b>, «a vuelo de pájaro». Las carreteras tienen curvas, así que el camino real en coche suele ser más largo.</p><p>Para medir carreteras con curvas en el mapa, se puede usar un <b>hilo</b>: se coloca siguiendo las curvas, se estira y se mide con la regla.</p><p>Hoy usamos mucho los <b>mapas del móvil</b>, que calculan las distancias solos. Los coches tienen un <b>cuentakilómetros</b> que mide cuántos kilómetros recorren, y en las carreteras hay <b>postes kilométricos</b> que indican en qué kilómetro estamos.</p><p><b>Actividad</b>: en un plano de tu barrio, mide la distancia de tu casa al colegio y calcula la distancia real con la escala.</p>`,
      H6.flujo("Escala", ["1 cm =|10 km", "mido|4 cm", "4 × 10|", "= 40 km|en recta"], cNA)],
  ],
  ejemplos: [
    ["Calcula el perímetro de un rectángulo de 8 cm por 3 cm.", ["Tiene dos lados de 8 y dos de 3.", "8 + 3 + 8 + 3."], "22 cm."],
    ["En un mapa, 1 cm = 5 km. Dos pueblos están a 6 cm. ¿Distancia real?", ["Cada centímetro son 5 km.", "6 × 5."], "30 km en línea recta."],
  ],
  errores: ["Sumar solo dos lados del rectángulo para el perímetro: hay que sumar los cuatro.", "Pensar que la distancia en el mapa es igual que por carretera: la carretera suele ser más larga."],
  ejercicios: [
    ["b", "¿Dónde se inventó el metro?", "En Francia."],
    ["b", "¿Cuánto mide más o menos tu paso?", "Unos 50 cm."],
    ["b", "Calcula el perímetro de un cuadrado de 3 cm de lado.", "12 cm."],
    ["b", "¿Qué es la envergadura?", "La distancia de un dedo a otro con los brazos abiertos."],
    ["b", "¿Qué dibujó Leonardo para mostrar las proporciones del cuerpo?", "El Hombre de Vitruvio."],
    ["m", "Calcula el perímetro de un triángulo de lados 6, 7 y 8 cm.", "21 cm."],
    ["m", "Estima la longitud de tu mesa en folios y en centímetros.", "Respuesta abierta."],
    ["m", "En un mapa 1 cm = 20 km. ¿Cuánto son 3 cm?", "60 km."],
    ["m", "¿Por qué se inventó el metro?", "Para tener una unidad igual en todas partes."],
    ["m", "¿Qué ciudades unía la medición de Delambre y Méchain?", "Dunkerque y Barcelona."],
    ["a", "Un huerto cuadrado tiene 7 m de lado. ¿Cuánta valla hace falta?", "28 m."],
    ["a", "Mide la altura y la envergadura de cinco compañeros y compáralas.", "Respuesta abierta."],
    ["a", "Una mesa mide 120 cm por 60 cm. ¿Cuánto mide su perímetro en metros?", "360 cm = 3,6 m."],
    ["a", "En la lectura, ¿por qué el tablero mide 34,5 cm y no 35?", "Para que quepa en el hueco."],
  ],
  quiz: [
    ["Metro significa en griego…", ["medida", "metal", "largo"], "Historia."],
    ["Un folio mide casi…", ["30 cm", "3 cm", "3 m"], "Estimar."],
    ["El perímetro es la longitud del…", ["borde", "centro", "interior"], "Perímetro."],
    ["Según Leonardo, la envergadura es igual a la…", ["altura", "cabeza", "pierna"], "Cuerpo."],
    ["La escala de un mapa dice…", ["cuántos km son cada cm", "el color", "la hora"], "Mapa."],
  ],
  examen: [
    ["En la lectura, ¿cuánto medía cada pata?", ["12 cm", "35 cm", "34 cm"], "Lectura."],
    ["¿En qué año adoptó España el metro?", ["1849", "1492", "2002"], "Historia."],
  ],
  tarjetas: [
    ["Historia del metro", "Francia, siglo XVIII; Dunkerque-Barcelona; España 1849."],
    ["Estimar", "Dedo 1 cm, palmo 15 cm, paso 50 cm, puerta 2 m."],
    ["Perímetro", "Suma de todos los lados; cuadrado: lado × 4."],
    ["Cuerpo y mapas", "Envergadura ≈ altura; escala: cm del mapa × km."],
  ],
  glosario: [
    ["Vara", "Antigua medida de longitud."],
    ["Legua", "Antigua medida de distancias largas."],
    ["Ecuador", "Línea imaginaria que divide la Tierra en dos mitades."],
    ["Patrón", "Modelo que sirve de referencia."],
    ["Estimar", "Calcular a ojo."],
    ["Referencia", "Medida conocida para comparar."],
    ["Perímetro", "Longitud del borde de una figura."],
    ["Envergadura", "Distancia entre las puntas de los brazos abiertos."],
    ["Proporción", "Relación de tamaño entre partes."],
    ["Escala", "Relación entre el mapa y la realidad."],
    ["Cuentakilómetros", "Aparato que mide los km recorridos."],
    ["A vuelo de pájaro", "En línea recta."],
  ],
  situacion: {
    titulo: "Los medidores del colegio",
    reto: "La clase mide el colegio y a sí misma para hacer un plano y una ficha de medidas.",
    pasos: ["Estimar y medir objetos de clase y comparar resultados.", "Calcular el perímetro del aula y del patio.", "Medir la altura y la envergadura de toda la clase.", "Dibujar un plano del colegio con una escala sencilla."],
    producto: "Un plano del colegio y una tabla de medidas de la clase.",
    evaluacion: ["Explica el origen del metro.", "Estima longitudes.", "Calcula perímetros.", "Usa la escala de un mapa."],
  },
});
