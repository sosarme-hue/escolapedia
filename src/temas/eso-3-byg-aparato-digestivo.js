// Biología y Geología 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Silueta de cabeza y tronco con el tubo digestivo (para bloques y figura).
const tubo = (s = 1, x0 = 0, y0 = 0) => `<g transform="translate(${x0} ${y0}) scale(${s})">
  <path d="M60 10 Q 92 10 92 40 Q 92 58 80 64 L 82 74 H 100 Q 130 80 132 110 V 250 H -12 V 110 Q -10 80 20 74 H 38 L 40 64 Q 28 58 28 40 Q 28 10 60 10 Z" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
  <path d="M50 46 Q 56 52 66 48" stroke="var(--red)" stroke-width="4" fill="none"/>
  <path d="M58 50 V 120" stroke="var(--red)" stroke-width="5" fill="none"/>
  <path d="M58 118 Q 56 106 70 104 Q 98 104 96 128 Q 94 148 72 146 Q 64 146 62 140" fill="var(--red)" fill-opacity=".5" stroke="var(--red)" stroke-width="2.5"/>
  <path d="M20 108 Q 30 98 54 104 Q 52 128 34 130 Q 18 128 20 108 Z" fill="#8a4a2b" fill-opacity=".55"/>
  <path d="M62 144 Q 70 150 80 148" stroke="var(--inf)" stroke-width="5" fill="none"/>
  <path d="M10 236 V 160 Q 10 152 18 152 H 104 Q 112 152 112 160 V 230 Q 112 238 104 238 H 70 V 246" stroke="var(--sun)" stroke-width="9" fill="none" stroke-linejoin="round"/>
  <path d="M30 168 q 10 -8 20 0 t 20 0 t 20 0 M30 184 q 10 8 20 0 t 20 0 t 20 0 M30 200 q 10 -8 20 0 t 20 0 t 20 0 M30 216 q 10 8 20 0 t 20 0 t 20 0" stroke="var(--red)" stroke-width="4" fill="none" stroke-opacity=".8"/>
</g>`;

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "El aparato digestivo",
  minutos: 50,
  objetivos: ["Describir los órganos del tubo digestivo y las glándulas anejas", "Explicar la digestión mecánica y la digestión química", "Relacionar cada enzima con el nutriente que digiere y el lugar donde actúa", "Comprender la absorción y adoptar hábitos de salud digestiva"],
  claves: ["digestión", "tubo digestivo", "glándula aneja", "enzima", "bolo alimenticio", "quimo", "vellosidad intestinal", "microbiota"],
  pregunta: {
    texto: "Si estiraras tu tubo digestivo, mediría unos 8 metros. ¿Por qué necesitamos un tubo tan largo dentro del cuerpo?",
    respuesta: "Porque hay que <b>romper</b> los alimentos en moléculas diminutas y <mark>absorberlas</mark> antes de que salgan. Cuanto más largo y plegado es el intestino, más superficie tiene: sus pliegues y <b>vellosidades</b> suman unos 30 m², como un estudio pequeño.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la digestión?</h3><p>Los alimentos están formados por moléculas grandes, como el almidón, las proteínas o las grasas, que no pueden atravesar la pared del intestino. La <b>digestión</b> las transforma en moléculas pequeñas (glucosa, aminoácidos, ácidos grasos) que sí pasan a la sangre. Tiene dos partes. La <mark>digestión mecánica</mark> tritura y mezcla: la hacen los dientes y los músculos del tubo. La <mark>digestión química</mark> rompe las moléculas gracias a las <b>enzimas</b> de los jugos digestivos. Lo que no se digiere ni se absorbe se expulsa con las heces.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una molécula grande de almidón se rompe en muchas moléculas pequeñas de glucosa que atraviesan la pared">${BG}
        ${[0, 1, 2, 3, 4, 5].map((i) => `<circle cx="${26 + i * 14}" cy="60" r="7" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}<path d="M33 60 H 89" stroke="var(--ink)" stroke-width="1.5"/>
        ${t(62, 40, "almidón", { size: 11 })}${fl(110, 60, 140, 60)}${t(125, 48, "enzimas", { size: 10, color: "var(--red)" })}
        ${[[160, 40], [190, 56], [168, 78], [210, 36], [222, 74]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}${t(196, 102, "glucosa", { size: 11 })}
        <path d="M14 126 H 246" stroke="var(--red)" stroke-width="6" stroke-dasharray="20 6"/>${fl(196, 112, 196, 146, "var(--leaf)")}
        ${t(62, 150, "pared del intestino", { size: 10, color: "var(--muted)" })}${t(196, 166, "a la sangre", { size: 11, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>El tubo digestivo</h3><p>El aparato digestivo tiene dos partes: el <b>tubo digestivo</b>, por donde pasa el alimento, y las <b>glándulas anejas</b>, que fabrican jugos y los vierten al tubo. El tubo es un conducto continuo que empieza en la <mark>boca</mark> y sigue por la <mark>faringe</mark>, el <mark>esófago</mark>, el <mark>estómago</mark>, el <mark>intestino delgado</mark> (unos 6 m) y el <mark>intestino grueso</mark> (1,5 m), que termina en el ano. Sus paredes tienen músculo liso, que se contrae de forma automática para empujar el contenido.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Silueta con el tubo digestivo: boca, esófago, estómago, hígado, intestino delgado e intestino grueso">${BG}
        ${tubo(0.66, 60, 8)}
        ${[["boca", 38], ["esófago", 64], ["estómago", 88], ["intestino delgado", 132], ["intestino grueso", 162]].map(([n, y]) => t(150, y, n, { size: 10, anchor: "start" })).join("")}
        ${t(54, 86, "hígado", { size: 10, anchor: "end", color: "#8a4a2b" })}
        <g stroke="var(--muted)" stroke-width="1"><path d="M148 35 H 104 M148 61 H 100 M148 85 H 124 M148 129 H 128 M148 159 H 136"/></g></svg>`,
      video: { id: "Ix1gqUZrAiE", titulo: "El viaje de los alimentos a través de tu cuerpo", canal: "GENIAL", vistas: 15686869 },
    },
    {
      html: `<h3>Las glándulas anejas</h3><p>Las <b>glándulas salivales</b> (parótidas, submaxilares y sublinguales) producen saliva, más de un litro al día. El <mark>hígado</mark>, el órgano interno más grande, fabrica la <b>bilis</b>, que se guarda en la vesícula biliar y sale al intestino cuando comemos grasas: no es una enzima, pero <b>emulsiona</b> las grasas, es decir, las rompe en gotitas para que las enzimas actúen mejor. El hígado además almacena glucosa y elimina sustancias tóxicas. El <mark>páncreas</mark> produce el jugo pancreático, con enzimas para los tres grandes nutrientes.</p>`,
    },
    {
      html: `<h3>En la boca: masticación e insalivación</h3><p>En la boca empieza todo. Los <b>dientes</b> trituran: los <b>incisivos</b> cortan, los <b>caninos</b> desgarran y los <b>premolares</b> y <b>molares</b> muelen. Un adulto tiene 32 dientes. La <b>lengua</b> mueve el alimento y lo mezcla con la saliva, que lo humedece y contiene una enzima, la <mark>amilasa salival</mark>, que empieza a romper el almidón. Por eso el pan, si lo masticas mucho rato, sabe dulce. El resultado es una pasta blanda, el <b>bolo alimenticio</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los cuatro tipos de dientes: incisivo, canino, premolar y molar, con su función">${BG}
        ${[["incisivo", "corta", "M-8 -40 H 8 L 6 0 H -6 Z"], ["canino", "desgarra", "M-8 -30 L 0 -46 L 8 -30 L 6 0 H -6 Z"], ["premolar", "muele", "M-12 -36 Q -6 -42 0 -36 Q 6 -42 12 -36 L 9 0 H -9 Z"], ["molar", "muele", "M-16 -34 Q -10 -42 -4 -34 Q 2 -42 8 -34 Q 14 -42 18 -34 L 14 0 H -12 Z"]].map(([n, f, d], i) => {
          const x = 38 + i * 62;
          return `<g transform="translate(${x} 96)"><path d="${d}" fill="#fff" stroke="var(--ink)" stroke-width="2"/><path d="M-6 0 L -4 30 M6 0 L 4 30" stroke="var(--red)" stroke-width="2" stroke-opacity=".5"/></g>${t(x, 146, n, { size: 11 })}${t(x, 162, f, { size: 10, color: "var(--muted)", weight: 400 })}`;
        }).join("")}
        <path d="M14 96 H 246" stroke="var(--red)" stroke-width="3" stroke-opacity=".4"/>${t(130, 30, "32 dientes en el adulto", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Deglución y peristaltismo</h3><p>Al tragar, la lengua empuja el bolo hacia la <b>faringe</b>, un conducto que compartimos con el aparato respiratorio. Para que el alimento no se vaya a la tráquea, una lengüeta de cartílago, la <mark>epiglotis</mark>, la tapa. Por eso no podemos respirar y tragar a la vez, y si hablamos comiendo nos atragantamos. Después, el bolo baja por el <b>esófago</b> gracias al <mark>peristaltismo</mark>: ondas de contracción de los músculos de la pared que lo empujan. Funcionan incluso cabeza abajo, como demuestran los astronautas que comen en el espacio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Peristaltismo: el músculo del esófago se contrae detrás del bolo y lo empuja hacia abajo">${BG}
        <path d="M100 14 C 92 50 108 70 100 96 C 94 120 106 140 100 168 M160 14 C 168 50 152 70 160 96 C 166 120 154 140 160 168" stroke="var(--red)" stroke-width="4" fill="none"/>
        <path d="M100 52 Q 130 64 160 52" stroke="var(--red)" stroke-width="7" fill="none" stroke-opacity=".6"/>
        <ellipse cx="130" cy="96" rx="22" ry="18" fill="#c99a6a"/>${t(130, 100, "bolo", { size: 10, color: "#fff" })}
        ${fl(130, 122, 130, 150, "var(--muted)")}
        ${t(196, 54, "contracción", { size: 10, anchor: "start", color: "var(--red)" })}${t(196, 100, "esófago", { size: 11, anchor: "start" })}${t(16, 150, "hacia el", { size: 10, anchor: "start", color: "var(--muted)" })}${t(16, 164, "estómago", { size: 10, anchor: "start", color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>El estómago</h3><p>El <b>estómago</b> es una bolsa muscular con capacidad para más de un litro. Sus paredes se contraen y mezclan el bolo con el <mark>jugo gástrico</mark>, que contiene <b>ácido clorhídrico</b> y la enzima <b>pepsina</b>. El ácido mata muchos microbios y activa la pepsina, que empieza a romper las proteínas. Para no digerirse a sí mismo, el estómago se protege con una capa de moco. Tras dos a cuatro horas, el bolo se ha convertido en una papilla ácida, el <b>quimo</b>, que pasa poco a poco al intestino a través de una válvula, el <b>píloro</b>.</p>`,
    },
    {
      html: `<h3>Las enzimas digestivas</h3><p>Las <b>enzimas</b> son proteínas que aceleran las reacciones químicas sin gastarse. Cada una es <mark>específica</mark>: actúa sobre un tipo de molécula, como una llave que solo abre su cerradura. Además, cada enzima necesita una temperatura y una acidez concretas: la pepsina trabaja en el ácido del estómago y las del intestino, en un medio casi neutro.</p>${tabla(["Enzima", "Dónde se produce", "Qué digiere", "Qué obtiene"], [["Amilasa", "glándulas salivales y páncreas", "almidón", "azúcares sencillos"], ["Pepsina", "estómago", "proteínas", "fragmentos de proteínas"], ["Tripsina", "páncreas", "proteínas", "fragmentos y aminoácidos"], ["Lipasa", "páncreas", "grasas", "ácidos grasos y glicerina"]])}`,
      video: { id: "qWeMLG9r0e0", titulo: "¿Qué son las Enzimas? [Fácil y Rápido] | BIOLOGÍA", canal: "A Cierta Ciencia", vistas: 516847 },
    },
    {
      html: `<h3>El intestino delgado: digestión final y absorción</h3><p>En la primera parte del intestino delgado, el <b>duodeno</b>, el quimo se mezcla con la bilis, el jugo pancreático y el jugo intestinal. Allí termina la digestión química: el resultado, un líquido lleno de nutrientes sencillos, se llama <b>quilo</b>. Después, en el resto del intestino, los nutrientes se <mark>absorben</mark>: atraviesan la pared y pasan a la sangre o a la linfa. La pared tiene pliegues cubiertos de millones de <b>vellosidades intestinales</b>, unos salientes con forma de dedo que multiplican la superficie de absorción.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Vellosidades intestinales con capilares sanguíneos por dentro, que recogen los nutrientes">${BG}
        <rect x="14" y="128" width="232" height="30" fill="var(--red)" fill-opacity=".25"/>
        ${[0, 1, 2, 3, 4].map((i) => { const x = 38 + i * 46; return `<path d="M${x - 16} 130 V 60 Q ${x - 16} 40 ${x} 40 Q ${x + 16} 40 ${x + 16} 60 V 130" fill="var(--red)" fill-opacity=".3" stroke="var(--red)" stroke-width="2"/><path d="M${x - 6} 128 V 60 Q ${x} 50 ${x + 6} 60 V 128" stroke="var(--pen)" stroke-width="2" fill="none"/>`; }).join("")}
        ${[[60, 24], [106, 28], [150, 20], [196, 30], [84, 34]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="var(--sun)" stroke="var(--ink)"/>`).join("")}
        ${t(130, 174, "vellosidades: más superficie para absorber", { size: 10, color: "var(--muted)" })}${t(232, 22, "nutrientes", { size: 10, anchor: "end", color: "#b8860b" })}</svg>`,
    },
    {
      html: `<h3>El intestino grueso y la microbiota</h3><p>Lo que no se ha absorbido llega al <b>intestino grueso</b>, formado por el ciego (con el apéndice), el colon y el recto. Allí se <mark>absorbe la mayor parte del agua</mark> y algunas sales, y los restos se compactan formando las <b>heces</b>, que se expulsan por el ano. En el intestino grueso viven billones de bacterias: la <b>microbiota intestinal</b>. No son dañinas, sino aliadas: fermentan la fibra, fabrican vitaminas como la K y nos protegen de microbios peligrosos. Los antibióticos mal usados y una dieta pobre en fibra la empobrecen.</p>`,
    },
    {
      html: `<h3>La salud del aparato digestivo</h3><p>Muchas enfermedades digestivas se previenen con hábitos sencillos. La <b>caries</b> la producen bacterias que fermentan los azúcares y atacan el esmalte: se evita cepillándose tras las comidas y tomando menos dulces. La <b>gastroenteritis</b> es una infección por alimentos o agua contaminados; la previenen lavarse las manos y conservar bien la comida. El <b>estreñimiento</b> mejora con fibra, agua y ejercicio. La <b>úlcera</b> de estómago se relaciona con una bacteria, <i>Helicobacter pylori</i>, y con algunos medicamentos. Comer despacio, sin prisas y a horas regulares ayuda a todo el aparato.</p>`,
    },
  ],
  figura: {
    titulo: "El recorrido del alimento",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Recorrido del alimento: boca, esófago, estómago, intestino delgado e intestino grueso, con lo que pasa en cada uno">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${tubo(1.05, 50, 22)}
      ${[["Boca", "masticación · saliva (amilasa) · bolo", 48], ["Esófago", "peristaltismo", 96], ["Estómago", "jugo gástrico (ácido y pepsina) · quimo", 144], ["Intestino delgado", "bilis y jugo pancreático · absorción", 196], ["Intestino grueso", "absorción de agua · heces", 248]].map(([n, d, y]) => `<rect x="250" y="${y - 22}" width="370" height="40" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${t(264, y - 2, n, { size: 14, anchor: "start", color: "var(--red)", font: D })}${t(264, y + 13, d, { size: 12, anchor: "start", weight: 400 })}`).join("")}
    </svg>`,
  },
  video: { id: "0KxRStoU0AE", titulo: "Cómo funciona su sistema digestivo - Emma Bryce", canal: "Sé Curioso — TED-Ed", vistas: 2125714, megusta: 0, busqueda: "cómo funciona el aparato digestivo" },
  ejemplos: [
    { enunciado: "Sigue el camino de un bocado de bocadillo de jamón: ¿dónde se empieza a digerir el pan (almidón) y dónde el jamón (proteínas)?",
      pasos: ["El pan tiene almidón: la amilasa salival empieza a digerirlo ya en la boca.", "El jamón tiene proteínas: la pepsina empieza a digerirlas en el estómago.", "Las dos digestiones terminan en el intestino delgado con las enzimas del páncreas y del intestino."],
      resultado: "almidón en la boca, proteínas en el estómago; todo termina en el intestino delgado." },
    { enunciado: "En un experimento se ponen tres tubos con clara de huevo (proteína) y pepsina: uno a 37 °C con ácido, otro a 37 °C sin ácido y otro a 5 °C con ácido. ¿En cuál se digiere mejor?",
      pasos: ["La pepsina actúa en el estómago, donde hay ácido.", "Las enzimas humanas funcionan mejor a la temperatura del cuerpo, unos 37 °C.", "El único tubo con las dos condiciones es el primero."],
      resultado: "en el tubo a 37 °C con ácido." },
    { enunciado: "A una persona le quitan la vesícula biliar. ¿Qué tipo de comidas le sentarán peor y por qué?",
      pasos: ["La vesícula guarda la bilis y la suelta de golpe cuando comemos.", "La bilis emulsiona las grasas.", "Sin vesícula, la bilis sale poco a poco y no hay bastante para una comida muy grasa."],
      resultado: "las comidas muy grasas, porque se digieren peor sin una buena cantidad de bilis." },
  ],
  errores: [
    "Pensar que la bilis es una enzima: emulsiona las grasas, pero no rompe moléculas.",
    "Creer que la digestión química empieza en el estómago: empieza en la boca con la amilasa.",
    "Decir que la mayoría de los nutrientes se absorben en el estómago: se absorben en el intestino delgado.",
    "Confundir quimo y quilo: el quimo sale del estómago y el quilo se forma en el intestino delgado.",
    "Olvidar que el hígado y el páncreas no forman parte del tubo: son glándulas anejas.",
  ],
  ejercicios: [
    { q: "Ordena los órganos del tubo digestivo desde la boca hasta el ano.", sol: "Boca, faringe, esófago, estómago, intestino delgado (duodeno, yeyuno, íleon), intestino grueso (ciego, colon, recto) y ano." },
    { q: "Diferencia digestión mecánica y química con un ejemplo de cada una.", sol: "Mecánica: masticar con los dientes o los movimientos del estómago (tritura y mezcla). Química: la pepsina rompe las proteínas (cambia las moléculas)." },
    { q: "¿Para qué sirve la epiglotis?", sol: "Tapa la entrada de la laringe y la tráquea al tragar, para que el alimento vaya al esófago y no a las vías respiratorias." },
    { q: "Explica qué es el peristaltismo.", sol: "Son ondas de contracción del músculo liso de la pared del tubo digestivo que empujan el alimento en un solo sentido." },
    { q: "¿Por qué el estómago no se digiere a sí mismo?", sol: "Porque su pared se protege con una capa de moco y porque la pepsina se fabrica inactiva y solo se activa con el ácido dentro del estómago." },
    { q: "Completa: la lipasa digiere ___ y se produce en ___.", sol: "Grasas (lípidos); en el páncreas." },
    { q: "¿Qué función tienen las vellosidades intestinales?", sol: "Aumentan muchísimo la superficie del intestino para absorber los nutrientes, que pasan a los capilares sanguíneos y linfáticos de su interior." },
    { q: "¿Qué se absorbe principalmente en el intestino grueso?", sol: "Agua y algunas sales minerales; también vitaminas fabricadas por la microbiota." },
    { q: "Cita dos funciones del hígado además de fabricar bilis.", sol: "Almacena glucosa en forma de glucógeno y elimina sustancias tóxicas, como el alcohol o restos de medicamentos." },
    { q: "Propón tres hábitos para cuidar el aparato digestivo.", sol: "Cepillarse los dientes tras las comidas, lavarse las manos antes de comer y comer fibra con suficiente agua. También: comer despacio y a horas regulares." },
  ],
  quiz: [
    { q: "El órgano que fabrica la bilis es…", o: ["el páncreas", "el hígado", "el estómago"], a: 1, e: "La fabrica el hígado y la guarda la vesícula." },
    { q: "La amilasa salival digiere…", o: ["proteínas", "almidón", "grasas"], a: 1, e: "Almidón." },
    { q: "El quimo se forma en…", o: ["la boca", "el estómago", "el colon"], a: 1, e: "En el estómago." },
    { q: "La pepsina actúa sobre…", o: ["las proteínas", "las grasas", "la fibra"], a: 0, e: "Las proteínas." },
    { q: "La mayor parte de los nutrientes se absorben en…", o: ["el estómago", "el intestino delgado", "el intestino grueso"], a: 1, e: "En el intestino delgado." },
    { q: "La epiglotis evita que el alimento vaya a…", o: ["el esófago", "la tráquea", "el estómago"], a: 1, e: "A la tráquea." },
    { q: "Las vellosidades intestinales sirven para…", o: ["triturar", "aumentar la superficie de absorción", "fabricar ácido"], a: 1, e: "Más superficie, más absorción." },
    { q: "En el intestino grueso se absorbe sobre todo…", o: ["agua", "proteínas", "almidón"], a: 0, e: "Agua y sales." },
    { q: "Los dientes que cortan son…", o: ["los molares", "los incisivos", "los caninos"], a: 1, e: "Los incisivos." },
    { q: "La microbiota intestinal…", o: ["siempre causa enfermedades", "nos ayuda", "vive en el estómago"], a: 1, e: "Fermenta fibra, fabrica vitaminas y nos protege." },
  ],
  examen: [
    { q: "¿Cuál NO es una glándula aneja?", o: ["El páncreas", "El hígado", "El esófago"], a: 2, e: "El esófago forma parte del tubo." },
    { q: "La bilis…", o: ["emulsiona las grasas", "digiere proteínas", "es ácida y mata bacterias"], a: 0, e: "Rompe las grasas en gotitas." },
    { q: "El píloro comunica…", o: ["boca y faringe", "estómago e intestino delgado", "colon y recto"], a: 1, e: "Es la válvula de salida del estómago." },
  ],
  feynman: ["Qué diferencia hay entre digestión mecánica y química", "Qué pasa con el alimento en cada órgano del tubo", "Cómo se absorben los nutrientes y para qué sirven las vellosidades"],
  mapa: mapa("APARATO DIGESTIVO", "var(--eso)", [
    ["Tubo digestivo", "boca · esófago · estómago · intestinos", "var(--red)"],
    ["Glándulas anejas", "salivales · hígado · páncreas", "#8a4a2b"],
    ["Digestión", "mecánica · química (enzimas)", "var(--pen)"],
    ["Absorción", "intestino delgado · vellosidades", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Digestión química", "Rotura de las moléculas grandes en pequeñas por las enzimas."],
    ["Bolo alimenticio", "Alimento masticado y mezclado con saliva."],
    ["Peristaltismo", "Ondas de contracción que empujan el alimento por el tubo."],
    ["Quimo", "Papilla ácida que sale del estómago."],
    ["Bilis", "La fabrica el hígado; emulsiona las grasas. No es una enzima."],
    ["Jugo pancreático", "Contiene amilasa, tripsina y lipasa."],
    ["Vellosidades intestinales", "Salientes del intestino delgado que aumentan la superficie de absorción."],
    ["Microbiota intestinal", "Bacterias beneficiosas que viven en el intestino grueso."],
  ],
  familias: ["Probad a masticar un trozo de pan durante un minuto y notad cómo se vuelve dulce: es la amilasa.", "Revisad juntos los hábitos de cepillado y de lavado de manos antes de comer.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Cuerpo humano: anatomía y fisiología del aparato digestivo, digestión mecánica y química, absorción y hábitos saludables (RD 217/2022, Biología y Geología 1º a 3º).",
    ideas: ["Práctica de la amilasa: almidón con saliva y prueba del lugol a distintos tiempos.", "Modelo del tubo digestivo a escala con cuerda (8 m) en el pasillo.", "Experimento de emulsión: aceite y agua con y sin jabón para entender la bilis."],
  },
  fuentes: [RD, wiki("Aparato digestivo", "Aparato_digestivo"), wiki("Enzima digestiva", "Enzima_digestiva")],
  revisado: "2026-11-12",
};
