// Física y Química 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Símbolos de circuito.
const pila = (x, y) => `<line x1="${x}" y1="${y - 12}" x2="${x}" y2="${y + 12}" stroke="var(--ink)" stroke-width="2.5"/><line x1="${x + 8}" y1="${y - 6}" x2="${x + 8}" y2="${y + 6}" stroke="var(--ink)" stroke-width="5"/>`;
const bombilla = (x, y) => `<circle cx="${x}" cy="${y}" r="11" fill="#fff6c8" stroke="var(--ink)" stroke-width="2"/><path d="M${x - 7} ${y - 7} L ${x + 7} ${y + 7} M${x + 7} ${y - 7} L ${x - 7} ${y + 7}" stroke="var(--ink)" stroke-width="1.5"/>`;

module.exports = {
  materia: "Física y Química",
  curso: "3-eso",
  titulo: "La electricidad y los circuitos",
  minutos: 60,
  objetivos: ["Explicar la corriente eléctrica y sus magnitudes: intensidad, voltaje y resistencia", "Identificar los elementos de un circuito y sus símbolos", "Aplicar la ley de Ohm y analizar circuitos en serie y en paralelo", "Calcular la potencia y la energía consumida y conocer las normas de seguridad eléctrica"],
  claves: ["corriente eléctrica", "intensidad", "voltaje", "resistencia", "ley de Ohm", "serie", "paralelo", "potencia"],
  pregunta: {
    texto: "En casa, si se funde una bombilla del salón, las demás siguen encendidas. Pero en algunas guirnaldas de Navidad antiguas, si se fundía una bombilla, se apagaban todas. ¿Por qué?",
    respuesta: "Por la forma de conectarlas. En la guirnalda antigua las bombillas estaban <mark>en serie</mark>, una detrás de otra, en un único camino: si una se rompe, el circuito se abre y no pasa corriente. En casa, las lámparas están <mark>en paralelo</mark>: cada una tiene su propio camino, así que funcionan de forma independiente.",
  },
  bloques: [
    {
      html: `<h3>La corriente eléctrica</h3><p>En el tema del átomo vimos que los electrones tienen carga negativa. En los <b>metales</b>, algunos electrones están poco ligados a sus átomos y se pueden mover libremente. Si conectamos un cable metálico a una pila, esos electrones se desplazan de forma ordenada a lo largo del cable: es la <mark>corriente eléctrica</mark>, un <b>flujo ordenado de cargas</b>. Los electrones van del polo negativo al positivo, pero por convenio histórico se dice que la corriente va del <b>polo positivo al negativo</b>. Los materiales que dejan pasar la corriente son <b>conductores</b> (cobre, aluminio, agua con sales, el cuerpo humano); los que no, son <b>aislantes</b> (plástico, goma, madera seca, vidrio).</p>`,
    },
    {
      html: `<h3>Los elementos de un circuito</h3><p>Un <mark>circuito eléctrico</mark> es un camino <b>cerrado</b> por el que circula la corriente. Tiene varios elementos. El <b>generador</b> (una pila, una batería o un enchufe) aporta la energía que impulsa los electrones. Los <b>conductores</b> (cables) unen los elementos. Los <b>receptores</b> transforman la energía eléctrica en otras formas: las bombillas en luz, los motores en movimiento, las resistencias en calor, los timbres en sonido. Los elementos de <b>control</b>, como interruptores y pulsadores, abren o cierran el circuito. Y los de <b>protección</b>, como fusibles y diferenciales, lo cortan si hay peligro. Para dibujarlos se usan <b>símbolos</b> normalizados.</p>${tabla(["Elemento", "Función", "Ejemplo"], [["Generador", "aporta energía", "pila, batería"], ["Conductor", "transporta la corriente", "cable de cobre"], ["Receptor", "transforma la energía", "bombilla, motor"], ["Control", "abre o cierra", "interruptor"], ["Protección", "evita daños", "fusible, diferencial"]])}`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Circuito simple: pila, interruptor y bombilla conectados por cables en un camino cerrado">${BG}
        <path d="M60 40 H 200 V 140 H 60 V 104 M60 76 V 40" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <rect x="48" y="76" width="24" height="28" fill="var(--paper)"/>${pila(56, 90)}${t(34, 94, "pila", { size: 10, anchor: "end" })}
        <rect x="186" y="78" width="28" height="24" fill="var(--paper)"/>${bombilla(200, 90)}${t(184, 120, "bombilla", { size: 10, anchor: "end" })}
        <rect x="112" y="132" width="40" height="16" fill="var(--paper)"/><circle cx="114" cy="140" r="3" fill="var(--ink)"/><circle cx="150" cy="140" r="3" fill="var(--ink)"/><line x1="114" y1="140" x2="146" y2="128" stroke="var(--ink)" stroke-width="2"/>
        ${t(132, 166, "interruptor (abierto)", { size: 10 })}${t(130, 28, "cables", { size: 10, color: "var(--muted)" })}${t(48, 72, "+", { size: 12, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>La intensidad de corriente</h3><p>La <mark>intensidad de corriente (I)</mark> es la cantidad de carga eléctrica que atraviesa una sección del conductor en cada segundo: <b>I = q / t</b>. Se mide en <b>amperios (A)</b>, en honor a André-Marie Ampère. Una corriente de 1 A equivale a que pasen 1 culombio por segundo, unos seis trillones de electrones. Se mide con el <b>amperímetro</b>, que se conecta <b>en serie</b>, es decir, intercalado en el circuito para que toda la corriente pase por él. Una bombilla LED de casa consume unos 0,05 A; un móvil cargándose, alrededor de 1 A; un horno eléctrico, unos 10 A. Una corriente de solo 0,1 A atravesando el corazón puede ser mortal.</p>`,
    },
    {
      html: `<h3>El voltaje</h3><p>Para que los electrones se muevan, hace falta algo que los empuje, igual que el agua de una tubería necesita una diferencia de altura o una bomba. Ese «empuje» es el <mark>voltaje</mark>, también llamado <b>diferencia de potencial</b> o <b>tensión (V)</b>: la energía que el generador da a cada unidad de carga. Se mide en <b>voltios (V)</b>, en honor a Alessandro Volta, inventor de la pila en 1800. Se mide con el <b>voltímetro</b>, que se conecta <b>en paralelo</b>, es decir, con sus dos cables en los extremos del elemento que queremos medir. Una pila normal tiene 1,5 V; una batería de coche, 12 V; los enchufes de casa, 230 V; y las líneas de alta tensión, hasta 400.000 V.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Analogía hidráulica: la bomba es la pila, que da el empuje o voltaje; el caudal de agua es la intensidad; y un estrechamiento de la tubería es la resistencia">${BG}
        <path d="M40 50 H 220 V 140 H 40 Z" fill="none" stroke="var(--water)" stroke-width="12"/>
        <path d="M110 140 h 40" stroke="var(--paper)" stroke-width="12"/><path d="M110 140 h 40" stroke="var(--water)" stroke-width="4"/>
        <circle cx="40" cy="95" r="18" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>${t(40, 100, "V", { size: 13, color: "var(--red)" })}
        ${fl(110, 50, 150, 50, "var(--pen)", 2.5)}${fl(220, 80, 220, 110, "var(--pen)", 2.5)}
        ${t(70, 82, "bomba = pila", { size: 10, anchor: "start", color: "var(--red)" })}${t(130, 34, "caudal = intensidad (I)", { size: 10, color: "var(--pen)" })}${t(130, 168, "estrechamiento = resistencia (R)", { size: 10, color: "#b8860b" })}</svg>`,
    },
    {
      html: `<h3>La resistencia eléctrica</h3><p>Al moverse por un material, los electrones chocan con los átomos y encuentran dificultad para avanzar. Esa oposición al paso de la corriente es la <mark>resistencia eléctrica (R)</mark>. Se mide en <b>ohmios (Ω)</b>, en honor a Georg Ohm. Depende del <b>material</b> (el cobre tiene poca resistencia y el nicrom, mucha), de la <b>longitud</b> del conductor (cuanto más largo, más resistencia), de su <b>grosor</b> (cuanto más fino, más resistencia) y de la <b>temperatura</b>. Al chocar, los electrones transfieren energía a los átomos y el conductor se calienta: es el <b>efecto Joule</b>. Se aprovecha en estufas, tostadoras, secadores y planchas, pero es una pérdida en cables y aparatos electrónicos.</p>`,
    },
    {
      html: `<h3>La ley de Ohm</h3><p>En 1827, Georg Ohm descubrió que, en muchos conductores, la intensidad es <b>directamente proporcional al voltaje</b> e <b>inversamente proporcional a la resistencia</b>. Es la <mark>ley de Ohm</mark>: <b>V = I · R</b>. Despejando se obtienen las otras dos formas: I = V / R y R = V / I. Un truco para recordarla es el <b>triángulo de Ohm</b>, con V arriba e I y R abajo: tapando la magnitud que queremos calcular, las otras dos indican la operación. Por ejemplo, si una bombilla de 6 Ω se conecta a una pila de 12 V, la intensidad que circula es I = 12 / 6 = 2 A. Si duplicamos el voltaje, se duplica la intensidad.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Triángulo de la ley de Ohm: V arriba, I y R abajo; V igual a I por R, I igual a V entre R, R igual a V entre I">${BG}
        <path d="M70 20 L 130 140 H 10 Z" fill="var(--pen)" fill-opacity=".12" stroke="var(--pen)" stroke-width="2.5"/><line x1="40" y1="80" x2="100" y2="80" stroke="var(--pen)" stroke-width="2"/><line x1="70" y1="80" x2="70" y2="140" stroke="var(--pen)" stroke-width="2"/>
        ${t(70, 68, "V", { size: 20, color: "var(--red)" })}${t(48, 120, "I", { size: 18 })}${t(92, 120, "R", { size: 18 })}
        ${t(150, 54, "V = I · R", { size: 14, anchor: "start" })}${t(150, 92, "I = V / R", { size: 14, anchor: "start" })}${t(150, 130, "R = V / I", { size: 14, anchor: "start" })}
        ${t(130, 168, "tapa la que buscas", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "izDKIyCPRWE", titulo: "Aprende la LEY DE OHM - ejercicios", canal: "math2me", vistas: 2543126 },
    },
    {
      html: `<h3>Circuitos en serie</h3><p>En un <mark>circuito en serie</mark>, los receptores se conectan <b>uno detrás de otro</b>, formando un único camino. Sus características son: la <b>intensidad es la misma</b> en todos los elementos, porque solo hay un camino; el <b>voltaje del generador se reparte</b> entre los receptores; y la <b>resistencia total es la suma</b> de las resistencias: <b>R = R₁ + R₂ + R₃…</b> Al añadir más bombillas en serie, la resistencia total aumenta, la intensidad disminuye y las bombillas lucen menos. Su gran inconveniente es que, si un elemento se estropea o se desconecta, el circuito se abre y <b>todos dejan de funcionar</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Circuito en serie: una pila y dos bombillas en un único camino; la misma intensidad pasa por las dos">${BG}
        <path d="M40 50 H 220 V 140 H 40 V 106 M40 74 V 50" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <rect x="28" y="74" width="24" height="32" fill="var(--paper)"/>${pila(36, 90)}
        <rect x="88" y="40" width="28" height="22" fill="var(--paper)"/>${bombilla(102, 50)}<rect x="152" y="40" width="28" height="22" fill="var(--paper)"/>${bombilla(166, 50)}
        ${fl(130, 140, 100, 140, "var(--red)", 2)}${t(130, 160, "un solo camino: I igual en todas", { size: 10, color: "var(--red)" })}
        ${t(134, 28, "R = R₁ + R₂", { size: 12, color: "var(--pen)" })}${t(18, 94, "V", { size: 11, anchor: "end" })}</svg>`,
    },
    {
      html: `<h3>Circuitos en paralelo</h3><p>En un <mark>circuito en paralelo</mark>, cada receptor se conecta en una <b>rama diferente</b>, directamente a los dos polos del generador. Sus características son: el <b>voltaje es el mismo</b> en todos los receptores e igual al del generador; la <b>intensidad total se reparte</b> entre las ramas; y la resistencia total es <b>menor</b> que la de cualquiera de las ramas: 1/R = 1/R₁ + 1/R₂… Cada receptor funciona de forma <b>independiente</b>: si uno se estropea o se apaga, los demás siguen funcionando, y todos lucen con la misma intensidad. Por eso todas las instalaciones de las viviendas son en paralelo. Su inconveniente es que, cuantos más aparatos conectamos, más intensidad total sale del generador, lo que puede sobrecargar la instalación.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Circuito en paralelo: una pila y dos bombillas en ramas distintas; cada una recibe el mismo voltaje y la intensidad se reparte">${BG}
        <path d="M40 40 H 200 M40 140 H 200 M40 40 V 74 M40 106 V 140 M130 40 V 140 M200 40 V 140" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <rect x="28" y="74" width="24" height="32" fill="var(--paper)"/>${pila(36, 90)}
        <rect x="118" y="78" width="24" height="24" fill="var(--paper)"/>${bombilla(130, 90)}<rect x="188" y="78" width="24" height="24" fill="var(--paper)"/>${bombilla(200, 90)}
        ${fl(70, 40, 100, 40, "var(--red)", 2)}${fl(130, 60, 130, 76, "var(--red)", 1.5)}${fl(200, 60, 200, 76, "var(--red)", 1.5)}
        ${t(146, 120, "I₁", { size: 11, anchor: "start", color: "var(--red)" })}${t(216, 120, "I₂", { size: 11, anchor: "start", color: "var(--red)" })}
        ${t(130, 164, "mismo V en cada rama; I se reparte", { size: 10, color: "var(--red)" })}${t(18, 94, "V", { size: 11, anchor: "end" })}</svg>`,
      video: { id: "GUESpG6inds", titulo: "¿Qué son los Circuitos Eléctricos? Y sus tipos: Serie y Paralelo", canal: "A Cierta Ciencia", vistas: 882519 },
    },
    {
      html: `<h3>Potencia y energía eléctrica</h3><p>La <mark>potencia eléctrica (P)</mark> indica la rapidez con la que un aparato consume o transforma energía: <b>P = V · I</b>. Se mide en <b>vatios (W)</b>. Todos los aparatos llevan una etiqueta con su potencia: una bombilla LED, unos 10 W; un portátil, 60 W; un microondas, 800 W; un horno, 2000 W. La <b>energía consumida</b> depende de la potencia y del tiempo que está funcionando: <b>E = P · t</b>. Si la potencia está en kilovatios (kW) y el tiempo en horas, la energía sale en <b>kilovatios hora (kWh)</b>, la unidad de la factura de la luz. Por ejemplo, un horno de 2 kW durante 1,5 horas consume 3 kWh; si el kWh cuesta 0,15 €, cuesta 0,45 €.</p>${tabla(["Aparato", "Potencia", "Uso diario", "Energía"], [["Bombilla LED", "10 W", "5 h", "0,05 kWh"], ["Televisor", "100 W", "3 h", "0,3 kWh"], ["Nevera", "150 W", "24 h*", "1,2 kWh"], ["Horno", "2000 W", "0,5 h", "1 kWh"]])}<p><small>* La nevera solo enciende el motor una parte del tiempo.</small></p>`,
    },
    {
      html: `<h3>La seguridad eléctrica</h3><p>La electricidad es muy útil pero <mark>peligrosa</mark>. Una corriente que atraviesa el cuerpo puede causar quemaduras, contracciones musculares e incluso paradas cardiacas: es la <b>electrocución</b>. El riesgo aumenta mucho con la <b>humedad</b>, porque el agua con sales es conductora. Las viviendas tienen elementos de protección: el <b>interruptor diferencial</b>, que corta la corriente si detecta una fuga, por ejemplo hacia una persona; los <b>interruptores automáticos</b> o magnetotérmicos, que la cortan si hay un cortocircuito o una sobrecarga; y la <b>toma de tierra</b>, que desvía las fugas al suelo. Normas básicas: no tocar aparatos con las manos mojadas, no sobrecargar los enchufes con ladrones, desenchufar tirando de la clavija y no del cable, y no acercarse a cables caídos ni a torres de alta tensión.</p>`,
    },
  ],
  figura: {
    titulo: "Serie frente a paralelo",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Comparación: en serie, un camino, misma intensidad, el voltaje se reparte, la resistencia se suma y si una falla se apagan todas; en paralelo, varios caminos, mismo voltaje, la intensidad se reparte y cada una funciona por separado">
      <rect width="640" height="240" rx="16" fill="var(--paper)"/>
      ${caja(20, 20, 290, 44, "SERIE", "var(--red)", { size: 17 })}${caja(330, 20, 290, 44, "PARALELO", "var(--leaf)", { size: 17 })}
      ${["un solo camino", "misma intensidad", "el voltaje se reparte", "R total = suma", "si una falla, se apagan todas"].map((n, i) => t(165, 94 + i * 28, n, { size: 14, weight: 400 })).join("")}
      ${["varios caminos (ramas)", "mismo voltaje", "la intensidad se reparte", "R total menor", "cada una funciona sola"].map((n, i) => t(475, 94 + i * 28, n, { size: 14, weight: 400 })).join("")}
    </svg>`,
  },
  video: { id: "x99TPYOjiPA", titulo: "¿QUÉ ES LA LEY DE OHM?", canal: "Capacitación Eléctrica Trafomex", vistas: 591631, megusta: 0, busqueda: "ley de Ohm circuitos eléctricos" },
  ejemplos: [
    { enunciado: "Una tostadora de 46 Ω se conecta a 230 V. ¿Qué intensidad circula y qué potencia tiene?",
      pasos: ["Ley de Ohm: I = V / R = 230 / 46 = 5 A.", "Potencia: P = V · I = 230 · 5.", "P = 1150 W."],
      resultado: "5 A y 1150 W." },
    { enunciado: "Dos resistencias de 4 Ω y 8 Ω se conectan en serie a una pila de 6 V. Calcula la intensidad y el voltaje en cada una.",
      pasos: ["R total = 4 + 8 = 12 Ω; I = 6 / 12 = 0,5 A.", "V₁ = 0,5 · 4 = 2 V.", "V₂ = 0,5 · 8 = 4 V; la suma da 6 V."],
      resultado: "0,5 A; 2 V y 4 V." },
    { enunciado: "Un televisor de 120 W está encendido 4 h al día. ¿Cuánta energía consume en 30 días y cuánto cuesta a 0,15 €/kWh?",
      pasos: ["Energía diaria: 0,12 kW · 4 h = 0,48 kWh.", "En 30 días: 0,48 · 30 = 14,4 kWh.", "Coste: 14,4 · 0,15 = 2,16 €."],
      resultado: "14,4 kWh y unos 2,16 €." },
  ],
  errores: [
    "Conectar el amperímetro en paralelo o el voltímetro en serie: es al revés.",
    "Pensar que la corriente «se gasta» en las bombillas: la intensidad que entra es la que sale.",
    "Sumar resistencias en paralelo como si estuvieran en serie.",
    "Confundir potencia (W) con energía (kWh).",
    "Creer que las instalaciones de casa son en serie: son en paralelo.",
  ],
  ejercicios: [
    { q: "¿Qué es la corriente eléctrica y por qué los metales la conducen bien?", sol: "Un flujo ordenado de cargas. Los metales tienen electrones libres que pueden moverse." },
    { q: "Nombra los elementos de un circuito y la función de cada uno.", sol: "Generador (aporta energía), conductores (transportan), receptores (transforman la energía), control (abren o cierran) y protección (evitan daños)." },
    { q: "Escribe la unidad y el aparato de medida de la intensidad y del voltaje. ¿Cómo se conecta cada uno?", sol: "Intensidad: amperio, amperímetro, en serie. Voltaje: voltio, voltímetro, en paralelo." },
    { q: "¿De qué factores depende la resistencia de un cable?", sol: "Del material, la longitud, el grosor y la temperatura." },
    { q: "Calcula la resistencia de una bombilla por la que pasan 0,5 A con 12 V.", sol: "R = 12 / 0,5 = 24 Ω." },
    { q: "¿Qué voltaje hace falta para que pasen 3 A por una resistencia de 20 Ω?", sol: "V = 3 · 20 = 60 V." },
    { q: "Tres bombillas de 10 Ω en serie se conectan a 9 V. Calcula la resistencia total y la intensidad.", sol: "R = 30 Ω; I = 9 / 30 = 0,3 A." },
    { q: "Explica por qué las lámparas de casa se conectan en paralelo.", sol: "Para que todas reciban los 230 V y funcionen de forma independiente: si una se apaga o se estropea, las demás siguen." },
    { q: "Un secador de 1800 W funciona 10 min al día. ¿Cuánta energía consume al mes (30 días)?", sol: "1,8 kW · (10/60) h = 0,3 kWh al día; 9 kWh al mes." },
    { q: "Cita cuatro normas de seguridad eléctrica.", sol: "No tocar aparatos con las manos mojadas, no sobrecargar enchufes, desenchufar tirando de la clavija y no acercarse a cables caídos." },
  ],
  quiz: [
    { q: "La intensidad se mide en…", o: ["voltios", "amperios", "ohmios"], a: 1, e: "Amperios." },
    { q: "El voltímetro se conecta…", o: ["en serie", "en paralelo", "sin conectar"], a: 1, e: "En paralelo." },
    { q: "La resistencia se mide en…", o: ["ohmios", "vatios", "julios"], a: 0, e: "Ohmios." },
    { q: "La ley de Ohm es…", o: ["V = I · R", "P = m · g", "I = V · R"], a: 0, e: "V = I · R." },
    { q: "Con 12 V y 4 Ω, la intensidad es…", o: ["48 A", "3 A", "0,33 A"], a: 1, e: "12 / 4 = 3 A." },
    { q: "En serie, la intensidad es…", o: ["la misma en todos", "distinta en cada uno", "cero"], a: 0, e: "La misma." },
    { q: "En paralelo, el voltaje es…", o: ["el mismo en todas las ramas", "se reparte", "cero"], a: 0, e: "El mismo." },
    { q: "Dos resistencias de 5 Ω en serie dan…", o: ["2,5 Ω", "10 Ω", "25 Ω"], a: 1, e: "Se suman: 10 Ω." },
    { q: "La factura de la luz se cobra en…", o: ["kW", "kWh", "V"], a: 1, e: "kWh." },
    { q: "El elemento que corta la corriente si hay una fuga es…", o: ["el diferencial", "la bombilla", "el cable"], a: 0, e: "El diferencial." },
  ],
  examen: [
    { q: "El calentamiento de un conductor por la corriente es el efecto…", o: ["Joule", "Ohm", "Volta"], a: 0, e: "Efecto Joule." },
    { q: "La potencia eléctrica se calcula con…", o: ["P = V · I", "P = V / I", "P = I / V"], a: 0, e: "P = V · I." },
    { q: "Si en serie una bombilla se funde…", o: ["las demás siguen", "se apagan todas", "lucen más"], a: 1, e: "Se abre el circuito." },
  ],
  feynman: ["Qué son la intensidad, el voltaje y la resistencia, con la analogía del agua", "Cómo se usa la ley de Ohm", "Por qué en casa los aparatos van en paralelo"],
  mapa: mapa("ELECTRICIDAD", "var(--eso)", [
    ["Magnitudes", "I (A) · V (V) · R (Ω)", "var(--red)"],
    ["Ley de Ohm", "V = I · R", "var(--pen)"],
    ["Circuitos", "serie · paralelo · símbolos", "#b8860b"],
    ["Energía", "P = V·I · E = P·t · seguridad", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Corriente eléctrica", "Flujo ordenado de cargas por un conductor."],
    ["Intensidad", "Carga por segundo; amperios; amperímetro en serie."],
    ["Voltaje", "Energía por unidad de carga; voltios; voltímetro en paralelo."],
    ["Resistencia", "Oposición al paso de la corriente; ohmios."],
    ["Ley de Ohm", "V = I · R."],
    ["Serie", "Un camino; misma I; resistencias se suman."],
    ["Paralelo", "Varias ramas; mismo V; funcionan por separado."],
    ["Potencia", "P = V · I; vatios. Energía = P · t (kWh)."],
  ],
  familias: ["Leed la potencia de cinco aparatos de casa y calculad cuánto cuesta usarlos una hora.", "Revisad juntos el cuadro eléctrico: localizad el diferencial y los automáticos.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "La energía: electricidad, magnitudes eléctricas, ley de Ohm, circuitos en serie y en paralelo, potencia, consumo y seguridad eléctrica (RD 217/2022, Física y Química 2º y 3º).",
    ideas: ["Montar circuitos en serie y en paralelo con pilas, portalámparas y polímetros.", "Simulador PhET de construcción de circuitos.", "Auditoría energética del aula con la potencia de los aparatos."],
  },
  fuentes: [RD, wiki("Ley de Ohm", "Ley_de_Ohm"), wiki("Circuito eléctrico", "Circuito_el%C3%A9ctrico")],
  revisado: "2026-11-12",
};
