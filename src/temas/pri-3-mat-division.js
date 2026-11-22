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

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Distinguir entre repartir y agrupar", "Saber si un número se puede dividir entre 2, 5 y 10", "Dividir de cabeza descomponiendo", "Usar la división en situaciones de la vida diaria"],
  lectura: { titulo: "Los cromos del abuelo", html: `<p>El abuelo de Sergio guardaba en el desván una caja de lata llena de cromos antiguos de animales. Una tarde de lluvia la bajó al salón.</p><p>—Aquí hay 96 cromos —dijo—. Quiero regalarlos a mis nietos, pero de forma justa.</p><p>Los nietos eran cuatro: Sergio, sus hermanas Laura y Nerea y su primo Dani. Sergio cogió un papel.</p><p>—Hay que dividir 96 entre 4.</p><p>Primero cogió el 9: 9 entre 4 tocaba a 2, y sobraba 1. Bajó el 6 y formó 16. 16 entre 4 tocaba a 4. ¡Resto 0!</p><p>—¡24 cromos para cada uno, y no sobra ninguno!</p><p>Repartieron los cromos en cuatro montones. Pero entonces llegó la tía Elena con el bebé, Hugo.</p><p>—¿Y Hugo no tiene cromos? —preguntó, riéndose.</p><p>Todos se miraron. Ahora eran cinco nietos. Sergio volvió a hacer la cuenta: 96 entre 5. Tocaba a 19 y sobraba 1.</p><p>—Uno sobra —dijo Laura—. ¿Qué hacemos con él?</p><p>El abuelo buscó entre los cromos y sacó uno muy especial: un tigre de Bengala con los bordes dorados.</p><p>—Este me lo quedo yo —sonrió—. Era mi favorito cuando tenía vuestra edad.</p><p>Y así fue como el resto de la división acabó otra vez en el bolsillo del abuelo.</p>` },
  tras: {
    "División y multiplicación: dos amigas": [
      ["Repartir y agrupar", `<p>Hay dos tipos de situaciones que se resuelven con una división, aunque parezcan distintas:</p><ul><li><mark>Repartir</mark>: sabemos <b>cuántas partes</b> hay y queremos saber <b>cuánto toca a cada una</b>. «Repartimos 20 caramelos entre 5 niños. ¿Cuántos caramelos le tocan a cada uno?» → 20 : 5 = <b>4 caramelos</b>.</li><li><mark>Agrupar</mark>: sabemos <b>cuánto hay en cada grupo</b> y queremos saber <b>cuántos grupos</b> se forman. «Tenemos 20 caramelos y hacemos bolsitas de 5. ¿Cuántas bolsitas salen?» → 20 : 5 = <b>4 bolsitas</b>.</li></ul><p>La operación es la misma (20 : 5 = 4), pero el resultado significa cosas diferentes: en el reparto son <b>caramelos</b>; en el agrupamiento son <b>bolsitas</b>. Por eso, al escribir la solución, hay que poner bien la <b>unidad</b>.</p><p>Más ejemplos:</p><ul><li>Reparto: 30 cromos entre 6 amigos → 5 cromos a cada uno.</li><li>Agrupamiento: 30 alumnos en equipos de 6 → 5 equipos.</li><li>Agrupamiento: 28 días son 28 : 7 = 4 semanas.</li></ul><p>Pista: si la pregunta empieza con «¿cuántos le tocan…?», suele ser reparto; si empieza con «¿cuántos grupos, cajas, equipos…?», suele ser agrupamiento.</p>`,
        H6.dos("20 : 5", ["REPARTIR", ["entre 5 niños", "¿cuánto a cada uno?", "4 caramelos"], cAZ], ["AGRUPAR", ["bolsitas de 5", "¿cuántos grupos?", "4 bolsitas"], cVE]), ["PDWkPfNYP_c", "Repartos y agrupamientos", "Profa. Kempis", 126625]],
    ],
    "El resto siempre es menor que el divisor": [
      ["¿Se puede repartir sin que sobre?", `<p>A veces queremos saber si una cantidad se puede repartir en partes iguales <b>sin que sobre nada</b>, es decir, si la división será <b>exacta</b>. Para algunos números hay trucos muy rápidos, llamados <mark>criterios de divisibilidad</mark>:</p><ul><li>Entre <b>2</b>: si el número es <b>par</b> (acaba en 0, 2, 4, 6 u 8). 346 se puede repartir entre 2; 347, no.</li><li>Entre <b>5</b>: si el número acaba en <b>0 o en 5</b>. 85 y 120 sí; 83, no.</li><li>Entre <b>10</b>: si el número acaba en <b>0</b>. 450 sí; 455, no.</li></ul><p>Fíjate en que todos los números que se pueden dividir entre 10 también se pueden dividir entre 2 y entre 5.</p><p>Para otros números, como el 3 o el 4, hay que hacer la división o pensar en la tabla. Un número se puede dividir exactamente entre 3 si está en la tabla del 3 (o en su continuación): 3, 6, 9, 12… 27, 30, 33…</p><p><b>Reto</b>: en clase hay 24 alumnos. ¿En qué tamaños de equipo se pueden organizar sin que sobre nadie? Equipos de 2, 3, 4, 6, 8 o 12, porque 24 está en todas esas tablas. ¿Y si fueran 25 alumnos? Solo en equipos de 5 (o de 25).</p>`,
        L6.filas("¿Exacta?", [["entre 2", "acaba en par", cAZ], ["entre 5", "acaba en 0 o 5", cNA], ["entre 10", "acaba en 0", cVE], ["otros", "piensa la tabla", cMO]])],
    ],
    "La prueba de la división": [
      ["Dividir de cabeza", `<p>Algunas divisiones se pueden hacer <mark>de cabeza</mark> con un poco de ingenio.</p><p><b>1. Descomponer el dividendo</b> en partes que se dividan fácilmente.</p><ul><li>84 : 4 → 80 : 4 = 20 y 4 : 4 = 1 → 20 + 1 = <b>21</b>.</li><li>96 : 3 → 90 : 3 = 30 y 6 : 3 = 2 → <b>32</b>.</li><li>72 : 6 → 60 : 6 = 10 y 12 : 6 = 2 → <b>12</b>.</li></ul><p><b>2. Dividir entre 10</b>: si el número acaba en 0, basta con <b>quitar el cero</b>. 70 : 10 = 7; 350 : 10 = 35.</p><p><b>3. Dividir entre 2</b> es calcular la <b>mitad</b>. La mitad de 60 es 30; la mitad de 48 es 24 (mitad de 40 = 20, mitad de 8 = 4).</p><p><b>4. Dividir entre 4</b> es calcular la mitad de la mitad. 80 : 4 → mitad de 80 = 40 → mitad de 40 = <b>20</b>.</p><p><b>5. Pensar en la tabla al revés</b>: 56 : 7 → ¿qué número por 7 da 56? El 8.</p><p>Calcular de cabeza no sustituye a la división en columna, pero ayuda a comprobar y a resolver problemas sencillos rápidamente.</p>`,
        H6.flujo("84 : 4", ["84 =|80 + 4", "80 : 4|= 20", "4 : 4|= 1", "total|21"], cRO)],
    ],
  },
  final: [
    ["La división en la vida diaria", `<p>Dividimos mucho más de lo que creemos. Algunos ejemplos:</p><ul><li><b>El calendario</b>: un año tiene 365 días. ¿Cuántas semanas son? 365 : 7 = 52 semanas, y sobra 1 día. Por eso, si tu cumpleaños este año es martes, el año que viene será miércoles (salvo que haya un 29 de febrero por medio).</li><li><b>Los equipos</b>: en el recreo hay 28 niños y queréis hacer equipos de fútbol de 7. 28 : 7 = 4 equipos.</li><li><b>Los paquetes</b>: si los yogures vienen en paquetes de 4 y necesitas 30, compras 30 : 4 = 7 paquetes y sobran 2 yogures… así que necesitas 8 paquetes.</li><li><b>Pagar a medias</b>: si 3 amigos compran un regalo de 27 €, cada uno pone 27 : 3 = 9 €.</li><li><b>La cocina</b>: una receta para 8 personas lleva 400 gramos de arroz; para 4 personas, la mitad: 200 gramos.</li><li><b>Los viajes</b>: si un coche recorre 240 kilómetros en 3 horas, cada hora recorre 240 : 3 = 80 kilómetros.</li></ul><p><b>Investiga</b>: busca en casa tres situaciones en las que se reparta algo en partes iguales y escribe la división de cada una.</p>`,
      H6.rueda("Dividimos", "REPARTIR", [["calendario", cAZ], ["equipos", cVE], ["paquetes", cNA], ["a medias", cRO]]), ["zF4GYIbSMzg", "La división - Aprende a dividir con nuestros amigos los monos", "Smile and Learn - Español", 971558]],
    ["El número que falta", `<p>Un buen entrenamiento es resolver divisiones con <mark>números escondidos</mark>. Para encontrarlos, usamos la relación entre la multiplicación y la división.</p><p><b>Falta el cociente</b>: 45 : 9 = ? → ¿qué número por 9 da 45? → <b>5</b>.</p><p><b>Falta el divisor</b>: 36 : ? = 4 → ¿entre cuánto reparto 36 para que toque a 4? → 36 : 4 = <b>9</b>.</p><p><b>Falta el dividendo</b>: ? : 6 = 7 → el dividendo es el divisor por el cociente: 6 × 7 = <b>42</b>.</p><p><b>Con resto</b>: ? : 5 = 8, resto 3 → usamos la prueba de la división: 5 × 8 + 3 = <b>43</b>.</p><p><b>Acertijo</b>: Pienso un número. Si lo divido entre 4, me da 6 y no sobra nada. ¿Qué número he pensado? (24).</p><p><b>Acertijo difícil</b>: Tengo menos de 20 caramelos. Si los reparto entre 3 amigos, no sobra ninguno. Si los reparto entre 5, tampoco. ¿Cuántos caramelos tengo? Tiene que ser un número que esté a la vez en la tabla del 3 (3, 6, 9, 12, 15, 18) y en la del 5 (5, 10, 15). El único que está en las dos es el <b>15</b>.</p>`,
      L6.filas("Esconder", [["45 : 9 = ?", "5", cAZ], ["36 : ? = 4", "9", cVE], ["? : 6 = 7", "42", cNA], ["? : 5 = 8 r 3", "43", cRO]])],
  ],
  ejemplos: [
    ["«Tenemos 40 sillas y hacemos filas de 8.» ¿Reparto o agrupamiento?", ["Sabemos cuántas hay en cada fila.", "Queremos saber cuántas filas."], "Agrupamiento: 40 : 8 = 5 filas."],
    ["¿Se pueden repartir 135 cromos entre 5 sin que sobre?", ["135 acaba en 5.", "Los números que acaban en 0 o 5 se dividen entre 5."], "Sí: 135 : 5 = 27."],
  ],
  errores: ["Escribir mal la unidad de la solución: en un agrupamiento la respuesta son grupos, no objetos.", "Pensar que un número que acaba en 5 se puede dividir entre 2: solo los pares."],
  ejercicios: [
    ["b", "¿Se puede dividir 238 entre 2 sin que sobre?", "Sí, es par."],
    ["b", "¿Se puede dividir 340 entre 10?", "Sí: 34."],
    ["b", "Calcula de cabeza 60 : 3.", "20."],
    ["b", "36 : ? = 6", "6."],
    ["b", "? : 4 = 5", "20."],
    ["m", "Calcula de cabeza 68 : 2.", "34."],
    ["m", "Calcula de cabeza 93 : 3.", "31."],
    ["m", "En una caja caben 6 huevos. ¿Cuántas cajas hacen falta para 54 huevos?", "9 cajas (agrupamiento)."],
    ["m", "? : 7 = 6, resto 2.", "44."],
    ["m", "¿En qué equipos iguales se pueden organizar 18 alumnos?", "De 2, 3, 6 o 9."],
    ["a", "Un año tiene 365 días. ¿Cuántas semanas y días son?", "52 semanas y 1 día."],
    ["a", "Necesitas 50 lápices y vienen en cajas de 8. ¿Cuántas cajas compras?", "7 cajas (6 no llegan)."],
    ["a", "Inventa un problema de reparto y otro de agrupamiento con 24 : 4.", "Respuesta abierta."],
    ["a", "En la lectura, ¿cuántos cromos tocarían si fueran 6 nietos?", "16, y no sobra ninguno."],
  ],
  quiz: [
    ["«¿Cuántos equipos de 5 salen con 30 niños?» es un…", ["agrupamiento", "reparto", "producto"], "Agrupar."],
    ["Se puede dividir exactamente entre 5 el…", ["75", "73", "52"], "Divisibilidad."],
    ["84 : 4 = 80 : 4 + …", ["4 : 4", "8 : 4", "4 : 8"], "De cabeza."],
    ["365 : 7 = 52 y sobra…", ["1", "5", "0"], "Vida diaria."],
    ["? : 6 = 7 → ? = …", ["42", "13", "1"], "Número que falta."],
  ],
  examen: [
    ["En la lectura, ¿cuántos cromos tocaron al repartir entre 4?", ["24", "19", "20"], "Lectura."],
    ["Dividir entre 4 es calcular…", ["la mitad de la mitad", "el doble", "el triple"], "De cabeza."],
  ],
  tarjetas: [
    ["Repartir y agrupar", "Cuánto a cada uno o cuántos grupos; misma operación."],
    ["Divisibilidad", "Entre 2: par. Entre 5: 0 o 5. Entre 10: 0."],
    ["De cabeza", "Descompón: 84 : 4 = 80 : 4 + 4 : 4."],
    ["Vida diaria y números escondidos", "Calendario, equipos; dividendo = divisor × cociente + resto."],
  ],
  glosario: [
    ["Repartir", "Dar a cada uno la misma cantidad."],
    ["Agrupar", "Formar grupos del mismo tamaño."],
    ["Divisible", "Que se puede dividir sin que sobre nada."],
    ["Criterio", "Regla para saber algo rápidamente."],
    ["Exacta", "División con resto 0."],
    ["Mitad", "Cada una de las dos partes iguales."],
    ["Descomponer", "Separar un número en partes."],
    ["Dividendo", "Cantidad que se reparte."],
    ["Divisor", "Número entre el que se reparte."],
    ["Cociente", "Resultado de la división."],
    ["Resto", "Lo que sobra en una división."],
    ["A medias", "Pagando cada uno la misma parte."],
  ],
  situacion: {
    titulo: "Organizamos las olimpiadas del cole",
    reto: "La clase organiza unas olimpiadas y tiene que repartir alumnos, material y premios de forma justa.",
    pasos: ["Formar equipos iguales y comprobar si sobra algún alumno.", "Repartir el material (petos, balones, aros) entre los equipos.", "Calcular de cabeza las raciones de fruta para cada equipo.", "Inventar problemas de reparto y agrupamiento para otra clase."],
    producto: "Un plan de olimpiadas con equipos, materiales y cálculos.",
    evaluacion: ["Distingue repartir y agrupar.", "Usa criterios de divisibilidad.", "Divide de cabeza.", "Aplica la división en situaciones reales."],
  },
});
