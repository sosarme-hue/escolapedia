// Infantil 4 años · Descubrimiento y exploración del entorno: el agua.
const { marco, dibujos, lista, ic, t, sol, nube, flechaR, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "4-anos",
  titulo: "El agua",
  minutos: 15,
  objetivos: ["Saber para qué usamos el agua", "Ver que el agua puede ser líquida, hielo o vapor", "Aprender a no malgastarla"],
  claves: ["agua", "lluvia", "hielo", "vapor", "ahorrar"],
  pregunta: {
    texto: "Metes un vaso de agua en el congelador. ¿Qué pasa al día siguiente?",
    respuesta: "El agua se convierte en <mark>hielo</mark>: está dura y muy fría. Si la sacamos, poco a poco se <mark>derrite</mark> y vuelve a ser agua.",
  },
  bloques: [
    {
      html: `<h3>El agua está en todas partes</h3><p>Hay agua en el <mark>mar</mark>, en los ríos, en la lluvia y en el grifo de casa.</p><p>El agua no tiene color, ni olor, ni sabor. ¡Y se puede meter en cualquier vaso!</p>`,
      svg: dibujos("Mar, lluvia y grifo: hay agua en todas partes", [["mar", "mar", "var(--water)"], ["lluvia", "lluvia", "var(--water)"], ["grifo", "grifo", "var(--pen)"]]),
    },
    {
      html: `<h3>Para qué la usamos</h3><p>Usamos el agua para <mark>beber</mark>, para lavarnos, para cocinar y para regar las plantas.</p><p>Los animales y las plantas también la necesitan. ¡Sin agua no hay vida! Por eso bebemos agua cada día.</p>`,
      svg: dibujos("Beber, lavarse, cocinar y regar", [["agua", "beber", "var(--water)"], ["ducha", "lavar", "var(--pen)"], ["sopa", "cocinar", "var(--red)"], ["regadera", "regar", "var(--leaf)"]]),
    },
    {
      html: `<h3>Agua, hielo y vapor</h3><p>Si el agua se enfría mucho, se hace <mark>hielo</mark>, duro y frío.</p><p>Si se calienta mucho, sale <mark>vapor</mark>, como el humo blanco de la olla. El agua cambia, ¡pero sigue siendo agua!</p>`,
      svg: marco("Hielo, agua y vapor", `${ic("hielo", 44, 80, 1.6)}${flechaR(76, 80, 100, 80)}${ic("gota", 130, 80, 1.6)}${flechaR(160, 80, 184, 80)}${ic("vapor", 216, 80, 1.6)}${t(44, 140, "hielo", { color: "var(--water)", size: 18, max: 76 })}${t(130, 140, "agua", { color: "var(--water)", size: 18, max: 76 })}${t(216, 140, "vapor", { color: "var(--muted)", size: 18, max: 76 })}`),
    },
    {
      html: `<h3>La lluvia</h3><p>El sol calienta el agua del mar y sube al cielo. Allí forma las <mark>nubes</mark>.</p><p>Cuando las nubes pesan mucho, cae la <mark>lluvia</mark>. ¡Y el agua vuelve al mar y a los ríos!</p>`,
      svg: marco("El sol calienta el mar, el agua sube a las nubes y cae la lluvia", `${sol(40, 40, 14)}${nube(150, 44, 1.3)}${ic("lluvia", 220, 70, 1.3)}<rect x="0" y="140" width="260" height="40" fill="var(--water)" opacity=".7"/><path d="M70 132 Q76 100 110 70" stroke="var(--muted)" stroke-width="2.5" fill="none" stroke-dasharray="5 4"/>${flechaR(100, 80, 112, 68)}<path d="M218 100 V130" stroke="var(--water)" stroke-width="3" stroke-dasharray="4 4"/>${t(130, 165, "mar", { color: "#fff", size: 18 })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>El agua es un tesoro y hay que <mark>ahorrarla</mark>.</p><p>Cierro el grifo mientras me cepillo los dientes. Me ducho rápido. Y no tiro el agua que sobra: ¡riego una planta! Cada gota cuenta.</p>`,
      svg: lista("Ahorro agua: cierro el grifo, ducha rápida, riego con lo que sobra", [["Cierro el grifo", "var(--water)"], ["Ducha rapidita", "var(--pen)"], ["Lo que sobra, a las plantas", "var(--leaf)"]], { titulo: "Ahorro agua" }),
    },
    {
      html: `<h3>Juego: ¿flota o se hunde?</h3><p>Llena un barreño con agua. Echa cosas: un corcho, una piedra, una hoja, una llave.</p><p>Antes, adivina: ¿<mark>flota</mark> o se <mark>hunde</mark>? ¡Comprueba! ¿Qué cosas flotan? ¿Cuáles se hunden? Al final, cuenta las que flotan.</p>`,
      svg: marco("Un barreño con agua: una hoja flota y una piedra se hunde", `<path d="M30 60 H230 L214 166 H46z" fill="var(--card)" stroke="var(--muted)" stroke-width="3"/><path d="M36 92 H224 L214 166 H46z" fill="var(--water)" opacity=".5"/><ellipse cx="90" cy="90" rx="22" ry="6" fill="var(--leaf)"/><ellipse cx="170" cy="152" rx="18" ry="10" fill="#8a8a8a"/>${t(90, 44, "flota", { color: "var(--leaf)", size: 18 })}${t(170, 44, "se hunde", { color: "var(--muted)", size: 18, max: 100 })}`),
    },
  ],
  figura: figura("El agua", "Gota, hielo, vapor, lluvia y mar", [["gota", "agua", "var(--water)"], ["hielo", "hielo", "var(--water)"], ["vapor", "vapor", "var(--muted)"], ["lluvia", "lluvia", "var(--pen)"], ["mar", "mar", "var(--water)"]]),
  video: vid("HHiXUhe45FA", "El agua es mágica. Canciones infantiles", "El Payaso Plim Plim", 57178266, "el agua para niños infantil"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Hacemos cubitos de hielo.", pasos: ["Llenamos una cubitera de agua.", "La metemos en el congelador.", "Al día siguiente la sacamos y tocamos los cubitos."], resultado: "el agua se ha hecho hielo; al sol, se derrite." },
    { enunciado: "Miramos cómo hierve el agua (lo hace un adulto).", pasos: ["El adulto pone agua en una olla al fuego.", "Miramos desde lejos.", "Sale humo blanco: es vapor."], resultado: "el agua caliente se convierte en vapor." },
  ],
  errores: [
    "Pensar que el hielo y el agua son cosas distintas: el hielo es agua fría.",
    "Dejar el grifo abierto al cepillarse: se gasta mucha agua.",
    "Acercarse a la olla que hierve: el vapor quema.",
  ],
  ejercicios: [
    { q: "Haz cubitos de hielo y mira cómo se derriten.", sol: "Nota para la familia: comparad uno al sol y otro a la sombra." },
    { q: "Juega a «flota o se hunde» con cinco objetos.", sol: "Corcho y hoja flotan; piedra y llave se hunden." },
    { q: "Cierra el grifo mientras te cepillas los dientes.", sol: "Felicitadle cada vez que lo haga." },
    { q: "Dibuja una nube con lluvia.", sol: "Gotas azules que caen." },
    { q: "Di tres cosas para las que usas el agua.", sol: "Beber, lavarse, regar…" },
    { q: "Riega una planta con el agua que sobra de un vaso.", sol: "Así no la tiramos." },
  ],
  quiz: [
    { q: "El agua muy fría se hace…", o: ["arena", "hielo", "fuego"], a: 1, e: "En el congelador se hace hielo." },
    { q: "La lluvia cae de…", o: ["los árboles", "las casas", "las nubes"], a: 2, e: "Las nubes están hechas de agua." },
    { q: "Al cepillarme los dientes, el grifo…", o: ["lo cierro", "lo dejo abierto", "lo rompo"], a: 0, e: "Así ahorro agua." },
    { q: "El agua caliente echa…", o: ["hielo", "nieve", "vapor"], a: 2, e: "El vapor es agua caliente que sube." },
    { q: "Un corcho en el agua…", o: ["flota", "se hunde", "desaparece"], a: 0, e: "El corcho es ligero y flota." },
    { q: "¿Quién necesita agua?", o: ["Solo los peces", "Personas, animales y plantas", "Nadie"], a: 1, e: "Sin agua no hay vida." },
  ],
  examen: [
    { q: "¿Para qué usamos el agua?", o: ["Para pintar las paredes", "Para beber", "Para nada"], a: 1, e: "Beber, lavarnos, cocinar…" },
    { q: "El hielo al sol…", o: ["se derrite", "crece", "se hace piedra"], a: 0, e: "Vuelve a ser agua." },
    { q: "El agua del mar es…", o: ["dulce", "de chocolate", "salada"], a: 2, e: "El mar tiene sal." },
  ],
  feynman: ["Dónde hay agua", "Agua, hielo y vapor", "Cómo ahorrar agua"],
  mapa: mapa("EL AGUA", "var(--inf)", [
    ["Dónde", "mar, ríos, lluvia", "var(--water)"],
    ["Para qué", "beber y lavarnos", "var(--pen)"],
    ["Cambia", "hielo, agua, vapor", "var(--leaf)"],
    ["Ahorrar", "cerrar el grifo", "var(--red)"],
  ], 220),
  tarjetas: [
    ["Agua muy fría", "Hielo"],
    ["Agua muy caliente", "Vapor"],
    ["¿De dónde cae la lluvia?", "De las nubes"],
    ["¿Cómo ahorro agua?", "Cierro el grifo"],
    ["Un corcho en el agua…", "Flota"],
    ["¿Quién necesita agua?", "Todos los seres vivos"],
  ],
  familias: [
    "Jugad con agua en el baño: trasvasar, llenar y vaciar recipientes.",
    "Haced polos de zumo natural para ver el agua convertirse en hielo.",
    "Mirad juntos la lluvia por la ventana y hablad de las nubes.",
    "Poned un vaso junto al lavabo para recordar cerrar el grifo.",
  ],
  profesores: PROF("Descubrimiento y exploración del entorno: el agua, sus usos y propiedades; cambios de estado observables; uso responsable de los recursos", ["Mesa de agua con recipientes y embudos.", "Experimento flota o se hunde con registro.", "Cubitos de hielo coloreados que se derriten."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
