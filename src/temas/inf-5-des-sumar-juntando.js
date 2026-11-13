// Infantil 5 años · Descubrimiento y exploración del entorno: sumar juntando.
const { mapa } = require("./_util");
const { manos, ic, vin, mural, t, fila, flecha, FUENTES, PROF, DE, vid, nota } = require("./_inf5a");

// Suma con dibujos: a dibujos + b dibujos = total.
const suma = (label, d, a, b, d2 = d) => vin(label, `${fila(d, a, 46, 64, 0.55, 22)}${t(98, 72, "+", { size: 30, color: "var(--muted)" })}${fila(d2, b, 150, 64, 0.55, 22)}${t(204, 72, "=", { size: 30, color: "var(--muted)" })}${t(232, 74, String(a + b), { size: 34, color: "var(--red)" })}${t(46, 126, String(a), { size: 28, color: "var(--pen)" })}${t(98, 126, "+", { size: 24, color: "var(--muted)" })}${t(150, 126, String(b), { size: 28, color: "var(--leaf)" })}${t(204, 126, "=", { size: 24, color: "var(--muted)" })}${t(232, 126, String(a + b), { size: 28, color: "var(--red)" })}`);

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "5-anos",
  titulo: "Sumar juntando",
  minutos: 15,
  objetivos: ["Entender que sumar es juntar", "Sumar con objetos y con los dedos hasta 10", "Conocer los signos + y ="],
  claves: ["sumar", "juntar", "más", "igual", "total"],
  pregunta: { texto: "Tienes 3 caramelos y te dan 2 más. ¿Cuántos tienes ahora?", respuesta: "Juntamos: 3 y 2 son <mark>5 caramelos</mark>." },
  bloques: [
    {
      html: `<h3>Sumar es juntar</h3><p>Tengo dos pelotas. Mi amigo trae tres más. Si las <mark>juntamos</mark>, ¿cuántas hay?</p><p>Contamos todas: ¡cinco! <b>Sumar</b> es juntar cosas y contar cuántas hay en total.</p>`,
      svg: vin("Dos pelotas y tres pelotas se juntan: cinco pelotas", `${fila("pelota", 2, 56, 50, 0.7, 30)}${fila("pelota", 3, 196, 50, 0.7, 30)}<path d="M70 76 Q100 104 118 112 M182 76 Q160 104 142 112" stroke="var(--muted)" stroke-width="3" fill="none"/>${fila("pelota", 5, 130, 134, 0.7, 30)}${t(130, 172, "¡cinco!", { size: 20, color: "var(--red)" })}`),
    },
    {
      html: `<h3>Los signos + e =</h3><p>Para escribir una suma usamos dos signos. El <mark>+</mark> se lee «más». El <mark>=</mark> se lee «igual».</p><p><b>2 + 3 = 5</b> se lee: dos más tres igual a cinco.</p>`,
      svg: suma("Dos estrellas más tres estrellas igual a cinco", "estrella", 2, 3),
    },
    {
      html: `<h3>Sumar con los dedos</h3><p>Podemos sumar con los <mark>dedos</mark>. Levanto cuatro dedos en una mano y dos en la otra.</p><p>Cuento todos los dedos levantados: uno, dos… seis. <b>4 + 2 = 6</b>.</p>`,
      svg: vin("Dos manos: cuatro dedos y dos dedos, seis en total", `${manos(4, 2, 130, 80, 1.9)}${t(130, 160, "4 + 2 = 6", { size: 28, color: "var(--ink)" })}`),
    },
    {
      html: `<h3>Seguir contando</h3><p>Un truco: digo el número <mark>más grande</mark> y sigo contando.</p><p>5 + 2: digo «cinco» y sigo: <b>seis, siete</b>. ¡Siete! Así no hace falta contar todo desde el uno.</p>`,
      svg: vin("Empiezo en cinco y sigo contando seis, siete", `<rect x="16" y="50" width="80" height="60" rx="12" fill="var(--pen)"/>${t(56, 92, "5", { size: 38, color: "#ffffff" })}${flecha(102, 80, 132)}${t(160, 90, "6", { size: 30, color: "var(--leaf)" })}${t(214, 90, "7", { size: 36, color: "var(--red)" })}<path d="M146 60 q14 -20 28 0 M200 60 q14 -20 28 0" stroke="var(--muted)" stroke-width="2.5" fill="none"/>${t(130, 150, "5 + 2 = 7", { size: 24, color: "var(--ink)" })}`),
    },
    {
      html: `<h3>¿Para qué sirve? Sumar cada día</h3><p>Sumamos sin darnos cuenta: <mark>cuántos</mark> vamos a cenar si llega la abuela, cuántos cromos tengo con los nuevos…</p><p>Sumar nos ayuda a saber cuántas cosas hay en total.</p>`,
      svg: suma("Tres platos y uno más para la abuela: cuatro", "sopa", 3, 1),
    },
    {
      html: `<h3>Juego: la caja de sumar</h3><p>Pon <mark>dos montones</mark> de botones o piezas en la mesa.</p><p>Cuenta cada montón. Ahora mételos juntos en una caja y cuenta todos. ¿Cuántos hay? Cambiad los montones y repetid.</p>`,
      svg: vin("Dos montones de piezas que se meten en una caja", `${fila("juguete", 3, 60, 56, 0.6, 28)}${fila("juguete", 2, 200, 56, 0.6, 28)}${flecha(60, 86, 100)}<path d="M200 86 H160 M167 80 L160 86 L167 92" stroke="var(--muted)" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M90 104 H170 L162 160 H98z" fill="var(--sun)" opacity=".7" stroke="var(--ink)" stroke-width="2"/>${t(130, 142, "3 + 2 = ?", { size: 18, color: "var(--ink)", max: 70 })}`),
    },
  ],
  figura: {
    titulo: "Sumar es juntar",
    svg: mural("Mural: juntar cosas, el signo más, el signo igual y contar el total", [["pelota", "junto", "cosas", "var(--pen)"], ["estrella", "+ más", "2 + 3", "var(--leaf)"], ["estrella", "= igual", "2 + 3 = 5", "var(--inf)"], ["mano", "cuento", "todas juntas", "var(--red)"]]),
  },
  video: vid("rXF5yQ7HYVQ", "Canción sumando los números del 1 al 10", "Doremila", 1958445, "canción sumar niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "En el árbol hay 4 pájaros. Llegan 3 más. ¿Cuántos hay?", pasos: ["Ponemos 4 piezas para los pájaros que había.", "Añadimos 3 piezas más.", "Contamos todas: 1, 2, 3, 4, 5, 6, 7."], resultado: "4 + 3 = 7 pájaros." },
    { enunciado: "¿Cuánto es 6 + 2?", pasos: ["Decimos el número grande: seis.", "Seguimos contando dos más con los dedos: siete, ocho.", "Nos quedamos en el ocho."], resultado: "6 + 2 = 8." },
  ],
  errores: [
    "Contar solo un montón y olvidar el otro.",
    "Confundir el signo + con el signo =.",
    "Al seguir contando, repetir el número de partida: 5 + 2 es «seis, siete», no «cinco, seis».",
  ],
  ejercicios: [
    { q: "Junta 3 cucharas y 2 cucharas. ¿Cuántas hay?", sol: nota("5. Usad cosas de verdad: es más fácil que en papel.") },
    { q: "Con los dedos: 4 + 1.", sol: nota("5. Primero levanta 4, después 1, y cuenta todos.") },
    { q: "Tira dos dados y suma los puntos.", sol: nota("empezad con un solo dado y un número pequeño.") },
    { q: "Dibuja 2 flores y 4 flores. ¿Cuántas hay?", sol: nota("6. Que cuente tachando cada flor.") },
    { q: "En el autobús van 5 niños y suben 2. ¿Cuántos van ahora?", sol: nota("7. Podéis representarlo con muñecos.") },
    { q: "Escribe con tu familia: 3 + 3 =", sol: nota("6. Que haga los signos + e = grandes.") },
  ],
  quiz: [
    { q: "Sumar es…", o: ["juntar", "quitar", "romper"], a: 0, e: "Juntar." },
    { q: "2 + 2 =", o: ["4", "2", "5"], a: 0, e: "Cuatro." },
    { q: "El signo + se lee…", o: ["más", "menos", "igual"], a: 0, e: "Más." },
    { q: "3 + 1 =", o: ["4", "3", "2"], a: 0, e: "Cuatro." },
    { q: "5 + 2 =", o: ["7", "3", "6"], a: 0, e: "Siete." },
    { q: "Al sumar, el número final es…", o: ["más grande", "más pequeño", "cero"], a: 0, e: "Más grande: hemos juntado." },
  ],
  examen: [
    { q: "1 + 4 =", o: ["5", "3", "4"], a: 0, e: "Cinco." },
    { q: "Tengo 2 globos y me dan 2 más. Tengo…", o: ["4", "2", "0"], a: 0, e: "Cuatro." },
    { q: "El signo = se lee…", o: ["igual", "más", "quitar"], a: 0, e: "Igual." },
  ],
  feynman: ["Qué es sumar", "Qué significan + e =", "Cómo sumo con los dedos"],
  mapa: mapa("SUMAR", "var(--pen)", [
    ["Juntar", "y contar todo", "var(--pen)"],
    ["Signos", "+ más · = igual", "var(--leaf)"],
    ["Con los dedos", "4 + 2 = 6", "var(--inf)"],
    ["Truco", "sigo contando", "var(--red)"],
  ], 220),
  tarjetas: [
    ["Sumar es…", "Juntar"],
    ["+ se lee…", "Más"],
    ["= se lee…", "Igual"],
    ["2 + 3 =", "5"],
    ["4 + 4 =", "8"],
    ["5 + 1 =", "6"],
  ],
  familias: [
    "Plantead sumas con cosas reales: «tienes 2 galletas, te doy 1, ¿cuántas tienes?».",
    "Jugad a juegos con dos dados.",
    "Usad los dedos sin miedo: es su primera calculadora.",
    "Dejad el papel para el final: primero tocar, después dibujar, al final escribir.",
  ],
  profesores: PROF(DE, "Diálogo corporal con el entorno y exploración creativa: situaciones de añadir y juntar con material manipulativo, iniciación a los signos + e = con resultados hasta 10", ["Problemas dramatizados en la asamblea: suben niños al «autobús».", "Regletas o cubos encajables para juntar dos cantidades.", "Dominó y dados para sumar puntos."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
