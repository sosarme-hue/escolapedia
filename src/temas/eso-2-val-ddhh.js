// Valores Cívicos y Éticos 2º ESO: los derechos humanos. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Valores Cívicos y Éticos",
  curso: C,
  titulo: "Los derechos humanos",
  minutos: 45,
  objetivos: ["Definir los derechos humanos y sus características", "Conocer el origen de la Declaración Universal de 1948", "Clasificar los derechos en generaciones", "Identificar vulneraciones actuales y organismos que los defienden"],
  claves: ["derechos humanos", "Declaración Universal", "ONU", "universalidad", "generaciones de derechos", "derechos del niño", "ONG"],
  pregunta: {
    texto: "Tienes derecho a ir al colegio, a decir lo que piensas y a que no te traten mal. ¿Quién te ha dado esos derechos?",
    respuesta: "Nadie te los «da»: los tienes por ser persona. Son <b>derechos humanos</b>, basados en la <b>dignidad</b>. Lo que sí hacen los Estados y la comunidad internacional es <mark>reconocerlos</mark> por escrito y comprometerse a protegerlos, como en la Declaración Universal de 1948.",
  },
  bloques: [
    {
      html: `<h3>¿Qué son los derechos humanos?</h3><p>Los <b>derechos humanos</b> son las libertades y garantías básicas que corresponden a <b>todas las personas</b> por el hecho de serlo, para poder vivir con dignidad. Sus características:</p><ul><li><b>Universales</b>: para todas las personas, en todos los países.</li><li><b>Inalienables</b>: nadie puede quitárselos ni renunciar a ellos.</li><li><b>Indivisibles e interdependientes</b>: todos son igual de importantes y se necesitan unos a otros.</li><li><b>Iguales y no discriminatorios</b>: sin distinción de origen, sexo, religión u opinión.</li></ul>`,
      video: { id: "d82KR5sbZDU", titulo: "Historia de los derechos humanos", canal: "PorUnPlanetaUnido", vistas: 838613 },
    },
    {
      html: `<h3>Un largo camino</h3><p>La idea de que todas las personas tienen derechos se fue abriendo paso poco a poco:</p>`,
      svg: svg("Línea del tiempo de los derechos humanos desde el Cilindro de Ciro hasta la Convención de los Derechos del Niño", `<path d="M14 90 H 248" stroke="var(--ink)" stroke-width="2.5"/>${[["539 a.C.", "Ciro (Persia)", 36, -1], ["1215", "Carta Magna", 84, 1], ["1789", "Derechos del Hombre", 130, -1], ["1948", "Declaración Universal", 178, 1], ["1989", "Conv. Niño", 226, -1]].map(([a, b, x, d]) => `<circle cx="${x}" cy="90" r="5" fill="var(--eso)"/>${t(x, d < 0 ? 64 : 116, a, { c: "var(--red)", s: 11 })}${t(x, d < 0 ? 48 : 132, b, { s: 10 })}`).join("")}${t(130, 168, "de pocos privilegiados a todas las personas", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>La Declaración Universal de 1948</h3><p>Tras los horrores de la <b>Segunda Guerra Mundial</b> y el Holocausto, los países fundaron la <b>ONU</b> (1945) para mantener la paz. El <b>10 de diciembre de 1948</b>, su Asamblea General aprobó en París la <b>Declaración Universal de los Derechos Humanos</b> (DUDH).</p><p>Tiene un preámbulo y <b>30 artículos</b>. En su redacción participó una comisión presidida por <b>Eleanor Roosevelt</b>. Es el documento más traducido del mundo. Cada 10 de diciembre se celebra el <mark>Día de los Derechos Humanos</mark>.</p><p>La DUDH no es una ley con castigos, pero inspiró muchos tratados y constituciones, como la española de 1978.</p>`,
      video: { id: "aXwmuKLKkZ8", titulo: "Declaración Universal de Derechos Humanos", canal: "Estudia Derechos Humanos", vistas: 91752 },
    },
    {
      html: `<h3>Algunos artículos clave</h3>${tabla(["Artículo", "Qué dice (resumido)"], [["1", "Todos nacemos libres e iguales en dignidad y derechos"], ["2", "Sin distinción de raza, color, sexo, idioma, religión u opinión"], ["3", "Derecho a la vida, la libertad y la seguridad"], ["4 y 5", "Nadie será esclavo ni sometido a torturas"], ["18 y 19", "Libertad de pensamiento, religión y expresión"], ["21", "Derecho a participar en el gobierno del país"], ["25", "Derecho a un nivel de vida adecuado: alimentación, vivienda, salud"], ["26", "Derecho a la educación, gratuita y obligatoria en lo básico"]])}`,
    },
    {
      html: `<h3>Las generaciones de derechos</h3><p>Se suelen agrupar en «generaciones», según el momento histórico en que se reivindicaron:</p>`,
      svg: svg("Tres generaciones de derechos: civiles y políticos, económicos y sociales, y de solidaridad", chips([["1.ª: civiles y políticos", "vida · libertad · voto · expresión", "var(--pen)"], ["2.ª: económicos y sociales", "educación · salud · trabajo · vivienda", "var(--sun)"], ["3.ª: de solidaridad", "paz · medio ambiente · desarrollo", "var(--leaf)"], ["(se habla de una 4.ª)", "derechos digitales · privacidad en internet", "var(--inf)"]], 8, 36), 180),
    },
    {
      html: `<h3>Los derechos de la infancia</h3><p>En <b>1989</b> la ONU aprobó la <b>Convención sobre los Derechos del Niño</b>, que protege a todos los menores de 18 años. España la ratificó en 1990. Algunos de sus principios:</p><ul><li><b>No discriminación</b>.</li><li><b>Interés superior del menor</b>: en las decisiones que les afecten, lo primero es su bienestar.</li><li>Derecho a la <b>vida y al desarrollo</b>: salud, educación, juego.</li><li>Derecho a <b>ser escuchado</b> y a que su opinión se tenga en cuenta.</li><li>Protección contra el maltrato, la explotación y el trabajo infantil.</li></ul><p>El organismo de la ONU que se ocupa de la infancia es <b>UNICEF</b>.</p>`,
    },
    {
      html: `<h3>¿Se cumplen los derechos humanos?</h3><p>Aunque casi todos los países los reconocen, todavía se vulneran a diario:</p><ul><li>Unos <b>160 millones</b> de niños y niñas trabajan en el mundo (OIT y UNICEF, 2020).</li><li>Millones de personas viven en <b>pobreza extrema</b> o sin acceso a agua potable.</li><li>Hay países con <b>pena de muerte</b>, censura o persecución por opiniones.</li><li>Guerras que obligan a huir a millones de <b>personas refugiadas</b>.</li><li>Discriminación de mujeres, minorías o personas LGTBI.</li></ul><p>También en los países ricos hay vulneraciones: acoso, desigualdad, discriminación.</p>`,
    },
    {
      html: `<h3>¿Quién los defiende?</h3><ul><li><b>Organismos internacionales</b>: la ONU y su Alto Comisionado para los Derechos Humanos, UNICEF, ACNUR (refugiados); en Europa, el <b>Tribunal Europeo de Derechos Humanos</b> (Estrasburgo).</li><li><b>Estados</b>: sus constituciones, tribunales y, en España, el <b>Defensor del Pueblo</b>.</li><li><b>ONG</b>: Amnistía Internacional, Save the Children, Cruz Roja, Médicos Sin Fronteras…</li><li><b>Cada persona</b>: denunciando injusticias, respetando a los demás, participando.</li></ul><p>Los derechos humanos se defienden también en lo pequeño: en el patio, en las redes, en casa.</p>`,
    },
  ],
  figura: {
    titulo: "Los derechos humanos",
    svg: filas("Resumen: definición, características, DUDH, generaciones, infancia y defensa", [["Qué son", "garantías básicas de toda persona", "var(--red)"], ["Rasgos", "universales · inalienables · indivisibles", "var(--pen)"], ["DUDH", "ONU · 10-12-1948 · 30 artículos", "var(--sun)"], ["Generaciones", "civiles · sociales · solidaridad", "var(--leaf)"], ["Infancia", "Convención 1989 · UNICEF", "var(--inf)"], ["Defensa", "ONU · tribunales · ONG · cada persona", "var(--ink)"]], 200),
  },
  video: { id: "d82KR5sbZDU", titulo: "Historia de los derechos humanos", canal: "PorUnPlanetaUnido", vistas: 838613, megusta: 0, busqueda: "historia de los derechos humanos" },
  quiz: mezcla([
    { q: "Los derechos humanos se tienen…", o: ["por ser persona", "si los compras", "a partir de los 18 años"], a: 0, e: "Basados en la dignidad." },
    { q: "Que valgan para todas las personas significa que son…", o: ["universales", "inalienables", "opcionales"], a: 0, e: "En todo el mundo." },
    { q: "Que nadie pueda quitártelos significa que son…", o: ["inalienables", "universales", "temporales"], a: 0, e: "Ni renunciar a ellos." },
    { q: "La DUDH se aprobó en…", o: ["1948", "1789", "1978"], a: 0, e: "10 de diciembre." },
    { q: "¿Cuántos artículos tiene la DUDH?", o: ["30", "10", "169"], a: 0, e: "Más el preámbulo." },
    { q: "El derecho a la educación es de…", o: ["2.ª generación", "1.ª generación", "3.ª generación"], a: 0, e: "Económicos, sociales y culturales." },
    { q: "El derecho a un medio ambiente sano es de…", o: ["3.ª generación", "1.ª generación", "2.ª generación"], a: 0, e: "Solidaridad." },
    { q: "La Convención sobre los Derechos del Niño es de…", o: ["1989", "1948", "2015"], a: 0, e: "ONU." },
    { q: "El organismo de la ONU para la infancia es…", o: ["UNICEF", "ACNUR", "OTAN"], a: 0, e: "Fondo para la Infancia." },
    { q: "En España, la institución que defiende los derechos ante la Administración es…", o: ["el Defensor del Pueblo", "el Senado", "la Policía"], a: 0, e: "Recibe quejas." },
  ]),
  examen: mezcla([
    { q: "La ONU se fundó en 1945 tras…", o: ["la Segunda Guerra Mundial", "la Revolución francesa", "la caída del muro de Berlín"], a: 0, e: "Para mantener la paz." },
    { q: "El «interés superior del menor» significa que…", o: ["su bienestar es lo primero en lo que le afecta", "los menores mandan", "decide la escuela"], a: 0, e: "Convención de 1989." },
    { q: "La libertad de expresión es un derecho de…", o: ["1.ª generación", "2.ª generación", "3.ª generación"], a: 0, e: "Civiles y políticos." },
  ]),
  feynman: ["Qué son los derechos humanos y sus características", "Por qué y cuándo se aprobó la DUDH", "Tres artículos importantes", "Las tres generaciones de derechos", "Quién defiende los derechos humanos"],
  mapa: mapa("DERECHOS HUMANOS", "var(--eso)", [
    ["Rasgos", "universales · inalienables", "var(--pen)"],
    ["DUDH", "1948 · 30 artículos", "var(--sun)"],
    ["Generaciones", "1.ª · 2.ª · 3.ª", "var(--leaf)"],
    ["Defensa", "ONU · ONG · tú", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Derechos humanos", "Garantías básicas de toda persona para vivir con dignidad."],
    ["Universales", "Valen para todas las personas del mundo."],
    ["Inalienables", "No se pueden quitar ni renunciar a ellos."],
    ["DUDH", "Declaración Universal, ONU, 10 de diciembre de 1948."],
    ["1.ª generación", "Civiles y políticos: vida, libertad, voto."],
    ["2.ª generación", "Económicos y sociales: educación, salud."],
    ["3.ª generación", "Solidaridad: paz, medio ambiente."],
    ["UNICEF", "Organismo de la ONU para la infancia."],
  ],
  familias: ["Leed juntos los artículos 1, 19 y 26 de la DUDH.", "Buscad una noticia sobre un derecho humano vulnerado y comentadla.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Los derechos humanos: fundamento en la dignidad, características, historia y Declaración Universal; generaciones de derechos; derechos de la infancia; organismos e instituciones de defensa (RD 217/2022, Educación en Valores Cívicos y Éticos, bloque B, sociedad, justicia y democracia).",
    ideas: ["Mural con los 30 artículos ilustrados por la clase.", "Investigación sobre una ONG y exposición oral.", "Celebración del 10 de diciembre en el centro."],
  },
  fuentes: [RD, { t: "Declaración Universal de Derechos Humanos (ONU)", url: "https://www.un.org/es/about-us/universal-declaration-of-human-rights" }, { t: "UNICEF: Convención sobre los Derechos del Niño", url: "https://www.unicef.es/causas/derechos-ninos/convencion-derechos-ninos" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Un gobierno encarcela a un periodista por criticarlo. ¿Qué derecho vulnera y de qué generación es?", pasos: ["Criticar al gobierno es expresar opiniones.", "Artículo 19: libertad de expresión.", "Es un derecho civil y político."], resultado: "Libertad de expresión, 1.ª generación." },
    { enunciado: "Una niña de 12 años trabaja en una mina en lugar de ir a la escuela. ¿Qué derechos se vulneran?", pasos: ["Derecho a la educación (art. 26).", "Protección contra la explotación infantil (Convención de 1989).", "Derecho a la salud."], resultado: "Educación, salud y protección de la infancia." },
    { enunciado: "Clasifica: derecho al voto, derecho a la vivienda, derecho a la paz.", pasos: ["Voto: participación política → 1.ª.", "Vivienda: nivel de vida → 2.ª.", "Paz: solidaridad entre pueblos → 3.ª."], resultado: "1.ª, 2.ª y 3.ª generación." },
  ],
  errores: [
    "Pensar que los derechos humanos los «regala» el gobierno.",
    "Creer que solo se vulneran en países lejanos.",
    "Confundir la DUDH (1948) con la Declaración de 1789.",
    "Pensar que la DUDH es una ley con multas.",
    "Olvidar que los derechos van unidos a deberes de respeto hacia los demás.",
  ],
  ejercicios: [
    { q: "Define derechos humanos.", sol: "Libertades y garantías básicas de toda persona por el hecho de serlo." },
    { q: "Explica tres características de los derechos humanos.", sol: "Universales, inalienables e indivisibles." },
    { q: "¿Por qué se aprobó la DUDH en 1948?", sol: "Tras los horrores de la Segunda Guerra Mundial, para evitar que se repitieran." },
    { q: "Resume los artículos 1, 3 y 26.", sol: "Igualdad en dignidad; vida, libertad y seguridad; educación." },
    { q: "Escribe dos derechos de cada generación.", sol: "1.ª: vida, voto. 2.ª: educación, salud. 3.ª: paz, medio ambiente." },
    { q: "Cita cuatro hitos de la historia de los derechos humanos.", sol: "Cilindro de Ciro, Carta Magna 1215, Declaración de 1789, DUDH 1948." },
    { q: "Explica dos principios de la Convención sobre los Derechos del Niño.", sol: "No discriminación e interés superior del menor (o derecho a ser escuchado)." },
    { q: "Escribe tres vulneraciones actuales de los derechos humanos.", sol: "Trabajo infantil, pobreza extrema, persecución por opiniones." },
    { q: "Nombra dos organismos y dos ONG que defienden los derechos humanos.", sol: "ONU, Tribunal Europeo; Amnistía Internacional, Save the Children." },
    { q: "¿Cómo puedes defender los derechos humanos en tu día a día?", sol: "Respetando a todos, no discriminando, denunciando el acoso." },
  ],
};
