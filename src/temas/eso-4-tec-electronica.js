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
