// Religión 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { rueda, filas, dos, linea, figCols } = require("./_hum");

module.exports = {
  materia: "Religión",
  curso: "4-eso",
  titulo: "Religión, ética y compromiso social",
  minutos: 35,
  objetivos: ["Relacionar la fe cristiana con la moral y la dignidad de la persona", "Conocer los principios de la Doctrina Social de la Iglesia", "Identificar formas de compromiso social y ecológico, religiosas y civiles"],
  claves: ["dignidad humana", "bien común", "solidaridad", "Doctrina Social de la Iglesia", "ecología integral", "voluntariado"],
  pregunta: {
    texto: "Cáritas atiende cada año a cientos de miles de personas en España; Manos Unidas financia proyectos en África, Asia y América. Muchas ONG nacieron de personas creyentes, y otras de personas sin religión. ¿Qué lleva a alguien a comprometerse con los demás?",
    respuesta: "Para el cristianismo, la fe se demuestra con obras: amar a Dios es inseparable de amar al prójimo. De ahí nace la <mark>Doctrina Social de la Iglesia</mark>, que propone principios como la <b>dignidad de la persona</b>, el <b>bien común</b> y la <b>solidaridad</b>, compartidos con muchas personas de otras creencias.",
  },
  bloques: [
    {
      html: `<h3>La dignidad de la persona</h3><p>La ética cristiana parte de que toda persona tiene una <mark>dignidad</mark> que no depende de su raza, sexo, riqueza, origen o capacidades. Jesús resumió la moral en el <b>mandamiento del amor</b>: «Ama a Dios y al prójimo como a ti mismo», y lo amplió hasta los enemigos. En la parábola del juicio final (Mt 25) dice: «Lo que hicisteis a uno de estos más pequeños, a mí me lo hicisteis».</p>`,
      svg: dos("Dignidad: la misma para todas las personas", ["No depende de", ["origen", "sexo", "dinero", "salud", "religión"], "var(--muted)"], ["Exige", ["respeto", "justicia", "cuidado", "igualdad", "libertad"], "var(--bac)"]),
    },
    {
      html: `<h3>La Doctrina Social de la Iglesia</h3><p>Ante la explotación obrera de la Revolución Industrial, el papa León XIII publicó la encíclica <i>Rerum novarum</i> (1891), inicio de la <mark>Doctrina Social de la Iglesia</mark>. Sus principios: <b>dignidad</b> de la persona, <b>bien común</b> (condiciones para que todos puedan desarrollarse), <b>destino universal de los bienes</b>, <b>subsidiariedad</b> (que decidan quienes están más cerca) y <b>solidaridad</b>.</p>`,
      svg: rueda("Principios de la Doctrina Social de la Iglesia", "DOCTRINA|SOCIAL", [["dignidad", "var(--bac)"], ["bien común", "var(--leaf)"], ["destino bienes", "var(--sun)"], ["subsidiariedad", "var(--pen)"], ["solidaridad", "var(--red)"]], "var(--bac)"),
    },
    {
      html: `<h3>Cuidar la casa común</h3><p>En la encíclica <i>Laudato si'</i> (2015), el papa Francisco propuso una <mark>ecología integral</mark>: el cuidado del planeta y el de los más pobres van unidos, porque el deterioro ambiental afecta sobre todo a quienes menos tienen. En <i>Fratelli tutti</i> (2020) llamó a la fraternidad universal. Estas ideas coinciden con los Objetivos de Desarrollo Sostenible de la ONU.</p>`,
      svg: linea("Encíclicas sociales", [["1891", "Rerum|novarum"], ["1963", "Pacem|in terris"], ["2015", "Laudato|si'"], ["2020", "Fratelli|tutti"]], "var(--bac)"),
    },
    {
      html: `<h3>Del dicho al hecho: el compromiso</h3><p>El compromiso puede ser personal (consumo responsable, cuidar a un familiar, defender a quien sufre acoso) o colectivo: <b>voluntariado</b> en ONG religiosas (Cáritas, Manos Unidas) o civiles (Cruz Roja, bancos de alimentos), participación en el barrio y en el instituto. Figuras como <b>Teresa de Calcuta</b>, <b>Martin Luther King</b> o <b>Óscar Romero</b> son ejemplos de compromiso nacido de la fe.</p>`,
      svg: filas("Formas de compromiso", [["Personal", "consumo responsable", "var(--leaf)"], ["Cercano", "ayudar en casa y en clase", "var(--sun)"], ["Social", "voluntariado en una ONG", "var(--bac)"], ["Político", "votar, participar, denunciar", "var(--pen)"]]),
    },
  ],
  figura: {
    titulo: "Tres testigos del compromiso",
    svg: figCols("Teresa de Calcuta, Martin Luther King y Óscar Romero", [
      ["Teresa de Calcuta", ["1910-1997", "religiosa en la India", "cuidó a moribundos", "y pobres", "Nobel de la Paz 1979"], "var(--bac)"],
      ["M. Luther King", ["1929-1968", "pastor bautista", "derechos civiles", "en EE. UU.", "Nobel de la Paz 1964"], "var(--pen)"],
      ["Óscar Romero", ["1917-1980", "arzobispo de", "San Salvador", "defensa de los pobres", "santo desde 2018"], "var(--red)"],
    ]),
  },
  video: { id: "I9IzKxeCRjw", titulo: "Qué es la Doctrina Social de la Iglesia", canal: "José Antonio Cinco Panes", vistas: 461665, megusta: 0, busqueda: "doctrina social de la iglesia" },
  quiz: [
    { q: "¿Qué encíclica inició la Doctrina Social de la Iglesia?", o: ["Laudato si'", "Rerum novarum (1891)", "Fratelli tutti"], a: 1, e: "León XIII respondió a la situación de los obreros de la Revolución Industrial." },
    { q: "El bien común es…", o: ["el interés de la mayoría", "el conjunto de condiciones que permiten a todos desarrollarse", "la riqueza del Estado"], a: 1, e: "No es solo la suma de intereses particulares." },
    { q: "La «ecología integral» de Laudato si' une…", o: ["el cuidado del planeta y el de los pobres", "la ciencia y la economía", "la política y la religión"], a: 0, e: "El deterioro ambiental afecta sobre todo a los más vulnerables." },
    { q: "El principio de subsidiariedad dice que…", o: ["el Estado debe decidirlo todo", "las decisiones deben tomarse lo más cerca posible de las personas afectadas", "solo deciden los expertos"], a: 1, e: "Lo que puede hacer la familia o el barrio no debe asumirlo una instancia superior sin necesidad." },
    { q: "¿Qué líder de los derechos civiles fue pastor bautista?", o: ["Martin Luther King", "Gandhi", "Nelson Mandela"], a: 0, e: "Luchó de forma no violenta contra la segregación racial en EE. UU." },
  ],
  examen: [
    { q: "Según Mt 25, ayudar al necesitado es para el cristiano…", o: ["algo opcional", "ayudar al mismo Cristo", "una obligación legal"], a: 1, e: "«Lo que hicisteis a uno de estos más pequeños, a mí me lo hicisteis»." },
    { q: "El destino universal de los bienes significa que…", o: ["los bienes de la Tierra están destinados a todos", "no existe la propiedad privada", "todo es del Estado"], a: 0, e: "La propiedad privada es legítima, pero tiene una función social." },
    { q: "¿Qué encíclica de 2020 trata sobre la fraternidad universal?", o: ["Fratelli tutti", "Pacem in terris", "Rerum novarum"], a: 0, e: "La escribió el papa Francisco." },
  ],
  feynman: ["En qué se basa la dignidad de la persona para el cristianismo", "Los principios de la Doctrina Social de la Iglesia", "Qué es la ecología integral", "Formas de compromiso que puedes vivir a tu edad"],
  mapa: mapa("ÉTICA Y COMPROMISO", "var(--bac)", [
    ["Dignidad", "toda persona · mandamiento amor", "var(--bac)"],
    ["DSI", "bien común · solidaridad", "var(--pen)"],
    ["Ecología", "Laudato si' · casa común", "var(--leaf)"],
    ["Acción", "voluntariado · testigos", "var(--red)"],
  ], 270),
  tarjetas: [
    ["Rerum novarum", "Encíclica de León XIII (1891), inicio de la Doctrina Social de la Iglesia."],
    ["Bien común", "Condiciones sociales que permiten a todos desarrollarse."],
    ["Subsidiariedad", "Que decida quien está más cerca del problema."],
    ["Laudato si'", "Encíclica de Francisco (2015) sobre el cuidado de la casa común."],
    ["Mandamiento del amor", "Amar a Dios y al prójimo como a uno mismo."],
  ],
  familias: ["Buscad juntos una ONG de vuestra zona y lo que hace; valorad colaborar en algo concreto.", "Revisad un hábito de consumo de la familia con criterios de ecología integral.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Compromiso cristiano y transformación social: dignidad humana, Doctrina Social de la Iglesia, ecología integral y cultura del cuidado (RD 217/2022; enseñanzas de Religión católica de la ESO).",
    ideas: ["Proyecto de aprendizaje-servicio con una entidad local.", "Lectura de fragmentos de Laudato si' y relación con los ODS.", "Biografías breves de testigos del compromiso social."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Doctrina social de la Iglesia, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Doctrina_social_de_la_Iglesia" },
  ],
  revisado: "2026-11-12",
};
