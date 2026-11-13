// Matemáticas 3º de Primaria: la división exacta y entera. Dibujos propios en SVG.
const P = require("./_pri3a");
const { svg, t, AZ, RO, VE, NA, SO, MO } = P;

// División «en caja» a la española: dividendo y divisor arriba, cociente bajo el divisor y restos debajo del dividendo.
// filas: [[texto, x-derecha, color]] debajo del dividendo.
const caja = (x, y, dividendo, divisor, cociente, filas = [], o = {}) => {
  const s = o.s || 20;
  let out = `${t(x - 6, y, dividendo, { s, d: true, a: "end" })}<path d="M${x} ${y - s - 2} V ${y + 8} H ${x + (o.w || 50)}" stroke="var(--ink)" stroke-width="2.2" fill="none"/>${t(x + 10, y, divisor, { s, d: true, a: "start", c: AZ })}${t(x + 10, y + s + 8, cociente, { s, d: true, a: "start", c: VE })}`;
  filas.forEach(([txt, xr, c], i) => { out += t(xr, y + (i + 1) * (s + 6), txt, { s, d: true, a: "end", c: c || "var(--muted)" }); });
  return out;
};
// Reparto: n objetos en g grupos (círculos dentro de cajas), sobran los que no caben.
const reparto = (n, g, y = 40) => {
  const cada = Math.floor(n / g), sob = n - cada * g, w = 220 / g;
  let out = [...Array(g)].map((_, i) => `<rect x="${20 + i * w}" y="${y}" width="${w - 8}" height="54" rx="10" fill="none" stroke="${AZ}" stroke-width="2"/>${[...Array(cada)].map((_, k) => `<circle cx="${32 + i * w + (k % 3) * 14}" cy="${y + 14 + Math.floor(k / 3) * 14}" r="5.5" fill="${SO}"/>`).join("")}`).join("");
  out += [...Array(sob)].map((_, k) => `<circle cx="${110 + k * 16}" cy="${y + 76}" r="5.5" fill="${RO}"/>`).join("");
  return out;
};

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "La división exacta y entera",
  minutos: 50,
  objetivos: ["Entender la división como un reparto en partes iguales", "Conocer los términos de la división: dividendo, divisor, cociente y resto", "Distinguir la división exacta de la división entera", "Dividir por una cifra y hacer la prueba de la división"],
  claves: ["dividir", "repartir", "partes iguales", "dividendo", "divisor", "cociente", "resto", "división exacta", "división entera", "prueba de la división", "tablas de multiplicar"],
  pregunta: ["Tienes 14 cromos y quieres repartirlos entre 3 amigos, dándole a cada uno los mismos. ¿Cuántos le tocan a cada uno? ¿Sobra alguno?", "A cada amigo le tocan <b>4 cromos</b> (4 × 3 = 12) y <mark>sobran 2</mark>. Acabamos de hacer una <b>división</b>: 14 : 3. Como sobra algo, es una división <b>entera</b>. Si no sobrara nada, sería <b>exacta</b>."],
  bloques: [
    ["Dividir es repartir en partes iguales", `<p><b>Dividir</b> es repartir una cantidad en <mark>partes iguales</mark>. Si tenemos 12 galletas y las repartimos entre 4 niños, a cada uno le tocan 3. Lo escribimos así:</p><p style="text-align:center"><b>12 : 4 = 3</b></p><p>Se lee «doce entre cuatro, igual a tres». El signo de dividir son <b>dos puntos</b> (:), aunque también verás a veces ÷ o una raya.</p><p>También dividimos para hacer <b>grupos</b>: si tenemos 12 galletas y hacemos bolsas de 4, ¿cuántas bolsas salen? 12 : 4 = 3 bolsas.</p>`,
      svg("Doce galletas repartidas en cuatro platos: tres para cada uno", `${reparto(12, 4, 30)}${t(130, 148, "12 : 4 = 3", { s: 22, d: true, c: AZ })}`)],
    ["Los términos de la división", `<p>La división tiene <b>cuatro</b> términos:</p><ul><li><b>Dividendo</b>: la cantidad que se reparte.</li><li><b>Divisor</b>: entre cuántos se reparte.</li><li><b>Cociente</b>: lo que le toca a cada uno.</li><li><b>Resto</b>: lo que sobra.</li></ul><p>En 14 : 3, el dividendo es 14, el divisor es 3, el cociente es 4 y el resto es 2.</p><p>Para dividir «en caja» se colocan así: el <b>dividendo</b> a la izquierda, el <b>divisor</b> dentro de la caja, el <b>cociente</b> debajo del divisor y el <b>resto</b> debajo del dividendo.</p>`,
      svg("División de 14 entre 3 en caja con sus cuatro términos", `${caja(110, 60, "14", "3", "4", [["2", 104, RO]], { s: 26 })}${t(60, 34, "dividendo", { s: 11, c: "var(--ink)" })}${t(210, 52, "divisor", { s: 11, c: AZ, a: "start" })}${t(210, 92, "cociente", { s: 11, c: VE, a: "start" })}${t(60, 120, "resto", { s: 11, c: RO })}<path d="M78 116 H 88" stroke="${RO}" stroke-width="1.5"/>`)],
    ["División y multiplicación: dos amigas", `<p>La división es la operación <b>contraria</b> a la multiplicación. Si sabes las <b>tablas</b>, sabes dividir:</p><ul><li>Como 4 × 5 = 20, entonces 20 : 5 = 4 y 20 : 4 = 5.</li><li>Como 7 × 6 = 42, entonces 42 : 6 = 7.</li></ul><p>Para calcular 35 : 7 nos preguntamos: «<mark>¿qué número por 7 da 35?</mark>». Repasamos la tabla del 7: 7, 14, 21, 28, 35… ¡El 5! Así que 35 : 7 = 5.</p><p>Esta es la clave de todas las divisiones: buscar en la tabla del divisor.</p>`,
      P.filas("Multiplicación y división son operaciones contrarias", [["4 × 5 = 20", "20 : 5 = 4 y 20 : 4 = 5", AZ], ["7 × 6 = 42", "42 : 6 = 7 y 42 : 7 = 6", VE], ["¿? × 7 = 35", "35 : 7 = 5", RO]])],
    ["División exacta y división entera", `<p>Hay dos tipos de división según lo que sobra:</p><ul><li><b>Exacta</b>: el resto es <mark>0</mark>. No sobra nada. 15 : 3 = 5, resto 0.</li><li><b>Entera</b> (o inexacta): el resto <mark>no es 0</mark>. Sobra algo. 17 : 3 = 5, resto 2.</li></ul><p>En la vida real pasan las dos cosas: 20 caramelos entre 4 niños es exacta (5 cada uno); 22 caramelos entre 4 es entera (5 cada uno y sobran 2).</p><p>¿Qué hacemos con lo que sobra? Depende del problema: se lo puede quedar alguien, se guarda o, si se puede partir, se trocea.</p>`,
      svg("División exacta: quince entre tres sin resto; entera: diecisiete entre tres, sobran dos", `${caja(66, 58, "15", "3", "5", [["0", 60, VE]], { s: 20 })}${t(70, 140, "exacta", { s: 14, c: VE })}${t(70, 158, "resto 0", { s: 11, c: VE })}${caja(190, 58, "17", "3", "5", [["2", 184, RO]], { s: 20 })}${t(194, 140, "entera", { s: 14, c: RO })}${t(194, 158, "resto 2", { s: 11, c: RO })}`),
      P.V("divB")],
    ["El resto siempre es menor que el divisor", `<p>Hay una regla muy importante: <mark>el resto tiene que ser menor que el divisor</mark>.</p><p>¿Por qué? Imagina que repartes 14 cromos entre 3 amigos, das 3 a cada uno y te sobran 5. ¡Con esos 5 todavía puedes dar 1 más a cada amigo! El reparto no estaba terminado.</p><p>Así que, si al dividir te sale un resto igual o mayor que el divisor, el <b>cociente es demasiado pequeño</b>: súbelo uno y vuelve a calcular.</p><p>Dividiendo entre 4, los restos posibles son solo 0, 1, 2 y 3.</p>`,
      svg("Si sobran cinco al repartir entre tres, todavía se puede dar uno más a cada uno", `${t(66, 30, "14 : 3", { s: 16, d: true })}${t(66, 54, "cociente 3", { s: 12 })}${t(66, 72, "resto 5 ✘", { s: 13, c: RO })}${t(66, 96, "5 &gt; 3: ¡sigue!", { s: 11, c: RO })}${t(196, 30, "14 : 3", { s: 16, d: true })}${t(196, 54, "cociente 4", { s: 12 })}${t(196, 72, "resto 2 ✔", { s: 13, c: VE })}${t(196, 96, "2 &lt; 3: ¡bien!", { s: 11, c: VE })}${t(130, 150, "resto &lt; divisor", { s: 18, d: true, c: AZ })}`)],
    ["Dividir con dividendo de dos cifras", `<p>Cuando el dividendo es más grande, dividimos <b>cifra a cifra</b>, empezando por la <b>izquierda</b>. Ejemplo: 84 : 4.</p><ol><li>Cogemos la primera cifra: <b>8</b>. 8 : 4 = 2. Escribimos 2 en el cociente. 2 × 4 = 8; 8 − 8 = 0.</li><li><b>Bajamos</b> la siguiente cifra, el 4. 4 : 4 = 1. Escribimos 1 en el cociente. 1 × 4 = 4; 4 − 4 = 0.</li></ol><p>Cociente: <mark>21</mark>; resto: 0. ¡Exacta!</p><p>Si la primera cifra es menor que el divisor (en 75 : 5 sí se puede, pero en 36 : 4 no, porque 3 &lt; 4), cogemos <b>dos cifras</b>: 36 : 4 = 9.</p>`,
      svg("División de 84 entre 4 igual a 21 cifra a cifra", `${caja(120, 44, "84", "4", "21", [["0 4", 114], ["0", 114, VE]], { s: 22 })}${t(212, 120, "1.º 8 : 4 = 2", { s: 11, c: AZ })}${t(212, 138, "2.º bajo el 4", { s: 11, c: AZ })}${t(212, 156, "4 : 4 = 1", { s: 11, c: AZ })}`)],
    ["Un ejemplo con resto", `<p>Ahora calculamos <b>157 : 6</b>.</p><ol><li>El 1 es menor que 6: cogemos dos cifras, <b>15</b>. ¿Qué número por 6 se acerca a 15 sin pasarse? 2 × 6 = 12. Escribo <b>2</b>. 15 − 12 = <b>3</b>.</li><li>Bajo el 7: <b>37</b>. 6 × 6 = 36. Escribo <b>6</b>. 37 − 36 = <b>1</b>.</li></ol><p>Cociente: <mark>26</mark>; resto: <mark>1</mark>. Es una división entera.</p><p>Fíjate en que en cada paso el resto (3 y 1) es menor que el divisor (6). ¡Eso nos dice que vamos bien!</p>`,
      svg("División de 157 entre 6: cociente 26 y resto 1", `${caja(130, 44, "157", "6", "26", [["3 7", 124], ["1", 124, RO]], { s: 22 })}${t(56, 70, "15 − 12", { s: 11, c: AZ })}${t(56, 98, "37 − 36", { s: 11, c: AZ })}${t(212, 120, "cociente 26", { s: 11, c: VE })}${t(212, 140, "resto 1", { s: 11, c: RO })}`)],
    ["La prueba de la división", `<p>¿Cómo sabemos si una división está bien hecha? Con la <b>prueba de la división</b>:</p><p style="text-align:center"><mark>divisor × cociente + resto = dividendo</mark></p><p>Comprobamos 157 : 6 = 26, resto 1: 6 × 26 = 156; 156 + 1 = <b>157</b>. ¡Sale el dividendo! Está bien.</p><p>Tiene lógica: si a cada uno de los 6 amigos le di 26 y sobró 1, en total había 6 × 26 + 1. Además, hay que comprobar que el resto sea <b>menor</b> que el divisor.</p>`,
      svg("Prueba de la división: seis por veintiséis más uno igual a ciento cincuenta y siete", `${t(130, 40, "divisor × cociente + resto", { s: 13, c: "var(--muted)" })}${t(130, 78, "6 × 26 + 1", { s: 24, d: true, c: AZ })}${t(130, 112, "= 156 + 1 = 157", { s: 18, d: true, c: VE })}${t(130, 150, "¡sale el dividendo! ✔", { s: 14, c: VE })}`)],
    ["Problemas de dividir", `<p>Dividimos cuando hay que <b>repartir</b> en partes iguales o hacer <b>grupos</b> iguales.</p><p><b>Problema:</b> para una excursión van 95 alumnos en coches de 4 plazas (sin contar al conductor). ¿Cuántos coches hacen falta?</p><ol><li><b>Operación</b>: 95 : 4 = 23, resto 3.</li><li><b>Interpretar el resto</b>: 23 coches llenos llevan 92 alumnos, pero <mark>quedan 3 alumnos</mark> sin sitio.</li><li><b>Solución</b>: hacen falta <b>24 coches</b>.</li></ol><p>¡Ojo! En algunos problemas el resto se ignora, en otros se suma uno al cociente. Piensa siempre en la <b>pregunta</b>.</p>`,
      svg("Noventa y cinco alumnos en coches de cuatro: veintitrés coches llenos y uno más para los tres que sobran", `${[0, 1, 2, 3].map((i) => `<rect x="${16 + i * 46}" y="40" width="40" height="24" rx="8" fill="${AZ}" fill-opacity=".25" stroke="${AZ}" stroke-width="2"/><circle cx="${26 + i * 46}" cy="70" r="5" fill="var(--ink)"/><circle cx="${46 + i * 46}" cy="70" r="5" fill="var(--ink)"/>`).join("")}${t(228, 58, "… × 23", { s: 12, c: AZ })}<rect x="94" y="88" width="40" height="24" rx="8" fill="${RO}" fill-opacity=".25" stroke="${RO}" stroke-width="2"/><circle cx="104" cy="118" r="5" fill="var(--ink)"/><circle cx="124" cy="118" r="5" fill="var(--ink)"/>${t(190, 104, "+1 para 3", { s: 12, c: RO })}${t(130, 156, "95 : 4 = 23, resto 3 → 24 coches", { s: 13, c: VE })}`)],
  ],
  figura: ["La división exacta y entera", P.columnas("Resumen: repartir, términos de la división, exacta y entera, y prueba", [["en partes iguales", "REPARTIR", ["12 : 4 = 3", "tabla del divisor"], AZ], ["14 : 3", "TÉRMINOS", ["dividendo, divisor", "cociente, resto"], VE], ["resto 0 o no", "EXACTA / ENTERA", ["resto &lt; divisor", "siempre"], RO], ["d × c + r", "PRUEBA", ["= dividendo", "6 × 26 + 1 = 157"], SO]])],
  video: P.V("divV", true),
  ejemplos: [
    ["Calcula 45 : 9 y di si es exacta.", ["¿Qué número por 9 da 45? 9 × 5 = 45.", "Resto: 45 − 45 = 0."], "Cociente 5, resto 0: exacta."],
    ["Calcula 68 : 5 y haz la prueba.", ["6 : 5 = 1; 1 × 5 = 5; 6 − 5 = 1.", "Bajo el 8: 18 : 5 = 3; 3 × 5 = 15; 18 − 15 = 3.", "Prueba: 5 × 13 + 3 = 65 + 3 = 68."], "Cociente 13, resto 3: entera."],
    ["Reparte 50 canicas entre 6 niños. ¿Cuántas le tocan a cada uno? ¿Cuántas sobran?", ["50 : 6. Tabla del 6: 6 × 8 = 48.", "50 − 48 = 2, y 2 &lt; 6."], "8 canicas a cada uno y sobran 2."],
  ],
  errores: [
    "Dejar un resto mayor o igual que el divisor.",
    "Confundir el dividendo con el divisor (no es lo mismo 12 : 3 que 3 : 12).",
    "Olvidar bajar la cifra siguiente del dividendo.",
    "Empezar a dividir por la derecha en vez de por la izquierda.",
    "En los problemas, no pensar qué hacer con el resto.",
  ],
  ejercicios: [
    ["Escribe dos divisiones a partir de 6 × 8 = 48.", "48 : 6 = 8 y 48 : 8 = 6."],
    ["Calcula 36 : 4, 56 : 7 y 81 : 9.", "9, 8 y 9."],
    ["En 29 : 5 = 5 resto 4, ¿cuál es el dividendo, el divisor, el cociente y el resto?", "Dividendo 29, divisor 5, cociente 5, resto 4."],
    ["¿Es exacta 42 : 6? ¿Y 43 : 6?", "42 : 6 = 7, exacta; 43 : 6 = 7 resto 1, entera."],
    ["Al dividir entre 5, ¿qué restos pueden salir?", "0, 1, 2, 3 y 4."],
    ["Calcula 96 : 3.", "32, resto 0."],
    ["Calcula 75 : 4 y haz la prueba.", "18 resto 3; 4 × 18 + 3 = 75."],
    ["Calcula 245 : 5.", "49, resto 0."],
    ["Tengo 60 fotos y un álbum con 8 fotos por página. ¿Cuántas páginas lleno? ¿Cuántas fotos quedan?", "7 páginas llenas y quedan 4 fotos."],
    ["Hay 30 niños y los equipos son de 7. ¿Cuántos equipos completos salen?", "4 equipos completos y sobran 2 niños."],
  ],
  quiz: [
    ["Dividir es…", ["repartir en partes iguales", "juntar cantidades", "sumar varias veces"], "Partes iguales."],
    ["En 20 : 4 = 5, el divisor es…", ["4", "20", "5"], "Entre cuántos se reparte."],
    ["Lo que sobra en una división es el…", ["resto", "cociente", "divisor"], "Puede ser 0."],
    ["Una división es exacta si…", ["el resto es 0", "el cociente es 0", "el divisor es 1"], "No sobra nada."],
    ["54 : 6 =", ["9", "8", "7"], "6 × 9 = 54."],
    ["23 : 4 = 5, resto…", ["3", "1", "4"], "4 × 5 = 20."],
    ["Al dividir entre 3, el resto puede ser…", ["2", "3", "5"], "Menor que 3."],
    ["La prueba de la división es…", ["divisor × cociente + resto", "dividendo × divisor", "cociente + resto"], "Debe dar el dividendo."],
    ["84 : 2 =", ["42", "41", "44"], "8 : 2 y 4 : 2."],
    ["Para 36 : 4 cogemos primero…", ["dos cifras: 36", "una cifra: 3", "el 6"], "3 es menor que 4."],
  ],
  examen: [
    ["63 : 7 =", ["9", "8", "7"], "7 × 9 = 63."],
    ["50 : 8 = 6, resto…", ["2", "8", "4"], "8 × 6 = 48."],
    ["¿Cuál es exacta?", ["72 : 8", "73 : 8", "70 : 8"], "8 × 9 = 72."],
    ["Hay 31 personas y coches de 5 plazas. ¿Cuántos coches hacen falta?", ["7", "6", "5"], "6 resto 1: uno más."],
  ],
  feynman: ["Qué quiere decir dividir", "Cuáles son los términos de la división", "Qué diferencia hay entre una división exacta y una entera", "Por qué el resto tiene que ser menor que el divisor", "Cómo se hace la prueba de la división"],
  mapa: ["LA DIVISIÓN", [["Qué es", "repartir en partes iguales", AZ], ["Términos", "dividendo, divisor, cociente, resto", VE], ["Tipos", "exacta (resto 0) o entera", RO], ["Prueba", "d × c + r = dividendo", SO]]],
  tarjetas: [
    ["Dividir", "Repartir una cantidad en partes iguales."],
    ["Dividendo", "La cantidad que se reparte."],
    ["Divisor", "Entre cuántos se reparte."],
    ["Cociente", "Lo que le toca a cada parte."],
    ["Resto", "Lo que sobra; siempre menor que el divisor."],
    ["División exacta", "La que tiene resto 0."],
    ["División entera", "La que tiene resto distinto de 0."],
    ["Prueba de la división", "Divisor × cociente + resto = dividendo."],
  ],
  familias: ["Repartid de verdad: frutos secos, cartas o piezas, y anotad la división.", "Repasad las tablas al revés: ¿qué número por 6 da 42?", "Preguntad en situaciones reales: ¿cuántas bolsas de 6 hacen falta para 40 manzanas?", "Comprobad las divisiones de los deberes con la prueba."],
  saberes: "Sentido numérico y operaciones: la división como reparto y como agrupamiento; términos; relación con la multiplicación; división exacta y entera; algoritmo de la división por una cifra; prueba de la división; interpretación del resto en problemas",
  ideas: ["Repartos reales con material manipulativo en pequeños grupos.", "Juego de las tablas al revés con tarjetas.", "Problemas en los que hay que decidir qué hacer con el resto."],
});
