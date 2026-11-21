// Biología 2º Bachillerato · El núcleo y la división celular (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, cadena, arbol } = require("./_bach2-bio");

// Núcleo interfásico.
const nucleoSVG = marco("Núcleo interfásico: envoltura nuclear doble con poros, continua con el retículo, nucleoplasma con cromatina y un nucléolo", `
  <circle cx="122" cy="92" r="70" fill="var(--pen)" fill-opacity=".08" stroke="var(--pen)" stroke-width="3"/><circle cx="122" cy="92" r="64" fill="none" stroke="var(--pen)" stroke-width="1.6"/>
  ${[0, 60, 120, 180, 240, 300].map((a) => { const r = (a * Math.PI) / 180; return `<rect x="${(122 + 67 * Math.cos(r) - 4).toFixed(1)}" y="${(92 + 67 * Math.sin(r) - 4).toFixed(1)}" width="8" height="8" fill="var(--card)" stroke="var(--red)" stroke-width="1.6"/>`; }).join("")}
  <circle cx="140" cy="80" r="21" fill="var(--red)" fill-opacity=".55"/>
  <path d="M80 70 q 10 -14 20 0 t 20 6 M86 112 q 14 10 26 -2 t 26 8 M70 94 q 6 6 14 -2" fill="none" stroke="var(--ink)" stroke-width="2" opacity=".6"/>
  <path d="M190 70 q 20 4 22 20 q 2 16 22 16 M192 112 q 18 4 22 20" fill="none" stroke="var(--inf)" stroke-width="2.4"/>
  ${T(140, 83, "nucléolo", { fs: 8.5, b: true, c: "#fff" })}${T(232, 26, "poro", { fs: 10, b: true, c: "var(--red)" })}<path d="M222 30 L 186 56" stroke="var(--muted)" stroke-width="1.2"/>
  ${T(46, 172, "envoltura doble", { fs: 10, b: true, c: "var(--pen)" })}${T(98, 134, "cromatina", { fs: 10, b: true })}${T(226, 150, "RE", { fs: 10, b: true, c: "var(--inf)" })}`);

// Cromosoma metafásico.
const cromSVG = marco("Cromosoma metafásico: dos cromátidas hermanas unidas por el centrómero, con el cinetocoro, los brazos corto y largo y los telómeros en los extremos", `
  <path d="M100 22 q -8 34 18 66 q -26 32 -18 68" fill="none" stroke="var(--pen)" stroke-width="16" stroke-linecap="round"/>
  <path d="M146 22 q 8 34 -18 66 q 26 32 18 68" fill="none" stroke="var(--leaf)" stroke-width="16" stroke-linecap="round"/>
  <circle cx="123" cy="88" r="7" fill="var(--red)"/>
  ${T(60, 92, "centrómero", { fs: 10.5, b: true, c: "var(--red)" })}<path d="M86 90 H 114" stroke="var(--muted)" stroke-width="1.2"/>
  ${T(200, 42, "brazo corto (p)", { fs: 10, b: true })}${T(200, 140, "brazo largo (q)", { fs: 10, b: true })}
  <circle cx="100" cy="22" r="5" fill="var(--sun)"/><circle cx="146" cy="22" r="5" fill="var(--sun)"/>${T(58, 26, "telómero", { fs: 10, b: true, c: "#b45309" })}
  ${T(84, 172, "cromátida", { fs: 10, b: true, c: "var(--pen)" })}${T(170, 172, "cromátida hermana", { fs: 10, b: true, c: "var(--leaf)" })}`);

// Fases de la mitosis.
const faseMit = (x, t, dib) => `<rect x="${x}" y="22" width="58" height="120" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="1.5"/>${T(x + 29, 16, t, { fs: 10, b: true })}${dib}`;
const mitosisSVG = marco("Fases de la mitosis: en la profase se condensan los cromosomas, en la metafase se alinean en el ecuador, en la anafase se separan las cromátidas y en la telofase se forman dos núcleos", `
  ${faseMit(4, "Profase", `<circle cx="33" cy="82" r="22" fill="none" stroke="var(--pen)" stroke-width="1.5" stroke-dasharray="3 2"/><path d="M24 74 l 6 8 m -6 0 l 6 -8 M36 86 l 6 8 m -6 0 l 6 -8" stroke="var(--red)" stroke-width="3"/>`)}
  ${faseMit(68, "Metafase", `<path d="M76 40 L 97 82 L 76 124 M118 40 L 97 82 L 118 124" fill="none" stroke="var(--leaf)" stroke-width="1" opacity=".7"/>${[62, 82, 102].map((y) => `<path d="M93 ${y - 6} V ${y + 6} M101 ${y - 6} V ${y + 6}" stroke="var(--red)" stroke-width="3.2"/>`).join("")}`)}
  ${faseMit(132, "Anafase", `${[62, 82, 102].map((y) => `<path d="M150 ${y - 5} l 4 10 M178 ${y - 5} l -4 10" stroke="var(--red)" stroke-width="3.2"/>`).join("")}<path d="M161 50 V 114" stroke="var(--muted)" stroke-dasharray="2 3"/>`)}
  ${faseMit(196, "Telofase", `<circle cx="225" cy="52" r="16" fill="none" stroke="var(--pen)" stroke-width="1.6"/><circle cx="225" cy="112" r="16" fill="none" stroke="var(--pen)" stroke-width="1.6"/><path d="M218 48 q 6 6 14 0 M218 108 q 6 6 14 0" stroke="var(--red)" stroke-width="2.4" fill="none"/><path d="M198 82 H 252" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="3 3"/>`)}
  ${T(130, 162, "2n → 2n: dos células hijas idénticas", { fs: 11, b: true, c: "var(--leaf)" })}`);

// Sobrecruzamiento.
const sobreSVG = marco("Sobrecruzamiento en la profase I: dos cromátidas no hermanas de cromosomas homólogos intercambian fragmentos en un quiasma, y se forman cromátidas recombinantes", `
  ${T(64, 18, "Bivalente", { fs: 11, b: true })}${T(196, 18, "Tras el intercambio", { fs: 11, b: true })}
  <path d="M30 32 V 150 M44 32 V 150" stroke="var(--pen)" stroke-width="7" stroke-linecap="round"/>
  <path d="M84 32 V 150 M98 32 V 150" stroke="var(--red)" stroke-width="7" stroke-linecap="round"/>
  <path d="M44 70 L 84 104 M84 70 L 44 104" stroke="var(--sun)" stroke-width="3"/>${T(64, 166, "quiasma", { fs: 10, b: true, c: "#b45309" })}
  <path d="M162 32 V 150 M226 32 V 150" stroke="var(--pen)" stroke-width="7" stroke-linecap="round"/>
  <path d="M248 32 V 150 M184 32 V 150" stroke="var(--red)" stroke-width="7" stroke-linecap="round"/>
  <path d="M184 32 V 86" stroke="var(--pen)" stroke-width="7" stroke-linecap="round"/><path d="M226 32 V 86" stroke="var(--red)" stroke-width="7" stroke-linecap="round"/>
  ${T(196, 170, "recombinantes", { fs: 10, b: true, c: "var(--leaf)" })}`);

