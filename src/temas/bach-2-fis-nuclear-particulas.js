// Física 2º Bachillerato · Física nuclear y de partículas (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU } = require("./_bach2-fis");

// Energía de enlace por nucleón (MeV) frente a A; eje: A/240 y (E/A)/10.
const enlaceSVG = graf("Energía de enlace por nucleón: es máxima en torno al hierro-56; los núcleos ligeros liberan energía al fusionarse y los pesados, al fisionarse", "A", "Eb/A", [
  { p: [[2, 1.11], [3, 2.83], [6, 5.33], [7, 5.61], [12, 7.68], [16, 7.98], [28, 8.45], [40, 8.55], [56, 8.79], [84, 8.72], [138, 8.39], [208, 7.87], [238, 7.57]].map(([a, e]) => [a / 240, e / 10]), c: "var(--red)", t: "" },
], `<text x="96" y="26" font-size="11" fill="var(--red)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">⁵⁶Fe: 8,8 MeV</text>
  <text x="58" y="110" font-size="10" fill="var(--pen)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">fusión →</text>
  <text x="170" y="90" font-size="10" fill="var(--leaf)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">← fisión</text>`);

// Ley de desintegración: N/N₀ frente a t en periodos de semidesintegración.
const desintSVG = graf("Ley de desintegración radiactiva: en cada periodo de semidesintegración queda la mitad de los núcleos que había", "t", "N", [
  { p: Array.from({ length: 41 }, (_, i) => { const t = i / 40; return [t, 0.9 * Math.pow(0.5, t * 5)]; }), c: "var(--pen)", t: "N₀e^(−λt)" },
  { p: [[0, 0.45], [0.2, 0.45], [0.2, 0]], c: "var(--muted)", t: "", dash: true },
  { p: [[0, 0.225], [0.4, 0.225], [0.4, 0]], c: "var(--muted)", t: "", dash: true },
], `<text x="84" y="164" font-size="10" fill="var(--muted)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">T½</text><text x="120" y="164" font-size="10" fill="var(--muted)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">2T½</text>`);

// Poder de penetración de α, β y γ.
const penetraSVG = marco("Poder de penetración: una hoja de papel detiene la radiación alfa, unos milímetros de aluminio la beta y la gamma necesita plomo u hormigón", `
  <defs><marker id="pen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>
  <rect x="10" y="40" width="26" height="100" rx="5" fill="#f59e0b" opacity=".35" stroke="#b45309"/>${T(23, 154, "fuente", { fs: 10, b: true, c: "#b45309" })}
  <rect x="86" y="30" width="4" height="120" fill="var(--muted)"/><rect x="142" y="30" width="10" height="120" fill="var(--pen)" opacity=".55"/><rect x="200" y="30" width="26" height="120" fill="var(--ink)" opacity=".7"/>
  ${T(88, 22, "papel", { fs: 10, b: true })}${T(147, 22, "aluminio", { fs: 10, b: true })}${T(213, 22, "plomo", { fs: 10, b: true })}
  <path d="M38 60 H 82" stroke="var(--red)" stroke-width="3" marker-end="url(#pen)"/>${T(60, 54, "α", { fs: 13, b: true, c: "var(--red)" })}
  <path d="M38 90 H 138" stroke="var(--leaf)" stroke-width="3" marker-end="url(#pen)"/>${T(60, 84, "β", { fs: 13, b: true, c: "var(--leaf)" })}
  <path d="M38 120 H 196" stroke="#b45309" stroke-width="3" marker-end="url(#pen)"/><path d="M228 120 H 252" stroke="#b45309" stroke-width="1.4" stroke-dasharray="3 3"/>${T(60, 114, "γ", { fs: 13, b: true, c: "#b45309" })}
  ${T(130, 170, "α < β < γ (penetración)", { fs: 12, b: true })}`);

// Fisión en cadena.
const cadenaSVG = marco("Reacción en cadena: cada fisión de uranio-235 libera unos 200 MeV y 2 o 3 neutrones que pueden provocar nuevas fisiones", `
  <defs><marker id="cad" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
  <circle cx="14" cy="90" r="5" fill="var(--muted)"/><path d="M20 90 H 44" stroke="var(--muted)" stroke-width="1.6" marker-end="url(#cad)"/>
  <circle cx="58" cy="90" r="12" fill="var(--red)" opacity=".8"/>
  ${[[-50, 1], [0, 1], [50, 1]].map(([dy]) => `<path d="M70 90 L 118 ${90 + dy}" stroke="var(--muted)" stroke-width="1.6" marker-end="url(#cad)"/><circle cx="132" cy="${90 + dy}" r="12" fill="var(--red)" opacity=".8"/>${[-18, 0, 18].map((d2) => `<path d="M144 ${90 + dy} L 194 ${90 + dy + d2}" stroke="var(--muted)" stroke-width="1.3" marker-end="url(#cad)"/><circle cx="204" cy="${90 + dy + d2}" r="6" fill="var(--red)" opacity=".6"/>`).join("")}`).join("")}
  ${T(58, 120, "²³⁵U", { fs: 11, b: true, c: "var(--red)" })}${T(14, 78, "n", { fs: 11, b: true })}
  ${T(130, 172, "1 → 3 → 9 fisiones…", { fs: 12, b: true })}`);

