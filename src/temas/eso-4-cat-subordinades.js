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
