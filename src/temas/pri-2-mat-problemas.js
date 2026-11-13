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
