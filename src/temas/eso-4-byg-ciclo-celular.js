// Biología y Geología 4º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso4L6.js.
const { F, D, mapa, flecha } = require("./_util");
const L6 = require("./_eso4L6");

// Célula redonda con cromosomas en forma de X (pares de colores).
function celula(cx, cy, r, crom, borde = "var(--pen)") {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--pen)" fill-opacity=".08" stroke="${borde}" stroke-width="2.5"/>` +
    crom.map(([x, y, c, rot = 0]) => `<g transform="rotate(${rot} ${cx + x} ${cy + y})"><path d="M${cx + x - 6} ${cy + y - 9} L ${cx + x + 6} ${cy + y + 9} M${cx + x + 6} ${cy + y - 9} L ${cx + x - 6} ${cy + y + 9}" stroke="${c}" stroke-width="4" stroke-linecap="round"/></g>`).join("");
}

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "El ciclo celular: mitosis y meiosis",
  minutos: 110,
  objetivos: [
    "Describir la estructura de los cromosomas y distinguir células diploides y haploides",
    "Explicar las etapas del ciclo celular y sus puntos de control",
    "Describir las fases de la mitosis y la citocinesis",
    "Explicar la meiosis y su papel en la variabilidad genética",
    "Comparar mitosis y meiosis",
    "Relacionar los fallos del ciclo celular y de la meiosis con el cáncer y las alteraciones cromosómicas",
  ],
  claves: ["cromosoma", "interfase", "mitosis", "meiosis", "diploide (2n)", "haploide (n)"],
  pregunta: {
    texto: "Una herida en la rodilla se cierra en pocos días con piel nueva idéntica. Pero tú no eres idéntico a tus hermanos. ¿Qué tipo de división celular explica cada cosa?",
    respuesta: "La piel se repara por <mark>mitosis</mark>: una célula da dos hijas <b>idénticas</b>. Las diferencias entre hermanos vienen de la <mark>meiosis</mark>, que fabrica óvulos y espermatozoides con <b>mezclas distintas</b> de los genes de cada progenitor.",
  },
  lectura: {
    titulo: "Diez mil millones de divisiones al día",
    html: `<p>Mientras lees esta frase, en tu cuerpo se están dividiendo millones de células. Tu intestino renueva su revestimiento entero cada cuatro o cinco días; tu médula ósea fabrica unos dos millones de glóbulos rojos cada segundo; la piel que te cubre hoy no es la misma que tenías hace un mes. Todo empezó con una sola célula, el cigoto, que se dividió una y otra vez hasta formar los 30 billones de células que eres ahora.</p>
<p>Cada una de esas divisiones es una operación de precisión: hay que copiar 3.000 millones de «letras» de ADN y repartirlas exactamente igual entre dos células hijas. Un error puede no tener importancia, puede provocar un cáncer o, si ocurre al formar los gametos, puede cambiar el número de cromosomas de un bebé.</p>
<p>Pero hay otra división, mucho más rara, que no busca copias idénticas sino todo lo contrario: barajar los genes para que cada hijo sea único. En este tema conocerás las dos, la mitosis y la meiosis, y entenderás por qué la vida necesita tanto la copia exacta como la sorpresa.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Los cromosomas</h3><p>El ADN de una célula eucariota no está en una sola pieza: está repartido en varias moléculas largas, cada una unida a proteínas llamadas <b>histonas</b>, que lo enrollan como hilo en un carrete. Mientras la célula no se divide, ese ADN está extendido en forma de <b>cromatina</b>. Cuando va a dividirse, la cromatina se enrolla y se compacta miles de veces y forma los <mark>cromosomas</mark>, bastoncillos que ya se ven al microscopio óptico.</p><p>Antes de la división, cada cromosoma se ha copiado, así que está formado por <b>dos cromátidas hermanas</b> idénticas unidas por un punto llamado <b>centrómero</b>. Esa es la típica forma de «X» de los dibujos. Los extremos de los cromosomas se llaman <b>telómeros</b> y funcionan como los capuchones de plástico de los cordones: protegen el ADN para que no se deshilache. Con cada división los telómeros se acortan un poco, y eso se relaciona con el envejecimiento celular.</p><p>Si se fotografían los cromosomas de una célula en división y se ordenan por parejas según su tamaño y forma, se obtiene el <b>cariotipo</b>. Sirve para detectar alteraciones en el número o la estructura de los cromosomas. El cariotipo humano tiene 22 parejas de <b>autosomas</b> y una pareja de <b>cromosomas sexuales</b>: XX en las mujeres y XY en los hombres.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cromosoma con dos cromátidas hermanas unidas por el centrómero">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M96 30 Q 120 90 96 150" fill="none" stroke="var(--pen)" stroke-width="16" stroke-linecap="round"/>
        <path d="M144 30 Q 120 90 144 150" fill="none" stroke="var(--pen)" stroke-width="16" stroke-linecap="round" opacity=".7"/>
        <circle cx="120" cy="90" r="9" fill="var(--red)"/>
        <g ${F} font-size="12" font-weight="700"><text x="160" y="40" fill="var(--pen)">cromátida</text><text x="160" y="94" fill="var(--red)">centrómero</text><text x="14" y="40" fill="var(--pen)">cromátida</text></g>
      </svg>`,
    },
    {
      html: `<h3>1.2 Células diploides y haploides</h3><p>Las células del cuerpo, llamadas <b>células somáticas</b> (piel, músculo, hígado…), tienen los cromosomas <mark>por parejas</mark>: un cromosoma de cada pareja procede del padre y el otro de la madre. Los dos cromosomas de una pareja se llaman <b>homólogos</b>: tienen los mismos genes en el mismo orden, aunque pueden llevar versiones distintas de cada gen (por ejemplo, un homólogo puede llevar la información para ojos azules y el otro para ojos marrones).</p><p>Una célula con dos juegos de cromosomas es <mark>diploide</mark> y se representa <b>2n</b>. En los humanos, 2n = 46. Los <b>gametos</b> (óvulos y espermatozoides) tienen un solo juego, uno de cada pareja: son <mark>haploides</mark> (<b>n</b>). En los humanos, n = 23. Es lógico: si los gametos tuvieran 46, el cigoto tendría 92, y el número se duplicaría en cada generación.</p><p>El número de cromosomas es fijo en cada especie, pero no indica complejidad: el chimpancé tiene 2n = 48, el perro 78, la mosca del vinagre 8, el arroz 24 y algunos helechos más de 1.000. No hay que confundir <b>homólogos</b> (dos cromosomas distintos, uno de cada progenitor) con <b>cromátidas hermanas</b> (las dos copias idénticas de un mismo cromosoma tras copiar el ADN).</p>`,
      svg: L6.tabla("Número de cromosomas de varias especies: diploide y haploide", ["Especie", "2n", "n"], [["Ser humano", "46", "23"], ["Chimpancé", "48", "24"], ["Perro", "78", "39"], ["Mosca", "8", "4"], ["Guisante", "14", "7"]]),
    },
    {
      html: `<h3>1.3 La copia del ADN: la replicación</h3><p>Antes de dividirse, la célula debe copiar todo su ADN para que cada hija reciba una copia completa. Este proceso se llama <mark>replicación</mark> y ocurre en la fase S del ciclo celular.</p><p>El ADN es una doble hélice formada por dos hebras unidas por sus bases, que se emparejan siempre igual: <b>A con T</b> y <b>G con C</b>. Para copiarlo, unas enzimas abren la doble hélice como una cremallera. Después, la enzima <b>ADN polimerasa</b> recorre cada hebra antigua y le coloca enfrente las bases complementarias, construyendo una hebra nueva. Al final hay dos moléculas de ADN idénticas, y cada una está formada por <mark>una hebra antigua y una nueva</mark>: por eso se dice que la replicación es <b>semiconservativa</b>. Esto lo demostraron Meselson y Stahl en 1958 con bacterias cultivadas en nitrógeno pesado.</p><p>La ADN polimerasa es muy precisa y, además, revisa su trabajo: solo comete un error por cada mil millones de bases aproximadamente. Los errores que se escapan son <b>mutaciones</b>. La mayoría no tienen efecto, algunas son perjudiciales y unas pocas resultan ventajosas. En el tema del ADN estudiarás la molécula con más detalle.</p>`,
      svg: L6.flujo("Replicación del ADN: se abre la doble hélice, se copian las dos hebras y salen dos moléculas idénticas", ["Doble hélice de ADN (A–T, G–C)", "Las enzimas la abren como una cremallera", "La ADN polimerasa añade bases complementarias", "Dos ADN idénticos: hebra vieja + hebra nueva"], "Replicación semiconservativa"),
    },
    {
      html: `<h3>2.1 El ciclo celular</h3><p>El <mark>ciclo celular</mark> es la secuencia de etapas que vive una célula desde que nace por división hasta que se divide a su vez. Tiene dos grandes etapas.</p><p>La <b>interfase</b> ocupa más del 90 % del tiempo. No es un descanso: es cuando la célula crece y trabaja. Se divide en tres fases. En la <b>fase G1</b> la célula crece, fabrica proteínas y orgánulos y realiza su función. En la <b>fase S</b> (síntesis) <mark>replica su ADN</mark>: al acabar, cada cromosoma tiene dos cromátidas. En la <b>fase G2</b> sigue creciendo y prepara las estructuras de la división.</p><p>La <b>fase M</b> es la división propiamente dicha. Incluye la <b>mitosis</b> (división del núcleo, también llamada cariocinesis) y la <b>citocinesis</b> (división del citoplasma).</p><p>La duración del ciclo depende del tipo de célula: unas 24 horas en una célula humana en cultivo, unas pocas horas en las del intestino, y algunas células, como la mayoría de las neuronas o las células del músculo cardíaco, salen del ciclo y no vuelven a dividirse nunca: se dice que están en <b>fase G0</b>. Por eso una lesión de la médula espinal o un infarto dejan daños permanentes, mientras que la piel o el hígado se regeneran bien.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Rueda del ciclo celular con las fases G1, S, G2 y M">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["G1", 0, 140, "var(--leaf)"], ["S", 140, 250, "var(--pen)"], ["G2", 250, 320, "var(--sun)"], ["M", 320, 360, "var(--red)"]].map(([t, a0, a1, c]) => { const r = 62, cx = 130, cy = 90, p = (a) => [cx + r * Math.sin((a * Math.PI) / 180), cy - r * Math.cos((a * Math.PI) / 180)]; const [x0, y0] = p(a0), [x1, y1] = p(a1), [xm, ym] = p((a0 + a1) / 2); return `<path d="M${x0.toFixed(1)} ${y0.toFixed(1)} A ${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1.toFixed(1)} ${y1.toFixed(1)}" fill="none" stroke="${c}" stroke-width="22"/><text x="${(cx + (xm - cx) * 1.0).toFixed(1)}" y="${(ym + 5).toFixed(1)}" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" ${F}>${t}</text>`; }).join("")}
        <text x="130" y="88" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>interfase</text><text x="130" y="104" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>≈ 90 % del tiempo</text>
      </svg>`,
    },
    {
      html: `<h3>2.2 Los puntos de control y la muerte celular programada</h3><p>Dividirse es arriesgado, así que el ciclo celular tiene <mark>puntos de control</mark>, como los controles de calidad de una fábrica. Unas proteínas comprueban que todo está en orden antes de dejar pasar a la siguiente fase:</p><p>• Al final de <b>G1</b>: ¿la célula ha crecido lo suficiente? ¿hay nutrientes? ¿hay señales del cuerpo que pidan una división? ¿está bien el ADN?<br>• Al final de <b>G2</b>: ¿se ha copiado todo el ADN y sin errores?<br>• En la <b>metafase</b>: ¿están todos los cromosomas bien enganchados al huso antes de separarlos?</p><p>Si se detecta un problema, el ciclo se detiene para reparar el daño. Uno de los guardianes más importantes es la proteína <b>p53</b>, apodada «el guardián del genoma»: frena el ciclo si el ADN está dañado.</p><p>Cuando el daño no se puede reparar, la célula se autodestruye de forma ordenada mediante la <mark>apoptosis</mark> o muerte celular programada. No es un fracaso, sino un mecanismo de seguridad: se eliminan células peligrosas sin dañar a las vecinas. La apoptosis también da forma al cuerpo durante el desarrollo: en el embrión, los dedos de las manos están unidos por una membrana, y son las células de esa membrana las que mueren para separarlos.</p>`,
      svg: L6.flujo("Puntos de control del ciclo: si hay daño, la célula se repara o muere por apoptosis", ["Control G1: ¿tamaño, nutrientes, señales, ADN sano?", "Control G2: ¿ADN copiado sin errores?", "Control en metafase: ¿cromosomas bien unidos al huso?", "Si hay daño grave → apoptosis (muerte programada)"], "Controles de calidad del ciclo"),
    },
    {
      html: `<h3>2.3 Cuando el ciclo falla: el cáncer</h3><p>El <mark>cáncer</mark> es un conjunto de enfermedades en las que algunas células se dividen sin control. Se origina cuando una célula acumula <b>mutaciones</b> en los genes que regulan el ciclo: los que actúan como acelerador (llamados <b>protooncogenes</b>) se quedan «pisados», y los que actúan como freno (<b>genes supresores de tumores</b>, como el de p53) dejan de funcionar. Hacen falta varias mutaciones, por eso el cáncer es más frecuente con la edad.</p><p>Las células que se dividen sin control forman un <b>tumor</b>. Si queda localizado y rodeado de una cápsula, es un <b>tumor benigno</b> (como muchos lunares o los miomas) y suele poder extirparse. Si sus células invaden los tejidos vecinos y viajan por la sangre o la linfa hasta otros órganos, donde forman nuevos tumores, es un <mark>tumor maligno</mark> o cáncer; esa propagación se llama <b>metástasis</b>.</p><p>Las mutaciones pueden aparecer por azar, pero muchos <b>agentes mutágenos</b> aumentan el riesgo: el tabaco (responsable de la mayoría de cánceres de pulmón), la radiación ultravioleta del sol, el alcohol, algunos virus (como el del papiloma humano, frente al que hay vacuna) y ciertas sustancias químicas. Los tratamientos (cirugía, quimioterapia, radioterapia, inmunoterapia) buscan eliminar o frenar las células que se dividen.</p>`,
      svg: L6.compara("Tumor benigno frente a tumor maligno", ["Benigno", "var(--leaf)", ["crece despacio", "localizado, con cápsula", "no invade tejidos", "sin metástasis"]], ["Maligno", "var(--red)", ["crece deprisa", "sin límites claros", "invade tejidos", "hace metástasis"]]),
      video: { id: "Y0BPGlqwI-E", titulo: "3 claves para entender el cáncer", canal: "La Hiperactina", vistas: 1392450 },
    },
    {
      html: `<h3>3.1 Las fases de la mitosis</h3><p>La <mark>mitosis</mark> es la división del núcleo que reparte las dos cromátidas de cada cromosoma entre dos núcleos hijos. Es un proceso continuo, pero para estudiarlo se divide en cuatro fases.</p><p><b>Profase</b>. La cromatina se condensa y los cromosomas se hacen visibles, cada uno con dos cromátidas. El nucléolo desaparece y la envoltura nuclear se rompe. Se forma el <b>huso mitótico</b>, un conjunto de fibras de proteína (microtúbulos) que en las células animales parte de los centriolos situados en los polos.</p><p><b>Metafase</b>. Las fibras del huso se enganchan al centrómero de cada cromosoma y los colocan alineados en el centro de la célula, formando la <mark>placa ecuatorial</mark>. Es el mejor momento para contar los cromosomas y hacer un cariotipo.</p><p><b>Anafase</b>. Los centrómeros se separan y las fibras del huso se acortan: <mark>las cromátidas hermanas se separan</mark> y cada una viaja a un polo opuesto. Desde este momento cada cromátida es un cromosoma independiente.</p><p><b>Telofase</b>. En cada polo se forma una nueva envoltura nuclear, reaparece el nucléolo y los cromosomas se descondensan. Hay dos núcleos con la misma información genética. Un truco para recordar el orden: <b>PRO-ME-te ANA TELO</b>. El resultado es que <mark>una célula 2n da dos células 2n idénticas</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Las cuatro fases de la mitosis: profase, metafase, anafase y telofase">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${celula(36, 72, 28, [[-8, -6, "var(--red)", 20], [8, 6, "var(--pen)", -30]])}
        ${celula(100, 72, 28, [[0, -8, "var(--red)", 90], [0, 8, "var(--pen)", 90]])}
        <g transform="translate(164 72)"><circle r="28" fill="var(--pen)" fill-opacity=".08" stroke="var(--pen)" stroke-width="2.5"/><path d="M-16 -6 l 5 6 l -5 6 M-16 6 m 0 0 M16 -6 l -5 6 l 5 6" fill="none" stroke="var(--red)" stroke-width="3.5"/><path d="M-8 -6 l 5 6 l -5 6 M8 -6 l -5 6 l 5 6" fill="none" stroke="var(--pen)" stroke-width="3.5"/></g>
        <g transform="translate(226 72)"><ellipse rx="28" ry="30" fill="var(--pen)" fill-opacity=".08" stroke="var(--pen)" stroke-width="2.5"/><path d="M-28 0 H 28" stroke="var(--pen)" stroke-width="2" stroke-dasharray="3 3"/><circle cy="-14" r="9" fill="var(--inf)" opacity=".5"/><circle cy="14" r="9" fill="var(--inf)" opacity=".5"/></g>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)"><text x="36" y="124">profase</text><text x="100" y="124">metafase</text><text x="164" y="124">anafase</text><text x="226" y="124">telofase</text></g>
        <text x="130" y="158" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>resultado: 2 células idénticas (2n)</text>
      </svg>`,
    },
    {
      html: `<h3>3.2 La citocinesis: dividir el citoplasma</h3><p>La mitosis reparte el núcleo, pero la división no termina hasta que se separa el citoplasma: es la <mark>citocinesis</mark>, que suele empezar al final de la anafase o en la telofase. En ella se reparten también los orgánulos (mitocondrias, ribosomas, retículo) entre las dos células hijas.</p><p>En las <b>células animales</b> se forma en el ecuador un <b>anillo contráctil</b> de proteínas (actina y miosina, las mismas del músculo) justo debajo de la membrana. El anillo se va cerrando como un cinturón que se aprieta y forma un surco cada vez más profundo, el <b>surco de división</b>, hasta que estrangula la célula en dos.</p><p>En las <b>células vegetales</b> la pared de celulosa es rígida e impide el estrangulamiento. Por eso, en el centro de la célula se acumulan vesículas que vienen del aparato de Golgi cargadas de materiales para la pared. Las vesículas se fusionan y forman un tabique, el <b>fragmoplasto</b>, que crece del centro hacia fuera hasta llegar a la pared antigua: es la <mark>nueva pared</mark> que separa las dos células.</p><p>A veces hay mitosis sin citocinesis: se forman células con varios núcleos, como las fibras de nuestros músculos esqueléticos.</p>`,
      svg: L6.compara("Citocinesis animal por estrangulamiento y vegetal por tabique", ["Animal", "var(--red)", ["anillo de actina", "surco de división", "estrangulamiento", "de fuera adentro"]], ["Vegetal", "var(--leaf)", ["vesículas del Golgi", "fragmoplasto", "nueva pared", "de dentro afuera"]]),
    },
    {
      html: `<h3>3.3 Para qué sirve la mitosis</h3><p>La mitosis garantiza que las células hijas sean <mark>genéticamente idénticas</mark> a la madre. Eso la hace imprescindible en varios procesos.</p><p><b>Desarrollo y crecimiento</b>. Del cigoto unicelular a un recién nacido hacen falta unos 40 ciclos de división; luego el cuerpo sigue creciendo hasta el final de la adolescencia, sobre todo en los cartílagos de crecimiento de los huesos largos.</p><p><b>Renovación y reparación</b>. Las células que se desgastan se sustituyen: la piel, el revestimiento del intestino, las células de la sangre. Cuando te haces una herida, las células de los bordes se dividen para cerrarla. Algunos animales llevan esta capacidad al extremo: la salamandra regenera una pata entera y la planaria, un gusano plano, puede formar un individuo completo a partir de un trozo.</p><p><b>Reproducción asexual</b>. En los seres unicelulares eucariotas, como las amebas o las levaduras, la mitosis es directamente reproducción. Muchas plantas se reproducen por esquejes, tubérculos o estolones gracias a ella, y los descendientes son clones de la planta madre.</p><p>En los adultos hay <b>células madre</b> que conservan la capacidad de dividirse y especializarse, por ejemplo en la médula ósea. Los trasplantes de médula aprovechan estas células para tratar leucemias.</p>`,
      svg: L6.radial("Funciones de la mitosis: crecimiento, reparación, renovación y reproducción asexual", "Mitosis", ["Crecimiento del cuerpo", "Reparar heridas", "Renovar piel y sangre", "Reproducción asexual"], "var(--pen)"),
    },
    {
      html: `<h3>4.1 La meiosis</h3><p>La <mark>meiosis</mark> es un tipo especial de división que solo ocurre en las células que forman los gametos, dentro de las gónadas. Su objetivo es <b>reducir a la mitad</b> el número de cromosomas: de una célula diploide (2n) salen <mark>cuatro células haploides (n)</mark>. Para ello hay una sola replicación del ADN (en la interfase previa) seguida de <b>dos divisiones</b> consecutivas.</p><p><b>Meiosis I (división reduccional)</b>. En la profase I, los cromosomas homólogos se buscan y se emparejan a lo largo de toda su longitud; cada pareja tiene cuatro cromátidas y se llama <b>bivalente</b> o tétrada. Mientras están unidos, intercambian fragmentos (sobrecruzamiento). En la metafase I las parejas se colocan en el ecuador, y en la anafase I <mark>se separan los homólogos</mark>, no las cromátidas: cada polo recibe un cromosoma de cada pareja. Al final hay dos células con n cromosomas, cada uno aún con dos cromátidas.</p><p><b>Meiosis II (división ecuacional)</b>. Es parecida a una mitosis, pero sin copiar antes el ADN: en la anafase II <b>se separan las cromátidas hermanas</b>. El resultado son cuatro células haploides.</p><p>En la <b>fecundación</b>, un óvulo (n = 23) y un espermatozoide (n = 23) se unen y forman el <b>cigoto</b> (2n = 46), que recupera el número propio de la especie. Meiosis y fecundación son, por tanto, las dos caras de la reproducción sexual.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Meiosis: una célula diploide da dos células y después cuatro células haploides">
        <defs><marker id="cc1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${celula(40, 90, 24, [[-6, 0, "var(--red)"], [6, 0, "var(--pen)"]])}
        ${celula(120, 50, 18, [[0, 0, "var(--red)"]])}${celula(120, 130, 18, [[0, 0, "var(--pen)"]])}
        ${[[210, 26, "var(--red)"], [210, 70, "var(--red)"], [210, 110, "var(--pen)"], [210, 154, "var(--pen)"]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="14" fill="var(--pen)" fill-opacity=".08" stroke="var(--pen)" stroke-width="2"/><path d="M${x} ${y - 8} V ${y + 8}" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`).join("")}
        <g stroke="var(--muted)" stroke-width="2" marker-end="url(#cc1)"><path d="M64 80 L 98 56"/><path d="M64 100 L 98 124"/><path d="M140 44 L 192 28"/><path d="M140 56 L 192 68"/><path d="M140 124 L 192 112"/><path d="M140 136 L 192 152"/></g>
        <g ${F} font-size="11" font-weight="700" fill="var(--muted)" text-anchor="middle"><text x="40" y="132">2n</text><text x="120" y="96">meiosis I</text><text x="246" y="94">n</text></g>
      </svg>`,
    },
    {
      html: `<h3>4.2 Meiosis y variabilidad genética</h3><p>La meiosis no solo reduce el número de cromosomas: también <mark>baraja la información genética</mark>, de modo que cada gameto es único. Hay dos mecanismos.</p><p>El <b>sobrecruzamiento</b> (o entrecruzamiento) ocurre en la profase I: las cromátidas de dos cromosomas homólogos se cruzan e <b>intercambian fragmentos</b>. Los puntos de cruce se llaman quiasmas. Así se forman cromosomas «mezclados» con trozos del abuelo y de la abuela, combinaciones que no existían antes.</p><p>La <b>segregación al azar de los homólogos</b> ocurre en la metafase I: cada pareja se coloca en el ecuador con una orientación al azar, independiente de las demás. En los humanos, solo por este mecanismo, una persona puede formar 2²³, es decir, <b>más de 8 millones de combinaciones</b> diferentes de cromosomas en sus gametos. Si se suma el sobrecruzamiento, las combinaciones son prácticamente infinitas.</p><p>A esto se añade la <b>fecundación</b>: cualquier óvulo puede unirse con cualquier espermatozoide. Por eso dos hermanos (salvo los gemelos idénticos, que proceden del mismo cigoto) nunca son genéticamente iguales. Esta <mark>variabilidad</mark> es la materia prima de la evolución: en una población variada es más probable que algunos individuos sobrevivan si cambia el ambiente o aparece una enfermedad.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Sobrecruzamiento: dos cromosomas homólogos intercambian fragmentos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="40" y="30" width="16" height="110" rx="8" fill="var(--red)"/><rect x="70" y="30" width="16" height="110" rx="8" fill="var(--pen)"/>
        <path d="M56 90 L 70 110 M70 90 L 56 110" stroke="var(--ink)" stroke-width="2"/>
        <text x="130" y="90" font-size="22" fill="var(--muted)" ${F}>→</text>
        <rect x="174" y="30" width="16" height="70" rx="8" fill="var(--red)"/><rect x="174" y="96" width="16" height="44" rx="8" fill="var(--pen)"/>
        <rect x="204" y="30" width="16" height="70" rx="8" fill="var(--pen)"/><rect x="204" y="96" width="16" height="44" rx="8" fill="var(--red)"/>
        <text x="130" y="166" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>sobrecruzamiento: nuevas combinaciones</text>
      </svg>`,
    },
    {
      html: `<h3>4.3 Mitosis frente a meiosis</h3><p>Las dos divisiones reparten el material genético, pero tienen objetivos muy distintos: la mitosis hace <b>copias idénticas</b> para crecer y reparar; la meiosis hace <b>gametos distintos</b> para la reproducción sexual.</p><table class="tb"><thead><tr><th></th><th>Mitosis</th><th>Meiosis</th></tr></thead><tbody><tr><td>Dónde</td><td>células somáticas</td><td>gónadas (células que forman gametos)</td></tr><tr><td>Divisiones</td><td>1</td><td>2 seguidas</td></tr><tr><td>Células hijas</td><td>2, diploides (2n)</td><td>4, haploides (n)</td></tr><tr><td>Información</td><td>idéntica a la madre</td><td>distinta en cada célula</td></tr><tr><td>Homólogos</td><td>no se emparejan</td><td>se emparejan y sobrecruzan</td></tr><tr><td>Función</td><td>crecer, reparar, reproducción asexual</td><td>formar gametos, variabilidad</td></tr></tbody></table><p>Una forma de recordarlo: en la mitosis cada célula hija recibe <b>una cromátida de cada cromosoma</b>; en la meiosis I cada célula recibe <b>un cromosoma de cada pareja</b>. La meiosis II, en cambio, se parece mucho a una mitosis. Ojo con una confusión frecuente: el número de cromosomas se reduce a la mitad en la meiosis I, no en la II.</p>`,
      svg: L6.tabla("Resumen: mitosis da 2 células 2n idénticas y meiosis 4 células n distintas", ["", "Mitosis", "Meiosis"], [["Divisiones", "1", "2"], ["Células", "2", "4"], ["Cromosomas", "2n → 2n", "2n → n"], ["Hijas", "idénticas", "distintas"], ["Para", "crecer", "gametos"]]),
    },
    {
      html: `<h3>4.4 La formación de los gametos</h3><p>La formación de gametos o <b>gametogénesis</b> ocurre por meiosis en las gónadas, y es distinta en cada sexo.</p><p>En los <b>testículos</b> se produce la <mark>espermatogénesis</mark>. Comienza en la pubertad y continúa durante toda la vida: se forman unos 100 millones de espermatozoides al día. Cada célula madre (espermatocito) da, tras la meiosis, <b>cuatro espermatozoides</b> iguales en tamaño, pequeños, con una cabeza que lleva el núcleo, una pieza intermedia llena de mitocondrias y un flagelo para nadar.</p><p>En los <b>ovarios</b> se produce la <mark>ovogénesis</mark>. Empieza antes del nacimiento, pero la meiosis se detiene y solo se reanuda a partir de la pubertad, en general un óvulo al mes. El citoplasma se reparte de forma muy desigual: de cada célula madre sale <b>un solo óvulo</b> grande, con muchas reservas para alimentar al embrión en sus primeros días, y tres células pequeñas, los <b>corpúsculos polares</b>, que degeneran. La meiosis del óvulo no termina del todo hasta que es fecundado.</p><p>Las plantas también forman gametos, en los granos de polen (gametos masculinos) y en los óvulos de la flor. En ellas la meiosis forma esporas que, después, originan los gametos por mitosis.</p>`,
      svg: L6.compara("Espermatogénesis y ovogénesis: cuatro espermatozoides frente a un óvulo", ["Espermatogénesis", "var(--pen)", ["en testículos", "desde la pubertad", "4 espermatozoides", "pequeños, con flagelo"]], ["Ovogénesis", "var(--red)", ["en ovarios", "empieza antes de nacer", "1 óvulo + 3 corpúsculos", "grande, con reservas"]]),
      video: { id: "QsVq-HIgWDg", titulo: "Gametogénesis: ovogénesis y espermatogénesis paso a paso", canal: "Bio en Casa", vistas: 510166 },
    },
    {
      html: `<h3>4.5 Errores en la meiosis: alteraciones cromosómicas</h3><p>A veces, durante la meiosis, una pareja de homólogos (en la anafase I) o dos cromátidas hermanas (en la anafase II) <b>no se separan</b> y viajan juntas al mismo polo. Este error se llama <mark>no disyunción</mark>. El resultado son gametos con un cromosoma de más (n + 1) o de menos (n − 1). Si uno de ellos participa en la fecundación, el cigoto tendrá 47 o 45 cromosomas: es una <b>aneuploidía</b>.</p><p>La más conocida es el <mark>síndrome de Down</mark> o <b>trisomía 21</b>: las personas tienen tres copias del cromosoma 21 (47 cromosomas en total). Produce discapacidad intelectual de grado variable, rasgos físicos característicos y a veces problemas de corazón. La probabilidad de no disyunción aumenta con la edad de la madre, porque sus óvulos llevan muchos años con la meiosis detenida.</p><p>Otras alteraciones afectan a los cromosomas sexuales: el <b>síndrome de Turner</b> (45, X0: mujeres de baja estatura y generalmente estériles) o el <b>síndrome de Klinefelter</b> (47, XXY: hombres altos con fertilidad reducida). La mayoría de aneuploidías de los autosomas grandes no son viables y provocan abortos espontáneos tempranos. Estas alteraciones se detectan con el <b>cariotipo</b> o con análisis de ADN fetal en sangre materna durante el embarazo.</p>`,
      svg: L6.flujo("No disyunción: dos cromosomas no se separan, se forma un gameto n+1 y el cigoto tiene 47 cromosomas", ["Meiosis: una pareja no se separa (no disyunción)", "Gametos con 24 (n+1) y con 22 (n−1) cromosomas", "Gameto de 24 + gameto normal de 23", "Cigoto con 47: trisomía (p. ej., síndrome de Down)"], "Cómo se origina una trisomía"),
    },
  ],
  figura: {
    titulo: "Mitosis frente a meiosis",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Comparación de mitosis y meiosis: divisiones, células hijas, cromosomas y para qué sirven">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["MITOSIS", "1 división", "2 células hijas 2n", "idénticas a la madre", "crecer y reparar tejidos", "var(--pen)"], ["MEIOSIS", "2 divisiones", "4 células hijas n", "todas distintas", "formar gametos", "var(--red)"]]
        .map(([n, a, b, c1, u, c], i) => `<rect x="${20 + i * 310}" y="20" width="290" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${165 + i * 310}" y="60" text-anchor="middle" font-size="26" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${165 + i * 310}" y="98" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)" ${F}>${a}</text>
          <text x="${165 + i * 310}" y="124" text-anchor="middle" font-size="16" fill="var(--ink)" ${F}>${b}</text>
          <text x="${165 + i * 310}" y="148" text-anchor="middle" font-size="15" fill="var(--ink)" ${F}>${c1}</text>
          <text x="${165 + i * 310}" y="188" text-anchor="middle" font-size="14" fill="var(--muted)" ${F}>sirve para: ${u}</text>`).join("")}
    </svg>`,
  },
  video: { id: "zrKdz93WlVk", titulo: "Mitosis vs. meiosis: comparación lado a lado", canal: "Amoeba Sisters", vistas: 9248868, megusta: 0, busqueda: "mitosis y meiosis" },
  ejemplos: [
    { enunciado: "Una célula de perro tiene 78 cromosomas. ¿Cuántos tendrán las células hijas tras una mitosis? ¿Y tras una meiosis?", pasos: ["La mitosis mantiene el número: 2n → 2n.", "La meiosis lo reduce a la mitad: 2n → n.", "78 / 2 = 39."], resultado: "Mitosis: 2 células con 78. Meiosis: 4 células con 39." },
    { enunciado: "Describe qué ocurre con los cromosomas en cada fase de la mitosis.", pasos: ["Profase: los cromosomas se condensan y la membrana del núcleo desaparece.", "Metafase: los cromosomas se colocan en el ecuador de la célula.", "Anafase: las cromátidas hermanas se separan hacia polos opuestos.", "Telofase: se forman dos núcleos nuevos y los cromosomas se descondensan."], resultado: "Profase, metafase, anafase y telofase, seguidas de la citocinesis." },
    { enunciado: "Una mujer forma óvulos y un hombre, espermatozoides. ¿Cuántos gametos maduros salen de una célula madre en cada caso?", pasos: ["Las dos pasan por meiosis y producen 4 células haploides.", "En el hombre, las 4 son espermatozoides.", "En la mujer, el citoplasma se reparte de forma desigual: 1 óvulo y 3 corpúsculos polares que degeneran."], resultado: "4 espermatozoides frente a 1 óvulo." },
    { enunciado: "Una célula de la raíz de cebolla tarda 24 horas en completar el ciclo. Al microscopio cuentas 1.000 células: 900 en interfase, 50 en profase, 20 en metafase, 15 en anafase y 15 en telofase. ¿Cuánto dura cada fase?", pasos: ["El porcentaje de células en cada fase es proporcional a su duración.", "Interfase: 900/1.000 = 90 % → 0,90 · 24 h = 21,6 h.", "Profase: 5 % → 1,2 h (72 min). Metafase: 2 % → 0,48 h (unos 29 min).", "Anafase y telofase: 1,5 % cada una → 0,36 h (unos 22 min)."], resultado: "Interfase 21,6 h; profase 72 min; metafase 29 min; anafase 22 min; telofase 22 min." },
    { enunciado: "Una especie tiene 2n = 6. ¿Cuántas combinaciones distintas de cromosomas puede formar en sus gametos solo por segregación al azar? ¿Y una persona?", pasos: ["Si 2n = 6, hay n = 3 parejas.", "Cada pareja puede orientarse de 2 formas: combinaciones = 2ⁿ = 2³ = 8.", "En humanos, n = 23: 2²³ = 8.388.608.", "Sin contar el sobrecruzamiento, que aumenta aún más la variedad."], resultado: "8 combinaciones en la especie con 2n = 6; más de 8 millones en los humanos." },
    { enunciado: "Una célula tiene 2n = 8 y una cantidad de ADN que llamamos 2C en G1. Indica cromosomas y cantidad de ADN en G2, al final de la mitosis y al final de la meiosis.", pasos: ["En G1: 8 cromosomas de una cromátida, ADN = 2C.", "En la fase S se duplica el ADN: en G2 hay 8 cromosomas de dos cromátidas y 4C.", "Tras la mitosis, cada hija tiene 8 cromosomas y 2C.", "Tras la meiosis, cada célula tiene 4 cromosomas (n) y 1C."], resultado: "G2: 8 cromosomas, 4C. Mitosis: 8 cromosomas, 2C. Meiosis: 4 cromosomas, 1C." },
  ],
  errores: [
    "Pensar que la mitosis produce gametos: los gametos se forman por meiosis.",
    "Confundir cromosomas homólogos (uno del padre y otro de la madre) con cromátidas hermanas (las dos copias idénticas de un cromosoma).",
    "Decir que la meiosis da 2 células: da 4.",
    "Creer que en la interfase la célula está «descansando»: en ella crece y copia su ADN.",
    "Pensar que todo tumor es un cáncer: los benignos no invaden otros tejidos.",
    "Pensar que en la meiosis II se reduce el número de cromosomas: la reducción ocurre en la meiosis I, cuando se separan los homólogos.",
  ],
  ejercicios: [
    { nivel: "básico", ...{ q: "¿Qué ocurre en la fase S de la interfase? ¿Por qué es imprescindible antes de dividirse?", sol: "Se replica el ADN. Sin esa copia, las células hijas no recibirían la información genética completa." } },
    { nivel: "básico", ...{ q: "Si 2n = 20 en el maíz, ¿cuántos cromosomas tiene un grano de polen (gameto)?", sol: "n = 10." } },
    { nivel: "básico", ...{ q: "Ordena las fases: anafase, profase, telofase, metafase.", sol: "Profase, metafase, anafase y telofase." } },
    { nivel: "básico", ...{ q: "Indica dos procesos del cuerpo en los que sea importante la mitosis.", sol: "El crecimiento (por ejemplo, de los huesos en la adolescencia) y la reparación de tejidos (cicatrización de una herida)." } },
    { nivel: "básico", ...{ q: "¿Qué es la metástasis?", sol: "La propagación de células cancerosas desde el tumor original a otros órganos a través de la sangre o la linfa." } },
    { nivel: "básico", q: "Dibuja un cromosoma en metafase y señala las cromátidas hermanas, el centrómero y los telómeros.", sol: "Debe aparecer una «X» con dos brazos iguales (las cromátidas hermanas) unidos por un estrechamiento central (centrómero) y con los extremos marcados como telómeros." },
    { nivel: "básico", q: "Define célula diploide y célula haploide y pon un ejemplo humano de cada una.", sol: "Diploide (2n): tiene dos juegos de cromosomas, por parejas; ejemplo, una célula de la piel (46). Haploide (n): un solo juego; ejemplo, un óvulo o un espermatozoide (23)." },
    { nivel: "básico", q: "Nombra las tres fases de la interfase y lo que ocurre en cada una.", sol: "G1: la célula crece y trabaja. S: se replica el ADN. G2: sigue creciendo y se prepara para dividirse." },
    { nivel: "básico", q: "¿Qué es el huso mitótico y para qué sirve?", sol: "Es un conjunto de fibras de proteína (microtúbulos) que se forma en la profase; se une a los centrómeros, coloca los cromosomas en el ecuador y separa las cromátidas hacia los polos." },
    { nivel: "básico", q: "¿Qué es la apoptosis? Pon un ejemplo de su utilidad.", sol: "Es la muerte celular programada, una autodestrucción ordenada de la célula. Ejemplos: elimina células con el ADN dañado; separa los dedos del embrión eliminando la membrana que los une." },
    { nivel: "básico", q: "¿Qué cromosomas sexuales tiene una mujer? ¿Y un hombre? ¿Cuántos autosomas tiene una persona?", sol: "Mujer: XX. Hombre: XY. Hay 22 parejas de autosomas, es decir, 44 autosomas." },
    { nivel: "básico", q: "Explica qué significa que la replicación del ADN es semiconservativa.", sol: "Que cada una de las dos moléculas de ADN resultantes conserva una hebra de la molécula original y tiene una hebra nueva." },
    { nivel: "medio", ...{ q: "¿En qué se diferencia la citocinesis animal de la vegetal?", sol: "En la animal la célula se estrangula con un anillo de proteínas; en la vegetal se forma una pared nueva en el centro (fragmoplasto)." } },
    { nivel: "medio", ...{ q: "Explica dos mecanismos de la meiosis que generan variabilidad.", sol: "El sobrecruzamiento, que intercambia trozos entre cromosomas homólogos, y el reparto al azar de cada pareja de homólogos a una u otra célula hija." } },
    { nivel: "medio", ...{ q: "¿Por qué los hermanos, salvo los gemelos idénticos, no son genéticamente iguales?", sol: "Porque cada uno procede de un óvulo y un espermatozoide distintos, y la meiosis hace que cada gameto lleve una combinación diferente de genes." } },
    { nivel: "medio", ...{ q: "Completa la tabla mental: mitosis → … células, 2n → …; meiosis → … células, 2n → …", sol: "Mitosis: 2 células, 2n → 2n. Meiosis: 4 células, 2n → n." } },
    { nivel: "medio", ...{ q: "Indica tres hábitos que reducen el riesgo de cáncer.", sol: "No fumar, protegerse del sol y llevar una alimentación sana con ejercicio físico (también evitar el alcohol)." } },
    { nivel: "medio", q: "Diferencia entre cromosomas homólogos y cromátidas hermanas.", sol: "Los homólogos son dos cromosomas distintos de una misma pareja, uno de origen paterno y otro materno; tienen los mismos genes pero pueden llevar versiones distintas. Las cromátidas hermanas son las dos copias idénticas de un mismo cromosoma, unidas por el centrómero tras la replicación." },
    { nivel: "medio", q: "Un gato tiene 2n = 38. Indica el número de cromosomas de: una célula de su piel, un espermatozoide, el cigoto, una célula hija tras la mitosis.", sol: "Piel: 38. Espermatozoide: 19. Cigoto: 38. Célula hija tras mitosis: 38." },
    { nivel: "medio", q: "¿Por qué un infarto deja una cicatriz permanente en el corazón y una herida en la piel se regenera?", sol: "Las células del músculo cardíaco están en G0 y casi no se dividen, así que las que mueren no se reponen y se sustituyen por tejido cicatricial. Las de la piel se dividen continuamente por mitosis y regeneran el tejido." },
    { nivel: "medio", q: "Explica la diferencia entre un tumor benigno y uno maligno y qué es la metástasis.", sol: "El benigno está localizado y no invade otros tejidos; el maligno invade los tejidos vecinos y puede viajar por la sangre o la linfa a otros órganos y formar nuevos tumores: eso es la metástasis." },
    { nivel: "medio", q: "¿Qué ocurre en la anafase I y en qué se diferencia de la anafase de la mitosis?", sol: "En la anafase I se separan los cromosomas homólogos de cada pareja (cada uno con sus dos cromátidas). En la anafase de la mitosis se separan las cromátidas hermanas de cada cromosoma." },
    { nivel: "medio", q: "¿Por qué de la ovogénesis sale un solo óvulo y no cuatro?", sol: "Porque el citoplasma se reparte de forma desigual: casi todo va a una célula, que será el óvulo con reservas para el embrión, y las otras tres (corpúsculos polares) son pequeñas y degeneran." },
    { nivel: "medio", q: "Explica qué es la no disyunción y cómo produce el síndrome de Down.", sol: "Es el fallo en la separación de dos homólogos o dos cromátidas en la meiosis. Se forma un gameto con 24 cromosomas (dos copias del 21); si se une a un gameto normal de 23, el cigoto tiene 47 cromosomas, con tres cromosomas 21: trisomía 21 o síndrome de Down." },
    { nivel: "avanzado", q: "Una especie tiene 2n = 10. ¿Cuántas combinaciones de cromosomas puede formar en sus gametos por segregación al azar? Explica por qué el número real es aún mayor.", sol: "n = 5, combinaciones = 2⁵ = 32. El número real es mucho mayor porque el sobrecruzamiento intercambia fragmentos entre homólogos y crea cromosomas nuevos, combinados." },
    { nivel: "avanzado", q: "Una célula tiene 4C de ADN y sus cromosomas tienen dos cromátidas. ¿En qué fases del ciclo puede estar? Justifica.", sol: "En G2, en la profase o en la metafase de la mitosis (o en la meiosis I hasta la anafase I): el ADN ya se ha replicado en la fase S y las cromátidas aún no se han separado." },
    { nivel: "avanzado", q: "Las células cancerosas se dividen mucho más que las normales. Explica por qué la quimioterapia provoca caída del pelo y llagas en la boca.", sol: "Muchos fármacos de quimioterapia atacan a las células que se dividen rápido (por ejemplo, impidiendo formar el huso o copiar el ADN). También afectan a las células sanas que se dividen mucho, como las de los folículos del pelo y las del revestimiento de la boca y el intestino." },
    { nivel: "avanzado", q: "¿Qué ventaja evolutiva tiene la reproducción sexual, con meiosis, frente a la asexual, que solo usa mitosis?", sol: "La sexual genera descendientes genéticamente variados, por lo que es más probable que algunos sobrevivan a cambios del ambiente, enfermedades o parásitos. La asexual es más rápida y no necesita pareja, pero produce clones: un cambio desfavorable puede afectar a todos por igual." },
    { nivel: "avanzado", q: "Diseña el procedimiento para observar mitosis en raíces de cebolla y explica por qué se usan las puntas de la raíz.", sol: "Poner una cebolla con la base en agua varios días; cortar 2-3 mm de las puntas de las raíces; teñir con orceína acética calentando suavemente; aplastar la muestra entre porta y cubre (squash) y observar a 400×. Se usan las puntas porque allí está el meristemo, tejido de crecimiento donde las células se dividen mucho." },
    { nivel: "avanzado", q: "El riesgo de trisomía 21 aumenta con la edad de la madre, pero mucho menos con la del padre. Propón una explicación basándote en la gametogénesis.", sol: "Los óvulos empiezan la meiosis antes del nacimiento y la dejan detenida hasta la ovulación, muchos años después; con el tiempo, las estructuras que mantienen unidos y separan los cromosomas se deterioran y aumenta la no disyunción. Los espermatozoides se forman continuamente y su meiosis dura pocas semanas." },
    { nivel: "avanzado", q: "Una persona tiene cariotipo 47, XXY. ¿Qué gametos pudieron originarlo? Plantea dos posibilidades.", sol: "1) Un óvulo XX (no disyunción en la madre) fecundado por un espermatozoide Y. 2) Un óvulo X fecundado por un espermatozoide XY (no disyunción en la meiosis I del padre)." },
  ],
  quiz: [
    { q: "¿Qué une a las dos cromátidas hermanas de un cromosoma?", o: ["El telómero", "El centrómero", "El centriolo", "El nucléolo"], a: 1, e: "Es el estrechamiento central del cromosoma." },
    { q: "Si 2n = 46, el número haploide es…", o: ["92", "46", "22", "23"], a: 3, e: "n es la mitad: un cromosoma de cada pareja." },
    { q: "¿En qué fase del ciclo se replica el ADN?", o: ["S", "G1", "G2", "Metafase"], a: 0, e: "S de síntesis." },
    { q: "Las células que han salido del ciclo y no se dividen están en…", o: ["G2", "fase M", "G0", "profase"], a: 2, e: "Por ejemplo, la mayoría de las neuronas." },
    { q: "La proteína p53 se conoce como…", o: ["el motor del huso", "la enzima de la replicación", "el guardián del genoma", "la hormona del crecimiento"], a: 2, e: "Frena el ciclo si el ADN está dañado." },
    { q: "La muerte celular programada se llama…", o: ["apoptosis", "necrosis", "metástasis", "mitosis"], a: 0, e: "Es una autodestrucción ordenada." },
    { q: "¿En qué fase de la mitosis desaparece la envoltura nuclear?", o: ["Metafase", "Anafase", "Telofase", "Profase"], a: 3, e: "Al mismo tiempo se condensan los cromosomas." },
    { q: "En la anafase de la mitosis…", o: ["se forman los núcleos", "se separan las cromátidas hermanas", "se condensan los cromosomas", "se duplica el ADN"], a: 1, e: "Cada cromátida va a un polo." },
    { q: "En las células vegetales, la citocinesis se produce por…", o: ["un tabique que forma la nueva pared", "un anillo que estrangula", "meiosis", "un flagelo"], a: 0, e: "La pared rígida impide el estrangulamiento." },
    { q: "La replicación del ADN es semiconservativa porque…", o: ["solo se copia la mitad del ADN", "se pierden la mitad de las bases", "cada molécula nueva tiene una hebra vieja y una nueva", "solo ocurre en la mitad de las células"], a: 2, e: "Lo demostraron Meselson y Stahl." },
    { q: "Un tumor que invade otros órganos es…", o: ["benigno", "maligno", "un quiste", "una mitosis normal"], a: 1, e: "La propagación se llama metástasis." },
    { q: "¿Cuál de estos es un agente mutágeno?", o: ["El agua", "La vitamina C", "El ejercicio", "La radiación ultravioleta"], a: 3, e: "También el tabaco o algunos virus." },
    { q: "La meiosis produce…", o: ["2 células 2n", "4 células 2n", "2 células n", "4 células n"], a: 3, e: "Cuatro células haploides." },
    { q: "¿En qué fase de la meiosis ocurre el sobrecruzamiento?", o: ["Metafase II", "Profase I", "Anafase II", "Telofase I"], a: 1, e: "Cuando los homólogos están emparejados." },
    { q: "En la anafase I se separan…", o: ["las cromátidas hermanas", "los centriolos", "los homólogos", "los núcleos"], a: 2, e: "Por eso se reduce el número de cromosomas." },
    { q: "¿Cuántas combinaciones de cromosomas puede formar una persona solo por segregación al azar?", o: ["2²³, más de 8 millones", "46", "23²", "1"], a: 0, e: "Dos orientaciones posibles para cada una de las 23 parejas." },
    { q: "De una célula madre de la espermatogénesis salen…", o: ["1 espermatozoide", "4 espermatozoides", "2 espermatozoides", "8 espermatozoides"], a: 1, e: "En la ovogénesis sale 1 óvulo." },
    { q: "El síndrome de Down se debe a…", o: ["una trisomía del cromosoma 21", "la falta del cromosoma X", "una mutación en la p53", "un virus"], a: 0, e: "Hay 47 cromosomas." },
    { q: "Las fibras musculares esqueléticas tienen varios núcleos porque…", o: ["hacen meiosis", "no tienen ADN", "son haploides", "hay mitosis sin citocinesis o fusión de células"], a: 3, e: "Se forman núcleos sin dividir el citoplasma." },
    { q: "¿Qué proceso NO depende de la mitosis?", o: ["Cerrar una herida", "Crecer en la adolescencia", "Formar espermatozoides", "Reproducir una planta por esqueje"], a: 2, e: "Los gametos se forman por meiosis." },
  ],
  examen: [
    { q: "Ordena las fases de la mitosis.", o: ["Metafase, profase, telofase, anafase", "Profase, metafase, anafase, telofase", "Profase, anafase, metafase, telofase", "Telofase, anafase, metafase, profase"], a: 1, e: "PRO-ME-te ANA TELO." },
    { q: "Una célula de perro (2n = 78) tras la meiosis tiene…", o: ["39 cromosomas", "78 cromosomas", "156 cromosomas", "19 cromosomas"], a: 0, e: "Los gametos son haploides." },
    { q: "¿Qué ocurre en la fase S?", o: ["Se divide el citoplasma", "Se separan las cromátidas", "Se replica el ADN", "Se forma el huso"], a: 2, e: "Forma parte de la interfase." },
    { q: "La metástasis es…", o: ["la división normal de una célula", "la propagación de un cáncer a otros órganos", "un tipo de meiosis", "la muerte programada de la célula"], a: 1, e: "Es propia de los tumores malignos." },
    { q: "Una diferencia entre mitosis y meiosis es que…", o: ["la mitosis da 4 células", "la meiosis da células idénticas", "la mitosis solo ocurre en las gónadas", "la meiosis reduce el número de cromosomas a la mitad"], a: 3, e: "2n → n." },
    { q: "La variabilidad genética de la meiosis se debe a…", o: ["la citocinesis", "la apoptosis", "los telómeros", "el sobrecruzamiento y la segregación al azar"], a: 3, e: "Además, cualquier óvulo puede unirse a cualquier espermatozoide." },
    { q: "Los corpúsculos polares se forman en…", o: ["la espermatogénesis", "la ovogénesis", "la mitosis", "la citocinesis vegetal"], a: 1, e: "Son las tres células pequeñas que degeneran." },
    { q: "Un cariotipo sirve para…", o: ["ver los orgánulos", "medir la glucosa", "detectar alteraciones en el número o la forma de los cromosomas", "contar las mitocondrias"], a: 2, e: "Ordena los cromosomas por parejas." },
  ],
  feynman: ["Qué es un cromosoma y qué son las cromátidas hermanas", "Las fases del ciclo celular", "Las cuatro fases de la mitosis con el truco PROMETe ANA TELO", "Por qué la meiosis reduce a la mitad los cromosomas", "Cómo genera variabilidad la meiosis"],
  mapa: mapa("CICLO CELULAR", "var(--eso)", [
    ["Interfase", "G1 · S (copia ADN) · G2", "var(--leaf)"],
    ["Mitosis", "pro · meta · ana · telo", "var(--pen)"],
    ["Meiosis", "2 divisiones · 4 células n", "var(--red)"],
    ["Para qué", "crecer · reparar · gametos", "var(--ink)"],
  ], 250),
  tarjetas: [
    ["Fases de la mitosis", "Profase, metafase, anafase y telofase."],
    ["¿Qué ocurre en la anafase?", "Las cromátidas hermanas se separan y van a polos opuestos."],
    ["Resultado de la mitosis", "Dos células hijas diploides idénticas a la madre."],
    ["Resultado de la meiosis", "Cuatro células hijas haploides genéticamente distintas."],
    ["Número de cromosomas humanos", "46 (2n) en las células del cuerpo y 23 (n) en los gametos."],
    ["Diploide y haploide", "2n: cromosomas en parejas (células del cuerpo). n: uno de cada pareja (gametos)."],
    ["Citocinesis", "División del citoplasma tras la mitosis."],
    ["Metástasis", "Extensión de un cáncer a otros órganos."],
    ["Fases de la interfase", "G1 (crece), S (replica el ADN) y G2 (se prepara para dividirse)."],
    ["Apoptosis", "Muerte celular programada: la célula se autodestruye de forma ordenada."],
    ["Sobrecruzamiento", "Intercambio de fragmentos entre cromosomas homólogos en la profase I."],
    ["No disyunción", "Fallo en la separación de cromosomas en la meiosis; origina trisomías como el síndrome de Down."],
  ],
  glosario: [
    ["Cromosoma", "ADN compactado con proteínas que se hace visible durante la división."],
    ["Cromátidas hermanas", "Las dos copias idénticas de un cromosoma unidas por el centrómero."],
    ["Centrómero", "Punto donde se unen las cromátidas y se engancha el huso."],
    ["Telómero", "Extremo protector de un cromosoma."],
    ["Cariotipo", "Conjunto de cromosomas de una célula ordenados por parejas."],
    ["Homólogos", "Los dos cromosomas de una pareja, uno paterno y otro materno."],
    ["Diploide (2n)", "Célula con dos juegos de cromosomas."],
    ["Haploide (n)", "Célula con un solo juego de cromosomas, como los gametos."],
    ["Replicación", "Copia del ADN antes de la división; es semiconservativa."],
    ["Interfase", "Etapa del ciclo en la que la célula crece y replica su ADN (G1, S, G2)."],
    ["Huso mitótico", "Fibras de proteína que mueven los cromosomas durante la división."],
    ["Mitosis", "División del núcleo que produce dos núcleos idénticos."],
    ["Citocinesis", "División del citoplasma."],
    ["Meiosis", "Doble división que produce cuatro células haploides distintas."],
    ["Sobrecruzamiento", "Intercambio de fragmentos entre homólogos en la meiosis I."],
    ["Apoptosis", "Muerte celular programada."],
    ["Metástasis", "Extensión de un cáncer a otros órganos."],
    ["Aneuploidía", "Alteración con cromosomas de más o de menos, como una trisomía."],
  ],
  situacion: {
    titulo: "Stop motion de la división celular",
    reto: "El museo de ciencias de vuestra ciudad prepara una exposición sobre el cuerpo humano y os pide una animación corta que explique, sin palabras técnicas innecesarias, la diferencia entre la mitosis y la meiosis. Debéis crearla con la técnica stop motion y modelos de plastilina.",
    pasos: [
      "Observad al microscopio una preparación de punta de raíz de cebolla y localizad células en cada fase de la mitosis; fotografiadlas.",
      "Diseñad los modelos: una célula 2n = 4 con dos parejas de cromosomas de dos colores (paterno y materno).",
      "Escribid el guion: mitosis completa, meiosis I con sobrecruzamiento y meiosis II.",
      "Grabad la animación (unas 60-80 fotos por división) y añadid rótulos con el número de cromosomas en cada paso.",
      "Presentad el vídeo a otra clase y recoged sus dudas para mejorar la versión final.",
    ],
    producto: "Animación stop motion de 1-2 minutos y un panel con las fotos reales del microscopio.",
    evaluacion: [
      "Corrección científica de las fases y del número de cromosomas y cromátidas.",
      "Claridad al mostrar la diferencia entre separar homólogos y separar cromátidas.",
      "Uso de las observaciones reales al microscopio.",
      "Creatividad, organización del equipo y mejora tras la presentación.",
    ],
  },
  familias: [
    "Mirad fotos de cuando era bebé y ahora: ¿cuántas mitosis han hecho falta para crecer?",
    "Comparad rasgos entre hermanos o primos y hablad de por qué cada uno es distinto.",
    "Con calcetines desparejados de dos colores, representad una célula con dos parejas de cromosomas y haced juntos la mitosis y la meiosis.",
    "Repasad las tarjetas del paso 6 dos minutos al día durante la semana.",
  ],
  profesores: {
    saberes: "Saberes de «La célula» de Biología y Geología de 4º (RD 217/2022, BOE-A-2022-4975): ciclo celular, mitosis y meiosis, su función biológica y su relación con la reproducción y la variabilidad; relación con el cáncer. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Observar mitosis en punta de raíz de cebolla con orceína acética y calcular la duración relativa de cada fase.",
      "Simular mitosis y meiosis con calcetines, limpiapipas o plastilina de dos colores.",
      "Cálculo de combinaciones 2ⁿ en gametos y debate sobre la ventaja de la reproducción sexual.",
      "Situación de aprendizaje: animación stop motion para una exposición.",
    ],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ciclo celular, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ciclo_celular" },
    { t: "Meiosis, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Meiosis" },
  ],
  revisado: "2026-11-13",
};
