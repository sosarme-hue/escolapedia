// Matemáticas 1º ESO · Ecuaciones de primer grado. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, formula, balanza, resumen, C, RD, DECRET, REV, vb, vg } = require("./_eso1L2");

const partes = lienzo("Partes de una ecuación: primer miembro, segundo miembro, términos e incógnita en 3x más 5 igual a 2x más 9", `
  ${tx(130, 70, "3x + 5 = 2x + 9", { fs: 26, fam: D })}
  <path d="M30 84 H112 M150 84 H232" stroke="var(--muted)" stroke-width="2"/>${tx(71, 102, "1.er miembro", { fs: 11.5, c: "var(--pen)" })}${tx(191, 102, "2.º miembro", { fs: 11.5, c: "var(--red)" })}
  ${tx(130, 136, "términos: 3x, 5, 2x, 9", { fs: 12.5 })}${tx(130, 160, "incógnita: x · grado 1", { fs: 12.5, c: "var(--leaf)" })}`);

const bal1 = balanza("Balanza: dos cajas x y 3 pesas equilibran 11 pesas; quitando 3 de cada lado y repartiendo entre 2, x vale 4", "2x + 3", "11", "−3 en los dos lados → 2x = 8 → x = 4");

const equivalentes = comparar("Ecuaciones equivalentes: sumar o restar lo mismo y multiplicar o dividir por lo mismo en los dos miembros", [
  ["Sumar / restar", ["x + 4 = 10", "−4 en los dos", "x = 6"], "var(--pen)"],
  ["Multiplicar / dividir", ["3x = 12", ": 3 en los dos", "x = 4"], "var(--red)"],
], "Reglas de equivalencia");

const transponer = cajas("Transponer términos: lo que suma pasa restando, lo que resta pasa sumando, lo que multiplica pasa dividiendo y lo que divide pasa multiplicando", [
  ["+ a", ["pasa − a"], "var(--pen)"], ["− a", ["pasa + a"], "var(--leaf)"], ["· a", ["pasa : a"], "var(--sun)"], [": a", ["pasa · a"], "var(--red)"],
], "Transponer");

const metodo = pasos("Pasos para resolver una ecuación de primer grado", ["Quitar paréntesis", "Quitar denominadores (mcm)", "x a un lado, números al otro", "Reducir términos semejantes", "Despejar x y comprobar"], "Método");

const ejemplo = pasos("Ejemplo resuelto: 5x menos 7 igual a 2x más 8 da x igual a 5", ["5x − 7 = 2x + 8", "5x − 2x = 8 + 7", "3x = 15", "x = 15 : 3 = 5", "Comprobar: 18 = 18 ✓"], "Paso a paso");

const parentesis = pasos("Ecuación con paréntesis: 3 por x menos 2 igual a x más 4 da x igual a 5", ["3(x − 2) = x + 4", "3x − 6 = x + 4", "3x − x = 4 + 6", "2x = 10 → x = 5"], "Con paréntesis");

const denominadores = pasos("Ecuación con denominadores: x medios más x tercios igual a 10; se multiplica por el mcm 6", ["x/2 + x/3 = 10", "mcm(2, 3) = 6: · 6", "3x + 2x = 60", "5x = 60 → x = 12"], "Con denominadores");

const casos = cajas("Casos especiales: una solución, ninguna solución o infinitas soluciones", [
  ["Una solución", ["2x = 6", "x = 3"], "var(--leaf)"], ["Sin solución", ["0x = 5", "imposible"], "var(--red)"],
  ["Infinitas", ["0x = 0", "identidad"], "var(--pen)"], ["x = 0", ["4x = 0", "¡es solución!"], "var(--sun)"],
], "Tipos de ecuaciones");

const plantear = pasos("Cuatro pasos para resolver problemas con ecuaciones", ["Leer y elegir la incógnita", "Plantear la ecuación", "Resolverla", "Comprobar y responder"], "Problemas");

const edades = lienzo("Problema de edades en una tabla: hoy y dentro de 5 años; la madre tendrá el triple de la edad del hijo", `
  ${[["", "Hoy", "En 5 años"], ["Hijo", "x", "x + 5"], ["Madre", "x + 30", "x + 35"]].map((f, j) => f.map((v, i) => `<rect x="${14 + i * 78}" y="${16 + j * 34}" width="76" height="30" rx="5" fill="${j === 0 || i === 0 ? "var(--pen)" : "var(--card)"}" fill-opacity="${j === 0 || i === 0 ? 0.18 : 1}" stroke="var(--line)"/>${tx(52 + i * 78, 36 + j * 34, v, { fs: 13, fam: j && i ? D : undefined, max: 70 })}`).join("")).join("")}
  ${tx(130, 140, "x + 35 = 3(x + 5)", { fs: 16, fam: D, c: "var(--red)" })}${tx(130, 164, "→ x = 10 años", { fs: 13, c: "var(--leaf)" })}`, 176);

