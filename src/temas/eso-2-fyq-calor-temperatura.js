// Física y Química 2º ESO: el calor y la temperatura. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Física y Química",
  curso: C,
  titulo: "El calor y la temperatura",
  minutos: 55,
  objetivos: ["Diferenciar calor, temperatura y energía térmica con la teoría cinético-molecular", "Usar las escalas Celsius, Kelvin y Fahrenheit y el termómetro", "Explicar el equilibrio térmico y las tres formas de propagación del calor", "Describir los efectos del calor (dilatación y cambios de estado) y distinguir conductores y aislantes"],
  claves: ["temperatura", "calor", "energía térmica", "equilibrio térmico", "escala Celsius", "kelvin", "conducción", "convección", "radiación", "dilatación", "aislante"],
  pregunta: {
    texto: "Por la mañana tocas una barandilla de hierro y la madera del banco que hay al lado. El hierro parece mucho más frío. ¿Lo está de verdad?",
    respuesta: "No: los dos están a la <b>misma temperatura</b>, la del aire. Lo que pasa es que el hierro es un buen <mark>conductor del calor</mark> y se lleva rápidamente el calor de tu mano, que está más caliente. La madera es un <mark>aislante</mark> y apenas te quita calor. Tu piel no mide temperaturas: nota lo rápido que pierde o gana calor.",
  },
  bloques: [
    {
      html: `<h3>La temperatura</h3><p>En el lenguaje de todos los días decimos que algo está «caliente» o «frío», pero en ciencia hay que precisar. Según la teoría cinético-molecular, las partículas de la materia están siempre en movimiento. La <mark>temperatura</mark> es una magnitud que mide la <b>energía cinética media</b> de esas partículas, es decir, lo rápido que se mueven por término medio. Cuanto más deprisa se mueven, mayor es la temperatura. En un vaso de agua caliente las moléculas se agitan más que en uno de agua fría. La temperatura no depende de la cantidad de sustancia: una taza de té y una olla llena del mismo té recién hecho pueden estar a la misma temperatura, aunque la olla tenga mucha más energía térmica. La temperatura se mide con el <b>termómetro</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Partículas de agua fría moviéndose despacio con flechas cortas y de agua caliente moviéndose deprisa con flechas largas">${BG}
        ${[[20, "fría", "var(--pen)", 8], [140, "caliente", "var(--red)", 20]].map(([x, s, c, L]) => `<rect x="${x}" y="24" width="100" height="110" rx="8" fill="${c}" fill-opacity=".1" stroke="${c}" stroke-width="2"/>${[[20, 30, 0.5], [60, 40, 2.2], [36, 70, 4], [76, 84, 1], [24, 100, 3], [64, 60, 5.5]].map(([a, b, ang]) => `<circle cx="${x + a}" cy="${24 + b}" r="6" fill="${c}"/>${fl(x + a + 7 * Math.cos(ang), 24 + b + 7 * Math.sin(ang), x + a + (7 + L) * Math.cos(ang), 24 + b + (7 + L) * Math.sin(ang), "var(--ink)", 1.5)}`).join("")}${t(x + 50, 156, s, { size: 12, color: c })}`).join("")}
        ${t(130, 174, "más temperatura = partículas más rápidas", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Escalas de temperatura</h3><p>Para medir la temperatura se usan varias <mark>escalas</mark>. La <b>escala Celsius</b> (°C), creada por Anders Celsius en 1742, toma como referencia el punto de fusión del agua (0 °C) y su punto de ebullición a nivel del mar (100 °C), y divide ese intervalo en cien partes. Es la que usamos en España. La <b>escala Kelvin</b> (K) es la del Sistema Internacional. Empieza en el <mark>cero absoluto</mark> (0 K = −273 °C), la temperatura más baja posible, en la que las partículas casi no se moverían. No tiene valores negativos y sus grados son del mismo tamaño que los Celsius: <b>T(K) = T(°C) + 273</b>. La <b>escala Fahrenheit</b> (°F) se usa en Estados Unidos: el agua se congela a 32 °F y hierve a 212 °F. Se convierte con <b>T(°F) = 1,8 · T(°C) + 32</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres termómetros comparan escalas: el agua se congela a 0 grados Celsius, 273 kelvin y 32 grados Fahrenheit, y hierve a 100 Celsius, 373 kelvin y 212 Fahrenheit">${BG}
        ${[[50, "°C", "0", "100", "37"], [130, "K", "273", "373", "310"], [210, "°F", "32", "212", "98,6"]].map(([x, u, a, b, c]) => `<rect x="${x - 7}" y="20" width="14" height="120" rx="7" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="${x}" cy="146" r="12" fill="var(--red)"/><rect x="${x - 3}" y="60" width="6" height="86" fill="var(--red)"/>${t(x, 172, u, { size: 13 })}
          ${t(x + 12, 124, a, { size: 10, anchor: "start" })}${t(x + 12, 40, b, { size: 10, anchor: "start" })}${t(x + 12, 104, c, { size: 9, anchor: "start", color: "var(--muted)" })}`).join("")}
        <line x1="20" y1="120" x2="246" y2="120" stroke="var(--pen)" stroke-dasharray="3 3"/><line x1="20" y1="36" x2="246" y2="36" stroke="var(--red)" stroke-dasharray="3 3"/></svg>`,
    },
    {
      html: `<h3>El termómetro</h3><p>El <mark>termómetro</mark> aprovecha que muchas propiedades de la materia cambian con la temperatura. El termómetro clásico de líquido tiene un depósito y un tubo muy fino con alcohol coloreado (antes, mercurio): al calentarse, el líquido se <b>dilata</b> y sube por el tubo, que tiene una escala graduada. Los termómetros digitales usan sensores electrónicos cuya resistencia eléctrica cambia con la temperatura. Los de infrarrojos, como los que miden la fiebre en la frente sin tocar, captan la radiación térmica que emiten los cuerpos. Para medir bien hay que esperar a que el termómetro alcance la misma temperatura que el cuerpo. Los termómetros de mercurio se prohibieron en Europa en 2009 porque el mercurio es tóxico si se rompen.</p>`,
    },
    {
      html: `<h3>El calor</h3><p>Si pones una lata de refresco fría en la mesa, poco a poco se calienta, y el aire de alrededor se enfría un poquito. Ha pasado energía del aire a la lata. El <mark>calor</mark> es la <b>energía que se transfiere de un cuerpo a otro cuando están a distinta temperatura</b>. Siempre pasa del cuerpo <b>más caliente al más frío</b>, nunca al revés de forma espontánea. Como es energía, se mide en <b>julios</b>, aunque también se usa la <b>caloría</b> (cal), que es el calor necesario para subir 1 °C la temperatura de 1 g de agua; 1 cal = 4,18 J. Un error muy común es decir que un cuerpo «tiene calor»: los cuerpos tienen <b>energía térmica</b>, que es la energía total de sus partículas; el calor es solo la energía que pasa de uno a otro. Tampoco existe «el frío» como algo que entra: lo que ocurre es que sale calor.</p>`,
      video: { id: "8R8fgvd6nTA", titulo: "La diferencia entre calor y temperatura", canal: "FlexFlix Kids en Español", vistas: 1563903 },
    },
    {
      html: `<h3>El equilibrio térmico</h3><p>Cuando dos cuerpos a distinta temperatura se ponen en contacto, el más caliente cede calor al más frío. El caliente se enfría y el frío se calienta, hasta que los dos alcanzan la <b>misma temperatura</b>. En ese momento deja de pasar calor y decimos que han llegado al <mark>equilibrio térmico</mark>. Así se enfría una sopa en el plato, se templa el agua de la bañera al mezclar agua fría y caliente, o funciona el termómetro, que se pone a la temperatura del cuerpo con el que está en contacto. La temperatura final depende de las masas y de las temperaturas iniciales: si mezclas la misma cantidad de agua a 20 °C y a 60 °C, el resultado estará a 40 °C. Si hay mucha más agua fría, la temperatura final estará más cerca de la fría.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Equilibrio térmico: un cuerpo a 80 grados y otro a 20 en contacto; el calor pasa del caliente al frío hasta que los dos quedan a 50 grados">${BG}
        <rect x="20" y="30" width="60" height="50" rx="6" fill="var(--red)" fill-opacity=".7"/><rect x="80" y="30" width="60" height="50" rx="6" fill="var(--pen)" fill-opacity=".6"/>${t(50, 62, "80 °C", { size: 12, color: "#fff" })}${t(110, 62, "20 °C", { size: 12, color: "#fff" })}
        ${fl(60, 96, 104, 96, "var(--red)", 3)}${t(82, 116, "calor", { size: 11, color: "var(--red)" })}
        ${fl(150, 56, 170, 56, "var(--muted)", 2)}
        <rect x="176" y="30" width="36" height="50" rx="6" fill="#9a66e0" fill-opacity=".6"/><rect x="212" y="30" width="36" height="50" rx="6" fill="#9a66e0" fill-opacity=".6"/>${t(212, 62, "50 °C", { size: 12, color: "#fff" })}
        ${t(212, 108, "equilibrio", { size: 11, color: "#7b3fc4" })}${t(130, 160, "el calor va siempre del caliente al frío", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Cómo se propaga el calor</h3><p>El calor se transmite de tres formas. En la <mark>conducción</mark>, el calor pasa a través de un material, de partícula en partícula, sin que la materia se desplace: si calientas el extremo de una cuchara metálica, al rato quema el otro extremo. Es típica de los sólidos. En la <mark>convección</mark>, el calor se transporta con el <b>movimiento de un fluido</b> (líquido o gas): el aire o el agua calientes, menos densos, suben, y los fríos bajan, formando <b>corrientes de convección</b>. Así se calienta el agua de una olla o una habitación con un radiador, y así se forman los vientos. En la <mark>radiación</mark>, el calor viaja en forma de <b>ondas electromagnéticas</b>, sin necesidad de materia, incluso a través del vacío: así nos llega el calor del Sol o el de una hoguera cuando estamos cerca.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres formas de propagación del calor: conducción por una cuchara metálica, convección con corrientes de agua en una olla y radiación desde el sol">${BG}
        <path d="M14 70 L 70 40" stroke="var(--muted)" stroke-width="6" stroke-linecap="round"/><path d="M14 92 q 8 -14 0 -22 q 14 8 8 22 Z" fill="#f08a24"/>${fl(22, 58, 56, 38, "var(--red)", 2)}${t(42, 120, "conducción", { size: 10 })}
        <path d="M100 50 h 60 v 60 h -60 Z" fill="var(--pen)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2"/><path d="M116 102 v -40 M144 62 v 40" stroke="var(--red)" stroke-width="2"/>${fl(116, 70, 116, 56, "var(--red)", 2)}${fl(144, 94, 144, 106, "var(--pen)", 2)}<path d="M116 58 q 14 -6 28 0 M144 106 q -14 6 -28 0" stroke="var(--muted)" fill="none" stroke-width="1.5"/>
        <path d="M112 128 q 6 -10 0 -14 q 10 6 6 14 M140 128 q 6 -10 0 -14 q 10 6 6 14" fill="#f08a24"/>${t(130, 150, "convección", { size: 10 })}
        <circle cx="216" cy="44" r="14" fill="#ffd34d"/>${[0, 1, 2].map((i) => `<path d="M${200 - i * 6} ${66 + i * 14} q 6 -6 12 0 t 12 0 t 12 0" stroke="#e6a100" stroke-width="2" fill="none"/>`).join("")}${t(214, 130, "radiación", { size: 10 })}
        ${t(130, 172, "sólidos · fluidos · vacío", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "2Gvy8so9VCM", titulo: "Conducción, convección y radiación [Fácil y Rápido]", canal: "A Cierta Ciencia", vistas: 494457 },
    },
    {
      html: `<h3>Conductores y aislantes térmicos</h3><p>No todos los materiales transmiten el calor igual. Los <mark>conductores térmicos</mark> lo transmiten con facilidad: son los <b>metales</b>, como el cobre, el aluminio o el hierro. Por eso las ollas y sartenes son de metal. Los <mark>aislantes térmicos</mark> lo transmiten muy mal: la madera, el plástico, el corcho, la lana, el vidrio, el poliestireno (el «corcho blanco») y, sobre todo, el <b>aire quieto</b>. Por eso los mangos de las sartenes son de madera o plástico, los abrigos de plumas y la lana abrigan (atrapan aire), y las ventanas de doble cristal llevan una cámara de aire. Un termo mantiene el café caliente porque tiene doble pared con vacío en medio (sin conducción ni convección) y superficies plateadas (que reflejan la radiación). Aislar bien las casas ahorra mucha energía en calefacción y aire acondicionado.</p>`,
    },
    {
      html: `<h3>Los efectos del calor: la dilatación</h3><p>Cuando un cuerpo recibe calor, su temperatura sube y sus partículas se mueven más y se separan un poco: el cuerpo aumenta de tamaño. Es la <mark>dilatación</mark>. Al enfriarse, ocurre lo contrario: se <b>contrae</b>. Los gases se dilatan mucho, los líquidos menos y los sólidos muy poco, aunque lo suficiente para tenerlo en cuenta. Por eso los puentes y las vías del tren tienen <b>juntas de dilatación</b>, pequeños huecos que dejan espacio para que el metal se alargue en verano sin deformarse; los cables eléctricos cuelgan más en verano que en invierno; y un tarro con la tapa metálica atascada se abre más fácilmente si se pone la tapa bajo el agua caliente. El agua es una excepción: entre 0 °C y 4 °C se contrae al calentarse, y al congelarse se dilata, por eso una botella llena de agua puede romperse en el congelador.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Junta de dilatación en un puente: en invierno el hueco es ancho y en verano el metal se dilata y el hueco casi se cierra">${BG}
        ${[[40, "invierno", 18, "var(--pen)"], [110, "verano", 4, "var(--red)"]].map(([y, s, g, c]) => `<rect x="20" y="${y}" width="${110 - g / 2}" height="20" fill="${c}" fill-opacity=".5" stroke="${c}"/><rect x="${130 + g / 2}" y="${y}" width="${110 - g / 2}" height="20" fill="${c}" fill-opacity=".5" stroke="${c}"/>${t(130, y - 6, s, { size: 11, color: c })}${t(130, y + 36, `hueco: ${g === 18 ? "ancho" : "casi cerrado"}`, { size: 10, color: "var(--muted)" })}`).join("")}
        ${fl(50, 100, 70, 100, "var(--red)", 1.5)}${fl(210, 100, 190, 100, "var(--red)", 1.5)}</svg>`,
    },
    {
      html: `<h3>Calor y cambios de estado</h3><p>El calor no siempre sube la temperatura. Cuando una sustancia está cambiando de estado, todo el calor que recibe se usa para <b>separar sus partículas</b>, y la temperatura <b>se mantiene constante</b> hasta que el cambio termina. Por eso un cubito de hielo en un vaso se mantiene a 0 °C mientras se derrite, y el agua de una olla no pasa de 100 °C mientras hierve, aunque subamos el fuego. Este calor «escondido» explica fenómenos cotidianos. El <b>sudor</b> nos refresca porque, para evaporarse, toma calor de la piel. Los botijos enfrían el agua porque una parte se filtra por el barro y se evapora. Y una quemadura con vapor de agua a 100 °C es más grave que con agua a 100 °C, porque el vapor, al condensarse sobre la piel, cede además todo el calor que había absorbido al evaporarse.</p>`,
    },
  ],
  figura: {
    titulo: "Calor no es temperatura",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Temperatura: mide la agitación de las partículas, en grados o kelvin, con el termómetro. Calor: energía que pasa del cuerpo caliente al frío, en julios, por conducción, convección o radiación">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      <rect x="24" y="24" width="282" height="182" rx="14" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>${t(165, 58, "Temperatura", { size: 18, color: "var(--pen)", font: D })}${t(165, 96, "agitación de las partículas", { size: 13, weight: 400 })}${t(165, 126, "°C · K · °F", { size: 14 })}${t(165, 156, "se mide con el termómetro", { size: 12, color: "var(--muted)" })}
      <rect x="334" y="24" width="282" height="182" rx="14" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>${t(475, 58, "Calor", { size: 18, color: "var(--red)", font: D })}${t(475, 96, "energía que pasa de caliente a frío", { size: 13, weight: 400 })}${t(475, 126, "julios · calorías", { size: 14 })}${t(475, 156, "conducción · convección · radiación", { size: 12, color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "St8tvRdvghk", titulo: "Calor y temperatura: explicación", canal: "Profesor Particular Puebla", vistas: 889338, megusta: 11070, busqueda: "diferencia entre calor y temperatura" },
  ejemplos: [
    { enunciado: "Pasa 25 °C a kelvin y a grados Fahrenheit.",
      pasos: ["T(K) = 25 + 273 = 298 K.", "T(°F) = 1,8 · 25 + 32.", "T(°F) = 45 + 32 = 77 °F."],
      resultado: "298 K y 77 °F." },
    { enunciado: "¿Cuánto calor hace falta para subir 30 °C la temperatura de 200 g de agua? (1 cal sube 1 °C un gramo de agua)",
      pasos: ["Calor = masa · aumento de temperatura · 1 cal/(g·°C).", "Q = 200 · 30 = 6000 cal.", "En julios: 6000 · 4,18 = 25 080 J."],
      resultado: "6000 cal ≈ 25 kJ." },
    { enunciado: "Mezclas 1 L de agua a 80 °C con 1 L de agua a 20 °C. ¿A qué temperatura quedará?",
      pasos: ["Las dos cantidades son iguales.", "El calor que cede la caliente lo gana la fría.", "La temperatura final es la media: (80 + 20) / 2 = 50 °C."],
      resultado: "50 °C." },
  ],
  errores: [
    "Decir que un cuerpo «tiene calor»: tiene energía térmica; el calor es energía en tránsito.",
    "Pensar que el frío «entra»: lo que ocurre es que sale calor.",
    "Creer que un metal está más frío que la madera a la misma temperatura: solo conduce mejor el calor.",
    "Escribir «°K»: los kelvin no llevan el símbolo de grado.",
    "Pensar que la temperatura sube mientras el agua hierve: se mantiene constante.",
  ],
  ejercicios: [
    { q: "Explica con la teoría cinético-molecular qué es la temperatura.", sol: "Es una medida de la energía cinética media de las partículas: cuanto más rápido se mueven, mayor es la temperatura." },
    { q: "Pasa a kelvin: 0 °C, 100 °C y −40 °C.", sol: "273 K, 373 K y 233 K." },
    { q: "Pasa a grados Celsius: 300 K y 0 K.", sol: "27 °C y −273 °C." },
    { q: "La temperatura normal del cuerpo es 37 °C. ¿Cuánto es en °F?", sol: "1,8 · 37 + 32 = 98,6 °F." },
    { q: "¿Qué diferencia hay entre calor y temperatura?", sol: "La temperatura mide la agitación de las partículas; el calor es la energía que pasa de un cuerpo a otro por estar a distinta temperatura." },
    { q: "Indica la forma de propagación del calor: a) calentarse al sol; b) una cuchara que se calienta en la sopa; c) el aire caliente que sube desde el radiador.", sol: "a) Radiación; b) conducción; c) convección." },
    { q: "¿Por qué los mangos de las sartenes son de madera o de plástico?", sol: "Porque son aislantes térmicos y no transmiten el calor a la mano." },
    { q: "¿Por qué los raíles del tren tienen pequeños huecos entre tramos?", sol: "Son juntas de dilatación: dejan espacio para que el metal se dilate con el calor sin deformarse." },
    { q: "¿Por qué una botella llena de agua puede romperse en el congelador?", sol: "Porque el agua, al congelarse, se dilata y ocupa más volumen." },
    { q: "Explica por qué nos refresca sudar.", sol: "Porque el sudor, para evaporarse, absorbe calor de la piel, que se enfría." },
  ],
  quiz: [
    { q: "La temperatura mide…", o: ["la cantidad de calor", "la agitación media de las partículas", "la masa"], a: 1, e: "La agitación de las partículas." },
    { q: "La unidad de temperatura en el SI es el…", o: ["grado Celsius", "kelvin", "julio"], a: 1, e: "El kelvin." },
    { q: "0 K equivalen a…", o: ["0 °C", "−273 °C", "273 °C"], a: 1, e: "El cero absoluto." },
    { q: "El agua hierve a 212…", o: ["°C", "K", "°F"], a: 2, e: "En Fahrenheit." },
    { q: "El calor pasa siempre…", o: ["del frío al caliente", "del caliente al frío", "en los dos sentidos"], a: 1, e: "Del caliente al frío." },
    { q: "Cuando dos cuerpos llegan a la misma temperatura están en…", o: ["equilibrio térmico", "ebullición", "dilatación"], a: 0, e: "Equilibrio térmico." },
    { q: "El calor del Sol nos llega por…", o: ["conducción", "convección", "radiación"], a: 2, e: "Radiación, a través del vacío." },
    { q: "Un buen conductor térmico es…", o: ["el corcho", "el cobre", "la lana"], a: 1, e: "El cobre." },
    { q: "Al calentarse, la mayoría de los cuerpos…", o: ["se contraen", "se dilatan", "no cambian"], a: 1, e: "Se dilatan." },
    { q: "Mientras el hielo se funde, su temperatura…", o: ["sube", "baja", "se mantiene"], a: 2, e: "Se mantiene a 0 °C." },
  ],
  examen: [
    { q: "1 caloría equivale a…", o: ["1 J", "4,18 J", "1000 J"], a: 1, e: "4,18 J." },
    { q: "Las corrientes de aire caliente que suben son un ejemplo de…", o: ["conducción", "convección", "radiación"], a: 1, e: "Convección." },
    { q: "Un termo tiene doble pared con vacío para evitar…", o: ["la conducción y la convección", "la dilatación", "la evaporación"], a: 0, e: "Sin materia no hay conducción ni convección." },
  ],
  feynman: ["Qué diferencia hay entre calor y temperatura", "Cómo se propaga el calor de tres formas distintas", "Por qué se dilatan los cuerpos al calentarse"],
  mapa: mapa("CALOR", "var(--eso)", [
    ["Temperatura", "°C · K · °F · termómetro", "var(--pen)"],
    ["Calor", "energía en tránsito · equilibrio", "var(--red)"],
    ["Propagación", "conducción · convección · radiación", "#b8860b"],
    ["Efectos", "dilatación · cambios de estado", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Temperatura", "Mide la energía cinética media de las partículas."],
    ["Calor", "Energía que pasa de un cuerpo caliente a uno frío."],
    ["Kelvin", "T(K) = T(°C) + 273; empieza en el cero absoluto."],
    ["Equilibrio térmico", "Estado en que dos cuerpos en contacto tienen la misma temperatura."],
    ["Conducción", "Propagación del calor a través de un material, sin moverse la materia."],
    ["Convección", "Propagación del calor con corrientes de un fluido."],
    ["Radiación", "Propagación del calor por ondas, incluso en el vacío."],
    ["Dilatación", "Aumento de tamaño de un cuerpo al calentarse."],
  ],
  familias: ["Tocad a la vez una cuchara metálica y una de madera que lleven horas en la mesa y comentad por qué parecen distintas.", "Poned un globo en la boca de una botella vacía y meted la botella en agua caliente.", "Mirad la previsión del tiempo y pasad algunas temperaturas a kelvin y a Fahrenheit."],
  profesores: {
    saberes: "La energía: calor y temperatura, escalas termométricas, equilibrio térmico, propagación del calor, conductores y aislantes, dilatación y cambios de estado (RD 217/2022, Física y Química, bloque «La energía»).",
    ideas: ["Práctica de equilibrio térmico mezclando agua a distintas temperaturas y comparando con la predicción.", "Construcción de un termómetro casero con una botella, agua coloreada y una pajita.", "Reto de ingeniería: diseñar una caja aislante que mantenga más tiempo un cubito sin fundir."],
  },
  fuentes: [RD, wiki("Temperatura", "Temperatura"), wiki("Calor", "Calor")],
  revisado: REV,
};
