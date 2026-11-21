// Ciencias Generales 2º Bachillerato · La energía y sus transformaciones (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, arbol, cadena } = require("./_bach2-cg");

// Montaña rusa: energía potencial y cinética.
const montanaSVG = marco("Montaña rusa: arriba la energía es sobre todo potencial y abajo sobre todo cinética; la suma se conserva si no hay rozamiento", `
  <path d="M14 150 L 14 40 C 40 40 60 150 100 150 C 140 150 150 80 180 80 C 210 80 220 150 246 150" fill="none" stroke="var(--pen)" stroke-width="3.5"/>
  <circle cx="24" cy="40" r="8" fill="var(--red)"/><circle cx="100" cy="146" r="8" fill="var(--red)"/><circle cx="180" cy="76" r="8" fill="var(--red)"/>
  ${T(54, 32, "Ep máxima, Ec = 0", { fs: 10, b: true, c: "var(--red)", a: "start" })}${T(100, 172, "Ec máxima, Ep mínima", { fs: 10, b: true, c: "var(--red)" })}${T(196, 62, "Ep + Ec", { fs: 10, b: true, c: "var(--red)" })}
  <path d="M8 150 H 252" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 3"/>${T(250, 166, "h = 0", { fs: 9.5, a: "end", c: "var(--muted)" })}`);

// Trabajo: fuerza y desplazamiento con ángulo.
const trabajoSVG = L5.fuerzas("Fuerza F que tira de un bloque formando un ángulo con el desplazamiento: solo la componente paralela hace trabajo", "m", [[30, 70, "F", "var(--red)"], [0, 44, "Fx", "var(--pen)"], [180, 34, "Fr", "var(--sun)"]]);

// Transmisión del calor.
const calorSVG = L6.tabla("Las tres formas de propagación del calor", ["Forma", "Cómo", "Ejemplo"], [["Conducción", "contacto entre partículas", "cuchara caliente"], ["Convección", "corrientes de fluido", "radiador, viento"], ["Radiación", "ondas electromagnéticas", "luz del Sol"]]);

// Máquina térmica.
const termicaSVG = marco("Máquina térmica: toma calor de un foco caliente, convierte una parte en trabajo y cede el resto a un foco frío", `
  <rect x="80" y="10" width="100" height="34" rx="8" fill="var(--red)" fill-opacity=".85"/>${T(130, 32, "Foco caliente", { fs: 12, b: true, c: "#fff" })}
  <circle cx="130" cy="90" r="26" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>${T(130, 95, "Motor", { fs: 12, b: true })}
  <rect x="80" y="136" width="100" height="34" rx="8" fill="var(--pen)" fill-opacity=".85"/>${T(130, 158, "Foco frío", { fs: 12, b: true, c: "#fff" })}
  <path d="M130 44 V 62" stroke="var(--red)" stroke-width="5" marker-end="url(#mtA)"/><path d="M130 116 V 134" stroke="var(--pen)" stroke-width="3" marker-end="url(#mtA)"/><path d="M156 90 H 214" stroke="var(--leaf)" stroke-width="4" marker-end="url(#mtA)"/>
  ${T(150, 58, "Q₁", { fs: 12, b: true, c: "var(--red)", a: "start" })}${T(150, 130, "Q₂", { fs: 12, b: true, c: "var(--pen)", a: "start" })}${T(232, 86, "W", { fs: 13, b: true, c: "var(--leaf)" })}
  ${T(42, 86, "η = W / Q₁", { fs: 12, b: true })}${T(42, 104, "W = Q₁ − Q₂", { fs: 10.5, c: "var(--muted)" })}`, `<marker id="mtA" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker>`);

