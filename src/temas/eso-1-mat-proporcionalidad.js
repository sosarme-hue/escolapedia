// Matemáticas 1º ESO: proporcionalidad y porcentajes. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, ejes, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Proporcionalidad y porcentajes",
  minutos: 60,
  objetivos: ["Reconocer razones y proporciones y calcular el término desconocido", "Identificar magnitudes directamente e inversamente proporcionales", "Resolver problemas con la reducción a la unidad y la regla de tres", "Calcular porcentajes, aumentos y descuentos"],
  claves: ["razón", "proporción", "constante de proporcionalidad", "regla de tres", "porcentaje", "descuento"],
  pregunta: {
    texto: "Unas zapatillas de 60 € tienen un 25 % de descuento. Otras de 50 € tienen 10 € de rebaja. ¿Cuáles salen más baratas?",
    respuesta: "El 25 % de 60 € es 60 · 25 : 100 = 15 €, así que las primeras cuestan 60 − 15 = <b>45 €</b>. Las segundas cuestan 50 − 10 = <b>40 €</b>. <mark>Salen más baratas las segundas</mark>, aunque el «25 %» parecía mejor oferta.",
  },
  bloques: [
    {
      html: `<h3>Razón y proporción</h3><p>Una <b>razón</b> es el cociente entre dos cantidades: a/b. Si en una clase hay 12 chicas y 15 chicos, la razón chicas/chicos es 12/15 = 4/5: <b>por cada 4 chicas hay 5 chicos</b>.</p><p>Una <b>proporción</b> es una igualdad entre dos razones: <mark>a/b = c/d</mark>. Se lee «a es a b como c es a d». En toda proporción se cumple que el producto de los extremos es igual al de los medios: a · d = b · c.</p><p>Esto permite calcular un término desconocido: 3/5 = x/20 → 3 · 20 = 5 · x → x = 60 : 5 = <b>12</b>.</p>`,
    },
    {
      html: `<h3>Magnitudes directamente proporcionales</h3><p>Dos magnitudes son <b>directamente proporcionales</b> si al <b>multiplicar</b> una por un número, la otra queda <b>multiplicada por el mismo número</b> (el doble, el doble; la mitad, la mitad).</p>${tabla(["Kg de naranjas", "1", "2", "3", "5"], [["Precio (€)", "1,5", "3", "4,5", "7,5"]])}<p>El cociente entre ellas es siempre el mismo: 1,5/1 = 3/2 = 4,5/3 = 1,5. Es la <b>constante de proporcionalidad</b> (aquí, el precio de 1 kg).</p><p>Cuidado: no todo lo que «crece a la vez» es proporcional. La edad y la altura de una persona crecen juntas, pero a doble edad no corresponde doble altura.</p>`,
      svg: svg("Gráfica del precio frente a los kilos: los puntos forman una recta que pasa por el origen", `${ejes(40, 150, 24, [0, 8], [0, 5], {})}${[[1, 1.5], [2, 3], [3, 4.5]].map(([x, y]) => `<circle cx="${40 + x * 24 * 2}" cy="${150 - y * 24}" r="4.5" fill="var(--pen)"/>`).join("")}<path d="M40 150 L 200 30" stroke="var(--pen)" stroke-width="2" stroke-dasharray="5 3"/>${t(130, 22, "doble de kg, doble de €", { c: "var(--pen)", s: 11 })}${t(222, 166, "kg", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>Reducción a la unidad y regla de tres directa</h3><p>Problema: 4 cuadernos cuestan 6 €. ¿Cuánto cuestan 10?</p><p><b>Reducción a la unidad</b>: primero calculamos cuánto cuesta 1 cuaderno: 6 : 4 = 1,5 €. Después, 10 cuadernos: 10 · 1,5 = <b>15 €</b>.</p><p><b>Regla de tres directa</b>: se colocan los datos y se multiplica en cruz:</p><p style="text-align:center">4 cuadernos → 6 €<br>10 cuadernos → x &nbsp;&nbsp; ⇒ &nbsp;&nbsp; <mark>x = 10 · 6 : 4 = 15 €</mark></p><p>Antes de usarla, asegúrate de que las magnitudes son <b>directamente</b> proporcionales: más cuadernos, más euros.</p>`,
      video: vb("proB"),
    },
    {
      html: `<h3>Magnitudes inversamente proporcionales</h3><p>Son <b>inversamente proporcionales</b> si al <b>multiplicar</b> una por un número, la otra queda <b>dividida</b> por ese número (el doble, la mitad).</p>${tabla(["Pintores", "1", "2", "3", "6"], [["Días", "12", "6", "4", "2"]])}<p>Aquí lo que se mantiene es el <b>producto</b>: 1 · 12 = 2 · 6 = 3 · 4 = 12 (el trabajo total).</p><p><b>Regla de tres inversa</b>: 3 pintores tardan 8 días; ¿cuánto tardan 4? Como el producto es constante: 3 · 8 = 4 · x → <mark>x = 24 : 4 = 6 días</mark>. Más pintores, menos días.</p>`,
      svg: svg("Gráfica de días frente a pintores: una curva que baja, al doble de pintores la mitad de días", `${ejes(36, 150, 18, [0, 11], [0, 7], { rejilla: false })}<path d="M${36 + 1 * 18} ${150 - 6 * 18} ${[1.2, 1.5, 2, 3, 4, 6, 10.5].map((x) => `L ${(36 + x * 18).toFixed(1)} ${(150 - (6 / x) * 18).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--red)" stroke-width="2.5"/>${[[1, 6], [2, 3], [3, 2], [6, 1]].map(([x, y]) => `<circle cx="${36 + x * 18}" cy="${150 - y * 18}" r="4" fill="var(--red)"/>`).join("")}${t(150, 40, "doble → mitad", { c: "var(--red)", s: 12 })}${t(210, 166, "pintores", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>¿Qué es un porcentaje?</h3><p>Un <b>porcentaje</b> o tanto por ciento es una razón con denominador <b>100</b>. El 30 % significa «30 de cada 100» = 30/100 = 0,30.</p>${tabla(["Porcentaje", "Fracción", "Decimal"], [["50 %", "1/2", "0,5"], ["25 %", "1/4", "0,25"], ["10 %", "1/10", "0,1"], ["75 %", "3/4", "0,75"], ["100 %", "1", "1"]])}<p>Los porcentajes permiten <b>comparar</b> fácilmente: si en un examen aciertas 18 de 24 y en otro 21 de 30, ¿cuál fue mejor? 18/24 = 75 % y 21/30 = 70 %. El primero.</p>`,
    },
    {
      html: `<h3>Calcular el porcentaje de una cantidad</h3><p>Para calcular el <b>a % de N</b> se multiplica por a y se divide entre 100:</p><p style="text-align:center"><b>a % de N = N · a : 100</b></p><p>20 % de 85 € = 85 · 20 : 100 = <b>17 €</b>.</p><p>Trucos de cálculo mental:</p><ul><li>10 %: dividir entre 10 (el 10 % de 340 es 34).</li><li>50 %: la mitad; 25 %: la cuarta parte.</li><li>5 %: la mitad del 10 %.</li></ul><p>Al revés, para saber <b>qué porcentaje</b> es una parte del total: parte : total · 100. 9 de 36 alumnos → 9 : 36 · 100 = 25 %.</p>`,
      video: vb("proB2"),
    },
    {
      html: `<h3>Aumentos y descuentos</h3><p><b>Descuento</b>: se calcula el porcentaje y se <b>resta</b>. Una chaqueta de 80 € con un 15 % de descuento: 80 · 15 : 100 = 12 € → 80 − 12 = <b>68 €</b>.</p><p>Más rápido: si te descuentan un 15 %, pagas el <mark>85 %</mark> → 80 · 0,85 = 68 €.</p><p><b>Aumento</b>: se calcula el porcentaje y se <b>suma</b>. El IVA del 21 % sobre 50 € → 50 · 21 : 100 = 10,50 € → <b>60,50 €</b>. O directamente: 50 · 1,21 = 60,50 €.</p><p>Ojo: subir un 10 % y luego bajar un 10 % <b>no</b> deja el precio igual. 100 → 110 → 99.</p>`,
    },
    {
      html: `<h3>Proporcionalidad en la vida diaria</h3><ul><li><b>Escalas de mapas</b>: 1 : 50 000 significa que 1 cm del mapa son 50 000 cm reales (500 m).</li><li><b>Recetas</b>: si para 4 personas se usan 300 g de pasta, para 6 se usan 450 g.</li><li><b>Velocidad</b>: a velocidad constante, la distancia es proporcional al tiempo.</li><li><b>Repartos proporcionales</b>: tres amigos ponen 10, 20 y 30 € para un boleto y ganan 120 €. Se reparte en proporción: 20 €, 40 € y 60 €.</li></ul><p>Pregunta siempre: ¿si una se duplica, la otra se duplica (directa), se divide a la mitad (inversa) o ninguna de las dos?</p>`,
    },
  ],
  figura: {
    titulo: "Proporcionalidad en un vistazo",
    svg: filas("Resumen: razón y proporción; directa con cociente constante; inversa con producto constante; regla de tres; porcentaje sobre 100; descuentos y aumentos", [["Proporción", "a/b = c/d → a · d = b · c", "var(--pen)"], ["Directa", "doble → doble · cociente fijo", "var(--leaf)"], ["Inversa", "doble → mitad · producto fijo", "var(--red)"], ["Regla de tres", "reducir a la unidad", "var(--inf)"], ["a % de N", "N · a : 100", "var(--sun)"], ["Descuento", "pagar el (100 − a) %", "var(--ink)"]], 200),
  },
  video: vg("proV"),
  quiz: mezcla([
    { q: "¿Son proporción 2/3 y 8/12?", o: ["sí", "no", "solo si se suman"], a: 0, e: "2 · 12 = 3 · 8." },
    { q: "En 4/x = 12/15, x =", o: ["5", "3", "45"], a: 0, e: "4 · 15 : 12." },
    { q: "Si 3 kg cuestan 6 €, 7 kg cuestan…", o: ["14 €", "21 €", "10 €"], a: 0, e: "2 € el kilo." },
    { q: "Velocidad y tiempo para un mismo recorrido son…", o: ["inversamente proporcionales", "directamente proporcionales", "no proporcionales"], a: 0, e: "Más rápido, menos tiempo." },
    { q: "4 grifos llenan un depósito en 6 h. 8 grifos tardan…", o: ["3 h", "12 h", "6 h"], a: 0, e: "Inversa." },
    { q: "El 10 % de 450 es…", o: ["45", "4,5", "4 500"], a: 0, e: "Entre 10." },
    { q: "El 25 % equivale a…", o: ["1/4", "1/25", "2/5"], a: 0, e: "25/100." },
    { q: "Con un 20 % de descuento sobre 40 € pagas…", o: ["32 €", "20 €", "38 €"], a: 0, e: "40 · 0,8." },
    { q: "12 de 48 es el…", o: ["25 %", "12 %", "4 %"], a: 0, e: "12 : 48 · 100." },
    { q: "Escala 1 : 100 000. 3 cm en el mapa son…", o: ["3 km", "300 m", "30 km"], a: 0, e: "300 000 cm." },
  ]),
  examen: mezcla([
    { q: "100 € suben un 10 % y luego bajan un 10 %. Quedan…", o: ["99 €", "100 €", "101 €"], a: 0, e: "110 · 0,9." },
    { q: "Un precio con IVA del 21 % es 121 €. Sin IVA era…", o: ["100 €", "95,59 €", "121 €"], a: 0, e: "121 : 1,21." },
    { q: "Se reparten 90 € en proporción a 2 y 3. Al de 3 le tocan…", o: ["54 €", "36 €", "45 €"], a: 0, e: "90 : 5 · 3." },
  ]),
  feynman: ["Qué es una proporción", "Cómo distinguir proporcionalidad directa e inversa", "Por qué funciona la reducción a la unidad", "Qué significa el 30 %", "Cómo se calcula un descuento en un solo paso"],
  mapa: mapa("PROPORCIONALIDAD", "var(--eso)", [
    ["Razón y proporción", "a · d = b · c", "var(--pen)"],
    ["Directa", "regla de tres directa", "var(--leaf)"],
    ["Inversa", "producto constante", "var(--red)"],
    ["Porcentajes", "aumentos · descuentos", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Razón", "Cociente entre dos cantidades."],
    ["Proporción", "Igualdad de dos razones: a · d = b · c."],
    ["Directa", "Doble → doble; cociente constante."],
    ["Inversa", "Doble → mitad; producto constante."],
    ["Reducción a la unidad", "Calcular primero el valor de 1."],
    ["a % de N", "N · a : 100."],
    ["Descuento del a %", "Se paga el (100 − a) %."],
    ["Escala 1 : n", "1 unidad del plano son n reales."],
  ],
  familias: ["En rebajas, calculad juntos el precio final antes de llegar a caja.", "Duplicad o reducid una receta y ajustad los ingredientes.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Razones y proporciones, magnitudes directa e inversamente proporcionales, reducción a la unidad, porcentajes, aumentos y disminuciones porcentuales (RD 217/2022, Matemáticas, sentido numérico y algebraico).",
    ideas: ["Folletos de rebajas para comparar ofertas.", "Mapas con escala de la localidad.", "Tablas de valores para decidir si hay proporcionalidad."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): proporcionalidad", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Un coche gasta 6 L de gasolina cada 100 km. ¿Cuánto gasta en 350 km?", pasos: ["Más km, más gasolina: directa.", "1 km → 6 : 100 = 0,06 L.", "350 km → 350 · 0,06 = 21 L."], resultado: "21 litros." },
    { enunciado: "Con 5 grifos un estanque se llena en 12 horas. ¿Cuánto tardarán 3 grifos?", pasos: ["Menos grifos, más horas: inversa.", "Producto constante: 5 · 12 = 60.", "3 · x = 60 → x = 20."], resultado: "20 horas." },
    { enunciado: "Un móvil de 240 € se rebaja un 15 %. ¿Cuánto cuesta?", pasos: ["Se paga el 85 %.", "240 · 0,85 = 204.", "Comprobación: descuento 240 · 0,15 = 36 €; 240 − 36 = 204."], resultado: "204 €." },
  ],
  errores: [
    "Aplicar una regla de tres directa a magnitudes inversamente proporcionales.",
    "Pensar que dos magnitudes son proporcionales solo porque crecen a la vez.",
    "Calcular el descuento y olvidarse de restarlo al precio.",
    "Creer que un aumento y una bajada del mismo porcentaje se anulan.",
    "Confundir el 5 % con dividir entre 5.",
  ],
  ejercicios: [
    { q: "Calcula x: 6/9 = 10/x.", sol: "x = 9 · 10 : 6 = 15." },
    { q: "¿Son directamente proporcionales el número de entradas y su precio total si cada entrada cuesta 8 €? Haz una tabla.", sol: "Sí: 1 → 8, 2 → 16, 3 → 24; cociente constante 8." },
    { q: "Si 5 bolígrafos cuestan 3,50 €, ¿cuánto cuestan 12?", sol: "1 → 0,70 €; 12 → 8,40 €." },
    { q: "Un tren a 120 km/h tarda 3 h. ¿Cuánto tardaría a 90 km/h?", sol: "Inversa: 120 · 3 = 360; 360 : 90 = 4 h." },
    { q: "Calcula el 15 % de 300, el 40 % de 85 y el 5 % de 260.", sol: "45; 34; 13." },
    { q: "En un instituto de 650 alumnos, el 46 % son chicas. ¿Cuántas chicas hay?", sol: "650 · 0,46 = 299." },
    { q: "De 25 tiros encestas 18. ¿Qué porcentaje de acierto tienes?", sol: "18 : 25 · 100 = 72 %." },
    { q: "Una bici de 320 € tiene un 30 % de descuento. ¿Cuánto cuesta?", sol: "320 · 0,7 = 224 €." },
    { q: "Un abono de 40 € sube un 5 %. ¿Cuál es el nuevo precio?", sol: "40 · 1,05 = 42 €." },
    { q: "En un mapa de escala 1 : 25 000, dos pueblos están a 8 cm. ¿Qué distancia real hay?", sol: "200 000 cm = 2 km." },
  ],
};
