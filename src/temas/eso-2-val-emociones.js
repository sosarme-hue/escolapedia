// Valores Cívicos y Éticos 2º ESO: las emociones y la convivencia. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Valores Cívicos y Éticos",
  curso: C,
  titulo: "Las emociones y la convivencia",
  minutos: 45,
  objetivos: ["Identificar las emociones básicas y su función", "Conocer las habilidades de la inteligencia emocional", "Practicar la empatía y la comunicación asertiva", "Resolver conflictos de forma pacífica mediante el diálogo y la mediación"],
  claves: ["emoción", "inteligencia emocional", "empatía", "asertividad", "conflicto", "mediación", "convivencia"],
  pregunta: {
    texto: "Si un compañero te empuja sin querer en el pasillo y reaccionas gritándole, ¿quién está controlando la situación: tú o tu enfado?",
    respuesta: "Probablemente tu enfado. Las emociones aparecen solas y en segundos, pero podemos aprender a <b>reconocerlas</b> y a <b>gestionarlas</b> antes de actuar. Eso es la <mark>inteligencia emocional</mark>, y es clave para convivir bien.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una emoción?</h3><p>Una <b>emoción</b> es una reacción rápida e intensa ante algo que nos pasa. Tiene tres componentes:</p><ul><li><b>Físico</b>: cambia el cuerpo (corazón acelerado, sudor, rubor, nudo en el estómago).</li><li><b>Mental</b>: lo que pensamos y sentimos («qué injusto», «qué miedo»).</li><li><b>Conductual</b>: lo que hacemos (gritar, huir, sonreír, llorar).</li></ul><p>No hay emociones «buenas» o «malas»: todas cumplen una <b>función</b>. Lo que puede ser adecuado o inadecuado es <mark>lo que hacemos</mark> con ellas.</p>`,
    },
    {
      html: `<h3>Las emociones básicas</h3>${tabla(["Emoción", "Aparece ante…", "Función"], [["Alegría", "algo bueno, un logro", "repetir lo que nos hace bien, unirnos a otros"], ["Tristeza", "una pérdida", "pedir apoyo, reflexionar"], ["Miedo", "un peligro", "protegernos, huir o tener cuidado"], ["Ira", "una injusticia u obstáculo", "defendernos, poner límites"], ["Asco", "algo desagradable o dañino", "rechazar lo que puede hacernos daño"], ["Sorpresa", "algo inesperado", "prestar atención"]])}<p>A partir de estas surgen emociones más complejas como la vergüenza, la culpa, los celos o el orgullo.</p>`,
      svg: svg("Seis caras con las emociones básicas: alegría, tristeza, miedo, ira, asco y sorpresa", [["alegría", "var(--sun)", "M-8 4 Q 0 12 8 4"], ["tristeza", "var(--pen)", "M-8 9 Q 0 2 8 9"], ["miedo", "var(--inf)", "M-6 6 Q 0 2 6 6 Q 0 10 -6 6"], ["ira", "var(--red)", "M-8 8 H 8"], ["asco", "var(--leaf)", "M-8 8 L -2 5 L 4 9 L 8 6"], ["sorpresa", "var(--ink)", "M-4 7 A 4 5 0 1 0 4 7 A 4 5 0 1 0 -4 7"]].map(([n, c, m], i) => { const x = 46 + (i % 3) * 84, y = 50 + Math.floor(i / 3) * 74; return `<g transform="translate(${x} ${y})"><circle r="22" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2.5"/><circle cx="-7" cy="-5" r="2.5" fill="${c}"/><circle cx="7" cy="-5" r="2.5" fill="${c}"/>${n === "ira" ? `<path d="M-12 -13 L -3 -9 M12 -13 L 3 -9" stroke="${c}" stroke-width="2.5"/>` : ""}<path d="${m}" fill="none" stroke="${c}" stroke-width="2.5"/></g>${t(x, y + 36, n, { c, s: 11 })}`; }).join("")),
      video: { id: "Vf7N6ADsmKg", titulo: "Inteligencia emocional", canal: "Psych2Go Español", vistas: 1015229 },
    },
    {
      html: `<h3>La inteligencia emocional</h3><p>El psicólogo <b>Daniel Goleman</b> popularizó en 1995 la idea de <b>inteligencia emocional</b>: la capacidad de reconocer, entender y gestionar las emociones propias y ajenas. Incluye cinco habilidades:</p><ol><li><b>Autoconciencia</b>: saber qué siento y por qué.</li><li><b>Autorregulación</b>: controlar cómo expreso lo que siento.</li><li><b>Motivación</b>: orientar mis emociones hacia mis metas.</li><li><b>Empatía</b>: comprender lo que sienten los demás.</li><li><b>Habilidades sociales</b>: relacionarme bien, cooperar, resolver conflictos.</li></ol>`,
    },
    {
      html: `<h3>Gestionar las emociones intensas</h3><p>Cuando una emoción nos desborda (ira, ansiedad), conviene aplicar la técnica del <b>semáforo</b>:</p><ul><li><b>Rojo: para</b>. No actúes en caliente. Respira hondo, cuenta hasta diez o aléjate un momento.</li><li><b>Amarillo: piensa</b>. ¿Qué siento? ¿Por qué? ¿Qué opciones tengo? ¿Qué consecuencias tendría cada una?</li><li><b>Verde: actúa</b>. Elige la respuesta que mejor resuelva la situación sin dañar a nadie.</li></ul><p>Otras estrategias: hacer ejercicio, escribir lo que sientes, hablar con alguien de confianza.</p>`,
      svg: svg("Semáforo de las emociones: rojo para, amarillo piensa, verde actúa", `<rect x="40" y="14" width="56" height="152" rx="14" fill="var(--ink)" fill-opacity=".85"/>${[["var(--red)", 42, "PARA", "respira · cuenta hasta 10"], ["var(--sun)", 90, "PIENSA", "qué siento · qué opciones"], ["var(--leaf)", 138, "ACTÚA", "la mejor respuesta"]].map(([c, y, a, b]) => `<circle cx="68" cy="${y}" r="18" fill="${c}"/>${t(110, y - 2, a, { c, s: 13, a: "start" })}${t(110, y + 14, b, { c: "var(--muted)", s: 10, a: "start" })}`).join("")}`),
    },
    {
      html: `<h3>La empatía</h3><p>La <b>empatía</b> es la capacidad de <b>ponerse en el lugar del otro</b>: comprender lo que siente y piensa, aunque no estemos de acuerdo. Se practica con:</p><ul><li><b>Escucha activa</b>: mirar a la persona, no interrumpir, hacer preguntas, resumir lo que ha dicho.</li><li>Fijarse en el <b>lenguaje no verbal</b>: gestos, tono, mirada.</li><li>Evitar juzgar o dar consejos antes de entender.</li><li>Validar: «entiendo que te sientas así».</li></ul><p>La empatía es la base de la <mark>convivencia</mark>: quien comprende el daño que causa es menos probable que lo cause.</p>`,
    },
    {
      html: `<h3>Tres estilos de comunicación</h3>${tabla(["Estilo", "Cómo es", "Ejemplo ante un compañero que siempre te interrumpe"], [["Pasivo", "no defiende sus derechos, calla", "te callas y te sientes mal"], ["Agresivo", "impone, ataca, no respeta al otro", "«¡Cállate ya, pesado!»"], ["Asertivo", "expresa lo que piensa con respeto", "«Me molesta que me interrumpas; déjame terminar, por favor»"]])}<p>La <b>asertividad</b> es el estilo más eficaz. Una fórmula útil son los <b>mensajes yo</b>: «<i>Yo</i> me siento… cuando… y me gustaría que…», en lugar de acusar con «<i>Tú</i> siempre…».</p>`,
    },
    {
      html: `<h3>Los conflictos</h3><p>Un <b>conflicto</b> es una situación en la que dos o más personas tienen intereses, necesidades u opiniones enfrentados. Son <b>normales</b> en cualquier grupo y pueden ser una oportunidad para mejorar si se resuelven bien.</p><p>Formas de afrontar un conflicto:</p><ul><li><b>Evitar</b>: hacer como si no existiera (el problema sigue).</li><li><b>Imponer</b>: ganar a costa del otro.</li><li><b>Ceder</b>: renunciar siempre a lo propio.</li><li><b>Negociar</b> o <b>colaborar</b>: buscar una solución en la que ganen las dos partes.</li></ul>`,
      video: { id: "TiNUaHXsjBA", titulo: "Conflictos: no pierdas la perspectiva", canal: "Somos Psicología y Formación", vistas: 3191709 },
    },
    {
      html: `<h3>La mediación</h3><p>Muchos institutos tienen un servicio de <b>mediación</b>: un alumno o profesor neutral ayuda a dos compañeros en conflicto a encontrar una solución. Pasos:</p><ol><li>Presentación y normas: respetar turnos, no insultar, confidencialidad.</li><li>Cada parte <b>cuenta</b> lo ocurrido y cómo se siente.</li><li>Se aclaran los <b>intereses</b> de cada uno.</li><li>Se buscan <b>soluciones</b> entre los dos.</li><li>Se llega a un <b>acuerdo</b> y se revisa después.</li></ol><p>El mediador no decide ni juzga: ayuda a que <mark>las partes hablen</mark>.</p>`,
      svg: svg("Mediación: dos personas en conflicto y una persona mediadora en el centro que facilita el diálogo", `${persona(50, 50, "var(--red)")}${persona(210, 50, "var(--pen)")}${persona(130, 40, "var(--leaf)", { brazos: [[-20, 2], [20, 2]] })}<path d="M70 40 Q 100 20 112 34 M190 40 Q 160 20 148 34" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 3"/>${t(50, 130, "parte A", { c: "var(--red)", s: 11 })}${t(210, 130, "parte B", { c: "var(--pen)", s: 11 })}${t(130, 120, "mediador", { c: "var(--leaf)", s: 11 })}${t(130, 160, "escucha · no juzga · ayuda a acordar", { c: "var(--muted)", s: 11 })}`),
    },
  ],
  figura: {
    titulo: "Las emociones y la convivencia",
    svg: filas("Resumen: emociones básicas, inteligencia emocional, semáforo, empatía, asertividad y mediación", [["Emociones", "alegría · tristeza · miedo · ira · asco · sorpresa", "var(--sun)"], ["Int. emocional", "conocer y gestionar lo que sentimos", "var(--pen)"], ["Semáforo", "para · piensa · actúa", "var(--red)"], ["Empatía", "ponerse en el lugar del otro", "var(--leaf)"], ["Asertividad", "decir lo que pienso con respeto", "var(--inf)"], ["Conflictos", "negociar · mediación", "var(--ink)"]], 200),
  },
  video: { id: "Vf7N6ADsmKg", titulo: "Inteligencia emocional", canal: "Psych2Go Español", vistas: 1015229, megusta: 0, busqueda: "inteligencia emocional" },
  quiz: mezcla([
    { q: "¿Hay emociones malas?", o: ["no, todas tienen una función", "sí, la ira y el miedo", "sí, todas menos la alegría"], a: 0, e: "Importa lo que hacemos con ellas." },
    { q: "La función del miedo es…", o: ["protegernos ante un peligro", "atacar", "divertirnos"], a: 0, e: "Huir o tener cuidado." },
    { q: "La inteligencia emocional la popularizó…", o: ["Daniel Goleman", "Kant", "Aristóteles"], a: 0, e: "En 1995." },
    { q: "Saber qué siento y por qué es…", o: ["autoconciencia", "empatía", "asertividad"], a: 0, e: "Primera habilidad." },
    { q: "Ponerse en el lugar del otro es…", o: ["empatía", "autoestima", "imposición"], a: 0, e: "Comprender lo que siente." },
    { q: "En el semáforo, la luz roja significa…", o: ["para", "actúa", "piensa"], a: 0, e: "No actuar en caliente." },
    { q: "Decir lo que piensas con respeto es el estilo…", o: ["asertivo", "agresivo", "pasivo"], a: 0, e: "El más eficaz." },
    { q: "«Me molesta que me interrumpas» es un…", o: ["mensaje yo", "insulto", "mensaje pasivo"], a: 0, e: "Habla de lo que siento." },
    { q: "La forma de afrontar un conflicto en la que ganan las dos partes es…", o: ["colaborar", "imponer", "evitar"], a: 0, e: "Gana-gana." },
    { q: "En la mediación, el mediador…", o: ["ayuda a que las partes acuerden", "decide quién tiene razón", "castiga"], a: 0, e: "Neutral." },
  ]),
  examen: mezcla([
    { q: "Los tres componentes de una emoción son…", o: ["físico, mental y conductual", "bueno, malo y regular", "pasado, presente y futuro"], a: 0, e: "Cuerpo, pensamiento y acción." },
    { q: "Callarse y sentirse mal cuando te tratan injustamente es un estilo…", o: ["pasivo", "asertivo", "agresivo"], a: 0, e: "No defiende sus derechos." },
    { q: "La escucha activa consiste en…", o: ["atender, no interrumpir y resumir lo que dice el otro", "preparar la respuesta mientras habla", "mirar el móvil"], a: 0, e: "Base de la empatía." },
  ]),
  feynman: ["Qué es una emoción y sus componentes", "Las seis emociones básicas y su función", "Las cinco habilidades de la inteligencia emocional", "Estilos pasivo, agresivo y asertivo", "Cómo funciona la mediación"],
  mapa: mapa("EMOCIONES Y CONVIVENCIA", "var(--eso)", [
    ["Emociones", "6 básicas · función", "var(--sun)"],
    ["Gestión", "semáforo · autorregulación", "var(--red)"],
    ["Empatía", "escucha activa", "var(--leaf)"],
    ["Conflictos", "asertividad · mediación", "var(--pen)"],
  ], 230),
  tarjetas: [
    ["Emoción", "Reacción rápida e intensa ante algo que nos pasa."],
    ["Inteligencia emocional", "Reconocer y gestionar emociones propias y ajenas."],
    ["Autorregulación", "Controlar cómo expresamos lo que sentimos."],
    ["Empatía", "Ponerse en el lugar del otro."],
    ["Escucha activa", "Atender sin interrumpir y comprobar que entendemos."],
    ["Asertividad", "Expresar lo que pienso con respeto."],
    ["Conflicto", "Choque de intereses u opiniones."],
    ["Mediación", "Una persona neutral ayuda a las partes a acordar."],
  ],
  familias: ["Durante la cena, que cada uno diga una emoción que ha sentido hoy y por qué.", "Practicad juntos un «mensaje yo» ante un pequeño conflicto de casa.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "La gestión de las emociones y los sentimientos; la empatía; la asertividad; la resolución pacífica de conflictos y la mediación (RD 217/2022, Educación en Valores Cívicos y Éticos, bloque A, autoconocimiento y autonomía moral; bloque B, convivencia).",
    ideas: ["Diario emocional de una semana.", "Role-playing de los tres estilos de comunicación.", "Simulación de mediación con casos del centro."],
  },
  fuentes: [RD, { t: "Ministerio de Educación: convivencia escolar", url: "https://www.educacionfpydeportes.gob.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Un amigo cuenta a otros un secreto tuyo. Sientes mucha rabia. Aplica el semáforo.", pasos: ["Rojo: no le escribas en caliente; respira.", "Amarillo: siento ira y decepción; puedo hablar con él, cortar la amistad o ignorarlo.", "Verde: hablar con él a solas con un mensaje yo."], resultado: "«Me sentí traicionado cuando contaste mi secreto; necesito poder confiar en ti»." },
    { enunciado: "Convierte en asertivo: «Eres un egoísta, nunca compartes nada».", pasos: ["Quitar el insulto y el «nunca».", "Hablar de lo que sientes y lo que pides."], resultado: "«Me siento mal cuando no compartes el material; me gustaría que lo usáramos los dos»." },
    { enunciado: "Dos compañeros discuten por quién usa el ordenador del aula. Propón una solución gana-gana.", pasos: ["Interés de ambos: usar el ordenador.", "Opciones: turnos, compartir, usar otro."], resultado: "Turnos de 15 minutos con un reloj." },
  ],
  errores: [
    "Pensar que sentir ira o tristeza es malo.",
    "Confundir gestionar emociones con reprimirlas.",
    "Creer que ser asertivo es ser agresivo «con educación».",
    "Pensar que el mediador decide quién tiene razón.",
    "Ver los conflictos siempre como algo negativo que hay que evitar.",
  ],
  ejercicios: [
    { q: "Escribe los tres componentes de una emoción.", sol: "Físico, mental y conductual." },
    { q: "Nombra las seis emociones básicas y la función de dos.", sol: "Alegría, tristeza, miedo, ira, asco, sorpresa. Miedo: protegernos. Ira: poner límites." },
    { q: "¿Qué es la inteligencia emocional?", sol: "La capacidad de reconocer, entender y gestionar las emociones propias y ajenas." },
    { q: "Escribe las cinco habilidades de Goleman.", sol: "Autoconciencia, autorregulación, motivación, empatía y habilidades sociales." },
    { q: "Explica la técnica del semáforo.", sol: "Rojo: parar. Amarillo: pensar. Verde: actuar." },
    { q: "Escribe tres claves de la escucha activa.", sol: "Mirar, no interrumpir, resumir lo que dice el otro." },
    { q: "Diferencia los estilos pasivo, agresivo y asertivo.", sol: "Pasivo: calla. Agresivo: impone. Asertivo: expresa con respeto." },
    { q: "Escribe un mensaje yo para pedir silencio al estudiar.", sol: "«Me cuesta concentrarme cuando hay ruido; ¿podrías bajar el volumen?»" },
    { q: "Enumera las formas de afrontar un conflicto.", sol: "Evitar, imponer, ceder, negociar o colaborar." },
    { q: "Explica los pasos de una mediación.", sol: "Normas, cada parte cuenta, intereses, soluciones, acuerdo." },
  ],
};
