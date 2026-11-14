// Matemáticas 2º ESO · Ecuaciones de primer grado. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tx, lienzo, pasos, cajas, comparar, formula, resumen, flujo, balanza, baraja, psvg, pvid, pvg, C, RD, DECRET, REV } = require("./_eso2L2");

const tipos = comparar("Identidad y ecuación: la identidad se cumple siempre, la ecuación solo para algunos valores", [
  ["Identidad", ["2(x + 1) = 2x + 2", "cierta para", "cualquier x"], "var(--leaf)"],
  ["Ecuación", ["2x + 1 = 7", "cierta solo", "para x = 3"], "var(--red)"],
], "Igualdades con letras");

const partes = lienzo("Partes de una ecuación: miembros, términos, incógnita y solución", `
  ${tx(130, 56, "3x − 5 = x + 7", { fs: 22, fam: D })}
  <path d="M60 66 H120 M146 66 H206" stroke="var(--muted)" stroke-width="1.5"/>
  ${tx(90, 84, "1.er miembro", { fs: 11, c: "var(--pen)", max: 90 })}${tx(176, 84, "2.º miembro", { fs: 11, c: "var(--leaf)", max: 90 })}
  ${tx(130, 116, "incógnita: x · grado 1 · 4 términos", { fs: 12, c: "var(--muted)" })}${tx(130, 146, "solución: x = 6 (18 − 5 = 6 + 7)", { fs: 13, c: "var(--red)" })}`, 166);

const transposicion = comparar("Reglas de transposición de términos", [
  ["Suma ↔ resta", ["x + 4 = 10", "x = 10 − 4", "x = 6"], "var(--pen)"],
  ["Producto ↔ cociente", ["3x = 12", "x = 12 : 3", "x = 4"], "var(--red)"],
], "Transponer");

const sencillas = pasos("Resolver una ecuación con la incógnita en los dos miembros", ["5x − 3 = 2x + 9", "x a la izquierda: 5x − 2x = 9 + 3", "Reducir: 3x = 12", "Despejar: x = 12 : 3 = 4", "Comprobar: 17 = 17 ✔"], "Ecuación sencilla");

const parent = pasos("Ecuación con paréntesis: primero se quitan aplicando la propiedad distributiva", ["3(x − 2) − 2(x + 1) = 4", "3x − 6 − 2x − 2 = 4", "x − 8 = 4", "x = 12"], "Con paréntesis");

const denom = flujo("Ecuación con denominadores: multiplicar todo por el mcm", [
  ["x/2 + x/3 = 10", "ini"], ["mcm(2, 3) = 6", "proc"], ["6 · x/2 + 6 · x/3 = 60", "proc"], ["3x + 2x = 60", "proc"], ["5x = 60 → x = 12", "es"],
], "Con denominadores");

const casos = cajas("Ecuaciones sin solución y con infinitas soluciones", [
  ["Una solución", ["2x = 6", "x = 3"], "var(--leaf)"],
  ["Sin solución", ["0x = 5", "imposible"], "var(--red)"],
  ["Infinitas", ["0x = 0", "identidad"], "var(--pen)"],
  ["Ejemplo", ["2x + 1 = 2x + 4", "→ 0 = 3: sin sol."], "var(--sun)"],
], "¿Cuántas soluciones?");

const plantear = flujo("Pasos para resolver un problema con una ecuación", [
  ["Leer y entender", "ini"], ["Elegir la incógnita x", "proc"], ["Plantear la ecuación", "proc"], ["Resolver", "proc"], ["Comprobar e interpretar", "es"],
], "Plantear problemas");

const edades = lienzo("Problema de edades: dentro de 10 años, el padre tendrá el doble que su hijo", `
  ${[["", "hoy", "+10 años"], ["Hijo", "x", "x + 10"], ["Padre", "3x", "3x + 10"]].map((f, i) => f.map((v, j) => `<rect x="${20 + j * 74}" y="${18 + i * 32}" width="72" height="30" fill="${i === 0 || j === 0 ? "var(--pen)" : "var(--card)"}" fill-opacity="${i === 0 || j === 0 ? 0.2 : 1}" stroke="var(--ink)" stroke-width="1.2"/>${tx(56 + j * 74, 38 + i * 32, v, { fs: 13, fam: j && i ? D : undefined, max: 66 })}`).join("")).join("")}
  ${tx(130, 134, "3x + 10 = 2(x + 10)", { fs: 15, fam: D, c: "var(--red)" })}${tx(130, 160, "x = 10: hijo 10 años, padre 30", { fs: 12, c: "var(--muted)" })}`, 172);

