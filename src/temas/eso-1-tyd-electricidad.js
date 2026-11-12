// Tecnología y Digitalización 1º ESO: la electricidad. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, pila, bombilla, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

// Interruptor abierto o cerrado en un esquema horizontal.
const inter = (x, y, abierto = true) => `<circle cx="${x - 12}" cy="${y}" r="2.5" fill="var(--ink)"/><circle cx="${x + 12}" cy="${y}" r="2.5" fill="var(--ink)"/><path d="M${x - 12} ${y} L ${x + 12} ${abierto ? y - 12 : y}" stroke="var(--ink)" stroke-width="2"/>`;

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "La electricidad",
  minutos: 55,
  objetivos: ["Explicar qué es la corriente eléctrica a partir de las cargas eléctricas", "Distinguir materiales conductores y aislantes", "Identificar los elementos de un circuito y dibujarlos con sus símbolos", "Diferenciar circuitos en serie y en paralelo y usar la electricidad con seguridad"],
  claves: ["carga eléctrica", "electrón", "corriente eléctrica", "conductor", "aislante", "circuito", "generador", "receptor", "interruptor", "símbolo", "serie", "paralelo", "voltio", "cortocircuito", "ahorro energético"],
  pregunta: {
    texto: "Un pájaro puede posarse tranquilamente sobre un cable de alta tensión sin que le pase nada. ¿Por qué no se electrocuta?",
    respuesta: "Porque la corriente eléctrica solo circula si encuentra un <b>camino cerrado</b> entre dos puntos con distinta tensión. El pájaro toca un solo cable con las dos patas, que están casi al mismo potencial, así que la corriente sigue por el cable, que conduce mucho mejor que el pájaro. Si tocara a la vez dos cables, o el cable y el poste unido al suelo, cerraría un circuito a través de su cuerpo y sí se electrocutaría. Por eso <b>nunca hay que acercarse a los cables</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la electricidad?</h3><p>Toda la materia está formada por átomos, y los átomos contienen unas partículas con <mark>carga eléctrica</mark>: los <b>protones</b>, con carga positiva, que están en el núcleo, y los <b>electrones</b>, con carga negativa, que giran alrededor. Normalmente un objeto tiene tantas cargas positivas como negativas y es neutro. Pero los electrones pueden pasar de un cuerpo a otro: al frotar un globo con el pelo, el globo gana electrones y queda cargado, y por eso atrae trocitos de papel o pone los pelos de punta. Esto es la <b>electricidad estática</b>; los rayos de una tormenta son una gigantesca descarga de ella. La <mark>corriente eléctrica</mark> es diferente: es el <b>movimiento ordenado de electrones</b> a través de un material, como el agua que circula por una tubería. Esa corriente transporta <b>energía</b>, que los aparatos transforman en luz, calor, movimiento o sonido. La electricidad es una de las formas de energía más útiles porque se transporta con facilidad a grandes distancias por cables y se transforma fácilmente en otras.</p>`,
      video: { id: "ovrgMD6tEm8", titulo: "¿Qué es la electricidad? Ciencia para niños, episodio 1", canal: "Smile and Learn - Español", vistas: 848584 },
    },
    {
      html: `<h3>Conductores y aislantes</h3><p>No todos los materiales dejan pasar la corriente igual. Los <mark>conductores</mark> son materiales que permiten el paso de la corriente con facilidad, porque sus electrones se mueven con libertad: son sobre todo los <b>metales</b>, como el cobre, el aluminio, el hierro, el oro o la plata, y también el grafito de los lápices, el cuerpo humano y el agua con sales (como la del grifo o la del mar). Los <mark>aislantes</mark> son materiales que <b>no dejan pasar la corriente</b> (o casi nada): los plásticos, la goma, la madera seca, el vidrio, la cerámica, el papel, el aire seco o el corcho. Los cables eléctricos combinan los dos: un <b>hilo de cobre</b> por dentro, que conduce la corriente, y una <b>funda de plástico</b> por fuera, que aísla y nos protege. Del mismo modo, los enchufes tienen las patas metálicas y el cuerpo de plástico, y las herramientas de los electricistas tienen mangos aislantes.</p>${tabla(["Conductores", "Aislantes"], [["cobre, aluminio, hierro", "plástico, goma"], ["oro, plata", "madera seca, corcho"], ["grafito", "vidrio, cerámica"], ["agua con sales, cuerpo humano", "aire seco, papel"]])}`,
    },
    {
      html: `<h3>El circuito eléctrico</h3><p>Un <mark>circuito eléctrico</mark> es un conjunto de elementos conectados entre sí que forman un <b>camino cerrado</b> por el que circula la corriente. Si el camino se interrumpe en algún punto, la corriente se detiene. Todo circuito tiene cuatro tipos de elementos. El <mark>generador</mark> proporciona la energía que hace circular los electrones: una <b>pila</b>, una batería, una placa solar, una dinamo o la red eléctrica de casa. Los <mark>conductores</mark> son los cables que unen los elementos y por los que circula la corriente. Los <mark>receptores</mark> son los elementos que transforman la energía eléctrica en otra útil: una <b>bombilla</b> o un LED (luz), un <b>motor</b> (movimiento), un timbre o un altavoz (sonido) o una resistencia de una estufa (calor). Y los <mark>elementos de control</mark> permiten abrir o cerrar el circuito a voluntad: el <b>interruptor</b> (se queda en la posición que lo dejas), el <b>pulsador</b> (solo funciona mientras lo aprietas, como un timbre) y el <b>conmutador</b> (dirige la corriente por uno u otro camino). Además, muchos circuitos tienen <b>elementos de protección</b>, como los fusibles.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Circuito con una pila, un interruptor cerrado y una bombilla encendida, con la corriente circulando por un camino cerrado">${BG}
        <path d="M60 50 H 200 V 130 H 60 Z" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <rect x="46" y="80" width="28" height="20" fill="var(--paper)"/><path d="M48 86 h 24 M54 95 h 12" stroke="var(--ink)" stroke-width="2.5"/>
        <rect x="114" y="40" width="34" height="20" fill="var(--paper)"/>${inter(130, 50, false)}
        <rect x="186" y="78" width="28" height="26" fill="var(--paper)"/>${bombilla(200, 90, 11)}
        ${t(28, 94, "pila", { size: 10.5 })}${t(130, 30, "interruptor", { size: 10.5 })}${t(184, 94, "bombilla", { size: 10.5, anchor: "end" })}
        ${fl(110, 130, 150, 130, "var(--red)", 2.5)}${t(130, 152, "corriente: camino cerrado", { size: 10, color: COL.rojo })}</svg>`,
    },
    {
      html: `<h3>Los símbolos eléctricos</h3><p>Dibujar los aparatos tal como son sería lento y confuso. Por eso los circuitos se representan con <mark>esquemas eléctricos</mark>, en los que cada elemento se dibuja con un <mark>símbolo</mark> sencillo y normalizado que entienden los técnicos de todo el mundo. Los cables se dibujan como líneas rectas, horizontales o verticales, y cuando se cruzan y están unidos se marca un punto. La <b>pila</b> se representa con dos rayas paralelas, una larga (polo positivo) y otra corta (polo negativo). La <b>bombilla</b> es un círculo con un aspa. El <b>motor</b> es un círculo con una M. El <b>interruptor</b> se dibuja como una línea inclinada, abierta o cerrada. La <b>resistencia</b>, como un rectángulo. El <b>LED</b>, como un triángulo con una raya y dos flechitas que salen. Y el <b>timbre</b>, como un semicírculo. Aprender los símbolos permite leer y dibujar cualquier circuito, y es el primer paso para montarlo en el taller o en un simulador por ordenador.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Símbolos eléctricos: pila, bombilla, motor, interruptor, resistencia y LED">${BG}
        ${[[45, 52, "pila"], [130, 52, "bombilla"], [215, 52, "motor"], [45, 132, "interruptor"], [130, 132, "resistencia"], [215, 132, "LED"]].map(([x, y, n]) => `<path d="M${x - 32} ${y} H ${x + 32}" stroke="var(--ink)" stroke-width="2"/>${t(x, y + 32, n, { size: 10 })}`).join("")}
        <rect x="35" y="38" width="20" height="28" fill="var(--paper)"/><path d="M40 38 v 28 M50 45 v 14" stroke="var(--ink)" stroke-width="2.5"/>${t(36, 34, "+", { size: 10, color: COL.rojo })}
        <rect x="118" y="40" width="24" height="24" fill="var(--paper)"/>${bombilla(130, 52, 11)}
        <circle cx="215" cy="52" r="12" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>${t(215, 56.5, "M", { size: 12 })}
        <rect x="31" y="118" width="28" height="18" fill="var(--paper)"/>${inter(45, 132, true)}
        <rect x="114" y="126" width="32" height="12" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M207 124 v 16 l 14 -8 z" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/><path d="M221 124 v 16" stroke="var(--ink)" stroke-width="2"/><path d="M216 120 l 6 -8 M222 122 l 6 -8" stroke="var(--ink)" stroke-width="1.3"/></svg>`,
    },
    {
      html: `<h3>Magnitudes eléctricas básicas</h3><p>Para describir la corriente se usan algunas magnitudes. El <mark>voltaje</mark> o tensión es la «fuerza» con que el generador empuja los electrones; se mide en <b>voltios (V)</b>. Una pila normal tiene 1,5 V, una pila de petaca 4,5 V, la batería de un móvil unos 4 V, la de un coche 12 V y los enchufes de casa 230 V, una tensión que ya es <b>peligrosa</b> para las personas. La <mark>intensidad</mark> de corriente indica cuánta electricidad circula cada segundo; se mide en <b>amperios (A)</b>. La <mark>resistencia</mark> es la dificultad que pone un material al paso de la corriente; se mide en <b>ohmios (Ω)</b>: los buenos conductores tienen poca resistencia y los aislantes, muchísima. Para comparar, podemos imaginar un circuito de agua: el voltaje sería como la presión de la bomba, la intensidad como la cantidad de agua que pasa y la resistencia como lo estrecha que es la tubería. Estas magnitudes se relacionan con la <b>ley de Ohm</b>, que se estudia en cursos posteriores.</p>`,
    },
    {
      html: `<h3>Circuitos en serie y en paralelo</h3><p>Cuando un circuito tiene varios receptores, por ejemplo dos bombillas, se pueden conectar de dos formas. En un <mark>circuito en serie</mark>, los receptores se colocan <b>uno detrás de otro</b>, en un único camino: la corriente pasa por todos. Las bombillas lucen <b>menos</b> que si estuvieran solas, porque se reparten el voltaje de la pila, y si una se funde o se quita, el circuito se abre y <b>se apagan todas</b>. Así eran algunas guirnaldas antiguas de luces de Navidad. En un <mark>circuito en paralelo</mark>, cada receptor está en un <b>camino distinto</b> conectado directamente a la pila: las bombillas lucen <b>con toda su intensidad</b>, y si una se funde, <b>las demás siguen funcionando</b>, aunque la pila se gasta antes. Así está conectada la instalación de una casa: cada lámpara y cada enchufe están en paralelo, por eso puedes apagar la luz de la cocina sin que se apague la nevera.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación de un circuito en serie con dos bombillas en un único camino y un circuito en paralelo con cada bombilla en su propio camino">${BG}
        <path d="M20 50 H 110 V 120 H 20 Z" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="12" y="74" width="16" height="22" fill="var(--paper)"/><path d="M14 80 h 12 M17 88 h 6" stroke="var(--ink)" stroke-width="2.5"/>
        <rect x="44" y="40" width="20" height="20" fill="var(--paper)"/>${bombilla(54, 50, 9)}<rect x="76" y="40" width="20" height="20" fill="var(--paper)"/>${bombilla(86, 50, 9)}
        ${t(65, 144, "serie", { size: 11, color: COL.rojo })}${t(65, 160, "un solo camino", { size: 9, weight: 400, color: "var(--muted)" })}
        <path d="M150 50 H 240 V 120 H 150 Z M196 50 V 120" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="142" y="74" width="16" height="22" fill="var(--paper)"/><path d="M144 80 h 12 M147 88 h 6" stroke="var(--ink)" stroke-width="2.5"/>
        <rect x="186" y="76" width="20" height="20" fill="var(--paper)"/>${bombilla(196, 86, 9)}<rect x="230" y="76" width="20" height="20" fill="var(--paper)"/>${bombilla(240, 86, 9)}
        ${t(195, 144, "paralelo", { size: 11, color: COL.verde })}${t(195, 160, "un camino para cada una", { size: 9, weight: 400, color: "var(--muted)" })}</svg>`,
      video: { id: "jen12v-Sz80", titulo: "Circuitos en serie y en paralelo", canal: "Charly Labs", vistas: 651283 },
    },
    {
      html: `<h3>Efectos de la corriente eléctrica</h3><p>La energía eléctrica se transforma en los receptores en otras formas de energía, y eso produce distintos efectos. El <mark>efecto luminoso</mark>: la corriente produce luz, como en las bombillas, los LED y las pantallas. El <mark>efecto térmico</mark>: al pasar la corriente por ciertos materiales, estos se calientan, como en las estufas, los hornos, los secadores, las planchas o los tostadores; todos tienen una resistencia que se pone al rojo. El <mark>efecto magnético</mark>: un cable por el que circula corriente se comporta como un imán; enrollado en espiral alrededor de un trozo de hierro forma un <b>electroimán</b>, base de los motores, los timbres y los altavoces. El efecto <b>mecánico</b>: los motores transforman la electricidad en movimiento, como en los ventiladores, las lavadoras o los coches eléctricos. El efecto <b>sonoro</b>: timbres, altavoces y auriculares. Y el efecto <b>químico</b>: la corriente puede provocar reacciones químicas, como al recargar una batería o al recubrir objetos con una capa de metal.</p>`,
    },
    {
      html: `<h3>Seguridad y ahorro eléctrico</h3><p>La corriente de la red eléctrica de casa puede ser <b>mortal</b>, porque el cuerpo humano conduce la electricidad. Por eso hay que seguir unas normas: no tocar enchufes ni aparatos con las <b>manos mojadas</b> ni descalzo sobre suelo mojado; no meter objetos en los enchufes; desenchufar tirando de la clavija y no del cable; no sobrecargar los enchufes con muchos ladrones; no usar aparatos con los cables pelados; y no acercarse nunca a cables caídos ni a torres de alta tensión. En el taller solo se trabaja con <b>pilas</b> de poco voltaje. Un <mark>cortocircuito</mark> ocurre cuando los dos polos del generador se unen directamente sin pasar por ningún receptor: circula una corriente enorme que calienta los cables y puede provocar un incendio o agotar la pila. Para proteger la instalación, las casas tienen un <b>cuadro eléctrico</b> con un <b>interruptor diferencial</b>, que corta la corriente si detecta una fuga a través de una persona, e interruptores automáticos, que la cortan si hay un cortocircuito o se pide demasiada corriente. También es importante <mark>ahorrar energía</mark>: apagar las luces y los aparatos que no se usan, aprovechar la luz natural, usar lámparas LED y electrodomésticos de bajo consumo (clase A) y no dejar los aparatos en espera.</p>`,
      video: { id: "a4mY3YMNLz8", titulo: "Electricidad para niños, episodio 3: circuito, materiales conductores y aislantes", canal: "Smile and Learn - Español", vistas: 510918 },
    },
  ],
  figura: {
    titulo: "La electricidad en ocho ideas",
    svg: rejilla([
      ["Corriente", "electrones en movimiento", COL.sol],
      ["Conductor", "deja pasar: metales", COL.naranja],
      ["Aislante", "no deja pasar: plástico", COL.gris],
      ["Generador", "pila, batería, red", COL.rojo],
      ["Receptor", "bombilla, motor, timbre", COL.verde],
      ["Control", "interruptor, pulsador", COL.azul],
      ["Serie", "un camino: si una cae, todas", COL.morado],
      ["Paralelo", "caminos separados", COL.agua],
    ], 4, 86, "Resumen: corriente, conductores y aislantes, elementos del circuito y circuitos en serie y en paralelo"),
  },
  video: { id: "8mSokZu2Vf0", titulo: "¿Qué es la electricidad?", canal: "CuriosaMente", vistas: 1109922, megusta: 0, busqueda: "que es la electricidad circuito electrico" },
  ejemplos: [
    { enunciado: "Clasifica como conductor o aislante: clavo de hierro, goma de borrar, mina de lápiz, regla de plástico, moneda, palillo de madera.",
      pasos: ["Metales: clavo y moneda, conductores.", "Grafito de la mina: conductor.", "Goma, plástico y madera seca: aislantes."],
      resultado: "Conductores: clavo, mina, moneda. Aislantes: goma, regla, palillo." },
    { enunciado: "Una linterna tiene dos pilas, un interruptor y una bombilla. Identifica el tipo de cada elemento.",
      pasos: ["Pilas: generador.", "Interruptor: elemento de control.", "Bombilla: receptor.", "Las láminas metálicas internas: conductores."],
      resultado: "Generador, control, receptor y conductores." },
    { enunciado: "En una habitación hay dos lámparas. Si se funde una, la otra sigue encendida. ¿Están en serie o en paralelo?",
      pasos: ["En serie, al fundirse una se abre el único camino y se apagan las dos.", "En paralelo, cada una tiene su propio camino."],
      resultado: "En paralelo." },
  ],
  errores: [
    "Pensar que la corriente se «gasta» en la bombilla: lo que se transforma es la energía; los electrones siguen circulando.",
    "Creer que el agua es aislante: el agua con sales conduce.",
    "Olvidar que el circuito debe estar cerrado para que circule la corriente.",
    "Confundir interruptor y pulsador.",
    "Pensar que en serie las bombillas lucen igual que solas: lucen menos.",
  ],
  ejercicios: [
    { q: "¿Qué es la corriente eléctrica?", sol: "El movimiento ordenado de electrones a través de un material conductor." },
    { q: "Diferencia entre conductores y aislantes con dos ejemplos de cada uno.", sol: "Los conductores dejan pasar la corriente (cobre, aluminio); los aislantes no (plástico, madera seca)." },
    { q: "¿Por qué los cables tienen cobre por dentro y plástico por fuera?", sol: "El cobre conduce la corriente y el plástico aísla y nos protege." },
    { q: "Escribe los cuatro tipos de elementos de un circuito con un ejemplo de cada uno.", sol: "Generador (pila), conductor (cable), receptor (bombilla) y control (interruptor)." },
    { q: "Dibuja los símbolos de pila, bombilla, motor e interruptor abierto.", sol: "Dos rayas (larga y corta); círculo con aspa; círculo con M; línea inclinada separada del contacto." },
    { q: "¿En qué unidades se miden el voltaje, la intensidad y la resistencia?", sol: "Voltios (V), amperios (A) y ohmios (Ω)." },
    { q: "Escribe dos diferencias entre un circuito en serie y uno en paralelo.", sol: "En serie hay un solo camino y si falla un receptor se apagan todos; en paralelo cada uno tiene su camino y los demás siguen funcionando." },
    { q: "¿Qué efecto de la corriente aprovecha un tostador? ¿Y un ventilador?", sol: "Térmico; mecánico (motor)." },
    { q: "¿Qué es un cortocircuito y por qué es peligroso?", sol: "La unión directa de los polos sin receptor; circula mucha corriente, se calientan los cables y puede haber un incendio." },
    { q: "Escribe tres formas de ahorrar electricidad en casa.", sol: "Apagar luces que no se usan, usar LED y no dejar aparatos en espera." },
  ],
  quiz: [
    { q: "La corriente eléctrica es el movimiento de…", o: ["electrones", "protones", "neutrones"], a: 0, e: "Electrones." },
    { q: "Es un buen conductor…", o: ["el cobre", "la goma", "el vidrio"], a: 0, e: "Cobre." },
    { q: "Un motor es un…", o: ["receptor", "generador", "aislante"], a: 0, e: "Receptor." },
    { q: "La pila es un…", o: ["generador", "receptor", "control"], a: 0, e: "Generador." },
    { q: "El voltaje se mide en…", o: ["voltios", "amperios", "ohmios"], a: 0, e: "Voltios." },
    { q: "Los enchufes de casa tienen…", o: ["230 V", "1,5 V", "12 V"], a: 0, e: "230 V." },
    { q: "El símbolo de un círculo con una M es…", o: ["un motor", "una bombilla", "un timbre"], a: 0, e: "Motor." },
    { q: "Las luces de una casa están en…", o: ["paralelo", "serie", "cortocircuito"], a: 0, e: "Paralelo." },
    { q: "Un timbre solo suena mientras se aprieta: es un…", o: ["pulsador", "interruptor", "conmutador"], a: 0, e: "Pulsador." },
    { q: "Corta la corriente si hay una fuga por una persona…", o: ["el diferencial", "el enchufe", "el cable"], a: 0, e: "Interruptor diferencial." },
  ],
  examen: [
    { q: "Un electroimán aprovecha el efecto…", o: ["magnético", "térmico", "luminoso"], a: 0, e: "Magnético." },
    { q: "En serie, si se funde una bombilla…", o: ["se apagan todas", "las demás lucen más", "no pasa nada"], a: 0, e: "Se abre el circuito." },
    { q: "Al frotar un globo se produce electricidad…", o: ["estática", "continua", "alterna"], a: 0, e: "Estática." },
  ],
  feynman: ["Qué es la corriente eléctrica y por qué necesita un circuito cerrado", "Qué diferencia hay entre conductores y aislantes", "Por qué en casa los aparatos están conectados en paralelo"],
  mapa: mapa("ELECTRICIDAD", "var(--eso)", [
    ["Corriente", "electrones · voltios · amperios", COL.sol],
    ["Materiales", "conductores · aislantes", COL.naranja],
    ["Circuito", "generador · receptor · control", COL.azul],
    ["Uso", "serie · paralelo · seguridad", COL.verde],
  ], 300),
  tarjetas: [
    ["Corriente eléctrica", "Movimiento ordenado de electrones."],
    ["Conductor", "Material que deja pasar la corriente: metales."],
    ["Aislante", "Material que no deja pasar la corriente: plástico, goma."],
    ["Generador", "Elemento que da la energía: pila, batería."],
    ["Receptor", "Elemento que transforma la energía: bombilla, motor."],
    ["Voltio (V)", "Unidad del voltaje o tensión."],
    ["Circuito en serie", "Receptores en un solo camino."],
    ["Circuito en paralelo", "Cada receptor en su propio camino."],
  ],
  familias: ["Buscad juntos el cuadro eléctrico de casa y averiguad qué hace cada interruptor.", "Haced una lista de aparatos que se quedan en espera y calculad cuántos podrían apagarse.", "Frotad un globo con el pelo y pegadlo a la pared: hablad de la electricidad estática."],
  profesores: {
    saberes: "Electricidad: carga y corriente eléctrica, conductores y aislantes, elementos del circuito y simbología, magnitudes básicas, circuitos en serie y en paralelo, efectos de la corriente, seguridad y ahorro energético (RD 217/2022, Tecnología y Digitalización, bloques Proceso de resolución de problemas y Tecnología sostenible).",
    ideas: ["Comprobador de conductividad con una pila, una bombilla y dos cables.", "Montaje comparado de dos bombillas en serie y en paralelo.", "Simulación de circuitos con un simulador libre (PhET) antes de montarlos."],
  },
  fuentes: [RD, wiki("Corriente eléctrica", "Corriente_eléctrica"), wiki("Circuito eléctrico", "Circuito"), { t: "PhET: kit de construcción de circuitos", url: "https://phet.colorado.edu/es/" }],
  revisado: REV,
};
