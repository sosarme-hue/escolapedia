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

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer huesos curiosos: el más grande y el más pequeño", "Saber que los músculos trabajan por parejas", "Mantener una buena postura", "Saber qué hacer ante un golpe o una fractura"],
  lectura: { titulo: "La escayola de Marina", html: `<p>Marina se cayó de la bicicleta en el parque. Intentó mover el brazo, pero le dolía muchísimo.</p><p>Sus padres la llevaron al hospital. Allí, la médica le hizo una radiografía: una foto especial que deja ver los huesos por dentro.</p><p>—Mira —le enseñó la médica—. Aquí tienes una pequeña rotura en el hueso del brazo. Se llama fractura.</p><p>—¿Se me quedará roto para siempre? —preguntó Marina, asustada.</p><p>—No, tranquila. Los huesos están vivos y saben repararse solos. Solo necesitamos que esté quieto unas semanas.</p><p>Le pusieron una escayola blanca y dura. Al día siguiente, en el cole, todos sus compañeros firmaron en ella y le hicieron dibujos.</p><p>Seis semanas después, le quitaron la escayola. El brazo estaba curado, aunque un poco flojito. Con ejercicios, poco a poco, recuperó la fuerza.</p><p>Desde entonces, Marina siempre se pone el casco y las coderas para montar en bici.</p>` },
  tras: {
    "El esqueleto": [
      ["Huesos curiosos", `<p>Nuestro esqueleto tiene <mark>huesos muy curiosos</mark>:</p><ul><li>El hueso más <b>largo</b> es el <b>fémur</b>, en el muslo. Es fortísimo.</li><li>El hueso más <b>pequeño</b> es el <b>estribo</b>, dentro del oído. ¡Es más pequeño que un grano de arroz!</li><li>En cada <b>mano</b> tenemos 27 huesos. Por eso podemos hacer movimientos tan precisos, como escribir o atarnos los cordones.</li><li>Los <b>bebés</b> nacen con más huesos que los adultos. Al crecer, algunos se unen entre sí.</li><li>La <b>columna vertebral</b> está formada por muchos huesecillos llamados vértebras, uno encima de otro, como una torre de fichas.</li></ul><p>Los huesos parecen piedras, pero están <b>vivos</b>: crecen, se reparan y fabrican la sangre en su interior.</p><p><b>Actividad</b>: tócate el brazo y la pierna y busca dónde notas los huesos bajo la piel.</p>`,
        L6.filas("Huesos", [["fémur", "el más largo", cNA], ["estribo", "el más pequeño", cRO], ["mano", "27 huesos", cAZ], ["columna", "vértebras", cVE]])],
    ],
    "Los músculos": [
      ["Músculos que trabajan en pareja", `<p>Los músculos solo saben hacer una cosa: <mark>tirar</mark>. No pueden empujar. Por eso trabajan por <b>parejas</b>: uno tira hacia un lado y el otro hacia el otro.</p><p>El ejemplo más fácil está en el brazo:</p><ul><li>Para <b>doblar</b> el brazo, el músculo de delante, el <b>bíceps</b>, se encoge y se pone duro. ¡Toca cómo se forma la «bola»!</li><li>Para <b>estirar</b> el brazo, el músculo de detrás, el <b>tríceps</b>, se encoge y tira hacia el otro lado.</li></ul><p>Mientras uno se encoge, el otro se relaja y se estira.</p><p>Otros músculos trabajan sin que lo pensemos: el <b>corazón</b> es un músculo que late día y noche, y los músculos del estómago mueven la comida.</p><p>¡Y para sonreír usamos muchos músculos de la cara!</p><p><b>Actividad</b>: dobla y estira el brazo con la otra mano encima del bíceps. ¿Qué notas?</p>`,
        H6.dos("Brazo", ["DOBLAR", ["bíceps", "se encoge", "¡bola!"], cRO], ["ESTIRAR", ["tríceps", "se encoge", "detrás"], cAZ])],
    ],
    "Las articulaciones": [
      ["La buena postura", `<p>La forma en que colocamos el cuerpo se llama <mark>postura</mark>. Una mala postura, repetida muchos días, puede hacer que nos duela la espalda.</p><p>Consejos para una buena postura:</p><ul><li><b>Sentado</b>: espalda recta apoyada en el respaldo y pies en el suelo. No te encorves sobre la mesa.</li><li><b>Con la mochila</b>: llévala con las dos asas, bien pegada a la espalda, y que no pese demasiado. Mejor aún, con ruedas.</li><li><b>Al coger peso</b>: dobla las rodillas en lugar de la espalda.</li><li><b>Con pantallas</b>: ponlas a la altura de los ojos y no agaches mucho la cabeza.</li><li><b>Al dormir</b>: un colchón firme y una almohada que no sea muy alta.</li></ul><p>Cambiar de postura y moverse cada rato también ayuda.</p><p><b>Actividad</b>: pide a un compañero que te observe sentado y que te diga si tu postura es buena.</p>`,
        H6.flujo("Postura", ["sentado|recto", "mochila|dos asas", "peso|rodillas", "pantalla|a los ojos"], cVE)],
    ],
    "Cuidamos huesos y músculos": [
      ["Si nos hacemos daño", `<p>A veces, al jugar o hacer deporte, nos hacemos <mark>daño</mark>:</p><ul><li>Un <b>golpe</b> o moratón: ponemos frío (hielo envuelto en un trapo) para que baje la hinchazón.</li><li>Un <b>esguince</b>: se tuerce una articulación, como el tobillo. Duele y se hincha. Hay que descansar.</li><li>Una <b>fractura</b>: se rompe un hueso. Duele mucho y no se puede mover. Hay que ir al médico.</li></ul><p>Para ver si un hueso está roto, los médicos hacen una <b>radiografía</b>. Si lo está, ponen una <b>escayola</b> o una férula para que el hueso no se mueva mientras se cura.</p><p>Si te haces daño, avisa siempre a un adulto. Y si alguien se cae, no le muevas: pide ayuda.</p><p>Para prevenir, usa <b>casco</b>, rodilleras y coderas cuando montes en bici o patines.</p><p><b>Actividad</b>: haced en clase un pequeño botiquín de cartón con lo que llevaríais.</p>`,
        L6.filas("Daño", [["golpe", "frío", cAZ], ["esguince", "descanso", cNA], ["fractura", "médico", cRO], ["prevenir", "casco", cVE]])],
    ],
  },
  final: [
    ["Huesos de animales", `<p>Los animales <b>vertebrados</b> también tienen <mark>esqueleto</mark>, pero cada uno es diferente:</p><ul><li>La <b>jirafa</b> tiene un cuello larguísimo… ¡pero tiene el mismo número de vértebras en el cuello que nosotros: siete! Lo que pasa es que las suyas son enormes.</li><li>Las <b>aves</b> tienen huesos huecos, llenos de aire, para pesar menos y poder volar.</li><li>La <b>serpiente</b> tiene cientos de vértebras y costillas. Por eso se dobla tanto.</li><li>Los <b>peces</b> tienen espinas, que son sus huesos.</li></ul><p>Los animales <b>invertebrados</b>, como el caracol, la araña o el cangrejo, no tienen huesos. Algunos tienen una concha o un caparazón duro por fuera.</p><p>Los científicos que estudian huesos de animales antiguos, como los dinosaurios, se llaman <b>paleontólogos</b>.</p><p><b>Actividad</b>: busca una foto del esqueleto de un dinosaurio y compáralo con el tuyo.</p>`,
      H6.rueda("Esqueletos", "HUESOS", [["jirafa", cNA], ["aves", cAZ], ["serpiente", cVE], ["peces", cRO]])],
    ["Repaso: la escayola de Marina", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Marina se cae y se hace una <b>fractura</b> en un hueso del brazo.</li><li>La médica hace una <b>radiografía</b> para ver el hueso por dentro.</li><li>Los huesos están <b>vivos</b>: se reparan solos si están quietos.</li><li>La <b>escayola</b> mantiene el brazo quieto.</li><li>Al quitarla, el brazo está flojito porque los <b>músculos</b> no se han movido. Con ejercicio recupera la fuerza.</li><li>Ahora usa <b>casco</b> y <b>coderas</b>: así previene.</li></ul><p>Los huesos y los músculos trabajan juntos: si uno se lesiona, el otro también lo nota.</p><p><b>Actividad</b>: escribe tres consejos para que tus compañeros no se hagan daño en el recreo.</p>`,
      H6.flujo("Marina", ["caída|fractura", "hospital|radiografía", "escayola|6 semanas", "ejercicio|¡curada!"], cAZ)],
  ],
  ejemplos: [
    ["¿Qué músculo se encoge al doblar el brazo?", ["El de delante del brazo."], "El bíceps."],
    ["¿Qué hacemos si nos damos un golpe?", ["Ponemos frío envuelto en un trapo."], "Hielo para bajar la hinchazón."],
  ],
  errores: ["Pensar que los huesos no están vivos.", "Llevar la mochila colgada de un solo hombro."],
  ejercicios: [
    ["b", "¿Cuál es el hueso más largo?", "El fémur."],
    ["b", "¿Dónde está el hueso más pequeño?", "En el oído."],
    ["b", "¿Qué hace el bíceps?", "Doblar el brazo."],
    ["b", "¿Qué es una fractura?", "La rotura de un hueso."],
    ["b", "¿Qué usamos en la bici para protegernos?", "Casco, rodilleras, coderas."],
    ["m", "¿Por qué los músculos trabajan por parejas?", "Porque solo pueden tirar, no empujar."],
    ["m", "Di dos consejos para sentarse bien.", "Espalda recta y pies en el suelo."],
    ["m", "¿Qué es una radiografía?", "Una foto que deja ver los huesos."],
    ["m", "¿Por qué las aves tienen huesos huecos?", "Para pesar menos y volar."],
    ["m", "¿Qué es un esguince?", "Una torcedura de una articulación."],
    ["a", "En la lectura, ¿por qué está flojo el brazo de Marina?", "Porque los músculos no se movieron durante semanas."],
    ["a", "¿Cuántas vértebras tiene en el cuello la jirafa?", "Siete, como nosotros."],
    ["a", "Explica cómo coger una caja pesada del suelo.", "Doblando las rodillas, no la espalda."],
    ["a", "¿Qué hacemos si un compañero se cae y no puede moverse?", "No moverlo y avisar a un adulto."],
  ],
  quiz: [
    ["El hueso más largo es el…", ["fémur", "estribo", "cráneo"], "Huesos."],
    ["Para estirar el brazo trabaja el…", ["tríceps", "bíceps", "corazón"], "Parejas."],
    ["La mochila se lleva…", ["con las dos asas", "en un hombro", "en la mano"], "Postura."],
    ["Una rotura de hueso es una…", ["fractura", "agujetas", "postura"], "Daño."],
    ["Los huesos de las aves son…", ["huecos", "de metal", "blandos"], "Animales."],
  ],
  examen: [
    ["En la lectura, ¿qué le ponen a Marina?", ["una escayola", "una tirita", "un casco"], "Lectura."],
    ["¿Cuánto tiempo lleva Marina la escayola?", ["6 semanas", "2 días", "1 año"], "Repaso."],
  ],
  tarjetas: [
    ["Músculos en pareja", "Bíceps dobla, tríceps estira."],
    ["Buena postura", "Espalda recta y mochila con dos asas."],
  ],
  glosario: [
    ["Fémur", "Hueso del muslo, el más largo."],
    ["Estribo", "Hueso del oído, el más pequeño."],
    ["Vértebra", "Cada hueso de la columna."],
    ["Bíceps", "Músculo que dobla el brazo."],
    ["Tríceps", "Músculo que estira el brazo."],
    ["Postura", "Forma de colocar el cuerpo."],
    ["Fractura", "Rotura de un hueso."],
    ["Esguince", "Torcedura de una articulación."],
    ["Radiografía", "Foto de los huesos por dentro."],
    ["Escayola", "Funda dura que inmoviliza un hueso roto."],
  ],
  situacion: {
    titulo: "Campaña de la espalda sana",
    reto: "La clase prepara una campaña con carteles y demostraciones para enseñar a todo el colegio a cuidar huesos y músculos.",
    pasos: ["Investigar qué es una buena postura.", "Pesar las mochilas de la clase y comparar.", "Ensayar cómo sentarse y coger peso correctamente.", "Hacer carteles y explicarlos a otra clase."],
    producto: "Carteles y una demostración sobre la espalda sana.",
    evaluacion: ["Conoce huesos importantes.", "Explica cómo trabajan los músculos.", "Muestra una buena postura.", "Sabe actuar ante un golpe."],
  },
});
