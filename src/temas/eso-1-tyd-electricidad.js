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

require("./_eso1L5").libro(module.exports, {
  lectura: ["La noche del apagón", `<p>Eran las nueve de la noche y Hugo estaba haciendo los deberes cuando, de repente, todo se apagó: la lámpara, el router, la nevera, hasta el zumbido del frigorífico. Por la ventana vio que la calle entera estaba a oscuras. Su madre buscó a tientas una linterna en el cajón de la cocina, pero no funcionaba. «Las pilas están gastadas», dijo, y sacó unas nuevas del armario.</p><p>Con la linterna encendida, Hugo se dio cuenta de lo mucho que dependemos de la electricidad: sin ella no había luz, ni wifi, ni comida fría, ni ascensor, ni forma de cargar el móvil. Su padre bajó al cuadro eléctrico, vio que todos los interruptores estaban subidos y concluyó que el problema no era de casa, sino de la compañía eléctrica.</p><p>Una hora después volvió la luz. Al día siguiente, en clase de Tecnología, Hugo tenía muchas preguntas: ¿cómo llega la electricidad hasta su casa? ¿Por qué la linterna necesitaba pilas y la lámpara no? ¿Qué hace ese cuadro lleno de interruptores? ¿Por qué cuando se funde una bombilla las demás siguen encendidas? En este tema encontrarás las respuestas y aprenderás a montar tus propios circuitos con pilas, bombillas, motores y LED, de forma segura.</p>`],
  mas: [
    ["<h3>Magnitudes eléctricas básicas</h3>", `<p>Otra magnitud muy útil es la <b>potencia</b>, que indica cuánta energía consume un aparato cada segundo; se mide en <b>vatios (W)</b>. Una bombilla LED consume unos 8 W, un portátil unos 60 W y un horno unos 2.000 W. En la factura de la luz se paga la energía en <b>kilovatios hora (kWh)</b>: un aparato de 1.000 W funcionando una hora gasta 1 kWh.</p>`],
    ["<h3>Seguridad y ahorro eléctrico</h3>", `<p>El <b>cuadro eléctrico</b> de casa protege la instalación. El <b>interruptor diferencial</b> corta la corriente si detecta que una parte se escapa, por ejemplo a través de una persona. Los <b>magnetotérmicos</b> (los «automáticos») la cortan si hay un cortocircuito o si se conectan demasiados aparatos a la vez. Cuando «salta» uno, primero hay que buscar la causa y desconectar el aparato que ha fallado, y solo después volver a subirlo.</p>`],
  ],
  svgs: [
    ["<h3>¿Qué es la electricidad?</h3>", "Electricidad", [["átomo", "protones (+) y electrones (−)"], ["estática", "globo frotado, rayo"], ["corriente", "electrones en movimiento"]], "cargas que se mueven"],
    ["<h3>Conductores y aislantes</h3>", "Materiales", [["conductores", "cobre, aluminio, grafito"], ["aislantes", "plástico, goma, madera"], ["cable", "cobre dentro, plástico fuera"]], "¿dejan pasar la corriente?"],
    ["<h3>Magnitudes eléctricas básicas</h3>", "Magnitudes", [["voltaje", "voltios (V)"], ["intensidad", "amperios (A)"], ["resistencia", "ohmios (Ω)"], ["potencia", "vatios (W)"]], "medir la corriente"],
    ["<h3>Efectos de la corriente eléctrica</h3>", "Efectos", [["luminoso", "bombilla, LED"], ["térmico", "estufa, tostador"], ["magnético", "electroimán, timbre"], ["mecánico", "motor, ventilador"]], "en qué se transforma"],
    ["<h3>Seguridad y ahorro eléctrico</h3>", "Seguridad", [["manos secas", "nunca con agua"], ["enchufes", "sin objetos ni ladrones"], ["cuadro", "diferencial y automáticos"], ["ahorro", "apagar y usar LED"]], "electricidad sin riesgos"],
  ],
  bloques: [
    { tras: "<h3>Magnitudes eléctricas básicas</h3>", html: `<h3>La ley de Ohm</h3><p>El científico alemán Georg Simon Ohm descubrió en 1827 que las tres magnitudes básicas están relacionadas. La <mark>ley de Ohm</mark> dice que la intensidad que circula por un elemento es igual al voltaje dividido entre su resistencia:</p><p style="text-align:center"><b>I = V ÷ R</b></p><p>Es decir: si aumentamos el voltaje, circula más corriente; si aumentamos la resistencia, circula menos. Con la comparación del agua se entiende bien: si subimos más el depósito (más voltaje), el agua baja con más fuerza; si estrechamos la tubería (más resistencia), pasa menos agua.</p><p>Un ejemplo: una bombilla de resistencia 9 Ω conectada a una pila de 4,5 V. La intensidad será I = 4,5 ÷ 9 = <b>0,5 A</b>. Si la conectamos a dos pilas de 4,5 V en serie (9 V), circulará el doble, 1 A, y la bombilla brillará más (o se fundirá si no está preparada).</p><p>La fórmula también se puede usar al revés: <b>V = I × R</b> y <b>R = V ÷ I</b>. Por eso, por ejemplo, los LED se conectan siempre con una <b>resistencia</b> en serie: limita la intensidad para que el LED no se queme.</p>`, svg: ["Ley de Ohm", [["I = V ÷ R", "intensidad"], ["más voltaje", "más corriente"], ["más resistencia", "menos corriente"]], "voltaje, intensidad, resistencia"] },
    { tras: "<h3>Circuitos en serie y en paralelo</h3>", html: `<h3>Montar y medir circuitos</h3><p>En el taller los circuitos se montan con <b>pilas de petaca</b> (4,5 V) o portapilas, <b>cables con pinzas de cocodrilo</b>, <b>portalámparas</b> y una <b>placa de pruebas</b> (protoboard), donde los componentes se pinchan sin soldar. Antes de conectar la pila conviene repasar el circuito con el esquema delante: cada cable, en su sitio.</p><p>Para medir se usa el <mark>polímetro</mark> (o multímetro), un aparato con una rueda para elegir qué se mide y dos puntas, una roja (positivo) y una negra (negativo):</p><ul><li><b>Voltímetro</b>: mide el voltaje. Se coloca en <b>paralelo</b>, tocando los dos extremos del elemento. Así podemos saber si una pila está gastada: una pila de 1,5 V que marca 1,1 V ya no sirve.</li><li><b>Amperímetro</b>: mide la intensidad. Se coloca en <b>serie</b>, abriendo el circuito para que la corriente pase por dentro del aparato.</li><li><b>Óhmetro</b>: mide la resistencia, siempre con el circuito desconectado.</li><li><b>Prueba de continuidad</b>: pita si hay camino para la corriente; sirve para encontrar un cable roto.</li></ul><p>Si un circuito no funciona, se revisa con orden: ¿la pila tiene carga?, ¿el interruptor está cerrado?, ¿la bombilla está bien enroscada o fundida?, ¿algún cable se ha soltado?</p>`, svg: ["El polímetro", [["voltímetro", "en paralelo"], ["amperímetro", "en serie"], ["óhmetro", "sin corriente"], ["continuidad", "pita si hay camino"]], "medir en el taller"] },
    { tras: "<h3>Efectos de la corriente eléctrica</h3>", html: `<h3>Elementos de control y el LED</h3><p>Los <b>elementos de control</b> permiten decidir cuándo y por dónde pasa la corriente:</p><ul><li>El <b>interruptor</b> abre o cierra el circuito y se queda en esa posición, como el de la luz de la habitación.</li><li>El <b>pulsador</b> solo deja pasar la corriente mientras se aprieta, como el del timbre. Puede ser normalmente abierto o normalmente cerrado.</li><li>El <b>conmutador</b> envía la corriente por un camino u otro. Con dos conmutadores se puede encender y apagar la luz de un pasillo desde los dos extremos.</li></ul><p>El <mark>LED</mark> (diodo emisor de luz) es hoy el receptor de luz más usado. Tiene tres ventajas: consume hasta <b>diez veces menos</b> que una bombilla incandescente, dura muchísimo más y apenas se calienta. Pero tiene dos particularidades:</p><ul><li>Tiene <b>polaridad</b>: solo se enciende si se conecta en un sentido. La patita <b>larga</b> (ánodo) va al polo positivo y la <b>corta</b> (cátodo) al negativo.</li><li>Necesita una <b>resistencia</b> en serie para no quemarse con una pila de 4,5 V o más.</li></ul><p>Otros componentes que aparecen en los proyectos son el <b>zumbador</b>, la <b>LDR</b> (una resistencia que cambia con la luz) y el <b>relé</b>, un interruptor movido por un electroimán.</p>`, svg: ["Control y LED", [["interruptor", "se queda fijo"], ["pulsador", "solo mientras aprietas"], ["conmutador", "elige el camino"], ["LED", "patita larga al +"]], "decidir por dónde pasa"] },
    { html: `<h3>¿De dónde viene la electricidad?</h3><p>La electricidad de los enchufes se produce en las <mark>centrales eléctricas</mark>. En casi todas, algo hace girar una <b>turbina</b> unida a un <b>alternador</b>, que transforma el movimiento en electricidad. Lo que cambia es la fuente de energía:</p><ul><li><b>Renovables</b>, que no se agotan: el agua de un embalse (hidroeléctrica), el viento (eólica), el sol (solar fotovoltaica, que no necesita turbina, y solar térmica), el calor de la Tierra (geotérmica) o los restos vegetales (biomasa).</li><li><b>No renovables</b>: el carbón, el petróleo y el gas natural (centrales térmicas), que contaminan y emiten CO₂, y el uranio (centrales nucleares), que genera residuos radiactivos.</li></ul><p>Desde la central, la electricidad viaja por las <b>líneas de alta tensión</b> (a cientos de miles de voltios, para perder menos energía), pasa por <b>subestaciones y transformadores</b> que bajan el voltaje y llega a los edificios a 230 V. La red tiene que producir en cada momento la misma energía que se consume: por eso, a veces, un fallo grande provoca un <b>apagón</b> como el de la lectura.</p><p>Las pilas, en cambio, producen electricidad mediante una <b>reacción química</b>. Cuando se gastan son un residuo peligroso y hay que llevarlas a un contenedor de pilas.</p>`, svg: ["De la central a casa", [["central", "turbina y alternador"], ["alta tensión", "torres y cables"], ["transformador", "baja el voltaje"], ["casa", "230 V en el enchufe"]], "el viaje de la electricidad"] },
  ],
  grupos: [4, 4, 4],
  ejemplos: [
    ["Una bombilla de 6 Ω se conecta a una pila de 4,5 V. ¿Qué intensidad circula?", ["Datos: V = 4,5 V; R = 6 Ω.", "Ley de Ohm: I = V ÷ R.", "I = 4,5 ÷ 6 = 0,75."], "Circulan 0,75 A."],
    ["Un LED no se enciende al conectarlo a una pila con su resistencia. ¿Qué comprobarías?", ["Que la pila tenga carga (medir con el voltímetro).", "Que la patita larga vaya al positivo; si no, darle la vuelta.", "Que no falte ningún cable y que el circuito esté cerrado."], "Pila, polaridad del LED y continuidad del circuito."],
    ["Un televisor de 100 W está encendido 5 horas al día. ¿Cuánta energía gasta en una semana?", ["Al día: 100 W × 5 h = 500 Wh = 0,5 kWh.", "En 7 días: 0,5 × 7 = 3,5 kWh."], "Gasta 3,5 kWh a la semana."],
  ],
  errores: ["Conectar el LED al revés o sin resistencia: no se enciende o se quema."],
  niveles: "bbbbbbbmmm",
  ejercicios: [
    ["b", "Escribe la ley de Ohm y qué significa cada letra.", "<b>I = V ÷ R</b>: I es la intensidad (A), V el voltaje (V) y R la resistencia (Ω)."],
    ["b", "¿Qué aparato se usa para medir el voltaje de una pila?", "El <b>polímetro</b> en posición de <b>voltímetro</b>, colocado en paralelo."],
    ["b", "Diferencia entre interruptor y pulsador.", "El <b>interruptor</b> se queda abierto o cerrado; el <b>pulsador</b> solo cierra el circuito mientras se aprieta."],
    ["b", "¿Qué patita del LED va al polo positivo?", "La patita <b>larga</b> (ánodo)."],
    ["b", "Nombra tres fuentes de energía renovables.", "Por ejemplo, <b>hidroeléctrica</b>, <b>eólica</b> y <b>solar</b>."],
    ["m", "¿Qué intensidad circula por una resistencia de 3 Ω conectada a 1,5 V?", "I = 1,5 ÷ 3 = <b>0,5 A</b>."],
    ["m", "Si duplicamos el voltaje en un circuito, ¿qué le pasa a la intensidad? ¿Y si duplicamos la resistencia?", "Con el doble de voltaje, la intensidad se <b>duplica</b>; con el doble de resistencia, se reduce a la <b>mitad</b>."],
    ["m", "¿Por qué la electricidad se transporta a muy alta tensión?", "Para <b>perder menos energía</b> en los cables durante el viaje desde la central."],
    ["m", "¿Cómo se coloca el amperímetro y por qué?", "En <b>serie</b>, abriendo el circuito, porque tiene que medir la corriente que pasa a través de él."],
    ["m", "¿Qué ventajas tiene un LED frente a una bombilla incandescente?", "Consume mucho <b>menos</b>, dura <b>más</b> y apenas se calienta."],
    ["m", "¿Qué hace el interruptor diferencial del cuadro eléctrico?", "Corta la corriente si detecta una <b>fuga</b>, por ejemplo a través de una persona, y así evita electrocuciones."],
    ["m", "¿Cuántos kWh gasta una estufa de 2.000 W encendida 3 horas?", "2.000 W × 3 h = 6.000 Wh = <b>6 kWh</b>."],
    ["m", "¿Cómo se produce electricidad en una pila?", "Mediante una <b>reacción química</b> entre las sustancias de su interior."],
    ["a", "Una pila de 9 V alimenta un LED que necesita 2 V y 0,02 A. ¿Qué resistencia hay que poner en serie?", "La resistencia debe «gastar» 9 − 2 = 7 V. R = V ÷ I = 7 ÷ 0,02 = <b>350 Ω</b> (se usa el valor comercial más próximo, por ejemplo 330 Ω o 390 Ω)."],
    ["a", "Explica cómo funciona el encendido de la luz de un pasillo desde sus dos extremos.", "Se usan dos <b>conmutadores</b> unidos por dos cables. Cada uno elige uno de los dos caminos; la bombilla luce cuando los dos eligen el mismo camino. Al cambiar cualquiera de ellos, el circuito se abre o se cierra."],
    ["a", "Una linterna no funciona. Escribe en orden cómo buscarías la avería con un polímetro.", "1) Medir el <b>voltaje de las pilas</b>. 2) Comprobar la <b>continuidad</b> de la bombilla. 3) Comprobar la continuidad del <b>interruptor</b> cerrado. 4) Revisar los <b>contactos</b> y muelles. Se cambia lo que falle."],
    ["a", "Compara una central eólica y una de carbón: qué hace girar la turbina, ventajas e inconvenientes.", "Eólica: el <b>viento</b>; renovable y sin emisiones, pero depende de que haga viento y tiene impacto visual. Carbón: el <b>vapor</b> de agua calentada al quemar carbón; produce siempre que se quiera, pero contamina, emite CO₂ y el carbón se agota."],
    ["a", "Calcula cuánto ahorras al año (en kWh) si cambias una bombilla de 60 W por un LED de 8 W que está encendido 4 horas al día.", "Ahorro por hora: 52 W. Al día: 52 × 4 = 208 Wh. Al año: 208 × 365 = 75.920 Wh ≈ <b>76 kWh</b>."],
    ["a", "Hugo quiere un circuito con una pila, un pulsador, un LED con su resistencia y un zumbador que suenen juntos al pulsar. Dibuja el esquema y explica la conexión.", "Respuesta abierta. Por ejemplo: pila, pulsador y, en paralelo, dos ramas: una con resistencia + LED (patita larga hacia el +) y otra con el zumbador. Al pulsar, se cierra el circuito y funcionan los dos."],
    ["b", "¿Dónde se tiran las pilas gastadas?", "En el <b>contenedor de pilas</b> o en un punto limpio, porque son un residuo peligroso."],
    ["a", "En la lectura, ¿por qué la linterna funcionó con pilas nuevas y la lámpara no se encendió hasta que volvió la luz?", "La linterna tiene su <b>propio generador</b> (las pilas); la lámpara depende de la <b>red eléctrica</b>, que había fallado en todo el barrio."],
  ],
  cuartas: ["fotones", "la madera seca", "interruptor", "aislante", "vatios", "4,5 V", "un LED", "circuito abierto", "fusible", "la bombilla", "químico", "solo se apaga esa", "solar"],
  quiz: [
    ["La ley de Ohm dice que I es igual a…", ["V ÷ R", "V × R", "R ÷ V", "V + R"], "Intensidad = voltaje ÷ resistencia."],
    ["Si en un circuito aumenta la resistencia, la intensidad…", ["disminuye", "aumenta", "no cambia", "se duplica siempre"], "Más dificultad, menos corriente."],
    ["El voltímetro se coloca…", ["en paralelo", "en serie", "sin pila", "dentro de la bombilla"], "Toca los dos extremos."],
    ["El amperímetro se coloca…", ["en serie", "en paralelo", "fuera del circuito", "solo en casa"], "La corriente pasa por él."],
    ["La patita larga del LED va al…", ["polo positivo", "polo negativo", "interruptor siempre", "suelo"], "Es el ánodo."],
    ["Para que un LED no se queme se le pone…", ["una resistencia en serie", "un motor", "más pilas", "agua"], "Limita la intensidad."],
    ["La potencia se mide en…", ["vatios", "voltios", "amperios", "ohmios"], "W."],
    ["Una central eólica aprovecha…", ["el viento", "el carbón", "el uranio", "el gas"], "Es renovable."],
    ["La electricidad se transporta a alta tensión para…", ["perder menos energía", "que brille más", "que sea gratis", "que no se vea"], "Menos pérdidas."],
    ["El conmutador sirve para…", ["enviar la corriente por un camino u otro", "medir el voltaje", "producir luz", "guardar energía"], "Elige el camino."],
  ],
  examen: [
    ["Por una resistencia de 2 Ω conectada a 4,5 V circulan…", ["2,25 A", "9 A", "6,5 A", "0,44 A"], "4,5 ÷ 2."],
    ["Un aparato de 1.000 W encendido 2 horas gasta…", ["2 kWh", "1 kWh", "500 kWh", "2.000 kWh"], "1 kW × 2 h."],
    ["El automático (magnetotérmico) salta cuando…", ["hay un cortocircuito o demasiado consumo", "se enciende una luz", "es de noche", "se desenchufa algo"], "Protege la instalación."],
    ["Las pilas producen electricidad mediante…", ["una reacción química", "una turbina", "el viento", "un imán que gira"], "Energía química."],
    ["Para encontrar un cable roto se usa la prueba de…", ["continuidad", "potencia", "voltaje de la red", "temperatura"], "El polímetro pita."],
  ],
  tarjetas: [["Ley de Ohm", "I = V ÷ R: la intensidad es el voltaje dividido entre la resistencia."], ["Polímetro", "Aparato que mide voltaje (en paralelo), intensidad (en serie) y resistencia."], ["LED", "Diodo que emite luz; tiene polaridad y necesita resistencia."], ["Central eléctrica", "Instalación donde una turbina y un alternador producen electricidad."]],
  glosario: [
    ["electrón", "Partícula con carga negativa que se mueve en la corriente eléctrica."],
    ["corriente eléctrica", "Movimiento ordenado de electrones por un conductor."],
    ["conductor", "Material que deja pasar la corriente con facilidad."],
    ["aislante", "Material que no deja pasar la corriente."],
    ["circuito", "Camino cerrado por el que circula la corriente."],
    ["generador", "Elemento que da la energía al circuito, como una pila."],
    ["receptor", "Elemento que transforma la electricidad en luz, calor, sonido o movimiento."],
    ["voltaje", "Fuerza con que el generador empuja los electrones; en voltios."],
    ["intensidad", "Cantidad de corriente que circula cada segundo; en amperios."],
    ["resistencia", "Dificultad al paso de la corriente; en ohmios."],
    ["potencia", "Energía que consume un aparato cada segundo; en vatios."],
    ["polímetro", "Aparato para medir magnitudes eléctricas."],
    ["cortocircuito", "Unión directa de los polos del generador sin receptor."],
    ["diferencial", "Protección que corta la corriente si hay una fuga."],
    ["LED", "Diodo emisor de luz, de bajo consumo."],
  ],
  situacion: { titulo: "La caja de luz de emergencia", reto: "Diseñar y montar una luz de emergencia con pilas para el aula, con un interruptor, varios LED en paralelo y un zumbador opcional, y calcular su consumo.", pasos: ["Dibujar el esquema eléctrico con los símbolos normalizados.", "Calcular con la ley de Ohm la resistencia de cada LED.", "Montar el circuito en una placa de pruebas y comprobarlo con el polímetro.", "Pasarlo a una caja de cartón o madera con el interruptor accesible.", "Medir el voltaje de las pilas al principio y tras una hora encendida, y sacar conclusiones."], producto: "Una luz de emergencia que funciona, con su esquema, cálculos y una ficha de uso seguro.", evaluacion: ["El esquema usa bien los símbolos y está correctamente conectado.", "Los cálculos de la resistencia son correctos.", "El montaje funciona y los LED tienen la polaridad correcta.", "Se explican las medidas y las normas de seguridad."] },
  saberes: "ley de Ohm, potencia y energía eléctrica, medida con el polímetro, elementos de control (interruptor, pulsador, conmutador), el LED y otros componentes, producción y transporte de la electricidad, protecciones del cuadro eléctrico.",
  familias: ["Mirad juntos la factura de la luz: cuántos kWh se han gastado en el mes y qué aparatos de casa consumen más."],
  minutos: 100,
});
