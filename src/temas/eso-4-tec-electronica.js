// Tecnología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

// Puerta lógica simple: rectángulo con nombre y tabla.
const tabla = (x, y, nombre, filas, c) => `<text x="${x + 40}" y="${y}" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" ${F}>${nombre}</text>
  <g ${F} font-size="11" text-anchor="middle"><text x="${x + 14}" y="${y + 18}" fill="var(--muted)">A</text><text x="${x + 40}" y="${y + 18}" fill="var(--muted)">B</text><text x="${x + 66}" y="${y + 18}" font-weight="700" fill="${c}">S</text>
  ${filas.map(([a, b, s], i) => `<text x="${x + 14}" y="${y + 34 + i * 15}" fill="var(--ink)">${a}</text><text x="${x + 40}" y="${y + 34 + i * 15}" fill="var(--ink)">${b}</text><text x="${x + 66}" y="${y + 34 + i * 15}" font-weight="700" fill="${c}">${s}</text>`).join("")}</g>`;

module.exports = {
  materia: "Tecnología",
  curso: "4-eso",
  titulo: "Electrónica analógica y digital",
  minutos: 40,
  objetivos: ["Reconocer los componentes electrónicos básicos y su símbolo", "Calcular circuitos sencillos con la ley de Ohm", "Diferenciar señales analógicas y digitales y usar puertas lógicas"],
  claves: ["resistencia", "diodo LED", "transistor", "condensador", "señal digital", "puerta lógica"],
  pregunta: {
    texto: "Un móvil tiene más de 10 000 millones de transistores. ¿Qué hace un componente tan pequeño para que haga falta tantos?",
    respuesta: "Un transistor funciona como un <mark>interruptor controlado por electricidad</mark>: deja pasar la corriente o no. Combinando miles de millones se forman <b>puertas lógicas</b> que hacen sumas, guardan datos y deciden. Todo lo digital se reduce a encender y apagar: <b>1 y 0</b>.",
  },
  bloques: [
    {
      html: `<h3>Magnitudes y ley de Ohm</h3><p>En un circuito, la <b>tensión</b> o voltaje (V, en voltios) es el «empuje» que da la pila; la <b>intensidad</b> (I, en amperios) es la cantidad de corriente que circula; y la <b>resistencia</b> (R, en ohmios, Ω) es la oposición al paso de la corriente. Se relacionan con la <mark>ley de Ohm</mark>:</p>
      <div class="formula"><span>V = I · R</span></div>
      <p>Con una pila de 9 V y una resistencia de 450 Ω circulan I = 9 / 450 = <b>0,02 A = 20 mA</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Triángulo de la ley de Ohm con V arriba e I por R abajo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 24 L 214 152 H 46 Z" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/><path d="M84 100 H 176 M130 100 V 152" stroke="var(--pen)" stroke-width="2.5"/>
        <g ${D} font-weight="700" text-anchor="middle"><text x="130" y="84" font-size="28" fill="var(--red)">V</text><text x="100" y="138" font-size="26" fill="var(--leaf)">I</text><text x="160" y="138" font-size="26" fill="var(--sun)">R</text></g>
        <text x="130" y="172" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>tapa la que buscas</text>
      </svg>`,
    },
    {
      html: `<h3>Componentes pasivos</h3><p>Las <b>resistencias</b> limitan la corriente; su valor se lee con un <b>código de colores</b>. Hay resistencias variables: el <b>potenciómetro</b> (se gira a mano), la <b>LDR</b> (cambia con la luz) y el <b>termistor</b> (cambia con la temperatura). Los <b>condensadores</b> <mark>almacenan carga</mark> y la sueltan después, útiles para temporizar. Se pueden conectar en <b>serie</b> (se suman: R = R₁ + R₂) o en <b>paralelo</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Símbolos de resistencia, potenciómetro, LDR y condensador">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g stroke="var(--ink)" stroke-width="2.5" fill="none">
          <path d="M20 50 H 44 M84 50 H 108"/><rect x="44" y="40" width="40" height="20" fill="var(--card)"/>
          <path d="M150 50 H 174 M214 50 H 238"/><rect x="174" y="40" width="40" height="20" fill="var(--card)"/><path d="M180 70 L 210 28"/><path d="M204 28 H 210 V 34"/>
          <path d="M20 128 H 44 M84 128 H 108"/><rect x="44" y="118" width="40" height="20" fill="var(--card)"/><circle cx="64" cy="128" r="22"/><path d="M40 96 L 50 106 M50 92 L 60 102" stroke="var(--sun)"/>
          <path d="M150 128 H 190 M198 128 H 238 M190 112 V 144 M198 112 V 144" stroke-width="3"/>
        </g>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink)"><text x="64" y="80">resistencia</text><text x="194" y="84">potenciómetro</text><text x="64" y="168">LDR</text><text x="194" y="168">condensador</text></g>
      </svg>`,
    },
    {
      html: `<h3>Diodos y transistores</h3><p>El <b>diodo</b> solo deja pasar la corriente <mark>en un sentido</mark>, como una válvula. El <b>LED</b> es un diodo que emite luz: necesita una resistencia en serie para no quemarse. El <b>transistor</b> tiene tres patas: base, colector y emisor. Una corriente pequeña en la base controla una corriente grande entre colector y emisor: funciona como <mark>amplificador</mark> o como <mark>interruptor</mark>. Con él, un sensor débil puede encender un motor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Símbolo del diodo LED con flechas de luz y símbolo del transistor con base, colector y emisor">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g stroke="var(--ink)" stroke-width="2.5" fill="none"><path d="M14 90 H 50 M80 90 H 110"/><path d="M50 72 V 108 L 80 90 Z" fill="var(--red)" fill-opacity=".3"/><path d="M80 72 V 108"/><path d="M70 64 L 84 50 M80 68 L 94 54" stroke="var(--red)"/></g>
        <g stroke="var(--ink)" stroke-width="2.5" fill="none"><circle cx="190" cy="90" r="34"/><path d="M150 90 H 180 M180 70 V 110 M180 80 L 206 62 V 40 M180 100 L 206 118 V 140"/><path d="M196 112 L 206 118 L 200 108" fill="var(--ink)"/></g>
        <g ${F} font-size="11" font-weight="700"><text x="44" y="134" fill="var(--red)">LED</text><text x="144" y="84" fill="var(--ink)">B</text><text x="212" y="44" fill="var(--ink)">C</text><text x="212" y="142" fill="var(--ink)">E</text><text x="166" y="170" fill="var(--pen)">transistor NPN</text></g>
      </svg>`,
    },
    {
      html: `<h3>Señales analógicas y digitales</h3><p>Una señal <b>analógica</b> puede tomar <mark>infinitos valores</mark> de forma continua, como la temperatura o el volumen de un vinilo. Una señal <b>digital</b> solo toma <mark>dos valores</mark>: 0 (apagado, 0 V) y 1 (encendido, 5 V). Las señales digitales son más fáciles de guardar, copiar y transmitir sin errores. Un <b>conversor</b> transforma una en otra: el micrófono del móvil capta sonido analógico y lo digitaliza.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Señal analógica ondulada continua y señal digital cuadrada de ceros y unos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 60 ${Array.from({ length: 116 }, (_, i) => `L ${14 + i * 2} ${(60 - 24 * Math.sin(i * 0.11) * Math.cos(i * 0.03)).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="3"/>
        <path d="M14 150 H 44 V 116 H 84 V 150 H 104 V 116 H 164 V 150 H 194 V 116 H 246" fill="none" stroke="var(--red)" stroke-width="3"/>
        <g ${F} font-size="11" font-weight="700"><text x="14" y="100" fill="var(--pen)">analógica: valores continuos</text><text x="14" y="172" fill="var(--red)">digital: solo 0 y 1</text></g>
        <g ${F} font-size="10" fill="var(--muted)"><text x="24" y="146">0</text><text x="60" y="112">1</text><text x="90" y="146">0</text><text x="130" y="112">1</text></g>
      </svg>`,
    },
    {
      html: `<h3>Puertas lógicas</h3><p>Los circuitos digitales usan el <b>álgebra de Boole</b> y se construyen con <b>puertas lógicas</b>. La puerta <b>NOT</b> invierte: si entra 1, sale 0. La <b>AND</b> (Y) da 1 solo si <mark>todas</mark> las entradas son 1, como dos interruptores en serie. La <b>OR</b> (O) da 1 si <mark>alguna</mark> entrada es 1, como dos interruptores en paralelo. Su comportamiento se resume en una <b>tabla de verdad</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tablas de verdad de las puertas AND y OR">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${tabla(30, 30, "AND", [[0, 0, 0], [0, 1, 0], [1, 0, 0], [1, 1, 1]], "var(--pen)")}
        ${tabla(150, 30, "OR", [[0, 0, 0], [0, 1, 1], [1, 0, 1], [1, 1, 1]], "var(--leaf)")}
        <text x="130" y="160" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>AND = serie · OR = paralelo</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Componentes básicos y su función",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Resistencia, condensador, diodo LED y transistor con su función">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Resistencia", "limita la", "corriente", "Ω", "var(--sun)"], ["Condensador", "almacena carga", "y temporiza", "µF", "var(--inf)"], ["Diodo / LED", "paso en un", "solo sentido · luz", "→|", "var(--red)"], ["Transistor", "amplifica o", "conmuta", "B C E", "var(--pen)"]]
        .map(([n, a, b, s, c], i) => `<rect x="${16 + i * 154}" y="24" width="146" height="172" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="62" text-anchor="middle" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${89 + i * 154}" y="108" text-anchor="middle" font-size="24" font-weight="700" fill="var(--ink)" ${F}>${s}</text>
          <text x="${89 + i * 154}" y="146" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${a}</text>
          <text x="${89 + i * 154}" y="166" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${b}</text>`).join("")}
    </svg>`,
  },
  video: { id: "1NRFL6YYtzg", titulo: "Componentes electrónicos: resumen e idea intuitiva", canal: "Manik", vistas: 1310499, megusta: 0, busqueda: "electrónica componentes resistencia diodo transistor" },
  quiz: [
    { q: "Una pila de 6 V alimenta una resistencia de 300 Ω. ¿Qué intensidad circula?", o: ["0,02 A", "1 800 A", "50 A"], a: 0, e: "I = V / R = 6 / 300 = 0,02 A (20 mA)." },
    { q: "¿Qué componente cambia su resistencia con la luz?", o: ["El termistor", "La LDR", "El condensador"], a: 1, e: "LDR: Light Dependent Resistor." },
    { q: "¿Por qué un LED necesita una resistencia en serie?", o: ["Para que brille de colores", "Para limitar la corriente y que no se queme", "Para que funcione al revés"], a: 1, e: "Sin resistencia pasaría demasiada corriente." },
    { q: "Una señal que solo toma los valores 0 y 1 es…", o: ["analógica", "digital", "alterna"], a: 1, e: "Digital: dos estados, encendido y apagado." },
    { q: "La puerta AND da 1 cuando…", o: ["alguna entrada es 1", "todas las entradas son 1", "todas las entradas son 0"], a: 1, e: "Equivale a interruptores en serie: deben estar todos cerrados." },
  ],
  examen: [
    { q: "Dos resistencias de 100 Ω y 220 Ω en serie equivalen a…", o: ["120 Ω", "320 Ω", "22 000 Ω"], a: 1, e: "En serie se suman: 100 + 220 = 320 Ω." },
    { q: "¿Qué hace un transistor usado como interruptor?", o: ["Una corriente pequeña en la base controla otra mayor entre colector y emisor", "Guarda carga", "Emite luz"], a: 0, e: "Por eso permite que un sensor débil active un motor o un relé." },
    { q: "¿Qué da la puerta NOT si la entrada es 0?", o: ["0", "1", "Depende"], a: 1, e: "NOT invierte la entrada." },
  ],
  feynman: ["Qué son tensión, intensidad y resistencia y cómo las une la ley de Ohm", "Para qué sirven la LDR y el condensador", "Cómo funciona un transistor como interruptor", "La diferencia entre señal analógica y digital", "Las tablas de verdad de AND, OR y NOT"],
  mapa: mapa("ELECTRÓNICA", "var(--eso)", [
    ["Ley de Ohm", "V = I · R", "var(--red)"],
    ["Pasivos", "resistencias · condensadores", "var(--sun)"],
    ["Activos", "diodo · LED · transistor", "var(--pen)"],
    ["Digital", "0 y 1 · AND · OR · NOT", "var(--leaf)"],
  ], 250),
  tarjetas: [
    ["Ley de Ohm", "V = I · R (voltios = amperios · ohmios)."],
    ["¿Qué es un diodo?", "Un componente que solo deja pasar la corriente en un sentido."],
    ["Patas de un transistor", "Base, colector y emisor."],
    ["Diferencia entre señal analógica y digital", "La analógica toma valores continuos; la digital solo dos (0 y 1)."],
    ["Tabla de la puerta OR", "Da 1 si al menos una entrada es 1; solo da 0 si todas son 0."],
  ],
  familias: ["Buscad en casa aparatos con LED y con potenciómetro (ruedas de volumen, reguladores).", "Con dos interruptores imaginarios, pensad cómo sería una lámpara que se enciende con AND y con OR.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Tecnología eléctrica y electrónica: componentes, análisis de circuitos analógicos, electrónica digital y puertas lógicas (RD 217/2022, Tecnología 4º).",
    ideas: ["Montar en placa de prototipos un circuito con LDR y transistor que encienda un LED a oscuras.", "Simular circuitos en Tinkercad Circuits antes de montarlos.", "Construir puertas AND y OR con pulsadores y comprobar las tablas de verdad."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Puerta lógica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Puerta_l%C3%B3gica" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Calcular resistencias equivalentes en serie, en paralelo y mixtas", "Leer el código de colores y calcular la resistencia de protección de un LED"],
  tras: {
    "Magnitudes y ley de Ohm": [
      { html: `<h3>Circuitos en serie, en paralelo y mixtos</h3><p>En un circuito <b>en serie</b>, los componentes van uno detrás de otro: la corriente es la misma en todos y la tensión de la pila se reparte; la resistencia equivalente es la suma, <mark>Rₜ = R₁ + R₂ + …</mark>. Si se funde una bombilla, se apagan todas. En un circuito <b>en paralelo</b>, los componentes están en ramas distintas conectadas a los mismos puntos: todos reciben la misma tensión y la corriente se reparte; la resistencia equivalente es menor que la menor de ellas: <mark>1/Rₜ = 1/R₁ + 1/R₂ + …</mark>. Así se conectan los aparatos de una casa, para que funcionen de forma independiente. Un circuito <b>mixto</b> combina los dos: se resuelve por partes, empezando por los grupos más sencillos.</p>`, video: { id: "ehxkIVbTXfU", titulo: "Circuito mixto en serie y paralelo", canal: "Profesor Sergio Llanos", vistas: 2339798 } },
      { html: `<h3>Potencia y energía eléctrica</h3><p>La <b>potencia</b> de un aparato indica la energía que consume cada segundo: <mark>P = V · I</mark>, en vatios (W). Usando la ley de Ohm también se puede escribir P = I² · R o P = V² / R. Una resistencia transforma la energía eléctrica en calor (efecto Joule): así funcionan los radiadores, las tostadoras y los fusibles. La <b>energía</b> consumida es la potencia por el tiempo: E = P · t. En las facturas se mide en <b>kilovatios hora</b> (kWh): un aparato de 1.000 W funcionando una hora consume 1 kWh. En electrónica, cada componente tiene una potencia máxima: una resistencia de ¼ W se quema si disipa más.</p>` },
    ],
    "Componentes pasivos": [
      { html: `<h3>El código de colores de las resistencias</h3><p>El valor de una resistencia se indica con <b>bandas de colores</b>. En las de cuatro bandas, las dos primeras son las <b>cifras</b>, la tercera es el <b>multiplicador</b> (cuántos ceros añadir) y la cuarta, la <b>tolerancia</b> (dorado ±5 %, plateado ±10 %). Cada color vale un número: negro 0, marrón 1, rojo 2, naranja 3, amarillo 4, verde 5, azul 6, violeta 7, gris 8 y blanco 9. Por ejemplo, <mark>marrón-negro-rojo-dorado</mark> es 1, 0 y dos ceros: 1.000 Ω = 1 kΩ, con un ±5 %. Una regla para recordarlo es que los colores siguen, más o menos, el orden del arcoíris desde el rojo al violeta.</p>`, video: { id: "YdaiLW4WOWo", titulo: "Cómo calcular el valor de una resistencia con el código de colores", canal: "SterenMedia", vistas: 1622479 } },
    ],
    "Diodos y transistores": [
      { html: `<h3>Calcular la resistencia de un LED</h3><p>Un LED necesita una tensión concreta para encenderse (unos 2 V los rojos y 3 V los blancos o azules) y una corriente pequeña, unos <b>20 mA</b>. Si se conecta directamente a una pila de 9 V, la corriente sería enorme y se quemaría. Por eso se pone una <b>resistencia en serie</b> que «se queda» con la tensión que sobra. Se calcula así: <mark>R = (V pila − V LED) / I</mark>. Con una pila de 9 V y un LED rojo: R = (9 − 2) / 0,02 = 350 Ω. Como las resistencias se fabrican con valores fijos, se elige el valor comercial superior más cercano (por ejemplo, 390 Ω), para que la corriente quede un poco por debajo del máximo.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Tres resistencias de 100 Ω, 200 Ω y 300 Ω en serie se conectan a 12 V. Calcula la resistencia total, la corriente y la tensión en la de 300 Ω.", pasos: ["En serie: Rₜ = 100 + 200 + 300 = 600 Ω.", "I = V / R = 12 / 600 = 0,02 A (20 mA), la misma en todas.", "V₃ = I · R₃ = 0,02 · 300 = 6 V."], resultado: "Rₜ = 600 Ω; I = 20 mA; V₃ = 6 V." },
    { enunciado: "Dos resistencias de 60 Ω y 30 Ω en paralelo se conectan a 6 V. Calcula la resistencia equivalente y la corriente total.", pasos: ["1/Rₜ = 1/60 + 1/30 = 1/60 + 2/60 = 3/60.", "Rₜ = 60 / 3 = 20 Ω.", "I = 6 / 20 = 0,3 A. (Por la de 60 Ω pasan 0,1 A y por la de 30 Ω, 0,2 A.)"], resultado: "Rₜ = 20 Ω; I = 0,3 A." },
    { enunciado: "Una resistencia tiene las bandas amarillo, violeta, naranja y dorado. ¿Cuál es su valor?", pasos: ["Amarillo = 4, violeta = 7: cifras 47.", "Naranja = 3: se añaden tres ceros, 47.000 Ω.", "Dorado: tolerancia ±5 %."], resultado: "47 kΩ ± 5 %." },
  ],
  errores: [
    "Sumar directamente las resistencias en paralelo: hay que sumar sus inversas.",
    "Olvidar dar la vuelta al resultado de 1/Rₜ.",
    "Conectar un LED al revés: solo deja pasar la corriente en un sentido.",
    "Conectar un LED sin resistencia de protección.",
    "Usar miliamperios en la ley de Ohm sin pasarlos a amperios.",
    "Pensar que en paralelo la resistencia total es mayor: siempre es menor que la menor de las ramas.",
  ],
  ejercicios: [
    { q: "¿Qué corriente pasa por una resistencia de 2 kΩ conectada a 10 V?", sol: "I = 10 / 2.000 = 0,005 A = 5 mA." },
    { q: "Calcula la resistencia equivalente de 47 Ω, 33 Ω y 20 Ω en serie.", sol: "47 + 33 + 20 = 100 Ω." },
    { q: "Calcula la resistencia equivalente de dos resistencias de 100 Ω en paralelo.", sol: "1/Rₜ = 1/100 + 1/100 = 2/100 → Rₜ = 50 Ω (dos iguales en paralelo dan la mitad)." },
    { q: "Una resistencia de 10 Ω está en serie con un grupo de dos resistencias de 40 Ω en paralelo. Calcula la resistencia total.", sol: "Las dos de 40 Ω en paralelo dan 20 Ω. En serie con la de 10 Ω: 10 + 20 = 30 Ω." },
    { q: "Escribe el valor de: rojo-rojo-marrón-dorado y marrón-negro-naranja-plateado.", sol: "22 · 10 = 220 Ω ±5 % y 10 · 1.000 = 10 kΩ ±10 %." },
    { q: "¿Qué colores tiene una resistencia de 4,7 kΩ?", sol: "4.700 = 47 y dos ceros: amarillo, violeta, rojo (y la tolerancia, por ejemplo dorado)." },
    { q: "Calcula la resistencia para un LED azul (3 V, 20 mA) con una fuente de 5 V.", sol: "R = (5 − 3) / 0,02 = 100 Ω." },
    { q: "Calcula la potencia de una bombilla por la que pasan 0,5 A a 230 V.", sol: "P = 230 · 0,5 = 115 W." },
    { q: "Un radiador de 2.000 W funciona 3 horas. ¿Cuánta energía consume? ¿Cuánto cuesta a 0,15 €/kWh?", sol: "E = 2 kW · 3 h = 6 kWh. Coste = 6 · 0,15 = 0,90 €." },
    { q: "¿Por qué los enchufes de una casa están en paralelo y no en serie?", sol: "Para que todos reciban 230 V y cada aparato funcione de forma independiente; en serie, al desconectar uno se apagarían todos y la tensión se repartiría." },
  ],
  quiz: [
    { q: "Dos resistencias de 50 Ω en serie equivalen a…", o: ["25 Ω", "50 Ω", "100 Ω"], a: 2, e: "En serie se suman." },
    { q: "Dos resistencias de 50 Ω en paralelo equivalen a…", o: ["25 Ω", "50 Ω", "100 Ω"], a: 0, e: "Dos iguales en paralelo dan la mitad." },
    { q: "En el código de colores, el rojo vale…", o: ["1", "2", "3"], a: 1, e: "Negro 0, marrón 1, rojo 2…" },
    { q: "La potencia eléctrica se calcula con…", o: ["P = V · I", "P = V / I", "P = I / R"], a: 0, e: "En vatios." },
    { q: "La resistencia en serie con un LED sirve para…", o: ["limitar la corriente", "aumentar el brillo", "cambiar el color"], a: 0, e: "R = (V pila − V LED) / I." },
  ],
  tarjetas: [
    ["Resistencias en paralelo", "1/Rₜ = 1/R₁ + 1/R₂; la total es menor que la menor."],
    ["Código de colores", "Negro 0, marrón 1, rojo 2, naranja 3, amarillo 4, verde 5, azul 6, violeta 7, gris 8, blanco 9."],
    ["Potencia eléctrica", "P = V · I, en vatios; la energía se paga en kWh."],
  ],
});

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 110,
  revisado: "2026-11-13",
  lectura: {
    titulo: "La farola que sabe cuándo es de noche",
    html: `<p>Al anochecer, las farolas de tu calle se encienden solas. Nadie pulsa un interruptor: dentro de cada una hay un pequeño circuito con un sensor de luz, unas resistencias y un transistor que decide, en una fracción de segundo, que ya hay poca luz y que toca encender. Ese mismo tipo de decisión, repetido miles de millones de veces por segundo, es lo que hace un procesador cuando juegas, envías un mensaje o haces una foto.</p>
      <p>La electrónica es el arte de controlar la corriente eléctrica para que haga cosas útiles: medir, amplificar, temporizar, decidir. Comienza con tres magnitudes y una ley sencilla, la de Ohm, y llega hasta los chips con miles de millones de transistores. En este tema aprenderás a calcular circuitos, a medir con el polímetro, a entender cómo se cargan los condensadores y cómo un transistor actúa de interruptor, y a diseñar circuitos digitales a partir de una tabla de verdad. Al final podrás montar tu propio circuito automático, como el de la farola.</p>`,
  },
  svgs: {
    "Circuitos en serie, en paralelo y mixtos": L.comparar("Circuito en serie frente a circuito en paralelo", ["Serie", ["misma corriente", "tensión se reparte", "Rt = R1 + R2", "si una falla, todo"]], ["Paralelo", ["misma tensión", "corriente se reparte", "1/Rt = 1/R1 + 1/R2", "ramas independientes"]]),
    "Potencia y energía eléctrica": L.barras("Potencia aproximada de algunos aparatos en vatios", [["LED", 8], ["Portátil", 60], ["Televisor", 100], ["Microondas", 800], ["Radiador", 2000]], { t: "Potencia (W)", unidad: " W" }),
    "El código de colores de las resistencias": L.rejilla("Valores del código de colores de las resistencias", ["Color", "Cifra", "Color", "Cifra"], [["negro", "0", "verde", "5"], ["marrón", "1", "azul", "6"], ["rojo", "2", "violeta", "7"], ["naranja", "3", "gris", "8"], ["amarillo", "4", "blanco", "9"]], { t: "Código de colores" }),
    "Calcular la resistencia de un LED": L.flujo("Pasos para calcular la resistencia de un LED", ["Tensión de la fuente: 9 V", "Tensión del LED: 2 V", "Tensión que sobra: 7 V", "Corriente: 20 mA = 0,02 A", "R = 7 / 0,02 = 350 Ω → 390 Ω"], { t: "Resistencia del LED" }),
  },
  tras: {
    "Potencia y energía eléctrica": [
      {
        html: `<h3>Medir con el polímetro</h3><p>El <b>polímetro</b> o multímetro es el instrumento básico del taller de electrónica. Con un selector giratorio se elige qué medir. Como <b>voltímetro</b>, mide la tensión: se conecta <mark>en paralelo</mark> con el componente, tocando sus dos extremos con las puntas, y con el circuito funcionando. Como <b>amperímetro</b>, mide la intensidad: hay que abrir el circuito y conectarlo <mark>en serie</mark>, para que toda la corriente pase a través de él; la punta roja va a la entrada de amperios o miliamperios. Como <b>óhmetro</b>, mide resistencias, siempre con el componente desconectado del circuito y sin alimentación.</p>
          <p>Antes de medir hay que elegir el tipo de corriente (continua, CC, en pilas y circuitos electrónicos; alterna, CA, en los enchufes) y una escala mayor que el valor esperado; si se desconoce, se empieza por la más alta y se va bajando. Muchos polímetros tienen también la función de <b>continuidad</b>, que pita si hay conexión entre dos puntos, muy útil para encontrar un cable roto o una soldadura fría, y la prueba de diodos. Un error típico es medir corriente con las puntas en paralelo: se provoca un cortocircuito y se funde el fusible del aparato.</p>`,
        svg: L.rejilla("Cómo se conecta el polímetro para medir cada magnitud", ["Mide", "Función", "Conexión"], [["Tensión (V)", "voltímetro", "en paralelo"], ["Intensidad (A)", "amperímetro", "en serie"], ["Resistencia (Ω)", "óhmetro", "sin tensión"], ["Continuidad", "pitido", "sin tensión"]], { t: "Usar el polímetro" }),
      },
    ],
    "El código de colores de las resistencias": [
      {
        html: `<h3>El condensador: cargar y descargar</h3><p>Un <b>condensador</b> está formado por dos placas conductoras separadas por un aislante. Al conectarlo a una pila, se acumulan cargas opuestas en las placas hasta que su tensión iguala la de la pila; al desconectarlo, guarda esa carga y puede devolverla. Su capacidad se mide en <b>faradios</b> (F), aunque en la práctica se usan microfaradios (µF). Los condensadores <b>electrolíticos</b> tienen polaridad: la pata larga es el positivo y conectarlos al revés puede hacer que revienten.</p>
          <p>Cuando un condensador se carga a través de una resistencia, no lo hace de golpe: la tensión sube rápido al principio y cada vez más despacio. El ritmo lo marca la <b>constante de tiempo</b>, <mark>τ = R · C</mark> (en segundos si R está en ohmios y C en faradios). En un tiempo τ se carga hasta el 63 % y en unos 5τ se considera cargado del todo. Con R = 100 kΩ y C = 100 µF, τ = 100.000 · 0,0001 = 10 s. Así se fabrican <b>temporizadores</b>: la luz de la escalera que se apaga sola, el retardo de una alarma o el parpadeo de un LED. Los condensadores también filtran la corriente de los cargadores para que salga estable y protegen los chips de picos de tensión.</p>`,
        svg: L.barras("Carga de un condensador en función de la constante de tiempo", [["1 τ", 63], ["2 τ", 86], ["3 τ", 95], ["5 τ", 99]], { t: "Carga del condensador", unidad: " %" }),
      },
    ],
    "Calcular la resistencia de un LED": [
      {
        html: `<h3>El transistor como interruptor automático</h3><p>Un transistor NPN conduce entre colector y emisor cuando por su base entra una pequeña corriente, a partir de unos <b>0,7 V</b> entre base y emisor. Si la base no recibe corriente, el transistor está en <b>corte</b> (interruptor abierto); si recibe suficiente, pasa a <b>saturación</b> (interruptor cerrado) y puede encender un LED, un zumbador o la bobina de un <b>relé</b>, que a su vez maneja un motor o una lámpara de más potencia.</p>
          <p>Para que el transistor «decida» solo se usa un <mark>divisor de tensión</mark>: dos resistencias en serie entre los polos de la pila, con la base conectada al punto medio. Si una de ellas es una <b>LDR</b>, la tensión del punto medio cambia con la luz. Colocando la LDR entre la base y el negativo, de día su resistencia es baja, la base apenas recibe tensión y el LED está apagado; de noche su resistencia sube mucho, la tensión de la base pasa de 0,7 V y el LED se enciende: es el circuito de la farola. Cambiando la LDR por un <b>termistor</b> se obtiene una alarma de temperatura, y con un potenciómetro en lugar de la resistencia fija se ajusta el punto de disparo. Si la carga es un relé o un motor, se pone un <b>diodo</b> en paralelo para protegerlo de los picos al desconectarse.</p>`,
        svg: L.flujo("Funcionamiento del circuito de la farola con LDR y transistor", ["Anochece: la LDR sube su resistencia", "Sube la tensión en la base", "Pasa de 0,7 V: el transistor conduce", "Circula corriente colector-emisor", "Se enciende el LED o el relé"], { t: "Interruptor de oscuridad" }),
      },
    ],
    "Puertas lógicas": [
      {
        html: `<h3>Otras puertas y álgebra de Boole</h3><p>Además de NOT, AND y OR existen otras puertas muy usadas. La <b>NAND</b> es una AND seguida de una NOT: solo da 0 cuando todas las entradas son 1. La <b>NOR</b> es una OR negada: solo da 1 cuando todas las entradas son 0. La <b>XOR</b> u «O exclusiva» da 1 cuando las entradas son <mark>distintas</mark>; es la base de los circuitos que suman en binario. Curiosamente, con puertas NAND solas se puede construir cualquier otra puerta, por eso son las más baratas y abundantes en los chips.</p>
          <p>El <b>álgebra de Boole</b> escribe estas operaciones como expresiones: la AND como producto (A · B), la OR como suma (A + B) y la NOT con una barra o un apóstrofo (A'). Tiene reglas propias: A · 0 = 0, A + 1 = 1, A · A = A, A + A' = 1. Las <b>leyes de De Morgan</b> permiten transformar unas puertas en otras: (A · B)' = A' + B' y (A + B)' = A' · B'. Simplificar una expresión significa usar menos puertas, lo que abarata el circuito, ocupa menos y consume menos energía.</p>`,
        svg: L.rejilla("Tablas de verdad de las puertas NAND, NOR y XOR", ["A", "B", "NAND", "NOR", "XOR"], [["0", "0", "1", "1", "0"], ["0", "1", "1", "0", "1"], ["1", "0", "1", "0", "1"], ["1", "1", "0", "0", "0"]], { t: "NAND, NOR y XOR" }),
      },
      {
        html: `<h3>Diseñar un circuito digital</h3><p>Un circuito digital se diseña en cuatro pasos. Primero se describe el problema y se identifican las <b>entradas</b> (sensores, pulsadores) y las <b>salidas</b> (LED, motor, alarma). Después se construye la <b>tabla de verdad</b> con todas las combinaciones posibles de entradas: con 2 entradas hay 4 filas; con 3, 8 filas (2ⁿ). En tercer lugar se obtiene la <b>función lógica</b>: se toman las filas en las que la salida vale 1 y, para cada una, se escribe el producto de sus entradas (negando las que valen 0); la función es la suma de esos productos. Por último se <mark>simplifica</mark> y se dibuja el circuito con puertas.</p>
          <p>Ejemplo: una alarma de un coche debe sonar si la puerta está abierta (P = 1) <b>y</b> el motor está apagado (M = 0) <b>o</b> si el cinturón no está puesto (C = 0) con el motor encendido (M = 1). La función es S = P · M' + C' · M. Se monta con dos puertas NOT, dos AND y una OR. Hoy estos circuitos se prueban primero en simuladores como Logisim o Tinkercad y, en muchos casos, se programan en un microcontrolador en lugar de montarlos con puertas sueltas. Aun así, la forma de pensar es la misma: entradas, condiciones y salidas.</p>`,
        svg: L.flujo("Pasos para diseñar un circuito digital", ["Entradas y salidas", "Tabla de verdad (2ⁿ filas)", "Función: suma de productos", "Simplificar con Boole", "Dibujar y simular"], { t: "Diseño digital" }),
      },
      {
        html: `<h3>Circuitos integrados y microcontroladores</h3><p>Un <b>circuito integrado</b> o chip reúne en una pequeña pieza de silicio miles, millones o miles de millones de transistores, resistencias y condensadores ya conectados. Se fabrican sobre obleas de silicio mediante <b>fotolitografía</b>: se dibujan los circuitos con luz ultravioleta a través de máscaras, capa a capa, con detalles de unos pocos nanómetros. En 1965, Gordon Moore observó que el número de transistores de un chip se duplicaba cada dos años aproximadamente, la llamada <mark>ley de Moore</mark>, que se ha cumplido durante décadas.</p>
          <p>En el taller se usan chips sencillos: el <b>555</b>, un temporizador para hacer parpadear un LED o generar sonidos; los integrados de la serie 74, que contienen varias puertas lógicas; o los amplificadores operacionales. Pero el gran protagonista es el <b>microcontrolador</b>: un ordenador completo en un chip, con procesador, memoria y patillas de entrada y salida, que se programa para leer sensores y controlar actuadores. Placas como Arduino o micro:bit lo ponen al alcance de cualquiera: en lugar de cablear puertas, se escribe un programa. Fabricar chips es hoy una industria estratégica, concentrada en muy pocos países, y su escasez puede paralizar fábricas de coches o de móviles.</p>`,
        svg: L.capas("Del transistor al microcontrolador", [["Microcontrolador", "ordenador en un chip"], ["Circuito integrado", "miles de millones"], ["Puertas lógicas", "AND, OR, NAND"], ["Transistor", "interruptor 0/1"]], { t: "Niveles de la electrónica" }),
      },
    ],
  },
  secciones: [4, 6, 5],
  niveles: "bbbmbbmmmm",
  ejercicios: [
    { nivel: "básico", q: "¿Cómo se conecta el polímetro para medir tensión? ¿Y para medir intensidad?", sol: "Para tensión, en paralelo con el componente (sus dos extremos). Para intensidad, en serie, abriendo el circuito para que la corriente pase por el aparato." },
    { nivel: "básico", q: "¿Qué unidades tienen la tensión, la intensidad, la resistencia, la potencia y la capacidad?", sol: "Voltio (V), amperio (A), ohmio (Ω), vatio (W) y faradio (F)." },
    { nivel: "básico", q: "¿Qué hace la puerta XOR? Escribe su tabla de verdad.", sol: "Da 1 cuando las entradas son distintas. 00 → 0; 01 → 1; 10 → 1; 11 → 0." },
    { nivel: "básico", q: "¿Qué diferencia hay entre el estado de corte y el de saturación de un transistor?", sol: "En corte no conduce entre colector y emisor (interruptor abierto). En saturación conduce todo lo posible (interruptor cerrado)." },
    { nivel: "básico", q: "¿Qué es un microcontrolador? Pon dos ejemplos de placas que lo usan.", sol: "Un ordenador completo en un chip (procesador, memoria, entradas y salidas) que se programa para controlar sensores y actuadores. Ejemplos: Arduino y micro:bit." },
    { nivel: "básico", q: "¿Cuántas filas tiene la tabla de verdad de un circuito con 3 entradas? ¿Y con 4?", sol: "2³ = 8 filas y 2⁴ = 16 filas." },
    { nivel: "básico", q: "¿Qué dice la ley de Moore?", sol: "Que el número de transistores de un chip se duplica aproximadamente cada dos años." },
    { nivel: "medio", q: "Calcula la constante de tiempo de un circuito con R = 47 kΩ y C = 220 µF. ¿Cuánto tarda en cargarse del todo?", sol: "τ = R · C = 47.000 · 0,000220 = 10,34 s. Cargado del todo en unos 5τ ≈ 52 s." },
    { nivel: "medio", q: "Tres resistencias de 30 Ω, 60 Ω y 20 Ω están en paralelo a 12 V. Calcula la resistencia equivalente y la corriente total.", sol: "1/Rt = 1/30 + 1/60 + 1/20 = 2/60 + 1/60 + 3/60 = 6/60 → Rt = 10 Ω. I = 12 / 10 = 1,2 A." },
    { nivel: "medio", q: "Un circuito mixto tiene una R de 20 Ω en serie con dos de 60 Ω en paralelo, a 10 V. Calcula la corriente total y la tensión en la de 20 Ω.", sol: "Paralelo: 60/2 = 30 Ω. Total: 20 + 30 = 50 Ω. I = 10 / 50 = 0,2 A. V(20 Ω) = 0,2 · 20 = 4 V (y 6 V en el paralelo)." },
    { nivel: "medio", q: "Calcula la resistencia para un LED rojo (2 V, 15 mA) alimentado con 5 V. ¿Qué valor comercial elegirías?", sol: "R = (5 − 2) / 0,015 = 200 Ω. Se elige el valor comercial igual o algo mayor: 220 Ω." },
    { nivel: "medio", q: "Escribe la expresión booleana de un circuito con una AND de A y B cuya salida entra en una OR junto con C.", sol: "S = A · B + C." },
    { nivel: "medio", q: "Aplica De Morgan para escribir (A + B)' usando solo AND y NOT.", sol: "(A + B)' = A' · B': se niegan A y B y se unen con una AND." },
    { nivel: "medio", q: "Explica por qué en el circuito de la farola la LDR se coloca entre la base y el negativo y no entre la base y el positivo.", sol: "Para que al aumentar su resistencia (oscuridad) suba la tensión en la base y el transistor conduzca. Si estuviera arriba, el LED se encendería con luz y se apagaría a oscuras: sería un detector de luz." },
    { nivel: "medio", q: "Un radiador de 1.500 W funciona 4 h al día durante 30 días. ¿Cuánto cuesta a 0,16 €/kWh?", sol: "E = 1,5 kW · 4 h · 30 = 180 kWh. Coste = 180 · 0,16 = 28,80 €." },
    { nivel: "medio", q: "Al medir la corriente con el polímetro en paralelo con la pila, deja de funcionar. ¿Qué ha pasado?", sol: "El amperímetro tiene una resistencia casi nula; en paralelo con la pila provoca un cortocircuito, pasa una corriente enorme y se funde el fusible del polímetro." },
    { nivel: "avanzado", q: "Diseña la tabla de verdad y la función de un sistema de riego que se activa si la tierra está seca (S = 1) y no llueve (L = 0), o si se pulsa el botón manual (B = 1).", sol: "S = S · L' + B. Tabla (S, L, B → salida): 000 0, 001 1, 010 0, 011 1, 100 1, 101 1, 110 0, 111 1. Se monta con una NOT para L, una AND y una OR." },
    { nivel: "avanzado", q: "Simplifica S = A · B + A · B' usando el álgebra de Boole.", sol: "S = A · (B + B') = A · 1 = A. La salida solo depende de A: no hace falta ninguna puerta." },
    { nivel: "avanzado", q: "Una luz de escalera debe quedarse encendida unos 30 s con un condensador de 470 µF. ¿Qué resistencia necesitas si consideras que se apaga a los 5τ?", sol: "5τ = 30 s → τ = 6 s. R = τ / C = 6 / 0,00047 ≈ 12.766 Ω → unos 12 kΩ (valor comercial)." },
    { nivel: "avanzado", q: "Construye una puerta NOT y una AND usando solo puertas NAND. Explica cómo.", sol: "NOT: se unen las dos entradas de una NAND (A NAND A = A'). AND: una NAND seguida de otra NAND usada como NOT, que invierte su salida: (A · B)'' = A · B." },
    { nivel: "avanzado", q: "Obtén la función lógica de esta tabla (A, B, C → S): solo valen 1 las filas 011, 101 y 111.", sol: "S = A'·B·C + A·B'·C + A·B·C. Simplificando: S = C · (A'·B + A·B' + A·B) = C · (A + B). Se monta con una OR de A y B y una AND con C." },
    { nivel: "avanzado", q: "¿Por qué se pone un diodo en paralelo con la bobina de un relé controlado por un transistor?", sol: "Al cortar la corriente, la bobina genera un pico de tensión inversa que podría destruir el transistor. El diodo, conectado en inversa, deja circular esa corriente y absorbe el pico (diodo de protección o «volante»)." },
    { nivel: "avanzado", q: "Compara montar un sistema de alarma con puertas lógicas o con un microcontrolador: ventajas de cada uno.", sol: "Con puertas: muy rápido, sin programación, consumo bajo, ideal para lógica fija y sencilla. Con microcontrolador: un solo chip sustituye muchas puertas, se cambia el comportamiento reprogramando, puede añadir temporizaciones, sonidos o comunicación." },
    { nivel: "avanzado", q: "Un televisor en espera consume 1 W todo el año y en uso 100 W durante 3 h al día. ¿Qué porcentaje del consumo anual se va en espera?", sol: "Espera: 1 W · 21 h · 365 = 7,7 kWh. Uso: 100 · 3 · 365 = 109,5 kWh. Total ≈ 117,2 kWh. Espera: 7,7 / 117,2 ≈ 6,6 %." },
    { nivel: "avanzado", q: "Explica por qué la fabricación de chips es una industria estratégica y qué consecuencias tuvo su escasez en 2021.", sol: "Casi todo lleva chips (coches, móviles, electrodomésticos) y su fabricación avanzada está concentrada en muy pocas empresas y países. En 2021 la escasez paralizó fábricas de coches en Europa, subió precios y retrasó entregas; por eso la UE impulsa su propia producción." },
  ],
  ejemplos: [
    { enunciado: "Calcula cuánto tarda en cargarse un condensador de 1.000 µF a través de una resistencia de 10 kΩ.", pasos: ["Pasar a unidades básicas: R = 10.000 Ω; C = 0,001 F.", "τ = R · C = 10.000 · 0,001 = 10 s.", "En 10 s llega al 63 % de la tensión de la pila.", "Carga completa en unos 5τ = 50 s."], resultado: "τ = 10 s; carga completa en unos 50 s." },
    { enunciado: "Diseña la tabla y la función de una alarma que suena si se abre la ventana (V = 1) o la puerta (P = 1), pero solo si está activada (A = 1).", pasos: ["Entradas: A, V, P. Salida: S (alarma).", "La alarma suena cuando A = 1 y (V = 1 o P = 1).", "Función: S = A · (V + P).", "Circuito: una OR con V y P, y su salida a una AND junto con A."], resultado: "S = A · (V + P): una OR y una AND." },
    { enunciado: "Lee el valor de una resistencia marrón-negro-rojo-dorado y calcula la corriente si se conecta a 5 V.", pasos: ["Marrón = 1, negro = 0: cifras 10.", "Rojo = 2: se añaden dos ceros → 1.000 Ω = 1 kΩ.", "Dorado: tolerancia ±5 %.", "I = 5 / 1.000 = 0,005 A = 5 mA."], resultado: "1 kΩ ± 5 %; 5 mA." },
  ],
  errores: [],
  cuarta: ["2 A", "El diodo LED", "Para cambiar su color", "continua", "ninguna entrada es 1", "0 Ω", "200 Ω", "4", "P = R / V", "medir la tensión"],
  quiz: [
    { q: "Para medir intensidad, el polímetro se conecta…", o: ["en paralelo", "en serie", "sin tensión", "a tierra"], a: 1, e: "Toda la corriente debe pasar por él." },
    { q: "La constante de tiempo de un circuito RC es…", o: ["R + C", "R · C", "R / C", "V · I"], a: 1, e: "τ = R · C, en segundos." },
    { q: "En un tiempo τ, el condensador se carga hasta el…", o: ["10 %", "50 %", "63 %", "100 %"], a: 2, e: "Y casi del todo en 5τ." },
    { q: "Un transistor NPN de silicio empieza a conducir con unos…", o: ["0,7 V en la base", "9 V en la base", "0 V", "230 V"], a: 0, e: "Es la tensión base-emisor típica." },
    { q: "La puerta que da 1 solo si las entradas son distintas es…", o: ["AND", "NOR", "XOR", "NAND"], a: 2, e: "Es la O exclusiva." },
    { q: "Con puertas NAND solas se puede construir…", o: ["solo NOT", "cualquier otra puerta", "nada útil", "solo AND"], a: 1, e: "Por eso se llama puerta universal." },
    { q: "Según De Morgan, (A · B)' es igual a…", o: ["A' · B'", "A' + B'", "A + B", "A · B"], a: 1, e: "La negación de un producto es la suma de las negaciones." },
    { q: "Un divisor de tensión con una LDR sirve para…", o: ["medir el tiempo", "que la tensión cambie con la luz", "almacenar carga", "emitir luz"], a: 1, e: "Es la base de los interruptores automáticos." },
    { q: "El chip 555 se usa sobre todo como…", o: ["memoria", "temporizador", "sensor de luz", "pila"], a: 1, e: "Para hacer parpadear LED o generar tonos." },
    { q: "La función de continuidad del polímetro sirve para…", o: ["medir potencia", "comprobar si hay conexión entre dos puntos", "cargar condensadores", "cambiar la tensión"], a: 1, e: "Pita si hay conexión." },
  ],
  cuartaEx: ["0 Ω", "Cambia el color de la luz", "Se funde"],
  examen: [
    { q: "Un condensador electrolítico…", o: ["no tiene polaridad", "tiene polaridad y la pata larga es el positivo", "solo funciona en alterna", "mide la luz"], a: 1, e: "Conectarlo al revés puede dañarlo." },
    { q: "¿Qué función lógica corresponde a «suena si A y no B»?", o: ["A + B", "A · B'", "A' · B", "(A · B)'"], a: 1, e: "AND con B negada." },
    { q: "Una resistencia se mide con el óhmetro…", o: ["con el circuito encendido", "desconectada y sin tensión", "en serie con la pila", "en alterna"], a: 1, e: "Si no, la medida es falsa o se daña el aparato." },
    { q: "¿Qué hace un relé controlado por un transistor?", o: ["Permite manejar cargas grandes con una señal pequeña", "Almacena datos", "Emite luz", "Mide la temperatura"], a: 0, e: "Su bobina cierra un contacto independiente." },
    { q: "El proceso con luz ultravioleta para fabricar chips se llama…", o: ["soldadura", "fotolitografía", "extrusión", "fundición"], a: 1, e: "Dibuja los circuitos capa a capa." },
  ],
  tarjetas: [
    ["Polímetro", "Voltímetro en paralelo, amperímetro en serie, óhmetro sin tensión."],
    ["Constante de tiempo", "τ = R · C; carga del 63 % en τ y completa en 5τ."],
    ["Puertas NAND, NOR y XOR", "NAND: AND negada; NOR: OR negada; XOR: 1 si las entradas son distintas."],
    ["Leyes de De Morgan", "(A·B)' = A' + B'; (A+B)' = A' · B'."],
  ],
  glosario: [
    ["Tensión", "Diferencia de potencial que impulsa la corriente; se mide en voltios."],
    ["Intensidad", "Cantidad de carga que circula por segundo; se mide en amperios."],
    ["Resistencia", "Oposición al paso de la corriente; se mide en ohmios."],
    ["Ley de Ohm", "V = I · R."],
    ["Potencia", "Energía consumida por segundo: P = V · I, en vatios."],
    ["Polímetro", "Instrumento que mide tensión, intensidad, resistencia y continuidad."],
    ["Condensador", "Componente que almacena carga eléctrica; se mide en faradios."],
    ["Constante de tiempo", "τ = R · C: marca la rapidez de carga de un condensador."],
    ["Diodo", "Componente que solo deja pasar la corriente en un sentido."],
    ["Transistor", "Componente que amplifica o actúa como interruptor controlado por corriente."],
    ["Divisor de tensión", "Dos resistencias en serie que reparten la tensión."],
    ["Relé", "Interruptor accionado por un electroimán."],
    ["Señal digital", "Señal que solo toma dos valores: 0 y 1."],
    ["Puerta lógica", "Circuito que realiza una operación lógica (AND, OR, NOT…)."],
    ["Tabla de verdad", "Tabla con la salida para cada combinación de entradas."],
    ["Álgebra de Boole", "Álgebra de las operaciones lógicas con 0 y 1."],
    ["Circuito integrado", "Chip que reúne muchos componentes en una pieza de silicio."],
    ["Microcontrolador", "Ordenador completo en un chip para controlar dispositivos."],
  ],
  situacion: {
    titulo: "Un detector automático para el instituto",
    reto: "Por parejas, diseñad, simulad y montad un circuito electrónico que resuelva una necesidad del centro sin intervención humana: una luz que se enciende al oscurecer, una alarma si una puerta queda abierta o un aviso si el aula se calienta demasiado.",
    pasos: [
      "Definid la necesidad, las entradas (sensores) y las salidas (LED, zumbador, relé).",
      "Diseñad el circuito con un divisor de tensión y un transistor o con puertas lógicas, y calculad las resistencias necesarias.",
      "Simulad el circuito en Tinkercad Circuits y comprobad su funcionamiento en distintas condiciones.",
      "Montadlo en una placa de prototipos, medid con el polímetro las tensiones y corrientes clave y comparadlas con los cálculos.",
      "Ajustad el punto de disparo con un potenciómetro y documentad el resultado con esquema, fotos y tabla de medidas.",
    ],
    producto: "El circuito funcionando, su esquema, los cálculos y una ficha técnica con las medidas tomadas.",
    evaluacion: ["El esquema es correcto y usa los símbolos normalizados.", "Los cálculos (ley de Ohm, resistencia del LED, divisor) son correctos y coinciden razonablemente con las medidas.", "El circuito funciona y se monta con orden y seguridad.", "La ficha técnica explica con claridad el funcionamiento y las mejoras posibles."],
  },
  objetivos: ["Medir con el polímetro y calcular la carga de un condensador", "Diseñar circuitos digitales a partir de una tabla de verdad"],
  fuentes: [{ t: "Tinkercad Circuits: simulador de electrónica", url: "https://www.tinkercad.com/circuits" }],
});
