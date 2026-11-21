// Física 2º Bachillerato · Física relativista y cuántica (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU } = require("./_bach2-fis");

// Factor de Lorentz frente a v/c (γ/8 en el eje vertical).
const gammaSVG = graf("Factor de Lorentz γ = 1/√(1 − v²/c²): vale casi 1 a velocidades cotidianas y se dispara al acercarse a la de la luz", "v/c", "γ", [
  { p: Array.from({ length: 50 }, (_, i) => { const b = (i / 49) * 0.99; return [b, Math.min(1, 1 / Math.sqrt(1 - b * b) / 8)]; }), c: "var(--red)", t: "γ" },
  { p: [[0, 0.125], [1, 0.125]], c: "var(--muted)", t: "γ = 1", dash: true },
]);

// Efecto fotoeléctrico: Ec frente a f para dos metales (rectas paralelas de pendiente h).
const fotoSVG = graf("Efecto fotoeléctrico: la energía cinética máxima crece linealmente con la frecuencia a partir de la frecuencia umbral; la pendiente es h para todos los metales", "f", "Ec máx", [
  { p: [[0.2, 0], [0.9, 0.84]], c: "var(--pen)", t: "metal 1" },
  { p: [[0.45, 0], [1, 0.66]], c: "var(--red)", t: "metal 2" },
], `<text x="70" y="166" font-size="10" fill="var(--pen)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">f₀₁</text><text x="128" y="166" font-size="10" fill="var(--red)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">f₀₂</text>`);

// Niveles de energía del hidrógeno (modelo de Bohr), con la escala comprimida arriba para que se lean.
const niv = [[1, "−13,6", 160], [2, "−3,4", 92], [3, "−1,51", 64], [4, "−0,85", 46]];
const bohrSVG = marco("Niveles de energía del átomo de hidrógeno: al saltar el electrón a un nivel inferior emite un fotón de energía igual a la diferencia", `
  <defs><marker id="boh" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--red)"/></marker></defs>
  ${niv.map(([n, e, y]) => `<path d="M60 ${y} H 200" stroke="var(--ink)" stroke-width="2"/>${T(40, y + 4, "n=" + n, { fs: 10, b: true })}${T(226, y + 4, e + " eV", { fs: 10, b: true, c: "var(--muted)" })}`).join("")}
  <path d="M60 26 H 200" stroke="var(--muted)" stroke-width="1.4" stroke-dasharray="4 3"/>${T(226, 30, "0 eV", { fs: 10, b: true, c: "var(--muted)" })}
  <path d="M84 92 V 156" stroke="var(--red)" stroke-width="2.2" marker-end="url(#boh)"/><path d="M112 64 V 156" stroke="var(--red)" stroke-width="2.2" marker-end="url(#boh)"/>
  <path d="M150 64 V 88" stroke="var(--pen)" stroke-width="2.2" marker-end="url(#boh)"/><path d="M176 46 V 88" stroke="var(--pen)" stroke-width="2.2" marker-end="url(#boh)"/>
  ${T(98, 176, "Lyman (UV)", { fs: 10, b: true, c: "var(--red)" })}${T(163, 112, "Balmer (visible)", { fs: 10, b: true, c: "var(--pen)" })}`);

