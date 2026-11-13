// Infantil 5 anys · Primeros pasos en catalán: la roba. Tema escrit en català.
const { tema, mapa, svg, rot, big, ic, nino, dibujos, charla, mural, vid, PROF_CA, R, A, V, N, M, W, K } = require("./_inf5b");

module.exports = tema({
  materia: "Primeros pasos en catalán",
  titulo: "La roba",
  ejemplosTitulo: "Ho fem junts",
  objetivos: ["Dir el nom de peces de roba en català", "Dir el color de la roba: una samarreta vermella", "Fer servir Posa't… quan ens vestim"],
  claves: ["roba", "samarreta", "pantalons", "vestit", "faldilla", "mitjons", "sabates", "jaqueta", "posa't"],
  pregunta: {
    texto: "Quina roba portes avui? Saps com es diu «camiseta» en català?",
    respuesta: "En català és <mark>samarreta</mark>. I tot el que ens posem per vestir-nos és <b>la roba</b>.",
  },
  bloques: [
    {
      html: `<h3>La roba</h3><p>El que ens posem per vestir-nos és <mark>la roba</mark>.</p><p>La <b>samarreta</b>, els <b>pantalons</b>, el <b>vestit</b> i la <b>faldilla</b>.</p><p>Quina portes tu?</p><p>La roba ens tapa i ens protegeix.</p>`,
      svg: dibujos("Samarreta, pantalons, vestit i faldilla", [["camiseta", "samarreta", A], ["pantalon", "pantalons", R], ["vestido", "vestit", N], ["falda", "faldilla", V]]),
    },
    {
      html: `<h3>Als peus</h3><p>Als peus portem <mark>mitjons</mark>.</p><p>A sobre, les <b>sabates</b>.</p><p>Quan plou, ens posem les <b>botes</b> d'aigua.</p><p>Primer els mitjons i després les sabates. Mai al revés! Saps cordar-te les sabates?</p>`,
      svg: dibujos("Mitjons, sabates i botes", [["calcetin", "mitjons", V], ["zapato", "sabates", R], ["bota", "botes", M]]),
    },
    {
      html: `<h3>Per al fred</h3><p>Quan fa fred, ens posem la <mark>jaqueta</mark> o l'abric.</p><p>Al cap, el <b>barret</b>. Al coll, la <b>bufanda</b>.</p><p>I a les mans, els <b>guants</b>!</p>`,
      svg: dibujos("Abric, barret, bufanda i guants", [["abrigo", "abric", W], ["gorro", "barret", R], ["bufanda", "bufanda", R], ["guante", "guants", N]]),
    },
    {
      html: `<h3>Roba de colors</h3><p>En català el color va <mark>després</mark>.</p><p><b>Una samarreta blava</b>. <b>Un barret vermell</b>. <b>Uns mitjons verds</b>.</p><p>De quin color és la teva samarreta?</p>`,
      svg: dibujos("Un barret vermell, una samarreta blava i uns mitjons verds", [["gorro", "vermell", R], ["camiseta", "blava", A], ["calcetin", "verds", V]], { titulo: "De quin color és?" }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Així et pots <mark>vestir en català</mark> cada matí.</p><p>La mare o el pare diu: «<b>Posa't les sabates!</b>». I tu ho fas!</p><p>Així et vesteixes sol.</p>`,
      svg: charla("Diàleg: Posa't les sabates! Ja vaig!", [["mama", "Posa't les sabates!", R], ["nino", "Ja vaig! Les vermelles!", A]]),
    },
    {
      html: `<h3>Joc: la maleta</h3><p>Prepara una maleta de mentida.</p><p>Hi poses cada peça dient el nom: <mark>una samarreta, uns mitjons, un barret…</mark></p><p>Què t'has deixat?</p><p>Després ho treus tot dient els noms.</p>`,
      svg: svg("Una maleta oberta amb samarreta, mitjons i barret", `<rect x="40" y="70" width="180" height="90" rx="10" fill="${N}" opacity=".85"/><rect x="40" y="40" width="180" height="34" rx="8" fill="${N}" opacity=".55"/><path d="M110 40 v-12 h40 v12" stroke="${K}" stroke-width="4" fill="none"/>${ic("camiseta", 80, 112, 1.2)}${ic("calcetin", 130, 112, 1.2)}${ic("gorro", 180, 112, 1.2)}${rot(130, 174, "samarreta, mitjons, barret…", { color: K, size: 13 })}`),
    },
  ],
  figura: {
    titulo: "La roba",
    svg: mural("Vuit peces de roba en català", [["camiseta", "samarreta", "", A], ["pantalon", "pantalons", "", R], ["vestido", "vestit", "", N], ["falda", "faldilla", "", V], ["calcetin", "mitjons", "", V], ["zapato", "sabates", "", R], ["abrigo", "abric", "", A], ["gorro", "barret", "", N]], "Què portes avui?"),
  },
  video: { ...vid("MQXa_MvoEUM", "Roba d'hivern: vocabulari en català per a nens", "Smile and Learn - Català", 25144), busqueda: "la roba en català per a nens" },
  ejemplos: [
    { enunciado: "Com es diu «un gorro rojo»?", pasos: ["Gorro és barret. Rojo és vermell.", "En català el color va després: barret vermell."], resultado: "un barret vermell." },
    { enunciado: "El pare diu: Posa't la jaqueta!", pasos: ["Posa't vol dir que ens la posem.", "Jaqueta és la peça per al fred."], resultado: "em poso la jaqueta!" },
  ],
  errores: [
    "Dir «camiseta» en català: es diu samarreta.",
    "Confondre mitjons i sabates: els mitjons van a dins.",
    "Dir «calcetins»: en català són mitjons.",
  ],
  ejercicios: [
    { q: "Quan et vesteixis, digues el nom de cada peça en català.", sol: "Nota per a la família: samarreta, pantalons, mitjons, sabates…" },
    { q: "Assenyala: on és la teva samarreta?", sol: "Assenyala la seva samarreta." },
    { q: "Digues de quin color és la teva roba.", sol: "Per exemple: una samarreta blava." },
    { q: "Vesteix un ninot dient Posa't el barret, posa't l'abric.", sol: "Nota: jugueu per torns." },
    { q: "Separa la roba de fred: abric, barret, bufanda, guants.", sol: "Nota: feu-ho amb roba de veritat." },
    { q: "Mira el vídeo i repeteix les paraules.", sol: "Nota: atureu el vídeo per repetir." },
  ],
  quiz: [
    { q: "Camiseta en català és…", o: ["samarreta", "faldilla", "bufanda"], a: 0, e: "Samarreta." },
    { q: "Calcetines en català són…", o: ["sabates", "mitjons", "guants"], a: 1, e: "Mitjons." },
    { q: "Per al fred ens posem…", o: ["l'abric", "la faldilla curta", "res"], a: 0, e: "L'abric o la jaqueta." },
    { q: "Un barret vermell és…", o: ["un gorro rojo", "un abrigo azul", "un zapato rojo"], a: 0, e: "Vermell = rojo." },
    { q: "Posa't les sabates vol dir…", o: ["treu-te-les", "posa-te-les", "mira-les"], a: 1, e: "Posa't = ponte." },
    { q: "Tot el que ens posem per vestir-nos és…", o: ["la roba", "la casa", "el menjar"], a: 0, e: "La roba." },
  ],
  examen: [
    { q: "Guantes en català són…", o: ["guants", "botes", "mitjons"], a: 0, e: "Guants." },
    { q: "Vestido en català és…", o: ["vestit", "barret", "sabata"], a: 0, e: "Vestit." },
    { q: "Si plou ens posem…", o: ["botes", "sandàlies", "barret de palla"], a: 0, e: "Botes d'aigua." },
  ],
  feynman: ["El nom de cinc peces de roba en català", "On va el color: samarreta blava", "Què vol dir Posa't…"],
  mapa: mapa("LA ROBA", "var(--pri)", [
    ["Cos", "samarreta, pantalons, vestit", A],
    ["Peus", "mitjons, sabates, botes", R],
    ["Fred", "abric, barret, bufanda, guants", V],
    ["Posa't…", "per vestir-nos", N],
  ], 240),
  tarjetas: [
    ["Camiseta", "Samarreta"],
    ["Pantalón", "Pantalons"],
    ["Zapatos", "Sabates"],
    ["Calcetines", "Mitjons"],
    ["Abrigo", "Abric"],
    ["Posa't el barret!", "¡Ponte el gorro!"],
  ],
  familias: [
    "Quan us vestiu al matí, dieu el nom de la roba en català.",
    "Jugueu a vestir ninots dient Posa't…",
    "Plegueu junts la roba neta i digueu el nom i el color.",
    "Feu una maleta de joc per a un viatge imaginari.",
  ],
  profesores: PROF_CA("Primer contacte amb la llengua catalana: vocabulari de la roba, colors i l'ordre Posa't… en les rutines", ["Cistella de disfresses per anomenar peces.", "Cançó amb gestos de vestir-se.", "Joc de la maleta en petit grup."]),
});
