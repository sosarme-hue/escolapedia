// Matemáticas A 4º ESO · Funciones lineales y cuadráticas: ampliación a nivel de libro de texto.
const tabla = (cab, filas) => `<table class="tb"><thead><tr>${cab.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${filas.map((f) => `<tr>${f.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
const vid = (id, titulo, canal, vistas) => ({ id, titulo, canal, vistas, megusta: 0 });

module.exports = (T) => {
  T.minutos = 55;
  T.objetivos.push("Obtener la ecuación de una recta a partir de dos puntos o de un enunciado", "Representar una parábola con su vértice, sus cortes y una tabla de valores", "Resolver problemas de tarifas, movimiento y máximos con funciones");
  const tras = (t, ...nuevos) => { const i = T.bloques.findIndex((b) => b.html.includes(t)); if (i < 0) throw new Error(`mata: no encuentro «${t}»`); T.bloques.splice(i + 1, 0, ...nuevos); };

  tras("Funciones cuadráticas",
    { html: `<h3>Representar una parábola paso a paso</h3><p>Para dibujar <b>y = x² − 2x − 3</b> sigue siempre el mismo orden:</p><ol><li><b>Vértice</b>: x<sub>v</sub> = −b / 2a = 2 / 2 = 1. Sustituye: y = 1 − 2 − 3 = −4. El vértice es <mark>(1, −4)</mark>.</li><li><b>Corte con el eje Y</b>: x = 0 → y = −3. Punto (0, −3).</li><li><b>Cortes con el eje X</b>: resuelve x² − 2x − 3 = 0 → x = −1 y x = 3.</li><li><b>Tabla de valores</b> alrededor del vértice, aprovechando la <b>simetría</b>: los puntos a la misma distancia del vértice tienen la misma y.</li></ol>${tabla(["x", "−2", "−1", "0", "1", "2", "3", "4"], [["y", "5", "0", "−3", "<b>−4</b>", "−3", "0", "5"]])}<p>Como a = 1 &gt; 0, la parábola abre hacia arriba y el vértice es el punto más bajo.</p>` },
    { html: `<h3>¿Cuántas veces corta al eje X?</h3><p>Los cortes con el eje X son las soluciones de ax² + bx + c = 0. Antes de resolver, el <b>discriminante</b> Δ = b² − 4ac te dice cuántos hay:</p>${tabla(["Discriminante", "Soluciones", "La parábola…", "Ejemplo"], [["Δ &gt; 0", "dos", "corta al eje X en dos puntos", "y = x² − 4 (Δ = 16)"], ["Δ = 0", "una", "toca el eje X solo en el vértice", "y = x² − 6x + 9 (Δ = 0)"], ["Δ &lt; 0", "ninguna", "no llega a tocar el eje X", "y = x² + 1 (Δ = −4)"]])}<p>Esto sirve también para comprobar el resultado: si te sale una raíz de un número negativo, la parábola no corta el eje, no es que te hayas equivocado.</p>` },
    { html: `<h3>Parábolas en la vida real</h3><p>Muchas situaciones siguen una parábola. Un balón lanzado hacia arriba a 20 m/s alcanza una altura <b>h = −5t² + 20t</b> metros a los t segundos (el −5 viene de la gravedad). Como a &lt; 0, la parábola abre hacia abajo y el vértice es el <mark>punto más alto</mark>: t = −20 / (2 · (−5)) = 2 s, y h = −5 · 4 + 40 = 20 m. El balón vuelve al suelo cuando h = 0: −5t² + 20t = 0 → t(−5t + 20) = 0 → t = 0 o t = 4 s. Otro ejemplo clásico: con 20 m de valla quieres cercar un huerto rectangular lo más grande posible. Si un lado mide x, el otro mide 10 − x y el área es A = x(10 − x) = −x² + 10x. El vértice está en x = 5: un cuadrado de 5 × 5 = 25 m². Los puentes colgantes, las antenas parabólicas y los chorros de agua de una fuente también tienen forma de parábola.</p>` },
  );

  tras("Funciones lineales y afines",
    { html: `<h3>La pendiente a partir de dos puntos</h3><p>Si conoces dos puntos de una recta, (x₁, y₁) y (x₂, y₂), su pendiente es lo que sube y dividido entre lo que avanza x:</p><p style="text-align:center"><mark>m = (y₂ − y₁) / (x₂ − x₁)</mark></p><p>Por ejemplo, la recta que pasa por (1, 3) y (4, 9) tiene m = (9 − 3) / (4 − 1) = 6 / 3 = 2. Para hallar n, sustituye uno de los puntos en y = 2x + n: 3 = 2 · 1 + n, de donde n = 1. La recta es <b>y = 2x + 1</b>. Comprueba siempre con el otro punto: 2 · 4 + 1 = 9 ✓. Una pendiente grande (en valor absoluto) da una recta muy inclinada; una pendiente 0 da una recta horizontal, la <b>función constante</b> y = n.</p>` },
    { html: `<h3>De un enunciado a una función</h3><p>Muchos precios siguen una función afín: una parte <b>fija</b> (la ordenada en el origen) más una parte que <b>depende de la cantidad</b> (la pendiente). Un taxi cobra 3 € de bajada de bandera y 1,20 € por kilómetro: <mark>y = 1,2x + 3</mark>, donde x son los km e y el precio en euros. Un viaje de 10 km cuesta 1,2 · 10 + 3 = 15 €. Si un viaje ha costado 21 €, se resuelve 1,2x + 3 = 21 → x = 15 km. Fíjate en qué representa cada número:</p>${tabla(["Situación", "Pendiente m", "Ordenada n", "Función"], [["Taxi", "1,20 €/km", "3 € de bajada", "y = 1,2x + 3"], ["Gimnasio", "4 € por clase", "25 € de matrícula", "y = 4x + 25"], ["Depósito que se vacía", "−50 L por hora", "2.000 L al inicio", "y = −50x + 2000"], ["Coche a 90 km/h", "90 km/h", "0 km al salir", "y = 90x"]])}` },
    { html: `<h3>Comparar dos tarifas</h3><p>La compañía A cobra 20 € al mes más 0,05 € por minuto: y = 0,05x + 20. La compañía B no tiene cuota, pero cobra 0,10 € por minuto: y = 0,10x. ¿Cuál interesa más? Las dos rectas se cortan donde cuestan lo mismo: 0,05x + 20 = 0,10x → 20 = 0,05x → <b>x = 400 minutos</b> (y = 40 €). Si hablas <mark>menos de 400 minutos</mark>, B es más barata; si hablas más, conviene A. Dibujar las dos rectas en los mismos ejes lo deja muy claro: antes del punto de corte, la recta de B va por debajo, y después va por encima. Dos rectas con la <b>misma pendiente</b> son paralelas y nunca se cortan: una tarifa sería siempre más cara que la otra.</p>` },
    { html: `<h3>Gráficas de movimiento</h3><p>Si un objeto se mueve a velocidad constante, la distancia recorrida es una función afín del tiempo: <b>d = v · t + d₀</b>, donde la pendiente es la <b>velocidad</b> y la ordenada en el origen, la distancia inicial. Un ciclista que sale del kilómetro 5 a 20 km/h está en d = 20t + 5. Al cabo de 2 horas está en el km 45. En la gráfica distancia-tiempo, una recta más inclinada indica más velocidad; un tramo horizontal indica que el objeto está <mark>parado</mark>; y una pendiente negativa, que vuelve hacia el punto de partida. Leer estas gráficas es muy útil en física, en las aplicaciones deportivas o al interpretar el recorrido de un autobús.</p>` },
  );

  // Copia el bloque antes de ponerle vídeo: los objetos de bloque se comparten con Matemáticas B.
  const conVideo = (t, v) => { const i = T.bloques.findIndex((b) => b.html.includes(t)); T.bloques[i] = { ...T.bloques[i], video: v }; };
  conVideo("Funciones lineales y afines", vid("PnATAsxu_oo", "¿Qué es la función lineal? Explicación sencilla, pendiente y gráfica", "Andrey Trejos - Mate para secundaria", 1914183));
  conVideo("Representar una parábola paso a paso", vid("J3qQWvxqFI4", "Funciones cuadráticas: vértice, puntos de corte con los ejes y representación", "Susi Profe", 3552943));

  T.ejemplos = [
    { enunciado: "Halla la ecuación de la recta que pasa por (2, 1) y (5, 7).", pasos: ["Pendiente: m = (7 − 1) / (5 − 2) = 6 / 3 = 2.", "Sustituye (2, 1) en y = 2x + n: 1 = 4 + n, así que n = −3.", "Comprueba con (5, 7): 2 · 5 − 3 = 7 ✓."], resultado: "y = 2x − 3." },
    { enunciado: "Representa y = −x² + 4x indicando vértice y cortes.", pasos: ["a = −1 < 0: abre hacia abajo.", "Vértice: x = −4 / (2 · (−1)) = 2; y = −4 + 8 = 4. Vértice (2, 4).", "Eje X: −x² + 4x = 0 → x(−x + 4) = 0 → x = 0 y x = 4. Eje Y: (0, 0)."], resultado: "Parábola ∩ con vértice (2, 4) que corta al eje X en (0, 0) y (4, 0)." },
    { enunciado: "Un fontanero cobra 30 € por desplazamiento y 25 € por hora. Otro cobra 40 € por hora sin desplazamiento. ¿A partir de cuántas horas conviene el primero?", pasos: ["Primero: y = 25x + 30. Segundo: y = 40x.", "Igualamos: 25x + 30 = 40x → 30 = 15x → x = 2 horas.", "Con 3 horas: primero 105 €, segundo 120 €."], resultado: "Para trabajos de más de 2 horas conviene el primero; con 2 horas cuestan igual (80 €)." },
  ];
  T.errores = [
    "Calcular la pendiente al revés: m = (x₂ − x₁) / (y₂ − y₁). Arriba van siempre las y.",
    "Olvidar el signo en x_v = −b / 2a: en y = x² − 6x, x_v = 6 / 2 = 3, no −3.",
    "Confundir la ordenada en el origen n con el corte con el eje X.",
    "Hacer la tabla de valores con puntos lejanos al vértice y no ver la forma de la parábola.",
    "Pensar que una raíz negativa del discriminante es un error: significa que la parábola no corta el eje X.",
  ];
  T.ejercicios = [
    { q: "Halla la pendiente de la recta que pasa por (0, 2) y (3, 8).", sol: "m = (8 − 2) / (3 − 0) = 2." },
    { q: "Escribe la ecuación de la recta de pendiente −3 que pasa por (1, 4).", sol: "4 = −3 + n → n = 7; y = −3x + 7." },
    { q: "Un gimnasio cobra 25 € de matrícula y 4 € por clase. ¿Cuánto cuestan 12 clases? ¿Cuántas clases son 85 €?", sol: "4 · 12 + 25 = 73 €; 4x + 25 = 85 → x = 15 clases." },
    { q: "Un depósito tiene 2.000 L y pierde 50 L por hora. ¿Cuándo se vacía?", sol: "−50x + 2000 = 0 → x = 40 horas." },
    { q: "¿Son paralelas y = 3x − 1 e y = 3x + 5? ¿Por qué?", sol: "Sí: tienen la misma pendiente, 3, y distinta ordenada." },
    { q: "Calcula el vértice de y = x² + 6x + 5.", sol: "x = −6 / 2 = −3; y = 9 − 18 + 5 = −4. Vértice (−3, −4)." },
    { q: "¿Dónde corta y = x² − 5x + 6 a los ejes?", sol: "Eje X: x = 2 y x = 3. Eje Y: (0, 6)." },
    { q: "Sin resolver, ¿cuántos cortes con el eje X tiene y = x² + 2x + 5?", sol: "Δ = 4 − 20 = −16 < 0: ninguno." },
    { q: "Una pelota sigue h = −5t² + 10t. ¿Cuál es la altura máxima y cuándo la alcanza?", sol: "t = 1 s; h = −5 + 10 = 5 m." },
    { q: "Con 40 m de valla, ¿qué rectángulo tiene más área?", sol: "A = x(20 − x); vértice x = 10: un cuadrado de 10 × 10 = 100 m²." },
  ];
  T.quiz.push(
    { q: "La pendiente de la recta por (1, 2) y (3, 8) es…", o: ["3", "2", "6"], a: 0, e: "(8 − 2) / (3 − 1) = 3." },
    { q: "Si Δ = 0, la parábola…", o: ["toca el eje X en el vértice", "no corta el eje X", "corta dos veces"], a: 0, e: "Una solución doble." },
    { q: "En y = 1,2x + 3 (taxi), el 3 es…", o: ["la bajada de bandera", "el precio por km", "los km"], a: 0, e: "Parte fija: ordenada en el origen." },
    { q: "Un tramo horizontal en una gráfica distancia-tiempo indica…", o: ["que está parado", "que va muy rápido", "que vuelve"], a: 0, e: "La distancia no cambia." },
    { q: "La altura máxima de h = −5t² + 20t es…", o: ["20 m", "10 m", "4 m"], a: 0, e: "Vértice en t = 2." },
  );
  T.tarjetas.push(
    ["Pendiente con dos puntos", "m = (y₂ − y₁) / (x₂ − x₁)"],
    ["Discriminante", "Δ = b² − 4ac: >0 dos cortes, =0 uno, <0 ninguno."],
    ["Máximo o mínimo", "Está en el vértice de la parábola: x = −b / 2a."],
  );
};
