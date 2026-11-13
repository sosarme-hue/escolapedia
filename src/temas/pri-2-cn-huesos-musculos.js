// Ciencias de la Naturaleza 2º de Primaria: huesos y músculos. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, nino, esqueleto, hueso, brazoMusculo, flechaR, chip, tick, equis, cara, leche, pelota, suelo } = require("./_pri2b");

module.exports = tema({
  materia: "Ciencias de la Naturaleza",
  titulo: "El cuerpo humano: huesos y músculos",
  objetivos: ["Saber que los huesos forman el esqueleto y nos sostienen", "Conocer que los músculos mueven los huesos", "Reconocer las articulaciones y cuidar el aparato locomotor"],
  claves: ["hueso", "esqueleto", "músculo", "articulación", "cráneo", "columna vertebral"],
  pregunta: {
    texto: "Toca tu brazo y apriétalo un poco. ¿Qué notas por dentro, algo blando o algo duro?",
    respuesta: "Notas las dos cosas. Lo <b>blando</b> son los <mark>músculos</mark>, que mueven el cuerpo. Lo <b>duro</b> de dentro es un <mark>hueso</mark>, que lo sostiene.",
  },
  bloques: [
    {
      html: `<h3>Los huesos</h3><p>Dentro del cuerpo tenemos <mark>huesos</mark>. Son duros y fuertes.</p><p>Los huesos nos <b>sostienen</b>, como los palos de una tienda de campaña. Sin ellos seríamos blanditos como un muñeco de trapo. Hay huesos largos, como los de las piernas, y huesos cortos, como los de los dedos.</p>`,
      svg: svg("Un hueso largo y huesos cortos de la mano", `${hueso(80, 90, 90, -20)}${[0, 1, 2, 3].map((i) => hueso(170 + i * 18, 92, 22, 90)).join("")}${txt(80, 150, "hueso largo", "var(--pen)", 14)}${txt(196, 150, "huesos cortos", "var(--pen)", 14)}${big(130, 34, "Duros y fuertes", "var(--ink)", 18)}`),
    },
    {
      html: `<h3>El esqueleto</h3><p>Todos los huesos juntos forman el <mark>esqueleto</mark>. ¡Una persona mayor tiene más de 200 huesos!</p><p>El esqueleto le da <b>forma</b> al cuerpo y lo mantiene de pie. También nos ayuda a movernos, porque los músculos tiran de los huesos.</p>`,
      svg: svg("Un esqueleto humano de frente", `${suelo(166)}${esqueleto(130, 164, 1.25)}${txt(48, 60, "más de", "var(--muted)", 13)}${big(48, 88, "200", "var(--pen)", 26)}${txt(48, 108, "huesos", "var(--muted)", 13)}`),
      video: V("DSt1YvKQ7Ak"),
    },
    {
      html: `<h3>Huesos que nos protegen</h3><p>Algunos huesos son como un <mark>escudo</mark>. Protegen las partes más delicadas del cuerpo.</p><p>El <b>cráneo</b> es una caja dura que guarda el cerebro. Las <b>costillas</b> forman una jaula que protege el corazón y los pulmones. La <b>columna vertebral</b> nos mantiene derechos.</p>`,
      svg: svg("El cráneo protege el cerebro y las costillas protegen el corazón", `<g transform="translate(70 92)"><circle r="40" fill="#f5ecd7" stroke="var(--ink)" stroke-width="2"/><path d="M-26 -6 q6 -22 26 -24 q20 2 26 24 q-26 10 -52 0z" fill="#f4b6c2"/><path d="M-14 -16 q6 6 0 12 M0 -22 q6 8 0 16 M14 -16 q-6 6 0 12" stroke="#d9879a" stroke-width="2" fill="none"/></g><g transform="translate(190 92)">${[-28, -14, 0, 14].map((yy) => `<path d="M-38 ${yy} q38 16 76 0" stroke="#e9dfc6" stroke-width="7" fill="none" stroke-linecap="round"/>`).join("")}<path d="M0 -38 V30" stroke="#e9dfc6" stroke-width="7"/><path transform="translate(-4 2) scale(1.1)" d="M0 8 C-14 -2 -12 -14 -5 -14 C-2 -14 0 -11 0 -9 C0 -11 2 -14 5 -14 C12 -14 14 -2 0 8z" fill="var(--red)"/></g>${txt(70, 160, "cráneo", "var(--pen)", 14)}${txt(190, 160, "costillas", "var(--pen)", 14)}`),
    },
    {
      html: `<h3>Los músculos</h3><p>Encima de los huesos están los <mark>músculos</mark>. Son blandos y elásticos, como una goma.</p><p>Los músculos <b>tiran</b> de los huesos y así nos movemos. Cuando doblas el brazo, el músculo de delante se hace corto y gordo. ¡Tócalo y verás cómo se pone duro!</p>`,
      svg: svg("Un brazo doblado con el músculo marcado en rojo", `${brazoMusculo(120, 116, 1.6)}${flechaR(150, 70, 110, 100, "var(--red)")}${txt(186, 62, "músculo", "var(--red)", 15)}${txt(130, 166, "el músculo tira del hueso", "var(--ink)", 13)}`),
      video: V("irrqXpu9XX8"),
    },
    {
      html: `<h3>Las articulaciones</h3><p>Donde se juntan dos huesos hay una <mark>articulación</mark>. Ahí el cuerpo se puede doblar.</p><p>El codo, la rodilla, el hombro y la muñeca son articulaciones. Prueba a caminar sin doblar las rodillas: ¡parecerías un robot! Gracias a ellas podemos saltar, sentarnos y escribir.</p>`,
      svg: svg("Una pierna doblada con la rodilla marcada", `${hueso(100, 50, 60, 60)}${hueso(100, 102, 60, -60)}<circle cx="115" cy="76" r="15" fill="none" stroke="var(--red)" stroke-width="3" stroke-dasharray="5 3"/>${txt(184, 82, "rodilla", "var(--red)", 18)}${["codo", "hombro", "muñeca"].map((t, i) => chip(54 + i * 76, 162, 66, t, "var(--pen)", 12)).join("")}`),
    },
    {
      html: `<h3>Nos movemos</h3><p>Huesos, músculos y articulaciones trabajan <mark>en equipo</mark>. Juntos forman el <b>aparato locomotor</b>, el que nos permite movernos.</p><p>El cerebro da la orden, los músculos tiran y los huesos se mueven por las articulaciones. ¡Así corremos, saltamos y bailamos!</p>`,
      svg: svg("Niños corriendo, saltando y bailando", `${suelo(150)}${nino(60, 150, { pose: "corre", c: "var(--red)" })}${nino(130, 150, { pose: "salta", c: "var(--pen)", nina: true })}${nino(200, 150, { pose: "baila", c: "var(--leaf)" })}${txt(130, 172, "huesos + músculos + articulaciones", "var(--ink)", 12)}`),
    },
    {
      html: `<h3>Cuidamos huesos y músculos</h3><p>Para tener huesos fuertes hay que tomar <mark>leche, queso o yogur</mark>, y jugar al aire libre.</p><p>Los músculos se hacen fuertes con el <b>ejercicio</b>. También es importante <b>sentarse bien</b>, con la espalda recta, y no llevar la mochila muy cargada.</p>`,
      svg: svg("Un vaso de leche, una pelota y un niño sentado con la espalda recta", `${leche(46, 104)}${pelota(110, 116, 16)}<path d="M180 150 V112 H214 V150 M180 112 V80" stroke="#a0662f" stroke-width="5" stroke-linecap="round" fill="none"/>${nino(196, 150, { pose: "sentado", c: "var(--pen)" })}${tick(240, 80)}${txt(46, 152, "leche", "var(--ink)", 13)}${txt(110, 152, "ejercicio", "var(--ink)", 13)}${txt(130, 30, "Así nos cuidamos", "var(--leaf)", 16)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saber cómo es el cuerpo nos ayuda a <mark>evitar golpes</mark> y lesiones.</p><p>Por eso nos ponemos <b>casco</b> en la bici, que protege el cráneo. Antes de correr, calentamos los músculos. Y si un hueso se rompe, el médico lo sujeta con una <b>escayola</b> hasta que se cura solo.</p>`,
      svg: svg("Una niña con casco en bici y un brazo con escayola", `${suelo(152)}<g><circle cx="44" cy="136" r="14" fill="none" stroke="#1b2235" stroke-width="3"/><circle cx="100" cy="136" r="14" fill="none" stroke="#1b2235" stroke-width="3"/><path d="M44 136 L66 136 L82 112 L100 136 M66 136 L60 108" stroke="var(--leaf)" stroke-width="3" fill="none"/></g>${nino(68, 128, { pose: "sentado", c: "var(--red)", nina: true, s: 0.9 })}<path d="M54 64 a14 12 0 0 1 28 0z" fill="var(--sun)" transform="translate(-4 4)"/><g transform="translate(190 96)"><path d="M-40 10 H20" stroke="#f3c9a1" stroke-width="18" stroke-linecap="round"/><rect x="-26" y="-1" width="40" height="22" rx="6" fill="#fff" stroke="var(--muted)" stroke-width="2"/></g>${txt(70, 30, "casco", "var(--sun)", 14)}${txt(180, 146, "escayola", "var(--muted)", 14)}`),
    },
    {
      html: `<h3>Juego: ¿duro o blando?</h3><p>Toca distintas partes de tu cuerpo. ¿Notas un <mark>hueso</mark> o un <mark>músculo</mark>?</p><p>En la <b>frente</b> y en la <b>rodilla</b> notas el hueso, porque está muy cerquita de la piel. En la <b>pierna</b> o en el <b>brazo</b> notas el músculo. Si lo aprietas mucho, debajo encontrarás el hueso.</p>`,
      svg: svg("La frente y la rodilla son duras; el brazo y la pierna son blandos", `${cara(70, 84, 34)}<path d="M50 60 h40" stroke="var(--pen)" stroke-width="3" stroke-dasharray="4 3"/>${txt(70, 146, "frente: hueso", "var(--pen)", 13)}${brazoMusculo(196, 96, 1.1)}${txt(186, 146, "brazo: músculo", "var(--red)", 13)}${big(130, 30, "¿Duro o blando?", "var(--ink)", 18)}`),
    },
  ],
  figura: {
    titulo: "Huesos, músculos y articulaciones",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="El esqueleto sostiene, los músculos mueven y las articulaciones doblan">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${esqueleto(110, 214, 1.5)}
      ${brazoMusculo(340, 130, 2)}
      ${hueso(530, 100, 70, 60)}${hueso(548, 160, 70, -60)}<circle cx="546" cy="130" r="16" fill="none" stroke="var(--red)" stroke-width="3" stroke-dasharray="5 3"/>
      ${rot(110, 244, "Huesos: sostienen", { size: 18, color: "var(--pen)", w: 800 })}
      ${rot(320, 244, "Músculos: mueven", { size: 18, color: "var(--red)", w: 800 })}
      ${rot(540, 244, "Articulaciones: doblan", { size: 18, color: "var(--leaf)", w: 800 })}
    </svg>`,
  },
  video: V("bGvFYRvDjc4", "aparato locomotor para niños"),
  ejemplos: [
    { enunciado: "¿Qué hueso protege el cerebro?", pasos: ["El cerebro está dentro de la cabeza.", "La cabeza tiene una caja de hueso muy dura.", "Esa caja se llama cráneo."], resultado: "el cráneo protege el cerebro." },
    { enunciado: "¿Qué pasa en tu brazo cuando levantas la mochila?", pasos: ["El cerebro manda la orden.", "El músculo de delante del brazo se encoge y tira.", "El hueso sube y el codo se dobla."], resultado: "el músculo tira del hueso y el codo se dobla." },
    { enunciado: "¿Dónde está la articulación de la pierna que doblas al sentarte?", pasos: ["Siéntate en una silla.", "Mira qué parte de la pierna se dobla.", "Es la unión entre el hueso del muslo y el de abajo."], resultado: "es la rodilla." },
  ],
  errores: [
    "Pensar que los huesos están muertos: están vivos y crecen contigo.",
    "Creer que los músculos solo están en los brazos: el corazón y la lengua también son músculos.",
    "Confundir articulación con hueso: la articulación es la unión entre dos huesos.",
    "Pensar que solo hacen falta huesos para moverse: sin músculos los huesos no se mueven.",
  ],
  ejercicios: [
    { q: "¿Cómo se llama el conjunto de todos los huesos?", sol: "El esqueleto." },
    { q: "Di dos cosas que hacen los huesos.", sol: "Sostienen el cuerpo y protegen partes delicadas." },
    { q: "¿Qué hacen los músculos?", sol: "Tiran de los huesos para movernos." },
    { q: "Nombra tres articulaciones.", sol: "Por ejemplo: rodilla, codo y hombro." },
    { q: "¿Qué protegen las costillas?", sol: "El corazón y los pulmones." },
    { q: "Dobla el brazo y toca el músculo. ¿Cómo está, blando o duro?", sol: "Se pone duro y más gordo porque se encoge." },
    { q: "¿Qué alimentos ayudan a tener huesos fuertes?", sol: "La leche, el yogur y el queso." },
    { q: "¿Por qué nos ponemos casco en la bici?", sol: "Para proteger el cráneo y la cabeza si nos caemos." },
    { q: "Dibuja un esqueleto sencillo y señala el cráneo.", sol: "El cráneo es el hueso redondo de la cabeza." },
    { q: "¿Qué es el aparato locomotor?", sol: "Los huesos, los músculos y las articulaciones, que nos permiten movernos." },
  ],
  quiz: [
    { q: "Los huesos son…", o: ["blandos", "duros", "líquidos"], a: 1, e: "Son duros para sostenernos." },
    { q: "Todos los huesos juntos forman…", o: ["el esqueleto", "el músculo", "la piel"], a: 0, e: "El esqueleto da forma al cuerpo." },
    { q: "¿Qué tira de los huesos para movernos?", o: ["Los músculos", "Las uñas", "El pelo"], a: 0, e: "Los músculos tiran y los huesos se mueven." },
    { q: "La unión de dos huesos es…", o: ["un músculo", "una articulación", "una costilla"], a: 1, e: "Ahí el cuerpo se dobla." },
    { q: "¿Qué protege el cráneo?", o: ["El corazón", "El cerebro", "La rodilla"], a: 1, e: "El cráneo es la caja de la cabeza." },
    { q: "La rodilla es…", o: ["una articulación", "un músculo", "un hueso del brazo"], a: 0, e: "Une los huesos de la pierna." },
    { q: "¿Qué hace fuertes los huesos?", o: ["Los caramelos", "La leche y el yogur", "Estar siempre sentado"], a: 1, e: "Tienen calcio." },
    { q: "Los músculos se hacen fuertes con…", o: ["el ejercicio", "la tele", "dormir poco"], a: 0, e: "Moverse los entrena." },
    { q: "Las costillas protegen…", o: ["los pies", "el corazón y los pulmones", "las manos"], a: 1, e: "Forman una jaula de hueso." },
    { q: "¿Cuántos huesos tiene una persona mayor?", o: ["Unos 10", "Más de 200", "Solo 1"], a: 1, e: "¡Más de doscientos!" },
  ],
  examen: [
    { q: "¿Qué forma el aparato locomotor?", o: ["Huesos, músculos y articulaciones", "Ojos y orejas", "El estómago"], a: 0, e: "Es el que nos permite movernos." },
    { q: "Cuando doblas el brazo, el músculo…", o: ["se encoge y tira", "desaparece", "se rompe"], a: 0, e: "Se hace corto y gordo." },
    { q: "¿Cuál es una articulación?", o: ["El codo", "La uña", "El pelo"], a: 0, e: "El codo une los huesos del brazo." },
    { q: "Para cuidar la espalda hay que…", o: ["sentarse bien", "llevar la mochila muy llena", "dormir en el suelo"], a: 0, e: "Con la espalda recta." },
  ],
  feynman: ["Qué hacen los huesos", "Cómo nos movemos con los músculos", "Qué es una articulación"],
  mapaT: ["HUESOS Y MÚSCULOS", [
    ["Huesos", "duros · sostienen · protegen", "var(--pen)"],
    ["Músculos", "blandos · tiran · mueven", "var(--red)"],
    ["Articulaciones", "codo · rodilla · hombro", "var(--leaf)"],
    ["Cuidados", "leche · ejercicio · espalda recta", "var(--sun)"],
  ]],
  tarjetas: [
    ["¿Qué es el esqueleto?", "Todos los huesos juntos"],
    ["¿Qué hacen los huesos?", "Sostienen y protegen el cuerpo"],
    ["¿Qué hacen los músculos?", "Tiran de los huesos para movernos"],
    ["¿Qué es una articulación?", "La unión de dos huesos"],
    ["¿Qué protege el cráneo?", "El cerebro"],
    ["¿Qué protegen las costillas?", "El corazón y los pulmones"],
    ["Una articulación de la pierna", "La rodilla"],
    ["¿Qué hace fuertes los músculos?", "El ejercicio"],
  ],
  familias: [
    "Jugad a tocar el cuerpo: «¿aquí hay hueso o músculo?» (frente, rodilla, brazo, muslo).",
    "Haced juntos diez movimientos diferentes y decid qué articulación se dobla en cada uno.",
    "Revisad el peso de la mochila: no debe pasar de una décima parte de su peso.",
    "Mirad juntos una radiografía (si tenéis alguna) y buscad los huesos.",
  ],
  saberes: "El cuerpo humano: el aparato locomotor (huesos, músculos y articulaciones) y hábitos saludables para cuidarlo",
  ideas: ["Esqueleto de papel con encuadernadores en las articulaciones.", "Juego de «Simón dice» nombrando articulaciones.", "Comparar un brazo de cartón rígido con uno con «codo» de encuadernador."],
});
