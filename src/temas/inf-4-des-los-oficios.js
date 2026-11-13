// Infantil 4 años · Descubrimiento y exploración del entorno: los oficios.
const { marco, dibujos, parejas, ic, t, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "4-anos",
  titulo: "Los oficios",
  minutos: 15,
  objetivos: ["Nombrar oficios cercanos", "Unir cada oficio con su herramienta o su lugar de trabajo", "Valorar el trabajo de todas las personas"],
  claves: ["oficio", "trabajo", "herramienta", "ayudar"],
  pregunta: {
    texto: "Si te duele la garganta, ¿quién te ayuda? ¿Y si hay un fuego?",
    respuesta: "Si me duele la garganta, me ayuda la <mark>médica</mark> o el <mark>médico</mark>. Si hay un fuego, vienen los <mark>bomberos</mark>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un oficio?</h3><p>Un <mark>oficio</mark> es el trabajo que hace una persona.</p><p>Cada oficio <b>nos ayuda</b> en algo: curarnos, enseñarnos, hacer el pan o cuidar la calle. ¡Todos son importantes! ¿Conoces alguno?</p>`,
      svg: dibujos("Médica, bombero y maestra", [["medico", "médica", "var(--pen)"], ["bombero", "bombero", "var(--red)"], ["maestra", "maestra", "var(--leaf)"]]),
    },
    {
      html: `<h3>Nos cuidan</h3><p>La <mark>médica</mark> nos cura cuando estamos malitos. El <mark>bombero</mark> apaga los fuegos.</p><p>La <mark>policía</mark> nos ayuda si nos perdemos y cuida que todos estemos seguros. Son personas valientes que nos ayudan.</p>`,
      svg: parejas("El médico usa medicinas, el bombero apaga el fuego y la policía ayuda en la calle", [["medico", "médico", "medicina", "curar"], ["bombero", "bombero", "fuego", "apagar"], ["policia", "policía", "semaforo", "ayudar"]], { color: "var(--pen)", color2: "var(--red)" }),
    },
    {
      html: `<h3>Nos dan de comer</h3><p>El <mark>granjero</mark> cultiva frutas y verduras y cuida a los animales.</p><p>La <mark>panadera</mark> hace el pan. El <mark>cocinero</mark> prepara la comida. ¡Qué rico! Gracias a ellos, podemos comer cada día.</p>`,
      svg: parejas("La granjera cultiva zanahorias, el cocinero hace sopa y la panadera hace pan", [["granjero", "granjera", "zanahoria", "cultiva"], ["cocinero", "cocinero", "sopa", "cocina"], ["cocinero", "panadera", "pan", "hornea"]], { color: "var(--inf)", color2: "var(--leaf)" }),
    },
    {
      html: `<h3>Nos enseñan y nos llevan</h3><p>La <mark>maestra</mark> nos enseña en el cole. El <mark>conductor</mark> lleva el autobús.</p><p>La <b>cartera</b> trae las cartas y el <b>barrendero</b> deja la calle limpia. Todos ellos trabajan para nosotros.</p>`,
      svg: parejas("La maestra enseña en la escuela y el conductor lleva el autobús", [["maestra", "maestra", "escuela", "cole"], ["nino", "conductor", "autobus", "autobús"]], { color: "var(--leaf)", color2: "var(--pen)" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los oficios hacen que la ciudad <mark>funcione</mark>. Unos necesitan a otros: el cocinero necesita al granjero.</p><p>¿Y tú? ¿Qué te gustaría ser de mayor? Piénsalo y díselo a tu familia.</p>`,
      svg: marco("Un niño piensa qué quiere ser de mayor: bombero, médica o cocinero", `${ic("nino", 70, 120, 2.2)}<circle cx="110" cy="78" r="5" fill="var(--line)"/><circle cx="124" cy="62" r="8" fill="var(--line)"/><ellipse cx="190" cy="56" rx="62" ry="40" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${ic("bombero", 160, 60, 0.9)}${ic("medico", 192, 58, 0.9)}${ic("cocinero", 224, 62, 0.9)}${t(130, 170, "¿qué seré de mayor?", { color: "var(--pen)", size: 16 })}`),
    },
    {
      html: `<h3>Juego: ¿quién lo usa?</h3><p>El adulto enseña una herramienta y tú dices <mark>quién la usa</mark>.</p><p>¿Una manguera? ¡El bombero! ¿Un fonendo? ¡La médica! ¿Una tiza? ¡La maestra! ¿Sabes otra herramienta? ¡Dínosla!</p>`,
      svg: dibujos("Casco, medicina y pizarra: ¿quién los usa?", [["casco", "¿quién?", "var(--red)"], ["medicina", "¿quién?", "var(--pen)"], ["pizarra", "¿quién?", "var(--leaf)"]], { titulo: "¿Quién lo usa?" }),
    },
  ],
  figura: figura("Los oficios", "Médico, bombera, cocinero, policía y maestra", [["medico", "médico", "var(--pen)"], ["bombero", "bombera", "var(--red)"], ["cocinero", "cocinero", "var(--inf)"], ["policia", "policía", "var(--pen)"], ["maestra", "maestra", "var(--leaf)"]]),
  video: vid("cewHIG8StK0", "Los trabajadores de la comunidad. Canciones infantiles", "El Payaso Plim Plim", 27574214, "oficios para niños infantil"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Quién ha hecho posible tu desayuno?", pasos: ["La leche: un ganadero cuida a la vaca.", "El pan: una panadera lo hornea.", "La fruta: un agricultor la cultiva."], resultado: "muchos oficios trabajan para que desayunemos." },
    { enunciado: "Vamos al médico.", pasos: ["Esperamos nuestro turno.", "La médica nos mira la garganta.", "Nos dice qué hacer para curarnos."], resultado: "la médica cuida de nuestra salud." },
  ],
  errores: [
    "Pensar que hay oficios solo de hombres o solo de mujeres: cualquiera puede hacer cualquier oficio.",
    "Creer que unos oficios valen más que otros: todos son necesarios.",
    "Confundir el bombero con el policía: el bombero apaga fuegos; la policía cuida la seguridad.",
  ],
  ejercicios: [
    { q: "Di el oficio de tres personas de tu familia.", sol: "Nota para la familia: explicad con palabras sencillas qué hacéis." },
    { q: "Juega a las tiendas: tú eres el panadero.", sol: "Con pan de juguete o de plastilina." },
    { q: "Dibuja lo que quieres ser de mayor.", sol: "Preguntadle por qué." },
    { q: "Une cada herramienta con su oficio: tijeras, escoba, pizarra.", sol: "Peluquera, barrendero, maestra." },
    { q: "Da las gracias a alguien que trabaja: la cajera, el conductor…", sol: "Hacedlo juntos en la próxima salida." },
    { q: "Imita a un bombero apagando un fuego.", sol: "Con una manguera imaginaria: ¡fsss!" },
  ],
  quiz: [
    { q: "¿Quién apaga los fuegos?", o: ["La maestra", "El bombero", "El cocinero"], a: 1, e: "Los bomberos apagan fuegos." },
    { q: "¿Quién nos cura?", o: ["El cartero", "La granjera", "La médica"], a: 2, e: "Los médicos cuidan la salud." },
    { q: "¿Quién hace el pan?", o: ["La panadera", "El policía", "El bombero"], a: 0, e: "Lo hornea la panadera." },
    { q: "¿Dónde trabaja la maestra?", o: ["En el mar", "En el bosque", "En el cole"], a: 2, e: "En la escuela." },
    { q: "¿Quién conduce el autobús?", o: ["El conductor", "La médica", "El cocinero"], a: 0, e: "El conductor nos lleva." },
    { q: "¿Quién cultiva frutas y verduras?", o: ["El policía", "El agricultor", "La cartera"], a: 1, e: "En el campo." },
  ],
  examen: [
    { q: "Si me pierdo, puedo pedir ayuda a…", o: ["un árbol", "un policía", "una farola"], a: 1, e: "La policía nos ayuda." },
    { q: "El cocinero trabaja en…", o: ["la cocina", "el tejado", "el río"], a: 0, e: "Prepara la comida." },
    { q: "Los oficios son…", o: ["solo de mayores ricos", "aburridos", "todos importantes"], a: 2, e: "Todos nos ayudan." },
  ],
  feynman: ["Qué es un oficio", "Tres oficios y lo que hacen", "Por qué todos son importantes"],
  mapa: mapa("LOS OFICIOS", "var(--inf)", [
    ["Nos cuidan", "médica, bombero", "var(--red)"],
    ["Nos alimentan", "granjero, panadera", "var(--leaf)"],
    ["Nos enseñan", "la maestra", "var(--pen)"],
    ["Nos llevan", "el conductor", "var(--water)"],
  ], 220),
  tarjetas: [
    ["¿Quién apaga fuegos?", "El bombero"],
    ["¿Quién nos cura?", "La médica"],
    ["¿Quién hace el pan?", "La panadera"],
    ["¿Quién enseña en el cole?", "La maestra"],
    ["¿Quién cultiva verduras?", "El agricultor"],
    ["¿Quién lleva el autobús?", "El conductor"],
  ],
  familias: [
    "Al pasear, fijaos en las personas que trabajan y nombrad su oficio.",
    "Jugad a disfrazaros de distintos oficios con ropa de casa.",
    "Contadle en qué consiste vuestro trabajo con un ejemplo.",
    "Visitad el mercado o la panadería y preguntad qué hacen.",
  ],
  profesores: PROF("Descubrimiento y exploración del entorno: la vida en sociedad; oficios y servicios de la comunidad, valoración de los trabajos sin estereotipos", ["Visita de familias que cuentan su oficio.", "Rincón de juego simbólico (consulta, tienda, cocina).", "Juego de parejas oficio y herramienta."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
