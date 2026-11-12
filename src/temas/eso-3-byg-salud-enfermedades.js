// Biología y Geología 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "La salud y las enfermedades",
  minutos: 50,
  objetivos: ["Definir salud y reconocer los factores que la determinan", "Clasificar las enfermedades en infecciosas y no infecciosas", "Conocer los microorganismos patógenos y sus vías de transmisión", "Valorar la prevención, el uso responsable de antibióticos y los hábitos saludables"],
  claves: ["salud", "enfermedad infecciosa", "patógeno", "contagio", "vector", "antibiótico", "resistencia", "factor de riesgo"],
  pregunta: {
    texto: "Si te recetan antibióticos para una infección y a los tres días te encuentras bien, ¿por qué el médico insiste en que acabes la caja?",
    respuesta: "Porque las primeras bacterias que mueren son las más débiles. Si paras antes, sobreviven las <mark>más resistentes</mark>, se multiplican y la infección vuelve, y además más difícil de curar. Así se crean las <b>bacterias resistentes</b>, uno de los grandes problemas de la medicina actual.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la salud?</h3><p>La Organización Mundial de la Salud (OMS) define la salud como un <mark>estado de completo bienestar físico, mental y social</mark>, y no solo como la ausencia de enfermedad. Es decir, no basta con no estar enfermo: también importan cómo nos sentimos y cómo nos relacionamos. La salud depende de muchos <b>factores</b>: la herencia genética, el medio ambiente (aire, agua, vivienda), el estilo de vida (alimentación, ejercicio, sueño, consumo de drogas) y el acceso a un buen sistema sanitario. El estilo de vida es el factor que más podemos controlar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Triángulo de la salud: bienestar físico, mental y social">${BG}
        <path d="M130 20 L 230 150 H 30 Z" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="3"/>
        <circle cx="130" cy="20" r="14" fill="var(--red)"/><circle cx="230" cy="150" r="14" fill="var(--pen)"/><circle cx="30" cy="150" r="14" fill="var(--sun)"/>
        ${t(156, 26, "físico", { size: 12, anchor: "start", color: "var(--red)" })}${t(212, 176, "social", { size: 12, anchor: "end", color: "var(--pen)" })}${t(50, 176, "mental", { size: 12, anchor: "start", color: "#b8860b" })}
        ${t(130, 110, "SALUD", { size: 18, color: "var(--leaf)", font: D })}${t(130, 128, "bienestar completo", { size: 10, weight: 400 })}</svg>`,
    },
    {
      html: `<h3>Tipos de enfermedades</h3><p>Una <b>enfermedad</b> es una alteración del funcionamiento normal del cuerpo o de la mente. Se manifiesta con <b>síntomas</b>, que nota el paciente (dolor, cansancio), y <b>signos</b>, que puede medir el médico (fiebre, tensión alta). Según su causa, se clasifican en dos grandes grupos:</p>${tabla(["Tipo", "Causa", "¿Se contagia?", "Ejemplos"], [["Infecciosas", "microorganismos patógenos", "sí, muchas de ellas", "gripe, COVID-19, tuberculosis, sarampión"], ["No infecciosas", "genética, estilo de vida, ambiente, edad", "no", "diabetes, infarto, cáncer, asma, alzhéimer"]])}<p>Según su duración, pueden ser <b>agudas</b> (aparecen de repente y duran poco, como un resfriado) o <b>crónicas</b> (duran años, como la diabetes).</p>`,
    },
    {
      html: `<h3>Los microorganismos patógenos</h3><p>La mayoría de los microorganismos son inofensivos o beneficiosos, pero algunos, los <mark>patógenos</mark>, causan enfermedades. Las <b>bacterias</b> son células procariotas que se multiplican muy deprisa; causan la tuberculosis, la salmonelosis o la faringitis bacteriana. Los <b>virus</b> no son células: son material genético dentro de una cápsula de proteínas, y solo se reproducen dentro de nuestras células; causan la gripe, el resfriado, el sarampión o el sida. Los <b>hongos</b> provocan micosis, como el pie de atleta, y algunos <b>protozoos</b>, como el de la malaria, también son patógenos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro tipos de patógenos dibujados: bacteria alargada, virus con espículas, hongo con hifas y protozoo">${BG}
        ${[["bacteria", "var(--leaf)"], ["virus", "var(--red)"], ["hongo", "#b8860b"], ["protozoo", "var(--pen)"]].map(([n, c], i) => { const x = 14 + (i % 2) * 120, y = 12 + Math.floor(i / 2) * 84; return `<rect x="${x}" y="${y}" width="112" height="76" rx="10" fill="${c}" fill-opacity=".08" stroke="${c}" stroke-width="1.5"/>${t(x + 56, y + 70, n, { size: 11, color: c })}`; }).join("")}
        <rect x="40" y="26" width="56" height="26" rx="13" fill="var(--leaf)" fill-opacity=".5" stroke="var(--leaf)" stroke-width="2"/><path d="M96 39 q 10 -6 16 2" stroke="var(--leaf)" stroke-width="2" fill="none"/>
        <circle cx="190" cy="40" r="14" fill="var(--red)" fill-opacity=".5" stroke="var(--red)" stroke-width="2"/>${[0, 1, 2, 3, 4, 5, 6, 7].map((k) => { const a = (k * Math.PI) / 4; return `<path d="M${(190 + 14 * Math.cos(a)).toFixed(1)} ${(40 + 14 * Math.sin(a)).toFixed(1)} L ${(190 + 21 * Math.cos(a)).toFixed(1)} ${(40 + 21 * Math.sin(a)).toFixed(1)}" stroke="var(--red)" stroke-width="2"/><circle cx="${(190 + 22 * Math.cos(a)).toFixed(1)}" cy="${(40 + 22 * Math.sin(a)).toFixed(1)}" r="2" fill="var(--red)"/>`; }).join("")}
        <path d="M40 140 Q 60 110 70 140 M70 140 Q 76 112 92 128 M56 124 V 104 M56 104 l -6 -6 M56 104 l 6 -6" stroke="#b8860b" stroke-width="2.5" fill="none"/><circle cx="56" cy="100" r="5" fill="#b8860b"/>
        <path d="M168 118 Q 190 100 212 118 Q 220 138 194 144 Q 166 142 168 118 Z" fill="var(--pen)" fill-opacity=".35" stroke="var(--pen)" stroke-width="2"/><circle cx="192" cy="124" r="5" fill="var(--pen)"/></svg>`,
      video: { id: "9jqYw4uyuHs", titulo: "¿Cuál es la diferencia entre virus y bacterias?", canal: "CuriosaMente", vistas: 897657 },
    },
    {
      html: `<h3>Cómo se contagian las infecciones</h3><p>Las enfermedades infecciosas se transmiten de varias formas. Por el <b>aire</b>, en las gotitas que expulsamos al toser, estornudar o hablar (gripe, tuberculosis). Por <b>agua o alimentos contaminados</b> (cólera, salmonelosis). Por <b>contacto directo</b> con la piel, objetos o relaciones sexuales (hongos, ITS). Por la <b>sangre</b>, al compartir agujas o en transfusiones sin control (hepatitis B, VIH). Y por <mark>vectores</mark>: animales, sobre todo insectos, que llevan el patógeno de un individuo a otro, como el mosquito de la malaria o del dengue. Conocer la vía es la clave para prevenir el contagio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cinco vías de contagio alrededor de una persona: aire, agua y alimentos, contacto, sangre y vectores">${BG}
        <circle cx="130" cy="92" r="26" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${t(130, 96, "persona", { size: 10 })}
        ${[["aire", 130, 20, "var(--inf)"], ["agua y comida", 212, 60, "var(--water)"], ["contacto", 210, 150, "var(--leaf)"], ["sangre", 50, 150, "var(--red)"], ["vectores", 40, 60, "#b8860b"]].map(([n, x, y, c]) => `${caja(x - 38, y - 12, 76, 24, n, c, { size: 10 })}${fl(x + (130 - x) * 0.25, y + (92 - y) * 0.25, x + (130 - x) * 0.62, y + (92 - y) * 0.62, c, 2)}`).join("")}</svg>`,
    },
    {
      html: `<h3>Prevenir las infecciones</h3><p>La mejor forma de luchar contra las infecciones es evitarlas. Las medidas de <b>higiene personal</b>, como <mark>lavarse las manos</mark> con agua y jabón, taparse al toser con el codo y no compartir cubiertos, cortan muchos contagios. La <b>higiene pública</b> ha salvado más vidas que ningún medicamento: potabilizar el agua, depurar las aguas residuales, recoger la basura y controlar los alimentos. Otras medidas son usar <b>preservativo</b>, no compartir agujas, protegerse de los mosquitos en zonas de riesgo y, sobre todo, las <b>vacunas</b>, que estudiarás en el tema del sistema inmunitario.</p>`,
    },
    {
      html: `<h3>Antibióticos y resistencias</h3><p>Los <b>antibióticos</b>, como la penicilina, descubierta por Alexander Fleming en 1928, matan las bacterias o frenan su crecimiento. Pero <mark>no sirven contra los virus</mark>: tomarlos para un resfriado o una gripe no ayuda y además es perjudicial. Cada vez que se usan mal, sobreviven las bacterias más resistentes, se multiplican y aparecen <b>superbacterias</b> que no responden a casi ningún antibiótico. Por eso hay que tomarlos solo con receta, en la dosis y durante los días indicados, y nunca guardar los que sobran. Para algunos virus hay <b>antivirales</b> específicos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una población de bacterias recibe antibiótico; sobreviven las resistentes y se multiplican">${BG}
        ${[[0, [0, 1, 2, 3, 4, 5, 6, 7], "antes"], [1, [2, 6], "antibiótico"], [2, [0, 1, 2, 3, 4, 5, 6, 7], "después"]].map(([k, idx, n]) => { const x0 = 16 + k * 82; return `<rect x="${x0}" y="30" width="72" height="100" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${idx.map((i) => { const res = k === 2 || i === 2 || i === 6; return `<rect x="${x0 + 10 + (i % 2) * 28}" y="${40 + Math.floor(i / 2) * 22}" width="22" height="12" rx="6" fill="${res ? "var(--red)" : "var(--leaf)"}" fill-opacity=".8"/>`; }).join("")}${t(x0 + 36, 148, n, { size: 10 })}${k < 2 ? fl(x0 + 74, 80, x0 + 80, 80) : ""}`; }).join("")}
        ${t(130, 172, "rojo: bacterias resistentes", { size: 10, color: "var(--red)" })}</svg>`,
      video: { id: "3JnSS5AvUbM", titulo: "¿Qué causa la resistencia a los antibióticos? - Kevin Wu", canal: "Sé Curioso — TED-Ed", vistas: 679306 },
    },
    {
      html: `<h3>Las enfermedades no infecciosas</h3><p>En los países desarrollados, las principales causas de muerte ya no son las infecciones, sino las <b>enfermedades no infecciosas</b>: las <b>cardiovasculares</b> (infarto, ictus), el <b>cáncer</b>, la <b>diabetes tipo 2</b>, las respiratorias crónicas (EPOC, asma) y las neurodegenerativas (alzhéimer). No se contagian. Algunas tienen un origen genético, como la hemofilia, pero la mayoría dependen de <mark>factores de riesgo</mark>: el tabaco, el alcohol, la mala alimentación, el sedentarismo, la obesidad, la contaminación y la edad. Muchos de esos factores se pueden cambiar.</p>`,
    },
    {
      html: `<h3>El cáncer</h3><p>El <b>cáncer</b> aparece cuando algunas células sufren mutaciones y empiezan a <mark>dividirse sin control</mark>. Forman una masa, el <b>tumor</b>. Si el tumor invade los tejidos cercanos y sus células viajan por la sangre o la linfa a otros órganos, formando <b>metástasis</b>, es maligno. Hay factores que aumentan el riesgo, llamados <b>cancerígenos</b>: el tabaco (responsable de la mayoría de los cánceres de pulmón), la radiación ultravioleta del sol, el alcohol y algunos virus, como el del papiloma. Detectarlo pronto, con revisiones y cribados, aumenta mucho las posibilidades de curación.</p>`,
    },
    {
      html: `<h3>La salud mental</h3><p>La salud mental forma parte de la salud igual que la física. Incluye cómo pensamos, sentimos y afrontamos los problemas. La <b>ansiedad</b> y la <b>depresión</b> son trastornos frecuentes, también en la adolescencia; no son debilidad ni algo que se cure «poniendo de tu parte», sino problemas de salud que tienen tratamiento. Ayudan a cuidarla dormir lo suficiente, hacer ejercicio, tener amistades y un uso equilibrado de las pantallas y las redes. Si una tristeza o un malestar duran semanas, es importante <mark>hablarlo</mark> con alguien de confianza y pedir ayuda profesional.</p>`,
    },
    {
      html: `<h3>Hábitos saludables y sistema sanitario</h3><p>La medicina distingue tres niveles de <b>prevención</b>. La <b>primaria</b> evita que aparezca la enfermedad: vacunas, dieta sana, ejercicio, no fumar. La <b>secundaria</b> la detecta pronto, cuando aún no da síntomas: revisiones, análisis, mamografías. La <b>terciaria</b> reduce sus consecuencias cuando ya existe: tratamiento y rehabilitación. En España, el <mark>Sistema Nacional de Salud</mark> es público y universal: cubre a toda la población gracias a los impuestos. Cuidarlo también es responsabilidad de todos: usar bien las urgencias y seguir los tratamientos.</p>`,
    },
  ],
  figura: {
    titulo: "Mapa de las enfermedades",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Las enfermedades se dividen en infecciosas, causadas por bacterias, virus, hongos y protozoos, y no infecciosas, causadas por genética, estilo de vida y ambiente">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${caja(250, 16, 140, 40, "ENFERMEDADES", "var(--ink)", { size: 15 })}
      ${caja(70, 90, 200, 40, "Infecciosas (se contagian)", "var(--red)", { size: 14 })}${caja(370, 90, 200, 40, "No infecciosas", "var(--pen)", { size: 14 })}
      ${fl(290, 58, 200, 88, "var(--muted)")}${fl(350, 58, 440, 88, "var(--muted)")}
      ${["bacterias", "virus", "hongos", "protozoos"].map((n, i) => caja(20 + i * 76, 170, 70, 32, n, "var(--red)", { size: 12 })).join("")}
      ${["genética", "estilo de vida", "ambiente"].map((n, i) => caja(340 + i * 94, 170, 88, 32, n, "var(--pen)", { size: 12 })).join("")}
      ${t(170, 230, "tratamiento: antibióticos (solo bacterias)", { size: 12, color: "var(--muted)" })}${t(470, 230, "prevención: hábitos saludables", { size: 12, color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "AsXMg8M1U_s", titulo: "Las enfermedades infecciosas y no infecciosas - 3º ESO", canal: "Bio[ESO]sfera", vistas: 108113, megusta: 0, busqueda: "salud y enfermedad infecciosas no infecciosas" },
  ejemplos: [
    { enunciado: "Clasifica y di la vía de transmisión: gripe, malaria, salmonelosis, infarto.",
      pasos: ["Gripe: infecciosa (virus), por el aire.", "Malaria: infecciosa (protozoo), por un vector, el mosquito.", "Salmonelosis: infecciosa (bacteria), por alimentos contaminados.", "Infarto: no infecciosa; no se transmite."],
      resultado: "tres infecciosas con vías distintas y una no infecciosa." },
    { enunciado: "Una bacteria se divide cada 20 minutos. Si empiezas con una, ¿cuántas habrá en 2 horas?",
      pasos: ["En 2 horas hay 120 / 20 = 6 divisiones.", "Cada división duplica la población: 2⁶.", "2⁶ = 64."],
      resultado: "64 bacterias (y en 10 horas, más de mil millones)." },
    { enunciado: "Tu amiga tiene un resfriado y quiere tomar los antibióticos que sobraron en casa. ¿Qué le dirías?",
      pasos: ["El resfriado lo causa un virus.", "Los antibióticos no actúan sobre los virus.", "Tomarlos sin necesidad favorece la aparición de bacterias resistentes y puede tener efectos secundarios."],
      resultado: "que no sirven para el resfriado; solo se toman con receta y para infecciones bacterianas." },
  ],
  errores: [
    "Pensar que salud es solo no estar enfermo: incluye el bienestar mental y social.",
    "Tomar antibióticos para la gripe o un resfriado: son virus y no les afectan.",
    "Dejar el antibiótico cuando uno se encuentra mejor: favorece las resistencias.",
    "Creer que todas las bacterias son malas: la mayoría son inofensivas o beneficiosas.",
    "Pensar que el cáncer se contagia: es una enfermedad no infecciosa.",
  ],
  ejercicios: [
    { q: "Escribe la definición de salud de la OMS y explica qué tiene de novedoso.", sol: "«Estado de completo bienestar físico, mental y social, y no solo la ausencia de enfermedad». Incluye la salud mental y social, no solo el cuerpo." },
    { q: "Diferencia síntoma y signo con un ejemplo de cada uno.", sol: "Síntoma: lo que siente el paciente (dolor de cabeza). Signo: lo que se puede medir (fiebre de 38,5 °C)." },
    { q: "Compara bacterias y virus en tres aspectos.", sol: "Bacterias: son células, se reproducen solas, se tratan con antibióticos. Virus: no son células, solo se reproducen dentro de células, no responden a antibióticos." },
    { q: "Indica la vía de contagio y una medida de prevención: tuberculosis, cólera, dengue, hepatitis B.", sol: "Tuberculosis: aire, ventilar y taparse al toser. Cólera: agua contaminada, potabilizar. Dengue: mosquito, repelentes y mosquiteras. Hepatitis B: sangre y relaciones sexuales, no compartir agujas, preservativo y vacuna." },
    { q: "¿Qué es un vector? Pon dos ejemplos.", sol: "Un animal que transmite un patógeno de un individuo a otro. Ejemplos: el mosquito Anopheles (malaria) y la garrapata (enfermedad de Lyme)." },
    { q: "Explica cómo aparecen las bacterias resistentes.", sol: "Al usar antibióticos, mueren las bacterias sensibles y sobreviven las que por azar resisten. Estas se multiplican y la población entera pasa a ser resistente." },
    { q: "Cita cuatro factores de riesgo de las enfermedades cardiovasculares.", sol: "Tabaco, sedentarismo, mala alimentación (sal, grasas saturadas), obesidad, hipertensión y colesterol alto." },
    { q: "¿Qué es una metástasis?", sol: "La extensión de un cáncer a otros órganos: sus células viajan por la sangre o la linfa y forman nuevos tumores lejos del original." },
    { q: "Clasifica en prevención primaria, secundaria o terciaria: vacuna, mamografía, rehabilitación tras un ictus.", sol: "Vacuna: primaria. Mamografía: secundaria. Rehabilitación: terciaria." },
    { q: "Propón tres hábitos para cuidar la salud mental.", sol: "Dormir 8-10 horas, hacer ejercicio y cuidar las relaciones; limitar las pantallas por la noche y pedir ayuda si el malestar dura." },
  ],
  quiz: [
    { q: "Según la OMS, la salud es…", o: ["no estar enfermo", "bienestar físico, mental y social", "estar en forma"], a: 1, e: "Bienestar completo." },
    { q: "Las enfermedades infecciosas las causan…", o: ["patógenos", "los genes", "la edad"], a: 0, e: "Microorganismos patógenos." },
    { q: "Los antibióticos actúan contra…", o: ["virus", "bacterias", "todos los microbios"], a: 1, e: "Solo contra bacterias." },
    { q: "Un virus…", o: ["es una célula", "solo se reproduce dentro de células", "se cura con antibióticos"], a: 1, e: "Necesita una célula." },
    { q: "La malaria la transmite…", o: ["el agua", "un mosquito", "el aire"], a: 1, e: "Un mosquito (vector)." },
    { q: "La penicilina la descubrió…", o: ["Pasteur", "Fleming", "Darwin"], a: 1, e: "Alexander Fleming, 1928." },
    { q: "El infarto es una enfermedad…", o: ["infecciosa", "no infecciosa", "contagiosa"], a: 1, e: "No infecciosa." },
    { q: "La principal causa del cáncer de pulmón es…", o: ["el tabaco", "el agua", "el frío"], a: 0, e: "El tabaco." },
    { q: "Una revisión para detectar pronto una enfermedad es prevención…", o: ["primaria", "secundaria", "terciaria"], a: 1, e: "Secundaria." },
    { q: "La fiebre medida con un termómetro es…", o: ["un síntoma", "un signo", "una causa"], a: 1, e: "Un signo." },
  ],
  examen: [
    { q: "El cólera se transmite principalmente por…", o: ["agua contaminada", "mosquitos", "el aire"], a: 0, e: "Por agua o alimentos contaminados." },
    { q: "Una enfermedad crónica…", o: ["dura poco", "dura mucho tiempo", "siempre es infecciosa"], a: 1, e: "Dura años." },
    { q: "Un tumor que invade otros órganos es…", o: ["benigno", "maligno", "infeccioso"], a: 1, e: "Maligno, con metástasis." },
  ],
  feynman: ["Qué es la salud y de qué factores depende", "Cómo se contagian las enfermedades infecciosas y cómo se previenen", "Por qué hay que usar bien los antibióticos"],
  mapa: mapa("SALUD Y ENFERMEDAD", "var(--eso)", [
    ["Salud", "física · mental · social", "var(--leaf)"],
    ["Infecciosas", "bacterias · virus · hongos · protozoos", "var(--red)"],
    ["No infecciosas", "cardiovasculares · cáncer · diabetes", "var(--pen)"],
    ["Prevención", "higiene · vacunas · hábitos", "var(--inf)"],
  ], 290),
  tarjetas: [
    ["Salud (OMS)", "Estado de completo bienestar físico, mental y social."],
    ["Patógeno", "Microorganismo que causa una enfermedad."],
    ["Virus", "Partícula no celular que solo se reproduce dentro de células."],
    ["Vector", "Animal que transmite un patógeno, como un mosquito."],
    ["Antibiótico", "Medicamento contra las bacterias; no sirve contra virus."],
    ["Resistencia", "Capacidad de algunas bacterias de sobrevivir a los antibióticos."],
    ["Factor de riesgo", "Algo que aumenta la probabilidad de enfermar: tabaco, sedentarismo…"],
    ["Prevención secundaria", "Detectar pronto una enfermedad, antes de que dé síntomas."],
  ],
  familias: ["Revisad juntos el botiquín y llevad al punto SIGRE de la farmacia los medicamentos caducados o sobrantes.", "Practicad el lavado de manos de 20 segundos antes de cada comida.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Salud y enfermedad: concepto de salud, enfermedades infecciosas y no infecciosas, patógenos, transmisión, prevención, uso responsable de antibióticos y salud mental (RD 217/2022, Biología y Geología 1º a 3º).",
    ideas: ["Cultivo en placas de Petri de muestras de manos antes y después de lavarlas.", "Simulación de contagio con vasos de agua y un indicador ácido-base.", "Análisis de datos del INE sobre causas de muerte en España."],
  },
  fuentes: [RD, wiki("Enfermedad infecciosa", "Enfermedad_infecciosa"), wiki("Resistencia a antibióticos", "Resistencia_a_antibi%C3%B3ticos")],
  revisado: "2026-11-12",
};
