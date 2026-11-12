// Biología y Geología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "La célula",
  minutos: 40,
  objetivos: ["Enunciar la teoría celular", "Diferenciar células procariotas y eucariotas, animales y vegetales", "Relacionar cada orgánulo con su función"],
  claves: ["teoría celular", "procariota", "eucariota", "núcleo", "mitocondria", "cloroplasto"],
  pregunta: {
    texto: "Tu cuerpo tiene unos 30 billones de células y una bacteria es una sola célula. ¿Qué tienen en común?",
    respuesta: "Todas las células, desde una bacteria hasta una neurona, <mark>nacen de otra célula</mark>, tienen <b>membrana</b>, <b>citoplasma</b> y <b>material genético (ADN)</b>, y realizan las tres funciones vitales: nutrición, relación y reproducción. La célula es la unidad más pequeña que está viva.",
  },
  bloques: [
    {
      html: `<h3>La teoría celular</h3><p>Gracias al microscopio, Hooke vio «celdillas» en el corcho (1665) y Leeuwenhoek observó los primeros microbios. En el siglo XIX, Schleiden, Schwann y Virchow formularon la <b>teoría celular</b>: 1) <mark>todos los seres vivos están formados por células</mark>; 2) la célula es la unidad de estructura y función; 3) <mark>toda célula procede de otra célula</mark>; 4) contiene el material hereditario que pasa a las células hijas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Microscopio óptico y células de corcho como las que vio Hooke">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M50 150 H 110 M80 150 V 130 M66 130 H 94 M84 130 L 70 60 M64 54 L 76 40 L 88 46 L 76 62 Z M60 100 H 100" fill="none" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="185" cy="90" r="58" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <g fill="none" stroke="var(--sun)" stroke-width="2">${[0, 1, 2, 3].map((i) => [0, 1, 2, 3, 4].map((j) => `<rect x="${140 + j * 18 + (i % 2) * 9}" y="${52 + i * 20}" width="17" height="19" rx="2"/>`).join("")).join("")}</g>
        <text x="185" y="166" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>corcho (Hooke, 1665)</text>
      </svg>`,
    },
    {
      html: `<h3>Procariotas y eucariotas</h3><p>Las <b>células procariotas</b> (bacterias) son pequeñas y sencillas: <mark>no tienen núcleo</mark>; su ADN está suelto en el citoplasma, en una zona llamada nucleoide. Tienen pared celular y, a veces, flagelos. Las <b>células eucariotas</b> (animales, plantas, hongos, protistas) son mayores y tienen <mark>un núcleo con membrana</mark> que guarda el ADN, además de muchos orgánulos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Célula procariota pequeña sin núcleo y célula eucariota grande con núcleo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="18" y="66" width="70" height="36" rx="18" fill="var(--leaf)" opacity=".3" stroke="var(--leaf)" stroke-width="2.5"/>
        <path d="M34 84 q 8 -10 16 0 t 16 0" fill="none" stroke="var(--red)" stroke-width="2"/><path d="M88 84 q 12 -8 20 4 t 16 -2" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
        <circle cx="180" cy="84" r="60" fill="var(--pen)" opacity=".15" stroke="var(--pen)" stroke-width="2.5"/>
        <circle cx="180" cy="84" r="22" fill="var(--inf)" opacity=".5" stroke="var(--inf)" stroke-width="2"/>
        <ellipse cx="146" cy="62" rx="12" ry="7" fill="var(--red)" opacity=".7"/><ellipse cx="208" cy="122" rx="12" ry="7" fill="var(--red)" opacity=".7"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="54" y="128" fill="var(--leaf)">procariota</text><text x="54" y="144" font-size="11" fill="var(--muted)">sin núcleo · 1-5 µm</text><text x="180" y="164" fill="var(--pen)">eucariota · con núcleo</text></g>
      </svg>`,
    },
    {
      html: `<h3>La célula animal y la vegetal</h3><p>Las dos son eucariotas, pero la <b>vegetal</b> tiene tres cosas que la animal no tiene: una <mark>pared celular</mark> de celulosa que le da forma rígida, <mark>cloroplastos</mark> para hacer la fotosíntesis y una <b>gran vacuola</b> que almacena agua. La <b>animal</b> tiene forma más variable y <b>centriolos</b>, que intervienen en la división celular.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Célula animal redondeada y célula vegetal rectangular con pared, cloroplastos y gran vacuola">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <ellipse cx="66" cy="84" rx="52" ry="46" fill="var(--red)" opacity=".12" stroke="var(--red)" stroke-width="2.5"/><circle cx="66" cy="84" r="15" fill="var(--inf)" opacity=".6"/>
        <ellipse cx="40" cy="64" rx="9" ry="5" fill="var(--red)" opacity=".7"/><ellipse cx="94" cy="106" rx="9" ry="5" fill="var(--red)" opacity=".7"/>
        <rect x="140" y="30" width="104" height="110" rx="6" fill="var(--leaf)" opacity=".12" stroke="var(--leaf)" stroke-width="6"/>
        <rect x="160" y="52" width="64" height="62" rx="12" fill="var(--water)" opacity=".4"/><circle cx="156" cy="124" r="11" fill="var(--inf)" opacity=".6"/>
        ${[[152, 42], [232, 60], [232, 104], [200, 128]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="8" ry="5" fill="var(--leaf)"/>`).join("")}
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="66" y="156" fill="var(--red)">animal</text><text x="192" y="160" fill="var(--leaf)">vegetal</text><text x="192" y="88" font-size="10" fill="var(--ink)">vacuola</text></g>
      </svg>`,
    },
    {
      html: `<h3>Los orgánulos y sus funciones</h3><p>La <b>membrana plasmática</b> controla qué entra y qué sale. El <b>núcleo</b> guarda el ADN y dirige la célula. Las <mark>mitocondrias</mark> son las «centrales energéticas»: hacen la <b>respiración celular</b>. Los <b>ribosomas</b> fabrican proteínas; el <b>retículo endoplasmático</b> y el <b>aparato de Golgi</b> las transportan y empaquetan. Los <b>lisosomas</b> digieren sustancias y los <mark>cloroplastos</mark> captan la luz para la fotosíntesis.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de una célula eucariota con núcleo, mitocondria, retículo, aparato de Golgi y ribosomas señalados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <ellipse cx="100" cy="90" rx="86" ry="72" fill="var(--pen)" opacity=".1" stroke="var(--pen)" stroke-width="2.5"/>
        <circle cx="100" cy="86" r="24" fill="var(--inf)" opacity=".5" stroke="var(--inf)" stroke-width="2"/><circle cx="104" cy="82" r="7" fill="var(--inf)"/>
        <ellipse cx="160" cy="58" rx="18" ry="9" fill="var(--red)" opacity=".8"/><path d="M146 58 q 5 -6 10 0 t 10 0 t 10 0" fill="none" stroke="#fff" stroke-width="1.5"/>
        <path d="M54 120 q 14 -8 28 0 M56 128 q 14 -8 28 0 M58 136 q 14 -8 28 0" fill="none" stroke="var(--sun)" stroke-width="3"/>
        <path d="M140 112 q 14 6 28 0 M142 120 q 12 6 24 0" fill="none" stroke="var(--leaf)" stroke-width="3"/>
        ${[[70, 60], [76, 54], [138, 92], [64, 102], [150, 140]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.5" fill="var(--ink)"/>`).join("")}
        <g ${F} font-size="11" font-weight="700"><text x="186" y="40" fill="var(--red)">mitocondria</text><text x="190" y="90" fill="var(--inf)">núcleo</text><text x="190" y="124" fill="var(--leaf)">Golgi</text><text x="16" y="166" fill="var(--sun)">retículo</text><text x="190" y="158" fill="var(--ink)">ribosomas</text></g>
      </svg>`,
    },
    {
      html: `<h3>Nutrición celular</h3><p>Las células obtienen energía y materia de dos formas. Las <b>autótrofas</b> (plantas, algas) fabrican su materia orgánica con la <mark>fotosíntesis</mark> en los cloroplastos: CO₂ + H₂O + luz → glucosa + O₂. Todas las células, autótrofas y <b>heterótrofas</b>, usan la <mark>respiración celular</mark> en las mitocondrias para sacar energía de la glucosa: glucosa + O₂ → CO₂ + H₂O + energía (ATP).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo: el cloroplasto produce glucosa y oxígeno y la mitocondria los usa y devuelve dióxido de carbono y agua">
        <defs><marker id="ce1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <ellipse cx="60" cy="90" rx="40" ry="24" fill="var(--leaf)"/><text x="60" y="94" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>cloroplasto</text>
        <ellipse cx="200" cy="90" rx="40" ry="24" fill="var(--red)"/><text x="200" y="94" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>mitocondria</text>
        <path d="M90 66 Q 130 30 170 66" fill="none" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#ce1)"/><path d="M170 114 Q 130 150 90 114" fill="none" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#ce1)"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="130" y="34" fill="var(--ink)">glucosa + O₂</text><text x="130" y="160" fill="var(--ink)">CO₂ + H₂O</text><text x="30" y="40" fill="var(--sun)">☀ luz</text><text x="226" y="40" fill="var(--sun)">ATP</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Tres tipos de célula, cara a cara",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Comparación entre célula procariota, eucariota animal y eucariota vegetal">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Procariota", "sin núcleo · ADN libre", "pared · pocos orgánulos", "bacterias", "var(--leaf)"], ["Animal", "núcleo · mitocondrias", "centriolos · vacuolas pequeñas", "neurona, glóbulo", "var(--red)"], ["Vegetal", "núcleo · mitocondrias", "pared + cloroplastos + vacuola", "hoja, raíz", "var(--pen)"]]
        .map(([n, a, b, ej, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="58" text-anchor="middle" font-size="22" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="102" text-anchor="middle" font-size="14" fill="var(--ink)" ${F}>${a}</text>
          <text x="${115 + i * 206}" y="126" text-anchor="middle" font-size="12" fill="var(--ink)" ${F}>${b}</text>
          <text x="${115 + i * 206}" y="180" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>ejemplo: ${ej}</text>`).join("")}
    </svg>`,
  },
  video: { id: "WQgwaigJlsI", titulo: "La célula: definición, estructura, funciones y partes", canal: "Smile and Learn - Español", vistas: 4918772, megusta: 0, busqueda: "la célula procariota eucariota" },
  quiz: [
    { q: "¿Qué dice la teoría celular sobre el origen de las células?", o: ["Aparecen de la materia inerte", "Toda célula procede de otra célula", "Las fabrica el núcleo"], a: 1, e: "Virchow: «omnis cellula e cellula», toda célula viene de otra célula." },
    { q: "¿Qué diferencia principal tiene una célula procariota?", o: ["No tiene ADN", "No tiene núcleo", "No tiene membrana"], a: 1, e: "Su ADN está libre en el citoplasma, sin membrana nuclear." },
    { q: "¿Qué orgánulo tienen las células vegetales y no las animales?", o: ["Mitocondria", "Cloroplasto", "Ribosoma"], a: 1, e: "Los cloroplastos hacen la fotosíntesis. Las mitocondrias las tienen las dos." },
    { q: "¿Dónde se produce la respiración celular?", o: ["En las mitocondrias", "En el núcleo", "En la pared celular"], a: 0, e: "Las mitocondrias obtienen energía (ATP) de la glucosa con oxígeno." },
    { q: "¿Qué orgánulo fabrica las proteínas?", o: ["Lisosoma", "Ribosoma", "Vacuola"], a: 1, e: "Los ribosomas leen las instrucciones del ARN y unen aminoácidos." },
  ],
  examen: [
    { q: "Las bacterias son…", o: ["eucariotas pluricelulares", "procariotas unicelulares", "virus"], a: 1, e: "Son células procariotas y cada bacteria es un organismo de una sola célula." },
    { q: "¿De qué está hecha la pared celular de las plantas?", o: ["Celulosa", "Quitina", "Proteínas"], a: 0, e: "La celulosa es un glúcido muy resistente. La quitina forma la pared de los hongos." },
    { q: "¿Qué función tiene el aparato de Golgi?", o: ["Hacer la fotosíntesis", "Empaquetar y distribuir sustancias", "Guardar el ADN"], a: 1, e: "Modifica, empaqueta y envía proteínas y lípidos en vesículas." },
  ],
  feynman: ["Los cuatro puntos de la teoría celular", "Las diferencias entre células procariotas y eucariotas", "Lo que tiene la célula vegetal y no la animal", "Qué hacen el núcleo, la mitocondria y el ribosoma", "La relación entre fotosíntesis y respiración celular"],
  mapa: mapa("LA CÉLULA", "var(--eso)", [
    ["Teoría celular", "todo ser vivo · de otra célula", "var(--ink)"],
    ["Procariota", "sin núcleo · bacterias", "var(--leaf)"],
    ["Eucariota", "núcleo · orgánulos", "var(--pen)"],
    ["Funciones", "fotosíntesis · respiración", "var(--red)"],
  ], 250),
  tarjetas: [
    ["¿Qué es una célula procariota?", "Una célula sin núcleo definido; su ADN está libre en el citoplasma. Ejemplo: bacterias."],
    ["Función de la mitocondria", "Realizar la respiración celular y obtener energía (ATP)."],
    ["Tres estructuras exclusivas de la célula vegetal", "Pared celular de celulosa, cloroplastos y una gran vacuola central."],
    ["¿Quién vio por primera vez las «células»?", "Robert Hooke, en 1665, en una lámina de corcho."],
    ["Ecuación de la fotosíntesis", "CO₂ + H₂O + luz → glucosa + O₂."],
  ],
  familias: ["Pelad una capa fina de cebolla y miradla al trasluz o con una lupa: se ven las celdillas.", "Comparad una célula con una fábrica: ¿quién es el director, la central eléctrica y el almacén?", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La célula: teoría celular, tipos de células, orgánulos y sus funciones, y observación al microscopio (RD 217/2022, Biología y Geología 4º).",
    ideas: ["Preparación de epidermis de cebolla y de mucosa bucal con azul de metileno.", "Maqueta de célula con materiales cotidianos y leyenda de funciones.", "Comparar tamaños celulares con una escala logarítmica en el aula."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Célula, Wikipedia en español", url: "https://es.wikipedia.org/wiki/C%C3%A9lula" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Explicar cómo entran y salen las sustancias de la célula", "Comparar la respiración celular y la fotosíntesis"],
  tras: {
    "La teoría celular": [
      { html: `<h3>El microscopio y el tamaño de las células</h3><p>La mayoría de las células miden entre 10 y 100 <b>micrómetros</b> (µm; 1 µm es la milésima parte de un milímetro), así que no se ven a simple vista. Robert Hooke las observó por primera vez en 1665 en un trozo de corcho, y Anton van Leeuwenhoek vio microbios vivos con lentes que él mismo pulía. El <b>microscopio óptico</b> usa luz y lentes y aumenta hasta unas 1.000 veces: basta para ver células y su núcleo. El <b>microscopio electrónico</b> usa electrones y aumenta cientos de miles de veces: permite ver los orgánulos por dentro y los virus. Los aumentos totales de un microscopio óptico se calculan <mark>multiplicando los del ocular por los del objetivo</mark>: 10 × 40 = 400 aumentos.</p>` },
    ],
    "Los orgánulos y sus funciones": [
      { html: `<h3>La membrana plasmática y el transporte</h3><p>La <b>membrana plasmática</b> es una doble capa de lípidos con proteínas incrustadas que rodea la célula y <mark>decide qué entra y qué sale</mark>: es semipermeable. En el <b>transporte pasivo</b> las sustancias pasan sin gasto de energía, desde donde hay más concentración hacia donde hay menos: así entran el oxígeno y el agua (la difusión del agua se llama <b>ósmosis</b>). En el <b>transporte activo</b>, unas proteínas «bomba» mueven sustancias en contra de su concentración, gastando energía (ATP). Las partículas grandes entran envueltas en un trozo de membrana (<b>endocitosis</b>) o salen así (<b>exocitosis</b>). La ósmosis explica que una lechuga aliñada con sal se arrugue: pierde agua.</p>`, video: { id: "yzkohlVwaB8", titulo: "Transporte activo y pasivo en la membrana plasmática", canal: "Random HD", vistas: 1517103 } },
    ],
    "Nutrición celular": [
      { html: `<h3>Respiración celular y fotosíntesis</h3><p>Las células obtienen la energía que necesitan con la <b>respiración celular</b>, que ocurre en las <b>mitocondrias</b>: la glucosa se combina con oxígeno y se transforma en CO₂ y agua, liberando energía que se guarda en moléculas de <b>ATP</b>, la «moneda energética» de la célula. Las células vegetales, además, hacen la <b>fotosíntesis</b> en los <b>cloroplastos</b>: con la energía de la luz fabrican glucosa a partir de CO₂ y agua, y liberan oxígeno. Son procesos <mark>opuestos y complementarios</mark>: lo que produce uno lo usa el otro. Las plantas también respiran, de día y de noche, pero de día hacen más fotosíntesis que respiración.</p>${AMP.tabla(["", "Fotosíntesis", "Respiración celular"], [["Dónde", "cloroplastos", "mitocondrias"], ["Quién", "plantas, algas, cianobacterias", "casi todos los seres vivos"], ["Toma", "CO₂ + agua + luz", "glucosa + O₂"], ["Produce", "glucosa + O₂", "CO₂ + agua + energía (ATP)"]])}`, video: { id: "eJ9Zjc-jdys", titulo: "Respiración celular", canal: "Amoeba Sisters", vistas: 8094159 } },
      { html: `<h3>Organismos unicelulares y pluricelulares</h3><p>Algunos seres vivos son una sola célula que hace todas las funciones: bacterias, muchas algas, protozoos como el paramecio o levaduras. Los <b>pluricelulares</b>, como nosotros, están formados por billones de células que se <b>especializan</b>: se reparten el trabajo y dependen unas de otras. Las células del mismo tipo forman <b>tejidos</b> (muscular, nervioso, epitelial), varios tejidos forman <b>órganos</b> (corazón, hoja) y varios órganos, <b>sistemas</b> o aparatos. Todas nuestras células tienen el mismo ADN, pero cada tipo <mark>usa solo una parte de sus genes</mark>: por eso una neurona y un glóbulo rojo son tan distintos.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Observas una célula con un ocular de 10× y un objetivo de 40×. En la imagen mide 4 mm. ¿Cuál es su tamaño real?", pasos: ["Aumentos totales = 10 · 40 = 400.", "Tamaño real = tamaño en la imagen / aumentos = 4 mm / 400 = 0,01 mm.", "0,01 mm = 10 µm."], resultado: "La célula mide 10 µm." },
    { enunciado: "Una célula tiene núcleo, mitocondrias, pared celular, cloroplastos y una gran vacuola. ¿Qué tipo de célula es?", pasos: ["Tiene núcleo: es eucariota.", "Tiene pared celular, cloroplastos y una vacuola grande: rasgos de las células vegetales.", "Las animales no tienen pared ni cloroplastos."], resultado: "Es una célula eucariota vegetal." },
    { enunciado: "Se ponen glóbulos rojos en agua destilada y en agua muy salada. Predice qué pasa.", pasos: ["En agua destilada hay más agua fuera que dentro: el agua entra por ósmosis y la célula se hincha hasta poder romperse.", "En agua muy salada hay menos agua fuera: el agua sale y la célula se arruga.", "Por eso los sueros médicos tienen la misma concentración de sales que la sangre."], resultado: "En agua destilada se hinchan; en agua salada se arrugan." },
  ],
  errores: [
    "Pensar que las plantas no respiran: respiran siempre, de día y de noche.",
    "Decir que las bacterias tienen núcleo: son procariotas y su ADN está libre en el citoplasma.",
    "Confundir pared celular (solo vegetales, hongos y bacterias) con membrana plasmática (todas las células).",
    "Creer que los virus son células: no tienen metabolismo propio y necesitan una célula para reproducirse.",
    "Pensar que la fotosíntesis produce energía de la nada: transforma la energía de la luz en energía química.",
  ],
  ejercicios: [
    { q: "Enuncia los tres puntos principales de la teoría celular.", sol: "Todos los seres vivos están formados por células; la célula es la unidad de estructura y función de los seres vivos; toda célula procede de otra célula." },
    { q: "Indica tres diferencias entre una célula procariota y una eucariota.", sol: "La procariota no tiene núcleo (el ADN está libre), no tiene orgánulos con membrana y es más pequeña. La eucariota tiene núcleo, orgánulos como mitocondrias y suele ser mayor." },
    { q: "¿Qué orgánulo esperas encontrar en abundancia en una célula muscular? ¿Por qué?", sol: "Mitocondrias, porque el músculo necesita mucha energía y la obtiene con la respiración celular." },
    { q: "Calcula los aumentos de un microscopio con ocular 15× y objetivo 100×.", sol: "15 · 100 = 1.500 aumentos." },
    { q: "Escribe la ecuación general de la respiración celular.", sol: "Glucosa + oxígeno → dióxido de carbono + agua + energía (ATP)." },
    { q: "¿Por qué las fresas con azúcar sueltan jugo?", sol: "El azúcar crea fuera de las células una concentración mayor y el agua sale de ellas por ósmosis." },
    { q: "¿En qué se diferencian el transporte activo y el pasivo?", sol: "El pasivo va a favor de la concentración y no gasta energía; el activo va en contra y gasta ATP." },
    { q: "Ordena de menor a mayor complejidad: órgano, célula, sistema, tejido.", sol: "Célula < tejido < órgano < sistema." },
    { q: "Si todas nuestras células tienen el mismo ADN, ¿por qué una neurona es distinta de una célula de la piel?", sol: "Porque cada tipo celular activa solo una parte de sus genes; esa expresión diferente da lugar a células especializadas." },
    { q: "Explica la relación entre fotosíntesis y respiración en un ecosistema.", sol: "La fotosíntesis produce glucosa y oxígeno, que usan los seres vivos para respirar; la respiración devuelve CO₂ y agua, que usan las plantas para la fotosíntesis. Forman un ciclo de materia." },
  ],
  quiz: [
    { q: "Con un ocular de 10× y un objetivo de 40× se obtienen…", o: ["50 aumentos", "400 aumentos", "4.000 aumentos"], a: 1, e: "Se multiplican." },
    { q: "La ósmosis es el paso de… a través de la membrana.", o: ["agua", "glucosa", "proteínas"], a: 0, e: "Del lado con más agua al que tiene menos." },
    { q: "La respiración celular ocurre en…", o: ["los cloroplastos", "las mitocondrias", "el núcleo"], a: 1, e: "Allí se produce el ATP." },
    { q: "Las plantas respiran…", o: ["solo de noche", "de día y de noche", "nunca"], a: 1, e: "Necesitan energía siempre." },
    { q: "Un conjunto de células del mismo tipo que hacen la misma función es…", o: ["un órgano", "un tejido", "un sistema"], a: 1, e: "Por ejemplo, el tejido muscular." },
  ],
  tarjetas: [
    ["Ósmosis", "Paso de agua a través de una membrana semipermeable hacia donde hay más solutos."],
    ["ATP", "Molécula que almacena y transporta la energía en la célula."],
    ["Niveles de organización", "Célula, tejido, órgano, sistema y organismo."],
  ],
});
