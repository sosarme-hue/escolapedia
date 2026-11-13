// Tecnología y Digitalización 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

const pila = (x, y) => `<line x1="${x}" y1="${y - 12}" x2="${x}" y2="${y + 12}" stroke="var(--ink)" stroke-width="2.5"/><line x1="${x + 8}" y1="${y - 6}" x2="${x + 8}" y2="${y + 6}" stroke="var(--ink)" stroke-width="5"/>`;
const bombilla = (x, y) => `<circle cx="${x}" cy="${y}" r="11" fill="#fff6c8" stroke="var(--ink)" stroke-width="2"/><path d="M${x - 7} ${y - 7} L ${x + 7} ${y + 7} M${x + 7} ${y - 7} L ${x - 7} ${y + 7}" stroke="var(--ink)" stroke-width="1.5"/>`;
const motor = (x, y) => `<circle cx="${x}" cy="${y}" r="11" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/><text x="${x}" y="${y + 4}" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" font-family="${F}">M</text>`;
const resis = (x, y) => `<rect x="${x - 14}" y="${y - 6}" width="28" height="12" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>`;

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: "3-eso",
  titulo: "Electricidad y circuitos eléctricos",
  minutos: 60,
  objetivos: ["Identificar los componentes de un circuito, su función y su símbolo normalizado", "Diseñar y montar circuitos en serie, paralelo y mixtos con elementos de control", "Medir magnitudes eléctricas con el polímetro y aplicar la ley de Ohm", "Calcular potencia, energía y coste del consumo, y aplicar normas de seguridad"],
  claves: ["circuito", "generador", "receptor", "conmutador", "polímetro", "ley de Ohm", "potencia", "kWh"],
  pregunta: {
    texto: "En el pasillo de casa puedes encender la luz desde un extremo y apagarla desde el otro. ¿Cómo funciona ese circuito?",
    respuesta: "Con dos <mark>conmutadores</mark>. A diferencia de un interruptor, un conmutador no solo abre o cierra: <b>elige entre dos caminos</b>. Unidos con dos cables, la bombilla se enciende cuando ambos conmutadores eligen el mismo camino y se apaga cuando eligen caminos distintos. Así, cualquiera de los dos cambia el estado de la luz.",
  },
  bloques: [
    {
      html: `<h3>Electricidad: repaso de magnitudes</h3><p>La <b>corriente eléctrica</b> es el movimiento ordenado de electrones a través de un conductor. Tres magnitudes la describen. La <b>tensión o voltaje (V)</b> es la energía que da el generador a las cargas; se mide en <b>voltios</b>. La <b>intensidad (I)</b> es la cantidad de carga que pasa por segundo; se mide en <b>amperios</b>. La <b>resistencia (R)</b> es la oposición al paso de la corriente; se mide en <b>ohmios (Ω)</b>. Están relacionadas por la <mark>ley de Ohm</mark>: <b>V = I · R</b>. Además, la corriente puede ser <b>continua (CC)</b>, que circula siempre en el mismo sentido, como la de pilas y baterías, o <b>alterna (CA)</b>, que cambia de sentido 50 veces por segundo, como la de los enchufes de casa (230 V).</p>${tabla(["Magnitud", "Símbolo", "Unidad", "Aparato de medida"], [["Tensión", "V", "voltio (V)", "voltímetro, en paralelo"], ["Intensidad", "I", "amperio (A)", "amperímetro, en serie"], ["Resistencia", "R", "ohmio (Ω)", "óhmetro, sin tensión"], ["Potencia", "P", "vatio (W)", "vatímetro"]])}`,
      video: { id: "4VemysIlDAc", titulo: "Qué es el VOLTAJE, la CORRIENTE ELÉCTRICA y la RESISTENCIA explicado paso a paso", canal: "Casi Maestro", vistas: 573178 },
    },
    {
      html: `<h3>Componentes de un circuito</h3><p>Un <mark>circuito eléctrico</mark> es un camino cerrado por el que circula la corriente. Sus componentes se agrupan por su función. Los <b>generadores</b> producen la energía: pilas, baterías, fuentes de alimentación, placas solares. Los <b>conductores</b> la transportan: cables de cobre con funda aislante. Los <b>receptores</b> la transforman: bombillas y LED (luz), motores (movimiento), resistencias (calor), zumbadores y timbres (sonido). Los elementos de <b>maniobra o control</b> dirigen la corriente: interruptores, pulsadores y conmutadores. Y los de <b>protección</b> evitan daños: el fusible, que se funde si pasa demasiada corriente, el <b>magnetotérmico</b> y el <b>diferencial</b>, que corta la corriente si detecta una fuga a tierra, por ejemplo a través de una persona.</p>`,
      video: { id: "aZD_bE9sCfE", titulo: "¿Cómo funciona un circuito? (Componentes electrónicos básicos)", canal: "CuriosaMente", vistas: 1149522 },
    },
    {
      html: `<h3>Símbolos normalizados</h3><p>Para dibujar los circuitos se usan <b>esquemas</b> con <mark>símbolos</mark> normalizados, que todo el mundo entiende. El esquema no muestra cómo es físicamente cada componente ni dónde está, sino cómo están <b>conectados</b>. Los cables se dibujan como líneas rectas, horizontales o verticales; un punto grueso indica una conexión entre cables que se cruzan. Saber leer y dibujar esquemas es imprescindible para montar circuitos en el taller y para buscar averías.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Símbolos eléctricos: pila, bombilla, motor, resistencia, interruptor y pulsador">${BG}
        <path d="M30 50 H 54 M74 50 H 98" stroke="var(--ink)" stroke-width="2"/>${pila(58, 50)}${t(64, 80, "pila", { size: 10 })}
        <path d="M110 50 H 194" stroke="var(--ink)" stroke-width="2"/><rect x="138" y="36" width="28" height="28" fill="var(--paper)"/>${bombilla(152, 50)}${t(152, 80, "bombilla", { size: 10 })}
        <path d="M200 50 H 248" stroke="var(--ink)" stroke-width="2"/><rect x="214" y="36" width="22" height="28" fill="var(--paper)"/>${motor(224, 50)}${t(224, 80, "motor", { size: 10 })}
        <path d="M30 126 H 98" stroke="var(--ink)" stroke-width="2"/>${resis(64, 126)}${t(64, 156, "resistencia", { size: 10 })}
        <path d="M110 126 H 140 M164 126 H 194" stroke="var(--ink)" stroke-width="2"/><circle cx="140" cy="126" r="3" fill="var(--ink)"/><circle cx="164" cy="126" r="3" fill="var(--ink)"/><line x1="140" y1="126" x2="162" y2="112" stroke="var(--ink)" stroke-width="2"/>${t(152, 156, "interruptor", { size: 10 })}
        <path d="M200 126 H 214 M234 126 H 248 M210 118 H 238 M224 118 V 106" stroke="var(--ink)" stroke-width="2"/><circle cx="214" cy="126" r="3" fill="var(--ink)"/><circle cx="234" cy="126" r="3" fill="var(--ink)"/>${t(224, 156, "pulsador", { size: 10 })}</svg>`,
    },
    {
      html: `<h3>Elementos de control: interruptor, pulsador y conmutador</h3><p>El <b>interruptor</b> abre o cierra el circuito y <b>se queda</b> en la posición elegida: las luces de una habitación. El <b>pulsador</b> solo cierra (o abre) el circuito <b>mientras se mantiene pulsado</b> y vuelve solo a su posición inicial por un muelle: el timbre de la puerta, las teclas de un teclado. El <mark>conmutador</mark> tiene tres terminales y dirige la corriente hacia <b>uno u otro camino</b>: con un conmutador se puede elegir qué bombilla se enciende, y con dos conmutadores se controla una luz desde dos puntos, como en pasillos y escaleras. Hay también conmutadores dobles para invertir el sentido de giro de un motor de corriente continua, cambiando la polaridad de su alimentación.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Circuito de pasillo: una pila, dos conmutadores unidos por dos cables y una bombilla que se controla desde los dos">${BG}
        <path d="M40 60 V 30 H 220 V 70 M40 100 V 150 H 78" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <rect x="28" y="66" width="24" height="40" fill="var(--paper)"/>${pila(36, 84)}
        <path d="M96 130 H 170 M96 158 H 170 M188 144 H 220 V 98" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <rect x="206" y="70" width="28" height="28" fill="var(--paper)"/>${bombilla(220, 84)}
        <circle cx="78" cy="150" r="3" fill="var(--ink)"/><circle cx="96" cy="130" r="3" fill="var(--ink)"/><circle cx="96" cy="158" r="3" fill="var(--ink)"/><line x1="78" y1="150" x2="95" y2="132" stroke="var(--red)" stroke-width="2.5"/>
        <circle cx="188" cy="144" r="3" fill="var(--ink)"/><circle cx="170" cy="130" r="3" fill="var(--ink)"/><circle cx="170" cy="158" r="3" fill="var(--ink)"/><line x1="188" y1="144" x2="171" y2="132" stroke="var(--red)" stroke-width="2.5"/>
        ${t(86, 116, "conm. 1", { size: 10, color: "var(--red)" })}${t(180, 116, "conm. 2", { size: 10, color: "var(--red)" })}${t(130, 22, "luz de pasillo", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Circuitos en serie</h3><p>En un <mark>circuito en serie</mark> los receptores se conectan <b>uno a continuación de otro</b>, formando un único camino. La <b>intensidad es la misma</b> en todos; la <b>tensión del generador se reparte</b> entre ellos; y la <b>resistencia total es la suma</b>: <b>R<sub>T</sub> = R₁ + R₂ + …</b> Si se añaden más bombillas, la resistencia total crece, la intensidad baja y lucen menos. Si una se funde o se desconecta, <b>se apagan todas</b>. Para calcular un circuito en serie: se suma la resistencia total, se calcula la intensidad con <b>I = V / R<sub>T</sub></b> y después la tensión en cada receptor con <b>V₁ = I · R₁</b>. Las tensiones parciales suman la del generador.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Circuito en serie con una pila de 9 voltios y dos resistencias de 100 y 200 ohmios">${BG}
        <path d="M40 50 H 220 V 140 H 40 V 106 M40 74 V 50" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <rect x="28" y="74" width="24" height="32" fill="var(--paper)"/>${pila(36, 90)}${t(22, 94, "9 V", { size: 10, anchor: "end" })}
        ${resis(100, 50)}${resis(170, 50)}${t(100, 36, "100 Ω", { size: 10, color: "var(--pen)" })}${t(170, 36, "200 Ω", { size: 10, color: "var(--pen)" })}
        ${fl(140, 140, 110, 140, "var(--red)", 2)}${t(130, 162, "Rт = 300 Ω · I = 0,03 A", { size: 11, color: "var(--red)" })}</svg>`,
      video: { id: "J3_Q3nFjm7U", titulo: "Circuito Serie - Ejercicios Resueltos - Ley de Ohm - Tecnología ESO", canal: "CursoTutorial", vistas: 481446 },
    },
    {
      html: `<h3>Circuitos en paralelo y mixtos</h3><p>En un <mark>circuito en paralelo</mark> cada receptor está en una <b>rama</b> distinta conectada directamente al generador. La <b>tensión es la misma</b> en todas las ramas; la <b>intensidad total se reparte</b>: I<sub>T</sub> = I₁ + I₂ + …; y la resistencia total es <b>menor</b> que la menor de las ramas: <b>1/R<sub>T</sub> = 1/R₁ + 1/R₂ + …</b> Para dos resistencias iguales, la total es la mitad. Cada receptor funciona de forma <b>independiente</b>, por eso las casas se instalan en paralelo. Un <b>circuito mixto</b> combina partes en serie y en paralelo: se resuelve por pasos, sustituyendo cada grupo en paralelo por su resistencia equivalente y sumando después las que quedan en serie.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Circuito en paralelo: una pila y dos bombillas en ramas distintas; cada una recibe toda la tensión">${BG}
        <path d="M40 40 H 200 V 140 H 40 V 106 M40 74 V 40 M120 40 V 140" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <rect x="28" y="74" width="24" height="32" fill="var(--paper)"/>${pila(36, 90)}
        <rect x="106" y="76" width="28" height="28" fill="var(--paper)"/>${bombilla(120, 90)}<rect x="186" y="76" width="28" height="28" fill="var(--paper)"/>${bombilla(200, 90)}
        <circle cx="120" cy="40" r="3.5" fill="var(--ink)"/><circle cx="120" cy="140" r="3.5" fill="var(--ink)"/>
        ${t(160, 164, "misma V en cada rama", { size: 10, color: "var(--pen)" })}${t(160, 28, "Iт = I₁ + I₂", { size: 11, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>El polímetro</h3><p>El <mark>polímetro</mark> o multímetro es el aparato que mide varias magnitudes eléctricas. Tiene una <b>pantalla</b>, un <b>selector</b> giratorio para elegir la magnitud y la escala, y dos <b>puntas</b>: la negra va siempre a la clema <b>COM</b>, y la roja, a la de V/Ω o a la de A según lo que se mida. Para medir <b>tensión</b>, se selecciona V (continua o alterna) y se colocan las puntas <b>en paralelo</b>, en los extremos del elemento. Para medir <b>intensidad</b>, se abre el circuito y se intercala el polímetro <b>en serie</b>. Para medir <b>resistencia</b> o comprobar la <b>continuidad</b> de un cable, el circuito debe estar <b>sin alimentación</b>. Se empieza siempre por la escala más alta para no dañar el aparato.</p>`,
    },
    {
      html: `<h3>Potencia y energía eléctrica</h3><p>La <mark>potencia (P)</mark> indica la energía que consume un aparato por segundo. Se calcula con <b>P = V · I</b> y se mide en <b>vatios (W)</b> o kilovatios (kW). Una bombilla LED tiene unos 10 W; un microondas, 800 W; un horno, 2 000 W. La <b>energía (E)</b> consumida depende de la potencia y del tiempo de uso: <b>E = P · t</b>. En las facturas se mide en <b>kilovatios hora (kWh)</b>: la energía que consume un aparato de 1 kW durante 1 hora. Para calcular el coste, se multiplica la energía por el precio del kWh. Las <b>etiquetas energéticas</b>, de la A (más eficiente) a la G, ayudan a elegir aparatos que consumen menos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Etiqueta energética con barras de la A, verde y corta, a la G, roja y larga">${BG}
        ${["#1a9850", "#66bd63", "#a6d96a", "#fee08b", "#fdae61", "#f46d43", "#d73027"].map((c, i) => `<path d="M40 ${28 + i * 18} H ${80 + i * 12} L ${88 + i * 12} ${36 + i * 18} L ${80 + i * 12} ${44 + i * 18} H 40 Z" fill="${c}"/>` + t(50, 40 + i * 18, "ABCDEFG"[i], { size: 11, color: "#fff" })).join("")}
        ${t(196, 60, "A: menos", { size: 10, color: "var(--leaf)" })}${t(196, 74, "consumo", { size: 10, color: "var(--leaf)" })}${t(212, 140, "G: más", { size: 10, color: "var(--red)" })}${t(212, 154, "consumo", { size: 10, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>La instalación eléctrica de una vivienda</h3><p>La electricidad llega a las casas desde la red mediante la <b>acometida</b>, pasa por el <b>contador</b>, que mide la energía consumida, y llega al <mark>cuadro general de mando y protección</mark>. En él están el <b>interruptor general</b>, el <b>diferencial</b>, que protege a las personas de descargas, y varios <b>interruptores magnetotérmicos</b> (PIA), que protegen cada circuito de sobrecargas y cortocircuitos. Desde el cuadro salen <b>circuitos independientes</b> en paralelo: alumbrado, enchufes de uso general, cocina y horno, lavadora, baño. Los enchufes tienen un tercer contacto, la <b>toma de tierra</b>, que desvía al suelo las fugas de corriente.</p>`,
    },
    {
      html: `<h3>Seguridad eléctrica y ahorro</h3><p>La corriente que atraviesa el cuerpo puede causar quemaduras, paradas cardíacas o la muerte. Normas básicas: <b>no manipular</b> aparatos ni enchufes con las manos mojadas; <b>desconectar</b> el aparato o bajar el interruptor general antes de cualquier reparación; no sobrecargar los enchufes con <b>ladrones</b>; tirar de la clavija, no del cable; no usar aparatos con cables pelados; y no acercarse a líneas de alta tensión. En el taller se trabaja con <b>tensiones bajas</b> (pilas de 4,5 o 9 V). Para <b>ahorrar energía</b>: usar bombillas LED, apagar las luces y los aparatos en espera (<i>stand-by</i>), elegir electrodomésticos de clase A y aprovechar la luz natural.</p>`,
    },
  ],
  figura: {
    titulo: "Serie y paralelo: qué pasa si se funde una bombilla",
    svg: `<svg viewBox="0 0 640 250" role="img" aria-label="Circuito en serie: al fundirse una bombilla se apagan todas; circuito en paralelo: al fundirse una bombilla, la otra sigue encendida">
      <rect width="640" height="250" rx="16" fill="var(--paper)"/>
      <path d="M60 60 H 280 V 180 H 60 V 136 M60 104 V 60" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
      <rect x="48" y="104" width="24" height="32" fill="var(--paper)"/>${pila(56, 120)}
      <rect x="120" y="46" width="30" height="28" fill="var(--paper)"/><circle cx="135" cy="60" r="11" fill="var(--paper)" stroke="var(--muted)" stroke-width="2"/>${t(135, 92, "fundida", { size: 12, color: "var(--red)" })}
      <rect x="200" y="46" width="30" height="28" fill="var(--paper)"/><circle cx="215" cy="60" r="11" fill="var(--paper)" stroke="var(--muted)" stroke-width="2"/>${t(215, 92, "apagada", { size: 12, color: "var(--muted)" })}
      ${t(170, 214, "SERIE: se apagan todas", { size: 15, color: "var(--red)", font: D })}
      <path d="M380 60 H 590 V 180 H 380 V 136 M380 104 V 60 M480 60 V 180" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
      <rect x="368" y="104" width="24" height="32" fill="var(--paper)"/>${pila(376, 120)}
      <rect x="466" y="106" width="28" height="28" fill="var(--paper)"/><circle cx="480" cy="120" r="11" fill="var(--paper)" stroke="var(--muted)" stroke-width="2"/>${t(500, 152, "fundida", { size: 12, color: "var(--red)", anchor: "start" })}
      <rect x="576" y="106" width="28" height="28" fill="var(--paper)"/><circle cx="590" cy="120" r="16" fill="#fde68a" opacity=".6"/>${bombilla(590, 120)}${t(574, 96, "encendida", { size: 12, color: "#b8860b", anchor: "end" })}
      ${t(485, 214, "PARALELO: las demás siguen", { size: 15, color: "var(--leaf)", font: D })}
    </svg>`,
  },
  video: { id: "Az9YgKQ_UH4", titulo: "LEY DE OHM | Qué es la ley de ohm", canal: "Algebraticos", vistas: 590157, megusta: 0, busqueda: "circuitos eléctricos serie paralelo ley de Ohm tecnología" },
  ejemplos: [
    { enunciado: "Dos resistencias de 100 Ω y 200 Ω en serie con una pila de 9 V. Calcula I y la tensión en cada una.",
      pasos: ["R<sub>T</sub> = 100 + 200 = 300 Ω.", "I = 9 / 300 = 0,03 A.", "V₁ = 0,03 · 100 = 3 V; V₂ = 0,03 · 200 = 6 V (suman 9 V)."],
      resultado: "I = 0,03 A; 3 V y 6 V." },
    { enunciado: "Dos bombillas de 60 Ω en paralelo con una pila de 12 V. Calcula R<sub>T</sub>, la intensidad de cada rama y la total.",
      pasos: ["Dos resistencias iguales en paralelo: R<sub>T</sub> = 60 / 2 = 30 Ω.", "Cada rama: I = 12 / 60 = 0,2 A.", "Total: I<sub>T</sub> = 0,2 + 0,2 = 0,4 A (= 12 / 30)."],
      resultado: "30 Ω; 0,2 A por rama; 0,4 A total." },
    { enunciado: "Un horno de 2 000 W funciona 1,5 h al día durante 30 días. Si el kWh cuesta 0,15 €, ¿cuánto cuesta?",
      pasos: ["P = 2 kW; t = 1,5 · 30 = 45 h.", "E = 2 · 45 = 90 kWh.", "Coste = 90 · 0,15 = 13,50 €."],
      resultado: "13,50 € al mes." },
  ],
  errores: [
    "Conectar el amperímetro en paralelo: va en serie y en paralelo puede dañarse.",
    "Medir una resistencia con el circuito alimentado.",
    "Pensar que en paralelo la resistencia total aumenta: disminuye.",
    "Confundir potencia (W) con energía (kWh).",
    "Confundir un pulsador con un interruptor: el pulsador vuelve solo a su posición.",
  ],
  ejercicios: [
    { q: "Clasifica: pila, LED, fusible, pulsador, motor, cable, diferencial, zumbador.", sol: "Generador: pila. Conductor: cable. Receptores: LED, motor, zumbador. Control: pulsador. Protección: fusible, diferencial." },
    { q: "¿Qué diferencia hay entre corriente continua y alterna?", sol: "La continua circula siempre en el mismo sentido (pilas); la alterna cambia de sentido (50 veces por segundo en la red)." },
    { q: "Explica la diferencia entre interruptor, pulsador y conmutador.", sol: "El interruptor abre o cierra y se queda; el pulsador actúa solo mientras se pulsa; el conmutador elige entre dos caminos." },
    { q: "Calcula la intensidad que pasa por una resistencia de 470 Ω conectada a 9 V.", sol: "I = 9 / 470 ≈ 0,019 A = 19 mA." },
    { q: "Tres resistencias de 10, 20 y 30 Ω en serie a 12 V. Calcula R<sub>T</sub> e I.", sol: "R<sub>T</sub> = 60 Ω; I = 0,2 A." },
    { q: "Dos resistencias de 30 Ω y 60 Ω en paralelo. Calcula R<sub>T</sub>.", sol: "1/R = 1/30 + 1/60 = 3/60 → R = 20 Ω." },
    { q: "¿Cómo se conecta el polímetro para medir tensión? ¿Y para intensidad?", sol: "Tensión: en paralelo con el elemento. Intensidad: en serie, abriendo el circuito." },
    { q: "Un secador funciona a 230 V y consume 8 A. ¿Cuál es su potencia?", sol: "P = 230 · 8 = 1 840 W." },
    { q: "Una bombilla de 10 W está encendida 5 h al día durante un año. ¿Cuántos kWh consume?", sol: "0,01 kW · 5 · 365 = 18,25 kWh." },
    { q: "¿Qué función tienen el diferencial y el magnetotérmico?", sol: "El diferencial protege a las personas de fugas; el magnetotérmico protege los circuitos de sobrecargas y cortocircuitos." },
  ],
  quiz: [
    { q: "La intensidad se mide en…", o: ["voltios", "amperios", "ohmios"], a: 1, e: "Amperios." },
    { q: "V = I · R es la ley de…", o: ["Ohm", "Joule", "Watt"], a: 0, e: "Ohm." },
    { q: "La corriente de los enchufes de casa es…", o: ["continua", "alterna", "estática"], a: 1, e: "Alterna, 230 V." },
    { q: "Un motor es un elemento…", o: ["generador", "receptor", "de control"], a: 1, e: "Receptor." },
    { q: "El elemento que actúa solo mientras se pulsa es el…", o: ["interruptor", "pulsador", "conmutador"], a: 1, e: "Pulsador." },
    { q: "Para encender una luz desde dos sitios se usan…", o: ["dos interruptores en serie", "dos conmutadores", "dos fusibles"], a: 1, e: "Dos conmutadores." },
    { q: "En serie, la intensidad es…", o: ["la misma en todos", "distinta en cada uno", "cero"], a: 0, e: "La misma." },
    { q: "En paralelo, la tensión en cada rama es…", o: ["la del generador", "la mitad", "cero"], a: 0, e: "La misma que la del generador." },
    { q: "El amperímetro se conecta…", o: ["en serie", "en paralelo", "sin circuito"], a: 0, e: "En serie." },
    { q: "La energía eléctrica se factura en…", o: ["W", "kWh", "V"], a: 1, e: "kWh." },
  ],
  examen: [
    { q: "Dos resistencias de 50 Ω en paralelo equivalen a…", o: ["100 Ω", "25 Ω", "50 Ω"], a: 1, e: "La mitad: 25 Ω." },
    { q: "P = V · I. Un aparato de 230 V y 2 A consume…", o: ["460 W", "115 W", "232 W"], a: 0, e: "460 W." },
    { q: "El elemento que protege a las personas de fugas es el…", o: ["diferencial", "contador", "conmutador"], a: 0, e: "El diferencial." },
  ],
  feynman: ["Cómo se reparten la tensión y la intensidad en serie y en paralelo", "Cómo funciona la luz de un pasillo con dos conmutadores", "Cómo se calcula lo que cuesta usar un aparato"],
  mapa: mapa("CIRCUITOS", "var(--eso)", [
    ["Componentes", "generador · receptor · control", "var(--pen)"],
    ["Conexiones", "serie · paralelo · mixto", "var(--red)"],
    ["Medida", "polímetro · V = I · R", "var(--leaf)"],
    ["Consumo", "P = V · I · E = P · t", "#b8860b"],
  ], 300),
  tarjetas: [
    ["Ley de Ohm", "V = I · R."],
    ["Serie", "Un camino; I igual; R<sub>T</sub> = suma."],
    ["Paralelo", "Varias ramas; V igual; R<sub>T</sub> menor."],
    ["Conmutador", "Dirige la corriente a uno de dos caminos."],
    ["Pulsador", "Actúa solo mientras se pulsa."],
    ["Polímetro", "V en paralelo, A en serie, Ω sin tensión."],
    ["Potencia", "P = V · I, en vatios."],
    ["kWh", "Energía de 1 kW durante 1 hora."],
  ],
  familias: ["Leed juntos la potencia de varios electrodomésticos y calculad cuánto cuesta usar cada uno una hora.", "Buscad el cuadro eléctrico de casa e identificad el diferencial y los magnetotérmicos (sin tocar nada).", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Electricidad: circuitos eléctricos, componentes y simbología, serie, paralelo y mixto, ley de Ohm, medida con polímetro, potencia, energía, instalaciones y seguridad (RD 217/2022, Tecnología y Digitalización 1º a 3º).",
    ideas: ["Montar en placa de prototipos circuitos serie y paralelo y medirlos con polímetro.", "Diseñar el circuito de luz de pasillo con dos conmutadores en un simulador.", "Auditoría energética de la clase con las potencias de los aparatos."],
  },
  fuentes: [RD, wiki("Circuito eléctrico", "Circuito_el%C3%A9ctrico"), wiki("Multímetro", "Mult%C3%ADmetro")],
  revisado: "2026-11-12",
};

