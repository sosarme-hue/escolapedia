// Tecnología e Ingeniería II 2º Bachillerato · Tema 2. Nivel libro. Dibujos propios en SVG.
const { marco, T, fit, ficha, pasos, compara, graf, escala, rejilla, barras, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU, celda } = require("./_bach2-ti");

// Red de átomos con defectos puntuales.
const defectosSVG = (() => {
  let s = "";
  for (let i = 0; i < 7; i++) for (let j = 0; j < 5; j++) {
    const x = 34 + i * 32, y = 34 + j * 26;
    if (i === 1 && j === 1) { s += `<circle cx="${x}" cy="${y}" r="10" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="3 2"/>`; continue; }
    const sus = i === 5 && j === 3;
    s += `<circle cx="${x}" cy="${y}" r="${sus ? 13 : 10}" fill="${sus ? "var(--leaf)" : "var(--pen)"}" fill-opacity=".85"/>`;
  }
  s += `<circle cx="146" cy="73" r="5" fill="var(--sun)" stroke="var(--ink)" stroke-width="1"/>`;
  s += T(66, 170, "vacante", { fs: 11, b: true, c: "var(--red)" }) + T(146, 170, "intersticial", { fs: 11, b: true, c: "#b45309" }) + T(214, 170, "sustitucional", { fs: 11, b: true, c: "var(--leaf)" });
  s += `<path d="M66 158 L 40 66" stroke="var(--red)" stroke-width="1" opacity=".7"/><path d="M146 158 L 146 80" stroke="#b45309" stroke-width="1" opacity=".7"/><path d="M214 158 L 194 126" stroke="var(--leaf)" stroke-width="1" opacity=".7"/>`;
  return marco("Red cristalina con tres defectos puntuales: un hueco o vacante, un átomo pequeño intersticial entre átomos y un átomo distinto que sustituye a uno de la red", s);
})();

// Dislocación de borde y deslizamiento.
const dislocSVG = (() => {
  let s = "";
  for (let j = 0; j < 5; j++) for (let i = 0; i < 8; i++) {
    if (j < 2 && i === 4) continue;
    let x = 30 + i * 28; const y = 30 + j * 26;
    if (j < 2 && i > 4) x -= 4; if (j < 2 && i < 4) x += 4;
    s += `<circle cx="${x}" cy="${y}" r="8" fill="var(--pen)" fill-opacity=".8"/>`;
  }
  s += `<path d="M142 20 V 72" stroke="var(--red)" stroke-width="2.4"/><path d="M134 72 H 150" stroke="var(--red)" stroke-width="2.4"/>`;
  s += `<path d="M14 84 H 246" stroke="var(--red)" stroke-width="1.4" stroke-dasharray="5 3"/>`;
  s += T(130, 160, "Semiplano extra de átomos (⊥)", { fs: 11.5, b: true, c: "var(--red)" }) + T(130, 176, "se desplaza por el plano de deslizamiento", { fs: 10.5, c: "var(--muted)" });
  return marco("Dislocación de borde: un semiplano extra de átomos acaba dentro del cristal; bajo tensión se desplaza a lo largo del plano de deslizamiento", s);
})();

// Granos de un metal policristalino.
const granosSVG = marco("Metal policristalino: granos con distinta orientación de sus planos atómicos separados por límites de grano; el grano fino es más resistente", `
  <path d="M14 14 H 120 V 166 H 14 Z" fill="var(--card)" stroke="var(--line)"/>
  <path d="M14 70 L 50 58 L 70 14 M50 58 L 66 110 L 14 122 M66 110 L 120 96 M70 60 L 120 40 M50 58 L 70 60 L 66 110 M66 110 L 80 166" stroke="var(--ink)" stroke-width="2" fill="none"/>
  <path d="M24 30 l18 -10 M24 40 l18 -10 M80 30 l26 10 M80 40 l26 10 M22 90 l20 10 M22 100 l20 10 M80 70 l0 16 M90 70 l0 16 M100 70 l0 16 M84 120 l20 -8 M84 132 l20 -8" stroke="var(--pen)" stroke-width="1.6"/>
  ${T(67, 178, "grano grueso", { fs: 11, b: true })}
  <path d="M140 14 H 246 V 166 H 140 Z" fill="var(--card)" stroke="var(--line)"/>
  ${Array.from({ length: 30 }, (_, k) => { const i = k % 5, j = Math.floor(k / 5); const x = 144 + i * 20, y = 18 + j * 24.5; return `<path d="M${(x + (j % 2) * 4).toFixed(1)} ${y.toFixed(1)} l 15 6 l -5 15 l -12 -4 z" fill="none" stroke="var(--ink)" stroke-width="1.2"/>`; }).join("")}
  ${T(193, 178, "grano fino", { fs: 11, b: true, c: "var(--leaf)" })}`);

// Cadenas de polímero: lineal, ramificado y entrecruzado.
const polimeroSVG = (() => {
  const zig = (x, y, n, c) => { let d = `M${x} ${y}`; for (let i = 1; i <= n; i++) d += ` L ${x + i * 9} ${y + (i % 2 ? -6 : 6)}`; return `<path d="${d}" fill="none" stroke="${c}" stroke-width="2.4"/>`; };
  let s = "";
  [0, 1, 2].forEach((k) => { s += zig(14, 40 + k * 24, 7, "var(--pen)"); });
  s += T(46, 120, "termoplástico", { fs: 11, b: true, c: "var(--pen)" }) + T(46, 136, "cadenas sueltas", { fs: 10, c: "var(--muted)" });
  [0, 1, 2].forEach((k) => { s += zig(96, 40 + k * 24, 7, "var(--red)"); });
  s += [108, 126, 144].map((x) => `<path d="M${x} 46 V 82" stroke="var(--red)" stroke-width="2"/>`).join("");
  s += T(128, 120, "termoestable", { fs: 11, b: true, c: "var(--red)" }) + T(128, 136, "red rígida", { fs: 10, c: "var(--muted)" });
  [0, 1, 2].forEach((k) => { s += zig(180, 40 + k * 24, 7, "var(--leaf)"); });
  s += [196, 232].map((x) => `<path d="M${x} 46 V 66" stroke="var(--leaf)" stroke-width="2"/>`).join("");
  s += T(212, 120, "elastómero", { fs: 11, b: true, c: "var(--leaf)" }) + T(212, 136, "pocos enlaces", { fs: 10, c: "var(--muted)" });
  s += T(130, 166, "Con calor, solo el termoplástico se ablanda", { fs: 10.5, b: true });
  return marco("Estructura de los polímeros: cadenas sueltas en los termoplásticos, red con muchos enlaces cruzados en los termoestables y pocos enlaces en los elastómeros", s);
})();

// Material compuesto: fibras en una matriz.
const compuestoSVG = marco("Material compuesto: fibras resistentes de refuerzo alineadas dentro de una matriz que las une y reparte la carga", `
  <rect x="20" y="34" width="220" height="96" rx="8" fill="var(--sun)" fill-opacity=".25" stroke="#b45309" stroke-width="2"/>
  ${[46, 62, 78, 94, 110].map((y) => `<path d="M26 ${y} H 234" stroke="var(--pen)" stroke-width="5" stroke-linecap="round"/>`).join("")}
  ${T(130, 24, "Fibra (refuerzo) + matriz", { fs: 12, b: true })}
  ${T(130, 152, "E_c = E_f·V_f + E_m·V_m", { fs: 13, b: true, c: "var(--red)" })}
  ${T(130, 172, "regla de las mezclas (carga a lo largo de las fibras)", { fs: 10, c: "var(--muted)" })}`);

// Mapa de Ashby simplificado: módulo frente a densidad.
const ashbySVG = (() => {
  const zona = (x, y, rx, ry, c, t) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${c}" fill-opacity=".25" stroke="${c}" stroke-width="1.6"/>${T(x, y + 4, t, { fs: 10.5, b: true, c })}`;
  return marco("Mapa de Ashby simplificado: módulo de Young frente a densidad; metales arriba a la derecha, compuestos arriba con densidad media, madera en medio, polímeros abajo y espumas abajo a la izquierda", `
  <path d="M40 22 V 150 H 244" stroke="var(--muted)" stroke-width="1.6" fill="none"/>
  ${T(242, 166, "densidad (log) →", { fs: 10, a: "end", c: "var(--muted)" })}${T(44, 16, "módulo E (log) ↑", { fs: 10, a: "start", c: "var(--muted)" })}
  ${zona(76, 124, 30, 16, "var(--muted)", "espumas")}${zona(150, 112, 30, 22, "var(--leaf)", "polímeros")}
  ${zona(116, 74, 28, 14, "#b45309", "madera")}${zona(168, 46, 34, 14, "var(--pen)", "compuestos")}${zona(212, 64, 28, 18, "var(--red)", "metales")}
  <path d="M60 140 L 236 30" stroke="var(--ink)" stroke-width="1.2" stroke-dasharray="4 3"/>${T(98, 102, "E/ρ cte", { fs: 9.5, c: "var(--ink)" })}`);
})();

