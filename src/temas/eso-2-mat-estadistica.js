// Matemáticas 2º ESO: estadística y probabilidad. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Estadística y probabilidad",
  minutos: 65,
  objetivos: ["Distinguir población, muestra y tipos de variables estadísticas", "Construir tablas de frecuencias y gráficos adecuados", "Calcular e interpretar la media, la mediana, la moda y el rango", "Calcular probabilidades con la regla de Laplace"],
  claves: ["población", "muestra", "frecuencia relativa", "media", "mediana", "regla de Laplace"],
  pregunta: {
    texto: "Si lanzas una moneda 10 veces y salen 7 caras, ¿está trucada?",
    respuesta: "No necesariamente. Con pocos lanzamientos los resultados varían mucho. Si la lanzas <b>1.000 veces</b>, la proporción de caras se acercará a <mark>0,5</mark>: esa es su probabilidad. La estadística estudia datos reales y la probabilidad, lo que se espera que ocurra cuando interviene el azar.",
  },
  bloques: [
    {
      html: `<h3>Población, muestra y variables</h3><p>La <b>estadística</b> recoge, ordena e interpreta datos. Términos básicos:</p><ul><li><b>Población</b>: todos los elementos que se estudian (todos los alumnos del centro).</li><li><b>Muestra</b>: una parte representativa de la población (30 alumnos elegidos al azar). Se usa cuando la población es muy grande.</li><li><b>Variable estadística</b>: la característica que se estudia.</li></ul><p>Las variables pueden ser <b>cualitativas</b> (no son números: color favorito, deporte) o <b>cuantitativas</b> (son números). Las cuantitativas son <b>discretas</b> si toman valores aislados (número de hermanos) y <b>continuas</b> si pueden tomar cualquier valor de un intervalo (altura, tiempo).</p>`,
    },
    {
      html: `<h3>Tablas de frecuencias</h3><p>Se preguntó a 20 alumnos cuántos libros habían leído este trimestre:</p>${tabla(["Libros (xᵢ)", "fᵢ", "Fᵢ", "hᵢ", "%"], [["0", "3", "3", "0,15", "15 %"], ["1", "7", "10", "0,35", "35 %"], ["2", "6", "16", "0,30", "30 %"], ["3", "4", "20", "0,20", "20 %"], ["Total", "20", "", "1", "100 %"]])}<ul><li><b>Frecuencia absoluta (fᵢ)</b>: veces que aparece cada valor.</li><li><b>Frecuencia acumulada (Fᵢ)</b>: suma de las absolutas hasta ese valor.</li><li><b>Frecuencia relativa (hᵢ)</b>: fᵢ dividida entre el total. Las relativas suman 1.</li><li><b>Porcentaje</b>: hᵢ · 100.</li></ul>`,
    },
    {
      html: `<h3>Gráficos estadísticos</h3><p>Cada tipo de dato tiene su gráfico más adecuado:</p><ul><li><b>Diagrama de barras</b>: variables cualitativas y cuantitativas discretas. La altura de cada barra es la frecuencia.</li><li><b>Histograma</b>: variables continuas agrupadas en intervalos; las barras van juntas.</li><li><b>Polígono de frecuencias</b>: une los extremos superiores de las barras; útil para ver la evolución.</li><li><b>Diagrama de sectores</b>: muestra la proporción de cada parte respecto al total. El ángulo de cada sector es <mark>hᵢ · 360°</mark>.</li></ul><p>En el ejemplo de los libros, al valor «1 libro» le corresponde 0,35 · 360° = 126°.</p>`,
      svg: svg("Diagrama de barras de libros leídos: 0 libros 3 alumnos, 1 libro 7, 2 libros 6 y 3 libros 4", `<path d="M30 150 H 240 M30 150 V 20" stroke="var(--muted)" stroke-width="2"/>${[3, 7, 6, 4].map((f, i) => `<rect x="${50 + i * 48}" y="${150 - f * 17}" width="30" height="${f * 17}" fill="${["var(--pen)", "var(--leaf)", "var(--sun)", "var(--red)"][i]}" fill-opacity=".55"/>${t(65 + i * 48, 145 - f * 17, String(f), { s: 11 })}${t(65 + i * 48, 166, String(i), { c: "var(--muted)", s: 11 })}`).join("")}${t(214, 176, "libros", { c: "var(--muted)", s: 10 })}${t(34, 16, "fᵢ", { c: "var(--muted)", s: 10, a: "start" })}`),
    },
    {
      html: `<h3>Medidas de centralización</h3><p>Resumen los datos en un solo número representativo:</p><ul><li><b>Media aritmética (x̄)</b>: se suman todos los datos y se divide entre cuántos hay. Con tabla: <mark>x̄ = Σ xᵢ · fᵢ / N</mark>. Libros: (0 · 3 + 1 · 7 + 2 · 6 + 3 · 4) / 20 = 31 / 20 = <b>1,55</b>.</li><li><b>Mediana (Me)</b>: el valor central cuando los datos están <b>ordenados</b>. Si hay un número par de datos, la media de los dos centrales. Aquí los datos 10.º y 11.º son 1 y 2 → Me = <b>1,5</b>.</li><li><b>Moda (Mo)</b>: el valor que más se repite. Aquí, <b>1</b>.</li></ul><p>La media se ve muy afectada por valores extremos; la mediana, no. Por eso los sueldos suelen resumirse con la mediana.</p>`,
      video: { id: "0DA7Wtz1ddg", titulo: "Media, moda y mediana", canal: "Daniel Carreón", vistas: 17076637 },
    },
    {
      html: `<h3>Medidas de dispersión</h3><p>Dos grupos pueden tener la misma media y ser muy distintos. Las medidas de <b>dispersión</b> indican si los datos están agrupados o separados.</p><ul><li><b>Rango</b> o recorrido: <mark>dato mayor − dato menor</mark>. Notas 4, 5, 6 → rango 2; notas 1, 5, 9 → rango 8. Las dos tienen media 5.</li><li><b>Desviación media</b>: la media de las distancias de cada dato a la media. Notas 1, 5, 9: (4 + 0 + 4)/3 ≈ 2,67.</li></ul><p>Cuanto mayores son, más dispersos están los datos y menos representativa es la media.</p>`,
      svg: svg("Dos grupos con media 5: uno con datos 4, 5 y 6 muy juntos y otro con 1, 5 y 9 muy separados", `<path d="M30 60 H 230 M30 120 H 230" stroke="var(--muted)" stroke-width="2"/>${[4, 5, 6].map((v) => `<circle cx="${30 + v * 20}" cy="60" r="6" fill="var(--leaf)"/>`).join("")}${[1, 5, 9].map((v) => `<circle cx="${30 + v * 20}" cy="120" r="6" fill="var(--red)"/>`).join("")}<path d="M130 40 V 140" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 3"/>${t(130, 30, "media 5", { c: "var(--pen)", s: 11 })}
        ${t(214, 50, "rango 2", { c: "var(--leaf)", s: 11 })}${t(214, 110, "rango 8", { c: "var(--red)", s: 11 })}${t(130, 166, "misma media, distinta dispersión", { s: 12 })}`),
    },
    {
      html: `<h3>Experimentos aleatorios y sucesos</h3><p>Un experimento es <b>aleatorio</b> si no se puede predecir el resultado aunque se repita en las mismas condiciones (lanzar un dado). Si se puede predecir, es <b>determinista</b> (soltar una piedra: cae).</p><ul><li><b>Espacio muestral (E)</b>: todos los resultados posibles. Dado: E = {1, 2, 3, 4, 5, 6}.</li><li><b>Suceso</b>: cualquier subconjunto de E. «Sacar par» = {2, 4, 6}.</li><li><b>Suceso seguro</b>: siempre ocurre (sacar menos de 7). <b>Imposible</b>: nunca ocurre (sacar 8).</li><li><b>Suceso contrario</b> de A (Ā): ocurre cuando no ocurre A. Contrario de «par» es «impar».</li></ul>`,
    },
    {
      html: `<h3>La regla de Laplace</h3><p>Si todos los resultados son <b>igual de probables</b> (dado y moneda no trucados, bolas iguales), la probabilidad de un suceso A es:</p><p style="text-align:center"><mark>P(A) = casos favorables / casos posibles</mark></p><p>Sacar un número mayor que 4 con un dado: favorables {5, 6} → P = 2/6 = 1/3 ≈ 0,33.</p><p>Propiedades: la probabilidad está siempre entre <b>0</b> (imposible) y <b>1</b> (seguro); y <b>P(Ā) = 1 − P(A)</b>. La probabilidad de no sacar un 6 es 1 − 1/6 = 5/6.</p>`,
      svg: svg("Escala de probabilidad de 0 a 1: imposible, poco probable, mitad, muy probable y seguro", `<path d="M30 90 H 230" stroke="var(--muted)" stroke-width="3"/>${[[0, "0", "imposible", "var(--red)"], [0.5, "0,5", "moneda: cara", "var(--sun)"], [1, "1", "seguro", "var(--leaf)"], [1 / 6, "1/6", "un 6", "var(--pen)"], [5 / 6, "5/6", "no un 6", "var(--inf)"]].map(([p, n, l, c], i) => `<circle cx="${30 + p * 200}" cy="90" r="6" fill="${c}"/>${t(30 + p * 200, 116, n, { c, s: 11 })}${t(30 + p * 200, i % 2 ? 140 : 72, l, { c, s: 10 })}`).join("")}${t(130, 30, "0 ≤ P(A) ≤ 1", { s: 14 })}`),
      video: { id: "qFQToHdNN9k", titulo: "Regla de Laplace: 4 ejemplos", canal: "Matemáticas profe Alex", vistas: 705159 },
    },
    {
      html: `<h3>Frecuencia y probabilidad</h3><p>Cuando un experimento se repite muchas veces, la <b>frecuencia relativa</b> de un suceso se acerca cada vez más a su <b>probabilidad</b>. Es la <b>ley de los grandes números</b>.</p><p>Si se lanza una chincheta (que no es simétrica) 500 veces y cae con la punta hacia arriba 310, se estima P ≈ 310/500 = 0,62. Así se calculan probabilidades cuando <b>no</b> se puede aplicar Laplace.</p><p>Cuidado con las ideas falsas: después de cinco cruces seguidas, la probabilidad de cara <b>sigue siendo 1/2</b>. La moneda no tiene memoria.</p>`,
    },
  ],
  figura: {
    titulo: "Estadística y probabilidad en un vistazo",
    svg: filas("Resumen: población y muestra; tipos de variables; frecuencias; media, mediana y moda; rango; regla de Laplace", [["Población / muestra", "todos / una parte representativa", "var(--pen)"], ["Variables", "cualitativas · discretas · continuas", "var(--inf)"], ["Frecuencias", "fᵢ · Fᵢ · hᵢ = fᵢ/N", "var(--sun)"], ["Centralización", "media · mediana · moda", "var(--leaf)"], ["Dispersión", "rango = máximo − mínimo", "var(--red)"], ["Laplace", "P = favorables / posibles", "var(--ink)"]], 230),
  },
  video: { id: "WeeEE8o1aqM", titulo: "Probabilidad, explicación fácil", canal: "Daniel Carreón", vistas: 6898318, megusta: 0, busqueda: "probabilidad regla de laplace" },
  quiz: mezcla([
    { q: "La estatura de los alumnos es una variable…", o: ["cuantitativa continua", "cualitativa", "cuantitativa discreta"], a: 0, e: "Puede tomar cualquier valor." },
    { q: "El número de mascotas es una variable…", o: ["cuantitativa discreta", "continua", "cualitativa"], a: 0, e: "Valores aislados." },
    { q: "Las frecuencias relativas suman…", o: ["1", "100", "N"], a: 0, e: "Proporciones." },
    { q: "La media de 2, 4, 6 y 8 es…", o: ["5", "4", "6"], a: 0, e: "20 : 4." },
    { q: "La mediana de 3, 9, 1, 7, 5 es…", o: ["5", "7", "9"], a: 0, e: "Ordenados: 1, 3, 5, 7, 9." },
    { q: "La moda de 2, 3, 3, 4, 3, 5 es…", o: ["3", "4", "2"], a: 0, e: "Más repetido." },
    { q: "El rango de 12, 4, 9, 20 es…", o: ["16", "8", "20"], a: 0, e: "20 − 4." },
    { q: "La probabilidad de sacar un 3 con un dado es…", o: ["1/6", "1/3", "3/6"], a: 0, e: "Un caso de seis." },
    { q: "Un suceso imposible tiene probabilidad…", o: ["0", "1", "0,5"], a: 0, e: "Nunca ocurre." },
    { q: "Si P(A) = 0,3, P(Ā) =", o: ["0,7", "0,3", "1,3"], a: 0, e: "1 − 0,3." },
  ]),
  examen: mezcla([
    { q: "En un diagrama de sectores, un valor con frecuencia relativa 0,25 ocupa…", o: ["90°", "25°", "45°"], a: 0, e: "0,25 · 360." },
    { q: "En una bolsa hay 3 bolas rojas, 5 azules y 2 verdes. P(no azul) =", o: ["1/2", "3/10", "1/5"], a: 0, e: "5/10." },
    { q: "Las notas 5, 6, 6, 7 y 26 (error) tienen media 10. ¿Qué medida representa mejor el grupo?", o: ["la mediana (6)", "la media", "el rango"], a: 0, e: "No le afecta el valor extremo." },
  ]),
  feynman: ["Diferencia entre población y muestra", "Tipos de variables con ejemplos", "Cómo se calculan la media, la mediana y la moda", "Para qué sirve el rango", "Qué dice la regla de Laplace y cuándo se puede usar"],
  mapa: mapa("ESTADÍSTICA Y AZAR", "var(--eso)", [
    ["Datos", "población · muestra · variables", "var(--pen)"],
    ["Tablas y gráficos", "frecuencias · barras · sectores", "var(--sun)"],
    ["Parámetros", "media · mediana · moda · rango", "var(--leaf)"],
    ["Probabilidad", "Laplace · 0 a 1", "var(--red)"],
  ], 250),
  tarjetas: [
    ["Muestra", "Parte representativa de la población."],
    ["Variable continua", "Puede tomar cualquier valor de un intervalo."],
    ["Frecuencia relativa", "fᵢ / N."],
    ["Media", "Suma de los datos entre el número de datos."],
    ["Mediana", "Valor central de los datos ordenados."],
    ["Moda", "Valor más repetido."],
    ["Rango", "Dato mayor menos dato menor."],
    ["Regla de Laplace", "P(A) = casos favorables / casos posibles."],
  ],
  familias: ["Haced una encuesta familiar (comida favorita, horas de sueño) y una tabla de frecuencias.", "Lanzad una moneda 50 veces y comparad la frecuencia de caras con 0,5.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Población y muestra; variables estadísticas; tablas de frecuencias y gráficos; medidas de centralización y de dispersión; experimentos aleatorios, sucesos y regla de Laplace; frecuencia relativa y probabilidad (RD 217/2022, Matemáticas, sentido estocástico).",
    ideas: ["Encuesta en la clase con análisis en hoja de cálculo.", "Experimento colectivo de 1.000 lanzamientos sumando los de todos.", "Detectar gráficos engañosos en prensa."],
  },
  fuentes: [RD, { t: "INE: Explica, recursos para centros educativos", url: "https://www.ine.es/explica/explica.htm" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Notas de 9 alumnos: 6, 4, 8, 6, 9, 5, 6, 7, 3. Calcula media, mediana, moda y rango.", pasos: ["Media: 54 : 9 = 6.", "Ordenadas: 3, 4, 5, 6, 6, 6, 7, 8, 9 → mediana (5.º dato) = 6.", "Moda: 6. Rango: 9 − 3 = 6."], resultado: "x̄ = 6; Me = 6; Mo = 6; rango = 6." },
    { enunciado: "En una encuesta a 40 personas, 18 prefieren fútbol, 12 baloncesto y 10 tenis. Calcula los ángulos del diagrama de sectores.", pasos: ["Frecuencias relativas: 0,45; 0,30; 0,25.", "Ángulos: 0,45 · 360 = 162°; 0,30 · 360 = 108°; 0,25 · 360 = 90°.", "Comprobación: 162 + 108 + 90 = 360°."], resultado: "162°, 108° y 90°." },
    { enunciado: "Se saca una carta de una baraja española de 40 cartas. Calcula P(oro), P(figura) y P(no as).", pasos: ["Oros: 10 → 10/40 = 1/4.", "Figuras (sota, caballo, rey): 12 → 12/40 = 3/10.", "Ases: 4 → P(as) = 1/10; P(no as) = 9/10."], resultado: "1/4; 3/10; 9/10." },
  ],
  errores: [
    "Calcular la mediana sin ordenar los datos.",
    "Confundir la moda (el valor) con su frecuencia.",
    "Dividir entre el número de valores distintos en lugar de entre el total de datos al calcular la media.",
    "Aplicar Laplace cuando los resultados no son igual de probables.",
    "Creer que tras varias cruces seguidas es «más probable» que salga cara.",
    "Usar un diagrama de sectores para variables que no forman un total.",
  ],
  ejercicios: [
    { q: "Clasifica las variables: deporte favorito, número de hermanos, peso, color de ojos, minutos de recreo.", sol: "Cualitativa, discreta, continua, cualitativa, continua (o discreta si se cuentan minutos enteros)." },
    { q: "Haz la tabla de frecuencias de: 2, 3, 2, 1, 4, 2, 3, 3, 2, 1.", sol: "1: f = 2; 2: f = 4; 3: f = 3; 4: f = 1. N = 10; hᵢ: 0,2; 0,4; 0,3; 0,1." },
    { q: "Calcula la media de la tabla anterior.", sol: "(2 + 8 + 9 + 4) : 10 = 2,3." },
    { q: "Calcula la mediana de 15, 12, 18, 10, 20, 14.", sol: "Ordenados: 10, 12, 14, 15, 18, 20 → (14 + 15) : 2 = 14,5." },
    { q: "Dos jugadores marcaron estos puntos: A: 10, 12, 11, 11; B: 2, 20, 8, 14. Compara media y rango.", sol: "Ambos media 11; rango A = 2 y B = 18: A es más regular." },
    { q: "Escribe el espacio muestral de lanzar dos monedas.", sol: "{CC, CX, XC, XX}." },
    { q: "Con un dado, calcula P(par), P(múltiplo de 3) y P(menor que 7).", sol: "1/2; 1/3; 1 (seguro)." },
    { q: "En una urna hay 4 bolas blancas y 6 negras. P(blanca)? P(no blanca)?", sol: "4/10 = 0,4; 0,6." },
    { q: "Al lanzar dos dados y sumar, ¿cuál es la suma más probable? Calcula su probabilidad.", sol: "7: 6 casos de 36 → 1/6." },
    { q: "Una chincheta cayó 186 veces de punta en 300 lanzamientos. Estima la probabilidad.", sol: "186/300 = 0,62." },
  ],
};
