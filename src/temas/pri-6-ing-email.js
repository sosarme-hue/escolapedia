// Inglés 6º de Primaria: reading and writing an email. En inglés con apoyo en castellano. Dibujos propios en SVG.
const { tema, L, svg, tx, AZ, RO, VE, NA, AM } = require("./_pri6d");

// Pantalla de correo con sus partes.
const correo = svg("Partes de un correo: para, asunto, saludo, cuerpo y despedida", `
  <rect x="20" y="14" width="150" height="152" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/>
  <rect x="20" y="14" width="150" height="18" rx="8" fill="${AZ}" fill-opacity=".25"/>
  <path d="M30 44 h 90 M30 60 h 120" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/>
  <path d="M30 80 h 50" stroke="${RO}" stroke-width="6" stroke-linecap="round"/>
  <path d="M30 96 h 126 M30 108 h 120 M30 120 h 110 M30 132 h 124" stroke="var(--muted)" stroke-width="4" stroke-opacity=".6" stroke-linecap="round"/>
  <path d="M30 150 h 44" stroke="${VE}" stroke-width="6" stroke-linecap="round"/>
  ${[["To:", 44, "var(--muted)"], ["Subject:", 60, AZ], ["Hi Tom,", 80, RO], ["body", 114, "var(--ink)"], ["Bye, Ana", 150, VE]].map(([s, y, c]) => `<path d="M${s === "body" ? 160 : 156} ${y} H 178" stroke="var(--muted)" stroke-width="1"/>${tx(182, y + 4, s, { s: 11, a: "start", c })}`).join("")}`);

