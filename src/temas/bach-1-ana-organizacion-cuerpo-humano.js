// Anatomía Aplicada, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L43");

// Planos anatómicos sobre una silueta: sagital (vertical de frente), frontal (rectángulo en perspectiva) y transversal (horizontal).
const planos = B.lienzo("Silueta humana en posición anatómica cortada por los planos sagital, frontal y transversal", `
  ${B.silueta(70, 42, 0.95, "var(--ink)")}
  <path d="M70 20 V 168" stroke="var(--pen)" stroke-width="3" stroke-dasharray="6 4"/>
  <path d="M28 104 H 112" stroke="var(--red)" stroke-width="3" stroke-dasharray="6 4"/>
  <rect x="142" y="36" width="108" height="30" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
  ${B.tx(196, 56, "Sagital: der. · izq.", { fs: 11, maxW: 100, bold: true, color: "var(--pen)" })}
  <rect x="142" y="76" width="108" height="30" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>
  ${B.tx(196, 96, "Frontal: ant. · post.", { fs: 11, maxW: 100, bold: true, color: "var(--leaf)" })}
  <rect x="142" y="116" width="108" height="30" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>
  ${B.tx(196, 136, "Transversal: sup. · inf.", { fs: 11, maxW: 100, bold: true, color: "var(--red)" })}`, "Planos anatómicos");

// Bucle de retroalimentación negativa.
const bucle = B.lienzo("Bucle de retroalimentación negativa: estímulo, receptor, centro de control, efector y respuesta que corrige", `
  <defs><marker id="anaRet" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
  ${[["Estímulo", 130, 46, "var(--red)"], ["Receptor", 214, 92, "var(--pen)"], ["Centro de control", 130, 140, "var(--leaf)"], ["Efector", 46, 92, "var(--sun)"]].map(([t, x, y, c]) => `<rect x="${x - 44}" y="${y - 14}" width="88" height="28" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${B.tx(x, y + 4, t, { fs: 11, maxW: 80, bold: true, color: c })}`).join("")}
  <path d="M170 52 Q 205 60 210 76" fill="none" stroke="var(--muted)" stroke-width="2" marker-end="url(#anaRet)"/>
  <path d="M206 108 Q 196 132 176 136" fill="none" stroke="var(--muted)" stroke-width="2" marker-end="url(#anaRet)"/>
  <path d="M84 136 Q 62 130 52 108" fill="none" stroke="var(--muted)" stroke-width="2" marker-end="url(#anaRet)"/>
  <path d="M52 76 Q 60 56 88 50" fill="none" stroke="var(--muted)" stroke-width="2" marker-end="url(#anaRet)"/>
  ${B.tx(130, 90, "la respuesta", { fs: 10, maxW: 64, color: "var(--muted)" })}${B.tx(130, 104, "corrige", { fs: 10, maxW: 64, color: "var(--muted)" })}`, "");

