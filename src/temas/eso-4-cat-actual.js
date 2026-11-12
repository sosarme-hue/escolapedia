// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "La literatura actual",
  minutos: 35,
  objetivos: ["Conèixer la literatura catalana des de 1975 fins avui", "Identificar autors com Montserrat Roig, Quim Monzó, Jaume Cabré i Maria Barbal", "Descobrir la literatura juvenil i els nous formats"],
  claves: ["democràcia", "normalització", "Montserrat Roig", "Quim Monzó", "Jaume Cabré", "Maria Barbal", "literatura juvenil", "Sant Jordi"],
  pregunta: {
    texto: "Cada 23 d'abril, el carrer s'omple de llibres i roses. Quins llibres en català creus que es venen més per Sant Jordi?",
    respuesta: "De tot: <mark>novel·les, poesia, còmics, llibres juvenils</mark>… Des del 1975 la literatura catalana viu amb llibertat i una gran varietat. Autors com Jaume Cabré o Quim Monzó s'han traduït a desenes de llengües.",
  },
  bloques: [
    {
      html: `<h3>Llibertat i normalització</h3><p>Amb la <b>democràcia</b> (Constitució de 1978 i Estatuts d'Autonomia), el català torna a l'<mark>escola, els mitjans i les institucions</mark>. Neixen TV3 (1983), Catalunya Ràdio i nous premis. La literatura creix en lectors i diversitat de gèneres: novel·la negra, històrica, ciència-ficció, conte, poesia.</p>`,
      svg: L.linea("Fites des de 1975", [
        ["1975", "fi de la dictadura", "var(--muted)"],
        ["1983", "neix TV3; llei de normalització", "var(--pen)"],
        ["2007", "cultura catalana, a Frankfurt", "var(--red)"],
        ["avui", "llibres, còmic, pòdcasts…", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Narrativa: veus imprescindibles</h3><p><b>Montserrat Roig</b> (<i>Ramona, adéu</i>) va recuperar la memòria de les dones. <b>Quim Monzó</b> és un mestre del <mark>conte breu i irònic</mark> (<i>Mil cretins</i>). <b>Jaume Cabré</b> escriu grans novel·les com <i>Jo confesso</i>. <b>Maria Barbal</b> va escriure <i>Pedra de tartera</i>, la vida d'una dona del Pirineu.</p>`,
      svg: L.tabla("Narradors actuals i una obra", ["Autor", "Obra"], [
        ["M. Roig", "Ramona, adéu"], ["Q. Monzó", "Mil cretins"], ["J. Cabré", "Jo confesso"], ["M. Barbal", "Pedra de tartera"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Poesia i teatre</h3><p>La poesia actual és molt diversa: <b>Miquel Martí i Pol</b> (<i>Estimada Marta</i>) va arribar a molts lectors; <b>Maria Mercè Marçal</b> va unir feminisme i poesia. Al teatre, <b>Josep Maria Benet i Jornet</b> (<i>Testament</i>) i <b>Sergi Belbel</b>. Moltes obres es representen arreu d'Europa.</p>`,
      svg: L.filas("Poesia i teatre actuals", [
        ["Martí i Pol", "poesia: Estimada Marta", "var(--red)"], ["M. M. Marçal", "poesia feminista", "var(--leaf)"],
        ["Benet i Jornet", "teatre: Testament", "var(--inf)"], ["Sergi Belbel", "teatre contemporani", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>La literatura juvenil</h3><p>Hi ha molta literatura escrita per a joves en català: <b>Maite Carranza</b> (<i>La guerra de les bruixes</i>), <b>Jordi Sierra i Fabra</b>, <b>Care Santos</b>, i clàssics de lectura escolar com <i>Mecanoscrit del segon origen</i>, de <b>Manuel de Pedrolo</b>, una novel·la de <mark>ciència-ficció</mark> que s'ha llegit a moltes generacions.</p>`,
      svg: L.filas("Literatura juvenil en català", [
        ["Pedrolo", "Mecanoscrit del segon origen", "var(--inf)"],
        ["Maite Carranza", "La guerra de les bruixes", "var(--red)"],
        ["Care Santos", "novel·la juvenil", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Nous formats</h3><p>La literatura també viu en <b>còmics</b> i novel·la gràfica, <b>pòdcasts</b>, <b>slams</b> de poesia, xarxes socials i clubs de lectura. Sant Jordi, el 23 d'abril, és la gran festa del llibre i la rosa, declarada per la UNESCO <mark>Dia Mundial del Llibre</mark>.</p>`,
      svg: L.filas("Noves maneres de llegir i escriure", [
        ["Còmic", "novel·la gràfica", "var(--pen)"], ["Pòdcast", "ficció sonora", "var(--leaf)"],
        ["Slam", "poesia en directe", "var(--red)"], ["Sant Jordi", "23 d'abril: llibre i rosa", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "La literatura catalana avui",
    svg: L.columnas("Gèneres i autors de la literatura catalana actual", [
      ["novel·la", "NARRATIVA", ["Cabré · Roig", "Barbal"], "var(--pen)"],
      ["conte breu", "CONTE", ["Quim Monzó", "Pere Calders"], "var(--red)"],
      ["vers", "POESIA", ["Martí i Pol", "M. M. Marçal"], "var(--leaf)"],
      ["per a joves", "JUVENIL", ["Pedrolo", "Carranza"], "var(--inf)"],
    ]),
  },
  video: { id: "YT-HTkUwO-M", titulo: "Discurs de Quim Monzó a la Fira de Frankfurt 2007", canal: "VilaWeb", vistas: 139280, megusta: 1345, busqueda: "literatura catalana actual" },
  quiz: [
    { q: "Què va canviar per al català a partir de 1975?", o: ["Va tornar a l'escola i als mitjans", "Es va prohibir", "Va desaparèixer"], a: 0, e: "Democràcia i normalització lingüística." },
    { q: "Quim Monzó és conegut sobretot pels seus…", o: ["contes breus i irònics", "poemes èpics", "assajos científics"], a: 0, e: "Mil cretins, El perquè de tot plegat…" },
    { q: "Pedra de tartera és de…", o: ["Maria Barbal", "Montserrat Roig", "Care Santos"], a: 0, e: "Maria Barbal, 1985." },
    { q: "Mecanoscrit del segon origen és una novel·la de…", o: ["ciència-ficció", "terror medieval", "teatre clàssic"], a: 0, e: "De Manuel de Pedrolo." },
    { q: "Quin dia se celebra Sant Jordi?", o: ["El 23 d'abril", "L'11 de setembre", "El 24 de juny"], a: 0, e: "Dia del llibre i la rosa." },
  ],
  examen: [
    { q: "Jo confesso és una novel·la de…", o: ["Jaume Cabré", "Quim Monzó", "Sergi Belbel"], a: 0, e: "Jaume Cabré, 2011." },
    { q: "Montserrat Roig va recuperar sobretot…", o: ["la memòria de les dones", "les llegendes medievals", "la ciència-ficció"], a: 0, e: "Ramona, adéu i els seus reportatges." },
    { q: "Miquel Martí i Pol va escriure…", o: ["Estimada Marta", "Testament", "Bearn"], a: 0, e: "Poemari molt llegit." },
  ],
  feynman: ["Què va canviar per a la literatura catalana amb la democràcia", "Tres narradors actuals i una obra de cadascun", "Dues obres de literatura juvenil en català", "Per què Sant Jordi és tan important"],
  mapa: mapa("LITERATURA ACTUAL", "var(--eso)", [
    ["Narrativa", "Cabré · Roig · Barbal", "var(--pen)"],
    ["Conte", "Quim Monzó", "var(--red)"],
    ["Poesia i teatre", "Martí i Pol · Benet i Jornet", "var(--leaf)"],
    ["Juvenil", "Pedrolo · Carranza", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Normalització lingüística", "Procés de recuperació del català a l'escola, als mitjans i a les institucions."],
    ["Quim Monzó", "Mestre del conte breu i irònic: Mil cretins."],
    ["Jaume Cabré", "Novel·lista: Jo confesso, Les veus del Pamano."],
    ["Pedra de tartera", "Novel·la de Maria Barbal sobre una dona del Pirineu."],
    ["Sant Jordi", "23 d'abril: dia del llibre i la rosa."],
  ],
  familias: ["Per Sant Jordi, regaleu-vos un llibre en català i expliqueu-vos de què va.", "Escolteu junts un pòdcast de ficció en català.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Educació literària: literatura catalana des de 1975 fins a l'actualitat; lectura autònoma i hàbits lectors (RD 217/2022, Llengua Catalana i Literatura 4t; currículums autonòmics).",
    ideas: ["Club de lectura amb Mecanoscrit del segon origen.", "Slam de poesia a l'aula amb textos propis.", "Book trailers de novel·les juvenils en català."],
  },
  fuentes: [
    L.BOE,
    { t: "Institució de les Lletres Catalanes", url: "https://ilc.gencat.cat/" },
    { t: "Associació d'Escriptors en Llengua Catalana", url: "https://www.escriptors.cat/" },
  ],
  revisado: "2026-11-12",
};

// Ampliació: més teoria, exemples resolts, errors típics i exercicis amb solució.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Relacionar la literatura actual amb la memòria, el gènere i la diversitat", "Conèixer autors del segle XXI com Irene Solà, Albert Sánchez Piñol o Najat El Hachmi", "Comentar un conte breu i un text de literatura actual"],
  bloques: [
    { tras: "Llibertat i normalització", html: `<h3>Etapes des de 1975</h3>${L.tb(["Etapa", "Context", "Tendències"], [["1975-1985", "Transició i primers anys de democràcia", "experimentació, memòria de la guerra, primers autors joves"], ["1985-2000", "normalització, TV3, grans editorials", "novel·la de gènere (negra, històrica), conte breu"], ["2000-avui", "globalització, internet, Frankfurt 2007", "traduccions arreu, noves veus, autors d'origen divers"]])}<p>El 2007, la cultura catalana va ser la <b>convidada d'honor a la Fira del Llibre de Frankfurt</b>, la més important del món, i molts autors van començar a ser traduïts a altres llengües.</p>` },
    { tras: "Narrativa: veus imprescindibles", html: `<h3>Memòria i veus de dones</h3><p>Un dels grans temes de la literatura catalana des de 1975 és la <b>memòria</b>: recuperar la història de la guerra i de la dictadura que s'havia silenciat. <b>Montserrat Roig</b>, a <i>Ramona, adéu</i> (1972) i <i>El temps de les cireres</i> (1977), explica la vida de tres generacions de dones de Barcelona; també va escriure el reportatge <i>Els catalans als camps nazis</i>. <b>Carme Riera</b>, mallorquina, va sorprendre amb els contes de <i>Te deix, amor, la mar com a penyora</i> (1975) i va recuperar la història dels xuetes a <i>Dins el darrer blau</i> (1994). <b>Maria Barbal</b>, a <i>Pedra de tartera</i> (1985), dona veu a la Conxa, una dona del Pallars que ho perd tot amb la guerra. <b>Jesús Moncada</b>, a <i>Camí de sirga</i> (1988), narra la desaparició de Mequinensa sota les aigües d'un embassament.</p>` },
    { tras: "Narrativa: veus imprescindibles", html: `<h3>Noves veus del segle XXI</h3><p>La literatura catalana d'avui és molt diversa i s'ha obert al món:</p><ul><li><b>Albert Sánchez Piñol</b>: <i>La pell freda</i> (2002), una novel·la d'aventures i terror en una illa, traduïda a més de trenta llengües.</li><li><b>Najat El Hachmi</b>, nascuda al Marroc i criada a Vic: <i>L'últim patriarca</i> (2008, Premi Ramon Llull) parla de la identitat i de la llibertat de les dones.</li><li><b>Irene Solà</b>: <i>Canto jo i la muntanya balla</i> (2019, Premi de Literatura de la Unió Europea), en què parlen persones, animals, bolets i núvols del Pirineu.</li><li><b>Eva Baltasar</b>: <i>Permagel</i> (2018), una novel·la breu i intensa sobre el desig i la soledat.</li></ul><p>Totes aquestes obres mostren que el català és una llengua de literatura plenament contemporània.</p>` },
    { tras: "Poesia i teatre", html: `<h3>Poesia: de Marçal a Margarit</h3><p><b>Maria Mercè Marçal</b> (1952-1998) va definir la seva identitat en un vers molt conegut: es considerava afortunada per haver nascut <i>dona</i>, de <i>classe baixa</i> i de <i>nació oprimida</i>, és a dir, «tres voltes rebel». Va escriure <i>Cau de llunes</i> (1977) i la novel·la <i>La passió segons Renée Vivien</i>. <b>Joan Margarit</b> (1938-2021), arquitecte i poeta, escriu versos clars sobre la pèrdua, la memòria i l'amor; el 2019 va rebre el <mark>Premi Cervantes</mark>. <b>Enric Casasses</b> barreja tradició i oralitat, i molts poetes joves combinen el llibre amb el recital, la música i les xarxes.</p>` },
    { tras: "Poesia i teatre", html: `<h3>Teatre contemporani</h3><p>El teatre català viu un gran moment gràcies a institucions com el <b>Teatre Nacional de Catalunya</b> (1996) i el Teatre Lliure (1976), i a moltes sales petites. <b>Josep Maria Benet i Jornet</b> va crear el món de Drudània i obres com <i>Testament</i> (1996), sobre un professor malalt. <b>Sergi Belbel</b>, amb <i>Després de la pluja</i> (1993), presenta uns treballadors que pugen al terrat d'una oficina on no es pot fumar; l'obra s'ha representat en desenes de països. Autors més joves com <b>Pau Miró</b> o <b>Guillem Clua</b> parlen de temes d'avui. El teatre també arriba a la televisió: Benet i Jornet va escriure sèries com <i>Nissaga de poder</i>.</p>` },
  ],
  videos: [
    ["Llibertat i normalització", L.vid("jI01L4nFyK8", "Literatura actual", "Adri SM", 2520)],
  ],
  ejemplos: [
    ["Classifica per temes: Pedra de tartera, La pell freda, L'últim patriarca.", ["Pedra de tartera: memòria de la guerra i vida rural.", "La pell freda: aventures i terror.", "L'últim patriarca: identitat i llibertat de les dones."], "Memòria; gènere d'aventures; identitat i migració."],
    ["Quins trets fan reconèixer un conte de Quim Monzó?", ["Brevetat i ritme ràpid.", "Ironia i humor, sovint negre.", "Situacions quotidianes que es tornen absurdes."], "Conte breu, irònic i absurd sobre la vida quotidiana."],
    ["Comenta «tres voltes rebel» de Maria Mercè Marçal.", ["La poeta s'identifica com a dona, de classe treballadora i de nació oprimida.", "Converteix tres discriminacions en motius d'orgull.", "Uneix feminisme, consciència social i identitat nacional."], "És una afirmació de rebel·lia contra les tres opressions que patia."],
  ],
  errores: [
    "Pensar que la literatura catalana actual només parla del passat: també tracta temes d'avui com la migració o el desig.",
    "Confondre Montserrat Roig amb Mercè Rodoreda: Roig és posterior (1946-1991) i parla de la memòria.",
    "Creure que Joan Margarit va guanyar el Cervantes per obra només en castellà: escrivia en català i castellà.",
    "Situar Mecanoscrit del segon origen al segle XXI: és del 1974.",
    "Oblidar els autors del País Valencià i de les Illes, com Carme Riera.",
    "Pensar que la literatura juvenil és de segona categoria: autores com Maite Carranza han rebut premis importants i són traduïdes a moltes llengües.",
  ],
  ejercicios: [
    ["Per què va ser important la Fira de Frankfurt del 2007?", "La cultura catalana hi va ser convidada d'honor i molts autors van començar a ser traduïts."],
    ["Quin tema comparteixen Ramona, adéu i Pedra de tartera?", "La memòria i la vida de les dones."],
    ["De què tracta Camí de sirga?", "De la desaparició de Mequinensa sota un embassament."],
    ["Qui és Najat El Hachmi i quina obra va escriure el 2008?", "Escriptora nascuda al Marroc i criada a Vic; L'últim patriarca."],
    ["Què té d'original Canto jo i la muntanya balla?", "Hi parlen persones, animals, plantes i núvols del Pirineu."],
    ["Quin premi va rebre Joan Margarit el 2019?", "El Premi Cervantes."],
    ["Explica l'argument de Després de la pluja.", "Treballadors d'una oficina on no es pot fumar pugen al terrat a fumar i parlar."],
    ["Anomena dos teatres importants de Barcelona.", "El Teatre Nacional de Catalunya i el Teatre Lliure."],
    ["Quan és Sant Jordi i què se celebra?", "El 23 d'abril: la festa del llibre i la rosa; Dia Mundial del Llibre."],
    ["Escriu un microrelat de tres línies a l'estil de Monzó.", "Resposta oberta: una situació quotidiana amb un final irònic o absurd."],
  ],
  quiz: [
    ["La pell freda és de…", ["Albert Sánchez Piñol", "Jaume Cabré", "Quim Monzó"], 0, "2002."],
    ["Carme Riera és de…", ["Mallorca", "Lleida", "València"], 0, "Te deix, amor, la mar com a penyora."],
    ["«Tres voltes rebel» és un vers de…", ["Maria Mercè Marçal", "Montserrat Roig", "Irene Solà"], 0, "Cau de llunes."],
    ["Testament (1996) és de…", ["Benet i Jornet", "Belbel", "Pedrolo"], 0, "Teatre."],
    ["Irene Solà va guanyar el…", ["Premi de Literatura de la UE", "Nobel", "Cervantes"], 0, "2020."],
  ],
  tarjetas: [
    ["Frankfurt 2007", "La cultura catalana, convidada d'honor a la gran fira del llibre."],
    ["Maria Mercè Marçal", "Poeta «tres voltes rebel»: dona, classe baixa, nació oprimida."],
    ["Irene Solà", "Canto jo i la muntanya balla (2019)."],
  ],
});
