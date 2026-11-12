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
