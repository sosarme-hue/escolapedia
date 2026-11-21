// Física 2º Bachillerato · La inducción electromagnética (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU } = require("./_bach2-fis");

const flechaDef = (id, c) => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${c}"/></marker></defs>`;
const entra = (x, y) => `<circle cx="${x}" cy="${y}" r="5" fill="none" stroke="var(--muted)" stroke-width="1.2"/><path d="M${x - 3.5} ${y - 3.5} L ${x + 3.5} ${y + 3.5} M${x + 3.5} ${y - 3.5} L ${x - 3.5} ${y + 3.5}" stroke="var(--muted)" stroke-width="1.2"/>`;

// Imán que se acerca a una espira.
const faradaySVG = marco("Experiencia de Faraday: al acercar un imán a una bobina conectada a un galvanómetro, aparece una corriente que solo existe mientras el imán se mueve", `
  ${flechaDef("fy", "var(--red)")}
  <rect x="20" y="74" width="40" height="24" fill="var(--red)"/>${T(40, 91, "N", { fs: 14, b: true, c: "#fff" })}
  <rect x="60" y="74" width="40" height="24" fill="var(--pen)"/>${T(80, 91, "S", { fs: 14, b: true, c: "#fff" })}
  <path d="M40 60 H 90" stroke="var(--red)" stroke-width="2.5" marker-end="url(#fy)"/>${T(64, 52, "se mueve", { fs: 10, b: true, c: "var(--red)" })}
  ${[124, 138, 152, 166, 180].map((x) => `<ellipse cx="${x}" cy="86" rx="7" ry="28" fill="none" stroke="#b45309" stroke-width="2.5"/>`).join("")}
  <path d="M124 114 V 150 H 210 M180 114 V 130 H 230 V 150" fill="none" stroke="var(--ink)" stroke-width="1.6"/>
  <circle cx="220" cy="150" r="16" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${T(220, 155, "G", { fs: 13, b: true })}
  <path d="M220 150 L 230 140" stroke="var(--red)" stroke-width="2"/>
  ${T(130, 30, "ΔΦ ≠ 0 → corriente inducida", { fs: 12, b: true })}`);

// Varilla deslizante.
const varillaSVG = marco("Varilla que se desliza sobre raíles dentro de un campo magnético: el área del circuito cambia y se induce una fuerza electromotriz ε = B·L·v", `
  ${flechaDef("vr", "var(--leaf)")}
  ${[40, 80, 120, 160, 200].map((x) => [56, 92, 128].map((y) => entra(x, y)).join("")).join("")}
  <path d="M24 36 H 236 M24 148 H 236" stroke="var(--ink)" stroke-width="3"/>
  <path d="M24 36 V 148" stroke="var(--ink)" stroke-width="3"/>
  <rect x="172" y="32" width="8" height="120" fill="#b45309"/>
  <path d="M184 92 H 228" stroke="var(--leaf)" stroke-width="3" marker-end="url(#vr)"/>${T(222, 82, "v", { fs: 13, b: true, c: "var(--leaf)" })}
  ${T(162, 96, "L", { fs: 13, b: true, a: "end", c: "#b45309" })}
  ${T(130, 172, "ε = B · L · v", { fs: 13, b: true })}`);

// FEM alterna.
const alternaSVG = graf("Fuerza electromotriz de un alternador: una sinusoide de amplitud N·B·S·ω", "t", "ε", [
  { p: Array.from({ length: 41 }, (_, i) => [i / 40, 0.5 + 0.42 * Math.sin((i / 40) * 4 * Math.PI)]), c: "var(--red)", t: "" },
  { p: [[0, 0.5], [1, 0.5]], c: "var(--muted)", t: "", dash: true },
], `<text x="70" y="30" font-size="11" fill="var(--red)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">ε₀ = NBSω</text>`);

// Transformador.
const trafoSVG = marco("Transformador: dos bobinas sobre un núcleo de hierro; la tensión se multiplica por el cociente de espiras", `
  <rect x="70" y="30" width="120" height="120" rx="6" fill="none" stroke="var(--muted)" stroke-width="16"/>
  ${[50, 62, 74, 86, 98, 110, 122].map((y) => `<path d="M58 ${y} h 24" stroke="#b45309" stroke-width="3"/>`).join("")}
  ${[60, 80, 100, 120].map((y) => `<path d="M178 ${y} h 24" stroke="var(--pen)" stroke-width="3"/>`).join("")}
  ${T(44, 92, "N₁", { fs: 13, b: true, c: "#b45309", a: "end" })}${T(214, 92, "N₂", { fs: 13, b: true, c: "var(--pen)", a: "start" })}
  ${T(36, 160, "V₁", { fs: 12, b: true, c: "#b45309" })}${T(224, 160, "V₂", { fs: 12, b: true, c: "var(--pen)" })}
  ${T(130, 176, "V₂ / V₁ = N₂ / N₁", { fs: 12, b: true })}`);

