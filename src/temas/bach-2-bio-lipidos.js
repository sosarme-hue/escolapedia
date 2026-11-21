// Biología 2º Bachillerato · Lípidos (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, fosfo, bicapa, cadena, arbol } = require("./_bach2-bio");

const zig = (x, y, n, c, codo = -1) => {
  let d = `M${x} ${y}`, cx = x, cy = y;
  for (let i = 1; i <= n; i++) { cx += 16; cy = y + (i % 2 ? 9 : 0); if (i === codo) { cy += 18; } d += ` L ${cx} ${cy}`; if (i === codo) y += 18; }
  return `<path d="${d}" fill="none" stroke="${c}" stroke-width="3" stroke-linejoin="round"/>`;
};

// Ácido graso saturado (recto) e insaturado (con un codo en el doble enlace cis).
const agSVG = marco("Ácido graso saturado, con la cadena recta, y ácido graso insaturado, con un codo en el doble enlace cis que impide que las moléculas se empaqueten", `
  ${T(130, 18, "Ácido palmítico (16:0) · saturado", { fs: 11, b: true, c: "var(--sun)" })}
  <rect x="12" y="34" width="34" height="22" rx="6" fill="var(--red)"/>${T(29, 49, "COOH", { fs: 9.5, b: true, c: "#fff" })}
  ${zig(46, 40, 12, "var(--sun)")}
  ${T(130, 92, "Ácido oleico (18:1, cis) · insaturado", { fs: 11, b: true, c: "var(--leaf)" })}
  <rect x="12" y="104" width="34" height="22" rx="6" fill="var(--red)"/>${T(29, 119, "COOH", { fs: 9.5, b: true, c: "#fff" })}
  ${zig(46, 110, 12, "var(--leaf)", 7)}
  <circle cx="158" cy="132" r="9" fill="none" stroke="var(--red)" stroke-width="2"/>${T(176, 166, "C=C cis: codo", { fs: 10.5, b: true, c: "var(--red)" })}
  ${T(60, 166, "cabeza polar", { fs: 10.5, b: true, c: "var(--red)" })}`);

// Triacilglicérido: glicerina + 3 ácidos grasos.
const tagSVG = marco("Un triacilglicérido se forma por esterificación de la glicerina con tres ácidos grasos, liberando tres moléculas de agua", `
  <rect x="16" y="30" width="44" height="120" rx="10" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.4"/>${T(38, 94, "Glicerina", { fs: 10, b: true, c: "var(--pen)" })}
  ${[50, 90, 130].map((y) => `<circle cx="68" cy="${y}" r="7" fill="var(--red)"/>${zig(76, y - 4, 9, "var(--sun)")}`).join("")}
  ${T(150, 24, "3 ácidos grasos", { fs: 11, b: true, c: "var(--sun)" })}
  ${T(130, 168, "enlaces éster (−3 H₂O)", { fs: 11, b: true, c: "var(--red)" })}`);

