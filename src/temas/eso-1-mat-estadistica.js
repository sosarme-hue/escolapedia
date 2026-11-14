// Matemáticas 1º ESO · Estadística y probabilidad. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, formula, barras, sectores, arbol, resumen, linea, punto, C, RD, DECRET, REV, vb, vg } = require("./_eso1L2");

const poblacion = lienzo("Población y muestra: de todos los alumnos del instituto se elige un grupo pequeño para preguntar", `
  <ellipse cx="96" cy="88" rx="84" ry="62" fill="var(--pen)" fill-opacity=".08" stroke="var(--pen)" stroke-width="2"/>
  ${[...Array(28)].map((_, i) => `<circle cx="${40 + (i % 7) * 19}" cy="${52 + Math.floor(i / 7) * 22}" r="5" fill="${[3, 8, 12, 17, 22, 26].includes(i) ? "var(--red)" : "var(--pen)"}" fill-opacity="${[3, 8, 12, 17, 22, 26].includes(i) ? 1 : 0.35}"/>`).join("")}
  ${tx(96, 168, "población: 600 alumnos", { fs: 11.5, c: "var(--pen)" })}${tx(222, 76, "muestra", { fs: 14, fam: D, c: "var(--red)", max: 76 })}${tx(222, 100, "60 elegidos", { fs: 11, c: "var(--red)", max: 76 })}${tx(222, 118, "al azar", { fs: 11, c: "var(--muted)", max: 76 })}`, 178);

const variables = comparar("Tipos de variables estadísticas: cualitativas, que se expresan con palabras, y cuantitativas, con números", [
  ["Cualitativa", ["color favorito", "deporte", "medio de transporte"], "var(--inf)"],
  ["Cuantitativa", ["número de hermanos", "altura", "notas"], "var(--pen)"],
], "¿Palabras o números?");

const mascotas = barras("Diagrama de barras del número de mascotas de 20 alumnos: 0 mascotas 6 alumnos, 1 mascota 9, 2 mascotas 4 y 3 mascotas 1", [["0", 6], ["1", 9, "var(--red)"], ["2", 4], ["3", 1]], { titulo: "Número de mascotas (N = 20)", c: "var(--pen)" });

const transporte = sectores("Diagrama de sectores: cómo vienen al instituto 20 alumnos; andando 10, bus 5, coche 3 y bici 2", [["Andando", 10], ["Bus", 5], ["Coche", 3], ["Bici", 2]], { titulo: "Transporte (N = 20)" });

const temperaturas = (() => {
  const d = [8, 10, 14, 17, 21, 26, 29];
  const X = (i) => 46 + i * 31, Y = (v) => 150 - v * 4;
  return lienzo("Gráfico de líneas de la temperatura media de enero a julio: sube de 8 a 29 grados", `
  <path d="M30 150 H248 M30 150 V24" stroke="var(--muted)" stroke-width="1.4"/>${[10, 20, 30].map((v) => `<path d="M30 ${Y(v)} H248" stroke="var(--muted)" stroke-opacity=".25"/>${tx(22, Y(v) + 4, String(v), { fs: 10, c: "var(--muted)", a: "end", max: 20 })}`).join("")}
  <polyline points="${d.map((v, i) => `${X(i)},${Y(v)}`).join(" ")}" fill="none" stroke="var(--red)" stroke-width="2.5"/>${d.map((v, i) => punto(X(i), Y(v), "var(--red)")).join("")}
  ${["E", "F", "M", "A", "M", "J", "J"].map((m, i) => tx(X(i), 166, m, { fs: 11, c: "var(--muted)", max: 20 })).join("")}${tx(150, 18, "Temperatura media (°C)", { fs: 12 })}`, 176);
})();

const medidas = cajas("Medidas de centralización y de dispersión de los datos 2, 3, 3, 5, 7", [
  ["Media", "suma : n = 20 : 5 = 4", "var(--pen)"],
  ["Mediana", "dato central = 3", "var(--leaf)"],
  ["Moda", "el más repetido = 3", "var(--sun)"],
  ["Rango", "máx − mín = 7 − 2 = 5", "var(--red)"],
], "Datos: 2, 3, 3, 5, 7");

const mediaBal = lienzo("La media es el punto de equilibrio: los datos 2, 3, 3, 5 y 7 se equilibran sobre el 4", `
  ${linea(20, 110, 260, 110, "var(--ink)", { w: 2.5 })}${[1, 2, 3, 4, 5, 6, 7, 8].map((v) => `<path d="M${20 + v * 28} 106 V114" stroke="var(--ink)"/>${tx(20 + v * 28, 130, String(v), { fs: 11, max: 20 })}`).join("")}
  ${[[2, 0], [3, 0], [3, 1], [5, 0], [7, 0]].map(([v, k]) => `<rect x="${20 + v * 28 - 10}" y="${88 - k * 22}" width="20" height="20" rx="4" fill="var(--pen)" fill-opacity=".55"/>`).join("")}
  <path d="M132 136 L122 156 H142 Z" fill="var(--red)"/>${tx(132, 174, "media = 4", { fs: 13, fam: D, c: "var(--red)" })}`, 182);

