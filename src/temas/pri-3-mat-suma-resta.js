// Matemáticas 3º de Primaria: suma y resta con números grandes. Dibujos propios en SVG.
const P = require("./_pri3a");
const { svg, t, AZ, RO, VE, NA, SO, MO } = P;

// Operación en columna: filas de números alineados a la derecha en x (borde derecho), con signo y raya.
// llevadas: [[columna desde la derecha (0 = U), texto]] dibujadas arriba en pequeño.
const columna = (x, y, filas, signo, res, o = {}) => {
  const paso = o.paso || 20, s = o.s || 20;
  const cifras = (n, yy, c) => [...String(n)].reverse().map((d, i) => t(x - i * paso, yy, d, { s, d: true, c })).join("");
  const ancho = Math.max(...[...filas, res].map((n) => String(n).length));
  let out = (o.llevadas || []).map(([col, txt]) => t(x - col * paso + 2, y - s - 2, txt, { s: 11, c: RO })).join("");
  filas.forEach((n, i) => { out += cifras(n, y + i * (s + 8), "var(--ink)"); });
  out += t(x - ancho * paso - 6, y + (filas.length - 1) * (s + 8), signo, { s, c: AZ });
  const yr = y + (filas.length - 1) * (s + 8) + 10;
  out += `<path d="M${x - ancho * paso - 14} ${yr} H ${x + paso / 2 + 2}" stroke="var(--ink)" stroke-width="2.2"/>`;
  out += cifras(res, yr + s + 6, o.cres || VE);
  return out;
};
// Cabecera de columnas UM C D U sobre una operación.
const cab = (x, y, paso = 20) => ["U", "D", "C", "UM"].map((h, i) => t(x - i * paso, y, h, { s: 9.5, c: "var(--muted)" })).join("");

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Suma y resta con números grandes",
  minutos: 50,
  objetivos: ["Sumar y restar números de hasta cuatro cifras colocándolos bien en columna", "Sumar y restar llevando", "Usar la prueba de la resta para comprobar los resultados", "Estimar y calcular mentalmente sumas y restas sencillas"],
  claves: ["suma", "sumandos", "total", "resta", "minuendo", "sustraendo", "diferencia", "llevar", "columna", "prueba de la resta", "estimar", "cálculo mental"],
  pregunta: ["En una biblioteca hay 1.358 libros de cuentos y 2.475 de otros temas. ¿Cuántos libros hay en total?", "Hay que <b>sumar</b>: 1.358 + 2.475. Lo colocamos en columna, unidades debajo de unidades, y sumamos de derecha a izquierda. Cuando una columna pasa de 9, <mark>nos llevamos una</mark> a la siguiente. El resultado es <b>3.833 libros</b>."],
  bloques: [
    ["Las partes de la suma y de la resta", `<p>En la <b>suma</b> juntamos cantidades. Los números que sumamos se llaman <b>sumandos</b> y el resultado, <mark>suma o total</mark>: 2.300 + 1.400 = 3.700.</p><p>En la <b>resta</b> quitamos una cantidad a otra o buscamos cuánto falta. Tiene tres partes:</p><ul><li><b>Minuendo</b>: el número del que quitamos (el de arriba).</li><li><b>Sustraendo</b>: lo que quitamos.</li><li><b>Diferencia</b>: el resultado.</li></ul><p>En 5.800 − 2.300 = 3.500, el minuendo es 5.800, el sustraendo 2.300 y la diferencia 3.500.</p>`,
      svg("Partes de la suma y de la resta en columna", `${columna(104, 50, ["2300", "1400"], "+", "3700")}${t(30, 160, "sumandos y total", { s: 11, c: AZ, a: "start" })}${columna(220, 50, ["5800", "2300"], "−", "3500")}${t(250, 160, "minuendo, sustraendo", { s: 11, c: RO, a: "end" })}${t(250, 174, "y diferencia", { s: 11, c: RO, a: "end" })}`, 180)],
    ["Colocar bien los números", `<p>El paso más importante es <b>colocar</b> los números en columna: <mark>unidades debajo de unidades</mark>, decenas debajo de decenas, centenas debajo de centenas y millares debajo de millares.</p><p>Si un número tiene menos cifras, se alinea por la <b>derecha</b>. Por ejemplo, para sumar 3.462 + 315, el 5 del 315 va debajo del 2, no debajo del 3.</p><p>Truco: escribe encima las letras <b>UM C D U</b> o usa papel de cuadros, una cifra en cada cuadro. Así nunca se tuercen las columnas.</p>`,
      svg("Suma de 3462 más 315 bien colocada con las columnas UM, C, D y U", `${P.rejilla(70, 22, 6, 6, 20)}${cab(160, 38)}${columna(160, 60, ["3462", "315"], "+", "3777")}${t(130, 168, "¡unidades debajo de unidades!", { s: 12, c: RO })}`, 180)],
    ["Sumar sin llevar", `<p>Para sumar en columna empezamos siempre por la <b>derecha</b>, por las unidades:</p><ol><li>Sumamos las <b>unidades</b> y escribimos el resultado debajo.</li><li>Sumamos las <b>decenas</b>.</li><li>Después, las <b>centenas</b>.</li><li>Y por último, las <b>unidades de millar</b>.</li></ol><p>Ejemplo: 4.231 + 1.506. Unidades: 1 + 6 = 7. Decenas: 3 + 0 = 3. Centenas: 2 + 5 = 7. Millares: 4 + 1 = 5. Resultado: <mark>5.737</mark>.</p><p>Si los números son fáciles, también puedes sumar de cabeza por partes: 4.000 + 1.000 = 5.000; 231 + 506 = 737.</p>`,
      svg("Suma sin llevar: 4231 más 1506 igual a 5737", `${cab(170, 34)}${columna(170, 62, ["4231", "1506"], "+", "5737")}${t(215, 62, "1.º U", { s: 10, c: SO, a: "start" })}${t(215, 80, "2.º D", { s: 10, c: SO, a: "start" })}${t(215, 98, "3.º C", { s: 10, c: SO, a: "start" })}${t(215, 116, "4.º UM", { s: 10, c: SO, a: "start" })}<path d="M205 150 H 80" stroke="${SO}" stroke-width="2"/><path d="M86 145 l -6 5 l 6 5" stroke="${SO}" stroke-width="2" fill="none"/>${t(140, 168, "de derecha a izquierda", { s: 11, c: SO })}`, 180)],
    ["Sumar llevando", `<p>¿Y si una columna suma <b>10 o más</b>? Entonces <mark>nos llevamos una</mark>.</p><p>Mira 1.358 + 2.475:</p><ul><li><b>U</b>: 8 + 5 = 13. Escribo el 3 y me llevo 1 decena.</li><li><b>D</b>: 5 + 7 = 12, más 1 que me llevaba = 13. Escribo 3 y me llevo 1 centena.</li><li><b>C</b>: 3 + 4 = 7, más 1 = 8. Escribo 8.</li><li><b>UM</b>: 1 + 2 = 3.</li></ul><p>Resultado: <b>3.833</b>. La «llevada» se escribe pequeñita encima de la columna siguiente para no olvidarla. ¡10 unidades son 1 decena, por eso pasa a la columna de al lado!</p>`,
      svg("Suma llevando: 1358 más 2475 igual a 3833 con las llevadas en rojo", `${cab(150, 26)}${columna(150, 66, ["1358", "2475"], "+", "3833", { llevadas: [[1, "1"], [2, "1"]] })}${t(218, 60, "8 + 5 = 13", { s: 11, c: RO })}${t(218, 76, "pongo 3,", { s: 11, c: RO })}${t(218, 92, "me llevo 1", { s: 11, c: RO })}`, 180)],
    ["Sumar tres números", `<p>También podemos sumar <b>tres sumandos</b> o más a la vez. Se colocan todos en columna y se suman igual, columna a columna.</p><p>Ejemplo: 1.250 + 625 + 2.104.</p><ul><li>U: 0 + 5 + 4 = 9.</li><li>D: 5 + 2 + 0 = 7.</li><li>C: 2 + 6 + 1 = 9.</li><li>UM: 1 + 0 + 2 = 3.</li></ul><p>Total: <mark>3.979</mark>.</p><p>Una ayuda: la suma tiene la <b>propiedad conmutativa</b>. Podemos cambiar el orden de los sumandos y el resultado no cambia: 625 + 1.250 = 1.250 + 625. Así podemos empezar por los que se suman más fácil.</p>`,
      svg("Suma de tres números en columna: 1250 más 625 más 2104 igual a 3979", `${cab(150, 24)}${columna(150, 46, ["1250", "625", "2104"], "+", "3979", { s: 18, paso: 18 })}${t(215, 80, "a + b", { s: 13, c: MO })}${t(215, 98, "=", { s: 13, c: MO })}${t(215, 116, "b + a", { s: 13, c: MO })}`, 180)],
    ["Restar sin llevar", `<p>Para restar en columna, el <b>minuendo</b> (el número mayor) va arriba y el <b>sustraendo</b> debajo, bien alineados. Empezamos también por las <b>unidades</b>.</p><p>Ejemplo: 6.875 − 2.341.</p><ul><li>U: 5 − 1 = 4.</li><li>D: 7 − 4 = 3.</li><li>C: 8 − 3 = 5.</li><li>UM: 6 − 2 = 4.</li></ul><p>Diferencia: <mark>4.534</mark>.</p><p>Recuerda que en la resta <b>no</b> se puede cambiar el orden: 6.875 − 2.341 no es lo mismo que 2.341 − 6.875.</p>`,
      svg("Resta sin llevar: 6875 menos 2341 igual a 4534", `${cab(160, 34)}${columna(160, 62, ["6875", "2341"], "−", "4534")}${t(210, 70, "arriba,", { s: 11, c: AZ, a: "start" })}${t(210, 84, "el mayor", { s: 11, c: AZ, a: "start" })}`, 180)],
    ["Restar llevando", `<p>A veces la cifra de arriba es <b>más pequeña</b> que la de abajo. En 5.234 − 1.718, en las unidades tenemos 4 − 8, ¡y no se puede!</p><p>Hacemos así: le <mark>sumamos 10</mark> a la cifra de arriba (14 − 8 = 6) y nos llevamos 1, que sumamos a la cifra de abajo de la columna siguiente.</p><ul><li>U: 14 − 8 = 6; me llevo 1.</li><li>D: 3 − (1 + 1) = 3 − 2 = 1.</li><li>C: 2 − 7 no se puede: 12 − 7 = 5; me llevo 1.</li><li>UM: 5 − (1 + 1) = 3.</li></ul><p>Diferencia: <b>3.516</b>. Otra forma de verlo es «pedir prestado»: deshacemos una decena en 10 unidades.</p>`,
      svg("Resta llevando: 5234 menos 1718 igual a 3516", `${cab(150, 26)}${columna(150, 66, ["5234", "1718"], "−", "3516", { llevadas: [[0, "+10"], [2, "+10"]] })}${t(218, 60, "4 − 8: no", { s: 11, c: RO })}${t(218, 76, "14 − 8 = 6", { s: 11, c: RO })}${t(218, 92, "me llevo 1", { s: 11, c: RO })}`, 180),
      P.V("sumB")],
    ["La prueba de la resta", `<p>¿Cómo sabemos si una resta está bien? Con la <b>prueba de la resta</b>:</p><p style="text-align:center"><mark>sustraendo + diferencia = minuendo</mark></p><p>Si hemos calculado 5.234 − 1.718 = 3.516, comprobamos: 1.718 + 3.516 = 5.234. ¡Sale el minuendo! La resta está bien.</p><p>Tiene lógica: si a 5.234 le quito 1.718 y me quedan 3.516, al volver a juntar lo que quité con lo que quedó, tengo otra vez lo de antes. Suma y resta son operaciones <b>contrarias</b>: una deshace lo que hace la otra.</p>`,
      svg("Prueba de la resta: sustraendo más diferencia es igual al minuendo", `${columna(90, 54, ["5234", "1718"], "−", "3516", { s: 16, paso: 16 })}${t(130, 88, "→", { s: 22, c: MO })}${columna(220, 54, ["1718", "3516"], "+", "5234", { s: 16, paso: 16, cres: AZ })}${t(130, 160, "¡sale el minuendo!", { s: 14, c: AZ })}`, 180)],
    ["Estimar y calcular de cabeza", `<p><b>Estimar</b> es calcular un resultado aproximado, usando números redondeados. Sirve para saber si el resultado exacto tiene sentido.</p><p>¿Cuánto es más o menos 2.890 + 3.120? Redondeamos: 2.900 + 3.100 = <mark>6.000</mark>. El resultado exacto (6.010) está muy cerca: ¡buena señal!</p><p>Trucos de <b>cálculo mental</b>:</p><ul><li>Sumar 1.000: solo cambia la cifra de los millares. 3.456 + 1.000 = 4.456.</li><li>Sumar 99: suma 100 y quita 1. 2.300 + 99 = 2.399.</li><li>Restar 200: quita 2 centenas. 5.600 − 200 = 5.400.</li></ul>`,
      P.filas("Trucos de cálculo mental", [["+ 1.000", "3.456 → 4.456", AZ], ["+ 99", "suma 100 y quita 1", VE], ["− 200", "5.600 → 5.400", RO], ["Estimar", "2.890 + 3.120 ≈ 6.000", SO]])],
  ],
  figura: ["Suma y resta con números grandes", P.columnas("Resumen: colocar en columna, sumar llevando, restar llevando y la prueba de la resta", [["U debajo de U", "COLOCAR", ["por la derecha", "UM C D U"], AZ], ["8 + 5 = 13", "SUMAR", ["pongo 3", "me llevo 1"], VE], ["4 − 8 no puedo", "RESTAR", ["14 − 8 = 6", "me llevo 1"], RO], ["comprobar", "PRUEBA", ["sustraendo +", "diferencia = minuendo"], SO]])],
  video: P.V("sumV", true),
  ejemplos: [
    ["Calcula 2.786 + 1.548.", ["U: 6 + 8 = 14; pongo 4 y me llevo 1.", "D: 8 + 4 + 1 = 13; pongo 3 y me llevo 1.", "C: 7 + 5 + 1 = 13; pongo 3 y me llevo 1.", "UM: 2 + 1 + 1 = 4."], "4.334"],
    ["Calcula 7.050 − 2.836 y haz la prueba.", ["U: 10 − 6 = 4; me llevo 1.", "D: 5 − (3 + 1) = 1.", "C: 10 − 8 = 2; me llevo 1.", "UM: 7 − (2 + 1) = 4.", "Prueba: 2.836 + 4.214 = 7.050."], "4.214"],
    ["Un camión lleva 3.200 kg y descarga 1.450 kg. ¿Cuánto le queda? Estima primero.", ["Estimación: 3.200 − 1.500 = 1.700.", "Exacto: 3.200 − 1.450 = 1.750.", "1.750 está cerca de 1.700: tiene sentido."], "Le quedan 1.750 kg."],
  ],
  errores: [
    "Colocar los números alineados por la izquierda en vez de por la derecha.",
    "Olvidar sumar la llevada en la columna siguiente.",
    "Restar la cifra pequeña de la grande aunque esté arriba (en 4 − 8, hacer 8 − 4).",
    "Poner el número menor arriba en la resta.",
    "No comprobar el resultado ni con la prueba ni con una estimación.",
  ],
  ejercicios: [
    ["Calcula 3.241 + 2.506.", "5.747."],
    ["Calcula 4.678 + 2.385.", "7.063."],
    ["Calcula 1.205 + 340 + 2.017.", "3.562."],
    ["Calcula 8.796 − 4.352.", "4.444."],
    ["Calcula 6.402 − 3.587 y haz la prueba.", "2.815; prueba: 3.587 + 2.815 = 6.402."],
    ["¿Cómo se llaman las partes de la resta 900 − 300 = 600?", "Minuendo 900, sustraendo 300 y diferencia 600."],
    ["Calcula de cabeza: 4.500 + 1.000 y 3.800 − 300.", "5.500 y 3.500."],
    ["Estima 4.890 + 2.110 redondeando a la centena.", "4.900 + 2.100 = 7.000."],
    ["Un pueblo tiene 2.745 habitantes y otro 1.938. ¿Cuántos tienen entre los dos?", "4.683 habitantes."],
    ["Lucas quiere ahorrar 1.000 € y lleva 645 €. ¿Cuánto le falta?", "355 €."],
  ],
  quiz: [
    ["En la suma, los números que se suman se llaman…", ["sumandos", "minuendos", "diferencias"], "El resultado es la suma o total."],
    ["Para sumar en columna empezamos por…", ["las unidades", "los millares", "las centenas"], "De derecha a izquierda."],
    ["Si las unidades suman 15…", ["pongo 5 y me llevo 1", "pongo 15", "pongo 1 y me llevo 5"], "15 = 1 decena y 5 unidades."],
    ["2.400 + 3.500 =", ["5.900", "5.000", "6.900"], "24 C + 35 C = 59 C."],
    ["En la resta, el número de arriba es el…", ["minuendo", "sustraendo", "sumando"], "Del que quitamos."],
    ["6.000 − 1.000 =", ["5.000", "7.000", "4.000"], "Solo cambian los millares."],
    ["La prueba de la resta es…", ["sustraendo + diferencia", "minuendo + diferencia", "minuendo − sustraendo"], "Debe dar el minuendo."],
    ["3.450 + 99 =", ["3.549", "3.539", "3.449"], "+100 y −1."],
    ["En 52 − 18, en las unidades hacemos…", ["12 − 8", "8 − 2", "2 − 8"], "Sumamos 10 a la cifra de arriba."],
    ["2.890 + 1.120 es aproximadamente…", ["4.000", "3.000", "5.000"], "2.900 + 1.100."],
  ],
  examen: [
    ["1.586 + 2.347 =", ["3.933", "3.823", "3.833"], "Con dos llevadas."],
    ["5.000 − 1.250 =", ["3.750", "4.250", "3.850"], "Prueba: 1.250 + 3.750."],
    ["Si 7.400 − 2.100 = 5.300, la prueba es…", ["2.100 + 5.300 = 7.400", "7.400 + 2.100", "5.300 − 2.100"], "Sustraendo + diferencia."],
    ["¿Qué estimación es mejor para 3.980 + 2.010?", ["6.000", "5.000", "7.000"], "4.000 + 2.000."],
  ],
  feynman: ["Por qué hay que colocar unidades debajo de unidades", "Qué significa «me llevo una» al sumar", "Qué hacemos cuando arriba hay una cifra más pequeña en la resta", "Cómo se hace la prueba de la resta y por qué funciona", "Para qué sirve estimar un resultado"],
  mapa: ["SUMA Y RESTA", [["Colocar", "U bajo U, por la derecha", AZ], ["Sumar llevando", "10 U = 1 D", VE], ["Restar llevando", "+10 arriba, +1 abajo", RO], ["Comprobar", "prueba y estimación", SO]]],
  tarjetas: [
    ["Sumandos", "Los números que se suman."],
    ["Suma o total", "El resultado de una suma."],
    ["Minuendo", "En la resta, el número del que se quita (arriba)."],
    ["Sustraendo", "En la resta, lo que se quita (abajo)."],
    ["Diferencia", "El resultado de una resta."],
    ["Llevar", "Cuando una columna pasa de 9, pasamos 1 a la columna siguiente."],
    ["Prueba de la resta", "Sustraendo + diferencia = minuendo."],
    ["Estimar", "Calcular un resultado aproximado con números redondos."],
  ],
  familias: ["En la compra, sumad precios redondeados para estimar cuánto costará todo.", "Proponed restas de la vida real: ¿cuántos días faltan para tu cumpleaños?", "Comprobad juntos las restas de los deberes con la prueba.", "Jugad a sumar las matrículas de los coches de dos en dos cifras."],
  saberes: "Sentido numérico y operaciones: suma y resta de números naturales de hasta cuatro cifras con y sin llevadas; términos de la suma y la resta; propiedad conmutativa de la suma; prueba de la resta; estimación y cálculo mental",
  ideas: ["Tienda de clase con precios de cuatro cifras para sumar y restar.", "Competición de cálculo mental de mil en mil y de cien en cien.", "Detectives de errores: restas mal resueltas para encontrar el fallo."],
});
