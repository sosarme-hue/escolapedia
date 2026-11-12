// Música 2º ESO: el ritmo y el compás. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, penta, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "El ritmo y el compás",
  minutos: 50,
  objetivos: ["Diferenciar pulso, acento, ritmo y tempo", "Conocer las figuras y los silencios y sus duraciones", "Leer y escribir compases de 2/4, 3/4 y 4/4", "Usar el puntillo, la ligadura y los términos de tempo"],
  claves: ["pulso", "acento", "figura", "compás", "puntillo", "tempo"],
  pregunta: {
    texto: "¿Por qué al escuchar ciertas canciones mueves el pie sin darte cuenta?",
    respuesta: "Porque la música tiene un <b>pulso</b>: un latido regular, como el del corazón, que el cuerpo sigue de forma natural. Sobre ese pulso se organizan sonidos largos y cortos (el <b>ritmo</b>), y los acentos se agrupan en <b>compases</b>. Por eso un vals invita a girar (tres pulsos) y una marcha, a caminar (dos).",
  },
  bloques: [
    {
      html: `<h3>Pulso, acento y ritmo</h3><ul><li>El <b>pulso</b> es la unidad básica de tiempo de la música: un latido <mark>regular y constante</mark> que se puede marcar con el pie o con palmas.</li><li>El <b>acento</b> es un pulso que suena con más fuerza que los demás. Los acentos se repiten de forma periódica: «UN-dos, UN-dos» o «UN-dos-tres».</li><li>El <b>ritmo</b> es la combinación de sonidos y silencios de <b>distinta duración</b> sobre el pulso. El pulso es igual siempre; el ritmo cambia.</li></ul><p>Prueba: marca el pulso con el pie y da palmas con el ritmo de las sílabas de «Cum-ple-a-ños-fe-liz». Verás que unas palmas duran más que otras.</p>`,
      svg: svg("Pulso: corazones regulares; acento: el primero de cada grupo más grande; ritmo: barras de distinta longitud", `${[...Array(8)].map((_, i) => `<circle cx="${30 + i * 28}" cy="44" r="${i % 2 === 0 ? 9 : 6}" fill="var(--red)" fill-opacity="${i % 2 === 0 ? 0.8 : 0.4}"/>`).join("")}
        ${[[0, 2], [2, 1], [3, 1], [4, 3], [7, 1]].map(([a, d], i) => `<rect x="${22 + a * 28}" y="96" width="${d * 28 - 6}" height="16" rx="5" fill="var(--pen)" fill-opacity=".45" stroke="var(--pen)" stroke-width="1.5"/>`).join("")}
        ${t(130, 76, "pulso con acentos: UN-dos, UN-dos", { c: "var(--red)", s: 11 })}${t(130, 136, "ritmo: duraciones distintas", { c: "var(--pen)", s: 11 })}`),
    },
    {
      html: `<h3>Las figuras musicales</h3><p>Las <b>figuras</b> indican la duración de los sonidos. Cada una dura la <mark>mitad que la anterior</mark>:</p>${tabla(["Figura", "Pulsos (en 4/4)", "Equivale a"], [["Redonda", "4", "2 blancas"], ["Blanca", "2", "2 negras"], ["Negra", "1", "2 corcheas"], ["Corchea", "1/2", "2 semicorcheas"], ["Semicorchea", "1/4", "2 fusas"]])}<p>Normalmente la <b>negra</b> equivale a un pulso. Una redonda dura lo mismo que dos blancas, cuatro negras u ocho corcheas. Las corcheas y semicorcheas se suelen unir con una <b>barra</b> cuando van seguidas.</p>`,
      svg: (() => { const p = penta(14, 246, 50, 10); return svg("Pentagrama con una redonda, una blanca, una negra y una corchea, con sus pulsos: 4, 2, 1 y medio", `${p.s}${p.nota(44, 2, { redonda: true, blanca: true })}${p.nota(100, 2, { blanca: true })}${p.nota(156, 2)}${p.nota(210, 2, { corchea: true })}${t(44, 128, "redonda", { s: 11 })}${t(100, 128, "blanca", { s: 11 })}${t(156, 128, "negra", { s: 11 })}${t(210, 128, "corchea", { s: 11 })}${t(44, 148, "4", { c: "var(--pen)", s: 13 })}${t(100, 148, "2", { c: "var(--pen)", s: 13 })}${t(156, 148, "1", { c: "var(--pen)", s: 13 })}${t(210, 148, "½", { c: "var(--pen)", s: 13 })}${t(130, 172, "pulsos de cada figura", { c: "var(--muted)", s: 10 })}`); })(),
      video: { id: "DWVfgbmjJlo", titulo: "Las figuras musicales: negra, blanca, redonda, corchea…", canal: "Smile and Learn - Español", vistas: 1246770 },
    },
    {
      html: `<h3>Los silencios</h3><p>Cada figura tiene un <b>silencio</b> con la misma duración: el silencio de redonda dura 4 pulsos, el de blanca 2, el de negra 1 y el de corchea medio.</p><ul><li>El silencio de <b>redonda</b> cuelga de la 4.ª línea del pentagrama.</li><li>El de <b>blanca</b> se apoya sobre la 3.ª línea.</li><li>El de <b>negra</b> tiene forma de zigzag.</li><li>El de <b>corchea</b> parece un 7 con un punto.</li></ul><p>Los silencios no son «huecos»: se cuentan igual que las notas y dan respiración y tensión a la música. El silencio de redonda también se usa para indicar un <b>compás entero</b> de silencio, en cualquier compás.</p>`,
    },
    {
      html: `<h3>El compás</h3><p>El <b>compás</b> agrupa los pulsos en partes iguales según sus acentos. En la partitura se separa con <b>líneas divisorias</b> y la obra termina con una <b>doble barra final</b>.</p><p>Al principio se escribe una fracción, el <b>indicador de compás</b>:</p><ul><li>El número de <b>arriba</b> dice cuántos pulsos tiene cada compás.</li><li>El de <b>abajo</b> dice qué figura vale un pulso (4 = negra).</li></ul>${tabla(["Compás", "Pulsos", "Acentos", "Ejemplos"], [["2/4", "2 negras", "FUER-te, dé-bil", "marchas, pasodobles, polkas"], ["3/4", "3 negras", "FUER-te, dé-bil, dé-bil", "valses, jotas, minuetos"], ["4/4", "4 negras", "FUER-te, dé-bil, semi-fuerte, dé-bil", "pop, rock, la mayoría de canciones"]])}`,
      svg: (() => { const p = penta(10, 250, 56, 10); return svg("Pentagrama en compás de tres por cuatro con dos compases separados por una línea divisoria y doble barra final", `${p.s}${t(26, 72, "3", { s: 16, d: true })}${t(26, 92, "4", { s: 16, d: true })}${p.nota(60, 2)}${p.nota(90, 3)}${p.nota(120, 4)}${p.barra(140)}${p.nota(176, 5, { blanca: true })}${p.nota(216, 3)}${p.barra(236)}<path d="M244 56 V 96" stroke="var(--ink)" stroke-width="4"/>
        ${t(90, 132, "1  2  3", { c: "var(--pen)", s: 12 })}${t(190, 132, "1  2  3", { c: "var(--pen)", s: 12 })}${t(140, 30, "línea divisoria", { c: "var(--muted)", s: 10 })}${t(130, 160, "compás de 3/4: tres negras por compás", { s: 11 })}`); })(),
      video: { id: "faBivRMi2LY", titulo: "¿Por qué medimos el ritmo así? Compás de 4/4, 2/4, 6/8, 3/4", canal: "Jaime Altozano", vistas: 5217136 },
    },
    {
      html: `<h3>El puntillo y la ligadura</h3><ul><li>El <b>puntillo</b> es un punto a la derecha de una figura que <mark>aumenta su duración la mitad de su valor</mark>. Blanca con puntillo = 2 + 1 = <b>3 pulsos</b>. Negra con puntillo = 1 + ½ = <b>1 pulso y medio</b>.</li><li>La <b>ligadura de prolongación</b> es una línea curva que une dos notas <b>de la misma altura</b>: se toca solo la primera y se mantiene la suma de las dos duraciones. Sirve sobre todo para alargar un sonido de un compás al siguiente.</li></ul><p>El <b>calderón</b> (un arco con un punto debajo) indica que la nota se alarga a gusto del intérprete o del director.</p>`,
    },
    {
      html: `<h3>Compases simples y compuestos</h3><p>En los compases <b>simples</b> (2/4, 3/4, 4/4) cada pulso se divide en <b>dos</b> partes: una negra en dos corcheas.</p><p>En los compases <b>compuestos</b> cada pulso se divide en <b>tres</b>: el pulso es una negra con puntillo, que vale tres corcheas. El más habitual es el <b>6/8</b>: seis corcheas agrupadas en dos pulsos (1-2-3, 4-5-6). Suena «balanceado» y se usa en canciones de cuna, tarantelas, sevillanas o baladas como «We are the champions».</p><p>Truco para reconocerlo: si al contar el pulso te salen tres subdivisiones («tri-pi-to, tri-pi-to»), es compuesto.</p>`,
    },
    {
      html: `<h3>El tempo</h3><p>El <b>tempo</b> o movimiento es la <b>velocidad</b> del pulso. Se indica con palabras italianas al principio de la obra o con el <b>metrónomo</b>: ♩ = 60 significa 60 negras por minuto, es decir, una por segundo.</p>${tabla(["Término", "Significado", "Pulsos por minuto aprox."], [["Largo / Lento", "muy despacio", "40-60"], ["Adagio", "despacio", "66-76"], ["Andante", "al paso, tranquilo", "76-108"], ["Moderato", "moderado", "108-120"], ["Allegro", "rápido, alegre", "120-160"], ["Presto", "muy rápido", "más de 168"]])}<p>Los cambios de tempo se indican con <b>accelerando</b> (acelerar), <b>ritardando</b> (frenar) y <b>a tempo</b> (volver a la velocidad inicial).</p>`,
    },
    {
      html: `<h3>Practicar el ritmo</h3><p>Para leer ritmos con seguridad:</p><ol><li>Marca el <b>pulso</b> con el pie de forma constante.</li><li>Cuenta en voz alta los pulsos de cada compás: «1, 2, 3, 4».</li><li>Da palmas con las figuras: en la negra una palma por pulso; en la blanca una palma y aguantas otro pulso; en las corcheas dos palmas por pulso.</li><li>En los silencios, haz un gesto sin sonido (abrir las manos).</li></ol><p>Puedes usar sílabas rítmicas: <b>ta</b> para la negra, <b>ti-ti</b> para dos corcheas, <b>ta-a</b> para la blanca. Las percusiones corporales (palmas, pitos, muslos, pies) son una forma divertida de practicar en grupo.</p>`,
    },
  ],
  figura: {
    titulo: "Ritmo y compás en un vistazo",
    svg: filas("Resumen: pulso regular; ritmo de duraciones; figuras de la redonda a la semicorchea; compases 2/4, 3/4 y 4/4; puntillo; tempo", [["Pulso", "latido regular de la música", "var(--red)"], ["Ritmo", "sonidos y silencios de distinta duración", "var(--pen)"], ["Figuras", "redonda 4 · blanca 2 · negra 1 · corchea ½", "var(--leaf)"], ["Compás", "2/4 · 3/4 · 4/4 · 6/8", "var(--sun)"], ["Puntillo", "suma la mitad del valor", "var(--inf)"], ["Tempo", "Lento · Andante · Allegro · Presto", "var(--ink)"]], 180),
  },
  video: { id: "aWAEaBDSjOs", titulo: "La negra, la blanca y la redonda: figuras musicales", canal: "Smile and Learn - Español", vistas: 2748417, megusta: 0, busqueda: "el compás en música 2/4 3/4 4/4" },
  quiz: mezcla([
    { q: "El latido regular de la música es el…", o: ["pulso", "ritmo", "timbre"], a: 0, e: "Constante." },
    { q: "¿Qué figura dura 2 pulsos en 4/4?", o: ["blanca", "negra", "redonda"], a: 0, e: "Dos negras." },
    { q: "Una redonda equivale a… corcheas", o: ["8", "4", "2"], a: 0, e: "4 negras × 2." },
    { q: "En 3/4, el 3 indica…", o: ["tres pulsos por compás", "tres compases", "la nota mi"], a: 0, e: "Número de arriba." },
    { q: "Un vals está normalmente en…", o: ["3/4", "2/4", "4/4"], a: 0, e: "UN-dos-tres." },
    { q: "Una blanca con puntillo dura…", o: ["3 pulsos", "2,5 pulsos", "4 pulsos"], a: 0, e: "2 + 1." },
    { q: "La ligadura de prolongación une…", o: ["notas de la misma altura", "notas distintas", "dos compases de silencio"], a: 0, e: "Se suma la duración." },
    { q: "«Allegro» significa…", o: ["rápido", "despacio", "fuerte"], a: 0, e: "Tempo." },
    { q: "♩ = 60 indica…", o: ["60 negras por minuto", "60 compases", "60 dB"], a: 0, e: "Metrónomo." },
    { q: "En 6/8 cada pulso se divide en…", o: ["tres corcheas", "dos corcheas", "cuatro semicorcheas"], a: 0, e: "Compás compuesto." },
  ]),
  examen: mezcla([
    { q: "¿Cuántas negras caben en un compás de 4/4 con una blanca con puntillo?", o: ["1", "2", "0"], a: 0, e: "3 + 1 = 4." },
    { q: "Ritardando significa…", o: ["ir frenando", "acelerar", "volver al tempo"], a: 0, e: "Ritardando." },
    { q: "Una negra con puntillo y una corchea suman…", o: ["2 pulsos", "1,5 pulsos", "3 pulsos"], a: 0, e: "1,5 + 0,5." },
  ]),
  feynman: ["Diferencia entre pulso y ritmo", "Qué duración tiene cada figura", "Qué indican los dos números del compás", "Cómo funciona el puntillo", "Qué es el tempo y cómo se indica"],
  mapa: mapa("RITMO Y COMPÁS", "var(--eso)", [
    ["Pulso y acento", "latido regular", "var(--red)"],
    ["Figuras y silencios", "redonda → semicorchea", "var(--leaf)"],
    ["Compás", "2/4 · 3/4 · 4/4 · 6/8", "var(--sun)"],
    ["Tempo", "Lento → Presto", "var(--pen)"],
  ], 230),
  tarjetas: [
    ["Pulso", "Latido regular y constante de la música."],
    ["Ritmo", "Combinación de duraciones sobre el pulso."],
    ["Negra", "Un pulso (en compases de denominador 4)."],
    ["Compás 3/4", "Tres negras: fuerte, débil, débil."],
    ["Puntillo", "Aumenta la mitad del valor de la figura."],
    ["Ligadura", "Une dos notas iguales y suma su duración."],
    ["Tempo", "Velocidad del pulso."],
    ["6/8", "Compás compuesto: dos pulsos de tres corcheas."],
  ],
  familias: ["Escuchad canciones y adivinad si van en 2, 3 o 4 dando palmas en el acento.", "Usad una app de metrónomo para caminar a 60, 100 y 140 pulsos.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Pulso, acento y ritmo; figuras y silencios; compases simples y compuestos; puntillo y ligadura; tempo y metrónomo (RD 217/2022, Música, lenguaje musical e interpretación).",
    ideas: ["Dictados rítmicos con percusión corporal.", "Ostinatos en grupo sobre una canción actual.", "Identificar el compás de canciones propuestas por el alumnado."],
  },
  fuentes: [RD, { t: "Real Conservatorio Superior de Música de Madrid: recursos de lenguaje musical", url: "https://rcsmm.eu/" }],
  revisado: REV,
  ejemplosTitulo: "Ejercicios resueltos",
  ejemplos: [
    { enunciado: "Completa un compás de 4/4 que empieza con una blanca y una negra.", pasos: ["Blanca (2) + negra (1) = 3 pulsos.", "Falta 1 pulso.", "Puede ser una negra, dos corcheas o un silencio de negra."], resultado: "Falta una negra (o su equivalente)." },
    { enunciado: "¿Cuánto dura una negra con puntillo ligada a una blanca?", pasos: ["Negra con puntillo: 1 + 0,5 = 1,5.", "Blanca: 2.", "Ligadura: se suman → 3,5."], resultado: "3 pulsos y medio." },
    { enunciado: "Una obra tiene ♩ = 120 y 64 compases de 4/4. ¿Cuánto dura?", pasos: ["Pulsos totales: 64 · 4 = 256.", "120 pulsos por minuto.", "256 : 120 ≈ 2,13 min."], resultado: "Algo más de 2 minutos (unos 2 min 8 s)." },
  ],
  errores: [
    "Confundir el pulso (constante) con el ritmo (variable).",
    "Pensar que el número de abajo del compás indica cuántos pulsos hay.",
    "Sumar el valor entero de la figura con el puntillo (la blanca con puntillo no dura 4).",
    "Usar la ligadura entre notas de distinta altura como si fuera de prolongación.",
    "No contar los silencios y adelantarse.",
  ],
  ejercicios: [
    { q: "¿Cuántas corcheas equivalen a una blanca? ¿Y a una redonda?", sol: "4 y 8." },
    { q: "Escribe las figuras de mayor a menor duración.", sol: "Redonda, blanca, negra, corchea, semicorchea (y fusa, semifusa)." },
    { q: "¿Cuántos pulsos dura una corchea con puntillo?", sol: "0,5 + 0,25 = 0,75 pulsos." },
    { q: "Indica qué falta para completar un compás de 3/4 que ya tiene una negra y una corchea.", sol: "Faltan 1,5 pulsos: una negra con puntillo, o una negra y una corchea." },
    { q: "Di si estos ritmos son de compás binario o ternario: marcha militar, vals, sevillanas.", sol: "Binario, ternario (3/4), ternario (3/4)." },
    { q: "Ordena de lento a rápido: Allegro, Adagio, Presto, Andante.", sol: "Adagio, Andante, Allegro, Presto." },
    { q: "Explica la diferencia entre ritardando y a tempo.", sol: "Ritardando es ir frenando; a tempo es volver al tempo original." },
    { q: "¿Por qué el 6/8 se considera compuesto?", sol: "Porque cada pulso (negra con puntillo) se divide en tres corcheas." },
    { q: "Inventa un ritmo de dos compases de 2/4 usando negras, corcheas y un silencio de negra.", sol: "Ejemplo: negra, dos corcheas | silencio de negra, negra." },
    { q: "Marca el pulso de tu canción favorita durante 15 s, cuenta y calcula su tempo.", sol: "Respuesta abierta: pulsos en 15 s × 4 = pulsos por minuto." },
  ],
};
