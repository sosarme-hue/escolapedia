// Ciencias de la Naturaleza 2º de Primaria: el agua y sus estados. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, hielo, vapor, olla, gota, nube, lluvia, copo, sol, monte, mar, rio, vaso, chip, flechaR, tick, equis, termometro, nino, suelo, hierba, pez, planta } = require("./_pri2b");

const grifo = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-30 -10 H6 q10 0 10 10 V8" stroke="#9aa3b5" stroke-width="10" fill="none" stroke-linecap="round"/><rect x="-14" y="-24" width="10" height="12" rx="2" fill="var(--red)"/></g>`;
const charco = (x, y, w = 40) => `<ellipse cx="${x}" cy="${y}" rx="${w}" ry="${w * 0.22}" fill="var(--water)" opacity=".6"/>`;

module.exports = tema({
  materia: "Ciencias de la Naturaleza",
  titulo: "El agua y sus estados",
  objetivos: ["Conocer los tres estados del agua: sólido, líquido y gaseoso", "Explicar cómo el calor y el frío cambian el estado del agua", "Entender el ciclo del agua y la importancia de ahorrarla"],
  claves: ["sólido", "líquido", "gaseoso", "hielo", "vapor", "evaporación", "ciclo del agua"],
  pregunta: {
    texto: "Dejas un cubito de hielo en un plato al sol. ¿Qué encuentras un rato después? ¿Y si esperas todo el día?",
    respuesta: "Primero, el hielo se <mark>derrite</mark> y queda agua líquida. Si esperas más, el agua se <mark>evapora</mark> y se va al aire como vapor. ¡Es la misma agua en tres <b>estados</b>!",
  },
  bloques: [
    {
      html: `<h3>El agua está en todas partes</h3><p>El agua está en los <mark>mares, ríos, lagos, nubes</mark> y bajo la tierra. ¡Casi toda la Tierra está cubierta de agua!</p><p>El agua del mar es <b>salada</b>. El agua de los ríos y la lluvia es <b>dulce</b>. Todos los seres vivos necesitan agua: las personas, los animales y las plantas.</p>`,
      svg: svg("Una montaña con nieve, un río, el mar y una nube", `${nube(60, 34, 1.2)}${lluvia(60, 50, 4)}${monte(70, 120, 110, 80)}${rio(124)}${mar(120, 50)}${pez(210, 156, 0.7, "var(--inf)")}${txt(200, 112, "mar", "var(--water)", 14)}${txt(140, 34, "agua", "var(--water)", 18)}`),
    },
    {
      html: `<h3>Agua líquida</h3><p>El agua que bebemos es <mark>líquida</mark>. El agua líquida <b>no tiene forma propia</b>: toma la forma del recipiente donde la echamos.</p><p>En un vaso tiene forma de vaso. En una botella, forma de botella. Si se derrama, se esparce por el suelo. ¡Y la podemos pasar de un sitio a otro!</p>`,
      svg: svg("La misma agua en un vaso, en una botella y derramada", `${vaso(50, 100)}<g transform="translate(130 120)"><path d="M-6 -60 H6 V-48 q14 6 14 18 V0 H-14 V-30 q0 -12 14 -18z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-13 -24 H13 V-1 H-13Z" fill="var(--water)" opacity=".7"/></g>${charco(212, 120, 34)}${chip(130, 158, 90, "líquido", "var(--water)", 14)}`),
    },
    {
      html: `<h3>Agua sólida: el hielo</h3><p>Cuando el agua se enfría mucho, se convierte en <mark>hielo</mark>. El hielo es agua <b>sólida</b>.</p><p>El hielo es duro y tiene <b>forma propia</b>: un cubito sigue siendo un cubito aunque lo cambies de vaso. La <b>nieve</b> y el granizo también son agua sólida. Pasar de líquido a sólido se llama <b>congelar</b>.</p>`,
      svg: svg("Cubitos de hielo, un copo de nieve y un termómetro frío", `${hielo(52, 76, 26)}${hielo(96, 96, 20)}${copo(168, 70, 16)}${copo(196, 110, 10)}${termometro(236, 130, 0.15, "var(--water)")}${chip(110, 160, 90, "sólido", "var(--pen)", 14)}${txt(236, 166, "frío", "var(--water)", 13)}`),
    },
    {
      html: `<h3>Agua gaseosa: el vapor</h3><p>Cuando el agua se calienta mucho, se convierte en <mark>vapor de agua</mark>. El vapor es agua en estado <b>gaseoso</b>.</p><p>El vapor sale de la olla cuando hierve el agua. Casi siempre es <b>invisible</b> y se mezcla con el aire. Pasar de líquido a gas se llama <b>evaporar</b>. ¡Cuidado, el vapor quema!</p>`,
      svg: svg("Una olla con agua hirviendo de la que sale vapor", `${vapor(100, 84)}${vapor(124, 80)}${olla(112, 126)}${termometro(212, 140, 0.85, "var(--red)")}${chip(112, 166, 90, "gas", "var(--muted)", 14)}${txt(212, 30, "calor", "var(--red)", 14)}`),
    },
    {
      html: `<h3>Cambios de estado</h3><p>El agua cambia de estado con el <mark>calor</mark> y el <mark>frío</mark>.</p><p>Si calentamos el hielo, se <b>derrite</b> (se funde) y pasa a líquido. Si calentamos el líquido, se <b>evapora</b> y pasa a vapor. Si enfriamos el vapor, se <b>condensa</b> y vuelve a ser líquido: por eso se empaña el espejo del baño. Y si enfriamos el líquido, se <b>congela</b>.</p>`,
      svg: svg("Hielo, agua y vapor con flechas de calor y de frío", `${hielo(36, 80, 22)}${vaso(130, 92)}${vapor(224, 98)}${flechaR(66, 66, 110, 66, "var(--red)")}${flechaR(150, 66, 200, 66, "var(--red)")}${flechaR(200, 124, 150, 124, "var(--water)")}${flechaR(110, 124, 66, 124, "var(--water)")}${txt(88, 52, "calor", "var(--red)", 12)}${txt(175, 52, "calor", "var(--red)", 12)}${txt(88, 142, "frío", "var(--water)", 12)}${txt(175, 142, "frío", "var(--water)", 12)}${txt(36, 166, "sólido", "var(--pen)", 13)}${txt(130, 166, "líquido", "var(--water)", 13)}${txt(224, 166, "gas", "var(--muted)", 13)}`),
    },
    {
      html: `<h3>El ciclo del agua</h3><p>El agua de la Tierra <mark>da vueltas sin parar</mark>. El sol calienta el agua del mar y se <b>evapora</b>.</p><p>Arriba hace frío y el vapor se <b>condensa</b> en gotitas que forman las <b>nubes</b>. Cuando las gotas pesan, caen como <b>lluvia</b> o nieve. El agua llega a los ríos, que la llevan otra vez al mar. ¡Y vuelta a empezar!</p>`,
      svg: svg("El ciclo del agua: el sol evapora el mar, se forman nubes, llueve y el río vuelve al mar", `${sol(30, 30, 12)}${mar(130, 40)}${monte(60, 136, 100, 60)}${nube(170, 34, 1.1)}${lluvia(80, 54, 4)}<path d="M200 118 V70" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4"/>${flechaR(214, 118, 214, 70, "var(--red)")}${flechaR(140, 34, 104, 34, "var(--muted)")}<path d="M76 136 q20 -2 40 4" stroke="var(--water)" stroke-width="4" fill="none"/>${txt(234, 96, "sube", "var(--red)", 11)}${txt(60, 76, "llueve", "var(--water)", 11)}`),
      video: V("76dw3ZRFGNQ"),
    },
    {
      html: `<h3>Agua para vivir</h3><p>Sin agua <mark>no hay vida</mark>. Las personas necesitamos beber agua todos los días. Las plantas la toman de la tierra y los animales beben en ríos y charcas.</p><p>También usamos el agua para <b>lavarnos</b>, cocinar, limpiar y regar los campos. El agua que sale del grifo llega por tuberías y antes la han <b>limpiado</b> para que sea potable.</p>`,
      svg: svg("Un grifo llena un vaso; una niña bebe y una planta se riega", `${grifo(60, 50)}${[0, 1].map((i) => gota(76, 72 + i * 14, 0.6)).join("")}${vaso(76, 118)}${suelo(158)}${nino(150, 158, { nina: true, c: "var(--red)", pose: "canta" })}${planta(222, 158, 1, true)}${gota(200, 104, 0.7)}`),
    },
    {
      html: `<h3>¿Para qué sirve? Ahorrar agua</h3><p>El agua dulce es <mark>un tesoro</mark>: hay poca y no hay que gastarla.</p><p>Cierra el grifo mientras te lavas los dientes. Dúchate en vez de bañarte. Avisa si ves un grifo que gotea. Y no tires basura a los ríos ni al mar: el agua sucia hace daño a los peces y a las plantas.</p>`,
      svg: svg("Un grifo cerrado mientras se lava los dientes y un grifo que gotea", `${grifo(70, 60)}${tick(118, 70)}<g transform="translate(70 120)"><rect x="-30" y="-4" width="44" height="8" rx="4" fill="var(--pen)"/><rect x="10" y="-10" width="18" height="8" rx="2" fill="#fff" stroke="var(--line)"/></g>${grifo(200, 60)}${gota(216, 82, 0.6)}${gota(216, 100, 0.6)}${equis(240, 70)}${txt(70, 160, "grifo cerrado", "var(--ok)", 13)}${txt(200, 160, "¡avisa si gotea!", "var(--red)", 13)}`),
    },
    {
      html: `<h3>Juego: ¿en qué estado está?</h3><p>Mira cada cosa y di si el agua está <mark>sólida, líquida o gaseosa</mark>.</p><p>Un muñeco de nieve: <b>sólida</b>. Un charco: <b>líquida</b>. La nube de la ducha caliente: vapor que se condensa. Un polo de hielo: <b>sólida</b>. La lluvia: <b>líquida</b>. ¡Muy bien!</p>`,
      svg: svg("Un muñeco de nieve, un charco y el vapor de una taza", `${suelo(150)}<g><circle cx="52" cy="128" r="22" fill="#fff" stroke="var(--line)" stroke-width="2"/><circle cx="52" cy="92" r="15" fill="#fff" stroke="var(--line)" stroke-width="2"/><circle cx="47" cy="89" r="2" fill="#1b2235"/><circle cx="57" cy="89" r="2" fill="#1b2235"/><path d="M52 94 l10 3 l-10 2z" fill="var(--inf)"/></g>${charco(130, 146, 36)}<g transform="translate(212 136)"><rect x="-16" y="-18" width="32" height="30" rx="4" fill="var(--red)"/><path d="M16 -10 q12 0 12 10 q0 10 -12 10" stroke="var(--red)" stroke-width="4" fill="none"/></g>${vapor(212, 112)}${chip(52, 170, 66, "sólida", "var(--pen)", 12)}${chip(130, 170, 66, "líquida", "var(--water)", 12)}${chip(212, 170, 66, "gas", "var(--muted)", 12)}`),
    },
  ],
  figura: {
    titulo: "Los tres estados del agua",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Sólido: hielo. Líquido: agua. Gaseoso: vapor. El calor y el frío cambian el estado">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${hielo(100, 80, 50)}
      <g transform="translate(320 140) scale(2)"><path d="M-12 -18 L12 -18 L9 16 H-9Z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-10 -6 L10 -6 L8.5 14 H-8.5Z" fill="var(--water)" opacity=".7"/></g>
      <g transform="translate(540 160) scale(2)">${vapor(0, 0)}</g>
      ${flechaR(180, 110, 250, 110, "var(--red)")}${flechaR(390, 110, 460, 110, "var(--red)")}${flechaR(460, 150, 390, 150, "var(--water)")}${flechaR(250, 150, 180, 150, "var(--water)")}
      ${rot(215, 96, "calor", { size: 14, color: "var(--red)" })}${rot(425, 96, "calor", { size: 14, color: "var(--red)" })}${rot(215, 172, "frío", { size: 14, color: "var(--water)" })}${rot(425, 172, "frío", { size: 14, color: "var(--water)" })}
      ${[["Sólido", "hielo", 110], ["Líquido", "agua", 320], ["Gaseoso", "vapor", 540]].map(([t, d, x]) => rot(x, 222, t, { size: 22, color: "var(--pen)", w: 800 }) + rot(x, 246, d, { size: 15, color: "var(--muted)" })).join("")}
    </svg>`,
  },
  video: V("JXv643OKCB4", "estados del agua para niños"),
  ejemplos: [
    { enunciado: "Un polo se derrite en la mano. ¿Qué cambio de estado es?", pasos: ["El polo es hielo: agua sólida.", "La mano está caliente y le da calor.", "Pasa de sólido a líquido."], resultado: "se funde (se derrite)." },
    { enunciado: "La ropa mojada se seca en el tendedero. ¿A dónde va el agua?", pasos: ["El sol y el aire calientan la ropa.", "El agua líquida se convierte en vapor.", "El vapor se va al aire."], resultado: "se evapora y se va al aire." },
    { enunciado: "¿Por qué se empaña el espejo del baño después de la ducha?", pasos: ["La ducha caliente hace mucho vapor.", "El vapor toca el espejo, que está frío.", "El vapor se enfría y se convierte en gotitas."], resultado: "el vapor se condensa en gotas." },
  ],
  errores: [
    "Pensar que el hielo y el agua son cosas distintas: son la misma agua en otro estado.",
    "Creer que el agua desaparece cuando se seca un charco: se evapora y va al aire.",
    "Decir que el humo blanco de la olla es humo: son gotitas de agua.",
    "Pensar que el agua del mar se puede beber: es salada.",
  ],
  ejercicios: [
    { q: "Escribe los tres estados del agua.", sol: "Sólido, líquido y gaseoso." },
    { q: "¿En qué estado está el hielo?", sol: "Sólido." },
    { q: "¿Qué le pasa al hielo si lo calentamos?", sol: "Se derrite y pasa a líquido." },
    { q: "¿Qué le pasa al agua si la ponemos en el congelador?", sol: "Se congela y se hace hielo." },
    { q: "¿Cómo se llama el agua en estado gaseoso?", sol: "Vapor de agua." },
    { q: "Ordena el ciclo del agua: lluvia, nubes, evaporación, río.", sol: "Evaporación, nubes, lluvia y río (que vuelve al mar)." },
    { q: "Di tres sitios donde hay agua en la naturaleza.", sol: "Por ejemplo: el mar, los ríos y las nubes." },
    { q: "Di tres usos del agua en casa.", sol: "Beber, ducharse y cocinar (también limpiar y regar)." },
    { q: "Escribe dos formas de ahorrar agua.", sol: "Cerrar el grifo al lavarse los dientes y ducharse en vez de bañarse." },
    { q: "Pon un cubito en un plato y mira qué pasa en 30 minutos.", sol: "El hielo se derrite y queda agua líquida." },
  ],
  quiz: [
    { q: "El hielo es agua…", o: ["sólida", "líquida", "gaseosa"], a: 0, e: "Es dura y tiene forma propia." },
    { q: "El agua del grifo es…", o: ["sólida", "líquida", "gaseosa"], a: 1, e: "Toma la forma del vaso." },
    { q: "El vapor es agua…", o: ["sólida", "líquida", "gaseosa"], a: 2, e: "Se mezcla con el aire." },
    { q: "Con calor, el hielo…", o: ["se derrite", "se hace más duro", "no cambia"], a: 0, e: "Pasa a líquido." },
    { q: "Con mucho frío, el agua…", o: ["se evapora", "se congela", "se calienta"], a: 1, e: "Se hace hielo." },
    { q: "Las nubes están hechas de…", o: ["algodón", "gotitas de agua", "humo"], a: 1, e: "El vapor se condensa en gotitas." },
    { q: "El agua del mar es…", o: ["dulce", "salada", "de chocolate"], a: 1, e: "No se puede beber." },
    { q: "Cuando un charco se seca, el agua…", o: ["desaparece", "se evapora", "se congela"], a: 1, e: "Se va al aire como vapor." },
    { q: "Para ahorrar agua…", o: ["cierro el grifo", "dejo el grifo abierto", "me baño siempre"], a: 0, e: "El agua es un tesoro." },
    { q: "La nieve es agua…", o: ["sólida", "gaseosa", "salada"], a: 0, e: "Son copos de hielo." },
  ],
  examen: [
    { q: "¿Cuántos estados tiene el agua?", o: ["Uno", "Dos", "Tres"], a: 2, e: "Sólido, líquido y gaseoso." },
    { q: "El agua que se calienta mucho se convierte en…", o: ["hielo", "vapor", "nieve"], a: 1, e: "Se evapora." },
    { q: "En el ciclo del agua, después de las nubes viene…", o: ["la lluvia", "la evaporación", "el hielo"], a: 0, e: "Las gotas caen." },
    { q: "El agua líquida…", o: ["toma la forma del recipiente", "tiene forma propia", "no se puede mover"], a: 0, e: "No tiene forma propia." },
  ],
  feynman: ["Los tres estados del agua", "Qué hacen el calor y el frío con el agua", "El ciclo del agua"],
  mapaT: ["EL AGUA", [
    ["Sólido", "hielo · nieve · granizo", "var(--pen)"],
    ["Líquido", "ríos · mar · lluvia", "var(--water)"],
    ["Gaseoso", "vapor de agua", "var(--muted)"],
    ["Ciclo", "evapora · nube · llueve", "var(--leaf)"],
  ]],
  tarjetas: [
    ["Tres estados del agua", "Sólido, líquido y gaseoso"],
    ["Agua sólida", "Hielo y nieve"],
    ["Agua gaseosa", "Vapor de agua"],
    ["Del hielo al agua líquida", "Se funde (se derrite)"],
    ["Del agua líquida al vapor", "Se evapora"],
    ["Del agua líquida al hielo", "Se congela"],
    ["¿De qué son las nubes?", "De gotitas de agua"],
    ["¿Cómo ahorro agua?", "Cerrando el grifo"],
  ],
  familias: [
    "Haced cubitos con agua de colores y mirad juntos cómo se derriten al sol.",
    "Al cocinar, observad desde lejos el vapor de la olla y explicad qué es.",
    "Después de la ducha, dibujad en el espejo empañado y hablad de la condensación.",
    "Poned un vaso medidor bajo el grifo mientras os laváis los dientes para ver cuánta agua se pierde.",
  ],
  saberes: "Materia y sus cambios: el agua, sus estados (sólido, líquido y gaseoso), los cambios de estado por el calor y el frío, el ciclo del agua y su uso responsable",
  ideas: ["Experimento con cubitos en distintos lugares de la clase para ver cuál se funde antes.", "Ciclo del agua en una bolsa con cierre pegada a la ventana.", "Mural de consejos para ahorrar agua en el cole."],
});
