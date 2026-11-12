// Música 1º ESO: las cualidades del sonido. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, vb, vg } = require("./_eso1c");

const onda = (y, amp, n, c, x0 = 30, x1 = 230) => {
  const paso = (x1 - x0) / (n * 2);
  let d = `M${x0} ${y}`;
  for (let i = 0; i < n * 2; i++) d += ` Q ${(x0 + paso * (i + 0.5)).toFixed(1)} ${i % 2 ? y + amp * 2 : y - amp * 2} ${(x0 + paso * (i + 1)).toFixed(1)} ${y}`;
  return `<path d="${d}" fill="none" stroke="${c}" stroke-width="2.4"/>`;
};

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "Las cualidades del sonido",
  minutos: 50,
  objetivos: ["Identificar las cuatro cualidades del sonido: altura, duración, intensidad y timbre", "Relacionar cada cualidad con su causa física", "Conocer cómo se representan en la partitura", "Reconocer las cualidades al escuchar"],
  claves: ["altura", "frecuencia", "duración", "intensidad", "matices", "timbre"],
  pregunta: {
    texto: "Si un violín y una flauta tocan la misma nota, igual de fuerte y durante el mismo tiempo, ¿por qué sabes cuál es cuál?",
    respuesta: "Porque cada instrumento tiene su propio <b>timbre</b>, su «color» sonoro. La nota (altura), el volumen (intensidad) y el tiempo (duración) pueden ser iguales, pero <mark>la forma de la vibración es distinta</mark>, y nuestro oído la distingue al instante, igual que reconoces la voz de un amigo por teléfono.",
  },
  bloques: [
    {
      html: `<h3>Cuatro cualidades</h3><p>Todo sonido tiene <b>cuatro cualidades</b> que nos permiten describirlo y diferenciarlo de otros:</p>${tabla(["Cualidad", "Pregunta", "Depende de", "Se mide o escribe con"], [["Altura", "¿Agudo o grave?", "la frecuencia", "notas en el pentagrama"], ["Duración", "¿Largo o corto?", "el tiempo que vibra", "figuras"], ["Intensidad", "¿Fuerte o suave?", "la amplitud", "matices (p, f…)"], ["Timbre", "¿Quién suena?", "la forma de la onda", "el nombre del instrumento"]])}<p>Los músicos combinan estas cuatro cualidades para crear melodías, ritmos, contrastes y colores. Aprender a distinguirlas es el primer paso para escuchar música con atención.</p>`,
    },
    {
      html: `<h3>La altura</h3><p>La <b>altura</b> indica si un sonido es <b>agudo</b> (como el pitido de un silbato) o <b>grave</b> (como un trueno o un contrabajo). Depende de la <b>frecuencia</b>, el número de vibraciones por segundo, que se mide en <b>hercios (Hz)</b>.</p><ul><li>Muchas vibraciones por segundo: sonido <b>agudo</b>.</li><li>Pocas vibraciones por segundo: sonido <b>grave</b>.</li></ul><p>El oído humano percibe aproximadamente entre <b>20 Hz y 20 000 Hz</b>. Por debajo están los <b>infrasonidos</b> (los usan los elefantes) y por encima los <b>ultrasonidos</b> (los oyen perros y murciélagos). La nota <b>la</b> con la que afinan las orquestas vibra a <b>440 Hz</b>.</p>`,
      svg: svg("Dos ondas: una con pocas vibraciones (sonido grave) y otra con muchas (sonido agudo)", `${onda(52, 14, 3, "var(--pen)")}${t(130, 18, "grave: pocas vibraciones", { c: "var(--pen)", s: 11 })}${onda(132, 14, 9, "var(--red)")}${t(130, 98, "agudo: muchas vibraciones", { c: "var(--red)", s: 11 })}`),
      video: vb("cuaB2"),
    },
    {
      html: `<h3>La duración</h3><p>La <b>duración</b> es el tiempo que se mantiene un sonido: puede ser <b>largo</b> o <b>corto</b>. Depende del tiempo que el cuerpo sonoro sigue vibrando.</p><ul><li>Un violín o un órgano pueden mantener un sonido mucho tiempo.</li><li>Un xilófono o una caja china dan sonidos muy breves.</li><li>El piano suena largo, pero se va apagando poco a poco.</li></ul><p>En la partitura, la duración se escribe con las <b>figuras musicales</b>: la <b>redonda</b> es larga, la <b>blanca</b> dura la mitad, la <b>negra</b> la mitad de la blanca, y así sucesivamente. Combinar duraciones distintas crea el <b>ritmo</b>.</p>`,
    },
    {
      html: `<h3>La intensidad</h3><p>La <b>intensidad</b> indica si un sonido es <b>fuerte</b> o <b>suave</b> (en la calle decimos «volumen»). Depende de la <b>amplitud</b> de la vibración: cuanto con más energía vibra el cuerpo, más fuerte suena. Se mide en <b>decibelios (dB)</b>.</p><p>En la partitura se indica con los <b>matices</b> o <b>dinámicas</b>, palabras italianas abreviadas:</p>${tabla(["Signo", "Nombre", "Significado"], [["pp", "pianissimo", "muy suave"], ["p", "piano", "suave"], ["mp", "mezzo piano", "medio suave"], ["mf", "mezzo forte", "medio fuerte"], ["f", "forte", "fuerte"], ["ff", "fortissimo", "muy fuerte"]])}`,
      svg: svg("Dos ondas con la misma frecuencia: una de poca amplitud (piano) y otra de mucha amplitud (forte)", `${onda(48, 5, 5, "var(--leaf)")}${t(130, 22, "piano: poca amplitud", { c: "var(--leaf)", s: 11 })}${onda(126, 20, 5, "var(--sun)")}${t(130, 82, "forte: mucha amplitud", { c: "var(--sun)", s: 11 })}`),
    },
    {
      html: `<h3>Cambios graduales de intensidad</h3><p>La música rara vez mantiene la misma intensidad todo el tiempo. Para indicar que el volumen cambia poco a poco se usan:</p><ul><li><b>Crescendo</b> (<i>cresc.</i> o un signo en forma de &lt; abierto a la derecha): ir aumentando la intensidad.</li><li><b>Diminuendo</b> o <b>decrescendo</b> (<i>dim.</i> o el signo &gt;): ir disminuyéndola.</li></ul><p>Estos cambios crean <b>emoción</b>: un crescendo largo genera tensión, como cuando en una película la música sube antes de un momento clave. Un sonido que empieza muy suave y crece hasta <i>ff</i> es uno de los recursos más eficaces de la orquesta.</p>`,
      svg: svg("Signos de crescendo y diminuendo bajo una línea de matices pp, mf, ff, mf, pp", `<path d="M24 70 L 124 50 M24 70 L 124 90" stroke="var(--pen)" stroke-width="2.5" fill="none"/><path d="M136 50 L 236 70 M136 90 L 236 70" stroke="var(--red)" stroke-width="2.5" fill="none"/>${t(74, 30, "crescendo", { c: "var(--pen)", s: 12 })}${t(186, 30, "diminuendo", { c: "var(--red)", s: 12 })}${t(24, 124, "pp", { s: 15, d: true })}${t(130, 124, "ff", { s: 15, d: true })}${t(236, 124, "pp", { s: 15, d: true })}${t(130, 160, "de muy suave a muy fuerte y vuelta", { s: 10, c: "var(--muted)" })}`),
      video: vb("cuaB"),
    },
    {
      html: `<h3>El timbre</h3><p>El <b>timbre</b> es la cualidad que nos permite <b>reconocer quién o qué produce un sonido</b>. Depende de la <b>forma de la onda</b>: cada instrumento y cada voz vibran de una manera característica, mezclando la nota principal con otros sonidos más débiles llamados <b>armónicos</b>.</p><p>El timbre depende de:</p><ul><li>El <b>material</b>: madera, metal, piel, cuerda…</li><li>La <b>forma de producir el sonido</b>: frotar, soplar, golpear, pulsar.</li><li>La <b>caja de resonancia</b> o el tubo que amplifica.</li></ul><p>Para describir el timbre usamos palabras de otros sentidos: brillante, oscuro, áspero, aterciopelado, metálico, nasal.</p>`,
      svg: svg("Tres ondas con la misma altura y distinta forma: suave como una flauta, en diente de sierra como un violín y cuadrada como un clarinete", `${onda(38, 9, 4, "var(--leaf)", 30, 174)}${t(244, 42, "flauta", { s: 10, a: "end", c: "var(--leaf)" })}<path d="M30 100 ${[...Array(4)].map((_, i) => `L ${30 + (i + 1) * 36} 78 L ${30 + (i + 1) * 36} 104`).join(" ")}" fill="none" stroke="var(--red)" stroke-width="2.4"/>${t(244, 96, "violín", { s: 10, a: "end", c: "var(--red)" })}<path d="M30 156 ${[...Array(4)].map((_, i) => `V 136 H ${48 + i * 36} V 160 H ${66 + i * 36}`).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="2.4"/>${t(244, 152, "clarinete", { s: 10, a: "end", c: "var(--pen)" })}`, 176),
    },
    {
      html: `<h3>Las cualidades en la partitura</h3><p>Una partitura reúne en poco espacio las cuatro cualidades:</p><ul><li><b>Altura</b>: la posición de la nota en el <b>pentagrama</b> (más arriba, más aguda).</li><li><b>Duración</b>: la <b>figura</b> que se escribe (redonda, blanca, negra…).</li><li><b>Intensidad</b>: los <b>matices</b> debajo del pentagrama (p, f, crescendo…).</li><li><b>Timbre</b>: el <b>nombre del instrumento</b> al comienzo de cada línea.</li></ul><p>Además, los términos de <b>tempo</b> (Allegro, Andante…) indican la velocidad del pulso, que no es una cualidad del sonido sino de la música.</p>`,
    },
    {
      html: `<h3>Escuchar las cualidades</h3><p>Actividad en parejas: uno produce un sonido con la voz, un objeto o un instrumento, y el otro lo describe con las cuatro cualidades.</p><ol><li><b>Altura</b>: ¿agudo, medio o grave? ¿Sube o baja?</li><li><b>Duración</b>: ¿largo o corto? ¿Se corta de golpe o se apaga?</li><li><b>Intensidad</b>: ¿p, mf o f? ¿Hay crescendo?</li><li><b>Timbre</b>: ¿qué lo produce? ¿Cómo lo describirías?</li></ol><p>Después, cambiad una sola cualidad cada vez (por ejemplo, misma nota pero más fuerte) y comprobad si el compañero adivina cuál ha cambiado.</p>`,
    },
  ],
  figura: {
    titulo: "Las cualidades del sonido en un vistazo",
    svg: filas("Resumen: altura, agudo o grave según la frecuencia; duración, largo o corto, con figuras; intensidad, fuerte o suave según la amplitud, con matices; timbre, quién suena, según la forma de la onda", [["Altura", "agudo/grave · frecuencia (Hz)", "var(--red)"], ["Duración", "largo/corto · figuras", "var(--leaf)"], ["Intensidad", "fuerte/suave · amplitud (dB)", "var(--sun)"], ["Matices", "pp p mp mf f ff", "var(--sun)"], ["Timbre", "forma de la onda · armónicos", "var(--pen)"]], 200),
  },
  video: vg("cuaV"),
  quiz: mezcla([
    { q: "La cualidad que distingue agudo de grave es la…", o: ["altura", "intensidad", "duración"], a: 0, e: "Depende de la frecuencia." },
    { q: "La frecuencia se mide en…", o: ["hercios", "decibelios", "segundos"], a: 0, e: "Hz." },
    { q: "Un sonido con muchas vibraciones por segundo es…", o: ["agudo", "grave", "fuerte"], a: 0, e: "Alta frecuencia." },
    { q: "La intensidad depende de la…", o: ["amplitud", "frecuencia", "forma de la onda"], a: 0, e: "Energía de la vibración." },
    { q: "«f» en la partitura significa…", o: ["forte, fuerte", "flauta", "fin"], a: 0, e: "Matiz." },
    { q: "«pp» significa…", o: ["muy suave", "muy fuerte", "pausa"], a: 0, e: "Pianissimo." },
    { q: "Ir aumentando la intensidad poco a poco es un…", o: ["crescendo", "diminuendo", "silencio"], a: 0, e: "Signo <." },
    { q: "El timbre depende de…", o: ["la forma de la onda", "la amplitud", "el tempo"], a: 0, e: "Armónicos." },
    { q: "La duración se escribe con…", o: ["figuras", "matices", "claves"], a: 0, e: "Redonda, blanca…" },
    { q: "Los murciélagos oyen…", o: ["ultrasonidos", "infrasonidos", "solo graves"], a: 0, e: "Más de 20 000 Hz." },
  ]),
  examen: mezcla([
    { q: "Un violín y una trompeta tocan el mismo la a 440 Hz con igual fuerza. ¿Qué cualidad cambia?", o: ["el timbre", "la altura", "la intensidad"], a: 0, e: "Misma nota y volumen." },
    { q: "Ordena de más suave a más fuerte:", o: ["p, mf, ff", "ff, mf, p", "mf, p, ff"], a: 0, e: "piano < mezzo forte < fortissimo." },
    { q: "Si una cuerda vibra más rápido, el sonido es más…", o: ["agudo", "fuerte", "largo"], a: 0, e: "Más frecuencia." },
  ]),
  feynman: ["Cuáles son las cuatro cualidades del sonido", "Qué es la frecuencia y cómo afecta a la altura", "Qué son los matices y cómo se escriben", "Por qué reconocemos el timbre de cada instrumento", "Cómo aparecen las cualidades en una partitura"],
  mapa: mapa("CUALIDADES", "var(--eso)", [
    ["Altura", "frecuencia · Hz", "var(--red)"],
    ["Duración", "figuras", "var(--leaf)"],
    ["Intensidad", "amplitud · matices", "var(--sun)"],
    ["Timbre", "forma de la onda", "var(--pen)"],
  ], 230),
  tarjetas: [
    ["Altura", "Agudo o grave; depende de la frecuencia."],
    ["Frecuencia", "Vibraciones por segundo; se mide en hercios."],
    ["Duración", "Tiempo que dura un sonido; se escribe con figuras."],
    ["Intensidad", "Fuerte o suave; depende de la amplitud."],
    ["Matices", "Signos de intensidad: pp, p, mp, mf, f, ff."],
    ["Crescendo", "Aumentar la intensidad poco a poco."],
    ["Timbre", "Color del sonido que identifica a quien lo produce."],
    ["Armónicos", "Sonidos débiles que acompañan a la nota y forman el timbre."],
  ],
  familias: ["Jugad a adivinar objetos de casa solo por su sonido con los ojos cerrados (timbre).", "Comparad la voz más grave y la más aguda de la familia.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Cualidades del sonido: altura, duración, intensidad y timbre; su representación gráfica; matices y dinámica (RD 217/2022, Música, escucha y percepción; elementos del lenguaje musical).",
    ideas: ["Afinador del móvil para ver la frecuencia de cada nota cantada.", "Musicograma de una obra marcando con colores los cambios de intensidad.", "Concurso de timbres con objetos del aula."],
  },
  fuentes: [RD, { t: "Real Conservatorio Superior de Música de Madrid", url: "https://rcsmm.eu/" }],
  revisado: REV,
  ejemplosTitulo: "Ejercicios resueltos",
  ejemplos: [
    { enunciado: "Describe con las cuatro cualidades el sonido de un silbato del árbitro.", pasos: ["Altura: muy aguda.", "Duración: corta o media, según el soplido.", "Intensidad: fuerte (f o ff).", "Timbre: aire que pasa por un tubo con una bolita; brillante y estridente."], resultado: "Agudo, corto, fuerte, timbre estridente." },
    { enunciado: "Una cuerda de guitarra suena a 110 Hz. Si la acortamos a la mitad apretando un traste, ¿qué pasa?", pasos: ["Una cuerda más corta vibra más rápido.", "A la mitad de longitud, la frecuencia se duplica: 220 Hz.", "Más frecuencia significa más agudo."], resultado: "Suena más aguda (220 Hz, la misma nota una octava más alta)." },
    { enunciado: "Lee esta secuencia de matices y explica cómo se toca: p, cresc., f, dim., pp.", pasos: ["Empieza suave (piano).", "Va subiendo poco a poco hasta fuerte (forte).", "Luego va bajando hasta muy suave (pianissimo)."], resultado: "Una «ola» de volumen que acaba más suave de lo que empezó." },
  ],
  errores: [
    "Confundir altura con intensidad: «subir el volumen» no es «subir la nota».",
    "Creer que un sonido agudo es siempre fuerte.",
    "Pensar que el timbre solo existe en los instrumentos (las voces también lo tienen).",
    "Leer «p» como «pausa» en lugar de «piano», suave.",
    "Confundir la duración (una cualidad del sonido) con el tempo (la velocidad de la música).",
  ],
  ejercicios: [
    { q: "Nombra las cuatro cualidades del sonido y su causa física.", sol: "Altura (frecuencia), duración (tiempo de vibración), intensidad (amplitud), timbre (forma de la onda)." },
    { q: "Clasifica en agudo o grave: canto de un canario, tuba, campanilla, bombo.", sol: "Agudos: canario y campanilla. Graves: tuba y bombo." },
    { q: "Ordena de más suave a más fuerte: f, pp, mf, p, ff, mp.", sol: "pp, p, mp, mf, f, ff." },
    { q: "¿Qué significa un crescendo? Dibuja su signo.", sol: "Aumentar poco a poco la intensidad; signo «<» alargado." },
    { q: "¿Por qué podemos reconocer a una persona por la voz sin verla?", sol: "Porque cada voz tiene un timbre propio." },
    { q: "Cita dos animales que oyen ultrasonidos.", sol: "Perro y murciélago (también delfín)." },
    { q: "¿Qué cualidad cambia cuando pulsas una tecla de piano más a la derecha?", sol: "La altura: suena más aguda." },
    { q: "Describe el sonido de una puerta que se cierra de golpe con las cuatro cualidades.", sol: "Respuesta orientativa: grave, corto, fuerte, timbre seco de madera." },
    { q: "Escribe tres adjetivos para describir el timbre de una trompeta.", sol: "Respuesta orientativa: brillante, metálico, potente." },
    { q: "Inventa una secuencia de cinco matices para un sonido que empiece y acabe muy suave.", sol: "Respuesta orientativa: pp, cresc., ff, dim., pp." },
  ],
};
