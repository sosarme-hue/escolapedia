// Tecnología e Ingeniería II 2º Bachillerato · Tema 7. Nivel libro. Dibujos propios en SVG.
const { marco, T, flecha, ficha, pasos, compara, rejilla, barras, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU, uid } = require("./_bach2-ti");

// Máquina frigorífica entre dos focos.
const inversaSVG = (() => {
  const id = uid("mi");
  return marco("Esquema de una máquina frigorífica o bomba de calor: con un trabajo W extrae un calor Q2 del foco frío y cede un calor Q1 mayor al foco caliente", `
  <rect x="60" y="10" width="140" height="30" rx="8" fill="var(--red)" fill-opacity=".18" stroke="var(--red)" stroke-width="2"/>${T(130, 30, "Foco caliente T₁", { fs: 11.5, b: true, c: "var(--red)" })}
  <circle cx="130" cy="92" r="26" fill="var(--card)" stroke="var(--ink)" stroke-width="2.2"/>${T(130, 96, "máquina", { fs: 10.5, b: true })}
  <rect x="60" y="144" width="140" height="30" rx="8" fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2"/>${T(130, 164, "Foco frío T₂", { fs: 11.5, b: true, c: "var(--pen)" })}
  <path d="M130 66 V 44" stroke="var(--red)" stroke-width="3" marker-end="url(#${id})"/>${T(140, 60, "Q₁ = Q₂ + W", { fs: 11, b: true, c: "var(--red)", a: "start" })}
  <path d="M130 140 V 122" stroke="var(--pen)" stroke-width="3" marker-end="url(#${id})"/>${T(140, 136, "Q₂", { fs: 12, b: true, c: "var(--pen)", a: "start" })}
  <path d="M214 92 H 160" stroke="var(--leaf)" stroke-width="3" marker-end="url(#${id})"/>${T(232, 96, "W", { fs: 13, b: true, c: "var(--leaf)" })}
  ${T(42, 96, "el calor «sube»", { fs: 10, c: "var(--muted)" })}${T(42, 110, "gracias a W", { fs: 10, c: "var(--muted)" })}`, flecha(id, "var(--ink)"));
})();

// Circuito de compresión de vapor.
const circuitoSVG = (() => {
  const id = uid("cc");
  const serp = (x0, y, c) => `<path d="M${x0} ${y} ${Array.from({ length: 8 }, (_, i) => `q 5 ${i % 2 ? 10 : -10} 10 0`).join(" ")}" fill="none" stroke="${c}" stroke-width="3"/>`;
  return marco("Circuito frigorífico de compresión de vapor: el compresor envía vapor caliente al condensador, que cede calor; la válvula de expansión baja la presión y el evaporador absorbe calor del espacio frío", `
  <path d="M40 46 H 220 V 134 H 40 Z" fill="none" stroke="var(--muted)" stroke-width="2.4"/>
  <rect x="80" y="32" width="100" height="28" rx="6" fill="var(--red)" fill-opacity=".14" stroke="var(--red)" stroke-width="2"/>${serp(90, 46, "var(--red)")}${T(130, 24, "condensador → Q₁", { fs: 10.5, b: true, c: "var(--red)" })}
  <rect x="80" y="120" width="100" height="28" rx="6" fill="var(--pen)" fill-opacity=".14" stroke="var(--pen)" stroke-width="2"/>${serp(90, 134, "var(--pen)")}${T(130, 166, "evaporador ← Q₂", { fs: 10.5, b: true, c: "var(--pen)" })}
  <circle cx="220" cy="90" r="18" fill="var(--card)" stroke="var(--ink)" stroke-width="2.4"/><path d="M208 100 L 232 90 L 208 80" fill="none" stroke="var(--ink)" stroke-width="2"/>${T(198, 94, "compresor", { fs: 10, b: true, a: "end" })}${T(244, 122, "W", { fs: 12, b: true, c: "var(--leaf)", a: "end" })}
  <path d="M30 80 L 50 100 L 50 80 L 30 100 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.2"/>${T(56, 86, "válvula de", { fs: 10, b: true, a: "start" })}${T(56, 100, "expansión", { fs: 10, b: true, a: "start" })}
  <path d="M200 46 H 186" stroke="var(--ink)" stroke-width="2" marker-end="url(#${id})"/><path d="M60 134 H 74" stroke="var(--ink)" stroke-width="2" marker-end="url(#${id})"/>
  ${T(130, 76, "alta presión", { fs: 10, c: "var(--red)" })}${T(130, 110, "baja presión", { fs: 10, c: "var(--pen)" })}`, flecha(id, "var(--ink)"));
})();

// Diagrama presión-entalpía.
const phSVG = marco("Ciclo frigorífico en el diagrama presión-entalpía: evaporación a baja presión de 4 a 1, compresión de 1 a 2, condensación a alta presión de 2 a 3 y expansión a entalpía constante de 3 a 4", `
  <path d="M30 20 V 156 H 246" fill="none" stroke="var(--muted)" stroke-width="2"/>${T(22, 16, "log p", { fs: 10, b: true, c: "var(--muted)", a: "start" })}${T(246, 172, "h (kJ/kg)", { fs: 10, b: true, c: "var(--muted)", a: "end" })}
  <path d="M42 156 C 52 70, 96 30, 136 30 C 176 30, 196 80, 206 156" fill="var(--pen)" fill-opacity=".07" stroke="var(--muted)" stroke-width="1.6" stroke-dasharray="4 3"/>
  ${T(136, 46, "mezcla", { fs: 9.5, c: "var(--muted)" })}${T(44, 40, "líquido", { fs: 9.5, c: "var(--muted)", a: "start" })}${T(242, 40, "vapor", { fs: 9.5, c: "var(--muted)", a: "end" })}
  <path d="M74 66 V 120" stroke="var(--inf)" stroke-width="3" stroke-dasharray="6 4"/><path d="M74 120 H 198" stroke="var(--pen)" stroke-width="3.2"/><path d="M198 120 L 236 66" stroke="var(--leaf)" stroke-width="3.2"/><path d="M236 66 H 74" stroke="var(--red)" stroke-width="3.2"/>
  ${[[74, 66, "3", -12, 4], [74, 120, "4", -12, 12], [198, 120, "1", 6, 14], [236, 66, "2", 4, -6]].map(([x, y, t, dx, dy]) => `<circle cx="${x}" cy="${y}" r="4" fill="var(--ink)"/>${T(x + dx, y + dy, t, { fs: 11.5, b: true })}`).join("")}
  ${T(150, 82, "condensación (q_c)", { fs: 10, b: true, c: "var(--red)" })}${T(136, 136, "evaporación (q_e)", { fs: 10, b: true, c: "var(--pen)" })}${T(244, 100, "w", { fs: 11, b: true, c: "var(--leaf)", a: "end" })}`);

// Válvula de cuatro vías.
const reversibleSVG = compara("Bomba de calor reversible: en modo frío la unidad interior es el evaporador y la exterior el condensador; en modo calor una válvula de cuatro vías invierte el circuito", ["Modo frío (verano)", ["interior: evaporador", "absorbe calor de casa", "exterior: condensador", "expulsa calor fuera"]], ["Modo calor (invierno)", ["válvula de 4 vías", "interior: condensador", "exterior: evaporador", "toma calor del aire"]], "var(--pen)", "var(--red)");

