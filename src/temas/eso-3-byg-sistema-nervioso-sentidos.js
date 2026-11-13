// Biología y Geología 3º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso3L4.js.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Neurona: soma con núcleo, dendritas, axón con mielina y terminales.
const neurona = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
  <path d="M-14 -4 L -40 -26 M-40 -26 l -10 -4 M-40 -26 l -2 -12 M-12 10 L -36 30 M-36 30 l -12 0 M-36 30 l 0 12 M-2 -16 L -8 -42 M-8 -42 l -8 -6 M-8 -42 l 6 -8" stroke="var(--pen)" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle r="17" fill="var(--pen)" fill-opacity=".35" stroke="var(--pen)" stroke-width="2.5"/><circle r="6" fill="var(--pen)"/>
  <path d="M17 0 H 150" stroke="var(--pen)" stroke-width="3"/>
  ${[0, 1, 2, 3].map((i) => `<rect x="${30 + i * 30}" y="-7" width="24" height="14" rx="7" fill="var(--sun)" fill-opacity=".8"/>`).join("")}
  <path d="M150 0 l 14 -12 M150 0 l 16 0 M150 0 l 14 12" stroke="var(--pen)" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle cx="165" cy="-12" r="3.5" fill="var(--pen)"/><circle cx="167" cy="0" r="3.5" fill="var(--pen)"/><circle cx="165" cy="12" r="3.5" fill="var(--pen)"/>
</g>`;
const L = require("./_eso3L4");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "La relación: sistema nervioso y sentidos",
  minutos: 115,
  objetivos: [
    "Explicar los pasos de la función de relación: estímulo, receptor, coordinación y respuesta",
    "Describir la neurona, sus tipos, el impulso nervioso y la sinapsis",
    "Diferenciar el sistema nervioso central, el periférico y el autónomo",
    "Relacionar las partes del encéfalo y las áreas de la corteza con sus funciones; distinguir actos voluntarios y reflejos",
    "Describir los órganos de los sentidos y los defectos de la vista y del oído",
    "Adoptar hábitos que protegen el sistema nervioso y los sentidos, y conocer los efectos de las drogas",
  ],
  claves: ["estímulo", "receptor", "efector", "neurona", "sinapsis", "encéfalo", "médula espinal", "acto reflejo", "sistema autónomo"],
  pregunta: {
    texto: "Si tocas una sartén caliente, apartas la mano antes de sentir dolor. ¿Cómo puede el cuerpo responder antes de que te enteres?",
    respuesta: "Porque es un <mark>acto reflejo</mark>: la señal va de la piel a la <b>médula espinal</b> y vuelve directamente al músculo, sin esperar al cerebro. El aviso al cerebro llega una fracción de segundo después, y entonces <b>sientes</b> el dolor. Ese atajo te protege.",
  },
  lectura: {
    titulo: "La barra de hierro que atravesó un cerebro",
    html: `<p>El 13 de septiembre de 1848, Phineas Gage, capataz de una obra de ferrocarril en Estados Unidos, preparaba una voladura cuando la pólvora estalló antes de tiempo. Una barra de hierro de más de un metro salió disparada, le entró por la mejilla izquierda, le atravesó la parte delantera del cerebro y salió por lo alto de la cabeza. Increíblemente, Gage no perdió el conocimiento y unos minutos después hablaba con sus compañeros.</p>
