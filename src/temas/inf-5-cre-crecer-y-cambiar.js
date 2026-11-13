// Infantil 5 años · Crecimiento en armonía: crecer y cambiar.
const { mapa } = require("./_util");
const { nino, ic, vin, dibujos, lista, mural, t, flecha, FUENTES, PROF, CA, vid, nota } = require("./_inf5a");

// Marcas de altura en una pared.
const regla = (x) => `<rect x="${x - 8}" y="20" width="16" height="140" rx="3" fill="var(--sun)" opacity=".5"/>${[0, 1, 2, 3, 4, 5, 6].map((i) => `<path d="M${x - 8} ${160 - i * 20} h8" stroke="var(--ink)" stroke-width="2"/>`).join("")}`;

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "5-anos",
  titulo: "Crecer y cambiar",
  minutos: 15,
  objetivos: ["Saber que las personas crecemos y cambiamos", "Conocer las etapas: bebé, niño, joven, adulto y mayor", "Valorar lo que ya sabemos hacer solos"],
  claves: ["bebé", "niño", "niña", "adulto", "mayor", "crecer"],
  pregunta: { texto: "¿Te cabe la ropa que usabas cuando eras un bebé?", respuesta: "¡No! Porque has <mark>crecido</mark>: eres más alto y más grande." },
  bloques: [
    {
      html: `<h3>¡Estoy creciendo!</h3><p>Cuando naciste eras un <mark>bebé</mark> muy pequeño. Cabías en los brazos de mamá o papá.</p><p>Ahora eres más alto, tienes más pelo y te han salido los dientes. ¡Estás creciendo!</p>`,
      svg: vin("Un bebé pequeño y un niño de cinco años más alto", `${ic("bebe", 70, 110, 1.4)}${t(70, 160, "bebé", { size: 18, color: "var(--muted)" })}${flecha(104, 110, 150)}${nino(196, 138, { c: "var(--pen)", s: 1.4 })}${t(196, 166, "¡yo, ahora!", { size: 18, color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Las etapas de la vida</h3><p>Primero somos <mark>bebés</mark>. Después, <b>niños y niñas</b>. Luego, <b>jóvenes</b>.</p><p>Más tarde somos <b>adultos</b>, como papá y mamá. Y al final, <b>mayores</b>, como los abuelos.</p>`,
      svg: dibujos("Bebé, niña, mamá y abuelo: las etapas de la vida", [["bebe", "bebé", "var(--muted)"], ["nina", "niña", "var(--pen)"], ["mama", "adulto", "var(--leaf)"], ["abuelo", "mayor", "var(--inf)"]], { titulo: "De pequeño a mayor" }),
    },
    {
      html: `<h3>Mi cuerpo cambia</h3><p>Al crecer, el cuerpo <mark>cambia</mark>: somos más altos, los pies más grandes y las manos más fuertes.</p><p>A los cinco o seis años se caen los dientes de leche y salen otros nuevos.</p>`,
      svg: vin("Marcas de altura en la pared a los 3, 4 y 5 años", `${regla(40)}${nino(110, 160, { c: "var(--muted)", s: 0.9 })}${nino(160, 160, { c: "var(--leaf)", s: 1.05 })}${nino(214, 160, { c: "var(--pen)", s: 1.25 })}${t(110, 174, "3 años", { size: 12 })}${t(160, 174, "4 años", { size: 12 })}${t(214, 174, "5 años", { size: 12 })}`),
    },
    {
      html: `<h3>Ya sé hacer muchas cosas</h3><p>Un bebé no sabe andar ni hablar. Tú ya <mark>sabes hacer</mark> muchas cosas solo.</p><p>Te vistes, comes solo, hablas, cantas, corres y saltas. ¡Y cada día aprendes algo nuevo!</p>`,
      svg: lista("Cosas que ya sé hacer: vestirme, comer solo, hablar y correr", [["me visto solo", "var(--pen)"], ["como solo", "var(--leaf)"], ["hablo y canto", "var(--inf)"], ["corro y salto", "var(--red)"]], { titulo: "Ya sé…" }),
    },
    {
      html: `<h3>¿Para qué sirve? Crecer sanos</h3><p>Para <mark>crecer sanos</mark> necesitamos comer bien, beber agua, jugar y dormir mucho.</p><p>Mientras duermes, ¡tu cuerpo crece! Por eso los niños necesitan dormir unas diez horas.</p>`,
      svg: dibujos("Para crecer: comer bien, beber agua, jugar y dormir", [["manzana", "comer", "var(--red)"], ["agua", "beber", "var(--water)"], ["pelota", "jugar", "var(--leaf)"], ["cama", "dormir", "var(--pen)"]]),
    },
    {
      html: `<h3>Juego: ¡mírate de bebé!</h3><p>Busca con tu familia una <mark>foto de cuando eras bebé</mark>.</p><p>Ponla al lado de una foto de ahora. ¿Qué ha cambiado? ¿El pelo, la cara, el tamaño? ¿Qué sabes hacer ahora?</p>`,
      svg: vin("Dos marcos de foto: un bebé y un niño de cinco años", `<rect x="22" y="34" width="96" height="100" rx="8" fill="var(--card)" stroke="var(--inf)" stroke-width="4"/>${ic("bebe", 70, 84, 1.4)}<rect x="142" y="34" width="96" height="100" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="4"/>${ic("nino", 190, 84, 1.4)}${t(70, 160, "antes", { size: 18, color: "var(--inf)" })}${t(190, 160, "ahora", { size: 18, color: "var(--pen)" })}`),
    },
  ],
  figura: {
    titulo: "Las etapas de la vida",
    svg: mural("Mural: bebé, niño, joven, adulto y mayor", [["bebe", "bebé", "toma leche", "var(--muted)"], ["nino", "niño", "juega y aprende", "var(--pen)"], ["nina", "joven", "estudia", "var(--leaf)"], ["papa", "adulto", "trabaja", "var(--inf)"], ["abuela", "mayor", "nos cuida", "var(--red)"]]),
  },
  video: vid("3QTnO-nO_fc", "Estoy creciendo y aprendiendo - Canción preescolar", "123 Andrés", 1696732, "estoy creciendo canción infantil"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Ordena: abuelo, bebé, niña.", pasos: ["¿Quién es el más pequeño? El bebé.", "Después viene la niña.", "El abuelo es el mayor."], resultado: "bebé, niña, abuelo." },
    { enunciado: "¿Cuánto has crecido?", pasos: ["Te pones de espaldas a la pared, sin zapatos.", "Un adulto hace una marca encima de tu cabeza.", "Dentro de unos meses repetimos y comparamos."], resultado: "la marca nueva estará más arriba." },
  ],
  errores: [
    "Pensar que los mayores no crecieron nunca: ¡también fueron bebés!",
    "Creer que se crece de un día para otro: se crece poco a poco.",
    "Asustarse cuando se mueve un diente: es normal, va a salir uno nuevo.",
  ],
  ejercicios: [
    { q: "Mira una foto tuya de bebé y di tres cosas que han cambiado.", sol: nota("el pelo, el tamaño, los dientes… Dejad que lo diga con sus palabras.") },
    { q: "Ordena fotos de la familia de más pequeño a más mayor.", sol: nota("usad fotos de hermanos, primos, padres y abuelos.") },
    { q: "Pon tu mano encima de la de un adulto. ¿Cuál es más grande?", sol: nota("podéis dibujar el contorno de las dos manos en un papel.") },
    { q: "Haz una marca de tu altura en la pared o en una puerta.", sol: nota("poned la fecha y repetidlo cada pocos meses.") },
    { q: "Dibuja algo que ya sabes hacer solo.", sol: nota("felicitadle por lo que ha conseguido.") },
    { q: "Imita a un bebé, a un niño y a un abuelo andando.", sol: nota("es un juego para notar las diferencias entre etapas, siempre con respeto.") },
  ],
  quiz: [
    { q: "Cuando naciste eras…", o: ["un abuelo", "un bebé", "un adulto"], a: 1, e: "Un bebé." },
    { q: "Los abuelos están en la etapa…", o: ["mayor", "bebé", "niño"], a: 0, e: "Son mayores." },
    { q: "¿Quién es más pequeño?", o: ["un bebé", "un niño", "un adulto"], a: 0, e: "El bebé." },
    { q: "A los 5 o 6 años se caen…", o: ["las uñas", "los dientes de leche", "las orejas"], a: 1, e: "Los dientes de leche." },
    { q: "El cuerpo crece mientras…", o: ["dormimos", "vemos la tele", "nunca"], a: 0, e: "Dormir ayuda a crecer." },
    { q: "Crecemos…", o: ["de golpe", "poco a poco", "solo en verano"], a: 1, e: "Poco a poco." },
  ],
  examen: [
    { q: "Ordena: ¿qué va primero?", o: ["adulto", "bebé", "mayor"], a: 1, e: "Primero somos bebés." },
    { q: "Para crecer sanos hay que…", o: ["comer bien y dormir", "no comer", "no dormir"], a: 0, e: "Comer bien, jugar y dormir." },
    { q: "Papá y mamá son…", o: ["bebés", "adultos", "niños"], a: 1, e: "Son adultos." },
  ],
  feynman: ["Las etapas de la vida", "Cómo cambia el cuerpo", "Qué ayuda a crecer"],
  mapa: mapa("CRECER Y CAMBIAR", "var(--inf)", [
    ["Etapas", "bebé · niño · adulto · mayor", "var(--pen)"],
    ["Mi cuerpo cambia", "más alto · dientes nuevos", "var(--leaf)"],
    ["Ya sé hacer", "vestirme · comer · hablar", "var(--inf)"],
    ["Crecer sano", "comer · jugar · dormir", "var(--red)"],
  ], 230),
  tarjetas: [
    ["¿Qué eras al nacer?", "Un bebé"],
    ["Los abuelos son…", "Mayores"],
    ["Papá y mamá son…", "Adultos"],
    ["¿Qué se cae a los 6 años?", "Los dientes de leche"],
    ["¿Cuándo crece el cuerpo?", "Mientras dormimos"],
    ["Para crecer sano…", "Comer, jugar y dormir"],
  ],
  familias: [
    "Mirad juntos fotos de cuando era bebé y contadle anécdotas.",
    "Medid su altura en una puerta cada pocos meses con la fecha.",
    "Dejad que haga solo lo que ya sabe: vestirse, poner la mesa, recoger.",
    "Hablad con los abuelos sobre cómo eran de pequeños.",
  ],
  profesores: PROF(CA, "Progresivo autoconocimiento: el propio cuerpo y sus cambios, las etapas de la vida, conquista de la autonomía en las rutinas", ["Línea del tiempo de clase con fotos de cada niño de bebé y ahora.", "Tallímetro en la pared con medidas en septiembre, enero y junio.", "Visita de un bebé y de un abuelo para comparar qué puede hacer cada uno."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
