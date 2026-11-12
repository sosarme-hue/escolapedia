// Matemáticas 6º de Primaria: estadística y probabilidad. Dibujos propios en SVG.
const P = require("./_pri6a");
const { svg, t, barras, AZ, RO, VE, NA, SO, MO } = P;

// Sector circular de un gráfico de sectores.
const sector = (cx, cy, r, a1, a2, c) => {
  const p = (a) => `${(cx + r * Math.cos(((a - 90) * Math.PI) / 180)).toFixed(1)} ${(cy + r * Math.sin(((a - 90) * Math.PI) / 180)).toFixed(1)}`;
  return `<path d="M${cx} ${cy} L ${p(a1)} A ${r} ${r} 0 ${a2 - a1 > 180 ? 1 : 0} 1 ${p(a2)} Z" fill="${c}" fill-opacity=".55" stroke="var(--paper)" stroke-width="2"/>`;
};

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Estadística y probabilidad",
  minutos: 55,
  objetivos: ["Recoger datos y organizarlos en tablas de frecuencias", "Representar e interpretar gráficos de barras, líneas y sectores", "Calcular la media, la mediana, la moda y el rango", "Distinguir sucesos seguros, posibles e imposibles y calcular probabilidades sencillas"],
  claves: ["población", "muestra", "variable", "frecuencia absoluta", "frecuencia relativa", "gráfico de barras", "gráfico de sectores", "media", "mediana", "moda", "rango", "suceso", "probabilidad"],
  pregunta: ["En tu clase, ¿cuál es el deporte favorito? ¿Cómo lo averiguarías de forma ordenada?", "Haciendo una pequeña <b>investigación estadística</b>: preguntas a todos, anotas las respuestas en una <b>tabla de frecuencias</b>, las dibujas en un <b>gráfico</b> y miras cuál se repite más. Ese dato, la <mark>moda</mark>, es el deporte favorito."],
  bloques: [
    ["¿Qué es la estadística?", `<p>La <b>estadística</b> es la parte de las matemáticas que <mark>recoge, organiza, representa e interpreta datos</mark> para sacar conclusiones.</p><ul><li><b>Población</b>: el grupo completo que queremos estudiar (todos los alumnos del colegio).</li><li><b>Muestra</b>: una parte de la población que estudiamos cuando no podemos preguntar a todos (dos clases de cada curso).</li><li><b>Variable</b>: lo que estudiamos. Puede ser <b>cualitativa</b>, si se responde con palabras (color favorito), o <b>cuantitativa</b>, si se responde con números (número de hermanos).</li></ul>`,
      P.filas("Conceptos de estadística: población, muestra, variable cualitativa y cuantitativa", [["Población", "todo el grupo", AZ], ["Muestra", "una parte del grupo", VE], ["Cualitativa", "color favorito", SO], ["Cuantitativa", "número de hermanos", RO]])],
    ["Tablas de frecuencias", `<p>Al recoger datos, los contamos y los ordenamos en una <b>tabla de frecuencias</b>:</p><ul><li><b>Frecuencia absoluta</b>: cuántas veces aparece cada dato.</li><li><b>Frecuencia relativa</b>: la frecuencia absoluta dividida entre el total de datos. Se puede dar como fracción, decimal o porcentaje.</li></ul><p>Ejemplo: se pregunta a 20 alumnos por su deporte favorito. 8 dicen fútbol, 5 baloncesto, 4 natación y 3 tenis. La frecuencia relativa del fútbol es 8/20 = 0,4 = <mark>40 %</mark>. La suma de todas las frecuencias relativas siempre es 1 (el 100 %).</p>`,
      P.tabla("Tabla de frecuencias del deporte favorito de veinte alumnos", ["Deporte", "Abs.", "Rel."], [["Fútbol", "8", "40 %"], ["Baloncesto", "5", "25 %"], ["Natación", "4", "20 %"], ["Tenis", "3", "15 %"]], AZ)],
    ["Gráficos de barras", `<p>Un <b>gráfico de barras</b> dibuja cada dato con una barra cuya altura es su frecuencia. Así se ve de un vistazo qué dato es el más frecuente.</p><p>Para hacerlo bien:</p><ul><li>Dibuja dos ejes: en el horizontal, los datos; en el vertical, las frecuencias.</li><li>Elige una <b>escala</b> adecuada (de 1 en 1, de 2 en 2…).</li><li>Todas las barras tienen el <b>mismo ancho</b> y están separadas.</li><li>Pon un <b>título</b> y el nombre de cada eje.</li></ul>`,
      svg("Gráfico de barras del deporte favorito: fútbol 8, baloncesto 5, natación 4 y tenis 3", `${barras(30, 140, 210, 96, [["fútbol", 8, AZ], ["balonc.", 5, VE], ["natación", 4, SO], ["tenis", 3, RO]], 8)}<path d="M30 140 V 22" stroke="var(--muted)" stroke-width="2"/>${t(130, 20, "Deporte favorito (20 alumnos)", { s: 11, c: "var(--muted)" })}`)],
    ["Gráficos de líneas y de sectores", `<p>Un <b>gráfico de líneas</b> (polígono de frecuencias) une con segmentos los puntos de cada dato. Es ideal para ver cómo <b>cambia algo con el tiempo</b>: la temperatura a lo largo de la semana o la altura de una planta cada mes.</p><p>Un <b>gráfico de sectores</b> es un círculo dividido en trozos, como una pizza. Cada sector es proporcional a la frecuencia. Sirve para ver <b>qué parte del total</b> es cada dato. Como el círculo tiene 360°, un dato del 25 % ocupa 90° (un cuarto).</p>`,
      svg("Gráfico de sectores del deporte favorito y gráfico de líneas de temperaturas de una semana", `${sector(64, 84, 50, 0, 144, AZ)}${sector(64, 84, 50, 144, 234, VE)}${sector(64, 84, 50, 234, 306, SO)}${sector(64, 84, 50, 306, 360, RO)}${t(64, 156, "sectores", { s: 11 })}${t(86, 70, "40 %", { s: 10 })}<path d="M134 130 H 248 M134 130 V 40" stroke="var(--muted)" stroke-width="1.6"/>${(() => { const v = [14, 16, 15, 19, 21, 20, 23], pts = v.map((x, i) => `${142 + i * 17},${130 - (x - 10) * 6}`); return `<polyline points="${pts.join(" ")}" fill="none" stroke="${RO}" stroke-width="2.4"/>${pts.map((p) => `<circle cx="${p.split(",")[0]}" cy="${p.split(",")[1]}" r="3" fill="${RO}"/>`).join("")}`; })()}${t(192, 156, "líneas", { s: 11 })}${t(192, 32, "temperatura (°C)", { s: 9, c: "var(--muted)" })}`)],
    ["La media", `<p>La <b>media</b> (o media aritmética) es el valor que tendría cada dato si <mark>repartiéramos el total a partes iguales</mark>.</p><p style="text-align:center"><b>media = suma de todos los datos : número de datos</b></p><p>Ejemplo: Lucía ha sacado en cinco exámenes 6, 8, 7, 9 y 5. Suma: 6 + 8 + 7 + 9 + 5 = 35. Media: 35 : 5 = <b>7</b>.</p><p>La media puede ser un número con decimales, aunque los datos no los tengan: la media de 2, 3 y 3 es 8 : 3 ≈ 2,67.</p>`,
      svg("La media iguala las barras: notas 6, 8, 7, 9 y 5 tienen media 7", `${barras(20, 140, 220, 110, [["6", 6, AZ], ["8", 8, AZ], ["7", 7, AZ], ["9", 9, AZ], ["5", 5, AZ]], 10)}<path d="M20 ${140 - 77} H 240" stroke="${RO}" stroke-width="2.5" stroke-dasharray="6 4"/>${t(130, 22, "media = 35 : 5 = 7", { s: 13, c: RO })}`),
      P.V("estB")],
    ["Mediana, moda y rango", `<ul><li>La <b>moda</b> es el dato que <mark>más se repite</mark>. En 3, 5, 5, 6, 5, 2, la moda es 5. Puede haber más de una moda.</li><li>La <b>mediana</b> es el dato que queda <mark>en el centro</mark> cuando los ordenamos de menor a mayor. En 2, 4, 7, 8, 9, la mediana es 7. Si hay un número par de datos, es la media de los dos centrales: en 2, 4, 6, 10 es (4 + 6) : 2 = 5.</li><li>El <b>rango</b> es la diferencia entre el dato mayor y el menor. Dice si los datos están muy <b>dispersos</b>. En 2, 4, 7, 8, 9, el rango es 9 − 2 = 7.</li></ul>`,
      svg("Datos ordenados 2, 4, 7, 8, 9: la mediana es el del centro, 7; el rango es 9 menos 2", `${[2, 4, 7, 8, 9].map((v, i) => `<rect x="${24 + i * 44}" y="56" width="36" height="36" rx="8" fill="${i === 2 ? VE : "var(--card)"}" fill-opacity="${i === 2 ? 0.35 : 1}" stroke="${i === 2 ? VE : AZ}" stroke-width="2"/>${t(42 + i * 44, 80, String(v), { s: 16, d: true })}`).join("")}${t(130, 116, "mediana = 7 (el del centro)", { s: 12, c: VE })}${t(130, 40, "ordenados de menor a mayor", { s: 11, c: "var(--muted)" })}${t(130, 152, "rango = 9 − 2 = 7", { s: 12, c: RO })}`)],
    ["Experimentos aleatorios y sucesos", `<p>Un <b>experimento aleatorio</b> es aquel cuyo resultado <mark>no se puede saber de antemano</mark>, aunque conozcamos todos los resultados posibles: lanzar un dado, tirar una moneda o sacar una carta.</p><p>Un <b>suceso</b> es cualquier resultado o grupo de resultados. Puede ser:</p><ul><li><b>Seguro</b>: ocurre siempre. Al lanzar un dado, «sacar un número menor que 7».</li><li><b>Posible</b>: puede ocurrir o no. «Sacar un 6».</li><li><b>Imposible</b>: no ocurre nunca. «Sacar un 8».</li></ul><p>Entre los posibles, unos son <b>más probables</b> que otros: «sacar un número par» es más probable que «sacar un 6».</p>`,
      P.filas("Sucesos al lanzar un dado: seguro, posible e imposible", [["Seguro", "sacar menos de 7", VE], ["Posible", "sacar un 6", SO], ["Imposible", "sacar un 8", RO]], "Lanzamos un dado de 6 caras")],
    ["Calcular la probabilidad", `<p>La <b>probabilidad</b> de un suceso es un número entre 0 y 1 que dice <mark>cómo de fácil es que ocurra</mark>. Si todos los resultados tienen las mismas posibilidades, se calcula con la <b>regla de Laplace</b>:</p><p style="text-align:center"><b>probabilidad = casos favorables : casos posibles</b></p><p>Ejemplo: en una bolsa hay 3 bolas rojas y 5 azules. ¿Probabilidad de sacar roja? Favorables: 3. Posibles: 8. P = <b>3/8</b> = 0,375 = 37,5 %.</p><p>Un suceso imposible tiene probabilidad <b>0</b>; uno seguro, probabilidad <b>1</b>.</p>`,
      svg("Bolsa con tres bolas rojas y cinco azules: la probabilidad de sacar roja es tres octavos", `<path d="M40 50 Q 30 150 100 156 Q 170 150 160 50 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${[[70, 90, RO], [100, 80, RO], [130, 96, RO], [64, 124, AZ], [92, 118, AZ], [120, 128, AZ], [146, 120, AZ], [104, 140, AZ]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="11" fill="${c}" fill-opacity=".7"/>`).join("")}${t(214, 72, "P(roja) =", { s: 13, d: true })}${t(214, 100, "3/8", { s: 22, d: true, c: RO })}${t(214, 128, "favorables : posibles", { s: 9, c: "var(--muted)" })}`),
      P.V("estB2")],
    ["Comparar probabilidades y hacer predicciones", `<p>La probabilidad sirve para tomar decisiones. ¿Qué es más probable al lanzar un dado, sacar un número mayor que 4 o un número par?</p><ul><li>Mayor que 4: {5, 6} → 2/6 = 1/3.</li><li>Par: {2, 4, 6} → 3/6 = 1/2.</li></ul><p>Es más probable sacar par. Pero ojo: la probabilidad <b>no</b> garantiza el resultado. Si lanzas una moneda y sale cara cinco veces seguidas, la siguiente vez la probabilidad de cara sigue siendo <mark>1/2</mark>: la moneda no tiene memoria.</p><p>Si repites un experimento muchísimas veces, la frecuencia relativa se acerca cada vez más a la probabilidad.</p>`,
      svg("Escala de probabilidad de 0, imposible, a 1, seguro, con un medio en el centro", `<rect x="20" y="70" width="220" height="20" rx="10" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><rect x="20" y="70" width="220" height="20" rx="10" fill="${AZ}" fill-opacity=".15"/>${[[20, "0", RO, "imposible"], [130, "1/2", SO, "igual de probable"], [240, "1", VE, "seguro"]].map(([x, v, c, e]) => `<circle cx="${x}" cy="80" r="7" fill="${c}"/>${t(x, 60, v, { s: 14, d: true, c })}${t(x, 114, e, { s: 10, c, a: x === 20 ? "start" : x === 240 ? "end" : "middle" })}`).join("")}<circle cx="93" cy="80" r="5" fill="var(--ink)"/>${t(93, 140, "mayor que 4: 1/3", { s: 10 })}<circle cx="130" cy="80" r="5" fill="var(--ink)"/>${t(170, 158, "par: 1/2", { s: 10 })}`)],
  ],
  figura: ["Estadística y probabilidad", P.columnas("Resumen: frecuencias, gráficos, parámetros y probabilidad", [["contar datos", "FRECUENCIAS", ["absoluta", "relativa = abs. : total"], AZ], ["ver los datos", "GRÁFICOS", ["barras · líneas", "sectores"], VE], ["resumir", "PARÁMETROS", ["media · mediana", "moda · rango"], SO], ["favorables : posibles", "PROBABILIDAD", ["de 0 (imposible)", "a 1 (seguro)"], RO]])],
  video: P.V("estV", true),
  ejemplos: [
    ["Calcula la media, la mediana, la moda y el rango de: 4, 7, 3, 7, 9, 6.", ["Media: (4 + 7 + 3 + 7 + 9 + 6) : 6 = 36 : 6 = 6.", "Ordenados: 3, 4, 6, 7, 7, 9 → mediana = (6 + 7) : 2 = 6,5.", "Moda: 7 (aparece dos veces).", "Rango: 9 − 3 = 6."], "media 6; mediana 6,5; moda 7; rango 6"],
    ["En una encuesta a 40 personas, 10 prefieren el verano. ¿Cuál es la frecuencia relativa en porcentaje? ¿Cuántos grados ocuparía en un gráfico de sectores?", ["Frecuencia relativa: 10/40 = 0,25 = 25 %.", "25 % de 360° = 90°."], "25 % y 90°"],
    ["En una ruleta con 10 casillas numeradas del 1 al 10, ¿cuál es la probabilidad de que salga un múltiplo de 3?", ["Casos posibles: 10.", "Favorables: 3, 6 y 9 → 3.", "P = 3/10."], "3/10 = 0,3 = 30 %"],
  ],
  errores: [
    "Calcular la mediana sin ordenar antes los datos.",
    "Confundir la moda (lo que más se repite) con la media.",
    "Dibujar barras de distinto ancho o sin escala en los ejes.",
    "Dar una probabilidad mayor que 1 o negativa: siempre está entre 0 y 1.",
    "Pensar que, tras varias caras seguidas, es más probable que salga cruz.",
  ],
  ejercicios: [
    ["Di si la variable es cualitativa o cuantitativa: color de ojos, altura, marca de móvil, número de mascotas.", "Cualitativa, cuantitativa, cualitativa, cuantitativa."],
    ["Haz la tabla de frecuencias absolutas de estas notas: 5, 7, 7, 8, 5, 9, 7, 6, 8, 7.", "5 → 2; 6 → 1; 7 → 4; 8 → 2; 9 → 1 (total 10)."],
    ["Con los datos anteriores, calcula la frecuencia relativa de la nota 7.", "4/10 = 0,4 = 40 %."],
    ["Calcula la media de: 12, 15, 9, 14.", "50 : 4 = 12,5."],
    ["Calcula la mediana de: 8, 3, 5, 10, 6.", "Ordenados 3, 5, 6, 8, 10 → mediana 6."],
    ["Calcula la moda y el rango de: 2, 5, 3, 5, 8, 5, 1.", "Moda 5; rango 7."],
    ["¿Qué gráfico usarías para mostrar cómo crece un bebé mes a mes? ¿Y para mostrar el reparto de un presupuesto?", "De líneas; de sectores."],
    ["Clasifica en seguro, posible o imposible al sacar una carta de una baraja española: sacar un oro; sacar un 15; sacar una carta.", "Posible, imposible, seguro."],
    ["Al lanzar un dado, ¿cuál es la probabilidad de sacar un número primo?", "{2, 3, 5}: 3/6 = 1/2."],
    ["En una caja hay 4 caramelos de fresa, 6 de limón y 2 de menta. ¿Cuál es la probabilidad de sacar uno de limón? ¿Y uno que no sea de menta?", "6/12 = 1/2; 10/12 = 5/6."],
  ],
  quiz: [
    ["El grupo completo que se estudia es la…", ["población", "muestra", "moda"], "Todos."],
    ["«Color favorito» es una variable…", ["cualitativa", "cuantitativa", "aleatoria"], "Se responde con palabras."],
    ["La frecuencia absoluta es…", ["las veces que aparece un dato", "el dato mayor", "el total de datos"], "Contar."],
    ["Para ver cómo cambia la temperatura cada día, uso un gráfico de…", ["líneas", "sectores", "pictogramas"], "Cambios en el tiempo."],
    ["Media de 2, 4 y 9…", ["5", "4", "15"], "15 : 3."],
    ["Moda de 1, 3, 3, 4, 6…", ["3", "4", "6"], "Se repite más."],
    ["Mediana de 1, 3, 3, 4, 6…", ["3", "4", "3,4"], "El del centro."],
    ["Sacar un 7 con un dado normal es un suceso…", ["imposible", "seguro", "posible"], "Solo hay del 1 al 6."],
    ["Probabilidad de sacar cara con una moneda…", ["1/2", "1", "2"], "1 favorable de 2."],
    ["La probabilidad de un suceso seguro es…", ["1", "0", "100"], "Ocurre siempre."],
  ],
  examen: [
    ["Rango de 4, 12, 7, 9…", ["8", "9", "16"], "12 − 4."],
    ["En un gráfico de sectores, un dato del 50 % ocupa…", ["180°", "90°", "50°"], "La mitad de 360°."],
    ["Probabilidad de sacar un número par con un dado…", ["1/2", "1/3", "1/6"], "3 de 6."],
    ["Mediana de 2, 5, 8, 11…", ["6,5", "5", "8"], "(5 + 8) : 2."],
  ],
  feynman: ["Qué diferencia hay entre población y muestra", "Qué son la frecuencia absoluta y la relativa", "Qué gráfico conviene usar en cada caso", "Cómo se calculan la media, la mediana, la moda y el rango", "Cómo se calcula una probabilidad con la regla de Laplace"],
  mapa: ["ESTADÍSTICA Y AZAR", [["Datos", "población · muestra · variable", AZ], ["Tablas y gráficos", "frecuencias · barras · sectores", VE], ["Parámetros", "media · mediana · moda", SO], ["Probabilidad", "favorables : posibles", RO]]],
  tarjetas: [
    ["Frecuencia absoluta", "Número de veces que aparece un dato."],
    ["Frecuencia relativa", "Frecuencia absoluta : número total de datos."],
    ["Media", "Suma de los datos : número de datos."],
    ["Mediana", "El dato central cuando se ordenan."],
    ["Moda", "El dato que más se repite."],
    ["Rango", "Dato mayor − dato menor."],
    ["Regla de Laplace", "Probabilidad = casos favorables : casos posibles."],
    ["Valores de la probabilidad", "De 0 (imposible) a 1 (seguro)."],
  ],
  familias: ["Haced una encuesta familiar (comida, película o deporte favorito) y dibujad un gráfico de barras.", "Apuntad la temperatura máxima de cada día durante una semana y calculad la media.", "Jugad a juegos de dados y calculad qué resultados son más probables.", "Repasad las tarjetas dos minutos al día."],
  saberes: "Sentido estocástico: recogida y organización de datos, tablas de frecuencias, gráficos estadísticos, media, mediana, moda y rango; experimentos aleatorios, sucesos y probabilidad con la regla de Laplace",
  ideas: ["Encuesta real en el colegio con informe y gráficos.", "Lanzar dados y monedas 100 veces y comparar frecuencias con probabilidades.", "Analizar gráficos de noticias y detectar escalas engañosas."],
});
