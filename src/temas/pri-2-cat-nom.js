// Llengua Catalana 2n de Primària: el nom. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, parejas, cuantos } = require("./_peque");
const { V, PROFCA, FONTS } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "2-primaria",
  titulo: "El nom",
  minutos: 25,
  objetivos: ["Saber que els noms anomenen persones, animals, coses i llocs", "Distingir noms comuns i noms propis", "Escriure els noms propis amb majúscula"],
  claves: ["nom", "substantiu", "nom comú", "nom propi", "majúscula", "nom col·lectiu"],
  pregunta: {
    texto: "El teu gos es diu Bruc. «Gos» i «Bruc» són el mateix?",
    respuesta: "Totes dues paraules són <mark>noms</mark>, però no són iguals. <b>gos</b> serveix per a tots els gossos: és un nom <b>comú</b>. <b>Bruc</b> és el nom d'un de sol: és un nom <b>propi</b>.",
  },
  bloques: [
    {
      html: `<h3>Paraules que anomenen</h3><p>Tot el que ens envolta té un <mark>nom</mark>. Aquestes paraules també es diuen <b>substantius</b>.</p><p>Anomenen <b>persones</b> (nena, avi), <b>animals</b> (gat, peix), <b>coses</b> (taula, llibre) i <b>llocs</b> (casa, escola).</p><p>Si ho pots assenyalar o imaginar, segur que té un nom! El teu nom, el teu carrer i la teva joguina preferida també són noms.</p>`,
      svg: dibujos("Una nena, un gat, un llibre i una escola: persona, animal, cosa i lloc", [["nina", "nena", R], ["gato", "gat", A], ["libro", "llibre", Ve], ["escuela", "escola", N]], { titulo: "Persona · animal · cosa · lloc", nota: "Tots són noms" }),
      video: V("cnomV", "els noms en català"),
    },
    {
      html: `<h3>Un truc per trobar-los</h3><p>Davant d'un nom podem posar <mark>el, la, un o una</mark>.</p><p><i>el</i> sol, <i>la</i> lluna, <i>un</i> arbre, <i>una</i> flor. Funciona!</p><p>Amb altres paraules no funciona: «el corre» o «la bonic» sonen malament. Així sabem que <i>corre</i> i <i>bonic</i> no són noms. Prova-ho tu amb <i>llapis</i>, <i>salta</i> i <i>núvol</i>.</p>`,
      svg: frase("El sol, la lluna, un arbre, una flor", [["el", "var(--muted)"], ["sol", R], ["la", "var(--muted)"], ["lluna", R], ["/"], ["un", "var(--muted)"], ["arbre", R], ["una", "var(--muted)"], ["flor", R]], { titulo: "el, la, un, una + nom", nota: "Si encaixa, és un nom", fs: 22 }),
    },
    {
      html: `<h3>Noms comuns</h3><p>Els <mark>noms comuns</mark> serveixen per anomenar <b>tots</b> els d'una mateixa classe.</p><p><i>Gos</i> val per a qualsevol gos: gran, petit, blanc o negre. <i>Ciutat</i> val per a qualsevol ciutat. <i>Nen</i>, per a qualsevol nen.</p><p>S'escriuen amb <b>minúscula</b>, tret que comencin la frase.</p><p>Més noms comuns: <i>cadira</i>, <i>muntanya</i>, <i>ocell</i>, <i>amiga</i>, <i>carrer</i>.</p>`,
      svg: dibujos("Gos, ciutat i nen: noms comuns per a tots els de la seva classe", [["perro", "gos", A], ["casa", "ciutat", A], ["nino", "nen", A]], { titulo: "Noms comuns", nota: "Per a tots · amb minúscula" }),
    },
    {
      html: `<h3>Noms propis</h3><p>Els <mark>noms propis</mark> anomenen <b>un de sol</b> i el distingeixen dels altres.</p><p>Són noms de persones (<i>Marta</i>), mascotes (<i>Bruc</i>), ciutats (<i>Girona</i>), països, rius (<i>Ter</i>) i muntanyes (<i>Montserrat</i>).</p><p>Sempre s'escriuen amb <b>majúscula</b> inicial. Encara que siguin al mig de la frase!</p>`,
      svg: parejas("Gos comú i Bruc propi; nena comú i Marta propi; ciutat comú i Girona propi", [["perro", "gos", "perro", "Bruc"], ["nina", "nena", "nina", "Marta"], ["casa", "ciutat", "casa", "Girona"]], { izq: "comú", der: "propi", color: A, color2: R, flecha: "→" }),
    },
    {
      html: `<h3>Comú o propi?</h3><p>Fes-te una pregunta: <mark>anomena tots o només un?</mark></p><p><i>Riu</i> anomena tots els rius: és comú. <i>Ebre</i> anomena un riu concret: és propi.</p><p>Una altra pista: si porta majúscula al mig d'una frase, segurament és propi. «La meva gata <b>Mixa</b> dorm al sofà.»</p>`,
      svg: lista("Riu anomena tots, és comú; Ebre anomena un, és propi amb majúscula", [["riu → tots: comú", A], ["Ebre → un: propi", R], ["gata → comú", A], ["Mixa → propi, amb majúscula", R]], { titulo: "Tots o només un?", marca: "?" }),
    },
    {
      html: `<h3>Noms individuals i col·lectius</h3><p>Alguns noms anomenen <b>un</b>: <i>ovella</i>, <i>arbre</i>, <i>peix</i>. Són <mark>individuals</mark>.</p><p>Altres anomenen un <b>grup</b> encara que siguin en singular: <i>ramat</i> (d'ovelles), <i>bosc</i> (d'arbres), <i>banc</i> (de peixos). Són <mark>col·lectius</mark>.</p><p>Un <i>eixam</i> és un grup d'abelles. I una <i>orquestra</i>, de músics!</p>`,
      svg: cuantos("Un arbre i un bosc; un peix i un banc de peixos", [["arbol", "arbre", "bosc", 3], ["pez", "peix", "banc", 3]], { izq: "individual", der: "col·lectiu", color: A, color2: Ve }),
    },
    {
      html: `<h3>Els noms a les frases</h3><p>Gairebé a totes les frases hi ha <mark>noms</mark>. Ens diuen <b>de qui</b> o <b>de què</b> parlem.</p><p>«La <b>Marta</b> menja una <b>poma</b> al <b>parc</b>.» Aquí hi ha tres noms: Marta (propi), poma i parc (comuns).</p><p>Pinta de colors els noms d'un conte. Veuràs quants n'hi ha!</p>`,
      svg: frase("La Marta menja una poma al parc: Marta, poma i parc són noms", [["La", K], ["Marta", R], ["menja", K], ["/"], ["una", K], ["poma", A], ["al", K], ["parc", A]], { titulo: "Busca els noms", nota: "Vermell: propi · blau: comuns", fs: 22 }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Sense noms <mark>no sabríem de què parlem</mark>. «Menja una al» no s'entén.</p><p>Els noms propis ens ajuden a no confondre'ns: hi ha molts gossos, però només un <i>Bruc</i>. I moltes ciutats, però només una <i>Lleida</i>.</p><p>Quan escrius una carta, un conte o una adreça, la majúscula dels noms propis és molt important.</p>`,
      svg: charla("Un nen diu he vist un gos; la nena pregunta quin; respon el Bruc de l'Anna", [["nino", "He vist un gos.", A], ["nina", "Quin? N'hi ha molts.", R], ["nino", "El Bruc, el de l'Anna!", A], ["nina", "Ara ja ho sé!", R]]),
    },
    {
      html: `<h3>Joc: nom, ciutat, animal</h3><p>Trieu una <b>lletra</b>, per exemple la <b>m</b>.</p><p>Cada jugador escriu: un <mark>nom de persona</mark> (Marc), una <mark>ciutat</mark> (Manresa), un <mark>animal</mark> (mico) i una <mark>cosa</mark> (moneda).</p><p>Compte! Els noms propis porten majúscula. Guanyeu un punt per cada paraula ben escrita.</p>`,
      svg: lista("Joc amb la m: Marc, Manresa, mico, moneda", [["Persona: Marc", R], ["Ciutat: Manresa", R], ["Animal: mico", A], ["Cosa: moneda", A]], { titulo: "Amb la lletra m", marca: "✓" }),
    },
  ],
  figura: {
    titulo: "El nom",
    svg: mural("Noms que anomenen; comuns com gos; propis com Bruc amb majúscula; col·lectius com bosc", [["libro", "nom", "paraula que anomena", A], ["perro", "gos", "comú: tots", Ve], ["gato", "Bruc", "propi: majúscula", R], ["arbol", "bosc", "col·lectiu: un grup", N]], "Davant del nom podem posar el, la, un, una"),
  },
  video: V("cnomV", "els noms en català"),
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Busca els noms: «La meva àvia viu a Tarragona».",
      pasos: ["Posa el o la davant de cada paraula: l'àvia, la Tarragona…", "àvia anomena una persona.", "Tarragona anomena una ciutat."],
      resultado: "àvia (comú) i Tarragona (propi)." },
    { enunciado: "«Gata» és comú o propi?",
      pasos: ["Anomena totes les gates o una de sola?", "Serveix per a totes.", "Va amb minúscula."],
      resultado: "és un nom comú." },
    { enunciado: "Escriu bé: «el meu amic pol viu a vic».",
      pasos: ["La frase comença amb majúscula: El.", "Pol és nom propi: majúscula.", "Vic és una ciutat: majúscula."],
      resultado: "El meu amic Pol viu a Vic." },
  ],
  errores: [
    "Escriure els noms propis amb minúscula: és Marta, no marta.",
    "Posar majúscula als noms comuns al mig de la frase: «el Gos» està malament.",
    "Pensar que només les persones tenen nom propi: també ciutats, rius i mascotes.",
    "Creure que un col·lectiu és plural: «ramat» és singular encara que anomeni moltes ovelles.",
  ],
  ejercicios: [
    { q: "Digues tres noms de coses de la teva classe.", sol: "Per exemple: taula, cadira, pissarra, llapis." },
    { q: "«Taula» és un nom? Prova amb «la».", sol: "Sí: la taula." },
    { q: "Escriu el nom propi del teu poble o ciutat.", sol: "Resposta lliure, amb majúscula." },
    { q: "Comú o propi? «riu».", sol: "Comú." },
    { q: "Comú o propi? «Llobregat».", sol: "Propi." },
    { q: "Escriu bé: «la júlia té un gat que es diu nit».", sol: "La Júlia té un gat que es diu Nit." },
    { q: "Grup d'ovelles: …", sol: "Ramat." },
    { q: "Grup d'arbres: …", sol: "Bosc." },
    { q: "Busca els noms: «El nen juga amb la pilota».", sol: "nen i pilota." },
    { q: "Escriu un nom propi d'animal i un de comú.", sol: "Per exemple: Bruc (propi) i gos (comú)." },
  ],
  quiz: [
    { q: "Els noms serveixen per…", o: ["anomenar", "fer accions", "comptar"], a: 0, e: "Anomenen." },
    { q: "Quin és un nom?", o: ["corre", "taula", "bonic"], a: 1, e: "la taula." },
    { q: "«Gos» és un nom…", o: ["comú", "propi", "col·lectiu"], a: 0, e: "Val per a tots els gossos." },
    { q: "«Girona» és un nom…", o: ["comú", "propi", "verb"], a: 1, e: "Una ciutat concreta." },
    { q: "Els noms propis porten…", o: ["majúscula", "minúscula", "número"], a: 0, e: "Majúscula inicial." },
    { q: "Quin és propi?", o: ["ciutat", "riu", "Marta"], a: 2, e: "Marta." },
    { q: "Un grup d'abelles és un…", o: ["ramat", "eixam", "bosc"], a: 1, e: "Eixam." },
    { q: "«Bosc» és un nom…", o: ["individual", "col·lectiu", "propi"], a: 1, e: "Molts arbres." },
    { q: "Quina paraula pot anar davant d'un nom?", o: ["la", "corre", "molt"], a: 0, e: "la casa." },
    { q: "Què està ben escrit?", o: ["el meu gos bruc", "El meu gos Bruc", "el meu Gos bruc"], a: 1, e: "Majúscula al començament i a Bruc." },
  ],
  examen: [
    { q: "Què anomena «escola»?", o: ["un lloc", "una persona", "una acció"], a: 0, e: "Un lloc." },
    { q: "Quin és comú?", o: ["Montserrat", "muntanya", "Pirineus"], a: 1, e: "muntanya." },
    { q: "Grup de músics:", o: ["orquestra", "ramat", "banc"], a: 0, e: "Orquestra." },
    { q: "Noms a «En Pau menja pa»:", o: ["Pau i pa", "menja", "Pau i menja"], a: 0, e: "Pau (propi) i pa (comú)." },
  ],
  feynman: ["Què és un nom i com es troba", "Diferència entre nom comú i propi", "Què és un nom col·lectiu"],
  mapa: mapa("EL NOM", "var(--pri)", [
    ["Anomena", "persones, animals, coses, llocs", A],
    ["Comú", "tots: gos, ciutat", Ve],
    ["Propi", "un: Bruc, Girona", R],
    ["Col·lectiu", "un grup: bosc, ramat", N],
  ], 240),
  tarjetas: [
    ["Què és un nom?", "Una paraula que anomena"],
    ["Truc per trobar-lo", "Posar el, la, un, una davant"],
    ["Nom comú", "Anomena tots: gos"],
    ["Nom propi", "Anomena un: Bruc"],
    ["Com s'escriu el propi?", "Amb majúscula"],
    ["Grup d'ovelles", "Ramat"],
    ["Grup de peixos", "Banc"],
    ["«Girona» és comú o propi?", "Propi"],
  ],
  familias: [
    "Jugueu a «nom, ciutat, animal, cosa» amb una lletra.",
    "Pel carrer, anomeneu coses (comuns) i llegiu cartells amb noms propis.",
    "Reviseu junts que el nom del vostre poble i de la família porta majúscula.",
    "Busqueu noms col·lectius: ramat, eixam, bosc, orquestra.",
  ],
  profesores: PROFCA("Reflexió sobre la llengua: el nom o substantiu, noms comuns i propis, noms individuals i col·lectius, i ús de la majúscula als noms propis", ["Classificar targetes en dues capses: comú i propi.", "Mapa del barri amb noms propis de carrers i places.", "Joc de «nom, ciutat, animal, cosa» per equips."]),
  fuentes: FONTS,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Reconèixer l'article davant del nom", "Escriure noms propis de llocs amb majúscula", "Agrupar noms per famílies i categories", "Fer servir noms precisos per descriure"],
  lectura: { titulo: "La maleta de la Clara", html: `<p>La Clara se'n va de colònies a la muntanya, a prop d'Olot. És la primera vegada que dorm fora de casa tres nits!</p><p>A la seva habitació, prepara la maleta amb la seva mare.</p><p>—A veure: <b>pijama</b>, <b>raspall</b> de dents, <b>tovallola</b>, <b>samarretes</b>, <b>pantalons</b> i <b>mitjons</b> —diu la mare.</p><p>—I la <b>llanterna</b>! —diu la Clara—. A la nit, al bosc, no hi ha <b>fanals</b>.</p><p>La Clara també hi posa una <b>llibreta</b>, uns <b>colors</b> i un <b>conte</b>.</p><p>—I en Tobi? —pregunta la Clara, mirant el seu <b>ós</b> de peluix.</p><p>La mare somriu.</p><p>—En Tobi també pot venir. Segur que t'ajuda a dormir.</p><p>L'endemà, a l'<b>autocar</b>, la Clara seu al costat del seu amic Biel. Pel camí veuen <b>prats</b>, <b>vaques</b>, <b>rius</b> i un <b>volcà</b> antic.</p><p>Quan arriben a la <b>casa de colònies</b>, la Clara obre la maleta. A dalt de tot, en Tobi la mira amb els seus ulls de botó.</p><p>—Ja som aquí, Tobi! Serà una aventura!</p>` },
  tras: {
    "Un truc per trobar-los": [
      ["L'article: el company del nom", `<p>Davant del nom sovint hi ha una paraula petita: l'<mark>article</mark>. Ens ajuda a trobar els noms.</p><ul><li><b>el</b>: el gat, el llibre (masculí singular)</li><li><b>la</b>: la casa, la pilota (femení singular)</li><li><b>els</b>: els gats, els llibres (masculí plural)</li><li><b>les</b>: les cases, les pilotes (femení plural)</li><li><b>l'</b>: l'arbre, l'àvia (davant de vocal o h)</li></ul><p>També hi ha els articles <b>un</b>, <b>una</b>, <b>uns</b>, <b>unes</b>: un gos, una flor, uns nens, unes nenes.</p><p>I amb els noms de persona, en català diem <b>en</b>, <b>na</b> o <b>l'</b>: <i>en Pau</i>, <i>la Marta</i>, <i>l'Anna</i>.</p><p>Truc: si davant d'una paraula pots posar <b>el</b> o <b>la</b>, segurament és un nom.</p><p>L'article també ens diu si el nom és masculí o femení i si és singular o plural. Per exemple, a <i>les pilotes</i> l'article <b>les</b> ens avisa que són moltes i que la paraula és femenina.</p><p><b>Activitat</b>: posa l'article a aquestes paraules: arbre, finestra, ocells, mans.</p>`,
        L6.filas("Articles", [["el", "el gat", cAZ], ["la", "la casa", cRO], ["els / les", "plural", cVE], ["l'", "l'arbre", cNA]])],
    ],
    "Noms propis": [
      ["Noms propis de llocs", `<p>Els noms propis no només són de persones. També els <mark>llocs</mark> tenen nom propi, i s'escriuen amb <b>majúscula</b>:</p><ul><li><b>Pobles i ciutats</b>: Olot, Tarragona, Palma, València.</li><li><b>Països</b>: Catalunya, França, Itàlia, el Marroc.</li><li><b>Rius</b>: l'Ebre, el Llobregat, el Ter.</li><li><b>Muntanyes</b>: el Montseny, el Canigó, Montserrat.</li><li><b>Mars</b>: el Mediterrani.</li><li><b>Carrers i places</b>: carrer Major, plaça de la Vila.</li></ul><p>Fixa't: amb els rius i les muntanyes, l'article va amb minúscula i el nom amb majúscula: <i>el Montseny</i>.</p><p>També tenen nom propi els <b>llibres</b> i les <b>pel·lícules</b>: <i>La Caputxeta Vermella</i>.</p><p>Els noms dels habitants d'un lloc, en canvi, van amb minúscula: els <i>olotins</i>, les <i>tarragonines</i>, els <i>mallorquins</i>.</p><p><b>Activitat</b>: escriu el nom del teu poble, del riu més proper i d'una muntanya que coneguis.</p>`,
        H6.rueda("Llocs", "LLOCS", [["Olot", cRO], ["l'Ebre", cAZ], ["Canigó", cVE], ["França", cNA]])],
    ],
    "Noms individuals i col·lectius": [
      ["Famílies de noms", `<p>Podem <mark>agrupar</mark> els noms per categories, com si fossin calaixos:</p><ul><li><b>Fruites</b>: poma, pera, plàtan, préssec.</li><li><b>Animals</b>: gos, gat, cavall, ocell.</li><li><b>Roba</b>: samarreta, pantalons, mitjons, jaqueta.</li><li><b>Mobles</b>: taula, cadira, llit, armari.</li><li><b>Joguines</b>: pilota, nina, baldufa, trencaclosques.</li></ul><p>La paraula que les agrupa totes és un <b>nom general</b>: «fruita» agrupa poma, pera i plàtan.</p><p>Els noms generals ens ajuden a no repetir: «Al mercat he comprat pomes, peres i plàtans. Les <b>fruites</b> eren boníssimes.»</p><p>També hi ha <b>famílies de paraules</b>: paraules que s'assemblen perquè venen d'una mateixa: <i>pa</i>, <i>paner</i>, <i>panet</i>, <i>panadera</i>.</p><p><b>Activitat</b>: juga a «Digues cinc…»: digues cinc animals, cinc fruites, cinc colors.</p>`,
        L6.filas("Grups", [["fruites", "poma, pera", cVE], ["animals", "gos, gat", cMO], ["roba", "mitjons", cAZ], ["mobles", "taula, llit", cNA]]),
        ["NJSDfeWP9Wc", "El Pot Petit - Soc un mico", "El Pot Petit", 12062978]],
    ],
    "Per a què serveix?": [
      ["El nom precís", `<p>Per explicar-nos bé, és millor fer servir el <mark>nom precís</mark> (exacte) que una paraula general com «cosa».</p><ul><li>«Dona'm aquesta <i>cosa</i>.» ✗ → «Dona'm aquesta <b>goma</b>.» ✓</li><li>«He vist un <i>ocell</i>.» → «He vist una <b>oreneta</b>.» (encara millor!)</li><li>«M'he menjat una <i>fruita</i>.» → «M'he menjat una <b>maduixa</b>.»</li><li>«Al bosc hi ha <i>arbres</i>.» → «Al bosc hi ha <b>pins</b> i <b>alzines</b>.»</li></ul><p>Els escriptors trien molt bé els noms. Així el lector s'imagina exactament el que passa.</p><p>Si no saps el nom d'una cosa, pots preguntar: «Com es diu això?» o buscar-ho al diccionari.</p><p>Com més noms coneixem, millor podem explicar el que veiem, el que sentim i el que imaginem. Llegir molts contes és la millor manera d'aprendre noms nous!</p><p><b>Activitat</b>: canvia «cosa» per un nom precís a cinc frases.</p>`,
        H6.flujo("Precís", ["cosa|goma", "ocell|oreneta", "fruita|maduixa", "arbre|pi"], cAZ)],
    ],
  },
  final: [
    ["Paraules compostes", `<p>Algunes paraules es fan <mark>ajuntant dues paraules</mark>. Són les paraules compostes:</p><ul><li><b>para</b> + <b>sol</b> = parasol</li><li><b>para</b> + <b>caigudes</b> = paracaigudes</li><li><b>gira</b> + <b>sol</b> = gira-sol</li><li><b>escura</b> + <b>dents</b> = escuradents</li><li><b>trenca</b> + <b>closques</b> = trencaclosques</li><li><b>guarda</b> + <b>roba</b> = guarda-roba</li><li><b>rentar</b> + <b>plats</b> = rentaplats</li></ul><p>Algunes s'escriuen juntes i altres amb un guionet (-). Si dubtes, mira el diccionari!</p><p>Les paraules compostes són noms, i porten article: <i>el</i> paraigua, <i>el</i> trencaclosques.</p><p>Podem inventar-ne de divertides: un «menjagaletes», un «saltabasses»…</p><p><b>Activitat</b>: inventa tres paraules compostes i explica què serien.</p>`,
      H6.dos("Compostes", ["PARAULA 1", ["para", "trenca", "renta"], cNA], ["PARAULA 2", ["sol", "closques", "plats"], cAZ])],
    ["Repàs: la maleta de la Clara", `<p>Repassem amb la <mark>lectura</mark>:</p><ul><li>Noms propis de persona: <b>Clara</b>, <b>Biel</b>, <b>Tobi</b>.</li><li>Nom propi de lloc: <b>Olot</b>.</li><li>Noms comuns de roba: <b>samarretes</b>, <b>pantalons</b>, <b>mitjons</b>, pijama.</li><li>Altres objectes: <b>raspall</b>, <b>tovallola</b>, <b>llanterna</b>, <b>llibreta</b>.</li><li>Paisatge: <b>prats</b>, <b>rius</b>, <b>volcà</b>, bosc.</li><li>Davant dels noms de persona diem <b>la</b> Clara, <b>en</b> Biel, <b>en</b> Tobi.</li></ul><p>A la zona d'Olot hi ha molts volcans antics, que ja no treuen foc. És la Garrotxa!</p><p><b>Activitat</b>: fes la llista del que posaries a la maleta per anar de colònies.</p>`,
      L6.filas("Maleta", [["persones", "Clara, Biel", cRO], ["lloc", "Olot", cNA], ["roba", "mitjons", cAZ], ["paisatge", "volcà", cVE]])],
  ],
  ejemplos: [
    ["Posa l'article: arbre.", ["Comença per vocal."], "L'arbre."],
    ["Quin nom general agrupa poma, pera i plàtan?", ["Totes es mengen i surten dels arbres."], "Fruites."],
  ],
  errores: ["Escriure els noms de pobles o rius amb minúscula: «olot», «l'ebre».", "Fer servir «cosa» en lloc del nom precís."],
  ejercicios: [
    ["b", "Posa l'article: casa.", "La casa."],
    ["b", "Escriu bé: el riu ter.", "El riu Ter."],
    ["b", "Digues tres animals.", "Gos, gat, cavall…"],
    ["b", "Quina paraula fan «para» + «sol»?", "Parasol."],
    ["b", "Davant de Pau diem…", "En Pau."],
    ["m", "Posa l'article: àvia, ocells, finestres.", "L'àvia, els ocells, les finestres."],
    ["m", "Quin nom general agrupa taula, cadira, llit?", "Mobles."],
    ["m", "Canvia «cosa»: «Dona'm la cosa per escriure.»", "Dona'm el llapis."],
    ["m", "Digues dos noms de muntanyes.", "Montseny, Canigó…"],
    ["m", "Fes la paraula composta: trenca + closques.", "Trencaclosques."],
    ["a", "A la lectura, com es diu l'ós de peluix?", "Tobi."],
    ["a", "Copia tres noms de roba de la lectura.", "Samarretes, pantalons, mitjons."],
    ["a", "Per què la Clara vol la llanterna?", "Perquè al bosc no hi ha fanals."],
    ["a", "Inventa una paraula composta i explica-la.", "Resposta oberta."],
  ],
  quiz: [
    ["Davant d'«arbre» diem…", ["l'", "la", "el"], "Article."],
    ["S'escriu amb majúscula…", ["el Montseny", "la muntanya", "el riu"], "Llocs."],
    ["Agrupa poma i pera:", ["fruites", "roba", "mobles"], "Grups."],
    ["Més precís que «ocell»:", ["oreneta", "animal", "cosa"], "Precís."],
    ["Paraula composta:", ["rentaplats", "plats", "rentar"], "Compostes."],
  ],
  examen: [
    ["A la lectura, a prop de quin poble van de colònies?", ["Olot", "Lleida", "Reus"], "Lectura."],
    ["Al costat de qui seu la Clara a l'autocar?", ["en Biel", "en Tobi", "la mare"], "Repàs."],
  ],
  tarjetas: [
    ["Articles", "el, la, els, les, l'; un, una; en Pau, la Marta."],
    ["Llocs", "Olot, l'Ebre, el Montseny: majúscula."],
  ],
  glosario: [
    ["Article", "Paraula petita que va davant del nom."],
    ["Nom propi", "Nom d'una persona, un lloc o un animal concret."],
    ["Nom general", "Nom que agrupa altres noms."],
    ["Família de paraules", "Paraules que venen d'una mateixa."],
    ["Precís", "Exacte."],
    ["Paraula composta", "Paraula feta amb dues paraules."],
    ["Colònies", "Estada de diversos dies fora de casa amb l'escola."],
    ["Llanterna", "Llum petit que es porta a la mà."],
    ["Volcà", "Muntanya per on pot sortir foc de la terra."],
    ["Tovallola", "Roba per eixugar-se."],
  ],
  situacion: {
    titulo: "Preparem les colònies",
    reto: "La classe prepara un viatge imaginari i fa la llista de la maleta, el mapa amb els llocs i un diari.",
    pasos: ["Triar on anem i buscar el nom de pobles, rius i muntanyes.", "Fer la llista de la maleta agrupada per categories.", "Fer servir noms precisos i articles correctes.", "Escriure una pàgina de diari del primer dia."],
    producto: "Una llista de maleta, un mapa i una pàgina de diari.",
    evaluacion: ["Fa servir bé els articles.", "Escriu noms propis de llocs amb majúscula.", "Agrupa noms per categories.", "Tria noms precisos."],
  },
});
