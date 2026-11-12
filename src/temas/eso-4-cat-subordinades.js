// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "Les subordinades",
  minutos: 45,
  objetivos: ["Distingir subordinades substantives, adjectives i adverbials", "Reconèixer els nexes de cada tipus", "Escriure bé els relatius: que, qui, què, on, el qual"],
  claves: ["subordinada substantiva", "subordinada adjectiva", "relatiu", "antecedent", "subordinada adverbial", "nexe", "el qual"],
  pregunta: {
    texto: "«M'agrada la xocolata» i «M'agrada que vinguis». Què tenen en comú «la xocolata» i «que vinguis»?",
    respuesta: "Fan <mark>la mateixa feina</mark>: totes dues són el <b>subjecte</b> de «m'agrada». «Que vinguis» té verb propi i funciona com un nom: és una <b>subordinada substantiva</b>. La subordinació consisteix a posar una oració dins d'una altra.",
  },
  bloques: [
    {
      html: `<h3>Tres tipus de subordinades</h3><p>Una subordinada <mark>depèn d'una altra oració</mark> (la principal) i hi fa una funció com si fos una paraula. Les <b>substantives</b> equivalen a un nom; les <b>adjectives o de relatiu</b>, a un adjectiu; les <b>adverbials</b>, a un adverbi o un complement circumstancial.</p>`,
      svg: L.filas("Tres tipus de subordinades segons la paraula a què equivalen", [
        ["Substantives", "= un nom (això)", "var(--pen)"],
        ["Adjectives", "= un adjectiu", "var(--leaf)"],
        ["Adverbials", "= un adverbi", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Les substantives</h3><p>Es poden <mark>substituir per «això»</mark>: «Vull <u>que em truquis</u>» → «Vull <b>això</b>». Nexes: <b>que</b>, <b>si</b> (preguntes indirectes: «No sé <u>si vindrà</u>») i els <b>interrogatius</b> (què, qui, com, on, quan). També poden anar en infinitiu: «M'agrada <u>llegir</u>». Poden ser subjecte, CD, complement de règim…</p>`,
      svg: L.frase("Prova d'això: Vull que em truquis equival a Vull això", [
        ["Vull", "principal", "var(--ink)"], ["que em truquis", "subordinada", "var(--pen)"],
        ["Vull", "", "var(--ink)"], ["això", "= nom", "var(--pen)"],
      ], "si hi cap «això», és substantiva"),
    },
    {
      html: `<h3>Les adjectives o de relatiu</h3><p>Complementen un nom, l'<b>antecedent</b>: «el llibre <u>que em vas deixar</u>». Poden ser <b>especificatives</b> (sense comes: seleccionen) o <b>explicatives</b> (entre comes: afegeixen informació). En català, darrere de preposició el relatiu és <mark>què</mark> (per a coses) o <mark>qui</mark> (per a persones): «la ciutat <i>de què</i> et parlo», «la noia <i>amb qui</i> surto».</p>`,
      svg: L.tabla("Relatius en català", ["Relatiu", "Exemple"], [
        ["que", "el llibre que llegeixo"], ["prep. + què", "el tema de què parlo"], ["prep. + qui", "l'amic amb qui vaig"], ["on", "el poble on visc"],
      ], "var(--leaf)"),
    },
    {
      html: `<h3>El relatiu «el qual»</h3><p><b>El qual / la qual / els quals / les quals</b> concorda amb l'antecedent i es pot fer servir darrere de preposició (sobretot quan és llarga) o en explicatives: «la casa <i>davant de la qual</i> vivim». No s'ha de fer servir sense preposició en especificatives: <mark>✗ «el noi el qual ve»</mark> → ✓ «el noi que ve».</p>`,
      svg: L.filas("Ús correcte del relatiu el qual", [
        ["✓", "la casa davant de la qual visc", "var(--leaf)"],
        ["✓", "en Pau, el qual és metge,…", "var(--leaf)"],
        ["✗", "el noi el qual ve", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Les adverbials</h3><p>Expressen circumstàncies. <b>Temps</b>: quan, mentre. <b>Lloc</b>: on. <b>Manera</b>: com. <b>Causa</b>: perquè, ja que, com que. <b>Finalitat</b>: perquè (+ subjuntiu), per + infinitiu. <b>Condició</b>: si. <b>Concessió</b>: encara que, tot i que. <b>Conseqüència</b>: tan… que, així que.</p>`,
      svg: L.filas("Subordinades adverbials i nexes", [
        ["Causa", "perquè · ja que", "var(--red)"], ["Finalitat", "per a + inf. · perquè + subj.", "var(--leaf)"],
        ["Condició", "si", "var(--pen)"], ["Concessió", "encara que · tot i que", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Quina subordinada és?",
    svg: L.columnas("Prova per a cada tipus de subordinada", [
      ["la puc canviar per «això»", "SUBSTANTIVA", ["Diu que plourà.", "→ Diu això."], "var(--pen)"],
      ["complementa un nom", "ADJECTIVA", ["el pa que compro", "→ el pa bo"], "var(--leaf)"],
      ["expressa circumstància", "ADVERBIAL", ["Surto quan plega.", "→ Surto llavors."], "var(--inf)"],
    ]),
  },
  video: { id: "q03Oyw_IC-E", titulo: "Oracions compostes II: oracions subordinades substantives (completives)", canal: "Aprèn català amb en Jordi", vistas: 65393, megusta: 1072, busqueda: "oracions subordinades català" },
  quiz: [
    { q: "Quina prova serveix per reconèixer una substantiva?", o: ["Canviar-la per «això»", "Canviar-la per «allà»", "Canviar-la per un adjectiu"], a: 0, e: "Equival a un nom." },
    { q: "«El llibre que em vas deixar» conté una subordinada…", o: ["substantiva", "adjectiva", "adverbial"], a: 1, e: "Complementa el nom «llibre» (antecedent)." },
    { q: "Completa: «La noia amb ___ parlaves és la meva cosina.»", o: ["que", "qui", "què"], a: 1, e: "Darrere de preposició i referit a persona: qui." },
    { q: "«No vaig sortir perquè plovia» és una adverbial…", o: ["causal", "final", "condicional"], a: 0, e: "Explica per què." },
    { q: "«Encara que plogui, anirem a la platja» és…", o: ["concessiva", "condicional", "temporal"], a: 0, e: "Un obstacle que no impedeix l'acció." },
  ],
  examen: [
    { q: "Quina frase és correcta?", o: ["El noi el qual ve és el meu germà.", "El noi que ve és el meu germà.", "El noi qui ve és el meu germà."], a: 1, e: "En especificatives sense preposició, el relatiu és «que»." },
    { q: "«El tema de ___ et parlo és important.»", o: ["que", "què", "qui"], a: 1, e: "Darrere de preposició i referit a cosa: què." },
    { q: "«No sé si vindrà» conté una substantiva introduïda per…", o: ["si", "que", "on"], a: 0, e: "Pregunta indirecta total amb «si»." },
  ],
  feynman: ["Els tres tipus de subordinades i a què equivalen", "La prova d'«això» per a les substantives", "Com s'escriuen bé els relatius darrere de preposició", "Cinc tipus d'adverbials amb el seu nexe"],
  mapa: mapa("SUBORDINADES", "var(--eso)", [
    ["Substantives", "que · si · això", "var(--pen)"],
    ["Adjectives", "que · qui · què · on", "var(--leaf)"],
    ["Adverbials", "quan · perquè · si", "var(--inf)"],
    ["Normativa", "prep. + què / qui", "var(--red)"],
  ]),
  tarjetas: [
    ["Subordinada substantiva", "Fa la funció d'un nom; es pot substituir per «això»."],
    ["Subordinada adjectiva", "Complementa un nom (antecedent); s'introdueix amb un relatiu."],
    ["Relatiu darrere de preposició", "Què per a coses (de què), qui per a persones (amb qui)."],
    ["El qual", "Relatiu que concorda amb l'antecedent; darrere de preposició o en explicatives."],
    ["Adverbials", "Expressen temps, lloc, manera, causa, finalitat, condició, concessió…"],
  ],
  familias: ["Demaneu-li que completi «M'agradaria que…» de cinc maneres diferents.", "Jugueu a definir objectes de casa amb relatives: «És una cosa que serveix per…».", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Reflexió sobre la llengua: subordinació substantiva, adjectiva i adverbial; normativa dels relatius (RD 217/2022, Llengua Catalana i Literatura 4t; Gramàtica de la llengua catalana de l'IEC).",
    ideas: ["Targetes «això» per tapar subordinades i comprovar-les.", "Corregir textos amb errors de relatius (el qual, què, qui).", "Dòmino de nexes adverbials."],
  },
  fuentes: [
    L.BOE,
    { t: "Institut d'Estudis Catalans: Gramàtica de la llengua catalana", url: "https://giec.iec.cat/" },
    { t: "Optimot: pronoms relatius (Generalitat de Catalunya)", url: "https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Aplicar el canvi i la caiguda de preposicions davant de «que»", "Triar el relatiu correcte darrere de preposició (què, qui, el qual)", "Evitar castellanismes com *lo que o *cuyo"],
  bloques: [
    { tras: "Les substantives", html: `<h3>Les funcions de les substantives</h3><p>Com un nom, una substantiva pot ser:</p><ul><li><b>Subjecte</b>: «M'agrada <i>que vinguis</i>.» (M'agrada això; si passa a plural, concorda: m'agraden aquestes coses.)</li><li><b>Complement directe</b>: «Crec <i>que tens raó</i>.» (Ho crec.)</li><li><b>Complement de règim verbal</b>: «M'alegro <i>que hagis vingut</i>», «M'adono <i>que és tard</i>» (m'adono d'això). Fixa't que la preposició del verb (alegrar-se de, adonar-se de) desapareix davant de «que».</li><li><b>Atribut</b>: «El meu desig és <i>que aprovis</i>.»</li><li><b>Complement del nom o de l'adjectiu</b>: «Tinc ganes <i>que arribi l'estiu</i>», «Estic segura <i>que vindrà</i>».</li></ul><p>També hi ha substantives d'infinitiu, sense nexe: «Prefereixo <i>quedar-me a casa</i>», «És important <i>dormir bé</i>».</p>` },
    { tras: "Les substantives", html: `<h3>La caiguda de preposicions davant de «que»</h3><p>Aquesta és una diferència clau amb el castellà. En català, les preposicions <b>a, de, en, amb</b> <mark>cauen davant de la conjunció «que»</mark> (i davant d'infinitiu, en molts casos):</p>${L.tb(["Amb nom", "Amb «que»"], [["M'adono <b>de</b> l'error.", "M'adono <b>que</b> m'he equivocat."], ["Estic segur <b>de</b> la resposta.", "Estic segur <b>que</b> ho sé."], ["Confio <b>en</b> tu.", "Confio <b>que</b> vindràs."], ["Insisteix <b>en</b> això.", "Insisteix <b>que</b> hi anem."]])}<p>Per això en català no existeix el dequeisme del castellà: <s>*m'adono de que</s>, <s>*estic segur de que</s> són incorrectes. En canvi, les preposicions es mantenen davant de «què» interrogatiu o relatiu: «De què parles?», «el tema de què parlàvem».</p>` },
    { tras: "Les adjectives o de relatiu", html: `<h3>Quin relatiu poso?</h3>${L.tb(["Situació", "Relatiu", "Exemple"], [["subjecte o CD, sense preposició", "que", "el noi <b>que</b> canta; el llibre <b>que</b> llegeixo"], ["darrere de preposició, cosa", "què (àton: amb accent!) o el qual", "el tema <b>de què</b> / <b>del qual</b> parlàvem"], ["darrere de preposició, persona", "qui o el qual", "la noia <b>amb qui</b> / <b>amb la qual</b> parlaves"], ["lloc", "on", "el poble <b>on</b> vaig néixer"], ["possessió", "del qual, de qui", "l'autor <b>la novel·la del qual</b> vam llegir"], ["sense antecedent (= allò que)", "el que, allò que, qui", "<b>El que</b> dius és veritat; <b>Qui</b> matina fa farina."]])}<p>En català <b>no s'usa</b> <s>*lo que</s> (cal dir <b>el que</b>, <b>allò que</b> o <b>la qual cosa</b>) ni <s>*cuyo</s> (cal <b>del qual / de qui</b>).</p>` },
    { tras: "Les adverbials", html: `<h3>Perquè: causa o finalitat</h3><p>En català, <b>perquè</b> té dos valors i és el mode verbal el que els distingeix:</p><ul><li><b>Causa</b> + indicatiu: «No va venir <b>perquè estava</b> malalt» (per quina raó?).</li><li><b>Finalitat</b> + subjuntiu: «T'ho explico <b>perquè ho entenguis</b>» (amb quina finalitat?).</li></ul><p>Altres nexes de finalitat: <i>per tal que, a fi que</i> + subjuntiu, i <b>per + infinitiu</b> quan el subjecte és el mateix: «Estudio <b>per</b> aprovar». No s'ha de fer servir <s>*per a</s> davant d'infinitiu amb valor final: «Estalvio <b>per</b> comprar-me una bici».</p><p>Recorda també que darrere de <b>si</b> condicional mai no hi va el condicional (<s>*si tindria</s> → <b>si tingués</b>). No confonguis <b>perquè</b> (conjunció, junt) amb <b>per què</b> (preposició + pronom interrogatiu o relatiu): «<b>Per què</b> no vens?», «la raó <b>per què</b> ho va fer».</p>` },
    { tras: "Les adverbials", html: `<h3>Condicionals, concessives i consecutives</h3><ul><li><b>Condicionals</b>: «<b>Si</b> plou, no hi anirem» (real); «<b>Si</b> tingués diners, viatjaria» (imaginària: imperfet de subjuntiu + condicional). Altres nexes: <i>en cas que, sempre que, només que</i>. Mai condicional darrere de «si»: <s>*si tindria</s> → <b>si tingués</b>.</li><li><b>Concessives</b>: un obstacle que no impedeix l'acció: «<b>Encara que</b> plogui, sortirem», «<b>Tot i que</b> estava cansada, va acabar la cursa», «<b>Malgrat que</b>…». També <i>tot</i> + gerundi: «Tot i ser tard, va trucar».</li><li><b>Consecutives</b>: «Feia <b>tanta</b> calor <b>que</b> no podíem dormir»; «És tard, <b>així que</b> marxem».</li><li><b>Comparatives</b>: «És <b>més</b> alt <b>que</b> el seu pare», «Corre <b>tant com</b> tu».</li></ul>` },
  ],
  videos: [
    ["Les substantives", L.vid("PTdaFw6euc8", "Pràctica: les oracions subordinades substantives", "Aprèn català amb en Jordi", 80725)],
    ["Les adverbials", L.vid("yDxkkuL29-Q", "Oracions compostes II: les oracions subordinades adverbials", "Aprèn català amb en Jordi", 39479)],
  ],
  ejemplos: [
    ["Analitza: «Em sorprèn que no hagis vingut.»", ["Verbs: sorprèn, hagis vingut. Dues proposicions.", "Subordinada: «que no hagis vingut». Prova: «Em sorprèn això».", "Funció: si passa a plural, el verb concorda («Em sorprenen aquestes coses»): és el subjecte."], "subordinada substantiva de subjecte."],
    ["Corregeix i analitza: «Aquesta és la noia de la qual et vaig parlar, lo que em fa vergonya.»", ["«De la qual» és correcte: relatiu darrere de preposició, amb antecedent «la noia».", "«Lo que» és un castellanisme: si es refereix a tota l'oració anterior, cal «la qual cosa» o «cosa que».", "La primera relativa és especificativa; la segona, explicativa."], "«Aquesta és la noia de la qual et vaig parlar, la qual cosa em fa vergonya.»"],
    ["Distingeix: «Estudio perquè vull aprovar» / «T'ajudo perquè aprovis».", ["Primera: perquè + indicatiu (vull): expressa la causa.", "Segona: perquè + subjuntiu (aprovis): expressa la finalitat.", "Pregunta: per quina raó? / amb quina finalitat?"], "la primera és causal; la segona, final."],
  ],
  errores: [
    "Mantenir la preposició davant de «que»: *m'adono de que → m'adono que.",
    "Fer servir *lo que en lloc de el que, allò que o la qual cosa.",
    "Fer servir *cuyo: cal del qual / de qui.",
    "Escriure que sense accent darrere de preposició: *el tema de que parlem → de què parlem.",
    "Escriure *per a + infinitiu amb valor final: estudio per aprovar.",
    "Confondre perquè (conjunció) i per què (preposició + interrogatiu o relatiu): «Per què no vens?».",
  ],
  ejercicios: [
    ["Subratlla la substantiva i digues la funció: «Cal que estudiïs.»", "«que estudiïs»: subjecte."],
    ["Corregeix: «Estic segura de que vindrà.»", "Estic segura que vindrà (la preposició cau davant de que)."],
    ["Completa amb el relatiu: «L'amic amb ___ vaig viatjar viu a Reus.»", "amb qui (o amb el qual)."],
    ["Completa amb el relatiu: «L'eina amb ___ treballo és nova.»", "amb què (o amb la qual)."],
    ["Corregeix: «L'escriptor cuyos llibres hem llegit vindrà.»", "L'escriptor els llibres del qual hem llegit vindrà."],
    ["Corregeix: «No ha vingut, lo que és estrany.»", "No ha vingut, cosa que (la qual cosa) és estranya."],
    ["Classifica: «Encara que faci fred, sortirem.»", "Adverbial concessiva (encara que + subjuntiu)."],
    ["Completa: «Si (tenir, jo) ___ temps, aprendria a tocar la guitarra.»", "tingués."],
    ["Causa o finalitat? «Parla fluix perquè el nadó no es desperti.»", "Finalitat: perquè + subjuntiu."],
    ["Classifica: «Va córrer tant que es va marejar.»", "Adverbial consecutiva (tant… que)."],
  ],
  quiz: [
    ["Quina forma és correcta?", ["M'adono que és tard.", "M'adono de que és tard.", "M'adono de què és tard."], 0, "La preposició cau davant de que."],
    ["«El tema de ___ parlàvem»", ["què", "que", "qui"], 0, "Darrere de preposició i cosa: què."],
    ["«Lo que» en català correcte és…", ["el que / allò que", "lo que", "el cual"], 0, "*Lo que és castellanisme."],
    ["«Perquè ho entenguis» expressa…", ["finalitat", "causa", "temps"], 0, "Perquè + subjuntiu."],
    ["«Si ___ temps, vindria.»", ["tingués", "tindria", "tinc"], 0, "Si + imperfet de subjuntiu."],
  ],
  tarjetas: [
    ["Caiguda de preposicions", "M'adono que…, estic segur que… (mai *de que)."],
    ["Relatiu amb preposició", "Cosa: de què / del qual. Persona: amb qui / amb la qual."],
    ["Perquè causal o final", "+ indicatiu: causa. + subjuntiu: finalitat."],
  ],
});
