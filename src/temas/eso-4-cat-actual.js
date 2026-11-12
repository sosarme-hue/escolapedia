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