const moviles = lienzo("Problema de móviles que se acercan: las distancias recorridas suman la distancia total", `
  <path d="M20 70 H240" stroke="var(--ink)" stroke-width="2"/>
  <circle cx="20" cy="70" r="6" fill="var(--pen)"/><circle cx="240" cy="70" r="6" fill="var(--red)"/><circle cx="140" cy="70" r="5" fill="var(--leaf)"/>
  <path d="M24 50 H134" stroke="var(--pen)" stroke-width="2.4" marker-end="url(#mv2)"/><path d="M236 50 H146" stroke="var(--red)" stroke-width="2.4" marker-end="url(#mv2)"/>
  <defs><marker id="mv2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="var(--ink)"/></marker></defs>
  ${tx(78, 40, "80 km/h · t", { fs: 11.5, c: "var(--pen)", max: 100 })}${tx(190, 40, "100 km/h · t", { fs: 11.5, c: "var(--red)", max: 100 })}${tx(130, 98, "distancia total 360 km", { fs: 12, c: "var(--muted)" })}
  ${tx(130, 132, "80t + 100t = 360", { fs: 16, fam: D })}${tx(130, 158, "t = 2 h: se cruzan a 160 km de A", { fs: 12, c: "var(--leaf)" })}`, 172);

const mezclas = cajas("Otros tipos de problemas frecuentes", [
  ["Números", ["consecutivos", "x, x + 1, x + 2"], "var(--pen)"],
  ["Geometría", ["perímetros", "y ángulos"], "var(--leaf)"],
  ["Mezclas", ["precio · cantidad", "= coste"], "var(--sun)"],
  ["Repartos", ["partes con", "relaciones"], "var(--red)"],
], "Más problemas");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Ecuaciones de primer grado",
  minutos: 110,
  objetivos: [
    "Distinguir identidades y ecuaciones y reconocer sus elementos",
    "Obtener ecuaciones equivalentes y aplicar las reglas de transposición",
    "Resolver ecuaciones de primer grado con paréntesis y denominadores",
    "Reconocer ecuaciones sin solución y con infinitas soluciones",
    "Plantear y resolver problemas mediante ecuaciones y comprobar la solución",
  ],
  claves: ["ecuación", "identidad", "incógnita", "solución", "ecuaciones equivalentes", "transposición", "mcm"],
  pregunta: {
    texto: "Si a un número le sumas su mitad y su tercera parte obtienes 22. ¿Qué número es?",
    respuesta: "x + x/2 + x/3 = 22. Multiplicando por 6: 6x + 3x + 2x = 132 → 11x = 132 → <mark>x = 12</mark>. Comprobación: 12 + 6 + 4 = 22.",
  },
  lectura: {
    titulo: "El epitafio de Diofanto",
    html: `<p>Diofanto de Alejandría, que vivió en el siglo III, es considerado uno de los padres del álgebra. De su vida sabemos muy poco, pero se conserva un acertijo, escrito en forma de epitafio, que permite calcular su edad:</p><p><i>«Caminante: aquí yacen los restos de Diofanto. Su infancia ocupó la sexta parte de su vida; después, durante la doceava parte, su barba creció. Pasó aún una séptima parte de su vida antes de casarse, y cinco años después tuvo un hijo, que vivió la mitad de lo que vivió su padre. Tras la muerte de su hijo, Diofanto vivió cuatro años más.»</i></p><p>Si llamamos x a la edad de Diofanto, el epitafio se convierte en una <b>ecuación</b>: x/6 + x/12 + x/7 + 5 + x/2 + 4 = x. Resolverla es más fácil de lo que parece, y lo harás tú mismo en los ejercicios de este tema.</p><p>Las ecuaciones son la herramienta más usada de las matemáticas para resolver problemas: traducimos la situación al lenguaje algebraico, aplicamos unas reglas sencillas para despejar la incógnita y comprobamos que la respuesta tiene sentido.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Igualdades, identidades y ecuaciones</h3><p>Una <b>igualdad algebraica</b> está formada por dos expresiones unidas por el signo =. Hay dos tipos:</p><ul><li>Una <b>identidad</b> es cierta para <b>cualquier valor</b> de las letras: 2(x + 1) = 2x + 2. Las identidades notables del tema anterior son identidades.</li><li>Una <b>ecuación</b> solo es cierta para <b>algunos valores</b>: 2x + 1 = 7 solo se cumple si x = 3.</li></ul><p>Resolver una ecuación es encontrar los valores que la hacen cierta, que se llaman <b>soluciones</b>. Para comprobar si un número es solución, se sustituye y se ve si los dos miembros dan lo mismo: ¿es x = 4 solución de 3x − 2 = x + 6? 3 · 4 − 2 = 10 y 4 + 6 = 10. Sí lo es.</p><p>Si se sustituye un valor y no coinciden, no es solución. Así, x = 2 no es solución: 4 ≠ 8.</p>`, svg: tipos },
    { html: `<h3>1.2 Elementos de una ecuación</h3><p>En la ecuación 3x − 5 = x + 7 distinguimos:</p><ul><li><b>Miembros</b>: las expresiones a cada lado del signo igual. El primer miembro es 3x − 5 y el segundo, x + 7.</li><li><b>Términos</b>: cada uno de los sumandos: 3x, −5, x y 7.</li><li><b>Incógnita</b>: la letra cuyo valor buscamos, x.</li><li><b>Grado</b>: el mayor exponente de la incógnita. Aquí es 1: es una ecuación de <b>primer grado</b>.</li><li><b>Solución</b>: el valor que cumple la igualdad. Aquí, x = 6, porque 3 · 6 − 5 = 13 y 6 + 7 = 13.</li></ul><p>Las ecuaciones de primer grado tienen, como mucho, una solución. En el tema siguiente verás que las de segundo grado, con x², pueden tener dos.</p>`, svg: partes },
    { html: `<h3>1.3 Ecuaciones equivalentes: la balanza</h3><p>Una ecuación funciona como una <b>balanza en equilibrio</b>: los dos platos pesan lo mismo. Si hacemos lo mismo en los dos platos, el equilibrio se mantiene. De ahí salen dos reglas que producen <b>ecuaciones equivalentes</b> (con la misma solución):</p><ul><li><b>Regla de la suma</b>: si se suma o resta el mismo número (o expresión) a los dos miembros, se obtiene una ecuación equivalente.</li><li><b>Regla del producto</b>: si se multiplican o dividen los dos miembros por el mismo número distinto de cero, también.</li></ul><p>Ejemplo: x + 4 = 10. Restando 4 en los dos miembros: x + 4 − 4 = 10 − 4, es decir, <mark>x = 6</mark>. Y 3x = 12: dividiendo entre 3, x = 4.</p><p>Resolver una ecuación es aplicar estas reglas una y otra vez hasta llegar a una ecuación del tipo x = número.</p>`, svg: psvg("ecuaciones", 1) },
    { html: `<h3>1.4 La transposición de términos</h3><p>En la práctica, las reglas anteriores se aplican con un atajo llamado <b>transposición</b>: un término puede «pasar» al otro miembro haciendo la operación contraria.</p><ul><li>Lo que está <b>sumando</b> pasa <b>restando</b>, y al revés: x + 4 = 10 → x = 10 − 4.</li><li>Lo que está <b>multiplicando</b> a todo un miembro pasa <b>dividiendo</b>, y al revés: 3x = 12 → x = 12 : 3; x/5 = 2 → x = 2 · 5.</li></ul><p>Cuidado con el signo de un coeficiente: en −2x = 8, el −2 está multiplicando y pasa dividiendo <b>con su signo</b>: x = 8 : (−2) = −4. No se cambia el signo al pasar dividiendo.</p><p>Tampoco se puede pasar un número que multiplica solo a una parte: en 3x + 1 = 7, el 3 no puede pasar dividiendo hasta que no se haya pasado antes el 1.</p>`, svg: transposicion },
    { html: `<h3>2.1 Resolver ecuaciones sencillas</h3><p>Cuando la incógnita aparece en los dos miembros, se sigue este orden:</p><ol><li>Se pasan los términos con x a un miembro (normalmente el izquierdo) y los números al otro.</li><li>Se reducen los términos semejantes de cada miembro.</li><li>Se despeja la x dividiendo entre su coeficiente.</li><li>Se comprueba sustituyendo en la ecuación original.</li></ol><p>Ejemplo: 5x − 3 = 2x + 9. Transponiendo: 5x − 2x = 9 + 3. Reduciendo: 3x = 12. Despejando: <mark>x = 4</mark>. Comprobación: 5 · 4 − 3 = 17 y 2 · 4 + 9 = 17. ✔</p><p>La solución puede ser negativa o una fracción: 4x = 6 → x = 6/4 = 3/2. Déjala como fracción irreducible mejor que como decimal aproximado.</p>`, svg: sencillas, video: pvid("ecuaciones", 2) },
    { html: `<h3>2.2 Ecuaciones con paréntesis</h3><p>Si la ecuación tiene paréntesis, lo primero es <b>quitarlos</b> aplicando la propiedad distributiva. Hay que tener especial cuidado con los signos menos delante del paréntesis: cambian el signo de todos los términos de dentro.</p><p>Ejemplo: 3(x − 2) − 2(x + 1) = 4.</p><ol><li>Quitar paréntesis: 3x − 6 − 2x − 2 = 4. Fíjate en que −2 · (+1) = −2.</li><li>Reducir: x − 8 = 4.</li><li>Despejar: <mark>x = 12</mark>.</li></ol><p>Si hay corchetes y paréntesis, se empieza por los de dentro: 2[x − 3(x − 1)] = 10 → 2[x − 3x + 3] = 10 → 2[−2x + 3] = 10 → −4x + 6 = 10 → −4x = 4 → x = −1.</p><p>Comprueba la solución en la ecuación <b>original</b>, no en una intermedia: así detectas errores al quitar paréntesis.</p>`, svg: parent, video: pvid("ecuaciones", 3) },
    { html: `<h3>2.3 Ecuaciones con denominadores</h3><p>Si hay fracciones, se eliminan los denominadores <b>multiplicando todos los términos por el mcm</b> de los denominadores. Así se obtiene una ecuación equivalente sin fracciones.</p><p>Ejemplo: x/2 + x/3 = 10. mcm(2, 3) = 6. Multiplicando cada término por 6: 3x + 2x = 60 → 5x = 60 → <mark>x = 12</mark>.</p><p>Hay que multiplicar <b>todos</b> los términos, también los que no tienen denominador. Y si un numerador tiene varios términos, conviene ponerlo entre paréntesis antes de multiplicar, sobre todo si delante hay un signo menos:</p><p>(x + 1)/4 − (x − 2)/6 = 1 → mcm = 12 → 3(x + 1) − 2(x − 2) = 12 → 3x + 3 − 2x + 4 = 12 → x = 5.</p><p>Si no se pone el paréntesis, es muy fácil escribir −2x − 4 en lugar de −2x + 4.</p>`, svg: denom, video: pvid("ecuaciones", 4) },
    { html: `<h3>2.4 El método completo</h3><p>Cualquier ecuación de primer grado, por complicada que parezca, se resuelve con estos pasos en orden:</p><ol><li><b>Quitar denominadores</b> multiplicando por el mcm.</li><li><b>Quitar paréntesis</b> con la propiedad distributiva.</li><li><b>Transponer</b>: términos con x a un lado y números al otro.</li><li><b>Reducir</b> términos semejantes.</li><li><b>Despejar</b> la x.</li><li><b>Comprobar</b> la solución.</li></ol><p>Ejemplo: (2x − 1)/3 − (x + 2)/4 = 1/6. mcm = 12: 4(2x − 1) − 3(x + 2) = 2 → 8x − 4 − 3x − 6 = 2 → 5x = 12 → <mark>x = 12/5</mark>.</p><p>No hace falta seguir siempre el orden al pie de la letra: si ves un atajo, úsalo. Pero cuando dudes, el método completo nunca falla.</p>`, svg: psvg("ecuaciones", 5) },
    { html: `<h3>2.5 Ecuaciones sin solución o con infinitas soluciones</h3><p>A veces, al reducir, la x desaparece. Pueden pasar dos cosas:</p><ul><li>Se llega a algo <b>falso</b>, como 0 = 3. La ecuación <b>no tiene solución</b>: ningún número la cumple. Ejemplo: 2x + 1 = 2x + 4 → 0x = 3.</li><li>Se llega a algo <b>siempre cierto</b>, como 0 = 0. Cualquier número es solución: en realidad era una <b>identidad</b>. Ejemplo: 3(x + 2) = 3x + 6 → 0x = 0.</li></ul><p>No hay que confundir estos casos con la solución x = 0, que es perfectamente válida: 5x = 0 → x = 0.</p><p>Desde el punto de vista de un problema, una ecuación sin solución indica que la situación es imposible, por ejemplo, buscar dos números consecutivos que sumen 10 (x + x + 1 = 10 da x = 4,5, que no es entero, así que no existen).</p>`, svg: casos },
    { html: `<h3>3.1 Plantear problemas</h3><p>Resolver problemas con ecuaciones requiere traducir el enunciado al álgebra. Un buen método:</p><ol><li><b>Leer</b> con atención e identificar qué se pregunta.</li><li><b>Elegir la incógnita</b>: llamar x a una cantidad desconocida (casi siempre, la que se pregunta) y expresar las demás en función de x.</li><li><b>Plantear</b> la ecuación buscando dos expresiones que valgan lo mismo.</li><li><b>Resolver</b> la ecuación.</li><li><b>Comprobar</b> que la solución cumple el enunciado y tiene sentido (no hay −3 personas ni 2,5 coches) y <b>responder</b> con una frase.</li></ol><p>Ejemplo: «Si a un número le restas 7 y multiplicas por 3, obtienes 24». (x − 7) · 3 = 24 → x − 7 = 8 → x = 15. Comprobación: (15 − 7) · 3 = 24. ✔</p>`, svg: plantear, video: pvid("ecuaciones", 6) },
    { html: `<h3>3.2 Problemas de edades</h3><p>En los problemas de edades conviene hacer una <b>tabla</b> con las edades actuales y las de dentro de (o hace) cierto número de años. Hay que recordar que <b>todas las personas cumplen los mismos años</b> a la vez.</p><p>Ejemplo: un padre tiene el triple de edad que su hijo. Dentro de 10 años tendrá el doble. ¿Qué edad tiene cada uno?</p><ul><li>Hoy: hijo x, padre 3x.</li><li>Dentro de 10 años: hijo x + 10, padre 3x + 10.</li><li>Ecuación: 3x + 10 = 2(x + 10) → 3x + 10 = 2x + 20 → <mark>x = 10</mark>.</li></ul><p>El hijo tiene 10 años y el padre, 30. Comprobación: dentro de 10 años tendrán 20 y 40, y 40 es el doble de 20. ✔</p><p>Error típico: sumar los años solo a una de las personas, o escribir 2x + 10 en lugar de 2(x + 10).</p>`, svg: edades },
    { html: `<h3>3.3 Problemas de móviles</h3><p>En los problemas de movimiento se usa la relación <mark>distancia = velocidad · tiempo</mark>.</p><ul><li>Si dos móviles <b>se acercan</b> desde puntos opuestos, las distancias que recorren <b>suman</b> la distancia inicial. Un coche sale de A a 80 km/h y otro de B, a 360 km, a 100 km/h, uno hacia el otro: 80t + 100t = 360 → t = 2 h. Se cruzan a 160 km de A.</li><li>Si uno <b>persigue</b> al otro, en el momento del alcance han recorrido la <b>misma</b> distancia. Un ciclista sale a 20 km/h y una hora después sale una moto a 60 km/h: 20(t + 1) = 60t → t = 0,5 h. La moto lo alcanza en media hora.</li></ul><p>Haz siempre un dibujo de la situación con los dos móviles, sus velocidades y el sentido del movimiento.</p>`, svg: moviles },
    { html: `<h3>3.4 Otros problemas frecuentes</h3><p>Algunos tipos más que aparecen a menudo:</p><ul><li><b>Números</b>: «la suma de tres números consecutivos es 72» → x + (x + 1) + (x + 2) = 72 → x = 23: los números son 23, 24 y 25.</li><li><b>Geometría</b>: «el largo de un rectángulo mide 4 cm más que el ancho y su perímetro es 40 cm» → 2x + 2(x + 4) = 40 → x = 8: mide 8 × 12 cm.</li><li><b>Mezclas y precios</b>: «se mezclan 10 kg de café de 8 €/kg con x kg de 12 €/kg para obtener café de 9 €/kg» → 80 + 12x = 9(10 + x) → x = 10/3 ≈ 3,33 kg.</li><li><b>Repartos</b>: «Ana tiene 5 € más que Luis y entre los dos tienen 37 €» → x + x + 5 = 37 → Luis 16 €, Ana 21 €.</li></ul><p>En todos ellos el secreto es el mismo: elegir bien la incógnita y expresar todo en función de ella.</p>`, svg: mezclas },
  ],
  ejemplos: [
    { enunciado: "Resuelve: 7x − 4 = 3x + 16.", pasos: ["7x − 3x = 16 + 4.", "4x = 20.", "x = 5. Comprobación: 31 = 31."], resultado: "x = 5." },
    { enunciado: "Resuelve: 4(x − 3) = 2(x + 1) − 6.", pasos: ["4x − 12 = 2x + 2 − 6.", "4x − 2x = −4 + 12.", "2x = 8 → x = 4."], resultado: "x = 4." },
    { enunciado: "Resuelve: x/3 − x/4 = 2.", pasos: ["mcm = 12: 4x − 3x = 24.", "x = 24."], resultado: "x = 24." },
    { enunciado: "Resuelve: (x − 1)/2 − (2x + 3)/5 = 1.", pasos: ["mcm = 10: 5(x − 1) − 2(2x + 3) = 10.", "5x − 5 − 4x − 6 = 10.", "x = 21."], resultado: "x = 21." },
    { enunciado: "Resuelve el epitafio de Diofanto: x/6 + x/12 + x/7 + 5 + x/2 + 4 = x.", pasos: ["mcm(6, 12, 7, 2) = 84.", "14x + 7x + 12x + 420 + 42x + 336 = 84x.", "75x + 756 = 84x → 9x = 756.", "x = 84."], resultado: "Diofanto vivió 84 años." },
    { enunciado: "Un rectángulo tiene 6 cm más de largo que de ancho y su perímetro es 52 cm. Halla sus dimensiones.", pasos: ["Ancho x, largo x + 6.", "2x + 2(x + 6) = 52 → 4x + 12 = 52.", "x = 10."], resultado: "10 cm × 16 cm." },
  ],
  errores: [
    "Al transponer, no cambiar la operación: pasar un +4 como +4.",
    "Pasar un coeficiente negativo cambiándole el signo: en −2x = 8, x no es 4.",
    "Al quitar un paréntesis precedido de −, cambiar solo el primer signo.",
    "Al quitar denominadores, no multiplicar los términos que no tienen fracción.",
    "No poner entre paréntesis los numeradores con varios términos antes de multiplicar.",
    "No comprobar la solución ni interpretar si tiene sentido en el problema.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Indica si son identidades o ecuaciones: a) 3(x + 2) = 3x + 6; b) 2x − 1 = 5; c) x + x = 2x.", sol: "a) Identidad. b) Ecuación (x = 3). c) Identidad." },
    { nivel: "básico", q: "Comprueba si x = −2 es solución de 4x + 5 = x − 1.", sol: "4 · (−2) + 5 = −3 y −2 − 1 = −3. Sí es solución." },
    { nivel: "básico", q: "Resuelve: a) x + 9 = 4; b) x − 6 = −2; c) 5x = −35; d) x/4 = 3.", sol: "a) x = −5. b) x = 4. c) x = −7. d) x = 12." },
    { nivel: "básico", q: "Resuelve: 3x + 7 = 22.", sol: "3x = 15 → x = 5." },
    { nivel: "básico", q: "Resuelve: 8x − 5 = 3x + 10.", sol: "5x = 15 → x = 3." },
    { nivel: "básico", q: "Resuelve: 2x + 3 − x = 4x − 9.", sol: "x + 3 = 4x − 9 → −3x = −12 → x = 4." },
    { nivel: "básico", q: "Resuelve: −3x = 12 y 6 − x = 10.", sol: "x = −4. −x = 4 → x = −4." },
    { nivel: "básico", q: "Resuelve: 5(x − 2) = 15.", sol: "5x − 10 = 15 → 5x = 25 → x = 5." },
    { nivel: "básico", q: "Traduce y resuelve: «el triple de un número menos 8 es 13».", sol: "3x − 8 = 13 → x = 7." },
    { nivel: "básico", q: "Traduce y resuelve: «la mitad de un número más 5 es 12».", sol: "x/2 + 5 = 12 → x/2 = 7 → x = 14." },
    { nivel: "medio", q: "Resuelve: 2(3x − 1) − (x + 4) = 9.", sol: "6x − 2 − x − 4 = 9 → 5x = 15 → x = 3." },
    { nivel: "medio", q: "Resuelve: 4 − 3(2 − x) = 2(x + 5).", sol: "4 − 6 + 3x = 2x + 10 → x = 12." },
    { nivel: "medio", q: "Resuelve: x/2 + x/5 = 14.", sol: "mcm 10: 5x + 2x = 140 → x = 20." },
    { nivel: "medio", q: "Resuelve: (x + 3)/4 = (x − 1)/2.", sol: "mcm 4: x + 3 = 2(x − 1) → x + 3 = 2x − 2 → x = 5." },
    { nivel: "medio", q: "Resuelve: x − (x − 2)/3 = 4.", sol: "3x − (x − 2) = 12 → 2x + 2 = 12 → x = 5." },
    { nivel: "medio", q: "Indica cuántas soluciones tiene: a) 3x − 2 = 3x + 1; b) 2(x − 1) = 2x − 2.", sol: "a) 0 = 3: sin solución. b) 0 = 0: infinitas soluciones." },
    { nivel: "medio", q: "La suma de tres números consecutivos es 87. ¿Cuáles son?", sol: "3x + 3 = 87 → x = 28: 28, 29 y 30." },
    { nivel: "medio", q: "Marta tiene 3 años más que su hermano y entre los dos suman 27. ¿Qué edad tiene cada uno?", sol: "x + x + 3 = 27 → x = 12. Hermano 12, Marta 15." },
    { nivel: "medio", q: "Un bolígrafo cuesta 0,60 € más que un lápiz. Por 3 bolígrafos y 5 lápices se pagan 6,20 €. ¿Cuánto cuesta cada uno?", sol: "3(x + 0,6) + 5x = 6,2 → 8x + 1,8 = 6,2 → x = 0,55. Lápiz 0,55 €, bolígrafo 1,15 €." },
    { nivel: "medio", q: "Los ángulos de un triángulo miden x, 2x y x + 20 grados. ¿Cuánto mide cada uno?", sol: "4x + 20 = 180 → x = 40: 40°, 80°, 60°." },
    { nivel: "medio", q: "En una clase de 30 alumnos hay 4 chicas más que chicos. ¿Cuántos chicos y chicas hay?", sol: "x + x + 4 = 30 → x = 13 chicos y 17 chicas." },
    { nivel: "medio", q: "He gastado 1/3 de mi dinero y luego 1/4 del total. Me quedan 15 €. ¿Cuánto tenía?", sol: "x − x/3 − x/4 = 15 → 12x − 4x − 3x = 180 → 5x = 180 → x = 36 €." },
    { nivel: "avanzado", q: "Resuelve: (2x − 1)/3 − (x − 2)/4 = (x + 5)/6.", sol: "mcm 12: 4(2x − 1) − 3(x − 2) = 2(x + 5) → 8x − 4 − 3x + 6 = 2x + 10 → 3x = 8 → x = 8/3." },
    { nivel: "avanzado", q: "Resuelve: 3[x − 2(x − 1)] = 2(1 − x) − x.", sol: "3[−x + 2] = 2 − 2x − x → −3x + 6 = 2 − 3x → 6 = 2: sin solución." },
    { nivel: "avanzado", q: "Una madre tiene 40 años y su hija 12. ¿Dentro de cuántos años la edad de la madre será el doble que la de la hija?", sol: "40 + x = 2(12 + x) → 40 + x = 24 + 2x → x = 16 años (56 y 28)." },
    { nivel: "avanzado", q: "Dos ciudades están a 420 km. De cada una sale un coche hacia la otra, a 90 km/h y a 120 km/h. ¿Cuándo y dónde se cruzan?", sol: "90t + 120t = 420 → t = 2 h. A 180 km de la primera ciudad." },
    { nivel: "avanzado", q: "Un ciclista sale a 18 km/h. Dos horas después sale una moto a 54 km/h por la misma carretera. ¿Cuánto tarda la moto en alcanzarlo?", sol: "18(t + 2) = 54t → 18t + 36 = 54t → t = 1 h. A 54 km de la salida." },
    { nivel: "avanzado", q: "Se mezclan 20 kg de pienso de 1,20 €/kg con pienso de 1,80 €/kg para obtener una mezcla de 1,40 €/kg. ¿Cuántos kg del segundo hacen falta?", sol: "24 + 1,8x = 1,4(20 + x) → 24 + 1,8x = 28 + 1,4x → 0,4x = 4 → x = 10 kg." },
    { nivel: "avanzado", q: "Un grifo llena un depósito en 6 h y otro en 3 h. ¿Cuánto tardan juntos? (Plantea una ecuación con t.)", sol: "t/6 + t/3 = 1 → t + 2t = 6 → t = 2 h." },
    { nivel: "avanzado", q: "Inventa un problema cuya ecuación sea 2(x + 5) = 3x − 4 y resuélvelo.", sol: "Ejemplo: «el doble de lo que tendré dentro de 5 años es igual al triple de mi edad menos 4». x = 14." },
  ],
  quiz: baraja([
    { q: "¿Cuál es una identidad?", o: ["2(x + 3) = 2x + 6", "2x + 3 = 9", "x + 1 = 0", "3x = x"], a: 0, e: "Se cumple siempre." },
    { q: "La solución de x + 7 = 3 es…", o: ["−4", "4", "10", "−10"], a: 0, e: "x = 3 − 7." },
    { q: "La solución de 4x = −20 es…", o: ["−5", "5", "−16", "−80"], a: 0, e: "−20 : 4." },
    { q: "La solución de x/3 = 6 es…", o: ["18", "2", "9", "3"], a: 0, e: "6 · 3." },
    { q: "En 3x − 5 = 2x + 1, x =", o: ["6", "4", "−6", "−4"], a: 0, e: "x = 1 + 5." },
    { q: "El grado de 3x − 2 = 7 es…", o: ["1", "2", "3", "0"], a: 0, e: "Exponente de x: 1." },
    { q: "¿Es x = 2 solución de 5x − 4 = 3x?", o: ["Sí", "No", "Solo si x > 0", "No se puede saber"], a: 0, e: "6 = 6." },
    { q: "Lo que está sumando en un miembro pasa…", o: ["restando", "sumando", "multiplicando", "dividiendo"], a: 0, e: "Operación contraria." },
    { q: "En −5x = 15, x =", o: ["−3", "3", "20", "−20"], a: 0, e: "15 : (−5)." },
    { q: "2(x − 3) = 8 → x =", o: ["7", "5,5", "1", "4"], a: 0, e: "2x − 6 = 8." },
    { q: "5 − (x − 2) = 4 → x =", o: ["3", "−1", "7", "1"], a: 0, e: "5 − x + 2 = 4." },
    { q: "Para quitar denominadores en x/4 + x/6 = 5 se multiplica por…", o: ["12", "24", "10", "2"], a: 0, e: "mcm(4, 6)." },
    { q: "x/2 + x/3 = 5 → x =", o: ["6", "5", "30", "12"], a: 0, e: "3x + 2x = 30." },
    { q: "2x + 3 = 2x + 5 tiene…", o: ["ninguna solución", "una solución", "infinitas soluciones", "x = 0"], a: 0, e: "0 = 2 es falso." },
    { q: "3(x + 1) = 3x + 3 tiene…", o: ["infinitas soluciones", "ninguna solución", "una solución", "x = 1"], a: 0, e: "Es una identidad." },
    { q: "«El doble de un número más 4 es 18» → x =", o: ["7", "11", "9", "14"], a: 0, e: "2x + 4 = 18." },
    { q: "Tres consecutivos suman 45. El menor es…", o: ["14", "15", "13", "16"], a: 0, e: "3x + 3 = 45." },
    { q: "Hoy tengo x años. Hace 5 años tenía…", o: ["x − 5", "x + 5", "5x", "x/5"], a: 0, e: "Se restan 5." },
    { q: "Dos coches se acercan a 60 y 90 km/h desde 300 km. Se cruzan en…", o: ["2 h", "3 h", "5 h", "1,5 h"], a: 0, e: "150t = 300." },
    { q: "Al resolver un problema, el último paso es…", o: ["comprobar e interpretar", "elegir la incógnita", "quitar paréntesis", "transponer"], a: 0, e: "Siempre hay que comprobar." },
  ]),
  examen: baraja([
    { q: "6x − 4 = 2x + 12 → x =", o: ["4", "2", "−4", "8"], a: 0, e: "4x = 16." },
    { q: "3(x − 2) − (x + 4) = 0 → x =", o: ["5", "1", "−5", "3"], a: 0, e: "2x − 10 = 0." },
    { q: "x/2 − x/6 = 4 → x =", o: ["12", "24", "6", "3"], a: 0, e: "3x − x = 24." },
    { q: "(x + 1)/3 = (x − 1)/2 → x =", o: ["5", "1", "−5", "3"], a: 0, e: "2x + 2 = 3x − 3." },
    { q: "4x − 1 = 4x + 2 tiene…", o: ["ninguna solución", "x = 0", "infinitas", "x = 3"], a: 0, e: "0 = 3." },
    { q: "La edad de Ana más su triple es 48. Ana tiene…", o: ["12", "16", "24", "36"], a: 0, e: "4x = 48." },
    { q: "Perímetro de un cuadrado = 36 cm. Lado:", o: ["9 cm", "6 cm", "18 cm", "12 cm"], a: 0, e: "4x = 36." },
    { q: "Un padre tiene 4 veces la edad del hijo y entre los dos suman 50. El hijo tiene…", o: ["10", "12,5", "40", "8"], a: 0, e: "5x = 50." },
  ], 1),
  feynman: ["Qué diferencia hay entre una identidad y una ecuación", "Por qué se puede «pasar» un término al otro miembro cambiando la operación", "Por qué hay que multiplicar todos los términos por el mcm", "Qué significa que una ecuación no tenga solución"],
  figura: {
    titulo: "Las ecuaciones de primer grado en un vistazo",
    svg: resumen("Resumen del tema de ecuaciones de primer grado", [
      ["Ecuación", "igualdad cierta solo para algunos valores", "var(--pen)"],
      ["Transponer", "+ ↔ − · · ↔ : (el coeficiente pasa con su signo)", "var(--leaf)"],
      ["Método", "denominadores → paréntesis → transponer → despejar", "var(--sun)"],
      ["Casos", "0x = k: sin solución · 0x = 0: infinitas", "var(--inf)"],
      ["Problemas", "incógnita → ecuación → resolver → comprobar", "var(--red)"],
    ]),
  },
  video: pvg("ecuaciones"),
  mapa: mapa("ECUACIONES", "var(--red)", [
    ["Conceptos", "identidad · ecuación · solución", "var(--pen)"],
    ["Técnicas", "balanza · transposición", "var(--leaf)"],
    ["Resolución", "paréntesis · denominadores", "var(--sun)"],
    ["Problemas", "edades · móviles · números", "var(--red)"],
  ], 250),
  glosario: [
    ["Igualdad algebraica", "Dos expresiones algebraicas unidas por el signo igual."],
    ["Identidad", "Igualdad que se cumple para cualquier valor de las letras."],
    ["Ecuación", "Igualdad que solo se cumple para algunos valores de las letras."],
    ["Incógnita", "Letra cuyo valor se busca en una ecuación."],
    ["Miembro", "Cada una de las expresiones a un lado del signo igual."],
    ["Término", "Cada sumando de un miembro."],
    ["Solución", "Valor de la incógnita que hace cierta la igualdad."],
    ["Grado de una ecuación", "Mayor exponente de la incógnita."],
    ["Ecuaciones equivalentes", "Las que tienen las mismas soluciones."],
    ["Transposición", "Paso de un término de un miembro al otro con la operación contraria."],
    ["Despejar", "Dejar la incógnita sola en un miembro."],
    ["Ecuación incompatible", "La que no tiene solución."],
    ["Comprobar", "Sustituir la solución en la ecuación original para verificarla."],
  ],
  situacion: {
    titulo: "Escape room algebraico",
    reto: "Por equipos, vais a diseñar un escape room de cinco pruebas para otra clase en el que cada candado se abre con la solución de una ecuación o de un problema que hay que plantear.",
    pasos: [
      "Elegid una temática (un museo, una nave espacial, una pirámide) y una historia que una las pruebas.",
      "Inventad cinco retos de dificultad creciente: ecuación sencilla, con paréntesis, con denominadores, problema de edades y problema de móviles o mezclas.",
      "Resolved y comprobad cada reto; ajustad los datos para que las soluciones sean números enteros de tres cifras como máximo.",
      "Preparad las tarjetas de pistas y la hoja de soluciones para quien dirija el juego.",
      "Jugad el escape room con otro equipo y recoged sus sugerencias de mejora.",
    ],
    producto: "Un escape room en papel o digital con cinco pruebas algebraicas, sus soluciones y la valoración de los jugadores.",
    evaluacion: ["Plantea ecuaciones correctas a partir de enunciados.", "Resuelve ecuaciones con paréntesis y denominadores sin errores.", "Comprueba e interpreta las soluciones.", "Diseña retos claros, creativos y bien graduados."],
  },
  tarjetas: [
    ["Ecuación", "Cierta solo para algunos valores"], ["Identidad", "Cierta siempre"], ["Solución", "Valor que cumple la igualdad"],
    ["+ al otro lado", "Pasa como −"], ["· al otro lado", "Pasa como :"], ["−2x = 8", "x = 8 : (−2) = −4"],
    ["− ( … )", "Cambian todos los signos"], ["Denominadores", "Multiplicar todo por el mcm"], ["0x = 5", "Sin solución"],
    ["0x = 0", "Infinitas soluciones"], ["Edades", "Todos cumplen los mismos años"], ["Móviles", "d = v · t"],
  ],
  familias: ["Planteadle acertijos de «pienso un número» y pedid que los resuelva con una ecuación.", "Usad la balanza de cocina para explicar que una ecuación es un equilibrio.", "Calculad juntos cuándo la edad de un familiar será el doble que la de otro.", "En un viaje en coche, calculad a qué hora llegaréis con la velocidad media."],
  profesores: {
    saberes: "Sentido algebraico: ecuaciones de primer grado, ecuaciones equivalentes, resolución con paréntesis y denominadores y modelización de situaciones reales; pensamiento computacional en el algoritmo de resolución (RD 217/2022, Matemáticas ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Balanzas reales o virtuales para entender la equivalencia.", "Tarjetas de error: encontrar y corregir errores en resoluciones.", "Problemas de edades con tablas antes de plantear.", "Escape room algebraico creado por el alumnado."],
  },
  fuentes: [RD, DECRET, { t: "Wikipedia: Diofanto de Alejandría", url: "https://es.wikipedia.org/wiki/Diofanto_de_Alejandr%C3%ADa" }, { t: "Proyecto Descartes (INTEF): ecuaciones", url: "https://proyectodescartes.org/" }],
  revisado: REV,
};
