// Infantil 3 anys · Primeros pasos en catalán: La meva família. Tema escrit en català, per llegir amb un adult. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, charla, mural, vid } = require("./_peque");
const { R, A, V, N, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Primeros pasos en catalán",
  curso: "3-anos",
  titulo: "La meva família",
  minutos: 10,
  objetivos: ["Dir mama, papa, nadó, avi i àvia", "Assenyalar cada persona en una foto de família", "Dir: estimo la meva família"],
  claves: ["família", "mama", "papa", "nadó", "avi", "àvia", "germà", "germana"],
  pregunta: {
    texto: "Qui viu amb tu a casa?",
    respuesta: "Les persones que ens cuiden i ens estimen són la nostra <mark>família</mark>. Cada família és diferent!",
  },
  bloques: [
    {
      html: `<h3>La mama i el papa</h3><p>Aquesta és la <mark>mama</mark>. Aquest és el <mark>papa</mark>.</p><p>Ens cuiden, ens abracen i juguen amb nosaltres. Hola, mama! Hola, papa!</p><p>T'estimo, mama! T'estimo, papa! I els fem una abraçada.</p>`,
      svg: dibujos("La mama i el papa", [["mama", "mama", R], ["papa", "papa", A]]),
    },
    {
      html: `<h3>El nadó</h3><p>Aquest és el <mark>nadó</mark>. És molt petit.</p><p>Xxxt! El nadó dorm al bressol. Parlem fluixet per no despertar-lo.</p><p>Dorm, nadó, dorm! Li cantem una cançó fluixeta.</p>`,
      svg: escena("El nadó dorm al bressol", [["cuna", 130, 96, 2.6], ["bebe", 130, 80, 1.3], ["t", 130, 160, "el nadó", V, 26], ["t", 214, 50, "Xxxt!", N, 22]]),
    },
    {
      html: `<h3>L'avi i l'àvia</h3><p>Aquest és l'<mark>avi</mark>. Aquesta és l'<mark>àvia</mark>.</p><p>Són els pares del papa o de la mama. Ens expliquen contes i ens fan petons!</p><p>Hola, avi! Hola, àvia! Quan vénen, els fem un petó.</p>`,
      svg: dibujos("L'avi i l'àvia", [["abuelo", "avi", V], ["abuela", "àvia", N]]),
    },
    {
      html: `<h3>Germà i germana</h3><p>Un nen de la família és un <mark>germà</mark>. Una nena és una <mark>germana</mark>.</p><p>Juguem junts i compartim les joguines. Tens germans?</p><p>Juguem junts i ens ajudem sempre.</p>`,
      svg: dibujos("Germà i germana", [["nino", "germà", A], ["nina", "germana", R]]),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Ara pots <mark>presentar</mark> la teva família.</p><p>Aquesta és la meva mama. Aquest és el meu avi. Estimo la meva família!</p><p>Aquest és el meu papa! Ara presenta tu algú.</p>`,
      svg: charla("Un nen presenta la seva família: aquesta és la meva mama", [["nino", "Aquesta és la meva mama!", A], ["mama", "Hola!", R], ["nino", "Estimo la meva família!", A]]),
    },
    {
      html: `<h3>Juguem!</h3><p>Aixequem una mà. Cada <mark>dit</mark> és una persona de la família.</p><p>El dit gros és el papa, després la mama… i el petit és el nadó!</p>`,
      svg: escena("La família dels dits: papa, mama i nadó", [["mano", 70, 96, 3], ["papa", 168, 56, 0.9], ["t", 214, 62, "papa", A, 16], ["mama", 168, 98, 0.9], ["t", 214, 104, "mama", R, 16], ["bebe", 168, 140, 0.9], ["t", 214, 146, "nadó", V, 16]], { titulo: "La família dels dits" }),
    },
  ],
  figura: {
    titulo: "La meva família",
    svg: mural("La família: mama, papa, nadó, avi, àvia, germà, germana", [["mama", "mama", "", R], ["papa", "papa", "", A], ["bebe", "nadó", "", V], ["abuelo", "avi", "", N], ["abuela", "àvia", "", V], ["nino", "germà", "", A], ["nina", "germana", "", R], ["corazon", "família", "estimo", N]], "La meva família"),
  },
  video: { ...vid("bDWy-dt3rMY", "El Pot Petit - Avis i àvies amb el Landry el Rumbero", "El Pot Petit", 494842), busqueda: "mare pare avi àvia cançó infantil" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Mirem una foto. Qui és?",
      pasos: ["Assenyalem una persona.", "És la mama o el papa?", "Ho diem en català."],
      resultado: "«És el papa!»" },
    { enunciado: "Què diem a l'àvia?",
      pasos: ["Li fem una abraçada.", "Li diem una cosa bonica."],
      resultado: "«T'estimo, àvia!»" },
  ],
  errores: [
    "Dir «abuelo» en català: diem avi.",
    "Dir «bebé»: en català és nadó.",
    "Pensar que totes les famílies són iguals: cada família és diferent i totes valen.",
  ],
  ejercicios: [
    { q: "Assenyala la mama en una foto.", sol: "Per a la família: feu servir fotos reals de casa." },
    { q: "Digues hola, avi! per telèfon.", sol: "En la propera trucada als avis." },
    { q: "Dibuixa la teva família.", sol: "Anomeneu en català cada persona que dibuixi." },
    { q: "Juga a la família dels dits.", sol: "Cada dit és una persona de la família." },
    { q: "Digues: aquest és el meu germà.", sol: "Si no té germans, amb un cosí o un amic." },
    { q: "Fes una abraçada i digues t'estimo.", sol: "Una abraçada ben forta." },
  ],
  quiz: [
    { q: "«Avi» en castellà és…", o: ["abuelo", "papá", "bebé"], a: 0, e: "Avi = abuelo." },
    { q: "«Àvia» és…", o: ["abuela", "mamá", "hermana"], a: 0, e: "Àvia = abuela." },
    { q: "«Nadó» és…", o: ["bebé", "perro", "abuelo"], a: 0, e: "Nadó = bebé." },
    { q: "«Germà» és…", o: ["hermano", "hermana", "papá"], a: 0, e: "Germà = hermano." },
    { q: "«Germana» és…", o: ["hermana", "abuela", "mamá"], a: 0, e: "Germana = hermana." },
    { q: "El nadó dorm al…", o: ["bressol", "cotxe", "jardí"], a: 0, e: "Al bressol." },
  ],
  examen: [
    { q: "Els pares de la mama són…", o: ["els avis", "els germans", "els nadons"], a: 0, e: "Els avis." },
    { q: "«Estimo la meva família» vol dir…", o: ["quiero a mi familia", "tengo sueño", "adiós"], a: 0, e: "Quiero a mi familia." },
    { q: "Les famílies són…", o: ["totes diferents", "totes iguals", "només de tres"], a: 0, e: "Cada família és diferent." },
  ],
  feynman: ["Mama, papa i nadó", "Avi i àvia", "Estimo la meva família"],
  mapa: mapa("FAMÍLIA", "var(--inf)", [
    ["Mama · papa", "ens cuiden", R],
    ["Nadó", "és petit", V],
    ["Avi · àvia", "contes i petons", N],
    ["Germà · germana", "juguem junts", A],
  ], 230),
  tarjetas: [
    ["abuelo", "avi"],
    ["abuela", "àvia"],
    ["bebé", "nadó"],
    ["hermano", "germà"],
    ["hermana", "germana"],
    ["Quiero a mi familia", "Estimo la meva família"],
  ],
  familias: [
    "Mireu fotos de família i anomeneu cada persona en català.",
    "Saludeu els avis en català en la propera visita.",
    "Jugueu a la família dels dits.",
    "Recordeu-li que totes les famílies són diferents i totes són bones.",
  ],
  profesores: PROF("Primer contacte amb la llengua catalana: vocabulari de la família, presentar-se i presentar, respecte a la diversitat familiar", ["Mural amb fotos de les famílies.", "Família dels dits amb titelles.", "Aquesta és la meva… a l'assemblea."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
