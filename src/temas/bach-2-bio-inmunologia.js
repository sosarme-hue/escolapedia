// Biología 2º Bachillerato · Inmunología (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, arbol } = require("./_bach2-bio");

// Anticuerpo.
const igSVG = marco("Estructura de un anticuerpo IgG: forma de Y con dos cadenas pesadas y dos ligeras unidas por puentes disulfuro; las regiones variables de los extremos forman dos sitios de unión al antígeno", `
  <path d="M120 170 V 96 L 70 40" stroke="var(--pen)" stroke-width="14" stroke-linecap="round" fill="none"/>
  <path d="M140 170 V 96 L 190 40" stroke="var(--pen)" stroke-width="14" stroke-linecap="round" fill="none"/>
  <path d="M104 96 L 60 50" stroke="var(--leaf)" stroke-width="10" stroke-linecap="round"/><path d="M156 96 L 200 50" stroke="var(--leaf)" stroke-width="10" stroke-linecap="round"/>
  <circle cx="64" cy="34" r="10" fill="var(--red)" fill-opacity=".85"/><circle cx="196" cy="34" r="10" fill="var(--red)" fill-opacity=".85"/>
  <path d="M120 110 H 140 M120 120 H 140" stroke="var(--sun)" stroke-width="2.4"/>
  ${T(130, 18, "sitios de unión al antígeno", { fs: 9.5, b: true, c: "var(--red)" })}
  ${T(40, 92, "cadena ligera", { fs: 9.5, b: true, c: "var(--leaf)" })}${T(212, 128, "cadena pesada", { fs: 9.5, b: true, c: "var(--pen)" })}
  ${T(212, 152, "región constante", { fs: 9, c: "var(--muted)" })}${T(70, 140, "puentes S–S", { fs: 9, b: true, c: "#b45309" })}`);

// Respuesta primaria y secundaria.
const memSVG = marco("Respuesta primaria y secundaria: tras el primer contacto con un antígeno la producción de anticuerpos es lenta y baja; en el segundo contacto la respuesta es más rápida, intensa y duradera gracias a la memoria", `
  <path d="M24 150 H 250 M24 150 V 20" stroke="var(--muted)" stroke-width="2"/>
  <path d="M30 150 C 60 150, 70 118, 90 112 S 110 146, 140 148" fill="none" stroke="var(--pen)" stroke-width="3"/>
  <path d="M140 148 C 150 148, 156 40, 180 32 S 220 70, 248 88" fill="none" stroke="var(--red)" stroke-width="3"/>
  <path d="M32 156 V 164 M142 156 V 164" stroke="var(--ink)" stroke-width="2"/>${T(32, 176, "1.ª", { fs: 9, b: true })}${T(142, 176, "2.ª exposición", { fs: 9, b: true })}
  ${T(86, 100, "primaria", { fs: 10, b: true, c: "var(--pen)" })}${T(214, 30, "secundaria", { fs: 10, b: true, c: "var(--red)" })}
  ${T(22, 14, "anticuerpos", { fs: 9, c: "var(--muted)", a: "start" })}${T(232, 166, "tiempo", { fs: 9, c: "var(--muted)" })}`);

