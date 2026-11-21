// Tecnología e Ingeniería II 2º Bachillerato · Tema 11. Nivel libro. Dibujos propios en SVG.
const { marco, T, flecha, ficha, pasos, compara, rejilla, ciclo, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU, uid } = require("./_bach2-ti");

// Traza digital: niveles 0/1 por intervalos de ancho w desde x0.
const traza = (x0, yAlto, yBajo, w, bits, c) => { let d = `M${x0} ${bits[0] ? yAlto : yBajo}`; bits.forEach((b, i) => { const y = b ? yAlto : yBajo; d += ` V ${y} H ${x0 + (i + 1) * w}`; }); return `<path d="${d}" fill="none" stroke="${c}" stroke-width="2.4"/>`; };

// Señal de reloj con flancos.
const relojSVG = (() => {
  const id = uid("rl");
  return marco("Señal de reloj: una onda cuadrada con su periodo; el flanco de subida es el paso de 0 a 1 y el flanco de bajada, de 1 a 0", `
  ${traza(30, 50, 100, 25, [0, 1, 0, 1, 0, 1, 0, 1], "var(--pen)")}
  <path d="M55 100 V 50" stroke="var(--red)" stroke-width="3.2" marker-end="url(#${id})"/><path d="M80 50 V 100" stroke="var(--leaf)" stroke-width="3.2" marker-end="url(#${id})"/>
  ${T(55, 120, "flanco de subida ↑", { fs: 10, b: true, c: "var(--red)", a: "start" })}${T(80, 40, "flanco de bajada ↓", { fs: 10, b: true, c: "var(--leaf)", a: "start" })}
  <path d="M105 140 H 155" stroke="var(--ink)" stroke-width="1.6"/><path d="M105 134 v 12 M155 134 v 12" stroke="var(--ink)" stroke-width="1.6"/>${T(130, 158, "periodo T", { fs: 10.5, b: true })}
  ${T(130, 176, "f = 1/T (Hz)", { fs: 11, b: true, c: "var(--muted)" })}${T(18, 54, "1", { fs: 10, c: "var(--muted)" })}${T(18, 104, "0", { fs: 10, c: "var(--muted)" })}`, flecha(id, "var(--ink)"));
})();

// Biestable RS con dos NOR.
const rsSVG = marco("Biestable RS asíncrono construido con dos puertas NOR realimentadas: la salida de cada una entra en la otra", `
  <rect x="96" y="30" width="44" height="40" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${T(118, 55, "≥1", { fs: 12, b: true })}<circle cx="144" cy="50" r="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
  <rect x="96" y="110" width="44" height="40" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${T(118, 135, "≥1", { fs: 12, b: true })}<circle cx="144" cy="130" r="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
  <path d="M40 40 H 96 M40 140 H 96" stroke="var(--ink)" stroke-width="1.8"/>${T(32, 44, "R", { fs: 12, b: true, c: "var(--red)", a: "end" })}${T(32, 144, "S", { fs: 12, b: true, c: "var(--leaf)", a: "end" })}
  <path d="M148 50 H 210 M148 130 H 210" stroke="var(--ink)" stroke-width="1.8"/>${T(218, 54, "Q", { fs: 12, b: true, a: "start" })}${T(218, 134, "Q̄", { fs: 12, b: true, a: "start" })}
  <path d="M176 50 V 82 L 80 98 V 120 H 96" fill="none" stroke="var(--pen)" stroke-width="1.8"/><path d="M176 130 V 98 L 80 82 V 60 H 96" fill="none" stroke="var(--pen)" stroke-width="1.8"/>
  <circle cx="176" cy="50" r="3" fill="var(--ink)"/><circle cx="176" cy="130" r="3" fill="var(--ink)"/>
  ${T(130, 174, "realimentación = memoria", { fs: 11, b: true, c: "var(--pen)" })}`);

// Símbolos de biestables síncronos.
const simbolosSVG = marco("Símbolos de los biestables síncronos D, JK y T, con entrada de reloj marcada con un triángulo y salidas Q y Q negada", [
  ["D", ["D"], 18], ["JK", ["J", "K"], 102], ["T", ["T"], 186],
].map(([n, ent, x]) => {
  const y = 40, h = 90;
  const pins = ent.map((e, i) => { const yy = ent.length === 1 ? y + 25 : y + 20 + i * 50; return `<path d="M${x - 10} ${yy} H ${x}" stroke="var(--ink)" stroke-width="1.8"/>${T(x + 6, yy + 4, e, { fs: 11, b: true, a: "start" })}`; }).join("");
  return `<rect x="${x}" y="${y}" width="56" height="${h}" rx="4" fill="var(--card)" stroke="var(--pen)" stroke-width="2.2"/>${pins}<path d="M${x} ${y + 40} l 8 5 l -8 5" fill="none" stroke="var(--ink)" stroke-width="1.6"/><path d="M${x - 10} ${y + 45} H ${x}" stroke="var(--ink)" stroke-width="1.8"/>${T(x + 12, y + 49, "C", { fs: 9.5, c: "var(--muted)", a: "start" })}
  <path d="M${x + 56} ${y + 20} h 10 M${x + 56} ${y + 70} h 10" stroke="var(--ink)" stroke-width="1.8"/>${T(x + 50, y + 24, "Q", { fs: 11, b: true, a: "end" })}${T(x + 50, y + 74, "Q̄", { fs: 11, b: true, a: "end" })}${T(x + 28, y + h + 22, n, { fs: 12, b: true, c: "var(--pen)" })}`;
}).join("") + T(130, 22, "disparados por flanco de reloj", { fs: 11, b: true }));

// Cronograma de un contador asíncrono de 3 bits.
const cronoSVG = (() => {
  const w = 12.5, clk = Array.from({ length: 16 }, (_, i) => (i % 2 === 0 ? 1 : 0));
  const q = (k) => Array.from({ length: 16 }, (_, i) => (Math.floor((i + 1) / 2) >> k) & 1);
  return marco("Cronograma de un contador asíncrono de tres bits: Q0 cambia en cada flanco de bajada del reloj, Q1 cada dos pulsos y Q2 cada cuatro, contando de 0 a 7", `
  ${[["CLK", 34, clk, "var(--muted)"], ["Q0", 74, q(0), "var(--pen)"], ["Q1", 114, q(1), "var(--red)"], ["Q2", 154, q(2), "var(--leaf)"]].map(([n, y, b, c]) => `${T(34, y + 4, n, { fs: 10.5, b: true, c, a: "end" })}${traza(42, y - 12, y + 10, w, b, c)}`).join("")}
  ${[0, 1, 2, 3, 4, 5, 6, 7].map((v) => T(42 + (v === 0 ? 0.5 : 2 * v) * w, 176, String(v), { fs: 9.5, b: true, c: "var(--muted)" })).join("")}`);
})();

