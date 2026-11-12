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
