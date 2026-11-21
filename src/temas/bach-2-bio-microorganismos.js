// Biología 2º Bachillerato · Microorganismos y biotecnología (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, arbol } = require("./_bach2-bio");

// Bacteria.
const bacteriaSVG = marco("Estructura de una bacteria: pared celular y cápsula externas, membrana plasmática, citoplasma con ribosomas 70S, nucleoide con el cromosoma circular, plásmidos, pili y flagelo", `
  <rect x="34" y="50" width="176" height="84" rx="42" fill="var(--sun)" fill-opacity=".12" stroke="var(--muted)" stroke-width="6" stroke-opacity=".35"/>
  <rect x="40" y="56" width="164" height="72" rx="36" fill="var(--sun)" fill-opacity=".18" stroke="#b45309" stroke-width="2.4"/>
  <path d="M90 82 q 14 -16 30 -2 t 30 4 q -6 18 -26 12 t -34 -14" fill="none" stroke="var(--pen)" stroke-width="2.4"/>
  <circle cx="176" cy="104" r="8" fill="none" stroke="var(--red)" stroke-width="2"/>
  ${[[70, 100], [80, 112], [150, 70], [160, 82], [110, 112], [64, 80]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.4" fill="var(--ink)"/>`).join("")}
  <path d="M210 92 q 14 -10 22 4 t 22 0" fill="none" stroke="var(--ink)" stroke-width="2"/>
  ${[[60, 50, 54, 36], [120, 50, 120, 36], [176, 52, 186, 38]].map(([a, b, c, d]) => `<path d="M${a} ${b} L ${c} ${d}" stroke="var(--muted)" stroke-width="1.5"/>`).join("")}
  ${T(120, 24, "pili", { fs: 9.5, b: true, c: "var(--muted)" })}${T(122, 74, "nucleoide", { fs: 9.5, b: true, c: "var(--pen)" })}${T(226, 140, "plásmido", { fs: 9.5, b: true, c: "var(--red)" })}${T(232, 112, "flagelo", { fs: 9.5, b: true })}
  ${T(72, 156, "pared + cápsula", { fs: 9.5, b: true, c: "#b45309" })}${T(176, 156, "ribosomas 70S", { fs: 9.5, b: true })}`);

// Virus y ciclo lítico.
const virusSVG = marco("Estructura de un bacteriófago y su ciclo lítico: fijación, inyección del ácido nucleico, síntesis de componentes, ensamblaje y lisis de la bacteria con liberación de nuevos virus", `
  <path d="M40 18 l 18 10 v 20 l -18 10 l -18 -10 v -20 z" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/>
  <path d="M36 32 q 6 -6 8 2 t 6 4" fill="none" stroke="var(--red)" stroke-width="2"/>
  <rect x="36" y="58" width="8" height="34" fill="var(--pen)" fill-opacity=".5"/><path d="M36 92 L 22 110 M44 92 L 58 110 M38 92 L 30 112 M42 92 L 50 112" stroke="var(--pen)" stroke-width="1.6"/>
  ${T(78, 24, "cápside", { fs: 9, b: true, c: "var(--pen)", a: "start" })}${T(78, 40, "ADN", { fs: 9, b: true, c: "var(--red)", a: "start" })}${T(78, 76, "cola", { fs: 9, b: true, a: "start" })}${T(78, 104, "fibras", { fs: 9, b: true, a: "start" })}
  ${["1 Fijación", "2 Penetración", "3 Síntesis", "4 Ensamblaje", "5 Lisis"].map((t, i) => `<rect x="148" y="${14 + i * 32}" width="104" height="24" rx="6" fill="var(--red)" fill-opacity="${0.12 + i * 0.12}"/>${T(200, 30 + i * 32, t, { fs: 10, b: true })}`).join("")}
  ${T(60, 150, "bacteriófago T4", { fs: 10, b: true, c: "var(--muted)" })}`);

// Ingeniería genética.
const recSVG = marco("Obtención de ADN recombinante: se corta el gen de interés y un plásmido con la misma enzima de restricción, se unen con la ligasa y el plásmido recombinante se introduce en una bacteria que se clona", `
  <rect x="8" y="30" width="80" height="12" fill="var(--pen)"/><rect x="34" y="30" width="28" height="12" fill="var(--red)"/>${T(48, 22, "gen de interés", { fs: 9.5, b: true, c: "var(--red)" })}
  <circle cx="160" cy="44" r="22" fill="none" stroke="var(--leaf)" stroke-width="5"/>${T(160, 14, "plásmido", { fs: 9.5, b: true, c: "var(--leaf)" })}
  <path d="M48 46 V 70 M160 70 V 84" stroke="var(--muted)" stroke-width="1.5"/>${T(104, 80, "enzima de restricción", { fs: 9.5, b: true })}
  <circle cx="104" cy="122" r="26" fill="none" stroke="var(--leaf)" stroke-width="5"/><path d="M84 106 A 26 26 0 0 1 112 96" fill="none" stroke="var(--red)" stroke-width="6"/>
  ${T(104, 166, "ADN recombinante (ligasa)", { fs: 9.5, b: true, c: "var(--pen)" })}
  <path d="M136 122 H 168" stroke="var(--ink)" stroke-width="2"/><path d="M164 117 L 171 122 L 164 127" fill="var(--ink)"/>
  <rect x="176" y="104" width="70" height="36" rx="18" fill="var(--sun)" fill-opacity=".3" stroke="#b45309"/><circle cx="210" cy="122" r="8" fill="none" stroke="var(--red)" stroke-width="2"/>${T(211, 156, "bacteria", { fs: 9.5, b: true, c: "#b45309" })}`);

module.exports = tema({
  titulo: "Microorganismos y biotecnología",
  minutos: 130,
  secciones: [4, 4, 4],
  objetivos: [
    "Definir microorganismo y clasificar los principales grupos según su organización celular",
    "Describir la estructura, la nutrición y la reproducción de las bacterias",
    "Describir la estructura de los virus y sus ciclos de multiplicación, y conocer otras formas acelulares",
    "Analizar el papel de los microorganismos en los ciclos biogeoquímicos y como agentes de enfermedades",
    "Explicar las aplicaciones de los microorganismos en la industria alimentaria, la farmacia y el medio ambiente",
    "Describir las técnicas de ingeniería genética (ADN recombinante, PCR, CRISPR) y valorar sus aplicaciones y riesgos",
  ],
  claves: ["microorganismo", "procariota", "bacteria", "arquea", "pared celular", "Gram", "plásmido", "conjugación", "virus", "cápside", "ciclo lítico", "ciclo lisogénico", "prion", "biotecnología", "ADN recombinante", "PCR", "CRISPR", "transgénico"],
  pregunta: {
    texto: "En tu cuerpo hay tantas bacterias como células humanas. ¿Son un peligro o una ayuda?",
    respuesta: "Sobre todo una ayuda. Los billones de bacterias de tu intestino, la <mark>microbiota</mark>, digieren fibras que tú no puedes digerir, fabrican vitaminas como la K y la B₁₂, entrenan tu sistema inmunitario y ocupan el espacio que podrían colonizar microorganismos peligrosos. Solo una pequeña parte de las bacterias causa enfermedades. Los antibióticos pueden alterar este equilibrio, y por eso a veces producen diarreas. Cada vez se descubren más relaciones entre la microbiota y la salud, desde la obesidad hasta el estado de ánimo.",
  },
  lectura: {
    titulo: "El moho que cambió la medicina",
    html: `<p>En septiembre de 1928, el bacteriólogo escocés Alexander Fleming volvió de vacaciones a su desordenado laboratorio del hospital St. Mary de Londres. Antes de irse había dejado unas placas con cultivos de estafilococos, y una de ellas se había contaminado con un moho. Fleming se dio cuenta de algo curioso: alrededor del moho, las bacterias habían desaparecido. El hongo, <i>Penicillium notatum</i>, producía una sustancia capaz de matarlas, a la que llamó penicilina. Publicó su descubrimiento, pero no consiguió purificarla en cantidad suficiente y el hallazgo quedó casi olvidado.</p><p>Diez años después, Howard Florey y Ernst Chain, en Oxford, lograron purificar la penicilina y demostraron que curaba infecciones en ratones y en personas. Durante la Segunda Guerra Mundial se desarrolló su producción industrial en grandes tanques de fermentación, con una cepa de moho encontrada en un melón podrido, y salvó miles de vidas. Los tres recibieron el Nobel en 1945. Fleming advirtió en su discurso que el mal uso de la penicilina haría aparecer bacterias resistentes, y así ha ocurrido. En este tema estudiarás el mundo de los microorganismos y cómo la biotecnología los usa para producir alimentos, medicamentos y mucho más.</p>`,
  },
  bloques: [
    { h: "Los microorganismos y su diversidad", p: [
      "Los <mark>microorganismos</mark> son seres vivos de tamaño microscópico, que solo pueden verse con el microscopio. No forman un grupo natural, sino que incluyen organismos muy distintos, unicelulares o pluricelulares sencillos, que comparten su pequeño tamaño. Se clasifican según su organización. Los <b>procariotas</b> son las <b>bacterias</b> y las <b>arqueas</b>; estas últimas, aunque parecen bacterias, tienen una bioquímica distinta (otra membrana, otra pared, ARN polimerasas parecidas a las eucariotas) y muchas viven en ambientes extremos, como fuentes termales, salinas o el intestino de los rumiantes, donde producen metano.",
      "Los microorganismos <b>eucariotas</b> incluyen los <b>protozoos</b> (heterótrofos, como las amebas, los paramecios o el plasmodio de la malaria), las <b>algas microscópicas</b> (como las diatomeas, que forman buena parte del fitoplancton) y los <b>hongos</b> microscópicos (levaduras y mohos). Por último, hay formas <b>acelulares</b>, que no se consideran seres vivos en sentido estricto porque no tienen metabolismo propio: los <b>virus</b>, los <b>viroides</b> y los <b>priones</b>. La ciencia que estudia los microorganismos es la <b>microbiología</b>, nacida con las observaciones de Leeuwenhoek en el siglo XVII y desarrollada por Pasteur y Koch en el XIX.",
    ], svg: arbol("Tipos de microorganismos", "MICROBIOS", [["Procariotas", "bacterias, arqueas"], ["Eucariotas", "protozoos, algas, hongos"], ["Acelulares", "virus, priones"]], "var(--pen)"), v: ["mic-c", "Introducción a la microbiología"] },
    { h: "Estructura de las bacterias", p: [
      "Las <mark>bacterias</mark> son células procariotas de 1 a 10 µm, sin núcleo ni orgánulos membranosos. Por su forma se distinguen los <b>cocos</b> (esféricos, que pueden agruparse en parejas, cadenas o racimos), los <b>bacilos</b> (bastones), los <b>espirilos</b> (espirales rígidas) y los <b>vibrios</b> (en forma de coma). Por fuera de la membrana plasmática tienen una <b>pared celular</b> rígida de <b>peptidoglucano</b> o mureína, que les da forma y las protege de estallar por ósmosis. Muchas tienen además una <b>cápsula</b> de polisacáridos, que las protege de la desecación y de los glóbulos blancos.",
      "Según su pared, las bacterias se distinguen con la <b>tinción de Gram</b>. Las <b>Gram positivas</b> tienen una pared gruesa de peptidoglucano y se tiñen de violeta. Las <b>Gram negativas</b> tienen una pared fina y, por fuera, una membrana externa de lipopolisacáridos, y se tiñen de rosa. En el citoplasma hay ribosomas 70S, inclusiones de reserva y el <b>nucleoide</b>, con un cromosoma circular de ADN. Muchas tienen además <b>plásmidos</b>, pequeñas moléculas circulares de ADN con genes accesorios, como los de resistencia a antibióticos. En la superficie pueden tener <b>flagelos</b> para moverse, <b>fimbrias</b> para adherirse y <b>pili sexuales</b> para intercambiar ADN. Algunas, como las del tétanos, forman <b>endosporas</b> resistentes al calor y la sequía.",
    ], svg: bacteriaSVG, v: ["mic-b", "Estructura bacteriana"] },
    { h: "Nutrición, reproducción e intercambio genético", p: [
      "Las bacterias presentan todos los tipos de nutrición. Las hay <b>fotoautótrofas</b>, como las cianobacterias; <b>quimioautótrofas</b>, como las nitrificantes; y <b>heterótrofas</b>, la mayoría, que pueden ser <b>saprófitas</b> (se alimentan de materia orgánica muerta), <b>simbiontes</b> (viven asociadas a otros organismos con beneficio mutuo, como las del género <i>Rhizobium</i> en las raíces de las leguminosas) o <b>parásitas</b> (causan enfermedades). Según su relación con el oxígeno, pueden ser aerobias, anaerobias estrictas o facultativas.",
      "Las bacterias se reproducen asexualmente por <b>bipartición</b>: el cromosoma se replica y la célula se divide en dos. En condiciones favorables lo hacen muy deprisa: <i>E. coli</i> se divide cada 20 minutos, de modo que una sola bacteria podría originar millones en pocas horas. No tienen reproducción sexual, pero intercambian genes por tres mecanismos de <b>transferencia horizontal</b>. En la <b>transformación</b>, una bacteria capta fragmentos de ADN libre del medio. En la <b>conjugación</b>, una bacteria donadora transfiere un plásmido a otra a través de un pili sexual. En la <b>transducción</b>, un virus lleva genes de una bacteria a otra. Estos mecanismos explican la rápida difusión de la resistencia a los antibióticos.",
    ], svg: L6.tabla("Intercambio genético en bacterias", ["Mecanismo", "Cómo", "Vehículo"], [["Transformación", "capta ADN libre", "medio"], ["Conjugación", "contacto", "pili sexual"], ["Transducción", "por infección", "virus"]]) },
    { h: "Los virus", p: [
      "Los <mark>virus</mark> son partículas acelulares, mucho más pequeñas que las bacterias (de 20 a 300 nm), que solo pueden multiplicarse dentro de una célula: son <b>parásitos obligados</b>. Fuera de ella, la partícula vírica completa, o <b>virión</b>, es inerte. Está formada por un <b>ácido nucleico</b>, que puede ser ADN o ARN, de una o de dos hebras, pero nunca ambos, envuelto por una cubierta de proteínas, la <b>cápside</b>, formada por unidades llamadas capsómeros. Algunos virus, como el de la gripe, el VIH o el coronavirus, tienen además una <b>envoltura</b> lipídica, procedente de la membrana de la célula infectada, con glucoproteínas que reconocen a la célula hospedadora.",
      "Por la forma de la cápside, los virus pueden ser <b>helicoidales</b> (como el del mosaico del tabaco), <b>icosaédricos</b> (como el de la polio o el adenovirus) o <b>complejos</b>, como los <b>bacteriófagos</b> o fagos, que infectan bacterias y tienen una cabeza icosaédrica y una cola con fibras. Cada virus infecta solo determinados tipos de células, a las que reconoce mediante receptores de su membrana. Hay otras entidades aún más simples: los <b>viroides</b>, pequeñas moléculas de ARN circular sin cápside que causan enfermedades en plantas, y los <b>priones</b>, proteínas mal plegadas que obligan a las proteínas normales a plegarse mal y causan enfermedades neurodegenerativas, como la de las «vacas locas».",
    ], svg: L6.tabla("Formas acelulares", ["Tipo", "Composición", "Ejemplo"], [["Virus", "ácido nucleico + cápside", "gripe, VIH"], ["Viroide", "ARN circular", "plantas"], ["Prion", "proteína mal plegada", "vacas locas"]]) },
    { h: "Ciclos de multiplicación de los virus", p: [
      "El <mark>ciclo lítico</mark> es el ciclo de multiplicación más sencillo, bien estudiado en los bacteriófagos. Tiene cinco fases. En la <b>fijación</b>, el virus se une a receptores específicos de la superficie de la bacteria. En la <b>penetración</b>, inyecta su ácido nucleico, y la cápside queda fuera. En la <b>síntesis</b> o eclipse, el ácido nucleico vírico toma el control de la célula: usa sus ribosomas, nucleótidos, aminoácidos y energía para replicar el genoma vírico y fabricar proteínas víricas. En el <b>ensamblaje</b>, los componentes se unen formando nuevos virus. En la <b>liberación</b>, una enzima vírica rompe la pared (<b>lisis</b>) y salen cientos de virus nuevos, que infectan otras células.",
      "En el <mark>ciclo lisogénico</mark>, propio de los fagos «atemperados», el ADN del virus no se multiplica inmediatamente, sino que se integra en el cromosoma de la bacteria y se replica con él cada vez que la bacteria se divide: se llama <b>profago</b>. Puede permanecer así muchas generaciones hasta que un estímulo, como la radiación ultravioleta, lo activa e inicia un ciclo lítico. Los virus animales siguen ciclos parecidos, pero entran en la célula por endocitosis o por fusión de la envoltura. Los <b>retrovirus</b>, como el VIH, tienen ARN y una transcriptasa inversa que lo copia en ADN, que se integra en el genoma de la célula, como un provirus.",
    ], svg: virusSVG, v: ["mic-a", "Ciclo lítico de un virus"] },
    { h: "Microorganismos en los ciclos biogeoquímicos", p: [
      "Los microorganismos son imprescindibles para el funcionamiento de la biosfera, porque reciclan la materia. Como <b>descomponedores</b>, bacterias y hongos transforman la materia orgánica muerta en sustancias inorgánicas que vuelven a usar los productores. En el <b>ciclo del carbono</b>, los fotosintéticos (cianobacterias, algas) fijan CO₂, y los descomponedores lo devuelven a la atmósfera al respirar o fermentar; las arqueas metanógenas producen metano en ambientes sin oxígeno, como los arrozales o el estómago de las vacas.",
      "En el <b>ciclo del nitrógeno</b> intervienen solo microorganismos en casi todas sus etapas. Las <b>bacterias fijadoras</b>, libres en el suelo (<i>Azotobacter</i>) o en simbiosis con las raíces de las leguminosas (<i>Rhizobium</i>), transforman el nitrógeno atmosférico (N₂), que las plantas no pueden usar, en amoníaco. Los descomponedores liberan amoníaco de las proteínas muertas (<b>amonificación</b>). Las <b>bacterias nitrificantes</b> oxidan el amoníaco a nitratos, la forma que absorben las plantas. Las <b>bacterias desnitrificantes</b> devuelven el nitrógeno a la atmósfera. En el <b>ciclo del azufre</b>, unas bacterias oxidan el H₂S a sulfatos y otras reducen los sulfatos en ambientes anaerobios.",
    ], svg: L6.ciclo("Ciclo del nitrógeno", "N", ["N₂ atmosférico", "Fijación (Rhizobium)", "Amonificación", "Nitrificación", "Desnitrificación"], "var(--leaf)") },
    { h: "Microorganismos y enfermedades", p: [
      "Algunos microorganismos son <b>patógenos</b>: causan enfermedades infecciosas. Su capacidad de producir enfermedad se llama <b>patogenicidad</b>, y su grado, <b>virulencia</b>. Las bacterias causan daño invadiendo los tejidos y produciendo <b>toxinas</b>: las exotoxinas, que segregan, son muy potentes (como la del tétanos o la del botulismo), y las endotoxinas forman parte de la pared de las Gram negativas. Son enfermedades bacterianas la tuberculosis, el cólera, la salmonelosis, la meningitis o la sífilis. Los virus causan la gripe, el resfriado, el sarampión, la COVID-19, el sida o la hepatitis; los protozoos, la malaria o la enfermedad del sueño; y los hongos, micosis como el pie de atleta.",
      "Las enfermedades infecciosas se transmiten por el aire (gotitas al toser), por el agua y los alimentos contaminados, por contacto directo, por vía sexual, por la sangre o a través de <b>vectores</b>, como los mosquitos. Una enfermedad es <b>endémica</b> si está siempre presente en una zona, <b>epidémica</b> si afecta a muchas personas en poco tiempo, y <b>pandémica</b> si se extiende por todo el mundo. Para combatirlas se usan medidas de higiene y saneamiento, <b>vacunas</b> y fármacos: los <b>antibióticos</b> actúan solo contra las bacterias, bloqueando su pared, sus ribosomas o su ADN, y no sirven contra los virus. Su abuso ha seleccionado <b>bacterias resistentes</b>, uno de los grandes problemas de salud del siglo XXI.",
    ], svg: L6.tabla("Agentes infecciosos", ["Agente", "Enfermedades", "Tratamiento"], [["Bacterias", "tuberculosis, cólera", "antibióticos"], ["Virus", "gripe, sida, COVID-19", "antivirales, vacunas"], ["Protozoos", "malaria", "antiparasitarios"], ["Hongos", "micosis", "antifúngicos"]]) },
    { h: "Biotecnología tradicional: alimentos y fármacos", p: [
      "La <mark>biotecnología</mark> es el uso de seres vivos o de sus componentes para obtener productos o servicios útiles. Aunque la palabra es reciente, el ser humano la practica desde hace miles de años, sin saberlo, en la <b>industria alimentaria</b>. Las <b>fermentaciones alcohólicas</b> de las levaduras producen pan, vino, cerveza y sidra. Las <b>fermentaciones lácticas</b> de las bacterias lácticas producen yogur, queso, kéfir, chucrut y embutidos curados. Las bacterias acéticas transforman el vino en vinagre, y los mohos maduran quesos como el roquefort o el camembert, o fermentan la soja para hacer salsa de soja.",
      "En la <b>industria farmacéutica</b>, los microorganismos producen <b>antibióticos</b>, como la penicilina (de un hongo, <i>Penicillium</i>) o la estreptomicina (de una bacteria, <i>Streptomyces</i>); <b>vacunas</b>, con microorganismos atenuados o inactivados; vitaminas, como la B₁₂; y hormonas esteroideas. En otras industrias, los microorganismos fabrican enzimas para detergentes, aminoácidos como el glutamato, ácido cítrico para refrescos, y <b>biocombustibles</b>, como el bioetanol a partir de caña o maíz y el biogás a partir de residuos. Estos procesos se realizan en grandes depósitos controlados, los <b>fermentadores</b> o biorreactores.",
    ], svg: L5.compara("Biotecnología con microorganismos", ["Alimentos", ["pan, vino, cerveza", "yogur, queso", "vinagre", "salsa de soja"]], ["Industria", ["antibióticos", "vacunas, vitaminas", "enzimas", "biocombustibles"]], "#b45309", "var(--pen)") },
    { h: "Biotecnología ambiental", p: [
      "Los microorganismos también se usan para proteger el <b>medio ambiente</b>. En las <b>depuradoras de aguas residuales</b>, después de eliminar los sólidos, el agua pasa a un tratamiento biológico en el que bacterias aerobias degradan la materia orgánica disuelta (fangos activados); los lodos resultantes se digieren con bacterias anaerobias, que producen biogás. En el tratamiento de <b>residuos sólidos</b>, el <b>compostaje</b> usa microorganismos para transformar los restos orgánicos en abono.",
      "La <mark>biorremediación</mark> consiste en usar microorganismos para eliminar contaminantes del suelo o del agua. Algunas bacterias degradan los hidrocarburos de las mareas negras, otras acumulan metales pesados, y hay incluso bacterias capaces de digerir algunos plásticos. Los microorganismos se usan también en la <b>minería</b> (biolixiviación, para extraer cobre u oro de minerales pobres), en la agricultura como <b>biofertilizantes</b> (bacterias fijadoras de nitrógeno) y como <b>bioinsecticidas</b>, como <i>Bacillus thuringiensis</i>, que produce una toxina que mata las larvas de algunos insectos sin dañar a otros animales.",
    ], svg: L6.radial("Biotecnología ambiental", "AMBIENTE", ["Depuradoras", "Compost", "Biorremediación", "Biogás", "Biofertilizantes", "Bioinsecticidas"], "var(--leaf)") },
    { h: "Ingeniería genética: el ADN recombinante", p: [
      "La <mark>ingeniería genética</mark> es el conjunto de técnicas que permiten manipular el ADN: aislar genes, modificarlos y transferirlos de un organismo a otro. Su herramienta clave son las <b>enzimas de restricción</b>, que las bacterias usan para defenderse de los virus y que cortan el ADN en secuencias concretas, a menudo dejando <b>extremos cohesivos</b>, pequeños fragmentos de una hebra que pueden emparejarse con otros cortados por la misma enzima. Las <b>ADN ligasas</b> unen los fragmentos. Así se obtiene <b>ADN recombinante</b>, con fragmentos de orígenes distintos.",
      "Para <b>clonar</b> un gen, es decir, obtener muchas copias, se inserta en un <b>vector</b>, normalmente un plásmido bacteriano o un virus. El plásmido recombinante se introduce en una bacteria, que al multiplicarse copia el gen y, si se dan las condiciones adecuadas, lo expresa y fabrica la proteína. Como el código genético es universal, una bacteria puede fabricar una proteína humana. Para seleccionar las bacterias que han captado el plásmido se usan genes marcadores, por ejemplo de resistencia a un antibiótico. Para genes eucariotas se usa el <b>ADN complementario</b>, obtenido copiando el ARNm maduro con la transcriptasa inversa, porque las bacterias no pueden eliminar intrones. La primera proteína humana fabricada así fue la <b>insulina</b>, en 1978.",
    ], svg: recSVG, v: ["mic-d", "Ingeniería genética"] },
    { h: "PCR, secuenciación y CRISPR", p: [
      "La <mark>PCR</mark> o reacción en cadena de la polimerasa, inventada por Kary Mullis en 1983, permite obtener millones de copias de un fragmento de ADN en pocas horas, sin necesidad de células. Se mezclan el ADN, dos cebadores que delimitan el fragmento, nucleótidos y una ADN polimerasa resistente al calor, obtenida de una bacteria de aguas termales. Se repiten ciclos de tres pasos: <b>desnaturalización</b> a 95 °C (se separan las hebras), <b>hibridación</b> a unos 55 °C (se unen los cebadores) y <b>extensión</b> a 72 °C (la polimerasa copia). En cada ciclo se duplica el número de copias: tras 30 ciclos hay unos mil millones. Se usa en diagnóstico (como las pruebas de la COVID-19), en medicina forense y en investigación.",
      "La <b>secuenciación</b> permite conocer el orden de los nucleótidos de un ADN; en 2003 se completó la secuencia del genoma humano, y hoy secuenciar un genoma cuesta unos cientos de euros. Las <b>huellas genéticas</b>, que comparan regiones muy variables del ADN, permiten identificar personas en investigaciones policiales y pruebas de paternidad. La técnica más revolucionaria de los últimos años es <mark>CRISPR-Cas9</mark>, desarrollada por Emmanuelle Charpentier y Jennifer Doudna a partir de un sistema de defensa de las bacterias descrito por el español Francis Mojica. Un ARN guía dirige a la enzima Cas9 hasta una secuencia exacta del genoma, donde corta el ADN, lo que permite eliminar, corregir o insertar genes con gran precisión.",
    ], extra: `<div class="formula"><span>copias tras n ciclos de PCR = 2ⁿ (30 ciclos ≈ 10⁹)</span></div>`, svg: L5.pasos("Un ciclo de PCR", ["Desnaturalización (95 °C): se separan las hebras", "Hibridación (55 °C): se unen los cebadores", "Extensión (72 °C): la polimerasa copia", "Se repite: 2ⁿ copias"], "var(--red)"), v: ["mic-f", "PCR"] },
    { h: "Aplicaciones y bioética de la ingeniería genética", p: [
      "La ingeniería genética tiene aplicaciones en muchos campos. En <b>medicina</b>, se fabrican proteínas humanas por bacterias o levaduras transgénicas: insulina, hormona del crecimiento, factores de coagulación, interferón o vacunas como la de la hepatitis B; se diagnostican enfermedades genéticas e infecciones; y la <b>terapia génica</b> introduce genes sanos en las células de pacientes con enfermedades hereditarias, como algunas inmunodeficiencias o ciertas cegueras. Las vacunas de ARN mensajero de la COVID-19 son también un producto de esta tecnología. En <b>agricultura</b>, los <b>organismos modificados genéticamente</b> (OMG) o transgénicos incluyen plantas resistentes a plagas (maíz Bt), a herbicidas o a la sequía, o más nutritivas, como el arroz dorado, enriquecido en provitamina A.",
      "Estas técnicas plantean también <b>cuestiones éticas, sociales y ambientales</b>. Se debate sobre la seguridad de los transgénicos para la salud y el medio ambiente (posible paso de genes a especies silvestres, pérdida de biodiversidad), sobre la dependencia de los agricultores respecto a las empresas que patentan semillas, y sobre la privacidad de los datos genéticos. La edición genética de embriones humanos, que podría transmitirse a las generaciones futuras, está prohibida en la mayoría de países; en 2018, el nacimiento en China de dos niñas con el genoma editado provocó una condena internacional. La <b>bioética</b> busca que los avances respeten la dignidad humana, la seguridad y la justicia, y en Europa se regulan por normas como el Convenio de Oviedo.",
    ], svg: L5.compara("Ingeniería genética", ["Beneficios", ["insulina, vacunas", "terapia génica", "cultivos resistentes", "diagnóstico"]], ["Riesgos y dudas", ["impacto ambiental", "patentes", "privacidad genética", "edición de embriones"]], "var(--leaf)", "var(--red)"), v: ["mic-e", "Edición genética con CRISPR"] },
  ],
  figura: { titulo: "Microorganismos y biotecnología", items: [["Bacterias", "procariotas", "pared, plásmidos", "bipartición"], ["Virus", "acelulares", "cápside + ácido nucleico", "lítico / lisogénico"], ["Biotecnología", "alimentos, fármacos", "ambiente", "fermentadores"], ["Ingeniería genética", "ADN recombinante", "PCR, CRISPR", "transgénicos"]] },
  video: ["mic-d", "Ingeniería genética"],
  ejemplos: [
    ["Una bacteria se divide cada 20 minutos. ¿Cuántas habrá a partir de una tras 4 horas en condiciones ideales?", ["4 h = 240 min → 12 divisiones.", "N = 2¹²."], "4096 bacterias."],
    ["¿Cuántas copias de un fragmento de ADN se obtienen tras 20 ciclos de PCR a partir de una molécula?", ["Cada ciclo duplica.", "2²⁰ = 1 048 576."], "Más de un millón de copias."],
    ["Una enzima de restricción corta en G↓AATTC. ¿Qué extremos deja y por qué es útil?", ["Corta entre G y A en las dos hebras.", "Quedan extremos 5'-AATT de una hebra."], "Extremos cohesivos AATT, que se emparejan con cualquier fragmento cortado por la misma enzima."],
    ["¿Por qué para producir insulina humana en bacterias se usa ADNc y no el gen de una célula humana?", ["El gen humano tiene intrones.", "Las bacterias no hacen splicing.", "El ADNc se obtiene del ARNm maduro con transcriptasa inversa."], "Porque el ADNc no tiene intrones y la bacteria puede expresarlo directamente."],
    ["Explica por qué un antibiótico que bloquea la síntesis de peptidoglucano no afecta a nuestras células ni a los virus.", ["El peptidoglucano solo existe en la pared bacteriana.", "Nuestras células no tienen pared y los virus no tienen metabolismo propio."], "Su diana es exclusiva de las bacterias."],
    ["Un fago infecta una bacteria y esta no se lisa, pero años después de cultivo, al irradiarla con UV, se lisa. Explica.", ["El fago siguió un ciclo lisogénico: profago integrado.", "La UV indujo el paso al ciclo lítico."], "Ciclo lisogénico seguido de inducción del ciclo lítico."],
  ],
  errores: [
    "Pensar que los antibióticos curan la gripe o el resfriado: son virus, y los antibióticos solo actúan contra bacterias.",
    "Creer que todos los microorganismos son perjudiciales: la mayoría son inofensivos o beneficiosos.",
    "Confundir virus y bacterias: los virus son acelulares y solo se multiplican dentro de células.",
    "Pensar que las bacterias se vuelven resistentes porque «se acostumbran»: se seleccionan las que ya tenían o adquieren genes de resistencia.",
    "Creer que un transgénico es cualquier alimento procesado: es un organismo con genes de otra especie introducidos por ingeniería genética.",
    "Pensar que la PCR produce proteínas: solo copia fragmentos de ADN.",
  ],
  ejercicios: {
    b: [
      ["Clasifica los microorganismos según su organización.", "Procariotas (bacterias, arqueas), eucariotas (protozoos, algas, hongos) y acelulares (virus, viroides, priones)."],
      ["Dibuja una bacteria e indica sus estructuras.", "Cápsula, pared, membrana, citoplasma, ribosomas 70S, nucleoide, plásmidos, flagelo, pili."],
      ["Diferencia bacterias Gram positivas y Gram negativas.", "Gram +: pared gruesa de peptidoglucano, violeta. Gram −: pared fina con membrana externa, rosa."],
      ["¿Qué son los plásmidos?", "Pequeñas moléculas circulares de ADN con genes accesorios, como los de resistencia."],
      ["¿Cómo se reproducen las bacterias?", "Asexualmente por bipartición."],
      ["Describe la estructura de un virus.", "Ácido nucleico (ADN o ARN) dentro de una cápside proteica; a veces con envoltura lipídica."],
      ["¿Qué es un prion?", "Proteína mal plegada infecciosa que induce el mal plegamiento de otras."],
      ["Indica las fases del ciclo lítico.", "Fijación, penetración, síntesis, ensamblaje y liberación (lisis)."],
      ["Cita tres alimentos obtenidos por fermentación.", "Pan, yogur y vino (también queso, cerveza, vinagre)."],
      ["¿Qué es la biorremediación?", "Uso de microorganismos para eliminar contaminantes del ambiente."],
      ["¿Qué son las enzimas de restricción?", "Enzimas bacterianas que cortan el ADN en secuencias específicas."],
      ["¿Qué es un organismo transgénico?", "Organismo al que se han introducido genes de otra especie mediante ingeniería genética."],
    ],
    m: [
      ["Explica los tres mecanismos de transferencia horizontal en bacterias.", "Transformación (ADN libre), conjugación (plásmido por pili) y transducción (genes llevados por un virus)."],
      ["Compara el ciclo lítico y el lisogénico.", "Lítico: el virus se multiplica y lisa la célula. Lisogénico: el ADN se integra como profago y se replica con la bacteria hasta su inducción."],
      ["Explica por qué los virus se consideran parásitos obligados.", "No tienen metabolismo ni ribosomas; solo se multiplican usando la maquinaria de una célula."],
      ["Explica el papel de los microorganismos en el ciclo del nitrógeno.", "Fijadores (N₂ → NH₃), amonificantes, nitrificantes (NH₃ → NO₃⁻) y desnitrificantes (NO₃⁻ → N₂)."],
      ["Explica cómo aparecen y se extienden las bacterias resistentes a antibióticos.", "Mutaciones o genes de plásmidos dan resistencia; el antibiótico elimina las sensibles; las resistentes proliferan y transfieren los genes por conjugación."],
      ["Diferencia endemia, epidemia y pandemia.", "Endemia: presencia constante en una zona. Epidemia: muchos casos en poco tiempo. Pandemia: extensión mundial."],
      ["Explica el funcionamiento de una depuradora biológica.", "Bacterias aerobias degradan la materia orgánica (fangos activados); los lodos se digieren anaeróbicamente produciendo biogás."],
      ["Describe los pasos para clonar un gen en una bacteria.", "Cortar gen y plásmido con la misma enzima, unir con ligasa, introducir en la bacteria, seleccionar con marcador y cultivar."],
      ["Explica las tres etapas de un ciclo de PCR.", "Desnaturalización (95 °C), hibridación de cebadores (55 °C) y extensión por la polimerasa termoestable (72 °C)."],
      ["Explica cómo funciona CRISPR-Cas9.", "Un ARN guía complementario de la secuencia diana lleva a Cas9, que corta el ADN; la reparación permite eliminar o insertar genes."],
      ["Explica qué es la terapia génica y pon un ejemplo.", "Introducción de genes sanos en células de un paciente para tratar una enfermedad genética; ej.: inmunodeficiencia ADA-SCID."],
      ["Cita dos beneficios y dos riesgos de los cultivos transgénicos.", "Beneficios: resistencia a plagas, mayor valor nutritivo. Riesgos: flujo de genes a especies silvestres, dependencia de patentes."],
    ],
    a: [
      ["(Tipo PAU) Explica por qué el VIH es un retrovirus, cómo se multiplica y por qué es difícil de eliminar.", "Tiene ARN y transcriptasa inversa; copia su ARN a ADN que se integra como provirus en linfocitos T; queda latente y muta mucho."],
      ["(Tipo PAU) Indica qué tipo de microorganismo se usa en cada proceso: pan, yogur, vinagre, penicilina, insulina recombinante.", "Levadura, bacterias lácticas, bacterias acéticas, hongo Penicillium, bacteria E. coli transgénica."],
      ["(Tipo PAU) Explica el fundamento de las pruebas PCR para diagnosticar la COVID-19 si el virus es de ARN.", "Primero se copia el ARN a ADN con transcriptasa inversa (RT-PCR); luego se amplifica una secuencia específica del virus con cebadores."],
      ["En un cultivo con un antibiótico solo crecen las bacterias que captaron el plásmido recombinante. Explica por qué.", "El plásmido lleva un gen de resistencia a ese antibiótico como marcador; las demás mueren."],
      ["Diseña un experimento para comprobar si un producto de limpieza es antibacteriano.", "Placas con bacterias sembradas, discos con el producto y control con agua; incubar y medir el halo de inhibición."],
      ["Explica por qué las bacterias de aguas termales fueron clave para la PCR.", "Su ADN polimerasa (Taq) resiste 95 °C y no se desnaturaliza en cada ciclo."],
      ["Calcula cuánto tiempo tarda una bacteria que se divide cada 30 min en producir más de un millón de células.", "2ⁿ > 10⁶ → n = 20 divisiones → 20 × 30 min = 10 horas."],
      ["Razona si el sistema CRISPR de las bacterias es una forma de inmunidad.", "Sí: guardan fragmentos de virus que las infectaron y usan Cas para reconocer y cortar ese ADN en infecciones posteriores (memoria adquirida)."],
      ["Debate: ¿debería permitirse la edición genética de embriones para evitar enfermedades graves?", "Respuesta argumentada: beneficios (evitar enfermedades) frente a riesgos (efectos fuera de diana, cambios heredables, eugenesia, consentimiento de generaciones futuras)."],
    ],
  },
  quiz: [
    ["Las arqueas son…", ["procariotas", "eucariotas", "virus", "hongos"], 0, "Ambientes extremos."],
    ["La pared bacteriana está formada por…", ["peptidoglucano", "celulosa", "quitina", "colesterol"], 0, "Mureína."],
    ["Las Gram positivas se tiñen de…", ["violeta", "rosa", "verde", "azul claro"], 0, "Pared gruesa."],
    ["Los bacilos tienen forma de…", ["bastón", "esfera", "espiral", "coma"], 0, "Cocos: esfera."],
    ["Las bacterias se reproducen por…", ["bipartición", "meiosis", "gemación", "esporas sexuales"], 0, "Asexual."],
    ["La conjugación requiere…", ["un pili sexual", "un virus", "ADN libre", "esporas"], 0, "Transfiere plásmidos."],
    ["Rhizobium vive en simbiosis con…", ["leguminosas", "vacas", "humanos", "algas"], 0, "Fija N₂."],
    ["Un virus contiene…", ["ADN o ARN", "ADN y ARN", "solo proteínas", "ribosomas"], 0, "Nunca ambos."],
    ["Los bacteriófagos infectan…", ["bacterias", "plantas", "hongos", "animales"], 0, "Fagos."],
    ["En el ciclo lisogénico el ADN vírico…", ["se integra en el cromosoma", "lisa la célula enseguida", "se destruye", "sale de la célula"], 0, "Profago."],
    ["Los priones son…", ["proteínas", "ARN", "ADN", "bacterias"], 0, "Mal plegadas."],
    ["Las bacterias nitrificantes producen…", ["nitratos", "N₂", "metano", "glucosa"], 0, "Oxidan NH₃."],
    ["Los antibióticos actúan contra…", ["bacterias", "virus", "priones", "todos"], 0, "No contra virus."],
    ["La penicilina procede de un…", ["hongo", "virus", "protozoo", "alga"], 0, "Penicillium."],
    ["El yogur se obtiene con…", ["bacterias lácticas", "levaduras", "mohos", "virus"], 0, "Fermentación láctica."],
    ["Bacillus thuringiensis se usa como…", ["bioinsecticida", "antibiótico", "levadura", "vacuna"], 0, "Toxina Bt."],
    ["Las enzimas de restricción…", ["cortan el ADN", "unen ADN", "copian ARN", "fabrican proteínas"], 0, "Secuencias específicas."],
    ["La PCR necesita una polimerasa…", ["termoestable", "humana", "de ARN", "de virus"], 0, "Taq."],
    ["Tras 10 ciclos de PCR hay… copias", ["1024", "20", "100", "10"], 0, "2¹⁰."],
    ["CRISPR-Cas9 usa un… guía", ["ARN", "ADN", "proteína", "lípido"], 0, "Corta en un punto exacto."],
  ],
  examen: [
    ["El primer fármaco recombinante fue la…", ["insulina", "penicilina", "aspirina", "vacuna de la polio"], 0, "1978."],
    ["El ADNc se obtiene con…", ["transcriptasa inversa", "ARN polimerasa", "ligasa", "helicasa"], 0, "Desde ARNm."],
    ["La transducción es transferencia de genes por…", ["virus", "pili", "ADN libre", "esporas"], 0, "Fagos."],
    ["Las endosporas sirven para…", ["resistir condiciones adversas", "reproducirse sexualmente", "moverse", "fotosintetizar"], 0, "Tétanos."],
    ["En la desnaturalización de la PCR se alcanza…", ["95 °C", "55 °C", "72 °C", "37 °C"], 0, "Separa hebras."],
    ["Las arqueas metanógenas viven en…", ["ambientes sin O₂", "superficie de hojas", "el aire", "la piel"], 0, "Producen metano."],
    ["El maíz Bt es resistente a…", ["insectos", "herbicidas", "sequía", "frío"], 0, "Toxina Bt."],
    ["Una pandemia es una epidemia…", ["mundial", "local", "constante", "leve"], 0, "Extensión global."],
  ],
  feynman: ["Por qué un virus no está vivo del todo", "Cómo comparten genes las bacterias sin reproducirse sexualmente", "Por qué no hay que tomar antibióticos para un resfriado", "Cómo se consigue que una bacteria fabrique insulina humana", "Cómo la PCR hace millones de copias de ADN", "Qué son unas tijeras moleculares como CRISPR"],
  mapa: ["MICROBIOLOGÍA Y BIOTECNOLOGÍA", [["Bacterias", "pared, plásmidos, bipartición"], ["Virus", "cápside, lítico y lisogénico"], ["Biotecnología", "alimentos, fármacos, ambiente"], ["Ingeniería genética", "ADN recombinante, PCR, CRISPR"]]],
  tarjetas: [
    ["Microorganismos", "Procariotas, eucariotas y acelulares."],
    ["Bacteria", "Procariota; pared de peptidoglucano; 70S."],
    ["Gram", "+ violeta (pared gruesa); − rosa (membrana externa)."],
    ["Transferencia horizontal", "Transformación, conjugación, transducción."],
    ["Virus", "Ácido nucleico + cápside; parásito obligado."],
    ["Lítico / lisogénico", "Lisis / profago integrado."],
    ["Ciclo del N", "Fijación, amonificación, nitrificación, desnitrificación."],
    ["Antibióticos", "Solo contra bacterias; resistencias."],
    ["Biotecnología tradicional", "Pan, vino, yogur, queso, vinagre."],
    ["ADN recombinante", "Restricción + ligasa + vector."],
    ["PCR", "95-55-72 °C; 2ⁿ copias."],
    ["CRISPR", "ARN guía + Cas9: edición precisa."],
  ],
  glosario: [
    ["Microorganismo", "Ser vivo microscópico."],
    ["Peptidoglucano", "Polímero que forma la pared de las bacterias."],
    ["Plásmido", "Molécula pequeña y circular de ADN extracromosómico."],
    ["Conjugación", "Transferencia de ADN entre bacterias a través de un pili sexual."],
    ["Endospora", "Forma de resistencia de algunas bacterias."],
    ["Virión", "Partícula vírica completa fuera de la célula."],
    ["Cápside", "Cubierta proteica de un virus."],
    ["Profago", "ADN de un fago integrado en el cromosoma bacteriano."],
    ["Prion", "Proteína infecciosa mal plegada."],
    ["Patógeno", "Microorganismo capaz de causar enfermedad."],
    ["Biotecnología", "Uso de seres vivos para obtener productos o servicios."],
    ["Biorremediación", "Uso de microorganismos para eliminar contaminantes."],
    ["Enzima de restricción", "Enzima que corta el ADN en una secuencia específica."],
    ["Vector", "Molécula de ADN que transporta un gen a una célula, como un plásmido."],
    ["PCR", "Técnica que amplifica millones de veces un fragmento de ADN."],
    ["Transgénico", "Organismo con genes de otra especie introducidos artificialmente."],
  ],
  situacion: {
    titulo: "¿Qué hay en mis manos?",
    reto: "Vuestro equipo debe comprobar la eficacia de distintos métodos de lavado de manos cultivando los microorganismos que quedan en ellas en placas de agar.",
    pasos: [
      "Preparad placas de agar nutritivo estériles y dividid cada una en sectores.",
      "Tocad cada sector con un dedo sin lavar, lavado con agua, con jabón y con gel hidroalcohólico.",
      "Incubad las placas cerradas a temperatura ambiente durante 2-3 días, sin abrirlas nunca.",
      "Contad las colonias de cada sector y comparad los resultados.",
      "Eliminad las placas de forma segura (con lejía) y redactad unas recomendaciones de higiene.",
    ],
    producto: "Un informe con fotos de las placas, una tabla de colonias y una infografía sobre el lavado de manos.",
    evaluacion: ["Se trabaja en condiciones de esterilidad y seguridad.", "Se controlan las variables y se incluye un control.", "La interpretación relaciona los resultados con la eficacia de cada método."],
  },
  familias: [
    "Preparad yogur o pan casero y hablad del papel de bacterias y levaduras.",
    "Revisad juntos el botiquín y hablad del uso responsable de los antibióticos.",
    "Separad los residuos orgánicos para hacer compost, si es posible.",
    "Comentad una noticia sobre CRISPR o los transgénicos y debatid sus pros y contras.",
  ],
  saberes: "bloque «Microbiología, biotecnología e inmunología»: los microorganismos y su clasificación; las bacterias (estructura, nutrición, reproducción e intercambio genético); los virus y otras formas acelulares, sus ciclos; los microorganismos en los ciclos biogeoquímicos y como agentes de enfermedades; aplicaciones biotecnológicas en alimentación, salud y medio ambiente; la ingeniería genética (ADN recombinante, PCR, CRISPR) y sus implicaciones éticas.",
  ideas: [
    "Cultivo de microorganismos en placas de agar a partir de muestras del entorno.",
    "Tinción de Gram de bacterias del yogur y observación al microscopio.",
    "Simulación de la PCR y del corte con enzimas de restricción con tiras de papel.",
    "Debate estructurado sobre los transgénicos y la edición genética.",
  ],
  fuentes: [
    { t: "Agencia Española de Medicamentos: Plan Nacional frente a la Resistencia a los Antibióticos", url: "https://resistenciaantibioticos.es/es" },
  ],
});
