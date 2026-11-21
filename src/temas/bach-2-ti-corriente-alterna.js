// Tecnología e Ingeniería II 2º Bachillerato · Tema 9. Nivel libro. Dibujos propios en SVG.
const { marco, T, flecha, ficha, pasos, compara, rejilla, graf, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU, uid } = require("./_bach2-ti");

const onda = (amp, fase = 0, ciclos = 2, desp = 0.5, n = 60) => Array.from({ length: n + 1 }, (_, i) => { const x = i / n; return [x, desp + amp * Math.sin(2 * Math.PI * ciclos * x - fase)]; });

// Onda senoidal con sus valores.
const senoSVG = graf("Tensión alterna senoidal: el valor máximo es 325 voltios, el eficaz 230 voltios y el periodo 20 milisegundos a 50 hercios", "t", "v", [
  { p: onda(0.42, 0, 2), c: "var(--pen)", t: "" },
  { p: [[0, 0.5 + 0.42 / Math.SQRT2], [1, 0.5 + 0.42 / Math.SQRT2]], c: "var(--leaf)", dash: true, t: "" },
], `<path d="M40 ${(145 - 0.5 * 115).toFixed(1)} H 240" stroke="var(--muted)" stroke-width="1"/>${T(84, 26, "V_máx = 325 V", { fs: 10.5, b: true, c: "var(--pen)" })}${T(194, 74, "V_ef = 230 V", { fs: 9.5, b: true, c: "var(--leaf)", a: "start" })}<path d="M40 136 H 140" stroke="var(--red)" stroke-width="1.6"/><path d="M40 131 v 10 M140 131 v 10" stroke="var(--red)" stroke-width="1.6"/>${T(90, 160, "T = 20 ms (50 Hz)", { fs: 10.5, b: true, c: "var(--red)" })}`);

// Desfase entre tensión e intensidad en una bobina.
const desfaseSVG = (() => {
  const id = uid("fz"), ang = (37.8 * Math.PI) / 180, cx = 150, cy = 92;
  const vx = cx + 90, ix = cx + 70 * Math.cos(ang), iy = cy + 70 * Math.sin(ang);
  return marco("Representación de un circuito inductivo: a la izquierda las ondas de tensión e intensidad desfasadas; a la derecha el diagrama fasorial con la intensidad retrasada un ángulo fi respecto a la tensión", `
  ${(() => { const pv = onda(0.42, 0, 1.5, 0.5, 50), pi = onda(0.28, ang, 1.5, 0.5, 50); const P = (pts) => pts.map(([x, y]) => `${(10 + x * 110).toFixed(1)},${(150 - y * 110).toFixed(1)}`).join(" "); return `<path d="M10 95 H 122" stroke="var(--muted)" stroke-width="1"/><polyline points="${P(pv)}" fill="none" stroke="var(--pen)" stroke-width="2.6"/><polyline points="${P(pi)}" fill="none" stroke="var(--red)" stroke-width="2.6"/>`; })()}
  ${T(30, 30, "v", { fs: 12, b: true, c: "var(--pen)" })}${T(56, 64, "i", { fs: 12, b: true, c: "var(--red)" })}
  <path d="M${cx} ${cy} H ${vx}" stroke="var(--pen)" stroke-width="3" marker-end="url(#${id})"/><path d="M${cx} ${cy} L ${ix.toFixed(1)} ${iy.toFixed(1)}" stroke="var(--red)" stroke-width="3" marker-end="url(#${id})"/>
  <path d="M${cx + 40} ${cy} A 40 40 0 0 1 ${(cx + 40 * Math.cos(ang)).toFixed(1)} ${(cy + 40 * Math.sin(ang)).toFixed(1)}" fill="none" stroke="var(--ink)" stroke-width="1.4"/>${T(cx + 52, cy + 20, "φ", { fs: 12, b: true })}
  ${T(vx - 4, cy - 8, "V", { fs: 12, b: true, c: "var(--pen)" })}${T(ix + 10, iy + 12, "I", { fs: 12, b: true, c: "var(--red)" })}
  ${T(130, 172, "inductivo: I se retrasa respecto a V", { fs: 10.5, b: true })}`, flecha(id, "var(--ink)"));
})();

// Triángulo genérico: base horizontal y altura vertical.
const triangulo = (aria, base, alto, hip, ang, c1, c2, c3, pie) => marco(aria, `
  <path d="M30 140 H 170 V 50 Z" fill="var(--pen)" fill-opacity=".08" stroke="none"/>
  <path d="M30 140 H 170" stroke="${c1}" stroke-width="3.4"/><path d="M170 140 V 50" stroke="${c2}" stroke-width="3.4"/><path d="M30 140 L 170 50" stroke="${c3}" stroke-width="3.4"/>
  <path d="M160 140 v -10 h 10" fill="none" stroke="var(--muted)" stroke-width="1.2"/><path d="M66 140 A 36 36 0 0 0 60 121" fill="none" stroke="var(--ink)" stroke-width="1.4"/>${T(78, 132, "φ", { fs: 12, b: true })}
  ${T(100, 158, base, { fs: 11.5, b: true, c: c1 })}${T(178, 100, alto, { fs: 11.5, b: true, c: c2, a: "start" })}${T(90, 84, hip, { fs: 11.5, b: true, c: c3, a: "end" })}
  ${T(130, 24, ang, { fs: 11.5, b: true })}${pie ? T(130, 176, pie, { fs: 10, c: "var(--muted)" }) : ""}`);

const impedanciaSVG = triangulo("Triángulo de impedancias: la resistencia R en la base, la reactancia X en la altura y la impedancia Z en la hipotenusa", "R", "X = XL − XC", "Z", "Z = √(R² + X²) · tg φ = X/R", "var(--pen)", "var(--red)", "var(--ink)", "");
const potenciasSVG = triangulo("Triángulo de potencias: la potencia activa P en la base, la reactiva Q en la altura y la aparente S en la hipotenusa", "P (W)", "Q (var)", "S (VA)", "S² = P² + Q² · cos φ = P/S", "var(--leaf)", "var(--red)", "var(--ink)", "");

// Estrella y triángulo.
const trifasicaSVG = (() => {
  const nodo = (x, y) => `<circle cx="${x}" cy="${y}" r="3.5" fill="var(--ink)"/>`;
  const R = (x1, y1, x2, y2) => { const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, a = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI; return `<path d="M${x1} ${y1} L ${x2} ${y2}" stroke="var(--ink)" stroke-width="2"/><rect x="${mx - 12}" y="${my - 5}" width="24" height="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2" transform="rotate(${a.toFixed(1)} ${mx} ${my})"/>`; };
  return marco("Conexión de tres receptores en estrella, con un punto común unido al neutro, y en triángulo, cada uno entre dos fases", `
  ${R(70, 92, 70, 40)}${R(70, 92, 30, 130)}${R(70, 92, 110, 130)}${nodo(70, 92)}${T(84, 98, "N", { fs: 10, b: true, c: "var(--muted)", a: "start" })}
  ${T(70, 32, "L1", { fs: 10, b: true })}${T(22, 142, "L2", { fs: 10, b: true })}${T(118, 142, "L3", { fs: 10, b: true })}${T(70, 166, "estrella: V_L = √3·V_f", { fs: 10, b: true, c: "var(--pen)" })}
  ${R(190, 40, 150, 120)}${R(150, 120, 230, 120)}${R(230, 120, 190, 40)}${nodo(190, 40)}${nodo(150, 120)}${nodo(230, 120)}
  ${T(190, 32, "L1", { fs: 10, b: true })}${T(142, 136, "L2", { fs: 10, b: true })}${T(238, 136, "L3", { fs: 10, b: true })}${T(190, 166, "triángulo: I_L = √3·I_f", { fs: 10, b: true, c: "var(--red)" })}`);
})();

