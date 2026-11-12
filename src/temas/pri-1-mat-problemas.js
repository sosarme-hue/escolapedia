// Matemáticas 1º de Primaria: problemas de sumar y restar.
const { mapa } = require("./_util");
const { svg, puntos, num, txt, PROF, FUENTES } = require("./_pri1");

// Pasos del problema como tarjetas numeradas.
const paso = (x, y, n, t, c) => `<g><circle cx="${x}" cy="${y}" r="15" fill="${c}"/>${num(x, y + 6, n, "var(--card)", 16)}${txt(x + 26, y + 5, t, "var(--ink)", 13).replace('text-anchor="middle"', 'text-anchor="start"')}</g>`;

module.exports = {
  materia: "Matemáticas",
  curso: "1-primaria",
  titulo: "Problemas de sumar y restar",
  minutos: 25,
  objetivos: ["Leer un problema y entender qué pregunta", "Decidir si hay que sumar o restar", "Escribir la operación y la respuesta con su palabra"],
  claves: ["datos", "pregunta", "operación", "solución", "sumar o restar"],
  pregunta: {
    texto: "En un autobús van 8 personas. En una parada bajan 3. ¿Hay que sumar o restar para saber cuántas quedan?",
    respuesta: "Hay que <mark>restar</mark>, porque las personas que bajan se van: 8 − 3 = 5 personas.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un problema?</h3><p>Un problema es una <mark>pequeña historia con números</mark> que termina con una pregunta.</p><p>Para resolverlo, tenemos que pensar qué pasa en la historia. Los números solos no bastan: hay que entender qué nos piden.</p>`,
      svg: svg("Un niño pensando con un bocadillo con un signo de interrogación y números", `<circle cx="70" cy="110" r="30" fill="var(--sun)"/><circle cx="60" cy="104" r="4" fill="var(--ink)"/><circle cx="82" cy="104" r="4" fill="var(--ink)"/><path d="M60 122 q 10 6 20 0" stroke="var(--ink)" stroke-width="2.5" fill="none"/><ellipse cx="170" cy="60" rx="70" ry="38" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="110" cy="96" r="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${num(140, 72, "3", "var(--pen)", 24)}${num(170, 72, "?", "var(--red)", 32)}${num(200, 72, "5", "var(--leaf)", 24)}`),
    },
    {
      html: `<h3>Los cuatro pasos</h3><p>Para resolver un problema seguimos <mark>cuatro pasos</mark>: <b>1.</b> leer despacio, <b>2.</b> buscar los datos, <b>3.</b> hacer la operación, <b>4.</b> escribir la solución.</p><p>Si lo haces siempre así, ¡casi nunca te equivocarás!</p>`,
      svg: svg("Los cuatro pasos: leer, datos, operación y solución", `${paso(40, 35, "1", "Leo despacio", "var(--pen)")}${paso(40, 72, "2", "Busco los datos", "var(--leaf)")}${paso(40, 109, "3", "Hago la operación", "var(--red)")}${paso(40, 146, "4", "Escribo la solución", "var(--sun)")}`),
    },
    {
      html: `<h3>Leer y buscar la pregunta</h3><p>Primero leemos <b>despacio</b>, con un adulto si hace falta. Luego buscamos <mark>la pregunta</mark>, que lleva los signos ¿?.</p><p>«Lucía tiene 4 lápices. Su madre le da 3. <u>¿Cuántos lápices tiene ahora?</u>» Subrayamos la pregunta para no olvidarla.</p>`,
      svg: svg("Un texto de problema con la pregunta subrayada en rojo", `<rect x="25" y="25" width="210" height="120" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${[45, 65, 85].map((y, i) => `<rect x="40" y="${y}" width="${[170, 150, 120][i]}" height="8" rx="4" fill="var(--line)"/>`).join("")}<rect x="40" y="108" width="160" height="10" rx="5" fill="var(--pen)" opacity=".6"/><path d="M40 124 H 200" stroke="var(--red)" stroke-width="3"/>${txt(130, 165, "¿la pregunta?", "var(--red)")}`),
    },
    {
      html: `<h3>Rodear los datos</h3><p>Los <mark>datos</mark> son los números que necesitamos. Los rodeamos con un color.</p><p>En el problema de Lucía, los datos son <b>4</b> lápices y <b>3</b> lápices. A veces hay números que no sirven: hay que fijarse bien en la pregunta.</p>`,
      svg: svg("Los números 4 y 3 rodeados con un círculo", `<ellipse cx="80" cy="85" rx="38" ry="32" fill="none" stroke="var(--leaf)" stroke-width="4"/>${num(80, 100, "4", "var(--pen)", 44)}<ellipse cx="180" cy="85" rx="38" ry="32" fill="none" stroke="var(--leaf)" stroke-width="4"/>${num(180, 100, "3", "var(--pen)", 44)}${txt(130, 150, "Los datos", "var(--leaf)", 16)}`),
    },
    {
      html: `<h3>¿Sumo o resto?</h3><p>Si en la historia <b>se junta, se añade o llega</b> algo, <mark>sumamos</mark>. Si <b>se quita, se va, se gasta o se pierde</b>, <mark>restamos</mark>.</p><p>Una pista: si al final hay más que al principio, es suma. Si hay menos, es resta.</p>`,
      svg: svg("Dos columnas: sumar con llegan, me dan, en total; restar con se van, pierdo, quedan", `<rect x="15" y="20" width="110" height="140" rx="12" fill="var(--leaf)" opacity=".15"/><rect x="135" y="20" width="110" height="140" rx="12" fill="var(--red)" opacity=".12"/>${num(70, 55, "+", "var(--leaf)", 34)}${num(190, 55, "−", "var(--red)", 34)}${["llegan", "me dan", "en total"].map((t, i) => txt(70, 90 + i * 24, t, "var(--ink)", 13)).join("")}${["se van", "pierdo", "quedan"].map((t, i) => txt(190, 90 + i * 24, t, "var(--ink)", 13)).join("")}`),
      video: { id: "xvyn-FfcQp4", titulo: "Sumas y restas: problemas matemáticos para niños", canal: "Smile and Learn - Español", vistas: 1961441, megusta: 0 },
    },
    {
      html: `<h3>Dibujar el problema</h3><p>Un dibujo nos ayuda mucho. Dibujamos <mark>palitos o círculos</mark> para cada cosa.</p><p>«Hay 7 pájaros y se van 2». Dibujo 7 pájaros y tacho 2. Cuento los que quedan: 5. No hace falta dibujar bonito: lo importante es contar bien.</p>`,
      svg: svg("Siete círculos, dos tachados: quedan cinco pájaros", `${puntos(7, 35, 80, "var(--pen)", 32, 11)}${[5, 6].map((i) => `<path d="M${25 + i * 32} 70 L ${45 + i * 32} 90 M${45 + i * 32} 70 L ${25 + i * 32} 90" stroke="var(--red)" stroke-width="3.5"/>`).join("")}${txt(130, 140, "7 − 2 = 5 pájaros", "var(--ink)", 16)}`),
    },
    {
      html: `<h3>La solución con su palabra</h3><p>Al final escribimos la <mark>solución completa</mark>: el número y lo que cuenta.</p><p>No basta con poner «7». Escribimos: <b>«Lucía tiene 7 lápices»</b>. Así sabemos si son lápices, niños o euros. Después leemos otra vez la pregunta: ¿hemos respondido?</p>`,
      svg: svg("Una caja de solución: Lucía tiene 7 lápices, con una marca de correcto", `<rect x="25" y="40" width="210" height="80" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="3"/>${txt(130, 70, "Solución:", "var(--leaf)", 14)}${txt(130, 100, "Lucía tiene 7 lápices", "var(--ink)", 16)}<path d="M200 140 l 10 12 l 22 -26" stroke="var(--leaf)" stroke-width="5" fill="none"/>`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Resolver problemas sirve para <b>la vida real</b>: saber cuántos platos poner en la mesa, cuántos cromos faltan o cuánto dinero sobra al comprar.</p><p>Las matemáticas son una <mark>herramienta para pensar</mark>. Cada día resolvemos problemas sin darnos cuenta.</p>`,
      svg: svg("Una mesa con cuatro platos y dos platos más que llegan", `<rect x="40" y="80" width="180" height="12" rx="4" fill="var(--sun)"/><path d="M55 92 V 140 M205 92 V 140" stroke="var(--sun)" stroke-width="8"/>${[0, 1, 2, 3].map((i) => `<ellipse cx="${70 + i * 40}" cy="76" rx="15" ry="5" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>`).join("")}${[0, 1].map((i) => `<ellipse cx="${205 + i * 0}" cy="${30 + i * 18}" rx="15" ry="5" fill="var(--pen)" opacity=".7"/>`).join("")}${txt(235, 44, "+2", "var(--pen)", 16)}${txt(100, 40, "4 + 2 = 6 platos")}`),
    },
    {
      html: `<h3>Juego: inventa tu problema</h3><p>Ahora tú eres quien pregunta. Mira el dibujo e <mark>inventa un problema</mark>: «En el árbol hay 6 manzanas. Se caen 2. ¿Cuántas quedan?».</p><p>Pide a alguien de tu familia que lo resuelva. Después cambiad: que te inventen uno a ti.</p>`,
      svg: svg("Un árbol con seis manzanas y dos caídas en el suelo", `<rect x="118" y="95" width="24" height="60" fill="var(--sun)" opacity=".7"/><circle cx="130" cy="70" r="55" fill="var(--leaf)"/>${[[100, 50], [130, 40], [160, 55], [110, 85], [150, 85], [130, 70]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="8" fill="var(--red)"/>`).join("")}<circle cx="80" cy="160" r="8" fill="var(--red)"/><circle cx="185" cy="162" r="8" fill="var(--red)"/>`),
    },
  ],
  figura: {
    titulo: "Cómo resolver un problema",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Cuatro pasos en fila: leo, busco los datos, sumo o resto y escribo la solución">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["1", "Leo", "despacio", "var(--pen)"], ["2", "Datos", "rodeo números", "var(--leaf)"], ["3", "¿+ o −?", "hago la cuenta", "var(--red)"], ["4", "Solución", "con su palabra", "var(--sun)"]].map(([n, t, s, c], i) => `<rect x="${25 + i * 152}" y="40" width="135" height="140" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/><circle cx="${92 + i * 152}" cy="72" r="20" fill="${c}"/>${num(92 + i * 152, 80, n, "var(--card)", 22)}${txt(92 + i * 152, 128, t, "var(--ink)", 18)}${txt(92 + i * 152, 155, s, "var(--muted)", 13)}${i < 3 ? `<path d="M${163 + i * 152} 110 l 10 0" stroke="var(--ink)" stroke-width="3"/>` : ""}`).join("")}
    </svg>`,
  },
  video: { id: "2zdcY7Kmdjg", titulo: "Sumas y restas para niños: nivel fácil con retos", canal: "Mini Genios TV", vistas: 4931499, megusta: 0, busqueda: "problemas de sumas y restas para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "En la clase hay 12 niñas y 7 niños. ¿Cuántos alumnos hay en total?", pasos: ["Pregunta: cuántos hay en total.", "Datos: 12 niñas y 7 niños.", "«En total» es juntar: sumo 12 + 7 = 19."], resultado: "en la clase hay 19 alumnos." },
    { enunciado: "Tenía 9 euros y me he gastado 4. ¿Cuántos euros me quedan?", pasos: ["Pregunta: cuántos euros quedan.", "Datos: 9 euros y 4 euros.", "«Gastado» es quitar: resto 9 − 4 = 5."], resultado: "me quedan 5 euros." },
    { enunciado: "Mi álbum tiene 30 huecos y he pegado 20 cromos. ¿Cuántos me faltan?", pasos: ["Pregunta: cuántos faltan.", "Datos: 30 huecos y 20 cromos.", "Para saber lo que falta, resto: 30 − 20 = 10."], resultado: "me faltan 10 cromos." },
  ],
  errores: [
    "Hacer la cuenta sin leer la pregunta: primero hay que entender qué nos piden.",
    "Sumar siempre porque es más fácil: hay que pensar si la cantidad crece o disminuye.",
    "Escribir solo el número en la solución, sin decir qué es.",
    "Usar un número que no hace falta: no todos los números del problema son datos útiles.",
  ],
  ejercicios: [
    { q: "Tengo 5 coches y me regalan 3. ¿Cuántos tengo?", sol: "5 + 3 = 8. Tengo 8 coches." },
    { q: "Hay 8 galletas y me como 2. ¿Cuántas quedan?", sol: "8 − 2 = 6. Quedan 6 galletas." },
    { q: "En un estanque hay 4 patos. Llegan 4 más. ¿Cuántos hay?", sol: "4 + 4 = 8. Hay 8 patos." },
    { q: "Pedro tiene 10 canicas y pierde 3. ¿Cuántas le quedan?", sol: "10 − 3 = 7. Le quedan 7 canicas." },
    { q: "Ana lee 20 páginas el lunes y 10 el martes. ¿Cuántas lee en total?", sol: "20 + 10 = 30. Lee 30 páginas." },
    { q: "En el autobús van 15 personas y bajan 5. ¿Cuántas quedan?", sol: "15 − 5 = 10. Quedan 10 personas." },
    { q: "Hay 6 sillas y llegan 9 niños. ¿Cuántas sillas faltan?", sol: "9 − 6 = 3. Faltan 3 sillas." },
    { q: "Un lápiz cuesta 1 euro y una goma 2 euros. ¿Cuánto cuestan juntos?", sol: "1 + 2 = 3. Cuestan 3 euros." },
    { q: "¿Sumo o resto? «Se escapan 2 conejos».", sol: "Resto: se escapan, hay menos." },
    { q: "Inventa un problema que se resuelva con 4 + 5.", sol: "Por ejemplo: «Tengo 4 flores y corto 5 más. ¿Cuántas tengo?». Son 9 flores." },
  ],
  quiz: [
    { q: "Lo primero para resolver un problema es…", o: ["hacer la cuenta", "leer despacio", "escribir la solución"], a: 1, e: "Primero entendemos la historia." },
    { q: "«Llegan 3 niños más» indica…", o: ["sumar", "restar", "nada"], a: 0, e: "Llegan: hay más." },
    { q: "«Se rompen 2 vasos» indica…", o: ["sumar", "restar", "comparar"], a: 1, e: "Se rompen: hay menos." },
    { q: "Tengo 6 cromos y me dan 4. Tengo…", o: ["2", "10", "64"], a: 1, e: "6 + 4 = 10." },
    { q: "Hay 9 peces y se comen 3 el gato. Quedan…", o: ["6", "12", "3"], a: 0, e: "9 − 3 = 6." },
    { q: "La solución completa es…", o: ["5", "5 + 2", "Tengo 7 globos"], a: 2, e: "Número y palabra." },
    { q: "Los datos son…", o: ["los números que necesito", "los dibujos", "la pregunta"], a: 0, e: "Los rodeamos." },
    { q: "«¿Cuántos hay en total?» suele ser…", o: ["suma", "resta", "ninguna"], a: 0, e: "En total: juntar." },
    { q: "Hay 7 sillas y 5 niños. ¿Cuántas sillas sobran?", o: ["12", "2", "5"], a: 1, e: "7 − 5 = 2." },
    { q: "Si al final hay más que al principio, es…", o: ["resta", "suma", "empate"], a: 1, e: "La cantidad ha crecido." },
  ],
  examen: [
    { q: "Hay 3 gatos y llegan 5. ¿Cuántos hay?", o: ["8", "2", "35"], a: 0, e: "3 + 5 = 8." },
    { q: "Tengo 10 € y gasto 6 €. Me quedan…", o: ["16 €", "4 €", "6 €"], a: 1, e: "10 − 6 = 4." },
    { q: "«Se van 4 pájaros» indica…", o: ["suma", "resta", "doble"], a: 1, e: "Se van: menos." },
    { q: "40 cromos y me dan 20. Tengo…", o: ["60", "20", "42"], a: 0, e: "40 + 20 = 60." },
  ],
  feynman: ["Qué pasos sigo para resolver un problema", "Cómo sé si hay que sumar o restar", "Por qué escribo la solución con una palabra"],
  mapa: mapa("PROBLEMAS", "var(--pri)", [
    ["1. Leer", "despacio y buscar la pregunta", "var(--pen)"],
    ["2. Datos", "rodear los números útiles", "var(--leaf)"],
    ["3. Operación", "+ si crece · − si disminuye", "var(--red)"],
    ["4. Solución", "número y palabra", "var(--sun)"],
  ], 220),
  tarjetas: [
    ["¿Cuántos pasos tiene un problema?", "4: leer, datos, operación, solución"],
    ["«Me regalan» es…", "Sumar"],
    ["«Se pierden» es…", "Restar"],
    ["¿Qué son los datos?", "Los números que necesito"],
    ["¿Dónde está la pregunta?", "Entre ¿ ?"],
    ["¿Cómo escribo la solución?", "Con el número y su palabra"],
    ["«Faltan» suele ser…", "Restar"],
    ["¿Qué me ayuda si no lo entiendo?", "Hacer un dibujo"],
  ],
  familias: [
    "Convertid momentos de casa en problemas: poner la mesa, repartir fruta, contar la compra.",
    "Leed el problema en voz alta con él o ella: a esta edad la lectura aún cuesta.",
    "Animad a hacer un dibujo antes de la cuenta: palitos o círculos son suficientes.",
    "Pedid siempre la respuesta con palabra: «7 lápices», no solo «7».",
  ],
  profesores: PROF("Sentido numérico y resolución de problemas: problemas aditivos de cambio, combinación y comparación sencilla; estrategias de representación y comprobación", ["Tarjetas de palabras clave «+» y «−» para clasificar enunciados.", "Problemas teatralizados con el alumnado (suben y bajan del «autobús»).", "Inventar problemas en parejas a partir de una imagen."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