// Registro de desplazamiento.
const registroSVG = (() => {
  const id = uid("rg");
  return marco("Registro de desplazamiento de cuatro bits con biestables D en cadena: en cada pulso de reloj cada bit pasa al biestable siguiente", `
  ${[0, 1, 2, 3].map((i) => { const x = 22 + i * 58; return `<rect x="${x}" y="54" width="40" height="52" rx="4" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>${T(x + 8, 74, "D", { fs: 10.5, b: true, a: "start" })}${T(x + 34, 74, "Q", { fs: 10.5, b: true, a: "end" })}<path d="M${x} 92 l 7 4 l -7 4" fill="none" stroke="var(--ink)" stroke-width="1.4"/><path d="M${x + 20} 106 V 134" stroke="var(--muted)" stroke-width="1.4"/>${T(x + 20, 46, `Q${3 - i}`, { fs: 10, b: true, c: "var(--red)" })}${i < 3 ? `<path d="M${x + 40} 70 H ${x + 58}" stroke="var(--ink)" stroke-width="1.8" marker-end="url(#${id})"/>` : `<path d="M${x + 40} 70 H ${x + 52}" stroke="var(--ink)" stroke-width="1.8"/>`}`; }).join("")}
  <path d="M10 70 H 22" stroke="var(--ink)" stroke-width="1.8"/>
  <path d="M42 134 H 216" stroke="var(--muted)" stroke-width="1.4"/>${T(130, 152, "reloj común (CLK)", { fs: 10, b: true, c: "var(--muted)" })}
  ${T(130, 174, "entrada serie: un bit por pulso", { fs: 11, b: true, c: "var(--pen)" })}`, flecha(id, "var(--ink)"));
})();

