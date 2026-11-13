// Infantil 5 años · Descubrimiento y exploración del entorno: quitar, la resta.
const { mapa } = require("./_util");
const { manos, ic, vin, mural, t, fila, flecha, FUENTES, PROF, DE, vid, nota } = require("./_inf5a");

// Resta con dibujos: n dibujos y los k últimos tachados.
const resta = (label, d, n, k, s = 0.7, sep = 30) => vin(label, `${[...Array(n)].map((_, i) => { const x = 130 + (i - (n - 1) / 2) * sep; return ic(d, x.toFixed(1), 66, s) + (i >= n - k ? `<path d="M${(x - 14).toFixed(1)} 52 l28 28 M${(x + 14).toFixed(1)} 52 l-28 28" stroke="var(--red)" stroke-width="4" stroke-linecap="round"/>` : ""); }).join("")}${t(130, 140, `${n} − ${k} = ${n - k}`, { size: 30, color: "var(--ink)" })}`);

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "5-anos",
  titulo: "Quitar: la resta",
  minutos: 15,
  objetivos: ["Entender que restar es quitar", "Restar con objetos y con los dedos hasta 10", "Conocer el signo −"],
  claves: ["restar", "quitar", "menos", "quedan", "igual"],
  pregunta: { texto: "Tienes 5 galletas y te comes 2. ¿Cuántas te quedan?", respuesta: "Quitamos 2: <mark>quedan 3 galletas</mark>." },
  bloques: [
    {
      html: `<h3>Restar es quitar</h3><p>En el plato hay cinco manzanas. Me como dos. ¿Cuántas <mark>quedan</mark>?</p><p>Quito las que me he comido y cuento las que quedan: ¡tres! <b>Restar</b> es quitar.</p>`,
      svg: resta("Cinco manzanas, dos tachadas: quedan tres", "manzana", 5, 2),
    },
    {
      html: `<h3>El signo −</h3><p>Para escribir una resta usamos el signo <mark>−</mark>, que se lee «menos».</p><p><b>5 − 2 = 3</b> se lee: cinco menos dos igual a tres. Es una rayita pequeña, sin palo.</p>`,
      svg: vin("El signo menos es una rayita: cinco menos dos igual a tres", `<rect x="40" y="26" width="180" height="70" rx="14" fill="var(--card)" stroke="var(--red)" stroke-width="3"/>${t(130, 76, "−", { size: 54, color: "var(--red)" })}${t(130, 148, "5 − 2 = 3", { size: 30, color: "var(--ink)" })}`, ""),
    },
    {
      html: `<h3>Restar con los dedos</h3><p>Levanto <mark>seis dedos</mark>. Bajo dos.</p><p>Cuento los que siguen levantados: cuatro. <b>6 − 2 = 4</b>. ¡Los dedos son muy buenos para restar!</p>`,
      svg: vin("Levanto seis dedos, bajo dos y quedan cuatro", `${manos(4, 0, 130, 70, 1.9)}${t(130, 30, "levanto 6, bajo 2", { size: 16, color: "var(--muted)" })}${t(130, 154, "6 − 2 = 4", { size: 28, color: "var(--ink)" })}`),
    },
    {
      html: `<h3>Cuando quitamos, hay menos</h3><p>Al restar, el número que queda es <mark>más pequeño</mark>: siempre hay menos que al principio.</p><p>Si quito <b>todo</b>, no queda nada: <b>cero</b>. 3 − 3 = 0.</p>`,
      svg: vin("Tres globos que se escapan: no queda ninguno, cero", `${fila("globo", 3, 130, 50, 0.9, 40)}<path d="M130 80 V110" stroke="var(--muted)" stroke-width="3"/><path d="M122 102 L130 112 L138 102" stroke="var(--muted)" stroke-width="3" fill="none"/>${t(130, 150, "3 − 3 = 0", { size: 28, color: "var(--ink)" })}`, "Se van volando"),
    },
    {
      html: `<h3>¿Para qué sirve? Saber cuántos quedan</h3><p>Restamos para saber <mark>cuántos quedan</mark>: cuántos caramelos me quedan si regalo uno, cuántos niños hay si se van dos…</p><p>¡Restar nos ayuda a repartir y a compartir!</p>`,
      svg: resta("Cuatro caramelos, regalo uno: quedan tres", "caramelo", 4, 1),
    },
    {
      html: `<h3>Juego: los bolos</h3><p>Pon <mark>diez botellas</mark> de plástico de pie. Tira una pelota.</p><p>Cuenta las botellas que has tirado y las que quedan de pie. 10 menos las caídas: ¿cuántas quedan?</p>`,
      svg: vin("Diez botellas como bolos y una pelota: algunas caídas", `${[...Array(7)].map((_, i) => ic("botella", 40 + i * 26, 90, 0.75)).join("")}${[0, 1, 2].map((i) => `<g transform="translate(${70 + i * 40} 146) rotate(90)">${ic("botella", 0, 0, 0.7)}</g>`).join("")}${ic("pelota", 226, 140, 0.8)}${t(130, 28, "10 − 3 = 7", { size: 22, color: "var(--pen)" })}`),
    },
  ],
  figura: {
    titulo: "Restar es quitar",
    svg: mural("Mural: tengo, quito, quedan y el signo menos", [["manzana", "tengo", "5 manzanas", "var(--pen)"], ["boca", "quito", "me como 2", "var(--red)"], ["manzana", "quedan", "3 manzanas", "var(--leaf)"], ["caramelo", "− menos", "5 − 2 = 3", "var(--inf)"]]),
  },
  video: vid("dxBUiU0J9sg", "Restas para niños: aprende a restar con dinosaurios", "Smile and Learn - Español", 2707598, "restas para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Hay 7 patos en el estanque. Se van 3. ¿Cuántos quedan?", pasos: ["Ponemos 7 piezas.", "Quitamos 3 piezas.", "Contamos las que quedan: 1, 2, 3, 4."], resultado: "7 − 3 = 4 patos." },
    { enunciado: "¿Cuánto es 8 − 1?", pasos: ["Levantamos 8 dedos.", "Bajamos 1.", "Contamos los que quedan: 7."], resultado: "8 − 1 = 7." },
  ],
  errores: [
    "Contar las cosas que se quitan en vez de las que quedan.",
    "Confundir el signo − con el +: el − no tiene palo.",
    "Pensar que al restar sale un número más grande.",
  ],
  ejercicios: [
    { q: "Pon 5 galletas y cómete 1. ¿Cuántas quedan?", sol: nota("4. Con comida de verdad, la resta tiene premio.") },
    { q: "Con los dedos: 6 − 3.", sol: nota("3. Primero levanta 6 y después baja 3.") },
    { q: "Juega a los bolos con botellas y cuenta las que quedan.", sol: nota("anotad cada tirada con palitos.") },
    { q: "Dibuja 4 globos y tacha 2. ¿Cuántos quedan?", sol: nota("2. Que tache con una cruz grande.") },
    { q: "Canta «Cinco lobitos» quitando un dedo cada vez.", sol: nota("cualquier canción de cuenta atrás sirve para restar de uno en uno.") },
    { q: "Escribe con tu familia: 5 − 5 =", sol: nota("0. Hablad de qué significa «no queda nada».") },
  ],
  quiz: [
    { q: "Restar es…", o: ["quitar", "juntar", "pintar"], a: 0, e: "Quitar." },
    { q: "4 − 1 =", o: ["3", "5", "4"], a: 0, e: "Tres." },
    { q: "El signo − se lee…", o: ["menos", "más", "igual"], a: 0, e: "Menos." },
    { q: "5 − 2 =", o: ["3", "7", "2"], a: 0, e: "Tres." },
    { q: "Si quito todo, quedan…", o: ["0", "10", "1"], a: 0, e: "Cero." },
    { q: "Al restar, el número final es…", o: ["más pequeño", "más grande", "igual siempre"], a: 0, e: "Más pequeño." },
  ],
  examen: [
    { q: "6 − 1 =", o: ["5", "7", "6"], a: 0, e: "Cinco." },
    { q: "Tengo 3 caramelos y regalo 2. Me queda…", o: ["1", "5", "3"], a: 0, e: "Uno." },
    { q: "¿Cuál es una resta?", o: ["4 − 2", "4 + 2", "4 = 4"], a: 0, e: "La del signo −." },
  ],
  feynman: ["Qué es restar", "Qué significa el signo −", "Cómo resto con los dedos"],
  mapa: mapa("RESTAR", "var(--pen)", [
    ["Quitar", "y contar lo que queda", "var(--red)"],
    ["Signo −", "se lee «menos»", "var(--inf)"],
    ["Con los dedos", "6 − 2 = 4", "var(--leaf)"],
    ["Quito todo", "queda 0", "var(--pen)"],
  ], 220),
  tarjetas: [
    ["Restar es…", "Quitar"],
    ["− se lee…", "Menos"],
    ["5 − 1 =", "4"],
    ["4 − 2 =", "2"],
    ["7 − 3 =", "4"],
    ["3 − 3 =", "0"],
  ],
  familias: [
    "Contad cuántas galletas o frutas quedan después de comer algunas.",
    "Cantad canciones de cuenta atrás: «Cinco lobitos», «Diez en la cama».",
    "Jugad a los bolos con botellas y contad las que quedan de pie.",
    "Usad «quitar» y «quedan» en el día a día: al recoger, al repartir.",
  ],
  profesores: PROF(DE, "Diálogo corporal con el entorno y exploración creativa: situaciones de quitar y separar con material manipulativo, iniciación al signo − con cantidades hasta 10", ["Dramatizar: se van niños del tren y contamos los que quedan.", "Bolos en el patio con registro de los que quedan en pie.", "Tarjetas con dibujos tachados para relacionar con su resta."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
