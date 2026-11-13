// Religión, Infantil 4 años: la creación.
const { mapa } = require("./_util");
const { svg, rot, nino, sol, luna, nube, arbol, flor, estrella, pez, pajaro, suelo, libro, secuencia, dibujos, mural, ic, vid, R, A, V, N, M, W, G, PROF, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Religión",
  curso: "4-anos",
  titulo: "La creación",
  minutos: 15,
  objetivos: ["Escuchar el relato de la creación de la Biblia", "Descubrir que el mundo es un regalo de Dios", "Dar gracias y cuidar la naturaleza"],
  claves: ["creación", "Dios", "regalo", "Biblia", "gracias", "cuidar"],
  pregunta: {
    texto: "Mira por la ventana. ¿Qué cosas bonitas ves?",
    respuesta: "El sol, los árboles, los pájaros… Los cristianos creemos que <mark>Dios creó el mundo</mark> con mucho amor, como un regalo para todos.",
  },
  bloques: [
    {
      html: `<h3>Un mundo muy bonito</h3><p>El sol, el mar, las flores y los animales son muy <mark>bonitos</mark>.</p><p>Los cristianos creemos que <b>Dios</b> los hizo con mucho amor.</p><p>Por eso decimos que el mundo es la <mark>creación</mark> de Dios.</p>`,
      svg: svg("Un niño con los brazos abiertos bajo el sol, junto a un árbol y unas flores", `${sol(210, 40)}${nube(80, 36)}${arbol(50, 150)}${flor(170, 150)}${flor(195, 150, "var(--inf)")}${nino(120, 150, { pose: "brazos", c: A })}${suelo(150)}${rot(130, 172, "¡Qué bonito es el mundo!", { color: A })}`),
    },
    {
      html: `<h3>La Biblia lo cuenta</h3><p>La <mark>Biblia</mark> es el libro más importante para los cristianos.</p><p>Al principio cuenta que Dios hizo el mundo poco a poco.</p><p>Y cuando lo terminó, vio que todo era <b>muy bueno</b>.</p>`,
      svg: svg("Una Biblia abierta con una estrella brillante encima", `${libro(130, 92, 1.8, R)}${estrella(130, 30, 13)}${rot(130, 170, "La Biblia", { color: R, size: 16 })}`),
    },
    {
      html: `<h3>La luz, el cielo y el agua</h3><p>Primero Dios hizo la <mark>luz</mark>: así hubo día y noche.</p><p>Después hizo el <b>cielo</b> y el <b>agua</b> del mar.</p><p>Puso el sol para el día y la luna y las estrellas para la noche.</p>`,
      svg: secuencia("La luz con el sol, el cielo con una nube y la noche con la luna", [["sol", "la luz", M], ["nube", "el cielo", A], ["luna", "la noche", N]], { titulo: "Dios hizo…" }),
    },
    {
      html: `<h3>Plantas, animales y personas</h3><p>Luego Dios llenó la tierra de <mark>plantas</mark> y árboles con fruta.</p><p>Hizo los peces del mar, los pájaros del cielo y todos los animales.</p><p>Y al final creó a las <mark>personas</mark>, para cuidar el mundo.</p>`,
      svg: svg("Un árbol, flores, un pez, pájaros y una familia", `${arbol(40, 120)}${flor(78, 120)}<rect x="104" y="96" width="60" height="30" rx="8" fill="var(--water)" opacity=".35"/>${pez(134, 112)}${pajaro(120, 40)}${pajaro(150, 30)}${nino(200, 120, { c: R, nina: true, s: 0.8 })}${nino(232, 120, { c: A, s: 0.8 })}${suelo(122)}${rot(40, 150, "plantas", { color: V })}${rot(134, 150, "animales", { color: W })}${rot(216, 150, "personas", { color: R })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Si el mundo es un <mark>regalo</mark>, lo tenemos que cuidar.</p><p>Regamos las plantas, no tiramos basura y tratamos bien a los animales.</p><p>Y damos <b>gracias</b> por todo lo bonito.</p>`,
      svg: dibujos("Cuidar las plantas, cuidar los animales y dar gracias", [["flor", "regar", V], ["perro", "cuidar", A], ["corazon", "dar gracias", R]], { titulo: "Cuidamos el regalo" }),
    },
    {
      html: `<h3>Juego: el paseo de las gracias</h3><p>Salimos al <mark>patio</mark> o al parque.</p><p>Buscamos cosas bonitas: una hoja, una piedra, una flor o un pájaro que canta.</p><p>Por cada una decimos: <b>¡Gracias, Dios, por…!</b></p>`,
      svg: svg("Dos niños pasean por el parque y señalan una flor y un pájaro", `${arbol(220, 150)}${flor(150, 150)}${flor(170, 150, "var(--sun)")}${pajaro(190, 50)}${nino(60, 150, { c: A, pose: "arriba" })}${nino(100, 150, { c: R, nina: true })}${suelo(150)}${rot(130, 172, "¡Gracias por la flor!", { color: R })}`),
    },
  ],
  figura: {
    titulo: "Lo que Dios creó",
    svg: mural("Cuatro tarjetas: la luz, el agua, las plantas y los animales, y las personas", [["sol", "la luz", "día y noche", M], ["pez", "el agua", "el mar y los peces", A], ["arbol", "las plantas", "y los animales", V], ["nino", "las personas", "para cuidar", R]], "La creación: un regalo de Dios"),
  },
  video: { ...vid("TGfUZ2eSnQQ", "La Creación - Canción para niños", "Miss Carmen", 1165473), busqueda: "la creación para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué hizo Dios primero, según la Biblia?", pasos: ["Recordamos el relato.", "Al principio todo estaba oscuro.", "Entonces Dios dijo: «Que haya luz»."], resultado: "la luz." },
    { enunciado: "¿Cómo cuidamos el regalo de la creación?", pasos: ["Pensamos en las plantas: las regamos.", "En los animales: los tratamos con cariño.", "En el parque: tiramos la basura a la papelera."], resultado: "cuidando la naturaleza cada día." },
  ],
  errores: [
    "Pensar que la creación es solo para mí: es un regalo para todos.",
    "Romper flores o molestar a los animales: los cuidamos.",
    "Olvidar dar las gracias por las cosas bonitas.",
  ],
  ejercicios: [
    { q: "Dibuja lo que más te gusta de la naturaleza.", sol: "Para la familia: preguntadle por qué le gusta y dad gracias juntos." },
    { q: "Riega una planta de casa.", sol: "Para la familia: un poco de agua cada pocos días; que vea cómo crece." },
    { q: "Nombra tres animales que creó Dios.", sol: "Respuesta libre: perro, pez, pájaro…" },
    { q: "Recoge hojas en el parque y haz un mural.", sol: "Para la familia: solo hojas caídas, sin arrancar." },
    { q: "Di una oración de gracias corta.", sol: "Por ejemplo: «Gracias, Dios, por el sol y las flores»." },
    { q: "Canta la canción de la creación.", sol: "Para la familia: el vídeo del tema sirve para cantarla." },
  ],
  quiz: [
    { q: "¿Quién creó el mundo, según los cristianos?", o: ["Dios", "Un rey", "Los niños"], a: 0, e: "Dios lo creó con amor." },
    { q: "¿Qué libro lo cuenta?", o: ["La Biblia", "Un cuento de piratas", "Un diccionario"], a: 0, e: "La Biblia." },
    { q: "¿Qué hizo Dios primero?", o: ["La luz", "Los coches", "Las casas"], a: 0, e: "Primero la luz." },
    { q: "El mundo es un…", o: ["Regalo", "Juguete roto", "Secreto"], a: 0, e: "Un regalo para todos." },
    { q: "Para cuidar la creación…", o: ["Regamos las plantas", "Tiramos basura", "Rompemos flores"], a: 0, e: "Cuidamos la naturaleza." },
    { q: "Por las cosas bonitas decimos…", o: ["Gracias", "Adiós", "No"], a: 0, e: "Damos gracias." },
  ],
  examen: [
    { q: "¿Qué puso Dios para la noche?", o: ["La luna y las estrellas", "El sol", "Las nubes"], a: 0, e: "La luna y las estrellas." },
    { q: "¿Para qué creó Dios a las personas, según la Biblia?", o: ["Para cuidar el mundo", "Para romperlo", "Para nada"], a: 0, e: "Para cuidar la creación." },
    { q: "Al terminar, Dios vio que todo era…", o: ["Muy bueno", "Feo", "Aburrido"], a: 0, e: "Muy bueno." },
  ],
  feynman: ["Cuenta qué hizo Dios en la creación", "Di cómo cuidas tú la naturaleza"],
  mapa: mapa("LA CREACIÓN", "var(--inf)", [
    ["La luz", "día y noche", M],
    ["Cielo y agua", "el mar y las nubes", A],
    ["Plantas y animales", "llenan la tierra", V],
    ["Personas", "cuidan el mundo", R],
  ], 220),
  tarjetas: [
    ["¿Quién creó el mundo, según los cristianos?", "Dios"],
    ["¿Qué libro lo cuenta?", "La Biblia"],
    ["¿Qué hizo Dios primero?", "La luz"],
    ["¿Qué es el mundo para nosotros?", "Un regalo"],
    ["¿Qué hacemos con el regalo?", "Cuidarlo"],
    ["¿Qué decimos por lo bonito?", "¡Gracias!"],
  ],
  familias: [
    "Pasead por el campo o el parque y dad gracias juntos por lo que veáis.",
    "Cuidad una planta en casa y que sea responsable de regarla.",
    "Leed el relato de la creación en una Biblia infantil.",
    "Antes de dormir, decid una cosa bonita del día por la que dar gracias.",
  ],
  profesores: PROF("Religión Católica en Educación Infantil: el mundo y la vida como regalo de Dios; el relato de la creación (Gn 1) y el cuidado de la naturaleza. Área de opción voluntaria", ["Mural de la creación con dibujos del alumnado.", "Paseo por el patio para dar gracias.", "Rincón de las plantas que cuida la clase."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