module.exports = tema({
  materia: "Inglés",
  titulo: "Reading and writing an email",
  objetivos: ["Recognise the parts of an email (partes de un correo)", "Read an email and find key information", "Write an informal email to a friend with greetings, paragraphs and closings", "Use connectors and check your writing"],
  claves: ["email", "To / Subject", "greeting", "Dear… / Hi…", "paragraph", "closing", "Best wishes", "connectors: and, but, because, so", "reply"],
  pregunta: [
    "Si escribes a un amigo de Inglaterra, ¿empezarías con «Dear Sir» o con «Hi Tom»? ¿Y cómo te despedirías?",
    "Con un amigo usamos un <mark>email informal</mark>: «<b>Hi Tom,</b>» o «<b>Dear Tom,</b>» para empezar y «<b>Love,</b>», «<b>Bye for now,</b>» o «<b>Best wishes,</b>» para terminar. «Dear Sir or Madam» se usa en correos <b>formales</b>, por ejemplo para escribir a una empresa.",
  ],
  bloques: [
    ["The parts of an email", `<p>An email has several parts: the address (<b>To:</b>), the <mark>subject</mark> (asunto: what it is about), the <mark>greeting</mark> (saludo), the <b>body</b> (the message, in paragraphs), the <mark>closing</mark> (despedida) and your <b>name</b>.</p><p><b>En castellano:</b> el asunto debe ser corto y claro, por ejemplo «Party on Saturday!» o «Photos from the trip». Así la otra persona sabe de qué trata antes de abrirlo. Después del saludo ponemos una <b>coma</b> y empezamos el texto en la línea de abajo.</p>`,
      correo],
    ["Greetings and closings", `<p>In an <b>informal</b> email (to friends and family) we start with <mark>Hi…,</mark> <mark>Hello…,</mark> or <mark>Dear…,</mark> and we finish with <b>Love,</b> (family and close friends), <b>See you soon,</b> <b>Bye for now,</b> <b>Take care,</b> or <b>Best wishes,</b>.</p><p>In a <b>formal</b> email we start with <b>Dear Mr Smith,</b> / <b>Dear Ms Jones,</b> / <b>Dear Sir or Madam,</b> and finish with <b>Kind regards,</b> or <b>Yours sincerely,</b>. <b>En castellano:</b> es como la diferencia entre «¡Hola, Pablo!» y «Estimado señor:».</p>`,
      L.tabla("Saludos y despedidas: informal y formal", ["", "Informal", "Formal"], [["Start", "Hi Tom,", "Dear Mr Smith,"], ["End", "Love, / Bye!", "Kind regards,"]], AZ)],
    ["Useful phrases", `<p><b>Opening:</b> «How are you?», «Thanks for your email», «It was great to hear from you», «Sorry I didn't write sooner». <b>Giving news:</b> «Guess what!», «I've got some exciting news», «Last weekend I…».</p><p><b>Asking:</b> «What about you?», «Can you come?», «Write back soon!». <b>Ending:</b> «I hope to see you soon», «Say hello to your family», «That's all for now». <b>Consejo:</b> estas frases hechas son como piezas de Lego: con ellas tu correo sonará natural.</p>`,
      L.filas("Frases útiles de un email", [["opening", "Thanks for your email!", AZ], ["news", "Guess what! Last weekend I…", VE], ["asking", "What about you?", NA], ["ending", "Write back soon!", RO]])],
    ["Paragraphs", `<p>Organise the body in <mark>paragraphs</mark> (párrafos), one idea in each. A good plan for a short email: <b>1)</b> greeting and why you are writing; <b>2)</b> your news or the main information; <b>3)</b> questions for your friend; <b>4)</b> closing.</p><p>Leave a <b>blank line</b> between paragraphs. Keep sentences short and clear. <b>En castellano:</b> un correo de una sola parrafada es difícil de leer; separar las ideas ayuda a quien lo recibe.</p>`,
      L.filas("Plan de un email en cuatro partes", [["1", "Hi! Thanks for your email.", AZ], ["2", "My news: we've got a puppy!", VE], ["3", "Questions: How's your school?", NA], ["4", "Write back soon! Love, Eva", RO]], "Plan your email")],
    ["Connectors", `<p><mark>Connectors</mark> join ideas: <b>and</b> (y) adds information, <b>but</b> (pero) shows a contrast, <b>because</b> (porque) gives a reason, <b>so</b> (así que) gives a result, and <b>also</b> (también) adds an idea.</p><p>«I love my new school <b>because</b> the teachers are very nice». «It was raining, <b>so</b> we stayed at home». «The film was long <b>but</b> exciting». Order words: <b>first, then, after that, finally</b>. <b>Consejo:</b> usa al menos tres conectores distintos en cada email.</p>`,
      L.tabla("Conectores: and, but, because, so", ["Connector", "Spanish"], [["and", "y"], ["but", "pero"], ["because", "porque"], ["so", "así que"]], VE)],
    ["Reading: an email from a friend", `<p>Read the email. <b>Subject: My birthday party!</b> «Hi Lucas, How are you? Thanks for the photos of your holiday. They're fantastic! Guess what! It's my birthday next Saturday <b>and</b> I'm having a party at the climbing centre. It starts at five o'clock <b>and</b> finishes at eight. My mum is going to make a big chocolate cake. Can you come? Please tell me <b>because</b> I need to book the places. Write back soon! Love, Mia»</p><p>Answer: Where is the party? What time does it start? Why does Mia need an answer?</p>`,
      L.filas("Datos clave del email de Mia", [["What?", "birthday party", AZ], ["Where?", "at the climbing centre", VE], ["When?", "Saturday, 5 to 8 o'clock", NA], ["Why reply?", "to book the places", RO]])],
    ["Writing a reply", `<p>A <b>reply</b> (respuesta) answers all the questions. Lucas writes: «Hi Mia, Thanks for the invitation! I'd love to come to your party. Climbing is my favourite sport. My dad can take me, <b>so</b> I'll be there at five. Do I need special shoes? See you on Saturday! Lucas».</p><p>If you can't go, say sorry and give a reason: «I'm really sorry, <b>but</b> I can't come <b>because</b> I'm visiting my grandparents». <b>En castellano:</b> responde siempre a la pregunta principal al principio, y luego añade detalles.</p>`,
      L.dialogo("Aceptar o rechazar una invitación", [["", "I'd love to come!", VE], ["", "Do I need special shoes?", AZ], ["", "I'm sorry, but I can't come.", RO], ["", "I'm visiting my grandparents.", NA]]), "in8b"],
    ["Check before you send", `<p>Before clicking <b>Send</b>, use this <mark>checklist</mark>: Is the <b>subject</b> clear? Did I use a <b>greeting</b> and a <b>closing</b>? Are there <b>paragraphs</b>? Did I answer <b>all the questions</b>? Did I use <b>capital letters</b> for names, days and months (Monday, July) and for <b>I</b>? Are the verbs in the right tense?</p><p><b>Safety online:</b> only write to people you know, never share passwords or your address with strangers, and ask an adult if a message seems strange. <b>En castellano:</b> en internet, la prudencia es lo primero.</p>`,
      L.filas("Lista para revisar antes de enviar", [["Subject", "short and clear", AZ], ["Greeting", "Hi… / closing: Love,", VE], ["Capitals", "I, Monday, July, Spain", NA], ["Safety", "no passwords, no address", RO]], "Before you send")],
    ["Let's practise: email exchange", `<p>Write an email to a pen friend (amigo por correspondencia) from another country. Tell them about you, your family, your school and your town. Ask three questions. Swap emails with a partner and write a reply.</p><p>Use this model: «Hi Sam, My name is Pablo and I'm eleven. I live in Teruel, a small city in Spain. I've got one sister. I love football <b>and</b> drawing, <b>but</b> I don't like Maths very much! What about you? What sports do you play? Write back soon! Best wishes, Pablo».</p>`,
      L.filas("Modelo de email a un amigo por correspondencia", [["Hi Sam,", "greeting", AZ], ["My name is…", "about me", VE], ["What about you?", "questions", NA], ["Best wishes,", "closing + name", RO]])],
  ],
  ejemplos: [
    ["Choose a greeting and a closing for an email to your cousin.", ["Es informal: familia.", "Saludo: Hi… o Dear… Despedida: Love,"], "Hi Marta, … Love, Jaime"],
    ["Join with a connector: «I was tired. I went to bed early.»", ["La segunda frase es el resultado.", "Resultado → so."], "I was tired, so I went to bed early."],
    ["Write a good subject for an email about a school trip to the zoo.", ["Corto y claro.", "Dice de qué trata."], "Subject: Our trip to the zoo!"],
  ],
  errores: [
    "Olvidar el asunto o poner uno vago como «Hello».",
    "Escribir todo en un solo párrafo sin separar ideas.",
    "Usar formal e informal a la vez: «Hi Mr Smith… Love,».",
    "No usar mayúsculas en I, nombres, días y meses: «i», «monday».",
    "No responder a todas las preguntas del email recibido.",
  ],
  ejercicios: [
    ["Name four parts of an email.", "Subject, greeting, body, closing (y To / name)."],
    ["Write two informal closings.", "Love, / Best wishes, / See you soon, / Bye for now,"],
    ["Is «Kind regards» formal or informal?", "Formal."],
    ["Complete: «I'm happy ___ it's Friday!»", "because."],
    ["Complete: «I like pizza, ___ I don't like olives.»", "but."],
    ["Correct the capitals: «on monday i'm going to london.»", "On Monday I'm going to London."],
    ["Write an opening sentence to thank a friend for their email.", "Thanks for your email! / It was great to hear from you."],
    ["Write a sentence to say no to an invitation politely.", "I'm really sorry, but I can't come because I've got a match."],
    ["What should you never share in an email to a stranger?", "Passwords, your address, phone number or photos."],
    ["Write a short email (40 words) to invite a friend to the cinema.", "Model answer: Hi Leo, Do you want to come to the cinema on Saturday? There's a new animated film. It starts at six. My mum can pick you up. Write back soon! Bye, Nora"],
  ],
  figura: ["Writing an email", L.pasos("Pasos para escribir un email", [["Subject", ["short and", "clear"], AZ], ["Greeting", ["Hi Tom,", "Dear Tom,"], VE], ["Body", ["paragraphs,", "and, but, so"], NA], ["Closing", ["Love,", "Best wishes,"], RO]])],
  video: "in8v",
  quiz: [
    ["The «subject» of an email is…", ["what it is about", "the greeting", "your name"], "Asunto."],
    ["An informal greeting:", ["Hi Tom,", "Dear Sir,", "Yours sincerely,"], "Para amigos."],
    ["An informal closing:", ["Love,", "Dear,", "To:"], "Despedida familiar."],
    ["A formal closing:", ["Kind regards,", "Bye for now,", "See ya!"], "Formal."],
    ["«because» means…", ["porque", "pero", "así que"], "Da una razón."],
    ["«It was late, ___ we went home.»", ["so", "but", "because"], "Resultado."],
    ["Which needs a capital letter?", ["Tuesday", "school", "dog"], "Días de la semana."],
    ["«Write back soon!» means…", ["¡Contesta pronto!", "¡Escribe más largo!", "¡Vuelve pronto!"], "Pide respuesta."],
    ["One idea per…", ["paragraph", "subject", "closing"], "Párrafo."],
    ["What should you NOT send to a stranger?", ["your password", "a greeting", "a question"], "Seguridad."],
  ],
  examen: [
    ["«Thanks for your email» goes at the…", ["beginning", "end", "subject"], "Frase de apertura."],
    ["«Dear Ms Brown,» is…", ["formal", "informal", "a closing"], "Saludo formal."],
    ["«I like football ___ basketball.»", ["and", "so", "because"], "Añade información."],
    ["A reply must…", ["answer the questions", "be very long", "have no greeting"], "Responde a todo."],
  ],
  feynman: ["Cuáles son las partes de un email", "Diferencia entre email formal e informal", "Para qué sirven los conectores and, but, because y so", "Qué hay que revisar antes de enviar"],
  mapa: ["EMAIL", AZ, [["Parts", "subject · greeting · body · closing", AZ], ["Informal", "Hi Tom, … Love,", VE], ["Connectors", "and · but · because · so", NA], ["Check", "capitals · questions · safety", RO]], 250],
  tarjetas: [
    ["Subject", "Asunto: de qué trata el email."],
    ["Hi… / Dear…", "Saludos de un email informal."],
    ["Love, / Best wishes,", "Despedidas informales."],
    ["Kind regards,", "Despedida formal."],
    ["because", "Porque: da una razón."],
    ["so", "Así que: da un resultado."],
    ["Write back soon!", "¡Contesta pronto!"],
    ["Paragraph", "Párrafo: una idea en cada uno."],
  ],
  familias: ["Escribid juntos un email corto en inglés a un familiar o amigo y revisadlo con la lista del bloque 8.", "Hablad sobre seguridad en internet: qué datos no se comparten nunca."],
  saberes: "Comprensión y producción de textos escritos breves: el correo electrónico informal; conectores; normas de cortesía y seguridad digital (Lengua Extranjera)",
  ideas: ["Intercambio de emails con un colegio de otro país (eTwinning).", "Correo de invitación y respuesta por parejas.", "Corrección entre iguales con la lista de comprobación."],
  fuentes: [["British Council LearnEnglish Teens: an informal email", "https://learnenglishteens.britishcouncil.org/skills/writing/a1-writing/email-friend"], ["Cambridge English: A2 Key for Schools, writing", "https://www.cambridgeenglish.org/exams-and-tests/key-for-schools/"]],
});
