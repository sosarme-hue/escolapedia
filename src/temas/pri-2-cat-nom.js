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
      html: `<h3>Paraules que anomenen</h3><p>Tot el que ens envolta té un <mark>nom</mark>. Aquestes paraules també es diuen <b>substantius</b>.</p><p>Anomenen <b>persones</b> (nena, avi), <b>animals</b> (gat, peix), <b>coses</b> (taula, llibre) i <b>llocs</b> (casa, escola).</p><p>Si ho pots assenyalar o imaginar, segur que té un nom!</p>`,
      svg: dibujos("Una nena, un gat, un llibre i una escola: persona, animal, cosa i lloc", [["nina", "nena", R], ["gato", "gat", A], ["libro", "llibre", Ve], ["escuela", "escola", N]], { titulo: "Persona · animal · cosa · lloc", nota: "Tots són noms" }),
      video: V("cnomV", "els noms en català"),
    },
    {
      html: `<h3>Un truc per trobar-los</h3><p>Davant d'un nom podem posar <mark>el, la, un o una</mark>.</p><p><i>el</i> sol, <i>la</i> lluna, <i>un</i> arbre, <i>una</i> flor. Funciona!</p><p>Amb altres paraules no funciona: «el corre» o «la bonic» sonen malament. Així sabem que <i>corre</i> i <i>bonic</i> no són noms. Prova-ho tu amb <i>llapis</i>, <i>salta</i> i <i>núvol</i>.</p>`,
      svg: frase("El sol, la lluna, un arbre, una flor", [["el", "var(--muted)"], ["sol", R], ["la", "var(--muted)"], ["lluna", R], ["/"], ["un", "var(--muted)"], ["arbre", R], ["una", "var(--muted)"], ["flor", R]], { titulo: "el, la, un, una + nom", nota: "Si encaixa, és un nom", fs: 22 }),
    },
    {
      html: `<h3>Noms comuns</h3><p>Els <mark>noms comuns</mark> serveixen per anomenar <b>tots</b> els d'una mateixa classe.</p><p><i>Gos</i> val per a qualsevol gos: gran, petit, blanc o negre. <i>Ciutat</i> val per a qualsevol ciutat. <i>Nen</i>, per a qualsevol nen.</p><p>S'escriuen amb <b>minúscula</b>, tret que comencin la frase.</p>`,
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
      video: V("cnomB"),
    },
    {
      html: `<h3>Els noms a les frases</h3><p>Gairebé a totes les frases hi ha <mark>noms</mark>. Ens diuen <b>de qui</b> o <b>de què</b> parlem.</p><p>«La <b>Marta</b> menja una <b>poma</b> al <b>parc</b>.» Aquí hi ha tres noms: Marta (propi), poma i parc (comuns).</p><p>Pinta de colors els noms d'un conte. Veuràs quants n'hi ha!</p>`,
      svg: frase("La Marta menja una poma al parc: Marta, poma i parc són noms", [["La", K], ["Marta", R], ["menja", K], ["/"], ["una", K], ["poma", A], ["al", K], ["parc", A]], { titulo: "Busca els noms", nota: "Vermell: propi · blau: comuns", fs: 22 }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Sense noms <mark>no sabríem de què parlem</mark>. «Menja una al» no s'entén.</p><p>Els noms propis ens ajuden a no confondre'ns: hi ha molts gossos, però només un <i>Bruc</i>.</p><p>Quan escrius una carta, un conte o una adreça, la majúscula dels noms propis és molt important.</p>`,
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