module.exports = {
  materia: "Tecnología e Ingeniería II",
  curso: "2-bachillerato",
  titulo: "Electrónica digital secuencial",
  minutos: 120,
  objetivos: [
    "Distinguir los circuitos secuenciales de los combinacionales y explicar el papel del reloj",
    "Analizar el funcionamiento de los biestables RS, D, JK y T con tablas y cronogramas",
    "Diseñar y analizar contadores asíncronos y síncronos, y divisores de frecuencia",
    "Explicar el funcionamiento de los registros de almacenamiento y de desplazamiento",
    "Describir sistemas mediante máquinas de estados finitos",
    "Calcular temporizadores con el 555 y conocer la estructura de memorias y microcontroladores",
  ],
  claves: ["circuito secuencial", "estado", "reloj", "flanco", "biestable RS", "biestable D", "biestable JK", "biestable T", "cronograma", "contador asíncrono", "contador síncrono", "módulo", "divisor de frecuencia", "registro de desplazamiento", "máquina de estados", "temporizador 555", "memoria", "microcontrolador"],
  pregunta: {
    texto: "Un mando a distancia de garaje tiene un solo botón: la primera pulsación abre la puerta y la segunda la cierra. ¿Cómo «sabe» el circuito qué tiene que hacer si recibe exactamente la misma señal?",
    respuesta: "Porque es un circuito <mark>secuencial</mark>: tiene <b>memoria</b>. Su salida no depende solo de la entrada actual (el pulso), sino también de su <b>estado</b> anterior (abierta o cerrada). El elemento más simple capaz de recordar un bit es el <b>biestable</b>; un biestable de tipo T cambia de estado con cada pulso, que es exactamente lo que hace el mando.",
  },
  lectura: {
    titulo: "El reloj que marca el ritmo de los chips",
    html: `<p>Cuando se dice que un procesador funciona a 3 GHz, se habla de la frecuencia de su <b>reloj</b>: una señal cuadrada que sube y baja tres mil millones de veces por segundo. En cada flanco, miles de millones de biestables leen sus entradas y cambian de estado a la vez, como los músicos de una orquesta que siguen la batuta del director.</p><p>El primer ordenador electrónico de propósito general, el ENIAC (1946), funcionaba a 100 kHz y usaba unas 18 000 válvulas de vacío. El Intel 4004, el primer microprocesador comercial (1971), tenía 2 300 transistores y un reloj de 740 kHz. Hoy, un procesador de móvil integra más de 15 000 millones de transistores y su reloj es miles de veces más rápido.</p><p>Aumentar la frecuencia tiene un límite: cada vez que los transistores conmutan consumen energía y se calientan. Por eso, desde hace años, en lugar de subir la frecuencia se añaden más núcleos que trabajan en paralelo. En este tema conocerás los circuitos secuenciales, desde el biestable hasta el microcontrolador.</p>`,
  },
  bloques: [
    bloque({ h: "11.1 Circuitos secuenciales y reloj", p: [
      "En un circuito <b>combinacional</b>, las salidas dependen solo de las entradas en cada instante. En un <mark>circuito secuencial</mark>, las salidas dependen de las entradas y del <b>estado</b> interno, que guarda información de lo ocurrido antes: el circuito tiene <b>memoria</b>. Se consigue mediante la <b>realimentación</b>, llevando algunas salidas de nuevo a las entradas. Son secuenciales los contadores, los registros, las memorias, los semáforos, las máquinas expendedoras o los procesadores.",
      "Los circuitos secuenciales <b>asíncronos</b> cambian de estado en cuanto cambian sus entradas. Los <b>síncronos</b> solo cambian en momentos determinados por una señal de <mark>reloj</mark> (CLK): una onda cuadrada de frecuencia fija. Así, todos los elementos cambian a la vez y se evitan los problemas debidos a los distintos retardos. Casi todos los sistemas digitales complejos son síncronos.",
      "La señal de reloj tiene un <b>periodo</b> T y una <b>frecuencia</b> f = 1/T. Se llama <b>flanco de subida</b> (o positivo) al paso de 0 a 1 y <b>flanco de bajada</b> (o negativo) al paso de 1 a 0. Los circuitos pueden reaccionar al nivel de la señal o, más habitualmente, solo a uno de sus flancos. El reloj lo genera un oscilador, normalmente controlado por un <b>cristal de cuarzo</b> muy estable (como el de 16 MHz de una placa Arduino).",
    ], svg: relojSVG }),
    bloque({ h: "11.2 El biestable RS", p: [
      "El <mark>biestable</mark> (en inglés, <i>flip-flop</i> o <i>latch</i>) es el circuito secuencial más sencillo: tiene dos estados estables y puede almacenar <b>un bit</b>. Tiene dos salidas complementarias, Q y Q̄.",
      "El <b>biestable RS</b> asíncrono se construye con dos puertas NOR (o NAND) realimentadas: la salida de cada una es una entrada de la otra. Tiene dos entradas: <b>S</b> (<i>set</i>, poner a 1) y <b>R</b> (<i>reset</i>, poner a 0). Con NOR, su funcionamiento es: si S = 1 y R = 0, Q pasa a 1; si S = 0 y R = 1, Q pasa a 0; si S = 0 y R = 0, Q <b>mantiene</b> su valor anterior (memoria); y si S = 1 y R = 1, las dos salidas valen 0, lo que contradice que sean complementarias: es la combinación <b>prohibida</b>.",
      "Su comportamiento se describe con la <b>tabla de funcionamiento</b>, en la que Q<sub>t</sub> es el estado actual y Q<sub>t+1</sub> el siguiente. Una aplicación clásica es el <b>circuito antirrebotes</b>: cuando se pulsa un interruptor mecánico, sus contactos rebotan varias veces en unos milisegundos, y un contador registraría varias pulsaciones; un biestable RS con un conmutador fija el estado en el primer contacto. Otra es la <b>marcha-paro</b> de un motor: el pulsador de marcha hace S y el de paro hace R; si se pulsan los dos, debe prevalecer el paro por seguridad.",
    ], svg: rsSVG }),
    bloque({ h: "11.3 Biestables síncronos y disparo por flanco", p: [
      "Un <b>biestable síncrono</b> tiene una entrada de reloj (C o CLK) además de sus entradas de datos. Solo hace caso a las entradas de datos cuando lo permite el reloj. En los primeros diseños, mientras el reloj valía 1 (disparo por nivel); hoy, casi siempre, solo en el instante del <mark>flanco</mark> activo (disparo por flanco). En los símbolos, el disparo por flanco se indica con un pequeño triángulo en la entrada de reloj, y si es por flanco de bajada se añade un círculo.",
      "Los biestables suelen tener también entradas <b>asíncronas</b> de <b>puesta a uno</b> (PRESET o SET) y <b>puesta a cero</b> (CLEAR o RESET), que actúan inmediatamente, sin esperar al reloj, y tienen prioridad. Se usan para fijar el estado inicial del circuito al encenderlo.",
      "Para analizar un circuito secuencial se dibuja un <b>cronograma</b>: un diagrama de tiempos con la evolución del reloj, de las entradas y de las salidas. En él se ve que la salida solo cambia en los flancos activos, aunque las entradas cambien en cualquier momento. Para que el biestable funcione correctamente, la entrada de datos debe mantenerse estable un pequeño tiempo antes del flanco (tiempo de establecimiento) y después de él (tiempo de mantenimiento).",
    ], svg: simbolosSVG, video: V("ds-flipflop", "Flip-flop RS, D, JK y T", "biestables flip flop RS D JK T") }),
    bloque({ h: "11.4 El biestable D", p: [
      "El <mark>biestable D</mark> (de <i>data</i> o <i>delay</i>) tiene una sola entrada de datos D y la entrada de reloj. En cada flanco activo, la salida copia el valor de D: Q<sub>t+1</sub> = D. Entre flancos, mantiene el valor aunque D cambie. Así, almacena un bit y lo «congela» hasta el siguiente pulso. Elimina además la combinación prohibida del RS, porque internamente es un RS con S = D y R = D̄.",
      "Es el elemento básico de los <b>registros</b> y de las memorias estáticas de los procesadores. Por ejemplo, el integrado 74HC74 contiene dos biestables D disparados por flanco de subida, con PRESET y CLEAR. Varios biestables D con el mismo reloj forman un registro que guarda una palabra de varios bits.",
      "Otro uso es la <b>sincronización</b>: una señal que llega de un sensor en un momento cualquiera se pasa por un biestable D para que el resto del circuito la vea cambiar solo en los flancos de reloj. Y un biestable D con su entrada unida a Q̄ cambia de estado en cada flanco: divide la frecuencia del reloj entre 2.",
    ], svg: rejilla("Tabla del biestable D: en cada flanco activo de reloj la salida toma el valor de la entrada D; sin flanco, mantiene su estado", ["CLK", "D", "Q (t+1)"], [["↑", "0", "0"], ["↑", "1", "1"], ["sin flanco", "X", "Q (mantiene)"]], "var(--pen)") }),
    bloque({ h: "11.5 Los biestables JK y T", p: [
      "El <b>biestable JK</b> es el más versátil. Sus entradas J (equivalente a S) y K (equivalente a R) funcionan como en el RS, pero la combinación J = K = 1, que en el RS estaba prohibida, hace que la salida <b>cambie</b> de estado (basculación o <i>toggle</i>): Q<sub>t+1</sub> = Q̄<sub>t</sub>. Su ecuación característica es Q<sub>t+1</sub> = J·Q̄<sub>t</sub> + K̄·Q<sub>t</sub>.",
      "El <mark>biestable T</mark> (<i>toggle</i>) tiene una sola entrada T: si T = 0 mantiene el estado y si T = 1 cambia de estado en cada flanco. Se obtiene con un JK uniendo J y K. Con T = 1 permanentemente, la salida cambia en cada flanco de reloj, de modo que su frecuencia es la <b>mitad</b> de la del reloj: es un <b>divisor de frecuencia</b> por 2. Es exactamente lo que hace el mando de la puerta del garaje: cada pulso cambia el estado.",
      "Los biestables JK se usaban mucho para diseñar contadores síncronos (por ejemplo, el 74HC107 contiene dos JK disparados por flanco de bajada). Hoy, en los diseños con FPGA, se usa casi siempre el biestable D, y los demás se construyen añadiéndole lógica combinacional en la entrada.",
    ], svg: rejilla("Tabla del biestable JK: con J y K a cero mantiene, con J a uno pone a uno, con K a uno pone a cero y con los dos a uno cambia de estado", ["J", "K", "Q (t+1)"], [["0", "0", "Q (mantiene)"], ["0", "1", "0 (reset)"], ["1", "0", "1 (set)"], ["1", "1", "Q̄ (cambia)"]], "var(--red)"), video: V("ds-jk", "Flip-flop JK: cómo funciona", "biestable JK funcionamiento") }),
    bloque({ h: "11.6 Tablas de excitación", p: [
      "Para <b>analizar</b> un circuito con biestables se usan sus tablas de funcionamiento: dadas las entradas, ¿qué estado siguiente se produce? Para <b>diseñar</b> se necesita la pregunta inversa: si quiero pasar del estado Q<sub>t</sub> al Q<sub>t+1</sub>, ¿qué entradas debo aplicar? La respuesta está en las <mark>tablas de excitación</mark>.",
      "Para el <b>biestable D</b> es inmediata: D = Q<sub>t+1</sub>. Para el <b>T</b>: T = 1 si el estado debe cambiar y T = 0 si debe mantenerse (T = Q<sub>t</sub> ⊕ Q<sub>t+1</sub>). Para el <b>JK</b> hay indiferencias (X), que facilitan la simplificación: de 0 a 0, J = 0 y K = X; de 0 a 1, J = 1 y K = X; de 1 a 0, J = X y K = 1; de 1 a 1, J = X y K = 0.",
      "Por ejemplo, para pasar de 0 a 1 con un JK, sirven J = 1, K = 0 (poner a 1) y J = 1, K = 1 (cambiar): en ambos casos J = 1 y K da igual. Estas indiferencias hacen que las funciones de excitación de los JK sean, a menudo, más sencillas que las de los D. Con estas tablas y los mapas de Karnaugh del tema anterior se diseña cualquier contador o máquina de estados síncrona.",
    ], svg: rejilla("Tablas de excitación de los biestables D, T y JK: entradas necesarias para cada transición del estado actual al siguiente", ["Qt → Qt+1", "D · T", "J K"], [["0 → 0", "0 · 0", "0 X"], ["0 → 1", "1 · 1", "1 X"], ["1 → 0", "0 · 1", "X 1"], ["1 → 1", "1 · 0", "X 0"]], "var(--leaf)") }),
    bloque({ h: "11.7 Contadores asíncronos", p: [
      "Un <mark>contador</mark> es un circuito secuencial cuyos estados siguen una secuencia fija al recibir pulsos. El número de estados distintos se llama <b>módulo</b>. Con n biestables se puede contar hasta 2<sup>n</sup> estados (de 0 a 2<sup>n</sup> − 1).",
      "En un <b>contador asíncrono</b> (o de rizado), los biestables T (con T = 1) o JK (con J = K = 1) se conectan en cascada: el reloj externo solo entra en el primero, y la salida de cada biestable hace de reloj del siguiente. Si se disparan por flanco de bajada, el primero (Q<sub>0</sub>) cambia en cada pulso, el segundo cada dos, el tercero cada cuatro, y el conjunto cuenta en binario ascendente: 000, 001, 010… 111 y vuelta a 000. Cada salida tiene la mitad de frecuencia que la anterior: un contador de 4 bits con un reloj de 1 kHz da 500, 250, 125 y 62,5 Hz.",
      "Para contar hasta un módulo que no sea potencia de 2, se detecta el primer estado que no debe aparecer y se usa para <b>poner a cero</b> todos los biestables a través de sus entradas asíncronas de CLEAR. Por ejemplo, un contador de <b>décadas</b> (módulo 10, de 0 a 9) usa 4 biestables y una puerta NAND que detecta el 1010 (Q<sub>3</sub> = 1 y Q<sub>1</sub> = 1). Son sencillos, pero cada biestable añade su retardo, y durante los cambios aparecen brevemente estados falsos. Por eso, a frecuencias altas, se usan contadores síncronos.",
    ], svg: cronoSVG, video: V("ds-contadores", "Contadores en electrónica digital", "contadores asíncronos y síncronos") }),
    bloque({ h: "11.8 Contadores síncronos", p: [
      "En un <b>contador síncrono</b>, todos los biestables reciben el mismo reloj y cambian a la vez; una lógica combinacional decide, en cada momento, qué biestables deben cambiar. Son más rápidos y no producen estados transitorios falsos. Pueden contar en cualquier secuencia (ascendente, descendente, en código Gray o en una secuencia arbitraria).",
      "Su diseño sigue un método: 1) determinar el número de biestables (n tal que 2<sup>n</sup> ≥ módulo); 2) escribir la tabla de estados actual y siguiente; 3) con la tabla de excitación del biestable elegido, obtener sus entradas en cada transición; 4) simplificar cada función por Karnaugh, tomando los estados no usados como indiferentes; 5) dibujar el circuito. Por ejemplo, un contador binario ascendente síncrono con biestables T cumple T<sub>0</sub> = 1, T<sub>1</sub> = Q<sub>0</sub>, T<sub>2</sub> = Q<sub>0</sub>·Q<sub>1</sub>, T<sub>3</sub> = Q<sub>0</sub>·Q<sub>1</sub>·Q<sub>2</sub>: cada bit cambia cuando todos los anteriores valen 1.",
      "En la práctica se usan <b>contadores integrados</b> como el 74HC161 (binario de 4 bits síncrono con carga paralela), el 74HC190 (BCD ascendente/descendente) o el 4026 (contador de décadas con decodificador para display). Encadenando contadores de décadas se construyen relojes, cronómetros, frecuencímetros y contadores de piezas: para contar segundos de 00 a 59 se usa un contador de módulo 10 para las unidades y uno de módulo 6 para las decenas.",
    ], svg: pasos("Método de diseño de un contador síncrono: número de biestables, tabla de estados, tabla de excitación, simplificación por Karnaugh y circuito", ["n biestables: 2ⁿ ≥ módulo", "Tabla de estados", "Excitación (D, T o JK)", "Karnaugh → circuito"], "var(--pen)") }),
    bloque({ h: "11.9 Registros", p: [
      "Un <mark>registro</mark> es un grupo de biestables (normalmente D) con un reloj común, que almacena una palabra de n bits. En un <b>registro de almacenamiento</b> (o de entrada y salida en paralelo, PIPO), todos los bits se cargan a la vez en un flanco de reloj. Los procesadores tienen registros internos de 32 o 64 bits donde guardan los datos con los que operan.",
      "En un <b>registro de desplazamiento</b>, los biestables se conectan en cadena: la salida de cada uno es la entrada del siguiente. En cada pulso de reloj, todos los bits se desplazan una posición. Según cómo entren y salgan los datos, hay registros de entrada serie y salida serie (SISO), entrada serie y salida paralelo (SIPO), entrada paralelo y salida serie (PISO) y paralelo-paralelo (PIPO), y algunos pueden desplazar en los dos sentidos.",
      "Sus aplicaciones son muchas. La <b>conversión serie-paralelo</b> es la base de las comunicaciones serie (USB, UART, SPI): el emisor carga un byte en paralelo y lo envía bit a bit, y el receptor lo reconstruye. Por ejemplo, a 9 600 bit/s, un byte de 8 bits tarda 0,83 ms. El integrado 74HC595 (SIPO) permite controlar 8 LED o un display con solo tres patillas de un microcontrolador. Desplazar un número binario una posición a la izquierda equivale a <b>multiplicarlo por 2</b>, y a la derecha, a dividirlo entre 2. Y realimentando la última salida a la primera se obtienen <b>contadores en anillo</b>, útiles para secuencias de luces o motores paso a paso.",
    ], svg: registroSVG, video: V("ds-registros", "Registros en electrónica digital", "registro de desplazamiento") }),
    bloque({ h: "11.10 Máquinas de estados finitos", p: [
      "Muchos sistemas secuenciales se describen como una <mark>máquina de estados finitos</mark>: un número limitado de estados, unas <b>transiciones</b> entre ellos que se producen cuando se cumplen ciertas condiciones de las entradas, y unas salidas asociadas. Se representan con un <b>diagrama de estados</b>, en el que cada estado es un círculo y cada transición una flecha con la condición que la provoca.",
      "En una máquina de <b>Moore</b>, las salidas dependen solo del estado actual (se escriben dentro del círculo). En una máquina de <b>Mealy</b>, dependen del estado y de las entradas (se escriben en las flechas). Las de Moore son más sencillas de diseñar y más robustas; las de Mealy necesitan menos estados.",
      "Ejemplo: un <b>semáforo</b> sencillo tiene tres estados (verde, ámbar y rojo) que se suceden en ciclo, cada uno durante un tiempo determinado por un temporizador. Si se añade un pulsador para peatones, aparece una transición condicionada: del verde solo se pasa al ámbar si alguien ha pulsado y ha transcurrido el tiempo mínimo. Las máquinas de estados describen también máquinas expendedoras, ascensores, lavadoras, protocolos de comunicación y la lógica de los videojuegos, y se programan fácilmente en un autómata o un microcontrolador con una variable de estado y una estructura <i>switch</i>.",
    ], svg: ciclo("Diagrama de estados de un semáforo: verde, ámbar y rojo se suceden en ciclo cuando termina el tiempo de cada estado", ["Verde", "Ámbar", "Rojo"], "var(--leaf)", "t agotado") }),
    bloque({ h: "11.11 Diseño de un sistema secuencial síncrono", p: [
      "El diseño de una máquina de estados síncrona sigue estos pasos: 1) interpretar el enunciado y dibujar el <b>diagrama de estados</b>; 2) <b>codificar</b> los estados en binario (con n biestables, hasta 2<sup>n</sup> estados); 3) construir la <b>tabla de transiciones</b>: estado actual, entradas, estado siguiente y salidas; 4) obtener las <b>funciones de excitación</b> de los biestables y las <b>funciones de salida</b>, y simplificarlas por Karnaugh; 5) dibujar y simular el circuito.",
      "Ejemplo: un <b>detector de secuencia</b> que activa una salida Z cuando recibe por su entrada X dos unos seguidos (en dos flancos consecutivos). Estados (Moore): S0 = no ha llegado ningún 1; S1 = ha llegado un 1; S2 = han llegado dos o más unos (Z = 1). Transiciones: desde cualquier estado, X = 0 lleva a S0; desde S0, X = 1 lleva a S1; desde S1 o S2, X = 1 lleva a S2.",
      "Codificación con dos biestables D: S0 = 00, S1 = 01, S2 = 10 (el 11 no se usa). Tabla: D<sub>1</sub> = 1 solo cuando se pasa a S2, es decir, D<sub>1</sub> = X·(Q<sub>1</sub> + Q<sub>0</sub>); D<sub>0</sub> = 1 solo cuando se pasa a S1, D<sub>0</sub> = X·Q̄<sub>1</sub>·Q̄<sub>0</sub>; y la salida Z = Q<sub>1</sub>. Este tipo de detectores se usa para reconocer cabeceras en las tramas de comunicación y códigos en las cerraduras electrónicas.",
    ], svg: rejilla("Tabla de transiciones del detector de dos unos seguidos con dos biestables D", ["Estado (Q1Q0)", "X = 0 → | X = 1 →", "Z"], [["S0 (00)", "00 | 01", "0"], ["S1 (01)", "00 | 10", "0"], ["S2 (10)", "00 | 10", "1"]], "var(--pen)") }),
    bloque({ h: "11.12 Temporizadores: el circuito 555", p: [
      "Muchos sistemas necesitan generar señales de reloj o retardos. El circuito integrado <mark>555</mark>, diseñado en 1971, es uno de los más fabricados de la historia. Contiene dos comparadores, un biestable RS, un transistor de descarga y un divisor de tensión con tres resistencias iguales que fija las referencias en 1/3 y 2/3 de la tensión de alimentación. Con unas resistencias y un condensador externos funciona en dos modos.",
      "En modo <b>monoestable</b>, al recibir un pulso de disparo, la salida pasa a 1 durante un tiempo fijo y luego vuelve a 0: sirve como temporizador (por ejemplo, la luz de una escalera). En modo <b>astable</b>, la salida oscila continuamente entre 0 y 1: es un generador de reloj (intermitentes, alarmas, señales para motores paso a paso). Las fórmulas son:",
      formula("Monoestable: t = 1,1·R·C &nbsp;&nbsp; Astable: t<sub>alto</sub> = 0,693·(R₁ + R₂)·C, t<sub>bajo</sub> = 0,693·R₂·C, f = 1,44 / ((R₁ + 2R₂)·C)"),
      "Ejemplo: un astable con R<sub>1</sub> = 1 kΩ, R<sub>2</sub> = 10 kΩ y C = 10 µF oscila a f = 1,44/(21 000 · 10<sup>−5</sup>) = 6,86 Hz, con t<sub>alto</sub> = 76 ms y t<sub>bajo</sub> = 69 ms (ciclo de trabajo del 52 %). Un monoestable con R = 100 kΩ y C = 100 µF da un pulso de 1,1 · 10 = 11 s. Para tiempos largos o muy precisos se usan contadores que dividen la frecuencia de un oscilador de cuarzo, o directamente un microcontrolador.",
    ], svg: ficha("Fórmulas del temporizador 555 en modo monoestable y astable", "Temporizador 555", ["Monoestable: t = 1,1·R·C", "t alto = 0,693·(R₁+R₂)·C", "t bajo = 0,693·R₂·C", "f = 1,44 / ((R₁+2R₂)·C)"], "var(--red)") }),
    bloque({ h: "11.13 Memorias", p: [
      "Una <mark>memoria</mark> es un conjunto de celdas que almacenan bits, organizadas en <b>posiciones</b> (o palabras) de m bits, cada una con una <b>dirección</b>. Con n líneas de dirección se seleccionan 2<sup>n</sup> posiciones; su capacidad es 2<sup>n</sup> × m bits. Por ejemplo, con 16 líneas de dirección y 8 de datos: 65 536 × 8 bits = 64 KiB. Internamente, un decodificador selecciona la posición indicada por la dirección.",
      "Las memorias <b>volátiles</b> pierden la información al quitar la alimentación. La <b>SRAM</b> (RAM estática) guarda cada bit en un biestable: es muy rápida y se usa en las memorias caché de los procesadores. La <b>DRAM</b> (RAM dinámica) guarda cada bit como la carga de un pequeño condensador, que hay que refrescar miles de veces por segundo: es más barata y densa, y es la memoria principal de los ordenadores.",
      "Las memorias <b>no volátiles</b> conservan los datos sin alimentación. La <b>ROM</b> se graba en fábrica; la <b>EPROM</b> se borraba con luz ultravioleta; la <b>EEPROM</b> se borra eléctricamente byte a byte; y la <b>flash</b> se borra por bloques y es la de los pendrives, las tarjetas, los discos SSD y los microcontroladores. Las unidades de capacidad usan el prefijo binario: 1 KiB = 1 024 bytes, 1 MiB = 1 024 KiB, aunque los fabricantes suelen usar los prefijos decimales (1 kB = 1 000 bytes).",
    ], svg: compara("Memorias volátiles y no volátiles: la SRAM y la DRAM pierden los datos sin alimentación; la ROM, EEPROM y flash los conservan", ["Volátiles", ["SRAM: biestables", "rápida (caché)", "DRAM: condensadores", "memoria principal"]], ["No volátiles", ["ROM · EEPROM", "flash: por bloques", "pendrive, SSD", "programa del µC"]], "var(--red)", "var(--leaf)") }),
    bloque({ h: "11.14 Microprocesadores y microcontroladores", p: [
      "Un <b>microprocesador</b> es un circuito secuencial síncrono muy complejo que ejecuta instrucciones almacenadas en memoria. Sus partes principales son la <b>unidad de control</b>, que lee e interpreta las instrucciones; la <b>unidad aritmético-lógica</b> (ALU), que realiza las operaciones; los <b>registros</b>, que guardan datos y direcciones (entre ellos el contador de programa, que apunta a la siguiente instrucción); y los <b>buses</b> de direcciones, datos y control, que lo comunican con la memoria y los periféricos.",
      "Funciona repitiendo el <b>ciclo de instrucción</b>: buscar la instrucción en la memoria, decodificarla, ejecutarla y pasar a la siguiente, al ritmo del reloj. En la <b>arquitectura de von Neumann</b>, programa y datos comparten memoria y bus; en la <b>Harvard</b>, tienen memorias y buses separados, lo que permite leer instrucción y dato a la vez.",
      "Un <mark>microcontrolador</mark> integra en un solo chip un procesador, memoria flash para el programa, RAM para los datos, EEPROM, temporizadores, conversores A/D, comunicaciones serie y patillas de entrada y salida. Es un pequeño ordenador completo, ideal para controlar aparatos: hay decenas en un coche y varios en cada electrodoméstico. Placas como <b>Arduino</b> (con un ATmega328P a 16 MHz) o ESP32 permiten programarlos fácilmente y son la base del prototipado de sistemas de control, como verás en el tema de automatización.",
    ], svg: figura("Microcontrolador", "Un ordenador completo en un chip", [["CPU", "control · ALU", "registros"], ["Memorias", "flash (programa)", "RAM · EEPROM"], ["Periféricos", "temporizadores", "conversor A/D · serie"], ["E/S", "patillas digitales", "PWM · sensores"]], "var(--pen)") }),
  ],
  figura: figura("Electrónica digital secuencial", "Circuitos con memoria gobernados por un reloj", [["Biestables", "RS · D", "JK · T"], ["Contadores", "asíncronos · síncronos", "módulo · divisores"], ["Registros", "paralelo · desplazamiento", "serie ↔ paralelo"], ["Sistemas", "máquinas de estados", "memorias · µC"]], "var(--red)"),
  video: V("ds-flipflop", "Flip-flop RS, D, JK y T", "biestables flip flop RS D JK T"),
  ejemplos: [
    { enunciado: "Un biestable RS con NOR está en Q = 0. Se aplican sucesivamente (S, R) = (1, 0), (0, 0), (0, 1), (0, 0). Indica el estado tras cada paso.", pasos: ["(1, 0): set → Q = 1.", "(0, 0): mantiene → Q = 1.", "(0, 1): reset → Q = 0; (0, 0): mantiene → Q = 0."], resultado: "Q: 1, 1, 0, 0." },
    { enunciado: "Un biestable JK disparado por flanco de bajada recibe, en cuatro flancos, (J, K) = (1, 0), (1, 1), (1, 1), (0, 1). Si Q empieza en 0, ¿cuál es la secuencia de salidas?", pasos: ["(1, 0): Q = 1.", "(1, 1): cambia → Q = 0; (1, 1): cambia → Q = 1.", "(0, 1): Q = 0."], resultado: "Q: 1, 0, 1, 0." },
    { enunciado: "Un contador asíncrono de 4 bits recibe un reloj de 1 kHz. ¿Qué frecuencia tiene cada salida? ¿Cuál es su módulo?", pasos: ["Cada biestable divide entre 2.", "Q0 = 500 Hz; Q1 = 250 Hz; Q2 = 125 Hz; Q3 = 62,5 Hz.", "Módulo = 2⁴ = 16 (de 0 a 15)."], resultado: "500, 250, 125 y 62,5 Hz; módulo 16." },
    { enunciado: "Diseña un contador asíncrono de décadas (0 a 9). ¿Cuántos biestables necesita y cómo se pone a cero?", pasos: ["2⁴ = 16 ≥ 10: 4 biestables.", "El primer estado que no debe aparecer es 10 = 1010.", "Una NAND con Q3 y Q1 detecta ese estado y activa el CLEAR de todos."], resultado: "4 biestables y una NAND (Q3·Q1) al CLEAR." },
    { enunciado: "Calcula la frecuencia, los tiempos alto y bajo y el ciclo de trabajo de un 555 astable con R₁ = 1 kΩ, R₂ = 10 kΩ y C = 10 µF.", pasos: ["t<sub>alto</sub> = 0,693 · 11 000 · 10<sup>−5</sup> = 76,2 ms.", "t<sub>bajo</sub> = 0,693 · 10 000 · 10<sup>−5</sup> = 69,3 ms; T = 145,5 ms.", "f = 1/T = 6,87 Hz; ciclo de trabajo = 76,2/145,5 = 52 %."], resultado: "6,87 Hz, 76 ms alto, 69 ms bajo y 52 %." },
    { enunciado: "Una memoria tiene 20 líneas de dirección y 16 de datos. ¿Cuántas posiciones tiene y cuál es su capacidad en bytes?", pasos: ["Posiciones: 2²⁰ = 1 048 576.", "Bits: 1 048 576 · 16 = 16 777 216.", "Bytes: 2 097 152 = 2 MiB."], resultado: "1 Mi posiciones de 16 bits: 2 MiB." },
  ],
  errores: [
    "Aplicar S = R = 1 en un biestable RS: es la combinación prohibida.",
    "Pensar que un biestable síncrono cambia cuando cambian sus entradas: solo cambia en el flanco activo del reloj.",
    "Confundir el módulo con el número máximo: un contador de módulo 10 cuenta de 0 a 9.",
    "En un contador asíncrono, olvidar que la salida de cada biestable es el reloj del siguiente.",
    "Usar como estado de reset el último estado válido: se detecta el primero no válido (1010 para módulo 10).",
    "Confundir 1 KiB (1 024 bytes) con 1 kB (1 000 bytes) en las capacidades de memoria.",
  ],
  ejercicios: [
    B("¿Qué diferencia hay entre un circuito combinacional y uno secuencial?", "En el combinacional las salidas dependen solo de las entradas actuales; en el secuencial también del estado (memoria)."),
    B("Un reloj tiene un periodo de 50 ns. ¿Cuál es su frecuencia?", "f = 1/(50 · 10<sup>−9</sup>) = 20 MHz."),
    B("Completa la tabla de funcionamiento del biestable RS con NOR.", "S R = 00: mantiene; 01: Q = 0; 10: Q = 1; 11: prohibido."),
    B("¿Qué hace un biestable D en cada flanco activo?", "Copia en Q el valor de D: Q<sub>t+1</sub> = D."),
    B("¿Qué ocurre en un biestable JK con J = K = 1?", "Cambia de estado en cada flanco (basculación)."),
    B("¿Cómo se obtiene un biestable T a partir de un JK?", "Uniendo J y K en una sola entrada T."),
    B("¿Cuántos biestables necesita un contador de módulo 12? ¿Y de módulo 60?", "4 (2⁴ = 16) y 6 (2⁶ = 64)."),
    B("¿Qué frecuencia sale de un divisor formado por 3 biestables T si entra 8 kHz?", "8 kHz/2³ = 1 kHz."),
    B("¿Qué diferencia hay entre un registro SIPO y uno PISO?", "SIPO: entra en serie y sale en paralelo. PISO: entra en paralelo y sale en serie."),
    B("¿Qué ocurre al desplazar 0011 (3) una posición a la izquierda?", "0110 = 6: se multiplica por 2."),
    B("Calcula la duración del pulso de un 555 monoestable con R = 47 kΩ y C = 22 µF.", "t = 1,1 · 47 000 · 22 · 10<sup>−6</sup> = 1,14 s."),
    B("¿Qué diferencia hay entre la memoria SRAM y la DRAM?", "SRAM: un biestable por bit, rápida, cara. DRAM: un condensador por bit, hay que refrescarla, más densa y barata."),
    M("Dibuja el cronograma de Q en un biestable D disparado por flanco de subida si D cambia entre flancos así: 1, 0, 0, 1, 1, 0 (valores en cada flanco).", "Q sigue a D en cada flanco: 1, 0, 0, 1, 1, 0; entre flancos permanece constante aunque D varíe."),
    M("Un contador asíncrono de 3 bits está en 101. ¿Qué estados pasa por él hasta llegar a 010?", "101 → 110 → 111 → 000 → 001 → 010 (5 pulsos)."),
    M("Diseña un contador asíncrono de módulo 6. ¿Qué puerta y qué salidas se usan para el reset?", "3 biestables; primer estado no válido: 6 = 110. NAND de Q2 y Q1 al CLEAR."),
    M("Diseña un contador de 00 a 59 (segundos) con contadores de décadas. ¿Qué módulo tiene cada uno y cómo se enlazan?", "Unidades: módulo 10; su paso de 9 a 0 da el pulso a las decenas, de módulo 6 (reset en 0110 con Q2·Q1)."),
    M("Obtén las entradas T de un contador síncrono descendente de 3 bits.", "T0 = 1; T1 = Q̄0; T2 = Q̄0·Q̄1 (cada bit cambia cuando todos los anteriores valen 0)."),
    M("Con biestables JK, ¿qué valores de J y K hacen falta para las transiciones 0 → 1 y 1 → 1?", "0 → 1: J = 1, K = X. 1 → 1: J = X, K = 0."),
    M("Un registro de desplazamiento de 8 bits recibe datos a 115 200 bit/s. ¿Cuánto tarda en llenarse? ¿Cuántos bytes por segundo recibe?", "8/115 200 = 69,4 µs; 14 400 bytes/s (sin bits de inicio y parada)."),
    M("Calcula R₂ para que un 555 astable con R₁ = 1 kΩ y C = 1 µF oscile a 100 Hz.", "1,44/((1 000 + 2R₂) · 10<sup>−6</sup>) = 100 → 1 000 + 2R₂ = 14 400 → R₂ = 6,7 kΩ."),
    M("¿Qué capacidad tiene una memoria con 12 líneas de dirección y 8 de datos? ¿Cuántas líneas de dirección necesita una de 32 KiB × 8?", "4 096 × 8 = 4 KiB. 32 KiB = 2¹⁵ → 15 líneas."),
    M("Dibuja el diagrama de estados de un mando de garaje con un pulsador P que alterna entre «cerrado» y «abierto».", "Dos estados (cerrado, abierto). Con P = 1 (flanco) se pasa al otro; con P = 0 se permanece. Se implementa con un biestable T con T = P."),
    M("Explica qué es un rebote de un pulsador y por qué afecta a un contador.", "Al cerrarse, los contactos rebotan y producen varios pulsos en pocos ms; el contador los cuenta todos. Se evita con un biestable RS, un filtro RC con trigger Schmitt o por programa."),
    A("Diseña con dos biestables D un contador síncrono que siga la secuencia 00 → 01 → 11 → 10 → 00 (código Gray).", "Tabla: 00→01, 01→11, 11→10, 10→00. D1 = Q0 (Q1 siguiente es 1 cuando Q0 = 1). D0 = Q̄1 (Q0 siguiente es 1 en 00 y 01). D1 = Q0; D0 = Q̄1."),
    A("Diseña con biestables T un contador síncrono de módulo 3 (00 → 01 → 10 → 00), tomando 11 como indiferente.", "Transiciones: 00→01 (T1 = 0, T0 = 1); 01→10 (T1 = 1, T0 = 1); 10→00 (T1 = 1, T0 = 0). Karnaugh con 11 = X: T1 = Q1 + Q0; T0 = Q̄1."),
    A("Completa el diseño del detector de dos unos seguidos con biestables D (S0 = 00, S1 = 01, S2 = 10) y verifica las ecuaciones con la secuencia X = 0, 1, 1, 1, 0, 1.", "D1 = X·(Q1 + Q0); D0 = X·Q̄1·Q̄0; Z = Q1. Estados: S0 → S0 → S1 → S2 (Z = 1) → S2 (Z = 1) → S0 → S1. Z = 0, 0, 0, 1, 1, 0, 0."),
    A("Diseña una máquina de Moore para un semáforo con pulsador de peatones P: en verde permanece hasta que P = 1; luego pasa a ámbar, a rojo y vuelve a verde (las transiciones de ámbar y rojo ocurren con un temporizador t). Dibuja el diagrama y codifica los estados.", "Estados: V (00), Am (01), R (10). V → Am si P = 1; Am → R si t; R → V si t; si no, permanecen. Salidas: V: luz verde; Am: ámbar; R: roja (y verde para peatones). Se implementa con 2 biestables y lógica de excitación, o en un µC con switch-case."),
    A("Un frecuencímetro cuenta los pulsos de una señal durante 1 s con un contador de 4 décadas. ¿Cuál es la frecuencia máxima que puede medir? ¿Cómo se genera la ventana de 1 s a partir de un cristal de 32 768 Hz?", "Hasta 9 999 Hz. 32 768 = 2¹⁵: con 15 biestables T en cascada se obtiene 1 Hz exacto (por eso los relojes usan esos cristales)."),
    A("Un microcontrolador a 16 MHz ejecuta la mayoría de las instrucciones en un ciclo. ¿Cuántas instrucciones puede ejecutar en 1 ms? Si un bucle de control tiene 2 000 instrucciones, ¿cuántas veces por segundo puede repetirse?", "16 000 instrucciones en 1 ms. 16 · 10⁶/2 000 = 8 000 veces por segundo (una cada 125 µs)."),
    A("Compara la solución de un temporizador de 10 minutos con un 555 y con un contador alimentado por un cristal. ¿Cuál es más precisa y por qué?", "555: t = 1,1·R·C con C electrolítico de tolerancia ±20 % y fugas: error grande. Cristal + divisor + contador: precisión de unos 20 ppm (±0,012 s en 10 min). El cristal es mucho más preciso."),
  ],
  quiz: [
    q4("Un circuito secuencial se caracteriza por tener…", ["solo puertas", "memoria", "más entradas", "un display"], 1, "Depende del estado."),
    q4("En un circuito síncrono, los cambios se producen…", ["en cualquier momento", "con la señal de reloj", "con la alimentación", "al azar"], 1, "Todos a la vez."),
    q4("Un flanco de subida es el paso de…", ["1 a 0", "0 a 1", "0 a 0", "1 a 1"], 1, "Positivo."),
    q4("Un biestable almacena…", ["un byte", "un bit", "un número decimal", "una dirección"], 1, "Dos estados estables."),
    q4("En el RS con NOR, la combinación prohibida es…", ["S = 0, R = 0", "S = 1, R = 0", "S = 0, R = 1", "S = 1, R = 1"], 3, "Q y Q̄ valdrían 0."),
    q4("En el RS con S = R = 0, la salida…", ["se pone a 0", "se pone a 1", "mantiene su valor", "cambia"], 2, "Memoria."),
    q4("En un biestable D, Q(t+1) =", ["Q̄", "D", "D̄", "0"], 1, "Copia D en el flanco."),
    q4("En un JK con J = K = 1…", ["se pone a 0", "se pone a 1", "mantiene", "cambia de estado"], 3, "Toggle."),
    q4("Un biestable T con T = 1 divide la frecuencia entre…", ["1", "2", "4", "10"], 1, "Cambia en cada flanco."),
    q4("Las entradas PRESET y CLEAR son…", ["síncronas", "asíncronas y prioritarias", "de datos", "de reloj"], 1, "Actúan sin reloj."),
    q4("Con 5 biestables, el módulo máximo de un contador es…", ["5", "10", "25", "32"], 3, "2⁵."),
    q4("En un contador asíncrono, el reloj del segundo biestable es…", ["el reloj externo", "la salida del primero", "la alimentación", "un pulsador"], 1, "En cascada."),
    q4("Para un contador de módulo 10 se detecta el estado…", ["1001", "1010", "1111", "0000"], 1, "Primer estado no válido."),
    q4("Los contadores síncronos son más rápidos porque…", ["tienen menos biestables", "todos los biestables cambian a la vez", "no usan reloj", "usan JK"], 1, "Sin retardos acumulados."),
    q4("Un registro de desplazamiento sirve para…", ["sumar", "convertir serie ↔ paralelo", "decodificar", "amplificar"], 1, "Comunicaciones serie."),
    q4("En una máquina de Moore, las salidas dependen…", ["de las entradas", "del estado", "del estado y las entradas", "del reloj"], 1, "Dentro del círculo."),
    q4("El 555 en modo astable…", ["da un pulso único", "oscila continuamente", "cuenta pulsos", "almacena datos"], 1, "Generador de reloj."),
    q4("La duración de un monoestable 555 es…", ["0,693·R·C", "1,1·R·C", "R·C/2", "1,44·R·C"], 1, "t = 1,1·R·C."),
    q4("La memoria flash es…", ["volátil", "no volátil", "solo de lectura", "dinámica"], 1, "Pendrives, SSD."),
    q4("Un microcontrolador integra…", ["solo la CPU", "CPU, memoria y periféricos", "solo memoria", "una FPGA"], 1, "Ordenador en un chip."),
  ],
  examen: [
    q4("Un reloj de 4 MHz tiene un periodo de…", ["250 ns", "4 µs", "25 ns", "2,5 µs"], 0, "1/4 · 10⁶."),
    q4("JK con Q = 1, J = 0, K = 1. Tras el flanco, Q =", ["1", "0", "cambia a 1", "indeterminado"], 1, "Reset."),
    q4("Contador de 4 bits en 1110. Tras 3 pulsos:", ["0001", "0000", "1111", "0010"], 0, "1111, 0000, 0001."),
    q4("Módulo 20: biestables necesarios:", ["4", "5", "6", "20"], 1, "2⁵ = 32."),
    q4("Divisor por 2⁴ con entrada de 16 kHz:", ["1 kHz", "4 kHz", "8 kHz", "64 kHz"], 0, "16/16."),
    q4("555 astable, R₁ = R₂ = 10 kΩ, C = 10 µF. f ≈", ["4,8 Hz", "14,4 Hz", "7,2 Hz", "48 Hz"], 0, "1,44/(30 000 · 10⁻⁵)."),
    q4("Memoria con 10 líneas de dirección y 8 de datos:", ["1 KiB", "10 KiB", "8 KiB", "80 bytes"], 0, "1 024 × 8 bits."),
    q4("Desplazar 0101 a la derecha una posición da…", ["1010", "0010", "1011", "0100"], 1, "Divide entre 2 (5 → 2)."),
  ],
  feynman: ["Qué significa que un circuito tenga memoria y cómo lo consigue un biestable", "Para qué sirve la señal de reloj", "Cómo cuenta un contador asíncrono y por qué divide la frecuencia", "Cómo se envía un byte por un cable con un registro de desplazamiento", "Qué es una máquina de estados y cómo se describe un semáforo"],
  glosario: [
    ["Circuito secuencial", "Circuito cuyas salidas dependen de las entradas y del estado anterior."],
    ["Reloj", "Señal cuadrada que sincroniza los cambios de un sistema digital."],
    ["Flanco", "Transición de la señal de reloj de 0 a 1 (subida) o de 1 a 0 (bajada)."],
    ["Biestable", "Circuito con dos estados estables que almacena un bit."],
    ["Biestable RS", "Biestable con entradas de puesta a uno (S) y a cero (R)."],
    ["Biestable D", "Biestable que copia la entrada D en cada flanco activo."],
    ["Biestable JK", "Biestable que mantiene, pone a 0, pone a 1 o cambia según J y K."],
    ["Biestable T", "Biestable que cambia de estado en cada flanco si T = 1."],
    ["Cronograma", "Diagrama de la evolución temporal de las señales."],
    ["Contador", "Circuito secuencial que recorre una secuencia fija de estados."],
    ["Módulo", "Número de estados distintos de un contador."],
    ["Registro de desplazamiento", "Cadena de biestables que desplaza los bits en cada pulso."],
    ["Máquina de estados", "Modelo de un sistema con estados, transiciones y salidas."],
    ["Temporizador 555", "Circuito integrado que funciona como monoestable o astable."],
    ["Memoria flash", "Memoria no volátil que se borra eléctricamente por bloques."],
    ["Microcontrolador", "Chip que integra procesador, memorias y periféricos."],
  ],
  situacion: {
    titulo: "El marcador del polideportivo",
    reto: "Vuestro equipo diseñará el marcador electrónico de un partido: dos contadores de puntos de 00 a 99 con pulsadores para sumar y restar, un cronómetro de 00:00 a 59:59 y una bocina que suene al terminar el tiempo. Lo simularéis con lógica digital y lo construiréis con un microcontrolador.",
    pasos: [
      "Dibujad el diagrama de bloques: contadores de décadas, decodificadores, displays, base de tiempos y control.",
      "Diseñad la base de tiempos de 1 Hz (con un 555 o dividiendo la frecuencia de un cristal) y calculad sus componentes.",
      "Simulad un contador de 00 a 59 con contadores de décadas y su reset, y los antirrebotes de los pulsadores.",
      "Describid el control del partido como una máquina de estados (preparado, en juego, pausa, final).",
      "Programad el marcador en un microcontrolador con displays de siete segmentos o una matriz de LED.",
    ],
    producto: "El diseño documentado (diagramas, cronogramas, cálculos), la simulación y el prototipo funcionando.",
    evaluacion: [
      "Diseña correctamente contadores con su módulo y su reset.",
      "Calcula la base de tiempos y justifica su precisión.",
      "Modela el control con una máquina de estados coherente.",
      "El prototipo funciona y se comprueban todos los casos.",
    ],
  },
  mapa: mapaB("DIGITAL SECUENCIAL", [
    ["Biestables", "RS · D · JK · T · reloj", "var(--pen)"],
    ["Contadores", "asíncronos · síncronos · módulo", "var(--red)"],
    ["Registros", "almacenamiento · desplazamiento", "var(--leaf)"],
    ["Sistemas", "estados · 555 · memorias · µC", "var(--inf)"],
  ]),
  tarjetas: [
    ["Secuencial", "salidas = f(entradas, estado)"],
    ["Biestable RS", "S pone a 1, R a 0; S = R = 1 prohibido"],
    ["Biestable D", "Q(t+1) = D"],
    ["Biestable JK", "J = K = 1 → cambia"],
    ["Biestable T", "T = 1 → cambia; divide f entre 2"],
    ["Excitación JK", "0→1: J = 1, K = X"],
    ["Módulo", "con n biestables, hasta 2ⁿ"],
    ["Reset de un contador", "detectar el primer estado no válido"],
    ["Registro de desplazamiento", "serie ↔ paralelo; × 2 o ÷ 2"],
    ["Moore y Mealy", "salida según estado / estado y entradas"],
    ["555", "mono: 1,1RC ; astable: 1,44/((R₁+2R₂)C)"],
    ["Capacidad de memoria", "2ⁿ posiciones × m bits"],
  ],
  familias: [
    "Buscad aparatos de casa que «recuerden» algo (el programa de la lavadora, el canal de la tele) y comentad dónde guardan la información.",
    "Mirad la frecuencia del procesador de vuestro móvil u ordenador y calculad su periodo.",
    "Dibujad el diagrama de estados de la lavadora o del microondas de casa.",
    "Contad con los dedos en binario (cada dedo es un bit): ¿hasta cuánto se llega con una mano?",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Sistemas eléctricos y electrónicos» y «Sistemas informáticos»: electrónica digital secuencial; biestables; cronogramas; contadores y registros; máquinas de estados; temporizadores; memorias; estructura de microprocesadores y microcontroladores.`,
    ideas: [
      "Simulación de biestables y contadores en Logisim con cronogramas.",
      "Montaje de un dado electrónico con un 555, un contador 4017 y LED.",
      "Programación de una máquina de estados (semáforo) en Arduino con switch-case.",
      "Análisis de la hoja de características del 74HC595 y control de 8 LED con 3 patillas.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Biestable, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Biestable" },
    { t: "Circuito integrado 555, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Circuito_integrado_555" },
    { t: "Documentación oficial de Arduino", url: "https://docs.arduino.cc/" },
  ],
  revisado: "2026-11-21",
};
