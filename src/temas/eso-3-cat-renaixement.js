// Llengua Catalana i Literatura 3r d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "3-eso",
  titulo: "Renaixement i Barroc",
  minutos: 50,
  objetivos: ["Explicar la situació de la literatura catalana als segles XVI-XVIII", "Conèixer els principals autors del Renaixement i del Barroc en català", "Valorar la riquesa de la literatura popular d'aquests segles"],
  claves: ["Decadència", "Renaixement", "Barroc", "Pere Serafí", "Cristòfor Despuig", "Rector de Vallfogona", "Francesc Fontanella", "literatura popular", "Nova Planta", "romanços"],
  pregunta: {
    texto: "Si al segle XV la literatura catalana era de les millors d'Europa, per què als segles XVI, XVII i XVIII hi ha tan pocs autors coneguts?",
    respuesta: "Perquè la <b>cort</b> es va traslladar a Castella i la noblesa i molts escriptors cultes van passar a escriure en <b>castellà</b>. La literatura culta en català va minvar, però <mark>no va desaparèixer</mark>: hi va haver bons poetes i, sobretot, una literatura popular molt viva. Els romàntics del segle XIX van anomenar aquesta època la <b>Decadència</b>.",
  },
  bloques: [
    {
      html: `<h3>Una època difícil: la Decadència</h3><p>Després de la unió dinàstica de Ferran II i Isabel I (1469), els reis van viure a Castella, i la noblesa catalana, valenciana i mallorquina els va seguir i es va <mark>castellanitzar</mark>. La impremta i el prestigi del castellà van fer que molts escriptors cultes triessin aquesta llengua. Els autors romàntics del segle XIX van anomenar aquests segles <b>Decadència</b>, però avui sabem que la llengua continuava viva entre el poble.</p>`,
      svg: L.linea("Fets clau dels segles XVI-XVIII", [
        ["1469", "unió de Ferran i Isabel", "var(--pen)"],
        ["1640", "guerra dels Segadors", "var(--red)"],
        ["1707-16", "decrets de Nova Planta", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>El Renaixement</h3><p>El <b>Renaixement</b> (segle XVI) admira la cultura clàssica grega i llatina i posa l'<mark>ésser humà</mark> al centre. En poesia s'imita el poeta italià Petrarca. En català destaca <b>Pere Serafí</b>, pintor i poeta, que combina poemes cultes a la manera de Petrarca i d'Ausiàs March amb cançons de to popular. En prosa, <b>Cristòfor Despuig</b> escriu els <i>Col·loquis de la insigne ciutat de Tortosa</i> (1557), on defensa la llengua i la història catalanes.</p>`,
      svg: L.filas("Autors del Renaixement", [
        ["Pere Serafí", "poesia culta i popular", "var(--pen)"],
        ["C. Despuig", "Col·loquis de Tortosa", "var(--leaf)"],
        ["Model", "Petrarca i Ausiàs March", "var(--red)"],
      ]),
    },
    {
      html: `<h3>El Barroc</h3><p>El <b>Barroc</b> (segle XVII) és una època de crisi, guerres i pessimisme. La literatura busca sorprendre amb el <mark>contrast</mark>, l'enginy i la complicació: jocs de paraules, metàfores atrevides, exageracions. Els temes preferits són el pas del temps, la mort, el desengany i la vanitat del món, però també la sàtira i l'humor. Hi conviuen dues tendències: el <b>culteranisme</b>, que cuida la forma, i el <b>conceptisme</b>, que juga amb les idees.</p>`,
      svg: L.tabla("Renaixement i Barroc", ["Renaixement", "Barroc"], [
        ["equilibri", "contrast"], ["optimisme", "desengany"], ["harmonia", "complicació"], ["natura idealitzada", "pas del temps"],
      ]),
    },
    {
      html: `<h3>El Rector de Vallfogona</h3><p><b>Francesc Vicent Garcia</b> (c. 1579-1623), conegut com el <b>Rector de Vallfogona</b> perquè era el capellà d'aquest poble, és el poeta català més popular del Barroc. Va escriure poemes <mark>burlescos i satírics</mark>, plens d'humor i de jocs de paraules, que es van fer molt famosos. També va escriure poesia seriosa i culta. La seva fama va créixer tant que se li van atribuir molts poemes i anècdotes que no eren seus.</p>`,
      svg: L.filas("El Rector de Vallfogona", [
        ["Nom", "Francesc Vicent Garcia", "var(--pen)"],
        ["Estil", "burlesc i enginyós", "var(--red)"],
        ["Fama", "el més popular del Barroc", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>La literatura popular</h3><p>Mentre la literatura culta en català minvava, la <b>literatura popular</b> va viure un gran moment. S'hi inclouen les <b>cançons</b> tradicionals, els <b>romanços</b> (històries en vers que es cantaven als mercats), les <b>rondalles</b> (contes populars), els <b>goigs</b> (cants religiosos) i el teatre religiós, com el <mark>Misteri d'Elx</mark>. Es transmetia de manera oral i va mantenir viva la llengua; els romàntics la recolliran al segle XIX.</p>`,
      svg: L.filas("Gèneres de la literatura popular", [
        ["Cançons", "tradicionals", "var(--pen)"],
        ["Romanços", "històries cantades", "var(--red)"],
        ["Rondalles", "contes populars", "var(--leaf)"],
        ["Teatre", "Misteri d'Elx", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Tres segles de literatura catalana",
    svg: L.eje("Renaixement, Barroc i segle XVIII", [
      ["s. XVI", "Renaixement", ["Pere Serafí,", "Despuig"], "var(--pen)"],
      ["s. XVII", "Barroc", ["Rector de Vallfogona,", "Fontanella"], "var(--red)"],
      ["s. XVIII", "Il·lustració", ["Nova Planta,", "Joan Ramis"], "var(--inf)"],
      ["sempre", "Popular", ["cançons,", "romanços"], "var(--leaf)"],
    ]),
  },
  video: { id: "n0hAqOagFL0", titulo: "Bit de literatura: la Decadència de la literatura catalana", canal: "Ferran Giol Gort", vistas: 12652, megusta: 0, busqueda: "Decadència literatura catalana" },
  quiz: [
    { q: "Qui va donar el nom de «Decadència» a aquests segles?", o: ["Els romàntics del s. XIX", "Ausiàs March", "Els reis catòlics"], a: 0, e: "Des de la Renaixença." },
    { q: "Al Renaixement s'imita sobretot el poeta…", o: ["Petrarca", "Homer", "Llull"], a: 0, e: "Poeta italià." },
    { q: "El Barroc busca sobretot…", o: ["el contrast i l'enginy", "l'equilibri", "la simplicitat"], a: 0, e: "Sorprendre." },
    { q: "El Rector de Vallfogona és conegut per la seva poesia…", o: ["burlesca", "èpica", "científica"], a: 0, e: "Humor i sàtira." },
    { q: "Un romanç és…", o: ["una història en vers cantada", "una novel·la", "un sermó"], a: 0, e: "Es cantava als mercats." },
  ],
  examen: [
    { q: "Els Col·loquis de la insigne ciutat de Tortosa són de…", o: ["Cristòfor Despuig", "Pere Serafí", "Fontanella"], a: 0, e: "1557." },
    { q: "La noblesa es va castellanitzar perquè…", o: ["la cort era a Castella", "ho manava l'Església", "no hi havia impremta"], a: 0, e: "Seguia els reis." },
    { q: "El Misteri d'Elx és…", o: ["teatre religiós", "un romanç", "una crònica"], a: 0, e: "Es representa encara." },
  ],
  feynman: ["Per què es parla de Decadència i per què el terme és discutible", "Característiques del Renaixement i dos autors", "Diferències entre Renaixement i Barroc", "La importància de la literatura popular"],
  mapa: mapa("SEGLES XVI-XVIII", "var(--eso)", [
    ["Context", "cort a Castella", "var(--muted)"],
    ["Renaixement", "Serafí · Despuig", "var(--pen)"],
    ["Barroc", "Vallfogona · Fontanella", "var(--red)"],
    ["Popular", "cançons · romanços", "var(--leaf)"],
  ]),
  tarjetas: [
    ["Decadència", "Nom que els romàntics van donar als segles XVI-XVIII per la poca literatura culta en català."],
    ["Pere Serafí", "Poeta del Renaixement que barreja poesia petrarquista i popular."],
    ["Cristòfor Despuig", "Autor dels Col·loquis de la insigne ciutat de Tortosa (1557)."],
    ["Rector de Vallfogona", "Francesc Vicent Garcia, poeta barroc burlesc i molt popular."],
    ["Literatura popular", "Cançons, romanços, rondalles i goigs transmesos oralment."],
  ],
  familias: ["Canteu o escolteu junts una cançó tradicional catalana (com «El cant dels ocells») i parleu de quan es devia crear.", "Expliqueu-li una rondalla que conegueu de petits.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Educació literària: la literatura catalana dels segles XVI-XVIII, el Renaixement i el Barroc, la literatura popular i el context sociolingüístic (RD 217/2022, Llengua Catalana i Literatura 3r ESO; currículums autonòmics).",
    ideas: ["Recollir cançons i rondalles de la família i fer-ne un recull de classe.", "Comparar un poema renaixentista i un de barroc sobre el pas del temps.", "Debatre si el terme «Decadència» és just."],
  },
  fuentes: [
    L.BOE,
    { t: "Francesc Vicent Garcia, Viquipèdia", url: "https://ca.wikipedia.org/wiki/Francesc_Vicent_Garcia_i_Ferrandis" },
    { t: "Francesc Fontanella, Viquipèdia", url: "https://ca.wikipedia.org/wiki/Francesc_Fontanella" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Relacionar els fets històrics amb la situació de la llengua", "Reconèixer recursos barrocs en un poema"],
  bloques: [
    { tras: "Una època difícil: la Decadència", html: `<h3>La llengua i la història: de la guerra dels Segadors a la Nova Planta</h3><p>Al segle XVII, la <b>guerra dels Segadors</b> (1640-1652) va enfrontar Catalunya amb la monarquia de Felip IV. Com a conseqüència, pel <b>Tractat dels Pirineus</b> (1659), el Rosselló i part de la Cerdanya van passar a França, on el català va ser prohibit a l'administració.</p><p>Al segle XVIII, després de la <b>guerra de Successió</b>, Felip V va promulgar els <mark>decrets de Nova Planta</mark> (València i Aragó, 1707; Mallorca, 1715; Catalunya, 1716), que van abolir les institucions pròpies i van imposar el castellà a l'administració i, més endavant, a l'ensenyament. Tot i això, la gran majoria de la població continuava parlant només català. Per això la llengua es va mantenir viva en l'àmbit familiar, religiós i popular.</p>` },
    { tras: "El Renaixement", html: `<h3>Despuig i la defensa de la llengua</h3><p>Els <b>Col·loquis de la insigne ciutat de Tortosa</b> (1557) de Cristòfor Despuig són un diàleg entre tres personatges (un cavaller, un ciutadà i un valencià) que conversen sobre la història, els costums i la política. Despuig hi critica que els nobles abandonin el català i defensa amb passió el passat de la Corona d'Aragó.</p><p>És una obra important per dues raons: per la seva <mark>prosa àgil</mark>, pròxima a la llengua parlada, i perquè mostra que al segle XVI ja hi havia consciència del problema de la llengua. Com que és un text de debat, ens permet conèixer bé les idees i les preocupacions de l'època. Fins al segle XIX, però, l'obra no es va publicar.</p>` },
    { tras: "El Barroc", html: `<h3>Recursos barrocs</h3><p>La poesia barroca fa servir molts recursos per sorprendre el lector:</p>${L.tb(["Recurs", "Què és", "Exemple"], [["Antítesi", "contraposa idees oposades", "vida i mort, llum i ombra"], ["Hipèrbaton", "altera l'ordre normal de la frase", "«del temps la fugida»"], ["Hipèrbole", "exagera molt", "plorar rius de llàgrimes"], ["Metàfora", "identifica dues realitats", "la vida és un somni"], ["Joc de paraules", "aprofita el doble sentit", "dilogies i calambucs"]])}<p>El tema del <mark>pas del temps</mark> (la bellesa que es marceix com una rosa, la vida breu) és un dels més repetits, i sovint s'acompanya d'una lliçó moral: cal aprofitar la vida o preparar-se per a la mort.</p>` },
    { tras: "El Rector de Vallfogona", html: `<h3>Francesc Fontanella i el teatre barroc</h3><p><b>Francesc Fontanella</b> (1622-c. 1685) va ser un poeta i dramaturg barceloní de família noble. És el gran autor del <b>Barroc culte</b> en català: va escriure poemes amorosos molt elaborats i dues obres de teatre, entre les quals la <i>Tragicomèdia pastoral d'amor i de fortuna</i>. Com que la seva família va donar suport a la causa catalana durant la guerra dels Segadors, va haver d'exiliar-se al Rosselló i va acabar els seus dies com a religiós.</p><p>Una altra obra curiosa és l'<i>Atheneo de grandesa</i> (1681) de <b>Josep Romaguera</b>, un llibre d'<mark>emblemes</mark>: combinacions d'imatge i text que transmeten una lliçó moral, molt típiques del Barroc.</p>` },
    { tras: "La literatura popular", html: `<h3>El segle XVIII i la Il·lustració</h3><p>Al segle XVIII arriba la <b>Il·lustració</b>, que confia en la raó, la ciència i l'educació. En català, la producció culta és escassa, però hi ha excepcions interessants. A <b>Menorca</b>, que va estar sota domini britànic durant bona part del segle, la llengua catalana va tenir més llibertat: <b>Joan Ramis</b> hi va escriure la tragèdia <i>Lucrècia</i> (1769), seguint el model del <mark>teatre neoclàssic</mark> francès.</p><p>També hi ha gramàtiques i diccionaris que volien conservar la llengua, i memòries i dietaris personals com el del <b>baró de Maldà</b>, el <i>Calaix de sastre</i>, que descriu la vida quotidiana de Barcelona. Aquestes obres preparen el camí de la <b>Renaixença</b> del segle XIX, que recuperarà la literatura culta en català.</p>` },
  ],
  videos: [
    ["El Rector de Vallfogona", L.vid("3_3YhdwUnlQ", "Auca del Rector de Vallfogona: vida de Francesc Vicent Garcia", "Lletres Catalanes", 2176)],
    ["Una època difícil: la Decadència", L.vid("JaQN5N4DlcA", "La Decadència (s. XVI-XVII-XVIII)", "Sílvia Caballeria", 4631)],
  ],
  ejemplos: [
    ["Per què avui es discuteix el terme «Decadència»?", ["Els romàntics el van crear per destacar el seu propi «renaixement».", "Hi va haver menys literatura culta, però autors com Serafí, Despuig, Vallfogona o Fontanella.", "La literatura popular i la llengua parlada van continuar ben vives."], "perquè simplifica massa: no va ser una època buida."],
    ["Identifica el recurs: «la rosa que al matí és bella, al vespre és morta».", ["Hi ha dues idees oposades: bella / morta, matí / vespre.", "La rosa simbolitza la bellesa i la vida breu.", "És un tema típic del Barroc."], "antítesi i metàfora del pas del temps."],
    ["Relaciona: decrets de Nova Planta i llengua catalana.", ["Felip V els promulga després de la guerra de Successió (1707-1716).", "Imposen el castellà a l'administració.", "El català queda reduït a l'àmbit familiar i popular."], "els decrets van reduir l'ús oficial del català, però no el van fer desaparèixer de la parla."],
  ],
  errores: [
    "Pensar que als segles XVI-XVIII ningú no escrivia en català.",
    "Confondre la Decadència (s. XVI-XVIII) amb la Renaixença (s. XIX).",
    "Atribuir al Rector de Vallfogona tots els poemes que circulaven amb el seu nom.",
    "Confondre Renaixement (s. XVI, equilibri) i Barroc (s. XVII, contrast).",
    "Oblidar la literatura popular quan es parla d'aquesta època.",
  ],
  ejercicios: [
    ["Per què la noblesa es va castellanitzar al segle XVI?", "Perquè la cort es va traslladar a Castella i la noblesa va seguir els reis."],
    ["Qui va crear el terme «Decadència» i per què?", "Els romàntics del segle XIX, per contraposar-lo al seu propi «renaixement» de la literatura catalana."],
    ["Escriu dues característiques del Renaixement.", "Admiració per la cultura clàssica i l'ésser humà al centre; imitació de Petrarca."],
    ["Escriu dues característiques del Barroc.", "Contrast i enginy; temes com el pas del temps i el desengany."],
    ["Qui era el Rector de Vallfogona?", "Francesc Vicent Garcia, capellà i poeta barroc conegut per la seva poesia burlesca."],
    ["Què defensa Cristòfor Despuig als Col·loquis?", "La llengua catalana i el passat de la Corona d'Aragó."],
    ["Escriu tres gèneres de la literatura popular.", "Cançons, romanços i rondalles."],
    ["Què van suposar els decrets de Nova Planta?", "L'abolició de les institucions pròpies i la imposició del castellà a l'administració."],
    ["Què és un llibre d'emblemes?", "Un llibre que combina imatges i textos per transmetre una lliçó moral."],
    ["Per què Menorca és un cas especial al segle XVIII?", "Perquè, sota domini britànic, el català hi va tenir més llibertat; hi destaca Joan Ramis."],
  ],
  quiz: [
    ["Pel Tractat dels Pirineus (1659), el Rosselló passa a…", ["França", "Castella", "Itàlia"], 0, "Després dels Segadors."],
    ["Els decrets de Nova Planta van arribar a Catalunya el…", ["1716", "1469", "1640"], 0, "València, 1707."],
    ["Fontanella és un autor del…", ["Barroc culte", "Renaixement", "Segle d'Or"], 0, "S. XVII."],
    ["L'antítesi consisteix a…", ["contraposar idees oposades", "exagerar", "alterar l'ordre"], 0, "Vida i mort."],
    ["Joan Ramis va escriure…", ["Lucrècia", "el Tirant", "Lo somni"], 0, "Tragèdia neoclàssica."],
  ],
  tarjetas: [
    ["Nova Planta", "Decrets de Felip V (1707-1716) que van imposar el castellà a l'administració."],
    ["Antítesi", "Recurs que contraposa idees oposades: vida i mort."],
    ["Francesc Fontanella", "Poeta i dramaturg del Barroc culte en català (s. XVII)."],
  ],
});
