// Física 2º Bachillerato · Potencial eléctrico y teorema de Gauss (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU } = require("./_bach2-fis");

// Equipotenciales y líneas de una carga positiva.
const equiSVG = marco("Superficies equipotenciales de una carga positiva: esferas concéntricas en las que el potencial disminuye al alejarse", `
  ${[28, 48, 70].map((r, i) => `<circle cx="96" cy="90" r="${r}" fill="none" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="${i ? "5 4" : "0"}"/>`).join("")}
  ${Array.from({ length: 8 }, (_, i) => { const a = (i * Math.PI) / 4; return `<path d="M${(96 + 16 * Math.cos(a)).toFixed(1)} ${(90 + 16 * Math.sin(a)).toFixed(1)} L ${(96 + 80 * Math.cos(a)).toFixed(1)} ${(90 + 80 * Math.sin(a)).toFixed(1)}" stroke="var(--red)" stroke-width="1.5" opacity=".7"/>`; }).join("")}
  <circle cx="96" cy="90" r="13" fill="var(--red)"/>${T(96, 96, "+Q", { fs: 11, b: true, c: "#fff" })}
  ${T(182, 46, "V₁ > V₂ > V₃", { fs: 11, b: true, a: "start", c: "var(--leaf)" })}
  ${T(182, 76, "V = kQ/r", { fs: 12, b: true, a: "start" })}
  ${T(182, 106, "verde: V cte.", { fs: 10, a: "start", c: "var(--leaf)" })}
  ${T(182, 124, "rojo: líneas E", { fs: 10, a: "start", c: "var(--red)" })}`);

// Superficie gaussiana alrededor de una carga.
const gaussSVG = marco("Teorema de Gauss: el flujo eléctrico a través de una superficie cerrada solo depende de la carga encerrada", `
  <defs><marker id="gsf" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--red)"/></marker></defs>
  <path d="M60 40 C 120 10, 210 30, 220 80 C 232 140, 150 168, 90 150 C 40 136, 20 70, 60 40 Z" fill="var(--pen)" opacity=".08" stroke="var(--pen)" stroke-width="2.2" stroke-dasharray="6 4"/>
  <circle cx="110" cy="90" r="10" fill="var(--red)"/>${T(110, 95, "+", { fs: 14, b: true, c: "#fff" })}
  <circle cx="170" cy="100" r="10" fill="var(--pen)"/>${T(170, 105, "−", { fs: 14, b: true, c: "#fff" })}
  <circle cx="244" cy="160" r="9" fill="var(--muted)"/>${T(244, 164, "+", { fs: 12, b: true, c: "#fff" })}
  ${[[-1, -0.6], [-1, 0.4], [0, -1], [0.3, 1]].map(([dx, dy]) => `<path d="M${110 + dx * 14} ${90 + dy * 14} l ${dx * 30} ${dy * 30}" stroke="var(--red)" stroke-width="2" marker-end="url(#gsf)"/>`).join("")}
  ${T(130, 176, "Φ = Q encerrada / ε₀", { fs: 12, b: true })}${T(232, 140, "fuera: no cuenta", { fs: 9, c: "var(--muted)", a: "end" })}`);

// E y V de una esfera conductora.
const esferaSVG = graf("Campo y potencial de una esfera conductora cargada: dentro E = 0 y V constante; fuera disminuyen como los de una carga puntual", "r", "E, V", [
  { p: [[0, 0.02], [0.3, 0.02]], c: "var(--red)", t: "" },
  { p: [[0.3, 0.95], [0.4, 0.55], [0.5, 0.36], [0.65, 0.22], [0.8, 0.14], [1, 0.09]], c: "var(--red)", t: "E" },
  { p: [[0, 0.7], [0.3, 0.7], [0.4, 0.53], [0.55, 0.38], [0.75, 0.28], [1, 0.21]], c: "var(--pen)", t: "V" },
], `<path d="M100 145 V 30" stroke="var(--muted)" stroke-dasharray="4 3"/><text x="100" y="160" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">R</text>`);

