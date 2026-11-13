// Infantil 3 anys · Primeros pasos en catalán: Hola i adéu. Tema escrit en català, per llegir amb un adult. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { charla, dibujos, lista, mural, vid } = require("./_peque");
const { R, A, V, N, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Primeros pasos en catalán",
  curso: "3-anos",
  titulo: "Hola i adéu",
  minutos: 10,
  objetivos: ["Dir hola quan arribem", "Dir adéu quan marxem", "Dir bon dia i bona nit"],
  claves: ["hola", "adéu", "bon dia", "bona nit", "fins demà"],
  pregunta: {
    texto: "Què dius quan arribes a l'escola? I quan te'n vas a casa?",
    respuesta: "Quan arribem diem <mark>hola</mark> i <mark>bon dia</mark>. Quan marxem diem <mark>adéu</mark>!",
  },
  bloques: [
    {
      html: `<h3>Hola!</h3><p>Quan arribem diem <mark>hola</mark>.</p><p>Hola, mestra! Hola, amics! Mirem la persona i somriem. Saludar ens fa estar contents a tots.</p><p>Hola, hola! Ho diem amb veu clara i alegre.</p>`,
      svg: charla("Un nen diu hola i la mestra respon hola", [["nino", "Hola, mestra!", A], ["mama", "Hola, Pau!", R]]),
    },
    {
      html: `<h3>Bon dia!</h3><p>Al matí, quan surt el sol, diem <mark>bon dia</mark>.</p><p>Bon dia, mama! Bon dia, papa! Ens llevem amb un somriure i un petó.</p><p>Bon dia, sol! Fins i tot podem saludar el sol.</p>`,
      svg: escena("Al matí surt el sol: bon dia", [["sol", 70, 70, 2], ["nina", 186, 86, 2], ["t", 130, 158, "Bon dia!", N, 30]]),
    },
    {
      html: `<h3>Adéu!</h3><p>Quan marxem diem <mark>adéu</mark>.</p><p>Movem la mà: adéu, adéu! Si tornarem a veure'ns, diem: <b>fins demà!</b></p><p>Adéu, adéu! Movem la mà ben alt perquè ens vegin bé. A demà!</p>`,
      svg: charla("Una nena diu adéu i un nen diu fins demà", [["nina", "Adéu!", R], ["nino", "Fins demà!", A]]),
    },
    {
      html: `<h3>Bona nit!</h3><p>Quan ens anem a dormir diem <mark>bona nit</mark>.</p><p>Bona nit, mama! Bona nit, papa! Ens posem al llit i tanquem els ulls.</p><p>Bona nit, lluna! Bona nit, estrelles! Fins demà.</p>`,
      svg: escena("De nit, amb la lluna, ens anem a dormir: bona nit", [["luna", 70, 66, 1.8], ["estrella", 120, 40, 0.6], ["cama", 186, 96, 2], ["t", 130, 158, "Bona nit!", A, 30]]),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Saludar és ser <mark>amable</mark>.</p><p>Saludem a l'escola, a casa, a la botiga i al parc. Tothom està content quan el saluden!</p><p>Saludar és fàcil i fa feliç tothom.</p>`,
      svg: dibujos("Saludem a l'escola, a casa i al parc", [["escuela", "escola", A], ["casa", "casa", R], ["arbol", "parc", V]]),
    },
    {
      html: `<h3>Juguem!</h3><p>L'adult diu un moment del dia. Tu dius la <mark>salutació</mark>.</p><p>Arribes a l'escola? Hola! Te'n vas a dormir? Bona nit! Ho has encertat?</p><p>I quan arribes a casa? Hola!</p>`,
      svg: lista("Joc: arribo hola, al matí bon dia, marxo adéu", [["Arribo → Hola!", A], ["Al matí → Bon dia!", N], ["Marxo → Adéu!", R]], { titulo: "Què diem?", marca: "★" }),
    },
  ],
  figura: {
    titulo: "Hola i adéu",
    svg: mural("Salutacions: hola, bon dia, adéu, bona nit", [["nino", "hola", "quan arribo", A], ["sol", "bon dia", "al matí", N], ["mano", "adéu", "quan marxo", R], ["luna", "bona nit", "a dormir", V]], "Hola i adéu"),
  },
  video: { ...vid("BF7w-xJUlwM", "Dàmaris Gelabert - BON DIA! (Videoclip Oficial)", "Dàmaris Gelabert", 42541176), busqueda: "cançó bon dia hola infantil català" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Arribes a l'escola al matí. Què dius?",
      pasos: ["Mirem la mestra.", "És el matí.", "Diem la salutació."],
      resultado: "«Hola! Bon dia!»" },
    { enunciado: "Te'n vas a casa. Què dius?",
      pasos: ["Movem la mà.", "Diem adéu.", "Demà tornarem."],
      resultado: "«Adéu! Fins demà!»" },
  ],
  errores: [
    "Dir adéu quan arribem: quan arribem diem hola.",
    "Dir bon dia a la nit: a la nit diem bona nit.",
    "Saludar sense mirar la persona.",
  ],
  ejercicios: [
    { q: "Digues bon dia en llevar-te.", sol: "Per a la família: contesteu-li també en català." },
    { q: "Digues hola a la mestra.", sol: "En arribar a l'escola, mirant-la als ulls." },
    { q: "Fes adéu amb la mà.", sol: "En sortir de casa o en acabar una videotrucada." },
    { q: "Digues bona nit abans de dormir.", sol: "A tota la família i als peluixos." },
    { q: "Canta la cançó Bon dia.", sol: "Canteu el vídeo junts i feu els gestos." },
    { q: "Juga a què diem?", sol: "Dieu un moment del dia i que respongui la salutació." },
  ],
  quiz: [
    { q: "Quan arribem diem…", o: ["hola", "adéu", "bona nit"], a: 0, e: "Hola!" },
    { q: "Quan marxem diem…", o: ["hola", "adéu", "bon dia"], a: 1, e: "Adéu!" },
    { q: "Al matí diem…", o: ["bon dia", "bona nit", "adéu"], a: 0, e: "Bon dia!" },
    { q: "Per anar a dormir diem…", o: ["bona nit", "bon dia", "hola"], a: 0, e: "Bona nit!" },
    { q: "«Fins demà» vol dir…", o: ["ens veiem demà", "tinc gana", "hola"], a: 0, e: "Que demà ens tornarem a veure." },
    { q: "En saludar mirem…", o: ["la persona", "el sostre", "el terra"], a: 0, e: "Mirem la persona." },
  ],
  examen: [
    { q: "Què diem a la mestra en arribar?", o: ["Hola!", "Bona nit!", "Adéu!"], a: 0, e: "Hola, mestra!" },
    { q: "Quan surt la lluna diem…", o: ["bona nit", "bon dia", "hola"], a: 0, e: "Bona nit." },
    { q: "Saludar és ser…", o: ["amable", "trist", "lent"], a: 0, e: "Amable." },
  ],
  feynman: ["Hola quan arribo i adéu quan marxo", "Bon dia al matí", "Bona nit per anar a dormir"],
  mapa: mapa("HOLA!", "var(--inf)", [
    ["Hola", "quan arribo", A],
    ["Bon dia", "al matí", N],
    ["Adéu", "quan marxo", R],
    ["Bona nit", "a dormir", V],
  ], 220),
  tarjetas: [
    ["Quan arribo dic…", "Hola!"],
    ["Quan marxo dic…", "Adéu!"],
    ["Al matí dic…", "Bon dia!"],
    ["A la nit dic…", "Bona nit!"],
    ["Ens veiem demà", "Fins demà!"],
    ["Saludo amb…", "La mà"],
  ],
  familias: [
    "Saludeu en català en llevar-vos i en anar a dormir.",
    "Si no parleu català, aprengueu les salutacions amb ell: és un joc.",
    "Canteu la cançó Bon dia al matí.",
    "Feu adéu amb la mà en sortir de casa.",
  ],
  profesores: PROF("Primer contacte amb la llengua catalana: salutacions i comiats, rutines orals del dia", ["Cançó de bon dia a l'assemblea.", "Rutina d'adéu en acabar.", "Titella que només parla català."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
