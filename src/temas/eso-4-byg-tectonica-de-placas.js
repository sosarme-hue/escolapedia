// Biología y Geología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "La tectónica de placas",
  minutos: 40,
  objetivos: ["Describir la estructura interna de la Tierra", "Explicar la deriva continental y la tectónica de placas", "Relacionar los bordes de placa con volcanes, terremotos y cordilleras"],
  claves: ["litosfera", "astenosfera", "deriva continental", "placa litosférica", "dorsal", "subducción"],
  pregunta: {
    texto: "Si miras un mapa, la costa de Sudamérica y la de África encajan como dos piezas de puzle. ¿Es casualidad?",
    respuesta: "No. Hace unos 200 millones de años estaban <mark>unidas en un supercontinente, Pangea</mark>. Desde entonces se separan unos <b>2-3 cm al año</b>, más o menos lo que te crecen las uñas. Lo explica la <b>tectónica de placas</b>.",
  },
  bloques: [
    {
      html: `<h3>El interior de la Tierra</h3><p>Por la composición se distinguen <b>corteza</b>, <b>manto</b> y <b>núcleo</b>. Pero por cómo se comportan los materiales, la capa más externa y rígida es la <mark>litosfera</mark> (corteza + parte superior del manto, unos 100 km) y flota sobre la <mark>astenosfera</mark>, más caliente y plástica. Debajo están el manto inferior y el núcleo de hierro, externo líquido e interno sólido.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte de la Tierra con litosfera, astenosfera, manto, núcleo externo y núcleo interno">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="100" cy="90" r="80" fill="var(--red)" opacity=".25"/><circle cx="100" cy="90" r="74" fill="var(--sun)" opacity=".35"/><circle cx="100" cy="90" r="64" fill="var(--sun)" opacity=".55"/>
        <circle cx="100" cy="90" r="36" fill="var(--red)" opacity=".7"/><circle cx="100" cy="90" r="16" fill="var(--red)"/>
        <circle cx="100" cy="90" r="80" fill="none" stroke="var(--ink)" stroke-width="3"/>
        <g ${F} font-size="11" font-weight="700"><text x="186" y="24" fill="var(--ink)">litosfera</text><text x="186" y="50" fill="var(--sun)">astenosfera</text><text x="186" y="76" fill="var(--ink)">manto</text><text x="186" y="104" fill="var(--red)">núcleo ext.</text><text x="186" y="130" fill="var(--red)">núcleo int.</text></g>
        <g stroke="var(--line)" stroke-width="1"><path d="M168 46 H 182 M160 72 H 182 M130 100 H 182 M110 126 H 182"/></g>
      </svg>`,
    },
    {
      html: `<h3>La deriva continental</h3><p>En 1912, <b>Alfred Wegener</b> propuso que los continentes estuvieron unidos en <mark>Pangea</mark> y se habían ido separando. Sus pruebas: el <b>encaje</b> de las costas, <b>fósiles</b> iguales en continentes separados por océanos (como el reptil <i>Mesosaurus</i>), rocas y cordilleras que continúan al otro lado del mar y restos de <b>glaciares</b> en zonas hoy tropicales. No supo explicar qué movía los continentes y su idea fue rechazada durante décadas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Sudamérica y África encajan; el mismo fósil aparece en las dos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M70 30 Q 110 30 118 60 Q 112 90 96 110 Q 84 140 74 160 Q 64 130 60 100 Q 46 70 70 30 Z" fill="var(--leaf)" opacity=".6"/>
        <path d="M140 40 Q 190 30 210 60 Q 220 90 200 120 Q 186 150 176 150 Q 166 120 160 100 Q 136 90 128 66 Q 132 46 140 40 Z" fill="var(--sun)" opacity=".6"/>
        <ellipse cx="96" cy="96" rx="12" ry="5" fill="var(--pen)"/><ellipse cx="150" cy="86" rx="12" ry="5" fill="var(--pen)"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="80" y="22" fill="var(--leaf)">Sudamérica</text><text x="182" y="28" fill="var(--sun)">África</text><text x="124" y="174" fill="var(--pen)">mismo fósil: Mesosaurus</text></g>
      </svg>`,
    },
    {
      html: `<h3>La tectónica de placas</h3><p>En los años 60, el estudio de los fondos oceánicos completó la idea de Wegener. La litosfera está rota en unas <b>15 placas</b> que <mark>se mueven unos centímetros al año</mark>. El motor es el <b>calor interno</b>: corrientes de convección en el manto y el peso de las placas que se hunden. En las <b>dorsales</b> oceánicas se crea suelo nuevo y en las <b>zonas de subducción</b> se destruye.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corrientes de convección en el manto que arrastran las placas">
        <defs>${flecha("tp1", "var(--red)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="10" y="40" width="240" height="20" fill="var(--muted)"/>
        <rect x="10" y="60" width="240" height="110" fill="var(--sun)" opacity=".3"/>
        <path d="M130 150 Q 130 80 70 76 Q 20 76 24 150" fill="none" stroke="var(--red)" stroke-width="3" marker-end="url(#tp1)"/>
        <path d="M130 150 Q 130 80 190 76 Q 240 76 236 150" fill="none" stroke="var(--red)" stroke-width="3" marker-end="url(#tp1)"/>
        <path d="M120 36 L 60 36 M140 36 L 200 36" stroke="var(--ink)" stroke-width="3" marker-end="url(#tp1)"/>
        <g ${F} font-size="11" font-weight="700"><text x="104" y="26" fill="var(--ink)">dorsal</text><text x="96" y="130" fill="var(--red)">convección</text></g>
      </svg>`,
    },
    {
      html: `<h3>Tipos de bordes</h3><p><b>Divergentes</b>: las placas <mark>se separan</mark> y sube magma que forma litosfera nueva (dorsal atlántica, Islandia). <b>Convergentes</b>: las placas <mark>chocan</mark>. Si una es oceánica, se hunde bajo la otra (<b>subducción</b>) y aparecen fosas, volcanes y cordilleras como los Andes; si las dos son continentales, se pliegan y forman grandes cordilleras como el Himalaya. <b>Transformantes</b>: las placas <mark>se deslizan</mark> una junto a otra, como en la falla de San Andrés.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Borde convergente: la placa oceánica se hunde bajo la continental formando un volcán">
        <defs>${flecha("tp2", "var(--ink)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="10" y="40" width="120" height="30" fill="var(--water)" opacity=".4"/>
        <path d="M10 70 H 130 L 200 160 H 176 L 116 86 H 10 Z" fill="var(--pen)" opacity=".75"/>
        <path d="M130 70 L 150 50 L 160 30 L 170 50 L 250 50 V 100 H 160 Z" fill="var(--sun)" opacity=".75"/>
        <path d="M160 30 Q 158 70 168 110" stroke="var(--red)" stroke-width="3" fill="none"/><path d="M156 24 Q 160 14 166 24" fill="none" stroke="var(--red)" stroke-width="2"/>
        <path d="M40 60 H 90" stroke="var(--ink)" stroke-width="3" marker-end="url(#tp2)"/>
        <g ${F} font-size="11" font-weight="700"><text x="20" y="104" fill="var(--pen)">placa oceánica</text><text x="182" y="80" fill="var(--ink)">continental</text><text x="186" y="140" fill="var(--red)">subducción</text></g>
      </svg>`,
    },
    {
      html: `<h3>Volcanes, terremotos y cordilleras</h3><p>Casi todos los <b>volcanes</b> y <b>terremotos</b> se concentran en los <mark>bordes de placa</mark>, donde se acumula la energía de los choques y roces. El <b>Cinturón de Fuego del Pacífico</b> reúne tres de cada cuatro volcanes activos. España está cerca del choque entre la placa africana y la euroasiática, por eso tiene terremotos moderados en el sur y el sureste, y las <b>Canarias</b> tienen volcanismo activo (La Palma, 2021).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Mapa esquemático con puntos de volcanes y terremotos alineados en los bordes de las placas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="14" y="20" width="232" height="130" rx="8" fill="var(--water)" opacity=".2"/>
        <path d="M40 30 Q 30 80 50 140 M200 30 Q 230 90 210 140 M90 100 Q 130 90 170 104 M120 20 Q 126 60 120 100" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 4"/>
        ${[[42, 50], [36, 80], [44, 112], [48, 132], [206, 46], [218, 76], [222, 100], [214, 128], [100, 98], [140, 94], [160, 100], [122, 40], [124, 70]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="5" fill="${i % 2 ? "var(--red)" : "var(--sun)"}"/>`).join("")}
        <g ${F} font-size="11" font-weight="700"><circle cx="40" cy="164" r="5" fill="var(--red)"/><text x="50" y="168" fill="var(--ink)">volcanes</text><circle cx="140" cy="164" r="5" fill="var(--sun)"/><text x="150" y="168" fill="var(--ink)">terremotos</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Los tres tipos de borde de placa",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Bordes divergentes, convergentes y transformantes con su movimiento, su efecto y un ejemplo">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Divergente", "← →", "se crea litosfera", "dorsal atlántica", "var(--leaf)"], ["Convergente", "→ ←", "subducción o cordillera", "Andes, Himalaya", "var(--red)"], ["Transformante", "↑ ↓", "se deslizan, terremotos", "falla de San Andrés", "var(--pen)"]]
        .map(([n, m, e, ej, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="56" text-anchor="middle" font-size="20" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="104" text-anchor="middle" font-size="30" font-weight="700" fill="var(--ink)" ${F}>${m}</text>
          <text x="${115 + i * 206}" y="142" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${e}</text>
          <text x="${115 + i * 206}" y="176" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${ej}</text>`).join("")}
    </svg>`,
  },
  video: { id: "T2WqVjeOpXo", titulo: "Las placas tectónicas", canal: "Instituto Ángel D'Elía", vistas: 3289559, megusta: 0, busqueda: "tectónica de placas" },
  quiz: [
    { q: "¿Qué capa forma las placas tectónicas?", o: ["El núcleo", "La litosfera", "La astenosfera"], a: 1, e: "La litosfera, rígida, está rota en placas que se mueven sobre la astenosfera." },
    { q: "¿Cómo se llamaba el supercontinente de Wegener?", o: ["Gondwana", "Pangea", "Atlántida"], a: 1, e: "Pangea significa «toda la tierra»." },
    { q: "¿Qué ocurre en una dorsal oceánica?", o: ["Las placas chocan", "Se crea litosfera nueva al separarse las placas", "Las placas se deslizan"], a: 1, e: "Sube magma, se enfría y forma nuevo fondo oceánico." },
    { q: "El Himalaya se formó por…", o: ["un borde divergente", "el choque de dos placas continentales", "un volcán"], a: 1, e: "La placa india chocó con la euroasiática y la corteza se plegó y elevó." },
    { q: "¿Dónde se concentran la mayoría de terremotos y volcanes?", o: ["En el centro de las placas", "En los bordes de placa", "En los polos"], a: 1, e: "Allí se acumulan las tensiones del movimiento de las placas." },
  ],
  examen: [
    { q: "¿Qué prueba de la deriva continental es paleontológica?", o: ["El encaje de las costas", "Fósiles iguales en continentes separados", "Las dorsales"], a: 1, e: "Mesosaurus o Glossopteris aparecen a ambos lados del Atlántico." },
    { q: "La subducción es…", o: ["la separación de dos placas", "el hundimiento de una placa oceánica bajo otra", "el deslizamiento lateral"], a: 1, e: "La placa más densa se hunde en el manto, generando fosas y volcanes." },
    { q: "¿Cuál es el motor del movimiento de las placas?", o: ["El viento", "El calor interno de la Tierra", "La rotación de la Luna"], a: 1, e: "Las corrientes de convección del manto y el tirón de las placas que se hunden." },
  ],
  feynman: ["Qué son la litosfera y la astenosfera", "Las pruebas de Wegener", "Qué mueve las placas", "Los tres tipos de bordes con un ejemplo", "Por qué hay volcanes en Canarias y terremotos en el sur de España"],
  mapa: mapa("TECTÓNICA DE PLACAS", "var(--eso)", [
    ["Estructura", "litosfera sobre astenosfera", "var(--ink)"],
    ["Wegener", "Pangea · pruebas", "var(--leaf)"],
    ["Bordes", "divergente · convergente · transformante", "var(--red)"],
    ["Consecuencias", "volcanes · terremotos · cordilleras", "var(--pen)"],
  ], 270),
  tarjetas: [
    ["¿Qué es la litosfera?", "La capa rígida externa de la Tierra (corteza y manto superior), dividida en placas."],
    ["¿Qué propuso Wegener?", "La deriva continental: los continentes estuvieron unidos en Pangea y se separaron."],
    ["Borde divergente", "Dos placas se separan y se crea litosfera nueva en una dorsal."],
    ["¿Qué es la subducción?", "El hundimiento de una placa oceánica bajo otra placa en un borde convergente."],
    ["¿Qué es el Cinturón de Fuego del Pacífico?", "La zona de bordes de placa que rodea el Pacífico, con la mayoría de volcanes activos."],
  ],
  familias: ["Recortad los continentes de un mapa viejo e intentad montar Pangea.", "Buscad en la web del Instituto Geográfico Nacional los últimos terremotos en España.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La Tierra y su dinámica: estructura interna, deriva continental, tectónica de placas y sus manifestaciones (RD 217/2022, Biología y Geología 4º).",
    ideas: ["Puzle de Pangea con fósiles y rocas como pistas.", "Modelo de convección con agua caliente, colorante y trozos de corcho.", "Mapa interactivo de terremotos del IGN para localizar los bordes de placa."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Tectónica de placas, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Tect%C3%B3nica_de_placas" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Explicar cómo las ondas sísmicas revelan el interior de la Tierra", "Relacionar los riesgos sísmicos y volcánicos con los bordes de placa y con su prevención"],
  tras: {
    "El interior de la Tierra": [
      { html: `<h3>Cómo conocemos el interior: las ondas sísmicas</h3><p>El sondeo más profundo jamás perforado apenas llega a 12 km, menos del 0,2 % del radio terrestre. Casi todo lo que sabemos del interior procede de las <b>ondas sísmicas</b> que producen los terremotos. Las ondas <b>P</b> (primarias) son las más rápidas y atraviesan sólidos y líquidos; las ondas <b>S</b> (secundarias) son más lentas y <mark>no atraviesan los líquidos</mark>. Cuando las ondas pasan de un material a otro cambian de velocidad y de dirección. Esos cambios bruscos, llamados <b>discontinuidades</b>, marcan los límites entre capas: la de Mohorovičić separa corteza y manto, y la de Gutenberg, manto y núcleo. Como las ondas S no atraviesan el núcleo externo, sabemos que es líquido.</p>`, video: { id: "liDnlvkr_k4", titulo: "Tipos de ondas sísmicas", canal: "Cerebralia", vistas: 291301 } },
    ],
    "La deriva continental": [
      { html: `<h3>Las pruebas de Wegener</h3><p>En 1912, Alfred Wegener propuso que todos los continentes estuvieron unidos en un supercontinente, <b>Pangea</b>, que se fragmentó hace unos 200 millones de años. Aportó cuatro tipos de pruebas. <b>Geográficas</b>: las costas de Sudamérica y África encajan como piezas de un puzle. <b>Paleontológicas</b>: se encuentran los mismos fósiles (el reptil <i>Mesosaurus</i>, la planta <i>Glossopteris</i>) en continentes separados por océanos. <b>Geológicas</b>: hay cordilleras y tipos de rocas que continúan de un continente a otro. <b>Paleoclimáticas</b>: hay restos de antiguos glaciares en zonas hoy tropicales, como la India. Su teoría fue rechazada porque <mark>no sabía explicar qué movía los continentes</mark>.</p>` },
    ],
    "La tectónica de placas": [
      { html: `<h3>El motor de las placas y el ciclo de Wilson</h3><p>Las placas se mueven unos pocos centímetros al año, más o menos lo que crecen las uñas. El motor es el <b>calor interno</b> de la Tierra: en el manto se producen lentas <b>corrientes de convección</b>, y además la placa que se hunde en una zona de subducción, al ser más densa, <mark>tira del resto de la placa</mark>. Los océanos nacen y mueren en un proceso que se repite llamado <b>ciclo de Wilson</b>: un continente se agrieta formando un rift (como el valle del Rift africano), se abre un mar estrecho (como el mar Rojo), crece un océano con su dorsal (como el Atlántico), empieza a destruirse por subducción en sus bordes (como el Pacífico) y finalmente los continentes chocan y forman una cordillera (como el Himalaya).</p>` },
    ],
    "Volcanes, terremotos y cordilleras": [
      { html: `<h3>Riesgos sísmicos y volcánicos</h3><p>La mayoría de volcanes y terremotos se concentran en los bordes de placa: el <b>Cinturón de Fuego del Pacífico</b> reúne el 75 % de los volcanes activos y el 90 % de los terremotos. La <b>magnitud</b> de un terremoto mide la energía liberada (escala de Richter o de magnitud de momento); la <b>intensidad</b> mide los daños que causa en un lugar. Los terremotos no se pueden predecir, pero sí reducir sus daños con <mark>prevención</mark>: construir edificios sismorresistentes, hacer mapas de riesgo, enseñar a la población qué hacer y tener planes de emergencia. Los volcanes se vigilan midiendo pequeños terremotos, gases y la deformación del terreno, lo que permite evacuar a tiempo, como se hizo en la erupción de La Palma de 2021.</p>`, video: { id: "YyZIRGRQ_1w", titulo: "Anillo de Fuego, la gran zona de terremotos y volcanes", canal: "Un Mundo Inmenso", vistas: 1825375 } },
    ],
  },
  ejemplos: [
    { enunciado: "Un terremoto se registra en una estación, pero en una zona del otro lado de la Tierra no llegan ondas S. ¿Qué deduces?", pasos: ["Las ondas S no atraviesan los líquidos.", "Si no llegan al otro lado, algo líquido las bloquea en el centro de la Tierra.", "Esa «zona de sombra» de las ondas S se explica por el núcleo externo."], resultado: "El núcleo externo de la Tierra es líquido." },
    { enunciado: "El Atlántico se ensancha unos 2,5 cm al año. ¿Cuánto se habrá abierto en un millón de años?", pasos: ["2,5 cm/año · 1.000.000 años = 2.500.000 cm.", "2.500.000 cm = 25.000 m.", "25.000 m = 25 km."], resultado: "Unos 25 km (en 200 millones de años, unos 5.000 km: el ancho del océano)." },
    { enunciado: "Explica por qué en Japón hay volcanes y terremotos frecuentes.", pasos: ["Japón está sobre un borde convergente donde la placa del Pacífico, oceánica, se hunde bajo otras placas (subducción).", "La fricción entre las placas acumula tensiones que se liberan en terremotos.", "La placa que se hunde se funde parcialmente y el magma asciende formando volcanes."], resultado: "Por la subducción en un borde convergente del Cinturón de Fuego." },
  ],
  errores: [
    "Pensar que el manto es líquido: es sólido, aunque se deforma muy lentamente.",
    "Confundir la corteza con la litosfera: la litosfera incluye la corteza y la parte superior del manto.",
    "Creer que los continentes «flotan» sobre un mar de lava.",
    "Confundir magnitud (energía del terremoto) con intensidad (daños en un lugar).",
    "Pensar que los terremotos se pueden predecir con exactitud: solo se pueden prevenir sus daños.",
  ],
  ejercicios: [
    { q: "Nombra las capas de la Tierra según su composición y según su comportamiento.", sol: "Composición: corteza, manto y núcleo. Comportamiento: litosfera, astenosfera (zona más plástica del manto superior), mesosfera, núcleo externo (líquido) y núcleo interno (sólido)." },
    { q: "¿Qué diferencia hay entre ondas P y S?", sol: "Las P son más rápidas y atraviesan sólidos y líquidos. Las S son más lentas y solo atraviesan sólidos." },
    { q: "Indica dos pruebas de la deriva continental y explícalas.", sol: "El encaje de las costas de Sudamérica y África, y la presencia de los mismos fósiles (Mesosaurus) en continentes separados por el océano, que no podría haber cruzado." },
    { q: "¿Por qué la teoría de Wegener no se aceptó al principio?", sol: "Porque no explicaba qué fuerza podía mover los continentes." },
    { q: "Explica qué ocurre en una dorsal oceánica.", sol: "Dos placas se separan; el magma del manto asciende, se enfría y forma nueva corteza oceánica. Es un borde constructivo." },
    { q: "¿Qué tipo de borde forma el Himalaya? ¿Y los Andes?", sol: "El Himalaya, un borde convergente de dos placas continentales (colisión). Los Andes, un borde convergente donde una placa oceánica se hunde bajo una continental (subducción)." },
    { q: "¿Qué es una falla transformante? Pon un ejemplo.", sol: "Un borde donde dos placas se deslizan lateralmente una junto a otra sin crear ni destruir litosfera. Ejemplo: la falla de San Andrés (California)." },
    { q: "Describe las etapas del ciclo de Wilson con un ejemplo de cada una.", sol: "Rift (valle del Rift africano), mar estrecho (mar Rojo), océano en expansión (Atlántico), océano en cierre por subducción (Pacífico) y colisión continental (Himalaya)." },
    { q: "Indica cuatro medidas para reducir los daños de un terremoto.", sol: "Construir edificios sismorresistentes, no edificar en zonas de mayor riesgo, enseñar a la población cómo actuar y tener planes de emergencia y simulacros." },
    { q: "¿Cómo se vigila un volcán activo?", sol: "Con sismógrafos que registran pequeños terremotos, midiendo los gases que emite y con GPS y satélites que detectan si el terreno se hincha." },
  ],
  quiz: [
    { q: "Las ondas S no atraviesan…", o: ["los sólidos", "los líquidos", "la corteza"], a: 1, e: "Por eso sabemos que el núcleo externo es líquido." },
    { q: "Pangea era…", o: ["un océano", "un supercontinente", "una placa oceánica"], a: 1, e: "Se fragmentó hace unos 200 millones de años." },
    { q: "Las placas se mueven unos…", o: ["centímetros al año", "metros al día", "kilómetros al año"], a: 0, e: "Como crecen las uñas." },
    { q: "El mar Rojo es un ejemplo de…", o: ["océano que se cierra", "océano que empieza a abrirse", "cordillera"], a: 1, e: "Etapa temprana del ciclo de Wilson." },
    { q: "La magnitud de un terremoto mide…", o: ["los daños", "la energía liberada", "la duración"], a: 1, e: "La intensidad mide los daños." },
  ],
  tarjetas: [
    ["Discontinuidad sísmica", "Límite entre capas donde las ondas cambian bruscamente de velocidad."],
    ["Ciclo de Wilson", "Apertura y cierre de océanos: rift, mar, océano, subducción, colisión."],
    ["Cinturón de Fuego", "Borde del Pacífico con la mayoría de volcanes y terremotos."],
  ],
});
