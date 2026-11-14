// Tecnología e Ingeniería I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L3");

// Celda cúbica en perspectiva con átomos en vértices y, según el tipo, en el centro o en las caras.
const celda = (x, y, tipo, nombre, c) => {
  const s = 46, d = 18, v = [[0, 0], [s, 0], [s, s], [0, s]].map(([a, b]) => [x + a, y + d + b]);
  const t = v.map(([a, b]) => [a + d, b - d]);
  const at = [...v, ...t];
  if (tipo === "bcc") at.push([x + s / 2 + d / 2, y + d + s / 2 - d / 2]);
  if (tipo === "fcc") at.push([x + s / 2, y + d + s / 2], [x + s / 2 + d, y + s / 2], [x + s + d / 2, y + d + s / 2 - d / 2], [x + d / 2, y + d + s / 2 - d / 2]);
  const lin = (p) => `M${p.map((q) => q.join(" ")).join(" L ")} Z`;
  return `<path d="${lin(v)} ${lin(t)} M${v[0]} L${t[0]} M${v[1]} L${t[1]} M${v[2]} L${t[2]} M${v[3]} L${t[3]}" fill="none" stroke="var(--line)" stroke-width="1.5"/>
    ${at.map(([a, b]) => `<circle cx="${a}" cy="${b}" r="5.5" fill="${c}"/>`).join("")}
    ${B.tx(x + 32, y + 100, nombre, { fs: 11.5, maxW: 76, bold: true, color: c })}`;
};

