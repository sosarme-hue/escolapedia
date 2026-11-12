// Biología y Geología 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Silueta con las glándulas endocrinas principales.
const GL = [["hipófisis", 60, 30, "var(--pen)"], ["tiroides", 60, 64, "var(--red)"], ["suprarrenales", 50, 120, "var(--sun)"], ["páncreas", 70, 132, "var(--leaf)"], ["ovarios", 48, 170, "#a05ad0"], ["testículos", 72, 196, "var(--inf)"]];
const silueta = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
  <path d="M60 4 Q 84 4 84 30 Q 84 50 70 54 V 62 Q 104 66 108 92 L 112 160 Q 112 176 96 178 L 92 214 H 28 L 24 178 Q 8 176 8 160 L 12 92 Q 16 66 50 62 V 54 Q 36 50 36 30 Q 36 4 60 4 Z" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
  ${GL.map(([, gx, gy, c]) => `<circle cx="${gx}" cy="${gy}" r="6" fill="${c}"/>`).join("")}
</g>`;

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "El sistema endocrino",
  minutos: 45,
  objetivos: ["Explicar qué son las hormonas y cómo actúan sobre sus órganos diana", "Localizar las glándulas endocrinas principales y sus hormonas", "Comprender la regulación de la glucosa y la retroalimentación negativa", "Conocer las enfermedades endocrinas más frecuentes"],
  claves: ["hormona", "glándula endocrina", "órgano diana", "hipófisis", "insulina", "glucagón", "retroalimentación", "diabetes"],
  pregunta: {
    texto: "Un susto te acelera el corazón en un segundo y te deja temblando durante varios minutos. ¿Por qué dura tanto si el peligro ya pasó?",
    respuesta: "El aviso rápido lo da el <b>sistema nervioso</b>, pero también se libera <mark>adrenalina</mark>, una hormona que viaja por la sangre. Las hormonas tardan más en actuar y en desaparecer que los impulsos nerviosos: su efecto es <b>más lento pero más duradero</b>.",
  },
  bloques: [
    {
      html: `<h3>Una coordinación química</h3><p>El cuerpo tiene dos sistemas de coordinación que trabajan juntos. El <b>nervioso</b> usa impulsos eléctricos que viajan por los nervios. El <mark>sistema endocrino</mark> usa mensajeros químicos, las <b>hormonas</b>, que viajan por la sangre. Están conectados: el hipotálamo, una zona del encéfalo, controla buena parte de las glándulas endocrinas.</p>${tabla(["", "Sistema nervioso", "Sistema endocrino"], [["Mensajero", "impulso nervioso", "hormona"], ["Vía", "nervios", "sangre"], ["Velocidad", "muy rápida (milisegundos)", "lenta (minutos u horas)"], ["Duración", "breve", "prolongada"], ["Ejemplo", "apartar la mano del fuego", "crecer, madurar en la pubertad"]])}`,
    },
    {
      html: `<h3>¿Qué son las hormonas?</h3><p>Las <b>hormonas</b> son sustancias químicas que fabrican las <b>glándulas endocrinas</b> y que vierten directamente a la sangre. Llegan a todo el cuerpo, pero solo actúan sobre los <mark>órganos diana</mark>, cuyas células tienen el <b>receptor</b> adecuado, como una llave que solo abre su cerradura. Se necesitan en cantidades minúsculas. Las glándulas endocrinas son distintas de las <b>exocrinas</b>, como las salivales o las sudoríparas, que vierten su producto por un conducto al exterior o a una cavidad del cuerpo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una glándula vierte hormonas a la sangre; solo la célula diana con el receptor adecuado responde">${BG}
        <circle cx="40" cy="60" r="24" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/>${t(40, 100, "glándula", { size: 11, color: "var(--pen)" })}
        <path d="M14 130 H 246" stroke="var(--red)" stroke-width="16" stroke-opacity=".25"/>${t(130, 158, "sangre", { size: 10, color: "var(--red)" })}
        ${fl(56, 78, 80, 124, "var(--pen)")}${[[100, 130], [130, 126], [160, 132]].map(([x, y]) => `<path d="M${x - 5} ${y + 4} L ${x} ${y - 5} L ${x + 5} ${y + 4} Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1"/>`).join("")}
        <rect x="150" y="30" width="44" height="40" rx="8" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/><path d="M164 70 L 172 80 L 180 70" fill="var(--leaf)"/>
        <rect x="204" y="30" width="44" height="40" rx="8" fill="var(--muted)" fill-opacity=".15" stroke="var(--muted)" stroke-width="2"/><rect x="218" y="70" width="16" height="8" fill="var(--muted)"/>
        ${t(172, 22, "diana ✓", { size: 10, color: "var(--leaf)" })}${t(226, 22, "no diana", { size: 10, color: "var(--muted)" })}${fl(172, 116, 172, 88, "var(--leaf)")}</svg>`,
    },
    {
      html: `<h3>Las glándulas endocrinas</h3><p>Las glándulas endocrinas están repartidas por todo el cuerpo. En la cabeza están el <b>hipotálamo</b> y la <b>hipófisis</b>; en el cuello, el <b>tiroides</b>; sobre los riñones, las <b>glándulas suprarrenales</b>; en el abdomen, el <b>páncreas</b>, que es a la vez exocrino (jugo pancreático) y endocrino (insulina y glucagón); y en el aparato reproductor, las <b>gónadas</b>: los <mark>ovarios</mark> en las mujeres y los <mark>testículos</mark> en los hombres. Algunos órganos que no son glándulas, como el estómago o el corazón, también fabrican hormonas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Silueta humana con la hipófisis, el tiroides, las suprarrenales, el páncreas, los ovarios y los testículos">${BG}
        ${silueta(20, 6, 0.74)}
        ${GL.map(([n, gx, gy, c], i) => { const x = 20 + gx * 0.74, y = 6 + gy * 0.74, ty = 22 + i * 28; return `<path d="M${x + 6} ${y} L 146 ${ty - 4}" stroke="var(--muted)" stroke-width="1"/>${t(150, ty, n, { size: 11, anchor: "start", color: c })}`; }).join("")}</svg>`,
      video: { id: "6a6VCBZKZyY", titulo: "SISTEMA ENDOCRINO en 12 Minutos. ¡Fácil y Sencillo!", canal: "Anatomía Fácil por Juan José Sánchez", vistas: 807277 },
    },
    {
      html: `<h3>El hipotálamo y la hipófisis</h3><p>El <b>hipotálamo</b> es una pequeña zona del encéfalo que hace de puente entre el sistema nervioso y el endocrino. Recibe información del cuerpo y envía órdenes a la <mark>hipófisis</mark>, una glándula del tamaño de un garbanzo colgada debajo del encéfalo. A la hipófisis se la llama la <b>glándula maestra</b>, porque sus hormonas controlan a otras glándulas: el tiroides, las suprarrenales y las gónadas. Además produce la <b>hormona del crecimiento</b>, que hace crecer los huesos y los músculos, sobre todo durante la infancia y la adolescencia, y la hormona antidiurética.</p>`,
    },
    {
      html: `<h3>El tiroides y las suprarrenales</h3><p>El <b>tiroides</b>, con forma de mariposa delante de la tráquea, produce la <mark>tiroxina</mark>, que regula el metabolismo: la velocidad a la que las células gastan energía. Para fabricarla necesita <b>yodo</b>, que tomamos con el pescado y la sal yodada. Las <b>glándulas suprarrenales</b>, encima de cada riñón, producen el <mark>cortisol</mark>, relacionado con el estrés prolongado, y la <b>adrenalina</b>, la hormona de la «lucha o huida»: en una situación de peligro acelera el corazón y la respiración, dilata las pupilas y sube la glucosa en sangre para tener energía inmediata.</p>`,
    },
    {
      html: `<h3>El páncreas y el azúcar de la sangre</h3><p>La cantidad de glucosa en la sangre, la <b>glucemia</b>, debe mantenerse cerca de 1 gramo por litro. De eso se encarga el páncreas con dos hormonas opuestas. Después de comer, la glucosa sube y el páncreas libera <mark>insulina</mark>: las células captan glucosa y el hígado la guarda como glucógeno, así que la glucemia baja. Si llevamos horas sin comer, la glucosa baja y el páncreas libera <mark>glucagón</mark>: el hígado rompe el glucógeno y suelta glucosa a la sangre, que vuelve a subir. Es un equilibrio constante.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Regulación de la glucosa: si sube, el páncreas libera insulina y baja; si baja, libera glucagón y sube">${BG}
        <path d="M14 90 H 246" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="6 4"/>${t(246, 84, "normal", { size: 10, anchor: "end", color: "var(--leaf)" })}
        <path d="M20 90 Q 50 90 64 40 Q 76 20 100 60 Q 116 90 130 90 Q 150 90 164 140 Q 176 160 196 120 Q 210 90 240 90" stroke="var(--red)" stroke-width="3" fill="none"/>
        ${caja(52, 4, 70, 22, "comer ↑", "var(--red)", { size: 10 })}${caja(150, 154, 74, 22, "ayuno ↓", "var(--pen)", { size: 10 })}
        ${t(96, 46, "insulina", { size: 11, anchor: "start", color: "var(--leaf)" })}${fl(96, 52, 106, 72, "var(--leaf)")}
        ${t(200, 146, "glucagón", { size: 11, anchor: "start", color: "#b8860b" })}${fl(170, 150, 188, 128, "#b8860b")}
        ${t(20, 170, "glucemia", { size: 10, anchor: "start", color: "var(--muted)" })}</svg>`,
      video: { id: "Ibu55Y45iKU", titulo: "Insulina y Glucagón (Canción)", canal: "CasiCreativo", vistas: 2878881 },
    },
    {
      html: `<h3>Las gónadas y la pubertad</h3><p>Hacia los 10 a 14 años, el hipotálamo y la hipófisis «despiertan» a las <b>gónadas</b>, que empiezan a producir <b>hormonas sexuales</b>: es la <mark>pubertad</mark>. Los <b>ovarios</b> fabrican <b>estrógenos</b> y <b>progesterona</b>, que desarrollan los pechos, ensanchan las caderas y regulan el ciclo menstrual. Los <b>testículos</b> producen <b>testosterona</b>, que agrava la voz, hace crecer el vello facial y la masa muscular. En ambos sexos aparece vello en las axilas y el pubis, se produce un estirón y la piel se vuelve más grasa, con acné. Cada persona tiene su propio ritmo, y es normal.</p>`,
    },
    {
      html: `<h3>La retroalimentación negativa</h3><p>¿Cómo sabe una glándula cuándo parar? Funciona como el <b>termostato</b> de una calefacción: si la temperatura baja, se enciende; cuando llega a la deseada, se apaga. En el cuerpo, cuando el nivel de una hormona sube lo suficiente, esa misma hormona <mark>frena</mark> a la glándula que la produce. Por ejemplo, si hay mucha tiroxina en la sangre, el hipotálamo y la hipófisis reducen sus órdenes al tiroides, y este fabrica menos. Este mecanismo se llama <b>retroalimentación negativa</b> y mantiene el equilibrio interno u <b>homeostasis</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo de retroalimentación: hipófisis estimula al tiroides, el tiroides produce tiroxina y la tiroxina frena a la hipófisis">${BG}
        ${caja(80, 14, 100, 34, "hipófisis", "var(--pen)", { size: 12 })}${caja(80, 128, 100, 34, "tiroides", "var(--red)", { size: 12 })}
        ${fl(110, 50, 110, 124, "var(--leaf)")}${t(104, 92, "estimula", { size: 10, anchor: "end", color: "var(--leaf)" })}
        <path d="M184 145 Q 236 145 236 90 Q 236 31 186 31" stroke="var(--red)" stroke-width="2.5" fill="none"/><path d="M194 25 L 186 31 L 194 37" stroke="var(--red)" stroke-width="2.5" fill="none"/>
        ${t(232, 104, "tiroxina", { size: 10, anchor: "end", color: "var(--red)" })}
        <circle cx="236" cy="66" r="9" fill="var(--paper)" stroke="var(--red)" stroke-width="2.5"/><path d="M231 66 H 241" stroke="var(--red)" stroke-width="3"/>${t(214, 70, "frena", { size: 11, anchor: "end", color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>Enfermedades endocrinas</h3><p>La más frecuente es la <mark>diabetes</mark>. En la de <b>tipo 1</b>, que suele empezar en la infancia, el sistema inmunitario destruye las células del páncreas que fabrican insulina; se trata con inyecciones de insulina de por vida. En la de <b>tipo 2</b>, más común en adultos, las células dejan de responder bien a la insulina; está muy relacionada con la obesidad y el sedentarismo, y se previene con dieta y ejercicio. Otras alteraciones son el <b>hipotiroidismo</b>, que produce cansancio, y el <b>bocio</b>, un aumento del tiroides por falta de yodo. Tomar hormonas para mejorar el rendimiento deportivo es dopaje y daña la salud.</p>`,
    },
  ],
  figura: {
    titulo: "Glándulas y hormonas",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Tabla visual de glándulas, sus hormonas y su efecto principal">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${silueta(26, 30, 1.15)}
      ${[["Hipófisis", "crecimiento · controla otras glándulas", "var(--pen)"], ["Tiroides", "tiroxina: metabolismo", "var(--red)"], ["Suprarrenales", "adrenalina: lucha o huida", "var(--sun)"], ["Páncreas", "insulina ↓ y glucagón ↑ glucosa", "var(--leaf)"], ["Gónadas", "estrógenos · progesterona · testosterona", "#a05ad0"]].map(([n, d, c], i) => { const y = 26 + i * 52; return `<rect x="190" y="${y}" width="430" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${t(206, y + 28, n, { size: 16, anchor: "start", color: c, font: D })}${t(340, y + 28, d, { size: 13, anchor: "start", weight: 400 })}`; }).join("")}
    </svg>`,
  },
  video: { id: "2vHIMtKFuGk", titulo: "SISTEMA ENDOCRINO EXPLICADO FÁCIL: GLÁNDULAS Y HORMONAS", canal: "BIOTUBE Ciencia Animada", vistas: 1908416, megusta: 0, busqueda: "sistema endocrino hormonas" },
  ejemplos: [
    { enunciado: "Indica si cada situación la controla sobre todo el sistema nervioso o el endocrino: a) parpadear ante un golpe; b) crecer 10 cm en un año; c) bajar la glucosa tras comer.",
      pasos: ["a) Respuesta instantánea y breve: sistema nervioso (reflejo).", "b) Proceso lento y prolongado: hormona del crecimiento, sistema endocrino.", "c) Regulación química por la sangre: insulina, sistema endocrino."],
      resultado: "a) nervioso; b) endocrino; c) endocrino." },
    { enunciado: "Una persona con diabetes tipo 1 se olvida de inyectarse la insulina antes de comer. ¿Qué le pasará a su glucemia y por qué?",
      pasos: ["Al comer, entra mucha glucosa en la sangre.", "Su páncreas no fabrica insulina, y no se la ha inyectado.", "Las células no pueden captar la glucosa y el hígado no la guarda."],
      resultado: "la glucemia subirá mucho (hiperglucemia)." },
    { enunciado: "En una zona de interior con poca sal yodada, muchas personas tenían el cuello abultado. Explica la causa.",
      pasos: ["El tiroides necesita yodo para fabricar tiroxina.", "Sin yodo, hay poca tiroxina en la sangre y la retroalimentación no frena a la hipófisis.", "La hipófisis estimula cada vez más al tiroides, que crece intentando producir más."],
      resultado: "es bocio por falta de yodo; se previene con sal yodada y pescado." },
  ],
  errores: [
    "Pensar que las hormonas actúan sobre todas las células: solo sobre las que tienen el receptor.",
    "Confundir glándulas endocrinas (a la sangre) con exocrinas (por un conducto).",
    "Creer que la insulina sube el azúcar: lo baja. El que lo sube es el glucagón.",
    "Decir que la diabetes tipo 2 se debe a que el páncreas no tiene insulina: el problema es que las células responden mal.",
    "Olvidar que el sistema nervioso y el endocrino están conectados por el hipotálamo.",
  ],
  ejercicios: [
    { q: "Escribe tres diferencias entre la coordinación nerviosa y la hormonal.", sol: "Nerviosa: impulsos, por nervios, muy rápida y breve. Hormonal: hormonas, por la sangre, lenta y duradera." },
    { q: "¿Qué es un órgano diana?", sol: "Un órgano cuyas células tienen receptores para una hormona concreta y por eso responden a ella." },
    { q: "Explica por qué el páncreas es una glándula mixta.", sol: "Porque es exocrino (vierte jugo pancreático al intestino por un conducto) y endocrino (vierte insulina y glucagón a la sangre)." },
    { q: "¿Por qué se llama a la hipófisis «glándula maestra»?", sol: "Porque sus hormonas controlan el funcionamiento de otras glándulas, como el tiroides, las suprarrenales y las gónadas." },
    { q: "Describe tres efectos de la adrenalina.", sol: "Acelera el corazón y la respiración, dilata las pupilas y sube la glucosa en la sangre." },
    { q: "Completa: tras una comida, la glucemia ___ y el páncreas libera ___, que hace que la glucosa ___.", sol: "Sube; insulina; entre en las células y se guarde en el hígado, de modo que la glucemia baja." },
    { q: "¿Qué hormonas producen los ovarios y los testículos? Cita un efecto de cada una.", sol: "Ovarios: estrógenos (desarrollo de los pechos) y progesterona (ciclo menstrual). Testículos: testosterona (voz grave, vello facial)." },
    { q: "Explica la retroalimentación negativa con el ejemplo del termostato.", sol: "Cuando el nivel deseado se alcanza, el propio resultado apaga el sistema. Igual que el termostato apaga la calefacción, mucha tiroxina frena a la hipófisis." },
    { q: "Diferencia la diabetes tipo 1 de la tipo 2.", sol: "Tipo 1: el páncreas deja de fabricar insulina; empieza joven; se trata con insulina. Tipo 2: las células responden mal a la insulina; se asocia a obesidad y sedentarismo; se previene con hábitos sanos." },
    { q: "¿Por qué se añade yodo a la sal?", sol: "Porque el tiroides lo necesita para fabricar tiroxina; su falta causa bocio e hipotiroidismo." },
  ],
  quiz: [
    { q: "Las hormonas viajan por…", o: ["los nervios", "la sangre", "el aire"], a: 1, e: "Por la sangre." },
    { q: "La glándula maestra es…", o: ["el tiroides", "la hipófisis", "el páncreas"], a: 1, e: "La hipófisis." },
    { q: "La insulina…", o: ["baja la glucosa", "sube la glucosa", "no afecta a la glucosa"], a: 0, e: "Hace que las células capten glucosa." },
    { q: "La hormona de la «lucha o huida» es…", o: ["la adrenalina", "la tiroxina", "la insulina"], a: 0, e: "La adrenalina." },
    { q: "El tiroides necesita…", o: ["hierro", "yodo", "calcio"], a: 1, e: "Yodo." },
    { q: "La testosterona se produce en…", o: ["los ovarios", "los testículos", "el hígado"], a: 1, e: "En los testículos." },
    { q: "Las glándulas sudoríparas son…", o: ["endocrinas", "exocrinas", "mixtas"], a: 1, e: "Vierten el sudor por un conducto." },
    { q: "El efecto hormonal es…", o: ["rápido y breve", "lento y duradero", "instantáneo"], a: 1, e: "Lento y duradero." },
    { q: "La diabetes tipo 2 se relaciona con…", o: ["obesidad y sedentarismo", "falta de yodo", "un golpe"], a: 0, e: "Se previene con dieta y ejercicio." },
    { q: "El centro que une sistema nervioso y endocrino es…", o: ["el cerebelo", "el hipotálamo", "la médula"], a: 1, e: "El hipotálamo." },
  ],
  examen: [
    { q: "Si la glucemia baja, el páncreas libera…", o: ["insulina", "glucagón", "adrenalina solo"], a: 1, e: "El glucagón la sube." },
    { q: "La hormona del crecimiento la produce…", o: ["la hipófisis", "el tiroides", "el páncreas"], a: 0, e: "La hipófisis." },
    { q: "El bocio es un aumento de…", o: ["el páncreas", "el tiroides", "la hipófisis"], a: 1, e: "Del tiroides, por falta de yodo." },
  ],
  feynman: ["Qué son las hormonas y por qué solo actúan en algunos órganos", "Cómo regulan la insulina y el glucagón el azúcar de la sangre", "Qué es la retroalimentación negativa"],
  mapa: mapa("SISTEMA ENDOCRINO", "var(--eso)", [
    ["Hormonas", "mensajeros por la sangre · órgano diana", "var(--pen)"],
    ["Hipotálamo e hipófisis", "glándula maestra · crecimiento", "var(--inf)"],
    ["Páncreas", "insulina · glucagón · glucemia", "var(--leaf)"],
    ["Otras glándulas", "tiroides · suprarrenales · gónadas", "var(--red)"],
  ], 290),
  tarjetas: [
    ["Hormona", "Mensajero químico que viaja por la sangre hasta sus órganos diana."],
    ["Glándula endocrina", "Vierte sus hormonas directamente a la sangre."],
    ["Hipófisis", "Glándula maestra: controla otras glándulas y produce la hormona del crecimiento."],
    ["Tiroxina", "Hormona del tiroides que regula el metabolismo; necesita yodo."],
    ["Adrenalina", "Hormona suprarrenal de la «lucha o huida»."],
    ["Insulina y glucagón", "La insulina baja la glucosa; el glucagón la sube."],
    ["Retroalimentación negativa", "El producto de una glándula la frena cuando hay suficiente."],
    ["Diabetes", "Glucemia alta por falta de insulina (tipo 1) o mala respuesta a ella (tipo 2)."],
  ],
  familias: ["Comprobad si la sal de casa es yodada y hablad de por qué se recomienda.", "Comentad juntos los cambios de la pubertad con naturalidad: cada persona tiene su ritmo.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Cuerpo humano: coordinación hormonal, glándulas endocrinas y sus hormonas, regulación de la glucemia, pubertad y enfermedades endocrinas (RD 217/2022, Biología y Geología 1º a 3º).",
    ideas: ["Gráfica de glucemia tras una comida con datos reales de un glucómetro (anonimizados).", "Comparativa nervioso frente a endocrino con un juego de roles: cartero frente a teléfono.", "Charla de una asociación de personas con diabetes."],
  },
  fuentes: [RD, wiki("Sistema endocrino", "Sistema_endocrino"), wiki("Insulina", "Insulina")],
  revisado: "2026-11-12",
};
