// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "La comunicació i els textos",
  minutos: 35,
  objetivos: ["Identificar els elements de la comunicació", "Reconèixer les funcions del llenguatge", "Saber què fa que un text sigui adequat, coherent i cohesionat"],
  claves: ["emissor", "receptor", "context", "funcions del llenguatge", "adequació", "coherència", "cohesió", "registre"],
  pregunta: {
    texto: "Escrius «Bon dia, us envio el treball» a la professora i «ei, t'ho passo» al teu amic. El missatge és gairebé el mateix. Per què el dius de dues maneres?",
    respuesta: "Perquè canvien el <mark>receptor i la situació</mark>. Adaptar el que diem al context és l'<b>adequació</b>, una de les tres propietats que fan que un text funcioni. Comunicar bé no és només dir coses: és dir-les com toca a qui toca.",
  },
  bloques: [
    {
      html: `<h3>Els elements de la comunicació</h3><p>L'<b>emissor</b> envia un <b>missatge</b> a un <b>receptor</b> per un <b>canal</b> (l'aire, el paper, la pantalla) amb un <b>codi</b> compartit (la llengua). Tot passa dins d'un <mark>context</mark>: el lloc, el moment i el que saben tots dos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema: l'emissor envia un missatge pel canal al receptor, dins d'un context">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="13" font-weight="700" text-anchor="middle">
          <rect x="12" y="62" width="70" height="40" rx="10" fill="var(--pen)"/><text x="47" y="87" fill="#fff">emissor</text>
          <rect x="178" y="62" width="70" height="40" rx="10" fill="var(--leaf)"/><text x="213" y="87" fill="#fff">receptor</text>
          <path d="M84 82 H 170" stroke="var(--ink)" stroke-width="3"/><path d="M164 76 l 8 6 l -8 6" fill="none" stroke="var(--ink)" stroke-width="3"/>
          <rect x="96" y="40" width="68" height="26" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="130" y="58" fill="var(--red)">missatge</text>
          <text x="130" y="104" fill="var(--inf)">canal</text>
          <text x="130" y="134" fill="var(--muted)">codi: la llengua</text>
          <rect x="6" y="8" width="248" height="164" rx="12" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="6 5"/>
          <text x="130" y="162" fill="var(--muted)">context</text>
        </g></svg>`,
    },
    {
      html: `<h3>Les funcions del llenguatge</h3><p>Segons la intenció, el llenguatge té una funció <b>referencial</b> (informar), <b>expressiva</b> (mostrar sentiments), <b>conativa</b> o apel·lativa (demanar, ordenar), <b>fàtica</b> (obrir o mantenir el contacte: «M'escoltes?»), <b>poètica</b> (cuidar la forma) i <b>metalingüística</b> (parlar de la llengua).</p>`,
      svg: L.filas("Exemples de quatre funcions del llenguatge", [
        ["Referencial", "Demà plourà.", "var(--inf)"], ["Expressiva", "Quina ràbia!", "var(--red)"],
        ["Conativa", "Tanca la porta!", "var(--pen)"], ["Metalingüística", "«Taula» és plana.", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Les propietats del text</h3><p>Un <mark>text</mark> és un missatge complet amb sentit: un tuit, una recepta, una novel·la. Perquè funcioni ha de ser <b>adequat</b> (s'adapta a la situació), <b>coherent</b> (té un tema i un ordre lògic) i <b>cohesionat</b> (les frases estan ben lligades).</p>`,
      svg: L.filas("Adequació, coherència i cohesió", [
        ["Adequació", "s'adapta a la situació", "var(--pen)"],
        ["Coherència", "un tema i un ordre lògic", "var(--leaf)"],
        ["Cohesió", "frases ben enllaçades", "var(--inf)"],
      ], "un bon text és…"),
    },
    {
      html: `<h3>Els mecanismes de cohesió</h3><p>Per no repetir i per lligar idees fem servir <mark>sinònims</mark> («el gos… l'animal»), <mark>pronoms</mark> («Vaig veure la Marta i <i>li</i> vaig donar el llibre»), l'<mark>el·lipsi</mark> (ometre el que ja s'ha dit) i els <mark>connectors</mark> («a més», «en canvi», «per tant»).</p>`,
      svg: L.frase("Exemple de cohesió: la Marta va arribar tard; tanmateix, portava el pa", [
        ["La Marta", "referent", "var(--pen)"], ["va arribar tard;", "", "var(--line)"],
        ["tanmateix,", "connector", "var(--red)"], ["portava el pa.", "el·lipsi del subjecte", "var(--leaf)"],
      ], "no cal repetir «la Marta»"),
    },
    {
      html: `<h3>El registre</h3><p>El <b>registre</b> és la manera de parlar segons la situació. El <b>formal</b> es fa servir en exàmens, sol·licituds i actes públics; el <b>col·loquial</b>, amb la família i els amics. Saber <mark>canviar de registre</mark> és part de la competència comunicativa.</p>`,
      svg: L.dialogo("El mateix missatge en registre col·loquial i formal", [
        ["a un amic", "Ei, demà no puc venir, eh!", "var(--red)"],
        ["a la directora", "Demà no podré assistir-hi, disculpi.", "var(--pen)"],
      ]),
    },
  ],
  figura: {
    titulo: "Les tres propietats d'un bon text",
    svg: L.columnas("Adequació, coherència i cohesió amb la seva pregunta clau", [
      ["Encaixa amb la situació?", "ADEQUACIÓ", ["registre formal", "o col·loquial"], "var(--pen)"],
      ["S'entén el sentit?", "COHERÈNCIA", ["un tema, ordre lògic,", "sense contradiccions"], "var(--leaf)"],
      ["Està ben lligat?", "COHESIÓ", ["connectors, pronoms,", "sinònims i el·lipsi"], "var(--inf)"],
    ]),
  },
  video: { id: "_7sIvY80YPM", titulo: "Las funciones del lenguaje de Jakobson", canal: "Blog de Lengua", vistas: 646146, megusta: 0, busqueda: "funcions del llenguatge" },
  quiz: [
    { q: "En una trucada de telèfon, quin és el canal?", o: ["La llengua", "La línia telefònica i l'aire", "La persona que respon"], a: 1, e: "El canal és el mitjà físic per on viatja el missatge." },
    { q: "«Hola? M'escoltes bé?» té sobretot la funció…", o: ["fàtica", "poètica", "referencial"], a: 0, e: "Serveix per comprovar que el contacte funciona." },
    { q: "Un text que salta de tema sense ordre falla en…", o: ["l'adequació", "la coherència", "l'ortografia"], a: 1, e: "La coherència exigeix un tema i una organització lògica." },
    { q: "«Tanmateix» és un connector que expressa…", o: ["oposició", "conseqüència", "addició"], a: 0, e: "Equival a «però», «no obstant això»." },
    { q: "Escriure «Ei, tio!» en una sol·licitud a l'ajuntament és un error de…", o: ["coherència", "cohesió", "adequació"], a: 2, e: "El registre col·loquial no s'adapta a una situació formal." },
  ],
  examen: [
    { q: "«Obre la finestra, que fa calor» té funció…", o: ["conativa", "metalingüística", "fàtica"], a: 0, e: "Vol que el receptor faci alguna cosa." },
    { q: "Quin connector expressa conseqüència?", o: ["en canvi", "per tant", "a més"], a: 1, e: "«Per tant» introdueix una conseqüència." },
    { q: "Ometre el subjecte perquè ja s'ha dit abans és…", o: ["una el·lipsi", "un sinònim", "una metàfora"], a: 0, e: "L'el·lipsi evita repeticions." },
  ],
  feynman: ["Els elements de la comunicació amb un exemple de classe", "Les sis funcions del llenguatge", "La diferència entre coherència i cohesió", "Quatre mecanismes de cohesió"],
  mapa: mapa("COMUNICACIÓ", "var(--eso)", [
    ["Elements", "emissor · receptor · canal…", "var(--pen)"],
    ["Funcions", "informar · expressar · demanar", "var(--red)"],
    ["Propietats", "adequació · coherència…", "var(--leaf)"],
    ["Registre", "formal · col·loquial", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Què és el context?", "La situació en què es comunica: lloc, moment i coneixements compartits."],
    ["Funció conativa", "La que busca que el receptor faci alguna cosa: ordres, precs, anuncis."],
    ["Adequació", "Adaptar el text a la situació, al receptor i a la intenció."],
    ["Coherència", "Un text té un tema clar i les idees segueixen un ordre lògic."],
    ["Mecanismes de cohesió", "Sinònims, pronoms, el·lipsi i connectors."],
  ],
  familias: ["Mireu junts uns quants missatges del mòbil i que digui quina funció del llenguatge té cadascun.", "Demaneu-li que reescrigui un missatge col·loquial com si fos un correu a la direcció de l'institut.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Comunicació: elements de la situació comunicativa, propietats textuals i mecanismes de cohesió (RD 217/2022, Llengua Catalana i Literatura 4t; currículums autonòmics de Catalunya, Illes Balears i Comunitat Valenciana).",
    ideas: ["Reescriure el mateix missatge per a tres receptors diferents.", "Desordenar les frases d'una notícia i reconstruir-la amb els connectors.", "Caçar funcions del llenguatge en anuncis i cançons en català."],
  },
  fuentes: [
    L.BOE,
    { t: "Institut d'Estudis Catalans: Gramàtica de la llengua catalana", url: "https://giec.iec.cat/" },
    { t: "Optimot, consultes lingüístiques (Generalitat de Catalunya)", url: "https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html" },
  ],
  revisado: "2026-11-12",
};
