// Dibujo Artístico I, 1º de Bachillerato. Tema 2, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L41");
const { marco, t, ln, rc, ci, el, pa, trazo, gris } = B;

// Graduación de los lápices de grafito de 6H a 8B.
const graduacion = (() => {
  const g = ["6H", "4H", "2H", "H", "F", "HB", "B", "2B", "4B", "6B", "8B"], w = 21;
  return marco("Graduación de los lápices de grafito: de 6H, duro y claro, a 8B, blando y oscuro",
    g.map((n, i) => `${rc(14 + i * w, 62, w - 2, 56, `fill="${gris(0.9 - i * 0.083)}" stroke="var(--line)"`)}${t(14 + i * w + w / 2 - 1, 136, n, { fs: 9, maxW: w })}`).join("") +
    `${t(14, 48, "duro · claro", { color: "var(--pen)", anchor: "start", maxW: 90, bold: 1 })}${t(246, 48, "blando · oscuro", { color: "var(--red)", anchor: "end", maxW: 90, bold: 1 })}${ln(14, 156, 246, 156, "var(--muted)", 1.2)}${t(130, 172, "H = hard · B = black · F = fine point", { color: "var(--muted)", maxW: 230 })}`);
})();

// Cuatro técnicas de sombreado en cuadrados.
const sombreados = (() => {
  const caja = (x, y) => rc(x, y, 106, 62, 'fill="var(--card)" stroke="var(--line)" rx="4"');
  const rayas = (x, cruz) => Array.from({ length: 16 }, (_, i) => ln(x + i * 7, 14, x + i * 7 - 22, 76, "var(--ink)", 1.3) + (cruz ? ln(x + i * 7 - 22, 14, x + i * 7, 76, "var(--ink)", 1.2) : "")).join("");
  const puntos = Array.from({ length: 120 }, (_, i) => { const col = i % 12, f = Math.floor(i / 12); return ci(20 + col * 8.6 + ((i * 7) % 3), 106 + f * 5.6 + ((i * 5) % 3), 0.5 + (col / 12) * 1.7, 'fill="var(--ink)"'); }).join("");
  return marco("Cuatro técnicas de sombreado: rayado, rayado cruzado, punteado y difuminado",
    `<clipPath id="a41"><rect x="14" y="14" width="106" height="62"/></clipPath><clipPath id="b41"><rect x="138" y="14" width="106" height="62"/></clipPath>
    ${caja(14, 14)}<g clip-path="url(#a41)">${rayas(14, false)}</g>${t(67, 90, "rayado", { bold: 1 })}
    ${caja(138, 14)}<g clip-path="url(#b41)">${rayas(138, true)}</g>${t(191, 90, "rayado cruzado", { bold: 1 })}
    ${caja(14, 100)}${puntos}${t(67, 176, "punteado", { bold: 1 })}
    <defs><linearGradient id="dg41"><stop offset="0" stop-color="#1c1c1c"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient></defs>${rc(138, 100, 106, 62, 'fill="url(#dg41)" stroke="var(--line)" rx="4"')}${t(191, 176, "difuminado", { bold: 1 })}`);
})();

