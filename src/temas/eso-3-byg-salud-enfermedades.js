// Biología y Geología 3º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso3L4.js.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");
const L = require("./_eso3L4");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "La salud y las enfermedades",
  minutos: 105,
  objetivos: [
    "Definir salud y reconocer los factores que la determinan",
    "Clasificar las enfermedades y conocer la historia del descubrimiento de los microbios",
    "Describir los microorganismos patógenos, las etapas de una infección y sus vías de transmisión",
    "Valorar la prevención, el uso responsable de antibióticos y el enfoque de «una sola salud»",
    "Explicar las enfermedades no infecciosas, el cáncer y los efectos de las drogas",
    "Cuidar la salud mental y conocer los niveles de prevención y el sistema sanitario",
  ],
  claves: ["salud", "enfermedad infecciosa", "patógeno", "contagio", "vector", "epidemia", "antibiótico", "resistencia", "factor de riesgo", "adicción"],
  pregunta: {
    texto: "Si te recetan antibióticos para una infección y a los tres días te encuentras bien, ¿por qué el médico insiste en que acabes la caja?",
    respuesta: "Porque las primeras bacterias que mueren son las más débiles. Si paras antes, sobreviven las <mark>más resistentes</mark>, se multiplican y la infección vuelve, y además más difícil de curar. Así se crean las <b>bacterias resistentes</b>, uno de los grandes problemas de la medicina actual.",
  },
  lectura: {
    titulo: "El pozo de Broad Street",
    html: `<p>En el verano de 1854, un brote de cólera mató a más de 600 personas en pocos días en el barrio londinense de Soho. Por entonces casi todos los médicos creían que las enfermedades se contagiaban por el «miasma», un aire malsano y maloliente. Pero el médico John Snow no estaba convencido.</p>
<p>Snow fue casa por casa preguntando dónde vivían los muertos y de dónde sacaban el agua, y lo dibujó todo en un mapa con rayitas negras. El resultado fue revelador: los casos se amontonaban alrededor de una fuente pública de la calle Broad Street. Los obreros de una fábrica de cerveza cercana, que bebían cerveza en lugar de agua, apenas enfermaron. Snow convenció a las autoridades de que quitaran la manivela de la bomba y el brote se apagó. Años después se descubrió que el pozo estaba junto a un pozo negro contaminado.</p>
<p>Snow no sabía que el cólera lo causa una bacteria, pero con datos y un mapa demostró que se transmitía por el agua. Por eso se le considera el padre de la epidemiología, la ciencia que estudia cómo se extienden las enfermedades. En este tema aprenderás qué es la salud, qué nos hace enfermar y, sobre todo, cómo prevenirlo.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 ¿Qué es la salud?</h3><p>La Organización Mundial de la Salud (OMS) define la salud como un <mark>estado de completo bienestar físico, mental y social</mark>, y no solo como la ausencia de enfermedad. Es decir, no basta con no estar enfermo: también importan cómo nos sentimos y cómo nos relacionamos. La salud depende de muchos <b>factores</b>: la herencia genética, el medio ambiente (aire, agua, vivienda), el estilo de vida (alimentación, ejercicio, sueño, consumo de drogas) y el acceso a un buen sistema sanitario. El estilo de vida es el factor que más podemos controlar.</p><p>La salud no se reparte por igual: la esperanza de vida en España supera los 83 años, una de las más altas del mundo, mientras que en algunos países de África no llega a los 60. Las diferencias se deben sobre todo al acceso a agua potable, alimentos, vacunas y atención sanitaria. Por eso la salud también es una cuestión de justicia social.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Triángulo de la salud: bienestar físico, mental y social">${BG}
        <path d="M130 20 L 230 150 H 30 Z" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="3"/>
        <circle cx="130" cy="20" r="14" fill="var(--red)"/><circle cx="230" cy="150" r="14" fill="var(--pen)"/><circle cx="30" cy="150" r="14" fill="var(--sun)"/>
        ${t(156, 26, "físico", { size: 12, anchor: "start", color: "var(--red)" })}${t(212, 176, "social", { size: 12, anchor: "end", color: "var(--pen)" })}${t(50, 176, "mental", { size: 12, anchor: "start", color: "#b8860b" })}
        ${t(130, 110, "SALUD", { size: 18, color: "var(--leaf)", font: D })}${t(130, 128, "bienestar completo", { size: 10, weight: 400 })}</svg>`,
    },
    {
      html: `<h3>1.2 Tipos de enfermedades</h3><p>Una <b>enfermedad</b> es una alteración del funcionamiento normal del cuerpo o de la mente. Se manifiesta con <b>síntomas</b>, que nota el paciente (dolor, cansancio), y <b>signos</b>, que puede medir el médico (fiebre, tensión alta). Según su causa, se clasifican en dos grandes grupos:</p>${tabla(["Tipo", "Causa", "¿Se contagia?", "Ejemplos"], [["Infecciosas", "microorganismos patógenos", "sí, muchas de ellas", "gripe, COVID-19, tuberculosis, sarampión"], ["No infecciosas", "genética, estilo de vida, ambiente, edad", "no", "diabetes, infarto, cáncer, asma, alzhéimer"]])}<p>Según su duración, pueden ser <b>agudas</b> (aparecen de repente y duran poco, como un resfriado) o <b>crónicas</b> (duran años, como la diabetes).</p>`,
      svg: L.compara("Enfermedades infecciosas y no infecciosas", ["Infecciosas", "var(--red)", ["causadas por patógenos", "se contagian", "gripe, tuberculosis", "vacunas e higiene"]], ["No infecciosas", "var(--pen)", ["genes, hábitos, entorno", "no se contagian", "infarto, cáncer", "hábitos saludables"]]),
    },
    {
      html: `<h3>1.3 El descubrimiento de los microbios</h3><p>Durante siglos se creyó que las enfermedades se debían a castigos, a los astros o al aire corrompido. Todo cambió gracias al <b>microscopio</b>. En el siglo XVII, el holandés Anton van Leeuwenhoek fue el primero en ver «animálculos» en una gota de agua. Pero nadie los relacionó con las enfermedades hasta mucho después.</p><p>En 1847, el médico húngaro <b>Ignaz Semmelweis</b> observó que las madres morían mucho más de fiebre tras el parto cuando las atendían médicos que venían de hacer autopsias; obligó a lavarse las manos con cloro y las muertes cayeron en picado, aunque muchos colegas se burlaron de él. Hacia 1860, el francés <b>Louis Pasteur</b> demostró que los microorganismos no surgen solos, sino que proceden de otros, y que muchos causan enfermedades: es la <mark>teoría germinal</mark>. Inventó la pasteurización y vacunas contra la rabia. El alemán <b>Robert Koch</b> identificó las bacterias de la tuberculosis (1882) y del cólera, y estableció cómo demostrar que un microbio causa una enfermedad concreta.</p><p>En 1928, <b>Alexander Fleming</b> descubrió la penicilina, el primer antibiótico. Estos avances, junto con el agua potable y las vacunas, duplicaron la esperanza de vida en un siglo.</p>`,
      svg: L.linea("Historia del descubrimiento de los microbios", [["1676", "Leeuwenhoek los ve"], ["1847", "Semmelweis: manos"], ["1860", "Pasteur: germen"], ["1882", "Koch: tuberculosis"], ["1928", "Fleming: penicilina"]], "De ver microbios a combatirlos"),
    },
    {
      html: `<h3>2.1 Los microorganismos patógenos</h3><p>La mayoría de los microorganismos son inofensivos o beneficiosos, pero algunos, los <mark>patógenos</mark>, causan enfermedades. Las <b>bacterias</b> son células procariotas que se multiplican muy deprisa; causan la tuberculosis, la salmonelosis o la faringitis bacteriana. Los <b>virus</b> no son células: son material genético dentro de una cápsula de proteínas, y solo se reproducen dentro de nuestras células; causan la gripe, el resfriado, el sarampión o el sida. Los <b>hongos</b> provocan micosis, como el pie de atleta, y algunos <b>protozoos</b>, como el de la malaria, también son patógenos.</p><p>No todos los patógenos son microscópicos: algunos <b>parásitos</b> como los gusanos intestinales (lombrices, tenias) o los piojos también causan enfermedades. Y en el cuerpo viven billones de bacterias beneficiosas, la <b>microbiota</b>, que nos ayudan a digerir y nos protegen ocupando el sitio que podrían usar los patógenos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro tipos de patógenos dibujados: bacteria alargada, virus con espículas, hongo con hifas y protozoo">${BG}
        ${[["bacteria", "var(--leaf)"], ["virus", "var(--red)"], ["hongo", "#b8860b"], ["protozoo", "var(--pen)"]].map(([n, c], i) => { const x = 14 + (i % 2) * 120, y = 12 + Math.floor(i / 2) * 84; return `<rect x="${x}" y="${y}" width="112" height="76" rx="10" fill="${c}" fill-opacity=".08" stroke="${c}" stroke-width="1.5"/>${t(x + 56, y + 70, n, { size: 11, color: c })}`; }).join("")}
        <rect x="40" y="26" width="56" height="26" rx="13" fill="var(--leaf)" fill-opacity=".5" stroke="var(--leaf)" stroke-width="2"/><path d="M96 39 q 10 -6 16 2" stroke="var(--leaf)" stroke-width="2" fill="none"/>
        <circle cx="190" cy="40" r="14" fill="var(--red)" fill-opacity=".5" stroke="var(--red)" stroke-width="2"/>${[0, 1, 2, 3, 4, 5, 6, 7].map((k) => { const a = (k * Math.PI) / 4; return `<path d="M${(190 + 14 * Math.cos(a)).toFixed(1)} ${(40 + 14 * Math.sin(a)).toFixed(1)} L ${(190 + 21 * Math.cos(a)).toFixed(1)} ${(40 + 21 * Math.sin(a)).toFixed(1)}" stroke="var(--red)" stroke-width="2"/><circle cx="${(190 + 22 * Math.cos(a)).toFixed(1)}" cy="${(40 + 22 * Math.sin(a)).toFixed(1)}" r="2" fill="var(--red)"/>`; }).join("")}
        <path d="M40 140 Q 60 110 70 140 M70 140 Q 76 112 92 128 M56 124 V 104 M56 104 l -6 -6 M56 104 l 6 -6" stroke="#b8860b" stroke-width="2.5" fill="none"/><circle cx="56" cy="100" r="5" fill="#b8860b"/>
        <path d="M168 118 Q 190 100 212 118 Q 220 138 194 144 Q 166 142 168 118 Z" fill="var(--pen)" fill-opacity=".35" stroke="var(--pen)" stroke-width="2"/><circle cx="192" cy="124" r="5" fill="var(--pen)"/></svg>`,
      video: { id: "9jqYw4uyuHs", titulo: "¿Cuál es la diferencia entre virus y bacterias?", canal: "CuriosaMente", vistas: 897657 },
    },
    {
      html: `<h3>2.2 Etapas de una infección y epidemias</h3><p>Cuando un patógeno entra en el cuerpo, la enfermedad sigue unas etapas:</p><p>• El <mark>periodo de incubación</mark> va desde el contagio hasta que aparecen los síntomas; el patógeno se multiplica sin que lo notemos, y a veces ya podemos contagiar. En la gripe dura uno o dos días; en la varicela, unas dos semanas.<br>• El <b>periodo de enfermedad</b> o fase aguda, con los síntomas y signos.<br>• La <b>convalecencia</b>, en la que el cuerpo se recupera poco a poco.</p><p>Según cómo se extiende una enfermedad infecciosa en una población, hablamos de <mark>brote</mark> cuando aparecen varios casos relacionados en un lugar; de <mark>epidemia</mark>, cuando afecta a muchas personas de una zona en poco tiempo, como la gripe cada invierno; de <mark>pandemia</mark>, cuando se extiende por varios continentes, como la COVID-19 en 2020; y de <mark>endemia</mark>, cuando está presente de forma constante en una región, como la malaria en zonas tropicales.</p>`,
      svg: L.flujo("Etapas de una enfermedad infecciosa", ["Contagio: entra el patógeno", "Incubación: se multiplica sin síntomas", "Enfermedad: síntomas y signos", "Convalecencia: recuperación"], "Una infección paso a paso"),
    },
    {
      html: `<h3>2.3 Cómo se contagian las infecciones</h3><p>Las enfermedades infecciosas se transmiten de varias formas. Por el <b>aire</b>, en las gotitas que expulsamos al toser, estornudar o hablar (gripe, tuberculosis). Por <b>agua o alimentos contaminados</b> (cólera, salmonelosis). Por <b>contacto directo</b> con la piel, objetos o relaciones sexuales (hongos, ITS). Por la <b>sangre</b>, al compartir agujas o en transfusiones sin control (hepatitis B, VIH). Y por <mark>vectores</mark>: animales, sobre todo insectos, que llevan el patógeno de un individuo a otro, como el mosquito de la malaria o del dengue. Conocer la vía es la clave para prevenir el contagio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cinco vías de contagio alrededor de una persona: aire, agua y alimentos, contacto, sangre y vectores">${BG}
        <circle cx="130" cy="92" r="26" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${t(130, 96, "persona", { size: 10 })}
        ${[["aire", 130, 20, "var(--inf)"], ["agua y comida", 212, 60, "var(--water)"], ["contacto", 210, 150, "var(--leaf)"], ["sangre", 50, 150, "var(--red)"], ["vectores", 40, 60, "#b8860b"]].map(([n, x, y, c]) => `${caja(x - 38, y - 12, 76, 24, n, c, { size: 10 })}${fl(x + (130 - x) * 0.25, y + (92 - y) * 0.25, x + (130 - x) * 0.62, y + (92 - y) * 0.62, c, 2)}`).join("")}</svg>`,
    },
    {
      html: `<h3>2.4 Prevenir las infecciones</h3><p>La mejor forma de luchar contra las infecciones es evitarlas. Las medidas de <b>higiene personal</b>, como <mark>lavarse las manos</mark> con agua y jabón, taparse al toser con el codo y no compartir cubiertos, cortan muchos contagios. La <b>higiene pública</b> ha salvado más vidas que ningún medicamento: potabilizar el agua, depurar las aguas residuales, recoger la basura y controlar los alimentos. Otras medidas son usar <b>preservativo</b>, no compartir agujas, protegerse de los mosquitos en zonas de riesgo y, sobre todo, las <b>vacunas</b>, que estudiarás en el tema del sistema inmunitario.</p><p>Cuando aparece un brote, las autoridades sanitarias usan otras medidas: el <b>aislamiento</b> de los enfermos, la <b>cuarentena</b> de las personas que han estado en contacto con ellos, el rastreo de contactos y la <b>desinfección</b> de lugares. Lavarse las manos durante al menos 20 segundos con agua y jabón elimina la mayoría de los microbios.</p>`,
      svg: L.radial("Medidas para prevenir las infecciones", "Prevención", ["Lavar las manos", "Taparse al toser", "Agua potable", "Vacunas", "Preservativo", "Alimentos seguros"], "var(--leaf)"),
    },
    {
      html: `<h3>2.5 Antibióticos y resistencias</h3><p>Los <b>antibióticos</b>, como la penicilina, descubierta por Alexander Fleming en 1928, matan las bacterias o frenan su crecimiento. Pero <mark>no sirven contra los virus</mark>: tomarlos para un resfriado o una gripe no ayuda y además es perjudicial. Cada vez que se usan mal, sobreviven las bacterias más resistentes, se multiplican y aparecen <b>superbacterias</b> que no responden a casi ningún antibiótico. Por eso hay que tomarlos solo con receta, en la dosis y durante los días indicados, y nunca guardar los que sobran. Para algunos virus hay <b>antivirales</b> específicos.</p><p>La Organización Mundial de la Salud considera la <b>resistencia a los antimicrobianos</b> una de las grandes amenazas para la salud mundial: si los antibióticos dejan de funcionar, operaciones sencillas o infecciones hoy fáciles de curar podrían volver a ser mortales. También contribuye su uso excesivo en la ganadería. Cada persona puede ayudar no automedicándose y llevando los restos a la farmacia, al punto SIGRE.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una población de bacterias recibe antibiótico; sobreviven las resistentes y se multiplican">${BG}
        ${[[0, [0, 1, 2, 3, 4, 5, 6, 7], "antes"], [1, [2, 6], "antibiótico"], [2, [0, 1, 2, 3, 4, 5, 6, 7], "después"]].map(([k, idx, n]) => { const x0 = 16 + k * 82; return `<rect x="${x0}" y="30" width="72" height="100" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${idx.map((i) => { const res = k === 2 || i === 2 || i === 6; return `<rect x="${x0 + 10 + (i % 2) * 28}" y="${40 + Math.floor(i / 2) * 22}" width="22" height="12" rx="6" fill="${res ? "var(--red)" : "var(--leaf)"}" fill-opacity=".8"/>`; }).join("")}${t(x0 + 36, 148, n, { size: 10 })}${k < 2 ? fl(x0 + 74, 80, x0 + 80, 80) : ""}`; }).join("")}
        ${t(130, 172, "rojo: bacterias resistentes", { size: 10, color: "var(--red)" })}</svg>`,
      video: { id: "NmT-KCK4iw8", titulo: "El apocalipsis de los antibióticos explicado", canal: "En Pocas Palabras – Kurzgesagt", vistas: 1247500 },
    },
    {
      html: `<h3>3.1 Las enfermedades no infecciosas</h3><p>En los países desarrollados, las principales causas de muerte ya no son las infecciones, sino las <b>enfermedades no infecciosas</b>: las <b>cardiovasculares</b> (infarto, ictus), el <b>cáncer</b>, la <b>diabetes tipo 2</b>, las respiratorias crónicas (EPOC, asma) y las neurodegenerativas (alzhéimer). No se contagian. Algunas tienen un origen genético, como la hemofilia, pero la mayoría dependen de <mark>factores de riesgo</mark>: el tabaco, el alcohol, la mala alimentación, el sedentarismo, la obesidad, la contaminación y la edad. Muchos de esos factores se pueden cambiar.</p><p>Según el Instituto Nacional de Estadística, en España las enfermedades del sistema circulatorio y los tumores causan juntos más de la mitad de las muertes. Muchas de ellas empiezan a gestarse en la juventud con los hábitos que adquirimos, por eso la adolescencia es el mejor momento para prevenirlas.</p>`,
      svg: L.barras("Principales causas de muerte en España (aproximado)", [["Circulatorio", 26, "≈ 26 %"], ["Tumores", 25, "≈ 25 %"], ["Respiratorio", 10, "≈ 10 %"], ["Nervioso", 6, "≈ 6 %"], ["Infecciosas", 3, "≈ 3 %"]], "Porcentaje de muertes por causa", 30),
    },
    {
      html: `<h3>3.2 El cáncer</h3><p>El <b>cáncer</b> aparece cuando algunas células sufren mutaciones y empiezan a <mark>dividirse sin control</mark>. Forman una masa, el <b>tumor</b>. Si el tumor invade los tejidos cercanos y sus células viajan por la sangre o la linfa a otros órganos, formando <b>metástasis</b>, es maligno. Hay factores que aumentan el riesgo, llamados <b>cancerígenos</b>: el tabaco (responsable de la mayoría de los cánceres de pulmón), la radiación ultravioleta del sol, el alcohol y algunos virus, como el del papiloma. Detectarlo pronto, con revisiones y cribados, aumenta mucho las posibilidades de curación.</p><p>Los tratamientos principales son la <b>cirugía</b>, que extirpa el tumor, la <b>quimioterapia</b>, con medicamentos que atacan las células que se dividen deprisa, la <b>radioterapia</b>, que las destruye con radiación, y la <b>inmunoterapia</b>, que ayuda al sistema inmunitario a reconocerlas. Hoy más de la mitad de los pacientes de cáncer sobreviven. Se calcula que alrededor del 40 % de los cánceres podrían evitarse con hábitos saludables.</p>`,
      svg: L.flujo("Cómo se desarrolla un cáncer", ["Mutaciones en una célula", "Se divide sin control: tumor", "Invade los tejidos cercanos", "Metástasis por la sangre o la linfa"], "Del error en el ADN al tumor"),
    },
    {
      html: `<h3>3.3 Las drogas y las adicciones</h3><p>Una <mark>droga</mark> es cualquier sustancia que altera el funcionamiento del sistema nervioso y puede crear <mark>dependencia</mark>. Hay drogas <b>legales</b>, como el alcohol, el tabaco o algunos medicamentos mal usados, e <b>ilegales</b>, como el cannabis, la cocaína o las drogas de síntesis. Según su efecto se clasifican en <b>depresoras</b>, que ralentizan el sistema nervioso (alcohol, tranquilizantes), <b>estimulantes</b>, que lo aceleran (nicotina, cocaína, anfetaminas), y <b>perturbadoras</b>, que alteran la percepción (cannabis, LSD).</p><p>Con el consumo repetido aparece la <b>tolerancia</b>: hace falta más cantidad para notar el mismo efecto. Después llega la <b>dependencia</b>: la persona necesita la sustancia y, si la deja, sufre el síndrome de abstinencia. Es una <mark>adicción</mark>, una enfermedad que cambia el funcionamiento del cerebro. También existen <b>adicciones sin sustancia</b>, como el juego de apuestas o el uso compulsivo de videojuegos y redes. Retrasar la edad de inicio y saber decir no ante la presión del grupo son las mejores formas de prevención.</p>`,
      svg: L.tabla("Tipos de drogas según su efecto", ["Tipo", "Efecto", "Ejemplos"], [["Depresoras", "ralentizan", "alcohol, tranquilizantes"], ["Estimulantes", "aceleran", "nicotina, cocaína"], ["Perturbadoras", "alteran la percepción", "cannabis, LSD"]]),
    },
    {
      html: `<h3>3.4 La salud mental</h3><p>La salud mental forma parte de la salud igual que la física. Incluye cómo pensamos, sentimos y afrontamos los problemas. La <b>ansiedad</b> y la <b>depresión</b> son trastornos frecuentes, también en la adolescencia; no son debilidad ni algo que se cure «poniendo de tu parte», sino problemas de salud que tienen tratamiento. Ayudan a cuidarla dormir lo suficiente, hacer ejercicio, tener amistades y un uso equilibrado de las pantallas y las redes. Si una tristeza o un malestar duran semanas, es importante <mark>hablarlo</mark> con alguien de confianza y pedir ayuda profesional.</p><p>Hablar de salud mental sin prejuicios es fundamental: el <b>estigma</b> hace que muchas personas no pidan ayuda. Si alguien cercano dice que no quiere vivir o habla de hacerse daño, hay que tomarlo en serio, acompañarlo y avisar a un adulto. En España, el teléfono <b>024</b> atiende de forma gratuita y a cualquier hora a personas con pensamientos de suicidio y a sus allegados.</p>`,
      svg: L.radial("Claves para cuidar la salud mental", "Bienestar", ["Dormir bien", "Ejercicio", "Amistades", "Menos pantallas", "Hablar", "Pedir ayuda"], "var(--pen)"),
      video: { id: "41el0jzy4rg", titulo: "Un decálogo para cuidar la salud mental de los adolescentes", canal: "AprendemosJuntos", vistas: 674857 },
    },
    {
      html: `<h3>3.5 Hábitos saludables y sistema sanitario</h3><p>La medicina distingue tres niveles de <b>prevención</b>. La <b>primaria</b> evita que aparezca la enfermedad: vacunas, dieta sana, ejercicio, no fumar. La <b>secundaria</b> la detecta pronto, cuando aún no da síntomas: revisiones, análisis, mamografías. La <b>terciaria</b> reduce sus consecuencias cuando ya existe: tratamiento y rehabilitación. En España, el <mark>Sistema Nacional de Salud</mark> es público y universal: cubre a toda la población gracias a los impuestos. Cuidarlo también es responsabilidad de todos: usar bien las urgencias y seguir los tratamientos.</p><p>La puerta de entrada al sistema sanitario es el <b>centro de salud</b>, con su médico o médica de familia y su enfermería, que atienden la mayoría de los problemas y derivan al especialista u hospital cuando hace falta. Las urgencias son para lo urgente; para una emergencia vital, el teléfono es el <b>112</b>.</p>`,
      svg: L.flujo("Los tres niveles de prevención", ["Primaria: evitar que aparezca (vacunas, hábitos)", "Secundaria: detectarla pronto (cribados)", "Terciaria: reducir sus consecuencias (rehabilitación)"], "Prevenir en tres niveles"),
    },
    {
      html: `<h3>3.6 Una sola salud</h3><p>Hoy sabemos que la salud de las personas está unida a la de los animales y a la del medio ambiente. Este enfoque se llama <mark>«una sola salud»</mark>. Alrededor del 60 % de las enfermedades infecciosas humanas son <mark>zoonosis</mark>: proceden de animales, como la rabia, la gripe aviar, la COVID-19 o la enfermedad de Lyme, que transmiten las garrapatas.</p><p>La destrucción de los bosques, el comercio de animales salvajes y la ganadería intensiva acercan a las personas a microbios nuevos. El <b>cambio climático</b> amplía la zona de los mosquitos tigre, que pueden transmitir el dengue, y ya se han registrado casos en España. La <b>contaminación del aire</b> causa enfermedades respiratorias y cardiovasculares: se calcula que provoca miles de muertes prematuras al año en nuestro país.</p><p>Por eso proteger la biodiversidad, vigilar la salud de los animales, usar con prudencia los antibióticos en la ganadería y reducir la contaminación también son medidas de salud pública.</p>`,
      svg: L.radial("El enfoque de una sola salud", "Una sola salud", ["Personas", "Animales", "Medio ambiente", "Zoonosis", "Clima", "Contaminación"], "var(--leaf)"),
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
    { enunciado: "En una clase de 30 alumnos, 6 tienen gripe. ¿Qué porcentaje es? Si cada enfermo contagia a 2 personas en 3 días, ¿cuántos casos nuevos habrá en ese tiempo si nadie toma medidas?",
      pasos: ["Porcentaje: 6 / 30 · 100 = 20 %.", "Casos nuevos: 6 · 2 = 12.", "Solo hay 24 alumnos sanos, así que 12 es posible."],
      resultado: "el 20 % de la clase; unos 12 casos nuevos en 3 días. Ventilar, lavarse las manos y quedarse en casa frena el contagio." },
    { enunciado: "Ordena las fases de una varicela: aparecen las ampollas; el niño juega con un amigo enfermo; pasan dos semanas sin síntomas; las costras se caen y se recupera.",
      pasos: ["Contagio: juega con un amigo enfermo.", "Incubación: dos semanas sin síntomas.", "Enfermedad: aparecen las ampollas.", "Convalecencia: se caen las costras y se recupera."],
      resultado: "contagio, incubación, enfermedad y convalecencia." },
    { enunciado: "Semmelweis comparó dos salas de parto: en la de los médicos morían 10 de cada 100 madres y en la de las comadronas, 3. Tras obligar a lavarse las manos, en la de los médicos bajó a 1. ¿Qué conclusión sacas?",
      pasos: ["La diferencia entre salas sugería que los médicos transmitían algo.", "Al cambiar solo el lavado de manos, la mortalidad cayó de 10 a 1 de cada 100.", "El lavado eliminaba lo que transmitían desde las autopsias: microbios."],
      resultado: "lavarse las manos reduce drásticamente los contagios; la mortalidad bajó un 90 %." },
  ],
  errores: [...[
    "Pensar que salud es solo no estar enfermo: incluye el bienestar mental y social.",
    "Tomar antibióticos para la gripe o un resfriado: son virus y no les afectan.",
    "Dejar el antibiótico cuando uno se encuentra mejor: favorece las resistencias.",
    "Creer que todas las bacterias son malas: la mayoría son inofensivas o beneficiosas.",
    "Pensar que el cáncer se contagia: es una enfermedad no infecciosa.",
  ], "Pensar que las drogas legales, como el alcohol o el tabaco, son inofensivas: causan muchas más muertes que las ilegales."],
  ejercicios: [
    { nivel: "básico", ...{ q: "Escribe la definición de salud de la OMS y explica qué tiene de novedoso.", sol: "«Estado de completo bienestar físico, mental y social, y no solo la ausencia de enfermedad». Incluye la salud mental y social, no solo el cuerpo." } },
    { nivel: "básico", ...{ q: "Diferencia síntoma y signo con un ejemplo de cada uno.", sol: "Síntoma: lo que siente el paciente (dolor de cabeza). Signo: lo que se puede medir (fiebre de 38,5 °C)." } },
    { nivel: "básico", ...{ q: "¿Qué es un vector? Pon dos ejemplos.", sol: "Un animal que transmite un patógeno de un individuo a otro. Ejemplos: el mosquito Anopheles (malaria) y la garrapata (enfermedad de Lyme)." } },
    { nivel: "básico", ...{ q: "¿Qué es una metástasis?", sol: "La extensión de un cáncer a otros órganos: sus células viajan por la sangre o la linfa y forman nuevos tumores lejos del original." } },
    { nivel: "básico", ...{ q: "Clasifica en prevención primaria, secundaria o terciaria: vacuna, mamografía, rehabilitación tras un ictus.", sol: "Vacuna: primaria. Mamografía: secundaria. Rehabilitación: terciaria." } },
    { nivel: "básico", ...{ q: "Propón tres hábitos para cuidar la salud mental.", sol: "Dormir 8-10 horas, hacer ejercicio y cuidar las relaciones; limitar las pantallas por la noche y pedir ayuda si el malestar dura." } },
    { nivel: "básico", q: "Diferencia epidemia, pandemia y endemia con un ejemplo de cada una.", sol: "Epidemia: muchos casos en una zona en poco tiempo (la gripe cada invierno). Pandemia: se extiende por varios continentes (la COVID-19). Endemia: presente siempre en una región (la malaria en zonas tropicales)." },
    { nivel: "básico", q: "¿Qué es el periodo de incubación?", sol: "El tiempo desde el contagio hasta que aparecen los síntomas; el patógeno se multiplica sin que lo notemos." },
    { nivel: "básico", q: "Asocia cada científico con su aportación: Pasteur, Koch, Fleming, Semmelweis.", sol: "Pasteur: teoría germinal y vacuna de la rabia. Koch: bacterias de la tuberculosis y el cólera. Fleming: penicilina. Semmelweis: lavado de manos." },
    { nivel: "básico", q: "Clasifica las drogas según su efecto: alcohol, nicotina, cannabis.", sol: "Alcohol: depresora. Nicotina: estimulante. Cannabis: perturbadora." },
    { nivel: "básico", q: "¿Qué es una zoonosis? Pon dos ejemplos.", sol: "Una enfermedad que se transmite de los animales a las personas. Ejemplos: la rabia y la gripe aviar." },
    { nivel: "básico", q: "¿Qué teléfonos llamarías ante una emergencia vital y ante pensamientos de suicidio?", sol: "El 112 para emergencias y el 024 para la línea de atención a la conducta suicida." },
    { nivel: "medio", ...{ q: "Compara bacterias y virus en tres aspectos.", sol: "Bacterias: son células, se reproducen solas, se tratan con antibióticos. Virus: no son células, solo se reproducen dentro de células, no responden a antibióticos." } },
    { nivel: "medio", ...{ q: "Indica la vía de contagio y una medida de prevención: tuberculosis, cólera, dengue, hepatitis B.", sol: "Tuberculosis: aire, ventilar y taparse al toser. Cólera: agua contaminada, potabilizar. Dengue: mosquito, repelentes y mosquiteras. Hepatitis B: sangre y relaciones sexuales, no compartir agujas, preservativo y vacuna." } },
    { nivel: "medio", ...{ q: "Explica cómo aparecen las bacterias resistentes.", sol: "Al usar antibióticos, mueren las bacterias sensibles y sobreviven las que por azar resisten. Estas se multiplican y la población entera pasa a ser resistente." } },
    { nivel: "medio", ...{ q: "Cita cuatro factores de riesgo de las enfermedades cardiovasculares.", sol: "Tabaco, sedentarismo, mala alimentación (sal, grasas saturadas), obesidad, hipertensión y colesterol alto." } },
    { nivel: "medio", q: "Explica qué demostró John Snow y por qué fue importante.", sol: "Con un mapa de los casos de cólera en Londres demostró que la enfermedad se transmitía por el agua de una fuente y no por el aire; al cerrarla terminó el brote. Fue el inicio de la epidemiología." },
    { nivel: "medio", q: "Diferencia aislamiento y cuarentena.", sol: "El aislamiento separa a las personas enfermas; la cuarentena separa a las personas sanas que han estado en contacto con un enfermo, durante el tiempo de incubación." },
    { nivel: "medio", q: "Explica qué son la tolerancia y la dependencia en una adicción.", sol: "Tolerancia: se necesita más cantidad de la sustancia para notar el mismo efecto. Dependencia: la persona necesita la sustancia y, si la deja, sufre síndrome de abstinencia." },
    { nivel: "medio", q: "¿Por qué el cambio climático puede traer enfermedades nuevas a España?", sol: "Porque al subir la temperatura los mosquitos vectores, como el mosquito tigre, amplían su zona y pueden transmitir enfermedades como el dengue donde antes no había." },
    { nivel: "medio", q: "Cita cuatro tratamientos contra el cáncer y en qué consisten.", sol: "Cirugía (extirpar el tumor), quimioterapia (medicamentos contra las células que se dividen rápido), radioterapia (radiación que las destruye) e inmunoterapia (ayuda al sistema inmunitario a atacarlas)." },
    { nivel: "medio", q: "¿Qué es el estigma en salud mental y por qué es un problema?", sol: "Son los prejuicios hacia las personas con trastornos mentales; hacen que muchas no pidan ayuda por vergüenza y que no reciban tratamiento a tiempo." },
    { nivel: "medio", q: "¿Qué hay que hacer con los antibióticos o medicamentos que sobran?", sol: "No guardarlos para automedicarse; llevarlos a la farmacia, al punto SIGRE, para que se eliminen sin contaminar." },
    { nivel: "medio", q: "Explica las adicciones sin sustancia con dos ejemplos.", sol: "Son conductas que el cerebro asocia a la recompensa y se vuelven compulsivas, con pérdida de control: las apuestas en línea y el uso compulsivo de videojuegos o redes sociales." },
    { nivel: "avanzado", q: "Una población de bacterias tiene un 1 % de individuos resistentes. Se toma un antibiótico que mata al 99 % sensible. ¿Qué pasará con la población a los pocos días? ¿Qué hubiera pasado si se deja el tratamiento a medias?", sol: "Sobreviven las resistentes y se multiplican: la población pasa a ser casi toda resistente. Si se deja el tratamiento a medias, sobreviven también algunas sensibles algo más fuertes, la infección puede volver y se favorece la selección de resistencias." },
    { nivel: "avanzado", q: "Interpreta la gráfica de causas de muerte en España: ¿por qué las infecciosas ocupan un lugar tan bajo y qué pasaba hace un siglo?", sol: "Gracias al agua potable, la higiene, las vacunas y los antibióticos, las infecciones causan hoy pocas muertes. Hace un siglo eran la primera causa (tuberculosis, diarreas, neumonía) y la esperanza de vida era de unos 40 años." },
    { nivel: "avanzado", q: "Diseña un experimento para comprobar la eficacia del lavado de manos.", sol: "Tocar placas de Petri con agar con los dedos sin lavar, tras lavarse solo con agua y tras lavarse 20 segundos con jabón. Incubar a temperatura ambiente unos días y contar las colonias. Mantener iguales las placas, el tiempo y la temperatura. Se espera menos colonias con jabón." },
    { nivel: "avanzado", q: "Explica, con el enfoque de una sola salud, por qué el uso de antibióticos en la ganadería afecta a las personas.", sol: "Si se usan en exceso en los animales, se seleccionan bacterias resistentes que pueden llegar a las personas por los alimentos, el agua o el contacto; además, los genes de resistencia pueden pasar a bacterias humanas. La salud animal, humana y ambiental están unidas." },
    { nivel: "avanzado", q: "¿Por qué el tabaco es un factor de riesgo de tantas enfermedades distintas?", sol: "Contiene miles de sustancias tóxicas y decenas de cancerígenos que llegan a todo el cuerpo por la sangre: dañan los pulmones (EPOC, cáncer), las arterias (infarto, ictus), la boca, la vejiga y otros órganos, y la nicotina crea una fuerte adicción." },
    { nivel: "avanzado", q: "Propón un plan de prevención primaria y secundaria para reducir las enfermedades cardiovasculares en tu familia.", sol: "Primaria: dieta mediterránea con poca sal y ultraprocesados, ejercicio diario, no fumar, limitar el alcohol, dormir bien. Secundaria: revisiones periódicas de tensión, colesterol y glucosa, sobre todo en los adultos, para detectar problemas antes de que den síntomas." },
    { nivel: "avanzado", q: "Analiza el caso de Semmelweis: ¿por qué crees que muchos médicos no le hicieron caso? ¿Qué nos enseña sobre la ciencia?", sol: "Aún no se conocían los microbios y su propuesta implicaba que los propios médicos transmitían la muerte, algo difícil de aceptar. Enseña que la ciencia se basa en datos, que las ideas nuevas encuentran resistencia y que hay que buscar explicaciones que las respalden." },
  ],
  quiz: [
    { q: "Según la OMS, la salud es…", o: ["no estar enfermo", "bienestar físico, mental y social", "estar en forma", "no ir al médico"], a: 1, e: "No solo la ausencia de enfermedad." },
    { q: "La fiebre medida con un termómetro es un…", o: ["síntoma", "patógeno", "signo", "vector"], a: 2, e: "Se puede medir." },
    { q: "Los virus…", o: ["solo se reproducen dentro de células", "son bacterias", "se curan con antibióticos", "son células"], a: 0, e: "Tienen material genético y cápsula." },
    { q: "La malaria se transmite por…", o: ["el aire", "el agua", "la sangre de transfusiones solo", "un mosquito"], a: 3, e: "Es un vector." },
    { q: "La teoría germinal la desarrolló…", o: ["Fleming", "Pasteur", "Snow", "Leeuwenhoek"], a: 1, e: "Los microbios causan enfermedades." },
    { q: "El primer antibiótico, la penicilina, lo descubrió…", o: ["Koch", "Semmelweis", "Fleming", "Pasteur"], a: 2, e: "En 1928." },
    { q: "El tiempo entre el contagio y los síntomas es la…", o: ["incubación", "convalecencia", "epidemia", "cuarentena"], a: 0, e: "El patógeno se multiplica." },
    { q: "Una enfermedad que se extiende por varios continentes es una…", o: ["endemia", "epidemia", "brote", "pandemia"], a: 3, e: "Como la COVID-19." },
    { q: "Los antibióticos sirven contra…", o: ["virus", "bacterias", "hongos y virus", "el cáncer"], a: 1, e: "No contra virus." },
    { q: "Las superbacterias son…", o: ["bacterias beneficiosas", "virus grandes", "bacterias resistentes a antibióticos", "vacunas"], a: 2, e: "Por el mal uso de antibióticos." },
    { q: "La principal causa de muerte en España son las enfermedades…", o: ["del sistema circulatorio", "infecciosas", "digestivas", "de la piel"], a: 0, e: "Junto con los tumores." },
    { q: "La extensión de un cáncer a otros órganos se llama…", o: ["tumor benigno", "vacuna", "mutación", "metástasis"], a: 3, e: "Por la sangre o la linfa." },
    { q: "La nicotina es una droga…", o: ["depresora", "estimulante", "perturbadora", "inofensiva"], a: 1, e: "Acelera el sistema nervioso." },
    { q: "Necesitar más cantidad de droga para el mismo efecto es…", o: ["abstinencia", "adicción sin sustancia", "tolerancia", "inmunidad"], a: 2, e: "Paso previo a la dependencia." },
    { q: "El teléfono de atención a la conducta suicida en España es el…", o: ["024", "112", "016", "091"], a: 0, e: "Gratuito y a cualquier hora." },
    { q: "Una mamografía es prevención…", o: ["primaria", "terciaria", "cuaternaria", "secundaria"], a: 3, e: "Detecta pronto." },
    { q: "Una zoonosis es una enfermedad que…", o: ["solo afecta a animales", "pasa de animales a personas", "es genética", "no se contagia"], a: 1, e: "Como la rabia." },
    { q: "Separar a personas sanas que han estado con un enfermo es…", o: ["aislamiento", "vacunación", "cuarentena", "tratamiento"], a: 2, e: "Durante la incubación." },
    { q: "El padre de la epidemiología, que estudió el cólera en Londres, fue…", o: ["John Snow", "Robert Koch", "Louis Pasteur", "Edward Jenner"], a: 0, e: "Con un mapa de casos." },
    { q: "El enfoque de «una sola salud» une la salud de…", o: ["niños y adultos", "hombres y mujeres", "ricos y pobres", "personas, animales y medio ambiente"], a: 3, e: "Todo está conectado." },
  ],
  examen: [
    { q: "El estilo de vida es un factor de salud que…", o: ["no se puede cambiar", "podemos controlar más que otros", "solo depende de los genes", "no influye"], a: 1, e: "Alimentación, ejercicio, sueño…" },
    { q: "El cólera se transmite sobre todo por…", o: ["mosquitos", "el aire", "agua contaminada", "relaciones sexuales"], a: 2, e: "Lo demostró Snow." },
    { q: "Tomar antibióticos para un resfriado…", o: ["no sirve y favorece resistencias", "lo cura", "previene la gripe", "es obligatorio"], a: 0, e: "El resfriado es un virus." },
    { q: "El cáncer aparece cuando unas células…", o: ["se contagian", "mueren", "dejan de dividirse", "se dividen sin control"], a: 3, e: "Por mutaciones." },
    { q: "El alcohol es una droga…", o: ["estimulante", "depresora", "perturbadora", "ilegal"], a: 1, e: "Ralentiza el sistema nervioso." },
    { q: "La convalecencia es la fase de…", o: ["contagio", "incubación", "recuperación", "síntomas"], a: 2, e: "Tras la enfermedad." },
    { q: "La higiene pública incluye…", o: ["potabilizar el agua y depurar las residuales", "tomar antibióticos", "hacer deporte", "dormir bien"], a: 0, e: "Ha salvado millones de vidas." },
    { q: "La rehabilitación tras un ictus es prevención…", o: ["primaria", "secundaria", "nula", "terciaria"], a: 3, e: "Reduce las consecuencias." },
  ],
  feynman: [...["Qué es la salud y de qué factores depende", "Cómo se contagian las enfermedades infecciosas y cómo se previenen", "Por qué hay que usar bien los antibióticos"], "Cómo se descubrió que los microbios causan enfermedades", "Qué es una adicción y por qué cambia el cerebro"],
  mapa: mapa("SALUD Y ENFERMEDAD", "var(--eso)", [
    ["Salud", "física · mental · social", "var(--leaf)"],
    ["Infecciosas", "bacterias · virus · hongos · protozoos", "var(--red)"],
    ["No infecciosas", "cardiovasculares · cáncer · diabetes", "var(--pen)"],
    ["Prevención", "higiene · vacunas · hábitos", "var(--inf)"],
  ], 290),
  tarjetas: [
    ...[
    ["Salud (OMS)", "Estado de completo bienestar físico, mental y social."],
    ["Patógeno", "Microorganismo que causa una enfermedad."],
    ["Virus", "Partícula no celular que solo se reproduce dentro de células."],
    ["Vector", "Animal que transmite un patógeno, como un mosquito."],
    ["Antibiótico", "Medicamento contra las bacterias; no sirve contra virus."],
    ["Resistencia", "Capacidad de algunas bacterias de sobrevivir a los antibióticos."],
    ["Factor de riesgo", "Algo que aumenta la probabilidad de enfermar: tabaco, sedentarismo…"],
    ["Prevención secundaria", "Detectar pronto una enfermedad, antes de que dé síntomas."],
  ],
    ["Incubación", "Tiempo entre el contagio y la aparición de síntomas."],
    ["Pandemia", "Epidemia que se extiende por varios continentes."],
    ["Adicción", "Dependencia de una sustancia o conducta que altera el cerebro."],
    ["Una sola salud", "La salud humana, animal y ambiental están unidas."],
  ],
  glosario: [
    ["Salud", "Estado de completo bienestar físico, mental y social."],
    ["Enfermedad", "Alteración del funcionamiento normal del cuerpo o la mente."],
    ["Síntoma", "Lo que nota el paciente."],
    ["Signo", "Lo que puede medir el médico."],
    ["Patógeno", "Microorganismo o parásito que causa enfermedad."],
    ["Bacteria", "Organismo unicelular procariota."],
    ["Virus", "Partícula no celular que se reproduce dentro de células."],
    ["Vector", "Animal que transmite un patógeno."],
    ["Incubación", "Periodo entre el contagio y los síntomas."],
    ["Epidemia", "Muchos casos de una enfermedad en poco tiempo en una zona."],
    ["Pandemia", "Epidemia extendida por varios continentes."],
    ["Zoonosis", "Enfermedad transmitida de animales a personas."],
    ["Antibiótico", "Medicamento que mata o frena las bacterias."],
    ["Resistencia antibiótica", "Capacidad de las bacterias de sobrevivir a los antibióticos."],
    ["Metástasis", "Extensión de un cáncer a otros órganos."],
    ["Droga", "Sustancia que altera el sistema nervioso y crea dependencia."],
    ["Factor de riesgo", "Circunstancia que aumenta la probabilidad de enfermar."],
    ["Prevención primaria", "Medidas para evitar que aparezca una enfermedad."],
  ],
  situacion: {
    titulo: "Detectives de la salud",
    reto: "Como hizo John Snow, vuestro grupo investigará la salud con datos reales: cómo se contagian los microbios en el instituto y qué hábitos de riesgo existen, para proponer una campaña de prevención.",
    pasos: [
      "Haced el experimento de las placas de Petri con manos sin lavar, lavadas con agua y lavadas con jabón, y contad las colonias.",
      "Simulad un contagio en clase con vasos de agua y un indicador ácido-base para ver cómo se propaga una infección.",
      "Analizad datos oficiales de causas de muerte en España y representadlos en un gráfico.",
      "Haced una encuesta anónima sobre hábitos (sueño, ejercicio, pantallas, consumo de alcohol o tabaco).",
      "Diseñad una campaña de prevención con tres mensajes basados en vuestros resultados.",
    ],
    producto: "Informe científico con experimentos, gráficos y encuesta, y una campaña de salud para el instituto.",
    evaluacion: [
      "Diseño correcto de los experimentos y control de variables.",
      "Análisis riguroso de los datos y las gráficas.",
      "Relación de las conclusiones con los contenidos del tema.",
      "Claridad y eficacia de la campaña.",
    ],
  },
  familias: ["Revisad juntos el botiquín y llevad al punto SIGRE de la farmacia los medicamentos caducados o sobrantes.", "Practicad el lavado de manos de 20 segundos antes de cada comida.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Saberes básicos de «Salud y enfermedad» y «Hábitos saludables» de Biología y Geología de 1º a 3º (RD 217/2022, BOE-A-2022-4975): concepto de salud, enfermedades infecciosas y no infecciosas, patógenos y transmisión, prevención, uso responsable de antibióticos, drogas y adicciones, salud mental y enfoque «una sola salud». En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Cultivo en placas de Petri de muestras de manos antes y después de lavarlas.",
      "Simulación de contagio con vasos de agua y un indicador ácido-base.",
      "Análisis de datos del INE sobre causas de muerte en España.",
      "Reconstrucción del mapa de John Snow con datos simplificados.",
    ],
  },
  fuentes: [...[RD, wiki("Enfermedad infecciosa", "Enfermedad_infecciosa"), wiki("Resistencia a antibióticos", "Resistencia_a_antibi%C3%B3ticos")], { t: "Instituto Nacional de Estadística: defunciones según la causa de muerte", url: "https://www.ine.es/" }],
  revisado: "2026-11-13",
};
