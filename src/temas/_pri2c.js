// Ayudas del lote C de 2º de Primaria (Lengua Castellana y Lengua Catalana). No es un tema: empieza por "_".
// Vídeos buscados con tools/videos.py (13-11-2026). Ninguno se repite en otros cursos ni lotes.
// [id, título, canal, vistas]: «V» es el vídeo general del tema y «B» los de bloque.
const { vid } = require("./_peque");

const BOE = { t: "Real Decreto 157/2022, enseñanzas mínimas de la Educación Primaria (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296" };
const FUENTES = [BOE];
const FONTS = [BOE];
const PROF = (saberes, ideas) => ({ saberes: `${saberes} (RD 157/2022, primer ciclo, 2º curso).`, ideas });
const PROFCA = (saberes, ideas) => ({ saberes: `${saberes} (RD 157/2022 i Decret 175/2022 de Catalunya, primer cicle, 2n curs).`, ideas });

const L = {
  // Lengua Castellana
  abcV: ["TedRoA8lMc8", "El orden alfabético", "La Profe Noemí", 605670],
  abcB: ["KsT289W3ZNc", "La canción del abecedario de la A a la Z", "Smile and Learn - Español", 2870679],
  abcB2: ["OskfBGraJZk", "Cómo usar el diccionario", "FlexFlix Kids en Español", 1181839],
  vocV: ["b_aUnwukZp8", "Canción de las consonantes", "Doremila", 2058848],
  vocB: ["n6_SSEJHadQ", "El sonido de las letras del abecedario", "Smile and Learn - Español", 10775244],
  silV: ["7gbXrkiSpZ8", "Las sílabas para niños: aprende a leer y escribir", "Escuela de Aprendices", 7639191],
  silB: ["m2-i8Hce5oQ", "Cómo separar en sílabas", "FlexFlix Kids en Español", 2830056],
  silB2: ["8Bl1jLFJJRc", "La sílaba tónica", "Smile and Learn - Español", 293215],
  susV: ["p0eyWoajuP8", "El sustantivo y sus clases", "Happy Learning Español", 7149266],
  susB: ["zcV_zb_eA_E", "Los sustantivos comunes y propios para niños", "Peques Aprenden Jugando", 378490],
  susB2: ["QZm06yftTqM", "Sustantivo individual y colectivo", "El Mundo Mágico de Carmel", 132114],
  adjV: ["s2KUBF-Ef3U", "¿Qué son los adjetivos calificativos?", "FlexFlix Kids en Español", 3928478],
  adjB: ["qk1YBn5OTcE", "Los adjetivos: animales", "Smile and Learn - Español", 1343055],
  verV: ["F31XS-rjABA", "¿Qué es un verbo?", "FlexFlix Kids en Español", 5127162],
  verB: ["YvKybV9KFxg", "Los verbos para niños: caminar, saltar, comer, dormir…", "Smile and Learn - Español", 393821],
  verB2: ["ritbJ01knnM", "Los tiempos verbales para niños de primaria", "Clases Particulares en Ávila", 539648],
  genV: ["7HZbTJH0WqQ", "Sustantivos: género y número", "Aula chachi", 185058],
  genB: ["nXqxh7kieLA", "El sustantivo: género masculino y femenino", "La BiBlioTHeKa", 205119],
  genB2: ["Dkh2Zqu59OM", "Singular y plural para niños", "MunDoPeKes", 233750],
  sinV: ["zug6q_X0qcg", "Los antónimos para niños: ¿qué son los antónimos?", "Smile and Learn - Español", 638951],
  sinB: ["25psHg4kQFQ", "Los sinónimos: ¿qué son los sinónimos?", "Mundo Divertido de Niños", 225861],
  cquV: ["6XbQAxadnuM", "Güe, güi: ¿cuándo usar la diéresis?", "123 Andrés", 469114],
  cquB: ["-F5_lCkiadE", "Aprender a leer las sílabas ca, co, cu, ce, ci", "mslearning4kids", 553560],
  cquB2: ["A7JkFauTCbc", "Sílabas ga, go, gu", "Mi Jardín Infantil", 702698],
  rrV: ["zWf3SYRLqEU", "M antes de P y B: gramática y ortografía para niños", "Smile and Learn - Español", 233998],
  rrB: ["EHdg6r1t_4w", "Sílabas rra, rre, rri, rro, rru", "El Mono Sílabo", 722263],
  cueV: ["uLnBJMqcXOI", "El cuento y sus partes", "Aula chachi", 1228536],
  cueB: ["kws9_Wm8DMU", "Fábula del león y el ratón para niños", "guiainfantil", 3856235],
  cueB2: ["iY81Nhj3Ysc", "El viento y el sol: fábula de Esopo", "audio cuentos infantiles", 1032102],
  poeV: ["aCHBJ88JLx0", "11 poemas para niños de primaria", "Padres en la escuela", 3063993],
  poeB: ["tN-6seOZioU", "Retahílas infantiles: rimas", "Canta Maestra", 634772],
  poeB2: ["owiC_XbDx-Q", "Adivinanzas para niños fáciles: frutas", "Happy Happy", 1799777],
  // Llengua Catalana
  cabcV: ["NqBx-OmTQrA", "L'alfabet català: les 26 lletres", "OK CATALÀ", 254140],
  cabcB: ["8U-w4F3upDU", "Abecedari A B C D E F: vídeo educatiu per aprendre les lletres", "Smile and Learn - Català", 33393],
  cvocV: ["JB8y4mZLI0c", "Aprèn les vocals cantant", "Gil Ratataplam", 52870],
  cvocB: ["aBNmqvVQwmM", "Consciència fonològica: consonants", "SonaSonia AL", 11993],
  cvocB2: ["3HKgAXw-iTA", "Aprèn la lletra R amb el rap d'en Ramon", "Smile and Learn - Català", 13375],
  csilV: ["7EGQJP69imM", "Llengua catalana: la síl·laba", "teachgmz", 8564],
  csilB: ["Y58mJvn_NcY", "Separació de síl·labes en català", "OK CATALÀ", 96303],
  cnomV: ["3RaL-zV7Hog", "Els noms en català: comuns, propis i més", "OK CATALÀ", 45193],
  cnomB: ["UQ69WvARDag", "Noms individuals i col·lectius", "OK CATALÀ", 21416],
  cadjV: ["pV5gSEw07eU", "Els adjectius: persones. Vocabulari per a nens en català", "Smile and Learn - Català", 9856],
  cadjB: ["s4nQJ39aINk", "Els adjectius: animals. Vocabulari per a nens en català", "Smile and Learn - Català", 6711],
  cadjB2: ["NgtrgjuOJw4", "Els adjectius", "Aprenc Més", 37727],
  cverV: ["maBwdJ_eIbE", "Los verbos para niños: leer, jugar, volar, beber…", "Smile and Learn - Español", 138279],
  cverB: ["rfNC3Q9eGqY", "Els temps verbals més importants en català", "Couch Polyglot", 84130],
  cgenV: ["gx82Ls3P_k8", "Els articles", "Aprenc Més", 14657],
  cgenB: ["f2xbiSgfh5c", "Llengua catalana: el substantiu", "teachgmz", 17670],
  cconV: ["lcK5J2cTK3k", "Els tres porquets: contes meravellosos en català", "Kids Tales en català", 216016],
  cconB: ["zvXtu5uyDzQ", "Cargol treu banya", "Contes i Cançons Infantils", 3103294],
  cconB2: ["sQjy2qs1To4", "Endevinalles: 10 endevinalles infantils en català", "El Rincón de Infantil", 15647],
};
const V = (k, busqueda) => { const [id, titulo, canal, vistas] = L[k]; return busqueda ? { ...vid(id, titulo, canal, vistas), busqueda } : vid(id, titulo, canal, vistas); };

module.exports = { V, L, PROF, PROFCA, FUENTES, FONTS };
