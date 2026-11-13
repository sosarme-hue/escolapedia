// Biología y Geología 4º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso4L6.js.
const { F, D, mapa, flecha } = require("./_util");
const L6 = require("./_eso4L6");



module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "La célula",
  minutos: 110,
  objetivos: [
    "Enunciar la teoría celular y explicar cómo se descubrió",
    "Calcular aumentos y tamaños reales con el microscopio",
    "Diferenciar células procariotas y eucariotas, animales y vegetales",
    "Relacionar cada orgánulo con su función",
    "Explicar el transporte a través de la membrana y la ósmosis",
    "Comparar la respiración celular y la fotosíntesis y relacionarlas con las funciones vitales",
  ],
  claves: ["teoría celular", "procariota", "eucariota", "núcleo", "mitocondria", "cloroplasto"],
  pregunta: {
    texto: "Tu cuerpo tiene unos 30 billones de células y una bacteria es una sola célula. ¿Qué tienen en común?",
    respuesta: "Todas las células, desde una bacteria hasta una neurona, <mark>nacen de otra célula</mark>, tienen <b>membrana</b>, <b>citoplasma</b> y <b>material genético (ADN)</b>, y realizan las tres funciones vitales: nutrición, relación y reproducción. La célula es la unidad más pequeña que está viva.",
  },
  lectura: {
    titulo: "Una ciudad dentro de una gota",
    html: `<p>En 1676, un comerciante de telas de Delft llamado Anton van Leeuwenhoek miró una gota de agua de lluvia a través de una lente diminuta que él mismo había pulido. Lo que vio le dejó sin palabras: cientos de «animálculos» que nadaban, giraban y chocaban entre sí. Escribió a la Royal Society de Londres y al principio nadie le creyó. Hoy sabemos que estaba viendo bacterias y protozoos, seres vivos formados por una sola célula.</p>
<p>Tú mismo eres una ciudad de unos 30 billones de células. Ahora mismo, en tus músculos, miles de mitocondrias queman glucosa para que puedas sostener este libro; en tu piel, unas células se dividen para sustituir a las que se caen; y en tu sangre, los glóbulos blancos patrullan buscando invasores. Cada célula tiene su «muralla» (la membrana), su «ayuntamiento» (el núcleo con el ADN), sus «centrales eléctricas» y sus «fábricas».</p>
<p>Entender la célula es entender por qué una herida cicatriza, por qué la sal arruga una lechuga, cómo funciona un antibiótico o qué es el cáncer. En este tema vas a recorrer esa ciudad microscópica calle por calle.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Qué es una célula: la teoría celular</h3><p>La <b>célula</b> es la unidad más pequeña que está viva: es capaz de nutrirse, relacionarse con su entorno y reproducirse por sí misma. Un átomo o una molécula de ADN no están vivos; una célula sí.</p><p>La idea de que todos los seres vivos están hechos de células tardó casi dos siglos en construirse. En 1665 <b>Robert Hooke</b> observó una lámina de corcho y vio «celdillas» vacías, que en realidad eran las paredes de células muertas; de ahí viene la palabra «célula». Poco después, <b>Leeuwenhoek</b> vio por primera vez microorganismos vivos. En 1838-1839, el botánico <b>Schleiden</b> y el zoólogo <b>Schwann</b> concluyeron que plantas y animales estaban formados por células, y en 1855 <b>Virchow</b> añadió que <i>omnis cellula e cellula</i>: toda célula procede de otra.</p><p>Así nació la <b>teoría celular</b>, que hoy se resume en cuatro puntos: 1) <mark>todos los seres vivos están formados por una o más células</mark>; 2) la célula es la <b>unidad estructural</b> (de forma) y <b>funcional</b> (de funcionamiento) de los seres vivos; 3) <mark>toda célula procede de otra célula</mark> por división; 4) la célula contiene el <b>material hereditario</b> (ADN), que se transmite a las células hijas. A finales del siglo XIX, Santiago Ramón y Cajal demostró que el tejido nervioso también está formado por células independientes, las neuronas, y extendió la teoría a todo el cuerpo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Microscopio óptico y células de corcho como las que vio Hooke">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M50 150 H 110 M80 150 V 130 M66 130 H 94 M84 130 L 70 60 M64 54 L 76 40 L 88 46 L 76 62 Z M60 100 H 100" fill="none" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="185" cy="90" r="58" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <g fill="none" stroke="var(--sun)" stroke-width="2">${[0, 1, 2, 3].map((i) => [0, 1, 2, 3, 4].map((j) => `<rect x="${140 + j * 18 + (i % 2) * 9}" y="${52 + i * 20}" width="17" height="19" rx="2"/>`).join("")).join("")}</g>
        <text x="185" y="166" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>corcho (Hooke, 1665)</text>
      </svg>`,
    },
    {
      html: `<h3>1.2 El microscopio y el tamaño de las células</h3><p>La mayoría de las células miden entre 10 y 100 <b>micrómetros</b> (µm). Un micrómetro es la milésima parte de un milímetro, así que hacen falta unas 100 células puestas en fila para ocupar un milímetro. Por eso necesitamos el microscopio.</p><p>El <b>microscopio óptico</b> usa luz visible y dos sistemas de lentes: el <b>ocular</b>, por donde miramos, y el <b>objetivo</b>, cerca de la muestra. Los <mark>aumentos totales se calculan multiplicando los del ocular por los del objetivo</mark>: con un ocular de 10× y un objetivo de 40× vemos la muestra 400 veces más grande. Llega a unos 1.000-1.500 aumentos, suficientes para ver células, núcleos y cloroplastos. Las muestras deben ser finas y a menudo se tiñen (azul de metileno, lugol) para resaltar estructuras.</p><p>El <b>microscopio electrónico</b> usa un haz de electrones en lugar de luz y alcanza cientos de miles de aumentos. El de transmisión (MET) permite ver los orgánulos por dentro y los virus; el de barrido (MEB) da imágenes en relieve de las superficies. Para calcular el tamaño real de algo que vemos al microscopio se divide el tamaño de la imagen entre los aumentos. Hay excepciones de tamaño: la yema de un huevo de avestruz es una sola célula de varios centímetros, y algunas neuronas tienen prolongaciones de más de un metro.</p>`,
      svg: L6.barras("Comparación de tamaños: átomo, virus, bacteria, célula humana y óvulo", [["virus", 1, "0,1 µm"], ["bacteria", 2.5, "2 µm"], ["glóbulo rojo", 3.5, "7 µm"], ["célula piel", 4.5, "30 µm"], ["óvulo", 6, "120 µm"]], "Tamaños (escala de 10 en 10)", 7),
    },
    {
      html: `<h3>1.3 De qué está hecha una célula</h3><p>Las células están formadas por los mismos átomos que la materia inerte, pero combinados de forma especial. Los <b>bioelementos</b> principales son carbono (C), hidrógeno (H), oxígeno (O), nitrógeno (N), fósforo (P) y azufre (S): forman más del 95 % de la materia viva. El carbono es el protagonista porque puede unirse a otros cuatro átomos y formar cadenas largas y anillos.</p><p>Con esos átomos se construyen las <b>biomoléculas</b>. Las <b>inorgánicas</b> son el <mark>agua</mark>, que supone alrededor del 70 % del peso de una célula y es el medio donde ocurren todas las reacciones, y las sales minerales. Las <b>orgánicas</b> son cuatro grandes grupos:</p><p>• <b>Glúcidos</b> (azúcares): la glucosa da energía rápida; el almidón y el glucógeno la almacenan; la celulosa forma la pared de las plantas.<br>• <b>Lípidos</b> (grasas): reservan energía y forman la membrana de todas las células.<br>• <b>Proteínas</b>: cadenas de aminoácidos que hacen casi todo el trabajo: enzimas que aceleran reacciones, anticuerpos, transportadores, músculo.<br>• <b>Ácidos nucleicos</b> (ADN y ARN): guardan y leen la información genética.</p><p>Conocer estas moléculas ayuda a entender la dieta: comemos glúcidos, lípidos y proteínas porque nuestras células los desmontan para obtener energía y piezas de construcción.</p>`,
      svg: L6.barras("Composición aproximada de una célula: agua, proteínas, lípidos, glúcidos y ácidos nucleicos", [["agua", 70, "70 %"], ["proteínas", 15, "15 %"], ["lípidos", 5, "5 %"], ["ác. nucleicos", 5, "5 %"], ["glúcidos", 3, "3 %"]], "¿De qué está hecha una célula?"),
    },
    {
      html: `<h3>2.1 Células procariotas y eucariotas</h3><p>Todas las células tienen tres elementos comunes: una <b>membrana plasmática</b> que las separa del exterior, un <b>citoplasma</b> acuoso donde ocurren las reacciones y <b>ADN</b> con las instrucciones. A partir de ahí hay dos grandes modelos.</p><p>Las <b>células procariotas</b> son las más antiguas y sencillas: aparecieron hace unos 3.500 millones de años. <mark>No tienen núcleo</mark>: su ADN es una molécula circular suelta en una zona del citoplasma llamada <b>nucleoide</b>, y a menudo llevan pequeños anillos de ADN extra, los <b>plásmidos</b>. No tienen orgánulos con membrana; solo ribosomas pequeños. Por fuera tienen una pared celular rígida y, a veces, una cápsula, flagelos para moverse y pelos (pili) para pegarse. Miden de 1 a 5 µm. Son procariotas las <b>bacterias</b> y las <b>arqueas</b>.</p><p>Las <b>células eucariotas</b> («con núcleo verdadero») son unas diez veces mayores y mucho más complejas: <mark>tienen un núcleo rodeado por una doble membrana</mark> que protege el ADN, y un sistema de orgánulos con membrana que se reparten el trabajo, como las habitaciones de una casa. También tienen un <b>citoesqueleto</b> de fibras de proteína que da forma a la célula y mueve los orgánulos. Son eucariotas los animales, las plantas, los hongos y los protoctistas (algas y protozoos).</p>`,
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
      html: `<h3>2.2 Cómo surgió la célula eucariota: la endosimbiosis</h3><p>Las primeras células eucariotas aparecieron hace unos 2.000 millones de años. ¿Cómo pasó la vida de las sencillas procariotas a células tan complejas? La explicación más aceptada es la <b>teoría endosimbiótica</b>, defendida por la bióloga <b>Lynn Margulis</b> en 1967.</p><p>Según esta teoría, una célula grande englobó a una bacteria pequeña capaz de usar oxígeno para obtener mucha energía, pero no la digirió. Las dos salieron ganando: la bacteria tenía alimento y protección, y la célula grande recibía energía. Con el tiempo, esa bacteria se convirtió en la <mark>mitocondria</mark>. Más tarde, algunas de esas células englobaron cianobacterias fotosintéticas, que se convirtieron en los <mark>cloroplastos</mark> de algas y plantas. Una relación así, en la que un organismo vive dentro de otro con beneficio mutuo, se llama <b>endosimbiosis</b>.</p><p>Las pruebas son muy sólidas: mitocondrias y cloroplastos tienen <b>su propio ADN circular</b>, como las bacterias; tienen <b>ribosomas</b> de tipo bacteriano; están rodeados por <b>dos membranas</b> (la interna sería la de la antigua bacteria); y se dividen por su cuenta, por bipartición, dentro de la célula. Además, algunos antibióticos que atacan a las bacterias también dañan las mitocondrias. Es un buen ejemplo de que la cooperación también es un motor de la evolución.</p>`,
      svg: L6.flujo("Endosimbiosis: una célula engloba una bacteria, que se convierte en mitocondria, y después una cianobacteria, que se convierte en cloroplasto", ["Célula grande sin mitocondrias", "Engloba una bacteria aerobia → mitocondria", "Célula eucariota animal (con mitocondrias)", "Engloba una cianobacteria → cloroplasto"], "La teoría endosimbiótica"),
    },
    {
      html: `<h3>2.3 La célula animal y la célula vegetal</h3><p>Las dos son eucariotas y comparten membrana, núcleo, mitocondrias, ribosomas, retículo y aparato de Golgi, pero tienen diferencias que se relacionan con su forma de vida.</p><p>La <b>célula vegetal</b> tiene tres estructuras que la animal no tiene. La <mark>pared celular</mark> de <b>celulosa</b>, rígida, que rodea la membrana, da forma poliédrica a la célula y sostiene a la planta, que no tiene esqueleto. Los <mark>cloroplastos</mark>, con clorofila, donde se hace la fotosíntesis. Y una <b>gran vacuola</b> central que puede ocupar el 80 % del volumen: almacena agua y sales y empuja el citoplasma contra la pared, lo que mantiene la planta tiesa (por eso una planta sin agua se marchita).</p><p>La <b>célula animal</b> no tiene pared, así que su forma es más variable: redondeada, estrellada, alargada. Tiene <b>centriolos</b>, dos cilindros de proteína que organizan el reparto de los cromosomas en la división, y sus vacuolas son pequeñas y numerosas. Como no hace fotosíntesis, depende de los alimentos que toma del exterior.</p><p>Las células de los <b>hongos</b> se parecen a las vegetales por tener pared, pero su pared es de <b>quitina</b>, como el caparazón de los insectos, y no tienen cloroplastos: son heterótrofos.</p>`,
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
      html: `<h3>3.1 Los orgánulos y sus funciones</h3><p>En el citoplasma de una célula eucariota hay estructuras especializadas, los <b>orgánulos</b>, cada uno con un trabajo. Una buena forma de recordarlos es imaginar la célula como una fábrica.</p><p>Los <b>ribosomas</b> son pequeños gránulos sin membrana que <mark>fabrican proteínas</mark> siguiendo las instrucciones del ADN: son los obreros de la cadena de montaje. El <b>retículo endoplasmático</b> es una red de sacos y tubos: el rugoso, cubierto de ribosomas, fabrica y transporta proteínas; el liso fabrica lípidos y elimina sustancias tóxicas (es abundante en el hígado). El <b>aparato de Golgi</b> es un conjunto de sacos aplanados que <b>modifica, empaqueta y distribuye</b> las proteínas en vesículas, como el departamento de envíos. Los <b>lisosomas</b> contienen enzimas digestivas que destruyen restos y microbios: son el servicio de reciclaje.</p><p>Las <mark>mitocondrias</mark> son las centrales energéticas: en ellas se realiza la respiración celular, que produce ATP. Una célula de músculo o de hígado puede tener más de mil. Las <b>vacuolas</b> almacenan agua, nutrientes o desechos. El <b>citoesqueleto</b> es el andamio interno, y los <b>cilios</b> y <b>flagelos</b>, prolongaciones móviles. La cantidad de cada orgánulo depende de la función de la célula: muchas mitocondrias si gasta mucha energía, mucho retículo rugoso si fabrica muchas proteínas (como las del páncreas).</p>`,
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
      html: `<h3>3.2 El núcleo, centro de control</h3><p>El <b>núcleo</b> es el orgánulo más visible de la célula eucariota y su centro de mando, porque guarda el <mark>ADN, que contiene las instrucciones para fabricar todas las proteínas</mark>. Si se le quita el núcleo a una célula, deja de dividirse y acaba muriendo.</p><p>Tiene cuatro partes. La <b>envoltura nuclear</b> es una doble membrana atravesada por <b>poros nucleares</b>, por los que salen las copias de las instrucciones (ARN mensajero) hacia el citoplasma. El <b>nucleoplasma</b> es el medio interno. El <b>nucléolo</b> es una zona densa donde se fabrican las piezas de los ribosomas. Y la <b>cromatina</b> es el ADN unido a proteínas, extendido como un ovillo de hilo.</p><p>Cuando la célula va a dividirse, la cromatina se enrolla y se compacta hasta formar los <mark>cromosomas</mark>, que ya se ven al microscopio óptico. Cada especie tiene un número fijo de cromosomas: los humanos tenemos 46 en cada célula del cuerpo (23 pares), el perro 78 y el guisante 14. El número no tiene que ver con la complejidad del organismo.</p><p>Hay células que pierden el núcleo al madurar, como los <b>glóbulos rojos</b> de los mamíferos: así dejan más espacio para la hemoglobina que transporta oxígeno, pero no pueden dividirse y viven solo unos 120 días.</p>`,
      svg: L6.radial("El núcleo y sus partes: envoltura con poros, nucleoplasma, nucléolo y cromatina", "Núcleo", ["Envoltura con poros", "Nucléolo: ribosomas", "Cromatina: ADN + proteínas", "Cromosomas al dividirse"], "var(--inf)"),
    },
    {
      html: `<h3>3.3 La membrana plasmática y el transporte</h3><p>La <b>membrana plasmática</b> es una lámina finísima (unos 8 nanómetros) formada por una <b>doble capa de lípidos</b> con <b>proteínas</b> incrustadas y algunos azúcares en la cara externa. Su estructura se describe con el <b>modelo de mosaico fluido</b>: las moléculas se mueven, como boyas en el agua. Es <mark>semipermeable</mark>: deja pasar unas sustancias y otras no.</p><p>En el <b>transporte pasivo</b> las sustancias pasan <b>sin gastar energía</b>, siempre desde donde están más concentradas hacia donde lo están menos. Así entran el oxígeno y salen el CO₂ por <b>difusión</b>. El paso del agua se llama <mark>ósmosis</mark>: el agua va hacia el lado donde hay más solutos (sales, azúcares). Si ponemos una célula en agua muy salada, pierde agua y se arruga; en agua destilada, se hincha.</p><p>En el <b>transporte activo</b>, proteínas «bomba» mueven sustancias <b>en contra</b> de su concentración, <b>gastando ATP</b>. La bomba de sodio-potasio de las neuronas consume buena parte de la energía del cerebro. Las partículas grandes entran envueltas en un trozo de membrana (<b>endocitosis</b>: así comen los glóbulos blancos a las bacterias) o salen así (<b>exocitosis</b>: así se liberan hormonas). La ósmosis explica cosas cotidianas: la sal conserva el jamón porque deshidrata a las bacterias, y una ensalada aliñada con antelación queda lacia.</p>`,
      svg: L6.compara("Transporte pasivo y activo a través de la membrana", ["Pasivo", "var(--leaf)", ["sin gasto de ATP", "a favor de concentración", "difusión de O₂ y CO₂", "ósmosis (agua)"]], ["Activo", "var(--red)", ["gasta ATP", "en contra de concentración", "bombas de proteína", "endo y exocitosis"]]),
      video: { id: "yzkohlVwaB8", titulo: "Transporte activo y pasivo en la membrana plasmática", canal: "Random HD", vistas: 1517103 },
    },
    {
      html: `<h3>4.1 Las funciones vitales: la nutrición celular</h3><p>Cada célula realiza las tres funciones vitales: <b>nutrición</b>, <b>relación</b> y <b>reproducción</b>. La <b>nutrición</b> es el conjunto de procesos para obtener materia y energía. Dentro de la célula, las reacciones químicas que lo hacen posible se llaman en conjunto <mark>metabolismo</mark>, y tienen dos caras: el <b>anabolismo</b> construye moléculas grandes a partir de pequeñas, gastando energía (por ejemplo, fabricar proteínas); el <b>catabolismo</b> rompe moléculas grandes y libera energía (por ejemplo, la respiración celular).</p><p>Según cómo obtienen la materia orgánica, las células son de dos tipos. Las <b>autótrofas</b> la fabrican ellas mismas a partir de materia inorgánica (CO₂, agua y sales). La mayoría lo hace con la energía de la luz, mediante la <mark>fotosíntesis</mark>: plantas, algas y cianobacterias. Algunas bacterias usan la energía de reacciones químicas (quimiosíntesis), como las que viven en las fuentes hidrotermales del fondo del mar.</p><p>Las <b>heterótrofas</b> toman la materia orgánica ya hecha de otros seres vivos: animales, hongos, protozoos y la mayoría de bacterias. Todas las enzimas que dirigen el metabolismo son proteínas, y muchas necesitan vitaminas para funcionar: por eso una falta de vitaminas altera reacciones concretas de nuestras células.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo: el cloroplasto produce glucosa y oxígeno y la mitocondria los usa y devuelve dióxido de carbono y agua">
        <defs><marker id="ce1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <ellipse cx="60" cy="90" rx="40" ry="24" fill="var(--leaf)"/><text x="60" y="94" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>cloroplasto</text>
        <ellipse cx="200" cy="90" rx="40" ry="24" fill="var(--red)"/><text x="200" y="94" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>mitocondria</text>
        <path d="M90 66 Q 130 30 170 66" fill="none" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#ce1)"/><path d="M170 114 Q 130 150 90 114" fill="none" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#ce1)"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="130" y="34" fill="var(--ink)">glucosa + O₂</text><text x="130" y="160" fill="var(--ink)">CO₂ + H₂O</text><text x="30" y="40" fill="var(--sun)">☀ luz</text><text x="226" y="40" fill="var(--sun)">ATP</text></g>
      </svg>`,
    },
    {
      html: `<h3>4.2 Respiración celular y fotosíntesis</h3><p>La <b>respiración celular</b> ocurre en las <mark>mitocondrias</mark> de casi todas las células eucariotas, también en las de las plantas. La glucosa se combina con oxígeno y se descompone en dióxido de carbono y agua, y la energía liberada se guarda en moléculas de <b>ATP</b>, la «moneda energética» que la célula gasta para moverse, fabricar moléculas o bombear sustancias:</p><p><b>glucosa + oxígeno → CO₂ + agua + energía (ATP)</b></p><p>La <b>fotosíntesis</b> ocurre en los <mark>cloroplastos</mark>. La clorofila capta la energía de la luz y la usa para fabricar glucosa a partir de CO₂ y agua, liberando oxígeno:</p><p><b>CO₂ + agua + luz → glucosa + oxígeno</b></p><table class="tb"><thead><tr><th></th><th>Fotosíntesis</th><th>Respiración</th></tr></thead><tbody><tr><td>Orgánulo</td><td>cloroplasto</td><td>mitocondria</td></tr><tr><td>Quién</td><td>plantas, algas, cianobacterias</td><td>casi todos los seres vivos</td></tr><tr><td>Energía</td><td>la almacena (luz → química)</td><td>la libera (ATP)</td></tr></tbody></table><p>Son procesos complementarios: los productos de uno son los reactivos del otro. Las plantas respiran siempre, de día y de noche, pero de día hacen mucha más fotosíntesis, por eso el balance diurno es que desprenden oxígeno. Cuando falta oxígeno, algunas células obtienen algo de energía por <b>fermentación</b>: las levaduras producen alcohol y CO₂ (pan, cerveza), y nuestros músculos, en un esfuerzo intenso, producen ácido láctico.</p>`,
      svg: L6.ciclo("Ciclo entre fotosíntesis y respiración: una produce glucosa y oxígeno y la otra CO₂ y agua", "Energía", ["Fotosíntesis (cloroplasto)", "glucosa + O₂", "Respiración (mitocondria)", "CO₂ + agua"], "var(--sun)"),
      video: { id: "eJ9Zjc-jdys", titulo: "Respiración celular", canal: "Amoeba Sisters", vistas: 8094159 },
    },
    {
      html: `<h3>4.3 Relación y reproducción de las células</h3><p>La <b>función de relación</b> permite a la célula detectar cambios del medio (estímulos) y responder. Las células tienen en su membrana <b>receptores</b>, proteínas que reconocen moléculas concretas como las hormonas, igual que una cerradura reconoce una llave. Las respuestas pueden ser moverse, segregar sustancias o cambiar el metabolismo. Muchos protozoos se desplazan con <b>flagelos</b> o <b>cilios</b>, o emitiendo <b>pseudópodos</b> (falsos pies), como la ameba. Un ejemplo de relación es la <b>quimiotaxis</b>: los glóbulos blancos se mueven hacia las sustancias que sueltan las bacterias en una herida.</p><p>La <b>función de reproducción</b> permite a una célula originar otras. En las procariotas se produce por <b>bipartición</b>: el ADN se copia y la célula se parte en dos. En condiciones ideales, una bacteria como <i>E. coli</i> se divide cada 20 minutos, por eso una infección avanza tan deprisa. En las eucariotas, el núcleo se divide por <mark>mitosis</mark>, que produce dos células hijas idénticas (crecimiento y reparación de tejidos), o por <mark>meiosis</mark>, que produce células con la mitad de cromosomas, los gametos. Lo estudiarás con detalle en el tema del ciclo celular.</p><p>Que las células se dividan sin control es el origen del <b>cáncer</b>: las señales que frenan la división dejan de funcionar.</p>`,
      svg: L6.flujo("Funciones vitales de la célula: nutrición, relación y reproducción", ["Nutrición: obtener materia y energía (metabolismo)", "Relación: captar estímulos con receptores y responder", "Reproducción: bipartición, mitosis o meiosis"], "Las tres funciones vitales"),
    },
    {
      html: `<h3>5.1 Unicelulares, pluricelulares y niveles de organización</h3><p>Los <b>organismos unicelulares</b> son una sola célula que hace todas las funciones: bacterias, levaduras, muchas algas y protozoos como el paramecio o la ameba. Algunos forman <b>colonias</b>, grupos de células iguales que viven juntas pero que podrían vivir solas.</p><p>Los <b>organismos pluricelulares</b> están formados por muchas células que se <mark>especializan</mark>: cada tipo tiene una forma y una función, se reparten el trabajo y dependen unas de otras. Una neurona no podría sobrevivir sola. En el cuerpo humano hay más de 200 tipos de células: neuronas con largas prolongaciones para transmitir impulsos, células musculares alargadas que se contraen, espermatozoides con flagelo, glóbulos rojos en forma de disco.</p><p>La materia viva se organiza en <b>niveles</b> de complejidad creciente: <mark>célula → tejido → órgano → sistema o aparato → organismo</mark>. Un <b>tejido</b> es un conjunto de células parecidas con la misma función (tejido muscular, nervioso, epitelial, conectivo). Un <b>órgano</b> está formado por varios tejidos (el corazón tiene tejido muscular, nervioso y conectivo). Un <b>sistema</b> agrupa órganos que colaboran (sistema circulatorio). Todas nuestras células llevan el mismo ADN, pero cada tipo <b>activa solo una parte de sus genes</b>: por eso una neurona y un glóbulo rojo son tan distintos. Ese proceso se llama diferenciación celular.</p>`,
      svg: L6.piramide("Niveles de organización: célula, tejido, órgano, sistema y organismo", [["célula", "var(--pen)"], ["tejido", "var(--leaf)"], ["órgano", "var(--sun)"], ["sistema", "var(--red)"], ["organismo", "var(--inf)"]], "de lo más simple a lo más complejo"),
    },
    {
      html: `<h3>5.2 Los virus: en la frontera de la vida</h3><p>Los <b>virus</b> son mucho más pequeños que las células (entre 20 y 300 nanómetros) y solo se ven con el microscopio electrónico. Están formados por un <b>ácido nucleico</b> (ADN o ARN) rodeado por una cubierta de proteínas llamada <b>cápsida</b>; algunos, como el de la gripe, tienen además una envoltura de lípidos.</p><p>Según la teoría celular, <mark>los virus no son células</mark> y, por eso, la mayoría de los biólogos no los considera seres vivos: no tienen metabolismo propio, no fabrican energía ni proteínas y no pueden reproducirse por sí mismos. Son <b>parásitos obligados</b>: entran en una célula, usan sus ribosomas y su energía para fabricar copias de sí mismos y, a menudo, la destruyen al salir.</p><p>Esto tiene consecuencias prácticas muy importantes. Los <mark>antibióticos atacan estructuras de las bacterias</mark> (como su pared o sus ribosomas) y <b>no sirven contra los virus</b>: tomar antibióticos para un resfriado no ayuda y favorece la aparición de bacterias resistentes. Contra los virus funcionan las <b>vacunas</b>, que entrenan al sistema inmunitario, y algunos antivirales específicos. Algunos virus, los <b>bacteriófagos</b>, infectan bacterias y se estudian como alternativa a los antibióticos.</p>`,
      svg: L6.compara("Diferencias entre una bacteria y un virus", ["Bacteria", "var(--leaf)", ["es una célula", "1-5 µm", "metabolismo propio", "antibióticos sí"]], ["Virus", "var(--red)", ["no es una célula", "20-300 nm", "necesita una célula", "antibióticos no"]]),
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
  ejemplos: [
    { enunciado: "Observas una célula con un ocular de 10× y un objetivo de 40×. En la imagen mide 4 mm. ¿Cuál es su tamaño real?", pasos: ["Aumentos totales = 10 · 40 = 400.", "Tamaño real = tamaño en la imagen / aumentos = 4 mm / 400 = 0,01 mm.", "0,01 mm = 10 µm."], resultado: "La célula mide 10 µm." },
    { enunciado: "Una célula tiene núcleo, mitocondrias, pared celular, cloroplastos y una gran vacuola. ¿Qué tipo de célula es?", pasos: ["Tiene núcleo: es eucariota.", "Tiene pared celular, cloroplastos y una vacuola grande: rasgos de las células vegetales.", "Las animales no tienen pared ni cloroplastos."], resultado: "Es una célula eucariota vegetal." },
    { enunciado: "Se ponen glóbulos rojos en agua destilada y en agua muy salada. Predice qué pasa.", pasos: ["En agua destilada hay más agua fuera que dentro: el agua entra por ósmosis y la célula se hincha hasta poder romperse.", "En agua muy salada hay menos agua fuera: el agua sale y la célula se arruga.", "Por eso los sueros médicos tienen la misma concentración de sales que la sangre."], resultado: "En agua destilada se hinchan; en agua salada se arrugan." },
    { enunciado: "Una bacteria mide 2 µm. ¿Cuántas cabrían en fila en 1 mm? ¿Y cuánto mediría su imagen con un microscopio de 1.000 aumentos?", pasos: ["1 mm = 1.000 µm.", "1.000 µm / 2 µm = 500 bacterias en fila.", "Imagen = tamaño real × aumentos = 2 µm × 1.000 = 2.000 µm.", "2.000 µm = 2 mm."], resultado: "Caben 500 bacterias en 1 mm y su imagen mediría 2 mm." },
    { enunciado: "Al microscopio electrónico ves una célula con núcleo, muchas mitocondrias, sin pared ni cloroplastos y con un retículo rugoso muy desarrollado. ¿Qué tipo de célula es y a qué se dedica?", pasos: ["Tiene núcleo: es eucariota.", "No tiene pared ni cloroplastos: es animal.", "Muchas mitocondrias: gasta mucha energía.", "Mucho retículo rugoso: fabrica muchas proteínas, probablemente para exportarlas."], resultado: "Es una célula animal secretora de proteínas, por ejemplo del páncreas (fabrica enzimas digestivas o insulina)." },
    { enunciado: "Una planta en una campana de cristal sellada se deja a la luz 12 horas y después a oscuras 12 horas. Explica cómo cambian el O₂ y el CO₂ del aire.", pasos: ["A la luz hace fotosíntesis y respiración, pero la fotosíntesis es mucho mayor.", "Balance de día: consume CO₂ y desprende O₂; el O₂ sube y el CO₂ baja.", "A oscuras solo respira: consume O₂ y desprende CO₂.", "Balance de noche: el O₂ baja y el CO₂ sube."], resultado: "De día sube el oxígeno y baja el CO₂; de noche ocurre lo contrario, porque la planta solo respira." },
  ],
  errores: [
    "Pensar que las plantas no respiran: respiran siempre, de día y de noche.",
    "Decir que las bacterias tienen núcleo: son procariotas y su ADN está libre en el citoplasma.",
    "Confundir pared celular (solo vegetales, hongos y bacterias) con membrana plasmática (todas las células).",
    "Creer que los virus son células: no tienen metabolismo propio y necesitan una célula para reproducirse.",
    "Pensar que la fotosíntesis produce energía de la nada: transforma la energía de la luz en energía química.",
    "Pensar que los antibióticos curan la gripe o el resfriado: son enfermedades víricas y los antibióticos solo actúan sobre bacterias.",
  ],
  ejercicios: [
    { nivel: "básico", ...{ q: "Enuncia los tres puntos principales de la teoría celular.", sol: "Todos los seres vivos están formados por células; la célula es la unidad de estructura y función de los seres vivos; toda célula procede de otra célula." } },
    { nivel: "básico", ...{ q: "Indica tres diferencias entre una célula procariota y una eucariota.", sol: "La procariota no tiene núcleo (el ADN está libre), no tiene orgánulos con membrana y es más pequeña. La eucariota tiene núcleo, orgánulos como mitocondrias y suele ser mayor." } },
    { nivel: "básico", ...{ q: "Calcula los aumentos de un microscopio con ocular 15× y objetivo 100×.", sol: "15 · 100 = 1.500 aumentos." } },
    { nivel: "básico", ...{ q: "Escribe la ecuación general de la respiración celular.", sol: "Glucosa + oxígeno → dióxido de carbono + agua + energía (ATP)." } },
    { nivel: "básico", ...{ q: "Ordena de menor a mayor complejidad: órgano, célula, sistema, tejido.", sol: "Célula < tejido < órgano < sistema." } },
    { nivel: "básico", q: "Nombra las tres estructuras que tiene la célula vegetal y no la animal, y di la función de cada una.", sol: "Pared celular de celulosa (da forma y sostén), cloroplastos (fotosíntesis) y gran vacuola central (almacena agua y mantiene la turgencia)." },
    { nivel: "básico", q: "Relaciona cada orgánulo con su función: ribosoma, lisosoma, aparato de Golgi, mitocondria. Funciones: digerir sustancias, fabricar proteínas, producir ATP, empaquetar y distribuir.", sol: "Ribosoma → fabricar proteínas; lisosoma → digerir sustancias; aparato de Golgi → empaquetar y distribuir; mitocondria → producir ATP (respiración celular)." },
    { nivel: "básico", q: "¿Qué científico vio por primera vez «celdillas» y en qué material? ¿Y quién vio los primeros microorganismos vivos?", sol: "Robert Hooke, en 1665, en una lámina de corcho. Anton van Leeuwenhoek observó microorganismos vivos con lentes que pulía él mismo." },
    { nivel: "básico", q: "Di si son autótrofos o heterótrofos: un pino, un champiñón, una vaca, una cianobacteria, una levadura.", sol: "Autótrofos: pino y cianobacteria (hacen fotosíntesis). Heterótrofos: champiñón, vaca y levadura (toman materia orgánica ya hecha)." },
    { nivel: "básico", q: "¿Qué son la cromatina y los cromosomas? ¿Cuántos cromosomas tiene una célula de tu piel?", sol: "La cromatina es el ADN unido a proteínas, extendido en el núcleo; los cromosomas son esa misma cromatina enrollada y compactada cuando la célula se divide. Una célula de la piel humana tiene 46 cromosomas (23 pares)." },
    { nivel: "básico", q: "Escribe la ecuación de la fotosíntesis e indica en qué orgánulo ocurre.", sol: "CO₂ + agua + energía de la luz → glucosa + oxígeno. Ocurre en los cloroplastos." },
    { nivel: "básico", q: "Nombra los cuatro grupos de biomoléculas orgánicas y pon un ejemplo de cada uno.", sol: "Glúcidos (glucosa, almidón, celulosa), lípidos (grasas, fosfolípidos de la membrana), proteínas (enzimas, hemoglobina, queratina) y ácidos nucleicos (ADN, ARN)." },
    { nivel: "medio", ...{ q: "¿Qué orgánulo esperas encontrar en abundancia en una célula muscular? ¿Por qué?", sol: "Mitocondrias, porque el músculo necesita mucha energía y la obtiene con la respiración celular." } },
    { nivel: "medio", ...{ q: "¿Por qué las fresas con azúcar sueltan jugo?", sol: "El azúcar crea fuera de las células una concentración mayor y el agua sale de ellas por ósmosis." } },
    { nivel: "medio", ...{ q: "¿En qué se diferencian el transporte activo y el pasivo?", sol: "El pasivo va a favor de la concentración y no gasta energía; el activo va en contra y gasta ATP." } },
    { nivel: "medio", q: "Una célula se ve en la pantalla del microscopio con un tamaño de 6 mm usando un ocular de 10× y un objetivo de 40×. Calcula su tamaño real en µm.", sol: "Aumentos = 10 · 40 = 400. Tamaño real = 6 mm / 400 = 0,015 mm. Como 1 mm = 1.000 µm, mide 15 µm." },
    { nivel: "medio", q: "Explica las tres pruebas principales de la teoría endosimbiótica.", sol: "Mitocondrias y cloroplastos tienen ADN circular propio como las bacterias; tienen ribosomas de tipo bacteriano; están rodeados por dos membranas y se dividen por bipartición dentro de la célula. Todo indica que fueron bacterias libres englobadas por otra célula." },
    { nivel: "medio", q: "¿Por qué el jamón curado con sal se conserva durante meses sin estropearse?", sol: "La sal crea fuera de las células de las bacterias una concentración de solutos muy alta; por ósmosis, el agua sale de las bacterias, que se deshidratan y no pueden reproducirse. Además, la sal deshidrata la carne." },
    { nivel: "medio", q: "Compara metabolismo anabólico y catabólico con un ejemplo de cada uno.", sol: "El anabolismo construye moléculas complejas a partir de sencillas y consume energía (fotosíntesis, fabricar proteínas). El catabolismo rompe moléculas complejas y libera energía (respiración celular, digestión de grasas)." },
    { nivel: "medio", q: "Los glóbulos rojos de los mamíferos no tienen núcleo. Explica una ventaja y un inconveniente.", sol: "Ventaja: tienen más espacio para la hemoglobina y transportan más oxígeno. Inconveniente: no pueden dividirse ni repararse, así que viven unos 120 días y la médula ósea debe fabricar millones cada segundo." },
    { nivel: "medio", q: "¿Por qué un médico no receta antibióticos para la gripe? ¿Qué problema causaría hacerlo?", sol: "La gripe la causa un virus, que no es una célula y no tiene las estructuras que atacan los antibióticos (pared, ribosomas bacterianos). Darlos no cura y favorece que las bacterias del cuerpo se vuelvan resistentes." },
    { nivel: "medio", q: "Ordena de menor a mayor: un ribosoma, una bacteria, un virus, una célula de la piel, un átomo de carbono.", sol: "Átomo de carbono (0,0001 µm) < ribosoma (unos 0,025 µm) < virus (0,1 µm) < bacteria (2 µm) < célula de la piel (30 µm)." },
    { nivel: "medio", q: "Explica por qué una planta marchita recupera su forma si la riegas.", sol: "Al regarla, el agua entra por ósmosis en las vacuolas de sus células; las vacuolas se llenan y empujan el citoplasma contra la pared celular (turgencia). Las células se ponen tensas y la planta vuelve a estar firme." },
    { nivel: "medio", q: "¿Qué diferencia hay entre una colonia de células y un organismo pluricelular?", sol: "En una colonia las células son iguales y podrían vivir solas. En un pluricelular las células están especializadas, se reparten el trabajo y dependen unas de otras: separadas no sobreviven." },
    { nivel: "medio", q: "Haz una tabla con tres diferencias entre fotosíntesis y respiración celular.", sol: "Orgánulo: cloroplasto / mitocondria. Reactivos: CO₂ + agua + luz / glucosa + O₂. Energía: la almacena en glucosa / la libera como ATP. (También: quién la hace; productos.)" },
    { nivel: "avanzado", ...{ q: "Si todas nuestras células tienen el mismo ADN, ¿por qué una neurona es distinta de una célula de la piel?", sol: "Porque cada tipo celular activa solo una parte de sus genes; esa expresión diferente da lugar a células especializadas." } },
    { nivel: "avanzado", ...{ q: "Explica la relación entre fotosíntesis y respiración en un ecosistema.", sol: "La fotosíntesis produce glucosa y oxígeno, que usan los seres vivos para respirar; la respiración devuelve CO₂ y agua, que usan las plantas para la fotosíntesis. Forman un ciclo de materia." } },
    { nivel: "avanzado", q: "En una carrera de 400 m te duelen las piernas por el ácido láctico. Explica qué ha pasado en tus células musculares.", sol: "Con el esfuerzo intenso, la sangre no lleva oxígeno suficiente a las mitocondrias. Las células obtienen algo de energía por fermentación láctica, que no necesita oxígeno pero produce poca energía y ácido láctico, relacionado con la fatiga. Al descansar, el oxígeno vuelve y se recupera la respiración celular." },
    { nivel: "avanzado", q: "Diseña un experimento con patatas para demostrar la ósmosis. Indica variables y resultado esperado.", sol: "Cortar tiras iguales de patata, pesarlas y ponerlas en vasos con agua destilada, agua con poca sal y agua muy salada. Variable independiente: concentración de sal; dependiente: masa tras 1 hora; controladas: tamaño, tiempo, temperatura. Resultado: en agua destilada ganan masa y se ponen firmes; en agua muy salada pierden masa y se ablandan." },
    { nivel: "avanzado", q: "Una célula tiene núcleo, pared celular, no tiene cloroplastos y su pared es de quitina. ¿A qué reino pertenece? Justifica cada dato.", sol: "Es un hongo. Núcleo → eucariota; pared → no es animal; sin cloroplastos → no es planta ni alga; pared de quitina → característica de los hongos (las plantas la tienen de celulosa)." },
    { nivel: "avanzado", q: "Si se destruyen los lisosomas de una célula, ¿qué consecuencias tendría? ¿Y si se dañan sus mitocondrias?", sol: "Sin lisosomas no podría digerir ni reciclar restos, que se acumularían (hay enfermedades hereditarias así). Sin mitocondrias no produciría casi ATP; las células que más energía gastan (neuronas, músculo) fallarían primero." },
    { nivel: "avanzado", q: "El cáncer se describe como «células que se dividen sin control». Relaciónalo con la función de relación y la de reproducción de la célula.", sol: "Las células normales reciben señales (función de relación) que les indican cuándo dividirse y cuándo parar. En el cáncer, mutaciones en el ADN estropean esos receptores o señales, la célula ignora las órdenes de freno y se reproduce sin control, formando un tumor." },
    { nivel: "avanzado", q: "¿Por qué una célula no puede crecer indefinidamente? Piensa en la relación superficie-volumen.", sol: "Al crecer, el volumen aumenta más deprisa que la superficie (volumen al cubo, superficie al cuadrado). La membrana no podría hacer entrar nutrientes y salir desechos a la velocidad que necesita todo el interior. Por eso las células grandes se dividen o tienen formas alargadas o con pliegues." },
    { nivel: "avanzado", q: "Argumenta, con la teoría celular, si los virus son o no seres vivos. Incluye un argumento a favor y otro en contra.", sol: "En contra: no son células, no tienen metabolismo ni se reproducen solos; la teoría celular dice que todo ser vivo está hecho de células. A favor: tienen material genético, se reproducen (dentro de una célula) y evolucionan por selección natural. La mayoría de biólogos los sitúa en la frontera de la vida." },
  ],
  quiz: [
    { q: "¿Qué científico afirmó que «toda célula procede de otra célula»?", o: ["Hooke", "Virchow", "Leeuwenhoek", "Darwin"], a: 1, e: "Virchow lo resumió en 1855: omnis cellula e cellula." },
    { q: "Con un ocular de 15× y un objetivo de 40× se obtienen…", o: ["55 aumentos", "150 aumentos", "600 aumentos", "6.000 aumentos"], a: 2, e: "Los aumentos se multiplican: 15 · 40 = 600." },
    { q: "Un micrómetro (µm) es…", o: ["la milésima parte de un milímetro", "la décima parte de un milímetro", "mil milímetros", "la millonésima parte de un metro cuadrado"], a: 0, e: "1 mm = 1.000 µm." },
    { q: "¿Cuál es la biomolécula más abundante en una célula?", o: ["Las proteínas", "Los glúcidos", "Los lípidos", "El agua"], a: 3, e: "El agua supone en torno al 70 % del peso." },
    { q: "Las células procariotas…", o: ["tienen núcleo y mitocondrias", "no tienen núcleo y su ADN está en el nucleoide", "solo forman organismos pluricelulares", "tienen cloroplastos siempre"], a: 1, e: "Bacterias y arqueas: ADN libre, sin orgánulos con membrana." },
    { q: "Según la teoría endosimbiótica, las mitocondrias fueron…", o: ["virus", "bacterias englobadas por otra célula", "trozos del núcleo", "cloroplastos que perdieron la clorofila"], a: 1, e: "Tienen ADN circular y ribosomas de tipo bacteriano." },
    { q: "La pared celular de los hongos está formada por…", o: ["celulosa", "quitina", "lípidos", "almidón"], a: 1, e: "La de las plantas es de celulosa." },
    { q: "¿Qué orgánulo empaqueta y distribuye las proteínas en vesículas?", o: ["El lisosoma", "La mitocondria", "El aparato de Golgi", "El nucléolo"], a: 2, e: "Es el «departamento de envíos» de la célula." },
    { q: "El retículo endoplasmático rugoso se llama así porque…", o: ["tiene ribosomas pegados", "está arrugado por falta de agua", "tiene cloroplastos", "está fuera de la célula"], a: 0, e: "Los ribosomas le dan aspecto granuloso." },
    { q: "¿En qué parte del núcleo se fabrican las piezas de los ribosomas?", o: ["En los poros", "En la envoltura", "En la cromatina", "En el nucléolo"], a: 3, e: "El nucléolo es la zona densa del núcleo." },
    { q: "La ósmosis es el paso de…", o: ["agua a través de una membrana semipermeable", "glucosa gastando ATP", "proteínas por endocitosis", "iones por bombas"], a: 0, e: "El agua va hacia donde hay más solutos." },
    { q: "Un glóbulo rojo en agua destilada…", o: ["se arruga", "no cambia", "se hincha y puede estallar", "se divide"], a: 2, e: "Entra agua por ósmosis porque fuera hay menos solutos." },
    { q: "¿Qué tipo de transporte gasta ATP?", o: ["La difusión", "La ósmosis", "El transporte activo", "Ninguno"], a: 2, e: "Mueve sustancias en contra de su concentración." },
    { q: "El conjunto de reacciones químicas de la célula se llama…", o: ["metabolismo", "mitosis", "ósmosis", "homeostasis"], a: 0, e: "Incluye anabolismo y catabolismo." },
    { q: "¿Cuál es un organismo autótrofo?", o: ["Un champiñón", "Una vaca", "Una levadura", "Un alga"], a: 3, e: "Las algas hacen fotosíntesis." },
    { q: "Las plantas respiran…", o: ["solo de noche", "de día y de noche", "solo de día", "nunca, porque hacen fotosíntesis"], a: 1, e: "Necesitan ATP siempre; de día también hacen fotosíntesis." },
    { q: "La fermentación de las levaduras produce…", o: ["oxígeno y glucosa", "alcohol y CO₂", "ácido láctico y oxígeno", "almidón"], a: 1, e: "Por eso sube la masa del pan." },
    { q: "Las bacterias se reproducen por…", o: ["meiosis", "bipartición", "mitosis con centriolos", "gemación del núcleo"], a: 1, e: "Copian su ADN y se parten en dos." },
    { q: "¿Cuál es el orden correcto de niveles de organización?", o: ["tejido → célula → órgano → sistema", "célula → órgano → tejido → sistema", "célula → tejido → órgano → sistema", "órgano → tejido → célula → sistema"], a: 2, e: "De lo más simple a lo más complejo." },
    { q: "¿Por qué los antibióticos no curan una infección vírica?", o: ["Porque los virus son demasiado grandes", "Porque los virus no son células y no tienen las estructuras que atacan", "Porque los virus tienen pared de celulosa", "Porque los virus hacen fotosíntesis"], a: 1, e: "Los antibióticos atacan pared, ribosomas u otras partes de las bacterias." },
  ],
  examen: [
    { q: "Enuncia la teoría celular. ¿Qué científicos contribuyeron?", o: ["Hooke, Schleiden, Schwann y Virchow", "Mendel y Darwin", "Newton y Galileo", "Watson y Crick"], a: 0, e: "Hooke vio celdillas; Schleiden y Schwann generalizaron; Virchow añadió el origen de las células." },
    { q: "Una célula sin núcleo, con pared y con plásmidos es…", o: ["vegetal", "animal", "procariota", "un hongo"], a: 2, e: "Es una bacteria." },
    { q: "Una imagen de 3 mm a 300 aumentos corresponde a un tamaño real de…", o: ["10 µm", "100 µm", "1 µm", "900 µm"], a: 0, e: "3 mm / 300 = 0,01 mm = 10 µm." },
    { q: "¿Qué orgánulo abunda en las células del hígado que eliminan tóxicos?", o: ["Cloroplastos", "Retículo endoplasmático liso", "Pared celular", "Centriolos"], a: 1, e: "El retículo liso fabrica lípidos y detoxifica." },
    { q: "Las células vegetales tienen y las animales no…", o: ["mitocondrias", "ribosomas", "pared, cloroplastos y gran vacuola", "membrana plasmática"], a: 2, e: "Son las tres diferencias clave." },
    { q: "La respiración celular…", o: ["solo la hacen los animales", "libera energía en forma de ATP", "fabrica glucosa", "ocurre en los cloroplastos"], a: 1, e: "Glucosa + O₂ → CO₂ + agua + ATP, en las mitocondrias." },
    { q: "Una lechuga aliñada con sal se pone lacia por…", o: ["transporte activo", "ósmosis", "fotosíntesis", "endocitosis"], a: 1, e: "El agua sale de sus células hacia donde hay más sal." },
    { q: "Un tejido es…", o: ["un conjunto de órganos", "un conjunto de células parecidas con la misma función", "una célula muy grande", "un orgánulo"], a: 1, e: "Por ejemplo, el tejido muscular o el nervioso." },
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
    ["Ósmosis", "Paso de agua a través de una membrana semipermeable hacia donde hay más solutos."],
    ["ATP", "Molécula que almacena y transporta la energía en la célula."],
    ["Niveles de organización", "Célula, tejido, órgano, sistema y organismo."],
    ["Teoría endosimbiótica", "Mitocondrias y cloroplastos fueron bacterias englobadas por otra célula (Lynn Margulis)."],
    ["Transporte activo", "Paso de sustancias en contra de su concentración gastando ATP, con proteínas bomba."],
    ["Autótrofo y heterótrofo", "El autótrofo fabrica su materia orgánica (fotosíntesis); el heterótrofo la toma ya hecha."],
    ["¿Son los virus células?", "No: son ácido nucleico con cápsida; necesitan una célula para reproducirse."],
  ],
  glosario: [
    ["Célula", "Unidad más pequeña con vida, capaz de nutrirse, relacionarse y reproducirse."],
    ["Teoría celular", "Todo ser vivo está formado por células, que son su unidad estructural y funcional y proceden de otras células."],
    ["Micrómetro (µm)", "Milésima parte de un milímetro; unidad para medir células."],
    ["Biomolécula", "Molécula que forma parte de los seres vivos: agua, sales, glúcidos, lípidos, proteínas y ácidos nucleicos."],
    ["Procariota", "Célula sin núcleo, con el ADN libre en el nucleoide (bacterias y arqueas)."],
    ["Eucariota", "Célula con núcleo rodeado de membrana y orgánulos membranosos."],
    ["Orgánulo", "Estructura del citoplasma especializada en una función."],
    ["Mitocondria", "Orgánulo donde se realiza la respiración celular y se produce ATP."],
    ["Cloroplasto", "Orgánulo con clorofila donde se realiza la fotosíntesis."],
    ["Ribosoma", "Gránulo que fabrica proteínas."],
    ["Cromatina", "ADN unido a proteínas dentro del núcleo; se compacta en cromosomas."],
    ["Membrana semipermeable", "Membrana que deja pasar unas sustancias y otras no."],
    ["Ósmosis", "Paso de agua a través de una membrana semipermeable hacia donde hay más solutos."],
    ["Metabolismo", "Conjunto de reacciones químicas de la célula (anabolismo y catabolismo)."],
    ["ATP", "Molécula que almacena y transporta energía en la célula."],
    ["Endosimbiosis", "Relación en la que un organismo vive dentro de otro con beneficio mutuo."],
    ["Tejido", "Conjunto de células parecidas que realizan la misma función."],
    ["Virus", "Partícula de ácido nucleico y proteínas que solo se reproduce dentro de una célula."],
  ],
  situacion: {
    titulo: "La guía de la célula para 1º de ESO",
    reto: "El departamento de ciencias necesita material para explicar la célula a los alumnos de 1º. Vuestro equipo debe construir una maqueta comestible o de material reciclado de una célula eucariota y grabar un vídeo de 2 minutos en el que la célula se presenta como una ciudad, con cada orgánulo como un servicio público.",
    pasos: [
      "Elegid célula animal o vegetal y haced una lista de los orgánulos que debe llevar y de su función.",
      "Observad al microscopio una preparación de epidermis de cebolla o de mucosa bucal y fotografiadla para comparar con la maqueta.",
      "Construid la maqueta con una escala aproximada (indicad cuántos µm representa cada cm).",
      "Escribid el guion de la ciudad celular: muralla = membrana, ayuntamiento = núcleo, central eléctrica = mitocondria…",
      "Grabad el vídeo y probadlo con un grupo de 1º: preguntadles tres cosas antes y después de verlo.",
    ],
    producto: "Maqueta etiquetada, vídeo de 2 minutos y una ficha con los resultados de la prueba con 1º.",
    evaluacion: [
      "Rigor científico: orgánulos correctos y funciones bien explicadas.",
      "Uso de la escala y de la observación al microscopio.",
      "Claridad de la explicación para alumnos más pequeños.",
      "Trabajo en equipo y análisis de lo que aprendieron los de 1º.",
    ],
  },
  familias: [
    "Pelad una capa fina de cebolla y miradla al trasluz o con una lupa: se ven las celdillas.",
    "En la cocina, poned sal sobre rodajas de pepino y observad cuánto líquido sueltan en 15 minutos: es ósmosis.",
    "Haced pan o un bizcocho con levadura y comentad por qué sube la masa (fermentación).",
    "Repasad las tarjetas del paso 6 dos minutos al día durante la semana.",
  ],
  profesores: {
    saberes: "Bloque «La célula» de los saberes básicos de Biología y Geología de 4º (RD 217/2022, BOE-A-2022-4975): teoría celular, células procariotas y eucariotas, orgánulos, funciones vitales y observación al microscopio. En Cataluña se corresponde con los saberes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Preparaciones de epidermis de cebolla (lugol) y mucosa bucal (azul de metileno), con cálculo del tamaño real.",
      "Experimento de ósmosis con tiras de patata en distintas concentraciones de sal y gráfica de cambio de masa.",
      "Debate «¿están vivos los virus?» con argumentos de la teoría celular.",
      "Situación de aprendizaje: maqueta y vídeo de la célula-ciudad para alumnos de 1º.",
    ],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Célula, Wikipedia en español", url: "https://es.wikipedia.org/wiki/C%C3%A9lula" },
    { t: "Teoría endosimbiótica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Endosimbiosis_seriada" },
  ],
  revisado: "2026-11-13",
};
