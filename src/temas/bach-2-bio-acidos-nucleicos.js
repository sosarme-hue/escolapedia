// Biología 2º Bachillerato · Ácidos nucleicos (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, cadena, arbol } = require("./_bach2-bio");

const pent = (cx, cy, c = "var(--sun)", s = 1) => `<polygon points="${[[0, -16], [16, -4], [10, 14], [-10, 14], [-16, -4]].map(([x, y]) => `${(cx + x * s).toFixed(1)},${(cy + y * s).toFixed(1)}`).join(" ")}" fill="${c}" fill-opacity=".25" stroke="${c}" stroke-width="2.2"/>`;

// Nucleótido.
const nucSVG = marco("Estructura de un nucleótido: una pentosa unida por el carbono 1' a una base nitrogenada (enlace N-glucosídico) y por el carbono 5' a un grupo fosfato (enlace éster)", `
  <circle cx="46" cy="70" r="22" fill="#b45309"/>${T(46, 75, "P", { fs: 16, b: true, c: "#fff" })}${T(46, 112, "fosfato", { fs: 11, b: true, c: "#b45309" })}
  ${pent(122, 80, "var(--sun)", 1.7)}${T(122, 86, "pentosa", { fs: 11, b: true })}
  <path d="M68 70 L 96 70" stroke="var(--ink)" stroke-width="2.4"/>${T(82, 62, "5'", { fs: 10, b: true })}
  <rect x="180" y="44" width="66" height="40" rx="10" fill="var(--pen)"/>${T(213, 69, "Base", { fs: 13, b: true, c: "#fff" })}
  <path d="M148 72 L 180 64" stroke="var(--ink)" stroke-width="2.4"/>${T(162, 58, "1'", { fs: 10, b: true })}
  ${T(82, 140, "enlace éster", { fs: 10.5, b: true, c: "var(--muted)" })}${T(196, 108, "enlace N-", { fs: 10.5, b: true, c: "var(--muted)" })}${T(196, 122, "glucosídico", { fs: 10.5, b: true, c: "var(--muted)" })}
  ${T(130, 168, "nucleósido = pentosa + base", { fs: 11.5, b: true, c: "var(--leaf)" })}`);

// Cadena con enlaces fosfodiéster.
const cadSVG = marco("Una cadena de polinucleótido: los nucleótidos se unen por enlaces fosfodiéster entre el carbono 3' de una pentosa y el 5' de la siguiente, y la cadena tiene un extremo 5' y otro 3'", `
  ${[34, 82, 130].map((y, i) => `<circle cx="40" cy="${y}" r="11" fill="#b45309"/>${T(40, y + 4, "P", { fs: 11, b: true, c: "#fff" })}${pent(92, y + 14, "var(--sun)", 1.1)}
  <path d="M51 ${y} L 76 ${y + 8}" stroke="var(--ink)" stroke-width="2"/><path d="M110 ${y + 12} H 150" stroke="var(--ink)" stroke-width="2"/>
  <rect x="150" y="${y + 2}" width="40" height="22" rx="6" fill="${["var(--pen)", "var(--red)", "var(--leaf)"][i]}"/>${T(170, y + 18, ["A", "C", "G"][i], { fs: 12, b: true, c: "#fff" })}
  ${i < 2 ? `<path d="M88 ${y + 30} L 44 ${y + 40}" stroke="var(--red)" stroke-width="2.6"/>` : ""}`).join("")}
  ${T(22, 20, "5'", { fs: 13, b: true, c: "var(--pen)" })}${T(92, 176, "3' OH", { fs: 12, b: true, c: "var(--pen)" })}
  ${T(222, 70, "fosfo-", { fs: 11, b: true, c: "var(--red)" })}${T(222, 84, "diéster", { fs: 11, b: true, c: "var(--red)" })}${T(222, 120, "5' → 3'", { fs: 13, b: true })}`);

// Doble hélice esquemática.
const heliceSVG = marco("Doble hélice del ADN: dos cadenas antiparalelas enrolladas, con las bases emparejadas en el interior, A con T mediante dos puentes de hidrógeno y G con C mediante tres", `
  ${(() => { let a = "M70 10", b = "M190 10", r = ""; for (let i = 0; i <= 16; i++) { const y = 10 + i * 10, x1 = 130 - 60 * Math.cos(i * 0.4), x2 = 130 + 60 * Math.cos(i * 0.4); a += ` L ${x1.toFixed(1)} ${y}`; b += ` L ${x2.toFixed(1)} ${y}`; if (i % 2 === 1 && i < 16) { const p = ["A", "G", "T", "C", "G", "A", "C", "T"][(i - 1) / 2]; const q = { A: "T", T: "A", G: "C", C: "G" }[p]; const c = p === "A" || p === "T" ? "var(--leaf)" : "var(--red)"; const xm = (x1 + x2) / 2; r += `<path d="M${x1.toFixed(1)} ${y} H ${x2.toFixed(1)}" stroke="${c}" stroke-width="4" opacity=".55"/>`; if (Math.abs(x2 - x1) > 40) r += T(xm - 12, y + 4, p, { fs: 9, b: true, c }) + T(xm + 12, y + 4, q, { fs: 9, b: true, c }); } } return `${r}<path d="${a}" fill="none" stroke="var(--pen)" stroke-width="3.5"/><path d="${b}" fill="none" stroke="#b45309" stroke-width="3.5"/>`; })()}
  ${T(30, 20, "5'", { fs: 11, b: true, c: "var(--pen)" })}${T(30, 172, "3'", { fs: 11, b: true, c: "var(--pen)" })}${T(232, 20, "3'", { fs: 11, b: true, c: "#b45309" })}${T(232, 172, "5'", { fs: 11, b: true, c: "#b45309" })}
  ${T(232, 92, "2 nm", { fs: 10, b: true, c: "var(--muted)" })}`);

