// Infantil 3 años · Religión: Cuidamos lo que Dios ha creado. Para leer con un adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, lista, mural, vid } = require("./_peque");
const { R, A, V, N, S, W, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Religión",
  curso: "3-anos",
  titulo: "Cuidamos lo que Dios ha creado",
  minutos: 10,
  objetivos: ["Mirar las cosas bonitas del mundo: sol, plantas y animales", "Saber que los cristianos dicen que Dios las creó", "Cuidar las plantas, los animales y el agua"],
  claves: ["creación", "mundo", "cuidar", "plantas", "animales", "agua"],
  pregunta: {
    texto: "¿Qué cosas bonitas ves cuando sales al parque?",
    respuesta: "El sol, los árboles, las flores, los pájaros… Los cristianos dicen que <mark>Dios creó el mundo</mark> y nos lo regaló para cuidarlo.",
  },
  bloques: [
    {
      html: `<h3>Un mundo bonito</h3><p>Miramos a nuestro alrededor: ¡el mundo es <mark>precioso</mark>!</p><p>Hay sol y luna. Hay mar y montañas. Hay flores de colores. ¿Qué es lo que más te gusta?</p>`,
      svg: escena("Un paisaje bonito con sol, árbol, flor y nube", [["sol", 50, 44, 1.4], ["nube", 180, 40, 1.4], ["arbol", 70, 120, 2], ["flor", 160, 134, 1.4], ["flor", 210, 134, 1.4], ["svg", `<path d="M0 156 H260 V180 H0z" fill="var(--leaf)" opacity=".35"/>`]]),
    },
    {
      html: `<h3>Dios lo creó</h3><p>Los cristianos dicen que <mark>Dios creó</mark> el mundo.</p><p>Creó la luz y el agua. Las plantas y los animales. ¡Y a las personas! Y vio que todo era bueno.</p>`,
      svg: dibujos("Dios creó la luz, las plantas, los animales y las personas", [["sol", "luz", S], ["arbol", "plantas", V], ["pajaro", "animales", A], ["nino", "personas", R]]),
    },
    {
      html: `<h3>Cuidamos las plantas</h3><p>Las plantas necesitan <mark>agua</mark> y sol.</p><p>Regamos las macetas. No arrancamos las flores del parque. ¡Así crecen grandes y bonitas!</p><p>Si una planta está triste y seca, le damos agua.</p>`,
      svg: escena("Un niño riega una flor", [["nino", 70, 90, 2], ["agua", 132, 96, 1.2], ["lluvia", 168, 92, 0.8], ["flor", 200, 140, 2], ["t", 130, 168, "regamos", V, 20]]),
    },
    {
      html: `<h3>Cuidamos los animales</h3><p>Los animales también son un <mark>regalo</mark>.</p><p>Damos de comer a la mascota. No pisamos las hormigas. Miramos a los pájaros sin asustarlos.</p><p>Los animales sienten, como nosotros. Los tratamos con cariño.</p>`,
      svg: dibujos("Cuidamos los animales: el perro, el pájaro y la hormiga", [["perro", "le doy comida", A], ["pajaro", "no lo asusto", N], ["hormiga", "no la piso", R]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Si cuidamos el mundo, <mark>todos vivimos mejor</mark>.</p><p>Cerramos el grifo. Tiramos los papeles a la papelera. ¡Así el mundo sigue bonito para todos!</p><p>Cuidar el mundo es dar las gracias por este regalo.</p>`,
      svg: lista("Cuidamos el mundo: cerrar el grifo, papeles a la papelera, regar", [["Cierro el grifo", W], ["Papeles a la papelera", A], ["Riego las plantas", V]], { titulo: "Cuido el mundo", marca: "✓" }),
    },
    {
      html: `<h3>Jugamos a los guardianes</h3><p>Hoy somos <mark>guardianes del mundo</mark>.</p><p>Paseamos por el patio. Buscamos papeles para tirar. Regamos una planta. Saludamos a un pájaro. ¡Misión cumplida!</p><p>¿Qué más puede hacer un guardián?</p>`,
      svg: escena("Guardianes del mundo con una estrella", [["nina", 70, 86, 2], ["estrella", 70, 34, 1], ["arbol", 170, 120, 1.6], ["pajaro", 220, 60, 1.1], ["t", 130, 166, "¡Guardianes!", R, 22]]),
    },
  ],
  figura: {
    titulo: "Cuidamos lo que Dios ha creado",
    svg: mural("La creación: el sol, las plantas, los animales y el agua, que cuidamos", [["sol", "luz", "y la luna", S], ["flor", "plantas", "las riego", V], ["perro", "animales", "los cuido", A], ["agua", "agua", "no la gasto", R]], "Cuidamos lo que Dios ha creado"),
  },
  video: { ...vid("XSNV2kfgEgE", "Dios de la Creación · Pequeños Héroes", "Pequeños Heroes", 23450005), busqueda: "cuidar la creación de dios niños canción" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "La maceta tiene la tierra seca. ¿Qué hacemos?",
      pasos: ["Tocamos la tierra: está seca.", "Cogemos la regadera.", "Echamos un poco de agua."],
      resultado: "La planta está contenta." },
    { enunciado: "Hay un papel en el suelo del parque.",
      pasos: ["Lo cogemos.", "Buscamos la papelera.", "Lo tiramos dentro."],
      resultado: "¡El parque está limpio!" },
  ],
  errores: [
    "Arrancar flores del parque: así no las puede disfrutar nadie.",
    "Dejar el grifo abierto mientras nos lavamos los dientes.",
    "Asustar o hacer daño a los animales pequeños.",
  ],
  ejercicios: [
    { q: "Riega una planta de casa.", sol: "Para la familia: dadle una regadera pequeña y un día fijo." },
    { q: "Di tres cosas bonitas del mundo.", sol: "El sol, el mar, los animales…" },
    { q: "Tira un papel a la papelera.", sol: "En el paseo, buscad juntos una papelera." },
    { q: "Cierra el grifo al lavarte los dientes.", sol: "Abrid solo para mojar y aclarar." },
    { q: "Da de comer a una mascota.", sol: "O mirad los pájaros del parque sin asustarlos." },
    { q: "Dibuja tu rincón favorito del parque.", sol: "Hablad de cómo cuidarlo." },
  ],
  quiz: [
    { q: "Los cristianos dicen que el mundo lo creó…", o: ["Dios", "un niño", "un coche"], a: 0, e: "Dios." },
    { q: "Las plantas necesitan…", o: ["agua y sol", "zapatos", "juguetes"], a: 0, e: "Agua y sol." },
    { q: "A las hormigas…", o: ["no las piso", "las piso", "las como"], a: 0, e: "No las pisamos." },
    { q: "Los papeles van a…", o: ["la papelera", "el suelo", "el río"], a: 0, e: "A la papelera." },
    { q: "Al lavarme los dientes, el grifo…", o: ["lo cierro", "lo dejo abierto", "lo rompo"], a: 0, e: "Lo cierro." },
    { q: "Dios vio que todo era…", o: ["bueno", "feo", "aburrido"], a: 0, e: "Bueno." },
  ],
  examen: [
    { q: "Las flores del parque…", o: ["no se arrancan", "se arrancan", "se pisan"], a: 0, e: "No se arrancan." },
    { q: "Un guardián del mundo…", o: ["cuida las plantas", "tira basura", "asusta pájaros"], a: 0, e: "Cuida las plantas." },
    { q: "El mundo es un…", o: ["regalo", "juguete roto", "secreto"], a: 0, e: "Un regalo para cuidar." },
  ],
  feynman: ["El mundo es bonito", "Los cristianos dicen que Dios lo creó", "Cuidamos plantas, animales y agua"],
  mapa: mapa("LA CREACIÓN", "var(--inf)", [
    ["Mundo bonito", "sol, mar, flores", S],
    ["Plantas", "las riego", V],
    ["Animales", "los cuido", A],
    ["Agua", "no la gasto", R],
  ], 230),
  tarjetas: [
    ["¿Quién creó el mundo, dicen los cristianos?", "Dios"],
    ["Las plantas necesitan…", "Agua y sol"],
    ["Los papeles van a…", "La papelera"],
    ["El grifo…", "Lo cierro"],
    ["A los animales…", "Los cuido"],
    ["El mundo es…", "Un regalo"],
  ],
  familias: [
    "Plantad juntos unas lentejas o una semilla y regadla cada día.",
    "En los paseos, fijaos en los pájaros, los árboles y las flores.",
    "Enseñadle a cerrar el grifo y a tirar los papeles a la papelera.",
    "Dad gracias por algo bonito de la naturaleza que hayáis visto.",
  ],
  profesores: PROF("Religión Católica en Educación Infantil: la creación como regalo de Dios (Gn 1) y el cuidado de la casa común", ["Rincón de la planta con turnos de riego.", "Paseo de guardianes por el patio.", "Mural de la creación con huellas."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
