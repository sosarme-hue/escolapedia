// Latín 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda } = require("./_hum");

const PERS = ["1.ª sing.", "2.ª sing.", "3.ª sing.", "1.ª pl.", "2.ª pl.", "3.ª pl."];
const AMO = ["am-o", "ama-s", "ama-t", "ama-mus", "ama-tis", "ama-nt"];
const AMABAM = ["amaba-m", "amaba-s", "amaba-t", "amaba-mus", "amaba-tis", "amaba-nt"];
const SUM = ["sum", "es", "est", "sumus", "estis", "sunt"];
const ES = ["yo amo", "tú amas", "él ama", "nosotros amamos", "vosotros amáis", "ellos aman"];

module.exports = {
  materia: "Latín",
  curso: "4-eso",
  titulo: "El verbo latino",
  minutos: 40,
  objetivos: ["Reconocer las cuatro conjugaciones a partir del enunciado", "Identificar las desinencias personales de la voz activa", "Conjugar el presente y el pretérito imperfecto de indicativo y el verbo sum"],
  claves: ["conjugación", "enunciado verbal", "desinencia personal", "tema de presente", "infinitivo", "verbo sum"],
  pregunta: {
    texto: "«Veni, vidi, vici»: «llegué, vi, vencí». Con solo tres palabras Julio César contó una victoria. ¿Cómo caben sujeto, tiempo y significado en una sola palabra?",
    respuesta: "Porque el <mark>verbo latino</mark>, como el español, lleva en su terminación la persona y el número (<i>-i</i> = yo) y en su forma el tiempo (perfecto). Aprender a separar <b>tema</b>, <b>marca de tiempo</b> y <b>desinencia</b> permite traducir cualquier verbo.",
  },
  bloques: [
    {
      html: `<h3>El enunciado del verbo</h3><p>Los diccionarios dan cinco formas, el <mark>enunciado</mark>: 1.ª persona del presente, 2.ª del presente, infinitivo, 1.ª del perfecto y supino. Por ejemplo: <b>amo, amas, amare, amavi, amatum</b> (amar). Del infinitivo sale la <b>conjugación</b>, y del presente y el perfecto salen los dos grandes temas: el <b>tema de presente</b> (<i>ama-</i>) y el <b>tema de perfecto</b> (<i>amav-</i>).</p>`,
      svg: filas("Enunciado del verbo amar", [["amo", "presente, 1.ª persona", "var(--red)"], ["amas", "presente, 2.ª persona", "var(--red)"], ["amare", "infinitivo → conjugación", "var(--pen)"], ["amavi", "perfecto → tema de perfecto", "var(--leaf)"], ["amatum", "supino", "var(--muted)"]]),
    },
    {
      html: `<h3>Las cuatro conjugaciones</h3><p>Según la terminación del infinitivo hay cuatro <mark>conjugaciones</mark>: 1.ª en <b>-āre</b> (<i>amo, amāre</i>), 2.ª en <b>-ēre</b> (<i>moneo, monēre</i>, aconsejar), 3.ª en <b>-ĕre</b> (<i>lego, legĕre</i>, leer) y 4.ª en <b>-īre</b> (<i>audio, audīre</i>, oír). Hay además una conjugación mixta (<i>capio, capĕre</i>, coger). Fíjate en la cantidad: la 2.ª tiene la e larga y la 3.ª, breve.</p>`,
      svg: rueda("Las cuatro conjugaciones por su infinitivo", "INFINITIVO", [["1.ª -āre", "var(--red)"], ["2.ª -ēre", "var(--pen)"], ["3.ª -ĕre", "var(--leaf)"], ["4.ª -īre", "var(--sun)"]], "var(--ink)"),
    },
    {
      html: `<h3>Las desinencias personales</h3><p>La terminación indica persona y número. En la voz activa las <mark>desinencias personales</mark> son: <b>-o/-m</b> (yo), <b>-s</b> (tú), <b>-t</b> (él, ella), <b>-mus</b> (nosotros), <b>-tis</b> (vosotros) y <b>-nt</b> (ellos). Como el verbo ya indica el sujeto, el pronombre suele omitirse: <i>cantamus</i> = (nosotros) cantamos. El perfecto usa desinencias propias: <i>-i, -isti, -it, -imus, -istis, -erunt</i>.</p>`,
      svg: dos("Desinencias de presente y de perfecto", ["Presente", ["-o / -m", "-s", "-t", "-mus", "-tis · -nt"], "var(--red)"], ["Perfecto", ["-i", "-isti", "-it", "-imus", "-istis · -erunt"], "var(--leaf)"]),
    },
    {
      html: `<h3>Presente, imperfecto y el verbo sum</h3><p>El <b>presente</b> se forma con tema de presente + desinencia: <i>ama-t</i>, él ama. El <mark>pretérito imperfecto</mark> añade la marca <b>-ba-</b>: <i>ama-ba-t</i>, él amaba. El verbo <b>sum</b> (ser, estar), enunciado <i>sum, es, esse, fui</i>, es irregular y muy frecuente: <i>sum, es, est, sumus, estis, sunt</i>; imperfecto <i>eram, eras, erat…</i></p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La forma amabat dividida en tema ama, marca ba y desinencia t">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[30, 86, "ama", "tema", "var(--pen)"], [116, 60, "ba", "imperf.", "var(--sun)"], [176, 54, "t", "él", "var(--red)"]].map(([x, w, t, l, c]) => `<rect x="${x}" y="50" width="${w}" height="54" rx="10" fill="var(--card)" stroke="${c}" stroke-width="3"/><text x="${x + w / 2}" y="87" text-anchor="middle" font-size="28" font-weight="700" fill="${c}" ${D}>${t}</text><text x="${x + w / 2}" y="126" text-anchor="middle" font-size="11.5" font-weight="700" fill="${c}" ${F}>${l}</text>`).join("")}
        <text x="130" y="160" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>amabat = él amaba</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Presente e imperfecto de amo y presente de sum",
    svg: `<svg viewBox="0 0 680 250" role="img" aria-label="Tabla con el presente y el imperfecto de amo, el presente de sum y su traducción">
      <rect width="680" height="250" rx="16" fill="var(--paper)"/>
      <g ${F} font-size="14" text-anchor="middle">
        ${["persona", "presente", "imperfecto", "sum", "traducción"].map((t, i) => `<text x="${[70, 200, 320, 430, 570][i]}" y="34" font-weight="700" fill="var(--muted)" font-size="12.5">${t}</text>`).join("")}
        ${PERS.map((p, i) => { const y = 66 + i * 30; return `<rect x="20" y="${y - 20}" width="640" height="28" rx="6" fill="${i % 2 ? "var(--card)" : "transparent"}"/><text x="70" y="${y}" fill="var(--ink)" font-weight="700">${p}</text>${[AMO[i], AMABAM[i]].map((f, j) => { const [t, d] = f.split("-"); return `<text x="${[200, 320][j]}" y="${y}" fill="var(--ink)">${t}<tspan font-weight="700" fill="var(--red)">${d}</tspan></text>`; }).join("")}<text x="430" y="${y}" fill="var(--pen)" font-weight="700">${SUM[i]}</text><text x="570" y="${y}" fill="var(--muted)">${ES[i]}</text>`; }).join("")}
      </g>
    </svg>`,
  },
  video: { id: "B43yxoHHSd4", titulo: "Latín: clasificar verbos en conjugaciones", canal: "Paco Álvarez philologus", vistas: 76652, megusta: 1402, busqueda: "conjugaciones latinas" },
  quiz: [
    { q: "¿Qué forma del enunciado indica la conjugación?", o: ["La 1.ª persona del presente", "El infinitivo", "El supino"], a: 1, e: "-āre 1.ª, -ēre 2.ª, -ĕre 3.ª, -īre 4.ª." },
    { q: "Audio, audire pertenece a la…", o: ["1.ª conjugación", "3.ª conjugación", "4.ª conjugación"], a: 2, e: "El infinitivo en -īre indica la cuarta." },
    { q: "La desinencia -mus indica…", o: ["yo", "nosotros", "ellos"], a: 1, e: "Amamus = (nosotros) amamos." },
    { q: "«Amabant» significa…", o: ["aman", "amaban", "amaron"], a: 1, e: "-ba- marca el imperfecto y -nt la 3.ª persona del plural." },
    { q: "«Sunt» significa…", o: ["soy", "somos", "son"], a: 2, e: "Es la 3.ª persona del plural del presente de sum." },
  ],
  examen: [
    { q: "En «Veni, vidi, vici», la desinencia -i indica…", o: ["presente, nosotros", "perfecto, yo", "imperfecto, él"], a: 1, e: "Es la desinencia de la 1.ª persona del singular del perfecto." },
    { q: "Moneo, monēre y lego, legĕre se distinguen por…", o: ["la cantidad de la e del infinitivo", "el supino", "nada, son iguales"], a: 0, e: "La 2.ª tiene e larga; la 3.ª, e breve." },
    { q: "«Erat» es…", o: ["presente de sum", "imperfecto de sum: era/estaba", "perfecto de amo"], a: 1, e: "El imperfecto de sum es eram, eras, erat…" },
  ],
  feynman: ["Las cinco formas del enunciado y para qué sirve cada una", "Cómo se reconoce la conjugación", "Las desinencias personales de la voz activa", "Cómo se forma el imperfecto y cómo se conjuga sum"],
  mapa: mapa("VERBO LATINO", "var(--red)", [
    ["Enunciado", "amo, amas, amare, amavi, amatum", "var(--ink)"],
    ["Conjugaciones", "-āre · -ēre · -ĕre · -īre", "var(--pen)"],
    ["Desinencias", "-o/m · -s · -t · -mus · -tis · -nt", "var(--red)"],
    ["Tiempos", "presente · -ba- · sum", "var(--leaf)"],
  ], 270),
  tarjetas: [
    ["Enunciado de amar", "amo, amas, amare, amavi, amatum."],
    ["Infinitivos de las cuatro conjugaciones", "-āre, -ēre, -ĕre, -īre."],
    ["Desinencias personales activas", "-o/-m, -s, -t, -mus, -tis, -nt."],
    ["Marca del pretérito imperfecto", "-ba- (amabam, amabas…)."],
    ["Presente de sum", "sum, es, est, sumus, estis, sunt."],
  ],
  familias: ["Pedidle que os traduzca «Veni, vidi, vici» y que os explique la terminación.", "Jugad a decir un verbo español y que adivine de qué verbo latino viene (cantar, canto; leer, lego).", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El sistema de la lengua latina: flexión verbal, conjugaciones, desinencias, presente e imperfecto, verbo sum (RD 217/2022, Latín 4º).",
    ideas: ["Dado de personas y dado de verbos para conjugar en voz alta.", "Comparar las desinencias latinas con las españolas (amamus/amamos).", "Traducción de frases breves con sum y un verbo de la 1.ª."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Conjugación latina, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Conjugaci%C3%B3n_latina" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Conjugar el presente, el imperfecto y el futuro de indicativo", "Formar el perfecto a partir del enunciado"],
  bloques: [
    { tras: "Las cuatro conjugaciones", html: `<h3>Presente de indicativo de las cuatro conjugaciones</h3>${tabla(["Persona", "1.ª amo", "2.ª moneo", "3.ª lego", "4.ª audio"], [["1.ª sg.", "amo", "moneo", "lego", "audio"], ["2.ª sg.", "amas", "mones", "legis", "audis"], ["3.ª sg.", "amat", "monet", "legit", "audit"], ["1.ª pl.", "amamus", "monemus", "legimus", "audimus"], ["2.ª pl.", "amatis", "monetis", "legitis", "auditis"], ["3.ª pl.", "amant", "monent", "legunt", "audiunt"]])}<p>En la 3.ª conjugación aparece una <mark>vocal de unión</mark> (i, u) entre la raíz y la desinencia: <i>leg-i-t</i>, <i>leg-u-nt</i>.</p>`, video: { id: "8FboNFb4HZc", titulo: "El presente de indicativo del verbo sum", canal: "Un Profe de Latín", vistas: 8793, megusta: 0 } },
    { tras: "Presente, imperfecto", html: `<h3>El futuro imperfecto</h3><p>El futuro se forma de dos maneras. En la <b>1.ª y 2.ª conjugación</b> se añade <b>-b-</b> + vocal: <i>ama-b-o, ama-bi-s, ama-bi-t, ama-bi-mus, ama-bi-tis, ama-bu-nt</i> (amaré, amarás…). En la <b>3.ª y 4.ª</b> se usa <b>-a-</b> en la 1.ª persona y <b>-e-</b> en las demás: <i>leg-a-m, leg-e-s, leg-e-t, leg-e-mus, leg-e-tis, leg-e-nt</i> (leeré, leerás…); <i>audi-a-m, audi-e-s</i>… El verbo <b>sum</b> hace <i>ero, eris, erit, erimus, eritis, erunt</i>. Cuidado: <mark>leges</mark> puede ser futuro de <i>lego</i> («leerás») o acusativo plural de <i>lex</i> («leyes»).</p>` },
    { tras: "Presente, imperfecto", html: `<h3>El tema de perfecto</h3><p>El enunciado de un verbo tiene cuatro formas: <i>amo, amas, amare, amavi</i>. La cuarta, la 1.ª persona del <b>pretérito perfecto</b>, da el <mark>tema de perfecto</mark>: quitando la -i final (<i>amav-</i>). A él se añaden unas desinencias propias:</p>${tabla(["Persona", "Desinencia", "amo → amav-", "sum → fu-"], [["1.ª sg.", "-i", "amavi (amé)", "fui"], ["2.ª sg.", "-isti", "amavisti", "fuisti"], ["3.ª sg.", "-it", "amavit", "fuit"], ["1.ª pl.", "-imus", "amavimus", "fuimus"], ["2.ª pl.", "-istis", "amavistis", "fuistis"], ["3.ª pl.", "-erunt", "amaverunt", "fuerunt"]])}<p>Por eso es imprescindible aprender el enunciado completo: <i>lego, -is, -ere, legi</i>; <i>video, -es, -ere, vidi</i>; <i>venio, -is, -ire, veni</i>.</p>` },
    { tras: "Presente, imperfecto", html: `<h3>Del latín al español</h3><p>Muchas formas verbales españolas vienen casi directamente del latín: <i>amo</i> > amo, <i>amas</i> > amas, <i>amat</i> > ama, <i>amabam</i> > amaba, <i>amavi</i> > amé. Otras se crearon nuevas: el <b>futuro</b> español nace de una perífrasis del latín vulgar, <i>amare habeo</i> («tengo que amar») > amaré, y los <b>tiempos compuestos</b> (he amado) proceden de <i>habeo amatum</i>. La famosa frase de César, <mark>«Veni, vidi, vici»</mark> («llegué, vi, vencí»), son tres perfectos de 1.ª persona: <i>venio</i>, <i>video</i> y <i>vinco</i>.</p>` },
  ],
  ejemplos: [
    { enunciado: "Analiza «audiebant».", pasos: ["Raíz: audi- (audio, 4.ª conjugación).", "-eba-: marca de imperfecto en la 3.ª y 4.ª.", "-nt: 3.ª persona del plural."], resultado: "3.ª pl. del pretérito imperfecto de indicativo: «oían»." },
    { enunciado: "Conjuga el futuro de «laudo, -as, -are» (alabar).", pasos: ["Es de la 1.ª conjugación: futuro con -b-.", "lauda-bo, lauda-bis, lauda-bit, lauda-bimus, lauda-bitis, lauda-bunt."], resultado: "laudabo, laudabis, laudabit, laudabimus, laudabitis, laudabunt (alabaré…)." },
    { enunciado: "Traduce y analiza «Romani vicerunt».", pasos: ["Romani: nominativo plural, sujeto (los romanos).", "Vicerunt: tema de perfecto vic- (de vinco, vincis, vincere, vici) + -erunt.", "3.ª persona del plural del perfecto."], resultado: "«Los romanos vencieron»." },
  ],
  errores: [
    "Formar el perfecto desde el presente: hay que usar el cuarto término del enunciado.",
    "Usar -b- en el futuro de la 3.ª conjugación: legam, leges, no *legebo.",
    "Confundir legit (presente, «lee») con lēgit (perfecto, «leyó»): solo cambia la cantidad de la e.",
    "Confundir amabit (futuro) con amabat (imperfecto).",
    "Olvidar la vocal de unión de la 3.ª conjugación: legimus, no *legmus.",
  ],
  ejercicios: [
    { q: "Escribe el enunciado de «amar» y explica qué indica cada forma.", sol: "amo, amas, amare, amavi: 1.ª sg. presente, 2.ª sg. presente, infinitivo y 1.ª sg. perfecto." },
    { q: "Conjuga el presente de «moneo».", sol: "moneo, mones, monet, monemus, monetis, monent." },
    { q: "Conjuga el imperfecto de «lego».", sol: "legebam, legebas, legebat, legebamus, legebatis, legebant." },
    { q: "Analiza «amabimus».", sol: "1.ª pl. del futuro imperfecto de indicativo de amo: «amaremos»." },
    { q: "Analiza «audiam».", sol: "1.ª sg. del futuro de audio: «oiré»." },
    { q: "Conjuga el futuro de «sum».", sol: "ero, eris, erit, erimus, eritis, erunt." },
    { q: "Forma el perfecto de «video, -es, -ere, vidi» en todas las personas.", sol: "vidi, vidisti, vidit, vidimus, vidistis, viderunt." },
    { q: "Traduce: «puellae cantabant».", sol: "«Las niñas cantaban»." },
    { q: "Traduce: «Caesar Galliam vicit».", sol: "«César venció a la Galia»." },
    { q: "¿De dónde viene el futuro español «cantaré»?", sol: "De la perífrasis del latín vulgar cantare habeo («tengo que cantar»)." },
  ],
  quiz: [
    { q: "«legunt» es…", o: ["presente, 3.ª pl.", "futuro, 3.ª pl.", "perfecto, 3.ª pl."], a: 0, e: "Leen." },
    { q: "El futuro de la 1.ª conjugación lleva…", o: ["-b-", "-a-/-e-", "-ba-"], a: 0, e: "Amabo." },
    { q: "«fuerunt» es…", o: ["perfecto de sum", "futuro de sum", "imperfecto de sum"], a: 0, e: "Fueron / estuvieron." },
    { q: "El tema de perfecto se toma de…", o: ["la cuarta forma del enunciado", "el infinitivo", "la 2.ª persona"], a: 0, e: "Amavi → amav-." },
    { q: "«Veni, vidi, vici» está en…", o: ["pretérito perfecto", "presente", "futuro"], a: 0, e: "Llegué, vi, vencí." },
  ],
  tarjetas: [
    ["Vocal de unión", "Vocal entre raíz y desinencia en la 3.ª conjugación: leg-i-t."],
    ["Futuro de la 3.ª y 4.ª", "-am, -es, -et, -emus, -etis, -ent."],
    ["Desinencias de perfecto", "-i, -isti, -it, -imus, -istis, -erunt."],
  ],
});