// ARNt en hoja de trébol.
const arntSVG = marco("ARN de transferencia en forma de hoja de trébol: el extremo 3' con la secuencia CCA lleva el aminoácido, y el bucle del anticodón reconoce el codón del ARNm", `
  <path d="M120 40 V 76 M140 40 V 76" stroke="var(--pen)" stroke-width="3"/>${[48, 58, 68].map((y) => `<path d="M120 ${y} H 140" stroke="var(--pen)" stroke-width="1.5"/>`).join("")}
  <circle cx="130" cy="96" r="0" />
  <path d="M120 76 L 76 88 M140 76 L 184 88 M120 100 L 130 120 M140 100 L 130 120" stroke="var(--pen)" stroke-width="3"/>
  <circle cx="60" cy="92" r="18" fill="none" stroke="var(--pen)" stroke-width="3"/><circle cx="200" cy="92" r="18" fill="none" stroke="var(--pen)" stroke-width="3"/>
  <rect x="116" y="76" width="28" height="24" rx="6" fill="none" stroke="var(--pen)" stroke-width="3"/>
  <circle cx="130" cy="140" r="20" fill="none" stroke="var(--red)" stroke-width="3"/>${T(130, 172, "anticodón", { fs: 11, b: true, c: "var(--red)" })}${T(130, 145, "UAC", { fs: 11, b: true, c: "var(--red)" })}
  ${T(156, 26, "3' –CCA", { fs: 11, b: true, c: "var(--leaf)", a: "start" })}<circle cx="146" cy="22" r="8" fill="var(--leaf)"/>${T(196, 42, "aminoácido", { fs: 10, b: true, c: "var(--leaf)", a: "start" })}
  ${T(110, 26, "5'", { fs: 11, b: true, a: "end" })}`);