module.exports = B.tema({
  titulo: "La organización del cuerpo humano",
  minutos: 110,
  objetivos: [
    "Describir los niveles de organización del cuerpo humano, desde las biomoléculas hasta el organismo",
    "Reconocer los cuatro tipos de tejidos y relacionar su estructura con su función",
    "Enumerar los aparatos y sistemas del cuerpo y las funciones vitales que realizan",
    "Usar con precisión la posición anatómica, los planos, los ejes y los términos de dirección",
    "Explicar la homeostasis y los mecanismos de retroalimentación negativa y positiva",
  ],
  claves: ["nivel de organización", "célula", "tejido", "órgano", "aparato", "sistema", "posición anatómica", "plano sagital", "plano frontal", "plano transversal", "homeostasis", "retroalimentación"],
  pregunta: {
    texto: "Un médico dice que una herida está «en la cara lateral del muslo, proximal a la rodilla». ¿Por qué no dice simplemente «en un lado de la pierna, un poco arriba»?",
    respuesta: "Porque las palabras cotidianas cambian según cómo esté colocada la persona. La anatomía usa una <mark>posición de referencia</mark> (la posición anatómica) y un vocabulario fijo: <b>lateral</b> significa alejado de la línea media y <b>proximal</b>, más cerca del tronco. Así cualquier profesional, en cualquier país, localiza el mismo punto sin dudas.",
  },
  lectura: {
    titulo: "Treinta billones de piezas que se entienden",
    html: `<p>Tu cuerpo está formado por unos treinta billones de células, más que estrellas hay en la Vía Láctea. Ninguna de ellas sabe que forma parte de una persona que estudia, baila o juega al baloncesto. Y, sin embargo, trabajan juntas con una precisión asombrosa: cuando subes corriendo una escalera, miles de fibras musculares se contraen en el orden correcto, el corazón late más deprisa, los pulmones ventilan más aire y la piel empieza a sudar para que no te sobrecalientes.</p>
    <p>Esa coordinación no es magia. Las células se agrupan en tejidos, los tejidos en órganos y los órganos en aparatos y sistemas que se reparten el trabajo. Todos comparten un objetivo: mantener estable el medio interno, aunque fuera haga frío o calor, comas mucho o nada, descanses o hagas ejercicio.</p>
    <p>Conocer esta organización es útil para quien quiere dedicarse a la medicina, la fisioterapia o la enfermería, pero también para un actor que cuida su voz, una bailarina que protege sus rodillas o cualquier persona que quiere entrenar sin lesionarse. En este tema aprenderás el mapa y el idioma del cuerpo humano: el punto de partida de toda la materia.</p>`,
  },
  secciones: [4, 5, 4],
  bloques: [
    {
      h: "Qué estudia la anatomía aplicada",
      html: `<p>La <b>anatomía</b> estudia la forma y la estructura del cuerpo: qué partes tiene, cómo son y dónde están. La <b>fisiología</b> estudia cómo funcionan esas partes. Las dos son inseparables, porque la forma de un órgano explica su función: los alvéolos pulmonares son finísimos para que el oxígeno los atraviese, y el fémur es un tubo hueco porque así resiste mucho con poco peso.</p>
      <p>La <b>anatomía aplicada</b> pone estos conocimientos al servicio de la actividad humana: el movimiento, el deporte, las artes escénicas, la salud y el trabajo. Se apoya en otras disciplinas:</p>
      <ul><li><b>Anatomía descriptiva y topográfica</b>: describe cada órgano y las regiones del cuerpo.</li>
      <li><b>Histología</b>: estudia los tejidos al microscopio.</li>
      <li><b>Biomecánica</b>: aplica las leyes de la física al movimiento del cuerpo.</li>
      <li><b>Fisiología del ejercicio</b>: estudia cómo responde y se adapta el organismo a la actividad física.</li>
      <li><b>Nutrición y promoción de la salud</b>: relacionan los hábitos con el bienestar.</li></ul>
      <p>En esta materia el cuerpo se estudia como un <mark>instrumento de expresión y de movimiento</mark>: el objetivo no es memorizar nombres, sino comprender cómo funciona para usarlo y cuidarlo mejor.</p>`,
      svg: B.estrella("La anatomía aplicada y las disciplinas que la apoyan", "Anatomía aplicada", ["Anatomía", "Fisiología", "Histología", "Biomecánica", "Nutrición", "Salud"]),
    },
    {
      h: "Los niveles de organización",
      html: `<p>La materia viva se organiza en <b>niveles</b> de complejidad creciente. Cada nivel tiene propiedades nuevas que no existen en el anterior: una molécula de ATP no está viva, pero una célula sí.</p>
      <ol><li><b>Nivel químico</b>: átomos (carbono, hidrógeno, oxígeno, nitrógeno…) que forman moléculas y biomoléculas (agua, glúcidos, lípidos, proteínas, ácidos nucleicos).</li>
      <li><b>Nivel celular</b>: la <b>célula</b> es la unidad estructural y funcional más pequeña capaz de realizar las funciones vitales. Hay unos 200 tipos de células en el cuerpo humano.</li>
      <li><b>Nivel tisular</b>: un <b>tejido</b> es un conjunto de células semejantes, con un mismo origen, que realizan una función común, junto con la matriz que las rodea.</li>
      <li><b>Nivel de órgano</b>: un <b>órgano</b> está formado por varios tejidos que colaboran en una función. El estómago tiene epitelio, músculo liso, tejido conjuntivo y nervios.</li>
      <li><b>Nivel de aparato o sistema</b>: conjunto de órganos que trabajan coordinados (aparato digestivo, sistema nervioso).</li>
      <li><b>Organismo</b>: el ser humano completo, en el que todos los sistemas están integrados.</li></ol>
      <p>Entender estos niveles ayuda a localizar los problemas: una lesión de ligamento es un problema de tejido; una anemia, de células de la sangre; un infarto, de un órgano que afecta a todo el sistema.</p>`,
      svg: B.capas("Niveles de organización del cuerpo humano de lo simple a lo complejo", [["Químico", "átomos y biomoléculas"], ["Celular", "la unidad de vida"], ["Tisular", "células semejantes"], ["Órgano", "varios tejidos"], ["Sistema", "órganos coordinados"], ["Organismo", "el ser humano"]]),
      video: { id: "SmTsPG4A_-s", titulo: "Niveles de organización del cuerpo humano - Bio[ESO]sfera", canal: "Bio[ESO]sfera", vistas: 133728 },
    },
    {
      h: "La composición química del cuerpo",
      html: `<p>Cerca del 96 % de la masa corporal se debe a cuatro <b>bioelementos primarios</b>: oxígeno, carbono, hidrógeno y nitrógeno. Les siguen el calcio y el fósforo (huesos), y en pequeñas cantidades el potasio, el sodio, el cloro y el magnesio. Los <b>oligoelementos</b>, como el hierro, el yodo o el zinc, se necesitan en cantidades mínimas, pero su falta causa enfermedades: sin hierro no se forma hemoglobina; sin yodo, la tiroides no fabrica sus hormonas.</p>
      <p>Las <b>biomoléculas</b> son de dos tipos:</p>
      <ul><li><b>Inorgánicas</b>: el <mark>agua</mark>, que supone alrededor del 60 % de la masa de un adulto (algo más en los niños y en las personas con mucha masa muscular, y menos en los tejidos grasos), y las sales minerales.</li>
      <li><b>Orgánicas</b>: los <b>glúcidos</b> (energía rápida, como la glucosa y el glucógeno), los <b>lípidos</b> (reserva de energía, membranas y algunas hormonas), las <b>proteínas</b> (estructura, enzimas, transporte, defensa y contracción muscular) y los <b>ácidos nucleicos</b> (ADN y ARN, que guardan y expresan la información genética).</li></ul>
      <p>El agua es el disolvente en el que ocurren las reacciones del metabolismo, transporta sustancias, amortigua golpes (líquido cefalorraquídeo, líquido sinovial) y regula la temperatura gracias a su elevado calor específico. Una pérdida del 2 % del agua corporal ya reduce el rendimiento físico y mental.</p>`,
      svg: B.barras("Composición aproximada de la masa corporal de un adulto", [["Agua", 60], ["Proteínas", 17], ["Lípidos", 15], ["Minerales", 6], ["Glúcidos", 1]], { t: "Masa corporal (%)", unidad: " %" }),
    },
    {
      h: "La célula humana",
      html: `<p>Las células humanas son <b>eucariotas</b>: tienen un núcleo rodeado de membrana. Aunque las hay de formas muy distintas (largas fibras musculares, neuronas ramificadas, glóbulos rojos con forma de disco), todas comparten tres partes:</p>
      <ul><li><b>Membrana plasmática</b>: una doble capa de lípidos con proteínas que separa la célula del exterior y controla qué entra y qué sale. En ella están los receptores que reciben señales de hormonas y neurotransmisores.</li>
      <li><b>Citoplasma</b>: el medio interno (citosol) y los <b>orgánulos</b>. Las <b>mitocondrias</b> obtienen energía en forma de ATP a partir de los nutrientes y el oxígeno; son muy abundantes en las fibras musculares que trabajan en esfuerzos largos. El <b>retículo endoplasmático</b> y el <b>aparato de Golgi</b> fabrican y empaquetan proteínas y lípidos; los <b>ribosomas</b> sintetizan proteínas; los <b>lisosomas</b> digieren materiales; el <b>citoesqueleto</b> da forma y permite el movimiento.</li>
      <li><b>Núcleo</b>: contiene el ADN, que dirige la actividad de la célula.</li></ul>
      <p>Cada célula realiza las tres <b>funciones vitales</b>: <b>nutrición</b> (toma materia y energía), <b>relación</b> (responde a estímulos) y <b>reproducción</b> (se divide por mitosis). Algunas, como las neuronas o las fibras del músculo cardíaco, apenas se dividen en el adulto: por eso sus lesiones son difíciles de reparar.</p>`,
      svg: B.lienzo("Esquema de una célula humana con membrana, citoplasma, núcleo y mitocondrias", `
        <ellipse cx="96" cy="100" rx="78" ry="58" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/>
        <circle cx="96" cy="100" r="22" fill="var(--sun)" fill-opacity=".35" stroke="var(--sun)" stroke-width="2.5"/>
        <ellipse cx="54" cy="76" rx="14" ry="7" fill="none" stroke="var(--red)" stroke-width="2.5"/><path d="M44 76 q5 -6 10 0 t10 0" fill="none" stroke="var(--red)" stroke-width="1.5"/>
        <ellipse cx="140" cy="122" rx="14" ry="7" fill="none" stroke="var(--red)" stroke-width="2.5"/><path d="M130 122 q5 -6 10 0 t10 0" fill="none" stroke="var(--red)" stroke-width="1.5"/>
        <path d="M120 70 q10 6 0 12 q-10 6 0 12" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>
        ${[[70, 130], [80, 136], [118, 84], [60, 112]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.5" fill="var(--ink)"/>`).join("")}
        ${B.tx(214, 50, "Membrana", { fs: 11, maxW: 80, bold: true, color: "var(--pen)" })}${B.tx(214, 80, "Núcleo (ADN)", { fs: 11, maxW: 80, bold: true, color: "var(--sun)" })}
        ${B.tx(214, 110, "Mitocondria", { fs: 11, maxW: 80, bold: true, color: "var(--red)" })}${B.tx(214, 140, "Retículo", { fs: 11, maxW: 80, bold: true, color: "var(--leaf)" })}`, "La célula eucariota"),
    },
    {
      h: "El tejido epitelial",
      html: `<p>El cuerpo humano tiene solo <b>cuatro tipos básicos de tejidos</b>: epitelial, conectivo, muscular y nervioso. Todos los órganos se construyen combinándolos.</p>
      <p>El <b>tejido epitelial</b> está formado por células muy unidas entre sí, con muy poca sustancia entre ellas, que se apoyan sobre una <b>membrana basal</b>. No tiene vasos sanguíneos: se nutre por difusión desde el tejido conjuntivo de debajo. Se renueva con rapidez. Hay dos grandes tipos:</p>
      <ul><li><b>Epitelio de revestimiento</b>: cubre la superficie del cuerpo y tapiza las cavidades y conductos. Según el número de capas es <b>simple</b> (una capa, para intercambiar sustancias, como en los alvéolos y los capilares) o <b>estratificado</b> (varias capas, para proteger, como en la piel o la boca). Según la forma de sus células es plano, cúbico o cilíndrico. Algunos tienen <b>cilios</b>, como el de la tráquea, que barre el moco hacia la faringe.</li>
      <li><b>Epitelio glandular</b>: forma las <b>glándulas</b>. Las <b>exocrinas</b> vierten su producto por un conducto al exterior o a una cavidad (glándulas sudoríparas, salivales); las <b>endocrinas</b> vierten hormonas a la sangre (tiroides, suprarrenales).</li></ul>
      <p>La <b>epidermis</b> es un epitelio estratificado queratinizado: sus capas externas son células muertas llenas de queratina que nos protegen de la deshidratación, los microbios y los roces.</p>`,
      svg: B.comparar("Epitelio de revestimiento frente a epitelio glandular", ["Revestimiento", ["cubre y tapiza", "simple: intercambia", "estratificado: protege", "piel, alvéolos"]], ["Glandular", ["fabrica secreciones", "exocrinas: conducto", "endocrinas: sangre", "sudor, hormonas"]]),
    },
    {
      h: "Los tejidos conectivos",
      html: `<p>Los <b>tejidos conectivos</b> unen, sostienen y protegen a los demás. Tienen pocas células separadas por mucha <b>matriz extracelular</b>, formada por fibras (de <b>colágeno</b>, resistentes a la tracción, y <b>elásticas</b>) y una sustancia fundamental. Las propiedades de la matriz determinan las del tejido:</p>
      <ul><li><b>Conjuntivo laxo</b>: rellena espacios entre órganos y bajo la piel.</li>
      <li><b>Conjuntivo denso</b>: con haces de colágeno paralelos forma <b>tendones</b> (unen músculo y hueso) y <b>ligamentos</b> (unen hueso con hueso). Tiene pocos vasos, por eso cicatriza despacio.</li>
      <li><b>Adiposo</b>: sus células, los adipocitos, almacenan grasa como reserva de energía y aislante térmico, y protegen órganos.</li>
      <li><b>Cartilaginoso</b>: matriz flexible y resistente, sin vasos. El cartílago <b>hialino</b> cubre las superficies articulares; el <b>fibroso</b> forma los meniscos y los discos intervertebrales; el <b>elástico</b>, la oreja.</li>
      <li><b>Óseo</b>: matriz endurecida con sales de calcio y fósforo. Es el tejido de los huesos (se estudia en el tema 2).</li>
      <li><b>Sangre</b>: un tejido conectivo líquido. Su matriz es el <b>plasma</b> y sus elementos son los glóbulos rojos, los glóbulos blancos y las plaquetas.</li></ul>`,
      svg: B.cajas("Tipos de tejido conectivo y ejemplos", [["Denso", "tendones|ligamentos"], ["Adiposo", "reserva|aislante"], ["Cartílago", "articulaciones|meniscos"], ["Óseo", "huesos|calcio"], ["Sangre", "plasma|células"], ["Laxo", "relleno|bajo la piel"]], { t: "Tejidos conectivos", cols: 3 }),
      video: { id: "Ryw49mNMCPc", titulo: "Los TEJIDOS del cuerpo humano (Epitelial, conectivo, muscular y nervioso)", canal: "Bio[ESO]sfera", vistas: 143574 },
    },
    {
      h: "El tejido muscular",
      html: `<p>El <b>tejido muscular</b> está formado por células alargadas, las <b>fibras musculares</b>, capaces de <mark>contraerse</mark> gracias a dos proteínas, la actina y la miosina. Hay tres tipos:</p>
      <table class="tb"><tr><th>Tipo</th><th>Aspecto</th><th>Control</th><th>Dónde está</th></tr>
      <tr><td><b>Esquelético</b></td><td>fibras largas, con estrías y muchos núcleos</td><td>voluntario</td><td>músculos que mueven el esqueleto</td></tr>
      <tr><td><b>Cardíaco</b></td><td>fibras estriadas ramificadas y unidas por discos intercalares</td><td>involuntario y automático</td><td>pared del corazón (miocardio)</td></tr>
      <tr><td><b>Liso</b></td><td>células en huso, sin estrías, un núcleo</td><td>involuntario</td><td>vasos, estómago, intestino, vejiga</td></tr></table>
      <p>El músculo esquelético se contrae rápido y con fuerza, pero se fatiga. El cardíaco no se fatiga nunca: late unas 100 000 veces al día y tiene su propio marcapasos. El liso se contrae despacio y puede mantener la contracción durante mucho tiempo, como en las paredes de las arterias.</p>
      <p>Además de producir movimiento, los músculos mantienen la postura, estabilizan las articulaciones y producen calor: al tiritar, las contracciones rápidas del músculo esquelético generan calor para mantener la temperatura corporal.</p>`,
      svg: B.rejilla("Comparación de los tres tipos de tejido muscular", ["Tipo", "Estrías", "Control"], [["Esquelético", "sí", "voluntario"], ["Cardíaco", "sí", "involuntario"], ["Liso", "no", "involuntario"]], { t: "Tejido muscular" }),
    },
    {
      h: "El tejido nervioso",
      html: `<p>El <b>tejido nervioso</b> recibe estímulos, los transmite y elabora respuestas. Tiene dos tipos de células:</p>
      <ul><li><b>Neuronas</b>: células especializadas en transmitir el <b>impulso nervioso</b>, una señal eléctrica. Tienen un <b>cuerpo celular</b> con el núcleo, unas prolongaciones cortas y ramificadas, las <b>dendritas</b>, que reciben señales, y una prolongación larga, el <b>axón</b>, que las conduce hasta otras células. Muchos axones están envueltos en <b>mielina</b>, una capa aislante que multiplica la velocidad de conducción. Las neuronas se comunican entre sí y con los músculos en unas uniones llamadas <b>sinapsis</b>.</li>
      <li><b>Células gliales</b> o neuroglía: más numerosas que las neuronas, las sostienen, las nutren, forman la mielina y las defienden.</li></ul>
      <p>El tejido nervioso forma el encéfalo, la médula espinal, los nervios y los ganglios. Su función es coordinar todo el organismo: gracias a él los músculos se contraen en el momento justo, el corazón acelera cuando hace falta y percibimos el mundo. Lo estudiarás a fondo en el tema 5.</p>
      <p>Recuerda la regla: <mark>epitelial cubre, conectivo sostiene, muscular mueve, nervioso coordina</mark>.</p>`,
      svg: B.lienzo("Neurona con dendritas, cuerpo celular, axón con mielina y terminales", `
        <circle cx="52" cy="92" r="18" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2.5"/><circle cx="52" cy="92" r="6" fill="var(--pen)"/>
        <path d="M38 80 L18 60 M18 60 l-8 -2 M18 60 l-2 -8 M36 104 L16 122 M16 122 l-8 2 M40 78 L36 50 M60 74 L66 50" stroke="var(--pen)" stroke-width="2.5" fill="none"/>
        <path d="M70 92 H 214" stroke="var(--ink)" stroke-width="3"/>
        ${[86, 118, 150, 182].map((x) => `<rect x="${x}" y="84" width="26" height="16" rx="8" fill="var(--sun)" fill-opacity=".6" stroke="var(--sun)" stroke-width="1.5"/>`).join("")}
        <path d="M214 92 L236 76 M214 92 L240 92 M214 92 L236 108" stroke="var(--ink)" stroke-width="2.5"/>
        ${[[236, 76], [240, 92], [236, 108]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="var(--red)"/>`).join("")}
        ${B.tx(38, 40, "dendritas", { fs: 10.5, maxW: 70, bold: true, color: "var(--pen)" })}${B.tx(52, 140, "cuerpo celular", { fs: 10.5, maxW: 90, bold: true, color: "var(--pen)" })}
        ${B.tx(150, 126, "axón con mielina", { fs: 10.5, maxW: 120, bold: true, color: "var(--sun)" })}${B.tx(226, 134, "sinapsis", { fs: 10.5, maxW: 60, bold: true, color: "var(--red)" })}`, "La neurona"),
    },
    {
      h: "Órganos, aparatos y sistemas",
      html: `<p>Los órganos se agrupan para realizar las tres funciones vitales del organismo. Se suele llamar <b>sistema</b> a un conjunto de órganos formados por el mismo tipo de tejido (sistema nervioso, sistema muscular) y <b>aparato</b> a un conjunto de órganos de tejidos distintos que colaboran en una función (aparato digestivo), aunque en el uso diario ambas palabras se mezclan.</p>
      <table class="tb"><tr><th>Función</th><th>Aparatos y sistemas</th><th>Qué hacen</th></tr>
      <tr><td rowspan="4"><b>Nutrición</b></td><td>Digestivo</td><td>transforma los alimentos en nutrientes y los absorbe</td></tr>
      <tr><td>Respiratorio</td><td>capta oxígeno y elimina dióxido de carbono</td></tr>
      <tr><td>Circulatorio</td><td>transporta nutrientes, gases, hormonas y desechos</td></tr>
      <tr><td>Excretor</td><td>elimina los desechos del metabolismo (orina, sudor)</td></tr>
      <tr><td rowspan="3"><b>Relación</b></td><td>Nervioso y endocrino</td><td>coordinan y regulan el organismo</td></tr>
      <tr><td>Locomotor</td><td>huesos, articulaciones y músculos: sostén y movimiento</td></tr>
      <tr><td>Órganos de los sentidos</td><td>captan estímulos</td></tr>
      <tr><td><b>Reproducción</b></td><td>Reproductor</td><td>produce gametos y permite la descendencia</td></tr></table>
      <p>A ellos se suman el <b>sistema inmunitario</b> y el <b>linfático</b>, que defienden el organismo, y la piel o <b>sistema tegumentario</b>. Ningún sistema trabaja solo: durante una carrera, el locomotor produce el movimiento, el respiratorio y el circulatorio aportan oxígeno, el excretor elimina calor y desechos con el sudor, y el nervioso y el endocrino lo coordinan todo.</p>`,
      svg: B.ciclo("Las tres funciones vitales y los aparatos que las realizan", "Funciones", ["Nutrición", "Relación", "Reproducción", "Defensa"]),
    },
    {
      h: "La posición anatómica y los planos",
      html: `<p>Para describir el cuerpo sin ambigüedades se usa siempre la misma referencia, la <b>posición anatómica</b>: persona de pie, erguida, con la cabeza y la mirada al frente, los brazos estirados a los lados del cuerpo con las <mark>palmas de las manos hacia delante</mark> y los pies juntos y paralelos. Aunque la persona esté tumbada o haciendo el pino, las descripciones se refieren siempre a esta posición.</p>
      <p>Para estudiar el cuerpo y sus movimientos se imaginan tres <b>planos</b> perpendiculares entre sí:</p>
      <ul><li><b>Plano sagital</b>: vertical, de delante atrás; divide el cuerpo en mitad derecha e izquierda. El que pasa justo por el centro es el plano sagital medio. Los movimientos de <b>flexión y extensión</b> (asentir con la cabeza, dar un paso, una sentadilla) ocurren en este plano.</li>
      <li><b>Plano frontal</b> o coronal: vertical, de lado a lado; divide el cuerpo en parte anterior y posterior. En él se producen la <b>abducción y la aducción</b> (separar y acercar los brazos o las piernas, como en los saltos de tijera).</li>
      <li><b>Plano transversal</b> u horizontal: divide el cuerpo en parte superior e inferior. En él se producen las <b>rotaciones</b> (girar la cabeza para decir «no», un giro de tronco).</li></ul>
      <p>Las imágenes médicas, como la resonancia magnética, muestran el cuerpo en «cortes» según estos planos.</p>`,
      svg: planos,
      video: { id: "dZp4dolhuiE", titulo: "Posición anatómica, planos y ejes del cuerpo humano", canal: "Movimiento Articular", vistas: 1401779 },
    },
    {
      h: "Los ejes y los términos de dirección",
      html: `<p>Cada movimiento ocurre en un plano y alrededor de un <b>eje</b> perpendicular a él, como una puerta que gira sobre sus bisagras:</p>
      <ul><li><b>Eje transversal</b> (de lado a lado): perpendicular al plano sagital. Alrededor de él se hacen las flexiones y extensiones; por ejemplo, la voltereta.</li>
      <li><b>Eje anteroposterior</b> (de delante atrás): perpendicular al plano frontal. Alrededor de él se hacen las abducciones; por ejemplo, la rueda lateral.</li>
      <li><b>Eje longitudinal</b> (de arriba abajo): perpendicular al plano transversal. Alrededor de él se hacen las rotaciones; por ejemplo, un giro sobre un pie o una pirueta.</li></ul>
      <p>Los <b>términos de dirección</b> se usan por parejas:</p>
      <table class="tb"><tr><th>Término</th><th>Significa</th><th>Ejemplo</th></tr>
      <tr><td>Superior / inferior (craneal / caudal)</td><td>más arriba / más abajo</td><td>la cabeza es superior al tórax</td></tr>
      <tr><td>Anterior / posterior (ventral / dorsal)</td><td>delante / detrás</td><td>el esternón es anterior al corazón</td></tr>
      <tr><td>Medial / lateral</td><td>más cerca / más lejos de la línea media</td><td>el dedo pulgar es lateral</td></tr>
      <tr><td>Proximal / distal</td><td>en las extremidades, más cerca / más lejos del tronco</td><td>el codo es proximal a la muñeca</td></tr>
      <tr><td>Superficial / profundo</td><td>cerca / lejos de la superficie</td><td>la piel es superficial al músculo</td></tr></table>
      <p>En la mano se habla de cara <b>palmar</b> y <b>dorsal</b>, y en el pie, de cara <b>plantar</b> y dorsal.</p>`,
      svg: B.rejilla("Cada plano con su eje perpendicular y un movimiento típico", ["Plano", "Eje", "Movimiento"], [["Sagital", "transversal", "flexión"], ["Frontal", "anteropost.", "abducción"], ["Transversal", "longitudinal", "rotación"]], { t: "Planos y ejes" }),
    },
    {
      h: "Cavidades y regiones del cuerpo",
      html: `<p>El cuerpo se divide en <b>regiones</b>: cabeza, cuello, tronco (tórax, abdomen y pelvis) y extremidades superiores (hombro, brazo, codo, antebrazo, muñeca y mano) e inferiores (cadera, muslo, rodilla, pierna, tobillo y pie). En lenguaje anatómico, el <b>brazo</b> va del hombro al codo y la <b>pierna</b>, de la rodilla al tobillo.</p>
      <p>Los órganos internos se alojan en <b>cavidades</b> que los protegen:</p>
      <ul><li><b>Cavidad dorsal</b>: la <b>craneal</b>, que contiene el encéfalo, y el <b>conducto vertebral</b>, que contiene la médula espinal. Ambas están protegidas por hueso y por las meninges, y llenas de líquido cefalorraquídeo.</li>
      <li><b>Cavidad ventral</b>: dividida por el músculo <b>diafragma</b> en la <b>cavidad torácica</b> (pulmones, corazón, esófago, grandes vasos) y la <b>cavidad abdominopélvica</b> (estómago, intestinos, hígado, páncreas, bazo, riñones, vejiga y órganos reproductores).</li></ul>
      <p>Para localizar el dolor o una lesión del abdomen, los médicos lo dividen en <b>cuatro cuadrantes</b> (superior derecho e izquierdo, inferior derecho e izquierdo) o en <b>nueve regiones</b> (como el epigastrio, debajo del esternón, o la fosa ilíaca derecha, donde duele la apendicitis). Recuerda que «derecho» se refiere siempre al lado derecho del paciente, no al del observador.</p>`,
      svg: B.capas("Cavidades del cuerpo y órganos que contienen", [["Craneal", "encéfalo"], ["Vertebral", "médula espinal"], ["Torácica", "pulmones y corazón"], ["Abdominal", "digestivo, riñones"], ["Pélvica", "vejiga, reproductor"]], { t: "Cavidades corporales" }),
    },
    {
      h: "La homeostasis",
      html: `<p>La <b>homeostasis</b> es la capacidad del organismo de mantener estables las condiciones de su <b>medio interno</b> (el líquido que baña las células) a pesar de los cambios del exterior. Se regulan, entre otras, la temperatura (unos 37 °C), la glucosa en sangre (unos 70-100 mg/dL en ayunas), el pH (7,35-7,45), el agua y las sales, y la presión arterial.</p>
      <p>Un sistema de control homeostático tiene un <b>receptor</b> que detecta el cambio, un <b>centro de control</b> (casi siempre el encéfalo o una glándula) que compara con el valor de referencia y un <b>efector</b> (un músculo o una glándula) que produce la respuesta.</p>
      <ul><li>En la <b>retroalimentación negativa</b>, la respuesta <mark>contrarresta</mark> el cambio. Si sube la temperatura al correr, el hipotálamo activa las glándulas sudoríparas y dilata los vasos de la piel; el sudor se evapora, el cuerpo se enfría y la señal se apaga. Es el mecanismo más frecuente.</li>
      <li>En la <b>retroalimentación positiva</b>, la respuesta <b>refuerza</b> el cambio hasta que termina un proceso: las contracciones del parto o la coagulación de la sangre.</li></ul>
      <p>El ejercicio es un desafío para la homeostasis: aumenta el calor, el consumo de oxígeno y glucosa y la producción de CO₂. Cuando los mecanismos no bastan aparecen problemas, como el golpe de calor o la deshidratación.</p>`,
      svg: bucle,
      video: { id: "haF2yUiZGcU", titulo: "Homeostasis | FISIOLOGÍA | EXPLICACIÓN FÁCIL", canal: "La Fisiopedia", vistas: 260147 },
    },
  ],
  figura: {
    titulo: "La organización del cuerpo humano en cuatro ideas",
    items: [["Niveles", "célula → organismo", "cada nivel tiene", "propiedades nuevas"], ["Tejidos", "4 tipos", "epitelial, conectivo,", "muscular, nervioso"], ["Planos", "S · F · T", "con sus ejes", "perpendiculares"], ["Homeostasis", "−  retroal.", "mantiene estable", "el medio interno"]],
  },
  video: { id: "FbvAysJmKEc", titulo: "Estructura y organización del cuerpo humano", canal: "iLERNA", vistas: 40511 },
  quiz: [
    ["¿Cuál es la unidad estructural y funcional más pequeña con vida?", ["El átomo", "La célula", "El tejido", "La biomolécula"], 1, "La célula realiza por sí sola las funciones vitales."],
    ["Un conjunto de células semejantes con una función común forma…", ["un órgano", "un tejido", "un sistema", "un aparato"], 1, "Es el nivel tisular."],
    ["¿Qué porcentaje aproximado de la masa de un adulto es agua?", ["20 %", "40 %", "60 %", "90 %"], 2, "Alrededor del 60 %, algo menos en los tejidos grasos."],
    ["El orgánulo que produce la mayor parte del ATP es…", ["el núcleo", "el ribosoma", "la mitocondria", "el lisosoma"], 2, "Las mitocondrias realizan la respiración celular."],
    ["El tejido que no tiene vasos sanguíneos y cubre superficies es el…", ["epitelial", "óseo", "muscular", "adiposo"], 0, "El epitelio se nutre por difusión."],
    ["Las glándulas endocrinas vierten sus productos…", ["por un conducto al exterior", "a la sangre", "al estómago", "a la piel"], 1, "Las exocrinas usan un conducto."],
    ["Los tendones están formados por tejido…", ["conjuntivo denso", "adiposo", "epitelial", "muscular liso"], 0, "Haces paralelos de colágeno."],
    ["Los tendones unen…", ["hueso con hueso", "músculo con hueso", "músculo con músculo", "nervio con músculo"], 1, "Los ligamentos unen hueso con hueso."],
    ["El tejido muscular del corazón es…", ["liso y voluntario", "estriado e involuntario", "liso e involuntario", "estriado y voluntario"], 1, "Miocardio: estriado, ramificado y automático."],
    ["La sangre es un tejido…", ["epitelial", "conectivo", "nervioso", "muscular"], 1, "Un conectivo líquido cuya matriz es el plasma."],
    ["La prolongación de la neurona que conduce el impulso hacia otras células es…", ["la dendrita", "el axón", "la sinapsis", "la glía"], 1, "Las dendritas reciben; el axón conduce."],
    ["En posición anatómica, las palmas de las manos miran…", ["hacia atrás", "hacia el muslo", "hacia delante", "hacia arriba"], 2, "Es lo que la diferencia de la posición de pie normal."],
    ["El plano que divide el cuerpo en mitad derecha e izquierda es el…", ["frontal", "transversal", "sagital", "coronal"], 2, "El sagital medio pasa por el centro."],
    ["Una sentadilla ocurre principalmente en el plano…", ["sagital", "frontal", "transversal", "horizontal"], 0, "Es una flexión y extensión de cadera y rodilla."],
    ["Una rueda lateral gira alrededor del eje…", ["transversal", "anteroposterior", "longitudinal", "vertical"], 1, "Movimiento en el plano frontal."],
    ["El codo es ______ respecto a la muñeca.", ["distal", "proximal", "medial", "profundo"], 1, "Está más cerca del tronco."],
    ["El dedo pulgar, en posición anatómica, es…", ["medial", "lateral", "posterior", "proximal"], 1, "Está en el lado alejado de la línea media."],
    ["El diafragma separa la cavidad torácica de la…", ["craneal", "vertebral", "abdominopélvica", "pleural"], 2, "Es el músculo principal de la inspiración."],
    ["Sudar cuando sube la temperatura corporal es un ejemplo de…", ["retroalimentación positiva", "retroalimentación negativa", "metabolismo anaerobio", "reflejo voluntario"], 1, "La respuesta contrarresta el cambio."],
    ["Un ejemplo de retroalimentación positiva es…", ["la tiritona con frío", "la coagulación de la sangre", "la sed", "la sudoración"], 1, "La respuesta refuerza el proceso hasta que acaba."],
  ],
  examen: [
    ["Ordena de menor a mayor complejidad: órgano, célula, sistema, tejido.", ["célula, tejido, órgano, sistema", "tejido, célula, órgano, sistema", "célula, órgano, tejido, sistema", "sistema, órgano, tejido, célula"], 0, "Cada nivel agrupa al anterior."],
    ["Una persona de 70 kg con un 60 % de agua contiene unos…", ["7 L", "28 L", "42 L", "60 L"], 2, "0,6 · 70 = 42 kg ≈ 42 L."],
    ["Si pierde el 2 % de su masa en sudor durante un partido, ha perdido…", ["0,14 kg", "1,4 kg", "14 kg", "2 kg"], 1, "0,02 · 70 = 1,4 kg de agua, que hay que reponer."],
    ["Un epitelio de una sola capa de células planas es ideal para…", ["proteger de los roces", "intercambiar gases", "secretar sudor", "contraerse"], 1, "Es el epitelio de alvéolos y capilares."],
    ["Un esguince de tobillo lesiona sobre todo…", ["tendones", "ligamentos", "cartílago hialino", "músculo liso"], 1, "Los ligamentos unen los huesos de la articulación."],
    ["Los saltos de tijera (abrir y cerrar brazos y piernas) se hacen en el plano…", ["sagital", "frontal", "transversal", "medio"], 1, "Son abducciones y aducciones."],
    ["¿Qué frase es correcta?", ["La rodilla es distal al tobillo", "El esternón es posterior a la columna", "La rodilla es proximal al tobillo", "La oreja es medial a la nariz"], 2, "La rodilla está más cerca del tronco."],
    ["Tras comer, sube la glucosa y el páncreas libera insulina, que la baja. Es…", ["retroalimentación positiva", "retroalimentación negativa", "una respuesta voluntaria", "un reflejo de la médula"], 1, "La respuesta corrige el cambio y se detiene."],
  ],
  feynman: ["Qué diferencia hay entre un tejido, un órgano y un sistema", "Por qué los cuatro tejidos básicos bastan para construir todo el cuerpo", "Qué es la posición anatómica y por qué hace falta", "Cómo se relacionan cada plano y su eje", "Qué significan proximal, distal, medial y lateral", "Cómo funciona un bucle de retroalimentación negativa"],
  mapa: ["CUERPO HUMANO", [["Niveles", "químico · célula · tejido · órgano"], ["Tejidos", "epitelial · conectivo · muscular · nervioso"], ["Referencias", "posición anatómica · planos · ejes"], ["Homeostasis", "receptor · control · efector"]]],
  tarjetas: [
    ["Niveles de organización", "Químico, celular, tisular, órgano, sistema y organismo."],
    ["Célula", "Unidad estructural y funcional más pequeña con vida."],
    ["Tejido", "Células semejantes con un origen y una función común."],
    ["Cuatro tejidos", "Epitelial cubre, conectivo sostiene, muscular mueve, nervioso coordina."],
    ["Tendón y ligamento", "Tendón: músculo-hueso. Ligamento: hueso-hueso."],
    ["Tres músculos", "Esquelético (voluntario), cardíaco y liso (involuntarios)."],
    ["Neurona", "Dendritas reciben, axón conduce, sinapsis comunica."],
    ["Posición anatómica", "De pie, mirada al frente, brazos a los lados y palmas hacia delante."],
    ["Planos", "Sagital (der./izq.), frontal (ant./post.), transversal (sup./inf.)."],
    ["Ejes", "Transversal: flexión. Anteroposterior: abducción. Longitudinal: rotación."],
    ["Proximal y distal", "Más cerca o más lejos del tronco, en las extremidades."],
    ["Homeostasis", "Mantener estable el medio interno, sobre todo por retroalimentación negativa."],
  ],
  ejemplos: [
    ["Describe con términos anatómicos la posición del ombligo respecto al esternón y de la rodilla respecto a la cadera.", ["El ombligo está más abajo que el esternón y en la línea media.", "La rodilla está más lejos del tronco que la cadera en la misma extremidad.", "En las extremidades se usa proximal y distal; en el tronco, superior e inferior."], "El ombligo es inferior al esternón; la rodilla es distal a la cadera."],
    ["Una persona de 55 kg tiene un 58 % de agua corporal. Tras una hora de baile intenso pierde 0,8 kg de sudor. ¿Qué porcentaje de su agua ha perdido? ¿Y de su masa?", ["Agua corporal: 0,58 · 55 = 31,9 kg.", "Pérdida de agua: 0,8 / 31,9 = 0,025 → 2,5 %.", "Pérdida de masa: 0,8 / 55 = 0,0145 → 1,5 %."], "Ha perdido el 2,5 % de su agua (1,5 % de su masa): ya puede notar menos rendimiento; debe rehidratarse."],
    ["Indica el plano y el eje de: a) un salto vertical con flexión de rodillas; b) girar la cabeza para mirar atrás; c) levantar un brazo lateralmente.", ["a) Flexión y extensión de cadera, rodilla y tobillo: plano sagital.", "b) Rotación del cuello: plano transversal.", "c) Separar el brazo del cuerpo: abducción, plano frontal.", "Cada plano tiene su eje perpendicular."], "a) Sagital, eje transversal; b) transversal, eje longitudinal; c) frontal, eje anteroposterior."],
    ["Clasifica en tejidos los componentes del estómago: mucosa interna, capas musculares, capa que une y lleva vasos, y nervios.", ["Mucosa: epitelio de revestimiento y glandular (jugo gástrico).", "Capas musculares: músculo liso, involuntario.", "Capa de unión: tejido conjuntivo con vasos.", "Nervios: tejido nervioso."], "El estómago es un órgano porque reúne los cuatro tejidos básicos."],
    ["Explica qué ocurre cuando entras en una cámara frigorífica a −10 °C con ropa ligera, usando el esquema receptor-centro-efector.", ["Receptor: termorreceptores de la piel detectan el frío.", "Centro de control: el hipotálamo compara con 37 °C.", "Efectores: los vasos de la piel se contraen (vasoconstricción) y los músculos tiritan.", "Resultado: se pierde menos calor y se produce más; la temperatura interna se mantiene."], "Es una retroalimentación negativa que contrarresta el enfriamiento."],
    ["Un futbolista se rompe el ligamento cruzado de la rodilla. ¿Por qué tarda tanto en curar y por qué a menudo se reconstruye con un injerto?", ["El ligamento es tejido conjuntivo denso, con colágeno y muy pocos vasos.", "Llegan pocos nutrientes y células reparadoras: cicatriza lentamente y mal.", "Por eso se sustituye por un trozo de tendón del propio paciente y se espera a que se integre (meses)."], "La escasa vascularización del conjuntivo denso explica la lentitud de la recuperación."],
  ],
  errores: [
    "Confundir tendón (une músculo y hueso) con ligamento (une hueso con hueso).",
    "Describir las posiciones según la postura real de la persona, en vez de referirlas a la posición anatómica.",
    "Usar derecha e izquierda desde el punto de vista del observador y no del paciente.",
    "Llamar «brazo» a toda la extremidad superior y «pierna» a toda la inferior: en anatomía el brazo va del hombro al codo y la pierna, de la rodilla al tobillo.",
    "Pensar que la retroalimentación positiva es «buena» y la negativa «mala»: la negativa es la que estabiliza el organismo.",
    "Confundir el plano de un movimiento con su eje: la flexión ocurre en el plano sagital, pero alrededor del eje transversal.",
  ],
  ejercicios: {
    b: [
      ["Enumera en orden los niveles de organización del cuerpo humano.", "Químico (átomos y moléculas), celular, tisular, órgano, aparato o sistema y organismo."],
      ["Define tejido y pon un ejemplo de cada uno de los cuatro tipos básicos.", "Conjunto de células semejantes con un origen y función comunes. Epitelial: epidermis. Conectivo: tendón. Muscular: bíceps. Nervioso: médula espinal."],
      ["Nombra los cuatro bioelementos más abundantes del cuerpo.", "Oxígeno, carbono, hidrógeno y nitrógeno, que suman cerca del 96 % de la masa."],
      ["Indica la función de las mitocondrias, los ribosomas y el núcleo.", "Mitocondrias: obtienen energía (ATP). Ribosomas: fabrican proteínas. Núcleo: guarda el ADN y dirige la célula."],
      ["Diferencia glándulas exocrinas y endocrinas con un ejemplo.", "Exocrinas: vierten por un conducto al exterior o a una cavidad (sudoríparas). Endocrinas: vierten hormonas a la sangre (tiroides)."],
      ["¿Qué diferencia hay entre un tendón y un ligamento?", "El tendón une un músculo con un hueso; el ligamento une dos huesos. Ambos son conjuntivo denso."],
      ["Indica los tres tipos de músculo y si son voluntarios o involuntarios.", "Esquelético: voluntario. Cardíaco: involuntario. Liso: involuntario."],
      ["Dibuja una neurona y señala dendritas, cuerpo celular, axón y mielina.", "Dendritas: ramas cortas que reciben. Cuerpo: con el núcleo. Axón: prolongación larga. Mielina: vaina aislante alrededor del axón."],
      ["Describe la posición anatómica.", "De pie, erguido, cabeza y mirada al frente, brazos a los lados con las palmas hacia delante y pies juntos y paralelos."],
      ["Nombra los tres planos anatómicos y qué partes separan.", "Sagital: derecha e izquierda. Frontal: anterior y posterior. Transversal: superior e inferior."],
      ["Escribe el término opuesto de: proximal, medial, anterior, superficial.", "Distal, lateral, posterior y profundo."],
      ["Define homeostasis y pon dos variables que se regulan.", "Mantenimiento de un medio interno estable. Por ejemplo, temperatura (≈ 37 °C) y glucosa en sangre."],
    ],
    m: [
      ["Explica por qué un órgano como el corazón contiene los cuatro tipos de tejido.", "Epitelio que tapiza las cavidades (endocardio), músculo cardíaco que bombea, tejido conjuntivo que forma las válvulas y el esqueleto fibroso, y tejido nervioso que regula su ritmo."],
      ["Calcula el agua corporal de una persona de 80 kg con un 55 % de agua y razona por qué su porcentaje puede ser menor que el de un niño.", "0,55 · 80 = 44 kg. El tejido adiposo tiene poca agua; a mayor grasa, menor porcentaje. Los niños tienen proporcionalmente más agua."],
      ["Relaciona la estructura del epitelio de la tráquea (con cilios y células que producen moco) con su función.", "El moco atrapa polvo y microbios, y los cilios lo barren hacia la faringe para expulsarlo o tragarlo: protegen los pulmones."],
      ["¿Por qué el cartílago articular apenas se regenera tras una lesión?", "No tiene vasos sanguíneos; recibe nutrientes por difusión desde el líquido sinovial, por lo que llegan pocas células reparadoras."],
      ["Compara el músculo esquelético y el liso en velocidad de contracción, fatiga y control.", "Esquelético: rápido, se fatiga, voluntario. Liso: lento, resiste mucho tiempo, involuntario."],
      ["Indica el plano y el eje de: patada de fútbol, giro de una pirueta, inclinación lateral del tronco.", "Patada: sagital, eje transversal. Pirueta: transversal, eje longitudinal. Inclinación lateral: frontal, eje anteroposterior."],
      ["Completa con términos de dirección: el corazón es ___ al esternón; la muñeca es ___ al codo; la nariz es ___ a los ojos.", "Posterior; distal; medial."],
      ["Una persona tumbada boca abajo tiene la espalda hacia arriba. ¿Su espalda es superior o posterior? Razona.", "Posterior: las descripciones se refieren siempre a la posición anatómica, no a la postura real."],
      ["¿En qué cavidad y región situarías el hígado, el apéndice y la vejiga?", "Hígado: abdominal, cuadrante superior derecho. Apéndice: abdominal, fosa ilíaca derecha (inferior derecho). Vejiga: pélvica, en la línea media."],
      ["Explica la regulación de la temperatura al hacer ejercicio en verano con el esquema receptor-centro-efector.", "Receptores térmicos detectan el aumento; el hipotálamo activa las glándulas sudoríparas y la vasodilatación cutánea; se pierde calor y la temperatura vuelve al valor normal."],
      ["Diferencia retroalimentación negativa y positiva con un ejemplo de cada una.", "Negativa: la respuesta contrarresta el cambio (insulina baja la glucosa). Positiva: la respuesta lo intensifica hasta un final (contracciones del parto)."],
      ["¿Qué funciones tiene el agua en el organismo? Cita cuatro.", "Disolvente de reacciones, transporte de sustancias, amortiguación (líquido sinovial y cefalorraquídeo) y regulación térmica por su alto calor específico."],
      ["Explica por qué la lesión de una neurona del encéfalo es más grave que una herida en la piel.", "Las neuronas apenas se dividen en el adulto, así que no se sustituyen; la epidermis se renueva continuamente."],
      ["Indica qué aparatos colaboran en una carrera de 400 m y qué hace cada uno.", "Locomotor: movimiento. Respiratorio: oxígeno y CO₂. Circulatorio: transporte. Excretor (sudor): calor y desechos. Nervioso y endocrino: coordinación (adrenalina, frecuencia cardíaca)."],
    ],
    a: [
      ["Un deportista de 75 kg pierde 1,5 kg en un entrenamiento con calor. Calcula el porcentaje de masa perdido, valora el riesgo y propón cuánto debería beber si se recomienda reponer el 150 % de lo perdido.", "1,5 / 75 = 2 % de la masa: ya reduce el rendimiento y aumenta el riesgo de golpe de calor. Debe beber 1,5 · 1,5 = 2,25 L en las horas siguientes, mejor con sales."],
      ["Una bailarina se lesiona «en la cara medial de la rodilla derecha, distal a la articulación». Explica dónde está la lesión y qué estructuras pueden verse afectadas.", "En el lado interno de la rodilla derecha (hacia la otra pierna) y por debajo de la articulación, en la parte alta de la pierna: ligamento colateral medial, menisco interno o la inserción de tendones de la «pata de ganso»."],
      ["Razona por qué la evolución ha dado a los alvéolos un epitelio simple plano y a la piel uno estratificado queratinizado.", "La forma se ajusta a la función: en los alvéolos hay que intercambiar gases y la difusión exige una barrera finísima. En la piel hay que resistir roces, microbios y deshidratación: varias capas y queratina."],
      ["Describe un movimiento complejo de un deporte o una danza descomponiéndolo en movimientos simples, con su plano y su eje.", "Ejemplo, saque de tenis: flexión y extensión de rodillas (sagital, eje transversal), rotación del tronco (transversal, longitudinal), abducción y rotación del hombro (frontal y transversal) y extensión del codo (sagital)."],
      ["La diabetes tipo 1 se produce porque el páncreas no fabrica insulina. Explica qué falla en el bucle de retroalimentación de la glucosa y qué consecuencias tiene.", "Falla el efector (o la señal): aunque se detecta la subida de glucosa, no se libera insulina y las células no la captan. La glucosa permanece alta (hiperglucemia), las células obtienen energía de las grasas y aparecen sed, cansancio y, a largo plazo, daños en vasos y nervios."],
      ["¿Por qué un golpe de calor es un ejemplo de fallo de la homeostasis que puede convertirse en retroalimentación positiva peligrosa?", "Si la sudoración no basta (humedad alta, deshidratación), la temperatura sube; el calor acelera el metabolismo y produce aún más calor, y se pierde la capacidad de sudar. El cambio se refuerza a sí mismo y puede dañar órganos: es una urgencia."],
      ["Diseña una tabla que relacione cada tipo de tejido con un problema típico en deportistas y su causa.", "Epitelial: rozaduras y ampollas (fricción). Conectivo: esguince (ligamento estirado) y tendinopatía (sobrecarga). Muscular: rotura fibrilar (contracción brusca). Nervioso: conmoción (golpe en la cabeza)."],
      ["Una resonancia muestra un «corte sagital medio» de la cabeza. ¿Qué estructuras verías y cuáles no?", "Verías la línea media: el cuerpo calloso, el tronco del encéfalo, el cerebelo cortado por su centro, la nariz y la lengua de perfil. No verías los ojos ni los oídos, que están a los lados (laterales)."],
      ["Argumenta si es correcto decir que «el músculo cardíaco nunca se cansa» y relaciónalo con su estructura.", "Es casi correcto: tiene muchísimas mitocondrias, gran riego sanguíneo y un periodo de descanso entre latidos; usa oxígeno de forma continua y no acumula fatiga en condiciones normales. Sí puede fallar si le falta oxígeno (infarto)."],
      ["Explica cómo la organización en niveles permite comprender que un fallo molecular (una proteína defectuosa) se convierta en una enfermedad del organismo. Usa la anemia falciforme como ejemplo.", "Un cambio en el ADN altera la hemoglobina (nivel químico); los glóbulos rojos se deforman en hoz (celular); obstruyen capilares y se destruyen (tisular); dañan bazo, pulmones y huesos (órganos); la persona sufre cansancio y dolor (organismo)."],
    ],
  },
  glosario: [
    ["Anatomía", "Ciencia que estudia la forma y la estructura del cuerpo."],
    ["Fisiología", "Ciencia que estudia el funcionamiento del cuerpo."],
    ["Célula", "Unidad estructural y funcional más pequeña de los seres vivos."],
    ["Mitocondria", "Orgánulo que obtiene energía (ATP) a partir de nutrientes y oxígeno."],
    ["Tejido", "Conjunto de células semejantes que realizan una función común."],
    ["Matriz extracelular", "Material de fibras y sustancia fundamental que rodea las células de los tejidos conectivos."],
    ["Tendón", "Cordón de conjuntivo denso que une un músculo a un hueso."],
    ["Ligamento", "Banda de conjuntivo denso que une dos huesos."],
    ["Neurona", "Célula del tejido nervioso que transmite el impulso nervioso."],
    ["Órgano", "Estructura formada por varios tejidos que realizan una función."],
    ["Posición anatómica", "Postura de referencia: de pie, mirada al frente y palmas hacia delante."],
    ["Plano sagital", "Plano vertical que divide el cuerpo en derecha e izquierda."],
    ["Plano frontal", "Plano vertical que divide el cuerpo en anterior y posterior."],
    ["Plano transversal", "Plano horizontal que divide el cuerpo en superior e inferior."],
    ["Proximal", "Más cerca del tronco o del origen de una extremidad."],
    ["Homeostasis", "Mantenimiento de un medio interno estable."],
    ["Retroalimentación negativa", "Mecanismo en el que la respuesta contrarresta el cambio que la provocó."],
  ],
  situacion: {
    titulo: "El atlas anatómico del gimnasio",
    reto: "El departamento de Educación Física quiere colgar en el gimnasio un atlas visual que explique los movimientos de los ejercicios más habituales. Vuestro grupo debe fotografiar o dibujar ejercicios y explicarlos con lenguaje anatómico correcto.",
    pasos: [
      "Elegid seis ejercicios habituales (sentadilla, zancada, saltos de tijera, giro de tronco, plancha lateral, lanzamiento de balón).",
      "Fotografiad o dibujad cada ejercicio desde un punto de vista que muestre bien el movimiento.",
      "Para cada uno, indicad los planos y ejes en los que ocurre y descomponed los movimientos simples (flexión, abducción, rotación).",
      "Añadid los tejidos y las estructuras que trabajan (músculos, tendones, ligamentos, cartílagos).",
      "Explicad qué mecanismos homeostáticos se activan durante el ejercicio (temperatura, respiración, pulso).",
      "Revisad los textos entre grupos para corregir los términos de dirección.",
    ],
    producto: "Seis láminas de atlas con imagen, planos y ejes dibujados, explicación anatómica y una ficha resumen de términos de dirección.",
    evaluacion: [
      "Los planos, los ejes y los movimientos están identificados correctamente.",
      "Se usan los términos de dirección con precisión y referidos a la posición anatómica.",
      "Se relacionan los tejidos con su función en cada ejercicio.",
      "Las láminas son claras, rigurosas y útiles para el resto del centro.",
    ],
  },
  familias: [
    "Jugad a «¿dónde está?»: una persona describe una parte del cuerpo con términos anatómicos (medial, distal…) y la otra la señala.",
    "Al cocinar carne, observad juntos el músculo, la grasa, los tendones y los huesos: son los tejidos del tema.",
    "Comentad qué hace vuestro cuerpo para mantener la temperatura cuando hace mucho frío o mucho calor.",
    "Revisad cuánta agua bebéis al día y relacionadlo con el 60 % de agua del cuerpo.",
  ],
  saberes: B.SAB("Organización del cuerpo humano: niveles de organización, célula, tejidos, órganos, aparatos y sistemas; terminología anatómica, posición anatómica, planos y ejes; homeostasis y su relación con la actividad física y artística"),
  ideas: [
    "Observar al microscopio preparaciones de epitelio, sangre, músculo y hueso, y dibujarlas.",
    "Jugar a «Simón dice» con órdenes anatómicas: «abducción del brazo derecho», «flexión de rodilla izquierda».",
    "Medir la temperatura de la piel y la frecuencia cardíaca antes y después de un esfuerzo para explicar la homeostasis.",
    "Hacer un modelo de los planos con tres láminas de cartón alrededor de un muñeco articulado.",
  ],
  fuentes: [
    B.FUENTES.WIKI("Anatomía_humana", "Anatomía humana"),
    B.FUENTES.WIKI("Homeostasis", "Homeostasis"),
  ],
});
