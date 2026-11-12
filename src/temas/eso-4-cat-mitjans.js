// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "Els mitjans de comunicació",
  minutos: 35,
  objetivos: ["Conèixer els mitjans de comunicació en català i les seves funcions", "Classificar els gèneres periodístics", "Detectar notícies falses i llegir els mitjans amb esperit crític"],
  claves: ["mitjans de comunicació", "notícia", "reportatge", "entrevista", "editorial", "columna", "piràmide invertida", "fake news"],
  pregunta: {
    texto: "Veus a les xarxes: «URGENT! Demà tancaran tots els instituts!!!». No té autor, ni data, ni enllaç. Ho compartiries?",
    respuesta: "Millor que no. Té tots els senyals d'una <mark>notícia falsa</mark>: alarma, majúscules, cap font. Els mitjans fiables diuen <b>qui</b> ho explica, <b>quan</b> i <b>d'on</b> ho treuen. Llegir amb esperit crític és tan important com saber llegir.",
  },
  bloques: [
    {
      html: `<h3>Mitjans i funcions</h3><p>Els <b>mitjans de comunicació</b> (premsa, ràdio, televisió, internet) tenen tres funcions: <mark>informar, formar opinió i entretenir</mark>. En català hi ha diaris com <i>Ara</i>, <i>El Punt Avui</i> o <i>VilaWeb</i>, ràdios com Catalunya Ràdio i À Punt, i la televisió 3Cat, IB3 o À Punt.</p>`,
      svg: L.filas("Les tres funcions dels mitjans", [
        ["Informar", "notícies i dades", "var(--inf)"], ["Opinar", "editorials, columnes", "var(--red)"],
        ["Entretenir", "sèries, concursos", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Els gèneres periodístics</h3><p><b>Informatius</b>: notícia, reportatge, entrevista. <b>D'opinió</b>: editorial (opinió del diari, sense signatura), article, columna, carta al director. <b>Mixtos</b>: crònica i crítica, que informen i alhora valoren.</p>`,
      svg: L.filas("Gèneres periodístics en tres grups", [
        ["Informatius", "notícia · reportatge", "var(--inf)"],
        ["D'opinió", "editorial · columna", "var(--red)"],
        ["Mixtos", "crònica · crítica", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>La notícia</h3><p>Explica un fet recent i d'interès de manera objectiva. Segueix la <mark>piràmide invertida</mark>: <b>titular</b>, <b>entradeta</b> (resum) i <b>cos</b>, amb els detalls de més a menys importants. Respon a les sis preguntes: què, qui, quan, on, com i per què.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Piràmide invertida de la notícia: titular, entradeta i cos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 16 H 240 L 130 168 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M46 52 H 214 M78 96 H 182" stroke="var(--line)" stroke-width="2"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <text x="130" y="40" font-size="15" fill="var(--red)">TITULAR</text>
          <text x="130" y="80" font-size="14" fill="var(--pen)">entradeta</text>
          <text x="130" y="122" font-size="13" fill="var(--inf)">cos</text>
          <text x="130" y="140" font-size="11" fill="var(--muted)">detalls</text>
        </g></svg>`,
    },
    {
      html: `<h3>L'entrevista i el reportatge</h3><p>L'<b>entrevista</b> recull un diàleg de preguntes i respostes amb una persona interessant; comença amb una presentació de l'entrevistat. El <b>reportatge</b> aprofundeix en un tema amb dades, testimonis, fotografies i més extensió que la notícia.</p>`,
      svg: L.dialogo("Fragment d'entrevista", [
        ["periodista", "Quan vas començar a escriure?", "var(--pen)"],
        ["escriptora", "Als dotze anys, en un diari personal.", "var(--leaf)"],
        ["periodista", "I què et va fer publicar?", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>Notícies falses</h3><p>Abans de compartir, comprova: <mark>qui ho publica</mark> (és un mitjà conegut?), <b>la data</b>, <b>les fonts</b> (hi ha enllaços, dades?), <b>el to</b> (massa alarma o majúscules?) i si <b>altres mitjans</b> ho expliquen. Hi ha verificadors com <i>Verificat</i> o <i>Maldita</i>.</p>`,
      svg: L.filas("Comprovacions abans de compartir una notícia", [
        ["Qui?", "mitjà o autor conegut", "var(--pen)"], ["Quan?", "data recent", "var(--leaf)"],
        ["Fonts?", "enllaços i dades", "var(--inf)"], ["To?", "sense alarmisme", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Informar, opinar o barrejar",
    svg: L.columnas("Gèneres informatius, d'opinió i mixtos", [
      ["fets objectius", "INFORMATIUS", ["notícia · reportatge", "entrevista"], "var(--inf)"],
      ["valoració signada", "D'OPINIÓ", ["editorial · article", "columna · cartes"], "var(--red)"],
      ["fets + valoració", "MIXTOS", ["crònica", "crítica"], "var(--leaf)"],
    ]),
  },
  video: { id: "4in_YToMu1c", titulo: "¿Qué son los géneros periodísticos? Definición, ejemplos y explicación", canal: "El Edén de los Cínicos", vistas: 70369, megusta: 1233, busqueda: "gèneres periodístics català" },
  quiz: [
    { q: "Quin gènere expressa l'opinió del diari i no va signat?", o: ["L'editorial", "La crònica", "El reportatge"], a: 0, e: "L'editorial representa la línia del mitjà." },
    { q: "El resum que segueix el titular d'una notícia és…", o: ["l'entradeta", "el cos", "la columna"], a: 0, e: "L'entradeta respon a les preguntes bàsiques." },
    { q: "La crònica és un gènere…", o: ["informatiu", "d'opinió", "mixt"], a: 2, e: "Informa i valora alhora." },
    { q: "Quin és un senyal de notícia falsa?", o: ["Té autor i data", "No cita cap font i fa servir majúscules alarmistes", "Ho expliquen diversos mitjans"], a: 1, e: "La manca de fonts i l'alarmisme són senyals d'alerta." },
    { q: "Quines són les tres funcions dels mitjans?", o: ["Informar, formar opinió i entretenir", "Vendre, comprar i llogar", "Escriure, llegir i dibuixar"], a: 0, e: "Són les funcions clàssiques." },
  ],
  examen: [
    { q: "La piràmide invertida posa…", o: ["el més important al principi", "els detalls al principi", "l'opinió al final"], a: 0, e: "De més a menys important." },
    { q: "Quin gènere aprofundeix en un tema amb testimonis i dades?", o: ["El reportatge", "La notícia breu", "L'editorial"], a: 0, e: "El reportatge és més extens i documentat." },
    { q: "Qui escriu una columna?", o: ["Un columnista fix", "El lector", "Ningú"], a: 0, e: "Sempre la mateixa persona, amb estil propi." },
  ],
  feynman: ["Les tres funcions dels mitjans", "Els tres grups de gèneres periodístics", "Les parts de la notícia", "Com detectar una notícia falsa"],
  mapa: mapa("MITJANS", "var(--eso)", [
    ["Funcions", "informar · opinar · entretenir", "var(--pen)"],
    ["Informatius", "notícia · reportatge", "var(--inf)"],
    ["Opinió", "editorial · columna", "var(--red)"],
    ["Esperit crític", "fonts · data · to", "var(--leaf)"],
  ], 240),
  tarjetas: [
    ["Entradeta", "Primer paràgraf de la notícia que en resumeix l'essencial."],
    ["Editorial", "Text d'opinió del diari, sense signatura."],
    ["Crònica", "Gènere mixt: informa d'uns fets i els valora qui hi era."],
    ["Piràmide invertida", "Ordre de la notícia: de més a menys important."],
    ["Notícia falsa", "Informació inventada o manipulada; es detecta revisant autor, data, fonts i to."],
  ],
  familias: ["Mireu junts la portada d'un diari en català i classifiqueu tres textos per gèneres.", "Quan us arribi un missatge viral, comproveu-lo junts amb un verificador.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Alfabetització mediàtica i informacional: gèneres periodístics, mitjans en català i detecció de desinformació (RD 217/2022, Llengua Catalana i Literatura 4t; currículums autonòmics).",
    ideas: ["Redacció d'un diari digital de l'institut amb notícies i columnes.", "Comparar la mateixa notícia en dos mitjans i detectar-ne la valoració.", "Taller de verificació amb notícies falses reals."],
  },
  fuentes: [
    L.BOE,
    { t: "Verificat, verificació de dades", url: "https://www.verificat.cat/" },
    { t: "Consell de l'Audiovisual de Catalunya", url: "https://www.cac.cat/" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Redactar titulars i entradetes que responguin les sis preguntes", "Analitzar un anunci publicitari", "Conèixer l'espai comunicatiu en català"],
  bloques: [
    { tras: "Mitjans i funcions", html: `<h3>L'espai comunicatiu en català</h3><p>Durant la dictadura el català va quedar gairebé fora dels mitjans. Amb la democràcia van néixer mitjans públics que han estat claus per a la normalització de la llengua: <b>TV3 i Catalunya Ràdio</b> (nascudes el 1983 i avui agrupades sota la marca 3Cat), <b>IB3</b> a les Illes Balears (2005) i <b>À Punt</b> al País Valencià (2018), que va substituir l'antiga Canal 9, tancada el 2013. També hi ha diaris en paper i digitals (<i>Ara</i>, <i>El Punt Avui</i>, <i>VilaWeb</i>, <i>Diari de Balears</i>…) i molts creadors de continguts a YouTube, TikTok i pòdcasts.</p><p>Els <b>llibres d'estil</b> d'aquests mitjans fixen com s'ha d'escriure i pronunciar el català estàndard en la ràdio i la televisió, i tenen en compte les varietats de cada territori.</p>` },
    { tras: "La notícia", html: `<h3>El titular i l'entradeta</h3><p>El <b>titular</b> ha d'atrapar el lector amb poques paraules: verbs en present encara que el fet sigui passat («El Govern aprova…»), sense articles innecessaris i amb les dades clau. De vegades l'acompanyen un <b>avantítol</b> (a sobre, context) i un <b>subtítol</b> (a sota, amplia). L'<b>entradeta</b> resumeix en un o dos paràgrafs les respostes a les sis preguntes: <mark>què, qui, quan, on, com i per què</mark>.</p><p>El <b>cos</b> de la notícia amplia les dades, afegeix declaracions entre cometes dels protagonistes i dona context. Per això la notícia es pot retallar de baix a dalt sense perdre l'essencial. Les notícies s'escriuen en tercera persona i amb un llenguatge clar, precís i objectiu.</p>` },
    { tras: "L'entrevista i el reportatge", html: `<h3>La crònica i els gèneres d'opinió</h3><p>La <b>crònica</b> és un gènere mixt: el periodista narra un fet que ha viscut o seguit (un partit, un festival, un judici) en ordre cronològic, però hi afegeix valoracions i estil personal; va signada. Els gèneres d'<b>opinió</b> són l'<b>editorial</b> (l'opinió del diari, sense signatura), l'<b>article</b> (d'un col·laborador o expert), la <b>columna</b> (sempre del mateix autor, al mateix espai), la <b>carta al director</b> (dels lectors) i la <b>vinyeta</b> o acudit gràfic, que critica l'actualitat amb humor.</p><p>Un diari seriós separa la informació de l'opinió i les marca clarament: a la secció d'opinió, la valoració és legítima; en una notícia, no.</p>` },
    { tras: "L'entrevista i el reportatge", html: `<h3>La publicitat</h3><p>La <b>publicitat comercial</b> vol que comprem un producte; la <b>propaganda</b> difon idees polítiques o socials; la <b>publicitat institucional</b> (campanyes de trànsit, de salut, d'igualtat) la paguen les administracions per al bé comú. Avui creix la <b>publicitat encoberta</b>: influenciadors que mostren un producte sense dir que els paguen; per llei l'han d'indicar amb etiquetes com «#publi».</p><p>Un anunci combina el <b>codi verbal</b> (eslògan, text) i l'<b>icònic</b> (imatge, color, música). Hi domina la funció <mark>conativa</mark>, amb recursos com l'imperatiu («Prova-ho!»), la rima, els superlatius, els jocs de paraules i l'associació del producte amb valors desitjables: èxit, joventut, llibertat, família.</p>` },
    { tras: "Notícies falses", html: `<h3>Com analitzar un anunci</h3><ol><li><b>Producte i marca</b>: què s'anuncia?</li><li><b>Públic</b>: edat, gustos, situació a què es dirigeix.</li><li><b>Imatge</b>: persones, colors, ambient; quins valors transmet.</li><li><b>Text</b>: eslògan i recursos (imperatiu, rima, hipèrbole, anglicismes).</li><li><b>Estratègia</b>: dona raons o desperta emocions?</li><li><b>Valoració</b>: és honest?, transmet estereotips?</li></ol><p>Practicar aquesta anàlisi ens fa consumidors més crítics i ens ajuda a detectar quan ens volen vendre alguna cosa disfressada d'informació.</p>` },
  ],
  videos: [
    ["Els gèneres periodístics", L.vid("zbDsyQG7jp8", "Qué son los géneros periodísticos: clasificación, características y ejemplos", "Clases Particulares en Ávila", 124559)],
    ["La publicitat", L.vid("IHrfdAODfxg", "Texto publicitario: definición, funciones, estructura, tipos y elementos", "Estudiando con Jackeline", 90853)],
  ],
  ejemplos: [
    ["Comprova si aquesta entradeta respon les sis preguntes: «Més de 2.000 veïns de Girona es van concentrar ahir a la tarda a la plaça del Vi per demanar més carrils bici, segons la Guàrdia Urbana.»", ["Què: una concentració. Qui: més de 2.000 veïns.", "Quan: ahir a la tarda. On: plaça del Vi, Girona.", "Per què: per demanar més carrils bici. Font: Guàrdia Urbana.", "Falta el com (de manera pacífica, amb pancartes…), que pot anar al cos."], "respon cinc de les sis preguntes; el com pot anar al cos."],
    ["Escriu un titular per a: «Ahir l'equip femení de l'institut va guanyar la final comarcal de bàsquet per 54-40».", ["Verb en present: guanya.", "Sense detalls secundaris.", "Amb les dades clau: qui i què."], "«L'institut guanya la final comarcal femenina de bàsquet.»"],
    ["Analitza l'eslògan «Fresc, fresquíssim: el teu estiu comença aquí!» d'un gelat.", ["Superlatiu «fresquíssim»: exagera la qualitat.", "Exclamació i possessiu «el teu»: tracte proper, apel·la al lector.", "Associa el producte a un valor desitjat: l'estiu, les vacances."], "eslògan conatiu amb superlatiu, tuteig i associació emocional a l'estiu."],
  ],
  errores: [
    "Confondre l'editorial (opinió del diari, sense signatura) amb l'article (signat).",
    "Escriure el titular en passat i amb detalls secundaris.",
    "Creure que tot el que té forma de notícia és veritat.",
    "Analitzar només el text d'un anunci i oblidar la imatge.",
    "Confondre propaganda i publicitat comercial.",
    "Barrejar opinió i informació en una notícia: els adjectius valoratius i la primera persona són propis dels gèneres d'opinió.",
  ],
  ejercicios: [
    ["Ordena segons la piràmide invertida: cos, titular, entradeta.", "Titular, entradeta, cos."],
    ["A quin gènere pertany una carta d'una lectora que es queixa del soroll del barri?", "Gènere d'opinió: carta al director."],
    ["Quina diferència hi ha entre reportatge i notícia?", "La notícia explica un fet recent de manera breu; el reportatge investiga un tema a fons amb testimonis i dades, i no ha de ser d'actualitat immediata."],
    ["Quin tipus de publicitat és una campanya del Servei Català de Trànsit?", "Publicitat institucional."],
    ["Per què un influenciador ha de posar «#publi»?", "Perquè la llei obliga a identificar la publicitat; si no, seria publicitat encoberta i enganyaria els seguidors."],
    ["Assenyala dos recursos a «Cansat? Prova Energix. Energia que es nota.»", "Pregunta retòrica («Cansat?») i imperatiu («Prova»); també el joc entre Energix i energia."],
    ["Anomena tres mitjans públics en català.", "TV3 / Catalunya Ràdio (3Cat), IB3 i À Punt."],
    ["Escriu tres preguntes per comprovar si una notícia és falsa.", "Qui la publica? Té data i fonts? La publiquen altres mitjans fiables o webs de verificació?"],
    ["Què és una crònica? Posa'n un exemple.", "Gènere mixt en què el periodista narra un fet que ha seguit, amb valoracions i estil personal; per exemple, la crònica d'un partit de futbol."],
    ["Analitza el públic i els valors d'un anunci de cotxe amb una família somrient a la muntanya.", "Públic: famílies amb fills. Valors: seguretat, llibertat, unió familiar i natura. Apel·la a les emocions més que a dades tècniques."],
  ],
  quiz: [
    ["Les sis preguntes es responen sobretot a…", ["l'entradeta", "l'últim paràgraf", "la signatura"], 0, "Resumeix l'essencial."],
    ["La vinyeta és un gènere…", ["d'opinió", "informatiu", "publicitari"], 0, "Critica l'actualitat amb humor."],
    ["La publicitat que amaga que ho és s'anomena…", ["encoberta", "institucional", "propaganda"], 0, "Per això cal posar #publi."],
    ["Quin mitjà públic emet a les Illes Balears?", ["IB3", "À Punt", "TV3"], 0, "Creat el 2005."],
    ["En un anunci domina la funció…", ["conativa", "metalingüística", "fàtica"], 0, "Vol que el receptor actuï."],
  ],
  tarjetas: [
    ["Mitjans públics en català", "3Cat (TV3, Catalunya Ràdio), IB3, À Punt."],
    ["Crònica", "Gènere mixt: narra un fet viscut, amb valoracions i signatura."],
    ["Publicitat institucional", "La paguen les administracions per al bé comú."],
  ],
});
