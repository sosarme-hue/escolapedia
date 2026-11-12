// Física y Química 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Física y Química",
  curso: "3-eso",
  titulo: "Las reacciones químicas",
  minutos: 55,
  objetivos: ["Diferenciar cambios físicos y químicos", "Explicar una reacción química con el modelo de colisiones", "Ajustar ecuaciones químicas sencillas aplicando la ley de conservación de la masa", "Identificar los factores que influyen en la velocidad de reacción y la energía de las reacciones"],
  claves: ["cambio químico", "reactivo", "producto", "ecuación química", "ley de Lavoisier", "ajuste", "velocidad de reacción", "reacción exotérmica"],
  pregunta: {
    texto: "Cuando un tronco de 10 kg arde en una chimenea, al final solo quedan unos cientos de gramos de ceniza. ¿Dónde está el resto de la masa? ¿Ha desaparecido?",
    respuesta: "No. Según la <mark>ley de conservación de la masa</mark>, en una reacción química la masa total no cambia. La madera ha reaccionado con el oxígeno del aire y se ha transformado en <b>dióxido de carbono</b> y <b>vapor de agua</b>, que son gases y se han ido por la chimenea. Si pudiéramos recogerlos y pesarlos, junto con la ceniza, saldría exactamente la masa de la madera más la del oxígeno gastado.",
  },
  bloques: [
    {
      html: `<h3>Cambios físicos y cambios químicos</h3><p>La materia cambia continuamente, pero no todos los cambios son iguales. En un <mark>cambio físico</mark> las sustancias siguen siendo las mismas: solo cambian su forma, su tamaño o su estado. Romper un vaso, fundir hielo, disolver azúcar en agua o estirar un muelle son cambios físicos. En un <mark>cambio químico</mark> o <b>reacción química</b>, unas sustancias desaparecen y se forman otras <b>nuevas</b>, con propiedades distintas. Quemar papel, oxidarse un clavo, cocinar un huevo, la fermentación del mosto en vino o la digestión de los alimentos son cambios químicos. Una pista: los cambios químicos suelen ser difíciles de revertir; no se puede «desquemar» un papel.</p>`,
    },
    {
      html: `<h3>Cómo reconocer una reacción química</h3><p>A veces se puede saber que ha ocurrido una reacción química observando algunas <b>señales</b>: un <mark>cambio de color</mark>, como cuando una manzana cortada se oscurece; el <b>desprendimiento de un gas</b>, que forma burbujas, como al echar vinagre sobre bicarbonato; la formación de un <b>sólido</b> nuevo en una disolución, llamado <b>precipitado</b>; la <b>emisión de luz o calor</b>, como en una combustión; o la <b>aparición de un olor</b>, como en la comida que se pudre. Ninguna señal es una prueba definitiva: también hay burbujas cuando hierve el agua, que es un cambio físico. La prueba real es comprobar que se han formado sustancias nuevas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro señales de reacción química: cambio de color, burbujas de gas, precipitado sólido y emisión de luz y calor">${BG}
        ${[[40, "color"], [100, "gas"], [160, "precipitado"], [220, "luz y calor"]].map(([x, n]) => t(x, 158, n, { size: 9 })).join("")}
        <path d="M20 60 V 130 H 60 V 60" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="21" y="90" width="38" height="39" fill="#9b59b6" fill-opacity=".5"/><rect x="21" y="76" width="38" height="14" fill="var(--water)" fill-opacity=".4"/>
        <path d="M80 60 V 130 H 120 V 60" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="81" y="84" width="38" height="45" fill="var(--water)" fill-opacity=".4"/>${[[92, 110], [104, 98], [96, 88], [110, 116], [100, 74], [108, 64]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="none" stroke="var(--pen)" stroke-width="1.5"/>`).join("")}
        <path d="M140 60 V 130 H 180 V 60" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="141" y="84" width="38" height="45" fill="#f2d675" fill-opacity=".4"/><rect x="141" y="118" width="38" height="11" fill="#e0a000"/>
        <path d="M220 130 q -22 -24 0 -66 q 22 42 0 66 Z" fill="#f08a24"/><path d="M220 130 q -10 -14 0 -36 q 10 22 0 36 Z" fill="#ffd34d"/>
        ${t(130, 30, "señales de un cambio químico", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Reactivos y productos</h3><p>En una reacción química, las sustancias iniciales se llaman <mark>reactivos</mark> y las que se forman, <mark>productos</mark>. Por ejemplo, en la combustión del metano, el gas de las cocinas, los reactivos son el metano y el oxígeno, y los productos son el dióxido de carbono y el agua. Las reacciones se representan con una <b>ecuación química</b>: a la izquierda las fórmulas de los reactivos, a la derecha las de los productos, y entre ambos una <b>flecha</b> que indica el sentido del cambio: <b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b>. A veces se indica el estado de cada sustancia entre paréntesis: (s) sólido, (l) líquido, (g) gas y (aq) disuelto en agua.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ecuación de la combustión del metano: los reactivos, metano y dos de oxígeno, a la izquierda de la flecha; los productos, dióxido de carbono y dos de agua, a la derecha">${BG}
        ${t(130, 82, "CH₄ + 2 O₂ → CO₂ + 2 H₂O", { size: 17 })}
        <path d="M18 96 V 106 H 112 V 96" fill="none" stroke="var(--red)" stroke-width="2"/>${t(65, 126, "reactivos", { size: 12, color: "var(--red)" })}
        <path d="M144 96 V 106 H 246 V 96" fill="none" stroke="var(--leaf)" stroke-width="2"/>${t(195, 126, "productos", { size: 12, color: "var(--leaf)" })}
        ${fl(110, 40, 92, 64, "var(--pen)", 2)}${t(130, 34, "coeficiente", { size: 11, color: "var(--pen)" })}
        ${t(130, 160, "se lee: «se transforma en»", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La teoría de colisiones</h3><p>¿Qué ocurre con los átomos durante una reacción? Según la <mark>teoría de colisiones</mark>, para que dos sustancias reaccionen, sus partículas tienen que <b>chocar</b>. Pero no basta cualquier choque: tiene que ser lo bastante <b>energético</b> y con la <b>orientación adecuada</b>. En los choques eficaces, se <b>rompen los enlaces</b> que unían los átomos de los reactivos y esos mismos átomos se <b>reorganizan</b> formando enlaces nuevos, que dan lugar a los productos. Los átomos no se crean ni se destruyen ni cambian de elemento: solo cambian de compañero, como en un baile en el que las parejas se intercambian.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una molécula de hidrógeno y una de cloro chocan, se rompen sus enlaces y los átomos se reorganizan en dos moléculas de cloruro de hidrógeno">${BG}
        <circle cx="30" cy="60" r="10" fill="#ccc" stroke="var(--muted)"/><circle cx="48" cy="60" r="10" fill="#ccc" stroke="var(--muted)"/>
        <circle cx="30" cy="110" r="14" fill="var(--leaf)"/><circle cx="54" cy="110" r="14" fill="var(--leaf)"/>
        ${fl(72, 84, 100, 84)}${t(130, 60, "choque", { size: 11, color: "var(--red)" })}
        <path d="M122 70 l 8 10 l -6 4 l 10 12" stroke="var(--red)" stroke-width="3" fill="none"/>
        ${fl(150, 84, 176, 84)}
        <circle cx="196" cy="60" r="10" fill="#ccc" stroke="var(--muted)"/><circle cx="218" cy="60" r="14" fill="var(--leaf)"/>
        <circle cx="196" cy="110" r="10" fill="#ccc" stroke="var(--muted)"/><circle cx="218" cy="110" r="14" fill="var(--leaf)"/>
        ${t(44, 148, "H₂ + Cl₂", { size: 12 })}${t(210, 148, "2 HCl", { size: 12 })}${t(130, 172, "los átomos se reorganizan", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La ley de conservación de la masa</h3><p>A finales del siglo XVIII, el químico francés <b>Antoine Lavoisier</b> hizo reaccionar sustancias en <b>recipientes cerrados</b> y las pesó con balanzas muy precisas antes y después. Comprobó que la masa total no cambiaba. Así enunció la <mark>ley de conservación de la masa</mark>: <b>en una reacción química, la masa total de los reactivos es igual a la masa total de los productos</b>. Se resume en la frase «la materia no se crea ni se destruye, solo se transforma». La teoría de colisiones lo explica: si los átomos solo se reorganizan, su número y su masa total no varían. Si una reacción parece ganar o perder masa, es porque algún gas ha entrado o salido del recipiente.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Balanza con un recipiente cerrado antes y después de la reacción: marca 150 gramos en los dos casos">${BG}
        ${[[66, "antes", "150 g"], [194, "después", "150 g"]].map(([x, n, m], i) => `<rect x="${x - 46}" y="120" width="92" height="30" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${t(x, 140, m, { size: 13, color: "var(--leaf)" })}<path d="M${x - 18} 70 Q ${x - 22} 116 ${x} 116 Q ${x + 22} 116 ${x + 18} 70 Z" fill="${i ? "#9b59b6" : "var(--water)"}" fill-opacity=".4" stroke="var(--ink)" stroke-width="2"/><rect x="${x - 8}" y="60" width="16" height="10" fill="var(--red)"/>${t(x, 46, n, { size: 11 })}`).join("")}
        ${fl(116, 96, 144, 96)}${t(130, 172, "recipiente cerrado: la masa se conserva", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "aXtsG9RmvXM", titulo: "Ley de LAVOISIER o de conservación de la masa", canal: "unicoos", vistas: 367876 },
    },
    {
      html: `<h3>Ajustar una ecuación química</h3><p>Como los átomos se conservan, una ecuación química debe tener el <b>mismo número de átomos de cada elemento</b> a ambos lados de la flecha. Para conseguirlo se colocan <mark>coeficientes</mark> delante de las fórmulas: indican cuántas moléculas de cada sustancia intervienen. <b>Nunca se cambian los subíndices</b>, porque eso cambiaría la sustancia: H₂O es agua, pero H₂O₂ es agua oxigenada. Por ejemplo, en la formación del agua, H₂ + O₂ → H₂O, a la izquierda hay 2 oxígenos y a la derecha 1. Ponemos un 2 delante del agua: H₂ + O₂ → 2 H₂O. Ahora hay 4 hidrógenos a la derecha, así que ponemos un 2 delante del H₂: <b>2 H₂ + O₂ → 2 H₂O</b>. Ya está ajustada.</p>`,
      video: { id: "wl_HCBxpBs0", titulo: "BALANCEO de ecuaciones por TANTEO [Fácil y Rápido]", canal: "A Cierta Ciencia", vistas: 6620620 },
    },
    {
      html: `<h3>Cálculos con masas</h3><p>La ley de Lavoisier permite hacer <b>cálculos sencillos</b>. Si sabemos que 4 g de hidrógeno reaccionan con 32 g de oxígeno, sabremos que se forman <b>36 g de agua</b>. Además, el químico Joseph Proust descubrió que, en un compuesto, los elementos se combinan siempre en la <mark>misma proporción en masa</mark> (ley de las proporciones definidas): en el agua, siempre 1 g de hidrógeno por cada 8 g de oxígeno. Con estas dos leyes podemos predecir cuánto producto obtendremos o cuánto reactivo necesitamos. Si ponemos 1 g de hidrógeno con 10 g de oxígeno, solo reaccionarán 8 g de oxígeno, se formarán 9 g de agua y sobrarán 2 g de oxígeno.</p>${tabla(["Hidrógeno", "Oxígeno", "Agua formada", "Sobra"], [["1 g", "8 g", "9 g", "nada"], ["2 g", "16 g", "18 g", "nada"], ["1 g", "10 g", "9 g", "2 g de O"], ["3 g", "16 g", "18 g", "1 g de H"]])}`,
    },
    {
      html: `<h3>La velocidad de las reacciones</h3><p>Algunas reacciones son rapidísimas, como una explosión, y otras muy lentas, como la oxidación del hierro. La <mark>velocidad de reacción</mark> depende de varios factores, y todos se explican con la teoría de colisiones. La <b>temperatura</b>: al calentar, las partículas se mueven más rápido y chocan más y con más energía; por eso guardamos los alimentos en la nevera. La <b>concentración</b> de los reactivos: con más partículas, hay más choques. La <b>superficie de contacto</b>: un sólido troceado o en polvo reacciona antes, porque tiene más partículas expuestas; una astilla arde antes que un tronco. Y los <b>catalizadores</b>: sustancias que aceleran una reacción sin gastarse, como las <b>enzimas</b> de nuestro cuerpo o el catalizador de los coches.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro factores que aceleran una reacción: más temperatura, más concentración, más superficie de contacto y uso de catalizadores">${BG}
        ${[["temperatura ↑", "var(--red)"], ["concentración ↑", "var(--pen)"], ["superficie ↑", "#b8860b"], ["catalizador", "var(--leaf)"]].map(([n, c], i) => caja(14 + (i % 2) * 120, 30 + Math.floor(i / 2) * 60, 112, 48, n, c, { size: 12 })).join("")}
        ${t(130, 20, "más choques eficaces = más rápida", { size: 11, color: "var(--muted)" })}${t(130, 166, "ejemplos: nevera, polvo, enzimas", { size: 10, weight: 400 })}</svg>`,
    },
    {
      html: `<h3>La energía en las reacciones</h3><p>Romper enlaces cuesta energía y formar enlaces la libera. Según el balance, las reacciones pueden ser de dos tipos. Las <mark>exotérmicas</mark> desprenden energía, normalmente en forma de calor o luz: las combustiones, la respiración celular o las bolsas de calor instantáneo que se usan en la montaña. Las <mark>endotérmicas</mark> absorben energía del entorno, por lo que este se enfría: la fotosíntesis, que absorbe la energía de la luz; la descomposición de la piedra caliza al calentarla para obtener cal; o las bolsas de frío instantáneo de los botiquines. Además, casi todas las reacciones necesitan un pequeño empujón inicial de energía, la <b>energía de activación</b>: por eso una cerilla no arde hasta que la frotamos.</p>`,
    },
    {
      html: `<h3>Reacciones importantes</h3><p>Algunas reacciones son especialmente importantes. En la <mark>combustión</mark>, una sustancia combustible reacciona con el oxígeno y desprende mucha energía; si el combustible tiene carbono, se forman CO₂ y agua. En la <b>oxidación</b> de los metales, estos reaccionan lentamente con el oxígeno: el hierro forma herrumbre; por eso se pintan los barcos y se galvanizan las vallas. En las reacciones <b>ácido-base</b>, un ácido y una base se neutralizan formando sal y agua: así actúan los antiácidos en el estómago. La <b>fotosíntesis</b> y la <b>respiración celular</b> son reacciones opuestas que mantienen la vida: las plantas fabrican glucosa y oxígeno con CO₂, agua y luz, y todos los seres vivos queman esa glucosa para obtener energía.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fotosíntesis y respiración como reacciones opuestas: dióxido de carbono más agua más luz dan glucosa y oxígeno, y la respiración hace lo contrario liberando energía">${BG}
        ${caja(14, 64, 90, 52, "", "var(--muted)")}${t(59, 86, "CO₂ + H₂O", { size: 12 })}${caja(156, 64, 90, 52, "", "var(--leaf)")}${t(201, 86, "glucosa + O₂", { size: 11 })}
        <path d="M104 74 Q 130 40 156 74" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>${fl(150, 66, 156, 74, "var(--leaf)", 2.5)}
        <path d="M156 106 Q 130 140 104 106" fill="none" stroke="var(--red)" stroke-width="2.5"/>${fl(110, 114, 104, 106, "var(--red)", 2.5)}
        ${t(130, 28, "fotosíntesis (+ luz)", { size: 11, color: "var(--leaf)" })}${t(130, 164, "respiración (→ energía)", { size: 11, color: "var(--red)" })}
        ${t(59, 104, "reactivos", { size: 9, weight: 400 })}${t(201, 104, "productos", { size: 9, weight: 400 })}</svg>`,
    },
  ],
  figura: {
    titulo: "Qué pasa en una reacción química",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Esquema en tres pasos: reactivos que chocan, enlaces que se rompen y átomos que se reorganizan en productos; la masa total y el número de átomos se conservan">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["1. reactivos chocan", "2 H₂ + O₂", "var(--red)"], ["2. se rompen enlaces", "H H H H O O", "#b8860b"], ["3. se forman productos", "2 H₂O", "var(--leaf)"]].map(([n, f, c], i) => { const x = 20 + i * 210; return `<rect x="${x}" y="30" width="180" height="110" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${t(x + 90, 62, n, { size: 14, color: c, font: D })}${t(x + 90, 106, f, { size: 18 })}`; }).join("")}
      ${fl(202, 85, 228, 85, "var(--muted)", 3)}${fl(412, 85, 438, 85, "var(--muted)", 3)}
      ${t(320, 186, "mismos átomos, misma masa: 4 H y 2 O a cada lado", { size: 15, color: "var(--pen)", font: D })}
    </svg>`,
  },
  video: { id: "4Okc_cqvex8", titulo: "AJUSTAR o BALANCEAR REACCIONES por TANTEO", canal: "Susi Profe", vistas: 1326837, megusta: 0, busqueda: "reacciones químicas ajuste de ecuaciones" },
  ejemplos: [
    { enunciado: "Ajusta: N₂ + H₂ → NH₃.",
      pasos: ["Nitrógeno: 2 a la izquierda, 1 a la derecha → 2 NH₃.", "Hidrógeno: ahora hay 6 a la derecha y 2 a la izquierda → 3 H₂.", "Comprobamos: 2 N y 6 H a cada lado."],
      resultado: "N₂ + 3 H₂ → 2 NH₃." },
    { enunciado: "Ajusta la combustión del metano: CH₄ + O₂ → CO₂ + H₂O.",
      pasos: ["Carbono: 1 y 1, ya está.", "Hidrógeno: 4 a la izquierda → 2 H₂O.", "Oxígeno: a la derecha hay 2 + 2 = 4 → 2 O₂."],
      resultado: "CH₄ + 2 O₂ → CO₂ + 2 H₂O." },
    { enunciado: "Al quemar 12 g de carbono se forman 44 g de CO₂. ¿Cuánto oxígeno ha reaccionado?",
      pasos: ["Ley de Lavoisier: masa de reactivos = masa de productos.", "12 g + m(O₂) = 44 g.", "m(O₂) = 44 − 12."],
      resultado: "32 g de oxígeno." },
  ],
  errores: [
    "Cambiar los subíndices para ajustar: se cambian solo los coeficientes.",
    "Pensar que en una combustión la materia desaparece: se convierte en gases.",
    "Confundir la disolución del azúcar (cambio físico) con una reacción química.",
    "Creer que un catalizador se gasta en la reacción.",
    "Decir que una reacción endotérmica desprende calor: lo absorbe.",
  ],
  ejercicios: [
    { q: "Clasifica en físicos o químicos: hervir agua, oxidarse una bicicleta, triturar pimienta, hacer un bizcocho, disolver sal, quemar gas.", sol: "Físicos: hervir agua, triturar pimienta, disolver sal. Químicos: oxidarse la bicicleta, hacer un bizcocho, quemar gas." },
    { q: "Cita tres señales que indican que puede haber ocurrido una reacción química.", sol: "Cambio de color, desprendimiento de gas, formación de precipitado, emisión de luz o calor, aparición de olor." },
    { q: "En la reacción Zn + 2 HCl → ZnCl₂ + H₂, identifica reactivos y productos.", sol: "Reactivos: cinc y cloruro de hidrógeno. Productos: cloruro de cinc y dihidrógeno." },
    { q: "Explica con la teoría de colisiones qué ocurre en una reacción.", sol: "Las partículas chocan con energía y orientación adecuadas, se rompen sus enlaces y los átomos se reorganizan formando sustancias nuevas." },
    { q: "Ajusta: Mg + O₂ → MgO.", sol: "2 Mg + O₂ → 2 MgO." },
    { q: "Ajusta: Fe + O₂ → Fe₂O₃.", sol: "4 Fe + 3 O₂ → 2 Fe₂O₃." },
    { q: "Ajusta: C₃H₈ + O₂ → CO₂ + H₂O.", sol: "C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O." },
    { q: "Si 56 g de hierro reaccionan con 32 g de azufre, ¿cuánto sulfuro de hierro se forma? ¿Y si usamos 112 g de hierro y 80 g de azufre?", sol: "88 g. En el segundo caso reaccionan 112 g de Fe con 64 g de S, se forman 176 g y sobran 16 g de azufre." },
    { q: "¿Por qué los alimentos se conservan más en la nevera?", sol: "Porque a menor temperatura las partículas chocan menos y con menos energía, y las reacciones de descomposición son más lentas." },
    { q: "Diferencia reacción exotérmica y endotérmica con un ejemplo de cada una.", sol: "Exotérmica: desprende energía (combustión). Endotérmica: absorbe energía (fotosíntesis)." },
  ],
  quiz: [
    { q: "Es un cambio químico…", o: ["fundir chocolate", "freír un huevo", "romper un plato"], a: 1, e: "Se forman sustancias nuevas." },
    { q: "Las sustancias iniciales de una reacción son…", o: ["productos", "reactivos", "catalizadores"], a: 1, e: "Reactivos." },
    { q: "La ley de conservación de la masa es de…", o: ["Lavoisier", "Dalton", "Newton"], a: 0, e: "Lavoisier." },
    { q: "Para ajustar una ecuación se cambian…", o: ["los subíndices", "los coeficientes", "los símbolos"], a: 1, e: "Los coeficientes." },
    { q: "2 H₂ + O₂ → 2 H₂O tiene a cada lado…", o: ["2 H y 2 O", "4 H y 2 O", "4 H y 1 O"], a: 1, e: "4 H y 2 O." },
    { q: "Al triturar un sólido, la reacción va…", o: ["más rápida", "más lenta", "igual"], a: 0, e: "Más superficie de contacto." },
    { q: "Un catalizador…", o: ["se gasta", "acelera sin gastarse", "frena la reacción"], a: 1, e: "Acelera sin gastarse." },
    { q: "La combustión es una reacción…", o: ["endotérmica", "exotérmica", "sin energía"], a: 1, e: "Exotérmica." },
    { q: "Si 10 g de A reaccionan con 5 g de B, se forman…", o: ["5 g", "15 g", "50 g"], a: 1, e: "10 + 5 = 15 g." },
    { q: "Las burbujas al mezclar vinagre y bicarbonato indican…", o: ["ebullición", "desprendimiento de un gas", "fusión"], a: 1, e: "Se forma CO₂." },
  ],
  examen: [
    { q: "La fotosíntesis es una reacción…", o: ["endotérmica", "exotérmica", "física"], a: 0, e: "Absorbe la energía de la luz." },
    { q: "Las enzimas son…", o: ["catalizadores biológicos", "productos", "combustibles"], a: 0, e: "Catalizadores biológicos." },
    { q: "La energía de activación es…", o: ["la energía inicial necesaria", "la energía que sobra", "el calor desprendido"], a: 0, e: "El empujón inicial." },
  ],
  feynman: ["Qué diferencia hay entre un cambio físico y uno químico", "Por qué la masa se conserva y cómo se ajusta una ecuación", "Qué factores aceleran una reacción y por qué"],
  mapa: mapa("REACCIÓN QUÍMICA", "var(--eso)", [
    ["Qué es", "reactivos → productos", "var(--red)"],
    ["Ley", "Lavoisier · ajuste con coeficientes", "var(--pen)"],
    ["Velocidad", "T · concentración · superficie · catalizador", "#b8860b"],
    ["Energía", "exotérmica · endotérmica", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Cambio químico", "Se forman sustancias nuevas."],
    ["Reactivos y productos", "Sustancias iniciales y finales."],
    ["Ecuación química", "Reactivos → productos, con fórmulas y coeficientes."],
    ["Ley de Lavoisier", "Masa de reactivos = masa de productos."],
    ["Ajustar", "Igualar átomos con coeficientes, sin tocar subíndices."],
    ["Teoría de colisiones", "Reaccionan las partículas que chocan con energía y orientación."],
    ["Catalizador", "Acelera la reacción sin gastarse."],
    ["Exotérmica", "Desprende energía; la endotérmica la absorbe."],
  ],
  familias: ["Echad vinagre sobre bicarbonato dentro de una botella con un globo en la boca y observad cómo se hincha.", "Partid una manzana y dejad la mitad con limón y la otra sin él: ¿cuál se oscurece antes?", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "El cambio: cambios físicos y químicos, reacciones químicas, teoría de colisiones, ley de conservación de la masa, ajuste de ecuaciones y factores que influyen en la velocidad (RD 217/2022, Física y Química 2º y 3º).",
    ideas: ["Comprobar la ley de Lavoisier con vinagre y bicarbonato en un recipiente abierto y en uno cerrado.", "Ajustar ecuaciones con modelos de bolas y palillos.", "Pastillas efervescentes enteras y en polvo, en agua fría y caliente, para estudiar la velocidad."],
  },
  fuentes: [RD, wiki("Reacción química", "Reacci%C3%B3n_qu%C3%ADmica"), wiki("Ley de conservación de la materia", "Ley_de_conservaci%C3%B3n_de_la_materia")],
  revisado: "2026-11-12",
};
