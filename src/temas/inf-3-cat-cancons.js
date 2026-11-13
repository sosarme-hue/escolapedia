// Infantil 3 anys · Primeros pasos en catalán: Cançons en català. Tema escrit en català, per llegir amb un adult. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, mural, vid } = require("./_peque");
const { R, A, V, N, S, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Primeros pasos en catalán",
  curso: "3-anos",
  titulo: "Cançons en català",
  minutos: 10,
  objetivos: ["Cantar cançons curtes en català", "Moure el cos amb la música", "Aprendre una cançó popular: Sol, solet"],
  claves: ["cançó", "cantar", "ballar", "picar de mans", "Sol, solet", "rotllana"],
  pregunta: {
    texto: "Saps alguna cançó en català?",
    respuesta: "N'hi ha moltes i molt divertides! Cantant <mark>aprenem paraules</mark> noves en català.",
  },
  bloques: [
    {
      html: `<h3>Cantem!</h3><p>Cantar ens fa estar <mark>contents</mark>.</p><p>Cantem a casa, a l'escola i al cotxe. Cantem sols o amb els amics. La, la, la!</p><p>Quina és la teva cançó preferida? Canta-la ara!</p>`,
      svg: escena("Dos infants canten junts", [["nino", 80, 96, 2], ["nina", 180, 96, 2], ["t", 130, 48, "♪ ♫ ♪", N, 32], ["t", 130, 160, "Cantem!", A, 26]]),
    },
    {
      html: `<h3>Sol, solet</h3><p>Una cançó molt antiga diu: <mark>«Sol, solet, vine'm a veure, vine'm a veure…»</mark></p><p>La cantaven els avis quan eren petits. La cantem amb ells?</p><p>Mirem el sol i el saludem amb la mà.</p>`,
      svg: escena("El sol somriu: Sol, solet, vine'm a veure", [["sol", 130, 70, 2.6], ["t", 130, 148, "Sol, solet,", S, 26], ["t", 130, 172, "vine'm a veure!", R, 18]]),
    },
    {
      html: `<h3>Piquem de mans</h3><p>Moltes cançons es canten <mark>picant de mans</mark>.</p><p>Pica, pica, pica! També piquem de peus i movem el cap. Tot el cos canta!</p><p>Prova de cantar només amb les mans, sense veu!</p>`,
      svg: dibujos("Cantem amb el cos: mans, peus i cap", [["mano", "mans", R], ["zapato", "peus", A], ["feliz", "cap", V]], { titulo: "Cantem amb el cos" }),
    },
    {
      html: `<h3>La rotllana</h3><p>Ens agafem de les mans i fem una <mark>rotllana</mark>.</p><p>Donem voltes cantant. Quan s'acaba la cançó, ens ajupim tots alhora!</p><p>Que divertit! Tornem-hi una altra vegada, ara més de pressa!</p>`,
      svg: escena("Infants agafats de les mans fent una rotllana", [["svg", `<circle cx="130" cy="102" r="50" fill="none" stroke="var(--line)" stroke-width="4" stroke-dasharray="8 8"/>`], ["nino", 130, 54, 1], ["nina", 180, 102, 1], ["nino", 130, 150, 1], ["nina", 80, 102, 1], ["corazon", 130, 102, 1]], { titulo: "La rotllana" }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Les cançons ens ajuden a <mark>recordar paraules</mark>.</p><p>Ens fan riure, ballar i estar junts. I ens agermanen amb els avis!</p><p>Pregunta als avis quines cançons cantaven quan eren petits.</p>`,
      svg: dibujos("Les cançons serveixen per aprendre, ballar i estar amb els avis", [["libro", "aprendre", A], ["feliz", "ballar", R], ["abuela", "avis", V]]),
    },
    {
      html: `<h3>Juguem!</h3><p>Posem música i <mark>ballem</mark>. Quan para la música… <mark>estàtua!</mark></p><p>Ningú no es mou! Qui es mou, perd. Tornem a començar!</p><p>Ara poc a poc… i estàtua una altra vegada!</p>`,
      svg: escena("Joc de les estàtues: ballem i estàtua", [["feliz", 70, 80, 1.8], ["t", 70, 146, "ballem!", V, 26], ["nieve", 190, 80, 1.8], ["t", 190, 146, "estàtua!", A, 26]], { titulo: "Ballem i… estàtua!" }),
    },
  ],
  figura: {
    titulo: "Cançons en català",
    svg: mural("Cançons: cantar, Sol solet, picar de mans, rotllana", [["guitarra", "cantar", "la, la, la", R], ["sol", "Sol, solet", "cançó antiga", S], ["mano", "mans", "pica, pica", A], ["corazon", "rotllana", "tots junts", V]], "Cançons en català"),
  },
  video: { ...vid("4jVSaapPujY", "Dàmaris Gelabert - ELS MOSQUITS (Videoclip Oficial)", "Dàmaris Gelabert", 400538956), busqueda: "cançons infantils en català" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Cantem Sol, solet.",
      pasos: ["Mirem el sol del dibuix.", "Diem a poc a poc: Sol, solet.", "Afegim: vine'm a veure."],
      resultado: "«Sol, solet, vine'm a veure!»" },
    { enunciado: "Fem una rotllana.",
      pasos: ["Ens agafem de les mans.", "Donem voltes cantant.", "Ens ajupim al final."],
      resultado: "Una rotllana divertida!" },
  ],
  errores: [
    "Voler entendre totes les paraules: n'hi ha prou amb cantar i moure's.",
    "Cantar cridant: cantem amb veu bonica.",
    "Canviar cada dia de cançó: repetir la mateixa ajuda a aprendre-la.",
  ],
  ejercicios: [
    { q: "Canta Sol, solet amb un adult.", sol: "Per a la família: si no la sabeu, mireu-ne un vídeo junts." },
    { q: "Pica de mans amb la música.", sol: "Seguiu el ritme junts." },
    { q: "Fes una rotllana amb la família.", sol: "Agafeu-vos de les mans i doneu voltes cantant." },
    { q: "Juga a les estàtues.", sol: "Pareu la música i que es quedi quiet." },
    { q: "Balla la cançó dels mosquits.", sol: "Feu els gestos del vídeo." },
    { q: "Canta una cançó a un peluix.", sol: "Que li canti el que ha après." },
  ],
  quiz: [
    { q: "«Cançó» en castellà és…", o: ["canción", "casa", "cuento"], a: 0, e: "Cançó = canción." },
    { q: "Sol, solet…", o: ["vine'm a veure", "bona nit", "adéu"], a: 0, e: "Vine'm a veure!" },
    { q: "Picar de mans és…", o: ["dar palmas", "dormir", "correr"], a: 0, e: "Dar palmas." },
    { q: "A la rotllana ens agafem…", o: ["de les mans", "dels peus", "del cap"], a: 0, e: "De les mans." },
    { q: "Quan para la música fem…", o: ["l'estàtua", "una migdiada", "un salt"], a: 0, e: "Estàtua!" },
    { q: "Cantar ens fa estar…", o: ["contents", "tristos", "enfadats"], a: 0, e: "Contents." },
  ],
  examen: [
    { q: "«Ballar» és…", o: ["bailar", "beber", "barrer"], a: 0, e: "Ballar = bailar." },
    { q: "Sol, solet és una cançó…", o: ["molt antiga", "en anglès", "per dormir el gos"], a: 0, e: "Molt antiga, la cantaven els avis." },
    { q: "Cantem amb veu…", o: ["bonica", "cridanera", "enfadada"], a: 0, e: "Bonica." },
  ],
  feynman: ["Cantem i ballem en català", "Sol, solet, vine'm a veure", "Piquem de mans i fem rotllana"],
  mapa: mapa("CANÇONS", "var(--inf)", [
    ["Cantar", "la, la, la", R],
    ["Sol, solet", "cançó antiga", S],
    ["Picar de mans", "pica, pica", A],
    ["Rotllana", "tots junts", V],
  ], 230),
  tarjetas: [
    ["canción", "cançó"],
    ["cantar", "cantar"],
    ["bailar", "ballar"],
    ["dar palmas", "picar de mans"],
    ["corro", "rotllana"],
    ["Sol, solet…", "vine'm a veure!"],
  ],
  familias: [
    "Poseu cançons infantils en català al cotxe o al bany.",
    "Demaneu als avis que li cantin les cançons de quan eren petits.",
    "Repetiu la mateixa cançó uns quants dies.",
    "Jugueu a les estàtues amb música.",
  ],
  profesores: PROF("Primer contacte amb la llengua catalana: cançó popular i tradicional, ritme, joc de rotllana", ["Sol, solet a l'assemblea.", "Jocs de rotllana al pati.", "Dansa i estàtua amb cançons catalanes."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
