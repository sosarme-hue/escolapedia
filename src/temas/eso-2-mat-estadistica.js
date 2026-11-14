// Matemáticas 2º ESO · Estadística y probabilidad. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { mapa, tx, lienzo, pasos, cajas, comparar, formula, resumen, sectores, arbol, tablaSvg, baraja, psvg, pvid, pvg, C, RD, DECRET, REV } = require("./_eso2L2");

const poblacion = cajas("Población, muestra e individuo en una encuesta sobre el instituto", [
  ["Población", ["los 600 alumnos", "del instituto"], "var(--pen)"],
  ["Muestra", ["60 alumnos", "elegidos al azar"], "var(--leaf)"],
  ["Individuo", ["cada alumno", "encuestado"], "var(--sun)"],
  ["Variable", ["lo que se pregunta:", "deporte favorito"], "var(--red)"],
], "Elementos de un estudio");

const variables = comparar("Tipos de variables estadísticas", [
  ["Cualitativa", ["no numérica", "color", "deporte"], "var(--pen)"],
  ["Discreta", ["valores aislados", "hermanos", "goles"], "var(--leaf)"],
  ["Continua", ["cualquier valor", "altura", "tiempo"], "var(--red)"],
], "Variables");

const tablaLibros = tablaSvg("Tabla de frecuencias de los libros leídos por veinte alumnos en un trimestre", [
  ["xᵢ", "0", "1", "2", "3"], ["fᵢ", "3", "7", "6", "4"], ["hᵢ", "0,15", "0,35", "0,30", "0,20"], ["%", "15", "35", "30", "20"], ["Fᵢ", "3", "10", "16", "20"],
], { titulo: "Libros leídos (N = 20)", notas: ["Σ fᵢ = 20 · Σ hᵢ = 1"] });

const tablaAlturas = tablaSvg("Alturas de veinticinco alumnos agrupadas en intervalos de cinco centímetros", [
  ["cm", "150-155", "155-160", "160-165", "165-170", "170-175"], ["marca", "152,5", "157,5", "162,5", "167,5", "172,5"], ["fᵢ", "3", "6", "8", "5", "3"],
], { titulo: "Datos agrupados (N = 25)", notas: ["intervalo [a, b): incluye a, no b", "marca de clase = punto medio"] });

