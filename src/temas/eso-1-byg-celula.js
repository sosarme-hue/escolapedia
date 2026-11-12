// Biología y Geología 1º ESO: la célula. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

// Rótulo con línea guía: de (x1,y1) en el dibujo a (x2,y2) donde va el texto.
const guia = (x1, y1, x2, y2, s, anchor = "start") => `<path d="M${x1} ${y1} L ${x2} ${y2}" stroke="var(--ink)" stroke-width="1"/>${t(x2 + (anchor === "start" ? 3 : -3), y2 + 3.5, s, { size: 9.5, anchor })}`;

module.exports = {
  materia: "Biología y Geología",
  curso: C,
  titulo: "La célula",
  minutos: 55,
  objetivos: ["Enunciar la teoría celular y conocer su historia", "Identificar las partes comunes de todas las células", "Distinguir células procariotas y eucariotas, y células animales y vegetales", "Conocer las partes del microscopio óptico y cómo se usa"],
  claves: ["célula", "teoría celular", "microscopio", "membrana", "citoplasma", "núcleo", "ADN", "procariota", "eucariota", "mitocondria", "cloroplasto", "pared celular", "vacuola"],
  pregunta: {
    texto: "Tu cuerpo tiene unos 30 billones de células. ¿Cómo es posible que todas procedan de una sola?",
    respuesta: "Todo empezó con una única célula, el <b>cigoto</b>, que se formó al unirse un óvulo y un espermatozoide. Esa célula se <b>dividió en dos</b>, cada una de ellas en otras dos, y así una y otra vez. Con unas 45 divisiones seguidas ya se superan los 30 billones. Por el camino, las células se fueron <b>especializando</b>: unas se convirtieron en neuronas, otras en células musculares, otras en glóbulos rojos… pero todas guardan el mismo ADN.",
  },
  bloques: [
    {
      html: `<h3>El descubrimiento de la célula</h3><p>Las células son tan pequeñas que no se pueden ver a simple vista: la mayoría mide entre 10 y 100 <b>micrómetros</b> (milésimas de milímetro). Por eso no se descubrieron hasta que se inventó el <mark>microscopio</mark>. En 1665, el científico inglés <b>Robert Hooke</b> observó una lámina finísima de corcho con un microscopio construido por él y vio que estaba formada por pequeñas celdas vacías, como las de un panal; las llamó <b>células</b>, que en latín significa «celdillas». En realidad, lo que vio eran las paredes de células muertas. Pocos años después, el comerciante holandés <b>Anton van Leeuwenhoek</b>, que fabricaba sus propias lentes, observó por primera vez seres vivos microscópicos en una gota de agua de un charco y en la placa de sus dientes, a los que llamó «animálculos». Durante los siglos siguientes, los microscopios mejoraron y se observaron células en todo tipo de seres vivos.</p>`,
    },
    {
      html: `<h3>La teoría celular</h3><p>En el siglo XIX, los científicos alemanes <b>Matthias Schleiden</b> (estudiando plantas) y <b>Theodor Schwann</b> (estudiando animales) llegaron a la conclusión de que todos los seres vivos están formados por células. Más tarde, <b>Rudolf Virchow</b> afirmó que toda célula procede de otra célula. Y a finales de siglo, el español <b>Santiago Ramón y Cajal</b> demostró que el sistema nervioso también está formado por células independientes, las neuronas, lo que le valió el Premio Nobel en 1906. Así se completó la <mark>teoría celular</mark>, uno de los pilares de la biología, que dice: 1) <b>todos los seres vivos están formados por una o más células</b>; 2) la célula es la <b>unidad estructural</b> de los seres vivos (todos están hechos de células) y la <b>unidad funcional</b> (cada célula realiza las funciones vitales: nutrición, relación y reproducción); 3) <b>toda célula procede de otra célula</b> ya existente, por división; y 4) la célula contiene la <b>información hereditaria</b> y la transmite a sus células hijas.</p>`,
    },
    {
      html: `<h3>Las partes comunes de las células</h3><p>Existen células de formas y tamaños muy diversos, pero todas tienen tres partes en común. La <mark>membrana plasmática</mark> es una envoltura muy fina que rodea la célula, la separa del exterior y <b>controla qué sustancias entran y salen</b>, como la aduana de un país. El <mark>citoplasma</mark> es el contenido de la célula: un medio acuoso y gelatinoso donde flotan los <b>orgánulos</b> (pequeñas estructuras con funciones concretas) y donde se producen muchas de las reacciones químicas de la vida. Y el <mark>material genético</mark>, el <b>ADN</b>, que contiene las instrucciones para fabricar y hacer funcionar la célula y que se copia y se transmite cuando la célula se divide. Según dónde esté ese ADN, se distinguen dos grandes tipos de células: las <b>procariotas</b> y las <b>eucariotas</b>. Una comparación útil: si la célula fuera una fábrica, la membrana sería la valla con sus puertas, el citoplasma, la nave donde se trabaja, y el ADN, el libro de instrucciones.</p>`,
    },
    {
      html: `<h3>Células procariotas</h3><p>Las <mark>células procariotas</mark> son las más <b>sencillas y antiguas</b>: los primeros seres vivos, hace unos 3.500 millones de años, eran de este tipo. Su característica principal es que <b>no tienen núcleo</b>: el ADN está libre en el citoplasma, en una zona llamada nucleoide. Además, son muy pequeñas (de 1 a 10 micrómetros) y tienen muy pocos orgánulos, casi solo <b>ribosomas</b>, que fabrican proteínas. Por fuera de la membrana tienen una <b>pared celular</b> rígida que les da forma y protección, y muchas tienen <b>flagelos</b>, largos filamentos que mueven como hélices para desplazarse. Todas las <b>bacterias</b> son procariotas y unicelulares. Aunque no las veamos, están por todas partes: en el suelo, el agua, el aire y dentro de nuestro cuerpo, donde la mayoría son beneficiosas, como las de la flora intestinal.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Célula procariota: pared celular, membrana, citoplasma con ribosomas, ADN libre sin núcleo y un flagelo">${BG}
        <rect x="40" y="56" width="140" height="70" rx="35" fill="#86efac" fill-opacity=".5" stroke="#15803d" stroke-width="4"/>
        <rect x="46" y="62" width="128" height="58" rx="29" fill="none" stroke="#2f9e44" stroke-width="1.5"/>
        <path d="M80 90 c 10 -14 20 12 30 -2 s 18 14 28 0 s -10 -14 -24 -6 s -22 18 -34 8" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
        ${[[64, 76], [70, 104], [150, 74], [158, 102], [128, 108], [96, 70]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.2" fill="var(--ink)"/>`).join("")}
        <path d="M180 91 c 14 -10 22 10 36 0 s 18 10 30 0" fill="none" stroke="#15803d" stroke-width="2.5"/>
        ${guia(110, 86, 136, 30, "ADN sin núcleo")}${guia(42, 100, 16, 124, "pared")}${guia(70, 104, 64, 150, "ribosoma", "end")}${guia(150, 124, 160, 150, "membrana")}${guia(226, 92, 214, 60, "flagelo", "start")}</svg>`,
    },
    {
      html: `<h3>Células eucariotas</h3><p>Las <mark>células eucariotas</mark> son <b>más grandes y complejas</b> (de 10 a 100 micrómetros) y aparecieron más tarde en la historia de la vida. Su característica principal es que tienen un <mark>núcleo</mark>: una estructura rodeada por una doble membrana que guarda el ADN y que dirige toda la actividad de la célula. Además, su citoplasma contiene muchos <b>orgánulos</b> especializados, cada uno con su función. Los más importantes son: las <mark>mitocondrias</mark>, las «centrales de energía», donde se realiza la respiración celular y se obtiene la energía de los alimentos; los <b>ribosomas</b>, que fabrican las proteínas; el <b>retículo endoplasmático</b> y el <b>aparato de Golgi</b>, que fabrican, transforman y empaquetan sustancias; y las <b>vacuolas</b>, que almacenan agua y otras sustancias. Están formados por células eucariotas los animales, las plantas, los hongos, las algas y los protozoos.</p>`,
      video: { id: "FJx0auAdQsw", titulo: "Las células procariotas y eucariotas - Ciencias Naturales - Vídeo educativo", canal: "Smile and Learn - Español", vistas: 2504106 },
    },
    {
      html: `<h3>Célula animal y célula vegetal</h3><p>Las células de los animales y las de las plantas son eucariotas, pero tienen algunas diferencias. La <mark>célula vegetal</mark> tiene una <b>pared celular</b> rígida de <b>celulosa</b> por fuera de la membrana, que le da una forma poligonal y fija (por eso las plantas se mantienen erguidas); tiene <mark>cloroplastos</mark>, orgánulos verdes con <b>clorofila</b> donde se realiza la <b>fotosíntesis</b>; y suele tener <b>una vacuola muy grande</b> que ocupa casi todo el interior y empuja el citoplasma contra la pared. La <mark>célula animal</mark> no tiene pared celular ni cloroplastos, por lo que su forma es más variable y redondeada; sus vacuolas son pequeñas y numerosas; y tiene un orgánulo llamado <b>centrosoma</b>, que interviene en la división celular. Las dos tienen membrana, citoplasma, núcleo, mitocondrias, ribosomas, retículo y aparato de Golgi. ¡Ojo! Las plantas también tienen mitocondrias: necesitan obtener energía igual que los animales.</p>${tabla(["Característica", "Célula animal", "Célula vegetal"], [["Pared celular", "no", "sí, de celulosa"], ["Cloroplastos", "no", "sí: fotosíntesis"], ["Vacuolas", "pequeñas y numerosas", "una muy grande"], ["Forma", "variable, redondeada", "poligonal y fija"], ["Centrosoma", "sí", "no"], ["Núcleo y mitocondrias", "sí", "sí"]])}`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Célula animal redondeada con núcleo y mitocondrias; célula vegetal poligonal con pared celular, gran vacuola, cloroplastos y núcleo">${BG}
        <ellipse cx="66" cy="88" rx="54" ry="46" fill="#fecaca" fill-opacity=".6" stroke="#d6332a" stroke-width="2"/>
        <circle cx="66" cy="88" r="14" fill="#c4b5fd" stroke="#6d28d9" stroke-width="2"/><circle cx="66" cy="88" r="4" fill="#6d28d9"/>
        <ellipse cx="38" cy="70" rx="9" ry="5" fill="#fdba74" stroke="#c2410c" stroke-width="1.5"/><ellipse cx="96" cy="108" rx="9" ry="5" fill="#fdba74" stroke="#c2410c" stroke-width="1.5"/><circle cx="92" cy="70" r="4" fill="#bae6fd"/><circle cx="40" cy="108" r="3.5" fill="#bae6fd"/>
        ${t(66, 152, "animal", { size: 11, color: COL.rojo })}
        <rect x="140" y="38" width="108" height="100" rx="4" fill="#bbf7d0" stroke="#15803d" stroke-width="5"/>
        <rect x="160" y="52" width="70" height="64" rx="10" fill="#bae6fd" stroke="#0369a1" stroke-width="1.5"/>
        <circle cx="152" cy="124" r="9" fill="#c4b5fd" stroke="#6d28d9" stroke-width="1.5"/>
        ${[[150, 50], [240, 64], [238, 118], [196, 128], [148, 96]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="6" ry="3.5" fill="#22c55e" stroke="#15803d"/>`).join("")}
        ${t(195, 88, "vacuola", { size: 10, color: "#0369a1" })}
        ${t(194, 152, "vegetal", { size: 11, color: COL.verde })}${t(194, 26, "pared + cloroplastos", { size: 9.5, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Seres unicelulares y pluricelulares</h3><p>Según el número de células, los seres vivos pueden ser <mark>unicelulares</mark> o <mark>pluricelulares</mark>. En los unicelulares, como las bacterias, las amebas, los paramecios o las levaduras, <b>una sola célula realiza todas las funciones vitales</b>: se alimenta, se relaciona con su medio y se reproduce. Casi todos son microscópicos. En los pluricelulares, como las plantas, los animales y la mayoría de los hongos, el organismo está formado por muchas células que se <b>especializan</b> en distintas tareas y adoptan formas adaptadas a ellas, de modo que dependen unas de otras. Por ejemplo, las <b>neuronas</b> tienen largas prolongaciones para transmitir mensajes a distancia; las <b>células musculares</b> son alargadas y pueden contraerse; los <b>glóbulos rojos</b> tienen forma de disco y llevan oxígeno; y las <b>células de la raíz</b> forman pelos absorbentes para tomar agua del suelo. A cambio de especializarse, estas células ya no pueden vivir solas.</p>`,
    },
    {
      html: `<h3>El microscopio óptico</h3><p>El instrumento básico para observar células en el laboratorio escolar es el <mark>microscopio óptico</mark>, que usa la luz y un sistema de lentes para aumentar la imagen. Sus partes principales son: el <b>ocular</b>, la lente por la que se mira; los <b>objetivos</b>, lentes de distintos aumentos (por ejemplo, 4×, 10× y 40×) montadas en un <b>revólver</b> que gira; la <b>platina</b>, donde se coloca la muestra, con unas pinzas; la <b>fuente de luz</b> y el <b>diafragma</b>, que regula la cantidad de luz; y los <b>tornillos macrométrico y micrométrico</b>, que suben o bajan la platina para enfocar, el primero de forma rápida y el segundo con precisión. El <b>aumento total</b> se calcula multiplicando el del ocular por el del objetivo: con un ocular de 10× y un objetivo de 40×, la imagen se ve <b>400 veces</b> más grande. Para estudiar estructuras aún más pequeñas, como los virus o el interior de los orgánulos, los científicos usan el <b>microscopio electrónico</b>, que puede aumentar cientos de miles de veces.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Microscopio óptico con sus partes: ocular, revólver con objetivos, platina, tornillos de enfoque, luz y pie">${BG}
        <rect x="70" y="150" width="90" height="14" rx="4" fill="#475569"/>
        <path d="M120 150 V 60 Q 120 40 100 30" fill="none" stroke="#475569" stroke-width="12" stroke-linecap="round"/>
        <rect x="82" y="16" width="16" height="30" rx="3" fill="#334155" transform="rotate(-25 90 30)"/>
        <rect x="74" y="66" width="22" height="12" rx="3" fill="#334155"/><rect x="78" y="78" width="6" height="16" fill="#64748b"/><rect x="88" y="78" width="6" height="12" fill="#64748b"/>
        <rect x="56" y="104" width="64" height="7" rx="2" fill="#1e293b"/>
        <circle cx="86" cy="134" r="6" fill="#fde68a" stroke="#c98a00" stroke-width="1.5"/>
        <circle cx="128" cy="98" r="7" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/><circle cx="128" cy="118" r="4.5" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/>
        ${guia(84, 20, 40, 18, "ocular", "end")}${guia(76, 86, 58, 70, "objetivos", "end")}${guia(58, 107, 40, 104, "platina", "end")}${guia(80, 134, 40, 136, "luz", "end")}
        ${guia(135, 98, 170, 86, "macrométrico")}${guia(132, 118, 170, 118, "micrométrico")}${guia(150, 157, 170, 150, "pie")}</svg>`,
      video: { id: "omBqFwX-Wx4", titulo: "LAS PARTES DEL MICROSCOPIO ÓPTICO Y SUS FUNCIONES", canal: "Astraway", vistas: 251645 },
    },
    {
      html: `<h3>Cómo se hace una preparación</h3><p>Para observar células al microscopio hay que preparar la muestra. Un ejemplo clásico es la <b>epidermis de cebolla</b>. 1) Se arranca con unas pinzas la <b>capa finísima y transparente</b> de la cara interna de una hoja de cebolla. 2) Se coloca extendida sobre un <b>portaobjetos</b>, una lámina de vidrio rectangular, con una gota de agua. 3) Se añade una gota de un <b>colorante</b>, como el azul de metileno, para que se distingan mejor el núcleo y la pared, se espera un minuto y se lava el sobrante. 4) Se cubre con un <b>cubreobjetos</b>, un cristal muy fino, bajándolo inclinado para que no queden burbujas. 5) Se observa siempre <b>empezando por el objetivo de menos aumentos</b>, se enfoca con el macrométrico y después se pasa a más aumento y se ajusta con el micrométrico. Se verán células alargadas, ordenadas como ladrillos, con su pared y un núcleo bien visible. Las normas de seguridad son importantes: manejar el vidrio con cuidado, no tocar las lentes con los dedos y llevar el microscopio con las dos manos.</p>`,
    },
  ],
  figura: {
    titulo: "La célula en ocho ideas",
    svg: rejilla([
      ["Teoría celular", "todo ser vivo tiene células", COL.azul],
      ["Membrana", "controla qué entra y sale", COL.rojo],
      ["Citoplasma", "medio con orgánulos", COL.agua],
      ["ADN", "las instrucciones", COL.morado],
      ["Procariota", "sin núcleo: bacterias", COL.gris],
      ["Eucariota", "con núcleo y orgánulos", COL.naranja],
      ["Vegetal", "pared y cloroplastos", COL.verde],
      ["Microscopio", "ocular × objetivo", COL.marron],
    ], 4, 86, "Resumen: teoría celular, partes de la célula, tipos de células y microscopio"),
  },
  video: { id: "Ps54eXe8YHY", titulo: "La célula y sus partes. Vídeos educativos para niños.", canal: "Happy Learning Español", vistas: 4576549, megusta: 0, busqueda: "la célula animal y vegetal partes" },
  ejemplos: [
    { enunciado: "Observas una muestra con un ocular de 10× y el objetivo de 40×. ¿Cuántos aumentos tiene la imagen? Si una célula se ve de 20 mm, ¿cuánto mide de verdad?",
      pasos: ["Aumento total: 10 · 40 = 400 aumentos.", "Tamaño real = tamaño de la imagen ÷ aumentos = 20 mm ÷ 400 = 0,05 mm.", "0,05 mm = 50 micrómetros."],
      resultado: "400 aumentos; la célula mide 0,05 mm (50 µm)." },
    { enunciado: "Una célula tiene pared celular, núcleo y cloroplastos. ¿Es procariota o eucariota? ¿Animal o vegetal?",
      pasos: ["Tiene núcleo: es eucariota.", "Tiene cloroplastos y pared: es vegetal (o de un alga)."],
      resultado: "Eucariota vegetal." },
    { enunciado: "Una célula tiene pared celular, ribosomas y ADN libre en el citoplasma, pero no tiene núcleo ni mitocondrias. ¿Qué tipo de célula es?",
      pasos: ["No tiene núcleo: es procariota.", "Las procariotas con pared y flagelo, como esta, son bacterias."],
      resultado: "Procariota: una bacteria." },
  ],
  errores: [
    "Decir que las plantas no tienen mitocondrias: las tienen, igual que los animales.",
    "Pensar que las bacterias tienen núcleo: son procariotas.",
    "Confundir la pared celular (vegetal, rígida) con la membrana (todas las células).",
    "Enfocar directamente con el objetivo de más aumentos y romper el portaobjetos.",
    "Sumar los aumentos del ocular y el objetivo en lugar de multiplicarlos.",
  ],
  ejercicios: [
    { q: "¿Quién usó por primera vez la palabra «célula» y qué observó?", sol: "Robert Hooke, en 1665, al observar una lámina de corcho." },
    { q: "Escribe los principios de la teoría celular.", sol: "Todos los seres vivos están formados por células; la célula es la unidad estructural y funcional; toda célula procede de otra; contiene la información hereditaria." },
    { q: "¿Qué aportó Santiago Ramón y Cajal?", sol: "Demostró que el sistema nervioso está formado por células independientes, las neuronas." },
    { q: "Nombra las tres partes comunes a todas las células y su función.", sol: "Membrana (controla lo que entra y sale), citoplasma (medio donde están los orgánulos) y ADN (instrucciones de la célula)." },
    { q: "¿Cuál es la principal diferencia entre una célula procariota y una eucariota?", sol: "La eucariota tiene núcleo; la procariota no, y su ADN está libre en el citoplasma." },
    { q: "¿Qué función tienen las mitocondrias? ¿Y los cloroplastos?", sol: "Las mitocondrias obtienen energía (respiración celular); los cloroplastos hacen la fotosíntesis." },
    { q: "Escribe tres diferencias entre la célula animal y la vegetal.", sol: "La vegetal tiene pared celular, cloroplastos y una vacuola grande; la animal no tiene pared ni cloroplastos y tiene centrosoma." },
    { q: "¿Qué ventaja y qué inconveniente tiene que las células de un ser pluricelular se especialicen?", sol: "Ventaja: cada una hace muy bien su tarea; inconveniente: ya no pueden vivir solas." },
    { q: "¿Para qué sirven los tornillos macrométrico y micrométrico?", sol: "Para enfocar: el macrométrico de forma rápida y el micrométrico con precisión." },
    { q: "¿Por qué se añade azul de metileno a una preparación?", sol: "Para teñir y distinguir mejor estructuras como el núcleo." },
  ],
  quiz: [
    { q: "Las células se descubrieron gracias al…", o: ["telescopio", "microscopio", "termómetro"], a: 1, e: "Microscopio." },
    { q: "Toda célula procede de…", o: ["otra célula", "la materia inerte", "un virus"], a: 0, e: "De otra célula." },
    { q: "La parte que controla lo que entra y sale es la…", o: ["membrana", "vacuola", "pared"], a: 0, e: "Membrana plasmática." },
    { q: "Las bacterias son células…", o: ["eucariotas", "procariotas", "vegetales"], a: 1, e: "Procariotas." },
    { q: "Las «centrales de energía» de la célula son…", o: ["los cloroplastos", "las mitocondrias", "los ribosomas"], a: 1, e: "Mitocondrias." },
    { q: "Los cloroplastos están en las células…", o: ["animales", "vegetales", "de todas las bacterias"], a: 1, e: "Vegetales y algas." },
    { q: "La pared celular de las plantas es de…", o: ["celulosa", "proteína", "calcio"], a: 0, e: "Celulosa." },
    { q: "Un paramecio es un ser…", o: ["unicelular", "pluricelular", "inerte"], a: 0, e: "Unicelular." },
    { q: "Con un ocular de 10× y un objetivo de 10× se obtienen…", o: ["20 aumentos", "100 aumentos", "1.000 aumentos"], a: 1, e: "10 · 10 = 100." },
    { q: "La muestra se coloca en la…", o: ["platina", "ocular", "revólver"], a: 0, e: "Platina." },
  ],
  examen: [
    { q: "El ADN de las eucariotas está en el…", o: ["núcleo", "citoplasma libre", "pared"], a: 0, e: "Núcleo." },
    { q: "Siempre se empieza a observar con el objetivo…", o: ["de menos aumentos", "de más aumentos", "de inmersión"], a: 0, e: "El de menos aumentos." },
    { q: "Los ribosomas fabrican…", o: ["proteínas", "energía", "celulosa"], a: 0, e: "Proteínas." },
  ],
  feynman: ["Qué dice la teoría celular", "Qué diferencia una célula procariota de una eucariota", "En qué se diferencian la célula animal y la vegetal"],
  mapa: mapa("LA CÉLULA", "var(--eso)", [
    ["Teoría celular", "Hooke · Schwann · Cajal", COL.azul],
    ["Partes", "membrana · citoplasma · ADN", COL.rojo],
    ["Tipos", "procariota · eucariota", COL.morado],
    ["Observación", "microscopio · preparación", COL.verde],
  ], 280),
  tarjetas: [
    ["Teoría celular", "Todo ser vivo está formado por células, que proceden de otras células."],
    ["Membrana plasmática", "Envoltura que controla lo que entra y sale de la célula."],
    ["Célula procariota", "Sin núcleo; ADN libre en el citoplasma. Ej.: bacterias."],
    ["Célula eucariota", "Con núcleo y orgánulos. Ej.: animales y plantas."],
    ["Mitocondria", "Orgánulo que obtiene energía: respiración celular."],
    ["Cloroplasto", "Orgánulo verde de las plantas donde se hace la fotosíntesis."],
    ["Pared celular", "Capa rígida de celulosa de las células vegetales."],
    ["Aumento total", "Aumento del ocular × aumento del objetivo."],
  ],
  familias: ["Observad con una lupa una hoja, la piel de la mano o la sal y comentad qué se ve.", "Haced una maqueta de una célula con gelatina y frutas como orgánulos.", "Buscad juntos imágenes de neuronas, glóbulos rojos y células musculares y comparad sus formas."],
  profesores: {
    saberes: "La célula: teoría celular, estructura básica, células procariotas y eucariotas, animales y vegetales, organismos unicelulares y pluricelulares, uso del microscopio óptico y preparación de muestras (RD 217/2022, Biología y Geología, bloques Proyecto científico y Seres vivos).",
    ideas: ["Práctica de epidermis de cebolla y de mucosa bucal con azul de metileno.", "Comparar a escala el tamaño de una bacteria, una célula y un virus.", "Biografía ilustrada de Ramón y Cajal con sus dibujos de neuronas (dominio público)."],
  },
  fuentes: [RD, wiki("Célula", "Célula"), wiki("Teoría celular", "Teoría_celular"), { t: "Instituto Cajal (CSIC)", url: "https://www.cajal.csic.es/" }],
  revisado: REV,
};
