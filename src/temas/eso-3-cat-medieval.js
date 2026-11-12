// Llengua Catalana i Literatura 3r d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "3-eso",
  titulo: "La literatura medieval: Llull i les cròniques",
  minutos: 55,
  objetivos: ["Situar els orígens de la literatura catalana", "Conèixer la vida i l'obra de Ramon Llull", "Identificar les quatre grans cròniques i les seves característiques"],
  claves: ["Homilies d'Organyà", "trobadors", "Ramon Llull", "Blaquerna", "Llibre d'amic e amat", "Llibre de meravelles", "cròniques", "Llibre dels fets", "Jaume I", "Ramon Muntaner"],
  pregunta: {
    texto: "Un noble mallorquí del segle XIII deixa la vida de cort per dedicar-se a escriure llibres per convertir el món. Com es diu i per què és tan important per al català?",
    respuesta: "És <mark>Ramon Llull</mark>. Va ser el primer a escriure en una llengua romànica (el català) sobre filosofia, ciència i teologia, temes que fins llavors només s'escrivien en llatí. Per això se'l considera el <b>pare de la prosa literària catalana</b>.",
  },
  bloques: [
    {
      html: `<h3>Els orígens de la literatura catalana</h3><p>El català es va formar a partir del llatí parlat entre els segles VIII i X. Els primers textos literaris en prosa són les <b>Homilies d'Organyà</b> (finals del segle XII o principis del XIII), uns sermons per explicar l'Evangeli. La poesia, en canvi, es va escriure durant molt de temps en <b>occità</b>, la llengua dels <mark>trobadors</mark>, que cantaven l'amor cortès a les corts. Trobadors catalans com Guillem de Berguedà o Cerverí de Girona van escriure en occità.</p>`,
      svg: L.linea("Orígens de la literatura catalana", [
        ["s. VIII-X", "naixement del català", "var(--muted)"],
        ["s. XII", "Homilies d'Organyà", "var(--pen)"],
        ["s. XII-XIII", "trobadors en occità", "var(--red)"],
        ["s. XIII", "Llull i les cròniques", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Ramon Llull</h3><p><b>Ramon Llull</b> (Mallorca, 1232-1316) era un cortesà que, segons explica ell mateix, va tenir una <mark>visió de Crist crucificat</mark> mentre escrivia una cançó d'amor. Aleshores va canviar de vida i es va proposar tres objectius: convertir els no cristians, escriure el millor llibre del món contra els errors dels infidels i fundar escoles per aprendre llengües. Va viatjar per tot el Mediterrani i va escriure més de dues-centes obres en català, llatí i àrab.</p>`,
      svg: L.filas("Els tres objectius de Llull", [
        ["1", "convertir els infidels", "var(--pen)"],
        ["2", "escriure el millor llibre", "var(--red)"],
        ["3", "fundar escoles de llengües", "var(--leaf)"],
      ], "després de la conversió"),
    },
    {
      html: `<h3>Les obres de Llull</h3><p>Llull va escriure obres filosòfiques, com l'<b>Art</b> (un sistema per demostrar la veritat amb raonaments), i també novel·les per arribar a tothom. El <b>Llibre d'Evast e Blaquerna</b> narra la vida d'un jove que busca la perfecció espiritual; inclou el <mark>Llibre d'amic e amat</mark>, amb versets poètics sobre l'amor entre l'ànima i Déu. El <b>Llibre de meravelles</b> inclou el <i>Llibre de les bèsties</i>, una faula política amb animals.</p>`,
      svg: L.filas("Obres literàries de Llull", [
        ["Blaquerna", "novel·la d'un jove ideal", "var(--pen)"],
        ["Amic e amat", "versets místics", "var(--red)"],
        ["Meravelles", "amb el Llibre de les bèsties", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Les quatre grans cròniques</h3><p>Les <b>cròniques</b> són obres en prosa que expliquen els fets dels reis de la Corona d'Aragó. Les quatre més importants són el <b>Llibre dels fets</b> de Jaume I, la <b>Crònica</b> de Bernat Desclot, la <b>Crònica</b> de Ramon Muntaner i la <b>Crònica</b> de Pere el Cerimoniós. Volien <mark>engrandir la dinastia</mark> i servien de propaganda política, però també són un tresor literari pel seu estil viu.</p>`,
      svg: L.filas("Les quatre grans cròniques", [
        ["Jaume I", "Llibre dels fets (s. XIII)", "var(--pen)"],
        ["Desclot", "sobre Pere el Gran (s. XIII)", "var(--leaf)"],
        ["Muntaner", "expedició a Orient (s. XIV)", "var(--red)"],
        ["Pere III", "el Cerimoniós (s. XIV)", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>El Llibre dels fets</h3><p>El <b>Llibre dels fets</b> és l'autobiografia del rei <b>Jaume I</b> (1208-1276), que la va dictar als seus escrivans. Explica la seva vida i les conquestes de <b>Mallorca</b> (1229) i <b>València</b> (1238). Està escrit en <mark>primera persona</mark>, amb un to proper i viu, i barreja història i llegenda: per exemple, el rei explica que va prohibir desmuntar la seva tenda perquè una oreneta hi havia fet el niu.</p>`,
      svg: L.filas("Conquestes de Jaume I", [
        ["1229", "Mallorca", "var(--pen)"],
        ["1238", "València", "var(--red)"],
        ["Narrador", "el rei, en 1a persona", "var(--leaf)"],
      ]),
    },
  ],
  figura: {
    titulo: "La prosa medieval catalana",
    svg: L.columnas("Dos grans corrents de la prosa del segle XIII", [
      ["prosa doctrinal", "LLULL", ["filosofia i fe", "en català"], "var(--pen)"],
      ["prosa històrica", "CRÒNIQUES", ["fets dels reis", "i propaganda"], "var(--red)"],
      ["llengua", "CATALÀ", ["primera gran", "prosa culta"], "var(--leaf)"],
    ]),
  },
  video: { id: "SasFe7ZYiMs", titulo: "Ramon Llull: la vida i obra", canal: "Mr Ryan", vistas: 42358, megusta: 0, busqueda: "Ramon Llull" },
  quiz: [
    { q: "El primer text literari en prosa catalana són…", o: ["les Homilies d'Organyà", "el Tirant lo Blanc", "el Blaquerna"], a: 0, e: "Sermons del s. XII-XIII." },
    { q: "En quina llengua escrivien els trobadors catalans?", o: ["En occità", "En català", "En castellà"], a: 0, e: "La llengua de la poesia trobadoresca." },
    { q: "El Llibre d'amic e amat forma part de…", o: ["el Blaquerna", "el Llibre dels fets", "la Crònica de Muntaner"], a: 0, e: "Novel·la de Llull." },
    { q: "Qui va dictar el Llibre dels fets?", o: ["Jaume I", "Ramon Llull", "Bernat Desclot"], a: 0, e: "És la seva autobiografia." },
    { q: "Jaume I va conquerir Mallorca l'any…", o: ["1229", "1492", "1238"], a: 0, e: "València, el 1238." },
  ],
  examen: [
    { q: "Llull és considerat el pare de…", o: ["la prosa literària catalana", "la poesia trobadoresca", "el teatre català"], a: 0, e: "Va dignificar el català." },
    { q: "Les cròniques servien per…", o: ["engrandir la dinastia", "fer riure", "ensenyar gramàtica"], a: 0, e: "Propaganda política." },
    { q: "El Llibre de les bèsties és una…", o: ["faula política", "crònica", "cançó d'amor"], a: 0, e: "Amb animals com a personatges." },
  ],
  feynman: ["Com i quan neix la literatura catalana", "La conversió i els objectius de Ramon Llull", "Tres obres literàries de Llull", "Les quatre grans cròniques"],
  mapa: mapa("EDAT MITJANA", "var(--eso)", [
    ["Orígens", "Homilies · trobadors", "var(--muted)"],
    ["Llull", "Blaquerna · Meravelles", "var(--pen)"],
    ["Cròniques", "Jaume I · Desclot…", "var(--red)"],
    ["Llengua", "primera prosa culta", "var(--leaf)"],
  ]),
  tarjetas: [
    ["Homilies d'Organyà", "Sermons de finals del s. XII o principis del XIII: primer text literari en prosa catalana."],
    ["Ramon Llull", "Autor mallorquí (1232-1316), pare de la prosa literària catalana."],
    ["Blaquerna", "Novel·la de Llull sobre un jove que busca la perfecció; inclou el Llibre d'amic e amat."],
    ["Les quatre grans cròniques", "Jaume I, Desclot, Muntaner i Pere el Cerimoniós."],
    ["Llibre dels fets", "Autobiografia dictada per Jaume I, amb les conquestes de Mallorca i València."],
  ],
  familias: ["Busqueu al mapa els llocs on va viatjar Ramon Llull i on va conquerir Jaume I.", "Si sou a prop de Palma o de València, visiteu algun lloc lligat a Llull o a Jaume I.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Educació literària: orígens de la literatura catalana, Ramon Llull i la prosa doctrinal, la prosa historiogràfica de les cròniques (RD 217/2022, Llengua Catalana i Literatura 3r ESO; currículums autonòmics).",
    ideas: ["Llegir versets del Llibre d'amic e amat i escriure'n de propis.", "Dramatitzar l'episodi de l'oreneta del Llibre dels fets.", "Fer una línia del temps de la Corona d'Aragó amb fets i obres."],
  },
  fuentes: [
    L.BOE,
    { t: "Centre de Documentació Ramon Llull (Universitat de Barcelona)", url: "https://www.ub.edu/llulldb/" },
    { t: "Ramon Llull, Viquipèdia", url: "https://ca.wikipedia.org/wiki/Ramon_Llull" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 70,
  objetivos: ["Comentar un fragment de Llull o de les cròniques", "Conèixer la prosa del segle XIV: Muntaner, Eiximenis i Bernat Metge"],
  bloques: [
    { tras: "Els orígens de la literatura catalana", html: `<h3>La societat medieval i la literatura</h3><p>A l'edat mitjana, la societat s'organitzava en tres estaments: la <b>noblesa</b>, que lluitava; el <b>clergat</b>, que pregava; i el <b>poble</b>, que treballava. La major part de la gent no sabia llegir, de manera que la literatura sovint es transmetia de manera <mark>oral</mark>: els joglars recitaven poemes i històries a les places i als castells.</p><p>Els llibres es copiaven a mà en <b>manuscrits</b>, sovint als monestirs, i eren molt cars. La cultura era molt religiosa i la llengua culta era el <b>llatí</b>. Per això és tan important que, a partir del segle XIII, autors com Llull i els cronistes triessin el català: van demostrar que una llengua romànica també podia servir per a la filosofia, la ciència i la història. Al segle XIV, la <b>Cancelleria reial</b> va contribuir a fixar una prosa catalana elegant i unitària.</p>` },
    { tras: "Les obres de Llull", html: `<h3>Llegir Llull: els versets del Llibre d'amic e amat</h3><p>El <b>Llibre d'amic e amat</b> té tants versets com dies té l'any, per meditar-ne un cada dia. L'<b>amic</b> és l'ànima del creient i l'<b>amat</b> és Déu. Molts versets són breus diàlegs. En un dels més coneguts, explicat aquí amb paraules d'avui, algú pregunta a l'amic què és l'amor, i l'amic respon amb una <b>paradoxa</b>: l'amor fa esclaus els qui són lliures i dona llibertat als qui són esclaus.</p><p>Llull fa servir recursos de la <mark>poesia trobadoresca</mark> (l'amor, el diàleg, l'enamorat que pateix), però els aplica a l'amor espiritual. Així, el llenguatge de l'amor cortès es converteix en llenguatge místic. També fa servir sovint preguntes i respostes, com en un diàleg, per fer pensar el lector.</p>` },
    { tras: "Les quatre grans cròniques", html: `<h3>Característiques de les cròniques</h3>${L.tb(["Crònica", "Autor i persona", "Trets"], [["Llibre dels fets", "Jaume I, 1a persona", "to personal, anècdotes, llegendes"], ["Crònica de Desclot", "Bernat Desclot, 3a persona", "més objectiva, sobre Pere el Gran"], ["Crònica de Muntaner", "Ramon Muntaner, 1a persona", "oral i viva, s'adreça als lectors"], ["Crònica de Pere III", "el rei i col·laboradors, 1a persona", "solemne, justifica les decisions del rei"]])}<p>Totes tenen en comú la voluntat de <mark>justificar i glorificar</mark> el casal de Barcelona. Barregen fets històrics amb llegendes i fets meravellosos (miracles, senyals divins), i fan servir recursos per mantenir l'atenció: discursos, diàlegs i descripcions de batalles.</p>` },
    { tras: "El Llibre dels fets", html: `<h3>Ramon Muntaner i els almogàvers</h3><p><b>Ramon Muntaner</b> (1265-1336) va participar personalment en moltes de les aventures que explica. La seva crònica narra, entre altres fets, l'<b>expedició dels almogàvers</b> a Orient: un exèrcit de soldats d'infanteria catalans i aragonesos que, dirigits per <b>Roger de Flor</b>, van anar a ajudar l'emperador de Bizanci contra els turcs (1302-1311).</p><p>Muntaner escriu amb un estil molt <mark>oral</mark>, com si parlés a un públic: fa preguntes, s'adreça als «senyors» que l'escolten, repeteix idees i exagera les gestes dels catalans. És un narrador apassionat i patriòtic. La seva obra va inspirar, més endavant, novel·les de cavalleries com el <i>Tirant lo Blanc</i>.</p>` },
    { tras: "El Llibre dels fets", html: `<h3>La prosa del segle XIV: Eiximenis, Ferrer i Metge</h3><p>Al segle XIV i a principis del XV la prosa catalana arriba a un gran nivell. <b>Francesc Eiximenis</b>, frare franciscà, va escriure <i>Lo Crestià</i>, una enciclopèdia moral amb moltes anècdotes de la vida quotidiana. <b>Sant Vicent Ferrer</b>, dominicà valencià, va ser un gran predicador: els seus <b>sermons</b>, plens d'exemples i d'expressions populars, atreien multituds.</p><p><b>Bernat Metge</b>, secretari reial, va escriure <i>Lo somni</i> (1399), on dialoga en somnis amb l'esperit del rei Joan I sobre la immortalitat de l'ànima. És la primera obra catalana que mostra la influència de l'<mark>humanisme</mark> italià (Petrarca, Boccaccio), amb un estil elegant i ple d'ironia. Obre el camí cap a l'esplendor del segle XV.</p>` },
  ],
  videos: [
    ["Les quatre grans cròniques", L.vid("d3S7T3-djVY", "Les quatre grans cròniques medievals", "JulSalAlb Virolai", 56047)],
    ["El Llibre dels fets", L.vid("unJ_ZwWxUi0", "Jaume I: «El llibre dels fets»", "La Gran Videoteca dels Països Catalans", 7055)],
  ],
  ejemplos: [
    ["Comenta el verset en què l'amic explica que l'amor fa esclaus els lliures i lliures els esclaus.", ["Localització: Ramon Llull, Llibre d'amic e amat, dins del Blaquerna (s. XIII).", "Tema: l'amor a Déu lliga la persona però, alhora, l'allibera.", "Recursos: diàleg de pregunta i resposta, paradoxa i vocabulari de l'amor cortès aplicat a l'amor místic."], "verset místic que fa pensar el lector a través d'una paradoxa."],
    ["Per què diem que les cròniques són propaganda?", ["Les escriuen reis o persones properes a la cort.", "Expliquen les victòries i justifiquen les decisions dels reis.", "Hi afegeixen llegendes i senyals divins que mostren el rei com a escollit."], "perquè volen glorificar la dinastia del casal de Barcelona."],
    ["Quin narrador té el Llibre dels fets i quin efecte produeix?", ["El narrador és el mateix rei, en primera persona.", "Explica anècdotes personals i sentiments.", "El lector té la sensació d'escoltar el rei."], "narrador protagonista en 1a persona: to proper i viu."],
  ],
  errores: [
    "Pensar que els trobadors catalans escrivien en català: ho feien en occità.",
    "Atribuir el Llibre dels fets a Ramon Llull: és de Jaume I.",
    "Creure que les cròniques són història objectiva: barregen fets, llegendes i propaganda.",
    "Confondre l'amic (l'ànima) i l'amat (Déu) al Llibre d'amic e amat.",
    "Situar Llull al segle XV: va viure entre 1232 i 1316.",
  ],
  ejercicios: [
    ["Quin és el primer text literari en prosa catalana?", "Les Homilies d'Organyà (finals del s. XII o principis del XIII)."],
    ["Per què és tan important Ramon Llull?", "Perquè va ser el primer a escriure en català sobre filosofia, ciència i teologia: és el pare de la prosa literària catalana."],
    ["Escriu els tres objectius de Llull.", "Convertir els infidels, escriure el millor llibre del món i fundar escoles per aprendre llengües."],
    ["Què és el Llibre de les bèsties?", "Una faula política amb animals que forma part del Llibre de meravelles."],
    ["Escriu les quatre grans cròniques i els seus autors.", "Llibre dels fets (Jaume I), Crònica de Bernat Desclot, Crònica de Ramon Muntaner i Crònica de Pere el Cerimoniós."],
    ["Quines conquestes explica el Llibre dels fets?", "Les de Mallorca (1229) i València (1238)."],
    ["Explica la llegenda de l'oreneta.", "Jaume I va prohibir desmuntar la seva tenda perquè una oreneta hi havia fet el niu."],
    ["Qui eren els almogàvers?", "Soldats d'infanteria catalans i aragonesos que, amb Roger de Flor, van lluitar a Orient al servei de Bizanci."],
    ["Què és Lo somni i qui el va escriure?", "Un diàleg de Bernat Metge (1399) sobre la immortalitat de l'ànima, amb influència humanista."],
    ["Per què és important que Llull i els cronistes escrivissin en català i no en llatí?", "Perquè van demostrar que el català podia ser una llengua de cultura i van fixar-ne una prosa culta."],
  ],
  quiz: [
    ["L'expedició dels almogàvers la narra…", ["Muntaner", "Desclot", "Llull"], 0, "Ell hi va participar."],
    ["Lo somni de Bernat Metge mostra influència de…", ["l'humanisme", "el romanticisme", "el barroc"], 0, "Petrarca i Boccaccio."],
    ["Eiximenis va escriure…", ["Lo Crestià", "el Tirant", "el Blaquerna"], 0, "Enciclopèdia moral."],
    ["La Crònica de Desclot està en…", ["3a persona", "1a persona", "vers"], 0, "Més objectiva."],
    ["Vicent Ferrer és conegut pels seus…", ["sermons", "poemes", "contes"], 0, "Gran predicador."],
  ],
  tarjetas: [
    ["Almogàvers", "Soldats d'infanteria que van lluitar a Orient amb Roger de Flor; ho explica Muntaner."],
    ["Lo somni", "Obra de Bernat Metge (1399), primera mostra de l'humanisme en català."],
    ["Amic i amat", "L'amic és l'ànima del creient; l'amat és Déu."],
  ],
});