// Micela, bicapa y liposoma.
const micelaSVG = marco("Las moléculas anfipáticas en agua forman micelas (ácidos grasos), bicapas (fosfolípidos) y liposomas, esconden las colas hidrófobas y exponen las cabezas polares", `
  ${Array.from({ length: 12 }, (_, i) => { const a = (i * Math.PI) / 6, x = 48 + 30 * Math.cos(a), y = 76 + 30 * Math.sin(a); return `<path d="M${x.toFixed(1)} ${y.toFixed(1)} L ${(48 + 10 * Math.cos(a)).toFixed(1)} ${(76 + 10 * Math.sin(a)).toFixed(1)}" stroke="var(--sun)" stroke-width="2"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" fill="var(--red)"/>`; }).join("")}
  ${T(48, 130, "Micela", { fs: 11, b: true })}
  <g transform="translate(96 28) scale(.82)">${bicapa(6, 90, 10, 14)}</g>
  ${T(140, 130, "Bicapa", { fs: 11, b: true })}
  <circle cx="222" cy="76" r="30" fill="none" stroke="var(--red)" stroke-width="5" stroke-dasharray="4 3"/><circle cx="222" cy="76" r="18" fill="var(--water)" fill-opacity=".3" stroke="var(--red)" stroke-width="5" stroke-dasharray="4 3"/>
  ${T(222, 130, "Liposoma", { fs: 11, b: true })}
  ${T(130, 162, "cabeza polar fuera, colas apolares dentro", { fs: 10.5, b: true, c: "var(--muted)" })}`);

// Fosfoglicérido.
const fosfoSVG = marco("Estructura de un fosfoglicérido: glicerina unida a dos ácidos grasos (colas hidrófobas) y a un grupo fosfato con un alcohol (cabeza hidrófila)", `
  <rect x="96" y="14" width="68" height="28" rx="14" fill="var(--red)"/>${T(130, 33, "Alcohol", { fs: 11, b: true, c: "#fff" })}
  <rect x="104" y="48" width="52" height="24" rx="8" fill="#b45309"/>${T(130, 65, "PO₄⁻", { fs: 11, b: true, c: "#fff" })}
  <rect x="84" y="78" width="92" height="22" rx="6" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)"/>${T(130, 94, "Glicerina", { fs: 11, b: true, c: "var(--pen)" })}
  ${[112, 148].map((x) => { let d = `M${x} 100`; for (let i = 1; i <= 7; i++) d += ` L ${x + (i % 2 ? 6 : -6)} ${100 + i * 10}`; return `<path d="${d}" fill="none" stroke="var(--sun)" stroke-width="3"/>`; }).join("")}
  ${T(40, 46, "cabeza", { fs: 11, b: true, c: "var(--red)" })}${T(40, 60, "hidrófila", { fs: 11, b: true, c: "var(--red)" })}
  ${T(214, 134, "colas", { fs: 11, b: true, c: "#b45309" })}${T(214, 148, "hidrófobas", { fs: 11, b: true, c: "#b45309" })}`);

// Núcleo de esterano (4 anillos).
const hexa = (cx, cy, r) => `<polygon points="${Array.from({ length: 6 }, (_, i) => { const a = (Math.PI / 3) * i + Math.PI / 6; return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`; }).join(" ")}" fill="var(--pen)" fill-opacity=".1" stroke="var(--pen)" stroke-width="2.4"/>`;
const esteranoSVG = marco("Núcleo de esterano del colesterol: tres anillos de seis carbonos y uno de cinco, con un grupo hidroxilo y una cadena lateral", `
  ${hexa(56, 104, 22)}${hexa(94, 82, 22)}${hexa(132, 104, 22)}
  <polygon points="152,80 172,70 190,84 182,106 160,104" fill="var(--pen)" fill-opacity=".1" stroke="var(--pen)" stroke-width="2.4"/>
  ${T(56, 109, "A", { fs: 12, b: true, c: "var(--pen)" })}${T(94, 87, "B", { fs: 12, b: true, c: "var(--pen)" })}${T(132, 109, "C", { fs: 12, b: true, c: "var(--pen)" })}${T(172, 92, "D", { fs: 12, b: true, c: "var(--pen)" })}
  <path d="M37 115 L 22 128" stroke="var(--red)" stroke-width="2.4"/>${T(16, 142, "HO", { fs: 12, b: true, c: "var(--red)" })}
  <path d="M172 70 L 180 50 L 198 44 L 212 54 L 230 48 L 244 58" fill="none" stroke="var(--sun)" stroke-width="2.6"/>
  ${T(130, 30, "Colesterol (esterano)", { fs: 12, b: true })}${T(130, 166, "–OH polar · resto apolar: anfipático", { fs: 10.5, b: true, c: "var(--muted)" })}`);

module.exports = tema({
  titulo: "Lípidos",
  minutos: 120,
  secciones: [4, 4, 4],
  objetivos: [
    "Definir los lípidos por sus propiedades y clasificarlos en saponificables e insaponificables",
    "Describir la estructura y las propiedades de los ácidos grasos saturados e insaturados",
    "Explicar las reacciones de esterificación y de saponificación",
    "Relacionar la estructura de acilglicéridos, ceras, fosfoglicéridos y esfingolípidos con su función",
    "Explicar el comportamiento anfipático de los lípidos de membrana y la formación de micelas y bicapas",
    "Reconocer los terpenos, los esteroides y los eicosanoides, y valorar el papel de los lípidos en la salud",
  ],
  claves: ["lípido", "ácido graso", "saturado", "insaturado", "esencial", "anfipático", "esterificación", "saponificación", "triacilglicérido", "cera", "fosfoglicérido", "esfingolípido", "bicapa lipídica", "terpeno", "esteroide", "colesterol"],
  pregunta: {
    texto: "¿Por qué el aceite de oliva es líquido y la mantequilla sólida, si los dos son grasas?",
    respuesta: "Por sus <mark>ácidos grasos</mark>. El aceite de oliva es rico en ácido oleico, <b>insaturado</b>: su doble enlace cis forma un codo en la cadena y las moléculas no pueden empaquetarse; las fuerzas de Van der Waals entre ellas son débiles y el punto de fusión es bajo. La mantequilla tiene muchos ácidos grasos <b>saturados</b>, de cadena recta, que se colocan en paralelo muy juntos: hace falta más energía para separarlos y a temperatura ambiente son sólidos.",
  },
  lectura: {
    titulo: "El jabón, la química más antigua",
    html: `<p>Una tablilla de arcilla de Mesopotamia, de hace unos 4800 años, describe cómo fabricar jabón hirviendo grasa con cenizas de madera. Sin saberlo, aquellos artesanos realizaban una reacción que hoy llamamos saponificación: las cenizas aportan una sustancia básica (carbonato potásico) que rompe las grasas y libera sus ácidos grasos en forma de sales. Esas sales tienen un extremo que se disuelve en agua y otro que se disuelve en la grasa, así que pueden rodear las manchas de grasa y llevárselas con el agua del aclarado.</p><p>La misma propiedad que permite al jabón limpiar permite a la célula existir. Los fosfolípidos de las membranas tienen una cabeza que busca el agua y unas colas que la evitan, y en el agua se ordenan espontáneamente en una doble capa que separa el interior de la célula del exterior. En este tema estudiarás los lípidos, un grupo de moléculas muy variado: grasas que almacenan energía en las semillas y en nuestro tejido adiposo, ceras que impermeabilizan las hojas y las plumas, fosfolípidos que forman las membranas, y esteroides como el colesterol, la testosterona o la vitamina D. Entenderás también por qué no todas las grasas son iguales para la salud.</p>`,
  },
  bloques: [
    { h: "Concepto y clasificación de los lípidos", p: [
      "Los <mark>lípidos</mark> son un grupo muy heterogéneo de biomoléculas formadas por C, H y O, y a veces P y N. No se definen por una estructura común, sino por sus propiedades: son <b>insolubles en agua</b> (o muy poco solubles) y <b>solubles en disolventes orgánicos</b> apolares, como el éter, el cloroformo, la acetona o el benceno. Tienen menos oxígeno que los glúcidos en proporción, por lo que están más reducidos y almacenan más energía. Al tacto son untuosos y tienen brillo graso.",
      "Se clasifican según contengan o no ácidos grasos en su molécula. Los <b>lípidos saponificables</b> contienen ácidos grasos unidos mediante enlaces éster y pueden formar jabones: son los <b>ácidos grasos</b> y los lípidos que los contienen, tanto los <b>simples</b> (acilglicéridos y ceras, formados solo por C, H y O) como los <b>complejos</b> o de membrana (fosfolípidos y glucolípidos, que tienen además P, N o glúcidos). Los <b>lípidos insaponificables</b> no contienen ácidos grasos y no forman jabones: son los <b>terpenos</b>, los <b>esteroides</b> y los <b>eicosanoides</b> (aunque estos últimos derivan de ácidos grasos).",
    ], svg: arbol("Clasificación de los lípidos", "LÍPIDOS", [["Simples", "acilglicéridos y ceras"], ["Complejos", "fosfolípidos, glucolípidos"], ["Insaponificables", "terpenos, esteroides, eicosanoides"]]), v: ["lip-a", "Lípidos: biomoléculas"] },
    { h: "Los ácidos grasos", p: [
      "Los <mark>ácidos grasos</mark> son ácidos carboxílicos de cadena larga, con un número par de carbonos (normalmente entre 14 y 22) y un grupo carboxilo (–COOH) en un extremo. Rara vez están libres en las células: suelen formar parte de otros lípidos. Se nombran indicando el número de carbonos y de dobles enlaces: el ácido palmítico (16:0) tiene 16 C y ningún doble enlace. Los <b>ácidos grasos saturados</b> solo tienen enlaces simples C–C; su cadena es lineal y flexible, y abundan en las grasas animales: palmítico, esteárico (18:0).",
      "Los <b>ácidos grasos insaturados</b> tienen uno (monoinsaturados) o más (poliinsaturados) dobles enlaces C=C. En los seres vivos los dobles enlaces suelen ser <b>cis</b>, lo que provoca un codo de unos 30° en la cadena. Abundan en los aceites vegetales y en el pescado: ácido oleico (18:1), linoleico (18:2) y linolénico (18:3). Los <mark>ácidos grasos esenciales</mark> son los que nuestro organismo no puede sintetizar y debemos tomar en la dieta: el linoleico (omega-6) y el α-linolénico (omega-3). Las <b>grasas trans</b>, con dobles enlaces en configuración trans, aparecen en la hidrogenación industrial de los aceites y elevan el riesgo cardiovascular.",
    ], svg: agSVG, v: ["lip-d", "Ácidos grasos"] },
    { h: "Propiedades de los ácidos grasos", p: [
      "Los ácidos grasos son moléculas <mark>anfipáticas</mark>: el grupo carboxilo es polar y en el agua se ioniza (–COO⁻), mientras que la cadena hidrocarbonada es apolar e hidrófoba. Por eso, en el agua no se disuelven, sino que se agrupan: en la superficie forman una <b>monocapa</b> con las cabezas en el agua y las colas hacia el aire; dentro del agua forman <b>micelas</b>, esferas con las colas hacia el interior y las cabezas hacia fuera. Si la micela engloba en su interior gotitas de grasa, las mantiene dispersas en el agua.",
      "Su <b>punto de fusión</b> depende de la longitud de la cadena y del número de dobles enlaces. Aumenta con la longitud, porque hay más superficie para las fuerzas de Van der Waals entre cadenas, y disminuye con las insaturaciones, porque los codos impiden que las cadenas se empaqueten. Por eso, a temperatura ambiente, las grasas ricas en ácidos grasos saturados son sólidas (sebo, tocino, mantequilla) y las ricas en insaturados son líquidas (aceites). Una excepción son los aceites de palma y de coco, vegetales pero muy saturados. Los peces de aguas frías tienen grasas muy insaturadas que siguen siendo fluidas a bajas temperaturas.",
    ], svg: L6.tabla("Punto de fusión de algunos ácidos grasos", ["Ácido graso", "C:dobles", "Fusión"], [["Láurico", "12:0", "44 °C"], ["Palmítico", "16:0", "63 °C"], ["Esteárico", "18:0", "70 °C"], ["Oleico", "18:1", "13 °C"], ["Linoleico", "18:2", "−5 °C"]]) },
    { h: "Esterificación y saponificación", p: [
      "La reacción más característica de los ácidos grasos es la <mark>esterificación</mark>: el grupo carboxilo del ácido graso reacciona con un grupo alcohol (–OH) y se forma un <b>éster</b> y una molécula de agua. Así se forman los acilglicéridos y las ceras. La reacción inversa es la <b>hidrólisis</b> del enlace éster, que en el tubo digestivo catalizan las <b>lipasas</b> del jugo pancreático, y que libera de nuevo el ácido graso y el alcohol.",
      "Si la hidrólisis se hace en medio básico con una base fuerte (NaOH o KOH), el ácido graso liberado forma una sal llamada <b>jabón</b>: es la <mark>saponificación</mark>. Ácido graso + NaOH → jabón (sal sódica) + H₂O. Los jabones son anfipáticos como los ácidos grasos: en el agua forman micelas que atrapan la grasa en su interior y la arrastran. Por eso limpian. Los jabones sódicos son duros (pastillas) y los potásicos, blandos. En el intestino, las <b>sales biliares</b>, derivadas del colesterol, actúan de forma parecida: emulsionan las grasas, es decir, las dividen en gotitas, para que las lipasas puedan atacarlas.",
    ], extra: `<div class="formula"><span>Ácido graso + alcohol → éster + H₂O · Ácido graso + NaOH → jabón + H₂O</span></div>`, svg: cadena("Saponificación de una grasa con sosa: se obtienen jabón y glicerina", [["Grasa (triglicérido)", "var(--sun)"], ["+ 3 NaOH", "var(--pen)"], ["3 jabones + glicerina", "var(--leaf)"]], ["calor", "hidrólisis básica"], "Saponificación"), v: ["lip-b", "Esterificación y saponificación"] },
    { h: "Los acilglicéridos o grasas", p: [
      "Los <mark>acilglicéridos</mark> son ésteres de la <b>glicerina</b> (propanotriol) con uno, dos o tres ácidos grasos: monoacilglicéridos, diacilglicéridos y <b>triacilglicéridos</b> o triglicéridos, que son los más abundantes. Como los tres –OH de la glicerina están esterificados, son moléculas totalmente <b>apolares</b> e hidrófobas, sin comportamiento anfipático: en el agua no forman micelas, sino gotas. Si contienen sobre todo ácidos grasos insaturados son líquidos a temperatura ambiente y se llaman <b>aceites</b>; si contienen sobre todo saturados, son sólidos y se llaman <b>sebos</b> o grasas.",
      "Su función principal es la <b>reserva energética</b>: un gramo de grasa proporciona unas <b>9 kcal</b>, más del doble que un gramo de glúcidos, y se almacena sin agua, de forma muy compacta. Un adulto delgado tiene en su tejido adiposo reservas para un mes de ayuno, frente a menos de un día en forma de glucógeno. Se acumulan en los adipocitos de los animales y en las semillas y los frutos oleaginosos de las plantas (girasol, olivo). También son <b>aislantes térmicos</b> (la capa de grasa de las ballenas y los pingüinos), <b>protectores mecánicos</b> (la grasa que envuelve los riñones y la planta del pie) y fuente de agua metabólica (la joroba de los camellos).",
    ], svg: tagSVG },
    { h: "Las ceras", p: [
      "Las <mark>ceras</mark> son ésteres de un ácido graso de cadena larga con un monoalcohol también de cadena larga. Las dos «colas» son muy hidrófobas y el enlace éster apenas es polar, de modo que las ceras son sólidas a temperatura ambiente y totalmente <b>insolubles</b> en agua. Su función es <b>protectora e impermeabilizante</b>: forman cubiertas que evitan la pérdida de agua y la entrada de microorganismos.",
      "En las plantas, la <b>cutícula</b> cérea que recubre las hojas y los frutos reduce la transpiración: por eso las hojas de muchas plantas de clima seco son brillantes, y las ciruelas y las uvas tienen una capa blanquecina (la pruina). En los animales, la cera protege la piel, el pelo y las plumas: las aves acuáticas se untan las plumas con la secreción de su glándula uropigial para no empaparse. El <b>cerumen</b> del oído atrapa el polvo y los microorganismos, y la <b>cera de abeja</b>, que las obreras segregan por glándulas abdominales, forma los panales. La <b>lanolina</b> de la lana de oveja y la cera de carnauba de una palmera se usan en cosmética y para abrillantar.",
    ], svg: L6.tabla("Ceras y su función", ["Cera", "Origen", "Función"], [["Cutícula", "hojas, frutos", "evita la transpiración"], ["Cera de abeja", "abeja obrera", "panal"], ["Cerumen", "oído", "atrapa polvo"], ["Lanolina", "lana de oveja", "impermeabiliza"], ["Uropigial", "aves acuáticas", "plumas secas"]]) },
    { h: "Los fosfoglicéridos", p: [
      "Los <mark>fosfoglicéridos</mark> o glicerofosfolípidos son los lípidos más abundantes de las membranas. Su molécula base es el <b>ácido fosfatídico</b>: una glicerina con dos ácidos grasos esterificados en los carbonos 1 y 2 (normalmente uno saturado y otro insaturado) y un grupo <b>fosfato</b> en el carbono 3. Al fosfato se une, también por enlace éster, un alcohol o un aminoalcohol que da nombre al fosfoglicérido: colina (fosfatidilcolina o lecitina), etanolamina (fosfatidiletanolamina, antes cefalina), serina o inositol.",
      "Son moléculas claramente <b>anfipáticas</b>: la «cabeza» formada por el fosfato y el alcohol es polar e hidrófila, con cargas eléctricas, y las dos «colas» de ácidos grasos son apolares e hidrófobas. Por tener dos colas, su forma es más bien cilíndrica y no forman micelas en el agua, sino <b>bicapas</b>. La lecitina de la yema de huevo y de la soja se usa como emulsionante en la mayonesa y el chocolate, y forma parte del <b>surfactante pulmonar</b>, que reduce la tensión superficial en los alveolos e impide que se colapsen; los bebés muy prematuros aún no lo fabrican y necesitan que se les administre.",
    ], svg: fosfoSVG },
    { h: "Los esfingolípidos", p: [
      "Los <mark>esfingolípidos</mark> son lípidos de membrana en los que la glicerina se sustituye por un aminoalcohol de cadena larga, la <b>esfingosina</b>. La esfingosina unida a un ácido graso mediante un enlace amida forma la <b>ceramida</b>, que actúa como molécula base, igual que el ácido fosfatídico en los fosfoglicéridos. Según lo que se une al –OH libre de la ceramida hay dos grupos. Las <b>esfingomielinas</b> llevan un grupo fosfato y colina o etanolamina, y abundan en la <b>vaina de mielina</b> que rodea los axones de las neuronas y acelera el impulso nervioso.",
      "Los <b>glucoesfingolípidos</b> llevan unido un glúcido en lugar del fosfato: los <b>cerebrósidos</b> tienen un solo monosacárido (glucosa o galactosa) y abundan en las membranas de las neuronas del cerebro; los <b>gangliósidos</b> tienen un oligosacárido complejo con ácido siálico y forman parte del glucocáliz, donde actúan como receptores y en el reconocimiento celular. Algunos antígenos de los grupos sanguíneos son glucoesfingolípidos. Hay enfermedades hereditarias, como la de <b>Tay-Sachs</b>, en las que falta una enzima que degrada los gangliósidos: se acumulan en las neuronas y causan un grave deterioro neurológico.",
    ], svg: L5.compara("Lípidos de membrana", ["Fosfoglicéridos", ["base: glicerina", "ácido fosfatídico", "lecitina, cefalina", "toda membrana"]], ["Esfingolípidos", ["base: esfingosina", "ceramida", "esfingomielina", "mielina, neuronas"]], "var(--red)", "var(--pen)") },
    { h: "Bicapas lipídicas y membranas", p: [
      "Cuando los lípidos de membrana se ponen en contacto con el agua, se ordenan de forma espontánea: las colas hidrófobas se juntan para evitar el agua y las cabezas hidrófilas se orientan hacia ella. Así se forma una <mark>bicapa lipídica</mark>, una doble capa de unos 5 nm de grosor que es la base de todas las membranas biológicas. Una bicapa tiende a cerrarse sobre sí misma para no dejar bordes hidrófobos expuestos y forma vesículas llamadas <b>liposomas</b>. Los liposomas se usan para transportar fármacos, vacunas de ARN mensajero y cosméticos al interior de las células.",
      "La bicapa tiene tres propiedades importantes. Es <b>fluida</b>: los lípidos se mueven con libertad dentro de su capa (difusión lateral, rotación), aunque rara vez saltan de una capa a la otra (flip-flop). La fluidez aumenta con la temperatura y con la proporción de ácidos grasos insaturados y cortos, y el colesterol la regula. Es <b>autoensamblable y autosellante</b>: si se perfora, se cierra sola. Y es <b>semipermeable</b>: deja pasar con facilidad las moléculas pequeñas y apolares (O₂, CO₂) y el agua, pero no los iones ni las moléculas polares grandes, que necesitan proteínas transportadoras. Estudiarás la membrana completa en el tema de la célula.",
    ], svg: micelaSVG, v: ["lip-c", "Los lípidos en 2º de Bachillerato"] },
    { h: "Terpenos o isoprenoides", p: [
      "Los <mark>terpenos</mark> son lípidos insaponificables formados por la unión de varias moléculas de <b>isopreno</b> (2-metil-1,3-butadieno, de 5 carbonos). Se clasifican según el número de isoprenos. Los <b>monoterpenos</b> (2 isoprenos) son las <b>esencias</b> vegetales, responsables del olor y el sabor de muchas plantas: mentol de la menta, limoneno del limón, geraniol del geranio, alcanfor. Los <b>diterpenos</b> (4) incluyen el <b>fitol</b>, que forma parte de la clorofila, y las vitaminas liposolubles <b>A</b>, <b>E</b> y <b>K</b>.",
      "Los <b>triterpenos</b> (6 isoprenos) incluyen el <b>escualeno</b>, precursor del colesterol. Los <b>tetraterpenos</b> (8) son los <b>carotenoides</b>, pigmentos de color amarillo, naranja o rojo que intervienen en la fotosíntesis como pigmentos auxiliares: el <b>β-caroteno</b> de la zanahoria, precursor de la vitamina A, y las <b>xantofilas</b>, que dan color a las hojas en otoño cuando desaparece la clorofila. Los <b>politerpenos</b> (miles de isoprenos) incluyen el <b>caucho</b> natural, que se obtiene del látex del árbol <i>Hevea brasiliensis</i>. La vitamina A es imprescindible para la visión: forma el retinal, el pigmento que capta la luz en los bastones de la retina.",
    ], svg: L6.tabla("Terpenos según el número de isoprenos", ["Tipo", "Isoprenos", "Ejemplos"], [["Monoterpenos", "2", "mentol, limoneno"], ["Diterpenos", "4", "fitol, vit. A, E, K"], ["Triterpenos", "6", "escualeno"], ["Tetraterpenos", "8", "carotenos, xantofilas"], ["Politerpenos", "miles", "caucho"]]) },
    { h: "Los esteroides", p: [
      "Los <mark>esteroides</mark> derivan de un anillo de cuatro ciclos fusionados llamado <b>esterano</b> o ciclopentanoperhidrofenantreno: tres anillos de seis carbonos y uno de cinco. Se diferencian por los grupos funcionales y las cadenas que se unen a él. Los <b>esteroles</b> tienen un –OH en el carbono 3 y una cadena en el 17. El más importante en los animales es el <mark>colesterol</mark>: forma parte de las membranas, donde se intercala entre los fosfolípidos y regula su fluidez, y es el precursor de los demás esteroides. Las plantas tienen otros esteroles, los fitoesteroles, y los hongos, el ergosterol.",
      "A partir del colesterol se sintetizan los <b>ácidos biliares</b>, que forman las sales biliares que emulsionan las grasas; la <b>vitamina D</b> (calciferol), que se forma en la piel con la luz ultravioleta y regula la absorción de calcio (su déficit causa raquitismo); y las <b>hormonas esteroideas</b>. Estas incluyen las hormonas sexuales (<b>testosterona</b>, <b>estradiol</b>, <b>progesterona</b>) y las de la corteza suprarrenal: el <b>cortisol</b>, que regula el metabolismo y frena la inflamación, y la <b>aldosterona</b>, que regula el equilibrio de sales. Los anabolizantes, sustancias que algunos deportistas toman de forma ilegal, son derivados sintéticos de la testosterona con graves efectos secundarios.",
    ], svg: esteranoSVG },
    { h: "Eicosanoides, funciones y salud", p: [
      "Los <mark>eicosanoides</mark> derivan de ácidos grasos poliinsaturados de 20 carbonos (eicosa-), sobre todo del ácido araquidónico. Incluyen las <b>prostaglandinas</b>, los <b>tromboxanos</b> y los <b>leucotrienos</b>, que actúan como hormonas locales: producen la inflamación, la fiebre y el dolor, estimulan la contracción del útero en el parto, intervienen en la coagulación y provocan la constricción de los bronquios en el asma. La aspirina y el ibuprofeno funcionan inhibiendo la enzima que fabrica las prostaglandinas.",
      "En resumen, los lípidos tienen funciones de <b>reserva energética</b>, <b>estructural</b> (membranas, ceras, aislantes), <b>reguladora</b> (hormonas, vitaminas, eicosanoides) y de <b>transporte</b>: los lípidos viajan por la sangre dentro de <b>lipoproteínas</b>. Las <b>LDL</b> llevan el colesterol a los tejidos y, en exceso, se depositan en las paredes de las arterias (el «colesterol malo»); las <b>HDL</b> lo devuelven al hígado (el «colesterol bueno»). Una dieta rica en grasas saturadas y trans eleva las LDL y el riesgo de <b>arteriosclerosis</b>, infarto e ictus; los ácidos grasos monoinsaturados (aceite de oliva) y omega-3 (pescado azul, nueces) lo reducen.",
    ], svg: L6.radial("Funciones de los lípidos", "LÍPIDOS", ["Reserva: 9 kcal/g", "Membranas", "Aislante", "Hormonas", "Vitaminas", "Inflamación"], "var(--sun)") },
  ],
  figura: { titulo: "Lípidos", items: [["Ácidos grasos", "R–COOH", "saturados", "e insaturados"], ["Saponificables", "grasas, ceras", "fosfolípidos", "→ jabones"], ["Membranas", "anfipáticos", "bicapa", "fluida"], ["Insaponificables", "terpenos", "esteroides", "colesterol"]] },
  video: ["lip-a", "Lípidos: biomoléculas"],
  ejemplos: [
    ["Ordena de menor a mayor punto de fusión: ácido esteárico (18:0), oleico (18:1), palmítico (16:0) y linoleico (18:2).", ["Más dobles enlaces → más codos → menor punto de fusión.", "A igual saturación, más carbonos → mayor punto de fusión.", "Insaturados: linoleico &lt; oleico. Saturados: palmítico &lt; esteárico."], "Linoleico &lt; oleico &lt; palmítico &lt; esteárico."],
    ["Escribe la reacción de formación de un triacilglicérido y la de su saponificación con NaOH.", ["Glicerina + 3 ácidos grasos → triacilglicérido + 3 H₂O (esterificación).", "Triacilglicérido + 3 NaOH → glicerina + 3 R–COO⁻Na⁺ (jabón)."], "Esterificación: se liberan 3 H₂O. Saponificación: se obtienen glicerina y 3 moléculas de jabón."],
    ["Clasifica: colesterol, lecitina, cera de abeja, β-caroteno, triestearina y esfingomielina.", ["Saponificables simples: cera de abeja, triestearina.", "Saponificables complejos: lecitina (fosfoglicérido), esfingomielina (esfingolípido).", "Insaponificables: colesterol (esteroide), β-caroteno (terpeno)."], "Simples: cera y triestearina. Complejos: lecitina y esfingomielina. Insaponificables: colesterol y β-caroteno."],
    ["Explica qué ocurre si se agitan ácidos grasos en agua y si se agitan fosfolípidos.", ["Los ácidos grasos tienen una sola cola y forma de cono → micelas.", "Los fosfolípidos tienen dos colas y forma cilíndrica → bicapas y liposomas."], "Ácidos grasos: micelas. Fosfolípidos: bicapas que se cierran en liposomas."],
    ["Una persona de 70 kg tiene 12 kg de grasa y 400 g de glucógeno. Calcula la energía que almacena en cada forma.", ["Grasa: 12 000 g · 9 kcal/g = 108 000 kcal.", "Glucógeno: 400 g · 4 kcal/g = 1600 kcal."], "108 000 kcal en grasa frente a 1600 kcal en glucógeno: la grasa almacena casi 70 veces más."],
    ["¿Por qué las membranas de los peces de aguas polares tienen más ácidos grasos insaturados que las de los peces tropicales?", ["A baja temperatura las membranas tienden a rigidizarse.", "Los dobles enlaces cis impiden el empaquetamiento y bajan el punto de fusión.", "Así la membrana conserva la fluidez necesaria."], "Para mantener la fluidez de la membrana a baja temperatura."],
  ],
  errores: [
    "Definir los lípidos por su estructura: se definen por su insolubilidad en agua y su solubilidad en disolventes orgánicos.",
    "Pensar que los triacilglicéridos forman micelas: son totalmente apolares y forman gotas; los anfipáticos forman micelas o bicapas.",
    "Confundir saturado con «saturado de grasa»: significa sin dobles enlaces C=C en la cadena.",
    "Creer que todo el colesterol es malo: es imprescindible para las membranas, la vitamina D y las hormonas.",
    "Decir que los esteroides son saponificables: no contienen ácidos grasos y no forman jabones.",
    "Pensar que todas las grasas vegetales son insaturadas: el aceite de palma y el de coco son muy saturados.",
  ],
  ejercicios: {
    b: [
      ["¿Qué propiedades comunes tienen los lípidos?", "Son insolubles en agua y solubles en disolventes orgánicos apolares (éter, cloroformo, benceno)."],
      ["Diferencia lípidos saponificables e insaponificables y pon un ejemplo de cada uno.", "Saponificables: contienen ácidos grasos y forman jabones (triglicéridos). Insaponificables: no los contienen (colesterol)."],
      ["¿Qué es un ácido graso? ¿Qué significa la notación 18:1?", "Ácido carboxílico de cadena larga y número par de carbonos. 18:1: 18 carbonos y un doble enlace."],
      ["Diferencia ácidos grasos saturados e insaturados.", "Saturados: solo enlaces simples, cadena recta. Insaturados: uno o más dobles enlaces, con codos si son cis."],
      ["¿Qué son los ácidos grasos esenciales? Cita dos.", "Los que no podemos sintetizar y debemos tomar en la dieta: linoleico (omega-6) y α-linolénico (omega-3)."],
      ["¿Qué significa que una molécula es anfipática?", "Que tiene una parte hidrófila (polar) y otra hidrófoba (apolar)."],
      ["Define saponificación.", "Hidrólisis de un éster de ácido graso en medio básico fuerte que produce sales de ácidos grasos (jabones)."],
      ["¿Qué diferencia hay entre un aceite y un sebo?", "El aceite es líquido a temperatura ambiente (rico en ácidos grasos insaturados); el sebo es sólido (rico en saturados)."],
      ["Cita tres funciones de los triacilglicéridos.", "Reserva energética, aislante térmico y protector mecánico."],
      ["¿Qué es una cera y qué función tiene?", "Éster de un ácido graso y un monoalcohol de cadena larga; función protectora e impermeabilizante."],
      ["Cita tres hormonas esteroideas.", "Testosterona, estradiol, progesterona (también cortisol y aldosterona)."],
      ["¿Qué es el isopreno y qué lípidos se forman a partir de él?", "Hidrocarburo de 5 C; forma los terpenos (esencias, carotenoides, vitaminas A, E y K, caucho)."],
    ],
    m: [
      ["Explica por qué el punto de fusión de los ácidos grasos aumenta con la longitud de la cadena y disminuye con las insaturaciones.", "Cadena más larga: más fuerzas de Van der Waals entre cadenas. Insaturaciones cis: codos que impiden el empaquetamiento y debilitan esas fuerzas."],
      ["Describe la estructura de un fosfoglicérido y explica su comportamiento en el agua.", "Glicerina con dos ácidos grasos (C1 y C2) y fosfato con un alcohol (C3). Es anfipático y en el agua forma bicapas con las colas hacia dentro."],
      ["Explica cómo limpia un jabón.", "Sus moléculas anfipáticas forman micelas que engloban la grasa en su interior hidrófobo; las cabezas hacia fuera las mantienen dispersas en el agua del aclarado."],
      ["¿Por qué las grasas son mejor reserva energética que los glúcidos a largo plazo?", "Aportan 9 kcal/g frente a 4 y se almacenan anhidras, ocupando mucho menos espacio y peso por kcal."],
      ["Compara fosfoglicéridos y esfingolípidos.", "Ambos son lípidos anfipáticos de membrana. Fosfoglicéridos: base glicerina (ácido fosfatídico). Esfingolípidos: base esfingosina (ceramida); incluyen esfingomielinas y glucoesfingolípidos."],
      ["Explica las propiedades de la bicapa lipídica.", "Fluida (difusión lateral), autoensamblable y autosellante, y semipermeable (deja pasar moléculas pequeñas apolares, no iones)."],
      ["Indica qué moléculas se forman a partir del colesterol.", "Ácidos y sales biliares, vitamina D, hormonas sexuales y corticoides (cortisol, aldosterona)."],
      ["Explica la función del colesterol en la membrana plasmática.", "Se intercala entre los fosfolípidos y regula la fluidez: la reduce a temperatura alta y evita la rigidez a temperatura baja."],
      ["¿Qué son los carotenoides y qué función tienen en las plantas y en los animales?", "Tetraterpenos pigmentados; en plantas son pigmentos fotosintéticos auxiliares y protectores; en animales el β-caroteno es precursor de la vitamina A."],
      ["Explica cómo actúan la aspirina y el ibuprofeno.", "Inhiben la enzima (ciclooxigenasa) que fabrica prostaglandinas a partir del ácido araquidónico, y reducen así la inflamación, la fiebre y el dolor."],
      ["Diferencia las LDL de las HDL.", "Lipoproteínas de transporte: las LDL llevan colesterol a los tejidos (en exceso se depositan en arterias); las HDL lo devuelven al hígado."],
      ["¿Por qué las grasas trans son perjudiciales?", "Sus dobles enlaces trans dan cadenas rectas como las saturadas; elevan el colesterol LDL y bajan el HDL, aumentando el riesgo cardiovascular."],
    ],
    a: [
      ["(Tipo PAU) Relaciona la estructura de los fosfolípidos con la organización de la membrana plasmática.", "Son anfipáticos: cabeza polar hidrófila y dos colas apolares. En medio acuoso se disponen en bicapa con las colas enfrentadas y las cabezas hacia el citoplasma y el exterior; la bicapa es fluida y semipermeable y sirve de soporte a proteínas y colesterol."],
      ["(Tipo PAU) Se agita aceite con agua (tubo A) y aceite con agua y jabón (tubo B). Explica qué se observa en cada tubo.", "A: el aceite, apolar, se separa formando una capa encima (menos denso). B: se forma una emulsión estable porque el jabón crea micelas que dispersan las gotitas de aceite."],
      ["(Tipo PAU) Indica qué tipo de lípido es cada uno y una función: a) vitamina D; b) lecitina; c) cutícula de las hojas; d) prostaglandina; e) triestearina.", "a) Esteroide, absorción del calcio. b) Fosfoglicérido, membranas y surfactante. c) Cera, evita la transpiración. d) Eicosanoide, inflamación. e) Triacilglicérido, reserva energética."],
      ["Una bacteria que vive en una fuente termal a 80 °C tiene membranas con ácidos grasos más largos y saturados que las de E. coli. Explícalo.", "A alta temperatura la membrana se volvería demasiado fluida; cadenas largas y saturadas aumentan las fuerzas entre ellas y mantienen la fluidez adecuada."],
      ["Los liposomas se usan para administrar vacunas de ARNm. Explica por qué un liposoma puede fusionarse con la membrana de una célula y liberar su contenido.", "El liposoma está formado por una bicapa lipídica como la membrana; al contactar, ambas bicapas pueden fusionarse y el contenido acuoso del liposoma pasa al citoplasma."],
      ["Explica por qué las personas con obstrucción de la vía biliar digieren mal las grasas y pueden tener déficit de vitaminas A, D, E y K.", "Sin sales biliares las grasas no se emulsionan y las lipasas actúan mal; las vitaminas liposolubles se absorben junto con las grasas, así que también se absorben mal."],
      ["Calcula cuántos gramos de grasa almacenan la misma energía que 1 kg de glucógeno, sabiendo que el glucógeno se almacena con unos 2 g de agua por gramo.", "1 kg de glucógeno = 4000 kcal → 444 g de grasa. Pero ese kilo de glucógeno pesa unos 3 kg con su agua: la grasa ocupa casi 7 veces menos masa."],
      ["Un análisis indica colesterol LDL alto y HDL bajo. Explica qué riesgo supone y qué cambios de dieta y hábitos lo mejoran.", "Riesgo de arteriosclerosis, infarto e ictus. Reducir grasas saturadas y trans, tomar aceite de oliva, pescado azul, frutos secos y fibra, hacer ejercicio (sube las HDL) y no fumar."],
      ["Explica la enfermedad de Tay-Sachs y por qué afecta sobre todo al sistema nervioso.", "Falta la enzima que degrada un gangliósido; este se acumula en los lisosomas de las neuronas, donde los gangliósidos son muy abundantes, y causa su degeneración."],
    ],
  },
  quiz: [
    ["Los lípidos se definen por ser…", ["solubles en agua", "insolubles en agua y solubles en disolventes orgánicos", "polímeros de glucosa", "proteínas"], 1, "Grupo heterogéneo."],
    ["El ácido palmítico (16:0) es…", ["insaturado", "saturado", "esencial", "un esteroide"], 1, "Sin dobles enlaces."],
    ["Los dobles enlaces cis…", ["enderezan la cadena", "producen un codo", "suben el punto de fusión", "no existen"], 1, "Impiden el empaquetamiento."],
    ["Es un ácido graso esencial…", ["palmítico", "esteárico", "linoleico", "oleico"], 2, "Omega-6."],
    ["En el agua los ácidos grasos forman…", ["bicapas", "micelas", "cristales", "puentes disulfuro"], 1, "Una sola cola."],
    ["La saponificación produce…", ["ésteres", "jabones", "proteínas", "glucosa"], 1, "Hidrólisis básica."],
    ["Un triacilglicérido tiene…", ["1 ácido graso", "3 ácidos grasos + glicerina", "fosfato", "esfingosina"], 1, "3 enlaces éster."],
    ["1 g de grasa aporta unas…", ["4 kcal", "9 kcal", "2 kcal", "17 kcal"], 1, "Más del doble que los glúcidos."],
    ["Los aceites son líquidos por tener…", ["ácidos grasos saturados", "ácidos grasos insaturados", "más glicerina", "colesterol"], 1, "Codos cis."],
    ["Las ceras son ésteres de un ácido graso y…", ["glicerina", "un monoalcohol de cadena larga", "esfingosina", "colina"], 1, "Muy hidrófobas."],
    ["La lecitina es un…", ["esteroide", "fosfoglicérido", "terpeno", "triglicérido"], 1, "Fosfatidilcolina."],
    ["Los fosfolípidos en agua forman…", ["micelas", "bicapas", "gotas", "fibras"], 1, "Por tener dos colas."],
    ["La molécula base de los esfingolípidos es…", ["glicerina", "esfingosina", "colesterol", "isopreno"], 1, "Con un ácido graso: ceramida."],
    ["La mielina es rica en…", ["triglicéridos", "esfingomielinas", "ceras", "carotenos"], 1, "Aísla los axones."],
    ["Los terpenos derivan del…", ["isopreno", "esterano", "glicerol", "ácido araquidónico"], 0, "5 carbonos."],
    ["El β-caroteno es precursor de la vitamina…", ["A", "C", "D", "K"], 0, "Tetraterpeno."],
    ["El colesterol es un…", ["terpeno", "esteroide", "fosfolípido", "eicosanoide"], 1, "Núcleo de esterano."],
    ["La vitamina D se forma en la piel con…", ["la luz ultravioleta", "el frío", "el oxígeno", "la insulina"], 0, "A partir de un derivado del colesterol."],
    ["Las prostaglandinas son…", ["esteroides", "eicosanoides", "ceras", "terpenos"], 1, "Derivan del araquidónico."],
    ["Las LDL…", ["llevan colesterol a los tejidos", "devuelven colesterol al hígado", "son glúcidos", "son hormonas"], 0, "«Colesterol malo» en exceso."],
  ],
  examen: [
    ["Tiene el punto de fusión más bajo el ácido…", ["linoleico (18:2)", "oleico (18:1)", "esteárico (18:0)", "palmítico (16:0)"], 0, "Más insaturado."],
    ["No es saponificable…", ["la testosterona", "la lecitina", "la cera de abeja", "la triestearina"], 0, "Esteroide."],
    ["La aspirina inhibe la síntesis de…", ["colesterol", "prostaglandinas", "lecitina", "vitamina A"], 1, "Ciclooxigenasa."],
    ["La cutícula de las hojas es de…", ["celulosa", "ceras", "fosfolípidos", "colesterol"], 1, "Reduce la transpiración."],
    ["Las sales biliares…", ["emulsionan las grasas", "hidrolizan proteínas", "forman la mielina", "son terpenos"], 0, "Derivan del colesterol."],
    ["Los bebés prematuros pueden carecer de…", ["surfactante pulmonar", "colesterol", "glucógeno", "cerumen"], 0, "Rico en lecitina."],
    ["La fluidez de la membrana aumenta con…", ["ácidos grasos insaturados", "ácidos grasos largos y saturados", "menos temperatura", "más ceras"], 0, "Los codos separan las cadenas."],
    ["El caucho natural es un…", ["politerpeno", "polisacárido", "esteroide", "fosfolípido"], 0, "Miles de isoprenos."],
  ],
  feynman: ["Por qué el aceite es líquido y la mantequilla sólida", "Cómo limpia un jabón", "Por qué los fosfolípidos forman bicapas y los ácidos grasos micelas", "Por qué guardamos energía en grasa y no solo en glucógeno", "Qué hace el colesterol en la membrana", "Por qué hay colesterol «bueno» y «malo»"],
  mapa: ["LÍPIDOS", [["Ácidos grasos", "saturados, insaturados"], ["Saponificables", "grasas, ceras, fosfolípidos"], ["Membranas", "anfipáticos, bicapa"], ["Insaponificables", "terpenos, esteroides"]]],
  tarjetas: [
    ["Lípido", "Insoluble en agua, soluble en disolventes orgánicos."],
    ["Ácido graso saturado", "Sin C=C; cadena recta; sólidos (palmítico)."],
    ["Ácido graso insaturado", "Con C=C cis; codos; líquidos (oleico)."],
    ["Esenciales", "Linoleico (ω-6) y α-linolénico (ω-3)."],
    ["Saponificación", "Éster + NaOH → jabón + alcohol."],
    ["Triacilglicérido", "Glicerina + 3 ác. grasos; reserva 9 kcal/g."],
    ["Cera", "Ác. graso + monoalcohol largo; impermeabiliza."],
    ["Fosfoglicérido", "Glicerina + 2 ác. grasos + fosfato + alcohol."],
    ["Esfingolípido", "Esfingosina + ác. graso (ceramida) + cabeza."],
    ["Bicapa lipídica", "Fluida, autosellante, semipermeable."],
    ["Terpenos", "Polímeros de isopreno: esencias, carotenos, vit. A."],
    ["Colesterol", "Esteroide de membrana; da vit. D, bilis y hormonas."],
  ],
  glosario: [
    ["Ácido graso", "Ácido carboxílico de cadena larga con número par de carbonos."],
    ["Insaturado", "Con uno o más dobles enlaces carbono-carbono."],
    ["Esencial", "Que el organismo no puede sintetizar y debe obtener de la dieta."],
    ["Anfipático", "Con una zona hidrófila y otra hidrófoba."],
    ["Micela", "Esfera de moléculas anfipáticas con las colas hacia dentro."],
    ["Éster", "Compuesto formado por un ácido y un alcohol con pérdida de agua."],
    ["Saponificación", "Hidrólisis básica de un éster de ácido graso que produce jabón."],
    ["Lipasa", "Enzima que hidroliza los enlaces éster de las grasas."],
    ["Triacilglicérido", "Éster de la glicerina con tres ácidos grasos."],
    ["Ácido fosfatídico", "Glicerina con dos ácidos grasos y un fosfato; base de los fosfoglicéridos."],
    ["Ceramida", "Esfingosina unida a un ácido graso; base de los esfingolípidos."],
    ["Liposoma", "Vesícula formada por una bicapa lipídica cerrada."],
    ["Isopreno", "Hidrocarburo de cinco carbonos, unidad de los terpenos."],
    ["Esterano", "Núcleo de cuatro anillos de los esteroides."],
    ["Lipoproteína", "Partícula de lípidos y proteínas que transporta lípidos en la sangre."],
    ["Eicosanoide", "Lípido derivado de ácidos grasos de 20 carbonos que actúa como hormona local."],
  ],
  situacion: {
    titulo: "Fabricamos jabón y analizamos grasas",
    reto: "Vuestro equipo debe fabricar jabón a partir de aceite usado de cocina, comprobar sus propiedades y elaborar una campaña sobre el reciclaje del aceite y sobre las grasas saludables.",
    pasos: [
      "Con la supervisión del profesor y equipo de protección, saponificad aceite usado con NaOH y dejad curar el jabón.",
      "Comprobad su poder limpiador frente a una mancha de grasa y su efecto en agua dura y blanda.",
      "Comparad al microscopio una emulsión de aceite en agua con y sin jabón.",
      "Investigad el impacto del aceite vertido por el fregadero y los puntos de recogida de vuestro municipio.",
      "Elaborad una campaña con información sobre grasas saturadas, insaturadas y trans.",
    ],
    producto: "Pastillas de jabón, informe del experimento y campaña de reciclaje y alimentación.",
    evaluacion: ["Se cumplen las normas de seguridad.", "Se explica la saponificación con la ecuación química.", "Las observaciones se relacionan con el carácter anfipático.", "La campaña es rigurosa y útil."],
  },
  familias: [
    "Meted en la nevera un vaso con aceite de oliva y otro con aceite de girasol: ¿cuál se enturbia antes?",
    "Leed en las etiquetas qué grasas llevan las galletas y la bollería de casa.",
    "Guardad el aceite usado en una botella y llevadlo al punto limpio en lugar de tirarlo al fregadero.",
    "Comentad juntos el último análisis de sangre y qué significan el colesterol total, las LDL y las HDL.",
  ],
  saberes: "bloque «Las biomoléculas»: los lípidos, concepto y clasificación; ácidos grasos, propiedades y reacciones de esterificación y saponificación; lípidos saponificables (acilglicéridos, ceras, fosfoglicéridos y esfingolípidos) e insaponificables (terpenos, esteroides, eicosanoides); comportamiento anfipático y formación de membranas; funciones y repercusión en la salud.",
  ideas: [
    "Práctica de saponificación y de solubilidad de lípidos en agua y en disolventes orgánicos.",
    "Tinción de grasas con Sudán III en leche y aceite, y observación de emulsiones al microscopio.",
    "Análisis de etiquetas para comparar la proporción de grasas saturadas, insaturadas y trans.",
    "Modelización con plastilina o papel de fosfolípidos que se autoensamblan en bicapas y liposomas.",
  ],
  fuentes: [
    { t: "Fundación Española del Corazón: colesterol y grasas", url: "https://fundaciondelcorazon.com/" },
  ],
});