require("./_eso3L7").libro(module.exports, {
  lectura: ["Una noche sin luz", `<p>Un martes de abril, a media mañana, se fue la luz en casi toda la península ibérica. Los semáforos se apagaron, los trenes se detuvieron en mitad de la vía, los ascensores se quedaron parados entre pisos y los datáfonos de las tiendas dejaron de funcionar. Las familias buscaban pilas para la radio y velas en los cajones. Durante unas horas, millones de personas descubrieron de golpe todo lo que depende de un enchufe.</p><p>Normalmente no pensamos en la electricidad: pulsamos un interruptor y la luz se enciende. Pero detrás hay centrales que la generan, líneas de alta tensión que la transportan cientos de kilómetros, transformadores que bajan la tensión, un cuadro eléctrico en casa con elementos de protección y circuitos en cada habitación. Todo funciona gracias a unas pocas leyes que podemos entender y calcular.</p><p>En este tema aprenderás qué son la tensión, la intensidad y la resistencia, cómo se relacionan con la <b>ley de Ohm</b>, cómo se montan y calculan circuitos en serie, en paralelo y mixtos, cómo se mide con el polímetro, cuánto cuesta usar cada aparato y cómo usar la electricidad con seguridad y sin derrocharla.</p>`],
  mas: [
    ["<h3>El polímetro</h3>", `<p>Antes de medir hay que elegir la <b>magnitud</b> (V, A u Ω), el tipo de corriente (continua, con el símbolo ⎓, o alterna, con ~) y una <b>escala</b> mayor que el valor esperado; si no se sabe, se empieza por la más alta y se baja. La punta negra va siempre al borne COM y la roja al de voltios u ohmios, o al de amperios cuando se mide intensidad. Si la pantalla muestra un «1» a la izquierda, el valor supera la escala elegida; si aparece un signo menos, las puntas están al revés.</p>`],
    ["<h3>La instalación eléctrica de una vivienda</h3>", `<p>Cada circuito de la vivienda tiene su propio magnetotérmico y un grosor de cable adecuado a la potencia que debe soportar: el de alumbrado usa cables más finos que el de la cocina o el horno. Los cables tienen colores normalizados: <b>marrón, negro o gris</b> para la fase, <b>azul</b> para el neutro y <b>verde y amarillo</b> para la toma de tierra, que conecta las carcasas metálicas de los aparatos con el terreno para que una fuga no pase por una persona.</p>`],
    ["<h3>Seguridad eléctrica y ahorro</h3>", `<p>Para <b>ahorrar</b> energía: cambiar las bombillas por LED (consumen hasta un 80 % menos que las incandescentes), apagar los aparatos en lugar de dejarlos en espera, aprovechar la luz natural, poner la lavadora llena y en frío, y elegir electrodomésticos de clase energética alta. El consumo «fantasma» de los aparatos en espera puede suponer entre un 5 y un 10 % de la factura.</p>`],
  ],
  svgs: [
    ["<h3>Electricidad: repaso de magnitudes</h3>", "Tensión, intensidad y resistencia", [["Tensión V", "voltios: empuje del generador"], ["Intensidad I", "amperios: carga por segundo"], ["Resistencia R", "ohmios: oposición al paso"]], "Ley de Ohm: V = I · R"],
    ["<h3>Componentes de un circuito</h3>", "Componentes de un circuito por su función", [["Generadores", "pila, batería, placa solar"], ["Receptores", "bombilla, motor, zumbador"], ["Control", "interruptor, pulsador"], ["Protección", "fusible, diferencial"]], "Partes de un circuito"],
    ["<h3>El polímetro</h3>", "Cómo conectar el polímetro", [["Voltímetro", "en paralelo con el receptor"], ["Amperímetro", "en serie, abriendo el circuito"], ["Óhmetro", "sin tensión, en el componente"]], "Medir con el polímetro"],
    ["<h3>La instalación eléctrica de una vivienda</h3>", "Colores de los cables", [["Fase", "marrón, negro o gris"], ["Neutro", "azul"], ["Tierra", "verde y amarillo"]], "Cables de la vivienda"],
    ["<h3>Seguridad eléctrica y ahorro</h3>", "Seguridad y ahorro", [["Nunca", "manos mojadas ni cables pelados"], ["Siempre", "desconectar antes de reparar"], ["Ahorrar", "LED, apagar el modo espera"]], "Usar la electricidad bien"],
  ],
  bloques: [
    { tras: "<h3>Componentes de un circuito</h3>", html: `<h3>Efectos de la corriente eléctrica</h3><p>La electricidad es tan útil porque se transforma con facilidad en otras formas de energía. El <b>efecto térmico</b> o efecto Joule: al pasar la corriente por un conductor, este se calienta; lo aprovechan estufas, tostadores, planchas, hornos y secadores, y es también la causa de que los cables se calienten si soportan demasiada corriente. El <b>efecto luminoso</b>: bombillas, tubos fluorescentes y LED convierten la energía eléctrica en luz. El <b>efecto magnético</b>: una corriente crea un campo magnético a su alrededor; si el cable se enrolla en una bobina se obtiene un <b>electroimán</b>, base de motores, timbres, relés y altavoces. El <b>efecto químico</b>: la corriente puede provocar reacciones químicas, como al cargar una batería o en la electrólisis que se usa para recubrir metales (cromado). Y el <b>efecto sonoro</b>, en zumbadores y altavoces, que en realidad combina el efecto magnético con una membrana que vibra.</p>`, svg: ["Efectos de la corriente", [["Térmico", "estufa, tostador, plancha"], ["Luminoso", "bombilla, LED"], ["Magnético", "motor, timbre, relé"], ["Químico", "cargar baterías, cromado"]], "Qué produce la corriente"] },
    { tras: "<h3>Circuitos en paralelo y mixtos</h3>", html: `<h3>Resolver un circuito mixto paso a paso</h3><p>Un circuito mixto combina partes en serie y partes en paralelo. Para resolverlo se sigue siempre el mismo método: <b>1)</b> se calcula la resistencia equivalente de cada grupo en paralelo; <b>2)</b> se suman las resistencias que quedan en serie para obtener la resistencia total; <b>3)</b> con la ley de Ohm se calcula la intensidad total, I = V / R<sub>T</sub>; <b>4)</b> se calcula la tensión en cada parte (V = I · R); <b>5)</b> en el grupo en paralelo, cada rama tiene la misma tensión y su intensidad es V / R de la rama.</p><p>Ejemplo: R₁ = 10 Ω en serie con un grupo en paralelo de R₂ = 30 Ω y R₃ = 60 Ω, a 12 V. El paralelo equivale a 30 · 60 / (30 + 60) = 20 Ω. La resistencia total es 10 + 20 = 30 Ω. La intensidad total es 12 / 30 = 0,4 A. En R₁ caen 0,4 · 10 = 4 V y en el paralelo 0,4 · 20 = 8 V. Por R₂ pasan 8 / 30 ≈ 0,27 A y por R₃ 8 / 60 ≈ 0,13 A, que suman los 0,4 A. Comprobar que las tensiones suman la del generador y que las intensidades de las ramas suman la total es la mejor forma de detectar errores.</p>`, svg: ["Método para circuitos mixtos", [["1. Paralelos", "R = R₁·R₂ / (R₁+R₂)"], ["2. Serie", "sumar resistencias"], ["3. Ohm", "I = V / R total"], ["4. Repartir", "V e I de cada parte"]], "Circuito mixto en 4 pasos"] },
    { tras: "<h3>Potencia y energía eléctrica</h3>", html: `<h3>La factura de la luz y la etiqueta energética</h3><p>La factura eléctrica tiene dos partes principales. El <b>término de potencia</b> es una cantidad fija que se paga por los kilovatios contratados (por ejemplo, 4,6 kW), se use o no la electricidad; si en casa se enchufan a la vez aparatos que suman más potencia, el limitador o el magnetotérmico general salta. El <b>término de energía</b> depende de los kWh consumidos, que mide el contador. Muchas tarifas tienen precios distintos según la hora: más baratos de noche y los fines de semana. Además se pagan el alquiler del contador, impuestos e IVA.</p><p>La <b>etiqueta energética</b> de la Unión Europea clasifica los electrodomésticos de la <b>A</b> (más eficiente, verde) a la <b>G</b> (menos eficiente, roja) e indica el consumo anual estimado en kWh. Un frigorífico de clase A puede consumir menos de la mitad que uno de clase E, y como está encendido todo el año, el ahorro compensa su mayor precio.</p>`, svg: ["La factura y la etiqueta", [["Término de potencia", "fijo, según kW contratados"], ["Término de energía", "según kWh consumidos"], ["Etiqueta", "de A (eficiente) a G"]], "Pagar la electricidad"] },
    { tras: "<h3>La factura de la luz y la etiqueta energética</h3>", html: `<h3>De la central al enchufe</h3><p>La electricidad se genera en <b>centrales</b>: hidroeléctricas, eólicas, solares, nucleares, de ciclo combinado (gas)… En casi todas, algo hace girar una <b>turbina</b> unida a un <b>alternador</b>, que convierte el movimiento en corriente alterna; las placas fotovoltaicas, en cambio, producen corriente continua directamente a partir de la luz y necesitan un inversor.</p><p>Para transportarla lejos con pocas pérdidas, un <b>transformador elevador</b> sube la tensión hasta 220.000 o 400.000 V: a más tensión, menos intensidad para la misma potencia y menos energía perdida en forma de calor en los cables. Las <b>líneas de alta tensión</b> la llevan a las subestaciones, donde se baja a media tensión, y los <b>centros de transformación</b> de cada barrio la dejan en 230 V para las viviendas. Red Eléctrica coordina en España que la producción y el consumo estén equilibrados en cada instante: si no lo están, la frecuencia de 50 Hz se altera y puede producirse un apagón.</p>`, svg: ["De la central al enchufe", [["Central", "alternador: genera"], ["Transformador", "sube a alta tensión"], ["Líneas", "transportan con pocas pérdidas"], ["Barrio", "se baja a 230 V"]], "Generación y transporte"] },
  ],
  grupos: [5, 4, 5],
  ejemplos: [
    ["R₁ = 20 Ω en serie con dos resistencias de 40 Ω en paralelo, a 9 V. Calcula R<sub>T</sub>, I total y la intensidad por cada rama.", ["Paralelo: 40 · 40 / 80 = 20 Ω.", "R<sub>T</sub> = 20 + 20 = 40 Ω.", "I = 9 / 40 = 0,225 A.", "Tensión en el paralelo: 0,225 · 20 = 4,5 V; cada rama: 4,5 / 40 = 0,1125 A."], "R<sub>T</sub> = 40 Ω; I = 0,225 A; unos 0,11 A por rama."],
    ["En casa hay contratados 3,3 kW. ¿Pueden funcionar a la vez un horno de 2.200 W, una lavadora de 2.000 W y la iluminación (200 W)?", ["Suma: 2.200 + 2.000 + 200 = 4.400 W = 4,4 kW.", "Comparamos: 4,4 kW > 3,3 kW."], "No: saltaría el limitador. Hay que escalonar el uso o contratar más potencia."],
    ["Un frigorífico de clase A consume 110 kWh/año y uno de clase E 260 kWh/año. Con el kWh a 0,16 €, ¿cuánto se ahorra en 10 años?", ["Diferencia anual: 260 − 110 = 150 kWh.", "Ahorro anual: 150 · 0,16 = 24 €.", "En 10 años: 240 €."], "Unos 240 €, que compensan de sobra un precio de compra algo mayor."],
  ],
  errores: ["En un circuito mixto, sumar todas las resistencias como si estuvieran en serie sin resolver antes los grupos en paralelo."],
  niveles: "bbbmmmbmmb",
  ejercicios: [
    ["b", "Nombra los cinco efectos de la corriente eléctrica con un aparato que use cada uno.", "Térmico (estufa), luminoso (LED), magnético (motor o timbre), químico (cargador de baterías) y sonoro (altavoz)."],
    ["b", "¿Qué colores tienen los cables de fase, neutro y tierra?", "Fase: marrón, negro o gris. Neutro: azul. Tierra: verde y amarillo."],
    ["b", "¿Qué es la toma de tierra y para qué sirve?", "Un cable que une las carcasas metálicas de los aparatos con el terreno. Si hay una fuga, la corriente se va por él y no por la persona que toca el aparato; además el diferencial la detecta y corta."],
    ["b", "Explica qué significa una etiqueta energética de clase A.", "Que el aparato es de los más eficientes de su tipo: consume poca energía para hacer su función. La escala va de A (verde) a G (rojo)."],
    ["b", "¿Por qué la electricidad se transporta a alta tensión?", "Porque para la misma potencia la intensidad es menor, y así se pierde mucha menos energía en forma de calor en los cables."],
    ["m", "Calcula la intensidad de una bombilla de 60 W conectada a 230 V y su resistencia.", "I = P / V = 60 / 230 ≈ 0,26 A. R = V / I = 230 / 0,26 ≈ 885 Ω."],
    ["m", "Tres resistencias de 60 Ω en paralelo. Calcula la resistencia equivalente.", "Iguales en paralelo: R / n = 60 / 3 = 20 Ω. (También 1/R = 1/60 + 1/60 + 1/60 = 3/60.)"],
    ["m", "R₁ = 15 Ω en serie con R₂ = 10 Ω y R₃ = 10 Ω en paralelo, a 6 V. Calcula R<sub>T</sub> e I.", "Paralelo: 10 · 10 / 20 = 5 Ω. R<sub>T</sub> = 15 + 5 = 20 Ω. I = 6 / 20 = 0,3 A."],
    ["m", "En el ejercicio anterior, calcula la tensión en R₁ y en el paralelo, y comprueba que suman 6 V.", "V₁ = 0,3 · 15 = 4,5 V. Paralelo: 0,3 · 5 = 1,5 V. 4,5 + 1,5 = 6 V. Cada rama lleva 1,5 / 10 = 0,15 A."],
    ["m", "Un televisor en espera consume 2 W durante 20 h al día. ¿Cuánto cuesta al año con el kWh a 0,15 €?", "Energía: 2 W · 20 h · 365 = 14.600 Wh = 14,6 kWh. Coste: 14,6 · 0,15 ≈ 2,19 € al año."],
    ["m", "Cambias 8 bombillas incandescentes de 60 W por LED de 8 W, encendidas 4 h al día. ¿Cuántos kWh ahorras al año?", "Ahorro por bombilla: 52 W. Total: 8 · 52 = 416 W. Al día: 416 · 4 = 1.664 Wh. Al año: 1.664 · 365 ≈ 607 kWh."],
    ["m", "Explica qué significan los dos términos de la factura de la luz.", "Término de potencia: fijo, según los kW contratados. Término de energía: variable, según los kWh consumidos y, en muchas tarifas, según la hora."],
    ["m", "¿Qué indica el polímetro si aparece «1» a la izquierda de la pantalla? ¿Y un signo menos?", "«1» indica que el valor supera la escala: hay que subirla. El signo menos indica que las puntas están invertidas."],
    ["m", "Describe el camino de la electricidad desde una central eólica hasta tu enchufe.", "El viento mueve las palas y el alternador genera corriente; un transformador eleva la tensión; las líneas de alta tensión la transportan; en subestaciones y centros de transformación se baja hasta 230 V; llega a casa por la acometida, el contador y el cuadro."],
    ["m", "¿Qué efecto de la corriente explica que un cable demasiado fino para un horno pueda incendiarse?", "El efecto térmico (Joule): una intensidad alta en un cable fino lo calienta mucho; puede fundir el aislante y provocar un incendio. Por eso cada circuito lleva un cable de grosor adecuado y un magnetotérmico."],
    ["a", "R₁ = 10 Ω en serie con un paralelo de R₂ = 20 Ω y R₃ = 30 Ω, a 9 V. Calcula todas las tensiones e intensidades.", "Paralelo: 20 · 30 / 50 = 12 Ω. R<sub>T</sub> = 22 Ω. I = 9 / 22 ≈ 0,41 A. V₁ = 4,1 V; V paralelo = 0,41 · 12 ≈ 4,9 V. I₂ = 4,9 / 20 ≈ 0,245 A; I₃ = 4,9 / 30 ≈ 0,163 A (suman ≈ 0,41 A)."],
    ["a", "Diseña el esquema de un circuito con pila, un conmutador y dos bombillas, de modo que el conmutador elija cuál se enciende. Explica su funcionamiento.", "La pila va al terminal común del conmutador; cada uno de los otros dos terminales lleva a una bombilla, y las dos bombillas vuelven a la pila. En una posición se cierra el camino de la bombilla 1 y en la otra el de la 2: nunca están las dos encendidas."],
    ["a", "Una familia consume 3.000 kWh al año. Propón cuatro medidas de ahorro y estima su efecto.", "Bombillas LED (−300 kWh), eliminar el modo espera con regletas (−150 kWh), lavar en frío y con carga completa (−200 kWh), sustituir el frigorífico viejo por uno de clase A (−150 kWh). Total aproximado: −800 kWh, más del 25 %."],
    ["a", "Explica por qué en una instalación los aparatos se conectan en paralelo y no en serie.", "En paralelo cada aparato recibe los 230 V y funciona independientemente: si uno se apaga o se avería, los demás siguen. En serie la tensión se repartiría, ninguno funcionaría bien y al apagar uno se apagarían todos."],
    ["a", "Un apagón se produce cuando la producción y el consumo dejan de estar equilibrados. Explica por qué hay que equilibrarlos en cada instante y qué papel tienen las baterías y las centrales hidráulicas de bombeo.", "La electricidad apenas se almacena en la red: lo que se genera debe consumirse en el mismo instante, o la frecuencia de 50 Hz se altera y las protecciones desconectan centrales. Las baterías y el bombeo (subir agua cuando sobra energía y turbinarla cuando falta) permiten almacenar y equilibrar."],
  ],
  cuartas: ["vatios", "Newton", "magnética", "conductor", "fusible", "dos pulsadores", "nula en el último", "el doble", "en cortocircuito", "A", "0 Ω", "2.300 W", "el contador"],
  quiz: [
    ["El efecto que aprovecha una estufa eléctrica es el…", ["magnético", "térmico", "químico", "luminoso"], 1, "Efecto Joule: la corriente calienta."],
    ["Un electroimán se basa en el efecto…", ["térmico", "luminoso", "magnético", "químico"], 2, "Bobina con corriente."],
    ["El cable de tierra es de color…", ["azul", "marrón", "verde y amarillo", "rojo"], 2, "Verde y amarillo."],
    ["En un circuito mixto, primero se resuelven…", ["los grupos en paralelo", "las pilas", "los interruptores", "los cables"], 0, "Luego se suman en serie."],
    ["Dos resistencias de 30 Ω y 60 Ω en paralelo equivalen a…", ["90 Ω", "20 Ω", "45 Ω", "30 Ω"], 1, "30 · 60 / 90 = 20 Ω."],
    ["El término de potencia de la factura depende de…", ["los kWh gastados", "los kW contratados", "la hora", "el IVA"], 1, "Es fijo según la potencia contratada."],
    ["La clase energética más eficiente es la…", ["A", "D", "G", "E"], 0, "De A (verde) a G (roja)."],
    ["La electricidad se transporta a alta tensión para…", ["que vaya más rápida", "perder menos energía", "que sea continua", "gastar más cobre"], 1, "Menor intensidad, menos pérdidas."],
    ["Un alternador convierte…", ["luz en electricidad", "movimiento en electricidad", "calor en luz", "continua en alterna"], 1, "Las turbinas lo hacen girar."],
    ["Un televisor en espera…", ["no consume nada", "consume un poco siempre", "solo consume de noche", "genera energía"], 1, "Consumo fantasma."],
  ],
  examen: [
    ["R₁ = 10 Ω en serie con un paralelo de 20 Ω y 20 Ω. R<sub>T</sub> es…", ["50 Ω", "20 Ω", "30 Ω", "10 Ω"], 1, "Paralelo 10 Ω + 10 Ω = 20 Ω."],
    ["Una bombilla LED frente a una incandescente consume…", ["lo mismo", "hasta un 80 % menos", "el doble", "un 10 % más"], 1, "Mucho más eficiente."],
    ["El cable azul de una instalación es el…", ["neutro", "fase", "tierra", "de datos"], 0, "Neutro."],
    ["Si el polímetro muestra un signo menos al medir tensión…", ["está roto", "las puntas están al revés", "no hay corriente", "es alterna"], 1, "Polaridad invertida."],
    ["Las placas fotovoltaicas producen corriente…", ["alterna", "continua", "trifásica", "de 400 kV"], 1, "Necesitan un inversor para la red."],
  ],
  tarjetas: [["Efecto Joule", "Calentamiento de un conductor por el que pasa corriente."], ["Toma de tierra", "Cable verde y amarillo que desvía las fugas al terreno."], ["Circuito mixto", "Combina serie y paralelo; se resuelve por partes."], ["Etiqueta energética", "Clasifica la eficiencia de A a G."]],
  glosario: [
    ["Corriente eléctrica", "Movimiento ordenado de electrones por un conductor."],
    ["Tensión", "Energía que da el generador a las cargas; se mide en voltios."],
    ["Intensidad", "Carga que pasa por segundo; se mide en amperios."],
    ["Resistencia", "Oposición al paso de la corriente; se mide en ohmios."],
    ["Ley de Ohm", "V = I · R."],
    ["Circuito en serie", "Receptores uno tras otro en un único camino."],
    ["Circuito en paralelo", "Cada receptor en su rama, con la tensión del generador."],
    ["Conmutador", "Elemento que dirige la corriente hacia uno u otro camino."],
    ["Polímetro", "Aparato que mide tensión, intensidad y resistencia."],
    ["Potencia", "Energía por segundo: P = V · I; se mide en vatios."],
    ["Kilovatio hora", "Unidad de energía de la factura: 1 kW durante 1 h."],
    ["Diferencial", "Protección que corta si hay fuga a tierra."],
    ["Magnetotérmico", "Protección que corta ante sobrecargas o cortocircuitos."],
    ["Efecto Joule", "Calentamiento por el paso de corriente."],
    ["Alternador", "Máquina que convierte movimiento en corriente alterna."],
    ["Transformador", "Aparato que sube o baja la tensión alterna."],
  ],
  situacion: { titulo: "Auditoría eléctrica de casa", reto: "Calcular el consumo eléctrico de vuestra vivienda y proponer un plan de ahorro de al menos un 15 %, además de montar en el aula el circuito de un pasillo con dos conmutadores.", pasos: ["Hacer un inventario de aparatos con su potencia y horas de uso diarias.", "Calcular los kWh anuales y el coste de cada aparato con el precio de vuestra factura.", "Identificar los tres mayores consumos y el consumo en espera.", "Proponer medidas de ahorro y calcular cuánto supondría cada una.", "Montar y medir con el polímetro el circuito de pasillo con dos conmutadores."], producto: "Hoja de cálculo con el consumo, plan de ahorro y circuito montado con sus medidas.", evaluacion: ["Los cálculos de potencia, energía y coste son correctos.", "Las medidas de ahorro están cuantificadas.", "El circuito funciona y su esquema usa símbolos normalizados.", "Se usa el polímetro correctamente y con seguridad."] },
  saberes: "circuitos eléctricos: magnitudes, ley de Ohm, serie, paralelo y mixto, medida, potencia y energía; instalaciones domésticas, seguridad y consumo responsable.",
  familias: ["Mirad juntos la última factura de la luz: buscad la potencia contratada, los kWh consumidos y el precio del kWh."],
  minutos: 115,
});
