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
