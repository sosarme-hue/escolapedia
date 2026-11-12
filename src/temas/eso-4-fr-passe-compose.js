// Francés 4º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "4-eso",
  titulo: "Le présent et le passé composé",
  minutos: 40,
  objetivos: ["Conjugar en presente los verbos en -er, -ir y los irregulares más usados", "Formar el passé composé con avoir y con être", "Hacer la concordancia del participio con être"],
  claves: ["présent", "verbes en -er", "passé composé", "auxiliaire", "participe passé", "accord", "la maison d'être"],
  pregunta: {
    texto: "«J'ai mangé» y «Je suis allé». Los dos están en pasado. ¿Por qué uno usa «ai» (tengo) y el otro «suis» (soy)?",
    respuesta: "Porque el <b>passé composé</b> tiene <mark>dos auxiliares</mark>. Casi todos los verbos usan <b>avoir</b>, pero un grupo de verbos de movimiento y cambio de estado (aller, venir, partir, naître…) y todos los pronominales usan <b>être</b>. Con être, además, el participio concuerda: «Elle est allé<b>e</b>».",
  },
  bloques: [
    {
      html: `<h3>El presente de los verbos en -er</h3><p>Son el 90 % de los verbos. Se quita <i>-er</i> y se añade: <mark>-e, -es, -e, -ons, -ez, -ent</mark>. Ojo: -e, -es, -e y -ent <b>no se pronuncian</b>: <i>je parle, tu parles, il parle, ils parlent</i> suenan igual.</p>`,
      svg: L.tabla("Presente del verbo parler", ["Pronom", "parler"], [
        ["je", "parle"], ["tu", "parles"], ["nous", "parlons"], ["ils", "parlent"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Irregulares imprescindibles</h3><p>Además de être y avoir: <b>aller</b> (je vais, nous allons, ils vont), <b>faire</b> (je fais, nous faisons, ils font), <b>prendre</b> (je prends, nous prenons, ils prennent), <b>venir</b> (je viens, ils viennent), <b>pouvoir</b> (je peux) y <b>vouloir</b> (je veux).</p>`,
      svg: L.tabla("Verbos irregulares en presente", ["", "je", "ils"], [
        ["aller", "vais", "vont"], ["faire", "fais", "font"], ["prendre", "prends", "prennent"], ["venir", "viens", "viennent"],
      ], "var(--red)"),
    },
    {
      html: `<h3>El passé composé con avoir</h3><p><b>avoir en presente + participio</b>. Expresa acciones <mark>terminadas</mark> en el pasado: «Hier, j'<b>ai regardé</b> un film». Participios: -er → <b>-é</b> (mangé), -ir → <b>-i</b> (fini). Irregulares: fait, pris, eu, été, vu, dit, écrit, bu, lu.</p>`,
      svg: L.frase("Passé composé con avoir: Hier, j'ai regardé un film", [
        ["Hier,", "", "var(--line)"], ["j'ai", "avoir", "var(--pen)"], ["regardé", "participe", "var(--red)"], ["un film.", "", "var(--line)"],
      ], "avoir + participe passé"),
    },
    {
      html: `<h3>El passé composé con être</h3><p>Lo llevan unos 15 verbos de <b>movimiento o cambio</b> y todos los pronominales (<i>je me suis levé</i>). Un truco es la «<mark>maison d'être</mark>»: aller, venir, arriver, partir, entrer, sortir, monter, descendre, tomber, rester, naître, mourir, passer, retourner (y sus derivados como revenir, devenir).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La casa de être: verbos de movimiento alrededor de una casa">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M70 80 L 130 30 L 190 80 V 150 H 70 Z" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/>
        <rect x="116" y="110" width="28" height="40" fill="var(--pen)" opacity=".8"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle">
          <text x="130" y="72" fill="var(--pen)">ÊTRE</text>
          <text x="130" y="96" fill="var(--ink)" font-size="11">rester</text>
          <text x="40" y="96" fill="var(--leaf)">entrer</text><text x="222" y="96" fill="var(--red)">sortir</text>
          <text x="40" y="128" fill="var(--leaf)">arriver</text><text x="222" y="128" fill="var(--red)">partir</text>
          <text x="40" y="44" fill="var(--inf)">monter</text><text x="222" y="44" fill="var(--inf)">descendre</text>
          <text x="40" y="168" fill="var(--muted)">naître</text><text x="222" y="168" fill="var(--muted)">mourir</text>
          <text x="130" y="170" fill="var(--ink)">aller · venir · tomber</text>
        </g></svg>`,
    },
    {
      html: `<h3>La concordancia con être</h3><p>Con <b>être</b>, el participio <mark>concuerda con el sujeto</mark> como un adjetivo: + <b>e</b> en femenino, + <b>s</b> en plural. «Il est parti» / «Elle est parti<b>e</b>» / «Ils sont parti<b>s</b>» / «Elles sont parti<b>es</b>». Con avoir, en general, no concuerda.</p>`,
      svg: L.filas("Concordancia del participio con être", [
        ["il", "est parti", "var(--pen)"], ["elle", "est partie", "var(--red)"],
        ["ils", "sont partis", "var(--leaf)"], ["elles", "sont parties", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "¿Avoir o être?",
    svg: L.columnas("Elegir el auxiliar del passé composé", [
      ["casi todos los verbos", "AVOIR", ["j'ai mangé", "nous avons fini"], "var(--pen)"],
      ["movimiento · cambio", "ÊTRE", ["je suis allé(e)", "elle est née"], "var(--red)"],
      ["verbos pronominales", "ÊTRE", ["je me suis levé(e)", "ils se sont lavés"], "var(--leaf)"],
    ]),
  },
  video: { id: "3ut4sE0GQKQ", titulo: "El passé composé en francés: ¡no te compliques!", canal: "ProfeOriZulu", vistas: 645203, megusta: 26939, busqueda: "passé composé francés explicación" },
  quiz: [
    { q: "«Nous ___ (parler) français.»", o: ["parlons", "parlez", "parlent"], a: 0, e: "Nous → -ons." },
    { q: "«Ils ___ (aller) au cinéma.»", o: ["allent", "vont", "vais"], a: 1, e: "Aller es irregular: ils vont." },
    { q: "Passé composé de «manger» con je:", o: ["je suis mangé", "j'ai mangé", "j'ai manger"], a: 1, e: "Avoir + participio en -é." },
    { q: "«Elle ___ arrivée hier.»", o: ["a", "est", "ai"], a: 1, e: "Arriver usa être." },
    { q: "«Elles sont ___.» (partir)", o: ["parti", "partie", "parties"], a: 2, e: "Con être, concordancia femenino plural: -es." },
  ],
  examen: [
    { q: "Participio de «faire»:", o: ["faité", "fait", "fais"], a: 1, e: "Irregular: fait." },
    { q: "«Je me ___ levée à sept heures.»", o: ["suis", "ai", "est"], a: 0, e: "Los pronominales usan être." },
    { q: "¿Qué verbo NO usa être?", o: ["venir", "tomber", "regarder"], a: 2, e: "Regarder usa avoir: j'ai regardé." },
  ],
  feynman: ["Las terminaciones del presente de los verbos en -er", "Cinco irregulares en presente", "Cómo se forma el passé composé con avoir", "Qué verbos usan être y cuándo concuerda el participio"],
  mapa: mapa("PASSÉ COMPOSÉ", "var(--eso)", [
    ["Présent -er", "-e -es -e -ons -ez -ent", "var(--pen)"],
    ["Avoir +", "participe: mangé, fini", "var(--leaf)"],
    ["Être +", "aller, venir, partir…", "var(--red)"],
    ["Accord", "elle est partie", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Terminaciones del presente en -er", "-e, -es, -e, -ons, -ez, -ent."],
    ["Passé composé", "Auxiliar (avoir o être) en presente + participio pasado."],
    ["Participios irregulares", "fait, pris, eu, été, vu, dit, écrit, bu, lu."],
    ["Verbos con être", "Movimiento y cambio (aller, venir, partir, naître…) y pronominales."],
    ["Concordancia con être", "El participio concuerda con el sujeto: elle est partie, ils sont partis."],
  ],
  familias: ["Pedidle que os cuente en francés tres cosas que hizo el fin de semana.", "Dibujad juntos la «maison d'être» y pegadla en su habitación.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: presente de indicativo y passé composé; elección del auxiliar y concordancia (RD 217/2022, Segunda Lengua Extranjera 4º; nivel A2 del MCER).",
    ideas: ["Diario de las vacaciones en passé composé.", "Juego de mímica con verbos de la maison d'être.", "Corregir textos con errores de auxiliar y concordancia."],
  },
  fuentes: [
    L.BOE,
    { t: "TV5MONDE Apprendre le français: le passé composé", url: "https://apprendre.tv5monde.com/" },
    { t: "Le Conjugueur (Le Figaro)", url: "https://leconjugueur.lefigaro.fr/" },
  ],
  revisado: "2026-11-12",
};
