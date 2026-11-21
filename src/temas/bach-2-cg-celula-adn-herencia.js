// Ciencias Generales 2º Bachillerato · La célula, el ADN y la herencia (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, arbol, celula } = require("./_bach2-cg");

// Doble hélice simplificada.
const helices = (() => {
  let s = "";
  const pares = [["A", "T"], ["C", "G"], ["T", "A"], ["G", "C"], ["A", "T"], ["G", "C"]];
  pares.forEach(([a, b], i) => {
    const y = 34 + i * 24;
    s += `<line x1="96" y1="${y}" x2="164" y2="${y}" stroke="var(--muted)" stroke-width="2"/>`;
    s += `<rect x="96" y="${y - 9}" width="28" height="18" rx="4" fill="${a === "A" || a === "T" ? "var(--leaf)" : "var(--pen)"}" fill-opacity=".85"/>${T(110, y + 4, a, { fs: 11, b: true, c: "#fff" })}`;
    s += `<rect x="136" y="${y - 9}" width="28" height="18" rx="4" fill="${b === "A" || b === "T" ? "var(--leaf)" : "var(--pen)"}" fill-opacity=".85"/>${T(150, y + 4, b, { fs: 11, b: true, c: "#fff" })}`;
  });
  return s;
})();
const adnSVG = marco("Estructura del ADN: dos cadenas de nucleótidos unidas por pares de bases complementarias, adenina con timina y citosina con guanina", `
  <path d="M88 20 C 70 60, 106 110, 88 168" fill="none" stroke="var(--sun)" stroke-width="5"/><path d="M172 20 C 190 60, 154 110, 172 168" fill="none" stroke="var(--sun)" stroke-width="5"/>
  ${helices}
  ${T(44, 60, "azúcar +", { fs: 9.5, b: true, c: "#b45309" })}${T(44, 73, "fosfato", { fs: 9.5, b: true, c: "#b45309" })}
  ${T(222, 70, "A = T", { fs: 11, b: true, c: "var(--leaf)" })}${T(222, 96, "C ≡ G", { fs: 11, b: true, c: "var(--pen)" })}${T(130, 177, "bases complementarias", { fs: 10, b: true })}`);

// Cuadro de Punnett Aa × Aa.
const punnettSVG = marco("Cuadro de Punnett del cruce Aa por Aa: un cuarto AA, dos cuartos Aa y un cuarto aa, proporción fenotípica 3 a 1", `
  ${T(130, 18, "Aa × Aa", { fs: 13, b: true })}
  ${T(110, 42, "A", { fs: 13, b: true, c: "var(--pen)" })}${T(170, 42, "a", { fs: 13, b: true, c: "var(--pen)" })}
  ${T(66, 78, "A", { fs: 13, b: true, c: "var(--red)" })}${T(66, 136, "a", { fs: 13, b: true, c: "var(--red)" })}
  <rect x="80" y="50" width="60" height="56" fill="var(--leaf)" fill-opacity=".35" stroke="var(--ink)"/><rect x="140" y="50" width="60" height="56" fill="var(--leaf)" fill-opacity=".35" stroke="var(--ink)"/>
  <rect x="80" y="106" width="60" height="56" fill="var(--leaf)" fill-opacity=".35" stroke="var(--ink)"/><rect x="140" y="106" width="60" height="56" fill="var(--sun)" fill-opacity=".45" stroke="var(--ink)"/>
  ${T(110, 83, "AA", { fs: 13, b: true })}${T(170, 83, "Aa", { fs: 13, b: true })}${T(110, 139, "Aa", { fs: 13, b: true })}${T(170, 139, "aa", { fs: 13, b: true })}
  ${T(130, 178, "fenotipos 3 : 1 · genotipos 1 : 2 : 1", { fs: 10, b: true, c: "var(--pen)" })}`);

