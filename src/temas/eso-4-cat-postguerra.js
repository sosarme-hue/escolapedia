// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "La literatura de postguerra",
  minutos: 40,
  objetivos: ["Explicar la situació del català després de 1939: prohibició, exili i resistència", "Conèixer Mercè Rodoreda i La plaça del Diamant", "Identificar Espriu, Pere Calders, Vicent Andrés Estellés i Llorenç Villalonga"],
  claves: ["postguerra", "exili", "censura", "La plaça del Diamant", "Rodoreda", "Espriu", "Pere Calders", "Estellés"],
  pregunta: {
    texto: "Després de la Guerra Civil, el català es va prohibir a l'escola, a la premsa i als llibres. Com creus que van continuar escrivint els autors en català?",
    respuesta: "Amb molt d'esforç: uns des de l'<mark>exili</mark> (Mèxic, França, Xile), altres <mark>en la clandestinitat</mark>, publicant en edicions petites o guardant els textos al calaix. Gràcies a ells, la literatura catalana no es va interrompre.",
  },
  bloques: [
    {
      html: `<h3>El context: prohibició i exili</h3><p>Amb la dictadura franquista (1939-1975), el català queda <mark>prohibit</mark> en l'ensenyament i la vida pública, i hi ha una dura <b>censura</b>. Molts escriptors s'exilien. A poc a poc, als anys 50 i 60, es tornen a publicar llibres i neixen premis com el <b>Sant Jordi</b> (1960) i editorials com Edicions 62.</p>`,
      svg: L.linea("La literatura catalana sota el franquisme", [
        ["1939", "prohibició i exili", "var(--muted)"],
        ["1948", "Espriu: Primera història d'Esther", "var(--red)"],
        ["1962", "Rodoreda: La plaça del Diamant", "var(--pen)"],
        ["1962", "neix Edicions 62", "var(--inf)"],
        ["1975", "fi de la dictadura", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Mercè Rodoreda</h3><p>És l'escriptora catalana <mark>més traduïda</mark>. Des de l'exili va escriure <i>La plaça del Diamant</i> (1962), on la <b>Colometa</b> explica en primera persona, amb un llenguatge senzill i poètic, la seva vida a Gràcia abans, durant i després de la guerra. Altres obres: <i>Mirall trencat</i>, <i>Aloma</i>.</p>`,
      svg: L.filas("La plaça del Diamant", [
        ["Narradora", "la Colometa, en 1a persona", "var(--pen)"],
        ["Escenari", "el barri de Gràcia", "var(--leaf)"],
        ["Temps", "República, guerra, postguerra", "var(--red)"],
        ["Símbol", "els coloms", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Salvador Espriu</h3><p>Poeta i dramaturg, va reflexionar sobre la <b>mort</b>, la memòria i el destí col·lectiu. A <mark><i>La pell de brau</i></mark> (1960) parla de «Sepharad» (Espanya) i demana convivència i diàleg entre els pobles. També va escriure <i>Primera història d'Esther</i>.</p>`,
      svg: L.dialogo("Versos de La pell de brau d'Espriu", [
        ["Espriu", "Diversos són els homes", "var(--red)"],
        ["", "i diverses les parles,", "var(--red)"],
        ["", "i han convingut molts noms", "var(--red)"], ["", "a un sol amor.", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Pere Calders i la narrativa</h3><p><b>Pere Calders</b>, exiliat a Mèxic, escriu contes on <mark>allò fantàstic irromp en la vida quotidiana</mark> amb ironia: <i>Cròniques de la veritat oculta</i>, <i>Invasió subtil</i>. <b>Llorenç Villalonga</b> (Mallorca) escriu <i>Bearn o la sala de les nines</i>, sobre la decadència de l'aristocràcia.</p>`,
      svg: L.tabla("Narradors de postguerra", ["Autor", "Obra"], [
        ["Pere Calders", "Invasió subtil"], ["L. Villalonga", "Bearn"], ["M. Rodoreda", "Mirall trencat"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>La poesia: Estellés i la cançó</h3><p><b>Vicent Andrés Estellés</b> (València) escriu sobre la vida quotidiana, l'amor i la por amb un llenguatge directe: el <i>Llibre de meravelles</i>. Als anys 60, la <mark>Nova Cançó</mark> (Raimon, Lluís Llach, Maria del Mar Bonet) porta la poesia en català a milers de persones.</p>`,
      svg: L.filas("Poesia i cançó", [
        ["V. A. Estellés", "Llibre de meravelles", "var(--leaf)"],
        ["Nova Cançó", "Raimon · Llach · Bonet", "var(--red)"],
      ], "la poesia arriba a tothom"),
    },
  ],
  figura: {
    titulo: "Escriure en català després de 1939",
    svg: L.columnas("Autors de postguerra: narrativa, poesia, teatre i cançó", [
      ["narrativa", "RODOREDA", ["La plaça", "del Diamant"], "var(--pen)"],
      ["poesia i teatre", "ESPRIU", ["La pell", "de brau"], "var(--red)"],
      ["conte fantàstic", "CALDERS", ["Cròniques de la", "veritat oculta"], "var(--inf)"],
      ["poesia", "ESTELLÉS", ["Llibre de", "meravelles"], "var(--leaf)"],
    ]),
  },
  video: { id: "eTR7vPtwfyY", titulo: "Teoria de La plaça del Diamant, Mercè Rodoreda", canal: "akaelprofe", vistas: 34981, megusta: 1004, busqueda: "literatura catalana de postguerra Rodoreda Espriu" },
  quiz: [
    { q: "Què va passar amb el català després de 1939?", o: ["Es va prohibir a l'escola i a la vida pública", "Es va fer obligatori", "No va canviar res"], a: 0, e: "La dictadura el va prohibir i hi havia censura." },
    { q: "Qui narra La plaça del Diamant?", o: ["La Colometa", "En Quimet", "Un narrador omniscient"], a: 0, e: "La Natàlia, a qui diuen Colometa, en primera persona." },
    { q: "La pell de brau és de…", o: ["Salvador Espriu", "Pere Calders", "Llorenç Villalonga"], a: 0, e: "Salvador Espriu, 1960." },
    { q: "Els contes de Pere Calders barregen…", o: ["la vida quotidiana i el fantàstic", "la guerra i la història", "la ciència i la tècnica"], a: 0, e: "Amb ironia i humor." },
    { q: "Quin moviment musical va portar la poesia catalana a milers de persones?", o: ["La Nova Cançó", "El rock urbà", "L'òpera"], a: 0, e: "Raimon, Llach, Maria del Mar Bonet…" },
  ],
  examen: [
    { q: "On es va exiliar Pere Calders?", o: ["A Mèxic", "A Itàlia", "Al Japó"], a: 0, e: "Hi va viure més de vint anys." },
    { q: "Bearn és una novel·la de…", o: ["Llorenç Villalonga", "Mercè Rodoreda", "Vicent Andrés Estellés"], a: 0, e: "Novel·la mallorquina sobre la decadència aristocràtica." },
    { q: "Vicent Andrés Estellés era de…", o: ["el País Valencià", "Mallorca", "Andorra"], a: 0, e: "Va néixer a Burjassot (València)." },
  ],
  feynman: ["La situació del català durant la dictadura", "De què tracta La plaça del Diamant", "Què demana Espriu a La pell de brau", "Què tenen d'especial els contes de Calders"],
  mapa: mapa("POSTGUERRA", "var(--eso)", [
    ["Context", "prohibició · exili · censura", "var(--muted)"],
    ["Narrativa", "Rodoreda · Calders", "var(--pen)"],
    ["Poesia", "Espriu · Estellés", "var(--red)"],
    ["Resistència", "Sant Jordi · Nova Cançó", "var(--leaf)"],
  ], 240),
  tarjetas: [
    ["La plaça del Diamant", "Novel·la de Mercè Rodoreda (1962), narrada per la Colometa."],
    ["Mercè Rodoreda", "L'escriptora catalana més traduïda; va escriure des de l'exili."],
    ["La pell de brau", "Llibre de poemes de Salvador Espriu (1960) sobre la convivència."],
    ["Pere Calders", "Contes on el fantàstic entra en la vida quotidiana."],
    ["Nova Cançó", "Moviment musical dels anys 60 en català: Raimon, Llach, Bonet."],
  ],
  familias: ["Pregunteu als avis com era l'escola i si hi parlaven català.", "Escolteu junts una cançó de Raimon o Lluís Llach i comenteu-ne la lletra.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Educació literària: la literatura catalana de postguerra, exili i resistència cultural; lectura de fragments i contes (RD 217/2022, Llengua Catalana i Literatura 4t; currículums autonòmics).",
    ideas: ["Lectura d'un conte de Calders i escriptura d'un final alternatiu.", "Ruta literària per Gràcia seguint La plaça del Diamant.", "Relacionar poemes musicats per la Nova Cançó amb el seu context."],
  },
  fuentes: [
    L.BOE,
    { t: "Fundació Mercè Rodoreda (IEC)", url: "https://www.fundaciomercerodoreda.cat/" },
    { t: "Associació d'Escriptors en Llengua Catalana: Salvador Espriu", url: "https://www.escriptors.cat/autors/esprius" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Distingir la literatura de l'exili i la de l'interior", "Analitzar La plaça del Diamant i un poema d'Espriu", "Conèixer el realisme històric i autors com Pedrolo, Martí i Pol i Fuster"],
  bloques: [
    { tras: "El context: prohibició i exili", html: `<h3>Exili i interior</h3><p>Després de 1939, la literatura catalana queda partida en dues:</p>${L.tb(["", "Exili", "Interior"], [["On", "França, Mèxic, Xile, Argentina", "Catalunya, València, Illes"], ["Situació", "llibertat, però sense lectors", "censura i clandestinitat"], ["Autors", "Rodoreda, Calders, Agustí Bartra, Pere Quart", "Espriu, Villalonga, Estellés, Ferrater"], ["Mitjans", "revistes i editorials de l'exili", "edicions clandestines, tertúlies, Jocs Florals a l'estranger"]])}<p>Carles Riba, que va tornar de l'exili el 1943, va escriure les <i>Elegies de Bierville</i> (1942), on reflexiona sobre la pàtria perduda.</p>` },
    { tras: "El context: prohibició i exili", html: `<h3>La resistència cultural</h3><p>Els anys 40 van ser els més durs: no es podia publicar gairebé res en català i les classes es feien d'amagat, a casa. Als anys 50 i 60 la censura es va relaxar una mica i van començar a aparèixer iniciatives que van mantenir viva la llengua. El <b>1961</b> va néixer <b>Òmnium Cultural</b>, que organitzava classes de català; el <b>1962</b> es va fundar <b>Edicions 62</b>; i el <b>Premi Sant Jordi</b> de novel·la (1960) va animar els escriptors. Al País Valencià, <b>Joan Fuster</b> va publicar l'assaig <i>Nosaltres, els valencians</i> (1962), que va obrir un debat decisiu sobre la identitat i la llengua. La <mark>Nova Cançó</mark> va portar els poemes a l'escenari i a la ràdio.</p>` },
    { tras: "Mercè Rodoreda", html: `<h3>La plaça del Diamant: lectura guiada</h3><p>La novel·la segueix la vida de la <b>Natàlia</b>, a qui el seu marit, el <b>Quimet</b>, rebateja com a <i>Colometa</i>. Té tres parts: el festeig i el casament; la República i la guerra, en què el Quimet mor al front; i la postguerra, quan la Natàlia, a punt de suïcidar-se per la fam, es casa amb l'<b>Antoni</b>, un adroguer bo. Els <mark>coloms</mark>, que el Quimet cria a casa i que l'ofeguen, simbolitzen la seva falta de llibertat. Al final, la Natàlia torna a la plaça del Diamant i fa un crit que l'allibera del passat. La narradora parla en primera persona, amb frases senzilles i molt orals, com si ens expliqués la seva vida a nosaltres.</p>` },
    { tras: "Salvador Espriu", html: `<h3>Sinera i el món d'Espriu</h3><p>Espriu va crear un món literari propi: <b>Sinera</b>, que és el nom d'Arenys (el poble de la seva família) llegit a l'inrevés. A <i>Cementiri de Sinera</i> (1946) recorda amb dolor un món que la guerra ha destruït. Els seus temes són la <b>mort</b>, el pas del temps, la memòria i la responsabilitat col·lectiva. A <i>La pell de brau</i> (1960), Espanya és <b>Sepharad</b> (el nom hebreu de la península), i el poeta demana als seus habitants que convisquin en pau: «Que Sepharad visqui eternament en l'ordre i en la pau, en el treball, en la difícil i merescuda llibertat». Els seus versos van esdevenir un símbol de la convivència i van ser cantats per Raimon.</p>` },
    { tras: "Pere Calders i la narrativa", html: `<h3>El realisme històric</h3><p>Als anys 60, molts autors defensen el <b>realisme històric</b>: una literatura que denuncia la realitat social i política de la dictadura amb un llenguatge clar. A poesia destaquen <b>Pere Quart</b> (Joan Oliver), amb <i>Vacances pagades</i> (1960), i <b>Miquel Martí i Pol</b>, obrer d'una fàbrica de Roda de Ter, amb <i>La fàbrica</i>. Més endavant, Martí i Pol escriu <i>Estimada Marta</i> (1978), un dels llibres de poesia més venuts en català. <b>Gabriel Ferrater</b> (<i>Les dones i els dies</i>, 1968) escriu una poesia de la vida quotidiana molt influent. En narrativa, <b>Manuel de Pedrolo</b> va escriure moltíssimes obres, com <i>Mecanoscrit del segon origen</i> (1974), una novel·la de ciència-ficció que encara llegeixen molts instituts.</p>` },
  ],
  videos: [
    ["Mercè Rodoreda", L.vid("c-HERepWt9g", "Mercè Rodoreda, l'autora catalana més traduïda", "betevé", 10586)],
  ],
  ejemplos: [
    ["Exili o interior? Pere Calders escriu Cròniques de la veritat oculta (1955).", ["Calders va marxar a Mèxic el 1939.", "Hi va viure fins al 1962.", "Va escriure el llibre fora de Catalunya."], "Literatura de l'exili."],
    ["Explica el símbol dels coloms a La plaça del Diamant.", ["El Quimet els cria i omplen tota la casa.", "La Natàlia ha de netejar-los i se sent ofegada.", "Quan els fa morir, recupera una mica el control de la seva vida."], "Els coloms simbolitzen l'opressió que pateix la Natàlia i la seva falta de llibertat."],
    ["Què vol dir que Espriu anomeni Espanya «Sepharad»?", ["Sepharad és el nom hebreu de la península.", "Recorda els jueus expulsats el 1492.", "Suggereix un país que ha expulsat i enfrontat els seus fills."], "És una crida a la convivència: el país ha d'acceptar tots els seus pobles i llengües."],
  ],
  errores: [
    "Pensar que durant la dictadura no es va escriure res en català: es va escriure a l'exili i en la clandestinitat.",
    "Confondre la Colometa amb una altra persona: és el nom que el Quimet posa a la Natàlia.",
    "Creure que Sinera és un lloc inventat sense relació real: és Arenys llegit a l'inrevés.",
    "Atribuir La pell de brau a Estellés: és de Salvador Espriu.",
    "Pensar que el realisme històric era una novel·la històrica: era literatura de denúncia del present.",
  ],
  ejercicios: [
    ["Anomena dos autors de l'exili i dos de l'interior.", "Exili: Rodoreda, Calders (Bartra, Pere Quart). Interior: Espriu, Villalonga (Estellés, Ferrater)."],
    ["Què van ser Òmnium Cultural i Edicions 62?", "Una entitat (1961) que impulsava la llengua i la cultura i una editorial (1962) clau per publicar en català."],
    ["Resumeix les tres parts de La plaça del Diamant.", "Festeig i casament amb el Quimet; guerra i mort del Quimet; postguerra i casament amb l'Antoni."],
    ["Quin és el significat del crit final de la Natàlia?", "S'allibera del dolor i del passat."],
    ["D'on ve el nom Sinera?", "És Arenys llegit a l'inrevés."],
    ["Què demana el poeta a La pell de brau?", "Convivència, pau i llibertat entre els pobles de Sepharad (Espanya)."],
    ["Què és el realisme històric?", "Literatura dels anys 60 que denuncia la realitat social i política amb un llenguatge clar."],
    ["Qui va escriure Estimada Marta i on treballava?", "Miquel Martí i Pol, obrer d'una fàbrica de Roda de Ter."],
    ["De quin gènere és Mecanoscrit del segon origen?", "Ciència-ficció; Manuel de Pedrolo, 1974."],
    ["Quin assaig va publicar Joan Fuster el 1962?", "Nosaltres, els valencians."],
  ],
  quiz: [
    ["El Quimet anomena la Natàlia…", ["Colometa", "Aloma", "Mila"], 0, "La plaça del Diamant."],
    ["Sinera és…", ["Arenys a l'inrevés", "un nom hebreu", "una revista"], 0, "Món d'Espriu."],
    ["Elegies de Bierville és de…", ["Carles Riba", "Espriu", "Calders"], 0, "1942, a l'exili."],
    ["Òmnium Cultural va néixer el…", ["1961", "1939", "1975"], 0, "Resistència cultural."],
    ["Vacances pagades (1960) és de…", ["Pere Quart", "Ferrater", "Villalonga"], 0, "Pseudònim de Joan Oliver."],
  ],
  tarjetas: [
    ["Exili i interior", "Llibertat sense lectors / censura i clandestinitat."],
    ["Sepharad", "Nom hebreu de la península; Espriu demana convivència."],
    ["Realisme històric", "Literatura de denúncia dels anys 60: Pere Quart, Martí i Pol."],
  ],
});
