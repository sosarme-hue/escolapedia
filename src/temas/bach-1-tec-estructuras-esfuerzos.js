// Tecnología e Ingeniería I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L3");

// Viga horizontal con apoyos en los extremos.
const viga = (x1, x2, y) => `<rect x="${x1}" y="${y}" width="${x2 - x1}" height="12" rx="2" fill="var(--pen)" opacity=".85"/>
  <path d="M${x1 + 6} ${y + 12} l -10 16 h 20 z" fill="var(--muted)"/><path d="M${x2 - 6} ${y + 12} l -10 16 h 20 z" fill="var(--muted)"/>
  <circle cx="${x2 - 10}" cy="${y + 32}" r="3" fill="var(--muted)"/><circle cx="${x2 - 2}" cy="${y + 32}" r="3" fill="var(--muted)"/>`;
const flechaV = (x, y1, y2, c) => `<path d="M${x} ${y1} V ${y2}" stroke="${c}" stroke-width="3"/><path d="M${x - 6} ${y2 + (y2 > y1 ? -9 : 9)} L ${x} ${y2} L ${x + 6} ${y2 + (y2 > y1 ? -9 : 9)}" fill="none" stroke="${c}" stroke-width="3"/>`;

module.exports = B.tema({
  titulo: "Estructuras y esfuerzos",
  minutos: 115,
  objetivos: [
    "Identificar las cargas y los esfuerzos (tracción, compresión, flexión, cortadura, torsión y pandeo) en elementos estructurales",
    "Aplicar las condiciones de equilibrio para calcular reacciones en vigas isostáticas",
    "Resolver celosías sencillas por el método de los nudos",
    "Dimensionar barras y vigas comprobando la tensión admisible",
  ],
  claves: ["carga", "esfuerzo", "momento", "equilibrio", "apoyo", "reacción", "viga", "momento flector", "celosía", "pandeo", "coeficiente de seguridad"],
  pregunta: {
    texto: "Una hoja de papel no aguanta ni un lápiz. Doblada en zigzag, aguanta un libro. ¿Qué ha cambiado, si el material es el mismo?",
    respuesta: "Ha cambiado la <mark>forma</mark>. Al plegarla, el material se aleja de la línea central y la hoja resiste mucho mejor la <b>flexión</b>: aumenta su módulo resistente. Las estructuras funcionan así: no basta con un material resistente; la forma y la colocación de cada pieza deciden qué <b>esfuerzos</b> soporta y cuánta carga aguanta.",
  },
  lectura: {
    titulo: "La torre que se mueve",
    html: `<p>En un día de viento fuerte, la punta de un rascacielos de 300 metros puede desplazarse más de medio metro. Sus ocupantes casi no lo notan, porque los ingenieros lo calcularon. Muchos edificios altos esconden en sus últimas plantas un enorme péndulo de cientos de toneladas que se mueve en sentido contrario y amortigua las oscilaciones.</p>
    <p>Cada estructura, desde una silla hasta un puente colgante, es un camino por el que las cargas viajan hasta el suelo. El peso de las personas pasa al forjado, del forjado a las vigas, de las vigas a los pilares y de los pilares a la cimentación. En ese recorrido, cada pieza se estira, se acorta, se dobla o se retuerce un poco. Si alguna no soporta el esfuerzo que le llega, la cadena se rompe.</p>
    <p>La historia de la ingeniería está llena de puentes que cayeron por un viento inesperado, por fatiga o por un tornillo mal calculado, y de cada accidente se aprendió algo. Hoy esas lecciones están en las normas y en unas pocas ecuaciones de equilibrio que vas a aprender en este tema y que permiten predecir cómo se comportará una estructura antes de construirla.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Estructuras y cargas",
      html: `<p>Una <b>estructura</b> es un conjunto de elementos unidos entre sí que soporta cargas y las transmite a los apoyos <mark>sin romperse ni deformarse en exceso</mark>, manteniendo su forma. Debe cumplir tres condiciones: ser <b>resistente</b> (no romperse), <b>rígida</b> (deformarse poco) y <b>estable</b> (no volcar ni desplazarse).</p>
      <p>Las <b>cargas</b> o acciones que actúan sobre una estructura se clasifican:</p>
      <ul><li>Según su duración: <b>permanentes</b> (el peso propio, los tabiques) y <b>variables</b> (personas, muebles, nieve, viento, vehículos).</li>
      <li>Según su variación en el tiempo: <b>estáticas</b>, que actúan de forma constante o lenta, y <b>dinámicas</b>, que cambian rápidamente (impactos, vibraciones de máquinas, terremotos).</li>
      <li>Según su distribución: <b>puntuales</b> o concentradas, aplicadas en un punto (en kN), y <b>distribuidas</b>, repartidas a lo largo de una longitud (en kN/m) o de una superficie (en kN/m²).</li></ul>
      <p>Las normas de edificación, como el Código Técnico de la Edificación en España, fijan los valores de cálculo: por ejemplo, 2 kN/m² de sobrecarga en una vivienda o 5 kN/m² en una zona de aglomeración de personas. Las cargas se multiplican además por <b>coeficientes de mayoración</b> para tener un margen de seguridad.</p>`,
      svg: B.cajas("Clasificación de las cargas", [["Permanentes", "peso propio|tabiques"], ["Variables", "personas, nieve|viento"], ["Puntuales", "en un punto|kN"], ["Distribuidas", "a lo largo|kN/m"]], { t: "Tipos de cargas" }),
    },
    {
      h: "Los esfuerzos simples",
      html: `<p>Cuando una carga actúa sobre una pieza, en su interior aparecen fuerzas que se oponen a la deformación: los <b>esfuerzos</b>. Hay seis tipos básicos:</p>
      <ul><li><b>Tracción</b>: dos fuerzas opuestas tienden a <b>estirar</b> la pieza. Cables, tirantes, cadenas.</li>
      <li><b>Compresión</b>: tienden a <b>acortarla</b> o aplastarla. Pilares, patas de una mesa.</li>
      <li><b>Flexión</b>: las cargas perpendiculares al eje tienden a <b>curvar</b> la pieza. En una viga flexionada, las fibras superiores se comprimen y las inferiores se traccionan; en el centro hay una <b>fibra neutra</b> que no cambia de longitud.</li>
      <li><b>Cortadura</b> o cizalladura: dos fuerzas paralelas muy próximas y opuestas tienden a <b>cortar</b> la pieza, como unas tijeras. Remaches, pasadores, tornillos.</li>
      <li><b>Torsión</b>: un par de fuerzas tiende a <b>retorcer</b> la pieza alrededor de su eje. Ejes de motores, llaves.</li>
      <li><b>Pandeo</b>: una pieza larga y esbelta comprimida se <b>curva lateralmente</b> de forma brusca, con una carga mucho menor que la que la rompería a compresión.</li></ul>
      <p>Normalmente, una pieza soporta varios esfuerzos a la vez: un eje de transmisión sufre torsión y flexión, y una barra de un andamio, compresión y pandeo. A esa combinación se le llama <b>esfuerzo compuesto</b>.</p>`,
      svg: B.cajas("Esfuerzos simples con su efecto", [["Tracción", "estira"], ["Compresión", "acorta"], ["Flexión", "curva"], ["Cortadura", "corta"], ["Torsión", "retuerce"], ["Pandeo", "se dobla de lado"]], { t: "Los seis esfuerzos", cols: 3 }),
    },
    {
      h: "Fuerzas y momentos",
      html: `<p>Para calcular estructuras se usa la <b>estática</b>, la parte de la mecánica que estudia los cuerpos en equilibrio. Una <b>fuerza</b> es un vector: tiene módulo (en newtons), dirección, sentido y punto de aplicación. En el plano se descompone en dos componentes perpendiculares:</p>
      <div class="formula"><span>Fx = F · cos α   ·   Fy = F · sen α</span></div>
      <p>Una fuerza puede, además de empujar, <b>hacer girar</b> un cuerpo. Esa capacidad se mide con el <b>momento</b> de la fuerza respecto a un punto O:</p>
      <div class="formula"><span>M = F · d</span></div>
      <p>donde d es la <b>distancia perpendicular</b> desde O hasta la línea de acción de la fuerza (el brazo). Se mide en N·m o kN·m. Por convenio, se suele considerar positivo el momento que hace girar en sentido antihorario y negativo el horario, aunque lo importante es ser coherente en todo el cálculo.</p>
      <p>Por eso es más fácil abrir una puerta empujando lejos de las bisagras: con la misma fuerza, el brazo es mayor y el momento también. Una fuerza cuya línea de acción pasa por el punto O no produce momento respecto a él, porque su brazo es cero. Dos fuerzas iguales, paralelas y de sentidos opuestos forman un <b>par</b>, que solo produce giro: así actúa el volante de un coche.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Llave que gira una tuerca: fuerza F y brazo d producen el momento M igual a F por d">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Momento de una fuerza", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <circle cx="54" cy="100" r="18" fill="var(--muted)"/><circle cx="54" cy="100" r="6" fill="var(--paper)"/>
        <rect x="54" y="92" width="150" height="16" rx="8" fill="var(--pen)" opacity=".85"/>
        ${flechaV(196, 44, 90, "var(--red)")}${B.tx(214, 58, "F", { fs: 14, maxW: 20, bold: true, color: "var(--red)" })}
        <path d="M54 130 H 196 M54 124 V 136 M196 124 V 136" stroke="var(--leaf)" stroke-width="2"/>${B.tx(125, 148, "d (brazo)", { fs: 11.5, maxW: 90, bold: true, color: "var(--leaf)" })}
        <path d="M30 76 a 32 32 0 0 1 40 -6" fill="none" stroke="var(--sun)" stroke-width="2.5"/>${B.tx(40, 62, "M", { fs: 13, maxW: 20, bold: true, color: "var(--sun)" })}
        ${B.tx(130, 170, "M = F · d", { fs: 14, maxW: 120, bold: true })}
      </svg>`,
    },
    {
      h: "Condiciones de equilibrio",
      html: `<p>Una estructura está en <b>equilibrio estático</b> cuando no se traslada ni gira. En el plano, eso exige que se cumplan tres ecuaciones:</p>
      <div class="formula"><span>ΣFx = 0   ·   ΣFy = 0   ·   ΣM = 0</span></div>
      <p>La suma de las fuerzas horizontales debe ser cero (no se desplaza a los lados), la de las verticales también (no sube ni baja) y la suma de los momentos respecto a <mark>cualquier punto</mark> debe ser nula (no gira).</p>
      <p>El procedimiento para resolver un problema de estática es siempre el mismo:</p>
      <ol><li>Dibujar el <b>diagrama de sólido libre</b>: la pieza aislada con todas las fuerzas que actúan sobre ella, incluidas las reacciones de los apoyos como incógnitas.</li>
      <li>Elegir unos ejes y un criterio de signos.</li>
      <li>Plantear las ecuaciones. Conviene tomar momentos respecto al punto donde hay más incógnitas, porque así desaparecen de la ecuación.</li>
      <li>Resolver y comprobar con la ecuación que no se ha usado.</li></ol>
      <p>Con tres ecuaciones se pueden calcular como máximo tres incógnitas. Si una estructura tiene exactamente las reacciones necesarias se llama <b>isostática</b>; si tiene más, <b>hiperestática</b> (más segura, pero se calcula con métodos que incluyen las deformaciones), y si tiene menos, es un <b>mecanismo</b> y se mueve.</p>`,
      svg: B.flujo("Procedimiento para resolver un problema de equilibrio", ["Diagrama de sólido libre", "Ejes y signos", "ΣM = 0 en un apoyo", "ΣFy = 0 y ΣFx = 0", "Comprobar"], { t: "Resolver el equilibrio" }),
    },
    {
      h: "Apoyos y reacciones",
      html: `<p>Los <b>apoyos</b> o vínculos unen la estructura con el suelo o con otras piezas. Al impedir ciertos movimientos, ejercen fuerzas llamadas <b>reacciones</b>. Hay tres tipos básicos en el plano:</p>
      <ul><li><b>Apoyo simple o deslizante</b> (rodillo): impide solo el movimiento perpendicular a la superficie. Tiene <b>una reacción</b>, normalmente vertical. Permite que la viga se dilate.</li>
      <li><b>Apoyo articulado fijo</b> (articulación): impide los desplazamientos pero permite el giro. Tiene <b>dos reacciones</b>, horizontal y vertical.</li>
      <li><b>Empotramiento</b>: impide desplazamientos y giro. Tiene <b>tres reacciones</b>: horizontal, vertical y un momento. Es el caso de un balcón o una ménsula.</li></ul>
      <p>Una viga con una articulación en un extremo y un apoyo simple en el otro (<b>viga biapoyada</b>) tiene tres reacciones, igual que una viga en voladizo empotrada: ambas son isostáticas.</p>
      <p>Para una viga biapoyada de longitud L con una carga puntual P a una distancia a del apoyo A, tomando momentos en A se obtiene la reacción en B, y con la suma de fuerzas verticales, la de A:</p>
      <div class="formula"><span>R_B = P · a / L   ·   R_A = P − R_B</span></div>
      <p>Una carga distribuida uniforme q (kN/m) a lo largo de una longitud c equivale a una carga puntual <b>q · c</b> aplicada en su centro.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Viga biapoyada de longitud L con una carga P a distancia a del apoyo A y las reacciones RA y RB">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Viga biapoyada", { fs: 13, maxW: 236, bold: true, font: B.D })}
        ${viga(30, 230, 78)}${flechaV(100, 36, 76, "var(--red)")}${B.tx(114, 48, "P", { fs: 14, maxW: 20, bold: true, color: "var(--red)" })}
        ${flechaV(36, 150, 116, "var(--leaf)")}${flechaV(224, 150, 116, "var(--leaf)")}
        ${B.tx(50, 162, "R_A", { fs: 12, maxW: 30, bold: true, color: "var(--leaf)" })}${B.tx(206, 162, "R_B", { fs: 12, maxW: 30, bold: true, color: "var(--leaf)" })}
        <path d="M36 68 H 100" stroke="var(--sun)" stroke-width="1.5"/>${B.tx(68, 64, "a", { fs: 12, maxW: 14, bold: true, color: "var(--sun)" })}
        <path d="M60 172 H 200" stroke="var(--muted)" stroke-width="1.5"/>${B.tx(130, 168, "L", { fs: 12, maxW: 14, bold: true, color: "var(--muted)" })}
      </svg>`,
      video: { id: "4ttCslUZ2Kk", titulo: "Cálculo de reacciones en apoyos", canal: "CuentaConCharly", vistas: 282107 },
    },
    {
      h: "Esfuerzo cortante y momento flector",
      html: `<p>Una vez conocidas las reacciones, interesa saber qué esfuerzos soporta la viga en cada sección. Si se corta imaginariamente la viga en un punto x, para que cada trozo siga en equilibrio deben actuar en el corte dos esfuerzos internos:</p>
      <ul><li><b>Esfuerzo cortante V</b>: suma de las fuerzas verticales a un lado del corte. Tiende a deslizar una parte respecto a la otra.</li>
      <li><b>Momento flector M</b>: suma de los momentos de las fuerzas a un lado del corte, respecto al corte. Es el que curva la viga.</li></ul>
      <p>Representando V y M a lo largo de la viga se obtienen los <b>diagramas de esfuerzos</b>. Con una carga puntual, el cortante es constante a trozos y cambia de signo bajo la carga; el momento varía linealmente y es <mark>máximo justo donde el cortante cambia de signo</mark>. Para una viga biapoyada con la carga P en el centro:</p>
      <div class="formula"><span>M_máx = P · L / 4</span></div>
      <p>Y con una carga uniforme q en toda la luz, el diagrama de momentos es una parábola con el máximo en el centro:</p>
      <div class="formula"><span>M_máx = q · L² / 8</span></div>
      <p>El punto de momento máximo es la <b>sección crítica</b>, donde se comprueba la resistencia a flexión. Por eso las vigas suelen romperse cerca del centro y los voladizos, junto al empotramiento.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Viga con carga central y su diagrama de momento flector triangular con máximo P por L entre cuatro">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${viga(30, 230, 40)}${flechaV(130, 8, 38, "var(--red)")}
        <path d="M36 110 H 224" stroke="var(--ink)" stroke-width="1.5"/>
        <path d="M36 110 L 130 160 L 224 110 Z" fill="var(--sun)" fill-opacity=".35" stroke="var(--sun)" stroke-width="2.5"/>
        ${B.tx(130, 104, "M_máx = P·L/4", { fs: 12, maxW: 120, bold: true, color: "var(--sun)" })}${B.tx(232, 128, "M", { fs: 12, maxW: 16, bold: true, color: "var(--sun)" })}
      </svg>`,
    },
    {
      h: "Flexión: tensión y módulo resistente",
      html: `<p>En una sección sometida a un momento flector M, las tensiones normales no son uniformes: son nulas en la fibra neutra y máximas en las fibras más alejadas, una a tracción y otra a compresión. La tensión máxima se calcula con:</p>
      <div class="formula"><span>σ_máx = M / W</span></div>
      <p>W es el <b>módulo resistente</b> de la sección (en mm³ o cm³), que depende de su forma y su orientación. Para una sección rectangular de ancho b y canto h, con la carga en la dirección de h:</p>
      <div class="formula"><span>W = b · h² / 6</span></div>
      <p>El canto aparece <mark>al cuadrado</mark>: una tabla de 2 × 10 cm colocada de canto resiste cinco veces más que tumbada. Por eso las vigas son más altas que anchas, y por eso la hoja de papel plegada aguanta mucho más.</p>
      <p>Los perfiles metálicos normalizados (IPE, HEB, UPN) concentran el material lejos de la fibra neutra, en las <b>alas</b>, y lo unen con un <b>alma</b> fina: consiguen un W muy grande con poco peso. Sus valores se leen en tablas: por ejemplo, un IPE 200 tiene W ≈ 194 cm³. Para dimensionar una viga se calcula el W necesario como W ≥ M_máx / σ_adm y se elige el perfil cuyo W lo supera.</p>`,
      svg: B.comparar("Tabla tumbada frente a tabla de canto", ["Tumbada", ["b = 10, h = 2", "W = 10·4/6", "W = 6,7 cm³", "se dobla"]], ["De canto", ["b = 2, h = 10", "W = 2·100/6", "W = 33,3 cm³", "5 veces más"]]),
      video: { id: "BPWnzjQR2Dg", titulo: "Esfuerzo de flexión pura: flexión en vigas", canal: "Ingeniosos", vistas: 111761 },
    },
    {
      h: "Dimensionado a tracción, compresión y cortadura",
      html: `<p><b>Dimensionar</b> es calcular el tamaño mínimo de una pieza para que soporte las cargas con seguridad. El criterio básico es que la tensión de trabajo no supere la <b>tensión admisible</b>:</p>
      <div class="formula"><span>σ = F / S ≤ σ_adm = σₑ / n</span></div>
      <p>donde σₑ es el límite elástico y n el <b>coeficiente de seguridad</b> (entre 1,5 y 4 según la incertidumbre de las cargas, la calidad del material y las consecuencias de un fallo). Así, la sección mínima es S ≥ F / σ_adm.</p>
      <p>En <b>compresión</b> se usa la misma fórmula si la pieza es corta y gruesa; si es esbelta, hay que comprobar además el pandeo.</p>
      <p>En la <b>cortadura</b>, la tensión es tangencial y se reparte en la sección cortada: τ = F / S. En un remache o pasador que trabaja a cortadura doble (la pieza central tira entre dos placas), se cortan dos secciones y τ = F / (2S). La tensión admisible a cortadura suele tomarse como un 60 % de la de tracción.</p>
      <p>En <b>torsión</b>, el esfuerzo lo produce un <b>momento torsor</b> Mt = F · d. En un eje macizo de diámetro D la tensión tangencial máxima, en la superficie, es τ = 16 · Mt / (π · D³).</p>`,
      svg: B.flujo("Pasos para dimensionar una barra a tracción", ["Carga F (en N)", "σ_adm = σₑ / n", "S ≥ F / σ_adm", "Diámetro d = √(4S/π)", "Elegir medida comercial"], { t: "Dimensionar una barra" }),
    },
    {
      h: "El pandeo",
      html: `<p>Si se aprieta una regla de plástico por sus extremos, no se aplasta: de repente se curva hacia un lado. Ese fenómeno es el <b>pandeo</b>, una inestabilidad que afecta a las piezas <mark>largas y esbeltas comprimidas</mark>. La carga a la que empieza, llamada <b>carga crítica</b>, puede ser muy inferior a la que aplastaría el material.</p>
      <p>Leonhard Euler calculó en el siglo XVIII la carga crítica de un pilar ideal:</p>
      <div class="formula"><span>F_cr = π² · E · I / L_p²</span></div>
      <p>E es el módulo de Young; I, el <b>momento de inercia</b> de la sección (mide cómo de alejado del centro está el material, en mm⁴), y L_p, la <b>longitud de pandeo</b>, que depende de los apoyos: es igual a la longitud real L si ambos extremos están articulados, 2L si uno está empotrado y el otro libre, y 0,5L si ambos están empotrados.</p>
      <p>Como la longitud aparece al cuadrado, un pilar del doble de largo soporta <b>cuatro veces menos</b>. Para evitar el pandeo se usan secciones huecas (tubos), que tienen mucha inercia con poco material, se arriostran los pilares con barras que acortan su longitud libre y se eligen materiales con alto módulo de Young. La <b>esbeltez</b> (relación entre la longitud de pandeo y el grosor de la sección) indica si hay que preocuparse por el pandeo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pilar recto y pilar pandeado que se curva lateralmente bajo una carga de compresión">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Pandeo", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <path d="M50 150 H 110 M150 150 H 210" stroke="var(--ink)" stroke-width="3"/>
        <rect x="74" y="58" width="12" height="92" fill="var(--pen)"/>${flechaV(80, 30, 56, "var(--red)")}
        <path d="M180 58 C 206 90, 206 118, 180 150" fill="none" stroke="var(--pen)" stroke-width="12"/>${flechaV(180, 30, 56, "var(--red)")}
        ${B.tx(80, 168, "F < F_cr", { fs: 11.5, maxW: 80, bold: true, color: "var(--leaf)" })}${B.tx(184, 168, "F ≥ F_cr", { fs: 11.5, maxW: 80, bold: true, color: "var(--red)" })}
      </svg>`,
      video: { id: "903jIBBBs9I", titulo: "Pandeo en columnas (teoría de Euler)", canal: "Felipe M", vistas: 143032 },
    },
    {
      h: "Estructuras trianguladas: celosías",
      html: `<p>Un cuadrado formado por cuatro barras articuladas se deforma con facilidad: es un mecanismo. Si se añade una diagonal, se forman dos <b>triángulos</b> y la figura queda rígida, porque un triángulo no puede cambiar de forma sin que cambie la longitud de alguno de sus lados. Esa idea, la <mark>triangulación</mark>, es la base de las <b>celosías</b> o cerchas: estructuras de barras unidas en nudos que forman triángulos. Se usan en cubiertas de naves, puentes, grúas y torres eléctricas.</p>
      <p>En una celosía ideal, las barras se unen en articulaciones y las cargas se aplican solo en los nudos. Entonces cada barra trabaja únicamente a <b>tracción</b> (se llama <b>tirante</b>) o a <b>compresión</b> (se llama <b>puntal</b> o montante), nunca a flexión. Eso permite usar barras finas y ligeras.</p>
      <p>Una celosía plana es isostática si cumple b = 2n − 3, siendo b el número de barras y n el de nudos. Para calcular el esfuerzo de cada barra se usa el <b>método de los nudos</b>: primero se calculan las reacciones; después se aísla un nudo con, como máximo, dos barras desconocidas y se aplican ΣFx = 0 y ΣFy = 0; se pasa al nudo siguiente y se repite. Por convenio, se suponen todas las barras a tracción: si el resultado sale negativo, la barra está comprimida.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Celosía triangular con carga en el vértice: barras inclinadas comprimidas y tirante inferior traccionado">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Celosía simple", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <path d="M50 140 L 130 58 L 210 140" fill="none" stroke="var(--red)" stroke-width="6"/><path d="M50 140 H 210" stroke="var(--leaf)" stroke-width="6"/>
        ${[[50, 140], [130, 58], [210, 140]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--paper)" stroke="var(--ink)" stroke-width="2.5"/>`).join("")}
        ${flechaV(130, 28, 48, "var(--ink)")}${B.tx(146, 40, "P", { fs: 13, maxW: 16, bold: true })}
        ${B.tx(62, 92, "compresión", { fs: 11, maxW: 70, bold: true, color: "var(--red)" })}${B.tx(130, 162, "tracción (tirante)", { fs: 11, maxW: 120, bold: true, color: "var(--leaf)" })}
      </svg>`,
      video: { id: "dqjM3ddKPzw", titulo: "Resolución de cerchas planas por el método de los nudos", canal: "Universitat Politècnica de València - UPV", vistas: 145280 },
    },
    {
      h: "Tipos de estructuras",
      html: `<p>Según su forma y su modo de trabajar, las estructuras se clasifican en:</p>
      <ul><li><b>Masivas</b>: mucho material macizo que trabaja a compresión (pirámides, presas de gravedad).</li>
      <li><b>Abovedadas</b>: arcos, bóvedas y cúpulas que convierten las cargas en compresiones; necesitan contrafuertes que absorban el empuje lateral.</li>
      <li><b>Entramadas</b> o porticadas: pilares y vigas unidos rígidamente, de hormigón armado o acero. La mayoría de los edificios actuales.</li>
      <li><b>Trianguladas</b>: celosías de barras.</li>
      <li><b>Colgantes</b> o atirantadas: cables a tracción que cuelgan de torres (puentes colgantes y atirantados).</li>
      <li><b>Laminares</b>: láminas finas y curvas que resisten por su forma (carrocerías, cáscaras de hormigón).</li>
      <li><b>Neumáticas</b> o hinchables: membranas tensadas por aire a presión.</li></ul>
      <p>En la naturaleza también hay estructuras admirables: el esqueleto, el tronco de los árboles (que resiste flexión con una sección casi circular y hueca por dentro en los bambúes), los panales hexagonales o las telas de araña. La <b>biomímesis</b> imita esas soluciones, optimizadas durante millones de años, para diseñar estructuras más eficientes.</p>`,
      svg: B.rejilla("Tipos de estructuras y su forma de trabajar", ["Tipo", "Trabaja a", "Ejemplo"], [["Abovedada", "compresión", "arco romano"], ["Entramada", "flexión", "edificio"], ["Triangulada", "tracc./compr.", "torre eléctrica"], ["Colgante", "tracción", "puente colgante"], ["Laminar", "forma", "carrocería"]], { t: "Tipos de estructuras" }),
    },
    {
      h: "Estabilidad y estructuras sostenibles",
      html: `<p>Una estructura resistente puede fallar si <b>vuelca</b>. La estabilidad depende de la posición del <b>centro de gravedad</b> y de la <b>base de apoyo</b>: un cuerpo es estable mientras la vertical de su centro de gravedad caiga dentro de la base. Ante una fuerza lateral, como el viento, aparece un <b>momento de vuelco</b>; el peso propio genera un <b>momento estabilizador</b> respecto a la arista de vuelco. El cociente entre ambos es el coeficiente de seguridad al vuelco, que suele exigirse mayor que 1,5. Bajar el centro de gravedad, ensanchar la base, añadir tirantes o anclajes son las soluciones habituales: así se estabilizan las grúas con contrapesos y las farolas con zapatas.</p>
      <p>La construcción consume alrededor de la mitad de las materias primas extraídas y genera casi el 40 % de las emisiones de CO₂ relacionadas con la energía. Las <b>estructuras sostenibles</b> buscan reducir ese impacto: optimizan la forma para usar menos material, emplean madera técnica (contralaminada, laminada encolada) que almacena carbono, hormigones con menos cemento o con áridos reciclados, acero reciclado, y diseños desmontables cuyas piezas se pueden reutilizar. La <b>optimización topológica</b>, con ayuda del ordenador, elimina material donde no trabaja y genera formas parecidas a huesos.</p>`,
      svg: B.comparar("Cuerpo estable frente a cuerpo que vuelca según la vertical de su centro de gravedad", ["Estable", ["c.d.g. bajo", "vertical dentro", "base ancha", "M estab. > M vuelco"]], ["Vuelca", ["c.d.g. alto", "vertical fuera", "base estrecha", "M vuelco > M estab."]]),
    },
  ],
  figura: {
    titulo: "Fórmulas clave de las estructuras",
    items: [["Equilibrio", "ΣF = 0, ΣM = 0", "no se traslada", "ni gira"], ["Reacción", "R_B = P·a/L", "viga", "biapoyada"], ["Flexión", "σ = M / W", "W = b·h²/6", "en rectángulos"], ["Pandeo", "F = π²EI/L²", "piezas largas", "comprimidas"]],
  },
  video: { id: "muCrmuI1T-A", titulo: "Cálculo de vigas: reacciones, esfuerzos y diagramas", canal: "Ingeniosos", vistas: 93448 },
  quiz: [
    ["¿Qué tres condiciones debe cumplir una estructura?", ["Ser bonita, barata y ligera", "Resistente, rígida y estable", "Metálica, soldada y pintada", "Alta, ancha y pesada"], 1, "No romperse, deformarse poco y no volcar."],
    ["El peso propio de un forjado es una carga…", ["variable", "permanente", "dinámica", "puntual"], 1, "Actúa siempre."],
    ["Una carga distribuida se mide en…", ["kN", "kN/m", "kN·m", "MPa"], 1, "Fuerza por unidad de longitud."],
    ["Un cable de una grúa trabaja a…", ["compresión", "tracción", "torsión", "pandeo"], 1, "Los cables solo resisten tracción."],
    ["En una viga flexionada, las fibras inferiores (carga hacia abajo) están…", ["comprimidas", "traccionadas", "sin tensión", "a torsión"], 1, "Las superiores se comprimen y las inferiores se estiran."],
    ["Un remache que une dos chapas trabaja sobre todo a…", ["tracción", "cortadura", "pandeo", "flexión"], 1, "Las chapas tienden a cortarlo."],
    ["El momento de una fuerza es…", ["F + d", "F · d", "F / d", "d / F"], 1, "Fuerza por distancia perpendicular."],
    ["Una fuerza de 50 N con brazo 0,4 m produce un momento de…", ["20 N·m", "125 N·m", "50,4 N·m", "12,5 N·m"], 0, "M = 50 · 0,4 = 20 N·m."],
    ["¿Cuántas ecuaciones de equilibrio hay en el plano?", ["1", "2", "3", "6"], 2, "ΣFx = 0, ΣFy = 0 y ΣM = 0."],
    ["Un apoyo articulado fijo tiene…", ["1 reacción", "2 reacciones", "3 reacciones", "ninguna"], 1, "Horizontal y vertical; permite el giro."],
    ["Un empotramiento tiene…", ["1 reacción", "2 reacciones", "3 reacciones (dos fuerzas y un momento)", "4 reacciones"], 2, "Impide desplazamientos y giro."],
    ["Una estructura con más reacciones de las necesarias es…", ["isostática", "hiperestática", "un mecanismo", "inestable"], 1, "Tiene más incógnitas que ecuaciones de la estática."],
    ["Una carga uniforme q en una longitud c equivale a…", ["q en un extremo", "q · c en su centro", "q / c", "q · c en un extremo"], 1, "Resultante en el centro de la zona cargada."],
    ["El momento flector máximo de una viga biapoyada con carga uniforme es…", ["qL/2", "qL²/8", "qL²/2", "PL/4"], 1, "Parábola con máximo en el centro."],
    ["El módulo resistente de un rectángulo es…", ["b·h/6", "b·h²/6", "b²·h/6", "b·h³/12"], 1, "b·h³/12 es el momento de inercia."],
    ["¿Por qué las vigas son más altas que anchas?", ["Por estética", "Porque W crece con el cuadrado del canto", "Para pesar más", "Por normativa"], 1, "Más canto, mucha más resistencia a flexión."],
    ["Si un pilar duplica su longitud, su carga crítica de pandeo…", ["se duplica", "se reduce a la mitad", "se reduce a la cuarta parte", "no cambia"], 2, "F_cr depende de 1/L²."],
    ["¿Por qué una celosía usa triángulos?", ["Son más bonitos", "Son figuras indeformables", "Pesan más", "Son más baratos de pintar"], 1, "Un triángulo no cambia de forma sin cambiar sus lados."],
    ["En una celosía ideal, las barras trabajan…", ["a flexión", "solo a tracción o compresión", "a torsión", "a cortadura"], 1, "Cargas solo en nudos articulados."],
    ["Un cuerpo vuelca cuando…", ["pesa mucho", "la vertical de su c.d.g. sale de la base", "es de acero", "su base es ancha"], 1, "El momento de vuelco supera al estabilizador."],
  ],
  examen: [
    ["Viga biapoyada de 5 m con 20 kN a 1 m de A. R_B =", ["4 kN", "16 kN", "20 kN", "5 kN"], 0, "R_B = 20 · 1 / 5 = 4 kN; R_A = 16 kN."],
    ["Viga biapoyada de 4 m con 10 kN en el centro. M_máx =", ["40 kN·m", "10 kN·m", "20 kN·m", "2,5 kN·m"], 1, "P·L/4 = 10 · 4 / 4 = 10 kN·m."],
    ["Viga de 6 m con 4 kN/m en toda su longitud. M_máx =", ["18 kN·m", "24 kN·m", "36 kN·m", "144 kN·m"],0, "q·L²/8 = 4 · 36 / 8 = 18 kN·m."],
    ["Sección rectangular 60 × 120 mm (canto 120). W =", ["144 000 mm³", "72 000 mm³", "14 400 mm³", "864 000 mm³"], 0, "W = 60 · 120² / 6 = 144 000 mm³."],
    ["M = 12 kN·m y W = 100 cm³. σ_máx =", ["120 MPa", "12 MPa", "1200 MPa", "0,12 MPa"], 0, "12 · 10⁶ N·mm / 100 · 10³ mm³ = 120 MPa."],
    ["Una celosía tiene 7 nudos. ¿Cuántas barras para ser isostática?", ["9", "11", "14", "7"], 1, "b = 2 · 7 − 3 = 11."],
    ["Barra de acero (σₑ = 240 MPa, n = 2) con 36 kN de tracción. Sección mínima:", ["150 mm²", "300 mm²", "75 mm²", "8640 mm²"], 1, "σ_adm = 120 MPa; S = 36 000 / 120 = 300 mm²."],
    ["Un voladizo de 2 m empotrado tiene 3 kN en su extremo. El momento en el empotramiento es…", ["1,5 kN·m", "6 kN·m", "3 kN·m", "0"], 1, "M = 3 · 2 = 6 kN·m."],
  ],
  feynman: ["Qué esfuerzos existen y un ejemplo de cada uno", "Qué es el momento de una fuerza y por qué depende del brazo", "Cuáles son las condiciones de equilibrio y cómo se calculan las reacciones", "Qué significa que el momento flector sea máximo en el centro", "Por qué una tabla de canto resiste más que tumbada", "Por qué los triángulos hacen rígida una celosía"],
  mapa: ["ESTRUCTURAS", [["Cargas y esfuerzos", "tracción · compresión · flexión"], ["Equilibrio", "ΣF = 0 · ΣM = 0 · reacciones"], ["Vigas", "V, M · σ = M/W"], ["Barras", "σ = F/S · pandeo · celosías"]]],
  tarjetas: [
    ["Condiciones de una estructura", "Resistente, rígida y estable."],
    ["Seis esfuerzos", "Tracción, compresión, flexión, cortadura, torsión y pandeo."],
    ["Momento", "M = F · d (d perpendicular a la fuerza)."],
    ["Equilibrio en el plano", "ΣFx = 0, ΣFy = 0, ΣM = 0."],
    ["Apoyos", "Simple: 1 reacción. Articulado: 2. Empotramiento: 3."],
    ["Viga biapoyada con carga P", "R_B = P·a/L; R_A = P − R_B."],
    ["Momentos máximos", "Carga central: PL/4. Carga uniforme: qL²/8. Voladizo: P·L."],
    ["Flexión", "σ_máx = M / W; rectángulo W = b·h²/6."],
    ["Dimensionado", "S ≥ F / σ_adm; σ_adm = σₑ / n."],
    ["Pandeo (Euler)", "F_cr = π²·E·I / L_p²."],
    ["Celosía isostática", "b = 2n − 3; barras a tracción o compresión."],
    ["Vuelco", "Estable si la vertical del c.d.g. cae dentro de la base."],
  ],
  ejemplos: [
    ["Viga biapoyada de 6 m con una carga de 12 kN a 2 m del apoyo A. Calcula las reacciones y el momento máximo.", ["ΣM_A = 0: R_B · 6 − 12 · 2 = 0 → R_B = 4 kN.", "ΣFy = 0: R_A + 4 − 12 = 0 → R_A = 8 kN.", "El momento máximo está bajo la carga: M = R_A · 2 = 8 · 2 = 16 kN·m."], "R_A = 8 kN; R_B = 4 kN; M_máx = 16 kN·m."],
    ["Viga biapoyada de 8 m con una carga uniforme de 5 kN/m. Calcula reacciones y momento máximo.", ["Resultante: q · L = 5 · 8 = 40 kN en el centro.", "Por simetría: R_A = R_B = 20 kN.", "M_máx = q · L² / 8 = 5 · 64 / 8 = 40 kN·m."], "R_A = R_B = 20 kN; M_máx = 40 kN·m."],
    ["Una viga de madera de 100 × 200 mm (canto 200) soporta M = 6 kN·m. ¿Cuál es la tensión máxima? ¿Y si se coloca tumbada?", ["De canto: W = 100 · 200² / 6 = 666 667 mm³; σ = 6 · 10⁶ / 666 667 = 9 MPa.", "Tumbada: W = 200 · 100² / 6 = 333 333 mm³; σ = 18 MPa.", "Tumbada soporta el doble de tensión: resiste la mitad."], "9 MPa de canto; 18 MPa tumbada."],
    ["Celosía triangular isósceles: dos barras inclinadas 60° sobre la horizontal y un tirante inferior. Carga de 10 kN en el vértice. Calcula los esfuerzos.", ["Reacciones: 5 kN en cada apoyo (simetría).", "Nudo del vértice: 2 · N · sen 60° = 10 → N = 5,77 kN, a compresión en cada barra inclinada.", "Nudo de un apoyo: tirante T = N · cos 60° = 5,77 · 0,5 = 2,89 kN, a tracción."], "Barras inclinadas: 5,77 kN de compresión; tirante: 2,89 kN de tracción."],
    ["Dimensiona un tirante de acero (σₑ = 275 MPa, n = 2,5) que soporta 44 kN.", ["σ_adm = 275 / 2,5 = 110 MPa.", "S ≥ 44 000 / 110 = 400 mm².", "d ≥ √(4 · 400 / π) = 22,6 mm."], "Varilla de 24 mm de diámetro (medida comercial superior)."],
    ["Una farola de 6 m y 150 kg recibe en su punta un empuje del viento de 300 N. Su base cuadrada tiene 0,8 m de lado y la zapata pesa 1200 kg. ¿Vuelca? (g = 9,8)", ["Momento de vuelco respecto a la arista: 300 · 6 = 1800 N·m.", "Peso total: (150 + 1200) · 9,8 = 13 230 N, con brazo 0,4 m: M estabilizador = 5292 N·m.", "Coeficiente: 5292 / 1800 = 2,9 > 1,5."], "No vuelca; el coeficiente de seguridad al vuelco es 2,9."],
  ],
  errores: [
    "Usar como brazo la distancia al punto de aplicación en lugar de la distancia perpendicular a la línea de acción.",
    "Olvidar alguna reacción al dibujar el diagrama de sólido libre (por ejemplo, el momento de un empotramiento).",
    "Mezclar signos de momentos: hay que fijar un criterio y mantenerlo en toda la ecuación.",
    "Tomar la carga distribuida q como si fuera una fuerza: hay que multiplicarla por la longitud.",
    "Usar W = b·h²/6 con b y h intercambiados: h es siempre la dimensión en la dirección de la carga.",
    "Dimensionar una barra esbelta comprimida solo con σ = F/S, olvidando el pandeo.",
  ],
  ejercicios: {
    b: [
      ["Indica el esfuerzo principal en: cuerda de un columpio, pata de una silla, balda de una estantería, eje de una batidora, tornillo de una bisagra.", "Tracción, compresión, flexión, torsión y cortadura."],
      ["Clasifica las cargas: nieve en un tejado, peso de un muro, un camión pasando por un puente, un terremoto.", "Nieve: variable y estática. Muro: permanente. Camión: variable y dinámica (móvil). Terremoto: dinámica (accidental)."],
      ["Calcula el momento de una fuerza de 80 N aplicada a 0,25 m de un eje, perpendicular a la llave.", "M = 80 · 0,25 = 20 N·m."],
      ["Descompón una fuerza de 100 N que forma 30° con la horizontal.", "Fx = 100 · cos 30° = 86,6 N; Fy = 100 · sen 30° = 50 N."],
      ["¿Cuántas reacciones tiene cada tipo de apoyo y qué impide?", "Simple: 1 (desplazamiento perpendicular). Articulado: 2 (desplazamientos). Empotramiento: 3 (desplazamientos y giro)."],
      ["Una viga biapoyada de 4 m tiene una carga de 8 kN en el centro. Calcula las reacciones.", "Por simetría, R_A = R_B = 4 kN."],
      ["Calcula la resultante de una carga de 3 kN/m sobre 5 m y dónde se aplica.", "3 · 5 = 15 kN, en el centro del tramo cargado (a 2,5 m)."],
      ["Calcula el W de una sección rectangular de 50 × 100 mm con la carga en la dirección de 100 mm.", "W = 50 · 100² / 6 = 83 333 mm³ ≈ 83,3 cm³."],
      ["¿Qué es la fibra neutra?", "La línea de una sección flexionada que no se alarga ni se acorta; separa la zona comprimida de la traccionada."],
      ["Explica por qué un cuadrado de barras articuladas se deforma y uno con diagonal no.", "Un cuadrado puede convertirse en rombo sin cambiar la longitud de sus barras; la diagonal forma dos triángulos, que son indeformables."],
      ["¿Qué tipo de estructura es: puente romano, torre eléctrica, edificio de pilares y vigas, puente colgante?", "Abovedada, triangulada, entramada y colgante."],
      ["Indica dos formas de mejorar la estabilidad de una estantería alta.", "Anclarla a la pared y colocar los objetos pesados abajo (bajar el centro de gravedad); también ensanchar la base."],
    ],
    m: [
      ["Viga biapoyada de 10 m con dos cargas: 6 kN a 2 m y 4 kN a 7 m de A. Calcula las reacciones.", "ΣM_A: R_B · 10 = 6 · 2 + 4 · 7 = 40 → R_B = 4 kN. R_A = 10 − 4 = 6 kN."],
      ["Viga biapoyada de 6 m con 2 kN/m en toda la luz y una carga de 6 kN en el centro. Calcula reacciones y M_máx.", "Total = 12 + 6 = 18 kN; por simetría R_A = R_B = 9 kN. M_máx = qL²/8 + PL/4 = 9 + 9 = 18 kN·m."],
      ["Un voladizo empotrado de 3 m soporta 2 kN/m en toda su longitud. Calcula las reacciones en el empotramiento.", "Fuerza vertical = 2 · 3 = 6 kN. Momento = 6 · 1,5 = 9 kN·m. Reacción horizontal = 0."],
      ["Calcula la tensión máxima en una viga IPE 160 (W = 109 cm³) con M = 15 kN·m.", "σ = 15 · 10⁶ / 109 · 10³ = 137,6 MPa."],
      ["Una viga de acero (σ_adm = 160 MPa) soporta M_máx = 32 kN·m. ¿Qué W mínimo necesita? ¿Sirve un IPE 180 (W = 146 cm³)?", "W ≥ 32 · 10⁶ / 160 = 200 000 mm³ = 200 cm³. El IPE 180 no sirve; hay que pasar a un IPE 200 (194 cm³, justo por debajo) o IPE 220 (252 cm³). Se elige el IPE 220."],
      ["Dimensiona una barra cuadrada de aluminio (σₑ = 150 MPa, n = 3) que soporta 20 kN a tracción.", "σ_adm = 50 MPa. S = 20 000 / 50 = 400 mm². Lado = 20 mm."],
      ["Un pasador de 10 mm une dos piezas a cortadura doble con una fuerza de 12 kN. Calcula τ.", "S = π · 100 / 4 = 78,5 mm². τ = 12 000 / (2 · 78,5) = 76,4 MPa."],
      ["Calcula la tensión de torsión en un eje macizo de 20 mm que transmite Mt = 40 N·m.", "τ = 16 · 40 000 N·mm / (π · 8000) = 640 000 / 25 133 = 25,5 MPa."],
      ["Una celosía tiene 9 barras y 6 nudos. ¿Es isostática? Razona.", "2n − 3 = 9 = b: sí, es isostática (si está bien triangulada)."],
      ["Un pilar biarticulado soporta F_cr = 100 kN. ¿Qué carga crítica tendría si fuera empotrado-libre con la misma longitud?", "L_p pasa de L a 2L: F_cr se divide entre 4 → 25 kN."],
      ["¿Cuánto más resiste a flexión una tabla de 20 × 200 mm de canto que tumbada?", "De canto W = 20 · 200²/6 = 133 333 mm³. Tumbada W = 200 · 20²/6 = 13 333 mm³. Diez veces más."],
      ["Una grúa tiene un brazo de 20 m con una carga máxima de 1000 kg en la punta. El contrapeso está a 5 m al otro lado. ¿Qué masa debe tener para equilibrar el momento?", "1000 · 20 = m · 5 → m = 4000 kg."],
      ["En la celosía triangular del ejemplo, ¿qué pasaría con los esfuerzos si las barras fueran más tumbadas (30°)?", "N = P / (2 · sen 30°) = P: la compresión se duplica respecto a 60° (0,577P → 1P), y el tirante pasa a 0,866P. Las cerchas muy planas tienen esfuerzos mayores."],
    ],
    a: [
      ["Viga biapoyada de 8 m con 4 kN/m en los primeros 4 m y una carga de 10 kN a 6 m de A. Calcula R_A, R_B y el momento a 4 m.", "Resultante de la distribuida: 16 kN a 2 m. ΣM_A: 8R_B = 16 · 2 + 10 · 6 = 92 → R_B = 11,5 kN; R_A = 26 − 11,5 = 14,5 kN. M(4) = 14,5 · 4 − 16 · 2 = 58 − 32 = 26 kN·m."],
      ["Para la viga anterior, dibuja de forma aproximada el diagrama de cortantes y localiza el momento máximo.", "V = 14,5 en A y baja linealmente 4 kN/m: a 4 m vale −1,5 kN. Se anula en x = 14,5/4 = 3,625 m. De 4 a 6 m vale −1,5; de 6 a 8 m vale −11,5. M_máx en x = 3,625 m: M = 14,5 · 3,625 − 4 · 3,625²/2 = 52,56 − 26,28 = 26,3 kN·m."],
      ["Dimensiona una viga de madera (σ_adm = 10 MPa) de 4 m biapoyada con 3 kN/m. El canto debe ser el doble que el ancho.", "M = 3 · 16 / 8 = 6 kN·m. W ≥ 6 · 10⁶ / 10 = 600 000 mm³. b·(2b)²/6 = 2b³/3 ≥ 600 000 → b³ ≥ 900 000 → b ≥ 96,5 mm. Sección 100 × 200 mm."],
      ["Calcula la carga crítica de pandeo de un tubo de acero (E = 210 000 MPa, I = 1,2 · 10⁵ mm⁴) de 3 m biarticulado. Con n = 3, ¿qué carga admite?", "F_cr = π² · 210 000 · 1,2 · 10⁵ / 3000² = 2,487 · 10¹¹ / 9 · 10⁶ ≈ 27 600 N. Carga admisible ≈ 9,2 kN."],
      ["Una cercha de dos barras forma un triángulo con apoyos separados 6 m y vértice a 2 m de altura sobre el centro. Carga de 12 kN en el vértice. Calcula los esfuerzos.", "Longitud de cada barra: √(3² + 2²) = 3,61 m; sen α = 2/3,61 = 0,554. N = 12 / (2 · 0,554) = 10,83 kN de compresión. Tirante: N · cos α = 10,83 · 0,832 = 9,0 kN de tracción."],
      ["Un eje de acero (τ_adm = 60 MPa) debe transmitir 150 N·m. Calcula el diámetro mínimo.", "D³ ≥ 16 · 150 000 / (π · 60) = 2 400 000 / 188,5 = 12 732 → D ≥ 23,4 mm. Se elige 25 mm."],
      ["Explica por qué un puente atirantado y un puente colgante tienen cables a tracción y pilonos a compresión, y qué riesgo añade el viento.", "Los cables transmiten el peso del tablero a los pilonos por tracción, y los pilonos lo llevan al suelo comprimidos. El viento puede producir vibraciones y oscilaciones (efectos aeroelásticos) que, si coinciden con la frecuencia propia del puente, lo amplifican; por eso se ensayan maquetas en túnel de viento."],
      ["Compara el peso de una viga maciza rectangular de acero de 60 × 160 mm con un IPE 160 (masa 15,8 kg/m, W = 109 cm³). ¿Cuál es más eficiente?", "Maciza: área 9600 mm², masa = 9600 · 10⁻⁶ · 7850 = 75,4 kg/m; W = 60 · 160²/6 = 256 cm³. Relación W/masa: maciza 3,4; IPE 6,9 cm³ por kg/m. El IPE es el doble de eficiente."],
      ["Un balcón (voladizo) de 1,5 m soporta 4 kN/m² en una franja de 1 m de ancho más su peso de 3 kN/m. Calcula el momento en el empotramiento.", "Carga total por metro: 4 + 3 = 7 kN/m. M = q · L² / 2 = 7 · 2,25 / 2 = 7,9 kN·m."],
      ["Propone tres estrategias para reducir la huella de carbono de la estructura de un polideportivo, justificando cada una.", "Usar madera laminada en la cubierta (almacena carbono y pesa poco); optimizar la forma con celosías para usar menos acero; usar hormigón con cemento bajo en clínker y áridos reciclados en la cimentación. Además, diseñar uniones atornilladas para poder desmontar y reutilizar."],
    ],
  },
  glosario: [
    ["Estructura", "Conjunto de elementos que soporta cargas y las transmite a los apoyos."],
    ["Carga distribuida", "Carga repartida a lo largo de una longitud, en kN/m."],
    ["Esfuerzo", "Fuerza interna que aparece en una pieza al recibir cargas."],
    ["Flexión", "Esfuerzo que curva una pieza por cargas perpendiculares a su eje."],
    ["Cortadura", "Esfuerzo que tiende a cortar la pieza por dos fuerzas próximas y opuestas."],
    ["Torsión", "Esfuerzo que retuerce una pieza alrededor de su eje."],
    ["Pandeo", "Curvatura lateral brusca de una pieza esbelta comprimida."],
    ["Momento", "Capacidad de una fuerza para hacer girar: M = F · d."],
    ["Reacción", "Fuerza o momento que un apoyo ejerce sobre la estructura."],
    ["Empotramiento", "Apoyo que impide desplazamientos y giro."],
    ["Estructura isostática", "La que tiene justo las reacciones que permiten calcular las ecuaciones de la estática."],
    ["Momento flector", "Suma de momentos a un lado de una sección; curva la viga."],
    ["Fibra neutra", "Línea de la sección flexionada que no cambia de longitud."],
    ["Módulo resistente", "W: propiedad de la sección que relaciona momento y tensión."],
    ["Coeficiente de seguridad", "Factor que divide al límite elástico para obtener la tensión admisible."],
    ["Celosía", "Estructura de barras que forman triángulos unidas en nudos."],
    ["Tirante", "Barra que trabaja a tracción."],
    ["Centro de gravedad", "Punto donde se considera aplicado el peso de un cuerpo."],
  ],
  situacion: {
    titulo: "El puente de palillos más eficiente",
    reto: "En grupos, diseñad y construid un puente de palillos de madera y cola que salve 40 cm y soporte la mayor carga posible con la menor masa. Gana la mejor relación carga/peso.",
    pasos: [
      "Estudiad tipos de puentes y celosías (Pratt, Warren, Howe) y elegid uno justificando la elección.",
      "Dibujad el puente a escala y calculad con el método de los nudos qué barras trabajan a tracción y cuáles a compresión.",
      "Reforzad las barras comprimidas largas (pandeo) duplicándolas o arriostrándolas.",
      "Construid el puente controlando la masa (máximo 150 g) y la calidad de los nudos.",
      "Ensayadlo colgando pesos en el centro hasta la rotura, grabando en vídeo dónde falla.",
      "Analizad la rotura y proponed mejoras.",
    ],
    producto: "El puente, su plano con los esfuerzos calculados, el registro del ensayo y un informe de rotura.",
    evaluacion: [
      "El cálculo de esfuerzos por el método de los nudos es correcto.",
      "El diseño tiene en cuenta la triangulación y el pandeo de las barras comprimidas.",
      "La construcción es precisa y respeta la masa máxima.",
      "El análisis de la rotura relaciona el fallo con los esfuerzos calculados.",
    ],
  },
  familias: [
    "Buscad en casa un ejemplo de cada esfuerzo: algo que se estira, se comprime, se dobla, se corta y se retuerce.",
    "Probad juntos a doblar una regla tumbada y de canto, y comentad cuál resiste más y por qué.",
    "Observad en la calle grúas, puentes o torres eléctricas y contad los triángulos de su estructura.",
    "Pedidle que os explique por qué es más fácil abrir una puerta empujando lejos de las bisagras.",
  ],
  saberes: "Sistemas mecánicos: estructuras, cargas, esfuerzos, estática (momento y equilibrio), cálculo de reacciones en vigas isostáticas, diagramas de esfuerzos, dimensionado básico a tracción, compresión, flexión y torsión, pandeo y celosías (RD 243/2022, Tecnología e Ingeniería I, bloque C).",
  ideas: [
    "Usar un simulador de estructuras gratuito para comprobar las reacciones y los esfuerzos calculados a mano.",
    "Medir las reacciones de una regla apoyada en dos básculas de cocina con una masa en distintas posiciones.",
    "Construir con tiras de cartón pluma una celosía y una viga maciza de igual masa y comparar su resistencia.",
    "Analizar el pandeo con varillas de espagueti de distintas longitudes y comprobar la dependencia 1/L².",
  ],
  fuentes: [
    { t: "Código Técnico de la Edificación, Documento Básico SE-AE (acciones en la edificación)", url: "https://www.codigotecnico.org" },
    { t: "Celosía, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Celos%C3%ADa" },
  ],
});