module.exports = tema({
  titulo: "La energía y sus transformaciones",
  minutos: 120,
  secciones: [4, 4, 4],
  objetivos: [
    "Definir la energía, sus formas y sus propiedades: se transforma, se transfiere, se conserva y se degrada",
    "Calcular el trabajo realizado por una fuerza y la potencia, y relacionarlos con la energía",
    "Aplicar la conservación de la energía mecánica, con y sin rozamiento, a situaciones reales",
    "Distinguir calor y temperatura y calcular el calor en cambios de temperatura y de estado",
    "Explicar el rendimiento de las máquinas y el segundo principio de la termodinámica",
    "Analizar el consumo energético doméstico y proponer medidas de eficiencia y ahorro",
  ],
  claves: ["energía", "julio", "energía cinética", "energía potencial", "energía mecánica", "trabajo", "potencia", "vatio", "conservación de la energía", "rozamiento", "calor", "temperatura", "calor específico", "rendimiento", "entropía", "eficiencia energética"],
  pregunta: {
    texto: "Si la energía no se crea ni se destruye, ¿por qué hablamos de «gastar» energía y de que hay que ahorrarla?",
    respuesta: "Porque la energía se <b>conserva</b>, pero se <mark>degrada</mark>. Cuando usamos la electricidad o la gasolina, su energía no desaparece: acaba convertida casi toda en <b>calor</b> disperso a baja temperatura en el ambiente, del que ya no podemos sacar trabajo útil. Lo que «gastamos» es la <b>calidad</b> de la energía, su capacidad de hacer trabajo. Por eso ahorrar energía tiene sentido: cada transformación desperdicia una parte en forma de calor inútil.",
  },
  lectura: {
    titulo: "El experimento del peso que calentaba el agua",
    html: `<p>En la década de 1840, en su laboratorio de Mánchester, el cervecero y físico aficionado James Prescott Joule montó un aparato aparentemente sencillo: unas pesas que, al bajar, hacían girar unas paletas dentro de un recipiente lleno de agua. Las paletas agitaban el agua y, con un termómetro muy preciso, Joule midió que el agua se calentaba un poco. Comprobó que siempre hacía falta el mismo trabajo mecánico para elevar un grado la temperatura de una libra de agua.</p><p>Hoy parece obvio, pero entonces muchos científicos creían que el calor era un fluido invisible, el «calórico», que pasaba de los cuerpos calientes a los fríos. Joule demostró que el calor y el trabajo son dos formas de transferir lo mismo: energía. Su resultado ayudó a formular uno de los principios más importantes de la física, la conservación de la energía, y la unidad de energía lleva su nombre. En este tema verás qué es la energía, cómo se transforma en una montaña rusa, en un motor o en tu cuerpo, por qué ninguna máquina puede aprovecharla entera y cómo podemos usarla mejor en casa.</p>`,
  },
  bloques: [
    { h: "Qué es la energía", p: [
      "La <mark>energía</mark> es la capacidad de un sistema para producir cambios: mover objetos, calentarlos, iluminar, transformar sustancias. Es una magnitud escalar que se mide en el Sistema Internacional en <b>julios (J)</b>. Un julio es poco: es la energía necesaria para levantar una manzana de 100 g un metro. Por eso se usan múltiplos como el kilojulio (kJ), y en contextos concretos otras unidades: la <b>caloría</b> (1 cal = 4,18 J; las «calorías» de los alimentos son en realidad kilocalorías), el <b>kilovatio hora</b> (1 kWh = 3,6·10⁶ J) de la factura de la luz o la <b>tonelada equivalente de petróleo</b> (tep) de las estadísticas energéticas.",
      "La energía tiene cuatro propiedades fundamentales. Se <b>transforma</b> de unas formas en otras: en una central hidráulica, la energía potencial del agua se convierte en cinética y después en eléctrica. Se <b>transfiere</b> de unos cuerpos a otros, mediante <b>trabajo</b> (cuando una fuerza desplaza un cuerpo) o mediante <b>calor</b> (cuando hay diferencia de temperatura). Se <b>conserva</b>: en un sistema aislado, la energía total es siempre la misma. Y se <b>degrada</b>: en cada transformación, una parte se convierte en calor disperso, menos útil. Comprender estas propiedades es la clave de toda la física y de los retos energéticos de nuestra sociedad.",
    ], svg: arbol("Propiedades de la energía", "Energía", [["Se transforma", "potencial → cinética → eléctrica"], ["Se transfiere", "por trabajo o por calor"], ["Se conserva", "la total no cambia"], ["Se degrada", "acaba como calor disperso"]]), v: ["ene-a", "Trabajo y energía: conceptos, modelos y sistemas"] },
    { h: "Formas de energía", p: [
      "La energía se presenta en muchas formas, aunque en el fondo casi todas se reducen a dos: energía de movimiento (cinética) y energía de posición o de configuración (potencial). La <b>energía mecánica</b> es la de los cuerpos por su movimiento y su posición. La <b>energía térmica o interna</b> es la energía cinética y potencial de las partículas que forman un cuerpo; aumenta con la temperatura. La <b>energía química</b> está almacenada en los enlaces de las sustancias y se libera en reacciones como la combustión o la digestión. La <b>energía eléctrica</b> se debe al movimiento de las cargas eléctricas por un circuito.",
      "La <b>energía radiante o electromagnética</b> es la que transporta la luz y otras radiaciones, como la del Sol que hace posible la vida. La <b>energía nuclear</b> se almacena en los núcleos de los átomos y se libera en la fisión (rotura de núcleos pesados, como en las centrales nucleares) o en la fusión (unión de núcleos ligeros, como en las estrellas). La <b>energía sonora</b> es la que transportan las vibraciones del aire. Todas se pueden transformar unas en otras con los dispositivos adecuados: una placa solar convierte luz en electricidad; un altavoz, electricidad en sonido; una planta, luz en energía química; nuestros músculos, energía química en mecánica y térmica.",
    ], svg: L6.radial("Formas de energía", "Energía", ["Mecánica", "Térmica", "Química", "Eléctrica", "Radiante", "Nuclear"]) },
    { h: "La energía cinética", p: [
      "La <mark>energía cinética</mark> es la que tiene un cuerpo por estar en movimiento. Depende de su masa (m) y, sobre todo, de su velocidad (v): <b>Ec = ½ · m · v²</b>. Al depender del cuadrado de la velocidad, si un coche duplica su velocidad, su energía cinética se multiplica por cuatro; si la triplica, por nueve. Esta es la razón física de los límites de velocidad: en un choque a 100 km/h hay que disipar casi el doble de energía que a 70 km/h, y la distancia de frenado crece en la misma proporción.",
      "Por ejemplo, un coche de 1200 kg a 90 km/h (25 m/s) tiene Ec = ½ · 1200 · 25² = 375 000 J. Para detenerlo, los frenos deben convertir toda esa energía en calor: por eso los discos de freno se calientan tanto. Los coches eléctricos e híbridos usan el <b>frenado regenerativo</b>, que convierte parte de esa energía cinética en eléctrica y la guarda en la batería. La energía cinética también explica el poder del viento (aerogeneradores), de los ríos (centrales hidráulicas) o de un meteorito: el asteroide que extinguió a los dinosaurios, de unos 10 km, llegó a unos 20 km/s con una energía equivalente a miles de millones de bombas atómicas.",
    ], svg: L5.graf("La energía cinética crece con el cuadrado de la velocidad: al doble de velocidad, cuatro veces más energía", "velocidad", "Ec", [{ p: [[0, 0], [0.25, 0.0625], [0.5, 0.25], [0.75, 0.5625], [1, 1]], c: "var(--red)", t: "Ec = ½mv²" }], `${T(110, 70, "v → 2v: Ec × 4", { fs: 11, b: true, c: "var(--pen)" })}`) },
    { h: "La energía potencial", p: [
      "La <mark>energía potencial gravitatoria</mark> es la que tiene un cuerpo por su posición en un campo gravitatorio, es decir, por su altura. Cerca de la superficie terrestre vale <b>Ep = m · g · h</b>, donde g = 9,8 m/s² es la aceleración de la gravedad y h la altura respecto a un nivel de referencia que elegimos nosotros (el suelo, la mesa o el nivel del mar). Lo que tiene sentido físico son las <b>variaciones</b> de energía potencial: al subir 3 m una mochila de 5 kg, aumentamos su energía potencial en 5 · 9,8 · 3 = 147 J.",
      "La energía potencial es una energía «almacenada» que se puede recuperar. Las <b>centrales hidroeléctricas</b> aprovechan la del agua de los embalses, y las <b>centrales de bombeo</b>, como la de La Muela en Valencia, suben agua cuando sobra electricidad y la dejan caer cuando falta: funcionan como una gigantesca batería. También existe la <b>energía potencial elástica</b>, la de un muelle o una goma deformados, que vale Ep = ½ · k · x², siendo k la constante del muelle y x la deformación. La usan los arcos, los trampolines, los amortiguadores y los antiguos relojes de cuerda.",
    ], svg: L5.ficha("Fórmulas de la energía mecánica", "Energía mecánica", ["Ec = ½ · m · v²", "Ep = m · g · h", "Ep elástica = ½ · k · x²", "Em = Ec + Ep"], "var(--pen)") },
    { h: "El trabajo", p: [
      "En física, una fuerza realiza <mark>trabajo</mark> cuando desplaza el cuerpo sobre el que actúa. El trabajo es una forma de <b>transferir energía</b> y se calcula como <b>W = F · Δx · cos α</b>, donde F es la fuerza, Δx el desplazamiento y α el ángulo entre ambos. Se mide en julios: 1 J = 1 N · 1 m. Si la fuerza tiene la misma dirección y sentido que el movimiento (α = 0°), el trabajo es máximo y positivo: la fuerza aporta energía. Si es opuesta (α = 180°), como el rozamiento, el trabajo es negativo: quita energía al cuerpo.",
      "Si la fuerza es perpendicular al desplazamiento (α = 90°), no realiza trabajo, aunque nos cansemos. Sostener una maleta quieta o llevarla horizontalmente a velocidad constante no supone trabajo físico sobre la maleta, aunque los músculos consuman energía. El <b>teorema de las fuerzas vivas</b> relaciona trabajo y energía cinética: el trabajo total realizado sobre un cuerpo es igual a la variación de su energía cinética, W<sub>total</sub> = ΔEc. Así, el trabajo del motor acelera un coche y el de los frenos lo detiene. Las <b>máquinas simples</b>, como la palanca, la polea o el plano inclinado, no ahorran trabajo, pero permiten hacerlo con menos fuerza a cambio de mayor recorrido.",
    ], svg: trabajoSVG, v: ["ene-b", "Concepto de trabajo: fórmula y ejemplos"] },
    { h: "La potencia", p: [
      "No es lo mismo subir unas escaleras corriendo que andando, aunque el trabajo realizado contra la gravedad sea el mismo. La <mark>potencia</mark> mide la rapidez con que se realiza un trabajo o se transfiere energía: <b>P = W / t</b> (o P = E / t). Su unidad en el SI es el <b>vatio (W)</b>, que equivale a 1 J/s. Se usan también el kilovatio (kW) y, en los motores, el <b>caballo de vapor</b> (CV ≈ 735 W). Una persona en reposo desarrolla unos 100 W; un ciclista profesional, unos 400 W durante una hora; un coche medio, unos 80 kW, y un aerogenerador moderno, de 3 a 15 MW.",
      "Potencia y energía se confunden a menudo. La potencia de un aparato indica cuánta energía consume <b>cada segundo</b>; la energía total depende también del <b>tiempo</b> de uso: E = P · t. Por eso la compañía eléctrica nos cobra por la energía en <b>kilovatios hora</b>: un horno de 2 kW funcionando media hora consume 1 kWh, lo mismo que una bombilla LED de 10 W encendida 100 horas. En la factura también aparece la «potencia contratada», que limita cuántos aparatos podemos usar a la vez. También se puede expresar la potencia como P = F · v: para subir una cuesta a más velocidad con la misma fuerza, el motor necesita más potencia.",
    ], svg: L5.barras("Potencia de algunos aparatos domésticos (vatios)", "Potencia (W)", [["Horno", 2000, "var(--red)", "2000 W"], ["Lavadora", 1800, "var(--sun)", "1800 W"], ["Frigorífico", 150, "var(--pen)", "150 W"], ["Portátil", 60, "var(--leaf)", "60 W"], ["LED", 10, "var(--inf)", "10 W"]]) },
    { h: "La conservación de la energía mecánica", p: [
      "La <mark>energía mecánica</mark> de un cuerpo es la suma de su energía cinética y potencial: Em = Ec + Ep. Si sobre el cuerpo solo actúan fuerzas como el peso o la fuerza elástica (fuerzas <b>conservativas</b>) y no hay rozamiento, la energía mecánica <b>se conserva</b>: Ec₁ + Ep₁ = Ec₂ + Ep₂. Lo que gana en cinética lo pierde en potencial y al revés. En una montaña rusa sin rozamiento, el vagón tiene su máxima energía potencial arriba y su máxima cinética abajo, y la suma es siempre la misma.",
      "Este principio permite resolver problemas sin conocer los detalles del movimiento. Si dejamos caer una piedra desde 20 m, al llegar al suelo toda su energía potencial se habrá convertido en cinética: m·g·h = ½·m·v², de donde v = √(2·g·h) = √(2 · 9,8 · 20) ≈ 19,8 m/s. ¡La masa no influye! Es lo que observó Galileo: sin aire, todos los cuerpos caen igual. Del mismo modo, un péndulo sube siempre hasta la misma altura, y un saltador con pértiga transforma la energía cinética de su carrera en energía elástica de la pértiga y, después, en potencial para superar el listón.",
    ], svg: montanaSVG, v: ["ene-c", "Conservación de la energía mecánica"] },
    { h: "Rozamiento y conservación de la energía total", p: [
      "En el mundo real siempre hay <b>rozamiento</b> y resistencia del aire, fuerzas <b>no conservativas</b> que realizan trabajo negativo y disminuyen la energía mecánica. Una pelota que bota cada vez sube menos y un péndulo acaba parándose. ¿Desaparece esa energía? No: se transforma en <b>energía térmica</b> (el suelo, la pelota y el aire se calientan ligeramente) y en sonido. La pérdida de energía mecánica es igual al trabajo del rozamiento: Em₂ = Em₁ + W<sub>roz</sub>, con W<sub>roz</sub> negativo.",
      "Joule y otros científicos del siglo XIX comprendieron que, si se tienen en cuenta todas las formas de energía, la energía total se conserva siempre. Es el <mark>principio de conservación de la energía</mark>: la energía no se crea ni se destruye, solo se transforma o se transfiere. Es uno de los principios más sólidos de la ciencia: nunca se ha observado una excepción. Por eso son imposibles las máquinas de «movimiento perpetuo» que algunos inventores afirman haber construido: ninguna máquina puede dar más energía de la que recibe. En el ámbito de la termodinámica, este principio se llama <b>primer principio</b>: la variación de la energía interna de un sistema es igual al calor que recibe más el trabajo que se realiza sobre él (ΔU = Q + W).",
    ], svg: cadena("Una pelota que bota: la energía mecánica se transforma en térmica y sonora, pero la total se conserva", [["Ep (altura)", "var(--pen)"], ["Ec (caída)", "var(--red)"], ["Térmica y sonido", "var(--sun)"]], ["cae", "bote"], "La energía total se conserva") },
    { h: "Calor y temperatura", p: [
      "En el lenguaje cotidiano se confunden, pero son conceptos distintos. La <mark>temperatura</mark> mide la energía cinética media de las partículas de un cuerpo; se mide con termómetros en grados Celsius o en kelvin (T(K) = t(°C) + 273). El <mark>calor</mark> es la energía que se transfiere de un cuerpo a otro debido a su diferencia de temperatura, siempre del más caliente al más frío, hasta que alcanzan el <b>equilibrio térmico</b>. Un cuerpo no «tiene» calor: tiene energía interna, y puede ganarla o perderla en forma de calor.",
      "Cuando un cuerpo recibe calor sin cambiar de estado, su temperatura aumenta según <b>Q = m · c · ΔT</b>, donde c es el <b>calor específico</b>, la energía necesaria para elevar 1 °C un kilogramo de sustancia. El agua tiene un calor específico altísimo (4180 J/kg·°C), por eso tarda en calentarse y enfriarse y modera el clima de las costas. Durante un cambio de estado, el calor no sube la temperatura, sino que separa partículas: Q = m · L, siendo L el <b>calor latente</b> (fundir 1 kg de hielo requiere 334 000 J). El calor se propaga por <b>conducción</b> (por contacto, en sólidos: los metales son buenos conductores y la lana o el aire, aislantes), por <b>convección</b> (corrientes en líquidos y gases) y por <b>radiación</b> (ondas electromagnéticas, incluso en el vacío).",
    ], svg: calorSVG, v: ["ene-d", "Transferencia de calor: conducción, convección y radiación"] },
    { h: "Máquinas térmicas y rendimiento", p: [
      "Una <b>máquina</b> transforma una forma de energía en otra que nos resulta útil. Ninguna es perfecta: siempre se pierde una parte, normalmente como calor. El <mark>rendimiento</mark> (η) es el cociente entre la energía útil obtenida y la energía consumida, expresado en porcentaje: η = (E<sub>útil</sub> / E<sub>consumida</sub>) · 100. Un motor eléctrico puede alcanzar el 90 %; una bombilla LED convierte en luz alrededor del 40 % de la electricidad, frente al 5 % de una incandescente, que era más una estufa que una lámpara.",
      "Las <b>máquinas térmicas</b>, como el motor de un coche o la turbina de una central, convierten calor en trabajo. Toman calor (Q₁) de un foco caliente (la combustión), transforman una parte en trabajo (W) y ceden el resto (Q₂) a un foco frío (el ambiente): W = Q₁ − Q₂. El <b>segundo principio de la termodinámica</b> establece que es imposible convertir todo el calor en trabajo: siempre hay que ceder calor a un foco frío. El rendimiento máximo teórico solo depende de las temperaturas de los focos (η<sub>máx</sub> = 1 − T₂/T₁, en kelvin). Por eso un motor de gasolina tiene un rendimiento de solo un 25-30 % y una central térmica, de un 35-55 %. El resto se pierde como calor por el tubo de escape o las torres de refrigeración.",
    ], svg: termicaSVG },
    { h: "La entropía y la degradación de la energía", p: [
      "El segundo principio tiene una consecuencia profunda: los procesos naturales tienen un <b>sentido</b>. El calor pasa espontáneamente del cuerpo caliente al frío, nunca al revés; un vaso que se rompe no se recompone solo; el perfume se difunde por la habitación pero no vuelve al frasco. Para describirlo se define la <mark>entropía</mark>, una magnitud que mide el grado de desorden o de dispersión de la energía de un sistema. En un sistema aislado, la entropía siempre aumenta o, como mucho, se mantiene.",
      "Por eso decimos que la energía se <b>degrada</b>: aunque la cantidad total se conserva, cada transformación la convierte en formas más dispersas y menos útiles. La energía química concentrada en un litro de gasolina acaba repartida como calor a baja temperatura por el aire, imposible de recuperar. Los seres vivos parecen ir contra la entropía, porque crean orden (células, tejidos), pero lo hacen consumiendo energía de alta calidad (la luz del Sol o los alimentos) y devolviendo al entorno calor y desechos, de modo que la entropía total del universo aumenta. Comprender la degradación explica por qué la energía, aunque se conserva, es un recurso que hay que usar con inteligencia.",
    ], svg: L5.compara("Calidad de la energía: de concentrada y útil a dispersa y poco útil", ["Alta calidad", ["electricidad", "combustibles", "luz solar", "trabajo", "baja entropía"]], ["Baja calidad", ["calor ambiente", "aire tibio", "agua templada", "ruido", "alta entropía"]], "var(--leaf)", "var(--red)") },
    { h: "Eficiencia energética en la vida diaria", p: [
      "La <mark>eficiencia energética</mark> consiste en obtener el mismo servicio (luz, calor, transporte) consumiendo menos energía. Es la fuente de energía más barata y limpia: la que no se consume no contamina. En un hogar español medio, la mayor parte de la energía se dedica a la calefacción y al agua caliente, seguida de los electrodomésticos, la cocina y la iluminación. Las <b>etiquetas energéticas</b> de la Unión Europea clasifican electrodomésticos y viviendas de la A (más eficiente) a la G: un frigorífico de clase A puede consumir menos de la mitad que uno de clase E.",
      "Hay muchas medidas sencillas: aislar bien paredes y ventanas, ajustar el termostato a unos 20 °C en invierno y 25-26 °C en verano, usar bombillas LED, apagar los aparatos en lugar de dejarlos en espera (el <b>consumo fantasma</b> puede suponer un 10 % de la factura), lavar en frío y con la carga completa, o cocinar con tapa. En el transporte, ir a pie, en bicicleta o en transporte público reduce muchísimo el consumo por persona. Calcular el consumo es fácil: un radiador eléctrico de 1500 W encendido 4 horas al día durante 30 días gasta 1,5 · 4 · 30 = 180 kWh, unos 27 € a 0,15 €/kWh. Ahorrar energía ahorra dinero y reduce las emisiones de CO₂.",
    ], svg: L5.barras("Reparto del consumo de energía en un hogar español medio (%)", "Consumo del hogar (%)", [["Calefacción", 42, "var(--red)", "42 %"], ["Agua caliente", 19, "var(--sun)", "19 %"], ["Aparatos", 25, "var(--pen)", "25 %"], ["Cocina", 7, "var(--leaf)", "7 %"], ["Luz", 4, "var(--inf)", "4 %"]]) },
  ],
  figura: { titulo: "La energía", items: [["Mecánica", "Ec = ½mv²", "Ep = mgh", "se conserva"], ["Trabajo", "W = F·d·cos α", "P = W/t", "J y W"], ["Calor", "Q = m·c·ΔT", "Q = m·L", "3 formas"], ["Máquinas", "η = útil/total", "2.º principio", "entropía ↑"]] },
  video: ["ene-c", "Conservación de la energía mecánica"],
  ejemplos: [
    ["Calcula la energía cinética de un ciclista de 70 kg (con bici) a 36 km/h y la energía potencial al subir un puerto de 500 m de desnivel.", ["36 km/h = 10 m/s.", "Ec = ½ · 70 · 10² = 3500 J.", "Ep = m·g·h = 70 · 9,8 · 500 = 343 000 J."], "Ec = 3,5 kJ; ΔEp = 343 kJ."],
    ["Se empuja un carro con 50 N formando 60° con la horizontal a lo largo de 10 m. ¿Qué trabajo se realiza?", ["W = F · Δx · cos α.", "W = 50 · 10 · cos 60° = 50 · 10 · 0,5.", "W = 250 J."], "250 J."],
    ["Un motor eleva 200 kg a 15 m en 20 s. Calcula su potencia útil.", ["W = m·g·h = 200 · 9,8 · 15 = 29 400 J.", "P = W / t = 29 400 / 20.", "P = 1470 W ≈ 1,5 kW (unos 2 CV)."], "1470 W."],
    ["Una bola se suelta desde 5 m de altura sin rozamiento. ¿Con qué velocidad llega al suelo? ¿Y a 1,8 m de altura?", ["Conservación: m·g·h₁ = ½·m·v² + m·g·h₂.", "Suelo: v = √(2·9,8·5) = √98 = 9,9 m/s.", "A 1,8 m: v = √(2·9,8·(5 − 1,8)) = √62,7 = 7,9 m/s."], "9,9 m/s y 7,9 m/s."],
    ["¿Qué calor hace falta para calentar 2 L de agua de 20 °C a 100 °C? ¿Cuánto tarda un hervidor de 2000 W si no hay pérdidas?", ["m = 2 kg; Q = m·c·ΔT = 2 · 4180 · 80.", "Q = 668 800 J.", "t = Q / P = 668 800 / 2000 = 334 s ≈ 5,6 min."], "6,7·10⁵ J; unos 5,6 minutos."],
    ["Un motor recibe 1000 J de la combustión y produce 300 J de trabajo. Calcula su rendimiento y el calor cedido al ambiente.", ["η = 300 / 1000 · 100 = 30 %.", "Q₂ = Q₁ − W = 1000 − 300.", "Q₂ = 700 J."], "η = 30 %; cede 700 J."],
  ],
  errores: [
    "Pensar que la energía cinética es proporcional a la velocidad: es proporcional a su cuadrado.",
    "Creer que sostener un peso quieto es hacer trabajo físico: sin desplazamiento no hay trabajo.",
    "Confundir potencia (W) con energía (kWh): la factura cobra energía, que es potencia por tiempo.",
    "Decir que un cuerpo «tiene» calor: tiene energía interna; el calor es energía en tránsito.",
    "Pensar que la masa influye en la velocidad de caída sin rozamiento: v = √(2gh) no depende de m.",
    "Creer que una máquina bien construida puede tener rendimiento del 100 %: el segundo principio lo impide.",
  ],
  ejercicios: {
    b: [
      ["Enuncia las cuatro propiedades de la energía.", "Se transforma, se transfiere (por trabajo o calor), se conserva y se degrada."],
      ["Indica las transformaciones de energía en: una linterna, un coche de gasolina, una placa solar, una planta.", "Linterna: química (pila) → eléctrica → luminosa y térmica. Coche: química → térmica → mecánica (y calor). Placa solar: radiante → eléctrica. Planta: radiante → química."],
      ["Calcula la energía cinética de un balón de 0,45 kg a 20 m/s.", "Ec = ½ · 0,45 · 20² = 90 J."],
      ["Calcula la energía potencial de una maceta de 3 kg en un balcón a 12 m.", "Ep = 3 · 9,8 · 12 = 352,8 J."],
      ["Convierte: 2,5 kWh a julios; 500 kcal a julios.", "2,5 · 3,6·10⁶ = 9,0·10⁶ J. 500 · 4180 = 2,09·10⁶ J."],
      ["Un niño empuja horizontalmente una caja con 40 N y la desplaza 5 m. ¿Qué trabajo hace?", "W = 40 · 5 · cos 0° = 200 J."],
      ["¿Hace trabajo un camarero que lleva una bandeja horizontalmente a velocidad constante? Explícalo.", "No sobre la bandeja: la fuerza que la sostiene es vertical y el desplazamiento horizontal (α = 90°, cos 90° = 0)."],
      ["Una bombilla de 60 W está encendida 5 horas. ¿Qué energía consume en kWh y en julios?", "E = 0,06 kW · 5 h = 0,3 kWh = 0,3 · 3,6·10⁶ = 1,08·10⁶ J."],
      ["Diferencia calor y temperatura.", "La temperatura mide la energía cinética media de las partículas; el calor es la energía que se transfiere entre cuerpos por su diferencia de temperatura."],
      ["Indica la forma de propagación del calor en: el radiador que calienta la habitación, el Sol que calienta la Tierra, el mango de una sartén.", "Convección; radiación; conducción."],
      ["Una lámpara consume 100 J y produce 40 J de luz. ¿Cuál es su rendimiento? ¿En qué se transforma el resto?", "η = 40/100 · 100 = 40 %. Los 60 J restantes se transforman en calor."],
      ["Cita cuatro medidas para ahorrar energía en casa.", "Bombillas LED, aislar ventanas, ajustar el termostato a 20 °C en invierno, apagar el modo de espera, lavar en frío con carga completa, electrodomésticos de clase A."],
    ],
    m: [
      ["Un coche de 1000 kg pasa de 54 km/h a 108 km/h. ¿Cuánto aumenta su energía cinética? ¿Cuántas veces?", "15 m/s → 30 m/s. Ec₁ = 112 500 J; Ec₂ = 450 000 J. Aumenta 337 500 J: se multiplica por 4."],
      ["Una grúa sube 500 kg a 30 m en 1 minuto. Calcula el trabajo y la potencia útil.", "W = 500 · 9,8 · 30 = 147 000 J. P = 147 000/60 = 2450 W."],
      ["Un muelle de constante 400 N/m se comprime 10 cm. ¿Qué energía almacena? ¿Con qué velocidad lanzaría una bola de 0,1 kg?", "Ep = ½ · 400 · 0,1² = 2 J. ½ · 0,1 · v² = 2 → v = √40 = 6,3 m/s."],
      ["Se lanza una pelota hacia arriba a 15 m/s. ¿Qué altura máxima alcanza sin rozamiento?", "½ v² = g·h → h = 15² / (2 · 9,8) = 11,5 m."],
      ["Un esquiador de 60 kg baja sin rozamiento una pendiente de 40 m de desnivel partiendo del reposo. ¿Qué velocidad lleva abajo? ¿Y si pierde 9000 J por rozamiento?", "Sin rozamiento: v = √(2·9,8·40) = 28 m/s. Con rozamiento: Ep = 23 520 J; Ec = 23 520 − 9000 = 14 520 J → v = √(2·14 520/60) = 22 m/s."],
      ["Un ciclista desarrolla 250 W durante 2 horas. ¿Qué energía produce en kJ y en kcal?", "E = 250 · 7200 = 1,8·10⁶ J = 1800 kJ = 1800/4,18 ≈ 431 kcal."],
      ["¿Qué calor hay que dar a 500 g de hielo a 0 °C para convertirlo en agua a 30 °C? (L = 334 kJ/kg; c = 4180 J/kg·°C)", "Fusión: 0,5 · 334 000 = 167 000 J. Calentar: 0,5 · 4180 · 30 = 62 700 J. Total: 229 700 J ≈ 230 kJ."],
      ["Se mezclan 200 g de agua a 80 °C con 300 g a 20 °C. ¿Cuál es la temperatura final?", "Calor cedido = calor absorbido: 0,2 · c · (80 − T) = 0,3 · c · (T − 20) → 16 − 0,2T = 0,3T − 6 → T = 44 °C."],
      ["¿Por qué el clima de la costa es más suave que el del interior?", "El agua del mar tiene un calor específico muy alto: se calienta y se enfría despacio, absorbiendo calor en verano y cediéndolo en invierno, lo que modera las temperaturas cercanas."],
      ["Un motor diésel tiene un rendimiento del 35 %. Si consume combustible con 4·10⁸ J, ¿qué trabajo útil obtiene y cuánto calor pierde?", "W = 0,35 · 4·10⁸ = 1,4·10⁸ J. Pérdidas = 2,6·10⁸ J en forma de calor."],
      ["Calcula el coste mensual de un aire acondicionado de 1,2 kW usado 6 h/día durante 30 días a 0,16 €/kWh.", "E = 1,2 · 6 · 30 = 216 kWh. Coste = 216 · 0,16 = 34,56 €."],
      ["Explica por qué es imposible una máquina de movimiento perpetuo.", "Violaría la conservación de la energía (daría más energía de la que recibe) o, al menos, el segundo principio: siempre hay rozamientos y pérdidas en forma de calor, así que cualquier máquina aislada acaba parándose."],
    ],
    a: [
      ["Un bloque de 5 kg se lanza a 8 m/s por un suelo horizontal con coeficiente de rozamiento 0,4. ¿Qué distancia recorre hasta pararse?", "Froz = μ·m·g = 0,4 · 5 · 9,8 = 19,6 N. Teorema de las fuerzas vivas: −Froz · d = 0 − ½·5·8² = −160 J → d = 160/19,6 = 8,2 m."],
      ["Un coche de 1200 kg sube una cuesta de 6 % de pendiente (sube 6 m por cada 100 m recorridos) a 72 km/h. Sin rozamientos, ¿qué potencia necesita el motor solo para ganar altura?", "v = 20 m/s; en 1 s recorre 20 m y sube 1,2 m. P = m·g·Δh/t = 1200 · 9,8 · 1,2 = 14 112 W ≈ 14 kW."],
      ["Una central hidráulica tiene un salto de 80 m y un caudal de 50 m³/s. Con un rendimiento del 85 %, ¿qué potencia eléctrica produce?", "Masa por segundo: 50 000 kg/s. P = m·g·h/t · η = 50 000 · 9,8 · 80 · 0,85 = 3,33·10⁷ W ≈ 33 MW."],
      ["Calcula el rendimiento máximo teórico de una máquina térmica que trabaja entre 527 °C y 27 °C. ¿Por qué el real es menor?", "T₁ = 800 K, T₂ = 300 K. ηmáx = 1 − 300/800 = 0,625 = 62,5 %. El real es menor por rozamientos, pérdidas de calor por las paredes y procesos no ideales."],
      ["Un péndulo de 2 m de longitud se separa hasta formar 60° con la vertical y se suelta. ¿Qué velocidad tiene en el punto más bajo?", "Altura inicial: h = L(1 − cos 60°) = 2 · 0,5 = 1 m. v = √(2·9,8·1) = 4,4 m/s."],
      ["Compara el consumo anual de iluminar una habitación 4 h/día con una incandescente de 60 W o un LED de 8 W que da la misma luz. ¿Cuánto se ahorra a 0,15 €/kWh y cuántos kg de CO₂ si cada kWh emite 0,2 kg?", "Incandescente: 0,06 · 4 · 365 = 87,6 kWh. LED: 0,008 · 4 · 365 = 11,7 kWh. Ahorro: 75,9 kWh/año → 11,4 € y 15,2 kg de CO₂."],
      ["Un ascensor de 800 kg (con pasajeros) sube 30 m en 20 s con un motor de rendimiento 70 %. ¿Qué potencia eléctrica consume? ¿Cuántos kWh gasta en 200 viajes?", "Putil = 800 · 9,8 · 30 / 20 = 11 760 W. Pconsumida = 11 760/0,7 = 16 800 W. Cada viaje: 16 800 · 20 = 336 000 J = 0,0933 kWh; 200 viajes: 18,7 kWh."],
      ["Explica con la entropía por qué el frigorífico necesita electricidad para sacar calor de su interior frío y echarlo a la cocina, más caliente.", "Espontáneamente, el calor solo pasa de lo caliente a lo frío (segundo principio). Para llevarlo en sentido contrario hay que aportar trabajo (el del compresor), y el calor cedido a la cocina es mayor que el extraído del interior, de modo que la entropía total del universo aumenta."],
    ],
  },
  quiz: [
    ["La unidad de energía del SI es…", ["el vatio", "el julio", "el newton", "el kWh"], 1, "1 J = 1 N·m."],
    ["1 kWh equivale a…", ["1000 J", "3600 J", "3,6·10⁶ J", "4,18 J"], 2, "1000 W · 3600 s."],
    ["Si la velocidad se duplica, la energía cinética…", ["se duplica", "se cuadruplica", "no cambia", "se reduce"], 1, "Ec ∝ v²."],
    ["La energía potencial gravitatoria es…", ["½mv²", "mgh", "½kx²", "F·d"], 1, "Depende de la altura."],
    ["Un trabajo es negativo cuando la fuerza…", ["es perpendicular al desplazamiento", "se opone al desplazamiento", "es muy grande", "es el peso al caer"], 1, "cos 180° = −1."],
    ["Sostener una mochila quieta supone un trabajo físico…", ["positivo", "negativo", "nulo", "infinito"], 2, "No hay desplazamiento."],
    ["La potencia se mide en…", ["julios", "vatios", "newtons", "kelvin"], 1, "J/s."],
    ["Un horno de 2 kW usado 30 min consume…", ["1 kWh", "2 kWh", "60 kWh", "0,5 kWh"], 0, "2 kW · 0,5 h."],
    ["Sin rozamiento, la energía mecánica…", ["aumenta", "disminuye", "se conserva", "se anula"], 2, "Ec + Ep = constante."],
    ["La velocidad al caer desde una altura h sin rozamiento es…", ["√(gh)", "√(2gh)", "2gh", "mgh"], 1, "De mgh = ½mv²."],
    ["Con rozamiento, la energía mecánica perdida se transforma sobre todo en…", ["masa", "energía térmica", "energía nuclear", "nada"], 1, "Se calientan las superficies."],
    ["El calor es…", ["la temperatura de un cuerpo", "energía transferida por diferencia de temperatura", "un fluido", "la energía cinética"], 1, "Energía en tránsito."],
    ["El calor específico del agua es…", ["muy bajo", "muy alto", "cero", "igual al del hierro"], 1, "4180 J/kg·°C."],
    ["El calor del Sol llega a la Tierra por…", ["conducción", "convección", "radiación", "evaporación"], 2, "Ondas electromagnéticas en el vacío."],
    ["Durante la fusión del hielo, el calor absorbido…", ["sube la temperatura", "separa las partículas", "se pierde", "baja la temperatura"], 1, "Calor latente."],
    ["El rendimiento de un motor de gasolina es aproximadamente…", ["90 %", "25-30 %", "100 %", "5 %"], 1, "El resto se pierde como calor."],
    ["El segundo principio de la termodinámica dice que…", ["la energía se conserva", "es imposible convertir todo el calor en trabajo", "la energía se crea", "el calor va del frío al caliente"], 1, "Siempre hay un foco frío."],
    ["La entropía de un sistema aislado…", ["siempre disminuye", "aumenta o se mantiene", "es cero", "no existe"], 1, "Los procesos tienen sentido."],
    ["Una etiqueta energética A indica…", ["más consumo", "más eficiencia", "más potencia", "más barato"], 1, "De A (mejor) a G."],
    ["El mayor consumo energético de un hogar español es…", ["la iluminación", "la calefacción", "la televisión", "el móvil"], 1, "Más del 40 %."],
  ],
  examen: [
    ["La Ec de 2 kg a 3 m/s es…", ["3 J", "6 J", "9 J", "18 J"], 2, "½·2·9."],
    ["Ep de 10 kg a 2 m (g = 9,8) es…", ["19,6 J", "196 J", "98 J", "20 J"], 1, "10·9,8·2."],
    ["W de 100 N a lo largo de 3 m con α = 90° es…", ["300 J", "0 J", "150 J", "−300 J"], 1, "cos 90° = 0."],
    ["Un motor hace 6000 J en 1 minuto: su potencia es…", ["100 W", "6000 W", "360 kW", "10 W"], 0, "6000/60."],
    ["Calentar 1 kg de agua 10 °C requiere…", ["418 J", "4180 J", "41 800 J", "10 J"], 2, "1·4180·10."],
    ["Un aparato consume 500 J y da 400 J útiles: η es…", ["80 %", "125 %", "20 %", "40 %"], 0, "400/500."],
    ["En una montaña rusa sin rozamiento, en el punto más bajo es máxima la energía…", ["potencial", "cinética", "térmica", "química"], 1, "Ep mínima."],
    ["El «consumo fantasma» es el de…", ["los aparatos en espera", "la calefacción", "el coche", "las bombillas LED"], 0, "Modo standby."],
  ],
  feynman: ["Por qué la energía se conserva pero hay que ahorrarla", "Por qué duplicar la velocidad cuadruplica la energía de un choque", "Por qué sostener un peso no es trabajo físico", "Diferencia entre potencia y energía en la factura de la luz", "Por qué ningún motor tiene rendimiento del 100 %", "Diferencia entre calor y temperatura"],
  mapa: ["ENERGÍA", [["Formas", "cinética, potencial, química…"], ["Trabajo y potencia", "W = F·d·cos α · P = W/t"], ["Conservación", "Em constante, rozamiento"], ["Calor y máquinas", "Q = mcΔT, η, entropía"]]],
  tarjetas: [
    ["Energía", "Capacidad de producir cambios; se mide en julios."],
    ["Energía cinética", "Ec = ½·m·v²."],
    ["Energía potencial", "Ep = m·g·h; elástica ½·k·x²."],
    ["Trabajo", "W = F·Δx·cos α; transfiere energía."],
    ["Potencia", "P = W/t; se mide en vatios."],
    ["kWh", "Energía de 1 kW durante 1 h = 3,6·10⁶ J."],
    ["Conservación de Em", "Sin rozamiento, Ec + Ep = constante."],
    ["Principio de conservación", "La energía no se crea ni se destruye."],
    ["Calor", "Energía transferida por diferencia de temperatura."],
    ["Q = m·c·ΔT", "Calor para cambiar la temperatura."],
    ["Rendimiento", "η = energía útil / consumida · 100."],
    ["Entropía", "Mide la dispersión de la energía; siempre aumenta."],
  ],
  glosario: [
    ["Energía", "Capacidad de un sistema para producir cambios."],
    ["Julio", "Unidad de energía y trabajo del SI (N·m)."],
    ["Energía cinética", "Energía asociada al movimiento."],
    ["Energía potencial", "Energía asociada a la posición o la deformación."],
    ["Energía mecánica", "Suma de las energías cinética y potencial."],
    ["Trabajo", "Energía transferida por una fuerza que desplaza un cuerpo."],
    ["Potencia", "Rapidez con que se transfiere o transforma la energía."],
    ["Vatio", "Unidad de potencia, un julio por segundo."],
    ["Fuerza conservativa", "Fuerza cuyo trabajo no depende del camino, como el peso."],
    ["Calor", "Energía que pasa de un cuerpo caliente a otro frío."],
    ["Calor específico", "Energía para elevar 1 °C un kilogramo de sustancia."],
    ["Calor latente", "Energía por kilogramo para cambiar de estado."],
    ["Equilibrio térmico", "Estado en que dos cuerpos en contacto igualan su temperatura."],
    ["Rendimiento", "Fracción de la energía consumida que se aprovecha."],
    ["Entropía", "Magnitud que mide el desorden o la dispersión de la energía."],
    ["Eficiencia energética", "Obtener el mismo servicio con menos energía."],
  ],
  situacion: {
    titulo: "Auditoría energética de mi casa",
    reto: "Vuestro equipo actuará como auditor energético: analizaréis el consumo de una vivienda real o del instituto, calcularéis su coste y propondréis un plan de ahorro con datos.",
    pasos: [
      "Haced un inventario de los aparatos con su potencia (en la etiqueta) y estimad sus horas de uso diario.",
      "Calculad la energía mensual de cada uno en kWh y su coste, y comparadlo con una factura real.",
      "Medid el consumo fantasma de los aparatos en espera con un enchufe medidor o estimadlo.",
      "Identificad los tres mayores consumos y proponed medidas de ahorro con el ahorro en kWh, euros y CO₂.",
      "Calculad el periodo de amortización de una mejora (por ejemplo, cambiar a LED o a un frigorífico A).",
    ],
    producto: "Un informe de auditoría con tablas, gráficos y un plan de ahorro priorizado para la familia o el centro.",
    evaluacion: ["El inventario y los cálculos de energía y coste son correctos.", "Se distinguen bien potencia y energía.", "Las medidas propuestas están cuantificadas y son realistas.", "El informe es claro y útil para quien lo recibe."],
  },
  familias: [
    "Revisad juntos la factura de la luz: buscad los kWh consumidos, la potencia contratada y el precio.",
    "Leed las etiquetas energéticas de los electrodomésticos de casa.",
    "Apagad durante una semana los aparatos en espera y comparad el contador.",
    "Medid cuánto tarda en hervir el agua con tapa y sin tapa en la misma cazuela.",
  ],
  saberes: "bloque «B. Un universo de materia y energía»: la energía, sus formas, transformaciones, conservación y degradación; trabajo y potencia; conservación de la energía mecánica y efecto del rozamiento; calor y temperatura, calor específico y latente y formas de propagación; máquinas, rendimiento y segundo principio de la termodinámica; eficiencia y ahorro energético en la vida cotidiana.",
  ideas: [
    "Medida de la energía cinética de un carrito con sensores o vídeo y comparación con la potencial perdida en una rampa.",
    "Cálculo de la potencia desarrollada al subir las escaleras del instituto cronometrando a cada alumno.",
    "Práctica de calorimetría: calor específico de un metal con un calorímetro casero.",
    "Auditoría energética del aula con enchufes medidores.",
  ],
  fuentes: [
    { t: "IDAE: Guía práctica de la energía. Consumo eficiente y responsable", url: "https://www.idae.es/" },
    { t: "Unión Europea: etiquetado energético de los productos", url: "https://energy-efficient-products.ec.europa.eu/" },
  ],
});
