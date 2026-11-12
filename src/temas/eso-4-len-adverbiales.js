// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG. Terminología de la Nueva gramática (RAE-ASALE).
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Las oraciones subordinadas adverbiales",
  minutos: 45,
  objetivos: ["Reconocer las subordinadas de tiempo, lugar y modo", "Identificar las causales, finales, condicionales y concesivas por su nexo", "Distinguir causa de consecuencia y condición de concesión"],
  claves: ["subordinada adverbial", "temporal", "causal", "final", "condicional", "concesiva", "consecutiva", "nexo"],
  pregunta: {
    texto: "«Si estudias, aprobarás» y «Aunque estudies, suspenderás». Las dos hablan de estudiar. ¿Por qué la segunda suena tan desanimante?",
    respuesta: "Porque el nexo cambia la relación. «Si» plantea una <mark>condición</mark>: estudiar lleva al aprobado. «Aunque» plantea una <mark>concesión</mark>: un obstáculo que no impide el resultado. Los nexos adverbiales dan el sentido lógico de la frase.",
  },
  bloques: [
    {
      html: `<h3>Qué son las subordinadas adverbiales</h3><p>Son proposiciones que añaden una <mark>circunstancia</mark> al verbo principal o a toda la oración: cuándo, dónde, cómo, por qué, para qué, con qué condición… Las de <b>tiempo, lugar y modo</b> se pueden cambiar por un adverbio: «Llegó <u>cuando anochecía</u>» → «Llegó <b>entonces</b>».</p>`,
      svg: L.filas("Adverbiales de tiempo, lugar y modo con su adverbio equivalente", [
        ["Tiempo", "cuando anochecía → entonces", "var(--inf)"],
        ["Lugar", "donde quieras → allí", "var(--leaf)"],
        ["Modo", "como te dije → así", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>Causales y finales</h3><p>Las <b>causales</b> dicen <mark>por qué</mark>: porque, ya que, puesto que, como («No salió <u>porque llovía</u>»). Las <b>finales</b> dicen <mark>para qué</mark>: para que, a fin de que, para + infinitivo («Ahorra <u>para comprarse una bici</u>»).</p>`,
      svg: L.frase("Causal y final: No salió porque llovía. Ahorra para comprarse una bici", [
        ["No salió", "", "var(--line)"], ["porque llovía.", "causal", "var(--red)"],
        ["Ahorra", "", "var(--line)"], ["para comprarse una bici.", "final", "var(--leaf)"],
      ], "¿por qué? causa · ¿para qué? finalidad"),
    },
    {
      html: `<h3>Condicionales y concesivas</h3><p>Las <b>condicionales</b> ponen un requisito: si, siempre que, con tal de que («<u>Si llueve</u>, no iremos»). Las <b>concesivas</b> presentan un obstáculo que <mark>no impide</mark> lo que dice la principal: aunque, a pesar de que, por más que («<u>Aunque llueva</u>, iremos»).</p>`,
      svg: L.filas("Condicional frente a concesiva", [
        ["Condicional", "Si llueve, no iremos.", "var(--pen)"],
        ["Concesiva", "Aunque llueva, iremos.", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Consecutivas y comparativas</h3><p>Las <b>consecutivas</b> expresan un <mark>efecto</mark>: así que, de modo que, tan… que («Estaba <u>tan cansado que se durmió</u>»). Las <b>comparativas</b> comparan: más… que, menos… que, tan… como («Es <u>más alto que su padre</u>»).</p>`,
      svg: L.tabla("Nexos de consecutivas y comparativas", ["Tipo", "Nexo"], [
        ["Consecutiva", "así que · tan… que"], ["Comparativa", "más… que · tan… como"],
      ]),
    },
    {
      html: `<h3>Cuidado con «como» y «que»</h3><p>Un mismo nexo puede tener varios valores: «<u>Como no vino</u>, empezamos» (causa) / «Hazlo <u>como quieras</u>» (modo). Fíjate en el <b>significado</b>: pregúntate ¿por qué?, ¿cómo?, ¿para qué?, ¿con qué condición?</p>`,
      svg: L.filas("El nexo como puede ser causal o de modo", [
        ["Como no vino,…", "causa (¿por qué?)", "var(--red)"],
        ["Hazlo como quieras.", "modo (¿cómo?)", "var(--pen)"],
      ], "un nexo, dos valores"),
    },
  ],
  figura: {
    titulo: "Pregunta para cada adverbial",
    svg: L.columnas("Preguntas guía: por qué causal, para qué final, con qué condición condicional, a pesar de qué concesiva", [
      ["¿por qué?", "CAUSAL", ["porque · ya que", "puesto que"], "var(--red)"],
      ["¿para qué?", "FINAL", ["para que", "a fin de que"], "var(--leaf)"],
      ["¿con qué condición?", "CONDICIONAL", ["si · siempre que", "con tal de que"], "var(--pen)"],
      ["¿a pesar de qué?", "CONCESIVA", ["aunque", "a pesar de que"], "var(--inf)"],
    ]),
  },
  video: { id: "e85a3uF8MjY", titulo: "Oraciones subordinadas adverbiales", canal: "Susi Profe", vistas: 322369, megusta: 0, busqueda: "oraciones subordinadas adverbiales" },
  quiz: [
    { q: "«No fui a clase porque tenía fiebre» contiene una subordinada…", o: ["final", "causal", "concesiva"], a: 1, e: "Explica por qué: causal." },
    { q: "«Aunque estaba cansada, terminó la carrera» es…", o: ["concesiva", "condicional", "consecutiva"], a: 0, e: "El cansancio es un obstáculo que no impide terminar." },
    { q: "¿Qué nexo es final?", o: ["para que", "ya que", "si"], a: 0, e: "«Para que» indica finalidad." },
    { q: "«Habla tan bajo que nadie le oye» es…", o: ["comparativa", "consecutiva", "temporal"], a: 1, e: "«Tan… que» presenta una consecuencia." },
    { q: "«Te llamo cuando llegue» es una subordinada de…", o: ["tiempo", "lugar", "modo"], a: 0, e: "«Cuando» indica tiempo; equivale a «entonces»." },
  ],
  examen: [
    { q: "«Como no contestabas, me fui» tiene valor…", o: ["causal", "modal", "comparativo"], a: 0, e: "Responde a ¿por qué me fui?" },
    { q: "«Si me ayudas, acabaremos antes» es…", o: ["concesiva", "condicional", "final"], a: 1, e: "«Si» plantea una condición." },
    { q: "«Es más rápido que un rayo» es…", o: ["comparativa", "consecutiva", "causal"], a: 0, e: "Compara con «más… que»." },
  ],
  feynman: ["Qué tienen en común todas las adverbiales", "La diferencia entre causa y finalidad", "La diferencia entre condición y concesión", "Por qué «como» puede tener varios valores"],
  mapa: mapa("ADVERBIALES", "var(--eso)", [
    ["Tiempo · lugar · modo", "cuando · donde · como", "var(--inf)"],
    ["Causa y fin", "porque · para que", "var(--red)"],
    ["Condición y concesión", "si · aunque", "var(--pen)"],
    ["Consecuencia y comparación", "así que · más… que", "var(--leaf)"],
  ], 250),
  tarjetas: [
    ["Subordinada causal", "Expresa la causa: porque, ya que, puesto que, como."],
    ["Subordinada final", "Expresa la finalidad: para que, a fin de que, para + infinitivo."],
    ["Subordinada condicional", "Expresa una condición: si, siempre que, con tal de que."],
    ["Subordinada concesiva", "Expresa un obstáculo que no impide lo dicho: aunque, a pesar de que."],
    ["Subordinada consecutiva", "Expresa una consecuencia: así que, de modo que, tan… que."],
  ],
  familias: ["Pedidle que termine «Me quedo en casa…» de cinco maneras: con porque, para, si, aunque y así que.", "Al leer noticias, buscad un nexo adverbial y decid qué relación expresa.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: subordinación adverbial y relaciones lógicas entre proposiciones (RD 217/2022, Lengua Castellana y Literatura 4º; Nueva gramática básica).",
    ideas: ["Dominó de nexos: emparejar proposiciones con el nexo adecuado.", "Reescribir un texto cambiando nexos causales por concesivos y comentar el efecto.", "Analizar los nexos de un texto argumentativo y relacionarlos con su estructura."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE y ASALE, Nueva gramática básica de la lengua española", url: "https://www.rae.es/gram%C3%A1tica" },
    { t: "Oración subordinada adverbial, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Oraci%C3%B3n_subordinada_adverbial" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Reconocer las adverbiales de tiempo, lugar y modo y sus equivalentes adverbios", "Elegir el modo verbal correcto (indicativo o subjuntivo) en cada tipo"],
  bloques: [
    { tras: "Qué son las subordinadas adverbiales", html: `<h3>Tiempo, lugar y modo</h3><p>Estas tres se pueden cambiar por un adverbio (<i>entonces, allí, así</i>), por eso son las adverbiales «propias».</p>${L.tb(["Tipo", "Pregunta", "Nexos", "Ejemplo"], [["Temporal", "¿cuándo?", "cuando, mientras, en cuanto, antes de que, después de que, apenas", "Avísame <b>cuando llegues</b>. (= entonces)"], ["Locativa", "¿dónde?", "donde, adonde, por donde", "Siéntate <b>donde quieras</b>. (= allí)"], ["Modal", "¿cómo?", "como, según, tal como, sin + infinitivo", "Hazlo <b>como te expliqué</b>. (= así)"]])}<p>Ojo: «donde» y «cuando» con antecedente forman relativas («el sitio donde vivo»); sin antecedente, son adverbiales («Vivo donde vivía mi abuela»).</p>` },
    { tras: "Causales y finales", html: `<h3>Causa o finalidad: la pregunta decisiva</h3><p>«Estudio <b>porque</b> quiero aprobar» y «Estudio <b>para</b> aprobar» parecen iguales, pero no lo son. La <b>causa</b> es lo que ya existe y provoca la acción (¿por qué?). La <b>finalidad</b> es el objetivo, algo que todavía no ha ocurrido (¿para qué?). Por eso las finales llevan <mark>subjuntivo o infinitivo</mark>: «para que <i>aprendas</i>», «para <i>aprender</i>»; las causales suelen ir en <b>indicativo</b>: «porque <i>llueve</i>».</p><p>Ojo con <b>porque</b> (causa, junto), <b>por qué</b> (pregunta, separado y con tilde), <b>porqué</b> (sustantivo: «el porqué de todo») y <b>por que</b> (preposición + relativo: «la razón por que lo hizo»).</p>` },
    { tras: "Condicionales y concesivas", html: `<h3>Tipos de condicionales</h3>${L.tb(["Tipo", "Estructura", "Ejemplo"], [["Real o posible", "si + presente → presente / futuro / imperativo", "Si estudias, aprobarás."], ["Improbable", "si + pretérito imperfecto de subjuntivo → condicional", "Si estudiaras, aprobarías."], ["Imposible (pasado)", "si + pluscuamperfecto de subjuntivo → condicional compuesto", "Si hubieras estudiado, habrías aprobado."]])}<p>Error frecuente: usar el condicional detrás de «si»: <s>*Si tendría dinero, viajaría</s> → <mark>Si tuviera dinero, viajaría</mark>. Otros nexos condicionales: <i>como</i> + subjuntivo («Como no vengas, me enfado»), <i>en caso de que, a no ser que, siempre que</i>.</p>` },
    { tras: "Condicionales y concesivas", html: `<h3>Concesivas: el obstáculo que no impide</h3><p>La concesiva presenta una dificultad que <b>no impide</b> lo que dice la principal: «<b>Aunque</b> hacía frío, fuimos a la playa». Fíjate en el modo:</p><ul><li>Con <b>indicativo</b> el obstáculo es real: «Aunque <i>llueve</i>, saldré» (está lloviendo).</li><li>Con <b>subjuntivo</b> es posible o no importa: «Aunque <i>llueva</i>, saldré» (llueva o no).</li></ul><p>Otros nexos: <i>a pesar de que, pese a que, por más que, si bien, aun + gerundio</i> («Aun estando cansada, ganó»). No confundas concesiva con adversativa: en la concesiva el nexo puede ir al principio («Aunque es caro, lo compro»); con «pero» no.</p>` },
    { tras: "Cuidado con «como» y «que»", html: `<h3>Análisis paso a paso</h3><ol><li>Separa las proposiciones y localiza el <b>nexo</b>.</li><li>Haz la <b>pregunta</b>: ¿cuándo?, ¿dónde?, ¿cómo?, ¿por qué?, ¿para qué?, ¿con qué condición?, ¿a pesar de qué?, ¿con qué consecuencia?, ¿comparado con qué?</li><li>Comprueba si se puede cambiar por un <b>adverbio</b> (entonces, allí, así): si es así, es temporal, locativa o modal y funciona como <b>complemento circunstancial</b>.</li><li>Si no, es una adverbial impropia (causal, final, condicional, concesiva, consecutiva, comparativa), que se analiza como <b>complemento oracional</b> o del verbo, según el libro que uses.</li><li>Analiza por dentro la subordinada como una oración simple.</li></ol>` },
    { tras: "Consecutivas y comparativas", html: `<h3>Consecutivas y comparativas, más a fondo</h3><p>Hay dos clases de <b>consecutivas</b>. Las <b>intensivas</b> llevan un intensificador en la principal y «que» en la subordinada: <i>tan… que, tanto… que, tal… que</i> («Comió <b>tanto que</b> le dolió la tripa»). Las <b>ilativas</b> o no intensivas van detrás de una pausa y presentan una conclusión: <i>así que, de modo que, por (lo) tanto, conque, luego</i> («Pienso, <b>luego</b> existo»).</p><p>Las <b>comparativas</b> pueden ser de <b>superioridad</b> (más… que / de), de <b>inferioridad</b> (menos… que / de) y de <b>igualdad</b> (tan… como, tanto… como, igual que). A menudo el verbo de la subordinada se omite porque es el mismo que el de la principal: «Corre más que tú [corres]». Cuidado: después de «más» y «menos» se usa <mark>«de lo que»</mark> si sigue un verbo distinto («Es más difícil <b>de lo que</b> pensaba») y <mark>«que»</mark> en los demás casos («Es más alto <b>que</b> su hermano»).</p>` },
  ],
  videos: [
    ["Causales y finales", L.vid("FzWtl7_sSdo", "Las oraciones causales y finales en español: cómo y cuándo se usan", "Burbuja del Español", 38236)],
    ["Tipos de condicionales", L.vid("DG5iWXxdRUo", "Oraciones condicionales reales", "Tu escuela de español", 194637)],
  ],
  ejemplos: [
    ["Clasifica: «Cuando terminó el partido, los aficionados invadieron el campo.»", ["Nexo: «cuando», sin antecedente.", "Pregunta: ¿cuándo invadieron el campo? Cuando terminó el partido.", "Se puede cambiar por «entonces»: «Entonces los aficionados invadieron el campo»."], "subordinada adverbial temporal; funciona como CCT."],
    ["Clasifica: «Si me lo hubieras dicho, te habría ayudado.»", ["Nexo: «si». Pone una condición.", "Tiempo: pluscuamperfecto de subjuntivo + condicional compuesto.", "La condición se refiere al pasado y ya no se puede cumplir."], "subordinada adverbial condicional de tipo imposible (irreal de pasado)."],
    ["Clasifica: «Hablaba tan deprisa que no le entendíamos.»", ["Nexo discontinuo: «tan… que».", "La subordinada expresa el efecto o la consecuencia de hablar tan deprisa.", "Modo indicativo, porque la consecuencia es un hecho."], "subordinada adverbial consecutiva."],
  ],
  errores: [
    "Usar condicional detrás de «si»: *si tendría → si tuviera.",
    "Confundir porque, por qué, porqué y por que.",
    "Clasificar como causal una final porque las dos responden a «la razón» de algo: pregúntate ¿por qué? o ¿para qué?",
    "Confundir «donde» o «cuando» relativos (con antecedente) con adverbiales (sin antecedente).",
    "Confundir la concesiva («aunque») con la adversativa («pero»).",
    "Escribir «más alto de lo que su hermano»: «de lo que» solo se usa cuando sigue un verbo distinto.",
  ],
  ejercicios: [
    ["Clasifica: «Ven en cuanto puedas.»", "Adverbial temporal (nexo en cuanto; = entonces)."],
    ["Clasifica: «Lo hice tal como me dijiste.»", "Adverbial modal (nexo tal como; = así)."],
    ["Clasifica: «Ya que estás aquí, ayúdame.»", "Adverbial causal (nexo ya que)."],
    ["Clasifica: «Te lo explico para que lo entiendas.»", "Adverbial final (nexo para que + subjuntivo)."],
    ["Corrige: «Si sabría la respuesta, te la diría.»", "«Si supiera (supiese) la respuesta, te la diría.»"],
    ["Completa con porque, por qué, porqué o por que: «No sé ___ no viene» / «Explícame el ___» / «No vino ___ estaba enfermo».", "por qué / porqué / porque."],
    ["Explica la diferencia: «Aunque llueve, saldré» y «Aunque llueva, saldré».", "Con indicativo la lluvia es real (está lloviendo); con subjuntivo es una posibilidad (llueva o no, saldré)."],
    ["Clasifica: «Es más simpática de lo que parece.»", "Adverbial comparativa de superioridad (más… de lo que)."],
    ["Escribe una oración con una consecutiva introducida por «así que».", "«Se ha hecho tarde, así que nos vamos.»"],
    ["Clasifica la subordinada y di su función: «Coloca los libros donde estaban.»", "Adverbial locativa (= allí); funciona como CCL de «coloca»."],
  ],
  quiz: [
    ["«Si lo ___, te lo diría.»", ["supiera", "sabría", "sabré"], 0, "Si + imperfecto de subjuntivo."],
    ["«Mientras cocinas, pongo la mesa» es…", ["temporal", "concesiva", "final"], 0, "Simultaneidad: ¿cuándo?"],
    ["«Aunque llueva» indica que la lluvia es…", ["una posibilidad", "segura", "imposible"], 0, "Subjuntivo: posibilidad."],
    ["«No entiendo el ___ de su enfado.»", ["porqué", "por qué", "porque"], 0, "Sustantivo: el porqué."],
    ["¿Qué adverbiales se cambian por «entonces, allí, así»?", ["temporal, locativa y modal", "causal y final", "condicional y concesiva"], 0, "Son las adverbiales propias."],
  ],
  tarjetas: [
    ["Adverbiales propias", "Temporales, locativas y modales: se cambian por entonces, allí, así."],
    ["Condicionales irreales", "Si + imperfecto de subjuntivo → condicional: Si pudiera, iría."],
    ["Porque / por qué / porqué", "Causa / pregunta / sustantivo («el porqué»)."],
  ],
});
