// Física y Química 2º ESO: los cambios químicos. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

// Molécula sencilla: lista de [dx, dy, r, color] alrededor de (x, y).
const mol = (x, y, at) => at.map(([dx, dy, r, c]) => `<circle cx="${x + dx}" cy="${y + dy}" r="${r}" fill="${c}" stroke="var(--ink)" stroke-width="1"/>`).join("");
const H = "#ffffff", O = "#e04a3a", CC = "#444";

module.exports = {
  materia: "Física y Química",
  curso: C,
  titulo: "Los cambios químicos",
  minutos: 55,
  objetivos: ["Distinguir cambios físicos y químicos con ejemplos cotidianos", "Reconocer las señales de que se ha producido una reacción química", "Explicar una reacción como una reorganización de átomos e interpretar ecuaciones químicas sencillas", "Aplicar la ley de conservación de la masa y conocer reacciones importantes: combustión, oxidación y fotosíntesis"],
  claves: ["cambio físico", "cambio químico", "reacción química", "reactivos", "productos", "ecuación química", "ley de Lavoisier", "combustión", "oxidación"],
  pregunta: {
    texto: "Si quemas una hoja de papel de 5 g, solo quedan unas cenizas que casi no pesan nada. ¿Ha desaparecido la materia?",
    respuesta: "No. La materia no se crea ni se destruye: se <mark>transforma</mark>. Al quemarse, el papel reacciona con el oxígeno del aire y se convierte en <b>dióxido de carbono y vapor de agua</b>, que son gases y se van al aire. Si recogiéramos todos los gases y las cenizas, su masa sería igual a la del papel más la del oxígeno que se ha gastado. Es la <mark>ley de conservación de la masa</mark> de Lavoisier.",
  },
  bloques: [
    {
      html: `<h3>Cambios físicos y cambios químicos</h3><p>La materia cambia continuamente, pero no todos los cambios son iguales. En un <mark>cambio físico</mark> la sustancia sigue siendo la misma: solo cambia su estado, su forma o su tamaño. Son cambios físicos fundir hielo, romper un vaso, disolver azúcar en agua, doblar un alambre o estirar una goma. En muchos casos se pueden deshacer fácilmente. En un <mark>cambio químico</mark> o <b>reacción química</b>, unas sustancias se transforman en <b>otras sustancias distintas</b>, con propiedades diferentes. Son cambios químicos quemar madera, freír un huevo, la oxidación de un clavo, la digestión de los alimentos, la fermentación del pan o la fotosíntesis. Normalmente no se pueden deshacer de forma sencilla: no podemos «desfreír» un huevo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cambio físico: un cubito de hielo se funde y sigue siendo agua. Cambio químico: una cerilla arde y se forman sustancias nuevas, humo y ceniza">${BG}
        <line x1="130" y1="14" x2="130" y2="166" stroke="var(--line)" stroke-width="2"/>${t(66, 26, "físico", { size: 13, color: "var(--pen)" })}${t(196, 26, "químico", { size: 13, color: "var(--red)" })}
        <rect x="18" y="56" width="30" height="30" rx="5" fill="#cfe8ff" stroke="var(--pen)" stroke-width="2"/>${fl(54, 72, 76, 72)}<ellipse cx="100" cy="84" rx="20" ry="7" fill="var(--pen)" fill-opacity=".45"/>
        ${t(32, 110, "hielo", { size: 10 })}${t(100, 110, "agua", { size: 10 })}${t(66, 140, "misma sustancia", { size: 10, color: "var(--muted)" })}
        <rect x="156" y="62" width="6" height="40" fill="#e8c79a"/><circle cx="159" cy="60" r="5" fill="var(--red)"/>${fl(170, 78, 192, 78)}
        <rect x="216" y="70" width="6" height="32" fill="#e8c79a"/><path d="M219 66 q -10 -12 0 -26 q 10 14 0 26 Z" fill="#f08a24"/><path d="M226 46 q 8 -8 2 -18 M232 50 q 10 -10 4 -20" stroke="var(--muted)" stroke-width="2" fill="none"/>
        ${t(196, 140, "sustancias nuevas", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "yUNl64QGzII", titulo: "Cambios físicos y químicos [Fácil y Rápido]", canal: "A Cierta Ciencia", vistas: 2320893 },
    },
    {
      html: `<h3>Cómo reconocer una reacción química</h3><p>No vemos los átomos, pero hay <mark>señales</mark> que indican que se ha producido una reacción química: un <b>cambio de color</b> (una manzana cortada que se pone marrón, el cobre de la Estatua de la Libertad que se volvió verde); la formación de <b>gases</b>, que se ven como burbujas (una pastilla efervescente en agua, el bicarbonato con vinagre); la aparición de un <b>sólido</b> en una disolución, llamado precipitado; un <b>cambio de olor</b> (la leche agria, la comida podrida); o el desprendimiento o la absorción de <b>energía</b> en forma de luz, calor o electricidad (un fuego, una pila, un bastón luminoso). Ojo: alguna de estas señales también aparece en cambios físicos, como las burbujas al hervir el agua, así que hay que fijarse bien en si se forman sustancias nuevas.</p>`,
    },
    {
      html: `<h3>Reactivos y productos</h3><p>En toda reacción química hay unas sustancias iniciales, los <mark>reactivos</mark>, que desaparecen, y unas sustancias finales, los <mark>productos</mark>, que se forman. Se representa con una flecha: <b>reactivos → productos</b>. Por ejemplo, en la combustión del gas natural, los reactivos son el metano y el oxígeno, y los productos, el dióxido de carbono y el agua. ¿Qué ocurre por dentro? Según la <mark>teoría de las colisiones</mark>, las partículas de los reactivos <b>chocan</b> entre sí; si el choque tiene suficiente energía y la orientación adecuada, se <b>rompen los enlaces</b> que unen sus átomos y estos se <b>reorganizan</b> formando nuevas moléculas. Los átomos no cambian ni desaparecen: solo cambian de compañeros. Por eso las reacciones van más rápido si se calientan, si los reactivos están en trozos pequeños o si están más concentrados: hay más choques.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Reacción de hidrógeno y oxígeno: dos moléculas de hidrógeno y una de oxígeno chocan, se rompen los enlaces y se forman dos moléculas de agua; los átomos son los mismos">${BG}
        ${mol(30, 60, [[0, 0, 8, H], [14, 0, 8, H]])}${mol(30, 100, [[0, 0, 8, H], [14, 0, 8, H]])}${mol(72, 80, [[0, 0, 10, O], [18, 0, 10, O]])}
        ${t(60, 30, "reactivos", { size: 11, color: "var(--pen)" })}${t(60, 140, "2 H₂ + O₂", { size: 12 })}
        ${fl(110, 80, 150, 80, "var(--ink)", 2.5)}
        ${mol(186, 64, [[0, 0, 10, O], [-12, 10, 7, H], [12, 10, 7, H]])}${mol(206, 104, [[0, 0, 10, O], [-12, 10, 7, H], [12, 10, 7, H]])}
        ${t(200, 30, "productos", { size: 11, color: "var(--red)" })}${t(200, 140, "2 H₂O", { size: 12 })}
        ${t(130, 166, "mismos átomos, nuevas uniones", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Las ecuaciones químicas</h3><p>Los químicos escriben las reacciones con <mark>ecuaciones químicas</mark>, usando las fórmulas de las sustancias. Por ejemplo: <b>2 H₂ + O₂ → 2 H₂O</b>. Se lee: «dos moléculas de hidrógeno reaccionan con una de oxígeno y forman dos moléculas de agua». El número pequeño, el <b>subíndice</b>, indica cuántos átomos de cada elemento hay en una molécula (H₂O tiene 2 de hidrógeno y 1 de oxígeno). El número grande delante, el <b>coeficiente</b>, indica cuántas moléculas intervienen. Una ecuación está <mark>ajustada</mark> cuando hay el mismo número de átomos de cada elemento a los dos lados de la flecha. Para ajustar se cambian solo los coeficientes, nunca los subíndices, porque eso cambiaría la sustancia: H₂O₂ no es agua, es agua oxigenada.</p>${tabla(["", "Reactivos (2 H₂ + O₂)", "Productos (2 H₂O)"], [["Átomos de H", "2 · 2 = 4", "2 · 2 = 4"], ["Átomos de O", "2", "2 · 1 = 2"]])}`,
      video: { id: "l4iZLLPMaRE", titulo: "Reacciones químicas: definición y partes de las ecuaciones", canal: "EduDraw", vistas: 858758 },
    },
    {
      html: `<h3>La ley de conservación de la masa</h3><p>En el siglo XVIII el químico francés <b>Antoine Lavoisier</b> hizo reaccionar sustancias en recipientes <b>cerrados</b> y midió su masa con balanzas muy precisas. Descubrió que la masa total no cambiaba. Así enunció la <mark>ley de conservación de la masa</mark>: <b>en una reacción química, la masa total de los reactivos es igual a la masa total de los productos</b>. Se resume en la frase «la materia no se crea ni se destruye, solo se transforma». Se explica porque los átomos no desaparecen, solo se reorganizan. Si parece que la masa cambia, es porque algún gas entra o sale: un clavo oxidado pesa <b>más</b> porque ha tomado oxígeno del aire, y una vela pesa <b>menos</b> al arder porque los gases se escapan. Lavoisier también descubrió el papel del oxígeno en la combustión y en la respiración.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ley de Lavoisier: en un frasco cerrado sobre una balanza, antes y después de la reacción la balanza marca lo mismo, 120 gramos">${BG}
        ${[[60, "antes"], [196, "después"]].map(([x, s], i) => `<rect x="${x - 46}" y="128" width="92" height="22" rx="4" fill="var(--muted)"/><rect x="${x - 26}" y="132" width="52" height="14" rx="2" fill="#0c1a12"/>${t(x, 143, "120 g", { size: 11, color: "#6ef08a" })}
          <path d="M${x - 20} 126 v -50 q 0 -10 10 -10 h 20 q 10 0 10 10 v 50 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="${x - 12}" y="56" width="24" height="10" fill="#8a6a4a"/>
          <path d="M${x - 18} 126 v -24 h 36 v 24 Z" fill="${i ? "var(--leaf)" : "var(--pen)"}" fill-opacity=".35"/>${i ? [[-8, 86], [6, 80], [0, 92]].map(([dx, y]) => `<circle cx="${x + dx}" cy="${y}" r="3" fill="none" stroke="var(--ink)"/>`).join("") : ""}${t(x, 170, s, { size: 11 })}`).join("")}
        ${fl(110, 100, 146, 100, "var(--red)", 2.5)}${t(130, 30, "masa reactivos = masa productos", { size: 10, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>La combustión</h3><p>La <mark>combustión</mark> es una reacción rápida de una sustancia, el <b>combustible</b>, con el <b>oxígeno</b> del aire, el <b>comburente</b>, que desprende mucha <b>energía</b> en forma de luz y calor. Para que empiece hace falta una <b>temperatura de ignición</b>, que se consigue con una chispa o una llama. Son los tres lados del <b>triángulo del fuego</b>: combustible, comburente y calor. Si falta uno, el fuego se apaga: por eso se echa tierra o se usa una manta (sin oxígeno), se moja con agua (sin calor) o se cortan árboles en los cortafuegos (sin combustible). Los combustibles más usados, como la madera, el gas natural, la gasolina o el carbón, contienen carbono e hidrógeno y al quemarse producen <b>dióxido de carbono y agua</b>. El CO₂ es un gas de efecto invernadero; si falta oxígeno, se forma <b>monóxido de carbono</b>, un gas muy tóxico.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Triángulo del fuego: combustible, comburente u oxígeno y calor o energía de activación; si falta uno, el fuego se apaga">${BG}
        <path d="M130 20 L 230 160 L 30 160 Z" fill="none" stroke="var(--red)" stroke-width="4" stroke-linejoin="round"/>
        <path d="M130 140 q -26 -22 -6 -56 q 4 18 14 22 q 4 -14 -2 -30 q 30 24 14 64 Z" fill="#f08a24"/><path d="M130 140 q -12 -12 -2 -30 q 6 12 10 14 q 6 10 -8 16 Z" fill="#ffd34d"/>
        ${t(130, 176, "combustible", { size: 11 })}${t(62, 84, "oxígeno", { size: 11, color: "var(--pen)" })}${t(204, 84, "calor", { size: 11, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>La oxidación y la corrosión</h3><p>No todas las reacciones con oxígeno son rápidas. La <mark>oxidación</mark> lenta de los metales se llama <b>corrosión</b>. El hierro, en contacto con el oxígeno y la <b>humedad</b>, se cubre de una capa rojiza y quebradiza, el <b>óxido de hierro</b> u orín, que se va desprendiendo y debilita la pieza. Por eso los barcos, los puentes y las vallas metálicas se pintan, se galvanizan (se cubren de cinc) o se fabrican con acero inoxidable, que lleva cromo. Otros metales, como el aluminio o el cobre, forman una capa fina de óxido que los protege. También se oxidan los alimentos: la manzana o el aguacate cortados se oscurecen por la acción del oxígeno, y se puede evitar echando zumo de limón. La respiración de nuestras células es otra oxidación lenta de la glucosa que nos da energía.</p>`,
    },
    {
      html: `<h3>Reacciones químicas a nuestro alrededor</h3><p>Las reacciones químicas están por todas partes. En la naturaleza, la <mark>fotosíntesis</mark> permite a las plantas fabricar glucosa y oxígeno a partir de dióxido de carbono y agua con la energía del Sol: <b>6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂</b>. La <b>respiración</b> hace justo lo contrario. En la cocina, la <b>fermentación</b> de la levadura produce CO₂ que hace subir el pan; al tostar o freír se forman sustancias con sabor y color nuevos. En la industria se fabrican plásticos, medicamentos, abonos, jabones y tejidos. Las <b>pilas</b> producen electricidad gracias a reacciones químicas. Hay reacciones que desprenden energía, las <b>exotérmicas</b> (combustiones, calentadores de manos), y otras que la absorben, las <b>endotérmicas</b> (bolsas de frío instantáneo, cocinar un huevo).</p>`,
      video: { id: "LAF4jPL2e-c", titulo: "Ley de la conservación de la masa (en reacciones químicas)", canal: "Emmanuel Asesorías", vistas: 655943 },
    },
    {
      html: `<h3>Química y medio ambiente</h3><p>La química nos da muchos beneficios, pero algunas reacciones tienen efectos negativos en el medio ambiente. La combustión de carbón, petróleo y gas libera grandes cantidades de <b>dióxido de carbono</b>, que refuerza el <mark>efecto invernadero</mark> y causa el cambio climático. Los óxidos de azufre y de nitrógeno de fábricas y coches reaccionan con el agua de la atmósfera y forman la <mark>lluvia ácida</mark>, que daña bosques, lagos y monumentos de piedra caliza. Algunos gases que se usaban en los aerosoles y frigoríficos, los CFC, destruían la <b>capa de ozono</b>; se prohibieron en 1987 y la capa se está recuperando. La química también ofrece soluciones: catalizadores en los coches, plásticos biodegradables, depuración de aguas y nuevas baterías para las energías renovables.</p>`,
    },
  ],
  figura: {
    titulo: "Cambio físico o químico",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Comparación: en un cambio físico la sustancia es la misma, como fundir o disolver; en un cambio químico se forman sustancias nuevas, como quemar u oxidar; en ambos se conserva la masa">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      <rect x="24" y="24" width="282" height="150" rx="14" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>${t(165, 56, "Cambio físico", { size: 17, color: "var(--pen)", font: D })}${t(165, 92, "la sustancia es la misma", { size: 14, weight: 400 })}${t(165, 128, "fundir · disolver · romper", { size: 13, color: "var(--muted)" })}
      <rect x="334" y="24" width="282" height="150" rx="14" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>${t(475, 56, "Cambio químico", { size: 17, color: "var(--red)", font: D })}${t(475, 92, "sustancias nuevas", { size: 14, weight: 400 })}${t(475, 128, "quemar · oxidar · cocinar", { size: 13, color: "var(--muted)" })}
      ${t(320, 208, "En los dos se conserva la masa total", { size: 14, color: "var(--leaf)" })}
    </svg>`,
  },
  video: { id: "UZRcNyCeydw", titulo: "La Materia: cambios físicos y químicos", canal: "Aula chachi", vistas: 636834, megusta: 6159, busqueda: "cambios físicos y químicos reacciones" },
  ejemplos: [
    { enunciado: "Al quemar 12 g de carbono con 32 g de oxígeno se forma dióxido de carbono. ¿Qué masa de CO₂ se obtiene?",
      pasos: ["Ley de conservación de la masa: masa de reactivos = masa de productos.", "Masa de reactivos: 12 + 32 = 44 g.", "Toda se convierte en CO₂."],
      resultado: "44 g de CO₂." },
    { enunciado: "Comprueba si está ajustada: CH₄ + 2 O₂ → CO₂ + 2 H₂O.",
      pasos: ["C: 1 a la izquierda, 1 a la derecha.", "H: 4 a la izquierda; 2 · 2 = 4 a la derecha.", "O: 2 · 2 = 4 a la izquierda; 2 + 2 · 1 = 4 a la derecha."],
      resultado: "Sí, está ajustada." },
    { enunciado: "Ajusta la ecuación: N₂ + H₂ → NH₃.",
      pasos: ["Hay 2 N a la izquierda: pon un 2 delante del NH₃ → N₂ + H₂ → 2 NH₃.", "Ahora hay 2 · 3 = 6 H a la derecha: pon un 3 delante del H₂.", "N₂ + 3 H₂ → 2 NH₃: 2 N y 6 H a cada lado."],
      resultado: "N₂ + 3 H₂ → 2 NH₃." },
  ],
  errores: [
    "Considerar químico cualquier cambio de estado: fundir, hervir o disolver son cambios físicos.",
    "Pensar que en una combustión la materia desaparece: se transforma en gases.",
    "Ajustar las ecuaciones cambiando los subíndices: solo se cambian los coeficientes.",
    "Creer que un clavo oxidado pesa menos: pesa más porque ha incorporado oxígeno.",
    "Confundir reactivos y productos: los reactivos están a la izquierda de la flecha.",
  ],
  ejercicios: [
    { q: "Clasifica en físicos o químicos: hacer zumo de naranja, quemar gasolina, hervir agua, hacer yogur, oxidarse una bici, romper un papel.", sol: "Físicos: zumo, hervir agua, romper papel. Químicos: quemar gasolina, hacer yogur (fermentación), oxidarse una bici." },
    { q: "Escribe cuatro señales de que ha ocurrido una reacción química.", sol: "Cambio de color, desprendimiento de gas, formación de un precipitado y desprendimiento de luz o calor (también cambio de olor)." },
    { q: "En la reacción del bicarbonato con el vinagre se forman acetato de sodio, agua y dióxido de carbono. Señala reactivos y productos.", sol: "Reactivos: bicarbonato y vinagre (ácido acético). Productos: acetato de sodio, agua y dióxido de carbono." },
    { q: "Explica con la teoría de las colisiones por qué el azúcar en polvo reacciona más rápido que un terrón.", sol: "Porque al estar más dividido tiene más superficie de contacto y hay más choques entre partículas." },
    { q: "¿Cuántos átomos de cada elemento hay en 3 H₂O?", sol: "6 átomos de H y 3 de O." },
    { q: "Ajusta: H₂ + Cl₂ → HCl.", sol: "H₂ + Cl₂ → 2 HCl." },
    { q: "Ajusta: Mg + O₂ → MgO.", sol: "2 Mg + O₂ → 2 MgO." },
    { q: "Si 56 g de hierro reaccionan con 32 g de azufre, ¿cuánto sulfuro de hierro se forma?", sol: "56 + 32 = 88 g." },
    { q: "Indica cómo apaga el fuego: a) una manta ignífuga; b) un cubo de agua; c) un cortafuegos.", sol: "a) Quita el oxígeno; b) quita el calor; c) quita el combustible." },
    { q: "Escribe dos formas de proteger el hierro de la corrosión.", sol: "Pintarlo, galvanizarlo con cinc, engrasarlo o usar acero inoxidable." },
  ],
  quiz: [
    { q: "¿Cuál es un cambio químico?", o: ["Fundir chocolate", "Freír un huevo", "Cortar pan"], a: 1, e: "Se forman sustancias nuevas." },
    { q: "Las sustancias iniciales de una reacción son los…", o: ["productos", "reactivos", "catalizadores"], a: 1, e: "Reactivos." },
    { q: "En una reacción, los átomos…", o: ["desaparecen", "se reorganizan", "se crean"], a: 1, e: "Se reorganizan." },
    { q: "En 2 H₂O, el 2 grande es el…", o: ["subíndice", "coeficiente", "exponente"], a: 1, e: "Coeficiente." },
    { q: "La ley de conservación de la masa es de…", o: ["Newton", "Lavoisier", "Dalton"], a: 1, e: "Lavoisier." },
    { q: "En una combustión, el comburente es…", o: ["el oxígeno", "la madera", "el CO₂"], a: 0, e: "El oxígeno." },
    { q: "Para que un clavo se oxide hace falta…", o: ["oxígeno y humedad", "solo calor", "luz"], a: 0, e: "Oxígeno y humedad." },
    { q: "La fotosíntesis produce…", o: ["CO₂ y agua", "glucosa y oxígeno", "metano"], a: 1, e: "Glucosa y oxígeno." },
    { q: "Una reacción que desprende calor es…", o: ["endotérmica", "exotérmica", "física"], a: 1, e: "Exotérmica." },
    { q: "La lluvia ácida se forma por óxidos de…", o: ["azufre y nitrógeno", "hierro", "helio"], a: 0, e: "Azufre y nitrógeno." },
  ],
  examen: [
    { q: "Para ajustar una ecuación se cambian…", o: ["los subíndices", "los coeficientes", "las fórmulas"], a: 1, e: "Solo los coeficientes." },
    { q: "Una vela pesa menos después de arder porque…", o: ["la masa desaparece", "los gases se escapan", "se derrite"], a: 1, e: "Los productos gaseosos salen al aire." },
    { q: "Si falta oxígeno en una combustión se forma…", o: ["monóxido de carbono", "oxígeno", "ozono"], a: 0, e: "CO, muy tóxico." },
  ],
  feynman: ["Cómo distinguir un cambio físico de uno químico", "Qué les pasa a los átomos en una reacción y por qué se conserva la masa", "Qué es el triángulo del fuego y cómo se apaga un incendio"],
  mapa: mapa("REACCIONES", "var(--eso)", [
    ["Cambio químico", "sustancias nuevas · señales", "var(--red)"],
    ["Ecuación", "reactivos → productos · ajuste", "var(--pen)"],
    ["Lavoisier", "la masa se conserva", "#b8860b"],
    ["Ejemplos", "combustión · oxidación · fotosíntesis", "var(--leaf)"],
  ], 290),
  tarjetas: [
    ["Cambio físico", "La sustancia sigue siendo la misma: cambia su estado, forma o tamaño."],
    ["Cambio químico", "Unas sustancias se transforman en otras distintas."],
    ["Reactivos", "Sustancias iniciales de una reacción."],
    ["Productos", "Sustancias que se forman en una reacción."],
    ["Ecuación ajustada", "Mismo número de átomos de cada elemento a los dos lados."],
    ["Ley de Lavoisier", "La masa de los reactivos es igual a la de los productos."],
    ["Combustión", "Reacción rápida con oxígeno que desprende luz y calor."],
    ["Corrosión", "Oxidación lenta de los metales."],
  ],
  familias: ["Hinchad un globo con bicarbonato y vinagre en una botella y comentad qué señal de reacción veis.", "Cortad una manzana, echad limón a una mitad y comparad al cabo de una hora.", "Buscad en casa ejemplos de cambios físicos y químicos (cocina, jardín, garaje)."],
  profesores: {
    saberes: "El cambio: cambios físicos y químicos, interpretación macroscópica y microscópica de las reacciones, ecuaciones químicas, ley de conservación de la masa y química y sociedad (RD 217/2022, Física y Química, bloque «El cambio»).",
    ideas: ["Experimento de Lavoisier con bicarbonato y vinagre en botella cerrada sobre una balanza.", "Modelos de moléculas con plastilina para «ver» la reorganización de átomos.", "Estudio de la oxidación de clavos en distintas condiciones (seco, agua, agua salada, aceite)."],
  },
  fuentes: [RD, wiki("Reacción química", "Reacción_química"), wiki("Ley de conservación de la materia", "Ley_de_conservación_de_la_materia")],
  revisado: REV,
};
