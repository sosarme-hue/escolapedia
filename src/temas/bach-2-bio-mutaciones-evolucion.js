// Biología 2º Bachillerato · Mutaciones, genética y evolución (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, arbol } = require("./_bach2-bio");

// Cuadro de Punnett Aa x Aa.
const punnettSVG = marco("Cuadro de Punnett del cruce entre dos heterocigotos Aa: se obtienen AA, Aa, Aa y aa, en proporción genotípica 1:2:1 y fenotípica 3:1", `
  ${T(130, 18, "Aa × Aa", { fs: 12, b: true })}
  ${[["A", 0], ["a", 1]].map(([g, i]) => T(110 + i * 56, 44, g, { fs: 13, b: true, c: "var(--pen)" })).join("")}
  ${[["A", 0], ["a", 1]].map(([g, i]) => T(66, 82 + i * 50, g, { fs: 13, b: true, c: "var(--red)" })).join("")}
  ${[["AA", 0, 0, 1], ["Aa", 1, 0, 1], ["Aa", 0, 1, 1], ["aa", 1, 1, 0]].map(([g, c, r, d]) => `<rect x="${82 + c * 56}" y="${54 + r * 50}" width="56" height="50" fill="${d ? "var(--leaf)" : "var(--sun)"}" fill-opacity=".3" stroke="var(--line)"/>${T(110 + c * 56, 86 + r * 50, g, { fs: 14, b: true })}`).join("")}
  ${T(222, 80, "3 : 1", { fs: 13, b: true, c: "var(--leaf)" })}${T(222, 96, "fenotipo", { fs: 9, c: "var(--muted)" })}${T(222, 130, "1 : 2 : 1", { fs: 12, b: true, c: "var(--pen)" })}${T(222, 146, "genotipo", { fs: 9, c: "var(--muted)" })}`);

// Tipos de mutaciones génicas.
const mutSVG = marco("Mutaciones génicas: a partir de una secuencia normal, una sustitución cambia un nucleótido, y una deleción o una inserción desplazan la pauta de lectura", `
  ${[["Normal", "AUG-UUC-GGA-UAA", "Met-Phe-Gly", "var(--ink)"], ["Sustitución", "AUG-UUA-GGA-UAA", "Met-Leu-Gly", "var(--red)"], ["Deleción", "AUG-UCG-GAU-AA", "Met-Ser-Asp…", "var(--pen)"], ["Inserción", "AUG-UUU-CGG-AUA", "Met-Phe-Arg…", "var(--leaf)"]].map(([t, sq, p, c], i) => `${T(6, 36 + i * 40, t, { fs: 10, b: true, c, a: "start" })}${T(170, 36 + i * 40, sq, { fs: 10.5, b: true, c })}${T(170, 50 + i * 40, p, { fs: 9, c: "var(--muted)" })}`).join("")}`);

// Herencia ligada al X.
const ligSVG = marco("Herencia ligada al cromosoma X: una mujer portadora de la hemofilia y un hombre sano tienen un 50 por ciento de hijos varones hemofílicos y un 50 por ciento de hijas portadoras", `
  ${T(130, 18, "XᴴXʰ (portadora) × XᴴY (sano)", { fs: 11, b: true })}
  ${[["XᴴXᴴ", "hija sana", "var(--leaf)"], ["XᴴXʰ", "hija portadora", "var(--sun)"], ["XᴴY", "hijo sano", "var(--pen)"], ["XʰY", "hijo hemofílico", "var(--red)"]].map(([g, t, c], i) => `<rect x="${8 + i * 62}" y="50" width="58" height="80" rx="8" fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="1.8"/>${T(37 + i * 62, 84, g, { fs: 12, b: true, c })}${T(37 + i * 62, 104, t.split(" ")[0], { fs: 9 })}${T(37 + i * 62, 116, t.split(" ")[1], { fs: 9 })}`).join("")}
  ${T(130, 160, "cada hijo varón: 50 % de ser hemofílico", { fs: 10, b: true, c: "var(--red)" })}`);

