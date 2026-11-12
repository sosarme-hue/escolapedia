// Llengua Catalana 1r de Primària: parlar i escoltar. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, vid } = require("./_peque");
const { FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "1-primaria",
  titulo: "Parlar i escoltar",
  minutos: 20,
  objetivos: ["Escoltar amb atenció qui parla", "Respectar el torn de paraula", "Parlar clar, en ordre i amb amabilitat"],
  claves: ["escoltar", "torn de paraula", "veu", "si us plau", "gràcies", "preguntar"],
  pregunta: {
    texto: "Què passa a classe si tothom parla alhora? S'entén alguna cosa?",
    respuesta: "No s'entén res! Per conversar cal <mark>escoltar</mark> i <mark>esperar el torn</mark>. Així tots podem parlar i entendre'ns.",
  },
  bloques: [
    {
      html: `<h3>Parlem per comunicar-nos</h3><p>Parlem per <mark>explicar</mark> el que pensem, el que sentim i el que necessitem.</p><p>Quan parlem amb algú, fem una <b>conversa</b>. Un parla i l'altre escolta. Després canvien.</p><p>És com un joc de pilota: la paraula va de l'un a l'altre. Si ningú no la passa, el joc s'atura.</p>`,
      svg: charla("Una conversa: un nen pregunta com va i una nena respon que molt bé", [["nino", "Hola! Com estàs?", A], ["nina", "Molt bé! I tu?", R]]),
    },
    {
      html: `<h3>Escoltar amb atenció</h3><p>Escoltar no és només sentir. És <mark>parar atenció</mark>.</p><p>Per escoltar bé, <b>mirem</b> qui parla. Estem <b>callats</b> i pensem en el que diu.</p><p>Si ens distraiem, ens perdem coses importants. Quan algú et parla, deixa el que estàs fent. Així li demostres que t'importa!</p>`,
      svg: dibujos("Per escoltar: mirar amb els ulls, sentir amb atenció i estar callat", [["ojo", "miro", A], ["oido", "escolto", R], ["boca", "callo", V]], { titulo: "Per escoltar bé…" }),
      video: vid("BYHGuVGqAIk", "Els cinc sentits per a nens en català", "Smile and Learn - Català", 33385, 100),
    },
    {
      html: `<h3>El torn de paraula</h3><p>A classe som molts. Perquè tots puguem parlar, fem servir el <mark>torn de paraula</mark>.</p><p>Si volem dir alguna cosa, <b>aixequem la mà</b> i esperem.</p><p>Quan ens toca, parlem. Mentrestant, escoltem els altres. No interrompem ningú. Així ningú no es queda sense dir el que pensa.</p>`,
      svg: lista("El torn de paraula: aixeco la mà, espero i parlo quan em toca", [["Aixeco la mà", A], ["Espero el meu torn", R], ["Parlo quan em toca", V]], { titulo: "Demano la paraula", marca: "n" }),
    },
    {
      html: `<h3>Una veu clara</h3><p>Perquè ens entenguin, parlem <mark>clar i a poc a poc</mark>.</p><p>La veu no ha de ser molt baixa, com una formigueta. Tampoc molt alta, com un lleó.</p><p>A classe fem servir una veu <b>tranquil·la</b>. Al pati podem parlar més fort. I a la biblioteca parlem molt fluix. Cada lloc té la seva veu!</p>`,
      svg: dibujos("Veu molt baixa com una formiga, veu clara com un nen i veu molt alta com un lleó", [["hormiga", "molt baixa", R], ["nino", "clara!", V], ["leon", "molt alta", R]], { titulo: "Quina veu fem servir a classe?" }),
    },
    {
      html: `<h3>Paraules amables</h3><p>Hi ha paraules que fan que tots ens sentim bé. Són les <mark>paraules amables</mark>.</p><p><b>Hola</b> i <b>adeu</b> quan arribem i quan marxem. <b>Si us plau</b> quan demanem alguna cosa. <b>Gràcies</b> quan ens ajuden. <b>Perdó</b> si ens equivoquem.</p><p>Són petites, però molt poderoses. Fes-les servir cada dia!</p>`,
      svg: frase("Paraules amables: hola, si us plau, gràcies, perdó i adeu", [["hola", A], ["si us plau", R], ["/"], ["gràcies", V], ["perdó", N], ["/"], ["adeu", A]], { titulo: "Paraules amables", fs: 22 }),
    },
    {
      html: `<h3>Explicar una cosa en ordre</h3><p>Quan expliquem el que ens ha passat, ho fem <mark>en ordre</mark>.</p><p>Fem servir paraules que ajuden: <b>primer</b>, <b>després</b> i <b>al final</b>.</p><p>«Primer vaig anar al parc. Després vaig jugar a pilota. Al final vaig tornar a casa». Així qui escolta entén bé la història. Sense ordre, tot s'embolica!</p>`,
      svg: lista("Explicar en ordre: primer vaig al parc, després jugo, al final torno a casa", [["Primer: vaig al parc", A], ["Després: jugo", R], ["Al final: torno a casa", V]], { titulo: "Per explicar en ordre", marca: "n" }),
    },
    {
      html: `<h3>Preguntar per saber més</h3><p>Si no entenem alguna cosa, <mark>preguntem</mark>. Preguntar és de persones llestes!</p><p>Les preguntes comencen per paraules com <b>què?</b>, <b>qui?</b>, <b>on?</b>, <b>quan?</b> i <b>per què?</b></p><p>Quan les escrivim, posem un interrogant al final (?). Quan les diem, la veu puja una mica al final.</p>`,
      svg: frase("Paraules per preguntar: què, qui, on, quan i per què", [["Què?", A], ["Qui?", R], ["On?", V], ["/"], ["Quan?", N], ["Per què?", A]], { titulo: "Paraules per preguntar", fs: 22 }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Parlar i escoltar bé ens ajuda a <mark>fer amics</mark> i a <b>aprendre</b>.</p><p>També serveix per resoldre problemes sense enfadar-nos. Si algú té la pilota, li demanem amb amabilitat.</p><p>Quan parlem amb respecte i escoltem, tots estem millor. La classe és un lloc més feliç per a tothom.</p>`,
      svg: charla("Una nena demana la pilota si us plau; el nen li dona i ella diu gràcies", [["nina", "Em deixes la pilota?", R], ["nino", "És clar! Té.", A], ["nina", "Moltes gràcies!", R]]),
    },
    {
      html: `<h3>Juguem al telèfon</h3><p>Seieu en fila o en rotllana. El primer diu una frase <mark>a cau d'orella</mark> al segon, molt fluixet.</p><p>Cadascú la passa al següent. L'últim la diu en veu alta.</p><p>Ha arribat igual? Moltes vegades canvia i riem molt. Aquest joc ens ensenya que és molt important escoltar amb atenció.</p>`,
      svg: dibujos("Joc del telèfon: una frase passa d'orella en orella", [["nino", "1", A], ["nina", "2", R], ["abuelo", "3", V], ["mama", "4", N]], { titulo: "La frase passa d'orella en orella", nota: "Arriba igual al final?" }),
    },
  ],
  figura: {
    titulo: "Per parlar i escoltar bé",
    svg: mural("Quatre normes: escoltar amb atenció, aixecar la mà, parlar amb veu clara i fer servir paraules amables", [["oido", "escolto", "miro qui parla", A], ["mano", "aixeco la mà", "espero el torn", R], ["bocadillo", "parlo clar", "ni molt fort ni molt fluix", V], ["corazon", "soc amable", "si us plau i gràcies", N]], "Normes per conversar"),
  },
  video: { ...vid("DmWf545KfLc", "Les paraules dolces", "Mestres de Parvulari", 4156, 14), busqueda: "paraules amables en català per a nens" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Vols dir una cosa a classe i la mestra està parlant. Què fas?",
      pasos: ["Espero que acabi de parlar.", "Aixeco la mà en silenci.", "Quan em dona la paraula, parlo amb veu clara."],
      resultado: "aixeco la mà i espero el meu torn." },
    { enunciado: "Explica en ordre com et rentes les dents.",
      pasos: ["Primer poso pasta al raspall.", "Després raspallo totes les dents.", "Al final m'esbandeixo la boca."],
      resultado: "primer, després i al final." },
    { enunciado: "Un company et deixa un llapis. Què li dius?",
      pasos: ["Abans, per demanar-lo, dic «si us plau».", "Quan me'l dona, dic «gràcies».", "Quan el torno, també puc dir «gràcies»."],
      resultado: "«Em deixes un llapis, si us plau?» i «Gràcies!»." },
  ],
  errores: [
    "Interrompre qui parla: espera que acabi.",
    "Parlar tots alhora: aixeca la mà i espera el teu torn.",
    "Cridar a classe: fes servir una veu clara i tranquil·la.",
    "Explicar les coses desordenades: fes servir primer, després i al final.",
  ],
  ejercicios: [
    { q: "Digues tres coses que fem per escoltar bé.", sol: "Mirar qui parla, estar callats i parar atenció." },
    { q: "Què fem per demanar la paraula a classe?", sol: "Aixecar la mà i esperar." },
    { q: "Digues dues paraules amables.", sol: "Per exemple: si us plau i gràcies." },
    { q: "Què dius si sense voler trepitges algú?", sol: "«Perdó» o «ho sento»." },
    { q: "Explica en ordre què has fet aquest matí.", sol: "Resposta lliure amb primer, després i al final." },
    { q: "Fes una pregunta que comenci per «On…?».", sol: "Per exemple: «On és la meva motxilla?»." },
    { q: "Quina veu fem servir a la biblioteca?", sol: "Molt fluixa." },
    { q: "Escolta un adult dir tres paraules i repeteix-les en ordre.", sol: "Les ha de repetir en el mateix ordre." },
    { q: "Saluda algú de la teva família i pregunta-li com està.", sol: "Per exemple: «Hola! Com estàs?»." },
    { q: "Juga al telèfon amb la teva família.", sol: "Comproveu si la frase arriba igual al final." },
  ],
  quiz: [
    { q: "Per escoltar bé…", o: ["miro qui parla", "jugo amb el llapis", "parlo alhora"], a: 0, e: "Mirem i parem atenció." },
    { q: "Per demanar la paraula…", o: ["crido", "aixeco la mà", "m'aixeco"], a: 1, e: "Aixequem la mà." },
    { q: "Quan algú m'ajuda, dic…", o: ["gràcies", "adeu", "què?"], a: 0, e: "Gràcies." },
    { q: "Per demanar una cosa, dic…", o: ["si us plau", "perdó", "hola"], a: 0, e: "Si us plau." },
    { q: "A classe parlem amb veu…", o: ["molt alta", "clara i tranquil·la", "de lleó"], a: 1, e: "Clara i tranquil·la." },
    { q: "Per explicar en ordre, començo amb…", o: ["al final", "primer", "després"], a: 1, e: "Primer." },
    { q: "Una pregunta escrita porta…", o: ["un interrogant", "només un punt", "res"], a: 0, e: "L'interrogant al final: ?" },
    { q: "Si no entenc una cosa…", o: ["callo sempre", "pregunto", "m'enfado"], a: 1, e: "Preguntar és de persones llestes!" },
    { q: "Interrompre qui parla està…", o: ["bé", "malament", "molt bé"], a: 1, e: "Cal esperar el torn." },
    { q: "Si m'equivoco amb algú, dic…", o: ["perdó", "té", "ja està"], a: 0, e: "Perdó o ho sento." },
  ],
  examen: [
    { q: "Què és el torn de paraula?", o: ["Parlar quan em toca", "Parlar tots alhora", "No parlar mai"], a: 0, e: "Cadascú parla quan li toca." },
    { q: "Quina paraula fem servir per acomiadar-nos?", o: ["adeu", "gràcies", "si us plau"], a: 0, e: "Adeu." },
    { q: "Quina paraula serveix per preguntar?", o: ["on?", "després", "gràcies"], a: 0, e: "On?" },
    { q: "Quina veu fem servir a la biblioteca?", o: ["molt alta", "molt fluixa", "de gegant"], a: 1, e: "Molt fluixa." },
  ],
  feynman: ["Què fem per escoltar bé", "Per a què serveix el torn de paraula", "Com expliquem una cosa en ordre"],
  mapa: mapa("PARLAR I ESCOLTAR", "var(--pri)", [
    ["Escolto", "miro i paro atenció", A],
    ["Torn", "aixeco la mà", R],
    ["Parlo clar", "veu tranquil·la i en ordre", V],
    ["Soc amable", "si us plau, gràcies, perdó", N],
  ], 230),
  tarjetas: [
    ["Què faig per escoltar bé?", "Miro qui parla i paro atenció"],
    ["Com demano la paraula?", "Aixeco la mà"],
    ["Paraula per demanar una cosa", "Si us plau"],
    ["Paraula quan m'ajuden", "Gràcies"],
    ["Paraula si m'equivoco", "Perdó"],
    ["Per explicar en ordre…", "Primer, després i al final"],
    ["Paraules per preguntar", "Què? Qui? On? Quan? Per què?"],
    ["Quina veu faig servir a classe?", "Clara i tranquil·la"],
  ],
  familias: [
    "Al sopar, feu torns per explicar com ha anat el dia, sense interrompre.",
    "Demaneu-li que us expliqui una cosa fent servir primer, després i al final.",
    "Doneu exemple amb les paraules amables: si us plau, gràcies i perdó.",
    "Jugueu al telèfon o a repetir llistes de paraules per entrenar l'escolta.",
  ],
  profesores: {
    saberes: "Comunicació oral: escolta activa, torns de paraula, normes de cortesia, expressió clara i ordenada i formulació de preguntes (RD 157/2022 i Decret 175/2022 de Catalunya, primer cicle).",
    ideas: ["Objecte de la paraula (pilota o micròfon) per respectar els torns.", "Rotllana diària amb «primer, després i al final».", "Joc del telèfon i d'ordres encadenades."],
  },
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
