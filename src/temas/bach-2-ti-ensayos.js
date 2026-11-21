// Tecnología e Ingeniería II 2º Bachillerato · Tema 3. Nivel libro. Dibujos propios en SVG.
const { marco, T, fit, flecha, ficha, pasos, compara, graf, rejilla, escala, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU, uid } = require("./_bach2-ti");

// Probeta de tracción.
const probetaSVG = (() => {
  const id = uid("pb");
  return marco("Probeta normalizada de tracción: cabezas anchas para las mordazas y una zona central calibrada de longitud inicial L0 y diámetro d0", `
  <path d="M20 60 H 62 Q 70 60 74 72 H 186 Q 190 60 198 60 H 240 V 120 H 198 Q 190 120 186 108 H 74 Q 70 120 62 120 H 20 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
  <rect x="20" y="56" width="40" height="68" fill="var(--muted)" opacity=".35"/><rect x="200" y="56" width="40" height="68" fill="var(--muted)" opacity=".35"/>
  <path d="M90 90 V 72 M170 90 V 72" stroke="var(--red)" stroke-width="2"/>
  <path d="M92 140 H 168" stroke="var(--red)" stroke-width="1.8" marker-end="url(#${id})" marker-start="url(#${id})"/>${T(130, 156, "L₀ (longitud calibrada)", { fs: 11, b: true, c: "var(--red)" })}
  <path d="M130 74 V 106" stroke="var(--pen)" stroke-width="1.8" marker-end="url(#${id}b)" marker-start="url(#${id}b)"/>${T(140, 94, "d₀", { fs: 12, b: true, c: "var(--pen)", a: "start" })}
  ${T(40, 46, "mordaza", { fs: 10, c: "var(--muted)" })}${T(220, 46, "mordaza", { fs: 10, c: "var(--muted)" })}
  ${T(130, 30, "L₀ = 5,65 √S₀ (≈ 5 d₀)", { fs: 12, b: true })}`, `<marker id="${id}" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--red)"/></marker><marker id="${id}b" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--pen)"/></marker>`);
})();

// Diagrama tensión-deformación de un acero.
const tdSVG = (() => {
  const pts = [[0, 0], [0.05, 0.55], [0.06, 0.6], [0.075, 0.56], [0.1, 0.58], [0.14, 0.57], [0.2, 0.66], [0.35, 0.78], [0.5, 0.84], [0.62, 0.86], [0.72, 0.84], [0.82, 0.76], [0.9, 0.62]];
  const px = (x) => (40 + x * 200).toFixed(1), py = (y) => (145 - y * 115).toFixed(1);
  return graf("Diagrama tensión-deformación de un acero dúctil: recta elástica, límite elástico, escalón de fluencia, endurecimiento hasta la tensión máxima, estricción y rotura", "ε", "σ (MPa)", [{ p: pts, c: "var(--red)", t: "" }],
    `<circle cx="${px(0.06)}" cy="${py(0.6)}" r="4" fill="var(--pen)"/>${T(px(0.1), py(0.68), "σe", { fs: 11, b: true, c: "var(--pen)" })}
    <circle cx="${px(0.62)}" cy="${py(0.86)}" r="4" fill="var(--leaf)"/>${T(px(0.62), py(0.92), "σR", { fs: 11, b: true, c: "var(--leaf)" })}
    <path d="M${px(0.9)} ${py(0.62)} l 5 -5 m -5 5 l 5 5" stroke="var(--ink)" stroke-width="2"/>${T(px(0.92), py(0.48), "rotura", { fs: 10, c: "var(--ink)" })}
    ${T(px(0.09), py(0.2), "elástica", { fs: 9.5, c: "var(--muted)", a: "start" })}${T(px(0.36), py(0.6), "endurecimiento", { fs: 9.5, c: "var(--muted)" })}${T(px(0.68), py(0.66), "estricción", { fs: 9.5, c: "var(--muted)" })}
    <path d="M${px(0.05)} ${py(0.55)} L ${px(0.05)} ${py(0)}" stroke="var(--line)" stroke-dasharray="3 3"/>`);
})();

// Penetradores de los tres ensayos de dureza.
const durezaSVG = marco("Penetradores de dureza: bola de acero o carburo en Brinell, pirámide de diamante de base cuadrada en Vickers y cono de diamante en Rockwell C", `
  <path d="M10 112 H 250" stroke="var(--ink)" stroke-width="2"/><rect x="10" y="112" width="240" height="30" fill="var(--muted)" opacity=".2"/>
  <circle cx="48" cy="92" r="22" fill="var(--pen)" fill-opacity=".85"/><path d="M30 112 Q 48 126 66 112" fill="var(--paper)" stroke="var(--pen)" stroke-width="1.6"/>
  ${T(48, 160, "Brinell", { fs: 11, b: true, c: "var(--pen)" })}${T(48, 174, "diámetro d", { fs: 9.5, c: "var(--muted)" })}
  <path d="M112 60 L 148 60 L 130 118 Z" fill="var(--red)" fill-opacity=".8"/>
  ${T(130, 160, "Vickers", { fs: 11, b: true, c: "var(--red)" })}${T(130, 174, "diagonal d", { fs: 9.5, c: "var(--muted)" })}
  <path d="M196 60 L 224 60 L 213 116 Q 210 120 207 116 Z" fill="var(--leaf)" fill-opacity=".85"/>
  ${T(210, 160, "Rockwell", { fs: 11, b: true, c: "var(--leaf)" })}${T(210, 174, "profundidad e", { fs: 9.5, c: "var(--muted)" })}
  <path d="M48 50 V 66 M130 30 V 54 M210 30 V 54" stroke="var(--ink)" stroke-width="2.4"/>${T(130, 22, "F", { fs: 12, b: true })}${T(48, 44, "F", { fs: 12, b: true })}${T(210, 22, "F", { fs: 12, b: true })}`);

// Péndulo de Charpy.
const charpySVG = (() => {
  const id = uid("ch"), O = [130, 34], L = 100;
  const pos = (deg) => [O[0] + L * Math.sin((deg * Math.PI) / 180), O[1] + L * Math.cos((deg * Math.PI) / 180)];
  const [xa, ya] = pos(-100), [xb, yb] = pos(50);
  return marco("Péndulo de Charpy: la maza cae desde una altura h0, rompe la probeta entallada y sube hasta h1; la energía absorbida es m g (h0 menos h1)", `
  <circle cx="${O[0]}" cy="${O[1]}" r="4" fill="var(--ink)"/>
  <path d="M${O[0]} ${O[1]} L ${xa.toFixed(1)} ${ya.toFixed(1)}" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 3"/><circle cx="${xa.toFixed(1)}" cy="${ya.toFixed(1)}" r="11" fill="var(--muted)" opacity=".5"/>
  <path d="M${O[0]} ${O[1]} L ${xb.toFixed(1)} ${yb.toFixed(1)}" stroke="var(--pen)" stroke-width="2.4"/><circle cx="${xb.toFixed(1)}" cy="${yb.toFixed(1)}" r="11" fill="var(--pen)"/>
  <path d="M${O[0]} ${O[1]} L ${O[0]} ${O[1] + L + 14}" stroke="var(--line)" stroke-width="1.2"/>
  <rect x="118" y="${O[1] + L + 10}" width="24" height="10" fill="var(--red)"/><path d="M128 ${O[1] + L + 10} l 2 4 l 2 -4" fill="var(--paper)"/>
  <path d="M30 ${ya.toFixed(1)} H 244" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/><path d="M30 ${yb.toFixed(1)} H 244" stroke="var(--pen)" stroke-width="1" stroke-dasharray="3 3"/><path d="M30 ${O[1] + L + 20} H 244" stroke="var(--ink)" stroke-width="1"/>
  ${T(250, ya + 14, "h₀", { fs: 11, b: true, a: "end", c: "var(--muted)" })}${T(250, yb + 4, "h₁", { fs: 11, b: true, a: "end", c: "var(--pen)" })}
  ${T(130, 172, "E = m·g·(h₀ − h₁)", { fs: 12.5, b: true, c: "var(--red)" })}${T(150, O[1] + L + 6, "probeta", { fs: 9.5, a: "start", c: "var(--red)" })}`, flecha(id, "var(--pen)"));
})();