// Meiosis.
const meiosisSVG = marco("Esquema de la meiosis: una célula diploide con cromosomas duplicados se divide dos veces y produce cuatro células haploides genéticamente distintas", `
  <circle cx="130" cy="34" r="22" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>${T(130, 39, "2n", { fs: 12, b: true, c: "var(--pen)" })}
  <path d="M116 52 L 80 74 M144 52 L 180 74" stroke="var(--muted)" stroke-width="2"/>
  <circle cx="72" cy="88" r="18" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><circle cx="188" cy="88" r="18" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>${T(72, 93, "n", { fs: 12, b: true, c: "var(--red)" })}${T(188, 93, "n", { fs: 12, b: true, c: "var(--red)" })}
  <path d="M62 104 L 40 124 M82 104 L 104 124 M178 104 L 156 124 M198 104 L 220 124" stroke="var(--muted)" stroke-width="2"/>
  ${[34, 108, 152, 226].map((x) => `<circle cx="${x}" cy="138" r="14" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>${T(x, 143, "n", { fs: 11, b: true, c: "var(--leaf)" })}`).join("")}
  ${T(232, 40, "meiosis I", { fs: 10, b: true, c: "var(--red)" })}${T(232, 54, "(reduccional)", { fs: 9, c: "var(--muted)" })}${T(130, 112, "meiosis II", { fs: 10, b: true, c: "var(--leaf)" })}
  ${T(130, 174, "4 células haploides distintas", { fs: 11, b: true })}`);

