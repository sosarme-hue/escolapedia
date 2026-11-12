// Llengua Catalana i Literatura 4t d'ESO. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "4-eso",
  titulo: "La literatura de postguerra",
  minutos: 40,
  objetivos: ["Explicar la situació del català després de 1939: prohibició, exili i resistència", "Conèixer Mercè Rodoreda i La plaça del Diamant", "Identificar Espriu, Pere Calders, Vicent Andrés Estellés i Llorenç Villalonga"],
  claves: ["postguerra", "exili", "censura", "La plaça del Diamant", "Rodoreda", "Espriu", "Pere Calders", "Estellés"],
  pregunta: {
    texto: "Després de la Guerra Civil, el català es va prohibir a l'escola, a la premsa i als llibres. Com creus que van continuar escrivint els autors en català?",
    respuesta: "Amb molt d'esforç: uns des de l'<mark>exili</mark> (Mèxic, França, Xile), altres <mark>en la clandestinitat</mark>, publicant en edicions petites o guardant els textos al calaix. Gràcies a ells, la literatura catalana no es va interrompre.",
  },
  bloques: [
    {
      html: `<h3>El context: prohibició i exili</h3><p>Amb la dictadura franquista (1939-1975), el català queda <mark>prohibit</mark> en l'ensenyament i la vida pública, i hi ha una dura <b>censura</b>. Molts escriptors s'exilien. A poc a poc, als anys 50 i 60, es tornen a publicar llibres i neixen premis com el <b>Sant Jordi</b> (1960) i editorials com Edicions 62.</p>`,
      svg: L.linea("La literatura catalana sota el franquisme", [
        ["1939", "prohibició i exili", "var(--muted)"],
        ["1948", "Espriu: Primera història d'Esther", "var(--red)"],
        ["1962", "Rodoreda: La plaça del Diamant", "var(--pen)"],
        ["1962", "neix Edicions 62", "var(--inf)"],
        ["1975", "fi de la dictadura", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Mercè Rodoreda</h3><p>És l'escriptora catalana <mark>més traduïda</mark>. Des de l'exili va escriure <i>La plaça del Diamant</i> (1962), on la <b>Colometa</b> explica en primera persona, amb un llenguatge senzill i poètic, la seva vida a Gràcia abans, durant i després de la guerra. Altres obres: <i>Mirall trencat</i>, <i>Aloma</i>.</p>`,
      svg: L.filas("La plaça del Diamant", [
        ["Narradora", "la Colometa, en 1a persona", "var(--pen)"],
        ["Escenari", "el barri de Gràcia", "var(--leaf)"],
        ["Temps", "República, guerra, postguerra", "var(--red)"],
        ["Símbol", "els coloms", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Salvador Espriu</h3><p>Poeta i dramaturg, va reflexionar sobre la <b>mort</b>, la memòria i el destí col·lectiu. A <mark><i>La pell de brau</i></mark> (1960) parla de «Sepharad» (Espanya) i demana convivència i diàleg entre els pobles. També va escriure <i>Primera història d'Esther</i>.</p>`,
      svg: L.dialogo("Versos de La pell de brau d'Espriu", [
        ["Espriu", "Diversos són els homes", "var(--red)"],
        ["", "i diverses les parles,", "var(--red)"],
        ["", "i han convingut molts noms a un sol amor.", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Pere Calders i la narrativa</h3><p><b>Pere Calders</b>, exiliat a Mèxic, escriu contes on <mark>allò fantàstic irromp en la vida quotidiana</mark> amb ironia: <i>Cròniques de la veritat oculta</i>, <i>Invasió subtil</i>. <b>Llorenç Villalonga</b> (Mallorca) escriu <i>Bearn o la sala de les nines</i>, sobre la decadència de l'aristocràcia.</p>`,
      svg: L.tabla("Narradors de postguerra", ["Autor", "Obra"], [
        ["Pere Calders", "Cròniques de la veritat oculta"], ["L. Villalonga", "Bearn"], ["M. Rodoreda", "Mirall trencat"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>La poesia: Estellés i la cançó</h3><p><b>Vicent Andrés Estellés</b> (València) escriu sobre la vida quotidiana, l'amor i la por amb un llenguatge directe: el <i>Llibre de meravelles</i>. Als anys 60, la <mark>Nova Cançó</mark> (Raimon, Lluís Llach, Maria del Mar Bonet) porta la poesia en català a milers de persones.</p>`,
      svg: L.filas("Poesia i cançó", [
        ["V. A. Estellés", "Llibre de meravelles", "var(--leaf)"],
        ["Nova Cançó", "Raimon · Llach · Bonet", "var(--red)"],
      ], "la poesia arriba a tothom"),
    },
  ],
  figura: {
    titulo: "Escriure en català després de 1939",
    svg: L.columnas("Autors de postguerra: narrativa, poesia, teatre i cançó", [
      ["narrativa", "RODOREDA", ["La plaça", "del Diamant"], "var(--pen)"],
      ["poesia i teatre", "ESPRIU", ["La pell", "de brau"], "var(--red)"],
      ["conte fantàstic", "CALDERS", ["Cròniques de la", "veritat oculta"], "var(--inf)"],
      ["poesia", "ESTELLÉS", ["Llibre de", "meravelles"], "var(--leaf)"],
    ]),
  },
  video: { id: "eTR7vPtwfyY", titulo: "Teoria de La plaça del Diamant, Mercè Rodoreda", canal: "akaelprofe", vistas: 34981, megusta: 1004, busqueda: "literatura catalana de postguerra Rodoreda Espriu" },
  quiz: [
    { q: "Què va passar amb el català després de 1939?", o: ["Es va prohibir a l'escola i a la vida pública", "Es va fer obligatori", "No va canviar res"], a: 0, e: "La dictadura el va prohibir i hi havia censura." },
    { q: "Qui narra La plaça del Diamant?", o: ["La Colometa", "En Quimet", "Un narrador omniscient"], a: 0, e: "La Natàlia, a qui diuen Colometa, en primera persona." },
    { q: "La pell de brau és de…", o: ["Salvador Espriu", "Pere Calders", "Llorenç Villalonga"], a: 0, e: "Salvador Espriu, 1960." },
    { q: "Els contes de Pere Calders barregen…", o: ["la vida quotidiana i el fantàstic", "la guerra i la història", "la ciència i la tècnica"], a: 0, e: "Amb ironia i humor." },
    { q: "Quin moviment musical va portar la poesia catalana a milers de persones?", o: ["La Nova Cançó", "El rock urbà", "L'òpera"], a: 0, e: "Raimon, Llach, Maria del Mar Bonet…" },
  ],
  examen: [
    { q: "On es va exiliar Pere Calders?", o: ["A Mèxic", "A Itàlia", "Al Japó"], a: 0, e: "Hi va viure més de vint anys." },
    { q: "Bearn és una novel·la de…", o: ["Llorenç Villalonga", "Mercè Rodoreda", "Vicent Andrés Estellés"], a: 0, e: "Novel·la mallorquina sobre la decadència aristocràtica." },
    { q: "Vicent Andrés Estellés era de…", o: ["el País Valencià", "Mallorca", "Andorra"], a: 0, e: "Va néixer a Burjassot (València)." },
  ],
  feynman: ["La situació del català durant la dictadura", "De què tracta La plaça del Diamant", "Què demana Espriu a La pell de brau", "Què tenen d'especial els contes de Calders"],
  mapa: mapa("POSTGUERRA", "var(--eso)", [
    ["Context", "prohibició · exili · censura", "var(--muted)"],
    ["Narrativa", "Rodoreda · Calders", "var(--pen)"],
    ["Poesia", "Espriu · Estellés", "var(--red)"],
    ["Resistència", "Sant Jordi · Nova Cançó", "var(--leaf)"],
  ], 240),
  tarjetas: [
    ["La plaça del Diamant", "Novel·la de Mercè Rodoreda (1962), narrada per la Colometa."],
    ["Mercè Rodoreda", "L'escriptora catalana més traduïda; va escriure des de l'exili."],
    ["La pell de brau", "Llibre de poemes de Salvador Espriu (1960) sobre la convivència."],
    ["Pere Calders", "Contes on el fantàstic entra en la vida quotidiana."],
    ["Nova Cançó", "Moviment musical dels anys 60 en català: Raimon, Llach, Bonet."],
  ],
  familias: ["Pregunteu als avis com era l'escola i si hi parlaven català.", "Escolteu junts una cançó de Raimon o Lluís Llach i comenteu-ne la lletra.", "Repasseu les targetes del pas 6 dos minuts al dia durant la setmana."],
  profesores: {
    saberes: "Educació literària: la literatura catalana de postguerra, exili i resistència cultural; lectura de fragments i contes (RD 217/2022, Llengua Catalana i Literatura 4t; currículums autonòmics).",
    ideas: ["Lectura d'un conte de Calders i escriptura d'un final alternatiu.", "Ruta literària per Gràcia seguint La plaça del Diamant.", "Relacionar poemes musicats per la Nova Cançó amb el seu context."],
  },
  fuentes: [
    L.BOE,
    { t: "Fundació Mercè Rodoreda (IEC)", url: "https://www.fundaciomercerodoreda.cat/" },
    { t: "Associació d'Escriptors en Llengua Catalana: Salvador Espriu", url: "https://www.escriptors.cat/autors/esprius" },
  ],
  revisado: "2026-11-12",
};