// Transformador.
const trafoSVG = (() => {
  const bob = (x, n, c) => Array.from({ length: n }, (_, i) => `<ellipse cx="${x}" cy="${56 + i * 14}" rx="16" ry="6" fill="none" stroke="${c}" stroke-width="2.4"/>`).join("");
  return marco("Transformador: dos bobinas sobre un núcleo de hierro; la relación de tensiones es igual a la relación de número de espiras", `
  <rect x="70" y="36" width="120" height="104" rx="4" fill="none" stroke="var(--muted)" stroke-width="12" opacity=".55"/>
  ${bob(70, 6, "var(--red)")}${bob(190, 3, "var(--pen)")}
  ${T(30, 84, "V₁", { fs: 12, b: true, c: "var(--red)" })}${T(30, 100, "N₁", { fs: 11, c: "var(--red)" })}${T(232, 84, "V₂", { fs: 12, b: true, c: "var(--pen)" })}${T(232, 100, "N₂", { fs: 11, c: "var(--pen)" })}
  ${T(130, 92, "núcleo", { fs: 10, c: "var(--muted)" })}${T(130, 166, "V₁/V₂ = N₁/N₂ = I₂/I₁", { fs: 12, b: true })}`);
})();

module.exports = {
  materia: "Tecnología e Ingeniería II",
  curso: "2-bachillerato",
  titulo: "Circuitos de corriente alterna",
  minutos: 120,
  objetivos: [
    "Describir la generación de la corriente alterna senoidal y sus valores característicos",
    "Representar tensiones e intensidades con fasores y números complejos",
    "Calcular reactancias, impedancias, intensidades y desfases en circuitos RLC serie y paralelo",
    "Calcular las potencias activa, reactiva y aparente y corregir el factor de potencia",
    "Analizar sistemas trifásicos equilibrados en estrella y en triángulo",
    "Explicar el funcionamiento del transformador y su papel en el transporte de la energía eléctrica",
  ],
  claves: ["corriente alterna", "frecuencia", "valor eficaz", "fasor", "desfase", "resistencia", "reactancia inductiva", "reactancia capacitiva", "impedancia", "circuito RLC", "resonancia", "potencia activa", "potencia reactiva", "potencia aparente", "factor de potencia", "sistema trifásico", "estrella y triángulo", "transformador"],
  pregunta: {
    texto: "En casa, el enchufe da «230 voltios», pero la tensión de la red sube y baja 50 veces por segundo y llega a 325 V. ¿Por qué se dice entonces que son 230 V?",
    respuesta: "Porque 230 V es el <mark>valor eficaz</mark>: la tensión continua que produciría el mismo calor en una resistencia. En una onda senoidal, el valor eficaz es el máximo dividido entre √2: 325/√2 ≈ 230 V. Es el valor que marcan los polímetros y con el que se calculan las potencias, porque lo que interesa de la electricidad es la energía que entrega.",
  },
  lectura: {
    titulo: "La guerra de las corrientes",
    html: `<p>A finales del siglo XIX, Thomas Edison había electrificado parte de Nueva York con <b>corriente continua</b> a 110 V. Pero tenía un problema: a esa tensión, las pérdidas en los cables eran tan grandes que hacía falta una central cada pocos kilómetros. Nikola Tesla, que había trabajado para Edison, defendía la <b>corriente alterna</b>, y el industrial George Westinghouse compró sus patentes de motores y sistemas polifásicos.</p><p>La ventaja de la alterna era el <b>transformador</b>: permitía elevar la tensión a miles de voltios para transportar la energía con poca intensidad y pocas pérdidas, y reducirla después para el consumo. Edison respondió con una campaña para presentar la alterna como peligrosa. Sin embargo, en 1893 la alterna iluminó la Exposición Universal de Chicago y en 1895 la central de las cataratas del Niágara empezó a enviar electricidad a la ciudad de Búfalo, a 40 km.</p><p>La alterna ganó la guerra y hoy todas las redes del mundo la usan, aunque la continua ha vuelto en las líneas de muy alta tensión submarinas, en los paneles solares, las baterías y la electrónica. Para diseñar instalaciones hay que saber calcular circuitos de alterna.</p>`,
  },
  bloques: [
    bloque({ h: "9.1 Generación de la corriente alterna", p: [
      "La <b>corriente alterna</b> (CA) es aquella cuyo sentido y valor cambian periódicamente. Se genera en los <b>alternadores</b> de las centrales eléctricas: una espira o una bobina gira con velocidad angular constante ω dentro de un campo magnético (o, en los alternadores reales, un electroimán gira dentro de unas bobinas fijas). Según la <b>ley de Faraday</b>, el flujo magnético que atraviesa la bobina varía y se induce una fuerza electromotriz senoidal:",
      formula("e(t) = E<sub>máx</sub> · sen(ω·t) &nbsp;&nbsp; ω = 2π·f &nbsp;&nbsp; T = 1/f"),
      "La <b>frecuencia</b> f es el número de ciclos por segundo (Hz) y el <b>periodo</b> T la duración de un ciclo. En Europa la red funciona a 50 Hz (T = 20 ms, ω = 314,16 rad/s) y en América a 60 Hz. La frecuencia de un alternador depende de su velocidad de giro n (rpm) y de su número de pares de polos p: f = p · n/60. Un alternador de 2 polos (p = 1) debe girar a 3 000 rpm para dar 50 Hz, y uno de 48 polos de una central hidráulica, a solo 125 rpm.",
      "La corriente alterna se impuso porque su tensión se puede elevar y reducir fácilmente con transformadores, y porque los motores de alterna son sencillos y robustos. Sin embargo, en la actualidad la continua está volviendo en la electrónica, los paneles solares, las baterías y las líneas de transporte de muy alta tensión en continua (HVDC).",
    ], svg: ficha("Generación de la corriente alterna: fuerza electromotriz senoidal, pulsación, periodo y frecuencia del alternador", "Alternador", ["e = Emáx · sen(ωt)", "ω = 2π·f ; T = 1/f", "Europa: 50 Hz, 20 ms", "f = p · n / 60"], "var(--pen)"), video: V("ca-intro", "Qué es la corriente alterna y la continua", "qué es la corriente alterna") }),
    bloque({ h: "9.2 Valores característicos", p: [
      "Una tensión senoidal v(t) = V<sub>máx</sub> · sen(ωt + φ) se caracteriza por varios valores. El <b>valor instantáneo</b> v(t) es el que tiene en cada momento. El <b>valor máximo</b> o de pico V<sub>máx</sub> es la amplitud; el <b>valor pico a pico</b> es el doble. El <b>valor medio</b> en un ciclo completo es cero (la mitad del tiempo es positivo y la otra mitad negativo); por eso se define el medio de un semiciclo: V<sub>med</sub> = 2V<sub>máx</sub>/π ≈ 0,637 V<sub>máx</sub>.",
      "El valor más importante es el <mark>valor eficaz</mark> (RMS, <i>root mean square</i>): el valor de la corriente continua que, al circular por una resistencia, produciría el mismo calor en el mismo tiempo. En una senoide:",
      formula("V<sub>ef</sub> = V<sub>máx</sub> / √2 ≈ 0,707 · V<sub>máx</sub> &nbsp;&nbsp; I<sub>ef</sub> = I<sub>máx</sub> / √2"),
      "Así, la red doméstica de 230 V eficaces tiene un valor máximo de 230 · √2 = 325 V. Los polímetros de verdadero valor eficaz (<i>true RMS</i>) miden correctamente también ondas no senoidales. Todas las tensiones e intensidades que se dan en las placas de los aparatos y en los cálculos de potencia son eficaces, salvo que se indique lo contrario. El <b>ángulo de fase</b> φ indica el desplazamiento de la onda respecto al origen de tiempos; entre dos ondas de la misma frecuencia, la diferencia de fases es el <b>desfase</b>.",
    ], svg: senoSVG }),
    bloque({ h: "9.3 Fasores y números complejos", p: [
      "Dibujar y sumar senoides es muy laborioso. Por eso se representan con <mark>fasores</mark>: vectores giratorios cuyo módulo es el valor eficaz y cuyo ángulo es la fase inicial. Como todas las magnitudes de un circuito giran a la misma velocidad ω, basta con dibujarlas en el instante t = 0. El <b>diagrama fasorial</b> muestra de un vistazo los desfases: un fasor adelantado está girado en sentido antihorario respecto al otro.",
      "Los fasores se manejan como <b>números complejos</b>, con la unidad imaginaria j (j² = −1; en electricidad se usa j en lugar de i para no confundirla con la intensidad). Un mismo fasor se puede escribir en forma <b>binómica</b>, a + jb (útil para sumar y restar), o en forma <b>polar</b>, r∠φ (útil para multiplicar y dividir):",
      formula("r = √(a² + b²) &nbsp;&nbsp; φ = arctg(b/a) &nbsp;&nbsp; a = r·cos φ &nbsp;&nbsp; b = r·sen φ"),
      "Para multiplicar dos complejos en forma polar se multiplican los módulos y se suman los ángulos; para dividirlos, se dividen los módulos y se restan los ángulos. Por ejemplo, (230∠0°)/(50,6∠37,8°) = 4,55∠−37,8°. Multiplicar por j equivale a girar 90° en sentido antihorario, y por −j, a girar 90° en sentido horario. Con esta herramienta, la ley de Ohm y las leyes de Kirchhoff se aplican en alterna igual que en continua.",
    ], svg: desfaseSVG }),
    bloque({ h: "9.4 Receptores elementales: R, L y C", p: [
      "En una <b>resistencia</b> pura, la intensidad está <b>en fase</b> con la tensión y se cumple la ley de Ohm: I = V/R. Toda la energía se transforma en calor.",
      "En una <b>bobina</b> o inductancia pura (L, en henrios), la corriente variable induce una fuerza electromotriz que se opone a sus cambios, de modo que la intensidad se <b>retrasa 90°</b> respecto a la tensión. Su oposición al paso de la corriente es la <mark>reactancia inductiva</mark>, que crece con la frecuencia: a frecuencia cero (continua) la bobina es un cortocircuito.",
      "En un <b>condensador</b> puro (C, en faradios), la corriente es la que carga y descarga sus placas, y se <b>adelanta 90°</b> a la tensión. Su <b>reactancia capacitiva</b> disminuye con la frecuencia: en continua, el condensador es un circuito abierto.",
      formula("X<sub>L</sub> = ω·L = 2π·f·L &nbsp;&nbsp; X<sub>C</sub> = 1/(ω·C) = 1/(2π·f·C) &nbsp;&nbsp; (en Ω)"),
      "Por ejemplo, a 50 Hz una bobina de 0,1 H tiene X<sub>L</sub> = 31,4 Ω, y un condensador de 100 µF, X<sub>C</sub> = 1/(314,16 · 10<sup>−4</sup>) = 31,8 Ω. Las bobinas y los condensadores ideales no consumen energía: la almacenan durante un cuarto de ciclo (en el campo magnético o en el eléctrico) y la devuelven en el siguiente. Un truco para recordar los desfases es la palabra «CIVIL»: en un Condensador, I va antes que V; en una bobina (L), V va antes que I.",
    ], svg: rejilla("Comportamiento de los receptores elementales en alterna: la resistencia está en fase, la bobina retrasa la corriente 90 grados y el condensador la adelanta 90 grados", ["Receptor", "Oposición", "Desfase de I"], [["R", "R", "en fase"], ["L", "XL = ωL", "retrasa 90°"], ["C", "XC = 1/(ωC)", "adelanta 90°"]], "var(--pen)") }),
    bloque({ h: "9.5 La impedancia", p: [
      "En un circuito con varios receptores, la oposición total al paso de la corriente alterna es la <mark>impedancia</mark> Z, un número complejo cuya parte real es la resistencia y cuya parte imaginaria es la reactancia. En un circuito serie:",
      formula("Z = R + j·(X<sub>L</sub> − X<sub>C</sub>) &nbsp;&nbsp; |Z| = √(R² + X²) &nbsp;&nbsp; φ = arctg(X/R)"),
      "Gráficamente, R, X y Z forman el <b>triángulo de impedancias</b>, y el ángulo φ es el desfase entre la tensión y la intensidad. La <b>ley de Ohm</b> en alterna se escribe I = V/Z con complejos, o I = V/|Z| con valores eficaces.",
      "Si X<sub>L</sub> > X<sub>C</sub>, el circuito es <b>inductivo</b> (φ > 0): la intensidad se retrasa respecto a la tensión. Es el caso de los motores, los transformadores y las reactancias de las lámparas de descarga. Si X<sub>C</sub> > X<sub>L</sub>, el circuito es <b>capacitivo</b> (φ < 0) y la intensidad se adelanta. Si X<sub>L</sub> = X<sub>C</sub>, el circuito es <b>resistivo</b> (φ = 0): es la <b>resonancia</b>. El inverso de la impedancia se llama <b>admitancia</b>, Y = 1/Z, y se mide en siemens; es útil en los circuitos en paralelo.",
    ], svg: impedanciaSVG }),
    bloque({ h: "9.6 El circuito RLC serie", p: [
      "En un circuito serie, la intensidad es la misma en todos los elementos y la tensión total es la <b>suma fasorial</b> (no aritmética) de las tensiones parciales: V = V<sub>R</sub> + V<sub>L</sub> + V<sub>C</sub>. V<sub>R</sub> está en fase con I, V<sub>L</sub> adelantada 90° y V<sub>C</sub> retrasada 90°, de modo que V<sub>L</sub> y V<sub>C</sub> se restan.",
      "Ejemplo: R = 40 Ω, L = 0,2 H y C = 100 µF conectados en serie a 230 V y 50 Hz. Reactancias: X<sub>L</sub> = 314,16 · 0,2 = 62,83 Ω y X<sub>C</sub> = 31,83 Ω; X = 31,0 Ω. Impedancia: |Z| = √(40² + 31²) = 50,6 Ω, con φ = arctg(31/40) = 37,8° (inductivo). Intensidad: I = 230/50,6 = 4,55 A, retrasada 37,8°.",
      "Tensiones parciales: V<sub>R</sub> = 4,55 · 40 = 182 V, V<sub>L</sub> = 4,55 · 62,83 = 286 V y V<sub>C</sub> = 4,55 · 31,83 = 145 V. ¡La tensión en la bobina es mayor que la de la red! No hay contradicción: V<sub>L</sub> y V<sub>C</sub> están en oposición y se compensan en parte; la suma fasorial, √(182² + (286 − 145)²) = 230 V, coincide con la de alimentación.",
      formula("V = √(V<sub>R</sub>² + (V<sub>L</sub> − V<sub>C</sub>)²) &nbsp;&nbsp; I = V / |Z| &nbsp;&nbsp; cos φ = R / |Z|"),
    ], svg: pasos("Método para resolver un circuito RLC serie: calcular las reactancias, la impedancia y el desfase, la intensidad y las tensiones parciales", ["XL = ωL ; XC = 1/(ωC)", "|Z| = √(R² + X²) ; φ", "I = V / |Z|", "VR = I·R ; VL = I·XL ; VC = I·XC"], "var(--pen)"), video: V("ca-rlc", "Circuitos en alterna: inductores y capacitores", "circuito RLC serie corriente alterna") }),
    bloque({ h: "9.7 La resonancia", p: [
      "Como X<sub>L</sub> crece con la frecuencia y X<sub>C</sub> disminuye, en un circuito RLC hay una frecuencia en la que son iguales y se anulan: la <mark>frecuencia de resonancia</mark>.",
      formula("X<sub>L</sub> = X<sub>C</sub> → f₀ = 1 / (2π·√(L·C))"),
      "En resonancia serie, la impedancia es mínima e igual a R, la intensidad es máxima, la tensión y la corriente están en fase y el circuito se comporta como una resistencia pura. Las tensiones en la bobina y el condensador pueden ser muchas veces mayores que la de alimentación, lo que puede dañar los componentes. El cociente Q = X<sub>L</sub>/R en resonancia se llama <b>factor de calidad</b>: cuanto mayor, más «afilada» es la respuesta en torno a f<sub>0</sub>.",
      "En el circuito del ejemplo anterior, f<sub>0</sub> = 1/(2π · √(0,2 · 10<sup>−4</sup>)) = 35,6 Hz. Para llevarlo a resonancia a 50 Hz habría que cambiar el condensador por uno de C = 1/(ω² · L) = 1/(314,16² · 0,2) = 50,7 µF. La resonancia es la base de la <b>sintonía</b> de las radios y televisores (se ajusta C para seleccionar una emisora), de los filtros electrónicos, de la carga inalámbrica de los móviles y de las cocinas de inducción. En las redes eléctricas, en cambio, hay que evitarla.",
    ], svg: graf("Curva de resonancia: la intensidad es máxima a la frecuencia de resonancia; con poca resistencia la curva es alta y estrecha y con mucha resistencia, baja y ancha", "f", "I", [
      { p: Array.from({ length: 41 }, (_, i) => { const x = 0.05 + (i * 0.9) / 40, d = (x - 0.45) / 0.06; return [x, 0.06 + 0.82 / (1 + d * d)]; }), c: "var(--red)", t: "" },
      { p: Array.from({ length: 41 }, (_, i) => { const x = 0.05 + (i * 0.9) / 40, d = (x - 0.45) / 0.2; return [x, 0.06 + 0.4 / (1 + d * d)]; }), c: "var(--pen)", t: "" },
    ], `<path d="M130 30 V 145" stroke="var(--line)" stroke-dasharray="3 3"/>${T(130, 162, "f₀", { fs: 11, b: true })}${T(152, 44, "R pequeña (Q alto)", { fs: 10, b: true, c: "var(--red)", a: "start" })}${T(236, 100, "R grande", { fs: 10, b: true, c: "var(--pen)", a: "end" })}`), video: V("ca-resonancia", "Resonancia de un circuito RLC", "resonancia circuito RLC") }),
    bloque({ h: "9.8 Circuitos en paralelo y mixtos", p: [
      "En un circuito en <b>paralelo</b>, todos los receptores tienen la misma tensión y la intensidad total es la <b>suma fasorial</b> de las intensidades de las ramas: I = I<sub>1</sub> + I<sub>2</sub> + … Cada rama se calcula con su propia impedancia: I<sub>k</sub> = V/Z<sub>k</sub>. Así son casi todas las instalaciones reales: los aparatos de una vivienda están conectados en paralelo a 230 V.",
      "Ejemplo: una resistencia de 100 Ω en paralelo con un condensador de X<sub>C</sub> = 100 Ω a 230 V. I<sub>R</sub> = 2,3 A en fase con V; I<sub>C</sub> = 2,3 A adelantada 90°. La intensidad total es √(2,3² + 2,3²) = 3,25 A, adelantada 45°. De nuevo, la suma no es aritmética (4,6 A).",
      "Para calcular la impedancia equivalente de varias ramas en paralelo se suman sus admitancias: Y = Y<sub>1</sub> + Y<sub>2</sub> + …, o bien, para dos ramas, Z = Z<sub>1</sub> · Z<sub>2</sub>/(Z<sub>1</sub> + Z<sub>2</sub>), operando con complejos. En un circuito <b>mixto</b> se reducen primero las asociaciones más simples, como en continua. En resonancia <b>paralelo</b> (circuito tanque LC), la impedancia es máxima y la corriente de la línea mínima, mientras que por la bobina y el condensador circula una corriente que pasa de uno a otro.",
    ], svg: compara("Comparación de los circuitos serie y paralelo en corriente alterna", ["Serie", ["misma intensidad", "V = suma fasorial", "Z = Z₁ + Z₂ + …", "resonancia: Z mínima"]], ["Paralelo", ["misma tensión", "I = suma fasorial", "Y = Y₁ + Y₂ + …", "resonancia: Z máxima"]], "var(--pen)", "var(--red)") }),
    bloque({ h: "9.9 Potencias en corriente alterna", p: [
      "En alterna, la potencia instantánea p = v · i varía con el tiempo. En un receptor con desfase φ se distinguen tres potencias. La <mark>potencia activa</mark> P es la que se transforma realmente en trabajo o calor y la que factura la compañía eléctrica (en kWh); se mide en vatios (W). La <b>potencia reactiva</b> Q es la que intercambian continuamente las bobinas y los condensadores con la red sin consumirla; se mide en voltamperios reactivos (var). La <b>potencia aparente</b> S es el producto de la tensión y la intensidad eficaces; se mide en voltamperios (VA) y determina el tamaño de los cables, los transformadores y los generadores.",
      formula("P = V·I·cos φ = I²·R &nbsp;&nbsp; Q = V·I·sen φ = I²·X &nbsp;&nbsp; S = V·I = I²·|Z|"),
      "Las tres forman el <b>triángulo de potencias</b>: S² = P² + Q². Las reactivas de las bobinas se consideran positivas y las de los condensadores negativas, por lo que se compensan. En el circuito RLC del ejemplo: P = 4,55² · 40 = 826 W, Q = 4,55² · 31 = 640 var y S = 230 · 4,55 = 1 045 VA. Comprobación: √(826² + 640²) = 1 045 VA.",
      "Una analogía clásica es una jarra de cerveza: la cerveza es la potencia activa (lo útil), la espuma es la reactiva (ocupa sitio pero no se bebe) y la jarra entera es la aparente. Cuanta más espuma, más grande tiene que ser la jarra para la misma cerveza.",
    ], svg: potenciasSVG }),
    bloque({ h: "9.10 El factor de potencia y su corrección", p: [
      "El <mark>factor de potencia</mark> es cos φ = P/S: indica qué fracción de la potencia aparente se aprovecha. Una instalación con cos φ bajo (por ejemplo, con muchos motores trabajando en vacío o lámparas de descarga sin compensar) necesita más intensidad para la misma potencia activa: I = P/(V · cos φ). Eso obliga a usar cables y transformadores más gruesos y aumenta las pérdidas por efecto Joule en las líneas. Por eso las compañías eléctricas penalizan en la factura el consumo de energía reactiva cuando cos φ es inferior a 0,95.",
      "Como la mayoría de las cargas son inductivas, el factor de potencia se <b>corrige</b> conectando condensadores en paralelo, que aportan la reactiva capacitiva que compensa la inductiva. Para pasar de φ<sub>1</sub> a φ<sub>2</sub> manteniendo P:",
      formula("Q<sub>C</sub> = P · (tg φ₁ − tg φ₂) &nbsp;&nbsp; C = Q<sub>C</sub> / (ω · V²)"),
      "Ejemplo: un motor monofásico de 10 kW con cos φ = 0,7 a 230 V y 50 Hz se quiere llevar a cos φ = 0,95. tg φ<sub>1</sub> = 1,020 y tg φ<sub>2</sub> = 0,329; Q<sub>C</sub> = 10 000 · 0,691 = 6 915 var; C = 6 915/(314,16 · 230²) = 416 µF. La intensidad baja de 10 000/(230 · 0,7) = 62,1 A a 10 000/(230 · 0,95) = 45,8 A, un 26 % menos, y las pérdidas en la línea bajan un 46 %. En las industrias se instalan <b>baterías de condensadores automáticas</b> que conectan los escalones necesarios según la carga.",
    ], svg: ficha("Corrección del factor de potencia: definición, intensidad, potencia reactiva de los condensadores y capacidad necesaria", "Factor de potencia", ["cos φ = P / S", "I = P / (V · cos φ)", "QC = P·(tg φ₁ − tg φ₂)", "C = QC / (ω · V²)"], "var(--red)"), video: V("ca-fp", "Factor de potencia bien explicado", "factor de potencia explicación") }),
    bloque({ h: "9.11 Sistemas trifásicos", p: [
      "Casi toda la energía eléctrica se genera, transporta y distribuye en <mark>sistemas trifásicos</mark>: tres tensiones senoidales de la misma frecuencia y valor eficaz, <b>desfasadas 120°</b>, producidas por un alternador con tres bobinados separados 120°. Frente a tres sistemas monofásicos independientes, ahorran conductores (las corrientes de retorno se compensan), dan una potencia constante (sin pulsaciones) y producen campos magnéticos giratorios que hacen funcionar los motores de inducción.",
      "Los receptores trifásicos se pueden conectar de dos formas. En <b>estrella</b> (Y), cada receptor se conecta entre una fase y un punto común, el neutro: la tensión del receptor (de fase) es √3 veces menor que la tensión entre fases (de línea), y la corriente de línea es igual a la de fase. En <b>triángulo</b> (Δ), cada receptor se conecta entre dos fases: soporta la tensión de línea, y la corriente de línea es √3 veces la de fase.",
      formula("Estrella: V<sub>L</sub> = √3·V<sub>f</sub>, I<sub>L</sub> = I<sub>f</sub> &nbsp;&nbsp; Triángulo: V<sub>L</sub> = V<sub>f</sub>, I<sub>L</sub> = √3·I<sub>f</sub>"),
      "En la red de baja tensión española, la tensión entre fases es de 400 V y entre fase y neutro, 400/√3 = 230 V. Las viviendas reciben normalmente una fase y el neutro (monofásica a 230 V), y los talleres y edificios, las tres fases y el neutro. Si la carga está <b>equilibrada</b> (las tres fases con la misma impedancia), la corriente por el neutro es nula.",
    ], svg: trifasicaSVG, video: V("ca-trifasica", "Cómo funciona la electricidad trifásica", "corriente trifásica cómo funciona") }),
    bloque({ h: "9.12 Potencia en sistemas trifásicos", p: [
      "En un sistema trifásico equilibrado, la potencia total es tres veces la de una fase, P = 3 · V<sub>f</sub> · I<sub>f</sub> · cos φ. Expresada con las magnitudes de línea, que son las que se miden con más facilidad, la fórmula es la misma para estrella y triángulo:",
      formula("P = √3·V<sub>L</sub>·I<sub>L</sub>·cos φ &nbsp;&nbsp; Q = √3·V<sub>L</sub>·I<sub>L</sub>·sen φ &nbsp;&nbsp; S = √3·V<sub>L</sub>·I<sub>L</sub>"),
      "Por ejemplo, un motor trifásico de 15 kW con cos φ = 0,85 a 400 V absorbe I<sub>L</sub> = 15 000/(√3 · 400 · 0,85) = 25,5 A. Si se alimentara en monofásico a 230 V, necesitaría 15 000/(230 · 0,85) = 76,7 A: por eso los receptores potentes son trifásicos.",
      "La forma de conexión importa mucho. Tres resistencias de 50 Ω conectadas en estrella a una red de 400 V soportan 230,9 V cada una, absorben 4,62 A y consumen en total 3 200 W. Las mismas resistencias en triángulo soportan 400 V, absorben 8 A cada una (13,9 A de línea) y consumen 9 600 W: <b>el triple</b>. Esto se aprovecha en el <b>arranque estrella-triángulo</b> de los motores: se arrancan en estrella para reducir a un tercio la intensidad y el par de arranque, y cuando alcanzan velocidad se pasan a triángulo.",
    ], svg: rejilla("Tres resistencias de 50 ohmios a 400 voltios: en estrella soportan 231 voltios y consumen 3200 vatios; en triángulo soportan 400 voltios y consumen 9600 vatios, el triple", ["Conexión", "V receptor", "P total"], [["Estrella", "231 V", "3 200 W"], ["Triángulo", "400 V", "9 600 W"], ["Relación", "×√3", "×3"]], "var(--red)") }),
    bloque({ h: "9.13 El transformador y el transporte de energía", p: [
      "El <mark>transformador</mark> es una máquina estática que cambia el valor de una tensión alterna sin cambiar su frecuencia. Tiene dos bobinados, el <b>primario</b> (N<sub>1</sub> espiras) y el <b>secundario</b> (N<sub>2</sub> espiras), sobre un núcleo de chapas de acero al silicio. La corriente alterna del primario crea un flujo magnético variable que induce en el secundario una tensión proporcional a su número de espiras. En un transformador ideal, la potencia se conserva (V<sub>1</sub> · I<sub>1</sub> = V<sub>2</sub> · I<sub>2</sub>):",
      formula("m = V₁ / V₂ = N₁ / N₂ = I₂ / I₁"),
      "Por ejemplo, un transformador de 230 V a 12 V con 1 150 espiras en el primario necesita 60 en el secundario; si el secundario da 2 A, el primario absorbe 2 · 12/230 = 0,104 A. Los transformadores reales tienen pérdidas en el cobre (por efecto Joule) y en el hierro (por histéresis y corrientes de Foucault, que se reducen con las chapas aisladas), pero sus rendimientos superan el 98 % en los grandes.",
      "Su gran aplicación es el <b>transporte</b> de la energía. Las pérdidas en una línea son P<sub>p</sub> = I² · R; para transportar una potencia P = V · I con poca intensidad hay que usar una tensión muy alta. Transportar 10 MW a 20 kV exige 500 A, pero a 400 kV solo 25 A: las pérdidas son 400 veces menores. Por eso los generadores producen a unos 20 kV, se eleva a 220 o 400 kV para el transporte, y se reduce en subestaciones a media tensión (15-20 kV) y luego, en los centros de transformación, a 400/230 V.",
    ], svg: trafoSVG }),
    bloque({ h: "9.14 Medidas y seguridad eléctrica", p: [
      "Las magnitudes de alterna se miden con el <b>polímetro</b> (tensiones en paralelo e intensidades en serie, en la escala AC), la <b>pinza amperimétrica</b> (mide la intensidad sin abrir el circuito, abrazando un solo conductor), el <b>vatímetro</b> (mide la potencia activa; con dos vatímetros se mide la potencia en trifásica, por el método de Aron), el <b>contador</b> (energía, en kWh) y el <b>osciloscopio</b>, que muestra la forma de onda y permite medir desfases.",
      "La corriente que atraviesa el cuerpo humano es peligrosa a partir de unos 30 mA: puede producir contracciones musculares que impiden soltar el conductor, paro respiratorio y fibrilación ventricular. Su gravedad depende de la intensidad, del tiempo, del recorrido y de la frecuencia (la de 50 Hz es especialmente peligrosa). Las instalaciones se protegen con <b>interruptores magnetotérmicos</b> (contra sobrecargas y cortocircuitos), <b>interruptores diferenciales</b> (detectan fugas de corriente a tierra de 30 mA y desconectan en milisegundos) y la <b>toma de tierra</b>, que conecta las carcasas metálicas con el terreno.",
      "El Reglamento Electrotécnico para Baja Tensión (REBT) regula las instalaciones. Las «cinco reglas de oro» para trabajar sin tensión son: abrir todas las fuentes de tensión, bloquear los aparatos de corte, comprobar la ausencia de tensión, poner a tierra y en cortocircuito, y señalizar la zona de trabajo.",
    ], svg: pasos("Las cinco reglas de oro para trabajar sin tensión: cortar y bloquear, comprobar la ausencia de tensión, poner a tierra y en cortocircuito y señalizar", ["Abrir y bloquear el corte", "Comprobar ausencia de tensión", "Tierra y cortocircuito", "Señalizar la zona"], "var(--red)") }),
  ],
  figura: figura("Corriente alterna", "Senoides, fasores, impedancias, potencias y trifásica", [["Señal", "Vef = Vmáx/√2", "ω = 2πf"], ["Impedancia", "Z = R + j(XL − XC)", "I = V/Z"], ["Potencias", "P · Q · S", "cos φ = P/S"], ["Trifásica", "VL = √3·Vf", "P = √3·VL·IL·cos φ"]], "var(--pen)"),
  video: V("ca-rlc", "Circuitos en alterna: inductores y capacitores", "circuito RLC serie corriente alterna"),
  ejemplos: [
    { enunciado: "La tensión de la red es v(t) = 325 · sen(314,16 t). Calcula el valor eficaz, la frecuencia y el periodo.", pasos: ["V<sub>ef</sub> = 325/√2 = 229,8 V ≈ 230 V.", "f = ω/(2π) = 314,16/6,283 = 50 Hz.", "T = 1/f = 0,02 s."], resultado: "230 V, 50 Hz y 20 ms." },
    { enunciado: "Un circuito RLC serie tiene R = 40 Ω, L = 0,2 H y C = 100 µF, a 230 V y 50 Hz. Calcula Z, I, φ y las tensiones parciales.", pasos: ["X<sub>L</sub> = 62,83 Ω; X<sub>C</sub> = 31,83 Ω; X = 31 Ω.", "|Z| = √(40² + 31²) = 50,6 Ω; φ = 37,8°; I = 230/50,6 = 4,55 A.", "V<sub>R</sub> = 182 V; V<sub>L</sub> = 286 V; V<sub>C</sub> = 145 V."], resultado: "Z = 50,6 Ω, I = 4,55 A retrasada 37,8° (inductivo)." },
    { enunciado: "Calcula las potencias activa, reactiva y aparente del circuito anterior y su factor de potencia.", pasos: ["P = I²·R = 4,55² · 40 = 826 W.", "Q = I²·X = 4,55² · 31 = 640 var; S = 230 · 4,55 = 1 045 VA.", "cos φ = P/S = 0,79."], resultado: "826 W, 640 var, 1 045 VA y cos φ = 0,79." },
    { enunciado: "Un motor monofásico de 10 kW, cos φ = 0,7, a 230 V y 50 Hz. Calcula la batería de condensadores para llegar a cos φ = 0,95 y las intensidades antes y después.", pasos: ["tg φ₁ = 1,020; tg φ₂ = 0,329. Q<sub>C</sub> = 10 000 · 0,691 = 6 915 var.", "C = 6 915/(314,16 · 230²) = 416 µF.", "I₁ = 10 000/(230 · 0,7) = 62,1 A; I₂ = 10 000/(230 · 0,95) = 45,8 A."], resultado: "416 µF; la intensidad baja de 62,1 A a 45,8 A." },
    { enunciado: "Un motor trifásico de 15 kW y cos φ = 0,85 se conecta a 400 V. Calcula la intensidad de línea y las potencias reactiva y aparente.", pasos: ["I<sub>L</sub> = 15 000/(√3 · 400 · 0,85) = 25,5 A.", "S = √3 · 400 · 25,5 = 17 650 VA.", "sen φ = 0,527; Q = 17 650 · 0,527 = 9 300 var."], resultado: "25,5 A, 17,65 kVA y 9,3 kvar." },
    { enunciado: "Se transportan 10 MW por una línea de 2 Ω de resistencia. Compara las pérdidas a 20 kV y a 400 kV (cos φ = 1).", pasos: ["A 20 kV: I = 500 A; P<sub>p</sub> = 500² · 2 = 500 kW (5 %).", "A 400 kV: I = 25 A; P<sub>p</sub> = 25² · 2 = 1 250 W (0,0125 %).", "Relación: (400/20)² = 400."], resultado: "Las pérdidas son 400 veces menores a 400 kV." },
  ],
  errores: [
    "Sumar aritméticamente tensiones o intensidades desfasadas: en alterna se suman como fasores.",
    "Confundir el valor máximo con el eficaz: los 230 V de la red son eficaces; el pico es 325 V.",
    "Olvidar que X<sub>L</sub> y X<sub>C</sub> dependen de la frecuencia: en continua, la bobina es un cortocircuito y el condensador un circuito abierto.",
    "Calcular la potencia activa como V·I sin el factor de potencia: P = V·I·cos φ.",
    "Usar la tensión de fase en la fórmula P = √3·V·I·cos φ: va con la tensión de línea.",
    "Pensar que el transformador funciona en continua: necesita flujo variable, solo funciona en alterna.",
  ],
  ejercicios: [
    B("Una tensión alterna tiene 170 V de pico y 60 Hz. Calcula su valor eficaz, su periodo y su pulsación.", "V<sub>ef</sub> = 120,2 V; T = 16,7 ms; ω = 377 rad/s."),
    B("¿A qué velocidad debe girar un alternador de 4 polos (p = 2) para dar 50 Hz?", "n = 60 · 50/2 = 1 500 rpm."),
    B("Calcula la reactancia de una bobina de 50 mH a 50 Hz y a 1 kHz.", "15,7 Ω y 314,2 Ω."),
    B("Calcula la reactancia de un condensador de 22 µF a 50 Hz.", "X<sub>C</sub> = 1/(314,16 · 22 · 10<sup>−6</sup>) = 144,7 Ω."),
    B("Pasa a forma polar 3 + j4 y a forma binómica 10∠30°.", "5∠53,1°; 8,66 + j5."),
    B("Un circuito tiene R = 30 Ω y X<sub>L</sub> = 40 Ω en serie. Calcula |Z|, φ y la intensidad a 230 V.", "|Z| = 50 Ω; φ = 53,1°; I = 4,6 A."),
    B("¿Cómo es el desfase de la intensidad respecto a la tensión en una resistencia, una bobina y un condensador?", "En fase; retrasada 90°; adelantada 90°."),
    B("Un receptor de 230 V absorbe 5 A con cos φ = 0,8. Calcula P, Q y S.", "S = 1 150 VA; P = 920 W; Q = 690 var."),
    B("¿Qué tensión hay entre fase y neutro en una red trifásica de 400 V?", "400/√3 = 231 V."),
    B("Un transformador tiene 2 000 espiras en el primario y 100 en el secundario. Si el primario recibe 230 V, ¿qué tensión da el secundario?", "V₂ = 230 · 100/2 000 = 11,5 V."),
    B("¿Qué protege un interruptor diferencial y a partir de qué corriente de fuga actúa en una vivienda?", "Protege a las personas frente a contactos indirectos (fugas a tierra). Actúa con 30 mA."),
    B("Calcula la intensidad de una plancha de 2 300 W (resistiva) a 230 V.", "I = 10 A (cos φ = 1)."),
    M("Un circuito RL serie (R = 20 Ω, L = 0,1 H) se conecta a 230 V y 50 Hz. Calcula Z, I, φ, V<sub>R</sub> y V<sub>L</sub>.", "X<sub>L</sub> = 31,4 Ω; |Z| = 37,2 Ω; φ = 57,5°; I = 6,18 A; V<sub>R</sub> = 123,6 V; V<sub>L</sub> = 194,1 V."),
    M("Un circuito RC serie (R = 100 Ω, C = 20 µF) a 230 V y 50 Hz. Calcula Z, I y el desfase.", "X<sub>C</sub> = 159,2 Ω; |Z| = 188 Ω; I = 1,22 A; φ = −57,9° (capacitivo, I adelantada)."),
    M("Calcula la frecuencia de resonancia de un circuito con L = 10 mH y C = 1 µF. ¿Qué intensidad circula en resonancia si R = 5 Ω y V = 10 V?", "f₀ = 1/(2π · √(10<sup>−8</sup>)) = 1 592 Hz. I = 10/5 = 2 A."),
    M("¿Qué condensador hay que poner en serie con una bobina de 0,5 H para que el circuito resuene a 50 Hz?", "C = 1/(ω² · L) = 1/(98 696 · 0,5) = 20,3 µF."),
    M("Una resistencia de 46 Ω y una bobina pura de X<sub>L</sub> = 46 Ω están en paralelo a 230 V. Calcula la intensidad de cada rama y la total.", "I<sub>R</sub> = 5 A en fase; I<sub>L</sub> = 5 A retrasada 90°. I = √50 = 7,07 A retrasada 45°."),
    M("Un taller tiene en monofásico 230 V: un horno de 3 kW (cos φ = 1) y un motor de 2 kW (cos φ = 0,75). Calcula P, Q, S, cos φ total y la intensidad.", "P = 5 000 W; Q = 2 000 · tg(41,4°) = 1 764 var; S = 5 302 VA; cos φ = 0,943; I = 23,1 A."),
    M("En el taller anterior, ¿qué condensador lleva el cos φ a 1? ¿Cuál sería la intensidad?", "Q<sub>C</sub> = 1 764 var; C = 1 764/(314,16 · 230²) = 106 µF. I = 5 000/230 = 21,7 A."),
    M("Una instalación consume 50 kW con cos φ = 0,8. ¿Qué potencia reactiva de condensadores hace falta para llegar a 0,98?", "tg φ₁ = 0,75; tg φ₂ = 0,203. Q<sub>C</sub> = 50 · 0,547 = 27,3 kvar."),
    M("Tres resistencias de 40 Ω se conectan a una red de 400 V en estrella y luego en triángulo. Calcula la intensidad de línea y la potencia en cada caso.", "Estrella: I = 230,9/40 = 5,77 A; P = 3 · 230,9 · 5,77 = 4 000 W. Triángulo: I<sub>f</sub> = 10 A; I<sub>L</sub> = 17,3 A; P = 12 000 W."),
    M("Un motor trifásico de 400 V absorbe 20 A con cos φ = 0,82 y tiene un rendimiento del 88 %. Calcula la potencia absorbida y la útil.", "P<sub>abs</sub> = √3 · 400 · 20 · 0,82 = 11 362 W; P<sub>útil</sub> = 10 000 W."),
    M("Un transformador de 20 kV/400 V alimenta una carga de 160 kVA. Calcula las intensidades del primario y del secundario (trifásico, ideal).", "I₂ = 160 000/(√3 · 400) = 231 A; I₁ = 160 000/(√3 · 20 000) = 4,62 A."),
    A("Un circuito serie con R = 10 Ω, L = 50 mH y C = 200 µF se alimenta a 100 V. Calcula la intensidad a 50 Hz y a la frecuencia de resonancia, y la tensión en el condensador en resonancia.", "50 Hz: X<sub>L</sub> = 15,7 Ω, X<sub>C</sub> = 15,9 Ω, |Z| ≈ 10 Ω, I ≈ 10 A (casi resonante). f₀ = 1/(2π · √(10<sup>−5</sup>)) = 50,3 Hz; I = 10 A; X<sub>C</sub> = 15,8 Ω → V<sub>C</sub> = 158 V, mayor que la de alimentación."),
    A("Resuelve con números complejos: Z<sub>1</sub> = 30 + j40 Ω en paralelo con Z<sub>2</sub> = 50 − j50 Ω a 230∠0° V. Calcula la intensidad total y el factor de potencia.", "I₁ = 230/(50∠53,1°) = 4,6∠−53,1° = 2,76 − j3,68. I₂ = 230/(70,7∠−45°) = 3,25∠45° = 2,30 + j2,30. I = 5,06 − j1,38 = 5,25∠−15,3° A. cos φ = 0,965 (inductivo)."),
    A("Una nave industrial trifásica de 400 V tiene 60 kW con cos φ = 0,72. Calcula la batería de condensadores en triángulo para llegar a 0,95 (capacidad por fase) y la reducción de intensidad.", "tg φ₁ = 0,964; tg φ₂ = 0,329. Q<sub>C</sub> = 60 · 0,635 = 38,1 kvar. Por fase: 12,7 kvar a 400 V → C = 12 700/(314,16 · 400²) = 253 µF. I₁ = 120,3 A; I₂ = 91,2 A (24 % menos)."),
    A("Un motor trifásico de 30 kW, 400 V, cos φ = 0,86 tiene una intensidad de arranque directo de 7 veces la nominal. Calcula la intensidad de arranque en directo y en estrella-triángulo.", "I<sub>n</sub> = 30 000/(√3 · 400 · 0,86) = 50,4 A. Directo: 352 A. Estrella-triángulo: un tercio, 117 A."),
    A("Una línea monofásica de 50 m (ida y vuelta 100 m) de cobre de 2,5 mm² (ρ = 0,018 Ω·mm²/m) alimenta 3 kW a 230 V con cos φ = 0,9. Calcula la caída de tensión y las pérdidas. ¿Cumple el límite del 3 %?", "R = 0,018 · 100/2,5 = 0,72 Ω; I = 14,5 A. ΔV ≈ I · R · cos φ = 9,4 V (4,1 %): no cumple; hace falta 4 mm² (5,9 V, 2,6 %). Pérdidas con 2,5 mm²: 151 W."),
    A("Un generador eólico produce 2 MW a 690 V (trifásico, cos φ = 1). Calcula la intensidad y justifica por qué se eleva a 20 kV en un transformador en la propia torre.", "I = 2 · 10⁶/(√3 · 690) = 1 673 A. A 20 kV: 57,7 A. Con 29 veces menos intensidad, las pérdidas y la sección de los cables hasta la subestación se reducen enormemente (pérdidas 840 veces menores)."),
    A("Una vivienda tiene un contrato de 5,75 kW a 230 V. Si conecta a la vez un horno (2,5 kW), una lavadora (2 kW, cos φ = 0,8) y un aire acondicionado (1,2 kW, cos φ = 0,85), ¿saltará el limitador (25 A)?", "P = 5,7 kW; Q = 1,5 + 0,744 = 2,24 kvar; S = 6,12 kVA; I = 26,6 A > 25 A: saltaría."),
    A("Diseña una experiencia para medir el desfase de un circuito RC con un osciloscopio de dos canales y explica cómo se calcula φ a partir de la pantalla.", "Canal 1: tensión total; canal 2: tensión en la resistencia (proporcional a I). Se mide el desplazamiento horizontal Δt entre los pasos por cero y el periodo T: φ = 360° · Δt/T. Se compara con arctg(X<sub>C</sub>/R)."),
  ],
  quiz: [
    q4("La frecuencia de la red europea es…", ["60 Hz", "50 Hz", "100 Hz", "230 Hz"], 1, "T = 20 ms."),
    q4("El valor eficaz de una senoide es…", ["Vmáx·√2", "Vmáx/√2", "Vmáx/2", "2Vmáx/π"], 1, "≈ 0,707·Vmáx."),
    q4("El valor de pico de la red de 230 V es…", ["230 V", "325 V", "400 V", "162 V"], 1, "230·√2."),
    q4("En una resistencia pura, la intensidad…", ["se adelanta 90°", "se retrasa 90°", "está en fase", "se anula"], 2, "Sin desfase."),
    q4("En una bobina pura, la intensidad…", ["se adelanta 90°", "se retrasa 90°", "está en fase", "es nula"], 1, "V antes que I."),
    q4("La reactancia inductiva es…", ["1/(ωL)", "ωL", "ωC", "L/ω"], 1, "Crece con f."),
    q4("La reactancia capacitiva es…", ["ωC", "1/(ωC)", "ωL", "C/ω"], 1, "Disminuye con f."),
    q4("En continua, un condensador se comporta como…", ["un cortocircuito", "un circuito abierto", "una resistencia", "una bobina"], 1, "X<sub>C</sub> infinita."),
    q4("La impedancia de un RLC serie es…", ["R + XL + XC", "√(R² + (XL − XC)²)", "R·X", "R/X"], 1, "Módulo."),
    q4("Si XL > XC, el circuito es…", ["capacitivo", "inductivo", "resistivo", "resonante"], 1, "I retrasada."),
    q4("En resonancia serie…", ["Z es máxima", "Z = R e I es máxima", "I = 0", "φ = 90°"], 1, "XL = XC."),
    q4("La frecuencia de resonancia es…", ["1/(2π√(LC))", "2π√(LC)", "1/(LC)", "√(L/C)"], 0, "f₀."),
    q4("La potencia activa se mide en…", ["VA", "var", "W", "Wh"], 2, "Vatios."),
    q4("La potencia reactiva se mide en…", ["W", "var", "VA", "J"], 1, "Voltamperios reactivos."),
    q4("El factor de potencia es…", ["Q/S", "P/S", "S/P", "P/Q"], 1, "cos φ."),
    q4("El factor de potencia de una carga inductiva se corrige con…", ["bobinas en serie", "condensadores en paralelo", "resistencias", "fusibles"], 1, "Aportan reactiva capacitiva."),
    q4("En estrella, la tensión de línea es…", ["igual a la de fase", "√3 veces la de fase", "3 veces la de fase", "la mitad"], 1, "400 = √3·231."),
    q4("La potencia trifásica es…", ["3·VL·IL·cos φ", "√3·VL·IL·cos φ", "VL·IL", "√3·Vf·If"], 1, "Con magnitudes de línea."),
    q4("En un transformador ideal, V₁/V₂ =", ["N₂/N₁", "N₁/N₂", "I₁/I₂", "1"], 1, "Relación de espiras."),
    q4("La energía se transporta en alta tensión para…", ["aumentar la intensidad", "reducir las pérdidas I²R", "aumentar la frecuencia", "ahorrar transformadores"], 1, "Menos intensidad."),
  ],
  examen: [
    q4("Una senoide de 311 V de pico tiene un valor eficaz de…", ["220 V", "311 V", "440 V", "155 V"], 0, "311/√2."),
    q4("X<sub>L</sub> de 0,2 H a 50 Hz:", ["10 Ω", "62,8 Ω", "31,4 Ω", "314 Ω"], 1, "314,16 · 0,2."),
    q4("R = 6 Ω y X = 8 Ω en serie. |Z| =", ["14 Ω", "10 Ω", "2 Ω", "48 Ω"], 1, "√(36 + 64)."),
    q4("Con el circuito anterior a 100 V, cos φ =", ["0,6", "0,8", "0,75", "1"], 0, "6/10."),
    q4("V = 230 V, I = 10 A, cos φ = 0,8. P =", ["2 300 W", "1 840 W", "1 380 W", "2 875 W"], 1, "230 · 10 · 0,8."),
    q4("P = 4 kW y Q = 3 kvar. S =", ["7 kVA", "5 kVA", "1 kVA", "12 kVA"], 1, "√(16 + 9)."),
    q4("Motor trifásico a 400 V, 10 A, cos φ = 0,866. P ≈", ["6 kW", "3,5 kW", "10,4 kW", "4 kW"], 0, "√3 · 400 · 10 · 0,866."),
    q4("Transformador 230/23 V. Si I₂ = 5 A, I₁ =", ["50 A", "0,5 A", "5 A", "23 A"], 1, "Relación 10."),
  ],
  feynman: ["Qué es el valor eficaz y por qué la red es de 230 V", "Por qué una bobina retrasa la corriente y un condensador la adelanta", "Qué es la impedancia y cómo se calcula en un RLC serie", "Por qué conviene corregir el factor de potencia", "Por qué la electricidad se transporta en alta tensión"],
  glosario: [
    ["Corriente alterna", "Corriente cuyo sentido y valor cambian periódicamente, normalmente de forma senoidal."],
    ["Frecuencia", "Número de ciclos por segundo, en hercios."],
    ["Valor eficaz", "Valor de continua que produciría el mismo calor; en una senoide, Vmáx/√2."],
    ["Fasor", "Vector que representa una magnitud senoidal con su valor eficaz y su fase."],
    ["Desfase", "Diferencia de fase entre dos magnitudes senoidales de la misma frecuencia."],
    ["Reactancia inductiva", "Oposición de una bobina a la corriente alterna: XL = ωL."],
    ["Reactancia capacitiva", "Oposición de un condensador a la corriente alterna: XC = 1/(ωC)."],
    ["Impedancia", "Oposición total de un circuito a la corriente alterna, en ohmios."],
    ["Admitancia", "Inverso de la impedancia, en siemens."],
    ["Resonancia", "Situación en la que XL = XC y el circuito se comporta como resistivo."],
    ["Potencia activa", "Potencia que se transforma en trabajo o calor, en vatios."],
    ["Potencia reactiva", "Potencia que intercambian bobinas y condensadores con la red, en var."],
    ["Potencia aparente", "Producto de la tensión y la intensidad eficaces, en VA."],
    ["Factor de potencia", "Cociente P/S, igual a cos φ en senoidal."],
    ["Sistema trifásico", "Tres tensiones de igual valor y frecuencia desfasadas 120°."],
    ["Tensión de línea", "Tensión entre dos fases de un sistema trifásico."],
    ["Transformador", "Máquina estática que cambia el valor de una tensión alterna."],
    ["Interruptor diferencial", "Dispositivo que desconecta al detectar una fuga de corriente a tierra."],
  ],
  situacion: {
    titulo: "La factura de la luz del taller",
    reto: "Vuestro equipo analizará la instalación eléctrica del taller de tecnología (o de una nave real): inventariará los receptores, calculará potencias, intensidades y factor de potencia, comprobará si las protecciones son adecuadas y propondrá mejoras que reduzcan la factura y las pérdidas.",
    pasos: [
      "Haced un inventario de los receptores con su potencia, su tensión, su factor de potencia y sus horas de uso.",
      "Calculad las potencias activa, reactiva y aparente totales y el factor de potencia de la instalación.",
      "Medid con una pinza amperimétrica o un analizador de redes algunos consumos y comparadlos con los cálculos.",
      "Dimensionad una batería de condensadores para llegar a cos φ = 0,95 y calculad la reducción de intensidad.",
      "Proponed mejoras (iluminación LED, motores eficientes, apagado automático) y estimad el ahorro anual.",
    ],
    producto: "Un informe con el inventario, los cálculos, las mediciones y las propuestas de mejora, y un esquema unifilar del cuadro eléctrico.",
    evaluacion: [
      "Calcula correctamente potencias, intensidades y factor de potencia.",
      "Mide con seguridad y siguiendo las reglas de oro.",
      "Dimensiona la corrección del factor de potencia y justifica sus beneficios.",
      "Propone mejoras viables con estimaciones económicas.",
    ],
  },
  mapa: mapaB("CORRIENTE ALTERNA", [
    ["Señal", "Vef = Vmáx/√2 · ω = 2πf", "var(--pen)"],
    ["Circuitos", "XL · XC · Z · resonancia", "var(--red)"],
    ["Potencias", "P · Q · S · cos φ", "var(--leaf)"],
    ["Trifásica", "estrella · triángulo · transformador", "var(--inf)"],
  ]),
  tarjetas: [
    ["Valor eficaz", "Vef = Vmáx / √2"],
    ["Pulsación", "ω = 2π·f ; T = 1/f"],
    ["Reactancia inductiva", "XL = ω·L (I retrasa 90°)"],
    ["Reactancia capacitiva", "XC = 1/(ω·C) (I adelanta 90°)"],
    ["Impedancia serie", "|Z| = √(R² + (XL − XC)²)"],
    ["Desfase", "tg φ = X/R ; cos φ = R/|Z|"],
    ["Resonancia", "f₀ = 1/(2π√(LC))"],
    ["Potencias", "P = VI cos φ ; Q = VI sen φ ; S = VI"],
    ["Corrección del cos φ", "C = P(tg φ₁ − tg φ₂)/(ωV²)"],
    ["Estrella", "VL = √3·Vf ; IL = If"],
    ["Potencia trifásica", "P = √3·VL·IL·cos φ"],
    ["Transformador", "V₁/V₂ = N₁/N₂ = I₂/I₁"],
  ],
  familias: [
    "Buscad en las placas de características de los electrodomésticos la tensión, la frecuencia y la potencia.",
    "Mirad la factura de la luz: ¿qué potencia tenéis contratada? ¿Aparece energía reactiva?",
    "Localizad el cuadro eléctrico de casa y señalad el interruptor general, el diferencial y los magnetotérmicos (sin tocar el interior).",
    "Contad cuántos transformadores (cargadores) hay en casa y comprobad cuáles se calientan enchufados sin uso.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Sistemas eléctricos y electrónicos»: circuitos de corriente alterna; magnitudes y valores característicos; representación fasorial; receptores R, L y C; impedancia; circuitos RLC; potencias y factor de potencia; sistemas trifásicos; transformador; medidas y seguridad eléctrica.`,
    ideas: [
      "Simulación de circuitos RLC en un simulador en línea con osciloscopio virtual para ver desfases.",
      "Medida del factor de potencia de distintos aparatos con un medidor de enchufe.",
      "Cálculo con hoja de cálculo de la batería de condensadores de una instalación real.",
      "Visita a una subestación o a un centro de transformación con un técnico de la distribuidora.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Reglamento Electrotécnico para Baja Tensión (REBT), Real Decreto 842/2002", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099" },
    { t: "Corriente alterna, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Corriente_alterna" },
    { t: "Factor de potencia, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Factor_de_potencia" },
  ],
  revisado: "2026-11-21",
};
