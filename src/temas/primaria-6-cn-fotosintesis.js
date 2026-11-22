// Tema piloto. Dibujos propios en SVG.
module.exports = {
 "materia": "Ciencias de la Naturaleza",
 "curso": "6-primaria",
 "titulo": "La fotosíntesis: cómo comen las plantas",
 "minutos": 25,
 "objetivos": [
  "Qué es un ser autótrofo",
  "Los ingredientes y productos de la fotosíntesis",
  "Savia bruta y savia elaborada"
 ],
 "claves": [
  "clorofila",
  "estoma",
  "cloroplasto",
  "glucosa",
  "savia"
 ],
 "pregunta": {
  "texto": "Una semilla de roble pesa 3 gramos. El roble adulto pesa 20 toneladas. ¿De dónde ha salido toda esa materia?",
  "respuesta": "Casi toda sale <mark>del aire</mark>. El árbol toma dióxido de carbono del aire y, con la luz del sol y el agua, lo convierte en su propio alimento y en madera. Ese proceso se llama fotosíntesis."
 },
 "bloques": [
  {
   "html": "<h3>Las plantas fabrican su comida</h3>\n              <p>Los animales comemos otros seres vivos. Las plantas no: <mark>fabrican su propio alimento</mark>. Por eso decimos que son seres <b>autótrofos</b> (auto = sí mismo, trofo = alimento).</p>",
   "svg": "<svg viewBox=\"0 0 260 180\" role=\"img\" aria-label=\"Comparación: un conejo come una zanahoria, una planta recibe luz del sol\">\n              <rect x=\"0\" y=\"0\" width=\"260\" height=\"180\" rx=\"14\" fill=\"var(--paper)\"/>\n              <circle cx=\"200\" cy=\"40\" r=\"20\" fill=\"var(--sun)\"/>\n              <g stroke=\"var(--sun)\" stroke-width=\"3\" stroke-linecap=\"round\"><path d=\"M200 8v-4M226 18l4-4M232 40h5M174 18l-4-4\"/></g>\n              <path d=\"M200 64 C 200 90, 196 110, 196 140\" stroke=\"var(--leaf)\" stroke-width=\"5\" fill=\"none\"/>\n              <ellipse cx=\"180\" cy=\"104\" rx=\"18\" ry=\"9\" transform=\"rotate(-25 180 104)\" fill=\"var(--leaf)\"/>\n              <ellipse cx=\"214\" cy=\"92\" rx=\"18\" ry=\"9\" transform=\"rotate(25 214 92)\" fill=\"var(--leaf)\"/>\n              <rect x=\"176\" y=\"140\" width=\"44\" height=\"22\" rx=\"4\" fill=\"var(--inf)\"/>\n              <text x=\"198\" y=\"176\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--muted)\" font-family=\"Atkinson Hyperlegible, sans-serif\">autótrofa</text>\n              <ellipse cx=\"62\" cy=\"120\" rx=\"34\" ry=\"24\" fill=\"var(--muted)\" opacity=\".55\"/>\n              <circle cx=\"92\" cy=\"100\" r=\"16\" fill=\"var(--muted)\" opacity=\".7\"/>\n              <ellipse cx=\"88\" cy=\"74\" rx=\"5\" ry=\"16\" fill=\"var(--muted)\" opacity=\".7\"/>\n              <ellipse cx=\"99\" cy=\"76\" rx=\"5\" ry=\"15\" fill=\"var(--muted)\" opacity=\".7\"/>\n              <circle cx=\"98\" cy=\"98\" r=\"2.5\" fill=\"var(--ink)\"/>\n              <path d=\"M112 106 l22 -6 l-4 10 z\" fill=\"var(--inf)\"/>\n              <path d=\"M134 100 l6 -6 M134 100 l8 -1\" stroke=\"var(--leaf)\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n              <text x=\"66\" y=\"176\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--muted)\" font-family=\"Atkinson Hyperlegible, sans-serif\">heterótrofo</text>\n            </svg>"
  },
  {
   "html": "<h3>Los ingredientes</h3>\n              <p>Para fabricarlo necesitan cuatro cosas: <mark>agua</mark> y sales minerales que suben desde las raíces, <mark>dióxido de carbono</mark> que entra por unos poros diminutos de las hojas llamados <b>estomas</b>, y <mark>luz del sol</mark>, que la captura la <b>clorofila</b>, el pigmento verde de las hojas.</p>",
   "svg": "<svg viewBox=\"0 0 260 180\" role=\"img\" aria-label=\"Hoja vista al microscopio con un estoma abierto\">\n              <rect x=\"0\" y=\"0\" width=\"260\" height=\"180\" rx=\"14\" fill=\"var(--paper)\"/>\n              <path d=\"M30 150 C 30 60, 120 20, 230 30 C 220 130, 130 165, 30 150 Z\" fill=\"var(--leaf)\"/>\n              <path d=\"M30 150 C 100 110, 160 70, 230 30\" stroke=\"var(--card)\" stroke-width=\"3\" fill=\"none\" opacity=\".7\"/>\n              <ellipse cx=\"150\" cy=\"105\" rx=\"26\" ry=\"16\" fill=\"var(--card)\" stroke=\"var(--ink)\" stroke-width=\"2\"/>\n              <ellipse cx=\"150\" cy=\"105\" rx=\"10\" ry=\"4\" fill=\"var(--ink)\"/>\n              <text x=\"150\" y=\"140\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--card)\" font-family=\"Atkinson Hyperlegible, sans-serif\">estoma</text>\n              <path d=\"M150 66 v18\" stroke=\"var(--ink)\" stroke-width=\"2.5\" marker-end=\"url(#ah)\"/>\n              <text x=\"150\" y=\"60\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--ink)\" font-family=\"Atkinson Hyperlegible, sans-serif\">CO₂ entra</text>\n              <defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"var(--ink)\"/></marker></defs>\n            </svg>"
  },
  {
   "html": "<h3>La receta completa</h3>\n              <p>Dentro de las hojas, en unas partes llamadas <b>cloroplastos</b>, la planta usa la energía de la luz para unir el agua y el dióxido de carbono. Así obtiene <mark>glucosa</mark>, un azúcar que es su alimento, y suelta <mark>oxígeno</mark> al aire.</p>\n              <div class=\"formula\" aria-label=\"Agua más dióxido de carbono más luz dan glucosa más oxígeno\">\n                <span style=\"color:var(--water)\">agua</span><span class=\"op\">+</span><span>CO₂</span><span class=\"op\">+</span><span style=\"color:var(--sun)\">luz</span><span class=\"op\">→</span><span style=\"color:var(--inf)\">glucosa</span><span class=\"op\">+</span><span style=\"color:var(--pen)\">oxígeno</span>\n              </div>",
   "svg": "<svg viewBox=\"0 0 260 180\" role=\"img\" aria-label=\"Cloroplasto con sus granos verdes en el interior\">\n              <rect x=\"0\" y=\"0\" width=\"260\" height=\"180\" rx=\"14\" fill=\"var(--paper)\"/>\n              <ellipse cx=\"130\" cy=\"90\" rx=\"105\" ry=\"58\" fill=\"var(--leaf)\" opacity=\".3\" stroke=\"var(--leaf)\" stroke-width=\"4\"/>\n              <g fill=\"var(--leaf)\">\n                <rect x=\"62\" y=\"70\" width=\"26\" height=\"8\" rx=\"4\"/><rect x=\"62\" y=\"80\" width=\"26\" height=\"8\" rx=\"4\"/><rect x=\"62\" y=\"90\" width=\"26\" height=\"8\" rx=\"4\"/><rect x=\"62\" y=\"100\" width=\"26\" height=\"8\" rx=\"4\"/>\n                <rect x=\"116\" y=\"58\" width=\"26\" height=\"8\" rx=\"4\"/><rect x=\"116\" y=\"68\" width=\"26\" height=\"8\" rx=\"4\"/><rect x=\"116\" y=\"78\" width=\"26\" height=\"8\" rx=\"4\"/>\n                <rect x=\"118\" y=\"104\" width=\"26\" height=\"8\" rx=\"4\"/><rect x=\"118\" y=\"114\" width=\"26\" height=\"8\" rx=\"4\"/>\n                <rect x=\"170\" y=\"74\" width=\"26\" height=\"8\" rx=\"4\"/><rect x=\"170\" y=\"84\" width=\"26\" height=\"8\" rx=\"4\"/><rect x=\"170\" y=\"94\" width=\"26\" height=\"8\" rx=\"4\"/><rect x=\"170\" y=\"104\" width=\"26\" height=\"8\" rx=\"4\"/>\n              </g>\n              <text x=\"130\" y=\"168\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"var(--ink)\" font-family=\"Atkinson Hyperlegible, sans-serif\">cloroplasto (aumentado)</text>\n            </svg>"
  },
  {
   "html": "<h3>Savia bruta y savia elaborada</h3>\n              <p>El agua con sales sube de las raíces a las hojas: es la <b>savia bruta</b>. Cuando ya lleva el alimento fabricado, baja y se reparte por toda la planta: es la <b>savia elaborada</b>. Gracias a ella crecen el tallo, las raíces, las flores y los frutos.</p>",
   "svg": "<svg viewBox=\"0 0 260 180\" role=\"img\" aria-label=\"Tallo con una flecha azul que sube y una flecha naranja que baja\">\n              <rect x=\"0\" y=\"0\" width=\"260\" height=\"180\" rx=\"14\" fill=\"var(--paper)\"/>\n              <rect x=\"112\" y=\"20\" width=\"36\" height=\"140\" rx=\"10\" fill=\"var(--leaf)\" opacity=\".35\"/>\n              <path d=\"M122 150 V 34\" stroke=\"var(--water)\" stroke-width=\"6\" stroke-linecap=\"round\" marker-end=\"url(#ab)\"/>\n              <path d=\"M138 34 V 150\" stroke=\"var(--inf)\" stroke-width=\"6\" stroke-linecap=\"round\" marker-end=\"url(#ao)\"/>\n              <defs>\n                <marker id=\"ab\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"var(--water)\"/></marker>\n                <marker id=\"ao\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"var(--inf)\"/></marker>\n              </defs>\n              <text x=\"104\" y=\"80\" text-anchor=\"end\" font-size=\"13\" font-weight=\"700\" fill=\"var(--water)\" font-family=\"Atkinson Hyperlegible, sans-serif\">savia bruta</text>\n              <text x=\"104\" y=\"96\" text-anchor=\"end\" font-size=\"12\" fill=\"var(--muted)\" font-family=\"Atkinson Hyperlegible, sans-serif\">sube</text>\n              <text x=\"156\" y=\"110\" font-size=\"13\" font-weight=\"700\" fill=\"var(--inf)\" font-family=\"Atkinson Hyperlegible, sans-serif\">savia elaborada</text>\n              <text x=\"156\" y=\"126\" font-size=\"12\" fill=\"var(--muted)\" font-family=\"Atkinson Hyperlegible, sans-serif\">baja</text>\n            </svg>"
  }
 ],
 "figura": {
  "titulo": "Mírala entera de un vistazo",
  "svg": "<svg viewBox=\"0 0 640 330\" role=\"img\" aria-label=\"Esquema de una planta: entra luz y dióxido de carbono por las hojas, sube agua por la raíz, sale oxígeno y la glucosa baja por el tallo\">\n              <defs>\n                <marker id=\"m-s\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"var(--sun)\"/></marker>\n                <marker id=\"m-i\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"var(--ink)\"/></marker>\n                <marker id=\"m-w\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"var(--water)\"/></marker>\n                <marker id=\"m-p\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"var(--pen)\"/></marker>\n                <marker id=\"m-o\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"var(--inf)\"/></marker>\n              </defs>\n              <rect x=\"0\" y=\"0\" width=\"640\" height=\"330\" rx=\"16\" fill=\"var(--paper)\"/>\n              <rect x=\"0\" y=\"262\" width=\"640\" height=\"68\" rx=\"0\" fill=\"var(--inf)\" opacity=\".18\"/>\n              <circle cx=\"70\" cy=\"62\" r=\"34\" fill=\"var(--sun)\"/>\n              <path d=\"M108 82 L 250 128\" stroke=\"var(--sun)\" stroke-width=\"4\" stroke-dasharray=\"8 6\" marker-end=\"url(#m-s)\"/>\n              <text x=\"140\" y=\"80\" font-size=\"15\" font-weight=\"700\" fill=\"var(--ink)\" font-family=\"Atkinson Hyperlegible, sans-serif\">luz del sol</text>\n              <path d=\"M320 262 V 110\" stroke=\"var(--leaf)\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n              <ellipse cx=\"270\" cy=\"140\" rx=\"54\" ry=\"22\" transform=\"rotate(-18 270 140)\" fill=\"var(--leaf)\"/>\n              <ellipse cx=\"372\" cy=\"120\" rx=\"54\" ry=\"22\" transform=\"rotate(18 372 120)\" fill=\"var(--leaf)\"/>\n              <ellipse cx=\"282\" cy=\"202\" rx=\"44\" ry=\"18\" transform=\"rotate(-12 282 202)\" fill=\"var(--leaf)\"/>\n              <ellipse cx=\"362\" cy=\"190\" rx=\"44\" ry=\"18\" transform=\"rotate(12 362 190)\" fill=\"var(--leaf)\"/>\n              <path d=\"M320 262 l-40 40 M320 262 l40 44 M320 262 v52 M300 282 l-24 8 M342 286 l26 4\" stroke=\"var(--muted)\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n              <path d=\"M548 120 H 440\" stroke=\"var(--ink)\" stroke-width=\"3\" marker-end=\"url(#m-i)\"/>\n              <text x=\"556\" y=\"116\" font-size=\"15\" font-weight=\"700\" fill=\"var(--ink)\" font-family=\"Atkinson Hyperlegible, sans-serif\">CO₂</text>\n              <text x=\"556\" y=\"134\" font-size=\"12\" fill=\"var(--muted)\" font-family=\"Atkinson Hyperlegible, sans-serif\">entra por</text>\n              <text x=\"556\" y=\"148\" font-size=\"12\" fill=\"var(--muted)\" font-family=\"Atkinson Hyperlegible, sans-serif\">los estomas</text>\n              <path d=\"M430 186 H 540\" stroke=\"var(--pen)\" stroke-width=\"3\" marker-end=\"url(#m-p)\"/>\n              <text x=\"548\" y=\"182\" font-size=\"15\" font-weight=\"700\" fill=\"var(--pen)\" font-family=\"Atkinson Hyperlegible, sans-serif\">O₂</text>\n              <text x=\"548\" y=\"200\" font-size=\"12\" fill=\"var(--muted)\" font-family=\"Atkinson Hyperlegible, sans-serif\">sale al aire</text>\n              <path d=\"M200 312 C 240 312, 290 300, 308 250\" stroke=\"var(--water)\" stroke-width=\"3\" fill=\"none\" marker-end=\"url(#m-w)\"/>\n              <text x=\"44\" y=\"302\" font-size=\"15\" font-weight=\"700\" fill=\"var(--water)\" font-family=\"Atkinson Hyperlegible, sans-serif\">agua y sales</text>\n              <text x=\"44\" y=\"320\" font-size=\"12\" fill=\"var(--muted)\" font-family=\"Atkinson Hyperlegible, sans-serif\">entran por la raíz</text>\n              <path d=\"M336 160 V 240\" stroke=\"var(--inf)\" stroke-width=\"3\" marker-end=\"url(#m-o)\"/>\n              <text x=\"346\" y=\"232\" font-size=\"15\" font-weight=\"700\" fill=\"var(--inf)\" font-family=\"Atkinson Hyperlegible, sans-serif\">glucosa</text>\n              <text x=\"346\" y=\"250\" font-size=\"12\" fill=\"var(--muted)\" font-family=\"Atkinson Hyperlegible, sans-serif\">alimento para toda la planta</text>\n            </svg>"
 },
 "video": {"id": "mtGgo68VM54", "titulo": "La fotosíntesis de las plantas", "canal": "Smile and Learn - Español", "vistas": 3884886, "megusta": 46728, "busqueda": "fotosíntesis para niños"},
 "quiz": [
  {
   "q": "¿Por qué decimos que las plantas son autótrofas?",
   "o": [
    "Porque se mueven solas hacia la luz",
    "Porque fabrican su propio alimento",
    "Porque comen insectos"
   ],
   "a": 1,
   "e": "«Auto» significa «sí mismo»: fabrican su propio alimento a partir de agua, CO₂ y luz."
  },
  {
   "q": "¿Por dónde entra el dióxido de carbono en la planta?",
   "o": [
    "Por las raíces",
    "Por las flores",
    "Por los estomas de las hojas"
   ],
   "a": 2,
   "e": "Por las raíces entra el agua con sales. El CO₂ entra por los estomas, poros diminutos de las hojas."
  },
  {
   "q": "¿Qué gas sueltan las plantas al aire durante la fotosíntesis?",
   "o": [
    "Oxígeno",
    "Dióxido de carbono",
    "Nitrógeno"
   ],
   "a": 0,
   "e": "Sueltan oxígeno, el que respiramos los animales y las personas."
  },
  {
   "q": "La savia elaborada…",
   "o": [
    "sube desde las raíces con agua y sales",
    "lleva el alimento fabricado a toda la planta",
    "solo está en las flores"
   ],
   "a": 1,
   "e": "La savia bruta sube con agua y sales; la elaborada baja y reparte la glucosa."
  },
  {
   "q": "¿Qué sustancia de las hojas captura la luz del sol?",
   "o": [
    "La glucosa",
    "La savia",
    "La clorofila"
   ],
   "a": 2,
   "e": "La clorofila es el pigmento verde que capta la energía de la luz."
  }
 ],
 "feynman": [
  "Los cuatro ingredientes: agua, sales, CO₂ y luz",
  "Dónde ocurre: en las hojas, en los cloroplastos",
  "Lo que se produce: glucosa y oxígeno",
  "Savia bruta sube, savia elaborada baja"
 ],
 "mapa": "<svg viewBox=\"0 0 700 300\" role=\"img\" aria-label=\"Mapa mental de la fotosíntesis\">\n              <g font-family=\"Atkinson Hyperlegible, sans-serif\" font-size=\"15\">\n                <g stroke=\"var(--line)\" stroke-width=\"3\">\n                  <path d=\"M350 150 L 140 60\"/><path d=\"M350 150 L 140 240\"/><path d=\"M350 150 L 560 60\"/><path d=\"M350 150 L 560 240\"/><path d=\"M350 150 L 350 40\"/><path d=\"M350 150 L 350 262\"/>\n                </g>\n                <rect x=\"250\" y=\"122\" width=\"200\" height=\"56\" rx=\"28\" fill=\"var(--leaf)\"/>\n                <text x=\"350\" y=\"157\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"700\" fill=\"var(--card)\" font-family=\"Baloo 2, sans-serif\">FOTOSÍNTESIS</text>\n                <rect x=\"290\" y=\"16\" width=\"120\" height=\"44\" rx=\"10\" fill=\"var(--card)\" stroke=\"var(--ink)\" stroke-width=\"2\"/>\n                <text x=\"350\" y=\"36\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--ink)\">¿Quién?</text>\n                <text x=\"350\" y=\"53\" text-anchor=\"middle\" fill=\"var(--muted)\" font-size=\"13\">plantas y algas</text>\n                <rect x=\"40\" y=\"34\" width=\"200\" height=\"52\" rx=\"10\" fill=\"var(--card)\" stroke=\"var(--water)\" stroke-width=\"2\"/>\n                <text x=\"140\" y=\"56\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--water)\">Entra</text>\n                <text x=\"140\" y=\"75\" text-anchor=\"middle\" fill=\"var(--ink)\" font-size=\"13\">agua · sales · CO₂ · luz</text>\n                <rect x=\"460\" y=\"34\" width=\"200\" height=\"52\" rx=\"10\" fill=\"var(--card)\" stroke=\"var(--pen)\" stroke-width=\"2\"/>\n                <text x=\"560\" y=\"56\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--pen)\">Sale</text>\n                <text x=\"560\" y=\"75\" text-anchor=\"middle\" fill=\"var(--ink)\" font-size=\"13\">glucosa · oxígeno</text>\n                <rect x=\"40\" y=\"214\" width=\"200\" height=\"52\" rx=\"10\" fill=\"var(--card)\" stroke=\"var(--leaf)\" stroke-width=\"2\"/>\n                <text x=\"140\" y=\"236\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--leaf)\">Dónde</text>\n                <text x=\"140\" y=\"255\" text-anchor=\"middle\" fill=\"var(--ink)\" font-size=\"13\">hojas → cloroplastos</text>\n                <rect x=\"460\" y=\"214\" width=\"200\" height=\"52\" rx=\"10\" fill=\"var(--card)\" stroke=\"var(--inf)\" stroke-width=\"2\"/>\n                <text x=\"560\" y=\"236\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--inf)\">Transporte</text>\n                <text x=\"560\" y=\"255\" text-anchor=\"middle\" fill=\"var(--ink)\" font-size=\"13\">savia bruta ↑ · elaborada ↓</text>\n                <rect x=\"270\" y=\"240\" width=\"160\" height=\"50\" rx=\"10\" fill=\"var(--card)\" stroke=\"var(--sun)\" stroke-width=\"2\"/>\n                <text x=\"350\" y=\"261\" text-anchor=\"middle\" font-weight=\"700\" fill=\"var(--ink)\">Clave</text>\n                <text x=\"350\" y=\"279\" text-anchor=\"middle\" fill=\"var(--muted)\" font-size=\"13\">clorofila capta la luz</text>\n              </g>\n            </svg>",
 "tarjetas": [
  [
   "¿Qué es la fotosíntesis?",
   "El proceso con el que las plantas fabrican su alimento usando luz, agua y CO₂."
  ],
  [
   "¿Qué pigmento capta la luz?",
   "La clorofila."
  ],
  [
   "¿Cómo se llaman los poros de las hojas?",
   "Estomas."
  ],
  [
   "¿Qué produce la fotosíntesis?",
   "Glucosa (alimento) y oxígeno."
  ],
  [
   "¿Qué diferencia hay entre savia bruta y elaborada?",
   "La bruta sube con agua y sales; la elaborada baja con el alimento."
  ]
 ],
 "familias": ["Plantad una judía en un vaso con algodón y anotad cada día cuánto crece con luz y en un armario.", "En un paseo, buscad hojas de distintos verdes y hablad de la clorofila.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
 "profesores": {"saberes": "Ciencias de la Naturaleza: las plantas, nutrición y fotosíntesis; ecosistemas (RD 157/2022, tercer ciclo).", "ideas": ["Experimento de la planta tapada con papel de aluminio durante una semana.", "Observar estomas al microscopio con una tira de esmalte de uñas transparente.", "Dibujar en grupo el esquema de la fotosíntesis de memoria y compararlo con el del tema."]},
 "fuentes": [
  {
   "t": "Real Decreto 157/2022, enseñanzas mínimas de Primaria (BOE)",
   "url": "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296"
  },
  {
   "t": "Fotosíntesis, Diccionario de la lengua española (RAE)",
   "url": "https://dle.rae.es/fotos%C3%ADntesis"
  }
 ],
 "revisado": "2026-11-12"
};

// ---------- Nivel libro (6º de Primaria) ----------
// Este tema tenía el formato antiguo, sin ejemplos, errores, ejercicios ni examen: se preparan antes.
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
Object.assign(module.exports, { ejemplos: [], errores: [], ejercicios: [], examen: [] });
require("./_priL").libro(module.exports, {
  minutos: 75,
  objetivos: ["Describir las partes de la hoja que intervienen en la fotosíntesis", "Distinguir fotosíntesis y respiración en las plantas", "Explicar dónde almacenan las plantas el alimento y por qué cambian de color las hojas", "Diseñar experimentos sencillos y valorar la fotosíntesis para la vida del planeta"],
  lectura: { titulo: "El sauce de Van Helmont", html: `<p>Hace casi 400 años, en Bélgica, un médico y científico llamado <b>Jan Baptista van Helmont</b> se hizo una pregunta: ¿de dónde sacan las plantas la materia para crecer? Casi todo el mundo pensaba que la tomaban de la tierra, como si se la comieran.</p><p>Van Helmont decidió comprobarlo con un experimento muy paciente. Secó y pesó cuidadosamente la tierra de una gran maceta: unos <b>90 kilos</b>. Plantó en ella un pequeño sauce que pesaba unos <b>2 kilos</b>. Tapó la maceta para que no cayera polvo y durante <b>cinco años</b> solo le echó agua de lluvia.</p><p>Al cabo de cinco años, el sauce pesaba más de <b>76 kilos</b>. Entonces volvió a secar y pesar la tierra. ¡Había perdido solo unos 57 gramos!</p><p>Van Helmont concluyó que el árbol había crecido gracias al <b>agua</b>. Acertó en parte: el agua es un ingrediente fundamental. Pero le faltó descubrir el otro gran ingrediente, invisible, que la planta toma del aire: el <b>dióxido de carbono</b>. Y la energía que lo une todo: la <b>luz del sol</b>. Hicieron falta más de cien años y muchos otros científicos para completar la receta de la fotosíntesis.</p>` },
  tras: {
    "Las plantas fabrican su comida": [
      ["Autótrofos y heterótrofos", `<p>Todos los seres vivos necesitan alimento para obtener energía y materia con la que crecer. Pero no todos lo consiguen igual:</p><ul><li>Los seres <b>autótrofos</b> fabrican su propio alimento a partir de sustancias sencillas: agua, dióxido de carbono y sales minerales. Para ello necesitan una fuente de energía, que casi siempre es la <b>luz del sol</b>. Son autótrofas las <b>plantas</b>, las <b>algas</b> y algunas bacterias, como las cianobacterias.</li><li>Los seres <b>heterótrofos</b> no pueden fabricar su alimento y tienen que tomarlo de otros seres vivos. Son heterótrofos los <b>animales</b>, los <b>hongos</b> y muchas bacterias y protozoos.</li></ul><p>Fíjate en algo importantísimo: aunque comamos carne, en el fondo toda nuestra energía viene de las plantas. La vaca comió hierba; la hierba fabricó su alimento con la luz del sol. Por eso, en las cadenas alimentarias, los autótrofos son siempre el primer eslabón: son los <b>productores</b>.</p><p>Hay algunas plantas curiosas, como la <b>planta carnívora</b> atrapamoscas, que caza insectos. Pero ojo: también hace la fotosíntesis. Los insectos solo le aportan sales minerales que faltan en los suelos pobres donde vive.</p>`,
        H6.dos("Cómo se alimentan", ["Autótrofos", ["fabrican su alimento", "usan la luz", "plantas, algas"], cVE], ["Heterótrofos", ["comen a otros", "no usan la luz", "animales, hongos"], cNA])],
    ],
    "Los ingredientes": [
      ["La hoja, una fábrica solar", `<p>La hoja es el principal laboratorio de la planta. Su forma y sus partes están pensadas para hacer la fotosíntesis:</p><ul><li>Es <b>ancha y plana</b>, para captar la mayor cantidad posible de luz, como un panel solar.</li><li>Por fuera tiene una capa protectora transparente, la <b>epidermis</b>, que deja pasar la luz y evita que la hoja se seque.</li><li>En el interior hay muchas células llenas de <b>cloroplastos</b>, sobre todo en la parte de arriba, que es la que recibe más luz. Dentro de los cloroplastos está la <b>clorofila</b>.</li><li>En la cara de abajo hay miles de <b>estomas</b>: pequeños poros rodeados por dos células con forma de judía que se abren y se cierran. Por ellos entra el dióxido de carbono y salen el oxígeno y el vapor de agua.</li><li>Los <b>nervios</b> de la hoja son los conductos que traen el agua y se llevan el alimento fabricado.</li></ul><p>Los estomas son muy listos: cuando hace mucho calor y la planta tiene poca agua, se cierran para no perderla. Pero así también entra menos dióxido de carbono, y la planta fabrica menos alimento. Por eso las plantas crecen menos en las épocas de sequía.</p>`,
        L6.filas("Partes de la hoja", [["epidermis", "protege, deja pasar luz", cAZ], ["cloroplastos", "con clorofila", cVE], ["estomas", "entran y salen gases", cNA], ["nervios", "conducen la savia", cMO]])],
      ["El viaje del agua: de la raíz a la hoja", `<p>¿Cómo llega el agua desde el suelo hasta las hojas más altas de un árbol de 30 metros, sin ninguna bomba? Gracias a un proceso muy ingenioso:</p><ol><li>Las <b>raíces</b> absorben agua y sales minerales del suelo a través de unos pelillos muy finos, los <b>pelos absorbentes</b>, que aumentan mucho la superficie.</li><li>El agua sube por unos tubos finísimos del tallo, los <b>vasos leñosos</b>, formando la savia bruta.</li><li>En las hojas, parte del agua se usa en la fotosíntesis, pero la mayor parte se <b>evapora</b> por los estomas. Esto se llama <b>transpiración</b>.</li><li>Cada gota que se evapora «tira» de las que vienen detrás, como cuando sorbes con una pajita. Así la columna de agua sube sin parar.</li></ol><p>Las plantas transpiran muchísima agua: un árbol grande puede perder cientos de litros en un día de verano. Esa agua vuelve a la atmósfera y ayuda a formar nubes y lluvia. Por eso los bosques hacen el aire más húmedo y fresco.</p><p>Puedes comprobarlo: cubre una rama con hojas con una bolsa de plástico transparente y déjala al sol unas horas. Verás gotitas de agua dentro de la bolsa.</p>`,
        H6.flujo("El viaje del agua", ["Raíz|absorbe", "Tallo|sube", "Hoja|transpira"], cAZ), ["YeOw-wJR9fc", "Experimento TRANSPIRACIÓN DE HOJAS (¿qué es la transpiración?)", "Kids Fun Science (Kids Fun Science)", 241293]],
    ],
    "La receta completa": [
      ["Las plantas también respiran", `<p>Un error muy frecuente es pensar que las plantas no respiran, o que «respiran al revés» que los animales. En realidad, las plantas hacen <b>dos procesos distintos</b>:</p><ul><li>La <b>fotosíntesis</b>: solo se produce cuando hay <b>luz</b> y solo en las partes verdes. La planta toma dióxido de carbono y expulsa oxígeno. Sirve para <b>fabricar</b> alimento.</li><li>La <b>respiración</b>: se produce <b>siempre</b>, de día y de noche, y en todas las células de la planta, también en las raíces y las flores. La planta toma oxígeno y expulsa dióxido de carbono. Sirve para <b>obtener energía</b> del alimento, igual que hacemos nosotros.</li></ul><p>Durante el día, la fotosíntesis es mucho más intensa que la respiración, así que en conjunto la planta expulsa más oxígeno del que consume. Por la noche, sin luz, solo respira y expulsa algo de dióxido de carbono, pero en cantidades muy pequeñas.</p><p>Por eso a veces se dice que no conviene dormir con muchas plantas en la habitación. En realidad, la cantidad de dióxido de carbono que expulsan unas pocas plantas es muy pequeña, mucho menor que la que expulsa una persona dormida.</p>`,
        H6.dos("Dos procesos", ["Fotosíntesis", ["solo con luz", "toma CO₂, da O₂", "fabrica alimento"], cVE], ["Respiración", ["día y noche", "toma O₂, da CO₂", "saca energía"], cRO])],
      ["¿Por qué cambian de color las hojas en otoño?", `<p>En otoño, muchos árboles, como el haya, el roble o el castaño, se tiñen de amarillo, naranja y rojo antes de perder las hojas. ¿Qué ocurre?</p><p>Las hojas contienen varios <b>pigmentos</b>. El más abundante es la <b>clorofila</b>, verde, que tapa a todos los demás. Pero también hay pigmentos <b>amarillos y anaranjados</b>, los mismos que dan color a la zanahoria.</p><p>Cuando los días se acortan y hace más frío, el árbol se prepara para el invierno. Deja de fabricar clorofila y recupera los nutrientes valiosos de las hojas para guardarlos en el tronco y las raíces. Al desaparecer el verde, aparecen los colores amarillos y naranjas que estaban escondidos. En algunos árboles, además, se fabrican pigmentos <b>rojos</b> en otoño.</p><p>Después, en la base de cada hoja se forma una capa de células que la separa de la rama, y la hoja cae. Estos árboles se llaman de <b>hoja caduca</b>. Perder las hojas en invierno les ayuda a no gastar agua ni energía cuando hay poca luz y el suelo está helado.</p><p>Los árboles de <b>hoja perenne</b>, como el pino o la encina, conservan sus hojas todo el año y las van renovando poco a poco.</p>`,
        L6.filas("Colores de la hoja", [["verde", "clorofila", cVE], ["amarillo y naranja", "estaban escondidos", cNA], ["rojo", "se fabrica en otoño", cRO], ["caída", "hoja caduca", cMO]]), ["6-pFyGxg6mI", "¿POR QUÉ LAS HOJAS CAMBIAN DE COLOR EN OTOÑO? 🍂 | Draw My Life", "TikTak Draw", 143290]],
    ],
    "Savia bruta y savia elaborada": [
      ["Los almacenes de la planta", `<p>Las plantas fabrican más alimento del que necesitan en el momento. Lo que sobra lo guardan en forma de <b>almidón</b>, una sustancia formada por muchas moléculas de glucosa unidas, y otras reservas, para usarlo más adelante: para pasar el invierno, para rebrotar en primavera o para alimentar a sus semillas.</p><p>Las plantas guardan sus reservas en distintas partes, y muchas de ellas son alimentos para nosotros:</p><ul><li>En <b>raíces</b> engrosadas: la zanahoria, la remolacha o el nabo.</li><li>En <b>tallos subterráneos</b> llamados tubérculos: la patata.</li><li>En <b>bulbos</b>: la cebolla y el ajo.</li><li>En las <b>semillas</b>: el trigo, el arroz, el maíz, las lentejas o los garbanzos. Así la nueva planta tiene alimento para empezar a crecer.</li><li>En los <b>frutos</b>: muchos acumulan azúcares, como la uva o el plátano.</li></ul><p>Puedes descubrir el almidón con un experimento: echa unas gotas de <b>yodo</b>, de venta en farmacias, sobre una rodaja de patata o un trozo de pan. Si se vuelve de color <b>azul oscuro o negro</b>, hay almidón. Prueba también con una manzana o un trozo de queso y compara.</p>`,
        L6.filas("Dónde guardan reservas", [["raíz", "zanahoria", cNA], ["tubérculo", "patata", cMO], ["bulbo", "cebolla", cAZ], ["semilla", "trigo, lentejas", cVE]])],
    ],
  },
  final: [
    ["Experimentos con la fotosíntesis", `<p>La fotosíntesis no se ve a simple vista, pero se puede comprobar con experimentos sencillos:</p><ul><li><b>Las burbujas de oxígeno</b>. Mete una planta acuática, como la elodea, que se compra en tiendas de acuarios, en un vaso con agua y ponla al sol. Al cabo de un rato verás pequeñas <b>burbujas</b> que salen de sus hojas: es el oxígeno de la fotosíntesis. Si la pones a la sombra, salen muchas menos. Si la acercas a una lámpara, más. Contando las burbujas por minuto puedes comparar.</li><li><b>Sin luz no hay fotosíntesis</b>. Tapa una parte de algunas hojas de una planta con papel de aluminio durante unos días. Al destaparlas, la parte tapada estará más pálida y, con el yodo, no mostrará almidón: sin luz no ha fabricado alimento.</li><li><b>La planta busca la luz</b>. Pon una planta junto a una ventana durante una semana. Verás que su tallo y sus hojas se inclinan hacia la luz. Si la giras, al cabo de unos días se vuelve a orientar.</li></ul><p>Recuerda las reglas de un buen experimento: cambiar <b>una sola cosa</b> cada vez (por ejemplo, la cantidad de luz) y comparar siempre con un control que no cambia.</p>`,
      H6.flujo("Un buen experimento", ["Pregunta", "Cambiar|una cosa", "Comparar|con control", "Concluir"], cAZ), ["gf1GKoYLkaU", "Experimento #10 - «La fotosíntesis»", "Fundación Quiros Tanzi FQT", 1108728]],
    ["La fotosíntesis y el planeta", `<p>La fotosíntesis es probablemente el proceso más importante de la Tierra. Sin ella, casi ningún ser vivo podría existir:</p><ul><li><b>Produce el oxígeno</b> que respiramos. Y no solo lo producen los bosques: alrededor de la <b>mitad</b> del oxígeno lo fabrican algas microscópicas que flotan en los océanos, el <b>fitoplancton</b>.</li><li><b>Es la base de casi todas las cadenas alimentarias</b>. Todo lo que comemos procede, directa o indirectamente, de seres que hacen la fotosíntesis.</li><li><b>Retira dióxido de carbono del aire</b>. Los bosques y los océanos absorben una parte del dióxido de carbono que expulsan los coches, las fábricas y las centrales. Por eso se llaman <b>sumideros de carbono</b>, y ayudan a frenar el cambio climático.</li><li>Incluso el <b>petróleo</b> y el <b>carbón</b> son restos de seres que hicieron la fotosíntesis hace millones de años: su energía es luz del sol antigua.</li></ul><p>Por todo ello, proteger los bosques, plantar árboles y cuidar los océanos no es solo cuidar a las plantas: es cuidar el aire, el clima y nuestra propia comida.</p>`,
      H6.rueda("Gracias a la fotosíntesis", "FOTOSÍNTESIS", [["Oxígeno", cAZ], ["Alimento", cNA], ["Menos CO₂", cVE], ["Energía", cRO]])],
    ["La receta, paso a paso en la historia", `<p>La receta de la fotosíntesis se descubrió poco a poco, gracias a varios científicos:</p><ul><li>Hacia 1640, <b>Van Helmont</b> demostró con su sauce que la planta no crece comiendo tierra, y pensó que el agua era la clave.</li><li>En <b>1771</b>, el inglés <b>Joseph Priestley</b> encerró una vela encendida en un recipiente de vidrio: al poco se apagaba, porque el aire «se estropeaba». Pero si metía dentro una ramita de menta, al cabo de unos días el aire se «arreglaba» y la vela podía arder otra vez. Las plantas devolvían algo al aire: hoy sabemos que era oxígeno.</li><li>En <b>1779</b>, el médico holandés <b>Jan Ingenhousz</b> descubrió que las plantas solo «arreglan» el aire cuando reciben <b>luz</b>, y solo con sus partes <b>verdes</b>.</li><li>Poco después se comprobó que las plantas toman <b>dióxido de carbono</b> del aire y que con él forman su materia.</li></ul><p>Cada científico añadió una pieza al rompecabezas. Así funciona la ciencia: con preguntas, experimentos cuidadosos y el trabajo de muchas personas a lo largo del tiempo.</p>`,
      L6.filas("Historia de la fotosíntesis", [["hacia 1640", "Van Helmont: agua", cAZ], ["1771", "Priestley: menta y vela", cNA], ["1779", "Ingenhousz: luz", cVE], ["después", "dióxido de carbono", cMO]])],
  ],
  ejemplos: [
    ["El sauce de Van Helmont pasó de 2 kg a 76 kg en cinco años. ¿Cuánto engordó? ¿De dónde salió esa masa?", ["76 − 2 = 74 kg.", "La tierra solo perdió unos 57 g.", "La masa vino del agua y del dióxido de carbono del aire."], "Unos 74 kg, del agua y del aire."],
    ["Una elodea suelta 20 burbujas por minuto al sol y 5 a la sombra. ¿Qué conclusión sacas?", ["Las burbujas son oxígeno de la fotosíntesis.", "Con más luz salen más burbujas."], "Con más luz hay más fotosíntesis."],
    ["¿Hace la planta fotosíntesis por la noche? ¿Y respiración?", ["La fotosíntesis necesita luz.", "La respiración se produce siempre."], "Fotosíntesis no; respiración sí."],
    ["Una rodaja de patata se vuelve negra con yodo. ¿Qué contiene?", ["El yodo se vuelve azul oscuro o negro con el almidón."], "Almidón."],
    ["¿Por qué una zanahoria es naranja y no verde?", ["Es una raíz: no recibe luz ni tiene clorofila.", "Guarda pigmentos naranjas."], "Porque no tiene clorofila y sí pigmentos naranjas."],
  ],
  errores: ["Pensar que las plantas crecen comiendo tierra.", "Creer que las plantas no respiran.", "Decir que la fotosíntesis se hace de noche.", "Pensar que todo el oxígeno lo producen los árboles: la mitad viene del fitoplancton.", "Confundir savia bruta (sube con agua y sales) con savia elaborada (lleva el alimento).", "Creer que las plantas carnívoras no hacen la fotosíntesis."],
  ejercicios: [
    ["b", "¿Qué significa que las plantas sean autótrofas?", "Que fabrican su propio alimento."],
    ["b", "¿Cómo se llaman los poros de las hojas?", "Estomas."],
    ["b", "¿Qué es la transpiración?", "La pérdida de vapor de agua por los estomas."],
    ["b", "¿En qué partes de la planta se hace la fotosíntesis?", "En las partes verdes, sobre todo en las hojas."],
    ["b", "Escribe la ecuación de la fotosíntesis con palabras.", "Agua + dióxido de carbono + luz → glucosa + oxígeno."],
    ["b", "¿Qué sustancia se vuelve azul oscura con el yodo?", "El almidón."],
    ["b", "Di dos alimentos que sean reservas de las plantas.", "La patata y las lentejas, por ejemplo."],
    ["b", "¿Qué es un árbol de hoja caduca?", "El que pierde las hojas en otoño o invierno."],
    ["m", "¿Por qué las hojas son anchas y planas?", "Para captar la mayor cantidad posible de luz."],
    ["m", "Compara fotosíntesis y respiración: cuándo se hacen y qué gases intercambian.", "Fotosíntesis: con luz, toma CO₂ y da O₂. Respiración: siempre, toma O₂ y da CO₂."],
    ["m", "¿Por qué las hojas se vuelven amarillas en otoño?", "Se deja de fabricar clorofila y aparecen los pigmentos amarillos ocultos."],
    ["m", "¿Por qué se cierran los estomas con mucho calor?", "Para no perder agua."],
    ["m", "¿Qué hizo Priestley con la vela y la menta?", "Comprobó que la planta «arreglaba» el aire para que la vela volviera a arder."],
    ["m", "Clasifica en autótrofos y heterótrofos: alga, seta, vaca, helecho.", "Autótrofos: alga, helecho. Heterótrofos: seta, vaca."],
    ["m", "¿Qué produce aproximadamente la mitad del oxígeno del planeta?", "El fitoplancton de los océanos."],
    ["m", "¿Cómo comprobarías que las hojas transpiran?", "Cubriendo una rama con una bolsa transparente y viendo las gotitas."],
    ["a", "Diseña un experimento para saber si la cantidad de luz influye en la fotosíntesis.", "Contar burbujas de una elodea con distintas luces, cambiando solo la luz."],
    ["a", "¿Por qué tapar una hoja con aluminio hace que no tenga almidón?", "Porque sin luz no hace la fotosíntesis y no fabrica alimento."],
    ["a", "¿Qué le faltó descubrir a Van Helmont?", "Que la planta también toma dióxido de carbono del aire y usa la luz."],
    ["a", "¿Por qué los bosques ayudan a frenar el cambio climático?", "Porque retiran dióxido de carbono del aire al hacer la fotosíntesis."],
    ["a", "Explica cómo sube el agua hasta la copa de un árbol muy alto.", "La transpiración de las hojas tira del agua, que sube por los vasos como por una pajita."],
    ["a", "¿Por qué decimos que la energía del petróleo es «luz del sol antigua»?", "Porque procede de seres que hicieron la fotosíntesis hace millones de años."],
    ["a", "¿Es peligroso dormir con una planta en la habitación? Razónalo.", "No: el CO₂ que expulsa al respirar es muy poco, mucho menos que una persona."],
    ["a", "Una planta carnívora caza insectos. ¿Es autótrofa o heterótrofa? Explícalo.", "Autótrofa: hace la fotosíntesis; los insectos solo le dan sales minerales."],
  ],
  quiz: [
    ["Los animales y los hongos son…", ["heterótrofos", "autótrofos", "productores"], "Alimentación."],
    ["La mayoría de los estomas están en…", ["la cara de abajo de la hoja", "las raíces", "las flores"], "Hoja."],
    ["La pérdida de vapor de agua por las hojas se llama…", ["transpiración", "fotosíntesis", "digestión"], "Agua."],
    ["Las plantas respiran…", ["de día y de noche", "solo de día", "nunca"], "Respiración."],
    ["En otoño las hojas amarillean porque desaparece la…", ["clorofila", "glucosa", "savia bruta"], "Pigmentos."],
    ["La patata es un…", ["tubérculo", "bulbo", "fruto"], "Reservas."],
    ["Con el yodo, el almidón se vuelve…", ["azul oscuro o negro", "rojo", "transparente"], "Experimento."],
    ["Las burbujas que suelta la elodea al sol son de…", ["oxígeno", "dióxido de carbono", "vapor de agua"], "Experimento."],
    ["Alrededor de la mitad del oxígeno lo produce el…", ["fitoplancton", "desierto", "ganado"], "Planeta."],
    ["Ingenhousz descubrió que la fotosíntesis necesita…", ["luz", "oscuridad", "tierra"], "1779."],
  ],
  examen: [
    ["Van Helmont pensaba que el sauce había crecido gracias al…", ["agua", "oro", "fuego"], "Lectura."],
    ["La respiración de las plantas sirve para…", ["obtener energía", "fabricar clorofila", "absorber agua"], "Respiración."],
    ["Los pelos absorbentes están en…", ["la raíz", "la hoja", "la flor"], "Agua."],
    ["El pino es un árbol de hoja…", ["perenne", "caduca", "roja"], "Otoño."],
    ["En un buen experimento se cambia…", ["una sola cosa cada vez", "todo a la vez", "nada"], "Método."],
    ["Los bosques que absorben CO₂ se llaman…", ["sumideros de carbono", "estomas", "tubérculos"], "Planeta."],
  ],
  tarjetas: [
    ["Autótrofos y heterótrofos", "Autótrofos fabrican su alimento (plantas, algas); heterótrofos lo toman de otros."],
    ["La hoja", "Ancha y plana; cloroplastos arriba; estomas abajo; nervios conducen."],
    ["Fotosíntesis y respiración", "Fotosíntesis solo con luz; respiración siempre."],
    ["Reservas", "Almidón en raíces, tubérculos, bulbos, semillas y frutos."],
    ["Historia", "Van Helmont (agua), Priestley 1771 (oxígeno), Ingenhousz 1779 (luz)."],
  ],
  glosario: [
    ["Autótrofo", "Ser vivo que fabrica su propio alimento."],
    ["Heterótrofo", "Ser vivo que se alimenta de otros seres vivos."],
    ["Epidermis", "Capa externa que protege la hoja."],
    ["Estoma", "Poro de la hoja por el que entran y salen gases."],
    ["Transpiración", "Pérdida de vapor de agua por las hojas."],
    ["Pelos absorbentes", "Pelillos de la raíz que absorben agua."],
    ["Pigmento", "Sustancia que da color."],
    ["Hoja caduca", "Hoja que cae en otoño o invierno."],
    ["Hoja perenne", "Hoja que se mantiene todo el año."],
    ["Almidón", "Reserva de alimento formada por muchas glucosas unidas."],
    ["Fitoplancton", "Algas microscópicas que flotan en el agua."],
    ["Sumidero de carbono", "Lugar que absorbe dióxido de carbono del aire."],
  ],
  situacion: {
    titulo: "El laboratorio verde",
    reto: "La clase investiga con experimentos qué necesitan las plantas para hacer la fotosíntesis y lo presenta en una feria científica.",
    pasos: ["Formulad preguntas: ¿necesitan luz?, ¿influye la cantidad de luz?, ¿transpiran todas las plantas igual?", "Diseñad experimentos cambiando una sola cosa: elodea con distintas luces, hojas tapadas con aluminio, bolsas en ramas.", "Registrad los resultados durante varios días con tablas, fotos y dibujos.", "Presentad las conclusiones en carteles y explicad por qué la fotosíntesis es vital para el planeta."],
    producto: "Carteles científicos con los experimentos y sus conclusiones.",
    evaluacion: ["Plantea preguntas investigables.", "Diseña experimentos con control.", "Registra datos con rigor.", "Comunica conclusiones con vocabulario científico."],
  },
});
