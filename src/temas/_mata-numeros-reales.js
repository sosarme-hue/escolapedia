// Matemáticas A 4º ESO · Números reales: ampliación a nivel de libro de texto (enfoque aplicado).
const { tabla } = require("./_amplia");
const tras = (T, titulo, ...nuevos) => {
  const i = T.bloques.findIndex((b) => b.html.includes(`<h3>${titulo}</h3>`));
  if (i < 0) throw new Error(`_mata-numeros-reales: no encuentro «${titulo}»`);
  T.bloques.splice(i + 1, 0, ...nuevos);
};

module.exports = (T) => {
  T.minutos = 60;
  T.objetivos.push("Pasar de decimal a fracción y saber cuándo un número es racional", "Usar el valor absoluto, las tolerancias y el redondeo en situaciones reales");

  tras(T, "Los conjuntos de números", {
    html: `<h3>De decimal a fracción</h3><p>Todo número con un número finito de decimales o con decimales que se repiten (<b>periódico</b>) se puede escribir como fracción, y por eso es <b>racional</b>. Si es <b>exacto</b>, se pone el número sin coma en el numerador y la unidad seguida de tantos ceros como decimales en el denominador: 0,75 = 75/100 = 3/4. Si es <b>periódico puro</b>, como 0,333…, se pone el periodo en el numerador y tantos nueves como cifras tenga: 0,333… = 3/9 = 1/3. Esto explica por qué 0,999… es exactamente <mark>1</mark>: 9/9 = 1. Los números que no se pueden pasar a fracción, como π o √2, son los <b>irracionales</b>.</p><div class="formula"><span>1,25 = 125/100 = 5/4 · 0,7̅ = 7/9</span></div>`,
    video: { id: "HgLY1hHF1JQ", titulo: "Convertir decimal periódico puro a fracción", canal: "Matemáticas profe Alex", vistas: 2929565, megusta: 45941 },
  }, {
    html: `<h3>Los números en la vida diaria</h3><p>Cada conjunto de números tiene sus usos. Los <b>naturales</b> sirven para contar: alumnos, entradas, goles. Los <b>enteros</b> añaden los negativos: temperaturas bajo cero, plantas de un sótano, saldos en números rojos o altitudes bajo el nivel del mar. Los <b>racionales</b> aparecen en precios (2,95 €), medidas (1,75 m) y repartos (un tercio de pizza). Y los <b>irracionales</b>, aunque parezcan raros, están en cualquier objeto redondo (π) o en la diagonal de una pantalla. Saber en qué conjunto estamos ayuda a dar respuestas con sentido: no se compran <mark>2,5 entradas</mark>.</p>`,
  });

  tras(T, "Intervalos", {
    html: `<h3>Valor absoluto: distancias y diferencias</h3><p>El <b>valor absoluto</b> de un número, |a|, es su distancia al cero: siempre positivo o cero. |−5| = 5 y |5| = 5. Sirve para medir <b>diferencias</b> sin importar el orden. Si a las 7:00 hay −3 °C y a las 15:00 hay 9 °C, la variación es |9 − (−3)| = <mark>12 grados</mark>. Del mismo modo, la distancia entre dos puntos de la recta es el valor absoluto de su diferencia: entre la planta −2 de un garaje y la planta 5 hay |5 − (−2)| = 7 plantas.</p>`,
  }, {
    html: `<h3>Tolerancias: intervalos en la industria</h3><p>Ninguna pieza se fabrica con una medida perfecta. Por eso las fábricas dan las medidas con una <b>tolerancia</b>: un tornillo de «10 ± 0,2 mm» es válido si mide entre 9,8 y 10,2 mm, es decir, si su medida está en el intervalo <mark>[9,8; 10,2]</mark>. Lo mismo ocurre con el peso de un paquete de arroz, la dosis de un medicamento o la temperatura de una nevera (entre 2 y 5 °C). Escribir estas condiciones como intervalos permite comprobar rápidamente qué piezas pasan el control de calidad y cuáles se rechazan.</p>${tabla(["Producto", "Especificación", "Intervalo válido"], [["Tornillo", "10 ± 0,2 mm", "[9,8; 10,2]"], ["Paquete de arroz", "1 kg ± 15 g", "[985, 1.015] g"], ["Nevera", "de 2 a 5 °C", "[2, 5] °C"]])}`,
  });

  tras(T, "Aproximar y medir el error", {
    html: `<h3>Truncar y redondear</h3><p>Hay dos formas de quitar cifras decimales. <b>Truncar</b> es cortar sin más: 3,1479 truncado a centésimas es 3,14. <b>Redondear</b> es elegir la aproximación más cercana: se mira la primera cifra que se suprime y, si es 5 o mayor, se suma 1 a la anterior: 3,1479 redondeado a centésimas es 3,15. El redondeo comete <mark>menos error</mark>, por eso es el que usan los precios y las notas. Las calculadoras redondean, pero algunos sistemas, como ciertas básculas, truncan.</p>`,
    video: { id: "HrW_0UZd5k8", titulo: "Redondear y truncar números decimales", canal: "Ruben Sebastian", vistas: 423709, megusta: 6650 },
  }, {
    html: `<h3>¿Cuántas cifras tiene sentido dar?</h3><p>El resultado de un cálculo no puede ser más preciso que los datos. Si mides un lado con una regla en milímetros y obtienes 12,4 cm, no tiene sentido dar un área de 153,76 cm² con dos decimales: basta con <b>154 cm²</b>. Al usar la calculadora con π o con raíces, conviene trabajar con todos los decimales y <mark>redondear solo al final</mark>, porque si se redondea en cada paso los errores se acumulan. En la vida diaria, se redondea según el contexto: los precios a céntimos, las distancias en carretera a kilómetros y las poblaciones a miles.</p>`,
  });

  T.ejemplos = [
    { enunciado: "Escribe como fracción 2,4 y 0,454545…", pasos: ["2,4 es exacto: 24/10 = 12/5.", "0,4545… es periódico puro con periodo 45 (dos cifras).", "Periodo entre tantos nueves como cifras: 45/99 = 5/11."], resultado: "2,4 = 12/5; 0,4545… = 5/11." },
    { enunciado: "Un termómetro marca −6 °C a las 6:00 y 11 °C a las 14:00. ¿Cuánto ha subido la temperatura?", pasos: ["Diferencia: 11 − (−6).", "Restar un negativo es sumar: 11 + 6 = 17.", "Con valor absoluto: |11 − (−6)| = 17."], resultado: "Ha subido 17 °C." },
    { enunciado: "Una caja de galletas debe pesar 500 g ± 8 g. ¿Pasan el control cajas de 491 g, 506 g y 509 g?", pasos: ["Intervalo válido: [492, 508] g.", "491 g: queda por debajo, se rechaza.", "506 g está dentro; 509 g se pasa."], resultado: "Solo pasa la de 506 g." },
  ];

  T.errores = [
    "Pensar que todos los números con decimales son irracionales: 0,5 o 0,333… son racionales.",
    "Confundir truncar con redondear: 2,68 truncado a décimas es 2,6, redondeado es 2,7.",
    "Redondear en cada paso intermedio y acumular errores.",
    "Usar paréntesis en extremos que sí están incluidos, como «entre 2 y 5 °C».",
    "Restar mal con negativos: la distancia entre −4 y 3 es 7, no 1.",
  ];

  T.ejercicios = [
    { q: "Clasifica: 12, −3, 0,25, 2/3, √16, √3.", sol: "Naturales: 12 y √16 = 4. Entero: −3. Racionales: 0,25 y 2/3. Irracional: √3." },
    { q: "Pasa a fracción: 0,8; 1,05; 0,666…", sol: "4/5; 21/20; 2/3." },
    { q: "Ordena de menor a mayor: −1,5; −2; 0,3; 1/4; −1/2.", sol: "−2 < −1,5 < −1/2 < 1/4 < 0,3." },
    { q: "Escribe como intervalo «las edades entre 12 y 16 años, incluido el 12 pero no el 16».", sol: "[12, 16)." },
    { q: "Una pastilla debe contener 250 mg ± 5 %. ¿Entre qué valores está la dosis válida?", sol: "5 % de 250 = 12,5: [237,5; 262,5] mg." },
    { q: "Calcula |−8|, |3 − 10| y la distancia entre −5 y 4.", sol: "8, 7 y 9." },
    { q: "El Mar Muerto está a −430 m y el Everest a 8.849 m. ¿Qué diferencia de altitud hay?", sol: "8.849 − (−430) = 9.279 m." },
    { q: "Trunca y redondea 7,2864 a las centésimas.", sol: "Truncado: 7,28. Redondeado: 7,29." },
    { q: "Redondeas 1,456 € a 1,46 €. Calcula el error absoluto y relativo.", sol: "Ea = 0,004 €; Er = 0,004 / 1,456 ≈ 0,27 %." },
    { q: "Un rectángulo mide 3,2 cm por 4,7 cm. Calcula su área con una precisión razonable.", sol: "15,04 cm²; con datos de una décima, unos 15,0 cm²." },
  ];

  T.quiz.push(
    { q: "0,999… es igual a…", o: ["0,99", "1", "un irracional"], a: 1, e: "9/9 = 1." },
    { q: "Un tornillo de 6 ± 0,1 mm es válido si mide…", o: ["entre 5,9 y 6,1 mm", "exactamente 6 mm", "más de 6 mm"], a: 0, e: "Intervalo [5,9; 6,1]." },
    { q: "Truncar 4,79 a décimas da…", o: ["4,8", "4,7", "5"], a: 1, e: "Se corta sin mirar la siguiente cifra." },
    { q: "La distancia entre −3 y 5 es…", o: ["2", "8", "−8"], a: 1, e: "|5 − (−3)| = 8." },
    { q: "¿Cuál es racional?", o: ["√5", "0,121212…", "π"], a: 1, e: "Periódico: 12/99." },
  );

  T.tarjetas.push(
    ["Decimal periódico puro a fracción", "Periodo entre tantos nueves como cifras tenga: 0,3̅ = 3/9."],
    ["Tolerancia", "Margen permitido en una medida: 10 ± 0,2 → [9,8; 10,2]."],
    ["Truncar", "Cortar las cifras sin redondear."],
  );
};