module.exports = tema({
  titulo: "El núcleo y la división celular",
  minutos: 125,
  secciones: [4, 4, 4],
  objetivos: [
    "Describir la estructura del núcleo interfásico y la función de la envoltura, el nucléolo y la cromatina",
    "Describir la estructura de los cromosomas, el cariotipo y los conceptos de haploide y diploide",
    "Explicar el ciclo celular, sus fases y su regulación, y relacionar sus fallos con el cáncer",
    "Describir las fases de la mitosis y de la citocinesis en células animales y vegetales",
    "Describir las fases de la meiosis y explicar cómo genera variabilidad genética",
    "Comparar mitosis y meiosis y situarlas en los ciclos biológicos de los seres vivos",
  ],
  claves: ["envoltura nuclear", "poro nuclear", "nucléolo", "cromosoma", "cromátida", "centrómero", "cariotipo", "diploide", "haploide", "ciclo celular", "interfase", "mitosis", "citocinesis", "meiosis", "sobrecruzamiento", "ciclo biológico"],
  pregunta: {
    texto: "Tus padres te dieron cada uno la mitad de sus cromosomas. ¿Por qué tú y tus hermanos no sois idénticos?",
    respuesta: "Por la <mark>meiosis</mark>. Al formarse los óvulos y los espermatozoides, cada pareja de cromosomas homólogos se reparte al azar: con 23 parejas hay más de 8 millones de combinaciones posibles en cada progenitor. Además, en la profase I los homólogos intercambian fragmentos por <b>sobrecruzamiento</b>, lo que crea cromosomas nuevos, mezcla de los de tus abuelos. Junto con la unión al azar de un óvulo y un espermatozoide, cada hijo recibe una combinación prácticamente única.",
  },
  lectura: {
    titulo: "Las células inmortales de Henrietta Lacks",
    html: `<p>En 1951, una mujer afroamericana de 31 años llamada Henrietta Lacks acudió al hospital Johns Hopkins de Baltimore con un tumor de cuello de útero. Sin pedirle permiso, los médicos tomaron una muestra de sus células y se la dieron al investigador George Gey, que llevaba años intentando que células humanas se dividieran indefinidamente en el laboratorio. Las de Henrietta lo hicieron: se duplicaban cada día y no dejaban de dividirse. Henrietta murió meses después, pero sus células, llamadas HeLa, siguen vivas en laboratorios de todo el mundo.</p><p>Las células HeLa permitieron desarrollar la vacuna de la polio, estudiar el cáncer, los virus y los efectos de la radiación, y han contribuido a varios Premios Nobel. Su familia no supo nada durante décadas, y su historia abrió un debate sobre el consentimiento y la ética en la investigación. ¿Por qué esas células no se detenían? Porque habían perdido los controles que regulan el ciclo celular, el programa que decide cuándo una célula se divide. En este tema estudiarás el núcleo, cómo se copian y reparten los cromosomas en la mitosis, cómo la meiosis produce gametos únicos y qué ocurre cuando el control de la división falla.</p>`,
  },
  bloques: [
    { h: "El núcleo interfásico", p: [
      "El <mark>núcleo</mark> es el orgánulo que contiene la información genética de la célula eucariota y dirige su actividad. Suele haber uno por célula, aunque hay células sin núcleo (glóbulos rojos de mamífero) y con varios (fibras musculares). Su aspecto cambia a lo largo del ciclo: durante la <b>interfase</b>, cuando la célula no se está dividiendo, se distinguen la envoltura nuclear, el nucleoplasma, la cromatina y el nucléolo; durante la división, la envoltura desaparece y la cromatina se condensa en cromosomas.",
      "La <mark>envoltura nuclear</mark> es una doble membrana que se continúa con el retículo endoplasmático; entre ambas queda el espacio perinuclear. Por dentro la refuerza una red de filamentos intermedios, la <b>lámina nuclear</b>. La atraviesan miles de <b>poros nucleares</b>, complejos de unas 30 proteínas que controlan el intercambio entre el núcleo y el citoplasma: salen los ARN y las subunidades de los ribosomas, y entran las proteínas necesarias en el núcleo, como las histonas, las ADN y ARN polimerasas y los factores de transcripción. Gracias a la envoltura, en los eucariotas la transcripción (en el núcleo) y la traducción (en el citoplasma) ocurren en lugares distintos, lo que permite procesar el ARN antes de usarlo.",
    ], svg: nucleoSVG },
    { h: "Nucleoplasma, nucléolo y cromatina", p: [
      "El <b>nucleoplasma</b> es el medio interno del núcleo: una disolución con nucleótidos, enzimas y proteínas en la que se encuentran la cromatina y el nucléolo. El <mark>nucléolo</mark> es una región densa, sin membrana, que se forma alrededor de los genes que codifican el ARN ribosómico, situados en zonas concretas de algunos cromosomas llamadas <b>regiones organizadoras nucleolares</b>. En él se transcribe el ARNr y se ensamblan las subunidades de los ribosomas, que luego salen al citoplasma por los poros. Por eso es grande en las células que fabrican muchas proteínas y desaparece durante la división.",
      "La <b>cromatina</b> es el material genético de la interfase: ADN asociado a histonas y a otras proteínas, organizado en nucleosomas y fibras de distinto grado de condensación, como estudiaste en el tema de los ácidos nucleicos. La <b>eucromatina</b>, menos condensada, contiene los genes que se están expresando; la <b>heterocromatina</b>, muy condensada, es inactiva. Un caso especial es el <b>corpúsculo de Barr</b>: en las células de las mujeres, uno de los dos cromosomas X se condensa como heterocromatina y se inactiva, para que la dosis de genes del X sea la misma que en los hombres. Cada cromosoma ocupa un territorio propio dentro del núcleo.",
    ], svg: L6.tabla("Componentes del núcleo interfásico", ["Componente", "Estructura", "Función"], [["Envoltura", "doble membrana + poros", "separa y comunica"], ["Lámina nuclear", "filamentos intermedios", "da forma"], ["Nucléolo", "sin membrana", "forma ribosomas"], ["Cromatina", "ADN + histonas", "información genética"]]), v: ["div-e", "ADN, cromatina y cromosomas"] },
    { h: "Los cromosomas", p: [
      "Cuando la célula va a dividirse, la cromatina se condensa al máximo y forma los <mark>cromosomas</mark>, bien visibles en la metafase. Como el ADN se ha replicado antes, cada cromosoma metafásico está formado por dos <b>cromátidas hermanas</b>, idénticas, unidas por una zona estrecha, el <b>centrómero</b> o constricción primaria. En el centrómero se sitúa el <b>cinetocoro</b>, una estructura proteica donde se anclan los microtúbulos del huso. El centrómero divide cada cromátida en dos brazos; según su posición, los cromosomas son metacéntricos (brazos iguales), submetacéntricos, acrocéntricos o telocéntricos. Los extremos son los <b>telómeros</b>, secuencias repetidas que protegen el cromosoma y se acortan en cada división.",
      "Cada especie tiene un número fijo de cromosomas. Las células <mark>diploides</mark> (2n) tienen dos juegos, uno de cada progenitor, de modo que los cromosomas forman parejas de <b>homólogos</b>, con los mismos genes en el mismo orden aunque puedan tener versiones distintas (alelos). Las <mark>haploides</mark> (n), como los gametos, tienen un solo juego. La especie humana tiene 2n = 46: 22 parejas de <b>autosomas</b> y una de <b>cromosomas sexuales</b> (XX en la mujer y XY en el hombre). El <b>cariotipo</b> es el conjunto de cromosomas de una célula ordenados por tamaño y forma; permite detectar alteraciones como el síndrome de Down (trisomía del 21).",
    ], svg: cromSVG },
    { h: "El ciclo celular y su regulación", p: [
      "El <mark>ciclo celular</mark> es la secuencia de acontecimientos que ocurre desde que una célula se forma hasta que se divide en dos. Tiene dos etapas. La <b>interfase</b>, la más larga (el 90 % del tiempo), incluye tres fases: la <b>G₁</b>, en la que la célula crece, fabrica proteínas y orgánulos y decide si se divide; la <b>S</b> (de síntesis), en la que se <b>replica el ADN</b> y cada cromosoma pasa a tener dos cromátidas; y la <b>G₂</b>, en la que la célula se prepara para la división. Después viene la <b>fase M</b>, que comprende la mitosis (división del núcleo) y la citocinesis (división del citoplasma). Las células que no se dividen, como las neuronas, salen del ciclo y quedan en una fase de reposo llamada <b>G₀</b>.",
      "El ciclo está controlado por proteínas, las <b>ciclinas</b> y las <b>quinasas dependientes de ciclinas</b> (CDK), y tiene <b>puntos de control</b> que comprueban que todo va bien antes de continuar: en G₁ (si la célula es grande y el ADN no está dañado), en G₂ (si el ADN se ha replicado bien) y en la metafase (si todos los cromosomas están unidos al huso). Si se detectan daños irreparables, la célula activa la <b>apoptosis</b> o muerte celular programada. Cuando las mutaciones alteran los genes que controlan el ciclo (protooncogenes y genes supresores de tumores, como el p53), las células se dividen sin control y aparece el <mark>cáncer</mark>.",
    ], svg: L6.ciclo("Fases del ciclo celular", "CICLO", ["G₁: crece", "S: replica ADN", "G₂: se prepara", "M: mitosis", "Citocinesis"], "var(--pen)"), v: ["div-b", "Ciclo celular"] },
    { h: "La mitosis: profase y prometafase", p: [
      "La <mark>mitosis</mark> es la división del núcleo que reparte de forma exacta los cromosomas replicados entre dos núcleos hijos, de modo que cada uno recibe la misma información genética que la célula madre. Aunque es un proceso continuo, se divide en fases. En la <b>profase</b>, la cromatina se condensa y los cromosomas se hacen visibles, cada uno con dos cromátidas; el nucléolo desaparece; y fuera del núcleo se empieza a formar el <b>huso mitótico</b> o acromático, un conjunto de microtúbulos que crece entre los dos centrosomas, que se separan hacia polos opuestos. En las células animales, alrededor de cada par de centriolos se forma un áster.",
      "En la <b>prometafase</b>, la envoltura nuclear se fragmenta en vesículas, lo que permite que los microtúbulos del huso alcancen los cromosomas. En cada centrómero se forman dos cinetocoros, uno por cromátida, que se unen a microtúbulos procedentes de polos opuestos (microtúbulos cinetocóricos). Los cromosomas empiezan a moverse, empujados y arrastrados por los microtúbulos, hacia el centro de la célula. Hay además microtúbulos polares, que se solapan en el centro, y microtúbulos astrales, que anclan el huso a la membrana. Las plantas no tienen centriolos, pero forman igualmente el huso desde otros centros organizadores.",
    ], svg: L5.pasos("Profase y prometafase", ["Se condensa la cromatina: cromosomas visibles", "Desaparece el nucléolo", "Se forma el huso entre los centrosomas", "Se rompe la envoltura; el huso se une a los cinetocoros"], "var(--pen)"), v: ["div-c", "División celular: mitosis"] },
    { h: "Metafase, anafase y telofase", p: [
      "En la <b>metafase</b>, los cromosomas alcanzan su máxima condensación y se alinean en el plano ecuatorial de la célula, formando la <b>placa metafásica</b>, con los cinetocoros de cada cromátida mirando a polos opuestos. Es el mejor momento para observarlos y fotografiarlos para un cariotipo. Antes de continuar, un punto de control comprueba que todos los cinetocoros están unidos al huso. En la <b>anafase</b>, las proteínas que mantienen unidas las cromátidas hermanas se degradan, y las cromátidas se separan bruscamente: cada una es ya un cromosoma independiente. Los microtúbulos cinetocóricos se acortan y arrastran cada juego de cromosomas hacia un polo, mientras los polares se alargan y separan los polos. Es la fase más corta.",
      "En la <b>telofase</b>, los cromosomas llegan a los polos y empiezan a descondensarse; alrededor de cada grupo se forma una nueva <b>envoltura nuclear</b> a partir de las vesículas del retículo, reaparecen los nucléolos y el huso se desorganiza. El resultado son dos núcleos hijos con el mismo número de cromosomas y la misma información genética que el núcleo inicial: si la célula madre era diploide (2n), las hijas también lo son. En la especie humana, una mitosis dura alrededor de una hora, mientras que el ciclo completo de una célula que se divide activamente dura unas 24 horas.",
    ], svg: mitosisSVG },
    { h: "La citocinesis", p: [
      "La <mark>citocinesis</mark> es la división del citoplasma, que suele empezar al final de la anafase o en la telofase y reparte los orgánulos entre las dos células hijas. Es diferente en las células animales y vegetales. En las <b>células animales</b>, bajo la membrana, en la zona ecuatorial, se forma un <b>anillo contráctil</b> de filamentos de actina y miosina que se va cerrando como el cordón de una bolsa: aparece un <b>surco de división</b> que se hace cada vez más profundo hasta que estrangula la célula y la divide en dos.",
      "Las <b>células vegetales</b> no pueden estrangularse, porque tienen una pared rígida. En su lugar, vesículas del aparato de Golgi cargadas de polisacáridos se acumulan en el plano ecuatorial, guiadas por microtúbulos (el <b>fragmoplasto</b>), y se fusionan formando el <b>tabique</b> o placa celular. Este crece desde el centro hacia los lados hasta unirse a la pared de la célula madre, y en él se forma la lámina media y luego las paredes de las células hijas; quedan algunos canales, los plasmodesmos. A veces la mitosis no va seguida de citocinesis y se forman células con muchos núcleos: <b>sincitios</b>, como las fibras musculares esqueléticas, o <b>plasmodios</b>.",
    ], svg: L5.compara("Citocinesis", ["Animal", ["anillo de actina", "y miosina", "surco de división", "estrangulación"]], ["Vegetal", ["vesículas de Golgi", "fragmoplasto", "placa celular", "del centro afuera"]], "var(--red)", "var(--leaf)") },
    { h: "Significado biológico de la mitosis", p: [
      "La mitosis produce dos células genéticamente idénticas entre sí y a la célula madre. Esto tiene varias consecuencias. En los <b>organismos unicelulares</b> eucariotas, la mitosis es una forma de <b>reproducción asexual</b>: una ameba o una levadura se divide y origina dos individuos idénticos (clones). En los <b>pluricelulares</b>, la mitosis permite el <b>crecimiento</b> a partir del cigoto (el cuerpo humano adulto tiene unos 30 billones de células, todas procedentes de una), la <b>renovación</b> de células que se desgastan (cada día se reemplazan miles de millones de células de la piel, la sangre y el intestino) y la <b>reparación</b> de tejidos dañados.",
      "La mitosis también es la base de la <b>reproducción asexual</b> de muchos pluricelulares: la gemación de la hidra, la fragmentación de las estrellas de mar o la multiplicación vegetativa de las plantas por esquejes, tubérculos o estolones. Al dar lugar a individuos idénticos, la reproducción asexual es rápida y eficaz en ambientes estables, pero no genera variabilidad. En medicina, muchos tratamientos contra el cáncer, la <b>quimioterapia</b>, atacan a las células que se dividen rápidamente, por ejemplo impidiendo la formación del huso; por eso afectan también a las células sanas que se dividen mucho, como las del pelo o las de la médula ósea.",
    ], svg: L6.radial("Funciones de la mitosis", "MITOSIS", ["Crecimiento", "Renovación", "Reparación", "Reproducción asexual", "Clones idénticos", "Mantiene 2n"], "var(--leaf)") },
    { h: "La meiosis: la primera división", p: [
      "La <mark>meiosis</mark> es un tipo de división que, a partir de una célula diploide, produce cuatro células <b>haploides</b> genéticamente distintas. Consta de dos divisiones sucesivas precedidas de una sola replicación del ADN. La <b>primera división</b> o meiosis I es <b>reduccional</b>: separa los cromosomas homólogos y reduce a la mitad su número. Su <b>profase I</b> es larga y compleja, y se divide en subfases. En el <b>leptoteno</b>, los cromosomas se condensan. En el <b>cigoteno</b>, los homólogos se aparean gen a gen (<b>sinapsis</b>) y forman <b>bivalentes</b> o tétradas, con cuatro cromátidas.",
      "En el <b>paquiteno</b> ocurre el <mark>sobrecruzamiento</mark> o <i>crossing-over</i>: cromátidas no hermanas de los homólogos se rompen e intercambian fragmentos, lo que produce <b>recombinación genética</b>. En el <b>diploteno</b>, los homólogos empiezan a separarse, pero quedan unidos por los puntos donde hubo intercambio, los <b>quiasmas</b>. En la <b>diacinesis</b>, la condensación es máxima y desaparecen la envoltura y el nucléolo. En la <b>metafase I</b>, los bivalentes se sitúan en el ecuador, con cada homólogo mirando a un polo al azar. En la <b>anafase I</b> se separan los homólogos (no las cromátidas) y cada uno va a un polo; en la <b>telofase I</b> se forman dos células haploides, cada cromosoma aún con dos cromátidas.",
    ], svg: sobreSVG, v: ["div-d", "División celular: meiosis"] },
    { h: "La segunda división meiótica", p: [
      "Tras una breve <b>intercinesis</b>, sin replicación del ADN, comienza la <b>segunda división</b> o meiosis II, que es <b>ecuacional</b>: se parece a una mitosis, pero en células haploides. En la <b>profase II</b>, los cromosomas, que tienen dos cromátidas, se condensan y se forma un nuevo huso. En la <b>metafase II</b>, se alinean en el ecuador. En la <b>anafase II</b>, se separan las cromátidas hermanas, que van a polos opuestos. En la <b>telofase II</b>, se forman los núcleos y, tras la citocinesis, se obtienen <b>cuatro células haploides</b>, cada una con un solo juego de cromosomas de una cromátida.",
      "En los animales, la meiosis forma los <b>gametos</b> en las gónadas (gametogénesis). En el testículo, cada espermatocito origina cuatro espermatozoides. En el ovario, las citocinesis son desiguales: se forma un óvulo grande, que conserva casi todo el citoplasma, y dos o tres pequeños <b>corpúsculos polares</b> que degeneran. Los errores en la separación de los cromosomas, llamados <b>no disyunción</b>, producen gametos con un cromosoma de más o de menos, y al fecundarse dan lugar a <b>aneuploidías</b>, como el síndrome de Down (trisomía 21), el de Turner (X0) o el de Klinefelter (XXY). Su frecuencia aumenta con la edad de la madre.",
    ], svg: meiosisSVG },
    { h: "Significado biológico de la meiosis", p: [
      "La meiosis tiene dos consecuencias fundamentales para la reproducción sexual. En primer lugar, <b>reduce a la mitad el número de cromosomas</b>, de modo que, al unirse dos gametos haploides en la <b>fecundación</b>, se recupera el número diploide de la especie. Sin meiosis, el número de cromosomas se duplicaría en cada generación. En segundo lugar, genera <mark>variabilidad genética</mark>, porque cada gameto lleva una combinación distinta de alelos. Esta variabilidad procede de dos mecanismos.",
      "El primero es el <b>sobrecruzamiento</b> de la profase I, que mezcla en un mismo cromosoma alelos de origen paterno y materno y crea combinaciones nuevas. El segundo es la <b>segregación independiente</b> de los homólogos en la anafase I: cada pareja se orienta al azar en el ecuador, de modo que el número de combinaciones posibles es 2ⁿ, siendo n el número de parejas. En la especie humana, 2²³ son más de 8 millones de gametos distintos sin contar el sobrecruzamiento. Si se suma la unión al azar de los gametos en la fecundación, cada individuo es genéticamente único (salvo los gemelos idénticos). La variabilidad es la materia prima sobre la que actúa la <b>selección natural</b>, y permite a las especies adaptarse a los cambios del ambiente.",
    ], extra: `<div class="formula"><span>combinaciones por segregación independiente = 2ⁿ (n = parejas de homólogos)</span></div>`, svg: L5.barras("Gametos distintos por segregación independiente (2ⁿ)", "combinaciones", [["n = 2", 4, "var(--pen)", "4"], ["n = 4 (mosca)", 16, "var(--leaf)", "16"], ["n = 10 (maíz)", 1024, "var(--sun)", "1024"], ["n = 23 (humano)", 1300, "var(--red)", "8,4·10⁶"]]) },
    { h: "Mitosis, meiosis y ciclos biológicos", p: [
      "La mitosis y la meiosis se diferencian en muchos aspectos. La mitosis tiene una división y la meiosis, dos. En la mitosis no hay apareamiento de homólogos ni sobrecruzamiento; en la meiosis, sí. La mitosis separa cromátidas y mantiene el número de cromosomas; la meiosis I separa homólogos y lo reduce a la mitad. La mitosis produce dos células idénticas y la meiosis, cuatro distintas. La mitosis ocurre en las células somáticas y la meiosis, en las células que forman gametos o esporas.",
      "El momento en que ocurre la meiosis define el <mark>ciclo biológico</mark> de cada especie. En el <b>ciclo diplonte</b>, propio de los animales, los individuos son diploides y la meiosis forma directamente los gametos (meiosis gamética); la única fase haploide son los gametos. En el <b>ciclo haplonte</b>, de muchas algas y hongos, el individuo es haploide y solo el cigoto es diploide: la meiosis ocurre al dividirse el cigoto (meiosis cigótica). En el <b>ciclo diplohaplonte</b>, de las plantas y algunas algas, alternan dos generaciones: el <b>esporofito</b>, diploide, forma esporas por meiosis (meiosis espórica), que originan el <b>gametofito</b>, haploide, que forma gametos por mitosis. En los helechos domina el esporofito, y en los musgos, el gametofito.",
    ], svg: L6.tabla("Mitosis y meiosis", ["Rasgo", "Mitosis", "Meiosis"], [["Divisiones", "1", "2"], ["Homólogos", "no se aparean", "sinapsis y quiasmas"], ["Células hijas", "2 iguales (2n)", "4 distintas (n)"], ["Función", "crecer, reparar", "gametos, variabilidad"]]), v: ["div-a", "El ciclo celular: mitosis y meiosis"] },
  ],
  figura: { titulo: "El núcleo y la división celular", items: [["Núcleo", "envoltura y poros", "nucléolo", "cromatina"], ["Ciclo", "G₁ → S → G₂ → M", "ciclinas", "control y cáncer"], ["Mitosis", "P-M-A-T", "2 células 2n", "idénticas"], ["Meiosis", "2 divisiones", "4 células n", "variabilidad"]] },
  video: ["div-a", "El ciclo celular: mitosis y meiosis"],
  ejemplos: [
    ["Una célula de 2n = 8 entra en mitosis. Indica cuántos cromosomas y cromátidas hay en G₁, en metafase y en cada célula hija.", ["G₁: 8 cromosomas de 1 cromátida (8 cromátidas).", "Tras la fase S, metafase: 8 cromosomas de 2 cromátidas (16 cromátidas).", "Células hijas: 8 cromosomas de 1 cromátida."], "G₁: 8/8; metafase: 8/16; hijas: 8/8."],
    ["La misma célula (2n = 8) hace la meiosis. ¿Cuántos cromosomas y cromátidas hay en la metafase I, en la metafase II y en las células finales?", ["Metafase I: 4 bivalentes = 8 cromosomas, 16 cromátidas.", "Metafase II: n = 4 cromosomas de 2 cromátidas (8).", "Células finales: 4 cromosomas de 1 cromátida."], "Metafase I: 8/16; metafase II: 4/8; finales: 4/4."],
    ["¿Cuántas combinaciones de cromosomas puede formar en sus gametos un organismo con 2n = 12, sin contar el sobrecruzamiento?", ["n = 6 parejas de homólogos.", "2⁶ = 64."], "64 combinaciones distintas de gametos."],
    ["Identifica la fase: cromosomas con dos cromátidas en el ecuador y los homólogos emparejados formando bivalentes.", ["Hay bivalentes → meiosis I.", "Alineados en el ecuador → metafase."], "Metafase I de la meiosis."],
    ["Una célula humana tiene 6,4 pg de ADN en G₁. ¿Cuánto tendrá en G₂, en un espermatozoide y en una célula hija de mitosis?", ["En S se duplica: G₂ = 12,8 pg.", "Gameto (n, 1 cromátida): la mitad de G₁ = 3,2 pg.", "Hija de mitosis = como G₁ = 6,4 pg."], "G₂: 12,8 pg; espermatozoide: 3,2 pg; célula hija: 6,4 pg."],
    ["Explica cómo se forma un gameto con 24 cromosomas y qué ocurre si es fecundado por un gameto normal.", ["Por no disyunción: un par de homólogos no se separa en la anafase I (o las cromátidas en la II).", "Un gameto recibe 24 cromosomas y otro 22.", "24 + 23 = 47 cromosomas."], "Se forma un cigoto con una trisomía (47), como el síndrome de Down si el cromosoma extra es el 21."],
  ],
  errores: [
    "Confundir cromosoma y cromátida: tras la replicación, un cromosoma tiene dos cromátidas hermanas.",
    "Pensar que la mitosis incluye la replicación del ADN: el ADN se replica antes, en la fase S de la interfase.",
    "Decir que en la anafase I se separan las cromátidas: en la anafase I se separan los homólogos; las cromátidas, en la II y en la mitosis.",
    "Creer que la meiosis II reduce el número de cromosomas: la reducción ocurre en la meiosis I.",
    "Pensar que la interfase es una fase de reposo: la célula crece, replica su ADN y tiene una actividad intensa.",
    "Confundir homólogos con cromátidas hermanas: los homólogos vienen de cada progenitor y pueden tener alelos distintos; las hermanas son idénticas.",
  ],
  ejercicios: {
    b: [
      ["Describe la envoltura nuclear y los poros.", "Doble membrana continua con el RE, reforzada por la lámina nuclear y atravesada por poros que regulan el paso de moléculas entre núcleo y citoplasma."],
      ["¿Qué función tiene el nucléolo?", "Transcribir el ARN ribosómico y ensamblar las subunidades de los ribosomas."],
      ["Dibuja un cromosoma metafásico e indica sus partes.", "Dos cromátidas hermanas, centrómero con cinetocoro, brazos corto y largo, telómeros."],
      ["Diferencia célula haploide y diploide.", "Haploide (n): un juego de cromosomas. Diploide (2n): dos juegos, en parejas de homólogos."],
      ["¿Qué es el cariotipo?", "Conjunto de cromosomas de una célula ordenados por tamaño y forma."],
      ["Indica las fases del ciclo celular y qué ocurre en cada una.", "G₁: crecimiento; S: replicación del ADN; G₂: preparación; M: mitosis y citocinesis."],
      ["Ordena las fases de la mitosis.", "Profase, prometafase, metafase, anafase y telofase."],
      ["¿Qué ocurre en la anafase mitótica?", "Se separan las cromátidas hermanas y cada una va a un polo de la célula."],
      ["Diferencia la citocinesis animal y la vegetal.", "Animal: estrangulación por un anillo de actina y miosina. Vegetal: formación de un tabique a partir de vesículas del Golgi."],
      ["Cita tres funciones de la mitosis en un organismo pluricelular.", "Crecimiento, renovación de células y reparación de tejidos."],
      ["¿Qué es el sobrecruzamiento y en qué fase ocurre?", "Intercambio de fragmentos entre cromátidas no hermanas de homólogos; en el paquiteno de la profase I."],
      ["¿Qué células se obtienen de una meiosis?", "Cuatro células haploides genéticamente distintas."],
    ],
    m: [
      ["Explica la regulación del ciclo celular y su relación con el cáncer.", "Ciclinas y CDK regulan el avance; hay puntos de control en G₁, G₂ y metafase. Mutaciones en protooncogenes o supresores (p53) eliminan el control y la célula se divide sin freno."],
      ["Describe qué ocurre en la profase y en la metafase de la mitosis.", "Profase: condensación, desaparece el nucléolo, se forma el huso. Metafase: cromosomas alineados en la placa ecuatorial unidos al huso por los cinetocoros."],
      ["Explica las subfases de la profase I de la meiosis.", "Leptoteno (condensación), cigoteno (sinapsis, bivalentes), paquiteno (sobrecruzamiento), diploteno (quiasmas), diacinesis (máxima condensación)."],
      ["Compara la anafase de la mitosis, la anafase I y la anafase II.", "Mitosis y anafase II: se separan cromátidas hermanas. Anafase I: se separan cromosomas homólogos, cada uno con dos cromátidas."],
      ["¿Por qué la meiosis I se llama reduccional y la II ecuacional?", "La I reduce el número de cromosomas a la mitad (separa homólogos); la II mantiene el número (separa cromátidas)."],
      ["Explica los dos mecanismos de la meiosis que generan variabilidad.", "Sobrecruzamiento (recombina alelos dentro de un cromosoma) y segregación independiente de homólogos en la anafase I (2ⁿ combinaciones)."],
      ["Diferencia espermatogénesis y ovogénesis en cuanto al número de gametos.", "De un espermatocito salen 4 espermatozoides; de un ovocito, 1 óvulo y 2-3 corpúsculos polares por citocinesis desiguales."],
      ["Explica qué es una aneuploidía y cómo se produce.", "Número anómalo de cromosomas (2n ± 1) por no disyunción en la meiosis; ej.: trisomía 21, síndrome de Turner."],
      ["Describe el ciclo diplohaplonte de un helecho.", "Esporofito diploide forma esporas por meiosis; la espora origina el gametofito (protalo) haploide, que forma gametos por mitosis; la fecundación da el cigoto y un nuevo esporofito."],
      ["Explica qué es la apoptosis y por qué es importante.", "Muerte celular programada; elimina células dañadas o innecesarias (dedos del embrión) y evita el cáncer."],
      ["¿Por qué la quimioterapia provoca caída del pelo?", "Ataca las células que se dividen rápido; los folículos pilosos tienen células en división constante."],
      ["Explica qué es un sincitio y cómo se forma.", "Célula con varios núcleos formada por mitosis sin citocinesis (o fusión celular); ej.: fibra muscular esquelética."],
    ],
    a: [
      ["(Tipo PAU) Representa la cantidad de ADN de una célula a lo largo de una mitosis y de una meiosis, partiendo de 2c en G₁.", "Mitosis: 2c → 4c (S) → 2c en cada hija. Meiosis: 2c → 4c (S) → 2c tras meiosis I → c tras meiosis II."],
      ["(Tipo PAU) Una especie tiene 2n = 6. Dibuja una célula en metafase mitótica, otra en metafase I y otra en metafase II.", "Mitosis: 6 cromosomas de 2 cromátidas en fila. Metafase I: 3 bivalentes en el ecuador. Metafase II: 3 cromosomas de 2 cromátidas en fila."],
      ["(Tipo PAU) ¿Por qué se dice que la meiosis y la fecundación son procesos complementarios? Explica su importancia evolutiva.", "La meiosis reduce a n y la fecundación restablece 2n, manteniendo constante el número de la especie; ambas generan variabilidad (recombinación y azar en la unión), base de la selección natural."],
      ["Se tratan células en cultivo con colchicina, que impide formar microtúbulos. ¿En qué fase quedarán detenidas y para qué se usa en los cariotipos?", "En metafase (no se forma el huso y no se pasa el control); así se acumulan células con cromosomas muy condensados, ideales para fotografiar el cariotipo."],
      ["Un individuo es heterocigoto para dos genes en cromosomas distintos (AaBb). ¿Qué gametos forma y en qué proporción? ¿Y si estuvieran muy juntos en el mismo cromosoma (AB/ab)?", "En cromosomas distintos: AB, Ab, aB, ab al 25 % (segregación independiente). Ligados: sobre todo AB y ab; Ab y aB solo por sobrecruzamiento, en menor proporción."],
      ["Las células cancerosas tienen activa la telomerasa, que alarga los telómeros. Explica por qué esto contribuye a que sean «inmortales».", "Los telómeros se acortan en cada división; cuando son muy cortos la célula deja de dividirse. Con telomerasa activa no se acortan y pueden dividirse indefinidamente."],
      ["En una mujer, un cromosoma 21 no se separa en la meiosis I. Indica qué óvulos pueden formarse y qué cigotos resultarán al fecundarse por espermatozoides normales.", "Óvulos con dos cromosomas 21 (24) o sin ninguno (22). Cigotos: 47 con trisomía 21 (síndrome de Down) o 45 con monosomía 21 (inviable)."],
      ["Calcula cuántas mitosis sucesivas hacen falta, como mínimo, para pasar de un cigoto a 30 billones de células (3 · 10¹³).", "2ⁿ = 3 · 10¹³ → n = log(3 · 10¹³)/log 2 ≈ 44,8 → unas 45 divisiones (en la realidad son más, por la renovación celular)."],
      ["Explica por qué las plantas obtenidas por esquejes son clones y qué riesgo supone esto para un cultivo.", "Proceden por mitosis de una sola planta: misma información genética. Si aparece una plaga o enfermedad a la que son sensibles, todas lo son (falta de variabilidad)."],
    ],
  },
  quiz: [
    ["La envoltura nuclear se continúa con el…", ["Golgi", "retículo endoplasmático", "lisosoma", "cloroplasto"], 1, "Doble membrana."],
    ["Por los poros nucleares salen…", ["las histonas", "los ARN", "las ADN polimerasas", "el ADN"], 1, "Y subunidades ribosómicas."],
    ["El nucléolo fabrica…", ["ARNt", "subunidades de los ribosomas", "lisosomas", "cromosomas"], 1, "ARNr."],
    ["El corpúsculo de Barr es un…", ["cromosoma X inactivo", "nucléolo", "centriolo", "poro"], 0, "Heterocromatina."],
    ["El cinetocoro se sitúa en el…", ["telómero", "centrómero", "nucléolo", "centriolo"], 1, "Anclaje del huso."],
    ["La especie humana tiene… autosomas", ["44", "46", "23", "22"], 0, "22 parejas."],
    ["El ADN se replica en la fase…", ["G₁", "S", "G₂", "M"], 1, "Síntesis."],
    ["Las neuronas que no se dividen están en…", ["G₀", "S", "M", "G₂"], 0, "Fuera del ciclo."],
    ["El gen p53 es un…", ["oncogén", "gen supresor de tumores", "gen ribosómico", "telómero"], 1, "Guardián del genoma."],
    ["En la metafase los cromosomas…", ["se descondensan", "se alinean en el ecuador", "se separan", "se replican"], 1, "Placa metafásica."],
    ["En la anafase mitótica se separan…", ["homólogos", "cromátidas hermanas", "bivalentes", "núcleos"], 1, "Van a los polos."],
    ["En la telofase…", ["se forma el huso", "se forman las envolturas nucleares", "se replica el ADN", "hay sobrecruzamiento"], 1, "Dos núcleos."],
    ["La citocinesis vegetal se hace por…", ["estrangulación", "formación de un tabique", "gemación", "fagocitosis"], 1, "Fragmoplasto."],
    ["La mitosis produce células…", ["haploides distintas", "idénticas a la madre", "con el doble de cromosomas", "sin núcleo"], 1, "Clones."],
    ["La sinapsis de homólogos ocurre en el…", ["leptoteno", "cigoteno", "diacinesis", "anafase I"], 1, "Bivalentes."],
    ["El sobrecruzamiento ocurre en el…", ["paquiteno", "cigoteno", "diploteno", "leptoteno"], 0, "Recombinación."],
    ["En la anafase I se separan…", ["cromátidas", "homólogos", "centriolos", "nucléolos"], 1, "Reduccional."],
    ["La meiosis produce…", ["2 células 2n", "4 células n", "2 células n", "4 células 2n"], 1, "Distintas."],
    ["El síndrome de Down es una…", ["monosomía", "trisomía 21", "triploidía", "mutación génica"], 1, "No disyunción."],
    ["Los animales tienen ciclo…", ["haplonte", "diplonte", "diplohaplonte", "sin meiosis"], 1, "Meiosis gamética."],
  ],
  examen: [
    ["2n = 10 en metafase mitótica tiene… cromátidas", ["20", "10", "5", "40"], 0, "10 cromosomas × 2."],
    ["Un gameto de una especie 2n = 10 tiene… cromosomas", ["5", "10", "20", "2"], 0, "Haploide."],
    ["Con n = 5, la segregación independiente da… gametos", ["32", "10", "25", "5"], 0, "2⁵."],
    ["En la ovogénesis se forman…", ["1 óvulo y corpúsculos polares", "4 óvulos", "2 óvulos", "4 espermatozoides"], 0, "Citocinesis desiguales."],
    ["La apoptosis es…", ["muerte celular programada", "una fase de la mitosis", "un tipo de meiosis", "la citocinesis"], 0, "Elimina células dañadas."],
    ["El síndrome de Turner es…", ["X0", "XXY", "trisomía 21", "XYY"], 0, "45 cromosomas."],
    ["En el ciclo diplohaplonte, la meiosis forma…", ["esporas", "gametos", "cigotos", "clones"], 0, "Meiosis espórica."],
    ["Los quiasmas son visibles en el…", ["diploteno", "leptoteno", "telofase II", "G₁"], 0, "Puntos de intercambio."],
  ],
  feynman: ["Qué diferencia un cromosoma de una cromátida", "Qué pasa en cada fase del ciclo celular", "Por qué las dos células de la mitosis son idénticas", "Por qué la meiosis tiene dos divisiones", "Por qué hermanos de los mismos padres son distintos", "Qué tiene que ver el ciclo celular con el cáncer"],
  mapa: ["NÚCLEO Y DIVISIÓN", [["Núcleo", "envoltura, nucléolo, cromatina"], ["Ciclo celular", "G₁, S, G₂, M; control"], ["Mitosis", "2 células 2n idénticas"], ["Meiosis", "4 células n distintas"]]],
  tarjetas: [
    ["Envoltura nuclear", "Doble membrana con poros; continua con el RE."],
    ["Nucléolo", "Forma las subunidades de los ribosomas."],
    ["Cromosoma metafásico", "2 cromátidas, centrómero, cinetocoro, telómeros."],
    ["2n y n", "Diploide: 2 juegos; haploide: 1 juego."],
    ["Ciclo celular", "G₁ → S (replicación) → G₂ → M."],
    ["Puntos de control", "G₁, G₂ y metafase; ciclinas y CDK."],
    ["Mitosis", "Profase, metafase, anafase, telofase."],
    ["Citocinesis", "Animal: estrangulación. Vegetal: tabique."],
    ["Meiosis I", "Reduccional: separa homólogos."],
    ["Profase I", "Lepto, cigo (sinapsis), paqui (crossing-over), diplo, diacinesis."],
    ["Variabilidad", "Sobrecruzamiento + segregación independiente (2ⁿ)."],
    ["Ciclos biológicos", "Diplonte, haplonte, diplohaplonte."],
  ],
  glosario: [
    ["Poro nuclear", "Complejo proteico que regula el paso de moléculas a través de la envoltura nuclear."],
    ["Nucléolo", "Región del núcleo donde se forman las subunidades de los ribosomas."],
    ["Cromátida", "Cada una de las dos copias de un cromosoma replicado."],
    ["Centrómero", "Constricción primaria que une las cromátidas hermanas."],
    ["Telómero", "Extremo protector de un cromosoma."],
    ["Homólogos", "Cromosomas de una misma pareja, uno de cada progenitor."],
    ["Cariotipo", "Conjunto de cromosomas de una célula ordenados por tamaño y forma."],
    ["Ciclina", "Proteína que regula el avance del ciclo celular junto con las CDK."],
    ["Apoptosis", "Muerte celular programada."],
    ["Huso mitótico", "Conjunto de microtúbulos que separa los cromosomas en la división."],
    ["Citocinesis", "División del citoplasma."],
    ["Bivalente", "Pareja de homólogos apareados en la meiosis, con cuatro cromátidas."],
    ["Quiasma", "Punto de unión entre homólogos donde hubo sobrecruzamiento."],
    ["No disyunción", "Fallo en la separación de cromosomas durante la división."],
    ["Esporofito", "Generación diploide de las plantas que forma esporas por meiosis."],
    ["Gametofito", "Generación haploide de las plantas que forma gametos por mitosis."],
  ],
  situacion: {
    titulo: "Cazadores de mitosis en la punta de la raíz",
    reto: "Vuestro equipo debe preparar raíces de cebolla, identificar al microscopio células en cada fase de la mitosis y calcular cuánto dura cada fase a partir de su frecuencia.",
    pasos: [
      "Haced germinar bulbos de cebolla en agua y cortad las puntas de las raíces.",
      "Fijad, hidrolizad con HCl y teñid con orceína acética; aplastad la muestra (técnica de squash).",
      "Contad al microscopio unas 200 células, clasificándolas en interfase, profase, metafase, anafase y telofase.",
      "Calculad el porcentaje de cada fase y estimad su duración suponiendo un ciclo de 24 horas.",
      "Comparad vuestros resultados con los de otros grupos y explicad las diferencias.",
    ],
    producto: "Un informe con fotografías de cada fase, una tabla de recuento y los cálculos de duración.",
    evaluacion: ["La preparación permite ver las fases con claridad.", "Las fases se identifican correctamente.", "Los cálculos se basan en la proporción de células en cada fase.", "Se discuten las fuentes de error."],
  },
  familias: [
    "Poned una cebolla o un diente de ajo sobre un vaso de agua y observad cómo crecen las raíces cada día.",
    "Hablad de la historia de Henrietta Lacks y del consentimiento en la investigación médica.",
    "Buscad fotos familiares y comentad qué rasgos se parecen entre hermanos y cuáles no.",
    "Informaos juntos sobre cómo prevenir algunos cánceres (sol, tabaco, revisiones).",
  ],
  saberes: "bloque «Biología celular»: el núcleo interfásico (envoltura, nucleoplasma, nucléolo y cromatina) y los cromosomas; el ciclo celular, sus fases y su regulación, relación con el cáncer; la mitosis y la citocinesis, su significado biológico; la meiosis, sus fases y su significado en la variabilidad genética y la reproducción sexual; los ciclos biológicos.",
  ideas: [
    "Observación de mitosis en meristemos de raíz de cebolla teñidos con orceína.",
    "Modelización de la mitosis y la meiosis con plastilina o calcetines de colores para representar homólogos y cromátidas.",
    "Análisis de cariotipos reales para identificar aneuploidías.",
    "Debate ético sobre el caso de las células HeLa y el uso de muestras biológicas.",
  ],
  fuentes: [
    { t: "Instituto Nacional del Cáncer (NIH): qué es el cáncer", url: "https://www.cancer.gov/espanol/cancer/naturaleza/que-es" },
  ],
});