module.exports = tema({
  titulo: "Inmunología",
  minutos: 130,
  secciones: [4, 4, 4],
  objetivos: [
    "Explicar el concepto de inmunidad y diferenciar las defensas inespecíficas y específicas",
    "Describir las barreras externas y la respuesta inflamatoria",
    "Explicar qué son los antígenos y la estructura y funciones de los anticuerpos",
    "Describir la respuesta humoral y celular, y el papel de los linfocitos B y T",
    "Diferenciar los tipos de inmunidad y explicar el fundamento de las vacunas y los sueros",
    "Analizar las alteraciones del sistema inmunitario: alergias, autoinmunidad, inmunodeficiencias y rechazo de trasplantes",
  ],
  claves: ["inmunidad", "barreras", "inflamación", "fagocito", "antígeno", "anticuerpo", "inmunoglobulina", "linfocito B", "linfocito T", "célula plasmática", "memoria", "complemento", "vacuna", "suero", "alergia", "autoinmunidad", "sida"],
  pregunta: {
    texto: "¿Por qué el sarampión solo se pasa una vez en la vida, y la gripe se puede pasar cada año?",
    respuesta: "Porque el sistema inmunitario tiene <mark>memoria</mark>. Tras la primera infección por sarampión quedan linfocitos de memoria que reconocen al virus durante toda la vida y lo eliminan antes de que cause síntomas. El virus de la gripe, en cambio, muta muy rápido y cambia sus proteínas de superficie, los <b>antígenos</b> que reconocen nuestros anticuerpos: cada año circula una variante que la memoria no reconoce bien. Por eso la vacuna de la gripe se actualiza cada temporada, y la del sarampión se pone dos veces en la infancia y protege de por vida.",
  },
  lectura: {
    titulo: "Jenner, las vacas y la viruela",
    html: `<p>La viruela fue durante siglos una de las enfermedades más temidas: mataba a casi un tercio de los infectados y dejaba marcados a los supervivientes. En 1796, el médico rural inglés Edward Jenner se fijó en un dicho popular: las ordeñadoras que se contagiaban de la viruela de las vacas, una enfermedad leve, no enfermaban luego de la viruela humana. Para comprobarlo, tomó pus de una pústula de la mano de una ordeñadora, Sarah Nelmes, y lo introdujo en el brazo de James Phipps, un niño de ocho años. Semanas después le inoculó viruela humana, y el niño no enfermó. Hoy un experimento así sería inaceptable, pero había nacido la vacunación, palabra que viene de <i>vacca</i>.</p><p>En 1803, la Real Expedición Filantrópica de la Vacuna, dirigida por Francisco Javier Balmis, llevó la vacuna a América y Filipinas usando a 22 niños huérfanos que se inoculaban de dos en dos durante el viaje, cuidados por la enfermera Isabel Zendal. Casi dos siglos después, en 1980, la OMS declaró la viruela erradicada de la Tierra, la primera enfermedad vencida por la humanidad. En este tema estudiarás cómo funciona el sistema inmunitario, por qué las vacunas protegen y qué ocurre cuando las defensas fallan o se equivocan.</p>`,
  },
  bloques: [
    { h: "El sistema inmunitario", p: [
      "La <mark>inmunidad</mark> es la capacidad de un organismo para defenderse de los agentes extraños, sean microorganismos patógenos, toxinas o células propias alteradas, como las tumorales. La <b>inmunología</b> es la ciencia que la estudia. Los mecanismos de defensa se organizan en dos grandes tipos. Las <b>defensas inespecíficas</b> o <b>innatas</b> actúan contra cualquier agente extraño, siempre de la misma forma y de manera inmediata: son las barreras externas y la respuesta inflamatoria. Las <b>defensas específicas</b> o <b>adaptativas</b> reconocen a cada agente concreto, tardan días en activarse la primera vez, y tienen memoria, de modo que responden mejor en los siguientes contactos.",
      "El <b>sistema inmunitario</b> está formado por órganos, células y moléculas. Los <b>órganos linfoides primarios</b> son aquellos donde se forman y maduran los linfocitos: la <b>médula ósea roja</b>, donde se originan todas las células sanguíneas y maduran los linfocitos B, y el <b>timo</b>, donde maduran los linfocitos T. Los <b>órganos linfoides secundarios</b>, donde los linfocitos se encuentran con los antígenos, son los <b>ganglios linfáticos</b>, el <b>bazo</b>, las amígdalas, el apéndice y el tejido linfoide asociado a las mucosas. Las células son los <b>leucocitos</b> o glóbulos blancos, y las moléculas, los anticuerpos, el complemento y las citoquinas, que comunican a unas células con otras.",
    ], svg: L5.compara("Defensas del organismo", ["Inespecíficas", ["innatas", "cualquier agente", "inmediatas", "sin memoria"]], ["Específicas", ["adaptativas", "contra un antígeno", "tardan días", "con memoria"]], "var(--sun)", "var(--pen)"), v: ["inm-a", "Cómo te salva la vida tu sistema inmune"] },
    { h: "Barreras externas", p: [
      "La primera línea de defensa son las <mark>barreras</mark> que impiden la entrada de los microorganismos. Las <b>barreras físicas</b> o mecánicas son la <b>piel</b>, con su capa córnea de queratina, difícil de atravesar mientras esté intacta, y las <b>mucosas</b> que tapizan las vías respiratorias, digestivas, urinarias y genitales, protegidas por <b>moco</b> que atrapa partículas. En las vías respiratorias, los <b>cilios</b> arrastran el moco hacia la garganta, y la tos y los estornudos lo expulsan. El flujo de lágrimas, saliva y orina también arrastra los microorganismos.",
      "Las <b>barreras químicas</b> son sustancias que destruyen o inhiben a los microorganismos: la <b>lisozima</b> de las lágrimas, la saliva y el moco, que rompe la pared de las bacterias; el ácido clorhídrico del estómago, con un pH de 1 a 2; los ácidos grasos y el pH ácido del sudor y de la vagina; y las defensinas, pequeños péptidos antimicrobianos. Las <b>barreras biológicas</b> son la <b>microbiota</b> que vive en la piel, el intestino y la vagina, y que compite con los patógenos por el espacio y los nutrientes. Cuando un tratamiento con antibióticos la destruye, pueden proliferar microorganismos dañinos, como algunos hongos.",
    ], svg: L6.tabla("Barreras externas", ["Tipo", "Ejemplos"], [["Físicas", "piel, mucosas, moco, cilios"], ["Químicas", "lisozima, HCl, sudor ácido"], ["Biológicas", "microbiota"], ["Mecánicas", "tos, lágrimas, orina"]]) },
    { h: "La respuesta inflamatoria y la fagocitosis", p: [
      "Cuando un patógeno atraviesa las barreras, por ejemplo en una herida, se pone en marcha la <mark>respuesta inflamatoria</mark>. Las células dañadas y los <b>mastocitos</b> liberan sustancias como la <b>histamina</b>, que dilatan los vasos sanguíneos y aumentan su permeabilidad. Por eso la zona inflamada presenta los cuatro signos clásicos: <b>enrojecimiento</b> y <b>calor</b>, por el aumento del riego; <b>hinchazón</b>, por la salida de líquido; y <b>dolor</b>, por la presión sobre las terminaciones nerviosas. Al salir líquido de los vasos llegan también moléculas defensivas y células. A veces se produce <b>fiebre</b>, que dificulta la multiplicación de los microorganismos.",
      "Atraídos por señales químicas, los <b>fagocitos</b> salen de la sangre atravesando las paredes de los capilares (diapédesis) y se dirigen hacia el foco de infección. Los primeros en llegar son los <b>neutrófilos</b>, y después los <b>monocitos</b>, que se transforman en <b>macrófagos</b>. Ambos engloban a los microorganismos por <mark>fagocitosis</mark> y los digieren con las enzimas de sus lisosomas. El pus está formado por neutrófilos muertos y restos de bacterias. Otras células de la inmunidad innata son las <b>células asesinas naturales</b> (NK), que destruyen células infectadas por virus y células tumorales, y los <b>eosinófilos</b>, que atacan a los parásitos. Las células infectadas por virus liberan además <b>interferón</b>, que protege a las células vecinas.",
    ], svg: L5.pasos("La respuesta inflamatoria", ["Daño: mastocitos liberan histamina", "Vasodilatación: rojo, calor, hinchazón", "Llegan neutrófilos y macrófagos", "Fagocitosis de los microorganismos"], "var(--red)"), v: ["inm-b", "El sistema inmunitario explicado"] },
    { h: "El sistema del complemento y las células de la inmunidad", p: [
      "El <mark>sistema del complemento</mark> es un conjunto de unas treinta proteínas del plasma, fabricadas en el hígado, que se activan en cascada al contacto con un microorganismo o con complejos antígeno-anticuerpo. Una vez activado, tiene tres efectos: recubre a los microorganismos y facilita su fagocitosis (<b>opsonización</b>); atrae a los fagocitos e intensifica la inflamación; y forma un <b>complejo de ataque a la membrana</b>, que perfora la membrana de las bacterias y las hace estallar. El complemento pertenece a la inmunidad innata, pero también colabora con la adaptativa, porque los anticuerpos lo activan.",
      "Todas las células del sistema inmunitario son <b>leucocitos</b>, que proceden de células madre de la médula ósea. Los <b>granulocitos</b> tienen gránulos en el citoplasma: los neutrófilos (los más abundantes, fagocitos), los eosinófilos (parásitos y alergias) y los basófilos (que, como los mastocitos de los tejidos, liberan histamina). Los <b>monocitos</b> se transforman en macrófagos en los tejidos. Las <b>células dendríticas</b>, con largas prolongaciones, capturan antígenos en la piel y las mucosas y los llevan a los ganglios para presentarlos a los linfocitos. Los <b>linfocitos</b> (B, T y NK) son los responsables de la respuesta específica. En un análisis de sangre, el número de leucocitos sube en las infecciones.",
    ], svg: arbol("Leucocitos", "LEUCOCITOS", [["Granulocitos", "neutrófilos, eosinóf."], ["Monocitos", "→ macrófagos"], ["Linfocitos", "B, T y NK"]], "var(--pen)") },
    { h: "Antígenos y anticuerpos", p: [
      "Un <mark>antígeno</mark> es cualquier molécula capaz de desencadenar una respuesta inmunitaria específica. Suelen ser proteínas o polisacáridos de gran tamaño, de la superficie de virus, bacterias, pólenes, células de otra persona o toxinas. Los anticuerpos no reconocen el antígeno entero, sino pequeñas regiones de su superficie llamadas <b>determinantes antigénicos</b> o epítopos; un antígeno puede tener varios. El sistema inmunitario aprende a distinguir lo propio de lo ajeno durante el desarrollo, y normalmente no reacciona contra las moléculas del propio cuerpo: es la <b>tolerancia</b>. Las células del cuerpo tienen en su membrana unas proteínas, las del <b>complejo principal de histocompatibilidad</b> (MHC o HLA en humanos), que actúan como un «carnet de identidad» propio de cada persona.",
      "Los <mark>anticuerpos</mark> o <b>inmunoglobulinas</b> (Ig) son proteínas fabricadas por los linfocitos B, que reconocen y se unen de forma específica a un antígeno. Tienen forma de Y y están formados por cuatro cadenas polipeptídicas, dos <b>pesadas</b> y dos <b>ligeras</b>, unidas por puentes disulfuro. Cada cadena tiene una <b>región constante</b>, igual en todos los anticuerpos de una clase, y una <b>región variable</b> en el extremo, distinta en cada anticuerpo, que forma el <b>sitio de unión al antígeno</b>. Cada anticuerpo tiene dos sitios iguales y se une a su antígeno como una llave a su cerradura. El ser humano puede fabricar millones de anticuerpos distintos gracias a la recombinación de los segmentos de sus genes durante la maduración de los linfocitos.",
    ], svg: igSVG, v: ["inm-d", "Tipos de anticuerpos"] },
    { h: "Clases y acciones de los anticuerpos", p: [
      "Según su región constante, hay cinco clases de inmunoglobulinas. La <b>IgG</b> es la más abundante en la sangre (75 %), es la principal de la respuesta secundaria y la única que atraviesa la placenta, por lo que protege al feto. La <b>IgM</b> es un pentámero, la primera que se produce en una infección (respuesta primaria) y muy eficaz activando el complemento. La <b>IgA</b> está en las secreciones (saliva, lágrimas, moco y leche materna), donde protege las mucosas; el bebé la recibe con la lactancia. La <b>IgE</b> se une a los mastocitos y los basófilos y participa en las <b>alergias</b> y la defensa contra parásitos. La <b>IgD</b> está en la membrana de los linfocitos B y actúa como receptor.",
      "La unión del anticuerpo al antígeno se llama <b>reacción antígeno-anticuerpo</b>, y puede tener varios efectos. En la <b>neutralización</b>, el anticuerpo bloquea los sitios con los que un virus o una toxina se unen a las células. En la <b>aglutinación</b>, como cada anticuerpo tiene dos sitios de unión, une varias células (bacterias, glóbulos rojos) formando grumos; en la <b>precipitación</b>, hace lo mismo con antígenos solubles. En la <b>opsonización</b>, los anticuerpos recubren al microorganismo y facilitan su fagocitosis. Y en la <b>activación del complemento</b>, provocan la lisis de las bacterias. Los anticuerpos no destruyen por sí mismos al microorganismo: lo marcan para que otros mecanismos lo eliminen. Las pruebas de grupo sanguíneo se basan en la aglutinación.",
    ], svg: L6.tabla("Clases de inmunoglobulinas", ["Clase", "Dónde", "Función"], [["IgG", "sangre, placenta", "respuesta secundaria"], ["IgM", "sangre (pentámero)", "respuesta primaria"], ["IgA", "secreciones, leche", "mucosas"], ["IgE", "mastocitos", "alergias, parásitos"]]) },
    { h: "Los linfocitos y la selección clonal", p: [
      "Los <mark>linfocitos</mark> son las células de la respuesta específica. Se forman en la médula ósea y maduran en ella (<b>linfocitos B</b>) o en el timo (<b>linfocitos T</b>). Durante la maduración, cada linfocito adquiere en su membrana un tipo de receptor distinto, capaz de reconocer un solo antígeno. Así se forma un repertorio de millones de linfocitos diferentes, antes incluso de haber entrado en contacto con ningún antígeno. Los que reconocen moléculas propias se eliminan, lo que garantiza la tolerancia. Los linfocitos maduros circulan por la sangre y la linfa y se concentran en los órganos linfoides secundarios.",
      "Cuando un antígeno entra en el cuerpo, solo activa a los pocos linfocitos cuyos receptores encajan con él. Estos se multiplican por mitosis y forman un <b>clon</b> de células idénticas: es la <mark>selección clonal</mark>. Parte del clon se diferencia en <b>células efectoras</b>, que eliminan el antígeno, y parte en <b>células de memoria</b>, de vida muy larga, que quedan en el organismo y permiten una respuesta más rápida en futuros contactos. Para que los linfocitos T reconozcan un antígeno, este debe estar «presentado» por otra célula: las <b>células presentadoras de antígeno</b>, como los macrófagos y las células dendríticas, fagocitan el microorganismo, lo trocean y exponen sus fragmentos en las moléculas MHC de su membrana.",
    ], svg: L5.pasos("Selección clonal", ["El antígeno activa el linfocito con su receptor", "El linfocito prolifera: clon", "Células efectoras eliminan el antígeno", "Células de memoria persisten años"], "var(--pen)"), v: ["inm-f", "Linfocitos T"] },
    { h: "Respuesta humoral y celular", p: [
      "La <mark>respuesta humoral</mark> está mediada por los anticuerpos, que circulan por los «humores» del cuerpo, la sangre y la linfa. Es eficaz contra bacterias, toxinas y virus fuera de las células. Un <b>linfocito B</b> reconoce el antígeno con su receptor de membrana y, con la ayuda de un linfocito T colaborador, se activa, prolifera y se diferencia en <b>células plasmáticas</b>, auténticas fábricas de anticuerpos (con un retículo rugoso muy desarrollado), que liberan miles de anticuerpos por segundo, y en <b>linfocitos B de memoria</b>.",
      "La <mark>respuesta celular</mark> está mediada directamente por células, los linfocitos T, y es eficaz contra las células infectadas por virus, las células tumorales y los trasplantes. Los <b>linfocitos T colaboradores</b> (T helper o CD4) reconocen el antígeno presentado por una célula presentadora y liberan <b>citoquinas</b> (interleucinas), que activan a los linfocitos B, a los T citotóxicos y a los macrófagos: son el «director de orquesta» de la respuesta inmunitaria, y por eso su destrucción por el VIH es tan grave. Los <b>linfocitos T citotóxicos</b> (CD8) reconocen las células que presentan antígenos extraños en sus moléculas MHC, como las infectadas por virus, y las destruyen liberando perforinas, que abren poros en su membrana, y activando su apoptosis. Los linfocitos T reguladores frenan la respuesta cuando ya no es necesaria.",
    ], svg: L6.tabla("Respuesta específica", ["Respuesta", "Células", "Actúa contra"], [["Humoral", "linfocitos B → plasmáticas", "bacterias, toxinas"], ["Celular", "T citotóxicos", "infectadas, tumores"], ["Coordinación", "T colaboradores", "activan a B y T"]]), v: ["inm-c", "Inmunidad innata y adaptativa"] },
    { h: "Respuesta primaria y secundaria. Tipos de inmunidad", p: [
      "La primera vez que el organismo entra en contacto con un antígeno se produce la <mark>respuesta primaria</mark>: tarda varios días en desarrollarse (periodo de latencia), porque deben seleccionarse y multiplicarse los linfocitos, produce sobre todo IgM, alcanza niveles bajos de anticuerpos y decae pronto. Durante ese tiempo la persona puede enfermar. En un segundo contacto con el mismo antígeno, las células de memoria producen la <mark>respuesta secundaria</mark>, que es mucho más rápida, más intensa, más duradera y produce sobre todo IgG de mayor afinidad. A menudo elimina al patógeno antes de que aparezcan síntomas: la persona es <b>inmune</b>.",
      "La inmunidad específica puede adquirirse de distintas formas. Es <b>activa</b> si es el propio organismo el que fabrica los anticuerpos y la memoria, y <b>pasiva</b> si recibe anticuerpos ya fabricados por otro, de modo que la protección es inmediata pero dura poco, porque no se forman células de memoria. Cada una puede ser <b>natural</b> o <b>artificial</b>. La inmunidad activa natural se adquiere al pasar una infección; la activa artificial, con las <b>vacunas</b>. La pasiva natural es la que recibe el feto por la placenta (IgG) y el bebé con la leche materna (IgA); la pasiva artificial, con los <b>sueros</b> o inyecciones de anticuerpos.",
    ], svg: memSVG },
    { h: "Vacunas y sueros", p: [
      "Una <mark>vacuna</mark> es un preparado que contiene antígenos de un patógeno, pero sin capacidad de causar la enfermedad, y que induce una respuesta primaria con formación de células de memoria. Así, si la persona entra luego en contacto con el patógeno real, responde con una respuesta secundaria rápida y no enferma. Hay vacunas de microorganismos <b>atenuados</b> (vivos pero debilitados, como la del sarampión o la rubeola), <b>inactivados</b> o muertos (como la de la gripe inyectable), de <b>toxoides</b> (toxinas inactivadas, como la del tétanos y la difteria), de <b>subunidades</b> o fragmentos (como la de la hepatitis B, producida por ingeniería genética) y de <b>ARN mensajero</b>, que hace que nuestras propias células fabriquen una proteína del virus, como las de la COVID-19.",
      "Las vacunas son una de las mayores contribuciones a la salud de la historia: han erradicado la viruela, casi eliminado la polio y reducido enormemente la mortalidad infantil. Cuando una gran parte de la población está vacunada, el patógeno no puede propagarse y protege también a quienes no pueden vacunarse: es la <b>inmunidad de grupo</b>. Los <mark>sueros</mark>, en cambio, contienen anticuerpos ya fabricados, obtenidos de animales o personas inmunizadas, y se usan cuando se necesita una protección inmediata: tras una mordedura de serpiente, ante un riesgo de tétanos en alguien no vacunado o en la rabia. Su efecto es <b>curativo</b> y transitorio, mientras que el de las vacunas es <b>preventivo</b> y duradero.",
    ], svg: L5.compara("Vacuna y suero", ["Vacuna", ["antígenos", "inmunidad activa", "lenta, duradera", "preventiva"]], ["Suero", ["anticuerpos", "inmunidad pasiva", "inmediata, breve", "curativa"]], "var(--leaf)", "var(--pen)"), v: ["inm-e", "Cómo funcionan las vacunas"] },
    { h: "Alteraciones del sistema inmunitario", p: [
      "La <mark>hipersensibilidad</mark> es una respuesta inmunitaria exagerada frente a antígenos inofensivos. El tipo más común es la <b>alergia</b>, frente a sustancias del ambiente llamadas <b>alérgenos</b> (pólenes, ácaros, pelo de animales, algunos alimentos o fármacos). En el primer contacto, la persona fabrica IgE, que se une a los mastocitos (sensibilización). En los siguientes, el alérgeno se une a la IgE de los mastocitos y estos liberan histamina, que provoca estornudos, picor, lagrimeo, urticaria o asma. En casos graves se produce un <b>choque anafiláctico</b>, con caída de la tensión arterial y dificultad respiratoria, que puede ser mortal y se trata con adrenalina. Las alergias se tratan con antihistamínicos y, a veces, con inmunoterapia.",
      "En las <mark>enfermedades autoinmunes</mark>, el sistema inmunitario pierde la tolerancia y ataca a moléculas o células del propio cuerpo. Ejemplos son la diabetes tipo 1 (contra las células del páncreas que fabrican insulina), la esclerosis múltiple (contra la mielina de las neuronas), la artritis reumatoide (contra las articulaciones), la celiaquía o el lupus. Se tratan con inmunosupresores. Las <b>inmunodeficiencias</b> son fallos del sistema inmunitario: pueden ser <b>congénitas</b>, como la de los «niños burbuja», o <b>adquiridas</b>, como el <b>sida</b>, causado por el VIH, que destruye los linfocitos T colaboradores y deja al organismo expuesto a infecciones oportunistas y algunos cánceres.",
    ], svg: L6.tabla("Alteraciones inmunitarias", ["Tipo", "Qué ocurre", "Ejemplo"], [["Alergia", "respuesta a lo inofensivo", "polen, ácaros"], ["Autoinmunidad", "ataque a lo propio", "diabetes tipo 1"], ["Inmunodefic.", "defensas insuficientes", "sida"]]) },
    { h: "Trasplantes, cáncer e inmunoterapia", p: [
      "Un <b>trasplante</b> es la sustitución de un órgano o tejido dañado por otro sano. El principal problema es el <mark>rechazo</mark>: el sistema inmunitario del receptor reconoce como extrañas las moléculas MHC (HLA) del órgano donado y los linfocitos T citotóxicos lo atacan. Para evitarlo se busca un donante lo más compatible posible, por ejemplo un familiar, y el receptor toma <b>inmunosupresores</b>, que debilitan la respuesta, aunque aumentan el riesgo de infecciones. No hay rechazo en los autotrasplantes ni entre gemelos idénticos. En las <b>transfusiones</b> de sangre hay que respetar la compatibilidad de los grupos ABO y Rh, porque los anticuerpos del receptor aglutinarían los glóbulos rojos incompatibles. España es líder mundial en donación y trasplante de órganos.",
      "El sistema inmunitario también vigila la aparición de <b>células tumorales</b>, que expresan antígenos anormales, y las elimina mediante los linfocitos T citotóxicos y las células NK. Algunos tumores escapan a esta vigilancia, por ejemplo activando «frenos» de los linfocitos. La <mark>inmunoterapia</mark> contra el cáncer busca reforzar la respuesta: los <b>anticuerpos monoclonales</b>, producidos por un solo clon de células (hibridomas), se unen a un antígeno concreto de las células tumorales; los inhibidores de puntos de control liberan los frenos de los linfocitos; y en las terapias <b>CAR-T</b> se modifican genéticamente los linfocitos T del paciente para que reconozcan su tumor. Los anticuerpos monoclonales se usan también en diagnóstico, como en las pruebas de embarazo y los test rápidos de antígenos.",
    ], svg: L6.radial("Inmunología aplicada", "APLICACIONES", ["Vacunas", "Sueros", "Monoclonales", "CAR-T", "Trasplantes", "Diagnóstico"], "var(--red)") },
  ],
  figura: { titulo: "Inmunología", items: [["Inespecífica", "barreras", "inflamación", "fagocitosis"], ["Anticuerpos", "forma de Y", "IgG, IgM, IgA, IgE", "neutralizan, aglutinan"], ["Linfocitos", "B → plasmáticas", "T colaboradores", "T citotóxicos"], ["Aplicaciones", "vacunas y sueros", "trasplantes", "alergias, autoinmunidad"]] },
  video: ["inm-a", "Cómo te salva la vida tu sistema inmune"],
  ejemplos: [
    ["Clasifica la inmunidad: (a) tras pasar la varicela; (b) tras la vacuna del tétanos; (c) bebé que toma leche materna; (d) suero antiofídico.", ["(a) El propio cuerpo, sin intervención: activa natural.", "(b) Antígenos inyectados: activa artificial.", "(c) Recibe IgA: pasiva natural.", "(d) Recibe anticuerpos: pasiva artificial."], "Activa natural, activa artificial, pasiva natural y pasiva artificial."],
    ["Una persona recibe la segunda dosis de una vacuna. ¿Por qué se pone y qué respuesta produce?", ["La primera dosis induce una respuesta primaria y algo de memoria.", "La segunda activa las células de memoria."], "Una respuesta secundaria más intensa y duradera que refuerza la protección."],
    ["¿Puede una persona de grupo A recibir sangre de grupo B? Razona.", ["El grupo A tiene anticuerpos anti-B en el plasma.", "Los glóbulos B serían aglutinados."], "No: se produciría aglutinación y una reacción grave."],
    ["Explica por qué un paciente trasplantado debe tomar inmunosupresores toda la vida.", ["Sus linfocitos T reconocen el HLA del donante como extraño.", "Sin supresión, atacarían el órgano."], "Para evitar el rechazo, a costa de un mayor riesgo de infecciones."],
    ["Un análisis muestra IgM alta contra un virus y no IgG. ¿La infección es reciente o antigua?", ["IgM es propia de la respuesta primaria.", "La IgG aparece después y persiste."], "Infección reciente (primaria)."],
    ["Explica por qué el VIH debilita tanto la respuesta humoral como la celular.", ["Infecta y destruye los linfocitos T colaboradores (CD4).", "Estos activan a los linfocitos B y a los T citotóxicos."], "Sin T colaboradores ninguna de las dos respuestas se activa bien."],
  ],
  errores: [
    "Pensar que los antibióticos refuerzan las defensas: solo matan bacterias; el sistema inmunitario es otra cosa.",
    "Confundir antígeno y anticuerpo: el antígeno es la molécula extraña; el anticuerpo, la proteína que la reconoce.",
    "Creer que los anticuerpos destruyen directamente a los microorganismos: los marcan para la fagocitosis o el complemento.",
    "Decir que las vacunas curan: previenen; los sueros son los que dan protección inmediata.",
    "Pensar que la inmunidad pasiva deja memoria: no se forman células de memoria.",
    "Confundir alergia con autoinmunidad: la alergia es contra algo externo inofensivo; la autoinmunidad, contra lo propio.",
  ],
  ejercicios: {
    b: [
      ["Diferencia defensas inespecíficas y específicas.", "Inespecíficas: contra cualquier agente, inmediatas y sin memoria. Específicas: contra un antígeno, tardan y tienen memoria."],
      ["Cita los órganos linfoides primarios y su función.", "Médula ósea (forma células y madura linfocitos B) y timo (madura linfocitos T)."],
      ["Cita tres barreras externas.", "Piel, mucosas con moco y cilios, lisozima, ácido del estómago, microbiota."],
      ["¿Cuáles son los signos de la inflamación?", "Enrojecimiento, calor, hinchazón y dolor."],
      ["¿Qué células realizan la fagocitosis?", "Neutrófilos y macrófagos."],
      ["Define antígeno.", "Molécula capaz de desencadenar una respuesta inmunitaria específica."],
      ["Describe la estructura de un anticuerpo.", "Forma de Y; 2 cadenas pesadas y 2 ligeras con puentes disulfuro; regiones constantes y variables; 2 sitios de unión."],
      ["¿Qué clase de anticuerpo atraviesa la placenta?", "La IgG."],
      ["¿Dónde maduran los linfocitos B y los T?", "B en la médula ósea; T en el timo."],
      ["¿Qué son las células plasmáticas?", "Linfocitos B diferenciados que producen anticuerpos."],
      ["Diferencia vacuna y suero.", "Vacuna: antígenos, inmunidad activa, preventiva. Suero: anticuerpos, pasiva, inmediata y curativa."],
      ["Define alergia y pon un ejemplo.", "Respuesta exagerada a un antígeno inofensivo (alérgeno); polen."],
    ],
    m: [
      ["Explica la respuesta inflamatoria.", "Mastocitos liberan histamina; vasodilatación y permeabilidad; llegada de fagocitos que destruyen a los microorganismos."],
      ["Explica las funciones del complemento.", "Opsonización, quimiotaxis e inflamación y lisis mediante el complejo de ataque a la membrana."],
      ["Describe cuatro acciones de los anticuerpos.", "Neutralización, aglutinación, precipitación, opsonización y activación del complemento."],
      ["Explica la teoría de la selección clonal.", "Cada linfocito tiene un receptor; el antígeno activa solo al que encaja, que prolifera en un clon de efectoras y memoria."],
      ["Explica qué es una célula presentadora de antígeno.", "Macrófago o célula dendrítica que fagocita, trocea y expone fragmentos del antígeno en sus moléculas MHC para los linfocitos T."],
      ["Diferencia respuesta humoral y celular.", "Humoral: anticuerpos de células plasmáticas (bacterias, toxinas). Celular: linfocitos T citotóxicos (células infectadas, tumores)."],
      ["Explica el papel de los linfocitos T colaboradores.", "Reconocen antígenos presentados y liberan citoquinas que activan linfocitos B, T citotóxicos y macrófagos."],
      ["Compara la respuesta primaria y la secundaria.", "Primaria: lenta, débil, IgM. Secundaria: rápida, intensa, duradera, IgG, por las células de memoria."],
      ["Explica los tipos de vacunas.", "Atenuadas, inactivadas, toxoides, subunidades y de ARNm."],
      ["Explica qué es la inmunidad de grupo.", "Si gran parte de la población es inmune, el patógeno no circula y protege a los no vacunados."],
      ["Explica el mecanismo de una alergia.", "Sensibilización: IgE sobre mastocitos. Nuevo contacto: el alérgeno une IgE y se libera histamina."],
      ["¿Por qué el sida provoca infecciones oportunistas?", "El VIH destruye los linfocitos T colaboradores y se debilitan todas las respuestas específicas."],
    ],
    a: [
      ["(Tipo PAU) Interpreta una gráfica de anticuerpos tras dos exposiciones al mismo antígeno separadas tres semanas.", "1.ª: latencia larga, pico bajo y descenso (primaria, IgM). 2.ª: subida rápida, pico mucho mayor y duradero (secundaria, IgG, memoria)."],
      ["(Tipo PAU) Explica el experimento de Jenner con la terminología actual.", "La viruela vacuna tiene antígenos parecidos a la humana; la inoculación produjo inmunidad activa artificial con memoria que protegió frente al virus humano (reacción cruzada)."],
      ["(Tipo PAU) Una madre Rh− tiene un segundo hijo Rh+. Explica el riesgo y su prevención.", "En el primer parto se sensibiliza y forma anti-Rh; en el segundo embarazo los IgG atraviesan la placenta y destruyen los glóbulos del feto. Se previene con suero anti-Rh tras el primer parto."],
      ["¿Por qué la vacuna de la gripe se pone cada año y la del sarampión no?", "El virus de la gripe muta sus antígenos cada temporada; el del sarampión es estable y la memoria sirve de por vida."],
      ["Explica por qué en una prueba de embarazo se usan anticuerpos monoclonales.", "Son específicos de un solo epítopo de la hormona hCG; se unen a ella con gran especificidad y producen una señal visible."],
      ["Un paciente recibe un riñón de su gemelo idéntico. ¿Necesita inmunosupresores? Razona.", "No, porque tiene los mismos HLA; el órgano no se reconoce como extraño."],
      ["Explica por qué las personas trasplantadas tienen más riesgo de infecciones y de algunos cánceres.", "Los inmunosupresores frenan la respuesta inmunitaria, incluida la vigilancia frente a microorganismos y células tumorales."],
      ["Razona por qué la diabetes tipo 1 es autoinmune y la tipo 2 no.", "En la 1 los linfocitos destruyen las células β del páncreas; en la 2 hay resistencia a la insulina sin ataque inmunitario."],
      ["Explica cómo funciona una vacuna de ARNm y por qué no modifica nuestro ADN.", "El ARNm entra en las células, se traduce a la proteína del virus que activa la respuesta; no entra al núcleo ni se retrotranscribe y se degrada pronto."],
    ],
  },
  quiz: [
    ["La inmunidad específica tiene…", ["memoria", "respuesta inmediata", "acción contra todo", "solo barreras"], 0, "Adaptativa."],
    ["Los linfocitos T maduran en el…", ["timo", "bazo", "hígado", "ganglio"], 0, "Órgano primario."],
    ["La lisozima…", ["rompe la pared bacteriana", "fabrica anticuerpos", "coagula la sangre", "es un linfocito"], 0, "Lágrimas, saliva."],
    ["La histamina la liberan los…", ["mastocitos", "linfocitos B", "eritrocitos", "neutrófilos"], 0, "Vasodilatación."],
    ["Los primeros fagocitos en llegar son los…", ["neutrófilos", "linfocitos T", "eosinófilos", "basófilos"], 0, "Luego macrófagos."],
    ["Los monocitos se transforman en…", ["macrófagos", "linfocitos", "plaquetas", "mastocitos"], 0, "En los tejidos."],
    ["Las células NK destruyen…", ["células infectadas por virus", "anticuerpos", "glóbulos rojos sanos", "histamina"], 0, "Innatas."],
    ["El complemento está formado por…", ["proteínas del plasma", "linfocitos", "lípidos", "ácidos nucleicos"], 0, "Cascada."],
    ["Un epítopo es…", ["la parte del antígeno reconocida", "un anticuerpo", "un linfocito", "un órgano"], 0, "Determinante."],
    ["Un anticuerpo IgG tiene… sitios de unión", ["2", "1", "4", "10"], 0, "Forma de Y."],
    ["La IgA predomina en…", ["las secreciones", "la placenta", "los mastocitos", "el timo"], 0, "Leche, saliva."],
    ["La IgE interviene en…", ["las alergias", "la placenta", "la respuesta primaria", "la vista"], 0, "Mastocitos."],
    ["Los anticuerpos los fabrican las…", ["células plasmáticas", "células T citotóxicas", "plaquetas", "neuronas"], 0, "Linfocitos B diferenciados."],
    ["Los T citotóxicos son…", ["CD8", "CD4", "B", "NK"], 0, "Destruyen células."],
    ["El VIH destruye los linfocitos…", ["T colaboradores", "B", "T citotóxicos", "NK"], 0, "CD4."],
    ["La respuesta secundaria produce sobre todo…", ["IgG", "IgM", "IgE", "IgD"], 0, "Memoria."],
    ["La leche materna da inmunidad…", ["pasiva natural", "activa natural", "activa artificial", "pasiva artificial"], 0, "IgA."],
    ["Un suero contiene…", ["anticuerpos", "antígenos", "linfocitos", "virus atenuados"], 0, "Pasiva."],
    ["La esclerosis múltiple es una enfermedad…", ["autoinmune", "alérgica", "infecciosa", "por inmunodeficiencia"], 0, "Contra la mielina."],
    ["El rechazo de trasplantes se debe al…", ["HLA (MHC)", "grupo ABO solamente", "complemento", "IgE"], 0, "Linfocitos T."],
  ],
  examen: [
    ["Pasar el sarampión da inmunidad…", ["activa natural", "pasiva natural", "activa artificial", "pasiva artificial"], 0, "Infección."],
    ["La vacuna del tétanos contiene…", ["toxoide", "anticuerpos", "bacterias vivas", "ARNm"], 0, "Toxina inactivada."],
    ["La aglutinación es posible porque el anticuerpo…", ["tiene dos sitios de unión", "es una enzima", "es un lípido", "tiene complemento"], 0, "Une varias células."],
    ["El choque anafiláctico se trata con…", ["adrenalina", "antibióticos", "insulina", "vacunas"], 0, "Urgencia."],
    ["Las células de memoria proceden de la…", ["selección clonal", "inflamación", "fagocitosis", "fiebre"], 0, "Del clon activado."],
    ["Los anticuerpos monoclonales proceden de…", ["un solo clon", "muchos clones", "virus", "el complemento"], 0, "Hibridomas."],
    ["La inmunidad de grupo protege a…", ["los no vacunados", "solo a los vacunados", "nadie", "los animales"], 0, "Corta la transmisión."],
    ["En las terapias CAR-T se modifican…", ["linfocitos T", "anticuerpos", "eritrocitos", "virus"], 0, "Contra el tumor."],
  ],
  feynman: ["Por qué la piel es la primera defensa", "Por qué una herida infectada se pone roja y caliente", "Cómo encaja un anticuerpo con su antígeno", "Por qué la segunda vez que te infectas no enfermas", "Cómo te protege una vacuna sin hacerte enfermar", "Por qué el sistema inmunitario a veces se equivoca"],
  mapa: ["INMUNOLOGÍA", [["Inespecífica", "barreras, inflamación, fagocitos"], ["Específica", "antígenos, anticuerpos, linfocitos"], ["Inmunización", "vacunas y sueros"], ["Alteraciones", "alergia, autoinmunidad, sida"]]],
  tarjetas: [
    ["Inmunidad", "Innata (inespecífica) y adaptativa (específica, con memoria)."],
    ["Órganos linfoides", "Primarios: médula y timo. Secundarios: ganglios, bazo."],
    ["Barreras", "Piel, mucosas, lisozima, HCl, microbiota."],
    ["Inflamación", "Histamina: rojo, calor, hinchazón, dolor."],
    ["Fagocitos", "Neutrófilos y macrófagos."],
    ["Anticuerpo", "Y: 2 pesadas + 2 ligeras; región variable."],
    ["Clases de Ig", "IgG, IgM, IgA, IgE, IgD."],
    ["Selección clonal", "Antígeno → clon de efectoras + memoria."],
    ["Humoral / celular", "B y anticuerpos / T citotóxicos."],
    ["Primaria / secundaria", "Lenta, IgM / rápida, IgG, memoria."],
    ["Tipos de inmunidad", "Activa o pasiva; natural o artificial."],
    ["Alteraciones", "Alergia (IgE), autoinmunidad, sida, rechazo."],
  ],
  glosario: [
    ["Inmunidad", "Capacidad de defenderse frente a agentes extraños."],
    ["Lisozima", "Enzima que rompe la pared de las bacterias."],
    ["Histamina", "Sustancia que dilata los vasos y causa inflamación y alergias."],
    ["Fagocitosis", "Captura y digestión de partículas por una célula."],
    ["Complemento", "Conjunto de proteínas plasmáticas que destruyen microorganismos."],
    ["Antígeno", "Molécula que desencadena una respuesta inmunitaria específica."],
    ["Epítopo", "Región de un antígeno reconocida por un anticuerpo."],
    ["Anticuerpo", "Proteína que reconoce y se une a un antígeno específico."],
    ["Célula plasmática", "Linfocito B diferenciado que fabrica anticuerpos."],
    ["Célula de memoria", "Linfocito de vida larga que recuerda un antígeno."],
    ["Citoquina", "Molécula de comunicación entre células del sistema inmunitario."],
    ["MHC (HLA)", "Proteínas de membrana que identifican las células propias y presentan antígenos."],
    ["Vacuna", "Preparado con antígenos que induce inmunidad activa y memoria."],
    ["Suero", "Preparado con anticuerpos que da inmunidad pasiva inmediata."],
    ["Alérgeno", "Antígeno inofensivo que provoca una alergia."],
    ["Inmunodeficiencia", "Fallo del sistema inmunitario que reduce las defensas."],
  ],
  situacion: {
    titulo: "Campaña de vacunación en el instituto",
    reto: "Vuestro equipo debe preparar una campaña informativa, basada en evidencias científicas, que explique a las familias cómo funcionan las vacunas y responda a los bulos más frecuentes.",
    pasos: [
      "Consultad el calendario de vacunación oficial y elegid tres vacunas para explicar.",
      "Explicad con un esquema la respuesta primaria y secundaria y la inmunidad de grupo.",
      "Recopilad tres bulos frecuentes sobre las vacunas y contrastadlos con fuentes fiables (OMS, Ministerio de Sanidad).",
      "Diseñad una infografía y un vídeo breve con el mensaje principal.",
    ],
    producto: "Una infografía y un vídeo de dos minutos para las familias.",
    evaluacion: ["La explicación científica es correcta.", "Las fuentes son fiables y se citan.", "El mensaje es claro, respetuoso y adaptado al público."],
  },
  familias: [
    "Revisad juntos la cartilla de vacunación y comprobad qué vacunas tenéis puestas.",
    "Hablad de las alergias de la familia y de cómo actuar ante una reacción grave.",
    "Comentad la importancia de la donación de órganos y de sangre.",
    "Conversad sobre la historia de Balmis e Isabel Zendal y la expedición de la vacuna.",
  ],
  saberes: "bloque «Microbiología, biotecnología e inmunología»: concepto de inmunidad; las defensas inespecíficas (barreras, inflamación, fagocitosis, complemento) y específicas; antígenos y anticuerpos; la respuesta humoral y celular, los linfocitos B y T; la memoria inmunológica; los tipos de inmunidad, las vacunas y los sueros; las alteraciones del sistema inmunitario (alergias, autoinmunidad, inmunodeficiencias como el sida) y los trasplantes.",
  ideas: [
    "Determinación del grupo sanguíneo con kits escolares (aglutinación).",
    "Simulación de la difusión de una epidemia con y sin vacunación (inmunidad de grupo).",
    "Juego de rol de la respuesta inmunitaria con los distintos tipos de células.",
    "Análisis de bulos sobre vacunas con fuentes científicas.",
  ],
  fuentes: [
    { t: "Ministerio de Sanidad: calendario de vacunación", url: "https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm" },
    { t: "OMS: vacunas e inmunización", url: "https://www.who.int/es/health-topics/vaccines-and-immunization" },
  ],
});
