// Matemáticas 2º de Primaria: problemas de suma y resta.
const P = require("./_pri2a");
const { svg, num, txt, nino, manzana, rot, flechaR, tick, bocadillo } = P;

// Tarjeta de paso con número y texto.
const paso = (x, y, n, t, c) => `<g><circle cx="${x}" cy="${y}" r="15" fill="${c}"/>${num(x, y + 6, n, "var(--card)", 16)}${rot(x + 24, y + 5, t, { anchor: "start", size: 14 })}</g>`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Problemas de suma y resta",
  objetivos: ["Leer un problema y entender qué pregunta", "Elegir si hay que sumar o restar", "Resolver con datos, operación y solución"],
  claves: ["problema", "datos", "pregunta", "operación", "solución", "sumar", "restar"],
  pregunta: ["En el parque hay 15 palomas. Llegan 8 más. ¿Sumamos o restamos?", "«Llegan más» quiere decir que <b>aumentan</b>. Por eso <mark>sumamos</mark>: 15 + 8 = 23. Hay <b>23 palomas</b>."],
  bloques: [
    ["¿Qué es un problema?", `<p>Un <mark>problema</mark> es una pequeña historia con números y una <b>pregunta</b>.</p><p>Para contestar la pregunta, tenemos que hacer una <b>cuenta</b>.</p><p>No hay que tener prisa. Primero entendemos bien la historia. ¡Un buen detective lee con calma y busca las pistas!</p>`,
      svg("Un niño con una lupa lee un papel con una historia y una pregunta", `${nino(60, 160, { pose: "lanza", c: "var(--pen)" })}<circle cx="44" cy="84" r="12" fill="none" stroke="var(--ink)" stroke-width="3"/><rect x="110" y="30" width="130" height="110" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${[0, 1, 2, 3].map((i) => `<path d="M122 ${52 + i * 16} H${i === 3 ? 180 : 226}" stroke="var(--line)" stroke-width="4" stroke-linecap="round"/>`).join("")}${num(205, 125, "?", "var(--red)", 30)}${txt(175, 162, "historia + pregunta", "var(--ink)", 12)}`)],
    ["Los 4 pasos", `<p>Para resolver un problema seguimos <b>cuatro pasos</b>.</p><p>1. <mark>Leo</mark> el problema despacio, dos veces.</p><p>2. Busco los <mark>datos</mark>: los números importantes.</p><p>3. Pienso la <mark>operación</mark>: ¿sumo o resto? Y la hago.</p><p>4. Escribo la <mark>solución</mark> con una frase completa.</p>`,
      svg("Los cuatro pasos: leo, datos, operación y solución", `${paso(40, 34, "1", "Leo despacio", "var(--pen)")}${paso(40, 72, "2", "Busco los datos", "var(--sun)")}${paso(40, 110, "3", "Hago la operación", "var(--red)")}${paso(40, 148, "4", "Escribo la solución", "var(--leaf)")}`), P.V("proB")],
    ["Los datos y la pregunta", `<p>«Marta tiene <b>12 lápices</b>. Su abuela le regala <b>6 lápices</b>. ¿Cuántos lápices tiene ahora?»</p><p>Los <mark>datos</mark> son 12 y 6. Los subrayamos.</p><p>La <mark>pregunta</mark> es lo que queremos saber: cuántos tiene <b>ahora</b>. La rodeamos con un círculo. ¡Así no se nos olvida!</p>`,
      svg("Los datos 12 y 6 subrayados y la pregunta rodeada", `<rect x="14" y="20" width="232" height="104" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${rot(26, 46, "Marta tiene 12 lápices.", { anchor: "start", size: 14 })}<path d="M100 51 H156" stroke="var(--sun)" stroke-width="4"/>${rot(26, 72, "Le regalan 6 lápices.", { anchor: "start", size: 14 })}<path d="M102 77 H148" stroke="var(--sun)" stroke-width="4"/>${rot(26, 102, "¿Cuántos tiene ahora?", { anchor: "start", size: 14 })}<rect x="20" y="84" width="174" height="26" rx="13" fill="none" stroke="var(--red)" stroke-width="2.5"/>${txt(70, 150, "datos", "var(--sun)", 14)}${txt(190, 150, "pregunta", "var(--red)", 14)}`)],
    ["¿Cuándo sumamos?", `<p><mark>Sumamos</mark> cuando juntamos cosas o cuando algo <b>aumenta</b>.</p><p>Fíjate en palabras como: <b>en total</b>, <b>juntos</b>, <b>le dan</b>, <b>gana</b>, <b>compra más</b>, <b>llegan</b>.</p><p>«En un cesto hay 24 manzanas y echamos 13 más. ¿Cuántas hay en total?» 24 + 13 = <b>37 manzanas</b>.</p>`,
      svg("Un cesto con manzanas al que se añaden más: 24 más 13", `<path d="M50 90 h120 l-12 50 h-96z" fill="#c99a5b" stroke="var(--ink)" stroke-width="2"/>${[0, 1, 2, 3, 4].map((i) => manzana(68 + i * 22, 84)).join("")}${[0, 1, 2].map((i) => manzana(200 + (i % 2) * 22, 50 + i * 18)).join("")}${flechaR(196, 70, 168, 86, "var(--leaf)")}${num(130, 168, "24 + 13 = 37", "var(--leaf)", 20)}${txt(214, 30, "¡Más!", "var(--leaf)", 14)}`)],
    ["¿Cuándo restamos?", `<p><mark>Restamos</mark> cuando quitamos o cuando algo <b>disminuye</b>.</p><p>Fíjate en palabras como: <b>quedan</b>, <b>pierde</b>, <b>regala</b>, <b>se van</b>, <b>gasta</b>, <b>se come</b>.</p><p>«Tenía 20 caramelos y se ha comido 6. ¿Cuántos quedan?» 20 − 6 = <b>14</b>.</p><p>También restamos para saber <b>cuánto falta</b> o <b>cuántos más</b> tiene uno que otro.</p>`,
      svg("Palabras de sumar y palabras de restar en dos columnas", `<rect x="14" y="16" width="112" height="148" rx="10" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2"/><rect x="134" y="16" width="112" height="148" rx="10" fill="var(--red)" fill-opacity=".12" stroke="var(--red)" stroke-width="2"/>${num(70, 44, "+", "var(--leaf)", 28)}${num(190, 44, "−", "var(--red)", 28)}${["en total", "juntos", "le dan", "llegan"].map((w, i) => txt(70, 72 + i * 24, w, "var(--ink)", 13)).join("")}${["quedan", "pierde", "se van", "falta"].map((w, i) => txt(190, 72 + i * 24, w, "var(--ink)", 13)).join("")}`)],
    ["Un problema de restar", `<p>«Pablo tenía <b>45 cromos</b>. Ha regalado <b>18</b> a su prima. ¿Cuántos cromos <b>le quedan</b>?»</p><p>Datos: 45 y 18. Pregunta: cuántos le quedan. «Regala» y «quedan» nos dicen que hay que <mark>restar</mark>.</p><p>Operación: 45 − 18 = 27. Solución: <b>a Pablo le quedan 27 cromos</b>.</p>`,
      svg("Pablo da cromos a su prima: 45 menos 18 igual a 27", `${nino(50, 140, { pose: "brazos", c: "var(--pen)" })}${nino(210, 140, { nina: true, c: "var(--red)" })}${[0, 1, 2].map((i) => `<rect x="${110 + i * 14}" y="${78 - i * 6}" width="22" height="30" rx="3" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.2"/>`).join("")}${flechaR(100, 120, 170, 120, "var(--red)")}${num(130, 168, "45 − 18 = 27", "var(--red)", 20)}`)],
    ["Escribir la solución", `<p>La solución no es solo un número. Es una <mark>frase completa</mark> que contesta la pregunta.</p><p>Si nos preguntan «¿Cuántos lápices tiene Marta?», no basta con poner 18. Escribimos: «<b>Marta tiene 18 lápices</b>».</p><p>Al final, piensa: ¿tiene sentido? Si Marta tenía 12 y le dan más, debe tener <b>más de 12</b>.</p>`,
      svg("Una hoja con la operación y la frase de la solución", `<rect x="20" y="20" width="220" height="140" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${rot(34, 46, "Datos: 12 y 6", { anchor: "start", size: 13, color: "var(--sun)" })}${rot(34, 76, "Operación: 12 + 6 = 18", { anchor: "start", size: 13, color: "var(--pen)" })}${rot(34, 106, "Solución:", { anchor: "start", size: 13, color: "var(--leaf)" })}${rot(34, 130, "Marta tiene 18 lápices.", { anchor: "start", size: 14 })}${tick(214, 128)}`)],
    ["¿Para qué sirve?", `<p>Los problemas están en la <b>vida de todos los días</b>.</p><p>¿Me llega el dinero para comprar un helado? ¿Cuántas sillas faltan para la fiesta? ¿Cuántos días quedan para las vacaciones?</p><p>Si aprendes a resolver problemas, piensas mejor y te equivocas menos. ¡Es un <mark>superpoder</mark>!</p>`,
      svg("Una niña piensa: ¿me llega para el helado?", `${nino(70, 160, { nina: true, c: "var(--leaf)" })}${bocadillo(160, 40, 170, "¿Me llega el dinero?")}<path d="M180 120 l14 40 l14 -40z" fill="#c99a5b"/><circle cx="194" cy="110" r="16" fill="var(--inf)"/><circle cx="194" cy="94" r="12" fill="var(--sun)"/>${txt(194, 172, "Helado: 2 €", "var(--muted)", 13)}`)],
    ["Juego: inventa tu problema", `<p>Ahora eres tú quien inventa. Mira el dibujo: hay <b>14 peces</b> en una pecera y en otra hay <b>9</b>.</p><p>Inventa una pregunta de sumar: «¿Cuántos peces hay <b>en total</b>?» 14 + 9 = <mark>23</mark>.</p><p>Y una de restar: «¿Cuántos peces <b>más</b> hay en la primera?» 14 − 9 = <mark>5</mark>.</p>`,
      svg("Dos peceras: una con catorce peces y otra con nueve", `${[[20, 14], [140, 9]].map(([x, n]) => `<rect x="${x}" y="30" width="100" height="90" rx="14" fill="var(--water)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2"/>${[...Array(n)].map((_, i) => P.pez(x + 20 + (i % 3) * 26, 44 + Math.floor(i / 3) * 16, i % 2 ? "var(--inf)" : "var(--sun)")).join("")}${num(x + 50, 142, n, "var(--pen)", 20)}`).join("")}${txt(130, 168, "¿Qué pregunta inventas?", "var(--ink)", 13)}`)],
  ],
  figura: ["Los 4 pasos de un buen detective", `<svg viewBox="0 0 640 260" role="img" aria-label="Cuatro pasos para resolver problemas: leo, datos, operación y solución">
    <rect width="640" height="260" rx="16" fill="var(--paper)"/>
    ${[["1", "Leo", "despacio, dos veces", "var(--pen)"], ["2", "Datos", "subrayo los números", "var(--sun)"], ["3", "Operación", "¿sumo o resto?", "var(--red)"], ["4", "Solución", "frase completa", "var(--leaf)"]].map(([n, a, b, c], i) => `<rect x="${24 + i * 152}" y="40" width="136" height="170" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/><circle cx="${92 + i * 152}" cy="84" r="24" fill="${c}"/>${num(92 + i * 152, 94, n, "var(--card)", 26)}${txt(92 + i * 152, 144, a, "var(--ink)", 18)}${txt(92 + i * 152, 172, b, "var(--muted)", 12)}`).join("")}
  </svg>`],
  video: P.V("proV", true),
  ejemplos: [
    ["En clase hay 13 niñas y 12 niños. ¿Cuántos alumnos hay en total?", ["Datos: 13 niñas y 12 niños.", "«En total» nos dice que hay que juntar: sumamos.", "13 + 12 = 25."], "en clase hay 25 alumnos."],
    ["Un libro tiene 50 páginas. He leído 32. ¿Cuántas me faltan?", ["Datos: 50 páginas y 32 leídas.", "«Faltan» nos dice que restamos.", "50 − 32 = 18."], "me faltan 18 páginas."],
    ["Ana tiene 27 € y Luis tiene 19 €. ¿Cuántos euros más tiene Ana?", ["Datos: 27 € y 19 €.", "«Cuántos más» se resuelve restando.", "27 − 19 = 8."], "Ana tiene 8 € más que Luis."],
  ],
  errores: [
    "Hacer la cuenta sin leer bien: hay que leer el problema dos veces.",
    "Sumar siempre porque «es más fácil»: primero pensamos si aumenta o disminuye.",
    "Poner solo el número: la solución es una frase completa.",
    "No comprobar: si me regalan cosas, no puedo tener menos que antes.",
  ],
  ejercicios: [
    ["En un árbol hay 16 pájaros y llegan 7. ¿Cuántos hay?", "16 + 7 = 23. Hay 23 pájaros."],
    ["Tenía 35 globos y se han pinchado 12. ¿Cuántos quedan?", "35 − 12 = 23. Quedan 23 globos."],
    ["Leo tiene 24 canicas y Sara 18. ¿Cuántas tienen entre los dos?", "24 + 18 = 42. Tienen 42 canicas."],
    ["Un tren lleva 60 personas. Bajan 25. ¿Cuántas siguen en el tren?", "60 − 25 = 35. Siguen 35 personas."],
    ["Mi hermano tiene 14 años y yo 7. ¿Cuántos años más tiene él?", "14 − 7 = 7. Tiene 7 años más."],
    ["Compro un lápiz de 45 céntimos y una goma de 38. ¿Cuánto pago?", "45 + 38 = 83. Pago 83 céntimos."],
    ["Subraya los datos: «Hay 28 sillas y llegan 30 niños».", "Los datos son 28 y 30."],
    ["¿Sumo o resto? «Me he comido 5 fresas de 20».", "Resto: 20 − 5 = 15 fresas quedan."],
    ["Un álbum tiene 100 cromos. Tengo 64. ¿Cuántos me faltan?", "100 − 64 = 36. Me faltan 36 cromos."],
    ["Inventa un problema de sumar con los números 15 y 9.", "Respuesta libre: por ejemplo, «Tengo 15 cuentos y me regalan 9. ¿Cuántos tengo?» 24."],
  ],
  quiz: [
    ["¿Qué es lo primero para resolver un problema?", ["Leerlo despacio", "Hacer la cuenta", "Escribir la solución"], "Primero hay que entenderlo."],
    ["«En total» nos dice que…", ["sumamos", "restamos", "no hacemos nada"], "Juntamos cantidades."],
    ["«¿Cuántos quedan?» nos dice que…", ["restamos", "sumamos", "contamos de 10 en 10"], "Quitamos una parte."],
    ["Los números importantes del problema son los…", ["datos", "dibujos", "títulos"], "Los subrayamos."],
    ["Hay 18 peces y compro 5 más. Hay…", ["23", "13", "185"], "18 + 5 = 23."],
    ["Tenía 30 € y gasto 12 €. Me quedan…", ["18 €", "42 €", "12 €"], "30 − 12 = 18."],
    ["¿Cuántos más tiene 25 que 20?", ["5", "45", "20"], "25 − 20 = 5."],
    ["La solución se escribe…", ["con una frase completa", "solo con un número", "con un dibujo"], "Contesta a la pregunta."],
    ["«Llegan 8 niños más» nos dice que…", ["sumamos", "restamos", "esperamos"], "El grupo aumenta."],
    ["Si me regalan cromos, después tengo…", ["más que antes", "menos que antes", "lo mismo"], "Así comprobamos si tiene sentido."],
  ],
  examen: [
    ["En un bus van 27 personas y suben 15. ¿Cuántas van ahora?", ["42", "12", "32"], "27 + 15 = 42."],
    ["Una caja tiene 40 galletas. Nos comemos 16. ¿Cuántas quedan?", ["24", "56", "26"], "40 − 16 = 24."],
    ["«Pierde 3 canicas» nos dice que…", ["restamos", "sumamos", "multiplicamos"], "Las canicas disminuyen."],
    ["¿Cuál es el paso 4?", ["Escribir la solución", "Leer", "Buscar los datos"], "Leo, datos, operación y solución."],
  ],
  feynman: ["Cuáles son los 4 pasos para resolver un problema", "Cómo sé si tengo que sumar o restar", "Por qué la solución es una frase"],
  mapa: ["PROBLEMAS", [
    ["Leo", "despacio, dos veces", "var(--pen)"],
    ["Datos", "subrayo los números", "var(--sun)"],
    ["¿+ o −?", "aumenta o disminuye", "var(--red)"],
    ["Solución", "frase completa", "var(--leaf)"],
  ]],
  tarjetas: [
    ["¿Cuántos pasos tiene un problema?", "Cuatro: leo, datos, operación y solución"],
    ["Palabras de sumar", "en total, juntos, le dan, llegan"],
    ["Palabras de restar", "quedan, pierde, se van, falta"],
    ["¿Qué son los datos?", "Los números importantes del problema"],
    ["«¿Cuántos más tiene?» se resuelve…", "restando"],
    ["15 pájaros y llegan 6", "15 + 6 = 21 pájaros"],
    ["Tenía 20 y regalo 8", "20 − 8 = 12"],
    ["¿Cómo se escribe la solución?", "Con una frase que contesta la pregunta"],
  ],
  familias: [
    "Inventad problemas con lo que pasa en casa: platos en la mesa, juguetes, galletas.",
    "Que os cuente el problema con sus palabras antes de hacer la cuenta.",
    "Pedidle que conteste siempre con una frase completa.",
    "Preguntad «¿tiene sentido?» al terminar: es la mejor manera de corregir.",
  ],
  saberes: "Resolución de problemas: problemas aditivos de una operación (cambio, combinación y comparación) con números hasta el 999",
  ideas: ["Rutina de los 4 pasos (leo, datos, operación, solución) en un cartel del aula.", "Dramatizar los problemas con objetos antes de escribirlos.", "Invención de problemas por parejas a partir de un dibujo."],
});

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Descubrir los datos que sobran", "Resolver problemas de comparar", "Resolver problemas de dos pasos", "Revisar si la solución tiene sentido"],
  lectura: { titulo: "El mercadillo solidario", html: `<p>El colegio ha organizado un mercadillo solidario para ayudar a un refugio de animales. Los niños de 2.º venden pulseras que han hecho ellos mismos.</p><p>A primera hora tienen 60 pulseras. Por la mañana venden 25. A la hora del recreo, la clase de 3.º les trae 15 pulseras más.</p><p>—¿Cuántas pulseras tenemos ahora? —pregunta la maestra.</p><p>Jaime levanta la mano:</p><p>—¡Cien! Porque 60 más 25 más 15.</p><p>Lucía frunce el ceño.</p><p>—No puede ser. Si hemos vendido pulseras, tenemos menos, no más.</p><p>Vuelven a leer el problema con calma. Primero restan lo vendido: 60 − 25 = 35. Después suman las nuevas: 35 + 15 = 50.</p><p>—¡Cincuenta pulseras! —dice Jaime—. Me había equivocado porque no leí bien.</p><p>—Por eso hay que leer despacio y pensar si la solución tiene sentido —dice la maestra.</p><p>Al final del día venden todas. ¡El refugio está muy contento!</p>` },
  tras: {
    "Los datos y la pregunta": [
      ["Datos que sobran", `<p>A veces un problema tiene <mark>datos que no necesitamos</mark>. Están ahí para que pensemos bien.</p><p>«En el parque hay 12 niños jugando al fútbol y 8 niñas saltando a la comba. Hace mucho sol y son las 5 de la tarde. ¿Cuántos niños y niñas hay?»</p><ul><li>Datos útiles: <b>12</b> y <b>8</b>.</li><li>Datos que sobran: el sol y <b>las 5</b> de la tarde. ¡El 5 no se suma!</li><li>Operación: 12 + 8 = 20.</li></ul><p>Para encontrar los datos útiles, lee primero la <b>pregunta</b> y piensa qué necesitas saber para contestarla. Después busca esos datos en el texto.</p><p>Un buen truco es <b>subrayar</b> los datos útiles con un color y <b>tachar</b> los que sobran.</p><p><b>Actividad</b>: «Ana tiene 9 años y 14 cromos. Su hermano le da 6 cromos. ¿Cuántos cromos tiene?». ¿Qué dato sobra?</p>`,
        H6.dos("Datos", ["ÚTILES", ["12 niños", "8 niñas", "subrayo"], cVE], ["SOBRAN", ["hace sol", "las 5", "tacho"], cRO])],
    ],
    "¿Cuándo restamos?": [
      ["Problemas de comparar", `<p>En algunos problemas comparamos dos cantidades para saber <mark>cuántos más</mark> o <mark>cuántos menos</mark> hay.</p><p>«Marta tiene 34 canicas y Pablo tiene 21. ¿Cuántas canicas <b>más</b> tiene Marta?»</p><p>Aunque la pregunta dice «más», ¡hay que <b>restar</b>! Buscamos la diferencia: 34 − 21 = <b>13</b>. Marta tiene 13 canicas más que Pablo.</p><p>También al revés: «¿Cuántas canicas <b>menos</b> tiene Pablo?». La respuesta es la misma: 13 menos.</p><p>Un dibujo ayuda mucho: dos barras, una larga para Marta y otra corta para Pablo. El trozo que sobra en la barra larga es la diferencia.</p><p>Recuerda: en los problemas de comparar, siempre restamos el <b>grande menos el pequeño</b>.</p><p><b>Actividad</b>: «Un perro pesa 25 kilos y un gato 4. ¿Cuántos kilos más pesa el perro?».</p>`,
        L6.filas("Comparar", [["Marta", "34 canicas", cAZ], ["Pablo", "21 canicas", cVE], ["diferencia", "34 − 21 = 13", cRO], ["solución", "13 más", cNA]])],
    ],
    "Un problema de restar": [
      ["Problemas de dos pasos", `<p>Algunos problemas necesitan <mark>dos operaciones</mark>, una detrás de otra. Como en la lectura del mercadillo.</p><p>«En el autobús van 30 personas. En una parada <b>bajan</b> 12 y <b>suben</b> 8. ¿Cuántas personas van ahora?»</p><ul><li><b>Paso 1</b>: bajan 12, restamos. 30 − 12 = 18.</li><li><b>Paso 2</b>: suben 8, sumamos. 18 + 8 = 26.</li><li><b>Solución</b>: ahora van 26 personas.</li></ul><p>Para no perdernos, resolvemos <b>una cosa cada vez</b>, en el orden en que pasan en la historia. Y escribimos el resultado de cada paso.</p><p>Hacer un dibujo o una <b>línea de tiempo</b> con lo que ocurre primero y después también ayuda.</p><p><b>Actividad</b>: «Tenía 20 €. Gasté 7 € en un libro y mi abuela me dio 5 €. ¿Cuánto tengo?».</p>`,
        H6.flujo("Autobús", ["30|al principio", "− 12|bajan", "+ 8|suben", "= 26|ahora"], cNA),
        ["uGbbW1F_ASU", "www.matecitos.com: 2º Primaria: Problemas con Sumas y Restas", "Matecitos", 365813]],
    ],
    "Escribir la solución": [
      ["¿Tiene sentido la solución?", `<p>Cuando terminamos un problema, hay que <mark>revisar</mark> si la solución <b>tiene sentido</b>. Hazte estas preguntas:</p><ul><li><b>¿He contestado a la pregunta?</b> Si preguntan «cuántos lápices», la respuesta debe hablar de lápices.</li><li><b>¿Es lógico el número?</b> Si una clase tiene 25 niños y faltan 3, no pueden quedar 28. ¡Tienen que ser menos!</li><li><b>¿Está cerca de mi estimación?</b> Calcula más o menos antes de hacer la cuenta.</li><li><b>¿He hecho bien la operación?</b> Haz la prueba.</li></ul><p>En la lectura, Jaime dijo 100 pulseras, pero Lucía se dio cuenta de que era imposible, porque habían vendido muchas. ¡Así descubrió el error!</p><p>Revisar no es perder el tiempo: es la mejor forma de no equivocarse.</p><p><b>Actividad</b>: revisa esta solución: «Tenía 40 cromos y perdí 15. Me quedan 55 cromos». ¿Tiene sentido?</p>`,
        H6.rueda("¿Tiene sentido?", "REVISAR", [["la pregunta", cAZ], ["lógico", cVE], ["estimar", cNA], ["prueba", cRO]])],
    ],
  },
  final: [
    ["Problemas de dinero", `<p>Los problemas de <mark>dinero</mark> son de los más útiles. Usamos sumas para saber cuánto cuesta todo, y restas para saber cuánto nos queda o cuánto nos devuelven.</p><p>«En la feria, Álex compra un algodón de azúcar de 3 € y una entrada a los coches de choque de 4 €. Paga con un billete de 10 €. ¿Cuánto le devuelven?»</p><ul><li><b>Paso 1</b>: ¿cuánto gasta? 3 + 4 = 7 €.</li><li><b>Paso 2</b>: ¿cuánto le devuelven? 10 − 7 = 3 €.</li><li><b>Solución</b>: le devuelven 3 €.</li></ul><p>También podemos preguntarnos si nos llega el dinero: si tengo 15 € y quiero algo de 18 €, me faltan 18 − 15 = 3 €.</p><p>¡No olvides poner el símbolo <b>€</b> en la solución!</p><p><b>Actividad</b>: con dinero de juguete, representad el problema de la feria en parejas.</p>`,
      L6.filas("Feria", [["algodón", "3 €", cRO], ["coches", "4 €", cAZ], ["gasto", "3 + 4 = 7 €", cVE], ["vuelta", "10 − 7 = 3 €", cNA]])],
    ["Repaso: el detective de problemas", `<p>Ahora eres un <mark>detective de problemas</mark>. Sigue tu plan para resolver este caso:</p><p>«En la biblioteca hay 85 libros de cuentos y 40 de animales. Los niños se llevan prestados 32 libros de cuentos. ¿Cuántos libros de cuentos quedan?»</p><ul><li><b>Lee</b> dos veces con calma.</li><li><b>Pregunta</b>: ¿cuántos libros de <b>cuentos</b> quedan?</li><li><b>Datos útiles</b>: 85 y 32. El 40 <b>sobra</b>, porque son de animales.</li><li><b>Operación</b>: se llevan libros, quedan menos. Restamos: 85 − 32 = 53.</li><li><b>Solución</b>: quedan 53 libros de cuentos.</li><li><b>Revisa</b>: 53 + 32 = 85. ¡Correcto! Y 53 es menor que 85: tiene sentido.</li></ul><p>¡Caso resuelto, detective!</p><p><b>Actividad</b>: inventa un caso de detective con un dato que sobre y pásaselo a un compañero.</p>`,
      H6.flujo("Detective", ["leer|2 veces", "datos|útiles", "operar|85 − 32", "revisar|53 ✓"], cMO)],
  ],
  ejemplos: [
    ["«Tengo 18 globos rojos y 7 azules. Tengo 8 años.» ¿Cuántos globos tengo?", ["El dato «8 años» sobra.", "18 + 7 = 25."], "Tengo 25 globos."],
    ["«Había 40 peces, se van 15 y llegan 10.» ¿Cuántos hay?", ["Paso 1: 40 − 15 = 25.", "Paso 2: 25 + 10 = 35."], "Hay 35 peces."],
  ],
  errores: ["Usar todos los números que aparecen, aunque algunos sobren.", "Sumar cuando la pregunta dice «cuántos más», aunque se trate de comparar y haya que restar."],
  ejercicios: [
    ["b", "«Hay 15 patos y 9 se van volando.» ¿Cuántos quedan?", "6 patos."],
    ["b", "«Lucas tiene 7 años y 12 coches.» ¿Qué dato sobra si preguntan por los coches?", "Los 7 años."],
    ["b", "Juan tiene 20 cromos y Eva 14. ¿Cuántos más tiene Juan?", "6 más."],
    ["b", "Compro algo de 5 € y pago con 10 €. ¿Cuánto me devuelven?", "5 €."],
    ["b", "Si había 25 niños y se van 3, ¿pueden quedar 28?", "No, tienen que ser menos: 22."],
    ["m", "Un tren lleva 48 personas. Bajan 15 y suben 20. ¿Cuántas van?", "53."],
    ["m", "Una cuerda mide 75 cm y otra 50 cm. ¿Cuánto más mide la primera?", "25 cm."],
    ["m", "Compro un zumo de 2 € y un bocadillo de 4 €. Pago con 10 €. ¿Cuánto me devuelven?", "4 €."],
    ["m", "En un árbol hay 34 pájaros. Llegan 12 y se van 20. ¿Cuántos hay?", "26."],
    ["m", "Revisa: «Tenía 50 € y gasté 20 €. Me quedan 70 €». ¿Está bien?", "No; quedan 30 €."],
    ["a", "En la lectura, ¿qué error cometió Jaime y cómo lo descubrieron?", "Sumó todo; Lucía vio que vendiendo debían tener menos. Eran 50."],
    ["a", "Inventa un problema de dos pasos con el dinero de tu hucha.", "Respuesta abierta."],
    ["a", "Inventa un problema de comparar con la altura de dos personas.", "Respuesta abierta."],
    ["a", "Hay 100 sillas. Se ocupan 45 y luego se van 10 personas. ¿Cuántas sillas libres hay?", "65."],
  ],
  quiz: [
    ["En un problema, un dato que no se usa…", ["sobra", "se suma siempre", "es la pregunta"], "Datos."],
    ["«¿Cuántas más tiene Marta?» se resuelve…", ["restando", "sumando todo", "multiplicando"], "Comparar."],
    ["30 personas, bajan 12 y suben 8: van…", ["26", "50", "10"], "Dos pasos."],
    ["Si faltan niños, deben quedar…", ["menos", "más", "los mismos"], "Sentido."],
    ["Gasto 7 € y pago con 10 €: me devuelven…", ["3 €", "17 €", "7 €"], "Dinero."],
  ],
  examen: [
    ["En la lectura, ¿cuántas pulseras tienen después del recreo?", ["50", "100", "35"], "Lectura."],
    ["En el caso del detective, ¿qué dato sobra?", ["40", "85", "32"], "Detective."],
  ],
  tarjetas: [
    ["Dos pasos", "Una cosa cada vez, en el orden en que pasa."],
    ["Revisar", "¿Contesta la pregunta? ¿Es lógico? ¿Hice la prueba?"],
  ],
  glosario: [
    ["Problema", "Historia con números y una pregunta."],
    ["Dato", "Número o información útil del problema."],
    ["Dato que sobra", "Información que no hace falta."],
    ["Pregunta", "Lo que hay que averiguar."],
    ["Operación", "Cuenta que hacemos: suma o resta."],
    ["Solución", "Frase que contesta la pregunta."],
    ["Comparar", "Ver cuánto más o menos hay."],
    ["Diferencia", "Lo que hay de más en una cantidad."],
    ["Revisar", "Comprobar que todo está bien."],
    ["Solidario", "Que ayuda a otros."],
  ],
  situacion: {
    titulo: "Nuestro mercadillo solidario",
    reto: "La clase prepara un mercadillo solidario y resuelve los problemas de cuentas que van surgiendo durante la venta.",
    pasos: ["Fabricar objetos para vender y ponerles precio.", "Apuntar cuántos hay, cuántos se venden y cuántos se añaden.", "Resolver problemas de dos pasos y de dar la vuelta.", "Revisar cada solución y explicar si tiene sentido."],
    producto: "Un mercadillo con una libreta de cuentas y problemas resueltos.",
    evaluacion: ["Distingue los datos útiles de los que sobran.", "Resuelve problemas de comparar.", "Resuelve problemas de dos pasos.", "Revisa si la solución tiene sentido."],
  },
});
