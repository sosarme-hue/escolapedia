// Matemáticas A 4º ESO · Polinomios: ampliación a nivel de libro de texto (enfoque aplicado).
const { tabla } = require("./_amplia");
const tras = (T, titulo, ...nuevos) => {
  const i = T.bloques.findIndex((b) => b.html.includes(`<h3>${titulo}</h3>`));
  if (i < 0) throw new Error(`_mata-polinomios: no encuentro «${titulo}»`);
  T.bloques.splice(i + 1, 0, ...nuevos);
};

module.exports = (T) => {
  T.minutos = 60;
  T.objetivos.push("Traducir enunciados al lenguaje algebraico", "Usar polinomios para calcular áreas, precios y otras fórmulas de la vida real");

  T.bloques.unshift({
    html: `<h3>El lenguaje algebraico</h3><p>El álgebra usa <b>letras</b> para representar números que no conocemos o que pueden cambiar. Así se pueden escribir reglas generales de forma breve. «El doble de un número» es 2x; «un número más 5», x + 5; «la mitad de un número», x/2; «el cuadrado de un número menos 3», x² − 3; «dos números consecutivos», x y x + 1. Traducir bien es el <mark>primer paso</mark> para resolver cualquier problema con ecuaciones, por eso conviene practicarlo mucho.</p>${tabla(["En palabras", "En álgebra"], [["El triple de un número", "3x"], ["Un número menos 7", "x − 7"], ["La cuarta parte de un número", "x/4"], ["El cuadrado de un número", "x²"], ["Dos números pares consecutivos", "2x y 2x + 2"]])}`,
    video: { id: "DV3C_RawfBg", titulo: "Lenguaje algebraico, parte 1", canal: "Matemáticas profe Alex", vistas: 4019897, megusta: 107375 },
  });

  tras(T, "Qué es un polinomio", {
    html: `<h3>Fórmulas que son polinomios</h3><p>Muchas fórmulas de la vida diaria son polinomios, y calcular su <b>valor numérico</b> es sustituir la letra por un número. El precio de un taxi con 3 € de bajada de bandera y 1,10 € por kilómetro es P(x) = 1,1x + 3: para 8 km, P(8) = 11,80 €. La distancia que recorre un objeto que cae es d(t) = 4,9t² metros: en 2 segundos cae 19,6 m. El área de un cuadrado de lado x + 2 es (x + 2)². Con el valor numérico se pueden <mark>comparar tarifas</mark> o predecir resultados sin hacer el experimento.</p>`,
  }, {
    html: `<h3>Sumar y restar polinomios</h3><p>Solo se pueden sumar los <b>términos semejantes</b>, los que tienen la misma letra con el mismo exponente, igual que no se suman manzanas con naranjas: 3x² + 5x² = 8x², pero 3x² + 5x no se puede juntar. Para sumar, se agrupan los semejantes. Para <b>restar</b>, se cambia el signo de <mark>todos</mark> los términos del polinomio que se resta y después se suma. Un truco es colocar los polinomios uno debajo del otro, con los términos del mismo grado en la misma columna.</p><div class="formula"><span>(5x² − 2x + 1) − (2x² + 3x − 4) = 3x² − 5x + 5</span></div>`,
  }, {
    html: `<h3>Multiplicar polinomios</h3><p>Para multiplicar un <b>monomio</b> por un polinomio se multiplica por cada término: 2x(3x − 4) = 6x² − 8x. Para multiplicar <b>dos polinomios</b>, se multiplica cada término del primero por cada término del segundo y luego se suman los semejantes. Al multiplicar potencias de la misma letra, <mark>los exponentes se suman</mark>: x · x² = x³. Una forma visual de verlo es como el área de un rectángulo dividido en partes: (x + 3)(x + 2) es un rectángulo cuya área se reparte en x², 2x, 3x y 6.</p><div class="formula"><span>(x + 3)(x + 2) = x² + 2x + 3x + 6 = x² + 5x + 6</span></div>`,
    video: { id: "6-1NJt3-lTg", titulo: "Multiplicación de polinomios: polinomio por polinomio, ejemplo 1", canal: "Matemáticas profe Alex", vistas: 5961056, megusta: 126619 },
  });

  tras(T, "Identidades notables", {
    html: `<h3>Las identidades con áreas</h3><p>Las identidades notables se pueden <b>ver</b> con un dibujo. Un cuadrado de lado a + b tiene un área de (a + b)². Si lo dividimos, aparecen un cuadrado de lado a (área a²), otro de lado b (área b²) y <b>dos rectángulos</b> de lados a y b (área ab cada uno). Por eso (a + b)² = a² + <mark>2ab</mark> + b², y no solo a² + b². Las identidades sirven también para hacer cálculos mentales: 51² = (50 + 1)² = 2.500 + 100 + 1 = 2.601, y 49 · 51 = (50 − 1)(50 + 1) = 2.500 − 1 = 2.499.</p>`,
  });

  tras(T, "Sacar factor común", {
    html: `<h3>Polinomios para resolver problemas</h3><p>Los polinomios permiten escribir con una sola expresión situaciones que dependen de un valor. Por ejemplo, para hacer una caja sin tapa con una lámina de cartón de 30 × 20 cm se recortan cuadrados de lado x en las esquinas; el volumen de la caja es V(x) = x(30 − 2x)(20 − 2x). Dando valores a x podemos ver qué corte da la caja <mark>de más volumen</mark>. Del mismo modo se calcula el beneficio de una empresa según las unidades vendidas o el área de un jardín con un camino alrededor.</p>`,
  });

  T.ejemplos = [
    { enunciado: "Traduce y simplifica: «el triple de un número, menos el doble del número siguiente».", pasos: ["Número: x; siguiente: x + 1.", "3x − 2(x + 1).", "3x − 2x − 2 = x − 2."], resultado: "x − 2." },
    { enunciado: "Un jardín cuadrado de lado x tiene alrededor un camino de 1 m de ancho. Escribe el área total y el área del camino.", pasos: ["Lado total: x + 2. Área total: (x + 2)² = x² + 4x + 4.", "Área del jardín: x².", "Área del camino: (x² + 4x + 4) − x² = 4x + 4."], resultado: "Total x² + 4x + 4; camino 4x + 4 m²." },
    { enunciado: "Calcula 103² y 98 · 102 sin calculadora.", pasos: ["103² = (100 + 3)² = 10.000 + 600 + 9 = 10.609.", "98 · 102 = (100 − 2)(100 + 2) = 10.000 − 4.", "= 9.996."], resultado: "10.609 y 9.996." },
  ];

  T.errores = [
    "Sumar términos que no son semejantes: 3x + 2x² no es 5x³.",
    "Al restar, cambiar el signo solo del primer término del segundo polinomio.",
    "Escribir (x + 3)² = x² + 9, olvidando el doble producto 6x.",
    "Multiplicar los exponentes en vez de sumarlos: x² · x³ = x⁵.",
    "Traducir «el doble de un número más 3» como 2(x + 3) en lugar de 2x + 3.",
  ];

  T.ejercicios = [
    { q: "Traduce: la mitad de un número más 4; el cuadrado de la suma de dos números.", sol: "x/2 + 4; (x + y)²." },
    { q: "Indica el grado, el coeficiente principal y el término independiente de −4x³ + x − 9.", sol: "Grado 3, coeficiente principal −4, término independiente −9." },
    { q: "Calcula P(−2) si P(x) = x² − 3x + 1.", sol: "4 + 6 + 1 = 11." },
    { q: "Un gimnasio cobra 25 € de matrícula y 30 € al mes. Escribe el coste C(x) de x meses y calcula C(6).", sol: "C(x) = 30x + 25; C(6) = 205 €." },
    { q: "Calcula (4x² − x + 2) + (x² + 5x − 7).", sol: "5x² + 4x − 5." },
    { q: "Calcula (3x² + 2x) − (x² − 4x + 1).", sol: "2x² + 6x − 1." },
    { q: "Multiplica (2x − 1)(x + 4).", sol: "2x² + 7x − 4." },
    { q: "Desarrolla (x − 5)² y (3x + 2)(3x − 2).", sol: "x² − 10x + 25 y 9x² − 4." },
    { q: "Saca factor común: 12x³ − 8x².", sol: "4x²(3x − 2)." },
    { q: "Un rectángulo mide x + 5 de largo y x de ancho. Escribe su perímetro y su área.", sol: "Perímetro 4x + 10; área x² + 5x." },
  ];

  T.quiz.push(
    { q: "«Un número menos su tercera parte» es…", o: ["x − x/3", "(x − 1)/3", "x − 3"], a: 0, e: "Tercera parte: x/3." },
    { q: "3x² y 3x son…", o: ["semejantes", "no semejantes", "iguales"], a: 1, e: "Distinto exponente." },
    { q: "(x + 1)(x + 2) =", o: ["x² + 2", "x² + 3x + 2", "x² + 2x + 2"], a: 1, e: "x² + 2x + x + 2." },
    { q: "Si P(x) = 4,9x², P(3) =", o: ["44,1", "14,7", "29,4"], a: 0, e: "4,9 · 9." },
    { q: "21² con una identidad es…", o: ["400 + 1", "400 + 40 + 1 = 441", "420"], a: 1, e: "(20 + 1)²." },
  );

  T.tarjetas.push(
    ["Lenguaje algebraico", "Escribir con letras y números: «el doble de un número» = 2x."],
    ["Términos semejantes", "Misma letra con el mismo exponente; solo esos se suman."],
    ["Valor numérico", "Resultado de sustituir la letra por un número."],
  );
};
