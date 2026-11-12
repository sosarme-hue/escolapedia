// Tecnología y Digitalización 2º ESO: la electricidad, magnitudes y ley de Ohm. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV, pila, bombilla, resis } = require("./_eso2a");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "La electricidad: magnitudes y ley de Ohm",
  minutos: 55,
  objetivos: ["Explicar qué es la corriente eléctrica a partir de la estructura del átomo", "Distinguir materiales conductores, aislantes y semiconductores", "Definir voltaje, intensidad y resistencia, sus unidades y cómo se miden", "Aplicar la ley de Ohm y calcular la potencia y la energía consumida"],
  claves: ["electrón", "corriente eléctrica", "conductor", "aislante", "voltaje", "intensidad", "resistencia", "ley de Ohm", "potencia", "kilovatio hora", "polímetro"],
  pregunta: {
    texto: "Si los electrones de un cable se mueven muy despacio, apenas unos milímetros por segundo, ¿por qué la luz se enciende al instante cuando pulsas el interruptor?",
    respuesta: "Porque el cable ya está <b>lleno de electrones</b>. Al cerrar el circuito, todos empiezan a moverse a la vez, como el agua de una manguera llena: en cuanto abres el grifo, sale agua por la otra punta aunque el agua del grifo tarde en llegar. Lo que viaja casi a la velocidad de la luz es el «empujón», la energía, no cada electrón.",
  },
  bloques: [
    {
      html: `<h3>Las cargas eléctricas</h3><p>Toda la materia está formada por átomos, que tienen un núcleo con <b>protones</b> (carga positiva) y neutrones, rodeado de <b>electrones</b> (carga negativa). Normalmente un átomo tiene tantos protones como electrones y es neutro. Pero los electrones más externos se pueden mover de un átomo a otro. Si un cuerpo gana electrones, queda con <b>carga negativa</b>; si los pierde, con <b>carga positiva</b>. Las cargas del mismo signo se repelen y las de signo contrario se atraen. La <mark>electricidad</mark> es el conjunto de fenómenos producidos por las cargas eléctricas. Cuando las cargas están quietas hablamos de <b>electricidad estática</b>, como la que hace que se te pegue el pelo al globo o que sientas un calambre al tocar la puerta del coche. Cuando las cargas se mueven, hay <b>corriente eléctrica</b>.</p>`,
    },
    {
      html: `<h3>La corriente eléctrica</h3><p>La <mark>corriente eléctrica</mark> es el <b>movimiento ordenado de electrones</b> a través de un material conductor. Para que haya corriente hace falta un <b>generador</b>, como una pila, una batería o la red eléctrica, que actúa como una bomba: empuja los electrones de un polo a otro a través de un camino cerrado, el circuito. Los electrones salen del polo negativo y van hacia el positivo. Sin embargo, por un acuerdo histórico de antes de que se descubriera el electrón, en los esquemas se dibuja el <b>sentido convencional</b> de la corriente al revés: del polo positivo al negativo. Hay dos tipos de corriente. La <b>corriente continua</b> (CC) circula siempre en el mismo sentido: la de las pilas, baterías y paneles solares. La <b>corriente alterna</b> (CA) cambia de sentido muchas veces por segundo (50 veces en Europa): es la de los enchufes de casa.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Electrones moviéndose por un cable desde el polo negativo de una pila hacia el positivo; el sentido convencional de la corriente se dibuja al revés">${BG}
        <rect x="20" y="70" width="220" height="30" rx="15" fill="#e8a77a" stroke="#b5653a" stroke-width="2"/>
        ${[40, 70, 100, 130, 160, 190, 220].map((x) => `<circle cx="${x}" cy="85" r="6" fill="var(--pen)"/>${t(x, 89, "−", { size: 10, color: "#fff" })}`).join("")}
        ${fl(60, 54, 200, 54, "var(--pen)", 2.5)}${t(130, 44, "electrones: de − a +", { size: 10, color: "var(--pen)" })}
        ${fl(200, 120, 60, 120, "var(--red)", 2.5)}${t(130, 140, "sentido convencional: de + a −", { size: 10, color: "var(--red)" })}
        ${t(14, 90, "−", { size: 16, anchor: "start" })}${t(246, 90, "+", { size: 16, anchor: "end" })}</svg>`,
      video: { id: "pgxoB9g4s9o", titulo: "¿Qué es el voltaje?", canal: "Charly Labs", vistas: 1247991 },
    },
    {
      html: `<h3>Conductores, aislantes y semiconductores</h3><p>No todos los materiales dejan pasar la corriente igual. Los <mark>conductores</mark> la dejan pasar con facilidad porque tienen electrones libres que se mueven sin dificultad: son los <b>metales</b>, como el cobre, el aluminio, la plata o el oro, y también el grafito, el agua con sales y el cuerpo humano. Por eso los cables son de cobre. Los <mark>aislantes</mark> no dejan pasar la corriente porque sus electrones están muy sujetos: el plástico, la goma, la madera seca, el vidrio, la cerámica o el aire seco. Por eso los cables se recubren de plástico y los enchufes son de plástico o porcelana. Los <mark>semiconductores</mark>, como el <b>silicio</b> y el germanio, se comportan como aislantes o como conductores según las condiciones (la temperatura, la luz o pequeñas cantidades de otros elementos). Con ellos se fabrican los diodos, los LED, los transistores y los chips de todos los aparatos electrónicos.</p>`,
    },
    {
      html: `<h3>El voltaje o tensión</h3><p>Para que los electrones se muevan, el generador tiene que darles energía, como una bomba que eleva agua para que luego baje por una tubería. El <mark>voltaje</mark>, también llamado <b>tensión</b> o diferencia de potencial, es la <b>energía que el generador da a cada carga</b> para que recorra el circuito; es el «empuje» de la corriente. Se representa con la letra <b>V</b> y se mide en <b>voltios (V)</b>, en honor a Alessandro Volta, que inventó la pila en 1800. Se mide con el <b>voltímetro</b>, que se conecta en <b>paralelo</b>, es decir, con sus dos puntas en los dos extremos del elemento que queremos medir. Una pila normal tiene 1,5 V; la batería de un móvil, unos 3,7 V; la de un coche, 12 V; los enchufes de casa, 230 V; y las líneas de alta tensión, cientos de miles de voltios.</p>${tabla(["Generador", "Voltaje"], [["Pila AA o AAA", "1,5 V"], ["Pila de petaca", "4,5 V"], ["Batería de móvil", "3,7 V"], ["Batería de coche", "12 V"], ["Enchufe de casa", "230 V"], ["Línea de alta tensión", "hasta 400 000 V"]])}`,
    },
    {
      html: `<h3>La intensidad de corriente</h3><p>La <mark>intensidad de corriente</mark> es la <b>cantidad de carga que pasa por un punto del circuito en cada segundo</b>, es decir, cuánta corriente circula. Si comparamos la corriente con el agua de un río, la intensidad sería el caudal: los litros que pasan cada segundo. Se representa con la letra <b>I</b> y se mide en <b>amperios (A)</b>, en honor a André-Marie Ampère. Para corrientes pequeñas se usa el <b>miliamperio</b> (1 mA = 0,001 A). Se mide con el <b>amperímetro</b>, que se conecta en <b>serie</b>: hay que abrir el circuito e intercalarlo para que toda la corriente pase a través de él. Un LED consume unos 20 mA; una bombilla de casa, unos 0,05 A; un horno eléctrico, unos 10 A. La intensidad es lo que hace peligrosa la electricidad para el cuerpo humano: a partir de unos 30 mA puede ser mortal.</p>`,
    },
    {
      html: `<h3>La resistencia eléctrica</h3><p>Todos los materiales, incluso los buenos conductores, ponen alguna dificultad al paso de la corriente. La <mark>resistencia eléctrica</mark> es la <b>oposición que ofrece un material al paso de la corriente</b>. Se representa con la letra <b>R</b> y se mide en <b>ohmios (Ω)</b>, en honor a Georg Simon Ohm. Se mide con el <b>óhmetro</b>, con el circuito desconectado. La resistencia de un cable depende de tres cosas: del <b>material</b> (el cobre tiene muy poca; el nicrom, mucha), de la <b>longitud</b> (más largo, más resistencia) y de la <b>sección o grosor</b> (más fino, más resistencia). Por eso los cables que llevan mucha corriente, como los de la cocina o el horno, son más gruesos. En los circuitos electrónicos se usan unos componentes llamados <b>resistencias</b> o resistores, con un valor fijo, para limitar la corriente y proteger otros componentes, por ejemplo un LED.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La resistencia de un cable aumenta si es más largo o más fino; un cable corto y grueso tiene poca resistencia">${BG}
        <rect x="20" y="30" width="80" height="20" rx="10" fill="#e8a77a" stroke="#b5653a" stroke-width="2"/>${t(112, 44, "corto y grueso: R baja", { size: 10, color: "var(--leaf)", anchor: "start" })}
        <rect x="20" y="78" width="210" height="8" rx="4" fill="#e8a77a" stroke="#b5653a" stroke-width="1.5"/>${t(130, 106, "largo y fino: R alta", { size: 10, color: "var(--red)" })}
        ${resis(70, 140)}<path d="M20 140 H 55 M85 140 H 120" stroke="var(--ink)" stroke-width="2"/>${t(186, 144, "símbolo de resistencia", { size: 10 })}</svg>`,
    },
    {
      html: `<h3>La ley de Ohm</h3><p>En 1827, Georg Simon Ohm descubrió la relación entre las tres magnitudes. La <mark>ley de Ohm</mark> dice que <b>la intensidad que circula por un circuito es directamente proporcional al voltaje e inversamente proporcional a la resistencia</b>: <b>I = V / R</b>. Es decir, si aumentamos el voltaje, circula más corriente; si aumentamos la resistencia, circula menos. Despejando, también se puede calcular el voltaje, <b>V = I · R</b>, o la resistencia, <b>R = V / I</b>. Un truco para recordarlo es el triángulo de Ohm: V arriba, I y R abajo; tapas la que buscas y ves si hay que multiplicar o dividir. Por ejemplo, si una pila de 9 V alimenta una resistencia de 450 Ω, la intensidad es 9 / 450 = 0,02 A = 20 mA. Para aplicarla, las unidades deben ser voltios, amperios y ohmios.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Triángulo de la ley de Ohm: V arriba, I y R abajo; V igual a I por R, I igual a V entre R, R igual a V entre I">${BG}
        <path d="M70 20 L 128 140 L 12 140 Z" fill="#e6a100" fill-opacity=".15" stroke="#b8860b" stroke-width="2.5" stroke-linejoin="round"/><line x1="40" y1="90" x2="100" y2="90" stroke="#b8860b" stroke-width="2"/><line x1="70" y1="90" x2="70" y2="140" stroke="#b8860b" stroke-width="2"/>
        ${t(70, 76, "V", { size: 22, font: D })}${t(48, 126, "I", { size: 20, font: D })}${t(92, 126, "R", { size: 20, font: D })}
        ${t(196, 54, "V = I · R", { size: 15, color: "var(--red)" })}${t(196, 90, "I = V / R", { size: 15, color: "var(--red)" })}${t(196, 126, "R = V / I", { size: 15, color: "var(--red)" })}
        ${t(130, 168, "voltios · amperios · ohmios", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "m7HY1Or01S0", titulo: "La Ley de Ohm", canal: "Charly Labs", vistas: 879014 },
    },
    {
      html: `<h3>Potencia y energía eléctrica</h3><p>La <mark>potencia eléctrica</mark> es la <b>rapidez con la que un aparato consume o transforma la energía</b>. Se calcula como <b>P = V · I</b> y se mide en <b>vatios (W)</b>; también se usa el kilovatio (1 kW = 1000 W). Todos los electrodomésticos llevan una etiqueta con su potencia: una bombilla LED, unos 8 W; un portátil, unos 60 W; un secador de pelo, unos 2000 W. La <mark>energía consumida</mark> depende de la potencia y del tiempo que está funcionando: <b>E = P · t</b>. En el recibo de la luz se mide en <b>kilovatios hora (kWh)</b>: la energía que consume un aparato de 1 kW durante 1 hora. Por ejemplo, un radiador de 2 kW encendido 3 horas consume 2 · 3 = 6 kWh. Si el kWh cuesta 0,15 €, esas 3 horas cuestan 0,90 €. Conocer la potencia de los aparatos ayuda a ahorrar.</p>`,
    },
    {
      html: `<h3>Medir con el polímetro y seguridad eléctrica</h3><p>El <mark>polímetro</mark> o multímetro es un instrumento que reúne voltímetro, amperímetro y óhmetro. Tiene un selector giratorio para elegir la magnitud y la escala, una pantalla y dos cables (negro al borne COM y rojo al borne V/Ω o al de A). Para medir voltaje se conecta en <b>paralelo</b>; para medir intensidad, en <b>serie</b>; y para medir resistencia, con el circuito <b>sin corriente</b>. La electricidad es muy útil, pero <b>peligrosa</b>: una descarga puede producir quemaduras, paradas cardíacas e incendios. Normas básicas: no toques enchufes ni aparatos con las manos mojadas; no metas objetos en los enchufes; no tires del cable para desenchufar; no sobrecargues un enchufe con muchas regletas; aléjate de cables caídos y de torres de alta tensión; y antes de manipular cualquier instalación, corta la corriente en el cuadro eléctrico. En el taller trabajamos siempre con pilas de pocos voltios.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Polímetro: el voltímetro se conecta en paralelo con la bombilla y el amperímetro se conecta en serie en el circuito">${BG}
        <path d="M30 40 H 200 V 130 H 30 Z" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="104" y="120" width="16" height="20" fill="var(--paper)"/>${pila(108, 130)}<path d="M30 130 H 108 M116 130 H 200" stroke="var(--ink)" stroke-width="2"/>
        ${bombilla(200, 85, 12)}
        <circle cx="115" cy="40" r="13" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>${t(115, 45, "A", { size: 13, color: "var(--red)" })}
        <path d="M200 60 H 236 V 110 H 200" fill="none" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 3"/><circle cx="236" cy="85" r="13" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>${t(236, 90, "V", { size: 13, color: "var(--pen)" })}
        ${t(115, 18, "amperímetro: en serie", { size: 10, color: "var(--red)" })}${t(150, 160, "voltímetro: en paralelo", { size: 10, color: "var(--pen)" })}</svg>`,
    },
  ],
  figura: {
    titulo: "Las tres magnitudes eléctricas",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Voltaje, en voltios, se mide con voltímetro en paralelo; intensidad, en amperios, con amperímetro en serie; resistencia, en ohmios, con óhmetro; ley de Ohm: V igual a I por R">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Voltaje (V)", "voltios", "voltímetro en paralelo", "var(--pen)"], ["Intensidad (I)", "amperios", "amperímetro en serie", "var(--red)"], ["Resistencia (R)", "ohmios (Ω)", "óhmetro sin corriente", "#b8860b"]].map(([a, b, c, col], i) => { const x = 20 + i * 206; return `<rect x="${x}" y="24" width="190" height="140" rx="14" fill="var(--card)" stroke="${col}" stroke-width="2.5"/>${t(x + 95, 62, a, { size: 16, color: col, font: D })}${t(x + 95, 102, b, { size: 15 })}${t(x + 95, 138, c, { size: 12, weight: 400 })}`; }).join("")}
      ${t(320, 204, "Ley de Ohm: V = I · R", { size: 20, color: "var(--leaf)", font: D })}
    </svg>`,
  },
  video: { id: "x99TPYOjiPA", titulo: "¿Qué es la ley de Ohm?", canal: "Capacitación Eléctrica Trafomex", vistas: 591642, megusta: 10448, busqueda: "ley de Ohm voltaje intensidad resistencia" },
  ejemplos: [
    { enunciado: "Una bombilla de 30 Ω se conecta a una pila de 4,5 V. ¿Qué intensidad circula?",
      pasos: ["Ley de Ohm: I = V / R.", "I = 4,5 / 30.", "I = 0,15 A = 150 mA."],
      resultado: "0,15 A." },
    { enunciado: "Por una resistencia circulan 0,2 A cuando se conecta a 12 V. ¿Cuánto vale la resistencia?",
      pasos: ["R = V / I.", "R = 12 / 0,2.", "R = 60 Ω."],
      resultado: "60 Ω." },
    { enunciado: "Un secador de 2000 W se usa 15 minutos al día. ¿Cuánta energía consume en 30 días? ¿Cuánto cuesta si el kWh vale 0,15 €?",
      pasos: ["P = 2 kW; t = 0,25 h al día · 30 días = 7,5 h.", "E = P · t = 2 · 7,5 = 15 kWh.", "Coste: 15 · 0,15 = 2,25 €."],
      resultado: "15 kWh, 2,25 €." },
  ],
  errores: [
    "Confundir voltaje e intensidad: el voltaje es el empuje y la intensidad, la cantidad de corriente.",
    "Conectar el amperímetro en paralelo: se conecta en serie.",
    "Usar mA en la ley de Ohm sin pasarlos a amperios.",
    "Pensar que un cable más largo tiene menos resistencia: tiene más.",
    "Confundir potencia (W) y energía (kWh): el recibo cobra energía.",
  ],
  ejercicios: [
    { q: "¿Qué es la corriente eléctrica?", sol: "El movimiento ordenado de electrones a través de un conductor." },
    { q: "¿Qué diferencia hay entre corriente continua y alterna? Pon un ejemplo de cada.", sol: "La continua circula siempre en el mismo sentido (pilas); la alterna cambia de sentido muchas veces por segundo (enchufes)." },
    { q: "Clasifica en conductores o aislantes: cobre, goma, grafito, vidrio, agua salada, madera seca.", sol: "Conductores: cobre, grafito, agua salada. Aislantes: goma, vidrio, madera seca." },
    { q: "Completa: el voltaje se mide en … con el …, conectado en …", sol: "Voltios, voltímetro, paralelo." },
    { q: "Completa: la intensidad se mide en … con el …, conectado en …", sol: "Amperios, amperímetro, serie." },
    { q: "¿De qué tres factores depende la resistencia de un cable?", sol: "Del material, de la longitud y de la sección (grosor)." },
    { q: "Una resistencia de 100 Ω se conecta a 9 V. Calcula la intensidad.", sol: "I = 9 / 100 = 0,09 A = 90 mA." },
    { q: "¿Qué voltaje hace falta para que pasen 2 A por una resistencia de 6 Ω?", sol: "V = 2 · 6 = 12 V." },
    { q: "Calcula la potencia de una bombilla que funciona a 230 V y consume 0,1 A.", sol: "P = 230 · 0,1 = 23 W." },
    { q: "Un frigorífico de 150 W está encendido 24 h. ¿Cuántos kWh consume al día?", sol: "E = 0,15 kW · 24 h = 3,6 kWh." },
  ],
  quiz: [
    { q: "Los electrones tienen carga…", o: ["positiva", "negativa", "neutra"], a: 1, e: "Negativa." },
    { q: "La corriente de los enchufes de casa es…", o: ["continua", "alterna", "estática"], a: 1, e: "Alterna, 230 V y 50 Hz." },
    { q: "Un buen conductor es…", o: ["el plástico", "el cobre", "la madera"], a: 1, e: "El cobre." },
    { q: "El silicio es un…", o: ["conductor", "aislante", "semiconductor"], a: 2, e: "Semiconductor." },
    { q: "El voltaje se mide en…", o: ["amperios", "voltios", "ohmios"], a: 1, e: "Voltios." },
    { q: "El amperímetro se conecta en…", o: ["serie", "paralelo", "cualquier forma"], a: 0, e: "Serie." },
    { q: "La resistencia se mide en…", o: ["ohmios", "vatios", "julios"], a: 0, e: "Ohmios (Ω)." },
    { q: "La ley de Ohm es…", o: ["V = I · R", "P = V / I", "R = V · I"], a: 0, e: "V = I · R." },
    { q: "Si 12 V se aplican a 4 Ω, la intensidad es…", o: ["48 A", "3 A", "0,33 A"], a: 1, e: "12 / 4 = 3 A." },
    { q: "La potencia se mide en…", o: ["vatios", "kWh", "voltios"], a: 0, e: "Vatios." },
  ],
  examen: [
    { q: "Si se duplica el voltaje con la misma resistencia, la intensidad…", o: ["se duplica", "se reduce a la mitad", "no cambia"], a: 0, e: "Es proporcional al voltaje." },
    { q: "El recibo de la luz cobra la energía en…", o: ["W", "kWh", "V"], a: 1, e: "Kilovatios hora." },
    { q: "Un cable más fino tiene…", o: ["menos resistencia", "más resistencia", "la misma"], a: 1, e: "Más resistencia." },
  ],
  feynman: ["Qué es la corriente eléctrica y por qué hace falta un generador", "Qué miden el voltaje, la intensidad y la resistencia", "Cómo se usa la ley de Ohm para calcular la intensidad"],
  mapa: mapa("ELECTRICIDAD", "var(--eso)", [
    ["Corriente", "electrones · continua · alterna", "var(--pen)"],
    ["Materiales", "conductores · aislantes", "#b8860b"],
    ["Magnitudes", "V · I · R · polímetro", "var(--red)"],
    ["Ley de Ohm", "V = I · R · P = V · I", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Corriente eléctrica", "Movimiento ordenado de electrones por un conductor."],
    ["Conductor", "Material que deja pasar la corriente: metales."],
    ["Aislante", "Material que no deja pasar la corriente: plástico, goma."],
    ["Voltaje (V)", "Energía que da el generador a cada carga; en voltios."],
    ["Intensidad (I)", "Carga que pasa por segundo; en amperios."],
    ["Resistencia (R)", "Oposición al paso de la corriente; en ohmios."],
    ["Ley de Ohm", "V = I · R."],
    ["Potencia", "P = V · I; en vatios."],
  ],
  familias: ["Buscad la etiqueta de potencia de varios electrodomésticos y ordenadlos de mayor a menor.", "Leed juntos el recibo de la luz y localizad los kWh y el precio.", "Repasad en casa las normas de seguridad eléctrica (manos secas, no sobrecargar enchufes)."],
  profesores: {
    saberes: "Electricidad: corriente eléctrica, conductores y aislantes, magnitudes eléctricas básicas, ley de Ohm, potencia y energía, medida con polímetro y seguridad (RD 217/2022, Tecnología y Digitalización, bloque A).",
    ideas: ["Medidas con polímetro de voltajes de pilas y de intensidades en circuitos con distintas resistencias.", "Comprobación experimental de la ley de Ohm con gráfica V–I.", "Cálculo del gasto eléctrico de la familia con las potencias de los aparatos."],
  },
  fuentes: [RD, wiki("Ley de Ohm", "Ley_de_Ohm"), wiki("Corriente eléctrica", "Corriente_eléctrica")],
  revisado: REV,
};