module.exports = B.tema({
  titulo: "Materiales y técnicas",
  minutos: 100,
  objetivos: [
    "Reconocer los soportes y los materiales secos, húmedos y mixtos más usados en el dibujo artístico",
    "Elegir el grafito, el carboncillo, la tinta o el color adecuados según la intención y el soporte",
    "Aplicar con corrección las técnicas básicas: rayado, rayado cruzado, punteado, difuminado, lavado y aguada",
    "Cuidar, ordenar y conservar los materiales y los dibujos de forma responsable y sostenible",
  ],
  claves: ["soporte", "grafito", "graduación", "carboncillo", "sanguina", "tinta", "acuarela", "rayado", "difuminado", "fijativo"],
  pregunta: {
    texto: "Con el mismo modelo, dos dibujantes hacen un dibujo suave y brumoso y otro seco y nervioso. ¿Cuánto del resultado depende del material?",
    respuesta: "Mucho. El material no solo «hace marcas»: <mark>condiciona el estilo</mark>. El carboncillo invita a las manchas y al volumen; la plumilla, a la línea y la trama; el grafito, a la gradación fina. Conocer los materiales y sus técnicas es elegir <b>la voz</b> con la que quieres decir cada cosa.",
  },
  lectura: {
    titulo: "Un cuaderno de viaje y una caja de lápices",
    html: `<p>Lucía viaja a Granada con un cuaderno de papel crema, un lápiz 2B, un portaminas, un rotulador fino resistente al agua y una pequeña caja de acuarelas. Pesa poco, cabe en una mano y le permite hacer casi cualquier cosa. Frente a la Alhambra empieza con un encaje ligero a lápiz; después repasa con el rotulador las líneas principales; con tres pinceladas de acuarela sugiere el cielo, la piedra rojiza y el verde de los cipreses.</p>
    <p>No lleva más porque ya aprendió que un material que se conoce bien rinde mucho más que diez que se usan a medias. Cada herramienta tiene un comportamiento: el grafito se borra, la tinta no; el papel fino se arruga con el agua; el carboncillo mancha, pero también se funde con un dedo y da atmósfera.</p>
    <p>En este tema aprenderás las familias de materiales y sus técnicas, y a decidir con criterio cuál usar en cada caso. Es un tema muy práctico: cada apartado es una invitación a coger el material y probar.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Los soportes: papel y algo más",
      html: `<p>El <b>soporte</b> es la superficie sobre la que se dibuja. El más habitual es el <b>papel</b>, que se caracteriza por su <b>gramaje</b> (peso en gramos por metro cuadrado), su <b>grano</b> (textura) y su <b>composición</b>. Un papel de dibujo escolar ronda los 130 a 160 g/m²; para técnicas húmedas se usan 200 a 300 g/m² para que no se ondule.</p>
      <p>El <b>grano fino</b> permite líneas precisas y detalles (ideal para plumilla y lápiz duro); el <b>grano medio o grueso</b> retiene el pigmento y da textura (carboncillo, pastel, sanguina). El <b>papel satinado</b> admite poco material, y el <b>papel con textura</b> lo agarra con más facilidad. El <b>papel kraft</b>, de color pardo, y el <b>papel de color</b> permiten trabajar con luces añadidas, por ejemplo con tiza blanca.</p>
      <p>Otros soportes son la <b>cartulina</b>, el <b>cartón</b>, la <b>madera</b>, la <b>tela</b> o el <b>muro</b>. Para el aula conviene un bloc A3 de 160 g, un cuaderno de bocetos A5 y algunas hojas de papel de acuarela. Se guarda siempre <b>plano y seco</b>, protegido del sol y con hojas intermedias para evitar que los trabajos se manchen entre sí.</p>`,
      svg: B.rejilla("Tipos de papel según técnica", ["Papel", "Gramaje", "Para"], [["Boceto", "90 g", "apuntes"], ["Dibujo", "160 g", "lápiz, tinta"], ["Acuarela", "300 g", "húmedas"], ["Kraft", "120 g", "tiza, carbón"]], { t: "Papeles habituales" }),
    },
    {
      h: "El grafito y su graduación",
      html: `<p>El <b>lápiz de grafito</b> es el material fundamental. Su mina es una mezcla de grafito y arcilla: cuanta más arcilla, más <b>duro</b> y claro es el trazo; cuanto más grafito, más <b>blando</b> y oscuro. La graduación se escribe en el lápiz con letras y números:</p>
      <ul><li><b>H</b> (<i>hard</i>): duros, de 2H a 9H. Dan líneas finas y grises; se usan en dibujo técnico y para el encaje muy suave.</li>
      <li><b>HB</b> y <b>F</b>: intermedios, de uso general.</li>
      <li><b>B</b> (<i>black</i>): blandos, de 2B a 9B. Dan trazos oscuros, untuosos y fáciles de degradar; son los preferidos para sombrear.</li></ul>
      <p>Una caja básica de dibujo artístico incluye un <b>2H</b> (encaje), un <b>HB</b> (línea general), un <b>2B</b> y un <b>4B</b> (sombras) y, si se quiere, un <b>6B</b> para los negros más profundos. También existen el <b>portaminas</b> (trazo constante, sin sacapuntas) y el <b>grafito en barra</b> o <b>lápiz de grafito macizo</b> para zonas amplias.</p>
      <p>Una regla práctica: <mark>los lápices duros se usan al principio y los blandos al final</mark>. Los duros marcan el papel y dejan surco; si los usas encima de zonas blandas, rayan. Los blandos, en cambio, se corren con facilidad: protege el dibujo terminado con una hoja bajo la mano.</p>`,
      svg: graduacion,
      video: { id: "2fAcyfn2bRY", titulo: "Lápices para bosquejo, dibujo artístico y técnico", canal: "Tecniarte", vistas: 300202 },
    },
    {
      h: "Carboncillo, sanguina y conté",
      html: `<p>El <b>carboncillo</b> es un palito de madera quemada (sarmiento o sauce) que deja un trazo negro, mate y muy manchable. Se vende en distintos grosores y blandura. Permite <b>grandes masas de sombra en poco tiempo</b>, se difumina con el dedo o un trapo y se borra casi del todo con una miga de pan o una goma moldeable. Su contrapartida: <mark>se corre</mark>; los dibujos deben fijarse con fijativo.</p>
      <p>Existe también el <b>carbón prensado o en lápiz</b>, más limpio y controlado, y el <b>carbón de vid</b> o de sauce, más suave. Muchas academias de bellas artes han empezado siempre por él, porque obliga a trabajar con <b>manchas</b> antes que con contornos.</p>
      <p>La <b>sanguina</b> es una arcilla ferruginosa de color rojizo; el <b>conté</b>, una barra o lápiz de pigmento y arcilla prensados en negro, sepia o blanco. Fueron los materiales preferidos de Leonardo y de Rafael para estudios de figura: la sanguina tiene una calidez ideal para modelar la piel. Se usan sobre papel con grano y se pueden combinar con tiza blanca sobre papel de color para sacar las luces.</p>`,
      svg: B.cajas("Materiales secos de manchas", [["Carboncillo", "negro mate|se difumina"], ["Sanguina", "rojizo cálido|piel y figura"], ["Conté", "negro, sepia|barra o lápiz"], ["Tiza blanca", "luces sobre|papel de color"]], { t: "Materiales de mancha" }),
      video: { id: "7lOIjhjgTRs", titulo: "Paisaje al carboncillo para principiantes", canal: "TheMaxiArte", vistas: 463731 },
    },
    {
      h: "Tintas, plumillas y rotuladores",
      html: `<p>La <b>tinta china</b> es negra, intensa e <b>indeleble</b>: lo que se dibuja con ella no se borra. Se aplica con <b>plumilla</b> (que se moja en el tintero), con <b>pincel</b> o con <b>caña</b>, y sirve para líneas nítidas, tramas y manchas. Tiene la ventaja de producir un contraste máximo, y por eso es la técnica del cómic, del grabado y de la ilustración editorial.</p>
      <p>Los <b>rotuladores y bolígrafos de punta fina</b> (0,1 a 0,8 mm) imitan la plumilla con comodidad. Los de tinta pigmentada resisten el agua y la luz; los de base alcohol y los de base agua pueden correrse o decolorarse con el tiempo. El <b>bolígrafo</b> es perfecto para el apunte rápido, pues no se puede borrar: obliga a decidir y a aceptar el error como parte del dibujo.</p>
      <p>Como en el grafito, la clave es la <b>trama</b>: con tinta no se pueden hacer gradaciones continuas, así que los tonos se construyen a base de líneas (rayado, cruzado) o puntos (punteado). La densidad de la trama dibuja el volumen. Los grandes maestros del grabado, como Durero, lograron obras maestras con esta técnica.</p>`,
      svg: B.comparar("Materiales borrables y no borrables", ["Se borran", ["grafito", "carboncillo", "lápiz de color blando", "se rectifica"]], ["No se borran", ["tinta china", "rotulador", "bolígrafo", "se decide"]]),
    },
    {
      h: "Lápices de color y acuarelables",
      html: `<p>Los <b>lápices de color</b> tienen una mina de pigmento aglutinado con cera o con aceite. Los hay de <b>calidad escolar</b> (más cerosos, menos pigmento) y <b>profesionales</b> (más pigmento, más permanentes a la luz y con mejor mezcla). Se trabajan por <b>capas finas</b>: cuantas más capas, más intenso el color, siempre que se vaya de claro a oscuro y de menor a mayor presión.</p>
      <p>Los <b>lápices acuarelables</b> llevan un aglutinante soluble: se dibujan como lápiz y, si se pasa después un pincel húmedo, se disuelven en una mancha de acuarela. Permiten combinar la precisión del dibujo y la transparencia de la pintura húmeda.</p>
      <p>Técnicas útiles: el <b>degradado</b> (variando la presión), el <b>rayado de colores</b> (mezcla óptica: dos colores superpuestos en rayas crean uno nuevo que percibe el ojo), el <b>bruñido</b> (aplicar mucha presión con un lápiz claro para fundir las capas) y el <b>sgraffito</b> (rascar la capa con una punta para sacar el color inferior). Para sacar blancos, mejor <b>reservar</b> el papel que cubrirlos después.</p>`,
      svg: B.flujo("Capas de lápiz de color de claro a oscuro", ["Capa ligera: tono base", "Segunda capa: color local", "Tercera capa: sombras", "Bruñido: unificar y brillo"], { t: "Capas de color" }),
    },
    {
      h: "Pasteles, ceras y rotuladores de color",
      html: `<p>El <b>pastel seco</b> es pigmento puro con un poco de aglutinante en forma de barra: da <b>colores muy intensos y mates</b> que se mezclan con el dedo. Es un material a medio camino entre dibujo y pintura. Se trabaja sobre papel con grano, se protege con fijativo y se guarda con papel de seda para evitar que se corra. Existe también el <b>pastel al óleo</b> y el <b>pastel graso</b>, que no se difuminan igual pero tienen mucha cobertura.</p>
      <p>Las <b>ceras</b> (blandas) son materiales de cobertura rápida. Se pueden combinar con acuarela mediante la técnica del <b>resist</b>: la cera repele el agua y deja visibles los trazos al pintar encima. Los <b>rotuladores de color</b> (base alcohol, tipo «marker») se usan mucho en diseño, ilustración y moda para colorear con rapidez con superficies planas y degradados fluidos.</p>
      <p>Todos estos materiales piden una condición: <b>ventilación y cuidado</b>. El polvo del pastel no debe inhalarse y los rotuladores de alcohol huelen fuerte, así que se trabaja en una sala ventilada y se limpian bien las manos.</p>`,
      svg: B.cajas("Materiales de color en seco", [["Pastel seco", "mate e intenso|se difumina"], ["Pastel graso", "cobertura alta|no se mezcla igual"], ["Cera blanda", "resist con|acuarela"], ["Marker", "plano y rápido|diseño e ilustración"]], { t: "Color rápido" }),
      video: { id: "ZkjQ3XJAA9o", titulo: "Teoría del color simplificada con lápices de colores", canal: "ArteconAles", vistas: 258046 },
    },
    {
      h: "Acuarela, aguada y témpera",
      html: `<p>La <b>acuarela</b> es pigmento aglutinado con goma arábiga que se disuelve en agua. Es <b>transparente</b>: se pinta de claro a oscuro, y el blanco del papel hace de luz, por lo que se debe <mark>reservar</mark> y nunca cubrir. Se usa sobre papel grueso (mínimo 200 g) y con pinceles suaves, de pelo natural o sintético.</p>
      <p>Técnicas básicas: el <b>lavado</b> (una capa uniforme y plana), la <b>aguada degradada</b> (de más pigmento a menos, añadiendo agua), el <b>húmedo sobre húmedo</b> (los colores se funden entre sí) y el <b>húmedo sobre seco</b> (borde nítido). La <b>grisalla</b> es una pintura monocroma de tonos grises o sepias que sirve para estudiar los valores antes de pasar al color.</p>
      <p>La <b>témpera</b> o gouache es una pintura <b>opaca</b> a base de agua: se pinta con capas cubrientes y se puede corregir tapando con blanco. Es la técnica escolar por excelencia, útil para planos de color, carteles y estudios rápidos. Frente a la acuarela, que pide planificar, la témpera permite rectificar con facilidad.</p>`,
      svg: B.comparar("Acuarela frente a témpera", ["Acuarela", ["transparente", "claro a oscuro", "reserva el blanco", "no se tapa"]], ["Témpera", ["opaca", "cubre capas", "se corrige", "planos de color"]]),
    },
    {
      h: "Gomas, difuminos y otras herramientas",
      html: `<p>El dibujo no solo se hace con lo que añade materia. Las herramientas de <b>quitar</b> y de <b>trabajar</b> el dibujo son igual de importantes:</p>
      <ul><li><b>Goma de borrar blanda</b> (plástico): limpia sin dañar. La <b>goma moldeable</b> o de miga (plastilina) <i>levanta</i> el grafito y el carbón sin frotar: sirve para sacar luces.</li>
      <li><b>Goma de lápiz</b> o de precisión: para detalles pequeños y brillos nítidos.</li>
      <li><b>Difumino</b> (de papel enrollado) y <b>esfumino</b>: para suavizar y fundir tonos. Se pueden sustituir por un trozo de algodón o por el dedo.</li>
      <li><b>Sacapuntas</b>, <b>cutter</b> y <b>lija</b>: para afilar el grafito y mantener la punta limpia.</li>
      <li><b>Fijativo</b>: pulverizador que protege el carbón, el pastel y el grafito blando. Se aplica a 30 cm, en capas finas y en un lugar ventilado.</li>
      <li><b>Regla, plantilla y tablero</b>: se usan solo para comprobar, no para trazar a mano alzada.</li></ul>
      <p>Una advertencia: <b>no se usa el dedo con grafito graso en un dibujo final</b>, porque transfiere grasa y deja manchas. Y siempre se trabaja con una hoja bajo la mano para no ensuciar el papel.</p>`,
      svg: B.cajas("Herramientas de trabajo", [["Goma moldeable", "levanta luces"], ["Difumino", "funde los tonos"], ["Fijativo", "protege el dibujo"], ["Cutter y lija", "mantienen la punta"]], { t: "Más que lápices" }),
    },
    {
      h: "Técnicas de sombreado",
      html: `<p>Para dar volumen hay que crear tonos. Con materiales secos existen cuatro técnicas básicas:</p>
      <ul><li><b>Rayado</b>: líneas paralelas, más cerca o más lejos unas de otras para controlar el tono. Rápido y limpio.</li>
      <li><b>Rayado cruzado</b>: dos o tres capas de líneas con distinta dirección. Se obtienen tonos más profundos. Es la técnica del grabado.</li>
      <li><b>Punteado</b>: puntos más o menos juntos. Lento pero muy fino; ideal con tinta.</li>
      <li><b>Difuminado</b> o <b>degradado continuo</b>: tono suave y sin trazos visibles, hecho con el lápiz tumbado y la mano muy relajada o con difumino.</li></ul>
      <p>En cualquier técnica, <mark>la dirección del trazo ayuda a describir la forma</mark>: las líneas curvas siguen el volumen de una esfera o un cilindro, mientras que las rectas describen planos. Para un buen sombreado, conviene trabajar de claro a oscuro, dar capas ligeras y no apretar al principio; subir la presión solo en la zona de sombra más profunda.</p>`,
      svg: sombreados,
    },
    {
      h: "Técnicas secas, húmedas y mixtas",
      html: `<p>Los materiales se clasifican en <b>secos</b> (grafito, carboncillo, pastel, lápices de color), <b>húmedos</b> (tinta, acuarela, témpera) y <b>mixtos</b>, que combinan ambos. Cada familia tiene sus ventajas:</p>
      <ul><li>Las <b>secas</b> son limpias, cómodas, fáciles de transportar y controlables.</li>
      <li>Las <b>húmedas</b> dan manchas fluidas, transparencias y efectos imposibles de lograr en seco.</li>
      <li>Las <b>mixtas</b> aprovechan lo mejor de cada una: tinta y aguada de acuarela, lápiz y mancha de carbón, carboncillo con toques de tiza.</li></ul>
      <p>Una combinación clásica es la <b>aguada de tinta con plumilla</b>, que se emplea desde Rembrandt hasta los cómics actuales: se dibuja la línea con tinta resistente al agua y se añade el volumen con aguadas grises. Otro ejemplo es la <b>grisalla con lápiz de color</b>, en que primero se resuelve el valor y luego se aplica color por capas finas.</p>
      <p>Mezclar no significa improvisar sin criterio: primero se aplican los materiales <b>magros</b> (secos) y al final los <b>grasos</b> (ceras, pastel graso), y el húmedo se hace antes que el seco, salvo que se busque un efecto especial.</p>`,
      svg: B.capas("Orden de las capas en una técnica mixta", [["1 Grafito", "encaje suave"], ["2 Tinta", "línea final"], ["3 Aguada", "volumen"], ["4 Tiza o pastel", "luces"]], { t: "Mixta: de abajo arriba" }),
    },
    {
      h: "Cuidado, orden y sostenibilidad",
      html: `<p>Trabajar con método incluye <b>organizar el puesto</b>: una mesa limpia, buena luz (de izquierda a derecha si eres diestro), los materiales a mano, una hoja protectora bajo la mano y un trapo o toalla húmeda. Hay que <b>afilar con tiempo</b>, limpiar los pinceles con agua y jabón y cerrar bien los botes de tinta y los rotuladores.</p>
      <p>La <b>conservación</b> del trabajo también cuenta. El papel ácido amarillea con la luz: para obras que quieres conservar, conviene el papel sin ácido. Los dibujos de carboncillo o pastel se protegen con fijativo y con una hoja de papel de seda; los de grafito, entre hojas de papel vegetal. Se guardan en carpetas planas, nunca enrollados con fuerza.</p>
      <p>Por último, conviene <b>consumir con criterio</b>: aprovechar los dos lados del papel de boceto, reutilizar los recortes, preferir materiales duraderos y recargables (portaminas, estilográficas), reciclar los envases y evitar los aerosoles innecesarios. Un taller sostenible gasta menos y aprende más, porque obliga a pensar antes de trazar.</p>`,
      svg: B.cajas("Hábitos de taller", [["Puesto ordenado", "luz y hoja bajo la mano"], ["Limpieza", "pinceles y manos"], ["Conservación", "fijativo y carpeta"], ["Sostenible", "reutilizar y reciclar"]], { t: "Un buen taller" }),
    },
    {
      h: "Elegir el material según la intención",
      html: `<p>La pregunta importante no es «¿con qué material se dibuja mejor?», sino «¿qué quiero decir y con qué material lo diré mejor?». Una guía práctica:</p>
      <ul><li><b>Apunte rápido del natural</b>: bolígrafo, rotulador fino o grafito 2B en cuaderno pequeño.</li>
      <li><b>Estudio de volumen y luz</b>: grafito blando, carboncillo o conté sobre papel con grano.</li>
      <li><b>Dibujo de línea precisa o ilustración</b>: tinta, plumilla o rotulador pigmentado sobre papel satinado.</li>
      <li><b>Atmósfera, paisaje, nubes</b>: carboncillo difuminado o aguada de acuarela.</li>
      <li><b>Retrato cálido</b>: sanguina o lápices de color sobre papel crema.</li>
      <li><b>Color rápido y expresivo</b>: pastel, rotulador o témpera.</li></ul>
      <p>Al mismo tiempo, la intención marca el <b>soporte</b>, el <b>formato</b> y el <b>tiempo</b>. Una buena práctica es dibujar el mismo modelo con tres materiales distintos y escribir después qué te ha permitido y qué te ha impedido cada uno. Esa comparación personal te enseña más que cualquier tabla.</p>`,
      svg: B.rejilla("Materiales según la intención", ["Intención", "Material"], [["Apunte rápido", "bolígrafo, 2B"], ["Volumen y luz", "carbón, conté"], ["Línea limpia", "tinta, plumilla"], ["Atmósfera", "carbón, aguada"], ["Color rápido", "pastel, marker"]], { t: "Qué uso para qué" }),
      video: { id: "Urn48aWcX2Q", titulo: "Cómo dibujar con carboncillo", canal: "DrawingNinja", vistas: 348852 },
    },
  ],
  figura: {
    titulo: "Familias de materiales de dibujo",
    items: [["Grafito", "6H – 8B", "duro y claro", "blando y oscuro"], ["Carbón y conté", "manchas", "se difumina", "pide fijativo"], ["Tinta", "no se borra", "línea y trama", "plumilla, pincel"], ["Color", "capas", "lápiz, pastel", "acuarela, témpera"]],
  },
  video: { id: "7lOIjhjgTRs", titulo: "Paisaje al carboncillo para principiantes", canal: "TheMaxiArte", vistas: 463731 },
  quiz: [
    ["¿Qué es el gramaje de un papel?", ["Su grano", "Su peso en gramos por metro cuadrado", "Su color", "Su tamaño"], 1, "Se mide en g/m²; el de acuarela ronda los 300."],
    ["Para técnicas húmedas conviene un papel…", ["muy fino de 60 g", "grueso de 200 a 300 g", "satinado", "reciclado de periódico"], 1, "Un papel grueso no se ondula con el agua."],
    ["En la graduación de lápices, la H significa…", ["hard (duro)", "hueco", "humo", "húmedo"], 0, "H es dura, B es blanda (black)."],
    ["¿Qué lápiz da el trazo más oscuro?", ["2H", "HB", "F", "6B"], 3, "Los B son más blandos y oscuros; cuanto mayor el número, más blando."],
    ["Una regla práctica del grafito es…", ["usar primero los blandos y después los duros", "usar primero los duros y después los blandos", "usar siempre HB", "no mezclar nunca"], 1, "Los duros dejan surco y rayan si se usan sobre zonas blandas."],
    ["El carboncillo se caracteriza por…", ["no manchar nunca", "dar manchas mates y difuminarse con facilidad", "ser indeleble", "ser transparente"], 1, "Mancha, se difumina y requiere fijativo."],
    ["La sanguina es un material de color…", ["azul", "verde", "rojizo", "amarillo"], 2, "Arcilla ferruginosa; ideal para modelar la piel."],
    ["La tinta china se caracteriza por…", ["ser indeleble", "borrarse con facilidad", "ser transparente", "no dar contraste"], 0, "No se borra: obliga a decidir."],
    ["Para conseguir tonos con tinta se usan…", ["degradados continuos", "tramas de líneas o de puntos", "solo manchas planas", "colores"], 1, "La densidad de la trama dibuja el volumen."],
    ["Los lápices de color se trabajan mejor…", ["con una sola capa fuerte", "por capas finas de claro a oscuro", "mojados siempre", "solo con tinta"], 1, "Capas finas y presión creciente."],
    ["¿Qué es el bruñido?", ["Aplicar mucha presión con un lápiz claro para fundir capas", "Rascar la superficie", "Mojar el papel", "Pintar con témpera"], 0, "Unifica el color y da brillo."],
    ["El pastel seco da colores…", ["transparentes", "intensos y mates", "brillantes y húmedos", "solo grises"], 1, "Pigmento puro con poco aglutinante."],
    ["La acuarela es…", ["opaca", "transparente", "grasa", "solo para carteles"], 1, "Se pinta de claro a oscuro reservando el blanco del papel."],
    ["La témpera se distingue por ser…", ["transparente", "opaca y corregible", "indeleble", "seca"], 1, "Se puede tapar con capas cubrientes."],
    ["¿Qué herramienta levanta luces sin frotar?", ["Goma moldeable", "Cutter", "Regla", "Tijeras"], 0, "La goma moldeable absorbe grafito y carbón."],
    ["El rayado cruzado sirve para…", ["tonos más profundos con varias capas de líneas", "dibujar sin lápiz", "difuminar", "borrar"], 0, "Líneas de distinta dirección, típicas del grabado."],
    ["La grisalla es…", ["una pintura monocroma de grises para estudiar los valores", "un tipo de pincel", "un fijativo", "un papel"], 0, "Se resuelve primero el valor y luego se añade color."],
    ["En una técnica mixta, ¿qué se aplica antes?", ["Los grasos", "Los magros o secos", "Los marcadores", "Da igual siempre"], 1, "Magro sobre graso: nunca al revés."],
    ["El fijativo se aplica…", ["a 30 cm, en capas finas y con ventilación", "pegado al papel", "en capa gruesa", "con pincel mojado"], 0, "Protege el carbón, el pastel y el grafito blando."],
    ["Una práctica sostenible en el taller es…", ["tirar los recortes", "aprovechar ambos lados del papel y reutilizar recortes", "usar aerosoles siempre", "comprar un lápiz por dibujo"], 1, "Se gasta menos y se piensa más antes de trazar."],
  ],
  examen: [
    ["Quieres hacer un apunte rápido en el autobús. ¿Qué material eliges?", ["Acuarela y pinceles", "Bolígrafo o rotulador fino en cuaderno pequeño", "Pastel seco", "Óleo"], 1, "Es portátil, limpio y rápido."],
    ["Un estudio de volumen con grandes masas de sombra se hace bien con…", ["tinta y plumilla", "carboncillo o grafito blando", "rotuladores", "bolígrafo"], 1, "Permiten manchas y degradados."],
    ["La mezcla óptica del rayado de colores es…", ["mezclar pintura en el vaso", "superponer rayas de dos colores y que el ojo los funda", "dibujar sobre papel mojado", "usar sólo blanco y negro"], 1, "El ojo percibe un tercer color."],
    ["¿Qué ocurre si se usa un lápiz duro sobre una zona de grafito blando?", ["Se funde perfectamente", "Raya la superficie", "Se oscurece más", "Se borra"], 1, "Por eso se empieza por los duros."],
    ["Una aguada degradada se consigue…", ["sin agua", "añadiendo agua para ir bajando la intensidad del pigmento", "con una sola pincelada de témpera", "con rotulador"], 1, "De más pigmento a menos."],
    ["El «resist» con cera y acuarela funciona porque…", ["la cera repele el agua", "la cera atrae el pigmento", "la acuarela es cerosa", "el papel absorbe la cera"], 0, "La cera protege el papel del agua."],
    ["Para proteger un dibujo de pastel debe…", ["enrollarse con fuerza", "fijarse y cubrirse con papel de seda", "mojarse", "guardarse sin proteger"], 1, "Evita que se corra y se manche."],
    ["¿Qué papel eliges para tiza blanca y carboncillo con luces?", ["Papel kraft o de color medio", "Papel satinado blanco", "Papel de acuarela blanco", "Papel cebolla"], 0, "Sobre un tono medio se trabajan sombras y luces."],
  ],
  feynman: ["La graduación de los lápices y por qué se usan primero los duros", "Qué diferencia hay entre acuarela, témpera y tinta", "Cómo se consiguen tonos con rayado, cruzado, punteado y difuminado", "Cómo elegir el material según lo que quieres expresar"],
  mapa: ["MATERIALES Y TÉCNICAS", [["Soportes", "papel · gramaje · grano"], ["Secos", "grafito · carbón · pastel"], ["Húmedos", "tinta · acuarela · témpera"], ["Técnicas", "rayado · punteado · difuminado"]]],
  tarjetas: [
    ["Gramaje", "Peso del papel en g/m²; a más gramaje, más aguanta el agua."],
    ["H y B", "H, grafito duro y claro; B, blando y oscuro."],
    ["Orden de uso de los lápices", "Primero los duros (encaje) y después los blandos (sombras)."],
    ["Carboncillo", "Mancha negra mate, se difumina y pide fijativo."],
    ["Sanguina", "Arcilla rojiza ideal para el modelado de la piel."],
    ["Tinta china", "Negro indeleble: se dibuja con plumilla o pincel."],
    ["Lápiz acuarelable", "Se dibuja en seco y se disuelve con un pincel húmedo."],
    ["Bruñido", "Presión con un lápiz claro para fundir las capas de color."],
    ["Acuarela", "Transparente; se pinta de claro a oscuro y se reserva el blanco."],
    ["Témpera", "Opaca y corregible; planos de color."],
    ["Goma moldeable", "Levanta grafito y carbón para sacar luces."],
    ["Rayado cruzado", "Capas de líneas con distinta dirección para tonos profundos."],
  ],
  ejemplos: [
    ["Elige los lápices de una caja mínima para un dibujo de una naranja con volumen.", ["Encaje: 2H, trazos suaves.", "Línea y sombras medias: HB y 2B.", "Sombras profundas y sombra proyectada: 4B."], "Caja de 4 lápices: 2H, HB, 2B y 4B."],
    ["Se pide un degradado de claro a oscuro de 5 cm con rayado. ¿Cómo se hace?", ["Dibuja rayas paralelas muy separadas en el extremo claro.", "Acércalas progresivamente.", "En la zona oscura, añade una segunda capa en otra dirección."], "Rayas separadas → juntas → cruzadas: degradado por densidad."],
    ["Quieres un paisaje con niebla en carboncillo. Descríbelo paso a paso.", ["Frota carbón sobre el papel y extiéndelo con un trapo para un fondo gris.", "Levanta nubes y luces con goma moldeable.", "Añade en primer plano árboles oscuros y fija."], "Fondo difuminado, luces levantadas y primer plano contrastado: sensación de niebla."],
    ["Quieres una ilustración de un gato con tinta y un poco de color. ¿Qué orden de capas sigues?", ["Boceto con lápiz 2H.", "Línea con tinta pigmentada o resistente al agua.", "Borrar el grafito y dar aguada de acuarela."], "Grafito → tinta → borrado → acuarela."],
    ["Un dibujo de lápiz graso se ha corrido en la carpeta. ¿Qué hacer la próxima vez?", ["Aplicar fijativo en capa fina y ventilada.", "Poner papel de seda o vegetal entre las hojas.", "Guardar plano y sin presión."], "Fijativo + papel de seda + guardado plano."],
    ["Prepara el material para una salida de dibujo de 90 minutos y un peso mínimo.", ["Cuaderno A5 de 130 g.", "Portaminas 2B, lápiz 4B, goma moldeable.", "Rotulador fino resistente al agua y mini acuarelas con pincel de agua."], "Bolsa ligera: cuaderno, dos lápices, goma, rotulador y mini acuarelas."],
  ],
  errores: [
    "Empezar con un lápiz blando y oscuro: luego es imposible corregir y el papel se ensucia.",
    "Usar el dedo con grafito graso en un dibujo final: transfiere grasa y deja huellas.",
    "Pintar acuarela cubriendo los blancos con blanco en lugar de reservarlos.",
    "Apretar demasiado desde el principio y surcar el papel.",
    "Guardar los dibujos de carbón sin fijativo ni papel de protección.",
    "Creer que más material significa mejores dibujos: conviene conocer pocos materiales a fondo.",
  ],
  ejercicios: {
    b: [
      ["Define soporte y cita cuatro ejemplos.", "Superficie sobre la que se dibuja. Ejemplos: papel, cartulina, cartón, madera, tela o muro."],
      ["¿Qué significan H, B y HB en un lápiz?", "H: duro (hard), da trazo claro; B: blando (black), da trazo oscuro; HB: intermedio."],
      ["Ordena de más claro a más oscuro: 4B, H, HB, 6B, 2H.", "2H, H, HB, 4B, 6B."],
      ["Di dos ventajas del carboncillo y un inconveniente.", "Ventajas: masas de sombra rápidas y fácil difuminado. Inconveniente: se corre y exige fijativo."],
      ["¿Qué color tiene la sanguina y para qué se ha usado tradicionalmente?", "Rojiza (arcilla ferruginosa); para estudios de figura y modelado de la piel."],
      ["¿Qué ocurre con la tinta china si te equivocas?", "No se borra: es indeleble, por eso hay que encajar a lápiz primero o aceptar el error."],
      ["Nombra las cuatro técnicas básicas de sombreado.", "Rayado, rayado cruzado, punteado y difuminado."],
      ["¿Para qué sirve una goma moldeable?", "Para levantar grafito o carbón y sacar luces sin frotar ni dañar el papel."],
      ["¿Qué es un fijativo y cómo se aplica?", "Pulverizador que protege el dibujo. Se aplica a unos 30 cm, en capas finas y en un lugar ventilado."],
      ["¿Qué diferencia hay entre acuarela y témpera?", "La acuarela es transparente y la témpera opaca y corregible."],
      ["¿Qué es una grisalla?", "Pintura monocroma en grises o sepias para estudiar valores."],
      ["Cita dos hábitos de un taller sostenible.", "Aprovechar los dos lados del papel, reutilizar recortes, usar portaminas o estilográficas recargables y reciclar envases."],
    ],
    m: [
      ["Explica por qué el papel de acuarela es más grueso que el de boceto.", "Porque debe absorber agua sin ondularse ni romperse; por eso es de 200 a 300 g/m²."],
      ["¿Qué papel y qué material elegirías para un retrato cálido? Justifica.", "Papel crema con algo de grano y sanguina o lápices de color: la calidez de la sanguina favorece el modelado de la piel."],
      ["Describe cómo harías un degradado continuo con grafito.", "Con un 2B tumbado y presión muy suave en la zona clara, aumentando la presión y pasando a 4B en la oscura, y fundiendo con difumino."],
      ["¿Por qué en una técnica mixta se aplica lo magro antes que lo graso?", "Porque los materiales grasos repelen o cubren a los demás; si se ponen primero, ya no se pueden aplicar encima capas secas o acuosas."],
      ["Un alumno dibuja con rotulador sin boceto y se equivoca en el encaje. ¿Qué le aconsejas?", "Encajar antes con un lápiz duro y suave y, una vez comprobadas las proporciones, entintar y borrar el grafito."],
      ["Explica la mezcla óptica con lápices de color usando un ejemplo.", "Rayas finas alternas de azul y amarillo se perciben como verde; es un verde más vivo que el mezclado con presión."],
      ["¿Qué diferencia hay entre húmedo sobre húmedo y húmedo sobre seco en acuarela?", "En el primero los colores se funden con bordes suaves; en el segundo se aplica pintura sobre capa seca y el borde queda nítido."],
      ["Compara el punteado con el rayado: ventajas e inconvenientes.", "El punteado es fino y sutil pero lento; el rayado es rápido y limpio pero deja líneas visibles. Ambos construyen tono por densidad."],
      ["¿Qué problemas tendría dibujar con grafito 6H un sombreado intenso?", "Surcaría el papel, sería casi imposible oscurecer y brillaría; para sombras se usan blandos (4B a 8B)."],
      ["Ordena los pasos de limpieza del puesto después de una sesión de acuarela.", "Aclarar y limpiar pinceles, secar las paletas, cerrar los tubos, guardar el papel plano y recoger los residuos."],
    ],
    a: [
      ["Diseña un kit de dibujo de 10 € para un estudiante: materiales y precio orientativo.", "Portaminas 2B (2 €), minas HB y 4B (1,5 €), goma moldeable (1 €), bolígrafo fino (1 €), cuaderno de bocetos A5 (3 €), sacapuntas y difumino (1,5 €). Total aprox. 10 €."],
      ["Elabora un plan para comparar tres materiales con un mismo modelo y analiza qué anotar.", "Elegir un bodegón sencillo; dibujarlo 15 minutos con grafito, carbón y tinta; anotar tiempo, facilidad de corrección, calidad de los valores y sensación. Conclusión personal sobre cuál usar para qué."],
      ["Analiza por qué los grandes maestros usaban sanguina para estudios de figura.", "Por su calidez similar a la piel, su facilidad para modelar con degradados sutiles y su carácter a medio camino entre el dibujo y el color; además permite ver el estudio con una sola herramienta."],
      ["Un dibujo en carboncillo está terminado y se va a transportar. Describe un procedimiento de protección completo.", "Aplicar fijativo en capas finas a 30 cm; dejar secar; colocar papel de seda o vegetal encima; guardar plano en carpeta rígida sin apilar peso encima."],
      ["Explica la técnica de resist con cera y acuarela y cuándo usarla.", "Se dibujan áreas con cera (vela, pastel graso) antes de dar la acuarela; la cera repele el agua y deja el papel en blanco. Útil para destellos, espuma, nieve o texturas."],
      ["Elige tres técnicas de sombreado y justifica cuál emplearías en una esfera de metal brillante.", "Un difuminado con zonas bien contrastadas y brillos reservados con goma; el rayado cruzado en bordes oscuros. El metal pide contrastes abruptos y reflejos nítidos."],
      ["Propón una secuencia de materiales para una ilustración de una calle con lluvia y justifícala.", "Encaje con 2H, línea con tinta pigmentada, aguadas grises de acuarela húmedo sobre húmedo para la lluvia, y toques de témpera blanca para brillos en el suelo mojado."],
      ["Analiza el impacto ambiental de un taller de dibujo y plantea tres medidas.", "Gasto de papel, plásticos de los rotuladores y aerosoles. Medidas: papel reciclado o por ambas caras, portaminas y recargas, y fijativo solo en la obra final y en lugar ventilado."],
    ],
  },
  glosario: [
    ["Soporte", "Superficie sobre la que se dibuja o pinta."],
    ["Gramaje", "Peso del papel en gramos por metro cuadrado."],
    ["Grano", "Textura de la superficie del papel."],
    ["Grafito", "Mineral de carbono con el que se fabrica la mina del lápiz."],
    ["Graduación", "Escala de dureza de los lápices, de 9H a 9B."],
    ["Carboncillo", "Palo de madera carbonizada que produce trazo negro mate."],
    ["Sanguina", "Pigmento rojizo de arcilla ferruginosa, usado en dibujo desde el Renacimiento."],
    ["Conté", "Barra prensada de pigmento y arcilla, en negro, sepia o blanco."],
    ["Fijativo", "Pulverizador que protege un dibujo para que no se corra."],
    ["Plumilla", "Instrumento metálico que se moja en tinta para dibujar."],
    ["Aguada", "Capa transparente de pintura diluida en agua."],
    ["Grisalla", "Pintura monocroma en grises para estudiar los valores."],
    ["Bruñido", "Presión sobre las capas de color para fundirlas y darles brillo."],
    ["Difuminar", "Suavizar un tono frotándolo para eliminar el trazo visible."],
    ["Reserva", "Zona del papel que se deja en blanco para que actúe de luz."],
    ["Técnica mixta", "Combinación de materiales secos y húmedos en una misma obra."],
  ],
  situacion: {
    titulo: "El catálogo de marcas",
    reto: "Entre toda la clase se crea un catálogo visual de los materiales del aula, con muestras, pruebas de técnica y recomendaciones de uso.",
    pasos: [
      "Reparte los materiales por equipos (grafito, carbón y conté, tinta, color seco, color húmedo, mixtas).",
      "Cada equipo prepara una ficha A4 con escala de valores, cuatro técnicas de sombreado y un pequeño dibujo de una esfera.",
      "Anota en la ficha ventajas, inconvenientes, precio y cuidados del material.",
      "Prueba cada material con un mismo objeto (una manzana) y comparad los resultados en una puesta en común.",
      "Reunid las fichas en un catálogo encuadernado y exponedlo en el aula.",
    ],
    producto: "Un catálogo de materiales con fichas, muestras y un cuadro comparativo, usable por los cursos siguientes.",
    evaluacion: [
      "Las muestras son ordenadas, y reflejan con claridad las posibilidades del material.",
      "Las técnicas están ejecutadas con control (tonos continuos, tramas regulares).",
      "La ficha incluye información precisa de ventajas, inconvenientes y cuidados.",
      "El catálogo es útil: permite elegir un material según la intención.",
    ],
  },
  familias: [
    "Dejadle un rincón con buena luz y una caja con pocos materiales bien elegidos.",
    "Preguntadle qué material le ha gustado más esta semana y por qué.",
    "Reutilizad papel por la otra cara y guardad los dibujos planos en una carpeta.",
    "Ventilad la habitación cuando use fijativo, pastel o rotuladores de alcohol.",
  ],
  saberes: "Materiales y técnicas del dibujo artístico: soportes, grafito, carboncillo, tintas, lápices de color, pastel, acuarela y técnicas mixtas; técnicas de sombreado; conservación y uso responsable y sostenible de los materiales.",
  ideas: [
    "Dedicar una sesión a una «feria de materiales» con muestras por equipos.",
    "Proponer la misma naturaleza muerta en tres materiales y comparar los resultados.",
    "Organizar un taller de fijado y conservación con ejemplos de dibujos viejos.",
    "Introducir la noción de huella ecológica del material de dibujo.",
  ],
  fuentes: [
    { t: "Graduación de la dureza de los lápices, Wikipedia en español", url: "https://es.wikipedia.org/wiki/L%C3%A1piz" },
    { t: "Acuarela, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Acuarela" },
    { t: "Carboncillo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Carboncillo" },
  ],
});