module.exports = {
  materia: "Física",
  curso: "2-bachillerato",
  titulo: "Física nuclear y de partículas",
  minutos: 120,
  objetivos: [
    "Describir la composición y el tamaño del núcleo y la interacción nuclear fuerte",
    "Calcular el defecto de masa y la energía de enlace e interpretar la curva de estabilidad",
    "Explicar los tipos de radiactividad y aplicar las leyes de desplazamiento",
    "Aplicar la ley de desintegración radiactiva, el periodo de semidesintegración y la actividad",
    "Explicar la fisión y la fusión nucleares y calcular la energía liberada",
    "Conocer las interacciones fundamentales y el modelo estándar de partículas, y valorar las aplicaciones y los riesgos nucleares",
  ],
  claves: ["nucleón", "número másico", "isótopo", "interacción nuclear fuerte", "defecto de masa", "energía de enlace", "radiactividad", "desintegración alfa", "desintegración beta", "radiación gamma", "periodo de semidesintegración", "actividad", "fisión", "fusión", "modelo estándar"],
  pregunta: {
    texto: "¿Cómo se sabe que Ötzi, la momia de los Alpes, vivió hace unos 5300 años?",
    respuesta: "Por la <mark>datación con carbono-14</mark>. Los seres vivos intercambian carbono con el ambiente y mantienen una proporción constante de ¹⁴C radiactivo. Al morir dejan de incorporarlo y el ¹⁴C se desintegra con un periodo de semidesintegración de 5730 años. Midiendo cuánto ¹⁴C queda en sus tejidos respecto a un ser vivo, se calcula el tiempo transcurrido con la ley de desintegración: a Ötzi le quedaba algo más de la mitad.",
  },
  lectura: {
    titulo: "Marie Curie y el brillo del radio",
    html: `<p>En 1896, Henri Becquerel descubrió por casualidad que unas sales de uranio velaban placas fotográficas guardadas en un cajón oscuro. Una joven doctoranda polaca en París, Marie Skłodowska-Curie, decidió estudiar aquellos «rayos» para su tesis. Midiendo con un electrómetro diseñado por su marido, Pierre, comprobó que la intensidad dependía solo de la cantidad de uranio: la radiación salía de los propios átomos. Llamó a ese fenómeno <i>radiactividad</i>.</p><p>Observando que un mineral, la pechblenda, era más activo que el uranio que contenía, los Curie dedujeron que debía de haber otros elementos desconocidos. Tras procesar a mano toneladas de mineral en un cobertizo, descubrieron el polonio y el radio, que brillaba en la oscuridad. Marie Curie fue la primera mujer en ganar un Nobel y la única persona premiada en dos ciencias distintas (Física en 1903 y Química en 1911). Murió en 1934 por la exposición a la radiación, cuyos peligros entonces se ignoraban: sus cuadernos aún son radiactivos y se guardan en cajas de plomo.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 El núcleo atómico", p: [
      "En 1911, Rutherford descubrió que casi toda la masa del átomo se concentra en un <b>núcleo</b> diminuto con carga positiva. Hoy sabemos que está formado por <b>protones</b> y <b>neutrones</b>, llamados <mark>nucleones</mark>. Un núcleo se representa como <sup>A</sup><sub>Z</sub>X, donde <b>Z</b> es el número atómico (protones), <b>A</b> el número másico (nucleones) y <b>N = A − Z</b> el número de neutrones. Los <b>isótopos</b> son núcleos del mismo elemento (igual Z) con distinto número de neutrones, como el ¹²C y el ¹⁴C.",
      "El núcleo es pequeñísimo: su radio es aproximadamente <b>R = R₀ · A<sup>1/3</sup></b>, con R₀ = 1,2 fm (1 fm = 10⁻¹⁵ m). Si el átomo fuera un estadio de fútbol, el núcleo sería una canica en el centro. Su densidad es enorme, unos 2 · 10¹⁷ kg/m³, como en las estrellas de neutrones. Los protones se repelen con fuerzas eléctricas gigantescas a esas distancias; lo que mantiene unido el núcleo es la <mark>interacción nuclear fuerte</mark>: atractiva, la más intensa de la naturaleza, de muy corto alcance (unos pocos fm) e independiente de la carga.",
    ], extra: formula("ᴬ_Z X : N = A − Z ; R = 1,2 · A^(1/3) fm"), svg: rejilla("Partículas del núcleo", ["Partícula", "Carga", "Masa (u)"], [["Protón", "+e", "1,007276"], ["Neutrón", "0", "1,008665"], ["Electrón", "−e", "0,000549"], ["1 u", "—", "931,5 MeV/c²"]], "var(--red)") }),
    bloque({ h: "1.2 Defecto de masa y energía de enlace", p: [
      "La masa de un núcleo es siempre <b>menor</b> que la suma de las masas de sus nucleones por separado. La diferencia es el <mark>defecto de masa</mark>: <b>Δm = Z·m<sub>p</sub> + (A − Z)·m<sub>n</sub> − m<sub>núcleo</sub></b>. Según E = m·c², esa masa «perdida» es la energía que se libera al formarse el núcleo, igual a la que habría que aportar para separarlo en sus nucleones: la <b>energía de enlace</b>, <b>E<sub>b</sub> = Δm·c²</b>. Con la unidad de masa atómica, es cómodo usar <b>1 u = 931,5 MeV/c²</b>.",
      "La estabilidad de un núcleo la mide la <mark>energía de enlace por nucleón</mark>, E<sub>b</sub>/A. Su gráfica frente a A crece rápidamente en los núcleos ligeros, alcanza un máximo de unos <b>8,8 MeV</b> en torno al <b>hierro-56</b>, el núcleo más estable, y desciende lentamente en los pesados (7,6 MeV en el uranio). Esta curva explica toda la energía nuclear: se libera energía cuando núcleos ligeros se unen (<b>fusión</b>) o cuando un núcleo pesado se rompe (<b>fisión</b>), porque en ambos casos los productos están más ligados que los reactivos.",
    ], extra: formula("Δm = Z·mp + N·mn − m ; Eb = Δm·c² ; 1 u ↔ 931,5 MeV"), svg: enlaceSVG, video: V("nuc-b", "Defecto de masa y energía de enlace", "defecto de masa energía de enlace") }),
    bloque({ h: "1.3 La radiactividad", p: [
      "La <mark>radiactividad</mark> es la emisión espontánea de partículas o radiación por núcleos inestables, que se transforman en otros más estables. La descubrió Becquerel en 1896 y la estudiaron Marie y Pierre Curie. Hay tres tipos principales: la <b>radiación alfa (α)</b>, núcleos de helio-4 (dos protones y dos neutrones), muy ionizante pero poco penetrante: la detiene una hoja de papel o la piel; la <b>radiación beta (β⁻)</b>, electrones rápidos que se crean en el núcleo al transformarse un neutrón en un protón, más penetrante: la detienen unos milímetros de aluminio; y la <b>radiación gamma (γ)</b>, fotones de muy alta energía que emite un núcleo excitado al desexcitarse, muy penetrante: hacen falta centímetros de plomo o metros de hormigón.",
      "También existe la desintegración <b>β⁺</b>, en la que un protón se transforma en un neutrón emitiendo un positrón (la antipartícula del electrón). En las desintegraciones β se emite además un <b>neutrino</b> o un antineutrino, partícula casi sin masa que Pauli postuló en 1930 para que se conservara la energía. Las radiaciones nucleares son <b>ionizantes</b>: arrancan electrones de los átomos que encuentran, y por eso pueden dañar las células. La radiación α es la más peligrosa si la fuente se inhala o se ingiere, y la γ, la más difícil de blindar desde fuera.",
    ], svg: penetraSVG, video: V("nuc-a", "Decaimiento alfa, beta y gamma", "desintegración alfa beta gamma") }),
    bloque({ h: "1.4 Leyes de desplazamiento y series radiactivas", p: [
      "En toda reacción nuclear se conservan la <b>carga</b> (suma de Z) y el <b>número de nucleones</b> (suma de A). De ahí salen las <mark>leyes de desplazamiento de Soddy y Fajans</mark>. En la desintegración <b>α</b>, el núcleo pierde 2 protones y 2 neutrones: <sup>A</sup><sub>Z</sub>X → <sup>A−4</sup><sub>Z−2</sub>Y + <sup>4</sup><sub>2</sub>He. En la <b>β⁻</b>, un neutrón se convierte en protón: <sup>A</sup><sub>Z</sub>X → <sup>A</sup><sub>Z+1</sub>Y + e⁻ + ν̄. En la <b>β⁺</b>: <sup>A</sup><sub>Z</sub>X → <sup>A</sup><sub>Z−1</sub>Y + e⁺ + ν. En la <b>γ</b>, ni Z ni A cambian: el núcleo solo pierde energía.",
      "Muchos núcleos pesados no llegan a la estabilidad con una sola desintegración, sino mediante una cadena llamada <b>serie radiactiva</b>. La del uranio-238 incluye 8 desintegraciones α y 6 β⁻ hasta llegar al plomo-206, estable, y pasa por el radio-226 y el radón-222, un gas radiactivo que se acumula en sótanos de zonas graníticas y es la principal fuente de radiación natural que recibimos. Para saber cuántas desintegraciones α hay en una serie se divide entre 4 la variación de A; las β se obtienen después ajustando la carga.",
    ], extra: formula("α: A−4, Z−2 ; β⁻: A, Z+1 ; β⁺: A, Z−1 ; γ: A, Z"), svg: rejilla("Leyes de desplazamiento", ["Emisión", "ΔA", "ΔZ", "Ejemplo"], [["α", "−4", "−2", "²²⁶Ra → ²²²Rn"], ["β⁻", "0", "+1", "¹⁴C → ¹⁴N"], ["β⁺", "0", "−1", "¹⁸F → ¹⁸O"], ["γ", "0", "0", "⁶⁰Ni* → ⁶⁰Ni"]], "var(--pen)") }),
    bloque({ h: "1.5 La ley de desintegración radiactiva", p: [
      "La desintegración es un proceso <b>aleatorio</b>: no se puede saber cuándo se desintegrará un núcleo concreto, pero sí cuántos lo harán, en promedio, en una muestra grande. El número de núcleos que se desintegran por unidad de tiempo es proporcional al número de núcleos presentes, y de ello se deduce la <mark>ley de desintegración</mark>: <b>N = N₀ · e<sup>−λt</sup></b>, donde λ es la <b>constante de desintegración</b> (s⁻¹), característica de cada isótopo.",
      "El <mark>periodo de semidesintegración</mark> T½ es el tiempo en que se desintegra la mitad de los núcleos: <b>T½ = ln 2 / λ</b>. Va desde fracciones de segundo hasta miles de millones de años (4470 millones para el ²³⁸U). La <b>vida media</b> es el tiempo medio que vive un núcleo, <b>τ = 1/λ</b>. La <b>actividad</b> A es el número de desintegraciones por segundo, <b>A = λ·N = A₀·e<sup>−λt</sup></b>, y se mide en <b>becquerelios</b> (1 Bq = 1 desintegración/s); la unidad antigua es el curio (1 Ci = 3,7 · 10¹⁰ Bq). Tras n periodos de semidesintegración queda una fracción (1/2)ⁿ.",
    ], extra: formula("N = N₀·e^(−λt) ; T½ = ln2/λ ; τ = 1/λ ; A = λN"), svg: desintSVG, video: V("nuc-f", "Ley de desintegración radiactiva", "ley de desintegración radiactiva") }),
    bloque({ h: "1.6 Aplicaciones de los radioisótopos", p: [
      "La <b>datación radiométrica</b> usa la ley de desintegración como reloj. El <mark>carbono-14</mark> (T½ = 5730 años) sirve para fechar restos orgánicos de hasta unos 50 000 años, y el uranio-238 o el potasio-40, para rocas y meteoritos de miles de millones de años: así se sabe que la Tierra tiene 4540 millones de años. En <b>medicina nuclear</b>, isótopos de vida corta como el tecnecio-99m o el flúor-18 (en la tomografía PET) permiten obtener imágenes del funcionamiento de los órganos; el yodo-131 trata enfermedades del tiroides, y el cobalto-60 y otras fuentes se usan en radioterapia contra el cáncer.",
      "En la industria, las radiaciones se emplean para esterilizar material quirúrgico y alimentos, revisar soldaduras con gammagrafías, medir espesores y niveles, y detectar fugas con trazadores. Los detectores de humo contienen una pequeña fuente de americio-241. Para medir el efecto biológico de la radiación se usa la <b>dosis equivalente</b>, en <b>sieverts</b> (Sv). La radiación natural que recibimos es de unos 2-3 mSv al año; una radiografía de tórax supone unos 0,02 mSv y un TAC, unos 7 mSv.",
    ], svg: barras("Dosis típicas", "mSv", [["TAC abdomen", 8, "var(--red)", "8"], ["Natural al año", 2.4, "#b45309", "2,4"], ["Vuelo Madrid-NY", 0.08, "var(--leaf)", "0,08"], ["Radiografía", 0.02, "var(--pen)", "0,02"]]) }),
    bloque({ h: "2.1 Reacciones nucleares", p: [
      "En una <mark>reacción nuclear</mark>, un núcleo se transforma al ser bombardeado por una partícula. Rutherford logró la primera en 1919: <sup>14</sup><sub>7</sub>N + <sup>4</sup><sub>2</sub>He → <sup>17</sup><sub>8</sub>O + <sup>1</sup><sub>1</sub>H, el viejo sueño de los alquimistas de transmutar un elemento en otro. En 1932, Chadwick descubrió el neutrón con otra reacción, y en 1934 Irène Curie y Frédéric Joliot obtuvieron los primeros isótopos radiactivos artificiales.",
      "En todas las reacciones nucleares se conservan la carga, el número de nucleones, la energía total (incluida la de la masa) y la cantidad de movimiento. La energía liberada es la <b>energía de reacción</b>, <b>Q = (Σm<sub>reactivos</sub> − Σm<sub>productos</sub>)·c²</b>. Si Q &gt; 0, la reacción es exoenergética y libera energía; si Q &lt; 0, hay que aportarla. La energía de una reacción nuclear es del orden de los <b>MeV</b>, unos millones de veces mayor que la de una reacción química (del orden de los eV): por eso 1 kg de uranio equivale a miles de toneladas de carbón.",
    ], extra: formula("Q = (Σm reactivos − Σm productos)·c² ; 1 u → 931,5 MeV"), svg: pasos("Problema de reacción nuclear", ["Ajustar A y Z", "Identificar la partícula que falta", "Δm = Σm reactivos − Σm productos", "Q = Δm · 931,5 MeV"], "var(--pen)") }),
    bloque({ h: "2.2 La fisión nuclear", p: [
      "La <mark>fisión</mark> es la ruptura de un núcleo pesado en dos núcleos medianos al absorber un neutrón. Fue descubierta en 1938 por Otto Hahn y Fritz Strassmann, y Lise Meitner la interpretó físicamente. Una reacción típica es: <sup>235</sup>U + n → <sup>141</sup>Ba + <sup>92</sup>Kr + 3 n + <b>unos 200 MeV</b>. La mayor parte de la energía se convierte en energía cinética de los fragmentos, es decir, en calor.",
      "Como cada fisión libera 2 o 3 neutrones, estos pueden provocar nuevas fisiones: es la <b>reacción en cadena</b>. Si no se controla, crece exponencialmente (bomba atómica). En un <b>reactor nuclear</b> se controla para que, de media, cada fisión provoque exactamente otra: el <b>moderador</b> (agua o grafito) frena los neutrones para que sean más eficaces, las <b>barras de control</b> (boro o cadmio) absorben los sobrantes, y el calor producido genera vapor que mueve una turbina. Las centrales nucleares no emiten CO₂, pero generan <b>residuos radiactivos</b> de larga vida y exigen sistemas de seguridad muy estrictos, como recordaron los accidentes de Chernóbil (1986) y Fukushima (2011).",
    ], svg: cadenaSVG, video: V("nuc-c", "¿Cómo funciona una central nuclear?", "central nuclear") }),
    bloque({ h: "2.3 La fusión nuclear", p: [
      "La <mark>fusión</mark> es la unión de núcleos ligeros para formar uno más pesado. Es la fuente de energía de las estrellas: en el Sol, cuatro protones se transforman en un núcleo de helio liberando 26,7 MeV, y el Sol convierte así unos 4 millones de toneladas de masa en energía cada segundo. Las estrellas más masivas fusionan después helio, carbono, oxígeno… hasta el hierro, el núcleo más estable. Los elementos más pesados se forman en explosiones de supernova y choques de estrellas de neutrones: los átomos de tu cuerpo se fabricaron en estrellas.",
      "Para fusionar núcleos hay que vencer su repulsión eléctrica, lo que exige temperaturas de <b>decenas o cientos de millones de grados</b>: la materia es un <b>plasma</b> que no puede tocar ninguna pared. La reacción más fácil es la del deuterio con el tritio: <sup>2</sup>H + <sup>3</sup>H → <sup>4</sup>He + n + 17,6 MeV. El proyecto internacional <b>ITER</b>, en Francia, intenta confinar el plasma con campos magnéticos en un tokamak para producir más energía de la que consume. La fusión usaría un combustible casi inagotable (el deuterio del agua) y no generaría residuos de larga vida, pero aún no es viable comercialmente.",
    ], extra: formula("²H + ³H → ⁴He + n + 17,6 MeV"), svg: compara("Fisión y fusión", ["Fisión", ["núcleo pesado se rompe", "≈ 200 MeV por fisión", "reacción en cadena", "residuos de larga vida"]], ["Fusión", ["núcleos ligeros se unen", "≈ 0,7 % de la masa", "T de 10⁸ K", "combustible: agua"]], "var(--red)", "var(--pen)"), video: V("nuc-d", "¿Por qué no existen centrales de fusión nuclear?", "fusión nuclear") }),
    bloque({ h: "2.4 Las interacciones fundamentales", p: [
      "Todas las fuerzas de la naturaleza se reducen a cuatro <mark>interacciones fundamentales</mark>. La <b>gravitatoria</b> actúa entre masas, es siempre atractiva y de alcance infinito, pero es la más débil: domina en el universo a gran escala. La <b>electromagnética</b> actúa entre cargas, puede ser atractiva o repulsiva, tiene alcance infinito y explica la química, la luz y casi todos los fenómenos cotidianos. La <b>nuclear fuerte</b> une los quarks en los protones y neutrones y estos en el núcleo; es la más intensa, pero de alcance de solo 10⁻¹⁵ m. La <b>nuclear débil</b> es la responsable de la desintegración β y de las reacciones de fusión del Sol, con un alcance aún menor.",
      "En la física actual, cada interacción se transmite mediante el intercambio de partículas mediadoras: el <b>fotón</b> en la electromagnética, los <b>gluones</b> en la fuerte y los <b>bosones W y Z</b> en la débil; para la gravedad se postula el gravitón, nunca detectado. Una de las grandes metas de la física es <b>unificar</b> las interacciones: la electromagnética y la débil ya se unificaron en la teoría electrodébil (comprobada en el CERN), pero la gravedad, descrita por la relatividad general, aún no encaja con la física cuántica.",
    ], svg: rejilla("Interacciones fundamentales", ["Interacción", "Intensidad", "Alcance", "Mediador"], [["Fuerte", "1", "10⁻¹⁵ m", "gluón"], ["Electromag.", "10⁻²", "infinito", "fotón"], ["Débil", "10⁻⁶", "10⁻¹⁸ m", "W, Z"], ["Gravitatoria", "10⁻³⁸", "infinito", "¿gravitón?"]], "var(--leaf)") }),
    bloque({ h: "2.5 Las partículas elementales: el modelo estándar", p: [
      "Los protones y neutrones no son elementales: están formados por <mark>quarks</mark>. El protón es <b>uud</b> (dos quarks up, de carga +2/3, y uno down, de carga −1/3) y el neutrón es <b>udd</b>. Los quarks nunca se encuentran aislados: están confinados por la interacción fuerte. El <b>modelo estándar</b> clasifica las partículas elementales de materia en dos familias de 6: los <b>quarks</b> (up, down, charm, strange, top, bottom) y los <b>leptones</b> (electrón, muon, tau y sus tres neutrinos). Toda la materia ordinaria está hecha solo de up, down y electrones.",
      "Cada partícula tiene su <b>antipartícula</b>, con la misma masa y carga opuesta; cuando se encuentran, se aniquilan y producen energía (E = mc²). Completan el modelo los <b>bosones mediadores</b> y el <b>bosón de Higgs</b>, que explica el origen de la masa de las partículas y fue descubierto en el <b>CERN</b> en 2012, con una importante participación española. El modelo estándar es un éxito enorme, pero deja preguntas abiertas: qué son la <b>materia oscura</b> y la <b>energía oscura</b>, que forman el 95 % del universo, por qué hay más materia que antimateria y cómo incluir la gravedad.",
    ], svg: rejilla("Modelo estándar", ["Tipo", "Partículas"], [["Quarks", "u, d, c, s, t, b"], ["Leptones", "e, μ, τ y sus ν"], ["Mediadores", "fotón, gluón, W, Z"], ["Escalar", "bosón de Higgs"]], "var(--pen)"), video: V("nuc-e", "El modelo estándar de física de partículas", "modelo estándar") }),
    bloque({ h: "3.1 Riesgos y protección radiológica", p: [
      "Los efectos biológicos de la radiación ionizante dependen de la dosis. Dosis muy altas (más de 1 Sv recibido de golpe) producen efectos <b>deterministas</b>: quemaduras, síndrome de irradiación aguda e incluso la muerte. Dosis bajas aumentan ligeramente la probabilidad de cáncer y de alteraciones genéticas (efectos <b>estocásticos</b>). Por eso, el principio de la <mark>protección radiológica</mark> es mantener las dosis tan bajas como sea razonablemente posible, con tres reglas: <b>tiempo</b> (exposición mínima), <b>distancia</b> (la intensidad baja con 1/r²) y <b>blindaje</b> (plomo, hormigón, agua).",
      "La gestión de los <b>residuos radiactivos</b> es uno de los grandes retos de la energía nuclear. Los de baja y media actividad se almacenan en instalaciones como El Cabril (Córdoba). Los de alta actividad, como el combustible gastado, deben aislarse durante miles de años, y varios países construyen almacenes geológicos profundos. El debate sobre la energía nuclear exige sopesar con datos sus ventajas (no emite CO₂, produce de forma estable) y sus inconvenientes (residuos, riesgo de accidentes, coste), un ejemplo de cómo la física informa decisiones sociales.",
    ], svg: ficha("Protección radiológica", "tiempo · distancia · blindaje", ["dosis tan baja como sea posible", "intensidad ∝ 1/r²", "α: papel; γ: plomo", "residuos: aislamiento"], "#b45309") }),
  ],
  figura: figura("Física nuclear y de partículas", "Energía de enlace, radiactividad, fisión, fusión y modelo estándar", [["Enlace", "Eb = Δm·c²", "máx. en ⁵⁶Fe"], ["Desintegración", "N = N₀e^(−λt)", "T½ = ln2/λ"], ["Energía", "Q = Δm·c²", "fisión, fusión"], ["Partículas", "quarks y leptones", "p = uud"]], "var(--red)"),
  video: V("nuc-c", "¿Cómo funciona una central nuclear?", "central nuclear"),
  ejemplos: [
    { enunciado: "Calcula el defecto de masa y la energía de enlace por nucleón del ⁴He (masa atómica 4,002603 u; ¹H = 1,007825 u; n = 1,008665 u).", pasos: ["Δm = 2 · 1,007825 + 2 · 1,008665 − 4,002603 = 0,030377 u.", "Eb = 0,030377 · 931,5 = 28,3 MeV.", "Eb/A = 28,3/4."], resultado: "Δm = 0,0304 u; Eb = 28,3 MeV; 7,07 MeV por nucleón." },
    { enunciado: "Completa las reacciones: a) ²²⁶₈₈Ra → ? + α; b) ¹⁴₆C → ? + e⁻ + ν̄.", pasos: ["a) A: 226 − 4 = 222; Z: 88 − 2 = 86 → radón.", "b) A no cambia; Z: 6 + 1 = 7 → nitrógeno."], resultado: "a) ²²²₈₆Rn; b) ¹⁴₇N." },
    { enunciado: "El yodo-131 tiene T½ = 8 días. ¿Qué fracción queda al cabo de 24 días? ¿Cuánto vale λ?", pasos: ["24 días = 3 periodos → (1/2)³ = 1/8.", "λ = ln 2 / 8 = 0,0866 días⁻¹."], resultado: "Queda el 12,5 %; λ = 0,0866 d⁻¹ = 1,0 · 10⁻⁶ s⁻¹." },
    { enunciado: "Una madera antigua conserva el 30 % del ¹⁴C de una madera actual. ¿Qué antigüedad tiene? (T½ = 5730 años)", pasos: ["λ = 0,693/5730 = 1,21·10⁻⁴ años⁻¹.", "0,30 = e^(−λt) → t = ln(1/0,30)/λ = 1,204/1,21·10⁻⁴."], resultado: "t ≈ 9950 años." },
    { enunciado: "Calcula la actividad de 1 g de ²²⁶Ra (T½ = 1600 años).", pasos: ["N = 6,022·10²³/226 = 2,66·10²¹ núcleos.", "λ = 0,693/(1600 · 3,156·10⁷ s) = 1,37·10⁻¹¹ s⁻¹.", "A = λN."], resultado: "A = 3,66 · 10¹⁰ Bq ≈ 1 Ci (así se definió el curio)." },
    { enunciado: "Calcula la energía de la reacción ²H + ³H → ⁴He + n (masas: 2,014102; 3,016049; 4,002603; 1,008665 u).", pasos: ["Reactivos: 5,030151 u; productos: 5,011268 u.", "Δm = 0,018883 u → Q = 0,018883 · 931,5."], resultado: "Q = 17,6 MeV (reacción de fusión exoenergética)." },
  ],
  errores: [
    "Confundir el número atómico Z con el número másico A.",
    "Olvidar ajustar A y Z en las reacciones nucleares.",
    "Pensar que tras dos periodos de semidesintegración ya no queda nada: queda la cuarta parte.",
    "Mezclar unidades de tiempo al calcular λ, T½ y la actividad (años y segundos).",
    "Creer que en la desintegración β⁻ sale un electrón de la corteza: se crea en el núcleo.",
    "Restar las masas al revés: la energía liberada es (reactivos − productos)·c².",
  ],
  ejercicios: [
    B("Indica cuántos protones, neutrones y nucleones tiene el ²³⁵₉₂U.", "92 protones, 143 neutrones, 235 nucleones."),
    B("¿Qué son los isótopos? Pon un ejemplo.", "Núcleos con igual Z y distinto N: ¹²C y ¹⁴C."),
    B("Describe la naturaleza de las radiaciones α, β y γ.", "α: núcleos de He; β⁻: electrones; γ: fotones de alta energía."),
    B("Ordena las radiaciones α, β y γ según su poder de penetración e indica qué las detiene.", "α (papel) < β (aluminio) < γ (plomo, hormigón)."),
    B("Completa: ²²⁶₈₈Ra → ? + ⁴₂He.", "²²²₈₆Rn."),
    B("Completa: ¹⁴₆C → ? + e⁻ + ν̄.", "¹⁴₇N."),
    B("Define periodo de semidesintegración.", "Tiempo en que se desintegra la mitad de los núcleos de una muestra."),
    B("¿Por qué no se desintegran los núcleos a pesar de la repulsión entre protones?", "Por la interacción nuclear fuerte, atractiva y muy intensa a corta distancia."),
    B("Diferencia fisión y fusión.", "Fisión: un núcleo pesado se rompe. Fusión: núcleos ligeros se unen."),
    B("Cita las cuatro interacciones fundamentales.", "Gravitatoria, electromagnética, nuclear fuerte y nuclear débil."),
    B("¿De qué quarks están formados el protón y el neutrón?", "Protón: uud. Neutrón: udd."),
    B("Cita tres aplicaciones médicas de los radioisótopos.", "Gammagrafías (⁹⁹ᵐTc), PET (¹⁸F), radioterapia, tratamiento de tiroides (¹³¹I)."),
    M("Calcula la energía de enlace del ⁴He (Δm = 0,0304 u) y por nucleón.", "Eb = 28,3 MeV; 7,07 MeV/nucleón."),
    M("Calcula la energía de enlace por nucleón del ⁷Li (masa 7,016004 u).", "Δm = 3·1,007825 + 4·1,008665 − 7,016004 = 0,042131 u → 39,2 MeV; 5,61 MeV/nucleón."),
    M("El ¹³¹I tiene T½ = 8 días. ¿Qué porcentaje queda tras 40 días?", "5 periodos: (1/2)⁵ = 3,1 %."),
    M("Calcula λ y la vida media del ¹⁴C (T½ = 5730 años).", "λ = 1,21·10⁻⁴ años⁻¹; τ = 8270 años."),
    M("Una muestra arqueológica conserva el 25 % del ¹⁴C. ¿Qué edad tiene?", "2 periodos: 11 460 años."),
    M("Una fuente tiene 8000 Bq. ¿Qué actividad tendrá tras tres periodos de semidesintegración?", "8000/8 = 1000 Bq."),
    M("Calcula el número de núcleos de una muestra de ⁶⁰Co (T½ = 5,27 años) cuya actividad es 10⁶ Bq.", "λ = 4,17·10⁻⁹ s⁻¹ → N = A/λ = 2,4·10¹⁴ núcleos."),
    M("Calcula la energía liberada en la reacción D + T → ⁴He + n.", "Δm = 0,018883 u → 17,6 MeV."),
    M("Cada fisión de ²³⁵U libera 200 MeV. ¿Cuánta energía libera 1 kg? ¿A cuánto carbón equivale (3 · 10⁷ J/kg)?", "N = 2,56·10²⁴ → E = 8,2·10¹³ J ≡ 2,7·10⁶ kg de carbón."),
    M("Calcula el radio del núcleo de ²³⁸U.", "R = 1,2 · 238^(1/3) = 7,4 fm."),
    M("En la serie del ²³⁸U al ²⁰⁶Pb, ¿cuántas desintegraciones α y β⁻ se producen?", "ΔA = 32 → 8 α (Z baja 16, a 76); para llegar a Z = 82: 6 β⁻."),
    A("(Tipo PAU) Una fuente de ⁶⁰Co (T½ = 5,27 años) tiene una actividad de 3,7 · 10¹⁰ Bq. Calcula: a) λ; b) el número de núcleos y la masa de cobalto; c) la actividad al cabo de 10 años.", "a) 4,17·10⁻⁹ s⁻¹. b) N = 8,87·10¹⁸; m = 8,8·10⁻⁴ g. c) A = 3,7·10¹⁰ · 2^(−10/5,27) = 9,9·10⁹ Bq."),
    A("(Tipo PAU) Completa la reacción ²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + x n y calcula la energía liberada (masas: 235,043930; 1,008665; 140,914411; 91,926156 u).", "x = 3. Δm = 236,052595 − 235,866562 = 0,186033 u → Q = 173 MeV."),
    A("(Tipo PAU) Calcula la energía de enlace por nucleón del ⁵⁶Fe (55,934937 u) y compárala con la del ⁴He. ¿Cuál es más estable?", "Δm = 0,528463 u → 492 MeV → 8,79 MeV/nucleón: más estable que el ⁴He (7,07)."),
    A("Un hueso tiene una actividad de ¹⁴C de 0,20 Bq por gramo de carbono, y un ser vivo, 0,25 Bq/g. Calcula su antigüedad.", "t = ln(0,25/0,20)/λ = 0,223/1,21·10⁻⁴ = 1840 años."),
    A("En el Sol, cuatro protones forman un núcleo de helio. Con masas atómicas (4 · 1,007825 u y 4,002603 u), calcula la energía liberada y la fracción de masa convertida.", "Δm = 0,028697 u → 26,7 MeV; 0,71 % de la masa."),
    A("Una central de 1000 MW eléctricos tiene un rendimiento del 33 %. ¿Cuántos kg de ²³⁵U fisiona al día? (200 MeV por fisión)", "3000 MW térmicos → 9,4·10¹⁹ fisiones/s → 8,1·10²⁴ al día → 3,2 kg/día."),
    A("Una roca contiene la mitad de átomos de ²⁰⁶Pb que de ²³⁸U (T½ = 4,47 · 10⁹ años). Suponiendo que todo el plomo procede del uranio, ¿qué edad tiene?", "N₀ = 1,5N → t = T½·log₂(1,5) = 2,6·10⁹ años."),
  ],
  quiz: [
    q4("Los nucleones son…", ["protones y electrones", "protones y neutrones", "quarks y leptones", "neutrones y electrones"], 1, "Forman el núcleo."),
    q4("El número másico A es…", ["el número de protones", "el número de nucleones", "el número de neutrones", "la masa en kg"], 1, "Z + N."),
    q4("Los isótopos tienen igual…", ["A", "Z", "N", "masa"], 1, "Mismo elemento."),
    q4("Mantiene unido el núcleo la interacción…", ["gravitatoria", "electromagnética", "nuclear fuerte", "débil"], 2, "Corto alcance."),
    q4("El defecto de masa es…", ["masa de nucleones − masa del núcleo", "masa del núcleo − masa de electrones", "siempre negativo", "cero en el ⁵⁶Fe"], 0, "Se convierte en energía."),
    q4("1 u equivale a…", ["931,5 MeV", "1 MeV", "0,511 MeV", "13,6 eV"], 0, "Por E = mc²."),
    q4("El núcleo más estable es aproximadamente…", ["⁴He", "⁵⁶Fe", "²³⁸U", "¹H"], 1, "Máxima Eb/A."),
    q4("La radiación α son…", ["electrones", "núcleos de helio", "fotones", "neutrones"], 1, "²He⁴."),
    q4("La radiación más penetrante es la…", ["α", "β", "γ", "todas igual"], 2, "Fotones de alta energía."),
    q4("En la emisión α, Z…", ["aumenta 1", "disminuye 2", "no cambia", "disminuye 4"], 1, "Pierde 2 protones."),
    q4("En la emisión β⁻, un neutrón se convierte en…", ["un protón", "un electrón y nada más", "un fotón", "un positrón"], 0, "Z + 1."),
    q4("Tras tres periodos de semidesintegración queda…", ["1/3", "1/8", "1/6", "nada"], 1, "(1/2)³."),
    q4("T½ =", ["λ/ln2", "ln2/λ", "1/λ", "λ·ln2"], 1, "Periodo."),
    q4("La actividad se mide en…", ["sieverts", "becquerelios", "grays", "julios"], 1, "Desintegraciones/s."),
    q4("La dosis equivalente se mide en…", ["Bq", "Sv", "Ci", "eV"], 1, "Efecto biológico."),
    q4("En un reactor, las barras de control…", ["frenan neutrones", "absorben neutrones", "producen calor", "enfrían"], 1, "Boro o cadmio."),
    q4("La energía de las estrellas procede de la…", ["fisión", "fusión", "combustión", "radiactividad α"], 1, "Hidrógeno → helio."),
    q4("La fusión requiere temperaturas altas para…", ["vencer la repulsión eléctrica", "romper electrones", "evaporar el agua", "frenar neutrones"], 0, "Barrera de Coulomb."),
    q4("El protón está formado por…", ["uud", "udd", "uuu", "ud"], 0, "Carga +1."),
    q4("El bosón de Higgs se descubrió en…", ["1905", "1938", "2012", "1897"], 2, "CERN."),
  ],
  examen: [
    q4("El ⁴₂He tiene…", ["2 p y 2 n", "4 p", "2 p y 4 n", "4 n"], 0, "Z = 2, N = 2."),
    q4("Tras 2 T½ la actividad es…", ["A₀/4", "A₀/2", "0", "A₀/8"], 0, "(1/2)²."),
    q4("²³⁸₉₂U emite una α: queda…", ["²³⁴₉₀Th", "²³⁴₉₂U", "²³⁸₉₁Pa", "²³⁴₈₈Ra"], 0, "A−4, Z−2."),
    q4("¹⁴₆C emite β⁻: queda…", ["¹⁴₇N", "¹⁴₅B", "¹⁰₄Be", "¹⁴₆C"], 0, "Z+1."),
    q4("Δm = 0,01 u equivale a…", ["9,3 MeV", "0,93 MeV", "93 MeV", "1 MeV"], 0, "× 931,5."),
    q4("T½ = 10 s: λ =", ["0,0693 s⁻¹", "6,93 s⁻¹", "0,1 s⁻¹", "14,4 s⁻¹"], 0, "ln2/10."),
    q4("Energía de la fusión D + T:", ["17,6 MeV", "200 MeV", "13,6 eV", "931 MeV"], 0, "Por reacción."),
    q4("Energía por fisión de ²³⁵U:", ["≈ 200 MeV", "≈ 2 MeV", "≈ 17 MeV", "≈ 2000 MeV"], 0, "Fragmentos."),
  ],
  feynman: ["Por qué la masa de un núcleo es menor que la de sus partes", "Por qué se libera energía tanto en la fisión como en la fusión", "Qué significa que la desintegración sea aleatoria", "Cómo se data un fósil con carbono-14", "Cómo se controla una reacción en cadena en un reactor", "De qué está hecho un protón"],
  mapa: mapaB("NÚCLEO Y PARTÍCULAS", [["Núcleo", "Eb = Δm·c² ; Eb/A", "var(--red)"], ["Radiactividad", "α, β, γ ; N = N₀e^(−λt)", "var(--pen)"], ["Energía nuclear", "fisión y fusión ; Q", "#b45309"], ["Partículas", "quarks, leptones, bosones", "var(--leaf)"]]),
  tarjetas: [
    ["Núcleo", "ᴬ_Z X ; N = A − Z ; R = 1,2·A^(1/3) fm."],
    ["Defecto de masa", "Δm = Z·mp + N·mn − m núcleo."],
    ["Energía de enlace", "Eb = Δm·c² ; 1 u = 931,5 MeV."],
    ["Curva Eb/A", "Máximo ≈ 8,8 MeV en el ⁵⁶Fe."],
    ["Radiación α", "⁴He ; A − 4, Z − 2 ; la para el papel."],
    ["Radiación β⁻", "n → p + e⁻ + ν̄ ; Z + 1 ; la para el aluminio."],
    ["Radiación γ", "Fotones ; A y Z no cambian ; plomo."],
    ["Ley de desintegración", "N = N₀·e^(−λt)."],
    ["Periodo", "T½ = ln2/λ ; τ = 1/λ."],
    ["Actividad", "A = λN (Bq)."],
    ["Fisión", "²³⁵U + n → 2 núcleos + 2-3 n + 200 MeV."],
    ["Fusión", "²H + ³H → ⁴He + n + 17,6 MeV."],
  ],
  glosario: [
    ["Nucleón", "Protón o neutrón."],
    ["Número másico", "Número total de nucleones de un núcleo (A)."],
    ["Isótopo", "Núcleo del mismo elemento con distinto número de neutrones."],
    ["Interacción fuerte", "Fuerza que une quarks y nucleones; la más intensa."],
    ["Defecto de masa", "Diferencia entre la masa de los nucleones libres y la del núcleo."],
    ["Energía de enlace", "Energía necesaria para separar un núcleo en sus nucleones."],
    ["Radiactividad", "Emisión espontánea de radiación por núcleos inestables."],
    ["Constante de desintegración", "Probabilidad de desintegración por unidad de tiempo (λ)."],
    ["Periodo de semidesintegración", "Tiempo en que se desintegra la mitad de los núcleos."],
    ["Becquerelio", "Unidad de actividad: una desintegración por segundo."],
    ["Sievert", "Unidad de dosis equivalente de radiación."],
    ["Reacción en cadena", "Sucesión de fisiones provocadas por los neutrones liberados."],
    ["Plasma", "Gas ionizado a muy alta temperatura."],
    ["Quark", "Partícula elemental que forma protones y neutrones."],
    ["Antipartícula", "Partícula de igual masa y carga opuesta."],
  ],
  situacion: {
    titulo: "Debate informado: ¿energía nuclear sí o no?",
    reto: "Vuestro equipo debe preparar un informe y un debate sobre el papel de la energía nuclear (fisión y fusión) en la transición energética de España, usando cálculos físicos y datos oficiales.",
    pasos: [
      "Calculad la energía que produce 1 kg de uranio frente a 1 kg de carbón y de gas, y las emisiones de CO₂ evitadas.",
      "Buscad datos oficiales sobre las centrales españolas, su producción y su calendario de cierre.",
      "Investigad cómo se gestionan los residuos radiactivos y qué periodos de semidesintegración tienen.",
      "Analizad los accidentes de Chernóbil y Fukushima y las medidas de seguridad posteriores.",
      "Organizad un debate con argumentos a favor y en contra basados en datos.",
    ],
    producto: "Un informe con cálculos y fuentes, y un debate en clase.",
    evaluacion: ["Los cálculos de energía y masa son correctos.", "Las fuentes son oficiales y fiables.", "Se distinguen hechos y opiniones.", "Se respetan los argumentos de los demás."],
  },
  familias: [
    "Buscad en casa un detector de humo y averiguad qué isótopo contiene.",
    "Comentad juntos qué pruebas médicas con radiación os han hecho y para qué servían.",
    "Ved un documental sobre el Sol y comentad de dónde sale su energía.",
    "Buscad cuánta electricidad de España es de origen nuclear este año.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Física relativista, cuántica, nuclear y de partículas»: núcleo atómico, defecto de masa y energía de enlace; radiactividad, tipos de emisiones, ley de desintegración y aplicaciones; reacciones nucleares, fisión y fusión; interacciones fundamentales y modelo estándar de partículas; implicaciones sociales, médicas y ambientales de la física nuclear.`,
    ideas: [
      "Simulación del decaimiento radiactivo lanzando dados o monedas y ajustando la exponencial.",
      "Simulaciones PhET «Desintegración alfa» y «Fisión nuclear».",
      "Visita virtual al CERN o charla de un investigador de física de partículas.",
      "Medida de la radiación natural con un contador Geiger del centro o del CSIC.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Consejo de Seguridad Nuclear: la radiación y sus efectos", url: "https://www.csn.es/" },
    { t: "CERN: el modelo estándar", url: "https://home.cern/science/physics/standard-model" },
  ],
  revisado: "2026-11-21",
};
