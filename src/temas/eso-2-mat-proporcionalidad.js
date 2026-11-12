// Matemáticas 2º ESO: proporcionalidad y porcentajes. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, ejes, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Proporcionalidad y porcentajes",
  minutos: 60,
  objetivos: ["Reconocer razones y proporciones", "Distinguir magnitudes directa e inversamente proporcionales", "Resolver problemas con la regla de tres y la reducción a la unidad", "Calcular porcentajes, aumentos y disminuciones porcentuales"],
  claves: ["razón", "proporción", "constante de proporcionalidad", "regla de tres", "porcentaje", "índice de variación"],
  pregunta: {
    texto: "Unas zapatillas cuestan 80 €. Primero suben un 10 % y luego bajan un 10 %. ¿Vuelven a costar 80 €?",
    respuesta: "No. Tras subir valen 80 · 1,1 = 88 €, y al bajar un 10 % de 88: 88 · 0,9 = <mark>79,20 €</mark>. El segundo 10 % se calcula sobre un precio mayor. Los porcentajes siempre se aplican sobre la cantidad que hay en ese momento.",
  },
  bloques: [
    {
      html: `<h3>Razones y proporciones</h3><p>Una <b>razón</b> es el cociente entre dos cantidades: si en una clase hay 12 chicas y 15 chicos, la razón chicas/chicos es <b>12/15 = 4/5</b>, es decir, por cada 4 chicas hay 5 chicos.</p><p>Una <b>proporción</b> es una igualdad entre dos razones: <mark>a/b = c/d</mark>, que se lee «a es a b como c es a d». En toda proporción, el producto de los extremos es igual al de los medios: <b>a · d = b · c</b>.</p><p>Eso permite calcular un término desconocido (el <b>cuarto proporcional</b>): 3/5 = x/20 → x = 3 · 20 : 5 = 12.</p>`,
    },
    {
      html: `<h3>Proporcionalidad directa</h3><p>Dos magnitudes son <b>directamente proporcionales</b> si al <mark>multiplicar una por un número, la otra queda multiplicada por el mismo número</mark> (doble → doble, mitad → mitad). Su <b>cociente es constante</b>: es la constante de proporcionalidad.</p>${tabla(["Kilos de naranjas", "1", "2", "3", "5"], [["Precio (€)", "1,5", "3", "4,5", "7,5"]])}<p>Aquí precio : kilos = 1,5 €/kg siempre. Si se representan, los puntos quedan sobre una <b>recta que pasa por el origen</b>.</p><p>Ejemplos: litros de gasolina y precio, horas trabajadas y sueldo, distancia en un mapa y distancia real.</p>`,
      svg: svg("Gráfica de proporcionalidad directa: kilos y precio forman una recta que pasa por el origen", `${ejes(30, 150, 36, [0, 5], [0, 3.5])}<path d="M30 150 L 210 ${150 - 2.5 * 36}" stroke="var(--pen)" stroke-width="3"/>${[1, 2, 3, 4, 5].map((k) => `<circle cx="${30 + k * 36}" cy="${150 - 0.5 * k * 36}" r="4.5" fill="var(--pen)"/>`).join("")}${t(140, 30, "precio = 1,5 · kilos", { c: "var(--pen)", s: 12 })}${t(140, 172, "kilos", { c: "var(--muted)", s: 10 })}`),
      video: { id: "nP9SwAqhVTI", titulo: "Proporcionalidad directa", canal: "Daniel Carreón", vistas: 6895756 },
    },
    {
      html: `<h3>Proporcionalidad inversa</h3><p>Dos magnitudes son <b>inversamente proporcionales</b> si al <mark>multiplicar una por un número, la otra queda dividida por ese número</mark> (doble → mitad). Su <b>producto es constante</b>.</p>${tabla(["Pintores", "1", "2", "3", "6"], [["Días", "12", "6", "4", "2"]])}<p>Aquí pintores · días = 12 siempre. La gráfica es una curva llamada <b>hipérbola</b>.</p><p>Ejemplos: velocidad y tiempo de un viaje, número de personas y lo que toca a cada una al repartir, grifos y tiempo de llenado.</p><p>¡Cuidado! No toda relación es proporcional: la edad y la altura de una persona aumentan juntas, pero no en proporción.</p>`,
      svg: svg("Gráfica de proporcionalidad inversa: más pintores, menos días; la curva es una hipérbola", `${ejes(30, 150, 18, [0, 12], [0, 7], { rejilla: false })}<path d="${[...Array(23)].map((_, i) => { const x = 1.8 + i * 0.45; return `${i ? "L" : "M"}${(30 + x * 18).toFixed(1)} ${(150 - (12 / x) * 18).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--red)" stroke-width="3"/>${[[2, 6], [3, 4], [4, 3], [6, 2], [12, 1]].map(([x, y]) => `<circle cx="${30 + x * 18}" cy="${150 - y * 18}" r="4.5" fill="var(--red)"/>`).join("")}${t(160, 40, "pintores · días = 12", { c: "var(--red)", s: 12 })}${t(140, 172, "pintores", { c: "var(--muted)", s: 10 })}`),
      video: { id: "iDisByLSTS0", titulo: "Proporcionalidad inversa", canal: "Daniel Carreón", vistas: 3976771 },
    },
    {
      html: `<h3>La regla de tres simple</h3><p>Es un método para hallar un valor desconocido cuando hay dos magnitudes proporcionales. Se colocan los datos en dos filas y se decide si la relación es <b>directa</b> o <b>inversa</b>.</p><p><b>Directa</b>: si 4 cuadernos cuestan 6 €, ¿cuánto cuestan 10?</p><p>4 cuadernos → 6 € ; 10 cuadernos → x. Como es directa: <mark>x = 10 · 6 : 4 = 15 €</mark> (se multiplica en cruz).</p><p><b>Inversa</b>: 3 grifos llenan un depósito en 8 h; ¿cuánto tardan 4 grifos?</p><p>Como es inversa, se multiplica en línea: <mark>x = 3 · 8 : 4 = 6 h</mark>.</p><p>También se puede hacer por <b>reducción a la unidad</b>: 1 cuaderno cuesta 6 : 4 = 1,5 €; 10 cuadernos, 15 €. 1 grifo tardaría 3 · 8 = 24 h; 4 grifos, 24 : 4 = 6 h.</p>`,
    },
    {
      html: `<h3>Repartos proporcionales</h3><p>Se reparte una cantidad en partes <b>directamente proporcionales</b> a unos números: se suman los números, se divide el total entre la suma y se multiplica por cada número.</p><p>Ejemplo: tres amigas ponen 2, 3 y 5 € para un boleto que gana 200 €. Suma 10; 200 : 10 = 20 € por cada euro puesto. Les tocan <b>40, 60 y 100 €</b>.</p><p>En un reparto <b>inversamente proporcional</b> recibe más quien tiene un número menor (por ejemplo, un premio repartido según las faltas de asistencia): se reparte de forma directa a los inversos 1/a, 1/b, 1/c.</p>`,
    },
    {
      html: `<h3>Porcentajes</h3><p>Un <b>porcentaje</b> es una razón con denominador 100: <mark>a % = a/100</mark>. El 25 % = 25/100 = 1/4 = 0,25.</p><ul><li><b>Calcular el a % de N</b>: N · a : 100. El 15 % de 60 = 60 · 0,15 = 9.</li><li><b>Qué porcentaje es una parte</b>: parte : total · 100. 18 aprobados de 24 son 18 : 24 · 100 = 75 %.</li><li><b>El total a partir de una parte</b>: si el 30 % son 12, el total es 12 : 0,30 = 40.</li></ul><p>Algunos porcentajes fáciles: 50 % = mitad, 25 % = cuarta parte, 10 % = dividir entre 10, 1 % = dividir entre 100.</p>`,
      svg: svg("Cuadrícula de 100 casillas con 25 coloreadas: el 25 por ciento es un cuarto", `${[...Array(100)].map((_, i) => `<rect x="${60 + (i % 10) * 14}" y="${14 + Math.floor(i / 10) * 14}" width="13" height="13" fill="${i % 10 < 5 && Math.floor(i / 10) < 5 ? "var(--leaf)" : "var(--card)"}" fill-opacity="${i % 10 < 5 && Math.floor(i / 10) < 5 ? 0.55 : 1}" stroke="var(--line)"/>`).join("")}${t(130, 172, "25 de 100 = 25 % = 1/4", { s: 13 })}`),
      video: { id: "RE3XoDORMys", titulo: "Cómo calcular un porcentaje", canal: "Daniel Carreón", vistas: 14511594 },
    },
    {
      html: `<h3>Aumentos y disminuciones porcentuales</h3><p>Para aplicar una subida o una bajada de un solo golpe se usa el <b>índice de variación</b>:</p><ul><li><b>Aumento del a %</b>: se multiplica por <mark>1 + a/100</mark>. Un precio de 50 € con un 21 % de IVA: 50 · 1,21 = 60,50 €.</li><li><b>Disminución del a %</b>: se multiplica por <mark>1 − a/100</mark>. Una rebaja del 30 % sobre 40 €: 40 · 0,70 = 28 €.</li></ul><p>Para encontrar el precio <b>inicial</b> se divide: si tras una rebaja del 20 % pagas 64 €, el precio era 64 : 0,8 = 80 €.</p><p>Varias variaciones seguidas se encadenan multiplicando sus índices: +10 % y −10 % → 1,1 · 0,9 = 0,99, una bajada del 1 %.</p>`,
    },
    {
      html: `<h3>Proporcionalidad en la vida real</h3><ul><li><b>Escalas</b>: en un mapa 1 : 50.000, 1 cm son 50.000 cm = 500 m. Es proporcionalidad directa.</li><li><b>Recetas</b>: si para 4 personas hacen falta 300 g de arroz, para 6 hacen falta 450 g.</li><li><b>Velocidad</b>: a 90 km/h se tarda 2 h en hacer 180 km; a 120 km/h, 1,5 h (inversa).</li><li><b>Interés simple</b>: un banco paga un 3 % anual por 2.000 € ahorrados: 60 € al año.</li><li><b>Etiquetas</b>: un yogur con un 4 % de grasa contiene 4 g por cada 100 g.</li></ul><p>Antes de calcular, pregúntate siempre: «si una magnitud se duplica, ¿qué le pasa a la otra?».</p>`,
    },
  ],
  figura: {
    titulo: "Proporcionalidad en un vistazo",
    svg: filas("Resumen: proporción con productos cruzados; directa con cociente constante; inversa con producto constante; porcentaje; aumento por 1 más a/100; disminución por 1 menos a/100", [["Proporción", "a/b = c/d → a · d = b · c", "var(--pen)"], ["Directa", "doble → doble · cociente constante", "var(--leaf)"], ["Inversa", "doble → mitad · producto constante", "var(--red)"], ["a % de N", "N · a : 100", "var(--sun)"], ["Aumento", "× (1 + a/100)", "var(--inf)"], ["Disminución", "× (1 − a/100)", "var(--ink)"]], 200),
  },
  video: { id: "Xphb-tzJj24", titulo: "Regla de tres simple", canal: "Daniel Carreón", vistas: 3978927, megusta: 0, busqueda: "proporcionalidad directa e inversa regla de tres" },
  quiz: mezcla([
    { q: "En 2/5 = x/30, x vale…", o: ["12", "75", "6"], a: 0, e: "2 · 30 : 5." },
    { q: "Número de entradas y precio total son magnitudes…", o: ["directamente proporcionales", "inversamente proporcionales", "no proporcionales"], a: 0, e: "Doble → doble." },
    { q: "Velocidad y tiempo para un mismo recorrido son…", o: ["inversamente proporcionales", "directamente proporcionales", "iguales"], a: 0, e: "Más rápido → menos tiempo." },
    { q: "En la proporcionalidad inversa es constante…", o: ["el producto", "el cociente", "la suma"], a: 0, e: "x · y = k." },
    { q: "Si 3 kg cuestan 6 €, 7 kg cuestan…", o: ["14 €", "21 €", "2 €"], a: 0, e: "2 €/kg." },
    { q: "4 obreros tardan 9 días. 6 obreros tardan…", o: ["6 días", "13,5 días", "3 días"], a: 0, e: "36 : 6." },
    { q: "El 20 % de 150 es…", o: ["30", "20", "7,5"], a: 0, e: "150 · 0,2." },
    { q: "Para subir un 15 % se multiplica por…", o: ["1,15", "0,85", "15"], a: 0, e: "1 + 0,15." },
    { q: "Para rebajar un 40 % se multiplica por…", o: ["0,6", "0,4", "1,4"], a: 0, e: "1 − 0,4." },
    { q: "9 de 36 alumnos son el…", o: ["25 %", "9 %", "36 %"], a: 0, e: "9 : 36 · 100." },
  ]),
  examen: mezcla([
    { q: "Tras un 25 % de descuento pagas 45 €. El precio inicial era…", o: ["60 €", "56,25 €", "70 €"], a: 0, e: "45 : 0,75." },
    { q: "Repartir 90 € de forma directamente proporcional a 1, 2 y 6 da…", o: ["10, 20 y 60 €", "30, 30 y 30 €", "15, 30 y 45 €"], a: 0, e: "90 : 9 = 10." },
    { q: "Una subida del 20 % y después otra del 10 % equivalen a una subida del…", o: ["32 %", "30 %", "2 %"], a: 0, e: "1,2 · 1,1 = 1,32." },
  ]),
  feynman: ["Qué es una proporción y cómo se calcula un término", "Cómo distinguir proporcionalidad directa e inversa", "Cómo se plantea una regla de tres", "Cómo se calcula un porcentaje y su total", "Por qué +10 % y −10 % no se anulan"],
  mapa: mapa("PROPORCIONALIDAD", "var(--eso)", [
    ["Directa", "cociente constante", "var(--leaf)"],
    ["Inversa", "producto constante", "var(--red)"],
    ["Regla de tres", "en cruz · en línea", "var(--pen)"],
    ["Porcentajes", "1 ± a/100", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Razón", "Cociente entre dos cantidades."],
    ["Proporción", "Igualdad de dos razones: a · d = b · c."],
    ["Directa", "Doble → doble. Cociente constante."],
    ["Inversa", "Doble → mitad. Producto constante."],
    ["Reducción a la unidad", "Calcular primero el valor para 1."],
    ["Porcentaje", "a % = a/100."],
    ["Aumento del a %", "Multiplicar por 1 + a/100."],
    ["Disminución del a %", "Multiplicar por 1 − a/100."],
  ],
  familias: ["En rebajas, calculad juntos el precio final antes de llegar a caja.", "Duplicad o reducid una receta para otro número de personas.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Razones y proporciones; proporcionalidad directa e inversa; regla de tres y reducción a la unidad; repartos proporcionales; porcentajes, aumentos y disminuciones (RD 217/2022, Matemáticas, sentido numérico y algebraico).",
    ideas: ["Folletos de supermercado para calcular descuentos reales.", "Tablas y gráficas con datos de la clase para decidir si hay proporcionalidad.", "Mapas con distintas escalas."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): proporcionalidad", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Un coche a 80 km/h tarda 3 h en un viaje. ¿Cuánto tardará a 120 km/h?", pasos: ["Más velocidad, menos tiempo: inversa.", "El producto es constante: 80 · 3 = 240 km.", "t = 240 : 120 = 2 h."], resultado: "2 horas." },
    { enunciado: "Un móvil cuesta 250 € sin IVA. ¿Cuánto cuesta con un 21 % de IVA y luego con un 15 % de descuento?", pasos: ["Con IVA: 250 · 1,21 = 302,50 €.", "Con descuento: 302,50 · 0,85 = 257,125 €.", "Redondeado: 257,13 €."], resultado: "257,13 €" },
    { enunciado: "En un pueblo había 1.200 habitantes y ahora hay 1.380. ¿Qué porcentaje ha aumentado?", pasos: ["Aumento: 1.380 − 1.200 = 180.", "180 : 1.200 = 0,15.", "0,15 · 100 = 15 %."], resultado: "Ha aumentado un 15 %." },
  ],
  errores: [
    "Aplicar una regla de tres directa a magnitudes inversas.",
    "Pensar que dos magnitudes que crecen a la vez son siempre proporcionales.",
    "Calcular el precio inicial sumando el porcentaje al precio rebajado.",
    "Sumar porcentajes encadenados (+20 % y +10 % no es +30 %).",
    "Confundir el 5 % (0,05) con 0,5.",
  ],
  ejercicios: [
    { q: "Calcula x: 6/x = 9/12.", sol: "x = 6 · 12 : 9 = 8." },
    { q: "¿Son proporcionales? Lado de un cuadrado y su perímetro; lado y área.", sol: "Perímetro sí (directa, 4); área no (doble lado → cuádruple área)." },
    { q: "5 entradas cuestan 37,50 €. ¿Cuánto cuestan 8?", sol: "7,50 € cada una → 60 €." },
    { q: "Con 12 grifos se llena una piscina en 10 h. ¿Cuánto tardan 8 grifos?", sol: "Inversa: 120 : 8 = 15 h." },
    { q: "Reparte 1.400 € en partes directamente proporcionales a 3, 4 y 7.", sol: "1.400 : 14 = 100 → 300, 400 y 700 €." },
    { q: "Calcula el 35 % de 240 y el 2 % de 1.500.", sol: "84 y 30." },
    { q: "En un examen aprueban 21 de 28 alumnos. ¿Qué porcentaje aprueba?", sol: "75 %." },
    { q: "Un abrigo de 120 € se rebaja un 35 %. ¿Cuánto cuesta ahora?", sol: "120 · 0,65 = 78 €." },
    { q: "Tras subir un 8 %, el alquiler es de 648 €. ¿Cuánto era antes?", sol: "648 : 1,08 = 600 €." },
    { q: "En un mapa 1 : 200.000, dos pueblos están a 4,5 cm. ¿Qué distancia real los separa?", sol: "900.000 cm = 9 km." },
  ],
};