<p>Sobrevivió, pero ya no era el mismo. Antes del accidente era un hombre responsable, amable y respetado. Después se volvió impaciente, grosero e incapaz de cumplir sus planes. «Gage ya no es Gage», decían sus amigos. Su caso fue una de las primeras pistas de que cada zona del cerebro se encarga de tareas distintas: la parte dañada, el lóbulo frontal, participa en el control de las emociones y en la toma de decisiones.</p>
<p>Hoy sabemos mucho más sobre cómo funcionan los 86.000 millones de neuronas del encéfalo y cómo nos conectan con el mundo a través de los sentidos. En este tema aprenderás cómo percibes lo que te rodea, cómo decides y cómo respondes, a veces en milésimas de segundo.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 La función de relación</h3><p>Relacionarse es <b>captar información</b> del entorno y del propio cuerpo y <b>responder</b> a ella. Todo cambio que provoca una respuesta es un <mark>estímulo</mark>: una luz, un sonido, el frío o el hambre. Los <b>receptores</b> (en los órganos de los sentidos) lo detectan y lo convierten en impulsos nerviosos. El <b>sistema nervioso</b> recibe la información, la interpreta y decide qué hacer. Los <b>efectores</b> ejecutan la respuesta: los músculos producen movimientos y las glándulas fabrican sustancias. El sistema endocrino también participa, pero de forma más lenta.</p><p>Hay estímulos <b>externos</b>, que proceden del entorno, como la luz o el ruido, e <b>internos</b>, que proceden del propio cuerpo, como la sed o el dolor de estómago. Las respuestas también pueden ser de dos tipos: <b>motoras</b>, cuando un músculo se contrae, y <b>secretoras</b>, cuando una glándula fabrica una sustancia, como la saliva que aparece al oler comida.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cadena de la relación: estímulo, receptor, sistema nervioso, efector y respuesta">${BG}
        ${[["estímulo", "luz roja", "var(--sun)"], ["receptor", "ojo", "var(--inf)"], ["coordinación", "sistema nervioso", "var(--pen)"], ["efector", "músculo", "var(--red)"], ["respuesta", "frenar", "var(--leaf)"]].map(([n, e, c], i) => {
          const y = 14 + i * 32;
          return `<rect x="40" y="${y}" width="96" height="26" rx="8" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2"/>${t(88, y + 17, n, { size: 11, color: c })}${t(150, y + 17, e, { size: 10, anchor: "start", weight: 400 })}${i < 4 ? fl(88, y + 27, 88, y + 31, c, 2) : ""}`;
        }).join("")}
        ${t(246, 170, "ejemplo: un semáforo", { size: 9, anchor: "end", color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>1.2 La neurona</h3><p>La <b>neurona</b> es la célula del tejido nervioso, especializada en transmitir impulsos. Tiene un <b>cuerpo celular</b> con el núcleo, unas prolongaciones cortas y ramificadas, las <mark>dendritas</mark>, que reciben señales, y una prolongación larga, el <mark>axón</mark>, que las envía. Muchos axones están envueltos en <b>mielina</b>, una capa de grasa que actúa como el plástico de un cable y acelera el impulso. Algunos axones miden más de un metro, como los que van de la médula a los dedos del pie. Tenemos unos 86.000 millones de neuronas solo en el encéfalo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Neurona con dendritas, cuerpo celular con núcleo, axón con vaina de mielina y terminales">${BG}
        ${neurona(64, 90, 1)}
        ${t(20, 30, "dendritas", { size: 11, anchor: "start", color: "var(--pen)" })}${t(64, 140, "cuerpo celular", { size: 11 })}
        ${t(140, 70, "axón con mielina", { size: 11, color: "#b8860b" })}${t(232, 128, "terminales", { size: 10, anchor: "end", color: "var(--pen)" })}
        ${fl(40, 166, 220, 166, "var(--red)")}${t(130, 160, "sentido del impulso", { size: 10, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>1.3 El impulso nervioso y la sinapsis</h3><p>El <b>impulso nervioso</b> es una señal eléctrica que recorre la neurona desde las dendritas hasta el final del axón, a una velocidad de hasta 120 metros por segundo. Pero las neuronas no se tocan. Entre una y otra hay un espacio diminuto, y la conexión se llama <mark>sinapsis</mark>. Cuando el impulso llega al final del axón, se liberan unas sustancias químicas, los <b>neurotransmisores</b>, que cruzan el espacio y activan la neurona siguiente. Muchas drogas y medicamentos actúan precisamente alterando los neurotransmisores.</p><p>Algunos neurotransmisores conocidos son la <b>dopamina</b>, relacionada con el placer y la motivación; la <b>serotonina</b>, con el estado de ánimo y el sueño; y la <b>acetilcolina</b>, que activa los músculos. Cada neurona puede tener miles de sinapsis con otras, de modo que el encéfalo forma una red con billones de conexiones que cambian cuando aprendemos: es la <mark>plasticidad neuronal</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Sinapsis: el final de un axón libera neurotransmisores que cruzan un espacio hasta la dendrita de otra neurona">${BG}
        <path d="M14 70 H 90 Q 120 70 120 90 Q 120 110 90 110 H 14" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.5"/>
        <path d="M246 60 H 170 Q 146 60 146 90 Q 146 120 170 120 H 246" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2.5"/>
        ${[[98, 82], [104, 96], [92, 98]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="none" stroke="var(--red)" stroke-width="1.5"/>`).join("")}
        ${[[128, 80], [132, 92], [126, 100], [136, 86], [130, 106]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.5" fill="var(--red)"/>`).join("")}
        ${t(52, 54, "axón", { size: 11, color: "var(--pen)" })}${t(206, 46, "dendrita", { size: 11, color: "var(--leaf)" })}
        ${t(130, 146, "neurotransmisores", { size: 11, color: "var(--red)" })}<path d="M130 136 V 112" stroke="var(--muted)" stroke-width="1"/>
        ${fl(24, 90, 70, 90, "var(--muted)")}</svg>`,
      video: { id: "4MabFuyhZe4", titulo: "La SINAPSIS [Transmisión de información entre neuronas]", canal: "Nutrimente", vistas: 457966 },
    },
    {
      html: `<h3>1.4 Tipos de neuronas y células de glía</h3><p>Según su función, las neuronas se clasifican en tres tipos:</p><p>• Las <mark>neuronas sensitivas</mark> llevan la información desde los receptores hasta el sistema nervioso central.<br>• Las <mark>neuronas de asociación</mark> o interneuronas están dentro del encéfalo y la médula; conectan unas neuronas con otras y procesan la información.<br>• Las <mark>neuronas motoras</mark> llevan las órdenes desde el sistema nervioso central hasta los efectores, músculos y glándulas.</p><p>Las neuronas no trabajan solas. Las acompañan las <b>células de glía</b>, más numerosas que ellas, que las sujetan, las alimentan, las protegen de sustancias dañinas y fabrican la mielina. Durante mucho tiempo se pensó que eran un simple relleno, pero hoy se sabe que también participan en la comunicación y en la memoria. Las neuronas adultas casi no se dividen, por eso las lesiones del sistema nervioso suelen dejar secuelas.</p>`,
      svg: L.tabla("Tipos de neuronas según su función", ["Neurona", "Lleva", "Hacia"], [["Sensitiva", "información", "SNC"], ["De asociación", "conexiones", "dentro del SNC"], ["Motora", "órdenes", "músculos y glándulas"]]),
    },
    {
      html: `<h3>2.1 La organización del sistema nervioso</h3><p>El sistema nervioso tiene dos partes. El <mark>sistema nervioso central</mark> (SNC) recibe la información, la procesa y elabora las respuestas; está protegido por huesos (cráneo y columna), por tres membranas, las meninges, y por un líquido que amortigua los golpes. El <mark>sistema nervioso periférico</mark> (SNP) está formado por los <b>nervios</b>, haces de axones que conectan el SNC con todo el cuerpo.</p>${tabla(["Parte", "Órganos", "Función"], [["SNC", "encéfalo y médula espinal", "procesar y decidir"], ["SNP somático", "nervios hacia músculos esqueléticos", "movimientos voluntarios"], ["SNP autónomo", "nervios hacia vísceras", "latido, digestión, sudor (involuntario)"]])}<p>Los nervios se clasifican según de dónde salen: los <b>nervios craneales</b> (12 pares) salen del encéfalo e inervan sobre todo la cabeza, como el nervio óptico o el auditivo; los <b>nervios raquídeos</b> (31 pares) salen de la médula espinal, entre las vértebras, y llegan al tronco y a las extremidades. Según la información que transportan, pueden ser sensitivos, motores o mixtos.</p>`,
      svg: L.compara("Sistema nervioso central y periférico", ["Central (SNC)", "var(--pen)", ["encéfalo", "médula espinal", "procesa y decide", "huesos y meninges"]], ["Periférico (SNP)", "var(--leaf)", ["nervios", "12 pares craneales", "31 pares raquídeos", "conecta con el cuerpo"]]),
    },
    {
      html: `<h3>2.2 El encéfalo</h3><p>El <b>encéfalo</b> está dentro del cráneo y tiene tres partes. El <mark>cerebro</mark> es la más grande; su superficie, la corteza, está llena de pliegues y dividida en dos hemisferios. Allí se interpretan los sentidos, se deciden los movimientos voluntarios y residen la memoria, el lenguaje y el razonamiento. El <mark>cerebelo</mark>, detrás y debajo, coordina los movimientos y mantiene el equilibrio: gracias a él no te caes al andar en bici. El <mark>tronco encefálico</mark> une el encéfalo con la médula y controla funciones vitales automáticas, como la respiración y el ritmo del corazón.</p><p>Cada hemisferio cerebral controla la mitad <b>contraria</b> del cuerpo: el hemisferio izquierdo mueve la mano derecha y recibe lo que siente el lado derecho. Los dos hemisferios están unidos por un grueso haz de axones, el <b>cuerpo calloso</b>, que les permite compartir información. El encéfalo pesa alrededor de 1,4 kg, el 2 % del peso del cuerpo, pero consume el 20 % de la energía.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Encéfalo de perfil: cerebro, cerebelo y tronco encefálico que continúa en la médula espinal">${BG}
        <path d="M40 100 Q 30 40 100 26 Q 170 16 204 62 Q 214 86 196 100 Q 170 108 150 104 Q 100 116 60 112 Q 44 110 40 100 Z" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="2.5"/>
        <path d="M70 44 q 10 10 0 20 M100 34 q 10 14 0 26 M130 32 q 12 14 0 30 M160 40 q 10 12 0 24 M86 80 q 20 -6 40 4 M140 78 q 20 -8 40 4" stroke="var(--red)" stroke-width="1.8" fill="none" stroke-opacity=".7"/>
        <path d="M158 106 Q 200 102 206 122 Q 204 140 174 140 Q 150 138 152 120 Z" fill="var(--inf)" fill-opacity=".45" stroke="var(--inf)" stroke-width="2"/>
        <path d="M138 106 Q 136 130 142 150 V 176 H 154 V 150 Q 152 128 156 108" fill="var(--pen)" fill-opacity=".45" stroke="var(--pen)" stroke-width="2"/>
        ${t(110, 74, "cerebro", { size: 13, color: "var(--red)" })}${t(250, 160, "cerebelo", { size: 11, anchor: "end", color: "var(--inf)" })}<path d="M222 150 L 200 136" stroke="var(--muted)" stroke-width="1"/>
        ${t(130, 148, "tronco", { size: 11, anchor: "end", color: "var(--pen)" })}${t(166, 172, "médula", { size: 10, anchor: "start", color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>2.3 La corteza cerebral y sus áreas</h3><p>La <mark>corteza cerebral</mark> es una capa de unos pocos milímetros, de color gris porque está formada por los cuerpos de las neuronas: es la <b>sustancia gris</b>. Debajo está la <b>sustancia blanca</b>, formada por axones con mielina. Cada hemisferio se divide en cuatro <mark>lóbulos</mark>, separados por surcos:</p><p>• El <b>frontal</b>, delante, planifica, toma decisiones, controla las emociones y dirige los movimientos voluntarios; en él está también una de las áreas del lenguaje.<br>• El <b>parietal</b>, arriba, interpreta el tacto, la temperatura y el dolor.<br>• El <b>temporal</b>, a los lados, procesa la audición y participa en la memoria y la comprensión del lenguaje.<br>• El <b>occipital</b>, atrás, interpreta la visión.</p><p>Por eso, una lesión en el lóbulo occipital puede producir ceguera aunque los ojos estén perfectos, y un ictus en el lado izquierdo del cerebro suele afectar al habla y al movimiento del lado derecho.</p>`,
      svg: L.radial("Los cuatro lóbulos de la corteza cerebral y sus funciones", "Corteza", ["Frontal: decide", "Parietal: tacto", "Temporal: oído", "Occipital: vista"], "var(--pen)"),
    },
    {
      html: `<h3>2.4 La médula espinal y los actos reflejos</h3><p>La <b>médula espinal</b> es un cordón de tejido nervioso que recorre el interior de la columna vertebral. Tiene dos funciones: <b>conducir</b> los impulsos entre el encéfalo y los nervios, y <b>elaborar respuestas rápidas</b>, los <mark>actos reflejos</mark>. En un reflejo, la información va del receptor a la médula por una neurona sensitiva; allí una neurona de asociación la pasa a una neurona motora, que activa el músculo. Este camino se llama <b>arco reflejo</b>. Son reflejos retirar la mano del fuego, parpadear o el golpe en la rodilla que hace el médico.</p><p>En los <b>actos voluntarios</b>, en cambio, la información sube hasta el cerebro, que la interpreta y decide la respuesta de forma consciente: son más lentos, pero se adaptan a cada situación. Mientras ocurre un reflejo, la médula también envía la información al cerebro; por eso primero retiramos la mano y un instante después sentimos el dolor. Una lesión grave de la médula interrumpe la conducción y provoca parálisis por debajo de la zona dañada.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Arco reflejo: receptor en la mano, neurona sensitiva hasta la médula, neurona de asociación, neurona motora y músculo">${BG}
        <ellipse cx="200" cy="60" rx="30" ry="36" fill="var(--muted)" fill-opacity=".15" stroke="var(--muted)" stroke-width="2"/><path d="M186 40 Q 200 60 186 80 M214 40 Q 200 60 214 80" stroke="var(--muted)" stroke-width="2" fill="none"/>
        <path d="M30 140 Q 100 140 150 104 Q 176 84 196 60" stroke="var(--pen)" stroke-width="3" fill="none"/>
        <path d="M204 62 Q 200 90 170 110 Q 130 136 60 156" stroke="var(--red)" stroke-width="3" fill="none"/>
        <path d="M196 60 H 204" stroke="var(--leaf)" stroke-width="4"/>
        <circle cx="26" cy="140" r="8" fill="var(--sun)"/><rect x="40" y="148" width="40" height="18" rx="8" fill="var(--red)" fill-opacity=".5"/>
        ${t(26, 124, "receptor", { size: 10, color: "#b8860b" })}${t(96, 174, "músculo", { size: 10, color: "var(--red)" })}
        ${t(200, 112, "médula", { size: 11, color: "var(--muted)" })}${t(76, 124, "sensitiva", { size: 10, color: "var(--pen)" })}${t(160, 152, "motora", { size: 10, color: "var(--red)" })}${t(200, 18, "asociación", { size: 10, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>2.5 El sistema nervioso autónomo</h3><p>Muchas funciones del cuerpo se controlan sin que nos demos cuenta: el latido, la digestión, el sudor o el tamaño de la pupila. De ellas se encarga el <mark>sistema nervioso autónomo</mark>, una parte del sistema nervioso que actúa sobre el músculo liso, el corazón y las glándulas. Tiene dos divisiones con efectos opuestos que se equilibran:</p><p>• El <mark>sistema simpático</mark> prepara al cuerpo para la acción y las emergencias, la respuesta de «lucha o huida»: acelera el corazón y la respiración, dilata las pupilas, aumenta la glucosa en sangre y frena la digestión. Es lo que sientes antes de un examen o cuando te asustas.<br>• El <mark>sistema parasimpático</mark> actúa en reposo y ahorra energía: frena el corazón, contrae las pupilas y activa la digestión.</p><p>Al terminar la situación de peligro, el parasimpático devuelve el cuerpo a la calma. Técnicas como respirar despacio ayudan a activarlo y a reducir el estrés.</p>`,
      svg: L.compara("Simpático y parasimpático: efectos opuestos", ["Simpático", "var(--red)", ["acelera el corazón", "dilata la pupila", "frena la digestión", "lucha o huida"]], ["Parasimpático", "var(--leaf)", ["frena el corazón", "contrae la pupila", "activa la digestión", "reposo y calma"]]),
    },
    {
      html: `<h3>3.1 Los receptores sensoriales</h3><p>Los <b>receptores</b> son células o terminaciones nerviosas que captan un tipo concreto de estímulo. Se clasifican según lo que detectan, y muchos se agrupan en los <mark>órganos de los sentidos</mark>. También hay receptores internos que nos informan de la posición de los músculos, del hambre o de la sed.</p>${tabla(["Receptor", "Estímulo", "Dónde"], [["Fotorreceptores", "luz", "retina del ojo"], ["Mecanorreceptores", "sonido, presión, movimiento", "oído, piel"], ["Quimiorreceptores", "sustancias químicas", "lengua y nariz"], ["Termorreceptores", "calor y frío", "piel"], ["Nociceptores", "daño (dolor)", "casi todo el cuerpo"]])}<p>Los receptores se <b>adaptan</b>: si un estímulo se mantiene igual, dejan de enviar tantos impulsos. Por eso, al rato de ponernos la ropa ya no la notamos y en una habitación con olor dejamos de percibirlo. Lo que realmente «siente» es el cerebro: los receptores solo envían impulsos y es la corteza la que los interpreta como luz, sonido u olor.</p>`,
      svg: L.radial("Tipos de receptores según el estímulo que captan", "Receptores", ["Fotorreceptores: luz", "Mecanorreceptores", "Quimiorreceptores", "Termorreceptores", "Del dolor", "Internos: sed"], "var(--sun)"),
    },
    {
      html: `<h3>3.2 El ojo y la vista</h3><p>La luz entra en el ojo por la <b>córnea</b>, transparente, y atraviesa la <b>pupila</b>, un orificio cuyo tamaño regula el <b>iris</b>, la parte de color. Después, el <mark>cristalino</mark>, una lente flexible, enfoca la imagen sobre la <mark>retina</mark>, al fondo del ojo. En la retina hay dos tipos de fotorreceptores: los <b>conos</b>, que distinguen los colores y necesitan mucha luz, y los <b>bastones</b>, que funcionan con poca luz pero solo en blanco y negro. La imagen llega invertida, y el <b>nervio óptico</b> la lleva al cerebro, que la pone del derecho.</p><p>El ojo tiene órganos que lo protegen: las <b>cejas</b> y las <b>pestañas</b> frenan el sudor y el polvo; los <b>párpados</b> lo cierran y lo limpian al parpadear; y las <b>glándulas lagrimales</b> producen lágrimas que lo humedecen y tienen sustancias antibacterianas. Seis músculos mueven cada ojo para dirigir la mirada.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte del ojo: córnea, iris, pupila, cristalino, retina y nervio óptico, con los rayos de luz enfocados en la retina">${BG}
        <circle cx="140" cy="90" r="60" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M118 90 m 70 -38 A 60 60 0 0 1 200 92 A 60 60 0 0 1 188 128" stroke="var(--red)" stroke-width="5" fill="none"/>
        <path d="M84 62 Q 70 90 84 118" stroke="var(--inf)" stroke-width="3" fill="none"/>
        <path d="M90 66 V 80 M90 100 V 114" stroke="#7a4a2b" stroke-width="6"/>
        <ellipse cx="104" cy="90" rx="8" ry="18" fill="var(--water)" fill-opacity=".5" stroke="var(--inf)" stroke-width="2"/>
        <path d="M198 96 L 246 108" stroke="var(--sun)" stroke-width="7"/>
        <path d="M14 70 L 104 82 L 199 90 M14 110 L 104 98 L 199 90" stroke="var(--sun)" stroke-width="1.8" fill="none"/>
        ${t(70, 46, "córnea", { size: 10, color: "var(--inf)" })}${t(60, 136, "iris", { size: 10, color: "#7a4a2b" })}<path d="M66 130 L 88 112" stroke="var(--muted)" stroke-width="1"/>${t(104, 170, "cristalino", { size: 10, color: "var(--inf)" })}<path d="M104 160 V 110" stroke="var(--muted)" stroke-width="1"/>
        ${t(210, 40, "retina", { size: 10, color: "var(--red)" })}${t(250, 140, "nervio óptico", { size: 10, anchor: "end", color: "#b8860b" })}</svg>`,
      video: { id: "FbZdkD2ux54", titulo: "Cómo funciona el ojo humano (Animación)", canal: "Thomas Schwenke ES", vistas: 357247 },
    },
    {
      html: `<h3>3.3 Los defectos de la vista</h3><p>Para ver nítido, la imagen debe formarse justo sobre la retina. Cuando no ocurre así, hay un <mark>defecto de refracción</mark>:</p><p>• En la <b>miopía</b> el ojo es demasiado largo y la imagen se forma delante de la retina: se ve mal de lejos. Se corrige con lentes <b>divergentes</b> (cóncavas). Es cada vez más frecuente entre los jóvenes, y se relaciona con pasar muchas horas mirando de cerca y poco tiempo al aire libre.<br>• En la <b>hipermetropía</b> el ojo es demasiado corto y la imagen se forma detrás: se ve mal de cerca. Se corrige con lentes <b>convergentes</b> (convexas).<br>• En el <b>astigmatismo</b> la córnea no es regular y la imagen se ve deformada a cualquier distancia.<br>• La <b>presbicia</b> o vista cansada aparece hacia los 45 años porque el cristalino pierde flexibilidad.</p><p>Otros problemas son el <b>daltonismo</b>, en el que fallan algunos conos y se confunden colores como el rojo y el verde, y las <b>cataratas</b>, en las que el cristalino se vuelve opaco y se sustituye por una lente artificial.</p>`,
      svg: L.tabla("Defectos de la vista y su corrección", ["Defecto", "Se ve mal", "Corrección"], [["Miopía", "de lejos", "lente divergente"], ["Hipermetropía", "de cerca", "lente convergente"], ["Astigmatismo", "deformado", "lente especial"], ["Presbicia", "de cerca (edad)", "lente convergente"]]),
    },
    {
      html: `<h3>3.4 El oído: audición y equilibrio</h3><p>El oído tiene tres partes. El <b>oído externo</b>, con la oreja y el conducto auditivo, recoge el sonido hasta el <mark>tímpano</mark>, una membrana que vibra. En el <b>oído medio</b>, tres huesecillos (martillo, yunque y estribo) amplifican esas vibraciones. En el <b>oído interno</b>, la <mark>cóclea</mark> o caracol contiene un líquido y células con pelos que convierten las vibraciones en impulsos que van al cerebro por el nervio auditivo. El oído interno también tiene los <b>conductos semicirculares</b>, que detectan los giros de la cabeza y nos ayudan a mantener el equilibrio.</p><p>El oído medio está comunicado con la faringe por la <b>trompa de Eustaquio</b>, que iguala la presión a ambos lados del tímpano; por eso, al subir en avión o en un puerto de montaña, notamos los oídos taponados hasta que tragamos o bostezamos. El oído humano percibe sonidos entre 20 y 20.000 vibraciones por segundo; los perros y los murciélagos oyen sonidos mucho más agudos.</p>`,
      svg: L.flujo("Recorrido del sonido por el oído", ["Oído externo: oreja y conducto hasta el tímpano", "Oído medio: martillo, yunque y estribo", "Oído interno: la cóclea forma impulsos", "Nervio auditivo hasta el cerebro"], "Cómo oímos"),
    },
    {
      html: `<h3>3.5 Olfato, gusto y tacto</h3><p>El <b>olfato</b> y el <b>gusto</b> son sentidos químicos. En la parte alta de las fosas nasales, la pituitaria amarilla tiene quimiorreceptores que distinguen miles de olores. En la lengua, las <b>papilas gustativas</b> detectan cinco sabores básicos: dulce, salado, ácido, amargo y umami. Por eso, con la nariz tapada, la comida «no sabe a nada»: gran parte del sabor es olor. El <b>tacto</b> está repartido por toda la piel, con receptores de presión, temperatura y dolor. Hay muchos más en los dedos y en los labios que en la espalda.</p><p>La <b>piel</b> es el órgano más grande del cuerpo, con casi dos metros cuadrados. Sus receptores están en la dermis y son distintos según el estímulo: unos detectan el contacto suave, otros la presión fuerte, el frío, el calor o el dolor. Los <b>receptores del dolor</b> son los más numerosos y nos avisan de que algo daña los tejidos. Las personas ciegas leen en braille con las yemas de los dedos gracias a la gran densidad de receptores del tacto que hay en ellas.</p>`,
      svg: L.radial("Los cinco sabores básicos que detectan las papilas", "Gusto", ["Dulce", "Salado", "Ácido", "Amargo", "Umami", "+ olfato"], "var(--red)"),
    },
    {
      html: `<h3>3.6 Cuidar el sistema nervioso y los sentidos</h3><p>El <b>alcohol</b> y otras <b>drogas</b> alteran los neurotransmisores: ralentizan los reflejos, dañan la memoria y crean adicción. El cerebro adolescente todavía está madurando, por eso es especialmente sensible. <mark>Dormir</mark> de 8 a 10 horas es imprescindible para fijar lo aprendido. Hay que usar casco en la bici y en la moto para proteger el encéfalo y la médula. Los defectos de la vista más comunes son la <b>miopía</b> (no se ve bien de lejos) y la <b>hipermetropía</b> (de cerca); se corrigen con gafas. Escuchar música muy alta con auriculares puede causar una sordera que no tiene cura.</p><p>El <b>tabaco</b> y el <b>cannabis</b> también actúan sobre el encéfalo: la nicotina crea una fuerte adicción y el cannabis consumido en la adolescencia se asocia a problemas de memoria, de atención y a mayor riesgo de trastornos mentales. El uso de pantallas por la noche retrasa el sueño, porque su luz engaña al cerebro. Otros hábitos protectores son hacer ejercicio, mantener una vida social activa, leer y aprender cosas nuevas: el cerebro se fortalece cuando se usa.</p>`,
      svg: L.radial("Hábitos que protegen el sistema nervioso", "Cerebro sano", ["Dormir 8-10 h", "Sin alcohol ni drogas", "Casco", "Volumen moderado", "Ejercicio", "Aprender"], "var(--leaf)"),
      video: { id: "7dPTJoWITa8", titulo: "¿Cómo afectan las drogas al cerebro?", canal: "EduCaixaTV", vistas: 722401 },
    },
  ],
  figura: {
    titulo: "Acto voluntario y acto reflejo",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Acto voluntario: receptor, nervio, médula, cerebro decide, médula, nervio, músculo. Acto reflejo: receptor, médula, músculo, sin pasar por el cerebro">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${t(30, 46, "Voluntario (lento, consciente)", { size: 16, anchor: "start", color: "var(--pen)", font: D })}
      ${["receptor", "nervio sensitivo", "médula", "CEREBRO", "médula", "nervio motor", "músculo"].map((n, i) => { const x = 30 + i * 86; return `<rect x="${x}" y="62" width="78" height="44" rx="8" fill="${i === 3 ? "var(--pen)" : "var(--card)"}" fill-opacity="${i === 3 ? 0.2 : 1}" stroke="var(--pen)" stroke-width="2"/>${t(x + 39, 89, n, { size: n.length > 10 ? 10 : 12 })}${i < 6 ? fl(x + 79, 84, x + 85, 84, "var(--pen)", 2) : ""}`; }).join("")}
      ${t(30, 156, "Reflejo (rápido, automático)", { size: 16, anchor: "start", color: "var(--red)", font: D })}
      ${["receptor", "nervio sensitivo", "MÉDULA", "nervio motor", "músculo"].map((n, i) => { const x = 30 + i * 120; return `<rect x="${x}" y="172" width="108" height="44" rx="8" fill="${i === 2 ? "var(--red)" : "var(--card)"}" fill-opacity="${i === 2 ? 0.2 : 1}" stroke="var(--red)" stroke-width="2"/>${t(x + 54, 199, n, { size: 13 })}${i < 4 ? fl(x + 109, 194, x + 119, 194, "var(--red)", 2) : ""}`; }).join("")}
      ${t(610, 244, "el cerebro se entera después", { size: 13, anchor: "end", color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "L9blnjOdf44", titulo: "El SISTEMA NERVIOSO explicado FÁCIL", canal: "La Hiperactina", vistas: 2087187, megusta: 0, busqueda: "sistema nervioso neurona sinapsis" },
  ejemplos: [
    { enunciado: "Suena el despertador y lo apagas. Identifica el estímulo, el receptor, el centro coordinador, el efector y la respuesta.",
      pasos: ["Estímulo: el sonido del despertador.", "Receptor: las células del oído interno (cóclea).", "Centro coordinador: el cerebro, que reconoce el sonido y decide apagarlo.", "Efector: los músculos del brazo y la mano.", "Respuesta: apagar el despertador. Es un acto voluntario."],
      resultado: "sonido → oído → cerebro → músculos → apagar." },
    { enunciado: "Un impulso viaja a 100 m/s por un axón de 1 m, desde la médula hasta el pie. ¿Cuánto tarda?",
      pasos: ["Tiempo = distancia / velocidad.", "t = 1 m / 100 m/s = 0,01 s.", "Son 10 milésimas de segundo."],
      resultado: "0,01 s (10 ms)." },
    { enunciado: "Una persona sufre una lesión en el cerebelo tras un golpe. ¿Qué síntomas esperarías?",
      pasos: ["El cerebelo coordina los movimientos y mantiene el equilibrio.", "Si se daña, los movimientos serán torpes y descoordinados.", "Tendrá dificultad para andar en línea recta y mantener el equilibrio."],
      resultado: "pérdida de equilibrio y movimientos descoordinados." },
    { enunciado: "Medimos el tiempo de reacción con una regla que se deja caer: la atrapas tras recorrer 20 cm. Si d = 5 · t² (d en metros, t en segundos), ¿cuál es tu tiempo de reacción?",
      pasos: ["d = 20 cm = 0,2 m.", "0,2 = 5 · t², así que t² = 0,2 / 5 = 0,04.", "t = √0,04 = 0,2 s."],
      resultado: "0,2 segundos." },
    { enunciado: "Antes de salir a hablar en público, a Pablo le late fuerte el corazón, tiene la boca seca y le sudan las manos. ¿Qué parte del sistema nervioso actúa y qué hará cuando termine?",
      pasos: ["Son respuestas involuntarias de músculo liso, corazón y glándulas: sistema nervioso autónomo.", "Acelerar el corazón y frenar la saliva son efectos del sistema simpático (lucha o huida).", "Al terminar, el parasimpático frenará el corazón y volverá la calma."],
      resultado: "actúa el simpático; después, el parasimpático devuelve el cuerpo al reposo." },
    { enunciado: "Lucía ve borrosa la pizarra pero lee bien el libro. ¿Qué defecto tiene, dónde se forma la imagen y qué lente necesita?",
      pasos: ["Ver mal de lejos y bien de cerca es la miopía.", "En la miopía el ojo es más largo y la imagen se forma delante de la retina.", "Una lente divergente separa los rayos y hace que la imagen se forme más atrás, sobre la retina."],
      resultado: "miopía; la imagen se forma delante de la retina; lentes divergentes." },
  ],
  errores: [...[
    "Pensar que en un acto reflejo interviene el cerebro: lo elabora la médula espinal.",
    "Confundir cerebro y encéfalo: el cerebro es solo una parte del encéfalo.",
    "Creer que las neuronas se tocan: se comunican a través de la sinapsis con neurotransmisores.",
    "Confundir dendritas y axón: las dendritas reciben y el axón envía.",
    "Decir que los ojos ven los colores con los bastones: los colores los captan los conos.",
  ], "Pensar que los ojos o los oídos «sienten»: solo envían impulsos; quien interpreta la sensación es la corteza cerebral."],
  ejercicios: [
    { nivel: "básico", ...{ q: "Define estímulo, receptor y efector, con un ejemplo de cada uno.", sol: "Estímulo: cambio que provoca una respuesta (un pinchazo). Receptor: estructura que lo detecta (receptores de dolor de la piel). Efector: órgano que responde (músculo del brazo)." } },
    { nivel: "básico", ...{ q: "Dibuja una neurona y señala dendritas, cuerpo celular, núcleo, axón y mielina.", sol: "Ver el dibujo del bloque de la neurona: el impulso entra por las dendritas y sale por el axón." } },
    { nivel: "básico", ...{ q: "¿Qué partes forman el sistema nervioso central y cómo se protegen?", sol: "El encéfalo y la médula espinal. Los protegen los huesos (cráneo y vértebras), las meninges y el líquido cefalorraquídeo." } },
    { nivel: "básico", ...{ q: "Indica qué parte del encéfalo controla: a) el equilibrio; b) la respiración; c) el lenguaje.", sol: "a) Cerebelo. b) Tronco encefálico. c) Cerebro." } },
    { nivel: "básico", ...{ q: "Clasifica los receptores: retina, papilas gustativas, cóclea, receptores de calor de la piel.", sol: "Retina: fotorreceptores. Papilas: quimiorreceptores. Cóclea: mecanorreceptores. Calor: termorreceptores." } },
    { nivel: "básico", ...{ q: "Ordena el camino de la luz en el ojo.", sol: "Córnea → pupila (regulada por el iris) → cristalino → humor vítreo → retina → nervio óptico → cerebro." } },
    { nivel: "básico", q: "Nombra los tres tipos de neuronas según su función y qué hace cada uno.", sol: "Sensitivas: llevan la información de los receptores al SNC. De asociación: conectan neuronas dentro del SNC. Motoras: llevan las órdenes del SNC a músculos y glándulas." },
    { nivel: "básico", q: "Asocia cada lóbulo cerebral con su función: frontal, parietal, temporal y occipital.", sol: "Frontal: decisiones y movimiento voluntario. Parietal: tacto, temperatura y dolor. Temporal: audición y memoria. Occipital: visión." },
    { nivel: "básico", q: "Nombra las tres partes del oído y un elemento de cada una.", sol: "Externo: oreja y tímpano. Medio: martillo, yunque y estribo. Interno: cóclea y conductos semicirculares." },
    { nivel: "básico", q: "¿Cuáles son los cinco sabores básicos?", sol: "Dulce, salado, ácido, amargo y umami." },
    { nivel: "básico", q: "¿Qué órganos protegen el ojo?", sol: "Cejas, pestañas, párpados y glándulas lagrimales." },
    { nivel: "básico", q: "¿Cuántos pares de nervios craneales y raquídeos hay?", sol: "12 pares de nervios craneales y 31 pares de nervios raquídeos." },
    { nivel: "medio", ...{ q: "¿Qué es la sinapsis y qué papel tienen los neurotransmisores?", sol: "Es la zona de comunicación entre dos neuronas. Los neurotransmisores son sustancias químicas que libera el axón y que activan la neurona siguiente." } },
    { nivel: "medio", ...{ q: "Describe el arco reflejo de retirar la mano del fuego.", sol: "Los receptores de la piel detectan el calor; la neurona sensitiva lleva el impulso a la médula; una neurona de asociación lo pasa a la neurona motora; esta activa los músculos y la mano se aparta." } },
    { nivel: "medio", ...{ q: "¿Por qué nos mareamos al girar muchas veces sobre nosotros mismos?", sol: "El líquido de los conductos semicirculares del oído interno sigue moviéndose cuando paramos y envía al cerebro información de giro que no coincide con lo que vemos." } },
    { nivel: "medio", ...{ q: "Explica por qué el alcohol es peligroso al conducir.", sol: "Altera los neurotransmisores, alarga el tiempo de reacción, empeora la coordinación del cerebelo y da una falsa sensación de seguridad." } },
    { nivel: "medio", q: "Compara un acto reflejo y un acto voluntario: dónde se elaboran, velocidad y ejemplos.", sol: "Reflejo: lo elabora la médula, es muy rápido, involuntario e igual siempre (retirar la mano del fuego). Voluntario: lo elabora el cerebro, es más lento, consciente y adaptable (coger un vaso)." },
    { nivel: "medio", q: "Indica tres efectos del sistema simpático y sus opuestos del parasimpático.", sol: "Simpático: acelera el corazón, dilata la pupila, frena la digestión. Parasimpático: frena el corazón, contrae la pupila, activa la digestión." },
    { nivel: "medio", q: "¿Por qué un ictus en el hemisferio izquierdo paraliza el lado derecho del cuerpo?", sol: "Porque las vías nerviosas se cruzan: cada hemisferio controla la mitad contraria del cuerpo." },
    { nivel: "medio", q: "Explica por qué los oídos se taponan al subir en avión y cómo se soluciona.", sol: "Cambia la presión exterior y la del oído medio queda distinta, así que el tímpano se curva. Al tragar o bostezar se abre la trompa de Eustaquio y se iguala la presión." },
    { nivel: "medio", q: "¿Qué es la plasticidad neuronal y qué relación tiene con estudiar?", sol: "Es la capacidad del encéfalo de crear, reforzar o eliminar conexiones entre neuronas. Al estudiar y repasar se refuerzan las sinapsis que guardan lo aprendido." },
    { nivel: "medio", q: "Diferencia la miopía y la hipermetropía y cómo se corrigen.", sol: "Miopía: ojo largo, imagen delante de la retina, se ve mal de lejos; lentes divergentes. Hipermetropía: ojo corto, imagen detrás de la retina, se ve mal de cerca; lentes convergentes." },
    { nivel: "medio", q: "¿Por qué dejamos de notar la ropa al rato de ponérnosla?", sol: "Porque los receptores del tacto se adaptan a un estímulo constante y dejan de enviar tantos impulsos." },
    { nivel: "medio", q: "¿Qué es la sustancia gris y la sustancia blanca?", sol: "La sustancia gris está formada por los cuerpos de las neuronas (corteza cerebral). La blanca, por axones con mielina, que tiene color blanquecino." },
    { nivel: "avanzado", q: "Una persona sufre una lesión en la médula espinal a la altura de la cintura. ¿Qué funciones perderá y cuáles conservará? Razona.", sol: "Perderá la sensibilidad y el movimiento voluntario de las piernas, porque los impulsos no pueden subir ni bajar a través de la zona lesionada. Conservará la movilidad y sensibilidad de los brazos y el tronco superior, que conectan por encima de la lesión." },
    { nivel: "avanzado", q: "Diseña un experimento para comparar el tiempo de reacción con la mano dominante y la no dominante.", sol: "Usar la prueba de la regla con 10 intentos por mano en varios alumnos; anotar los centímetros, convertirlos en tiempo con t = √(d/5), calcular la media de cada mano y compararlas en una gráfica. Mantener igual la postura, la regla y la persona que la suelta." },
    { nivel: "avanzado", q: "Explica, con lo que sabes de la sinapsis, por qué el alcohol alarga el tiempo de reacción.", sol: "El alcohol altera la liberación y el efecto de los neurotransmisores, de modo que la transmisión entre neuronas es más lenta y menos precisa. El impulso tarda más en llegar al músculo y la coordinación del cerebelo empeora." },
    { nivel: "avanzado", q: "¿Por qué el caso de Phineas Gage fue importante para la neurociencia?", sol: "Mostró que una lesión en una zona concreta (lóbulo frontal) cambiaba la personalidad, la conducta y la toma de decisiones sin afectar a otras funciones como el habla o el movimiento. Fue una de las primeras pruebas de que las áreas del cerebro tienen funciones distintas." },
    { nivel: "avanzado", q: "Explica por qué con la nariz tapada «no sabemos» bien qué estamos comiendo.", sol: "Gran parte del sabor es olor: las moléculas volátiles del alimento suben desde la boca a la pituitaria amarilla. Con la nariz tapada solo llegan las señales de las papilas (cinco sabores básicos) y no podemos distinguir, por ejemplo, una manzana de una pera." },
    { nivel: "avanzado", q: "Un adolescente escucha música con auriculares a 100 dB durante 2 horas al día. ¿Qué le puede pasar y por qué no se cura?", sol: "Puede sufrir pérdida de audición: el sonido muy intenso daña las células ciliadas de la cóclea. Esas células no se regeneran, así que la sordera es permanente. Se recomienda no superar el 60 % del volumen ni 60 minutos seguidos." },
    { nivel: "avanzado", q: "Relaciona el sistema nervioso autónomo con lo que sientes antes de un examen y propón dos estrategias para controlarlo.", sol: "El simpático acelera el corazón, seca la boca, provoca sudor y nudos en el estómago. Para controlarlo: respirar lenta y profundamente (activa el parasimpático), dormir bien la noche anterior y prepararse con tiempo para reducir la sensación de amenaza." },
    { nivel: "avanzado", q: "Construye el recorrido completo de la información cuando ves un balón venir hacia ti y lo paras con la mano.", sol: "Estímulo: la luz reflejada por el balón → córnea, pupila, cristalino → retina (fotorreceptores) → nervio óptico → lóbulo occipital (interpreta) → lóbulo frontal (decide) → neuronas motoras por la médula y los nervios raquídeos → músculos del brazo (efectores) → parar el balón, coordinado por el cerebelo." },
  ],
  quiz: [
    { q: "Un cambio que provoca una respuesta es un…", o: ["efector", "estímulo", "receptor", "nervio"], a: 1, e: "Por ejemplo, un sonido." },
    { q: "Las dendritas…", o: ["envían señales", "fabrican mielina", "reciben señales", "son músculos"], a: 2, e: "El axón envía." },
    { q: "La mielina…", o: ["acelera el impulso nervioso", "fabrica neurotransmisores", "recibe estímulos", "es un hueso"], a: 0, e: "Como el plástico de un cable." },
    { q: "Las neuronas se comunican mediante…", o: ["contacto directo", "la sangre", "hormonas", "neurotransmisores en la sinapsis"], a: 3, e: "No se tocan." },
    { q: "El SNC está formado por…", o: ["los nervios", "el encéfalo y la médula espinal", "los sentidos", "el cerebro solo"], a: 1, e: "Protegido por huesos y meninges." },
    { q: "El equilibrio y la coordinación dependen del…", o: ["cerebro", "tronco encefálico", "cerebelo", "nervio óptico"], a: 2, e: "Por él no te caes en bici." },
    { q: "La respiración automática la controla el…", o: ["tronco encefálico", "cerebelo", "lóbulo occipital", "cuerpo calloso"], a: 0, e: "Funciones vitales." },
    { q: "Los actos reflejos los elabora…", o: ["el cerebro", "el cerebelo", "el lóbulo frontal", "la médula espinal"], a: 3, e: "Son muy rápidos." },
    { q: "La visión la interpreta el lóbulo…", o: ["frontal", "occipital", "temporal", "parietal"], a: 1, e: "Atrás del cerebro." },
    { q: "El sistema que prepara para la «lucha o huida» es el…", o: ["parasimpático", "periférico", "simpático", "somático"], a: 2, e: "Acelera el corazón." },
    { q: "Las neuronas que llevan órdenes a los músculos son…", o: ["motoras", "sensitivas", "de asociación", "gliales"], a: 0, e: "Van a los efectores." },
    { q: "Los colores los detectan…", o: ["los bastones", "el iris", "el cristalino", "los conos"], a: 3, e: "Con mucha luz." },
    { q: "La lente del ojo que enfoca es…", o: ["la córnea", "el cristalino", "la pupila", "la retina"], a: 1, e: "Es flexible." },
    { q: "La miopía se corrige con lentes…", o: ["convergentes", "de sol", "divergentes", "bifocales siempre"], a: 2, e: "Se ve mal de lejos." },
    { q: "Los huesecillos del oído medio son…", o: ["martillo, yunque y estribo", "cóclea y tímpano", "atlas y axis", "vértebras"], a: 0, e: "Amplifican las vibraciones." },
    { q: "El equilibrio lo detectan…", o: ["el tímpano", "la cóclea", "la trompa de Eustaquio", "los conductos semicirculares"], a: 3, e: "En el oído interno." },
    { q: "El quinto sabor básico es…", o: ["picante", "umami", "metálico", "graso"], a: 1, e: "Además de dulce, salado, ácido y amargo." },
    { q: "Las células que alimentan y protegen a las neuronas son…", o: ["los glóbulos blancos", "los conos", "las células de glía", "las fibras musculares"], a: 2, e: "Más numerosas que las neuronas." },
    { q: "Cada hemisferio cerebral controla…", o: ["la mitad contraria del cuerpo", "la misma mitad", "solo la cabeza", "solo las piernas"], a: 0, e: "Las vías se cruzan." },
    { q: "Para fijar lo aprendido es imprescindible…", o: ["tomar café", "estudiar sin dormir", "usar pantallas por la noche", "dormir 8 a 10 horas"], a: 3, e: "El sueño consolida la memoria." },
  ],
  examen: [
    { q: "En un arco reflejo, la información va del receptor a la médula por una neurona…", o: ["motora", "sensitiva", "de glía", "del cerebelo"], a: 1, e: "Después, asociación y motora." },
    { q: "Los bastones de la retina…", o: ["ven colores", "enfocan", "funcionan con poca luz", "regulan la pupila"], a: 2, e: "Solo en blanco y negro." },
    { q: "La corteza cerebral es gris porque…", o: ["tiene cuerpos de neuronas", "tiene mielina", "tiene sangre", "tiene hueso"], a: 0, e: "La blanca tiene axones con mielina." },
    { q: "El parasimpático…", o: ["acelera el corazón", "dilata la pupila", "frena la digestión", "activa la digestión"], a: 3, e: "Actúa en reposo." },
    { q: "La trompa de Eustaquio comunica…", o: ["el ojo y la nariz", "el oído medio y la faringe", "el cerebro y la médula", "la cóclea y el tímpano"], a: 1, e: "Iguala la presión." },
    { q: "En la presbicia…", o: ["el ojo es largo", "la córnea es irregular", "el cristalino pierde flexibilidad", "fallan los conos"], a: 2, e: "Vista cansada hacia los 45 años." },
    { q: "Un efector puede ser…", o: ["un músculo o una glándula", "un receptor", "un nervio sensitivo", "la retina"], a: 0, e: "Ejecutan la respuesta." },
    { q: "Escuchar música muy alta daña…", o: ["el cristalino", "el cerebelo", "las papilas", "las células ciliadas de la cóclea"], a: 3, e: "No se regeneran." },
  ],
  feynman: [...["Los pasos de la función de relación con un ejemplo", "Cómo viaja un impulso por una neurona y cómo pasa a la siguiente", "Qué diferencia hay entre un acto voluntario y uno reflejo"], "Qué hacen el simpático y el parasimpático", "Por qué un miope ve mal de lejos y cómo lo corrigen las gafas"],
  mapa: mapa("RELACIÓN", "var(--eso)", [
    ["Neurona", "dendritas · axón · sinapsis", "var(--pen)"],
    ["SNC", "encéfalo · médula espinal", "var(--red)"],
    ["SNP", "nervios · somático · autónomo", "var(--leaf)"],
    ["Sentidos", "vista · oído · olfato · gusto · tacto", "var(--inf)"],
  ], 280),
  tarjetas: [
    ...[
    ["Estímulo", "Cambio del medio o del cuerpo que provoca una respuesta."],
    ["Neurona", "Célula que transmite impulsos: dendritas, cuerpo y axón."],
    ["Sinapsis", "Comunicación entre neuronas mediante neurotransmisores."],
    ["SNC", "Encéfalo y médula espinal."],
    ["Cerebelo", "Coordina los movimientos y el equilibrio."],
    ["Acto reflejo", "Respuesta rápida e involuntaria elaborada por la médula."],
    ["Conos y bastones", "Conos: colores, con mucha luz. Bastones: poca luz, sin color."],
    ["Cóclea", "Parte del oído interno que convierte el sonido en impulsos."],
  ],
    ["Tipos de neuronas", "Sensitivas, de asociación y motoras."],
    ["Lóbulos cerebrales", "Frontal, parietal, temporal y occipital."],
    ["Simpático y parasimpático", "Simpático: acción y alarma. Parasimpático: reposo."],
    ["Miopía", "Imagen delante de la retina; se ve mal de lejos; lente divergente."],
  ],
  glosario: [
    ["Estímulo", "Cambio que provoca una respuesta."],
    ["Receptor", "Estructura que capta un estímulo y lo convierte en impulso."],
    ["Efector", "Músculo o glándula que ejecuta la respuesta."],
    ["Neurona", "Célula que transmite impulsos nerviosos."],
    ["Axón", "Prolongación larga de la neurona que envía el impulso."],
    ["Mielina", "Capa de grasa que envuelve y acelera el impulso en el axón."],
    ["Sinapsis", "Zona de comunicación entre dos neuronas."],
    ["Neurotransmisor", "Sustancia química que transmite el impulso en la sinapsis."],
    ["Encéfalo", "Parte del SNC dentro del cráneo: cerebro, cerebelo y tronco."],
    ["Corteza cerebral", "Capa externa de sustancia gris del cerebro."],
    ["Médula espinal", "Cordón nervioso dentro de la columna."],
    ["Arco reflejo", "Camino del impulso en un acto reflejo."],
    ["Sistema nervioso autónomo", "Controla de forma involuntaria corazón, músculo liso y glándulas."],
    ["Retina", "Capa del fondo del ojo con los fotorreceptores."],
    ["Cristalino", "Lente flexible que enfoca la imagen."],
    ["Cóclea", "Parte del oído interno que transforma el sonido en impulsos."],
    ["Papila gustativa", "Grupo de receptores del gusto de la lengua."],
    ["Plasticidad neuronal", "Capacidad del encéfalo de cambiar sus conexiones al aprender."],
  ],
  situacion: {
    titulo: "Laboratorio de los sentidos",
    reto: "El instituto organiza una jornada de puertas abiertas y vuestro grupo montará un «laboratorio de los sentidos» con experimentos para que los visitantes descubran cómo perciben el mundo y cómo cuidar su cerebro.",
    pasos: [
      "Medid el tiempo de reacción de la clase con la prueba de la regla y estudiad los datos.",
      "Preparad un mapa de sensibilidad táctil con un compás de dos puntas en la yema del dedo, la palma y el antebrazo.",
      "Diseñad una cata a ciegas con y sin la nariz tapada para mostrar la relación entre gusto y olfato.",
      "Preparad una prueba del punto ciego y de ilusiones ópticas para mostrar que es el cerebro quien interpreta.",
      "Elaborad un panel con consejos para proteger el cerebro, la vista y el oído.",
    ],
    producto: "Estaciones de experimentos con fichas explicativas y un panel de salud para la jornada de puertas abiertas.",
    evaluacion: [
      "Diseño correcto de los experimentos y control de variables.",
      "Explicación científica de los resultados con el vocabulario del tema.",
      "Calidad de las fichas y del panel de salud.",
      "Trabajo en equipo y atención al público.",
    ],
  },
  familias: ["Haced la prueba del tiempo de reacción: dejad caer una regla y medid a qué altura la atrapa.", "Probad a comer con la nariz tapada y comentad cuánto sabor es en realidad olor.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Saberes básicos de «Cuerpo humano» y «Hábitos saludables» de Biología y Geología de 1º a 3º (RD 217/2022, BOE-A-2022-4975): la función de relación, receptores y órganos de los sentidos, neurona y sinapsis, sistema nervioso central, periférico y autónomo, actos voluntarios y reflejos, y efectos de las drogas. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Medida del tiempo de reacción con una regla y estudio estadístico de la clase.",
      "Mapa de sensibilidad táctil con un compás de dos puntas.",
      "Disección de ojo de vaca o de cerdo para observar cristalino y retina.",
      "Prueba del punto ciego y del reflejo pupilar con una linterna.",
    ],
  },
  fuentes: [...[RD, wiki("Sistema nervioso", "Sistema_nervioso"), wiki("Arco reflejo", "Arco_reflejo")], wiki("Sistema nervioso autónomo", "Sistema_nervioso_aut%C3%B3nomo")],
  revisado: "2026-11-13",
};
