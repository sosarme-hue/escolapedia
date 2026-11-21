// Biología 2º Bachillerato · Proteínas (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, cadena, arbol } = require("./_bach2-bio");

// Estructura general de un α-aminoácido.
const aaSVG = marco("Estructura general de un alfa-aminoácido: un carbono alfa unido a un grupo amino, un grupo carboxilo, un hidrógeno y una cadena lateral R", `
  <circle cx="130" cy="90" r="20" fill="var(--ink)"/>${T(130, 95, "Cα", { fs: 13, b: true, c: "#fff" })}
  <path d="M110 90 H 72 M150 90 H 188 M130 70 V 46 M130 110 V 134" stroke="var(--ink)" stroke-width="2.4"/>
  <rect x="18" y="74" width="54" height="32" rx="10" fill="var(--pen)"/>${T(45, 95, "H₂N–", { fs: 13, b: true, c: "#fff" })}
  <rect x="188" y="74" width="62" height="32" rx="10" fill="var(--red)"/>${T(219, 95, "–COOH", { fs: 13, b: true, c: "#fff" })}
  <circle cx="130" cy="36" r="12" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>${T(130, 41, "H", { fs: 12, b: true })}
  <rect x="106" y="134" width="48" height="30" rx="10" fill="var(--leaf)"/>${T(130, 154, "R", { fs: 14, b: true, c: "#fff" })}
  ${T(45, 124, "amino", { fs: 11, b: true, c: "var(--pen)" })}${T(219, 124, "carboxilo", { fs: 11, b: true, c: "var(--red)" })}${T(160, 172, "cadena lateral", { fs: 10.5, b: true, c: "var(--leaf)", a: "start" })}`);

// Enlace peptídico.
const pepSVG = marco("Formación de un dipéptido: el grupo carboxilo de un aminoácido se une al grupo amino del siguiente mediante un enlace peptídico y se libera agua", `
  <rect x="14" y="40" width="96" height="56" rx="12" fill="var(--pen)" fill-opacity=".12" stroke="var(--pen)" stroke-width="2"/>${T(62, 64, "Aminoácido 1", { fs: 11, b: true, c: "var(--pen)" })}${T(62, 84, "H₂N–CH(R₁)–CO", { fs: 10, b: true })}
  <rect x="150" y="40" width="96" height="56" rx="12" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="2"/>${T(198, 64, "Aminoácido 2", { fs: 11, b: true, c: "var(--leaf)" })}${T(198, 84, "NH–CH(R₂)–COOH", { fs: 10, b: true })}
  <rect x="108" y="58" width="44" height="22" rx="6" fill="var(--red)"/>${T(130, 73, "–CO–NH–", { fs: 9.5, b: true, c: "#fff" })}
  ${T(130, 118, "enlace peptídico (covalente, amida)", { fs: 11, b: true, c: "var(--red)" })}
  ${T(130, 140, "rígido y plano: no gira", { fs: 11, b: true })}${T(130, 162, "se libera H₂O (condensación)", { fs: 11, b: true, c: "var(--muted)" })}`);

// Hélice α y lámina β.
const secSVG = marco("Estructura secundaria: la hélice alfa, enrollada y estabilizada por puentes de hidrógeno entre vueltas, y la lámina beta plegada, con cadenas en zigzag unidas lateralmente", `
  ${T(64, 18, "Hélice α", { fs: 12, b: true, c: "var(--red)" })}
  <path d="M64 30 ${Array.from({ length: 6 }, (_, i) => `C 104 ${36 + i * 22}, 104 ${46 + i * 22}, 64 ${52 + i * 22} C 24 ${58 + i * 22}, 24 ${36 + (i + 1) * 22}, 64 ${30 + (i + 1) * 22}`).join(" ")}" fill="none" stroke="var(--red)" stroke-width="3"/>
  ${[0, 1, 2, 3].map((i) => `<path d="M88 ${44 + i * 22} V ${62 + i * 22}" stroke="var(--pen)" stroke-width="1.4" stroke-dasharray="2 2"/>`).join("")}
  ${T(196, 18, "Lámina β", { fs: 12, b: true, c: "var(--leaf)" })}
  ${[40, 80, 120].map((y) => `<path d="M140 ${y} ${Array.from({ length: 6 }, (_, i) => `L ${150 + i * 18} ${y + (i % 2 ? 0 : 12)}`).join(" ")}" fill="none" stroke="var(--leaf)" stroke-width="3"/>`).join("")}
  ${[52, 92].map((y) => [150, 186, 222].map((x) => `<path d="M${x} ${y} V ${y + 26}" stroke="var(--pen)" stroke-width="1.4" stroke-dasharray="2 2"/>`).join("")).join("")}
  ${T(130, 172, "- - - puentes de hidrógeno", { fs: 11, b: true, c: "var(--pen)" })}`);

// Desnaturalización.
const desnSVG = marco("Desnaturalización: el calor, los cambios de pH o algunas sustancias rompen los enlaces débiles y la proteína pierde su forma y su función; a veces puede renaturalizarse", `
  <defs><marker id="dn1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
  <path d="M30 70 c 10 -30 40 -30 40 0 s -30 30 -10 40 s 40 -10 30 -40 s -50 -20 -40 20 s 30 30 20 -10" fill="none" stroke="var(--pen)" stroke-width="3"/>
  ${T(62, 34, "Nativa", { fs: 12, b: true, c: "var(--pen)" })}${T(62, 150, "activa", { fs: 11, b: true, c: "var(--leaf)" })}
  <path d="M112 76 H 150" stroke="var(--muted)" stroke-width="2.4" marker-end="url(#dn1)"/>${T(131, 66, "calor, pH", { fs: 10, b: true, c: "var(--red)" })}
  <path d="M150 96 H 112" stroke="var(--muted)" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#dn1)"/>${T(131, 112, "a veces", { fs: 9.5, c: "var(--muted)" })}
  <path d="M160 60 q 12 20 24 0 t 24 0 t 24 10 q 6 20 -10 30 t -30 20 t -28 10" fill="none" stroke="var(--red)" stroke-width="3"/>
  ${T(204, 34, "Desnaturalizada", { fs: 12, b: true, c: "var(--red)" })}${T(204, 150, "sin función", { fs: 11, b: true, c: "var(--red)" })}
  ${T(130, 172, "se conserva la estructura primaria", { fs: 10.5, b: true, c: "var(--muted)" })}`);

