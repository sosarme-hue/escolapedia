// Matemáticas A 4º ESO · Ecuaciones: ampliación a nivel de libro de texto (enfoque aplicado).
const { tabla } = require("./_amplia");
const tras = (T, titulo, ...nuevos) => {
  const i = T.bloques.findIndex((b) => b.html.includes(`<h3>${titulo}</h3>`));
  if (i < 0) throw new Error(`_mata-ecuaciones: no encuentro «${titulo}»`);
  T.bloques.splice(i + 1, 0, ...nuevos);
};

module.exports = (T) => {
  T.minutos = 60;
  T.objetivos.push("Seguir un método ordenado para plantear problemas con ecuaciones", "Resolver problemas de edades, dinero, mezclas y geometría");

  tras(T, "Ecuaciones de primer grado", {
    html: `<h3>Ecuaciones con denominadores, paso a paso</h3><p>Las fracciones asustan, pero se eliminan con un solo paso: se multiplican <b>todos los términos</b> de la ecuación por el <b>mínimo común múltiplo</b> de los denominadores. Por ejemplo, en x/2 + x/3 = 10, el m.c.m. es 6: 3x + 2x = 60, luego 5x = 60 y x = 12. Hay que tener cuidado con dos cosas: multiplicar también los términos que no tienen denominador, y <mark>poner paréntesis</mark> cuando el numerador tiene varios términos, porque un signo menos delante de la fracción afecta a todo el numerador.</p><div class="formula"><span>(x − 1)/4 − (x − 3)/6 = 1 → 3(x − 1) − 2(x − 3) = 12 → x = 9</span></div>`,
    video: { id: "qud71ShXTK4", titulo: "Cómo solucionar ecuaciones de primer grado con fracciones, ejemplo 1", canal: "Matemáticas profe Alex", vistas: 5718843, megusta: 105022 },
  }, {
    html: `<h3>Soluciones especiales</h3><p>Casi todas las ecuaciones de primer grado tienen una solución, pero hay dos casos especiales. Si al simplificar queda algo imposible, como 0 = 5, la ecuación <b>no tiene solución</b>: por ejemplo, x + 2 = x + 7. Si queda algo que siempre es cierto, como 0 = 0, la ecuación tiene <b>infinitas soluciones</b>, porque cualquier número la cumple: es una <mark>identidad</mark>, como 2(x + 1) = 2x + 2. Reconocer estos casos evita pasarse minutos buscando un valor que no existe.</p>`,
  });

  tras(T, "Ecuaciones incompletas: sin fórmula", {
    html: `<h3>Cómo plantear un problema en cinco pasos</h3><p>Resolver problemas con ecuaciones es como traducir de un idioma a otro. 1) <b>Lee</b> el enunciado dos veces y localiza lo que se pregunta. 2) <b>Elige la incógnita</b>: escribe «x = …» con palabras. 3) <b>Plantea</b> la ecuación traduciendo cada frase. 4) <b>Resuelve</b>. 5) <b>Comprueba e interpreta</b>: sustituye en el enunciado (no solo en la ecuación) y descarta las soluciones sin sentido, como una edad negativa o 3,5 personas. Organizar los datos en una <mark>tabla</mark> ayuda mucho en los problemas de edades y de mezclas.</p>`,
    video: { id: "VyNn_4-Yxd8", titulo: "Resolver problemas de ecuaciones: edades", canal: "Susi Profe", vistas: 1119328, megusta: 24123 },
  }, {
    html: `<h3>Problemas de edades y de números</h3><p>En los problemas de <b>edades</b> hay que recordar que todos cumplen años a la vez: si ahora tienes x años, dentro de 5 tendrás x + 5, y hace 3 tenías x − 3; lo mismo para cualquier otra persona. Una tabla con las columnas «hoy», «dentro de…» o «hace…» evita errores. En los problemas de <b>números</b> se traducen frases como «tres números consecutivos» (x, x + 1, x + 2) o «un número y su cuadrado» (x y x²). Cuando aparece un cuadrado, la ecuación es de <mark>segundo grado</mark> y puede tener dos soluciones válidas.</p>${tabla(["", "Hoy", "Dentro de 10 años"], [["Madre", "x + 26", "x + 36"], ["Hija", "x", "x + 10"]])}`,
  }, {
    html: `<h3>Problemas de dinero, mezclas y geometría</h3><p>En los problemas de <b>dinero</b>, el total es precio por cantidad: si compras x camisetas a 12 € y 3 gorras a 8 €, gastas 12x + 24. En las <b>mezclas</b>, se suman cantidades y costes por separado: kilos con kilos y euros con euros. En los de <b>geometría</b>, se usan las fórmulas de perímetros y áreas; un rectángulo cuyo largo es el doble que su ancho tiene perímetro 2x + 2·2x = 6x. Y en los de <b>repartos</b>, la suma de las partes es el total. En todos los casos, la ecuación sale de una <mark>igualdad</mark> que el enunciado da: «en total gasta», «el área es», «entre los dos tienen».</p>`,
  });

  T.ejemplos = [
    { enunciado: "Resuelve x/2 − (x − 4)/3 = 3.", pasos: ["m.c.m. de 2 y 3: 6. Multiplica todo: 3x − 2(x − 4) = 18.", "Quita paréntesis: 3x − 2x + 8 = 18.", "x = 10. Comprueba: 5 − 2 = 3."], resultado: "x = 10." },
    { enunciado: "Una madre tiene 26 años más que su hija. Dentro de 10 años, la edad de la madre será el doble de la de la hija. ¿Qué edades tienen?", pasos: ["Hija x, madre x + 26. Dentro de 10 años: x + 10 y x + 36.", "x + 36 = 2(x + 10).", "x + 36 = 2x + 20, x = 16."], resultado: "Hija 16 años, madre 42." },
    { enunciado: "Un campo rectangular mide 10 m más de largo que de ancho y tiene 600 m² de área. ¿Cuáles son sus dimensiones?", pasos: ["Ancho x, largo x + 10: x(x + 10) = 600.", "x² + 10x − 600 = 0: x = (−10 ± 50)/2, es decir, x = 20 o x = −30.", "Se descarta −30 por ser una longitud."], resultado: "20 m de ancho y 30 m de largo." },
  ];

  T.errores = [
    "Multiplicar por el m.c.m. solo los términos que tienen denominador.",
    "No poner paréntesis en un numerador con varios términos precedido de un signo menos.",
    "En los problemas de edades, sumar los años solo a una de las personas.",
    "Comprobar la solución en la ecuación en vez de en el enunciado.",
    "Aceptar soluciones sin sentido, como longitudes negativas o personas con decimales.",
  ];

  T.ejercicios = [
    { q: "Resuelve 5(x − 2) − 3(x + 1) = 7.", sol: "5x − 10 − 3x − 3 = 7, 2x = 20, x = 10." },
    { q: "Resuelve x/3 + x/6 = 9.", sol: "2x + x = 54, x = 18." },
    { q: "Resuelve (2x + 1)/5 = (x − 1)/2.", sol: "4x + 2 = 5x − 5, x = 7." },
    { q: "¿Cuántas soluciones tiene 3(x + 2) = 3x + 6? ¿Y 2x + 1 = 2x + 4?", sol: "La primera, infinitas (identidad). La segunda, ninguna." },
    { q: "Resuelve x² − 7x + 10 = 0 y 2x² − 18 = 0.", sol: "x = 2 y x = 5; x = ±3." },
    { q: "La suma de tres números consecutivos es 96. ¿Cuáles son?", sol: "x + x + 1 + x + 2 = 96, x = 31: 31, 32 y 33." },
    { q: "Pedro tiene 3 veces la edad de su sobrino. Dentro de 12 años tendrá el doble. ¿Qué edades tienen?", sol: "3x + 12 = 2(x + 12), x = 12: sobrino 12 y Pedro 36." },
    { q: "Por 4 entradas de cine y 3 palomitas se pagan 41 €. Si las palomitas cuestan 3 €, ¿cuánto cuesta cada entrada?", sol: "4x + 9 = 41, x = 8 €." },
    { q: "Se reparten 120 € entre tres hermanos: el mediano recibe el doble que el pequeño y el mayor 20 € más que el mediano. ¿Cuánto recibe cada uno?", sol: "x + 2x + 2x + 20 = 120, x = 20: 20 €, 40 € y 60 €." },
    { q: "El área de un cuadrado aumenta en 33 m² si su lado crece 3 m. ¿Cuál era el lado?", sol: "(x + 3)² − x² = 33, 6x + 9 = 33, x = 4 m." },
  ];

  T.quiz.push(
    { q: "Para quitar denominadores en x/4 + x/6 = 5 se multiplica por…", o: ["10", "12", "24"], a: 1, e: "m.c.m.(4, 6) = 12." },
    { q: "Si al resolver queda 0 = 0, la ecuación tiene…", o: ["ninguna solución", "una solución", "infinitas soluciones"], a: 2, e: "Es una identidad." },
    { q: "Si hoy tienes x años, hace 4 años tenías…", o: ["x + 4", "x − 4", "4x"], a: 1, e: "Se restan." },
    { q: "Tres números pares consecutivos son…", o: ["x, x + 1, x + 2", "x, x + 2, x + 4", "2x, 3x, 4x"], a: 1, e: "Van de 2 en 2." },
    { q: "La comprobación de un problema se hace en…", o: ["la ecuación", "el enunciado", "la calculadora"], a: 1, e: "Por si se planteó mal." },
  );

  T.tarjetas.push(
    ["Quitar denominadores", "Multiplicar todos los términos por el m.c.m."],
    ["Identidad", "Igualdad que se cumple para cualquier valor de x (0 = 0)."],
    ["Pasos de un problema", "Leer, elegir la incógnita, plantear, resolver y comprobar."],
  );
};
