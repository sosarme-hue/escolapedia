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
