// Biología y Geología 3º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso3L4.js.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Anticuerpo en forma de Y.
const ac = (x, y, r = 0, c = "var(--pen)") => `<g transform="translate(${x} ${y}) rotate(${r})"><path d="M0 0 V 16 M0 0 L -9 -12 M0 0 L 9 -12" stroke="${c}" stroke-width="3.5" stroke-linecap="round" fill="none"/></g>`;
const L = require("./_eso3L4");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "El sistema inmunitario y las vacunas",
  minutos: 100,
  objetivos: [
    "Describir los órganos del sistema inmunitario, las barreras defensivas y la respuesta inespecífica",
    "Explicar la respuesta específica: antígenos, anticuerpos, linfocitos y memoria",
    "Conocer la historia de las vacunas, los tipos que existen y cómo se comprueba su seguridad",
    "Comprender la inmunidad de grupo y diferenciar la inmunidad activa y la pasiva",
    "Relacionar los grupos sanguíneos y los trasplantes con el reconocimiento de lo propio",
    "Reconocer alteraciones del sistema inmunitario: alergias, enfermedades autoinmunes e inmunodeficiencias",
  ],
  claves: ["antígeno", "anticuerpo", "fagocito", "linfocito", "memoria inmunitaria", "vacuna", "inmunidad de grupo", "grupo sanguíneo", "trasplante", "alergia"],
  pregunta: {
    texto: "Si ya has pasado la varicela, es muy raro que vuelvas a tenerla, aunque te contagie un amigo. ¿Cómo «recuerda» tu cuerpo un virus que viste hace años?",
    respuesta: "Durante la primera infección, tus linfocitos aprendieron a reconocer el virus y algunos se quedaron como <mark>células de memoria</mark>. Si el virus vuelve, lo reconocen al instante y fabrican anticuerpos tan deprisa que no llegas a enfermar. Las <b>vacunas</b> aprovechan este mismo mecanismo sin que tengas que pasar la enfermedad.",
  },
  lectura: {
    titulo: "Veintidós niños y una vacuna que cruzó el océano",
    html: `<p>A principios del siglo XIX, la viruela mataba a millones de personas en todo el mundo. En 1796, el médico inglés Edward Jenner había descubierto que el pus de las vacas con viruela vacuna protegía a las personas. Pero había un problema: ¿cómo llevar ese material vivo a América sin neveras ni aviones?</p>
<p>El médico alicantino Francisco Javier de Balmis tuvo una idea tan ingeniosa como arriesgada. En 1803 partió de La Coruña en el barco María Pita con 22 niños huérfanos que nunca habían pasado la viruela. Durante la travesía, cada pocos días vacunaba a dos niños con el pus de las ampollas de los anteriores, de brazo a brazo, para que el virus vacunal se mantuviera vivo. Los cuidaba Isabel Zendal, la rectora del orfanato, a quien la Organización Mundial de la Salud considera la primera enfermera en misión internacional de la historia.</p>
<p>La Real Expedición Filantrópica de la Vacuna llegó a Puerto Rico, Venezuela, Cuba, México y después a Filipinas y China, y vacunó a cientos de miles de personas. Fue la primera campaña de vacunación internacional. En 1980, gracias a campañas como aquella, la viruela se declaró erradicada del planeta. En este tema descubrirás cómo se defiende tu cuerpo y por qué una vacuna puede proteger a toda una sociedad.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Un ejército para defendernos</h3><p>Estamos rodeados de microorganismos, y algunos son patógenos. El <b>sistema inmunitario</b> es el conjunto de órganos, células y moléculas que nos defienden de ellos y también de células propias dañadas, como las cancerosas. Lo forman la <b>médula ósea</b>, donde nacen los glóbulos blancos, el <b>timo</b>, donde maduran algunos linfocitos, el <b>bazo</b>, los <b>ganglios linfáticos</b> y las <b>amígdalas</b>. Para defendernos, tiene que distinguir lo propio de lo extraño. Cualquier molécula que reconoce como extraña y que provoca una respuesta se llama <mark>antígeno</mark>.</p><p>Los órganos del sistema inmunitario están conectados por el <b>sistema linfático</b>, una red de vasos que recoge el líquido de los tejidos y lo filtra en los ganglios. Cuando tenemos una infección de garganta notamos los ganglios del cuello hinchados: es la señal de que dentro se están multiplicando los linfocitos para combatirla.</p>`,
      svg: L.radial("Órganos del sistema inmunitario", "Defensas", ["Médula ósea", "Timo", "Bazo", "Ganglios", "Amígdalas", "Vasos linfáticos"], "var(--pen)"),
    },
    {
      html: `<h3>1.2 Primera línea: las barreras</h3><p>Antes de llegar a la sangre, los microbios tienen que atravesar las <b>barreras defensivas</b>. La <mark>piel</mark> es una muralla de células muertas que los microbios no pueden cruzar si no hay una herida; además, el sudor y la grasa son ligeramente ácidos. Las <b>mucosas</b> de la nariz y la boca fabrican <b>moco</b>, que atrapa partículas, y los <b>cilios</b> de los bronquios las barren hacia fuera. Las <b>lágrimas</b> y la <b>saliva</b> tienen una enzima, la lisozima, que destruye bacterias. El <b>ácido del estómago</b> mata muchos microbios de los alimentos, y la <b>microbiota</b> no deja sitio a los patógenos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Barreras defensivas: piel, moco y cilios, lágrimas y saliva, ácido del estómago y microbiota">${BG}
        ${[["piel", "muralla", "#c98a5a"], ["moco y cilios", "atrapan y barren", "var(--leaf)"], ["lágrimas y saliva", "lisozima", "var(--water)"], ["estómago", "ácido", "var(--red)"], ["microbiota", "ocupa el sitio", "var(--pen)"]].map(([n, d, c], i) => { const y = 14 + i * 32; return `<rect x="20" y="${y}" width="220" height="26" rx="8" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2"/>${t(32, y + 17, n, { size: 11, anchor: "start", color: c })}${t(228, y + 17, d, { size: 10, anchor: "end", weight: 400 })}`; }).join("")}</svg>`,
    },
    {
      html: `<h3>1.3 Segunda línea: la respuesta inespecífica</h3><p>Si un microbio entra, por ejemplo por un corte, actúa la <b>respuesta inespecífica</b>, que es igual para cualquier invasor y empieza en minutos. Se produce una <mark>inflamación</mark>: la zona se pone roja, caliente, hinchada y duele, porque los vasos se dilatan para que lleguen más glóbulos blancos. Unos glóbulos blancos llamados <b>fagocitos</b> salen de los capilares, rodean a los microbios y se los «comen»: es la <mark>fagocitosis</mark>. El pus está formado por fagocitos muertos y restos de bacterias. La <b>fiebre</b> también ayuda: el calor frena a muchos patógenos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fagocitosis: un fagocito rodea con sus prolongaciones a una bacteria y la engulle">${BG}
        ${[0, 1, 2].map((k) => { const x = 46 + k * 84; return `<g transform="translate(${x} 86)"><path d="${k === 0 ? "M-28 0 Q -28 -30 0 -30 Q 28 -30 28 0 Q 28 30 0 30 Q -28 30 -28 0 Z" : k === 1 ? "M-28 10 Q -30 -30 0 -30 Q 26 -32 34 -10 Q 20 -4 22 6 Q 20 16 34 22 Q 20 34 0 32 Q -26 34 -28 10 Z" : "M-30 0 Q -30 -32 0 -32 Q 30 -32 30 0 Q 30 32 0 32 Q -30 32 -30 0 Z"}" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.5"/><circle cx="-10" cy="-6" r="7" fill="var(--pen)" fill-opacity=".6"/>${k === 0 ? `<rect x="36" y="-5" width="20" height="10" rx="5" fill="var(--leaf)"/>` : k === 1 ? `<rect x="22" y="1" width="20" height="10" rx="5" fill="var(--leaf)" transform="translate(0 -6)"/>` : `<circle cx="10" cy="10" r="10" fill="var(--sun)" fill-opacity=".4"/><rect x="2" y="5" width="16" height="9" rx="4" fill="var(--leaf)" fill-opacity=".5"/>`}</g>${k < 2 ? fl(x + 42, 140, x + 58, 140) : ""}`; }).join("")}
        ${t(46, 140, "detecta", { size: 10 })}${t(130, 140, "rodea", { size: 10 })}${t(214, 140, "digiere", { size: 10 })}${t(130, 30, "fagocito y bacteria", { size: 11, color: "var(--muted)" })}</svg>`,
      video: { id: "NHOiq_wZQOQ", titulo: "Así funciona tu SISTEMA INMUNITARIO: ¿Cómo actúan las DEFENSAS?", canal: "La Hiperactina", vistas: 1765037 },
    },
    {
      html: `<h3>1.4 Los glóbulos blancos</h3><p>Los <b>glóbulos blancos</b> o leucocitos son las células del sistema inmunitario. Hay varios tipos con funciones distintas, y un análisis de sangre los cuenta: si suben, puede indicar una infección.</p>${tabla(["Tipo", "Respuesta", "Función"], [["Neutrófilos", "inespecífica", "fagocitan bacterias; los primeros en llegar"], ["Macrófagos", "inespecífica", "fagocitos grandes; presentan antígenos a los linfocitos"], ["Linfocitos B", "específica", "fabrican anticuerpos"], ["Linfocitos T", "específica", "dirigen la respuesta y destruyen células infectadas"]])}<p>Los linfocitos son los responsables de la defensa más precisa, la que tiene memoria.</p><p>En un litro de sangre hay entre 4.000 y 11.000 millones de glóbulos blancos, muchísimos menos que glóbulos rojos. Se fabrican continuamente en la médula ósea a partir de <b>células madre</b>, y muchos viven solo unos días.</p>`,
      svg: L.compara("Respuesta inespecífica y específica", ["Inespecífica", "var(--red)", ["igual para todos", "actúa en minutos", "sin memoria", "fagocitos"]], ["Específica", "var(--pen)", ["un antígeno concreto", "tarda días", "con memoria", "linfocitos B y T"]]),
    },
    {
      html: `<h3>2.1 Tercera línea: anticuerpos</h3><p>La <b>respuesta específica</b> va dirigida contra un antígeno concreto. Los <b>linfocitos B</b> fabrican <mark>anticuerpos</mark>, proteínas con forma de Y que encajan en el antígeno como una llave en su cerradura. Cada anticuerpo reconoce un único antígeno: los que sirven contra el sarampión no sirven contra la gripe. Al unirse a los microbios, los anticuerpos los <b>inmovilizan</b>, los agrupan y los marcan para que los fagocitos los destruyan con más facilidad. También neutralizan las toxinas que fabrican algunas bacterias. Esta respuesta tarda varios días en ponerse en marcha la primera vez.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Anticuerpos en forma de Y que se unen a los antígenos de la superficie de un virus">${BG}
        <circle cx="130" cy="90" r="32" fill="var(--red)" fill-opacity=".3" stroke="var(--red)" stroke-width="2.5"/>
        ${[0, 1, 2, 3, 4, 5].map((k) => { const a = (k * Math.PI) / 3; const x = 130 + 36 * Math.cos(a), y = 90 + 36 * Math.sin(a); return `<path d="M${(x - 4).toFixed(1)} ${(y - 4).toFixed(1)} l 8 0 l -4 7 Z" fill="var(--red)" transform="rotate(${(a * 180) / Math.PI + 90} ${x.toFixed(1)} ${y.toFixed(1)})"/>${ac((130 + 58 * Math.cos(a)).toFixed(1), (90 + 58 * Math.sin(a)).toFixed(1), (a * 180) / Math.PI - 90)}`; }).join("")}
        ${t(130, 94, "virus", { size: 11, color: "var(--red)" })}${t(30, 26, "anticuerpo", { size: 11, anchor: "start", color: "var(--pen)" })}${t(240, 172, "antígeno", { size: 11, anchor: "end", color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>2.2 Linfocitos T y memoria inmunitaria</h3><p>Los <b>linfocitos T</b> maduran en el timo. Unos coordinan toda la respuesta, avisando a los linfocitos B y a los fagocitos; otros, los <b>citotóxicos</b>, reconocen y destruyen nuestras propias células infectadas por virus o convertidas en cancerosas. Cuando la infección acaba, quedan <mark>linfocitos de memoria</mark>, que pueden vivir años. Si el mismo antígeno vuelve, la <b>respuesta secundaria</b> es mucho más rápida e intensa que la primaria: fabrica muchos más anticuerpos en uno o dos días. Por eso hay enfermedades que solo se pasan una vez.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica de anticuerpos: la respuesta primaria es lenta y baja; la secundaria, ante el mismo antígeno, es rápida y alta">${BG}
        <path d="M30 150 H 246 M30 150 V 20" stroke="var(--muted)" stroke-width="2"/>
        <path d="M40 150 Q 70 150 80 130 Q 92 110 110 134 Q 120 146 140 148 Q 150 150 156 150 Q 166 120 176 50 Q 186 30 206 70 Q 226 120 246 128" stroke="var(--pen)" stroke-width="3" fill="none"/>
        <path d="M40 150 V 160 M150 150 V 160" stroke="var(--red)" stroke-width="3"/>
        ${t(40, 172, "1.er contacto", { size: 9, anchor: "start", color: "var(--red)" })}${t(150, 172, "2.º contacto", { size: 9, anchor: "start", color: "var(--red)" })}
        ${t(86, 104, "primaria", { size: 10, color: "var(--pen)" })}${t(244, 30, "secundaria", { size: 10, anchor: "end", color: "var(--pen)" })}
        ${t(22, 86, "anticuerpos", { size: 9, color: "var(--muted)", anchor: "middle" }).replace("<text ", '<text transform="rotate(-90 22 86)" ')}</svg>`,
    },
    {
      html: `<h3>2.3 Una respuesta en equipo</h3><p>Las defensas no actúan por separado, sino coordinadas, como un equipo. Veamos lo que ocurre cuando un virus de la gripe entra por primera vez:</p><p>1. Un <b>macrófago</b> engulle algunos virus, los trocea y coloca sus antígenos en su superficie, como quien enseña una foto del sospechoso. Es la <mark>presentación del antígeno</mark>.<br>2. Un <b>linfocito T colaborador</b> que reconoce esa «foto» se activa y da la alarma: libera sustancias que estimulan a los demás.<br>3. Los <b>linfocitos B</b> que reconocen el mismo antígeno se multiplican y se convierten en <b>células plasmáticas</b>, auténticas fábricas que producen miles de anticuerpos por segundo.<br>4. Los <b>linfocitos T citotóxicos</b> destruyen las células del cuerpo que ya están infectadas.<br>5. Al acabar, la mayoría de estas células mueren, pero quedan <b>linfocitos de memoria</b>.</p><p>Por eso el VIH es tan peligroso: destruye precisamente los linfocitos T colaboradores, los que coordinan al equipo, y sin ellos todo el sistema se desorganiza.</p>`,
      svg: L.flujo("Pasos de la respuesta específica", ["Macrófago presenta el antígeno", "Linfocito T colaborador da la alarma", "Linfocitos B fabrican anticuerpos", "Quedan linfocitos de memoria"], "Un equipo coordinado"),
    },
    {
      html: `<h3>3.1 Una breve historia de las vacunas</h3><p>Ya en la antigua China e India se practicaba la <b>variolización</b>: se frotaba en un corte material de las costras de enfermos leves de viruela para provocar una enfermedad suave que protegía. Era arriesgado, porque a veces causaba la viruela grave.</p><p>En 1796, <b>Edward Jenner</b> observó que las ordeñadoras que se contagiaban de la viruela de las vacas no enfermaban de la viruela humana. Inoculó a un niño con pus de viruela vacuna y después comprobó que no se contagiaba de la humana. De ahí viene la palabra <mark>vacuna</mark>, del latín <i>vacca</i>. En 1885, <b>Louis Pasteur</b> creó la vacuna contra la rabia con virus debilitados en el laboratorio. En el siglo XX llegaron las vacunas contra la difteria, el tétanos, la tos ferina, la polio (Jonas Salk, 1955) y el sarampión.</p><p>La viruela fue declarada <b>erradicada</b> en 1980: es la única enfermedad humana eliminada de todo el planeta. La polio está muy cerca. En 2020, las vacunas de <b>ARN mensajero</b> contra la COVID-19 se desarrollaron en menos de un año gracias a décadas de investigación previa.</p>`,
      svg: L.linea("Historia de las vacunas", [["1796", "Jenner: viruela"], ["1803", "Balmis a América"], ["1885", "Pasteur: rabia"], ["1955", "Salk: polio"], ["1980", "Viruela erradicada"], ["2020", "ARN mensajero"]], "Más de dos siglos de vacunas"),
    },
    {
      html: `<h3>3.2 Las vacunas</h3><p>Una <b>vacuna</b> es un preparado que contiene el antígeno de un patógeno, pero sin su capacidad de causar la enfermedad: microbios muertos o debilitados, trozos de ellos, toxinas inactivadas o, en las vacunas de ARN mensajero, las instrucciones para que nuestras células fabriquen un antígeno inofensivo. El sistema inmunitario responde como si fuera una infección real y genera <mark>linfocitos de memoria</mark>. Así, si el patógeno de verdad llega, la respuesta secundaria lo frena. La primera vacuna la desarrolló Edward Jenner en 1796 contra la viruela, una enfermedad que hoy está erradicada del planeta.</p><p>Hay varios <b>tipos de vacunas</b>: de microbios <b>atenuados</b> (vivos pero debilitados, como la triple vírica), <b>inactivados</b> (muertos, como la de la polio inyectable), de <b>subunidades</b> (solo un trozo del microbio, como la de la hepatitis B), <b>toxoides</b> (toxinas inactivadas, como la del tétanos), de <b>ARN mensajero</b> y de <b>vector viral</b>. Algunas necesitan varias dosis o <b>dosis de recuerdo</b> para que la memoria dure.</p>`,
      svg: L.radial("Tipos de vacunas", "Vacunas", ["Atenuadas", "Inactivadas", "Subunidades", "Toxoides", "ARN mensajero", "Vector viral"], "var(--leaf)"),
      video: { id: "_OUlsRjrGI4", titulo: "Cómo funcionan las vacunas", canal: "AFP Español", vistas: 1432989 },
    },
    {
      html: `<h3>3.3 Inmunidad de grupo y calendario vacunal</h3><p>Algunas personas no pueden vacunarse: bebés muy pequeños, enfermos con las defensas bajas o alérgicos a algún componente. Si la mayoría de la población está vacunada, el patógeno no encuentra a quién contagiar y deja de circular, así que también <b>ellos quedan protegidos</b>. Es la <mark>inmunidad de grupo</mark>. Para el sarampión hace falta vacunar a más del 95 % de la población. En España, el <b>calendario vacunal</b> recoge las vacunas gratuitas y recomendadas en cada edad, como la triple vírica, la del tétanos o la del virus del papiloma. Las vacunas son de los medicamentos más seguros y vigilados.</p><p>El porcentaje necesario depende de lo contagiosa que sea la enfermedad: cuantas más personas contagia cada enfermo, más alta debe ser la cobertura. Cuando baja la vacunación, vuelven los brotes: en los últimos años ha habido brotes de sarampión en varios países europeos.</p>`,
      svg: L.barras("Cobertura de vacunación necesaria para la inmunidad de grupo (aproximada)", [["Sarampión", 95, "≈ 95 %"], ["Tos ferina", 92, "≈ 92 %"], ["Paperas", 88, "≈ 88 %"], ["Polio", 85, "≈ 85 %"], ["Difteria", 85, "≈ 85 %"]], "Porcentaje de población vacunada", 100),
    },
    {
      html: `<h3>3.4 Inmunidad activa y pasiva</h3><p>La <b>inmunidad activa</b> la genera el propio cuerpo, al pasar una enfermedad o al vacunarse; tarda en aparecer pero dura mucho tiempo porque deja memoria. La <b>inmunidad pasiva</b> se produce cuando recibimos anticuerpos ya fabricados por otro organismo: es inmediata, pero dura solo unas semanas porque esos anticuerpos acaban desapareciendo.</p>${tabla(["", "Activa", "Pasiva"], [["Natural", "pasar la enfermedad", "anticuerpos de la madre por la placenta y la leche"], ["Artificial", "vacuna", "suero con anticuerpos (antitetánico, antiveneno)"], ["¿Memoria?", "sí, dura años", "no, dura semanas"]])}`,
      svg: L.compara("Inmunidad activa y pasiva", ["Activa", "var(--leaf)", ["la crea el cuerpo", "tarda en aparecer", "deja memoria", "vacuna, infección"]], ["Pasiva", "var(--pen)", ["anticuerpos recibidos", "inmediata", "dura semanas", "suero, leche materna"]]),
    },
    {
      html: `<h3>3.5 ¿Cómo sabemos que una vacuna es segura?</h3><p>Antes de aprobarse, una vacuna pasa por estudios en el laboratorio y en animales y después por <mark>ensayos clínicos</mark> en tres fases: en la <b>fase 1</b> se prueba en unas decenas de voluntarios para comprobar que es segura; en la <b>fase 2</b>, en cientos, para ajustar la dosis; y en la <b>fase 3</b>, en decenas de miles, comparando a quienes reciben la vacuna con quienes reciben un <b>placebo</b>, sin que ninguno sepa qué le ha tocado. Las agencias de medicamentos, como la Agencia Europea, revisan todos los datos antes de autorizarla.</p><p>Una vez en uso, sigue la <b>farmacovigilancia</b>: se registra cualquier efecto adverso en millones de personas. Los efectos más comunes son leves, como dolor en el brazo o algo de fiebre. Los graves son muy raros, mucho menos frecuentes que las complicaciones de la propia enfermedad.</p><p>En 1998 un médico británico publicó un estudio que relacionaba la triple vírica con el autismo. Se demostró que era un <b>fraude</b>, la revista lo retiró y él perdió su licencia, pero el bulo hizo bajar la vacunación y provocó brotes de sarampión. Ante una información sobre vacunas conviene preguntarse quién la publica y en qué datos se basa.</p>`,
      svg: L.flujo("Fases de desarrollo de una vacuna", ["Laboratorio y animales", "Fase 1 y 2: decenas y cientos", "Fase 3: miles con placebo", "Autorización y vigilancia"], "Del laboratorio a tu brazo"),
    },
    {
      html: `<h3>4.1 Cuando el sistema inmunitario falla</h3><p>A veces el sistema inmunitario reacciona en exceso. Las <mark>alergias</mark> son respuestas exageradas a sustancias inofensivas, como el polen, los ácaros o algunos alimentos; en casos graves, la anafilaxia, se necesita adrenalina urgente. En las <b>enfermedades autoinmunes</b>, como la diabetes tipo 1 o la celiaquía, ataca a células del propio cuerpo. En las <b>inmunodeficiencias</b> las defensas son débiles: el <b>VIH</b> destruye linfocitos T y, sin tratamiento, causa el sida, con infecciones que en una persona sana no serían graves. Por último, en los trasplantes el sistema inmunitario puede <b>rechazar</b> el órgano donado.</p><p>Las alergias son cada vez más frecuentes: en España, alrededor de una de cada cuatro personas padece alguna. Una persona alérgica debe conocer su alergia, evitar el alérgeno y, si su médico se lo indica, llevar siempre un autoinyector de adrenalina.</p>`,
      svg: L.tabla("Alteraciones del sistema inmunitario", ["Alteración", "Qué ocurre", "Ejemplo"], [["Alergia", "reacción exagerada", "polen, ácaros"], ["Autoinmune", "ataca lo propio", "diabetes tipo 1"], ["Déficit inmune", "defensas débiles", "sida (VIH)"]]),
      video: { id: "R4J3stbov_0", titulo: "La alergia: un error del sistema de defensa del organismo", canal: "DW Español", vistas: 903386 },
    },
    {
      html: `<h3>4.2 Grupos sanguíneos y trasplantes</h3><p>Nuestras células llevan en su superficie unas moléculas que funcionan como un carné de identidad. En los glóbulos rojos están los antígenos del <mark>sistema ABO</mark>: el grupo A tiene antígenos A; el B, antígenos B; el AB, los dos; y el 0, ninguno. Además, el plasma tiene anticuerpos contra los antígenos que no tenemos: una persona del grupo A tiene anticuerpos anti-B. Si recibe sangre del grupo B, sus anticuerpos se unen a esos glóbulos rojos, los aglutinan y la transfusión puede ser mortal. Por eso antes de una transfusión siempre se comprueba la compatibilidad. También existe el <b>factor Rh</b>, positivo o negativo.</p><p>Con los <b>trasplantes</b> ocurre algo parecido: el sistema inmunitario reconoce el órgano donado como extraño y puede rechazarlo. Se buscan donantes lo más compatibles posible y el receptor toma <b>inmunosupresores</b> de por vida. España es líder mundial en donación y trasplante de órganos desde hace más de 30 años gracias a la Organización Nacional de Trasplantes. Donar sangre, médula ósea u órganos salva vidas.</p>`,
      svg: L.tabla("Grupos sanguíneos del sistema ABO", ["Grupo", "Antígenos", "Anticuerpos"], [["A", "A", "anti-B"], ["B", "B", "anti-A"], ["AB", "A y B", "ninguno"], ["0", "ninguno", "anti-A y anti-B"]]),
    },
    {
      html: `<h3>4.3 Cuidar nuestras defensas</h3><p>Muchos anuncios prometen «reforzar las defensas» con suplementos, pero en una persona sana con una dieta variada no hacen falta. Lo que de verdad ayuda al sistema inmunitario son los hábitos: <b>dormir</b> lo suficiente, porque durante el sueño se fabrican sustancias defensivas; una <b>alimentación variada</b> con frutas, verduras y proteínas; el <b>ejercicio</b> moderado; evitar el <b>tabaco</b> y el alcohol, que dañan las barreras y los glóbulos blancos; y controlar el <b>estrés</b> prolongado, que debilita la respuesta.</p><p>También es importante tener al día el <b>calendario vacunal</b>, lavarse las manos y no tomar antibióticos sin receta. Y cuidar la <b>microbiota</b> con fibra y alimentos fermentados como el yogur, porque las bacterias beneficiosas del intestino entrenan al sistema inmunitario desde que nacemos. Hay incluso pruebas de que los niños que crecen en contacto con la naturaleza y con animales tienen menos alergias.</p>`,
      svg: L.radial("Hábitos que ayudan al sistema inmunitario", "Defensas", ["Dormir", "Dieta variada", "Ejercicio", "Sin tabaco", "Vacunas", "Microbiota"], "var(--leaf)"),
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
    { enunciado: "Una persona del grupo A necesita una transfusión. ¿Puede recibir sangre del grupo 0? ¿Y del grupo B?",
      pasos: ["Sus anticuerpos son anti-B.", "Los glóbulos rojos del grupo 0 no tienen antígenos A ni B: no hay nada que atacar.", "Los del grupo B tienen antígeno B: sus anticuerpos anti-B los aglutinarían."],
      resultado: "puede recibir del grupo 0 (y del A), pero no del B." },
    { enunciado: "En un ensayo de fase 3 participan 30.000 voluntarios: 15.000 reciben la vacuna y 15.000 un placebo. Enferman 15 vacunados y 150 del grupo placebo. ¿Qué eficacia tiene la vacuna?",
      pasos: ["Sin vacuna enferman 150; con vacuna, 15.", "Los casos se reducen en 150 − 15 = 135.", "Eficacia = 135 / 150 · 100 = 90 %."],
      resultado: "la vacuna reduce el riesgo de enfermar un 90 %." },
    { enunciado: "Una niña se cae en el campo y se hace una herida profunda con tierra. No sabe si tiene la vacuna del tétanos al día. ¿Qué le pondrán en urgencias y por qué?",
      pasos: ["El tétanos es una toxina muy peligrosa y la vacuna tarda días en dar protección.", "Para protegerla de inmediato le dan suero antitetánico: anticuerpos ya hechos (inmunidad pasiva).", "Además le ponen una dosis de vacuna para que genere su propia memoria (inmunidad activa)."],
      resultado: "suero para protegerla ya y vacuna para protegerla en el futuro." },
  ],
  errores: [...[
    "Confundir antígeno y anticuerpo: el antígeno es lo extraño; el anticuerpo es la proteína que lo reconoce.",
    "Pensar que las vacunas curan: previenen, entrenando al sistema inmunitario antes de la infección.",
    "Creer que un anticuerpo sirve contra cualquier microbio: cada uno es específico.",
    "Confundir un suero con una vacuna: el suero da anticuerpos hechos (pasiva) y la vacuna genera memoria (activa).",
    "Pensar que la fiebre siempre es mala: es parte de la defensa, aunque hay que vigilarla.",
  ], "Creer que los suplementos «refuerzan las defensas» en una persona sana: lo que funciona son el sueño, la buena alimentación, el ejercicio y las vacunas."],
  ejercicios: [
    { nivel: "básico", ...{ q: "¿Qué es un antígeno? Pon dos ejemplos.", sol: "Una molécula que el sistema inmunitario reconoce como extraña y que provoca una respuesta. Ejemplos: proteínas de la cubierta de un virus, polen (en alérgicos)." } },
    { nivel: "básico", ...{ q: "Enumera cuatro barreras defensivas y cómo actúa cada una.", sol: "Piel (muralla), moco y cilios (atrapan y expulsan), lágrimas y saliva (lisozima), ácido del estómago (mata microbios)." } },
    { nivel: "básico", ...{ q: "¿Qué hacen los linfocitos B y los T?", sol: "Los B fabrican anticuerpos. Los T coordinan la respuesta y destruyen células infectadas o cancerosas." } },
    { nivel: "básico", ...{ q: "¿Qué es la inmunidad de grupo y a quién protege?", sol: "La protección de una población cuando la mayoría está inmunizada, porque el patógeno no circula. Protege a quienes no pueden vacunarse." } },
    { nivel: "básico", ...{ q: "Clasifica: vacuna del tétanos, suero antiofídico, leche materna, pasar la varicela.", sol: "Vacuna: activa artificial. Suero: pasiva artificial. Leche materna: pasiva natural. Varicela: activa natural." } },
    { nivel: "básico", q: "Nombra cinco órganos del sistema inmunitario.", sol: "Médula ósea, timo, bazo, ganglios linfáticos y amígdalas." },
    { nivel: "básico", q: "¿Por qué se llaman «vacunas»?", sol: "Porque la primera, de Jenner, se hizo con material de la viruela de las vacas (en latín, vacca)." },
    { nivel: "básico", q: "¿Qué enfermedad es la única erradicada del planeta y en qué año?", sol: "La viruela, en 1980." },
    { nivel: "básico", q: "Cita cuatro tipos de vacunas.", sol: "Atenuadas, inactivadas, de subunidades, toxoides, de ARN mensajero o de vector viral." },
    { nivel: "básico", q: "¿Qué antígenos tienen en sus glóbulos rojos los grupos A, B, AB y 0?", sol: "A: antígeno A. B: antígeno B. AB: los dos. 0: ninguno." },
    { nivel: "básico", q: "¿Qué es la farmacovigilancia?", sol: "El registro y estudio de los efectos adversos de un medicamento o vacuna una vez que se usa en la población." },
    { nivel: "básico", q: "Escribe tres hábitos que ayudan al sistema inmunitario.", sol: "Dormir lo suficiente, comer de forma variada, hacer ejercicio, no fumar y tener las vacunas al día." },
    { nivel: "medio", ...{ q: "Explica las cuatro señales de la inflamación y su causa.", sol: "Enrojecimiento, calor, hinchazón y dolor, porque los vasos se dilatan y llega más sangre y líquido con glóbulos blancos." } },
    { nivel: "medio", ...{ q: "Diferencia la respuesta inespecífica de la específica.", sol: "Inespecífica: igual para todos los invasores, rápida, sin memoria (fagocitosis, inflamación). Específica: contra un antígeno concreto, más lenta la primera vez, con memoria (linfocitos y anticuerpos)." } },
    { nivel: "medio", ...{ q: "Dibuja la gráfica de la respuesta primaria y secundaria y explícala.", sol: "Primaria: tarda días y alcanza pocos anticuerpos. Secundaria: es rápida y muy intensa gracias a los linfocitos de memoria." } },
    { nivel: "medio", ...{ q: "Explica cómo funciona una vacuna.", sol: "Introduce un antígeno inofensivo del patógeno; el cuerpo desarrolla una respuesta y linfocitos de memoria; ante el patógeno real, responde deprisa y no enferma." } },
    { nivel: "medio", ...{ q: "Explica qué es una alergia y una enfermedad autoinmune.", sol: "Alergia: respuesta exagerada a una sustancia inofensiva. Autoinmune: el sistema inmunitario ataca células del propio cuerpo." } },
    { nivel: "medio", q: "Explica qué hizo la expedición de Balmis y por qué necesitaba niños.", sol: "Llevó la vacuna de la viruela a América y Asia (1803). Sin forma de conservarla, la mantuvo viva vacunando a los niños de dos en dos, de brazo a brazo, durante el viaje." },
    { nivel: "medio", q: "Ordena los pasos de la respuesta específica: los linfocitos B fabrican anticuerpos; un macrófago presenta el antígeno; quedan linfocitos de memoria; un linfocito T colaborador se activa.", sol: "Macrófago presenta el antígeno, linfocito T colaborador se activa, linfocitos B fabrican anticuerpos, quedan linfocitos de memoria." },
    { nivel: "medio", q: "¿Por qué el VIH afecta a todo el sistema inmunitario si solo ataca a un tipo de célula?", sol: "Porque destruye los linfocitos T colaboradores, que coordinan la respuesta: sin ellos, los linfocitos B y los citotóxicos no se activan bien." },
    { nivel: "medio", q: "Describe las tres fases de un ensayo clínico de una vacuna.", sol: "Fase 1: decenas de voluntarios, seguridad. Fase 2: cientos, dosis y respuesta. Fase 3: miles, comparando con placebo para medir la eficacia." },
    { nivel: "medio", q: "¿Qué grupo sanguíneo se considera donante universal de glóbulos rojos? ¿Por qué?", sol: "El 0 (negativo), porque sus glóbulos rojos no tienen antígenos A ni B, así que los anticuerpos del receptor no los atacan." },
    { nivel: "medio", q: "¿Por qué una persona trasplantada debe tomar inmunosupresores?", sol: "Porque su sistema inmunitario reconoce el órgano donado como extraño y lo atacaría (rechazo); los inmunosupresores frenan esa respuesta." },
    { nivel: "medio", q: "¿Por qué la cobertura necesaria para la inmunidad de grupo es mayor en el sarampión que en la polio?", sol: "Porque el sarampión es más contagioso: cada enfermo contagia a muchas más personas, así que hace falta proteger a más gente para que deje de circular." },
    { nivel: "avanzado", q: "Explica por qué se necesita una vacuna nueva de la gripe cada año, pero la del sarampión dura toda la vida.", sol: "El virus de la gripe cambia sus antígenos cada temporada y los linfocitos de memoria ya no lo reconocen. El virus del sarampión apenas cambia, así que la memoria sigue sirviendo." },
    { nivel: "avanzado", q: "Interpreta: en un ensayo, 20 de 20.000 vacunados y 200 de 20.000 con placebo enferman. Calcula la eficacia y explica para qué sirve el grupo placebo.", sol: "Eficacia = (200 − 20) / 200 · 100 = 90 %. El grupo placebo sirve de control: permite saber cuántos enfermarían sin vacuna en las mismas condiciones." },
    { nivel: "avanzado", q: "Una madre del grupo 0 y un padre del grupo AB tienen un hijo. ¿Puede el hijo donarle sangre a su madre?", sol: "El hijo será A o B (recibe 0 de la madre y A o B del padre). La madre tiene anticuerpos anti-A y anti-B, así que atacaría esos glóbulos rojos: no puede donarle." },
    { nivel: "avanzado", q: "Analiza el caso del fraude de 1998 sobre la triple vírica: ¿qué consecuencias tuvo y cómo se detectó?", sol: "Bajó la vacunación y hubo brotes de sarampión. Se detectó porque otros científicos no lograron repetir los resultados y una investigación demostró que los datos estaban manipulados; la ciencia se corrige comprobando." },
    { nivel: "avanzado", q: "Dibuja una gráfica con la concentración de anticuerpos tras una vacuna y una dosis de recuerdo meses después. Explica la diferencia.", sol: "Tras la primera dosis sube poco y tarde y luego baja. Tras el recuerdo, los linfocitos de memoria producen una subida rápida y mucho más alta, que se mantiene más tiempo." },
    { nivel: "avanzado", q: "¿Por qué crees que han aumentado las alergias en los países ricos? Propón una hipótesis.", sol: "Hipótesis de la higiene: al crecer con menos contacto con microbios, animales y naturaleza, el sistema inmunitario está menos entrenado y reacciona contra sustancias inofensivas. También influyen la contaminación y los cambios en la dieta." },
    { nivel: "avanzado", q: "Diseña una simulación para comprobar la inmunidad de grupo con dados o una hoja de cálculo.", sol: "Representar una población en una cuadrícula, marcar un porcentaje como vacunados y un primer enfermo; en cada ronda, cada enfermo contagia a sus vecinos no vacunados. Repetir con 50 %, 80 % y 95 % y comparar cuántos enferman." },
    { nivel: "avanzado", q: "Relaciona el sistema inmunitario con el cáncer: ¿cómo nos protege y en qué se basa la inmunoterapia?", sol: "Los linfocitos T citotóxicos reconocen y destruyen células cancerosas. Algunos tumores logran esconderse; la inmunoterapia usa medicamentos que «desenmascaran» el tumor o activan los linfocitos para que lo ataquen." },
    { nivel: "avanzado", q: "¿Por qué en las vacunas de ARN mensajero no hace falta el virus? Explica cómo generan inmunidad.", sol: "El ARN lleva las instrucciones para que nuestras células fabriquen una proteína del virus (el antígeno). El sistema inmunitario la reconoce, fabrica anticuerpos y linfocitos de memoria. El ARN se destruye en pocos días y no entra en el ADN." },
  ],
  quiz: [
    { q: "Una molécula extraña que provoca una respuesta inmunitaria es un…", o: ["anticuerpo", "antígeno", "linfocito", "fagocito"], a: 1, e: "El anticuerpo es lo que la reconoce." },
    { q: "La lisozima de las lágrimas…", o: ["fabrica anticuerpos", "transporta oxígeno", "destruye bacterias", "es un antígeno"], a: 2, e: "Es una barrera química." },
    { q: "Los glóbulos blancos nacen en…", o: ["la médula ósea", "el timo", "el corazón", "el hígado"], a: 0, e: "A partir de células madre." },
    { q: "El pus está formado por…", o: ["anticuerpos", "glóbulos rojos", "plasma", "fagocitos muertos y bacterias"], a: 3, e: "Restos de la batalla." },
    { q: "Los anticuerpos los fabrican los…", o: ["linfocitos T", "linfocitos B", "macrófagos", "glóbulos rojos"], a: 1, e: "Convertidos en células plasmáticas." },
    { q: "La respuesta secundaria es…", o: ["más lenta", "igual que la primaria", "más rápida e intensa", "inespecífica"], a: 2, e: "Gracias a la memoria." },
    { q: "El VIH destruye sobre todo…", o: ["los linfocitos T colaboradores", "los glóbulos rojos", "las plaquetas", "la piel"], a: 0, e: "Los coordinadores." },
    { q: "La primera vacuna la desarrolló…", o: ["Pasteur", "Fleming", "Balmis", "Jenner"], a: 3, e: "Contra la viruela, en 1796." },
    { q: "La expedición de Balmis llevó la vacuna de la viruela…", o: ["en neveras", "de brazo a brazo en niños", "en polvo", "en vacas"], a: 1, e: "Isabel Zendal los cuidaba." },
    { q: "La vacuna del tétanos es de tipo…", o: ["ARN mensajero", "atenuada", "toxoide", "vector viral"], a: 2, e: "Toxina inactivada." },
    { q: "La inmunidad de grupo protege sobre todo a…", o: ["quienes no pueden vacunarse", "los vacunados", "los médicos", "los animales"], a: 0, e: "El patógeno deja de circular." },
    { q: "Recibir anticuerpos por la leche materna es inmunidad…", o: ["activa natural", "activa artificial", "pasiva artificial", "pasiva natural"], a: 3, e: "Inmediata y breve." },
    { q: "En la fase 3 de un ensayo clínico…", o: ["se prueba solo en animales", "se compara con placebo en miles de personas", "se prueba en 10 personas", "no hay control"], a: 1, e: "Mide la eficacia." },
    { q: "Una persona del grupo B tiene anticuerpos…", o: ["anti-B", "ninguno", "anti-A", "anti-A y anti-B"], a: 2, e: "Contra lo que no tiene." },
    { q: "El grupo sanguíneo sin antígenos A ni B es el…", o: ["0", "A", "AB", "B"], a: 0, e: "Donante universal de glóbulos rojos." },
    { q: "Los inmunosupresores se dan a…", o: ["los alérgicos al polen", "los vacunados", "los niños sanos", "las personas trasplantadas"], a: 3, e: "Para evitar el rechazo." },
    { q: "En una enfermedad autoinmune el sistema inmunitario…", o: ["no funciona", "ataca a células propias", "reacciona al polen", "fabrica glóbulos rojos"], a: 1, e: "Como la diabetes tipo 1." },
    { q: "La anafilaxia se trata con…", o: ["antibióticos", "vacunas", "adrenalina", "suero antitetánico"], a: 2, e: "Es una urgencia." },
    { q: "Necesitamos vacuna de la gripe cada año porque el virus…", o: ["cambia sus antígenos", "es una bacteria", "no deja memoria nunca", "es muy grande"], a: 0, e: "La memoria ya no lo reconoce." },
    { q: "España es líder mundial en…", o: ["alergias", "fabricar vacunas", "casos de sarampión", "donación y trasplante de órganos"], a: 3, e: "Gracias a la ONT." },
  ],
  examen: [
    { q: "La inflamación es parte de la respuesta…", o: ["específica", "inespecífica", "de memoria", "pasiva"], a: 1, e: "Igual para todos los invasores." },
    { q: "Cada anticuerpo reconoce…", o: ["todos los microbios", "solo bacterias", "un antígeno concreto", "células propias"], a: 2, e: "Como una llave y su cerradura." },
    { q: "Una vacuna genera…", o: ["linfocitos de memoria", "inmunidad pasiva", "antibióticos", "una enfermedad grave"], a: 0, e: "Sin pasar la enfermedad." },
    { q: "La única enfermedad humana erradicada es…", o: ["la polio", "el sarampión", "la gripe", "la viruela"], a: 3, e: "En 1980." },
    { q: "Un suero antiofídico proporciona inmunidad…", o: ["activa natural", "activa artificial", "pasiva artificial", "pasiva natural"], a: 2, e: "Anticuerpos ya fabricados." },
    { q: "Los linfocitos T citotóxicos…", o: ["fabrican anticuerpos", "destruyen células infectadas", "transportan oxígeno", "forman moco"], a: 1, e: "Y también células cancerosas." },
    { q: "Una persona del grupo AB puede recibir glóbulos rojos de…", o: ["solo AB", "solo 0", "ninguno", "A, B, AB y 0"], a: 3, e: "No tiene anticuerpos anti-A ni anti-B." },
    { q: "Una alergia es…", o: ["una respuesta exagerada a algo inofensivo", "una infección", "una inmunodeficiencia", "un tipo de vacuna"], a: 0, e: "Al polen, los ácaros…" },
  ],
  feynman: [...["Cuáles son las tres líneas de defensa del cuerpo", "Qué son los antígenos y los anticuerpos y cómo se relacionan", "Cómo funciona una vacuna y qué es la inmunidad de grupo"], "Cómo actúan juntos macrófagos y linfocitos en una infección", "Por qué no se puede recibir sangre de cualquier grupo"],
  mapa: mapa("INMUNIDAD", "var(--eso)", [
    ["Barreras", "piel · mucosas · ácido", "#c98a5a"],
    ["Inespecífica", "inflamación · fagocitosis", "var(--leaf)"],
    ["Específica", "linfocitos B y T · anticuerpos", "var(--pen)"],
    ["Vacunas", "memoria · inmunidad de grupo", "var(--red)"],
  ], 280),
  tarjetas: [
    ...[
    ["Antígeno", "Molécula extraña que provoca una respuesta inmunitaria."],
    ["Anticuerpo", "Proteína en forma de Y que reconoce un antígeno concreto."],
    ["Fagocitosis", "Un glóbulo blanco engulle y digiere un microbio."],
    ["Inflamación", "Enrojecimiento, calor, hinchazón y dolor en la zona infectada."],
    ["Linfocitos de memoria", "Recuerdan un antígeno y permiten una respuesta rápida."],
    ["Vacuna", "Antígeno inofensivo que genera memoria sin pasar la enfermedad."],
    ["Inmunidad de grupo", "Si casi todos están inmunizados, el patógeno deja de circular."],
    ["Suero", "Anticuerpos ya fabricados: inmunidad pasiva, inmediata y breve."],
  ],
    ["Célula plasmática", "Linfocito B activado que fabrica miles de anticuerpos."],
    ["Ensayo clínico", "Estudio en voluntarios que comprueba la seguridad y eficacia de una vacuna."],
    ["Sistema ABO", "Grupos sanguíneos según los antígenos A y B de los glóbulos rojos."],
    ["Rechazo", "Ataque del sistema inmunitario contra un órgano trasplantado."],
  ],
  glosario: [
    ["Sistema inmunitario", "Órganos, células y moléculas que defienden el cuerpo."],
    ["Antígeno", "Molécula reconocida como extraña que provoca una respuesta."],
    ["Anticuerpo", "Proteína en forma de Y que se une a un antígeno concreto."],
    ["Barrera defensiva", "Obstáculo que impide la entrada de microbios: piel, mucosas…"],
    ["Inflamación", "Reacción local con enrojecimiento, calor, hinchazón y dolor."],
    ["Fagocito", "Glóbulo blanco que engulle microbios."],
    ["Linfocito B", "Glóbulo blanco que fabrica anticuerpos."],
    ["Linfocito T", "Glóbulo blanco que coordina la respuesta o destruye células infectadas."],
    ["Memoria inmunitaria", "Capacidad de responder más rápido a un antígeno ya conocido."],
    ["Vacuna", "Preparado con antígenos que genera inmunidad sin enfermar."],
    ["Dosis de recuerdo", "Nueva dosis que refuerza la memoria inmunitaria."],
    ["Inmunidad de grupo", "Protección colectiva cuando la mayoría está inmunizada."],
    ["Suero", "Preparado con anticuerpos ya fabricados."],
    ["Placebo", "Sustancia sin efecto que se da al grupo de control."],
    ["Grupo sanguíneo", "Tipo de sangre según los antígenos de los glóbulos rojos."],
    ["Inmunosupresor", "Medicamento que frena el sistema inmunitario."],
    ["Alergia", "Respuesta exagerada a una sustancia inofensiva."],
    ["Inmunodeficiencia", "Debilidad del sistema inmunitario."],
  ],
  situacion: {
    titulo: "Cazadores de bulos sobre vacunas",
    reto: "Circulan por redes mensajes falsos sobre vacunas. Vuestro grupo se convertirá en un equipo de verificación que explicará con rigor cómo funcionan y por qué la vacunación nos protege a todos.",
    pasos: [
      "Recoged tres mensajes sobre vacunas que circulen en redes o en la prensa.",
      "Para cada uno, buscad la información en fuentes oficiales (Ministerio de Sanidad, Asociación Española de Pediatría, OMS) y decidid si es cierto, falso o engañoso.",
      "Haced una simulación de inmunidad de grupo con una hoja de cálculo o una cuadrícula con distintos porcentajes de vacunación.",
      "Representad en una gráfica cuántas personas enferman en cada caso.",
      "Preparad una infografía o un vídeo corto que desmonte un bulo y explique la inmunidad de grupo.",
    ],
    producto: "Informe de verificación de tres mensajes, gráfica de la simulación e infografía o vídeo divulgativo.",
    evaluacion: [
      "Uso de fuentes fiables y citadas correctamente.",
      "Explicación correcta de antígenos, anticuerpos, memoria e inmunidad de grupo.",
      "Rigor en la simulación y en la interpretación de la gráfica.",
      "Claridad y respeto en el mensaje final.",
    ],
  },
  familias: ["Revisad juntos la cartilla de vacunación y comprobad qué vacunas tocan en la adolescencia.", "Hablad sobre bulos de vacunas y buscad la información en fuentes oficiales.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Salud y enfermedad: el sistema inmunitario, barreras, respuesta inespecífica y específica, memoria inmunitaria, vacunas y su historia, ensayos clínicos, inmunidad de grupo, grupos sanguíneos, trasplantes y alteraciones inmunitarias (RD 217/2022, Biología y Geología 1º a 3º). En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Juego de rol: antígenos, fagocitos, linfocitos B y T en el patio.",
      "Análisis crítico de bulos sobre vacunas con fuentes oficiales.",
      "Simulación de inmunidad de grupo con una hoja de cálculo y distintos porcentajes de vacunación.",
      "Lectura sobre la expedición de Balmis e Isabel Zendal y debate sobre la ética de la época.",
      "Problemas de compatibilidad de grupos sanguíneos con tarjetas de donante y receptor.",
    ],
  },
  fuentes: [...[RD, wiki("Sistema inmunitario", "Sistema_inmunitario"), wiki("Vacuna", "Vacuna")], { t: "Organización Nacional de Trasplantes", url: "https://www.ont.es/" }],
  revisado: "2026-11-13",
};
