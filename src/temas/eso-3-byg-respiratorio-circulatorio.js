// Biología y Geología 3º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso3L4.js.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Corazón en corte: AD, AI, VD, VI (sangre pobre en O2 en azul y rica en rojo).
const corazon = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
  <path d="M-50 -30 Q -52 -60 -22 -58 Q -4 -56 0 -40 Q 4 -56 22 -58 Q 52 -60 50 -30 Q 48 10 0 60 Q -48 10 -50 -30 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
  <path d="M-46 -28 Q -46 -52 -22 -52 Q -6 -50 -4 -30 V -14 H -46 Z" fill="var(--pen)" fill-opacity=".55"/>
  <path d="M46 -28 Q 46 -52 22 -52 Q 6 -50 4 -30 V -14 H 46 Z" fill="var(--red)" fill-opacity=".55"/>
  <path d="M-46 -8 H -4 V 48 Q -40 14 -46 -8 Z" fill="var(--pen)" fill-opacity=".8"/>
  <path d="M46 -8 H 4 V 48 Q 40 14 46 -8 Z" fill="var(--red)" fill-opacity=".8"/>
  <path d="M0 -40 V 56" stroke="var(--ink)" stroke-width="3"/><path d="M-46 -11 H -4 M4 -11 H 46" stroke="var(--ink)" stroke-width="2" stroke-dasharray="6 3"/>
</g>`;
const L = require("./_eso3L4");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "Los aparatos respiratorio y circulatorio",
  minutos: 110,
  objetivos: [
    "Distinguir la respiración pulmonar de la respiración celular",
    "Describir las vías respiratorias, los pulmones, la ventilación y el intercambio de gases",
    "Explicar la composición de la sangre, los grupos sanguíneos y la importancia de donar",
    "Describir los vasos sanguíneos, el corazón y el ciclo cardiaco",
    "Interpretar la circulación doble y cerrada y el sistema linfático",
    "Adoptar hábitos cardiosaludables y conocer la reanimación cardiopulmonar",
  ],
  claves: ["alvéolo", "intercambio de gases", "diafragma", "plasma", "grupo sanguíneo", "arteria", "vena", "capilar", "circulación doble"],
  pregunta: {
    texto: "Respiramos para conseguir oxígeno, pero ¿adónde va ese oxígeno y para qué lo usa el cuerpo?",
    respuesta: "Los pulmones lo pasan a la <b>sangre</b>, el corazón lo bombea a todo el cuerpo y cada <b>célula</b> lo usa en sus <mark>mitocondrias</mark> para «quemar» la glucosa y sacar energía. El residuo, el CO₂, hace el camino al revés y sale al espirar. Los dos aparatos trabajan como un equipo.",
  },
  lectura: {
    titulo: "Un viaje de cien mil kilómetros",
    html: `<p>Si pudieras poner en fila todos los vasos sanguíneos de tu cuerpo, desde la aorta hasta el capilar más fino, la línea daría más de dos vueltas a la Tierra: alrededor de cien mil kilómetros. Por esa red inmensa circulan unos cinco litros de sangre que tu corazón impulsa sin descanso, unas cien mil veces al día, desde varias semanas antes de que nacieras.</p>