// Curva de Wöhler (S-N).
const wohlerSVG = graf("Curva de Wöhler de un acero y de un aluminio: la tensión que rompe la pieza baja con el número de ciclos; el acero tiene un límite de fatiga horizontal y el aluminio no", "ciclos N (log)", "σ alterna", [
  { p: [[0, 0.95], [0.2, 0.8], [0.4, 0.62], [0.55, 0.5], [0.65, 0.46], [1, 0.46]], c: "var(--red)", t: "" },
  { p: [[0, 0.7], [0.3, 0.52], [0.6, 0.36], [1, 0.2]], c: "var(--pen)", t: "" },
], `${T(66, 30, "acero", { fs: 11, b: true, c: "var(--red)" })}${T(96, 104, "aluminio", { fs: 11, b: true, c: "var(--pen)" })}${T(238, 84, "límite de fatiga", { fs: 10, b: true, c: "var(--red)", a: "end" })}${T(60, 158, "10³", { fs: 9, c: "var(--muted)" })}${T(130, 158, "10⁶", { fs: 9, c: "var(--muted)" })}`);

// Curva de fluencia.
const creepSVG = graf("Curva de fluencia a alta temperatura: deformación frente al tiempo con un tramo primario que se frena, un tramo secundario recto y un tramo terciario que se acelera hasta la rotura", "tiempo", "ε", [
  { p: [[0, 0.08], [0.04, 0.2], [0.12, 0.28], [0.2, 0.32], [0.7, 0.5], [0.8, 0.56], [0.88, 0.68], [0.94, 0.86]], c: "var(--red)", t: "" },
], `${T(64, 92, "I", { fs: 12, b: true, c: "var(--pen)" })}${T(140, 72, "II: velocidad constante", { fs: 10, b: true, c: "var(--pen)" })}${T(214, 62, "III", { fs: 12, b: true, c: "var(--pen)" })}<circle cx="228" cy="46" r="4" fill="var(--ink)"/>${T(222, 34, "rotura", { fs: 9.5, a: "end" })}`);

