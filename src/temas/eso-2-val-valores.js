// Valores Cívicos y Éticos 2º ESO: los valores y las normas. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Valores Cívicos y Éticos",
  curso: C,
  titulo: "Los valores y las normas",
  minutos: 45,
  objetivos: ["Explicar qué son los valores y sus tipos", "Distinguir normas morales, sociales y jurídicas", "Entender por qué son necesarias las normas para convivir", "Reflexionar sobre cuándo una norma es justa"],
  claves: ["valor", "norma", "norma moral", "norma social", "norma jurídica", "justicia", "sanción"],
  pregunta: {
    texto: "Si en tu clase no hubiera ninguna norma (ni turnos, ni horarios, ni respeto), ¿seríais más libres?",
    respuesta: "Al principio puede parecerlo, pero pronto mandaría quien gritara más fuerte o fuera más fuerte. Las <b>normas</b> justas protegen a todos y permiten que cada uno ejerza su libertad <mark>sin aplastar la de los demás</mark>. Detrás de cada norma hay un <b>valor</b> que queremos proteger.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un valor?</h3><p>Un <b>valor</b> es una cualidad que consideramos <b>valiosa</b>, que merece la pena y que orienta nuestra forma de actuar. Por ejemplo: la honestidad, la amistad, la justicia, la solidaridad o la libertad.</p><p>Los valores tienen dos características:</p><ul><li><b>Polaridad</b>: a cada valor le corresponde un contravalor (honestidad / mentira, justicia / injusticia, solidaridad / egoísmo).</li><li><b>Jerarquía</b>: unos nos parecen más importantes que otros, y a veces hay que elegir entre ellos.</li></ul>`,
      video: { id: "U2V0qjmWZMQ", titulo: "Los valores: qué son y para qué sirven", canal: "Enseñanza y Herramientas Digitales", vistas: 641978 },
    },
    {
      html: `<h3>Tipos de valores</h3>${tabla(["Tipo", "Ejemplos"], [["Éticos o morales", "justicia, honestidad, respeto, responsabilidad"], ["Sociales", "solidaridad, cooperación, tolerancia, convivencia"], ["Cívicos y políticos", "libertad, igualdad, participación, democracia"], ["Personales", "esfuerzo, constancia, autoestima"], ["Estéticos", "belleza, armonía"], ["Ecológicos", "cuidado del planeta, sostenibilidad"]])}<p>Los valores <b>éticos</b> son los que tienen que ver con cómo debemos tratar a los demás y a nosotros mismos. Algunos, como la dignidad y la justicia, se consideran <mark>universales</mark>: valen para todas las personas y culturas.</p>`,
      svg: svg("Valores y sus contravalores enfrentados como dos polos", `${[["honestidad", "mentira"], ["justicia", "injusticia"], ["solidaridad", "egoísmo"], ["respeto", "desprecio"], ["tolerancia", "intolerancia"]].map(([a, b], i) => { const y = 30 + i * 28; return `${t(70, y + 4, a, { c: "var(--leaf)", s: 12 })}<path d="M114 ${y} H 146" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="3 3"/>${t(190, y + 4, b, { c: "var(--red)", s: 12 })}`; }).join("")}${t(70, 172, "valor", { c: "var(--leaf)", s: 11 })}${t(190, 172, "contravalor", { c: "var(--red)", s: 11 })}`),
    },
    {
      html: `<h3>¿De dónde salen nuestros valores?</h3><p>Los valores no nacen con nosotros: los vamos aprendiendo y eligiendo a lo largo de la vida a partir de:</p><ul><li>La <b>familia</b>: los primeros ejemplos.</li><li>La <b>escuela</b> y el profesorado.</li><li>Los <b>amigos</b> y el grupo de iguales.</li><li>Los <b>medios</b>, las redes sociales y los referentes famosos.</li><li>La <b>propia reflexión</b>: con los años decidimos qué valores queremos hacer nuestros.</li></ul><p>Por eso es importante pensar críticamente: ¿los valores que transmite un influencer son los que yo quiero para mi vida?</p>`,
    },
    {
      html: `<h3>¿Qué es una norma?</h3><p>Una <b>norma</b> es una regla que indica cómo <b>debemos</b> comportarnos en una situación. Las normas sirven para:</p><ul><li>Organizar la vida en común.</li><li>Proteger valores: la norma «no copiar» protege la honestidad y la justicia.</li><li>Evitar conflictos o resolverlos.</li><li>Proteger a los más débiles.</li></ul><p>Toda norma tiene un <b>valor detrás</b>. Si entendemos ese valor, es más fácil cumplir la norma por convicción y no solo por miedo a la sanción.</p>`,
      svg: svg("Normas del instituto y el valor que protege cada una", chips([["Respetar el turno de palabra", "valor: respeto", "var(--pen)"], ["No copiar en los exámenes", "valor: honestidad y justicia", "var(--leaf)"], ["Puntualidad", "valor: responsabilidad", "var(--sun)"], ["No usar el móvil en clase", "valor: atención y convivencia", "var(--red)"]], 8, 36), 180),
    },
    {
      html: `<h3>Tipos de normas</h3>${tabla(["Tipo", "Quién la pone", "Sanción si no se cumple", "Ejemplo"], [["Moral", "la propia conciencia", "remordimiento, culpa", "no mentir a un amigo"], ["Social (de trato)", "la costumbre del grupo", "rechazo, mala imagen", "saludar, dar las gracias"], ["Jurídica (ley)", "el Estado", "multa, castigo legal", "no robar, respetar el semáforo"]])}<p>Las normas <b>jurídicas</b> son obligatorias para todos y las impone el Estado mediante leyes. Las <b>morales</b> dependen de cada persona. Las <b>sociales</b> cambian de una cultura a otra (por ejemplo, saludar con dos besos o con una inclinación).</p>`,
    },
    {
      html: `<h3>Ley y moral no siempre coinciden</h3><p>Muchas normas morales también son leyes (no matar, no robar). Pero hay casos en los que no coinciden:</p><ul><li>Algo puede ser <b>legal pero inmoral</b>: mentir a un amigo no es delito, pero está mal.</li><li>Algo puede haber sido <b>legal pero injusto</b>: la esclavitud o la segregación racial fueron legales en muchos países.</li></ul><p>Personas como <b>Rosa Parks</b> (que en 1955 se negó a ceder su asiento a un blanco en un autobús de Alabama) desobedecieron leyes injustas de forma pacífica. Su gesto ayudó a cambiarlas. Es lo que se llama <mark>desobediencia civil</mark>.</p>`,
      video: { id: "PU_ikRXZlbE", titulo: "El puente: una reflexión de valores", canal: "Elías Melloni", vistas: 471481 },
    },
    {
      html: `<h3>¿Cuándo es justa una norma?</h3><p>Algunos criterios para valorar si una norma es justa:</p><ol><li>¿Respeta la <b>dignidad</b> y los derechos humanos de todas las personas?</li><li>¿Se aplica <b>por igual</b> a todos?</li><li>¿Se ha decidido de forma <b>participativa</b>, escuchando a los afectados?</li><li>¿Tiene una <b>razón</b> que se puede explicar?</li><li>¿Protege a los más vulnerables?</li></ol><p>Si una norma de clase no cumple estos criterios, lo adecuado es proponer cambiarla por los cauces existentes (delegados, junta de clase), no saltársela sin más.</p>`,
    },
    {
      html: `<h3>Las normas de convivencia del centro</h3><p>Todos los institutos tienen un <b>Plan de convivencia</b> y unas <b>normas de organización y funcionamiento</b>. Recogen derechos y deberes del alumnado, por ejemplo:</p>${tabla(["Derechos", "Deberes"], [["recibir una educación de calidad", "estudiar y esforzarse"], ["ser respetado", "respetar a compañeros y profesorado"], ["participar y ser escuchado", "participar en las actividades"], ["ser valorado con objetividad", "cuidar las instalaciones y el material"]])}<p>Derechos y deberes van juntos: mis derechos son los deberes de los demás hacia mí, y al revés.</p>`,
    },
  ],
  figura: {
    titulo: "Los valores y las normas",
    svg: filas("Resumen: qué es un valor, tipos, normas y sus clases, ley y moral, normas justas", [["Valor", "cualidad valiosa que orienta la conducta", "var(--leaf)"], ["Tipos", "éticos · sociales · cívicos · personales", "var(--pen)"], ["Norma", "regla de conducta que protege un valor", "var(--sun)"], ["Clases", "moral · social · jurídica", "var(--inf)"], ["Ley y moral", "no siempre coinciden · Rosa Parks", "var(--red)"], ["Norma justa", "dignidad · igualdad · participación", "var(--ink)"]], 200),
  },
  video: { id: "U2V0qjmWZMQ", titulo: "Los valores: qué son y para qué sirven", canal: "Enseñanza y Herramientas Digitales", vistas: 641978, megusta: 0, busqueda: "qué son los valores" },
  quiz: mezcla([
    { q: "Un valor es…", o: ["una cualidad valiosa que orienta la conducta", "un precio", "una ley"], a: 0, e: "Honestidad, justicia…" },
    { q: "El contravalor de la solidaridad es el…", o: ["egoísmo", "respeto", "esfuerzo"], a: 0, e: "Polaridad." },
    { q: "La libertad y la igualdad son valores…", o: ["cívicos", "estéticos", "ecológicos"], a: 0, e: "De la vida en común." },
    { q: "Toda norma protege un…", o: ["valor", "precio", "capricho"], a: 0, e: "Hay que entenderlo." },
    { q: "La sanción de una norma moral es…", o: ["el remordimiento", "una multa", "la cárcel"], a: 0, e: "Conciencia." },
    { q: "Saludar al entrar es una norma…", o: ["social", "jurídica", "matemática"], a: 0, e: "De trato." },
    { q: "Las normas jurídicas las impone…", o: ["el Estado", "cada persona", "la moda"], a: 0, e: "Leyes." },
    { q: "Mentir a un amigo es…", o: ["legal pero inmoral", "delito", "obligatorio"], a: 0, e: "Ley y moral no coinciden." },
    { q: "Rosa Parks es un ejemplo de…", o: ["desobediencia civil pacífica", "norma social", "egoísmo"], a: 0, e: "Montgomery, 1955." },
    { q: "Una norma justa se aplica…", o: ["por igual a todos", "solo a algunos", "según convenga"], a: 0, e: "Igualdad." },
  ]),
  examen: mezcla([
    { q: "Que unos valores nos parezcan más importantes que otros se llama…", o: ["jerarquía", "polaridad", "sanción"], a: 0, e: "A veces hay que elegir." },
    { q: "La esclavitud fue durante siglos…", o: ["legal pero injusta", "ilegal y justa", "una norma moral"], a: 0, e: "La ley puede ser injusta." },
    { q: "Si una norma de clase te parece injusta, lo adecuado es…", o: ["proponer cambiarla por los cauces existentes", "saltártela", "ignorarla en silencio"], a: 0, e: "Participación." },
  ]),
  feynman: ["Qué es un valor y la polaridad", "Tipos de valores", "Para qué sirven las normas", "Normas morales, sociales y jurídicas", "Cuándo una norma es justa"],
  mapa: mapa("VALORES Y NORMAS", "var(--eso)", [
    ["Valores", "polaridad · jerarquía", "var(--leaf)"],
    ["Normas", "protegen valores", "var(--sun)"],
    ["Tipos", "moral · social · jurídica", "var(--pen)"],
    ["Justicia", "dignidad · igualdad", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Valor", "Cualidad valiosa que orienta cómo actuamos."],
    ["Contravalor", "Lo opuesto a un valor: egoísmo, mentira."],
    ["Norma", "Regla que indica cómo debemos comportarnos."],
    ["Norma moral", "La pone la conciencia; sanción: remordimiento."],
    ["Norma social", "La pone la costumbre; sanción: rechazo."],
    ["Norma jurídica", "La pone el Estado; sanción: multa o pena."],
    ["Desobediencia civil", "Incumplir pacíficamente una ley injusta para cambiarla."],
    ["Norma justa", "Respeta la dignidad y se aplica a todos por igual."],
  ],
  familias: ["Escribid juntos las normas de la casa y el valor que protege cada una.", "Hablad de la historia de Rosa Parks.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Los valores y las normas: tipos de valores; normas morales, sociales y jurídicas; la relación entre legalidad y justicia; normas de convivencia y derechos y deberes del alumnado (RD 217/2022, Educación en Valores Cívicos y Éticos, bloques A y B).",
    ideas: ["Elaborar las normas de aula de forma participativa.", "Clasificar normas de la vida diaria por su tipo.", "Debate: ¿es lícito desobedecer una ley injusta?"],
  },
  fuentes: [RD, { t: "Constitución española (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Clasifica: «no aparcar en doble fila», «ceder el asiento a una persona mayor», «no traicionar a un amigo».", pasos: ["Aparcar: la impone el Estado con multa → jurídica.", "Ceder el asiento: costumbre social → social.", "No traicionar: conciencia → moral."], resultado: "Jurídica, social y moral." },
    { enunciado: "¿Qué valor protege la norma «respetar el turno de palabra»?", pasos: ["Permite que todos hablen.", "Trata a todos con la misma consideración."], resultado: "El respeto y la igualdad." },
    { enunciado: "Una norma dice que solo los chicos pueden usar la pista de fútbol en el recreo. ¿Es justa?", pasos: ["No se aplica por igual a todos.", "Discrimina por sexo.", "No hay razón que la justifique."], resultado: "No es justa: habría que proponer turnos para todos." },
  ],
  errores: [
    "Pensar que valores y normas son lo mismo.",
    "Creer que todo lo legal es moralmente correcto.",
    "Pensar que las normas solo limitan y nunca protegen.",
    "Cumplir las normas solo por miedo a la sanción sin entender el valor.",
    "Creer que si una norma parece injusta se puede incumplir sin más.",
  ],
  ejercicios: [
    { q: "Define valor y pon tres ejemplos.", sol: "Cualidad valiosa que orienta la conducta: honestidad, justicia, solidaridad." },
    { q: "Escribe el contravalor de: respeto, honestidad, tolerancia.", sol: "Desprecio, mentira, intolerancia." },
    { q: "¿De dónde aprendemos los valores?", sol: "Familia, escuela, amigos, medios y propia reflexión." },
    { q: "¿Para qué sirven las normas?", sol: "Organizar la convivencia, proteger valores, evitar conflictos, proteger a los débiles." },
    { q: "Completa la tabla de los tres tipos de normas.", sol: "Moral (conciencia, remordimiento), social (costumbre, rechazo), jurídica (Estado, multa/pena)." },
    { q: "Pon un ejemplo de algo legal pero inmoral.", sol: "Mentir a un amigo, burlarse de alguien." },
    { q: "¿Qué hizo Rosa Parks y por qué es importante?", sol: "Se negó a ceder su asiento en 1955; su desobediencia pacífica ayudó a acabar con la segregación." },
    { q: "Escribe tres criterios para saber si una norma es justa.", sol: "Respeta la dignidad, se aplica a todos por igual, se ha decidido de forma participativa." },
    { q: "Escribe dos derechos y dos deberes del alumnado.", sol: "Derechos: ser respetado, participar. Deberes: estudiar, respetar." },
    { q: "Propón una norma nueva para tu clase y explica qué valor protege.", sol: "Respuesta abierta." },
  ],
};
