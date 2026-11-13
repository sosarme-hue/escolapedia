// Biología y Geología 3º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso3L4.js.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Esqueleto simplificado (de frente).
const esqueleto = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" stroke="var(--ink)" stroke-width="3" fill="none" stroke-linecap="round">
  <ellipse cx="0" cy="0" rx="14" ry="17" fill="var(--card)"/>
  <path d="M0 17 V 96"/>${[0, 1, 2, 3, 4].map((i) => `<path d="M-${16 - i} ${36 + i * 9} Q 0 ${30 + i * 9} ${16 - i} ${36 + i * 9}"/>`).join("")}
  <path d="M-22 26 H 22"/><path d="M-22 26 L -28 64 L -32 100 M22 26 L 28 64 L 32 100"/>
  <path d="M-18 96 Q 0 108 18 96 Q 0 90 -18 96 Z" fill="var(--card)"/>
  <path d="M-10 102 L -12 150 L -12 196 M10 102 L 12 150 L 12 196"/><path d="M-12 196 H -22 M12 196 H 22"/>
</g>`;
const L = require("./_eso3L4");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "El aparato locomotor",
  minutos: 100,
  objetivos: [
    "Describir las funciones del sistema óseo y del muscular",
    "Reconocer los principales huesos, la columna vertebral, la estructura del hueso y cómo crece y se repara",
    "Clasificar las articulaciones y distinguir tendones y ligamentos",
    "Identificar los principales músculos y explicar la contracción y el trabajo de los antagonistas",
    "Relacionar el ejercicio con la energía, la fatiga y el entrenamiento",
    "Prevenir lesiones, aplicar primeros auxilios básicos y cuidar la postura",
  ],
  claves: ["hueso", "médula ósea", "columna vertebral", "articulación", "ligamento", "músculo esquelético", "tendón", "antagonista", "osteoporosis"],
  pregunta: {
    texto: "Un bebé nace con unos 300 huesos y un adulto tiene 206. ¿Dónde se han ido casi cien huesos?",
    respuesta: "No se pierden: <mark>se sueldan</mark>. Muchos huesos del bebé son piezas de cartílago separadas que, al crecer, se osifican y se unen. Le pasa al cráneo, cuyas «fontanelas» se cierran, y al sacro, que nace como cinco vértebras y acaba siendo un solo hueso.",
  },
  lectura: {
    titulo: "Un esqueleto que se renueva",
    html: `<p>Si miras un esqueleto en el laboratorio del instituto, parece algo muerto, seco y duro como una piedra. Pero el esqueleto que llevas dentro es todo lo contrario: está vivo, crece, se repara y se renueva constantemente. Cada año se sustituye alrededor del 10 % de tus huesos; en unos diez años, prácticamente tienes un esqueleto nuevo.</p>
