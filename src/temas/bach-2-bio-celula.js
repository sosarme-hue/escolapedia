// Biología 2º Bachillerato · La célula: envolturas, citoplasma y orgánulos (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, bicapa, celula, cadena, arbol } = require("./_bach2-bio");

// Modelo de mosaico fluido.
const mosaicoSVG = marco("Modelo de mosaico fluido: bicapa de fosfolípidos con proteínas integrales que la atraviesan, proteínas periféricas, colesterol y glúcidos del glucocáliz en la cara externa", `
  <g transform="translate(0 40)">${bicapa(14, 246, 0, 13, 0.85)}</g>
  <rect x="84" y="28" width="30" height="80" rx="12" fill="var(--pen)" fill-opacity=".8"/>${T(99, 72, "PI", { fs: 10, b: true, c: "#fff" })}
  <rect x="170" y="32" width="26" height="72" rx="10" fill="var(--pen)" fill-opacity=".8"/>
  <ellipse cx="226" cy="112" rx="18" ry="9" fill="var(--leaf)"/>${T(226, 134, "periférica", { fs: 9.5, b: true, c: "var(--leaf)" })}
  <path d="M99 28 l -6 -10 m 6 10 l 6 -10 m -12 0 l -4 -6 m 16 6 l 4 -6" stroke="var(--sun)" stroke-width="2.4"/><path d="M183 32 l -6 -10 m 6 10 l 6 -12" stroke="var(--sun)" stroke-width="2.4"/>
  ${T(40, 18, "glucocáliz", { fs: 10, b: true, c: "#b45309" })}${T(40, 30, "(exterior)", { fs: 9, c: "var(--muted)" })}
  <rect x="140" y="48" width="8" height="28" rx="3" fill="var(--ink)" opacity=".6"/>${T(144, 160, "colesterol", { fs: 9.5, b: true })}
  ${T(99, 160, "proteína integral", { fs: 9.5, b: true, c: "var(--pen)" })}${T(30, 160, "citoplasma", { fs: 9.5, c: "var(--muted)" })}
  ${T(130, 176, "fluida y asimétrica", { fs: 11, b: true })}`);

// Tipos de transporte a través de la membrana.
const transpSVG = marco("Transporte a través de la membrana: difusión simple por la bicapa, difusión facilitada por canales y permeasas a favor de gradiente, y transporte activo con bombas en contra de gradiente gastando ATP", `
  <rect x="10" y="72" width="240" height="36" fill="var(--sun)" fill-opacity=".25"/>
  ${[[36, "simple", "O₂, CO₂"], [96, "canal", "iones"], [156, "permeasa", "glucosa"], [216, "bomba", "Na⁺/K⁺"]].map(([x, t, d], i) => `
  ${i ? `<rect x="${x - 12}" y="66" width="24" height="48" rx="6" fill="${i === 3 ? "var(--red)" : "var(--pen)"}" fill-opacity=".75"/>` : ""}
  ${i === 1 ? `<rect x="${x - 3}" y="66" width="6" height="48" fill="var(--card)"/>` : ""}
  <path d="M${x} ${i === 3 ? 140 : 40} V ${i === 3 ? 44 : 136}" stroke="var(--ink)" stroke-width="2.2" marker-end="url(#tr1)"/>
  ${T(x, 24, t, { fs: 10.5, b: true, c: i === 3 ? "var(--red)" : "var(--pen)" })}${T(x, 158, d, { fs: 10 })}`).join("")}
  ${T(246, 100, "ATP", { fs: 9, b: true, c: "var(--red)", a: "end" })}
  ${T(96, 174, "pasivo: a favor de gradiente", { fs: 10, b: true, c: "var(--pen)" })}${T(216, 174, "activo", { fs: 10, b: true, c: "var(--red)" })}`, `<marker id="tr1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker>`);

// Mitocondria.
const mitoSVG = marco("Estructura de la mitocondria: membrana externa lisa, membrana interna con crestas, espacio intermembrana y matriz con ADN circular y ribosomas", `
  <ellipse cx="130" cy="88" rx="112" ry="58" fill="var(--red)" fill-opacity=".12" stroke="var(--red)" stroke-width="3"/>
  <path d="M30 88 q 0 -44 100 -46 q 100 2 100 46 q 0 44 -100 46 q -100 -2 -100 -46" fill="none" stroke="var(--red)" stroke-width="2.2"/>
  ${[60, 92, 124, 156, 188].map((x, i) => `<path d="M${x} ${i % 2 ? 132 : 44} V ${i % 2 ? 98 : 78} q 6 -8 12 0 V ${i % 2 ? 132 : 44}" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>`).join("")}
  <circle cx="140" cy="94" r="10" fill="none" stroke="var(--pen)" stroke-width="2"/>${[110, 170, 84].map((x) => `<circle cx="${x}" cy="${x === 84 ? 96 : 84}" r="2.4" fill="var(--ink)"/>`).join("")}
  ${T(130, 18, "membrana externa", { fs: 10, b: true, c: "var(--red)" })}${T(50, 168, "crestas (m. interna)", { fs: 10, b: true, c: "var(--red)" })}
  ${T(196, 168, "matriz · ADN", { fs: 10, b: true, c: "var(--pen)" })}`);

// Cloroplasto.
const cloroSVG = marco("Estructura del cloroplasto: doble membrana, estroma con ADN y ribosomas, y tilacoides apilados en grana unidos por lamelas", `
  <ellipse cx="130" cy="88" rx="114" ry="60" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="3"/>
  <ellipse cx="130" cy="88" rx="106" ry="53" fill="none" stroke="var(--leaf)" stroke-width="1.6"/>
  ${[66, 112, 158, 200].map((x, j) => [0, 1, 2, 3, 4].map((k) => `<rect x="${x - 15}" y="${(j % 2 ? 74 : 60) + k * 8}" width="30" height="6" rx="3" fill="var(--leaf)"/>`).join("")).join("")}
  <path d="M81 80 H 97 M127 92 H 143 M173 80 H 185" stroke="var(--leaf)" stroke-width="2"/>
  <circle cx="102" cy="120" r="8" fill="none" stroke="var(--pen)" stroke-width="2"/>
  ${T(130, 18, "doble membrana", { fs: 10, b: true, c: "var(--leaf)" })}${T(66, 168, "granum (tilacoides)", { fs: 10, b: true, c: "var(--leaf)" })}${T(196, 168, "estroma · ADN", { fs: 10, b: true, c: "var(--pen)" })}`);

