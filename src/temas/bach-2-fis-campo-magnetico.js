// Física 2º Bachillerato · El campo magnético (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU } = require("./_bach2-fis");

const flechaDef = (id, c) => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${c}"/></marker></defs>`;
const entra = (x, y) => `<circle cx="${x}" cy="${y}" r="6" fill="none" stroke="var(--muted)" stroke-width="1.4"/><path d="M${x - 4} ${y - 4} L ${x + 4} ${y + 4} M${x + 4} ${y - 4} L ${x - 4} ${y + 4}" stroke="var(--muted)" stroke-width="1.4"/>`;

// Imán de barra con líneas de campo.
const imanSVG = marco("Líneas de campo de un imán: salen del polo norte, entran por el polo sur y se cierran por dentro del imán", `
  ${flechaDef("im1", "var(--pen)")}
  ${[22, 40, 58].map((d) => `<path d="M90 90 C 90 ${90 - d * 1.6}, 170 ${90 - d * 1.6}, 170 90" fill="none" stroke="var(--pen)" stroke-width="1.8"/><path d="M90 90 C 90 ${90 + d * 1.6}, 170 ${90 + d * 1.6}, 170 90" fill="none" stroke="var(--pen)" stroke-width="1.8"/>`).join("")}
  <rect x="80" y="76" width="50" height="28" fill="var(--red)"/>${T(105, 95, "N", { fs: 15, b: true, c: "#fff" })}
  <rect x="130" y="76" width="50" height="28" fill="var(--pen)"/>${T(155, 95, "S", { fs: 15, b: true, c: "#fff" })}
  <path d="M128 42 l 6 0" stroke="var(--pen)" stroke-width="2" marker-end="url(#im1)"/>
  <path d="M128 138 l 6 0" stroke="var(--pen)" stroke-width="2" marker-end="url(#im1)"/>
  ${T(130, 174, "fuera: de N a S; las líneas son cerradas", { fs: 11, b: true })}`);

// Carga en movimiento circular en B entrante.
const circularSVG = marco("Una carga positiva que entra perpendicular a un campo magnético uniforme describe una circunferencia porque la fuerza de Lorentz es siempre perpendicular a la velocidad", `
  ${flechaDef("lc1", "var(--leaf)")}${flechaDef("lc2", "var(--red)")}
  ${[30, 70, 110, 150, 190, 230].map((x) => [30, 70, 110, 150].map((y) => entra(x, y)).join("")).join("")}
  <circle cx="130" cy="92" r="58" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>
  <circle cx="130" cy="34" r="7" fill="var(--red)"/>${T(130, 38, "+", { fs: 11, b: true, c: "#fff" })}
  <path d="M138 34 L 180 34" stroke="var(--leaf)" stroke-width="3" marker-end="url(#lc1)"/>${T(190, 30, "v", { fs: 13, b: true, c: "var(--leaf)", a: "start" })}
  <path d="M130 42 L 130 78" stroke="var(--red)" stroke-width="3" marker-end="url(#lc2)"/>${T(138, 70, "F", { fs: 13, b: true, c: "var(--red)", a: "start" })}
  ${T(130, 172, "B entrante (⊗) · R = mv / qB", { fs: 12, b: true })}`);

// Campo de un hilo rectilíneo.
const hiloSVG = marco("Campo magnético de una corriente rectilínea: líneas circulares concéntricas cuyo sentido da la regla de la mano derecha", `
  ${flechaDef("hl", "var(--pen)")}
  ${[22, 42, 62].map((r) => `<ellipse cx="130" cy="96" rx="${r * 1.6}" ry="${r * 0.55}" fill="none" stroke="var(--pen)" stroke-width="1.8"/>`).join("")}
  <path d="M130 170 V 14" stroke="#b45309" stroke-width="4"/><path d="M130 30 l -6 10 h 12 z" fill="#b45309"/>${T(140, 22, "I", { fs: 14, b: true, c: "#b45309", a: "start" })}
  <path d="M96 ${96 + 42 * 0.55} l 6 0" stroke="var(--pen)" stroke-width="2" marker-end="url(#hl)"/>
  ${T(130, 176, "B = μ₀ I / 2πr", { fs: 12, b: true })}`);

// Fuerza entre corrientes paralelas.
const paralelasSVG = compara("Fuerza entre corrientes paralelas: las del mismo sentido se atraen y las de sentido contrario se repelen", ["Mismo sentido", ["I₁ ↑ e I₂ ↑", "fuerzas hacia dentro", "se atraen", "F/L = μ₀I₁I₂/2πd"]], ["Sentidos opuestos", ["I₁ ↑ e I₂ ↓", "fuerzas hacia fuera", "se repelen", "misma fórmula"]], "var(--leaf)", "var(--red)");