const escala = (() => {
  const X = (p) => 50 + p * 180;
  return lienzo("Escala de probabilidad de cero, suceso imposible, a uno, suceso seguro, con ejemplos", `
  <rect x="50" y="70" width="180" height="16" rx="8" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)"/>
  ${[[0, "0", "imposible"], [0.5, "1/2", "cara"], [1, "1", "seguro"]].map(([p, n, t]) => `<path d="M${X(p)} 62 V94" stroke="var(--ink)" stroke-width="2"/>${tx(X(p), 54, n, { fs: 13, fam: D, max: 40 })}${tx(X(p), 112, t, { fs: 11, c: "var(--muted)", max: 70 })}`).join("")}
  ${[[1 / 6, "sacar un 6"], [5 / 6, "no sacar 6"]].map(([p, t]) => `${punto(X(p), 78, "var(--red)")}${tx(X(p), 140, t, { fs: 10.5, c: "var(--red)", max: 80 })}<path d="M${X(p)} 86 V128" stroke="var(--red)" stroke-dasharray="3 3"/>`).join("")}
  ${tx(140, 168, "la probabilidad está entre 0 y 1", { fs: 11.5 })}`, 178);
})();

const laplace = formula("Regla de Laplace (resultados igual de probables)", "P(A) = casos favorables / casos posibles", ["Dado, sacar par: 3 / 6 = 1/2", "Baraja de 40, sacar oro: 10 / 40 = 1/4"], "var(--leaf)");

const monedas = arbol("Diagrama de árbol de lanzar dos monedas: cuatro resultados igual de probables", [
  ["Cara", "1/2", [["C C", "1/2", "1/4"], ["C X", "1/2", "1/4"]]],
  ["Cruz", "1/2", [["X C", "1/2", "1/4"], ["X X", "1/2", "1/4"]]],
]);

