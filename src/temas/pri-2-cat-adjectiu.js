// Llengua Catalana 2n de Primària: l'adjectiu. Tema escrit en català. Dibuixos propis en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, parejas } = require("./_peque");
const { V, PROFCA, FONTS } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Catalana y Literatura",
  curso: "2-primaria",
  titulo: "L'adjectiu",
  minutos: 25,
  objetivos: ["Saber que l'adjectiu diu com és el nom", "Trobar adjectius en frases i fer-los servir per descriure", "Fer que l'adjectiu concordi amb el nom"],
  claves: ["adjectiu", "qualitat", "descriure", "concordança"],
  pregunta: {
    texto: "Si et dic «un gat», te l'imagines bé? I si et dic «un gat negre, petit i dormilega»?",
    respuesta: "Ara sí que te l'imagines. <b>negre</b>, <b>petit</b> i <b>dormilega</b> diuen com és el gat: són <mark>adjectius</mark>.",
  },
  bloques: [
    {
      html: `<h3>Paraules que diuen com és</h3><p>Els <mark>adjectius</mark> són paraules que diuen <b>com és</b> una cosa o una persona.</p><p>Acompanyen el nom: <i>casa <b>gran</b></i>, <i>flor <b>vermella</b></i>, <i>nen <b>alegre</b></i>.</p><p>Els adjectius diuen <b>qualitats</b>: el color, la mida, la forma, com se sent… Són com els colors d'un dibuix!</p>`,
      svg: dibujos("Casa gran, flor vermella i nen alegre", [["casa", "gran", A], ["flor", "vermella", R], ["feliz", "alegre", Ve]], { titulo: "Com és?", nota: "casa gran · flor vermella · nen alegre" }),
    },
    {
      html: `<h3>Adjectius de color i de mida</h3><p>Molts adjectius diuen el <mark>color</mark>: <i>vermell</i>, <i>blau</i>, <i>verd</i>, <i>groc</i>.</p><p>Altres diuen la <mark>mida</mark>: <i>gran</i>, <i>petit</i>, <i>alt</i>, <i>baix</i>, <i>llarg</i>, <i>curt</i>.</p><p>«Un elefant <b>gran</b> i <b>gris</b>.» «Una formiga <b>petita</b> i <b>negra</b>.» Veus com ara te'ls imagines millor?</p>`,
      svg: parejas("Elefant gran i gris; formiga petita i negra", [["elefante", "gran", "hormiga", "petita"], ["elefante", "gris", "hormiga", "negra"]], { izq: "elefant", der: "formiga", color: A, color2: R, flecha: "·" }),
    },
    {
      html: `<h3>Adjectius de forma i de tacte</h3><p>Els adjectius també diuen la <mark>forma</mark>: <i>rodó</i>, <i>quadrat</i>, <i>punxegut</i>.</p><p>I com és quan el <mark>toquem</mark>: <i>suau</i>, <i>aspre</i>, <i>dur</i>, <i>tou</i>, <i>fred</i>, <i>calent</i>.</p><p>«La pilota és <b>rodona</b> i <b>tova</b>.» «El gel és <b>fred</b> i <b>dur</b>.» Fes servir els sentits per trobar adjectius.</p>`,
      svg: dibujos("Pilota rodona, ós suau i neu freda", [["pelota", "rodona", A], ["oso", "suau", Ve], ["nieve", "freda", N]], { titulo: "Forma i tacte", nota: "rodona · suau · freda" }),
    },
    {
      html: `<h3>Adjectius de com som</h3><p>Amb adjectius descrivim les <mark>persones</mark>: com són i com se senten.</p><p>Per fora: <i>alt</i>, <i>ros</i>, <i>bru</i>. Per dins: <i>simpàtic</i>, <i>valent</i>, <i>generós</i>, <i>divertit</i>.</p><p>I com estan: <i>content</i>, <i>trist</i>, <i>cansat</i>. Quins adjectius et descriuen a tu?</p>`,
      svg: dibujos("Cares contenta, trista i cansada", [["feliz", "content", Ve], ["triste", "trist", A], ["cansado", "cansat", N]], { titulo: "Com estàs avui?", nota: "Els adjectius també diuen com ens sentim" }),
      video: V("cadjV", "els adjectius en català per a nens"),
    },
    {
      html: `<h3>On és l'adjectiu?</h3><p>L'adjectiu sol anar <mark>a prop del nom</mark>, normalment darrere.</p><p>«Un gos <b>petit</b>.» «Una nit <b>fosca</b>.»</p><p>També pot anar després de <i>és</i> o <i>està</i>: «El gos <b>és</b> petit». «La sopa <b>està</b> calenta.» Pregunta: <b>com és?</b> La resposta és l'adjectiu.</p>`,
      svg: frase("El gos és petit. La sopa està calenta", [["El gos", A], ["és", K], ["petit", R], ["/"], ["La sopa", A], ["està", K], ["calenta", R]], { titulo: "Pregunta: com és?", nota: "En vermell, els adjectius", fs: 22 }),
    },
    {
      html: `<h3>L'adjectiu concorda</h3><p>L'adjectiu es posa <mark>igual que el seu nom</mark>: masculí o femení, un o molts.</p><p><i>gat blanc</i>, <i>gata blanc<b>a</b></i>, <i>gats blanc<b>s</b></i>, <i>gates blanqu<b>es</b></i>.</p><p>Si no concorden, sona estrany: «la gata blanc». Alguns adjectius no canvien en masculí i femení: <i>nen alegre</i>, <i>nena alegre</i>.</p>`,
      svg: parejas("Gat blanc, gata blanca; gats blancs, gates blanques", [["gato", "gat blanc", "gato", "gata blanca"], ["gato", "gats blancs", "gato", "gates blanques"]], { izq: "masculí", der: "femení", color: A, color2: R, flecha: "·" }),
    },
    {
      html: `<h3>Descriure amb adjectius</h3><p>Per <mark>descriure</mark> bé, fes servir uns quants adjectius.</p><p>Primer digues què és: <i>La meva motxilla</i>. Després com és per fora: <i>és blava i gran</i>. Després altres coses: <i>té una butxaca petita</i>.</p><p>«La meva motxilla és blava i gran. Té una butxaca petita. És molt còmoda.» Així tothom la reconeixeria!</p>`,
      svg: lista("La meva motxilla és blava, gran, amb una butxaca petita i còmoda", [["La meva motxilla és blava", A], ["És gran", Ve], ["Té una butxaca petita", N], ["És molt còmoda", R]], { titulo: "Descric la meva motxilla", marca: "✓" }),
    },
    {
      html: `<h3>Per a què serveix?</h3><p>Els adjectius fan que el que expliquem sigui <mark>més clar i més bonic</mark>.</p><p>Si perds la jaqueta, diràs: «És <b>vermella</b>, <b>llarga</b> i amb caputxa». Així t'ajudaran a buscar-la.</p><p>Als contes, els adjectius ens fan imaginar: «un bosc <b>fosc</b>», «un drac <b>ferotge</b>». Fan por i emoció!</p>`,
      svg: charla("Una nena diu que ha perdut l'abric; el nen pregunta com és; ella diu vermell i llarg", [["nina", "He perdut l'abric.", R], ["nino", "Com és?", A], ["nina", "Vermell, llarg i suau.", R], ["nino", "És aquí!", A]]),
    },
    {
      html: `<h3>Joc: qui és?</h3><p>Pensa en un animal sense dir-lo. Descriu-lo només amb <mark>adjectius</mark>.</p><p>«És <b>gran</b>, <b>gris</b> i té les orelles <b>enormes</b>.» És l'elefant!</p><p>«És <b>petit</b>, <b>lent</b> i porta una casa <b>dura</b>.» És el cargol! Guanya qui endevini amb menys pistes.</p>`,
      svg: charla("Endevina: és petit, lent i porta una casa: el cargol", [["nino", "Petit i molt lent.", A], ["nina", "Alguna cosa més?", R], ["nino", "Porta una casa dura.", A], ["caracol", "Soc el cargol!", Ve]]),
    },
  ],
  figura: {
    titulo: "L'adjectiu",
    svg: mural("Adjectius de color, mida, forma i de com som", [["flor", "vermella", "color", R], ["elefante", "gran", "mida", A], ["pelota", "rodona", "forma", Ve], ["feliz", "alegre", "com som", N]], "L'adjectiu diu com és el nom i concorda amb ell"),
  },
  video: V("cadjV", "els adjectius en català per a nens"),
  ejemplosTitulo: "Ho fem junts",
  ejemplos: [
    { enunciado: "Busca l'adjectiu: «Tinc una pilota nova».",
      pasos: ["Busca el nom: pilota.", "Pregunta: com és la pilota?", "És nova."],
      resultado: "l'adjectiu és «nova»." },
    { enunciado: "Completa: «La casa és …» (alt).",
      pasos: ["casa és femení: la casa.", "L'adjectiu ha de ser femení.", "alt → alta."],
      resultado: "La casa és alta." },
    { enunciado: "Descriu una poma amb tres adjectius.",
      pasos: ["Color: vermella.", "Forma: rodona.", "Gust: dolça."],
      resultado: "La poma és vermella, rodona i dolça." },
  ],
  errores: [
    "Confondre l'adjectiu amb el nom: a «gat negre», l'adjectiu és «negre».",
    "No fer concordar: «les flors vermell» està malament; és «les flors vermelles».",
    "Fer servir sempre els mateixos adjectius (bonic, bo): busca'n de més precisos.",
    "Pensar que només hi ha adjectius de color: també de mida, forma, caràcter…",
  ],
  ejercicios: [
    { q: "Digues tres adjectius de color.", sol: "Per exemple: vermell, blau, verd." },
    { q: "Busca l'adjectiu: «El sol és brillant».", sol: "brillant." },
    { q: "Contrari de «gran».", sol: "petit." },
    { q: "Completa: «unes flors …» (bonic).", sol: "boniques." },
    { q: "Completa: «un gos …» (simpàtic).", sol: "simpàtic." },
    { q: "Descriu la teva fruita preferida amb dos adjectius.", sol: "Per exemple: el plàtan és groc i dolç." },
    { q: "Digues un adjectiu per al gel.", sol: "fred, dur, relliscós…" },
    { q: "Busca els adjectius: «Un ratolí gris i ràpid».", sol: "gris i ràpid." },
    { q: "Com et sents avui? Digues-ho amb un adjectiu.", sol: "Resposta lliure: content, cansat, tranquil…" },
    { q: "Corregeix: «La nena està cansat».", sol: "La nena està cansada." },
  ],
  quiz: [
    { q: "L'adjectiu diu…", o: ["com és una cosa", "què fa", "quants n'hi ha"], a: 0, e: "Diu qualitats." },
    { q: "Quin és un adjectiu?", o: ["taula", "blau", "córrer"], a: 1, e: "blau." },
    { q: "Adjectiu a «un cotxe ràpid»:", o: ["un", "cotxe", "ràpid"], a: 2, e: "Com és? Ràpid." },
    { q: "Quina pregunta troba l'adjectiu?", o: ["com és?", "qui?", "quan?"], a: 0, e: "Com és?" },
    { q: "Completa: «la taula …»", o: ["rodó", "rodona", "rodons"], a: 1, e: "Femení singular." },
    { q: "«Suau» és un adjectiu de…", o: ["tacte", "color", "nombre"], a: 0, e: "Com és quan el toquem." },
    { q: "Completa: «els gats …»", o: ["negre", "negres", "negra"], a: 1, e: "Masculí plural." },
    { q: "Quin adjectiu diu com se sent algú?", o: ["alt", "trist", "quadrat"], a: 1, e: "trist." },
    { q: "Quin NO és adjectiu?", o: ["valent", "petit", "saltar"], a: 2, e: "saltar és una acció." },
    { q: "«Nen alegre» i «nena …»", o: ["alegra", "alegre", "alegres"], a: 1, e: "alegre no canvia." },
  ],
  examen: [
    { q: "Adjectiu a «Tinc una samarreta verda»:", o: ["samarreta", "verda", "tinc"], a: 1, e: "verda." },
    { q: "Completa: «unes cases …»", o: ["alt", "altes", "alta"], a: 1, e: "Femení plural." },
    { q: "«Rodó» diu…", o: ["la forma", "el color", "el gust"], a: 0, e: "La forma." },
    { q: "Quina frase està bé?", o: ["El gos és petita", "El gos és petit", "La gos és petit"], a: 1, e: "Concorden." },
  ],
  feynman: ["Què és un adjectiu", "Quines qualitats diuen els adjectius", "Per què l'adjectiu concorda amb el nom"],
  mapa: mapa("L'ADJECTIU", "var(--pri)", [
    ["Què és", "diu com és: casa gran", A],
    ["Qualitats", "color, mida, forma, caràcter", R],
    ["Pregunta", "com és?", Ve],
    ["Concorda", "gata blanca, gats blancs", N],
  ], 240),
  tarjetas: [
    ["Què és un adjectiu?", "Una paraula que diu com és una cosa"],
    ["Pregunta per trobar-lo", "Com és?"],
    ["Adjectiu de color", "vermell, blau…"],
    ["Adjectiu de mida", "gran, petit…"],
    ["Adjectiu de com ens sentim", "content, trist…"],
    ["«la flor …» (vermell)", "vermella"],
    ["«els gossos …» (blanc)", "blancs"],
    ["Adjectiu a «sol brillant»", "brillant"],
  ],
  familias: [
    "Jugueu a «qui és?» descrivint animals només amb adjectius.",
    "Mentre cuineu, descriviu aliments: cruixent, tou, dolç, salat.",
    "Demaneu-li que descrigui la seva joguina preferida amb tres adjectius.",
    "Llegiu un conte i busqueu junts els adjectius del drac o de la princesa.",
  ],
  profesores: PROFCA("Reflexió sobre la llengua: l'adjectiu qualificatiu, el seu ús per descriure i la concordança en gènere i nombre amb el nom", ["Capsa misteriosa: descriure objectes pel tacte.", "Retrat d'un company amb cinc adjectius.", "Endevinalles d'animals fetes amb adjectius."]),
  fuentes: FONTS,
  revisado: "2026-11-13",
};
