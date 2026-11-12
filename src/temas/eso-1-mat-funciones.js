// Matemáticas 1º ESO: funciones y gráficas. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, ejes, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Funciones y gráficas",
  minutos: 55,
  objetivos: ["Representar y leer puntos en el plano cartesiano", "Entender una función como relación entre dos variables", "Pasar de un enunciado a una tabla de valores y a una gráfica", "Interpretar gráficas: crecimiento, máximos y mínimos"],
  claves: ["ejes de coordenadas", "coordenadas", "variable independiente", "variable dependiente", "tabla de valores", "creciente"],
  pregunta: {
    texto: "En una aplicación de mapas ves la gráfica de altitud de una ruta en bici. ¿Qué te dice antes de salir?",
    respuesta: "La gráfica relaciona la <b>distancia recorrida</b> (eje horizontal) con la <b>altitud</b> (eje vertical). Donde la línea sube hay cuestas arriba; donde baja, descensos; el punto más alto es el <b>máximo</b>. <mark>Sin pedalear un metro, ya sabes dónde vas a sufrir</mark>.",
  },
  bloques: [
    {
      html: `<h3>El plano cartesiano</h3><p>Para situar puntos en un plano se usan dos rectas numéricas perpendiculares, los <b>ejes de coordenadas</b>:</p><ul><li>El eje horizontal o <b>eje X</b> (de abscisas).</li><li>El eje vertical o <b>eje Y</b> (de ordenadas).</li><li>Se cortan en el <b>origen</b> O (0, 0).</li></ul><p>Cada punto tiene dos <b>coordenadas</b> (x, y): primero se avanza en horizontal y después en vertical. El punto A(3, 2) está 3 a la derecha y 2 hacia arriba. B(−2, 1) está 2 a la izquierda y 1 arriba.</p><p>Los ejes dividen el plano en cuatro <b>cuadrantes</b>, numerados en sentido contrario a las agujas del reloj.</p>`,
      svg: svg("Ejes de coordenadas con el punto A en 3, 2 y el punto B en menos 2, 1", `${ejes(130, 100, 20, [-5, 5], [-3, 3], {})}<circle cx="190" cy="60" r="5" fill="var(--pen)"/><circle cx="90" cy="80" r="5" fill="var(--red)"/><path d="M130 60 H 190 V 100" fill="none" stroke="var(--pen)" stroke-dasharray="3 3" stroke-width="1.5"/>${t(208, 54, "A(3, 2)", { c: "var(--pen)", s: 11, a: "start" })}${t(84, 70, "B(−2, 1)", { c: "var(--red)", s: 11, a: "end" })}${t(122, 114, "O", { s: 10, a: "end" })}`),
      video: vb("funB"),
    },
    {
      html: `<h3>¿Qué es una función?</h3><p>Una <b>función</b> es una relación entre dos variables en la que <mark>a cada valor de la primera le corresponde un único valor de la segunda</mark>.</p><ul><li>La <b>variable independiente</b> (x) es la que elegimos: el tiempo, los kilos, las horas…</li><li>La <b>variable dependiente</b> (y) es la que resulta: la distancia, el precio, la temperatura…</li></ul><p>Ejemplo: el precio de las fotocopias depende del número de copias. Si cada una cuesta 0,10 €, la función es <b>y = 0,1x</b>. Para 30 copias, y = 3 €.</p><p>No es función la relación «persona → número de teléfono» si alguien tiene dos teléfonos, porque a un valor le corresponderían dos.</p>`,
    },
    {
      html: `<h3>Formas de expresar una función</h3><p>Una misma función puede darse de cuatro maneras:</p><ol><li><b>Enunciado</b>: «un taxi cobra 2 € de bajada de bandera y 1 € por km».</li><li><b>Tabla de valores</b>:</li></ol>${tabla(["km (x)", "0", "1", "2", "5", "10"], [["€ (y)", "2", "3", "4", "7", "12"]])}<ol start="3"><li><b>Fórmula</b> o expresión algebraica: <b>y = x + 2</b>.</li><li><b>Gráfica</b>: se dibujan los puntos (0, 2), (1, 3), (2, 4)… y se unen.</li></ol><p>La fórmula es la más completa (sirve para cualquier x); la gráfica es la más visual.</p>`,
    },
    {
      html: `<h3>De la tabla a la gráfica</h3><p>Para dibujar una gráfica:</p><ol><li>Haz una <b>tabla de valores</b> con varios valores de x.</li><li>Elige una <b>escala</b> adecuada para cada eje (no tiene por qué ser la misma).</li><li>Pon nombre y unidades a los ejes.</li><li>Representa los <b>puntos</b> (x, y).</li><li>Si la variable puede tomar cualquier valor (tiempo, distancia), <b>une los puntos</b>. Si solo valores enteros (personas, entradas), déjalos sueltos.</li></ol><p>La gráfica de y = x + 2 es una <b>línea recta</b>. Todas las funciones de la forma y = mx + n son rectas.</p>`,
      svg: svg("Gráfica de la recta y igual a x más 2 a partir de su tabla de valores", `${ejes(40, 150, 18, [0, 10], [0, 7], {})}${[[0, 2], [1, 3], [2, 4], [3, 5], [4, 6]].map(([x, y]) => `<circle cx="${40 + x * 36}" cy="${150 - y * 18}" r="4" fill="var(--pen)"/>`).join("")}<path d="M40 114 L 220 24" stroke="var(--pen)" stroke-width="2.2"/>${t(130, 170, "km (x)", { c: "var(--muted)", s: 10 })}${t(160, 90, "y = x + 2", { c: "var(--pen)", s: 13 })}`),
    },
    {
      html: `<h3>Funciones de proporcionalidad directa</h3><p>Cuando dos magnitudes son directamente proporcionales, la función es de la forma <b>y = m · x</b>. Su gráfica es una <mark>recta que pasa por el origen</mark>.</p><p>El número <b>m</b> es la <b>pendiente</b>: indica cuánto sube y cuando x aumenta 1. Cuanto mayor es m, más inclinada es la recta.</p><ul><li>y = 2x: por cada kilo de patatas a 2 €, la recta sube 2.</li><li>y = 0,5x: sube más despacio.</li><li>y = −x: la recta baja.</li></ul><p>Si la recta no pasa por el origen (y = x + 2), las magnitudes no son proporcionales, aunque crezcan a la vez.</p>`,
    },
    {
      html: `<h3>Interpretar gráficas</h3><p>Leyendo una gráfica de izquierda a derecha podemos saber:</p><ul><li><b>Creciente</b>: la línea sube (al aumentar x, aumenta y).</li><li><b>Decreciente</b>: la línea baja.</li><li><b>Constante</b>: la línea es horizontal.</li><li><b>Máximo</b>: el punto más alto (o un pico). <b>Mínimo</b>: el más bajo (o un valle).</li></ul><p>En la gráfica de la temperatura de un día, la temperatura sube por la mañana, alcanza un máximo hacia las 16 h y baja por la noche. El mínimo suele estar justo antes de amanecer.</p>`,
      svg: svg("Gráfica de la temperatura a lo largo de un día: baja hasta un mínimo al amanecer, sube hasta un máximo por la tarde y vuelve a bajar", `${ejes(30, 150, 9, [0, 24], [0, 13], { rejilla: false })}<path d="M30 105 C 50 115 70 128 84 128 C 120 128 150 40 174 40 C 200 40 220 90 246 100" fill="none" stroke="var(--red)" stroke-width="2.6"/><circle cx="84" cy="128" r="4" fill="var(--pen)"/><circle cx="174" cy="40" r="4" fill="var(--red)"/>${t(84, 146, "mínimo 6 h", { c: "var(--pen)", s: 10 })}${t(174, 30, "máximo 16 h", { c: "var(--red)", s: 10 })}${t(126, 70, "crece", { c: "var(--leaf)", s: 10 })}${t(226, 70, "decrece", { c: "var(--muted)", s: 10 })}${t(238, 166, "hora", { c: "var(--muted)", s: 10, a: "end" })}`),
      video: vb("funB2"),
    },
    {
      html: `<h3>Gráficas de distancia y tiempo</h3><p>Son muy habituales en problemas: el eje X es el <b>tiempo</b> y el eje Y la <b>distancia</b> a un punto de partida.</p><ul><li>Un tramo que <b>sube</b>: me alejo de casa.</li><li>Un tramo <b>horizontal</b>: estoy parado (la distancia no cambia).</li><li>Un tramo que <b>baja</b>: vuelvo hacia casa.</li><li>Cuanto <b>más inclinado</b> el tramo, <b>más rápido</b> me muevo.</li></ul><p>Ejemplo: Lucía sale de casa, camina 20 min hasta la biblioteca a 1,5 km, se queda 60 min y vuelve en bici en 10 min. La gráfica sube suave, se mantiene plana y baja muy inclinada.</p>`,
    },
    {
      html: `<h3>Gráficas en la vida cotidiana y en los medios</h3><p>Las gráficas aparecen en noticias, facturas o apps de salud. Para leerlas bien:</p><ol><li>Lee el <b>título</b> y los <b>nombres de los ejes</b> con sus unidades.</li><li>Fíjate en la <b>escala</b>: si el eje Y no empieza en 0, las subidas parecen mayores de lo que son.</li><li>Busca los <b>tramos</b> que crecen, decrecen o se mantienen.</li><li>Localiza los <b>máximos y mínimos</b>.</li></ol><p>Una gráfica bien hecha cuenta una historia en un vistazo; una mal hecha (o hecha para engañar) puede dar una impresión falsa. ¡Mira siempre los ejes!</p>`,
    },
  ],
  figura: {
    titulo: "Funciones y gráficas en un vistazo",
    svg: filas("Resumen: plano cartesiano con coordenadas x, y; función con variable independiente y dependiente; formas de expresar; recta por el origen; creciente y decreciente; máximos y mínimos", [["Plano", "ejes X e Y · punto (x, y)", "var(--pen)"], ["Función", "a cada x, una sola y", "var(--inf)"], ["Expresiones", "enunciado · tabla · fórmula · gráfica", "var(--sun)"], ["y = m · x", "recta por el origen", "var(--leaf)"], ["Crece / decrece", "sube / baja de izquierda a derecha", "var(--red)"], ["Extremos", "máximo y mínimo", "var(--ink)"]], 200),
  },
  video: vg("funV"),
  quiz: mezcla([
    { q: "El punto (0, 0) se llama…", o: ["origen", "máximo", "eje"], a: 0, e: "Cruce de los ejes." },
    { q: "En el punto (4, −1), la ordenada es…", o: ["−1", "4", "3"], a: 0, e: "La segunda." },
    { q: "El punto (−3, 2) está en el…", o: ["2.º cuadrante", "1.er cuadrante", "4.º cuadrante"], a: 0, e: "x negativa, y positiva." },
    { q: "En «precio según los kilos», la variable independiente es…", o: ["los kilos", "el precio", "la tienda"], a: 0, e: "La que elegimos." },
    { q: "Si y = 3x, para x = 4…", o: ["y = 12", "y = 7", "y = 1"], a: 0, e: "3 · 4." },
    { q: "La gráfica de y = 2x es…", o: ["una recta por el origen", "una curva", "una recta horizontal"], a: 0, e: "Proporcionalidad directa." },
    { q: "Un tramo horizontal en una gráfica distancia-tiempo indica…", o: ["que estoy parado", "que voy rápido", "que vuelvo"], a: 0, e: "La distancia no cambia." },
    { q: "Una función es creciente cuando…", o: ["al aumentar x aumenta y", "al aumentar x disminuye y", "y no cambia"], a: 0, e: "Sube." },
    { q: "El punto más alto de una gráfica es…", o: ["un máximo", "un mínimo", "el origen"], a: 0, e: "Pico." },
    { q: "¿Es función «alumno → fecha de nacimiento»?", o: ["sí", "no", "solo en enero"], a: 0, e: "Cada alumno tiene una." },
  ]),
  examen: mezcla([
    { q: "¿Qué punto pertenece a y = x + 2?", o: ["(3, 5)", "(5, 3)", "(2, 2)"], a: 0, e: "3 + 2 = 5." },
    { q: "En una gráfica distancia-tiempo, el tramo más inclinado indica…", o: ["mayor velocidad", "estar parado", "menor velocidad"], a: 0, e: "Más distancia en menos tiempo." },
    { q: "La recta y = −2x…", o: ["decrece", "crece", "es constante"], a: 0, e: "Pendiente negativa." },
  ]),
  feynman: ["Cómo se sitúa un punto en el plano", "Qué hace falta para que una relación sea función", "Las cuatro formas de expresar una función", "Por qué y = mx pasa por el origen", "Cómo se lee una gráfica de distancia y tiempo"],
  mapa: mapa("FUNCIONES Y GRÁFICAS", "var(--eso)", [
    ["Plano cartesiano", "ejes · coordenadas", "var(--pen)"],
    ["Función", "x independiente · y dependiente", "var(--inf)"],
    ["Tabla y gráfica", "puntos · rectas", "var(--leaf)"],
    ["Interpretar", "crece · decrece · extremos", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Eje X", "Eje horizontal o de abscisas."],
    ["Coordenadas", "(x, y): primero horizontal, luego vertical."],
    ["Función", "Relación en la que a cada x le corresponde una sola y."],
    ["Variable independiente", "La que se elige (x)."],
    ["Tabla de valores", "Pares (x, y) para dibujar la gráfica."],
    ["y = m · x", "Recta que pasa por el origen."],
    ["Creciente", "La gráfica sube de izquierda a derecha."],
    ["Máximo", "El punto más alto de la gráfica."],
  ],
  familias: ["Buscad gráficas en el periódico o en apps (tiempo, pasos) y explicadlas en voz alta.", "Jugad a hundir la flota con coordenadas en una cuadrícula.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Coordenadas cartesianas, concepto de función, tablas, gráficas y expresiones algebraicas sencillas, interpretación de gráficas (RD 217/2022, Matemáticas, sentido algebraico y estocástico).",
    ideas: ["Hundir la flota en el plano cartesiano.", "Contar una historia y que el grupo dibuje la gráfica distancia-tiempo.", "Registrar la temperatura del aula cada hora y representarla."],
  },
  fuentes: [RD, { t: "GeoGebra: funciones", url: "https://www.geogebra.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Un gimnasio cobra 10 € de matrícula y 25 € al mes. Escribe la fórmula, haz una tabla y di cuánto cuesta un año.", pasos: ["x = meses, y = euros: y = 25x + 10.", "Tabla: 1 → 35; 2 → 60; 3 → 85.", "Para 12 meses: 25 · 12 + 10 = 310 €."], resultado: "y = 25x + 10; un año, 310 €." },
    { enunciado: "Representa los puntos A(2, 3), B(−1, 4), C(−3, −2) y D(4, −1) y di en qué cuadrante está cada uno.", pasos: ["A: x > 0, y > 0 → 1.er cuadrante.", "B: x < 0, y > 0 → 2.º; C: x < 0, y < 0 → 3.º.", "D: x > 0, y < 0 → 4.º."], resultado: "1.º, 2.º, 3.º y 4.º." },
    { enunciado: "Un ciclista va de 0 a 30 km en 1 h, para 30 min y vuelve en 1 h 30 min. Describe la gráfica.", pasos: ["0 → 1 h: tramo creciente de 0 a 30 km.", "1 h → 1,5 h: tramo horizontal (parado).", "1,5 h → 3 h: decreciente hasta 0 km, menos inclinado (va más despacio)."], resultado: "Sube, se mantiene y baja más suave." },
  ],
  errores: [
    "Cambiar el orden de las coordenadas: (2, 5) no es lo mismo que (5, 2).",
    "No poner nombre ni unidades a los ejes.",
    "Unir puntos cuando la variable solo toma valores enteros (personas, entradas).",
    "Leer un tramo horizontal de una gráfica distancia-tiempo como «avanzar».",
    "Fiarse de una gráfica sin mirar dónde empieza la escala del eje Y.",
  ],
  ejercicios: [
    { q: "Escribe las coordenadas de un punto del eje X y de otro del eje Y.", sol: "Por ejemplo (5, 0) y (0, −3)." },
    { q: "¿En qué cuadrante están (−4, −4), (6, −2) y (−1, 7)?", sol: "3.º, 4.º y 2.º." },
    { q: "Las entradas de cine cuestan 7 €. Haz una tabla para 1, 2, 3, 4 y 5 entradas y escribe la fórmula.", sol: "7, 14, 21, 28, 35; y = 7x." },
    { q: "¿Deben unirse los puntos de la gráfica anterior? ¿Por qué?", sol: "No: no se pueden comprar 2,5 entradas." },
    { q: "Completa la tabla de y = 2x − 1 para x = −1, 0, 1, 2, 3.", sol: "−3, −1, 1, 3, 5." },
    { q: "¿Pasa la recta y = 3x + 1 por el origen? ¿Es de proporcionalidad?", sol: "No: para x = 0, y = 1. No es de proporcionalidad directa." },
    { q: "¿Pertenece el punto (2, 8) a y = 4x? ¿Y (3, 10)?", sol: "Sí (4 · 2 = 8); no (4 · 3 = 12)." },
    { q: "Describe una gráfica de la altura de un globo que sube, se queda quieto y explota.", sol: "Creciente, constante y cae bruscamente (decreciente muy inclinado)." },
    { q: "La temperatura a las 8 h es 10 °C, a las 14 h 22 °C y a las 22 h 12 °C. ¿Dónde estará aproximadamente el máximo?", sol: "Hacia las 14-16 h." },
    { q: "Inventa una historia para una gráfica distancia-tiempo con dos tramos horizontales.", sol: "Respuesta abierta: por ejemplo, ir al colegio parando en el quiosco y en casa de un amigo." },
  ],
};
