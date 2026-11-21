// Química 2º Bachillerato · El sistema periódico (nivel libro). Dibujos propios en SVG.
const { pasos, compara, rejilla, escala, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD } = require("./_bach2-qui");

// Esquema de la tabla con sus bloques s, p, d y f.
const tablaBloques = marco("Esquema de la tabla periódica dividida en los bloques s, p, d y f", `
  <rect x="16" y="30" width="30" height="96" rx="4" fill="var(--red)" opacity=".85"/>${T(31, 82, "s", { fs: 16, b: true, c: "#fff" })}
  <rect x="50" y="62" width="110" height="64" rx="4" fill="#b45309" opacity=".85"/>${T(105, 99, "d (transición)", { fs: 12, b: true, c: "#fff" })}
  <rect x="164" y="30" width="80" height="96" rx="4" fill="var(--pen)" opacity=".85"/>${T(204, 82, "p", { fs: 16, b: true, c: "#fff" })}
  <rect x="50" y="136" width="150" height="30" rx="4" fill="var(--leaf)" opacity=".85"/>${T(125, 156, "f (lantánidos y actínidos)", { fs: 11, b: true, c: "#fff" })}
  ${T(31, 22, "1-2", { fs: 11, c: "var(--muted)" })}${T(105, 54, "3-12", { fs: 11, c: "var(--muted)" })}${T(204, 22, "13-18", { fs: 11, c: "var(--muted)" })}`);

// Flechas de tendencia en la tabla.
const tendencias = (aria, titulo, hor, ver, c) => marco(aria, `
  ${T(130, 24, titulo, { fs: 14, b: true })}
  <rect x="40" y="40" width="180" height="110" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
  <path d="M56 62 H 196" stroke="${c}" stroke-width="3.5"/><path d="M190 55 L 204 62 L 190 69" fill="${c}"/>${T(126, 56, hor, { fs: 12, b: true, c })}
  <path d="M60 76 V 136" stroke="${c}" stroke-width="3.5"/><path d="M53 130 L 60 144 L 67 130" fill="${c}"/>${T(74, 112, ver, { fs: 12, b: true, c, a: "start" })}
  ${T(130, 168, "periodo →   grupo ↓", { fs: 11, c: "var(--muted)" })}`);