module.exports = {
  materia: "Física",
  curso: "2-bachillerato",
  titulo: "El campo magnético",
  minutos: 120,
  objetivos: [
    "Describir los fenómenos magnéticos y relacionar magnetismo y corrientes eléctricas (Oersted)",
    "Aplicar la fuerza de Lorentz al movimiento de partículas cargadas en campos magnéticos uniformes",
    "Calcular la fuerza sobre conductores y el momento sobre espiras, y explicar el motor eléctrico",
    "Calcular el campo magnético creado por corrientes rectilíneas, espiras y solenoides",
    "Calcular la fuerza entre corrientes paralelas y conocer la definición de amperio",
    "Comparar el campo magnético con el eléctrico y el gravitatorio y conocer sus aplicaciones",
  ],
  claves: ["imán", "polo norte y sur", "campo magnético", "tesla", "experimento de Oersted", "fuerza de Lorentz", "producto vectorial", "regla de la mano derecha", "radio de giro", "espectrómetro de masas", "ciclotrón", "selector de velocidades", "solenoide", "ley de Ampère", "ferromagnetismo"],
  pregunta: {
    texto: "¿Por qué las auroras boreales se ven sobre todo cerca de los polos?",
    respuesta: "Porque las partículas cargadas del viento solar son desviadas por el <mark>campo magnético terrestre</mark>. La fuerza magnética las obliga a girar en hélices alrededor de las líneas de campo, que se curvan hasta entrar en la Tierra cerca de los polos magnéticos. Allí las partículas chocan con el oxígeno y el nitrógeno de la alta atmósfera y los hacen brillar en verde y rojo.",
  },
  lectura: {
    titulo: "La brújula que se movió en clase",
    html: `<p>En abril de 1820, el profesor danés Hans Christian Ørsted preparaba una demostración para sus alumnos. Sobre la mesa tenía una pila y una brújula. Al cerrar el circuito, observó que la aguja de la brújula, colocada junto al cable, giraba de golpe y se ponía perpendicular a él. Al abrir el circuito, volvía a señalar el norte. La electricidad y el magnetismo, que durante siglos se habían estudiado como fenómenos distintos, estaban conectados: una corriente eléctrica crea un campo magnético.</p><p>La noticia recorrió Europa en semanas. En pocos meses, André-Marie Ampère descubrió que dos cables con corriente se atraen o se repelen, y Michael Faraday construyó el primer motor eléctrico. Hoy esa conexión mueve el mundo: los motores de los coches eléctricos y los ascensores, los altavoces, los discos duros, las resonancias magnéticas de los hospitales y los imanes superconductores del LHC que guían protones casi a la velocidad de la luz. Todo empezó con una brújula que se movió en una clase.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 Imanes, polos y campo magnético terrestre", p: [
      "Los <b>imanes</b> atraen el hierro y tienen dos <b>polos</b>, norte y sur: los polos iguales se repelen y los opuestos se atraen. A diferencia de las cargas eléctricas, los polos no se pueden separar: si partes un imán por la mitad, obtienes dos imanes completos con su norte y su sur. Nunca se ha encontrado un <b>monopolo magnético</b>. Por eso las <mark>líneas de campo magnético son cerradas</mark>: fuera del imán van del polo norte al sur y por dentro vuelven al norte.",
      "La Tierra se comporta como un gran imán, generado por las corrientes de hierro fundido de su núcleo externo (efecto dinamo). Su polo sur magnético está cerca del polo norte geográfico, y por eso el polo norte de las brújulas señala hacia allí. El campo terrestre en la superficie vale unos 5 · 10⁻⁵ T y nos protege del viento solar formando la <b>magnetosfera</b>. Además, se invierte cada pocos cientos de miles de años, como han revelado las rocas del fondo oceánico, que guardan la orientación del campo cuando se formaron.",
    ], svg: imanSVG }),
    bloque({ h: "1.2 La fuerza de Lorentz", p: [
      "El campo magnético se detecta por la fuerza que ejerce sobre las <b>cargas en movimiento</b>. Una carga q que se mueve con velocidad v en un campo magnético B sufre la <mark>fuerza de Lorentz</mark>: <b>F = q · (v × B)</b>. Es un producto vectorial, así que su módulo es <b>F = |q| · v · B · sen α</b>, donde α es el ángulo entre v y B, y su dirección es perpendicular a la vez a la velocidad y al campo. El sentido se obtiene con la <b>regla de la mano derecha</b> (o del sacacorchos) para una carga positiva, y es el contrario para una negativa.",
      "De esta fuerza se deduce la unidad de campo magnético, el <b>tesla</b> (T): el campo que ejerce 1 N sobre una carga de 1 C que se mueve a 1 m/s perpendicularmente a él. Es una unidad grande: un imán de nevera produce unos 5 mT y una resonancia magnética, entre 1,5 y 3 T. Observa tres propiedades clave: la fuerza es nula si la carga está en reposo o se mueve paralela al campo; es máxima si se mueve perpendicular; y, como siempre es perpendicular a la velocidad, <b>no realiza trabajo</b>: cambia la dirección de la velocidad, pero no su módulo ni la energía cinética.",
    ], extra: formula("F = q · (v × B) ; F = |q| · v · B · sen α"), svg: ficha("La fuerza de Lorentz", "F = q (v × B)", ["⊥ a v y a B", "nula si v ∥ B", "no hace trabajo", "1 T = 1 N/(C·m/s)"], "var(--pen)"), video: V("cm-a", "Campo magnético: resumen de 2º de Bachillerato", "campo magnético resumen bachillerato") }),
    bloque({ h: "1.3 Movimiento de una carga en un campo uniforme", p: [
      "Si una partícula cargada entra <b>perpendicularmente</b> a un campo magnético uniforme, la fuerza de Lorentz es constante en módulo y siempre perpendicular a la velocidad: actúa como fuerza centrípeta y la partícula describe una <mark>circunferencia</mark>. Igualando: |q|·v·B = m·v²/R, de donde el <b>radio de giro</b> es <b>R = m·v / (|q|·B)</b>. A más velocidad o masa, mayor radio; a más campo o carga, menor radio.",
      "El <b>periodo</b> del movimiento es T = 2πR/v = <b>2π·m / (|q|·B)</b>, y la frecuencia, f = |q|B/(2πm). Lo sorprendente es que <b>no dependen de la velocidad</b>: las partículas rápidas describen círculos más grandes, pero tardan lo mismo en dar la vuelta. Si la velocidad forma un ángulo con el campo, la componente paralela no se ve afectada y la partícula avanza a lo largo del campo mientras gira: describe una <b>hélice</b>. Así quedan atrapadas las partículas del viento solar en los cinturones de Van Allen y así se producen las auroras.",
    ], extra: formula("R = m · v / (|q| · B) ; T = 2π · m / (|q| · B)"), svg: circularSVG, video: V("cm-b", "Movimiento de una carga en un campo magnético", "movimiento carga campo magnético") }),
    bloque({ h: "1.4 Espectrómetro, selector de velocidades y ciclotrón", p: [
      "Combinando campos eléctricos y magnéticos se construyen instrumentos muy útiles. En un <mark>selector de velocidades</mark>, un campo eléctrico E y uno magnético B perpendiculares ejercen fuerzas opuestas sobre las partículas; solo pasan sin desviarse las que cumplen q·E = q·v·B, es decir, <b>v = E/B</b>. Thomson usó esta idea en 1897 para medir la relación carga/masa del electrón.",
      "En un <b>espectrómetro de masas</b>, iones con la misma velocidad entran en un campo magnético y describen semicircunferencias de radio R = mv/qB: los más pesados giran en radios mayores e impactan en otro lugar del detector. Así se separan isótopos, se data con carbono-14 y se detecta dopaje o contaminantes. En el <b>ciclotrón</b>, inventado por Lawrence en 1932, las partículas giran en dos «des» huecas dentro de un campo magnético y un campo eléctrico alterno las acelera en cada media vuelta; como el periodo no depende de la velocidad, la frecuencia del campo eléctrico puede ser fija. Los hospitales usan ciclotrones para producir isótopos para la tomografía PET.",
    ], extra: formula("Selector: v = E / B ; Espectrómetro: m = q · B · R / v"), svg: rejilla("Instrumentos con campos E y B", ["Aparato", "Principio", "Uso"], [["Selector", "qE = qvB", "filtrar v"], ["Espectrómetro", "R = mv/qB", "isótopos"], ["Ciclotrón", "T no depende de v", "PET, física"], ["LHC", "imanes 8 T", "partículas"]], "var(--leaf)") }),
    bloque({ h: "1.5 Fuerza sobre un conductor con corriente", p: [
      "Una corriente eléctrica es un conjunto de cargas en movimiento, así que un cable con corriente dentro de un campo magnético sufre una fuerza: la suma de las fuerzas de Lorentz sobre sus electrones. Para un conductor rectilíneo de longitud L por el que circula una intensidad I: <mark>F = I · (L × B)</mark>, donde el vector L tiene el sentido de la corriente. Su módulo es <b>F = I · L · B · sen α</b>.",
      "Esta fuerza es la base de los <b>motores eléctricos</b> y de los <b>altavoces</b>, en los que una bobina con corriente variable dentro de un imán empuja la membrana. Un ejemplo de problema clásico: una varilla horizontal con corriente en un campo horizontal perpendicular puede quedar suspendida si la fuerza magnética hacia arriba compensa su peso, I·L·B = m·g. También se usa en el «cañón de raíles» y en los trenes de levitación magnética, aunque estos combinan además superconductores e inducción.",
    ], extra: formula("F = I · (L × B) ; F = I · L · B · sen α"), svg: pasos("Fuerza sobre un cable", ["L con el sentido de I", "Ángulo α entre L y B", "F = I·L·B·sen α", "Sentido: mano derecha"], "var(--pen)") }),
    bloque({ h: "1.6 Espiras en un campo magnético: el motor eléctrico", p: [
      "Sobre una <b>espira rectangular</b> con corriente dentro de un campo uniforme, las fuerzas sobre lados opuestos son iguales y de sentido contrario: la fuerza neta es nula, pero forman un <b>par de fuerzas</b> que la hace girar. El momento del par es <b>M = N · I · S · B · sen θ</b>, donde S es el área de la espira, N el número de vueltas y θ el ángulo entre el vector superficie y el campo. Se define el <mark>momento magnético</mark> de la espira, m = N·I·S, y el momento del par es M = m × B.",
      "El par tiende a orientar la espira perpendicular al campo, igual que una brújula se orienta con el campo terrestre. Para que gire continuamente, en el <b>motor de corriente continua</b> un <b>conmutador</b> invierte el sentido de la corriente cada media vuelta, de modo que el par siempre empuja en el mismo sentido. Los motores eléctricos convierten así energía eléctrica en mecánica con rendimientos de hasta el 95 %, muy superiores al 30-40 % de un motor de gasolina. Los galvanómetros analógicos, que miden corrientes pequeñas, usan el mismo principio con un muelle que se opone al giro.",
    ], extra: formula("M = N · I · S · B · sen θ"), svg: ficha("El motor eléctrico", "M = N·I·S·B·sen θ", ["fuerza neta nula", "par que hace girar", "conmutador cada ½ vuelta", "rendimiento ≈ 90 %"], "var(--leaf)") }),
    bloque({ h: "2.1 Campo creado por una corriente rectilínea", p: [
      "El experimento de Oersted demostró que las corrientes crean campos magnéticos. Un <b>conductor rectilíneo e indefinido</b> por el que circula una intensidad I crea a su alrededor un campo cuyas líneas son <b>circunferencias concéntricas</b> con el hilo, contenidas en planos perpendiculares a él. Su módulo a una distancia r es <mark>B = μ₀ · I / (2π · r)</mark>, donde <b>μ₀ = 4π · 10⁻⁷ T·m/A</b> es la permeabilidad magnética del vacío.",
      "El sentido de las líneas se obtiene con la <b>regla de la mano derecha</b>: si el pulgar apunta en el sentido de la corriente, los dedos al cerrarse indican el sentido del campo. En un dibujo, el campo que sale del papel se representa con un punto (⊙) y el que entra, con un aspa (⊗). Para hacerte una idea, un cable doméstico con 10 A crea a 1 cm un campo de 2 · 10⁻⁴ T, cuatro veces el campo terrestre: por eso una brújula cerca de un cable con corriente se desvía. Para varios hilos, se aplica el principio de superposición sumando vectorialmente los campos.",
    ], extra: formula("B = μ₀ · I / (2π · r) ; μ₀ = 4π · 10⁻⁷ T·m/A"), svg: hiloSVG, video: V("cm-d", "Campo magnético creado por una carga y una corriente", "campo magnético corriente rectilínea") }),
    bloque({ h: "2.2 Campo de una espira y de un solenoide", p: [
      "Si doblamos el cable en forma de <b>espira circular</b> de radio R, las líneas de campo se concentran en su interior. En el <b>centro</b> de la espira, el campo es perpendicular a su plano y vale <b>B = μ₀ · I / (2R)</b>. Para N espiras juntas (una bobina plana), el campo se multiplica por N. Una espira con corriente se comporta como un pequeño imán, con su cara norte (de la que salen las líneas) y su cara sur.",
      "Un <mark>solenoide</mark> es un cable enrollado en hélice con muchas espiras: N vueltas en una longitud L. En su interior, lejos de los extremos, el campo es <b>uniforme</b> y paralelo al eje: <b>B = μ₀ · N · I / L</b>; fuera es prácticamente nulo, salvo cerca de los extremos, donde el campo es como el de un imán de barra. Si se introduce un núcleo de hierro, el campo se multiplica por cientos o miles: es un <b>electroimán</b>, que se activa y desactiva con la corriente. Se usan en grúas de chatarra, timbres, cerraduras eléctricas, relés y en las bobinas superconductoras de las resonancias magnéticas.",
    ], extra: formula("Espira (centro): B = μ₀ · I / 2R ; Solenoide: B = μ₀ · N · I / L"), svg: rejilla("Campos creados por corrientes", ["Conductor", "Campo B"], [["Hilo rectilíneo", "μ₀I / 2πr"], ["Espira (centro)", "μ₀I / 2R"], ["N espiras", "Nμ₀I / 2R"], ["Solenoide", "μ₀NI / L"]], "var(--pen)") }),
    bloque({ h: "2.3 Fuerzas entre corrientes paralelas", p: [
      "Dos conductores rectilíneos y paralelos separados una distancia d, con corrientes I₁ e I₂, se ejercen fuerzas: cada uno crea un campo en la posición del otro, y ese campo actúa sobre su corriente. La fuerza por unidad de longitud es <mark>F / L = μ₀ · I₁ · I₂ / (2π · d)</mark>. Si las corrientes tienen el <b>mismo sentido, se atraen</b>; si tienen <b>sentidos opuestos, se repelen</b>. Fíjate en que es al revés que con las cargas eléctricas.",
      "Este fenómeno sirvió hasta 2019 para <b>definir el amperio</b>: la intensidad que, circulando por dos conductores paralelos indefinidos separados 1 m en el vacío, produce entre ellos una fuerza de 2 · 10⁻⁷ N por metro. Desde 2019, el amperio se define fijando el valor exacto de la carga elemental, pero la relación sigue siendo la misma. Las fuerzas entre corrientes tienen efectos prácticos: en un cortocircuito, las corrientes de miles de amperios pueden deformar las barras de los cuadros eléctricos, y en los cables de alta tensión se tienen en cuenta al diseñar las separaciones.",
    ], extra: formula("F / L = μ₀ · I₁ · I₂ / (2π · d)"), svg: paralelasSVG, video: V("cm-c", "Fuerza magnética entre dos conductores", "fuerza entre conductores paralelos") }),
    bloque({ h: "2.4 La ley de Ampère", p: [
      "La <mark>ley de Ampère</mark> es al campo magnético lo que el teorema de Gauss es al eléctrico. Dice que la circulación del campo magnético a lo largo de una línea cerrada es igual a μ₀ por la intensidad que atraviesa la superficie que encierra: <b>∮ B · dl = μ₀ · I<sub>enc</sub></b>. Que la circulación no sea nula indica que el campo magnético <b>no es conservativo</b>: no existe un potencial magnético escalar como el eléctrico o el gravitatorio.",
      "Como el teorema de Gauss, es útil cuando hay simetría. Para un hilo rectilíneo, tomando como camino una circunferencia de radio r concéntrica, B es constante y tangente a ella: B · 2πr = μ₀ · I, de donde B = μ₀I/(2πr). Para un solenoide largo, tomando un rectángulo con un lado dentro y otro fuera: B · L = μ₀ · N · I, de donde B = μ₀NI/L. Otra ley fundamental es el <b>teorema de Gauss magnético</b>: el flujo magnético a través de cualquier superficie cerrada es nulo, porque las líneas son cerradas y no hay monopolos.",
    ], extra: formula("∮ B · dl = μ₀ · I<sub>enc</sub> ; ∮ B · dS = 0"), svg: compara("Leyes del campo magnético", ["Gauss magnético", ["Φ cerrado = 0", "líneas cerradas", "sin monopolos", ""]], ["Ampère", ["∮B·dl = μ₀I", "no conservativo", "sin potencial", "usar simetría"]], "var(--pen)", "var(--leaf)") }),
    bloque({ h: "2.5 El magnetismo en la materia", p: [
      "¿Por qué el hierro es magnético y la madera no? Los electrones, al girar en sus orbitales y por su <b>espín</b>, se comportan como pequeños imanes. En la mayoría de los materiales estos imanes se orientan al azar y se anulan. Según su respuesta a un campo externo, los materiales se clasifican en <b>diamagnéticos</b> (cobre, agua, bismuto), que se oponen débilmente al campo y son ligeramente repelidos; <b>paramagnéticos</b> (aluminio, oxígeno), que se alinean débilmente con él; y <mark>ferromagnéticos</mark> (hierro, níquel, cobalto), que se imanan intensamente.",
      "En los ferromagnéticos, los imanes atómicos se alinean en pequeñas regiones llamadas <b>dominios magnéticos</b>. Un campo externo hace crecer los dominios orientados con él, y el material se imana miles de veces más que el campo aplicado. En los imanes permanentes los dominios quedan orientados al retirar el campo. Por encima de una temperatura, la <b>temperatura de Curie</b> (770 °C en el hierro), la agitación térmica destruye el orden y el material deja de ser ferromagnético. Los imanes de neodimio, los más potentes, se usan en motores de coches eléctricos, aerogeneradores y auriculares.",
    ], svg: rejilla("Tipos de materiales magnéticos", ["Tipo", "Respuesta", "Ejemplo"], [["Diamagnético", "débil, opuesta", "cobre, agua"], ["Paramagnético", "débil, a favor", "aluminio, O₂"], ["Ferromagnético", "muy intensa", "hierro, níquel"]], "var(--red)") }),
    bloque({ h: "3.1 Tres campos comparados y aplicaciones", p: [
      "Es momento de comparar los tres campos que has estudiado. El gravitatorio y el eléctrico son <b>centrales y conservativos</b>, sus líneas son abiertas (nacen o mueren en masas o cargas) y tienen potencial. El magnético <b>no es central ni conservativo</b>, sus líneas son <mark>cerradas</mark>, no existen monopolos y solo actúa sobre cargas en movimiento con una fuerza perpendicular a su velocidad. Además, campos eléctricos y magnéticos están íntimamente relacionados: lo que un observador ve como campo eléctrico, otro en movimiento puede verlo en parte como magnético. Por eso se habla de un único campo electromagnético.",
      "Las aplicaciones están por todas partes. La <b>resonancia magnética</b> usa campos de 1,5 a 3 T y ondas de radio para ver los tejidos blandos sin radiación ionizante. El <b>LHC</b> del CERN guía protones a 7 TeV con 1232 imanes superconductores de 8,3 T. Los <b>discos duros</b> almacenan bits como dominios magnéticos. Las aves migratorias y las tortugas se orientan con el campo terrestre. Y los trenes de levitación magnética, como el Maglev de Shanghái, flotan y avanzan a más de 400 km/h gracias a electroimanes.",
    ], svg: rejilla("Los tres campos", ["Propiedad", "Grav./Eléct.", "Magnético"], [["Central", "sí", "no"], ["Conservativo", "sí", "no"], ["Líneas", "abiertas", "cerradas"], ["Actúa sobre", "masas/cargas", "cargas que se mueven"]], "var(--pen)") }),
  ],
  figura: figura("El campo magnético", "Fuerza de Lorentz, movimiento de cargas, corrientes y campos creados", [["Lorentz", "F = q(v × B)", "no hace trabajo"], ["Órbita", "R = mv/qB", "T = 2πm/qB"], ["Hilo", "B = μ₀I/2πr", "líneas circulares"], ["Corrientes", "F/L = μ₀I₁I₂/2πd", "mismo sentido: atraen"]]),
  video: V("cm-a", "Campo magnético: resumen de 2º de Bachillerato", "campo magnético resumen bachillerato"),
  ejemplos: [
    { enunciado: "Un protón se mueve a 2 · 10⁶ m/s perpendicularmente a un campo de 0,5 T. Calcula la fuerza, el radio de la órbita y el periodo.", pasos: ["F = q·v·B = 1,6·10⁻¹⁹ · 2·10⁶ · 0,5 = 1,6·10⁻¹³ N.", "R = m·v/(q·B) = 1,67·10⁻²⁷ · 2·10⁶ / (1,6·10⁻¹⁹ · 0,5) = 0,042 m.", "T = 2π·m/(q·B) = 2π · 1,67·10⁻²⁷ / 8·10⁻²⁰ = 1,31·10⁻⁷ s."], resultado: "F = 1,6 · 10⁻¹³ N; R ≈ 4,2 cm; T ≈ 1,3 · 10⁻⁷ s." },
    { enunciado: "Un electrón con v = 3 · 10⁶ i m/s entra en un campo B = 0,01 k T. Calcula la fuerza (vector).", pasos: ["F = q (v × B), con q = −1,6·10⁻¹⁹ C.", "v × B = 3·10⁶ · 0,01 (i × k) = 3·10⁴ (−j).", "F = −1,6·10⁻¹⁹ · (−3·10⁴ j)."], resultado: "F = 4,8 · 10⁻¹⁵ j N." },
    { enunciado: "En un espectrómetro de masas, iones de carga +e con velocidad 10⁵ m/s describen en B = 0,1 T una semicircunferencia de 10,4 cm de radio. Calcula su masa e identifica el ion.", pasos: ["m = q·B·R / v = 1,6·10⁻¹⁹ · 0,1 · 0,104 / 10⁵.", "m = 1,66·10⁻²⁶ kg.", "En unidades de masa atómica: 1,66·10⁻²⁶ / 1,66·10⁻²⁷ = 10 u."], resultado: "m ≈ 1,66 · 10⁻²⁶ kg ≈ 10 u: boro-10." },
    { enunciado: "Calcula el campo magnético a 5 cm de un cable recto por el que circulan 20 A.", pasos: ["B = μ₀·I / (2π·r) = 4π·10⁻⁷ · 20 / (2π · 0,05).", "B = 2·10⁻⁷ · 20 / 0,05."], resultado: "B = 8 · 10⁻⁵ T, con líneas circulares según la mano derecha." },
    { enunciado: "Dos cables paralelos separados 10 cm llevan 30 A y 50 A en sentidos opuestos. Calcula la fuerza por metro y el campo en el punto medio.", pasos: ["F/L = μ₀·I₁·I₂ / (2π·d) = 2·10⁻⁷ · 30 · 50 / 0,1 = 3·10⁻³ N/m, repulsiva.", "En el punto medio (5 cm), con sentidos opuestos los campos tienen el mismo sentido y se suman.", "B = 2·10⁻⁷ · (30 + 50) / 0,05."], resultado: "F/L = 3 · 10⁻³ N/m (se repelen); B = 3,2 · 10⁻⁴ T." },
    { enunciado: "Un solenoide de 20 cm de longitud tiene 500 espiras y lleva 2 A. Calcula el campo en su interior. ¿Y con un núcleo de hierro de permeabilidad relativa 1000?", pasos: ["B = μ₀·N·I / L = 4π·10⁻⁷ · 500 · 2 / 0,2.", "B = 6,28·10⁻³ T.", "Con hierro: B × 1000."], resultado: "B ≈ 6,3 mT en vacío; ≈ 6,3 T con núcleo de hierro (en la práctica el hierro se satura hacia 2 T)." },
  ],
  errores: [
    "Olvidar que para una carga negativa la fuerza de Lorentz tiene sentido contrario al que da la mano derecha.",
    "Pensar que el campo magnético cambia la rapidez de una partícula: solo cambia la dirección.",
    "Creer que el periodo de giro depende de la velocidad: T = 2πm/(qB) no depende de v.",
    "Confundir el sentido de la fuerza entre corrientes: las del mismo sentido se atraen.",
    "Calcular mal el producto vectorial: i × j = k, j × k = i, k × i = j (y al revés, con signo menos).",
    "Usar el radio de la espira en lugar de la distancia al hilo, o la longitud total del cable en lugar de la del solenoide.",
  ],
  ejercicios: [
    B("¿Por qué no se puede aislar un polo magnético? ¿Qué consecuencia tiene para las líneas de campo?", "Porque no existen monopolos: al partir un imán aparecen nuevos polos. Las líneas de campo son cerradas."),
    B("Describe el experimento de Oersted y su importancia.", "Una corriente desvía una brújula cercana: las corrientes crean campos magnéticos; unió electricidad y magnetismo."),
    B("Calcula la fuerza sobre un electrón que se mueve a 10⁷ m/s perpendicular a un campo de 0,2 T.", "F = 1,6·10⁻¹⁹ · 10⁷ · 0,2 = 3,2·10⁻¹³ N."),
    B("¿Qué fuerza magnética actúa sobre una carga que se mueve paralela al campo?", "Ninguna: sen 0 = 0."),
    B("¿Por qué la fuerza magnética no realiza trabajo?", "Porque es siempre perpendicular a la velocidad."),
    B("Calcula la fuerza sobre un cable de 50 cm con 4 A perpendicular a un campo de 0,3 T.", "F = 4 · 0,5 · 0,3 = 0,6 N."),
    B("Calcula el campo a 2 cm de un hilo con 10 A.", "B = 2·10⁻⁷ · 10 / 0,02 = 10⁻⁴ T."),
    B("Calcula el campo en el centro de una espira de 5 cm de radio con 3 A.", "B = 4π·10⁻⁷ · 3 / 0,1 = 3,77·10⁻⁵ T."),
    B("¿Se atraen o se repelen dos cables paralelos con corrientes del mismo sentido?", "Se atraen."),
    B("Clasifica como dia-, para- o ferromagnéticos: hierro, cobre, aluminio, níquel, agua.", "Ferro: hierro, níquel. Para: aluminio. Dia: cobre, agua."),
    B("¿Qué es un electroimán y qué ventaja tiene sobre un imán permanente?", "Un solenoide con núcleo de hierro; se activa y desactiva con la corriente y se regula su intensidad."),
    B("¿Qué es la temperatura de Curie?", "La temperatura por encima de la cual un material ferromagnético pierde su imanación."),
    M("Un electrón entra a 5 · 10⁶ m/s perpendicular a un campo de 2 mT. Calcula el radio y la frecuencia de giro.", "R = 9,1·10⁻³¹ · 5·10⁶ / (1,6·10⁻¹⁹ · 2·10⁻³) = 1,42·10⁻² m. f = qB/(2πm) = 3,2·10⁻²² / 5,72·10⁻³⁰ = 5,6·10⁷ Hz."),
    M("Una partícula alfa (q = 2e, m = 6,64 · 10⁻²⁷ kg) y un protón entran con la misma velocidad en el mismo campo. Compara sus radios.", "R ∝ m/q: R<sub>α</sub>/R<sub>p</sub> = (4m/2e)/(m/e) = 2 (aproximadamente)."),
    M("Un protón se acelera desde el reposo con 1000 V y entra perpendicularmente en un campo de 0,1 T. Calcula el radio de su órbita.", "v = √(2eΔV/m) = 4,38·10⁵ m/s. R = mv/(eB) = 1,67·10⁻²⁷ · 4,38·10⁵ / 1,6·10⁻²⁰ = 4,57·10⁻² m."),
    M("En un selector de velocidades, E = 3 · 10⁴ V/m y B = 0,05 T. ¿Qué velocidad tienen los iones que pasan sin desviarse?", "v = E/B = 6·10⁵ m/s."),
    M("Una varilla de 20 cm y 30 g lleva una corriente horizontal en un campo horizontal perpendicular de 0,5 T. ¿Qué intensidad debe circular para que flote?", "I·L·B = m·g → I = 0,03 · 9,8 / (0,2 · 0,5) = 2,94 A."),
    M("Una bobina de 100 espiras de 4 cm × 5 cm lleva 0,5 A en un campo de 0,2 T. Calcula el momento máximo del par.", "M = N·I·S·B = 100 · 0,5 · 0,002 · 0,2 = 0,02 N·m."),
    M("Dos hilos paralelos separados 20 cm llevan 10 A y 30 A en el mismo sentido. ¿Dónde se anula el campo entre ellos?", "10/x = 30/(0,2 − x) → 0,2 − x = 3x → x = 0,05 m del de 10 A."),
    M("Calcula la fuerza por metro entre dos cables de alta tensión separados 1 m que llevan 1000 A en sentidos opuestos.", "F/L = 2·10⁻⁷ · 10⁶ / 1 = 0,2 N/m, repulsiva."),
    M("¿Cuántas espiras debe tener un solenoide de 30 cm para producir 0,01 T con 2 A?", "N = B·L/(μ₀·I) = 0,01 · 0,3 / (2,51·10⁻⁶) = 1194 espiras."),
    M("Un protón se mueve con v = (2 · 10⁵ i + 10⁵ j) m/s en B = 0,4 k T. Calcula la fuerza.", "v × B = 0,4 (2·10⁵ (i × k) + 10⁵ (j × k)) = 0,4 (−2·10⁵ j + 10⁵ i) = (4·10⁴ i − 8·10⁴ j). F = e · (…) = (6,4·10⁻¹⁵ i − 1,28·10⁻¹⁴ j) N."),
    A("(Tipo PAU) Un ion de ²⁴Mg⁺ (m = 3,98 · 10⁻²⁶ kg) acelerado por 2000 V entra en un campo de 0,25 T. a) Velocidad. b) Radio. c) Radio del ²⁶Mg⁺ (m = 4,32 · 10⁻²⁶ kg) y separación entre ambos tras media vuelta.", "a) v = √(2 · 1,6·10⁻¹⁹ · 2000 / 3,98·10⁻²⁶) = 1,27·10⁵ m/s. b) R = 3,98·10⁻²⁶ · 1,27·10⁵ / (1,6·10⁻¹⁹ · 0,25) = 0,126 m. c) R ∝ √m: R' = 0,126 · √(4,32/3,98) = 0,131 m. Separación: 2(R' − R) ≈ 1,0 cm."),
    A("Un protón entra a 10⁶ m/s formando 30° con un campo de 0,1 T. Describe su trayectoria y calcula el radio y el paso de la hélice.", "Hélice. v⊥ = 5·10⁵ m/s; v∥ = 8,66·10⁵ m/s. R = mv⊥/(qB) = 5,2·10⁻² m. T = 2πm/(qB) = 6,56·10⁻⁷ s. Paso = v∥ · T = 0,57 m."),
    A("Tres hilos paralelos indefinidos pasan por los vértices de un triángulo equilátero de 10 cm de lado con 5 A cada uno en el mismo sentido. Calcula el campo en el centro.", "Cero: tres campos iguales a 120° se anulan."),
    A("Dos hilos paralelos separados 6 cm llevan 4 A (mismo sentido). Calcula el campo en un punto a 5 cm de cada uno.", "Hilos en (±3, 0) cm y punto en (0, 4) cm. Cada B = 2·10⁻⁷ · 4 / 0,05 = 1,6·10⁻⁵ T, perpendicular a su radio. Con vectores unitarios: B₁ ∝ (−0,8; 0,6) y B₂ ∝ (−0,8; −0,6). Las componentes perpendiculares al plano de los hilos se anulan y las paralelas se suman: B = 2 · 1,6·10⁻⁵ · 0,8 = 2,56·10⁻⁵ T, paralelo al plano que forman los hilos."),
    A("Explica cómo funciona un ciclotrón y calcula la energía máxima de protones en uno de 0,5 m de radio con B = 1,5 T.", "Las partículas giran en las «des» y se aceleran en cada paso por el hueco con un campo alterno de frecuencia fija. v<sub>máx</sub> = qBR/m = 1,6·10⁻¹⁹ · 1,5 · 0,5 / 1,67·10⁻²⁷ = 7,19·10⁷ m/s; E = ½mv² = 4,3·10⁻¹² J ≈ 27 MeV."),
    A("Una partícula cargada describe una circunferencia en un campo magnético. Si se duplica su energía cinética, ¿cómo cambian su radio y su periodo?", "v se multiplica por √2: R × √2; el periodo no cambia."),
    A("Deduce la expresión del campo de un solenoide largo a partir de la ley de Ampère.", "Rectángulo con lado L dentro (paralelo al eje) y el resto fuera o perpendicular: solo contribuye el lado interior: B·L = μ₀·N·I → B = μ₀NI/L."),
  ],
  quiz: [
    q4("Las líneas de campo magnético son…", ["abiertas", "cerradas", "radiales", "rectas siempre"], 1, "No hay monopolos."),
    q4("La unidad de campo magnético es el…", ["weber", "tesla", "henrio", "gauss del SI"], 1, "T."),
    q4("Oersted descubrió que…", ["los imanes atraen el hierro", "las corrientes crean campos magnéticos", "la luz es una onda", "existe el electrón"], 1, "1820."),
    q4("La fuerza de Lorentz sobre una carga en reposo es…", ["máxima", "nula", "qB", "infinita"], 1, "Necesita v."),
    q4("La fuerza magnética sobre una carga es…", ["paralela a v", "perpendicular a v y a B", "paralela a B", "radial"], 1, "Producto vectorial."),
    q4("El trabajo de la fuerza magnética es…", ["positivo", "nulo", "negativo", "qvB"], 1, "F ⊥ v."),
    q4("Una carga que entra perpendicular a B uniforme describe…", ["una recta", "una parábola", "una circunferencia", "una hélice"], 2, "F centrípeta."),
    q4("El radio de giro es…", ["qB/mv", "mv/qB", "mB/qv", "qv/mB"], 1, "R = mv/qB."),
    q4("El periodo de giro…", ["aumenta con v", "no depende de v", "disminuye con v", "depende de R²"], 1, "T = 2πm/qB."),
    q4("Si v forma un ángulo con B, la trayectoria es…", ["circular", "una hélice", "una parábola", "recta"], 1, "Componente paralela."),
    q4("En un selector de velocidades pasan las partículas con…", ["v = B/E", "v = E/B", "v = EB", "cualquier v"], 1, "qE = qvB."),
    q4("La fuerza sobre un cable con corriente es…", ["I·L·B·sen α", "I·B/L", "μ₀I/2πr", "q·E"], 0, "F = I L × B."),
    q4("El campo de un hilo rectilíneo es…", ["μ₀I/2πr", "μ₀I/2R", "μ₀NI/L", "kQ/r²"], 0, "Líneas circulares."),
    q4("El campo en el centro de una espira es…", ["μ₀I/2πR", "μ₀I/2R", "μ₀I/R²", "0"], 1, "Perpendicular al plano."),
    q4("El campo dentro de un solenoide largo es…", ["nulo", "uniforme", "radial", "1/r²"], 1, "μ₀NI/L."),
    q4("Dos corrientes paralelas del mismo sentido…", ["se repelen", "se atraen", "no interaccionan", "giran"], 1, "Al revés que las cargas."),
    q4("μ₀ vale…", ["4π·10⁻⁷ T·m/A", "8,85·10⁻¹²", "9·10⁹", "6,67·10⁻¹¹"], 0, "Permeabilidad del vacío."),
    q4("El campo magnético es…", ["conservativo", "no conservativo", "central", "escalar"], 1, "Ley de Ampère."),
    q4("El hierro es un material…", ["diamagnético", "paramagnético", "ferromagnético", "no magnético"], 2, "Dominios magnéticos."),
    q4("En un motor eléctrico, el conmutador sirve para…", ["aumentar la tensión", "invertir la corriente cada media vuelta", "frenar", "medir"], 1, "Mantiene el giro."),
  ],
  examen: [
    q4("Protón a 10⁶ m/s ⊥ a 1 T: F =", ["1,6·10⁻¹³ N", "1,6·10⁻¹⁹ N", "10⁶ N", "1,6·10⁻⁶ N"], 0, "qvB."),
    q4("Si se duplica B, el radio de giro…", ["se duplica", "se reduce a la mitad", "no cambia", "se cuadruplica"], 1, "R ∝ 1/B."),
    q4("Campo a 10 cm de un hilo con 50 A:", ["10⁻⁴ T", "10⁻⁵ T", "5·10⁻⁴ T", "10⁻³ T"], 0, "2·10⁻⁷ · 50 / 0,1."),
    q4("Cable de 2 m, 5 A, paralelo a B = 1 T: F =", ["0", "10 N", "5 N", "2 N"], 0, "sen 0 = 0."),
    q4("Solenoide 1000 espiras, 0,5 m, 1 A: B ≈", ["2,5 mT", "25 mT", "0,25 mT", "2,5 T"], 0, "4π·10⁻⁷ · 2000."),
    q4("F/L entre hilos de 1 A a 1 m:", ["2·10⁻⁷ N/m", "10⁻⁷ N/m", "4π·10⁻⁷ N/m", "1 N/m"], 0, "Antigua definición del amperio."),
    q4("Selector con E = 2000 V/m y B = 0,01 T: v =", ["2·10⁵ m/s", "20 m/s", "2·10³ m/s", "2·10⁷ m/s"], 0, "E/B."),
    q4("Un electrón y un protón con igual v en el mismo B: el radio mayor es el…", ["del protón", "del electrón", "iguales", "depende del sentido"], 0, "R ∝ m."),
  ],
  feynman: ["Por qué no existen imanes de un solo polo", "Por qué un campo magnético no puede acelerar una partícula", "Por qué las partículas giran en círculos en un campo magnético", "Cómo funciona un motor eléctrico", "Por qué dos cables con corriente en el mismo sentido se atraen", "Por qué hay auroras cerca de los polos"],
  mapa: mapaB("CAMPO MAGNÉTICO", [["Lorentz", "F = q(v × B)", "var(--pen)"], ["Órbitas", "R = mv/qB ; T = 2πm/qB", "var(--leaf)"], ["Corrientes", "F = I(L × B)", "var(--red)"], ["Campos creados", "μ₀I/2πr ; μ₀NI/L", "var(--muted)"]]),
  tarjetas: [
    ["Fuerza de Lorentz", "F = q · (v × B); F = |q|·v·B·sen α."],
    ["Tesla", "1 T = 1 N / (C · m/s)."],
    ["Radio de giro", "R = m·v / (|q|·B)."],
    ["Periodo de giro", "T = 2π·m / (|q|·B), no depende de v."],
    ["Selector de velocidades", "v = E / B."],
    ["Fuerza sobre un cable", "F = I · (L × B)."],
    ["Momento sobre una espira", "M = N·I·S·B·sen θ."],
    ["Hilo rectilíneo", "B = μ₀·I / (2π·r)."],
    ["Espira y solenoide", "μ₀·I / 2R ; μ₀·N·I / L."],
    ["Corrientes paralelas", "F/L = μ₀·I₁·I₂ / (2π·d); mismo sentido: atracción."],
    ["Ley de Ampère", "∮ B·dl = μ₀·I<sub>enc</sub>."],
    ["Gauss magnético", "Flujo por superficie cerrada = 0: no hay monopolos."],
  ],
  glosario: [
    ["Monopolo magnético", "Polo magnético aislado; no se ha encontrado nunca."],
    ["Magnetosfera", "Región dominada por el campo magnético de un planeta."],
    ["Tesla", "Unidad SI de campo magnético."],
    ["Fuerza de Lorentz", "Fuerza que un campo magnético ejerce sobre una carga en movimiento."],
    ["Producto vectorial", "Operación entre vectores cuyo resultado es perpendicular a ambos."],
    ["Hélice", "Trayectoria en espiral que combina giro y avance."],
    ["Espectrómetro de masas", "Aparato que separa iones según su relación masa/carga."],
    ["Ciclotrón", "Acelerador circular de partículas con campo magnético y eléctrico alterno."],
    ["Momento magnético", "Producto N·I·S de una espira; mide su comportamiento como imán."],
    ["Conmutador", "Pieza que invierte la corriente en un motor de corriente continua."],
    ["Permeabilidad magnética", "Propiedad de un medio que determina el campo creado por una corriente."],
    ["Solenoide", "Bobina larga de espiras que crea un campo uniforme en su interior."],
    ["Electroimán", "Solenoide con núcleo de hierro que actúa como imán al pasar corriente."],
    ["Dominio magnético", "Región de un ferromagnético con los imanes atómicos alineados."],
    ["Temperatura de Curie", "Temperatura por encima de la cual se pierde el ferromagnetismo."],
  ],
  situacion: {
    titulo: "Construimos un motor eléctrico casero",
    reto: "Para la feria de ciencia del centro, vuestro equipo debe construir un motor eléctrico sencillo con una pila, un imán y cable de cobre esmaltado, y explicar su funcionamiento con la física del campo magnético.",
    pasos: [
      "Construid una bobina de unas 20 espiras y montadla sobre dos soportes de clip conectados a una pila, con un imán debajo.",
      "Lijad el esmalte de los extremos solo por un lado y explicad por qué funciona como un conmutador.",
      "Medid la corriente con un polímetro y estimad el campo del imán con una app de magnetómetro del móvil.",
      "Calculad la fuerza sobre cada lado y el momento del par máximo.",
      "Probad qué cambia al invertir la pila, el imán o el número de espiras y explicad los resultados.",
    ],
    producto: "Un motor que funcione y un póster con el esquema y los cálculos.",
    evaluacion: ["El motor funciona y se explica el papel del conmutador.", "Se aplican correctamente F = I·L·B y M = N·I·S·B.", "Se diseñan y analizan las variaciones de forma sistemática.", "La presentación es clara y rigurosa."],
  },
  familias: [
    "Usad una app de magnetómetro en el móvil para medir el campo cerca de imanes de nevera y aparatos.",
    "Acercad una brújula a un cable de un aparato encendido y apagado (sin abrirlo) y observad.",
    "Buscad imágenes o predicciones de auroras y hablad de su origen.",
    "Desmontad juntos un juguete viejo con motor y localizad el imán y la bobina.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Campo magnético»: campos magnéticos generados por hilos con corriente eléctrica en distintas configuraciones geométricas (rectilíneos, espiras, solenoides); interacción entre campos y partículas cargadas o conductores (fuerza de Lorentz, fuerza entre corrientes); líneas de campo, ley de Ampère, naturaleza no conservativa; aplicaciones (motores, espectrómetros, aceleradores, resonancia magnética).`,
    ideas: [
      "Reproducir el experimento de Oersted con una pila, un cable y una brújula.",
      "Simulación PhET «Laboratorio electromagnético de Faraday» (imán y electroimán).",
      "Medir con el magnetómetro del móvil el campo de un solenoide frente a la corriente.",
      "Visita virtual al CERN para ver los imanes del LHC.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Simulación «Imanes y electroimanes» (PhET)", url: "https://phet.colorado.edu/es/simulations/magnets-and-electromagnets" },
    { t: "CERN: los imanes del LHC", url: "https://home.cern/science/engineering/pulling-together-superconducting-electromagnets" },
  ],
  revisado: "2026-11-21",
};