module.exports = tema({
  titulo: "La célula, el ADN y la herencia",
  minutos: 120,
  secciones: [4, 4, 4],
  objetivos: [
    "Explicar la teoría celular y comparar las células procariotas y eucariotas, animales y vegetales",
    "Describir la estructura del ADN y su función como portador de la información genética",
    "Explicar la replicación, la transcripción y la traducción y el significado del código genético",
    "Diferenciar la mitosis y la meiosis y su papel en el crecimiento y la reproducción",
    "Resolver problemas de herencia mendeliana y de herencia ligada al sexo",
    "Relacionar las mutaciones con la variabilidad genética, las enfermedades y la evolución",
  ],
  claves: ["teoría celular", "procariota", "eucariota", "orgánulo", "ADN", "nucleótido", "gen", "cromosoma", "replicación", "código genético", "mitosis", "meiosis", "alelo", "genotipo", "fenotipo", "mutación"],
  pregunta: {
    texto: "Si todas las células de tu cuerpo tienen el mismo ADN, ¿por qué una neurona es tan distinta de una célula de la piel?",
    respuesta: "Porque, aunque contienen la misma información genética, cada tipo de célula <mark>expresa</mark> solo una parte de sus genes. En una neurona están activos los genes que fabrican las proteínas necesarias para transmitir impulsos nerviosos; en una célula de la piel, los que fabrican queratina. El ADN es como una enorme biblioteca de recetas, y cada célula solo «lee» las que necesita. Esa <b>regulación de la expresión génica</b> durante el desarrollo es lo que permite que de una sola célula, el cigoto, surjan más de 200 tipos celulares distintos.",
  },
  lectura: {
    titulo: "La fotografía 51",
    html: `<p>En mayo de 1952, en el King's College de Londres, la química Rosalind Franklin y su estudiante Raymond Gosling obtuvieron una imagen de difracción de rayos X de una fibra de ADN. La llamaron «fotografía 51». Mostraba una figura en forma de X que, para un ojo entrenado, revelaba que la molécula era una hélice, con unas medidas muy precisas. Franklin era una experta en esa técnica y estaba analizando los datos con cuidado, sin precipitarse.</p><p>Sin que ella lo supiera, su colega Maurice Wilkins mostró la imagen a James Watson, que trabajaba en Cambridge con Francis Crick intentando construir un modelo del ADN. Con esos datos, Watson y Crick propusieron en 1953 la famosa doble hélice, con dos cadenas enrolladas y bases emparejadas en el interior, un modelo que explicaba de inmediato cómo se copia la información genética. Watson, Crick y Wilkins recibieron el Premio Nobel en 1962; Franklin había muerto en 1958 y su contribución tardó décadas en reconocerse. Su historia muestra que la ciencia es una empresa colectiva, y a veces injusta. En este tema estudiarás la célula, la molécula que guarda la información de la vida y cómo se hereda.</p>`,
  },
  bloques: [
    { h: "La teoría celular", p: [
      "En 1665, Robert Hooke observó con un microscopio rudimentario finas láminas de corcho y vio pequeñas celdillas a las que llamó «células». Pocos años después, Anton van Leeuwenhoek, con lentes mucho mejores, descubrió bacterias y protozoos. Pero fue en el siglo XIX cuando Matthias Schleiden y Theodor Schwann propusieron que todos los seres vivos están formados por células, y Rudolf Virchow añadió que toda célula procede de otra célula. El español <b>Santiago Ramón y Cajal</b> demostró que el sistema nervioso también está formado por células individuales, las neuronas, lo que le valió el Premio Nobel en 1906.",
      "La <mark>teoría celular</mark> actual se resume en cuatro principios: todos los seres vivos están formados por una o más células (principio <b>estructural</b>); la célula es la unidad más pequeña capaz de realizar las funciones vitales de nutrición, relación y reproducción (principio <b>funcional</b>); toda célula procede de la división de otra célula preexistente (principio <b>genético</b>), y las células contienen la información hereditaria, que transmiten a sus descendientes. Los <b>virus</b> no son células: no tienen metabolismo propio y solo pueden reproducirse dentro de una célula, por lo que se discute si son seres vivos.",
    ], svg: L6.linea("Hitos de la teoría celular", [["1665", "Hooke: células"], ["1674", "Leeuwenhoek: microbios"], ["1839", "Schleiden y Schwann"], ["1888", "Ramón y Cajal"]], "Historia de la célula"), v: ["cel-a", "La célula: estructura y funciones"] },
    { h: "Células procariotas y eucariotas", p: [
      "Hay dos tipos básicos de organización celular. Las <mark>células procariotas</mark> son las de las bacterias y las arqueas. Son pequeñas (1-10 µm) y sencillas: no tienen núcleo, de modo que su ADN, circular, está en una región del citoplasma llamada <b>nucleoide</b>; no tienen orgánulos rodeados de membrana; tienen ribosomas pequeños, una pared celular rígida y a menudo flagelos y plásmidos, pequeñas moléculas de ADN extra que pueden intercambiar. Fueron las primeras formas de vida, hace unos 3800 millones de años, y siguen siendo las más abundantes del planeta.",
      "Las <mark>células eucariotas</mark> forman los protistas, los hongos, las plantas y los animales. Son mayores (10-100 µm) y complejas: tienen un <b>núcleo</b> rodeado por una doble membrana que contiene el ADN lineal en forma de cromosomas, y numerosos <b>orgánulos</b> con funciones especializadas. Surgieron hace unos 2000 millones de años. Según la <b>teoría endosimbiótica</b> de Lynn Margulis, las mitocondrias y los cloroplastos fueron bacterias que vivían dentro de otra célula: por eso tienen su propio ADN circular, ribosomas como los bacterianos y doble membrana.",
    ], svg: L5.compara("Células procariotas y eucariotas", ["Procariota", ["sin núcleo", "ADN circular", "sin orgánulos membranosos", "bacterias, arqueas"]], ["Eucariota", ["con núcleo", "cromosomas lineales", "muchos orgánulos", "hongos, plantas, animales"]], "var(--sun)", "var(--pen)") },
    { h: "Los orgánulos de la célula eucariota", p: [
      "La célula eucariota está rodeada por la <b>membrana plasmática</b>, una bicapa de lípidos con proteínas que controla el paso de sustancias. En su interior, el <b>citoplasma</b> contiene el citoesqueleto, que da forma y permite el movimiento, y los orgánulos. Los <b>ribosomas</b> fabrican proteínas. El <b>retículo endoplasmático</b>, una red de membranas, sintetiza proteínas (el rugoso, con ribosomas) y lípidos (el liso). El <b>aparato de Golgi</b> modifica, empaqueta y distribuye esas moléculas. Los <b>lisosomas</b> contienen enzimas que digieren sustancias y orgánulos viejos.",
      "Las <mark>mitocondrias</mark> realizan la <b>respiración celular</b>: oxidan la glucosa y otros nutrientes con oxígeno y obtienen la energía en forma de ATP. Son la «central energética» de la célula. Las células vegetales, además, tienen <b>cloroplastos</b>, donde ocurre la <b>fotosíntesis</b>, que transforma la energía de la luz en energía química; una gran <b>vacuola</b> que almacena agua y mantiene la célula turgente, y una <b>pared celular</b> de celulosa que la protege. Las células animales no tienen pared ni cloroplastos, pero tienen <b>centriolos</b>, que participan en la división celular. El <b>núcleo</b> controla la actividad celular y contiene el ADN.",
    ], svg: celula("Célula vegetal con pared celular, vacuola, cloroplastos, núcleo, mitocondria y retículo endoplasmático", true) },
    { h: "Las biomoléculas", p: [
      "Las células están formadas por <mark>biomoléculas</mark>. Las <b>inorgánicas</b> son el agua, que constituye el 70 % de la masa celular y es el medio en el que ocurren las reacciones, y las sales minerales. Las <b>orgánicas</b>, basadas en cadenas de carbono, son de cuatro tipos. Los <b>glúcidos</b> o hidratos de carbono, como la glucosa, el almidón o la celulosa, aportan energía y forman estructuras. Los <b>lípidos</b>, como las grasas, los fosfolípidos y el colesterol, almacenan energía y forman las membranas.",
      "Las <b>proteínas</b> son cadenas de aminoácidos (hay 20 tipos) plegadas en formas tridimensionales precisas. Son las moléculas más versátiles: forman estructuras (queratina, colágeno), transportan sustancias (hemoglobina), defienden (anticuerpos), regulan (insulina) y, sobre todo, actúan como <b>enzimas</b>, catalizadores que aceleran las reacciones químicas del metabolismo. Los <b>ácidos nucleicos</b>, el ADN y el ARN, son cadenas de nucleótidos que almacenan y transmiten la información genética. La relación entre ácidos nucleicos y proteínas es la clave de la vida: el ADN contiene las instrucciones para fabricar las proteínas, y las proteínas hacen casi todo el trabajo de la célula.",
    ], svg: arbol("Biomoléculas orgánicas y sus funciones", "Biomoléculas", [["Glúcidos", "energía: glucosa"], ["Lípidos", "reserva, membranas"], ["Proteínas", "enzimas, estructura"], ["Ác. nucleicos", "ADN, ARN: información"]]) },
    { h: "La estructura del ADN", p: [
      "El <mark>ADN</mark> (ácido desoxirribonucleico) es un polímero formado por <b>nucleótidos</b>. Cada nucleótido tiene tres partes: un azúcar (la desoxirribosa), un grupo fosfato y una <b>base nitrogenada</b>, que puede ser adenina (A), timina (T), citosina (C) o guanina (G). Los nucleótidos se unen formando una cadena, con un «esqueleto» de azúcar y fosfato del que sobresalen las bases. Según el modelo de Watson y Crick (1953), basado en los datos de Rosalind Franklin, el ADN está formado por <b>dos cadenas</b> enrolladas en una <b>doble hélice</b>.",
      "Las bases de las dos cadenas se emparejan en el interior de la hélice mediante enlaces de hidrógeno, siempre de la misma forma: la adenina con la timina y la citosina con la guanina. Son las bases <mark>complementarias</mark>. Por eso, si conocemos la secuencia de una cadena, conocemos la de la otra: frente a ATGC estará TACG. La información genética está escrita en el <b>orden de las bases</b>, como las letras de un texto. El genoma humano tiene unos 3200 millones de pares de bases; si se estirara el ADN de una sola célula mediría unos 2 m, y cabe en un núcleo de 6 µm porque está enrollado alrededor de proteínas llamadas histonas.",
    ], svg: adnSVG, v: ["cel-b", "¿Qué es el ADN y cómo funciona?"] },
    { h: "Genes, cromosomas y genoma", p: [
      "Un <mark>gen</mark> es un fragmento de ADN que contiene la información para fabricar una proteína (o una molécula de ARN funcional). El ser humano tiene unos 20 000 genes que codifican proteínas, aunque representan solo un 1-2 % del genoma; el resto incluye secuencias que regulan cuándo y dónde se expresan los genes, secuencias repetidas y otras cuya función se sigue investigando. El conjunto de toda la información genética de un organismo es su <b>genoma</b>; el humano se secuenció por primera vez en 2003 con el Proyecto Genoma Humano.",
      "Cuando la célula va a dividirse, el ADN se condensa y forma <mark>cromosomas</mark> visibles al microscopio. Cada especie tiene un número característico. Las células humanas tienen 46 cromosomas, organizados en <b>23 pares</b> de cromosomas <b>homólogos</b>: uno de cada par procede de la madre y otro del padre, y llevan los mismos genes en la misma posición. Las células con pares de cromosomas son <b>diploides</b> (2n = 46); los gametos (óvulos y espermatozoides) tienen un solo juego y son <b>haploides</b> (n = 23). Los pares 1 a 22 son <b>autosomas</b>; el par 23 son los <b>cromosomas sexuales</b>: XX en las mujeres y XY en los hombres. El conjunto ordenado de cromosomas de una persona es su <b>cariotipo</b>.",
    ], svg: L5.ficha("Cifras del genoma humano", "Genoma humano", ["3200 millones de pares de bases", "≈ 20 000 genes", "46 cromosomas (23 pares)", "2 m de ADN por célula"], "var(--pen)") },
    { h: "Replicación, transcripción y traducción", p: [
      "Antes de dividirse, la célula debe copiar su ADN. En la <mark>replicación</mark>, la doble hélice se abre como una cremallera, y la enzima <b>ADN polimerasa</b> fabrica una nueva cadena complementaria frente a cada una de las antiguas. El resultado son dos moléculas idénticas, cada una con una cadena antigua y otra nueva: por eso se dice que la replicación es <b>semiconservativa</b>. La copia es extraordinariamente precisa, con alrededor de un error por cada mil millones de bases, gracias a mecanismos de corrección.",
      "Para fabricar una proteína, la información del gen se copia primero en una molécula de <b>ARN mensajero</b> (ARNm) en el núcleo: es la <mark>transcripción</mark>. El ARN se diferencia del ADN en que tiene una sola cadena, el azúcar ribosa y la base uracilo (U) en lugar de timina. El ARNm sale al citoplasma y llega a los ribosomas, donde se produce la <mark>traducción</mark>: los ribosomas leen el ARNm de tres en tres bases (cada triplete es un <b>codón</b>) y, con ayuda del ARN de transferencia, unen el aminoácido correspondiente a cada codón. Este flujo de información, ADN → ARN → proteína, se conoce como el <b>dogma central</b> de la biología molecular.",
    ], svg: L6.flujo("Dogma central de la biología molecular", ["ADN", "ARN mensajero", "Proteína"], "ADN → ARN → proteína") },
    { h: "El código genético", p: [
      "El <mark>código genético</mark> es la correspondencia entre los codones del ARNm y los aminoácidos de las proteínas. Como hay 4 bases y los codones tienen 3, existen 4³ = <b>64 codones</b> distintos para codificar 20 aminoácidos. Por eso el código es <b>degenerado</b> o redundante: varios codones distintos pueden codificar el mismo aminoácido (por ejemplo, la leucina tiene seis). Hay un codón de <b>inicio</b>, AUG, que codifica la metionina y marca dónde empieza la proteína, y tres codones de <b>parada</b> (UAA, UAG y UGA), que indican el final.",
      "El código genético es <b>universal</b>: es prácticamente el mismo en todos los seres vivos, desde las bacterias hasta los seres humanos. Esto es una prueba muy sólida de que todos los organismos descendemos de un antepasado común. Además tiene una gran importancia práctica: como una bacteria «lee» un gen humano igual que una célula humana, se puede introducir el gen de la insulina humana en bacterias para que fabriquen insulina, que es la base de la <b>biotecnología</b>. También es la base de las vacunas de ARNm, que dan a nuestras células las instrucciones para fabricar una proteína del virus.",
    ], svg: L5.rejilla("Ejemplos de codones del código genético", ["Codón", "Aminoácido", "Función"], [["AUG", "metionina", "inicio"], ["UUU", "fenilalanina", "—"], ["GGC", "glicina", "—"], ["UAA", "ninguno", "parada"]], "var(--pen)") },
    { h: "La mitosis", p: [
      "Las células se reproducen dividiéndose. La vida de una célula, desde que se forma hasta que se divide, es el <b>ciclo celular</b>. La mayor parte del tiempo la célula está en <b>interfase</b>, en la que crece, realiza sus funciones y replica su ADN. Después llega la división, que en las células eucariotas somáticas (no reproductoras) es la <mark>mitosis</mark>. En ella, el núcleo se divide en cuatro fases: <b>profase</b> (los cromosomas se condensan y la membrana nuclear desaparece), <b>metafase</b> (los cromosomas se alinean en el centro), <b>anafase</b> (las dos copias de cada cromosoma se separan hacia polos opuestos) y <b>telofase</b> (se forman dos núcleos). Después, la <b>citocinesis</b> divide el citoplasma.",
      "El resultado de la mitosis son <b>dos células hijas idénticas</b> a la madre, con el mismo número de cromosomas (de una célula 2n se obtienen dos células 2n). La mitosis permite el <b>crecimiento</b> de los organismos pluricelulares, la <b>renovación</b> de tejidos (cada día se renuevan miles de millones de células de la piel o de la sangre), la <b>reparación</b> de heridas y la <b>reproducción asexual</b> de muchos organismos. El ciclo celular está muy controlado; cuando ese control falla por mutaciones, las células se dividen sin freno y se produce un <b>cáncer</b>.",
    ], svg: L6.ciclo("Fases de la mitosis: profase, metafase, anafase, telofase y citocinesis", "Mitosis", ["Profase", "Metafase", "Anafase", "Telofase", "Citocinesis"], "var(--pen)"), v: ["cel-d", "Mitosis y meiosis"] },
    { h: "La meiosis y la reproducción sexual", p: [
      "La <mark>meiosis</mark> es un tipo especial de división que forma los <b>gametos</b> en los organismos con reproducción sexual. Consiste en dos divisiones sucesivas tras una sola replicación del ADN, de modo que de una célula diploide (2n) se obtienen <b>cuatro células haploides</b> (n), con la mitad de cromosomas. Así, cuando un óvulo (n = 23) y un espermatozoide (n = 23) se unen en la <b>fecundación</b>, el cigoto vuelve a tener 46 cromosomas. Sin la meiosis, el número de cromosomas se duplicaría en cada generación.",
      "La meiosis, además, genera <b>variabilidad genética</b> por dos mecanismos. En la primera división, los cromosomas homólogos se emparejan e intercambian fragmentos: es el <b>sobrecruzamiento</b> o recombinación, que mezcla los genes del padre y de la madre en un mismo cromosoma. Después, los homólogos se reparten al azar entre las células hijas (<b>segregación independiente</b>): solo por este mecanismo, una persona puede formar 2²³, más de 8 millones de combinaciones de cromosomas en sus gametos. Por eso los hermanos son distintos entre sí (salvo los gemelos idénticos), y la variabilidad es la materia prima de la evolución.",
    ], svg: L5.compara("Mitosis y meiosis", ["Mitosis", ["1 división", "2 células hijas", "2n → 2n, idénticas", "crecimiento, reparación"]], ["Meiosis", ["2 divisiones", "4 células hijas", "2n → n, distintas", "gametos, variabilidad"]], "var(--pen)", "var(--red)") },
    { h: "La herencia mendeliana", p: [
      "Gregor Mendel, un monje que cruzó miles de plantas de guisante en Brno entre 1856 y 1863, descubrió las leyes básicas de la herencia. Hoy las explicamos así: cada carácter depende de un gen, que puede presentarse en distintas versiones, los <mark>alelos</mark>. Cada individuo tiene dos alelos de cada gen, uno de cada progenitor. El <b>genotipo</b> es la combinación de alelos (AA, Aa o aa) y el <b>fenotipo</b>, el carácter que se manifiesta. Un individuo es <b>homocigótico</b> si tiene dos alelos iguales y <b>heterocigótico</b> si los tiene distintos. Un alelo <b>dominante</b> (A) se manifiesta aunque solo haya uno; el <b>recesivo</b> (a) solo se manifiesta en homocigosis (aa).",
      "La <b>primera ley</b> de Mendel dice que al cruzar dos razas puras (AA × aa) todos los descendientes son iguales (Aa). La <b>segunda ley</b> dice que los dos alelos se separan al formar los gametos: si se cruzan dos heterocigotos (Aa × Aa), la descendencia es 1/4 AA, 1/2 Aa y 1/4 aa, es decir, una proporción de fenotipos de <b>3 dominantes : 1 recesivo</b>. La <b>tercera ley</b> dice que genes distintos se heredan de forma independiente (si están en cromosomas distintos). Los cruces se resuelven con el <b>cuadro de Punnett</b>. Hay excepciones, como la <b>herencia intermedia</b> (flores rosas de rojo × blanco) o la <b>codominancia</b> (grupo sanguíneo AB).",
    ], svg: punnettSVG, v: ["cel-c", "Las leyes de Mendel"] },
    { h: "Herencia humana y mutaciones", p: [
      "En los seres humanos, muchos caracteres dependen de muchos genes y del ambiente (estatura, color de piel), pero otros siguen la herencia mendeliana. Los <b>grupos sanguíneos ABO</b> dependen de tres alelos: A y B son codominantes y ambos dominan sobre 0. La <b>herencia ligada al sexo</b> afecta a genes del cromosoma X: como los hombres tienen un solo X, basta un alelo recesivo para que manifiesten el carácter. Por eso el <b>daltonismo</b> y la <b>hemofilia</b> son mucho más frecuentes en hombres, y las mujeres suelen ser portadoras. La herencia se estudia en las familias con <b>árboles genealógicos</b>.",
      "Una <mark>mutación</mark> es un cambio en el ADN. Puede afectar a un gen (cambio de una o pocas bases), a la estructura de un cromosoma o al número de cromosomas, como en el <b>síndrome de Down</b> (tres copias del cromosoma 21). Las mutaciones se producen por errores al copiar el ADN o por <b>agentes mutágenos</b>: radiaciones (ultravioleta, rayos X), sustancias químicas (las del tabaco) y algunos virus. Muchas son neutras, algunas son perjudiciales y causan enfermedades como la fibrosis quística o el cáncer, y unas pocas resultan beneficiosas. Las mutaciones en los gametos se heredan y, junto con la recombinación, son la fuente de la <b>variabilidad</b> sobre la que actúa la <b>selección natural</b>.",
    ], svg: arbol("Tipos de mutaciones", "Mutaciones", [["Génicas", "cambio de bases"], ["Estructurales", "fragmentos de cromosoma"], ["Numéricas", "nº de cromosomas: Down"], ["Causas", "errores, radiación, químicos"]]) },
  ],
  figura: { titulo: "De la célula a la herencia", items: [["Célula", "procariota", "eucariota", "orgánulos"], ["ADN", "doble hélice", "A-T, C-G", "genes"], ["Expresión", "replicación", "transcripción", "traducción"], ["Herencia", "mitosis · meiosis", "Mendel", "mutaciones"]] },
  video: ["cel-b", "¿Qué es el ADN y cómo funciona?"],
  ejemplos: [
    ["Escribe la cadena complementaria de 5'-ATGCCGTA-3'.", ["A ↔ T, C ↔ G.", "ATGCCGTA → TACGGCAT.", "Se escribe en sentido antiparalelo: 3'-TACGGCAT-5'."], "3'-TACGGCAT-5'."],
    ["Transcribe a ARNm el fragmento de ADN molde 3'-TACGGA-5'.", ["Frente a T → A, A → U, C → G, G → C.", "TACGGA → AUGCCU.", "5'-AUGCCU-3'."], "5'-AUGCCU-3' (AUG: inicio, metionina)."],
    ["¿Cuántos aminoácidos codifica un ARNm de 300 bases, sin contar el codón de parada?", ["Cada codón: 3 bases.", "300 / 3 = 100 codones.", "Uno es de parada: 99 aminoácidos."], "99 aminoácidos."],
    ["Si el 20 % de las bases de un ADN son adenina, ¿qué porcentaje hay de cada base?", ["A = T = 20 %.", "A + T = 40 %; C + G = 60 %.", "C = G = 30 %."], "A 20 %, T 20 %, C 30 %, G 30 %."],
    ["Cruzamos dos guisantes heterocigóticos para el color (Aa × Aa; A = amarillo, dominante). ¿Qué proporción de la descendencia será verde?", ["Gametos: A y a de cada progenitor.", "Punnett: AA, Aa, Aa, aa.", "Verde = aa = 1/4."], "25 % verde, 75 % amarillo."],
    ["Una mujer portadora de daltonismo (XᴰXᵈ) tiene hijos con un hombre de visión normal (XᴰY). ¿Qué probabilidad hay de que un hijo varón sea daltónico?", ["Hijos varones reciben Y del padre y un X de la madre.", "La madre da Xᴰ o Xᵈ con probabilidad 1/2.", "XᵈY: daltónico."], "50 % de los hijos varones; ninguna hija será daltónica (la mitad portadoras)."],
  ],
  errores: [
    "Confundir gen y alelo: el gen es el fragmento de ADN para un carácter; los alelos son sus versiones.",
    "Pensar que dominante significa más frecuente: un alelo dominante puede ser raro, como el de la acondroplasia.",
    "Creer que las bacterias no tienen ADN porque no tienen núcleo: lo tienen, en el nucleoide.",
    "Confundir mitosis y meiosis: la mitosis da 2 células idénticas; la meiosis, 4 haploides distintas.",
    "Pensar que todas las mutaciones son perjudiciales: muchas son neutras y algunas beneficiosas.",
    "Escribir timina en el ARN: el ARN lleva uracilo (U) en lugar de timina.",
  ],
  ejercicios: {
    b: [
      ["Enuncia los principios de la teoría celular.", "Todos los seres vivos están formados por células; la célula es la unidad funcional; toda célula procede de otra célula; las células contienen la información hereditaria."],
      ["Diferencia célula procariota y eucariota.", "Procariota: sin núcleo, ADN circular en el nucleoide, sin orgánulos membranosos, pequeña. Eucariota: con núcleo, cromosomas lineales, orgánulos, mayor."],
      ["Indica tres diferencias entre una célula animal y una vegetal.", "La vegetal tiene pared de celulosa, cloroplastos y una gran vacuola; la animal tiene centriolos y no tiene pared ni cloroplastos."],
      ["¿Cuál es la función de las mitocondrias y de los cloroplastos?", "Mitocondrias: respiración celular, obtención de ATP. Cloroplastos: fotosíntesis, transformación de energía luminosa en química."],
      ["Nombra las cuatro biomoléculas orgánicas y una función de cada una.", "Glúcidos (energía), lípidos (reserva y membranas), proteínas (enzimas, estructura), ácidos nucleicos (información genética)."],
      ["¿Qué partes tiene un nucleótido de ADN?", "Un azúcar (desoxirribosa), un grupo fosfato y una base nitrogenada (A, T, C o G)."],
      ["¿Qué bases son complementarias en el ADN?", "Adenina con timina y citosina con guanina."],
      ["Define gen, cromosoma y genoma.", "Gen: fragmento de ADN con información para una proteína. Cromosoma: ADN condensado con proteínas. Genoma: toda la información genética de un organismo."],
      ["¿Cuántos cromosomas tiene una célula humana somática y un gameto?", "Somática: 46 (2n). Gameto: 23 (n)."],
      ["Diferencia transcripción y traducción.", "Transcripción: copia del ADN en ARNm en el núcleo. Traducción: síntesis de la proteína en los ribosomas a partir del ARNm."],
      ["Define genotipo, fenotipo, homocigótico y heterocigótico.", "Genotipo: alelos que tiene el individuo. Fenotipo: carácter que manifiesta. Homocigótico: dos alelos iguales. Heterocigótico: dos alelos distintos."],
      ["¿Qué es una mutación? Cita dos agentes mutágenos.", "Un cambio en el ADN. Agentes: radiación ultravioleta, rayos X, sustancias químicas del tabaco, algunos virus."],
    ],
    m: [
      ["Explica la teoría endosimbiótica y dos pruebas que la apoyan.", "Las mitocondrias y los cloroplastos fueron bacterias que vivieron dentro de otra célula. Pruebas: tienen ADN circular propio, ribosomas como los bacterianos, doble membrana y se dividen por sí mismos."],
      ["¿Por qué se dice que la replicación es semiconservativa?", "Porque cada molécula hija conserva una cadena del ADN original y tiene otra recién sintetizada."],
      ["Un fragmento de ADN tiene la secuencia 3'-TACAAACCGATT-5'. Escribe el ARNm y la secuencia de aminoácidos (AUG = Met, UUU = Phe, GGC = Gly, UAA = parada).", "ARNm: 5'-AUGUUUGGCUAA-3'. Proteína: Met-Phe-Gly (UAA es parada)."],
      ["¿Por qué el código genético es degenerado? ¿Qué ventaja tiene?", "Porque hay 64 codones para 20 aminoácidos y varios codones codifican el mismo. Ventaja: muchas mutaciones en la tercera base no cambian el aminoácido."],
      ["¿Por qué la universalidad del código genético es una prueba de la evolución?", "Porque si todos los organismos usan el mismo código, lo más probable es que lo hayan heredado de un antepasado común."],
      ["Explica la importancia biológica de la mitosis y de la meiosis.", "Mitosis: crecimiento, renovación de tejidos, reparación, reproducción asexual. Meiosis: formación de gametos haploides, mantiene el número de cromosomas y genera variabilidad."],
      ["¿Cómo genera variabilidad la meiosis?", "Por el sobrecruzamiento entre cromosomas homólogos y por la segregación independiente de los cromosomas, que da más de 8 millones de combinaciones posibles en humanos."],
      ["Cruzamos una planta de flor roja homocigótica (RR) con otra blanca (rr). Si la herencia es intermedia, ¿cómo será la F1 y la F2?", "F1: todas Rr, rosas. F2 (Rr × Rr): 1/4 rojas (RR), 1/2 rosas (Rr), 1/4 blancas (rr)."],
      ["Una persona de grupo A tiene un hijo de grupo 0 con una de grupo B. ¿Cuáles son los genotipos de los padres?", "Para tener un hijo 00, ambos deben llevar el alelo 0: padre A0 y madre B0."],
      ["¿Por qué la hemofilia es más frecuente en hombres que en mujeres?", "Porque el gen está en el cromosoma X; los hombres (XY) solo tienen un X y basta un alelo recesivo para padecerla; las mujeres necesitarían dos."],
      ["¿Cómo se usa el cruzamiento prueba para saber si un individuo de fenotipo dominante es AA o Aa?", "Se cruza con un homocigoto recesivo (aa). Si toda la descendencia es dominante, era AA; si aparece un 50 % recesivo, era Aa."],
      ["Explica la relación entre mutaciones, cáncer y ciclo celular.", "Las mutaciones en genes que controlan el ciclo celular (que estimulan o frenan la división) pueden hacer que la célula se divida sin control, formando un tumor."],
    ],
    a: [
      ["Calcula cuántos codones distintos habría si los codones fueran de dos bases. ¿Bastarían para 20 aminoácidos?", "4² = 16. No bastarían, porque hay 20 aminoácidos más las señales de parada. Con tres bases hay 64, suficientes."],
      ["El genoma humano tiene 3,2·10⁹ pares de bases y la ADN polimerasa comete un error cada 10⁹ bases tras la corrección. ¿Cuántos errores por división celular se esperan? ¿Por qué no somos todos mutantes?", "≈ 3-6 errores por división (son dos copias de cada cromosoma). La mayoría caen en zonas no codificantes o son silenciosas, y otros sistemas de reparación corrigen muchos; además, si dañan una célula somática, suele morir o ser eliminada."],
      ["Cruzamos guisantes AaBb × AaBb (A = amarillo, B = liso, dominantes). ¿Qué proporción será verde y rugoso? ¿Y amarillo y liso?", "Verde rugoso (aabb): 1/4 · 1/4 = 1/16. Amarillo liso (A_B_): 3/4 · 3/4 = 9/16. Proporción 9 : 3 : 3 : 1."],
      ["Un hombre daltónico y una mujer de visión normal no portadora tienen descendencia. ¿Cómo serán sus hijos e hijas? ¿Y los nietos de sus hijas?", "Hijos varones: todos normales (reciben Y del padre). Hijas: todas portadoras (Xᴰ Xᵈ). Los hijos varones de esas hijas tendrán un 50 % de probabilidad de ser daltónicos."],
      ["Una pareja en la que ambos son portadores de fibrosis quística (recesiva) espera un hijo. Calcula la probabilidad de que lo padezca, de que sea portador y de que tenga dos hijos sanos no portadores.", "Padezca (aa): 1/4. Portador (Aa): 1/2. Sano no portador (AA): 1/4; dos así: 1/4 · 1/4 = 1/16."],
      ["Explica por qué una mutación en una célula de la piel no se hereda y una en un espermatozoide sí.", "Las mutaciones somáticas solo afectan a las células derivadas de la mutada en ese individuo. Las de la línea germinal pasan a los gametos y, tras la fecundación, a todas las células del descendiente."],
      ["Analiza el caso de Rosalind Franklin desde la perspectiva de la ética científica y la igualdad de género.", "Sus datos fueron usados sin su conocimiento ni permiso, y su contribución no se reconoció en su momento. Ilustra la importancia del reconocimiento justo, la ética en el uso de datos y la discriminación de las mujeres en la ciencia del siglo XX."],
      ["Construye el árbol genealógico de una familia con un carácter autosómico dominante (como la enfermedad de Huntington) y explica cómo se distingue de uno recesivo.", "Dominante: aparece en todas las generaciones, todo afectado tiene un progenitor afectado y afecta a ambos sexos por igual. Recesivo: puede saltar generaciones, dos padres sanos pueden tener hijos afectados (ambos portadores)."],
    ],
  },
  quiz: [
    ["Demostró que el sistema nervioso está formado por células individuales…", ["Hooke", "Ramón y Cajal", "Mendel", "Virchow"], 1, "Nobel 1906."],
    ["Las células procariotas no tienen…", ["ADN", "ribosomas", "núcleo", "membrana"], 2, "ADN en el nucleoide."],
    ["Son procariotas…", ["los hongos", "las bacterias", "las plantas", "los protozoos"], 1, "Y las arqueas."],
    ["La respiración celular ocurre en…", ["los cloroplastos", "las mitocondrias", "el Golgi", "los lisosomas"], 1, "Producen ATP."],
    ["Solo las células vegetales tienen…", ["mitocondrias", "núcleo", "cloroplastos", "ribosomas"], 2, "Fotosíntesis."],
    ["Las enzimas son…", ["glúcidos", "lípidos", "proteínas", "sales"], 2, "Catalizadores."],
    ["En el ADN, la adenina se une con…", ["guanina", "citosina", "timina", "uracilo"], 2, "A-T."],
    ["El modelo de doble hélice se publicó en…", ["1865", "1953", "2003", "1906"], 1, "Watson y Crick con datos de Franklin."],
    ["Las células humanas somáticas tienen…", ["23 cromosomas", "46 cromosomas", "92 cromosomas", "44 cromosomas"], 1, "23 pares."],
    ["El ARN tiene en lugar de timina…", ["adenina", "uracilo", "citosina", "ribosa"], 1, "U."],
    ["La síntesis de proteínas en los ribosomas es la…", ["replicación", "transcripción", "traducción", "mutación"], 2, "Lee codones."],
    ["Un codón tiene…", ["1 base", "2 bases", "3 bases", "4 bases"], 2, "Triplete."],
    ["El código genético es universal porque…", ["lo inventó Mendel", "es igual en casi todos los seres vivos", "tiene 20 codones", "solo existe en humanos"], 1, "Antepasado común."],
    ["La mitosis produce…", ["4 células haploides", "2 células idénticas", "gametos", "mutaciones"], 1, "2n → 2n."],
    ["La meiosis produce…", ["2 células diploides", "4 células haploides", "1 célula", "tejidos"], 1, "Gametos."],
    ["El sobrecruzamiento ocurre en…", ["la mitosis", "la meiosis", "la traducción", "la interfase"], 1, "Recombinación."],
    ["El cruce Aa × Aa da una proporción fenotípica de…", ["1 : 1", "3 : 1", "1 : 2 : 1", "9 : 3 : 3 : 1"], 1, "Dominancia completa."],
    ["Un individuo aa es…", ["heterocigótico", "homocigótico recesivo", "homocigótico dominante", "portador"], 1, "Dos alelos recesivos."],
    ["El daltonismo es más frecuente en hombres porque…", ["está en el cromosoma Y", "está en el cromosoma X", "es dominante", "es una infección"], 1, "Herencia ligada al sexo."],
    ["El síndrome de Down se debe a…", ["una mutación génica", "una trisomía del cromosoma 21", "un virus", "la falta de un cromosoma X"], 1, "Mutación genómica."],
  ],
  examen: [
    ["Si un ADN tiene 30 % de citosina, la adenina es…", ["30 %", "20 %", "40 %", "70 %"], 1, "C = G = 30 %; A = T = 20 %."],
    ["El ARNm complementario de 3'-TAC-5' es…", ["5'-ATG-3'", "5'-AUG-3'", "5'-UAC-3'", "5'-TAC-3'"], 1, "U en lugar de T."],
    ["Un ARNm de 150 bases sin codón de parada codifica…", ["150 aminoácidos", "50 aminoácidos", "450 aminoácidos", "75 aminoácidos"], 1, "150/3."],
    ["El número de codones posibles es…", ["20", "16", "64", "4"], 2, "4³."],
    ["AA × aa da en F1…", ["todo Aa", "1/2 AA y 1/2 aa", "3 : 1", "todo aa"], 0, "Primera ley de Mendel."],
    ["Probabilidad de aabb en AaBb × AaBb…", ["1/4", "1/16", "9/16", "1/2"], 1, "1/4 · 1/4."],
    ["Un hijo de grupo 0 con padres A y B indica que los padres son…", ["AA y BB", "A0 y B0", "AB y 00", "A0 y BB"], 1, "Ambos llevan 0."],
    ["La teoría endosimbiótica explica el origen de…", ["el núcleo", "mitocondrias y cloroplastos", "los ribosomas", "los virus"], 1, "Lynn Margulis."],
  ],
  feynman: ["Por qué todas tus células tienen el mismo ADN pero son distintas", "Cómo se copia el ADN", "Cómo se pasa de un gen a una proteína", "Para qué sirve la meiosis", "Por qué de dos padres de ojos marrones puede nacer un hijo de ojos azules", "Por qué el daltonismo afecta más a los hombres"],
  mapa: ["CÉLULA Y HERENCIA", [["Célula", "procariota, eucariota"], ["ADN", "doble hélice, genes"], ["Expresión", "ADN → ARN → proteína"], ["Herencia", "meiosis, Mendel, mutaciones"]]],
  tarjetas: [
    ["Teoría celular", "Todo ser vivo está hecho de células, que proceden de otras células."],
    ["Procariota", "Sin núcleo: bacterias y arqueas."],
    ["Mitocondria", "Respiración celular: ATP."],
    ["Cloroplasto", "Fotosíntesis en células vegetales."],
    ["ADN", "Doble hélice; A-T y C-G."],
    ["Gen", "Fragmento de ADN con información para una proteína."],
    ["Dogma central", "ADN → ARN → proteína."],
    ["Código genético", "64 codones, 20 aminoácidos, universal."],
    ["Mitosis", "2 células idénticas (2n → 2n)."],
    ["Meiosis", "4 gametos haploides (2n → n) y variabilidad."],
    ["Aa × Aa", "Fenotipos 3 : 1; genotipos 1 : 2 : 1."],
    ["Mutación", "Cambio en el ADN; fuente de variabilidad."],
  ],
  glosario: [
    ["Célula", "Unidad estructural y funcional de los seres vivos."],
    ["Procariota", "Célula sin núcleo diferenciado."],
    ["Eucariota", "Célula con núcleo y orgánulos membranosos."],
    ["Orgánulo", "Estructura celular con una función específica."],
    ["Enzima", "Proteína que cataliza una reacción química."],
    ["Nucleótido", "Unidad del ADN y el ARN: azúcar, fosfato y base."],
    ["Gen", "Fragmento de ADN que codifica una proteína o un ARN."],
    ["Cromosoma", "Estructura de ADN condensado con proteínas."],
    ["Diploide", "Célula con dos juegos de cromosomas (2n)."],
    ["Haploide", "Célula con un solo juego de cromosomas (n)."],
    ["Codón", "Triplete de bases del ARNm que codifica un aminoácido."],
    ["Mitosis", "División que produce dos células idénticas."],
    ["Meiosis", "División que produce cuatro gametos haploides."],
    ["Alelo", "Cada una de las versiones de un gen."],
    ["Fenotipo", "Conjunto de caracteres que se manifiestan."],
    ["Mutación", "Cambio en la secuencia o estructura del ADN."],
  ],
  situacion: {
    titulo: "Extrae tu propio ADN",
    reto: "El laboratorio del centro abre una jornada de puertas abiertas. Vuestro equipo extraerá ADN de frutas, lo mostrará al público y preparará un taller sobre cómo se hereda la información genética.",
    pasos: [
      "Extraed ADN de fresas o plátanos con sal, detergente y alcohol frío, y documentad el proceso.",
      "Observad al microscopio células de cebolla y de mucosa bucal y comparadlas.",
      "Construid un modelo de doble hélice con materiales reciclados respetando la complementariedad de bases.",
      "Diseñad un juego de cruces mendelianos con monedas o fichas para el público.",
      "Preparad un panel sobre una enfermedad genética, cómo se hereda y cómo se diagnostica.",
    ],
    producto: "Un taller con extracción de ADN, modelo de doble hélice, juego de herencia y panel informativo.",
    evaluacion: ["La extracción y las observaciones se realizan y explican correctamente.", "El modelo de ADN es científicamente correcto.", "El juego de herencia reproduce las proporciones mendelianas.", "El panel es riguroso y comprensible."],
  },
  familias: [
    "Haced juntos la extracción de ADN de una fresa en la cocina.",
    "Comprobad qué caracteres sencillos compartís en la familia (enrollar la lengua, lóbulo de la oreja) y dibujad un árbol genealógico.",
    "Comentad por qué los hermanos se parecen pero no son iguales.",
    "Ved juntos un documental sobre Rosalind Franklin o sobre Ramón y Cajal.",
  ],
  saberes: "bloque «D. Biología para el siglo XXI»: la teoría celular y los tipos de células; las biomoléculas; estructura y función del ADN, genes, cromosomas y genoma; replicación, transcripción, traducción y código genético; mitosis y meiosis; genética mendeliana, herencia humana y ligada al sexo; las mutaciones y su relación con la variabilidad, las enfermedades y la evolución.",
  ideas: [
    "Extracción de ADN de frutas con materiales caseros.",
    "Observación al microscopio de células animales y vegetales y de fases de la mitosis en raíz de cebolla.",
    "Simulación de cruces mendelianos con monedas y análisis estadístico de los resultados.",
    "Lectura y debate sobre el caso de Rosalind Franklin y el papel de las mujeres en la ciencia.",
  ],
  fuentes: [
    { t: "Instituto Cajal (CSIC)", url: "https://www.cajal.csic.es/" },
    { t: "National Human Genome Research Institute: glosario genético", url: "https://www.genome.gov/es/genetics-glossary" },
    { t: "Sociedad Española de Genética", url: "https://www.segenetica.es/" },
  ],
});