module.exports = tema({
  titulo: "La célula: envolturas, citoplasma y orgánulos",
  minutos: 125,
  secciones: [3, 4, 5],
  objetivos: [
    "Enunciar la teoría celular y conocer los métodos de estudio de la célula",
    "Comparar la organización de las células procariotas y eucariotas, y de las animales y vegetales",
    "Describir el modelo de mosaico fluido y los mecanismos de transporte a través de la membrana",
    "Explicar la endocitosis, la exocitosis y la función de la pared celular y la matriz extracelular",
    "Relacionar la estructura de cada orgánulo con su función y el sistema de endomembranas",
    "Describir mitocondrias y cloroplastos y argumentar la teoría endosimbiótica",
  ],
  claves: ["teoría celular", "procariota", "eucariota", "mosaico fluido", "glucocáliz", "difusión facilitada", "transporte activo", "bomba de sodio-potasio", "endocitosis", "exocitosis", "citoesqueleto", "retículo endoplasmático", "aparato de Golgi", "lisosoma", "mitocondria", "cloroplasto", "endosimbiosis"],
  pregunta: {
    texto: "Las mitocondrias tienen su propio ADN, circular como el de las bacterias, y se dividen por su cuenta dentro de la célula. ¿Qué nos dice esto sobre su origen?",
    respuesta: "Que probablemente fueron <mark>bacterias independientes</mark>. Según la <b>teoría endosimbiótica</b> de Lynn Margulis, hace unos 2000 millones de años una célula grande englobó a una bacteria aerobia sin digerirla; ambas salieron ganando y acabaron formando un solo organismo. Por eso las mitocondrias, y los cloroplastos que proceden de cianobacterias, tienen doble membrana, ADN circular, ribosomas de tipo bacteriano (70S) y se dividen por bipartición.",
  },
  lectura: {
    titulo: "Una ciudad en una gota",
    html: `<p>En 1665, Robert Hooke observó con un microscopio fabricado por él una lámina de corcho y vio unas pequeñas celdas vacías que le recordaron las celdas de un monasterio: las llamó <i>cells</i>, células. Lo que veía eran las paredes de células vegetales muertas. Pocos años después, el comerciante de telas holandés Antonie van Leeuwenhoek, con lentes de gran calidad pulidas por él mismo, descubrió en una gota de agua de lluvia un mundo de «animálculos» que se movían: bacterias y protozoos que nadie había visto nunca.</p><p>Hoy sabemos que una célula eucariota se parece más a una ciudad que a una celda vacía. Tiene una frontera con aduanas que deciden qué entra y qué sale (la membrana plasmática), una red de carreteras y andamios (el citoesqueleto), centrales eléctricas (las mitocondrias), fábricas (los ribosomas y el retículo), un servicio de empaquetado y correos (el aparato de Golgi), plantas de reciclaje (los lisosomas) y un ayuntamiento que guarda los planos (el núcleo). En una célula vegetal hay, además, paneles solares: los cloroplastos. En este tema recorrerás esa ciudad orgánulo a orgánulo y descubrirás cómo trabajan juntos para mantener la célula viva.</p>`,
  },
  bloques: [
    { h: "La teoría celular y el estudio de la célula", p: [
      "La <mark>teoría celular</mark> se formuló en el siglo XIX a partir de los trabajos de Schleiden (1838) en plantas, Schwann (1839) en animales y Virchow (1855), que añadió que toda célula procede de otra célula (<i>omnis cellula e cellula</i>). Ramón y Cajal demostró a finales del siglo que también el tejido nervioso está formado por células independientes, las neuronas. Sus postulados actuales son: todos los seres vivos están formados por una o más células; la célula es la unidad anatómica y fisiológica de los seres vivos; toda célula procede de otra preexistente; y la célula contiene la información hereditaria, que transmite a sus descendientes.",
      "Las células miden entre 1 µm (bacterias) y 100 µm (muchas eucariotas), aunque hay excepciones como la yema del huevo o las neuronas de metro de largo. Por eso se estudian con <b>microscopios</b>. El <b>microscopio óptico</b> usa la luz y lentes de vidrio, y llega a unos 0,2 µm de resolución: permite ver células, núcleos y algunos orgánulos, también vivos, con ayuda de tinciones. El <b>microscopio electrónico</b> usa haces de electrones y alcanza unos 0,2 nm: el de <b>transmisión</b> (MET) muestra la ultraestructura interna en cortes finísimos, y el de <b>barrido</b> (MEB), la superficie en tres dimensiones. Otras técnicas son la microscopía de fluorescencia, la crioelectrónica y el fraccionamiento celular por centrifugación.",
    ], svg: L6.tabla("Microscopios y lo que permiten ver", ["Microscopio", "Resolución", "Se ve"], [["Ojo humano", "0,1 mm", "óvulo humano"], ["Óptico", "0,2 µm", "células, núcleo"], ["Electrónico (MET)", "0,2 nm", "ribosomas, membranas"], ["Electrónico (MEB)", "≈ 5 nm", "superficie en 3D"]]), v: ["cel-a", "La célula: estructura y función celular"] },
    { h: "Células procariotas y eucariotas", p: [
      "Hay dos grandes tipos de organización celular. Las <mark>células procariotas</mark> (bacterias y arqueas) son pequeñas y sencillas: no tienen núcleo, de modo que su ADN, una molécula circular, está en una región del citoplasma llamada <b>nucleoide</b>; pueden tener además pequeños ADN circulares, los <b>plásmidos</b>. No tienen orgánulos membranosos: su citoplasma contiene ribosomas 70S e inclusiones. Están rodeadas por la membrana plasmática, una <b>pared celular</b> de peptidoglucano (mureína) y a veces una cápsula; pueden tener <b>flagelos</b> para moverse y <b>fimbrias</b> o pili para adherirse e intercambiar ADN.",
      "Las <mark>células eucariotas</mark> (protoctistas, hongos, plantas y animales) son mayores y más complejas. Tienen un <b>núcleo</b> rodeado por una doble membrana que contiene el ADN lineal asociado a histonas, y un citoplasma con un sistema de <b>orgánulos membranosos</b> que divide la célula en compartimentos especializados, ribosomas 80S y un citoesqueleto. Las procariotas fueron las primeras células, hace unos 3800 millones de años; las eucariotas aparecieron hace unos 2000 millones de años. Esta distinción es una de las mayores divisiones de la historia de la vida.",
    ], svg: L5.compara("Procariota y eucariota", ["Procariota", ["sin núcleo", "ADN circular", "ribosomas 70S", "1-10 µm"]], ["Eucariota", ["núcleo con envoltura", "ADN lineal + histonas", "orgánulos, 80S", "10-100 µm"]], "var(--red)", "var(--pen)") },
    { h: "Células animales y vegetales", p: [
      "Dentro de las eucariotas, las células animales y vegetales comparten la membrana plasmática, el núcleo, los ribosomas, el retículo endoplasmático, el aparato de Golgi, las mitocondrias, los peroxisomas y el citoesqueleto. Pero se diferencian en varios aspectos que reflejan su modo de vida. La <b>célula vegetal</b> tiene una <b>pared celular</b> de celulosa que le da forma poliédrica y la protege; <b>cloroplastos</b> y otros plastos, que le permiten la fotosíntesis (nutrición autótrofa); y una gran <b>vacuola</b> central que puede ocupar el 90 % del volumen. Carece de centriolos y almacena almidón.",
      "La <b>célula animal</b> no tiene pared ni cloroplastos, por lo que su forma es variable y su nutrición, heterótrofa. Tiene <b>centriolos</b> en el centrosoma, vacuolas pequeñas y numerosas, lisosomas abundantes y almacena glucógeno. Los hongos tienen pared de quitina y nutrición heterótrofa por absorción, y los protoctistas son muy variados: las algas se parecen a las células vegetales y los protozoos, a las animales. Estudiar estas diferencias permite identificar al microscopio a qué reino pertenece una célula.",
    ], svg: celula("Célula vegetal con pared celular, gran vacuola, cloroplastos, núcleo, mitocondria y retículo endoplasmático", true) },
    { h: "La membrana plasmática: estructura", p: [
      "La <mark>membrana plasmática</mark> es una envoltura de unos 7,5 nm que delimita la célula y regula el paso de sustancias. Su estructura se explica con el <b>modelo de mosaico fluido</b>, propuesto por Singer y Nicolson en 1972. La base es una <b>bicapa lipídica</b> de fosfolípidos, con colesterol intercalado en las células animales, que es <b>fluida</b>: los lípidos y muchas proteínas se desplazan lateralmente. En ella se insertan <b>proteínas</b> como las piezas de un mosaico: las <b>integrales</b> o intrínsecas atraviesan la bicapa (proteínas transmembrana) o se anclan en ella, y las <b>periféricas</b> o extrínsecas se unen a la superficie.",
      "La membrana es <b>asimétrica</b>: sus dos caras tienen composición distinta. En la externa se sitúan los oligosacáridos de los glucolípidos y las glucoproteínas, que forman el <mark>glucocáliz</mark>. Las funciones de la membrana son múltiples: separa el medio interno del externo; controla el intercambio de sustancias (es una barrera de <b>permeabilidad selectiva</b>); recibe señales mediante <b>receptores</b>, como los de las hormonas y los neurotransmisores; reconoce otras células, gracias al glucocáliz, lo que permite la formación de tejidos y la respuesta inmunitaria; mantiene una diferencia de potencial eléctrico entre sus dos caras; y permite la adhesión entre células.",
    ], svg: mosaicoSVG, v: ["cel-b", "Estructura de la membrana: modelo del mosaico fluido"] },
    { h: "El transporte de moléculas pequeñas", p: [
      "El <b>transporte pasivo</b> se produce a favor de gradiente de concentración (o electroquímico) y sin gasto de energía. En la <mark>difusión simple</mark>, las moléculas atraviesan directamente la bicapa: así pasan las pequeñas y apolares, como el O₂, el CO₂, el etanol o las hormonas esteroideas, y en pequeña medida el agua. En la <mark>difusión facilitada</mark>, las moléculas polares y los iones atraviesan la membrana gracias a proteínas: las <b>proteínas de canal</b> forman poros por los que pasan iones (algunos se abren o cierran según el voltaje o la unión de un ligando) y las <b>acuaporinas</b> dejan pasar el agua en masa; las <b>permeasas</b> o transportadores se unen a la molécula, cambian de forma y la liberan al otro lado, como el transportador de glucosa.",
      "El <b>transporte activo</b> mueve sustancias en contra de gradiente y necesita energía, normalmente del ATP, mediante proteínas llamadas <b>bombas</b>. La más importante es la <mark>bomba de sodio-potasio</mark> (Na⁺/K⁺-ATPasa), que en cada ciclo saca 3 Na⁺ y mete 2 K⁺ hidrolizando un ATP. Mantiene la alta concentración de K⁺ dentro y de Na⁺ fuera, imprescindible para el impulso nervioso y para controlar el volumen celular, y consume hasta un tercio del ATP de una persona en reposo. En el <b>cotransporte</b>, el gradiente de Na⁺ creado por la bomba se aprovecha para meter otras moléculas, como la glucosa en el intestino.",
    ], svg: transpSVG },
    { h: "Endocitosis y exocitosis", p: [
      "Las macromoléculas y las partículas grandes no pueden atravesar la membrana: entran y salen de la célula envueltas en <b>vesículas</b> de membrana, lo que supone un gasto de energía. En la <mark>endocitosis</mark>, la membrana se invagina y rodea el material, y se forma una vesícula que entra en el citoplasma. Hay tres tipos. La <b>fagocitosis</b> («comer»): la célula emite pseudópodos que engloban partículas grandes o microorganismos, como hacen las amebas y los macrófagos. La <b>pinocitosis</b> («beber»): se engloban gotitas de líquido con solutos. Y la <b>endocitosis mediada por receptor</b>, muy específica: la molécula se une a receptores concentrados en zonas de la membrana recubiertas de clatrina, como ocurre con las LDL que llevan el colesterol.",
      "En la <mark>exocitosis</mark>, vesículas procedentes del aparato de Golgi se fusionan con la membrana plasmática y vierten su contenido al exterior: así se secretan hormonas, enzimas digestivas, neurotransmisores o los componentes de la matriz extracelular. Al fusionarse, la membrana de la vesícula se incorpora a la plasmática, lo que compensa la que se pierde en la endocitosis. La <b>transcitosis</b> combina ambos procesos para atravesar una célula de lado a lado, como hacen los anticuerpos de la leche materna en el intestino del bebé.",
    ], svg: L6.tabla("Transporte de macromoléculas", ["Proceso", "Qué entra o sale", "Ejemplo"], [["Fagocitosis", "partículas grandes", "macrófago, ameba"], ["Pinocitosis", "líquido y solutos", "células del endotelio"], ["Mediada por receptor", "moléculas concretas", "colesterol (LDL)"], ["Exocitosis", "secreciones", "insulina"]]) },
    { h: "La pared celular y la matriz extracelular", p: [
      "Por fuera de la membrana, muchas células tienen envolturas que las protegen. La <mark>pared celular</mark> de las plantas es una estructura rígida formada por microfibrillas de <b>celulosa</b> inmersas en una matriz de hemicelulosa, pectina y proteínas. Primero se forma la <b>lámina media</b>, de pectinas, que une células vecinas; después, la <b>pared primaria</b>, delgada y flexible, que permite el crecimiento; y en muchas células, al terminar de crecer, la <b>pared secundaria</b>, gruesa y a menudo impregnada de <b>lignina</b> (madera) o de <b>suberina</b> (corcho). La pared da forma y soporte, impide que la célula estalle por ósmosis y protege frente a patógenos.",
      "Las paredes de células vecinas no están aisladas: las atraviesan los <b>plasmodesmos</b>, canales que comunican sus citoplasmas. En los tejidos animales, las células están rodeadas por la <b>matriz extracelular</b>, formada por proteínas fibrosas (colágeno, elastina) y glucosaminoglucanos (ácido hialurónico), que da resistencia y sirve de soporte; es muy abundante en el cartílago y el hueso. Las células animales se unen entre sí mediante <b>uniones celulares</b>: las <b>uniones estrechas</b> sellan el espacio entre células epiteliales; los <b>desmosomas</b> las anclan como remaches; y las <b>uniones en hendidura</b> o comunicantes permiten el paso de iones de una célula a otra, como en el músculo cardiaco.",
    ], svg: L5.compara("Envolturas externas", ["Pared vegetal", ["celulosa", "lámina media, 1.ª y 2.ª", "rígida", "plasmodesmos"]], ["Matriz animal", ["colágeno", "ác. hialurónico", "soporte flexible", "uniones celulares"]], "var(--leaf)", "var(--pen)") },
    { h: "El citosol y el citoesqueleto", p: [
      "El <b>citoplasma</b> es todo el contenido celular comprendido entre la membrana plasmática y el núcleo. Está formado por los orgánulos y por un medio acuoso, el <mark>citosol</mark> o hialoplasma, que contiene agua (un 70-85 %), iones, metabolitos, ARN y miles de enzimas. En el citosol ocurren muchas reacciones del metabolismo, como la glucólisis, la síntesis de ácidos grasos o la síntesis de proteínas en los ribosomas libres, y se almacenan inclusiones como gotas de grasa o gránulos de glucógeno.",
      "El citosol está recorrido por el <mark>citoesqueleto</mark>, una red de filamentos proteicos que da forma a la célula, organiza sus orgánulos y permite el movimiento. Lo forman tres tipos de filamentos. Los <b>microfilamentos</b> (7 nm), de actina, forman una red bajo la membrana y producen los pseudópodos y la contracción muscular junto con la miosina. Los <b>filamentos intermedios</b> (10 nm), de proteínas variadas como la queratina, dan resistencia mecánica. Los <b>microtúbulos</b> (25 nm), tubos huecos de tubulina, sirven de raíles por los que proteínas motoras transportan vesículas, forman el huso mitótico que separa los cromosomas y constituyen los <b>centriolos</b>, los <b>cilios</b> y los <b>flagelos</b>, con su estructura característica de 9 + 2 pares de microtúbulos. El <b>centrosoma</b>, con dos centriolos en las células animales, organiza los microtúbulos.",
    ], svg: L6.tabla("Filamentos del citoesqueleto", ["Filamento", "Proteína", "Función"], [["Microfilamentos", "actina (7 nm)", "contracción, pseudópodos"], ["Intermedios", "queratina… (10 nm)", "resistencia"], ["Microtúbulos", "tubulina (25 nm)", "transporte, huso"], ["Cilios y flagelos", "9 + 2 microtúbulos", "movimiento"]]), v: ["cel-f", "Qué es el citoesqueleto"] },
    { h: "Ribosomas y retículo endoplasmático", p: [
      "Los <mark>ribosomas</mark> son orgánulos sin membrana formados por ARN ribosómico y proteínas, organizados en dos subunidades. Son los responsables de la <b>síntesis de proteínas</b>. Los de las procariotas, las mitocondrias y los cloroplastos son 70S (S es una unidad de sedimentación); los del citoplasma eucariota, 80S. Pueden estar libres en el citosol, donde fabrican proteínas que se quedan en él, o unidos a la membrana del retículo, donde fabrican proteínas que se secretan o van a las membranas. Varios ribosomas leyendo un mismo ARNm forman un <b>polisoma</b>.",
      "El <mark>retículo endoplasmático</mark> es una red de sacos aplanados y túbulos comunicados, cuya membrana se continúa con la envoltura nuclear. Es el primer componente del <b>sistema de endomembranas</b>. El <b>retículo rugoso</b> (RER) tiene ribosomas adheridos a su cara externa; las proteínas que fabrican entran en su interior, donde se pliegan y empiezan a glicosilarse, y desde allí se envían en vesículas al aparato de Golgi. Es muy abundante en las células secretoras, como las del páncreas. El <b>retículo liso</b> (REL), sin ribosomas, sintetiza lípidos (fosfolípidos, colesterol, hormonas esteroideas), <b>desintoxica</b> fármacos y alcohol en las células del hígado y almacena calcio, que en el músculo libera para la contracción.",
    ], svg: L5.compara("Retículo endoplasmático", ["Rugoso", ["con ribosomas", "síntesis de proteínas", "glicosilación", "células secretoras"]], ["Liso", ["sin ribosomas", "síntesis de lípidos", "desintoxicación", "reserva de Ca²⁺"]], "var(--pen)", "var(--sun)") },
    { h: "Aparato de Golgi, lisosomas, vacuolas y peroxisomas", p: [
      "El <mark>aparato de Golgi</mark>, descrito por Camillo Golgi en 1898, está formado por pilas de sacos aplanados, los <b>dictiosomas</b>, con una cara <i>cis</i> que recibe las vesículas del retículo y una cara <i>trans</i> de la que salen las vesículas de secreción. En su interior, las proteínas y los lípidos se <b>modifican</b> (glicosilación), se <b>clasifican</b> y se <b>empaquetan</b> en vesículas según su destino: la membrana plasmática, la secreción por exocitosis o los lisosomas. Funciona como el servicio de correos de la célula. En las plantas fabrica además los polisacáridos de la pared.",
      "Los <b>lisosomas</b> son vesículas del Golgi con unas 50 <b>enzimas hidrolíticas</b> que trabajan a pH 5: digieren el material que entra por endocitosis (heterofagia) y los orgánulos viejos de la propia célula (<b>autofagia</b>). Si falta una enzima lisosomal, el sustrato se acumula y causa enfermedades como la de Tay-Sachs. Las <b>vacuolas</b> almacenan agua, sales, pigmentos o sustancias de reserva y desecho; en las plantas, la gran vacuola central mantiene la turgencia. Los <b>peroxisomas</b> contienen oxidasas que oxidan ácidos grasos y sustancias tóxicas, produciendo agua oxigenada, que la <b>catalasa</b> descompone de inmediato.",
    ], svg: cadena("Sistema de endomembranas: ruta de una proteína de secreción", [["RER: síntesis", "var(--pen)"], ["Golgi: modifica", "var(--sun)"], ["Vesícula", "var(--leaf)"], ["Exocitosis", "var(--red)"]], ["vesícula", "cara trans", "fusión"], "Ruta de secreción"), v: ["cel-d", "Aparato de Golgi: funciones y estructura"] },
    { h: "Las mitocondrias", p: [
      "Las <mark>mitocondrias</mark> son los orgánulos donde se obtiene la mayor parte de la energía de la célula mediante la <b>respiración celular</b>. Tienen forma de bastón o elipse, de 1 a 10 µm, y su número varía según la actividad de la célula: un hepatocito puede tener más de mil y un glóbulo rojo maduro, ninguna. Están rodeadas por una <b>doble membrana</b>. La <b>membrana externa</b> es lisa y muy permeable, gracias a unas proteínas de canal llamadas porinas. La <b>membrana interna</b> forma pliegues hacia el interior, las <b>crestas mitocondriales</b>, que aumentan su superficie; es muy impermeable y contiene las proteínas de la cadena de transporte de electrones y la <b>ATP sintasa</b>.",
      "Entre ambas membranas queda el <b>espacio intermembrana</b>, y el interior es la <b>matriz mitocondrial</b>, un gel con enzimas, ribosomas 70S y varias moléculas de <b>ADN circular</b>. En la matriz se realizan el ciclo de Krebs y la β-oxidación de los ácidos grasos; en la membrana interna, la fosforilación oxidativa, que produce casi todo el ATP. Las mitocondrias se dividen por bipartición y se heredan solo de la madre, a través del óvulo, por lo que su ADN se usa para estudiar la genealogía materna de las poblaciones humanas. Las enfermedades mitocondriales afectan sobre todo a los tejidos que más energía consumen: músculo y sistema nervioso.",
    ], svg: mitoSVG, v: ["cel-e", "La mitocondria y su estructura"] },
    { h: "Los cloroplastos y la teoría endosimbiótica", p: [
      "Los <mark>cloroplastos</mark> son plastos de las células vegetales y de las algas donde se realiza la <b>fotosíntesis</b>. Son lenticulares, de unos 5 µm, y una célula de una hoja puede tener entre 20 y 100. Tienen una <b>doble membrana</b> externa sin crestas y, en su interior, un medio llamado <b>estroma</b>, con enzimas, ribosomas 70S, ADN circular y gránulos de almidón. Dentro del estroma hay un tercer sistema de membranas, los <b>tilacoides</b>, sacos aplanados que se apilan formando los <b>grana</b>, unidos entre sí por tilacoides del estroma o lamelas. En la membrana de los tilacoides están la clorofila y los demás pigmentos, la cadena de transporte de electrones y la ATP sintasa: allí se realiza la fase luminosa. En el estroma ocurre el ciclo de Calvin. Otros plastos son los <b>cromoplastos</b>, con carotenoides, y los <b>amiloplastos</b>, que almacenan almidón.",
      "La <mark>teoría endosimbiótica</mark>, defendida por Lynn Margulis en 1967, propone que mitocondrias y cloroplastos proceden de bacterias que fueron englobadas por una célula ancestral y vivieron en simbiosis con ella: las mitocondrias, de bacterias aerobias (α-proteobacterias); los cloroplastos, de cianobacterias. Las pruebas son numerosas: tienen doble membrana, la interna parecida a la bacteriana; poseen <b>ADN circular</b> sin histonas y <b>ribosomas 70S</b>, sensibles a los mismos antibióticos que los bacterianos; se dividen por <b>bipartición</b>; y la comparación de sus genes muestra un parentesco directo con esas bacterias.",
    ], svg: cloroSVG },
  ],
  figura: { titulo: "La célula eucariota", items: [["Membrana", "mosaico fluido", "transporte", "endo y exocitosis"], ["Citoplasma", "citosol", "citoesqueleto", "ribosomas"], ["Endomembranas", "RE y Golgi", "lisosomas", "vacuolas"], ["Energía", "mitocondrias", "cloroplastos", "endosimbiosis"]] },
  video: ["cel-c", "Organelos celulares y sus funciones"],
  ejemplos: [
    ["Indica si estas estructuras son de célula procariota, eucariota animal, eucariota vegetal o de varias: pared de celulosa, ribosomas 70S, centriolos, mitocondrias, nucleoide.", ["Pared de celulosa: vegetal.", "Ribosomas 70S: procariota (y dentro de mitocondrias y cloroplastos).", "Centriolos: animal.", "Mitocondrias: animal y vegetal.", "Nucleoide: procariota."], "Celulosa (vegetal), 70S (procariota), centriolos (animal), mitocondrias (ambas eucariotas), nucleoide (procariota)."],
    ["Explica qué tipo de transporte usa cada molécula: O₂, glucosa en un eritrocito, Na⁺ hacia fuera de la neurona, un virus que entra en un macrófago.", ["O₂: pequeña y apolar → difusión simple.", "Glucosa a favor de gradiente con transportador → difusión facilitada.", "Na⁺ contra gradiente con ATP → transporte activo (bomba).", "Partícula grande → fagocitosis."], "Difusión simple, difusión facilitada, transporte activo y endocitosis (fagocitosis)."],
    ["Calcula cuántos Na⁺ y K⁺ mueve la bomba si consume 1000 ATP.", ["Por cada ATP: 3 Na⁺ fuera y 2 K⁺ dentro.", "1000 · 3 = 3000 Na⁺; 1000 · 2 = 2000 K⁺."], "Saca 3000 Na⁺ y mete 2000 K⁺; el interior queda más negativo (salen 1000 cargas netas)."],
    ["Una célula del páncreas fabrica una enzima digestiva. Describe su recorrido hasta salir de la célula.", ["Síntesis en ribosomas del RER y entrada en su luz.", "Vesícula de transición hasta la cara cis del Golgi.", "Modificación y empaquetado en la cara trans.", "Vesícula de secreción → exocitosis."], "RER → Golgi → vesícula de secreción → exocitosis."],
    ["Se añade un antibiótico que bloquea los ribosomas 70S. ¿Qué estructuras de una célula humana pueden verse afectadas?", ["Nuestros ribosomas citoplásmicos son 80S: no se afectan.", "Las mitocondrias tienen ribosomas 70S."], "Solo la síntesis de proteínas en las mitocondrias, lo que explica algunos efectos secundarios de estos antibióticos."],
    ["Una célula tiene RER muy desarrollado, muchas vesículas de Golgi y abundantes mitocondrias. ¿Qué función principal realiza?", ["RER y Golgi abundantes → fabrica y exporta proteínas.", "Muchas mitocondrias → gasta mucha energía."], "Es una célula secretora de proteínas, como las del páncreas exocrino o las células plasmáticas que producen anticuerpos."],
  ],
  errores: [
    "Pensar que las células procariotas no tienen ribosomas o membrana: tienen ambos; lo que no tienen es núcleo ni orgánulos membranosos.",
    "Creer que la membrana es rígida: es fluida y sus componentes se desplazan lateralmente.",
    "Confundir difusión facilitada con transporte activo: la facilitada usa proteínas pero va a favor de gradiente y no gasta ATP.",
    "Decir que las células vegetales no tienen mitocondrias: tienen mitocondrias y cloroplastos.",
    "Confundir los ribosomas con orgánulos membranosos: no tienen membrana.",
    "Pensar que el aparato de Golgi fabrica las proteínas: las fabrican los ribosomas; el Golgi las modifica y las distribuye.",
  ],
  ejercicios: {
    b: [
      ["Enuncia los postulados de la teoría celular.", "Todos los seres vivos están formados por células; la célula es la unidad anatómica y fisiológica; toda célula procede de otra; contiene la información hereditaria."],
      ["Cita tres diferencias entre células procariotas y eucariotas.", "Núcleo (no / sí); orgánulos membranosos (no / sí); ribosomas (70S / 80S); ADN (circular / lineal con histonas)."],
      ["Cita tres estructuras exclusivas de la célula vegetal y una de la animal.", "Vegetal: pared de celulosa, cloroplastos, gran vacuola. Animal: centriolos."],
      ["¿En qué consiste el modelo de mosaico fluido?", "La membrana es una bicapa lipídica fluida con proteínas integrales y periféricas insertadas como un mosaico."],
      ["¿Qué es el glucocáliz y qué función tiene?", "Capa de oligosacáridos de glucolípidos y glucoproteínas en la cara externa; reconocimiento celular, receptores, protección."],
      ["Diferencia transporte pasivo y activo.", "Pasivo: a favor de gradiente, sin gasto de energía. Activo: en contra de gradiente, con gasto de ATP."],
      ["¿Qué es la fagocitosis? Pon un ejemplo.", "Endocitosis de partículas grandes mediante pseudópodos; los macrófagos fagocitan bacterias."],
      ["Cita los tres tipos de filamentos del citoesqueleto.", "Microfilamentos (actina), filamentos intermedios y microtúbulos (tubulina)."],
      ["¿Qué función tienen los ribosomas?", "Síntesis de proteínas."],
      ["Diferencia retículo rugoso y liso.", "RER: con ribosomas, síntesis de proteínas. REL: sin ribosomas, síntesis de lípidos, desintoxicación."],
      ["¿Qué función tienen los lisosomas?", "Digestión intracelular con enzimas hidrolíticas (heterofagia y autofagia)."],
      ["¿Qué proceso se realiza en las mitocondrias y cuál en los cloroplastos?", "Mitocondrias: respiración celular. Cloroplastos: fotosíntesis."],
    ],
    m: [
      ["Compara el microscopio óptico y el electrónico.", "Óptico: luz y lentes, resolución ≈ 0,2 µm, permite ver células vivas. Electrónico: electrones, resolución ≈ 0,2 nm, muestra ultraestructura en células fijadas (MET) o superficies (MEB)."],
      ["Explica el funcionamiento de la bomba de sodio-potasio y su importancia.", "Saca 3 Na⁺ y mete 2 K⁺ por cada ATP, contra gradiente; mantiene el potencial de membrana, el impulso nervioso y el volumen celular."],
      ["Diferencia difusión simple y facilitada y pon ejemplos.", "Simple: por la bicapa, moléculas pequeñas apolares (O₂). Facilitada: con canales o permeasas, iones o moléculas polares (glucosa, agua por acuaporinas)."],
      ["Explica la endocitosis mediada por receptor con un ejemplo.", "La molécula se une a receptores específicos en zonas recubiertas de clatrina, que se invaginan y forman vesículas; ejemplo: captación de LDL con colesterol."],
      ["Describe la estructura y la función de la pared celular vegetal.", "Celulosa en matriz de hemicelulosa y pectina; lámina media, pared primaria y secundaria (con lignina); da forma, soporte, evita el estallido osmótico, protege."],
      ["Explica la estructura 9 + 2 de cilios y flagelos.", "Nueve pares de microtúbulos periféricos y dos centrales (axonema), anclados a un corpúsculo basal con estructura de centriolo (9 tripletes)."],
      ["Explica qué es el sistema de endomembranas y qué orgánulos lo forman.", "Conjunto de membranas comunicadas por vesículas: envoltura nuclear, RE, Golgi, lisosomas, vacuolas y membrana plasmática."],
      ["Describe la estructura del aparato de Golgi y sus funciones.", "Dictiosomas de sacos aplanados con cara cis y trans; modifica (glicosila), clasifica y empaqueta proteínas y lípidos; forma lisosomas y la pared vegetal."],
      ["Relaciona la estructura de la mitocondria con su función.", "Doble membrana: la interna con crestas que aumentan la superficie para la cadena respiratoria y la ATP sintasa; matriz con enzimas del ciclo de Krebs."],
      ["Describe la estructura del cloroplasto.", "Doble membrana, estroma (enzimas, ADN, ribosomas 70S), tilacoides apilados en grana con los pigmentos y la cadena de transporte."],
      ["¿Por qué las células del hígado tienen mucho retículo liso?", "Porque desintoxican fármacos y alcohol y sintetizan lípidos, funciones del REL."],
      ["Explica la función de los peroxisomas y de la catalasa.", "Oxidan ácidos grasos y tóxicos produciendo H₂O₂; la catalasa lo descompone en agua y oxígeno."],
    ],
    a: [
      ["(Tipo PAU) Expón las pruebas a favor de la teoría endosimbiótica.", "Mitocondrias y cloroplastos tienen doble membrana, ADN circular sin histonas, ribosomas 70S sensibles a antibióticos antibacterianos, se dividen por bipartición y sus genes se parecen a los de α-proteobacterias y cianobacterias."],
      ["(Tipo PAU) Se marca con un aminoácido radiactivo una célula del páncreas y se sigue la radiactividad. Indica el orden en que aparecerá en los orgánulos y explica por qué.", "RER (síntesis) → vesículas de transición → Golgi (cis a trans) → vesículas de secreción → exterior. Es la ruta de las proteínas de secreción."],
      ["(Tipo PAU) Explica por qué la membrana es una barrera selectiva y cómo pasan por ella el O₂, el agua, los iones K⁺ y una proteína.", "El interior hidrófobo de la bicapa solo deja pasar moléculas pequeñas apolares. O₂: difusión simple. Agua: acuaporinas (y algo por la bicapa). K⁺: canales o bomba. Proteína: endocitosis/exocitosis."],
      ["Se inhibe la producción de ATP en una neurona. ¿Qué ocurrirá con las concentraciones de Na⁺ y K⁺ a ambos lados de la membrana?", "La bomba Na⁺/K⁺ se detiene; los iones siguen difundiendo por sus canales y los gradientes se disipan: entra Na⁺ y sale K⁺ hasta igualarse; la neurona deja de transmitir impulsos."],
      ["Explica por qué un espermatozoide tiene muchas mitocondrias en la pieza intermedia y por qué las mitocondrias se heredan solo de la madre.", "El flagelo necesita mucho ATP para moverse. Al fecundar, las mitocondrias del espermatozoide no se transmiten (se degradan); solo pasan las del óvulo."],
      ["Una persona tiene una enfermedad en la que se acumulan glucolípidos dentro de sus lisosomas. Explica la causa probable.", "Falta, por mutación, una enzima hidrolítica lisosomal que degrada esos glucolípidos; al no degradarse, se acumulan (enfermedad de depósito lisosomal)."],
      ["Calcula la relación superficie/volumen de una célula esférica de 1 µm y de otra de 10 µm de radio. ¿Por qué las células no pueden ser muy grandes?", "S/V = 3/r: 3 µm⁻¹ y 0,3 µm⁻¹. Al crecer, la superficie aumenta menos que el volumen y no puede abastecer el intercambio de sustancias."],
      ["Explica por qué una célula vegetal no estalla en agua destilada y una animal sí, y qué estructura lo determina.", "La pared celular resiste la presión de turgencia; la célula animal, sin pared, se hincha hasta romperse."],
      ["La colchicina impide la formación de microtúbulos. ¿Qué procesos celulares quedarán bloqueados?", "La formación del huso mitótico (la célula no separa los cromosomas), el transporte de vesículas y el movimiento de cilios y flagelos."],
    ],
  },
  quiz: [
    ["El postulado «toda célula procede de otra célula» es de…", ["Hooke", "Virchow", "Schleiden", "Golgi"], 1, "Omnis cellula e cellula."],
    ["Las células procariotas tienen…", ["núcleo", "nucleoide", "mitocondrias", "Golgi"], 1, "ADN libre."],
    ["Los ribosomas eucariotas citoplásmicos son…", ["70S", "80S", "50S", "30S"], 1, "Mayores."],
    ["Es exclusivo de la célula vegetal…", ["mitocondria", "cloroplasto", "ribosoma", "lisosoma"], 1, "Fotosíntesis."],
    ["El modelo de mosaico fluido es de…", ["Watson y Crick", "Singer y Nicolson", "Margulis", "Golgi"], 1, "1972."],
    ["El glucocáliz está en la cara…", ["interna", "externa", "ambas", "nuclear"], 1, "Asimetría."],
    ["El O₂ atraviesa la membrana por…", ["difusión simple", "bomba", "fagocitosis", "exocitosis"], 0, "Pequeño y apolar."],
    ["La bomba de Na⁺/K⁺ saca…", ["2 Na⁺", "3 Na⁺", "3 K⁺", "1 Na⁺"], 1, "Y mete 2 K⁺."],
    ["Las acuaporinas transportan…", ["glucosa", "agua", "iones Na⁺", "proteínas"], 1, "Canales de agua."],
    ["La fagocitosis es un tipo de…", ["exocitosis", "endocitosis", "difusión", "ósmosis"], 1, "Partículas grandes."],
    ["Los plasmodesmos comunican…", ["células animales", "células vegetales", "bacterias", "orgánulos"], 1, "Atraviesan la pared."],
    ["Los microtúbulos están formados por…", ["actina", "tubulina", "queratina", "miosina"], 1, "25 nm."],
    ["Los cilios tienen una estructura…", ["9 + 2", "9 + 0", "3 + 3", "2 + 2"], 0, "Axonema."],
    ["El RER se encarga de…", ["síntesis de lípidos", "síntesis de proteínas", "digestión", "respiración"], 1, "Ribosomas adheridos."],
    ["El REL de los hepatocitos…", ["desintoxica", "fotosintetiza", "digiere bacterias", "forma ribosomas"], 0, "Fármacos y alcohol."],
    ["El Golgi…", ["fabrica ADN", "modifica y empaqueta proteínas", "produce ATP", "almacena almidón"], 1, "Correos celular."],
    ["Los lisosomas trabajan a pH…", ["2", "5", "7", "9"], 1, "Hidrolasas ácidas."],
    ["La catalasa está en los…", ["lisosomas", "peroxisomas", "ribosomas", "cloroplastos"], 1, "Descompone H₂O₂."],
    ["Las crestas son pliegues de…", ["la membrana externa mitocondrial", "la membrana interna mitocondrial", "los tilacoides", "el RE"], 1, "Más superficie."],
    ["Los grana son pilas de…", ["crestas", "tilacoides", "dictiosomas", "ribosomas"], 1, "Cloroplasto."],
  ],
  examen: [
    ["Un antibiótico contra ribosomas 70S puede afectar a…", ["las mitocondrias humanas", "el núcleo", "el Golgi", "los lisosomas"], 0, "Origen bacteriano."],
    ["La glucosa entra en el eritrocito por…", ["difusión facilitada", "transporte activo", "fagocitosis", "difusión simple"], 0, "Permeasa GLUT."],
    ["La teoría endosimbiótica la defendió…", ["Lynn Margulis", "Robert Hooke", "Ramón y Cajal", "Virchow"], 0, "1967."],
    ["Las uniones en hendidura permiten…", ["el paso de iones entre células", "sellar el epitelio", "anclar como remaches", "la fotosíntesis"], 0, "Comunicantes."],
    ["La lignina impregna la…", ["pared secundaria", "lámina media", "membrana plasmática", "matriz animal"], 0, "Madera."],
    ["Una célula plasmática productora de anticuerpos tiene mucho…", ["RER y Golgi", "REL", "cloroplastos", "peroxisomas"], 0, "Secreta proteínas."],
    ["La ATP sintasa mitocondrial está en…", ["la membrana interna", "la externa", "la matriz libre", "el citosol"], 0, "Crestas."],
    ["La autofagia la realizan los…", ["lisosomas", "ribosomas", "centriolos", "cloroplastos"], 0, "Reciclaje de orgánulos."],
  ],
  feynman: ["Qué diferencia una bacteria de una célula de tu piel", "Por qué la membrana es «un mosaico fluido»", "Cómo entra la glucosa en una célula y cómo sale el sodio", "Cómo sale una hormona de la célula que la fabrica", "Por qué las mitocondrias tienen su propio ADN", "Qué haría una célula sin lisosomas"],
  mapa: ["LA CÉLULA", [["Membrana", "mosaico fluido, transporte"], ["Citoplasma", "citosol, citoesqueleto"], ["Endomembranas", "RE, Golgi, lisosomas"], ["Energía", "mitocondrias, cloroplastos"]]],
  tarjetas: [
    ["Teoría celular", "Unidad anatómica, fisiológica y reproductora."],
    ["Procariota", "Sin núcleo; nucleoide; ribosomas 70S."],
    ["Mosaico fluido", "Bicapa lipídica fluida + proteínas."],
    ["Transporte pasivo", "A favor de gradiente: difusión simple y facilitada."],
    ["Bomba Na⁺/K⁺", "3 Na⁺ fuera, 2 K⁺ dentro, 1 ATP."],
    ["Endocitosis", "Fagocitosis, pinocitosis, mediada por receptor."],
    ["Citoesqueleto", "Actina, filamentos intermedios, microtúbulos."],
    ["RER", "Ribosomas; síntesis de proteínas de secreción."],
    ["REL", "Lípidos, desintoxicación, Ca²⁺."],
    ["Golgi", "Modifica, clasifica y empaqueta."],
    ["Mitocondria", "Doble membrana, crestas; respiración."],
    ["Endosimbiosis", "Mitocondrias y cloroplastos fueron bacterias."],
  ],
  glosario: [
    ["Nucleoide", "Región del citoplasma procariota donde está el ADN."],
    ["Plásmido", "Molécula pequeña de ADN circular extracromosómico de las bacterias."],
    ["Proteína integral", "Proteína insertada en la bicapa lipídica, a menudo transmembrana."],
    ["Glucocáliz", "Cubierta de glúcidos de la cara externa de la membrana."],
    ["Difusión facilitada", "Transporte pasivo a través de proteínas de canal o permeasas."],
    ["Transporte activo", "Transporte en contra de gradiente que consume energía."],
    ["Endocitosis", "Entrada de material en la célula mediante vesículas."],
    ["Exocitosis", "Salida de material por fusión de vesículas con la membrana."],
    ["Plasmodesmo", "Canal que comunica los citoplasmas de células vegetales vecinas."],
    ["Citosol", "Medio acuoso del citoplasma en el que están los orgánulos."],
    ["Centrosoma", "Centro organizador de microtúbulos; en animales, con dos centriolos."],
    ["Polisoma", "Conjunto de ribosomas que traducen el mismo ARNm."],
    ["Dictiosoma", "Pila de sacos aplanados del aparato de Golgi."],
    ["Autofagia", "Digestión de componentes de la propia célula en los lisosomas."],
    ["Tilacoide", "Saco membranoso del cloroplasto donde está la clorofila."],
    ["Endosimbiosis", "Origen de un orgánulo a partir de un organismo que vivía dentro de otra célula."],
  ],
  situacion: {
    titulo: "Atlas de la célula al microscopio",
    reto: "Vuestro equipo debe elaborar un atlas digital de células de distintos reinos, con fotografías propias al microscopio y su interpretación, y una maqueta comentada de la célula eucariota.",
    pasos: [
      "Preparad y teñid muestras de epidermis de cebolla, mucosa bucal, hoja de elodea, levadura y yogur (bacterias).",
      "Fotografiad las preparaciones con el móvil acoplado al ocular e indicad los aumentos.",
      "Identificad en cada imagen las estructuras visibles y clasificad la célula (procariota, animal, vegetal, hongo).",
      "Buscad imágenes de microscopía electrónica de los orgánulos que no se ven al óptico.",
      "Construid una maqueta de célula eucariota y explicad la función de cada orgánulo como si fuera una ciudad.",
    ],
    producto: "Un atlas digital con fotos comentadas y una maqueta de célula.",
    evaluacion: ["Las preparaciones son correctas y están bien fotografiadas.", "Las estructuras se identifican sin errores.", "Se distinguen claramente procariotas y eucariotas, animales y vegetales.", "La maqueta relaciona estructura y función de forma rigurosa."],
  },
  familias: [
    "Mirad con una lupa o el móvil la piel fina de una cebolla: ¿se ven las celdillas?",
    "Ved juntos imágenes de microscopio electrónico de bacterias y de células humanas y comparadlas.",
    "Comentad por qué los antibióticos no sirven contra los virus y sí contra las bacterias.",
    "Pensad entre todos a qué parte de una ciudad se parecería cada orgánulo.",
  ],
  saberes: "bloque «Biología celular»: la teoría celular y métodos de estudio; células procariotas y eucariotas, animales y vegetales; la membrana plasmática (modelo de mosaico fluido) y el transporte a través de ella; pared celular y matriz extracelular; citosol y citoesqueleto; orgánulos: ribosomas, sistema de endomembranas, lisosomas, vacuolas, peroxisomas, mitocondrias y cloroplastos; teoría endosimbiótica.",
  ideas: [
    "Observación al microscopio de células vegetales, animales, de levadura y de bacterias del yogur.",
    "Práctica de plasmólisis y turgencia para relacionar la membrana con la ósmosis.",
    "Fraccionamiento celular simulado o visita virtual a un laboratorio de microscopía electrónica.",
    "Juego de rol en el que cada alumno es un orgánulo y se sigue la ruta de una proteína de secreción.",
  ],
  fuentes: [
    { t: "Cell Image Library", url: "http://www.cellimagelibrary.org/" },
  ],
});
