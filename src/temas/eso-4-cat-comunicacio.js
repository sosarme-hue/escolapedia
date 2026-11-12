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

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Comentar l'adequació, la coherència i la cohesió d'un text", "Reconèixer les modalitats oracionals i les tipologies textuals"],
  bloques: [
    { tras: "Els elements de la comunicació", html: `<h3>Soroll, retroacció i comunicació no verbal</h3><p>La comunicació no sempre funciona. Anomenem <b>soroll</b> tot allò que dificulta el missatge: una mala connexió, una lletra il·legible, una paraula que el receptor no coneix o un comentari fora de lloc. Per comprovar que ens han entès fem servir la <mark>retroacció</mark>: la resposta del receptor, que en aquell moment passa a ser emissor. En una conversa els papers canvien contínuament; en un cartell o en un llibre, el receptor no pot respondre.</p><p>També comuniquem sense paraules: els gestos, el to de veu, la distància, la roba, els emojis o els colors formen la <b>comunicació no verbal</b>. Quan el que diem i el que mostrem no coincideixen («Estic bé», amb els ulls plorosos), solem creure el missatge no verbal.</p>` },
    { tras: "Les funcions del llenguatge", html: `<h3>Funcions i modalitats oracionals</h3><p>Cada funció sol anar acompanyada d'unes marques gramaticals que t'ajuden a comentar un text:</p>${L.tb(["Funció", "Se centra en…", "Marques", "Exemple"], [["Referencial", "el context", "oracions enunciatives, 3a persona", "L'aigua bull a 100 °C."], ["Expressiva", "l'emissor", "exclamacions, interjeccions, 1a persona", "Quina por que he passat!"], ["Conativa", "el receptor", "imperatius, vocatius, preguntes", "Laura, tanca la porta."], ["Fàtica", "el canal", "fórmules de salutació i comprovació", "M'escoltes? D'acord, d'acord…"], ["Poètica", "el missatge", "rima, metàfores, jocs de paraules", "La lluna, la pruna…"], ["Metalingüística", "el codi", "cometes, definicions", "«Cançó» porta accent tancat."]])}<p>Un text pot tenir diverses funcions, però gairebé sempre <mark>n'hi ha una que predomina</mark>.</p>` },
    { tras: "Les propietats del text", html: `<h3>L'adequació i la coherència</h3><p>Un text és <b>adequat</b> quan s'ajusta a la situació: a qui va dirigit, amb quina intenció, per quin canal i en quin context. Afecta el registre, el tractament (tu, vostè o vós) i el vocabulari. Per revisar-la, fes-te quatre preguntes: <i>qui ho llegirà?, per a què ho escric?, on es publicarà?, quin to espera el lector?</i></p><p>Un text és <b>coherent</b> quan té un <b>tema</b> clar i totes les idees s'hi relacionen de manera lògica i ordenada. Per aconseguir-ho, el text s'organitza en <b>paràgrafs</b>: cada paràgraf desenvolupa una idea, i l'ordre dels paràgrafs forma l'<b>estructura</b> (introducció, desenvolupament i conclusió). A més, no hi pot haver contradiccions ni dades falses.</p>` },
    { tras: "Els mecanismes de cohesió", html: `<h3>Els mecanismes de cohesió, un per un</h3>${L.tb(["Mecanisme", "Què fa", "Exemple"], [["Repetició", "repeteix una paraula clau", "el <i>mòbil</i>… aquest <i>mòbil</i>"], ["Sinonímia", "fa servir una paraula equivalent", "el cotxe… el vehicle"], ["Hiperonímia", "fa servir una paraula més general", "les roses… les flors"], ["Pronoms (anàfora)", "remeten a una cosa dita abans", "Vaig veure l'Anna i <i>la</i> vaig saludar."], ["Pronoms febles en i ho", "substitueixen complements", "Vas a Girona? Sí, <i>hi</i> vaig."], ["El·lipsi", "omet el que ja se sap", "Jo porto el pa i tu, Ø l'aigua."], ["Connectors", "uneixen idees i en marquen la relació", "a més, tanmateix, per tant"]])}<p>Els <b>pronoms febles</b> són una eina de cohesió molt pròpia del català: «De pomes, <b>n'</b>he comprat tres».</p>` },
    { tras: "El registre", html: `<h3>Les tipologies textuals i el comentari</h3><p>Segons la intenció, els textos poden ser <b>narratius</b> (expliquen fets), <b>descriptius</b> (com és una cosa), <b>dialogats</b> (converses), <b>expositius</b> (expliquen un tema), <b>argumentatius</b> (defensen una opinió) i <b>instructius</b> (diuen com fer una cosa).</p><p>Per comentar un text a 4t, segueix aquest ordre: 1) <b>localització</b> (autor, obra, tipus de text); 2) <b>tema</b>, en una sola frase amb un substantiu abstracte («La importància de…»); 3) <b>resum</b> objectiu amb les teves paraules; 4) <b>estructura</b> en parts; 5) <b>propietats</b>: adequació, coherència i cohesió amb exemples; 6) <b>valoració crítica</b> argumentada. L'error més freqüent és barrejar el resum amb l'opinió.</p>` },
  ],
  videos: [
    ["Les propietats del text", L.vid("V3vq6NUTvZ0", "Com s'estructura un text perquè sigui coherent i fàcil de llegir", "Parlem d'escriure en català", 53380)],
    ["L'adequació i la coherència", L.vid("1BRppDceR28", "Les 4 preguntes que has de fer-te abans de començar a escriure", "Parlem d'escriure en català", 37296)],
  ],
  ejemplos: [
    ["Identifica els elements de la comunicació: la Marta envia un àudio al seu avi per felicitar-lo mentre va en autobús.", ["Emissor: la Marta. Receptor: el seu avi.", "Missatge: la felicitació. Codi: la llengua catalana oral.", "Canal: l'aire i la xarxa telefònica (àudio digital).", "Context: l'aniversari de l'avi; el soroll de l'autobús pot dificultar el missatge."], "emissor la Marta, receptor l'avi, missatge la felicitació, codi el català, canal l'àudio i context l'aniversari; el soroll de l'autobús és un possible soroll."],
    ["Quina funció predomina a «Atenció! Si trobeu aquest gos, truqueu al 600 000 000»?", ["Hi ha un imperatiu («truqueu») i una crida d'atenció.", "El text vol que el receptor faci alguna cosa.", "Tot i que informa d'un gos perdut, la intenció principal és fer actuar el lector."], "predomina la funció conativa o apel·lativa."],
    ["Millora la cohesió: «En Joan va comprar una bici. La bici era vermella. En Joan feia servir la bici per anar a l'institut.»", ["Detecta les repeticions: «en Joan» i «la bici».", "Substitueix amb pronoms febles i el·lipsi: «la feia servir».", "Uneix les idees amb connectors: «i», «per això»."], "«En Joan va comprar una bici vermella i la feia servir per anar a l'institut.»"],
  ],
  errores: [
    "Confondre canal i codi: el canal és el mitjà físic; el codi, el sistema de signes.",
    "Pensar que un text només té una funció: en sol tenir diverses, encara que una predomini.",
    "Confondre coherència (sentit global) i cohesió (enllaços entre frases).",
    "Fer servir el registre col·loquial en un text formal, com una sol·licitud.",
    "Repetir «i» o «llavors» a cada frase en lloc de variar els connectors.",
    "Ficar opinions personals al resum.",
  ],
  ejercicios: [
    ["Identifica emissor, receptor, canal i codi en un cartell de «Prohibit fumar».", "Emissor: el responsable del lloc. Receptor: qualsevol persona que el llegeixi. Canal: el cartell (visual). Codi: la llengua escrita i sovint una icona."],
    ["Quina funció predomina a «Hola, se'm sent?, hi sou?»?", "La fàtica: l'emissor comprova que el canal funciona."],
    ["Quina funció predomina a «El substantiu és la paraula que anomena éssers i objectes»?", "La metalingüística: la llengua parla de la mateixa llengua."],
    ["Escriu un exemple de funció expressiva i un de poètica.", "Expressiva: «Quina il·lusió em fa veure't!». Poètica: «Els teus ulls, dos estels en la nit» (metàfora)."],
    ["Què falla en aquest text: «Demà anem d'excursió al museu. El meu gos es diu Rufo. El museu obre a les nou.»?", "Falla la coherència: la frase del gos no té relació amb el tema."],
    ["Assenyala els mecanismes de cohesió: «L'Anna i en Lluís van anar al cine. Ella va triar la pel·lícula i ell, les crispetes.»", "«Ella» i «ell» són pronoms (anàfora); a «i ell, les crispetes» hi ha una el·lipsi del verb; «i» és un connector copulatiu."],
    ["Reescriu de manera adequada per a un correu a la tutora: «Ei, demà no vinc, que estic fatal».", "«Bon dia, Marta: us escric per avisar-vos que demà no podré venir a classe perquè no em trobo bé. Una salutació, Hug.»"],
    ["Substitueix per un pronom feble: «Vas a la biblioteca? Sí, vaig a la biblioteca.»", "Sí, hi vaig."],
    ["Escriu el tema d'un text que explica per què dormir vuit hores millora les notes.", "«La influència del descans en el rendiment escolar.»"],
    ["Classifica: una recepta, la crònica d'un partit, una carta de queixa i una entrevista.", "Recepta: instructiu. Crònica: narratiu (periodístic). Carta de queixa: argumentatiu. Entrevista: dialogat."],
  ],
  quiz: [
    ["Una mala cobertura que talla una trucada és…", ["soroll", "codi", "retroacció"], 0, "Dificulta la comunicació."],
    ["«“Casa” és un substantiu» té la funció…", ["metalingüística", "fàtica", "expressiva"], 0, "La llengua parla de si mateixa."],
    ["A «les roses… les flors», «flors» és un…", ["hiperònim", "antònim", "connector"], 0, "Paraula més general."],
    ["El resum d'un text ha de ser…", ["objectiu", "una opinió", "més llarg que el text"], 0, "Recull les idees principals."],
    ["«Vas a Girona? Sí, hi vaig.» «Hi» és un mecanisme de…", ["cohesió", "adequació", "soroll"], 0, "Pronom feble que evita repetir."],
  ],
  tarjetas: [
    ["Soroll", "Tot allò que dificulta la comunicació."],
    ["Pronoms febles i cohesió", "Substitueixen complements: hi vaig, n'he comprat tres."],
    ["Tema d'un text", "La idea central, en una frase breu amb un substantiu abstracte."],
  ],
});
