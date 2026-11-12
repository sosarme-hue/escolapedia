// Latín 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda } = require("./_hum");

const CASOS = ["nominativo", "vocativo", "acusativo", "genitivo", "dativo", "ablativo"];
const ROSA = [["ros-a", "ros-ae"], ["ros-a", "ros-ae"], ["ros-am", "ros-as"], ["ros-ae", "ros-arum"], ["ros-ae", "ros-is"], ["ros-ā", "ros-is"]];
const DOM = [["domin-us", "domin-i"], ["domin-e", "domin-i"], ["domin-um", "domin-os"], ["domin-i", "domin-orum"], ["domin-o", "domin-is"], ["domin-o", "domin-is"]];

module.exports = {
  materia: "Latín",
  curso: "4-eso",
  titulo: "Las declinaciones",
  minutos: 40,
  objetivos: ["Entender qué son los casos y para qué sirven", "Identificar la declinación de un sustantivo por su enunciado", "Declinar sustantivos de la primera y la segunda declinación"],
  claves: ["caso", "declinación", "enunciado", "genitivo", "desinencia", "tema"],
  pregunta: {
    texto: "En español, «el perro muerde al hombre» y «el hombre muerde al perro» significan cosas muy distintas solo por el orden. En latín, «canis hominem mordet» y «hominem canis mordet» significan lo mismo. ¿Cómo sabe un romano quién muerde a quién?",
    respuesta: "Por la terminación de cada palabra. El latín es una lengua <mark>flexiva</mark>: los sustantivos cambian su final según la función que tienen en la oración. Esos finales son los <b>casos</b>, y cada grupo de palabras que se declina igual forma una <b>declinación</b>.",
  },
  bloques: [
    {
      html: `<h3>Los seis casos</h3><p>Un <mark>caso</mark> es la forma que toma una palabra según su función. El latín tiene seis: <b>nominativo</b> (sujeto), <b>vocativo</b> (para llamar a alguien), <b>acusativo</b> (complemento directo), <b>genitivo</b> (complemento del nombre, «de»), <b>dativo</b> (complemento indirecto, «a, para») y <b>ablativo</b> (complementos circunstanciales: con, en, desde, por…).</p>`,
      svg: filas("Los seis casos y su función principal", [["Nom.", "sujeto", "var(--red)"], ["Voc.", "llamada: ¡oh, señor!", "var(--sun)"], ["Ac.", "complemento directo", "var(--pen)"], ["Gen.", "complemento del nombre", "var(--leaf)"], ["Dat./Abl.", "c. indirecto / circunstancial", "var(--muted)"]]),
    },
    {
      html: `<h3>Tema y desinencia</h3><p>Cada forma tiene dos partes: el <b>tema</b> o raíz, que lleva el significado (<i>ros-</i>), y la <mark>desinencia</mark>, que indica caso y número (<i>-am</i> = acusativo singular). Declinar es recorrer todas las formas: 6 casos × 2 números = 12 formas. Muchas desinencias se repiten, por eso el contexto ayuda a distinguirlas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La palabra rosam dividida en tema ros y desinencia am">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="40" y="50" width="100" height="56" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/>
        <rect x="140" y="50" width="80" height="56" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="3"/>
        <text x="90" y="88" text-anchor="middle" font-size="30" font-weight="700" fill="var(--pen)" ${D}>ros</text>
        <text x="180" y="88" text-anchor="middle" font-size="30" font-weight="700" fill="var(--red)" ${D}>am</text>
        <text x="90" y="132" text-anchor="middle" font-size="12" font-weight="700" fill="var(--pen)" ${F}>tema: significado</text>
        <text x="180" y="132" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)" ${F}>desinencia</text>
        <text x="180" y="148" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>acusativo sing.</text>
      </svg>`,
    },
    {
      html: `<h3>El enunciado y las cinco declinaciones</h3><p>Los diccionarios dan cada sustantivo con su <mark>enunciado</mark>: nominativo y genitivo singular, más el género. La terminación del <b>genitivo singular</b> indica la declinación: <b>-ae</b> 1.ª (<i>rosa, rosae</i>), <b>-i</b> 2.ª (<i>dominus, domini</i>), <b>-is</b> 3.ª (<i>rex, regis</i>), <b>-us</b> 4.ª (<i>manus, manus</i>) y <b>-ei</b> 5.ª (<i>dies, diei</i>).</p>`,
      svg: rueda("Genitivo singular de las cinco declinaciones", "GENITIVO|SINGULAR", [["1.ª -ae", "var(--red)"], ["2.ª -i", "var(--pen)"], ["3.ª -is", "var(--leaf)"], ["4.ª -us", "var(--sun)"], ["5.ª -ei", "var(--bac)"]], "var(--ink)"),
    },
    {
      html: `<h3>Primera y segunda declinación</h3><p>La <b>primera</b> agrupa sobre todo sustantivos <b>femeninos</b> en <i>-a</i> (<i>puella</i>, niña; <i>terra</i>, tierra), aunque hay algunos masculinos de oficios (<i>nauta</i>, marinero; <i>agricola</i>, agricultor). La <b>segunda</b> tiene masculinos en <i>-us</i> o <i>-er</i> (<i>dominus</i>, <i>puer</i>) y neutros en <i>-um</i> (<i>templum</i>). Regla de los <mark>neutros</mark>: nominativo, vocativo y acusativo son iguales, y en plural terminan en <b>-a</b> (<i>templa</i>).</p>`,
      svg: dos("Ejemplos de primera y segunda declinación", ["1.ª", ["puella, -ae", "terra, -ae", "aqua, -ae", "nauta, -ae (m.)", "femeninos"], "var(--red)"], ["2.ª", ["dominus, -i", "puer, -i", "templum, -i (n.)", "bellum, -i (n.)", "masc. y neutros"], "var(--pen)"]),
    },
  ],
  figura: {
    titulo: "Rosa, rosae (1.ª) y dominus, domini (2.ª)",
    svg: `<svg viewBox="0 0 680 270" role="img" aria-label="Tabla de declinación de rosa y dominus en singular y plural">
      <rect width="680" height="270" rx="16" fill="var(--paper)"/>
      <g ${F} font-size="14" text-anchor="middle">
        <text x="250" y="30" font-weight="700" fill="var(--red)" ${D} font-size="17">rosa, rosae</text>
        <text x="510" y="30" font-weight="700" fill="var(--pen)" ${D} font-size="17">dominus, domini</text>
        ${["singular", "plural", "singular", "plural"].map((t, i) => `<text x="${[190, 310, 450, 570][i]}" y="54" font-size="12" fill="var(--muted)">${t}</text>`).join("")}
        ${CASOS.map((c, i) => { const y = 82 + i * 30; return `<rect x="20" y="${y - 20}" width="640" height="28" rx="6" fill="${i % 2 ? "var(--card)" : "transparent"}"/><text x="76" y="${y}" font-weight="700" fill="var(--ink)">${c}</text>${[ROSA[i][0], ROSA[i][1], DOM[i][0], DOM[i][1]].map((f, j) => { const [t, d] = f.split("-"); return `<text x="${[190, 310, 450, 570][j]}" y="${y}" fill="var(--ink)">${t}<tspan font-weight="700" fill="${j < 2 ? "var(--red)" : "var(--pen)"}">${d}</tspan></text>`; }).join("")}`; }).join("")}
      </g>
    </svg>`,
  },
  video: { id: "2gn8de1QxKk", titulo: "Latín: declinaciones y cómo clasificar los sustantivos", canal: "Paco Álvarez philologus", vistas: 122994, megusta: 2496, busqueda: "declinaciones latinas explicación" },
  quiz: [
    { q: "¿Qué caso se usa para el sujeto?", o: ["Acusativo", "Nominativo", "Dativo"], a: 1, e: "El nominativo marca el sujeto y el atributo." },
    { q: "¿Qué indica el genitivo singular del enunciado?", o: ["El género", "La declinación", "El significado"], a: 1, e: "-ae 1.ª, -i 2.ª, -is 3.ª, -us 4.ª, -ei 5.ª." },
    { q: "«Rosam» es…", o: ["nominativo singular", "acusativo singular", "genitivo plural"], a: 1, e: "La desinencia -am marca el acusativo singular de la 1.ª." },
    { q: "Rex, regis pertenece a la…", o: ["2.ª declinación", "3.ª declinación", "4.ª declinación"], a: 1, e: "El genitivo en -is indica tercera declinación." },
    { q: "El complemento indirecto va en…", o: ["dativo", "ablativo", "vocativo"], a: 0, e: "El dativo responde a «a quién, para quién»." },
  ],
  examen: [
    { q: "El genitivo plural de dominus es…", o: ["dominis", "dominorum", "dominos"], a: 1, e: "La 2.ª declinación hace el genitivo plural en -orum." },
    { q: "El plural de templum (neutro) en nominativo es…", o: ["templi", "templa", "templos"], a: 1, e: "Los neutros hacen el nominativo, vocativo y acusativo plural en -a." },
    { q: "«Puellis» puede ser…", o: ["dativo o ablativo plural", "acusativo singular", "nominativo plural"], a: 0, e: "En la 1.ª, dativo y ablativo plural coinciden en -is." },
  ],
  feynman: ["Por qué el latín necesita casos y el español no", "Qué función expresa cada uno de los seis casos", "Cómo se averigua la declinación con el enunciado", "La regla de los neutros"],
  mapa: mapa("DECLINACIONES", "var(--red)", [
    ["Casos", "nom · voc · ac · gen · dat · abl", "var(--pen)"],
    ["Palabra", "tema + desinencia", "var(--ink)"],
    ["Enunciado", "genitivo → declinación", "var(--leaf)"],
    ["1.ª y 2.ª", "rosa, -ae · dominus, -i", "var(--sun)"],
  ], 260),
  tarjetas: [
    ["Los seis casos latinos", "Nominativo, vocativo, acusativo, genitivo, dativo y ablativo."],
    ["Genitivo singular de cada declinación", "1.ª -ae, 2.ª -i, 3.ª -is, 4.ª -us, 5.ª -ei."],
    ["Acusativo singular de la 1.ª", "-am (rosam)."],
    ["Genitivo plural de la 2.ª", "-orum (dominorum)."],
    ["Regla de los neutros", "Nom., voc. y ac. iguales; en plural terminan en -a."],
  ],
  familias: ["Pedidle que «recite» la declinación de rosa como una canción y comprobad con la tabla.", "Buscad en español palabras derivadas de los sustantivos del tema (terrestre, dominio, acuático).", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El sistema de la lengua latina: flexión nominal, casos y sus funciones, primera y segunda declinación (RD 217/2022, Latín 4º).",
    ideas: ["Tarjetas de desinencias para juegos de emparejar caso y función.", "Comparar con el alemán o el ruso, lenguas que conservan casos.", "Declinar sintagmas sustantivo + adjetivo (puella bona)."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Declinación latina, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Declinaci%C3%B3n_latina" },
  ],
  revisado: "2026-11-12",
};
