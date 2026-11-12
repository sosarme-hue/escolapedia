// Física y Química 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Física y Química",
  curso: "3-eso",
  titulo: "Mezclas y disoluciones",
  minutos: 55,
  objetivos: ["Clasificar la materia en sustancias puras y mezclas", "Distinguir mezclas homogéneas, heterogéneas y coloides", "Calcular la concentración de una disolución en g/L y en porcentaje", "Elegir el método adecuado para separar los componentes de una mezcla"],
  claves: ["sustancia pura", "mezcla homogénea", "mezcla heterogénea", "disolución", "soluto", "disolvente", "concentración", "solubilidad"],
  pregunta: {
    texto: "En Canarias y en muchos barcos se bebe agua que antes era agua de mar. ¿Cómo se le quita la sal a 50.000 metros cúbicos de agua al día?",
    respuesta: "El agua de mar es una <mark>disolución</mark>: la sal está repartida de forma uniforme y no se ve. No se puede filtrar. Las desaladoras empujan el agua a muy alta presión contra una membrana que deja pasar el agua pero no la sal: es la <b>ósmosis inversa</b>. Separar mezclas es una de las tareas más importantes de la química.",
  },
  bloques: [
    {
      html: `<h3>Sustancias puras y mezclas</h3><p>Toda la materia que nos rodea se puede clasificar en dos grandes grupos. Una <mark>sustancia pura</mark> tiene una composición fija y unas propiedades características constantes, como el agua destilada, el oxígeno, la sal o el oro. Puede ser un <b>elemento</b>, si no se puede descomponer en otras sustancias más sencillas (el oro, el oxígeno), o un <b>compuesto</b>, formado por varios elementos combinados en proporción fija (el agua, la sal). Una <mark>mezcla</mark> está formada por dos o más sustancias que conservan sus propiedades y que se pueden juntar en cualquier proporción: el aire, el agua del grifo, la leche, el granito o una ensalada.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Clasificación de la materia: sustancias puras, divididas en elementos y compuestos, y mezclas, divididas en homogéneas y heterogéneas">${BG}
        ${caja(80, 10, 100, 30, "MATERIA", "var(--ink)", { size: 12 })}${fl(110, 42, 70, 62)}${fl(150, 42, 190, 62)}
        ${caja(8, 64, 118, 30, "sustancias puras", "var(--pen)", { size: 11 })}${caja(134, 64, 118, 30, "mezclas", "#b8860b", { size: 11 })}
        ${fl(40, 96, 36, 116)}${fl(94, 96, 98, 116)}${fl(166, 96, 162, 116)}${fl(220, 96, 224, 116)}
        ${caja(4, 118, 62, 28, "elemento", "var(--pen)", { size: 10, op: 0.08 })}${caja(68, 118, 62, 28, "compuesto", "var(--pen)", { size: 10, op: 0.08 })}${caja(132, 118, 60, 28, "homog.", "#b8860b", { size: 10, op: 0.08 })}${caja(194, 118, 62, 28, "heterog.", "#b8860b", { size: 10, op: 0.08 })}
        ${t(35, 166, "oro", { size: 10, weight: 400 })}${t(99, 166, "agua", { size: 10, weight: 400 })}${t(162, 166, "aire", { size: 10, weight: 400 })}${t(225, 166, "granito", { size: 10, weight: 400 })}</svg>`,
    },
    {
      html: `<h3>Mezclas heterogéneas y homogéneas</h3><p>En una <mark>mezcla heterogénea</mark> se distinguen sus componentes a simple vista o con una lupa, y su composición no es igual en todos los puntos: el granito, con sus granos de cuarzo, feldespato y mica; el agua con arena; una pizza o el agua con aceite. En una <mark>mezcla homogénea</mark>, también llamada <b>disolución</b>, no se distinguen los componentes ni siquiera con un microscopio, y su composición y sus propiedades son iguales en todos los puntos: el agua con sal, el aire, el vinagre o el bronce. Entre ambas están los <b>coloides</b>, que parecen homogéneos a simple vista pero no lo son al microscopio, como la leche, la mayonesa, la niebla o la gelatina.</p>`,
      video: { id: "GxVCHRX20_A", titulo: "MEZCLAS HOMOGÉNEAS Y HETEROGÉNEAS [Fácil y Rápido]", canal: "A Cierta Ciencia", vistas: 1347312 },
    },
    {
      html: `<h3>Las disoluciones: soluto y disolvente</h3><p>Una <b>disolución</b> tiene al menos dos componentes. El <mark>disolvente</mark> es el que está en mayor cantidad y en el que se reparte el otro; el <mark>soluto</mark> es el que está en menor cantidad. En el agua con azúcar, el agua es el disolvente y el azúcar el soluto. El agua se llama el <b>disolvente universal</b> porque disuelve muchísimas sustancias. Las disoluciones pueden estar en cualquier estado: <b>gaseosas</b>, como el aire (oxígeno en nitrógeno); <b>líquidas</b>, como el refresco con gas (CO₂ en agua) o el alcohol de farmacia; y <b>sólidas</b>, como las <b>aleaciones</b>: el bronce es estaño disuelto en cobre, y el acero, carbono en hierro.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Azúcar, el soluto, más agua, el disolvente, da una disolución en la que no se distinguen las partículas de azúcar">${BG}
        <rect x="14" y="70" width="44" height="40" rx="4" fill="#fff" stroke="var(--muted)" stroke-width="2"/>${[0, 1, 2, 3].map(i => `<rect x="${22 + (i % 2) * 14}" y="${78 + Math.floor(i / 2) * 14}" width="10" height="10" fill="#e8d8b0"/>`).join("")}
        ${t(36, 130, "soluto", { size: 11, color: "var(--red)" })}${t(36, 144, "azúcar", { size: 10, weight: 400 })}${t(70, 96, "+", { size: 18 })}
        <path d="M84 60 V 120 H 128 V 60" fill="var(--water)" fill-opacity=".4" stroke="var(--ink)" stroke-width="2"/>${t(106, 140, "disolvente", { size: 11, color: "var(--pen)" })}${t(106, 154, "agua", { size: 10, weight: 400 })}
        ${fl(136, 92, 160, 92)}
        <path d="M172 60 V 120 H 236 V 60" fill="var(--water)" fill-opacity=".5" stroke="var(--ink)" stroke-width="2"/>${t(204, 140, "disolución", { size: 11, color: "var(--leaf)" })}${t(204, 154, "agua con azúcar", { size: 10, weight: 400 })}
        ${t(130, 28, "no se ve el azúcar: se ha repartido", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La concentración en g/L</h3><p>La <mark>concentración</mark> indica cuánto soluto hay en una cantidad de disolución. Una disolución es <b>diluida</b> si tiene poco soluto y <b>concentrada</b> si tiene mucho, pero estas palabras son imprecisas, así que se usan números. La forma más sencilla es la <b>concentración en masa</b>, que da los gramos de soluto en cada litro de disolución: <b>c = masa de soluto (g) / volumen de disolución (L)</b>. Se mide en <b>g/L</b>. El suero fisiológico tiene 9 g/L de sal; el agua del mar, unos 35 g/L. No hay que confundirla con la densidad: aunque ambas se pueden expresar en g/L, la concentración usa solo la masa del soluto, y la densidad, la masa de toda la disolución.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos vasos de un litro: con 5 gramos de sal la disolución es diluida, 5 gramos por litro; con 35 gramos es concentrada, 35 gramos por litro">${BG}
        ${[[70, 6, "5 g/L", "diluida"], [190, 30, "35 g/L", "concentrada"]].map(([x, n, c, w]) => `<path d="M${x - 40} 40 V 140 H ${x + 40} V 40" fill="var(--water)" fill-opacity=".35" stroke="var(--ink)" stroke-width="2"/>${Array.from({ length: n }, (_, i) => `<circle cx="${x - 30 + (n > 10 ? (i % 6) * 12 + (Math.floor(i / 6) % 2) * 5 : (i * 23) % 60)}" cy="${n > 10 ? 52 + Math.floor(i / 6) * 18 + (i % 3) * 4 : 56 + i * 15}" r="3" fill="var(--red)"/>`).join("")}${t(x, 158, c, { size: 13, color: "var(--red)" })}${t(x, 26, w, { size: 11 })}`).join("")}
        ${t(130, 174, "c = g de soluto / L de disolución", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La concentración en porcentaje</h3><p>También se puede expresar la concentración en <b>porcentaje</b>. El <mark>porcentaje en masa</mark> indica los gramos de soluto que hay en 100 g de disolución: <b>% masa = masa de soluto / masa de disolución · 100</b>. Recuerda que la masa de la disolución es la del soluto más la del disolvente. El <mark>porcentaje en volumen</mark> se usa cuando soluto y disolvente son líquidos, e indica los mL de soluto en 100 mL de disolución: <b>% volumen = volumen de soluto / volumen de disolución · 100</b>. La graduación de las bebidas alcohólicas es un porcentaje en volumen: un vino de 12 % vol contiene 12 mL de alcohol en cada 100 mL. El alcohol de farmacia suele ser del 96 %.</p>${tabla(["Forma", "Fórmula", "Ejemplo"], [["g/L", "g soluto / L disolución", "suero: 9 g/L"], ["% en masa", "g soluto / g disolución · 100", "salmuera: 20 %"], ["% en volumen", "mL soluto / mL disolución · 100", "vino: 12 % vol"]])}`,
      video: { id: "xkVs6Fwy0-c", titulo: "Concentración GRAMO POR LITRO. Disoluciones", canal: "Susi Profe", vistas: 573655 },
    },
    {
      html: `<h3>La solubilidad</h3><p>No se puede disolver una cantidad ilimitada de soluto. La <mark>solubilidad</mark> es la <b>máxima cantidad de soluto</b> que se puede disolver en una cantidad dada de disolvente a una temperatura determinada; se suele dar en gramos de soluto por 100 g de agua. Cuando una disolución ya no admite más soluto, se dice que está <b>saturada</b>, y lo que añadamos se queda en el fondo. La solubilidad es una propiedad característica y depende de la <b>temperatura</b>: en la mayoría de los sólidos aumenta al calentar (por eso el azúcar se disuelve mejor en leche caliente), mientras que en los <b>gases disminuye</b>: un refresco caliente pierde el gas antes, y en verano los peces de los ríos sufren porque el agua caliente tiene menos oxígeno disuelto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica de solubilidad: la del azúcar y la sal sube con la temperatura y la del oxígeno baja">${BG}
        <path d="M40 16 V 150 H 246" stroke="var(--muted)" stroke-width="2" fill="none"/>
        ${t(246, 168, "temperatura", { size: 10, anchor: "end", color: "var(--muted)" })}${t(44, 14, "solubilidad", { size: 10, anchor: "start", color: "var(--muted)" })}
        <path d="M40 110 Q 140 90 236 26" stroke="var(--red)" stroke-width="3" fill="none"/>${t(176, 36, "azúcar", { size: 10, anchor: "end", color: "var(--red)" })}
        <path d="M40 100 L 236 92" stroke="#b8860b" stroke-width="3" fill="none"/>${t(236, 84, "sal", { size: 10, anchor: "end", color: "#b8860b" })}
        <path d="M40 60 Q 120 110 236 136" stroke="var(--inf)" stroke-width="3" fill="none"/>${t(60, 52, "oxígeno (gas)", { size: 10, anchor: "start", color: "var(--inf)" })}</svg>`,
    },
    {
      html: `<h3>Separar mezclas heterogéneas</h3><p>Los componentes de una mezcla conservan sus propiedades, y eso permite separarlos por <b>métodos físicos</b>, sin cambiar las sustancias. Para las mezclas heterogéneas: la <mark>filtración</mark> separa un sólido no disuelto de un líquido con un papel de filtro, como la arena del agua o el café de sus posos; la <b>decantación</b> separa líquidos que no se mezclan, como el agua y el aceite, con un <b>embudo de decantación</b>, o deja que un sólido se deposite en el fondo; la <b>separación magnética</b> extrae con un imán los materiales de hierro, como en las plantas de reciclaje; y el <b>tamizado</b> separa sólidos de distinto tamaño con un colador o tamiz, como la grava de la arena.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos métodos: filtración, en la que el papel retiene la arena y pasa el agua, y decantación, en la que el aceite queda arriba y el agua sale por la llave">${BG}
        <path d="M30 40 H 110 L 76 90 V 110 H 64 V 90 Z" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M40 46 H 100 L 70 86 Z" fill="#c9a37a" fill-opacity=".7"/>
        <path d="M46 120 V 160 H 94 V 120" fill="var(--water)" fill-opacity=".4" stroke="var(--ink)" stroke-width="2"/>
        ${t(70, 26, "filtración", { size: 11, color: "var(--pen)" })}${t(70, 174, "arena / agua", { size: 10, weight: 400 })}
        <path d="M190 24 Q 150 60 166 110 H 214 Q 230 60 190 24 Z" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <path d="M176 56 Q 162 74 164 90 H 216 Q 218 74 204 56 Z" fill="#f2d675" fill-opacity=".8"/><path d="M164 90 Q 165 104 166 110 H 214 Q 215 104 216 90 Z" fill="var(--water)" fill-opacity=".5"/>
        <rect x="186" y="110" width="8" height="30" fill="var(--muted)"/><rect x="180" y="120" width="20" height="6" fill="var(--red)"/>
        ${t(150, 76, "aceite", { size: 10, anchor: "end" })}${t(150, 102, "agua", { size: 10, anchor: "end", color: "var(--pen)" })}${t(190, 160, "decantación", { size: 11, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Separar mezclas homogéneas</h3><p>En las disoluciones, los componentes están tan bien repartidos que no sirven el filtro ni el imán. La <mark>cristalización</mark> separa un sólido disuelto evaporando el disolvente lentamente; así se obtiene la sal en las <b>salinas</b>, como las de Torrevieja o las del Cabo de Gata. La <mark>destilación</mark> separa líquidos con distinta temperatura de ebullición: se calienta la mezcla, el líquido más volátil hierve antes, su vapor pasa por un tubo refrigerante, se condensa y se recoge aparte. Así se fabrican los licores y los perfumes, y se separan los componentes del petróleo. La <b>cromatografía</b> separa sustancias que avanzan a distinta velocidad por un papel, como los pigmentos de la tinta de un rotulador.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Montaje de destilación: matraz calentado, el vapor sube, pasa por el refrigerante inclinado, se condensa y gotea en otro recipiente">${BG}
        <circle cx="54" cy="110" r="28" fill="var(--water)" fill-opacity=".35" stroke="var(--ink)" stroke-width="2"/><rect x="48" y="58" width="12" height="28" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <path d="M44 150 l 10 -12 l 10 12 Z" fill="#f08a24"/>${t(54, 172, "calor", { size: 10, color: "var(--red)" })}
        <path d="M60 66 L 196 116" stroke="var(--ink)" stroke-width="3"/><path d="M90 66 L 196 106 L 192 124 L 84 86 Z" fill="var(--inf)" fill-opacity=".15" stroke="var(--inf)" stroke-width="2"/>
        ${t(150, 72, "refrigerante", { size: 10, color: "var(--inf)" })}
        <path d="M184 130 V 160 H 226 V 130" fill="var(--water)" fill-opacity=".4" stroke="var(--ink)" stroke-width="2"/><circle cx="200" cy="124" r="2.5" fill="var(--pen)"/>
        ${t(54, 40, "hierve el volátil", { size: 10, color: "var(--red)" })}${t(205, 174, "destilado", { size: 10, color: "var(--pen)" })}</svg>`,
      video: { id: "UQO88zoMC9Q", titulo: "Métodos de separación de mezclas con ejemplos [Fácil y Rápido]", canal: "A Cierta Ciencia", vistas: 1717584 },
    },
    {
      html: `<h3>Cómo elegir el método</h3><p>Para elegir el método de separación hay que fijarse en la <b>propiedad diferente</b> de los componentes. Si uno es <b>magnético</b>: imán. Si tienen distinto <b>tamaño</b>: tamizado. Si un sólido <b>no se disuelve</b> en el líquido: filtración. Si son dos líquidos que <b>no se mezclan</b>: decantación. Si un sólido está <b>disuelto</b>: cristalización o evaporación. Si son líquidos con distinta <b>temperatura de ebullición</b>: destilación. Muchas veces hay que <mark>encadenar varios métodos</mark>. Por ejemplo, para separar arena, sal y limaduras de hierro: primero el imán saca el hierro; después se añade agua, que disuelve la sal; se filtra para separar la arena; y por último se evapora el agua para recuperar la sal.</p>`,
    },
    {
      html: `<h3>Las mezclas en la vida diaria y la industria</h3><p>Separar mezclas es esencial en nuestra sociedad. En las <b>potabilizadoras</b>, el agua de un embalse pasa por rejas que retienen ramas (tamizado), balsas donde se depositan los lodos (decantación), filtros de arena (filtración) y, al final, se desinfecta con cloro. Las <b>depuradoras</b> limpian el agua residual antes de devolverla al río. Las <b>refinerías</b> destilan el petróleo para obtener gasolina, gasóleo, queroseno y asfalto. En medicina, la <b>diálisis</b> filtra la sangre de las personas cuyos riñones no funcionan. Y en la cocina usamos coladores, filtros de café y centrifugadoras sin darnos cuenta de que hacemos química.</p>`,
    },
  ],
  figura: {
    titulo: "Qué método para qué mezcla",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Tabla visual: imán para el hierro, tamizado para distinto tamaño, filtración para sólido no disuelto, decantación para líquidos que no se mezclan, cristalización para sólido disuelto y destilación para líquidos con distinta ebullición">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[["imán", "hierro + arena", "var(--muted)"], ["tamizado", "grava + arena", "#8a6a4a"], ["filtración", "arena + agua", "var(--pen)"], ["decantación", "aceite + agua", "#b8860b"], ["cristalización", "sal disuelta en agua", "var(--leaf)"], ["destilación", "alcohol + agua", "var(--red)"]].map(([m, e, c], i) => { const x = 20 + (i % 3) * 204, y = 24 + Math.floor(i / 3) * 116; return `<rect x="${x}" y="${y}" width="190" height="100" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${t(x + 95, y + 42, m, { size: 18, color: c, font: D })}${t(x + 95, y + 72, e, { size: 13, weight: 400 })}`; }).join("")}
    </svg>`,
  },
  video: { id: "2FPaXer7AN0", titulo: "MEZCLAS Y SEPARACIONES", canal: "Elesapiens", vistas: 2818447, megusta: 0, busqueda: "mezclas homogéneas y heterogéneas métodos de separación" },
  ejemplos: [
    { enunciado: "Disolvemos 15 g de sal en agua hasta tener 250 mL de disolución. ¿Cuál es su concentración en g/L?",
      pasos: ["Pasamos el volumen a litros: 250 mL = 0,25 L.", "c = masa de soluto / volumen de disolución.", "c = 15 / 0,25 = 60 g/L."],
      resultado: "60 g/L." },
    { enunciado: "Disolvemos 20 g de azúcar en 180 g de agua. Calcula el porcentaje en masa.",
      pasos: ["Masa de disolución = 20 + 180 = 200 g.", "% = 20 / 200 · 100.", "% = 10 %."],
      resultado: "10 % en masa de azúcar." },
    { enunciado: "¿Cuántos gramos de sal hacen falta para preparar 2 L de suero fisiológico (9 g/L)?",
      pasos: ["Despejamos la masa: m = c · V.", "m = 9 g/L · 2 L.", "m = 18 g."],
      resultado: "18 g de sal." },
  ],
  errores: [
    "Pensar que «puro» significa «natural»: el agua de un manantial es una mezcla, no una sustancia pura.",
    "Usar como masa de disolución solo la del disolvente: es soluto más disolvente.",
    "Dividir entre el volumen en mL cuando la concentración se pide en g/L.",
    "Intentar separar una disolución con un filtro: el soluto disuelto pasa a través.",
    "Creer que todas las sustancias se disuelven mejor en caliente: los gases, al revés.",
  ],
  ejercicios: [
    { q: "Clasifica: agua del mar, oro, granito, aire, agua destilada, leche.", sol: "Sustancias puras: oro, agua destilada. Mezclas homogéneas: agua del mar, aire. Heterogénea: granito. Coloide: leche." },
    { q: "Diferencia elemento y compuesto con un ejemplo de cada uno.", sol: "Un elemento no se descompone en sustancias más simples (hierro). Un compuesto está formado por varios elementos en proporción fija (agua)." },
    { q: "Indica soluto y disolvente: a) agua con sal; b) aire; c) bronce.", sol: "a) Soluto sal, disolvente agua; b) soluto oxígeno y otros, disolvente nitrógeno; c) soluto estaño, disolvente cobre." },
    { q: "Calcula la concentración en g/L de 30 g de azúcar en 500 mL de disolución.", sol: "30 / 0,5 = 60 g/L." },
    { q: "¿Qué masa de soluto hay en 300 mL de una disolución de 40 g/L?", sol: "m = 40 · 0,3 = 12 g." },
    { q: "Una colonia tiene 80 mL de alcohol en 100 mL. ¿Cuál es su porcentaje en volumen? ¿Y si tuviéramos 250 mL de colonia, cuánto alcohol habría?", sol: "80 %; 250 · 0,80 = 200 mL de alcohol." },
    { q: "¿Qué es una disolución saturada?", sol: "La que contiene la máxima cantidad de soluto que se puede disolver a esa temperatura; si se añade más, no se disuelve." },
    { q: "¿Por qué un refresco caliente tiene menos gas?", sol: "Porque la solubilidad de los gases disminuye al aumentar la temperatura." },
    { q: "Propón un método para separar: a) agua y aceite; b) agua y alcohol; c) sal del agua de mar.", sol: "a) Decantación; b) destilación; c) cristalización o evaporación." },
    { q: "Explica cómo separarías una mezcla de serrín, sal y limaduras de hierro.", sol: "Imán para el hierro; añadir agua: el serrín flota y la sal se disuelve; filtrar el serrín; evaporar el agua para obtener la sal." },
  ],
  quiz: [
    { q: "El agua del mar es…", o: ["una sustancia pura", "una mezcla homogénea", "una mezcla heterogénea"], a: 1, e: "Una disolución." },
    { q: "El granito es una mezcla…", o: ["homogénea", "heterogénea", "pura"], a: 1, e: "Se ven sus granos." },
    { q: "En una disolución, el componente mayoritario es…", o: ["el soluto", "el disolvente", "el coloide"], a: 1, e: "El disolvente." },
    { q: "El bronce es…", o: ["un elemento", "una aleación", "un coloide"], a: 1, e: "Disolución sólida de estaño en cobre." },
    { q: "10 g de sal en 0,5 L dan…", o: ["5 g/L", "20 g/L", "10 g/L"], a: 1, e: "10 / 0,5 = 20 g/L." },
    { q: "La solubilidad de los gases al calentar…", o: ["aumenta", "disminuye", "no cambia"], a: 1, e: "Disminuye." },
    { q: "Para separar arena y agua se usa…", o: ["destilación", "filtración", "imán"], a: 1, e: "Filtración." },
    { q: "Para separar agua y aceite se usa…", o: ["decantación", "cristalización", "tamizado"], a: 0, e: "Decantación." },
    { q: "La sal se obtiene en las salinas por…", o: ["destilación", "cristalización", "filtración"], a: 1, e: "Evaporación y cristalización." },
    { q: "La leche es…", o: ["un coloide", "una sustancia pura", "un elemento"], a: 0, e: "Un coloide." },
  ],
  examen: [
    { q: "La destilación separa líquidos por su…", o: ["densidad", "temperatura de ebullición", "color"], a: 1, e: "Temperatura de ebullición." },
    { q: "Un vino de 13 % vol tiene en 100 mL…", o: ["13 g de alcohol", "13 mL de alcohol", "87 mL de alcohol"], a: 1, e: "13 mL." },
    { q: "Una disolución saturada…", o: ["no admite más soluto", "no tiene soluto", "es heterogénea"], a: 0, e: "No admite más soluto." },
  ],
  feynman: ["Qué diferencia hay entre sustancia pura, mezcla homogénea y heterogénea", "Cómo se calcula la concentración de una disolución", "Qué método elegir para separar cada mezcla y por qué"],
  mapa: mapa("MEZCLAS", "var(--eso)", [
    ["Tipos", "homogénea · heterogénea · coloide", "#b8860b"],
    ["Disolución", "soluto · disolvente · saturada", "var(--pen)"],
    ["Concentración", "g/L · % masa · % volumen", "var(--red)"],
    ["Separación", "filtrar · decantar · destilar", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Sustancia pura", "Composición fija y propiedades constantes."],
    ["Mezcla homogénea", "Disolución: no se distinguen los componentes."],
    ["Coloide", "Parece homogéneo, pero no lo es al microscopio: leche."],
    ["Soluto y disolvente", "Soluto: en menor cantidad. Disolvente: en mayor cantidad."],
    ["Concentración en g/L", "Gramos de soluto por litro de disolución."],
    ["Solubilidad", "Máximo de soluto que se disuelve a una temperatura."],
    ["Filtración", "Separa un sólido no disuelto de un líquido."],
    ["Destilación", "Separa líquidos por su temperatura de ebullición."],
  ],
  familias: ["Haced cromatografía con un rotulador negro, papel de cocina y agua y ved los colores escondidos.", "Preparad agua con sal, dejadla al sol en un plato y observad los cristales al cabo de unos días.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "La materia: sustancias puras y mezclas, disoluciones, concentración en masa y en porcentaje, solubilidad y técnicas de separación (RD 217/2022, Física y Química 2º y 3º).",
    ideas: ["Reto por equipos: separar una mezcla de arena, sal, hierro y serrín.", "Preparar disoluciones de concentración conocida y comparar el color con permanganato o colorante.", "Curva de solubilidad del nitrato potásico con baño de agua."],
  },
  fuentes: [RD, wiki("Disolución", "Disoluci%C3%B3n"), wiki("Mezcla", "Mezcla")],
  revisado: "2026-11-12",
};