module.exports = {
  materia: "Física",
  curso: "2-bachillerato",
  titulo: "La inducción electromagnética",
  minutos: 115,
  objetivos: [
    "Describir las experiencias de Faraday y Henry y el concepto de flujo magnético",
    "Aplicar la ley de Faraday y la ley de Lenz para calcular la fuerza electromotriz inducida y su sentido",
    "Calcular la fuerza electromotriz de movimiento en conductores que se desplazan en un campo magnético",
    "Explicar el funcionamiento del alternador y obtener la expresión de la corriente alterna",
    "Explicar el transformador y su papel en el transporte de la energía eléctrica",
    "Valorar la síntesis electromagnética de Maxwell y las aplicaciones de la inducción",
  ],
  claves: ["inducción electromagnética", "flujo magnético", "weber", "fuerza electromotriz", "ley de Faraday", "ley de Lenz", "corriente inducida", "fem de movimiento", "corrientes de Foucault", "alternador", "corriente alterna", "valor eficaz", "autoinducción", "transformador", "ecuaciones de Maxwell"],
  pregunta: {
    texto: "¿Cómo puede una placa de inducción calentar una sartén sin calentarse ella misma?",
    respuesta: "Bajo el cristal hay una bobina con una corriente alterna que crea un <mark>campo magnético variable</mark>. Ese campo induce corrientes eléctricas dentro del fondo metálico de la sartén (corrientes de Foucault), y son esas corrientes las que lo calientan por efecto Joule. El cristal no es conductor y no se induce nada en él; solo se templa por contacto con la sartén caliente.",
  },
  lectura: {
    titulo: "Diez años buscando una corriente",
    html: `<p>Tras el descubrimiento de Ørsted en 1820, muchos científicos se hicieron la pregunta inversa: si una corriente crea un campo magnético, ¿un campo magnético podrá crear una corriente? Michael Faraday, hijo de un herrero y aprendiz de encuadernador que se había formado leyendo los libros que encuadernaba, lo intentó durante años sin éxito. Colocaba imanes potentes junto a bobinas y no ocurría nada.</p><p>El 29 de agosto de 1831 enrolló dos bobinas en un anillo de hierro. Al conectar la primera a una pila, la aguja del galvanómetro unido a la segunda dio un salto… y volvió a cero. Al desconectar, saltó en sentido contrario. Faraday comprendió que la clave no era el campo, sino su <b>cambio</b>. Semanas después, generó corriente moviendo un imán dentro de una bobina y construyó la primera dinamo con un disco de cobre que giraba entre los polos de un imán. Cuentan que un político le preguntó para qué servía aquello, y Faraday respondió: «Algún día, señor, podrá ponerle impuestos». Hoy casi toda la electricidad del mundo se produce con su descubrimiento.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 Las experiencias de Faraday y Henry", p: [
      "En 1831, Michael Faraday en Inglaterra y Joseph Henry en Estados Unidos descubrieron de forma independiente la <mark>inducción electromagnética</mark>: la aparición de una corriente eléctrica en un circuito cerrado cuando cambia el campo magnético que lo atraviesa. Sus experiencias se pueden reproducir con una bobina, un imán y un galvanómetro: al acercar el imán, la aguja se desvía; al dejarlo quieto, vuelve a cero; al alejarlo, se desvía en sentido contrario; y cuanto más rápido se mueve, mayor es la corriente.",
      "Lo mismo ocurre si movemos la bobina en lugar del imán, si cambiamos la corriente de otra bobina cercana (al conectarla o desconectarla) o si giramos la bobina dentro de un campo fijo. En todos los casos la conclusión es la misma: la corriente inducida aparece <b>solo mientras algo cambia</b>, y lo que cambia en todos ellos es el número de líneas de campo magnético que atraviesan el circuito, es decir, el <b>flujo magnético</b>. Un campo magnético constante, por intenso que sea, no induce nada en un circuito quieto.",
    ], svg: faradaySVG }),
    bloque({ h: "1.2 El flujo magnético", p: [
      "El <mark>flujo magnético</mark> Φ a través de una superficie mide el número de líneas de campo magnético que la atraviesan. Para un campo uniforme y una superficie plana de área S: <b>Φ = B · S = B · S · cos θ</b>, donde θ es el ángulo entre el campo y el <b>vector superficie</b>, perpendicular a ella. Su unidad es el <b>weber</b> (Wb = T·m²). Para una bobina de N espiras, el flujo total es N veces el de una espira.",
      "Según la fórmula, hay tres formas de hacer variar el flujo: cambiar el <b>campo</b> B (acercando un imán o variando una corriente), cambiar el <b>área</b> S del circuito (con una varilla que se desliza o una espira que se deforma) o cambiar el <b>ángulo</b> θ (girando la espira, como en un alternador). Recuerda que, como las líneas de campo magnético son cerradas, el flujo a través de cualquier superficie cerrada es cero (teorema de Gauss magnético); pero el flujo a través de una superficie abierta, como la que limita una espira, puede tener cualquier valor.",
    ], extra: formula("Φ = B · S · cos θ ; Wb = T · m²"), svg: rejilla("Tres formas de cambiar el flujo", ["Cambia", "Ejemplo"], [["B", "acercar un imán"], ["S", "varilla deslizante"], ["θ", "espira que gira"], ["I (otra bobina)", "transformador"]], "var(--pen)") }),
    bloque({ h: "1.3 La ley de Faraday", p: [
      "Faraday cuantificó sus experiencias: la <mark>fuerza electromotriz</mark> (fem) inducida en un circuito es igual a la rapidez con que varía el flujo magnético que lo atraviesa, cambiada de signo: <b>ε = −dΦ / dt</b>. Para una bobina de N espiras, <b>ε = −N · dΦ / dt</b>. Si la variación es uniforme, se puede usar el valor medio: ε = −N · ΔΦ / Δt. La fem se mide en voltios y, si el circuito tiene una resistencia R, la intensidad inducida es I = ε / R.",
      "La fuerza electromotriz no es una fuerza, sino la energía por unidad de carga que se comunica al circuito, como la de una pila. Lo importante de la ley de Faraday es que la fem depende de la <b>rapidez</b> del cambio, no del valor del flujo: un flujo enorme pero constante no induce nada, mientras que uno pequeño que cambia muy deprisa puede inducir una fem considerable. Por eso las dinamos de bicicleta dan más luz cuanto más rápido pedaleas y las chispas de los antiguos encendidos de coche se producían al cortar bruscamente la corriente de una bobina.",
    ], extra: formula("ε = −N · dΦ / dt ; I = ε / R"), svg: ficha("Ley de Faraday", "ε = −N · dΦ/dt", ["solo si Φ cambia", "más rápido, más fem", "I = ε / R", "se mide en voltios"], "var(--red)"), video: V("ind-b", "Inducción electromagnética: Faraday y Lenz", "inducción electromagnética Faraday Lenz") }),
    bloque({ h: "1.4 La ley de Lenz", p: [
      "El signo menos de la ley de Faraday tiene un significado físico preciso que enunció Heinrich Lenz en 1834: <mark>el sentido de la corriente inducida es tal que se opone a la variación de flujo que la produce</mark>. Si acercamos el polo norte de un imán a una espira, el flujo hacia dentro aumenta; la corriente inducida crea un campo que se opone, es decir, la espira presenta su cara norte al imán y lo repele. Si lo alejamos, el flujo disminuye y la corriente crea un campo que intenta mantenerlo: la espira atrae al imán.",
      "La ley de Lenz es una consecuencia de la <b>conservación de la energía</b>. Si la corriente inducida favoreciera el cambio, el imán sería atraído, se aceleraría, induciría más corriente y obtendríamos energía de la nada. En cambio, hay que hacer trabajo contra la fuerza que aparece para mantener el movimiento, y ese trabajo se transforma en energía eléctrica. El procedimiento para aplicarla: averiguar si el flujo aumenta o disminuye; deducir el sentido del campo inducido (opuesto si aumenta, igual si disminuye); y obtener el sentido de la corriente con la regla de la mano derecha.",
    ], svg: pasos("Aplicar la ley de Lenz", ["¿Φ aumenta o disminuye?", "B inducido se opone al cambio", "Mano derecha: sentido de I", "Comprobar: se opone al movimiento"], "var(--leaf)"), video: V("ind-a", "Ley de Faraday y ley de Lenz explicadas", "ley de Faraday ley de Lenz") }),
    bloque({ h: "1.5 La fuerza electromotriz de movimiento", p: [
      "Un caso muy habitual en la PAU es el de una <b>varilla conductora</b> de longitud L que se desliza con velocidad v sobre dos raíles paralelos dentro de un campo uniforme B perpendicular al plano. El área del circuito aumenta a razón de L·v por segundo, así que el flujo cambia a razón dΦ/dt = B·L·v y la fem inducida es <mark>ε = B · L · v</mark>. Si el circuito tiene resistencia R, circula I = BLv/R.",
      "Esta fem también se puede explicar con la fuerza de Lorentz: los electrones de la varilla se mueven con ella dentro del campo y sufren una fuerza q·v·B a lo largo de la varilla, que los acumula en un extremo. Además, la corriente que circula por la varilla dentro del campo sufre una fuerza F = I·L·B que, por la ley de Lenz, <b>frena</b> la varilla. Para mantenerla a velocidad constante hay que empujarla con una fuerza igual, y la potencia mecánica F·v coincide exactamente con la potencia eléctrica ε·I = I²·R que se disipa: la energía se conserva.",
    ], extra: formula("ε = B · L · v ; F<sub>freno</sub> = I · L · B ; P = F · v = ε · I"), svg: varillaSVG }),
    bloque({ h: "1.6 Las corrientes de Foucault", p: [
      "Cuando un bloque de metal se mueve en un campo magnético, o está en un campo variable, se inducen corrientes en remolino dentro de él: son las <mark>corrientes de Foucault</mark> o parásitas. Por la ley de Lenz, se oponen a la causa que las produce: frenan el movimiento y disipan energía en forma de calor. Puedes comprobarlo dejando caer un imán de neodimio por un tubo de cobre: cae lentísimo, como si flotara en miel, aunque el cobre no es magnético.",
      "Estas corrientes se aprovechan en los <b>frenos electromagnéticos</b> de trenes, camiones y atracciones de caída libre, que frenan sin contacto ni desgaste; en las <b>cocinas de inducción</b>; en los <b>detectores de metales</b> de aeropuertos y playas; y en los hornos de inducción que funden metales. Pero en motores y transformadores son una pérdida de energía no deseada: por eso sus núcleos no son de hierro macizo, sino de finas <b>láminas</b> aisladas entre sí, que cortan el camino de las corrientes y reducen el calentamiento.",
    ], svg: rejilla("Corrientes de Foucault", ["Útiles", "Perjudiciales"], [["frenos magnéticos", "pérdidas en motores"], ["cocina de inducción", "calentamiento de"], ["detector de metales", "transformadores"], ["horno de inducción", "→ núcleo laminado"]], "var(--red)") }),
    bloque({ h: "2.1 El alternador: producción de corriente alterna", p: [
      "Un <mark>alternador</mark> es una bobina de N espiras de área S que gira con velocidad angular constante ω dentro de un campo magnético uniforme B (o un imán que gira dentro de bobinas fijas). El ángulo entre el campo y el vector superficie cambia con el tiempo: θ = ω·t, y el flujo es <b>Φ = N · B · S · cos(ω·t)</b>. Aplicando la ley de Faraday: <b>ε = N · B · S · ω · sen(ω·t)</b>.",
      "La fem es <b>sinusoidal</b>: cambia de sentido periódicamente y por eso se llama <b>corriente alterna</b>. Su valor máximo es <b>ε₀ = N·B·S·ω</b>, y su frecuencia es la del giro: f = ω/2π. En Europa, la red funciona a 50 Hz; en América, a 60 Hz. Prácticamente toda la electricidad del mundo se produce así: en las centrales térmicas, nucleares, hidráulicas, eólicas y solares termoeléctricas, una turbina hace girar un alternador. La única gran excepción son los paneles fotovoltaicos, que producen corriente continua por efecto fotoeléctrico y necesitan un inversor para convertirla en alterna.",
    ], extra: formula("Φ = N·B·S·cos ωt ; ε = N·B·S·ω·sen ωt ; ε₀ = N·B·S·ω"), svg: alternaSVG, video: V("ind-c", "El alternador explicado", "alternador explicado") }),
    bloque({ h: "2.2 Corriente alterna y valores eficaces", p: [
      "Si un alternador alimenta una resistencia R, la intensidad también es sinusoidal: I = I₀ · sen(ω·t), con I₀ = ε₀/R. Como la corriente cambia constantemente, ¿qué significa decir que la red doméstica es de 230 V? Se usan los <mark>valores eficaces</mark>: la tensión eficaz es la de una corriente continua que produciría el mismo calor en la misma resistencia. Para una sinusoide, <b>V<sub>ef</sub> = V₀ / √2</b> e <b>I<sub>ef</sub> = I₀ / √2</b>.",
      "Así, los 230 V de un enchufe son eficaces: la tensión real oscila entre +325 V y −325 V cincuenta veces por segundo. La potencia media en una resistencia es P = V<sub>ef</sub> · I<sub>ef</sub>. La corriente alterna se impuso a la continua a finales del siglo XIX, en la llamada «guerra de las corrientes» entre Edison (continua) y Tesla y Westinghouse (alterna), por una razón decisiva: la alterna se puede elevar y reducir fácilmente con transformadores, lo que permite transportarla a grandes distancias con pocas pérdidas.",
    ], extra: formula("V<sub>ef</sub> = V₀ / √2 ; I<sub>ef</sub> = I₀ / √2 ; P = V<sub>ef</sub> · I<sub>ef</sub>"), svg: ficha("Corriente alterna en casa", "230 V eficaces", ["V₀ = 230·√2 = 325 V", "f = 50 Hz", "T = 0,02 s", "P = Vef · Ief"], "var(--pen)") }),
    bloque({ h: "2.3 La autoinducción", p: [
      "Una bobina por la que circula una corriente variable crea un campo magnético variable que atraviesa sus propias espiras: se induce en ella misma una fem que se opone al cambio de corriente. Es la <mark>autoinducción</mark>. La fem autoinducida es <b>ε = −L · dI/dt</b>, donde L es el <b>coeficiente de autoinducción</b> o inductancia, que se mide en henrios (H) y depende de la geometría de la bobina: para un solenoide, L = μ₀·N²·S / l.",
      "Las bobinas se comportan como una «inercia eléctrica»: se resisten a que la corriente cambie. Al conectar un circuito con una bobina, la corriente tarda un tiempo en alcanzar su valor final; al desconectarlo bruscamente, la fem autoinducida puede ser enorme y producir una chispa en el interruptor. Este efecto se usa en las bobinas de encendido de los motores de gasolina, que generan miles de voltios para la bujía, y en los filtros de los circuitos electrónicos. Cuando el campo de una bobina induce fem en otra cercana se habla de <b>inducción mutua</b>, el fundamento del transformador y de la carga inalámbrica de los móviles.",
    ], extra: formula("ε = −L · dI/dt ; solenoide: L = μ₀ · N² · S / l"), svg: compara("Inducción en bobinas", ["Autoinducción", ["una bobina", "se opone a ΔI", "ε = −L dI/dt", "henrio (H)"]], ["Inducción mutua", ["dos bobinas", "una induce a otra", "transformador", "carga inalámbrica"]], "var(--pen)", "var(--leaf)") }),
    bloque({ h: "2.4 El transformador", p: [
      "Un <mark>transformador</mark> consta de dos bobinas, el <b>primario</b> (N₁ espiras) y el <b>secundario</b> (N₂ espiras), enrolladas sobre un mismo núcleo de hierro laminado. La corriente alterna del primario crea un flujo variable que el núcleo conduce hasta el secundario, donde induce una fem. Como el flujo por espira es el mismo en ambas bobinas, las tensiones son proporcionales al número de espiras: <b>V₂ / V₁ = N₂ / N₁</b>.",
      "Si N₂ &gt; N₁, el transformador es <b>elevador</b>; si N₂ &lt; N₁, es <b>reductor</b>, como el de un cargador de móvil, que pasa de 230 V a 5 V. En un transformador ideal no hay pérdidas de energía, así que la potencia se conserva: V₁·I₁ = V₂·I₂. Por tanto, lo que se gana en tensión se pierde en intensidad: <b>I₂ / I₁ = N₁ / N₂</b>. Los transformadores reales tienen rendimientos del 95 al 99 %. Importante: un transformador <b>solo funciona con corriente alterna</b>; con continua el flujo no cambia y no se induce nada en el secundario.",
    ], extra: formula("V₂ / V₁ = N₂ / N₁ ; V₁ · I₁ = V₂ · I₂"), svg: trafoSVG, video: V("ind-d", "Transformadores eléctricos explicados", "transformador cómo funciona") }),
    bloque({ h: "2.5 Producción y transporte de la energía eléctrica", p: [
      "En una central, el alternador genera corriente a unos 10.000-25.000 V. Un transformador elevador la sube a 220.000 o 400.000 V para el <mark>transporte</mark> por las líneas de alta tensión. ¿Por qué? Porque las pérdidas por efecto Joule en los cables son P<sub>pérdidas</sub> = I²·R: para transportar una potencia P = V·I, si multiplicamos la tensión por 20, la intensidad se divide por 20 y las pérdidas se dividen por 400.",
      "Cerca de las ciudades, las subestaciones reducen la tensión a media tensión (unos 20.000 V) y, finalmente, los transformadores de barrio la bajan a los 400/230 V de nuestros hogares. Todo el sistema eléctrico está sincronizado a 50 Hz y la producción debe igualar al consumo en cada instante. La integración de las renovables, la eólica (que usa alternadores) y la fotovoltaica (que usa inversores), está cambiando la red: se instalan baterías, centrales de bombeo y líneas de corriente continua de alta tensión para enlaces muy largos o submarinos, como el que une la Península con Baleares.",
    ], extra: formula("P<sub>pérdidas</sub> = I² · R = (P / V)² · R"), svg: pasos("Del alternador al enchufe", ["Central: 20 kV", "Elevador: 400 kV", "Transporte: pocas pérdidas", "Subestación: 20 kV", "Barrio: 230 V"], "#b45309") }),
    bloque({ h: "3.1 La síntesis de Maxwell", p: [
      "Entre 1861 y 1865, James Clerk Maxwell reunió todo lo que se sabía de electricidad y magnetismo en cuatro ecuaciones: el teorema de Gauss eléctrico (las cargas crean campos eléctricos), el teorema de Gauss magnético (no hay monopolos), la ley de Faraday (un campo magnético variable crea un campo eléctrico) y la ley de Ampère, a la que añadió un término genial: <mark>un campo eléctrico variable también crea un campo magnético</mark>. Con ese añadido, las ecuaciones quedaron simétricas.",
      "La consecuencia fue asombrosa. Un campo eléctrico variable crea un campo magnético variable, que a su vez crea un campo eléctrico variable, y así sucesivamente: los campos pueden propagarse por el espacio vacío como una <b>onda electromagnética</b>. Maxwell calculó su velocidad, c = 1/√(ε₀·μ₀) = 3 · 10⁸ m/s, y vio que coincidía con la velocidad de la luz: la luz es una onda electromagnética. Hertz produjo y detectó estas ondas en 1888, y en pocos años llegaron la radio, la televisión y, hoy, el wifi y el 5G. Lo estudiarás en el tema de la luz.",
    ], extra: formula("c = 1 / √(ε₀ · μ₀) = 3 · 10⁸ m/s"), svg: rejilla("Las ecuaciones de Maxwell (en palabras)", ["Ley", "Idea"], [["Gauss eléctrico", "cargas crean E"], ["Gauss magnético", "no hay monopolos"], ["Faraday", "B variable crea E"], ["Ampère-Maxwell", "I y E variable crean B"]], "var(--pen)") }),
  ],
  figura: figura("La inducción electromagnética", "Flujo, leyes de Faraday y Lenz, alternador y transformador", [["Flujo", "Φ = B·S·cos θ", "weber"], ["Faraday", "ε = −N dΦ/dt", "Lenz: se opone"], ["Alternador", "ε = NBSω sen ωt", "50 Hz"], ["Transformador", "V₂/V₁ = N₂/N₁", "solo alterna"]], "#b45309"),
  video: V("ind-b", "Inducción electromagnética: Faraday y Lenz", "inducción electromagnética Faraday Lenz"),
  ejemplos: [
    { enunciado: "Una bobina de 200 espiras de 10 cm² está en un campo perpendicular que pasa de 0,1 T a 0,5 T en 0,2 s. Calcula la fem media inducida y la intensidad si R = 8 Ω.", pasos: ["ΔΦ por espira = ΔB · S = 0,4 · 10⁻³ = 4·10⁻⁴ Wb.", "ε = −N · ΔΦ / Δt = −200 · 4·10⁻⁴ / 0,2 = −0,4 V.", "I = |ε| / R = 0,4 / 8."], resultado: "|ε| = 0,4 V; I = 0,05 A." },
    { enunciado: "Un campo magnético varía según B = 0,02 t² (T) y atraviesa perpendicularmente una espira de 50 cm². Calcula la fem en t = 3 s.", pasos: ["Φ = B · S = 0,02 t² · 5·10⁻³ = 10⁻⁴ t².", "ε = −dΦ/dt = −2·10⁻⁴ t.", "En t = 3 s: ε = −6·10⁻⁴ V."], resultado: "|ε| = 6 · 10⁻⁴ V = 0,6 mV." },
    { enunciado: "Una varilla de 40 cm se mueve a 5 m/s sobre raíles en un campo de 0,5 T perpendicular. El circuito tiene 2 Ω. Calcula la fem, la intensidad y la fuerza para mantener la velocidad.", pasos: ["ε = B·L·v = 0,5 · 0,4 · 5 = 1 V.", "I = ε/R = 0,5 A.", "F = I·L·B = 0,5 · 0,4 · 0,5 = 0,1 N."], resultado: "ε = 1 V; I = 0,5 A; F = 0,1 N (potencia 0,5 W = I²R)." },
    { enunciado: "Un alternador tiene una bobina de 100 espiras de 200 cm² que gira a 3000 rpm en un campo de 0,2 T. Escribe la fem y calcula su valor eficaz.", pasos: ["ω = 3000 · 2π / 60 = 314 rad/s (f = 50 Hz).", "ε₀ = N·B·S·ω = 100 · 0,2 · 0,02 · 314 = 126 V.", "ε = 126 sen(314 t) V; ε<sub>ef</sub> = 126/√2."], resultado: "ε = 126 · sen(314 t) V; ε<sub>ef</sub> ≈ 89 V." },
    { enunciado: "Un transformador tiene 2000 espiras en el primario conectado a 230 V. ¿Cuántas espiras necesita el secundario para dar 12 V? Si el secundario da 2 A, ¿qué intensidad circula por el primario?", pasos: ["N₂ = N₁ · V₂ / V₁ = 2000 · 12 / 230 = 104 espiras.", "Potencia: V₂·I₂ = 12 · 2 = 24 W.", "I₁ = 24 / 230."], resultado: "N₂ ≈ 104 espiras; I₁ ≈ 0,10 A." },
    { enunciado: "Se transportan 100 MW por una línea de 10 Ω de resistencia. Compara las pérdidas a 20 kV y a 400 kV.", pasos: ["A 20 kV: I = 10⁸ / 2·10⁴ = 5000 A; P = 5000² · 10 = 2,5·10⁸ W (¡más que lo transportado!).", "A 400 kV: I = 250 A; P = 250² · 10 = 6,25·10⁵ W.", "Porcentaje a 400 kV: 0,625 %."], resultado: "A 20 kV el transporte es imposible; a 400 kV se pierde solo el 0,6 %." },
  ],
  errores: [
    "Creer que un campo magnético intenso pero constante induce corriente: solo induce si el flujo cambia.",
    "Olvidar multiplicar por el número de espiras N.",
    "Usar el ángulo entre B y el plano de la espira en lugar del ángulo con el vector superficie (perpendicular).",
    "Aplicar mal la ley de Lenz: la corriente inducida se opone al cambio de flujo, no al flujo.",
    "Pensar que un transformador funciona con corriente continua.",
    "Confundir el valor máximo y el eficaz de una tensión alterna (325 V y 230 V).",
  ],
  ejercicios: [
    B("Define flujo magnético y su unidad.", "Φ = B·S·cos θ, número de líneas que atraviesan una superficie; weber (T·m²)."),
    B("Calcula el flujo de un campo de 0,4 T a través de una espira de 50 cm² si el campo forma 60° con el vector superficie.", "Φ = 0,4 · 5·10⁻³ · cos 60° = 10⁻³ Wb."),
    B("Enuncia la ley de Faraday y la de Lenz.", "ε = −dΦ/dt; la corriente inducida se opone a la variación de flujo que la produce."),
    B("Indica tres formas de inducir corriente en una espira.", "Variar B, variar el área o girar la espira."),
    B("¿Se induce corriente en una espira quieta junto a un imán quieto? ¿Y si gira la espira?", "No; sí, porque cambia el ángulo y por tanto el flujo."),
    B("Calcula la fem inducida en una varilla de 1 m que se mueve a 10 m/s perpendicular a un campo de 0,05 T.", "ε = 0,05 · 1 · 10 = 0,5 V."),
    B("¿Por qué cae lento un imán por un tubo de cobre?", "Induce corrientes de Foucault en el tubo que, por la ley de Lenz, frenan su caída."),
    B("¿Por qué los núcleos de los transformadores están laminados?", "Para reducir las corrientes de Foucault y las pérdidas de energía."),
    B("La tensión máxima de una red es 325 V. ¿Cuál es la eficaz?", "V<sub>ef</sub> = 325/√2 = 230 V."),
    B("Un transformador tiene 500 espiras en el primario y 25 en el secundario. Si entran 230 V, ¿cuánto sale?", "V₂ = 230 · 25/500 = 11,5 V."),
    B("¿Por qué se transporta la electricidad a alta tensión?", "Para reducir la intensidad y, con ella, las pérdidas por efecto Joule (I²R)."),
    B("¿Qué añadió Maxwell a la ley de Ampère y qué consecuencia tuvo?", "Que un campo eléctrico variable crea campo magnético; predijo las ondas electromagnéticas."),
    M("Una espira circular de 10 cm de radio está en un campo perpendicular que disminuye de 0,8 T a 0 en 0,04 s. Calcula la fem y la intensidad si R = 0,5 Ω.", "ΔΦ = 0,8 · π · 0,01 = 0,0251 Wb. ε = 0,628 V. I = 1,26 A."),
    M("Una bobina de 50 espiras de 4 cm² gira 90° en 0,01 s pasando de estar perpendicular a un campo de 0,6 T a estar paralela. Calcula la fem media.", "ΔΦ = N·B·S = 50 · 0,6 · 4·10⁻⁴ = 0,012 Wb. ε = 1,2 V."),
    M("El flujo que atraviesa una bobina es Φ = 0,05 cos(100π t) Wb. Calcula la fem máxima y su frecuencia.", "ε = 0,05 · 100π · sen(100πt) → ε₀ = 15,7 V; f = 50 Hz."),
    M("Un campo B = 0,5 sen(20t) T atraviesa una bobina de 100 espiras de 20 cm². Escribe la fem inducida.", "ε = −N S dB/dt = −100 · 2·10⁻³ · 0,5 · 20 cos(20t) = −2 cos(20t) V."),
    M("Una varilla de 30 cm y 0,2 Ω se mueve sobre raíles sin resistencia en un campo de 0,8 T. ¿A qué velocidad se induce 1 A?", "ε = I·R = 0,2 V → v = ε/(B·L) = 0,2/0,24 = 0,83 m/s."),
    M("Un avión con 40 m de envergadura vuela horizontalmente a 250 m/s donde la componente vertical del campo terrestre es 4 · 10⁻⁵ T. ¿Qué fem se induce entre los extremos de las alas?", "ε = B·L·v = 4·10⁻⁵ · 40 · 250 = 0,4 V."),
    M("Un alternador de 500 espiras de 100 cm² en un campo de 0,1 T debe dar una fem máxima de 157 V. ¿A cuántas revoluciones por minuto debe girar?", "ω = 157 / (500 · 0,1 · 0,01) = 314 rad/s → 3000 rpm."),
    M("Un cargador de móvil reduce 230 V a 5 V y entrega 2 A. Si el primario tiene 1150 espiras, calcula las del secundario y la intensidad en el primario (ideal).", "N₂ = 1150 · 5/230 = 25. I₁ = 10 W / 230 V = 0,043 A."),
    M("Calcula la autoinducción de un solenoide de 1000 espiras, 20 cm de largo y 10 cm² de sección.", "L = 4π·10⁻⁷ · 10⁶ · 10⁻³ / 0,2 = 6,3·10⁻³ H."),
    M("Por una bobina de 0,2 H, la corriente pasa de 3 A a 0 en 2 ms. ¿Qué fem se autoinduce?", "ε = L·ΔI/Δt = 0,2 · 3 / 0,002 = 300 V."),
    A("(Tipo PAU) Una espira cuadrada de 10 cm de lado y 0,1 Ω entra a 2 m/s en una región de campo uniforme de 0,5 T perpendicular a ella. a) Fem e intensidad mientras entra. b) Sentido de la corriente. c) ¿Y cuando está totalmente dentro?", "a) ε = B·L·v = 0,5 · 0,1 · 2 = 0,1 V; I = 1 A. b) El flujo entrante aumenta: la corriente crea un campo saliente, sentido antihorario visto con B entrante. c) El flujo no cambia: ε = 0, I = 0."),
    A("Una varilla de masa m y longitud L cae verticalmente deslizando sobre dos raíles verticales unidos por una resistencia R, en un campo horizontal B perpendicular. Calcula su velocidad límite.", "Cuando el peso iguala la fuerza de frenado: mg = I·L·B = B²L²v/R → v<sub>lím</sub> = mgR/(B²L²)."),
    A("Una espira de 20 cm² gira a 50 vueltas por segundo en un campo de 0,3 T. Calcula la fem máxima y el flujo y la fem cuando el plano de la espira forma 30° con el campo.", "ω = 314 rad/s; ε₀ = 0,3 · 2·10⁻³ · 314 = 0,188 V. Si el plano forma 30° con B, el vector superficie forma 60°: Φ = 0,3 · 2·10⁻³ · cos 60° = 3·10⁻⁴ Wb; |ε| = ε₀ · sen 60° = 0,163 V."),
    A("Un transformador ideal con N₁ = 200 y N₂ = 4000 se conecta a 230 V y alimenta una resistencia de 10 kΩ. Calcula V₂, I₂, I₁ y la potencia.", "V₂ = 4600 V; I₂ = 0,46 A; P = 2116 W; I₁ = 2116/230 = 9,2 A."),
    A("Explica con la ley de Lenz por qué un imán que se suelta sobre una espira superconductora puede quedar levitando.", "Al acercarse, la corriente inducida crea un campo que repele al imán; en un superconductor no hay resistencia y la corriente persiste: la repulsión equilibra el peso."),
    A("Una central produce 500 MW que se transportan por una línea de 5 Ω. ¿Qué tensión mínima se necesita para que las pérdidas no superen el 1 %?", "P<sub>pérd</sub> = (P/V)² R ≤ 5·10⁶ W → (5·10⁸/V)² · 5 ≤ 5·10⁶ → V ≥ 5·10⁸ / √10⁶ = 5·10⁵ V = 500 kV."),
    A("Demuestra que en el problema de la varilla deslizante la potencia mecánica es igual a la potencia eléctrica disipada.", "P<sub>mec</sub> = F·v = I·L·B·v = I·ε = I²R = P<sub>eléc</sub>."),
  ],
  quiz: [
    q4("La inducción electromagnética la descubrieron…", ["Oersted y Ampère", "Faraday y Henry", "Maxwell y Hertz", "Newton y Kepler"], 1, "1831."),
    q4("Para que se induzca corriente, el flujo magnético debe…", ["ser grande", "cambiar", "ser nulo", "ser constante"], 1, "Ley de Faraday."),
    q4("El flujo magnético se mide en…", ["teslas", "webers", "henrios", "voltios"], 1, "Wb = T·m²."),
    q4("En Φ = B·S·cos θ, θ es el ángulo entre B y…", ["el plano de la espira", "el vector superficie", "la velocidad", "la corriente"], 1, "Perpendicular a la espira."),
    q4("La ley de Faraday dice que ε es…", ["−dΦ/dt", "Φ·t", "dB/dt", "B·S"], 0, "Rapidez de cambio del flujo."),
    q4("La ley de Lenz es consecuencia de…", ["la conservación de la carga", "la conservación de la energía", "la ley de Coulomb", "la relatividad"], 1, "Si no, energía gratis."),
    q4("Al acercar el polo norte de un imán a una espira, esta presenta…", ["su cara sur", "su cara norte", "ninguna cara", "depende"], 1, "Se opone y repele."),
    q4("La fem en una varilla que se desliza es…", ["B·L·v", "B·L/v", "B·v/L", "L·v/B"], 0, "Fem de movimiento."),
    q4("Las corrientes de Foucault se reducen…", ["con núcleos laminados", "con más hierro", "con más corriente", "no se pueden reducir"], 0, "Cortan los remolinos."),
    q4("La fem de un alternador es…", ["constante", "sinusoidal", "cuadrada", "creciente"], 1, "NBSω sen ωt."),
    q4("La fem máxima de un alternador es…", ["NBS", "NBSω", "BSω/N", "NBω"], 1, "ε₀."),
    q4("La frecuencia de la red en Europa es…", ["60 Hz", "50 Hz", "230 Hz", "100 Hz"], 1, "T = 20 ms."),
    q4("La tensión eficaz es la máxima dividida entre…", ["2", "√2", "π", "√3"], 1, "Sinusoide."),
    q4("El coeficiente de autoinducción se mide en…", ["henrios", "teslas", "faradios", "webers"], 0, "H."),
    q4("En un transformador ideal V₂/V₁ =", ["N₁/N₂", "N₂/N₁", "I₂/I₁", "1"], 1, "Proporcional a las espiras."),
    q4("Un transformador elevador…", ["sube V y baja I", "sube V y sube I", "baja V y sube P", "sube la potencia"], 0, "P constante."),
    q4("Un transformador con corriente continua…", ["funciona igual", "no induce nada en el secundario", "duplica la tensión", "se convierte en motor"], 1, "El flujo no cambia."),
    q4("Se transporta a alta tensión para…", ["aumentar la potencia", "reducir las pérdidas I²R", "aumentar la intensidad", "cambiar la frecuencia"], 1, "Menos I."),
    q4("Según Maxwell, un campo eléctrico variable crea…", ["un campo gravitatorio", "un campo magnético", "cargas", "nada"], 1, "Corriente de desplazamiento."),
    q4("c = 1/√(ε₀μ₀) demostró que la luz es…", ["una partícula", "una onda electromagnética", "una onda sonora", "una corriente"], 1, "Maxwell."),
  ],
  examen: [
    q4("Bobina de 100 espiras, ΔΦ por espira = 0,01 Wb en 0,5 s: |ε| =", ["2 V", "0,02 V", "0,5 V", "200 V"], 0, "100 · 0,01 / 0,5."),
    q4("Varilla de 0,5 m a 4 m/s en 0,2 T: ε =", ["0,4 V", "4 V", "0,1 V", "1,6 V"], 0, "B·L·v."),
    q4("Si un alternador gira el doble de rápido, ε₀…", ["se duplica", "no cambia", "se reduce a la mitad", "se cuadruplica"], 0, "∝ ω."),
    q4("Tensión máxima de 230 V eficaces:", ["325 V", "163 V", "460 V", "230 V"], 0, "230·√2."),
    q4("Transformador 100 → 1000 espiras con 12 V: V₂ =", ["120 V", "1,2 V", "12 V", "1200 V"], 0, "×10."),
    q4("Si V se multiplica por 10 en el transporte, las pérdidas…", ["se dividen por 100", "se dividen por 10", "no cambian", "se multiplican por 10"], 0, "I²R."),
    q4("Campo B = 2t (T) en espira de 0,1 m²: ε =", ["0,2 V", "2 V", "0,1 V", "0"], 0, "S·dB/dt."),
    q4("Una espira paralela a B que gira hasta ser perpendicular: el flujo…", ["pasa de 0 a BS", "pasa de BS a 0", "no cambia", "es negativo"], 0, "θ de 90° a 0°."),
  ],
  feynman: ["Por qué un imán quieto no produce corriente", "Qué dice la ley de Lenz y por qué tiene que ser así", "Cómo se produce la electricidad en una central", "Por qué cae despacio un imán dentro de un tubo de cobre", "Por qué se transporta la electricidad a alta tensión", "Por qué un transformador no funciona con pilas"],
  mapa: mapaB("INDUCCIÓN", [["Flujo", "Φ = B·S·cos θ", "var(--pen)"], ["Faraday y Lenz", "ε = −N dΦ/dt", "var(--red)"], ["Alternador", "ε = NBSω sen ωt", "var(--leaf)"], ["Transformador", "V₂/V₁ = N₂/N₁", "#b45309"]]),
  tarjetas: [
    ["Flujo magnético", "Φ = B·S·cos θ (Wb)."],
    ["Ley de Faraday", "ε = −N · dΦ/dt."],
    ["Ley de Lenz", "La corriente inducida se opone a la variación de flujo."],
    ["Fem de movimiento", "ε = B·L·v."],
    ["Corrientes de Foucault", "Corrientes en remolino en metales; frenan y calientan."],
    ["Alternador", "ε = N·B·S·ω·sen ωt."],
    ["Valor eficaz", "V<sub>ef</sub> = V₀/√2; I<sub>ef</sub> = I₀/√2."],
    ["Autoinducción", "ε = −L·dI/dt (henrios)."],
    ["Transformador", "V₂/V₁ = N₂/N₁; V₁I₁ = V₂I₂."],
    ["Pérdidas en el transporte", "P = I²·R: alta tensión, baja intensidad."],
    ["Síntesis de Maxwell", "E variable crea B y B variable crea E."],
    ["Velocidad de la luz", "c = 1/√(ε₀μ₀) = 3·10⁸ m/s."],
  ],
  glosario: [
    ["Inducción electromagnética", "Producción de una fem por la variación del flujo magnético."],
    ["Flujo magnético", "Número de líneas de campo magnético que atraviesan una superficie."],
    ["Weber", "Unidad de flujo magnético: T·m²."],
    ["Fuerza electromotriz", "Energía por unidad de carga que un generador comunica al circuito."],
    ["Galvanómetro", "Instrumento que detecta corrientes pequeñas."],
    ["Corriente inducida", "Corriente que aparece en un circuito por inducción."],
    ["Corrientes de Foucault", "Corrientes inducidas en remolino dentro de un metal."],
    ["Alternador", "Generador de corriente alterna por giro de una bobina en un campo."],
    ["Corriente alterna", "Corriente que cambia de sentido periódicamente."],
    ["Valor eficaz", "Valor de una corriente continua que produce el mismo calor."],
    ["Inductancia", "Coeficiente que mide la fem autoinducida en una bobina."],
    ["Henrio", "Unidad de inductancia."],
    ["Transformador", "Aparato que eleva o reduce una tensión alterna."],
    ["Inversor", "Aparato que convierte corriente continua en alterna."],
    ["Ecuaciones de Maxwell", "Cuatro leyes que resumen todo el electromagnetismo."],
  ],
  situacion: {
    titulo: "Una dinamo para el huerto escolar",
    reto: "El huerto del instituto necesita encender una pequeña bomba de riego y unos LED sin conectarse a la red. Vuestro equipo debe diseñar un generador basado en la inducción (una dinamo de bicicleta o un pequeño aerogenerador) y justificar su funcionamiento.",
    pasos: [
      "Desmontad una dinamo de bicicleta o un motor viejo y localizad el imán y las bobinas.",
      "Medid con un polímetro la tensión que da a distintas velocidades y representad la gráfica tensión-velocidad.",
      "Comprobad con la ley de Faraday que la fem es proporcional a la velocidad de giro.",
      "Calculad la potencia necesaria para la bomba y los LED y si hace falta una batería y un transformador o regulador.",
      "Elaborad un plan para usar energía eólica o de pedaleo y estimad cuánta energía se obtendría al día.",
    ],
    producto: "Un prototipo o maqueta con la memoria técnica y la gráfica de medidas.",
    evaluacion: ["Se explica el funcionamiento con las leyes de Faraday y Lenz.", "Las medidas se toman y representan correctamente.", "Los cálculos de potencia y energía son coherentes.", "Se valora la sostenibilidad de la propuesta."],
  },
  familias: [
    "Mirad la placa de un cargador o de un transformador de casa y comentad qué tensiones de entrada y salida indica.",
    "Si tenéis cocina de inducción, comprobad qué recipientes funcionan con ella y por qué.",
    "Buscad la línea de alta tensión más cercana y comentad por qué va a tanta tensión.",
    "Probad una linterna de dinamo o de agitar y explicad de dónde sale la energía.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Inducción electromagnética»: flujo magnético; leyes de Faraday-Henry y de Lenz; fuerza electromotriz inducida en circuitos y conductores en movimiento; generación de corriente alterna; transformadores y transporte de la energía eléctrica; síntesis electromagnética de Maxwell; implicaciones tecnológicas y ambientales.`,
    ideas: [
      "Simulación PhET «Ley de Faraday» y «Laboratorio electromagnético de Faraday».",
      "Imán de neodimio cayendo por un tubo de cobre frente a uno de PVC, midiendo tiempos.",
      "Medir con el móvil (osciloscopio de audio) la señal de una bobina con un imán que gira.",
      "Visita virtual a una central o subestación eléctrica.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Simulación «Ley de Faraday» (PhET)", url: "https://phet.colorado.edu/es/simulations/faradays-law" },
    { t: "Red Eléctrica: cómo funciona el sistema eléctrico", url: "https://www.ree.es/es/actividades/operacion-del-sistema-electrico" },
  ],
  revisado: "2026-11-21",
};
