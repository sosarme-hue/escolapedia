// Lengua Castellana 2º de Primaria: vocales y consonantes. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, frase, charla, lista, mural, silabas: s } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "2-primaria",
  titulo: "Vocales y consonantes",
  minutos: 25,
  objetivos: ["Distinguir las 5 vocales de las 22 consonantes", "Saber que las consonantes necesitan una vocal para sonar", "Contar vocales y consonantes en una palabra"],
  claves: ["vocal", "consonante", "sonido", "letra"],
  pregunta: {
    texto: "Di «aaaa» sin cerrar la boca. Ahora intenta decir solo «b», sin ninguna otra letra. ¿Qué pasa?",
    respuesta: "La <b>a</b> suena sola: es una <mark>vocal</mark>. La <b>b</b> sola casi no suena: necesita una vocal, como en «be» o «ba». Es una <mark>consonante</mark>.",
  },
  bloques: [
    {
      html: `<h3>Dos equipos de letras</h3><p>Las 27 letras del abecedario forman <mark>dos equipos</mark>.</p><p>El equipo de las <b>vocales</b> tiene 5 letras: a, e, i, o, u.</p><p>El equipo de las <b>consonantes</b> tiene 22 letras: b, c, d, f, g… y todas las demás. Juntas forman todas las palabras que decimos y escribimos.</p>`,
      svg: lista("Vocales: a, e, i, o, u, son 5. Consonantes: b, c, d, f, g y las demás, son 22", [["Vocales: a · e · i · o · u", R], ["Son 5", R], ["Consonantes: b · c · d · f · g…", A], ["Son 22", A]], { titulo: "Dos equipos de letras", marca: "✓" }),
    },
    {
      html: `<h3>Las vocales</h3><p>Las <mark>vocales</mark> suenan solas. El aire sale sin chocar con nada.</p><p>La <b>a</b> abre mucho la boca. La <b>e</b> estira los labios. La <b>i</b> sonríe. La <b>o</b> hace un círculo. La <b>u</b> se pone como un beso.</p><p>Puedes cantarlas largas: aaa, eee, iii, ooo, uuu. ¡No se acaban hasta que te quedas sin aire!</p>`,
      svg: dibujos("Cuatro caras con la boca de la a, la e, la i, la o y la u", [["cara_a", "a", R], ["cara_e", "e", A], ["cara_i", "i", Ve], ["cara_o", "o", N], ["cara_u", "u", M]], { titulo: "La boca de cada vocal" }),
    },
    {
      html: `<h3>Las consonantes</h3><p>Las <mark>consonantes</mark> necesitan una vocal para sonar bien.</p><p>Al decirlas, el aire choca con los labios, los dientes o la lengua. Con la <b>p</b> juntamos los labios. Con la <b>t</b>, la lengua toca los dientes.</p><p>Por eso decimos «pe», «te» o «ese». ¡La vocal les ayuda a sonar!</p>`,
      svg: fichas("Consonantes en fichas: b, c, d, f, g, l, m, n, p, s, t", [["b", A], ["c", A], ["d", A], ["f", A], ["l", A], ["m", A], ["n", A], ["p", A], ["r", A], ["s", A], ["t", A], ["z", A]], { titulo: "Algunas consonantes", nota: "Suenan con ayuda: be, ce, de, efe…" }),
      video: V("vocB"),
    },
    {
      html: `<h3>Consonante + vocal</h3><p>Cuando una consonante se une a una vocal, forman un <mark>sonido nuevo</mark>.</p><p><b>m + a = ma</b>. <b>p + e = pe</b>. <b>s + o = so</b>.</p><p>Con esos trocitos formamos palabras: <i>ma-má</i>, <i>pe-so</i>, <i>so-pa</i>. Casi todas las palabras mezclan vocales y consonantes. ¡Se necesitan unas a otras!</p>`,
      svg: frase("m más a es ma; p más e es pe; s más o es so", [["m", A], ["+", "var(--muted)"], ["a", R], ["=", "var(--muted)"], ["ma", Ve], ["/"], ["s", A], ["+", "var(--muted)"], ["o", R], ["=", "var(--muted)"], ["so", Ve]], { titulo: "Se unen y suenan", nota: "ma-má · so-pa", fs: 24 }),
    },
    {
      html: `<h3>Todas las palabras tienen vocal</h3><p>No hay ninguna palabra en castellano <mark>sin vocales</mark>.</p><p>Algunas palabras tienen muchas consonantes: <i>tren</i> tiene t, r, n y solo una vocal, la <b>e</b>.</p><p>Otras tienen muchas vocales: <i>oía</i> tiene o, í, a. ¡Y la palabra <i>y</i> también suena como una vocal, la i!</p>`,
      svg: dibujos("Tren con una vocal, oso con dos vocales y pez con una vocal", [["tren", s("tr|e|n", R, 1), K], ["oso", s("o|s|o", R, 0), K], ["pez", s("p|e|z", R, 1), K]], { titulo: "Busca la vocal en cada palabra", nota: "Siempre hay al menos una" }),
    },
    {
      html: `<h3>Contamos letras</h3><p>Podemos <mark>contar</mark> las vocales y las consonantes de una palabra.</p><p>En <b>gato</b>: vocales <b>a</b> y <b>o</b> (2). Consonantes <b>g</b> y <b>t</b> (2).</p><p>En <b>mesa</b>: vocales e, a (2). Consonantes m, s (2). En <b>libro</b>: vocales i, o (2). Consonantes l, b, r (3). ¡Pinta las vocales de rojo para verlas mejor!</p>`,
      svg: frase("Gato: g a t o. Las vocales a y o en rojo, las consonantes g y t en azul", [["g", A], ["a", R], ["t", A], ["o", R], ["/"], ["2 vocales", R], ["2 consonantes", A]], { titulo: "gato", nota: "Vocales en rojo, consonantes en azul", fs: 26 }),
      video: V("vocV", "canción de las consonantes para niños"),
    },
    {
      html: `<h3>Letras con dos sonidos y una muda</h3><p>Algunas consonantes son <mark>especiales</mark>.</p><p>La <b>c</b> suena fuerte en <i>casa</i> y suave en <i>cielo</i>. La <b>g</b> suena distinto en <i>gato</i> y en <i>gente</i>.</p><p>La <b>h</b> es <b>muda</b>: no suena nada. <i>Huevo</i> se dice «uevo», pero se escribe con h. ¡Hay que recordarlo al escribir!</p>`,
      svg: dibujos("La c de casa, la c de cielo y la h muda de huevo", [["casa", s("c|asa", R), K], ["nube", s("c|ielo", A), K], ["huevo", s("h|uevo", Ve), K]], { titulo: "Consonantes especiales", nota: "c fuerte · c suave · h muda" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saber qué letras son vocales nos ayuda a <mark>leer y escribir mejor</mark>.</p><p>Las vocales nos dicen cómo partir las palabras en sílabas: cada sílaba tiene una vocal.</p><p>También nos ayudan a no olvidar letras. Si escribes «mrpsa», faltan vocales. ¡La palabra buena es <i>mariposa</i>!</p>`,
      svg: charla("Un niño escribe mrpsa y una niña le dice que faltan vocales: mariposa", [["nino", "Escribí «mrpsa».", A], ["nina", "¡Faltan vocales!", R], ["nino", "¿Ma-ri-po-sa?", A], ["nina", "¡Ahora sí!", R]]),
    },
    {
      html: `<h3>Juego: ¿vocal o consonante?</h3><p>Un adulto dice una letra. Si es <b>vocal</b>, das una <mark>palmada</mark>. Si es <b>consonante</b>, das un <mark>pisotón</mark>.</p><p>Después, cambiad: tú dices palabras cortas y el adulto cuenta sus vocales con los dedos.</p><p>Probad con <i>sol</i>, <i>luna</i>, <i>casa</i> y <i>tren</i>. ¿Quién acierta más?</p>`,
      svg: charla("Juego: la a es vocal y se da palmada; la m es consonante y se da pisotón", [["nina", "¡a!", R], ["nino", "Vocal: ¡palmada!", A], ["nina", "¡m!", R], ["nino", "Consonante: ¡pisotón!", A]]),
    },
  ],
  figura: {
    titulo: "Vocales y consonantes",
    svg: mural("Cinco vocales que suenan solas y veintidós consonantes que necesitan vocal; consonante más vocal forma sílabas", [["cara_a", "a e i o u", "5 vocales: suenan solas", R], ["libro", "b c d f g…", "22 consonantes", A], [null, "m + a = ma", "se unen y suenan", Ve], ["huevo", "h", "muda: no suena", N]], "Todas las palabras tienen al menos una vocal"),
  },
  video: V("vocV", "canción de las consonantes para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuántas vocales tiene «pelota»?",
      pasos: ["Escribe la palabra: p-e-l-o-t-a.", "Rodea las vocales: e, o, a.", "Cuéntalas: 1, 2, 3."],
      resultado: "«pelota» tiene 3 vocales." },
    { enunciado: "¿Qué consonantes tiene «sopa»?",
      pasos: ["Separa las letras: s-o-p-a.", "Quita las vocales: o, a.", "Quedan s y p."],
      resultado: "las consonantes son s y p." },
    { enunciado: "Completa con una vocal: c_sa.",
      pasos: ["Prueba con cada vocal: cesa, cisa, cosa, casa.", "¿Cuál es una palabra que conoces?", "Casa y cosa son palabras."],
      resultado: "casa (o cosa)." },
  ],
  errores: [
    "Pensar que la y es siempre consonante: en «y» sola suena como la vocal i.",
    "Olvidar la h al escribir porque no suena: hoja, huevo, hola.",
    "Escribir palabras sin vocales: todas las palabras tienen al menos una.",
    "Contar la ñ como vocal: es una consonante.",
  ],
  ejercicios: [
    { q: "Di las cinco vocales.", sol: "a, e, i, o, u." },
    { q: "¿Cuántas consonantes hay en el abecedario?", sol: "22." },
    { q: "Rodea las vocales de «luna».", sol: "u, a." },
    { q: "¿Cuántas vocales tiene «mariposa»?", sol: "4: a, i, o, a." },
    { q: "Escribe las consonantes de «perro».", sol: "p, r, r." },
    { q: "Completa: m + o = …", sol: "mo." },
    { q: "¿La ñ es vocal o consonante?", sol: "Consonante." },
    { q: "¿Qué letra no suena en «huevo»?", sol: "La h." },
    { q: "Completa con vocales: p_t_.", sol: "pato (o pito, pata…)." },
    { q: "Di una palabra con una sola vocal.", sol: "Por ejemplo: sol, pan, tren, mar." },
  ],
  quiz: [
    { q: "¿Cuántas vocales hay?", o: ["5", "10", "27"], a: 0, e: "a, e, i, o, u." },
    { q: "¿Cuál es vocal?", o: ["m", "o", "t"], a: 1, e: "La o." },
    { q: "¿Cuál es consonante?", o: ["e", "u", "p"], a: 2, e: "La p." },
    { q: "Las vocales suenan…", o: ["solas", "nunca", "solo con otra letra"], a: 0, e: "Suenan solas." },
    { q: "s + a = …", o: ["as", "sa", "so"], a: 1, e: "sa." },
    { q: "¿Qué letra es muda?", o: ["h", "m", "a"], a: 0, e: "La h no suena." },
    { q: "¿Cuántas vocales tiene «gato»?", o: ["1", "2", "3"], a: 1, e: "a, o." },
    { q: "¿Qué palabra tiene una sola vocal?", o: ["casa", "sol", "mesa"], a: 1, e: "sol: o." },
    { q: "¿Cuántas consonantes hay en el abecedario?", o: ["22", "5", "12"], a: 0, e: "27 − 5 = 22." },
    { q: "Toda palabra tiene al menos…", o: ["una vocal", "una h", "una ñ"], a: 0, e: "Una vocal." },
  ],
  examen: [
    { q: "¿Qué vocal sale con la boca redonda?", o: ["i", "o", "e"], a: 1, e: "La o." },
    { q: "¿Qué consonantes tiene «pan»?", o: ["p y n", "a", "p, a, n"], a: 0, e: "p y n." },
    { q: "Completa: t + e = …", o: ["et", "te", "ta"], a: 1, e: "te." },
    { q: "¿Qué palabra está mal escrita?", o: ["mesa", "msa", "masa"], a: 1, e: "Le falta una vocal." },
  ],
  feynman: ["Qué diferencia hay entre vocal y consonante", "Por qué toda palabra tiene una vocal", "Qué letra es muda"],
  mapa: mapa("LAS LETRAS", "var(--pri)", [
    ["5 vocales", "a, e, i, o, u: suenan solas", R],
    ["22 consonantes", "b, c, d… necesitan vocal", A],
    ["Se unen", "m + a = ma", Ve],
    ["Especiales", "h muda · c y g dobles", N],
  ], 230),
  tarjetas: [
    ["¿Cuáles son las vocales?", "a, e, i, o, u"],
    ["¿Cuántas consonantes hay?", "22"],
    ["¿Cómo suenan las vocales?", "Solas"],
    ["¿Qué necesitan las consonantes?", "Una vocal para sonar bien"],
    ["p + a = …", "pa"],
    ["¿Qué letra es muda?", "La h"],
    ["Vocales de «luna»", "u, a"],
    ["¿Hay palabras sin vocal?", "No, todas tienen al menos una"],
  ],
  familias: [
    "Jugad a palmada (vocal) y pisotón (consonante) con letras sueltas.",
    "Leed un cartel y contad juntos cuántas vocales tiene.",
    "Escribid palabras con huecos en las vocales para que las complete.",
    "Cantad las vocales poniendo cara de cada una frente al espejo.",
  ],
  profesores: PROF("Conciencia fonológica: vocales y consonantes, combinación de grafemas en sílabas y letras sin sonido (h)", ["Mural de dos equipos: vocales y consonantes.", "Juego de palmada y pisotón para discriminar sonidos.", "Palabras con huecos para completar con vocales."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