module.exports = {
  materia: "Tecnología e Ingeniería II",
  curso: "2-bachillerato",
  titulo: "Estructura y propiedades de los materiales",
  minutos: 115,
  objetivos: [
    "Relacionar el tipo de enlace y la estructura interna de un material con sus propiedades",
    "Describir las redes cúbica centrada en el cuerpo, cúbica centrada en las caras y hexagonal compacta y calcular sus parámetros",
    "Calcular la densidad teórica de un metal a partir de su celda unidad",
    "Explicar los defectos cristalinos y cómo las dislocaciones permiten la deformación plástica y los mecanismos de endurecimiento",
    "Aplicar las expresiones de la ley de Hooke, la dilatación térmica, la resistividad y la regla de las mezclas",
    "Seleccionar materiales con criterios técnicos, económicos y ambientales",
  ],
  claves: ["enlace metálico", "red cristalina", "celda unidad", "BCC", "FCC", "HCP", "factor de empaquetamiento", "alotropía", "vacante", "dislocación", "límite de grano", "acritud", "módulo de Young", "termoplástico", "termoestable", "material compuesto", "índice de mérito"],
  pregunta: {
    texto: "Un clip de acero se puede doblar muchas veces antes de romperse, pero un trozo de tiza o de vidrio se rompe a la primera. Si los dos son sólidos duros, ¿por qué se comportan de forma tan distinta?",
    respuesta: "Por su <mark>estructura interna</mark>. En el acero, los átomos están unidos por enlace metálico, que no tiene direcciones fijas, y forman cristales con <b>dislocaciones</b>: defectos que pueden deslizar y permiten que los planos de átomos se desplacen sin separarse. Por eso el metal se deforma plásticamente. En la tiza y el vidrio, los enlaces son iónicos o covalentes, rígidos y direccionales: no hay deslizamiento posible y la pieza se rompe de forma frágil.",
  },
  lectura: {
    titulo: "Las espadas que cambiaban con el calor",
    html: `<p>Durante siglos, los herreros sabían que una espada calentada al rojo y enfriada de golpe en agua quedaba muy dura, pero también frágil, y que si se volvía a calentar un poco se hacía más tenaz. No sabían por qué: lo atribuían a secretos de oficio, al tipo de agua o incluso a conjuros. Hoy sabemos que estaban manipulando, sin verla, la <b>estructura interna</b> del acero: la forma en que se ordenan sus átomos y cómo se reparten los de carbono.</p><p>En 1912 Max von Laue demostró que los rayos X se difractan al atravesar un cristal, y poco después William y Lawrence Bragg, padre e hijo, aprendieron a usar ese efecto para «ver» la colocación de los átomos. Descubrieron que los metales son cristales formados por celdas diminutas que se repiten millones de veces, y que pequeños defectos en esa repetición explican por qué los metales se pueden doblar, estirar o endurecer.</p><p>Comprender esa estructura ha permitido diseñar materiales a medida: aceros para rascacielos, aleaciones de titanio para prótesis o fibras de carbono más ligeras que el aluminio y más rígidas que el acero.</p>`,
  },
  bloques: [
    bloque({ h: "2.1 Estructura, propiedades y procesado", p: [
      "La ciencia de materiales se apoya en una idea central: las <mark>propiedades</mark> de un material (resistencia, conductividad, transparencia…) dependen de su <b>estructura interna</b>, y esa estructura se puede modificar con el <b>procesado</b> (fundición, laminación, tratamientos térmicos). Al final, lo que importa es el <b>comportamiento en servicio</b>: que la pieza cumpla su función durante su vida útil.",
      "La estructura se estudia a varias escalas. A escala <b>atómica</b> importan el tipo de enlace y la ordenación de los átomos (cristalina o amorfa). A escala <b>microscópica</b> (micras), los granos, las fases y los defectos, que se observan con microscopios metalográficos tras pulir y atacar químicamente la superficie. A escala <b>macroscópica</b>, la forma de la pieza, sus poros o grietas.",
      "Así se explica, por ejemplo, que el mismo acero pueda ser blando y fácil de doblar (recocido) o muy duro y frágil (templado): la composición no cambia, pero sí su estructura interna. En este tema veremos la base de esa relación; en los dos siguientes, cómo se miden las propiedades y cómo se cambian.",
    ], svg: pasos("Cadena de la ciencia de materiales: composición y enlace, estructura interna, propiedades y comportamiento en servicio", ["Composición y enlace", "Estructura interna", "Propiedades", "Comportamiento en servicio"], "var(--pen)") }),
    bloque({ h: "2.2 Los enlaces y sus consecuencias", p: [
      "En el <b>enlace metálico</b>, los átomos ceden sus electrones de valencia, que forman una «nube» común entre los cationes. Como esos electrones se mueven libremente, los metales conducen bien la electricidad y el calor, tienen brillo y, al no haber direcciones de enlace fijas, pueden deformarse sin romperse: son <b>dúctiles y maleables</b>.",
      "En el <b>enlace iónico</b> (cerámicos como la alúmina Al<sub>2</sub>O<sub>3</sub>), iones de carga opuesta se atraen con mucha fuerza: dan materiales duros, de alto punto de fusión, aislantes y frágiles, porque al desplazar un plano los iones del mismo signo quedan enfrentados y se repelen. En el <b>enlace covalente</b> (diamante, silicio, cadenas de los polímeros), los átomos comparten electrones en direcciones fijas: si forma redes tridimensionales da materiales durísimos; si forma cadenas, estas se unen entre sí por <b>enlaces secundarios</b> débiles (fuerzas de Van der Waals, puentes de hidrógeno), lo que explica que muchos plásticos se ablanden a poca temperatura.",
      "La <b>energía de enlace</b> se relaciona con el punto de fusión, el módulo de elasticidad y la dilatación: cuanto más fuerte es el enlace, mayor es la temperatura de fusión y la rigidez, y menor la dilatación térmica.",
    ], svg: rejilla("Tipos de enlace y propiedades: metálico conductor y dúctil, iónico duro y frágil, covalente muy duro y aislante, secundario débil", ["Enlace", "Ejemplo", "Propiedad"], [["Metálico", "cobre", "conduce, dúctil"], ["Iónico", "alúmina", "duro, frágil"], ["Covalente", "diamante", "durísimo, aislante"], ["Secundario", "entre cadenas", "funde a baja T"]]) }),
    bloque({ h: "2.3 Sólidos cristalinos y amorfos. La celda unidad", p: [
      "En un <mark>sólido cristalino</mark> los átomos se ordenan siguiendo un patrón que se repite en las tres direcciones del espacio: una <b>red cristalina</b>. En un <b>sólido amorfo</b> (vidrio, muchos polímeros) solo hay orden a muy corta distancia, como en un líquido «congelado». Los metales en estado sólido son casi siempre cristalinos.",
      "La <b>celda unidad</b> es el menor bloque que, repetido por traslación, reproduce toda la red. Se describe con las longitudes de sus aristas (<b>parámetros de red</b> a, b, c, del orden de décimas de nanómetro) y los ángulos entre ellas. Existen siete <b>sistemas cristalinos</b> (cúbico, tetragonal, ortorrómbico, hexagonal, romboédrico, monoclínico y triclínico) y catorce <b>redes de Bravais</b> según dónde haya átomos: solo en los vértices, también en el centro, en el centro de las caras…",
      "Para contar cuántos átomos «pertenecen» a una celda hay que tener en cuenta que un átomo del vértice se reparte entre 8 celdas (cuenta 1/8), uno de una cara entre 2 (cuenta 1/2) y uno del interior pertenece entero a la celda. El <b>número de coordinación</b> es el número de vecinos más próximos de cada átomo, y el <b>factor de empaquetamiento</b> (FE), la fracción del volumen de la celda ocupada por átomos, considerados esferas rígidas.",
      formula("FE = (n.º de átomos · volumen de un átomo) / volumen de la celda"),
    ], svg: celda("Celda cúbica simple: un átomo en cada vértice; cada uno se comparte entre ocho celdas", "cs", "Cúbica simple: 8 · 1/8 = 1 átomo"), video: V("mat-cristal", "Estructuras cristalinas en metales y aleaciones", "estructura cristalina metales") }),
    bloque({ h: "2.4 Las tres redes de los metales", p: [
      "La mayoría de los metales cristalizan en una de estas tres redes, con átomos tocándose a lo largo de ciertas direcciones:",
      "<b>Cúbica centrada en el cuerpo (BCC)</b>: un átomo en cada vértice y otro en el centro. Átomos por celda: 8 · 1/8 + 1 = <b>2</b>. Los átomos se tocan en la diagonal del cubo: 4R = a√3. Número de coordinación 8 y FE = 0,68. Ejemplos: hierro α (a temperatura ambiente), cromo, wolframio, molibdeno.",
      "<b>Cúbica centrada en las caras (FCC)</b>: átomos en los vértices y en el centro de cada cara. Átomos por celda: 8 · 1/8 + 6 · 1/2 = <b>4</b>. Se tocan en la diagonal de una cara: 4R = a√2. Número de coordinación 12 y FE = 0,74, el máximo posible para esferas iguales. Ejemplos: aluminio, cobre, níquel, oro, plata, plomo y hierro γ.",
      "<b>Hexagonal compacta (HCP)</b>: capas de esferas en hexágonos apiladas alternadamente; 6 átomos en el prisma hexagonal, coordinación 12 y FE = 0,74. Ejemplos: magnesio, cinc, titanio α, cobalto.",
      "Estas diferencias tienen consecuencias prácticas: los metales FCC tienen muchos planos de deslizamiento compactos y son muy dúctiles incluso a baja temperatura; los BCC son resistentes pero pueden volverse frágiles con el frío; los HCP tienen pocos sistemas de deslizamiento y son menos deformables en frío.",
    ], svg: celda("Celda cúbica centrada en el cuerpo: ocho átomos en los vértices y uno en el centro", "bcc", "BCC: 2 átomos · NC 8 · FE 0,68") }),
    bloque({ h: "2.5 Densidad teórica y factor de empaquetamiento", p: [
      "Conociendo la red y el parámetro a, se puede calcular la densidad de un metal sin pesarlo. La masa de la celda es el número de átomos n por la masa de un átomo (masa molar M entre el número de Avogadro N<sub>A</sub>), y su volumen, a³ en las redes cúbicas:",
      formula("ρ = n · M / (N<sub>A</sub> · a³)"),
      "Por ejemplo, el hierro α (BCC) tiene a = 0,2866 nm = 2,866 · 10<sup>−8</sup> cm y M = 55,85 g/mol: a³ = 2,354 · 10<sup>−23</sup> cm³ y ρ = 2 · 55,85 / (6,022 · 10<sup>23</sup> · 2,354 · 10<sup>−23</sup>) = <b>7,88 g/cm³</b>, prácticamente el valor medido (7,87).",
      "El factor de empaquetamiento se deduce con la relación entre a y R. En la FCC, a = 2√2 R, así que a³ = 16√2 R³ ≈ 22,63 R³, y los 4 átomos ocupan 4 · (4/3)πR³ ≈ 16,76 R³: FE = 16,76 / 22,63 = <b>0,74</b>. En la BCC, a = 4R/√3, a³ ≈ 12,32 R³ y 2 átomos ocupan 8,38 R³: FE = <b>0,68</b>. Los huecos que quedan entre los átomos se llaman <b>intersticios</b>, y en ellos se pueden alojar átomos pequeños como el carbono, el nitrógeno o el hidrógeno.",
    ], svg: celda("Celda cúbica centrada en las caras: átomos en los ocho vértices y en el centro de las seis caras", "fcc", "FCC: 4 átomos · NC 12 · FE 0,74") }),
    bloque({ h: "2.6 Alotropía: el hierro cambia de red", p: [
      "Algunos elementos pueden presentar redes cristalinas distintas según la temperatura o la presión: es la <mark>alotropía</mark> (o polimorfismo en compuestos). El ejemplo más importante en ingeniería es el hierro. Al calentarlo, el <b>hierro α</b> (BCC) se transforma a 912 °C en <b>hierro γ</b> (FCC); a 1 394 °C vuelve a ser BCC (<b>hierro δ</b>) y funde a 1 538 °C.",
      "El cambio de red implica un cambio de volumen. A 912 °C, a<sub>α</sub> = 0,2904 nm y a<sub>γ</sub> = 0,3647 nm. El volumen por átomo es 0,2904³/2 = 0,01224 nm³ en α y 0,3647³/4 = 0,01213 nm³ en γ: al pasar de α a γ el hierro se <b>contrae</b> cerca de un 1 %, a pesar de estar calentándose. Esta variación produce tensiones internas en los tratamientos térmicos y puede llegar a agrietar piezas.",
      "La alotropía del hierro es la clave de los aceros: el hierro γ, con huecos mayores, disuelve hasta un 2,1 % de carbono, mientras que el α apenas disuelve un 0,02 %. Al enfriar, el carbono «sobra» y forma nuevas fases. Otros ejemplos de alotropía son el estaño (el estaño blanco se convierte en gris y quebradizo por debajo de 13 °C, la llamada «peste del estaño»), el titanio (HCP → BCC a 882 °C) y el carbono (grafito, diamante, grafeno, fullerenos).",
    ], svg: escala("Formas alotrópicas del hierro al calentar: alfa BCC hasta 912 grados, gamma FCC hasta 1394, delta BCC hasta 1538 y después líquido", "Hierro al calentar", [["α BCC", "< 912 °C", "var(--pen)"], ["γ FCC", "912-1394", "var(--red)"], ["δ BCC", "1394-1538", "var(--sun)"], ["líquido", "> 1538 °C", "var(--muted)"]], "frío", "caliente") }),
    bloque({ h: "2.7 Defectos cristalinos", p: [
      "Ningún cristal real es perfecto, y precisamente los <mark>defectos</mark> controlan muchas propiedades. Según su dimensión se clasifican en:",
      "<b>Defectos puntuales</b>: una <b>vacante</b> (falta un átomo en su posición), un átomo <b>intersticial</b> (un átomo pequeño metido en un hueco de la red, como el carbono en el hierro) o un átomo <b>sustitucional</b> (un átomo de otro elemento ocupa la posición de uno de la red, como el níquel en el cobre). Las vacantes aumentan con la temperatura y permiten la <b>difusión</b>: el movimiento de átomos dentro del sólido, que hace posibles los tratamientos térmicos y termoquímicos.",
      "<b>Defectos lineales</b>: las <b>dislocaciones</b>, líneas a lo largo de las cuales la red está distorsionada. En la dislocación de borde hay un semiplano extra de átomos incrustado en el cristal. Un metal recocido tiene unos 10<sup>6</sup> cm de dislocaciones por cm³; uno muy deformado, hasta 10<sup>12</sup>.",
      "<b>Defectos superficiales</b>: los <b>límites de grano</b>. Un metal real es <b>policristalino</b>: está formado por muchos cristales pequeños (granos) con orientaciones distintas, y en la frontera entre ellos los átomos están desordenados. También las superficies exteriores y los límites entre fases distintas son defectos superficiales.",
    ], svg: defectosSVG, video: V("mat-defectos", "Defectos en estructuras cristalinas", "defectos estructuras cristalinas") }),
    bloque({ h: "2.8 Deformación plástica y endurecimiento", p: [
      "Si para deformar un metal hubiera que desplazar a la vez un plano entero de átomos, la tensión necesaria sería entre 100 y 1 000 veces mayor que la real. Los metales se deforman con facilidad porque lo que se mueve son las <b>dislocaciones</b>: el semiplano extra va cambiando de pareja de enlace en enlace, como quien desplaza una alfombra arrastrando una arruga, y al salir de la pieza deja un escalón de un átomo. Ese movimiento es el <mark>deslizamiento</mark>, y ocurre en los planos y direcciones más compactos.",
      "Por tanto, para <b>endurecer</b> un metal (aumentar su límite elástico) hay que poner obstáculos al movimiento de las dislocaciones. Los mecanismos principales son cuatro:",
      "<b>Deformación en frío o acritud</b>: al deformar, las dislocaciones se multiplican y se enredan entre sí; el metal se vuelve más duro y resistente pero menos dúctil (por eso un alambre se rompe tras doblarlo varias veces). <b>Afino de grano</b>: los límites de grano frenan las dislocaciones, así que cuanto más pequeño es el grano, más resistente es el metal (y además más tenaz). <b>Solución sólida</b>: los átomos de soluto distorsionan la red y dificultan el deslizamiento (el latón es más duro que el cobre). <b>Precipitación</b>: partículas finísimas de una segunda fase bloquean las dislocaciones (aleaciones de aluminio de aviación).",
      "La acritud se elimina con un <b>recocido de recristalización</b>: al calentar, se forman granos nuevos sin dislocaciones y el metal recupera la ductilidad.",
    ], svg: dislocSVG }),
    bloque({ h: "2.9 Solidificación y tamaño de grano", p: [
      "Cuando un metal líquido se enfría por debajo de su temperatura de fusión, empiezan a formarse pequeños cristales: es la <b>nucleación</b>. Después, cada núcleo <b>crece</b> añadiendo átomos del líquido, a menudo en forma de ramas llamadas <b>dendritas</b>, hasta que choca con los cristales vecinos. Cada núcleo da lugar a un grano, y las fronteras entre ellos son los límites de grano.",
      "El tamaño final de grano depende de cuántos núcleos se forman y de lo rápido que crecen. Un <b>enfriamiento rápido</b> (molde metálico frío) forma muchos núcleos y da <b>grano fino</b>; un enfriamiento lento (molde de arena) da grano grueso. También se añaden <b>afinadores</b> (pequeñas partículas que actúan como núcleos) a las aleaciones de aluminio.",
      "En un lingote grande se distinguen tres zonas: una capa exterior de granos finos (enfriamiento muy rápido junto a la pared), una zona de granos alargados o columnares que crecen hacia el centro siguiendo el flujo de calor, y un núcleo de granos equiaxiales. Además, el metal se contrae al solidificar y aparecen <b>rechupes</b> y porosidades, defectos que se evitan con un buen diseño del molde. Como el grano fino mejora a la vez resistencia y tenacidad, controlar la solidificación y la recristalización es una tarea esencial en la industria metalúrgica.",
    ], svg: granosSVG }),
    bloque({ h: "2.10 Propiedades mecánicas: tensión y deformación", p: [
      "Para comparar materiales independientemente del tamaño de la pieza se usa la <mark>tensión</mark> σ (fuerza por unidad de sección) y la <b>deformación unitaria</b> ε (alargamiento relativo):",
      formula("σ = F / S<sub>0</sub> (Pa = N/m²; en técnica, MPa = N/mm²) &nbsp;&nbsp; ε = ΔL / L<sub>0</sub>"),
      "Mientras la deformación es <b>elástica</b>, la pieza recupera su forma al quitar la carga y la tensión es proporcional a la deformación (<b>ley de Hooke</b>). La constante es el <b>módulo de Young</b> o de elasticidad E, que mide la rigidez y depende sobre todo del enlace: unos 210 GPa en el acero, 70 GPa en el aluminio, 3 GPa en el nailon.",
      formula("σ = E · ε"),
      "Por encima del <b>límite elástico</b> empieza la deformación <b>plástica</b>, permanente. Otras propiedades mecánicas que se repasarán en los ensayos son la <b>resistencia a la tracción</b> (tensión máxima), la <b>ductilidad</b> (deformación antes de romper), la <b>dureza</b> (resistencia a ser rayado o penetrado), la <b>tenacidad</b> (energía absorbida antes de romper) y la <b>fatiga</b> (rotura con cargas repetidas). Ejemplo: una barra de acero de 2 m sometida a 100 MPa se alarga ε = 100 / 210 000 = 4,76 · 10<sup>−4</sup>, es decir, ΔL = 0,95 mm.",
    ], svg: barras("Módulo de Young de varios materiales en gigapascales: diamante 1000, acero 210, cobre 120, aluminio 70, vidrio 70, hormigón 30, madera 11 y nailon 3", "Módulo de Young E (GPa)", [["Diamante", 1000, "var(--muted)", "1 000"], ["Acero", 210, "var(--red)"], ["Cobre", 120, "#b45309"], ["Aluminio", 70, "var(--pen)"], ["Hormigón", 30, "var(--muted)"], ["Madera", 11, "var(--leaf)"], ["Nailon", 3, "var(--sun)"]]) }),
    bloque({ h: "2.11 Propiedades térmicas, eléctricas y magnéticas", p: [
      "La <b>dilatación térmica</b> es el aumento de tamaño al calentar. En una dimensión, el alargamiento es proporcional a la longitud inicial y al incremento de temperatura, con el <b>coeficiente de dilatación lineal</b> α (unos 12 · 10<sup>−6</sup> K<sup>−1</sup> en el acero, 23 · 10<sup>−6</sup> en el aluminio). Por eso los puentes y las vías tienen juntas de dilatación.",
      formula("ΔL = α · L<sub>0</sub> · ΔT"),
      "La <b>conductividad térmica</b> indica la facilidad para transmitir calor (alta en metales, muy baja en espumas y lana mineral), y el <b>calor específico</b>, la energía necesaria para calentar 1 kg en 1 K. Los cerámicos refractarios soportan altas temperaturas y resisten el <b>choque térmico</b> si dilatan poco.",
      "La <b>resistividad</b> ρ mide la oposición al paso de corriente: 1,7 · 10<sup>−8</sup> Ω·m en el cobre y más de 10<sup>12</sup> Ω·m en los aislantes. La resistencia de un conductor es R = ρ · L / S. En los metales, la resistividad aumenta con la temperatura (y con las impurezas y la acritud); en los <b>semiconductores</b> (silicio) disminuye, y se ajusta añadiendo impurezas (dopado). Algunos materiales son <b>superconductores</b> a muy baja temperatura.",
      "Por su comportamiento magnético, los materiales son <b>ferromagnéticos</b> (hierro, níquel, cobalto y sus aleaciones, que se imantan con fuerza), <b>paramagnéticos</b> (débil atracción) o <b>diamagnéticos</b> (débil repulsión). Los ferromagnéticos blandos se usan en núcleos de transformadores y los duros, en imanes permanentes.",
    ], svg: ficha("Fórmulas de propiedades físicas: dilatación lineal, resistencia de un conductor y variación de la resistencia con la temperatura", "Propiedades físicas", ["ΔL = α · L₀ · ΔT", "R = ρ · L / S", "R = R₀ (1 + α_R · ΔT)"], "#b45309") }),
    bloque({ h: "2.12 Los polímeros", p: [
      "Los <mark>polímeros</mark> son materiales formados por macromoléculas: largas cadenas de miles de unidades repetidas (<b>monómeros</b>) unidas por enlaces covalentes, con átomos de carbono e hidrógeno y a veces oxígeno, nitrógeno, cloro o flúor. El <b>grado de polimerización</b> es el número de monómeros por cadena: un polietileno de masa molar 140 000 g/mol, con monómero C<sub>2</sub>H<sub>4</sub> de 28 g/mol, tiene 5 000 unidades por cadena.",
      "Según cómo se unen las cadenas se distinguen tres familias. Los <b>termoplásticos</b> (polietileno PE, polipropileno PP, PVC, PET, PLA) tienen cadenas sueltas unidas por enlaces secundarios: se ablandan al calentar y se pueden moldear y <b>reciclar</b> muchas veces. Los <b>termoestables</b> (resinas epoxi, fenólicas, poliéster) forman una red tridimensional con enlaces cruzados: son rígidos, resisten mejor el calor y no se pueden volver a fundir. Los <b>elastómeros</b> (caucho, siliconas, neopreno) tienen pocos enlaces cruzados: pueden estirarse varias veces su longitud y recuperarla.",
      "Los polímeros pueden ser amorfos o parcialmente cristalinos. Por debajo de su <b>temperatura de transición vítrea</b> T<sub>g</sub> son rígidos y frágiles; por encima, blandos y flexibles (un globo de caucho se rompe como el vidrio si se enfría con nitrógeno líquido). Sus propiedades se modifican con <b>aditivos</b>: plastificantes, cargas, fibras, colorantes, retardantes de llama o estabilizantes frente a la luz ultravioleta.",
    ], svg: polimeroSVG, video: V("mat-plasticos", "Tipos de plásticos: termoplásticos, termoestables y elastómeros", "polímeros termoplásticos termoestables") }),
    bloque({ h: "2.13 Cerámicos, vidrios y materiales compuestos", p: [
      "Los <b>cerámicos</b> son compuestos inorgánicos de metales y no metales (óxidos, carburos, nitruros, silicatos) con enlaces iónicos y covalentes. Son duros, refractarios, aislantes y resistentes a la corrosión, pero frágiles: cualquier poro o grieta concentra las tensiones. Se fabrican compactando polvos y <b>sinterizando</b> a alta temperatura. Junto a la cerámica tradicional (ladrillos, porcelana) están los <b>cerámicos técnicos</b>: alúmina para aislantes, carburo de silicio para frenos y abrasivos, circona para implantes dentales. Los <b>vidrios</b> son cerámicos amorfos a base de sílice que se conforman en caliente.",
      "Un <mark>material compuesto</mark> combina dos o más materiales distintos para obtener propiedades que ninguno tiene por separado. Consta de una <b>matriz</b> continua (polimérica, metálica o cerámica), que da forma y protege, y de un <b>refuerzo</b> (fibras o partículas), que aporta resistencia y rigidez. Ejemplos: el hormigón armado, la fibra de vidrio con poliéster, la fibra de carbono con epoxi (CFRP) de aviones y bicicletas, y la madera, un compuesto natural de fibras de celulosa en lignina.",
      "Cuando la carga actúa a lo largo de las fibras, el módulo del compuesto se estima con la <b>regla de las mezclas</b>, ponderando cada componente con su fracción de volumen V: con un 40 % de fibra de vidrio (72 GPa) en epoxi (3 GPa), E<sub>c</sub> = 0,4 · 72 + 0,6 · 3 = 30,6 GPa. Los compuestos son muy <b>anisótropos</b>: perpendicularmente a las fibras son mucho menos resistentes, por eso se apilan capas con distintas orientaciones.",
    ], svg: compuestoSVG, video: V("mat-compuestos", "Materiales compuestos: tipos y clasificación", "materiales compuestos") }),
    bloque({ h: "2.14 Nuevos materiales y selección", p: [
      "La investigación en materiales avanza muy deprisa. Algunos ejemplos: las <b>aleaciones con memoria de forma</b> (níquel-titanio), que recuperan su forma original al calentarse y se usan en ortodoncia y en stents; los <b>materiales piezoeléctricos</b>, que generan tensión eléctrica al deformarse (sensores, encendedores); el <b>grafeno</b>, una lámina de carbono de un átomo de espesor, muy resistente y conductora; los <b>biomateriales</b> compatibles con el cuerpo humano, y los <b>metamateriales</b> con estructuras diseñadas a medida.",
      "Para <b>seleccionar</b> un material se tienen en cuenta las solicitaciones (cargas, temperatura, ambiente), la facilidad de fabricación, el coste y el impacto ambiental. Una herramienta muy útil son los <b>mapas de Ashby</b>, que representan dos propiedades (por ejemplo, módulo de Young y densidad) y agrupan cada familia de materiales en una zona. Con ellos se compara un <b>índice de mérito</b>: para un tirante ligero y rígido interesa el mayor E/ρ; el acero (210/7,8 ≈ 27) y el aluminio (70/2,7 ≈ 26) quedan casi empatados, mientras que el CFRP (150/1,6 ≈ 94) los supera con mucho.",
      "Hoy la selección incluye criterios de <b>sostenibilidad</b>: la energía y las emisiones necesarias para producir el material (energía embebida), su reciclabilidad, su toxicidad y la escasez de materias primas críticas (litio, cobalto, tierras raras). El ecodiseño busca reducir la cantidad de material, usar materiales reciclados y facilitar el desmontaje al final de la vida útil.",
    ], svg: ashbySVG }),
  ],
  figura: figura("Estructura y propiedades", "Enlace, redes cristalinas, defectos y familias de materiales", [["Enlace", "metálico · iónico", "covalente · secundario"], ["Redes", "BCC · FCC · HCP", "ρ = nM / (N_A a³)"], ["Defectos", "vacante · dislocación", "límite de grano"], ["Familias", "metales · polímeros", "cerámicos · compuestos"]], "var(--pen)"),
  video: V("mat-cristal", "Estructuras cristalinas en metales y aleaciones", "estructura cristalina metales"),
  ejemplos: [
    { enunciado: "El cobre cristaliza en FCC con un radio atómico de 0,128 nm. Calcula el parámetro de red y su densidad (M = 63,55 g/mol).", pasos: ["En FCC los átomos se tocan en la diagonal de la cara: 4R = a√2 → a = 2√2 · 0,128 = 0,362 nm.", "a³ = (3,62 · 10<sup>−8</sup> cm)³ = 4,745 · 10<sup>−23</sup> cm³.", "ρ = 4 · 63,55 / (6,022 · 10<sup>23</sup> · 4,745 · 10<sup>−23</sup>) = 254,2 / 28,57."], resultado: "a = 0,362 nm; ρ ≈ 8,90 g/cm³." },
    { enunciado: "Calcula el radio atómico del hierro α (BCC, a = 0,2866 nm) y el número de átomos que hay en 1 mm³.", pasos: ["En BCC: 4R = a√3 → R = √3 · 0,2866 / 4 = 0,1241 nm.", "1 mm³ = 10<sup>18</sup> nm³; volumen de una celda: 0,2866³ = 0,02354 nm³.", "Celdas: 10<sup>18</sup> / 0,02354 = 4,25 · 10<sup>19</sup>; átomos = 2 · 4,25 · 10<sup>19</sup>."], resultado: "R = 0,124 nm; unos 8,5 · 10<sup>19</sup> átomos en cada milímetro cúbico." },
    { enunciado: "Demuestra que el factor de empaquetamiento de la BCC es 0,68.", pasos: ["Átomos por celda: 2. Relación: a = 4R/√3, a³ = 64R³/(3√3) = 12,32 R³.", "Volumen ocupado: 2 · (4/3)πR³ = 8,38 R³.", "FE = 8,38 / 12,32."], resultado: "FE = 0,68: el 68 % del volumen está ocupado y el 32 % son huecos." },
    { enunciado: "Una barra de aluminio (E = 70 GPa) de 1,5 m y 20 mm de diámetro soporta una tracción de 15 kN. Calcula la tensión, la deformación y el alargamiento.", pasos: ["S = π · 10² = 314,2 mm².", "σ = 15 000 / 314,2 = 47,7 MPa.", "ε = σ / E = 47,7 / 70 000 = 6,82 · 10<sup>−4</sup>; ΔL = ε · L<sub>0</sub> = 6,82 · 10<sup>−4</sup> · 1 500 mm."], resultado: "σ = 47,7 MPa; ε = 6,8 · 10<sup>−4</sup>; ΔL ≈ 1,02 mm." },
    { enunciado: "Un compuesto tiene un 60 % en volumen de fibra de carbono (E = 230 GPa, ρ = 1,8 g/cm³) en epoxi (E = 3 GPa, ρ = 1,2 g/cm³). Calcula su módulo longitudinal, su densidad y su E/ρ.", pasos: ["E<sub>c</sub> = 0,6 · 230 + 0,4 · 3 = 138 + 1,2 = 139,2 GPa.", "ρ<sub>c</sub> = 0,6 · 1,8 + 0,4 · 1,2 = 1,08 + 0,48 = 1,56 g/cm³.", "E/ρ = 139,2 / 1,56."], resultado: "E<sub>c</sub> ≈ 139 GPa, ρ ≈ 1,56 g/cm³ y E/ρ ≈ 89, más de tres veces el del acero (≈ 27)." },
    { enunciado: "Un cable de cobre (ρ = 1,7 · 10<sup>−8</sup> Ω·m) de 100 m y 1,5 mm² de sección se calienta de 20 °C a 70 °C. Calcula su resistencia a 20 °C y a 70 °C (α<sub>R</sub> = 0,0039 K<sup>−1</sup>).", pasos: ["R<sub>20</sub> = ρL/S = 1,7 · 10<sup>−8</sup> · 100 / 1,5 · 10<sup>−6</sup> = 1,13 Ω.", "R<sub>70</sub> = R<sub>20</sub>(1 + α<sub>R</sub>ΔT) = 1,13 · (1 + 0,0039 · 50) = 1,13 · 1,195."], resultado: "R<sub>20</sub> = 1,13 Ω y R<sub>70</sub> ≈ 1,35 Ω (un 19,5 % más)." },
  ],
  errores: [
    "Contar todos los átomos dibujados en la celda: los de los vértices valen 1/8 y los de las caras 1/2.",
    "Usar la arista del cubo como distancia entre átomos que se tocan: en BCC se tocan en la diagonal del cubo y en FCC en la diagonal de la cara.",
    "Olvidar pasar el parámetro de red de nanómetros a centímetros al calcular la densidad en g/cm³ (1 nm = 10<sup>−7</sup> cm).",
    "Pensar que un metal es más resistente cuanto más perfecto es su cristal: los metales reales se endurecen precisamente añadiendo obstáculos a las dislocaciones.",
    "Confundir rigidez (módulo de Young) con resistencia (límite elástico o de rotura): un material puede ser muy rígido y romper con poca carga, como el vidrio.",
    "Creer que todos los plásticos se pueden reciclar fundiéndolos: los termoestables no se funden.",
  ],
  ejercicios: [
    B("Explica por qué los metales son buenos conductores eléctricos y los cerámicos no.", "En el enlace metálico los electrones de valencia forman una nube que se mueve libremente y transporta la carga. En los cerámicos, los electrones están localizados en enlaces iónicos o covalentes y no pueden moverse."),
    B("¿Cuántos átomos tiene una celda BCC y una FCC? Justifícalo.", "BCC: 8 vértices · 1/8 + 1 central = 2. FCC: 8 · 1/8 + 6 caras · 1/2 = 1 + 3 = 4."),
    B("Indica el número de coordinación y el factor de empaquetamiento de las redes BCC, FCC y HCP.", "BCC: 8 y 0,68. FCC: 12 y 0,74. HCP: 12 y 0,74."),
    B("Clasifica en BCC, FCC o HCP: aluminio, hierro α, cobre, magnesio, wolframio, cinc, oro y cromo.", "BCC: hierro α, wolframio, cromo. FCC: aluminio, cobre, oro. HCP: magnesio, cinc."),
    B("¿Qué es la alotropía? Pon dos ejemplos.", "Capacidad de un elemento de presentar distintas estructuras cristalinas según la temperatura o la presión. Hierro (α BCC, γ FCC, δ BCC) y carbono (grafito y diamante)."),
    B("Nombra y define los tres tipos de defectos puntuales.", "Vacante: falta un átomo. Intersticial: un átomo ocupa un hueco entre los átomos de la red. Sustitucional: un átomo de otro elemento ocupa la posición de uno de la red."),
    B("¿Por qué un alambre de cobre se vuelve más duro y acaba rompiéndose si se dobla muchas veces?", "Por acritud: la deformación en frío multiplica las dislocaciones, que se enredan y frenan el deslizamiento. El cobre gana dureza pero pierde ductilidad hasta romperse."),
    B("¿Qué tipo de enfriamiento da un grano más fino al solidificar, rápido o lento? ¿Por qué interesa?", "El rápido, porque forma muchos núcleos. Interesa porque el grano fino aumenta a la vez la resistencia y la tenacidad."),
    B("Una pieza de acero (E = 210 GPa) soporta 168 MPa. ¿Qué deformación unitaria tiene si está en zona elástica?", "ε = σ/E = 168 / 210 000 = 8 · 10<sup>−4</sup> (0,08 %)."),
    B("Una vía de acero (α = 12 · 10<sup>−6</sup> K<sup>−1</sup>) mide 30 m a 0 °C. ¿Cuánto se alarga a 40 °C?", "ΔL = 12 · 10<sup>−6</sup> · 30 · 40 = 0,0144 m = 14,4 mm."),
    B("Distingue termoplásticos, termoestables y elastómeros por su estructura y pon un ejemplo de cada uno.", "Termoplásticos: cadenas sueltas, se funden y reciclan (PET). Termoestables: red rígida con muchos enlaces cruzados, no se funden (resina epoxi). Elastómeros: pocos enlaces cruzados, muy elásticos (caucho)."),
    B("¿Qué partes tiene un material compuesto y qué función cumple cada una?", "La matriz, continua, da forma, protege y transmite la carga; el refuerzo (fibras o partículas) aporta resistencia y rigidez."),
    M("Calcula la densidad del aluminio (FCC, a = 0,4049 nm, M = 26,98 g/mol).", "a³ = (4,049 · 10<sup>−8</sup>)³ = 6,638 · 10<sup>−23</sup> cm³. ρ = 4 · 26,98 / (6,022 · 10<sup>23</sup> · 6,638 · 10<sup>−23</sup>) = 107,9 / 39,97 = 2,70 g/cm³."),
    M("El wolframio es BCC con R = 0,137 nm y M = 183,8 g/mol. Calcula a y ρ.", "a = 4R/√3 = 4 · 0,137 / 1,732 = 0,3164 nm. a³ = 3,167 · 10<sup>−23</sup> cm³. ρ = 2 · 183,8 / (6,022 · 10<sup>23</sup> · 3,167 · 10<sup>−23</sup>) = 367,6 / 19,07 = 19,3 g/cm³."),
    M("Un metal tiene ρ = 8,90 g/cm³, M = 58,69 g/mol y a = 0,3524 nm en red cúbica. ¿Es BCC o FCC?", "n = ρ · N<sub>A</sub> · a³ / M = 8,90 · 6,022 · 10<sup>23</sup> · 4,376 · 10<sup>−23</sup> / 58,69 = 234,5 / 58,69 ≈ 4. Es FCC (se trata del níquel)."),
    M("Demuestra que el factor de empaquetamiento de la FCC es 0,74.", "a = 2√2 R; a³ = 16√2 R³ = 22,63 R³. Volumen de 4 átomos: 4 · (4/3)π R³ = 16,76 R³. FE = 16,76 / 22,63 = 0,74."),
    M("Con a<sub>α</sub> = 0,2904 nm y a<sub>γ</sub> = 0,3647 nm a 912 °C, calcula el cambio porcentual de volumen al pasar de hierro α a γ.", "Volumen por átomo: α = 0,2904³/2 = 0,012245 nm³; γ = 0,3647³/4 = 0,012127 nm³. Variación: (0,012127 − 0,012245)/0,012245 = −0,96 %. Se contrae cerca de un 1 %."),
    M("Explica por qué el carbono se disuelve mejor en el hierro γ que en el α, aunque la red FCC sea más compacta.", "Aunque la FCC tenga menos volumen libre total, sus huecos intersticiales son menos numerosos pero más grandes (el octaédrico tiene radio ≈ 0,41R), y en ellos cabe mejor el átomo de carbono. En la BCC el espacio libre está repartido en muchos huecos pequeños."),
    M("Explica cuatro mecanismos para aumentar el límite elástico de un metal y el principio común a todos.", "Acritud (más dislocaciones enredadas), afino de grano (más límites de grano), solución sólida (átomos que distorsionan la red) y precipitación (partículas de segunda fase). Todos dificultan el movimiento de las dislocaciones."),
    M("Una varilla de cobre (E = 120 GPa) de 2 m y 10 mm² se alarga 1,2 mm bajo carga. ¿Qué fuerza actúa, si está en zona elástica?", "ε = 1,2 / 2 000 = 6 · 10<sup>−4</sup>. σ = E·ε = 120 000 · 6 · 10<sup>−4</sup> = 72 MPa. F = σ · S = 72 · 10 = 720 N."),
    M("Un puente de 400 m tiene juntas de dilatación. Si α = 12 · 10<sup>−6</sup> K<sup>−1</sup> y la temperatura varía entre −10 °C y 50 °C, ¿qué holgura total deben absorber las juntas?", "ΔL = 12 · 10<sup>−6</sup> · 400 · 60 = 0,288 m = 288 mm entre todas las juntas."),
    M("Un hilo de nicrom (ρ = 1,1 · 10<sup>−6</sup> Ω·m) de 0,5 mm de diámetro debe tener 22 Ω. ¿Qué longitud hace falta?", "S = π · 0,25² = 0,196 mm² = 1,96 · 10<sup>−7</sup> m². L = R·S/ρ = 22 · 1,96 · 10<sup>−7</sup> / 1,1 · 10<sup>−6</sup> = 3,93 m."),
    M("Un PVC tiene masa molar media 62 500 g/mol. El monómero es C<sub>2</sub>H<sub>3</sub>Cl. Calcula el grado de polimerización.", "M monómero = 2 · 12 + 3 · 1 + 35,5 = 62,5 g/mol. n = 62 500 / 62,5 = 1 000."),
    M("Calcula el módulo y la densidad de un compuesto de 30 % de fibra de vidrio (72 GPa; 2,5 g/cm³) en poliéster (3,5 GPa; 1,2 g/cm³).", "E = 0,3 · 72 + 0,7 · 3,5 = 21,6 + 2,45 = 24,05 GPa. ρ = 0,3 · 2,5 + 0,7 · 1,2 = 0,75 + 0,84 = 1,59 g/cm³."),
    A("Un fabricante necesita un tirante de 1 m que no se alargue más de 0,5 mm con 20 kN y debe pesar lo menos posible. Compara acero (E = 210 GPa, ρ = 7,8 g/cm³) y aluminio (E = 70 GPa, ρ = 2,7 g/cm³).", "ε máx = 5 · 10<sup>−4</sup>. Sección mínima: S = F/(E·ε). Acero: 20 000 / (210 000 · 5 · 10<sup>−4</sup>) = 190,5 mm² → masa = 190,5 · 1 000 · 7,8 · 10<sup>−3</sup> = 1 486 g. Aluminio: 20 000 / 35 = 571,4 mm² → masa = 571,4 · 2,7 = 1 543 g. Pesan casi lo mismo (E/ρ es casi igual): se elegiría por coste o corrosión."),
    A("Repite el ejercicio anterior con CFRP (E = 140 GPa, ρ = 1,6 g/cm³) e indica qué índice de mérito permite decidirlo sin calcular secciones.", "S = 20 000 / (140 000 · 5 · 10<sup>−4</sup>) = 285,7 mm² → masa = 285,7 · 1,6 = 457 g, tres veces menos. El índice es E/ρ: la masa es inversamente proporcional a él (acero 27, aluminio 26, CFRP 87,5)."),
    A("El hierro γ (FCC) tiene a = 0,3591 nm a cierta temperatura. Calcula el radio del átomo de hierro y el radio máximo de un átomo que cabe en el hueco octaédrico (en el centro de la arista, la distancia entre átomos vecinos es a).", "R = a√2/4 = 0,3591 · 1,414 / 4 = 0,1270 nm. Hueco en el centro de la arista: 2R + 2r = a → r = (0,3591 − 0,2540)/2 = 0,0526 nm. El carbono (≈ 0,077 nm) es mayor: distorsiona la red al alojarse, lo que limita su solubilidad al 2,1 %."),
    A("Explica qué le ocurre a la resistividad de un hilo de cobre que se trefila en frío y después se recuece, y por qué.", "Al trefilar en frío aumentan las dislocaciones y los defectos, que dispersan los electrones: la resistividad sube un poco. Al recocer, la recristalización elimina defectos y la resistividad vuelve a bajar. Por eso el cobre para bobinados se usa recocido."),
    A("Un compuesto unidireccional de 50 % de fibra se carga perpendicularmente a las fibras. Con el modelo en serie 1/E = V<sub>f</sub>/E<sub>f</sub> + V<sub>m</sub>/E<sub>m</sub>, calcula E transversal con E<sub>f</sub> = 230 GPa y E<sub>m</sub> = 3 GPa, y compáralo con el longitudinal.", "1/E = 0,5/230 + 0,5/3 = 0,00217 + 0,1667 = 0,1688 → E = 5,9 GPa. Longitudinal: 0,5 · 230 + 0,5 · 3 = 116,5 GPa. Es unas 20 veces menor: el compuesto es muy anisótropo."),
    A("Razona qué material elegirías para: a) un disco de freno de alta gama; b) una prótesis de cadera; c) una carcasa de móvil reciclable. Justifica con propiedades.", "a) Cerámico de carburo de silicio reforzado con fibra de carbono: resiste altas temperaturas, desgaste y choque térmico. b) Aleación de titanio (biocompatible, ligera, resistente a la corrosión) con cabeza cerámica de circona o alúmina (dureza, poco desgaste). c) Termoplástico como policarbonato o aluminio reciclado: se moldean bien y se reciclan."),
    A("Una placa de aluminio de 1 m × 1 m (α = 23 · 10<sup>−6</sup> K<sup>−1</sup>) tiene un agujero de 50,00 mm a 20 °C. ¿Qué diámetro tiene a 220 °C? ¿Entraría un eje de acero de 50,15 mm?", "El agujero se dilata como el material: D = 50,00 · (1 + 23 · 10<sup>−6</sup> · 200) = 50,00 · 1,0046 = 50,23 mm. Sí entra el eje (ajuste por dilatación); al enfriar, la placa lo aprieta (ajuste con apriete)."),
  ],
  quiz: [
    q4("Las propiedades de un material dependen sobre todo de…", ["su color", "su estructura interna", "su precio", "su forma exterior"], 1, "Estructura, propiedades y procesado."),
    q4("El enlace que explica la ductilidad de los metales es el…", ["iónico", "covalente", "metálico", "de hidrógeno"], 2, "Sin direcciones fijas."),
    q4("Un sólido amorfo…", ["tiene orden a larga distancia", "solo tiene orden a corta distancia", "siempre es metálico", "no existe"], 1, "Como el vidrio."),
    q4("Un átomo en el vértice de una celda cúbica cuenta como…", ["1", "1/2", "1/4", "1/8"], 3, "Lo comparten 8 celdas."),
    q4("La celda BCC contiene…", ["1 átomo", "2 átomos", "4 átomos", "6 átomos"], 1, "8 · 1/8 + 1."),
    q4("En la red FCC, los átomos se tocan en…", ["la arista", "la diagonal de la cara", "la diagonal del cubo", "el centro"], 1, "4R = a√2."),
    q4("El factor de empaquetamiento de la FCC es…", ["0,52", "0,68", "0,74", "1"], 2, "Máximo para esferas iguales."),
    q4("El número de coordinación de la BCC es…", ["6", "8", "12", "4"], 1, "El átomo central toca 8 vértices."),
    q4("El hierro a temperatura ambiente es…", ["FCC", "BCC", "HCP", "amorfo"], 1, "Hierro α."),
    q4("A 912 °C el hierro α se transforma en…", ["hierro δ", "hierro γ (FCC)", "líquido", "grafito"], 1, "Y se contrae un 1 %."),
    q4("Una dislocación es un defecto…", ["puntual", "lineal", "superficial", "de volumen"], 1, "Una línea de distorsión."),
    q4("El movimiento de átomos dentro de un sólido se llama…", ["deslizamiento", "difusión", "nucleación", "sinterización"], 1, "Gracias a las vacantes."),
    q4("La acritud se produce por…", ["calentamiento", "deformación en frío", "corrosión", "fusión"], 1, "Multiplica las dislocaciones."),
    q4("Reducir el tamaño de grano…", ["debilita el metal", "aumenta resistencia y tenacidad", "solo cambia el color", "aumenta la conductividad"], 1, "Más límites que frenan dislocaciones."),
    q4("La ley de Hooke es…", ["σ = E · ε", "ε = E · σ", "σ = F · S", "E = σ + ε"], 0, "En zona elástica."),
    q4("El módulo de Young mide…", ["la resistencia", "la rigidez", "la dureza", "la ductilidad"], 1, "Depende del enlace."),
    q4("Un plástico que no se puede volver a fundir es un…", ["termoplástico", "termoestable", "elastómero lineal", "polímero amorfo"], 1, "Red tridimensional."),
    q4("Por debajo de su T<sub>g</sub> un polímero es…", ["líquido", "rígido y frágil", "elástico", "conductor"], 1, "Como un vidrio."),
    q4("En un compuesto, la matriz…", ["da rigidez", "une y protege el refuerzo", "es siempre metálica", "se pone solo en la superficie"], 1, "Reparte la carga."),
    q4("Para un tirante ligero y rígido, el índice de mérito es…", ["E · ρ", "E / ρ", "ρ / E", "σ / E"], 1, "Más rigidez por kilo."),
  ],
  examen: [
    q4("Un metal FCC con R = 0,144 nm tiene un parámetro a de…", ["0,333 nm", "0,407 nm", "0,288 nm", "0,576 nm"], 1, "a = 2√2 · 0,144."),
    q4("Un metal BCC con a = 0,33 nm tiene un radio de…", ["0,117 nm", "0,143 nm", "0,165 nm", "0,191 nm"], 1, "R = √3 · 0,33/4."),
    q4("ρ = n·M/(N<sub>A</sub>·a³) con n = 2, M = 52 g/mol y a³ = 2,4 · 10<sup>−23</sup> cm³ da…", ["3,6 g/cm³", "7,2 g/cm³", "14,4 g/cm³", "1,8 g/cm³"], 1, "104/14,45."),
    q4("Una barra de acero (E = 200 GPa) con σ = 100 MPa tiene una deformación de…", ["5 · 10<sup>−4</sup>", "2 · 10<sup>−3</sup>", "0,5", "5 · 10<sup>−2</sup>"], 0, "100/200 000."),
    q4("Una tubería de aluminio de 10 m (α = 23 · 10<sup>−6</sup> K<sup>−1</sup>) se calienta 50 K. Se alarga…", ["1,15 mm", "11,5 mm", "115 mm", "0,115 mm"], 1, "23 · 10<sup>−6</sup> · 10 000 mm · 50."),
    q4("Compuesto con 40 % de fibra (100 GPa) y 60 % de matriz (5 GPa). E longitudinal:", ["43 GPa", "52,5 GPa", "40 GPa", "105 GPa"], 0, "40 + 3."),
    q4("Un polímero de 84 000 g/mol con monómero de 28 g/mol tiene un grado de polimerización de…", ["300", "3 000", "30 000", "2 352"], 1, "84 000/28."),
    q4("¿Cuál NO endurece un metal?", ["deformación en frío", "afino de grano", "recocido de recristalización", "precipitación"], 2, "El recocido lo ablanda."),
  ],
  feynman: ["Por qué los metales se pueden doblar y los cerámicos se rompen", "Cómo se cuentan los átomos de una celda BCC y de una FCC", "Cómo se calcula la densidad de un metal a partir de su red", "Qué son las dislocaciones y cómo se endurece un metal", "En qué se diferencian termoplásticos, termoestables y compuestos"],
  glosario: [
    ["Red cristalina", "Ordenación periódica de los átomos en las tres direcciones del espacio."],
    ["Celda unidad", "Bloque mínimo que, repetido por traslación, reproduce toda la red."],
    ["Parámetro de red", "Longitud de la arista de la celda unidad."],
    ["Número de coordinación", "Número de vecinos más próximos de un átomo."],
    ["Factor de empaquetamiento", "Fracción del volumen de la celda ocupada por átomos."],
    ["BCC", "Red cúbica centrada en el cuerpo: 2 átomos por celda, FE 0,68."],
    ["FCC", "Red cúbica centrada en las caras: 4 átomos por celda, FE 0,74."],
    ["Alotropía", "Existencia de un elemento con distintas redes cristalinas según la temperatura o la presión."],
    ["Vacante", "Posición de la red en la que falta un átomo."],
    ["Dislocación", "Defecto lineal cuyo movimiento produce la deformación plástica."],
    ["Límite de grano", "Frontera entre dos cristales con distinta orientación."],
    ["Acritud", "Endurecimiento de un metal por deformación en frío."],
    ["Difusión", "Movimiento de los átomos dentro de un sólido."],
    ["Módulo de Young", "Cociente entre tensión y deformación en la zona elástica; mide la rigidez."],
    ["Resistividad", "Propiedad que mide la oposición de un material al paso de la corriente."],
    ["Temperatura de transición vítrea", "Temperatura por debajo de la cual un polímero es rígido y frágil."],
    ["Material compuesto", "Combinación de una matriz y un refuerzo con propiedades que no tienen por separado."],
    ["Índice de mérito", "Combinación de propiedades que se maximiza al seleccionar un material."],
  ],
  situacion: {
    titulo: "El cuadro de bicicleta más eficiente",
    reto: "Una pequeña empresa quiere lanzar una bicicleta urbana y duda entre fabricar el cuadro en acero, aluminio, titanio o fibra de carbono. Vuestro equipo elaborará un informe técnico para elegir el material con criterios de rigidez, peso, coste y sostenibilidad.",
    pasos: [
      "Buscad las propiedades de los cuatro materiales (E, ρ, límite elástico, precio por kg y energía embebida) en fuentes fiables.",
      "Calculad el índice E/ρ y la masa de un tubo equivalente para cada material con una hoja de cálculo.",
      "Situad los materiales en un mapa de Ashby sencillo (módulo frente a densidad) dibujado a escala logarítmica.",
      "Valorad la fabricación (soldadura, moldeo), la reparación y el reciclaje de cada opción.",
      "Elegid un material con una matriz de decisión ponderada y justificad la elección.",
    ],
    producto: "Un informe técnico de tres páginas con la tabla de propiedades, el mapa de Ashby, los cálculos y la matriz de decisión.",
    evaluacion: [
      "Usa datos de propiedades correctos y con su fuente.",
      "Calcula correctamente los índices de mérito y las masas.",
      "Relaciona las propiedades con la estructura interna de cada material.",
      "Incluye criterios ambientales y justifica la decisión final.",
    ],
  },
  mapa: mapaB("ESTRUCTURA Y PROPIEDADES", [
    ["Enlace y redes", "metálico · BCC · FCC · HCP", "var(--pen)"],
    ["Defectos", "vacantes · dislocaciones · granos", "var(--red)"],
    ["Propiedades", "σ = Eε · dilatación · ρ eléctrica", "var(--leaf)"],
    ["Familias", "polímeros · cerámicos · compuestos", "var(--inf)"],
  ]),
  tarjetas: [
    ["Átomos por celda BCC / FCC", "2 / 4"],
    ["Contacto en BCC", "Diagonal del cubo: 4R = a√3"],
    ["Contacto en FCC", "Diagonal de la cara: 4R = a√2"],
    ["FE de BCC / FCC y HCP", "0,68 / 0,74"],
    ["Densidad teórica", "ρ = n·M / (N_A · a³)"],
    ["Hierro α → γ", "BCC → FCC a 912 °C; se contrae ≈ 1 %"],
    ["Defectos puntuales", "Vacante, intersticial, sustitucional"],
    ["Endurecer un metal", "Frenar las dislocaciones: acritud, grano fino, solución, precipitación"],
    ["Ley de Hooke", "σ = E · ε"],
    ["Dilatación lineal", "ΔL = α · L₀ · ΔT"],
    ["Regla de las mezclas", "E_c = E_f·V_f + E_m·V_m"],
    ["Termoplástico frente a termoestable", "Se funde y recicla / red rígida, no se funde"],
  ],
  familias: [
    "Doblad un clip varias veces hasta que se rompa y comentad por qué cada vez cuesta más (acritud).",
    "Buscad en casa objetos de plástico con su número de reciclaje (1 PET, 2 PEAD, 5 PP…) y clasificadlos en termoplásticos y termoestables.",
    "Observad las juntas de dilatación de un puente o una acera cercana y explicad para qué sirven.",
    "Comparad el peso de una sartén de hierro y una de aluminio del mismo tamaño y relacionadlo con su densidad.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Materiales y fabricación»: estructura interna de los materiales (enlaces, redes cristalinas, defectos), relación entre estructura, propiedades y procesado; propiedades mecánicas, térmicas, eléctricas y magnéticas; polímeros, cerámicos y materiales compuestos; nuevos materiales; criterios de selección técnicos, económicos y ambientales.`,
    ideas: [
      "Construir celdas BCC y FCC con bolas de porexpán y palillos y contar los átomos por celda.",
      "Modelo de dislocaciones con una balsa de burbujas de jabón sobre agua.",
      "Observar granos de cinc en una chapa galvanizada o atacar con ácido una pieza de latón pulida.",
      "Usar un selector de materiales en línea o una hoja de cálculo para construir un mapa de Ashby.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Estructura cristalina, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Estructura_cristalina" },
    { t: "Dislocación, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dislocaci%C3%B3n" },
    { t: "Materiales compuestos, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Material_compuesto" },
  ],
  revisado: "2026-11-21",
};
