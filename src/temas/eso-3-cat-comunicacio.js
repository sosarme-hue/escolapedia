// Llengua Catalana i Literatura 3r d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "3-eso",
  titulo: "La comunicació i els textos",
  minutos: 50,
  objetivos: ["Distingir la comunicació oral de l'escrita i la verbal de la no verbal", "Classificar els textos segons l'àmbit d'ús i la intenció", "Reconèixer els gèneres textuals més habituals"],
  claves: ["comunicació", "signe", "comunicació verbal", "comunicació no verbal", "oral", "escrit", "àmbit d'ús", "tipologia textual", "gènere textual", "intenció comunicativa"],
  pregunta: {
    texto: "Un semàfor en vermell, un emoji 😂 i la frase «Atura't!» comuniquen alguna cosa. Tots tres són llenguatge?",
    respuesta: "Tots tres són <mark>signes</mark> que transmeten informació, però només «Atura't!» és <b>comunicació verbal</b>, perquè fa servir paraules. El semàfor i l'emoji són signes <b>no verbals</b>: colors, imatges, gestos. Ens comuniquem constantment combinant tots dos tipus.",
  },
  bloques: [
    {
      html: `<h3>Comunicar-se amb signes</h3><p>Comunicar-se és <b>transmetre informació</b> d'un emissor a un receptor. Per fer-ho fem servir <mark>signes</mark>: elements que representen una altra cosa. Una paraula, un senyal de trànsit, un gest o una icona són signes. Quan el signe és una paraula parlem de <b>comunicació verbal</b>; quan és un gest, un color, una imatge o un so, de <b>comunicació no verbal</b>.</p>`,
      svg: L.filas("Signes verbals i no verbals", [
        ["Verbal", "paraules: «Atura't!»", "var(--pen)"],
        ["Visual", "semàfor, icones, emojis", "var(--leaf)"],
        ["Gestual", "somriure, encongir les espatlles", "var(--red)"],
        ["Sonor", "timbre, sirena, aplaudiment", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Comunicació oral i escrita</h3><p>La llengua es pot fer servir de manera <b>oral</b> o <b>escrita</b>. L'oral és immediata i espontània: els interlocutors són presents, poden corregir-se i s'ajuden de l'entonació i els gestos. L'escrita és <mark>més planificada</mark> i perdurable: es pot revisar, no veiem el lector i, per això, cal ser més precisos i ordenats.</p>`,
      svg: L.tabla("Diferències entre l'oral i l'escrit", ["Oral", "Escrit"], [
        ["espontani", "planificat"], ["efímer", "perdurable"], ["amb gestos", "amb puntuació"], ["es corregeix", "es revisa"],
      ]),
    },
    {
      html: `<h3>Els àmbits d'ús</h3><p>Els textos apareixen en situacions diferents, que anomenem <b>àmbits d'ús</b>. En l'àmbit <b>personal</b> hi ha els missatges, les converses i els diaris; en l'<b>acadèmic</b>, els apunts, els exàmens i els treballs; en el <b>social</b>, els avisos, les instàncies i les normes; i en el dels <b>mitjans de comunicació</b>, les notícies, els reportatges i la publicitat. Cada àmbit demana un <mark>registre</mark> diferent.</p>`,
      svg: L.filas("Àmbits d'ús i exemples de textos", [
        ["Personal", "xat, carta, diari", "var(--red)"],
        ["Acadèmic", "apunts, examen, treball", "var(--pen)"],
        ["Social", "avís, instància, normes", "var(--leaf)"],
        ["Mitjans", "notícia, anunci, crònica", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Les tipologies textuals</h3><p>Segons la <mark>intenció</mark> de l'emissor, classifiquem els textos en tipologies: <b>narratius</b> (expliquen fets), <b>descriptius</b> (diuen com és algú o alguna cosa), <b>dialogats</b> (reprodueixen converses), <b>expositius</b> (informen i expliquen), <b>argumentatius</b> (volen convèncer) i <b>instructius</b> (diuen com fer una cosa). Pocs textos són purs: una novel·la barreja narració, descripció i diàleg.</p>`,
      svg: L.filas("Tipologia segons la intenció", [
        ["Narrar", "explicar fets", "var(--pen)"],
        ["Descriure", "com és una cosa", "var(--leaf)"],
        ["Exposar", "explicar un tema", "var(--inf)"],
        ["Argumentar", "convèncer", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Els gèneres textuals</h3><p>Els <b>gèneres textuals</b> són els models concrets de text que la societat fa servir i reconeix: la recepta, la notícia, el conte, el currículum, el correu electrònic, el missatge de xat o el tutorial. Cada gènere té una <mark>estructura</mark> i un llenguatge propis que el lector espera trobar. Conèixer-los ens ajuda a entendre millor i a escriure com cal.</p>`,
      svg: L.filas("Gèneres i tipologia dominant", [
        ["Recepta", "instructiva", "var(--leaf)"],
        ["Notícia", "narrativa i expositiva", "var(--pen)"],
        ["Article d'opinió", "argumentativa", "var(--red)"],
        ["Entrevista", "dialogada", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Com classifiquem els textos",
    svg: L.columnas("Tres criteris per classificar els textos", [
      ["segons el canal", "ORAL / ESCRIT", ["conversa, discurs", "carta, notícia"], "var(--pen)"],
      ["segons l'àmbit", "ON?", ["personal, acadèmic,", "social, mitjans"], "var(--leaf)"],
      ["segons la intenció", "PER A QUÈ?", ["narrar, descriure,", "exposar, argumentar"], "var(--red)"],
    ]),
  },
  video: { id: "KujFJsEOPTs", titulo: "¿Qué es la comunicación? Proceso y elementos de la comunicación", canal: "Profe Marilin", vistas: 1774369, megusta: 0, busqueda: "elements de la comunicació" },
  quiz: [
    { q: "Un senyal de «Prohibit aparcar» amb només un dibuix és comunicació…", o: ["no verbal", "verbal oral", "verbal escrita"], a: 0, e: "No fa servir paraules." },
    { q: "Quina característica és pròpia de l'escrit?", o: ["És més planificat", "És espontani", "Fa servir l'entonació"], a: 0, e: "L'escrit es pot revisar." },
    { q: "Uns apunts de classe pertanyen a l'àmbit…", o: ["acadèmic", "personal", "dels mitjans"], a: 0, e: "És el món de l'estudi." },
    { q: "Un text que vol convèncer és…", o: ["argumentatiu", "descriptiu", "narratiu"], a: 0, e: "Defensa una opinió." },
    { q: "La recepta de cuina és un gènere…", o: ["instructiu", "argumentatiu", "dialogat"], a: 0, e: "Diu com fer una cosa." },
  ],
  examen: [
    { q: "Un gest d'aprovació amb el polze és un signe…", o: ["gestual", "verbal", "sonor"], a: 0, e: "Es fa amb el cos." },
    { q: "Una instància a l'ajuntament és de l'àmbit…", o: ["social", "personal", "literari"], a: 0, e: "Relació amb les institucions." },
    { q: "Una entrevista és un text…", o: ["dialogat", "instructiu", "descriptiu"], a: 0, e: "Hi ha preguntes i respostes." },
  ],
  feynman: ["Què és un signe i quins tipus n'hi ha", "Tres diferències entre l'oral i l'escrit", "Els quatre àmbits d'ús amb exemples", "Diferència entre tipologia i gènere textual"],
  mapa: mapa("ELS TEXTOS", "var(--eso)", [
    ["Signes", "verbals i no verbals", "var(--pen)"],
    ["Canal", "oral · escrit", "var(--leaf)"],
    ["Àmbits", "personal · acadèmic…", "var(--red)"],
    ["Intenció", "narrar · exposar…", "var(--inf)"],
  ]),
  tarjetas: [
    ["Signe", "Element que representa una altra cosa: una paraula, un gest, un color."],
    ["Comunicació no verbal", "La que fa servir gestos, imatges, colors o sons en lloc de paraules."],
    ["Àmbit d'ús", "Situació social on apareix un text: personal, acadèmic, social, mitjans."],
    ["Tipologia textual", "Classificació segons la intenció: narrar, descriure, exposar, argumentar…"],
    ["Gènere textual", "Model concret de text: recepta, notícia, conte, currículum…"],
  ],
  familias: ["Feu una llista dels textos que llegeix i escriu en un dia i classifiqueu-los per àmbits.", "Busqueu a casa tres gèneres textuals (un prospecte, una factura, una recepta) i comenteu-ne l'estructura.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Comunicació: la situació comunicativa, oralitat i escriptura, àmbits d'ús, tipologies i gèneres textuals (RD 217/2022, Llengua Catalana i Literatura 3r ESO; currículums autonòmics de Catalunya, Illes Balears i Comunitat Valenciana).",
    ideas: ["Transcriure una conversa real i comparar-la amb un text escrit sobre el mateix tema.", "Fer un mural de gèneres textuals de l'àmbit social del barri.", "Jugar a endevinar la tipologia d'un fragment llegit en veu alta."],
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
  minutos: 65,
  objetivos: ["Analitzar les característiques d'un text oral espontani", "Reconèixer l'estructura dels gèneres digitals"],
  bloques: [
    { tras: "Comunicar-se amb signes", html: `<h3>Els elements de la comunicació, en un exemple</h3><p>Pensa en un missatge al grup de classe: «Demà l'examen és a les 9!». L'<b>emissor</b> és qui l'escriu; els <b>receptors</b>, els companys del grup; el <b>missatge</b>, la informació de l'hora; el <b>canal</b>, la xarxa i la pantalla; el <b>codi</b>, la llengua catalana escrita; i el <b>context</b>, la setmana d'exàmens.</p><p>Si algú respon «D'acord!», hi ha <mark>retroacció</mark>: el receptor passa a ser emissor. I si el missatge arriba tard perquè no hi ha cobertura, o si algú no entén una abreviatura, hi ha <b>soroll</b>: qualsevol cosa que dificulta la comunicació. Quan escrivim, convé pensar en tots aquests elements per evitar malentesos.</p>` },
    { tras: "Comunicació oral i escrita", html: `<h3>Com és la llengua oral espontània</h3><p>Si transcrivim una conversa real veurem coses que en un text escrit corregiríem: frases <b>inacabades</b> («És que jo… bé, ja ho saps»), <b>repeticions</b>, paraules <b>de farciment</b> («o sigui», «doncs», «eh?»), <b>canvis de tema</b> i moltes <mark>el·lipsis</mark>, perquè el context ja ho explica tot («Me'l passes?» mentre assenyalem el llapis).</p><p>Això no vol dir que l'oral sigui pitjor: és diferent. També hi ha textos orals <b>formals</b> i planificats, com una exposició a classe, una conferència o un informatiu de la ràdio; en aquests casos, l'orador prepara un guió i cuida el vocabulari. Igualment, hi ha textos escrits molt pròxims a l'oral, com els xats.</p>` },
    { tras: "Els àmbits d'ús", html: `<h3>Els gèneres digitals</h3><p>Internet ha creat gèneres nous o n'ha transformat d'antics: el <b>xat</b>, el <b>correu electrònic</b>, la <b>publicació a les xarxes</b>, el <b>fòrum</b>, el <b>blog</b>, el <b>pòdcast</b> o el <b>vídeo tutorial</b>. Són textos <mark>multimodals</mark>: combinen paraules, imatges, sons, enllaços i emojis.</p>${L.tb(["Gènere", "Característiques"], [["Xat", "frases curtes, emojis, molt proper a l'oral"], ["Correu electrònic", "assumpte, salutació, cos i comiat; pot ser formal"], ["Publicació a la xarxa", "text breu, imatge, etiquetes"], ["Pòdcast", "text oral planificat, sovint amb música"]])}<p>Encara que siguin informals, també cal adaptar-los: no escrius igual al grup d'amics que a un professor.</p>` },
    { tras: "Les tipologies textuals", html: `<h3>Com identificar la tipologia</h3><p>Per saber de quina tipologia és un text, pregunta't <mark>per a què s'ha escrit</mark> i busca'n les marques lingüístiques:</p><ul><li><b>Narratiu</b>: verbs d'acció en passat, marcadors temporals («després», «aquell dia»).</li><li><b>Descriptiu</b>: adjectius, verbs com «ser», «tenir», «semblar», comparacions.</li><li><b>Expositiu</b>: present atemporal, vocabulari tècnic, definicions i exemples.</li><li><b>Argumentatiu</b>: opinions («crec que»), arguments i connectors com «per tant» o «en canvi».</li><li><b>Instructiu</b>: imperatius o infinitius, passos numerats.</li><li><b>Dialogat</b>: torns de paraula, guions o noms dels interlocutors.</li></ul><p>Quan un text en barreja diverses, parlem de la tipologia <b>dominant</b>.</p>` },
    { tras: "Els gèneres textuals", html: `<h3>Llengua i comunicació respectuosa</h3><p>Comunicar-se bé no és només ser correcte: també és ser <b>respectuós</b>. A les xarxes, la distància i l'anonimat fan que de vegades es digui allò que no es diria cara a cara. Abans de publicar, pregunta't si el missatge és <mark>veritat, necessari i amable</mark>.</p><p>També és important fer servir un llenguatge que no exclogui ningú: evitar els estereotips, els insults disfressats de broma i les expressions que menyspreen per l'origen, el gènere o l'aspecte físic. I, com que el català conviu amb altres llengües, recorda que cada persona té dret a fer servir la seva llengua i que conèixer-ne diverses és una riquesa. Una bona comunicació té en compte el receptor.</p>` },
  ],
  videos: [
    ["Comunicació oral i escrita", L.vid("_e711t3LshI", "Textos conversacionals | Anàlisi de text | 1r ESO", "3CatCampus", 60412)],
    ["Les tipologies textuals", L.vid("T632IpYaVwo", "Com usar els connectors en català: trucs i exemples", "Parlem d'escriure en català", 88248)],
  ],
  ejemplos: [
    ["Identifica els elements de la comunicació: un professor escriu a la pissarra «Examen dijous».", ["Emissor: el professor. Receptor: l'alumnat.", "Missatge: la data de l'examen. Codi: el català escrit.", "Canal: la pissarra (visual). Context: l'aula."], "emissor professor, receptor alumnat, canal pissarra, codi català escrit."],
    ["Classifica el text: «Barregeu la farina amb els ous. Afegiu-hi la llet a poc a poc.»", ["Intenció: explicar com fer una cosa.", "Marques: imperatius («barregeu», «afegiu-hi») i ordre de passos.", "Gènere: la recepta."], "text instructiu (gènere: recepta)."],
    ["Transforma en un text escrit formal: «Doncs res, que el bus, o sigui, no ha vingut, eh, i hem fet tard.»", ["Eliminar les paraules de farciment («doncs», «o sigui», «eh»).", "Ordenar la idea: causa i conseqüència.", "Fer servir un connector adequat."], "«Hem arribat tard perquè l'autobús no ha passat.»"],
  ],
  errores: [
    "Pensar que només comuniquem amb paraules.",
    "Confondre tipologia (intenció) i gènere (model concret de text).",
    "Escriure un correu formal com si fos un xat.",
    "Creure que tot l'oral és informal: hi ha exposicions i conferències formals.",
    "Classificar un text per una sola frase en lloc de mirar la intenció global.",
  ],
  ejercicios: [
    ["Escriu dos signes no verbals que trobes a l'institut.", "Per exemple: el timbre (sonor) i la icona de sortida d'emergència (visual)."],
    ["Escriu dues diferències entre l'oral i l'escrit.", "L'oral és espontani i efímer; l'escrit és planificat i perdurable."],
    ["A quin àmbit pertany una notícia de la ràdio?", "Al dels mitjans de comunicació."],
    ["Quina tipologia predomina en un article d'opinió?", "L'argumentativa."],
    ["Quina tipologia predomina en un prospecte de medicament?", "L'expositiva i la instructiva (explica què és i com s'ha de prendre)."],
    ["Escriu tres gèneres de l'àmbit acadèmic.", "Per exemple: l'examen, el treball de recerca i el resum."],
    ["Què és el soroll en la comunicació?", "Tot allò que dificulta que el missatge arribi bé: mala cobertura, lletra il·legible, paraules desconegudes."],
    ["Escriu tres paraules de farciment típiques de l'oral espontani.", "«O sigui», «doncs», «eh?»."],
    ["Escriu l'assumpte d'un correu a la tutora per demanar una tutoria.", "Per exemple: «Sol·licitud de tutoria»."],
    ["Per què diem que un vídeo tutorial és multimodal?", "Perquè combina paraules, imatges i sons."],
  ],
  quiz: [
    ["Quan el receptor respon, hi ha…", ["retroacció", "soroll", "el·lipsi"], 0, "Passa a ser emissor."],
    ["«O sigui» i «doncs» a l'oral són…", ["paraules de farciment", "connectors formals", "signes visuals"], 0, "Típiques de l'espontani."],
    ["Un text que combina paraules, imatges i sons és…", ["multimodal", "oral", "argumentatiu"], 0, "Com un vídeo."],
    ["Els imperatius i els passos numerats són marques del text…", ["instructiu", "narratiu", "descriptiu"], 0, "Diu com fer una cosa."],
    ["Una conferència és un text oral…", ["formal i planificat", "espontani", "escrit"], 0, "Es prepara amb un guió."],
  ],
  tarjetas: [
    ["Retroacció", "Resposta del receptor que mostra si ha entès el missatge."],
    ["Text multimodal", "El que combina paraules, imatges, sons o enllaços."],
    ["Tipologia dominant", "La que predomina quan un text en barreja diverses."],
  ],
});
