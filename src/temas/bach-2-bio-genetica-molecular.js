// Biología 2º Bachillerato · Genética molecular: replicación, transcripción y traducción (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, arbol } = require("./_bach2-bio");

// Dogma central.
const dogmaSVG = marco("Dogma central de la biología molecular: el ADN se replica, se transcribe a ARN y el ARN se traduce a proteína; algunos virus hacen transcripción inversa de ARN a ADN", `
  <rect x="14" y="70" width="60" height="40" rx="10" fill="var(--pen)"/>${T(44, 95, "ADN", { fs: 14, b: true, c: "#fff" })}
  <rect x="100" y="70" width="60" height="40" rx="10" fill="var(--red)"/>${T(130, 95, "ARN", { fs: 14, b: true, c: "#fff" })}
  <rect x="186" y="70" width="66" height="40" rx="10" fill="var(--leaf)"/>${T(219, 95, "Proteína", { fs: 12, b: true, c: "#fff" })}
  <path d="M30 68 C 10 30, 78 30, 58 68" fill="none" stroke="var(--pen)" stroke-width="2.4"/><path d="M53 62 L 58 70 L 63 61" fill="var(--pen)"/>${T(44, 26, "replicación", { fs: 10, b: true, c: "var(--pen)" })}
  <path d="M76 84 H 96" stroke="var(--ink)" stroke-width="2.6"/><path d="M92 79 L 99 84 L 92 89" fill="var(--ink)"/>
  <path d="M162 90 H 182" stroke="var(--ink)" stroke-width="2.6"/><path d="M178 85 L 185 90 L 178 95" fill="var(--ink)"/>
  ${T(100, 132, "transcripción", { fs: 9.5, b: true, c: "var(--red)" })}${T(186, 62, "traducción", { fs: 9.5, b: true, c: "var(--leaf)" })}
  <path d="M100 100 Q 86 136 70 112" fill="none" stroke="var(--muted)" stroke-width="1.8" stroke-dasharray="4 3"/><path d="M68 120 L 70 110 L 76 118" fill="var(--muted)"/>
  ${T(110, 160, "transcripción inversa (retrovirus)", { fs: 9.5, c: "var(--muted)" })}`);

// Horquilla de replicación.
const horquillaSVG = marco("Horquilla de replicación: la helicasa abre la doble hélice; en la hebra conductora la ADN polimerasa sintetiza de forma continua, y en la retardada, en fragmentos de Okazaki a partir de cebadores de ARN", `
  <path d="M8 90 H 90" stroke="var(--pen)" stroke-width="5"/><path d="M8 100 H 90" stroke="var(--pen)" stroke-width="5"/>
  <path d="M90 90 L 250 36 M90 100 L 250 154" stroke="var(--pen)" stroke-width="4"/>
  <circle cx="92" cy="95" r="10" fill="var(--sun)"/>${T(92, 124, "helicasa", { fs: 9.5, b: true, c: "#b45309" })}
  <path d="M244 46 L 118 88" stroke="var(--leaf)" stroke-width="3.4"/><path d="M124 82 L 114 90 L 127 91" fill="var(--leaf)"/>${T(150, 24, "conductora (continua)", { fs: 9.5, b: true, c: "var(--leaf)" })}
  ${[[130, 112], [170, 126], [210, 140]].map(([x, y]) => `<path d="M${x} ${y + 4} L ${x + 34} ${y + 16}" stroke="var(--red)" stroke-width="3.4"/><rect x="${x - 2}" y="${y}" width="8" height="8" fill="var(--sun)"/>`).join("")}
  ${T(176, 172, "retardada: fragmentos de Okazaki", { fs: 9.5, b: true, c: "var(--red)" })}${T(40, 80, "5'", { fs: 9 })}${T(40, 116, "3'", { fs: 9 })}`);

// Traducción en el ribosoma.
const riboSVG = marco("Traducción: el ribosoma se desplaza sobre el ARNm de 5' a 3'; los ARNt, con su anticodón complementario del codón, llevan los aminoácidos, que se unen por enlaces peptídicos formando la cadena", `
  <path d="M6 132 H 254" stroke="var(--red)" stroke-width="4"/>${T(14, 150, "5'", { fs: 10, b: true })}${T(246, 150, "3'", { fs: 10, b: true })}
  ${["AUG", "GCU", "UUC", "GGA", "UAA"].map((c, i) => T(40 + i * 46, 150, c, { fs: 10, b: true, c: "var(--red)" })).join("")}
  <ellipse cx="110" cy="118" rx="64" ry="20" fill="var(--pen)" fill-opacity=".35"/><ellipse cx="110" cy="80" rx="72" ry="34" fill="var(--pen)" fill-opacity=".22" stroke="var(--pen)"/>
  <rect x="78" y="78" width="22" height="40" rx="4" fill="var(--leaf)" fill-opacity=".85"/><rect x="124" y="78" width="22" height="40" rx="4" fill="var(--leaf)" fill-opacity=".85"/>
  ${T(89, 112, "P", { fs: 10, b: true, c: "#fff" })}${T(135, 112, "A", { fs: 10, b: true, c: "#fff" })}
  ${[[89, 66, "Met"], [70, 46, ""], [135, 66, "Ala"]].map(([x, y, t]) => t ? `<circle cx="${x}" cy="${y}" r="11" fill="var(--sun)"/>${T(x, y + 4, t, { fs: 8.5, b: true })}` : "").join("")}
  <path d="M100 66 H 124" stroke="var(--ink)" stroke-width="2"/>${T(112, 40, "enlace peptídico", { fs: 9.5, b: true })}
  ${T(214, 64, "ribosoma", { fs: 10, b: true, c: "var(--pen)" })}${T(214, 104, "ARNt", { fs: 10, b: true, c: "var(--leaf)" })}`);

