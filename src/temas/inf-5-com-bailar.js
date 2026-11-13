// Infantil 5 años · Comunicación y representación: bailamos y nos expresamos.
const { tema, mapa, svg, rot, big, ic, nino, nota, suelo, corazon, dibujos, mural, lista, vid, PROF, R, A, V, N, M, W, K } = require("./_inf5b");

module.exports = tema({
  materia: "Comunicación y representación de la realidad",
  titulo: "Bailamos y nos expresamos",
  objetivos: ["Mover el cuerpo siguiendo la música", "Moverse rápido o lento, fuerte o suave", "Expresar emociones con gestos y movimientos"],
  claves: ["bailar", "ritmo", "rápido", "lento", "gesto", "emoción"],
  pregunta: {
    texto: "Sin hablar, ¿cómo puedes decirle a alguien que estás contento?",
    respuesta: "¡Con el <mark>cuerpo</mark>! Saltando, sonriendo, aplaudiendo… El cuerpo también <b>habla</b>.",
  },
  bloques: [
    {
      html: `<h3>Mi cuerpo se mueve</h3><p>Cuando suena la música, el cuerpo quiere <mark>moverse</mark>.</p><p>Movemos los brazos, las piernas, la cabeza y la cadera.</p><p>¡Eso es <b>bailar</b>!</p><p>Cada uno baila a su manera.</p>`,
      svg: svg("Dos niños bailan con notas musicales alrededor", `${nino(90, 158, { c: R, pose: "baila" })}${nino(170, 158, { c: A, pose: "arriba", nina: true })}${nota(40, 60, A)}${nota(220, 50, R)}${nota(130, 40, V)}${suelo(160)}`),
    },
    {
      html: `<h3>Rápido y lento</h3><p>Si la música va <mark>rápida</mark>, nos movemos deprisa: corremos y saltamos.</p><p>Si va <mark>lenta</mark>, nos movemos despacio, como una tortuga.</p><p>¡Escucha y cambia de velocidad!</p>`,
      svg: svg("Un niño corre con música rápida y una tortuga camina con música lenta", `${nino(70, 140, { c: R, pose: "corre" })}${rot(70, 168, "rápido", { color: R, size: 16 })}${ic("tortuga", 190, 124, 1.5)}${rot(190, 168, "lento", { color: V, size: 16 })}<path d="M130 30 V150" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 5"/>`),
    },
    {
      html: `<h3>Fuerte y suave</h3><p>Con música <mark>fuerte</mark>, damos pisotones como un elefante.</p><p>Con música <mark>suave</mark>, andamos de puntillas como un ratón.</p><p>¡Escucha bien antes de moverte!</p><p>Así bailamos con las orejas.</p>`,
      svg: dibujos("Un elefante para la música fuerte y un ratón para la suave", [["elefante", "fuerte", R], ["raton", "suave", A]], { titulo: "Escucho y me muevo", nota: "¡PUM, PUM! · tip, tip, tip" }),
    },
    {
      html: `<h3>El cuerpo cuenta cómo me siento</h3><p>Con gestos mostramos las <mark>emociones</mark>.</p><p><b>Contento</b>: salto y sonrío. <b>Triste</b>: me encojo. <b>Cansado</b>: bostezo y me estiro.</p><p>Los demás pueden adivinar cómo estás.</p>`,
      svg: dibujos("Caras contenta, triste y cansada", [["feliz", "contento", M], ["triste", "triste", A], ["cansado", "cansado", N]], { titulo: "Mi cara y mi cuerpo hablan" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Bailar nos pone <mark>de buen humor</mark>, mueve el cuerpo y nos ayuda a hacer amigos.</p><p>En las fiestas bailamos juntos: en corro, por parejas o en fila.</p>`,
      svg: svg("Cuatro niños bailan en corro dados de la mano", `${[[60, R], [110, A], [160, V], [210, M]].map(([x, c], i) => nino(x, 150, { c, pose: "brazos", nina: i % 2 === 1 })).join("")}${corazon(130, 40, 1.4)}${suelo(152)}`),
    },
    {
      html: `<h3>Juego: las estatuas</h3><p>Pon música y baila como quieras.</p><p>Cuando la música <mark>se para</mark>, ¡te quedas quieto como una estatua!</p><p>El que se mueva, hace un baile solo.</p>`,
      svg: svg("Un niño baila con música y luego se queda quieto como estatua", `${nino(70, 150, { c: A, pose: "baila" })}${nota(110, 60, A)}${rot(70, 172, "con música", { color: A })}${nino(190, 150, { c: R, pose: "equilibrio" })}${rot(190, 40, "¡quieto!", { color: R, size: 16 })}${rot(190, 172, "sin música", { color: R })}`),
    },
  ],
  figura: {
    titulo: "Me muevo como suena la música",
    svg: mural("Rápido, lento, fuerte y suave", [["conejo", "Rápido", "corro y salto", R], ["tortuga", "Lento", "despacio, despacio", V], ["elefante", "Fuerte", "pisotones", A], ["raton", "Suave", "de puntillas", N]], "Escucho y bailo"),
  },
  video: { ...vid("1zP0Vnhd95E", "Me muevo: canción para despertar el cuerpo", "Pequeño Pez", 33712892), busqueda: "canciones para bailar niños infantil expresión corporal" },
  ejemplos: [
    { enunciado: "Suena una música muy lenta. ¿Cómo bailamos?", pasos: ["Escuchamos: va despacio.", "Movemos los brazos suave, como olas.", "Caminamos muy despacio."], resultado: "bailamos lento, como una tortuga." },
    { enunciado: "Expresamos «enfadado» sin hablar.", pasos: ["Fruncimos el ceño.", "Cruzamos los brazos.", "Damos un pisotón."], resultado: "¡todos saben que estamos enfadados!" },
  ],
  errores: [
    "Moverse igual con cualquier música: hay que escuchar si va rápida o lenta.",
    "Bailar sin mirar alrededor: cuidado con no chocar.",
    "Pensar que hay una sola forma de bailar: cada uno baila a su manera.",
  ],
  ejercicios: [
    { q: "Baila una canción rápida y una lenta.", sol: "Nota para la familia: alternad canciones y observad si cambia de velocidad." },
    { q: "Juega a las estatuas con la familia.", sol: "Nota: parad la música por sorpresa." },
    { q: "Muévete como un elefante y como un ratón.", sol: "Pisotones fuertes y pasitos de puntillas." },
    { q: "Enseña con el cuerpo que estás contento, triste y cansado.", sol: "Nota: que los demás adivinen la emoción." },
    { q: "Baila con un pañuelo moviéndolo como el viento.", sol: "Movimientos amplios y suaves." },
    { q: "Inventa un baile con tres pasos y enséñalo.", sol: "Respuesta libre: repetidlo juntos." },
  ],
  quiz: [
    { q: "Si la música va rápida…", o: ["me muevo deprisa", "me duermo", "me muevo lento"], a: 0, e: "Seguimos la música." },
    { q: "Si la música es suave, ando…", o: ["de puntillas", "con pisotones", "corriendo"], a: 0, e: "Suave como un ratón." },
    { q: "En las estatuas, cuando para la música…", o: ["sigo bailando", "me quedo quieto", "me voy"], a: 1, e: "¡Quieto como una estatua!" },
    { q: "Con el cuerpo puedo mostrar…", o: ["cómo me siento", "mi número de teléfono", "la hora"], a: 0, e: "El cuerpo expresa emociones." },
    { q: "¿Qué animal se mueve lento?", o: ["la tortuga", "el conejo", "el pájaro"], a: 0, e: "Despacio, despacio." },
    { q: "Bailar en corro es…", o: ["dados de la mano en círculo", "en fila", "solos"], a: 0, e: "Todos en círculo." },
  ],
  examen: [
    { q: "Con música fuerte damos…", o: ["pisotones", "pasitos de puntillas", "nada"], a: 0, e: "Como un elefante." },
    { q: "Contento, con el cuerpo…", o: ["salto y sonrío", "me encojo", "bostezo"], a: 0, e: "Saltamos de alegría." },
    { q: "¿Hay una sola forma de bailar?", o: ["sí", "no, cada uno a su manera", "solo de pie"], a: 1, e: "Cada cuerpo baila distinto." },
  ],
  feynman: ["Cómo me muevo con música rápida y con música lenta", "Cómo muestro una emoción con el cuerpo", "Cómo se juega a las estatuas"],
  mapa: mapa("BAILAR", "var(--pri)", [
    ["Rápido / lento", "sigo la música", R],
    ["Fuerte / suave", "elefante o ratón", A],
    ["Emociones", "el cuerpo habla", V],
    ["Juntos", "corro, parejas, fila", N],
  ], 220),
  tarjetas: [
    ["¿Qué es bailar?", "Mover el cuerpo con la música"],
    ["Música rápida…", "Me muevo deprisa"],
    ["Música lenta…", "Me muevo despacio"],
    ["Música suave…", "De puntillas, como un ratón"],
    ["¿Cómo muestro que estoy contento?", "Salto y sonrío"],
    ["En las estatuas, sin música…", "Me quedo quieto"],
  ],
  familias: [
    "Poned música mientras recogéis y bailad un ratito juntos.",
    "Jugad a las estatuas y a «el director»: uno se mueve y los demás imitan.",
    "Escuchad músicas distintas (clásica, flamenco, rock) y moveos como os hagan sentir.",
    "Preguntadle qué siente con cada canción y cómo lo bailaría.",
  ],
  profesores: PROF("Lenguaje y expresión corporal: el cuerpo como medio de expresión y comunicación, movimiento libre y dirigido con música, cualidades del sonido (velocidad e intensidad)", ["Juego de estatuas y de imitación en espejo.", "Danzas del mundo sencillas en corro.", "Expresión de emociones con música y pañuelos."]),
});
