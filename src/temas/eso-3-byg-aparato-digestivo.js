// Biología y Geología 3º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso3L4.js.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Silueta de cabeza y tronco con el tubo digestivo (para bloques y figura).
const tubo = (s = 1, x0 = 0, y0 = 0) => `<g transform="translate(${x0} ${y0}) scale(${s})">
  <path d="M60 10 Q 92 10 92 40 Q 92 58 80 64 L 82 74 H 100 Q 130 80 132 110 V 250 H -12 V 110 Q -10 80 20 74 H 38 L 40 64 Q 28 58 28 40 Q 28 10 60 10 Z" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
  <path d="M50 46 Q 56 52 66 48" stroke="var(--red)" stroke-width="4" fill="none"/>
  <path d="M58 50 V 120" stroke="var(--red)" stroke-width="5" fill="none"/>
  <path d="M58 118 Q 56 106 70 104 Q 98 104 96 128 Q 94 148 72 146 Q 64 146 62 140" fill="var(--red)" fill-opacity=".5" stroke="var(--red)" stroke-width="2.5"/>
  <path d="M20 108 Q 30 98 54 104 Q 52 128 34 130 Q 18 128 20 108 Z" fill="#8a4a2b" fill-opacity=".55"/>
  <path d="M62 144 Q 70 150 80 148" stroke="var(--inf)" stroke-width="5" fill="none"/>
  <path d="M10 236 V 160 Q 10 152 18 152 H 104 Q 112 152 112 160 V 230 Q 112 238 104 238 H 70 V 246" stroke="var(--sun)" stroke-width="9" fill="none" stroke-linejoin="round"/>
  <path d="M30 168 q 10 -8 20 0 t 20 0 t 20 0 M30 184 q 10 8 20 0 t 20 0 t 20 0 M30 200 q 10 -8 20 0 t 20 0 t 20 0 M30 216 q 10 8 20 0 t 20 0 t 20 0" stroke="var(--red)" stroke-width="4" fill="none" stroke-opacity=".8"/>
</g>`;
const L = require("./_eso3L4");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "El aparato digestivo",
  minutos: 105,
  objetivos: [
    "Describir los órganos del tubo digestivo, la estructura de su pared y las glándulas anejas",
    "Explicar las fases del proceso digestivo: ingestión, digestión, absorción y egestión",
    "Distinguir la digestión mecánica de la química y el papel de las enzimas",
    "Relacionar cada enzima con el nutriente que digiere y el lugar donde actúa",
    "Explicar la absorción y el destino de los nutrientes absorbidos",
    "Adoptar hábitos de salud digestiva y conocer las enfermedades más frecuentes",
  ],
  claves: ["digestión", "tubo digestivo", "glándula aneja", "enzima", "bolo alimenticio", "quimo", "quilo", "vellosidad intestinal", "microbiota"],
  pregunta: {
    texto: "Si estiraras tu tubo digestivo, mediría unos 8 metros. ¿Por qué necesitamos un tubo tan largo dentro del cuerpo?",
    respuesta: "Porque hay que <b>romper</b> los alimentos en moléculas diminutas y <mark>absorberlas</mark> antes de que salgan. Cuanto más largo y plegado es el intestino, más superficie tiene: sus pliegues y <b>vellosidades</b> suman unos 30 m², como un estudio pequeño.",
  },
  lectura: {
    titulo: "El hombre con una ventana en el estómago",
    html: `<p>En 1822, en un puesto comercial de Canadá, un joven llamado Alexis St. Martin recibió por accidente un disparo de mosquete a muy poca distancia. El médico militar William Beaumont le salvó la vida, pero la herida nunca se cerró del todo: quedó un agujero, una fístula, que comunicaba el estómago con el exterior. A través de él se podía ver lo que pasaba dentro.</p>
<p>Beaumont aprovechó aquella situación tan extraña para hacer cientos de experimentos. Ataba trocitos de carne, pan o verdura a un hilo, los introducía por el agujero y los sacaba al cabo de un tiempo para ver cuánto se habían digerido. También recogía jugo gástrico y comprobaba que, en un frasco a la temperatura del cuerpo, seguía deshaciendo la carne. Así demostró que la digestión no era solo un aplastamiento mecánico, sino un proceso químico causado por un jugo ácido.</p>
<p>Hoy no hace falta ninguna herida para saber lo que ocurre dentro: conocemos las enzimas, las vellosidades y hasta las bacterias que viven en el intestino. En este tema seguirás el viaje de un bocado desde la boca hasta que sus nutrientes llegan a la sangre.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 ¿Qué es la digestión?</h3><p>Los alimentos están formados por moléculas grandes, como el almidón, las proteínas o las grasas, que no pueden atravesar la pared del intestino. La <b>digestión</b> las transforma en moléculas pequeñas (glucosa, aminoácidos, ácidos grasos) que sí pasan a la sangre. Tiene dos partes. La <mark>digestión mecánica</mark> tritura y mezcla: la hacen los dientes y los músculos del tubo. La <mark>digestión química</mark> rompe las moléculas gracias a las <b>enzimas</b> de los jugos digestivos. Lo que no se digiere ni se absorbe se expulsa con las heces.</p><p>La digestión es una parte de la <b>nutrición</b>: sin ella, los nutrientes de los alimentos no podrían llegar a las células. Por eso el aparato digestivo trabaja en equipo con el circulatorio, que reparte lo absorbido, y con el excretor y el respiratorio, que eliminan los desechos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una molécula grande de almidón se rompe en muchas moléculas pequeñas de glucosa que atraviesan la pared">${BG}
        ${[0, 1, 2, 3, 4, 5].map((i) => `<circle cx="${26 + i * 14}" cy="60" r="7" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}<path d="M33 60 H 89" stroke="var(--ink)" stroke-width="1.5"/>
        ${t(62, 40, "almidón", { size: 11 })}${fl(110, 60, 140, 60)}${t(125, 48, "enzimas", { size: 10, color: "var(--red)" })}
        ${[[160, 40], [190, 56], [168, 78], [210, 36], [222, 74]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}${t(196, 102, "glucosa", { size: 11 })}
        <path d="M14 126 H 246" stroke="var(--red)" stroke-width="6" stroke-dasharray="20 6"/>${fl(196, 112, 196, 146, "var(--leaf)")}
        ${t(62, 150, "pared del intestino", { size: 10, color: "var(--muted)" })}${t(196, 166, "a la sangre", { size: 11, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>1.2 Las fases del proceso digestivo</h3><p>El trabajo del aparato digestivo se puede dividir en cuatro fases que ocurren una detrás de otra a lo largo del tubo:</p><p>• La <mark>ingestión</mark> es la entrada del alimento por la boca.<br>• La <mark>digestión</mark>, mecánica y química, transforma el alimento en moléculas sencillas. Ocurre en la boca, el estómago y el intestino delgado.<br>• La <mark>absorción</mark> es el paso de los nutrientes a través de la pared del intestino hasta la sangre y la linfa. Se produce sobre todo en el intestino delgado; en el grueso se absorbe agua.<br>• La <mark>egestión</mark> es la expulsión de los restos no digeridos en forma de heces por el ano.</p><p>No hay que confundir la egestión con la <b>excreción</b>: las heces son restos que nunca llegaron a entrar en las células, mientras que la excreción elimina los desechos que las células producen, sobre todo a través de la orina.</p>`,
      svg: L.flujo("Las cuatro fases del proceso digestivo", ["Ingestión: el alimento entra por la boca", "Digestión: moléculas grandes a pequeñas", "Absorción: los nutrientes pasan a la sangre", "Egestión: se expulsan las heces"], "Del bocado a la sangre"),
    },
    {
      html: `<h3>1.3 El tubo digestivo</h3><p>El aparato digestivo tiene dos partes: el <b>tubo digestivo</b>, por donde pasa el alimento, y las <b>glándulas anejas</b>, que fabrican jugos y los vierten al tubo. El tubo es un conducto continuo que empieza en la <mark>boca</mark> y sigue por la <mark>faringe</mark>, el <mark>esófago</mark>, el <mark>estómago</mark>, el <mark>intestino delgado</mark> (unos 6 m) y el <mark>intestino grueso</mark> (1,5 m), que termina en el ano. Sus paredes tienen músculo liso, que se contrae de forma automática para empujar el contenido.</p><p>Si se estirara, el tubo digestivo de un adulto mediría entre 8 y 9 metros. Su longitud y sus repliegues permiten que el alimento permanezca dentro el tiempo suficiente para digerirse: el viaje completo dura entre uno y tres días. Varias válvulas musculares, los <b>esfínteres</b>, regulan el paso entre una parte y otra, como el cardias a la entrada del estómago o el píloro a la salida.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Silueta con el tubo digestivo: boca, esófago, estómago, hígado, intestino delgado e intestino grueso">${BG}
        ${tubo(0.66, 60, 8)}
        ${[["boca", 38], ["esófago", 64], ["estómago", 88], ["intestino delgado", 132], ["intestino grueso", 162]].map(([n, y]) => t(150, y, n, { size: 10, anchor: "start" })).join("")}
        ${t(54, 86, "hígado", { size: 10, anchor: "end", color: "#8a4a2b" })}
        <g stroke="var(--muted)" stroke-width="1"><path d="M148 35 H 104 M148 61 H 100 M148 85 H 124 M148 129 H 128 M148 159 H 136"/></g></svg>`,
      video: { id: "Ix1gqUZrAiE", titulo: "El viaje de los alimentos a través de tu cuerpo", canal: "GENIAL", vistas: 15686869 },
    },
    {
      html: `<h3>1.4 La pared del tubo digestivo</h3><p>Aunque cada órgano tiene su forma, la pared del tubo digestivo tiene casi siempre la misma estructura, con cuatro capas de dentro afuera:</p><p>• La <mark>mucosa</mark> está en contacto con el alimento. Es un epitelio que segrega moco, que protege y lubrica, y en algunas zonas jugos digestivos o absorbe nutrientes.<br>• La <b>submucosa</b> es tejido conectivo con vasos sanguíneos, vasos linfáticos y nervios.<br>• La <mark>capa muscular</mark> tiene fibras de músculo liso en dos direcciones, circulares y longitudinales. Al contraerse de forma coordinada producen el peristaltismo y mezclan el contenido.<br>• La <b>serosa</b> es una capa fina que envuelve el tubo por fuera; en el abdomen forma parte del <b>peritoneo</b>, que sujeta los órganos.</p><p>Este es un buen ejemplo de órgano formado por varios tejidos: epitelial, conectivo, muscular y nervioso trabajando juntos.</p>`,
      svg: L.capas("Capas de la pared del tubo digestivo de dentro afuera", [["Mucosa: moco y absorción", "var(--red)", 1.2], ["Submucosa: vasos y nervios", "var(--sun)", 1], ["Muscular: peristaltismo", "var(--pen)", 1.3], ["Serosa: envoltura", "var(--leaf)", 0.8]], "De dentro (luz) hacia fuera"),
    },
    {
      html: `<h3>1.5 Las glándulas anejas</h3><p>Las <b>glándulas salivales</b> (parótidas, submaxilares y sublinguales) producen saliva, más de un litro al día. El <mark>hígado</mark>, el órgano interno más grande, fabrica la <b>bilis</b>, que se guarda en la vesícula biliar y sale al intestino cuando comemos grasas: no es una enzima, pero <b>emulsiona</b> las grasas, es decir, las rompe en gotitas para que las enzimas actúen mejor. El hígado además almacena glucosa y elimina sustancias tóxicas. El <mark>páncreas</mark> produce el jugo pancreático, con enzimas para los tres grandes nutrientes.</p><p>El páncreas es una glándula <b>mixta</b>: además del jugo pancreático, que vierte al duodeno, fabrica las hormonas insulina y glucagón, que pasan a la sangre y regulan la glucosa. El jugo pancreático es también rico en <b>bicarbonato</b>, que neutraliza la acidez del quimo para que puedan actuar las enzimas del intestino.</p>`,
      svg: L.compara("Las dos grandes glándulas anejas: hígado y páncreas", ["Hígado", "var(--red)", ["fabrica bilis", "guarda glucógeno", "elimina tóxicos", "el mayor órgano interno"]], ["Páncreas", "var(--sun)", ["jugo pancreático", "enzimas de todo tipo", "bicarbonato", "insulina y glucagón"]]),
      video: { id: "TYXpPxwBsXM", titulo: "Así funciona el páncreas", canal: "DW Español", vistas: 950127 },
    },
    {
      html: `<h3>2.1 En la boca: masticación e insalivación</h3><p>En la boca empieza todo. Los <b>dientes</b> trituran: los <b>incisivos</b> cortan, los <b>caninos</b> desgarran y los <b>premolares</b> y <b>molares</b> muelen. Un adulto tiene 32 dientes. La <b>lengua</b> mueve el alimento y lo mezcla con la saliva, que lo humedece y contiene una enzima, la <mark>amilasa salival</mark>, que empieza a romper el almidón. Por eso el pan, si lo masticas mucho rato, sabe dulce. El resultado es una pasta blanda, el <b>bolo alimenticio</b>.</p><p>La saliva cumple más funciones: contiene <b>moco</b>, que lubrica el bolo y facilita tragarlo; disuelve las sustancias para que podamos notar su sabor; y tiene <b>lisozima</b>, una enzima que destruye algunas bacterias. Cuanto mejor masticamos, más superficie del alimento queda expuesta a las enzimas y mejor se digiere después.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los cuatro tipos de dientes: incisivo, canino, premolar y molar, con su función">${BG}
        ${[["incisivo", "corta", "M-8 -40 H 8 L 6 0 H -6 Z"], ["canino", "desgarra", "M-8 -30 L 0 -46 L 8 -30 L 6 0 H -6 Z"], ["premolar", "muele", "M-12 -36 Q -6 -42 0 -36 Q 6 -42 12 -36 L 9 0 H -9 Z"], ["molar", "muele", "M-16 -34 Q -10 -42 -4 -34 Q 2 -42 8 -34 Q 14 -42 18 -34 L 14 0 H -12 Z"]].map(([n, f, d], i) => {
          const x = 38 + i * 62;
          return `<g transform="translate(${x} 96)"><path d="${d}" fill="#fff" stroke="var(--ink)" stroke-width="2"/><path d="M-6 0 L -4 30 M6 0 L 4 30" stroke="var(--red)" stroke-width="2" stroke-opacity=".5"/></g>${t(x, 146, n, { size: 11 })}${t(x, 162, f, { size: 10, color: "var(--muted)", weight: 400 })}`;
        }).join("")}
        <path d="M14 96 H 246" stroke="var(--red)" stroke-width="3" stroke-opacity=".4"/>${t(130, 30, "32 dientes en el adulto", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>2.2 Los dientes y su cuidado</h3><p>Cada diente tiene una parte visible, la <b>corona</b>, y una parte oculta en el hueso de la mandíbula, la <b>raíz</b>, unidas por el cuello. Por dentro tiene tres capas:</p><p>• El <mark>esmalte</mark> cubre la corona. Es la sustancia más dura del cuerpo, pero no se regenera si se pierde.<br>• La <b>dentina</b> o marfil forma la mayor parte del diente y es algo más blanda.<br>• La <b>pulpa</b>, en el centro, contiene vasos sanguíneos y nervios; por eso duele cuando una caries llega hasta ella.</p><p>Los humanos tenemos dos denticiones. La <b>dentición de leche</b> tiene 20 dientes, que aparecen entre los 6 meses y los 3 años. A partir de los 6 años se sustituyen por la <b>dentición definitiva</b>, de 32 piezas, aunque las últimas muelas, las del juicio, a veces no llegan a salir. Como las piezas definitivas tienen que durar toda la vida, conviene cepillarlas bien, usar pasta con flúor e ir al dentista una vez al año.</p>`,
      svg: L.capas("Capas de un diente: esmalte, dentina, pulpa y raíz", [["Esmalte: lo más duro del cuerpo", "var(--pen)", 0.9], ["Dentina o marfil", "var(--sun)", 1.1], ["Pulpa: vasos y nervios", "var(--red)", 1], ["Raíz en el hueso", "var(--muted)", 0.9]], "Un diente por dentro"),
    },
    {
      html: `<h3>2.3 Deglución y peristaltismo</h3><p>Al tragar, la lengua empuja el bolo hacia la <b>faringe</b>, un conducto que compartimos con el aparato respiratorio. Para que el alimento no se vaya a la tráquea, una lengüeta de cartílago, la <mark>epiglotis</mark>, la tapa. Por eso no podemos respirar y tragar a la vez, y si hablamos comiendo nos atragantamos. Después, el bolo baja por el <b>esófago</b> gracias al <mark>peristaltismo</mark>: ondas de contracción de los músculos de la pared que lo empujan. Funcionan incluso cabeza abajo, como demuestran los astronautas que comen en el espacio.</p><p>La deglución empieza siendo <b>voluntaria</b>, cuando decidimos tragar, pero a partir de la faringe se convierte en un <b>reflejo</b> que ya no controlamos. El esófago mide unos 25 centímetros y el bolo tarda entre 5 y 10 segundos en recorrerlo. Al final, el cardias se abre para dejarlo pasar y se cierra para que el ácido del estómago no suba; cuando falla, se nota ardor: es el reflujo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Peristaltismo: el músculo del esófago se contrae detrás del bolo y lo empuja hacia abajo">${BG}
        <path d="M100 14 C 92 50 108 70 100 96 C 94 120 106 140 100 168 M160 14 C 168 50 152 70 160 96 C 166 120 154 140 160 168" stroke="var(--red)" stroke-width="4" fill="none"/>
        <path d="M100 52 Q 130 64 160 52" stroke="var(--red)" stroke-width="7" fill="none" stroke-opacity=".6"/>
        <ellipse cx="130" cy="96" rx="22" ry="18" fill="#c99a6a"/>${t(130, 100, "bolo", { size: 10, color: "#fff" })}
        ${fl(130, 122, 130, 150, "var(--muted)")}
        ${t(196, 54, "contracción", { size: 10, anchor: "start", color: "var(--red)" })}${t(196, 100, "esófago", { size: 11, anchor: "start" })}${t(16, 150, "hacia el", { size: 10, anchor: "start", color: "var(--muted)" })}${t(16, 164, "estómago", { size: 10, anchor: "start", color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>2.4 El estómago</h3><p>El <b>estómago</b> es una bolsa muscular con capacidad para más de un litro. Sus paredes se contraen y mezclan el bolo con el <mark>jugo gástrico</mark>, que contiene <b>ácido clorhídrico</b> y la enzima <b>pepsina</b>. El ácido mata muchos microbios y activa la pepsina, que empieza a romper las proteínas. Para no digerirse a sí mismo, el estómago se protege con una capa de moco. Tras dos a cuatro horas, el bolo se ha convertido en una papilla ácida, el <b>quimo</b>, que pasa poco a poco al intestino a través de una válvula, el <b>píloro</b>.</p><p>El estómago también absorbe algunas sustancias, como el agua, ciertos medicamentos o el alcohol, que por eso pasa tan rápido a la sangre. Los alimentos no permanecen el mismo tiempo: los glúcidos lo atraviesan antes y las comidas grasas se quedan más rato, lo que explica que nos sientan más pesadas.</p>`,
      svg: L.flujo("Lo que ocurre en el estómago", ["Entra el bolo por el cardias", "Jugo gástrico: ácido clorhídrico y pepsina", "Se forma el quimo en 2-4 horas", "Sale al duodeno por el píloro"], "El estómago paso a paso"),
    },
    {
      html: `<h3>2.5 Las enzimas digestivas</h3><p>Las <b>enzimas</b> son proteínas que aceleran las reacciones químicas sin gastarse. Cada una es <mark>específica</mark>: actúa sobre un tipo de molécula, como una llave que solo abre su cerradura. Además, cada enzima necesita una temperatura y una acidez concretas: la pepsina trabaja en el ácido del estómago y las del intestino, en un medio casi neutro.</p>${tabla(["Enzima", "Dónde se produce", "Qué digiere", "Qué obtiene"], [["Amilasa", "glándulas salivales y páncreas", "almidón", "azúcares sencillos"], ["Pepsina", "estómago", "proteínas", "fragmentos de proteínas"], ["Tripsina", "páncreas", "proteínas", "fragmentos y aminoácidos"], ["Lipasa", "páncreas", "grasas", "ácidos grasos y glicerina"]])}<p>Al final de la digestión, cada nutriente queda reducido a sus piezas más pequeñas: el almidón y otros glúcidos, a <b>glucosa</b> y otros azúcares simples; las proteínas, a <b>aminoácidos</b>; y los lípidos, a <b>ácidos grasos y glicerina</b>. Las vitaminas, los minerales y el agua no necesitan digerirse: se absorben tal cual.</p>`,
      svg: L.tabla("Enzimas digestivas: dónde actúan y qué digieren", ["Enzima", "Dónde", "Digiere"], [["Amilasa salival", "boca", "almidón"], ["Pepsina", "estómago", "proteínas"], ["Amilasa pancreática", "duodeno", "almidón"], ["Tripsina", "duodeno", "proteínas"], ["Lipasa", "duodeno", "grasas"]]),
      video: { id: "qWeMLG9r0e0", titulo: "¿Qué son las Enzimas? [Fácil y Rápido] | BIOLOGÍA", canal: "A Cierta Ciencia", vistas: 516847 },
    },
    {
      html: `<h3>3.1 El intestino delgado: digestión final y absorción</h3><p>En la primera parte del intestino delgado, el <b>duodeno</b>, el quimo se mezcla con la bilis, el jugo pancreático y el jugo intestinal. Allí termina la digestión química: el resultado, un líquido lleno de nutrientes sencillos, se llama <b>quilo</b>. Después, en el resto del intestino, los nutrientes se <mark>absorben</mark>: atraviesan la pared y pasan a la sangre o a la linfa. La pared tiene pliegues cubiertos de millones de <b>vellosidades intestinales</b>, unos salientes con forma de dedo que multiplican la superficie de absorción.</p><p>Cada vellosidad tiene a su vez en sus células otros salientes microscópicos, las <b>microvellosidades</b>. Gracias a pliegues, vellosidades y microvellosidades, la superficie interna del intestino delgado alcanza unos 30 metros cuadrados, como una pista de bádminton. Dentro de cada vellosidad hay una red de capilares sanguíneos y un vaso linfático, el quilífero.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Vellosidades intestinales con capilares sanguíneos por dentro, que recogen los nutrientes">${BG}
        <rect x="14" y="128" width="232" height="30" fill="var(--red)" fill-opacity=".25"/>
        ${[0, 1, 2, 3, 4].map((i) => { const x = 38 + i * 46; return `<path d="M${x - 16} 130 V 60 Q ${x - 16} 40 ${x} 40 Q ${x + 16} 40 ${x + 16} 60 V 130" fill="var(--red)" fill-opacity=".3" stroke="var(--red)" stroke-width="2"/><path d="M${x - 6} 128 V 60 Q ${x} 50 ${x + 6} 60 V 128" stroke="var(--pen)" stroke-width="2" fill="none"/>`; }).join("")}
        ${[[60, 24], [106, 28], [150, 20], [196, 30], [84, 34]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="var(--sun)" stroke="var(--ink)"/>`).join("")}
        ${t(130, 174, "vellosidades: más superficie para absorber", { size: 10, color: "var(--muted)" })}${t(232, 22, "nutrientes", { size: 10, anchor: "end", color: "#b8860b" })}</svg>`,
    },
    {
      html: `<h3>3.2 El destino de los nutrientes absorbidos</h3><p>Una vez atravesada la pared del intestino, los nutrientes siguen dos caminos. La <mark>glucosa</mark>, los <mark>aminoácidos</mark>, las vitaminas hidrosolubles, las sales y el agua pasan a los capilares sanguíneos de las vellosidades y se reúnen en la <b>vena porta</b>, que los lleva directamente al <b>hígado</b>. Allí se almacena parte de la glucosa como glucógeno, se fabrican proteínas de la sangre y se eliminan las sustancias tóxicas antes de que la sangre siga hacia el corazón.</p><p>Las <mark>grasas</mark> y las vitaminas liposolubles siguen otro camino: entran en los vasos linfáticos de las vellosidades y viajan por la <b>linfa</b>, que acaba vertiéndose a la sangre cerca del corazón. Desde allí, el aparato circulatorio reparte todos los nutrientes por el cuerpo hasta llegar a cada célula, donde se usan para obtener energía en las mitocondrias o para construir nuevas moléculas.</p>`,
      svg: L.flujo("Destino de los nutrientes absorbidos en el intestino", ["Vellosidad intestinal", "Glucosa y aminoácidos: sangre y vena porta", "Hígado: almacena y depura", "Corazón: reparto a todas las células"], "Del intestino a las células"),
    },
    {
      html: `<h3>3.3 El intestino grueso y la microbiota</h3><p>Lo que no se ha absorbido llega al <b>intestino grueso</b>, formado por el ciego (con el apéndice), el colon y el recto. Allí se <mark>absorbe la mayor parte del agua</mark> y algunas sales, y los restos se compactan formando las <b>heces</b>, que se expulsan por el ano. En el intestino grueso viven billones de bacterias: la <b>microbiota intestinal</b>. No son dañinas, sino aliadas: fermentan la fibra, fabrican vitaminas como la K y nos protegen de microbios peligrosos. Los antibióticos mal usados y una dieta pobre en fibra la empobrecen.</p><p>El <b>apéndice</b> es un pequeño saco que sale del ciego; cuando se inflama se produce una <b>apendicitis</b>, que hay que operar con urgencia. Los alimentos fermentados, como el yogur o el kéfir, y sobre todo la fibra de frutas, verduras y legumbres ayudan a mantener una microbiota diversa y sana, que se relaciona con un mejor estado de salud general.</p>`,
      svg: L.radial("Funciones de la microbiota intestinal", "Microbiota", ["Fermenta la fibra", "Fabrica vitamina K", "Defiende de microbios", "Entrena las defensas"], "var(--leaf)"),
    },
    {
      html: `<h3>3.4 La salud del aparato digestivo</h3><p>Muchas enfermedades digestivas se previenen con hábitos sencillos. La <b>caries</b> la producen bacterias que fermentan los azúcares y atacan el esmalte: se evita cepillándose tras las comidas y tomando menos dulces. La <b>gastroenteritis</b> es una infección por alimentos o agua contaminados; la previenen lavarse las manos y conservar bien la comida. El <b>estreñimiento</b> mejora con fibra, agua y ejercicio. La <b>úlcera</b> de estómago se relaciona con una bacteria, <i>Helicobacter pylori</i>, y con algunos medicamentos. Comer despacio, sin prisas y a horas regulares ayuda a todo el aparato.</p><p>Otras enfermedades frecuentes son la <b>hepatitis</b>, una inflamación del hígado causada a menudo por virus (contra algunos hay vacuna), y la <b>celiaquía</b>, en la que el gluten daña las vellosidades del intestino. El <b>alcohol</b> y el <b>tabaco</b> dañan todo el aparato: el alcohol puede provocar cirrosis hepática y ambos aumentan el riesgo de cáncer de boca, esófago y estómago. El cáncer de colon se detecta a tiempo con revisiones a partir de los 50 años.</p>`,
      svg: L.tabla("Enfermedades del aparato digestivo y su prevención", ["Enfermedad", "Causa", "Prevención"], [["Caries", "bacterias y azúcar", "cepillado, flúor"], ["Gastroenteritis", "microbios", "higiene"], ["Estreñimiento", "poca fibra", "fibra, agua"], ["Hepatitis", "virus, alcohol", "vacuna"], ["Úlcera", "Helicobacter", "tratamiento"]]),
    },
  ],
  figura: {
    titulo: "El recorrido del alimento",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Recorrido del alimento: boca, esófago, estómago, intestino delgado e intestino grueso, con lo que pasa en cada uno">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${tubo(1.05, 50, 22)}
      ${[["Boca", "masticación · saliva (amilasa) · bolo", 48], ["Esófago", "peristaltismo", 96], ["Estómago", "jugo gástrico (ácido y pepsina) · quimo", 144], ["Intestino delgado", "bilis y jugo pancreático · absorción", 196], ["Intestino grueso", "absorción de agua · heces", 248]].map(([n, d, y]) => `<rect x="250" y="${y - 22}" width="370" height="40" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${t(264, y - 2, n, { size: 14, anchor: "start", color: "var(--red)", font: D })}${t(264, y + 13, d, { size: 12, anchor: "start", weight: 400 })}`).join("")}
    </svg>`,
  },
  video: { id: "0KxRStoU0AE", titulo: "Cómo funciona su sistema digestivo - Emma Bryce", canal: "Sé Curioso — TED-Ed", vistas: 2125714, megusta: 0, busqueda: "cómo funciona el aparato digestivo" },
  ejemplos: [
    { enunciado: "Sigue el camino de un bocado de bocadillo de jamón: ¿dónde se empieza a digerir el pan (almidón) y dónde el jamón (proteínas)?",
      pasos: ["El pan tiene almidón: la amilasa salival empieza a digerirlo ya en la boca.", "El jamón tiene proteínas: la pepsina empieza a digerirlas en el estómago.", "Las dos digestiones terminan en el intestino delgado con las enzimas del páncreas y del intestino."],
      resultado: "almidón en la boca, proteínas en el estómago; todo termina en el intestino delgado." },
    { enunciado: "En un experimento se ponen tres tubos con clara de huevo (proteína) y pepsina: uno a 37 °C con ácido, otro a 37 °C sin ácido y otro a 5 °C con ácido. ¿En cuál se digiere mejor?",
      pasos: ["La pepsina actúa en el estómago, donde hay ácido.", "Las enzimas humanas funcionan mejor a la temperatura del cuerpo, unos 37 °C.", "El único tubo con las dos condiciones es el primero."],
      resultado: "en el tubo a 37 °C con ácido." },
    { enunciado: "A una persona le quitan la vesícula biliar. ¿Qué tipo de comidas le sentarán peor y por qué?",
      pasos: ["La vesícula guarda la bilis y la suelta de golpe cuando comemos.", "La bilis emulsiona las grasas.", "Sin vesícula, la bilis sale poco a poco y no hay bastante para una comida muy grasa."],
      resultado: "las comidas muy grasas, porque se digieren peor sin una buena cantidad de bilis." },
    { enunciado: "El intestino delgado mide unos 6 m y tiene unos 3 cm de diámetro. Calcula la superficie interior si fuera un tubo liso y compárala con los 30 m² reales.",
      pasos: ["Superficie de un cilindro sin bases = π · diámetro · longitud.", "π · 0,03 m · 6 m ≈ 0,57 m².", "Superficie real ≈ 30 m²: 30 / 0,57 ≈ 53."],
      resultado: "unos 0,57 m²; los pliegues, vellosidades y microvellosidades la multiplican por más de 50." },
    { enunciado: "Una persona no fabrica la enzima lactasa. ¿Qué le pasa al tomar un vaso de leche y por qué?",
      pasos: ["La lactosa es el azúcar de la leche y la lactasa la rompe en azúcares simples en el intestino delgado.", "Sin lactasa, la lactosa no se digiere ni se absorbe y llega al intestino grueso.", "Allí la fermentan las bacterias y producen gases y diarrea."],
      resultado: "tiene gases, hinchazón y diarrea: es una intolerancia a la lactosa." },
    { enunciado: "Clasifica cada hecho en la fase del proceso digestivo correspondiente: morder una manzana, la pepsina rompe proteínas, la glucosa pasa a los capilares, se expulsan las heces.",
      pasos: ["Morder la manzana es la entrada del alimento: ingestión.", "La pepsina rompe moléculas: digestión química.", "El paso de la glucosa a la sangre es la absorción.", "Expulsar los restos no digeridos es la egestión."],
      resultado: "ingestión, digestión, absorción y egestión." },
  ],
  errores: [...[
    "Pensar que la bilis es una enzima: emulsiona las grasas, pero no rompe moléculas.",
    "Creer que la digestión química empieza en el estómago: empieza en la boca con la amilasa.",
    "Decir que la mayoría de los nutrientes se absorben en el estómago: se absorben en el intestino delgado.",
    "Confundir quimo y quilo: el quimo sale del estómago y el quilo se forma en el intestino delgado.",
    "Olvidar que el hígado y el páncreas no forman parte del tubo: son glándulas anejas.",
  ], "Confundir egestión y excreción: las heces son restos no digeridos; la orina contiene desechos de las células."],
  ejercicios: [
    { nivel: "básico", ...{ q: "Ordena los órganos del tubo digestivo desde la boca hasta el ano.", sol: "Boca, faringe, esófago, estómago, intestino delgado (duodeno, yeyuno, íleon), intestino grueso (ciego, colon, recto) y ano." } },
    { nivel: "básico", ...{ q: "Diferencia digestión mecánica y química con un ejemplo de cada una.", sol: "Mecánica: masticar con los dientes o los movimientos del estómago (tritura y mezcla). Química: la pepsina rompe las proteínas (cambia las moléculas)." } },
    { nivel: "básico", ...{ q: "¿Para qué sirve la epiglotis?", sol: "Tapa la entrada de la laringe y la tráquea al tragar, para que el alimento vaya al esófago y no a las vías respiratorias." } },
    { nivel: "básico", ...{ q: "Explica qué es el peristaltismo.", sol: "Son ondas de contracción del músculo liso de la pared del tubo digestivo que empujan el alimento en un solo sentido." } },
    { nivel: "básico", ...{ q: "Completa: la lipasa digiere ___ y se produce en ___.", sol: "Grasas (lípidos); en el páncreas." } },
    { nivel: "básico", ...{ q: "Propón tres hábitos para cuidar el aparato digestivo.", sol: "Cepillarse los dientes tras las comidas, lavarse las manos antes de comer y comer fibra con suficiente agua. También: comer despacio y a horas regulares." } },
    { nivel: "básico", q: "Nombra y define las cuatro fases del proceso digestivo.", sol: "Ingestión: entrada del alimento. Digestión: transformación en moléculas sencillas. Absorción: paso de los nutrientes a la sangre y la linfa. Egestión: expulsión de las heces." },
    { nivel: "básico", q: "Indica la función de cada tipo de diente: incisivos, caninos, premolares y molares.", sol: "Incisivos: cortar. Caninos: desgarrar. Premolares y molares: triturar y moler." },
    { nivel: "básico", q: "Nombra las capas de un diente de fuera adentro.", sol: "Esmalte, dentina (marfil) y pulpa, que tiene vasos y nervios." },
    { nivel: "básico", q: "¿Qué es el bolo alimenticio y dónde se forma?", sol: "El alimento masticado y mezclado con saliva; se forma en la boca." },
    { nivel: "básico", q: "Escribe las cuatro capas de la pared del tubo digestivo.", sol: "Mucosa, submucosa, capa muscular y serosa." },
    { nivel: "básico", q: "¿Cuántos dientes tiene la dentición de leche y cuántos la definitiva?", sol: "20 la de leche y 32 la definitiva." },
    { nivel: "medio", ...{ q: "¿Por qué el estómago no se digiere a sí mismo?", sol: "Porque su pared se protege con una capa de moco y porque la pepsina se fabrica inactiva y solo se activa con el ácido dentro del estómago." } },
    { nivel: "medio", ...{ q: "¿Qué función tienen las vellosidades intestinales?", sol: "Aumentan muchísimo la superficie del intestino para absorber los nutrientes, que pasan a los capilares sanguíneos y linfáticos de su interior." } },
    { nivel: "medio", ...{ q: "¿Qué se absorbe principalmente en el intestino grueso?", sol: "Agua y algunas sales minerales; también vitaminas fabricadas por la microbiota." } },
    { nivel: "medio", ...{ q: "Cita dos funciones del hígado además de fabricar bilis.", sol: "Almacena glucosa en forma de glucógeno y elimina sustancias tóxicas, como el alcohol o restos de medicamentos." } },
    { nivel: "medio", q: "¿En qué se transforman al final de la digestión el almidón, las proteínas y los lípidos?", sol: "El almidón en glucosa; las proteínas en aminoácidos; los lípidos en ácidos grasos y glicerina." },
    { nivel: "medio", q: "Explica por qué el páncreas es una glándula mixta.", sol: "Porque vierte jugo pancreático al duodeno (función exocrina, digestiva) y fabrica insulina y glucagón que pasan a la sangre (función endocrina)." },
    { nivel: "medio", q: "Diferencia quimo y quilo indicando dónde se forma cada uno.", sol: "El quimo es la papilla ácida que se forma en el estómago. El quilo es el líquido rico en nutrientes sencillos que se forma en el intestino delgado al terminar la digestión." },
    { nivel: "medio", q: "¿Qué camino siguen la glucosa y las grasas después de absorberse?", sol: "La glucosa pasa a los capilares sanguíneos y por la vena porta llega al hígado. Las grasas pasan a los vasos linfáticos y viajan por la linfa hasta verterse a la sangre cerca del corazón." },
    { nivel: "medio", q: "¿Por qué no podemos respirar y tragar al mismo tiempo?", sol: "Porque la faringe es común a los dos aparatos y, al tragar, la epiglotis tapa la laringe; durante ese instante el aire no puede pasar." },
    { nivel: "medio", q: "Explica qué es la egestión y por qué no es lo mismo que la excreción.", sol: "La egestión es la expulsión de los restos no digeridos (heces). La excreción elimina sustancias de desecho producidas por las células, como la urea de la orina. Las heces nunca llegaron a formar parte de las células." },
    { nivel: "medio", q: "¿Por qué el bicarbonato del jugo pancreático es importante para la digestión?", sol: "Porque neutraliza la acidez del quimo que llega del estómago; las enzimas del intestino necesitan un medio casi neutro para funcionar." },
    { nivel: "medio", q: "¿Por qué el alcohol pasa tan rápido a la sangre?", sol: "Porque no necesita digerirse y se absorbe ya en el estómago y al principio del intestino delgado." },
    { nivel: "avanzado", q: "Diseña un experimento para demostrar que la saliva digiere el almidón. Indica la variable que cambias y el resultado esperado.", sol: "Dos tubos con agua y almidón; a uno se le añade saliva y al otro agua (control). Se mantienen a 37 °C y cada pocos minutos se toma una gota con lugol. En el tubo con saliva el lugol deja de ponerse azul oscuro porque ya no hay almidón; en el control sigue azul. La variable que cambia es la presencia de saliva." },
    { nivel: "avanzado", q: "Si una persona tiene una enfermedad que destruye las vellosidades intestinales, ¿qué consecuencias tendrá? ¿Qué enfermedad conoces que lo haga?", sol: "Se reduce mucho la superficie de absorción, así que absorbe menos nutrientes: pierde peso, tiene anemia, diarrea y cansancio aunque coma suficiente. Lo hace la enfermedad celíaca cuando se toma gluten." },
    { nivel: "avanzado", q: "Explica por qué tomar antibióticos sin necesidad puede provocar diarrea y otros problemas digestivos.", sol: "Los antibióticos matan bacterias, también las beneficiosas de la microbiota. Sin ellas se fermenta peor la fibra, se absorbe menos agua y pueden multiplicarse bacterias dañinas que antes estaban controladas." },
    { nivel: "avanzado", q: "Relaciona la estructura de la pared del tubo digestivo con sus funciones: ¿qué capa hace cada cosa?", sol: "La mucosa protege con moco, segrega jugos y absorbe nutrientes; la submucosa lleva vasos que recogen lo absorbido y nervios que coordinan; la capa muscular produce el peristaltismo y mezcla; la serosa envuelve y sujeta. La forma y los tejidos de cada capa se adaptan a su función." },
    { nivel: "avanzado", q: "Una comida grasa tarda más en salir del estómago que una comida rica en glúcidos. ¿Qué ventaja puede tener este retraso?", sol: "Las grasas se digieren en el duodeno gracias a la bilis y la lipasa; si llegaran todas de golpe no habría suficiente bilis y enzimas. Al vaciarse el estómago despacio, llegan poco a poco y se digieren mejor (y nos sentimos saciados más tiempo)." },
    { nivel: "avanzado", q: "Explica, con lo que sabes de enzimas, por qué una fiebre muy alta o un medio con la acidez equivocada impiden la digestión.", sol: "Las enzimas son proteínas que solo funcionan bien a una temperatura y una acidez concretas. Con temperaturas muy altas se desnaturalizan (pierden su forma) y si la acidez no es la adecuada no encajan con su sustrato, así que la reacción se frena." },
    { nivel: "avanzado", q: "Construye una tabla con el recorrido de un bocadillo de pan con queso: órgano, qué le pasa al pan y qué le pasa al queso.", sol: "Boca: se tritura todo; la amilasa empieza con el almidón del pan. Estómago: la pepsina empieza a romper las proteínas del queso. Duodeno: la bilis emulsiona la grasa del queso; amilasa, tripsina y lipasa pancreáticas continúan. Intestino delgado: se completa la digestión y se absorben glucosa, aminoácidos y ácidos grasos. Intestino grueso: se absorbe agua y se forman las heces con la fibra." },
    { nivel: "avanzado", q: "Argumenta por qué la caries es más frecuente en personas que «pican» dulces a lo largo del día que en quienes los toman de una vez.", sol: "Cada vez que tomamos azúcar, las bacterias de la placa producen ácido durante unos 20-30 minutos y el esmalte se desmineraliza. Si se pica a menudo, la boca pasa mucho más tiempo ácida y la saliva no tiene tiempo de remineralizar el esmalte." },
  ],
  quiz: [
    { q: "La digestión química se debe a…", o: ["los dientes", "las enzimas", "el peristaltismo", "la lengua"], a: 1, e: "Rompen las moléculas." },
    { q: "La amilasa salival empieza a digerir…", o: ["las proteínas", "las grasas", "el almidón", "la fibra"], a: 2, e: "Por eso el pan sabe dulce si se mastica mucho." },
    { q: "La epiglotis impide que el alimento vaya a…", o: ["la tráquea", "el esófago", "el estómago", "la nariz"], a: 0, e: "Tapa la laringe al tragar." },
    { q: "Las ondas que empujan el alimento se llaman…", o: ["deglución", "emulsión", "absorción", "peristaltismo"], a: 3, e: "Contracciones del músculo liso." },
    { q: "La pepsina actúa en…", o: ["la boca", "el estómago", "el colon", "el esófago"], a: 1, e: "En medio ácido." },
    { q: "La papilla ácida que sale del estómago es el…", o: ["quilo", "bolo", "quimo", "jugo"], a: 2, e: "Sale por el píloro." },
    { q: "La bilis…", o: ["emulsiona las grasas", "es una enzima", "digiere proteínas", "la fabrica el páncreas"], a: 0, e: "La fabrica el hígado." },
    { q: "La mayor parte de los nutrientes se absorbe en…", o: ["el estómago", "el intestino grueso", "la boca", "el intestino delgado"], a: 3, e: "Gracias a las vellosidades." },
    { q: "En el intestino grueso se absorbe sobre todo…", o: ["glucosa", "agua", "proteínas", "grasas"], a: 1, e: "Y algunas sales." },
    { q: "La microbiota intestinal fabrica…", o: ["vitamina C", "bilis", "vitamina K", "pepsina"], a: 2, e: "Entre otras funciones." },
    { q: "La sustancia más dura del cuerpo es…", o: ["el esmalte", "el hueso", "la dentina", "el cartílago"], a: 0, e: "Cubre la corona del diente." },
    { q: "La dentición de leche tiene…", o: ["32 dientes", "28 dientes", "16 dientes", "20 dientes"], a: 3, e: "La definitiva, 32." },
    { q: "La capa de la pared del tubo que produce el peristaltismo es la…", o: ["mucosa", "muscular", "serosa", "submucosa"], a: 1, e: "Músculo liso." },
    { q: "La expulsión de las heces se llama…", o: ["excreción", "absorción", "egestión", "ingestión"], a: 2, e: "No es excreción." },
    { q: "La vena porta lleva los nutrientes absorbidos al…", o: ["corazón", "pulmón", "riñón", "hígado"], a: 3, e: "Que almacena y depura." },
    { q: "Las grasas absorbidas viajan primero por…", o: ["la linfa", "la vena porta", "la bilis", "el colon"], a: 0, e: "Por los vasos linfáticos." },
    { q: "Las proteínas se digieren hasta…", o: ["glucosa", "aminoácidos", "ácidos grasos", "almidón"], a: 1, e: "Sus piezas básicas." },
    { q: "El esfínter que separa el estómago del duodeno es el…", o: ["cardias", "apéndice", "píloro", "ciego"], a: 2, e: "Regula la salida del quimo." },
    { q: "El páncreas es una glándula mixta porque fabrica…", o: ["bilis y saliva", "solo enzimas", "solo hormonas", "jugo pancreático y hormonas"], a: 3, e: "Exocrina y endocrina." },
    { q: "La hepatitis es una inflamación del…", o: ["hígado", "estómago", "colon", "apéndice"], a: 0, e: "A menudo por virus." },
  ],
  examen: [
    { q: "Las glándulas anejas son…", o: ["estómago e intestino", "glándulas salivales, hígado y páncreas", "esófago y faringe", "colon y recto"], a: 1, e: "Vierten jugos al tubo." },
    { q: "Las vellosidades intestinales sirven para…", o: ["fabricar bilis", "triturar", "aumentar la superficie de absorción", "producir ácido"], a: 2, e: "Unos 30 m² en total." },
    { q: "El ácido clorhídrico del estómago…", o: ["mata microbios y activa la pepsina", "digiere grasas", "emulsiona", "neutraliza el quimo"], a: 0, e: "Medio muy ácido." },
    { q: "La caries la provocan…", o: ["los virus", "la falta de calcio", "la bilis", "bacterias que fermentan azúcares"], a: 3, e: "Atacan el esmalte." },
    { q: "La lipasa digiere…", o: ["almidón", "grasas", "proteínas", "fibra"], a: 1, e: "Procede del páncreas." },
    { q: "El tubo digestivo de un adulto mide aproximadamente…", o: ["1 m", "3 m", "8-9 m", "20 m"], a: 2, e: "El intestino delgado, unos 6 m." },
    { q: "La enfermedad celíaca daña…", o: ["los dientes", "el hígado", "el esófago", "las vellosidades intestinales"], a: 3, e: "Por el gluten." },
    { q: "El hígado almacena glucosa en forma de…", o: ["glucógeno", "almidón", "grasa", "bilis"], a: 0, e: "Reserva de energía." },
  ],
  feynman: [...["Qué diferencia hay entre digestión mecánica y química", "Qué pasa con el alimento en cada órgano del tubo", "Cómo se absorben los nutrientes y para qué sirven las vellosidades"], "Las cuatro fases del proceso digestivo", "Qué camino siguen los nutrientes desde el intestino hasta las células"],
  mapa: mapa("APARATO DIGESTIVO", "var(--eso)", [
    ["Tubo digestivo", "boca · esófago · estómago · intestinos", "var(--red)"],
    ["Glándulas anejas", "salivales · hígado · páncreas", "#8a4a2b"],
    ["Digestión", "mecánica · química (enzimas)", "var(--pen)"],
    ["Absorción", "intestino delgado · vellosidades", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ...[
    ["Digestión química", "Rotura de las moléculas grandes en pequeñas por las enzimas."],
    ["Bolo alimenticio", "Alimento masticado y mezclado con saliva."],
    ["Peristaltismo", "Ondas de contracción que empujan el alimento por el tubo."],
    ["Quimo", "Papilla ácida que sale del estómago."],
    ["Bilis", "La fabrica el hígado; emulsiona las grasas. No es una enzima."],
    ["Jugo pancreático", "Contiene amilasa, tripsina y lipasa."],
    ["Vellosidades intestinales", "Salientes del intestino delgado que aumentan la superficie de absorción."],
    ["Microbiota intestinal", "Bacterias beneficiosas que viven en el intestino grueso."],
  ],
    ["Fases del proceso digestivo", "Ingestión, digestión, absorción y egestión."],
    ["Capas del tubo digestivo", "Mucosa, submucosa, muscular y serosa."],
    ["Vena porta", "Lleva los nutrientes absorbidos al hígado."],
    ["Esmalte", "Capa externa del diente; la sustancia más dura del cuerpo."],
  ],
  glosario: [
    ["Digestión", "Transformación de los alimentos en moléculas sencillas."],
    ["Enzima", "Proteína que acelera una reacción química sin gastarse."],
    ["Tubo digestivo", "Conducto desde la boca hasta el ano por el que pasa el alimento."],
    ["Glándula aneja", "Glándula que vierte jugos al tubo digestivo: salivales, hígado y páncreas."],
    ["Bolo alimenticio", "Alimento masticado y mezclado con saliva."],
    ["Epiglotis", "Lengüeta que tapa la laringe al tragar."],
    ["Peristaltismo", "Contracciones que empujan el contenido del tubo."],
    ["Esfínter", "Anillo muscular que regula el paso entre dos partes del tubo."],
    ["Jugo gástrico", "Jugo del estómago con ácido clorhídrico y pepsina."],
    ["Quimo", "Papilla ácida que sale del estómago."],
    ["Bilis", "Líquido del hígado que emulsiona las grasas."],
    ["Quilo", "Líquido con nutrientes sencillos del intestino delgado."],
    ["Vellosidad intestinal", "Saliente de la pared intestinal que aumenta la absorción."],
    ["Absorción", "Paso de los nutrientes a la sangre y la linfa."],
    ["Microbiota", "Conjunto de bacterias beneficiosas del intestino."],
    ["Egestión", "Expulsión de los restos no digeridos."],
  ],
  situacion: {
    titulo: "El viaje de un bocado",
    reto: "Un centro de salud quiere un recurso para explicar a pacientes y familias cómo funciona la digestión y cómo cuidarla. Vuestro grupo creará una maqueta o un vídeo corto con el recorrido de un alimento.",
    pasos: [
      "Elegid un alimento sencillo (un bocadillo, un plato de lentejas) y averiguad qué nutrientes tiene.",
      "Haced la práctica de la amilasa: almidón con saliva y prueba del lugol para comprobar la digestión química.",
      "Construid una maqueta a escala del tubo digestivo o un guion de vídeo con cada órgano y lo que le ocurre al alimento.",
      "Añadid el destino de los nutrientes absorbidos y el papel de la microbiota.",
      "Cerrad con cinco consejos de salud digestiva justificados con lo aprendido.",
    ],
    producto: "Maqueta comentada o vídeo de 3 minutos sobre el viaje de un alimento, con consejos de salud, para el centro de salud.",
    evaluacion: [
      "Exactitud del recorrido, los órganos y las enzimas.",
      "Rigor de la práctica de laboratorio y de sus conclusiones.",
      "Claridad y creatividad del producto.",
      "Utilidad de los consejos de salud.",
    ],
  },
  familias: ["Probad a masticar un trozo de pan durante un minuto y notad cómo se vuelve dulce: es la amilasa.", "Revisad juntos los hábitos de cepillado y de lavado de manos antes de comer.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Saberes básicos de «Cuerpo humano» y «Hábitos saludables» de Biología y Geología de 1º a 3º (RD 217/2022, BOE-A-2022-4975): anatomía y fisiología del aparato digestivo, digestión mecánica y química, absorción, salud bucodental y prevención de enfermedades digestivas. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Práctica de la amilasa: almidón con saliva y prueba del lugol a distintos tiempos.",
      "Modelo del tubo digestivo a escala con cuerda (8 m) en el pasillo.",
      "Experimento de emulsión: aceite y agua con y sin jabón para entender la bilis.",
      "Pepsina y clara de huevo a distintas temperaturas y acidez.",
    ],
  },
  fuentes: [...[RD, wiki("Aparato digestivo", "Aparato_digestivo"), wiki("Enzima digestiva", "Enzima_digestiva")], wiki("Microbiota intestinal", "Microbiota_intestinal")],
  revisado: "2026-11-13",
};