// Operón lac.
const operonSVG = marco("Operón lac: el gen regulador produce un represor que se une al operador y bloquea la transcripción; cuando hay lactosa, esta se une al represor, lo inactiva y la ARN polimerasa transcribe los genes estructurales", `
  <path d="M6 110 H 254" stroke="var(--pen)" stroke-width="3"/>
  <rect x="10" y="98" width="34" height="24" fill="var(--muted)"/>${T(27, 114, "R", { fs: 10, b: true, c: "#fff" })}
  <rect x="62" y="98" width="30" height="24" fill="var(--sun)"/>${T(77, 114, "P", { fs: 10, b: true })}
  <rect x="92" y="98" width="26" height="24" fill="var(--red)"/>${T(105, 114, "O", { fs: 10, b: true, c: "#fff" })}
  ${["Z", "Y", "A"].map((g, i) => `<rect x="${124 + i * 42}" y="98" width="38" height="24" fill="var(--leaf)"/>${T(143 + i * 42, 114, g, { fs: 10, b: true, c: "#fff" })}`).join("")}
  <path d="M84 96 q 10 -26 26 -20 q 12 6 4 20 z" fill="var(--inf)"/>${T(98, 60, "represor", { fs: 10, b: true, c: "var(--inf)" })}
  ${T(27, 140, "regulador", { fs: 9, c: "var(--muted)" })}${T(77, 140, "promotor", { fs: 9, c: "#b45309" })}${T(105, 152, "operador", { fs: 9, c: "var(--red)" })}${T(186, 140, "genes estructurales", { fs: 9.5, b: true, c: "var(--leaf)" })}
  ${T(186, 40, "sin lactosa: OFF", { fs: 10, b: true, c: "var(--red)" })}${T(186, 58, "con lactosa: ON", { fs: 10, b: true, c: "var(--leaf)" })}`);

