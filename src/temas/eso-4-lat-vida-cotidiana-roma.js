// Latín 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { rueda, piramide, filas, dos, figCols } = require("./_hum");

module.exports = {
  materia: "Latín",
  curso: "4-eso",
  titulo: "La vida cotidiana en Roma",
  minutos: 35,
  objetivos: ["Describir la familia romana y la organización social", "Conocer la vivienda, la educación y el ocio de los romanos", "Comparar la vida cotidiana romana con la actual"],
  claves: ["pater familias", "domus", "insula", "ciudadanos", "esclavos", "termas"],
  pregunta: {
    texto: "Un niño romano de tu edad podía ir a la escuela por la mañana, a las termas por la tarde y al circo a ver carreras de carros el fin de semana. Si era esclavo, en cambio, trabajaba sin descanso. ¿Cómo era un día en Roma?",
    respuesta: "Dependía mucho de quién fueras. La sociedad romana estaba muy jerarquizada: <mark>ciudadanos</mark> ricos y pobres, <b>libertos</b> y <b>esclavos</b>. La familia, la casa, la escuela y los espectáculos públicos organizaban la vida diaria.",
  },
  bloques: [
    {
      html: `<h3>La familia romana</h3><p>La <mark>familia</mark> romana incluía a todas las personas bajo la autoridad del <b>pater familias</b>: su esposa, hijos, nietos y esclavos. Él tenía un poder casi absoluto sobre ellos. La <b>mater familias</b> dirigía la casa; las mujeres no podían votar ni ocupar cargos, aunque las de familias ricas tuvieron cada vez más libertad. Las chicas se casaban muy jóvenes, a menudo hacia los 14 años.</p>`,
      svg: rueda("Miembros de la familia romana", "PATER|FAMILIAS", [["esposa", "var(--red)"], ["hijos", "var(--pen)"], ["hijas", "var(--bac)"], ["nietos", "var(--leaf)"], ["esclavos", "var(--muted)"], ["clientes", "var(--sun)"]], "var(--red)"),
    },
    {
      html: `<h3>Una sociedad desigual</h3><p>Los <mark>ciudadanos</mark> libres se dividían en clases según su riqueza: la nobleza senatorial, los caballeros (comerciantes ricos) y la plebe. Los <b>esclavos</b> eran prisioneros de guerra o hijos de esclavas, y se consideraban propiedad de su amo. Si eran liberados se convertían en <b>libertos</b>. En el año 212 el emperador Caracalla dio la ciudadanía a casi todos los hombres libres del Imperio.</p>`,
      svg: piramide("Pirámide social romana", [["senadores", "var(--sun)"], ["caballeros", "var(--card)"], ["plebe y libertos", "var(--line)"], ["esclavos", "var(--muted)"]]),
    },
    {
      html: `<h3>La casa: domus e insula</h3><p>Los ricos vivían en una <mark>domus</mark>, una casa de una planta organizada alrededor del <b>atrio</b> (patio con un estanque, el <i>impluvium</i>, que recogía la lluvia) y del <b>peristilo</b> (jardín con columnas). La mayoría vivía en <b>insulae</b>, bloques de pisos de alquiler de varias alturas, sin agua corriente y con peligro de incendios y derrumbes.</p>`,
      svg: dos("Domus frente a insula", ["Domus", ["casa de ricos", "una planta", "atrio e", "impluvium", "peristilo"], "var(--leaf)"], ["Insula", ["bloque de pisos", "varias alturas", "alquiler", "sin agua", "incendios"], "var(--red)"]),
    },
    {
      html: `<h3>Educación y ocio</h3><p>Los niños de familias acomodadas iban al <b>ludus</b> (de 7 a 11 años) con el <i>litterator</i> para aprender a leer, escribir y contar; después, con el <b>grammaticus</b>, literatura; y los chicos ricos, oratoria con el <b>rhetor</b>. Para el ocio había <mark>termas</mark> (baños públicos con agua caliente, fría y templada), el <b>circo</b> (carreras de carros), el <b>anfiteatro</b> (gladiadores) y el <b>teatro</b>.</p>`,
      svg: filas("Espectáculos públicos romanos", [["Circo", "carreras de carros", "var(--red)"], ["Anfiteatro", "gladiadores y fieras", "var(--ink)"], ["Teatro", "comedias y tragedias", "var(--pen)"], ["Termas", "baño, deporte, charla", "var(--water)"]]),
    },
  ],
  figura: {
    titulo: "Un día en Roma",
    svg: figCols("La jornada de un ciudadano romano por la mañana, la tarde y la noche", [
      ["Mañana", ["desayuno ligero", "(ientaculum)", "visita al patrono", "trabajo o foro", "escuela (ludus)"], "var(--sun)"],
      ["Tarde", ["comida (prandium)", "termas", "ejercicio", "charla con amigos", "espectáculos"], "var(--pen)"],
      ["Noche", ["cena (cena)", "comer reclinado", "en el triclinio", "banquetes", "dormir pronto"], "var(--bac)"],
    ]),
  },
  video: { id: "lENDXVKiB7M", titulo: "¿Cómo vivían los romanos? La vida en la Antigua Roma", canal: "Daniel Geohistoria", vistas: 66731, megusta: 1543, busqueda: "vida cotidiana en la antigua roma" },
  quiz: [
    { q: "¿Quién tenía la máxima autoridad en la familia romana?", o: ["La mater familias", "El pater familias", "El hijo mayor"], a: 1, e: "Tenía poder casi absoluto sobre todos los miembros de la familia." },
    { q: "¿Qué era una insula?", o: ["Una isla del Mediterráneo", "Un bloque de pisos de alquiler", "Un templo"], a: 1, e: "La mayoría de los romanos vivía en ellas." },
    { q: "El impluvium servía para…", o: ["recoger el agua de lluvia en el atrio", "cocinar", "guardar el dinero"], a: 0, e: "Era un estanque bajo una abertura del techo." },
    { q: "¿Dónde se celebraban las luchas de gladiadores?", o: ["En el circo", "En el anfiteatro", "En las termas"], a: 1, e: "El Coliseo es el anfiteatro más famoso." },
    { q: "Un liberto era…", o: ["un esclavo liberado", "un senador", "un extranjero"], a: 0, e: "Era libre, aunque mantenía obligaciones con su antiguo amo." },
  ],
  examen: [
    { q: "¿Quién enseñaba a leer, escribir y contar en el ludus?", o: ["El rhetor", "El litterator", "El grammaticus"], a: 1, e: "El grammaticus enseñaba literatura y el rhetor, oratoria." },
    { q: "¿Qué hizo el emperador Caracalla en el 212?", o: ["Prohibir la esclavitud", "Dar la ciudadanía a casi todos los hombres libres", "Construir el Coliseo"], a: 1, e: "Fue la Constitutio Antoniniana." },
    { q: "Las termas eran…", o: ["templos", "baños públicos con salas de distinta temperatura", "tiendas"], a: 1, e: "Caldarium (caliente), tepidarium (templada) y frigidarium (fría)." },
  ],
  feynman: ["Quién formaba la familia romana y qué poder tenía el pater familias", "Los grupos sociales de Roma", "Diferencia entre domus e insula", "Cómo se educaban y divertían los romanos"],
  mapa: mapa("VIDA EN ROMA", "var(--red)", [
    ["Familia", "pater familias · matrona", "var(--red)"],
    ["Sociedad", "ciudadanos · libertos · esclavos", "var(--muted)"],
    ["Casa", "domus · insula", "var(--leaf)"],
    ["Ocio", "termas · circo · anfiteatro", "var(--pen)"],
  ], 260),
  tarjetas: [
    ["Pater familias", "Cabeza de la familia romana, con autoridad sobre todos sus miembros."],
    ["Domus", "Casa unifamiliar de los ricos, con atrio y peristilo."],
    ["Insula", "Bloque de pisos de alquiler donde vivía la mayoría."],
    ["Liberto", "Esclavo que ha recibido la libertad."],
    ["Las tres salas de las termas", "Caldarium, tepidarium y frigidarium."],
  ],
  familias: ["Comparad un día de vuestra familia con el de una familia romana: ¿qué se parece y qué no?", "Buscad restos de termas, teatros o casas romanas en vuestra comunidad.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La civilización romana: familia, sociedad, vivienda, educación y ocio; pervivencia en el presente (RD 217/2022, Latín 4º).",
    ideas: ["Maqueta o plano de una domus con sus partes en latín.", "Debate sobre la esclavitud en Roma y la esclavitud moderna.", "Recrear un menú romano con fuentes de Apicio."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Familia en la Antigua Roma, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Familia_en_la_Antigua_Roma" },
  ],
  revisado: "2026-11-12",
};