module.exports = tema({
  titulo: "Ácidos nucleicos",
  minutos: 120,
  secciones: [4, 4, 4],
  objetivos: [
    "Describir la composición de los nucleótidos y nucleósidos y las bases nitrogenadas",
    "Reconocer nucleótidos con funciones propias, como el ATP, el AMPc y las coenzimas",
    "Explicar la formación del enlace fosfodiéster y la polaridad de las cadenas",
    "Describir el modelo de doble hélice del ADN, la complementariedad de bases y las reglas de Chargaff",
    "Explicar los niveles de empaquetamiento del ADN y las propiedades de desnaturalización e hibridación",
    "Diferenciar los tipos de ARN por su estructura y su función, y comparar ADN y ARN",
  ],
  claves: ["ácido nucleico", "nucleótido", "nucleósido", "base púrica", "base pirimidínica", "ATP", "enlace fosfodiéster", "extremo 5'", "doble hélice", "complementariedad", "antiparalelo", "reglas de Chargaff", "nucleosoma", "cromatina", "ARN mensajero", "ARN de transferencia"],
  pregunta: {
    texto: "Si estiraras el ADN de una sola de tus células, mediría unos dos metros. ¿Cómo cabe en un núcleo de una centésima de milímetro?",
    respuesta: "Porque está <mark>empaquetado</mark> en varios niveles. La doble hélice se enrolla alrededor de grupos de proteínas llamadas histonas y forma los <b>nucleosomas</b>, como cuentas en un collar. Ese collar se pliega en una fibra de 30 nm, que forma bucles sujetos a un armazón de proteínas, y estos se compactan aún más. Durante la división celular, el ADN alcanza el máximo empaquetamiento en los <b>cromosomas</b>, unas 10 000 veces más cortos que la molécula estirada.",
  },
  lectura: {
    titulo: "La fotografía 51",
    html: `<p>En mayo de 1952, en el King's College de Londres, la química Rosalind Franklin y su estudiante Raymond Gosling obtuvieron una imagen de difracción de rayos X de fibras de ADN con una nitidez sin precedentes. Se la conoce como la «fotografía 51». Su patrón en forma de X revelaba que la molécula era una hélice y permitía calcular sus dimensiones. Franklin era una cristalógrafa rigurosa que prefería no publicar un modelo hasta tener todos los datos.</p><p>A principios de 1953, sin que ella lo supiera, su colega Maurice Wilkins mostró la imagen a James Watson, que trabajaba en Cambridge con Francis Crick. Con esa pista, los datos de Franklin y las reglas de Erwin Chargaff sobre la proporción de las bases, Watson y Crick construyeron en pocas semanas su famoso modelo de doble hélice con varillas y placas de metal, y lo publicaron en abril de 1953 en una página de la revista <i>Nature</i>. Recibieron el Nobel en 1962 con Wilkins; Franklin había muerto en 1958, con 37 años, y el Nobel no se concede a título póstumo. En este tema estudiarás las moléculas que guardan y transmiten la información de la vida: el ADN y el ARN.</p>`,
  },
  bloques: [
    { h: "Los ácidos nucleicos", p: [
      "Los <mark>ácidos nucleicos</mark> son biomoléculas orgánicas formadas por C, H, O, N y P. Son los polímeros más grandes de los seres vivos: el ADN de un cromosoma humano puede tener más de 200 millones de unidades. Sus monómeros son los <b>nucleótidos</b>, unidos por enlaces fosfodiéster. Hay dos tipos: el <b>ácido desoxirribonucleico</b> (ADN) y el <b>ácido ribonucleico</b> (ARN). Su función es almacenar, transmitir y expresar la <b>información genética</b>: el ADN contiene las instrucciones para fabricar todas las proteínas y ARN de un organismo, y las transmite de una generación de células a la siguiente.",
      "El suizo Friedrich Miescher los descubrió en 1869 en los núcleos de los glóbulos blancos del pus de los vendajes, y los llamó «nucleína». Durante décadas se pensó que el material genético eran las proteínas, mucho más variadas. Los experimentos de <b>Griffith</b> (1928), que observó cómo una bacteria no virulenta se transformaba en virulenta, de <b>Avery, MacLeod y McCarty</b> (1944), que identificaron el «principio transformante» como el ADN, y de <b>Hershey y Chase</b> (1952), que marcaron con isótopos radiactivos los virus que infectan bacterias, demostraron que la herencia está escrita en el ADN.",
    ], svg: L6.linea("Hitos en el estudio de los ácidos nucleicos", [["1869", "Miescher: nucleína"], ["1944", "Avery: el ADN transforma"], ["1952", "Hershey-Chase"], ["1953", "Watson, Crick y Franklin"]], "Historia del ADN"), v: ["nuc-a", "El ADN explicado"] },
    { h: "Nucleósidos y nucleótidos", p: [
      "Un <mark>nucleótido</mark> está formado por tres componentes. Una <b>pentosa</b>: la ribosa en el ARN y la desoxirribosa (sin oxígeno en el carbono 2') en el ADN; sus carbonos se numeran con prima (1', 2'…) para distinguirlos de los de la base. Una <b>base nitrogenada</b>, molécula cíclica con nitrógeno: las <b>púricas</b>, de doble anillo, son la adenina (A) y la guanina (G); las <b>pirimidínicas</b>, de un solo anillo, son la citosina (C), la timina (T), exclusiva del ADN, y el uracilo (U), exclusivo del ARN. Y uno o varios grupos <b>fosfato</b>, procedentes del ácido fosfórico, que dan carácter ácido a la molécula.",
      "La pentosa unida a la base forma un <mark>nucleósido</mark>: el carbono 1' de la pentosa se une a un nitrógeno de la base mediante un <b>enlace N-glucosídico</b>, con pérdida de agua. Los nucleósidos se nombran con la terminación -osina para las púricas y -idina para las pirimidínicas: adenosina, guanosina, citidina, timidina, uridina; si llevan desoxirribosa se añade el prefijo desoxi-. Cuando el –OH del carbono 5' de la pentosa se une al ácido fosfórico mediante un <b>enlace éster</b>, se forma el nucleótido, que se nombra como el nucleósido monofosfato: adenosín monofosfato (AMP), desoxicitidín monofosfato (dCMP)…",
    ], svg: nucSVG, v: ["nuc-e", "Los nucleótidos"] },
    { h: "Nucleótidos con funciones propias", p: [
      "Algunos nucleótidos no forman parte de los ácidos nucleicos y tienen funciones esenciales por sí mismos. El más importante es el <mark>ATP</mark> (adenosín trifosfato), un nucleótido de adenina con tres grupos fosfato. Los enlaces entre los fosfatos son enlaces de alta energía: al hidrolizar el último se forma ADP (adenosín difosfato) y fosfato, y se liberan unos 7,3 kcal/mol. El ATP es la «moneda energética» de la célula: se forma en la respiración y en la fotosíntesis y se gasta en la síntesis de moléculas, el transporte activo, la contracción muscular o el impulso nervioso. Una persona recicla cada día una cantidad de ATP similar a su propio peso. El GTP cumple funciones parecidas en la síntesis de proteínas.",
      "Otros nucleótidos son <b>coenzimas</b>: el <b>NAD⁺</b> y el <b>NADP⁺</b> (dinucleótidos de nicotinamida y adenina) y el <b>FAD</b> (flavín adenín dinucleótido) transportan electrones e hidrógenos en las reacciones redox del metabolismo, y la <b>coenzima A</b> transporta grupos acetilo. El <b>AMP cíclico</b> (AMPc), en el que el fosfato se une a la vez a los carbonos 3' y 5' de la ribosa, actúa como <b>segundo mensajero</b>: cuando una hormona como la adrenalina llega a la membrana, se forma AMPc dentro de la célula y transmite la señal activando enzimas.",
    ], extra: `<div class="formula"><span>ATP + H₂O → ADP + Pi + 7,3 kcal/mol</span></div>`, svg: cadena("El ciclo ATP-ADP: la célula fabrica ATP con la energía de la respiración o la fotosíntesis y lo gasta en el trabajo celular", [["ADP + Pi", "var(--pen)"], ["ATP", "var(--red)"], ["ADP + Pi + energía", "var(--leaf)"]], ["respiración", "trabajo"], "ATP, moneda energética") },
    { h: "El enlace fosfodiéster y los polinucleótidos", p: [
      "Los nucleótidos se unen entre sí para formar cadenas de <b>polinucleótido</b>. El grupo fosfato unido al carbono 5' de un nucleótido forma un segundo enlace éster con el –OH del carbono 3' del nucleótido anterior. Como el fosfato queda unido a dos pentosas por dos enlaces éster, el enlace se llama <mark>fosfodiéster</mark>. Se forma así un esqueleto de pentosas y fosfatos alternados, del que sobresalen las bases nitrogenadas. El esqueleto es igual en todas las cadenas; lo que cambia, y contiene la información, es la <b>secuencia de bases</b>.",
      "Toda cadena tiene una <b>polaridad</b>: en un extremo queda libre el fosfato del carbono 5' (<b>extremo 5'</b>) y en el otro, el –OH del carbono 3' (<b>extremo 3'</b>). Por convenio, las secuencias se escriben siempre en sentido 5' → 3', por ejemplo 5'-ATGCCA-3'. Esta polaridad es fundamental: las enzimas que fabrican ADN y ARN solo pueden añadir nucleótidos en el extremo 3' de la cadena, es decir, la síntesis avanza en sentido 5' → 3'. Con cuatro bases distintas, una cadena de n nucleótidos puede tener 4ⁿ secuencias diferentes: con solo 10 nucleótidos ya hay más de un millón de combinaciones.",
    ], svg: cadSVG },
    { h: "El ADN: composición y reglas de Chargaff", p: [
      "El <mark>ADN</mark> está formado por desoxirribonucleótidos de adenina, guanina, citosina y timina. Se encuentra en el núcleo de las células eucariotas, asociado a proteínas, y también en las mitocondrias y los cloroplastos; en las procariotas está en el citoplasma, en una región llamada nucleoide. Es la molécula que contiene la información genética de todos los seres vivos y de muchos virus. Su estructura se estudia, como la de las proteínas, en varios niveles: la <b>estructura primaria</b> es la secuencia de nucleótidos de una cadena; la secundaria, la doble hélice; y la terciaria, su empaquetamiento.",
      "Entre 1949 y 1951, el bioquímico Erwin Chargaff analizó la composición de bases del ADN de muchas especies y llegó a unas conclusiones conocidas como <mark>reglas de Chargaff</mark>: la proporción de bases varía de una especie a otra, pero es igual en todos los tejidos de un mismo individuo; en todos los ADN, la cantidad de <b>adenina es igual a la de timina</b> (A = T) y la de <b>guanina es igual a la de citosina</b> (G = C); por tanto, la cantidad de bases púricas es igual a la de pirimidínicas (A + G = T + C). Estas igualdades fueron una pista clave para el modelo de la doble hélice: sugerían que las bases se emparejaban de dos en dos.",
    ], extra: `<div class="formula"><span>A = T ; G = C ; A + G = T + C (púricas = pirimidínicas)</span></div>`, svg: L5.barras("Composición de bases del ADN humano (%)", "%", [["A", 30.9, "var(--leaf)", "30,9"], ["T", 29.4, "var(--leaf)", "29,4"], ["G", 19.9, "var(--red)", "19,9"], ["C", 19.8, "var(--red)", "19,8"]]) },
    { h: "El modelo de la doble hélice", p: [
      "En 1953, Watson y Crick propusieron el modelo de <mark>doble hélice</mark>, que explica la estructura secundaria del ADN (la forma B, la más común en las células). El ADN está formado por <b>dos cadenas</b> de polinucleótido enrolladas alrededor de un eje imaginario, en una hélice dextrógira de 2 nm de diámetro. Los esqueletos de pentosa y fosfato quedan hacia fuera y las bases, hacia dentro, apiladas unas sobre otras como los peldaños de una escalera de caracol, perpendiculares al eje. Cada vuelta mide 3,4 nm y contiene 10 pares de bases, separados 0,34 nm.",
      "Las dos cadenas son <b>antiparalelas</b>: una va en sentido 5' → 3' y la otra en sentido 3' → 5'. Se mantienen unidas por <b>puentes de hidrógeno</b> entre las bases enfrentadas, que son <mark>complementarias</mark>: la adenina se une siempre a la timina (con dos puentes de hidrógeno) y la guanina, a la citosina (con tres). Una púrica siempre se empareja con una pirimidínica, lo que mantiene constante el diámetro. Por eso, conociendo la secuencia de una cadena se deduce la de la otra. Watson y Crick lo resumieron en una frase famosa: esta complementariedad «sugiere un posible mecanismo de copia del material genético». Además de los puentes de hidrógeno, estabilizan la hélice las interacciones hidrofóbicas entre las bases apiladas.",
    ], svg: heliceSVG, v: ["nuc-c", "La estructura del ADN: el modelo de Watson y Crick"] },
    { h: "Propiedades del ADN: desnaturalización e hibridación", p: [
      "Como las dos cadenas se unen por enlaces débiles, el ADN puede <mark>desnaturalizarse</mark>: al calentarlo (hacia 90 °C) o en medio muy básico, se rompen los puentes de hidrógeno y las dos cadenas se separan, sin que se rompan los enlaces fosfodiéster. La temperatura a la que se separa la mitad del ADN es la <b>temperatura de fusión</b> (T<sub>m</sub>), y es mayor cuanto más rico es el ADN en pares G-C, que tienen tres puentes de hidrógeno. La desnaturalización se detecta porque el ADN de cadena sencilla absorbe más luz ultravioleta (a 260 nm) que el de doble cadena.",
      "Si después se enfría lentamente, las cadenas complementarias vuelven a unirse: es la <b>renaturalización</b>. Y si se mezclan cadenas sencillas de distinto origen, se unen las zonas que tienen secuencias complementarias, formando moléculas híbridas: es la <mark>hibridación</mark>. Cuanto más parecidas son las secuencias, mayor es la hibridación, lo que permite estimar el parentesco entre especies. La hibridación es la base de muchas técnicas: las <b>sondas</b> de ADN marcadas que localizan un gen concreto, la <b>PCR</b>, que necesita separar las cadenas y que se unan cebadores, los <b>microarrays</b> y las pruebas genéticas y forenses.",
    ], svg: L5.pasos("Desnaturalización e hibridación del ADN", ["ADN de doble cadena", "Calor (≈ 90 °C): se separan las cadenas", "Enfriar: renaturalización", "Con otra cadena: hibridación (sondas, PCR)"], "var(--red)") },
    { h: "El empaquetamiento del ADN", p: [
      "En las células eucariotas, el ADN se asocia a proteínas para formar la <mark>cromatina</mark>. Las principales son las <b>histonas</b>, proteínas pequeñas y básicas, ricas en lisina y arginina, cuyas cargas positivas se unen a los fosfatos del ADN. Ocho histonas forman un octámero alrededor del cual la doble hélice da casi dos vueltas (unos 146 pares de bases): es el <mark>nucleosoma</mark>. Los nucleosomas, unidos por tramos de ADN espaciador, forman la <b>fibra de 10 nm</b> o «collar de perlas». La histona H1 compacta los nucleosomas en la <b>fibra de 30 nm</b> o solenoide.",
      "La fibra de 30 nm forma <b>bucles</b> de unos 300 nm anclados a un armazón de proteínas no histónicas, que a su vez se pliegan en estructuras cada vez más condensadas. En la interfase, la cromatina está más o menos dispersa: la <b>eucromatina</b> está poco condensada y sus genes se pueden leer; la <b>heterocromatina</b> está muy condensada y es inactiva. En la división celular, la cromatina alcanza su máximo grado de condensación en los <b>cromosomas</b> metafásicos, de unos 1400 nm de grosor. Los espermatozoides sustituyen las histonas por protaminas, que compactan aún más el ADN. En las bacterias, el ADN es una molécula circular asociada a proteínas parecidas a las histonas, y también es circular el ADN de mitocondrias y cloroplastos.",
    ], svg: L5.pasos("Niveles de empaquetamiento del ADN", ["Doble hélice (2 nm)", "Nucleosomas: collar de perlas (10 nm)", "Solenoide (30 nm) y bucles (300 nm)", "Cromosoma metafásico (1400 nm)"], "var(--pen)") },
    { h: "El ARN: características generales", p: [
      "El <mark>ARN</mark> está formado por ribonucleótidos de adenina, guanina, citosina y <b>uracilo</b> (en lugar de timina). Se diferencia del ADN en tres aspectos: lleva ribosa en vez de desoxirribosa; lleva uracilo en vez de timina; y suele ser <b>monocatenario</b>, formado por una sola cadena, aunque esta puede plegarse sobre sí misma y formar zonas de doble cadena por complementariedad de bases (A-U y G-C) llamadas <b>horquillas</b>. Por eso no cumple las reglas de Chargaff. Solo algunos virus tienen ARN de doble cadena como material genético. El –OH del carbono 2' de la ribosa hace al ARN más inestable y reactivo que el ADN, lo que le permite actuar como catalizador.",
      "El ARN se fabrica a partir del ADN mediante la <b>transcripción</b>, se encuentra en el núcleo, el citoplasma, los ribosomas, las mitocondrias y los cloroplastos, y es mucho más abundante que el ADN en una célula activa. Hay varios tipos, que se diferencian por su tamaño, su estructura y su función. Los tres principales intervienen en la síntesis de proteínas: el <b>ARN mensajero</b> (ARNm), el <b>ARN de transferencia</b> (ARNt) y el <b>ARN ribosómico</b> (ARNr). Además existen otros ARN pequeños con funciones de regulación y maduración.",
    ], svg: L5.compara("ADN y ARN", ["ADN", ["desoxirribosa", "A, G, C, T", "doble cadena", "información estable"]], ["ARN", ["ribosa", "A, G, C, U", "una cadena", "expresión del gen"]], "var(--pen)", "var(--red)"), v: ["nuc-b", "Diferencias entre ADN y ARN"] },
    { h: "El ARN mensajero", p: [
      "El <mark>ARN mensajero</mark> (ARNm) copia la información de un gen del ADN y la lleva hasta los ribosomas, donde se traduce en una proteína. Es lineal, con una vida corta (de minutos a horas), y supone solo un 3-5 % del ARN celular. Su secuencia se lee en grupos de tres nucleótidos, los <b>codones</b>, cada uno de los cuales indica un aminoácido. En los procariotas, el ARNm se traduce mientras se transcribe y puede contener la información de varios genes (es policistrónico).",
      "En los eucariotas, el ARNm se fabrica en el núcleo como un precursor, el ARN transcrito primario, que debe <b>madurar</b> antes de salir al citoplasma. En el extremo 5' se le añade una <b>caperuza</b> (un nucleótido de guanina metilado) que lo protege y permite que lo reconozca el ribosoma; en el extremo 3' se le añade una <b>cola de poli-A</b> de unos 200 nucleótidos de adenina que lo protege de la degradación; y se eliminan los <b>intrones</b>, fragmentos que no codifican, y se empalman los <b>exones</b>, que sí lo hacen (proceso de corte y empalme o <i>splicing</i>). Las vacunas de ARNm contra la COVID-19 introducen en nuestras células un ARNm que da las instrucciones para fabricar la proteína S del virus.",
    ], svg: cadena("Maduración del ARNm eucariota en el núcleo", [["Pre-ARNm con exones e intrones", "var(--pen)"], ["Caperuza 5' y cola poli-A", "var(--sun)"], ["ARNm maduro (sin intrones)", "var(--leaf)"]], ["", "splicing"], "Maduración del ARNm") },
    { h: "El ARN de transferencia y el ARN ribosómico", p: [
      "El <mark>ARN de transferencia</mark> (ARNt) transporta los aminoácidos hasta los ribosomas y los coloca en el orden que indica el ARNm. Son moléculas pequeñas, de 70 a 90 nucleótidos, con muchas bases modificadas. Su cadena se pliega formando zonas de doble cadena y bucles, con forma de <b>hoja de trébol</b> en el plano y de L en el espacio. En el extremo 3' tiene siempre la secuencia CCA, donde se une el aminoácido. En el bucle opuesto tiene el <b>anticodón</b>, un triplete de bases complementario de un codón del ARNm. Hay al menos un tipo de ARNt para cada aminoácido.",
      "El <mark>ARN ribosómico</mark> (ARNr) es el más abundante, alrededor del 80 % del ARN celular. Se asocia con proteínas para formar los <b>ribosomas</b>, los orgánulos donde se sintetizan las proteínas, y tiene estructura secundaria con muchas horquillas. Además de su papel estructural, el ARNr de la subunidad mayor es el que cataliza la formación del enlace peptídico: es una <b>ribozima</b>. Los ribosomas eucariotas (80S) y procariotas (70S) tienen ARNr distintos, por lo que algunos antibióticos atacan solo los bacterianos. Existen además otros ARN: el <b>ARN nucleolar</b>, precursor del ribosómico; los <b>ARN pequeños nucleares</b>, que hacen el splicing; y los <b>microARN</b> y ARN de interferencia, que regulan la expresión de los genes.",
    ], svg: arntSVG, v: ["nuc-d", "Tipos de ARN"] },
    { h: "Funciones de los ácidos nucleicos", p: [
      "La función del ADN es <b>almacenar la información genética</b> de forma estable y transmitirla. Lo consigue gracias a su estructura: la doble hélice protege las bases en su interior; la desoxirribosa, sin el –OH en 2', lo hace químicamente más estable que el ARN; y la complementariedad de bases permite copiarlo con gran fidelidad mediante la <b>replicación</b>, de modo que cada célula hija recibe una copia exacta. Además, al tener timina en lugar de uracilo, la célula puede detectar y reparar un error frecuente: la transformación espontánea de citosina en uracilo.",
      "El ARN se encarga de la <b>expresión de la información</b>: transcribe los genes y los traduce en proteínas. Pero también hace más: cataliza reacciones (ribozimas), regula qué genes se expresan y es el material genético de muchos virus, como los de la gripe, el VIH o el SARS-CoV-2. Por eso muchos científicos piensan que, en los orígenes de la vida, existió un <b>«mundo de ARN»</b>: el ARN, que puede guardar información y catalizar reacciones a la vez, habría precedido al ADN y a las proteínas. En los temas de genética molecular estudiarás cómo se replica el ADN, cómo se transcribe y cómo se traduce la información en proteínas.",
    ], svg: L6.radial("Funciones de los ácidos nucleicos", "ADN Y ARN", ["Guardar la información", "Replicación", "Transcripción", "Traducción", "Regulación", "Catálisis (ribozimas)"], "var(--pen)") },
  ],
  figura: { titulo: "Ácidos nucleicos", items: [["Nucleótido", "P + pentosa + base", "A G C T U", "ATP, NAD⁺"], ["ADN", "doble hélice", "A=T, G≡C", "antiparalelas"], ["Cromatina", "nucleosomas", "histonas", "cromosomas"], ["ARN", "ARNm, ARNt, ARNr", "una cadena", "uracilo"]] },
  video: ["nuc-a", "El ADN explicado"],
  ejemplos: [
    ["Escribe la cadena complementaria de 5'-ATGCCGAA-3'.", ["A con T y G con C.", "La complementaria es antiparalela: 3'-TACGGCTT-5'.", "Escrita en sentido 5' → 3' se lee al revés."], "3'-TACGGCTT-5', que en sentido 5' → 3' es 5'-TTCGGCAT-3'."],
    ["Un ADN de doble cadena tiene un 20 % de adenina. Calcula el porcentaje de las demás bases.", ["A = T = 20 %.", "G + C = 100 − 40 = 60 %.", "G = C = 30 %."], "A = 20 %, T = 20 %, G = 30 %, C = 30 %."],
    ["Un ácido nucleico tiene A = 28 %, U = 22 %, G = 30 %, C = 20 %. ¿Qué tipo es?", ["Tiene uracilo → ARN.", "A ≠ U y G ≠ C → no hay complementariedad global.", "Es de una sola cadena."], "ARN monocatenario."],
    ["Calcula la longitud de un fragmento de ADN de 3000 pares de bases y su número de vueltas.", ["Cada par ocupa 0,34 nm.", "3000 · 0,34 = 1020 nm ≈ 1 µm.", "Vueltas: 3000/10 = 300."], "1,02 µm de longitud y 300 vueltas."],
    ["¿Qué ADN tendrá una temperatura de fusión más alta: uno con 60 % de G + C u otro con 40 %? Razónalo.", ["G-C tiene 3 puentes de H; A-T, 2.", "Más G-C → más energía para separar las cadenas."], "El de 60 % de G + C."],
    ["¿Cuántas secuencias distintas puede tener un fragmento de ADN de 5 nucleótidos? ¿Y de 20?", ["4 bases posibles en cada posición.", "4⁵ = 1024.", "4²⁰ ≈ 1,1 · 10¹²."], "1024 y más de un billón: la secuencia puede guardar muchísima información."],
  ],
  errores: [
    "Confundir nucleósido y nucleótido: el nucleótido lleva además el grupo fosfato.",
    "Decir que la timina está en el ARN: el ARN tiene uracilo; la timina es exclusiva del ADN.",
    "Pensar que las dos cadenas del ADN son iguales: son complementarias y antiparalelas, no idénticas.",
    "Unir A con G o C con T: las parejas son A-T (2 puentes de H) y G-C (3 puentes de H).",
    "Creer que el ARN cumple las reglas de Chargaff: al ser monocatenario, A ≠ U y G ≠ C en general.",
    "Pensar que al desnaturalizar el ADN se rompen los enlaces fosfodiéster: solo se rompen los puentes de hidrógeno.",
  ],
  ejercicios: {
    b: [
      ["¿Qué elementos forman los ácidos nucleicos y cuáles son sus monómeros?", "C, H, O, N y P. Sus monómeros son los nucleótidos."],
      ["Indica los componentes de un nucleótido.", "Una pentosa (ribosa o desoxirribosa), una base nitrogenada y uno o más grupos fosfato."],
      ["Clasifica las bases nitrogenadas en púricas y pirimidínicas.", "Púricas: adenina y guanina. Pirimidínicas: citosina, timina y uracilo."],
      ["Diferencia nucleósido y nucleótido.", "Nucleósido: pentosa + base. Nucleótido: nucleósido + fosfato."],
      ["¿Qué es el ATP y cuál es su función?", "Adenosín trifosfato; moneda energética de la célula: almacena y cede energía al hidrolizar sus fosfatos."],
      ["¿Qué enlace une los nucleótidos de una cadena?", "El enlace fosfodiéster, entre el C3' de una pentosa y el C5' de la siguiente."],
      ["¿Qué significa que una cadena tenga polaridad 5' → 3'?", "Que tiene un extremo con el fosfato del C5' libre y otro con el –OH del C3' libre; se escribe del 5' al 3'."],
      ["Enuncia las reglas de Chargaff.", "A = T y G = C; por tanto, púricas = pirimidínicas. La composición varía entre especies pero no entre tejidos."],
      ["¿Qué significa que las cadenas del ADN son complementarias y antiparalelas?", "Complementarias: A frente a T y G frente a C. Antiparalelas: una 5' → 3' y la otra 3' → 5'."],
      ["¿Qué es un nucleosoma?", "Unidad de la cromatina formada por un octámero de histonas rodeado por casi dos vueltas de ADN."],
      ["Cita tres diferencias entre el ADN y el ARN.", "Pentosa (desoxirribosa / ribosa); bases (T / U); número de cadenas (dos / una)."],
      ["Cita los tres tipos principales de ARN y su función.", "ARNm: lleva la información del gen al ribosoma. ARNt: transporta aminoácidos. ARNr: forma los ribosomas."],
    ],
    m: [
      ["Describe el modelo de la doble hélice de Watson y Crick.", "Dos cadenas antiparalelas enrolladas en hélice dextrógira de 2 nm; esqueletos fuera, bases dentro emparejadas A-T (2 puentes H) y G-C (3); 10 pares por vuelta de 3,4 nm."],
      ["Explica qué experimentos demostraron que el ADN es el material genético.", "Griffith (transformación bacteriana), Avery-MacLeod-McCarty (el principio transformante es ADN) y Hershey-Chase (entra el ADN del virus, marcado con ³²P, no la proteína, marcada con ³⁵S)."],
      ["¿Por qué el diámetro de la doble hélice es constante?", "Porque siempre se empareja una base púrica (doble anillo) con una pirimidínica (un anillo)."],
      ["Explica la desnaturalización del ADN y de qué depende la temperatura de fusión.", "Separación de las cadenas por rotura de puentes de H al calentar; la Tm aumenta con la proporción de G-C (3 puentes)."],
      ["¿Qué es la hibridación del ADN y qué aplicaciones tiene?", "Unión de cadenas sencillas complementarias de distinto origen; sondas, PCR, estudios evolutivos, diagnóstico genético."],
      ["Describe los niveles de empaquetamiento del ADN.", "Doble hélice (2 nm) → nucleosomas (10 nm) → solenoide (30 nm) → bucles (300 nm) → cromosoma metafásico (1400 nm)."],
      ["Diferencia eucromatina y heterocromatina.", "Eucromatina: poco condensada, genes activos. Heterocromatina: muy condensada, inactiva."],
      ["Explica las modificaciones del ARNm eucariota durante la maduración.", "Caperuza de guanina metilada en 5', cola poli-A en 3' y eliminación de intrones con empalme de exones (splicing)."],
      ["Describe la estructura del ARNt y relaciónala con su función.", "Hoja de trébol con brazos y bucles; extremo 3'-CCA donde se une el aminoácido; anticodón que se empareja con el codón del ARNm."],
      ["¿Por qué el ARN es más inestable que el ADN?", "El –OH del C2' de la ribosa puede atacar el enlace fosfodiéster y romper la cadena; además es monocatenario."],
      ["Explica el papel del AMPc como segundo mensajero.", "Una hormona se une a un receptor de membrana; se activa la adenilato ciclasa, que forma AMPc dentro de la célula; el AMPc activa enzimas y transmite la señal."],
      ["¿Por qué el ADN usa timina y no uracilo?", "La citosina se desamina espontáneamente a uracilo; si el ADN tuviera U de forma normal, no se podría distinguir el error y repararlo."],
    ],
    a: [
      ["(Tipo PAU) Un fragmento de ADN bicatenario tiene 1000 pares de bases y 300 guaninas. Calcula el número de cada base, el número de puentes de hidrógeno y su longitud.", "G = C = 300; A = T = 700. Puentes: 700 · 2 + 300 · 3 = 2300. Longitud: 1000 · 0,34 = 340 nm."],
      ["(Tipo PAU) Se analizan tres ácidos nucleicos: 1) A 25, T 25, G 25, C 25 %; 2) A 30, T 20, G 25, C 25 %; 3) A 20, U 30, G 30, C 20 %. Identifica cada uno.", "1) ADN bicatenario. 2) ADN monocatenario (A ≠ T), como el de algunos virus. 3) ARN (tiene U) monocatenario."],
      ["(Tipo PAU) Explica por qué el modelo de la doble hélice sugería un mecanismo de copia del material genético.", "Por la complementariedad: si se separan las cadenas, cada una sirve de molde para fabricar su complementaria, y se obtienen dos moléculas iguales a la original."],
      ["Un ADN tiene una Tm de 85 °C y otro de 95 °C. ¿Cuál procede de una bacteria de fuentes termales? Razónalo.", "El de 95 °C: más pares G-C, más puentes de H, mayor estabilidad a altas temperaturas."],
      ["Calcula cuántas vueltas y qué longitud tiene el genoma humano haploide (3,1 · 10⁹ pb) y compáralo con el núcleo (≈ 6 µm).", "Vueltas: 3,1 · 10⁸. Longitud: 3,1 · 10⁹ · 0,34 nm ≈ 1,05 m. Es unas 175 000 veces mayor que el núcleo; con dos juegos, unos 2 m."],
      ["En el experimento de Hershey y Chase, ¿qué se habría observado si el material genético fuera la proteína?", "El ³⁵S de las proteínas habría entrado en la bacteria y aparecería en los nuevos virus, y el ³²P quedaría fuera, en las cubiertas."],
      ["Explica por qué las histonas son proteínas básicas y por qué esto es necesario para su función.", "Son ricas en lisina y arginina, con carga positiva a pH celular; así se unen a los grupos fosfato negativos del ADN y lo compactan."],
      ["Las vacunas de ARNm se conservan a temperaturas muy bajas y van dentro de nanopartículas lipídicas. Justifícalo con la química del ARN.", "El ARN es inestable (hidrólisis por el –OH 2' y por ribonucleasas): el frío y la envoltura lipídica lo protegen y le permiten entrar en las células fusionándose con la membrana."],
      ["Una sonda de ADN marcada 5'-GATTC-3' se usa para detectar un gen. ¿Con qué secuencia de la cadena diana hibridará?", "Con la complementaria antiparalela: 3'-CTAAG-5' (es decir, 5'-GAATC-3')."],
    ],
  },
  quiz: [
    ["Los monómeros de los ácidos nucleicos son…", ["aminoácidos", "nucleótidos", "monosacáridos", "ácidos grasos"], 1, "Unidos por fosfodiéster."],
    ["Es una base púrica…", ["citosina", "guanina", "timina", "uracilo"], 1, "A y G."],
    ["El uracilo aparece en…", ["el ADN", "el ARN", "ambos", "ninguno"], 1, "Sustituye a la timina."],
    ["La pentosa del ADN es…", ["ribosa", "desoxirribosa", "glucosa", "ribulosa"], 1, "Sin O en 2'."],
    ["Pentosa + base forman un…", ["nucleótido", "nucleósido", "polinucleótido", "codón"], 1, "Enlace N-glucosídico."],
    ["El ATP es…", ["un polisacárido", "un nucleótido con 3 fosfatos", "una proteína", "un lípido"], 1, "Moneda energética."],
    ["El AMPc actúa como…", ["coenzima redox", "segundo mensajero", "enzima", "base"], 1, "Señales hormonales."],
    ["El enlace fosfodiéster une…", ["C1' y base", "C3' y C5' de pentosas vecinas", "bases complementarias", "histonas"], 1, "Esqueleto."],
    ["Las secuencias se escriben en sentido…", ["3' → 5'", "5' → 3'", "N → C", "indiferente"], 1, "Por convenio."],
    ["Según Chargaff, en el ADN…", ["A = G", "A = T y G = C", "A = C", "A = U"], 1, "Complementariedad."],
    ["A y T se unen con…", ["1 puente de H", "2 puentes de H", "3 puentes de H", "un enlace covalente"], 1, "G-C con 3."],
    ["Las cadenas del ADN son…", ["paralelas", "antiparalelas", "idénticas", "circulares siempre"], 1, "5'→3' y 3'→5'."],
    ["Una vuelta de la doble hélice tiene…", ["4 pb", "10 pb", "100 pb", "1 pb"], 1, "3,4 nm."],
    ["Al desnaturalizar el ADN se rompen…", ["enlaces fosfodiéster", "puentes de hidrógeno", "enlaces N-glucosídicos", "histonas"], 1, "Se separan las cadenas."],
    ["El nucleosoma tiene un octámero de…", ["histonas", "protaminas", "ribosomas", "nucleótidos"], 0, "ADN alrededor."],
    ["La heterocromatina es…", ["poco condensada y activa", "muy condensada e inactiva", "ARN", "exclusiva de bacterias"], 1, "Condensada."],
    ["El ARN más abundante es el…", ["ARNm", "ARNt", "ARNr", "microARN"], 2, "≈ 80 %."],
    ["El anticodón está en el…", ["ARNm", "ARNt", "ARNr", "ADN"], 1, "Bucle del trébol."],
    ["La cola poli-A se añade al…", ["ARNt", "ARNm eucariota", "ADN", "ARNr"], 1, "Extremo 3'."],
    ["Los intrones…", ["codifican proteínas", "se eliminan en la maduración", "están solo en bacterias", "son ARNt"], 1, "Splicing."],
  ],
  examen: [
    ["ADN con 35 % de C: la A es…", ["15 %", "35 %", "30 %", "65 %"], 0, "100 − 70 = 30 → 15 %."],
    ["5'-AGCT-3' es complementaria de…", ["3'-TCGA-5'", "3'-AGCT-5'", "5'-TCGA-3'", "3'-UCGA-5'"], 0, "Antiparalela."],
    ["Un ácido nucleico con T y A ≠ T es…", ["ADN monocatenario", "ADN bicatenario", "ARN", "ARNt"], 0, "Algunos virus."],
    ["1000 pb de ADN miden…", ["340 nm", "34 nm", "3,4 µm", "1000 nm"], 0, "0,34 nm por par."],
    ["Las histonas son ricas en…", ["lisina y arginina", "ácido glutámico", "cisteína", "glicina"], 0, "Básicas."],
    ["Demostraron que el ADN es el material genético de los virus…", ["Hershey y Chase", "Miescher", "Chargaff", "Watson y Crick"], 0, "³²P y ³⁵S."],
    ["El ARNr de la subunidad mayor actúa como…", ["ribozima", "coenzima", "hormona", "anticodón"], 0, "Forma el enlace peptídico."],
    ["La caperuza del ARNm está en el extremo…", ["5'", "3'", "central", "no tiene"], 0, "Guanina metilada."],
  ],
  feynman: ["Qué diferencia un nucleósido de un nucleótido", "Por qué el ATP es la moneda energética", "Por qué las dos cadenas del ADN encajan como un cremallera", "Cómo caben dos metros de ADN en un núcleo", "Por qué el ARN es más frágil que el ADN", "Para qué sirve cada tipo de ARN"],
  mapa: ["ÁCIDOS NUCLEICOS", [["Nucleótidos", "P + pentosa + base; ATP"], ["ADN", "doble hélice, A=T, G≡C"], ["Empaquetamiento", "nucleosomas, cromatina"], ["ARN", "ARNm, ARNt, ARNr"]]],
  tarjetas: [
    ["Nucleótido", "Fosfato + pentosa + base nitrogenada."],
    ["Bases", "Púricas A, G; pirimidínicas C, T (ADN), U (ARN)."],
    ["Nucleósido", "Pentosa + base (enlace N-glucosídico)."],
    ["ATP", "Adenosín trifosfato; moneda energética."],
    ["Fosfodiéster", "Une C3' y C5'; cadena 5' → 3'."],
    ["Chargaff", "A = T; G = C; púricas = pirimidínicas."],
    ["Doble hélice", "2 cadenas antiparalelas; 10 pb/vuelta; 2 nm."],
    ["Complementariedad", "A-T (2 puentes H), G-C (3)."],
    ["Nucleosoma", "Octámero de histonas + ADN (10 nm)."],
    ["Hibridación", "Unión de cadenas complementarias de distinto origen."],
    ["ARNm", "Copia del gen; codones; caperuza y poli-A."],
    ["ARNt", "Trébol; anticodón; lleva aminoácidos."],
  ],
  glosario: [
    ["Nucleótido", "Monómero de los ácidos nucleicos: pentosa, base y fosfato."],
    ["Nucleósido", "Pentosa unida a una base nitrogenada."],
    ["Base púrica", "Base de doble anillo: adenina y guanina."],
    ["Base pirimidínica", "Base de un anillo: citosina, timina y uracilo."],
    ["Enlace fosfodiéster", "Unión de dos nucleótidos a través de un fosfato."],
    ["Antiparalelo", "Dispuesto en sentido opuesto al de la otra cadena."],
    ["Complementariedad", "Emparejamiento específico de bases: A con T (o U) y G con C."],
    ["Temperatura de fusión", "Temperatura a la que se desnaturaliza la mitad del ADN."],
    ["Hibridación", "Unión de cadenas de ácido nucleico complementarias de distinto origen."],
    ["Histona", "Proteína básica que se une al ADN en los nucleosomas."],
    ["Cromatina", "Complejo de ADN y proteínas del núcleo eucariota."],
    ["Nucleosoma", "Octámero de histonas rodeado por ADN; unidad de la cromatina."],
    ["Codón", "Triplete de nucleótidos del ARNm que indica un aminoácido."],
    ["Anticodón", "Triplete del ARNt complementario de un codón."],
    ["Intrón", "Fragmento de un gen que se transcribe pero se elimina del ARNm."],
    ["Segundo mensajero", "Molécula que transmite dentro de la célula la señal de una hormona."],
  ],
  situacion: {
    titulo: "Extraemos nuestro propio ADN",
    reto: "Vuestro equipo debe extraer ADN de fresas, plátanos y células de la mucosa bucal con materiales caseros, explicar cada paso con la química de los ácidos nucleicos y construir un modelo a escala de la doble hélice.",
    pasos: [
      "Triturad las muestras con una mezcla de agua, sal y detergente para romper las membranas.",
      "Filtrad y añadid alcohol muy frío por la pared del tubo; recoged las hebras blancas de ADN con un palillo.",
      "Explicad la función del detergente, la sal y el alcohol en el proceso.",
      "Construid un modelo de ADN a escala con al menos dos vueltas, respetando la complementariedad y la antiparalelidad.",
      "Presentad los resultados con fotos y un póster sobre la historia del descubrimiento de la doble hélice.",
    ],
    producto: "ADN extraído, un modelo tridimensional y un póster.",
    evaluacion: ["La extracción se realiza correctamente y con seguridad.", "Se justifica cada paso con conceptos de química biológica.", "El modelo respeta las dimensiones y el emparejamiento de bases.", "El póster reconoce el papel de Franklin, Chargaff, Watson y Crick."],
  },
  familias: [
    "Extraed en la cocina ADN de una fresa con sal, lavavajillas y alcohol muy frío.",
    "Hablad de las vacunas de ARNm: qué llevan dentro y por qué se guardan tan frías.",
    "Ved juntos un vídeo sobre Rosalind Franklin y comentad su papel en la ciencia.",
    "Buscad para qué se usan las pruebas de ADN en medicina y en investigación policial.",
  ],
  saberes: "bloque «Las biomoléculas» y «Genética molecular»: los ácidos nucleicos, nucleótidos y nucleósidos, nucleótidos de interés biológico (ATP, coenzimas, AMPc); enlace fosfodiéster; ADN, composición, estructura de doble hélice, desnaturalización e hibridación, niveles de empaquetamiento; ARN, tipos, estructura y funciones; relación entre estructura y función; experimentos históricos sobre la naturaleza del material genético.",
  ideas: [
    "Extracción de ADN de frutas o de células bucales con materiales caseros.",
    "Construcción de modelos de ADN y de ARNt con piezas de colores o papel.",
    "Análisis de la fotografía 51 y de la controversia histórica sobre Rosalind Franklin.",
    "Uso de bases de datos (NCBI) para buscar la secuencia de un gen y calcular su composición de bases.",
  ],
  fuentes: [
    { t: "National Human Genome Research Institute: glosario genético", url: "https://www.genome.gov/es/genetics-glossary" },
  ],
});