module.exports = {
  materia: "Física",
  curso: "2-bachillerato",
  titulo: "Potencial eléctrico y teorema de Gauss",
  minutos: 115,
  objetivos: [
    "Calcular la energía potencial eléctrica de una carga y de un sistema de cargas",
    "Calcular el potencial eléctrico creado por cargas puntuales y la diferencia de potencial entre dos puntos",
    "Relacionar trabajo, energía y potencial y aplicar la conservación de la energía al movimiento de cargas",
    "Representar superficies equipotenciales y relacionarlas con las líneas de campo",
    "Aplicar el teorema de Gauss para obtener el campo de distribuciones con simetría",
    "Explicar el comportamiento de los conductores en equilibrio y de los condensadores",
  ],
  claves: ["energía potencial eléctrica", "potencial eléctrico", "voltio", "diferencia de potencial", "trabajo eléctrico", "superficie equipotencial", "gradiente", "conservación de la energía", "flujo eléctrico", "teorema de Gauss", "superficie gaussiana", "densidad de carga", "conductor en equilibrio", "condensador", "capacidad"],
  pregunta: {
    texto: "¿Por qué un pájaro puede posarse en un cable de alta tensión sin electrocutarse?",
    respuesta: "Porque lo peligroso no es el potencial, sino la <mark>diferencia de potencial</mark>. Las dos patas del pájaro tocan el mismo cable, prácticamente al mismo potencial, así que apenas pasa corriente por su cuerpo. Si a la vez tocara otro cable o un poste conectado a tierra, sí habría una enorme diferencia de potencial entre dos puntos de su cuerpo y la corriente lo atravesaría.",
  },
  lectura: {
    titulo: "Mil millones de voltios en una nube",
    html: `<p>Dentro de un cumulonimbo, el granizo y los cristales de hielo chocan sin parar mientras las corrientes de aire los suben y los bajan. En esos choques se intercambian electrones: las partículas pesadas se cargan negativamente y caen a la parte baja de la nube, y las ligeras, positivas, suben a la cima. Se forma un gigantesco condensador natural con una diferencia de potencial que puede alcanzar los cien millones de voltios, y a veces mucho más.</p><p>Cuando el campo eléctrico supera unos tres millones de voltios por metro, el aire deja de ser aislante. Un primer canal de aire ionizado avanza a saltos hacia el suelo, y cuando se acerca, desde los objetos altos y puntiagudos sale una descarga hacia arriba a su encuentro. Al unirse, una corriente de decenas de miles de amperios recorre el canal en microsegundos y calienta el aire a 30.000 °C: es el rayo, y la expansión brusca del aire es el trueno. Para entender todo esto, y para diseñar el pararrayos que protege tu instituto, necesitas el concepto de potencial eléctrico que estudiarás en este tema.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 La energía potencial eléctrica", p: [
      "La fuerza eléctrica es central y depende solo de la distancia, así que es <b>conservativa</b>: su trabajo no depende del camino. Por eso podemos definir una <mark>energía potencial eléctrica</mark>. Para una carga q situada a una distancia r de otra carga Q, tomando el origen en el infinito: <b>E<sub>p</sub> = k · Q · q / r</b>, con las cargas escritas con su signo. Representa el trabajo que realiza el campo al llevar q desde ese punto hasta el infinito.",
      "A diferencia de la gravitatoria, la energía potencial eléctrica puede ser <b>positiva o negativa</b>. Si las cargas son del mismo signo (se repelen), E<sub>p</sub> &gt; 0: el sistema «tiene ganas» de separarse y libera energía al hacerlo. Si son de signo opuesto (se atraen), E<sub>p</sub> &lt; 0: hay que aportar energía para separarlas, como ocurre al arrancar un electrón de un átomo (energía de ionización). La relación con el trabajo es la de cualquier fuerza conservativa: <b>W<sub>A→B</sub> = −ΔE<sub>p</sub> = E<sub>pA</sub> − E<sub>pB</sub></b>. Las cargas se mueven espontáneamente hacia posiciones de menor energía potencial.",
    ], extra: formula("E<sub>p</sub> = k · Q · q / r ; W<sub>A→B</sub> = E<sub>pA</sub> − E<sub>pB</sub>"), svg: compara("Energía potencial según los signos", ["Mismo signo", ["se repelen", "Ep > 0", "liberan energía", "al separarse"]], ["Signo opuesto", ["se atraen", "Ep < 0", "hay que aportar", "energía para separar"]], "var(--red)", "var(--pen)"), video: V("pe-c", "Energía potencial eléctrica", "energía potencial eléctrica") }),
    bloque({ h: "1.2 La energía de un sistema de cargas", p: [
      "Un sistema de varias cargas tiene una energía potencial que es la suma de las energías de <b>cada pareja</b> de cargas, contando cada pareja una sola vez: <b>E<sub>p</sub> = Σ k · q<sub>i</sub> · q<sub>j</sub> / r<sub>ij</sub></b>. Para tres cargas hay tres parejas: 1-2, 1-3 y 2-3. Esta energía es el trabajo que hay que hacer para formar el sistema trayendo las cargas una a una desde el infinito, donde no interaccionan.",
      "Esta idea tiene un significado químico profundo. La <mark>energía de red</mark> de un cristal iónico, como la sal común, es la energía potencial eléctrica del conjunto de iones, y explica por qué esos cristales son duros y tienen altos puntos de fusión. Del mismo modo, la energía que se libera en una reacción química o la que mantiene unido un núcleo (en este caso, frente a la repulsión eléctrica entre protones) se calculan con energías potenciales de sistemas de partículas. En los problemas de la PAU suele pedirse el trabajo necesario para traer una carga a un punto donde ya hay otras: basta con calcular el potencial que crean las demás en ese punto.",
    ], extra: formula("E<sub>p sistema</sub> = Σ<sub>parejas</sub> k · q<sub>i</sub> · q<sub>j</sub> / r<sub>ij</sub>"), svg: pasos("Energía de un sistema de cargas", ["Listar todas las parejas", "Ep = kqᵢqⱼ/rᵢⱼ con signo", "Sumar cada pareja una vez", "Ep < 0: sistema ligado"], "var(--pen)") }),
    bloque({ h: "1.3 El potencial eléctrico", p: [
      "El <mark>potencial eléctrico</mark> en un punto es la energía potencial por unidad de carga positiva colocada en él: <b>V = E<sub>p</sub> / q</b>. Para una carga puntual Q: <b>V = k · Q / r</b>. Es una magnitud <b>escalar</b> cuya unidad es el <b>voltio</b> (V = J/C), en honor a Alessandro Volta. Tiene el signo de la carga que lo crea: positivo cerca de cargas positivas y negativo cerca de las negativas, y vale cero en el infinito.",
      "Para varias cargas, el potencial total es la <b>suma algebraica</b> (con signo) de los potenciales de cada una: V = k·Q₁/r₁ + k·Q₂/r₂ + … Por eso, en el punto medio de un dipolo el potencial es nulo aunque el campo no lo sea, y en el punto medio de dos cargas iguales el campo es nulo aunque el potencial no lo sea. ¡No confundas campo nulo con potencial nulo! Conocido el potencial, la energía potencial de una carga q es <b>E<sub>p</sub> = q · V</b>. Algunos valores: una pila de botón da 1,5 V, la red doméstica 230 V, una línea de alta tensión 400.000 V.",
    ], extra: formula("V = E<sub>p</sub> / q = k · Q / r ; V<sub>total</sub> = Σ k · Q<sub>i</sub> / r<sub>i</sub>"), svg: barras("Algunas diferencias de potencial", "ΔV (V)", [["Rayo", 1e8, "#b45309", "10⁸ V"], ["Alta tensión", 4e5, "var(--red)", "4·10⁵ V"], ["Red casa", 230, "var(--pen)", "230 V"], ["Neurona", 0.07, "var(--leaf)", "0,07 V"]]), video: V("pe-a", "Potencial eléctrico: lo que debes saber", "potencial eléctrico") }),
    bloque({ h: "1.4 Diferencia de potencial y trabajo", p: [
      "El trabajo que realiza el campo eléctrico al llevar una carga q del punto A al punto B es <b>W<sub>A→B</sub> = q · (V<sub>A</sub> − V<sub>B</sub>)</b>. La <mark>diferencia de potencial</mark> V<sub>A</sub> − V<sub>B</sub> (también llamada tensión o voltaje) es el trabajo que realiza el campo por unidad de carga. Si el resultado es positivo, el movimiento es espontáneo; si es negativo, hace falta un agente externo que realice un trabajo W<sub>ext</sub> = −W<sub>campo</sub> (con velocidad constante).",
      "Analiza los cuatro casos posibles. Una carga <b>positiva</b> se mueve espontáneamente hacia potenciales <b>decrecientes</b> (V<sub>A</sub> &gt; V<sub>B</sub>, W &gt; 0), igual que una masa cae hacia potenciales gravitatorios menores. Una carga <b>negativa</b> se mueve espontáneamente hacia potenciales <b>crecientes</b>: los electrones de un circuito van del polo negativo al positivo de la pila. Esta es la razón por la que la corriente convencional (de + a −) tiene sentido contrario al movimiento real de los electrones. En los problemas, sustituye siempre q con su signo y no te equivocarás.",
    ], extra: formula("W<sub>A→B</sub> = q · (V<sub>A</sub> − V<sub>B</sub>) ; W<sub>ext</sub> = −W<sub>campo</sub>"), svg: rejilla("¿Movimiento espontáneo?", ["Carga", "Va hacia", "Trabajo campo"], [["q > 0", "V menor", "positivo"], ["q < 0", "V mayor", "positivo"], ["al revés", "—", "negativo"]], "var(--red)") }),
    bloque({ h: "1.5 Superficies equipotenciales y relación entre E y V", p: [
      "Las <mark>superficies equipotenciales</mark> unen los puntos de igual potencial. Para una carga puntual son esferas concéntricas; en un campo uniforme, planos perpendiculares a las líneas de campo. Como en el campo gravitatorio, el trabajo para mover una carga sobre una equipotencial es nulo, y las líneas de campo son siempre <b>perpendiculares</b> a las equipotenciales y apuntan hacia potenciales <b>decrecientes</b>.",
      "La relación entre campo y potencial es <b>E = −dV/dr</b>: el campo es el gradiente del potencial cambiado de signo. En un campo uniforme se simplifica: <b>E = (V<sub>A</sub> − V<sub>B</sub>) / d</b>, donde d es la distancia entre las equipotenciales medida a lo largo del campo. Por eso el campo eléctrico se puede expresar en V/m, unidad equivalente al N/C. Donde las equipotenciales están muy juntas, el campo es intenso. Es justo lo que ocurre junto a las puntas de un conductor y explica el efecto puntas de los pararrayos.",
    ], extra: formula("E = −dV/dr ; campo uniforme: E = ΔV / d"), svg: equiSVG }),
    bloque({ h: "1.6 Conservación de la energía en el movimiento de cargas", p: [
      "Si sobre una carga solo actúa la fuerza eléctrica, su energía mecánica se conserva: <b>½ m v<sub>A</sub>² + q·V<sub>A</sub> = ½ m v<sub>B</sub>² + q·V<sub>B</sub></b>, o bien <mark>ΔE<sub>c</sub> = q · (V<sub>A</sub> − V<sub>B</sub>)</mark>. Este método es mucho más cómodo que la cinemática cuando el campo no es uniforme, porque no hace falta conocer la trayectoria: basta con los potenciales inicial y final.",
      "Un ejemplo clásico es la <b>distancia de máxima aproximación</b>. Si lanzamos una partícula alfa (carga +2e) contra un núcleo de oro (+79e), la repulsión la frena; en el punto de máxima aproximación toda su energía cinética se ha convertido en energía potencial: ½ m v² = k · Q · q / r<sub>min</sub>. Rutherford usó este cálculo en 1911 para estimar que el núcleo debía medir menos de 10⁻¹⁴ m. Otro ejemplo es el del electrón que atraviesa un tubo: la energía que gana se expresa cómodamente en electronvoltios, y para un electrón que atraviesa ΔV voltios, E<sub>c</sub> = ΔV eV.",
    ], extra: formula("½ m v<sub>A</sub>² + q·V<sub>A</sub> = ½ m v<sub>B</sub>² + q·V<sub>B</sub>"), svg: ficha("Energía de una carga", "Ec + q·V = constante", ["ΔEc = q(VA − VB)", "no hace falta la trayectoria", "máxima aproximación:", "½mv² = kQq/r"], "var(--leaf)") }),
    bloque({ h: "2.1 El flujo eléctrico", p: [
      "El <mark>flujo eléctrico</mark> Φ a través de una superficie mide el número de líneas de campo que la atraviesan. Para una superficie plana S en un campo uniforme: <b>Φ = E · S · cos α</b>, donde α es el ángulo entre el campo y el vector superficie (perpendicular a ella). Es máximo cuando el campo atraviesa la superficie perpendicularmente (α = 0) y nulo cuando el campo es paralelo a ella (α = 90°). Se mide en N·m²/C.",
      "Para una superficie cerrada, se toma el vector superficie hacia fuera: el flujo es positivo donde las líneas salen y negativo donde entran. Si dentro no hay carga, entran tantas líneas como salen y el flujo neto es cero. Si hay una carga positiva dentro, salen más de las que entran: flujo positivo. La idea se aplica también fuera del electromagnetismo: el caudal de agua que atraviesa una red es un flujo del campo de velocidades, y el flujo de radiación solar que llega a un panel depende de su inclinación exactamente con el mismo coseno.",
    ], extra: formula("Φ = E · S · cos α"), svg: ficha("Flujo eléctrico", "Φ = E · S · cos α", ["α = 0: máximo", "α = 90°: nulo", "sale: Φ > 0", "unidad: N·m²/C"], "var(--pen)") }),
    bloque({ h: "2.2 El teorema de Gauss", p: [
      "Carl Friedrich Gauss demostró que el flujo eléctrico a través de <b>cualquier superficie cerrada</b> es igual a la carga neta encerrada dividida por la permitividad: <mark>Φ = Q<sub>int</sub> / ε₀</mark>. No importa la forma de la superficie ni dónde estén las cargas dentro; y las cargas exteriores no contribuyen, porque cada línea que entra vuelve a salir. Es una de las cuatro <b>ecuaciones de Maxwell</b>, que resumen todo el electromagnetismo.",
      "El teorema sirve para calcular campos cuando hay mucha <b>simetría</b>. El método: elegir una <b>superficie gaussiana</b> imaginaria en la que el campo tenga el mismo módulo en todos los puntos y sea perpendicular a ella (o paralelo, para que no contribuya); calcular el flujo, que será E por el área; calcular la carga encerrada; e igualar. Por ejemplo, para una carga puntual, con una esfera de radio r: E · 4πr² = Q/ε₀, de donde E = Q/(4πε₀r²) = kQ/r². ¡Hemos deducido la ley de Coulomb a partir del teorema de Gauss!",
    ], extra: formula("Φ = ∮ E · dS = Q<sub>int</sub> / ε₀"), svg: gaussSVG, video: V("pe-b", "Ley de Gauss explicada", "ley de Gauss") }),
    bloque({ h: "2.3 Campo de una esfera cargada", p: [
      "Para una <b>esfera conductora</b> de radio R con carga Q, toda la carga se sitúa en la superficie. Tomando como gaussiana una esfera concéntrica de radio r: si r &gt; R, encierra toda la carga y <b>E = kQ/r²</b>, como si la carga estuviera en el centro; si r &lt; R, no encierra carga y <mark>E = 0</mark>. El potencial fuera es V = kQ/r y dentro es constante e igual al de la superficie, V = kQ/R, porque al no haber campo no cambia.",
      "Para una <b>esfera aislante</b> cargada uniformemente en volumen, fuera ocurre lo mismo, pero dentro la gaussiana de radio r encierra una carga Q·r³/R³, y el campo crece linealmente: <b>E = kQr/R³</b>. Exactamente igual que el campo gravitatorio dentro de un planeta homogéneo, porque ambos campos siguen la ley de la inversa del cuadrado. Un ejemplo práctico: el generador de Van de Graaff acumula carga en una esfera metálica hasta alcanzar cientos de miles de voltios; si tocas la esfera (aislado del suelo), tu pelo se eriza porque cada pelo se carga y se repele con los demás.",
    ], extra: formula("Esfera conductora: E = 0 (r < R) ; E = kQ/r² (r > R) ; V = kQ/R dentro"), svg: esferaSVG }),
    bloque({ h: "2.4 Campo de un plano y de un condensador", p: [
      "Para un <b>plano infinito</b> con densidad superficial de carga σ (C/m²), por simetría el campo es perpendicular al plano y del mismo módulo a ambos lados. Tomando como gaussiana un cilindro que atraviesa el plano, con bases de área S: el flujo sale por las dos bases, 2·E·S = σ·S/ε₀, de donde <mark>E = σ / (2ε₀)</mark>. Sorprendentemente, el campo <b>no depende de la distancia</b> al plano: es uniforme.",
      "Un <b>condensador plano</b> está formado por dos placas paralelas con densidades +σ y −σ. Entre las placas, los campos de ambas se suman: E = σ/ε₀; fuera, se anulan: E = 0. La diferencia de potencial entre las placas es ΔV = E·d. La <b>capacidad</b> del condensador, C = Q/ΔV = ε₀·S/d, mide cuánta carga almacena por cada voltio; se mide en faradios (F). Los condensadores almacenan energía, E = ½·C·ΔV², y se usan en los flashes de las cámaras, los desfibriladores, las fuentes de alimentación y las pantallas táctiles de los móviles.",
    ], extra: formula("Plano: E = σ / 2ε₀ ; Condensador: E = σ / ε₀ ; C = ε₀ · S / d"), svg: rejilla("Campos obtenidos con Gauss", ["Distribución", "Campo"], [["Carga puntual", "kQ/r²"], ["Esfera conductora", "0 dentro; kQ/r²"], ["Esfera aislante", "kQr/R³ dentro"], ["Plano infinito", "σ/2ε₀"], ["Condensador", "σ/ε₀"]], "var(--pen)"), video: V("pe-d", "La ley de Gauss en 3 minutos", "ley de Gauss") }),
    bloque({ h: "2.5 Conductores en equilibrio electrostático", p: [
      "Un <b>conductor</b> tiene cargas libres que se mueven en cuanto hay un campo. Cuando alcanza el <mark>equilibrio electrostático</mark>, las cargas han dejado de moverse, lo que exige que el campo en su interior sea <b>nulo</b>. De aquí, con el teorema de Gauss, se deducen las demás propiedades: toda la carga neta está en la superficie exterior; todo el conductor está al mismo potencial (es un volumen equipotencial); y el campo justo fuera de la superficie es perpendicular a ella y vale σ/ε₀.",
      "Estas propiedades tienen consecuencias muy prácticas. La carga se acumula en las zonas de menor radio de curvatura, las <b>puntas</b>, donde el campo puede superar la rigidez dieléctrica del aire y producir descargas: así funcionan los pararrayos y por eso los aparatos de alta tensión tienen formas redondeadas. Como el campo dentro es nulo, un recinto metálico protege su interior: es la <b>jaula de Faraday</b> de los aviones, los coches, las salas de resonancia magnética o las bolsas que bloquean la señal de las llaves electrónicas de los coches. Y conectar un conductor a tierra lo lleva al potencial cero de la Tierra, que es un enorme conductor.",
    ], svg: pasos("Propiedades de un conductor en equilibrio", ["E = 0 en el interior", "Carga solo en la superficie", "Todo al mismo potencial", "E ⊥ superficie, = σ/ε₀"], "var(--red)") }),
    bloque({ h: "3.1 Aplicaciones: del rayo al sistema nervioso", p: [
      "El potencial eléctrico está en todas partes. En medicina, el <b>desfibrilador</b> carga un condensador a unos 2000 V y descarga en milisegundos unos 200 J a través del corazón para restablecer su ritmo. El <b>electrocardiograma</b> y el electroencefalograma registran diferencias de potencial de milivoltios en la piel. Y tus <b>neuronas</b> funcionan con potenciales: en reposo, el interior de la membrana está a unos −70 mV respecto al exterior, y el impulso nervioso es una onda de cambio de potencial que recorre el axón.",
      "En la tecnología, las <b>pantallas táctiles capacitivas</b> detectan el dedo porque cambia la capacidad de una rejilla de condensadores microscópicos. Los <b>microscopios electrónicos</b> aceleran electrones con decenas de miles de voltios. Y en la naturaleza, las anguilas eléctricas generan hasta 600 V apilando miles de células como pilas en serie. Para la <b>seguridad eléctrica</b>, recuerda que el peligro depende de la corriente que atraviesa el cuerpo, que a su vez depende de la diferencia de potencial entre dos puntos de contacto: por eso los enchufes tienen toma de tierra y los aparatos con carcasa metálica deben conectarse a ella.",
    ], svg: rejilla("El potencial en la vida real", ["Aplicación", "Valor típico"], [["Neurona en reposo", "−70 mV"], ["Pila de botón", "1,5 V"], ["Desfibrilador", "≈ 2000 V"], ["Microscopio electr.", "≈ 50 kV"], ["Rayo", "10⁸ V"]], "var(--leaf)") }),
  ],
  figura: figura("Potencial eléctrico y teorema de Gauss", "Energía potencial, potencial, trabajo y teorema de Gauss", [["Energía", "Ep = kQq/r", "con signo"], ["Potencial", "V = kQ/r", "voltio = J/C"], ["Trabajo", "W = q(VA − VB)", "E = −dV/dr"], ["Gauss", "Φ = Q/ε₀", "simetría"]], "var(--red)"),
  video: V("pe-a", "Potencial eléctrico: lo que debes saber", "potencial eléctrico"),
  ejemplos: [
    { enunciado: "Calcula el potencial que crea una carga de +5 μC a 30 cm y la energía potencial de una carga de −2 μC situada allí.", pasos: ["V = k·Q/r = 9·10⁹ · 5·10⁻⁶ / 0,3 = 1,5·10⁵ V.", "E<sub>p</sub> = q · V = −2·10⁻⁶ · 1,5·10⁵."], resultado: "V = 1,5 · 10⁵ V; E<sub>p</sub> = −0,30 J." },
    { enunciado: "Dos cargas q₁ = +3 μC en (0, 0) y q₂ = −3 μC en (6, 0) m. Calcula el potencial en A (3, 4) y en B (0, 4) m y el trabajo del campo para llevar +1 μC de A a B.", pasos: ["V<sub>A</sub>: ambas a 5 m, se anulan: V<sub>A</sub> = 0.", "V<sub>B</sub>: q₁ a 4 m y q₂ a √(36 + 16) = 7,21 m: V<sub>B</sub> = 9·10⁹ · 3·10⁻⁶ (1/4 − 1/7,21) = 2,70·10⁴ · 0,111 = 3000 V.", "W = q (V<sub>A</sub> − V<sub>B</sub>) = 10⁻⁶ · (0 − 3000)."], resultado: "W = −3 · 10⁻³ J: hace falta un agente externo." },
    { enunciado: "Calcula la energía potencial del sistema formado por tres cargas de +2 μC en los vértices de un triángulo equilátero de 10 cm de lado.", pasos: ["Hay tres parejas iguales.", "Cada una: k·q²/r = 9·10⁹ · 4·10⁻¹² / 0,1 = 0,36 J.", "E<sub>p</sub> = 3 · 0,36."], resultado: "E<sub>p</sub> = 1,08 J (positiva: las cargas se repelen)." },
    { enunciado: "Un electrón parte del reposo en un punto de potencial 100 V y llega a otro de 600 V. ¿Qué velocidad tiene?", pasos: ["ΔE<sub>c</sub> = q (V<sub>A</sub> − V<sub>B</sub>) = −1,6·10⁻¹⁹ · (100 − 600) = 8·10⁻¹⁷ J.", "v = √(2 · 8·10⁻¹⁷ / 9,1·10⁻³¹)."], resultado: "v ≈ 1,33 · 10⁷ m/s (se mueve hacia potenciales mayores, como corresponde a una carga negativa)." },
    { enunciado: "Una esfera conductora de 10 cm de radio tiene una carga de 2 nC. Calcula E y V a 5 cm, a 10 cm y a 20 cm del centro.", pasos: ["A 5 cm (dentro): E = 0; V = kQ/R = 9·10⁹ · 2·10⁻⁹ / 0,1 = 180 V.", "A 10 cm (superficie): E = kQ/R² = 18 / 0,01 = 1800 N/C; V = 180 V.", "A 20 cm: E = 18 / 0,04 = 450 N/C; V = 18 / 0,2 = 90 V."], resultado: "5 cm: 0 y 180 V; 10 cm: 1800 N/C y 180 V; 20 cm: 450 N/C y 90 V." },
    { enunciado: "Una partícula alfa (q = 3,2 · 10⁻¹⁹ C) con 5 MeV se lanza contra un núcleo de oro (Q = 79e). ¿Cuál es la distancia de máxima aproximación?", pasos: ["E<sub>c</sub> = 5·10⁶ · 1,6·10⁻¹⁹ = 8·10⁻¹³ J.", "E<sub>c</sub> = k·Q·q / r → r = 9·10⁹ · 79 · 1,6·10⁻¹⁹ · 3,2·10⁻¹⁹ / 8·10⁻¹³.", "r = 3,64·10⁻²⁶ / 8·10⁻¹³."], resultado: "r ≈ 4,5 · 10⁻¹⁴ m: el núcleo es menor que esa distancia." },
  ],
  errores: [
    "Sumar potenciales como vectores: el potencial es escalar y se suma con su signo.",
    "Confundir campo nulo con potencial nulo (en el centro de un dipolo V = 0 pero E ≠ 0).",
    "Olvidar el signo de la carga en W = q·(V<sub>A</sub> − V<sub>B</sub>) y en E<sub>p</sub> = q·V.",
    "Escribir V<sub>B</sub> − V<sub>A</sub> en lugar de V<sub>A</sub> − V<sub>B</sub> en el trabajo del campo.",
    "Pensar que dentro de una esfera conductora el potencial es cero: es constante e igual al de la superficie.",
    "Incluir en el teorema de Gauss las cargas exteriores a la superficie.",
  ],
  ejercicios: [
    B("Define potencial eléctrico y su unidad.", "Energía potencial por unidad de carga positiva; voltio (J/C)."),
    B("Calcula el potencial que crea una carga de −4 nC a 2 m.", "V = 9·10⁹ · (−4·10⁻⁹) / 2 = −18 V."),
    B("¿Qué signo tiene la energía potencial de un protón y un electrón? ¿Qué significa?", "Negativo: el sistema está ligado; hay que aportar energía para separarlos."),
    B("Calcula el trabajo del campo al llevar una carga de 3 μC de un punto a 200 V a otro a 50 V.", "W = 3·10⁻⁶ · (200 − 50) = 4,5·10⁻⁴ J."),
    B("¿Hacia qué potenciales se mueve espontáneamente un electrón?", "Hacia potenciales mayores."),
    B("¿Cuánto trabajo cuesta mover una carga sobre una superficie equipotencial?", "Ninguno: V<sub>A</sub> = V<sub>B</sub>."),
    B("Calcula el campo entre dos equipotenciales de 120 V y 80 V separadas 4 cm (campo uniforme).", "E = 40 / 0,04 = 1000 V/m, de 120 V hacia 80 V."),
    B("Enuncia el teorema de Gauss.", "El flujo eléctrico a través de una superficie cerrada es igual a la carga encerrada dividida por ε₀."),
    B("¿Cuál es el flujo a través de una superficie cerrada que no contiene cargas?", "Cero."),
    B("Calcula el flujo de un campo de 500 N/C que atraviesa perpendicularmente una superficie de 0,2 m².", "Φ = 500 · 0,2 = 100 N·m²/C."),
    B("¿Cuánto vale el campo dentro de un conductor en equilibrio? ¿Dónde está su carga?", "Cero; en la superficie exterior."),
    B("¿Qué energía cinética gana un protón al atravesar 2000 V? Exprésala en eV y en J.", "2000 eV = 3,2·10⁻¹⁶ J."),
    M("Cuatro cargas de +1 μC están en los vértices de un cuadrado de 2 m de lado. Calcula el campo y el potencial en el centro.", "E = 0 por simetría. V = 4 · 9·10⁹ · 10⁻⁶ / √2 = 2,55·10⁴ V."),
    M("Con las cargas anteriores, ¿qué trabajo hay que hacer para traer una quinta carga de +1 μC desde el infinito hasta el centro?", "W<sub>ext</sub> = q · V = 10⁻⁶ · 2,55·10⁴ = 2,55·10⁻² J."),
    M("Una carga de +2 μC está en (0, 0) y otra de −8 μC en (6, 0) m. ¿En qué puntos del eje x se anula el potencial?", "Entre ellas: 2/x = 8/(6 − x) → x = 1,2 m. Fuera, a la izquierda: 2/|x| = 8/(6 + |x|) → |x| = 2 → x = −2 m."),
    M("Calcula la energía potencial de un sistema de tres cargas: +1 μC en (0, 0), −2 μC en (3, 0) y +3 μC en (0, 4) m.", "E<sub>p</sub> = k(q₁q₂/3 + q₁q₃/4 + q₂q₃/5) = 9·10⁹ · 10⁻¹² (−2/3 + 3/4 − 6/5) = 9·10⁻³ · (−1,117) = −1,0·10⁻² J."),
    M("Un protón parte del reposo junto a una carga fija de +10 μC a 1 mm de ella. ¿Qué velocidad tendrá muy lejos?", "½mv² = k·Q·e/r = 9·10⁹ · 10⁻⁵ · 1,6·10⁻¹⁹ / 10⁻³ = 1,44·10⁻¹¹ J → v = √(2 · 1,44·10⁻¹¹ / 1,67·10⁻²⁷) = 1,31·10⁸ m/s (habría que usar la relatividad)."),
    M("Una esfera conductora de 20 cm de radio está a 9000 V. Calcula su carga y la densidad superficial de carga.", "Q = V·R/k = 9000 · 0,2 / 9·10⁹ = 2·10⁻⁷ C. σ = Q/(4πR²) = 2·10⁻⁷ / 0,503 = 4,0·10⁻⁷ C/m²."),
    M("Calcula el campo eléctrico que crea un plano infinito con σ = 1,77 · 10⁻⁸ C/m².", "E = σ/2ε₀ = 1,77·10⁻⁸ / (2 · 8,85·10⁻¹²) = 1000 N/C, a ambos lados."),
    M("Calcula la capacidad de un condensador plano de placas de 100 cm² separadas 1 mm en el aire, y su carga a 12 V.", "C = 8,85·10⁻¹² · 0,01 / 0,001 = 8,85·10⁻¹¹ F. Q = C·ΔV = 1,06·10⁻⁹ C."),
    M("Un electrón entra en un campo uniforme con 1000 eV, en el sentido del campo. Si E = 5000 V/m, ¿qué distancia recorre hasta pararse?", "La fuerza frena al electrón. 1000 eV = e·E·d → d = 1000 / 5000 = 0,2 m."),
    M("Dibuja las equipotenciales de dos cargas iguales positivas e indica dónde está el potencial máximo en el segmento que las une.", "Óvalos alrededor de cada carga que se funden en uno solo más lejos. En el segmento, V es mínimo en el centro (y tiende a infinito junto a las cargas)."),
    A("(Tipo PAU) q₁ = +4 nC en (0, 0) y q₂ = −4 nC en (8, 0) cm. a) Campo y potencial en (4, 3) cm. b) Trabajo para llevar −1 nC de (4, 3) a (4, −3) cm.", "a) r = 5 cm para ambas. Cada E = 9·10⁹ · 4·10⁻⁹ / 0,0025 = 1,44·10⁴ N/C. Componentes y se anulan; x: 2 · 1,44·10⁴ · 4/5 = 2,30·10⁴ N/C hacia +x. V = 0. b) (4, −3) también está en la mediatriz: V = 0. W = 0."),
    A("Una esfera aislante de radio R = 10 cm tiene una carga de 1 μC repartida uniformemente en su volumen. Calcula el campo a 5 cm, 10 cm y 20 cm del centro.", "Dentro: E = kQr/R³ = 9·10⁹ · 10⁻⁶ · 0,05 / 10⁻³ = 4,5·10⁵ N/C. Superficie: kQ/R² = 9·10⁵ N/C. A 20 cm: 2,25·10⁵ N/C."),
    A("Demuestra con el teorema de Gauss que el campo de un hilo infinito con densidad lineal λ es E = λ/(2πε₀r).", "Gaussiana: cilindro coaxial de radio r y longitud L. Solo hay flujo por la superficie lateral: E · 2πrL = λL/ε₀ → E = λ/(2πε₀r)."),
    A("Dos esferas conductoras de radios 10 cm y 5 cm, muy alejadas, se cargan con 6 nC entre las dos y se unen con un hilo conductor. ¿Cómo se reparte la carga? ¿Dónde es mayor el campo superficial?", "Igual potencial: Q₁/R₁ = Q₂/R₂ → Q₁ = 2Q₂ → Q₁ = 4 nC, Q₂ = 2 nC. E ∝ Q/R²: E₂/E₁ = (2/0,0025)/(4/0,01) = 2. El campo es mayor en la esfera pequeña: efecto puntas."),
    A("Un electrón se lanza a 4 · 10⁶ m/s desde un punto a 50 V hacia otro a −20 V. ¿Llega? Si llega, ¿con qué velocidad?", "E<sub>c</sub> inicial = ½ · 9,1·10⁻³¹ · 1,6·10¹³ = 7,28·10⁻¹⁸ J = 45,5 eV. Necesita 70 eV para bajar 70 V (se frena). No llega: se para donde V = 50 − 45,5 = 4,5 V."),
    A("Calcula la energía almacenada en el condensador de un desfibrilador de 100 μF cargado a 2000 V y la potencia media si se descarga en 5 ms.", "E = ½CV² = ½ · 10⁻⁴ · 4·10⁶ = 200 J. P = 200 / 0,005 = 40 kW."),
    A("Representa E(r) y V(r) para una esfera conductora de radio R y carga Q > 0 y explica por qué V es continuo y E no.", "E = 0 dentro y salta a kQ/R² en la superficie, luego decrece como 1/r². V es constante (kQ/R) dentro y decrece como kQ/r fuera. V es continuo porque es el trabajo por unidad de carga, que no puede saltar; E salta por la carga superficial σ."),
  ],
  quiz: [
    q4("El potencial eléctrico se mide en…", ["N/C", "voltios", "julios", "culombios"], 1, "V = J/C."),
    q4("El potencial eléctrico es una magnitud…", ["vectorial", "escalar", "siempre positiva", "siempre negativa"], 1, "Se suma con signo."),
    q4("El potencial de una carga negativa es…", ["positivo", "negativo", "nulo", "infinito"], 1, "V = kQ/r con signo."),
    q4("La energía potencial de dos cargas del mismo signo es…", ["negativa", "positiva", "nula", "depende de r"], 1, "Se repelen."),
    q4("En el punto medio de un dipolo…", ["E = 0 y V = 0", "E ≠ 0 y V = 0", "E = 0 y V ≠ 0", "E ≠ 0 y V ≠ 0"], 1, "Los potenciales se anulan; los campos se suman."),
    q4("En el punto medio de dos cargas iguales positivas…", ["E = 0 y V ≠ 0", "E ≠ 0 y V = 0", "ambos nulos", "ambos no nulos"], 0, "Al revés que el dipolo."),
    q4("El trabajo del campo de A a B es…", ["q(V<sub>B</sub> − V<sub>A</sub>)", "q(V<sub>A</sub> − V<sub>B</sub>)", "V<sub>A</sub> − V<sub>B</sub>", "qV<sub>A</sub>V<sub>B</sub>"], 1, "W = −ΔE<sub>p</sub>."),
    q4("Una carga positiva se mueve espontáneamente hacia…", ["potenciales mayores", "potenciales menores", "equipotenciales", "el infinito siempre"], 1, "Como una masa que cae."),
    q4("Las líneas de campo apuntan hacia…", ["potenciales crecientes", "potenciales decrecientes", "V = 0", "las equipotenciales"], 1, "E = −dV/dr."),
    q4("En un campo uniforme, E =", ["ΔV · d", "ΔV / d", "d / ΔV", "ΔV²"], 1, "V/m."),
    q4("1 V/m equivale a…", ["1 N/C", "1 J", "1 C/m", "1 W"], 0, "Unidades del campo."),
    q4("El flujo eléctrico es máximo cuando el campo es…", ["paralelo a la superficie", "perpendicular a la superficie", "nulo", "variable"], 1, "cos 0 = 1."),
    q4("Según Gauss, el flujo a través de una superficie cerrada depende de…", ["su forma", "la carga encerrada", "todas las cargas", "el radio"], 1, "Q<sub>int</sub>/ε₀."),
    q4("Dentro de una esfera conductora cargada, E es…", ["kQ/r²", "0", "kQ/R²", "kQr/R³"], 1, "Equilibrio electrostático."),
    q4("Dentro de una esfera conductora cargada, V es…", ["0", "kQ/R", "kQ/r", "infinito"], 1, "Constante, igual al de la superficie."),
    q4("El campo de un plano infinito cargado…", ["disminuye con 1/r²", "es uniforme", "disminuye con 1/r", "es nulo"], 1, "σ/2ε₀."),
    q4("El campo entre las placas de un condensador es…", ["σ/2ε₀", "σ/ε₀", "0", "2σ/ε₀"], 1, "Se suman los de las dos placas."),
    q4("La capacidad de un condensador se mide en…", ["voltios", "faradios", "culombios", "ohmios"], 1, "C = Q/ΔV."),
    q4("La carga de un conductor tiende a acumularse en…", ["las zonas planas", "las puntas", "el interior", "el centro"], 1, "Efecto puntas."),
    q4("El potencial de reposo de una neurona es de unos…", ["+230 V", "−70 mV", "1,5 V", "0 V"], 1, "Interior negativo."),
  ],
  examen: [
    q4("Potencial a 3 m de +6 nC:", ["18 V", "54 V", "6 V", "2 V"], 0, "9·10⁹ · 6·10⁻⁹ / 3."),
    q4("Trabajo del campo al llevar −2 μC de 100 V a 300 V:", ["4·10⁻⁴ J", "−4·10⁻⁴ J", "8·10⁻⁴ J", "0"], 0, "−2·10⁻⁶ · (100 − 300)."),
    q4("Energía de un sistema de dos cargas de +1 μC a 1 m:", ["9·10⁻³ J", "−9·10⁻³ J", "9 J", "0"], 0, "kq²/r."),
    q4("Campo uniforme entre equipotenciales de 50 V y 20 V a 3 mm:", ["10⁴ V/m", "100 V/m", "10 V/m", "1000 V/m"], 0, "30/0,003."),
    q4("Flujo a través de una esfera que encierra +8,85 nC:", ["1000 N·m²/C", "8,85 N·m²/C", "0", "10⁶ N·m²/C"], 0, "Q/ε₀."),
    q4("Esfera conductora con V = 300 V en su superficie: V en el centro =", ["300 V", "0", "150 V", "600 V"], 0, "Constante dentro."),
    q4("Electrón acelerado desde el reposo por 50 V: E<sub>c</sub> =", ["50 eV", "8·10⁻¹⁸ J", "ambas", "ninguna"], 2, "50 · 1,6·10⁻¹⁹."),
    q4("Si se duplica la distancia a una carga, el potencial…", ["se divide entre 2", "se divide entre 4", "se duplica", "no cambia"], 0, "V ∝ 1/r."),
  ],
  feynman: ["Qué diferencia hay entre potencial y diferencia de potencial", "Por qué un pájaro no se electrocuta en un cable", "Por qué el campo puede ser nulo donde el potencial no lo es", "Qué dice el teorema de Gauss con palabras sencillas", "Por qué no hay campo dentro de un coche alcanzado por un rayo", "Por qué los pararrayos tienen punta"],
  mapa: mapaB("POTENCIAL Y GAUSS", [["Energía potencial", "Ep = kQq/r", "var(--red)"], ["Potencial", "V = kQ/r ; E = −dV/dr", "var(--pen)"], ["Trabajo", "W = q(VA − VB)", "var(--leaf)"], ["Gauss", "Φ = Qint/ε₀", "var(--muted)"]]),
  tarjetas: [
    ["Energía potencial eléctrica", "E<sub>p</sub> = k·Q·q / r (con signo)."],
    ["Energía de un sistema", "Suma de k·q<sub>i</sub>·q<sub>j</sub>/r<sub>ij</sub> de cada pareja."],
    ["Potencial", "V = k·Q / r (V = J/C), escalar."],
    ["Trabajo del campo", "W<sub>A→B</sub> = q · (V<sub>A</sub> − V<sub>B</sub>)."],
    ["Movimiento espontáneo", "q &gt; 0 hacia V menor; q &lt; 0 hacia V mayor."],
    ["Campo y potencial", "E = −dV/dr; uniforme: E = ΔV/d."],
    ["Conservación de la energía", "½mv² + qV = constante."],
    ["Flujo", "Φ = E · S · cos α."],
    ["Teorema de Gauss", "Φ = Q<sub>int</sub> / ε₀."],
    ["Esfera conductora", "E = 0 dentro; V = kQ/R constante."],
    ["Plano y condensador", "σ/2ε₀ y σ/ε₀."],
    ["Capacidad", "C = Q/ΔV = ε₀·S/d (faradios)."],
  ],
  glosario: [
    ["Energía potencial eléctrica", "Energía de una carga debida a su posición en un campo eléctrico."],
    ["Potencial eléctrico", "Energía potencial por unidad de carga positiva."],
    ["Voltio", "Unidad de potencial: un julio por culombio."],
    ["Diferencia de potencial", "Trabajo del campo por unidad de carga entre dos puntos; tensión o voltaje."],
    ["Superficie equipotencial", "Conjunto de puntos con el mismo potencial."],
    ["Gradiente", "Variación de una magnitud escalar en la dirección de máximo cambio."],
    ["Distancia de máxima aproximación", "Distancia mínima a la que llega una carga lanzada contra otra que la repele."],
    ["Flujo eléctrico", "Medida del número de líneas de campo que atraviesan una superficie."],
    ["Superficie gaussiana", "Superficie cerrada imaginaria elegida para aplicar el teorema de Gauss."],
    ["Densidad superficial de carga", "Carga por unidad de superficie (C/m²)."],
    ["Densidad lineal de carga", "Carga por unidad de longitud (C/m)."],
    ["Equilibrio electrostático", "Estado de un conductor en el que sus cargas no se mueven."],
    ["Toma de tierra", "Conexión a la Tierra, que fija el potencial en cero."],
    ["Condensador", "Dispositivo de dos conductores que almacena carga y energía."],
    ["Faradio", "Unidad de capacidad: un culombio por voltio."],
  ],
  situacion: {
    titulo: "¿Está protegido nuestro instituto frente a los rayos?",
    reto: "El equipo directivo quiere saber si el pararrayos del instituto es adecuado y qué hacer si una tormenta sorprende a un grupo en el patio. Vuestro equipo debe preparar un informe técnico y una guía de seguridad.",
    pasos: [
      "Investigad cómo se forma un rayo y estimad la diferencia de potencial y la energía de una descarga típica.",
      "Explicad con el concepto de conductor en equilibrio y el efecto puntas cómo funciona un pararrayos.",
      "Calculad la diferencia de potencial entre los pies de una persona a 10 m del impacto (tensión de paso), con un modelo sencillo de potencial que decrece como 1/r.",
      "Localizad el pararrayos del centro y la zona que protege.",
      "Redactad una guía de seguridad para tormentas basada en la física del tema (jaula de Faraday, posturas, lugares seguros).",
    ],
    producto: "Un informe técnico y una infografía de seguridad para colgar en el centro.",
    evaluacion: ["Se aplican correctamente los conceptos de potencial y diferencia de potencial.", "Se explican el efecto puntas y la jaula de Faraday.", "Las estimaciones numéricas son razonables.", "La guía es clara, útil y está bien justificada."],
  },
  familias: [
    "Leed juntos la placa de un cargador de móvil y comentad los voltajes de entrada y salida.",
    "Comprobad qué enchufes de casa tienen toma de tierra y para qué sirve.",
    "Durante una tormenta, contad los segundos entre relámpago y trueno para estimar la distancia del rayo (unos 3 s por kilómetro).",
    "Buscad dónde hay desfibriladores en vuestro barrio o en el polideportivo.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Campo eléctrico»: energía potencial y potencial eléctrico de distribuciones de cargas puntuales, superficies equipotenciales, trabajo y conservación de la energía; flujo del campo eléctrico y teorema de Gauss aplicado a distribuciones con simetría; conductores en equilibrio; aplicaciones tecnológicas y seguridad eléctrica.`,
    ideas: [
      "Simulación PhET «Cargas y campos» con el voltímetro para trazar equipotenciales.",
      "Cubeta electrolítica con agua salada y un polímetro para medir equipotenciales reales.",
      "Experiencia con un generador de Van de Graaff y una jaula de Faraday.",
      "Debate sobre seguridad eléctrica en casa y en tormentas.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Simulación «Cargas y campos» (PhET)", url: "https://phet.colorado.edu/es/simulations/charges-and-fields" },
    { t: "Simulación «Laboratorio de condensadores» (PhET)", url: "https://phet.colorado.edu/es/simulations/capacitor-lab-basics" },
  ],
  revisado: "2026-11-21",
};