module.exports = {
  materia: "Tecnología e Ingeniería II",
  curso: "2-bachillerato",
  titulo: "Ensayos de materiales",
  minutos: 115,
  objetivos: [
    "Clasificar los ensayos de materiales y conocer las normas que los regulan",
    "Realizar e interpretar el ensayo de tracción y calcular E, límite elástico, resistencia, alargamiento y estricción",
    "Calcular la tensión de trabajo con un coeficiente de seguridad y dimensionar piezas sencillas",
    "Calcular la dureza Brinell, Vickers y Rockwell a partir de los datos del ensayo",
    "Calcular la energía y la resiliencia en el ensayo de Charpy e interpretar las curvas de fatiga y fluencia",
    "Elegir el ensayo no destructivo adecuado para detectar un defecto",
  ],
  claves: ["ensayo destructivo", "probeta", "ensayo de tracción", "módulo de Young", "límite elástico", "resistencia a la tracción", "alargamiento", "estricción", "coeficiente de seguridad", "dureza Brinell", "dureza Vickers", "dureza Rockwell", "resiliencia", "péndulo de Charpy", "fatiga", "fluencia", "ultrasonidos"],
  pregunta: {
    texto: "Una empresa recibe un camión de barras de acero para construir una grúa. El proveedor asegura que es un acero S355. ¿Cómo puede comprobarlo sin fiarse solo del papel?",
    respuesta: "Tomando muestras del lote y haciendo <mark>ensayos normalizados</mark>. El ensayo de tracción dará el límite elástico (debe ser al menos 355 MPa), la resistencia y el alargamiento; un ensayo de dureza, rápido y casi no destructivo, comprueba que todas las barras sean iguales; y el ensayo de Charpy verifica que el acero no se vuelva frágil con el frío. Además, con ultrasonidos se buscan grietas internas en las soldaduras sin romper nada.",
  },
  lectura: {
    titulo: "El barco que se partió en dos en el puerto",
    html: `<p>Durante la Segunda Guerra Mundial, Estados Unidos fabricó en serie más de 2 700 barcos de carga llamados «Liberty». Por primera vez se construían con chapas soldadas en lugar de remachadas, lo que permitía terminar un barco en pocos días. Pero algo iba mal: decenas de barcos sufrieron grietas enormes, y algunos se partieron literalmente en dos, incluso estando amarrados en puerto en aguas frías.</p><p>La investigación la dirigió, entre otros, la ingeniera Constance Tipper, de la Universidad de Cambridge. Demostró con <b>ensayos de impacto</b> a distintas temperaturas que aquel acero, perfectamente dúctil a temperatura ambiente, se volvía <b>frágil</b> por debajo de cierta temperatura: una grieta pequeña en una soldadura podía recorrer el casco a cientos de metros por segundo. El acero había pasado los ensayos de tracción, pero nadie había comprobado su tenacidad en frío.</p><p>Desde entonces, el ensayo de Charpy a baja temperatura es obligatorio para los aceros de barcos, puentes y depósitos. Los ensayos no son un trámite: son la forma de saber de verdad cómo se comportará un material.</p>`,
  },
  bloques: [
    bloque({ h: "3.1 Por qué y cómo se ensayan los materiales", p: [
      "Un <mark>ensayo</mark> es una prueba realizada en condiciones controladas para medir una propiedad de un material o comprobar el estado de una pieza. Los ensayos sirven para <b>conocer</b> las propiedades de un material nuevo, <b>controlar la calidad</b> de los lotes que llegan a una fábrica, <b>diagnosticar</b> por qué ha fallado una pieza y <b>verificar</b> que una construcción es segura durante su vida.",
      "Se clasifican según varios criterios. Por su efecto sobre la pieza, son <b>destructivos</b> (la probeta se rompe o queda inutilizada, como en tracción o Charpy) o <b>no destructivos</b> (la pieza sigue sirviendo, como en ultrasonidos). Por la forma de aplicar la carga, <b>estáticos</b> (carga lenta: tracción, dureza) o <b>dinámicos</b> (choque o cargas repetidas: Charpy, fatiga). Por lo que miden, <b>mecánicos</b>, <b>tecnológicos</b> (comportamiento en un proceso de fabricación), <b>físico-químicos</b> y <b>metalográficos</b> (estructura interna).",
      "Para que los resultados se puedan comparar entre laboratorios, los ensayos están <b>normalizados</b>: la norma fija la forma y dimensiones de la probeta, la máquina, la velocidad de carga, la temperatura y cómo se expresa el resultado. Por ejemplo, UNE-EN ISO 6892-1 (tracción), 6506 (Brinell), 6507 (Vickers), 6508 (Rockwell) y 148-1 (Charpy).",
    ], svg: rejilla("Clasificación de ensayos con ejemplos: destructivos estáticos como tracción y dureza, destructivos dinámicos como Charpy y fatiga, y no destructivos como ultrasonidos", ["Tipo", "Ejemplos"], [["Estático", "tracción, dureza"], ["Dinámico", "Charpy, fatiga"], ["A largo plazo", "fluencia"], ["Tecnológico", "plegado, embutición"], ["No destructivo", "ultrasonidos, rayos X"]]) }),
    bloque({ h: "3.2 El ensayo de tracción", p: [
      "Es el ensayo mecánico más importante, porque de él se obtienen varias propiedades a la vez. Una <b>probeta</b> normalizada, de sección circular o rectangular, se sujeta por sus cabezas en las mordazas de una <b>máquina universal de ensayos</b> y se estira a velocidad lenta y constante hasta romperla. Durante el ensayo, la máquina registra la fuerza F y el alargamiento ΔL de la zona calibrada, medido con un <b>extensómetro</b>.",
      "Las probetas son <b>proporcionales</b>: su longitud calibrada inicial L<sub>0</sub> guarda una relación fija con la sección S<sub>0</sub>, normalmente L<sub>0</sub> = 5,65 √S<sub>0</sub>, que en las circulares equivale a L<sub>0</sub> = 5 d<sub>0</sub>. Así, el alargamiento final no depende del tamaño de la probeta y se pueden comparar resultados.",
      "Como la fuerza depende de la sección, los resultados se expresan en <b>tensión</b> y <b>deformación unitaria</b>:",
      formula("σ = F / S<sub>0</sub> &nbsp;&nbsp;&nbsp; ε = ΔL / L<sub>0</sub>"),
      "La tensión se expresa en MPa, que equivalen a N/mm². Se usa la sección inicial S<sub>0</sub> en todo el ensayo (tensión «ingenieril»), aunque la probeta se vaya adelgazando.",
    ], svg: probetaSVG, video: V("ens-traccion", "Ensayo de tracción", "ensayo de tracción") }),
    bloque({ h: "3.3 El diagrama tensión-deformación", p: [
      "La curva σ-ε de un metal dúctil como el acero dulce tiene varias zonas. Al principio hay una <b>zona elástica</b>: la curva es una recta (zona proporcional, donde se cumple la ley de Hooke σ = E · ε) y, si se descarga, la probeta recupera su longitud. Termina en el <mark>límite elástico</mark> σ<sub>e</sub>.",
      "En algunos aceros aparece después un <b>escalón de fluencia</b>: la probeta se alarga sin que aumente la carga, porque las dislocaciones se liberan de golpe. A continuación viene la zona de <b>deformación plástica uniforme</b>: el material se endurece por deformación (acritud) y hace falta cada vez más fuerza para seguir estirándolo, hasta llegar a la tensión máxima, la <mark>resistencia a la tracción</mark> σ<sub>R</sub>.",
      "A partir de ese punto empieza la <b>estricción</b>: la deformación se concentra en una zona que se estrecha como un cuello, la fuerza necesaria disminuye (porque la sección real es cada vez menor) y finalmente la probeta se rompe. En una rotura dúctil, la superficie de fractura tiene forma de copa y cono.",
      "Los materiales sin escalón de fluencia (aluminio, aceros templados) no tienen un límite elástico claro: se usa el <b>límite elástico convencional</b> R<sub>p0,2</sub>, la tensión que deja una deformación permanente del 0,2 %, que se obtiene trazando una paralela a la recta elástica desde ε = 0,002.",
    ], svg: tdSVG }),
    bloque({ h: "3.4 Magnitudes del ensayo de tracción", p: [
      "Del ensayo se obtienen las magnitudes que aparecen en los catálogos de materiales:",
      "<b>Módulo de elasticidad</b> E = σ / ε en la zona proporcional (pendiente de la recta). <b>Límite elástico</b> σ<sub>e</sub> = F<sub>e</sub> / S<sub>0</sub> (en las normas, R<sub>e</sub>). <b>Resistencia a la tracción</b> σ<sub>R</sub> = F<sub>máx</sub> / S<sub>0</sub> (R<sub>m</sub>).",
      "La ductilidad se mide con dos magnitudes tras la rotura. El <b>alargamiento</b> A compara la longitud final L<sub>u</sub> (juntando los dos trozos) con la inicial, y la <b>estricción</b> Z compara la sección final de la zona rota S<sub>u</sub> con la inicial:",
      formula("A (%) = (L<sub>u</sub> − L<sub>0</sub>) / L<sub>0</sub> · 100 &nbsp;&nbsp; Z (%) = (S<sub>0</sub> − S<sub>u</sub>) / S<sub>0</sub> · 100"),
      "Para diseñar, las piezas deben trabajar siempre en zona elástica y con margen. Se define la <mark>tensión de trabajo</mark> (o admisible) dividiendo el límite elástico entre un <b>coeficiente de seguridad</b> n mayor que 1, que tiene en cuenta incertidumbres en las cargas, defectos del material y consecuencias del fallo (de 1,5 a 3 en máquinas, más en ascensores o elementos de elevación):",
      formula("σ<sub>t</sub> = σ<sub>e</sub> / n"),
    ], svg: ficha("Fórmulas del ensayo de tracción: tensión, deformación, ley de Hooke, alargamiento, estricción y tensión de trabajo", "Ensayo de tracción", ["σ = F / S₀ ; ε = ΔL / L₀", "E = σ / ε (zona elástica)", "A = (Lu − L₀)/L₀ · 100", "Z = (S₀ − Su)/S₀ · 100", "σt = σe / n"], "var(--red)") }),
    bloque({ h: "3.5 Materiales dúctiles y frágiles. Otros ensayos estáticos", p: [
      "Un material <b>dúctil</b> (acero dulce, cobre, aluminio) se deforma mucho antes de romper: alargamientos del 20 al 50 % y estricción visible. Avisa antes de fallar. Un material <b>frágil</b> (fundición gris, vidrio, cerámicos, aceros templados sin revenir) rompe casi sin deformación plástica, de forma brusca, con una fractura plana y brillante.",
      "El área bajo la curva σ-ε es la energía absorbida por unidad de volumen. El área de la zona elástica, U = σ<sub>e</sub>² / (2E), es la <b>resiliencia elástica</b> (energía que el material almacena y devuelve, importante en muelles); el área total hasta la rotura es la <b>tenacidad</b> estática. Un material tenaz combina resistencia y ductilidad.",
      "Con la misma máquina universal se hacen otros ensayos estáticos. En el de <b>compresión</b> se aplasta una probeta cilíndrica corta: es el ensayo típico del hormigón, la fundición y los cerámicos, que resisten mucho más a compresión que a tracción. En el de <b>flexión</b>, una barra apoyada en dos puntos se carga en el centro: se usa en maderas, plásticos y cerámicos. Los ensayos de <b>cizalladura</b> y <b>torsión</b> miden la resistencia a esfuerzos cortantes, importantes en tornillos, remaches y ejes.",
    ], svg: graf("Comparación de curvas tensión-deformación: un material frágil rompe en la recta elástica, uno dúctil se deforma mucho y un elastómero se estira mucho con poca tensión", "ε", "σ", [
      { p: [[0, 0], [0.12, 0.92]], c: "var(--pen)", t: "frágil" },
      { p: [[0, 0], [0.06, 0.5], [0.3, 0.68], [0.6, 0.74], [0.8, 0.62]], c: "var(--red)", t: "dúctil" },
      { p: [[0, 0], [0.4, 0.08], [0.8, 0.14], [0.96, 0.3]], c: "var(--leaf)", t: "elastómero" },
    ]) }),
    bloque({ h: "3.6 Dureza Brinell", p: [
      "La <mark>dureza</mark> es la resistencia de un material a ser rayado o penetrado por otro. Los ensayos de dureza son los más usados en la industria porque son rápidos, baratos y apenas dañan la pieza (dejan una huella pequeña). Además, la dureza se relaciona con la resistencia: en los aceros, σ<sub>R</sub> (MPa) ≈ 3,45 · HB. La antigua escala de <b>Mohs</b>, del talco (1) al diamante (10), mide la dureza al rayado de los minerales.",
      "En el ensayo <b>Brinell</b> se presiona una bola de carburo de wolframio de diámetro D sobre la superficie con una fuerza F durante 10 a 15 s y después se mide con una lupa el diámetro d de la huella (casquete esférico). La dureza es la fuerza dividida por la superficie del casquete:",
      formula("HB = 0,102 · 2F / [π D (D − √(D² − d²))] &nbsp;&nbsp; (F en N; D y d en mm)"),
      "El factor 0,102 = 1/9,81 viene de que la fórmula original usaba kilopondios. Para que los resultados sean comparables con distintas bolas, la <b>constante de ensayo</b> K = 0,102 F / D² debe ser la adecuada al material: 30 para aceros y fundiciones, 10 para cobre y latón, 5 para aluminio y 2,5 o 1 para metales muy blandos. La huella debe cumplir 0,24 D &lt; d &lt; 0,6 D, y el espesor de la pieza debe ser al menos ocho veces la profundidad de la huella.",
      "El resultado se expresa, por ejemplo, <b>229 HBW 10/3000</b>: 229 de dureza con bola de carburo (W) de 10 mm y 3 000 kp (29,42 kN). El Brinell sirve para materiales blandos y semiduros (hasta unos 650 HB) y da una media fiable en materiales heterogéneos como la fundición.",
    ], svg: durezaSVG, video: V("ens-dureza", "Ensayo de dureza", "ensayo de dureza Brinell Vickers Rockwell") }),
    bloque({ h: "3.7 Dureza Vickers", p: [
      "El ensayo <b>Vickers</b> usa como penetrador una <b>pirámide de diamante</b> de base cuadrada con un ángulo de 136° entre caras opuestas. Al ser de diamante, sirve para materiales de cualquier dureza, incluidos aceros templados y capas cementadas. La huella es un cuadrado; se miden sus dos diagonales y se usa su media d:",
      formula("HV = 0,1891 · F / d² &nbsp;&nbsp; (F en N; d en mm)"),
      "Una gran ventaja es que la dureza Vickers prácticamente <b>no depende de la carga</b>, porque las huellas de una pirámide son geométricamente semejantes. Se usan cargas desde 49 N hasta 980 N (5 a 100 kp), y el resultado se escribe, por ejemplo, <b>301 HV 30</b> (con 30 kp, 294,2 N).",
      "Con cargas muy pequeñas (menos de 2 N) se hace el ensayo de <b>microdureza</b> con ayuda de un microscopio: permite medir la dureza de un solo grano, de una capa superficial de pocas micras o de piezas muy finas como hojas de cuchilla. Para valores hasta unos 300, HB y HV son parecidos; por encima, el Brinell se queda corto porque la bola se deforma.",
    ], svg: ficha("Fórmulas de dureza: Brinell con bola, Vickers con pirámide y Rockwell C y B con la profundidad e", "Fórmulas de dureza", ["HB = 0,102·2F / [πD(D − √(D² − d²))]", "HV = 0,1891 · F / d²", "HRC = 100 − e / 0,002", "HRB = 130 − e / 0,002"], "var(--pen)") }),
    bloque({ h: "3.8 Dureza Rockwell", p: [
      "El ensayo <b>Rockwell</b> mide la <b>profundidad</b> de la huella en lugar de su tamaño, por lo que la máquina da la lectura directamente en una escala, sin microscopio: es el más rápido y el preferido para controlar piezas en serie.",
      "Se hace en tres pasos: se aplica una <b>precarga</b> de 98 N (10 kp) que asienta el penetrador y fija la referencia cero, eliminando el efecto de la rugosidad; se añade la <b>carga adicional</b> durante unos segundos; y se retira la carga adicional manteniendo la precarga. Se mide entonces la profundidad permanente e (en mm) que ha penetrado respecto a la referencia. Cada 0,002 mm de profundidad equivale a una unidad Rockwell, y cuanto más profunda es la huella, menor es la dureza:",
      formula("HRC = 100 − e / 0,002 &nbsp;&nbsp;&nbsp; HRB = 130 − e / 0,002"),
      "Hay muchas escalas. Las más usadas son la <b>Rockwell C</b> (cono de diamante de 120°, carga total 1 471 N = 150 kp) para aceros templados y materiales duros, y la <b>Rockwell B</b> (bola de 1/16 de pulgada, carga total 980 N = 100 kp) para aceros blandos, latones y aluminio. Un acero de herramienta templado tiene unos 60 HRC; una lima, 65 HRC.",
    ], svg: escala("Escalas de dureza aproximadas: aluminio 30 HB, latón 100 HB, acero dulce 130 HB, acero templado 60 HRC y diamante 10 de Mohs", "Dureza orientativa", [["Al", "≈ 30 HB", "var(--pen)"], ["Latón", "≈ 100 HB", "#b45309"], ["Acero", "≈ 130 HB", "var(--muted)"], ["Templado", "≈ 60 HRC", "var(--red)"], ["Diamante", "Mohs 10", "var(--leaf)"]], "blando", "duro") }),
    bloque({ h: "3.9 Resiliencia: el ensayo de Charpy", p: [
      "La <mark>resiliencia</mark> (o tenacidad al impacto) es la energía que absorbe un material al romperse por un <b>choque</b>. Se mide con el <b>péndulo de Charpy</b>: una maza de masa m, colgada de un brazo de longitud L, se suelta desde una altura h<sub>0</sub> y golpea en su punto más bajo una probeta prismática de 10 × 10 × 55 mm con una <b>entalla</b> en forma de V (o de U) por el lado opuesto al golpe. Tras romperla, la maza sigue subiendo hasta una altura h<sub>1</sub>.",
      "La energía absorbida es la diferencia de energía potencial de la maza. Si se miden los ángulos α de partida y β de subida respecto a la vertical, h = L (1 − cos θ):",
      formula("E = m · g · (h<sub>0</sub> − h<sub>1</sub>) = m · g · L · (cos β − cos α)"),
      "En las normas actuales se da directamente la energía en julios, por ejemplo <b>KV = 27 J</b> (entalla en V). Tradicionalmente también se expresa la resiliencia como energía por unidad de sección de la probeta en la entalla: ρ = E / S (J/cm²); con entalla en V de 2 mm, la sección es 10 × 8 mm = 0,8 cm².",
      "La resiliencia depende mucho de la <b>temperatura</b>. Muchos aceros (sobre todo los de red BCC) tienen una <b>temperatura de transición dúctil-frágil</b>: por encima absorben mucha energía y rompen con deformación; por debajo, rompen de forma frágil con muy poca energía. Por eso se ensayan a −20 °C o −40 °C los aceros de barcos, puentes o depósitos en climas fríos. Los metales FCC, como el aluminio o los aceros inoxidables austeníticos, no tienen esta transición y se usan en criogenia.",
    ], svg: charpySVG, video: V("ens-impacto", "Ensayo de impacto", "ensayo Charpy resiliencia") }),
    bloque({ h: "3.10 Fatiga", p: [
      "Una pieza sometida a <b>cargas variables repetidas</b> (un eje que gira, el ala de un avión, un muelle de suspensión, una biela) puede romperse con tensiones bastante menores que su límite elástico tras miles o millones de ciclos. Es la <mark>fatiga</mark>, responsable de la mayoría de las roturas de piezas de máquinas en servicio.",
      "La rotura por fatiga tiene tres etapas: una grieta microscópica <b>se inicia</b> en un punto de concentración de tensiones (un cambio brusco de sección, un agujero, una marca de mecanizado, un poro); la grieta <b>se propaga</b> lentamente con cada ciclo, dejando en la superficie unas líneas concéntricas llamadas <b>marcas de playa</b>; y finalmente la sección que queda no aguanta y se produce la <b>rotura final</b> brusca, de aspecto rugoso.",
      "En el ensayo de fatiga se someten probetas a ciclos de tensión alterna (por ejemplo, flexión rotativa) con distintas amplitudes y se cuenta el número de ciclos hasta la rotura. Con los resultados se dibuja la <b>curva de Wöhler</b> o curva S-N. Los aceros presentan un <b>límite de fatiga</b>: una tensión por debajo de la cual la pieza resiste un número ilimitado de ciclos (en aceros, aproximadamente la mitad de σ<sub>R</sub>). El aluminio y otras aleaciones no férreas no lo tienen: se da la resistencia para un número de ciclos, como 10<sup>8</sup>.",
      "La vida a fatiga se mejora con un buen diseño (radios de acuerdo suaves en lugar de esquinas), superficies pulidas y tratamientos que crean tensiones de compresión en la superficie, como el granallado o la cementación.",
    ], svg: wohlerSVG, video: V("ens-fatiga", "Ensayo de fatiga", "ensayo de fatiga") }),
    bloque({ h: "3.11 Fluencia a alta temperatura", p: [
      "A temperaturas altas (por encima de un 40 % de la temperatura de fusión absoluta), un material sometido a una carga constante se va deformando lentamente con el tiempo, aunque la tensión sea menor que su límite elástico. Es la <mark>fluencia</mark> (en inglés <i>creep</i>). Afecta a los álabes de las turbinas de gas y de los motores de avión, las tuberías de vapor de las centrales térmicas o los filamentos de las bombillas; y, a temperatura ambiente, al plomo y a muchos plásticos (una estantería de plástico que se va curvando).",
      "En el ensayo de fluencia, una probeta se mantiene a temperatura constante con una carga fija durante horas, meses o incluso años, y se registra su deformación. La curva deformación-tiempo tiene tres tramos: <b>fluencia primaria</b>, en la que la velocidad de deformación disminuye por endurecimiento; <b>secundaria</b>, con velocidad constante y mínima, que es la que se usa para el diseño; y <b>terciaria</b>, en la que la deformación se acelera por la formación de cavidades y la estricción, hasta la rotura.",
      "Para resistir la fluencia se usan materiales con alto punto de fusión y estructuras estables: <b>superaleaciones</b> de níquel, aceros al cromo-molibdeno, cerámicos técnicos. En los álabes de turbina se fabrican incluso piezas de un solo cristal (sin límites de grano) y se refrigeran con canales internos.",
    ], svg: creepSVG }),
    bloque({ h: "3.12 Ensayos tecnológicos", p: [
      "Los <b>ensayos tecnológicos</b> no miden una propiedad con un número exacto, sino que comprueban si un material se comporta bien en un <b>proceso de fabricación</b> o en unas condiciones de uso concretas. Suelen ser sencillos y se hacen en el propio taller.",
      "En el ensayo de <b>plegado</b>, una barra o chapa se dobla un ángulo determinado (90°, 180°) alrededor de un mandril de diámetro fijado: si no aparecen grietas en la cara exterior, el material es apto para doblarse; se usa también para comprobar soldaduras. En el de <b>embutición</b> (ensayo Erichsen), un punzón esférico deforma una chapa hasta que aparece la primera grieta: la profundidad alcanzada indica su aptitud para fabricar piezas embutidas como latas o carrocerías.",
      "Otros ensayos tecnológicos son el de <b>forjabilidad</b> (recalcar en caliente un cilindro y observar si se agrieta), el de <b>doblado alternativo</b> de alambres, el de <b>abocardado</b> de tubos, el ensayo de <b>chispa</b> (al amolar un acero, la forma y el color de las chispas indican de forma aproximada su contenido en carbono) y los ensayos de <b>desgaste</b>, en los que se frota una pieza contra otra y se mide la pérdida de masa. También se hacen ensayos de <b>corrosión</b> en cámara de niebla salina para comprobar recubrimientos.",
    ], svg: pasos("Ensayos tecnológicos: plegado de chapas y soldaduras, embutición Erichsen, chispa para estimar el carbono y niebla salina para la corrosión", ["Plegado: ¿aparecen grietas?", "Embutición Erichsen: profundidad", "Chispa: estimar el carbono", "Niebla salina: corrosión"], "#b45309") }),
    bloque({ h: "3.13 Ensayos no destructivos", p: [
      "Los <mark>ensayos no destructivos</mark> (END) examinan una pieza o una construcción sin dañarla, para detectar defectos: grietas, poros, inclusiones o falta de fusión en soldaduras. Son esenciales en el mantenimiento de aviones, trenes, puentes, recipientes a presión y centrales.",
      "<b>Inspección visual</b>: la más sencilla, con lupas, endoscopios o cámaras. <b>Líquidos penetrantes</b>: se aplica un líquido coloreado o fluorescente que entra por capilaridad en las grietas abiertas a la superficie; se limpia y un revelador blanco lo hace aflorar. <b>Partículas magnéticas</b>: se imanta la pieza (solo materiales ferromagnéticos) y se espolvorean partículas de hierro, que se acumulan donde una grieta superficial o subsuperficial desvía el campo.",
      "<b>Ultrasonidos</b>: un palpador emite ondas de alta frecuencia (1 a 10 MHz) que se reflejan en las discontinuidades internas; por el tiempo del eco se calcula la profundidad del defecto. También sirven para medir espesores. <b>Radiografía</b> con rayos X o gamma: la radiación atraviesa la pieza y los defectos internos aparecen como manchas en la placa o el detector digital; requiere protección radiológica. <b>Corrientes inducidas</b> (de Foucault): una bobina induce corrientes en la pieza conductora y los defectos superficiales alteran su señal; se usa para inspeccionar tubos y fuselajes.",
    ], svg: rejilla("Ensayos no destructivos y qué detectan: penetrantes grietas superficiales, partículas magnéticas grietas superficiales en hierro y acero, ultrasonidos defectos internos, radiografía defectos internos, corrientes inducidas defectos superficiales en conductores", ["Ensayo", "Detecta"], [["Penetrantes", "grietas superficiales"], ["Part. magnéticas", "grietas (solo ferromag.)"], ["Ultrasonidos", "defectos internos"], ["Radiografía", "defectos internos"], ["Corr. inducidas", "superficie (conductores)"]], "var(--leaf)"), video: V("ens-end", "Qué son los ensayos no destructivos", "ensayos no destructivos") }),
    bloque({ h: "3.14 Metalografía y el informe de ensayo", p: [
      "Los <b>ensayos metalográficos</b> estudian la estructura interna de un metal. Para la <b>macrografía</b> se observa a simple vista o con lupa una sección atacada químicamente: revela el fibrado de una pieza forjada, las zonas de una soldadura o grietas. Para la <b>micrografía</b> se prepara una muestra pequeña: se corta, se embute en resina, se desbasta con lijas cada vez más finas, se pule hasta dejarla como un espejo y se <b>ataca</b> con un reactivo (en aceros, nital: ácido nítrico en alcohol) que oscurece de forma distinta cada fase y los límites de grano. Después se observa en el microscopio metalográfico, de luz reflejada, a 100 o 1 000 aumentos.",
      "Con la micrografía se identifican las fases (ferrita, perlita, martensita…), se mide el tamaño de grano y se comprueba si un tratamiento térmico ha funcionado. Con el microscopio electrónico de barrido se llega a cientos de miles de aumentos y se estudian las superficies de fractura para saber si una rotura fue dúctil, frágil o por fatiga.",
      "Todo ensayo termina en un <b>informe</b> que incluye: identificación de la muestra, norma aplicada, equipo y su calibración, condiciones (temperatura, velocidad), resultados con su incertidumbre, observaciones y firma del técnico responsable. Los laboratorios acreditados por ENAC garantizan que sus informes son válidos ante clientes y administraciones.",
    ], svg: pasos("Preparación de una muestra metalográfica: corte, embutido, desbaste, pulido, ataque químico y observación al microscopio", ["Corte y embutido en resina", "Desbaste con lijas", "Pulido a espejo", "Ataque (nital) y microscopio"], "var(--pen)") }),
  ],
  figura: figura("Ensayos de materiales", "Tracción, dureza, impacto y fatiga, y ensayos no destructivos", [["Tracción", "σe · σR · E", "A % · Z %"], ["Dureza", "HB · HV · HRC", "huella o profundidad"], ["Choque y ciclos", "Charpy · fatiga", "fluencia"], ["No destructivos", "ultrasonidos", "rayos X · penetrantes"]], "var(--red)"),
  video: V("ens-traccion", "Ensayo de tracción", "ensayo de tracción"),
  ejemplos: [
    { enunciado: "Una probeta de acero de d<sub>0</sub> = 10 mm y L<sub>0</sub> = 50 mm se ensaya a tracción. Con 15 kN se alarga 0,0455 mm; el límite elástico aparece con 23,6 kN y la fuerza máxima es 34,6 kN. Tras la rotura, L<sub>u</sub> = 61 mm y d<sub>u</sub> = 6 mm. Calcula E, σ<sub>e</sub>, σ<sub>R</sub>, A y Z.", pasos: ["S<sub>0</sub> = π · 5² = 78,54 mm². Con 15 kN: σ = 15 000 / 78,54 = 191 MPa; ε = 0,0455 / 50 = 9,1 · 10<sup>−4</sup>.", "E = 191 / 9,1 · 10<sup>−4</sup> = 209 900 MPa ≈ 210 GPa.", "σ<sub>e</sub> = 23 600 / 78,54 = 300 MPa; σ<sub>R</sub> = 34 600 / 78,54 = 441 MPa.", "A = (61 − 50)/50 · 100 = 22 %. S<sub>u</sub> = π · 3² = 28,27 mm²; Z = (78,54 − 28,27)/78,54 · 100 = 64 %."], resultado: "E ≈ 210 GPa; σ<sub>e</sub> = 300 MPa; σ<sub>R</sub> = 441 MPa; A = 22 %; Z = 64 %." },
    { enunciado: "Con el acero anterior (σ<sub>e</sub> = 300 MPa) y un coeficiente de seguridad n = 2, calcula el diámetro mínimo de un tirante que debe soportar 20 kN y su alargamiento si mide 2 m.", pasos: ["σ<sub>t</sub> = 300 / 2 = 150 MPa.", "S = F / σ<sub>t</sub> = 20 000 / 150 = 133,3 mm² → d = √(4S/π) = 13,0 mm.", "ε = σ<sub>t</sub> / E = 150 / 210 000 = 7,14 · 10<sup>−4</sup>; ΔL = 7,14 · 10<sup>−4</sup> · 2 000 mm."], resultado: "d ≥ 13 mm; se alarga unos 1,43 mm." },
    { enunciado: "En un ensayo Brinell sobre acero con bola de 10 mm y 29 420 N, la huella mide 4,0 mm. Calcula la dureza y estima la resistencia a la tracción.", pasos: ["√(D² − d²) = √(100 − 16) = 9,165 mm; D − √(D² − d²) = 0,835 mm.", "π · D · 0,835 = 26,23 mm².", "HB = 0,102 · 2 · 29 420 / 26,23 = 6 001,7 / 26,23 = 229.", "σ<sub>R</sub> ≈ 3,45 · 229 ≈ 790 MPa."], resultado: "229 HBW 10/3000; σ<sub>R</sub> ≈ 790 MPa." },
    { enunciado: "En un ensayo Vickers con 294,2 N (30 kp) las diagonales de la huella miden 0,42 y 0,44 mm. Calcula la dureza.", pasos: ["d = (0,42 + 0,44)/2 = 0,43 mm; d² = 0,1849 mm².", "HV = 0,1891 · 294,2 / 0,1849 = 55,63 / 0,1849."], resultado: "≈ 301 HV 30." },
    { enunciado: "En un ensayo Rockwell C, la profundidad permanente es 0,08 mm. ¿Qué dureza tiene? ¿Y si fuera un ensayo Rockwell B con 0,1 mm?", pasos: ["HRC = 100 − 0,08 / 0,002 = 100 − 40.", "HRB = 130 − 0,1 / 0,002 = 130 − 50."], resultado: "60 HRC (acero templado) y 80 HRB." },
    { enunciado: "Un péndulo de Charpy tiene una maza de 25 kg y un brazo de 0,75 m. Se suelta a 120° de la vertical y, tras romper una probeta con entalla en V (sección 0,8 cm²), sube hasta 60°. Calcula la energía absorbida y la resiliencia.", pasos: ["E = m g L (cos β − cos α) = 25 · 9,8 · 0,75 · (cos 60° − cos 120°).", "cos 60° − cos 120° = 0,5 − (−0,5) = 1 → E = 183,75 J.", "ρ = E / S = 183,75 / 0,8."], resultado: "E ≈ 184 J; ρ ≈ 230 J/cm²: el acero es muy tenaz a esa temperatura." },
  ],
  errores: [
    "Calcular la tensión con la sección final o con el diámetro en lugar del radio: σ = F / S<sub>0</sub> con S<sub>0</sub> = π d<sub>0</sub>²/4.",
    "Mezclar unidades: si F está en N y S en mm², la tensión sale directamente en MPa; si S está en m², sale en Pa.",
    "Dimensionar una pieza con la resistencia a la tracción en lugar del límite elástico dividido por el coeficiente de seguridad.",
    "Pensar que una pieza no puede romper si trabaja por debajo del límite elástico: con cargas repetidas puede romper por fatiga.",
    "Confundir la resiliencia del ensayo de Charpy (energía de impacto) con la resiliencia elástica (área bajo la recta elástica).",
    "Usar partículas magnéticas en aluminio o en acero inoxidable austenítico: solo sirven en materiales ferromagnéticos.",
  ],
  ejercicios: [
    B("Clasifica como destructivo o no destructivo y como estático o dinámico: tracción, Charpy, ultrasonidos, Brinell, fatiga.", "Tracción: destructivo, estático. Charpy: destructivo, dinámico. Ultrasonidos: no destructivo. Brinell: casi no destructivo (huella), estático. Fatiga: destructivo, dinámico (cargas cíclicas)."),
    B("¿Por qué se normalizan los ensayos? Cita dos aspectos que fija la norma.", "Para que los resultados sean comparables entre laboratorios. Fija, por ejemplo, la forma y dimensiones de la probeta, la velocidad de carga, la temperatura y la forma de expresar el resultado."),
    B("Calcula la longitud calibrada de una probeta proporcional de 8 mm de diámetro.", "S<sub>0</sub> = π · 4² = 50,27 mm². L<sub>0</sub> = 5,65 √50,27 = 5,65 · 7,09 = 40 mm (= 5 d<sub>0</sub>)."),
    B("Una probeta de 12 mm de diámetro soporta 40 kN. ¿Qué tensión tiene?", "S<sub>0</sub> = π · 6² = 113,1 mm². σ = 40 000 / 113,1 = 353,7 MPa."),
    B("Describe las zonas del diagrama tensión-deformación de un acero dúctil.", "Elástica (recta, Hooke, recupera la forma) hasta σ<sub>e</sub>; escalón de fluencia; plástica uniforme con endurecimiento hasta σ<sub>R</sub>; estricción con disminución de la fuerza; rotura."),
    B("Una probeta de L<sub>0</sub> = 80 mm mide 96 mm tras romper. Calcula su alargamiento.", "A = (96 − 80)/80 · 100 = 20 %."),
    B("Una probeta de 10 mm de diámetro rompe con un diámetro final de 7 mm. Calcula la estricción.", "S<sub>0</sub> = 78,54 mm²; S<sub>u</sub> = π · 3,5² = 38,48 mm². Z = (78,54 − 38,48)/78,54 · 100 = 51 %."),
    B("Un acero tiene σ<sub>e</sub> = 360 MPa. Con un coeficiente de seguridad 3, ¿cuál es la tensión de trabajo?", "σ<sub>t</sub> = 360 / 3 = 120 MPa."),
    B("¿Qué diferencia hay entre el ensayo Brinell y el Rockwell en lo que se mide?", "En el Brinell se mide el diámetro de la huella (y se calcula F/superficie). En el Rockwell se mide la profundidad de la huella y la máquina da la lectura directa."),
    B("Calcula la dureza Rockwell C si la penetración permanente es 0,06 mm.", "HRC = 100 − 0,06/0,002 = 100 − 30 = 70 HRC."),
    B("Explica las tres etapas de una rotura por fatiga.", "Inicio de una grieta en un concentrador de tensiones; propagación lenta con cada ciclo (marcas de playa); rotura final brusca de la sección restante."),
    B("¿Qué ensayo no destructivo usarías para buscar un poro en el interior de una soldadura de acero de 20 mm de espesor?", "Ultrasonidos o radiografía, porque detectan defectos internos. Los penetrantes y las partículas magnéticas solo detectan defectos superficiales o muy próximos a la superficie."),
    M("Una probeta de aluminio de d<sub>0</sub> = 10 mm y L<sub>0</sub> = 50 mm se alarga 0,068 mm con 7,5 kN. Calcula E.", "σ = 7 500 / 78,54 = 95,5 MPa; ε = 0,068/50 = 1,36 · 10<sup>−3</sup>. E = 95,5 / 1,36 · 10<sup>−3</sup> = 70 200 MPa ≈ 70 GPa."),
    M("En un ensayo de tracción con una probeta de 15 mm de diámetro, F<sub>e</sub> = 53 kN y F<sub>máx</sub> = 79,5 kN. Calcula σ<sub>e</sub> y σ<sub>R</sub>.", "S<sub>0</sub> = π · 7,5² = 176,7 mm². σ<sub>e</sub> = 53 000/176,7 = 300 MPa; σ<sub>R</sub> = 79 500/176,7 = 450 MPa."),
    M("Una barra de 3 m de un acero (E = 200 GPa, σ<sub>e</sub> = 250 MPa) debe soportar 50 kN con n = 2,5. Calcula su diámetro mínimo y su alargamiento.", "σ<sub>t</sub> = 100 MPa. S = 50 000/100 = 500 mm² → d = √(4 · 500/π) = 25,2 mm. ΔL = (100/200 000) · 3 000 = 1,5 mm."),
    M("Calcula la resiliencia elástica (energía por unidad de volumen) de un acero de muelles con σ<sub>e</sub> = 1 200 MPa y E = 200 GPa, y compárala con la de un acero dulce (σ<sub>e</sub> = 250 MPa).", "U = σ<sub>e</sub>²/(2E). Muelles: 1 200²/(400 000) = 3,6 MJ/m³. Dulce: 250²/400 000 = 0,156 MJ/m³. El de muelles almacena 23 veces más energía elástica."),
    M("Calcula la dureza Brinell de un acero ensayado con bola de 5 mm y 7 355 N si la huella mide 1,8 mm. Comprueba la constante de ensayo.", "√(25 − 3,24) = 4,665; D − √ = 0,335; π · 5 · 0,335 = 5,265. HB = 0,102 · 2 · 7 355 / 5,265 = 285. K = 0,102 · 7 355/25 = 30: correcta para acero."),
    M("Una aleación de aluminio se ensaya con bola de 10 mm y 4 903 N; la huella mide 3,5 mm. Calcula HB y comprueba si la huella es válida.", "√(100 − 12,25) = 9,368; 10 − 9,368 = 0,632; π · 10 · 0,632 = 19,87. HB = 0,102 · 2 · 4 903 / 19,87 = 50,3. Válida: 0,24D = 2,4 < 3,5 < 6 = 0,6D."),
    M("Calcula la dureza Vickers con 98,07 N si la diagonal media es 0,25 mm. ¿Cambiaría el resultado con una carga de 294,2 N?", "HV = 0,1891 · 98,07/0,0625 = 296,7 HV 10. Con el triple de carga la diagonal sería √3 veces mayor (0,433 mm) y la dureza, prácticamente la misma: el Vickers no depende de la carga."),
    M("En un Rockwell B, la dureza medida es 85 HRB. ¿Qué profundidad permanente tenía la huella?", "85 = 130 − e/0,002 → e/0,002 = 45 → e = 0,09 mm."),
    M("Un péndulo de Charpy de 20 kg cae desde 1,2 m y, tras romper la probeta, sube a 0,7 m. Calcula la energía absorbida y la resiliencia con una sección de 80 mm².", "E = 20 · 9,8 · (1,2 − 0,7) = 98 J. ρ = 98/0,8 cm² = 122,5 J/cm²."),
    M("Un acero tiene una resiliencia de 120 J a 20 °C y de 8 J a −30 °C. ¿Qué indica? ¿Lo usarías en una plataforma petrolífera en el mar del Norte?", "Tiene una temperatura de transición dúctil-frágil entre esas temperaturas: por debajo rompe de forma frágil. No sería adecuado: hay que elegir un acero con buena tenacidad a la temperatura mínima de servicio."),
    M("¿Por qué un eje con un cambio brusco de diámetro rompe antes por fatiga que uno con un radio de acuerdo suave? ¿Qué otras mejoras propondrías?", "La esquina viva concentra las tensiones y facilita el inicio de grietas. Mejoras: radio de acuerdo amplio, superficie pulida, granallado o tratamientos que creen compresiones superficiales y evitar marcas de mecanizado."),
    M("Ordena de mayor a menor dureza y razona: un acero de 55 HRC, un latón de 100 HB y un acero de 250 HV.", "55 HRC ≈ 560 HV, mayor que 250 HV (≈ 240 HB), que es mayor que 100 HB. Orden: acero templado, acero de 250 HV y latón."),
    A("Un tirante de acero (E = 210 GPa, σ<sub>e</sub> = 275 MPa) de 2,5 m y sección cuadrada debe soportar 60 kN con n = 2,2 y no alargarse más de 1,2 mm. Calcula el lado mínimo.", "Por resistencia: σ<sub>t</sub> = 125 MPa → S ≥ 60 000/125 = 480 mm². Por rigidez: ε ≤ 1,2/2 500 = 4,8 · 10<sup>−4</sup> → σ ≤ 210 000 · 4,8 · 10<sup>−4</sup> = 100,8 MPa → S ≥ 60 000/100,8 = 595 mm². Manda la rigidez: lado ≥ √595 = 24,4 mm (25 mm)."),
    A("Una probeta cilíndrica de cobre (L<sub>0</sub> = 50 mm, d<sub>0</sub> = 10 mm) se carga con 12 kN y se alarga 0,064 mm. Al llegar a 25 kN la deformación ya no es proporcional. Calcula E, el límite de proporcionalidad aproximado y la longitud de la probeta cargada con 18 kN si sigue en la zona elástica.", "σ<sub>12</sub> = 152,8 MPa; ε = 1,28 · 10<sup>−3</sup>; E = 119 400 MPa ≈ 120 GPa. Límite ≈ 25 000/78,54 = 318 MPa. Con 18 kN: σ = 229,2 MPa; ε = 1,92 · 10<sup>−3</sup>; ΔL = 0,096 mm; L = 50,096 mm."),
    A("Deduce la fórmula HB = 0,102 · 2F/[πD(D − √(D² − d²))] sabiendo que el área de un casquete esférico es π D h, donde h es su altura.", "Por geometría, la altura del casquete es h = (D − √(D² − d²))/2. Área = π D h = πD(D − √(D² − d²))/2. HB = F (kp)/Área = (F/9,81) · 2/[πD(D − √(D² − d²))] = 0,102 · 2F/[πD(D − √(D² − d²))]."),
    A("Un péndulo de Charpy de 30 kg y 0,8 m de brazo se suelta a 150°. Rompe una probeta que absorbe 120 J. ¿Hasta qué ángulo sube?", "E = m g L (cos β − cos α) → cos β = 120/(30 · 9,8 · 0,8) + cos 150° = 0,510 − 0,866 = −0,356 → β = 110,9°."),
    A("Una pieza de acero tiene σ<sub>R</sub> = 600 MPa. Estima su límite de fatiga y el diámetro mínimo de un eje que soporta un momento flector que produce σ = 32M/(πd³) con M = 150 N·m y n = 2.", "Límite de fatiga ≈ 0,5 · 600 = 300 MPa; admisible = 150 MPa. d³ = 32 · 150 000 N·mm/(π · 150) = 10 186 mm³ → d = 21,7 mm (22 mm)."),
    A("Un palpador de ultrasonidos recibe el eco de fondo de una placa de acero de 40 mm a los 13,5 μs y un eco intermedio a los 5,4 μs. ¿A qué profundidad está el defecto y cuál es la velocidad del sonido en ese acero?", "El sonido va y vuelve: v = 2 · 0,040/13,5 · 10<sup>−6</sup> = 5 926 m/s. Profundidad = v · t/2 = 5 926 · 5,4 · 10<sup>−6</sup>/2 = 0,016 m = 16 mm."),
    A("Propón un plan de ensayos para recibir un lote de 200 bielas forjadas de acero para motores, indicando qué ensayo, sobre cuántas piezas y para qué.", "Dureza (Brinell o Rockwell) al 100 % o a una muestra amplia, para verificar el tratamiento térmico; partículas magnéticas al 100 % para grietas superficiales; tracción y Charpy sobre probetas de unas pocas piezas destruidas por lote, para comprobar propiedades; fatiga en el desarrollo del modelo; y metalografía de una pieza para revisar fibrado y microestructura."),
  ],
  quiz: [
    q4("Un ensayo en el que la pieza sigue sirviendo es…", ["destructivo", "no destructivo", "dinámico", "tecnológico"], 1, "Como los ultrasonidos."),
    q4("En una probeta proporcional circular, L<sub>0</sub> ≈", ["d<sub>0</sub>", "2 d<sub>0</sub>", "5 d<sub>0</sub>", "10 d<sub>0</sub>"], 2, "L<sub>0</sub> = 5,65 √S<sub>0</sub>."),
    q4("Si F está en N y S en mm², σ sale en…", ["Pa", "kPa", "MPa", "GPa"], 2, "1 N/mm² = 1 MPa."),
    q4("En la zona proporcional se cumple…", ["σ = E · ε", "σ = F · L", "ε = E/σ", "σ constante"], 0, "Ley de Hooke."),
    q4("La tensión máxima del diagrama es…", ["el límite elástico", "la resistencia a la tracción", "el módulo de Young", "la estricción"], 1, "σ<sub>R</sub> = F<sub>máx</sub>/S<sub>0</sub>."),
    q4("Tras la tensión máxima, la probeta…", ["se endurece", "sufre estricción", "vuelve a la zona elástica", "se alarga sin fuerza"], 1, "Se forma un cuello."),
    q4("R<sub>p0,2</sub> es…", ["la deformación del 0,2 %", "el límite elástico convencional", "la resistencia máxima", "la estricción"], 1, "Deja 0,2 % de deformación permanente."),
    q4("La tensión de trabajo es…", ["σ<sub>R</sub> · n", "σ<sub>e</sub> / n", "σ<sub>e</sub> · n", "E / n"], 1, "n > 1."),
    q4("Un material frágil…", ["se alarga mucho", "rompe casi sin deformación plástica", "tiene mucha estricción", "absorbe mucha energía"], 1, "Rotura brusca."),
    q4("El penetrador del ensayo Brinell es…", ["un cono de diamante", "una bola", "una pirámide de diamante", "una cuchilla"], 1, "Se mide el diámetro d."),
    q4("La constante de ensayo Brinell para aceros es…", ["1", "5", "10", "30"], 3, "K = 0,102 F/D²."),
    q4("En el ensayo Vickers se mide…", ["la profundidad", "las diagonales de la huella", "el rebote", "la energía"], 1, "Huella cuadrada."),
    q4("La dureza Vickers prácticamente no depende de…", ["la carga", "el material", "la huella", "el penetrador"], 0, "Huellas semejantes."),
    q4("El ensayo Rockwell mide…", ["el diámetro de la huella", "la profundidad de la huella", "la energía de choque", "los ciclos"], 1, "Lectura directa."),
    q4("En el Rockwell C, cada 0,002 mm de profundidad equivalen a…", ["10 unidades", "1 unidad", "0,1 unidades", "100 unidades"], 1, "HRC = 100 − e/0,002."),
    q4("El ensayo de Charpy mide…", ["la dureza", "la resiliencia", "la fatiga", "la fluencia"], 1, "Energía de impacto."),
    q4("Por debajo de la temperatura de transición, un acero BCC es…", ["más dúctil", "frágil", "superconductor", "amorfo"], 1, "Barcos Liberty."),
    q4("El límite de fatiga es…", ["la tensión máxima", "la tensión que se aguanta con infinitos ciclos", "el número de ciclos", "la tensión a alta temperatura"], 1, "En aceros, ≈ 0,5 σ<sub>R</sub>."),
    q4("La fluencia aparece con…", ["cargas de choque", "carga constante y alta temperatura", "cargas cíclicas", "corrosión"], 1, "Álabes de turbina."),
    q4("Las partículas magnéticas no sirven en…", ["acero al carbono", "fundición", "aluminio", "hierro"], 2, "Solo en ferromagnéticos."),
  ],
  examen: [
    q4("Probeta de 10 mm de diámetro con F<sub>máx</sub> = 39,27 kN. σ<sub>R</sub> =", ["393 MPa", "500 MPa", "125 MPa", "1 571 MPa"], 1, "39 270/78,54."),
    q4("L<sub>0</sub> = 50 mm y L<sub>u</sub> = 62 mm. A =", ["12 %", "24 %", "19 %", "6 %"], 1, "12/50."),
    q4("σ<sub>e</sub> = 420 MPa con n = 3. σ<sub>t</sub> =", ["1 260 MPa", "140 MPa", "210 MPa", "423 MPa"], 1, "420/3."),
    q4("σ = 140 MPa en un acero de E = 210 GPa. ε =", ["6,7 · 10<sup>−4</sup>", "1,5 · 10<sup>−3</sup>", "0,67", "6,7 · 10<sup>−2</sup>"], 0, "140/210 000."),
    q4("HV con F = 294,2 N y d = 0,5 mm:", ["111", "223", "445", "56"], 1, "0,1891 · 294,2/0,25."),
    q4("Una penetración de 0,1 mm en Rockwell C da…", ["50 HRC", "60 HRC", "80 HRC", "30 HRC"], 0, "100 − 50."),
    q4("Maza de 20 kg que cae 1,5 m y sube 0,5 m. Energía absorbida:", ["98 J", "196 J", "294 J", "392 J"], 1, "20 · 9,8 · 1."),
    q4("Para detectar una grieta interna en un eje de aluminio usarías…", ["partículas magnéticas", "ultrasonidos", "ensayo de chispa", "Charpy"], 1, "Interno y no ferromagnético."),
  ],
  feynman: ["Qué información da el diagrama tensión-deformación y cómo se obtiene", "Cómo se calcula la tensión de trabajo y por qué se usa un coeficiente de seguridad", "En qué se diferencian los ensayos Brinell, Vickers y Rockwell", "Cómo funciona el péndulo de Charpy y por qué importa la temperatura", "Por qué una pieza puede romper por fatiga sin superar su límite elástico"],
  glosario: [
    ["Probeta", "Muestra de material con forma y dimensiones normalizadas para un ensayo."],
    ["Máquina universal", "Máquina que aplica fuerzas de tracción, compresión o flexión y registra fuerza y deformación."],
    ["Tensión", "Fuerza por unidad de sección inicial (MPa)."],
    ["Límite elástico", "Tensión a partir de la cual la deformación deja de ser recuperable."],
    ["Resistencia a la tracción", "Tensión máxima que soporta la probeta."],
    ["Alargamiento", "Aumento porcentual de la longitud calibrada tras la rotura."],
    ["Estricción", "Reducción porcentual de la sección en la zona de rotura."],
    ["Coeficiente de seguridad", "Número por el que se divide el límite elástico para obtener la tensión de trabajo."],
    ["Dureza", "Resistencia de un material a ser rayado o penetrado."],
    ["Constante de ensayo", "Cociente 0,102 F/D² que se fija en el ensayo Brinell según el material."],
    ["Resiliencia", "Energía absorbida al romper por impacto una probeta entallada."],
    ["Temperatura de transición", "Temperatura por debajo de la cual un material pasa a romper de forma frágil."],
    ["Fatiga", "Rotura por cargas variables repetidas por debajo del límite elástico."],
    ["Curva de Wöhler", "Gráfica de la tensión alterna frente al número de ciclos hasta la rotura."],
    ["Fluencia", "Deformación lenta con el tiempo bajo carga constante a alta temperatura."],
    ["Ensayo no destructivo", "Ensayo que detecta defectos sin dañar la pieza."],
    ["Metalografía", "Estudio de la estructura interna de un metal al microscopio."],
  ],
  situacion: {
    titulo: "Laboratorio de ensayos con plástico impreso en 3D",
    reto: "El aula taller imprime en 3D piezas que deben soportar esfuerzos. Vuestro equipo comprobará con ensayos sencillos cómo influyen el material y la orientación de impresión en la resistencia, y redactará un informe de ensayo como el de un laboratorio.",
    pasos: [
      "Diseñad una probeta de tracción con cabezas anchas (inspirada en la norma) e imprimid varias en PLA y PETG, en horizontal y en vertical.",
      "Construid un montaje de tracción con un dinamómetro o colgando pesos conocidos, y medid el alargamiento con un calibre.",
      "Calculad la tensión de rotura, la deformación y el alargamiento de cada probeta, y representad las curvas en una hoja de cálculo.",
      "Observad las superficies de rotura con una lupa o el móvil y clasificadlas en dúctiles o frágiles.",
      "Redactad un informe de ensayo con la incertidumbre de las medidas y una recomendación de orientación de impresión.",
    ],
    producto: "Un informe de ensayo con fotografías, tablas, curvas tensión-deformación y conclusiones para el diseño de piezas impresas.",
    evaluacion: [
      "Diseña probetas comparables y controla las variables del ensayo.",
      "Calcula correctamente tensiones, deformaciones y alargamientos.",
      "Interpreta las roturas relacionándolas con la estructura por capas.",
      "Presenta el informe con el formato de un laboratorio y con incertidumbres.",
    ],
  },
  mapa: mapaB("ENSAYOS DE MATERIALES", [
    ["Tracción", "σ = F/S₀ · E · σe · σR · A · Z", "var(--red)"],
    ["Dureza", "Brinell · Vickers · Rockwell", "var(--pen)"],
    ["Dinámicos", "Charpy · fatiga · fluencia", "var(--leaf)"],
    ["No destructivos", "ultrasonidos · rayos X · penetrantes", "var(--inf)"],
  ]),
  tarjetas: [
    ["Tensión y deformación", "σ = F/S₀ ; ε = ΔL/L₀"],
    ["Probeta proporcional", "L₀ = 5,65 √S₀ ≈ 5 d₀"],
    ["Alargamiento", "A = (Lu − L₀)/L₀ · 100"],
    ["Estricción", "Z = (S₀ − Su)/S₀ · 100"],
    ["Tensión de trabajo", "σt = σe / n"],
    ["Brinell", "HB = 0,102·2F / [πD(D − √(D² − d²))]"],
    ["Vickers", "HV = 0,1891 F / d²"],
    ["Rockwell", "HRC = 100 − e/0,002 ; HRB = 130 − e/0,002"],
    ["Charpy", "E = m g (h₀ − h₁) = m g L (cos β − cos α)"],
    ["Límite de fatiga", "Tensión que se aguanta con infinitos ciclos (aceros)"],
    ["Fluencia", "Deformación con el tiempo a alta temperatura: I, II, III"],
    ["END internos / superficiales", "Ultrasonidos, rayos X / penetrantes, partículas magnéticas"],
  ],
  familias: [
    "Estirad una goma elástica y un trozo de bolsa de plástico y comparad cómo se deforman: ¿recuperan su forma?",
    "Intentad rayar distintos materiales de casa (vidrio, una moneda, una cuchara) con una llave y ordenadlos por dureza.",
    "Buscad en una bicicleta o una silla un punto donde se haya roto algo por fatiga y observad la superficie de rotura.",
    "Preguntad en un taller de coches o en la ITV qué inspecciones hacen sin desmontar ni romper piezas.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Materiales y fabricación»: propiedades de los materiales y procedimientos de ensayo (tracción, dureza, resiliencia, fatiga, fluencia, ensayos tecnológicos); técnicas de diagnóstico y ensayos no destructivos; normas de ensayo e interpretación de resultados; cálculo de tensiones admisibles con coeficiente de seguridad.`,
    ideas: [
      "Ensayo de tracción casero con probetas de PLA y pesas o un dinamómetro digital.",
      "Comparar con un durómetro Shore distintos plásticos y gomas del aula.",
      "Construir un pequeño péndulo con un transportador para comparar la energía absorbida por probetas de distintos plásticos.",
      "Inspección con líquidos penetrantes de una pieza agrietada (kits de bajo coste) o simulación de ultrasonidos con una aplicación de sonar.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Ensayo de tracción, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ensayo_de_tracci%C3%B3n" },
    { t: "Dureza (materiales), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dureza" },
    { t: "Péndulo de Charpy, Wikipedia en español", url: "https://es.wikipedia.org/wiki/P%C3%A9ndulo_de_Charpy" },
  ],
  revisado: "2026-11-21",
};