const grandes = (() => {
  const fr = [1, 0.3, 0.6, 0.45, 0.55, 0.48, 0.52, 0.49, 0.505, 0.5];
  const X = (i) => 34 + i * 23, Y = (v) => 150 - v * 120;
  return lienzo("Al repetir muchas veces un experimento, la frecuencia relativa de cara se acerca a la probabilidad 0,5", `
  <path d="M30 150 H252 M30 150 V24" stroke="var(--muted)" stroke-width="1.4"/><path d="M30 ${Y(0.5)} H252" stroke="var(--leaf)" stroke-dasharray="5 4" stroke-width="1.6"/>${tx(24, Y(0.5) + 4, "0,5", { fs: 10, c: "var(--leaf)", a: "end", max: 24 })}${tx(24, Y(1) + 4, "1", { fs: 10, c: "var(--muted)", a: "end", max: 24 })}
  <polyline points="${fr.map((v, i) => `${X(i)},${Y(v)}`).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="2.2"/>${fr.map((v, i) => punto(X(i), Y(v), "var(--pen)")).join("")}
  ${tx(140, 168, "número de lanzamientos →", { fs: 11, c: "var(--muted)" })}`, 176);
})();

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Estadística y probabilidad",
  minutos: 110,
  objetivos: [
    "Distinguir población, muestra y tipos de variables estadísticas",
    "Organizar datos en tablas de frecuencias absolutas y relativas",
    "Construir e interpretar diagramas de barras, de sectores y de líneas",
    "Calcular la media, la mediana, la moda y el rango",
    "Reconocer experimentos aleatorios, espacio muestral y sucesos",
    "Calcular probabilidades con la regla de Laplace y con frecuencias",
  ],
  claves: ["población", "muestra", "variable", "frecuencia", "media", "mediana", "moda", "probabilidad"],
  pregunta: {
    texto: "Un anuncio dice: «9 de cada 10 dentistas recomiendan este chicle». ¿Qué preguntas harías antes de creértelo?",
    respuesta: "La estadística nos enseña a desconfiar con criterio: ¿a <b>cuántos</b> dentistas se preguntó (¿solo a 10?), ¿cómo se <b>eligieron</b>, ¿quién pagó el estudio?, ¿qué les preguntaron exactamente? Una <mark>muestra</mark> pequeña o mal elegida puede dar resultados engañosos.",
  },
  lectura: {
    titulo: "Florence Nightingale y los gráficos que salvaron vidas",
    html: `<p>En 1854, durante la guerra de Crimea, la enfermera británica Florence Nightingale llegó a un hospital militar en Turquía. Lo que encontró fue terrible: suciedad, ratas, agua contaminada y soldados que morían a cientos. Pero Florence no solo cuidó a los enfermos: también <b>apuntó datos</b>. Cada día anotaba cuántos soldados ingresaban, de qué enfermaban y cuántos morían.</p><p>Al analizar sus tablas descubrió algo sorprendente: muchos más soldados morían por infecciones del hospital que por las heridas de la batalla. Para convencer a los generales y políticos, que no leían tablas de números, inventó un <b>gráfico circular</b> con sectores de colores, conocido como «diagrama de la rosa». Con un simple vistazo se veía el problema.</p><p>Gracias a sus gráficos se mejoraron la higiene, la ventilación y el agua de los hospitales, y la mortalidad bajó muchísimo. Florence Nightingale fue la primera mujer elegida miembro de la Real Sociedad de Estadística. Su historia demuestra que la estadística no son solo números: es una herramienta para entender el mundo y cambiarlo.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 ¿Qué estudia la estadística?</h3><p>La <b>estadística</b> es la parte de las matemáticas que <b>recoge, organiza, representa y analiza datos</b> para sacar conclusiones. Se usa en encuestas, deportes, medicina, meteorología, economía…</p><p>La <b>población</b> es el conjunto de todos los elementos que queremos estudiar (por ejemplo, los 600 alumnos de un instituto). Cada elemento es un <b>individuo</b>. Cuando la población es muy grande, se estudia solo una parte, llamada <b>muestra</b> (por ejemplo, 60 alumnos).</p><p>Para que las conclusiones sean fiables, la muestra debe ser <b>representativa</b>: suficientemente grande y elegida <b>al azar</b>, sin favorecer a ningún grupo. Si para saber el deporte favorito del instituto solo preguntas al equipo de baloncesto, el resultado estará sesgado. Las encuestas electorales preguntan a unas pocas miles de personas para estimar lo que votarán millones.</p>`, svg: poblacion },
    { html: `<h3>1.2 Variables estadísticas</h3><p>Una <b>variable estadística</b> es la característica que estudiamos en cada individuo. Puede ser de dos tipos:</p><ul><li><b>Cualitativa</b>: sus valores son <b>cualidades</b> que se expresan con palabras. Ejemplos: color favorito, deporte preferido, lugar de nacimiento, medio de transporte.</li><li><b>Cuantitativa</b>: sus valores son <b>números</b>. Puede ser <b>discreta</b>, si toma valores aislados que se cuentan (número de hermanos, goles en un partido), o <b>continua</b>, si puede tomar cualquier valor en un intervalo y se mide (altura, peso, tiempo).</li></ul><p>Distinguir el tipo de variable es importante, porque decide qué gráficos y qué cálculos tienen sentido. Con una variable cualitativa no se puede calcular la media: ¡no existe el «color medio»! Pero sí se puede buscar la moda (el color más repetido).</p>`, svg: variables },
    { html: `<h3>1.3 Tablas de frecuencias</h3><p>Para organizar los datos se hace un <b>recuento</b> y se construye una <b>tabla de frecuencias</b>:</p><ul><li><b>Frecuencia absoluta</b> (f): número de veces que aparece cada valor. La suma de todas es el número total de datos, N.</li><li><b>Frecuencia relativa</b> (fr): frecuencia absoluta dividida entre N. Se puede expresar como fracción, decimal o porcentaje. La suma de todas es 1 (o 100 %).</li></ul><p>Ejemplo: preguntamos a 20 alumnos cuántas mascotas tienen.</p>${tabla(["Mascotas", "Recuento", "f", "fr", "%"], [["0", "|||| |", "6", "0,30", "30 %"], ["1", "|||| ||||", "9", "0,45", "45 %"], ["2", "||||", "4", "0,20", "20 %"], ["3", "|", "1", "0,05", "5 %"], ["Total", "", "20", "1", "100 %"]])}<p>La frecuencia relativa permite <b>comparar</b> grupos de distinto tamaño: 9 de 20 (45 %) es más que 12 de 30 (40 %), aunque 12 sea mayor que 9.</p>` },
    { html: `<h3>1.4 Diagrama de barras</h3><p>El <b>diagrama de barras</b> representa cada valor de la variable con una barra cuya <b>altura</b> es su frecuencia. Para construirlo:</p><ol><li>En el eje horizontal se colocan los valores de la variable.</li><li>En el eje vertical, las frecuencias, con una escala adecuada que empiece en 0.</li><li>Se dibuja una barra por valor, todas del mismo ancho y separadas.</li><li>Se pone título y se rotulan los ejes.</li></ol><p>Sirve para variables cualitativas y cuantitativas discretas. Con un vistazo se ve cuál es el valor más frecuente (la barra más alta) y se comparan las frecuencias.</p><p><b>¡Cuidado con los gráficos engañosos!</b> Si el eje vertical no empieza en 0, diferencias pequeñas parecen enormes. Los anuncios y algunas noticias usan este truco a propósito.</p>`, svg: mascotas, video: vb("estB") },
    { html: `<h3>1.5 Diagrama de sectores y gráfico de líneas</h3><p>El <b>diagrama de sectores</b> (o gráfico circular) divide un círculo en partes proporcionales a las frecuencias. Es ideal para ver <b>qué parte del total</b> representa cada valor. El ángulo de cada sector se calcula con una proporción:</p><p style="text-align:center"><mark>ángulo = fr · 360°</mark></p><p>Si de 20 alumnos 10 vienen andando, su sector mide 10/20 · 360° = 180°, medio círculo. Bus: 5/20 · 360° = 90°. Coche: 54°. Bici: 36°. La suma de todos los ángulos debe dar 360°.</p><p>El <b>gráfico de líneas</b> une con segmentos los puntos de los datos y muestra cómo <b>cambia</b> una variable a lo largo del tiempo: la temperatura de cada mes, las ventas de cada año, la altura de una planta cada semana. Permite ver de un vistazo si algo sube, baja o se mantiene.</p>`, svg: transporte },
    { html: `<h3>1.6 Interpretar gráficos</h3><p>Leer bien un gráfico es tan importante como saber hacerlo. Ante cualquier gráfico, hazte estas preguntas:</p><ul><li>¿Qué <b>título</b> tiene? ¿Qué variable se representa?</li><li>¿Qué hay en cada <b>eje</b> y en qué <b>unidades</b>?</li><li>¿La escala empieza en 0? ¿Las divisiones son iguales?</li><li>¿Cuál es el valor más alto y el más bajo? ¿Hay tendencia (sube, baja)?</li><li>¿De dónde salen los datos? ¿Cuántos individuos se estudiaron?</li></ul><p>En el gráfico de temperaturas se lee que en enero la media fue de 8 °C y en julio de 29 °C, y que la subida mayor fue de mayo a junio (5 grados). Pero no se puede saber qué pasará en diciembre: el gráfico solo da información de los meses representados. Sacar conclusiones fuera de los datos es un error muy frecuente.</p>`, svg: temperaturas },
    { html: `<h3>1.7 Media, mediana y moda</h3><p>Las <b>medidas de centralización</b> resumen todos los datos en un solo valor «típico»:</p><ul><li><b>Media</b> (x̄): suma de todos los datos dividida entre el número de datos. Notas 6, 7, 5, 8, 9 → (6 + 7 + 5 + 8 + 9) : 5 = 35 : 5 = <mark>7</mark>.</li><li><b>Mediana</b> (Me): valor central cuando los datos están <b>ordenados</b>. En 5, 6, 7, 8, 9 la mediana es 7. Si hay un número par de datos, es la media de los dos centrales: en 2, 4, 6, 10 la mediana es (4 + 6) : 2 = 5.</li><li><b>Moda</b> (Mo): el valor que más se repite. Puede haber más de una moda, o ninguna. Es la única que sirve para variables cualitativas.</li></ul><p>La media se puede imaginar como el <b>punto de equilibrio</b>: si pones cubos sobre una regla en la posición de cada dato, la regla se sostiene apoyada en la media.</p>`, svg: mediaBal, video: vb("estB2") },
    { html: `<h3>1.8 El rango y los datos extremos</h3><p>Dos grupos pueden tener la misma media y ser muy diferentes. Las notas 5, 5, 5, 5 y 1, 3, 7, 9 tienen media 5, pero en el segundo grupo los datos están mucho más <b>dispersos</b>. Para medirlo usamos el <b>rango</b> (o recorrido):</p><p style="text-align:center"><mark>rango = dato mayor − dato menor</mark></p><p>El rango del primer grupo es 0 y el del segundo, 9 − 1 = 8.</p><p>Además, la media se ve muy afectada por los <b>datos extremos</b> (atípicos). Si en un grupo cuatro personas cobran 1 200 € y una cobra 9 000 €, la media es 2 760 €, que no representa a nadie. La mediana (1 200 €) refleja mejor la situación. Por eso, cuando hay datos extremos, es mejor usar la mediana. Elegir bien la medida es parte del trabajo del estadístico.</p>`, svg: medidas },
    { html: `<h3>2.1 Experimentos aleatorios y sucesos</h3><p>Un <b>experimento aleatorio</b> es aquel cuyo resultado <b>no se puede predecir</b> aunque se repita en las mismas condiciones: lanzar un dado, sacar una carta, tirar una moneda. Un experimento es <b>determinista</b> si siempre da el mismo resultado: soltar una piedra (siempre cae) o calentar agua a 100 °C a nivel del mar (siempre hierve).</p><p>El <b>espacio muestral</b> (E) es el conjunto de todos los resultados posibles. Al lanzar un dado: E = {1, 2, 3, 4, 5, 6}.</p><p>Un <b>suceso</b> es cualquier subconjunto del espacio muestral: «sacar par» = {2, 4, 6}. Hay sucesos especiales:</p><ul><li><b>Elemental</b>: un solo resultado, como «sacar un 5».</li><li><b>Seguro</b>: ocurre siempre, como «sacar menos de 7».</li><li><b>Imposible</b>: no ocurre nunca, como «sacar un 8».</li><li><b>Contrario</b> de A: ocurre cuando no ocurre A. El contrario de «sacar par» es «sacar impar».</li></ul>` },
    { html: `<h3>2.2 La probabilidad y la regla de Laplace</h3><p>La <b>probabilidad</b> de un suceso es un número entre <b>0 y 1</b> que mide lo fácil que es que ocurra. Un suceso imposible tiene probabilidad 0; uno seguro, 1; y uno que ocurre la mitad de las veces, 1/2 = 0,5 = 50 %.</p><p>Cuando todos los resultados son <b>igual de probables</b> (dado no trucado, moneda normal, cartas bien barajadas), se usa la <b>regla de Laplace</b>:</p><p style="text-align:center"><mark>P(A) = casos favorables / casos posibles</mark></p><p>Al lanzar un dado, P(sacar un 6) = 1/6; P(sacar par) = 3/6 = 1/2; P(sacar más de 4) = 2/6 = 1/3. En una baraja española de 40 cartas, P(sacar un as) = 4/40 = 1/10.</p><p>La probabilidad del suceso contrario es <b>1 menos</b> la del suceso: P(no sacar 6) = 1 − 1/6 = 5/6.</p>`, svg: escala },
    { html: `<h3>2.3 Contar casos con tablas y diagramas de árbol</h3><p>Para aplicar la regla de Laplace hay que contar bien los casos posibles. Cuando el experimento tiene varias etapas, ayuda hacer un <b>diagrama de árbol</b> o una <b>tabla de doble entrada</b>.</p><p>Al lanzar dos monedas, el árbol muestra 4 resultados igual de probables: CC, CX, XC, XX. Así, P(dos caras) = 1/4, pero P(una cara y una cruz) = <mark>2/4 = 1/2</mark>, porque hay dos caminos (CX y XC). Muchas personas piensan que es 1/3, ¡y se equivocan!</p><p>Al lanzar dos dados y sumar los puntos hay 6 · 6 = 36 casos. La suma 7 sale de 6 formas (1+6, 2+5, 3+4, 4+3, 5+2, 6+1): P = 6/36 = 1/6. La suma 2 solo sale de una forma (1+1): P = 1/36. Por eso, en los juegos de dados, el 7 es la suma más frecuente.</p>`, svg: monedas, video: vg("estV") },
    { html: `<h3>2.4 Frecuencia y probabilidad</h3><p>A veces no se puede usar Laplace porque los resultados no son igual de probables (una chincheta que cae de punta o de lado, un dado trucado). Entonces se <b>experimenta</b>: se repite el experimento muchas veces y se calcula la <b>frecuencia relativa</b> del suceso.</p><p>La <b>ley de los grandes números</b> dice que, al aumentar el número de repeticiones, la frecuencia relativa se acerca cada vez más a la probabilidad. Si lanzas una moneda 10 veces, puede salir cara 7 veces (0,7); pero si la lanzas 10 000 veces, saldrá cara muy cerca de la mitad de las veces.</p><p>Las aseguradoras, los meteorólogos y los médicos usan frecuencias para estimar probabilidades: «probabilidad de lluvia del 70 %» significa que, en días con condiciones parecidas, llovió aproximadamente 7 de cada 10 veces. Recuerda: el azar no tiene memoria. Que hayan salido 5 caras seguidas no hace más probable que salga cruz la siguiente vez.</p>`, svg: grandes },
  ],
  ejemplos: [
    { enunciado: "Clasifica las variables: número de calzado, color de ojos, tiempo en correr 100 m, número de libros leídos.", pasos: ["Número de calzado: cuantitativa discreta.", "Color de ojos: cualitativa.", "Tiempo: cuantitativa continua.", "Libros: cuantitativa discreta."], resultado: "Solo el color de ojos es cualitativa." },
    { enunciado: "Calcula la media, la mediana, la moda y el rango de 4, 7, 2, 7, 5, 9, 1.", pasos: ["Suma 35; n = 7; media = 5.", "Ordenados: 1, 2, 4, 5, 7, 7, 9 → mediana 5.", "Moda 7; rango 9 − 1 = 8."], resultado: "x̄ = 5; Me = 5; Mo = 7; rango = 8." },
    { enunciado: "De 25 alumnos, 10 prefieren fútbol. ¿Qué ángulo le corresponde en un diagrama de sectores?", pasos: ["fr = 10/25 = 0,4.", "0,4 · 360° = 144°."], resultado: "144°." },
    { enunciado: "Halla la mediana de 3, 8, 5, 12, 6, 10.", pasos: ["Ordenados: 3, 5, 6, 8, 10, 12.", "Dos centrales: 6 y 8 → (6 + 8) : 2."], resultado: "Me = 7." },
    { enunciado: "Una bolsa tiene 3 bolas rojas, 5 azules y 2 verdes. Calcula P(roja), P(no azul).", pasos: ["Casos posibles: 10.", "P(roja) = 3/10.", "P(azul) = 5/10 → P(no azul) = 5/10 = 1/2."], resultado: "3/10 y 1/2." },
    { enunciado: "Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea 10?", pasos: ["Casos posibles: 36.", "Favorables: (4,6), (5,5), (6,4) = 3."], resultado: "3/36 = 1/12." },
  ],
  errores: [
    "Calcular la mediana sin ordenar antes los datos.",
    "Pensar que la media siempre es uno de los datos.",
    "Calcular la media de una variable cualitativa.",
    "Hacer un diagrama de barras con el eje vertical que no empieza en 0.",
    "Aplicar la regla de Laplace cuando los resultados no son igual de probables.",
    "Creer que el azar tiene memoria («ahora le toca salir cruz»).",
  ],
  ejercicios: [
    { nivel: "básico", q: "Queremos saber cuántas horas duermen los alumnos de 1º ESO de Cataluña. Indica la población, una posible muestra y la variable.", sol: "Población: todos los alumnos de 1º ESO de Cataluña. Muestra: por ejemplo, 300 alumnos elegidos al azar de varios centros. Variable: horas de sueño (cuantitativa continua)." },
    { nivel: "básico", q: "Clasifica: deporte favorito, número de hermanos, estatura, marca de móvil, temperatura.", sol: "Cualitativas: deporte, marca. Cuantitativa discreta: hermanos. Continuas: estatura, temperatura." },
    { nivel: "básico", q: "Haz la tabla de frecuencias absolutas de: 2, 3, 2, 1, 4, 2, 3, 3, 2, 1.", sol: "1 → 2; 2 → 4; 3 → 3; 4 → 1. Total 10." },
    { nivel: "básico", q: "Calcula las frecuencias relativas del ejercicio anterior en porcentaje.", sol: "1 → 20 %; 2 → 40 %; 3 → 30 %; 4 → 10 %." },
    { nivel: "básico", q: "Calcula la media de 8, 6, 9, 7, 10.", sol: "40 : 5 = 8." },
    { nivel: "básico", q: "Calcula la mediana de 5, 9, 3, 7, 11.", sol: "Ordenados 3, 5, 7, 9, 11 → Me = 7." },
    { nivel: "básico", q: "¿Cuál es la moda de: rojo, azul, verde, azul, rojo, azul?", sol: "Azul (3 veces)." },
    { nivel: "básico", q: "Calcula el rango de 12, 4, 18, 9, 15.", sol: "18 − 4 = 14." },
    { nivel: "básico", q: "Di si es aleatorio o determinista: lanzar un dado, hervir agua, sacar una carta, dejar caer una pelota.", sol: "Aleatorios: dado y carta. Deterministas: hervir agua y dejar caer la pelota." },
    { nivel: "básico", q: "Escribe el espacio muestral de lanzar una moneda y de girar una ruleta con los números 1 a 8.", sol: "{cara, cruz}; {1, 2, 3, 4, 5, 6, 7, 8}." },
    { nivel: "básico", q: "Al lanzar un dado, calcula P(sacar 3), P(sacar impar), P(sacar más de 6).", sol: "1/6; 3/6 = 1/2; 0." },
    { nivel: "básico", q: "Pon un ejemplo de suceso seguro y otro de suceso imposible al lanzar un dado.", sol: "Seguro: sacar un número del 1 al 6. Imposible: sacar un 7." },
    { nivel: "medio", q: "Las notas de un examen son 4, 6, 7, 5, 8, 6, 9, 3. Calcula la media y la mediana.", sol: "Media 48 : 8 = 6. Ordenadas 3, 4, 5, 6, 6, 7, 8, 9 → Me = (6 + 6) : 2 = 6." },
    { nivel: "medio", q: "En un diagrama de sectores de 40 alumnos, 15 prefieren el baloncesto. ¿Qué ángulo le corresponde?", sol: "15/40 · 360° = 135°." },
    { nivel: "medio", q: "Un sector de un diagrama mide 72°. Si hay 50 encuestados, ¿cuántos eligieron esa opción?", sol: "72/360 = 1/5; 50 : 5 = 10 personas." },
    { nivel: "medio", q: "La media de 4 números es 6. Tres de ellos son 5, 7 y 4. ¿Cuál es el cuarto?", sol: "Suma 24; 24 − 16 = 8." },
    { nivel: "medio", q: "Dibuja un diagrama de barras con: fútbol 8, baloncesto 5, natación 4, otros 3.", sol: "Cuatro barras de alturas 8, 5, 4 y 3, con título y ejes rotulados, escala desde 0." },
    { nivel: "medio", q: "En una baraja de 40 cartas, calcula P(sacar una copa), P(sacar una figura) y P(sacar el rey de oros).", sol: "10/40 = 1/4; 12/40 = 3/10; 1/40." },
    { nivel: "medio", q: "Una urna tiene 4 bolas blancas y 6 negras. Calcula P(blanca) y P(no blanca).", sol: "4/10 = 2/5; 6/10 = 3/5." },
    { nivel: "medio", q: "Dibuja el diagrama de árbol de lanzar tres monedas. ¿Cuántos resultados hay? ¿P(tres caras)?", sol: "8 resultados; P = 1/8." },
    { nivel: "medio", q: "Se lanzan 2 dados. Calcula la probabilidad de que la suma sea 7 y de que sea 12.", sol: "6/36 = 1/6; 1/36." },
    { nivel: "medio", q: "Se lanza una chincheta 200 veces y cae de punta 130. Estima la probabilidad de que caiga de punta.", sol: "130/200 = 0,65." },
    { nivel: "medio", q: "Cinco amigos tienen 12, 13, 12, 14 y 13 años. Si se une uno de 30, ¿cómo cambian la media y la mediana?", sol: "Antes: media 12,8; Me 13. Después: media 94 : 6 ≈ 15,7; Me 13. La media sube mucho, la mediana no." },
    { nivel: "avanzado", q: "Inventa 5 datos cuya media sea 10, la mediana 9 y la moda 8.", sol: "Por ejemplo 8, 8, 9, 12, 13 (suma 50)." },
    { nivel: "avanzado", q: "Un gráfico de barras muestra ventas de 100 y 110 con el eje empezando en 95. Explica por qué es engañoso.", sol: "La segunda barra parece el triple de alta (15 frente a 5) cuando solo es un 10 % mayor." },
    { nivel: "avanzado", q: "Juan dice: «Al lanzar dos monedas puede salir 2 caras, 2 cruces o 1 de cada, así que cada cosa tiene probabilidad 1/3». ¿Tiene razón?", sol: "No: «una de cada» tiene 2 casos (CX, XC) de 4, P = 1/2; las otras, 1/4 cada una." },
    { nivel: "avanzado", q: "Ha salido rojo 6 veces seguidas en una ruleta con la mitad de casillas rojas. ¿Es más probable que ahora salga negro?", sol: "No: cada tirada es independiente; P(negro) sigue siendo la misma (1/2 si no hay cero)." },
    { nivel: "avanzado", q: "En una clase, la media de 12 chicas es 7 y la de 18 chicos es 6. ¿Cuál es la media de toda la clase?", sol: "(84 + 108) : 30 = 6,4." },
    { nivel: "avanzado", q: "Diseña una ruleta de 8 casillas de modo que P(azul) = 1/2, P(rojo) = 1/4 y P(verde) = 1/8. ¿Qué pasa con la casilla que sobra?", sol: "4 azules, 2 rojas, 1 verde; queda 1 casilla de otro color con P = 1/8." },
    { nivel: "avanzado", q: "Prepara una encuesta de 3 preguntas sobre hábitos de lectura. Indica tipo de variable y gráfico adecuado para cada una.", sol: "Por ejemplo: género favorito (cualitativa, sectores); libros al año (discreta, barras); minutos al día (continua, agrupada en intervalos)." },
  ],
  quiz: [
    { q: "La muestra es…", o: ["toda la población", "una parte de la población", "una variable", "una tabla"], a: 1, e: "Un subconjunto." },
    { q: "«Color favorito» es una variable…", o: ["cuantitativa discreta", "cualitativa", "cuantitativa continua", "aleatoria"], a: 1, e: "Se expresa con palabras." },
    { q: "«Estatura» es una variable…", o: ["cualitativa", "cuantitativa continua", "discreta", "no es variable"], a: 1, e: "Se mide." },
    { q: "La frecuencia absoluta es…", o: ["el porcentaje", "las veces que aparece un valor", "la media", "el total"], a: 1, e: "Recuento." },
    { q: "La suma de las frecuencias relativas es…", o: ["N", "1", "100", "0"], a: 1, e: "O 100 %." },
    { q: "Si fr = 0,25, el ángulo del sector es…", o: ["25°", "90°", "180°", "45°"], a: 1, e: "0,25 · 360." },
    { q: "Para ver cómo cambia algo en el tiempo se usa…", o: ["sectores", "gráfico de líneas", "tabla de recuento", "árbol"], a: 1, e: "Evolución." },
    { q: "Media de 2, 4, 6:", o: ["3", "4", "6", "12"], a: 1, e: "12 : 3." },
    { q: "Mediana de 1, 3, 9:", o: ["4,3", "3", "9", "1"], a: 1, e: "Dato central." },
    { q: "Mediana de 2, 4, 6, 8:", o: ["4", "5", "6", "20"], a: 1, e: "(4 + 6) : 2." },
    { q: "Moda de 1, 2, 2, 3:", o: ["1", "2", "3", "2,5"], a: 1, e: "La más repetida." },
    { q: "Rango de 3, 10, 7:", o: ["3", "7", "10", "13"], a: 1, e: "10 − 3." },
    { q: "Con datos extremos conviene usar…", o: ["la media", "la mediana", "el rango", "la suma"], a: 1, e: "No le afectan." },
    { q: "Lanzar un dado es un experimento…", o: ["determinista", "aleatorio", "seguro", "imposible"], a: 1, e: "No se puede predecir." },
    { q: "Espacio muestral de una moneda:", o: ["{cara}", "{cara, cruz}", "{1, 2}", "{1, 2, …, 6}"], a: 1, e: "Todos los resultados." },
    { q: "La probabilidad de un suceso imposible es…", o: ["1", "0", "0,5", "−1"], a: 1, e: "Nunca ocurre." },
    { q: "P(sacar par con un dado):", o: ["1/6", "1/2", "1/3", "2/3"], a: 1, e: "3/6." },
    { q: "Si P(A) = 0,3, P(no A) =", o: ["0,3", "0,7", "1,3", "0"], a: 1, e: "1 − 0,3." },
    { q: "Al lanzar dos monedas, P(una cara y una cruz) =", o: ["1/3", "1/2", "1/4", "2/3"], a: 1, e: "2 de 4." },
    { q: "Al repetir mucho un experimento, la frecuencia relativa…", o: ["se aleja", "se acerca a la probabilidad", "vale siempre 1", "es la moda"], a: 1, e: "Ley de los grandes números." },
  ],
  examen: [
    { q: "Media de 5, 8, 6, 9, 7:", o: ["6", "7", "8", "35"], a: 1, e: "35 : 5." },
    { q: "Mediana de 9, 2, 5, 7, 3:", o: ["7", "5", "3", "5,2"], a: 1, e: "2, 3, 5, 7, 9." },
    { q: "Moda de 4, 6, 6, 7, 4, 6:", o: ["4", "6", "7", "5,5"], a: 1, e: "6 aparece 3 veces." },
    { q: "Rango de 15, 8, 22, 11:", o: ["7", "14", "22", "8"], a: 1, e: "22 − 8." },
    { q: "De 30 alumnos, 6 van en bici. Ángulo del sector:", o: ["60°", "72°", "36°", "6°"], a: 1, e: "6/30 · 360." },
    { q: "Urna con 2 rojas y 8 azules. P(roja):", o: ["2/8", "1/5", "1/2", "8/10"], a: 1, e: "2/10." },
    { q: "Dos dados, P(suma 2):", o: ["1/6", "1/36", "2/36", "1/12"], a: 1, e: "Solo (1, 1)." },
    { q: "Baraja de 40, P(no sacar oro):", o: ["1/4", "3/4", "10/40", "1/10"], a: 1, e: "30/40." },
  ],
  feynman: ["Qué diferencia hay entre población y muestra y por qué la muestra debe elegirse al azar", "Cómo se calculan la media, la mediana y la moda, y cuándo conviene cada una", "Qué dice la regla de Laplace y cuándo se puede usar", "Por qué al lanzar dos monedas «una de cada» es más probable que «dos caras»"],
  figura: {
    titulo: "Estadística y probabilidad en un vistazo",
    svg: resumen("Resumen: variables, frecuencias, gráficos, medidas y probabilidad", [
      ["Variables", "cualitativa · cuantitativa discreta o continua", "var(--inf)"],
      ["Frecuencias", "absoluta f · relativa fr = f / N", "var(--pen)"],
      ["Gráficos", "barras · sectores (fr · 360°) · líneas", "var(--sun)"],
      ["Medidas", "media · mediana · moda · rango", "var(--leaf)"],
      ["Probabilidad", "Laplace: favorables / posibles", "var(--red)"],
    ]),
  },
  video: vg("estV"),
  mapa: mapa("ESTADÍSTICA", "var(--pen)", [
    ["Datos", "población · muestra · variables", "var(--inf)"],
    ["Organizar", "tablas · barras · sectores", "var(--pen)"],
    ["Resumir", "media · mediana · moda · rango", "var(--leaf)"],
    ["Azar", "sucesos · Laplace · frecuencia", "var(--red)"],
  ], 250),
  glosario: [
    ["Población", "Conjunto de todos los elementos que se quieren estudiar."],
    ["Muestra", "Parte de la población que se estudia realmente."],
    ["Variable estadística", "Característica que se estudia en cada individuo."],
    ["Frecuencia absoluta", "Número de veces que aparece un valor."],
    ["Frecuencia relativa", "Frecuencia absoluta dividida entre el total de datos."],
    ["Diagrama de barras", "Gráfico con barras de altura proporcional a la frecuencia."],
    ["Diagrama de sectores", "Círculo dividido en partes proporcionales a las frecuencias."],
    ["Media", "Suma de los datos dividida entre el número de datos."],
    ["Mediana", "Valor central de los datos ordenados."],
    ["Moda", "Valor que más se repite."],
    ["Rango", "Diferencia entre el dato mayor y el menor."],
    ["Experimento aleatorio", "Experimento cuyo resultado no se puede predecir."],
    ["Espacio muestral", "Conjunto de todos los resultados posibles."],
    ["Regla de Laplace", "P = casos favorables / casos posibles, si son igual de probables."],
  ],
  situacion: {
    titulo: "La encuesta de la clase",
    reto: "Vais a diseñar y realizar una encuesta en vuestro curso sobre un tema que os interese (tiempo de pantalla, deporte, lectura…) y presentar los resultados como lo haría un periódico.",
    pasos: [
      "Elegid el tema, la población y cómo elegir una muestra representativa.",
      "Redactad 4 o 5 preguntas claras e indicad el tipo de variable de cada una.",
      "Haced la encuesta y organizad los datos en tablas de frecuencias.",
      "Elegid el gráfico adecuado para cada pregunta y calculad media, mediana, moda y rango cuando tenga sentido.",
      "Redactad una noticia breve con titular, gráficos y conclusiones honestas.",
    ],
    producto: "Una noticia o infografía con los resultados de la encuesta.",
    evaluacion: ["Elige bien la muestra y las preguntas.", "Construye tablas y gráficos correctos.", "Calcula e interpreta las medidas adecuadas.", "Saca conclusiones sin exagerar ni engañar."],
  },
  tarjetas: [
    ["Población", "Todos los individuos"], ["Muestra", "Una parte, al azar"], ["Cualitativa", "Palabras"],
    ["Cuantitativa", "Números"], ["Frecuencia relativa", "f / N"], ["Sector", "fr · 360°"],
    ["Media", "Suma : n"], ["Mediana", "Central ordenado"], ["Moda", "Más repetido"],
    ["Rango", "Máx − mín"], ["Laplace", "Favorables / posibles"], ["P(contrario)", "1 − P(A)"],
  ],
  familias: ["Buscad gráficos en periódicos y comentad si son claros o engañosos.", "Anotad durante una semana el tiempo de pantalla y calculad la media.", "Jugad a dados o cartas y calculad probabilidades antes de cada jugada.", "Lanzad una moneda 50 veces y comprobad cómo se acerca la frecuencia a 1/2."],
  profesores: {
    saberes: "Sentido estocástico: población y muestra, variables, tablas de frecuencias, gráficos estadísticos, medidas de centralización y rango, experimentos aleatorios, regla de Laplace y relación entre frecuencia y probabilidad (RD 217/2022, Matemáticas 1º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Encuesta real de la clase con hoja de cálculo.", "Analizar gráficos engañosos de prensa y publicidad.", "Experimentos de lanzamiento (monedas, chinchetas) y puesta en común de frecuencias.", "Juego de dados con sumas para descubrir que el 7 es lo más probable."],
  },
  fuentes: [RD, DECRET, { t: "INE: Explica (recursos educativos de estadística)", url: "https://www.ine.es/explica/explica.htm" }, { t: "Wikipedia: Florence Nightingale", url: "https://es.wikipedia.org/wiki/Florence_Nightingale" }],
  revisado: REV,
};
