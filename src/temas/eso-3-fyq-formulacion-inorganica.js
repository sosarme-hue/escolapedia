// Física y Química 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Física y Química",
  curso: "3-eso",
  titulo: "Formulación inorgánica básica",
  minutos: 60,
  objetivos: ["Comprender qué indica una fórmula química y qué es el número de oxidación", "Formular y nombrar sustancias simples, óxidos, hidruros y sales binarias", "Usar la nomenclatura de composición con prefijos y la de números de oxidación", "Reconocer compuestos binarios de uso cotidiano"],
  claves: ["fórmula química", "número de oxidación", "compuesto binario", "óxido", "hidruro", "sal binaria", "prefijos multiplicadores", "IUPAC"],
  pregunta: {
    texto: "En la etiqueta de una pasta de dientes pone «fluoruro de sodio» y en la de un protector solar, «dióxido de titanio». ¿Cómo sabe un químico de cualquier país qué sustancia es solo con leer su nombre?",
    respuesta: "Porque hay unas <mark>normas internacionales</mark>, las de la <b>IUPAC</b>, que fijan cómo se escribe la <mark>fórmula</mark> y cómo se nombra cada sustancia. «Dióxido de titanio» significa exactamente TiO₂: un átomo de titanio por cada dos de oxígeno. Es un idioma común para la química de todo el mundo.",
  },
  bloques: [
    {
      html: `<h3>Qué es formular</h3><p>Una <mark>fórmula química</mark> representa una sustancia con los <b>símbolos</b> de sus elementos y unos <b>subíndices</b> que indican la proporción de átomos. En H₂O hay 2 átomos de hidrógeno por cada uno de oxígeno; en CO₂, 1 de carbono por cada 2 de oxígeno. El subíndice 1 no se escribe. <b>Formular</b> es escribir la fórmula a partir del nombre, y <b>nombrar</b> es hacer lo contrario. Las normas las establece la <b>IUPAC</b> (Unión Internacional de Química Pura y Aplicada), con las recomendaciones de 2005. En este curso trabajamos los <b>compuestos binarios</b>, formados por dos elementos: óxidos, hidruros y sales binarias.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La fórmula Fe2O3: los símbolos indican los elementos y los subíndices, 2 de hierro y 3 de oxígeno, la proporción de átomos">${BG}
        ${t(130, 96, "Fe₂O₃", { size: 48 })}
        ${fl(86, 40, 92, 62, "var(--pen)", 2)}${t(70, 32, "símbolo", { size: 11, color: "var(--pen)" })}
        ${fl(116, 130, 112, 108, "var(--red)", 2)}${fl(176, 130, 172, 108, "var(--red)", 2)}${t(146, 146, "subíndices", { size: 11, color: "var(--red)" })}
        ${t(130, 170, "2 átomos de Fe por cada 3 de O", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>El número de oxidación</h3><p>Para escribir bien las fórmulas usamos el <mark>número de oxidación</mark>, un número con signo que indica, de forma simplificada, la carga que tendría un átomo si cediera o ganara electrones. Los <b>metales</b> siempre tienen números de oxidación <b>positivos</b>. El <b>oxígeno</b> actúa casi siempre con <b>−2</b>. El <b>hidrógeno</b> actúa con <b>+1</b> cuando se une a no metales y con <b>−1</b> cuando se une a metales. Los no metales, cuando van a la derecha en la fórmula, usan su número negativo: −1 los halógenos, −2 el azufre, −3 el nitrógeno. La regla de oro es que en un compuesto la <mark>suma de los números de oxidación es cero</mark>.</p>${tabla(["Elemento", "Nº de oxidación"], [["Li, Na, K, Ag", "+1"], ["Be, Mg, Ca, Ba, Zn", "+2"], ["Al", "+3"], ["Fe, Co, Ni", "+2, +3"], ["Cu", "+1, +2"], ["O", "−2"], ["F, Cl, Br, I", "−1 (con metales)"], ["S", "−2 (con metales)"], ["N", "−3 (con metales)"]])}`,
    },
    {
      html: `<h3>El método del aspa</h3><p>Para escribir la fórmula de un compuesto binario hay un truco sencillo. Primero se escribe a la <b>izquierda</b> el elemento <b>menos electronegativo</b> (normalmente el metal) y a la <b>derecha</b> el más electronegativo. Después se escriben sus números de oxidación, se <mark>intercambian</mark> sin el signo y se colocan como subíndices del otro elemento. Por último, si se puede, se <b>simplifican</b>. Por ejemplo, para el óxido de aluminio: Al (+3) y O (−2); intercambiando, Al₂O₃. Para el óxido de calcio: Ca (+2) y O (−2) da Ca₂O₂, que se simplifica a <b>CaO</b>. Siempre se puede comprobar: en Al₂O₃, 2 · (+3) + 3 · (−2) = 0.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Método del aspa: aluminio más tres y oxígeno menos dos; los números se cruzan y quedan como subíndices, Al2O3">${BG}
        ${t(60, 66, "Al", { size: 28 })}${t(86, 46, "+3", { size: 14, color: "var(--red)" })}${t(176, 66, "O", { size: 28 })}${t(204, 46, "−2", { size: 14, color: "var(--pen)" })}
        ${fl(92, 52, 200, 118, "var(--red)", 2)}${fl(210, 54, 94, 118, "var(--pen)", 2)}
        ${t(60, 140, "Al", { size: 28 })}${t(88, 146, "2", { size: 18, color: "var(--pen)" })}${t(176, 140, "O", { size: 28 })}${t(204, 146, "3", { size: 18, color: "var(--red)" })}
        ${t(130, 22, "se cruzan sin signo", { size: 11, color: "var(--muted)" })}
        ${t(130, 172, "2·(+3) + 3·(−2) = 0", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Las sustancias simples</h3><p>Las <mark>sustancias simples</mark> están formadas por un solo elemento. Los <b>metales</b> y los <b>gases nobles</b> se representan solo con su símbolo y se nombran con el nombre del elemento: Fe (hierro), Cu (cobre), He (helio). Muchos <b>no metales</b> forman moléculas de varios átomos, y la fórmula lleva un subíndice. Se nombran con un <b>prefijo</b> que indica el número de átomos: H₂, <b>dihidrógeno</b>; O₂, <b>dioxígeno</b>; N₂, <b>dinitrógeno</b>; Cl₂, <b>dicloro</b>; O₃, <b>trioxígeno</b> (ozono); P₄, <b>tetrafósforo</b>; S₈, <b>octaazufre</b>. En el lenguaje cotidiano, decimos «oxígeno» o «hidrógeno» refiriéndonos a la molécula, pero el nombre sistemático deja claro cuántos átomos tiene.</p>`,
    },
    {
      html: `<h3>Los prefijos y las dos nomenclaturas</h3><p>Los compuestos binarios se pueden nombrar de dos formas. En la <mark>nomenclatura de composición</mark> (sistemática) se usan <b>prefijos multiplicadores</b> que indican el número de átomos de cada elemento: mono (1), di (2), tri (3), tetra (4), penta (5), hexa (6), hepta (7). Por ejemplo, Fe₂O₃ es <b>trióxido de dihierro</b>. El prefijo mono solo se usa cuando hace falta para evitar confusiones, como en CO, monóxido de carbono. En la <mark>nomenclatura de números de oxidación</mark> (o de Stock) se escribe el nombre del compuesto y, si el metal tiene varios números de oxidación, se indica el que usa con <b>números romanos</b> entre paréntesis: Fe₂O₃ es <b>óxido de hierro(III)</b>. Si solo tiene uno, no se pone: CaO es óxido de calcio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La fórmula Fe2O3 se nombra trióxido de dihierro con prefijos y óxido de hierro tres con números de oxidación">${BG}
        ${t(130, 40, "Fe₂O₃", { size: 30 })}${fl(110, 52, 70, 82)}${fl(150, 52, 190, 82)}
        ${caja(8, 86, 122, 44, "", "var(--pen)")}${t(69, 104, "trióxido", { size: 12, color: "var(--pen)" })}${t(69, 120, "de dihierro", { size: 12, color: "var(--pen)" })}
        ${caja(134, 86, 118, 44, "", "var(--red)")}${t(193, 104, "óxido de", { size: 12, color: "var(--red)" })}${t(193, 120, "hierro(III)", { size: 12, color: "var(--red)" })}
        ${t(69, 152, "prefijos", { size: 10, color: "var(--muted)" })}${t(193, 152, "nº de oxidación", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "lBCHQugsl2E", titulo: "Formulación inorgánica. ÓXIDOS metálicos, no metálicos y haluros de oxígeno", canal: "Amigos de la Química", vistas: 3443022 },
    },
    {
      html: `<h3>Los óxidos</h3><p>Los <mark>óxidos</mark> son combinaciones del <b>oxígeno</b> (con número de oxidación −2) con cualquier otro elemento, salvo los halógenos. El oxígeno se escribe a la <b>derecha</b>. Con metales: Na₂O, óxido de sodio; MgO, óxido de magnesio; FeO, óxido de hierro(II) o monóxido de hierro; Cu₂O, óxido de cobre(I). Con no metales, se usa sobre todo la nomenclatura de prefijos: CO, monóxido de carbono; CO₂, dióxido de carbono; SO₂, dióxido de azufre; SO₃, trióxido de azufre; NO₂, dióxido de nitrógeno; N₂O₅, pentaóxido de dinitrógeno. Muchos óxidos nos rodean: la herrumbre es óxido de hierro(III), la arena es SiO₂ y la cal viva es CaO.</p>${tabla(["Fórmula", "Prefijos", "Nº de oxidación"], [["Na₂O", "óxido de disodio", "óxido de sodio"], ["CuO", "monóxido de cobre", "óxido de cobre(II)"], ["Al₂O₃", "trióxido de dialuminio", "óxido de aluminio"], ["CO₂", "dióxido de carbono", "óxido de carbono(IV)"]])}`,
    },
    {
      html: `<h3>Los compuestos de oxígeno con halógenos</h3><p>Cuando el oxígeno se une a los halógenos (F, Cl, Br, I), la IUPAC considera que el halógeno es más electronegativo, así que el <b>halógeno va a la derecha</b> y el compuesto se llama <mark>haluro de oxígeno</mark>. Se usa la nomenclatura de prefijos. Por ejemplo: OF₂, difluoruro de oxígeno; OCl₂, dicloruro de oxígeno; O₃Cl₂, dicloruro de trioxígeno; O₅Br₂, dibromuro de pentaoxígeno. Es una excepción que conviene recordar, porque durante muchos años estos compuestos se escribían al revés y se llamaban óxidos.</p>`,
    },
    {
      html: `<h3>Los hidruros</h3><p>Los <mark>hidruros</mark> son combinaciones del <b>hidrógeno</b> con otro elemento. Con los <b>metales</b>, el hidrógeno actúa con −1 y se escribe a la derecha: NaH, hidruro de sodio; CaH₂, dihidruro de calcio o hidruro de calcio; FeH₃, trihidruro de hierro o hidruro de hierro(III). Con los halógenos y el azufre, el hidrógeno actúa con +1 y se escribe a la <b>izquierda</b>: HF, fluoruro de hidrógeno; HCl, cloruro de hidrógeno; H₂S, sulfuro de dihidrógeno. Disueltos en agua forman los <b>hidrácidos</b>: el HCl en agua es el <b>ácido clorhídrico</b>, que hay en el estómago y en el salfumán. Algunos hidruros tienen nombres tradicionales aceptados por la IUPAC: <b>H₂O, agua; NH₃, amoniaco; CH₄, metano</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Hidruros: con metales el hidrógeno va a la derecha, como NaH; con halógenos y azufre va a la izquierda, como HCl; y tres nombres tradicionales: agua, amoniaco y metano">${BG}
        ${caja(10, 18, 114, 64, "", "var(--pen)")}${t(67, 40, "con metal", { size: 11, color: "var(--pen)" })}${t(67, 68, "NaH · CaH₂", { size: 13 })}
        ${caja(136, 18, 114, 64, "", "var(--red)")}${t(193, 40, "con no metal", { size: 11, color: "var(--red)" })}${t(193, 68, "HCl · H₂S", { size: 13 })}
        ${t(130, 108, "nombres tradicionales", { size: 11, color: "var(--muted)" })}
        ${[["H₂O", "agua"], ["NH₃", "amoniaco"], ["CH₄", "metano"]].map(([f, n], i) => `${t(50 + i * 80, 136, f, { size: 15, color: "var(--leaf)" })}${t(50 + i * 80, 156, n, { size: 10, weight: 400 })}`).join("")}</svg>`,
      video: { id: "wkqoQjpxAUk", titulo: "Formulación inorgánica. HIDRUROS metálicos, no metálicos y haluros de hidrógeno", canal: "Amigos de la Química", vistas: 2400090 },
    },
    {
      html: `<h3>Las sales binarias</h3><p>Las <mark>sales binarias</mark> son combinaciones de un <b>metal</b> con un <b>no metal</b> (que no sea el oxígeno ni el hidrógeno). El metal va a la izquierda y el no metal a la derecha, con su número de oxidación negativo. Para nombrarlas, el no metal termina en <mark>-uro</mark>: fluoruro, cloruro, bromuro, yoduro, sulfuro, nitruro, carburo. Por ejemplo: NaCl, cloruro de sodio, la sal de mesa; KI, yoduro de potasio, que se añade a la sal yodada; CaF₂, difluoruro de calcio o fluoruro de calcio, el mineral fluorita; FeS, sulfuro de hierro(II); FeCl₃, tricloruro de hierro o cloruro de hierro(III). También hay sales entre dos no metales, como el CCl₄, tetracloruro de carbono, o el PCl₅, pentacloruro de fósforo.</p>`,
      video: { id: "xRSkwbvtW8c", titulo: "Formulación inorgánica. SALES BINARIAS", canal: "Amigos de la Química", vistas: 1699430 },
    },
    {
      html: `<h3>Del nombre a la fórmula y al revés</h3><p>Para <b>formular a partir del nombre</b>: si el nombre tiene prefijos, basta con traducirlos a subíndices (pentaóxido de dinitrógeno, N₂O₅). Si tiene un número romano, se usa como número de oxidación del metal y se aplica el aspa (óxido de plomo(IV): Pb⁴⁺ y O²⁻, Pb₂O₄, que se simplifica a PbO₂). Para <b>nombrar a partir de la fórmula</b>: con prefijos, se leen los subíndices; con números de oxidación, se calcula el del metal sabiendo que la suma es cero. En CuCl₂, el cloro tiene −1 y hay dos, así que el cobre debe tener +2: <b>cloruro de cobre(II)</b>. Con práctica, en pocas semanas se formula con la misma soltura con la que se escribe una palabra.</p>`,
    },
    {
      html: `<h3>Compuestos binarios de la vida diaria</h3><p>Muchos compuestos binarios están en nuestra vida cotidiana. El <b>cloruro de sodio</b> (NaCl) sala la comida y quita el hielo de las carreteras. El <b>dióxido de carbono</b> (CO₂) da las burbujas a los refrescos y es el principal gas de efecto invernadero. El <mark>monóxido de carbono</mark> (CO), que se forma en combustiones con poco oxígeno, es un gas venenoso, invisible e inodoro: por eso hay que revisar las calderas y estufas. El <b>amoniaco</b> (NH₃) se usa en productos de limpieza y fertilizantes. El <b>dióxido de titanio</b> (TiO₂) es el pigmento blanco de pinturas y protectores solares. Y el <b>fluoruro de sodio</b> (NaF) de la pasta de dientes refuerza el esmalte.</p>`,
    },
  ],
  figura: {
    titulo: "Los compuestos binarios de un vistazo",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Tres columnas: óxidos, elemento más oxígeno, como CO2; hidruros, metal más hidrógeno o hidrógeno más no metal, como NaH y HCl; sales binarias, metal más no metal acabado en uro, como NaCl">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["ÓXIDOS", "elemento + O⁻²", "CO₂ · Fe₂O₃ · CaO", "dióxido de carbono", "var(--red)"], ["HIDRUROS", "metal + H⁻¹ / H⁺¹ + no metal", "NaH · HCl · NH₃", "hidruro de sodio", "var(--pen)"], ["SALES BINARIAS", "metal + no metal (-uro)", "NaCl · FeS · KI", "cloruro de sodio", "var(--leaf)"]].map(([n, r, e, x, c], i) => { const X = 20 + i * 206; return `<rect x="${X}" y="20" width="190" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${t(X + 95, 52, n, { size: 17, color: c, font: D })}${t(X + 95, 88, r, { size: 12, weight: 400 })}${t(X + 95, 136, e, { size: 16 })}${t(X + 95, 180, x, { size: 12, weight: 400, color: "var(--muted)" })}`; }).join("")}
    </svg>`,
  },
  video: { id: "CqsXRn1kdzg", titulo: "ÓXIDOS. Formulación Inorgánica", canal: "Susi Profe", vistas: 688942, megusta: 0, busqueda: "formulación inorgánica óxidos" },
  ejemplos: [
    { enunciado: "Formula el óxido de hierro(III).",
      pasos: ["Hierro con +3, oxígeno con −2.", "Intercambiamos: Fe₂O₃.", "No se puede simplificar; comprobamos: 2·(+3) + 3·(−2) = 0."],
      resultado: "Fe₂O₃." },
    { enunciado: "Nombra PbO₂ con las dos nomenclaturas.",
      pasos: ["Prefijos: 1 Pb y 2 O → dióxido de plomo.", "Número de oxidación: O tiene −2 y hay dos: −4. Pb debe tener +4.", "El plomo tiene varios números de oxidación, así que se indica: (IV)."],
      resultado: "dióxido de plomo u óxido de plomo(IV)." },
    { enunciado: "Formula el sulfuro de aluminio.",
      pasos: ["Aluminio +3; azufre, como -uro, −2.", "Intercambiamos: Al₂S₃.", "Comprobamos: 2·(+3) + 3·(−2) = 0."],
      resultado: "Al₂S₃." },
  ],
  errores: [
    "Escribir el oxígeno a la izquierda en los óxidos: va a la derecha (salvo con halógenos).",
    "Olvidar simplificar: Ca₂O₂ debe quedar CaO.",
    "Poner el número romano a metales con un solo número de oxidación: «óxido de sodio(I)» no es necesario.",
    "Simplificar en la nomenclatura de prefijos cuando la fórmula no lo permite, o cambiar los subíndices al nombrar.",
    "Escribir «cloruro de hidrógeno» como ClH: el hidrógeno va a la izquierda con los no metales.",
  ],
  ejercicios: [
    { q: "¿Qué indican los subíndices de la fórmula N₂O₅?", sol: "Que hay 2 átomos de nitrógeno por cada 5 de oxígeno." },
    { q: "Calcula el número de oxidación del metal en: FeCl₃, CuO, SnO₂.", sol: "Fe +3, Cu +2, Sn +4." },
    { q: "Nombra estas sustancias simples: O₂, N₂, O₃, Cl₂.", sol: "Dioxígeno, dinitrógeno, trioxígeno (ozono) y dicloro." },
    { q: "Formula: óxido de potasio, óxido de magnesio, óxido de cobre(I), trióxido de azufre.", sol: "K₂O, MgO, Cu₂O, SO₃." },
    { q: "Nombra con prefijos y con números de oxidación: FeO, Fe₂O₃, Al₂O₃.", sol: "Monóxido de hierro u óxido de hierro(II); trióxido de dihierro u óxido de hierro(III); trióxido de dialuminio u óxido de aluminio." },
    { q: "Formula: hidruro de litio, hidruro de calcio, sulfuro de hidrógeno, amoniaco.", sol: "LiH, CaH₂, H₂S, NH₃." },
    { q: "Formula: cloruro de potasio, bromuro de magnesio, yoduro de plata, sulfuro de cobre(II).", sol: "KCl, MgBr₂, AgI, CuS." },
    { q: "Nombra: CaF₂, Na₂S, FeCl₂, CCl₄.", sol: "Fluoruro de calcio, sulfuro de sodio, cloruro de hierro(II) o dicloruro de hierro, tetracloruro de carbono." },
    { q: "Formula y nombra el compuesto del oxígeno con el cloro en el que hay 2 Cl y 1 O.", sol: "OCl₂, dicloruro de oxígeno." },
    { q: "¿Por qué es peligroso el monóxido de carbono y cuándo se forma?", sol: "Es venenoso, invisible e inodoro; se forma en combustiones con poco oxígeno, como en calderas o estufas mal revisadas." },
  ],
  quiz: [
    { q: "El número de oxidación del oxígeno en los óxidos es…", o: ["+2", "−2", "−1"], a: 1, e: "−2." },
    { q: "La fórmula del óxido de calcio es…", o: ["Ca₂O₂", "CaO", "CaO₂"], a: 1, e: "Se simplifica: CaO." },
    { q: "CO₂ se llama…", o: ["óxido de carbono", "dióxido de carbono", "carburo de oxígeno"], a: 1, e: "Dióxido de carbono." },
    { q: "En los hidruros metálicos, el hidrógeno actúa con…", o: ["+1", "−1", "−2"], a: 1, e: "−1." },
    { q: "NH₃ es…", o: ["metano", "amoniaco", "agua"], a: 1, e: "Amoniaco." },
    { q: "Las sales binarias terminan en…", o: ["-ato", "-uro", "-ito"], a: 1, e: "-uro." },
    { q: "La fórmula del cloruro de sodio es…", o: ["NaCl", "ClNa", "NaCl₂"], a: 0, e: "NaCl." },
    { q: "En Fe₂O₃, el hierro tiene número de oxidación…", o: ["+2", "+3", "+6"], a: 1, e: "+3." },
    { q: "El prefijo «penta» significa…", o: ["4", "5", "6"], a: 1, e: "5." },
    { q: "El compuesto de oxígeno y flúor se escribe…", o: ["F₂O", "OF₂", "FO₂"], a: 1, e: "OF₂: el halógeno a la derecha." },
  ],
  examen: [
    { q: "El cloruro de hierro(III) es…", o: ["FeCl", "FeCl₂", "FeCl₃"], a: 2, e: "FeCl₃." },
    { q: "H₂S se llama…", o: ["sulfuro de dihidrógeno", "hidruro de azufre", "dihidruro de azufre"], a: 0, e: "Sulfuro de dihidrógeno." },
    { q: "La suma de los números de oxidación en un compuesto es…", o: ["1", "0", "−1"], a: 1, e: "Cero." },
  ],
  feynman: ["Qué significan los símbolos y los subíndices de una fórmula", "Cómo se usa el método del aspa para formular", "En qué se diferencian óxidos, hidruros y sales binarias"],
  mapa: mapa("FORMULACIÓN", "var(--eso)", [
    ["Herramientas", "nº de oxidación · aspa · suma 0", "var(--pen)"],
    ["Nombres", "prefijos · números romanos", "var(--red)"],
    ["Óxidos e hidruros", "CO₂ · Fe₂O₃ · NaH · HCl", "#b8860b"],
    ["Sales binarias", "NaCl · FeS · KI (-uro)", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Fórmula química", "Símbolos y subíndices: qué átomos y en qué proporción."],
    ["Número de oxidación", "Carga simplificada de un átomo; la suma en un compuesto es 0."],
    ["Óxido", "Elemento + oxígeno (−2): CO₂, Fe₂O₃."],
    ["Hidruro metálico", "Metal + hidrógeno (−1): NaH, CaH₂."],
    ["Haluro de hidrógeno", "H + halógeno: HCl, cloruro de hidrógeno."],
    ["Sal binaria", "Metal + no metal acabado en -uro: NaCl."],
    ["Prefijos", "mono 1, di 2, tri 3, tetra 4, penta 5, hexa 6, hepta 7."],
    ["Stock", "Número de oxidación en romanos: óxido de hierro(III)."],
  ],
  familias: ["Buscad en etiquetas de productos de casa nombres de compuestos binarios y escribid su fórmula.", "Haced tarjetas con nombre por un lado y fórmula por otro y jugad a emparejarlas.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "La materia: nomenclatura de sustancias simples y compuestos binarios (óxidos, hidruros y sales binarias) según las normas de la IUPAC (RD 217/2022, Física y Química 2º y 3º).",
    ideas: ["Dominó de formulación con fórmulas y nombres.", "Concurso por equipos con pizarras: el profesor dice un nombre y gana quien antes escribe la fórmula.", "Búsqueda de compuestos binarios en etiquetas de productos reales."],
  },
  fuentes: [RD, wiki("Nomenclatura química de los compuestos inorgánicos", "Nomenclatura_qu%C3%ADmica_de_los_compuestos_inorg%C3%A1nicos"), wiki("Óxido", "%C3%93xido")],
  revisado: "2026-11-12",
};