module.exports = B.tema({
  titulo: "Materiales y sus propiedades",
  minutos: 110,
  objetivos: [
    "Relacionar la estructura interna de los materiales (enlaces y redes cristalinas) con sus propiedades",
    "Clasificar los materiales técnicos: metales, polímeros, cerámicos y compuestos",
    "Describir y calcular propiedades mecánicas, térmicas y eléctricas (tensión, deformación, módulo de Young, dilatación, resistividad)",
    "Seleccionar el material adecuado para una aplicación con criterios técnicos, económicos y ambientales",
  ],
  claves: ["enlace metálico", "red cristalina", "aleación", "acero", "termoplástico", "material compuesto", "tensión", "módulo de Young", "dureza", "tenacidad", "tratamiento térmico"],
  pregunta: {
    texto: "Una cuchara de acero se dobla y no se rompe; una taza de porcelana se rompe sin doblarse. Si las dos son duras, ¿por qué se comportan tan distinto?",
    respuesta: "Por su <mark>estructura interna</mark>. En el metal, los átomos están unidos por un enlace metálico que permite que los planos de átomos <b>se deslicen</b> sin separarse: el material se deforma plásticamente. En la cerámica, los enlaces iónicos y covalentes son rígidos y direccionales: no admiten deslizamiento y la grieta avanza de golpe. Dureza y <b>tenacidad</b> son propiedades distintas.",
  },
  lectura: {
    titulo: "La edad de los materiales",
    html: `<p>Los historiadores ponen nombre a las épocas antiguas según el material que dominaban: Edad de Piedra, Edad del Bronce, Edad del Hierro. No es casualidad. Quien sabía fundir bronce fabricaba mejores herramientas y armas, cultivaba más tierra y construía más rápido. El material marcaba el límite de lo que una sociedad podía hacer.</p>
    <p>Hoy seguimos igual, aunque la lista es mucho más larga. Un avión moderno es más de la mitad fibra de carbono; las palas de un aerogenerador combinan fibra de vidrio y resinas; un móvil contiene más de treinta elementos químicos distintos, algunos escasos y difíciles de extraer. Las pantallas plegables, las prótesis de titanio que se integran en el hueso o los aceros que resisten terremotos son resultado de conocer muy bien cómo están ordenados los átomos dentro de la materia.</p>
    <p>Elegir un material no es elegir el «mejor», porque no existe. Es encontrar el equilibrio entre resistencia, peso, precio, facilidad para fabricarlo e impacto ambiental. En este tema aprenderás el lenguaje que usan los ingenieros para describir los materiales y las cifras que permiten compararlos.</p>`,
  },
  secciones: [3, 4, 5],
  bloques: [
    {
      h: "Estructura interna y enlaces",
      html: `<p>Las propiedades de un material dependen de los <b>átomos</b> que lo forman y, sobre todo, de cómo se unen. Hay tres enlaces principales:</p>
      <ul><li><b>Enlace metálico</b>: los átomos ceden sus electrones externos, que forman una «nube» común que se mueve libremente entre iones positivos. Explica por qué los metales conducen la electricidad y el calor, tienen brillo y se pueden deformar sin romperse.</li>
      <li><b>Enlace iónico</b>: un átomo cede electrones a otro y ambos quedan unidos por atracción eléctrica. Es típico de muchas cerámicas: duras, frágiles y aislantes.</li>
      <li><b>Enlace covalente</b>: los átomos comparten electrones. Forma las cadenas de los polímeros y estructuras muy rígidas como el diamante.</li></ul>
      <p>Entre moléculas actúan además <b>fuerzas intermoleculares</b> débiles (de Van der Waals o puentes de hidrógeno). En los plásticos, las cadenas largas están unidas entre sí por estas fuerzas: por eso muchos se ablandan con el calor, cuando la agitación térmica las vence.</p>
      <p>Según el orden de los átomos, los sólidos son <b>cristalinos</b>, con un patrón que se repite en el espacio (metales, sal), o <b>amorfos</b>, sin orden a larga distancia (vidrio, muchos plásticos).</p>`,
      svg: B.cajas("Tipos de enlace y propiedades que producen", [["Metálico", "nube de electrones|conduce, se deforma"], ["Iónico", "cede electrones|duro y frágil"], ["Covalente", "comparte electrones|cadenas, diamante"], ["Intermolecular", "fuerzas débiles|se ablanda con calor"]], { t: "Enlaces en los materiales" }),
    },
    {
      h: "Redes cristalinas de los metales",
      html: `<p>En un metal, los átomos se colocan en una <b>red cristalina</b>: una estructura que se repite. La unidad más pequeña que la describe se llama <b>celda unidad</b>. Los metales técnicos adoptan sobre todo tres redes:</p>
      <ul><li><b>Cúbica centrada en el cuerpo</b> (BCC): un átomo en cada vértice del cubo y otro en el centro. Hierro a temperatura ambiente (hierro α o ferrita), cromo, wolframio. Suelen ser resistentes pero menos dúctiles.</li>
      <li><b>Cúbica centrada en las caras</b> (FCC): átomos en los vértices y en el centro de cada cara. Aluminio, cobre, oro, níquel y el hierro γ (austenita) a alta temperatura. Tienen muchos planos de deslizamiento y son muy <mark>dúctiles</mark>.</li>
      <li><b>Hexagonal compacta</b> (HC): magnesio, zinc, titanio. Menos planos de deslizamiento y menor ductilidad en frío.</li></ul>
      <p>Algunos metales cambian de red al calentarse: es la <b>alotropía</b>. El hierro pasa de BCC a FCC a 912 °C. Ese cambio es la base de los tratamientos térmicos del acero. Además, las redes reales tienen <b>defectos</b>: huecos, átomos intrusos y dislocaciones. Las dislocaciones permiten que el metal se deforme y, al acumularse, lo endurecen.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Celdas unidad cúbica centrada en el cuerpo y cúbica centrada en las caras">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Celdas unidad", { fs: 13, maxW: 236, bold: true, font: B.D })}
        ${celda(42, 40, "bcc", "BCC: Fe α", "var(--pen)")}${celda(158, 40, "fcc", "FCC: Al, Cu", "var(--red)")}
        ${B.tx(130, 168, "+ 1 en el centro   |   + 6 en las caras", { fs: 10, maxW: 230, color: "var(--muted)" })}
      </svg>`,
      video: { id: "hd4unkd5Y-c", titulo: "Estructura cristalina: estructura de los metales", canal: "Soldadura&Tecnología", vistas: 454963 },
    },
    {
      h: "Clasificación de los materiales técnicos",
      html: `<p>Los materiales de uso técnico se agrupan en cuatro grandes familias:</p>
      <ul><li><b>Metales</b>: férreos (hierro, aceros y fundiciones) y no férreos (aluminio, cobre, titanio, zinc, magnesio y sus aleaciones). Resistentes, tenaces y conductores; muchos se oxidan.</li>
      <li><b>Polímeros</b> o plásticos: <b>termoplásticos</b> (PE, PP, PVC, PET, ABS, PLA), que se ablandan con el calor y se pueden reciclar fundiéndolos; <b>termoestables</b> (resinas epoxi, baquelita, poliéster), que no se reblandecen porque sus cadenas forman una red rígida; y <b>elastómeros</b> (caucho, silicona), muy elásticos.</li>
      <li><b>Cerámicos</b>: arcillas, porcelana, vidrio, cemento y cerámicas técnicas como la alúmina o el carburo de silicio. Duros, resistentes al calor y a la corrosión, aislantes y frágiles.</li>
      <li><b>Compuestos</b>: combinan una <b>matriz</b> y un <b>refuerzo</b> para sumar sus ventajas. El hormigón armado (hormigón + acero), la fibra de vidrio o de carbono en resina y la madera contrachapada son ejemplos.</li></ul>
      <p>A ellos se suman los <b>materiales avanzados</b>: aleaciones con memoria de forma, piezoeléctricos, superconductores, nanomateriales como el grafeno y biomateriales compatibles con el cuerpo humano.</p>`,
      svg: B.ciclo("Familias de materiales técnicos", "Familias", ["Metales", "Polímeros", "Cerámicos", "Compuestos", "Avanzados"]),
    },
    {
      h: "Aleaciones férreas: aceros y fundiciones",
      html: `<p>Una <b>aleación</b> es una mezcla de un metal con otros elementos, metálicos o no, que mejora sus propiedades. Las más importantes son las del hierro con <b>carbono</b>. Según la cantidad de carbono:</p>
      <ul><li><b>Hierro dulce</b>: menos del 0,03 % de C. Blando y dúctil, poco usado.</li>
      <li><b>Acero</b>: entre el 0,03 % y el <mark>2,11 %</mark> de C. Al aumentar el carbono crecen la dureza y la resistencia, pero disminuyen la ductilidad y la soldabilidad. Los aceros de bajo carbono se usan en chapas y perfiles; los de alto carbono, en herramientas y muelles.</li>
      <li><b>Fundición</b>: entre el 2,11 % y el 6,67 % de C. Muy colable (llena bien los moldes), dura y frágil. Se usa en bloques de motor, bancadas y tapas de alcantarilla.</li></ul>
      <p>Los <b>aceros aleados</b> añaden otros elementos: el <b>cromo</b> (más del 10,5 %) forma una capa de óxido protectora y da lugar al acero inoxidable; el <b>níquel</b> aumenta la tenacidad; el <b>manganeso</b>, la resistencia al desgaste; el <b>wolframio</b> y el <b>vanadio</b>, la dureza en caliente para herramientas de corte. El acero se obtiene en el alto horno y el convertidor, o, cada vez más, fundiendo chatarra en hornos eléctricos de arco, que consumen mucha menos energía y aprovechan material reciclado.</p>`,
      svg: B.barras("Porcentaje máximo de carbono en hierro dulce, acero y fundición", [["Hierro dulce", 0.03], ["Acero", 2.11], ["Fundición", 6.67]], { t: "Carbono máximo (%)", unidad: " %" }),
    },
    {
      h: "Metales no férreos",
      html: `<p>Los metales no férreos son más caros que el acero, pero ofrecen ventajas decisivas:</p>
      <ul><li><b>Aluminio</b> (densidad 2,7 g/cm³, un tercio que el acero): ligero, buen conductor y resistente a la corrosión gracias a una fina capa de alúmina. Sus aleaciones con cobre, magnesio o silicio se usan en aviones, bicicletas, latas y ventanas. Obtenerlo desde la bauxita exige mucha electricidad; reciclarlo ahorra cerca del 95 % de esa energía.</li>
      <li><b>Cobre</b>: excelente conductor eléctrico y térmico, dúctil y fácil de soldar. Cables, bobinados de motores e intercambiadores de calor. Sus aleaciones son el <b>latón</b> (cobre + zinc), usado en grifería, y el <b>bronce</b> (cobre + estaño), en cojinetes y esculturas.</li>
      <li><b>Titanio</b>: ligero (4,5 g/cm³), tan resistente como muchos aceros, muy resistente a la corrosión y biocompatible. Prótesis, aeronáutica y química. Es caro de producir.</li>
      <li><b>Magnesio</b>: el metal estructural más ligero (1,7 g/cm³). Carcasas de portátiles y llantas.</li>
      <li><b>Zinc</b>: protege el acero mediante el <b>galvanizado</b>.</li>
      <li><b>Estaño y plomo</b>: soldadura blanda; el plomo, por su toxicidad, se ha retirado de muchas aplicaciones.</li></ul>`,
      svg: B.barras("Densidad de algunos metales en gramos por centímetro cúbico", [["Magnesio", 1.7], ["Aluminio", 2.7], ["Titanio", 4.5], ["Acero", 7.85], ["Cobre", 8.96]], { t: "Densidad (g/cm³)" }),
    },
    {
      h: "Polímeros, cerámicos y compuestos",
      html: `<p>Los <b>polímeros</b> son macromoléculas formadas por la unión repetida de moléculas pequeñas llamadas <b>monómeros</b>: el polietileno es una cadena de miles de unidades de etileno. Son ligeros (densidad cercana a 1 g/cm³), aislantes, resistentes a la corrosión, fáciles de moldear y baratos. Sus inconvenientes son la baja resistencia al calor, la degradación por la luz ultravioleta y su larga persistencia en el medio ambiente. Muchos llevan un código de reciclado del 1 (PET) al 7 (otros).</p>
      <p>Los <b>cerámicos</b> soportan temperaturas muy altas y no se oxidan, porque ya son en gran parte óxidos. Las cerámicas técnicas se usan en frenos de carbono-cerámica, aislantes de bujías, placas térmicas de naves y prótesis dentales. Su gran debilidad es la <mark>fragilidad</mark>: una pequeña grieta puede crecer de golpe.</p>
      <p>En los <b>compuestos</b>, el refuerzo (fibras o partículas) soporta la carga y la matriz las mantiene unidas, las protege y reparte los esfuerzos. La fibra de carbono en resina epoxi tiene una resistencia comparable al acero con una quinta parte de su densidad, aunque su fabricación es cara y su reciclado, difícil. Las propiedades de un compuesto con fibras dependen de la dirección: es un material <b>anisótropo</b>.</p>`,
      svg: B.comparar("Termoplásticos frente a termoestables", ["Termoplásticos", ["cadenas lineales", "se funden con calor", "reciclables", "PE, PP, PET, PLA"]], ["Termoestables", ["red entrecruzada", "no se reblandecen", "difícil reciclaje", "epoxi, baquelita"]]),
    },
    {
      h: "Propiedades físicas, térmicas y eléctricas",
      html: `<p>La <b>densidad</b> (ρ = m / V) indica la masa por unidad de volumen; es clave en transporte, donde cada kilo cuesta combustible. Las propiedades <b>térmicas</b> describen la respuesta al calor: el <b>punto de fusión</b>, la <b>conductividad térmica</b> (el cobre la tiene alta; el poliestireno expandido, muy baja) y la <b>dilatación térmica</b>. Al calentarse, una barra de longitud L₀ se alarga:</p>
      <div class="formula"><span>ΔL = α · L₀ · ΔT</span></div>
      <p>donde α es el coeficiente de dilatación lineal (en el acero, unos 12 · 10⁻⁶ °C⁻¹). Por eso los puentes y las vías tienen juntas de dilatación.</p>
      <p>Las propiedades <b>eléctricas</b> clasifican los materiales en conductores, semiconductores y aislantes. La resistencia de un hilo depende de su <b>resistividad</b> ρ, su longitud L y su sección S:</p>
      <div class="formula"><span>R = ρ · L / S</span></div>
      <p>El cobre tiene ρ ≈ 1,7 · 10⁻⁸ Ω·m. Hay también propiedades <b>magnéticas</b> (el hierro es ferromagnético, el aluminio no) y <b>ópticas</b> (transparencia, color, brillo).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Barra que se alarga al calentarse, con la fórmula de la dilatación lineal">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Dilatación lineal", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <rect x="30" y="48" width="160" height="22" rx="4" fill="var(--pen)" opacity=".85"/>${B.tx(110, 63, "L₀ a 20 °C", { fs: 11, maxW: 140, bold: true, color: "#fff" })}
        <rect x="30" y="96" width="160" height="22" rx="4" fill="var(--red)" opacity=".85"/><rect x="190" y="96" width="36" height="22" rx="4" fill="var(--sun)"/>
        ${B.tx(110, 111, "a 80 °C", { fs: 11, maxW: 140, bold: true, color: "#fff" })}${B.tx(208, 136, "ΔL", { fs: 13, maxW: 40, bold: true, color: "var(--sun)" })}
        <path d="M30 40 V 128" stroke="var(--ink)" stroke-width="2"/>
        ${B.tx(130, 164, "ΔL = α · L₀ · ΔT", { fs: 14, maxW: 200, bold: true })}
      </svg>`,
    },
    {
      h: "Propiedades mecánicas: tensión y deformación",
      html: `<p>Las propiedades <b>mecánicas</b> describen cómo responde un material a las fuerzas. Para compararlos sin depender del tamaño de la pieza se usa la <b>tensión</b> o esfuerzo unitario, la fuerza por unidad de sección, y la <b>deformación unitaria</b>, el alargamiento relativo:</p>
      <div class="formula"><span>σ = F / S   ·   ε = ΔL / L₀</span></div>
      <p>La tensión se mide en pascales (Pa = N/m²); en ingeniería se usa el <b>megapascal</b>: 1 MPa = 1 N/mm². La deformación no tiene unidades (a veces se da en %).</p>
      <p>Mientras la tensión es pequeña, el material se comporta de forma <b>elástica</b>: al quitar la carga recupera su forma, y la tensión es proporcional a la deformación. Es la <mark>ley de Hooke</mark>:</p>
      <div class="formula"><span>σ = E · ε</span></div>
      <p>La constante E es el <b>módulo de elasticidad</b> o de Young y mide la rigidez: unos 210 000 MPa en el acero, 70 000 MPa en el aluminio y 2000 MPa en muchos plásticos. Por encima del <b>límite elástico</b>, el material sufre deformación <b>plástica</b>, permanente. La tensión máxima que soporta antes de romper es la <b>resistencia a la tracción</b>. En el diseño se trabaja con una <b>tensión admisible</b> menor que el límite elástico, dividiéndolo por un <b>coeficiente de seguridad</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Curva tensión-deformación con zona elástica, límite elástico, zona plástica y rotura">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M30 150 H 240 M30 150 V 18" stroke="var(--ink)" stroke-width="2"/>
        <path d="M30 150 L 70 60" stroke="var(--pen)" stroke-width="3.5"/><path d="M70 60 C 110 42, 160 30, 190 40 S 215 62, 222 78" fill="none" stroke="var(--red)" stroke-width="3.5"/>
        <circle cx="70" cy="60" r="4.5" fill="var(--sun)"/><circle cx="190" cy="38" r="4.5" fill="var(--leaf)"/><path d="M218 72 l8 8 M226 72 l-8 8" stroke="var(--ink)" stroke-width="2"/>
        ${B.tx(78, 76, "límite elástico", { fs: 10, maxW: 80, anchor: "start", color: "var(--sun)", bold: true })}${B.tx(170, 26, "resistencia máx.", { fs: 10, maxW: 90, color: "var(--leaf)", bold: true })}
        ${B.tx(84, 126, "elástica", { fs: 10.5, maxW: 54, color: "var(--pen)", bold: true })}${B.tx(160, 104, "plástica", { fs: 10.5, maxW: 60, color: "var(--red)", bold: true })}
        ${B.tx(20, 26, "σ", { fs: 14, maxW: 20, bold: true })}${B.tx(234, 168, "ε", { fs: 14, maxW: 20, bold: true })}
      </svg>`,
      video: { id: "fK7vKtwCcbI", titulo: "Ensayo de tracción: ¿dúctil o frágil? ¿Módulo elástico?", canal: "Ingeniosos", vistas: 188230 },
    },
    {
      h: "Dureza, tenacidad, fragilidad y fatiga",
      html: `<p>Otras propiedades mecánicas importantes son:</p>
      <ul><li><b>Dureza</b>: resistencia a ser rayado o penetrado. El diamante es el material más duro. Se relaciona con la resistencia al desgaste.</li>
      <li><b>Tenacidad</b>: capacidad de absorber energía antes de romperse, deformándose. Un material tenaz «avisa» antes de fallar.</li>
      <li><b>Fragilidad</b>: lo contrario; el material rompe casi sin deformarse. El vidrio es duro pero frágil.</li>
      <li><b>Resiliencia</b>: energía que absorbe un material en un golpe; se mide con el ensayo Charpy.</li>
      <li><b>Ductilidad</b> (se estira en hilos) y <b>maleabilidad</b> (se extiende en láminas).</li>
      <li><b>Fatiga</b>: rotura por cargas repetidas, aunque cada una sea menor que la resistencia del material. Es la causa de la mayoría de las roturas de ejes, alas y bielas. Por eso se diseña con un número de ciclos de vida.</li>
      <li><b>Fluencia</b> o <i>creep</i>: deformación lenta con el tiempo bajo carga constante y temperatura alta, importante en turbinas y calderas.</li></ul>
      <p>No hay que confundir dureza con resistencia ni con tenacidad: un acero templado muy duro puede romperse como el vidrio si no se reviene.</p>`,
      svg: B.cajas("Propiedades mecánicas: dureza, tenacidad, fragilidad y fatiga", [["Dureza", "resiste el rayado|diamante, temple"], ["Tenacidad", "absorbe energía|acero dulce"], ["Fragilidad", "rompe sin avisar|vidrio, fundición"], ["Fatiga", "cargas repetidas|ejes, alas"]], { t: "Comportamiento mecánico" }),
      video: { id: "RbC6OgCWvTg", titulo: "Propiedades de los materiales: dureza, tenacidad, elasticidad", canal: "Rocio Carreon", vistas: 240678 },
    },
    {
      h: "Propiedades químicas y tecnológicas",
      html: `<p>Las propiedades <b>químicas</b> indican cómo reacciona el material con su entorno. La <b>oxidación</b> es la reacción con el oxígeno del aire, que se acelera con el calor. La <b>corrosión</b> es un deterioro electroquímico en presencia de humedad o de un electrolito: la herrumbre del hierro es su ejemplo más conocido, y cuesta a los países industrializados alrededor del 3 % de su PIB. Se combate con pinturas, galvanizado, aceros inoxidables, recubrimientos plásticos o protección catódica con ánodos de sacrificio.</p>
      <p>Las propiedades <b>tecnológicas</b> indican la facilidad para fabricar piezas con el material:</p>
      <ul><li><b>Colabilidad</b>: aptitud para llenar un molde al fundirse.</li>
      <li><b>Forjabilidad</b>: aptitud para deformarse en caliente.</li>
      <li><b>Maquinabilidad</b>: facilidad para ser cortado con herramientas.</li>
      <li><b>Soldabilidad</b>: aptitud para unirse por soldadura.</li>
      <li><b>Templabilidad</b>: capacidad de endurecerse por temple.</li></ul>
      <p>Las propiedades <b>ecológicas</b> completan el cuadro: si el material es reciclable, biodegradable, tóxico, abundante o escaso, y cuánta energía y CO₂ cuesta producirlo. Con ellas se valora su sostenibilidad.</p>`,
      svg: B.rejilla("Propiedades tecnológicas y ejemplos de materiales que las tienen", ["Propiedad", "Buen ejemplo"], [["Colabilidad", "fundición gris"], ["Forjabilidad", "acero dulce"], ["Maquinabilidad", "latón"], ["Soldabilidad", "acero bajo C"], ["Templabilidad", "acero alto C"]], { t: "Propiedades tecnológicas" }),
    },
    {
      h: "Tratamientos de los metales",
      html: `<p>Las propiedades de un acero pueden modificarse sin cambiar su composición mediante <b>tratamientos térmicos</b>, que consisten en calentar, mantener y enfriar a un ritmo controlado:</p>
      <ul><li><b>Temple</b>: se calienta hasta la zona de austenita (unos 850 °C) y se enfría bruscamente en agua o aceite. Se forma martensita: el acero queda <mark>muy duro pero frágil</mark>.</li>
      <li><b>Revenido</b>: después del temple, se calienta a una temperatura menor (200-650 °C) y se enfría. Reduce la fragilidad y las tensiones internas a cambio de algo de dureza.</li>
      <li><b>Recocido</b>: calentamiento y enfriamiento muy lento, dentro del horno. Ablanda el material y facilita el mecanizado.</li>
      <li><b>Normalizado</b>: calentamiento y enfriamiento al aire. Afina el grano y homogeneiza.</li></ul>
      <p>Los <b>tratamientos termoquímicos</b> cambian la composición de la superficie: la <b>cementación</b> añade carbono y la <b>nitruración</b>, nitrógeno, para lograr piezas duras por fuera (resistentes al desgaste) y tenaces por dentro, como los engranajes. Los tratamientos <b>mecánicos</b> (deformación en frío o acritud) endurecen por acumulación de dislocaciones, y los <b>superficiales</b> (cromado, anodizado, pintura en polvo) protegen y decoran.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Curvas de temperatura en el tiempo para el temple, el revenido y el recocido">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M28 152 H 244 M28 152 V 18" stroke="var(--ink)" stroke-width="2"/>
        <path d="M30 150 L 60 40 H 90 L 96 148" fill="none" stroke="var(--red)" stroke-width="3"/>
        <path d="M100 148 L 120 96 H 150 L 170 148" fill="none" stroke="var(--sun)" stroke-width="3"/>
        <path d="M30 150 L 62 44 H 92 C 150 60, 200 120, 240 146" fill="none" stroke="var(--pen)" stroke-width="2.5" stroke-dasharray="6 4"/>
        ${B.tx(70, 34, "temple", { fs: 11, maxW: 60, bold: true, color: "var(--red)" })}${B.tx(136, 88, "revenido", { fs: 11, maxW: 60, bold: true, color: "var(--sun)" })}${B.tx(200, 104, "recocido", { fs: 11, maxW: 60, bold: true, color: "var(--pen)" })}
        ${B.tx(18, 30, "T", { fs: 13, maxW: 16, bold: true })}${B.tx(236, 168, "t", { fs: 13, maxW: 16, bold: true })}
      </svg>`,
    },
    {
      h: "Selección de materiales y sostenibilidad",
      html: `<p>Elegir un material es un problema con muchos criterios. Se parte de los requisitos de la pieza (cargas, temperatura, ambiente, peso máximo, coste) y se descartan los materiales que no los cumplen. Entre los que quedan, se comparan <b>índices de mérito</b>. Por ejemplo, si se busca una pieza resistente y ligera, interesa la <b>resistencia específica</b> σ/ρ: la fibra de carbono y el titanio ganan al acero. Si lo importante es la rigidez ligera, se compara E/ρ.</p>
      <p>Los diagramas de Ashby representan familias de materiales en un gráfico de dos propiedades (por ejemplo, módulo de Young frente a densidad) y permiten ver de un vistazo qué materiales son candidatos.</p>
      <p>Hoy la elección incluye criterios <b>ambientales</b>: la <b>energía incorporada</b> (la necesaria para producir un kilo de material), la huella de carbono, la posibilidad de reciclado y la escasez. Algunas materias primas, como el litio, el cobalto o las tierras raras, son <mark>materias primas críticas</mark> para la Unión Europea: de ellas dependen baterías e imanes, y su suministro está concentrado en pocos países. Diseñar con materiales reciclados, monomateriales y fáciles de separar reduce esa dependencia.</p>`,
      svg: B.flujo("Pasos para seleccionar un material", ["Requisitos de la pieza", "Descartar los que no cumplen", "Comparar índices (σ/ρ, E/ρ)", "Coste y fabricación", "Impacto y reciclado"], { t: "Selección de materiales" }),
    },
  ],
  figura: {
    titulo: "Fórmulas clave de las propiedades de los materiales",
    items: [["Densidad", "ρ = m / V", "masa por", "unidad de volumen"], ["Tensión", "σ = F / S", "fuerza por", "unidad de sección"], ["Hooke", "σ = E · ε", "zona elástica:", "proporcionalidad"], ["Dilatación", "ΔL = α·L₀·ΔT", "alargamiento", "con el calor"]],
  },
  video: { id: "Vt0JUsiLyXk", titulo: "Propiedades de los materiales [6 ejemplos]", canal: "TICMAS Educación", vistas: 81193 },
  quiz: [
    ["¿Qué enlace explica que los metales conduzcan la electricidad?", ["Iónico", "Covalente", "Metálico", "De Van der Waals"], 2, "La nube de electrones libres permite el paso de corriente."],
    ["El hierro a temperatura ambiente tiene red…", ["FCC", "BCC", "HC", "amorfa"], 1, "Hierro α o ferrita: cúbica centrada en el cuerpo."],
    ["¿Qué red tienen el aluminio y el cobre?", ["BCC", "FCC", "HC", "Ninguna"], 1, "Cúbica centrada en las caras: muy dúctiles."],
    ["Un acero tiene un contenido de carbono…", ["menor del 0,03 %", "entre 0,03 % y 2,11 %", "entre 2,11 % y 6,67 %", "mayor del 6,67 %"], 1, "Por encima del 2,11 % es fundición."],
    ["El acero inoxidable debe su resistencia a la corrosión principalmente al…", ["carbono", "cromo", "plomo", "estaño"], 1, "Con más del 10,5 % de cromo se forma una capa protectora."],
    ["El latón es una aleación de…", ["cobre y estaño", "cobre y zinc", "hierro y carbono", "aluminio y magnesio"], 1, "El bronce es cobre y estaño."],
    ["¿Qué plástico NO se puede volver a fundir?", ["PET", "Polietileno", "Resina epoxi", "PLA"], 2, "Los termoestables forman una red rígida."],
    ["En un compuesto, la función de la matriz es…", ["soportar toda la carga", "unir y proteger el refuerzo y repartir esfuerzos", "dar color", "conducir la electricidad"], 1, "El refuerzo soporta la carga; la matriz lo mantiene unido."],
    ["La tensión se calcula como…", ["σ = F · S", "σ = F / S", "σ = S / F", "σ = ΔL / L₀"], 1, "Fuerza dividida entre la sección."],
    ["1 MPa equivale a…", ["1 N/m²", "1 N/mm²", "1 kN/m²", "1 kg/cm²"], 1, "10⁶ N/m² = 1 N/mm²."],
    ["El módulo de Young mide…", ["la dureza", "la rigidez en zona elástica", "la tenacidad", "la densidad"], 1, "E = σ / ε: cuanto mayor, más rígido."],
    ["Por encima del límite elástico la deformación es…", ["nula", "elástica", "plástica (permanente)", "siempre rotura"], 2, "Ya no se recupera la forma inicial."],
    ["El vidrio es duro y…", ["tenaz", "frágil", "dúctil", "maleable"], 1, "Rompe sin apenas deformarse."],
    ["La rotura de un eje por cargas repetidas pequeñas se llama…", ["fluencia", "fatiga", "corrosión", "acritud"], 1, "La fatiga causa la mayoría de las roturas en máquinas."],
    ["La aptitud de un metal para llenar un molde es la…", ["maquinabilidad", "colabilidad", "soldabilidad", "forjabilidad"], 1, "Las fundiciones tienen muy buena colabilidad."],
    ["El temple deja el acero…", ["blando y dúctil", "muy duro y frágil", "inoxidable", "sin cambios"], 1, "Por eso después se hace un revenido."],
    ["¿Qué tratamiento ablanda el acero para mecanizarlo mejor?", ["Temple", "Recocido", "Cementación", "Nitruración"], 1, "Enfriamiento muy lento dentro del horno."],
    ["La cementación consiste en…", ["añadir carbono a la superficie", "pintar la pieza", "enfriar en agua", "añadir cromo a todo el acero"], 0, "Es un tratamiento termoquímico: duro por fuera, tenaz por dentro."],
    ["Si buscas una pieza resistente y ligera, comparas…", ["σ · ρ", "σ / ρ", "E · ρ", "ρ / σ"], 1, "Resistencia específica."],
    ["El reciclado del aluminio ahorra aproximadamente…", ["5 % de la energía", "50 %", "95 %", "nada"], 2, "Fundir chatarra cuesta muy poco frente a la electrólisis."],
  ],
  examen: [
    ["Una barra de 20 mm² soporta 5000 N. Su tensión es…", ["100 MPa", "250 MPa", "4 MPa", "25 MPa"], 1, "σ = 5000 / 20 = 250 N/mm² = 250 MPa."],
    ["Una barra de 2 m se alarga 1 mm. Su deformación unitaria es…", ["0,5", "0,0005", "0,002", "2"], 1, "ε = 1 / 2000 = 5 · 10⁻⁴."],
    ["Con σ = 105 MPa y E = 210 000 MPa, la deformación es…", ["0,0005", "0,005", "2000", "0,05"], 0, "ε = σ / E = 105 / 210 000 = 5 · 10⁻⁴."],
    ["Un raíl de acero (α = 12 · 10⁻⁶ °C⁻¹) de 25 m sube 40 °C. Se alarga…", ["1,2 mm", "12 mm", "120 mm", "0,12 mm"], 1, "ΔL = 12 · 10⁻⁶ · 25 000 mm · 40 = 12 mm."],
    ["Límite elástico 360 MPa y coeficiente de seguridad 3. La tensión admisible es…", ["1080 MPa", "120 MPa", "363 MPa", "357 MPa"], 1, "σadm = 360 / 3 = 120 MPa."],
    ["¿Qué material elegirías para una prótesis de cadera?", ["Acero al carbono", "Aleación de titanio", "PVC", "Fundición gris"], 1, "Ligero, resistente, no se corroe y es biocompatible."],
    ["Un engranaje debe ser duro en los dientes y tenaz en el núcleo. ¿Qué tratamiento?", ["Recocido", "Cementación y temple", "Normalizado", "Ninguno"], 1, "Superficie dura con núcleo tenaz."],
    ["Un hilo de cobre (ρ = 1,7 · 10⁻⁸ Ω·m) de 100 m y 1 mm² tiene una resistencia de…", ["1,7 Ω", "0,17 Ω", "17 Ω", "0,017 Ω"], 0, "R = 1,7 · 10⁻⁸ · 100 / 10⁻⁶ = 1,7 Ω."],
  ],
  feynman: ["Por qué el enlace metálico permite deformar un metal sin romperlo", "Qué diferencia hay entre acero y fundición", "Qué es un termoplástico y qué un termoestable", "Cómo se calculan tensión, deformación y módulo de Young", "Por qué dureza y tenacidad no son lo mismo", "Para qué sirven el temple y el revenido"],
  mapa: ["MATERIALES", [["Estructura", "enlaces · redes BCC, FCC, HC"], ["Familias", "metales · polímeros · cerámicos"], ["Propiedades", "σ = F/S · E · dureza · tenacidad"], ["Tratamientos", "temple · revenido · cementación"]]],
  tarjetas: [
    ["Enlace metálico", "Iones positivos en una nube de electrones libres: conduce y se deforma."],
    ["BCC y FCC", "Cúbica centrada en el cuerpo (Fe α) y en las caras (Al, Cu, Fe γ)."],
    ["Acero y fundición", "Acero: 0,03-2,11 % de C. Fundición: 2,11-6,67 % de C."],
    ["Acero inoxidable", "Acero con más del 10,5 % de cromo."],
    ["Termoplástico", "Se ablanda con el calor y se puede refundir: PE, PP, PET, PLA."],
    ["Material compuesto", "Matriz + refuerzo: fibra de carbono, hormigón armado."],
    ["Tensión y deformación", "σ = F / S (MPa); ε = ΔL / L₀ (sin unidades)."],
    ["Ley de Hooke", "σ = E · ε en la zona elástica."],
    ["Tenacidad", "Energía absorbida antes de romper; lo contrario de fragilidad."],
    ["Fatiga", "Rotura por cargas repetidas menores que la resistencia."],
    ["Temple y revenido", "Temple: duro y frágil. Revenido: reduce la fragilidad."],
    ["Resistencia específica", "σ / ρ: compara materiales resistentes y ligeros."],
  ],
  ejemplos: [
    ["Un cable de acero de 6 mm de diámetro sostiene una carga de 9 kN. Calcula la tensión.", ["Sección: S = π · d² / 4 = π · 36 / 4 = 28,3 mm².", "σ = F / S = 9000 N / 28,3 mm².", "σ = 318 N/mm²."], "σ ≈ 318 MPa."],
    ["Una barra de aluminio (E = 70 000 MPa) de 1,5 m soporta una tensión de 140 MPa en zona elástica. ¿Cuánto se alarga?", ["ε = σ / E = 140 / 70 000 = 0,002.", "ΔL = ε · L₀ = 0,002 · 1500 mm.", "ΔL = 3 mm."], "Se alarga 3 mm (0,2 %)."],
    ["Calcula el diámetro mínimo de una varilla de acero (límite elástico 275 MPa) que debe soportar 20 kN con coeficiente de seguridad 2,5.", ["σadm = 275 / 2,5 = 110 MPa.", "S = F / σadm = 20 000 / 110 = 181,8 mm².", "d = √(4S / π) = √(231,5) = 15,2 mm."], "d ≥ 15,2 mm; se elegiría una varilla comercial de 16 mm."],
    ["Una ventana de aluminio (α = 23 · 10⁻⁶ °C⁻¹) mide 1,8 m. Pasa de 5 °C en invierno a 45 °C al sol. ¿Cuánto varía su longitud?", ["ΔT = 45 − 5 = 40 °C.", "ΔL = α · L₀ · ΔT = 23 · 10⁻⁶ · 1800 · 40.", "ΔL = 1,66 mm."], "Unos 1,7 mm: el marco necesita holgura o juntas elásticas."],
    ["Compara la resistencia específica del acero (σ = 500 MPa, ρ = 7,85 g/cm³) y de una aleación de aluminio (σ = 300 MPa, ρ = 2,7 g/cm³).", ["Acero: 500 / 7,85 = 63,7 MPa·cm³/g.", "Aluminio: 300 / 2,7 = 111 MPa·cm³/g.", "La aleación de aluminio es 1,75 veces mejor en resistencia por unidad de masa."], "Para una pieza ligera y resistente es mejor el aluminio, aunque el acero sea más resistente en valor absoluto."],
    ["¿Qué longitud de hilo de cobre de 0,5 mm² tiene una resistencia de 1 Ω? (ρ = 1,7 · 10⁻⁸ Ω·m)", ["R = ρ · L / S → L = R · S / ρ.", "S = 0,5 mm² = 0,5 · 10⁻⁶ m².", "L = 1 · 0,5 · 10⁻⁶ / 1,7 · 10⁻⁸ = 29,4 m."], "L ≈ 29 m."],
  ],
  errores: [
    "Olvidar pasar el diámetro a sección (S = π d² / 4) o usar el radio como si fuera el diámetro.",
    "Mezclar unidades: N con m² da Pa, no MPa; conviene trabajar en N y mm².",
    "Confundir dureza con tenacidad: un material muy duro puede ser frágil.",
    "Pensar que el acero inoxidable no se corroe nunca: puede hacerlo en ambientes con cloruros si la capa de óxido se daña.",
    "Creer que todos los plásticos se reciclan igual: los termoestables no se pueden refundir.",
    "Aplicar la ley de Hooke por encima del límite elástico, donde ya no hay proporcionalidad.",
  ],
  ejercicios: {
    b: [
      ["Explica por qué los metales son buenos conductores eléctricos.", "Por el enlace metálico: los electrones externos forman una nube que se mueve libremente y transporta la corriente."],
      ["Indica la red cristalina del hierro α, del aluminio y del magnesio.", "Hierro α: BCC. Aluminio: FCC. Magnesio: hexagonal compacta (HC)."],
      ["Clasifica: PET, porcelana, latón, hormigón armado, silicona, titanio.", "PET: termoplástico. Porcelana: cerámico. Latón: metal no férreo (aleación). Hormigón armado: compuesto. Silicona: elastómero. Titanio: metal no férreo."],
      ["¿Qué diferencia hay entre acero y fundición?", "El porcentaje de carbono: el acero tiene entre 0,03 % y 2,11 %; la fundición, entre 2,11 % y 6,67 %. La fundición es más colable, dura y frágil."],
      ["¿De qué metales están hechos el latón y el bronce?", "Latón: cobre y zinc. Bronce: cobre y estaño."],
      ["Calcula la densidad de una pieza de 540 g y 200 cm³. ¿De qué metal puede ser?", "ρ = 540 / 200 = 2,7 g/cm³: aluminio."],
      ["Calcula la tensión en una barra de 50 mm² que soporta 8000 N.", "σ = 8000 / 50 = 160 MPa."],
      ["Una barra de 800 mm se alarga 0,4 mm. Calcula la deformación unitaria.", "ε = 0,4 / 800 = 0,0005 (0,05 %)."],
      ["Define tenacidad y fragilidad con un ejemplo de cada una.", "Tenacidad: absorber energía deformándose antes de romper (acero dulce). Fragilidad: romper casi sin deformarse (vidrio, fundición)."],
      ["Ordena de menor a mayor densidad: acero, magnesio, titanio, aluminio.", "Magnesio (1,7) < aluminio (2,7) < titanio (4,5) < acero (7,85) g/cm³."],
      ["¿Qué es la corrosión y cómo se protege el acero con zinc?", "Es el deterioro electroquímico del metal con humedad. El galvanizado recubre el acero con zinc, que se corroe antes y lo protege."],
      ["Nombra cuatro propiedades tecnológicas.", "Colabilidad, forjabilidad, maquinabilidad y soldabilidad (también templabilidad)."],
    ],
    m: [
      ["Un tirante de acero de 10 mm de diámetro soporta 12 kN. Calcula la tensión.", "S = π · 100 / 4 = 78,5 mm². σ = 12 000 / 78,5 = 153 MPa."],
      ["Un alambre sometido a 200 MPa se deforma ε = 0,001. Calcula E. ¿Qué metal podría ser?", "E = 200 / 0,001 = 200 000 MPa: un acero (E ≈ 210 000 MPa)."],
      ["Una barra de acero (E = 210 000 MPa) de 3 m soporta 84 MPa. Calcula su alargamiento.", "ε = 84 / 210 000 = 0,0004. ΔL = 0,0004 · 3000 = 1,2 mm."],
      ["Calcula la carga máxima de una varilla de 12 mm² con límite elástico 240 MPa y coeficiente de seguridad 2.", "σadm = 120 MPa. F = 120 · 12 = 1440 N."],
      ["Un puente de acero (α = 12 · 10⁻⁶ °C⁻¹) mide 150 m. Calcula la junta necesaria para un salto térmico de 50 °C.", "ΔL = 12 · 10⁻⁶ · 150 000 mm · 50 = 90 mm."],
      ["Calcula la resistencia de 50 m de hilo de cobre de 1,5 mm² (ρ = 1,7 · 10⁻⁸ Ω·m).", "R = 1,7 · 10⁻⁸ · 50 / 1,5 · 10⁻⁶ = 0,57 Ω."],
      ["¿Por qué los metales FCC suelen ser más dúctiles que los BCC?", "Porque la red FCC tiene más planos compactos por los que las dislocaciones se deslizan con facilidad; así el metal admite más deformación plástica sin romper."],
      ["Explica qué ocurre con la dureza y la ductilidad de un acero al aumentar su contenido de carbono.", "Aumentan la dureza y la resistencia y disminuyen la ductilidad, la tenacidad y la soldabilidad."],
      ["Explica por qué se hace un revenido después de un temple.", "El temple deja el acero muy duro pero frágil y con tensiones internas; el revenido las reduce y devuelve tenacidad a cambio de perder algo de dureza."],
      ["¿Por qué la fibra de carbono es anisótropa y qué consecuencia tiene en el diseño?", "Sus fibras resisten mucho en su dirección y poco en la perpendicular. Hay que orientar las capas según las cargas previstas."],
      ["Diferencia fatiga y fluencia.", "Fatiga: rotura por cargas variables repetidas. Fluencia: deformación lenta y progresiva bajo carga constante, sobre todo a alta temperatura."],
      ["Un perfil de 1,2 m de aluminio (α = 23 · 10⁻⁶) y otro de PVC (α = 80 · 10⁻⁶) se calientan 30 °C. Compara su dilatación.", "Aluminio: 23 · 10⁻⁶ · 1200 · 30 = 0,83 mm. PVC: 80 · 10⁻⁶ · 1200 · 30 = 2,88 mm. El PVC dilata unas 3,5 veces más."],
      ["Elige material para: cable eléctrico, bancada de torno, aislante de bujía, cuadro de bicicleta ligera. Justifica.", "Cable: cobre (conductividad). Bancada: fundición gris (colable, amortigua vibraciones). Bujía: cerámica de alúmina (aislante y resiste calor). Cuadro: aluminio o fibra de carbono (resistencia específica)."],
    ],
    a: [
      ["Diseña el diámetro de un cable de acero (límite elástico 400 MPa, n = 4) que eleve un ascensor de 800 kg (g = 9,8 m/s²).", "F = 800 · 9,8 = 7840 N. σadm = 100 MPa. S = 78,4 mm². d = √(4 · 78,4 / π) = 10 mm."],
      ["Una barra de 2 m y 100 mm² se alarga 1,9 mm bajo 20 kN. Calcula σ, ε y E, y di si es acero o aluminio.", "σ = 20 000 / 100 = 200 MPa. ε = 1,9 / 2000 = 0,00095. E = 200 / 0,00095 ≈ 210 500 MPa: acero."],
      ["Un tirante debe soportar 30 kN con n = 2. Compara la masa por metro de una solución en acero (σe = 300 MPa, ρ = 7,85 g/cm³) y en aluminio (σe = 250 MPa, ρ = 2,7 g/cm³).", "Acero: S = 30 000 / 150 = 200 mm² → masa = 2 cm² · 100 cm · 7,85 = 1570 g/m. Aluminio: S = 30 000 / 125 = 240 mm² → 2,4 · 100 · 2,7 = 648 g/m. El aluminio pesa menos de la mitad."],
      ["Un raíl soldado de 30 m no puede dilatar. Si se calienta 40 °C, ¿qué tensión aparece? (α = 12 · 10⁻⁶, E = 210 000 MPa)", "La deformación impedida es ε = α · ΔT = 12 · 10⁻⁶ · 40 = 4,8 · 10⁻⁴. σ = E · ε = 210 000 · 4,8 · 10⁻⁴ ≈ 101 MPa de compresión (independiente de la longitud)."],
      ["Se quiere sustituir un cable de cobre (ρ = 1,7 · 10⁻⁸) de 10 mm² por uno de aluminio (ρ = 2,8 · 10⁻⁸) con la misma resistencia. ¿Qué sección necesita y cuál pesa menos? (ρCu = 8,96, ρAl = 2,7 g/cm³)", "Misma R y L: S_Al = 10 · 2,8 / 1,7 = 16,5 mm². Masa relativa: Cu 10 · 8,96 = 89,6; Al 16,5 · 2,7 = 44,6. El de aluminio pesa la mitad aunque es más grueso."],
      ["Explica, a partir de la red cristalina del hierro, por qué el temple endurece el acero.", "A alta temperatura el hierro es FCC (austenita) y disuelve mucho carbono. Si se enfría lentamente pasa a BCC y el carbono sale formando carburos. Con enfriamiento brusco el carbono queda atrapado y la red se distorsiona (martensita), lo que bloquea las dislocaciones: el acero se vuelve muy duro y frágil."],
      ["Un fabricante de bicicletas duda entre acero, aluminio y fibra de carbono. Plantea una matriz de decisión con cuatro criterios y justifica los pesos.", "Criterios: peso (0,35), coste (0,3), durabilidad ante golpes (0,2) y reciclabilidad (0,15). Puntuaciones orientativas: acero (4, 9, 8, 9) = 6,85; aluminio (7, 7, 6, 9) = 7,1; carbono (10, 3, 5, 3) = 5,85. Para una bici urbana gana el aluminio; para competición, subiendo el peso del criterio peso, ganaría el carbono."],
      ["¿Por qué las alas de un avión se inspeccionan periódicamente aunque nunca superen su resistencia máxima?", "Por la fatiga: cada vuelo es un ciclo de carga que puede hacer crecer microgrietas. Con el número de ciclos, una grieta puede alcanzar un tamaño crítico y romper con tensiones mucho menores que la resistencia. Las inspecciones detectan las grietas antes."],
      ["Calcula la energía incorporada de una lata de aluminio de 15 g fabricada con material primario (200 MJ/kg) y con reciclado (10 MJ/kg). ¿Qué ahorro supone?", "Primario: 0,015 · 200 = 3 MJ. Reciclado: 0,015 · 10 = 0,15 MJ. Ahorro = 2,85 MJ por lata, el 95 %."],
      ["Una pieza de fundición falla al recibir un golpe, aunque soportaba bien cargas estáticas. Explica la causa y propone dos soluciones.", "La fundición es frágil: tiene poca tenacidad y resiliencia. Soluciones: usar acero o fundición dúctil (nodular), que absorben más energía, o rediseñar la pieza para evitar golpes y concentraciones de tensión (redondear aristas)."],
    ],
  },
  glosario: [
    ["Enlace metálico", "Unión de iones positivos con una nube de electrones libres."],
    ["Red cristalina", "Disposición ordenada y repetida de los átomos en un sólido."],
    ["Alotropía", "Cambio de red cristalina de un elemento con la temperatura."],
    ["Aleación", "Mezcla de un metal con otros elementos para mejorar sus propiedades."],
    ["Acero", "Aleación de hierro con 0,03 % a 2,11 % de carbono."],
    ["Fundición", "Aleación de hierro con 2,11 % a 6,67 % de carbono."],
    ["Termoplástico", "Polímero que se ablanda con el calor y se puede refundir."],
    ["Termoestable", "Polímero de red rígida que no se reblandece con el calor."],
    ["Material compuesto", "Combinación de matriz y refuerzo con mejores propiedades."],
    ["Tensión", "Fuerza por unidad de sección; se mide en MPa."],
    ["Módulo de Young", "Constante de proporcionalidad entre tensión y deformación elásticas."],
    ["Límite elástico", "Tensión a partir de la cual la deformación es permanente."],
    ["Dureza", "Resistencia a ser rayado o penetrado."],
    ["Tenacidad", "Capacidad de absorber energía antes de romperse."],
    ["Fatiga", "Rotura por cargas repetidas inferiores a la resistencia."],
    ["Corrosión", "Deterioro electroquímico de un metal con su entorno."],
    ["Temple", "Calentamiento y enfriamiento brusco que endurece el acero."],
    ["Materia prima crítica", "Material escaso y estratégico cuyo suministro es arriesgado."],
  ],
  situacion: {
    titulo: "El material de la nueva botella del instituto",
    reto: "El centro quiere regalar a cada estudiante una botella reutilizable. Debéis elegir el material (acero inoxidable, aluminio, tritán, vidrio o bambú con interior de acero) y justificar la decisión con datos técnicos, económicos y ambientales.",
    pasos: [
      "Definid los requisitos: volumen, masa máxima, resistencia a caídas, aislamiento térmico, apto para alimentos y precio.",
      "Recoged las propiedades de cada candidato: densidad, tenacidad, conductividad térmica, temperatura máxima y reciclabilidad.",
      "Haced ensayos sencillos con muestras: caída desde un metro, rayado con una punta y medida de la temperatura del agua a los 30 minutos.",
      "Calculad la energía incorporada aproximada de cada botella con datos de bases de materiales.",
      "Construid una matriz de decisión ponderada y elegid el material.",
    ],
    producto: "Un informe técnico de dos páginas con tabla de propiedades, resultados de los ensayos, matriz de decisión y recomendación final.",
    evaluacion: [
      "Las propiedades están bien identificadas, con unidades y fuentes.",
      "Los ensayos se han realizado con método y sus resultados se interpretan correctamente.",
      "La matriz de decisión es coherente y los pesos están justificados.",
      "La recomendación tiene en cuenta el impacto ambiental del ciclo de vida.",
    ],
  },
  familias: [
    "Buscad en casa objetos de las cuatro familias de materiales y comentad por qué se eligió cada uno.",
    "Mirad el código de reciclado de los envases de plástico y relacionadlo con el tipo de polímero.",
    "Observad una cuchara de acero y un plato de cerámica y explicad juntos la diferencia entre dureza y tenacidad.",
    "Repasad las fórmulas de tensión y dilatación con un ejemplo de vuestra casa, como una barandilla o una ventana.",
  ],
  saberes: "Materiales y fabricación: estructura interna de los materiales, propiedades y aplicaciones, metales y aleaciones, polímeros, cerámicos y compuestos, tratamientos térmicos, selección de materiales y criterios de sostenibilidad (RD 243/2022, Tecnología e Ingeniería I, bloque B).",
  ideas: [
    "Construir maquetas de las redes BCC y FCC con bolas de corcho y palillos.",
    "Comparar la dilatación de varillas de distintos metales con un dilatómetro casero.",
    "Templar y revenir una aguja de acero o un clip con un mechero y comprobar su fragilidad.",
    "Usar una base de datos de materiales para dibujar un diagrama de Ashby de E frente a densidad.",
  ],
  fuentes: [
    { t: "Ciencia de materiales, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ciencia_de_materiales" },
    { t: "Materias primas críticas, Comisión Europea", url: "https://single-market-economy.ec.europa.eu/sectors/raw-materials/areas-specific-interest/critical-raw-materials_es" },
  ],
});
