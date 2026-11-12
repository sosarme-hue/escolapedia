// Física y Química 2º ESO: sustancias puras y mezclas. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Física y Química",
  curso: C,
  titulo: "Sustancias puras y mezclas",
  minutos: 55,
  objetivos: ["Clasificar la materia en sustancias puras (elementos y compuestos) y mezclas", "Distinguir mezclas heterogéneas, homogéneas y coloides", "Calcular la concentración de una disolución en g/L y en porcentaje", "Elegir el método adecuado para separar los componentes de una mezcla"],
  claves: ["sustancia pura", "elemento", "compuesto", "mezcla heterogénea", "disolución", "soluto", "disolvente", "concentración", "filtración", "destilación"],
  pregunta: {
    texto: "En la etiqueta de una botella pone «agua mineral natural». ¿Es agua pura? ¿Y la del mar?",
    respuesta: "No. El agua mineral es una <mark>mezcla</mark>: agua con pequeñas cantidades de sales disueltas (calcio, magnesio, sodio…), que vienen en la etiqueta. El agua del mar también es una mezcla, con mucha más sal. El agua <b>pura</b> o destilada solo contiene moléculas de agua y en el laboratorio se obtiene por <b>destilación</b>.",
  },
  bloques: [
    {
      html: `<h3>Cómo se clasifica la materia</h3><p>Toda la materia se puede clasificar en dos grandes grupos. Las <mark>sustancias puras</mark> están formadas por un único componente y tienen propiedades específicas fijas: el agua destilada, el oxígeno, el oro o la sal común. Las <mark>mezclas</mark> están formadas por <b>dos o más sustancias puras</b> que no se transforman al juntarse: cada una conserva sus propiedades y su proporción puede variar. Son mezclas el aire, la leche, el granito, la ensalada o un refresco. Para saber si un material es una sustancia pura, se miden sus puntos de fusión y ebullición: en una sustancia pura son fijos y en la gráfica de calentamiento aparecen tramos horizontales; en una mezcla, la temperatura sigue cambiando durante el cambio de estado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de clasificación de la materia: sustancias puras, que pueden ser elementos o compuestos, y mezclas, que pueden ser heterogéneas u homogéneas">${BG}
        ${caja(90, 10, 80, 26, "MATERIA", "var(--eso)", { size: 11 })}
        ${caja(14, 62, 110, 26, "sustancias puras", "var(--pen)", { size: 11 })}${caja(136, 62, 110, 26, "mezclas", "var(--red)", { size: 11 })}
        ${fl(116, 36, 76, 60)}${fl(144, 36, 184, 60)}
        ${caja(6, 126, 56, 26, "elementos", "var(--pen)", { size: 9 })}${caja(64, 126, 62, 26, "compuestos", "var(--pen)", { size: 9 })}${caja(130, 126, 64, 26, "heterogéneas", "var(--red)", { size: 9 })}${caja(196, 126, 60, 26, "homogéneas", "var(--red)", { size: 9 })}
        ${fl(56, 88, 36, 124)}${fl(84, 88, 95, 124)}${fl(176, 88, 162, 124)}${fl(206, 88, 226, 124)}</svg>`,
    },
    {
      html: `<h3>Elementos y compuestos</h3><p>Las sustancias puras pueden ser de dos tipos. Los <mark>elementos</mark> están formados por un solo tipo de átomo y <b>no se pueden descomponer</b> en otras sustancias más sencillas: el hierro (Fe), el oxígeno (O), el carbono (C) o el oro (Au). Hoy se conocen 118 elementos, ordenados en la tabla periódica. Los <mark>compuestos</mark> están formados por <b>dos o más elementos unidos químicamente</b> en una proporción fija, y sí se pueden descomponer mediante reacciones químicas. El agua (H₂O) siempre tiene dos átomos de hidrógeno por cada uno de oxígeno. La sal común (NaCl) tiene sodio y cloro. Las propiedades de un compuesto son muy diferentes de las de sus elementos: el sodio es un metal que arde en el agua y el cloro, un gas venenoso, pero juntos forman la sal que echamos a la comida.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Modelos de partículas: un elemento con átomos iguales, un compuesto con moléculas iguales de dos tipos de átomos y una mezcla con partículas distintas sin unir">${BG}
        ${[[10, "elemento"], [94, "compuesto"], [178, "mezcla"]].map(([x, s]) => `<rect x="${x}" y="20" width="72" height="110" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>${t(x + 36, 150, s, { size: 11 })}`).join("")}
        ${[[24, 40], [50, 46], [34, 70], [62, 74], [24, 100], [52, 108]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="#b8860b"/>`).join("")}
        ${[[108, 40], [140, 50], [112, 82], [146, 92], [120, 114]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="var(--red)"/><circle cx="${x + 12}" cy="${y - 6}" r="6" fill="var(--card)" stroke="var(--ink)"/><circle cx="${x + 12}" cy="${y + 6}" r="6" fill="var(--card)" stroke="var(--ink)"/>`).join("")}
        ${[[192, 40, "#b8860b"], [222, 52, "var(--pen)"], [200, 80, "var(--pen)"], [234, 96, "#b8860b"], [196, 112, "var(--leaf)"], [228, 120, "var(--pen)"]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="8" fill="${c}"/>`).join("")}
        ${t(130, 172, "átomos iguales · unidos · sin unir", { size: 9, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Mezclas heterogéneas y homogéneas</h3><p>En una <mark>mezcla heterogénea</mark> se distinguen sus componentes a simple vista o con una lupa, y la composición no es igual en todos los puntos: el granito (con cuarzo, feldespato y mica), una ensalada, el agua con arena o el aceite con vinagre. En una <mark>mezcla homogénea</mark>, también llamada <b>disolución</b>, no se distinguen los componentes ni con el microscopio y la composición es igual en toda la mezcla: el agua con azúcar, el aire o el bronce. Entre unas y otras están los <mark>coloides</mark>, que parecen homogéneos a simple vista pero no lo son al microscopio: la leche, la niebla, la mayonesa, la gelatina o la sangre. Un truco para reconocerlos es el <b>efecto Tyndall</b>: un rayo de luz se ve al atravesar un coloide, pero no al atravesar una disolución.</p>`,
      video: { id: "tpYlt7TeqZA", titulo: "Sustancias puras y mezclas", canal: "Smile and Learn", vistas: 1367887 },
    },
    {
      html: `<h3>Las disoluciones</h3><p>Una <mark>disolución</mark> tiene al menos dos componentes. El <mark>disolvente</mark> es el que está en mayor cantidad, y el <mark>soluto</mark> o solutos, los que están en menor cantidad. En el agua azucarada, el agua es el disolvente y el azúcar el soluto. El agua se llama «disolvente universal» porque disuelve muchísimas sustancias. Las disoluciones pueden estar en cualquier estado: <b>líquidas</b> (sal en agua, alcohol en agua, dióxido de carbono en un refresco), <b>gaseosas</b> (el aire, con un 78 % de nitrógeno y un 21 % de oxígeno) o <b>sólidas</b>, como las <b>aleaciones</b> de metales: el bronce (cobre y estaño), el latón (cobre y cinc) o el acero (hierro y un poco de carbono). Las aleaciones tienen propiedades mejores que los metales por separado: el acero es más duro y resistente que el hierro.</p>`,
    },
    {
      html: `<h3>La concentración</h3><p>No es lo mismo un café con una cucharada de azúcar que con tres. La <mark>concentración</mark> indica la cantidad de soluto que hay en una cantidad de disolución. Se puede expresar de varias formas. En <b>gramos por litro</b>: concentración = masa de soluto (g) / volumen de disolución (L). Si disolvemos 20 g de sal hasta tener 0,5 L de disolución, la concentración es 40 g/L. En <b>porcentaje en masa</b>: % = (masa de soluto / masa de disolución) · 100, y la masa de la disolución es la del soluto más la del disolvente. En <b>porcentaje en volumen</b>, muy usado en las bebidas: un vino de 12 % vol. tiene 12 mL de alcohol en cada 100 mL. Una disolución es <b>diluida</b> si tiene poco soluto, <b>concentrada</b> si tiene mucho y <b>saturada</b> si ya no admite más.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres vasos con la misma cantidad de agua y cada vez más soluto: diluida, concentrada y saturada, con sólido sin disolver en el fondo">${BG}
        ${[[20, 0.15, 3, "diluida"], [100, 0.4, 9, "concentrada"], [180, 0.65, 14, "saturada"]].map(([x, op, n, s], i) => `<path d="M${x} 40 h 60 l -6 100 h -48 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M${x + 2} 60 h 56 l -5 78 h -46 Z" fill="var(--red)" fill-opacity="${op}"/>${Array.from({ length: n }, (_, k) => `<circle cx="${x + 12 + (k * 17) % 37}" cy="${68 + ((k * 29 + 11) % 61)}" r="2.5" fill="var(--ink)"/>`).join("")}${i === 2 ? `<path d="M${x + 8} 138 q 22 -10 44 0 Z" fill="var(--ink)" fill-opacity=".6"/>` : ""}${t(x + 30, 162, s, { size: 11 })}`).join("")}
        ${t(130, 24, "misma agua, más soluto →", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La solubilidad</h3><p>La <mark>solubilidad</mark> es la <b>máxima cantidad de soluto</b> que se puede disolver en una cantidad de disolvente (normalmente 100 g de agua) a una temperatura determinada. Cuando se alcanza, la disolución está <b>saturada</b>, y si echamos más soluto, se queda en el fondo sin disolver. La solubilidad depende de la <b>temperatura</b>. En la mayoría de los sólidos, aumenta al calentar: en agua caliente se disuelve mucho más azúcar que en agua fría. En los gases ocurre lo contrario: se disuelven peor en agua caliente. Por eso un refresco caliente pierde el gas enseguida y los peces de los ríos sufren en verano, cuando el agua caliente tiene menos oxígeno disuelto. Las <b>curvas de solubilidad</b> muestran cómo cambia la solubilidad de cada sustancia con la temperatura.</p>${tabla(["Sustancia", "Solubilidad a 20 °C (g/100 g de agua)", "a 80 °C"], [["Sal común", "36", "38"], ["Azúcar", "204", "362"], ["Nitrato de potasio", "32", "169"]])}`,
    },
    {
      html: `<h3>Separar mezclas heterogéneas</h3><p>Como los componentes de una mezcla conservan sus propiedades, podemos aprovecharlas para separarlos con <b>métodos físicos</b>. La <mark>filtración</mark> separa un sólido no disuelto de un líquido haciéndolo pasar por un filtro de papel: el sólido queda retenido y el líquido pasa (agua con arena). La <mark>decantación</mark> separa líquidos que no se mezclan, como agua y aceite, con un <b>embudo de decantación</b>: se deja reposar, el más denso queda abajo y se abre la llave para sacarlo. La <b>separación magnética</b> usa un imán para retirar el hierro de una mezcla (limaduras de hierro y arena). La <b>tamización</b> separa sólidos de distinto tamaño con un tamiz o colador, como la grava de la arena. La <b>centrifugación</b> hace girar la mezcla a gran velocidad para separar sólidos muy finos, como los componentes de la sangre.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Filtración: un embudo con papel de filtro retiene la arena y el agua limpia cae al vaso. Decantación: un embudo de decantación con aceite arriba y agua abajo">${BG}
        <path d="M30 30 h 70 l -28 44 v 26 h -14 v -26 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M38 34 h 54 l -24 36 Z" fill="#fff" stroke="var(--muted)"/><path d="M48 40 h 34 l -10 14 h -14 Z" fill="#c9a37a"/>
        <path d="M65 104 v 18" stroke="var(--pen)" stroke-width="2" stroke-dasharray="3 3"/><path d="M40 126 h 50 l -4 34 h -42 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M42 140 h 46 l -3 18 h -40 Z" fill="var(--pen)" fill-opacity=".35"/>${t(65, 174, "filtración", { size: 11 })}
        <path d="M190 18 q 40 30 22 92 h -44 q -18 -62 22 -92 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M175 66 q 15 -4 30 0 l 6 30 h -42 Z" fill="var(--pen)" fill-opacity=".35"/><path d="M166 50 q 24 -6 48 0 l -3 16 h -42 Z" fill="#e6c84a" fill-opacity=".7"/>
        <path d="M184 110 v 20 h 12 v -20 M184 130 l 6 12 l 6 -12" stroke="var(--ink)" stroke-width="2" fill="none"/><rect x="180" y="116" width="20" height="6" fill="var(--red)"/>${t(222, 60, "aceite", { size: 10, anchor: "start" })}${t(224, 92, "agua", { size: 10, anchor: "start" })}${t(190, 174, "decantación", { size: 11 })}</svg>`,
      video: { id: "UQO88zoMC9Q", titulo: "Métodos de separación de mezclas con ejemplos [Fácil y Rápido]", canal: "A Cierta Ciencia", vistas: 1717625 },
    },
    {
      html: `<h3>Separar mezclas homogéneas</h3><p>En las disoluciones los componentes no se ven, así que hacen falta otros métodos. La <mark>evaporación</mark> y la <b>cristalización</b> separan un sólido disuelto de un líquido: se calienta la disolución, o se deja al aire, y el disolvente se evapora mientras el soluto queda en forma de <b>cristales</b>. Así se obtiene la sal en las <b>salinas</b>, dejando que el sol evapore el agua del mar. La <mark>destilación</mark> separa líquidos que tienen distintos puntos de ebullición, o recupera el disolvente: se calienta la mezcla, el componente más volátil se evapora primero, pasa por un tubo refrigerante donde se condensa y se recoge en otro recipiente. Así se obtiene el agua destilada, se fabrican bebidas alcohólicas y se separan los componentes del petróleo en las refinerías. La <b>cromatografía</b> separa los pigmentos de una tinta.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Destilación: un matraz se calienta, el vapor sube, pasa por un refrigerante con agua fría donde se condensa y el líquido destilado cae en otro recipiente">${BG}
        <circle cx="50" cy="104" r="28" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M26 112 a 28 28 0 0 0 48 0 Z" fill="var(--red)" fill-opacity=".35"/><path d="M44 76 v -40 h 12 v 40" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M38 144 q 6 -10 0 -14 q 10 6 6 14 M54 146 q 6 -12 0 -16 q 12 6 6 16" fill="#f08a24"/>
        <path d="M56 46 L 196 104" stroke="var(--ink)" stroke-width="10" stroke-linecap="round"/><path d="M56 46 L 196 104" stroke="var(--card)" stroke-width="6" stroke-linecap="round"/>
        <path d="M86 50 L 186 92 L 180 106 L 80 64 Z" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)"/>${t(150, 58, "refrigerante", { size: 10, color: "var(--pen)" })}
        <path d="M196 104 v 22" stroke="var(--pen)" stroke-width="2" stroke-dasharray="3 3"/><path d="M180 128 h 34 l -4 34 h -26 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M182 146 h 30 l -2 14 h -26 Z" fill="var(--pen)" fill-opacity=".35"/>
        ${t(50, 170, "calor", { size: 10, color: "#f08a24" })}${t(174, 156, "destilado", { size: 10, anchor: "end" })}${t(56, 26, "vapor", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Mezclas en la vida diaria</h3><p>Los métodos de separación no son solo cosa del laboratorio. En casa <b>filtramos</b> el café, <b>tamizamos</b> la harina y <b>escurrimos</b> la pasta. Las <b>depuradoras</b> limpian el agua residual combinando rejillas (tamización), balsas donde los lodos se depositan en el fondo (decantación) y filtros de arena. Las <b>desaladoras</b> obtienen agua potable del mar por destilación o por ósmosis inversa. En los <b>puntos limpios</b> y las plantas de reciclaje se separan los residuos con imanes, corrientes de aire y cribas. En los análisis de sangre, la <b>centrífuga</b> separa los glóbulos del plasma. Y en las <b>refinerías</b>, una enorme torre de destilación separa el petróleo en gases, gasolina, queroseno, gasóleo y asfalto según su punto de ebullición.</p>`,
    },
  ],
  figura: {
    titulo: "¿Qué método elijo?",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Tabla para elegir método: sólido no disuelto en líquido, filtración; dos líquidos que no se mezclan, decantación; hierro y otro sólido, imán; sólido disuelto, cristalización; dos líquidos mezclados, destilación">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${t(320, 30, "Elige el método según la mezcla", { size: 17, font: D })}
      ${[["arena + agua", "filtración", "var(--pen)"], ["aceite + agua", "decantación", "#b8860b"], ["hierro + arena", "imán", "var(--muted)"], ["sal + agua", "cristalización", "var(--red)"], ["alcohol + agua", "destilación", "var(--leaf)"]].map(([a, b, c], i) => { const x = 16 + i * 124; return `<rect x="${x}" y="50" width="112" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${t(x + 56, 96, a, { size: 13 })}${fl(x + 56, 112, x + 56, 146, c, 3)}${t(x + 56, 176, b, { size: 13, color: c })}`; }).join("")}
    </svg>`,
  },
  video: { id: "2FPaXer7AN0", titulo: "Mezclas y separaciones", canal: "Elesapiens", vistas: 2818467, megusta: 41953, busqueda: "sustancias puras y mezclas separación" },
  ejemplos: [
    { enunciado: "Disolvemos 15 g de azúcar en agua hasta obtener 250 mL de disolución. ¿Cuál es su concentración en g/L?",
      pasos: ["Pasamos el volumen a litros: 250 mL = 0,25 L.", "C = masa de soluto / volumen de disolución = 15 g / 0,25 L.", "C = 60 g/L."],
      resultado: "60 g/L." },
    { enunciado: "Mezclamos 10 g de sal con 190 g de agua. ¿Cuál es el porcentaje en masa?",
      pasos: ["Masa de la disolución: 10 + 190 = 200 g.", "% = (10 / 200) · 100.", "% = 5 %."],
      resultado: "5 % en masa." },
    { enunciado: "Tienes una mezcla de arena, sal y limaduras de hierro. ¿Cómo separas los tres componentes?",
      pasos: ["Pasa un imán: retira las limaduras de hierro.", "Echa agua y remueve: la sal se disuelve; filtra para retener la arena.", "Calienta o deja evaporar el agua filtrada: la sal cristaliza."],
      resultado: "Imán, disolución y filtración, y cristalización." },
  ],
  errores: [
    "Pensar que el agua del grifo o mineral es una sustancia pura: lleva sales disueltas.",
    "Confundir compuesto con mezcla: en un compuesto los elementos están unidos químicamente y en proporción fija.",
    "Llamar disolvente al componente minoritario: el disolvente es el que está en mayor cantidad.",
    "Calcular el porcentaje en masa dividiendo entre la masa del disolvente en vez de la de la disolución.",
    "Intentar separar sal y agua por filtración: la sal disuelta atraviesa el filtro.",
  ],
  ejercicios: [
    { q: "Clasifica en sustancia pura o mezcla: aire, oro, leche, agua destilada, granito, dióxido de carbono.", sol: "Sustancias puras: oro, agua destilada, dióxido de carbono. Mezclas: aire, leche, granito." },
    { q: "Clasifica las sustancias puras anteriores en elementos o compuestos.", sol: "Elemento: oro. Compuestos: agua y dióxido de carbono." },
    { q: "Clasifica en heterogénea, homogénea o coloide: agua con arena, agua del mar filtrada, mayonesa, bronce, ensalada.", sol: "Heterogéneas: agua con arena, ensalada. Homogéneas: agua del mar filtrada, bronce. Coloide: mayonesa." },
    { q: "Indica el soluto y el disolvente: a) agua con un poco de alcohol; b) aire.", sol: "a) Soluto: alcohol; disolvente: agua. b) Soluto: oxígeno y otros gases; disolvente: nitrógeno." },
    { q: "¿Qué concentración en g/L tiene una disolución de 40 g de sal en 2 L?", sol: "40 / 2 = 20 g/L." },
    { q: "¿Cuántos gramos de soluto hay en 500 mL de una disolución de 30 g/L?", sol: "30 g/L · 0,5 L = 15 g." },
    { q: "Calcula el % en masa de una disolución de 25 g de azúcar en 225 g de agua.", sol: "25 / 250 · 100 = 10 %." },
    { q: "Una cerveza tiene un 5 % vol. de alcohol. ¿Cuánto alcohol hay en una lata de 330 mL?", sol: "330 · 5 / 100 = 16,5 mL." },
    { q: "Explica por qué un refresco pierde antes el gas si está caliente.", sol: "Porque la solubilidad de los gases disminuye al aumentar la temperatura; el CO₂ escapa." },
    { q: "Elige el método: a) agua y aceite; b) agua y alcohol; c) garbanzos y lentejas; d) agua turbia con barro.", sol: "a) Decantación; b) destilación; c) tamización; d) filtración (o decantación y filtración)." },
  ],
  quiz: [
    { q: "Una sustancia formada por un solo tipo de átomo es un…", o: ["compuesto", "elemento", "coloide"], a: 1, e: "Un elemento." },
    { q: "El agua (H₂O) es…", o: ["un elemento", "un compuesto", "una mezcla"], a: 1, e: "Un compuesto de H y O." },
    { q: "El granito es una mezcla…", o: ["homogénea", "heterogénea", "pura"], a: 1, e: "Se ven sus minerales." },
    { q: "La leche es…", o: ["un coloide", "una disolución", "un elemento"], a: 0, e: "Un coloide." },
    { q: "En una disolución, el componente mayoritario es el…", o: ["soluto", "disolvente", "precipitado"], a: 1, e: "El disolvente." },
    { q: "El bronce es una aleación de…", o: ["hierro y carbono", "cobre y estaño", "cobre y cinc"], a: 1, e: "Cobre y estaño." },
    { q: "20 g de sal en 0,5 L dan una concentración de…", o: ["10 g/L", "40 g/L", "20 g/L"], a: 1, e: "20 / 0,5 = 40 g/L." },
    { q: "Al calentar el agua, la solubilidad de los gases…", o: ["aumenta", "disminuye", "no cambia"], a: 1, e: "Disminuye." },
    { q: "Para separar agua y aceite se usa la…", o: ["filtración", "decantación", "destilación"], a: 1, e: "Decantación." },
    { q: "En las salinas la sal se obtiene por…", o: ["evaporación y cristalización", "filtración", "imantación"], a: 0, e: "El sol evapora el agua." },
  ],
  examen: [
    { q: "La destilación aprovecha la diferencia de…", o: ["densidad", "punto de ebullición", "tamaño"], a: 1, e: "Punto de ebullición." },
    { q: "Una disolución que no admite más soluto está…", o: ["diluida", "saturada", "concentrada"], a: 1, e: "Saturada." },
    { q: "El efecto Tyndall permite reconocer…", o: ["un coloide", "un elemento", "una aleación"], a: 0, e: "Un coloide dispersa la luz." },
  ],
  feynman: ["Cómo se clasifica la materia en sustancias puras y mezclas", "Qué es la concentración y cómo se calcula", "Cómo separarías una mezcla de arena, sal y hierro"],
  mapa: mapa("MEZCLAS", "var(--eso)", [
    ["Sustancias puras", "elementos · compuestos", "var(--pen)"],
    ["Tipos de mezcla", "heterogénea · homogénea · coloide", "var(--red)"],
    ["Disoluciones", "soluto · disolvente · g/L · %", "#b8860b"],
    ["Separación", "filtrar · decantar · destilar", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Sustancia pura", "Un solo componente con propiedades fijas."],
    ["Elemento", "Sustancia pura que no se puede descomponer en otras más sencillas."],
    ["Compuesto", "Dos o más elementos unidos químicamente en proporción fija."],
    ["Mezcla homogénea", "Disolución: no se distinguen los componentes."],
    ["Soluto y disolvente", "Soluto: componente minoritario. Disolvente: el mayoritario."],
    ["Concentración", "Cantidad de soluto por cantidad de disolución, en g/L o en %."],
    ["Filtración", "Separa un sólido no disuelto de un líquido."],
    ["Destilación", "Separa líquidos por su distinto punto de ebullición."],
  ],
  familias: ["Separad arena, sal y clips con un imán, un colador de tela y un plato al sol.", "Leed la etiqueta de un agua mineral y de un refresco y anotad los solutos y su concentración.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "La materia: sustancias puras y mezclas, disoluciones, concentración, solubilidad y métodos de separación (RD 217/2022, Física y Química, bloque «La materia»).",
    ideas: ["Práctica de separación de una mezcla de arena, sal y limaduras de hierro.", "Preparación de disoluciones de concentración conocida y cálculo en g/L.", "Cromatografía de rotuladores con papel de filtro y alcohol."],
  },
  fuentes: [RD, wiki("Mezcla", "Mezcla"), wiki("Disolución", "Disolución")],
  revisado: REV,
};
