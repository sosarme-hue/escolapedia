// Matemáticas 2º de Primaria: iniciación a la multiplicación.
const P = require("./_pri2a");
const { svg, num, txt, nino, manzana, rot, flechaR, flor } = P;

// Grupo de k puntos dentro de un círculo.
const grupo = (cx, cy, k, c = "var(--pen)", r = 22) => `<g><circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 3"/>${[...Array(k)].map((_, i) => { const a = (i / k) * Math.PI * 2 - Math.PI / 2, rr = k === 1 ? 0 : r * 0.5; return `<circle cx="${(cx + Math.cos(a) * rr).toFixed(1)}" cy="${(cy + Math.sin(a) * rr).toFixed(1)}" r="5" fill="${c}"/>`; }).join("")}</g>`;
// Matriz de filas × columnas de puntos.
const matriz = (x, y, f, c, col = "var(--red)", sep = 18) => [...Array(f * c)].map((_, i) => `<circle cx="${x + (i % c) * sep}" cy="${y + Math.floor(i / c) * sep}" r="6" fill="${col}"/>`).join("");

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Iniciación a la multiplicación",
  objetivos: ["Descubrir que multiplicar es sumar varias veces el mismo número", "Leer y escribir multiplicaciones con el signo ×", "Usar la multiplicación con grupos iguales y filas"],
  claves: ["multiplicar", "veces", "grupos iguales", "suma repetida", "por", "×", "factores", "producto"],
  pregunta: ["Hay 4 coches y cada coche tiene 4 ruedas. ¿Cómo cuentas las ruedas más rápido?", "Podemos sumar 4 + 4 + 4 + 4 = 16. ¡O <mark>multiplicar</mark>! 4 veces 4 se escribe <b>4 × 4 = 16</b>."],
  bloques: [
    ["Grupos iguales", `<p>Mira estos platos. En cada plato hay <b>3 fresas</b>. Hay <b>4 platos</b>.</p><p>Todos los grupos tienen <mark>la misma cantidad</mark>. Se llaman <b>grupos iguales</b>.</p><p>Para saber cuántas fresas hay, podemos contar de 3 en 3: 3, 6, 9, <b>12</b>. ¡Hay 12 fresas!</p>`,
      svg("Cuatro platos con tres fresas cada uno: doce fresas", `${[0, 1, 2, 3].map((i) => `<ellipse cx="${40 + i * 60}" cy="80" rx="26" ry="14" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${[0, 1, 2].map((j) => `<path d="M${30 + i * 60 + j * 10} 74 q4 12 8 0 q-4 -5 -8 0z" fill="var(--red)"/>`).join("")}`).join("")}${["3", "6", "9", "12"].map((n, i) => num(40 + i * 60, 124, n, "var(--pen)", 18)).join("")}${txt(130, 158, "contamos de 3 en 3", "var(--ink)", 14)}`)],
    ["Sumar el mismo número", `<p>Cuando sumamos <b>el mismo número</b> varias veces, hacemos una <mark>suma repetida</mark>.</p><p>3 + 3 + 3 + 3 = 12. Hemos sumado el 3 <b>cuatro veces</b>.</p><p>Escribir tantas sumas es largo y cansado. ¡Por eso inventaron una forma más corta: la <b>multiplicación</b>!</p>`,
      svg("Tres más tres más tres más tres es doce: cuatro veces tres", `${num(130, 60, "3 + 3 + 3 + 3 = 12", "var(--ink)", 24)}${[0, 1, 2, 3].map((i) => `<path d="M${54 + i * 40} 74 q7 10 14 0" stroke="var(--leaf)" stroke-width="2.5" fill="none"/>${txt(61 + i * 40, 98, i + 1, "var(--leaf)", 13)}`).join("")}${txt(130, 130, "4 veces el 3", "var(--pen)", 16)}${num(130, 162, "4 × 3 = 12", "var(--red)", 22)}`)],
    ["El signo ×", `<p>Para multiplicar usamos el signo <mark>×</mark>. Se lee <b>«por»</b>.</p><p><b>4 × 3 = 12</b> se lee «cuatro por tres, doce». Quiere decir: <b>4 veces 3</b>.</p><p>Los números que multiplicamos se llaman <b>factores</b>. El resultado se llama <mark>producto</mark>. En 4 × 3 = 12, el producto es 12.</p>`,
      svg("La multiplicación 4 por 3 igual a 12 con sus partes", `${num(60, 80, "4", "var(--pen)", 42)}${num(100, 80, "×", "var(--red)", 42)}${num(140, 80, "3", "var(--pen)", 42)}${num(176, 80, "=", "var(--muted)", 36)}${num(220, 80, "12", "var(--leaf)", 42)}${txt(100, 120, "factores", "var(--pen)", 14)}<path d="M56 100 H146" stroke="var(--pen)" stroke-width="2"/>${txt(220, 120, "producto", "var(--leaf)", 14)}${txt(130, 158, "«cuatro por tres, doce»", "var(--ink)", 14)}`), P.V("mulB")],
    ["De la suma a la multiplicación", `<p>Cada suma repetida se puede escribir como multiplicación.</p><p><b>5 + 5 = 10</b> es <mark>2 × 5 = 10</mark>: dos veces cinco.</p><p><b>2 + 2 + 2 = 6</b> es <mark>3 × 2 = 6</mark>: tres veces dos.</p><p>Primero contamos <b>cuántas veces</b> se repite. Luego miramos <b>qué número</b> se repite.</p>`,
      svg("Sumas repetidas convertidas en multiplicaciones", `${[["5 + 5", "2 × 5", "10"], ["2 + 2 + 2", "3 × 2", "6"], ["10 + 10 + 10", "3 × 10", "30"]].map(([a, b, r], i) => `${num(66, 46 + i * 46, a, "var(--ink)", 16)}${flechaR(124, 40 + i * 46, 142, 40 + i * 46, "var(--muted)")}${num(200, 46 + i * 46, `${b} = ${r}`, "var(--red)", 16)}`).join("")}`)],
    ["Filas y columnas", `<p>También podemos colocar las cosas en <mark>filas</mark>, como las sillas del cine.</p><p>Aquí hay <b>3 filas</b> y en cada fila hay <b>5 sillas</b>. 3 × 5 = <b>15 sillas</b>.</p><p>Si giramos el dibujo, hay 5 filas de 3: 5 × 3 = 15. ¡Sale lo mismo! El orden de los factores <b>no cambia</b> el producto.</p>`,
      svg("Una cuadrícula de tres filas y cinco columnas de puntos: tres por cinco igual a quince", `${matriz(50, 40, 3, 5)}${txt(140, 46, "5", "var(--pen)", 14)}${txt(32, 64, "3", "var(--pen)", 14)}${num(80, 130, "3 × 5 = 15", "var(--red)", 18)}${matriz(170, 30, 5, 3, "var(--leaf)", 16)}${num(196, 130, "5 × 3 = 15", "var(--leaf)", 16)}${txt(130, 162, "¡El mismo resultado!", "var(--ink)", 14)}`)],
    ["Multiplicar por 1 y por 0", `<p>Si tienes <b>1 grupo</b> de 6 caramelos, tienes 6. <mark>1 × 6 = 6</mark>. Multiplicar por 1 deja el número igual.</p><p>Si tienes <b>0 bolsas</b> de caramelos, no tienes ninguno. <mark>0 × 6 = 0</mark>.</p><p>¡Cualquier número por 0 da <b>0</b>!</p>`,
      svg("Una bolsa con seis caramelos y una bolsa vacía", `<path d="M30 60 h70 l-8 70 h-54z" fill="var(--sun)" fill-opacity=".4" stroke="var(--ink)" stroke-width="2"/>${[...Array(6)].map((_, i) => `<circle cx="${48 + (i % 3) * 16}" cy="${88 + Math.floor(i / 3) * 18}" r="6" fill="var(--red)"/>`).join("")}<path d="M160 60 h70 l-8 70 h-54z" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 4"/>${num(65, 158, "1 × 6 = 6", "var(--pen)", 18)}${num(195, 158, "0 × 6 = 0", "var(--red)", 18)}`)],
    ["Dobles y triples", `<p>El <mark>doble</mark> de un número es <b>2 veces</b> ese número. El doble de 4 es 2 × 4 = <b>8</b>.</p><p>El <mark>triple</mark> es <b>3 veces</b> el número. El triple de 4 es 3 × 4 = <b>12</b>.</p><p>Si tú tienes 5 cromos y tu amiga tiene el doble, ella tiene <b>10</b>.</p>`,
      svg("Cuatro flores, el doble son ocho y el triple doce", `${[1, 2, 3].map((k, r) => [...Array(4 * k)].map((_, i) => flor(22 + i * 13, 52 + r * 50, ["var(--red)", "var(--pen)", "var(--leaf)"][r])).join("") + txt(222, 46 + r * 50, ["4 flores", "doble: 8", "triple: 12"][r], ["var(--red)", "var(--pen)", "var(--leaf)"][r], 13)).join("")}`)],
    ["¿Para qué sirve?", `<p>Multiplicamos para contar <b>grupos iguales</b> muy deprisa.</p><p>Las patas de 3 perros: 3 × 4 = <b>12 patas</b>. Los huevos de 2 cajas de 6: 2 × 6 = <b>12 huevos</b>.</p><p>Al comprar 3 helados de 2 €: 3 × 2 = <mark>6 €</mark>. ¡La multiplicación ahorra mucho tiempo!</p>`,
      svg("Dos hueveras de seis huevos: dos por seis igual a doce", `${[0, 1].map((k) => `<rect x="${24 + k * 110}" y="44" width="100" height="50" rx="8" fill="var(--sun)" opacity=".45" stroke="var(--ink)"/>${[...Array(6)].map((_, i) => `<ellipse cx="${42 + k * 110 + (i % 3) * 32}" cy="${58 + Math.floor(i / 3) * 22}" rx="8" ry="10" fill="var(--card)" stroke="var(--muted)"/>`).join("")}`).join("")}${num(130, 140, "2 × 6 = 12 huevos", "var(--pen)", 20)}`)],
    ["Juego: ¿cuántas patas?", `<p>En la granja hay <b>5 gallinas</b>. Cada gallina tiene <b>2 patas</b>. ¿Cuántas patas hay? 5 × 2 = <mark>10 patas</mark>.</p><p>Ahora llegan <b>2 vacas</b>, con 4 patas cada una: 2 × 4 = <mark>8 patas</mark>.</p><p>Inventa tú: ¿cuántas patas tienen 3 arañas, si cada una tiene 8?</p>`,
      svg("Cinco gallinas con dos patas cada una: cinco por dos igual a diez", `${[0, 1, 2, 3, 4].map((i) => { const x = 34 + i * 48; return `<ellipse cx="${x}" cy="74" rx="16" ry="13" fill="var(--card)" stroke="var(--ink)" stroke-width="1.8"/><circle cx="${x + 13}" cy="58" r="8" fill="var(--card)" stroke="var(--ink)" stroke-width="1.8"/><path d="M${x + 19} 58 l6 2 l-6 2z" fill="var(--sun)"/><path d="M${x + 11} 50 q2 -5 5 0" fill="var(--red)"/><path d="M${x - 4} 86 v14 M${x + 4} 86 v14" stroke="var(--sun)" stroke-width="2.5"/>`; }).join("")}${num(130, 140, "5 × 2 = 10 patas", "var(--pen)", 20)}${txt(130, 166, "¿Y 3 arañas de 8 patas?", "var(--ink)", 13)}`)],
  ],
  figura: ["Tres maneras de ver 3 × 4", `<svg viewBox="0 0 640 260" role="img" aria-label="Tres por cuatro como grupos, como suma repetida y como filas: doce">
    <rect width="640" height="260" rx="16" fill="var(--paper)"/>
    ${[0, 1, 2].map((i) => `<rect x="${24 + i * 202}" y="24" width="188" height="170" rx="14" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>`).join("")}
    ${grupo(70, 100, 4, "var(--pen)", 24)}${grupo(118, 100, 4, "var(--pen)", 24)}${grupo(166, 100, 4, "var(--pen)", 24)}${txt(118, 170, "3 grupos de 4", "var(--ink)", 15)}
    ${num(320, 105, "4 + 4 + 4", "var(--leaf)", 30)}${txt(320, 170, "suma repetida", "var(--ink)", 15)}
    ${matriz(470, 60, 3, 4, "var(--red)", 26)}${txt(510, 170, "3 filas de 4", "var(--ink)", 15)}
    ${num(320, 236, "3 × 4 = 12", "var(--red)", 30)}
  </svg>`],
  video: P.V("mulV", true),
  ejemplos: [
    ["Escribe como multiplicación: 6 + 6 + 6.", ["¿Qué número se repite? El 6.", "¿Cuántas veces? 3 veces.", "3 veces 6 se escribe 3 × 6."], "3 × 6 = 18."],
    ["Hay 4 bicis. ¿Cuántas ruedas hay?", ["Cada bici tiene 2 ruedas.", "Hay 4 grupos de 2: 2 + 2 + 2 + 2.", "4 × 2 = 8."], "hay 8 ruedas."],
    ["¿Cuál es el doble de 7?", ["El doble es 2 veces el número.", "2 × 7 = 7 + 7."], "el doble de 7 es 14."],
  ],
  errores: [
    "Sumar los factores en vez de multiplicar: 3 × 4 no es 7, es 12.",
    "Escribir como multiplicación grupos que no son iguales: 3 + 5 + 2 no es una multiplicación.",
    "Pensar que 0 × 5 es 5: cualquier número por 0 da 0.",
    "Confundir el signo × con el signo +.",
  ],
  ejercicios: [
    ["Escribe como multiplicación: 5 + 5 + 5.", "3 × 5 = 15."],
    ["Escribe como suma: 4 × 2.", "2 + 2 + 2 + 2 = 8."],
    ["¿Cómo se lee 3 × 6 = 18?", "Tres por seis, dieciocho."],
    ["Dibuja 2 grupos de 5 estrellas. ¿Cuántas hay?", "2 × 5 = 10 estrellas."],
    ["Hay 3 filas de 4 sillas. ¿Cuántas sillas hay?", "3 × 4 = 12 sillas."],
    ["¿Cuánto es 1 × 9?", "9."],
    ["¿Cuánto es 0 × 8?", "0."],
    ["¿Cuál es el doble de 6?", "12."],
    ["¿Cuál es el triple de 5?", "15."],
    ["¿Cuántas patas tienen 3 perros?", "3 × 4 = 12 patas."],
  ],
  quiz: [
    ["Multiplicar es sumar…", ["el mismo número varias veces", "números distintos", "y restar"], "Es una suma repetida."],
    ["El signo × se lee…", ["por", "más", "menos"], "4 × 2: cuatro por dos."],
    ["3 + 3 + 3 + 3 es…", ["4 × 3", "3 × 3", "4 + 3"], "4 veces el 3."],
    ["2 × 5 es…", ["10", "7", "25"], "5 + 5 = 10."],
    ["El resultado de una multiplicación se llama…", ["producto", "suma", "diferencia"], "Los números que se multiplican son factores."],
    ["3 filas de 2 sillas son…", ["6 sillas", "5 sillas", "32 sillas"], "3 × 2 = 6."],
    ["7 × 0 es…", ["0", "7", "70"], "Cualquier número por 0 da 0."],
    ["1 × 8 es…", ["8", "1", "9"], "Por 1, el número no cambia."],
    ["El doble de 9 es…", ["18", "11", "99"], "2 × 9 = 18."],
    ["Si 3 × 5 = 15, entonces 5 × 3 es…", ["15", "8", "53"], "El orden no cambia el producto."],
  ],
  examen: [
    ["¿Qué suma es 4 × 5?", ["5 + 5 + 5 + 5", "4 + 5", "4 + 4 + 4"], "4 veces el 5."],
    ["Hay 5 manos. ¿Cuántos dedos hay?", ["25", "10", "55"], "5 × 5 = 25."],
    ["El triple de 3 es…", ["9", "6", "33"], "3 × 3 = 9."],
    ["0 × 4 es…", ["0", "4", "40"], "Cero grupos de 4 no son nada."],
  ],
  feynman: ["Por qué multiplicar es una suma repetida", "Qué quiere decir 4 × 3", "Por qué cualquier número por 0 da 0"],
  mapa: ["MULTIPLICAR", [
    ["Suma repetida", "3 + 3 + 3 + 3", "var(--leaf)"],
    ["Se escribe", "4 × 3 = 12", "var(--red)"],
    ["Grupos iguales", "4 platos de 3", "var(--pen)"],
    ["Filas", "3 filas de 5", "var(--sun)"],
  ]],
  tarjetas: [
    ["¿Qué es multiplicar?", "Sumar el mismo número varias veces"],
    ["¿Cómo se lee ×?", "Por"],
    ["5 + 5 + 5 como multiplicación", "3 × 5 = 15"],
    ["2 × 4 como suma", "4 + 4 = 8"],
    ["¿Cómo se llama el resultado?", "Producto"],
    ["Cualquier número × 0 =", "0"],
    ["El doble de 8", "16"],
    ["¿Cambia el producto si cambio el orden?", "No: 3 × 5 = 5 × 3"],
  ],
  familias: [
    "Contad grupos iguales en casa: patas de sillas, ruedas de coches, huevos en la huevera.",
    "Al poner la mesa: «4 personas y 2 cubiertos cada una, ¿cuántos cubiertos?».",
    "Haced filas de botones o legumbres y contad «3 filas de 4».",
    "Jugad a los dobles: decís un número y responde su doble.",
  ],
  saberes: "Sentido numérico: la multiplicación como suma repetida y como disposición rectangular; dobles y triples",
  ideas: ["Material manipulativo para formar grupos iguales antes de usar el signo ×.", "Disposiciones rectangulares con gomets o en el geoplano.", "Problemas de la vida cotidiana: patas, ruedas, cajas y paquetes."],
});

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Multiplicar con saltos en la recta", "Saber que el orden de los factores no cambia el producto", "Repartir en grupos iguales", "Resolver problemas sencillos de multiplicar"],
  lectura: { titulo: "Los bocadillos de la excursión", html: `<p>Mañana la clase de 2.º B se va de excursión al bosque. La señorita Carmen ha pedido ayuda para preparar los bocadillos.</p><p>Lola y Nico están en la cocina del cole. Hay 6 bandejas y en cada bandeja caben 4 bocadillos.</p><p>—¿Cuántos bocadillos podemos poner? —pregunta Nico.</p><p>Lola empieza a contar de uno en uno: uno, dos, tres…</p><p>—¡Así tardamos mucho! —dice Nico—. Mejor sumamos: 4 + 4 + 4 + 4 + 4 + 4.</p><p>—Eso es lo mismo que 6 veces 4 —dice la señorita Carmen—. Se escribe 6 × 4.</p><p>Cuentan de 4 en 4: 4, 8, 12, 16, 20, 24.</p><p>—¡Veinticuatro bocadillos!</p><p>—Y somos veintidós niños, más la señorita y el conductor… ¡justo veinticuatro!</p><p>Los tres se ríen. Las multiplicaciones también sirven para que nadie se quede sin bocadillo.</p>` },
  tras: {
    "Sumar el mismo número": [
      ["Saltos en la recta", `<p>Podemos multiplicar dando <mark>saltos iguales</mark> en la recta numérica.</p><p>Para hacer <b>4 × 3</b>, empezamos en el 0 y damos <b>4 saltos</b> de <b>3</b> en 3:</p><ul><li>Primer salto: llegamos al 3.</li><li>Segundo salto: al 6.</li><li>Tercer salto: al 9.</li><li>Cuarto salto: ¡al <b>12</b>!</li></ul><p>Entonces, 4 × 3 = 12.</p><p>El primer número nos dice <b>cuántos saltos</b> damos. El segundo, <b>lo largo</b> que es cada salto.</p><p>Es como una rana que salta siempre la misma distancia. Si la rana da 5 saltos de 2, llega al 10: 5 × 2 = 10.</p><p><b>Actividad</b>: dibuja una recta del 0 al 20 y haz los saltos de 3 × 5.</p>`,
        H6.flujo("4 × 3", ["salto 1|llego al 3", "salto 2|al 6", "salto 3|al 9", "salto 4|¡al 12!"], cVE),
        ["1zApiPxabpY", "Sumas repetidas que dan multiplicaciones | Matemáticas | Khan Academy en Español", "KhanAcademyEspañol", 69154]],
    ],
    "Filas y columnas": [
      ["El orden no importa", `<p>Mira una caja de bombones con <b>2 filas</b> de <b>5 bombones</b>: 2 × 5 = 10.</p><p>Ahora gira la caja. ¡Ahora hay <b>5 filas</b> de <b>2 bombones</b>! 5 × 2 = 10.</p><p>Hay los mismos bombones, solo hemos girado la caja. Por eso:</p><p><b>2 × 5 = 5 × 2</b></p><p>En la multiplicación, el <mark>orden de los números no cambia el resultado</mark>. Esta regla se llama <b>propiedad conmutativa</b>, igual que en la suma.</p><p>¡Es una gran ayuda! Si sabes que 3 × 8 = 24, también sabes que 8 × 3 = 24. Así tienes que aprender la mitad de cuentas.</p><p>Muchas veces es más fácil pensar el número pequeño de veces: 2 × 9 es «dos veces nueve», más rápido que nueve veces dos.</p><p><b>Actividad</b>: coloca 12 fichas en 3 filas de 4. Después gíralas. ¿Qué multiplicaciones ves?</p>`,
        H6.dos("Girar la caja", ["2 FILAS", ["de 5", "2 × 5 = 10"], cAZ], ["5 FILAS", ["de 2", "5 × 2 = 10"], cRO])],
    ],
    "Dobles y triples": [
      ["Repartir en grupos iguales", `<p>Multiplicar es juntar grupos iguales. <mark>Repartir</mark> es lo contrario: hacer grupos iguales con lo que tenemos.</p><p>Tenemos <b>12 caramelos</b> y somos <b>3 amigos</b>. Repartimos uno a uno, como cuando se reparten cartas: uno para ti, uno para ti, uno para mí… Al final, cada uno tiene <b>4 caramelos</b>.</p><p>Lo comprobamos con una multiplicación: 3 amigos × 4 caramelos = 12. ¡Correcto!</p><p>Al repartir bien, todos reciben <b>lo mismo</b>. Es justo.</p><p>A veces <b>sobra</b> algo. Si tenemos 13 caramelos para 3 amigos, cada uno recibe 4 y sobra 1. ¡Podemos partirlo o guardarlo!</p><p>El año que viene aprenderás que esto se llama <b>dividir</b>. Por ahora, basta con repartir de uno en uno y contar lo que recibe cada uno.</p><p><b>Actividad</b>: reparte 15 lápices entre 5 compañeros. ¿Cuántos recibe cada uno?</p>`,
        L6.filas("12 entre 3", [["amigo 1", "4 caramelos", cAZ], ["amigo 2", "4 caramelos", cVE], ["amigo 3", "4 caramelos", cNA], ["prueba", "3 × 4 = 12", cRO]])],
    ],
    "¿Para qué sirve?": [
      ["Problemas de multiplicar", `<p>En los problemas, algunas palabras nos avisan de que hay que <mark>multiplicar</mark>:</p><ul><li><b>cada</b>: «Cada bolsa tiene 5 canicas».</li><li><b>veces</b>: «Salta 3 veces».</li><li><b>grupos de</b>, <b>cajas de</b>, <b>filas de</b>.</li><li><b>el doble</b>, <b>el triple</b>.</li></ul><p>Por ejemplo: «Compro 4 bolsas. <b>Cada</b> bolsa tiene 5 canicas. ¿Cuántas canicas tengo?»</p><ul><li>Datos: 4 bolsas, 5 canicas en cada una.</li><li>Operación: 4 × 5 = 20.</li><li>Solución: <b>Tengo 20 canicas</b>.</li></ul><p>Un consejo: haz un dibujo rápido con círculos y puntos. Así ves los grupos y no te equivocas.</p><p><b>Actividad</b>: resuelve: «En una mesa hay 3 platos con 6 galletas cada uno. ¿Cuántas galletas hay?».</p>`,
        H6.rueda("Pistas", "×", [["cada", cAZ], ["veces", cVE], ["grupos de", cNA], ["el doble", cRO]])],
    ],
  },
  final: [
    ["Multiplicar con dibujos", `<p>Cuando una multiplicación nos cuesta, podemos <mark>dibujarla</mark>. Hay varias formas:</p><ul><li><b>Grupos</b>: dibuja círculos y pon puntos dentro. 3 × 4: tres círculos con 4 puntos cada uno.</li><li><b>Filas</b>: dibuja puntos en filas y columnas, como una cuadrícula. 3 × 4: tres filas de cuatro puntos.</li><li><b>Saltos</b>: dibuja una recta y haz los saltos.</li><li><b>Torres</b>: dibuja torres de cubos de la misma altura.</li></ul><p>Después, cuenta todos los puntos o cubos. ¡Ese es el resultado!</p><p>Con el tiempo, ya no necesitarás dibujar: te sabrás las tablas de memoria. Pero dibujar te ayuda a <b>entender</b> lo que significa multiplicar.</p><p><b>Actividad</b>: dibuja 2 × 6 de dos maneras distintas.</p>`,
      L6.filas("3 × 4", [["grupos", "3 círculos de 4", cAZ], ["filas", "3 filas de 4", cVE], ["saltos", "3 saltos de 4", cNA], ["torres", "3 torres de 4", cRO]])],
    ["Repaso: la granja de las patas", `<p>En la granja de la tía Rosa hay muchos animales. ¡Vamos a contar sus <mark>patas</mark> multiplicando!</p><ul><li><b>4 gallinas</b>, con 2 patas cada una: 4 × 2 = <b>8 patas</b>.</li><li><b>3 cerdos</b>, con 4 patas: 3 × 4 = <b>12 patas</b>.</li><li><b>2 arañas</b> en el granero, con 8 patas: 2 × 8 = <b>16 patas</b>.</li><li><b>5 patos</b>, con 2 patas: 5 × 2 = <b>10 patas</b>.</li></ul><p>Si sumamos todas: 8 + 12 + 16 + 10 = <b>46 patas</b>. ¡Cuántas!</p><p>¿Y si llega un caballo? Tiene 4 patas: 1 × 4 = 4. Ahora hay 50 patas.</p><p>¿Y si se van las arañas? 0 arañas × 8 patas = 0. ¡Ya no hay patas de araña!</p><p><b>Actividad</b>: inventa tu granja y calcula cuántas patas hay en total.</p>`,
      L6.filas("Patas", [["4 gallinas", "4 × 2 = 8", cNA], ["3 cerdos", "3 × 4 = 12", cRO], ["2 arañas", "2 × 8 = 16", cMO], ["5 patos", "5 × 2 = 10", cAZ]])],
  ],
  ejemplos: [
    ["¿Cuánto es 5 × 3 con saltos?", ["Doy 5 saltos de 3.", "3, 6, 9, 12, 15."], "15."],
    ["Reparte 10 cromos entre 2 amigos.", ["Repartimos uno a uno.", "Comprobamos: 2 × 5 = 10."], "5 cromos cada uno."],
  ],
  errores: ["Confundir el número de saltos con el tamaño de cada salto.", "Sumar los dos números en vez de multiplicarlos: 4 × 3 no es 7."],
  ejercicios: [
    ["b", "Haz 3 saltos de 5 en la recta. ¿Dónde llegas?", "Al 15."],
    ["b", "Si 4 × 2 = 8, ¿cuánto es 2 × 4?", "8."],
    ["b", "Reparte 8 galletas entre 2 niños.", "4 cada uno."],
    ["b", "¿Qué palabra de un problema avisa de multiplicar?", "Cada, veces, grupos de…"],
    ["b", "¿Cuántas patas tienen 3 gallinas?", "6."],
    ["m", "Dibuja 4 × 3 en filas y di el resultado.", "4 filas de 3: 12."],
    ["m", "Reparte 20 canicas entre 4 niños.", "5 cada uno."],
    ["m", "Hay 5 cajas con 3 lápices cada una. ¿Cuántos lápices hay?", "15."],
    ["m", "Reparte 7 cromos entre 3 amigos. ¿Sobra alguno?", "2 cada uno y sobra 1."],
    ["m", "¿Cuántas patas tienen 2 perros y 3 pájaros?", "8 + 6 = 14."],
    ["a", "En la lectura, ¿cuántos bocadillos caben y cómo lo calculan?", "24; 6 × 4, contando de 4 en 4."],
    ["a", "Escribe dos multiplicaciones que den 12.", "3 × 4, 4 × 3, 2 × 6, 6 × 2…"],
    ["a", "Inventa un problema con la palabra «cada» y resuélvelo.", "Respuesta abierta."],
    ["a", "¿Cuántas ruedas hay en 3 bicis y 2 coches?", "6 + 8 = 14."],
  ],
  quiz: [
    ["4 saltos de 3 llegan al…", ["12", "7", "34"], "Saltos."],
    ["2 × 5 es igual que…", ["5 × 2", "2 + 5", "25"], "Orden."],
    ["12 caramelos entre 3 amigos son…", ["4 cada uno", "3 cada uno", "9 cada uno"], "Repartir."],
    ["«Cada caja tiene 6» nos dice que hay que…", ["multiplicar", "restar", "no hacer nada"], "Problemas."],
    ["2 arañas de 8 patas tienen…", ["16 patas", "10 patas", "8 patas"], "Granja."],
  ],
  examen: [
    ["En la lectura, ¿cuántas bandejas hay?", ["6", "4", "24"], "Lectura."],
    ["0 arañas × 8 patas es…", ["0", "8", "1"], "Granja."],
  ],
  tarjetas: [
    ["Saltos", "4 × 3: cuatro saltos de tres en la recta."],
    ["Repartir", "Hacer grupos iguales; se comprueba multiplicando."],
  ],
  glosario: [
    ["Multiplicar", "Sumar varias veces el mismo número."],
    ["Factor", "Cada número que se multiplica."],
    ["Producto", "Resultado de multiplicar."],
    ["Por", "Forma de leer el signo ×."],
    ["Grupos iguales", "Grupos con la misma cantidad."],
    ["Recta numérica", "Línea con los números en orden."],
    ["Conmutativa", "El orden no cambia el resultado."],
    ["Repartir", "Dar a cada uno la misma cantidad."],
    ["Sobrar", "Quedar algo después de repartir."],
    ["Doble", "Dos veces un número."],
  ],
  situacion: {
    titulo: "Preparamos la merienda",
    reto: "La clase organiza una merienda y tiene que calcular cuántas cosas necesita multiplicando y repartiendo.",
    pasos: ["Contar cuántos niños hay en cada mesa y cuántas mesas.", "Calcular cuántos vasos, servilletas y galletas hacen falta multiplicando.", "Repartir las galletas a partes iguales entre las mesas.", "Dibujar las cuentas con grupos, filas o saltos."],
    producto: "Una hoja de cálculos y la merienda preparada.",
    evaluacion: ["Relaciona la multiplicación con la suma repetida.", "Usa saltos, filas y grupos.", "Reparte en grupos iguales.", "Resuelve problemas sencillos."],
  },
});
