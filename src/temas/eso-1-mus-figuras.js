// Música 1º ESO: las figuras y el ritmo. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, penta, mezcla, vb, vg } = require("./_eso1c");

// Silencios esquemáticos sobre un pentagrama (y0 = 1.ª línea de arriba, g = separación).
const silRedonda = (x, y0, g) => `<rect x="${x - g * 0.6}" y="${y0 + g}" width="${g * 1.2}" height="${g * 0.5}" fill="var(--ink)"/>`;
const silBlanca = (x, y0, g) => `<rect x="${x - g * 0.6}" y="${y0 + g * 1.5}" width="${g * 1.2}" height="${g * 0.5}" fill="var(--ink)"/>`;
const silNegra = (x, y0, g) => `<path d="M${x - 2} ${y0 + g * 0.6} L ${x + 4} ${y0 + g * 1.4} L ${x - 3} ${y0 + g * 2.2} L ${x + 4} ${y0 + g * 3} C ${x - 4} ${y0 + g * 2.8} ${x - 4} ${y0 + g * 3.6} ${x + 1} ${y0 + g * 3.8}" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linejoin="round"/>`;
const silCorchea = (x, y0, g) => `<circle cx="${x - 3}" cy="${y0 + g * 1.5}" r="${g * 0.25}" fill="var(--ink)"/><path d="M${x - 4} ${y0 + g * 1.7} Q ${x + 1} ${y0 + g * 2} ${x + 5} ${y0 + g * 1.4} L ${x - 1} ${y0 + g * 3.2}" fill="none" stroke="var(--ink)" stroke-width="2"/>`;

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "Las figuras y el ritmo",
  minutos: 50,
  objetivos: ["Diferenciar pulso, ritmo y acento", "Conocer las figuras y los silencios con sus duraciones", "Entender el compás de 2/4, 3/4 y 4/4", "Leer, tocar y crear ritmos sencillos"],
  claves: ["pulso", "ritmo", "figura", "silencio", "compás", "puntillo"],
  pregunta: {
    texto: "¿Por qué sabes dar palmas al ritmo de una canción aunque nunca hayas estudiado música?",
    respuesta: "Porque casi toda la música tiene un <b>pulso</b>, un latido regular como el del corazón, y nuestro cuerpo lo detecta solo. Sobre ese pulso se colocan sonidos largos y cortos: el <b>ritmo</b>. <mark>Las figuras musicales son la forma de escribir esas duraciones</mark> para que cualquiera pueda leerlas y tocarlas igual.",
  },
  bloques: [
    {
      html: `<h3>Pulso, ritmo y acento</h3><ul><li>El <b>pulso</b> es el latido regular y constante de la música. Lo marcas sin pensar con el pie.</li><li>El <b>ritmo</b> es la combinación de sonidos y silencios de <b>distinta duración</b> que se colocan sobre el pulso. Es lo que haces al dar palmas «con la letra» de una canción.</li><li>El <b>acento</b> es un pulso que suena más fuerte que los demás. Los acentos se repiten cada 2, 3 o 4 pulsos y así organizan la música en grupos.</li></ul><p>Prueba: marca el pulso con el pie y, a la vez, da palmas con las sílabas de tu nombre y apellido. El pie es el pulso; las palmas, el ritmo.</p>`,
      svg: svg("Pulso: círculos iguales y regulares; ritmo: barras de distinta longitud sobre el mismo pulso", `${[...Array(8)].map((_, i) => `<circle cx="${30 + i * 28}" cy="48" r="8" fill="var(--red)" fill-opacity="${i % 2 ? 0.35 : 0.8}"/>`).join("")}${t(130, 22, "pulso (los oscuros llevan acento)", { c: "var(--red)", s: 11 })}${[[0, 1], [1, 0.5], [1.5, 0.5], [2, 2], [4, 1], [5, 1], [6, 2]].map(([a, d]) => `<rect x="${22 + a * 28}" y="96" width="${d * 28 - 5}" height="16" rx="5" fill="var(--pen)" fill-opacity=".45" stroke="var(--pen)" stroke-width="1.5"/>`).join("")}${t(130, 140, "ritmo: duraciones distintas", { c: "var(--pen)", s: 11 })}`, 160),
      video: vb("figB"),
    },
    {
      html: `<h3>Las figuras musicales</h3><p>Las <b>figuras</b> indican la <b>duración</b> de cada sonido. Cada una dura la <b>mitad</b> que la anterior:</p>${tabla(["Figura", "Aspecto", "Pulsos (en 4/4)"], [["Redonda", "cabeza blanca sin plica", "4"], ["Blanca", "cabeza blanca con plica", "2"], ["Negra", "cabeza negra con plica", "1"], ["Corchea", "negra con un corchete", "½"], ["Semicorchea", "negra con dos corchetes", "¼"]])}<p>Las partes de una figura son la <b>cabeza</b> (indica la nota en el pentagrama), la <b>plica</b> (el palito) y el <b>corchete</b> (la banderita). Cuando hay varias corcheas seguidas, sus corchetes se unen con una <b>barra</b>.</p>`,
      svg: (() => { const p = penta(14, 246, 44, 10); return svg("Pentagrama con una redonda, una blanca, una negra y una corchea y sus pulsos: 4, 2, 1 y medio", `${p.s}${p.nota(44, 2, { redonda: true, blanca: true })}${p.nota(100, 2, { blanca: true })}${p.nota(156, 2)}${p.nota(210, 2, { corchea: true })}${t(44, 122, "redonda", { s: 11 })}${t(100, 122, "blanca", { s: 11 })}${t(156, 122, "negra", { s: 11 })}${t(210, 122, "corchea", { s: 11 })}${t(44, 144, "4", { c: "var(--pen)", s: 13 })}${t(100, 144, "2", { c: "var(--pen)", s: 13 })}${t(156, 144, "1", { c: "var(--pen)", s: 13 })}${t(210, 144, "½", { c: "var(--pen)", s: 13 })}${t(130, 168, "pulsos de cada figura", { c: "var(--muted)", s: 10 })}`); })(),
    },
    {
      html: `<h3>Las equivalencias</h3><p>Como cada figura vale la mitad que la anterior, se pueden cambiar unas por otras sumando:</p><ul><li>1 redonda = 2 blancas = 4 negras = 8 corcheas = 16 semicorcheas.</li><li>1 blanca = 2 negras = 4 corcheas.</li><li>1 negra = 2 corcheas = 4 semicorcheas.</li></ul><p>Es como el dinero: una moneda de 2 € equivale a dos de 1 €, o a cuatro de 50 céntimos. Un truco para la clase: dad una palma por negra («ta»), dos palmas rápidas por par de corcheas («ti-ti») y una palma mantenida durante dos pulsos por blanca («ta-a»).</p>`,
      svg: svg("Árbol de equivalencias: una redonda se divide en dos blancas, cuatro negras y ocho corcheas", `${[["redonda", 1, "var(--ink)"], ["blancas", 2, "var(--pen)"], ["negras", 4, "var(--leaf)"], ["corcheas", 8, "var(--sun)"]].map(([n, k, c], f) => [...Array(k)].map((_, i) => `<rect x="${(84 + (164 / k) * i + 2).toFixed(1)}" y="${18 + f * 36}" width="${(164 / k - 4).toFixed(1)}" height="24" rx="5" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="1.6"/>`).join("") + t(78, 35 + f * 36, `${k} ${k === 1 ? "redonda" : n}`, { s: 10, a: "end", c: f === 3 ? "var(--ink)" : c })).join("")}${t(130, 168, "cada fila dura lo mismo", { s: 10, c: "var(--muted)" })}`, 176),
    },
    {
      html: `<h3>Los silencios</h3><p>Cada figura tiene su <b>silencio</b>, que dura exactamente lo mismo pero sin sonar. Los silencios se cuentan igual que las notas.</p><ul><li><b>Silencio de redonda</b> (4): un rectángulo que <b>cuelga</b> de la 4.ª línea.</li><li><b>Silencio de blanca</b> (2): un rectángulo <b>apoyado</b> sobre la 3.ª línea.</li><li><b>Silencio de negra</b> (1): un zigzag vertical.</li><li><b>Silencio de corchea</b> (½): parece un 7 con un punto.</li></ul><p>Truco para no confundir los dos primeros: el de redonda «pesa más» y por eso cuelga; el de blanca es más ligero y se sienta encima.</p>`,
      svg: (() => { const p = penta(14, 246, 44, 12); return svg("Pentagrama con los silencios de redonda, blanca, negra y corchea", `${p.s}${silRedonda(50, 44, 12)}${silBlanca(105, 44, 12)}${silNegra(160, 44, 12)}${silCorchea(214, 44, 12)}${t(50, 130, "redonda", { s: 10 })}${t(105, 130, "blanca", { s: 10 })}${t(160, 130, "negra", { s: 10 })}${t(214, 130, "corchea", { s: 10 })}${t(50, 150, "4", { s: 12, c: "var(--pen)" })}${t(105, 150, "2", { s: 12, c: "var(--pen)" })}${t(160, 150, "1", { s: 12, c: "var(--pen)" })}${t(214, 150, "½", { s: 12, c: "var(--pen)" })}`, 166); })(),
    },
    {
      html: `<h3>El compás</h3><p>El <b>compás</b> agrupa los pulsos según sus acentos. En la partitura se separa con <b>líneas divisorias</b> verticales y la obra termina con una <b>doble barra final</b>.</p><p>Al principio se escribe una fracción, el <b>indicador de compás</b>: el número de arriba dice <b>cuántos pulsos</b> tiene cada compás, y el 4 de abajo indica que el pulso es la <b>negra</b>.</p>${tabla(["Compás", "Acentos", "Música típica"], [["2/4", "FUER-te, dé-bil", "marchas, pasodobles"], ["3/4", "FUER-te, dé-bil, dé-bil", "valses, jotas"], ["4/4", "FUER-te, dé-bil, semifuerte, dé-bil", "pop, rock, himnos"]])}`,
      svg: (() => { const p = penta(10, 250, 50, 10); return svg("Pentagrama en compás de cuatro por cuatro: dos compases separados por una línea divisoria y doble barra final", `${p.s}${t(24, 66, "4", { s: 16, d: true })}${t(24, 86, "4", { s: 16, d: true })}${p.nota(50, 4)}${p.nota(74, 3)}${p.nota(98, 2, { blanca: true })}${p.barra(126)}${p.nota(146, 2)}${p.nota(166, 2, { corchea: true })}${p.nota(186, 3, { corchea: true })}${p.nota(212, 4, { blanca: true })}${p.barra(236)}<path d="M244 50 V 90" stroke="var(--ink)" stroke-width="4"/>${t(84, 126, "1  2  3  4", { c: "var(--pen)", s: 12 })}${t(184, 126, "1  2  3  4", { c: "var(--pen)", s: 12 })}${t(126, 30, "línea divisoria", { c: "var(--muted)", s: 10 })}${t(130, 156, "compás de 4/4: cuatro negras por compás", { s: 11 })}`); })(),
      video: vb("figB2"),
    },
    {
      html: `<h3>El puntillo y la ligadura</h3><ul><li>El <b>puntillo</b> es un punto a la derecha de la figura que <b>añade la mitad de su valor</b>. Una blanca con puntillo dura 2 + 1 = <b>3 pulsos</b>; una negra con puntillo, 1 + ½ = <b>1 pulso y medio</b>.</li><li>La <b>ligadura de prolongación</b> es una línea curva que une <b>dos notas iguales</b>: la segunda no se toca, sino que se suma a la primera. Sirve para alargar una nota más allá de la línea divisoria.</li></ul><p>La blanca con puntillo llena justo un compás de 3/4, por eso aparece tanto en los valses.</p>`,
    },
    {
      html: `<h3>Leer un ritmo</h3><p>Para leer un ritmo sin equivocarte:</p><ol><li>Mira el <b>compás</b> y cuenta los pulsos en voz alta: «1, 2, 3, 4».</li><li>Identifica cada <b>figura</b> y cuántos pulsos ocupa.</li><li>Comprueba que cada compás <b>suma</b> lo que indica el número de arriba.</li><li>Marca el pulso con el pie y da palmas solo en las notas; en los silencios, abre las manos.</li></ol><p>Ejemplo inventado para la clase en 4/4: <b>negra, negra, blanca | corchea-corchea, negra, silencio de negra, negra</b>. Dilo con sílabas: «ta, ta, ta-a | ti-ti, ta, (sh), ta».</p>`,
    },
    {
      html: `<h3>Crear ritmos</h3><p>Componer ritmos es muy sencillo si respetas la suma de cada compás. Algunas ideas:</p><ul><li><b>Ritmos con palabras</b>: «pan» = negra, «tomate» = corchea-corchea-negra («to-ma-te»), «chocolate» = cuatro corcheas.</li><li><b>Pregunta y respuesta</b>: un compañero toca un compás y tú respondes con otro distinto.</li><li><b>Ostinato</b>: un ritmo corto que se repite sin parar mientras otro grupo improvisa encima.</li><li><b>Percusión corporal</b>: asigna una parte del cuerpo a cada figura (pie para negras, palmas para corcheas, muslos para blancas).</li></ul><p>Escribe tu ritmo de cuatro compases, intercámbialo con un compañero y tocad los dos a la vez.</p>`,
    },
  ],
  figura: {
    titulo: "Figuras y ritmo en un vistazo",
    svg: filas("Resumen: pulso regular; ritmo de duraciones; redonda 4, blanca 2, negra 1, corchea medio; silencios; compases 2/4, 3/4 y 4/4; puntillo suma la mitad", [["Pulso", "latido regular", "var(--red)"], ["Ritmo", "duraciones sobre el pulso", "var(--pen)"], ["Figuras", "redonda 4 · blanca 2 · negra 1", "var(--leaf)"], ["Silencios", "misma duración sin sonar", "var(--ink)"], ["Compás", "2/4 · 3/4 · 4/4", "var(--sun)"], ["Puntillo", "+ la mitad del valor", "var(--inf)"]], 200),
  },
  video: vg("figV"),
  quiz: mezcla([
    { q: "El latido regular de la música es el…", o: ["pulso", "ritmo", "timbre"], a: 0, e: "Constante." },
    { q: "¿Cuántos pulsos dura una blanca en 4/4?", o: ["2", "1", "4"], a: 0, e: "Mitad de la redonda." },
    { q: "Una redonda equivale a…", o: ["4 negras", "2 negras", "8 negras"], a: 0, e: "4 pulsos." },
    { q: "Una negra equivale a…", o: ["2 corcheas", "4 corcheas", "1 corchea"], a: 0, e: "½ + ½." },
    { q: "La banderita de la corchea se llama…", o: ["corchete", "plica", "cabeza"], a: 0, e: "Partes de la figura." },
    { q: "El silencio que cuelga de la 4.ª línea es el de…", o: ["redonda", "blanca", "negra"], a: 0, e: "El de blanca se apoya." },
    { q: "En 3/4, cada compás tiene…", o: ["3 negras", "4 negras", "3 blancas"], a: 0, e: "Número de arriba." },
    { q: "Una blanca con puntillo dura…", o: ["3 pulsos", "2 pulsos", "2,5 pulsos"], a: 0, e: "2 + 1." },
    { q: "Las líneas verticales que separan compases son…", o: ["líneas divisorias", "plicas", "ligaduras"], a: 0, e: "Divisorias." },
    { q: "Un ritmo corto que se repite sin parar es un…", o: ["ostinato", "acento", "puntillo"], a: 0, e: "Recurso de acompañamiento." },
  ]),
  examen: mezcla([
    { q: "¿Cuántas corcheas caben en un compás de 3/4?", o: ["6", "3", "8"], a: 0, e: "3 negras × 2." },
    { q: "En 4/4 hay una blanca y una negra. ¿Qué falta para completar el compás?", o: ["una negra", "una blanca", "nada"], a: 0, e: "2 + 1 + 1 = 4." },
    { q: "Una negra con puntillo dura…", o: ["1,5 pulsos", "2 pulsos", "1 pulso"], a: 0, e: "1 + ½." },
  ]),
  feynman: ["Diferencia entre pulso y ritmo", "Cuánto dura cada figura y cada silencio", "Qué indican los números del compás", "Cómo funcionan el puntillo y la ligadura", "Cómo inventar un ritmo con palabras"],
  mapa: mapa("FIGURAS Y RITMO", "var(--eso)", [
    ["Pulso y acento", "latido · fuerte/débil", "var(--red)"],
    ["Figuras", "redonda → semicorchea", "var(--leaf)"],
    ["Silencios", "misma duración", "var(--ink)"],
    ["Compás", "2/4 · 3/4 · 4/4", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Pulso", "Latido regular y constante de la música."],
    ["Ritmo", "Combinación de duraciones sobre el pulso."],
    ["Redonda", "4 pulsos; cabeza blanca sin plica."],
    ["Blanca", "2 pulsos; cabeza blanca con plica."],
    ["Negra", "1 pulso; cabeza negra con plica."],
    ["Corchea", "Medio pulso; lleva un corchete."],
    ["Compás 3/4", "Tres negras: fuerte, débil, débil."],
    ["Puntillo", "Añade la mitad del valor de la figura."],
  ],
  familias: ["Jugad a dar palmas con las sílabas de los nombres de la familia.", "Inventad un ritmo con nombres de comidas y tocadlo con cucharas.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Ritmo: pulso, acento, figuras y silencios, compases simples, puntillo y ligadura; lectura, interpretación y creación rítmica (RD 217/2022, Música, elementos del lenguaje musical; interpretación y creación).",
    ideas: ["Tarjetas de figuras gigantes para formar compases en la pizarra.", "Percusión corporal con un ritmo de cuatro compases creado por cada grupo.", "Dictado rítmico con palmas: el profesor toca y los alumnos escriben."],
  },
  fuentes: [RD, { t: "Real Conservatorio Superior de Música de Madrid", url: "https://rcsmm.eu/" }],
  revisado: REV,
  ejemplosTitulo: "Ejercicios resueltos",
  ejemplos: [
    { enunciado: "Comprueba si este compás de 4/4 está completo: blanca, negra, corchea, corchea.", pasos: ["Blanca = 2.", "Negra = 1.", "Corchea + corchea = ½ + ½ = 1.", "Total: 2 + 1 + 1 = 4."], resultado: "Sí, suma 4 pulsos." },
    { enunciado: "Completa este compás de 3/4: negra, corchea, … ", pasos: ["Negra + corchea = 1 + ½ = 1,5.", "Faltan 3 − 1,5 = 1,5 pulsos.", "Se puede completar con una corchea y una negra (½ + 1)."], resultado: "Por ejemplo, corchea y negra (o una negra con puntillo)." },
    { enunciado: "Convierte la palabra «mariposa» en ritmo de un compás de 2/4.", pasos: ["Separa sílabas: ma-ri-po-sa (4 sílabas).", "Cuatro sílabas iguales en 2 pulsos: cuatro corcheas.", "Acento natural en «po»: puede ir en el segundo pulso."], resultado: "Cuatro corcheas: «ti-ti ti-ti»." },
  ],
  errores: [
    "Confundir pulso (regular) con ritmo (variado).",
    "Pensar que el silencio no cuenta y saltárselo.",
    "Confundir el silencio de redonda (cuelga) con el de blanca (apoyado).",
    "Olvidar que el puntillo suma la mitad del valor, no un pulso fijo.",
    "Escribir compases que no suman lo que indica el número de arriba.",
  ],
  ejercicios: [
    { q: "Escribe las cinco figuras de mayor a menor duración con sus pulsos en 4/4.", sol: "Redonda 4, blanca 2, negra 1, corchea ½, semicorchea ¼." },
    { q: "¿Cuántas negras equivalen a dos blancas?", sol: "4." },
    { q: "¿Cuántas corcheas caben en una redonda?", sol: "8." },
    { q: "Completa un compás de 4/4 que empieza con una blanca con puntillo.", sol: "Falta una negra (3 + 1)." },
    { q: "¿Qué compás tiene un vals? ¿Y una marcha?", sol: "3/4; 2/4." },
    { q: "Dibuja los silencios de redonda, blanca y negra.", sol: "Rectángulo colgando de la 4.ª línea; rectángulo sobre la 3.ª; zigzag." },
    { q: "Explica la diferencia entre el puntillo y la ligadura.", sol: "El puntillo añade la mitad del valor; la ligadura une dos notas iguales y suma sus duraciones." },
    { q: "Escribe un compás de 3/4 usando solo corcheas y negras.", sol: "Respuesta orientativa: negra, corchea, corchea, negra." },
    { q: "Convierte tu nombre en un ritmo de un compás.", sol: "Respuesta abierta." },
    { q: "Inventa un ostinato de un compás en 4/4 y escríbelo.", sol: "Respuesta abierta." },
  ],
};
