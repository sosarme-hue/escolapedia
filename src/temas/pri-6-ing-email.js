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

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Know when to use short forms and emojis", "Write messages for special occasions", "Learn about letters and postcards before email", "Write thank-you emails and messages to a pen pal"],
  lectura: { titulo: "Christmas on the beach", html: `<p><b>From:</b> Mia<br><b>To:</b> Pablo<br><b>Subject:</b> Christmas on the beach!</p><p>Hi Pablo,</p><p>Thanks for your email and the photos of the snow in the mountains near Madrid. It looks so cold! You won't believe it, but here in Perth it's really hot. In Australia, Christmas is in <b>summer</b>, because we are in the southern hemisphere. Yesterday it was 38 degrees!</p><p>On Christmas Day, we had a barbecue in the garden with my grandparents, my aunts and my cousins. We ate prawns, salads and a dessert called pavlova, which is made with meringue, cream and fruit. In the afternoon, we went to the beach and played cricket on the sand. Some people even wear Santa hats when they go surfing!</p><p>How do you celebrate Christmas in Spain? Is it true that you get presents from the Three Kings on 6th January? That sounds amazing. I'd love to try the roscón you told me about.</p><p>Write back soon and tell me everything!</p><p>Best wishes,<br>Mia 🦘</p><p>PS: Here's a photo of me and my dog Bluey on the beach.</p>` },
  tras: {
    "Greetings and closings": [
      ["Short forms and emojis", `<p>In messages to friends, people often use <b>short forms</b> (abreviaturas) and <b>emojis</b>. Here are some common ones in English:</p><ul><li><b>BTW</b> = by the way (por cierto)</li><li><b>LOL</b> = laughing out loud (me parto de risa)</li><li><b>ASAP</b> = as soon as possible (lo antes posible)</li><li><b>BRB</b> = be right back (ahora vuelvo)</li><li><b>IDK</b> = I don't know (no sé)</li><li><b>TBH</b> = to be honest (la verdad)</li><li><b>Thx</b> = thanks · <b>pls</b> = please · <b>u</b> = you · <b>gr8</b> = great · <b>CU</b> = see you</li></ul><p>Emojis can show feelings and make a message friendlier: 😊 👍 🎉 ❤️ 😂. But be careful:</p><ul><li>Use short forms and emojis <b>only</b> with friends and family, in informal messages.</li><li><b>Never</b> use them in formal emails, for example to a teacher, a company or a museum.</li><li>Don't use too many: your message should still be easy to read.</li><li>Emojis can be misunderstood. A message that seems funny to you might seem rude to someone else.</li></ul><p>In your English exams, always write the full words: <i>you</i>, not <i>u</i>; <i>great</i>, not <i>gr8</i>.</p>`,
        L6.filas("Short forms", [["BTW", "by the way", cAZ], ["ASAP", "as soon as possible", cRO], ["IDK", "I don't know", cVE], ["CU", "see you", cNA]])],
    ],
    "Paragraphs": [
      ["Messages for special occasions", `<p>Emails and cards are perfect for special moments. Here are some useful phrases:</p><ul><li><b>Birthdays</b>: «Happy birthday! Have a fantastic day!» «Many happy returns!» «I hope all your wishes come true.»</li><li><b>Congratulations</b> (for winning, passing an exam, a new baby…): «Congratulations! Well done!» «I'm so proud of you!» «You deserve it!»</li><li><b>Get well soon</b> (when someone is ill): «I'm sorry to hear you're ill.» «Get well soon!» «I hope you feel better soon.»</li><li><b>Saying sorry</b>: «I'm really sorry about…» «I didn't mean to…» «It won't happen again.»</li><li><b>Good luck</b>: «Good luck in your exam!» «Fingers crossed!» «You can do it!»</li><li><b>Holidays</b>: «Merry Christmas and a Happy New Year!» «Happy holidays!» «Have a great summer!»</li></ul><p>Notice: in English we say «<b>Happy</b> birthday» and «<b>Merry</b> Christmas», but «<b>Happy</b> New Year» and «<b>Happy</b> Easter».</p><p>A short, personal message is always better than a long, general one. Add something special: a memory, a joke or a plan for when you see each other.</p>`,
        H6.dos("Special messages", ["Happy", ["Happy birthday!", "Congratulations!", "Merry Christmas!"], cVE], ["Support", ["Get well soon!", "Good luck!", "I'm sorry…"], cAZ])],
    ],
    "Check before you send": [
      ["Before email: letters and postcards", `<p>Before email and mobile phones, people communicated by <b>letter</b>. They wrote by hand, put the letter in an <b>envelope</b>, wrote the <b>address</b> and put a <b>stamp</b> on it. Then the post took days or even weeks to arrive!</p><ul><li>The world's first postage stamp, the <b>Penny Black</b>, appeared in the United Kingdom in <b>1840</b>. It had a picture of Queen Victoria.</li><li><b>Postcards</b> became very popular in the 20th century. People sent them from holidays with a photo on the front and a short message on the back: «Having a great time! Wish you were here!»</li><li>The first <b>email</b> was sent in <b>1971</b> by an American engineer called <b>Ray Tomlinson</b>. He chose the symbol <b>@</b> (at) to separate the name of the person from the name of the computer. We still use it today!</li></ul><p>Today, email is instant and free, but a handwritten letter or postcard is still special. Many people keep letters from family and friends for their whole lives. Why don't you send a real postcard to someone you love? They will be really happy to find it in their letterbox.</p>`,
        L6.filas("From letters to emails", [["1840", "first stamp", cRO], ["1900s", "postcards", cNA], ["1971", "first email, @", cAZ], ["today", "instant messages", cVE]]), ["XhXk3wzemR4", "Raymond Tomlinson - the inventor of email", "technogeiser", 81715]],
    ],
  },
  final: [
    ["Saying thank you", `<p>A <b>thank-you email</b> is short, but it makes people very happy. It's polite to send one after someone gives you a present, invites you to their house or helps you.</p><p>A good thank-you email has four parts:</p><ul><li><b>Greeting</b>: «Dear Aunt Lucy,» or «Hi Tom,»</li><li><b>Thank them for something specific</b>: «Thank you so much for the book you gave me for my birthday.» Saying exactly what you are thanking them for is more personal than just «Thanks for the present».</li><li><b>Say why you like it or how you used it</b>: «I've already read three chapters. It's really exciting, and I love the main character!»</li><li><b>Close warmly</b>: «I hope to see you soon. Thanks again! Love, Ana» or «Best wishes, Ana».</li></ul><p>Useful phrases: <i>Thank you so much for…</i>, <i>It was really kind of you to…</i>, <i>I really appreciate…</i>, <i>It's exactly what I wanted!</i>, <i>I had a great time at…</i></p><p>For a teacher or an adult you don't know well, use a more formal style: «Dear Mrs Smith, Thank you very much for organising the trip. We all learned a lot. Kind regards, Class 6B.»</p>`,
      H6.flujo("Thank-you email", ["greeting|Dear…", "thank you|for the book", "why|I love it", "close|Love, Ana"], cVE)],
    ["Pen pals", `<p>A <b>pen pal</b> (or <b>pen friend</b>) is a friend in another country that you write to regularly. Many schools have exchanges with schools in other countries, for example through the European programme <b>eTwinning</b>. It's a great way to practise English and learn about other cultures.</p><p>In your first message, introduce yourself:</p><ul><li>Your name, age and where you live: «My name's Pablo. I'm eleven and I live in Toledo, a historic city in the centre of Spain.»</li><li>Your family and pets.</li><li>Your school and favourite subjects.</li><li>Your hobbies and likes.</li><li>Something special about your town or country: a festival, a typical dish, a famous place.</li></ul><p>Then ask questions to start a conversation: «What's your school like? What do you do at weekends? What's the weather like in your town now? Do you have any pets?»</p><p>Remember the safety rules: write only through your school or with your parents' permission, never share your address, passwords or private photos, and tell an adult if anything makes you feel uncomfortable.</p>`,
      L6.filas("First message", [["about me", "name, age, town", cAZ], ["my life", "family, school, hobbies", cVE], ["my country", "a festival, a dish", cNA], ["questions", "What about you?", cMO]]), ["ctCaLQDWs1Q", "How to Write a Friendly Letter", "USPS", 436220]],
  ],
  ejemplos: [
    ["Rewrite for a teacher: «Hi! IDK the homework 4 tmrw, pls tell me ASAP 😅»", ["Formal greeting and full words.", "No short forms or emojis."], "Dear Mr Brown, I'm sorry, but I don't know what the homework for tomorrow is. Could you tell me, please? Thank you. Best regards, Pablo."],
    ["Make it more specific: «Thanks for the present.»", ["Say exactly what the present was.", "Add why you like it."], "Thank you so much for the football. I played with it all weekend!"],
  ],
  errores: ["Usar abreviaturas o emojis en un correo formal o en un examen.", "Dar las gracias de forma general («Thanks for the present») en lugar de decir qué te gustó."],
  ejercicios: [
    ["b", "What does BTW mean?", "By the way."],
    ["b", "Complete: «Get ___ soon!»", "well."],
    ["b", "When was the first email sent?", "In 1971."],
    ["b", "What season is Christmas in Australia?", "Summer."],
    ["b", "What is a pen pal?", "A friend in another country that you write to."],
    ["m", "Write a message to a friend who has broken her leg.", "Open answer. Example: I'm so sorry to hear about your leg. Get well soon!"],
    ["m", "Write the full words: thx, pls, u, gr8.", "thanks, please, you, great."],
    ["m", "Why did Ray Tomlinson use @?", "To separate the person's name from the computer's name."],
    ["m", "Write a short thank-you email to your grandma for a present.", "Open answer."],
    ["m", "Answer Mia's question: How do you celebrate Christmas in Spain?", "Open answer. Example: We have a big dinner on 24th December and the Three Kings bring presents on 6th January."],
    ["a", "Write a congratulations email to a friend who won a competition (60 words).", "Open answer."],
    ["a", "Write your first email to a pen pal (80 words) with three questions.", "Open answer."],
    ["a", "Write a postcard from a holiday: where you are, what you're doing, the weather.", "Open answer."],
    ["a", "Explain when emojis are a good idea and when they are not.", "Good with friends in informal messages; not in formal emails or exams."],
  ],
  quiz: [
    ["ASAP means…", ["as soon as possible", "as simple as possible", "always say a phrase"], "Short forms."],
    ["«I'm sorry to hear you're ill. ___!»", ["Get well soon", "Congratulations", "Happy birthday"], "Special messages."],
    ["The first postage stamp was called…", ["the Penny Black", "the Red Queen", "the Royal Mail"], "History."],
    ["A good thank-you email is…", ["specific and personal", "very long and general", "full of short forms"], "Thank you."],
    ["With a pen pal, you should never share…", ["your address or passwords", "your hobbies", "your favourite food"], "Safety."],
  ],
  examen: [
    ["Mia lives in…", ["Perth, Australia", "Madrid, Spain", "London, UK"], "Reading."],
    ["The @ symbol is read as…", ["at", "and", "about"], "Email."],
  ],
  tarjetas: [
    ["Short forms", "BTW, LOL, ASAP, IDK, CU: only with friends."],
    ["Special occasions", "Happy birthday! Congratulations! Get well soon! Good luck!"],
    ["History", "1840 Penny Black; 1971 first email, Ray Tomlinson, @."],
    ["Thank-you email", "Greeting, thank for something specific, why, close warmly."],
  ],
  glosario: [
    ["Short form", "Abreviatura."],
    ["By the way", "Por cierto."],
    ["Congratulations", "Enhorabuena."],
    ["Get well soon", "Que te mejores."],
    ["Fingers crossed", "Crucemos los dedos."],
    ["Envelope", "Sobre."],
    ["Stamp", "Sello."],
    ["Postcard", "Postal."],
    ["Pen pal", "Amigo por correspondencia."],
    ["Appreciate", "Agradecer, valorar."],
    ["Southern hemisphere", "Hemisferio sur."],
    ["Kind regards", "Saludos cordiales."],
  ],
  situacion: {
    titulo: "Pen pals project",
    reto: "La clase inicia un intercambio de correos en inglés con un colegio de otro país.",
    pasos: ["Con ayuda del profesorado, buscad un colegio socio (por ejemplo, a través de eTwinning).", "Escribid un primer correo de presentación con preguntas.", "Responded a los correos recibidos y enviad mensajes para fechas especiales.", "Al final del trimestre, escribid un correo de agradecimiento y una postal real."],
    producto: "Un intercambio de correos y postales con alumnos de otro país.",
    evaluacion: ["Uses the right style (formal or informal).", "Writes messages for special occasions.", "Asks and answers questions.", "Follows online safety rules."],
  },
});