module.exports = {
  materia: "Química",
  curso: "2-bachillerato",
  titulo: "El sistema periódico",
  minutos: 110,
  objetivos: [
    "Conocer la evolución histórica de la tabla periódica y el criterio actual de ordenación",
    "Relacionar la posición de un elemento (grupo, periodo y bloque) con su configuración electrónica",
    "Explicar la carga nuclear efectiva y el efecto pantalla",
    "Justificar la variación del radio atómico e iónico, la energía de ionización, la afinidad electrónica y la electronegatividad",
    "Explicar las anomalías de las energías de ionización y las energías de ionización sucesivas",
    "Relacionar las propiedades periódicas con el carácter metálico y la reactividad de los elementos",
  ],
  claves: ["tabla periódica", "número atómico", "grupo", "periodo", "bloques s p d f", "electrones de valencia", "carga nuclear efectiva", "efecto pantalla", "radio atómico", "radio iónico", "energía de ionización", "afinidad electrónica", "electronegatividad", "carácter metálico", "metales de transición"],
  pregunta: {
    texto: "¿Por qué el sodio explota en el agua y el oro dura miles de años sin estropearse?",
    respuesta: "Todo depende de lo fácil que sea quitarles electrones. El sodio tiene un solo electrón en su última capa, lejos del núcleo y poco atraído: <mark>lo pierde con muchísima facilidad</mark> y reacciona violentamente. El oro tiene muchos protones y sus electrones externos están muy atraídos, así que casi no reacciona con nada. La tabla periódica permite predecir esto sin hacer el experimento: es un mapa de cómo se comportan los electrones de cada elemento.",
  },
  lectura: {
    titulo: "Las casillas vacías de Mendeléiev",
    html: `<p>En 1869, Dmitri Mendeléiev, profesor en San Petersburgo, escribió los 63 elementos conocidos en fichas, con su masa atómica y sus propiedades, y las ordenó como si jugara a un solitario. Al colocarlas por masa creciente vio que las propiedades se repetían de forma periódica. Pero su genialidad fue otra: cuando un elemento no encajaba, dejaba una casilla vacía y se atrevía a decir que ese elemento existía, aunque nadie lo hubiera encontrado aún.</p><p>Predijo, por ejemplo, un «eka-silicio» de masa 72, densidad 5,5 g/cm³ y que formaría un óxido EO₂. Diecisiete años después se descubrió el germanio: masa 72,6, densidad 5,35 g/cm³ y óxido GeO₂. Fue un triunfo enorme, porque una teoría que predice algo que luego se comprueba es mucho más que una clasificación. Hoy la tabla tiene 118 elementos y sabemos por qué funciona: la periodicidad de las propiedades es consecuencia de la configuración electrónica. En este tema verás cómo la posición de un elemento en la tabla permite saber su tamaño, lo fácil que es quitarle o darle electrones y con qué otros elementos se combinará.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 Historia de la clasificación de los elementos", p: [
      "A principios del siglo XIX se conocían unos 50 elementos y los químicos buscaban un orden. <b>Döbereiner</b> (1829) agrupó elementos parecidos en <b>tríadas</b> (cloro, bromo y yodo), en las que la masa del central era la media de los otros dos. <b>Newlands</b> (1864) ordenó los elementos por masa y observó que cada ocho se repetían las propiedades, como las notas de una escala musical: su <b>ley de las octavas</b> solo funcionaba para los elementos ligeros.",
      "En 1869, <mark>Mendeléiev</mark> y, de forma independiente, Meyer, ordenaron los elementos por masa atómica creciente agrupando en columnas los de propiedades parecidas. Mendeléiev dejó huecos para elementos desconocidos, predijo sus propiedades e incluso invirtió el orden de algunas parejas (teluro y yodo) para respetar las propiedades. En 1913, <b>Moseley</b> midió los espectros de rayos X de los elementos y demostró que el criterio correcto es el <b>número atómico</b> Z, el número de protones, y no la masa. Así quedaron explicadas las inversiones. La <b>ley periódica</b> actual dice: las propiedades de los elementos son función periódica de su número atómico.",
    ], svg: pasos("Evolución histórica de la tabla periódica", ["Döbereiner: tríadas (1829)", "Newlands: octavas (1864)", "Mendeléiev: masa y huecos (1869)", "Moseley: número atómico (1913)"], "var(--pen)") }),
    bloque({ h: "1.2 La tabla periódica actual y la configuración electrónica", p: [
      "La tabla actual tiene 7 filas o <b>periodos</b> y 18 columnas o <b>grupos</b>. El número del periodo coincide con el <b>nivel más alto ocupado</b> (n) del átomo. Los elementos de un mismo grupo tienen la misma configuración de la capa de valencia, y por eso propiedades químicas parecidas: todos los alcalinos acaban en ns¹, todos los halógenos en ns² np⁵. La tabla se divide en <mark>bloques</mark> según el último subnivel que se llena: bloque <b>s</b> (grupos 1 y 2, con el helio), bloque <b>p</b> (grupos 13 a 18), bloque <b>d</b> (grupos 3 a 12, metales de transición) y bloque <b>f</b> (lantánidos y actínidos, transición interna).",
      "Así, a partir de la configuración se puede situar un elemento sin mirar la tabla. Por ejemplo, [Ar] 4s² 3d¹⁰ 4p³ tiene n = 4 (periodo 4), termina en p³ (bloque p, grupo 15): es el arsénico. Para el bloque d, el grupo es 2 + el número de electrones d: [Kr] 5s² 4d⁵ está en el grupo 7, periodo 5 (tecnecio). Los grupos tienen nombres tradicionales: alcalinos (1), alcalinotérreos (2), térreos o boroideos (13), carbonoideos (14), nitrogenoideos (15), anfígenos o calcógenos (16), halógenos (17) y gases nobles (18).",
    ], svg: tablaBloques, video: V("per-a", "Propiedades periódicas y configuración electrónica", "tabla periódica configuración electrónica") }),
    bloque({ h: "1.3 Carga nuclear efectiva y efecto pantalla", p: [
      "Para entender las propiedades periódicas hay que fijarse en un electrón de valencia y preguntarse con qué fuerza lo atrae el núcleo. El núcleo tiene Z protones, pero los electrones internos se interponen y repelen al electrón externo: lo <b>apantallan</b>. La carga que «siente» realmente el electrón es la <mark>carga nuclear efectiva</mark>, Z* = Z − S, donde S es la constante de apantallamiento. Una aproximación sencilla es restar a Z el número de electrones internos.",
      "Con esa aproximación, el sodio (Z = 11, 10 electrones internos) tiene Z* ≈ 1, y el cloro (Z = 17, 10 internos) Z* ≈ 7. Las reglas de Slater, más precisas, dan 2,2 y 6,1. La idea clave es doble: <b>a lo largo de un periodo</b>, Z aumenta en uno de un elemento al siguiente, pero el electrón que se añade va al mismo nivel y apantalla poco, así que Z* <b>aumenta</b> y los electrones externos están más atraídos. <b>Al bajar en un grupo</b>, Z* apenas cambia, pero los electrones de valencia están en un nivel más alejado del núcleo, y la atracción <b>disminuye</b>. Estas dos ideas explican casi todas las tendencias de la tabla.",
    ], extra: formula("Z* = Z − S"), svg: compara("Carga nuclear efectiva aproximada del sodio y del cloro", ["Sodio", ["Z = 11", "10 internos", "Z* ≈ 1", "poco atraído"]], ["Cloro", ["Z = 17", "10 internos", "Z* ≈ 7", "muy atraído"]], "var(--red)", "var(--leaf)") }),
    bloque({ h: "2.1 El radio atómico", p: [
      "El átomo no tiene un borde definido, así que el <b>radio atómico</b> se define como la mitad de la distancia entre los núcleos de dos átomos iguales unidos (radio covalente o metálico). Se mide en picómetros (1 pm = 10⁻¹² m) o en ángstroms (1 Å = 100 pm). Es la propiedad periódica más fácil de razonar.",
      "<mark>En un grupo, el radio aumenta hacia abajo</mark>, porque cada elemento tiene un nivel más de electrones: Li 152 pm, Na 186, K 227, Rb 248 y Cs 265. <mark>En un periodo, el radio disminuye hacia la derecha</mark>, porque aumenta la carga nuclear efectiva y los electrones, que están en el mismo nivel, son atraídos con más fuerza hacia el núcleo: el sodio mide 186 pm y el cloro, 99. En los metales de transición el radio varía poco, porque los electrones se añaden a un nivel interno (n − 1)d y apantallan bastante. Los átomos más grandes son los alcalinos de la parte baja y los más pequeños, el helio y el flúor.",
    ], svg: barras("Radio atómico de los alcalinos en picómetros", "Radio atómico (pm)", [["Li", 152, "var(--pen)", "152"], ["Na", 186, "var(--leaf)", "186"], ["K", 227, "#b45309", "227"], ["Rb", 248, "var(--red)", "248"], ["Cs", 265, "#7b3fc4", "265"]]) }),
    bloque({ h: "2.2 El radio iónico", p: [
      "Cuando un átomo pierde electrones y forma un <b>catión</b>, su radio <mark>disminuye</mark>: los electrones que quedan son atraídos por la misma carga nuclear y, a menudo, desaparece la capa más externa. El Na mide 186 pm y el Na⁺, 102 pm. Cuando gana electrones y forma un <b>anión</b>, el radio <mark>aumenta</mark>, porque aumenta la repulsión entre electrones con la misma carga nuclear: el Cl mide 99 pm y el Cl⁻, 181 pm.",
      "Un caso muy preguntado es el de las <b>especies isoelectrónicas</b>, que tienen el mismo número de electrones. Por ejemplo, N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺ y Al³⁺ tienen todos 10 electrones (configuración del neón). Como tienen la misma nube electrónica, el tamaño depende solo de la carga nuclear: <b>cuantos más protones, menor radio</b>. Por eso el orden es N³⁻ (146 pm) > O²⁻ (140) > F⁻ (133) > Na⁺ (102) > Mg²⁺ (72) > Al³⁺ (54). El tamaño de los iones influye en la energía de red de los compuestos iónicos y en muchos procesos biológicos, como el paso de iones por los canales de las neuronas.",
    ], svg: barras("Radios iónicos de una serie isoelectrónica con diez electrones en picómetros", "Radio iónico (pm), 10 electrones", [["N³⁻ (Z=7)", 146, "var(--pen)", "146"], ["O²⁻ (Z=8)", 140, "var(--pen)", "140"], ["F⁻ (Z=9)", 133, "var(--pen)", "133"], ["Na⁺ (Z=11)", 102, "var(--red)", "102"], ["Mg²⁺ (Z=12)", 72, "var(--red)", "72"], ["Al³⁺ (Z=13)", 54, "var(--red)", "54"]]) }),
    bloque({ h: "2.3 La energía de ionización", p: [
      "La <mark>energía de ionización</mark> (EI) es la energía mínima necesaria para arrancar el electrón más débilmente unido de un átomo en estado gaseoso y en su estado fundamental: X(g) → X⁺(g) + e⁻. Siempre es positiva (hay que aportar energía) y se mide en kJ/mol o eV. Cuanto menor es, más fácil es formar el catión y más carácter metálico tiene el elemento.",
      "<b>Aumenta hacia la derecha en un periodo</b> (mayor Z*, menor radio) y <b>disminuye al bajar en un grupo</b> (el electrón está más lejos). Los gases nobles tienen las más altas (He 2372 kJ/mol) y los alcalinos, las más bajas (Cs 376). Hay dos <b>anomalías</b> importantes en cada periodo: la EI del boro (801) es menor que la del berilio (899), porque el electrón 2p del boro está más alejado y apantallado que los 2s; y la del oxígeno (1314) es menor que la del nitrógeno (1402), porque el nitrógeno tiene el subnivel 2p semilleno, muy estable, y en el oxígeno el cuarto electrón 2p está emparejado y sufre más repulsión. Las <b>energías de ionización sucesivas</b> (EI₂, EI₃…) son cada vez mayores, y dan un gran salto cuando se empieza a arrancar electrones de una capa interna: así se deduce el grupo de un elemento.",
    ], extra: formula("X(g) + EI → X⁺(g) + e⁻"), svg: graf("Primera energía de ionización de los elementos del periodo 2: aumenta hacia la derecha con dos pequeñas caídas en el boro y el oxígeno", "Z (Li a Ne)", "EI (kJ/mol)", [{ p: [[0, 0.1], [0.14, 0.24], [0.28, 0.2], [0.43, 0.36], [0.57, 0.52], [0.71, 0.48], [0.86, 0.68], [1, 0.9]], c: "var(--red)", t: "Ne" }], T(80, 128, "B", { fs: 11, b: true, c: "var(--pen)" }) + T(184, 74, "O", { fs: 11, b: true, c: "var(--pen)" })), video: V("per-b", "La energía de ionización", "energía de ionización") }),
    bloque({ h: "2.4 La afinidad electrónica", p: [
      "La <mark>afinidad electrónica</mark> (AE) es la energía intercambiada cuando un átomo en estado gaseoso capta un electrón: X(g) + e⁻ → X⁻(g). Con el criterio de signos termodinámico, si se desprende energía la AE es <b>negativa</b>, lo que indica que el anión es más estable que el átomo. Los halógenos tienen las afinidades más negativas, porque al captar un electrón completan su octeto: el cloro −349 kJ/mol, el flúor −328 y el bromo −325.",
      "En general, la AE se hace <b>más negativa hacia la derecha</b> de un periodo y menos negativa al bajar en un grupo, aunque con muchas irregularidades. Los gases nobles, el berilio o el nitrógeno tienen afinidades positivas o casi nulas, porque el electrón tendría que entrar en un subnivel nuevo o romper una configuración semillena. Curiosamente, el flúor tiene una AE algo menos negativa que el cloro: es tan pequeño que el electrón que llega sufre mucha repulsión. Algunos libros definen la AE con el signo contrario (energía desprendida, positiva): en un examen conviene indicar qué criterio se usa. La segunda afinidad electrónica es siempre positiva, porque hay que meter un electrón en un ion que ya es negativo.",
    ], extra: formula("X(g) + e⁻ → X⁻(g) ; AE < 0 si se desprende energía"), svg: barras("Energía desprendida al captar un electrón en kilojulios por mol", "Energía liberada (kJ/mol)", [["Cl", 349, "var(--leaf)", "349"], ["F", 328, "var(--leaf)", "328"], ["Br", 325, "var(--leaf)", "325"], ["O", 141, "var(--pen)", "141"], ["C", 122, "var(--pen)", "122"], ["Na", 53, "var(--red)", "53"]]) }),
    bloque({ h: "2.5 La electronegatividad", p: [
      "La <mark>electronegatividad</mark> (EN) es la tendencia de un átomo a <b>atraer hacia sí los electrones de un enlace</b> que comparte con otro átomo. A diferencia de la EI y la AE, no es una energía medible directamente, sino una escala relativa. La más usada es la de <b>Pauling</b>, que asigna al flúor el valor máximo, 4,0 (3,98), y calcula las demás a partir de las energías de enlace. Mulliken propuso definirla como la media de la EI y la AE (en valor absoluto), lo que muestra que combina las dos tendencias.",
      "La EN <b>aumenta hacia la derecha</b> en un periodo y <b>disminuye al bajar</b> en un grupo, como la EI. Los elementos más electronegativos son F (4,0), O (3,4), N y Cl (3,0-3,2); los menos, los alcalinos pesados, como el cesio (0,8). Los gases nobles no suelen tener valor, porque apenas forman enlaces. La diferencia de electronegatividad entre dos átomos permite predecir el tipo de enlace: si es grande (más de 1,7-2 aproximadamente), el enlace es iónico; si es pequeña pero no nula, covalente polar; y si es nula, covalente apolar. Lo verás en los dos temas siguientes.",
    ], svg: tendencias("La electronegatividad aumenta hacia la derecha en un periodo y hacia arriba en un grupo", "Electronegatividad", "aumenta", "disminuye", "var(--leaf)"), video: V("per-c", "La electronegatividad", "electronegatividad") }),
    bloque({ h: "2.6 Carácter metálico y reactividad", p: [
      "El <b>carácter metálico</b> es la tendencia de un elemento a perder electrones y formar cationes. Es mayor cuanto menor es la energía de ionización, así que <mark>aumenta hacia la izquierda y hacia abajo</mark> de la tabla: el cesio y el francio son los elementos más metálicos. Los <b>no metales</b> están arriba a la derecha y tienden a ganar electrones. Entre ambos, en una diagonal escalonada que va del boro al astato, están los <b>semimetales</b> o metaloides (B, Si, Ge, As, Sb, Te), con propiedades intermedias: el silicio y el germanio son semiconductores.",
      "La <b>reactividad</b> de los metales crece al bajar en el grupo (el litio reacciona tranquilamente con el agua, el sodio con viveza y el potasio se inflama), porque cada vez pierden el electrón con más facilidad. En los no metales, en cambio, la reactividad crece hacia arriba: el flúor es el elemento más reactivo de todos y el yodo, el menos reactivo de los halógenos. El carácter metálico también se nota en los óxidos: los de los metales son <b>básicos</b> (Na₂O forma NaOH con agua), los de los no metales son <b>ácidos</b> (SO₃ forma H₂SO₄) y algunos, como el Al₂O₃, son <b>anfóteros</b>.",
    ], svg: tendencias("El carácter metálico aumenta hacia la izquierda en un periodo y hacia abajo en un grupo", "Carácter metálico", "disminuye", "aumenta", "var(--red)") }),
    bloque({ h: "3.1 Los grupos de los elementos representativos", p: [
      "Los <b>alcalinos</b> (grupo 1: Li, Na, K, Rb, Cs, Fr) son metales blandos, de baja densidad y muy reactivos, que se guardan en aceite. Forman cationes M⁺ y reaccionan con el agua desprendiendo hidrógeno. Los <b>alcalinotérreos</b> (grupo 2) son algo menos reactivos y forman cationes M²⁺; el calcio y el magnesio son esenciales para los huesos y la clorofila. En el <b>grupo 14</b> se pasa de un no metal (carbono) a metaloides (silicio, germanio) y a metales (estaño, plomo), un ejemplo perfecto del aumento del carácter metálico al bajar.",
      "Los <mark>halógenos</mark> (grupo 17: F, Cl, Br, I, At) son no metales muy reactivos, formados por moléculas diatómicas. A temperatura ambiente el flúor y el cloro son gases, el bromo es líquido y el yodo sólido, porque al aumentar el tamaño de la molécula crecen las fuerzas intermoleculares. Forman aniones X⁻ y sales con los metales (halógeno significa «formador de sales»). Los <b>gases nobles</b> (grupo 18) tienen la capa de valencia completa (ns² np⁶), las EI más altas y casi nula reactividad; aun así, desde 1962 se conocen compuestos de xenón con flúor y oxígeno. El hidrógeno es un caso especial: se coloca en el grupo 1 por su configuración 1s¹, pero es un no metal.",
    ], svg: rejilla("Propiedades de algunos grupos de la tabla periódica", ["Grupo", "Valencia", "Ion típico"], [["Alcalinos", "ns¹", "M⁺"], ["Alcalinotérreos", "ns²", "M²⁺"], ["Anfígenos", "ns² np⁴", "X²⁻"], ["Halógenos", "ns² np⁵", "X⁻"], ["Gases nobles", "ns² np⁶", "—"]], "var(--leaf)") }),
    bloque({ h: "3.2 Los metales de transición", p: [
      "Los <mark>metales de transición</mark> (bloque d) llenan los orbitales (n − 1)d. Son metales duros, densos, buenos conductores y con puntos de fusión altos (el wolframio funde a 3422 °C). A diferencia de los representativos, suelen tener <b>varios estados de oxidación</b>, porque los electrones ns y (n − 1)d tienen energías muy parecidas: el hierro forma Fe²⁺ y Fe³⁺, el cobre Cu⁺ y Cu²⁺, y el manganeso llega de +2 a +7 (en el permanganato, MnO₄⁻).",
      "Muchos de sus compuestos son <b>coloreados</b> (el sulfato de cobre es azul, el dicromato naranja, el permanganato violeta) porque los electrones d absorben luz visible al saltar entre orbitales d de energía ligeramente distinta. Los que tienen electrones desapareados son <b>paramagnéticos</b>, y el hierro, el cobalto y el níquel son ferromagnéticos, la base de los imanes. Además, son excelentes <b>catalizadores</b>: el hierro en la síntesis del amoniaco, el platino y el rodio en los catalizadores de los coches, el vanadio en la fabricación del ácido sulfúrico. Los lantánidos y actínidos (bloque f) se llaman de transición interna; los lantánidos o «tierras raras» son clave en imanes de motores eléctricos y pantallas.",
    ], svg: compara("Comparación entre los metales representativos y los de transición", ["Representativos", ["un estado de", "oxidación", "compuestos", "incoloros"]], ["Transición", ["varios estados", "de oxidación", "compuestos de", "colores, catalizan"]], "var(--pen)", "#b45309") }),
    bloque({ h: "3.3 La tabla periódica y la sostenibilidad", p: [
      "La tabla periódica no es solo un esquema teórico: también es un mapa de recursos. De los 90 elementos naturales, unos pocos (oxígeno, silicio, aluminio, hierro, calcio, sodio, potasio y magnesio) forman casi el 99 % de la corteza terrestre. Otros son muy escasos y están concentrados en pocos países, pero son imprescindibles para la tecnología: un teléfono móvil contiene más de 60 elementos distintos, entre ellos indio (pantalla táctil), tántalo (condensadores), cobalto y litio (batería) y tierras raras como el neodimio (vibrador y altavoces).",
      "La Unión Europea publica una lista de <mark>materias primas críticas</mark> por su importancia económica y su riesgo de suministro, que incluye el litio, el cobalto, el galio o las tierras raras. Algunos, como el helio, se pierden para siempre al escapar a la atmósfera. Por eso la química actual busca sustituir elementos escasos por otros abundantes (baterías de sodio en lugar de litio), reciclar los residuos electrónicos, que son auténticas «minas urbanas», y diseñar productos fáciles de desmontar. Elegir bien los elementos es una de las decisiones más importantes de la química sostenible.",
    ], svg: barras("Abundancia aproximada de los elementos más frecuentes en la corteza terrestre en tanto por ciento en masa", "Abundancia en la corteza (%)", [["O", 46, "var(--pen)", "46 %"], ["Si", 28, "var(--leaf)", "28 %"], ["Al", 8, "#b45309", "8 %"], ["Fe", 5, "var(--red)", "5 %"], ["Ca", 4, "#7b3fc4", "4 %"]]) }),
  ],
  figura: figura("Las propiedades periódicas", "Cómo varían las propiedades en la tabla", [["Radio", "← y ↓ aumenta", "más niveles, menos Z*"], ["Ionización", "→ y ↑ aumenta", "anomalías B y O"], ["Electronegatividad", "→ y ↑ aumenta", "máxima en el flúor"], ["Carácter metálico", "← y ↓ aumenta", "máximo en Cs y Fr"]]),
  video: V("per-a", "Propiedades periódicas y configuración electrónica", "tabla periódica configuración electrónica"),
  ejemplos: [
    { enunciado: "Sitúa en la tabla periódica el elemento de configuración 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵. Indica de qué elemento se trata y su ion más probable.", pasos: ["El nivel más alto es n = 4: periodo 4.", "Termina en p⁵: bloque p, grupo 15 + 2 = 17 (halógenos).", "Z = 35: es el bromo.", "Le falta un electrón para el octeto: Br⁻."], resultado: "Bromo, periodo 4, grupo 17; ion Br⁻." },
    { enunciado: "Ordena de menor a mayor radio: Na, Mg, K, Cl. Justifica.", pasos: ["Na, Mg y Cl están en el periodo 3: el radio disminuye hacia la derecha (Z* crece): Na > Mg > Cl.", "K está en el periodo 4, debajo del Na: tiene un nivel más.", "Orden: Cl < Mg < Na < K."], resultado: "Cl < Mg < Na < K." },
    { enunciado: "Ordena de menor a mayor radio los iones S²⁻, Cl⁻, K⁺ y Ca²⁺.", pasos: ["Todos tienen 18 electrones: son isoelectrónicos.", "Con los mismos electrones, más protones atraen más la nube: menor radio.", "Z: S 16, Cl 17, K 19, Ca 20."], resultado: "Ca²⁺ < K⁺ < Cl⁻ < S²⁻." },
    { enunciado: "Explica por qué la primera energía de ionización del oxígeno (1314 kJ/mol) es menor que la del nitrógeno (1402 kJ/mol).", pasos: ["N: 2p³, tres electrones desapareados (subnivel semilleno, estable).", "O: 2p⁴, un orbital 2p tiene dos electrones emparejados.", "La repulsión entre los dos electrones del mismo orbital facilita arrancar uno."], resultado: "El oxígeno pierde con más facilidad su electrón emparejado y su EI es menor, aunque tenga más Z*." },
    { enunciado: "Las energías de ionización sucesivas de un elemento del periodo 3 son 578, 1817, 2745 y 11.577 kJ/mol. ¿De qué elemento se trata?", pasos: ["Hay un gran salto entre EI₃ y EI₄.", "Eso indica que tiene 3 electrones de valencia: el cuarto sale de una capa interna.", "Periodo 3 con 3 electrones de valencia: grupo 13."], resultado: "Es el aluminio, que forma Al³⁺." },
    { enunciado: "Dados A (Z = 11), B (Z = 17) y C (Z = 19): ordénalos por energía de ionización y por electronegatividad, e indica la fórmula del compuesto entre A y B.", pasos: ["A = Na (grupo 1, periodo 3), B = Cl (grupo 17, periodo 3), C = K (grupo 1, periodo 4).", "EI: K < Na < Cl (el K está más abajo y el Cl más a la derecha).", "EN: igual orden, K < Na < Cl.", "Na pierde 1 e⁻ y Cl gana 1: NaCl, compuesto iónico."], resultado: "EI y EN: C < A < B; compuesto AB (NaCl)." },
  ],
  errores: [
    "Pensar que el radio aumenta hacia la derecha porque «hay más electrones»: disminuye, porque crece la carga nuclear efectiva.",
    "Confundir energía de ionización (quitar un electrón) con afinidad electrónica (captarlo).",
    "Creer que la electronegatividad es una energía medible: es una escala relativa.",
    "Ordenar especies isoelectrónicas por su número de electrones en vez de por su número de protones.",
    "Olvidar las anomalías de la energía de ionización (Be > B y N > O).",
    "Situar los elementos del bloque d con el número de electrones de valencia sin sumar los dos electrones s.",
  ],
  ejercicios: [
    B("¿Qué criterio se usa hoy para ordenar los elementos en la tabla y quién lo estableció?", "El número atómico Z (número de protones); lo estableció Moseley en 1913 con los espectros de rayos X."),
    B("¿Qué tienen en común los elementos de un mismo grupo? ¿Y los de un mismo periodo?", "Los del grupo tienen la misma configuración de la capa de valencia (propiedades químicas parecidas); los del periodo tienen el mismo número de niveles ocupados."),
    B("Indica el grupo y el periodo de: 1s² 2s² 2p⁴; [Ne] 3s²; [Ar] 4s¹.", "Grupo 16, periodo 2 (oxígeno); grupo 2, periodo 3 (magnesio); grupo 1, periodo 4 (potasio)."),
    B("Escribe la configuración de la capa de valencia de los halógenos y de los alcalinotérreos.", "Halógenos: ns² np⁵. Alcalinotérreos: ns²."),
    B("¿Qué es la carga nuclear efectiva?", "La carga positiva que realmente siente un electrón, igual a Z menos el apantallamiento de los electrones internos."),
    B("Ordena por radio creciente: Li, Na, K.", "Li < Na < K: al bajar en el grupo se añade un nivel."),
    B("¿Es mayor el Mg o el Mg²⁺? ¿Y el O o el O²⁻?", "El Mg es mayor que el Mg²⁺ (el catión pierde la capa externa). El O²⁻ es mayor que el O (más repulsión entre electrones)."),
    B("Define energía de ionización y escribe la ecuación para el sodio.", "Energía mínima para arrancar el electrón más externo de un átomo gaseoso en estado fundamental. Na(g) → Na⁺(g) + e⁻."),
    B("¿Qué elemento es el más electronegativo? ¿Y el más metálico?", "El flúor es el más electronegativo; el francio (o el cesio, entre los estables) es el más metálico."),
    B("Clasifica como metal, no metal o semimetal: S, Fe, Si, Ca, Br, As.", "Metales: Fe, Ca. No metales: S, Br. Semimetales: Si, As."),
    B("¿Por qué los gases nobles son tan poco reactivos?", "Porque tienen la capa de valencia completa (ns² np⁶), muy estable, y energías de ionización muy altas."),
    B("Nombra tres propiedades características de los metales de transición.", "Varios estados de oxidación, compuestos coloreados, actividad catalítica (también paramagnetismo y altos puntos de fusión)."),
    M("Sitúa en la tabla (grupo, periodo y bloque) el elemento de Z = 26 y el de Z = 50.", "Z = 26: [Ar] 4s² 3d⁶, periodo 4, grupo 8, bloque d (hierro). Z = 50: [Kr] 5s² 4d¹⁰ 5p², periodo 5, grupo 14, bloque p (estaño)."),
    M("Estima con la regla sencilla (Z menos electrones internos) la carga nuclear efectiva del Mg, del P y del Ca sobre sus electrones de valencia.", "Mg: 12 − 10 = 2. P: 15 − 10 = 5. Ca: 20 − 18 = 2."),
    M("Ordena de menor a mayor radio: F, O, S, Na. Justifica.", "F < O < S < Na. F y O en el periodo 2 (F más a la derecha). S está debajo del O. Na está en el periodo 3 a la izquierda del S."),
    M("Ordena por radio creciente la serie isoelectrónica Na⁺, F⁻, Mg²⁺, O²⁻, Ne.", "Mg²⁺ < Na⁺ < Ne < F⁻ < O²⁻: todos tienen 10 electrones y el radio disminuye al aumentar Z."),
    M("Ordena de menor a mayor primera energía de ionización: Na, Mg, Al, P, S, Cl, Ar.", "Na < Al < Mg < S < P < Cl < Ar. Al < Mg por el electrón 3p más alejado; S < P por el emparejamiento en 3p⁴."),
    M("Las EI sucesivas de un elemento son 738, 1451, 7733 y 10.540 kJ/mol. ¿A qué grupo pertenece? ¿Qué ion forma?", "El gran salto está entre EI₂ y EI₃: tiene 2 electrones de valencia. Grupo 2 (alcalinotérreos), ion M²⁺ (es el magnesio)."),
    M("¿Por qué la segunda energía de ionización del sodio (4562 kJ/mol) es casi diez veces la primera (496)?", "Porque tras perder el 3s, el Na⁺ tiene configuración de gas noble: el segundo electrón sale de la capa 2, mucho más cercana al núcleo y menos apantallada."),
    M("¿Por qué la afinidad electrónica del cloro es más negativa que la del flúor?", "El flúor es muy pequeño: el electrón que entra sufre una gran repulsión de los electrones de la capa 2, muy juntos. En el cloro, más grande, esa repulsión es menor."),
    M("Ordena por electronegatividad creciente: C, N, O, F, Li, Cs.", "Cs < Li < C < N < O < F."),
    M("Para A (Z = 9) y B (Z = 20), indica configuración, tipo de elemento, ion más estable y fórmula del compuesto que forman.", "A: 1s² 2s² 2p⁵, halógeno (flúor), A⁻. B: [Ar] 4s², alcalinotérreo (calcio), B²⁺. Compuesto BA₂ (CaF₂), iónico."),
    M("Explica por qué el potasio reacciona con el agua más violentamente que el litio.", "El potasio tiene el electrón de valencia más lejos del núcleo y una energía de ionización menor (419 frente a 520 kJ/mol): lo pierde con más facilidad."),
    M("Indica el carácter ácido, básico o anfótero de los óxidos Na₂O, Al₂O₃ y SO₂, y escribe la reacción de Na₂O y SO₂ con agua.", "Na₂O básico: Na₂O + H₂O → 2 NaOH. Al₂O₃ anfótero. SO₂ ácido: SO₂ + H₂O → H₂SO₃."),
    M("¿Por qué el radio atómico varía poco en los metales de transición de un mismo periodo?", "Porque los electrones se añaden al subnivel interno (n − 1)d, que apantalla bastante a los ns: la carga nuclear efectiva sobre los electrones externos crece muy poco."),
    A("(Tipo PAU) Dados los elementos de Z = 12, 16 y 19: a) escribe sus configuraciones; b) ordénalos por radio; c) ordénalos por primera energía de ionización; d) ¿qué compuesto formarían el de Z = 16 y el de Z = 19?", "a) Mg [Ne] 3s²; S [Ne] 3s² 3p⁴; K [Ar] 4s¹. b) S < Mg < K. c) K < Mg < S. d) K₂S, iónico (K⁺ y S²⁻)."),
    A("(Tipo PAU) Razona si son verdaderas o falsas: a) el ion Na⁺ tiene mayor radio que el átomo Ne; b) la EI del B es mayor que la del Be; c) el Cl es más electronegativo que el S.", "a) Falsa: son isoelectrónicos y el Na⁺ tiene 11 protones frente a 10: es menor. b) Falsa: el electrón 2p del boro está menos atraído que los 2s del Be (801 < 899 kJ/mol). c) Verdadera: está más a la derecha en el mismo periodo (3,2 frente a 2,6)."),
    A("Con las reglas de Slater (electrones del mismo grupo ns np apantallan 0,35; los del nivel n − 1, 0,85; los de niveles inferiores, 1,00), calcula Z* para un electrón 3p del cloro y un electrón 3s del sodio.", "Cl (1s² 2s² 2p⁶ 3s² 3p⁵): S = 6 · 0,35 + 8 · 0,85 + 2 · 1,00 = 10,9 → Z* = 6,1. Na: S = 8 · 0,85 + 2 · 1,00 = 8,8 → Z* = 2,2."),
    A("La EI del hidrógeno es 1312 kJ/mol. Calcula la longitud de onda máxima de la luz capaz de ionizar un átomo de hidrógeno.", "E por átomo = 1,312 · 10⁶ / 6,022 · 10²³ = 2,18 · 10⁻¹⁸ J. λ = hc/E = 6,63 · 10⁻³⁴ · 3 · 10⁸ / 2,18 · 10⁻¹⁸ = 9,1 · 10⁻⁸ m = 91 nm (ultravioleta)."),
    A("Calcula la energía necesaria para formar 10 g de iones Na⁺(g) a partir de átomos de sodio gaseosos (EI = 496 kJ/mol).", "n = 10 / 23 = 0,435 mol. E = 0,435 · 496 = 216 kJ."),
    A("Calcula la energía para convertir 1 mol de Mg(g) en Mg²⁺(g) y explica por qué el Mg²⁺ es estable en los compuestos aunque cueste tanta energía.", "EI₁ + EI₂ = 738 + 1451 = 2189 kJ/mol. Se compensa con creces con la energía de red al formar el sólido iónico (MgO, −3791 kJ/mol) o con la de hidratación en disolución."),
    A("(Tipo PAU) Un elemento X del periodo 4 forma un ion X²⁺ de configuración [Ar] 3d⁵. Identifícalo, escribe la configuración del átomo neutro e indica cuántos electrones desapareados tiene y si es paramagnético.", "X²⁺ tiene 23 electrones, así que X tiene 25: es el manganeso. Mn: [Ar] 4s² 3d⁵ (pierde los dos 4s para formar Mn²⁺). Tiene 5 electrones desapareados en los orbitales 3d (regla de Hund): es paramagnético."),
    A("Explica por qué el galio (Z = 31) tiene un radio atómico (135 pm) casi igual que el del aluminio (143 pm), aunque esté debajo.", "Entre el Al y el Ga se intercalan los 10 metales de transición: los electrones 3d apantallan mal y la carga nuclear efectiva del Ga aumenta mucho (contracción del bloque d), compensando el nivel extra."),
    A("Diseña una prueba para distinguir, por su reactividad con agua, tres muestras de litio, sodio y potasio, y justifícala con las propiedades periódicas.", "Echar un trocito de cada uno en agua con fenolftaleína, con pantalla protectora: el Li burbujea suavemente, el Na se mueve y funde, el K se inflama (llama lila). La reactividad crece al bajar porque la EI disminuye (520, 496, 419 kJ/mol). En todos el agua se vuelve rosa: se forma el hidróxido básico."),
    A("Busca por qué el hidrógeno no encaja bien en ningún grupo y dónde podría colocarse.", "Tiene 1 electrón como los alcalinos (forma H⁺), pero es un no metal gaseoso diatómico y puede ganar un electrón para formar H⁻ (hidruros) como los halógenos; su EN (2,2) se parece a la del carbono. Por eso a veces se coloca aparte, encima de la tabla."),
  ],
  quiz: [
    q4("La ley de las octavas es de…", ["Döbereiner", "Newlands", "Mendeléiev", "Moseley"], 1, "1864."),
    q4("Mendeléiev ordenó los elementos por…", ["número atómico", "masa atómica", "electronegatividad", "radio"], 1, "Y dejó huecos."),
    q4("El periodo de un elemento coincide con…", ["los electrones de valencia", "el nivel más alto ocupado", "el número de protones", "el número de neutrones"], 1, "n más alto."),
    q4("Los elementos del bloque d se llaman…", ["alcalinos", "halógenos", "metales de transición", "gases nobles"], 2, "Grupos 3 a 12."),
    q4("La configuración ns² np⁵ corresponde a…", ["alcalinos", "anfígenos", "halógenos", "gases nobles"], 2, "Grupo 17."),
    q4("En un periodo, hacia la derecha, la carga nuclear efectiva…", ["disminuye", "aumenta", "no cambia", "se anula"], 1, "Crece Z y el apantallamiento es pequeño."),
    q4("El radio atómico en un grupo…", ["aumenta hacia abajo", "disminuye hacia abajo", "no cambia", "es igual al iónico"], 0, "Más niveles."),
    q4("¿Cuál es mayor?", ["Cl", "Cl⁻", "son iguales", "depende"], 1, "El anión es mayor que su átomo."),
    q4("En una serie isoelectrónica, el menor radio lo tiene…", ["el que tiene menos protones", "el que tiene más protones", "el anión", "el gas noble"], 1, "Más atracción."),
    q4("La energía de ionización…", ["siempre se desprende", "siempre hay que aportarla", "es negativa", "es cero en los gases nobles"], 1, "Es positiva."),
    q4("¿Qué elemento tiene la mayor EI?", ["Na", "Cl", "He", "Cs"], 2, "2372 kJ/mol."),
    q4("La EI del oxígeno es menor que la del nitrógeno porque…", ["el O es más grande", "el N tiene el 2p semilleno", "el O tiene menos protones", "el N es un gas"], 1, "Y el O tiene un electrón emparejado."),
    q4("Un gran salto entre EI₂ y EI₃ indica que el elemento es…", ["alcalino", "alcalinotérreo", "térreo", "halógeno"], 1, "Tiene 2 electrones de valencia."),
    q4("La afinidad electrónica más negativa la tiene…", ["F", "Cl", "O", "Ne"], 1, "−349 kJ/mol."),
    q4("La electronegatividad es…", ["una energía de ionización", "la tendencia a atraer los electrones de un enlace", "el tamaño del átomo", "la carga del núcleo"], 1, "Escala relativa de Pauling."),
    q4("El elemento más electronegativo es…", ["O", "Cl", "F", "N"], 2, "3,98 en la escala de Pauling."),
    q4("El carácter metálico aumenta…", ["hacia arriba y a la derecha", "hacia abajo y a la izquierda", "solo hacia la derecha", "no varía"], 1, "Menor EI."),
    q4("Un óxido de un no metal es…", ["básico", "ácido", "neutro siempre", "metálico"], 1, "Con agua da un ácido."),
    q4("Una propiedad típica de los metales de transición es…", ["un solo estado de oxidación", "compuestos coloreados", "ser gases", "no conducir"], 1, "Por los electrones d."),
    q4("El germanio fue un elemento predicho por…", ["Moseley", "Mendeléiev", "Newlands", "Bohr"], 1, "El eka-silicio."),
  ],
  examen: [
    q4("Grupo y periodo de [Ne] 3s² 3p³:", ["15 y 3", "13 y 3", "5 y 3", "15 y 2"], 0, "p³ → grupo 15."),
    q4("Elemento de Z = 24 está en el grupo…", ["4", "6", "14", "16"], 1, "[Ar] 4s¹ 3d⁵: 6 electrones."),
    q4("Orden de radio creciente:", ["K < Na < Li", "Li < Na < K", "Na < Li < K", "Li < K < Na"], 1, "Aumenta al bajar."),
    q4("Orden de radio creciente de Al³⁺, Mg²⁺, Na⁺:", ["Na⁺ < Mg²⁺ < Al³⁺", "Al³⁺ < Mg²⁺ < Na⁺", "Mg²⁺ < Al³⁺ < Na⁺", "iguales"], 1, "Isoelectrónicos: más protones, menor."),
    q4("¿Qué elemento tiene menor EI?", ["Li", "Na", "K", "Be"], 2, "Más abajo en el grupo 1."),
    q4("EI sucesivas 496, 4562, 6912: el elemento es del grupo…", ["1", "2", "13", "17"], 0, "Salto tras la primera."),
    q4("Z* aproximada del Cl (Z = 17) con la regla sencilla:", ["17", "10", "7", "1"], 2, "17 − 10."),
    q4("Fórmula del compuesto entre Z = 20 y Z = 17:", ["CaCl", "CaCl₂", "Ca₂Cl", "CaCl₃"], 1, "Ca²⁺ y Cl⁻."),
  ],
  feynman: ["Por qué Mendeléiev dejó casillas vacías", "Qué es la carga nuclear efectiva", "Por qué el radio disminuye hacia la derecha aunque haya más electrones", "Por qué los cationes son más pequeños que sus átomos", "Por qué las energías de ionización sucesivas delatan el grupo", "Qué diferencia hay entre afinidad electrónica y electronegatividad"],
  mapa: mapaB("SISTEMA PERIÓDICO", [["Ordenación", "Z, grupos, periodos, bloques", "var(--pen)"], ["Z efectiva", "Z* = Z − S", "#b45309"], ["Tamaño", "radio atómico e iónico", "var(--leaf)"], ["Energías", "EI, AE, EN, carácter metálico", "var(--red)"]]),
  tarjetas: [
    ["Ley periódica", "Las propiedades de los elementos son función periódica de Z."],
    ["Periodo", "Fila: indica el nivel más alto ocupado."],
    ["Grupo", "Columna: misma configuración de la capa de valencia."],
    ["Bloques", "s (1-2), p (13-18), d (3-12), f (transición interna)."],
    ["Carga nuclear efectiva", "Z* = Z − S."],
    ["Radio atómico", "Aumenta hacia abajo y hacia la izquierda."],
    ["Radio iónico", "Catión menor que su átomo; anión mayor."],
    ["Isoelectrónicos", "Mismos electrones: menor radio con más protones."],
    ["Energía de ionización", "X(g) → X⁺(g) + e⁻; aumenta hacia arriba y a la derecha."],
    ["Afinidad electrónica", "X(g) + e⁻ → X⁻(g); muy negativa en los halógenos."],
    ["Electronegatividad", "Atracción de los electrones de un enlace; máxima en el F."],
    ["Carácter metálico", "Tendencia a perder electrones; máximo abajo a la izquierda."],
  ],
  glosario: [
    ["Número atómico", "Número de protones del núcleo; ordena la tabla."],
    ["Electrones de valencia", "Electrones de la última capa, que deciden la química."],
    ["Bloque", "Zona de la tabla según el último subnivel ocupado."],
    ["Efecto pantalla", "Reducción de la atracción del núcleo por los electrones internos."],
    ["Radio covalente", "Mitad de la distancia entre los núcleos de dos átomos iguales enlazados."],
    ["Catión", "Ion con carga positiva."],
    ["Anión", "Ion con carga negativa."],
    ["Serie isoelectrónica", "Especies con el mismo número de electrones."],
    ["Energías de ionización sucesivas", "Energías para arrancar el 2.º, 3.º… electrón."],
    ["Escala de Pauling", "Escala de electronegatividades con el flúor en 4,0."],
    ["Semimetal", "Elemento con propiedades entre metal y no metal."],
    ["Óxido anfótero", "Óxido que reacciona con ácidos y con bases."],
    ["Metal de transición", "Elemento del bloque d."],
    ["Tierras raras", "Lantánidos, con escandio e itrio; clave en tecnología."],
    ["Materia prima crítica", "Recurso importante y con riesgo de suministro."],
  ],
  situacion: {
    titulo: "La tabla periódica de mi móvil",
    reto: "Una ONG de reciclaje electrónico os pide una infografía que explique qué elementos hay en un teléfono móvil, dónde están en la tabla y por qué conviene reciclarlos.",
    pasos: [
      "Buscad qué elementos contiene un móvil (pantalla, batería, circuitos, carcasa, imanes) y su función.",
      "Colocadlos en una tabla periódica en blanco y coloreadlos por bloques y por su función en el aparato.",
      "Relacionad cada función con una propiedad periódica (por ejemplo, el litio por su baja masa y su baja energía de ionización).",
      "Investigad cuáles son materias primas críticas para la Unión Europea y de qué países proceden.",
      "Proponed tres medidas para recuperarlos y estimad cuántos móviles sin usar hay en vuestras casas.",
    ],
    producto: "Una infografía en forma de tabla periódica del móvil, con un breve texto sobre reciclaje.",
    evaluacion: ["Los elementos están bien situados en la tabla y bien clasificados por bloques.", "Las propiedades periódicas se relacionan correctamente con su uso.", "Se usan fuentes fiables sobre materias primas críticas.", "Las propuestas de reciclaje son concretas y realistas."],
  },
  familias: [
    "Buscad en la cocina sustancias con elementos de distintos grupos: sal (Na, Cl), bicarbonato, papel de aluminio.",
    "Contad cuántos móviles, cargadores y pilas viejas tenéis en casa y llevadlos a un punto limpio.",
    "Jugad a adivinar elementos con pistas de la tabla: «estoy en el periodo 3 y tengo 2 electrones de valencia».",
    "Ved juntos un vídeo sobre la historia de la tabla periódica y la predicción del germanio.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Enlace químico y estructura de la materia»: la tabla periódica y la configuración electrónica, carga nuclear efectiva, y propiedades periódicas (radio atómico e iónico, energía de ionización, afinidad electrónica, electronegatividad) y su relación con el comportamiento químico.`,
    ideas: [
      "Construir una tabla periódica gigante en el pasillo con fichas de cada elemento hechas por los alumnos.",
      "Graficar en hoja de cálculo la EI frente a Z para los 36 primeros elementos y discutir las anomalías.",
      "Reacción del Li, Na y K con agua (demostración del profesor con pantalla) o vídeo.",
      "Debate sobre materias primas críticas y minería urbana de residuos electrónicos.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    { t: "Tabla periódica de la IUPAC", url: "https://iupac.org/what-we-do/periodic-table-of-elements/" },
    { t: "Ptable, tabla periódica interactiva con propiedades", url: "https://ptable.com/?lang=es" },
    { t: "Materias primas críticas, Comisión Europea", url: "https://single-market-economy.ec.europa.eu/sectors/raw-materials/areas-specific-interest/critical-raw-materials_es" },
  ],
  revisado: "2026-11-21",
};
