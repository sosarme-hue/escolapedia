// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "Les varietats del català",
  minutos: 35,
  objetivos: ["Situar el domini lingüístic del català", "Distingir els dos grans blocs dialectals i els principals dialectes", "Entendre la diferència entre dialecte, estàndard i registre"],
  claves: ["domini lingüístic", "català oriental", "català occidental", "dialecte", "valencià", "balear", "estàndard", "registre"],
  pregunta: {
    texto: "A Barcelona diuen «nen», a València «xiquet», a Mallorca «al·lot». És el mateix idioma?",
    respuesta: "Sí, <mark>és el mateix idioma</mark> amb <b>variants geogràfiques</b>, igual que «autobús» i «guagua» en castellà. El català té diversos dialectes, tots igual de vàlids, i un <b>estàndard</b> comú per als usos formals.",
  },
  bloques: [
    {
      html: `<h3>El domini lingüístic</h3><p>El català es parla en <mark>quatre estats</mark>: Espanya (Catalunya, Comunitat Valenciana, Illes Balears i la Franja d'Aragó, a més del Carxe, a Múrcia), Andorra (on és l'única llengua oficial), França (Catalunya del Nord) i Itàlia (l'Alguer, a Sardenya). Té uns <b>10 milions</b> de parlants.</p>`,
      svg: L.filas("Territoris on es parla català", [
        ["Espanya", "Cat., P. Val., Balears, Franja", "var(--pen)"],
        ["Andorra", "única llengua oficial", "var(--red)"],
        ["França", "Catalunya del Nord", "var(--inf)"],
        ["Itàlia", "l'Alguer (Sardenya)", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Dos grans blocs</h3><p>Segons la pronúncia de les vocals àtones, hi ha el bloc <b>oriental</b> (la a i la e àtones sonen igual, [ə]: «p<i>e</i>ra» i «c<i>a</i>sa») i el bloc <b>occidental</b> (les distingeix: [e] i [a]). També canvia la primera persona del present: <mark>jo canto</mark> (central), <mark>jo cante</mark> (valencià), <mark>jo cant</mark> (balear).</p>`,
      svg: L.tabla("Diferències entre blocs i dialectes", ["Dialecte", "«jo parlo»"], [
        ["central", "parlo"], ["nord-occidental", "parlo / parle"], ["valencià", "parle"], ["balear", "parl"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Els dialectes</h3><p><b>Oriental</b>: rossellonès, central, balear i alguerès. <b>Occidental</b>: nord-occidental (Lleida, la Franja, Andorra) i valencià. Cada dialecte té trets de <b>pronúncia</b>, de <b>lèxic</b> (noi / xiquet / al·lot) i de <b>morfologia</b> (article salat a les Balears: <i>es cotxe, sa casa</i>).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema dels dialectes catalans en dos blocs">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <rect x="12" y="14" width="114" height="152" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/>
          <rect x="134" y="14" width="114" height="152" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="3"/>
          <text x="69" y="38" font-size="14" fill="var(--pen)">ORIENTAL</text><text x="191" y="38" font-size="14" fill="var(--red)">OCCIDENTAL</text>
          <g font-size="12" fill="var(--ink)" font-weight="400">
            <text x="69" y="70">rossellonès</text><text x="69" y="96">central</text><text x="69" y="122">balear</text><text x="69" y="148">alguerès</text>
            <text x="191" y="80">nord-occidental</text><text x="191" y="124">valencià</text>
          </g>
        </g></svg>`,
    },
    {
      html: `<h3>Lèxic de cada zona</h3><p>Moltes coses tenen diversos noms, tots correctes: <i>noi / xiquet / al·lot</i>; <i>mirall / espill</i>; <i>escombra / granera</i>; <i>sortir / eixir</i>; <i>avui / hui</i>. Els diccionaris normatius (de l'IEC i l'AVL) recullen aquestes formes.</p>`,
      svg: L.tabla("Paraules diferents segons la zona", ["Central", "Valencià", "Balear"], [
        ["noi", "xiquet", "al·lot"], ["mirall", "espill", "espill"], ["escombra", "granera", "granera"], ["avui", "hui", "avui"],
      ], "var(--leaf)"),
    },
    {
      html: `<h3>Estàndard i registres</h3><p>L'<b>estàndard</b> és la varietat comuna i formal que fan servir l'escola, els mitjans i l'administració; té en compte tots els dialectes. Els <mark>registres</mark> canvien segons la situació (formal o col·loquial). Les institucions normatives són l'<b>Institut d'Estudis Catalans</b> (IEC) i l'<b>Acadèmia Valenciana de la Llengua</b> (AVL).</p>`,
      svg: L.filas("Estàndard, dialecte i registre", [
        ["Dialecte", "varietat del territori", "var(--leaf)"],
        ["Estàndard", "varietat comuna formal", "var(--pen)"],
        ["Registre", "segons la situació", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Una llengua, molts accents",
    svg: L.columnas("Exemples de variants dialectals catalanes", [
      ["Barcelona", "CENTRAL", ["Avui el noi…", "jo canto"], "var(--pen)"],
      ["Lleida", "NORD-OCC.", ["Avui el xic…", "jo canto / cante"], "var(--inf)"],
      ["València", "VALENCIÀ", ["Hui el xiquet…", "jo cante"], "var(--red)"],
      ["Palma", "BALEAR", ["Avui s'al·lot…", "jo cant"], "var(--leaf)"],
    ]),
  },
  video: { id: "N-OqUeLz0Tg", titulo: "Explicación fácil de los dialectos del catalán", canal: "blogdeciencia", vistas: 160031, megusta: 1651, busqueda: "dialectes del català" },
  quiz: [
    { q: "En quants estats es parla català?", o: ["Dos", "Quatre", "Sis"], a: 1, e: "Espanya, Andorra, França i Itàlia." },
    { q: "On és el català l'única llengua oficial?", o: ["A Andorra", "A Catalunya", "A l'Alguer"], a: 0, e: "Andorra té el català com a única llengua oficial." },
    { q: "Quin dialecte pertany al bloc occidental?", o: ["El balear", "El valencià", "El rossellonès"], a: 1, e: "Occidental: nord-occidental i valencià." },
    { q: "«Sa casa» amb article salat és típic del…", o: ["balear", "valencià", "central"], a: 0, e: "L'article salat (es, sa) és propi de les Illes." },
    { q: "Quina institució fixa la norma a la Comunitat Valenciana?", o: ["L'IEC", "L'AVL", "La RAE"], a: 1, e: "L'Acadèmia Valenciana de la Llengua." },
  ],
  examen: [
    { q: "«Hui» és la forma valenciana de…", o: ["avui", "ahir", "demà"], a: 0, e: "Hui = avui." },
    { q: "L'estàndard és…", o: ["la varietat comuna per als usos formals", "un dialecte de Barcelona", "el registre col·loquial"], a: 0, e: "Té en compte tots els dialectes." },
    { q: "Què diferencia el bloc oriental de l'occidental?", o: ["La pronúncia de les vocals àtones", "L'alfabet", "Els números"], a: 0, e: "L'oriental neutralitza a i e àtones en [ə]." },
  ],
  feynman: ["On es parla català", "Els dos blocs dialectals i un tret que els diferencia", "Els dialectes i tres paraules diferents segons la zona", "La diferència entre dialecte, estàndard i registre"],
  mapa: mapa("VARIETATS", "var(--eso)", [
    ["Domini", "4 estats · 10 milions", "var(--pen)"],
    ["Oriental", "central · balear…", "var(--inf)"],
    ["Occidental", "nord-occ. · valencià", "var(--red)"],
    ["Estàndard", "IEC · AVL", "var(--leaf)"],
  ]),
  tarjetas: [
    ["Domini lingüístic del català", "Catalunya, País Valencià, Balears, Franja, Carxe, Andorra, Catalunya del Nord i l'Alguer."],
    ["Bloc oriental", "Rossellonès, central, balear i alguerès."],
    ["Bloc occidental", "Nord-occidental i valencià."],
    ["Article salat", "Es, sa, ses: article propi del balear."],
    ["Estàndard", "Varietat comuna i formal; la regulen l'IEC i l'AVL."],
  ],
  familias: ["Busqueu en un mapa els territoris on es parla català.", "Escolteu junts un fragment d'IB3, À Punt i 3Cat i fixeu-vos en les diferències.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Les llengües i els seus parlants: domini lingüístic, variació dialectal i estàndard (RD 217/2022, Llengua Catalana i Literatura 4t; currículums autonòmics).",
    ideas: ["Mapa col·laboratiu de paraules dialectals de les famílies de l'aula.", "Escolta d'àudios de parlants de diferents zones.", "Debat sobre prejudicis lingüístics."],
  },
  fuentes: [
    L.BOE,
    { t: "Institut d'Estudis Catalans", url: "https://www.iec.cat/" },
    { t: "Acadèmia Valenciana de la Llengua", url: "https://www.avl.gva.es/" },
  ],
  revisado: "2026-11-12",
};