const histo = (() => {
  const f = [3, 6, 8, 5, 3], B = 146, k = 13;
  let g = tx(130, 20, "Histograma y polígono de frecuencias", { fs: 12.5, c: "var(--muted)" }) + `<path d="M24 ${B} H246" stroke="var(--ink)" stroke-width="1.6"/>`;
  const pts = [[24, B]];
  f.forEach((v, i) => {
    const x = 38 + i * 40, h = v * k;
    g += `<rect x="${x}" y="${B - h}" width="40" height="${h}" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="1.5"/>${tx(x + 20, B - h - 6, v, { fs: 11 })}${tx(x, B + 15, 150 + i * 5, { fs: 9.5, c: "var(--muted)", w: 400, max: 30 })}`;
    pts.push([x + 20, B - h]);
  });
  g += tx(238, B + 15, 175, { fs: 9.5, c: "var(--muted)", w: 400, max: 30 });
  pts.push([246, B]);
  g += `<polyline points="${pts.map((p) => p.join(",")).join(" ")}" fill="none" stroke="var(--red)" stroke-width="2.2"/>${pts.slice(1, -1).map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="var(--red)"/>`).join("")}`;
  g += tx(130, 172, "rectángulos pegados · polígono por las marcas de clase", { fs: 10.5, c: "var(--red)", w: 400 });
  return lienzo("Histograma de las alturas con el polígono de frecuencias que une los puntos medios de los techos", g, 180);
})();

const tarta = sectores("Diagrama de sectores del deporte favorito de cuarenta alumnos", [["Fútbol", 14], ["Baloncesto", 10], ["Natación", 6], ["Otros", 10]], { titulo: "Deporte favorito (N = 40)", fmt: (v, t) => `${Math.round((v / t) * 360)}°` });

const media = formula("Media aritmética de los libros leídos", "x̄ = Σ xᵢ·fᵢ / N", ["0·3 + 1·7 + 2·6 + 3·4 = 31", "x̄ = 31 / 20 = 1,55 libros", "es el «reparto equitativo»"], "var(--pen)");

const mediana = pasos("Cómo calcular la mediana", ["Ordenar los datos de menor a mayor", "N impar: el dato central", "N par: media de los dos centrales", "Con tabla: primer Fᵢ ≥ N/2", "Libros: Me = (1 + 2)/2 = 1,5"], "Mediana");

const atipico = comparar("Un dato atípico desplaza la media pero no la mediana", [
  ["Sueldos sin el jefe", ["1200 · 1300 · 1400", "media 1300", "mediana 1300"], "var(--leaf)"],
  ["Con el jefe (9000)", ["1200 · 1300 · 1400 · 9000", "media 3225", "mediana 1350"], "var(--red)"],
], "Media o mediana");

const monedas = arbol("Diagrama de árbol al lanzar dos monedas: cuatro resultados igual de probables", [
  ["C", "1/2", [["CC", "1/2", "1/4"], ["CX", "1/2", "1/4"]]],
  ["X", "1/2", [["XC", "1/2", "1/4"], ["XX", "1/2", "1/4"]]],
]);

const sucesos = cajas("Tipos de sucesos al lanzar un dado", [
  ["Elemental", ["{4}"], "var(--pen)"],
  ["Compuesto", ["par = {2, 4, 6}"], "var(--leaf)"],
  ["Seguro", ["menor que 7 = E"], "var(--sun)"],
  ["Imposible", ["sacar 8 = ∅"], "var(--red)"],
  ["Contrario de par", ["{1, 3, 5}"], "var(--inf)"],
  ["Espacio E", ["{1, 2, 3, 4, 5, 6}"], "var(--bac)"],
], "Sucesos");

const grandes = (() => {
  const datos = [[10, 0.7], [50, 0.42], [100, 0.55], [500, 0.48], [1000, 0.508], [5000, 0.497]];
  const X = (i) => 34 + i * 40, Y = (p) => 150 - p * 160;
  let g = tx(130, 18, "Frecuencia relativa de «cara»", { fs: 12.5, c: "var(--muted)" });
  g += `<path d="M28 150 H246 M28 150 V30" stroke="var(--ink)" stroke-width="1.5"/><path d="M28 ${Y(0.5)} H246" stroke="var(--leaf)" stroke-width="1.5" stroke-dasharray="5 4"/>${tx(244, Y(0.5) - 6, "0,5", { fs: 11, c: "var(--leaf)", a: "end" })}`;
  g += `<polyline points="${datos.map(([, p], i) => `${X(i)},${Y(p).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--red)" stroke-width="2"/>`;
  datos.forEach(([n, p], i) => (g += `<circle cx="${X(i)}" cy="${Y(p).toFixed(1)}" r="3.5" fill="var(--red)"/>${tx(X(i), 166, n, { fs: 9.5, c: "var(--muted)", w: 400, max: 38 })}`));
  g += tx(130, 180, "número de lanzamientos", { fs: 10.5, c: "var(--muted)", w: 400 });
  return lienzo("Al aumentar el número de lanzamientos de una moneda la frecuencia relativa de cara se acerca a 0,5", g, 188);
})();

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Estadística y probabilidad",
  minutos: 115,
  objetivos: [
    "Distinguir población, muestra, individuo y tipos de variables",
    "Organizar datos en tablas de frecuencias, también agrupados en intervalos",
    "Construir e interpretar diagramas de barras, histogramas y diagramas de sectores",
    "Calcular e interpretar media, mediana, moda, rango y desviación media",
    "Calcular probabilidades con la regla de Laplace y relacionarlas con la frecuencia relativa",
  ],
  claves: ["población", "muestra", "variable", "frecuencia", "histograma", "media", "mediana", "moda", "rango", "suceso", "regla de Laplace"],
  pregunta: {
    texto: "Si en una clase la nota media del examen es un 6, ¿significa que la mayoría ha aprobado?",
    respuesta: "No necesariamente. Si unos pocos sacan dieces y muchos suspenden por poco, la media puede ser 6 con la mayoría suspensa. Para saberlo hay que mirar la <mark>mediana</mark>: si es 5 o más, al menos la mitad ha aprobado.",
  },
  lectura: {
    titulo: "Florence Nightingale y los gráficos que salvaron vidas",
    html: `<p>En 1854, durante la guerra de Crimea, la enfermera británica <b>Florence Nightingale</b> llegó a un hospital militar en Escutari (en la actual Turquía). Lo que encontró era terrible: suciedad, ratas, agua contaminada y soldados que morían a cientos.</p><p>Nightingale no solo cuidó a los enfermos: anotó de forma sistemática cuántos soldados morían cada mes y de qué. Al analizar los datos descubrió algo sorprendente: muchos más soldados morían por <b>enfermedades evitables</b> (cólera, tifus, disentería) que por las heridas de batalla.</p><p>Para convencer a los políticos, que no leían tablas de números, inventó un gráfico parecido a un diagrama de sectores, el «diagrama de la rosa», en el que el tamaño de cada sector mostraba las muertes de cada mes y su causa con colores. El mensaje era imposible de ignorar. Gracias a sus gráficos se mejoraron la higiene y el saneamiento, y la mortalidad bajó de forma espectacular.</p><p>En 1859 fue la primera mujer elegida miembro de la Real Sociedad de Estadística. En este tema aprenderás a recoger datos, organizarlos, representarlos y resumirlos, como hizo ella.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Población, muestra e individuo</h3><p>La <b>estadística</b> es la parte de las matemáticas que recoge, organiza, representa y analiza datos para sacar conclusiones. Todo estudio estadístico empieza por una pregunta, por ejemplo: «¿Qué deporte prefieren los alumnos del instituto?».</p><ul><li><b>Población</b>: el conjunto de todos los elementos que queremos estudiar (los 600 alumnos del instituto).</li><li><b>Individuo</b>: cada uno de los elementos de la población (cada alumno).</li><li><b>Muestra</b>: una parte de la población que se estudia cuando no es posible o no conviene preguntar a todos (60 alumnos).</li></ul><p>Para que las conclusiones sean válidas, la muestra debe ser <b>representativa</b>: elegida al azar y de tamaño suficiente. Si solo preguntamos a los del equipo de fútbol, el resultado estará <b>sesgado</b>. Cuando se pregunta a toda la población, el estudio se llama <b>censo</b>, como el que hace el INE cada diez años en España.</p>`, svg: poblacion },
    { html: `<h3>1.2 Variables estadísticas</h3><p>Una <b>variable estadística</b> es la característica que se estudia en cada individuo. Puede ser:</p><ul><li><b>Cualitativa</b>: sus valores no son números, sino cualidades: color de ojos, deporte favorito, medio de transporte.</li><li><b>Cuantitativa</b>: sus valores son números. Puede ser <b>discreta</b>, si solo toma valores aislados (número de hermanos, goles, libros leídos), o <b>continua</b>, si puede tomar cualquier valor de un intervalo (altura, peso, tiempo de una carrera).</li></ul><p>Cuidado con los números que no son cantidades: el número del DNI o el código postal son variables cualitativas, porque no tiene sentido sumarlos ni calcular su media.</p><p>Saber el tipo de variable es importante, porque decide qué tabla, qué gráfico y qué parámetros podemos usar. Con una variable cualitativa no podemos calcular la media, pero sí la moda.</p>`, svg: variables },
    { html: `<h3>1.3 Tablas de frecuencias</h3><p>Se preguntó a 20 alumnos cuántos libros habían leído en el trimestre: 1, 2, 0, 1, 3, 2, 1, 1, 2, 3, 0, 1, 2, 2, 3, 1, 0, 2, 1, 3. Para ordenar estos datos hacemos un <b>recuento</b> y construimos una tabla:</p><ul><li><b>Frecuencia absoluta</b> (fᵢ): número de veces que aparece cada valor. La suma de todas es el total de datos, N.</li><li><b>Frecuencia relativa</b> (hᵢ): fᵢ / N. Las relativas suman 1; multiplicadas por 100, dan el <b>porcentaje</b>.</li><li><b>Frecuencia absoluta acumulada</b> (Fᵢ): suma de las frecuencias de ese valor y de todos los anteriores. La última es N.</li></ul><p>En el ejemplo: 3 alumnos no leyeron ninguno (15 %), 7 leyeron uno (35 %), 6 leyeron dos (30 %) y 4 leyeron tres (20 %). La acumulada de 2 es 16: 16 alumnos leyeron dos libros o menos.</p><p>Comprobar que Σ fᵢ = N y Σ hᵢ = 1 es una buena forma de detectar errores de recuento.</p>`, svg: tablaLibros },
    { html: `<h3>1.4 Datos agrupados en intervalos</h3><p>Cuando la variable es continua o toma muchos valores distintos, la tabla tendría demasiadas filas. Entonces agrupamos los datos en <b>intervalos</b> o <b>clases</b>, normalmente de la misma amplitud.</p><p>Por ejemplo, las alturas de 25 alumnos se agrupan en intervalos de 5 cm: [150, 155), [155, 160)… El corchete indica que el extremo se incluye y el paréntesis que no: una alumna de 155 cm va en el intervalo [155, 160).</p><p>De cada intervalo se calcula la <b>marca de clase</b>, que es su punto medio: (150 + 155) / 2 = 152,5. La marca de clase representa a todos los datos del intervalo cuando hacemos cálculos, como la media.</p><p>Para decidir los intervalos: busca el dato menor y el mayor, calcula el recorrido y divídelo en 5 a 10 intervalos de igual amplitud. Al agrupar se pierde algo de información (ya no sabemos cada altura exacta), pero se gana claridad.</p>`, svg: tablaAlturas },
    { html: `<h3>2.1 Diagrama de barras</h3><p>Los gráficos permiten ver de un vistazo cómo se reparten los datos. Cada tipo de variable tiene su gráfico más adecuado.</p><p>El <b>diagrama de barras</b> se usa con variables cualitativas o cuantitativas discretas. En el eje horizontal se colocan los valores y sobre cada uno se levanta una barra de altura igual a su frecuencia. Las barras están <b>separadas</b> y tienen todas la misma anchura.</p><p>En el ejemplo de los libros, la barra más alta es la de 1 libro (7 alumnos): de un vistazo se ve que es el valor más frecuente.</p><p>Uniendo los extremos superiores de las barras con segmentos se obtiene el <b>polígono de frecuencias</b>, útil para comparar dos grupos en el mismo gráfico.</p><p>Al leer gráficos de los medios de comunicación, fíjate en el eje vertical: si no empieza en 0, pequeñas diferencias parecen enormes. Es un truco frecuente para exagerar.</p>`, svg: psvg("estadistica", 2) },
    { html: `<h3>2.2 Histograma</h3><p>El <b>histograma</b> se usa con datos agrupados en intervalos. Es parecido a un diagrama de barras, pero los rectángulos están <b>pegados</b>, porque los intervalos son consecutivos y no hay huecos entre ellos: entre 155 y 160 cm hay infinitas alturas posibles.</p><p>La base de cada rectángulo es el intervalo y, si todos tienen la misma amplitud, la altura es su frecuencia. En las alturas de los 25 alumnos, el rectángulo más alto es el del intervalo [160, 165), con 8 alumnos: es la <b>clase modal</b>.</p><p>El <b>polígono de frecuencias</b> de un histograma se dibuja uniendo los puntos medios de los techos de los rectángulos (que están sobre las marcas de clase). Se suele cerrar bajando hasta el eje en los extremos.</p><p>La forma del histograma dice mucho: si es simétrico con forma de campana, como ocurre con las alturas, la mayoría de los datos están cerca del centro y hay pocos muy bajos o muy altos.</p>`, svg: histo },
    { html: `<h3>2.3 Diagrama de sectores</h3><p>El <b>diagrama de sectores</b> es un círculo dividido en partes proporcionales a las frecuencias. Es muy útil para variables cualitativas y para ver qué parte del total representa cada valor.</p><p>Como el círculo completo son 360°, el ángulo de cada sector es:</p><p><mark>ángulo = (fᵢ / N) · 360° = hᵢ · 360°</mark></p><p>Ejemplo: deporte favorito de 40 alumnos. Fútbol, 14: (14 / 40) · 360° = 126°. Baloncesto, 10: 90°. Natación, 6: 54°. Otros, 10: 90°. Comprobación: 126 + 90 + 54 + 90 = 360°. ✔</p><p>Para dibujarlo se usa el transportador, empezando cada sector donde termina el anterior.</p><p>Los diagramas de sectores funcionan mal cuando hay muchos valores o valores parecidos, porque es difícil comparar ángulos a ojo. En ese caso es mejor un diagrama de barras. Tampoco sirven para mostrar cómo cambia algo con el tiempo: para eso se usa un gráfico de líneas.</p>`, svg: tarta },
    { html: `<h3>3.1 La media aritmética</h3><p>Las <b>medidas de centralización</b> resumen todos los datos en un solo número que los representa. La más conocida es la <b>media aritmética</b>: la suma de todos los datos dividida entre el número de datos.</p><p>Si los datos están en una tabla, cada valor se multiplica por su frecuencia: <mark>x̄ = Σ xᵢ · fᵢ / N</mark>.</p><p>Libros leídos: x̄ = (0 · 3 + 1 · 7 + 2 · 6 + 3 · 4) / 20 = 31 / 20 = 1,55 libros. No importa que nadie haya leído «1,55 libros»: la media es el valor que tendría cada alumno si se repartieran los libros por igual.</p><p>Con datos agrupados, se usan las marcas de clase como xᵢ. Alturas: (152,5 · 3 + 157,5 · 6 + 162,5 · 8 + 167,5 · 5 + 172,5 · 3) / 25 = 4057,5 / 25 = 162,3 cm.</p><p>La media solo se puede calcular con variables cuantitativas.</p>`, svg: media, video: pvid("estadistica", 3) },
    { html: `<h3>3.2 Mediana y moda</h3><p>La <b>mediana</b> (Me) es el valor que ocupa el lugar central cuando los datos están <b>ordenados</b>: la mitad de los datos son menores o iguales y la otra mitad, mayores o iguales.</p><ul><li>Si N es impar, es el dato central: en 3, 5, 7, 8, 12, Me = 7.</li><li>Si N es par, es la media de los dos centrales: en 3, 5, 7, 8, Me = (5 + 7) / 2 = 6.</li><li>Con una tabla, se busca el primer valor cuya frecuencia acumulada alcanza N/2. Libros: N/2 = 10; los datos 10.º y 11.º son 1 y 2, así que Me = 1,5.</li></ul><p>La <b>moda</b> (Mo) es el valor con mayor frecuencia absoluta. En los libros, Mo = 1. Puede haber dos modas (distribución bimodal) o más. La moda es la única medida de centralización que sirve para variables cualitativas: en los deportes, la moda es el fútbol.</p>`, svg: mediana },
    { html: `<h3>3.3 ¿Media o mediana?</h3><p>La media tiene en cuenta todos los datos, lo que es una ventaja, pero también un inconveniente: es muy sensible a los <b>valores atípicos</b>, datos muy distintos al resto.</p><p>En una pequeña empresa, tres empleados cobran 1200, 1300 y 1400 € al mes. La media y la mediana son 1300 €. Si añadimos el sueldo del jefe, 9000 €, la media sube a 3225 €, cifra que no representa a nadie, mientras que la mediana solo cambia a 1350 €.</p><p>Por eso, cuando hay datos atípicos, la mediana representa mejor a la mayoría. Las estadísticas oficiales sobre salarios o precios de la vivienda suelen dar la mediana y no la media.</p><p>Resumen práctico:</p><ul><li><b>Media</b>: datos cuantitativos sin valores extremos.</li><li><b>Mediana</b>: hay valores atípicos o datos ordenables.</li><li><b>Moda</b>: variables cualitativas o para saber el valor más repetido.</li></ul>`, svg: atipico },
    { html: `<h3>3.4 Medidas de dispersión</h3><p>Dos grupos pueden tener la misma media y ser muy distintos. Las notas 4, 5 y 6 y las notas 1, 5 y 9 tienen media 5, pero en el primer grupo los datos están juntos y en el segundo, muy separados. Las <b>medidas de dispersión</b> indican cuánto se alejan los datos de la media.</p><ul><li><b>Rango</b> o recorrido: dato mayor − dato menor. Primer grupo: 6 − 4 = 2. Segundo: 9 − 1 = 8.</li><li><b>Desviación media</b>: media de las distancias de cada dato a la media. Primer grupo: (1 + 0 + 1) / 3 ≈ 0,67. Segundo: (4 + 0 + 4) / 3 ≈ 2,67.</li></ul><p>Cuanto mayor es la dispersión, menos representativa es la media. En cursos posteriores aprenderás la <b>desviación típica</b>, que se calcula con los cuadrados de las distancias y es la medida que usan las calculadoras científicas y las hojas de cálculo.</p>`, svg: psvg("estadistica", 4) },
    { html: `<h3>4.1 Experimentos aleatorios y sucesos</h3><p>Un experimento es <b>aleatorio</b> si no se puede predecir su resultado aunque se repita en las mismas condiciones: lanzar un dado, sacar una carta, girar una ruleta. Si el resultado se conoce de antemano (soltar una piedra y ver si cae), es <b>determinista</b>.</p><ul><li><b>Espacio muestral</b> (E): conjunto de todos los resultados posibles. Al lanzar un dado, E = {1, 2, 3, 4, 5, 6}.</li><li><b>Suceso</b>: cualquier subconjunto de E. «Sacar par» = {2, 4, 6}.</li><li><b>Suceso elemental</b>: un solo resultado. <b>Seguro</b>: ocurre siempre (E). <b>Imposible</b>: nunca ocurre (∅).</li><li><b>Suceso contrario</b> de A: ocurre cuando no ocurre A. El contrario de «par» es «impar».</li></ul><p>Cuando un experimento tiene varias etapas, como lanzar dos monedas, el <b>diagrama de árbol</b> ayuda a no olvidar ningún resultado: CC, CX, XC, XX.</p>`, svg: sucesos },
    { html: `<h3>4.2 La regla de Laplace</h3><p>La <b>probabilidad</b> de un suceso es un número entre 0 y 1 que mide lo posible que es: 0 para el imposible y 1 para el seguro.</p><p>Si todos los resultados son <b>igual de probables</b> (equiprobables), se aplica la <b>regla de Laplace</b>:</p><p><mark>P(A) = casos favorables / casos posibles</mark></p><ul><li>Sacar un 5 en un dado: P = 1/6 ≈ 0,17.</li><li>Sacar par: P = 3/6 = 1/2.</li><li>Sacar una bola roja de una bolsa con 3 rojas y 5 azules: P = 3/8.</li><li>Dos caras al lanzar dos monedas: P = 1/4 (solo CC de 4 resultados).</li></ul><p>La probabilidad del suceso contrario es <mark>P(no A) = 1 − P(A)</mark>: no sacar un 5 tiene probabilidad 5/6.</p><p>Laplace no sirve si los resultados no son equiprobables: con una chincheta, «punta arriba» y «punta abajo» no tienen la misma probabilidad.</p>`, svg: psvg("estadistica", 6).replace(`x="196.66666666666669" y="72"`, `x="196.66666666666669" y="58"`), video: pvid("estadistica", 6) },
    { html: `<h3>4.3 Frecuencia relativa y probabilidad</h3><p>Cuando no podemos usar Laplace, estimamos la probabilidad <b>experimentando</b>. Si lanzamos una moneda 10 veces, puede salir cara 7 veces (frecuencia relativa 0,7), pero si la lanzamos miles de veces, la frecuencia relativa de cara se acerca cada vez más a 0,5.</p><p>Esto es la <b>ley de los grandes números</b>: <mark>al repetir muchas veces un experimento, la frecuencia relativa de un suceso se estabiliza alrededor de su probabilidad</mark>.</p><p>Así se calculan probabilidades de la vida real: la probabilidad de que llueva un día de abril, de que una bombilla dure más de 1000 horas o de que una chincheta caiga con la punta hacia arriba.</p><p>Cuidado con la «falacia del jugador»: si han salido cinco caras seguidas, la siguiente tirada sigue teniendo probabilidad 1/2 de ser cara. La moneda no tiene memoria; la ley de los grandes números habla de muchísimas tiradas, no de compensar las anteriores.</p>`, svg: grandes },
  ],
  ejemplos: [
    { enunciado: "Clasifica las variables: color favorito, número de mascotas, tiempo en llegar al instituto.", pasos: ["El color no es un número: cualitativa.", "Mascotas: valores aislados 0, 1, 2…: discreta.", "El tiempo puede tomar cualquier valor: continua."], resultado: "Cualitativa, cuantitativa discreta y cuantitativa continua." },
    { enunciado: "Haz la tabla de frecuencias de las notas 5, 7, 6, 5, 8, 7, 5, 9, 6, 7.", pasos: ["Recuento: 5 → 3, 6 → 2, 7 → 3, 8 → 1, 9 → 1.", "hᵢ: 0,3; 0,2; 0,3; 0,1; 0,1.", "Fᵢ: 3, 5, 8, 9, 10."], resultado: "N = 10 y Σ hᵢ = 1." },
    { enunciado: "Calcula los ángulos de un diagrama de sectores: 9 alumnos van andando, 6 en bus y 3 en coche.", pasos: ["N = 18; 360° / 18 = 20° por alumno.", "Andando 180°, bus 120°, coche 60°."], resultado: "180°, 120° y 60° (suman 360°)." },
    { enunciado: "Calcula media, mediana y moda de 2, 4, 4, 5, 7, 8, 12.", pasos: ["Suma 42; x̄ = 42 / 7 = 6.", "Ordenados, el central (4.º) es 5.", "El 4 se repite dos veces."], resultado: "x̄ = 6, Me = 5, Mo = 4." },
    { enunciado: "Calcula el rango y la desviación media de 3, 5, 7, 9.", pasos: ["Rango: 9 − 3 = 6.", "x̄ = 24 / 4 = 6. Distancias: 3, 1, 1, 3.", "DM = 8 / 4 = 2."], resultado: "Rango 6 y desviación media 2." },
    { enunciado: "En una bolsa hay 4 bolas rojas, 5 verdes y 3 azules. ¿Cuál es la probabilidad de no sacar verde?", pasos: ["Casos posibles: 12.", "P(verde) = 5/12.", "P(no verde) = 1 − 5/12."], resultado: "7/12 ≈ 0,58." },
  ],
  errores: [
    "Confundir población y muestra, o elegir una muestra sesgada.",
    "Tratar como cuantitativa una variable con números que no son cantidades (código postal).",
    "Calcular la mediana sin ordenar antes los datos.",
    "Olvidar multiplicar cada valor por su frecuencia al calcular la media con tabla.",
    "Dibujar un histograma con barras separadas o un diagrama de barras con barras pegadas.",
    "Aplicar la regla de Laplace cuando los resultados no son equiprobables.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Indica la población, la muestra y la variable: «Se pregunta a 50 vecinos de un barrio de 2000 habitantes cuántas horas ven la televisión al día».", sol: "Población: los 2000 habitantes. Muestra: los 50 vecinos. Variable: horas de televisión (cuantitativa continua)." },
    { nivel: "básico", q: "Clasifica: número de hermanos, marca de móvil, peso, número de calzado, nacionalidad.", sol: "Discreta, cualitativa, continua, discreta, cualitativa." },
    { nivel: "básico", q: "Haz la tabla de frecuencias absolutas y relativas: 2, 3, 3, 1, 2, 3, 4, 2, 3, 1.", sol: "1: 2 (0,2); 2: 3 (0,3); 3: 4 (0,4); 4: 1 (0,1). N = 10." },
    { nivel: "básico", q: "Calcula las frecuencias acumuladas de la tabla anterior.", sol: "Fᵢ: 2, 5, 9, 10." },
    { nivel: "básico", q: "Calcula la media de 6, 8, 5, 9, 7.", sol: "35 / 5 = 7." },
    { nivel: "básico", q: "Calcula la mediana de 12, 7, 9, 15, 10.", sol: "Ordenados: 7, 9, 10, 12, 15. Me = 10." },
    { nivel: "básico", q: "Calcula la moda y el rango de 3, 5, 5, 6, 8, 5, 2.", sol: "Mo = 5. Rango = 8 − 2 = 6." },
    { nivel: "básico", q: "Escribe el espacio muestral al sacar una carta de los palos de una baraja española (oros, copas, espadas, bastos) y lanzar una moneda.", sol: "E = {oros-C, oros-X, copas-C, copas-X, espadas-C, espadas-X, bastos-C, bastos-X}: 8 resultados." },
    { nivel: "básico", q: "Al lanzar un dado, calcula P(sacar 6), P(sacar menos de 3) y P(sacar 7).", sol: "1/6; 2/6 = 1/3; 0 (imposible)." },
    { nivel: "básico", q: "¿Qué gráfico usarías para: color favorito, número de hermanos, estatura?", sol: "Sectores o barras; barras; histograma." },
    { nivel: "medio", q: "Las edades de un grupo de teatro son: 12 (4 personas), 13 (6), 14 (7), 15 (3). Calcula la media, la mediana y la moda.", sol: "N = 20. x̄ = (48 + 78 + 98 + 45) / 20 = 269 / 20 = 13,45. Fᵢ: 4, 10, 17, 20 → datos 10.º y 11.º: 13 y 14 → Me = 13,5. Mo = 14." },
    { nivel: "medio", q: "Calcula la mediana de 4, 9, 2, 7, 5, 8.", sol: "Ordenados: 2, 4, 5, 7, 8, 9. Me = (5 + 7) / 2 = 6." },
    { nivel: "medio", q: "En una votación de 120 alumnos, 54 eligen excursión a la playa, 36 a la montaña y 30 a un museo. Calcula los ángulos del diagrama de sectores y los porcentajes.", sol: "Playa 162° (45 %), montaña 108° (30 %), museo 90° (25 %)." },
    { nivel: "medio", q: "Agrupa en intervalos de amplitud 10, desde 40, los pesos: 45, 52, 48, 61, 55, 58, 43, 67, 50, 53, 59, 64. Indica las marcas de clase.", sol: "[40,50): 3 (marca 45); [50,60): 6 (55); [60,70): 3 (65)." },
    { nivel: "medio", q: "Calcula la media de los pesos anteriores con las marcas de clase y compárala con la media exacta.", sol: "Con marcas: (135 + 330 + 195) / 12 = 55. Exacta: 655 / 12 ≈ 54,6. Muy parecidas." },
    { nivel: "medio", q: "La media de 4 números es 7. Si se añade un quinto número y la media pasa a ser 8, ¿cuál es ese número?", sol: "Suma inicial 28; suma final 40. El número es 12." },
    { nivel: "medio", q: "Calcula el rango y la desviación media de las notas 4, 6, 7, 7.", sol: "Rango 3. x̄ = 6. Distancias: 2, 0, 1, 1. DM = 4 / 4 = 1." },
    { nivel: "medio", q: "Con dos monedas, calcula P(dos cruces), P(al menos una cara) y P(una cara y una cruz).", sol: "1/4; 3/4; 2/4 = 1/2." },
    { nivel: "medio", q: "En una clase hay 14 chicos y 16 chicas. Se elige un delegado al azar. ¿Probabilidad de que sea chica? ¿Y de que no lo sea?", sol: "16/30 = 8/15 ≈ 0,53; 7/15 ≈ 0,47." },
    { nivel: "medio", q: "Se saca una carta de una baraja española de 40 cartas. Calcula P(oro), P(rey), P(rey de oros) y P(figura).", sol: "10/40 = 1/4; 4/40 = 1/10; 1/40; 12/40 = 3/10." },
    { nivel: "medio", q: "Una chincheta se lanzó 200 veces y cayó con la punta hacia arriba 124 veces. Estima la probabilidad de cada posición.", sol: "Punta arriba ≈ 124/200 = 0,62; punta abajo ≈ 0,38. No se puede usar Laplace." },
    { nivel: "medio", q: "Explica por qué la media de 1, 2, 2, 3, 50 no representa bien los datos y qué medida usarías.", sol: "x̄ = 11,6, mayor que casi todos los datos por el atípico 50. Mejor la mediana, Me = 2." },
    { nivel: "avanzado", q: "Las notas de dos grupos son: A: 5, 5, 6, 6, 8; B: 2, 4, 6, 8, 10. Calcula media, rango y desviación media de cada uno y compara.", sol: "A: x̄ = 6, rango 3, DM = (1 + 1 + 0 + 0 + 2)/5 = 0,8. B: x̄ = 6, rango 8, DM = (4 + 2 + 0 + 2 + 4)/5 = 2,4. Misma media, B mucho más disperso." },
    { nivel: "avanzado", q: "Al lanzar dos dados y sumar, ¿qué suma es más probable? Calcula P(suma 7) y P(suma 2).", sol: "Hay 36 resultados. La suma 7 aparece 6 veces: P = 1/6. La suma 2 solo 1 vez: P = 1/36. La más probable es 7." },
    { nivel: "avanzado", q: "En una bolsa hay bolas rojas y azules. La probabilidad de roja es 3/5 y hay 8 azules. ¿Cuántas bolas hay?", sol: "P(azul) = 2/5 = 8/N → N = 20 bolas (12 rojas)." },
    { nivel: "avanzado", q: "Un periódico publica un gráfico de barras de ventas con el eje vertical empezando en 950: 960 y 990 unidades. Parece que las ventas se triplicaron. Explica el engaño.", sol: "Las barras miden 10 y 40 unidades sobre 950, por lo que una parece cuatro veces mayor. En realidad 990/960 ≈ 1,03: subieron un 3 %." },
    { nivel: "avanzado", q: "Las notas de 5 exámenes de Ana son 6, 7, 5, 8 y x. Si quiere que la media sea 7, ¿qué nota necesita? ¿Y si quiere que la mediana sea 7?", sol: "Media: 26 + x = 35 → x = 9. Mediana: ordenados 5, 6, 7, 8 y x; necesita x ≥ 7." },
    { nivel: "avanzado", q: "Diseña un estudio para saber cuánto tiempo dedican al móvil los alumnos de tu instituto: población, muestra, variable, tabla y gráfico.", sol: "Población: todos los alumnos. Muestra: unos 10 por curso elegidos al azar. Variable: minutos al día (continua). Tabla agrupada en intervalos de 30 min, histograma, media, mediana y rango." },
    { nivel: "avanzado", q: "Después de 5 caras seguidas, Marcos dice que «ahora tiene que salir cruz». ¿Tiene razón? Justifica con la ley de los grandes números.", sol: "No. Cada lanzamiento es independiente y P(cruz) = 1/2. La frecuencia se acerca a 0,5 porque las rachas pesan poco entre miles de tiradas, no porque la moneda compense." },
    { nivel: "avanzado", q: "Un dado se lanza 600 veces y sale 6 en 160 ocasiones. ¿Crees que está trucado? Razónalo.", sol: "Se esperan unas 100 (600 · 1/6). La frecuencia relativa 0,27 es mucho mayor que 0,17 con tantas tiradas: probablemente está trucado." },
  ],
  quiz: baraja([
    { q: "La muestra es…", o: ["una parte de la población", "toda la población", "un individuo", "la variable estudiada"], a: 0, e: "Se estudia cuando no se puede preguntar a todos." },
    { q: "«Número de hermanos» es una variable…", o: ["cuantitativa discreta", "cuantitativa continua", "cualitativa", "aleatoria"], a: 0, e: "Valores aislados." },
    { q: "«Altura» es una variable…", o: ["cuantitativa continua", "cuantitativa discreta", "cualitativa", "de sucesos"], a: 0, e: "Cualquier valor de un intervalo." },
    { q: "«Color de ojos» es…", o: ["cualitativa", "discreta", "continua", "un suceso"], a: 0, e: "No es un número." },
    { q: "La suma de las frecuencias relativas es…", o: ["1", "N", "100", "0"], a: 0, e: "Cada una es fᵢ/N." },
    { q: "La última frecuencia absoluta acumulada es…", o: ["N", "1", "la moda", "0"], a: 0, e: "Se han sumado todas." },
    { q: "Marca de clase de [20, 30):", o: ["25", "20", "30", "10"], a: 0, e: "Punto medio." },
    { q: "En un histograma, los rectángulos…", o: ["están pegados", "están separados", "son círculos", "tienen alturas iguales"], a: 0, e: "Intervalos consecutivos." },
    { q: "Ángulo de un sector con 15 de 60 datos:", o: ["90°", "60°", "15°", "45°"], a: 0, e: "(15/60) · 360." },
    { q: "Media de 3, 5, 10:", o: ["6", "5", "18", "7"], a: 0, e: "18/3." },
    { q: "Mediana de 1, 3, 8, 9:", o: ["5,5", "3", "8", "5,25"], a: 0, e: "(3 + 8)/2." },
    { q: "Moda de 2, 3, 3, 4, 4, 4:", o: ["4", "3", "3,3", "2"], a: 0, e: "El más repetido." },
    { q: "La medida más afectada por datos atípicos es…", o: ["la media", "la mediana", "la moda", "ninguna"], a: 0, e: "Usa todos los valores." },
    { q: "El rango de 4, 9, 2, 7 es…", o: ["7", "9", "5", "5,5"], a: 0, e: "9 − 2." },
    { q: "Para una variable cualitativa solo se puede calcular…", o: ["la moda", "la media", "la mediana", "el rango"], a: 0, e: "No hay números que sumar." },
    { q: "Lanzar un dado es un experimento…", o: ["aleatorio", "determinista", "imposible", "seguro"], a: 0, e: "No se sabe el resultado." },
    { q: "P(sacar par) en un dado:", o: ["1/2", "1/6", "1/3", "2/3"], a: 0, e: "3/6." },
    { q: "Si P(A) = 0,3, P(no A) =", o: ["0,7", "0,3", "1,3", "0"], a: 0, e: "1 − 0,3." },
    { q: "La probabilidad de un suceso imposible es…", o: ["0", "1", "0,5", "−1"], a: 0, e: "Nunca ocurre." },
    { q: "Al repetir muchas veces un experimento, la frecuencia relativa…", o: ["se acerca a la probabilidad", "se aleja de ella", "es siempre 0,5", "vale 1"], a: 0, e: "Ley de los grandes números." },
  ]),
  examen: baraja([
    { q: "Media de 0·2, 1·5, 2·3 (valor·frecuencia):", o: ["1,1", "1", "3,3", "1,5"], a: 0, e: "11/10." },
    { q: "Mediana de 7, 2, 9, 4, 5:", o: ["5", "4", "7", "5,4"], a: 0, e: "Ordenados: 2, 4, 5, 7, 9." },
    { q: "En 80 alumnos, 20 eligen tenis. Ángulo:", o: ["90°", "20°", "80°", "25°"], a: 0, e: "(20/80) · 360." },
    { q: "Desviación media de 2, 4, 6:", o: ["4/3", "2", "4", "0"], a: 0, e: "(2 + 0 + 2)/3." },
    { q: "P(rey) en una baraja española de 40 cartas:", o: ["1/10", "1/40", "1/4", "4/10"], a: 0, e: "4/40." },
    { q: "Dos monedas: P(al menos una cara):", o: ["3/4", "1/2", "1/4", "1"], a: 0, e: "CC, CX, XC." },
    { q: "Bolsa con 2 rojas y 6 blancas: P(roja):", o: ["1/4", "1/3", "2/6", "3/4"], a: 0, e: "2/8." },
    { q: "Un sueldo atípico muy alto hace que…", o: ["la media suba mucho", "la mediana suba mucho", "la moda cambie", "el rango baje"], a: 0, e: "La media es sensible." },
  ], 1),
  feynman: ["Por qué la media es sensible a los datos atípicos y la mediana no", "Cuándo usar un diagrama de barras y cuándo un histograma", "Por qué la regla de Laplace no sirve para una chincheta", "Qué dice de verdad la ley de los grandes números"],
  figura: {
    titulo: "Estadística y probabilidad en un vistazo",
    svg: resumen("Resumen del tema de estadística y probabilidad", [
      ["Datos", "población · muestra · variables", "var(--pen)"],
      ["Tablas", "fᵢ · hᵢ = fᵢ/N · Fᵢ · intervalos", "var(--leaf)"],
      ["Gráficos", "barras · histograma · sectores", "var(--sun)"],
      ["Parámetros", "media · mediana · moda · rango · DM", "var(--inf)"],
      ["Probabilidad", "Laplace = favorables/posibles", "var(--red)"],
    ]),
  },
  video: pvg("estadistica"),
  mapa: mapa("ESTADÍSTICA Y PROBABILIDAD", "var(--pen)", [
    ["Recoger", "población · muestra · variables", "var(--pen)"],
    ["Organizar", "tablas · gráficos", "var(--leaf)"],
    ["Resumir", "centralización · dispersión", "var(--sun)"],
    ["Azar", "sucesos · Laplace", "var(--red)"],
  ], 250),
  glosario: [
    ["Población", "Conjunto de todos los elementos que se quieren estudiar."],
    ["Muestra", "Parte de la población que se estudia."],
    ["Variable estadística", "Característica que se estudia en cada individuo."],
    ["Frecuencia absoluta", "Número de veces que aparece un valor."],
    ["Frecuencia relativa", "Frecuencia absoluta dividida entre el número total de datos."],
    ["Frecuencia acumulada", "Suma de las frecuencias de un valor y de todos los anteriores."],
    ["Marca de clase", "Punto medio de un intervalo."],
    ["Histograma", "Gráfico de rectángulos pegados para datos agrupados en intervalos."],
    ["Media", "Suma de los datos dividida entre el número de datos."],
    ["Mediana", "Valor central de los datos ordenados."],
    ["Moda", "Valor con mayor frecuencia."],
    ["Rango", "Diferencia entre el dato mayor y el menor."],
    ["Espacio muestral", "Conjunto de todos los resultados posibles de un experimento aleatorio."],
    ["Regla de Laplace", "P(A) = casos favorables / casos posibles, si son equiprobables."],
  ],
  situacion: {
    titulo: "¿Cómo es nuestra clase?",
    reto: "Vais a hacer un estudio estadístico sobre los hábitos de vuestra clase (horas de sueño, tiempo de pantalla, deporte…) y presentar los resultados en una infografía con tablas, gráficos y conclusiones, como hizo Florence Nightingale.",
    pasos: [
      "Elegid en grupo una pregunta de investigación y decidid las variables que vais a estudiar.",
      "Diseñad una encuesta anónima y recoged los datos de toda la clase.",
      "Organizad los datos en tablas de frecuencias (agrupando en intervalos si hace falta).",
      "Elegid y construid los gráficos adecuados, a mano o con una hoja de cálculo.",
      "Calculad media, mediana, moda y rango e interpretadlos.",
      "Presentad una infografía con las conclusiones y una recomendación para la clase.",
    ],
    producto: "Una infografía con tablas, gráficos, parámetros y conclusiones.",
    evaluacion: ["Clasifica correctamente las variables y organiza los datos en tablas.", "Elige y construye el gráfico adecuado para cada variable.", "Calcula e interpreta los parámetros estadísticos.", "Comunica conclusiones razonadas y respetuosas con la privacidad."],
  },
  tarjetas: [
    ["Población", "Todos los individuos a estudiar"], ["Muestra", "Parte representativa de la población"], ["Variable cualitativa", "No es un número"],
    ["Variable discreta", "Valores aislados"], ["Variable continua", "Cualquier valor de un intervalo"], ["hᵢ", "fᵢ / N"],
    ["Histograma", "Rectángulos pegados"], ["Ángulo de sector", "hᵢ · 360°"], ["Media", "Σ xᵢ·fᵢ / N"],
    ["Mediana", "Valor central ordenado"], ["Rango", "Máximo − mínimo"], ["Laplace", "favorables / posibles"],
  ],
  familias: ["Buscad gráficos estadísticos en un periódico y comentad si están bien hechos.", "Anotad durante una semana los minutos de pantalla de cada día y calculad la media y la mediana.", "Lanzad una moneda 50 veces y comparad la frecuencia de cara con 0,5.", "Hablad de por qué los sueldos se suelen dar con la mediana."],
  profesores: {
    saberes: "Sentido estocástico: población y muestra, variables, tablas de frecuencias, gráficos estadísticos, medidas de centralización y dispersión, experimentos aleatorios, regla de Laplace y frecuencia relativa (RD 217/2022, Matemáticas ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Encuesta real en el aula con datos de los alumnos (anónimos).", "Uso de hoja de cálculo para tablas y gráficos.", "Análisis crítico de gráficos engañosos de los medios.", "Experimento colectivo de lanzamientos para ver la ley de los grandes números."],
  },
  fuentes: [RD, DECRET, { t: "INE: Estadística para todos", url: "https://www.ine.es/explica/explica.htm" }, { t: "Wikipedia: Florence Nightingale", url: "https://es.wikipedia.org/wiki/Florence_Nightingale" }],
  revisado: REV,
};
