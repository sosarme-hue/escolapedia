// Primeros pasos en catalán, Infantil 4 años: Salutacions. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, sol, luna, estrella, suelo, charla, dibujos, mural, vid, R, A, V, N, M, G, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Primeros pasos en catalán",
  curso: "4-anos",
  titulo: "Salutacions",
  minutos: 15,
  objetivos: ["Saludar i acomiadar-se en català: hola, adéu", "Dir bon dia, bona tarda i bona nit", "Dir el nom: Em dic…"],
  claves: ["hola", "adéu", "bon dia", "bona nit", "em dic", "gràcies"],
  pregunta: {
    texto: "Quan arribes a l'escola, què dius a la mestra?",
    respuesta: "Diem <mark>Bon dia!</mark> o <mark>Hola!</mark> amb un somriure. I quan marxem, <b>Adéu!</b>",
  },
  bloques: [
    {
      html: `<h3>Hola!</h3><p>Quan trobem algú, el <mark>saludem</mark>.</p><p>Diem <b>Hola!</b> i movem la mà. Si és el matí, també podem dir <b>Bon dia!</b></p><p>Saludar és ser amable. Saluda el teu company!</p>`,
      svg: charla("Un nen i una nena se saluden: Hola! Bon dia!", [["nino", "Hola!", A], ["nina", "Bon dia!", R]]),
    },
    {
      html: `<h3>Bon dia, bona tarda, bona nit</h3><p>Al matí, amb el sol, diem <mark>Bon dia</mark>.</p><p>A la tarda, després de dinar, diem <b>Bona tarda</b>.</p><p>Quan surt la lluna i anem a dormir, diem <mark>Bona nit</mark>.</p>`,
      svg: svg("El sol del matí amb bon dia, la tarda i la lluna de nit amb bona nit", `<rect x="10" y="14" width="76" height="116" rx="10" fill="#bfe3ff"/><rect x="92" y="14" width="76" height="116" rx="10" fill="#ffd8a8"/><rect x="174" y="14" width="76" height="116" rx="10" fill="#1c2550"/>${sol(48, 62, 16)}${sol(130, 90, 14)}${luna(208, 54, 16)}${estrella(232, 94, 6, "#ffe9a0")}${rot(48, 152, "Bon dia", { size: 14, color: A, w: 800 })}${rot(130, 152, "Bona tarda", { size: 14, color: M, w: 800 })}${rot(212, 152, "Bona nit", { size: 14, color: N, w: 800 })}`),
    },
    {
      html: `<h3>Adéu!</h3><p>Quan marxem, ens <mark>acomiadem</mark>.</p><p>Diem <b>Adéu!</b> i movem la mà. També podem dir <b>Fins demà!</b> si ens veurem l'endemà.</p><p>Ens acomiadem de la mestra i dels amics.</p>`,
      svg: svg("Una nena a la porta de l'escola diu adéu amb la mà", `<rect x="160" y="40" width="70" height="110" rx="4" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/><circle cx="218" cy="98" r="4" fill="var(--ink)"/>${nino(90, 150, { pose: "canta", c: V, nina: true, s: 1.3 })}${suelo(150)}${rot(90, 30, "Adéu!", { size: 24, color: V, w: 800 })}${rot(130, 172, "Fins demà!", { color: G })}`),
    },
    {
      html: `<h3>Com et dius?</h3><p>Per saber el nom d'algú preguntem: <mark>Com et dius?</mark></p><p>I responem: <b>Em dic Pau</b>, <b>Em dic Laia</b>…</p><p>Ara tu: com et dius? Digues el teu nom en veu alta!</p>`,
      svg: charla("Una nena pregunta Com et dius i el nen respon Em dic Pau", [["nina", "Com et dius?", R], ["nino", "Em dic Pau.", A], ["nina", "Jo em dic Laia!", R]]),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Les salutacions ens ajuden a <mark>fer amics</mark> i a ser amables.</p><p>També diem paraules màgiques: <b>Si us plau</b> per demanar i <b>Gràcies</b> quan ens donen alguna cosa.</p>`,
      svg: dibujos("Paraules amables: hola, si us plau i gràcies", [["feliz", "Hola", A], ["mano", "Si us plau", V], ["corazon", "Gràcies", R]], { titulo: "Paraules amables" }),
    },
    {
      html: `<h3>Juguem: el cercle del bon dia</h3><p>Fem una <mark>rotllana</mark>. Un nen diu: <b>Bon dia, Laia!</b></p><p>La Laia respon: <b>Bon dia, Pau!</b> i saluda un altre amic.</p><p>Així fins que tothom ha saludat. Al final, cantem plegats!</p>`,
      svg: svg("Quatre nens en rotllana se saluden i diuen bon dia", `${[[50, A], [100, R], [160, V], [210, N]].map(([x, c], i) => nino(x, 150, { c, nina: i % 2 === 1, pose: i === 1 ? "arriba" : "pie", s: 0.95 })).join("")}${suelo(150)}${rot(130, 30, "Bon dia, Laia!", { size: 18, color: A, w: 800 })}${rot(130, 172, "en rotllana", { color: G })}`),
    },
  ],
  figura: {
    titulo: "Les salutacions",
    svg: mural("Quatre targetes: hola, bon dia amb el sol, bona nit amb la lluna i adéu", [["feliz", "Hola!", "quan arribem", A], ["sol", "Bon dia!", "al matí", M], ["luna", "Bona nit!", "per dormir", N], ["mano", "Adéu!", "quan marxem", R]], "Saludem en català"),
  },
  video: { ...vid("BF7w-xJUlwM", "Bon dia! (videoclip oficial)", "Dàmaris Gelabert", 42541176), busqueda: "cançó bon dia català infantil" },
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Són les nou del matí i arribes a l'escola. Què dius?", pasos: ["És al matí: hi ha sol.", "Saludem la mestra amb un somriure."], resultado: "Bon dia!" },
    { enunciado: "Et pregunten «Com et dius?». Què respons?", pasos: ["Comencem amb «Em dic…».", "Diem el nostre nom."], resultado: "Em dic… (i el teu nom)." },
  ],
  errores: [
    "Dir «Bona nit» al matí: bona nit és per quan és fosc i anem a dormir.",
    "Oblidar les paraules màgiques: si us plau i gràcies.",
    "Marxar sense acomiadar-se: diem adéu.",
  ],
  ejercicios: [
    { q: "Saluda la família en català quan et llevis.", sol: "Per a la família: respondre també en català ajuda a fer-ne rutina." },
    { q: "Digues bona nit al teu peluix abans de dormir.", sol: "Bona nit, osset!" },
    { q: "Respon: Com et dius?", sol: "Em dic… i el seu nom." },
    { q: "Demana aigua amb si us plau.", sol: "Aigua, si us plau!" },
    { q: "Acomiada't de la mestra en marxar.", sol: "Adéu! Fins demà!" },
    { q: "Canta la cançó del Bon dia.", sol: "Per a la família: el vídeo del tema serveix per cantar-la junts." },
  ],
  quiz: [
    { q: "Al matí diem…", o: ["Bon dia", "Bona nit", "Adéu"], a: 0, e: "Bon dia, amb el sol." },
    { q: "Per dormir diem…", o: ["Bona nit", "Hola", "Bon dia"], a: 0, e: "Bona nit, amb la lluna." },
    { q: "Quan marxem diem…", o: ["Adéu", "Hola", "Bon dia"], a: 0, e: "Ens acomiadem: adéu." },
    { q: "Com et dius? Responem…", o: ["Em dic Pau", "Bona tarda", "Gràcies"], a: 0, e: "Em dic i el nom." },
    { q: "Quan ens donen una cosa diem…", o: ["Gràcies", "Adéu", "Bona nit"], a: 0, e: "Donem les gràcies." },
    { q: "Després de dinar diem…", o: ["Bona tarda", "Bon dia", "Bona nit"], a: 0, e: "És la tarda." },
  ],
  examen: [
    { q: "Per demanar diem…", o: ["Si us plau", "Adéu", "Bona nit"], a: 0, e: "És una paraula màgica." },
    { q: "Hola serveix per…", o: ["Saludar", "Dormir", "Menjar"], a: 0, e: "Saludem amb hola." },
    { q: "Fins demà vol dir que…", o: ["Ens veurem demà", "Mai més", "Ara mateix"], a: 0, e: "Ens veurem l'endemà." },
  ],
  feynman: ["Saluda i acomiada't en català", "Digues el teu nom: Em dic…"],
  mapa: mapa("SALUTACIONS", "var(--inf)", [
    ["Hola · Bon dia", "quan arribem", A],
    ["Bona tarda", "després de dinar", M],
    ["Bona nit", "per dormir", N],
    ["Adéu", "quan marxem", R],
  ], 220),
  tarjetas: [
    ["Què diem al matí?", "Bon dia!"],
    ["I a la tarda?", "Bona tarda!"],
    ["I per anar a dormir?", "Bona nit!"],
    ["Què diem quan marxem?", "Adéu!"],
    ["Com et dius?", "Em dic…"],
    ["Què diem quan ens donen alguna cosa?", "Gràcies!"],
  ],
  familias: [
    "Feu servir bon dia i bona nit cada dia a casa: la rutina fixa les paraules.",
    "Saludeu en català els veïns o a la botiga perquè vegi que la llengua es fa servir.",
    "No el corregiu: repetiu la frase ben dita i amb alegria.",
    "Canteu junts cançons de salutació en català.",
  ],
  profesores: {
    saberes: "Comunicació i representació de la realitat: aproximació a la llengua catalana, fórmules de salutació, comiat i cortesia en situacions quotidianes (RD 95/2022 i Decret 21/2023 d'educació infantil de Catalunya, segon cicle, 4 anys).",
    ideas: ["Rutina del bon dia a l'assemblea amb el nom de cada infant.", "Cançó de benvinguda i de comiat.", "Titella que només parla català i saluda tothom."],
  },
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
