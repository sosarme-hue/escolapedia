// Infantil 5 anys · Primeros pasos en catalán: Hola, com estàs? Tema escrit en català.
const { tema, mapa, svg, rot, big, nino, dibujos, charla, mural, vid, PROF_CA, R, A, V, N, M, W, K } = require("./_inf5b");

module.exports = tema({
  materia: "Primeros pasos en catalán",
  titulo: "Hola, com estàs?",
  ejemplosTitulo: "Ho fem junts",
  objetivos: ["Saludar i acomiadar-se en català: hola, bon dia, adéu", "Preguntar i respondre Com estàs? Estic bé", "Dir el nom: Em dic…"],
  claves: ["hola", "bon dia", "adéu", "Com estàs?", "Estic bé", "content", "trist", "Com et dius?"],
  pregunta: {
    texto: "Quan arribes a l'escola al matí, què dius a la mestra?",
    respuesta: "Diem <mark>Bon dia!</mark> o <mark>Hola!</mark> I després podem preguntar: <b>Com estàs?</b>",
  },
  bloques: [
    {
      html: `<h3>Hola! Bon dia!</h3><p>Quan arribem diem <mark>Hola!</mark></p><p>Al matí també diem <b>Bon dia!</b> A la tarda, <b>Bona tarda!</b></p><p>Saluda amb la mà i un somriure!</p><p>Així comencem el dia contents.</p>`,
      svg: dibujos("Un sol per a bon dia i una lluna per a bona nit", [["sol", "Bon dia!", M], ["luna", "Bona nit!", A]], { titulo: "Salutacions", nota: "Al matí · a la nit" }),
    },
    {
      html: `<h3>Adéu!</h3><p>Quan marxem diem <mark>Adéu!</mark></p><p>També podem dir <b>Fins demà!</b> si ens veurem l'endemà.</p><p>I a la nit, abans de dormir: <b>Bona nit!</b></p><p>Mou la mà quan marxes.</p>`,
      svg: charla("Diàleg: Adéu! Fins demà!", [["nina", "Adéu, Pau!", R], ["nino", "Adéu! Fins demà!", A]]),
    },
    {
      html: `<h3>Com estàs?</h3><p>Per saber com està algú preguntem <mark>Com estàs?</mark></p><p>Si estàs bé, respons: <b>Estic bé, gràcies!</b></p><p><i>Gràcies</i> és el que diem per agrair.</p><p>Si no estàs bé, també ho pots dir.</p>`,
      svg: charla("Diàleg: Com estàs? Estic bé, gràcies!", [["mama", "Hola! Com estàs?", A], ["nino", "Estic bé, gràcies!", V]]),
    },
    {
      html: `<h3>Content, trist, cansat</h3><p>També podem dir com ens sentim.</p><p><b>Estic content</b>. <b>Estic trist</b>. <b>Estic cansat</b>.</p><p>Fes la cara de cadascú davant del mirall!</p><p>Tots ens sentim diferent cada dia.</p>`,
      svg: dibujos("Cares: content, trist i cansat", [["feliz", "content", M], ["triste", "trist", A], ["cansado", "cansat", N]], { titulo: "Estic…" }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Saludar en català serveix per <mark>parlar amb tothom</mark>: a l'escola, a la botiga i al parc.</p><p>«Hola! Em dic Laia. Com et dius?» I ja tens un amic nou!</p>`,
      svg: charla("Diàleg: Com et dius? Em dic Laia.", [["nino", "Com et dius?", R], ["nina", "Em dic Laia!", A]]),
    },
    {
      html: `<h3>Joc: la roda dels noms</h3><p>Seiem en rotllana.</p><p>Cadascú diu <mark>Hola! Em dic…</mark> i el seu nom.</p><p>Tots responen: <b>Hola, …!</b> Al final, tothom diu <b>Adéu!</b></p><p>Qui recorda tots els noms?</p>`,
      svg: svg("Tres nens en rotllana es saluden", `${[[50, R], [130, A], [210, V]].map(([x, c], i) => nino(x, 166, { c, s: 0.85, pose: "arriba", nina: i === 1 })).join("")}${rot(130, 30, "Hola! Em dic…", { color: A, size: 16 })}`),
    },
  ],
  figura: {
    titulo: "Salutacions en català",
    svg: mural("Hola, bon dia, com estàs, estic bé i adéu", [["nino", "Hola!", "quan arribo", A], ["sol", "Bon dia!", "al matí", M], ["feliz", "Estic bé!", "com estàs?", V], ["nina", "Adéu!", "quan marxo", R]], "Hola, com estàs?"),
  },
  video: { ...vid("Eb4_MmcEues", "Hola, hola, com estàs? Bon dia!", "El Show De Pelina", 1264060), busqueda: "cançons infantils en català bon dia com estàs" },
  ejemplos: [
    { enunciado: "Arribem a l'escola al matí. Què diem?", pasos: ["És al matí: diem Bon dia!", "Preguntem a la mestra: Com estàs?", "Ella respon: Estic bé, gràcies!"], resultado: "ja sabem saludar en català." },
    { enunciado: "Un nen nou pregunta: Com et dius?", pasos: ["Ens pregunta el nom.", "Responem Em dic… i el nostre nom."], resultado: "«Em dic Jan»." },
  ],
  errores: [
    "Dir adéu quan arribem: quan arribem és hola; quan marxem, adéu.",
    "Respondre «sí» a Com estàs?: es respon Estic bé.",
    "Oblidar dir gràcies.",
  ],
  ejercicios: [
    { q: "Saluda la família en català quan et llevis.", sol: "Bon dia! Nota per a la família: responeu també en català." },
    { q: "Pregunta Com estàs? a un ninot i respon per ell.", sol: "Estic bé, gràcies!" },
    { q: "Fes la cara de content, trist i cansat.", sol: "Nota: digueu la paraula i que faci la cara." },
    { q: "Digues el teu nom en català.", sol: "Em dic… i el seu nom." },
    { q: "Acomiada't en català quan surtis de l'escola.", sol: "Adéu! Fins demà!" },
    { q: "Canta la cançó del vídeo fent els gestos.", sol: "Nota: atureu el vídeo per repetir." },
  ],
  quiz: [
    { q: "Quan arribes al matí dius…", o: ["Bon dia!", "Bona nit!", "Adéu!"], a: 0, e: "Al matí, bon dia." },
    { q: "Quan marxes dius…", o: ["Hola!", "Adéu!", "Gràcies!"], a: 1, e: "Adéu quan marxem." },
    { q: "Com estàs? Responc…", o: ["Estic bé!", "Em dic Pau", "Bona nit"], a: 0, e: "Estic bé, gràcies!" },
    { q: "Si estàs alegre, estàs…", o: ["trist", "content", "cansat"], a: 1, e: "Content = alegre." },
    { q: "Per dir el nom dic…", o: ["Em dic…", "Adéu…", "Tinc…"], a: 0, e: "Em dic Laia." },
    { q: "Abans d'anar a dormir dic…", o: ["Bon dia!", "Bona nit!", "Hola!"], a: 1, e: "A la nit, bona nit." },
  ],
  examen: [
    { q: "Hola es diu quan…", o: ["arribo", "marxo", "dormo"], a: 0, e: "Hola en arribar." },
    { q: "Com et dius? pregunta…", o: ["el nom", "com estàs", "l'edat"], a: 0, e: "Responem Em dic…" },
    { q: "Per agrair dic…", o: ["gràcies", "adéu", "trist"], a: 0, e: "Gràcies!" },
  ],
  feynman: ["Com saludo i m'acomiado en català", "Què responc a Com estàs?", "Com dic el meu nom"],
  mapa: mapa("HOLA!", "var(--pri)", [
    ["Arribo", "hola · bon dia", A],
    ["Marxo", "adéu · fins demà", R],
    ["Com estàs?", "Estic bé, gràcies!", V],
    ["El nom", "Em dic…", N],
  ], 220),
  tarjetas: [
    ["Al matí dic…", "Bon dia!"],
    ["Quan marxo dic…", "Adéu!"],
    ["Com estàs?", "Estic bé, gràcies!"],
    ["Alegre es diu…", "Content"],
    ["Com et dius?", "Em dic…"],
    ["A la nit dic…", "Bona nit!"],
  ],
  familias: [
    "Saludeu-vos en català al matí i doneu-vos la bona nit en català.",
    "Feu servir un ninot que «només parla català» per practicar.",
    "Canteu junts una cançó de bon dia en català.",
    "Saludeu en català a la botiga o al parc quan sigui possible.",
  ],
  profesores: PROF_CA("Primer contacte amb la llengua catalana: rutines orals de salutació i comiat, expressió d'estats d'ànim i presentació personal", ["Cançó de bon dia a l'assemblea.", "Targetes d'emocions per al Com estàs?", "Roda de noms amb Em dic…"]),
});
