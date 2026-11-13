// Ayudas para Física y Química de 3º ESO a nivel libro (lote 3).
// Usa los mismos dibujos SVG de 260 × 180 que 4º ESO (ajustan la letra para no salirse) y añade
// los dibujos, figura y mapa de la versión anterior de cada tema (_eso3L3-base.js) y sus vídeos.
// Vídeos buscados con tools/videos.py (13-11-2026); ninguno se repite en otros temas ni ramas.
const H = require("./_eso4L5");
const OLD = require("./_eso3L3-base");

const VID = {
 "atomo-modelos": {
  "video": {
   "id": "yHa3R7cUzmU",
   "titulo": "MODELOS ATÓMICOS explicación completa fácil y sencilla",
   "canal": "Lagartija's vlogs",
   "vistas": 887027,
   "megusta": 0,
   "busqueda": "modelos atómicos"
  },
  "bvideos": [
   {
    "id": "LS3N5hOxRPE",
    "titulo": "Modelos Atómicos [Fácil y Rápido]",
    "canal": "A Cierta Ciencia",
    "vistas": 969611,
    "megusta": 0
   },
   {
    "id": "SQhPVTvHpQk",
    "titulo": "Isótopos, número de masa, número atómico, protones, electrones, neutrones, tabla de isótopos",
    "canal": "Quimicalino",
    "vistas": 207492,
    "megusta": 0
   },
   {
    "id": "jzYXFcDcmFg",
    "titulo": "¿Qué es la RADIOACTIVIDAD?",
    "canal": "CuriosaMente",
    "vistas": 867231,
    "megusta": 0
   }
  ]
 },
 "el-movimiento": {
  "video": {
   "id": "QjYdiIq2weQ",
   "titulo": "Movimiento Rectilíneo Uniforme MRU | Ejemplo 1",
   "canal": "Matemáticas profe Alex",
   "vistas": 1103651,
   "megusta": 0,
   "busqueda": "MRU y MRUA"
  },
  "bvideos": [
   {
    "id": "TcFFPXUKC-c",
    "titulo": "MRU gráficas",
    "canal": "Física en Acción",
    "vistas": 553076,
    "megusta": 0
   },
   {
    "id": "Kz7_3wp5Wmc",
    "titulo": "Movimiento Rectilíneo Uniformemente Acelerado MRUA | Ejemplo 1",
    "canal": "Matemáticas profe Alex",
    "vistas": 1163831,
    "megusta": 0
   },
   {
    "id": "dWMz_asGLsI",
    "titulo": "Caída libre - MRUA | Física",
    "canal": "LearnFree en Español",
    "vistas": 137839,
    "megusta": 0
   }
  ]
 },
 "electricidad-circuitos": {
  "video": {
   "id": "8g2PUJB48as",
   "titulo": "¿QUE ES LA ELECTRICIDAD? VOLTAJE E INTENSIDAD",
   "canal": "HRom",
   "vistas": 539642,
   "megusta": 0,
   "busqueda": "corriente eléctrica intensidad voltaje"
  },
  "bvideos": [
   {
    "id": "izDKIyCPRWE",
    "titulo": "Aprende la LEY DE OHM - ejercicios",
    "canal": "math2me",
    "vistas": 2543126,
    "megusta": 0
   },
   {
    "id": "1aPGR9RRwTg",
    "titulo": "Circuito en serie y en paralelo. Diferencias y características.",
    "canal": "Ruben Sebastian",
    "vistas": 493683,
    "megusta": 0
   },
   {
    "id": "9qWYeA5y_r0",
    "titulo": "Potencia y energía eléctrica: ¿Cuánto costará?",
    "canal": "Ruben Sebastian",
    "vistas": 254971,
    "megusta": 0
   }
  ]
 },
 "elementos-compuestos-tabla": {
  "video": {
   "id": "-2ymBr8LYSs",
   "titulo": "Aprende la TABLA PERIÓDICA en 7 minutos",
   "canal": "Amigos de la Química",
   "vistas": 7378544,
   "megusta": 0,
   "busqueda": "tabla periódica"
  },
  "bvideos": [
   {
    "id": "YJ-XDj_KrHY",
    "titulo": "La tabla periódica: Clasificación de elementos | Química | Khan Academy en Español",
    "canal": "KhanAcademyEspañol",
    "vistas": 3309019,
    "megusta": 0
   },
   {
    "id": "xfvuQSJD2HM",
    "titulo": "Tipos de Enlaces Químicos. Iónico, Covalente y Metálico",
    "canal": "Lallett",
    "vistas": 1435647,
    "megusta": 0
   },
   {
    "id": "J-U6fVdS3ns",
    "titulo": "Hallar MASA MOLECULAR o Masa MOLAR En 5 PASOS",
    "canal": "Susi Profe",
    "vistas": 1732519,
    "megusta": 0
   }
  ]
 },
 "energia-fuentes": {
  "video": {
   "id": "iO7GUgcfJL8",
   "titulo": "La ENERGÍA explicada: fuentes, tipos, propiedades, aplicaciones",
   "canal": "Astraway",
   "vistas": 306365,
   "megusta": 0,
   "busqueda": "qué es la energía"
  },
  "bvideos": [
   {
    "id": "cL4H9Vwd8v4",
    "titulo": "Energía CINÉTICA Qué es, fórmula y problemas",
    "canal": "Susi Profe",
    "vistas": 1183843,
    "megusta": 0
   },
   {
    "id": "hYuNxhL111E",
    "titulo": "Energía Cinética, Potencial y Mecánica",
    "canal": "La Profe Joha",
    "vistas": 204938,
    "megusta": 0
   },
   {
    "id": "XIoSncKUd2k",
    "titulo": "COMO FUNCIONAN las TURBINAS EÓLICAS y PRODUCEN ENERGÍA",
    "canal": "Fabricando ",
    "vistas": 1005983,
    "megusta": 0
   }
  ]
 },
 "materia-propiedades": {
  "video": {
   "id": "f3j0OSP-Qiw",
   "titulo": "Propiedades de la Materia (Ejemplos Esenciales)",
   "canal": "Al fin entendí",
   "vistas": 401391,
   "megusta": 0,
   "busqueda": "propiedades de la materia"
  },
  "bvideos": [
   {
    "id": "LNJ0gNppvqI",
    "titulo": "Cómo Medir Líquidos en una Probeta",
    "canal": "Muñoz Tutoriales",
    "vistas": 48634,
    "megusta": 0
   },
   {
    "id": "l6f2wDgxcoY",
    "titulo": "QUÍMICA. Ejercicio de densidad.",
    "canal": "Amigos de la Química",
    "vistas": 347393,
    "megusta": 0
   },
   {
    "id": "SNlkow9kpwg",
    "titulo": "¿Por qué flota un barco? Principio de Arquímedes",
    "canal": "Scientificprotocols",
    "vistas": 1467985,
    "megusta": 0
   }
  ]
 },
 "estados-materia-gases": {
  "video": {
   "id": "SoDg3UDBqYU",
   "titulo": "LEYES de los GASES: truco fácil para aprender las fórmulas",
   "canal": "Susi Profe",
   "vistas": 1152651,
   "megusta": 0,
   "busqueda": "leyes de los gases"
  },
  "bvideos": [
   {
    "id": "Xp-2xBuPsu8",
    "titulo": "QUÍMICA. Teoría cinético-molecular.",
    "canal": "Amigos de la Química",
    "vistas": 249311,
    "megusta": 0
   },
   {
    "id": "vq3-tk1xDo0",
    "titulo": "Química: Ley de Boyle (relación entre presión y volumen)",
    "canal": "Socratica Español",
    "vistas": 1081441,
    "megusta": 0
   },
   {
    "id": "7ZzFi3aPIkU",
    "titulo": "LEY de CHARLES Leyes de los GASES",
    "canal": "Susi Profe",
    "vistas": 558552,
    "megusta": 0
   }
  ]
 },
 "formulacion-inorganica": {
  "video": {
   "id": "CqsXRn1kdzg",
   "titulo": "ÓXIDOS. Formulación Inorgánica",
   "canal": "Susi Profe",
   "vistas": 688942,
   "megusta": 0,
   "busqueda": "formulación óxidos"
  },
  "bvideos": [
   {
    "id": "iYonC0W2pXI",
    "titulo": "Aprende las valencias (o números de oxidación) de forma fácil y rápida",
    "canal": "Amigos de la Química",
    "vistas": 2535274,
    "megusta": 0
   },
   {
    "id": "wkqoQjpxAUk",
    "titulo": "Formulación inorgánica. HIDRUROS metálicos, no metálicos y haluros de hidrógeno",
    "canal": "Amigos de la Química",
    "vistas": 2400090,
    "megusta": 0
   },
   {
    "id": "xRSkwbvtW8c",
    "titulo": "Formulación inorgánica. SALES BINARIAS",
    "canal": "Amigos de la Química",
    "vistas": 1699430,
    "megusta": 0
   }
  ]
 },
 "fuerzas-efectos": {
  "video": {
   "id": "9lgVjHJqTZc",
   "titulo": "Las Leyes de Newton en menos de cinco minutos",
   "canal": "AprendemosJuntos",
   "vistas": 1794828,
   "megusta": 0,
   "busqueda": "leyes de Newton"
  },
  "bvideos": [
   {
    "id": "npxZ-A2WSTo",
    "titulo": "LEY de HOOKE: Fuerza ELÁSTICA del Muelle o Resorte",
    "canal": "Susi Profe",
    "vistas": 1027226,
    "megusta": 0
   },
   {
    "id": "vVdDJAJbVCA",
    "titulo": "FUERZA de ROZAMIENTO Explicación, Fórmula y Ejercicios",
    "canal": "Clases Particulares en Ávila",
    "vistas": 184967,
    "megusta": 0
   },
   {
    "id": "yjyStvnHWXg",
    "titulo": "Las Leyes de Newton con EJEMPLOS [Fácil y Rápido] | FÍSICA |",
    "canal": "A Cierta Ciencia",
    "vistas": 915144,
    "megusta": 0
   }
  ]
 },
 "fuerzas-naturaleza": {
  "video": {
   "id": "_lrWIogPNFo",
   "titulo": "HOY SÍ que vas a entender el ELECTROMAGNETISMO",
   "canal": "Date un Vlog",
   "vistas": 2090047,
   "megusta": 0,
   "busqueda": "electromagnetismo"
  },
  "bvideos": [
   {
    "id": "Un-AbQe1rsg",
    "titulo": "¿Qué es la gravedad y cómo funciona? Newton VS Einstein",
    "canal": "Astronomiaweb",
    "vistas": 2560898,
    "megusta": 0
   },
   {
    "id": "l_cuSr5ZhCI",
    "titulo": "¿Cómo funciona la electricidad estática?",
    "canal": "Date un Voltio",
    "vistas": 797925,
    "megusta": 0
   },
   {
    "id": "vf657n_akeg",
    "titulo": "MAGNETISMO: ¿Qué son los imanes?",
    "canal": "Smile and Learn - Español",
    "vistas": 700835,
    "megusta": 0
   }
  ]
 },
 "metodo-cientifico": {
  "video": {
   "id": "2q3XeWtdlfY",
   "titulo": "El método científico explicado con ejemplos",
   "canal": "Profe Marilin",
   "vistas": 989233,
   "megusta": 0,
   "busqueda": "método científico"
  },
  "bvideos": [
   {
    "id": "zMYRU4S_RSk",
    "titulo": "MÉTODO CIENTÍFICO [6 PASOS]",
    "canal": "A Cierta Ciencia",
    "vistas": 1235446,
    "megusta": 0
   },
   {
    "id": "cVEO-u1xIVA",
    "titulo": "Expresar Números en NOTACIÓN CIENTÍFICA y DECIMAL",
    "canal": "Susi Profe",
    "vistas": 1306256,
    "megusta": 0
   },
   {
    "id": "CNQrcqLwRvo",
    "titulo": "Factores de conversión simples",
    "canal": "Amigos de la Química",
    "vistas": 1277194,
    "megusta": 0
   }
  ]
 },
 "mezclas-disoluciones": {
  "video": {
   "id": "7xdLYY2HQHg",
   "titulo": "Metodos de Separacion de Mezclas",
   "canal": "Detrás de la Ciencia",
   "vistas": 422734,
   "megusta": 0,
   "busqueda": "métodos de separación de mezclas"
  },
  "bvideos": [
   {
    "id": "GxVCHRX20_A",
    "titulo": "MEZCLAS HOMOGÉNEAS Y HETEROGÉNEAS [Fácil y Rápido]",
    "canal": "A Cierta Ciencia",
    "vistas": 1347312,
    "megusta": 0
   },
   {
    "id": "s8PxHL_49dU",
    "titulo": "Calcular Concentración g/L de una disolución [Fácil y Rápido] | QUÍMICA |",
    "canal": "A Cierta Ciencia",
    "vistas": 200138,
    "megusta": 0
   },
   {
    "id": "Yrf5hOq5wHU",
    "titulo": "CURVAS DE SOLUBILIDAD 3o ESO. Cómo interpretar gráficas solubilidad vs temperatura. Disoluciones ESO",
    "canal": "FÍSICA y QUÍMICA ",
    "vistas": 34637,
    "megusta": 0
   }
  ]
 },
 "quimica-sociedad": {
  "video": {
   "id": "2mn1dnBbOuI",
   "titulo": "Química verde: una ciencia sostenible ambiental y económicamente",
   "canal": "FRANCE 24 Español",
   "vistas": 27037,
   "megusta": 0,
   "busqueda": "química verde"
  },
  "bvideos": [
   {
    "id": "uO_6oS4PUkU",
    "titulo": "¿Qué es el efecto invernadero?",
    "canal": "Smile and Learn - Español",
    "vistas": 631016,
    "megusta": 0
   },
   {
    "id": "myad29yNm44",
    "titulo": "¿Qué es la LLUVIA ÁCIDA? EFECTOS de la Lluvia Ácida",
    "canal": "EcologíaVerde",
    "vistas": 604664,
    "megusta": 0
   },
   {
    "id": "VmNen39jXHE",
    "titulo": "PLÁSTICOS en el MAR ¡Causas, Consecuencias y Soluciones!",
    "canal": "EcologíaVerde",
    "vistas": 362656,
    "megusta": 0
   }
  ]
 },
 "reacciones-quimicas": {
  "video": {
   "id": "4Okc_cqvex8",
   "titulo": "AJUSTAR o BALANCEAR REACCIONES por TANTEO",
   "canal": "Susi Profe",
   "vistas": 1326837,
   "megusta": 0,
   "busqueda": "ajustar reacciones químicas"
  },
  "bvideos": [
   {
    "id": "aXtsG9RmvXM",
    "titulo": "Ley de LAVOISIER o de conservación de la masa",
    "canal": "unicoos",
    "vistas": 367876,
    "megusta": 0
   },
   {
    "id": "J0j61P_ok5Y",
    "titulo": "Factores que afectan la velocidad de una Reacción Química| Cinética Química | [Fácil y Rápido]",
    "canal": "A Cierta Ciencia",
    "vistas": 285564,
    "megusta": 0
   },
   {
    "id": "78Ix6E-ei1Q",
    "titulo": "Reacciones exotérmicas y endotérmicas",
    "canal": "Ruben Sebastian",
    "vistas": 286804,
    "megusta": 0
   }
  ]
 }
};

const BASE = {};
for (const k of Object.keys(OLD)) BASE[k] = { ...OLD[k], ...VID[k] };

const PROFE = "Saberes básicos de Física y Química de 3º de ESO (RD 217/2022, BOE-A-2022-4975)";
const FUENTE_RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };
const wiki = (t, slug) => ({ t: `${t}, Wikipedia en español`, url: `https://es.wikipedia.org/wiki/${slug}` });

module.exports = { ...H, BASE, PROFE, FUENTE_RD, wiki };
