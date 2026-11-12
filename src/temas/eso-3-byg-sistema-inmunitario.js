// Biología y Geología 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Anticuerpo en forma de Y.
const ac = (x, y, r = 0, c = "var(--pen)") => `<g transform="translate(${x} ${y}) rotate(${r})"><path d="M0 0 V 16 M0 0 L -9 -12 M0 0 L 9 -12" stroke="${c}" stroke-width="3.5" stroke-linecap="round" fill="none"/></g>`;

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "El sistema inmunitario y las vacunas",
  minutos: 50,
  objetivos: ["Describir las barreras defensivas y la respuesta inespecífica", "Explicar la respuesta específica: antígenos, anticuerpos, linfocitos y memoria", "Comprender cómo funcionan las vacunas y la inmunidad de grupo", "Reconocer alteraciones del sistema inmunitario: alergias, enfermedades autoinmunes e inmunodeficiencias"],
  claves: ["antígeno", "anticuerpo", "fagocito", "linfocito", "memoria inmunitaria", "vacuna", "inmunidad de grupo", "alergia"],
  pregunta: {
    texto: "Si ya has pasado la varicela, es muy raro que vuelvas a tenerla, aunque te contagie un amigo. ¿Cómo «recuerda» tu cuerpo un virus que viste hace años?",
    respuesta: "Durante la primera infección, tus linfocitos aprendieron a reconocer el virus y algunos se quedaron como <mark>células de memoria</mark>. Si el virus vuelve, lo reconocen al instante y fabrican anticuerpos tan deprisa que no llegas a enfermar. Las <b>vacunas</b> aprovechan este mismo mecanismo sin que tengas que pasar la enfermedad.",
  },
  bloques: [
    {
      html: `<h3>Un ejército para defendernos</h3><p>Estamos rodeados de microorganismos, y algunos son patógenos. El <b>sistema inmunitario</b> es el conjunto de órganos, células y moléculas que nos defienden de ellos y también de células propias dañadas, como las cancerosas. Lo forman la <b>médula ósea</b>, donde nacen los glóbulos blancos, el <b>timo</b>, donde maduran algunos linfocitos, el <b>bazo</b>, los <b>ganglios linfáticos</b> y las <b>amígdalas</b>. Para defendernos, tiene que distinguir lo propio de lo extraño. Cualquier molécula que reconoce como extraña y que provoca una respuesta se llama <mark>antígeno</mark>.</p>`,
    },
    {
      html: `<h3>Primera línea: las barreras</h3><p>Antes de llegar a la sangre, los microbios tienen que atravesar las <b>barreras defensivas</b>. La <mark>piel</mark> es una muralla de células muertas que los microbios no pueden cruzar si no hay una herida; además, el sudor y la grasa son ligeramente ácidos. Las <b>mucosas</b> de la nariz y la boca fabrican <b>moco</b>, que atrapa partículas, y los <b>cilios</b> de los bronquios las barren hacia fuera. Las <b>lágrimas</b> y la <b>saliva</b> tienen una enzima, la lisozima, que destruye bacterias. El <b>ácido del estómago</b> mata muchos microbios de los alimentos, y la <b>microbiota</b> no deja sitio a los patógenos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Barreras defensivas: piel, moco y cilios, lágrimas y saliva, ácido del estómago y microbiota">${BG}
        ${[["piel", "muralla", "#c98a5a"], ["moco y cilios", "atrapan y barren", "var(--leaf)"], ["lágrimas y saliva", "lisozima", "var(--water)"], ["estómago", "ácido", "var(--red)"], ["microbiota", "ocupa el sitio", "var(--pen)"]].map(([n, d, c], i) => { const y = 14 + i * 32; return `<rect x="20" y="${y}" width="220" height="26" rx="8" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2"/>${t(32, y + 17, n, { size: 11, anchor: "start", color: c })}${t(228, y + 17, d, { size: 10, anchor: "end", weight: 400 })}`; }).join("")}</svg>`,
    },
    {
      html: `<h3>Segunda línea: la respuesta inespecífica</h3><p>Si un microbio entra, por ejemplo por un corte, actúa la <b>respuesta inespecífica</b>, que es igual para cualquier invasor y empieza en minutos. Se produce una <mark>inflamación</mark>: la zona se pone roja, caliente, hinchada y duele, porque los vasos se dilatan para que lleguen más glóbulos blancos. Unos glóbulos blancos llamados <b>fagocitos</b> salen de los capilares, rodean a los microbios y se los «comen»: es la <mark>fagocitosis</mark>. El pus está formado por fagocitos muertos y restos de bacterias. La <b>fiebre</b> también ayuda: el calor frena a muchos patógenos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fagocitosis: un fagocito rodea con sus prolongaciones a una bacteria y la engulle">${BG}
        ${[0, 1, 2].map((k) => { const x = 46 + k * 84; return `<g transform="translate(${x} 86)"><path d="${k === 0 ? "M-28 0 Q -28 -30 0 -30 Q 28 -30 28 0 Q 28 30 0 30 Q -28 30 -28 0 Z" : k === 1 ? "M-28 10 Q -30 -30 0 -30 Q 26 -32 34 -10 Q 20 -4 22 6 Q 20 16 34 22 Q 20 34 0 32 Q -26 34 -28 10 Z" : "M-30 0 Q -30 -32 0 -32 Q 30 -32 30 0 Q 30 32 0 32 Q -30 32 -30 0 Z"}" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.5"/><circle cx="-10" cy="-6" r="7" fill="var(--pen)" fill-opacity=".6"/>${k === 0 ? `<rect x="36" y="-5" width="20" height="10" rx="5" fill="var(--leaf)"/>` : k === 1 ? `<rect x="22" y="1" width="20" height="10" rx="5" fill="var(--leaf)" transform="translate(0 -6)"/>` : `<circle cx="10" cy="10" r="10" fill="var(--sun)" fill-opacity=".4"/><rect x="2" y="5" width="16" height="9" rx="4" fill="var(--leaf)" fill-opacity=".5"/>`}</g>${k < 2 ? fl(x + 42, 140, x + 58, 140) : ""}`; }).join("")}
        ${t(46, 140, "detecta", { size: 10 })}${t(130, 140, "rodea", { size: 10 })}${t(214, 140, "digiere", { size: 10 })}${t(130, 30, "fagocito y bacteria", { size: 11, color: "var(--muted)" })}</svg>`,
      video: { id: "NHOiq_wZQOQ", titulo: "Así funciona tu SISTEMA INMUNITARIO: ¿Cómo actúan las DEFENSAS?", canal: "La Hiperactina", vistas: 1765037 },
    },
    {
      html: `<h3>Los glóbulos blancos</h3><p>Los <b>glóbulos blancos</b> o leucocitos son las células del sistema inmunitario. Hay varios tipos con funciones distintas, y un análisis de sangre los cuenta: si suben, puede indicar una infección.</p>${tabla(["Tipo", "Respuesta", "Función"], [["Neutrófilos", "inespecífica", "fagocitan bacterias; los primeros en llegar"], ["Macrófagos", "inespecífica", "fagocitos grandes; presentan antígenos a los linfocitos"], ["Linfocitos B", "específica", "fabrican anticuerpos"], ["Linfocitos T", "específica", "dirigen la respuesta y destruyen células infectadas"]])}<p>Los linfocitos son los responsables de la defensa más precisa, la que tiene memoria.</p>`,
    },
    {
      html: `<h3>Tercera línea: anticuerpos</h3><p>La <b>respuesta específica</b> va dirigida contra un antígeno concreto. Los <b>linfocitos B</b> fabrican <mark>anticuerpos</mark>, proteínas con forma de Y que encajan en el antígeno como una llave en su cerradura. Cada anticuerpo reconoce un único antígeno: los que sirven contra el sarampión no sirven contra la gripe. Al unirse a los microbios, los anticuerpos los <b>inmovilizan</b>, los agrupan y los marcan para que los fagocitos los destruyan con más facilidad. También neutralizan las toxinas que fabrican algunas bacterias. Esta respuesta tarda varios días en ponerse en marcha la primera vez.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Anticuerpos en forma de Y que se unen a los antígenos de la superficie de un virus">${BG}
        <circle cx="130" cy="90" r="32" fill="var(--red)" fill-opacity=".3" stroke="var(--red)" stroke-width="2.5"/>
        ${[0, 1, 2, 3, 4, 5].map((k) => { const a = (k * Math.PI) / 3; const x = 130 + 36 * Math.cos(a), y = 90 + 36 * Math.sin(a); return `<path d="M${(x - 4).toFixed(1)} ${(y - 4).toFixed(1)} l 8 0 l -4 7 Z" fill="var(--red)" transform="rotate(${(a * 180) / Math.PI + 90} ${x.toFixed(1)} ${y.toFixed(1)})"/>${ac((130 + 58 * Math.cos(a)).toFixed(1), (90 + 58 * Math.sin(a)).toFixed(1), (a * 180) / Math.PI - 90)}`; }).join("")}
        ${t(130, 94, "virus", { size: 11, color: "var(--red)" })}${t(30, 26, "anticuerpo", { size: 11, anchor: "start", color: "var(--pen)" })}${t(240, 172, "antígeno", { size: 11, anchor: "end", color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>Linfocitos T y memoria inmunitaria</h3><p>Los <b>linfocitos T</b> maduran en el timo. Unos coordinan toda la respuesta, avisando a los linfocitos B y a los fagocitos; otros, los <b>citotóxicos</b>, reconocen y destruyen nuestras propias células infectadas por virus o convertidas en cancerosas. Cuando la infección acaba, quedan <mark>linfocitos de memoria</mark>, que pueden vivir años. Si el mismo antígeno vuelve, la <b>respuesta secundaria</b> es mucho más rápida e intensa que la primaria: fabrica muchos más anticuerpos en uno o dos días. Por eso hay enfermedades que solo se pasan una vez.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica de anticuerpos: la respuesta primaria es lenta y baja; la secundaria, ante el mismo antígeno, es rápida y alta">${BG}
        <path d="M30 150 H 246 M30 150 V 20" stroke="var(--muted)" stroke-width="2"/>
        <path d="M40 150 Q 70 150 80 130 Q 92 110 110 134 Q 120 146 140 148 Q 150 150 156 150 Q 166 120 176 50 Q 186 30 206 70 Q 226 120 246 128" stroke="var(--pen)" stroke-width="3" fill="none"/>
        <path d="M40 150 V 160 M150 150 V 160" stroke="var(--red)" stroke-width="3"/>
        ${t(40, 172, "1.er contacto", { size: 9, anchor: "start", color: "var(--red)" })}${t(150, 172, "2.º contacto", { size: 9, anchor: "start", color: "var(--red)" })}
        ${t(86, 104, "primaria", { size: 10, color: "var(--pen)" })}${t(244, 30, "secundaria", { size: 10, anchor: "end", color: "var(--pen)" })}
        ${t(22, 86, "anticuerpos", { size: 9, color: "var(--muted)", anchor: "middle" }).replace("<text ", '<text transform="rotate(-90 22 86)" ')}</svg>`,
    },
    {
      html: `<h3>Las vacunas</h3><p>Una <b>vacuna</b> es un preparado que contiene el antígeno de un patógeno, pero sin su capacidad de causar la enfermedad: microbios muertos o debilitados, trozos de ellos, toxinas inactivadas o, en las vacunas de ARN mensajero, las instrucciones para que nuestras células fabriquen un antígeno inofensivo. El sistema inmunitario responde como si fuera una infección real y genera <mark>linfocitos de memoria</mark>. Así, si el patógeno de verdad llega, la respuesta secundaria lo frena. La primera vacuna la desarrolló Edward Jenner en 1796 contra la viruela, una enfermedad que hoy está erradicada del planeta.</p>`,
      video: { id: "_OUlsRjrGI4", titulo: "Cómo funcionan las vacunas", canal: "AFP Español", vistas: 1432989 },
    },
    {
      html: `<h3>Inmunidad de grupo y calendario vacunal</h3><p>Algunas personas no pueden vacunarse: bebés muy pequeños, enfermos con las defensas bajas o alérgicos a algún componente. Si la mayoría de la población está vacunada, el patógeno no encuentra a quién contagiar y deja de circular, así que también <b>ellos quedan protegidos</b>. Es la <mark>inmunidad de grupo</mark>. Para el sarampión hace falta vacunar a más del 95 % de la población. En España, el <b>calendario vacunal</b> recoge las vacunas gratuitas y recomendadas en cada edad, como la triple vírica, la del tétanos o la del virus del papiloma. Las vacunas son de los medicamentos más seguros y vigilados.</p>`,
    },
    {
      html: `<h3>Inmunidad activa y pasiva</h3><p>La <b>inmunidad activa</b> la genera el propio cuerpo, al pasar una enfermedad o al vacunarse; tarda en aparecer pero dura mucho tiempo porque deja memoria. La <b>inmunidad pasiva</b> se produce cuando recibimos anticuerpos ya fabricados por otro organismo: es inmediata, pero dura solo unas semanas porque esos anticuerpos acaban desapareciendo.</p>${tabla(["", "Activa", "Pasiva"], [["Natural", "pasar la enfermedad", "anticuerpos de la madre por la placenta y la leche"], ["Artificial", "vacuna", "suero con anticuerpos (antitetánico, antiveneno)"], ["¿Memoria?", "sí, dura años", "no, dura semanas"]])}`,
    },
    {
      html: `<h3>Cuando el sistema inmunitario falla</h3><p>A veces el sistema inmunitario reacciona en exceso. Las <mark>alergias</mark> son respuestas exageradas a sustancias inofensivas, como el polen, los ácaros o algunos alimentos; en casos graves, la anafilaxia, se necesita adrenalina urgente. En las <b>enfermedades autoinmunes</b>, como la diabetes tipo 1 o la celiaquía, ataca a células del propio cuerpo. En las <b>inmunodeficiencias</b> las defensas son débiles: el <b>VIH</b> destruye linfocitos T y, sin tratamiento, causa el sida, con infecciones que en una persona sana no serían graves. Por último, en los trasplantes el sistema inmunitario puede <b>rechazar</b> el órgano donado.</p>`,
    },
  ],
  figura: {
    titulo: "Las tres líneas de defensa",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Tres líneas de defensa: barreras como piel y mucosas; respuesta inespecífica con inflamación y fagocitosis; respuesta específica con linfocitos, anticuerpos y memoria">
      <rect width="640" height="240" rx="16" fill="var(--paper)"/>
      ${[["1.ª línea", "Barreras", "piel · mucosas · lágrimas · ácido", "#c98a5a"], ["2.ª línea", "Inespecífica", "inflamación · fagocitosis · fiebre", "var(--leaf)"], ["3.ª línea", "Específica", "linfocitos · anticuerpos · memoria", "var(--pen)"]].map(([l, n, d, c], i) => { const x = 20 + i * 206; return `<rect x="${x}" y="30" width="190" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${t(x + 95, 66, l, { size: 13, color: "var(--muted)" })}${t(x + 95, 104, n, { size: 22, color: c, font: D })}${t(x + 95, 150, d, { size: 11, weight: 400 })}${i < 2 ? fl(x + 192, 120, x + 204, 120, "var(--muted)") : ""}`; }).join("")}
      ${t(533, 186, "las vacunas entrenan esta", { size: 11, color: "var(--pen)" })}
    </svg>`,
  },
  video: { id: "8t84ETH_tk8", titulo: "Cómo funciona DE VERDAD el sistema inmunitario", canal: "En Pocas Palabras – Kurzgesagt", vistas: 2295100, megusta: 0, busqueda: "sistema inmunitario" },
  ejemplos: [
    { enunciado: "Te clavas una astilla sucia y al día siguiente la zona está roja, caliente e hinchada, con un poco de pus. ¿Qué está pasando?",
      pasos: ["La astilla ha roto la primera barrera, la piel, y han entrado bacterias.", "Se produce una inflamación: los vasos se dilatan y llegan más glóbulos blancos.", "Los fagocitos engullen a las bacterias; el pus son fagocitos muertos y restos."],
      resultado: "es la respuesta inespecífica (inflamación y fagocitosis)." },
    { enunciado: "Un bebé de 2 meses no enferma de sarampión aunque su madre lo pasó de niña. Unos meses después sí podría enfermar. Explícalo.",
      pasos: ["La madre tiene anticuerpos contra el sarampión.", "Se los pasó al bebé por la placenta y la leche: inmunidad pasiva natural.", "Esos anticuerpos desaparecen en unos meses y el bebé no tiene memoria propia.", "Por eso necesita su propia vacuna (inmunidad activa)."],
      resultado: "estaba protegido por anticuerpos maternos, que son temporales." },
    { enunciado: "En un pueblo de 2.000 personas se quiere la inmunidad de grupo contra el sarampión (95 %). ¿Cuántas deben estar vacunadas?",
      pasos: ["Calculamos el 95 % de 2.000.", "0,95 · 2.000 = 1.900."],
      resultado: "al menos 1.900 personas." },
  ],
  errores: [
    "Confundir antígeno y anticuerpo: el antígeno es lo extraño; el anticuerpo es la proteína que lo reconoce.",
    "Pensar que las vacunas curan: previenen, entrenando al sistema inmunitario antes de la infección.",
    "Creer que un anticuerpo sirve contra cualquier microbio: cada uno es específico.",
    "Confundir un suero con una vacuna: el suero da anticuerpos hechos (pasiva) y la vacuna genera memoria (activa).",
    "Pensar que la fiebre siempre es mala: es parte de la defensa, aunque hay que vigilarla.",
  ],
  ejercicios: [
    { q: "¿Qué es un antígeno? Pon dos ejemplos.", sol: "Una molécula que el sistema inmunitario reconoce como extraña y que provoca una respuesta. Ejemplos: proteínas de la cubierta de un virus, polen (en alérgicos)." },
    { q: "Enumera cuatro barreras defensivas y cómo actúa cada una.", sol: "Piel (muralla), moco y cilios (atrapan y expulsan), lágrimas y saliva (lisozima), ácido del estómago (mata microbios)." },
    { q: "Explica las cuatro señales de la inflamación y su causa.", sol: "Enrojecimiento, calor, hinchazón y dolor, porque los vasos se dilatan y llega más sangre y líquido con glóbulos blancos." },
    { q: "Diferencia la respuesta inespecífica de la específica.", sol: "Inespecífica: igual para todos los invasores, rápida, sin memoria (fagocitosis, inflamación). Específica: contra un antígeno concreto, más lenta la primera vez, con memoria (linfocitos y anticuerpos)." },
    { q: "¿Qué hacen los linfocitos B y los T?", sol: "Los B fabrican anticuerpos. Los T coordinan la respuesta y destruyen células infectadas o cancerosas." },
    { q: "Dibuja la gráfica de la respuesta primaria y secundaria y explícala.", sol: "Primaria: tarda días y alcanza pocos anticuerpos. Secundaria: es rápida y muy intensa gracias a los linfocitos de memoria." },
    { q: "Explica cómo funciona una vacuna.", sol: "Introduce un antígeno inofensivo del patógeno; el cuerpo desarrolla una respuesta y linfocitos de memoria; ante el patógeno real, responde deprisa y no enferma." },
    { q: "¿Qué es la inmunidad de grupo y a quién protege?", sol: "La protección de una población cuando la mayoría está inmunizada, porque el patógeno no circula. Protege a quienes no pueden vacunarse." },
    { q: "Clasifica: vacuna del tétanos, suero antiofídico, leche materna, pasar la varicela.", sol: "Vacuna: activa artificial. Suero: pasiva artificial. Leche materna: pasiva natural. Varicela: activa natural." },
    { q: "Explica qué es una alergia y una enfermedad autoinmune.", sol: "Alergia: respuesta exagerada a una sustancia inofensiva. Autoinmune: el sistema inmunitario ataca células del propio cuerpo." },
  ],
  quiz: [
    { q: "Los anticuerpos los fabrican…", o: ["los linfocitos B", "los glóbulos rojos", "las plaquetas"], a: 0, e: "Los linfocitos B." },
    { q: "La fagocitosis consiste en…", o: ["fabricar anticuerpos", "engullir microbios", "producir fiebre"], a: 1, e: "Engullir y digerir microbios." },
    { q: "La primera barrera defensiva es…", o: ["la piel", "los anticuerpos", "el bazo"], a: 0, e: "La piel y las mucosas." },
    { q: "Un anticuerpo reconoce…", o: ["cualquier microbio", "un antígeno concreto", "solo bacterias"], a: 1, e: "Es específico." },
    { q: "La respuesta secundaria es…", o: ["más lenta", "más rápida e intensa", "igual"], a: 1, e: "Gracias a la memoria." },
    { q: "Las vacunas generan inmunidad…", o: ["activa", "pasiva", "ninguna"], a: 0, e: "Activa artificial." },
    { q: "La primera vacuna fue contra…", o: ["la gripe", "la viruela", "el sarampión"], a: 1, e: "Jenner, 1796." },
    { q: "Un suero aporta…", o: ["antígenos", "anticuerpos ya hechos", "memoria"], a: 1, e: "Anticuerpos hechos." },
    { q: "El VIH destruye…", o: ["linfocitos T", "glóbulos rojos", "neuronas"], a: 0, e: "Linfocitos T." },
    { q: "Una alergia es…", o: ["una infección", "una respuesta exagerada", "falta de defensas"], a: 1, e: "Respuesta exagerada a algo inofensivo." },
  ],
  examen: [
    { q: "La inflamación forma parte de la respuesta…", o: ["inespecífica", "específica", "pasiva"], a: 0, e: "Inespecífica." },
    { q: "Los linfocitos de memoria…", o: ["mueren al acabar la infección", "permanecen años", "fabrican moco"], a: 1, e: "Viven mucho tiempo." },
    { q: "La inmunidad de grupo protege sobre todo a…", o: ["quien no puede vacunarse", "los microbios", "nadie"], a: 0, e: "A quien no puede vacunarse." },
  ],
  feynman: ["Cuáles son las tres líneas de defensa del cuerpo", "Qué son los antígenos y los anticuerpos y cómo se relacionan", "Cómo funciona una vacuna y qué es la inmunidad de grupo"],
  mapa: mapa("INMUNIDAD", "var(--eso)", [
    ["Barreras", "piel · mucosas · ácido", "#c98a5a"],
    ["Inespecífica", "inflamación · fagocitosis", "var(--leaf)"],
    ["Específica", "linfocitos B y T · anticuerpos", "var(--pen)"],
    ["Vacunas", "memoria · inmunidad de grupo", "var(--red)"],
  ], 280),
  tarjetas: [
    ["Antígeno", "Molécula extraña que provoca una respuesta inmunitaria."],
    ["Anticuerpo", "Proteína en forma de Y que reconoce un antígeno concreto."],
    ["Fagocitosis", "Un glóbulo blanco engulle y digiere un microbio."],
    ["Inflamación", "Enrojecimiento, calor, hinchazón y dolor en la zona infectada."],
    ["Linfocitos de memoria", "Recuerdan un antígeno y permiten una respuesta rápida."],
    ["Vacuna", "Antígeno inofensivo que genera memoria sin pasar la enfermedad."],
    ["Inmunidad de grupo", "Si casi todos están inmunizados, el patógeno deja de circular."],
    ["Suero", "Anticuerpos ya fabricados: inmunidad pasiva, inmediata y breve."],
  ],
  familias: ["Revisad juntos la cartilla de vacunación y comprobad qué vacunas tocan en la adolescencia.", "Hablad sobre bulos de vacunas y buscad la información en fuentes oficiales.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Salud y enfermedad: el sistema inmunitario, barreras, respuesta inespecífica y específica, memoria inmunitaria, vacunas, inmunidad de grupo y alteraciones inmunitarias (RD 217/2022, Biología y Geología 1º a 3º).",
    ideas: ["Juego de rol: antígenos, fagocitos, linfocitos B y T en el patio.", "Análisis crítico de bulos sobre vacunas con fuentes oficiales.", "Simulación de inmunidad de grupo con una hoja de cálculo y distintos porcentajes de vacunación."],
  },
  fuentes: [RD, wiki("Sistema inmunitario", "Sistema_inmunitario"), wiki("Vacuna", "Vacuna")],
  revisado: "2026-11-12",
};