module.exports = tema({
  titulo: "Proteínas",
  minutos: 120,
  secciones: [4, 4, 4],
  objetivos: [
    "Describir la estructura general de los aminoácidos, clasificarlos y explicar sus propiedades ácido-base",
    "Explicar la formación y las características del enlace peptídico",
    "Diferenciar los cuatro niveles de estructura de las proteínas y los enlaces que los estabilizan",
    "Explicar la desnaturalización y la especificidad de las proteínas",
    "Clasificar las proteínas en holoproteínas y heteroproteínas, y fibrosas y globulares",
    "Relacionar la estructura de las proteínas con su enorme variedad de funciones biológicas",
  ],
  claves: ["proteína", "aminoácido", "aminoácido esencial", "carbono alfa", "anfótero", "punto isoeléctrico", "enlace peptídico", "péptido", "estructura primaria", "hélice alfa", "lámina beta", "estructura terciaria", "puente disulfuro", "estructura cuaternaria", "desnaturalización", "heteroproteína"],
  pregunta: {
    texto: "¿Por qué la clara de huevo, transparente y líquida, se vuelve blanca y sólida al freírla, y ya no vuelve atrás?",
    respuesta: "Porque su proteína principal, la ovoalbúmina, se <mark>desnaturaliza</mark>. El calor rompe los enlaces débiles que mantienen plegada cada molécula: las cadenas se despliegan, quedan expuestos grupos hidrófobos y las proteínas se enredan unas con otras formando una red insoluble que dispersa la luz. Los enlaces peptídicos no se rompen, así que la estructura primaria se conserva, pero la forma nativa se ha perdido y, en este caso, la desnaturalización es irreversible.",
  },
  lectura: {
    titulo: "AlphaFold y el problema de los cincuenta años",
    html: `<p>En 1972, Christian Anfinsen recibió el Nobel de Química por demostrar que la forma de una proteína está escrita en su secuencia de aminoácidos: si se despliega una enzima en el laboratorio y luego se retira el agente desnaturalizante, la cadena vuelve sola a plegarse en su forma activa. Desde entonces, predecir esa forma a partir de la secuencia fue uno de los grandes retos de la biología. Determinarla en el laboratorio, con cristalografía de rayos X, podía costar años de trabajo por proteína.</p><p>En 2020, el programa de inteligencia artificial AlphaFold resolvió el problema con una precisión comparable a la experimental, y en pocos meses predijo la estructura de casi todas las proteínas conocidas, más de 200 millones. Sus creadores, Demis Hassabis y John Jumper, compartieron el Nobel de Química de 2024 con David Baker, que diseña proteínas nuevas que no existen en la naturaleza. Este tema te explica por qué la forma lo es todo para una proteína: veinte aminoácidos combinados en cadenas de cientos de eslabones se pliegan en estructuras que transportan oxígeno, defienden del cuerpo frente a los microbios, contraen los músculos o aceleran reacciones químicas millones de veces.</p>`,
  },
  bloques: [
    { h: "Las proteínas: concepto e importancia", p: [
      "Las <mark>proteínas</mark> son biomoléculas orgánicas formadas por C, H, O y N, y casi siempre S; algunas contienen también P, Fe, Cu, Zn u otros elementos. Son <b>polímeros</b> de unas moléculas sencillas, los <b>aminoácidos</b>, unidos por enlaces peptídicos. Son las biomoléculas orgánicas más abundantes de las células: suponen alrededor del 50 % de su peso seco. Su nombre, del griego <i>proteios</i>, «de primer orden», lo propuso Berzelius en 1838 para subrayar su importancia.",
      "Su característica más notable es la <b>diversidad</b>. Con solo 20 aminoácidos distintos se pueden formar cadenas de cualquier longitud y en cualquier orden: con 100 aminoácidos hay 20¹⁰⁰ secuencias posibles, más que átomos en el universo. Cada secuencia se pliega en una forma tridimensional propia, y de esa forma depende su función. Por eso las proteínas hacen casi todo en la célula: catalizan reacciones, transportan sustancias, forman estructuras, defienden, regulan y mueven. Además, las proteínas son la expresión de la información genética: los genes del ADN contienen, sobre todo, las instrucciones para fabricarlas. Según su tamaño se habla de <b>péptidos</b> (menos de unos 50 aminoácidos) y de proteínas propiamente dichas (más de 50, y a menudo cientos o miles).",
    ], svg: L6.radial("Las proteínas en cifras", "PROTEÍNAS", ["50 % del peso seco", "20 aminoácidos", "≈ 20 000 genes humanos", "Forma = función", "Polímeros", "4 niveles de estructura"], "var(--leaf)"), v: ["pro-d", "¿Qué son las proteínas?"] },
    { h: "Los aminoácidos: estructura y clasificación", p: [
      "Los <mark>aminoácidos</mark> son compuestos que tienen un grupo <b>amino</b> (–NH₂) y un grupo <b>carboxilo</b> (–COOH). En los que forman las proteínas, ambos grupos están unidos al mismo carbono, el <b>carbono α</b>, que se une además a un hidrógeno y a una <b>cadena lateral</b> o radical (R), diferente en cada aminoácido. Por eso se llaman α-aminoácidos. Los 20 aminoácidos proteicos se distinguen solo por su cadena R, que determina sus propiedades.",
      "Se clasifican según la polaridad de la cadena R. Los <b>apolares</b> o hidrófobos tienen cadenas hidrocarbonadas: glicina (la más sencilla, R = H), alanina, valina, leucina, isoleucina, prolina, metionina, fenilalanina y triptófano. Los <b>polares sin carga</b> tienen grupos que forman puentes de hidrógeno: serina, treonina, cisteína (con un grupo –SH), tirosina, asparagina y glutamina. Los <b>polares ácidos</b>, con carga negativa a pH fisiológico, tienen un segundo grupo carboxilo: ácido aspártico y glutámico. Los <b>polares básicos</b>, con carga positiva, tienen un segundo grupo amino: lisina, arginina e histidina. Nueve aminoácidos son <mark>esenciales</mark> en los adultos: no podemos sintetizarlos y debemos tomarlos en la dieta.",
    ], svg: aaSVG },
    { h: "Propiedades de los aminoácidos", p: [
      "Los aminoácidos son sólidos cristalinos, solubles en agua y con puntos de fusión altos. Excepto la glicina, todos tienen el carbono α <b>asimétrico</b>, por lo que presentan estereoisomería: hay formas <b>D</b> y <b>L</b> según la posición del grupo amino en la proyección de Fischer (a la derecha o a la izquierda). Las proteínas de los seres vivos están formadas exclusivamente por <b>L-aminoácidos</b>; los D-aminoácidos aparecen en las paredes de algunas bacterias y en ciertos antibióticos. Además, son ópticamente activos.",
      "Su propiedad más importante es que son <mark>anfóteros</mark>: pueden actuar como ácidos, cediendo un protón del –COOH, o como bases, captándolo con el –NH₂. En disolución acuosa forman un <b>ion dipolar</b> o zwitterión (⁺H₃N–CHR–COO⁻). En medio ácido captan protones y adquieren carga positiva; en medio básico los ceden y adquieren carga negativa. El pH en el que la carga neta es cero es el <b>punto isoeléctrico</b> (pI), característico de cada aminoácido. Gracias a esta propiedad, los aminoácidos y las proteínas actúan como <b>sistemas tampón</b>, y se pueden separar por <b>electroforesis</b>: en un campo eléctrico, cada uno se desplaza según su carga.",
    ], extra: `<div class="formula"><span>medio ácido: ⁺H₃N–CHR–COOH ⇌ ⁺H₃N–CHR–COO⁻ (pI) ⇌ H₂N–CHR–COO⁻ : medio básico</span></div>`, svg: L5.escala("Carga de un aminoácido según el pH", "Carga neta", [["+", "pH ácido", "var(--red)"], ["0", "pI", "var(--leaf)"], ["−", "pH básico", "var(--pen)"]], "capta H⁺", "cede H⁺") },
    { h: "El enlace peptídico", p: [
      "Los aminoácidos se unen mediante el <mark>enlace peptídico</mark>, un enlace covalente de tipo amida que se forma entre el grupo carboxilo de un aminoácido y el grupo amino del siguiente, con liberación de una molécula de agua. Dos aminoácidos forman un <b>dipéptido</b>; tres, un tripéptido; hasta unos diez, un oligopéptido; y más, un <b>polipéptido</b>. Toda cadena tiene un extremo con el grupo amino libre (<b>extremo N-terminal</b>) y otro con el carboxilo libre (<b>extremo C-terminal</b>); por convenio, la secuencia se escribe del N-terminal al C-terminal.",
      "El enlace peptídico tiene un carácter parcial de doble enlace, porque los electrones se reparten entre el C, el O y el N. Por eso es <b>rígido</b> y <b>plano</b>: los cuatro átomos (C, O, N, H) quedan en el mismo plano y no pueden girar alrededor del enlace C–N. Solo pueden girar los enlaces del carbono α. Así, la cadena es como una sucesión de placas rígidas articuladas por los carbonos α, lo que limita las formas posibles y explica las estructuras regulares que veremos. Hay péptidos con funciones importantes: la <b>insulina</b> y el glucagón (hormonas), la oxitocina, el glutatión (antioxidante) o las encefalinas (analgésicos naturales del cerebro).",
    ], svg: pepSVG, v: ["pro-b", "El enlace peptídico"] },
    { h: "La estructura primaria", p: [
      "La forma de una proteína se describe en cuatro niveles de organización de complejidad creciente. La <mark>estructura primaria</mark> es la <b>secuencia de aminoácidos</b> de la cadena, es decir, qué aminoácidos la forman y en qué orden, desde el extremo N-terminal hasta el C-terminal. Se mantiene por los enlaces peptídicos, que son covalentes y fuertes. La estructura primaria está determinada por el gen correspondiente y contiene la información necesaria para el plegamiento: de ella dependen todos los demás niveles.",
      "Un cambio en un solo aminoácido puede alterar por completo la función. El ejemplo clásico es la <b>anemia falciforme</b>: en la cadena β de la hemoglobina, el sexto aminoácido, ácido glutámico (polar con carga), se sustituye por valina (apolar). Las moléculas de hemoglobina se agregan cuando falta oxígeno y deforman los glóbulos rojos, que adoptan forma de hoz y obstruyen los capilares. Frederick Sanger determinó en 1953 la primera estructura primaria, la de la insulina (51 aminoácidos), y recibió por ello su primer Premio Nobel. Comparar las secuencias de una misma proteína en distintas especies permite además estudiar su parentesco evolutivo.",
    ], svg: L5.compara("Un aminoácido cambia la hemoglobina", ["Normal (HbA)", ["Val-His-Leu-Thr-Pro-Glu-Glu", "posición 6: Glu", "polar, con carga", "glóbulo redondo"]], ["Falciforme (HbS)", ["Val-His-Leu-Thr-Pro-Val-Glu", "posición 6: Val", "apolar", "glóbulo en hoz"]], "var(--pen)", "var(--red)") },
    { h: "La estructura secundaria", p: [
      "La <mark>estructura secundaria</mark> es la disposición espacial regular que adopta la cadena polipeptídica en algunas zonas, gracias a la capacidad de giro de los carbonos α. Se mantiene por <b>puentes de hidrógeno</b> entre el O del grupo C=O de un enlace peptídico y el H del grupo N–H de otro. La <b>hélice α</b> es una espiral dextrógira con 3,6 aminoácidos por vuelta; los puentes de hidrógeno se forman entre un aminoácido y el que está cuatro posiciones más allá, paralelos al eje, y las cadenas R quedan hacia fuera. Es la estructura de la queratina del pelo y de muchas zonas de las proteínas globulares.",
      "En la <b>lámina β</b> o lámina plegada, la cadena se dispone en zigzag, extendida, y varios tramos se colocan uno junto a otro, unidos lateralmente por puentes de hidrógeno; las cadenas R quedan alternativamente por encima y por debajo de la lámina. Aparece en la fibroína de la seda, que es flexible pero no extensible. Entre estas estructuras hay <b>giros β</b> y zonas sin estructura regular. Un caso especial es la <b>hélice de colágeno</b>, más abierta y levógira, rica en glicina y prolina: tres de estas hélices se enrollan entre sí y forman una superhélice muy resistente a la tracción, base de los tendones, los cartílagos y la piel.",
    ], svg: secSVG, v: ["pro-c", "Estructura de las proteínas y enlaces que la estabilizan"] },
    { h: "La estructura terciaria", p: [
      "La <mark>estructura terciaria</mark> es la forma tridimensional completa que adopta la cadena polipeptídica al plegarse sobre sí misma, incluidas las zonas con estructura secundaria. Se mantiene por enlaces entre las cadenas laterales R de aminoácidos que pueden estar muy alejados en la secuencia: <b>puentes disulfuro</b> (enlaces covalentes entre los –SH de dos cisteínas), puentes de hidrógeno, <b>interacciones iónicas</b> entre grupos con carga opuesta, fuerzas de Van der Waals e <b>interacciones hidrofóbicas</b>, que llevan los aminoácidos apolares al interior de la molécula, lejos del agua.",
      "Hay dos tipos de conformación. Las <b>proteínas fibrosas</b> son alargadas, insolubles en agua y con función estructural: colágeno, queratina, elastina, fibroína. Las <b>proteínas globulares</b> se pliegan en formas compactas y esféricas, con los aminoácidos hidrófobos dentro y los hidrófilos en la superficie, por lo que son solubles en agua; incluyen la mayoría de las enzimas, los anticuerpos, la mioglobina y las hormonas proteicas. Muchas proteínas globulares grandes tienen <b>dominios</b>, regiones que se pliegan de forma independiente y realizan funciones concretas. En la célula, unas proteínas auxiliares llamadas <b>chaperonas</b> ayudan a otras a plegarse correctamente.",
    ], svg: L6.tabla("Enlaces que estabilizan la estructura terciaria", ["Enlace", "Entre", "Tipo"], [["Puente disulfuro", "dos cisteínas", "covalente"], ["Puente de H", "grupos polares", "débil"], ["Iónico", "grupos + y −", "débil"], ["Hidrofóbico", "R apolares", "débil"], ["Van der Waals", "átomos cercanos", "débil"]]) },
    { h: "La estructura cuaternaria", p: [
      "Muchas proteínas están formadas por varias cadenas polipeptídicas, llamadas <b>subunidades</b> o protómeros, cada una con su propia estructura terciaria. La <mark>estructura cuaternaria</mark> es la forma en que se asocian estas subunidades, unidas por los mismos enlaces que estabilizan la estructura terciaria, sobre todo débiles, y a veces por puentes disulfuro. Según el número de subunidades, la proteína es un dímero, un trímero, un tetrámero, etc.; si son muchas, se habla de polímero.",
      "La <b>hemoglobina</b> es un tetrámero formado por dos cadenas α y dos β, cada una con un grupo hemo que se une a una molécula de O₂. La estructura cuaternaria le da una propiedad muy útil, la <b>cooperatividad</b>: cuando una subunidad capta oxígeno cambia ligeramente de forma y facilita que las demás lo capten, lo que hace que la hemoglobina se cargue bien de O₂ en los pulmones y lo suelte bien en los tejidos. Otros ejemplos son los <b>anticuerpos</b> (dos cadenas pesadas y dos ligeras unidas por puentes disulfuro), la cápsida de muchos virus, formada por cientos de subunidades iguales, y los microtúbulos de tubulina.",
    ], svg: L5.pasos("Los cuatro niveles de estructura", ["Primaria: secuencia (enlace peptídico)", "Secundaria: hélice α y lámina β (puentes H)", "Terciaria: plegamiento 3D (enlaces entre R)", "Cuaternaria: varias subunidades"], "var(--pen)") },
    { h: "Propiedades de las proteínas", p: [
      "Las propiedades de las proteínas dependen de sus cadenas laterales y de su forma. La <b>solubilidad</b>: las globulares se disuelven en agua y forman dispersiones coloidales, porque sus grupos polares externos se rodean de una capa de moléculas de agua; las fibrosas son insolubles. Como los aminoácidos, las proteínas tienen <b>comportamiento anfótero</b> y un punto isoeléctrico propio, en el que son menos solubles y precipitan: así se cuaja la leche al acidificarse en el yogur.",
      "La <mark>especificidad</mark> es su propiedad más importante. Hay una <b>especificidad de función</b>: cada proteína reconoce y se une solo a determinadas moléculas, gracias a una zona de su superficie con una forma y unos grupos químicos complementarios; así funcionan las enzimas con su sustrato, los anticuerpos con su antígeno o los receptores con su hormona. Y hay una <b>especificidad de especie</b>: proteínas con la misma función tienen secuencias algo distintas en especies distintas, y más parecidas cuanto más emparentadas están. Por eso el sistema inmunitario reconoce como extrañas las proteínas de otro individuo, y por eso un trasplante necesita compatibilidad entre donante y receptor.",
    ], svg: L5.compara("Especificidad de las proteínas", ["De función", ["forma complementaria", "enzima-sustrato", "anticuerpo-antígeno", "receptor-hormona"]], ["De especie", ["secuencias distintas", "más parecidas si", "hay parentesco", "rechazo de trasplantes"]], "var(--leaf)", "var(--red)") },
    { h: "La desnaturalización", p: [
      "La <mark>desnaturalización</mark> es la pérdida de la estructura nativa de una proteína (cuaternaria, terciaria y secundaria) cuando se rompen los enlaces débiles que la mantienen. Los enlaces peptídicos no se rompen, así que la <b>estructura primaria se conserva</b>, pero la cadena se despliega, la proteína pierde su forma y, con ella, su <b>función biológica</b>. Además, las proteínas globulares desnaturalizadas suelen volverse insolubles y precipitar, porque quedan expuestos los aminoácidos hidrófobos.",
      "La provocan los cambios de <b>temperatura</b> (por eso una fiebre muy alta, por encima de 42 °C, es peligrosa), los cambios de <b>pH</b>, la variación de la concentración salina, los disolventes orgánicos (alcohol), la urea, los detergentes y los metales pesados. Si la alteración es suave y se elimina el agente desnaturalizante, algunas proteínas pueden recuperar su forma y su función: es la <b>renaturalización</b>, que demostró Anfinsen con la ribonucleasa. Si los cambios son drásticos, la desnaturalización es irreversible, como en la clara de huevo cocida. Al cocinar, la desnaturalización facilita la digestión, porque las proteasas atacan mejor las cadenas desplegadas. El alcohol desinfecta porque desnaturaliza las proteínas de los microorganismos.",
    ], svg: desnSVG },
    { h: "Clasificación de las proteínas", p: [
      "Según su composición, las proteínas se clasifican en dos grandes grupos. Las <b>holoproteínas</b> están formadas solo por aminoácidos. Pueden ser <b>fibrosas</b>, como el colágeno (tejido conjuntivo, huesos, tendones), la queratina (pelo, uñas, plumas, cuernos), la elastina (paredes arteriales, pulmones) o la miosina (músculo); o <b>globulares</b>, como las albúminas (reserva y transporte en la sangre y la clara de huevo), las globulinas (anticuerpos), las histonas (empaquetan el ADN) y la actina.",
      "Las <b>heteroproteínas</b> o proteínas conjugadas tienen, además de la parte proteica, otra parte no proteica llamada <b>grupo prostético</b>. Según su naturaleza, son <b>cromoproteínas</b>, con un pigmento: la hemoglobina y la mioglobina tienen un grupo hemo con hierro que les da color rojo, y los citocromos de la respiración celular también; <b>glucoproteínas</b>, con un glúcido: anticuerpos, hormonas como la FSH, proteínas de membrana; <b>lipoproteínas</b>, con lípidos: las LDL y HDL de la sangre; <b>fosfoproteínas</b>, con ácido fosfórico: la caseína de la leche; y <b>nucleoproteínas</b>, unidas a ácidos nucleicos, como los ribosomas o la cromatina.",
    ], svg: arbol("Clasificación de las proteínas", "PROTEÍNAS", [["Fibrosas", "colágeno, queratina"], ["Globulares", "albúmina, enzimas"], ["Conjugadas", "proteína + grupo prostético"]]) },
    { h: "Funciones de las proteínas", p: [
      "Las proteínas tienen funciones muy variadas. La función <b>estructural</b>: el colágeno, la queratina, la elastina, las proteínas de membrana y del citoesqueleto, y las histonas. La <b>enzimática</b>, la más importante: casi todas las enzimas que catalizan las reacciones del metabolismo son proteínas. La de <b>transporte</b>: la hemoglobina lleva el O₂ por la sangre, la mioglobina lo almacena en el músculo, la seroalbúmina transporta ácidos grasos y fármacos, y las permeasas de membrana hacen pasar sustancias. La <b>defensiva</b>: los anticuerpos (inmunoglobulinas), el fibrinógeno y la trombina de la coagulación, y toxinas como las del veneno de serpiente.",
      "La función <b>hormonal y reguladora</b>: insulina, glucagón, hormona del crecimiento, y proteínas que activan o reprimen los genes. La <b>contráctil</b>: la actina y la miosina contraen los músculos, y la dineína mueve cilios y flagelos. La <b>homeostática</b>: mantienen el pH y el equilibrio osmótico de la sangre. La de <b>reserva</b>: la ovoalbúmina del huevo, la caseína de la leche o la gliadina del trigo, que alimentan al embrión. Solo en caso de ayuno prolongado se usan como fuente de energía (4 kcal/g). La dieta debe aportar proteínas de calidad, con todos los aminoácidos esenciales, combinando por ejemplo cereales y legumbres.",
    ], svg: L6.radial("Funciones de las proteínas", "FUNCIONES", ["Estructural", "Enzimática", "Transporte", "Defensiva", "Hormonal", "Contráctil"], "var(--pen)"), v: ["pro-a", "Proteínas: biomoléculas"] },
  ],
  figura: { titulo: "Proteínas", items: [["Aminoácidos", "H₂N–CHR–COOH", "20 tipos, L", "anfóteros"], ["Enlace", "peptídico", "–CO–NH–", "rígido y plano"], ["Estructura", "1.ª 2.ª 3.ª 4.ª", "secuencia → forma", "forma = función"], ["Funciones", "enzimas", "transporte", "defensa…"]] },
  video: ["pro-a", "Proteínas: biomoléculas"],
  ejemplos: [
    ["Escribe la formación del dipéptido glicil-alanina (Gly: R = H; Ala: R = CH₃).", ["El –COOH de la glicina reacciona con el –NH₂ de la alanina.", "H₂N–CH₂–COOH + H₂N–CH(CH₃)–COOH →", "H₂N–CH₂–CO–NH–CH(CH₃)–COOH + H₂O."], "Gly-Ala, con un enlace peptídico –CO–NH–; N-terminal en la glicina y C-terminal en la alanina."],
    ["¿Cuántos tripéptidos distintos se pueden formar con los aminoácidos A, B y C usando cada uno una sola vez? ¿Y si se pueden repetir?", ["Sin repetición: 3! = 6 (ABC, ACB, BAC, BCA, CAB, CBA).", "Con repetición: 3³ = 27."], "6 sin repetir y 27 si se pueden repetir; con 20 aminoácidos serían 20³ = 8000."],
    ["Un aminoácido tiene pI = 6. Indica su carga neta y hacia qué electrodo migra a pH 3 y a pH 9.", ["pH &lt; pI: capta H⁺, carga positiva → migra al cátodo (−).", "pH &gt; pI: cede H⁺, carga negativa → migra al ánodo (+)."], "A pH 3, positivo hacia el cátodo; a pH 9, negativo hacia el ánodo; a pH 6 no se mueve."],
    ["Indica qué nivel de estructura se altera en cada caso: a) se reduce un puente disulfuro; b) se sustituye un aminoácido; c) se separan las cadenas α y β de la hemoglobina.", ["a) Puente S–S entre cisteínas: terciaria (o cuaternaria).", "b) Cambia la secuencia: primaria.", "c) Asociación de subunidades: cuaternaria."], "a) terciaria; b) primaria; c) cuaternaria."],
    ["Explica por qué una persona con fiebre de 43 °C corre peligro de muerte.", ["La temperatura alta rompe enlaces débiles de las proteínas.", "Las enzimas pierden su forma nativa (desnaturalización).", "Sin enzimas activas se detiene el metabolismo, sobre todo en el cerebro."], "Por desnaturalización de enzimas y proteínas esenciales."],
    ["Las lentejas son pobres en metionina y el arroz en lisina. ¿Por qué se recomienda comerlos juntos?", ["Ambos son aminoácidos esenciales.", "Cada alimento aporta el que le falta al otro.", "La combinación da una proteína completa."], "Juntos aportan todos los aminoácidos esenciales: proteína de alta calidad."],
  ],
  errores: [
    "Decir que la desnaturalización rompe los enlaces peptídicos: rompe enlaces débiles y la estructura primaria se conserva.",
    "Confundir la hélice α con la doble hélice del ADN: la hélice α es una sola cadena polipeptídica enrollada.",
    "Pensar que los puentes de hidrógeno de la estructura secundaria se forman entre cadenas R: se forman entre los grupos C=O y N–H del esqueleto.",
    "Creer que todas las proteínas tienen estructura cuaternaria: solo las formadas por varias cadenas.",
    "Afirmar que los aminoácidos de las proteínas son D: todos son L.",
    "Pensar que la función principal de las proteínas es dar energía: solo se usan como combustible en ayunos prolongados.",
  ],
  ejercicios: {
    b: [
      ["¿Qué elementos químicos forman las proteínas?", "C, H, O, N y casi siempre S; algunas contienen P, Fe, Cu, Zn…"],
      ["Dibuja la fórmula general de un α-aminoácido y señala sus partes.", "Carbono α unido a –NH₂ (amino), –COOH (carboxilo), –H y una cadena lateral R."],
      ["¿En qué se diferencian unos aminoácidos de otros?", "En la cadena lateral R."],
      ["¿Qué es un aminoácido esencial? Cita dos.", "El que no podemos sintetizar y debemos tomar en la dieta: lisina, metionina (también leucina, valina, triptófano…)."],
      ["¿Por qué se dice que los aminoácidos son anfóteros?", "Porque pueden actuar como ácidos (ceden H⁺ del –COOH) o como bases (captan H⁺ con el –NH₂)."],
      ["Define punto isoeléctrico.", "pH en el que la carga neta de un aminoácido o proteína es cero."],
      ["Define enlace peptídico y di qué se libera al formarse.", "Enlace amida entre el –COOH de un aminoácido y el –NH₂ de otro; se libera una molécula de agua."],
      ["¿Qué es la estructura primaria de una proteína?", "La secuencia de aminoácidos, desde el extremo N-terminal al C-terminal."],
      ["Cita los dos tipos principales de estructura secundaria.", "Hélice α y lámina β."],
      ["Diferencia proteínas fibrosas y globulares con un ejemplo de cada una.", "Fibrosas: alargadas, insolubles, estructurales (colágeno). Globulares: compactas, solubles, funcionales (hemoglobina, enzimas)."],
      ["Define desnaturalización.", "Pérdida de la estructura tridimensional nativa de una proteína (y de su función), conservando la estructura primaria."],
      ["Cita cinco funciones de las proteínas con un ejemplo de cada una.", "Estructural (colágeno), enzimática (amilasa), transporte (hemoglobina), defensiva (anticuerpos), hormonal (insulina), contráctil (actina y miosina)."],
    ],
    m: [
      ["Explica por qué el enlace peptídico es rígido y plano y qué consecuencias tiene.", "Tiene carácter parcial de doble enlace por resonancia entre C, O y N: no gira. Solo giran los enlaces del Cα, lo que limita las conformaciones y favorece estructuras regulares."],
      ["Describe la hélice α y la lámina β indicando qué enlaces las estabilizan.", "Hélice α: espiral dextrógira, 3,6 aa por vuelta, puentes de H entre el C=O de un aa y el N–H del aa situado 4 posiciones más allá. Lámina β: cadenas en zigzag dispuestas en paralelo con puentes de H laterales."],
      ["¿Qué enlaces mantienen la estructura terciaria? ¿Cuál es covalente?", "Puentes disulfuro (covalentes, entre cisteínas), puentes de H, interacciones iónicas, hidrofóbicas y de Van der Waals."],
      ["Explica por qué las proteínas globulares son solubles en agua.", "Al plegarse, los aminoácidos apolares quedan en el interior y los polares en la superficie, donde interaccionan con el agua."],
      ["Explica qué es la estructura cuaternaria con el ejemplo de la hemoglobina.", "Asociación de varias cadenas: la hemoglobina tiene 2 α y 2 β, cada una con un grupo hemo; la unión permite la cooperatividad en la captación de O₂."],
      ["Explica por qué la sustitución de un solo aminoácido provoca la anemia falciforme.", "Glu (polar con carga) se cambia por Val (apolar) en la posición 6 de la cadena β; la zona hidrófoba hace que las hemoglobinas se agreguen sin O₂ y deformen el glóbulo rojo."],
      ["Diferencia especificidad de función y de especie.", "De función: cada proteína se une a moléculas concretas por complementariedad de forma. De especie: la misma proteína tiene secuencias distintas en especies distintas."],
      ["¿Qué es la renaturalización y qué demostró Anfinsen con ella?", "Recuperación de la forma y función al eliminar el agente desnaturalizante; demostró que la estructura primaria determina el plegamiento."],
      ["Diferencia holoproteínas y heteroproteínas y cita tres tipos de heteroproteínas.", "Holo: solo aminoácidos. Hetero: con grupo prostético. Cromoproteínas (hemoglobina), glucoproteínas (anticuerpos), lipoproteínas (LDL)…"],
      ["Explica por qué el yogur cuaja cuando las bacterias producen ácido láctico.", "Al bajar el pH hasta el punto isoeléctrico de la caseína, esta pierde carga neta, se vuelve insoluble y precipita formando el gel."],
      ["¿Por qué la seda es flexible pero no se estira, y la lana se estira?", "La fibroína de la seda es lámina β, ya extendida; la queratina de la lana es hélice α, que puede estirarse rompiendo puentes de H."],
      ["Explica el fundamento de la electroforesis de proteínas.", "En un campo eléctrico cada proteína migra según su carga (que depende del pH y su pI) y su tamaño; así se separan las proteínas de una mezcla."],
    ],
    a: [
      ["(Tipo PAU) Relaciona la estructura de las proteínas con su función, usando como ejemplos el colágeno, la hemoglobina y un anticuerpo.", "Colágeno: triple hélice fibrosa muy resistente → soporte en tendones y piel. Hemoglobina: tetrámero globular con grupos hemo y cooperatividad → transporte de O₂. Anticuerpo: 4 cadenas con zonas variables que encajan con el antígeno → defensa específica."],
      ["(Tipo PAU) Se calienta a 90 °C una disolución de una enzima y deja de actuar. Al enfriarla no recupera la actividad. Explica qué ha ocurrido y qué nivel estructural se mantiene.", "Desnaturalización irreversible: el calor rompe enlaces débiles, la enzima pierde su conformación y su centro activo; se conserva la estructura primaria (enlaces peptídicos)."],
      ["(Tipo PAU) Dada la secuencia Met-Ala-Cys-Lys-Glu-Cys-Val, indica sus extremos, cuántos enlaces peptídicos tiene, qué aminoácidos podrían formar un puente disulfuro y qué carga tendrá a pH 7.", "N-terminal Met y C-terminal Val; 6 enlaces peptídicos; las dos Cys; a pH 7 Lys aporta +1 y Glu −1 (más los extremos +1 y −1): carga neta aproximada 0."],
      ["Una proteína de membrana tiene una zona en hélice α que atraviesa la bicapa. ¿Qué tipo de aminoácidos predominarán en esa zona? Razónalo.", "Apolares (leucina, valina, isoleucina…), porque esa zona está en contacto con las colas hidrófobas de los fosfolípidos."],
      ["Los priones causan la enfermedad de las vacas locas. Son proteínas con la misma secuencia que una proteína normal pero mal plegadas. Explica qué demuestra esto sobre la relación estructura-función.", "Con la misma estructura primaria, un plegamiento distinto (más lámina β) da propiedades distintas: la función depende de la conformación, no solo de la secuencia; además el prión induce el mal plegamiento de otras."],
      ["Se tratan dos muestras de una proteína: una con urea y otra con urea y mercaptoetanol (que rompe puentes disulfuro). Al retirar los reactivos, la primera recupera la actividad y la segunda solo parcialmente. Interprétalo.", "La urea rompe enlaces débiles y la proteína se renaturaliza. Al romper también los S–S, al replegarse pueden formarse puentes entre cisteínas incorrectas y una parte de las moléculas queda mal plegada."],
      ["El pI de la hemoglobina es 6,8. En una electroforesis a pH 8,6, ¿hacia qué polo migra? ¿Por qué la HbS migra distinto que la HbA?", "A pH &gt; pI es negativa → migra al ánodo (+). La HbS tiene Val en lugar de Glu: una carga negativa menos por cadena β, así que migra más despacio hacia el ánodo."],
      ["Calcula cuántos nucleótidos codifican una proteína de 300 aminoácidos y razona por qué la especificidad de especie permite construir árboles evolutivos.", "300 · 3 = 900 nucleótidos (más el codón de parada: 903). Las secuencias acumulan cambios con el tiempo; cuantas menos diferencias, más reciente el antepasado común."],
      ["Explica por qué el alcohol de 70° y el calor del autoclave sirven para esterilizar.", "Ambos desnaturalizan las proteínas de los microorganismos (enzimas, proteínas de membrana), que pierden su función y mueren."],
    ],
  },
  quiz: [
    ["Las proteínas son polímeros de…", ["monosacáridos", "aminoácidos", "nucleótidos", "ácidos grasos"], 1, "Unidos por enlaces peptídicos."],
    ["El carbono α de un aminoácido se une a…", ["NH₂, COOH, H y R", "dos COOH", "un fosfato", "una base"], 0, "Fórmula general."],
    ["Las proteínas están formadas por aminoácidos…", ["D", "L", "D y L", "sin isomería"], 1, "Exclusivamente L."],
    ["El único aminoácido sin carbono asimétrico es…", ["alanina", "glicina", "cisteína", "lisina"], 1, "R = H."],
    ["Los aminoácidos son anfóteros porque…", ["son solubles", "actúan como ácido y como base", "son apolares", "forman micelas"], 1, "Zwitterión."],
    ["En el punto isoeléctrico la carga neta es…", ["positiva", "negativa", "cero", "variable"], 2, "No migra en un campo eléctrico."],
    ["El enlace peptídico es…", ["iónico", "covalente tipo amida", "puente de H", "glucosídico"], 1, "–CO–NH–."],
    ["El enlace peptídico no puede girar porque…", ["es débil", "tiene carácter parcial de doble enlace", "es iónico", "es hidrófobo"], 1, "Rígido y plano."],
    ["La estructura primaria es…", ["la secuencia de aminoácidos", "la hélice α", "el plegamiento 3D", "la unión de subunidades"], 0, "Determinada por el gen."],
    ["La hélice α se estabiliza con…", ["puentes disulfuro", "puentes de H entre C=O y N–H", "enlaces iónicos", "enlaces éster"], 1, "Del esqueleto."],
    ["La fibroína de la seda tiene estructura…", ["hélice α", "lámina β", "hélice de colágeno", "cuaternaria"], 1, "Extendida."],
    ["Un puente disulfuro une dos…", ["glicinas", "cisteínas", "lisinas", "prolinas"], 1, "Grupos –SH."],
    ["La estructura terciaria es…", ["la secuencia", "el plegamiento 3D de una cadena", "la unión de cadenas", "la hélice α"], 1, "Enlaces entre R."],
    ["La hemoglobina tiene…", ["1 cadena", "2 cadenas", "4 cadenas", "6 cadenas"], 2, "2 α y 2 β."],
    ["La desnaturalización conserva…", ["la estructura primaria", "la función", "la terciaria", "la cuaternaria"], 0, "No rompe enlaces peptídicos."],
    ["Las proteínas globulares son…", ["insolubles y estructurales", "solubles y funcionales", "lípidos", "siempre enzimas"], 1, "Hidrófilas fuera."],
    ["La hemoglobina es una…", ["holoproteína", "cromoproteína", "fosfoproteína", "lipoproteína"], 1, "Grupo hemo."],
    ["La caseína de la leche es una…", ["glucoproteína", "fosfoproteína", "cromoproteína", "nucleoproteína"], 1, "Con fosfato."],
    ["La función de los anticuerpos es…", ["estructural", "defensiva", "contráctil", "de reserva"], 1, "Inmunoglobulinas."],
    ["Actina y miosina tienen función…", ["enzimática", "contráctil", "hormonal", "de transporte"], 1, "Músculo."],
  ],
  examen: [
    ["Un pentapéptido tiene… enlaces peptídicos", ["4", "5", "6", "3"], 0, "n − 1."],
    ["Con 20 aminoácidos, ¿cuántos dipéptidos distintos hay?", ["400", "40", "20", "200"], 0, "20²."],
    ["Un aminoácido con pI = 9 a pH 7 está cargado…", ["positivamente", "negativamente", "sin carga", "no se sabe"], 0, "pH &lt; pI."],
    ["La anemia falciforme altera la estructura…", ["primaria", "secundaria", "terciaria", "cuaternaria solo"], 0, "Glu → Val."],
    ["La queratina del pelo es sobre todo…", ["hélice α", "lámina β", "globular", "lipoproteína"], 0, "Fibrosa."],
    ["El colágeno abunda en…", ["glicina y prolina", "cisteína", "lisina", "triptófano"], 0, "Hélice de colágeno."],
    ["La clara de huevo cocida es un ejemplo de…", ["desnaturalización irreversible", "renaturalización", "hidrólisis", "síntesis"], 0, "Ovoalbúmina."],
    ["Las chaperonas…", ["ayudan al plegamiento", "rompen proteínas", "son lípidos", "transportan O₂"], 0, "Proteínas auxiliares."],
  ],
  feynman: ["Cómo 20 aminoácidos pueden formar millones de proteínas distintas", "Qué significa que un aminoácido sea anfótero", "Por qué la forma de una proteína depende de su secuencia", "Qué le pasa a una proteína al cocinarla", "Por qué un solo aminoácido cambiado causa la anemia falciforme", "Por qué rechazamos un órgano de otra persona"],
  mapa: ["PROTEÍNAS", [["Aminoácidos", "L, anfóteros, 20 tipos"], ["Enlace peptídico", "rígido, plano"], ["Estructura", "1.ª, 2.ª, 3.ª, 4.ª"], ["Propiedades y funciones", "especificidad, desnaturalización"]]],
  tarjetas: [
    ["Aminoácido", "Cα con –NH₂, –COOH, –H y R."],
    ["Esenciales", "9 que hay que tomar en la dieta."],
    ["Anfótero", "Ácido y base; zwitterión; pI = carga 0."],
    ["Enlace peptídico", "–CO–NH–; covalente, rígido y plano."],
    ["Estructura primaria", "Secuencia de aminoácidos (N → C)."],
    ["Hélice α", "3,6 aa/vuelta; puentes de H; queratina."],
    ["Lámina β", "Zigzag; puentes de H laterales; seda."],
    ["Estructura terciaria", "Plegamiento 3D; S–S, iónicos, hidrofóbicos."],
    ["Estructura cuaternaria", "Varias subunidades: hemoglobina."],
    ["Desnaturalización", "Pierde la forma y la función; conserva la 1.ª."],
    ["Heteroproteína", "Proteína + grupo prostético."],
    ["Especificidad", "De función (forma) y de especie (secuencia)."],
  ],
  glosario: [
    ["Aminoácido", "Molécula con un grupo amino y un grupo carboxilo unidos al mismo carbono."],
    ["Carbono α", "Carbono al que se unen el grupo amino, el carboxilo y la cadena lateral."],
    ["Zwitterión", "Ion dipolar con una carga positiva y otra negativa."],
    ["Punto isoeléctrico", "pH en el que la carga neta de una molécula es cero."],
    ["Péptido", "Cadena corta de aminoácidos unidos por enlaces peptídicos."],
    ["Extremo N-terminal", "Extremo de la cadena con el grupo amino libre."],
    ["Hélice α", "Estructura secundaria en espiral estabilizada por puentes de hidrógeno."],
    ["Lámina β", "Estructura secundaria en zigzag con cadenas unidas lateralmente."],
    ["Puente disulfuro", "Enlace covalente entre los grupos –SH de dos cisteínas."],
    ["Dominio", "Región de una proteína que se pliega de forma independiente."],
    ["Chaperona", "Proteína que ayuda a otras a plegarse correctamente."],
    ["Subunidad", "Cadena polipeptídica que forma parte de una proteína con estructura cuaternaria."],
    ["Cooperatividad", "Efecto por el que la unión a una subunidad facilita la unión a las demás."],
    ["Grupo prostético", "Parte no proteica de una heteroproteína."],
    ["Desnaturalización", "Pérdida de la conformación nativa y de la función de una proteína."],
    ["Electroforesis", "Técnica que separa moléculas con carga en un campo eléctrico."],
  ],
  situacion: {
    titulo: "La cocina como laboratorio de proteínas",
    reto: "Vuestro equipo debe explicar con experimentos de cocina qué les ocurre a las proteínas al cocinar, y preparar un vídeo divulgativo para la web del centro.",
    pasos: [
      "Calentad clara de huevo a distintas temperaturas (50, 60, 70 y 90 °C) y anotad a qué temperatura se vuelve opaca.",
      "Añadid limón, alcohol y sal a muestras de clara y de leche y observad qué cambios se producen.",
      "Comprobad el efecto de la piña fresca y de la piña en almíbar sobre una gelatina (la piña fresca tiene una proteasa).",
      "Haced la prueba de Biuret para detectar proteínas en distintos alimentos.",
      "Grabad un vídeo de 3 minutos que explique los resultados con los niveles de estructura y la desnaturalización.",
    ],
    producto: "Un vídeo divulgativo y un cuaderno de laboratorio con los resultados.",
    evaluacion: ["Los experimentos están controlados y registrados.", "Las explicaciones usan correctamente los niveles de estructura.", "Se distingue desnaturalización de hidrólisis.", "El vídeo es claro, riguroso y atractivo."],
  },
  familias: [
    "Al freír un huevo, comentad por qué la clara cambia de color antes que la yema.",
    "Mirad en las etiquetas cuántas proteínas tienen la leche, las legumbres y la carne por cada 100 g.",
    "Preparad gelatina con piña de lata y otra con piña fresca: ¿cuál cuaja?",
    "Buscad juntos cómo combinan los platos tradicionales cereales y legumbres (lentejas con arroz, cocido…).",
  ],
  saberes: "bloque «Las biomoléculas»: las proteínas, aminoácidos (estructura, clasificación y propiedades), enlace peptídico, niveles de estructura y enlaces que los estabilizan; propiedades (solubilidad, especificidad, desnaturalización); clasificación y funciones biológicas; relación entre estructura y función.",
  ideas: [
    "Reacción de Biuret para identificar proteínas y desnaturalización de la albúmina con calor, ácidos y alcohol.",
    "Construcción de una hélice α con cinta y clips para representar los puentes de hidrógeno.",
    "Exploración de estructuras reales de proteínas en el Protein Data Bank y en la base de AlphaFold.",
    "Electroforesis de colorantes alimentarios como analogía de la de proteínas.",
  ],
  fuentes: [
    { t: "Protein Data Bank (RCSB PDB)", url: "https://www.rcsb.org/" },
    { t: "AlphaFold Protein Structure Database", url: "https://alphafold.ebi.ac.uk/" },
  ],
});