<p>Los astronautas son la mejor prueba de que los huesos responden a lo que hacemos con ellos. En el espacio, sin gravedad, el esqueleto no tiene que soportar el peso del cuerpo, y los huesos de las piernas y la columna pierden entre un 1 y un 2 % de su masa cada mes. Por eso, en la Estación Espacial Internacional, los astronautas hacen unas dos horas de ejercicio al día atados a cintas de correr y máquinas de fuerza. Aun así, al volver a la Tierra necesitan meses de rehabilitación.</p>
<p>Con los músculos pasa algo parecido: si no los usamos, se debilitan; si los entrenamos, se fortalecen. En este tema descubrirás cómo trabajan juntos huesos, articulaciones y músculos para que puedas correr, escribir o sonreír, y por qué la adolescencia es el mejor momento para construir un aparato locomotor fuerte para toda la vida.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Qué es el aparato locomotor</h3><p>El <b>aparato locomotor</b> nos permite movernos y mantener la forma del cuerpo. Tiene dos partes que trabajan juntas: el <mark>sistema óseo</mark> o esqueleto, formado por huesos, cartílagos y ligamentos, que es la parte <b>pasiva</b>; y el <mark>sistema muscular</mark>, la parte <b>activa</b>, porque los músculos se contraen y tiran de los huesos. Las órdenes las da el sistema nervioso. Además de movernos, el esqueleto sostiene el cuerpo, protege los órganos delicados (el cráneo guarda el encéfalo y las costillas, el corazón y los pulmones), fabrica células de la sangre y almacena calcio y fósforo.</p>`,
      svg: L.compara("Las dos partes del aparato locomotor", ["Sistema óseo", "var(--sun)", ["parte pasiva", "206 huesos", "cartílagos", "ligamentos"]], ["Sistema muscular", "var(--red)", ["parte activa", "más de 600 músculos", "tendones", "se contraen"]]),
    },
    {
      html: `<h3>1.2 El esqueleto</h3><p>El esqueleto humano adulto tiene <b>206 huesos</b> y se divide en tres regiones. La <b>cabeza</b> incluye los huesos del cráneo, soldados entre sí, y los de la cara, entre ellos la mandíbula, el único que se mueve. El <b>tronco</b> lo forman la <mark>columna vertebral</mark> (33 vértebras), las 12 parejas de costillas y el esternón, que juntos forman la caja torácica, además de la cintura escapular (clavículas y omóplatos) y la pelvis. Las <b>extremidades</b> son los brazos y las piernas. El hueso más largo es el fémur; el más pequeño, el estribo del oído.</p><p>Los huesos de las extremidades se unen al tronco mediante las <b>cinturas</b>: la escapular (hombros) une los brazos y la pélvica (caderas) une las piernas. Cada brazo tiene húmero, cúbito, radio y los huesos de la mano (carpo, metacarpo y falanges); cada pierna, fémur, rótula, tibia, peroné y los huesos del pie (tarso, metatarso y falanges). Un recién nacido tiene unos 300 huesos, que se van soldando al crecer.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esqueleto simplificado con cráneo, columna, costillas, pelvis, húmero, fémur y tibia">${BG}
        ${esqueleto(100, 26, 0.72)}
        ${[["cráneo", 26], ["costillas", 56], ["columna", 80], ["pelvis", 102], ["fémur", 128], ["tibia y peroné", 156]].map(([n, y], i) => `${t(150, y, n, { size: 11, anchor: "start" })}<path d="M146 ${y - 4} L ${[112, 112, 102, 112, 110, 110][i]} ${[24, 56, 80, 100, 128, 156][i]}" stroke="var(--muted)" stroke-width="1"/>`).join("")}
        ${t(40, 70, "húmero", { size: 11 })}<path d="M58 66 L 80 58" stroke="var(--muted)" stroke-width="1"/></svg>`,
    },
    {
      html: `<h3>1.3 La columna vertebral</h3><p>La <mark>columna vertebral</mark> es el eje del esqueleto. Sostiene la cabeza y el tronco, permite doblarse y girar, y protege la <b>médula espinal</b>, que pasa por un conducto formado por los agujeros de las vértebras. Tiene 33 vértebras repartidas en cinco regiones:</p><p>• 7 <b>cervicales</b>, en el cuello; las dos primeras, el atlas y el axis, permiten mover la cabeza.<br>• 12 <b>dorsales</b> o torácicas, a las que se unen las costillas.<br>• 5 <b>lumbares</b>, las más grandes, porque soportan más peso.<br>• 5 <b>sacras</b>, soldadas en un solo hueso, el sacro.<br>• 4 <b>coxígeas</b>, soldadas en el cóccix.</p><p>Vista de lado, la columna no es recta: tiene cuatro <b>curvaturas</b> naturales que funcionan como un muelle y amortiguan los impactos al andar o saltar. Cuando se exageran o aparece una curva lateral (<b>escoliosis</b>), pueden causar dolor. Entre las vértebras hay <b>discos intervertebrales</b> de cartílago; si uno se desplaza y presiona un nervio, se produce una <b>hernia discal</b>.</p>`,
      svg: L.capas("Regiones de la columna vertebral", [["Cervicales: 7", "var(--pen)", 1], ["Dorsales: 12", "var(--leaf)", 1.4], ["Lumbares: 5", "var(--sun)", 1.1], ["Sacro: 5 soldadas", "var(--red)", 0.8], ["Cóccix: 4 soldadas", "var(--muted)", 0.6]], "33 vértebras de arriba abajo"),
    },
    {
      html: `<h3>1.4 Los huesos por dentro</h3><p>Los huesos son órganos vivos: tienen células, vasos sanguíneos y nervios, y se reparan si se rompen. Están hechos de <b>tejido óseo</b>, que combina fibras de proteína (que dan flexibilidad) con sales de calcio (que dan dureza). Hay dos tipos: el <mark>tejido compacto</mark>, macizo, en la capa externa, y el <mark>tejido esponjoso</mark>, con huecos, en el interior. Dentro de muchos huesos está la <b>médula ósea roja</b>, que fabrica glóbulos rojos, blancos y plaquetas.</p>${tabla(["Tipo de hueso", "Forma", "Ejemplos"], [["Largos", "más largos que anchos", "fémur, húmero, falanges"], ["Cortos", "parecidos a cubos", "huesos de la muñeca, vértebras"], ["Planos", "anchos y delgados", "cráneo, omóplato, esternón"]])}<p>Un <b>hueso largo</b>, como el fémur, tiene una parte central alargada, la <b>diáfisis</b>, con un canal interior lleno de <b>médula ósea amarilla</b> (grasa), y dos extremos ensanchados, las <b>epífisis</b>, de tejido esponjoso con médula roja. Por fuera está recubierto por el <b>periostio</b>, una membrana con vasos y nervios; por eso un golpe en el hueso duele tanto.</p>`,
      svg: L.capas("Partes de un hueso largo de fuera adentro", [["Periostio: vasos y nervios", "var(--red)", 0.8], ["Tejido compacto: duro", "var(--sun)", 1.2], ["Tejido esponjoso", "var(--leaf)", 1], ["Médula: roja o amarilla", "var(--pen)", 1]], "Un hueso largo por dentro"),
      video: { id: "wD6QXREmRrg", titulo: "SISTEMA ÓSEO (esquelético): tipos de huesos, clasificación, función", canal: "Anatomía Fácil por Juan José Sánchez", vistas: 1353465 },
    },
    {
      html: `<h3>1.5 Cómo crecen y se reparan los huesos</h3><p>El esqueleto del feto es al principio de <b>cartílago</b>, que poco a poco se va sustituyendo por hueso: es la <mark>osificación</mark>. Los huesos largos crecen en longitud gracias a los <b>cartílagos de crecimiento</b>, situados entre la diáfisis y las epífisis, que fabrican hueso nuevo bajo el control de la hormona del crecimiento. Hacia los 18 a 20 años se osifican por completo y dejamos de crecer en altura.</p><p>Los huesos se renuevan toda la vida. Unas células, los <b>osteoclastos</b>, destruyen el hueso viejo, y otras, los <b>osteoblastos</b>, fabrican hueso nuevo. Si hacemos ejercicio, el hueso se refuerza donde más carga soporta.</p><p>Cuando un hueso se rompe, se repara en varias fases: se forma un <b>coágulo</b> de sangre en la fractura; las células fabrican un <b>callo</b> blando de cartílago que une los fragmentos; el callo se transforma en hueso; y con los meses el hueso recupera su forma. Por eso hay que <b>inmovilizar</b> la fractura con una escayola o una férula: si los fragmentos se mueven, el hueso suelda torcido o tarda más.</p>`,
      svg: L.flujo("Cómo se repara una fractura", ["Se forma un coágulo en la rotura", "Callo blando de cartílago", "El callo se convierte en hueso", "El hueso recupera su forma en meses"], "La reparación del hueso"),
    },
    {
      html: `<h3>2.1 Las articulaciones</h3><p>Una <b>articulación</b> es la unión entre dos huesos. Según cuánto se mueven, pueden ser <mark>fijas</mark> (sin movimiento, como las suturas del cráneo), <mark>semimóviles</mark> (poco movimiento, como las de las vértebras, separadas por discos de cartílago) o <mark>móviles</mark> (mucho movimiento, como la rodilla, el codo o el hombro). En las móviles, los extremos de los huesos están cubiertos de <b>cartílago</b> liso y bañados en el <b>líquido sinovial</b>, que lubrica. Unos cordones muy resistentes, los <b>ligamentos</b>, mantienen los huesos en su sitio.</p><p>Las articulaciones móviles no se mueven todas igual. La del <b>hombro</b> y la de la <b>cadera</b> son esféricas: una cabeza redondeada encaja en un hueco y permite girar en todas direcciones. El <b>codo</b> y la <b>rodilla</b> funcionan como una bisagra, en una sola dirección. La articulación entre el atlas y el axis permite girar la cabeza para decir «no». Las articulaciones móviles están envueltas por una <b>cápsula articular</b> que contiene el líquido sinovial.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Articulación móvil de la rodilla: fémur y tibia con cartílago, líquido sinovial y ligamentos">${BG}
        <path d="M100 14 H 160 V 70 Q 160 92 130 92 Q 100 92 100 70 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M100 166 H 160 V 116 Q 160 104 130 104 Q 100 104 100 116 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M103 76 Q 130 96 157 76" stroke="var(--water)" stroke-width="6" fill="none"/><path d="M103 112 Q 130 100 157 112" stroke="var(--water)" stroke-width="6" fill="none"/>
        <ellipse cx="130" cy="98" rx="26" ry="5" fill="var(--sun)" fill-opacity=".6"/>
        <path d="M96 60 Q 88 98 96 136 M164 60 Q 172 98 164 136" stroke="var(--red)" stroke-width="4" fill="none"/>
        ${t(130, 46, "fémur", { size: 12 })}${t(130, 146, "tibia", { size: 12 })}
        ${t(20, 98, "ligamento", { size: 10, anchor: "start", color: "var(--red)" })}${t(240, 76, "cartílago", { size: 10, anchor: "end", color: "var(--inf)" })}${t(244, 124, "líquido", { size: 10, anchor: "end", color: "#b8860b" })}${t(244, 136, "sinovial", { size: 10, anchor: "end", color: "#b8860b" })}</svg>`,
    },
    {
      html: `<h3>2.2 Los músculos</h3><p>Tenemos más de <b>600 músculos</b>, que suponen alrededor del 40 % del peso del cuerpo. Los <mark>músculos esqueléticos</mark> se unen a los huesos mediante los <b>tendones</b>, cordones blancos y muy resistentes; son voluntarios y de contracción rápida. Hay además músculo liso en las vísceras y músculo cardiaco en el corazón, que funcionan de forma involuntaria. Los músculos esqueléticos también mantienen la postura y producen calor: por eso tiritamos cuando tenemos frío.</p>${tabla(["Músculo", "Dónde", "Qué hace"], [["Bíceps", "parte delantera del brazo", "dobla el codo"], ["Tríceps", "parte trasera del brazo", "estira el codo"], ["Pectoral", "pecho", "acerca el brazo al cuerpo"], ["Abdominales", "vientre", "doblan el tronco, sujetan vísceras"], ["Cuádriceps", "parte delantera del muslo", "estira la rodilla"], ["Gemelos", "pantorrilla", "ponerse de puntillas"]])}<p>Es fácil confundir tendones y ligamentos porque los dos son cordones de tejido conectivo fibroso y muy resistente. La diferencia está en lo que unen: el <mark>tendón</mark> une un músculo con un hueso y transmite la fuerza de la contracción; el <mark>ligamento</mark> une dos huesos y estabiliza la articulación. El tendón más fuerte es el de Aquiles, que une los gemelos con el talón.</p>`,
      svg: L.compara("Diferencias entre tendón y ligamento", ["Tendón", "var(--red)", ["une músculo y hueso", "transmite la fuerza", "tendón de Aquiles", "lesión: tendinitis"]], ["Ligamento", "var(--sun)", ["une hueso y hueso", "estabiliza", "ligamentos de rodilla", "lesión: esguince"]]),
    },
    {
      html: `<h3>2.3 Los principales músculos del cuerpo</h3><p>Los músculos esqueléticos reciben nombres según su forma, su posición o su acción. Estos son algunos de los más importantes:</p><p>• En la <b>cabeza</b>, los músculos de la <b>expresión facial</b>, que mueven la piel de la cara y nos permiten sonreír o fruncir el ceño, y el <b>masetero</b>, que cierra la mandíbula al masticar.<br>• En el <b>cuello</b>, el <b>esternocleidomastoideo</b>, que gira la cabeza.<br>• En el <b>tronco</b>, los <b>pectorales</b>, los <b>abdominales</b>, que protegen las vísceras y doblan el tronco, el <b>trapecio</b> y el <b>dorsal ancho</b> en la espalda, y el <b>diafragma</b>, que permite respirar.<br>• En el <b>brazo</b>, el <b>deltoides</b> en el hombro, el <b>bíceps</b> y el <b>tríceps</b>.<br>• En la <b>pierna</b>, los <b>glúteos</b>, el <b>cuádriceps</b> (el músculo más potente del cuerpo), los <b>isquiotibiales</b>, los <b>gemelos</b> y el <b>sartorio</b>, el más largo.</p><p>Para sonreír usamos una docena de músculos, y el músculo más pequeño, el estapedio, mide apenas un milímetro y está en el oído medio.</p>`,
      svg: L.tabla("Algunos músculos importantes y su acción", ["Músculo", "Dónde", "Acción"], [["Masetero", "mandíbula", "masticar"], ["Deltoides", "hombro", "levantar el brazo"], ["Bíceps", "brazo", "doblar el codo"], ["Abdominales", "vientre", "doblar el tronco"], ["Cuádriceps", "muslo", "estirar la rodilla"]]),
    },
    {
      html: `<h3>2.4 Cómo se contrae un músculo</h3><p>Un músculo está formado por haces de <b>fibras musculares</b>, células muy largas con muchos núcleos. Dentro de cada fibra hay unos filamentos de dos proteínas, la <mark>actina</mark> y la <mark>miosina</mark>, colocados como los dedos de dos manos entrelazadas. Cuando llega un impulso nervioso, la miosina tira de la actina y los filamentos se deslizan unos sobre otros: la fibra se acorta y el músculo se <b>contrae</b>. Para ello necesita energía, que obtiene de la glucosa con oxígeno. Cuando falta oxígeno, se produce ácido láctico.</p><p>Cada fibra muscular recibe la orden de una <b>neurona motora</b>, que libera un neurotransmisor en la unión entre ambas, la <b>placa motora</b>. Una sola neurona puede controlar unas pocas fibras, como en los músculos del ojo que hacen movimientos precisos, o miles, como en el cuádriceps, donde importa la fuerza. Cuanto más fuerte es el movimiento, más fibras se activan a la vez.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Filamentos de actina y miosina: relajados, separados; contraídos, deslizados y más solapados">${BG}
        ${[[40, "relajado", 0], [120, "contraído", 22]].map(([y, n, d]) => `<path d="M${20 + d} ${y} V ${y + 50} M${240 - d} ${y} V ${y + 50}" stroke="var(--ink)" stroke-width="4"/>${[10, 25, 40].map((k) => `<path d="M${20 + d} ${y + k} H ${110 + d}" stroke="var(--pen)" stroke-width="3"/><path d="M${240 - d} ${y + k} H ${150 - d}" stroke="var(--pen)" stroke-width="3"/>`).join("")}${[17, 32].map((k) => `<path d="M${90} ${y + k} H ${170}" stroke="var(--red)" stroke-width="6"/>`).join("")}${t(130, y - 6, n, { size: 11, color: "var(--muted)" })}`).join("")}
        ${t(24, 112, "actina", { size: 10, anchor: "start", color: "var(--pen)" })}${t(236, 112, "miosina", { size: 10, anchor: "end", color: "var(--red)" })}</svg>`,
      video: { id: "C4fmTtO1bbo", titulo: "Mecanismo de la contracción muscular", canal: "Dr. Luca Merlini", vistas: 3965529 },
    },
    {
      html: `<h3>2.5 Músculos antagonistas</h3><p>Un músculo solo puede <b>tirar</b>, nunca empujar. Por eso los músculos trabajan por parejas que hacen movimientos opuestos: son los <mark>músculos antagonistas</mark>. Para doblar el brazo, el <b>bíceps</b> se contrae y el <b>tríceps</b> se relaja; para estirarlo, ocurre al revés. Lo mismo pasa con el cuádriceps y los isquiotibiales en la pierna. Los huesos actúan como <b>palancas</b>, las articulaciones como puntos de apoyo y los músculos aplican la fuerza. Gracias a este sistema, una contracción pequeña produce un movimiento amplio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Brazo doblado: el bíceps contraído y el tríceps relajado, unidos a los huesos por tendones">${BG}
        <path d="M70 30 L 90 120" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"/><path d="M90 120 L 196 72" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/>
        <path d="M80 44 Q 116 70 108 112" stroke="var(--red)" stroke-width="16" fill="none" stroke-linecap="round" stroke-opacity=".85"/>
        <path d="M66 50 Q 60 90 80 128" stroke="var(--red)" stroke-width="8" fill="none" stroke-linecap="round" stroke-opacity=".45"/>
        <path d="M108 112 L 112 116 M80 128 L 88 124" stroke="#ddd" stroke-width="4"/>
        <circle cx="90" cy="120" r="7" fill="var(--sun)"/>
        ${t(150, 46, "bíceps: se contrae", { size: 11, color: "var(--red)" })}${t(36, 160, "tríceps: se relaja", { size: 11, anchor: "start", color: "#c06060" })}${t(110, 146, "codo", { size: 10, anchor: "start", color: "#b8860b" })}</svg>`,
    },
    {
      html: `<h3>2.6 Energía, fatiga y entrenamiento</h3><p>Los músculos obtienen energía de dos maneras. En los esfuerzos largos y moderados, como correr despacio, nadar o ir en bici, la consiguen con oxígeno a partir de la glucosa y las grasas: es el ejercicio <mark>aeróbico</mark>, que mejora la resistencia, el corazón y los pulmones. En los esfuerzos muy intensos y cortos, como un sprint o levantar un gran peso, el oxígeno no llega a tiempo y obtienen la energía sin él: es el ejercicio <mark>anaeróbico</mark>, que mejora la fuerza y la velocidad pero produce <b>ácido láctico</b> y fatiga rápida.</p><p>Con el <b>entrenamiento</b> regular, las fibras musculares se hacen más gruesas y fuertes, aumenta el número de mitocondrias y de capilares y el músculo se cansa menos. Si se deja de entrenar, ocurre lo contrario: es la <b>atrofia</b>, como le pasa a una pierna escayolada durante semanas.</p><p>Para que el entrenamiento sea seguro hay que <b>calentar</b> antes, aumentar la carga poco a poco, descansar y dormir para que los músculos se recuperen, y beber agua. Las agujetas que aparecen uno o dos días después de un ejercicio nuevo se deben a pequeñas roturas de las fibras, que se reparan solas.</p>`,
      svg: L.compara("Ejercicio aeróbico y anaeróbico", ["Aeróbico", "var(--leaf)", ["con oxígeno", "largo y moderado", "correr, nadar", "mejora la resistencia"]], ["Anaeróbico", "var(--red)", ["sin oxígeno", "corto e intenso", "sprint, pesas", "fuerza y velocidad"]]),
    },
    {
      html: `<h3>3.1 Lesiones del aparato locomotor</h3><p>Las lesiones más frecuentes son la <b>fractura</b> (rotura de un hueso), el <b>esguince</b> (estiramiento o rotura de un ligamento, típico del tobillo), la <b>luxación</b> (un hueso se sale de su articulación), la <b>contractura</b> (un músculo se queda contraído y duele) y la <b>tendinitis</b> (inflamación de un tendón por sobreesfuerzo). Ante un golpe con sospecha de fractura hay que <mark>inmovilizar</mark> la zona y no intentar colocarla. En los esguinces y contracturas ayudan el reposo, el frío local en las primeras horas y elevar la zona. Siempre conviene que lo revise un profesional sanitario.</p>`,
      svg: L.tabla("Lesiones frecuentes del aparato locomotor", ["Lesión", "Qué se daña", "Ejemplo"], [["Fractura", "hueso", "radio"], ["Esguince", "ligamento", "tobillo"], ["Luxación", "articulación", "hombro"], ["Contractura", "músculo", "espalda"], ["Tendinitis", "tendón", "codo de tenista"]]),
      video: { id: "IxFpbOI971Q", titulo: "¿Qué hacer en caso de luxación, esguince o fractura?", canal: "Clínica Alemana", vistas: 817472 },
    },
    {
      html: `<h3>3.2 Primeros auxilios ante una lesión</h3><p>Saber actuar ante una lesión deportiva o un accidente puede evitar que empeore. Lo primero es siempre la regla <mark>PAS</mark>: <b>proteger</b> la zona para que no haya más heridos, <b>avisar</b> al 112 si es grave y <b>socorrer</b> a la persona.</p><p>Ante un <b>esguince</b>, una contractura o un golpe en un músculo, se aplica la pauta de reposo, frío y elevación: dejar de hacer ejercicio, aplicar <b>hielo</b> envuelto en un paño durante 15 o 20 minutos (nunca directamente sobre la piel), poner un vendaje que comprima ligeramente y <b>elevar</b> la zona por encima del corazón para reducir la hinchazón.</p><p>Si se sospecha una <b>fractura</b> o una <b>luxación</b> (dolor intenso, deformidad, no se puede mover), no hay que intentar colocar el hueso ni mover a la persona más de lo necesario. Se <b>inmoviliza</b> la zona con una férula improvisada (una revista, una tabla) que sujete las articulaciones de encima y de debajo, y se lleva a un centro sanitario. Si el hueso sale a través de la piel (fractura abierta), se tapa con una gasa limpia y se llama al 112. Ante un golpe fuerte en la espalda o el cuello, no se debe mover a la persona, porque podría dañarse la médula espinal.</p>`,
      svg: L.flujo("Primeros auxilios ante una lesión del aparato locomotor", ["PAS: proteger, avisar al 112 y socorrer", "Esguince: reposo, frío, vendaje y elevar", "Fractura: inmovilizar sin colocar el hueso", "Golpe en la espalda: no mover"], "Qué hacer ante una lesión"),
    },
    {
      html: `<h3>3.3 Cuidar huesos y músculos</h3><p>El <b>ejercicio</b> regular fortalece los músculos y hace los huesos más densos; en la adolescencia se forma casi toda la masa ósea que tendremos de adultos. Una dieta con <b>calcio</b> (lácteos, legumbres, frutos secos) y <b>vitamina D</b> (que fabrica la piel con el sol) es esencial. Con la edad aparece la <mark>osteoporosis</mark>: los huesos pierden calcio, se vuelven porosos y se rompen con facilidad. Una buena <b>postura</b> al sentarse, levantar pesos doblando las rodillas y llevar la mochila con las dos asas y con menos del 10 % del peso corporal previenen el dolor de espalda. Calentar y estirar evita lesiones.</p><p>El uso del móvil también afecta: inclinar la cabeza hacia la pantalla multiplica la carga sobre el cuello, que a 60 grados soporta el equivalente a más de 25 kg. Conviene levantar el móvil a la altura de los ojos, hacer pausas cada media hora en el estudio y cambiar de postura. El tabaco y el alcohol también debilitan los huesos.</p>`,
      svg: L.radial("Hábitos para cuidar el aparato locomotor", "Huesos y músculos", ["Ejercicio diario", "Calcio y vitamina D", "Buena postura", "Mochila ligera", "Calentar y estirar", "Móvil a la vista"], "var(--leaf)"),
    },
  ],
  figura: {
    titulo: "El movimiento, paso a paso",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Cadena del movimiento: cerebro da la orden, nervio la lleva, el músculo se contrae, el tendón tira del hueso y el hueso gira en la articulación">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["cerebro", "da la orden", "var(--pen)"], ["nervio", "lleva el impulso", "var(--pen)"], ["músculo", "se contrae", "var(--red)"], ["tendón", "tira del hueso", "#8a8a8a"], ["hueso", "palanca que gira", "var(--ink)"]].map(([n, d, c], i) => { const x = 20 + i * 122; return `<rect x="${x}" y="60" width="110" height="100" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${t(x + 55, 104, n, { size: 18, color: c, font: D })}${t(x + 55, 130, d, { size: 12, weight: 400 })}${i < 4 ? fl(x + 111, 110, x + 121, 110, "var(--muted)") : ""}`; }).join("")}
      ${t(320, 40, "parte activa (músculos) + parte pasiva (huesos y articulaciones)", { size: 14, color: "var(--muted)" })}
      ${t(320, 196, "los músculos solo tiran: trabajan por parejas antagonistas", { size: 14, color: "var(--red)" })}
    </svg>`,
  },
  video: { id: "zBj34cis3SU", titulo: "El sistema locomotor | El sistema óseo y muscular", canal: "Smile and Learn - Español", vistas: 2876946, megusta: 0, busqueda: "aparato locomotor huesos y músculos" },
  ejemplos: [
    { enunciado: "Al chutar un balón, ¿qué músculo de la pierna se contrae para estirar la rodilla y cuál se relaja?",
      pasos: ["Estirar la rodilla es el movimiento de extensión.", "Lo hace el cuádriceps, en la parte delantera del muslo.", "Su antagonista, en la parte trasera (isquiotibiales), se relaja."],
      resultado: "se contrae el cuádriceps y se relajan los isquiotibiales." },
    { enunciado: "Clasifica estas articulaciones: suturas del cráneo, rodilla, unión entre dos vértebras, hombro.",
      pasos: ["Suturas del cráneo: no se mueven, son fijas.", "Rodilla y hombro: mucho movimiento, son móviles.", "Vértebras: poco movimiento gracias a los discos, son semimóviles."],
      resultado: "fijas: suturas; semimóvil: vértebras; móviles: rodilla y hombro." },
    { enunciado: "Lucía pesa 50 kg. ¿Cuánto debería pesar como máximo su mochila?",
      pasos: ["Se recomienda no superar el 10 % del peso corporal.", "10 % de 50 kg = 0,10 · 50 = 5 kg."],
      resultado: "unos 5 kg como máximo." },
    { enunciado: "Un hueso de pollo se deja una semana en vinagre y otro se calienta en el horno a mucha temperatura. ¿Qué le pasa a cada uno y qué demuestra?",
      pasos: ["El vinagre disuelve las sales de calcio: el hueso queda blando y flexible, se puede doblar.", "El calor quema las proteínas (materia orgánica): el hueso queda duro pero frágil y se rompe con facilidad.", "Las sales dan dureza y las proteínas dan flexibilidad."],
      resultado: "en vinagre se dobla; calcinado se rompe. El hueso necesita sales y proteínas." },
    { enunciado: "Una persona se tuerce el tobillo jugando al baloncesto. Se le hincha pero puede apoyar el pie con dolor. ¿Qué lesión es probable y qué harías?",
      pasos: ["Al torcerse el tobillo se estiran los ligamentos: probable esguince.", "Puede apoyar el pie, así que es menos probable una fractura, aunque debe revisarlo un profesional.", "Aplicar reposo, hielo envuelto en un paño 15-20 minutos, vendaje suave y elevar el pie."],
      resultado: "un esguince de tobillo; reposo, frío, vendaje y elevación, y consulta sanitaria." },
    { enunciado: "Al mirar el móvil con la cabeza inclinada 60°, el cuello soporta unos 27 kg en lugar de 5 kg. ¿Cuántas veces más carga es?",
      pasos: ["Carga con la cabeza erguida: 5 kg.", "Carga inclinada: 27 kg.", "27 / 5 = 5,4."],
      resultado: "unas 5,4 veces más carga sobre el cuello." },
  ],
  errores: [...[
    "Pensar que los huesos son estructuras muertas: son órganos vivos que crecen y se reparan.",
    "Confundir tendón y ligamento: el tendón une músculo con hueso; el ligamento une hueso con hueso.",
    "Creer que un músculo puede empujar: solo tira, por eso trabajan por parejas.",
    "Decir que la médula ósea es lo mismo que la médula espinal: una fabrica sangre y la otra es nerviosa.",
    "Intentar colocar una fractura o una luxación: hay que inmovilizar y pedir ayuda.",
  ], "Pensar que la columna debe ser recta: tiene cuatro curvaturas naturales que amortiguan los impactos."],
  ejercicios: [
    { nivel: "básico", ...{ q: "Cita cuatro funciones del esqueleto.", sol: "Sostener el cuerpo, proteger órganos, permitir el movimiento junto con los músculos, fabricar células sanguíneas y almacenar calcio." } },
    { nivel: "básico", ...{ q: "¿Qué huesos forman la caja torácica y qué protegen?", sol: "Las costillas, el esternón y las vértebras dorsales. Protegen el corazón y los pulmones." } },
    { nivel: "básico", ...{ q: "Pon un ejemplo de hueso largo, corto y plano.", sol: "Largo: fémur. Corto: hueso de la muñeca (carpo). Plano: omóplato." } },
    { nivel: "básico", ...{ q: "¿Qué son los músculos antagonistas? Pon un ejemplo.", sol: "Parejas de músculos que hacen movimientos opuestos: cuando uno se contrae, el otro se relaja. Ejemplo: bíceps y tríceps." } },
    { nivel: "básico", ...{ q: "Diferencia esguince, luxación y fractura.", sol: "Esguince: lesión de un ligamento. Luxación: un hueso se sale de la articulación. Fractura: rotura de un hueso." } },
    { nivel: "básico", ...{ q: "Da tres consejos para cuidar la espalda en clase.", sol: "Sentarse con la espalda apoyada, levantar la mochila doblando las rodillas y llevarla con las dos asas y poco peso." } },
    { nivel: "básico", q: "Escribe las regiones de la columna vertebral y cuántas vértebras tiene cada una.", sol: "Cervical (7), dorsal (12), lumbar (5), sacra (5 soldadas) y coxígea (4 soldadas): 33 en total." },
    { nivel: "básico", q: "Nombra los huesos del brazo y de la pierna.", sol: "Brazo: húmero, cúbito, radio y huesos de la mano. Pierna: fémur, rótula, tibia, peroné y huesos del pie." },
    { nivel: "básico", q: "Diferencia tendón y ligamento con un ejemplo de cada uno.", sol: "Tendón: une músculo y hueso (tendón de Aquiles). Ligamento: une hueso y hueso (ligamentos de la rodilla)." },
    { nivel: "básico", q: "Indica qué músculo hace cada acción: masticar, levantar el brazo hacia un lado, estirar la rodilla.", sol: "Masetero, deltoides y cuádriceps." },
    { nivel: "básico", q: "¿Qué significa la regla PAS?", sol: "Proteger, avisar al 112 y socorrer." },
    { nivel: "básico", q: "¿Qué diferencia hay entre la médula ósea roja y la amarilla?", sol: "La roja fabrica células de la sangre y está en el tejido esponjoso; la amarilla es grasa y está en el canal de la diáfisis de los huesos largos." },
    { nivel: "medio", ...{ q: "Diferencia el tejido óseo compacto del esponjoso.", sol: "El compacto es macizo y forma la capa externa; el esponjoso tiene huecos, está en el interior y en él se encuentra la médula ósea roja." } },
    { nivel: "medio", ...{ q: "¿Qué estructuras facilitan el movimiento en una articulación móvil?", sol: "El cartílago, que es liso, y el líquido sinovial, que lubrica. Los ligamentos mantienen unidos los huesos." } },
    { nivel: "medio", ...{ q: "Explica con tus palabras cómo se contrae una fibra muscular.", sol: "Con el impulso nervioso, la miosina tira de la actina; los filamentos se deslizan, se solapan más y la fibra se acorta." } },
    { nivel: "medio", ...{ q: "¿Qué es la osteoporosis y cómo se previene?", sol: "Pérdida de calcio que vuelve los huesos frágiles. Se previene con ejercicio, calcio, vitamina D y sin tabaco ni alcohol, sobre todo formando huesos fuertes en la juventud." } },
    { nivel: "medio", q: "Explica cómo crecen los huesos largos y por qué dejamos de crecer.", sol: "Crecen en longitud en los cartílagos de crecimiento, entre la diáfisis y las epífisis, que fabrican hueso bajo el control de la hormona del crecimiento. Hacia los 18-20 años esos cartílagos se osifican y el crecimiento en altura termina." },
    { nivel: "medio", q: "Describe las fases de la reparación de una fractura.", sol: "Coágulo de sangre en la rotura; callo blando de cartílago que une los fragmentos; el callo se transforma en hueso; el hueso se remodela y recupera su forma en meses." },
    { nivel: "medio", q: "¿Por qué hay que inmovilizar una fractura?", sol: "Para que los fragmentos no se muevan y el callo pueda unirlos en la posición correcta; si se mueven, el hueso tarda más en soldar o lo hace torcido, y además se evita más dolor y daño." },
    { nivel: "medio", q: "Compara el ejercicio aeróbico y el anaeróbico con dos ejemplos de cada uno.", sol: "Aeróbico: con oxígeno, largo y moderado, mejora la resistencia (correr despacio, nadar). Anaeróbico: sin oxígeno, corto e intenso, mejora fuerza y velocidad y produce ácido láctico (sprint, pesas)." },
    { nivel: "medio", q: "¿Qué función tienen las curvaturas de la columna?", sol: "Funcionan como un muelle que amortigua los impactos al andar, correr o saltar y reparten el peso del cuerpo." },
    { nivel: "medio", q: "¿Qué es una hernia discal?", sol: "El desplazamiento de un disco intervertebral que presiona un nervio y produce dolor, a menudo por levantar pesos de forma incorrecta." },
    { nivel: "medio", q: "Explica por qué una pierna escayolada varias semanas pierde músculo.", sol: "Porque el músculo que no se usa se atrofia: sus fibras se hacen más finas y débiles. Con rehabilitación y ejercicio recupera su tamaño." },
    { nivel: "medio", q: "Qué articulación es esférica y cuál de bisagra: hombro, rodilla, cadera, codo.", sol: "Esféricas: hombro y cadera (giran en todas direcciones). De bisagra: rodilla y codo (una sola dirección)." },
    { nivel: "avanzado", q: "Explica por qué los astronautas pierden masa ósea en el espacio y cómo lo evitan.", sol: "Sin gravedad, los huesos no soportan peso y los osteoclastos destruyen más hueso del que fabrican los osteoblastos; se pierde un 1-2 % al mes. Lo evitan con unas dos horas de ejercicio diario de carga y fuerza." },
    { nivel: "avanzado", q: "Construye un modelo del brazo con cartón, un encuadernador y dos gomas. ¿Qué representa cada pieza y qué demuestra?", sol: "Los dos cartones son el húmero y el antebrazo; el encuadernador, la articulación del codo; las gomas, el bíceps (delante) y el tríceps (detrás). Al acortar una goma el brazo se dobla o se estira, y la otra se estira: demuestra que los músculos solo tiran y trabajan como antagonistas." },
    { nivel: "avanzado", q: "¿Por qué se dice que la adolescencia es clave para prevenir la osteoporosis?", sol: "Porque en esos años se forma casi toda la masa ósea que tendremos de adultos. Si se construyen huesos densos con ejercicio, calcio y vitamina D, la pérdida que llega con la edad tardará más en hacerlos frágiles." },
    { nivel: "avanzado", q: "Los huesos actúan como palancas. Explica la palanca del antebrazo al sostener un peso en la mano.", sol: "El punto de apoyo es el codo, la fuerza la aplica el bíceps cerca del codo y la resistencia es el peso en la mano, lejos. Como el bíceps está cerca del apoyo, necesita mucha fuerza, pero un pequeño acortamiento del músculo produce un gran movimiento de la mano." },
    { nivel: "avanzado", q: "Diseña un plan semanal de actividad física para un adolescente que combine resistencia, fuerza y flexibilidad, con prevención de lesiones.", sol: "Al menos una hora diaria: tres días de ejercicio aeróbico (correr, bici, natación), dos o tres días de fuerza con el propio peso (sentadillas, flexiones), estiramientos tras cada sesión, un día de descanso activo. Siempre calentar, aumentar la carga poco a poco, hidratarse y dormir 8-10 horas." },
    { nivel: "avanzado", q: "¿Por qué no se debe mover a una persona que ha sufrido un golpe fuerte en la espalda?", sol: "Porque puede tener una fractura de vértebras; si se mueve, un fragmento puede dañar la médula espinal y provocar una parálisis permanente. Hay que llamar al 112 y esperar a los profesionales." },
    { nivel: "avanzado", q: "Explica por qué aparecen las agujetas y por qué el entrenamiento hace que cada vez aparezcan menos.", sol: "Se deben a pequeñas roturas de las fibras musculares tras un esfuerzo nuevo o intenso, que se inflaman y duelen uno o dos días después. Al repararse, las fibras se hacen más fuertes y resistentes, así que el mismo esfuerzo ya no las daña." },
  ],
  quiz: [
    { q: "La parte activa del aparato locomotor son…", o: ["los huesos", "los músculos", "los ligamentos", "los cartílagos"], a: 1, e: "Se contraen y tiran de los huesos." },
    { q: "Un adulto tiene…", o: ["300 huesos", "100 huesos", "206 huesos", "33 huesos"], a: 2, e: "Los recién nacidos, unos 300." },
    { q: "El hueso más largo del cuerpo es el…", o: ["fémur", "húmero", "estribo", "radio"], a: 0, e: "En el muslo." },
    { q: "Las vértebras a las que se unen las costillas son las…", o: ["cervicales", "lumbares", "sacras", "dorsales"], a: 3, e: "Hay 12." },
    { q: "La médula ósea roja fabrica…", o: ["grasa", "células de la sangre", "impulsos nerviosos", "calcio"], a: 1, e: "Glóbulos rojos, blancos y plaquetas." },
    { q: "Los huesos crecen en longitud en…", o: ["el periostio", "la médula", "los cartílagos de crecimiento", "los tendones"], a: 2, e: "Entre diáfisis y epífisis." },
    { q: "Las células que fabrican hueso nuevo son los…", o: ["osteoblastos", "osteoclastos", "glóbulos rojos", "neuronas"], a: 0, e: "Los osteoclastos lo destruyen." },
    { q: "Las suturas del cráneo son articulaciones…", o: ["móviles", "semimóviles", "esféricas", "fijas"], a: 3, e: "No se mueven." },
    { q: "El líquido sinovial…", o: ["fabrica sangre", "lubrica la articulación", "une músculos", "es un hueso"], a: 1, e: "En las articulaciones móviles." },
    { q: "El tendón une…", o: ["hueso con hueso", "dos músculos", "músculo con hueso", "nervio con músculo"], a: 2, e: "El ligamento, hueso con hueso." },
    { q: "Las proteínas que contraen el músculo son…", o: ["actina y miosina", "insulina y glucagón", "hemoglobina y fibrina", "queratina y colágeno"], a: 0, e: "Se deslizan unas sobre otras." },
    { q: "Para doblar el codo se contrae el…", o: ["tríceps", "cuádriceps", "deltoides", "bíceps"], a: 3, e: "Y se relaja el tríceps." },
    { q: "El músculo más potente del cuerpo es el…", o: ["bíceps", "cuádriceps", "masetero", "trapecio"], a: 1, e: "En el muslo." },
    { q: "El ejercicio anaeróbico…", o: ["es largo y suave", "usa siempre oxígeno", "es corto e intenso", "no cansa"], a: 2, e: "Produce ácido láctico." },
    { q: "La rotura de un ligamento es un…", o: ["esguince", "fractura", "luxación", "tendinitis"], a: 0, e: "Típico del tobillo." },
    { q: "Ante una sospecha de fractura hay que…", o: ["colocar el hueso", "masajear", "aplicar calor", "inmovilizar la zona"], a: 3, e: "Y acudir a un centro sanitario." },
    { q: "La mochila no debería pesar más del…", o: ["50 % del peso corporal", "10 % del peso corporal", "30 %", "1 %"], a: 1, e: "Y llevarla con las dos asas." },
    { q: "La osteoporosis es…", o: ["una fractura", "una infección", "la pérdida de calcio de los huesos", "un músculo contraído"], a: 2, e: "Los huesos se vuelven frágiles." },
    { q: "La pérdida de músculo por no usarlo se llama…", o: ["atrofia", "agujeta", "contractura", "esguince"], a: 0, e: "Ocurre con una escayola." },
    { q: "El atlas y el axis son vértebras…", o: ["lumbares", "sacras", "dorsales", "cervicales"], a: 3, e: "Permiten mover la cabeza." },
  ],
  examen: [
    { q: "El esqueleto protege el encéfalo con…", o: ["las costillas", "el cráneo", "la pelvis", "el esternón"], a: 1, e: "Huesos soldados." },
    { q: "Las sales de calcio dan al hueso…", o: ["flexibilidad", "color", "dureza", "sangre"], a: 2, e: "Las proteínas dan flexibilidad." },
    { q: "Un músculo solo puede…", o: ["tirar", "empujar", "empujar y tirar", "girar solo"], a: 0, e: "Por eso trabajan por parejas." },
    { q: "El hombro es una articulación…", o: ["fija", "semimóvil", "de bisagra", "esférica"], a: 3, e: "Gira en todas direcciones." },
    { q: "Ante un esguince se aplica…", o: ["calor y masaje", "reposo, frío, vendaje y elevación", "ejercicio intenso", "nada"], a: 1, e: "Reduce la hinchazón." },
    { q: "Los discos intervertebrales son de…", o: ["hueso", "músculo", "cartílago", "grasa"], a: 2, e: "Amortiguan entre vértebras." },
    { q: "El entrenamiento regular hace que el músculo…", o: ["tenga más mitocondrias y capilares", "se atrofie", "pierda fibras", "no cambie"], a: 0, e: "Se cansa menos." },
    { q: "Para prevenir la osteoporosis es clave…", o: ["evitar el sol", "no hacer ejercicio", "comer poco calcio", "formar huesos fuertes en la juventud"], a: 3, e: "Con ejercicio, calcio y vitamina D." },
  ],
  feynman: [...["Qué funciones tiene el esqueleto además de movernos", "Cómo se contrae un músculo y por qué trabajan por parejas", "Qué lesiones son frecuentes y cómo se previenen"], "Cómo se repara un hueso roto", "Qué diferencia hay entre ejercicio aeróbico y anaeróbico"],
  mapa: mapa("APARATO LOCOMOTOR", "var(--eso)", [
    ["Huesos", "206 · compacto · esponjoso · médula", "var(--ink)"],
    ["Articulaciones", "fijas · semimóviles · móviles", "var(--sun)"],
    ["Músculos", "tendones · actina · miosina", "var(--red)"],
    ["Salud", "ejercicio · calcio · postura", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ...[
    ["Funciones del esqueleto", "Sostén, protección, movimiento, fabricar sangre y almacenar calcio."],
    ["Médula ósea roja", "Tejido del interior de los huesos que fabrica células de la sangre."],
    ["Articulación móvil", "Con cartílago, líquido sinovial y ligamentos; por ejemplo, la rodilla."],
    ["Ligamento", "Une hueso con hueso."],
    ["Tendón", "Une músculo con hueso."],
    ["Actina y miosina", "Proteínas que se deslizan para contraer el músculo."],
    ["Antagonistas", "Pareja de músculos con acciones opuestas, como bíceps y tríceps."],
    ["Osteoporosis", "Pérdida de calcio que hace los huesos frágiles."],
  ],
    ["Columna vertebral", "33 vértebras: 7 cervicales, 12 dorsales, 5 lumbares, sacro y cóccix."],
    ["Cartílago de crecimiento", "Zona del hueso largo donde se produce el crecimiento en longitud."],
    ["Aeróbico y anaeróbico", "Aeróbico: con oxígeno, resistencia. Anaeróbico: sin oxígeno, fuerza."],
    ["Primeros auxilios", "PAS; esguince: frío y elevar; fractura: inmovilizar."],
  ],
  glosario: [
    ["Aparato locomotor", "Conjunto del sistema óseo y el muscular que permite el movimiento."],
    ["Hueso", "Órgano vivo y duro formado por tejido óseo."],
    ["Médula ósea roja", "Tejido que fabrica las células de la sangre."],
    ["Periostio", "Membrana que recubre el hueso por fuera."],
    ["Osificación", "Sustitución del cartílago por hueso."],
    ["Vértebra", "Cada uno de los huesos de la columna vertebral."],
    ["Articulación", "Unión entre dos huesos."],
    ["Líquido sinovial", "Líquido que lubrica las articulaciones móviles."],
    ["Ligamento", "Cordón que une hueso con hueso."],
    ["Tendón", "Cordón que une músculo con hueso."],
    ["Fibra muscular", "Célula larga con muchos núcleos del músculo esquelético."],
    ["Músculos antagonistas", "Pareja de músculos con acciones opuestas."],
    ["Atrofia", "Pérdida de masa muscular por falta de uso."],
    ["Esguince", "Lesión de un ligamento."],
    ["Fractura", "Rotura de un hueso."],
    ["Luxación", "Salida de un hueso de su articulación."],
    ["Osteoporosis", "Pérdida de calcio que hace los huesos frágiles."],
  ],
  situacion: {
    titulo: "Mochilas, pantallas y espaldas sanas",
    reto: "El equipo directivo quiere saber si las mochilas y el uso del móvil están afectando a la espalda del alumnado. Vuestro grupo hará un estudio en el instituto y propondrá medidas concretas.",
    pasos: [
      "Pesad las mochilas de varios cursos y calculad qué porcentaje del peso corporal suponen (con datos anónimos).",
      "Observad y fotografiad (con permiso) posturas al sentarse y al usar el móvil, y analizadlas con lo aprendido sobre la columna.",
      "Construid un modelo de columna con carretes o esponjas para explicar las curvaturas y los discos.",
      "Diseñad una tabla de ejercicios de calentamiento y estiramiento con Educación Física.",
      "Presentad las conclusiones y tres propuestas al equipo directivo (taquillas, horarios de libros, pausas activas).",
    ],
    producto: "Informe con datos y gráficas, modelo de columna y un cartel de higiene postural para las aulas.",
    evaluacion: [
      "Rigor en las medidas y cálculo correcto de porcentajes.",
      "Explicación científica de la columna, las articulaciones y los músculos.",
      "Viabilidad de las propuestas.",
      "Claridad del cartel y de la presentación.",
    ],
  },
  familias: ["Pesad la mochila y comprobad que no pasa del 10 % del peso de quien la lleva.", "Tocad juntos el bíceps y el tríceps mientras se dobla y se estira el brazo.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Saberes básicos de «Cuerpo humano» y «Hábitos saludables» de Biología y Geología de 1º a 3º (RD 217/2022, BOE-A-2022-4975): sistema óseo y muscular, articulaciones, contracción muscular, ejercicio, lesiones frecuentes, primeros auxilios y hábitos posturales. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Hueso de pollo en vinagre una semana frente a otro calcinado: papel de las sales y de las proteínas.",
      "Maqueta de brazo con cartón, gomas y cuerdas para ver los antagonistas.",
      "Coordinación con Educación Física para analizar el calentamiento y los primeros auxilios.",
      "Medida del peso de las mochilas y cálculo del porcentaje del peso corporal.",
    ],
  },
  fuentes: [...[RD, wiki("Aparato locomotor", "Aparato_locomotor"), wiki("Articulación (anatomía)", "Articulaci%C3%B3n_(anatom%C3%ADa)")], wiki("Columna vertebral", "Columna_vertebral")],
  revisado: "2026-11-13",
};
