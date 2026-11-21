// Ciencias Generales 2º Bachillerato · Las reacciones químicas (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, arbol, cadena } = require("./_bach2-cg");

// Reorganización de átomos: 2 H₂ + O₂ → 2 H₂O.
const atomosSVG = marco("En la reacción 2 H₂ + O₂ → 2 H₂O los átomos se reorganizan: a cada lado hay 4 hidrógenos y 2 oxígenos", `
  ${T(130, 22, "2 H₂ + O₂ → 2 H₂O", { fs: 14, b: true, c: "var(--pen)" })}
  ${[[30, 70], [30, 110]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="var(--water)" stroke="var(--pen)"/><circle cx="${x + 16}" cy="${y}" r="9" fill="var(--water)" stroke="var(--pen)"/>`).join("")}
  ${T(66, 94, "+", { fs: 18, b: true })}<circle cx="86" cy="90" r="12" fill="var(--red)" fill-opacity=".85"/><circle cx="108" cy="90" r="12" fill="var(--red)" fill-opacity=".85"/>
  <path d="M128 90 H 150" stroke="var(--ink)" stroke-width="3" marker-end="url(#raA)"/>
  ${[[196, 66], [196, 120]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="13" fill="var(--red)" fill-opacity=".85"/><circle cx="${x - 15}" cy="${y + 12}" r="8.5" fill="var(--water)" stroke="var(--pen)"/><circle cx="${x + 15}" cy="${y + 12}" r="8.5" fill="var(--water)" stroke="var(--pen)"/>`).join("")}
  ${T(130, 162, "4 H y 2 O antes · 4 H y 2 O después", { fs: 11, b: true, c: "var(--muted)" })}`, `<marker id="raA" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker>`);

// Diagrama de energía exotérmica / endotérmica.
const energiaSVG = marco("Diagramas de energía: en una reacción exotérmica los productos tienen menos energía que los reactivos y en una endotérmica más; en ambas hay que superar la energía de activación", `
  ${[[14, "Exotérmica", "var(--red)", 100, 140, "ΔH &lt; 0"], [138, "Endotérmica", "var(--pen)", 130, 84, "ΔH &gt; 0"]].map(([x, t, c, yr, yp, dh]) => `
  <path d="M${x + 6} 30 V 160 H ${x + 116}" fill="none" stroke="var(--muted)" stroke-width="1.6"/>
  <path d="M${x + 8} ${yr} H ${x + 30} C ${x + 46} ${yr} ${x + 50} 44 ${x + 60} 44 C ${x + 70} 44 ${x + 74} ${yp} ${x + 90} ${yp} H ${x + 112}" fill="none" stroke="${c}" stroke-width="3"/>
  <path d="M${x + 100} ${yr} V ${yp}" stroke="var(--ink)" stroke-width="1.4" stroke-dasharray="3 3"/>
  ${T(x + 62, 22, t, { fs: 11.5, b: true, c })}${T(x + 18, yr - 6, "R", { fs: 10, b: true })}${T(x + 100, yp - 6, "P", { fs: 10, b: true })}${T(x + 62, 174, dh, { fs: 10.5, b: true, c })}`).join("")}`);

// Escala de pH.
const phSVG = L5.escala("Escala de pH de algunas sustancias cotidianas", "Escala de pH", [["1", "jugo gástrico", "var(--red)"], ["3", "vinagre", "var(--red)"], ["7", "agua pura", "var(--leaf)"], ["8", "bicarbonato", "var(--pen)"], ["13", "lejía", "var(--pen)"]], "ácido", "básico");

module.exports = tema({
  titulo: "Las reacciones químicas",
  minutos: 120,
  secciones: [4, 4, 4],
  objetivos: [
    "Distinguir cambios físicos y químicos e interpretar una reacción como una reorganización de átomos según la teoría de colisiones",
    "Escribir y ajustar ecuaciones químicas aplicando la ley de conservación de la masa",
    "Usar el mol, la masa molar y el volumen molar en cálculos estequiométricos con reactivo limitante y rendimiento",
    "Explicar los factores que modifican la velocidad de reacción y el papel de los catalizadores",
    "Clasificar reacciones de interés (ácido-base, redox, combustión, precipitación) y calcular el pH",
    "Valorar la química en la sociedad y los principios de la química verde y la economía circular",
  ],
  claves: ["reacción química", "reactivo", "producto", "ecuación química", "ajuste", "conservación de la masa", "mol", "masa molar", "estequiometría", "reactivo limitante", "rendimiento", "energía de activación", "catalizador", "pH", "oxidación-reducción", "química verde"],
  pregunta: {
    texto: "Si en una reacción la masa se conserva, ¿por qué un tronco pesa mucho más que las cenizas que deja al quemarse?",
    respuesta: "Porque la masa <b>no desaparece</b>: se va al aire. En la combustión, la madera reacciona con el <mark>oxígeno</mark> del aire y se forman sobre todo <b>dióxido de carbono y vapor de agua</b>, que son gases y escapan. Si pesáramos todo en un recipiente cerrado, la masa de la madera más el oxígeno consumido sería exactamente igual a la de las cenizas, el CO₂ y el agua. Es la <b>ley de conservación de la masa</b> que demostró Lavoisier.",
  },
  lectura: {
    titulo: "Pan a partir del aire",
    html: `<p>A principios del siglo XX, la humanidad se enfrentaba a un problema enorme: los cultivos necesitaban nitrógeno, y las reservas de abonos naturales, como el guano de las aves marinas de Perú o el salitre de Chile, se estaban agotando. Paradójicamente, el aire que respiramos es un 78 % de nitrógeno, pero en forma de N₂, una molécula con un triple enlace que casi ninguna planta puede aprovechar.</p><p>En 1909, el químico alemán Fritz Haber consiguió que el nitrógeno del aire reaccionara con hidrógeno para formar amoniaco (N₂ + 3 H₂ → 2 NH₃) usando alta presión, alta temperatura y un catalizador de hierro. Carl Bosch convirtió el experimento en un proceso industrial. Hoy el proceso Haber-Bosch fabrica unos 150 millones de toneladas de amoniaco al año y se calcula que la mitad del nitrógeno de nuestro cuerpo ha pasado por una fábrica de abonos: sin él, la Tierra no podría alimentar a ocho mil millones de personas. Pero el mismo proceso sirvió para fabricar explosivos en dos guerras mundiales, consume cerca del 2 % de la energía mundial y el exceso de abonos contamina ríos y acuíferos. Esta historia resume el poder de las reacciones químicas y la responsabilidad de usarlas bien.</p>`,
  },
  bloques: [
    { h: "Cambios físicos y cambios químicos", p: [
      "En un <b>cambio físico</b>, las sustancias siguen siendo las mismas, aunque cambie su estado, forma o tamaño: el hielo que se funde sigue siendo agua y el azúcar disuelto sigue siendo azúcar. En un <mark>cambio químico</mark> o <b>reacción química</b>, unas sustancias, los <b>reactivos</b>, se transforman en otras distintas, los <b>productos</b>, con propiedades diferentes: el hierro se oxida y forma herrumbre, la madera arde, la leche se agria, el bizcocho se cuece en el horno.",
      "Hay señales que delatan una reacción: un <b>cambio de color</b>, la formación de un <b>gas</b> (burbujas), la aparición de un <b>sólido</b> (precipitado) en una disolución, un <b>cambio de temperatura</b>, la emisión de <b>luz</b> o un cambio de olor. Ninguna es una prueba definitiva por sí sola (al hervir agua también salen burbujas y es un cambio físico), pero juntas son muy útiles. Las reacciones químicas están en todas partes: en nuestras células, que «queman» glucosa para obtener energía; en las plantas, que fabrican azúcares con la luz; en la cocina, en los motores, en las baterías y en las fábricas que producen medicamentos, plásticos, abonos o materiales de construcción.",
    ], svg: L5.compara("Cambios físicos frente a cambios químicos", ["Físico", ["misma sustancia", "fundir hielo", "disolver sal", "romper vidrio", "reversible fácil"]], ["Químico", ["nuevas sustancias", "quemar papel", "oxidar hierro", "cocer pan", "color, gas, calor"]], "var(--pen)", "var(--red)") },
    { h: "La teoría de colisiones", p: [
      "¿Qué ocurre a nivel de partículas en una reacción? Según la <mark>teoría de colisiones</mark>, para que los reactivos reaccionen sus partículas deben <b>chocar</b>. En el choque se rompen los enlaces de los reactivos y se forman los enlaces nuevos de los productos: los átomos <b>se reorganizan</b>, pero no se crean ni se destruyen. En la reacción del hidrógeno con el oxígeno, se rompen enlaces H–H y O=O y se forman enlaces O–H del agua.",
      "No todos los choques son eficaces. Para que un choque produzca reacción, las partículas deben tener una energía mínima, la <mark>energía de activación</mark>, y chocar con la <b>orientación adecuada</b>. Por eso una hoja de papel no arde sola en el aire aunque esté rodeada de oxígeno: necesita una chispa o una llama que aporte la energía de activación. Una vez iniciada la combustión, la energía que desprende la propia reacción activa nuevas moléculas y el fuego se mantiene. Esta idea explica también por qué los alimentos se conservan mejor en la nevera: a baja temperatura hay menos choques con energía suficiente y las reacciones de descomposición son más lentas.",
    ], svg: atomosSVG },
    { h: "La ecuación química y su ajuste", p: [
      "Una reacción se representa con una <mark>ecuación química</mark>: los reactivos a la izquierda, los productos a la derecha y una flecha entre ellos. Se puede indicar el estado de cada sustancia: (s) sólido, (l) líquido, (g) gas y (aq) disuelto en agua. Por ejemplo, la combustión del metano: CH₄ (g) + 2 O₂ (g) → CO₂ (g) + 2 H₂O (g).",
      "En 1789, <b>Antoine Lavoisier</b>, pesando con mucho cuidado los reactivos y los productos en recipientes cerrados, enunció la <b>ley de conservación de la masa</b>: en una reacción química, la masa total de los reactivos es igual a la de los productos. Como los átomos solo se reorganizan, una ecuación debe tener el mismo número de átomos de cada elemento a ambos lados: hay que <b>ajustarla</b>. Para ello se colocan <b>coeficientes estequiométricos</b> delante de las fórmulas (nunca se cambian los subíndices, porque cambiaríamos la sustancia). Un método práctico es ajustar primero los elementos que aparecen en un solo compuesto a cada lado, dejar para el final el oxígeno y el hidrógeno, y comprobar. Así, Fe + O₂ → Fe₂O₃ se ajusta como 4 Fe + 3 O₂ → 2 Fe₂O₃. Otra ley, la de las <b>proporciones definidas</b> de Proust, dice que un compuesto contiene siempre sus elementos en la misma proporción en masa: el agua siempre tiene un 11,2 % de hidrógeno.",
    ], svg: L5.pasos("Pasos para ajustar una ecuación química", ["Escribir reactivos → productos", "Contar átomos de cada elemento", "Poner coeficientes (no subíndices)", "Dejar O y H para el final", "Comprobar que todo cuadra"], "var(--pen)"), v: ["rea-a", "Ajuste de ecuaciones químicas paso a paso"] },
    { h: "El mol y la masa molar", p: [
      "Los átomos son tan pequeños que en un laboratorio no podemos contarlos uno a uno. Los químicos usan una unidad de cantidad de sustancia, el <mark>mol</mark>, que contiene un número fijo de partículas: el <b>número de Avogadro</b>, N<sub>A</sub> = 6,022·10²³. Igual que una docena son 12 huevos, un mol de agua son 6,022·10²³ moléculas de agua. Es un número inmenso: un mol de granos de arena cubriría toda España con una capa de varios kilómetros.",
      "La <b>masa molar</b> (M) es la masa de un mol de sustancia, en g/mol, y coincide numéricamente con la masa atómica o molecular en unidades de masa atómica (u). Se calcula sumando las masas atómicas de la tabla periódica: H₂O = 2·1 + 16 = 18 g/mol; CO₂ = 12 + 2·16 = 44 g/mol. Con ella se pasa de gramos a moles (n = m / M) y de moles a partículas (N = n · N<sub>A</sub>). Para los gases, existe otra relación útil: en condiciones normales (0 °C y 1 atm), un mol de cualquier gas ocupa <b>22,4 L</b> (volumen molar), y en otras condiciones se usa la ecuación p·V = n·R·T. El mol es el puente entre el mundo de los átomos y el de la balanza.",
    ], svg: cadena("Relaciones con el mol: masa en gramos, moles y número de partículas", [["masa (g)", "var(--red)"], ["moles (n)", "var(--pen)"], ["partículas (N)", "var(--leaf)"]], ["÷ M", "× 6,022·10²³"], "El mol como puente") },
    { h: "Cálculos estequiométricos", p: [
      "La <mark>estequiometría</mark> estudia las proporciones en que reaccionan las sustancias. Los coeficientes de una ecuación ajustada indican la proporción en <b>moles</b> (no en gramos). En N₂ + 3 H₂ → 2 NH₃, un mol de nitrógeno reacciona con tres de hidrógeno para dar dos de amoniaco. Para resolver un problema se siguen siempre los mismos pasos: ajustar la ecuación, pasar a moles el dato conocido (n = m / M), usar la proporción de coeficientes para obtener los moles de la sustancia buscada y, por último, pasar a la unidad que se pide (gramos, litros o partículas).",
      "Por ejemplo, ¿cuánta agua se forma al quemar 32 g de metano? CH₄ + 2 O₂ → CO₂ + 2 H₂O. Los 32 g de CH₄ (M = 16 g/mol) son 2 mol; por cada mol de metano se forman 2 de agua, así que se forman 4 mol de H₂O, que son 4 · 18 = 72 g. Si los datos están en disolución, los moles se obtienen con la molaridad (n = M · V), y si son gases, con el volumen molar o con p·V = n·R·T. Estos cálculos permiten a la industria saber cuánta materia prima necesita, cuánto producto obtendrá y cuántos residuos generará.",
    ], svg: L5.pasos("Pasos de un cálculo estequiométrico", ["Ajustar la ecuación", "Dato → moles (m/M, M·V, pV/RT)", "Proporción de coeficientes", "Moles → unidad pedida", "Revisar unidades y cifras"], "var(--leaf)"), v: ["rea-b", "Estequiometría: gramos, moles y volúmenes"] },
    { h: "Reactivo limitante, pureza y rendimiento", p: [
      "En la práctica, los reactivos rara vez están en la proporción exacta. El <mark>reactivo limitante</mark> es el que se agota primero y determina cuánto producto se forma; el otro queda en <b>exceso</b>. Es como hacer bocadillos: con 10 panes y 6 lonchas de queso solo salen 6 bocadillos, aunque sobren panes. Para encontrarlo, se calculan los moles de cada reactivo y se comparan con la proporción de la ecuación. Por ejemplo, en 2 H₂ + O₂ → 2 H₂O, con 3 mol de H₂ y 2 mol de O₂: el hidrógeno necesitaría 1,5 mol de O₂ y hay 2, así que el limitante es el H₂ y sobran 0,5 mol de O₂.",
      "Además, los reactivos industriales no son puros: si una caliza tiene un 80 % de pureza, solo el 80 % de su masa es CaCO₃. Y las reacciones casi nunca dan todo el producto teórico, porque hay reacciones secundarias, pérdidas al filtrar o reacciones que no se completan. El <mark>rendimiento</mark> es el porcentaje de producto obtenido realmente respecto al teórico: rendimiento = (masa real / masa teórica) · 100. Mejorar el rendimiento ahorra materias primas y energía y reduce residuos, uno de los objetivos de la química sostenible.",
    ], svg: L6.tabla("Ejemplo de reactivo limitante: 2 H₂ + O₂ → 2 H₂O", ["", "H₂", "O₂"], [["Inicial", "3 mol", "2 mol"], ["Reacciona", "3 mol", "1,5 mol"], ["Final", "0 (limitante)", "0,5 (exceso)"], ["Agua formada", "3 mol", "—"]]) },
    { h: "La energía de las reacciones", p: [
      "Toda reacción química va acompañada de un intercambio de energía, porque romper enlaces cuesta energía y formar enlaces la libera. Si la energía liberada al formar los enlaces de los productos es mayor que la absorbida al romper los de los reactivos, la reacción desprende energía, normalmente en forma de calor: es <mark>exotérmica</mark>. Son exotérmicas las combustiones, la respiración celular, la oxidación del hierro de los calentadores de manos o la reacción de la cal viva con el agua. Si la reacción absorbe energía del entorno es <mark>endotérmica</mark>: la fotosíntesis, la descomposición de la caliza en los hornos de cal o las bolsas de frío instantáneo con nitrato de amonio.",
      "El calor intercambiado a presión constante se llama <b>variación de entalpía (ΔH)</b>: negativo en las exotérmicas (el sistema pierde energía) y positivo en las endotérmicas. Por ejemplo, la combustión del metano tiene ΔH = −890 kJ/mol: cada mol quemado libera 890 kJ. En los <b>diagramas de energía</b>, las exotérmicas tienen los productos más abajo que los reactivos y las endotérmicas más arriba; en ambas hay una «colina» que superar, la energía de activación. Conocer estas energías permite comparar combustibles, diseñar reactores seguros o calcular las calorías de los alimentos.",
    ], svg: energiaSVG },
    { h: "La velocidad de reacción y los catalizadores", p: [
      "Algunas reacciones son instantáneas, como una explosión, y otras muy lentas, como la oxidación de un clavo o la formación del petróleo. La <b>velocidad de reacción</b> mide cuánto reactivo desaparece o cuánto producto aparece por unidad de tiempo. Según la teoría de colisiones, todo lo que aumente los choques eficaces la acelera. Influyen la <b>temperatura</b> (más temperatura, partículas más rápidas y más choques con energía suficiente: como regla aproximada, subir 10 °C duplica la velocidad), la <b>concentración</b> de los reactivos o la presión en los gases (más partículas, más choques), el <b>grado de división</b> de los sólidos (más superficie de contacto: el serrín arde mucho más rápido que un tronco, y el polvo de harina puede explotar) y la naturaleza de los reactivos.",
      "Un <mark>catalizador</mark> es una sustancia que aumenta la velocidad de una reacción sin consumirse, porque ofrece un camino alternativo con menor energía de activación. Los catalizadores son esenciales en la industria (el hierro en el proceso Haber-Bosch, el platino de los catalizadores de los coches, que convierten gases tóxicos como el CO y los NOₓ en CO₂ y N₂) y en la vida: las <b>enzimas</b> son catalizadores biológicos que aceleran millones de veces las reacciones de nuestras células. También existen <b>inhibidores</b>, que ralentizan reacciones indeseadas, como los conservantes de los alimentos.",
    ], svg: L5.graf("Efecto de un catalizador: el camino catalizado tiene una energía de activación menor", "avance de la reacción", "energía", [{ p: [[0, 0.55], [0.2, 0.55], [0.5, 1], [0.8, 0.2], [1, 0.2]], c: "var(--red)" }, { p: [[0, 0.55], [0.2, 0.55], [0.5, 0.75], [0.8, 0.2], [1, 0.2]], c: "var(--leaf)", dash: true }], `${T(176, 46, "sin catalizador", { fs: 10.5, b: true, c: "var(--red)" })}${T(176, 62, "con catalizador", { fs: 10.5, b: true, c: "var(--leaf)" })}`) },
    { h: "Ácidos, bases y pH", p: [
      "Los <mark>ácidos</mark> tienen sabor agrio, reaccionan con los metales desprendiendo hidrógeno y enrojecen el indicador tornasol; las <mark>bases</mark> o álcalis tienen sabor amargo, tacto jabonoso y azulean el tornasol. Según la teoría de <b>Arrhenius</b>, un ácido libera iones H⁺ en agua (HCl → H⁺ + Cl⁻) y una base libera iones OH⁻ (NaOH → Na⁺ + OH⁻). La teoría de <b>Brønsted-Lowry</b>, más general, define el ácido como la sustancia que cede un protón y la base como la que lo acepta; así se explica que el amoniaco (NH₃) sea una base aunque no tenga OH.",
      "Cuando un ácido y una base reaccionan se <b>neutralizan</b> y forman una sal y agua: HCl + NaOH → NaCl + H₂O. Así actúan los antiácidos en el estómago. La acidez se mide con la escala de <mark>pH</mark>, definida como pH = −log [H⁺]. Va de 0 a 14 a 25 °C: pH &lt; 7 es ácido, pH = 7 es neutro y pH &gt; 7 es básico. Como es logarítmica, una unidad de pH equivale a multiplicar por 10 la concentración de H⁺. El pH se mide con <b>indicadores</b> (fenolftaleína, papel indicador universal, el jugo de lombarda) o con un pH-metro. Es clave para la vida: la sangre está entre 7,35 y 7,45, el suelo determina qué cultivos crecen y la <b>lluvia ácida</b>, producida por los óxidos de azufre y nitrógeno, daña bosques, lagos y monumentos.",
    ], svg: phSVG, v: ["rea-c", "Qué es el pH: ácidos, bases y neutralización"] },
    { h: "Reacciones de oxidación-reducción", p: [
      "Antiguamente, «oxidación» significaba combinarse con oxígeno. Hoy la definición es más amplia: una <mark>oxidación</mark> es una pérdida de electrones y una <b>reducción</b> es una ganancia de electrones. Ambas ocurren siempre a la vez, porque los electrones que pierde una sustancia los gana otra: son las <b>reacciones redox</b>. En Zn + Cu²⁺ → Zn²⁺ + Cu, el cinc se oxida (pierde 2 e⁻) y el ion cobre se reduce (gana 2 e⁻). La sustancia que se reduce es el <b>oxidante</b> y la que se oxida es el <b>reductor</b>.",
      "Las reacciones redox están en todas partes. La <b>corrosión</b> del hierro (herrumbre) destruye cada año una parte importante del acero mundial; se evita con pinturas, galvanizado con cinc o acero inoxidable. Las <b>pilas y baterías</b> aprovechan una reacción redox para producir corriente eléctrica, y en la <b>electrólisis</b> la corriente fuerza una reacción redox, como la obtención de aluminio o de hidrógeno a partir del agua. La <b>combustión</b> es una redox muy rápida: el combustible se oxida y el oxígeno se reduce. Y en los seres vivos, la respiración celular y la fotosíntesis son cadenas de reacciones redox que mueven la energía de toda la biosfera.",
    ], svg: arbol("Reacciones redox de interés", "Redox", [["Corrosión", "el hierro se oxida al aire"], ["Pilas", "redox que produce corriente"], ["Electrólisis", "corriente que fuerza redox"], ["Combustión", "combustible + O₂ → CO₂ + H₂O"]]) },
    { h: "Combustión, precipitación y química industrial", p: [
      "La <mark>combustión</mark> es la reacción de una sustancia, el combustible, con oxígeno, que desprende energía en forma de calor y luz. Cuando un hidrocarburo arde con suficiente oxígeno (<b>combustión completa</b>), forma CO₂ y H₂O: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. Si falta oxígeno (<b>incompleta</b>), se forma monóxido de carbono (CO), un gas invisible e inodoro muy tóxico porque se une a la hemoglobina, y hollín: por eso las estufas y calentadores deben estar bien ventilados. Para que haya fuego hacen falta combustible, comburente (oxígeno), energía de activación y reacción en cadena: el <b>tetraedro del fuego</b>, en el que se basan los extintores.",
      "En las reacciones de <b>precipitación</b>, dos disoluciones forman un sólido insoluble: el nitrato de plata y el cloruro de sodio dan un precipitado blanco de AgCl. Se usan para analizar aguas o eliminar metales pesados. La <b>industria química</b> transforma materias primas en productos útiles a gran escala: ácido sulfúrico, amoniaco y abonos, cemento (a partir de caliza y arcilla), acero, plásticos, fármacos y detergentes. En España destacan los polos químicos de Tarragona, Huelva y Castellón. Esta industria crea bienestar, pero consume energía y genera residuos y emisiones, por lo que se rige por normas estrictas de seguridad y medio ambiente.",
    ], svg: L6.radial("Las cuatro condiciones del tetraedro del fuego", "Fuego", ["Combustible", "Oxígeno", "Calor (Ea)", "Reacción en cadena"], "var(--red)") },
    { h: "La química sostenible", p: [
      "La <mark>química verde</mark> busca diseñar productos y procesos químicos que reduzcan o eliminen las sustancias peligrosas. Paul Anastas y John Warner la resumieron en <b>doce principios</b>, entre ellos: es mejor prevenir residuos que tratarlos; aprovechar al máximo los átomos de los reactivos (<b>economía atómica</b>); usar materias primas renovables; preferir disolventes inocuos, como el agua o el CO₂ supercrítico; usar catalizadores en lugar de reactivos en exceso; ahorrar energía trabajando a temperatura ambiente, y fabricar productos que se degraden sin dañar el ambiente.",
      "Existen ya muchos ejemplos. El ibuprofeno se fabrica hoy en tres pasos catalíticos en lugar de seis, con una economía atómica cercana al 80 % frente al 40 % del proceso antiguo. Se producen plásticos biodegradables a partir de almidón de maíz, como el ácido poliláctico (PLA), y se investiga cómo convertir el CO₂ en combustibles o materiales. La química verde se une a la <b>economía circular</b>, que busca reutilizar y reciclar los materiales en lugar de seguir el modelo de «extraer, fabricar, usar y tirar»: el vidrio y el aluminio pueden reciclarse indefinidamente. Así, la química, a menudo vista como causa de contaminación, es también una parte imprescindible de la solución.",
    ], svg: L6.ciclo("Economía circular de los materiales", "Circular", ["Diseño", "Producción", "Uso", "Reutilización", "Reciclaje"], "var(--leaf)"), v: ["rea-d", "Química verde: los 12 principios"] },
  ],
  figura: { titulo: "Las reacciones químicas", items: [["Ecuación", "reactivos → prod.", "ajuste", "masa constante"], ["Mol", "6,022·10²³", "n = m/M", "22,4 L (gas)"], ["Energía", "exo ΔH &lt; 0", "endo ΔH &gt; 0", "Ea · catalizador"], ["Tipos", "ácido-base · pH", "redox", "combustión"]] },
  video: ["rea-b", "Estequiometría: cálculo de gramos, moles y volúmenes"],
  ejemplos: [
    ["Ajusta: C₂H₆ + O₂ → CO₂ + H₂O.", ["C: 2 a la izquierda → 2 CO₂.", "H: 6 a la izquierda → 3 H₂O.", "O a la derecha: 2·2 + 3 = 7 → 7/2 O₂.", "Multiplicando todo por 2 para evitar fracciones: 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O."], "2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O."],
    ["¿Cuántos moles y moléculas hay en 90 g de agua?", ["M(H₂O) = 18 g/mol.", "n = 90 / 18 = 5,0 mol.", "N = 5,0 · 6,022·10²³ = 3,0·10²⁴ moléculas."], "5,0 mol y 3,0·10²⁴ moléculas."],
    ["Se queman 88 g de propano: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. ¿Qué masa de CO₂ se forma?", ["M(C₃H₈) = 44 g/mol → n = 88/44 = 2 mol.", "Proporción 1 : 3 → 6 mol de CO₂.", "M(CO₂) = 44 g/mol → 6 · 44 = 264 g."], "264 g de CO₂."],
    ["Reaccionan 10 g de H₂ con 64 g de O₂ (2 H₂ + O₂ → 2 H₂O). Halla el reactivo limitante y la masa de agua.", ["n(H₂) = 10/2 = 5 mol; n(O₂) = 64/32 = 2 mol.", "Para 2 mol de O₂ hacen falta 4 mol de H₂: hay 5, sobra 1 mol de H₂.", "Limitante: O₂ → forma 2·2 = 4 mol de H₂O = 72 g."], "Limitante: O₂; se forman 72 g de agua y sobran 2 g de H₂."],
    ["Calcula el pH de una disolución de HCl 0,01 M y de otra de NaOH 0,001 M.", ["HCl se disocia totalmente: [H⁺] = 0,01 = 10⁻² → pH = 2.", "NaOH: [OH⁻] = 10⁻³ → pOH = 3.", "pH = 14 − 3 = 11."], "pH 2 (ácida) y pH 11 (básica)."],
    ["Al descomponer 200 g de CaCO₃ (CaCO₃ → CaO + CO₂) se obtienen 98 g de CaO. Calcula el rendimiento.", ["M(CaCO₃) = 100 g/mol → 2 mol.", "Teórico: 2 mol de CaO · 56 g/mol = 112 g.", "Rendimiento = 98/112 · 100 = 87,5 %."], "Rendimiento del 87,5 %."],
  ],
  errores: [
    "Ajustar una ecuación cambiando los subíndices: así se cambia la sustancia; solo se cambian los coeficientes.",
    "Usar la proporción de coeficientes con gramos: los coeficientes indican proporciones en moles.",
    "Suponer que el reactivo que está en mayor masa no puede ser limitante: hay que comparar en moles y con la proporción.",
    "Pensar que un catalizador se gasta o que cambia el producto final: solo acelera la reacción.",
    "Creer que de pH 3 a pH 6 la acidez se divide entre 2: se divide entre 1000, porque la escala es logarítmica.",
    "Confundir oxidación con «combinarse con oxígeno»: oxidarse es perder electrones.",
  ],
  ejercicios: {
    b: [
      ["Clasifica como cambio físico o químico: hervir agua, quemar gas, oxidarse una bicicleta, disolver sal, cocinar un huevo, triturar hielo.", "Físicos: hervir agua, disolver sal, triturar hielo. Químicos: quemar gas, oxidarse la bicicleta, cocinar el huevo."],
      ["Enuncia la ley de conservación de la masa y explica por qué se cumple.", "En una reacción química la masa de los reactivos es igual a la de los productos. Se cumple porque los átomos solo se reorganizan: no se crean ni se destruyen."],
      ["Ajusta: a) H₂ + Cl₂ → HCl; b) N₂ + H₂ → NH₃; c) Mg + O₂ → MgO.", "a) H₂ + Cl₂ → 2 HCl. b) N₂ + 3 H₂ → 2 NH₃. c) 2 Mg + O₂ → 2 MgO."],
      ["Ajusta: a) CH₄ + O₂ → CO₂ + H₂O; b) Al + O₂ → Al₂O₃.", "a) CH₄ + 2 O₂ → CO₂ + 2 H₂O. b) 4 Al + 3 O₂ → 2 Al₂O₃."],
      ["Calcula la masa molar de: NaCl, H₂SO₄, C₆H₁₂O₆ (Na 23, Cl 35,5, H 1, S 32, O 16, C 12).", "NaCl: 58,5 g/mol. H₂SO₄: 98 g/mol. C₆H₁₂O₆: 180 g/mol."],
      ["¿Cuántos moles son 66 g de CO₂? ¿Cuántas moléculas?", "n = 66/44 = 1,5 mol. N = 1,5 · 6,022·10²³ = 9,0·10²³ moléculas."],
      ["¿Qué volumen ocupan 3 mol de O₂ en condiciones normales?", "V = 3 · 22,4 = 67,2 L."],
      ["Explica qué es la energía de activación con un ejemplo.", "La energía mínima que deben tener las partículas al chocar para reaccionar. Ejemplo: una cerilla necesita el calor del roce para empezar a arder."],
      ["Indica si son exotérmicas o endotérmicas: combustión de butano, fotosíntesis, respiración celular, descomposición de la caliza.", "Exotérmicas: combustión del butano y respiración celular. Endotérmicas: fotosíntesis y descomposición de la caliza."],
      ["Cita cuatro factores que aumentan la velocidad de una reacción.", "Aumentar la temperatura, aumentar la concentración (o la presión en gases), dividir finamente los sólidos y usar un catalizador."],
      ["Clasifica como ácido, básico o neutro: zumo de limón (pH 2,5), agua de mar (pH 8,2), agua destilada (pH 7), amoniaco doméstico (pH 11,5).", "Ácido: limón. Básicos: agua de mar y amoniaco. Neutro: agua destilada."],
      ["Completa la neutralización: HCl + NaOH → ___ + ___.", "NaCl + H₂O (una sal y agua)."],
    ],
    m: [
      ["Ajusta: a) Fe₂O₃ + CO → Fe + CO₂; b) C₃H₈ + O₂ → CO₂ + H₂O; c) KClO₃ → KCl + O₂.", "a) Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂. b) C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. c) 2 KClO₃ → 2 KCl + 3 O₂."],
      ["¿Qué masa de O₂ hace falta para quemar 48 g de metano (CH₄ + 2 O₂ → CO₂ + 2 H₂O)?", "n(CH₄) = 48/16 = 3 mol → 6 mol de O₂ → 6 · 32 = 192 g."],
      ["El cinc reacciona con HCl: Zn + 2 HCl → ZnCl₂ + H₂. ¿Qué volumen de H₂ en c. n. se obtiene con 13 g de Zn (M = 65 g/mol)?", "n(Zn) = 13/65 = 0,2 mol → 0,2 mol de H₂ → 0,2 · 22,4 = 4,48 L."],
      ["¿Cuántos gramos de NaOH se necesitan para neutralizar 50 mL de HCl 0,4 M?", "n(HCl) = 0,4 · 0,050 = 0,02 mol. Proporción 1:1 → 0,02 mol NaOH · 40 = 0,8 g."],
      ["Reaccionan 28 g de N₂ con 10 g de H₂ (N₂ + 3 H₂ → 2 NH₃). Halla el reactivo limitante y la masa de NH₃.", "n(N₂) = 1 mol; n(H₂) = 5 mol. 1 mol de N₂ necesita 3 de H₂: hay 5, sobra H₂. Limitante N₂ → 2 mol NH₃ = 34 g."],
      ["Una muestra de 250 g de caliza del 80 % de pureza se descompone (CaCO₃ → CaO + CO₂). ¿Qué masa de CaO se obtiene?", "CaCO₃ puro = 200 g = 2 mol → 2 mol de CaO · 56 = 112 g."],
      ["Explica con la teoría de colisiones por qué los alimentos duran más en el frigorífico.", "A baja temperatura las moléculas se mueven más despacio, hay menos choques y menos de ellos superan la energía de activación; las reacciones de descomposición (y el crecimiento de microbios) se ralentizan."],
      ["¿Por qué el polvo de harina en suspensión puede explotar si un tronco tarda horas en arder?", "Porque el grado de división es enorme: la superficie de contacto con el oxígeno es muchísimo mayor, hay muchísimos más choques y la combustión es casi instantánea."],
      ["La combustión del butano tiene ΔH = −2878 kJ/mol. ¿Qué energía se libera al quemar 1 kg de butano (C₄H₁₀, M = 58 g/mol)?", "n = 1000/58 = 17,2 mol. Q = 17,2 · 2878 = 4,96·10⁴ kJ ≈ 50 000 kJ."],
      ["Una disolución tiene pH 4 y otra pH 6. ¿Cuántas veces es mayor [H⁺] en la primera?", "[H⁺] = 10⁻⁴ y 10⁻⁶: la primera tiene 10² = 100 veces más."],
      ["En Zn + CuSO₄ → ZnSO₄ + Cu, indica qué se oxida, qué se reduce, el oxidante y el reductor.", "El Zn pasa de 0 a +2: se oxida (reductor). El Cu²⁺ pasa de +2 a 0: se reduce (oxidante)."],
      ["¿Por qué es peligrosa una estufa de butano en una habitación sin ventilación?", "Al consumirse el oxígeno la combustión se vuelve incompleta y se forma monóxido de carbono, un gas inodoro que se une a la hemoglobina e impide el transporte de oxígeno; puede causar la muerte."],
    ],
    a: [
      ["Ajusta por tanteo: a) Cu + HNO₃ → Cu(NO₃)₂ + NO + H₂O; b) FeS₂ + O₂ → Fe₂O₃ + SO₂.", "a) 3 Cu + 8 HNO₃ → 3 Cu(NO₃)₂ + 2 NO + 4 H₂O. b) 4 FeS₂ + 11 O₂ → 2 Fe₂O₃ + 8 SO₂."],
      ["Se mezclan 100 mL de HCl 0,5 M con 100 mL de NaOH 0,3 M. ¿Qué reactivo sobra y cuál es el pH final?", "n(HCl) = 0,05 mol; n(NaOH) = 0,03 mol. Sobran 0,02 mol de HCl en 0,200 L → [H⁺] = 0,1 M → pH = 1."],
      ["El airbag se infla con la descomposición del azida de sodio: 2 NaN₃ → 2 Na + 3 N₂. ¿Qué masa de NaN₃ (M = 65 g/mol) hace falta para obtener 60 L de N₂ a 1 atm y 27 °C?", "n(N₂) = pV/RT = 1 · 60 / (0,082 · 300) = 2,44 mol. n(NaN₃) = 2,44 · 2/3 = 1,63 mol → 1,63 · 65 = 106 g."],
      ["En el proceso Haber-Bosch el rendimiento por paso es del 15 %. ¿Qué masa de NH₃ se obtiene en un paso a partir de 1 t de N₂ con H₂ en exceso? ¿Por qué se recirculan los gases?", "1 t de N₂ = 10⁶/28 = 35 714 mol → teórico 71 428 mol NH₃ = 1,21 t. Con 15 %: 0,18 t. Los gases que no han reaccionado se separan del amoniaco y se vuelven a introducir en el reactor, de modo que el rendimiento global es muy alto."],
      ["Calcula la economía atómica de obtener CaO por descomposición de CaCO₃ y comenta el resultado desde la química verde.", "Economía atómica = masa del producto deseado / masa de reactivos · 100 = 56/100 · 100 = 56 %. El 44 % se pierde como CO₂, que además es un gas de efecto invernadero: la industria del cemento y la cal es responsable de alrededor del 8 % de las emisiones mundiales de CO₂."],
      ["Una tableta antiácido contiene 0,5 g de Mg(OH)₂ (M = 58,3 g/mol). ¿Qué volumen de jugo gástrico (HCl 0,1 M) neutraliza? Mg(OH)₂ + 2 HCl → MgCl₂ + 2 H₂O.", "n(Mg(OH)₂) = 0,5/58,3 = 8,6·10⁻³ mol → n(HCl) = 1,72·10⁻² mol → V = 1,72·10⁻²/0,1 = 0,172 L ≈ 172 mL."],
      ["Diseña un experimento para estudiar cómo influye la temperatura en la velocidad de la reacción de una pastilla efervescente con agua, indicando variables y cómo medirías la velocidad.", "VI: temperatura del agua (10, 20, 40, 60 °C). VD: tiempo hasta que la pastilla se disuelve totalmente (o volumen de CO₂ recogido por minuto). Controladas: volumen de agua, tipo y tamaño de la pastilla (entera), recipiente, sin agitar. Tres repeticiones por temperatura y gráfica velocidad (1/t)–temperatura."],
      ["La lluvia ácida se forma por: 2 SO₂ + O₂ → 2 SO₃; SO₃ + H₂O → H₂SO₄. Una central emite 64 t de SO₂. ¿Qué masa de H₂SO₄ podría formarse? Propón dos medidas para evitarlo.", "64 t de SO₂ = 10⁶ mol (M = 64) → 10⁶ mol de H₂SO₄ · 98 = 98 t. Medidas: usar combustibles sin azufre o renovables, instalar desulfuradores en las chimeneas (lavan los gases con caliza), ahorrar energía."],
    ],
  },
  quiz: [
    ["Una señal de reacción química es…", ["un cambio de estado", "la formación de un gas o de un precipitado", "un cambio de tamaño", "disolverse"], 1, "Aparecen sustancias nuevas."],
    ["Según la teoría de colisiones, para reaccionar las partículas deben chocar…", ["con cualquier energía", "con energía suficiente y buena orientación", "muy despacio", "solo en gases"], 1, "Choques eficaces."],
    ["Lavoisier enunció la ley de…", ["proporciones definidas", "conservación de la masa", "los gases", "Avogadro"], 1, "La masa total no cambia."],
    ["Para ajustar una ecuación se cambian…", ["los subíndices", "los coeficientes", "los símbolos", "los estados"], 1, "Los subíndices definen la sustancia."],
    ["2 Mg + O₂ → 2 MgO: ¿cuántos moles de MgO da 1 mol de O₂?", ["1", "2", "0,5", "4"], 1, "Proporción 1 : 2."],
    ["Un mol contiene…", ["6,022·10²³ partículas", "22,4 partículas", "1 g", "1000 partículas"], 0, "Número de Avogadro."],
    ["La masa molar del CO₂ es…", ["28 g/mol", "44 g/mol", "32 g/mol", "12 g/mol"], 1, "12 + 2·16."],
    ["En c. n., 2 mol de gas ocupan…", ["22,4 L", "44,8 L", "11,2 L", "2 L"], 1, "2 · 22,4."],
    ["El reactivo limitante es el que…", ["está en mayor masa", "se agota primero", "no reacciona", "sobra"], 1, "Determina el producto formado."],
    ["Una reacción con ΔH &lt; 0 es…", ["endotérmica", "exotérmica", "lenta", "imposible"], 1, "Desprende calor."],
    ["La fotosíntesis es…", ["exotérmica", "endotérmica", "una combustión", "una neutralización"], 1, "Absorbe energía de la luz."],
    ["Un catalizador…", ["se consume", "disminuye la energía de activación", "cambia los productos", "aumenta ΔH"], 1, "Ofrece otro camino."],
    ["Al aumentar la temperatura, la velocidad de reacción…", ["disminuye", "aumenta", "no cambia", "se anula"], 1, "Más choques eficaces."],
    ["Las enzimas son…", ["inhibidores", "catalizadores biológicos", "ácidos", "bases"], 1, "Aceleran las reacciones celulares."],
    ["Una disolución de pH 3 es…", ["básica", "neutra", "ácida", "salina"], 2, "pH &lt; 7."],
    ["Según Arrhenius, una base libera en agua…", ["H⁺", "OH⁻", "Cl⁻", "O₂"], 1, "NaOH → Na⁺ + OH⁻."],
    ["Un ácido y una base forman…", ["un óxido", "sal y agua", "hidrógeno", "un metal"], 1, "Neutralización."],
    ["Oxidarse es…", ["ganar electrones", "perder electrones", "ganar protones", "perder neutrones"], 1, "La reducción es ganar e⁻."],
    ["La combustión incompleta produce un gas tóxico:", ["CO₂", "CO", "O₂", "N₂"], 1, "Monóxido de carbono."],
    ["Un principio de la química verde es…", ["tratar los residuos al final", "prevenir residuos", "usar disolventes tóxicos", "trabajar a alta temperatura"], 1, "Mejor prevenir que tratar."],
  ],
  examen: [
    ["Ajustada, N₂ + H₂ → NH₃ queda…", ["N₂ + H₂ → 2 NH₃", "N₂ + 3 H₂ → 2 NH₃", "2 N₂ + 3 H₂ → NH₃", "N₂ + 3 H₂ → NH₃"], 1, "2 N y 6 H a cada lado."],
    ["36 g de agua son…", ["1 mol", "2 mol", "18 mol", "0,5 mol"], 1, "36 / 18."],
    ["Con 4 mol de H₂ y 1 mol de O₂ (2 H₂ + O₂ → 2 H₂O) el limitante es…", ["H₂", "O₂", "ninguno", "H₂O"], 1, "1 mol de O₂ solo gasta 2 de H₂."],
    ["El pH de HCl 0,001 M es…", ["1", "3", "11", "7"], 1, "−log 10⁻³."],
    ["En Fe + Cu²⁺ → Fe²⁺ + Cu, el hierro…", ["se reduce", "se oxida", "es el oxidante", "no cambia"], 1, "Pierde 2 e⁻."],
    ["El serrín arde más rápido que un tronco por…", ["la temperatura", "el catalizador", "el grado de división", "la concentración"], 2, "Más superficie de contacto."],
    ["Se esperaban 50 g y se obtienen 40 g: el rendimiento es…", ["40 %", "80 %", "125 %", "90 %"], 1, "40/50 · 100."],
    ["El platino del tubo de escape de un coche actúa como…", ["combustible", "catalizador", "inhibidor", "reactivo limitante"], 1, "Convierte CO y NOₓ."],
  ],
  feynman: ["Por qué el tronco pesa más que sus cenizas", "Por qué no se pueden cambiar los subíndices al ajustar", "Qué es un mol y para qué sirve", "Cómo encontrar el reactivo limitante", "Por qué un catalizador acelera una reacción", "Por qué una unidad de pH es un factor 10"],
  mapa: ["REACCIONES", [["Ecuación", "ajuste, masa constante"], ["Estequiometría", "mol, limitante, rendimiento"], ["Energía y velocidad", "ΔH, Ea, catalizador"], ["Tipos", "ácido-base, redox, combustión"]]],
  tarjetas: [
    ["Reacción química", "Reactivos → productos: los átomos se reorganizan."],
    ["Conservación de la masa", "Masa de reactivos = masa de productos (Lavoisier)."],
    ["Ajuste", "Coeficientes delante; nunca cambiar subíndices."],
    ["Mol", "6,022·10²³ partículas; n = m / M."],
    ["Volumen molar", "22,4 L/mol (gas en c. n.)."],
    ["Reactivo limitante", "El que se agota primero."],
    ["Rendimiento", "real / teórico · 100."],
    ["Exotérmica / endotérmica", "ΔH &lt; 0 desprende / ΔH &gt; 0 absorbe."],
    ["Catalizador", "Baja la energía de activación sin gastarse."],
    ["pH", "−log[H⁺]: &lt; 7 ácido, 7 neutro, &gt; 7 básico."],
    ["Redox", "Oxidación = pérdida de e⁻; reducción = ganancia."],
    ["Química verde", "Prevenir residuos, economía atómica, renovables."],
  ],
  glosario: [
    ["Reactivo", "Sustancia que se transforma en una reacción."],
    ["Producto", "Sustancia nueva que se forma en una reacción."],
    ["Ecuación química", "Representación simbólica de una reacción."],
    ["Coeficiente estequiométrico", "Número delante de una fórmula que indica la proporción en moles."],
    ["Número de Avogadro", "6,022·10²³, número de partículas de un mol."],
    ["Masa molar", "Masa de un mol de sustancia, en g/mol."],
    ["Estequiometría", "Cálculo de las cantidades que intervienen en una reacción."],
    ["Reactivo en exceso", "Reactivo que sobra cuando se agota el limitante."],
    ["Energía de activación", "Energía mínima para que un choque sea eficaz."],
    ["Entalpía de reacción", "Calor intercambiado a presión constante (ΔH)."],
    ["Catalizador", "Sustancia que acelera una reacción sin consumirse."],
    ["Indicador", "Sustancia que cambia de color según el pH."],
    ["Neutralización", "Reacción de un ácido y una base que forma sal y agua."],
    ["Oxidante", "Sustancia que se reduce y oxida a otra."],
    ["Precipitado", "Sólido insoluble que se forma en una disolución."],
    ["Economía atómica", "Porcentaje de la masa de los reactivos que acaba en el producto deseado."],
  ],
  situacion: {
    titulo: "El mejor antiácido",
    reto: "Una farmacia quiere saber qué antiácido neutraliza más ácido por euro. Vuestro equipo comparará varios productos con una valoración ácido-base y elaborará un informe para el consumidor.",
    pasos: [
      "Recoged tres o cuatro antiácidos distintos y anotad su composición, dosis y precio.",
      "Preparad una disolución de HCl 0,1 M que simule el jugo gástrico y un indicador (fenolftaleína o lombarda).",
      "Disolved una dosis de cada antiácido y añadid el ácido gota a gota hasta el cambio de color, midiendo el volumen gastado.",
      "Calculad los moles de ácido neutralizados por dosis y por euro y comparadlos con lo esperado por la estequiometría.",
      "Valorad los resultados, las fuentes de error y los efectos secundarios de un uso excesivo.",
    ],
    producto: "Un informe para consumidores con tabla comparativa, cálculos y una recomendación razonada.",
    evaluacion: ["El procedimiento es seguro, ordenado y reproducible.", "Los cálculos estequiométricos son correctos.", "Se interpretan los resultados con espíritu crítico.", "La recomendación es clara y está justificada con datos."],
  },
  familias: [
    "Comparad cuánto tarda una pastilla efervescente en agua fría y en agua caliente.",
    "Haced un indicador de pH con agua de cocer lombarda y probad vinagre, limón, bicarbonato y jabón.",
    "Observad cómo cambian de color una manzana cortada con y sin zumo de limón.",
    "Revisad juntos que la caldera o la estufa estén bien ventiladas y hablad del monóxido de carbono.",
  ],
  saberes: "bloque «B. Un universo de materia y energía»: las reacciones químicas, la teoría de colisiones y la conservación de la masa; ajuste de ecuaciones y cálculos estequiométricos con el mol, reactivo limitante y rendimiento; aspectos energéticos y cinéticos de las reacciones y catalizadores; reacciones ácido-base, redox, de combustión y de precipitación de interés; la química sostenible y su relación con los ODS.",
  ideas: [
    "Comprobación de la conservación de la masa con vinagre y bicarbonato en una botella cerrada con globo.",
    "Valoración ácido-base de vinagres comerciales.",
    "Estudio de la velocidad de reacción con pastillas efervescentes enteras y trituradas.",
    "Análisis de un proceso industrial (Haber-Bosch, cemento) desde los doce principios de la química verde.",
  ],
  fuentes: [
    { t: "Federación Empresarial de la Industria Química Española (FEIQUE)", url: "https://www.feique.org/" },
    { t: "American Chemical Society: 12 principios de la química verde", url: "https://www.acs.org/greenchemistry/principles/12-principles-of-green-chemistry.html" },
  ],
});