<p>Cada glóbulo rojo hace el recorrido completo en menos de un minuto. En los pulmones se carga de oxígeno, viaja hasta la punta de un dedo del pie, lo entrega a las células y vuelve cargado de dióxido de carbono. Repetirá el viaje unas cien mil veces antes de desgastarse, a los cuatro meses, y ser sustituido por otro nuevo fabricado en la médula de los huesos.</p>
<p>Respirar y que la sangre circule son dos actividades que casi nunca notamos y que, sin embargo, no pueden detenerse más de unos minutos. En este tema verás cómo trabajan juntos los aparatos respiratorio y circulatorio para llevar oxígeno a cada célula y retirar sus desechos, y qué puedes hacer para cuidarlos durante toda la vida.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Dos respiraciones distintas</h3><p>En biología, «respiración» tiene dos significados. La <b>respiración pulmonar</b> o ventilación es lo que hacemos con los pulmones: tomar aire con oxígeno (O₂) y expulsar aire con dióxido de carbono (CO₂). La <mark>respiración celular</mark> ocurre dentro de las mitocondrias de cada célula: la glucosa reacciona con el oxígeno y libera la energía que la célula necesita.</p><p><b>glucosa + oxígeno → CO₂ + agua + energía</b></p><p>El aparato respiratorio y el circulatorio existen para que esa reacción no se detenga nunca.</p><p>Las dos respiraciones están unidas: si no tomáramos oxígeno con los pulmones, las mitocondrias no podrían quemar la glucosa; y si no expulsáramos el CO₂ que producen, se acumularía en la sangre y la volvería ácida. Por eso, cuando hacemos ejercicio y las células necesitan más energía, respiramos más deprisa y el corazón late más rápido.</p>`,
      svg: L.compara("Respiración pulmonar y respiración celular", ["Pulmonar", "var(--pen)", ["en los pulmones", "entra O₂ del aire", "sale CO₂", "es ventilación"]], ["Celular", "var(--red)", ["en las mitocondrias", "usa O₂ y glucosa", "produce CO₂ y agua", "libera energía"]]),
    },
    {
      html: `<h3>1.2 Las vías respiratorias</h3><p>El aire entra por las <b>fosas nasales</b>, donde los pelos y el moco retienen el polvo y el aire se calienta y se humedece. Después pasa por la <b>faringe</b>, la <b>laringe</b> (donde están las cuerdas vocales) y la <b>tráquea</b>, un tubo reforzado con anillos de cartílago para que no se cierre. La tráquea se divide en dos <mark>bronquios</mark>, uno para cada pulmón, que se ramifican en tubos cada vez más finos, los <mark>bronquiolos</mark>, como las ramas de un árbol puesto boca abajo. Al final de cada bronquiolo hay racimos de alvéolos.</p><p>Las paredes de la tráquea y los bronquios están tapizadas por una mucosa con <b>cilios</b>, pelillos microscópicos que se mueven como un remo y empujan el moco con el polvo atrapado hacia la faringe, donde lo tragamos o lo expulsamos al toser. En la <b>laringe</b> están las <b>cuerdas vocales</b>, dos pliegues que vibran cuando el aire sale y producen la voz.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Vías respiratorias: fosas nasales, faringe, laringe, tráquea, bronquios, bronquiolos y pulmones">${BG}
        <path d="M70 120 Q 52 60 96 52 Q 108 52 112 64 V 156 Q 74 162 70 120 Z M190 120 Q 208 60 164 52 Q 152 52 148 64 V 156 Q 186 162 190 120 Z" fill="var(--red)" fill-opacity=".2" stroke="var(--red)" stroke-width="2"/>
        <path d="M130 14 V 64 M130 64 Q 120 72 112 84 M130 64 Q 140 72 148 84" stroke="var(--inf)" stroke-width="7" fill="none" stroke-linecap="round"/>
        ${[0, 1, 2, 3, 4].map((i) => `<path d="M125 ${20 + i * 9} H 135" stroke="#fff" stroke-width="2"/>`).join("")}
        <path d="M112 84 L 98 104 M112 84 L 108 112 M98 104 L 86 118 M98 104 L 96 126 M148 84 L 162 104 M148 84 L 152 112 M162 104 L 174 118 M162 104 L 164 126" stroke="var(--inf)" stroke-width="3" fill="none"/>
        ${t(230, 30, "tráquea", { size: 11, anchor: "end" })}<path d="M190 27 H 138" stroke="var(--muted)" stroke-width="1"/>
        ${t(230, 80, "bronquio", { size: 11, anchor: "end" })}<path d="M182 77 H 152" stroke="var(--muted)" stroke-width="1"/>
        ${t(248, 160, "bronquiolos", { size: 11, anchor: "end" })}<path d="M200 152 L 168 124" stroke="var(--muted)" stroke-width="1"/>${t(130, 174, "pulmones", { size: 11, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>1.3 Los pulmones y las pleuras</h3><p>Los <mark>pulmones</mark> son dos órganos esponjosos y elásticos situados en la caja torácica, protegidos por las costillas. No son iguales: el derecho tiene tres <b>lóbulos</b> y el izquierdo solo dos, porque deja un hueco para el corazón. Entre los dos pueden contener unos seis litros de aire, aunque en una respiración normal solo renovamos medio litro.</p><p>Cada pulmón está envuelto por las <mark>pleuras</mark>, dos membranas finas con un poco de líquido entre ellas que permite que el pulmón se deslice sin rozar cuando se infla y se desinfla. La pleura interna está pegada al pulmón y la externa a la pared del tórax; por eso, cuando el tórax se agranda, el pulmón lo acompaña y se llena de aire.</p><p>Si entra aire entre las pleuras, por ejemplo tras un golpe fuerte, el pulmón se colapsa: es un <b>neumotórax</b>, una urgencia médica.</p>`,
      svg: L.radial("Los pulmones: lóbulos, pleuras y capacidad", "Pulmones", ["Derecho: 3 lóbulos", "Izquierdo: 2 lóbulos", "Pleuras", "Unos 6 litros"], "var(--pen)"),
    },
    {
      html: `<h3>1.4 Los alvéolos y el intercambio de gases</h3><p>Los <b>alvéolos pulmonares</b> son saquitos microscópicos con una pared finísima, de una sola capa de células, rodeados de <b>capilares</b> sanguíneos. Tenemos unos 300 millones, que juntos ocupan la superficie de una pista de tenis. Allí ocurre el <mark>intercambio de gases</mark> por <b>difusión</b>: cada gas pasa de donde hay más concentración a donde hay menos. El O₂ del aire alveolar pasa a la sangre y el CO₂ de la sangre pasa al alvéolo para ser expulsado.</p><p>En los tejidos ocurre el intercambio contrario: las células gastan oxígeno y producen CO₂, así que el oxígeno sale de la sangre hacia las células y el CO₂ entra en la sangre. El oxígeno viaja unido a la <b>hemoglobina</b> de los glóbulos rojos, una proteína con hierro que le da a la sangre su color rojo. El CO₂ viaja sobre todo disuelto en el plasma.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Alvéolo rodeado por un capilar: el oxígeno pasa a la sangre y el dióxido de carbono sale al alvéolo">${BG}
        <circle cx="120" cy="88" r="56" fill="var(--water)" fill-opacity=".15" stroke="var(--inf)" stroke-width="2.5"/>
        <path d="M30 150 Q 50 30 120 26 Q 194 30 214 150" stroke-width="14" fill="none" stroke="url(#gc)"/>
        <defs><linearGradient id="gc" x1="0" x2="1"><stop offset="0" stop-color="var(--pen)"/><stop offset="1" stop-color="var(--red)"/></linearGradient></defs>
        ${fl(112, 60, 112, 34, "var(--red)")}${t(100, 74, "O₂", { size: 13, color: "var(--red)" })}
        ${fl(140, 34, 140, 60, "var(--pen)")}${t(152, 74, "CO₂", { size: 13, color: "var(--pen)" })}
        ${t(120, 112, "alvéolo", { size: 12, color: "var(--inf)" })}${t(30, 170, "sangre pobre en O₂", { size: 10, anchor: "start", color: "var(--pen)" })}${t(240, 170, "rica en O₂", { size: 10, anchor: "end", color: "var(--red)" })}</svg>`,
      video: { id: "bmc0dIor6LA", titulo: "Intercambio de gases en los alvéolos", canal: "unProfesor", vistas: 414642 },
    },
    {
      html: `<h3>1.5 La ventilación pulmonar</h3><p>Los pulmones no tienen músculos: se llenan y se vacían gracias al <mark>diafragma</mark>, un músculo en forma de cúpula bajo los pulmones, y a los músculos intercostales. En la <b>inspiración</b>, el diafragma se contrae y baja, las costillas suben, la caja torácica se agranda y el aire entra. En la <b>espiración</b>, el diafragma se relaja y sube, el volumen disminuye y el aire sale. En reposo respiramos unas 12 a 16 veces por minuto y movemos medio litro de aire en cada respiración.</p><p>Respiramos de forma automática gracias a un centro del <b>bulbo raquídeo</b>, en el encéfalo, que mide el CO₂ de la sangre: cuando sube, ordena respirar más deprisa. Por eso no podemos aguantar la respiración indefinidamente. El aire que espiramos todavía contiene un 16 % de oxígeno, frente al 21 % del aire que inspiramos: es suficiente para hacer el boca a boca a una persona.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Inspiración con el diafragma bajado y pulmones grandes; espiración con el diafragma subido y pulmones pequeños">${BG}
        ${[[70, "inspiración", 1.1, 128, "var(--leaf)"], [190, "espiración", 0.85, 104, "var(--red)"]].map(([x, n, s, d, c]) => `<g transform="translate(${x} 90) scale(${s})"><path d="M-6 -10 Q -40 -40 -40 10 Q -40 40 -6 36 Z M6 -10 Q 40 -40 40 10 Q 40 40 6 36 Z" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="2"/><path d="M0 -60 V -10" stroke="var(--inf)" stroke-width="5"/></g><path d="M${x - 50} ${d} Q ${x} ${d - (x < 100 ? 6 : 26)} ${x + 50} ${d}" stroke="var(--ink)" stroke-width="4" fill="none"/>${t(x, 162, n, { size: 12, color: c })}`).join("")}
        ${fl(70, 18, 70, 34, "var(--leaf)")}${fl(190, 34, 190, 18, "var(--red)")}${t(130, 146, "diafragma", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>2.1 La sangre</h3><p>El aparato circulatorio transporta sustancias por todo el cuerpo. Está formado por la <b>sangre</b>, los <b>vasos sanguíneos</b> y el <b>corazón</b>. Un adulto tiene unos 5 litros de sangre. Su parte líquida, el <mark>plasma</mark> (55 %), es agua con nutrientes, sales, hormonas y desechos disueltos. El resto son células:</p>${tabla(["Componente", "Cómo es", "Función"], [["Glóbulos rojos (eritrocitos)", "discos sin núcleo, con hemoglobina", "transportar O₂ y parte del CO₂"], ["Glóbulos blancos (leucocitos)", "con núcleo, de varios tipos", "defender de infecciones"], ["Plaquetas", "fragmentos de células", "coagular la sangre en las heridas"]])}<p>Todas las células de la sangre se fabrican en la <b>médula ósea roja</b>, en el interior de huesos como el esternón, las costillas o la pelvis. Cuando nos hacemos una herida, las plaquetas se acumulan y liberan sustancias que forman una red de <b>fibrina</b>; en ella quedan atrapados los glóbulos rojos y se forma el coágulo, que tapa la herida. Un análisis de sangre, el <b>hemograma</b>, cuenta cada tipo de célula y ayuda a detectar enfermedades como la anemia.</p>`,
      svg: L.radial("Componentes de la sangre", "Sangre", ["Plasma: 55 %", "Glóbulos rojos: O₂", "Glóbulos blancos", "Plaquetas: coágulo"], "var(--red)"),
      video: { id: "gM4_LKq8vVk", titulo: "Los componentes de la sangre", canal: "ElFrancotirador94", vistas: 646432 },
    },
    {
      html: `<h3>2.2 Los grupos sanguíneos y la donación de sangre</h3><p>No todas las personas tienen la misma sangre. En la membrana de los glóbulos rojos puede haber unas moléculas llamadas <mark>antígenos</mark>, A y B. Quien tiene el antígeno A es del <b>grupo A</b>; quien tiene el B, del <b>grupo B</b>; quien tiene los dos, del <b>AB</b>; y quien no tiene ninguno, del <b>0</b>. Además, existe el <b>factor Rh</b>: quien lo tiene es Rh positivo (+) y quien no, Rh negativo (−).</p><p>En una transfusión hay que tenerlo en cuenta, porque el plasma contiene anticuerpos contra los antígenos que la persona no tiene: si recibe sangre incompatible, sus glóbulos rojos se aglutinan y puede morir. El grupo <mark>0 negativo</mark> es el <b>donante universal</b>, porque sus glóbulos no tienen antígenos A, B ni Rh; el <b>AB positivo</b> es el receptor universal.</p><p>La sangre no se puede fabricar y caduca en pocas semanas, así que los hospitales dependen de las donaciones. En España puede donar cualquier persona sana de 18 a 65 años que pese más de 50 kg. Una donación son unos 450 mL y el cuerpo los recupera en pocas semanas.</p>`,
      svg: L.tabla("Grupos sanguíneos: antígenos y a quién pueden donar", ["Grupo", "Antígenos", "Dona a"], [["A", "A", "A y AB"], ["B", "B", "B y AB"], ["AB", "A y B", "AB"], ["0", "ninguno", "todos"]]),
    },
    {
      html: `<h3>2.3 Los vasos sanguíneos</h3><p>Hay tres tipos de vasos. Las <b>arterias</b> llevan la sangre <mark>desde el corazón</mark> hacia los órganos; tienen paredes gruesas y elásticas porque soportan mucha presión. Las <b>venas</b> llevan la sangre <mark>hacia el corazón</mark>; sus paredes son más finas y tienen <b>válvulas</b> que impiden que la sangre retroceda, sobre todo en las piernas. Los <b>capilares</b> son finísimos, con una sola capa de células, y unen arterias y venas: en ellos se produce el intercambio de sustancias entre la sangre y las células.</p><p>Las arterias se ramifican en <b>arteriolas</b> antes de llegar a los capilares, y los capilares se reúnen en <b>vénulas</b> que forman las venas. Hay tantos capilares que ninguna célula del cuerpo está a más de una décima de milímetro de uno. En las venas de las piernas, la sangre sube contra la gravedad gracias a las válvulas y a la presión de los músculos al caminar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte de una arteria de pared gruesa, una vena de pared fina con válvula y un capilar de una sola capa">${BG}
        <circle cx="50" cy="76" r="34" fill="var(--red)" fill-opacity=".8"/><circle cx="50" cy="76" r="18" fill="var(--paper)"/>
        <ellipse cx="130" cy="76" rx="36" ry="28" fill="var(--pen)" fill-opacity=".7"/><ellipse cx="130" cy="76" rx="29" ry="21" fill="var(--paper)"/><path d="M108 66 Q 130 84 152 66" stroke="var(--pen)" stroke-width="3" fill="none"/>
        <circle cx="210" cy="76" r="12" fill="#a05ad0" fill-opacity=".8"/><circle cx="210" cy="76" r="9" fill="var(--paper)"/>
        ${t(50, 134, "arteria", { size: 12, color: "var(--red)" })}${t(50, 150, "pared gruesa", { size: 10, weight: 400 })}
        ${t(130, 134, "vena", { size: 12, color: "var(--pen)" })}${t(130, 150, "con válvulas", { size: 10, weight: 400 })}
        ${t(210, 134, "capilar", { size: 12, color: "#7a3ab0" })}${t(210, 150, "una capa", { size: 10, weight: 400 })}</svg>`,
    },
    {
      html: `<h3>2.4 El corazón</h3><p>El <b>corazón</b> es un músculo hueco del tamaño de un puño, situado entre los pulmones. Tiene <mark>cuatro cavidades</mark>: dos <b>aurículas</b> arriba, que reciben la sangre de las venas, y dos <b>ventrículos</b> abajo, que la expulsan por las arterias. Un tabique separa el lado derecho, con sangre pobre en oxígeno, del izquierdo, con sangre rica en oxígeno. Entre aurículas y ventrículos, y a la salida de las arterias, hay <b>válvulas</b> que hacen que la sangre circule en un solo sentido. Su cierre produce el sonido del latido.</p><p>El corazón está formado por un músculo especial, el <b>miocardio</b>, que nunca se cansa. El propio corazón necesita oxígeno y lo recibe por unas arterias que lo rodean como una corona, las <b>coronarias</b>. Si una se obstruye, una parte del músculo se queda sin oxígeno y muere: es un <b>infarto de miocardio</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corazón en corte con aurícula y ventrículo derechos en azul y aurícula y ventrículo izquierdos en rojo">${BG}
        ${corazon(130, 92, 1.05)}
        ${t(14, 46, "aurícula", { size: 10, anchor: "start", color: "var(--pen)" })}${t(14, 58, "derecha", { size: 10, anchor: "start", color: "var(--pen)" })}
        ${t(246, 46, "aurícula", { size: 10, anchor: "end", color: "var(--red)" })}${t(246, 58, "izquierda", { size: 10, anchor: "end", color: "var(--red)" })}
        ${t(14, 130, "ventrículo", { size: 10, anchor: "start", color: "var(--pen)" })}${t(14, 142, "derecho", { size: 10, anchor: "start", color: "var(--pen)" })}
        ${t(246, 130, "ventrículo", { size: 10, anchor: "end", color: "var(--red)" })}${t(246, 142, "izquierdo", { size: 10, anchor: "end", color: "var(--red)" })}
        ${t(130, 176, "el lado derecho del corazón queda a tu izquierda", { size: 9, color: "var(--muted)", weight: 400 })}</svg>`,
      video: { id: "acwdt48G4Gw", titulo: "Cómo funciona el corazón (Animación)", canal: "Thomas Schwenke ES", vistas: 1286563 },
    },
    {
      html: `<h3>2.5 El latido, el pulso y la tensión</h3><p>Cada latido tiene dos fases. En la <b>sístole</b>, el músculo se contrae y empuja la sangre; en la <b>diástole</b>, se relaja y las cavidades se llenan. En reposo, el corazón late entre <mark>60 y 100 veces por minuto</mark>, y más deprisa al hacer ejercicio. Cada latido produce una onda en las arterias, el <b>pulso</b>, que se nota en la muñeca o el cuello. La <b>tensión arterial</b> es la fuerza de la sangre contra las paredes de las arterias; se dan dos cifras, la máxima (sístole) y la mínima (diástole), por ejemplo 12/8.</p><p>El latido no lo ordena el encéfalo: nace en el propio corazón, en un grupo de células de la aurícula derecha, el <b>marcapasos natural</b> o nódulo sinusal, que produce impulsos eléctricos. El sistema nervioso solo lo acelera o lo frena. Cuando el marcapasos falla, se puede implantar uno artificial. La tensión ideal en un adulto ronda 12/8; si se mantiene por encima de 14/9, hay <b>hipertensión</b>.</p>`,
      svg: L.compara("Las dos fases del ciclo cardiaco", ["Sístole", "var(--red)", ["el músculo se contrae", "expulsa la sangre", "tensión máxima", "se cierran válvulas"]], ["Diástole", "var(--pen)", ["el músculo se relaja", "se llenan cavidades", "tensión mínima", "entra la sangre"]]),
    },
    {
      html: `<h3>3.1 Una circulación doble y cerrada</h3><p>La circulación humana es <b>cerrada</b>, porque la sangre siempre va dentro de vasos, y <b>doble</b>, porque pasa dos veces por el corazón en cada vuelta. En la <mark>circulación menor o pulmonar</mark>, el ventrículo derecho envía sangre pobre en O₂ a los pulmones por la arteria pulmonar; allí se oxigena y vuelve a la aurícula izquierda por las venas pulmonares. En la <mark>circulación mayor o general</mark>, el ventrículo izquierdo la impulsa por la aorta a todo el cuerpo y vuelve, pobre en O₂, a la aurícula derecha por las venas cavas.</p><p>Gracias a que la circulación es doble, la sangre rica en oxígeno no se mezcla nunca con la pobre, y la que va al cuerpo sale con mucha presión desde el ventrículo izquierdo. Algunos animales, como los peces, tienen una circulación <b>sencilla</b>: la sangre pasa una sola vez por el corazón en cada vuelta y llega con menos presión a los órganos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de la circulación doble: circuito pulmonar arriba y circuito general abajo">${BG}
        <rect x="90" y="70" width="80" height="44" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M130 70 V 114" stroke="var(--ink)" stroke-width="2"/>
        ${t(110, 96, "D", { size: 13, color: "var(--pen)" })}${t(150, 96, "I", { size: 13, color: "var(--red)" })}
        <rect x="92" y="14" width="76" height="26" rx="8" fill="var(--water)" fill-opacity=".25" stroke="var(--inf)" stroke-width="2"/>${t(130, 31, "pulmones", { size: 11, color: "var(--inf)" })}
        <rect x="82" y="142" width="96" height="26" rx="8" fill="var(--sun)" fill-opacity=".25" stroke="#b8860b" stroke-width="2"/>${t(130, 159, "resto del cuerpo", { size: 11, color: "#8a6a0b" })}
        <path d="M100 70 Q 60 54 92 30" stroke="var(--pen)" stroke-width="3" fill="none"/><path d="M168 30 Q 200 54 160 70" stroke="var(--red)" stroke-width="3" fill="none"/>
        <path d="M170 104 Q 236 120 178 152" stroke="var(--red)" stroke-width="3" fill="none"/><path d="M82 152 Q 24 120 90 104" stroke="var(--pen)" stroke-width="3" fill="none"/>
        ${t(224, 58, "menor", { size: 10, color: "var(--muted)" })}${t(232, 136, "mayor", { size: 10, color: "var(--muted)" })}
        ${t(36, 50, "pobre", { size: 9, color: "var(--pen)" })}${t(36, 62, "en O₂", { size: 9, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>3.2 El sistema linfático</h3><p>No todo el líquido que sale de los capilares vuelve a ellos. El sobrante se recoge en otra red de vasos, el <b>sistema linfático</b>, y forma la <b>linfa</b>, un líquido transparente sin glóbulos rojos. Los vasos linfáticos la devuelven a la sangre cerca del corazón. Por el camino atraviesa los <mark>ganglios linfáticos</mark>, pequeños filtros llenos de glóbulos blancos que atrapan microbios: por eso se hinchan cuando tenemos una infección, por ejemplo en el cuello. Además, los vasos linfáticos del intestino absorben las grasas de la digestión.</p><p>Forman parte del sistema linfático otros órganos con funciones defensivas: el <b>bazo</b>, que además destruye los glóbulos rojos viejos; el <b>timo</b>, donde maduran algunos glóbulos blancos; y las <b>amígdalas</b>. A diferencia de la sangre, la linfa no tiene una bomba: avanza gracias a la contracción de los músculos y a las válvulas de sus vasos.</p>`,
      svg: L.flujo("Recorrido de la linfa", ["Líquido que sale de los capilares", "Vasos linfáticos: forma la linfa", "Ganglios: filtran microbios", "Vuelve a la sangre cerca del corazón"], "El sistema linfático"),
    },
    {
      html: `<h3>3.3 El ejercicio y la reanimación cardiopulmonar</h3><p>Durante el ejercicio, los músculos necesitan mucho más oxígeno. Los dos aparatos responden juntos: la frecuencia respiratoria puede pasar de 15 a más de 40 respiraciones por minuto y el corazón, de 70 a más de 180 latidos. Con el entrenamiento regular el corazón se hace más fuerte y bombea más sangre en cada latido, por eso los deportistas tienen pulsos en reposo bajos, a veces de 50.</p><p>Si una persona se desploma, no responde y no respira con normalidad, puede estar en <mark>parada cardiorrespiratoria</mark>. Cada minuto sin ayuda reduce mucho sus posibilidades de sobrevivir. Cualquiera puede ayudar siguiendo la <b>cadena de supervivencia</b>: comprobar que no responde, llamar al <b>112</b>, empezar las <mark>compresiones torácicas</mark> en el centro del pecho, fuertes y rápidas (100 a 120 por minuto, unos 5 cm de profundidad), y usar un <b>desfibrilador</b> (DEA) si hay uno cerca: el aparato da las instrucciones en voz alta.</p>`,
      svg: L.flujo("Cadena de supervivencia ante una parada cardiaca", ["Comprobar que no responde ni respira", "Llamar al 112", "Compresiones: 100-120 por minuto", "Desfibrilador (DEA) si lo hay"], "Reanimación cardiopulmonar"),
    },
    {
      html: `<h3>3.4 Cuidar los pulmones y el corazón</h3><p>El <b>tabaco</b> es la principal causa evitable de enfermedad: paraliza los cilios que limpian los bronquios, provoca bronquitis crónica y cáncer de pulmón, y endurece las arterias. El vapeo tampoco es inocuo. Otras enfermedades respiratorias frecuentes son el <b>asma</b> y las infecciones como la gripe o la neumonía. Las <mark>enfermedades cardiovasculares</mark>, como el infarto o el ictus, son la primera causa de muerte en España; se relacionan con la hipertensión, el colesterol alto, el sedentarismo y la obesidad. El ejercicio regular y una dieta sana son la mejor prevención.</p><p>La <b>contaminación del aire</b> también daña los pulmones y el corazón, sobre todo en las ciudades con mucho tráfico. Otros hábitos protectores son evitar la sal en exceso, que sube la tensión, mantener un peso saludable, dormir bien y controlar el estrés. Se recomienda al menos una hora diaria de actividad física moderada o intensa en la adolescencia.</p>`,
      svg: L.tabla("Enfermedades respiratorias y cardiovasculares y sus causas", ["Enfermedad", "Órgano", "Factor de riesgo"], [["Asma", "bronquios", "alergias, contaminación"], ["Cáncer de pulmón", "pulmones", "tabaco"], ["Infarto", "corazón", "colesterol, tabaco"], ["Ictus", "encéfalo", "hipertensión"], ["Varices", "venas", "sedentarismo"]]),
    },
  ],
  figura: {
    titulo: "El viaje del oxígeno",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="El oxígeno entra por la nariz, llega a los alvéolos, pasa a la sangre, el corazón lo bombea y las células lo usan; el CO2 hace el camino al revés">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[["aire", "nariz y tráquea", "var(--inf)"], ["alvéolos", "difusión a la sangre", "var(--inf)"], ["corazón", "lo bombea", "var(--red)"], ["arterias", "lo reparten", "var(--red)"], ["células", "mitocondrias: energía", "var(--leaf)"]].map(([n, d, c], i) => { const x = 20 + i * 122; return `<rect x="${x}" y="70" width="110" height="80" rx="12" fill="var(--card)" stroke="${c}" stroke-width="3"/>${t(x + 55, 104, n, { size: n.length > 10 ? 12 : 15, color: c, font: D })}${t(x + 55, 128, d, { size: 11, weight: 400 })}${i < 4 ? fl(x + 111, 110, x + 121, 110, "var(--red)") : ""}`; }).join("")}
      ${t(320, 50, "O₂ →", { size: 18, color: "var(--red)" })}
      <path d="M570 160 V 200 H 75 V 160" stroke="var(--pen)" stroke-width="3" fill="none" stroke-dasharray="8 5"/>${fl(75, 175, 75, 158, "var(--pen)", 3)}
      ${t(320, 228, "← el CO₂ hace el camino al revés y sale al espirar", { size: 15, color: "var(--pen)" })}
    </svg>`,
  },
  video: { id: "uUpdItCbr24", titulo: "¿Cómo funciona el sistema respiratorio? (Animación)", canal: "Thomas Schwenke ES", vistas: 692385, megusta: 0, busqueda: "intercambio de gases alveolos" },
  ejemplos: [
    { enunciado: "Sigue a un glóbulo rojo que sale del ventrículo izquierdo hasta que vuelve a él. ¿Por qué cavidades y vasos pasa?",
      pasos: ["Sale por la aorta (circulación mayor) y llega por las arterias a los capilares de un órgano, donde deja el O₂.", "Vuelve pobre en O₂ por las venas cavas a la aurícula derecha, y baja al ventrículo derecho.", "Sale por la arteria pulmonar a los pulmones, donde capta O₂ (circulación menor).", "Vuelve por las venas pulmonares a la aurícula izquierda y baja al ventrículo izquierdo."],
      resultado: "VI → aorta → cuerpo → cavas → AD → VD → arteria pulmonar → pulmones → venas pulmonares → AI → VI." },
    { enunciado: "En reposo, una persona respira 15 veces por minuto y mueve 0,5 L en cada respiración. ¿Cuántos litros de aire respira en una hora?",
      pasos: ["Por minuto: 15 · 0,5 = 7,5 L.", "Por hora: 7,5 · 60 = 450 L."],
      resultado: "unos 450 litros de aire por hora." },
    { enunciado: "La arteria pulmonar lleva sangre pobre en oxígeno. ¿Entonces por qué se llama arteria?",
      pasos: ["El nombre de un vaso no depende del oxígeno que lleva.", "Depende del sentido: las arterias salen del corazón y las venas llegan a él.", "La arteria pulmonar sale del ventrículo derecho hacia los pulmones."],
      resultado: "porque sale del corazón; las venas pulmonares, en cambio, llevan sangre rica en O₂." },
    { enunciado: "Una persona del grupo A+ necesita una transfusión. ¿Puede recibir sangre de un donante 0−? ¿Y de uno B+?",
      pasos: ["El 0− no tiene antígenos A, B ni Rh en sus glóbulos rojos.", "Los anticuerpos del receptor no encuentran nada que atacar: es compatible.", "El B+ tiene el antígeno B, y el plasma de una persona A tiene anticuerpos anti-B."],
      resultado: "sí del 0− (donante universal); no del B+, porque sus glóbulos se aglutinarían." },
    { enunciado: "El corazón bombea unos 70 mL de sangre en cada latido a 70 latidos por minuto. ¿Cuántos litros bombea en un minuto? ¿Y en un día?",
      pasos: ["En un minuto: 70 mL · 70 = 4.900 mL ≈ 4,9 L.", "En una hora: 4,9 · 60 = 294 L.", "En un día: 294 · 24 ≈ 7.056 L."],
      resultado: "unos 4,9 L por minuto y unos 7.000 L al día." },
    { enunciado: "El pulso de Marta en reposo es de 66 y tras correr sube a 150. Explica por qué y qué ocurre con su respiración.",
      pasos: ["Al correr, los músculos hacen más respiración celular y necesitan más O₂ y glucosa.", "Producen también más CO₂, que el bulbo raquídeo detecta.", "El corazón late más rápido para llevar más sangre a los músculos y la respiración se acelera para captar O₂ y expulsar CO₂."],
      resultado: "aumentan el pulso y la frecuencia respiratoria para abastecer a los músculos." },
  ],
  errores: [
    "Pensar que las arterias siempre llevan sangre roja y las venas azul: depende del sentido, no del oxígeno.",
    "Confundir la respiración pulmonar con la celular.",
    "Creer que los pulmones tienen músculos propios: los mueve el diafragma.",
    "Decir que el intercambio de gases ocurre en los bronquios: ocurre en los alvéolos.",
    "Situar el lado izquierdo del corazón a la izquierda del dibujo: en los esquemas se ve como si lo miraras de frente.",
    "Pensar que la sangre de las venas es azul: es rojo oscuro; se ve azulada a través de la piel.",
  ],
  ejercicios: [
    { nivel: "básico", ...{ q: "Escribe la reacción de la respiración celular y di dónde ocurre.", sol: "Glucosa + oxígeno → dióxido de carbono + agua + energía. Ocurre en las mitocondrias de las células." } },
    { nivel: "básico", ...{ q: "Ordena el recorrido del aire desde la nariz hasta el alvéolo.", sol: "Fosas nasales, faringe, laringe, tráquea, bronquios, bronquiolos y alvéolos." } },
    { nivel: "básico", ...{ q: "Explica qué hace el diafragma en la inspiración y en la espiración.", sol: "En la inspiración se contrae y baja: aumenta el volumen del tórax y entra aire. En la espiración se relaja y sube: disminuye el volumen y sale el aire." } },
    { nivel: "básico", ...{ q: "Indica la función de los glóbulos rojos, los blancos y las plaquetas.", sol: "Rojos: transportar oxígeno. Blancos: defender de infecciones. Plaquetas: coagular la sangre." } },
    { nivel: "básico", ...{ q: "Compara arterias, venas y capilares.", sol: "Arterias: salen del corazón, pared gruesa y elástica. Venas: llegan al corazón, pared fina y válvulas. Capilares: unen ambas, una sola capa, intercambio de sustancias." } },
    { nivel: "básico", ...{ q: "Cita tres efectos del tabaco sobre estos aparatos.", sol: "Paraliza los cilios de los bronquios, causa bronquitis crónica y cáncer de pulmón, y daña las arterias aumentando el riesgo de infarto." } },
    { nivel: "básico", q: "¿Qué son las pleuras y para qué sirven?", sol: "Dos membranas que envuelven cada pulmón con líquido entre ellas; permiten que el pulmón se deslice sin rozar y que siga los movimientos del tórax." },
    { nivel: "básico", q: "Nombra las cuatro cavidades del corazón y di qué hacen.", sol: "Aurícula derecha e izquierda: reciben la sangre de las venas. Ventrículo derecho e izquierdo: la expulsan por las arterias." },
    { nivel: "básico", q: "¿Dónde se fabrican las células de la sangre?", sol: "En la médula ósea roja, en el interior de huesos como el esternón, las costillas o la pelvis." },
    { nivel: "básico", q: "Escribe los cuatro grupos sanguíneos del sistema AB0 y cuál es el donante universal.", sol: "A, B, AB y 0. El donante universal es el 0 negativo." },
    { nivel: "básico", q: "¿Qué son la sístole y la diástole?", sol: "La sístole es la contracción del corazón, que expulsa la sangre; la diástole es su relajación, en la que las cavidades se llenan." },
    { nivel: "básico", q: "Escribe los pasos de la cadena de supervivencia ante una parada cardiaca.", sol: "Comprobar que no responde ni respira, llamar al 112, hacer compresiones torácicas fuertes y rápidas, y usar un desfibrilador si hay uno." },
    { nivel: "medio", ...{ q: "¿Por qué los alvéolos son tan eficaces para el intercambio de gases?", sol: "Son muchísimos (gran superficie), tienen la pared muy fina y están rodeados de capilares, así que los gases difunden con facilidad." } },
    { nivel: "medio", ...{ q: "¿Por qué la pared del ventrículo izquierdo es más gruesa que la del derecho?", sol: "Porque bombea la sangre a todo el cuerpo (circulación mayor), que necesita mucha más fuerza que enviarla solo a los pulmones." } },
    { nivel: "medio", ...{ q: "Tu pulso es de 18 latidos en 15 segundos. ¿Cuántas pulsaciones por minuto son? ¿Es normal en reposo?", sol: "18 · 4 = 72 pulsaciones por minuto. Sí, está entre 60 y 100." } },
    { nivel: "medio", ...{ q: "¿Qué significa que la circulación sea doble y cerrada?", sol: "Doble: la sangre pasa dos veces por el corazón en cada vuelta (circuito pulmonar y general). Cerrada: siempre circula dentro de vasos." } },
    { nivel: "medio", q: "Explica cómo se forma un coágulo cuando nos hacemos una herida.", sol: "Las plaquetas se acumulan en la herida y liberan sustancias que forman una red de fibrina; en ella quedan atrapados los glóbulos rojos y se forma un tapón que detiene la hemorragia." },
    { nivel: "medio", q: "¿Por qué una persona del grupo 0 solo puede recibir sangre del grupo 0?", sol: "Porque su plasma tiene anticuerpos anti-A y anti-B; si recibe glóbulos con antígeno A o B, los atacan y se aglutinan." },
    { nivel: "medio", q: "¿Qué función tienen los cilios de la tráquea? ¿Qué les hace el tabaco?", sol: "Empujan el moco con el polvo y los microbios atrapados hacia la faringe para expulsarlo. El tabaco los paraliza y los destruye, por eso los fumadores tosen para expulsar el moco." },
    { nivel: "medio", q: "Explica el intercambio de gases en los tejidos.", sol: "Las células gastan O₂ y producen CO₂. Por difusión, el O₂ pasa de la sangre de los capilares a las células, donde hay menos, y el CO₂ pasa de las células a la sangre." },
    { nivel: "medio", q: "¿Por qué no podemos aguantar la respiración indefinidamente?", sol: "Porque el CO₂ se acumula en la sangre; el bulbo raquídeo lo detecta y obliga a respirar de forma automática." },
    { nivel: "medio", q: "Explica qué es el marcapasos natural del corazón.", sol: "Un grupo de células de la aurícula derecha (nódulo sinusal) que produce impulsos eléctricos y hace latir el corazón por sí solo; el sistema nervioso solo acelera o frena ese ritmo." },
    { nivel: "medio", q: "Compara la sangre y la linfa.", sol: "La sangre circula por vasos sanguíneos impulsada por el corazón y lleva glóbulos rojos. La linfa circula por vasos linfáticos sin bomba, es transparente, no tiene glóbulos rojos, pasa por los ganglios y vuelve a la sangre." },
    { nivel: "medio", q: "Una persona tiene una tensión de 15/9,5 durante varias semanas. ¿Qué le pasa y qué hábitos le recomendarías?", sol: "Tiene hipertensión, porque supera 14/9. Debería reducir la sal, hacer ejercicio, perder peso si lo necesita, no fumar y acudir al médico." },
    { nivel: "avanzado", q: "Explica por qué es más eficaz la circulación doble que la sencilla de los peces.", sol: "En la doble, la sangre oxigenada vuelve al corazón y sale con mucha presión hacia el cuerpo, y la oxigenada no se mezcla con la pobre en O₂. En la sencilla, la sangre pierde presión al pasar por las branquias y llega a los órganos con menos fuerza." },
    { nivel: "avanzado", q: "Una persona vive en una ciudad a 4.000 m de altitud, donde hay menos oxígeno en el aire. ¿Qué cambios esperas en su sangre y por qué?", sol: "Tendrá más glóbulos rojos y más hemoglobina: el cuerpo se adapta fabricando más para captar el poco O₂ disponible. Por eso algunos deportistas entrenan en altura." },
    { nivel: "avanzado", q: "Explica por qué las arterias coronarias son tan importantes y qué hábitos las protegen.", sol: "Llevan oxígeno al propio músculo del corazón; si se obstruyen por placas de colesterol, una parte del miocardio muere (infarto). Las protegen no fumar, comer poca grasa saturada, hacer ejercicio y controlar la tensión y el colesterol." },
    { nivel: "avanzado", q: "Construye una tabla con el recorrido del oxígeno desde el aire hasta una mitocondria del músculo del muslo.", sol: "Fosas nasales → faringe → laringe → tráquea → bronquios → bronquiolos → alvéolo → capilar pulmonar (se une a la hemoglobina) → venas pulmonares → aurícula izquierda → ventrículo izquierdo → aorta → arteria femoral → capilar del músculo → célula muscular → mitocondria." },
    { nivel: "avanzado", q: "¿Por qué en el boca a boca sirve el aire que espiramos si ya lo hemos respirado?", sol: "Porque el aire espirado aún tiene un 16 % de oxígeno (el inspirado, un 21 %); solo usamos una parte del O₂ en cada respiración, así que el que queda es suficiente para oxigenar a otra persona." },
    { nivel: "avanzado", q: "Diseña una investigación para estudiar cómo cambia la frecuencia cardiaca con distintos tipos de ejercicio.", sol: "Medir el pulso en reposo de varios voluntarios; repetir tras 2 minutos de caminar, de correr y de saltar; medir también la recuperación cada minuto. Mantener iguales la duración y las condiciones, registrar en una tabla, representar en una gráfica y comparar medias." },
    { nivel: "avanzado", q: "Argumenta por qué es importante que haya desfibriladores en lugares públicos y que la población sepa hacer RCP.", sol: "En una parada cardiaca cada minuto sin reanimación reduce mucho la supervivencia y las ambulancias tardan varios minutos en llegar. Si los testigos hacen compresiones y usan un DEA enseguida, se multiplican las posibilidades de sobrevivir sin secuelas." },
    { nivel: "avanzado", q: "Una madre Rh− tiene un bebé Rh+. ¿Qué problema puede haber en un segundo embarazo y cómo se evita?", sol: "En el primer parto pueden pasar glóbulos Rh+ del bebé a la madre, que fabrica anticuerpos anti-Rh. En un segundo embarazo con un bebé Rh+, esos anticuerpos atravesarían la placenta y destruirían sus glóbulos rojos. Se evita poniendo a la madre una inyección de anticuerpos anti-Rh tras el parto." },
  ],
  quiz: [
    { q: "La respiración celular ocurre en…", o: ["los pulmones", "las mitocondrias", "los alvéolos", "la tráquea"], a: 1, e: "Libera energía de la glucosa." },
    { q: "El intercambio de gases en los pulmones ocurre en…", o: ["los bronquios", "la tráquea", "los alvéolos", "la laringe"], a: 2, e: "Paredes finísimas rodeadas de capilares." },
    { q: "Los gases pasan entre el alvéolo y la sangre por…", o: ["difusión", "bombeo", "digestión", "filtración"], a: 0, e: "De más a menos concentración." },
    { q: "En la inspiración, el diafragma…", o: ["se relaja y sube", "no se mueve", "se rompe", "se contrae y baja"], a: 3, e: "El tórax se agranda y entra aire." },
    { q: "Las cuerdas vocales están en…", o: ["la faringe", "la laringe", "la tráquea", "los bronquios"], a: 1, e: "Vibran con el aire." },
    { q: "El pulmón izquierdo tiene…", o: ["tres lóbulos", "un lóbulo", "dos lóbulos", "cuatro lóbulos"], a: 2, e: "Deja hueco para el corazón." },
    { q: "Los glóbulos rojos transportan…", o: ["oxígeno", "anticuerpos", "plaquetas", "grasas"], a: 0, e: "Unido a la hemoglobina." },
    { q: "Las plaquetas sirven para…", o: ["transportar O₂", "defender", "digerir", "la coagulación"], a: 3, e: "Forman el coágulo." },
    { q: "El donante universal es el grupo…", o: ["AB+", "0−", "A+", "B−"], a: 1, e: "Sin antígenos A, B ni Rh." },
    { q: "Las arterias…", o: ["llegan al corazón", "tienen válvulas", "salen del corazón", "tienen una sola capa"], a: 2, e: "Paredes gruesas y elásticas." },
    { q: "Las venas tienen válvulas para…", o: ["evitar que la sangre retroceda", "oxigenar la sangre", "filtrar microbios", "producir el pulso"], a: 0, e: "Sobre todo en las piernas." },
    { q: "El intercambio de sustancias con las células ocurre en…", o: ["la aorta", "las venas cavas", "el corazón", "los capilares"], a: 3, e: "Una sola capa de células." },
    { q: "La cavidad que envía sangre a todo el cuerpo es el…", o: ["ventrículo derecho", "ventrículo izquierdo", "aurícula derecha", "aurícula izquierda"], a: 1, e: "Por la aorta." },
    { q: "La contracción del corazón se llama…", o: ["diástole", "pulso", "sístole", "tensión"], a: 2, e: "Expulsa la sangre." },
    { q: "Las venas pulmonares llevan sangre…", o: ["rica en oxígeno", "pobre en oxígeno", "con linfa", "sin células"], a: 0, e: "De los pulmones a la aurícula izquierda." },
    { q: "La circulación humana es…", o: ["sencilla y abierta", "sencilla y cerrada", "doble y abierta", "doble y cerrada"], a: 3, e: "Pasa dos veces por el corazón y siempre en vasos." },
    { q: "Los ganglios linfáticos…", o: ["bombean linfa", "filtran microbios", "fabrican bilis", "oxigenan la sangre"], a: 1, e: "Se hinchan con las infecciones." },
    { q: "El ritmo del corazón lo inicia…", o: ["el encéfalo", "los pulmones", "el marcapasos natural", "el diafragma"], a: 2, e: "En la aurícula derecha." },
    { q: "El teléfono de emergencias en Europa es el…", o: ["112", "091", "061", "010"], a: 0, e: "Primer paso de la cadena." },
    { q: "Las arterias que alimentan al corazón son las…", o: ["pulmonares", "cavas", "femorales", "coronarias"], a: 3, e: "Su obstrucción causa un infarto." },
  ],
  examen: [
    { q: "La arteria pulmonar lleva sangre…", o: ["rica en O₂ al cuerpo", "pobre en O₂ a los pulmones", "de los pulmones al corazón", "linfa"], a: 1, e: "Sale del ventrículo derecho." },
    { q: "El tabaco paraliza…", o: ["el diafragma", "las válvulas", "los cilios de los bronquios", "el corazón"], a: 2, e: "Que limpian las vías." },
    { q: "La parte líquida de la sangre es el…", o: ["plasma", "suero", "coágulo", "hemograma"], a: 0, e: "El 55 % del volumen." },
    { q: "Las enfermedades cardiovasculares se relacionan con…", o: ["comer fruta", "hacer deporte", "dormir bien", "hipertensión y colesterol alto"], a: 3, e: "Primera causa de muerte en España." },
    { q: "La respiración se acelera cuando sube en sangre el…", o: ["oxígeno", "CO₂", "agua", "hierro"], a: 1, e: "Lo detecta el bulbo raquídeo." },
    { q: "Una persona AB+ puede recibir sangre de…", o: ["solo AB", "solo 0", "cualquier grupo", "ningún grupo"], a: 2, e: "Receptor universal." },
    { q: "Las compresiones torácicas deben hacerse a un ritmo de…", o: ["100-120 por minuto", "20 por minuto", "60 por minuto", "200 por minuto"], a: 0, e: "Fuertes y rápidas." },
    { q: "La linfa avanza gracias a…", o: ["el corazón", "la gravedad", "los pulmones", "la contracción de los músculos y las válvulas"], a: 3, e: "No tiene bomba propia." },
  ],
  feynman: [...["Qué diferencia hay entre respirar con los pulmones y la respiración celular", "Cómo pasa el oxígeno del aire a la sangre", "Cómo funciona el corazón y qué es la circulación doble"], "Cómo funcionan los grupos sanguíneos y por qué el 0− es donante universal", "Qué hacer si alguien sufre una parada cardiaca"],
  mapa: mapa("RESPIRAR Y CIRCULAR", "var(--eso)", [
    ["Vías respiratorias", "nariz · tráquea · bronquios", "var(--inf)"],
    ["Pulmones", "alvéolos · diafragma · difusión", "var(--leaf)"],
    ["Sangre y vasos", "plasma · arterias · venas · capilares", "var(--red)"],
    ["Corazón", "4 cavidades · circulación doble", "var(--pen)"],
  ], 280),
  tarjetas: [
    ...[
    ["Respiración celular", "Glucosa + O₂ → CO₂ + agua + energía, en las mitocondrias."],
    ["Alvéolo", "Saquito pulmonar donde se intercambian los gases con la sangre."],
    ["Difusión", "Paso de un gas de donde hay más concentración a donde hay menos."],
    ["Diafragma", "Músculo bajo los pulmones que permite la ventilación."],
    ["Arteria", "Vaso que sale del corazón; pared gruesa y elástica."],
    ["Vena", "Vaso que llega al corazón; pared fina y válvulas."],
    ["Sístole y diástole", "Contracción y relajación del corazón."],
    ["Circulación doble", "Menor (pulmones) y mayor (cuerpo): la sangre pasa dos veces por el corazón."],
  ],
    ["Hemoglobina", "Proteína con hierro de los glóbulos rojos que transporta el oxígeno."],
    ["Grupos sanguíneos", "A, B, AB y 0, más el factor Rh. Donante universal: 0−."],
    ["Pleuras", "Membranas que envuelven los pulmones y les permiten deslizarse."],
    ["RCP", "Llamar al 112, compresiones 100-120 por minuto y desfibrilador."],
  ],
  glosario: [
    ["Respiración celular", "Reacción de la glucosa con el oxígeno que libera energía en las mitocondrias."],
    ["Ventilación pulmonar", "Entrada y salida de aire de los pulmones."],
    ["Alvéolo", "Saquito pulmonar donde se intercambian los gases."],
    ["Difusión", "Paso de una sustancia de donde hay más concentración a donde hay menos."],
    ["Diafragma", "Músculo bajo los pulmones que permite la ventilación."],
    ["Pleura", "Membrana doble que envuelve cada pulmón."],
    ["Plasma", "Parte líquida de la sangre."],
    ["Hemoglobina", "Proteína de los glóbulos rojos que transporta el oxígeno."],
    ["Antígeno", "Molécula que el sistema inmunitario puede reconocer."],
    ["Arteria", "Vaso que sale del corazón."],
    ["Vena", "Vaso que llega al corazón."],
    ["Capilar", "Vaso finísimo donde se intercambian sustancias."],
    ["Aurícula", "Cavidad superior del corazón que recibe la sangre."],
    ["Ventrículo", "Cavidad inferior del corazón que la expulsa."],
    ["Sístole", "Contracción del corazón."],
    ["Diástole", "Relajación del corazón."],
    ["Linfa", "Líquido transparente que circula por los vasos linfáticos."],
    ["Desfibrilador", "Aparato que da una descarga eléctrica para recuperar el ritmo del corazón."],
  ],
  situacion: {
    titulo: "Instituto cardiosaludable",
    reto: "El instituto quiere convertirse en un «centro cardioprotegido» y promover hábitos saludables. Vuestro grupo hará un estudio del pulso y la respiración en la clase y una campaña sobre RCP y prevención.",
    pasos: [
      "Medid el pulso y la frecuencia respiratoria en reposo y después de 2 minutos de ejercicio, y la recuperación cada minuto.",
      "Organizad los datos en tablas y gráficas y explicad los cambios con lo aprendido sobre los dos aparatos.",
      "Construid un modelo de pulmón con una botella y globos para explicar la ventilación.",
      "Preparad una demostración de la cadena de supervivencia y las compresiones torácicas con un maniquí o un cojín.",
      "Diseñad carteles sobre los riesgos del tabaco y el vapeo y sobre los hábitos cardiosaludables.",
    ],
    producto: "Informe con los datos del grupo y una campaña (carteles y demostración de RCP) para el resto del instituto.",
    evaluacion: [
      "Rigor en la toma de medidas y en las gráficas.",
      "Explicación correcta de los cambios fisiológicos.",
      "Corrección de los pasos de la RCP.",
      "Claridad y poder de convicción de la campaña.",
    ],
  },
  familias: ["Tomaos el pulso en reposo y después de subir escaleras y comparad.", "Hablad sobre el tabaco y el vapeo y sus efectos en los pulmones.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Saberes básicos de «Cuerpo humano» y «Hábitos saludables» de Biología y Geología de 1º a 3º (RD 217/2022, BOE-A-2022-4975): anatomía y fisiología de los aparatos respiratorio y circulatorio, intercambio de gases, sangre y grupos sanguíneos, corazón, circulación doble, sistema linfático, hábitos saludables y primeros auxilios. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Modelo de pulmón con botella, globos y membrana elástica como diafragma.",
      "Disección de corazón de cerdo o cordero para ver cavidades y válvulas.",
      "Medida del pulso y de la frecuencia respiratoria antes y después del ejercicio, con gráfica.",
      "Taller de RCP con maniquí en colaboración con el centro de salud o Cruz Roja.",
    ],
  },
  fuentes: [...[RD, wiki("Aparato respiratorio", "Aparato_respiratorio"), wiki("Aparato circulatorio", "Aparato_circulatorio")], wiki("Grupo sanguíneo", "Grupo_sangu%C3%ADneo")],
  revisado: "2026-11-13",
};