module.exports = tema({
  titulo: "Genética molecular: replicación, transcripción y traducción",
  minutos: 135,
  secciones: [4, 4, 4],
  objetivos: [
    "Explicar el ADN como portador de la información genética y el dogma central de la biología molecular",
    "Describir el mecanismo de replicación semiconservativa del ADN en procariotas y eucariotas",
    "Explicar la transcripción y la maduración del ARN en las células eucariotas",
    "Describir las características del código genético y usar la tabla de codones",
    "Explicar las etapas de la traducción y el papel del ARNm, el ARNt y los ribosomas",
    "Explicar la regulación de la expresión génica en procariotas (operón) y en eucariotas",
  ],
  claves: ["gen", "dogma central", "replicación", "semiconservativa", "ADN polimerasa", "fragmentos de Okazaki", "transcripción", "ARN polimerasa", "promotor", "intrón", "exón", "maduración", "código genético", "codón", "anticodón", "traducción", "operón"],
  pregunta: {
    texto: "Cada célula de tu cuerpo tiene el mismo ADN. ¿Cómo es posible que una neurona y una célula de la piel sean tan distintas?",
    respuesta: "Porque no todas usan los mismos genes. Todas tus células tienen los mismos 20 000 genes, pero cada tipo celular <mark>expresa</mark> solo una parte: transcribe esos genes a ARN y los traduce a proteínas, mientras mantiene los demás «apagados». Las neuronas fabrican neurotransmisores y canales iónicos; las células de la piel, queratina. La <b>regulación de la expresión génica</b>, mediante factores de transcripción, la condensación de la cromatina y la metilación del ADN, decide qué genes se leen en cada célula y en cada momento.",
  },
  lectura: {
    titulo: "El experimento más bello de la biología",
    html: `<p>En 1953, Watson y Crick propusieron la doble hélice del ADN y comentaron, con una famosa frase, que el apareamiento de bases sugería de inmediato un mecanismo de copia: cada hebra podría servir de molde para fabricar una nueva. Pero había otras hipótesis. Quizá la doble hélice original se conservaba entera y se fabricaba otra completamente nueva (replicación conservativa), o quizá las hebras nuevas y viejas se mezclaban a trozos (dispersiva). ¿Cómo distinguirlo?</p><p>En 1958, dos jóvenes investigadores, Matthew Meselson y Franklin Stahl, cultivaron bacterias <i>E. coli</i> durante muchas generaciones en un medio con nitrógeno pesado (¹⁵N), de modo que todo su ADN era más denso. Luego las pasaron a un medio con nitrógeno normal (¹⁴N) y, tras cada división, extrajeron el ADN y lo centrifugaron en un gradiente de cloruro de cesio, que separa las moléculas por su densidad. Tras una generación apareció una sola banda intermedia; tras dos, una intermedia y una ligera. El resultado solo encajaba con la replicación semiconservativa. Su experimento, sencillo y concluyente, ha sido llamado «el más bello de la biología». En este tema estudiarás cómo se copia el ADN y cómo su información se convierte en proteínas.</p>`,
  },
  bloques: [
    { h: "El ADN, portador de la información genética", p: [
      "A principios del siglo XX se sabía que los genes estaban en los cromosomas, pero se pensaba que eran proteínas, porque parecían más variadas que el ADN. Varios experimentos demostraron lo contrario. En 1928, <b>Griffith</b> observó que unas bacterias neumococo inofensivas se transformaban en virulentas al mezclarlas con bacterias virulentas muertas por calor: algún «principio transformante» pasaba de unas a otras. En 1944, <b>Avery, MacLeod y McCarty</b> demostraron que ese principio era el ADN: al destruirlo con enzimas, la transformación desaparecía. En 1952, <b>Hershey y Chase</b> marcaron virus bacteriófagos con azufre y fósforo radiactivos y comprobaron que solo el ADN (con fósforo) entraba en la bacteria.",
      "Hoy definimos un <mark>gen</mark> como un fragmento de ADN que contiene la información para sintetizar una cadena polipeptídica o una molécula de ARN funcional. La información genética fluye en una dirección que Francis Crick llamó el <mark>dogma central</mark> de la biología molecular: el ADN se copia a sí mismo (<b>replicación</b>), su información se copia en ARN (<b>transcripción</b>) y el ARN se usa para fabricar proteínas (<b>traducción</b>). Más tarde se descubrieron excepciones: los <b>retrovirus</b>, como el VIH, tienen una enzima, la transcriptasa inversa, que copia ARN en ADN, y algunos virus de ARN replican su ARN directamente.",
    ], svg: dogmaSVG },
    { h: "La replicación semiconservativa", p: [
      "La <mark>replicación</mark> es el proceso por el que el ADN se copia antes de la división celular, para que cada célula hija reciba una copia completa. Es <b>semiconservativa</b>: cada nueva doble hélice está formada por una hebra antigua, que sirve de molde, y una nueva, complementaria. Así lo demostraron Meselson y Stahl en 1958. Las bases se emparejan siempre del mismo modo, A con T y G con C, de modo que la secuencia de una hebra determina la de la otra. La replicación es extremadamente fiel: se comete aproximadamente un error por cada mil millones de nucleótidos copiados.",
      "La replicación comienza en lugares concretos, los <b>orígenes de replicación</b>. Allí la doble hélice se abre y forma una <b>burbuja</b> con dos <b>horquillas de replicación</b> que avanzan en sentidos opuestos (replicación bidireccional). El cromosoma circular de una bacteria tiene un solo origen, mientras que cada cromosoma eucariota, mucho más largo, tiene miles; si tuviera solo uno, tardaría semanas en copiarse. Las nuevas hebras se sintetizan por la unión de <b>desoxirribonucleótidos trifosfato</b> (dATP, dGTP, dCTP, dTTP), que aportan a la vez los nucleótidos y la energía para formar los enlaces.",
    ], svg: L6.tabla("Experimento de Meselson y Stahl", ["Generación", "Bandas de ADN", "Interpretación"], [["0 (¹⁵N)", "1 pesada", "ADN marcado"], ["1 (en ¹⁴N)", "1 intermedia", "híbrida ¹⁵N/¹⁴N"], ["2", "intermedia + ligera", "semiconservativa"], ["3", "intermedia + ligera", "más ligera"]]), v: ["gen-a", "Replicación del ADN"] },
    { h: "El mecanismo de la replicación", p: [
      "En la replicación intervienen muchas enzimas. La <b>helicasa</b> rompe los puentes de hidrógeno y separa las dos hebras. Las <b>topoisomerasas</b> eliminan las tensiones de superenrollamiento que se acumulan por delante de la horquilla. Las <b>proteínas SSB</b> se unen a las hebras sencillas y evitan que vuelvan a emparejarse. Las <mark>ADN polimerasas</mark> sintetizan las hebras nuevas, pero tienen dos limitaciones: solo pueden <b>añadir nucleótidos a un extremo 3' libre</b>, por lo que necesitan un fragmento previo, y solo sintetizan en <b>sentido 5' → 3'</b>. Por eso, una enzima llamada <b>primasa</b> fabrica primero un pequeño <b>cebador</b> de ARN.",
      "Como las dos hebras del ADN son antiparalelas, la síntesis es distinta en cada una. En la <b>hebra conductora</b> o adelantada, la polimerasa avanza en el mismo sentido que la horquilla y sintetiza de forma <b>continua</b>. En la <b>hebra retardada</b>, la síntesis va en sentido contrario a la horquilla y se hace de forma <b>discontinua</b>, en pequeños fragmentos llamados <b>fragmentos de Okazaki</b>, cada uno con su cebador. Después, otra ADN polimerasa elimina los cebadores y rellena los huecos con ADN, y la <b>ADN ligasa</b> une los fragmentos. Las ADN polimerasas tienen además actividad <b>correctora</b>: si añaden un nucleótido equivocado, lo detectan, lo retiran y lo sustituyen.",
    ], svg: horquillaSVG },
    { h: "Replicación en eucariotas y telómeros", p: [
      "La replicación en las células eucariotas es parecida a la de las procariotas, con algunas diferencias. El ADN eucariota es mucho más largo y está unido a histonas, por lo que la replicación es más lenta (unos 50 nucleótidos por segundo frente a 1000 en bacterias), y se compensa con muchos orígenes de replicación. Hay más tipos de ADN polimerasas, y al avanzar la horquilla se deben retirar y volver a colocar los nucleosomas, con histonas viejas y nuevas. Además, la replicación ocurre en la fase S del ciclo, y cada origen se usa una sola vez por ciclo.",
      "Un problema exclusivo de los cromosomas lineales es la replicación de los extremos. Cuando se elimina el último cebador de la hebra retardada, la polimerasa no puede rellenar el hueco, porque no hay un extremo 3' previo; por eso los cromosomas se acortan un poco en cada replicación. Los extremos, los <mark>telómeros</mark>, son secuencias repetidas sin genes (TTAGGG en humanos) que se van perdiendo sin dañar información útil. En las células que se dividen mucho, como las células madre y las germinales, la enzima <b>telomerasa</b>, que lleva su propio molde de ARN, alarga de nuevo los telómeros. El acortamiento de los telómeros está relacionado con el envejecimiento celular, y muchas células cancerosas reactivan la telomerasa.",
    ], svg: L5.compara("Replicación", ["Procariotas", ["1 origen", "cromosoma circular", "rápida", "sin telómeros"]], ["Eucariotas", ["miles de orígenes", "con histonas", "más lenta", "telómeros, telomerasa"]], "var(--pen)", "var(--leaf)") },
    { h: "La transcripción", p: [
      "La <mark>transcripción</mark> es la síntesis de una molécula de ARN a partir de una de las hebras del ADN, que sirve de molde. La realiza la <b>ARN polimerasa</b>, que no necesita cebador, usa ribonucleótidos trifosfato (con U en lugar de T) y sintetiza en sentido 5' → 3', leyendo el molde de 3' a 5'. Solo se transcribe una de las dos hebras de cada gen; la otra, de secuencia igual a la del ARN (salvo T por U), se llama hebra codificante. El proceso tiene tres etapas.",
      "En la <b>iniciación</b>, la ARN polimerasa reconoce y se une a una secuencia del ADN situada antes del gen, el <b>promotor</b>, que en eucariotas contiene la caja TATA; para ello necesita la ayuda de unas proteínas, los <b>factores de transcripción</b>. Después abre la doble hélice. En la <b>elongación</b>, la polimerasa avanza por el gen, añadiendo nucleótidos complementarios del molde, y la doble hélice se vuelve a cerrar detrás. En la <b>terminación</b>, al llegar a una secuencia de terminación, la polimerasa se separa y libera el ARN. En procariotas hay una sola ARN polimerasa; en eucariotas hay tres: la I fabrica el ARNr, la II el ARNm y la III el ARNt y otros ARN pequeños.",
    ], svg: L5.pasos("Etapas de la transcripción", ["Iniciación: la ARN pol. se une al promotor", "Abre la doble hélice", "Elongación: copia el molde 3'→5'", "Terminación: libera el ARN"], "var(--red)"), v: ["gen-b", "Transcripción"] },
    { h: "Maduración del ARN en eucariotas", p: [
      "En las bacterias, el ARNm puede traducirse incluso antes de terminar de transcribirse, porque no hay núcleo que separe ambos procesos. En los eucariotas, en cambio, la transcripción da un <b>transcrito primario</b> o pre-ARNm que debe <mark>madurar</mark> en el núcleo antes de salir al citoplasma. Primero, en el extremo 5' se añade una <b>caperuza</b> de metil-guanosina, que protege el ARN y es reconocida por el ribosoma. En el extremo 3' se añade una <b>cola de poli-A</b>, de unos 200 nucleótidos de adenina, que aumenta su estabilidad.",
      "Lo más sorprendente de los genes eucariotas es que son <b>fragmentados</b>: las secuencias que codifican la proteína, los <mark>exones</mark>, están interrumpidas por secuencias no codificantes, los <mark>intrones</mark>. En la maduración, un complejo de ribonucleoproteínas llamado <b>espliceosoma</b> corta los intrones y empalma los exones: es el <b>corte y empalme</b> o <i>splicing</i>. Un mismo gen puede madurar de formas distintas, uniendo diferentes combinaciones de exones (<b>splicing alternativo</b>), de modo que fabrica varias proteínas. Así se explica que, con solo unos 20 000 genes, el ser humano pueda producir más de 100 000 proteínas distintas.",
    ], svg: L5.pasos("Maduración del pre-ARNm", ["Caperuza en el extremo 5'", "Cola de poli-A en el extremo 3'", "Se cortan los intrones (espliceosoma)", "Se unen los exones y sale al citoplasma"], "var(--pen)") },
    { h: "El código genético", p: [
      "La traducción convierte una secuencia de nucleótidos del ARNm en una secuencia de aminoácidos. La clave para hacerlo es el <mark>código genético</mark>, la correspondencia entre los tripletes de bases y los aminoácidos. Cada grupo de tres nucleótidos del ARNm, llamado <b>codón</b>, indica un aminoácido. Como hay cuatro bases, existen 4³ = <b>64 codones</b> posibles: 61 codifican aminoácidos y 3 (UAA, UAG y UGA) son <b>codones de terminación</b>, que no codifican ningún aminoácido e indican el final. El codón <b>AUG</b> es el de iniciación y codifica la metionina. El código se descifró entre 1961 y 1966, gracias a Nirenberg, Matthaei, Ochoa y Khorana.",
      "El código genético tiene varias características. Es <b>universal</b>: es casi el mismo en todos los seres vivos, desde las bacterias hasta los humanos (con pequeñas excepciones en mitocondrias), lo que indica un origen común de la vida y permite que una bacteria fabrique insulina humana. Es <b>degenerado</b>: casi todos los aminoácidos están codificados por varios codones (sinónimos), que suelen diferir en la tercera base, lo que amortigua el efecto de las mutaciones. No es <b>ambiguo</b>: cada codón indica un solo aminoácido. Y no tiene <b>solapamientos</b> ni comas: se lee de forma continua, de tres en tres, a partir del codón de inicio, que fija la pauta de lectura.",
    ], svg: L6.radial("Características del código", "CÓDIGO", ["Tripletes", "Universal", "Degenerado", "No ambiguo", "Sin solapar", "AUG inicio"], "var(--pen)"), v: ["gen-d", "El código genético"] },
    { h: "Los protagonistas de la traducción", p: [
      "La <mark>traducción</mark> o síntesis de proteínas ocurre en los <b>ribosomas</b>, en el citoplasma o en el retículo endoplasmático rugoso. Intervienen varios tipos de moléculas. El <b>ARN mensajero</b> lleva la información, en forma de codones, desde el núcleo. Los <b>ribosomas</b>, formados por ARNr y proteínas, tienen dos subunidades y tres sitios de unión para los ARNt: el sitio <b>A</b> (aminoacil), donde entra el ARNt con el aminoácido; el <b>P</b> (peptidil), donde está el ARNt con la cadena en crecimiento; y el <b>E</b> (salida). El ARNr de la subunidad mayor cataliza la formación del enlace peptídico: es una ribozima.",
      "Los <b>ARN de transferencia</b> son los «traductores»: cada uno tiene en un extremo un <b>anticodón</b>, tres bases complementarias de un codón del ARNm, y en el extremo 3' se une el aminoácido correspondiente. Antes de la traducción, los aminoácidos se <b>activan</b>: unas enzimas, las <b>aminoacil-ARNt sintetasas</b>, unen cada aminoácido a su ARNt con gasto de ATP. Hay una sintetasa para cada aminoácido, que reconoce con gran precisión tanto el aminoácido como sus ARNt; de ellas depende, en realidad, que el código se lea correctamente. Gracias a cierta flexibilidad en el emparejamiento de la tercera base (el balanceo), unos 45 ARNt bastan para leer los 61 codones.",
    ], svg: L6.tabla("Moléculas de la traducción", ["Molécula", "Función"], [["ARNm", "lleva los codones"], ["ARNt", "anticodón + aminoácido"], ["Ribosoma", "sitios A, P, E; enlace peptídico"], ["Sintetasas", "unen aa a su ARNt (ATP)"]]) },
    { h: "Las etapas de la traducción", p: [
      "En la <b>iniciación</b>, la subunidad menor del ribosoma se une al ARNm por su extremo 5' (en eucariotas, reconoce la caperuza) y lo recorre hasta encontrar el codón <b>AUG</b>. Allí se une el ARNt iniciador, que lleva metionina (formil-metionina en bacterias), y después la subunidad mayor, de modo que el ARNt iniciador queda en el sitio P. Este proceso necesita factores de iniciación y energía en forma de GTP.",
      "En la <b>elongación</b>, un ARNt con su aminoácido entra en el sitio A si su anticodón es complementario del codón. La subunidad mayor forma un <b>enlace peptídico</b> entre la cadena del sitio P y el aminoácido del sitio A. Después, el ribosoma se desplaza un codón hacia el extremo 3' (<b>translocación</b>): el ARNt vacío pasa al sitio E y sale, el que lleva la cadena pasa al P, y el A queda libre para el siguiente. Cada ciclo consume GTP y añade un aminoácido. En la <b>terminación</b>, al llegar un codón de parada al sitio A, se une un factor de liberación, la cadena se separa y el ribosoma se disocia. Varios ribosomas pueden traducir a la vez el mismo ARNm, formando un <b>polisoma</b>. Después, la proteína se pliega, a veces con ayuda de chaperonas, y puede modificarse en el retículo y el Golgi.",
    ], svg: riboSVG, v: ["gen-c", "Traducción"] },
    { h: "Diferencias entre procariotas y eucariotas", p: [
      "La expresión de los genes sigue el mismo esquema en todos los seres vivos, pero hay diferencias importantes entre procariotas y eucariotas. En las <b>procariotas</b>, la transcripción y la traducción ocurren en el mismo compartimento, el citoplasma, y al mismo tiempo: los ribosomas empiezan a traducir el ARNm mientras aún se está transcribiendo. Sus genes no tienen intrones y el ARNm no madura. Además, un mismo ARNm suele contener la información de varios genes relacionados (es <b>policistrónico</b>), que se transcriben juntos.",
      "En las <b>eucariotas</b>, la transcripción ocurre en el núcleo y la traducción en el citoplasma, separadas en el espacio y en el tiempo. El ARNm sufre maduración (caperuza, cola de poli-A y corte de intrones) y cada uno suele llevar la información de un solo gen (<b>monocistrónico</b>). Los ribosomas son de mayor tamaño (80S frente a 70S) y el aminoácido iniciador es la metionina, no la formil-metionina. Estas diferencias tienen aplicaciones: muchos <b>antibióticos</b>, como la estreptomicina o la tetraciclina, bloquean los ribosomas 70S de las bacterias sin afectar a los 80S de nuestras células.",
    ], svg: L6.tabla("Expresión génica", ["Rasgo", "Procariotas", "Eucariotas"], [["Lugar", "citoplasma", "núcleo y citoplasma"], ["Intrones", "no", "sí, splicing"], ["ARNm", "policistrónico", "monocistrónico"], ["Ribosomas", "70S", "80S"]]), v: ["gen-f", "Síntesis de proteínas"] },
    { h: "Regulación génica en procariotas: el operón", p: [
      "Las células no fabrican todas sus proteínas continuamente: sería un despilfarro. La <mark>regulación de la expresión génica</mark> permite fabricar solo las que se necesitan en cada momento. En las bacterias, el modelo clásico es el <b>operón</b>, propuesto por <b>Jacob y Monod</b> en 1961, por el que recibieron el Nobel. Un operón es un conjunto de <b>genes estructurales</b> que se transcriben juntos, controlados por un <b>promotor</b> común y un <b>operador</b>, una secuencia a la que puede unirse una proteína represora fabricada por un <b>gen regulador</b>.",
      "El <b>operón lac</b> de <i>E. coli</i> contiene los genes de las enzimas que degradan la lactosa. Es un operón <b>inducible</b>. Sin lactosa, el represor está unido al operador e impide que la ARN polimerasa transcriba: los genes están apagados, porque no hacen falta. Cuando hay lactosa, un derivado suyo se une al represor y cambia su forma, de modo que este se suelta del operador; la polimerasa transcribe los genes y la bacteria fabrica las enzimas. Cuando la lactosa se agota, el represor vuelve a unirse. Otros operones, como el del triptófano, son <b>represibles</b>: están activos normalmente y se apagan cuando el producto final, el triptófano, abunda y activa al represor.",
    ], svg: operonSVG, v: ["gen-e", "El operón lac"] },
    { h: "Regulación génica en eucariotas", p: [
      "En los organismos pluricelulares, todas las células tienen los mismos genes, pero cada tipo celular expresa solo una parte: es la base de la <b>diferenciación celular</b>. La regulación es más compleja que en las bacterias y ocurre en muchos niveles. En el nivel de la <b>cromatina</b>, los genes situados en la heterocromatina, muy condensada, no se transcriben; la condensación depende de modificaciones químicas de las histonas (acetilación, metilación) y de la <b>metilación del ADN</b>, que suele silenciar los genes. Estas marcas, que no cambian la secuencia de bases pero se heredan al dividirse la célula, son el objeto de la <b>epigenética</b>.",
      "En el nivel de la <b>transcripción</b>, la principal forma de control, los <b>factores de transcripción</b> se unen al promotor y a secuencias reguladoras, a veces muy alejadas del gen, llamadas potenciadores (<i>enhancers</i>), y activan o reprimen la transcripción. Muchas hormonas actúan así: las hormonas esteroideas se unen a receptores que funcionan como factores de transcripción. Hay además control en la <b>maduración</b> (splicing alternativo), en la <b>estabilidad del ARNm</b> (por ejemplo, mediante pequeños ARN de interferencia que lo degradan) y en la <b>traducción</b> y la actividad de las proteínas. La epigenética explica, por ejemplo, por qué dos gemelos idénticos pueden desarrollar enfermedades distintas a lo largo de la vida.",
    ], svg: arbol("Niveles de regulación en eucariotas", "REGULACIÓN", [["Cromatina", "epigenética"], ["Transcripción", "factores, enhancers"], ["Postranscrip.", "splicing, ARNi"]], "var(--pen)") },
  ],
  figura: { titulo: "Genética molecular", items: [["Replicación", "semiconservativa", "ADN polimerasa", "Okazaki"], ["Transcripción", "ARN polimerasa", "promotor", "maduración"], ["Traducción", "código genético", "ribosoma, ARNt", "A-P-E"], ["Regulación", "operón lac", "factores de transcr.", "epigenética"]] },
  video: ["gen-f", "Síntesis de proteínas: transcripción y traducción"],
  ejemplos: [
    ["Escribe la hebra complementaria de 5'-ATGCTTAGC-3'.", ["Emparejamos A-T y G-C.", "La complementaria es antiparalela: se escribe de 5' a 3' invirtiendo el orden."], "5'-GCTAAGCAT-3'."],
    ["La hebra molde de un gen es 3'-TACGGATTC-5'. Escribe el ARNm.", ["El ARNm es complementario del molde, con U en vez de T.", "TAC → AUG; GGA → CCU; TTC → AAG."], "5'-AUGCCUAAG-3'."],
    ["Traduce el ARNm 5'-AUG GCU UUC GGA UAA-3' (Met, Ala, Phe, Gly, parada).", ["Se lee de 5' a 3' de tres en tres desde AUG.", "AUG Met, GCU Ala, UUC Phe, GGA Gly, UAA fin."], "Met-Ala-Phe-Gly (4 aminoácidos)."],
    ["Indica los anticodones de los ARNt que leen los codones AUG y GCU.", ["El anticodón es complementario y antiparalelo.", "AUG → 3'-UAC-5'; GCU → 3'-CGA-5'."], "UAC y CGA (escritos 3' → 5')."],
    ["Tras dos generaciones en ¹⁴N, partiendo de ADN con ¹⁵N, ¿qué proporción de moléculas es híbrida? ¿Y tras tres?", ["Generación 1: 2 híbridas (100 %).", "Generación 2: 2 híbridas y 2 ligeras (50 %).", "Generación 3: 2 híbridas de 8 (25 %)."], "50 % tras dos generaciones y 25 % tras tres."],
    ["Una proteína tiene 300 aminoácidos. ¿Cuántos nucleótidos tiene como mínimo su ARNm maduro codificante?", ["300 codones × 3 = 900.", "Más el codón de parada: 3."], "903 nucleótidos codificantes (sin contar caperuza, cola ni zonas no traducidas)."],
  ],
  errores: [
    "Pensar que la ADN polimerasa puede empezar una hebra sola: necesita un cebador con un extremo 3' libre.",
    "Decir que la hebra retardada se sintetiza de 3' a 5': todas se sintetizan de 5' a 3', pero la retardada lo hace a trozos.",
    "Confundir codón y anticodón: el codón está en el ARNm y el anticodón en el ARNt.",
    "Creer que todo el ADN se transcribe en el ARNm maduro: los intrones se eliminan.",
    "Pensar que el código degenerado es ambiguo: varios codones dan un aminoácido, pero cada codón da solo uno.",
    "Olvidar que las cadenas son antiparalelas al escribir complementarias y ARN.",
  ],
  ejercicios: {
    b: [
      ["¿Qué demostraron Avery, MacLeod y McCarty?", "Que el principio transformante de Griffith era el ADN."],
      ["Enuncia el dogma central de la biología molecular.", "ADN → (replicación) ADN; ADN → (transcripción) ARN → (traducción) proteína."],
      ["¿Qué significa que la replicación sea semiconservativa?", "Cada molécula hija tiene una hebra antigua y una nueva."],
      ["Indica la función de la helicasa, la primasa y la ligasa.", "Helicasa: separa las hebras. Primasa: fabrica cebadores de ARN. Ligasa: une los fragmentos de Okazaki."],
      ["¿Qué son los fragmentos de Okazaki?", "Segmentos de ADN que forman la hebra retardada de manera discontinua."],
      ["¿Qué hace la telomerasa?", "Alarga los telómeros usando su propio molde de ARN."],
      ["¿Qué es el promotor?", "Secuencia del ADN a la que se une la ARN polimerasa para iniciar la transcripción."],
      ["Diferencia intrón y exón.", "Exón: parte codificante que queda en el ARNm. Intrón: secuencia no codificante que se elimina."],
      ["¿Cuántos codones hay y cuántos son de terminación?", "64; 3 de terminación (UAA, UAG, UGA)."],
      ["¿Qué significa que el código sea universal?", "Que es el mismo en casi todos los seres vivos."],
      ["Indica los tres sitios del ribosoma.", "A (entra el aminoacil-ARNt), P (peptidil), E (salida)."],
      ["¿Qué es un operón?", "Conjunto de genes estructurales con un promotor y un operador comunes, controlados por un gen regulador."],
    ],
    m: [
      ["Explica el experimento de Hershey y Chase.", "Marcaron fagos con ³⁵S (proteínas) y ³²P (ADN); solo el ³²P entró en las bacterias: el material genético es ADN."],
      ["Explica por qué la replicación es continua en una hebra y discontinua en la otra.", "La polimerasa solo sintetiza 5' → 3'; como las hebras son antiparalelas, en una avanza con la horquilla y en la otra en sentido contrario, a fragmentos."],
      ["Explica el problema de la replicación de los extremos.", "Al quitar el último cebador de la retardada no se puede rellenar; los cromosomas se acortan en cada replicación."],
      ["Describe las etapas de la transcripción.", "Iniciación (ARN pol. + factores en el promotor), elongación (síntesis 5'→3' copiando el molde), terminación (secuencia de fin)."],
      ["Explica la maduración del ARNm eucariota.", "Caperuza 5', cola poli-A 3' y splicing de intrones en el espliceosoma."],
      ["Explica qué es el splicing alternativo y su importancia.", "Distintas combinaciones de exones de un gen dan varias proteínas; explica el gran número de proteínas con pocos genes."],
      ["Explica qué significa que el código esté degenerado y su ventaja.", "Varios codones por aminoácido; muchas mutaciones en la tercera base no cambian el aminoácido."],
      ["Explica la activación de los aminoácidos.", "Las aminoacil-ARNt sintetasas unen cada aminoácido a su ARNt con gasto de ATP."],
      ["Describe la elongación de la traducción.", "Entra un aminoacil-ARNt al sitio A, se forma el enlace peptídico con la cadena del P, y translocación del ribosoma un codón."],
      ["Compara la expresión génica en procariotas y eucariotas.", "Procariotas: citoplasma, simultáneas, sin intrones, policistrónico, 70S. Eucariotas: separadas, maduración, monocistrónico, 80S."],
      ["Explica el funcionamiento del operón lac.", "Sin lactosa, el represor bloquea el operador. Con lactosa, esta inactiva al represor y se transcriben los genes."],
      ["¿Qué es la epigenética? Pon un ejemplo.", "Cambios heredables en la expresión sin cambiar la secuencia: metilación del ADN, modificación de histonas, inactivación del X."],
    ],
    a: [
      ["(Tipo PAU) A partir de la hebra codificante 5'-ATG AAA CCC TGA-3', escribe la hebra molde, el ARNm y la proteína (AAA Lys, CCC Pro).", "Molde: 3'-TAC TTT GGG ACT-5'. ARNm: 5'-AUG AAA CCC UGA-3'. Proteína: Met-Lys-Pro."],
      ["(Tipo PAU) Interpreta el experimento de Meselson y Stahl y qué resultados darían las hipótesis conservativa y dispersiva.", "Conservativa: en G1 una banda pesada y una ligera. Dispersiva: siempre una sola banda que se va aligerando. Lo observado (intermedia; luego intermedia + ligera) es semiconservativo."],
      ["(Tipo PAU) Explica por qué una bacteria puede fabricar insulina humana a partir de un gen humano y qué hay que hacer antes.", "El código es universal; hay que introducir el ADNc (sin intrones, obtenido por transcriptasa inversa del ARNm), porque la bacteria no puede hacer splicing."],
      ["Un gen eucariota tiene 3000 pares de bases y su proteína tiene 400 aminoácidos. ¿Qué explica la diferencia?", "400 × 3 + 3 = 1203 nt codifican; el resto son intrones, promotor y regiones no traducidas."],
      ["Predice qué pasará con el operón lac en un mutante cuyo represor no puede unirse a la lactosa.", "El represor queda siempre unido al operador: los genes no se expresan nunca, aunque haya lactosa."],
      ["¿Y en un mutante con el operador dañado, al que no se une el represor?", "Expresión constitutiva: los genes se transcriben siempre, con o sin lactosa."],
      ["La tetraciclina impide la unión del aminoacil-ARNt al sitio A del ribosoma 70S. Explica por qué es útil como antibiótico.", "Detiene la traducción bacteriana; nuestros ribosomas 80S citoplasmáticos no se ven afectados (aunque sí algo los mitocondriales)."],
      ["Una mutación cambia el codón UCU (Ser) por UCC (Ser). ¿Qué efecto tiene? ¿Qué propiedad del código lo explica?", "Ninguno en la proteína (mutación silenciosa), por la degeneración del código."],
      ["¿Cuántos ARNt, codones y enlaces peptídicos intervienen en la síntesis de un péptido de 50 aminoácidos?", "50 ARNt cargados (incluido el iniciador), 51 codones (incluido el de parada) y 49 enlaces peptídicos."],
    ],
  },
  quiz: [
    ["Griffith descubrió el…", ["principio transformante", "código genético", "operón", "ARNm"], 0, "Neumococos."],
    ["Hershey y Chase marcaron el ADN con…", ["³²P", "³⁵S", "¹⁵N", "¹⁴C"], 0, "Fósforo."],
    ["La replicación es…", ["semiconservativa", "conservativa", "dispersiva", "aleatoria"], 0, "Meselson y Stahl."],
    ["La ADN polimerasa sintetiza en sentido…", ["5' → 3'", "3' → 5'", "ambos", "ninguno"], 0, "Añade a 3'-OH."],
    ["Los cebadores son de…", ["ARN", "ADN", "proteína", "lípidos"], 0, "Primasa."],
    ["La ligasa…", ["une fragmentos de Okazaki", "abre la hélice", "fabrica cebadores", "corrige errores"], 0, "Sella."],
    ["Los telómeros humanos repiten…", ["TTAGGG", "TATA", "AUG", "poli-A"], 0, "Extremos."],
    ["La caja TATA está en el…", ["promotor", "intrón", "exón", "telómero"], 0, "Inicio."],
    ["En eucariotas el ARNm lo fabrica la ARN polimerasa…", ["II", "I", "III", "IV"], 0, "I: ARNr; III: ARNt."],
    ["El splicing elimina…", ["intrones", "exones", "la caperuza", "la cola poli-A"], 0, "Espliceosoma."],
    ["El número de codones es…", ["64", "20", "61", "16"], 0, "4³."],
    ["El codón de iniciación es…", ["AUG", "UAA", "UGA", "GGG"], 0, "Metionina."],
    ["Que el código sea degenerado significa que…", ["varios codones dan un aa", "un codón da varios aa", "no es universal", "se solapa"], 0, "Sinónimos."],
    ["El anticodón está en el…", ["ARNt", "ARNm", "ribosoma", "ADN"], 0, "Complementario."],
    ["El enlace peptídico lo cataliza…", ["el ARNr", "la ARN polimerasa", "la helicasa", "el ARNt"], 0, "Ribozima."],
    ["El ARNt con la cadena está en el sitio…", ["P", "A", "E", "O"], 0, "Peptidil."],
    ["Un polisoma es…", ["varios ribosomas en un ARNm", "un ribosoma grande", "un orgánulo", "un ARNt"], 0, "Traducción simultánea."],
    ["Los ribosomas bacterianos son…", ["70S", "80S", "60S", "100S"], 0, "Diana de antibióticos."],
    ["El operón lac es…", ["inducible", "represible", "constitutivo", "eucariota"], 0, "Por lactosa."],
    ["La metilación del ADN suele…", ["silenciar genes", "activar genes", "romper el ADN", "replicarlo"], 0, "Epigenética."],
  ],
  examen: [
    ["La complementaria de 5'-AGC-3' es…", ["5'-GCT-3'", "5'-TCG-3'", "5'-AGC-3'", "5'-UCG-3'"], 0, "Antiparalela."],
    ["Molde 3'-TAC-5' da el codón…", ["AUG", "UAC", "ATG", "GUA"], 0, "U por T."],
    ["Tras 3 generaciones en ¹⁴N, las híbridas son el…", ["25 %", "50 %", "100 %", "12,5 %"], 0, "2 de 8."],
    ["Un péptido de 20 aa tiene… enlaces peptídicos", ["19", "20", "21", "60"], 0, "n − 1."],
    ["Un ARNm procariota con varios genes es…", ["policistrónico", "monocistrónico", "maduro", "intrónico"], 0, "Operones."],
    ["El represor del operón lac se une al…", ["operador", "promotor", "gen Z", "ribosoma"], 0, "Bloquea."],
    ["La transcriptasa inversa sintetiza…", ["ADN desde ARN", "ARN desde ADN", "proteínas", "cebadores"], 0, "Retrovirus."],
    ["Los factores de transcripción se unen al…", ["ADN", "ARNt", "ribosoma", "aminoácido"], 0, "Promotores y enhancers."],
  ],
  feynman: ["Cómo se demostró que los genes son ADN", "Por qué una hebra se copia a trozos", "Qué son los intrones y por qué se eliminan", "Cómo traduce el ribosoma el idioma de las bases al de los aminoácidos", "Por qué una bacteria puede fabricar insulina humana", "Cómo sabe una bacteria cuándo fabricar enzimas para la lactosa"],
  mapa: ["GENÉTICA MOLECULAR", [["Replicación", "ADN → ADN, semiconservativa"], ["Transcripción", "ADN → ARN, maduración"], ["Traducción", "ARNm → proteína, código"], ["Regulación", "operón, epigenética"]]],
  tarjetas: [
    ["Dogma central", "ADN → ARN → proteína (+ transcripción inversa)."],
    ["Semiconservativa", "Cada hija: 1 hebra vieja + 1 nueva."],
    ["ADN polimerasa", "5' → 3'; necesita cebador; corrige."],
    ["Okazaki", "Fragmentos de la hebra retardada."],
    ["Telomerasa", "Alarga telómeros; células madre y cáncer."],
    ["Transcripción", "ARN pol. + promotor; iniciación, elongación, terminación."],
    ["Maduración", "Caperuza, poli-A, splicing."],
    ["Código genético", "64 codones; universal, degenerado, no ambiguo."],
    ["ARNt", "Anticodón + aminoácido; sintetasas."],
    ["Ribosoma", "Sitios A, P, E; ARNr cataliza el enlace."],
    ["Operón lac", "Inducible: lactosa inactiva el represor."],
    ["Epigenética", "Metilación del ADN y modificación de histonas."],
  ],
  glosario: [
    ["Gen", "Fragmento de ADN con información para un polipéptido o un ARN funcional."],
    ["Replicación", "Copia del ADN antes de la división celular."],
    ["Horquilla de replicación", "Zona en forma de Y donde se separan las hebras y se copian."],
    ["Cebador", "Fragmento corto de ARN que inicia la síntesis de ADN."],
    ["Fragmento de Okazaki", "Segmento corto de ADN de la hebra retardada."],
    ["Telómero", "Secuencia repetida en el extremo de un cromosoma eucariota."],
    ["Transcripción", "Síntesis de ARN a partir de un molde de ADN."],
    ["Promotor", "Secuencia de ADN donde se une la ARN polimerasa."],
    ["Intrón", "Secuencia no codificante de un gen que se elimina en la maduración."],
    ["Exón", "Secuencia de un gen que permanece en el ARN maduro."],
    ["Codón", "Triplete de bases del ARNm que codifica un aminoácido o una señal."],
    ["Anticodón", "Triplete del ARNt complementario de un codón."],
    ["Traducción", "Síntesis de una proteína a partir de la información del ARNm."],
    ["Polisoma", "Conjunto de ribosomas que traducen a la vez un mismo ARNm."],
    ["Operón", "Unidad de regulación génica bacteriana con genes que se transcriben juntos."],
    ["Epigenética", "Estudio de los cambios heredables en la expresión génica sin cambio en la secuencia."],
  ],
  situacion: {
    titulo: "Descifrar un mensaje genético",
    reto: "Vuestro equipo recibe la secuencia de un fragmento de gen de 60 pares de bases y debe obtener el ARNm, la proteína, y predecir el efecto de tres mutaciones, usando bases de datos públicas.",
    pasos: [
      "Identificad la hebra molde y escribid el ARNm en sentido 5' → 3'.",
      "Localizad el codón de inicio y traducid usando la tabla del código genético.",
      "Introducid tres cambios (una sustitución silenciosa, una de sentido erróneo y una deleción) y predecid su efecto.",
      "Comprobad vuestros resultados con una herramienta de traducción en línea y buscad la proteína en una base de datos.",
    ],
    producto: "Un póster con el flujo ADN → ARNm → proteína y el análisis de las mutaciones.",
    evaluacion: ["La transcripción y la traducción respetan la complementariedad y el sentido 5' → 3'.", "Se usa correctamente el código genético.", "Las predicciones sobre las mutaciones están razonadas."],
  },
  familias: [
    "Extraed ADN de fresas o de plátano en la cocina con sal, lavavajillas y alcohol frío.",
    "Escribid mensajes secretos con un código de tres letras, como el código genético.",
    "Hablad de las pruebas de ADN que se usan en medicina o para conocer los orígenes familiares.",
    "Comentad qué es la epigenética y cómo el estilo de vida puede influir en los genes.",
  ],
  saberes: "bloque «Genética molecular»: el ADN como portador de la información genética; la replicación del ADN; la expresión génica: transcripción, maduración y traducción; el código genético; la regulación de la expresión génica en procariotas y eucariotas; la epigenética.",
  ideas: [
    "Extracción de ADN de células vegetales con materiales caseros.",
    "Modelización de la replicación con piezas de colores para las bases y las hebras antiparalelas.",
    "Juego de rol de la traducción: alumnos como ARNt, ribosoma y ARNm.",
    "Uso de herramientas bioinformáticas (traductores en línea, bases de datos de proteínas).",
  ],
  fuentes: [
    { t: "NHGRI: glosario de términos genéticos en español", url: "https://www.genome.gov/es/genetics-glossary" },
  ],
});