module.exports = {
  materia: "Física",
  curso: "2-bachillerato",
  titulo: "Física relativista y cuántica",
  minutos: 120,
  objetivos: [
    "Reconocer los problemas que la física clásica no podía explicar a finales del siglo XIX",
    "Aplicar los postulados de la relatividad especial: dilatación del tiempo, contracción de longitudes y E = m·c²",
    "Explicar la hipótesis de Planck y el efecto fotoeléctrico con el concepto de fotón",
    "Interpretar los espectros atómicos con el modelo de Bohr",
    "Aplicar la hipótesis de De Broglie y el principio de incertidumbre de Heisenberg",
    "Resolver problemas tipo PAU de relatividad, efecto fotoeléctrico y dualidad onda-corpúsculo",
  ],
  claves: ["sistema de referencia inercial", "postulados de Einstein", "factor de Lorentz", "dilatación del tiempo", "contracción de la longitud", "equivalencia masa-energía", "cuerpo negro", "cuanto", "fotón", "efecto fotoeléctrico", "trabajo de extracción", "modelo de Bohr", "dualidad onda-corpúsculo", "longitud de onda de De Broglie", "principio de incertidumbre"],
  pregunta: {
    texto: "¿Por qué tu móvil necesita la teoría de la relatividad para que funcione el GPS?",
    respuesta: "Porque los relojes de los satélites GPS marchan a un ritmo distinto que los de la Tierra. Por su velocidad, la <mark>relatividad especial</mark> los atrasa unos 7 μs al día; por estar más lejos del campo gravitatorio terrestre, la relatividad general los adelanta unos 45 μs. En total, se adelantan unos 38 μs diarios. Como la señal viaja a la velocidad de la luz, ese error se traduciría en <b>más de 10 km de desvío al día</b> si no se corrigiera.",
  },
  lectura: {
    titulo: "El año milagroso de Einstein",
    html: `<p>En 1905, Albert Einstein tenía 26 años y trabajaba como técnico de tercera clase en la oficina de patentes de Berna, porque no había conseguido plaza en ninguna universidad. Ese año publicó cuatro artículos que cambiaron la física. En el primero explicó el efecto fotoeléctrico suponiendo que la luz está formada por cuantos de energía, los fotones: por él recibiría el Premio Nobel en 1921. En el segundo explicó el movimiento browniano y dio una prueba decisiva de la existencia de los átomos.</p><p>En el tercero, «Sobre la electrodinámica de los cuerpos en movimiento», presentó la relatividad especial: el tiempo y el espacio dejaban de ser absolutos. Y en el cuarto, de solo tres páginas, dedujo que la masa es una forma de energía: E = m·c². Dos de esos artículos fundaron las dos grandes teorías del siglo XX, la relatividad y la física cuántica, que estudiarás en este tema. Hoy sostienen tecnologías que usas cada día, desde el GPS hasta la cámara de tu móvil.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 La crisis de la física clásica", p: [
      "A finales del siglo XIX, la física parecía casi completa: la mecánica de Newton, el electromagnetismo de Maxwell y la termodinámica explicaban casi todo. Pero quedaban unas pocas «nubes». Las ecuaciones de Maxwell predecían que la luz viaja a una velocidad c, pero ¿respecto a qué? Se suponía que respecto al <b>éter</b>. En 1887, el <mark>experimento de Michelson y Morley</mark> intentó medir la velocidad de la Tierra a través del éter comparando la luz en dos direcciones perpendiculares, y no encontró ninguna diferencia: la velocidad de la luz era la misma en todas las direcciones.",
      "Otros fenómenos tampoco encajaban: la <b>radiación del cuerpo negro</b> (la teoría clásica predecía una emisión infinita en el ultravioleta, la «catástrofe ultravioleta»), el <b>efecto fotoeléctrico</b> y los <b>espectros de rayas</b> de los átomos, que la física clásica no podía explicar. Para resolver el primer problema hizo falta la <b>teoría de la relatividad</b>, que revisa los conceptos de espacio y tiempo a velocidades próximas a c. Para los demás hizo falta la <b>física cuántica</b>, que describe el mundo de los átomos. Ambas incluyen a la física clásica como caso límite.",
    ], svg: compara("Dos revoluciones", ["Relatividad", ["velocidades ≈ c", "Michelson-Morley", "espacio y tiempo", "E = mc²"]], ["Cuántica", ["escala atómica", "cuerpo negro", "fotoeléctrico", "espectros"]], "var(--red)", "var(--pen)") }),
    bloque({ h: "1.2 Los postulados de la relatividad especial", p: [
      "La física clásica usa la <b>relatividad de Galileo</b>: las leyes de la mecánica son las mismas en todos los sistemas inerciales, y las velocidades se suman (si en un tren a 100 km/h lanzas una pelota hacia delante a 20 km/h, desde el andén va a 120 km/h). Pero esto choca con el resultado de Michelson y Morley. En 1905, Einstein propuso dos <mark>postulados</mark>: (1) <b>las leyes de la física son las mismas en todos los sistemas de referencia inerciales</b>; no hay ningún experimento que permita saber si un sistema está en reposo absoluto. (2) <b>La velocidad de la luz en el vacío es la misma para todos los observadores inerciales</b>, independientemente del movimiento del foco o del observador.",
      "El segundo postulado parece absurdo: si persigues un rayo de luz a 0,9c, lo sigues viendo alejarse a c. Para que eso sea posible, el espacio y el tiempo no pueden ser absolutos: dependen del observador. Una consecuencia inmediata es la <b>relatividad de la simultaneidad</b>: dos sucesos simultáneos para un observador pueden no serlo para otro que se mueve respecto a él. Ninguna partícula con masa puede alcanzar la velocidad de la luz, que se convierte en un <b>límite de velocidad</b> universal para la materia y la información.",
    ], svg: pasos("Postulados de Einstein", ["Mismas leyes en todo sistema inercial", "c es igual para todos los observadores", "Espacio y tiempo dependen del observador", "Nada con masa alcanza c"], "var(--red)"), video: V("rel-a", "Teoría de la relatividad especial", "relatividad especial") }),
    bloque({ h: "1.3 Dilatación del tiempo y contracción de la longitud", p: [
      "Imagina un reloj de luz: un pulso que rebota entre dos espejos. Para un observador que ve moverse el reloj, la luz recorre un camino diagonal más largo a la misma velocidad c, así que tarda más: el reloj en movimiento va más lento. Se obtiene la <mark>dilatación del tiempo</mark>: <b>Δt = γ · Δt₀</b>, donde Δt₀ es el <b>tiempo propio</b> (medido por un reloj en reposo respecto al suceso) y <b>γ = 1/√(1 − v²/c²)</b> es el <b>factor de Lorentz</b>, siempre mayor o igual que 1.",
      "Del mismo modo, un objeto en movimiento se mide más corto en la dirección del movimiento: es la <mark>contracción de la longitud</mark>, <b>L = L₀ / γ</b>, donde L₀ es la <b>longitud propia</b> (medida en reposo). A velocidades cotidianas, γ ≈ 1 y los efectos son inapreciables, pero se comprueban a diario: los <b>muones</b> creados por los rayos cósmicos a 15 km de altura viven solo 2,2 μs en reposo y, sin embargo, llegan al suelo porque, vistos desde la Tierra, su tiempo se dilata. Los relojes atómicos en aviones y satélites también confirman la dilatación con gran precisión.",
    ], extra: formula("γ = 1/√(1 − v²/c²) ; Δt = γ·Δt₀ ; L = L₀/γ"), svg: gammaSVG }),
    bloque({ h: "1.4 Masa y energía: E = m·c²", p: [
      "En relatividad, la cantidad de movimiento es <b>p = γ·m·v</b> y crece sin límite al acercarse a c: por eso hace falta una energía infinita para alcanzar la velocidad de la luz. La energía total de una partícula es <mark>E = γ·m·c²</mark>. Cuando está en reposo, γ = 1 y queda la <b>energía en reposo</b>, <b>E₀ = m·c²</b>: la masa es una forma de energía. La <b>energía cinética</b> relativista es la diferencia entre ambas: <b>E<sub>c</sub> = (γ − 1)·m·c²</b>, que a velocidades bajas coincide con ½·m·v².",
      "Como c² es enorme (9 · 10¹⁶ m²/s²), una masa pequeña equivale a una energía gigantesca: 1 g de materia equivale a 9 · 10¹³ J, la energía de una pequeña bomba nuclear. La equivalencia masa-energía explica la energía de las <b>reacciones nucleares</b> (la masa de los productos es algo menor que la de los reactivos), la energía del Sol, que pierde unos 4 millones de toneladas de masa por segundo, y la creación y aniquilación de partículas y antipartículas. En física de partículas, las masas se dan en energía: el electrón tiene 0,511 MeV/c² y el protón, 938 MeV/c².",
    ], extra: formula("E = γmc² ; E₀ = mc² ; Ec = (γ − 1)mc² ; p = γmv"), svg: ficha("Equivalencia masa-energía", "E₀ = m · c²", ["1 g ↔ 9·10¹³ J", "electrón: 0,511 MeV", "protón: 938 MeV", "Sol: −4·10⁹ kg/s"], "var(--red)"), video: V("rel-d", "El significado de E = mc²", "E=mc2") }),
    bloque({ h: "2.1 La radiación del cuerpo negro y la hipótesis de Planck", p: [
      "Todo cuerpo caliente emite radiación electromagnética: una estufa brilla en rojo, un filamento en blanco. Un <b>cuerpo negro</b> es un emisor y absorbente ideal; el Sol y las estrellas se le parecen mucho. Su espectro depende solo de la temperatura: el máximo de emisión se desplaza hacia longitudes de onda más cortas al calentarlo según la <b>ley de Wien</b>, <b>λ<sub>máx</sub> · T = 2,898 · 10⁻³ m·K</b>, y la potencia total crece con T⁴ (ley de Stefan-Boltzmann). El Sol, a 5800 K, emite sobre todo en el visible (500 nm); nuestro cuerpo, a 310 K, en el infrarrojo (9,3 μm).",
      "La física clásica no podía explicar la forma de ese espectro. En 1900, Max Planck lo consiguió con una hipótesis audaz: la energía solo se emite o absorbe en <mark>cuantos</mark>, paquetes de valor <b>E = h·f</b>, donde f es la frecuencia y <b>h = 6,63 · 10⁻³⁴ J·s</b> es la constante de Planck. Planck lo consideró un truco matemático, pero era el nacimiento de la física cuántica: la energía está <b>cuantizada</b>. Como h es tan pequeña, en el mundo cotidiano los saltos de energía son imperceptibles y la energía parece continua.",
    ], extra: formula("E = h·f ; h = 6,63·10⁻³⁴ J·s ; Wien: λmáx·T = 2,898·10⁻³ m·K"), svg: barras("λ máxima de emisión", "μm", [["Persona 310 K", 9.35, "var(--red)", "9,35"], ["Estufa 1000 K", 2.9, "#b45309", "2,9"], ["Bombilla 3000 K", 0.97, "var(--leaf)", "0,97"], ["Sol 5800 K", 0.5, "var(--pen)", "0,50"]]) }),
    bloque({ h: "2.2 El efecto fotoeléctrico", p: [
      "El <mark>efecto fotoeléctrico</mark> es la emisión de electrones por un metal cuando se ilumina. Los experimentos mostraban hechos que la teoría ondulatoria no podía explicar: (1) para cada metal existe una <b>frecuencia umbral</b> f₀ por debajo de la cual no se emiten electrones, por intensa que sea la luz; (2) la energía cinética de los electrones depende de la frecuencia, <b>no de la intensidad</b>; (3) la intensidad solo aumenta el número de electrones; (4) la emisión es <b>instantánea</b>, sin tiempo de acumulación.",
      "En 1905, Einstein lo explicó suponiendo que la luz está formada por <b>fotones</b> de energía h·f. Cada fotón es absorbido por un solo electrón: una parte de la energía se usa para arrancarlo (el <b>trabajo de extracción</b>, W₀ = h·f₀) y el resto se convierte en energía cinética: <mark>h·f = W₀ + E<sub>c,máx</sub></mark>. Si se aplica un potencial de frenado V<sub>f</sub> que detiene los electrones más rápidos, <b>e·V<sub>f</sub> = E<sub>c,máx</sub></b>. Millikan comprobó la ecuación en 1916 y midió h. El efecto fotoeléctrico es la base de las células solares, los sensores de las cámaras y las puertas automáticas.",
    ], extra: formula("h·f = W₀ + Ec,máx ; W₀ = h·f₀ ; e·Vf = Ec,máx"), svg: fotoSVG, video: V("rel-b", "¿Qué es el efecto fotoeléctrico?", "efecto fotoeléctrico") }),
    bloque({ h: "2.3 Los espectros atómicos y el modelo de Bohr", p: [
      "Un gas calentado o atravesado por una descarga eléctrica no emite un espectro continuo, sino un <b>espectro de rayas</b>: solo unas pocas longitudes de onda, características de cada elemento, como una huella dactilar. Así se descubrió el helio en el Sol antes que en la Tierra. Las rayas del hidrógeno siguen una ley sencilla, la <b>fórmula de Rydberg</b>: 1/λ = R<sub>H</sub>·(1/n₁² − 1/n₂²), con R<sub>H</sub> = 1,097 · 10⁷ m⁻¹.",
      "En 1913, Niels Bohr lo explicó con un modelo que aplicaba la cuantización al átomo: (1) el electrón gira en ciertas <b>órbitas estables</b> sin emitir energía; (2) en ellas, el momento angular está cuantizado (m·v·r = n·h/2π); (3) el electrón emite o absorbe un fotón al <b>saltar</b> entre órbitas, con <mark>h·f = E₂ − E₁</mark>. Las energías del hidrógeno son <b>E<sub>n</sub> = −13,6/n² eV</b>. Las transiciones al nivel 1 forman la serie de Lyman (ultravioleta); al nivel 2, la de Balmer (visible). El modelo de Bohr falló con átomos de más electrones, pero abrió el camino a la mecánica cuántica.",
    ], extra: formula("Eₙ = −13,6/n² eV ; h·f = E₂ − E₁ ; 1 eV = 1,6·10⁻¹⁹ J"), svg: bohrSVG }),
    bloque({ h: "2.4 La dualidad onda-corpúsculo", p: [
      "Si la luz, que es una onda, se comporta también como partícula, ¿podría la materia comportarse como una onda? En 1924, Louis de Broglie propuso que toda partícula en movimiento tiene asociada una onda de longitud <mark>λ = h/p = h/(m·v)</mark>. En 1927, Davisson y Germer lo confirmaron al observar la <b>difracción de electrones</b> en un cristal de níquel, igual que la de los rayos X. Hoy se han observado interferencias con neutrones, átomos e incluso moléculas de decenas de átomos.",
      "Para objetos cotidianos, λ es ridículamente pequeña (un balón a 10 m/s tiene λ ≈ 10⁻³⁴ m) y su carácter ondulatorio es imperceptible. Pero para un electrón acelerado con 100 V, λ ≈ 0,12 nm, comparable a las distancias entre átomos. Esto se aprovecha en el <b>microscopio electrónico</b>, que alcanza resoluciones mil veces mejores que el óptico. La <b>dualidad onda-corpúsculo</b> es un principio general: la luz y la materia se propagan como ondas y se detectan como partículas; ningún experimento muestra ambos aspectos a la vez (principio de complementariedad de Bohr).",
    ], extra: formula("λ = h/p = h/(m·v) ; electrón acelerado: p = √(2·m·e·V)"), svg: compara("Dualidad", ["Onda", ["interferencia", "difracción", "λ = h/p", "propagación"]], ["Partícula", ["fotoeléctrico", "detección en un punto", "E = hf, p = h/λ", "interacción"]], "var(--pen)", "var(--red)") }),
    bloque({ h: "2.5 El principio de incertidumbre", p: [
      "En 1927, Werner Heisenberg dedujo que hay pares de magnitudes que <b>no se pueden conocer simultáneamente con precisión ilimitada</b>. Para la posición y la cantidad de movimiento: <mark>Δx · Δp ≥ h/4π</mark>. Para la energía y el tiempo: <b>ΔE · Δt ≥ h/4π</b>. No se trata de una limitación de los aparatos, sino de una propiedad de la naturaleza: una partícula descrita por una onda no tiene a la vez una posición y una longitud de onda (y por tanto, un momento) perfectamente definidas.",
      "Para un electrón confinado en un átomo (Δx ≈ 10⁻¹⁰ m), la incertidumbre en su velocidad es de cientos de kilómetros por segundo: no tiene sentido hablar de una órbita definida, como en el modelo de Bohr. Para un balón, la incertidumbre es tan pequeña que es indetectable. El principio de incertidumbre explica por qué los electrones no caen al núcleo, la anchura natural de las rayas espectrales y la existencia de una <b>energía mínima</b> en cualquier sistema confinado. Supuso el fin del <b>determinismo</b> clásico: no se puede predecir con exactitud la trayectoria de una partícula, solo las probabilidades.",
    ], extra: formula("Δx · Δp ≥ h/4π ; ΔE · Δt ≥ h/4π"), svg: rejilla("Incertidumbre Δx = 10⁻¹⁰ m", ["Objeto", "Masa", "Δv mínima"], [["Electrón", "9,1·10⁻³¹ kg", "5,8·10⁵ m/s"], ["Protón", "1,7·10⁻²⁷ kg", "316 m/s"], ["Grano polvo", "10⁻¹² kg", "5·10⁻¹³ m/s"], ["Balón", "0,4 kg", "1,3·10⁻²⁴ m/s"]], "var(--leaf)"), video: V("rel-c", "Hoy sí que vas a entender el principio de incertidumbre", "principio de incertidumbre") }),
    bloque({ h: "2.6 La mecánica cuántica", p: [
      "En 1926, Erwin Schrödinger escribió la ecuación que describe cómo evoluciona la <mark>función de onda</mark> ψ de una partícula. Max Born la interpretó: |ψ|² es la <b>densidad de probabilidad</b> de encontrar la partícula en cada punto. La mecánica cuántica no predice dónde estará un electrón, sino la probabilidad de encontrarlo en cada lugar. En el átomo, las órbitas de Bohr se sustituyen por <b>orbitales</b>: regiones donde la probabilidad de encontrar el electrón es alta, descritas por los <b>números cuánticos</b> que estudiaste en Química.",
      "La mecánica cuántica predice fenómenos sin equivalente clásico: el <b>efecto túnel</b> (una partícula puede atravesar una barrera de energía que clásicamente no podría superar, lo que explica la desintegración alfa y se usa en el microscopio de efecto túnel), la <b>superposición</b> de estados y el <b>entrelazamiento</b>, que Einstein llamó «acción fantasmal a distancia» y que hoy se aprovecha en la criptografía y los ordenadores cuánticos. Es la teoría más precisa jamás formulada: sus predicciones se han confirmado con hasta doce cifras decimales.",
    ], svg: ficha("Ideas cuánticas", "|ψ|² = probabilidad", ["orbitales, no órbitas", "efecto túnel", "superposición", "entrelazamiento"], "var(--pen)"), video: V("rel-e", "¿Qué es la mecánica cuántica?", "mecánica cuántica") }),
    bloque({ h: "2.7 La física cuántica en la tecnología", p: [
      "Gran parte de la tecnología actual es física cuántica aplicada. Los <b>semiconductores</b> de los chips, los transistores y los LED solo se entienden con la teoría de bandas de energía de los electrones en los sólidos. El <mark>láser</mark> se basa en la emisión estimulada propuesta por Einstein en 1917: un fotón provoca que un átomo excitado emita otro fotón idéntico, y así se obtiene luz coherente y monocromática. Las <b>células fotovoltaicas</b> y los sensores de las cámaras usan el efecto fotoeléctrico interno.",
      "En medicina, la <b>resonancia magnética</b> se basa en el espín cuántico de los protones, y la <b>tomografía por emisión de positrones</b>, en la aniquilación materia-antimateria (E = mc²). Los <b>relojes atómicos</b>, que definen el segundo y hacen posible el GPS, cuentan las oscilaciones de transiciones cuánticas del cesio. Y la segunda revolución cuántica, que aprovecha la superposición y el entrelazamiento, está desarrollando ordenadores cuánticos, comunicaciones imposibles de espiar y sensores de precisión extraordinaria.",
    ], svg: rejilla("Tecnología cuántica", ["Tecnología", "Fenómeno"], [["Chips, LED", "bandas de energía"], ["Láser", "emisión estimulada"], ["Placas solares", "efecto fotoeléctrico"], ["Resonancia", "espín nuclear"], ["Reloj atómico, GPS", "transiciones + relatividad"]], "var(--pen)") }),
  ],
  figura: figura("Física relativista y cuántica", "Las dos teorías que revolucionaron la física del siglo XX", [["Relatividad", "Δt = γΔt₀", "L = L₀/γ"], ["Masa-energía", "E = mc²", "Ec = (γ−1)mc²"], ["Fotoeléctrico", "hf = W₀ + Ec", "eVf = Ec"], ["Dualidad", "λ = h/p", "ΔxΔp ≥ h/4π"]], "var(--red)"),
  video: V("rel-a", "Teoría de la relatividad especial", "relatividad especial"),
  ejemplos: [
    { enunciado: "Un muon vive 2,2 μs en reposo y se mueve a 0,99c. ¿Cuánto vive medido desde la Tierra y qué distancia recorre?", pasos: ["γ = 1/√(1 − 0,98) = 7,09.", "Δt = 7,09 · 2,2 μs = 15,6 μs.", "d = 0,99 · 3·10⁸ · 15,6·10⁻⁶."], resultado: "Vive 15,6 μs y recorre unos 4,6 km (sin relatividad serían solo 653 m)." },
    { enunciado: "Una nave mide 100 m en reposo. ¿Cuánto mide para un observador que la ve pasar a 0,8c?", pasos: ["γ = 1/√(1 − 0,64) = 1/0,6 = 1,667.", "L = L₀/γ = 100/1,667."], resultado: "L = 60 m." },
    { enunciado: "¿Qué energía equivale a 1 g de masa?", pasos: ["E = m·c² = 10⁻³ · (3·10⁸)²."], resultado: "E = 9 · 10¹³ J (unas 21 kilotoneladas de TNT)." },
    { enunciado: "Calcula la energía de un fotón de luz verde de 500 nm en julios y en electronvoltios.", pasos: ["E = h·c/λ = 6,63·10⁻³⁴ · 3·10⁸ / 5·10⁻⁷ = 3,98·10⁻¹⁹ J.", "En eV: 3,98·10⁻¹⁹ / 1,6·10⁻¹⁹."], resultado: "E = 3,98 · 10⁻¹⁹ J = 2,49 eV." },
    { enunciado: "El sodio tiene un trabajo de extracción de 2,3 eV. Se ilumina con luz de 400 nm. Calcula la energía cinética máxima, el potencial de frenado y la longitud de onda umbral.", pasos: ["E fotón = 1240/400 = 3,10 eV.", "Ec = 3,10 − 2,3 = 0,80 eV → Vf = 0,80 V.", "λ₀ = hc/W₀ = 1240/2,3 nm."], resultado: "Ec = 0,80 eV = 1,28·10⁻¹⁹ J; Vf = 0,80 V; λ₀ = 539 nm." },
    { enunciado: "Calcula la longitud de onda de De Broglie de un electrón acelerado con una diferencia de potencial de 100 V.", pasos: ["p = √(2·m·e·V) = √(2 · 9,11·10⁻³¹ · 1,6·10⁻¹⁹ · 100) = 5,40·10⁻²⁴ kg·m/s.", "λ = h/p = 6,63·10⁻³⁴ / 5,40·10⁻²⁴."], resultado: "λ = 1,23 · 10⁻¹⁰ m (como los rayos X: se difracta en cristales)." },
  ],
  errores: [
    "Confundir el tiempo propio (en reposo respecto al suceso) con el tiempo medido desde fuera.",
    "Calcular la energía cinética relativista con ½mv² a velocidades próximas a c.",
    "Pensar que aumentar la intensidad de la luz aumenta la energía de los fotoelectrones: solo aumenta su número.",
    "Mezclar julios y electronvoltios en la ecuación de Einstein.",
    "Olvidar que la energía de los niveles de Bohr es negativa: el electrón está ligado.",
    "Interpretar el principio de incertidumbre como un defecto de los aparatos de medida.",
  ],
  ejercicios: [
    B("Enuncia los dos postulados de la relatividad especial.", "Las leyes de la física son iguales en todos los sistemas inerciales; c es la misma para todos los observadores."),
    B("¿Qué resultado dio el experimento de Michelson y Morley y qué se concluyó?", "No detectó movimiento respecto al éter: c es igual en todas las direcciones; no hay éter."),
    B("Calcula el factor de Lorentz para v = 0,6c.", "γ = 1/√(1 − 0,36) = 1,25."),
    B("Calcula la energía en reposo de un protón (1,67 · 10⁻²⁷ kg) en julios y en MeV.", "E₀ = 1,5·10⁻¹⁰ J = 938 MeV."),
    B("Enuncia la hipótesis de Planck.", "La energía se emite o absorbe en cuantos E = h·f."),
    B("Calcula la energía de un fotón de 5 · 10¹⁴ Hz.", "E = 3,3·10⁻¹⁹ J = 2,07 eV."),
    B("Cita dos hechos del efecto fotoeléctrico que no explica la teoría ondulatoria.", "Existencia de frecuencia umbral; Ec independiente de la intensidad; emisión instantánea."),
    B("¿Qué es el trabajo de extracción?", "Energía mínima para arrancar un electrón de un metal: W₀ = h·f₀."),
    B("Calcula la longitud de onda de De Broglie de un coche de 1000 kg a 30 m/s. ¿Se observa?", "λ = 2,2·10⁻³⁸ m: imperceptible."),
    B("Enuncia el principio de incertidumbre de Heisenberg.", "Δx·Δp ≥ h/4π: no se pueden conocer a la vez con precisión ilimitada."),
    B("Enuncia los postulados de Bohr.", "Órbitas estables sin radiar; momento angular cuantizado; emisión o absorción al saltar: hf = ΔE."),
    B("Cita tres tecnologías basadas en la física cuántica.", "Láser, chips y LED, placas solares, resonancia magnética, relojes atómicos."),
    M("Un muon (τ₀ = 2,2 μs) viaja a 0,995c. ¿Cuánto vive para un observador terrestre?", "γ = 10,0 → Δt = 22 μs."),
    M("Una nave viaja a 0,8c a una estrella a 8 años luz (medidos desde la Tierra). ¿Cuánto dura el viaje para la Tierra y para los tripulantes?", "Tierra: 8/0,8 = 10 años. Nave: 10/1,667 = 6 años."),
    M("Una varilla de 1 m se mueve a 0,6c paralela a su longitud. ¿Cuánto mide para un observador en reposo?", "L = 1/1,25 = 0,8 m."),
    M("El Sol emite 3,8 · 10²⁶ W. ¿Cuánta masa pierde cada segundo?", "m = E/c² = 4,2·10⁹ kg/s."),
    M("Calcula la energía cinética de un electrón a 0,8c.", "Ec = (1,667 − 1) · 0,511 = 0,341 MeV."),
    M("El cesio tiene λ₀ = 650 nm. Se ilumina con luz de 400 nm. Calcula W₀, Ec máx y la velocidad máxima de los electrones.", "W₀ = 1,91 eV; Ec = 3,10 − 1,91 = 1,19 eV; v = √(2·1,19·1,6·10⁻¹⁹/9,11·10⁻³¹) = 6,5·10⁵ m/s."),
    M("Con luz de 300 nm, el potencial de frenado de un metal es 1,5 V. Calcula el trabajo de extracción.", "E = 4,13 eV; W₀ = 4,13 − 1,5 = 2,63 eV."),
    M("Un puntero láser de 1 mW emite a 633 nm. ¿Cuántos fotones emite por segundo?", "E fotón = 3,14·10⁻¹⁹ J; N = 10⁻³/3,14·10⁻¹⁹ = 3,2·10¹⁵ fotones/s."),
    M("Calcula la longitud de onda de De Broglie de un electrón a 5 · 10⁶ m/s.", "λ = 6,63·10⁻³⁴/(9,11·10⁻³¹ · 5·10⁶) = 1,46·10⁻¹⁰ m."),
    M("Calcula la longitud de onda del fotón emitido en la transición 2 → 1 del hidrógeno. ¿En qué zona del espectro está?", "ΔE = 13,6 − 3,4 = 10,2 eV → λ = 1240/10,2 = 122 nm: ultravioleta (Lyman α)."),
    M("¿Qué energía hay que dar a un electrón del hidrógeno en el nivel n = 2 para ionizarlo?", "3,4 eV."),
    A("(Tipo PAU) Un metal tiene una frecuencia umbral de 6 · 10¹⁴ Hz y se ilumina con luz de 1,2 · 10¹⁵ Hz. Calcula: a) el trabajo de extracción; b) la energía cinética máxima; c) el potencial de frenado; d) la velocidad máxima.", "a) 3,98·10⁻¹⁹ J (2,49 eV). b) 3,98·10⁻¹⁹ J. c) 2,49 V. d) v = 9,35·10⁵ m/s."),
    A("(Tipo PAU) Con luz de 8 · 10¹⁴ Hz el potencial de frenado de un metal es 1,0 V y con 1,2 · 10¹⁵ Hz es 2,66 V. Calcula h y la frecuencia umbral.", "Pendiente h/e = 1,66/4·10¹⁴ = 4,15·10⁻¹⁵ V·s → h = 6,64·10⁻³⁴ J·s. f₀ = 8·10¹⁴ − 1/4,15·10⁻¹⁵ = 5,6·10¹⁴ Hz."),
    A("(Tipo PAU) Un electrón y un protón tienen la misma longitud de onda de De Broglie. Compara sus velocidades y sus energías cinéticas (no relativistas).", "Igual p: v_e/v_p = m_p/m_e = 1836. Ec = p²/2m: Ec_e/Ec_p = 1836."),
    A("La energía total de una partícula es el triple de su energía en reposo. ¿A qué velocidad se mueve?", "γ = 3 → v = c·√(1 − 1/9) = 0,943c."),
    A("Calcula la incertidumbre mínima de la velocidad de un electrón confinado en 10⁻¹⁰ m y la de un balón de 0,4 kg localizado con precisión de 1 μm. Interpreta.", "Electrón: 5,8·10⁵ m/s (enorme: no hay órbitas). Balón: 1,3·10⁻²⁸ m/s (indetectable)."),
    A("Calentamos 2 kg de agua 80 °C (c = 4180 J/kg·K). ¿Cuánto aumenta su masa? ¿Se puede medir?", "E = 6,69·10⁵ J → Δm = 7,4·10⁻¹² kg: imposible de medir con una balanza."),
    A("(Tipo PAU) Los satélites GPS se mueven a 3,9 km/s. Estima cuánto se atrasan sus relojes al día por la relatividad especial (usa γ ≈ 1 + v²/2c²).", "Δt ≈ v²/2c² · 86400 s = 8,45·10⁻¹¹ · 86400 ≈ 7 μs al día (la relatividad general los adelanta 45 μs)."),
  ],
  quiz: [
    q4("El experimento de Michelson y Morley buscaba…", ["el fotón", "el movimiento respecto al éter", "el electrón", "la masa de la luz"], 1, "No lo encontró."),
    q4("Segundo postulado de Einstein:", ["la masa es constante", "c es igual para todos los observadores inerciales", "el tiempo es absoluto", "las velocidades se suman"], 1, "Base de la relatividad."),
    q4("El factor de Lorentz γ es siempre…", ["menor que 1", "≥ 1", "negativo", "igual a c"], 1, "1/√(1 − v²/c²)."),
    q4("Un reloj en movimiento…", ["adelanta", "atrasa respecto al observador", "se para", "no cambia"], 1, "Dilatación del tiempo."),
    q4("La longitud de un objeto en movimiento…", ["aumenta", "se contrae en la dirección del movimiento", "no cambia", "se anula"], 1, "L = L₀/γ."),
    q4("La energía en reposo es…", ["½mv²", "mc²", "γmc²", "mgh"], 1, "E₀ = mc²."),
    q4("Una partícula con masa puede alcanzar c si…", ["se acelera mucho", "nunca", "es un electrón", "está en el vacío"], 1, "Energía infinita."),
    q4("La hipótesis de Planck dice que la energía…", ["es continua", "está cuantizada: E = hf", "es infinita", "depende de λ²"], 1, "1900."),
    q4("Ley de Wien: al aumentar T, λmáx…", ["aumenta", "disminuye", "no cambia", "se anula"], 1, "λT = cte."),
    q4("En el efecto fotoeléctrico, aumentar la intensidad…", ["aumenta la Ec", "aumenta el número de electrones", "baja la f umbral", "no hace nada"], 1, "Más fotones."),
    q4("Ecuación de Einstein del fotoeléctrico:", ["hf = W₀ + Ec", "E = mc²", "hf = Ec − W₀", "λ = h/p"], 0, "Balance de energía."),
    q4("El potencial de frenado mide…", ["W₀", "la Ec máxima", "f₀", "la intensidad"], 1, "eVf = Ec."),
    q4("Por debajo de la frecuencia umbral…", ["salen electrones lentos", "no se emiten electrones", "salen más electrones", "el metal se calienta"], 1, "hf < W₀."),
    q4("Energía del nivel n = 2 del hidrógeno:", ["−13,6 eV", "−3,4 eV", "−6,8 eV", "3,4 eV"], 1, "−13,6/4."),
    q4("La serie de Balmer cae en…", ["el UV", "el visible", "el infrarrojo", "los rayos X"], 1, "Saltos al nivel 2."),
    q4("Longitud de onda de De Broglie:", ["λ = hp", "λ = h/p", "λ = p/h", "λ = mc²/h"], 1, "Onda de materia."),
    q4("Confirmaron la difracción de electrones…", ["Michelson y Morley", "Davisson y Germer", "Bohr y Rutherford", "Planck y Wien"], 1, "1927."),
    q4("Principio de incertidumbre:", ["Δx·Δp ≥ h/4π", "Δx·Δp = 0", "Δx + Δp ≥ h", "ΔE = mc²"], 0, "Heisenberg."),
    q4("|ψ|² representa…", ["la energía", "la probabilidad de encontrar la partícula", "la velocidad", "la carga"], 1, "Interpretación de Born."),
    q4("El láser se basa en…", ["el efecto túnel", "la emisión estimulada", "la difracción", "la fisión"], 1, "Einstein, 1917."),
  ],
  examen: [
    q4("γ para v = 0,8c:", ["1,67", "1,25", "0,6", "2"], 0, "1/0,6."),
    q4("Energía de un fotón de 620 nm:", ["2 eV", "1 eV", "3 eV", "6,2 eV"], 0, "1240/620."),
    q4("W₀ = 2 eV y fotones de 3 eV: Ec máx =", ["1 eV", "5 eV", "2 eV", "0"], 0, "3 − 2."),
    q4("Si Ec máx = 1 eV, Vf =", ["1 V", "1,6 V", "0,5 V", "1,6·10⁻¹⁹ V"], 0, "eVf = Ec."),
    q4("Energía en reposo del electrón:", ["0,511 MeV", "938 MeV", "13,6 eV", "1 J"], 0, "mₑc²."),
    q4("Energía para ionizar H desde n = 1:", ["13,6 eV", "3,4 eV", "10,2 eV", "1,51 eV"], 0, "De −13,6 a 0."),
    q4("Si p se duplica, λ de De Broglie…", ["se reduce a la mitad", "se duplica", "no cambia", "se cuadruplica"], 0, "λ = h/p."),
    q4("1 kg de masa equivale a…", ["9·10¹⁶ J", "3·10⁸ J", "9·10⁸ J", "1 J"], 0, "mc²."),
  ],
  feynman: ["Por qué la velocidad de la luz es igual para todos", "Por qué un reloj en movimiento va más lento", "Qué significa E = mc²", "Por qué la luz intensa roja no arranca electrones y la débil ultravioleta sí", "Cómo un electrón puede ser onda y partícula", "Por qué el principio de incertidumbre no es un fallo de los aparatos"],
  mapa: mapaB("FÍSICA MODERNA", [["Relatividad", "Δt = γΔt₀ ; L = L₀/γ", "var(--red)"], ["Masa-energía", "E = mc²", "#b45309"], ["Cuantos", "E = hf ; hf = W₀ + Ec", "var(--pen)"], ["Dualidad", "λ = h/p ; ΔxΔp ≥ h/4π", "var(--leaf)"]]),
  tarjetas: [
    ["Postulados de Einstein", "Leyes iguales en sistemas inerciales; c igual para todos."],
    ["Factor de Lorentz", "γ = 1/√(1 − v²/c²) ≥ 1."],
    ["Dilatación del tiempo", "Δt = γ·Δt₀ (Δt₀: tiempo propio)."],
    ["Contracción", "L = L₀/γ (L₀: longitud propia)."],
    ["Masa-energía", "E₀ = mc² ; E = γmc² ; Ec = (γ−1)mc²."],
    ["Planck", "E = h·f ; h = 6,63·10⁻³⁴ J·s."],
    ["Fotoeléctrico", "hf = W₀ + Ec ; eVf = Ec ; W₀ = hf₀."],
    ["Wien", "λmáx·T = 2,898·10⁻³ m·K."],
    ["Bohr", "Eₙ = −13,6/n² eV ; hf = ΔE."],
    ["De Broglie", "λ = h/p = h/mv."],
    ["Heisenberg", "Δx·Δp ≥ h/4π."],
    ["Electronvoltio", "1 eV = 1,6·10⁻¹⁹ J ; E(eV) = 1240/λ(nm)."],
  ],
  glosario: [
    ["Sistema inercial", "Sistema de referencia en reposo o con velocidad constante."],
    ["Éter", "Medio hipotético en el que se creía que se propagaba la luz."],
    ["Tiempo propio", "Tiempo medido por un reloj en reposo respecto al suceso."],
    ["Longitud propia", "Longitud de un objeto medida en reposo respecto a él."],
    ["Factor de Lorentz", "γ = 1/√(1 − v²/c²)."],
    ["Cuerpo negro", "Cuerpo ideal que absorbe y emite toda la radiación."],
    ["Cuanto", "Paquete mínimo de energía, E = hf."],
    ["Fotón", "Cuanto de radiación electromagnética."],
    ["Trabajo de extracción", "Energía mínima para arrancar un electrón de un metal."],
    ["Frecuencia umbral", "Frecuencia mínima para que haya efecto fotoeléctrico."],
    ["Potencial de frenado", "Tensión que detiene los fotoelectrones más rápidos."],
    ["Espectro de rayas", "Conjunto de longitudes de onda discretas de un elemento."],
    ["Dualidad onda-corpúsculo", "Comportamiento ondulatorio y corpuscular de luz y materia."],
    ["Función de onda", "Función ψ cuyo cuadrado da la probabilidad de localización."],
    ["Efecto túnel", "Paso de una partícula a través de una barrera de energía."],
  ],
  situacion: {
    titulo: "Medimos la constante de Planck con LED",
    reto: "Con LED de varios colores, una pila, una resistencia y un polímetro, vuestro equipo debe medir la constante de Planck y explicar el resultado con el concepto de fotón.",
    pasos: [
      "Montad un circuito para cada LED y medid la tensión mínima a la que empieza a emitir luz.",
      "Buscad la longitud de onda de cada LED en su hoja de características o medidla con una red de difracción.",
      "Suponiendo que e·V = h·c/λ, representad V frente a 1/λ.",
      "Obtened h de la pendiente de la recta y comparadla con el valor aceptado.",
      "Explicad la relación con el efecto fotoeléctrico y con el funcionamiento de las placas solares.",
    ],
    producto: "Un informe con la gráfica, el valor de h y su error relativo.",
    evaluacion: ["El montaje es correcto y seguro.", "Las medidas están tabuladas con unidades.", "Se obtiene h a partir de la gráfica.", "Se interpreta el resultado con el modelo de fotón."],
  },
  familias: [
    "Buscad en casa aparatos que usen física cuántica: LED, mando a distancia, placa solar, lector de códigos.",
    "Comentad juntos por qué el GPS del móvil necesita la relatividad.",
    "Mirad la luz de una farola de sodio o de un fluorescente a través de un CD y observad sus rayas.",
    "Ved juntos un vídeo sobre Einstein y comentad cómo cambió nuestra idea del tiempo.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Física relativista, cuántica, nuclear y de partículas»: principios de la relatividad especial y sus consecuencias (dilatación del tiempo, contracción de la longitud, equivalencia masa-energía); cuantización de la energía, efecto fotoeléctrico, espectros atómicos; dualidad onda-corpúsculo y principio de incertidumbre; aplicaciones tecnológicas.`,
    ideas: [
      "Simulación PhET «Efecto fotoeléctrico» para obtener la frecuencia umbral y h.",
      "Medida de h con LED de colores.",
      "Observación de espectros de lámparas con un espectroscopio casero hecho con un CD.",
      "Debate sobre la pregunta de Einstein «¿Dios juega a los dados?».",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Simulación «Efecto fotoeléctrico» (PhET)", url: "https://phet.colorado.edu/es/simulations/photoelectric" },
    { t: "Simulación «Modelos del átomo de hidrógeno» (PhET)", url: "https://phet.colorado.edu/es/simulations/hydrogen-atom" },
  ],
  revisado: "2026-11-21",
};