const geometria = lienzo("Problema geométrico: un rectángulo con la base el doble que la altura y perímetro 36", `
  <rect x="40" y="36" width="140" height="70" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2.5"/>
  ${tx(110, 28, "2x", { fs: 14, c: "var(--leaf)", fam: D })}${tx(196, 76, "x", { fs: 14, c: "var(--leaf)", fam: D, a: "start" })}
  ${tx(130, 136, "2x + x + 2x + x = 36", { fs: 15, fam: D })}${tx(130, 162, "6x = 36 → x = 6 cm", { fs: 13, c: "var(--red)" })}`, 176);

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Ecuaciones de primer grado",
  minutos: 110,
  objetivos: [
    "Reconocer los elementos de una ecuación y comprobar si un número es solución",
    "Obtener ecuaciones equivalentes y transponer términos",
    "Resolver ecuaciones de primer grado sencillas, con paréntesis y con denominadores",
    "Identificar ecuaciones sin solución o con infinitas soluciones",
    "Plantear y resolver problemas de la vida diaria mediante ecuaciones",
  ],
  claves: ["ecuación", "incógnita", "solución", "miembro", "ecuaciones equivalentes", "transponer", "despejar"],
  pregunta: {
    texto: "Pienso un número, lo multiplico por 3 y le sumo 7. Me da 31. ¿Qué número he pensado?",
    respuesta: "Llamamos x al número: <b>3x + 7 = 31</b>. Quitamos 7 de los dos lados: 3x = 24. Dividimos entre 3: <mark>x = 8</mark>. Comprobamos: 3 · 8 + 7 = 31 ✓. Una <b>ecuación</b> es una adivinanza con un número escondido.",
  },
  lectura: {
    titulo: "El epitafio de Diofanto",
    html: `<p>Diofanto de Alejandría, que vivió en el siglo III, es considerado uno de los padres del álgebra. De su vida sabemos muy poco, pero se ha conservado un acertijo que, según la tradición, estaba escrito en su tumba:</p><p><i>«Caminante: aquí yacen los restos de Diofanto. Su infancia duró una sexta parte de su vida. Después de una doceava parte más, le creció la barba. Pasó una séptima parte más y se casó. Cinco años después tuvo un hijo, que vivió la mitad que su padre. Cuatro años después de la muerte de su hijo, murió Diofanto. ¿Cuántos años vivió?»</i></p><p>Si llamamos x a los años que vivió, el acertijo se convierte en una ecuación: x/6 + x/12 + x/7 + 5 + x/2 + 4 = x. Parece complicada, pero con lo que aprenderás en este tema la resolverás en pocos pasos (la solución es 84 años).</p><p>Las ecuaciones son una de las herramientas más útiles de las matemáticas: sirven para averiguar un dato desconocido a partir de otros que sí conocemos. Se usan para calcular precios, edades, distancias, mezclas, tiempos… y, en ciencias e ingeniería, para casi todo.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 ¿Qué es una ecuación?</h3><p>Una <b>ecuación</b> es una igualdad entre dos expresiones algebraicas que solo se cumple para algunos valores de las letras. La letra desconocida se llama <b>incógnita</b>, y el valor que hace cierta la igualdad es la <b>solución</b>.</p><p>Elementos de una ecuación como 3x + 5 = 2x + 9:</p><ul><li><b>Miembros</b>: la expresión a la izquierda del igual (3x + 5) es el primer miembro, y la de la derecha (2x + 9), el segundo.</li><li><b>Términos</b>: cada sumando de los miembros: 3x, 5, 2x y 9. Los que llevan x son términos en x, y los demás, términos independientes.</li><li><b>Grado</b>: el mayor exponente de la incógnita. En este tema todas son de <b>primer grado</b>: la x aparece con exponente 1.</li></ul><p>Para <b>comprobar</b> si un número es solución, se sustituye: con x = 4, 3 · 4 + 5 = 17 y 2 · 4 + 9 = 17. Como dan lo mismo, x = 4 es la solución.</p>`, svg: partes },
    { html: `<h3>1.2 La ecuación como una balanza</h3><p>Una ecuación es como una <b>balanza en equilibrio</b>. En 2x + 3 = 11, en un platillo hay dos cajas iguales de peso desconocido y 3 pesas de un kilo, y en el otro, 11 pesas.</p><p>La balanza sigue equilibrada si hacemos <b>lo mismo en los dos platillos</b>:</p><ul><li>Quitamos 3 pesas de cada lado: 2x = 8.</li><li>Si dos cajas pesan 8 kg, una pesa la mitad: dividimos los dos lados entre 2 y x = 4.</li></ul><p>Esta idea es la clave de todo el tema. Lo que no se puede hacer es cambiar solo un lado: si quitas 3 pesas de un platillo y no del otro, la balanza se desequilibra y la igualdad deja de ser cierta. Al resolver ecuaciones «despejamos» la incógnita, es decir, conseguimos dejarla sola en un platillo.</p>`, svg: bal1 },
    { html: `<h3>1.3 Ecuaciones equivalentes</h3><p>Dos ecuaciones son <b>equivalentes</b> si tienen la misma solución. Por ejemplo, 2x + 3 = 11, 2x = 8 y x = 4 son equivalentes. Resolver una ecuación es ir transformándola en otras equivalentes cada vez más sencillas hasta llegar a «x = número».</p><p>Hay dos reglas para obtener ecuaciones equivalentes:</p><ul><li><b>Regla de la suma</b>: si se suma o se resta el mismo número (o la misma expresión) a los dos miembros, se obtiene una ecuación equivalente. x + 4 = 10 → restando 4: x = 6.</li><li><b>Regla del producto</b>: si se multiplican o dividen los dos miembros por el mismo número distinto de cero, se obtiene una ecuación equivalente. 3x = 12 → dividiendo entre 3: x = 4.</li></ul><p>¿Por qué no se puede multiplicar por 0? Porque cualquier ecuación se convertiría en 0 = 0 y perderíamos la información.</p>`, svg: equivalentes },
    { html: `<h3>1.4 Transponer términos</h3><p>Aplicar las reglas de equivalencia una y otra vez es lento, así que en la práctica se usa un atajo llamado <b>transponer</b>: pasar un término de un miembro al otro haciendo la operación contraria.</p><ul><li>Lo que está <b>sumando</b> pasa al otro miembro <b>restando</b>: x + 7 = 12 → x = 12 − 7 = 5.</li><li>Lo que está <b>restando</b> pasa <b>sumando</b>: x − 4 = 9 → x = 9 + 4 = 13.</li><li>Lo que está <b>multiplicando</b> a todo un miembro pasa <b>dividiendo</b>: 5x = 30 → x = 30 : 5 = 6.</li><li>Lo que está <b>dividiendo</b> pasa <b>multiplicando</b>: x/3 = 7 → x = 7 · 3 = 21.</li></ul><p>Recuerda que transponer no es magia: es aplicar las reglas de la suma y del producto. Un error frecuente es cambiar el signo al pasar un número que multiplica: −2x = 10 da x = 10 : (−2) = −5, no x = 10 : 2.</p>`, svg: transponer, video: vb("ecuB") },
    { html: `<h3>2.1 Pasos para resolver una ecuación</h3><p>Para resolver cualquier ecuación de primer grado conviene seguir siempre el mismo orden:</p><ol><li><b>Quitar paréntesis</b> aplicando la propiedad distributiva.</li><li><b>Quitar denominadores</b> multiplicando los dos miembros por el mcm de los denominadores.</li><li><b>Agrupar</b>: los términos con x en un miembro (normalmente el izquierdo) y los números en el otro, transponiendo.</li><li><b>Reducir</b> los términos semejantes de cada miembro.</li><li><b>Despejar</b> la x dividiendo entre su coeficiente.</li><li><b>Comprobar</b> la solución sustituyéndola en la ecuación original.</li></ol><p>No todas las ecuaciones necesitan todos los pasos: si no hay paréntesis ni denominadores, se empieza por el tercero. Escribir cada paso en una línea nueva, con el signo = alineado, ayuda mucho a no cometer errores.</p>`, svg: metodo },
    { html: `<h3>2.2 Ecuaciones sencillas</h3><p>Empecemos por ecuaciones sin paréntesis ni denominadores. Resolvemos 5x − 7 = 2x + 8:</p><ul><li>Agrupar: los términos con x a la izquierda y los números a la derecha. El 2x pasa restando y el −7 pasa sumando: 5x − 2x = 8 + 7.</li><li>Reducir: 3x = 15.</li><li>Despejar: x = 15 : 3 = <mark>5</mark>.</li><li>Comprobar: 5 · 5 − 7 = 18 y 2 · 5 + 8 = 18 ✓.</li></ul><p>A veces la solución es un número negativo o una fracción, y está bien: 4x + 9 = x → 3x = −9 → x = −3. Y 2x = 7 → x = 7/2 = 3,5. Si la solución es una fracción, déjala simplificada.</p><p>Si la x queda con coeficiente negativo, puedes dividir directamente o cambiar el signo a los dos miembros: −x = 6 es lo mismo que x = −6.</p>`, svg: ejemplo },
    { html: `<h3>2.3 Ecuaciones con paréntesis</h3><p>Cuando hay paréntesis, lo primero es quitarlos con la propiedad distributiva, teniendo mucho cuidado con los signos. Resolvemos 3(x − 2) = x + 4:</p><ul><li>Quitar paréntesis: 3x − 6 = x + 4.</li><li>Agrupar: 3x − x = 4 + 6.</li><li>Reducir: 2x = 10.</li><li>Despejar: x = <mark>5</mark>. Comprobar: 3 · 3 = 9 y 5 + 4 = 9 ✓.</li></ul><p>Si delante del paréntesis hay un signo menos, cambian <b>todos</b> los signos de dentro: 10 − (2x − 3) = 7 → 10 − 2x + 3 = 7 → −2x = 7 − 13 → −2x = −6 → x = 3.</p><p>Con un número negativo delante, hay que multiplicar cada término: −2(x + 4) = −2x − 8. Es el momento en el que más errores se cometen, así que hazlo despacio.</p>`, svg: parentesis },
    { html: `<h3>2.4 Ecuaciones con denominadores</h3><p>Si la ecuación tiene fracciones, conviene <b>quitar los denominadores</b> multiplicando los dos miembros (es decir, <b>todos</b> los términos) por el <b>mcm</b> de los denominadores. Resolvemos x/2 + x/3 = 10:</p><ul><li>mcm(2, 3) = 6. Multiplicamos todo por 6: 6 · x/2 + 6 · x/3 = 6 · 10.</li><li>Simplificamos: 3x + 2x = 60.</li><li>Reducimos y despejamos: 5x = 60 → x = <mark>12</mark>.</li></ul><p>Cuidado con dos detalles. Primero, hay que multiplicar también los términos que no tienen denominador (el 10 se convierte en 60). Segundo, si el numerador tiene varios términos, hay que ponerlo entre paréntesis: (x + 1)/4 multiplicado por 4 da (x + 1), y si delante hay un menos, cambia los dos signos. Con la ecuación de Diofanto, el mcm de 6, 12, 7 y 2 es 84, y se llega a 9x = 756, es decir, x = 84.</p>`, svg: denominadores, video: vb("ecuB2") },
    { html: `<h3>2.5 Casos especiales</h3><p>Al resolver, normalmente se llega a una igualdad del tipo «número · x = número», con una única solución. Pero hay dos casos especiales:</p><ul><li><b>Sin solución</b>: si al reducir desaparece la x y queda una igualdad falsa, como 0 = 5, la ecuación <b>no tiene solución</b>. Ejemplo: 2x + 3 = 2x + 8 → 0x = 5. Ningún número multiplicado por 0 da 5.</li><li><b>Infinitas soluciones</b>: si desaparece la x y queda una igualdad cierta, como 0 = 0, <b>cualquier número</b> es solución. En realidad es una identidad: 2(x + 1) = 2x + 2 → 0x = 0.</li></ul><p>No hay que confundir estos casos con el de solución x = 0, que es perfectamente normal: 4x + 1 = 1 → 4x = 0 → x = 0. Comprobar: 4 · 0 + 1 = 1 ✓.</p>`, svg: casos },
    { html: `<h3>3.1 Plantear problemas con ecuaciones</h3><p>Las ecuaciones son muy útiles para resolver problemas en los que hay un dato desconocido. El método tiene cuatro pasos:</p><ol><li><b>Leer</b> con atención y <b>elegir la incógnita</b>: escribe claramente qué representa x («x = edad del hijo»). Si hay varias cantidades desconocidas, exprésalas todas en función de x.</li><li><b>Plantear</b> la ecuación traduciendo el enunciado al lenguaje algebraico.</li><li><b>Resolver</b> la ecuación.</li><li><b>Comprobar</b> que la solución cumple el enunciado (no solo la ecuación) y <b>responder</b> con una frase.</li></ol><p>Ejemplo: «La suma de tres números consecutivos es 72. ¿Cuáles son?». Incógnita: x = el menor. Los otros: x + 1 y x + 2. Ecuación: x + (x + 1) + (x + 2) = 72 → 3x + 3 = 72 → 3x = 69 → x = 23. Los números son <mark>23, 24 y 25</mark>. Comprobación: 23 + 24 + 25 = 72 ✓.</p>`, svg: plantear },
    { html: `<h3>3.2 Problemas de edades y de reparto</h3><p>En los problemas de <b>edades</b> ayuda mucho hacer una tabla con la edad de cada persona hoy, en el pasado y en el futuro. «Una madre tiene 30 años más que su hijo. Dentro de 5 años, tendrá el triple de su edad. ¿Qué edad tiene el hijo?».</p><p>Hijo hoy: x; madre hoy: x + 30. Dentro de 5 años: x + 5 y x + 35. Ecuación: x + 35 = 3(x + 5) → x + 35 = 3x + 15 → 20 = 2x → <mark>x = 10</mark>. El hijo tiene 10 años y la madre 40; en 5 años, 15 y 45 = 3 · 15 ✓.</p><p>En los problemas de <b>reparto</b>, todas las partes se expresan en función de una: «Reparte 90 € entre tres hermanos de modo que el mediano reciba el doble que el pequeño y el mayor 10 € más que el mediano». Pequeño: x; mediano: 2x; mayor: 2x + 10. x + 2x + 2x + 10 = 90 → 5x = 80 → x = 16. Reciben 16 €, 32 € y 42 €.</p>`, svg: edades },
    { html: `<h3>3.3 Problemas geométricos y de compras</h3><p>Muchos problemas de geometría se resuelven con ecuaciones usando las fórmulas de perímetros y áreas. «Un rectángulo tiene la base doble que la altura y su perímetro es 36 cm. ¿Cuánto miden sus lados?». Altura: x; base: 2x. Perímetro: 2x + x + 2x + x = 36 → 6x = 36 → x = 6. La altura mide <mark>6 cm</mark> y la base 12 cm.</p><p>En los problemas de <b>compras</b>, el precio total es precio unitario por cantidad. «Compro 3 cuadernos y un estuche de 4,50 €. Pago 13,50 €. ¿Cuánto cuesta cada cuaderno?». 3x + 4,50 = 13,50 → 3x = 9 → x = 3 €.</p><p>Un último consejo: antes de plantear, haz una <b>estimación</b> de la respuesta. Si te sale que un cuaderno cuesta 300 € o que una persona tiene −4 años, revisa: puede que la ecuación esté mal planteada aunque esté bien resuelta.</p>`, svg: geometria, video: vg("ecuV") },
  ],
  ejemplos: [
    { enunciado: "Resuelve: 7x − 4 = 3x + 12.", pasos: ["7x − 3x = 12 + 4.", "4x = 16.", "x = 4. Comprobar: 24 = 24 ✓."], resultado: "x = 4." },
    { enunciado: "Resuelve: 2(3x − 1) − 4 = 3(x + 2).", pasos: ["6x − 2 − 4 = 3x + 6.", "6x − 3x = 6 + 2 + 4.", "3x = 12."], resultado: "x = 4." },
    { enunciado: "Resuelve: (x + 1)/4 − 1 = x/6.", pasos: ["mcm(4, 6) = 12: 3(x + 1) − 12 = 2x.", "3x + 3 − 12 = 2x.", "3x − 2x = 9."], resultado: "x = 9." },
    { enunciado: "Resuelve: 5x + 2 = 5(x + 1).", pasos: ["5x + 2 = 5x + 5.", "0x = 3."], resultado: "No tiene solución." },
    { enunciado: "El triple de un número menos 8 es igual al número más 12. ¿Cuál es el número?", pasos: ["3x − 8 = x + 12.", "2x = 20."], resultado: "x = 10 (30 − 8 = 22 = 10 + 12 ✓)." },
    { enunciado: "Resuelve el acertijo de Diofanto: x/6 + x/12 + x/7 + 5 + x/2 + 4 = x.", pasos: ["mcm(6, 12, 7, 2) = 84: 14x + 7x + 12x + 420 + 42x + 336 = 84x.", "75x + 756 = 84x.", "756 = 9x."], resultado: "x = 84 años." },
  ],
  errores: [
    "Pasar un término de miembro sin cambiarle el signo.",
    "Al transponer un número que multiplica, cambiarle el signo: −2x = 10 da x = −5.",
    "Al quitar denominadores, no multiplicar los términos que no tienen fracción.",
    "No poner entre paréntesis un numerador con varios términos al quitar denominadores.",
    "Confundir «no tiene solución» con «la solución es 0».",
    "No comprobar la solución en el enunciado del problema.",
  ],
  ejercicios: [
    { nivel: "básico", q: "En la ecuación 4x − 1 = 2x + 7, indica los miembros, los términos y el grado.", sol: "1.er miembro 4x − 1; 2.º miembro 2x + 7; términos 4x, −1, 2x, 7; grado 1." },
    { nivel: "básico", q: "Comprueba si x = 2 es solución de 3x + 4 = 5x.", sol: "3 · 2 + 4 = 10 = 5 · 2 ✓. Sí." },
    { nivel: "básico", q: "Resuelve: x + 8 = 15; x − 6 = 2; 9 + x = 4.", sol: "x = 7; x = 8; x = −5." },
    { nivel: "básico", q: "Resuelve: 6x = 42; −3x = 21; x/5 = 4.", sol: "x = 7; x = −7; x = 20." },
    { nivel: "básico", q: "Resuelve: 2x + 5 = 17.", sol: "2x = 12 → x = 6." },
    { nivel: "básico", q: "Resuelve: 4x − 9 = 11.", sol: "4x = 20 → x = 5." },
    { nivel: "básico", q: "Resuelve: 5x = 2x + 18.", sol: "3x = 18 → x = 6." },
    { nivel: "básico", q: "Resuelve: 8 − x = 3.", sol: "−x = −5 → x = 5." },
    { nivel: "básico", q: "Resuelve: 3x + 1 = x + 9.", sol: "2x = 8 → x = 4." },
    { nivel: "básico", q: "Escribe dos ecuaciones equivalentes a x = 3.", sol: "Por ejemplo: x + 2 = 5 y 4x = 12." },
    { nivel: "básico", q: "El doble de un número más 3 es 21. ¿Qué número es?", sol: "2x + 3 = 21 → x = 9." },
    { nivel: "básico", q: "Resuelve: 7x + 2 = 2.", sol: "7x = 0 → x = 0." },
    { nivel: "medio", q: "Resuelve: 9x − 5 − 4x = 2x + 10.", sol: "5x − 5 = 2x + 10 → 3x = 15 → x = 5." },
    { nivel: "medio", q: "Resuelve: 4(x − 3) = 2x + 6.", sol: "4x − 12 = 2x + 6 → 2x = 18 → x = 9." },
    { nivel: "medio", q: "Resuelve: 15 − (3x + 1) = 2x − 6.", sol: "15 − 3x − 1 = 2x − 6 → −5x = −20 → x = 4." },
    { nivel: "medio", q: "Resuelve: 2(x + 3) − 3(x − 1) = 5.", sol: "2x + 6 − 3x + 3 = 5 → −x = −4 → x = 4." },
    { nivel: "medio", q: "Resuelve: x/3 + 2 = 6.", sol: "x/3 = 4 → x = 12." },
    { nivel: "medio", q: "Resuelve: x/2 − x/5 = 3.", sol: "· 10: 5x − 2x = 30 → x = 10." },
    { nivel: "medio", q: "Resuelve: (x − 2)/3 = (x + 1)/4.", sol: "· 12: 4(x − 2) = 3(x + 1) → 4x − 8 = 3x + 3 → x = 11." },
    { nivel: "medio", q: "Clasifica y resuelve: a) 3(x + 2) = 3x + 6; b) 4x − 1 = 4x + 2.", sol: "a) 0x = 0: infinitas soluciones. b) 0x = 3: sin solución." },
    { nivel: "medio", q: "La suma de dos números consecutivos es 47. ¿Cuáles son?", sol: "x + x + 1 = 47 → x = 23. Son 23 y 24." },
    { nivel: "medio", q: "Compro 4 bolígrafos y una libreta de 2,60 €. Pago 7,40 €. ¿Cuánto cuesta cada bolígrafo?", sol: "4x + 2,60 = 7,40 → 4x = 4,80 → x = 1,20 €." },
    { nivel: "medio", q: "El perímetro de un triángulo isósceles es 50 cm y la base mide 14 cm. ¿Cuánto mide cada lado igual?", sol: "2x + 14 = 50 → x = 18 cm." },
    { nivel: "avanzado", q: "Resuelve: 3(2x − 1) − (x + 4)/2 = 7.", sol: "· 2: 6(2x − 1) − (x + 4) = 14 → 12x − 6 − x − 4 = 14 → 11x = 24 → x = 24/11." },
    { nivel: "avanzado", q: "Un padre tiene 42 años y su hijo 12. ¿Cuántos años han de pasar para que el padre tenga el doble que el hijo?", sol: "42 + x = 2(12 + x) → 42 + x = 24 + 2x → x = 18 años." },
    { nivel: "avanzado", q: "Reparte 120 € entre tres personas de modo que la segunda reciba 10 € más que la primera y la tercera el doble que la primera.", sol: "x + (x + 10) + 2x = 120 → 4x = 110 → x = 27,50. Reciben 27,50 €, 37,50 € y 55 €." },
    { nivel: "avanzado", q: "En un corral hay gallinas y conejos: 20 cabezas y 56 patas. ¿Cuántos hay de cada?", sol: "Gallinas x, conejos 20 − x: 2x + 4(20 − x) = 56 → −2x = −24 → x = 12 gallinas y 8 conejos." },
    { nivel: "avanzado", q: "He gastado 1/3 de mi dinero en un libro y 1/4 en un cómic, y me quedan 15 €. ¿Cuánto tenía?", sol: "x − x/3 − x/4 = 15 → · 12: 12x − 4x − 3x = 180 → 5x = 180 → x = 36 €." },
    { nivel: "avanzado", q: "Un rectángulo tiene 4 cm más de base que de altura. Si su perímetro es 40 cm, halla su área.", sol: "2x + 2(x + 4) = 40 → 4x = 32 → x = 8. Base 12, altura 8: área 96 cm²." },
    { nivel: "avanzado", q: "Encuentra el error: «3x − 5 = x + 7 → 3x − x = 7 − 5 → 2x = 2 → x = 1».", sol: "Al pasar el −5 debe sumar: 3x − x = 7 + 5 → 2x = 12 → x = 6." },
  ],
  quiz: [
    { q: "En 2x + 3 = 9, la incógnita es…", o: ["2", "x", "3", "9"], a: 1, e: "La letra desconocida." },
    { q: "La solución de x + 5 = 12 es…", o: ["17", "7", "−7", "60"], a: 1, e: "12 − 5." },
    { q: "El primer miembro de 4x − 1 = 7 es…", o: ["7", "4x", "4x − 1", "x"], a: 2, e: "Lo que está a la izquierda." },
    { q: "Una ecuación de primer grado tiene la x con exponente…", o: ["0", "1", "2", "cualquiera"], a: 1, e: "Grado 1." },
    { q: "¿Es x = 3 solución de 2x − 1 = 5?", o: ["Sí", "No", "Depende", "Solo si x > 0"], a: 0, e: "6 − 1 = 5." },
    { q: "Lo que suma en un miembro pasa al otro…", o: ["sumando", "restando", "multiplicando", "dividiendo"], a: 1, e: "Operación contraria." },
    { q: "En 5x = 20, el 5 pasa…", o: ["restando", "dividiendo", "sumando", "multiplicando"], a: 1, e: "x = 20 : 5." },
    { q: "−4x = 12 →", o: ["x = 3", "x = −3", "x = 8", "x = 16"], a: 1, e: "12 : (−4)." },
    { q: "x/4 = 3 →", o: ["x = 12", "x = 3/4", "x = 7", "x = −1"], a: 0, e: "3 · 4." },
    { q: "3x + 2 = x + 10 →", o: ["x = 2", "x = 4", "x = 3", "x = 6"], a: 1, e: "2x = 8." },
    { q: "Primer paso con paréntesis:", o: ["despejar", "quitar paréntesis", "comprobar", "quitar denominadores"], a: 1, e: "Distributiva." },
    { q: "2(x − 3) =", o: ["2x − 3", "2x − 6", "2x + 6", "x − 6"], a: 1, e: "Multiplicar los dos términos." },
    { q: "Para quitar denominadores se multiplica por…", o: ["la suma", "el mcd", "el mcm", "el mayor"], a: 2, e: "mcm de los denominadores." },
    { q: "x/2 + x/2 = 6 →", o: ["x = 3", "x = 6", "x = 12", "x = 2"], a: 1, e: "x = 6." },
    { q: "Si al resolver sale 0x = 7, la ecuación…", o: ["tiene x = 0", "tiene x = 7", "no tiene solución", "tiene infinitas"], a: 2, e: "Ningún número cumple 0 · x = 7." },
    { q: "Si sale 0x = 0, la ecuación…", o: ["no tiene solución", "tiene infinitas soluciones", "x = 0", "x = 1"], a: 1, e: "Es una identidad." },
    { q: "Si sale 6x = 0…", o: ["no hay solución", "x = 0", "x = 6", "infinitas"], a: 1, e: "0 : 6 = 0." },
    { q: "«Tres números consecutivos» se escriben…", o: ["x, 2x, 3x", "x, x + 1, x + 2", "x, x + 2, x + 4", "3x"], a: 1, e: "De uno en uno." },
    { q: "El último paso al resolver un problema es…", o: ["elegir la x", "plantear", "comprobar y responder", "simplificar"], a: 2, e: "Revisar el enunciado." },
    { q: "Las ecuaciones equivalentes tienen…", o: ["los mismos términos", "la misma solución", "el mismo grado y nada más", "los mismos números"], a: 1, e: "Definición." },
  ],
  examen: [
    { q: "6x − 4 = 2x + 8 →", o: ["x = 1", "x = 3", "x = 2", "x = 4"], a: 1, e: "4x = 12." },
    { q: "3(x + 1) = 15 →", o: ["x = 4", "x = 5", "x = 14/3", "x = 6"], a: 0, e: "3x + 3 = 15." },
    { q: "10 − (x − 2) = 5 →", o: ["x = 7", "x = 3", "x = 13", "x = −7"], a: 0, e: "12 − x = 5." },
    { q: "x/3 − x/6 = 2 →", o: ["x = 6", "x = 12", "x = 4", "x = 18"], a: 1, e: "2x − x = 12." },
    { q: "4x + 1 = 4x − 3:", o: ["x = 1", "x = −1", "sin solución", "infinitas"], a: 2, e: "0x = −4." },
    { q: "La suma de un número y su triple es 48. El número es…", o: ["16", "12", "24", "8"], a: 1, e: "4x = 48." },
    { q: "Ana tiene 5 años más que Luis y entre los dos suman 33. Luis tiene…", o: ["14", "19", "16", "28"], a: 0, e: "2x + 5 = 33." },
    { q: "Un rectángulo de base 3x y altura x tiene 48 cm de perímetro. x =", o: ["6", "8", "12", "4"], a: 0, e: "8x = 48." },
  ],
  feynman: ["Por qué una ecuación se parece a una balanza", "Qué significa transponer un término y por qué funciona", "Cómo se quitan los denominadores de una ecuación", "Cuándo una ecuación no tiene solución o tiene infinitas"],
  figura: {
    titulo: "Las ecuaciones en un vistazo",
    svg: resumen("Resumen del tema de ecuaciones de primer grado", [
      ["Ecuación", "igualdad con incógnita · solución: la hace cierta", "var(--pen)"],
      ["Equivalencia", "mismo número en los dos miembros (+, −, ·, :)", "var(--leaf)"],
      ["Transponer", "+ ↔ −   · ↔ :   (al cambiar de miembro)", "var(--sun)"],
      ["Método", "paréntesis → denominadores → agrupar → despejar", "var(--inf)"],
      ["Problemas", "incógnita → plantear → resolver → comprobar", "var(--red)"],
    ]),
  },
  video: vg("ecuV"),
  mapa: mapa("ECUACIONES", "var(--red)", [
    ["Elementos", "miembros · términos · solución", "var(--pen)"],
    ["Resolver", "balanza · transponer", "var(--leaf)"],
    ["Tipos", "paréntesis · denominadores", "var(--sun)"],
    ["Problemas", "edades · repartos · geometría", "var(--red)"],
  ], 250),
  glosario: [
    ["Ecuación", "Igualdad que solo se cumple para algunos valores de la incógnita."],
    ["Incógnita", "Letra cuyo valor se quiere averiguar."],
    ["Solución", "Valor de la incógnita que hace cierta la igualdad."],
    ["Miembro", "Cada una de las dos expresiones separadas por el signo =."],
    ["Término", "Cada uno de los sumandos de un miembro."],
    ["Término independiente", "Término que no tiene incógnita."],
    ["Grado", "Mayor exponente de la incógnita."],
    ["Ecuaciones equivalentes", "Ecuaciones que tienen la misma solución."],
    ["Transponer", "Pasar un término de un miembro al otro con la operación contraria."],
    ["Despejar", "Dejar la incógnita sola en un miembro."],
    ["Comprobar", "Sustituir la solución para ver si cumple la igualdad."],
    ["Ecuación sin solución", "La que al reducir da una igualdad falsa como 0 = 5."],
    ["Identidad", "Igualdad que se cumple para cualquier valor (0 = 0)."],
  ],
  situacion: {
    titulo: "Escape room de ecuaciones",
    reto: "Vais a diseñar un pequeño «escape room» para otra clase en el que cada candado se abra con la solución de una ecuación o de un problema.",
    pasos: [
      "Elegid una historia (un tesoro, una misión espacial…) y decidid cuántas pruebas tendrá (entre 4 y 6).",
      "Inventad para cada prueba una ecuación o un problema cuya solución sea un número entero sencillo (el código del candado).",
      "Incluid al menos una ecuación con paréntesis, una con denominadores y un problema de edades o repartos.",
      "Resolved todas las pruebas, comprobad las soluciones e intercambiad el juego con otro grupo para revisarlo.",
      "Preparad las tarjetas, los candados (de papel o reales) y las pistas.",
    ],
    producto: "Un escape room completo con tarjetas de pruebas, solucionario y pistas.",
    evaluacion: ["Plantea ecuaciones correctas a partir de enunciados.", "Resuelve ecuaciones con paréntesis y denominadores sin errores.", "Comprueba las soluciones en el contexto.", "Diseña pruebas claras y creativas."],
  },
  tarjetas: [
    ["Ecuación", "Igualdad con incógnita"], ["Solución", "Valor que la hace cierta"], ["Equivalentes", "Misma solución"],
    ["Regla de la suma", "Sumar o restar lo mismo en los dos miembros"], ["Regla del producto", "Multiplicar o dividir lo mismo (≠ 0)"], ["Transponer +", "Pasa restando"],
    ["Transponer ·", "Pasa dividiendo (con su signo)"], ["Orden", "Paréntesis, denominadores, agrupar, despejar"], ["Denominadores", "Multiplicar todo por el mcm"],
    ["0x = 5", "Sin solución"], ["0x = 0", "Infinitas soluciones"], ["Problemas", "Incógnita, plantear, resolver, comprobar"],
  ],
  familias: ["Proponed acertijos de «pienso un número» y resolvedlos con ecuaciones.", "Calculad juntos edades de la familia: ¿cuándo tendrá alguien el doble de años que otro?", "Al comprar, plantead cuánto cuesta un producto si sabéis el total y el resto de precios.", "Usad una balanza de cocina para «ver» que hacer lo mismo en los dos lados mantiene el equilibrio."],
  profesores: {
    saberes: "Sentido algebraico: ecuaciones de primer grado con una incógnita, equivalencia, resolución algebraica y comprobación, ecuaciones sin solución o con infinitas; modelización de problemas mediante ecuaciones (RD 217/2022, Matemáticas 1º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Balanzas reales o virtuales para descubrir las reglas de equivalencia.", "Tarjetas de ecuaciones para jugar al dominó de soluciones.", "Escape room de ecuaciones entre grupos.", "Problemas históricos: Diofanto, papiro de Rhind («aha»)."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes (INTEF): ecuaciones de primer grado", url: "https://proyectodescartes.org/" }, { t: "Wikipedia: Diofanto de Alejandría", url: "https://es.wikipedia.org/wiki/Diofanto_de_Alejandría" }],
  revisado: REV,
};
