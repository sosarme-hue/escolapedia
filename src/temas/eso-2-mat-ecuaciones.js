// Matemáticas 2º ESO: ecuaciones de primer grado. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Ecuaciones de primer grado",
  minutos: 60,
  objetivos: ["Distinguir igualdad, identidad y ecuación", "Resolver ecuaciones de primer grado con paréntesis y denominadores", "Comprobar una solución", "Plantear y resolver problemas con ecuaciones"],
  claves: ["ecuación", "incógnita", "solución", "miembro", "transposición", "ecuación equivalente"],
  pregunta: {
    texto: "Una camiseta y una gorra cuestan 30 € en total, y la camiseta cuesta 12 € más que la gorra. ¿Cuánto cuesta la gorra?",
    respuesta: "Si la gorra cuesta x, la camiseta cuesta x + 12, y entre las dos: x + x + 12 = 30. Entonces 2x = 18 y <mark>x = 9 €</mark>. Mucha gente dice 18 € sin pensar, pero entonces la camiseta costaría 30 € y el total sería 48 €. Una ecuación ordena el razonamiento y evita estos errores.",
  },
  bloques: [
    {
      html: `<h3>Igualdades, identidades y ecuaciones</h3><p>Una <b>igualdad algebraica</b> son dos expresiones unidas por el signo =. Puede ser:</p><ul><li>Una <b>identidad</b>, si se cumple para <b>cualquier</b> valor de las letras: 2(x + 1) = 2x + 2.</li><li>Una <b>ecuación</b>, si solo se cumple para <b>algunos</b> valores: x + 5 = 8 solo es cierta para x = 3.</li></ul><p>En una ecuación, la letra es la <b>incógnita</b>; lo que hay a cada lado del igual son los <b>miembros</b>; y cada sumando, un <b>término</b>. El valor que hace cierta la igualdad es la <b>solución</b>. Una ecuación es de <b>primer grado</b> si la incógnita aparece con exponente 1.</p>`,
    },
    {
      html: `<h3>La balanza: ecuaciones equivalentes</h3><p>Una ecuación es como una <b>balanza en equilibrio</b>. Si se hace lo mismo en los dos platillos, sigue equilibrada. Así se obtienen <b>ecuaciones equivalentes</b> (con la misma solución):</p><ul><li>Se puede <b>sumar o restar</b> el mismo número o expresión a los dos miembros.</li><li>Se pueden <b>multiplicar o dividir</b> los dos miembros por el mismo número distinto de 0.</li></ul><p>De ahí salen las reglas prácticas de <b>transposición</b>: un término que <b>suma</b> pasa al otro miembro <b>restando</b> (y al revés); un número que <b>multiplica</b> a todo un miembro pasa al otro <b>dividiendo</b> (y al revés).</p>`,
      svg: svg("Balanza en equilibrio con 3 cajas x y 2 pesas de 1 en un plato y 8 pesas en el otro: 3x + 2 = 8, x = 2", `<path d="M130 40 V 140 M90 150 H 170" stroke="var(--muted)" stroke-width="4"/><path d="M40 52 H 220" stroke="var(--ink)" stroke-width="4"/><circle cx="130" cy="40" r="6" fill="var(--ink)"/>
        <path d="M40 52 L 22 96 H 82 Z M220 52 L 178 96 H 238 Z" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>
        ${[0, 1, 2].map((i) => `<rect x="${24 + i * 18}" y="70" width="16" height="16" rx="3" fill="var(--pen)" fill-opacity=".35" stroke="var(--pen)" stroke-width="1.6"/>${t(32 + i * 18, 82, "x", { c: "var(--pen)", s: 10 })}`).join("")}${[0, 1].map((i) => `<circle cx="${34 + i * 16}" cy="62" r="6" fill="var(--sun)"/>`).join("")}
        ${[...Array(8)].map((_, i) => `<circle cx="${190 + (i % 4) * 13}" cy="${86 - Math.floor(i / 4) * 13}" r="6" fill="var(--sun)"/>`).join("")}
        ${t(52, 118, "3x + 2", { c: "var(--pen)", s: 13 })}${t(208, 118, "8", { c: "var(--sun)", s: 13 })}${t(130, 170, "3x = 6 → x = 2", { s: 13 })}`),
    },
    {
      html: `<h3>Ecuaciones sencillas</h3><p>El objetivo es <b>dejar la x sola</b> en un miembro. Ejemplo: 5x − 3 = 2x + 9.</p><ol><li>Se pasan las x a un miembro y los números al otro: 5x − 2x = 9 + 3.</li><li>Se reducen los términos semejantes: 3x = 12.</li><li>Se despeja: x = 12 : 3 = <b>4</b>.</li><li>Se <b>comprueba</b>: 5 · 4 − 3 = 17 y 2 · 4 + 9 = 17. ✔</li></ol><p>Si al final queda −x = 7, la solución es x = −7. Si queda 4x = 6, la solución es la fracción x = 6/4 = 3/2.</p>`,
      video: { id: "IHblqjW8RY8", titulo: "Ecuaciones de primer grado para principiantes", canal: "Daniel Carreón", vistas: 28913402 },
    },
    {
      html: `<h3>Ecuaciones con paréntesis</h3><p>Primero se <b>quitan los paréntesis</b> con la propiedad distributiva, con mucho cuidado con los signos:</p><p>3(x − 2) − 2(x + 1) = 4</p><ol><li>3x − 6 − 2x − 2 = 4 (el −2 multiplica a x y a 1).</li><li>3x − 2x = 4 + 6 + 2.</li><li><b>x = 12</b>.</li></ol><p>Comprobación: 3 · 10 − 2 · 13 = 30 − 26 = 4. ✔</p>`,
      video: { id: "kRGwE6OKN9M", titulo: "Ecuaciones de primer grado con paréntesis", canal: "Daniel Carreón", vistas: 5810153 },
    },
    {
      html: `<h3>Ecuaciones con denominadores</h3><p>Se eliminan los denominadores <b>multiplicando todos los términos por el mcm</b> de los denominadores:</p><p>x/2 − (x − 1)/3 = 2</p><ol><li>mcm(2, 3) = 6. Se multiplica cada término por 6: 3x − 2(x − 1) = 12.</li><li>Paréntesis: 3x − 2x + 2 = 12.</li><li>x = 12 − 2 = <b>10</b>.</li></ol><p>Ojo: cuando un numerador tiene varios términos, ponlo <b>entre paréntesis</b> antes de multiplicar; el signo − delante de la fracción afecta a todo el numerador.</p>`,
      video: { id: "C2PY3RaKJmk", titulo: "Ecuaciones de primer grado con fracciones", canal: "Susi Profe", vistas: 2241809 },
    },
    {
      html: `<h3>El método completo</h3><p>Para cualquier ecuación de primer grado se siguen estos pasos en orden:</p><ol><li>Quitar <b>denominadores</b> (multiplicar por el mcm).</li><li>Quitar <b>paréntesis</b>.</li><li><b>Transponer</b>: x a un lado y números al otro.</li><li><b>Reducir</b> términos semejantes.</li><li><b>Despejar</b> la x.</li><li><b>Comprobar</b> sustituyendo en la ecuación inicial.</li></ol><p>Casos especiales: si se llega a 0x = 5, la ecuación <b>no tiene solución</b>; si se llega a 0x = 0, tiene <b>infinitas soluciones</b> (era una identidad).</p>`,
      svg: svg("Pasos para resolver una ecuación: denominadores, paréntesis, transponer, reducir y despejar, comprobar", chips([["1. Denominadores", "multiplicar todo por el mcm", "var(--red)"], ["2. Paréntesis", "propiedad distributiva", "var(--sun)"], ["3. Transponer y reducir", "x a un lado, números al otro", "var(--pen)"], ["4. Despejar y comprobar", "x = … · sustituir al final", "var(--leaf)"]], 8, 36), 180),
    },
    {
      html: `<h3>Plantear problemas</h3><p>Resolver un problema con ecuaciones tiene cuatro fases:</p><ol><li><b>Leer y elegir la incógnita</b>: «x = …» (escríbelo).</li><li><b>Plantear</b>: traducir el enunciado a una ecuación.</li><li><b>Resolver</b> la ecuación.</li><li><b>Interpretar y comprobar</b>: ¿tiene sentido la solución? (No puede haber −3 personas ni 2,5 coches.)</li></ol><p>Ejemplo: «La suma de tres números consecutivos es 87». x + (x + 1) + (x + 2) = 87 → 3x + 3 = 87 → x = 28. Los números son <b>28, 29 y 30</b>.</p>`,
      video: { id: "VyNn_4-Yxd8", titulo: "Resolver problemas de ecuaciones: edades", canal: "Susi Profe", vistas: 1119345 },
    },
    {
      html: `<h3>Tipos de problemas frecuentes</h3>${tabla(["Tipo", "Idea para plantear"], [["Edades", "dentro de n años cada uno tiene n años más; hace n años, n menos"], ["Repartos", "una parte x, la otra «el doble», «5 más»…; la suma es el total"], ["Geometría", "perímetro = suma de los lados; ángulos de un triángulo suman 180°"], ["Dinero y compras", "precio unitario · cantidad; monedas de distinto valor"], ["Mezclas", "cantidad · precio de cada ingrediente = total"]])}<p>Ejemplo de edades: un padre tiene 40 años y su hija 10. ¿Dentro de cuántos años el padre tendrá el triple? 40 + x = 3(10 + x) → 40 + x = 30 + 3x → 10 = 2x → <b>x = 5 años</b> (45 y 15).</p>`,
    },
  ],
  figura: {
    titulo: "Ecuaciones en un vistazo",
    svg: filas("Resumen: ecuación con incógnita; balanza; pasos de resolución; casos sin solución e infinitas; planteamiento de problemas", [["Ecuación", "igualdad que se cumple para algún valor", "var(--pen)"], ["Balanza", "lo mismo en los dos miembros", "var(--sun)"], ["Pasos", "denominadores → ( ) → transponer → despejar", "var(--leaf)"], ["Comprobar", "sustituir en la ecuación inicial", "var(--inf)"], ["0x = 5 / 0x = 0", "sin solución / infinitas", "var(--red)"], ["Problemas", "x = … · plantear · resolver · interpretar", "var(--ink)"]], 220),
  },
  video: { id: "qud71ShXTK4", titulo: "Cómo solucionar ecuaciones de primer grado con fracciones", canal: "Matemáticas profe Alex", vistas: 5719094, megusta: 0, busqueda: "ecuaciones de primer grado con paréntesis y denominadores" },
  quiz: mezcla([
    { q: "¿Cuál es una identidad?", o: ["3(x + 2) = 3x + 6", "3x + 2 = 8", "x² = 4"], a: 0, e: "Cierta para todo x." },
    { q: "La solución de x − 7 = 3 es…", o: ["10", "−4", "4"], a: 0, e: "x = 3 + 7." },
    { q: "La solución de 4x = −20 es…", o: ["−5", "5", "−80"], a: 0, e: "−20 : 4." },
    { q: "Al transponer, un término que suma pasa…", o: ["restando", "sumando", "dividiendo"], a: 0, e: "Operación contraria." },
    { q: "Solución de 2x + 3 = x + 8:", o: ["5", "11", "−5"], a: 0, e: "2x − x = 8 − 3." },
    { q: "−2(x − 4) es igual a…", o: ["−2x + 8", "−2x − 8", "−2x − 4"], a: 0, e: "Signo × signo." },
    { q: "Para quitar denominadores en x/3 + x/4 = 7 se multiplica por…", o: ["12", "7", "3"], a: 0, e: "mcm(3, 4)." },
    { q: "Si se llega a 0x = 6, la ecuación…", o: ["no tiene solución", "tiene solución 6", "tiene infinitas"], a: 0, e: "Ningún x cumple." },
    { q: "«El doble de un número menos 5 es 11» da…", o: ["8", "3", "6"], a: 0, e: "2x − 5 = 11." },
    { q: "¿Es x = 2 solución de 3x − 1 = x + 3?", o: ["sí", "no", "solo a veces"], a: 0, e: "5 = 5." },
  ]),
  examen: mezcla([
    { q: "Solución de (x + 1)/2 − x/3 = 1:", o: ["3", "1", "6"], a: 0, e: "3x + 3 − 2x = 6." },
    { q: "Solución de 5 − 2(x − 3) = 3(x + 2):", o: ["1", "−1", "11/5"], a: 0, e: "11 − 2x = 3x + 6." },
    { q: "Un rectángulo tiene 36 cm de perímetro y su base es el doble de la altura. La altura mide…", o: ["6 cm", "12 cm", "9 cm"], a: 0, e: "2x + 2 · 2x = 36." },
  ]),
  feynman: ["Diferencia entre identidad y ecuación", "Por qué una ecuación es como una balanza", "Cómo se quitan los denominadores", "Los pasos para resolver cualquier ecuación de primer grado", "Cómo se plantea un problema"],
  mapa: mapa("ECUACIONES", "var(--eso)", [
    ["Qué es", "incógnita · solución", "var(--pen)"],
    ["Balanza", "ecuaciones equivalentes", "var(--sun)"],
    ["Resolver", "( ) · denominadores · despejar", "var(--leaf)"],
    ["Problemas", "plantear · comprobar", "var(--red)"],
  ], 240),
  tarjetas: [
    ["Ecuación", "Igualdad que solo se cumple para algunos valores."],
    ["Identidad", "Igualdad que se cumple para todos los valores."],
    ["Incógnita", "Letra cuyo valor se busca."],
    ["Solución", "Valor que hace cierta la igualdad."],
    ["Transponer", "Pasar un término al otro miembro con la operación contraria."],
    ["Denominadores", "Se quitan multiplicando todo por el mcm."],
    ["0x = k (k ≠ 0)", "Sin solución."],
    ["Comprobar", "Sustituir la solución en la ecuación inicial."],
  ],
  familias: ["Inventad acertijos tipo «pienso un número…» y resolvedlos con una ecuación.", "Plantead problemas de edades con los miembros de la familia.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Igualdades, identidades y ecuaciones; ecuaciones de primer grado con paréntesis y denominadores; ecuaciones equivalentes; resolución de problemas mediante ecuaciones (RD 217/2022, Matemáticas, sentido algebraico).",
    ideas: ["Balanza física o virtual para ecuaciones.", "Problemas «al revés»: dar la ecuación y pedir un enunciado.", "Escape room de ecuaciones encadenadas."],
  },
  fuentes: [RD, { t: "Proyecto Descartes (INTEF): ecuaciones de primer grado", url: "https://proyectodescartes.org/" }],
  revisado: REV,
  ejemplosTitulo: "Ejemplos resueltos",
  ejemplos: [
    { enunciado: "Resuelve: (2x − 1)/3 − (x + 2)/4 = 1/2.", pasos: ["mcm(3, 4, 2) = 12: 4(2x − 1) − 3(x + 2) = 6.", "8x − 4 − 3x − 6 = 6.", "5x = 16 → x = 16/5."], resultado: "x = 16/5" },
    { enunciado: "Resuelve: 4(x − 3) − (x − 5) = 2x − 1.", pasos: ["4x − 12 − x + 5 = 2x − 1.", "3x − 7 = 2x − 1.", "x = 6. Comprobación: 12 − 1 = 11 = 12 − 1."], resultado: "x = 6" },
    { enunciado: "En un parking hay coches y motos: 30 vehículos y 100 ruedas. ¿Cuántos coches hay?", pasos: ["x = coches; motos = 30 − x.", "4x + 2(30 − x) = 100.", "4x + 60 − 2x = 100 → 2x = 40 → x = 20."], resultado: "20 coches y 10 motos." },
  ],
  errores: [
    "Pasar un número que multiplica restando: 3x = 12 no da x = 9.",
    "Al quitar un paréntesis con − delante, cambiar solo el primer signo.",
    "Multiplicar por el mcm solo los términos con denominador.",
    "No poner entre paréntesis un numerador de varios términos.",
    "No comprobar la solución ni ver si tiene sentido en el problema.",
  ],
  ejercicios: [
    { q: "Resuelve: 7x − 4 = 3x + 12.", sol: "4x = 16 → x = 4." },
    { q: "Resuelve: 2(x + 5) = 3(x − 1).", sol: "2x + 10 = 3x − 3 → x = 13." },
    { q: "Resuelve: x/4 + x/6 = 5.", sol: "3x + 2x = 60 → x = 12." },
    { q: "Resuelve: (x − 2)/5 = (x + 1)/2.", sol: "2x − 4 = 5x + 5 → x = −3." },
    { q: "Resuelve: 3 − (2x − 1)/4 = x/2.", sol: "12 − 2x + 1 = 2x → x = 13/4." },
    { q: "Indica si tiene solución: 2(x + 3) = 2x + 6; 2(x + 3) = 2x + 5.", sol: "Infinitas (identidad); ninguna (0x = −1)." },
    { q: "La suma de un número y su mitad es 27. ¿Qué número es?", sol: "x + x/2 = 27 → x = 18." },
    { q: "Ana tiene 3 veces la edad de su hermano y entre los dos suman 48 años. ¿Qué edades tienen?", sol: "x + 3x = 48 → 12 y 36 años." },
    { q: "Los ángulos de un triángulo miden x, 2x y x + 20°. ¿Cuánto mide cada uno?", sol: "4x + 20 = 180 → x = 40: 40°, 80° y 60°." },
    { q: "Pago 3,40 € con 20 monedas de 10 y 20 céntimos. ¿Cuántas hay de cada tipo?", sol: "0,1x + 0,2(20 − x) = 3,4 → x = 6 de 10 cts. y 14 de 20 cts." },
  ],
};