module.exports = {
  materia: "Tecnología e Ingeniería II",
  curso: "2-bachillerato",
  titulo: "Máquinas frigoríficas y bomba de calor",
  minutos: 110,
  objetivos: [
    "Explicar cómo una máquina frigorífica o una bomba de calor transporta calor de un foco frío a uno caliente",
    "Calcular la eficiencia (COP o EER) de máquinas frigoríficas y bombas de calor, reales e ideales de Carnot",
    "Describir el ciclo de compresión de vapor y la función de cada componente",
    "Interpretar un ciclo frigorífico en el diagrama presión-entalpía y calcular sus energías",
    "Comparar refrigerantes y tecnologías (compresión, absorción, efecto Peltier) por su eficiencia y su impacto ambiental",
    "Valorar la bomba de calor como tecnología de climatización renovable y analizar su etiquetado energético",
  ],
  claves: ["máquina frigorífica", "bomba de calor", "COP", "EER", "Carnot inverso", "compresión de vapor", "compresor", "condensador", "válvula de expansión", "evaporador", "refrigerante", "calor latente", "diagrama presión-entalpía", "válvula de cuatro vías", "aerotermia", "absorción", "efecto Peltier", "SEER y SCOP"],
  pregunta: {
    texto: "Una bomba de calor puede calentar una casa entregando 4 kWh de calor por cada kWh de electricidad que consume. ¿No viola eso la conservación de la energía?",
    respuesta: "No. La bomba de calor no <i>fabrica</i> el calor: lo <mark>transporta</mark>. Con 1 kWh de trabajo eléctrico extrae unos 3 kWh del aire exterior, aunque esté frío, y entrega los 4 kWh en casa. Se cumple el primer principio, Q<sub>1</sub> = Q<sub>2</sub> + W. Su eficiencia (COP = 4) es mayor que 1 precisamente porque aprovecha energía del ambiente, que se considera renovable.",
  },
  lectura: {
    titulo: "La nevera de Einstein",
    html: `<p>En 1926, Albert Einstein leyó en el periódico que una familia de Berlín había muerto intoxicada por el refrigerante de su nevera, que había escapado por una junta del compresor. Junto con su antiguo alumno Leó Szilárd, se propuso diseñar un frigorífico sin piezas móviles, que no pudiera tener fugas. En 1930 patentaron una nevera de <b>absorción</b> que funcionaba solo con calor, usando amoníaco, butano y agua.</p><p>Su nevera nunca se comercializó: la aparición de los refrigerantes clorofluorocarbonados (CFC), que no eran tóxicos ni inflamables, hizo que los frigoríficos de compresión se impusieran. Pero en 1974 los químicos Mario Molina y Sherwood Rowland descubrieron que esos CFC destruían la capa de ozono. El Protocolo de Montreal de 1987 los prohibió, y sus sustitutos, los HFC, resultaron ser potentes gases de efecto invernadero.</p><p>Hoy los ingenieros vuelven a mirar los refrigerantes naturales (propano, CO<sub>2</sub>, amoníaco) y se investiga de nuevo con ciclos como el de Einstein. Comprender cómo funcionan estas máquinas es clave para el confort, la conservación de alimentos y la lucha contra el cambio climático.</p>`,
  },
  bloques: [
    bloque({ h: "7.1 Máquinas que transportan calor", p: [
      "Según el enunciado de <b>Clausius</b> del segundo principio, el calor no pasa espontáneamente de un cuerpo frío a otro más caliente. Para conseguirlo hay que aportar un <b>trabajo</b>. Las máquinas que lo hacen funcionan como una máquina térmica al revés: toman un calor Q<sub>2</sub> de un <b>foco frío</b> (a T<sub>2</sub>), reciben un trabajo W y ceden un calor Q<sub>1</sub> a un <b>foco caliente</b> (a T<sub>1</sub>). Por el primer principio:",
      formula("Q₁ = Q₂ + W"),
      "La misma máquina recibe nombres distintos según para qué se use. Una <mark>máquina frigorífica</mark> (frigorífico, congelador, aire acondicionado) se usa para <b>enfriar</b> el foco frío: lo útil es Q<sub>2</sub>. Una <mark>bomba de calor</mark> se usa para <b>calentar</b> el foco caliente (una vivienda, el agua sanitaria, una piscina): lo útil es Q<sub>1</sub>.",
      "Es como una bomba de agua que eleva agua de un pozo a un depósito: el agua no sube sola, pero con poca energía se puede subir mucha. Del mismo modo, con poco trabajo se puede «subir» mucho calor desde una temperatura baja a otra alta, siempre que la diferencia de temperaturas no sea grande.",
    ], svg: inversaSVG }),
    bloque({ h: "7.2 Eficiencia: COP y EER", p: [
      "En estas máquinas no se habla de rendimiento, porque el resultado puede ser mayor que 1, sino de <b>eficiencia</b> o <b>coeficiente de operación</b> (COP, del inglés <i>coefficient of performance</i>): lo que se obtiene entre lo que se paga.",
      formula("Frigorífica: COP<sub>f</sub> = EER = Q₂ / W &nbsp;&nbsp; Bomba de calor: COP<sub>bc</sub> = Q₁ / W"),
      "Como Q<sub>1</sub> = Q<sub>2</sub> + W, para la misma máquina entre los mismos focos se cumple que <b>COP<sub>bc</sub> = COP<sub>f</sub> + 1</b>. Por ejemplo, si un frigorífico extrae 300 J del interior consumiendo 100 J de electricidad, COP<sub>f</sub> = 3 y cede a la cocina 400 J. Funcionando como bomba de calor, el mismo aparato tendría COP<sub>bc</sub> = 4.",
      "En los catálogos de climatización, la eficiencia en modo refrigeración se llama <b>EER</b> (<i>energy efficiency ratio</i>) y en modo calefacción <b>COP</b>. Ambas se miden en condiciones estándar (por ejemplo, 35 °C exterior en frío y 7 °C en calor). Las potencias frigorífica y calorífica se expresan en kW, aunque en refrigeración también se usan las frigorías por hora (1 frig/h = 1,163 W) y en climatización las unidades británicas (1 BTU/h = 0,293 W).",
    ], svg: ficha("Fórmulas de eficiencia de máquinas frigoríficas y bombas de calor", "Eficiencias", ["Q₁ = Q₂ + W", "COPf = EER = Q₂ / W", "COPbc = Q₁ / W", "COPbc = COPf + 1"], "var(--pen)") }),
    bloque({ h: "7.3 El ciclo de Carnot inverso", p: [
      "Si se recorre el ciclo de Carnot en sentido contrario (antihorario en el diagrama p-V), se obtiene la máquina frigorífica ideal: absorbe Q<sub>2</sub> en una isoterma a T<sub>2</sub>, se comprime adiabáticamente, cede Q<sub>1</sub> en una isoterma a T<sub>1</sub> y se expande adiabáticamente. Como en el Carnot directo, Q<sub>1</sub>/Q<sub>2</sub> = T<sub>1</sub>/T<sub>2</sub>, de donde se obtienen las <b>eficiencias máximas</b> posibles entre dos focos:",
      formula("COP<sub>f, Carnot</sub> = T₂ / (T₁ − T₂) &nbsp;&nbsp; COP<sub>bc, Carnot</sub> = T₁ / (T₁ − T₂)"),
      "Ninguna máquina real puede superar estos valores. La consecuencia práctica es muy importante: la eficiencia es tanto mayor cuanto <mark>menor es la diferencia de temperaturas</mark> entre los focos. Un congelador a −18 °C en una cocina a 25 °C tiene un COP máximo de 255/43 = 5,9, mientras que una bomba de calor que calienta agua a 35 °C con aire a 5 °C podría llegar a 308/30 = 10,3.",
      "Por eso las bombas de calor se combinan con <b>suelo radiante</b> o radiadores de baja temperatura (35-45 °C) en lugar de radiadores convencionales (70 °C), y la geotermia, que toma calor del terreno a unos 15 °C todo el año, es más eficiente en invierno que la aerotermia, que lo toma del aire frío. Las máquinas reales alcanzan entre un 40 y un 60 % del COP de Carnot.",
    ], svg: barras("Eficiencia máxima de Carnot de una bomba de calor que entrega calor a 35 grados según la temperatura exterior: 30,8 con 25 grados, 10,3 con 5 grados y 6,2 con menos 15 grados", "COP de Carnot (entrega a 35 °C)", [["Exterior 25 °C", 30.8, "var(--leaf)", "30,8"], ["Exterior 5 °C", 10.3, "var(--pen)", "10,3"], ["Exterior −5 °C", 7.7, "var(--inf)", "7,7"], ["Exterior −15 °C", 6.2, "var(--red)", "6,2"]]) }),
    bloque({ h: "7.4 El ciclo de compresión de vapor", p: [
      "Casi todos los frigoríficos y bombas de calor funcionan con el <mark>ciclo de compresión de vapor</mark>. Aprovechan que un líquido absorbe mucho calor al evaporarse (como el sudor que se evapora de la piel) y lo cede al condensarse, y que la temperatura a la que hierve depende de la presión: a baja presión hierve a baja temperatura y a alta presión, a alta temperatura. El fluido que circula se llama <b>refrigerante</b>.",
      "El circuito tiene cuatro elementos. 1) El <b>evaporador</b>, dentro del espacio que se enfría: el refrigerante, a baja presión y baja temperatura (por ejemplo, −25 °C), hierve absorbiendo el calor Q<sub>2</sub>. 2) El <b>compresor</b>, accionado por un motor eléctrico, aspira el vapor y lo comprime: aumentan su presión y su temperatura (por ejemplo, hasta 60 °C). 3) El <b>condensador</b>, en el exterior (la rejilla negra de detrás del frigorífico): el vapor caliente cede el calor Q<sub>1</sub> al ambiente y se condensa. 4) La <b>válvula de expansión</b> o tubo capilar: el líquido a alta presión pasa por un estrechamiento, su presión cae bruscamente y parte del líquido se evapora, lo que lo enfría. Y el ciclo vuelve a empezar.",
      "El circuito tiene, por tanto, una zona de <b>alta presión</b> (del compresor a la válvula) y otra de <b>baja presión</b> (de la válvula al compresor). El calor absorbido en el evaporador más el trabajo del compresor es el calor que se expulsa en el condensador.",
    ], svg: circuitoSVG, video: V("mf-ciclo", "Cómo funciona el ciclo de refrigeración", "ciclo de refrigeración explicado") }),
    bloque({ h: "7.5 Los fluidos refrigerantes", p: [
      "Un buen <b>refrigerante</b> debe tener un punto de ebullición bajo, un calor latente de vaporización alto, presiones de trabajo moderadas, buena compatibilidad con los materiales y el aceite, y ser seguro (poco tóxico y poco inflamable). Se designan con la letra R y un número: R-134a, R-32, R-290 (propano), R-600a (isobutano), R-717 (amoníaco) o R-744 (dióxido de carbono).",
      "Su historia está ligada al medio ambiente. Los <b>CFC</b> (como el R-12) destruían la capa de ozono y se prohibieron con el <b>Protocolo de Montreal</b> (1987). Los <b>HCFC</b> (R-22) se eliminaron después. Los <b>HFC</b> (R-134a, R-410A) no dañan el ozono, pero tienen un <mark>potencial de calentamiento global</mark> (PCA o GWP) muy alto: 1 kg de R-410A equivale a unas 2 090 kg de CO<sub>2</sub>. La <b>Enmienda de Kigali</b> (2016) y el reglamento europeo de gases fluorados obligan a reducirlos progresivamente.",
      "Por eso se vuelve a los <b>refrigerantes naturales</b>: el isobutano (R-600a, PCA 3) en casi todos los frigoríficos domésticos, el propano (R-290) en bombas de calor, el CO<sub>2</sub> (R-744, PCA 1) en supermercados y bombas de calor de agua caliente, y el amoníaco en grandes instalaciones industriales. A cambio, algunos son inflamables o trabajan a presiones muy altas, lo que exige diseños y técnicos especializados.",
    ], svg: rejilla("Comparación de refrigerantes por su potencial de calentamiento global: R-410A unas 2090, R-134a unas 1430, R-32 unas 675, propano 3 y CO2 1", ["Refrigerante", "Tipo", "PCA"], [["R-410A", "HFC", "2 090"], ["R-134a", "HFC", "1 430"], ["R-32", "HFC", "675"], ["R-290 propano", "natural", "3"], ["R-744 CO₂", "natural", "1"]], "var(--leaf)") }),
    bloque({ h: "7.6 El diagrama presión-entalpía", p: [
      "Los técnicos frigoristas analizan el ciclo en el <mark>diagrama presión-entalpía</mark> (p-h o de Mollier) del refrigerante. La <b>entalpía específica</b> h (kJ/kg) es la energía que transporta cada kilogramo de fluido. En el diagrama aparece una «campana»: a su izquierda el fluido es líquido, a su derecha vapor y dentro una mezcla de los dos, en la que la presión y la temperatura van unidas.",
      "El ciclo ideal es un cuadrilátero: <b>4→1</b> evaporación a presión baja (horizontal), <b>1→2</b> compresión, idealmente isentrópica, <b>2→3</b> enfriamiento y condensación a presión alta (horizontal) y <b>3→4</b> expansión en la válvula, a entalpía constante (vertical). Las energías por kilogramo se leen directamente como diferencias de entalpía:",
      formula("q<sub>e</sub> = h₁ − h₄ &nbsp;&nbsp; w = h₂ − h₁ &nbsp;&nbsp; q<sub>c</sub> = h₂ − h₃ &nbsp;&nbsp; COP<sub>f</sub> = q<sub>e</sub> / w"),
      "Ejemplo con R-134a: h<sub>1</sub> = 395 kJ/kg, h<sub>2</sub> = 425 kJ/kg y h<sub>3</sub> = h<sub>4</sub> = 255 kJ/kg. El efecto frigorífico es q<sub>e</sub> = 140 kJ/kg, el trabajo w = 30 kJ/kg, el calor cedido q<sub>c</sub> = 170 kJ/kg y COP<sub>f</sub> = 140/30 = 4,67. Para obtener 2 kW de potencia frigorífica hay que hacer circular ṁ = 2/140 = 0,0143 kg/s de refrigerante, y el compresor consume 0,0143 · 30 = 0,43 kW.",
      "En los ciclos reales, el vapor se <b>recalienta</b> un poco antes de entrar en el compresor (para que no entren gotas de líquido, que lo dañarían) y el líquido se <b>subenfría</b> antes de la válvula (lo que aumenta el efecto frigorífico).",
    ], svg: phSVG, video: V("mf-mollier", "Diagrama de Mollier presión-entalpía", "diagrama presión entalpía ciclo frigorífico") }),
    bloque({ h: "7.7 Los componentes en detalle", p: [
      "El <b>compresor</b> es el corazón del sistema y el que consume la energía. Los hay <b>alternativos</b> (de pistón, como un pequeño motor al revés), <b>rotativos</b> (de paletas o de rodillo), <b>scroll</b> (dos espirales, una fija y otra que orbita, muy usados en climatización) y de <b>tornillo</b> o <b>centrífugos</b> para grandes potencias. En los equipos domésticos el motor y el compresor están dentro de una carcasa soldada (compresor <b>hermético</b>).",
      "Los compresores con tecnología <b>inverter</b> regulan la velocidad del motor mediante un variador de frecuencia: en lugar de arrancar y parar continuamente (todo o nada), ajustan la potencia a la demanda. Consumen hasta un 30-40 % menos y mantienen la temperatura más estable.",
      "El <b>condensador</b> y el <b>evaporador</b> son intercambiadores de calor: tubos de cobre con aletas de aluminio para aumentar la superficie, a menudo con un ventilador que fuerza el paso de aire. El <b>dispositivo de expansión</b> puede ser un simple <b>tubo capilar</b> (frigoríficos domésticos), una <b>válvula de expansión termostática</b>, que regula el paso de refrigerante según la temperatura a la salida del evaporador, o una <b>válvula electrónica</b>, controlada por un microprocesador. Además hay filtros deshidratadores, visores de líquido, presostatos de seguridad y un termostato que gobierna todo el sistema.",
    ], svg: figura("Componentes del circuito frigorífico", "Compresor, intercambiadores, expansión y control", [["Compresor", "pistón · rotativo", "scroll · inverter"], ["Condensador", "cede Q₁", "aletas y ventilador"], ["Expansión", "capilar · termostática", "electrónica"], ["Evaporador", "absorbe Q₂", "control: termostato"]], "var(--pen)") }),
    bloque({ h: "7.8 El frigorífico doméstico", p: [
      "Un frigorífico doméstico tiene un circuito de compresión con isobutano, un compresor hermético en la parte inferior trasera, el condensador detrás o en los laterales y el evaporador en la pared interior del congelador. El <b>aislamiento</b> de espuma de poliuretano, de 4 a 8 cm, limita la entrada de calor, y las juntas magnéticas de las puertas evitan las fugas de aire frío.",
      "En los modelos convencionales el evaporador está en contacto con el aire interior y se forma escarcha, que actúa como aislante y obliga a descongelar periódicamente. Los frigoríficos <b>No Frost</b> tienen el evaporador oculto y un ventilador que hace circular el aire frío; unas resistencias funden la escarcha automáticamente. Los combis tienen dos compartimentos (frigorífico a unos 4 °C y congelador a −18 °C), a veces con dos circuitos independientes.",
      "La <b>etiqueta energética</b> europea, reescalada en 2021, clasifica los frigoríficos de la A (más eficiente) a la G e indica el consumo anual en kWh. Un frigorífico combi de clase A puede consumir menos de 100 kWh/año, y uno antiguo, más de 400. Unos buenos hábitos ahorran energía: no meter alimentos calientes, abrir la puerta lo menos posible, dejar espacio para ventilar el condensador y regular el termostato a 4-5 °C en el frigorífico y −18 °C en el congelador.",
    ], svg: pasos("Consejos para ahorrar energía con el frigorífico: termostato a 4 y menos 18 grados, ventilar el condensador, no meter comida caliente y abrir poco la puerta", ["Termostato: 4 °C y −18 °C", "Condensador ventilado", "Nada caliente dentro", "Abrir poco la puerta"], "var(--leaf)") }),
    bloque({ h: "7.9 Aire acondicionado y bomba de calor reversible", p: [
      "Los equipos de aire acondicionado de tipo <b>split</b> tienen dos unidades conectadas por tuberías de refrigerante: la <b>interior</b>, con un intercambiador y un ventilador silencioso, y la <b>exterior</b>, con el compresor, el otro intercambiador y un ventilador más potente. En verano, el intercambiador interior actúa como evaporador y enfría y deshumidifica el aire de la habitación, y el exterior como condensador.",
      "Casi todos los equipos actuales son <mark>reversibles</mark>: una <b>válvula de cuatro vías</b> invierte el sentido de circulación del refrigerante, de modo que en invierno el intercambiador interior pasa a ser el condensador (calienta la habitación) y el exterior el evaporador (toma calor del aire de la calle, incluso a −15 °C). Así, el mismo equipo funciona como máquina frigorífica en verano y como bomba de calor en invierno.",
      "En modo calor, cuando el aire exterior está frío y húmedo, se forma escarcha en la unidad exterior; el equipo hace ciclos de <b>desescarche</b>, invirtiendo el ciclo durante unos minutos. Hay también sistemas centralizados: equipos compactos con conductos, sistemas multisplit (una unidad exterior para varias interiores) y sistemas de <b>caudal variable de refrigerante</b> (VRF) para edificios, que pueden enfriar y calentar zonas distintas a la vez.",
    ], svg: reversibleSVG }),
    bloque({ h: "7.10 Aerotermia, geotermia e hidrotermia", p: [
      "Las bombas de calor se clasifican por el foco del que toman el calor y el medio al que lo entregan. Las <b>aire-aire</b> son los equipos de aire acondicionado reversibles. Las <b>aire-agua</b>, conocidas como <mark>aerotermia</mark>, toman calor del aire exterior y calientan agua para suelo radiante, radiadores de baja temperatura o agua caliente sanitaria (ACS); sustituyen a las calderas de gas o gasóleo.",
      "La <b>geotermia</b> de baja entalpía toma el calor del terreno mediante sondas verticales (de 50 a 150 m) o captadores horizontales enterrados. Como el subsuelo está a una temperatura casi constante (unos 15 °C), su COP es alto y estable todo el año, pero la instalación es más cara. La <b>hidrotermia</b> toma el calor de un río, un lago, el mar o un acuífero.",
      "La normativa europea considera que la energía que la bomba de calor toma del ambiente es <b>renovable</b> si su rendimiento estacional (SPF o SCOP) es suficientemente alto (en la práctica, mayor de 2,5). Por ejemplo, si una vivienda necesita 12 000 kWh de calor al año y su aerotermia tiene un SCOP de 3,5, consume 3 429 kWh de electricidad y aprovecha 8 571 kWh renovables del aire. Si la electricidad procede de placas solares, el sistema se acerca a las emisiones nulas. Por eso la bomba de calor es la tecnología clave para descarbonizar la calefacción.",
    ], svg: compara("Tipos de bomba de calor según el foco: la aerotermia toma calor del aire, es más barata y su eficiencia baja con el frío; la geotermia lo toma del terreno, es más cara y su eficiencia es estable", ["Aerotermia", ["foco: aire exterior", "instalación sencilla", "COP baja con frío", "SCOP ≈ 3-4,5"]], ["Geotermia", ["foco: terreno 15 °C", "sondas: más cara", "COP estable", "SCOP ≈ 4-5,5"]], "var(--pen)", "var(--leaf)"), video: V("mf-aerotermia", "Qué es la aerotermia y cómo funciona", "aerotermia cómo funciona") }),
    bloque({ h: "7.11 Otros sistemas: absorción y efecto Peltier", p: [
      "Las <b>máquinas de absorción</b> sustituyen el compresor mecánico por un «compresor térmico». El refrigerante (amoníaco o agua) se evapora en el evaporador y es absorbido por otra sustancia (agua o bromuro de litio, respectivamente) en el <b>absorbedor</b>. Una bomba pequeña lleva la disolución al <b>generador</b>, donde se calienta con una llama, vapor o agua caliente, y se separa el refrigerante a alta presión, que pasa al condensador.",
      "Su COP es bajo (de 0,6 a 1,2), pero usan calor en lugar de electricidad, por lo que son interesantes cuando hay calor gratuito o residual: energía solar térmica, calor de una industria o de un motor (<b>trigeneración</b>, que produce a la vez electricidad, calor y frío). Las neveras de los hoteles y de las caravanas suelen ser de absorción porque son silenciosas y pueden funcionar con gas.",
      "Las <b>células Peltier</b> se basan en el <b>efecto termoeléctrico</b>: al pasar corriente continua por la unión de dos semiconductores diferentes, una cara se enfría y la otra se calienta. No tienen piezas móviles, son silenciosas, compactas y precisas, pero su COP es muy bajo (0,3-0,7). Se usan en neveras portátiles, enfriadores de procesadores, sensores y dispositivos médicos.",
    ], svg: rejilla("Comparación de tecnologías de refrigeración: compresión de vapor con COP 2 a 5 y energía eléctrica, absorción con COP 0,6 a 1,2 y calor, y Peltier con COP 0,3 a 0,7 y corriente continua", ["Tecnología", "Energía", "COP frig."], [["Compresión", "eléctrica", "2 a 5"], ["Absorción", "calor", "0,6 a 1,2"], ["Peltier", "c. continua", "0,3 a 0,7"]], "var(--pen)"), video: V("mf-peltier", "Cómo funciona tu frigorífico: bombas de calor y células Peltier", "células peltier cómo funcionan") }),
    bloque({ h: "7.12 Cálculo de cargas térmicas", p: [
      "Para elegir una máquina frigorífica hay que calcular cuánto calor debe extraer. El <b>calor sensible</b> es el que cambia la temperatura de un cuerpo sin cambiar su estado; el <b>calor latente</b> es el que cambia su estado sin cambiar su temperatura:",
      formula("Q<sub>sensible</sub> = m · c · ΔT &nbsp;&nbsp; Q<sub>latente</sub> = m · L"),
      "Para el agua, c = 4,18 kJ/(kg·K) en estado líquido y 2,1 kJ/(kg·K) en hielo, y el calor latente de fusión es L<sub>f</sub> = 334 kJ/kg. Así, para convertir 1 kg de agua a 20 °C en hielo a −18 °C hay que extraer 4,18 · 20 + 334 + 2,1 · 18 = 83,6 + 334 + 37,8 = 455,4 kJ. Con una potencia frigorífica de 150 W, tardaría 455 400/150 = 3 036 s, unos 51 minutos.",
      "En climatización se estima la carga sumando el calor que entra por paredes, ventanas y techo (que depende del aislamiento y de la orientación), el de la radiación solar, el de las personas (unos 100-120 W cada una), los equipos, la iluminación y la ventilación. Como regla rápida, en España se usan valores de 100 a 150 W por metro cuadrado de vivienda para refrigeración, aunque los edificios muy aislados necesitan mucho menos. Conocida la carga, la potencia eléctrica necesaria es la carga entre el EER.",
    ], svg: ficha("Fórmulas para calcular cargas térmicas: calor sensible, calor latente, potencia y tiempo", "Cargas térmicas", ["Q = m · c · ΔT", "Q = m · L (cambio de estado)", "t = Q / P_frigorífica", "P_eléctrica = carga / EER"], "var(--red)") }),
    bloque({ h: "7.13 Eficiencia estacional y etiquetado", p: [
      "El COP y el EER se miden en unas condiciones concretas, pero a lo largo del año la temperatura exterior y la demanda cambian, y el equipo funciona muchas horas a carga parcial. Por eso el etiquetado europeo de los equipos de climatización usa índices <b>estacionales</b>: el <b>SEER</b> (eficiencia estacional en refrigeración) y el <b>SCOP</b> (en calefacción), calculados para un clima de referencia.",
      formula("Consumo eléctrico anual = demanda anual / SEER (o SCOP)"),
      "Por ejemplo, si una vivienda necesita 1 500 kWh de frío al año y el equipo tiene un SEER de 6,1, consumirá unos 246 kWh de electricidad. Con un equipo antiguo de SEER 3, consumiría 500 kWh. Las clases energéticas de los aires acondicionados van de A+++ a D, y para obtener la A+++ en frío hace falta un SEER de al menos 8,5.",
      "Las calderas y las bombas de calor de calefacción se comparan con la <b>eficiencia energética estacional</b> en energía primaria, que tiene en cuenta cómo se produce la electricidad. Aun así, una aerotermia suele consumir de 2,5 a 3 veces menos energía primaria que una caldera de gas de condensación, y con electricidad renovable la diferencia en emisiones es todavía mayor.",
    ], svg: barras("Consumo eléctrico anual para 1500 kilovatios hora de frío según el SEER del equipo: 500 con SEER 3, 300 con SEER 5, 246 con SEER 6,1 y 176 con SEER 8,5", "kWh eléctricos para 1 500 kWh de frío", [["SEER 3", 500, "var(--red)", "500"], ["SEER 5", 300, "var(--inf)", "300"], ["SEER 6,1", 246, "var(--pen)", "246"], ["SEER 8,5", 176, "var(--leaf)", "176"]]) }),
    bloque({ h: "7.14 Impacto ambiental y normativa", p: [
      "Las máquinas frigoríficas tienen dos tipos de impacto sobre el clima. El <b>directo</b> se debe a las fugas de refrigerante durante el funcionamiento, el mantenimiento y, sobre todo, al desguace de los aparatos. El <b>indirecto</b> se debe a las emisiones de CO<sub>2</sub> de la electricidad que consumen durante su vida útil. El indicador <b>TEWI</b> (impacto total equivalente de calentamiento) suma los dos.",
      "La refrigeración y el aire acondicionado consumen alrededor del 10 % de la electricidad mundial, y la demanda crece rápidamente por el calentamiento global y el aumento del nivel de vida. Por eso la normativa actúa en tres frentes: la eliminación de refrigerantes de alto PCA (reglamento europeo de gases fluorados, que prohíbe los HFC de alto PCA en muchos equipos nuevos), la obligación de recuperar el refrigerante al desmontar los aparatos (que deben llevarse a un punto limpio como residuo de aparatos eléctricos), y la exigencia de eficiencias mínimas (diseño ecológico y etiquetado).",
      "En España, el <b>Reglamento de Instalaciones Térmicas en los Edificios</b> (RITE) regula el diseño, la instalación y el mantenimiento de la climatización, y solo pueden manipular refrigerantes los profesionales con certificado. El buen diseño de los edificios (aislamiento, sombreamiento, ventilación cruzada) es la primera medida: el frío más eficiente es el que no hace falta producir.",
    ], svg: pasos("Medidas para reducir el impacto de la refrigeración: diseñar edificios que necesiten poco frío, usar equipos eficientes, elegir refrigerantes de bajo PCA y recuperar el refrigerante al final de la vida útil", ["Edificio bien diseñado", "Equipo eficiente (SEER)", "Refrigerante de bajo PCA", "Recuperar al desguazar"], "var(--leaf)") }),
  ],
  figura: figura("Máquinas frigoríficas", "Transportar calor del foco frío al caliente con trabajo", [["Principio", "Q₁ = Q₂ + W", "Clausius"], ["Eficiencia", "COPf = Q₂/W", "COPbc = Q₁/W"], ["Ciclo", "evaporador → compresor", "condensador → válvula"], ["Aplicaciones", "frigorífico · A/A", "aerotermia · geotermia"]], "var(--pen)"),
  video: V("mf-ciclo", "Cómo funciona el ciclo de refrigeración", "ciclo de refrigeración explicado"),
  ejemplos: [
    { enunciado: "Un frigorífico extrae 450 kJ por hora de su interior y su compresor consume 50 W. Calcula su COP y el calor que cede a la cocina cada hora.", pasos: ["W en una hora: 50 · 3 600 = 180 kJ.", "COP<sub>f</sub> = Q₂/W = 450/180 = 2,5.", "Q₁ = Q₂ + W = 450 + 180 = 630 kJ."], resultado: "COP<sub>f</sub> = 2,5 y cede 630 kJ cada hora." },
    { enunciado: "Calcula el COP máximo de un congelador a −18 °C en una cocina a 25 °C y el de una bomba de calor que calienta agua a 35 °C tomando calor del aire a 5 °C.", pasos: ["Congelador: T₂ = 255 K, T₁ = 298 K. COP = 255/43.", "Bomba de calor: T₁ = 308 K, T₂ = 278 K. COP = 308/30.", "Cuanto menor es la diferencia de temperaturas, mayor es la eficiencia."], resultado: "COP<sub>f</sub> máx. = 5,93 y COP<sub>bc</sub> máx. = 10,3." },
    { enunciado: "Una bomba de calor con COP = 4 debe aportar 10 kW a una vivienda. Calcula la potencia eléctrica y el calor que toma del exterior.", pasos: ["W = Q₁/COP = 10/4 = 2,5 kW.", "Q₂ = Q₁ − W = 10 − 2,5 = 7,5 kW.", "El 75 % de la energía procede del aire exterior."], resultado: "2,5 kW eléctricos y 7,5 kW tomados del ambiente." },
    { enunciado: "En un ciclo de R-134a, h₁ = 395 kJ/kg, h₂ = 425 kJ/kg y h₃ = h₄ = 255 kJ/kg. Calcula el COP y el caudal de refrigerante para 2 kW de frío.", pasos: ["q<sub>e</sub> = 395 − 255 = 140 kJ/kg; w = 425 − 395 = 30 kJ/kg.", "COP<sub>f</sub> = 140/30 = 4,67.", "ṁ = 2/140 = 0,0143 kg/s; potencia del compresor: 0,0143 · 30 = 0,43 kW."], resultado: "COP<sub>f</sub> = 4,67 y 0,0143 kg/s (unos 51 kg/h)." },
    { enunciado: "¿Cuánto tarda un congelador de 150 W de potencia frigorífica en convertir 1 kg de agua a 20 °C en hielo a −18 °C?", pasos: ["Enfriar el agua: 1 · 4,18 · 20 = 83,6 kJ.", "Congelar: 1 · 334 = 334 kJ. Enfriar el hielo: 1 · 2,1 · 18 = 37,8 kJ.", "Total: 455,4 kJ; t = 455 400/150 = 3 036 s."], resultado: "Unos 51 minutos (sin contar las pérdidas)." },
    { enunciado: "Una vivienda necesita 12 000 kWh de calefacción al año. Compara el consumo de una aerotermia (SCOP = 3,5) con el de una caldera de gas (rendimiento 92 %).", pasos: ["Aerotermia: 12 000/3,5 = 3 429 kWh de electricidad.", "Energía renovable aprovechada: 12 000 − 3 429 = 8 571 kWh.", "Caldera: 12 000/0,92 = 13 043 kWh de gas."], resultado: "La aerotermia consume unas 3,8 veces menos energía final." },
  ],
  errores: [
    "Llamar «rendimiento» al COP y pensar que no puede ser mayor que 1: la máquina transporta calor, no lo crea.",
    "Usar °C en las fórmulas de Carnot: COP = T₂/(T₁ − T₂) exige kelvin en el numerador.",
    "Confundir el COP frigorífico (útil Q₂) con el de bomba de calor (útil Q₁): COP<sub>bc</sub> = COP<sub>f</sub> + 1.",
    "Pensar que el compresor «produce frío»: el frío se produce al evaporarse el refrigerante en el evaporador.",
    "Olvidar el calor latente en el cálculo de cargas: congelar el agua requiere mucha más energía que enfriarla.",
    "Creer que dejar abierto un frigorífico enfría la cocina: el calor que expulsa el condensador es mayor que el que absorbe.",
  ],
  ejercicios: [
    B("¿Qué dice el enunciado de Clausius del segundo principio y qué relación tiene con las máquinas frigoríficas?", "El calor no pasa espontáneamente de un cuerpo frío a uno caliente. Las máquinas frigoríficas lo consiguen aportando trabajo."),
    B("Un frigorífico extrae 600 J del interior y cede 800 J a la cocina. Calcula el trabajo y el COP.", "W = 200 J; COP<sub>f</sub> = 600/200 = 3."),
    B("Si el COP frigorífico de un equipo es 3,2, ¿cuál es su COP como bomba de calor?", "COP<sub>bc</sub> = 3,2 + 1 = 4,2."),
    B("Una bomba de calor consume 1,5 kW con COP = 3,8. ¿Qué potencia calorífica entrega?", "Q₁ = 3,8 · 1,5 = 5,7 kW."),
    B("Calcula el COP de Carnot de un frigorífico a 5 °C en una habitación a 25 °C.", "278/20 = 13,9."),
    B("Ordena los componentes del circuito frigorífico en el sentido de circulación del refrigerante y di en cuáles hay alta presión.", "Compresor → condensador → válvula de expansión → evaporador → compresor. Alta presión: desde la salida del compresor, pasando por el condensador, hasta la válvula."),
    B("¿Por qué la parte trasera de un frigorífico está caliente?", "Porque allí está el condensador, que cede al ambiente el calor extraído del interior más el trabajo del compresor."),
    B("Pasa a vatios: 3 000 frig/h y 12 000 BTU/h.", "3 000 · 1,163 = 3 489 W; 12 000 · 0,293 = 3 516 W."),
    B("¿Qué ventajas tiene un compresor inverter frente a uno de todo o nada?", "Ajusta la velocidad a la demanda: menos consumo (30-40 %), temperatura más estable, menos ruido y menos arranques."),
    B("Nombra dos refrigerantes naturales y di dónde se usan.", "Isobutano (R-600a) en frigoríficos domésticos; CO<sub>2</sub> (R-744) en supermercados y bombas de calor de ACS; también propano (R-290) y amoníaco (R-717)."),
    B("¿Qué función tiene la válvula de cuatro vías?", "Invierte el sentido del refrigerante para que el equipo pase de enfriar a calentar (bomba de calor reversible)."),
    B("Calcula el calor necesario para enfriar 3 kg de agua de 25 °C a 5 °C.", "Q = 3 · 4,18 · 20 = 250,8 kJ."),
    M("Un aire acondicionado con EER = 3,5 debe extraer 5 kW de una oficina. Calcula la potencia eléctrica y el calor que expulsa al exterior.", "W = 5/3,5 = 1,43 kW; Q₁ = 5 + 1,43 = 6,43 kW."),
    M("Un congelador funciona entre −20 °C y 30 °C con un COP real del 45 % del de Carnot. Si extrae 200 W, ¿cuánto consume?", "COP<sub>Carnot</sub> = 253/50 = 5,06; COP real = 2,28. W = 200/2,28 = 87,7 W."),
    M("Una bomba de calor geotérmica trabaja entre 12 °C y 40 °C y otra de aerotermia entre −5 °C y 40 °C. Compara sus COP de Carnot.", "Geotermia: 313/28 = 11,2. Aerotermia: 313/45 = 6,96. La geotérmica puede ser un 60 % más eficiente."),
    M("En un ciclo frigorífico, h₁ = 400 kJ/kg, h₂ = 435 kJ/kg y h₃ = 250 kJ/kg. Calcula q<sub>e</sub>, w, q<sub>c</sub>, el COP<sub>f</sub> y el COP<sub>bc</sub>.", "q<sub>e</sub> = 150; w = 35; q<sub>c</sub> = 185 kJ/kg. COP<sub>f</sub> = 4,29; COP<sub>bc</sub> = 5,29."),
    M("Con el ciclo anterior, ¿qué caudal de refrigerante hace falta para 7 kW de frío? ¿Qué potencia consume el compresor?", "ṁ = 7/150 = 0,0467 kg/s; P = 0,0467 · 35 = 1,63 kW."),
    M("Una cámara frigorífica debe congelar 500 kg de pescado (c = 3,6 kJ/(kg·K) antes y 1,8 después; L = 250 kJ/kg; congela a −2 °C) desde 8 °C hasta −20 °C en 10 h. Calcula la potencia frigorífica media.", "Q = 500 · (3,6 · 10 + 250 + 1,8 · 18) = 500 · 318,4 = 159 200 kJ. P = 159 200/36 000 = 4,42 kW."),
    M("Un frigorífico de 120 kWh/año sustituye a otro de 420 kWh/año. Con la electricidad a 0,18 €/kWh y 0,2 kg CO<sub>2</sub>/kWh, calcula el ahorro anual.", "300 kWh/año: 54 € y 60 kg de CO<sub>2</sub> al año."),
    M("Una vivienda de 90 m² necesita 120 W/m² de refrigeración. ¿Qué potencia frigorífica hace falta y qué consumo tendrá con un EER de 3,2?", "P = 10,8 kW; consumo eléctrico 10,8/3,2 = 3,4 kW."),
    M("Una aerotermia entrega 9 000 kWh al año con un SCOP de 3,2. Calcula la electricidad que consume y la energía renovable que aprovecha.", "9 000/3,2 = 2 812,5 kWh; renovable: 6 187,5 kWh."),
    M("Una nevera de absorción de 80 W de frío tiene un COP de 0,5. ¿Cuánto calor necesita? ¿Por qué se usa a pesar de su baja eficiencia?", "160 W de calor. Puede funcionar con gas o calor residual, es silenciosa y no tiene piezas móviles."),
    M("Una célula Peltier extrae 20 W con un COP de 0,5. ¿Cuánto calor debe disipar su cara caliente?", "W = 40 W; Q₁ = 20 + 40 = 60 W: necesita un buen disipador."),
    A("Un equipo reversible tiene en verano un EER de 3,5 (35 °C exterior, 27 °C interior) y en invierno un COP de 3,8 (7 °C exterior, 20 °C interior). Calcula la fracción del COP de Carnot que alcanza en cada caso.", "Frío: Carnot = 300/8 = 37,5 → 3,5/37,5 = 9,3 %. Calor: Carnot = 293/13 = 22,5 → 16,9 %. (En la realidad el refrigerante trabaja con más salto térmico que el aire, por los intercambiadores.)"),
    A("Con temperaturas reales de refrigerante de 5 °C en el evaporador y 50 °C en el condensador, recalcula el COP de Carnot en modo frío y la fracción que alcanza un EER de 3,5.", "COP = 278/45 = 6,18; 3,5/6,18 = 57 %. Las diferencias en los intercambiadores reducen mucho la eficiencia."),
    A("Una pista de hielo de 1 800 m² necesita mantener el hielo con unas pérdidas de 150 W/m². Si la instalación tiene un COP<sub>f</sub> de 2,8 y aprovecha el calor del condensador para calentar el agua de las duchas, ¿cuánta potencia eléctrica consume y cuánto calor útil puede aprovechar?", "Carga: 270 kW. W = 270/2,8 = 96,4 kW. Calor del condensador: 366,4 kW, aprovechable para ACS y calefacción."),
    A("Compara las emisiones de CO<sub>2</sub> anuales de calentar una vivienda (10 000 kWh) con caldera de gas (η = 0,92; 0,25 kg CO<sub>2</sub>/kWh de gas) y con aerotermia (SCOP 3,5; 0,15 kg CO<sub>2</sub>/kWh eléctrico).", "Gas: 10 000/0,92 · 0,25 = 2 717 kg. Aerotermia: 10 000/3,5 · 0,15 = 429 kg. La aerotermia emite un 84 % menos."),
    A("Calcula el impacto directo de la fuga de 1,2 kg de R-410A (PCA 2 088) y compáralo con el indirecto de un aire acondicionado que consume 400 kWh/año durante 12 años con 0,15 kg CO<sub>2</sub>/kWh.", "Directo: 1,2 · 2 088 = 2 506 kg CO<sub>2</sub> eq. Indirecto: 400 · 12 · 0,15 = 720 kg. La fuga pesa más del triple: recuperar el refrigerante es esencial."),
    A("Un fabricante sustituye el R-410A por R-32 (PCA 675) con la misma carga. ¿En qué porcentaje se reduce el impacto directo? ¿Y con propano (PCA 3)?", "R-32: (2 088 − 675)/2 088 = 67,7 % menos. Propano: 99,9 % menos (pero es inflamable y limita la carga)."),
    A("Diseña la secuencia de funcionamiento del desescarche de una bomba de calor aire-agua: qué detecta, qué hace la válvula de cuatro vías y qué pasa con los ventiladores.", "Detecta escarcha (sondas de temperatura o presión de evaporación baja); la válvula de cuatro vías invierte el ciclo para que el gas caliente pase por la unidad exterior; se paran los ventiladores exteriores; al fundirse el hielo, vuelve al modo calor."),
    A("Un supermercado tiene muebles frigoríficos que extraen 60 kW con COP<sub>f</sub> = 2,5 durante 6 000 h/año. Se propone cerrar los muebles con puertas, lo que reduce la carga un 35 %. Calcula el ahorro anual de electricidad y su valor a 0,15 €/kWh.", "Consumo actual: 60/2,5 · 6 000 = 144 000 kWh. Ahorro: 35 % → 50 400 kWh = 7 560 €/año."),
  ],
  quiz: [
    q4("En una máquina frigorífica se cumple…", ["Q₂ = Q₁ + W", "Q₁ = Q₂ + W", "W = Q₁ + Q₂", "Q₁ = Q₂"], 1, "Primer principio."),
    q4("El COP de una máquina frigorífica es…", ["Q₁/W", "Q₂/W", "W/Q₂", "Q₂/Q₁"], 1, "Lo útil es Q₂."),
    q4("El COP de una bomba de calor es…", ["Q₁/W", "Q₂/W", "W/Q₁", "Q₁/Q₂"], 0, "Lo útil es Q₁."),
    q4("Para una misma máquina, COP<sub>bc</sub> =", ["COP<sub>f</sub>", "COP<sub>f</sub> + 1", "COP<sub>f</sub> − 1", "1/COP<sub>f</sub>"], 1, "Q₁ = Q₂ + W."),
    q4("El COP de Carnot frigorífico es…", ["T₁/(T₁ − T₂)", "T₂/(T₁ − T₂)", "1 − T₂/T₁", "T₂/T₁"], 1, "Con temperaturas en K."),
    q4("La eficiencia de una bomba de calor aumenta si…", ["aumenta la diferencia de temperaturas", "disminuye la diferencia de temperaturas", "aumenta la potencia", "se usa R-410A"], 1, "Menor salto térmico."),
    q4("El refrigerante absorbe calor en…", ["el compresor", "el condensador", "el evaporador", "la válvula"], 2, "Al evaporarse."),
    q4("El refrigerante cede calor en…", ["el condensador", "el evaporador", "la válvula", "el filtro"], 0, "Al condensarse."),
    q4("La válvula de expansión…", ["aumenta la presión", "reduce la presión", "comprime el vapor", "evapora todo el líquido"], 1, "Separa alta y baja presión."),
    q4("En el diagrama p-h, la expansión en la válvula es…", ["horizontal", "vertical (h constante)", "inclinada", "una curva"], 1, "Isentálpica."),
    q4("El efecto frigorífico por kg es…", ["h₂ − h₁", "h₁ − h₄", "h₂ − h₃", "h₃ − h₄"], 1, "Evaporación."),
    q4("Los CFC se prohibieron porque…", ["eran tóxicos", "destruían la capa de ozono", "eran caros", "eran inflamables"], 1, "Protocolo de Montreal."),
    q4("El refrigerante con menor PCA es…", ["R-410A", "R-134a", "R-32", "R-744 (CO₂)"], 3, "PCA = 1."),
    q4("La válvula de cuatro vías sirve para…", ["regular la presión", "invertir el ciclo", "desescarchar el congelador", "filtrar humedad"], 1, "Bomba de calor reversible."),
    q4("La aerotermia toma el calor…", ["del terreno", "del aire exterior", "del agua de un río", "de una caldera"], 1, "Bomba de calor aire-agua."),
    q4("Una máquina de absorción funciona con…", ["solo electricidad", "calor", "aire comprimido", "imanes"], 1, "Compresor térmico."),
    q4("Una célula Peltier se basa en…", ["la absorción", "el efecto termoeléctrico", "la compresión", "la evaporación de agua"], 1, "Corriente en semiconductores."),
    q4("El calor latente de fusión del agua es…", ["4,18 kJ/kg", "334 kJ/kg", "2 257 kJ/kg", "100 kJ/kg"], 1, "334 kJ/kg."),
    q4("El SEER mide…", ["la eficiencia estacional en frío", "la potencia máxima", "el ruido", "la eficiencia en calor"], 0, "Etiquetado de A/A."),
    q4("La energía que una bomba de calor toma del aire se considera…", ["fósil", "renovable", "nuclear", "perdida"], 1, "Si el SCOP es suficientemente alto."),
  ],
  examen: [
    q4("Un frigorífico extrae 900 J con W = 300 J. COP<sub>f</sub> =", ["0,33", "3", "4", "1 200"], 1, "900/300."),
    q4("Con los datos anteriores, Q₁ =", ["600 J", "900 J", "1 200 J", "300 J"], 2, "900 + 300."),
    q4("Bomba de calor con COP = 5 que entrega 10 kW. W =", ["50 kW", "2 kW", "5 kW", "8 kW"], 1, "10/5."),
    q4("COP de Carnot de bomba de calor entre 300 K y 270 K:", ["9", "10", "11", "0,1"], 1, "300/30."),
    q4("h₁ = 390, h₂ = 420, h₃ = h₄ = 240 kJ/kg. COP<sub>f</sub> =", ["4", "5", "6", "7"], 1, "150/30."),
    q4("En el ciclo anterior, ṁ para 3 kW de frío:", ["0,02 kg/s", "0,1 kg/s", "0,01 kg/s", "0,2 kg/s"], 0, "3/150."),
    q4("Enfriar 2 kg de agua 10 °C requiere…", ["83,6 kJ", "41,8 kJ", "668 kJ", "20,9 kJ"], 0, "2 · 4,18 · 10."),
    q4("1 500 kWh de frío con SEER 5 consumen…", ["300 kWh", "7 500 kWh", "1 500 kWh", "150 kWh"], 0, "1 500/5."),
  ],
  feynman: ["Cómo puede una bomba de calor dar más energía de la que consume", "Qué hace cada componente del ciclo de compresión de vapor", "Por qué la eficiencia depende de la diferencia de temperaturas", "Cómo se calcula el COP en el diagrama presión-entalpía", "Por qué se están cambiando los refrigerantes"],
  glosario: [
    ["Máquina frigorífica", "Máquina que extrae calor de un foco frío aportando trabajo."],
    ["Bomba de calor", "Máquina que transporta calor a un foco caliente para calentarlo."],
    ["COP", "Coeficiente de operación: efecto útil dividido entre el trabajo consumido."],
    ["EER", "Eficiencia en modo refrigeración de un equipo de climatización."],
    ["Refrigerante", "Fluido que recorre el circuito y transporta el calor al evaporarse y condensarse."],
    ["Compresor", "Elemento que aspira el vapor y eleva su presión y temperatura."],
    ["Condensador", "Intercambiador en el que el refrigerante cede calor y se condensa."],
    ["Evaporador", "Intercambiador en el que el refrigerante absorbe calor y se evapora."],
    ["Válvula de expansión", "Dispositivo que reduce bruscamente la presión del refrigerante líquido."],
    ["Entalpía", "Energía por unidad de masa que transporta un fluido en un circuito."],
    ["Calor latente", "Calor que cambia el estado de una sustancia sin cambiar su temperatura."],
    ["PCA (GWP)", "Potencial de calentamiento global de un gas comparado con el CO₂."],
    ["Inverter", "Regulación de la velocidad del compresor con variador de frecuencia."],
    ["Válvula de cuatro vías", "Válvula que invierte el ciclo en una bomba de calor reversible."],
    ["Aerotermia", "Bomba de calor que toma energía del aire exterior."],
    ["Geotermia", "Bomba de calor que toma energía del terreno."],
    ["SCOP y SEER", "Eficiencias estacionales en calefacción y refrigeración."],
  ],
  situacion: {
    titulo: "Climatizar el aula sin calentar el planeta",
    reto: "Vuestro equipo debe proponer al centro la mejor forma de climatizar un aula: calcular su carga térmica, comparar opciones (ventiladores, aire acondicionado, aerotermia, mejoras pasivas) y presentar una propuesta razonada económica y ambientalmente.",
    pasos: [
      "Medid el aula, las ventanas y su orientación, y registrad con un termómetro la temperatura interior y exterior en distintas horas.",
      "Estimad la carga térmica en verano: personas, equipos, radiación solar y transmisión por paredes y ventanas.",
      "Elegid dos equipos reales del mercado y calculad su consumo anual con su SEER y SCOP y su coste.",
      "Comparad el impacto directo (refrigerante) e indirecto (electricidad) de cada opción, y valorad medidas pasivas como toldos o ventilación nocturna.",
      "Presentad la propuesta al equipo directivo con una infografía y una tabla comparativa.",
    ],
    producto: "Un informe técnico con el cálculo de cargas, la comparativa de equipos y una infografía para la dirección del centro.",
    evaluacion: [
      "Calcula correctamente cargas, COP, EER y consumos anuales.",
      "Explica el funcionamiento del ciclo frigorífico y de la bomba de calor.",
      "Integra criterios ambientales (PCA, emisiones) y económicos.",
      "Comunica la propuesta con claridad y argumentos.",
    ],
  },
  mapa: mapaB("MÁQUINAS FRIGORÍFICAS", [
    ["Principio", "Q₁ = Q₂ + W · Clausius", "var(--pen)"],
    ["Eficiencia", "COP · EER · Carnot inverso", "var(--red)"],
    ["Ciclo", "compresión de vapor · diagrama p-h", "var(--leaf)"],
    ["Aplicaciones", "frigorífico · A/A · aerotermia", "var(--inf)"],
  ]),
  tarjetas: [
    ["Primer principio", "Q₁ = Q₂ + W"],
    ["COP frigorífico (EER)", "Q₂ / W"],
    ["COP bomba de calor", "Q₁ / W = COPf + 1"],
    ["Carnot frigorífico", "T₂ / (T₁ − T₂)"],
    ["Carnot bomba de calor", "T₁ / (T₁ − T₂)"],
    ["Evaporador", "absorbe Q₂ a baja presión"],
    ["Condensador", "cede Q₁ a alta presión"],
    ["Diagrama p-h", "qe = h₁ − h₄ ; w = h₂ − h₁"],
    ["Calor sensible y latente", "m·c·ΔT ; m·L"],
    ["Refrigerantes naturales", "R-600a · R-290 · R-744 · R-717"],
    ["Bomba reversible", "válvula de cuatro vías"],
    ["Consumo anual", "demanda / SEER o SCOP"],
  ],
  familias: [
    "Mirad la etiqueta energética del frigorífico y del aire acondicionado de casa y anotad su clase y consumo anual.",
    "Tocad (con cuidado) la parte trasera del frigorífico: ¿por qué está caliente?",
    "Revisad que el termostato del frigorífico esté a 4-5 °C y el congelador a −18 °C, y que el condensador esté ventilado.",
    "Si tenéis aire acondicionado, comparad el consumo con la puerta y las persianas cerradas o abiertas.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Sistemas mecánicos» y «Sistemas energéticos»: máquinas frigoríficas y bomba de calor; eficiencia (COP, EER); ciclo de Carnot inverso; ciclo de compresión de vapor y sus componentes; refrigerantes e impacto ambiental; aplicaciones en edificios y eficiencia energética.`,
    ideas: [
      "Simulador de ciclo frigorífico en el diagrama p-h con datos de refrigerantes reales (tablas o CoolProp).",
      "Experiencia: medir con termómetros de sonda la temperatura de entrada y salida del condensador de un frigorífico.",
      "Comparativa de etiquetas energéticas de equipos reales con hoja de cálculo de costes a 10 años.",
      "Visita a una instalación de aerotermia o geotermia del entorno.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "IDAE: guías técnicas de bombas de calor y eficiencia energética en climatización", url: "https://www.idae.es/" },
    { t: "Reglamento de Instalaciones Térmicas en los Edificios (RITE), Ministerio para la Transición Ecológica", url: "https://energia.gob.es/desarrollo/EficienciaEnergetica/RITE/Paginas/InstalacionesTermicas.aspx" },
    { t: "Bomba de calor, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Bomba_de_calor" },
  ],
  revisado: "2026-11-21",
};
