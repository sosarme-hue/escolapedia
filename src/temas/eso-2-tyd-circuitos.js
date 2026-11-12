// Tecnología y Digitalización 2º ESO: circuitos eléctricos. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV, pila, bombilla, resis } = require("./_eso2a");

// interruptor abierto en horizontal: de x a x+24
const inter = (x, y) => `<circle cx="${x}" cy="${y}" r="2.5" fill="var(--ink)"/><circle cx="${x + 24}" cy="${y}" r="2.5" fill="var(--ink)"/><path d="M${x} ${y} L ${x + 21} ${y - 11}" stroke="var(--ink)" stroke-width="2"/>`;
const hueco = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="var(--paper)"/>`;

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "Circuitos eléctricos",
  minutos: 55,
  objetivos: ["Identificar los elementos de un circuito eléctrico y su función", "Dibujar esquemas con la simbología normalizada", "Distinguir circuitos en serie, en paralelo y mixtos y predecir su comportamiento", "Calcular resistencias equivalentes, intensidades y voltajes en circuitos sencillos"],
  claves: ["circuito", "generador", "receptor", "conductor", "interruptor", "fusible", "esquema", "serie", "paralelo", "mixto", "resistencia equivalente", "cortocircuito"],
  pregunta: {
    texto: "En el árbol de Navidad de tu abuela, si se funde una bombilla se apagan todas. En el de tu casa, si se funde una, las demás siguen encendidas. ¿Qué diferencia hay entre los dos?",
    respuesta: "La forma de conectar las bombillas. En el de la abuela están <b>en serie</b>: hay un solo camino para la corriente y, si una bombilla se funde, el camino se corta para todas. En el tuyo están <b>en paralelo</b> (o por grupos): cada bombilla tiene su propio camino y las demás siguen funcionando. Por eso en las casas todos los enchufes y lámparas se conectan en paralelo.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un circuito eléctrico?</h3><p>Un <mark>circuito eléctrico</mark> es un <b>camino cerrado</b> por el que circula la corriente eléctrica desde un generador, a través de distintos elementos, hasta volver al generador. Si el camino se interrumpe en algún punto, la corriente deja de circular: decimos que el circuito está <b>abierto</b>. Si el camino está completo, el circuito está <b>cerrado</b> y funciona. Un circuito sirve para <b>transformar la energía eléctrica</b> en otras formas de energía útiles: luz en una lámpara, movimiento en un motor, sonido en un timbre o calor en una estufa. Todos los aparatos eléctricos, desde una linterna hasta un ordenador, son en el fondo circuitos, más o menos complicados, formados por los mismos tipos de elementos básicos.</p>`,
    },
    {
      html: `<h3>Elementos de un circuito</h3><p>Todo circuito tiene cuatro tipos de elementos. El <mark>generador</mark> proporciona la energía y crea el voltaje: pilas, baterías, dinamos o la red eléctrica. Los <mark>receptores</mark> transforman la energía eléctrica en otra forma de energía: bombillas y LED (luz), motores (movimiento), timbres y zumbadores (sonido) o resistencias de calefacción (calor). Los <mark>conductores</mark> son los cables, normalmente de cobre recubierto de plástico, que unen los elementos y por los que circula la corriente. Los <mark>elementos de maniobra</mark> permiten abrir o cerrar el circuito a voluntad: el <b>interruptor</b> mantiene su posición (como el de la luz de tu cuarto); el <b>pulsador</b> solo cierra mientras lo apretamos (como el timbre); y el <b>conmutador</b> permite elegir entre dos caminos. Además, muchos circuitos llevan <b>elementos de protección</b>, como los fusibles y los diferenciales.</p>`,
      video: { id: "PFP9LsBdnLA", titulo: "El circuito eléctrico y sus componentes", canal: "Clases Particulares en Ávila", vistas: 196373 },
    },
    {
      html: `<h3>Los esquemas eléctricos</h3><p>Dibujar un circuito tal como es, con todos sus cables y aparatos, sería lento y confuso. Por eso los técnicos usan <mark>esquemas eléctricos</mark>: dibujos simplificados en los que cada elemento se representa con un <b>símbolo normalizado</b>, el mismo en todo el mundo. Los cables se dibujan como <b>líneas rectas</b>, horizontales o verticales, con esquinas en ángulo recto. Cuando dos cables se cruzan y están conectados, se marca un punto gordo en el cruce; si no hay punto, solo se cruzan sin tocarse. Saber leer esquemas permite entender cómo funciona cualquier aparato y montarlo en el taller sin equivocarse. En los esquemas se suele indicar también el valor de cada elemento: el voltaje de la pila (por ejemplo 4,5 V) o la resistencia de cada receptor (por ejemplo 10 Ω).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Símbolos eléctricos: pila, bombilla, resistencia, interruptor, motor y LED">${BG}
        <path d="M20 40 H 42 M50 40 H 72" stroke="var(--ink)" stroke-width="2"/>${pila(42, 40)}${t(46, 68, "pila", { size: 10 })}
        <path d="M110 40 H 122 M142 40 H 154" stroke="var(--ink)" stroke-width="2"/>${bombilla(132, 40)}${t(132, 68, "bombilla", { size: 10 })}
        <path d="M188 40 H 199 M229 40 H 240" stroke="var(--ink)" stroke-width="2"/>${resis(214, 40)}${t(214, 68, "resistencia", { size: 10 })}
        <path d="M20 112 H 34 M58 112 H 72" stroke="var(--ink)" stroke-width="2"/>${inter(34, 112)}${t(46, 140, "interruptor", { size: 10 })}
        <path d="M110 112 H 120 M144 112 H 154" stroke="var(--ink)" stroke-width="2"/><circle cx="132" cy="112" r="12" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${t(132, 117, "M", { size: 13 })}${t(132, 140, "motor", { size: 10 })}
        <path d="M188 112 H 204 M224 112 H 240" stroke="var(--ink)" stroke-width="2"/><path d="M204 102 L 220 112 L 204 122 Z M220 102 V 122" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${fl(214, 100, 224, 90, "var(--red)", 1.5)}${fl(208, 98, 218, 88, "var(--red)", 1.5)}${t(214, 140, "LED", { size: 10 })}</svg>`,
    },
    {
      html: `<h3>Circuito en serie</h3><p>En un <mark>circuito en serie</mark> los receptores se conectan <b>uno detrás de otro</b>, de modo que solo hay <b>un camino</b> para la corriente. Sus características son: la <b>intensidad es la misma</b> en todos los receptores, porque la corriente no tiene por dónde desviarse; el <b>voltaje del generador se reparte</b> entre los receptores, por lo que cada bombilla brilla menos que si estuviera sola; la <b>resistencia equivalente</b> es la suma de todas: <b>R<sub>T</sub> = R<sub>1</sub> + R<sub>2</sub> + …</b>; y si un receptor se funde o se desconecta, <b>todos dejan de funcionar</b>, porque el circuito queda abierto. Cuantas más bombillas pongamos en serie, menos brilla cada una. Se usa, por ejemplo, para colocar un interruptor que controle un receptor, o en las pilas de un mando, que se ponen en serie para sumar sus voltajes: dos pilas de 1,5 V dan 3 V.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Circuito en serie: una pila y dos bombillas una detrás de otra en un único camino; la intensidad es la misma y el voltaje se reparte">${BG}
        <path d="M40 40 H 220 V 130 H 40 Z" fill="none" stroke="var(--ink)" stroke-width="2"/>${hueco(118, 120, 24, 20)}<path d="M40 130 H 126 M134 130 H 220" stroke="var(--ink)" stroke-width="2"/>${pila(126, 130)}${t(130, 156, "4,5 V", { size: 10 })}
        ${hueco(88, 30, 24, 20)}${bombilla(100, 40)}${hueco(148, 30, 24, 20)}${bombilla(160, 40)}
        ${fl(60, 54, 80, 54, "var(--red)", 2)}${t(130, 22, "un solo camino", { size: 10, color: "var(--red)" })}
        ${t(130, 86, "R = R₁ + R₂", { size: 13, color: "var(--pen)" })}${t(130, 104, "misma I · V repartido", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Circuito en paralelo</h3><p>En un <mark>circuito en paralelo</mark> cada receptor se conecta <b>directamente a los dos polos del generador</b>, en ramas distintas, de modo que hay <b>varios caminos</b> para la corriente. Sus características son: todos los receptores tienen <b>el mismo voltaje</b>, el del generador, y por eso cada bombilla brilla igual que si estuviera sola; la <b>intensidad total se reparte</b> entre las ramas: I<sub>T</sub> = I<sub>1</sub> + I<sub>2</sub> + …; la <b>resistencia equivalente es menor</b> que la más pequeña de las resistencias: 1/R<sub>T</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + …; y si un receptor se funde, <b>los demás siguen funcionando</b>. Esta es la conexión de las instalaciones de las viviendas: todas las lámparas y enchufes están en paralelo, a 230 V, y puedes encender o apagar cada aparato sin afectar a los demás. Su inconveniente es que la pila se gasta antes, porque entrega más intensidad.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Circuito en paralelo: dos bombillas en ramas distintas conectadas a la pila; el voltaje es el mismo y la intensidad se reparte">${BG}
        <path d="M40 30 H 200 V 140 H 40 Z M120 30 V 140" fill="none" stroke="var(--ink)" stroke-width="2"/>
        ${hueco(30, 74, 20, 24)}<path d="M28 86 H 52" stroke="var(--paper)" stroke-width="1"/><path d="M40 74 V 82 M40 90 V 98" stroke="var(--ink)" stroke-width="2"/><path d="M28 82 H 52 M34 90 H 46" stroke="var(--ink)" stroke-width="2.5"/>${t(60, 90, "4,5 V", { size: 10, anchor: "start" })}
        ${hueco(110, 73, 20, 26)}${bombilla(120, 86)}${hueco(190, 73, 20, 26)}${bombilla(200, 86)}
        <circle cx="120" cy="30" r="3.5" fill="var(--ink)"/><circle cx="120" cy="140" r="3.5" fill="var(--ink)"/>
        ${t(160, 20, "dos caminos", { size: 10, color: "var(--red)" })}${t(160, 162, "mismo V · I repartida", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "UQqSrMOpC-c", titulo: "Circuito en paralelo: intensidad de corriente y resistencia", canal: "Algebraticos", vistas: 975087 },
    },
    {
      html: `<h3>Comparar serie y paralelo</h3><p>Un experimento sencillo en el taller lo muestra muy bien: monta dos bombillas iguales en serie con una pila de 4,5 V y verás que brillan poco; móntalas en paralelo con la misma pila y brillarán como una sola, pero la pila durará la mitad. Quita una bombilla de cada montaje: en serie se apaga la otra; en paralelo, la otra sigue encendida. Esta tabla resume las diferencias.</p>${tabla(["", "Serie", "Paralelo"], [["Caminos para la corriente", "Uno", "Varios"], ["Intensidad", "La misma en todos", "Se reparte entre las ramas"], ["Voltaje", "Se reparte", "El mismo en todos"], ["Resistencia equivalente", "R₁ + R₂ (mayor)", "Menor que la menor"], ["Si un receptor se funde", "Se apagan todos", "Los demás siguen"], ["Brillo de las bombillas", "Menor", "Igual que si estuviera sola"]])}`,
    },
    {
      html: `<h3>Circuitos mixtos y cálculo</h3><p>Un <mark>circuito mixto</mark> combina tramos en serie y tramos en paralelo. Para resolverlo se van <b>simplificando por partes</b>: primero se calcula la resistencia equivalente de cada grupo en paralelo, luego se suman las que quedan en serie, y así hasta obtener una sola resistencia equivalente. Con ella y la ley de Ohm se calcula la intensidad total. Para dos resistencias en paralelo hay un atajo muy útil: <b>R<sub>T</sub> = (R<sub>1</sub> · R<sub>2</sub>) / (R<sub>1</sub> + R<sub>2</sub>)</b>, es decir, «producto partido por suma». Y si las dos son iguales, la equivalente es la mitad de una. Por ejemplo, dos resistencias de 6 Ω en paralelo equivalen a 3 Ω; si en serie con ellas hay otra de 3 Ω, la total es 3 + 3 = 6 Ω; con una pila de 12 V circulan I = 12 / 6 = 2 A.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Circuito mixto: dos resistencias de 6 ohmios en paralelo, en serie con una de 3 ohmios; se simplifica a 3 más 3 igual a 6 ohmios">${BG}
        <path d="M20 60 H 50 M50 40 V 80 M50 40 H 75 M105 40 H 130 M50 80 H 75 M105 80 H 130 M130 40 V 80 M130 60 H 160 M190 60 H 230" stroke="var(--ink)" stroke-width="2" fill="none"/>
        ${resis(90, 40)}${resis(90, 80)}${resis(175, 60)}<circle cx="50" cy="60" r="3" fill="var(--ink)"/><circle cx="130" cy="60" r="3" fill="var(--ink)"/>
        ${t(90, 28, "6 Ω", { size: 10 })}${t(90, 100, "6 Ω", { size: 10 })}${t(175, 48, "3 Ω", { size: 10 })}
        ${t(130, 128, "paralelo: 6 · 6 / (6 + 6) = 3 Ω", { size: 10, color: "var(--pen)" })}${t(130, 148, "serie: 3 + 3 = 6 Ω", { size: 10, color: "var(--red)" })}${t(130, 168, "con 12 V: I = 12 / 6 = 2 A", { size: 10, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>El cortocircuito y la protección</h3><p>Un <mark>cortocircuito</mark> ocurre cuando los dos polos del generador se unen directamente por un conductor sin ningún receptor en medio, por ejemplo si se pelan dos cables y se tocan. Como la resistencia es casi cero, la intensidad se dispara (según la ley de Ohm, I = V / R) y los cables se calientan muchísimo: pueden fundirse, quemar el aislante y provocar un incendio. Una pila en cortocircuito se calienta y se agota en minutos. Para evitar daños, las instalaciones llevan <b>elementos de protección</b>. El <mark>fusible</mark> es un hilo fino que se funde y abre el circuito si pasa demasiada corriente. El <b>interruptor magnetotérmico</b> (los «plomos» del cuadro eléctrico) hace lo mismo pero se puede volver a subir. Y el <b>interruptor diferencial</b> corta la corriente si detecta una fuga, por ejemplo cuando una persona recibe una descarga: salva vidas.</p>`,
    },
    {
      html: `<h3>Montar circuitos en el taller y con simuladores</h3><p>En el taller de Tecnología se montan circuitos con pilas de petaca (4,5 V), portalámparas, bombillas, interruptores, motores pequeños y cables con pinzas de cocodrilo, o sobre una <b>placa de prototipos</b> (protoboard), en la que los componentes se pinchan sin soldar. Antes de montar, siempre se dibuja el esquema. Después se comprueba con el <b>polímetro</b> que los voltajes y las intensidades son los esperados. También se pueden diseñar y probar circuitos en <mark>simuladores</mark> gratuitos por internet, como <b>Tinkercad Circuits</b> o los de PhET, que dejan ver cómo circula la corriente y medir sin riesgo de quemar nada. Una buena costumbre: monta el circuito con el interruptor abierto, revísalo y solo entonces ciérralo. Si algo se calienta o huele a quemado, desconecta la pila enseguida.</p>`,
    },
  ],
  figura: {
    titulo: "Serie frente a paralelo",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="A la izquierda, dos bombillas en serie: un camino, brillan menos y si una se funde se apagan las dos. A la derecha, dos bombillas en paralelo: varios caminos, brillan igual y si una se funde la otra sigue">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      <rect x="20" y="16" width="290" height="198" rx="14" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>${t(165, 44, "SERIE", { size: 18, color: "var(--red)", font: D })}
      <path d="M60 70 H 270 V 150 H 60 Z" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="153" y="140" width="24" height="20" fill="var(--card)"/><path d="M153 150 H 161 M169 150 H 177" stroke="var(--ink)" stroke-width="2"/>${pila(161, 150)}
      <rect x="111" y="58" width="24" height="24" fill="var(--card)"/>${bombilla(123, 70, 11)}<rect x="195" y="58" width="24" height="24" fill="var(--card)"/>${bombilla(207, 70, 11)}
      ${t(165, 186, "un camino · brillan menos", { size: 13 })}${t(165, 204, "si una se funde, se apagan las dos", { size: 11, weight: 400 })}
      <rect x="330" y="16" width="290" height="198" rx="14" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>${t(475, 44, "PARALELO", { size: 18, color: "var(--pen)", font: D })}
      <path d="M370 60 H 580 V 156 H 370 Z M475 60 V 156" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="360" y="96" width="20" height="24" fill="var(--card)"/><path d="M370 96 V 104 M370 112 V 120 M358 104 H 382 M364 112 H 376" stroke="var(--ink)" stroke-width="2.5"/>
      <rect x="463" y="96" width="24" height="24" fill="var(--card)"/>${bombilla(475, 108, 11)}<rect x="568" y="96" width="24" height="24" fill="var(--card)"/>${bombilla(580, 108, 11)}
      ${t(475, 186, "varios caminos · brillan igual", { size: 13 })}${t(475, 204, "si una se funde, la otra sigue", { size: 11, weight: 400 })}
    </svg>`,
  },
  video: { id: "GUESpG6inds", titulo: "¿Qué son los circuitos eléctricos? Y sus tipos: serie y paralelo", canal: "A Cierta Ciencia", vistas: 882593, megusta: 0, busqueda: "circuitos eléctricos serie y paralelo" },
  ejemplos: [
    { enunciado: "Dos resistencias de 10 Ω y 20 Ω se conectan en serie a una pila de 9 V. Calcula la resistencia equivalente y la intensidad.",
      pasos: ["En serie se suman: R = 10 + 20 = 30 Ω.", "Ley de Ohm: I = V / R = 9 / 30.", "I = 0,3 A, la misma en las dos resistencias."],
      resultado: "30 Ω y 0,3 A." },
    { enunciado: "Dos bombillas de 12 Ω se conectan en paralelo a 6 V. ¿Cuál es la resistencia equivalente y la intensidad total?",
      pasos: ["Iguales en paralelo: la mitad, R = 12 / 2 = 6 Ω.", "I total = 6 / 6 = 1 A.", "Por cada rama: 6 / 12 = 0,5 A (0,5 + 0,5 = 1 A)."],
      resultado: "6 Ω y 1 A." },
    { enunciado: "Una resistencia de 4 Ω está en serie con un grupo en paralelo de 3 Ω y 6 Ω, todo a 12 V. Calcula la intensidad total.",
      pasos: ["Paralelo: (3 · 6) / (3 + 6) = 18 / 9 = 2 Ω.", "Serie: 4 + 2 = 6 Ω.", "I = 12 / 6 = 2 A."],
      resultado: "2 A." },
  ],
  errores: [
    "Dibujar los cables torcidos o en diagonal en un esquema: van rectos y en ángulo recto.",
    "Pensar que en serie cada bombilla recibe todo el voltaje: se reparte.",
    "Sumar las resistencias en paralelo: la equivalente es menor que la menor.",
    "Creer que en paralelo se reparte el voltaje: lo que se reparte es la intensidad.",
    "Pensar que un fusible fundido se arregla con un trozo de cable: se elimina la protección.",
  ],
  ejercicios: [
    { q: "Nombra los cuatro tipos de elementos de un circuito y pon un ejemplo de cada uno.", sol: "Generador (pila), receptor (bombilla), conductor (cable), maniobra (interruptor)." },
    { q: "¿Qué diferencia hay entre un interruptor y un pulsador?", sol: "El interruptor mantiene su posición; el pulsador solo cierra mientras se aprieta." },
    { q: "¿Qué significa un punto gordo en el cruce de dos cables en un esquema?", sol: "Que los cables están conectados en ese punto." },
    { q: "Tres resistencias de 5, 10 y 15 Ω en serie. Calcula la resistencia equivalente.", sol: "5 + 10 + 15 = 30 Ω." },
    { q: "Con las resistencias anteriores y una pila de 6 V, ¿qué intensidad circula?", sol: "I = 6 / 30 = 0,2 A." },
    { q: "Dos resistencias de 20 Ω en paralelo. ¿Cuánto vale la equivalente?", sol: "10 Ω (la mitad, por ser iguales)." },
    { q: "Calcula la equivalente de 4 Ω y 12 Ω en paralelo.", sol: "(4 · 12) / (4 + 12) = 48 / 16 = 3 Ω." },
    { q: "¿Por qué las lámparas de una casa se conectan en paralelo?", sol: "Para que todas reciban 230 V y se puedan encender y apagar por separado; si una se funde, las demás siguen." },
    { q: "¿Qué es un cortocircuito y por qué es peligroso?", sol: "La unión directa de los polos sin receptor; la intensidad se dispara, los cables se calientan y puede haber un incendio." },
    { q: "¿Para qué sirve el interruptor diferencial?", sol: "Corta la corriente si detecta una fuga, por ejemplo una descarga a una persona." },
  ],
  quiz: [
    { q: "Un circuito abierto…", o: ["funciona", "no deja pasar la corriente", "está en cortocircuito"], a: 1, e: "El camino está cortado." },
    { q: "Un motor es un…", o: ["generador", "receptor", "elemento de maniobra"], a: 1, e: "Receptor: produce movimiento." },
    { q: "El timbre de casa usa un…", o: ["interruptor", "pulsador", "fusible"], a: 1, e: "Pulsador." },
    { q: "En serie, la intensidad…", o: ["es la misma en todos", "se reparte", "es cero"], a: 0, e: "Hay un solo camino." },
    { q: "En paralelo, el voltaje…", o: ["se reparte", "es el mismo en todos", "se suma"], a: 1, e: "Igual al del generador." },
    { q: "10 Ω y 30 Ω en serie equivalen a…", o: ["40 Ω", "20 Ω", "7,5 Ω"], a: 0, e: "Se suman." },
    { q: "Dos de 8 Ω en paralelo equivalen a…", o: ["16 Ω", "4 Ω", "8 Ω"], a: 1, e: "La mitad." },
    { q: "Si se funde una bombilla en serie…", o: ["se apagan todas", "las demás siguen", "brillan más"], a: 0, e: "Se abre el circuito." },
    { q: "Los enchufes de casa están en…", o: ["serie", "paralelo", "mixto"], a: 1, e: "Paralelo." },
    { q: "Protege contra el exceso de corriente…", o: ["el conmutador", "el fusible", "el pulsador"], a: 1, e: "El fusible." },
  ],
  examen: [
    { q: "Al añadir bombillas en serie, cada una…", o: ["brilla más", "brilla menos", "brilla igual"], a: 1, e: "El voltaje se reparte entre más bombillas." },
    { q: "La resistencia equivalente en paralelo es…", o: ["mayor que la mayor", "menor que la menor", "la suma"], a: 1, e: "Menor que la menor." },
    { q: "Dos pilas de 1,5 V en serie dan…", o: ["1,5 V", "3 V", "0,75 V"], a: 1, e: "Los voltajes se suman." },
  ],
  feynman: ["Qué elementos tiene un circuito y para qué sirve cada uno", "En qué se diferencian un circuito en serie y uno en paralelo", "Qué es un cortocircuito y cómo nos protegemos"],
  mapa: mapa("CIRCUITOS", "var(--eso)", [
    ["Elementos", "generador · receptor · cable · interruptor", "var(--pen)"],
    ["Serie", "un camino · R = R₁ + R₂", "var(--red)"],
    ["Paralelo", "varios caminos · mismo V", "var(--leaf)"],
    ["Protección", "fusible · magnetotérmico · diferencial", "#b8860b"],
  ], 290),
  tarjetas: [
    ["Circuito eléctrico", "Camino cerrado por el que circula la corriente."],
    ["Generador", "Da energía y crea el voltaje: pila, batería."],
    ["Receptor", "Transforma la energía eléctrica: bombilla, motor."],
    ["Interruptor", "Abre o cierra el circuito y mantiene su posición."],
    ["Serie", "Un solo camino: misma I, se reparte V."],
    ["Paralelo", "Varios caminos: mismo V, se reparte I."],
    ["Cortocircuito", "Unión directa de los polos: peligro."],
    ["Fusible", "Hilo que se funde si pasa demasiada corriente."],
  ],
  familias: ["Mirad juntos el cuadro eléctrico de casa e identificad el diferencial y los magnetotérmicos.", "Revisad cómo están colocadas las pilas de un mando: en serie.", "Probad un simulador de circuitos gratuito y montad serie y paralelo."],
  profesores: {
    saberes: "Electricidad: circuitos eléctricos, elementos y simbología, conexiones en serie, paralelo y mixtas, cálculo de magnitudes, protección y montaje en el taller y con simuladores (RD 217/2022, Tecnología y Digitalización, bloque A).",
    ideas: ["Montaje comparado de bombillas en serie y en paralelo con medidas de polímetro.", "Diseño en Tinkercad Circuits de la instalación de una habitación.", "Construcción de un juego de pulso eléctrico con zumbador."],
  },
  fuentes: [RD, wiki("Circuito eléctrico", "Circuito_eléctrico"), wiki("Circuitos en serie y en paralelo", "Circuitos_en_serie_y_paralelo")],
  revisado: REV,
};