module.exports = tema({
  titulo: "Mutaciones, genética y evolución",
  minutos: 135,
  secciones: [4, 4, 4],
  objetivos: [
    "Definir mutación, clasificar los tipos de mutaciones y relacionarlas con los agentes mutagénicos, el cáncer y la evolución",
    "Explicar los mecanismos de reparación del ADN",
    "Aplicar las leyes de Mendel a la resolución de problemas de genética",
    "Resolver problemas de herencia ligada al sexo, codominancia, alelos múltiples y genes ligados",
    "Explicar las pruebas de la evolución y las teorías de Lamarck, Darwin y la teoría sintética",
    "Relacionar mutación, recombinación, selección natural y deriva genética con la especiación",
  ],
  claves: ["mutación", "mutágeno", "mutación génica", "cromosómica", "genómica", "reparación", "alelo", "genotipo", "fenotipo", "dominante", "recesivo", "leyes de Mendel", "herencia ligada al sexo", "selección natural", "deriva genética", "especiación"],
  pregunta: {
    texto: "Si las mutaciones suelen ser perjudiciales, ¿cómo pueden ser el motor de la evolución?",
    respuesta: "Porque la mayoría son neutras o perjudiciales, pero de vez en cuando aparece una <mark>mutación</mark> que resulta ventajosa en un ambiente concreto. La <b>selección natural</b> actúa como un filtro: los individuos que la llevan dejan más descendientes y la mutación se extiende en la población a lo largo de las generaciones. Sin mutaciones no habría alelos nuevos ni variabilidad sobre la que pudiera actuar la selección. Un ejemplo actual es la resistencia de las bacterias a los antibióticos: mutaciones raras se han vuelto comunes porque los antibióticos eliminan a las bacterias que no las tienen.",
  },
  lectura: {
    titulo: "El monje que contaba guisantes",
    html: `<p>Gregor Mendel fue un monje agustino que vivió en el monasterio de Brno, en la actual República Checa. Había estudiado física y matemáticas en Viena, y entre 1856 y 1863 cultivó en el huerto del monasterio casi 30 000 plantas de guisante. Eligió siete caracteres con dos variantes bien distintas, como el color de la semilla (amarillo o verde) o su forma (lisa o rugosa), y cruzó las plantas con paciencia, tapando las flores para controlar la polinización. Lo más novedoso fue que contó los resultados y los analizó con estadística, algo que ningún naturalista hacía entonces.</p><p>Mendel descubrió que los caracteres se heredan mediante «factores» que se transmiten sin mezclarse y se reparten según proporciones fijas, como 3:1 o 9:3:3:1. Presentó sus resultados en 1865, pero nadie entendió su importancia. Murió en 1884 sin reconocimiento. En 1900, tres botánicos redescubrieron sus leyes casi a la vez, y poco después se comprobó que sus factores, los genes, estaban en los cromosomas. Hoy se le considera el padre de la genética. En este tema estudiarás sus leyes, cómo cambian los genes por mutación y cómo esos cambios, filtrados por la selección natural, explican la evolución de la vida.</p>`,
  },
  bloques: [
    { h: "Las mutaciones y sus tipos", p: [
      "Una <mark>mutación</mark> es un cambio en el material genético de una célula que se transmite a las células hijas. Las mutaciones pueden ser <b>espontáneas</b>, por errores en la replicación o en la división celular, o <b>inducidas</b> por agentes externos. Según las células afectadas, pueden ser <b>somáticas</b>, si ocurren en células del cuerpo, que solo afectan al individuo y no se heredan, como la mayoría de los cánceres; o <b>germinales</b>, si ocurren en las células que forman gametos, y entonces pueden pasar a la descendencia. Solo estas últimas tienen importancia evolutiva.",
      "Según su extensión, las mutaciones se clasifican en tres tipos. Las <b>mutaciones génicas</b> o puntuales afectan a la secuencia de nucleótidos de un gen. Las <b>mutaciones cromosómicas</b> alteran la estructura de un cromosoma: deleciones (pérdida de un fragmento), duplicaciones, inversiones (un fragmento gira 180°) y translocaciones (un fragmento pasa a otro cromosoma). Las <b>mutaciones genómicas</b> cambian el número de cromosomas: las <b>aneuploidías</b> afectan a uno o pocos cromosomas (trisomías, monosomías), y las <b>euploidías</b>, a juegos completos (poliploidía, frecuente en plantas como el trigo o la fresa, que son más grandes y vigorosas).",
    ], svg: arbol("Tipos de mutaciones", "MUTACIONES", [["Génicas", "secuencia de un gen"], ["Cromosómicas", "estructura"], ["Genómicas", "número"]], "var(--red)"), v: ["mut-a", "Qué es una mutación genética"] },
    { h: "Mutaciones génicas y sus efectos", p: [
      "Las mutaciones génicas pueden ser de dos tipos. En una <b>sustitución</b> se cambia un nucleótido por otro; si se cambia una purina por otra purina, o una pirimidina por otra, se llama transición, y si cambia el tipo, transversión. Su efecto depende del codón resultante: puede ser <b>silenciosa</b>, si el nuevo codón codifica el mismo aminoácido, gracias a la degeneración del código; de <b>sentido erróneo</b>, si cambia un aminoácido, como en la anemia falciforme, donde una sola sustitución en el gen de la hemoglobina cambia un ácido glutámico por valina; o <b>sin sentido</b>, si aparece un codón de parada y la proteína queda cortada.",
      "En las <b>inserciones y deleciones</b> se añaden o pierden nucleótidos. Si su número no es múltiplo de tres, se produce un <b>desplazamiento de la pauta de lectura</b>: todos los codones a partir de la mutación cambian, y la proteína resultante suele ser completamente distinta y no funcional. Es lo que ocurre en muchos casos de fibrosis quística, aunque la mutación más frecuente en esta enfermedad es una deleción de tres nucleótidos que elimina un solo aminoácido. En general, cuanto más afecte la mutación a la estructura de la proteína, más grave será su efecto.",
    ], svg: mutSVG },
    { h: "Agentes mutagénicos y reparación del ADN", p: [
      "Los <mark>agentes mutagénicos</mark> o mutágenos aumentan la frecuencia de mutaciones. Los <b>físicos</b> son las radiaciones. Las <b>radiaciones ionizantes</b> (rayos X, rayos gamma, radiactividad) tienen tanta energía que rompen las hebras del ADN. La <b>radiación ultravioleta</b> del sol hace que dos timinas contiguas se unan formando dímeros, que distorsionan la doble hélice; por eso la exposición excesiva al sol causa cáncer de piel. Los <b>químicos</b> incluyen sustancias que modifican las bases (como el ácido nitroso), análogos de bases que se cuelan en la replicación, y agentes que se intercalan entre las bases (como algunos colorantes), además de muchos componentes del humo del tabaco. Los <b>biológicos</b> son algunos virus que insertan su material genético en el de la célula.",
      "Las células disponen de sistemas para <b>reparar el ADN</b>, sin los cuales las mutaciones serían miles de veces más frecuentes. Las ADN polimerasas corrigen sus propios errores durante la replicación. Después, otros sistemas detectan los nucleótidos mal emparejados y los sustituyen. En la <b>reparación por escisión</b>, unas enzimas reconocen una zona dañada, como un dímero de timina, cortan el fragmento, una ADN polimerasa rellena el hueco usando la hebra complementaria como molde y la ligasa lo sella. Las personas con xeroderma pigmentoso, que tienen defectuoso este sistema, desarrollan cáncer de piel con muy poca exposición al sol. Las mutaciones que no se reparan, si afectan a los genes que controlan el ciclo celular, pueden originar un <b>cáncer</b>.",
    ], svg: L6.tabla("Agentes mutagénicos", ["Tipo", "Ejemplos", "Efecto"], [["Físicos", "UV, rayos X, gamma", "dímeros, roturas"], ["Químicos", "ácido nitroso, tabaco", "modifican bases"], ["Biológicos", "virus", "insertan ADN"]]) },
    { h: "Mutaciones, cáncer y evolución", p: [
      "El <mark>cáncer</mark> es un conjunto de enfermedades en las que algunas células se dividen sin control, invaden los tejidos vecinos y pueden extenderse a otros órganos (<b>metástasis</b>). Se produce por la acumulación de mutaciones en dos tipos de genes. Los <b>protooncogenes</b> estimulan la división celular normal; al mutar se convierten en <b>oncogenes</b>, que actúan como un acelerador bloqueado. Los <b>genes supresores de tumores</b>, como el p53 o el BRCA1, frenan la división o activan la apoptosis; cuando se inactivan, la célula pierde los frenos. Normalmente hacen falta varias mutaciones acumuladas durante años, por eso el cáncer es más frecuente en las personas mayores. Algunas personas heredan mutaciones que aumentan su riesgo.",
      "A pesar de sus efectos negativos, las mutaciones son imprescindibles para la vida. Son la <b>fuente última de variabilidad genética</b>: crean los alelos nuevos que luego la reproducción sexual combina. La mayoría son neutras o perjudiciales, pero algunas resultan ventajosas en un ambiente determinado, y la selección natural las favorece. Las <b>duplicaciones</b> de genes también han sido importantes en la evolución: una copia mantiene la función original y la otra puede acumular mutaciones y adquirir una función nueva, como ocurrió con las distintas cadenas de la hemoglobina. Sin mutaciones no habría evolución.",
    ], svg: L5.compara("Genes y cáncer", ["Protooncogenes", ["estimulan la división", "mutan a oncogenes", "acelerador bloqueado", "ej.: RAS"]], ["Supresores", ["frenan la división", "se inactivan", "sin frenos", "ej.: p53, BRCA1"]], "var(--red)", "var(--pen)") },
    { h: "Conceptos básicos de genética", p: [
      "La <b>genética</b> estudia la herencia biológica: cómo se transmiten los caracteres de padres a hijos. Un <mark>gen</mark> es la unidad de información que determina un carácter, y ocupa un lugar fijo en un cromosoma, su <b>locus</b>. Cada gen puede presentar distintas variantes, los <mark>alelos</mark>. Como las células somáticas son diploides, cada individuo tiene dos alelos para cada gen, uno en cada cromosoma homólogo. Si los dos son iguales, el individuo es <b>homocigoto</b> o raza pura (AA o aa); si son distintos, es <b>heterocigoto</b> o híbrido (Aa).",
      "El <b>genotipo</b> es el conjunto de alelos que tiene un individuo, y el <b>fenotipo</b> es el conjunto de caracteres observables, que resulta de la interacción del genotipo con el ambiente. Por ejemplo, la estatura depende de muchos genes, pero también de la alimentación. Un alelo es <b>dominante</b> (se escribe con mayúscula) si se manifiesta aunque esté en una sola copia, y <b>recesivo</b> (minúscula) si solo se manifiesta en homocigosis. Para expresar cruces se usan símbolos: P es la generación parental, F₁ la primera generación filial y F₂ la segunda. El <b>cruzamiento prueba</b> consiste en cruzar un individuo de fenotipo dominante con un homocigoto recesivo para saber si es AA o Aa.",
    ], svg: L6.tabla("Vocabulario de genética", ["Término", "Significado", "Ejemplo"], [["Alelo", "variante de un gen", "A, a"], ["Homocigoto", "alelos iguales", "AA, aa"], ["Heterocigoto", "alelos distintos", "Aa"], ["Fenotipo", "carácter visible", "semilla amarilla"]]), v: ["mut-b", "Las leyes de Mendel"] },
    { h: "Las leyes de Mendel", p: [
      "La <b>primera ley</b> o ley de la <mark>uniformidad</mark> dice que al cruzar dos razas puras que difieren en un carácter, todos los individuos de la F₁ son iguales entre sí. Por ejemplo, al cruzar guisantes amarillos (AA) con verdes (aa), todos los descendientes son Aa y amarillos, porque el amarillo es dominante. La <b>segunda ley</b> o ley de la <mark>segregación</mark> dice que los dos alelos de un gen se separan al formarse los gametos, de modo que cada gameto lleva solo uno. Al cruzar dos individuos de la F₁ (Aa × Aa), en la F₂ reaparece el carácter recesivo: se obtienen las proporciones genotípicas <b>1 AA : 2 Aa : 1 aa</b> y fenotípicas <b>3 amarillos : 1 verde</b>.",
      "La <b>tercera ley</b> o ley de la <mark>transmisión independiente</mark> dice que los alelos de genes distintos se heredan de forma independiente unos de otros. Al cruzar dos dihíbridos AaBb × AaBb, cada uno forma cuatro tipos de gametos (AB, Ab, aB, ab) en igual proporción, y en la descendencia aparecen las proporciones fenotípicas <b>9 : 3 : 3 : 1</b>. La base cromosómica de estas leyes es la meiosis: la segregación de los homólogos en la anafase I explica la segunda ley, y su orientación al azar en la metafase I explica la tercera. La tercera ley solo se cumple para genes situados en cromosomas distintos, o muy alejados en el mismo cromosoma.",
    ], svg: punnettSVG, v: ["mut-f", "Ejercicios de las leyes de Mendel"] },
    { h: "Otras formas de herencia", p: [
      "No todos los caracteres siguen la dominancia completa estudiada por Mendel. En la <b>herencia intermedia</b>, el heterocigoto tiene un fenotipo intermedio entre los dos homocigotos: al cruzar dondiegos de flores rojas y blancas, la F₁ tiene flores rosas, y en la F₂ las proporciones fenotípicas coinciden con las genotípicas, 1:2:1. En la <b>codominancia</b>, los dos alelos se manifiestan a la vez en el heterocigoto, como en el grupo sanguíneo AB, en el que los glóbulos rojos tienen a la vez los antígenos A y B.",
      "Los grupos sanguíneos ABO son además un ejemplo de <b>alelos múltiples</b>: el gen tiene tres alelos en la población (Iᴬ, Iᴮ e i), aunque cada persona solo tiene dos. Iᴬ e Iᴮ son codominantes entre sí y ambos dominan sobre i. Así hay seis genotipos y cuatro fenotipos: grupo A (IᴬIᴬ o Iᴬi), grupo B (IᴮIᴮ o Iᴮi), grupo AB (IᴬIᴮ) y grupo 0 (ii). Otros caracteres, como la estatura, el color de la piel o la inteligencia, dependen de muchos genes con efectos que se suman (<b>herencia poligénica</b>) y de la influencia del ambiente, y muestran una variación continua.",
    ], svg: L6.tabla("Grupos sanguíneos ABO", ["Grupo", "Genotipos", "Antígenos"], [["A", "IᴬIᴬ, Iᴬi", "A"], ["B", "IᴮIᴮ, Iᴮi", "B"], ["AB", "IᴬIᴮ", "A y B"], ["0", "ii", "ninguno"]]) },
    { h: "Herencia del sexo y ligada al sexo", p: [
      "En la especie humana, el sexo se determina por los <b>cromosomas sexuales</b>: las mujeres son XX y los hombres XY. Las mujeres forman óvulos con X, y los hombres, espermatozoides con X o con Y en igual proporción, de modo que la probabilidad de tener un hijo o una hija es del 50 %. En el cromosoma Y está el gen SRY, que desencadena el desarrollo de los testículos. En otras especies el sistema es distinto: en las aves, los machos son ZZ y las hembras ZW, y en las abejas, los machos son haploides.",
      "El cromosoma X contiene muchos genes que no tienen equivalente en el Y. Los caracteres que dependen de ellos siguen la <mark>herencia ligada al sexo</mark>. Los hombres, con un solo X, manifiestan siempre el alelo que tengan (son hemicigóticos), mientras que las mujeres necesitan dos copias del alelo recesivo. Por eso enfermedades recesivas ligadas al X, como la <b>hemofilia</b> (dificultad para coagular la sangre) o el <b>daltonismo</b> (dificultad para distinguir colores), son mucho más frecuentes en hombres. Una mujer heterocigota es <b>portadora</b>: no padece la enfermedad, pero la transmite a la mitad de sus hijos varones. La hemofilia afectó a varias familias reales europeas descendientes de la reina Victoria de Inglaterra.",
    ], svg: ligSVG, v: ["mut-e", "Herencia ligada al cromosoma X"] },
    { h: "Genes ligados y árboles genealógicos", p: [
      "La tercera ley de Mendel no se cumple cuando dos genes están en el mismo cromosoma: son <mark>genes ligados</mark>, que tienden a heredarse juntos. Sin embargo, el <b>sobrecruzamiento</b> en la meiosis puede separarlos y formar gametos <b>recombinantes</b>, con combinaciones nuevas de alelos. Cuanto más alejados están dos genes en el cromosoma, más probable es que se produzca un sobrecruzamiento entre ellos y mayor es su frecuencia de recombinación. Thomas Hunt Morgan y sus alumnos, trabajando con la mosca del vinagre, usaron este hecho para elaborar los primeros <b>mapas genéticos</b>, que ordenan los genes en los cromosomas.",
      "En la especie humana no se pueden hacer cruces experimentales, y para estudiar la herencia de un carácter se usan los <mark>árboles genealógicos</mark> o pedigríes. En ellos, los hombres se representan con cuadrados y las mujeres con círculos; los individuos afectados, en negro; y las generaciones, con números romanos. Analizando el árbol se puede deducir si el carácter es dominante o recesivo y si es autosómico o ligado al sexo. Por ejemplo, si dos padres sanos tienen un hijo afectado, el carácter es recesivo y los padres son portadores. Esto es la base del <b>consejo genético</b>, que informa a las familias sobre el riesgo de transmitir enfermedades hereditarias.",
    ], svg: L5.pasos("Analizar un árbol genealógico", ["Padres sanos con hijo afectado → recesivo", "Afectado con padres sanos: ambos portadores", "Muchos más varones afectados → ligado al X", "Calcular probabilidades con Punnett"], "var(--pen)") },
    { h: "Pruebas de la evolución", p: [
      "La <mark>evolución</mark> es el proceso de cambio de las especies a lo largo del tiempo, por el que, a partir de antepasados comunes, se han originado todas las especies actuales y extinguidas. Hay muchas pruebas. Las <b>paleontológicas</b>: los fósiles muestran que en el pasado vivieron organismos distintos de los actuales, en un orden coherente, con formas intermedias como <i>Archaeopteryx</i> (entre reptiles y aves) o <i>Tiktaalik</i> (entre peces y anfibios). Las <b>anatómicas</b>: los <b>órganos homólogos</b>, como el brazo humano, el ala del murciélago y la aleta de la ballena, tienen la misma estructura básica y un origen común aunque hagan funciones distintas; los <b>órganos vestigiales</b>, como el apéndice o el cóccix, son restos de órganos funcionales en los antepasados.",
      "Las <b>embriológicas</b>: los embriones de los vertebrados son muy parecidos en las primeras etapas, con hendiduras faríngeas y cola. Las <b>biogeográficas</b>: las especies de islas, como los pinzones de las Galápagos estudiados por Darwin, se parecen a las del continente más próximo y se han diversificado desde ellas. Y las más concluyentes, las <b>bioquímicas y moleculares</b>: todos los seres vivos usan el mismo código genético, el ATP y moléculas parecidas, y cuanto más emparentadas están dos especies, más se parecen sus secuencias de ADN y de proteínas. Por ejemplo, el ADN humano y el del chimpancé coinciden en un 98,8 %.",
    ], svg: L6.radial("Pruebas de la evolución", "EVOLUCIÓN", ["Fósiles", "Homologías", "Vestigios", "Embriones", "Biogeografía", "ADN"], "var(--leaf)") },
    { h: "Teorías evolutivas: de Lamarck a Darwin", p: [
      "Hasta el siglo XIX predominaba el <b>fijismo</b>, que sostenía que las especies habían sido creadas tal como son y no cambiaban. En 1809, <b>Lamarck</b> propuso la primera teoría evolutiva completa. Según él, los organismos tienen una tendencia a mejorar, los cambios del ambiente generan nuevas necesidades, el uso desarrolla los órganos y el desuso los atrofia, y los <b>caracteres adquiridos</b> así se heredan. El ejemplo clásico es la jirafa, cuyo cuello se habría alargado al estirarse para alcanzar las hojas altas. Hoy sabemos que los caracteres adquiridos no se heredan, porque no modifican el ADN de los gametos.",
      "En 1859, <b>Charles Darwin</b> publicó <i>El origen de las especies</i>, tras su viaje alrededor del mundo en el <i>Beagle</i>; <b>Alfred Russel Wallace</b> había llegado a conclusiones parecidas. Su teoría se basa en varias observaciones: los individuos de una especie presentan <b>variaciones</b>, parte de las cuales se heredan; los organismos producen más descendientes de los que pueden sobrevivir, por lo que hay una <b>lucha por la existencia</b>; y los individuos con variaciones más ventajosas en su ambiente sobreviven y se reproducen más. Es la <mark>selección natural</mark>: con el tiempo, las variaciones favorables se acumulan y las poblaciones cambian. Darwin no sabía, sin embargo, de dónde salían las variaciones ni cómo se heredaban.",
    ], svg: L5.compara("La jirafa según…", ["Lamarck", ["necesidad", "uso del cuello", "se alarga en vida", "se hereda (falso)"]], ["Darwin", ["variación previa", "cuellos distintos", "sobreviven los largos", "dejan más hijos"]], "var(--sun)", "var(--leaf)"), v: ["mut-c", "Selección natural"] },
    { h: "Teoría sintética, deriva y especiación", p: [
      "En las décadas de 1930 y 1940, la teoría de Darwin se unió a la genética de Mendel y a la genética de poblaciones en la <mark>teoría sintética</mark> de la evolución o <b>neodarwinismo</b>. Según ella, la evolución es un cambio en las frecuencias de los alelos de una población a lo largo de las generaciones. La unidad que evoluciona es la población, no el individuo. La variabilidad procede de las <b>mutaciones</b>, que crean alelos nuevos, y de la <b>recombinación</b> en la reproducción sexual, que los combina. Sobre ella actúan varios mecanismos: la <b>selección natural</b>, que favorece los alelos ventajosos; la <b>deriva genética</b>, cambios al azar en las frecuencias, muy importantes en poblaciones pequeñas (efecto fundador, cuello de botella); y las <b>migraciones</b>, que introducen o retiran alelos.",
      "La <mark>especiación</mark> es la formación de especies nuevas. Una especie es un conjunto de poblaciones cuyos individuos pueden cruzarse entre sí y tener descendencia fértil. Para que se forme una especie nueva es necesario que una población quede <b>aislada reproductivamente</b>. En la <b>especiación alopátrica</b>, la más frecuente, una barrera geográfica (un río, una montaña, el mar) separa dos poblaciones, que acumulan diferencias por mutación, selección y deriva hasta que ya no pueden cruzarse. En la <b>simpátrica</b>, la especie nueva surge en el mismo lugar, por ejemplo por poliploidía en plantas. Hoy se discute si la evolución es gradual o si alterna largos periodos de estabilidad con cambios rápidos (<b>equilibrio puntuado</b>), y se conocen otras fuentes de variación, como la transferencia horizontal de genes y la epigenética.",
    ], svg: L5.pasos("Especiación alopátrica", ["Una barrera separa la población", "Mutación, selección y deriva actúan por separado", "Se acumulan diferencias genéticas", "Aislamiento reproductivo: dos especies"], "var(--leaf)"), v: ["mut-d", "Teorías de la evolución"] },
  ],
  figura: { titulo: "Mutaciones, genética y evolución", items: [["Mutaciones", "génicas, cromosómicas", "genómicas", "fuente de variabilidad"], ["Mendel", "uniformidad", "segregación (3:1)", "independencia (9:3:3:1)"], ["Otras herencias", "codominancia", "alelos múltiples", "ligada al X"], ["Evolución", "selección natural", "deriva, migración", "especiación"]] },
  video: ["mut-c", "Selección natural"],
  ejemplos: [
    ["Cruza dos heterocigotos para el color de la semilla (Aa × Aa; A amarillo). Da las proporciones de la descendencia.", ["Gametos: A y a de cada progenitor.", "Punnett: AA, Aa, Aa, aa."], "Genotipo 1 AA : 2 Aa : 1 aa; fenotipo 3 amarillos : 1 verde."],
    ["Un guisante amarillo se cruza con uno verde y salen 50 % amarillos y 50 % verdes. ¿Genotipo del amarillo?", ["Es un cruzamiento prueba (× aa).", "Si fuera AA, todos serían amarillos.", "Aa × aa → 1/2 Aa : 1/2 aa."], "El amarillo es heterocigoto (Aa)."],
    ["¿Qué proporción de AaBb × AaBb tendrá fenotipo dominante para los dos caracteres?", ["Cada gen por separado: 3/4 dominante.", "Independientes: 3/4 · 3/4."], "9/16."],
    ["Una mujer de grupo A (Iᴬi) y un hombre de grupo B (Iᴮi) tienen hijos. ¿Qué grupos pueden tener?", ["Gametos: Iᴬ, i y Iᴮ, i.", "Combinaciones: IᴬIᴮ, Iᴬi, Iᴮi, ii."], "AB, A, B y 0, cada uno con probabilidad 1/4."],
    ["Una mujer portadora de daltonismo (XᴰXᵈ) y un hombre de visión normal (XᴰY). ¿Probabilidad de un hijo varón daltónico?", ["Hijos varones: reciben Y del padre y X de la madre.", "La madre da Xᴰ o Xᵈ al 50 %.", "Sobre el total de descendientes: 1/4."], "50 % de los hijos varones (1/4 del total)."],
    ["Una mutación cambia el codón GAG (Glu) por GUG (Val) en la hemoglobina. ¿Qué tipo de mutación es y qué consecuencia tiene?", ["Cambio de una base: sustitución (A por U en el ARNm).", "Cambia un aminoácido: sentido erróneo."], "Mutación de sentido erróneo que causa la anemia falciforme."],
  ],
  errores: [
    "Pensar que todas las mutaciones son perjudiciales: muchas son neutras y algunas, ventajosas.",
    "Creer que las mutaciones somáticas se heredan: solo se heredan las de la línea germinal.",
    "Confundir dominante con frecuente: un alelo dominante puede ser raro en la población.",
    "Pensar que el individuo evoluciona: evolucionan las poblaciones, a lo largo de generaciones.",
    "Creer que los organismos cambian porque lo necesitan (idea lamarckista): la variación es previa y al azar, y el ambiente la selecciona.",
    "Olvidar que en la herencia ligada al X los hombres reciben su X de la madre.",
  ],
  ejercicios: {
    b: [
      ["Define mutación y diferencia somática y germinal.", "Cambio heredable en el material genético. Somática: en células del cuerpo, no se hereda. Germinal: en la línea germinal, se transmite."],
      ["Clasifica las mutaciones según su extensión.", "Génicas, cromosómicas (estructurales) y genómicas (numéricas)."],
      ["¿Qué es una mutación silenciosa?", "Sustitución que no cambia el aminoácido por la degeneración del código."],
      ["Cita dos agentes mutagénicos físicos y dos químicos.", "Físicos: UV, rayos X. Químicos: ácido nitroso, componentes del tabaco."],
      ["Define alelo, homocigoto y heterocigoto.", "Alelo: variante de un gen. Homocigoto: dos alelos iguales. Heterocigoto: distintos."],
      ["Diferencia genotipo y fenotipo.", "Genotipo: alelos del individuo. Fenotipo: caracteres observables (genotipo + ambiente)."],
      ["Enuncia la primera ley de Mendel.", "Al cruzar dos razas puras para un carácter, toda la F₁ es uniforme."],
      ["¿Qué es el cruzamiento prueba?", "Cruzar un individuo de fenotipo dominante con un homocigoto recesivo para conocer su genotipo."],
      ["Diferencia herencia intermedia y codominancia.", "Intermedia: fenotipo intermedio (rosa). Codominancia: se expresan ambos alelos (grupo AB)."],
      ["¿Por qué la hemofilia es más frecuente en hombres?", "Es recesiva ligada al X; los hombres tienen un solo X y la manifiestan con un alelo."],
      ["Cita cuatro tipos de pruebas de la evolución.", "Paleontológicas, anatómicas, embriológicas, biogeográficas y moleculares."],
      ["Diferencia órganos homólogos y análogos.", "Homólogos: mismo origen, distinta función. Análogos: distinto origen, misma función (ala de insecto y de ave)."],
    ],
    m: [
      ["Explica por qué una inserción de un nucleótido suele ser más grave que una sustitución.", "Desplaza la pauta de lectura y cambia todos los codones siguientes; la sustitución afecta como mucho a un aminoácido."],
      ["Explica la reparación por escisión.", "Se reconoce el daño, se corta el fragmento, la ADN polimerasa rellena usando la hebra complementaria y la ligasa sella."],
      ["Explica la relación entre mutaciones y cáncer.", "Acumulación de mutaciones en protooncogenes (pasan a oncogenes) y genes supresores (p53) que regulan el ciclo."],
      ["Explica la base cromosómica de las leyes de Mendel.", "Segregación de homólogos en anafase I (2.ª ley) y orientación al azar de bivalentes en metafase I (3.ª ley)."],
      ["Cruza dos plantas de dondiego rosas (RB × RB). Da las proporciones.", "1 roja : 2 rosas : 1 blanca."],
      ["¿Pueden unos padres de grupos A y B tener un hijo de grupo 0? Razona.", "Sí, si ambos son heterocigotos (Iᴬi × Iᴮi): 1/4 serán ii."],
      ["Una pareja sana tiene un hijo daltónico. ¿Quién le transmitió el alelo? Razona.", "La madre, que es portadora; el hijo recibe la Y del padre."],
      ["Explica qué son los genes ligados y cómo se pueden separar.", "Genes del mismo cromosoma que se heredan juntos; el sobrecruzamiento forma gametos recombinantes."],
      ["Compara las teorías de Lamarck y Darwin.", "Lamarck: uso y desuso y herencia de caracteres adquiridos. Darwin: variación al azar y selección natural."],
      ["Explica las aportaciones de la teoría sintética.", "Une Darwin con la genética: la variación viene de mutación y recombinación; la evolución es cambio de frecuencias alélicas en poblaciones."],
      ["Explica qué es la deriva genética y pon un ejemplo.", "Cambio al azar de frecuencias alélicas en poblaciones pequeñas; efecto fundador en poblaciones aisladas."],
      ["Explica la especiación alopátrica.", "Barrera geográfica, divergencia por mutación, selección y deriva, y aislamiento reproductivo."],
    ],
    a: [
      ["(Tipo PAU) En el guisante, liso (L) domina sobre rugoso (l) y amarillo (A) sobre verde (a). Cruza LlAa × llaa y da las proporciones.", "Gametos del dihíbrido: LA, La, lA, la; del otro: la. Descendencia 1:1:1:1: liso-amarillo, liso-verde, rugoso-amarillo, rugoso-verde."],
      ["(Tipo PAU) Un hombre hemofílico y una mujer sana no portadora tienen descendencia. ¿Qué proporción de hijos e hijas será hemofílica o portadora?", "XʰY × XᴴXᴴ: hijas todas portadoras (XᴴXʰ), hijos todos sanos (XᴴY)."],
      ["(Tipo PAU) Explica, según el neodarwinismo, la aparición de bacterias resistentes a los antibióticos.", "Una mutación (o un gen recibido por transferencia) da resistencia; el antibiótico elimina las sensibles; las resistentes se multiplican y su frecuencia aumenta."],
      ["En un árbol, dos padres sanos tienen una hija afectada. ¿El carácter puede ser recesivo ligado al X? Razona.", "No: la hija afectada sería XᵃXᵃ y el padre tendría que ser XᵃY, afectado. Es autosómico recesivo."],
      ["Una pareja de grupos AB y 0 reclama a un niño de grupo 0 en un hospital. ¿Puede ser su hijo?", "No: IᴬIᴮ × ii solo da Iᴬi (A) o Iᴮi (B)."],
      ["En la población de una isla fundada por pocos individuos, una enfermedad rara es muy frecuente. ¿Qué mecanismo lo explica?", "Efecto fundador (deriva genética): algún fundador portaba el alelo y su frecuencia quedó alta por azar."],
      ["Calcula la probabilidad de que una pareja AaBbCc × AaBbCc tenga un hijo aabbcc.", "(1/4)³ = 1/64."],
      ["Dos genes ligados dan un 20 % de gametos recombinantes. Si se cruza AB/ab × ab/ab, ¿qué proporciones se obtienen?", "40 % AB/ab, 40 % ab/ab (parentales), 10 % Ab/ab y 10 % aB/ab (recombinantes)."],
      ["Explica por qué la poliploidía puede formar una especie nueva en una sola generación.", "Un tetraploide no da descendencia fértil con el diploide (los híbridos triploides son estériles): aislamiento reproductivo inmediato (especiación simpátrica)."],
    ],
  },
  quiz: [
    ["Las mutaciones que se heredan son las…", ["germinales", "somáticas", "todas", "ninguna"], 0, "Línea germinal."],
    ["La trisomía 21 es una mutación…", ["genómica", "génica", "cromosómica estructural", "silenciosa"], 0, "Aneuploidía."],
    ["Una translocación es una mutación…", ["cromosómica", "génica", "genómica", "silenciosa"], 0, "Estructura."],
    ["Si aparece un codón de parada, la mutación es…", ["sin sentido", "silenciosa", "de sentido erróneo", "neutra"], 0, "Proteína corta."],
    ["La radiación UV produce…", ["dímeros de timina", "trisomías", "poliploidía", "intrones"], 0, "Cáncer de piel."],
    ["El gen p53 es un…", ["supresor de tumores", "oncogén", "intrón", "alelo dominante"], 0, "Freno."],
    ["Un individuo Aa es…", ["heterocigoto", "homocigoto", "haploide", "recesivo"], 0, "Híbrido."],
    ["La F₂ de Aa × Aa da fenotipos…", ["3:1", "1:2:1", "9:3:3:1", "1:1"], 0, "Dominancia completa."],
    ["La 3.ª ley de Mendel da en F₂…", ["9:3:3:1", "3:1", "1:1", "1:2:1"], 0, "Dihibridismo."],
    ["El grupo AB es ejemplo de…", ["codominancia", "herencia intermedia", "dominancia", "ligada al X"], 0, "Ambos antígenos."],
    ["El genotipo del grupo 0 es…", ["ii", "IᴬIᴮ", "Iᴬi", "IᴮIᴮ"], 0, "Recesivo."],
    ["Los hombres son… para los genes del X", ["hemicigóticos", "homocigotos", "heterocigotos", "triploides"], 0, "Un solo X."],
    ["El daltonismo es…", ["recesivo ligado al X", "dominante autosómico", "ligado al Y", "poligénico"], 0, "Más en hombres."],
    ["Los mapas genéticos se basan en la frecuencia de…", ["recombinación", "mutación", "meiosis II", "deriva"], 0, "Morgan."],
    ["El ala de murciélago y el brazo humano son…", ["homólogos", "análogos", "vestigiales", "idénticos"], 0, "Mismo origen."],
    ["Lamarck defendía la herencia de…", ["caracteres adquiridos", "mutaciones", "genes", "alelos"], 0, "Uso y desuso."],
    ["Darwin llamó al mecanismo de cambio…", ["selección natural", "deriva", "mutación", "uso y desuso"], 0, "1859."],
    ["Según la teoría sintética, evoluciona…", ["la población", "el individuo", "el gen", "la célula"], 0, "Frecuencias alélicas."],
    ["La deriva genética es más fuerte en poblaciones…", ["pequeñas", "grandes", "infinitas", "migratorias"], 0, "Azar."],
    ["La especiación más frecuente es la…", ["alopátrica", "simpátrica", "poliploide", "instantánea"], 0, "Barrera geográfica."],
  ],
  examen: [
    ["Aa × aa da…", ["1/2 Aa : 1/2 aa", "todo Aa", "3:1", "1:2:1"], 0, "Cruzamiento prueba."],
    ["De AaBb × AaBb, la fracción aabb es…", ["1/16", "1/4", "9/16", "3/16"], 0, "1/4 · 1/4."],
    ["Rosa × rosa en dondiego da…", ["1 roja : 2 rosas : 1 blanca", "3 rojas : 1 blanca", "todas rosas", "1:1"], 0, "Intermedia."],
    ["Iᴬi × Iᴮi: probabilidad de grupo 0…", ["1/4", "1/2", "0", "3/4"], 0, "ii."],
    ["XᴴXʰ × XᴴY: hijas portadoras…", ["1/2 de las hijas", "todas", "ninguna", "1/4 de las hijas"], 0, "Reciben Xᴴ del padre."],
    ["Un hijo varón recibe su X de…", ["la madre", "el padre", "ambos", "ninguno"], 0, "El padre da Y."],
    ["Una deleción de 1 nucleótido produce…", ["desplazamiento de la pauta", "mutación silenciosa", "trisomía", "poliploidía"], 0, "Cambian los codones."],
    ["El efecto fundador es un tipo de…", ["deriva genética", "selección natural", "mutación", "migración"], 0, "Azar."],
  ],
  feynman: ["Por qué una sola letra cambiada puede causar una enfermedad", "Cómo se repara el ADN dañado por el sol", "Por qué reaparece el carácter recesivo en la F₂", "Por qué hay más hombres daltónicos que mujeres", "Qué diferencia la idea de Lamarck de la de Darwin", "Cómo se forma una especie nueva"],
  mapa: ["MUTACIÓN, HERENCIA, EVOLUCIÓN", [["Mutaciones", "génicas, cromosómicas, genómicas"], ["Mendel", "3 leyes, Punnett"], ["Otras herencias", "codominancia, ABO, ligada al X"], ["Evolución", "selección, deriva, especiación"]]],
  tarjetas: [
    ["Mutación", "Cambio heredable del material genético."],
    ["Tipos", "Génicas, cromosómicas, genómicas."],
    ["Mutágenos", "UV, rayos X, químicos, virus."],
    ["Cáncer", "Oncogenes + supresores inactivados."],
    ["1.ª ley de Mendel", "Uniformidad de la F₁."],
    ["2.ª ley", "Segregación: F₂ 3:1."],
    ["3.ª ley", "Transmisión independiente: 9:3:3:1."],
    ["Codominancia", "Ambos alelos se expresan: grupo AB."],
    ["Ligada al X", "Hemofilia, daltonismo; más en hombres."],
    ["Pruebas", "Fósiles, homologías, embriones, ADN."],
    ["Darwin", "Variación + lucha + selección natural."],
    ["Neodarwinismo", "Mutación, recombinación, selección, deriva."],
  ],
  glosario: [
    ["Mutación", "Cambio en el material genético que se transmite a las células hijas."],
    ["Mutágeno", "Agente que aumenta la frecuencia de mutaciones."],
    ["Pauta de lectura", "Forma de agrupar los nucleótidos de tres en tres desde el codón de inicio."],
    ["Aneuploidía", "Alteración del número de algunos cromosomas."],
    ["Poliploidía", "Presencia de más de dos juegos completos de cromosomas."],
    ["Oncogén", "Gen mutado que estimula la división celular sin control."],
    ["Alelo", "Cada una de las variantes de un gen."],
    ["Locus", "Lugar que ocupa un gen en un cromosoma."],
    ["Genotipo", "Conjunto de alelos de un individuo."],
    ["Fenotipo", "Conjunto de caracteres observables de un individuo."],
    ["Codominancia", "Expresión simultánea de dos alelos en el heterocigoto."],
    ["Hemicigoto", "Individuo con una sola copia de un gen, como los hombres para los genes del X."],
    ["Órgano homólogo", "Órgano con el mismo origen evolutivo aunque tenga distinta función."],
    ["Selección natural", "Mayor supervivencia y reproducción de los individuos mejor adaptados."],
    ["Deriva genética", "Cambio aleatorio de las frecuencias alélicas, mayor en poblaciones pequeñas."],
    ["Especiación", "Formación de especies nuevas por aislamiento reproductivo."],
  ],
  situacion: {
    titulo: "Selección natural con pinzas y gomas",
    reto: "Vuestro equipo debe simular la selección natural con «pájaros» que usan distintos picos (pinzas, cucharas, palillos) para recoger «semillas» de diferentes tipos y analizar cómo cambian las frecuencias de picos en varias generaciones.",
    pasos: [
      "Repartid los tipos de pico en igual proporción y esparcid semillas de un tipo en la mesa.",
      "Dad 30 segundos para recoger semillas; los que recojan menos de un mínimo «mueren».",
      "Los supervivientes se «reproducen» con su tipo de pico; anotad las frecuencias en cada generación.",
      "Cambiad el tipo de semilla (cambio ambiental) y repetid tres generaciones más.",
      "Representad las frecuencias en una gráfica y relacionadlas con la teoría sintética.",
    ],
    producto: "Un informe con la tabla de frecuencias, la gráfica y la explicación evolutiva.",
    evaluacion: ["Se registran las frecuencias de forma sistemática.", "La gráfica muestra el cambio de frecuencias.", "La explicación usa los conceptos de variación, selección y adaptación.", "Se reconocen los límites del modelo."],
  },
  familias: [
    "Haced un árbol genealógico familiar de un rasgo sencillo, como el lóbulo de la oreja pegado o la capacidad de enrollar la lengua.",
    "Hablad de la protección solar y su relación con las mutaciones y el cáncer de piel.",
    "Visitad un museo de ciencias naturales y buscad fósiles de transición.",
    "Comentad por qué no hay que tomar antibióticos sin receta.",
  ],
  saberes: "bloque «Genética y evolución»: las mutaciones, sus tipos, los agentes mutagénicos y la reparación del ADN; su relación con el cáncer y la evolución; las leyes de Mendel y la resolución de problemas de herencia (dominancia, herencia intermedia, codominancia, alelos múltiples, herencia ligada al sexo, genes ligados); las pruebas y las teorías de la evolución; la selección natural, la deriva genética y la especiación.",
  ideas: [
    "Resolución de problemas de genética con cuadros de Punnett y árboles genealógicos.",
    "Simulación de la selección natural con distintos «picos» y «semillas».",
    "Simulación de la deriva genética con bolas de colores en poblaciones grandes y pequeñas.",
    "Análisis de secuencias de ADN de distintas especies para construir un árbol filogenético.",
  ],
  fuentes: [
    { t: "Understanding Evolution (UC Berkeley), en español", url: "https://evolution.berkeley.edu/evolibrary/article/0_0_0/evo_toc_01_sp" },
  ],
});
