// Infantil 5 años · Comunicación y representación: escribimos palabras.
const { tema, letras, mapa, svg, rot, big, nino, dibujos, trozos, lista, mural, flechaR, vid, PROF, R, A, V, N, M, W, K } = require("./_inf5b");

const lapizGrande = (x, y) => `<g transform="translate(${x} ${y}) rotate(-35)"><rect x="-50" y="-9" width="80" height="18" fill="var(--sun)"/><path d="M30 -9 L52 0 L30 9z" fill="#e7c08f"/><path d="M45 -3 L52 0 L45 3z" fill="#2a2a2a"/><rect x="-62" y="-9" width="12" height="18" rx="3" fill="#f08fb0"/></g>`;

module.exports = tema({
  materia: "Comunicación y representación de la realidad",
  titulo: "Escribimos palabras",
  objetivos: ["Coger bien el lápiz, como una pinza", "Escribir de izquierda a derecha", "Escribir palabras cortas que se oyen o se copian"],
  claves: ["escribir", "lápiz", "pinza", "izquierda a derecha"],
  pregunta: {
    texto: "Si quieres acordarte de comprar pan, ¿cómo puedes hacerlo sin que nadie te lo diga?",
    respuesta: "¡<mark>Escribiéndolo</mark>! Si escribes PAN en un papel, el papel se acuerda por ti.",
  },
  bloques: [
    {
      html: `<h3>Cogemos el lápiz</h3><p>El lápiz se coge como una <mark>pinza</mark>: con el dedo gordo y el índice.</p><p>El dedo del medio lo sujeta por debajo.</p><p>No aprietes mucho: la mano va suave.</p>`,
      svg: svg("Un lápiz grande y una mano que hace la pinza con dos dedos", `${lapizGrande(110, 92)}<g transform="translate(200 96) scale(1.7)">${require("./_inf5b").I.mano}</g>${rot(130, 166, "Dedo gordo + índice = pinza", { color: K })}`),
    },
    {
      html: `<h3>De izquierda a derecha</h3><p>Escribimos siempre empezando por la <mark>izquierda</mark>.</p><p>Luego vamos hacia la derecha, letra a letra, como cuando leemos.</p><p>Y de arriba abajo en la hoja.</p><p>Igual que en los libros.</p>`,
      svg: svg("Una flecha de izquierda a derecha sobre la palabra MESA", `${flechaR(30, 50, 230, 50, R)}${rot(30, 36, "empiezo", { color: R, anchor: "start", size: 13 })}${rot(230, 36, "acabo", { color: R, anchor: "end", size: 13 })}${["M", "E", "S", "A"].map((l, i) => `<rect x="${38 + i * 48}" y="70" width="40" height="52" rx="8" fill="var(--card)" stroke="${A}" stroke-width="3"/>${big(58 + i * 48, 108, l, A, 30)}${rot(58 + i * 48, 146, String(i + 1), { color: "var(--muted)" })}`).join("")}`),
    },
    {
      html: `<h3>Copiamos palabras</h3><p>Primero miramos la palabra escrita.</p><p>Después escribimos <mark>la misma letra</mark>, una a una, debajo.</p><p>Al terminar, comparamos: ¿son iguales?</p><p>Si alguna letra es distinta, la arreglamos sin prisa.</p>`,
      svg: svg("La palabra SOL escrita arriba y copiada debajo con trazos de niño", `${big(130, 66, "SOL", A, 40)}<path d="M40 82 H220" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/><text x="130" y="134" text-anchor="middle" font-size="40" font-weight="700" fill="${R}" font-family="Comic Sans MS, Baloo 2, sans-serif">SOL</text><path d="M40 146 H220" stroke="var(--line)" stroke-width="2"/>${rot(130, 170, "Miro arriba y copio abajo", { color: K })}`),
    },
    {
      html: `<h3>Escribo lo que oigo</h3><p>Decimos la palabra <mark>muy despacio</mark>: «mmm-aaa-sss-aaa».</p><p>Escribimos una letra por cada sonido: <b>M-A-S-A</b>.</p><p>¡Así se escriben las palabras nuevas!</p><p>Primero despacio, después más rápido.</p>`,
      svg: letras("Los sonidos de MASA: M, A, S, A, y la palabra escrita", [["MASA", V]], { titulo: "«mmm - aaa - sss - aaa»", nota: "Un sonido, una letra" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Escribimos para <mark>no olvidar</mark> cosas, como la lista de la compra.</p><p>También para mandar mensajes: una tarjeta de cumpleaños o una carta a un amigo.</p><p>¿A quién escribirías tú?</p>`,
      svg: lista("Una lista de la compra: PAN, LECHE, UVAS", [["PAN", R], ["LECHE", A], ["UVAS", V]], { titulo: "Mi lista de la compra", marca: "n" }),
    },
    {
      html: `<h3>Juego: dictado de dibujos</h3><p>El adulto dibuja algo sencillo: un sol, una luna, un pato.</p><p>Tú dices la palabra despacio y la <mark>escribes debajo</mark>.</p><p>¡Luego cambiáis los papeles!</p><p>¡Qué divertido!</p>`,
      svg: dibujos("Un sol, una luna y un pato con su palabra escrita debajo", [["sol", "SOL", R], ["luna", "LUNA", A], ["pato", "PATO", V]], { titulo: "Dibujo y escribo" }),
    },
  ],
  figura: {
    titulo: "Los pasos para escribir",
    svg: mural("Cuatro pasos: coger el lápiz, decir la palabra despacio, escribir de izquierda a derecha y comprobar", [["lapiz", "1. Pinza", "cojo bien el lápiz", R], ["boca_abierta", "2. Digo", "la palabra despacio", A], ["libro", "3. Escribo", "de izquierda a derecha", V], ["ojo", "4. Miro", "¿está bien?", N]], "Escribir paso a paso"),
  },
  video: { ...vid("w9wvpDHOH88", "Aprende a escribir las letras del abecedario de la A a la Z", "Peques Aprenden Jugando", 13668695), busqueda: "aprender a escribir palabras para niños infantil" },
  ejemplos: [
    { enunciado: "Escribimos la palabra PIE.", pasos: ["La decimos despacio: «ppp-iii-eee».", "Primer sonido: P. Segundo: I. Tercero: E.", "Escribimos P, I, E de izquierda a derecha."], resultado: "PIE." },
    { enunciado: "Copiamos la palabra MAMÁ.", pasos: ["Miramos la primera letra: M. La escribimos.", "Seguimos con A, M y A.", "Comparamos las dos palabras."], resultado: "MAMÁ, igual que el modelo." },
  ],
  errores: [
    "Coger el lápiz con el puño cerrado: se coge como una pinza.",
    "Empezar a escribir por la derecha: se empieza por la izquierda.",
    "Olvidar una letra: hay que decir la palabra muy despacio.",
  ],
  ejercicios: [
    { q: "Haz pinzas con los dedos cogiendo pompones o garbanzos.", sol: "Nota para la familia: ayuda a coger bien el lápiz." },
    { q: "Repasa con el dedo las letras de tu nombre.", sol: "Nota: escribidlo grande y que lo siga de izquierda a derecha." },
    { q: "Copia la palabra SOL.", sol: "S, O, L. Comparad con el modelo." },
    { q: "Escribe tu nombre en tu dibujo.", sol: "Nota: puede copiarlo de un modelo." },
    { q: "Escribe la palabra PAN para la lista de la compra.", sol: "P-A-N. Nota: llevad la lista a la tienda." },
    { q: "Escribe en la arena o en harina con el dedo: MA.", sol: "Nota: es una forma divertida de practicar sin papel." },
  ],
  quiz: [
    { q: "El lápiz se coge…", o: ["como una pinza", "con el puño", "con los pies"], a: 0, e: "Con el dedo gordo y el índice." },
    { q: "¿Por dónde empezamos a escribir?", o: ["por la derecha", "por la izquierda", "por abajo"], a: 1, e: "De izquierda a derecha." },
    { q: "Para escribir una palabra nueva…", o: ["la digo despacio", "la adivino", "dibujo un sol"], a: 0, e: "Un sonido, una letra." },
    { q: "S-O-L se escribe…", o: ["LOS", "SOL", "OSL"], a: 1, e: "S, O, L en orden." },
    { q: "¿Para qué sirve la lista de la compra?", o: ["para no olvidar", "para pintar", "para jugar"], a: 0, e: "Escribimos para recordar." },
    { q: "Después de copiar una palabra…", o: ["la tiro", "la comparo", "la borro"], a: 1, e: "Miramos si es igual." },
  ],
  examen: [
    { q: "¿Qué dedos hacen la pinza?", o: ["gordo e índice", "meñique y anular", "todos"], a: 0, e: "Dedo gordo + índice." },
    { q: "P-I-E se escribe…", o: ["PIE", "EIP", "PEI"], a: 0, e: "En orden." },
    { q: "Escribo una tarjeta de cumpleaños para…", o: ["mandar un mensaje", "comer", "dormir"], a: 0, e: "Escribimos mensajes." },
  ],
  feynman: ["Cómo se coge el lápiz", "Por qué lado se empieza a escribir", "Cómo escribo una palabra que oigo"],
  mapa: mapa("ESCRIBIR", "var(--pri)", [
    ["Pinza", "cojo bien el lápiz", R],
    ["Dirección", "de izquierda a derecha", A],
    ["Sonidos", "un sonido, una letra", V],
    ["Para qué", "recordar y mandar mensajes", N],
  ], 220),
  tarjetas: [
    ["¿Cómo se coge el lápiz?", "Como una pinza"],
    ["¿Por dónde empiezo a escribir?", "Por la izquierda"],
    ["¿Cómo escribo una palabra nueva?", "La digo despacio y escribo cada sonido"],
    ["S-O-L = …", "SOL"],
    ["¿Para qué escribo la lista?", "Para no olvidar"],
    ["Después de copiar…", "Comparo con el modelo"],
  ],
  familias: [
    "Escribid juntos la lista de la compra: que añada una palabra corta.",
    "Dejad notas cortas en la nevera (TE QUIERO, HOLA) para que las copie.",
    "Practicad la pinza con juegos: pinzas de la ropa, pegatinas, plastilina.",
    "Escribid en superficies divertidas: pizarra, arena, espuma o el vaho del cristal.",
  ],
  profesores: PROF("Aproximación al lenguaje escrito: escritura de palabras con intención comunicativa, prensión del útil, direccionalidad y correspondencia sonido-grafía", ["Rincón de escritura con listas, tarjetas y carteles reales.", "Dictado de dibujos en pequeño grupo.", "Actividades de motricidad fina previas: pinzas, ensartar, recortar."]),
});
