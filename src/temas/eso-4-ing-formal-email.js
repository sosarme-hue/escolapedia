// Inglés 4º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "4-eso",
  titulo: "Writing: formal emails and letters",
  minutos: 35,
  objetivos: ["Distinguir el registro formal del informal", "Organizar un email formal: saludo, motivo, desarrollo, petición y despedida", "Usar fórmulas fijas para pedir información, reclamar o solicitar"],
  claves: ["formal register", "Dear Sir or Madam", "Yours faithfully", "Yours sincerely", "I am writing to", "I look forward to"],
  pregunta: {
    texto: "Escribes al director de un campamento de verano en Irlanda para pedir información. ¿Empiezas con «Hi mate!» o con algo diferente?",
    respuesta: "Con algo diferente: <mark>«Dear Sir or Madam,»</mark> si no sabes su nombre, o <mark>«Dear Mr Byrne,»</mark> si lo sabes. Un email formal tiene fórmulas fijas al principio y al final, y si las usas bien, das muy buena impresión.",
  },
  bloques: [
    {
      html: `<h3>Formal o informal</h3><p>El registro <b>formal</b> se usa con personas que no conoces o con instituciones: empresas, escuelas, ayuntamientos. Evita contracciones, palabras coloquiales y emojis. Compara: <i>Can you send me…?</i> (informal) / <mark><i>I would be grateful if you could send me…</i></mark> (formal).</p>`,
      svg: L.filas("Informal frente a formal", [
        ["Informal", "Thanks a lot!", "var(--muted)"], ["Formal", "Thank you very much.", "var(--pen)"],
        ["Informal", "I wanna know…", "var(--muted)"], ["Formal", "I would like to know…", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>Las partes del email formal</h3><p><b>Subject</b> claro. <b>Saludo</b>. <b>Párrafo 1</b>: motivo («I am writing to…»). <b>Párrafo 2-3</b>: detalles o preguntas. <b>Párrafo final</b>: lo que esperas («I look forward to hearing from you»). <b>Despedida</b> y nombre completo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de un email formal con asunto, saludo, motivo, detalles, cierre y firma">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="10" width="220" height="160" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <g ${F} font-size="12">
          <text x="30" y="30" font-weight="700" fill="var(--muted)">Subject: Summer camp</text>
          <path d="M28 38 H 232" stroke="var(--line)" stroke-width="2"/>
          <text x="30" y="56" font-weight="700" fill="var(--pen)">Dear Sir or Madam,</text>
          <text x="30" y="76" fill="var(--ink)">I am writing to ask about…</text>
          <text x="30" y="96" fill="var(--ink)">Could you tell me…?</text>
          <text x="30" y="116" fill="var(--ink)">I look forward to hearing…</text>
          <text x="30" y="138" font-weight="700" fill="var(--red)">Yours faithfully,</text>
          <text x="30" y="158" fill="var(--leaf)" font-weight="700">Lucía García</text>
        </g></svg>`,
    },
    {
      html: `<h3>Saludos y despedidas</h3><p>Si <b>no sabes el nombre</b>: <i>Dear Sir or Madam,</i> → <mark><i>Yours faithfully,</i></mark>. Si <b>sabes el nombre</b>: <i>Dear Ms Smith,</i> → <mark><i>Yours sincerely,</i></mark>. En emails algo menos formales: <i>Kind regards</i> o <i>Best regards</i>. Nunca <i>Love</i> ni <i>See you!</i></p>`,
      svg: L.tabla("Saludo y despedida según conozcas o no el nombre", ["Greeting", "Closing"], [
        ["Dear Sir or Madam", "Yours faithfully"], ["Dear Mr Smith", "Yours sincerely"], ["Dear Ms Lee", "Kind regards"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Fórmulas útiles</h3><p><b>Motivo</b>: I am writing to enquire about / to apply for / to complain about… <b>Pedir</b>: Could you please…? / I would be grateful if you could… <b>Adjuntar</b>: Please find attached… <b>Cerrar</b>: I look forward to hearing from you. Do not hesitate to contact me.</p>`,
      svg: L.filas("Fórmulas del email formal", [
        ["Reason", "I am writing to…", "var(--pen)"], ["Request", "Could you please…?", "var(--leaf)"],
        ["Attach", "Please find attached…", "var(--inf)"], ["Close", "I look forward to…", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Tipos de email formal</h3><p>Los más habituales en exámenes son: <b>pedir información</b> (un curso, un viaje), <b>reclamar</b> (un producto defectuoso: <i>I am writing to complain about…</i>), <b>solicitar</b> un trabajo o una beca (<i>to apply for…</i>, con CV adjunto) y <b>disculparse</b> formalmente.</p>`,
      svg: L.filas("Tipos de email formal", [
        ["Enquiry", "to enquire about", "var(--pen)"], ["Complaint", "to complain about", "var(--red)"],
        ["Application", "to apply for", "var(--leaf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Un email formal paso a paso",
    svg: L.pasos("Pasos de un email formal", [
      ["Greeting", ["Dear Sir", "or Madam,"], "var(--pen)"],
      ["Reason", ["I am writing", "to enquire…"], "var(--leaf)"],
      ["Details", ["Could you", "please tell me…"], "var(--inf)"],
      ["Closing", ["I look forward…", "Yours faithfully,"], "var(--red)"],
    ]),
  },
  video: { id: "xay5TeJVSC0", titulo: "Emails in English: how to write an email in English", canal: "Oxford Online English", vistas: 1227708, megusta: 20723, busqueda: "how to write a formal email english" },
  quiz: [
    { q: "Si empiezas con «Dear Sir or Madam», terminas con…", o: ["Yours sincerely", "Yours faithfully", "Love"], a: 1, e: "Sin nombre: Yours faithfully." },
    { q: "¿Qué frase es formal?", o: ["I wanna ask you something.", "I would like to ask about…", "Hey, quick question!"], a: 1, e: "Sin contracciones ni coloquialismos." },
    { q: "Para explicar el motivo del email escribes…", o: ["I am writing to…", "What's up?", "Bye for now"], a: 0, e: "Es la fórmula estándar del primer párrafo." },
    { q: "«Please find attached my CV» significa…", o: ["Te adjunto mi CV", "Busca mi CV", "No tengo CV"], a: 0, e: "Fórmula para indicar un archivo adjunto." },
    { q: "Para reclamar por un producto escribes…", o: ["to apply for", "to complain about", "to look forward to"], a: 1, e: "Complain about = reclamar por." },
  ],
  examen: [
    { q: "Si sabes el nombre («Dear Mrs Taylor»), terminas con…", o: ["Yours sincerely", "Yours faithfully", "Cheers"], a: 0, e: "Con nombre: Yours sincerely." },
    { q: "«I look forward to ___ from you.»", o: ["hear", "hearing", "heard"], a: 1, e: "Look forward to + -ing." },
    { q: "Una forma educada de pedir algo es…", o: ["Send me it.", "I would be grateful if you could send it.", "Give it now."], a: 1, e: "Fórmula formal y cortés." },
  ],
  feynman: ["Las diferencias entre registro formal e informal", "Las partes de un email formal", "Cuándo uso Yours faithfully y cuándo Yours sincerely", "Tres fórmulas útiles"],
  mapa: mapa("FORMAL EMAIL", "var(--eso)", [
    ["Register", "no contractions · polite", "var(--pen)"],
    ["Structure", "reason · details · closing", "var(--leaf)"],
    ["Greetings", "Dear Sir or Madam", "var(--inf)"],
    ["Closings", "faithfully · sincerely", "var(--red)"],
  ], 240),
  tarjetas: [
    ["Dear Sir or Madam", "Saludo si no sabes el nombre; se cierra con Yours faithfully."],
    ["Dear Mr / Ms + apellido", "Saludo si sabes el nombre; se cierra con Yours sincerely."],
    ["I am writing to…", "Fórmula para explicar el motivo al principio."],
    ["I look forward to hearing from you", "Fórmula de cierre: espero su respuesta."],
    ["Registro formal", "Sin contracciones, emojis ni palabras coloquiales."],
  ],
  familias: ["Escribid juntos un email formal real en inglés (por ejemplo, para pedir información de un curso de verano).", "Pedidle que transforme un mensaje informal suyo en uno formal.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Producción escrita: textos transaccionales formales (correos, cartas de solicitud y reclamación) y adecuación al registro (RD 217/2022, Lengua Extranjera 4º; nivel B1 del MCER).",
    ideas: ["Responder a anuncios reales de campamentos, intercambios o voluntariado.", "Clasificar fórmulas en «formal / informal» con tarjetas.", "Simular una reclamación y la respuesta de la empresa por parejas."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: writing skills", url: "https://learnenglishteens.britishcouncil.org/skills/writing" },
    { t: "Cambridge Dictionary: letters and emails", url: "https://dictionary.cambridge.org/grammar/british-grammar/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Escribir emails formales completos de petición, reclamación y solicitud", "Usar preguntas indirectas y fórmulas de cortesía", "Distinguir el email formal del semiformal y del informal"],
  bloques: [
    { tras: "Formal o informal", html: `<h3>Tres registros, tres emails</h3>${L.tb(["", "Informal", "Semiformal", "Formal"], [["a quién", "amigos, familia", "un profesor, un conocido", "una empresa, una institución"], ["saludo", "Hi Tom! / Hey,", "Dear Mr Brown,", "Dear Sir or Madam,"], ["inicio", "How are you?", "I hope you are well.", "I am writing to…"], ["despedida", "Love, / See you soon,", "Best wishes, / Kind regards,", "Yours faithfully,"], ["estilo", "contracciones, emojis", "pocas contracciones", "sin contracciones, frases completas"]])}<p>En un examen, lee bien a quién va dirigido el email: el registro equivocado es uno de los fallos que más puntos resta.</p>` },
    { tras: "Fórmulas útiles", html: `<h3>Preguntas indirectas: la clave de la cortesía</h3><p>En un email formal casi nunca se hacen preguntas directas («When does the course start?»). Se usan fórmulas que suavizan la pregunta, con el orden <b>sujeto + verbo</b>:</p><ul><li>«<b>Could you tell me when</b> the course starts?»</li><li>«<b>I would like to know whether</b> accommodation is included.»</li><li>«<b>I would be grateful if you could</b> send me a brochure.»</li><li>«<b>I was wondering if</b> there are any discounts for students.»</li></ul><p>Fíjate en que después de estas fórmulas desaparecen <i>do / does / did</i>: «I would like to know when the course <b>starts</b>» (no *when does the course start).</p>` },
    { tras: "Tipos de email formal", html: `<h3>Un email de reclamación, paso a paso</h3><ol><li><b>Motivo</b>: «I am writing to complain about a pair of headphones I bought from your website on 3 March (order number 4521).»</li><li><b>El problema</b>, con datos: «When they arrived, the left speaker did not work. Moreover, the box was damaged.»</li><li><b>Lo que ya has hecho</b>: «I tried to contact your customer service by phone, but nobody answered.»</li><li><b>Lo que pides</b>: «I would therefore like a full refund or a replacement as soon as possible.»</li><li><b>Cierre</b>: «I look forward to hearing from you. Yours faithfully, Lucía Gómez».</li></ol><p>El tono debe ser <b>firme pero educado</b>: nada de insultos ni mayúsculas.</p>` },
    { tras: "Tipos de email formal", html: `<h3>La carta de solicitud (application)</h3><p>Sirve para pedir un trabajo de verano, una beca o una plaza de voluntariado. Estructura:</p><ul><li><b>Párrafo 1</b>: qué solicitas y dónde viste el anuncio. «I am writing to apply for the position of summer camp monitor advertised on your website.»</li><li><b>Párrafo 2</b>: quién eres y tu experiencia. «I am sixteen and I have been a volunteer at a children's club for two years.»</li><li><b>Párrafo 3</b>: tus cualidades y por qué eres adecuado. «I am patient, responsible and I speak English and French.»</li><li><b>Párrafo 4</b>: disponibilidad y cierre. «I am available from 1 July. Please find attached my CV. I look forward to hearing from you.»</li></ul>` },
    { tras: "Tipos de email formal", html: `<h3>Revisa antes de enviar</h3><ul><li>¿El <b>asunto</b> (subject) resume el motivo? «Enquiry about summer courses», «Complaint – order 4521».</li><li>¿El <b>saludo y la despedida</b> encajan? (Sir or Madam → faithfully; nombre → sincerely).</li><li>¿Hay una <b>coma</b> después del saludo y la despedida, y empieza el texto con mayúscula en la línea siguiente?</li><li>¿Has evitado las <b>contracciones</b> y las expresiones coloquiales?</li><li>¿Cada párrafo tiene <b>una sola función</b>?</li><li>¿Has firmado con <b>nombre y apellido</b>?</li></ul><p>En inglés británico se escribe <i>Ms</i> (para cualquier mujer), <i>Mr</i>, <i>Mrs</i> y <i>Dr</i> sin punto.</p>` },
  ],
  videos: [
    ["Las partes del email formal", L.vid("fSHQ-oi3pDc", "How to write an email", "English Units", 1559707)],
    ["Tipos de email formal", L.vid("3Tu1jN65slw", "How to write professional emails in English", "English with Alex (engVid)", 3252038)],
  ],
  ejemplos: [
    ["Escribe el primer párrafo de un email para pedir información sobre un curso de inglés en Dublín.", ["Saludo formal sin nombre: Dear Sir or Madam,", "Motivo con fórmula: I am writing to enquire about…", "Datos del curso y de dónde lo viste."], "Dear Sir or Madam, I am writing to enquire about the two-week summer English course in Dublin which I saw advertised on your website."],
    ["Convierte en preguntas indirectas: «How much is it? Is lunch included?»", ["Usa fórmulas de cortesía: Could you tell me… / I would like to know…", "Orden sujeto + verbo: how much it costs.", "Para sí/no, usa if / whether."], "Could you tell me how much the course costs? I would also like to know whether lunch is included."],
    ["Corrige el registro: «Hi! I'm writing coz the hotel was awful!!! Give me my money back. Bye.»", ["Saludo y despedida formales: Dear Sir or Madam, … Yours faithfully,", "Sin contracciones ni coloquialismos (coz → because).", "Sin exclamaciones; petición cortés con would like."], "Dear Sir or Madam, I am writing to complain about my recent stay at your hotel… I would therefore like a refund. Yours faithfully, …"],
  ],
  errores: [
    "Mezclar saludo y despedida: Dear Sir or Madam… Yours sincerely (debe ser faithfully).",
    "Usar contracciones (I'm, don't) en un email formal.",
    "Hacer preguntas directas con do / does en lugar de indirectas.",
    "Olvidar el motivo del email en el primer párrafo.",
    "Escribir *I look forward to hear from you → hearing.",
    "Escribir párrafos larguísimos: en un email formal cada párrafo debe ser breve y tener una sola idea, para que se lea rápido.",
  ],
  ejercicios: [
    ["¿Qué despedida va con «Dear Mrs Taylor»?", "Yours sincerely."],
    ["Escribe un asunto para un email de reclamación por un pedido que no ha llegado.", "Complaint – order not received (order no. 3367). También: Missing order 3367."],
    ["Haz indirecta: «Where can I park?»", "Could you tell me where I can park?"],
    ["Haz indirecta: «Do you have rooms for four people?»", "I would like to know whether (if) you have rooms for four people."],
    ["Escribe la frase para adjuntar un documento.", "Please find attached my CV. / I have attached the receipt."],
    ["Completa: «I would be grateful if you ___ (send) me more information.»", "could send."],
    ["Haz formal: «I wanna know about the prices.»", "I would like to receive information about the prices."],
    ["Escribe el párrafo final de un email de solicitud.", "I am available for an interview at any time. Thank you for considering my application. I look forward to hearing from you."],
    ["¿Qué tres datos debe tener el párrafo del problema en una reclamación?", "Qué compraste o qué servicio usaste, cuándo y qué falló exactamente (con número de pedido si lo hay)."],
    ["Escribe una frase de un email semiformal a tu profesora para pedir una tutoría.", "Dear Ms Smith, I hope you are well. Would it be possible to meet on Thursday to talk about my project? Best wishes, Pablo."],
  ],
  quiz: [
    ["«Dear Mr Jones» → despedida:", ["Yours sincerely", "Yours faithfully", "Love"], 0, "Con nombre: sincerely."],
    ["¿Qué pregunta es formal?", ["Could you tell me when it opens?", "When does it open?", "When's it open?"], 0, "Pregunta indirecta."],
    ["«I look forward to ___ from you.»", ["hearing", "hear", "heard"], 0, "To es preposición: -ing."],
    ["En un email semiformal se puede terminar con…", ["Kind regards,", "Hugs!", "Bye bye"], 0, "Neutro y educado."],
    ["El tono de una reclamación debe ser…", ["firme pero educado", "agresivo", "muy informal"], 0, "Sin insultos ni mayúsculas."],
  ],
  tarjetas: [
    ["Pregunta indirecta formal", "Could you tell me when the course starts? (sin does)"],
    ["I would be grateful if…", "Fórmula cortés para pedir: …if you could send me…"],
    ["Registro semiformal", "Dear Mr Brown, … Best wishes / Kind regards,"],
  ],
});

// Nivel libro (4º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso4L7").libro(module.exports, {
  lectura: ["Dos emails, un mismo objetivo", `<p>Marta y Hugo querían hacer un voluntariado de verano en un parque natural de Escocia. Los dos escribieron a la organización. El email de Hugo decía: «<i>Hi! I wanna do the volunteering thing in July. How much is it? Send me info pls. Thx!</i>». El de Marta empezaba así: «<i>Dear Sir or Madam, I am writing to enquire about the summer volunteering programme advertised on your website. I would be grateful if you could tell me whether there are any places available in July…</i>».</p><p>Marta recibió una respuesta en dos días con toda la información y una invitación para una entrevista online. Hugo recibió un mensaje automático. No es que su inglés fuera peor: simplemente usó el <b>registro</b> equivocado. Con un amigo, su mensaje habría sido perfecto; con una organización desconocida, transmitía poco interés y poca seriedad.</p><p>Saber escribir un email formal es una de las destrezas más útiles que te llevarás de la ESO: lo necesitarás para pedir información a una universidad, solicitar unas prácticas, reclamar por un pedido o escribir a un profesor. En este tema aprenderás la estructura, las fórmulas fijas, cómo hacer peticiones educadas y cómo adaptar el tono según el destinatario. Al final, escribirás un email real.</p>`],
  mas: [
    ["<h3>Formal o informal</h3>", `<p>Para decidir el registro, hazte dos preguntas: <b>¿conozco a esta persona?</b> y <b>¿qué relación tenemos?</b> Una empresa, una institución o un adulto desconocido piden registro formal. Un profesor o un entrenador con el que tienes trato, semiformal. Un amigo o un familiar, informal. En caso de duda, empieza más formal: es mejor parecer demasiado educado que demasiado confiado. Si la otra persona te responde con un tono más relajado, puedes adaptarte.</p>`],
    ["<h3>Las partes del email formal</h3>", `<p>Cada párrafo tiene una función y suele ser corto (dos a cuatro frases). El primero dice <b>quién eres y por qué escribes</b>; los centrales desarrollan la petición, el problema o tu candidatura; el último indica <b>qué esperas</b> que haga el destinatario y cierra con educación. Un email formal de 4º suele tener entre 120 y 180 palabras: suficiente para dar toda la información sin cansar al lector.</p>`],
    ["<h3>Fórmulas útiles</h3>", `<p>Algunas fórmulas para pedir con distinto grado de formalidad: <i>Could you please…?</i> (educado), <i>I would be grateful if you could…</i> (formal), <i>I would appreciate it if you could…</i> (muy formal). Para agradecer: <i>Thank you for your prompt reply</i>, <i>Thank you in advance for your help</i>. Y para ofrecer más información: <i>Should you require any further information, please do not hesitate to contact me</i>.</p>`],
    ["<h3>Tipos de email formal</h3>", `<p>Aunque cada tipo tiene su propósito, todos comparten el mismo esqueleto: saludo, motivo, desarrollo, petición final, despedida y nombre completo. Lo que cambia es el vocabulario: en una reclamación aparecen <i>complain, disappointed, refund, replacement</i>; en una solicitud, <i>apply, position, experience, skills</i>; en una petición de información, <i>enquire, details, available, cost</i>.</p>`],
    ["<h3>Saludos y despedidas</h3>", `<p>Entre el formal y el informal está el registro <b>semiformal</b>, el que usarás con profesores, entrenadores o personas con las que ya tienes trato: «Dear Ms Ruiz» o «Hello Mr Smith» y, al final, <b>Kind regards</b>, <b>Best regards</b> o <b>Best wishes</b>. En inglés británico no se pone punto tras Mr, Mrs, Ms y Dr; en americano, sí (Mr.). Usa <b>Ms</b> para una mujer si no sabes si prefiere Mrs o Miss: es la opción neutra y segura.</p>`],
    ["<h3>Revisa antes de enviar</h3>", `<p>Lee el email en voz alta, como si fueras el destinatario: ¿entiende enseguida qué quieres y qué debe hacer? Comprueba también las mayúsculas en los nombres propios, días y meses (<i>Monday, July</i>), que en inglés siempre van en mayúscula, y el pronombre <i>I</i>. Un único error de este tipo puede dar una impresión de descuido.</p>`],
  ],
  svgs: [
    ["<h3>Tres registros, tres emails</h3>", "Tres registros de email", [["Formal", "Dear Sir or Madam, …"], ["Semiformal", "Dear Ms Ruiz, … Kind regards"], ["Informal", "Hi Tom! … Love"]]],
    ["<h3>Preguntas indirectas: la clave de la cortesía</h3>", "Preguntas directas e indirectas", [["Directa", "When does it start?"], ["Indirecta", "Could you tell me when it starts?"], ["Sí / no", "I'd like to know if…"]]],
    ["<h3>Un email de reclamación, paso a paso</h3>", "Pasos de un email de reclamación", [["1. Motivo", "I am writing to complain about…"], ["2. Problema", "qué, cuándo, dónde"], ["3. Solución", "I would like a refund."]]],
    ["<h3>La carta de solicitud (application)</h3>", "Partes de una carta de solicitud", [["Motivo", "I am writing to apply for…"], ["Por qué tú", "experiencia y cualidades"], ["Cierre", "I look forward to hearing…"]]],
    ["<h3>Revisa antes de enviar</h3>", "Revisar antes de enviar", [["Registro", "sin contracciones ni jerga"], ["Despedida", "faithfully / sincerely"], ["Datos", "nombre, fechas, adjuntos"]]],
  ],
  bloques: [
    { tras: "<h3>Saludos y despedidas</h3>", html: `<h3>El asunto y el aspecto del email</h3><p>El <b>asunto</b> (<i>subject line</i>) es lo primero que ve el destinatario y decide si abre tu mensaje o no. Debe ser <mark>breve y concreto</mark>: entre tres y ocho palabras que resuman el motivo. Buenos ejemplos: «<i>Enquiry about summer courses</i>», «<i>Application for volunteer position</i>», «<i>Complaint: order no. 45872</i>», «<i>Request for a reference letter</i>». Evita asuntos vacíos como «Hello» o «Question», y nunca lo dejes en blanco.</p><p>En cuanto al <b>formato</b>: los párrafos no llevan sangría y se separan con una <b>línea en blanco</b>. Tras el saludo se pone <b>coma</b> («Dear Ms Smith<b>,</b>») y el texto empieza en la línea siguiente con mayúscula. La despedida también lleva coma («Yours sincerely<b>,</b>») y debajo va tu <b>nombre completo</b>; en un email profesional se añade a veces el cargo o el teléfono.</p><p>Otros detalles importantes: usa una dirección de correo seria (nada de «superchica2009@…»), evita los emoticonos, las mayúsculas para destacar (parecen gritos) y los signos de exclamación repetidos. Si adjuntas un archivo, menciónalo en el texto y ponle un nombre claro: «Marta_Lopez_CV.pdf».</p>`, svg: ["Asunto y formato del email", [["Asunto", "Enquiry about summer courses"], ["Saludo", "Dear Ms Smith,"], ["Párrafos", "sin sangría, línea en blanco"], ["Firma", "Yours sincerely, + nombre"]]] },
    { tras: "<h3>Preguntas indirectas: la clave de la cortesía</h3>", html: `<h3>Lenguaje diplomático: suavizar el mensaje</h3><p>En inglés, la cortesía depende mucho de <b>suavizar</b> lo que decimos, incluso cuando nos quejamos. Algunas técnicas:</p><ul><li><b>Modales</b> en lugar de imperativos: «Send me the form» → «<b>Could</b> you send me the form?» → «I <b>would</b> be grateful if you <b>could</b> send me the form».</li><li><b>Past continuous</b> para peticiones: «I <b>was wondering</b> if you could help me».</li><li><b>Unfortunately / I'm afraid</b> para dar malas noticias o señalar un problema: «<b>Unfortunately</b>, the product arrived damaged», «<b>I'm afraid</b> I will not be able to attend».</li><li><b>Pasiva</b> para no acusar directamente: «You sent the wrong size» → «The wrong size <b>was sent</b>».</li><li><b>Palabras atenuantes</b>: <i>slightly, a little, rather, quite</i>: «I was <b>rather</b> disappointed».</li></ul><p>Este tono es especialmente importante en las <b>reclamaciones</b>: un email agresivo («Your service is terrible! I want my money NOW!») tiene menos posibilidades de éxito que uno firme pero educado («I was extremely disappointed with the service. I would therefore like to request a full refund»). La firmeza viene de los hechos y de la petición clara, no de los insultos.</p>`, svg: ["Técnicas para suavizar el mensaje", [["Modales", "Could you send…?"], ["Wondering", "I was wondering if…"], ["Malas noticias", "Unfortunately, …"], ["Pasiva", "The wrong size was sent."]]] },
    { tras: "<h3>Un email de reclamación, paso a paso</h3>", html: `<h3>Pedir información, paso a paso</h3><p>El email de <b>petición de información</b> (<i>enquiry</i>) es el más frecuente: preguntar por un curso, un campamento, un alojamiento o un evento. Su estructura es sencilla:</p><ol><li><b>Saludo y motivo</b>: «Dear Sir or Madam, I am writing to enquire about the English course advertised on your website».</li><li><b>Quién eres</b> (breve): «I am a 16-year-old student from Spain and I am interested in improving my English this summer».</li><li><b>Las preguntas</b>, en forma indirecta y ordenadas, a veces con conectores: «Firstly, I would like to know <b>how much</b> the course costs. <b>In addition</b>, could you tell me <b>whether</b> accommodation is included? Finally, I would be grateful if you could send me information about the activities».</li><li><b>Cierre</b>: «Thank you in advance for your help. I look forward to hearing from you».</li><li><b>Despedida y nombre</b>: «Yours faithfully, Marta López».</li></ol><p>Dos consejos: no hagas más de tres o cuatro preguntas (si no, el email parece un interrogatorio) y varía las fórmulas: <i>I would like to know…, Could you tell me…?, I was also wondering…, Could you let me know…?</i></p>`, svg: ["Email para pedir información", [["Motivo", "I am writing to enquire about…"], ["Quién eres", "I am a 16-year-old student…"], ["Preguntas", "I would like to know how much…"], ["Cierre", "Thank you in advance…"]]] },
    { tras: "<h3>La carta de solicitud (application)</h3>", html: `<h3>Responder a un email formal</h3><p>Muchas veces no eres tú quien empieza la conversación, sino que <b>respondes</b> a un mensaje: una oferta, una confirmación, una pregunta de un profesor. La respuesta formal empieza agradeciendo el mensaje: «<b>Thank you for your email</b> of 3rd May», «<b>Thank you for your prompt reply</b>», «<b>Further to</b> your email…» (en relación con su email).</p><p>Después, se <b>responde punto por punto</b> a lo que te preguntaron, en el mismo orden: «<b>Regarding</b> the dates, I would prefer the second week of July. <b>As for</b> accommodation, I would like to stay with a host family». Las expresiones <i>regarding, with regard to, as for, concerning</i> (en cuanto a) ayudan a organizar las respuestas.</p><p>Si te piden documentos, confírmalo: «<b>As requested</b>, I am attaching a copy of my passport». Si no puedes hacer algo, discúlpate con educación y ofrece una alternativa: «Unfortunately, I am not available on that date. Would it be possible to meet on Friday instead?». Y cierra como siempre: «Please let me know if you need any further information».</p>`, svg: ["Responder a un email formal", [["Agradecer", "Thank you for your email…"], ["Organizar", "Regarding… · As for…"], ["Confirmar", "As requested, I attach…"], ["Alternativa", "Would it be possible to…?"]]] },
    { html: `<h3>Del vocabulario informal al formal</h3><p>Muchas palabras corrientes tienen un <b>equivalente formal</b>, a menudo de origen latino y por eso fácil de recordar para un hispanohablante. Usarlas da a tu email un tono adecuado:</p>${L.tb(["Informal", "Formal"], [["ask for", "request"], ["get", "receive / obtain"], ["help", "assist"], ["buy", "purchase"], ["tell", "inform"], ["need", "require"], ["say sorry", "apologise"], ["give back", "return / refund"], ["start", "commence / begin"], ["about", "regarding / concerning"]])}<p>No se trata de sustituir todas las palabras, sino de evitar las más coloquiales. También hay que eliminar los <b>phrasal verbs</b> muy informales cuando exista una alternativa: <i>find out</i> → <i>discover</i>, <i>put off</i> → <i>postpone</i>, <i>go up</i> → <i>increase</i>. Y algunas expresiones: «a lot of» → «a great deal of / many», «get in touch» → «contact», «ASAP» → «as soon as possible».</p><p>Ojo con los <b>falsos amigos</b>: <i>actually</i> no es «actualmente» (es «en realidad»), <i>assist</i> no es «asistir a un evento» (eso es <i>attend</i>) y <i>sensible</i> significa «sensato».</p>`, svg: ["Equivalencias informal → formal", [["ask for", "request"], ["buy", "purchase"], ["tell", "inform"], ["need", "require"]]] },
  ],
  grupos: [2, 4, 2, 5, 2],
  ejemplos: [
    ["Escribe un asunto para un email en el que pides una carta de recomendación a tu antiguo profesor.", ["Debe ser breve y concreto.", "Indica el motivo principal."], "Asunto: «<b>Request for a reference letter</b>»."],
    ["Suaviza esta queja: «You sent me a broken lamp. Give me my money back.»", ["Pasiva para no acusar: was sent / arrived.", "Unfortunately para el problema.", "Petición con would like."], "<b>Unfortunately</b>, the lamp I ordered <b>arrived</b> broken. I <b>would like to request</b> a full refund."],
    ["Empieza una respuesta formal a un email que te ofrece una plaza en un campamento.", ["Agradece el email.", "Confirma tu interés y responde al primer punto."], "<b>Thank you for your email</b> offering me a place on the summer camp. I am delighted to accept. <b>Regarding</b> the dates, …"],
  ],
  errores: [],
  niveles: "bbmmbbmamm",
  ejercicios: [
    ["b", "Escribe el saludo formal si no sabes el nombre del destinatario.", "Dear Sir or Madam,"],
    ["b", "Completa: «I am writing ___ enquire about the course.»", "I am writing <b>to</b> enquire…"],
    ["b", "Escribe la palabra formal: buy, help, need, tell.", "purchase, assist, require, inform."],
    ["b", "¿Qué despedida va con «Dear Sir or Madam»?", "Yours faithfully,"],
    ["b", "Escribe un asunto para un email pidiendo información sobre un campamento.", "Ejemplo: «Enquiry about summer camp»."],
    ["b", "Corrige el formato: «dear mr brown i am writing…»", "Dear Mr Brown, (salto de línea) I am writing…"],
    ["b", "Completa: «Thank you ___ advance for your help.»", "Thank you <b>in</b> advance."],
    ["b", "Escribe una frase para decir que adjuntas tu CV.", "Please find attached my CV. / I am attaching my CV."],
    ["m", "Haz indirecta: «How much does the course cost?»", "Could you tell me <b>how much the course costs</b>?"],
    ["m", "Haz indirecta: «Is breakfast included?»", "I would like to know <b>whether / if breakfast is included</b>."],
    ["m", "Suaviza: «Your waiter was rude.»", "I'm afraid the waiter was rather impolite. / Unfortunately, we were not treated very politely."],
    ["m", "Completa con regarding o as requested: «___, I am sending you a copy of my passport.»", "<b>As requested</b>, I am sending…"],
    ["m", "Escribe una frase para proponer otra fecha con educación.", "Would it be possible to meet on Friday instead?"],
    ["m", "Sustituye los phrasal verbs: «I want to find out if you can put off the meeting.»", "I would like to <b>know</b> whether you could <b>postpone</b> the meeting."],
    ["m", "Elige el asunto mejor: «Hello» / «Complaint: order no. 3341» / «PROBLEM!!!»", "«Complaint: order no. 3341»: concreto y profesional."],
    ["m", "Corrige: «I am writing for complain about my order.»", "I am writing <b>to complain</b> about my order."],
    ["m", "Escribe el primer párrafo de una respuesta a una oferta de prácticas.", "Ejemplo: «Thank you for your email of 10th May offering me a work experience placement. I am very pleased to accept.»"],
    ["a", "Escribe un email de petición de información (100 palabras) a una escuela de surf en Irlanda.", "Modelo: «Dear Sir or Madam, I am writing to enquire about the surf courses advertised on your website. I am a 16-year-old student from Spain. Firstly, I would like to know how much a one-week course costs. In addition, could you tell me whether equipment is included? I was also wondering if you offer accommodation. Thank you in advance for your help. I look forward to hearing from you. Yours faithfully, Pablo García»"],
    ["a", "Reescribe en registro formal: «Hi! I bought some trainers from you but they're too small. Can I get my money back ASAP? Thanks!»", "Dear Sir or Madam, I recently purchased a pair of trainers from your online shop. Unfortunately, they are too small. I would be grateful if you could refund the full amount as soon as possible. Yours faithfully, …"],
    ["a", "Escribe el párrafo central de una reclamación por un hotel: habitación sucia, sin wifi, ruido.", "Modelo: «Firstly, the room was not clean when we arrived. Secondly, the wifi did not work during our entire stay, despite the fact that it was advertised on your website. Finally, the noise from the bar made it impossible to sleep.»"],
    ["a", "Explica por qué este email no funciona y corrígelo: «Dear Sir, Hi! I need info about the course. Love, Ana»", "Mezcla registros (Dear Sir con Hi y Love). Correcto: «Dear Sir or Madam, I am writing to request information about the course… Yours faithfully, Ana Ruiz»."],
    ["a", "Escribe tres preguntas indirectas variadas para pedir información sobre un voluntariado.", "«I would like to know what the volunteers' duties are.» «Could you tell me whether accommodation is provided?» «I was also wondering if previous experience is necessary.»"],
    ["a", "Escribe un email semiformal (60 palabras) a tu profesora pidiendo un plazo más para un trabajo.", "Modelo: «Dear Ms Ruiz, I am writing to ask whether it would be possible to have a few more days to finish my project. Unfortunately, I have been ill this week. Would it be possible to hand it in on Monday? Thank you for your understanding. Kind regards, Leo»"],
    ["a", "Señala dos falsos amigos en esta frase y corrígela: «Actually I am assisting to a course and my teacher is very sensible.»", "Actually ≠ actualmente → <b>Currently</b> I am <b>attending</b> a course; sensible ≠ sensible → my teacher is very <b>sensitive</b> (si quieres decir sensible)."],
    ["a", "Escribe la respuesta formal a: «Could you confirm your arrival date and send a copy of your ID?»", "Ejemplo: «Thank you for your email. Regarding my arrival, I will arrive on 2nd July. As requested, I am attaching a copy of my ID. Please let me know if you need any further information. Yours sincerely, …»"],
    ["a", "Escribe una carta de solicitud breve (90 palabras) para un puesto de monitor en un campamento de verano.", "Respuesta abierta: motivo (apply for the position of…), experiencia y cualidades (I have experience working with children…, I am patient and responsible), disponibilidad, cierre (I look forward to hearing from you) y Yours faithfully / sincerely según el saludo."],
  ],
  cuartas: ["Cheers", "Gimme the info.", "LOL", "Envíame tu CV", "to say hi to", "Cheers", "Tell me when it opens now!", "to hear", "XOXO", "irónico", "Love", "to hear", "Send it, OK?"],
  quiz: [
    ["El asunto de un email formal debe ser…", ["breve y concreto", "muy largo", "en mayúsculas", "vacío"], 0, "Tres a ocho palabras que resuman el motivo."],
    ["La palabra formal para «buy» es…", ["purchase", "get", "take", "grab"], 0, "Purchase = comprar (formal)."],
    ["«___, the product arrived damaged.»", ["Unfortunately", "Luckily", "Hopefully", "Actually"], 0, "Para señalar un problema."],
    ["«I was ___ if you could help me.»", ["wondering", "wonder", "wondered", "wonders"], 0, "I was wondering if… (petición educada)."],
    ["«___ the dates, I would prefer July.»", ["Regarding", "Regard", "Regards", "Regarded"], 0, "Regarding = en cuanto a."],
    ["«As ___, I attach my passport.»", ["requested", "request", "requesting", "requests"], 0, "As requested = como me pidió."],
    ["La forma formal de «find out» es…", ["discover", "find", "look", "get out"], 0, "Discover / learn."],
    ["Tras el saludo «Dear Ms Smith» se pone…", ["una coma", "un punto", "dos puntos y guion", "nada"], 0, "En inglés, coma."],
    ["«Assist» significa…", ["ayudar", "asistir a un evento", "insistir", "estar presente"], 0, "Asistir a un evento es attend."],
    ["¿Qué email tiene el tono correcto para reclamar?", ["Your shop is the worst!", "I would like to request a refund.", "Give me my money NOW!!!", "LOL, the lamp broke."], 1, "Firme pero educado."],
  ],
  examen: [
    ["«Dear Sir or Madam» → despedida:", ["Yours faithfully", "Yours sincerely", "Love", "Best wishes, mate"], 0, "Sin nombre: faithfully."],
    ["«Could you tell me where ___?»", ["the office is", "is the office", "does the office", "the office does"], 0, "Pregunta indirecta: sujeto + verbo."],
    ["La forma formal de «need» es…", ["require", "want", "have", "lack"], 0, "Require = necesitar (formal)."],
    ["«I am writing to ___ about the course.»", ["enquire", "complain for", "asking", "know"], 0, "Enquire about = pedir información."],
    ["«Thank you for your ___ reply.»", ["prompt", "quickly", "fastly", "soon"], 0, "Prompt = rápido."],
  ],
  tarjetas: [
    ["Subject line", "Asunto breve y concreto: «Enquiry about summer courses»."],
    ["Unfortunately / I'm afraid", "Para dar malas noticias o señalar un problema con educación."],
    ["Regarding / As for", "En cuanto a: para organizar respuestas."],
    ["Falsos amigos", "actually = en realidad; assist = ayudar; attend = asistir."],
  ],
  glosario: [
    ["formal email", "Email a una persona o institución que no conoces, con registro formal."],
    ["register", "Grado de formalidad del lenguaje."],
    ["subject line", "Asunto del email."],
    ["enquiry", "Petición de información."],
    ["complaint", "Reclamación o queja."],
    ["application", "Solicitud de un puesto, una plaza o una beca."],
    ["Yours faithfully", "Despedida cuando no sabes el nombre del destinatario."],
    ["Yours sincerely", "Despedida cuando sabes el nombre."],
    ["Kind regards", "Despedida semiformal."],
    ["indirect question", "Pregunta educada: «Could you tell me where…?»."],
    ["refund", "Devolución del dinero."],
    ["attachment", "Archivo adjunto."],
    ["regarding", "En cuanto a, en relación con."],
    ["false friend", "Palabra que se parece a otra en español pero significa algo distinto."],
    ["prompt", "Rápido, sin demora."],
  ],
  situacion: {
    titulo: "Un verano en el extranjero: emails reales",
    reto: "Quieres pasar dos semanas del verano en un país de habla inglesa haciendo un curso, un voluntariado o un campamento. Tienes que buscar una opción real y escribir los emails necesarios para informarte y solicitar plaza.",
    pasos: ["Busca en internet un programa real (curso, voluntariado o campamento) en un país de habla inglesa.", "Escribe un email de petición de información con tres preguntas indirectas.", "Imagina la respuesta (te la escribe un compañero) y contéstala de manera formal, punto por punto.", "Escribe una carta de solicitud breve destacando tus cualidades y tu experiencia.", "Revisa los tres emails con la checklist (registro, fórmulas, formato, falsos amigos).", "Entrega los emails en un documento con el asunto de cada uno."],
    producto: "Tres emails formales: petición de información, respuesta y solicitud.",
    evaluacion: ["Adecúa el registro al destinatario y al propósito.", "Usa las fórmulas de saludo, apertura, cierre y despedida correctas.", "Formula peticiones y preguntas indirectas con cortesía.", "Organiza el contenido en párrafos claros con el formato adecuado."],
  },
  saberes: "Decret 175/2022 de Catalunya (Llengua estrangera, 4t d'ESO): producció de textos formals; adequació al registre i al destinatari.",
  minutos: 100,
});
