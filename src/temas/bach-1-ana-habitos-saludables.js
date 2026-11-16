// Anatomía Aplicada, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L43");

// Curva de supercompensación: carga, fatiga, recuperación y mejora.
const supercomp = B.lienzo("Curva de supercompensación: tras la carga baja el nivel por la fatiga, se recupera y sube por encima del nivel inicial antes de volver a él", `
  <path d="M24 150 H 246 M24 150 V 24" stroke="var(--ink)" stroke-width="2"/>
  <path d="M26 92 H 236" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M26 92 H 50 C 66 92, 70 132, 92 134 C 120 136, 128 92, 150 66 C 170 46, 196 60, 236 88" fill="none" stroke="var(--pen)" stroke-width="3.5"/>
  ${B.tx(40, 82, "carga", { fs: 10.5, maxW: 40, bold: true, color: "var(--red)" })}
  ${B.tx(92, 146, "fatiga", { fs: 10.5, maxW: 50, bold: true, color: "var(--red)" })}
  ${B.tx(160, 130, "recuperación", { fs: 10.5, maxW: 80, bold: true, color: "var(--sun)", anchor: "start" })}
  ${B.tx(168, 40, "supercompensación", { fs: 10.5, maxW: 110, bold: true, color: "var(--leaf)" })}
  ${B.tx(214, 104, "nivel inicial", { fs: 9.5, maxW: 64, color: "var(--muted)" })}
  ${B.tx(150, 168, "tiempo →", { fs: 10, maxW: 60, color: "var(--muted)" })}`, "");

module.exports = B.tema({
  titulo: "Hábitos saludables",
  minutos: 110,
  objetivos: [
    "Comprender el concepto de salud y sus determinantes, y la relación entre hábitos y calidad de vida",
    "Conocer las recomendaciones de actividad física y los riesgos del sedentarismo",
    "Aplicar los componentes de la condición física saludable y los principios del entrenamiento a un plan personal",
    "Valorar la importancia del descanso, el sueño, la higiene postural y la salud mental",
    "Analizar los efectos de las sustancias adictivas y de los usos problemáticos de la tecnología, y actuar ante una emergencia",
  ],
  claves: ["salud", "determinantes de la salud", "actividad física", "sedentarismo", "condición física", "supercompensación", "progresión", "higiene postural", "sueño", "estrés", "adicción", "soporte vital básico"],
  pregunta: {
    texto: "Si una persona hace una hora de deporte al día pero pasa las otras quince horas despierta sentada, ¿es una persona activa y saludable?",
    respuesta: "Es <b>activa</b>, porque cumple las recomendaciones de ejercicio, pero también <mark>sedentaria</mark>: pasar muchas horas seguidas sentado es un factor de riesgo independiente, que el entrenamiento diario no compensa del todo. La salud depende del conjunto del día: moverse con frecuencia, interrumpir el tiempo sentado, dormir bien, comer de forma equilibrada y cuidar el bienestar emocional.",
  },
  lectura: {
    titulo: "Lo que hacemos cada día",
    html: `<p>En las llamadas «zonas azules», como la isla de Okinawa en Japón o Cerdeña en Italia, vive una proporción excepcional de personas que superan los cien años con buena salud. Los investigadores que las estudiaron no encontraron una pastilla mágica ni un gimnasio en cada esquina. Encontraron costumbres: caminar a diario, trabajar el huerto, comer sobre todo vegetales y legumbres, dormir lo suficiente, mantener vínculos con la familia y los amigos y sentir que la vida tiene un propósito.</p>
    <p>La ciencia lo confirma: buena parte de las enfermedades que más muertes causan en los países desarrollados, como las cardiovasculares, la diabetes tipo 2 o varios tipos de cáncer, están muy relacionadas con los hábitos. Y la mayoría de esos hábitos se consolidan en la adolescencia.</p>
    <p>Este último tema reúne todo lo que has aprendido del cuerpo humano para convertirlo en decisiones prácticas. No se trata de vivir con miedo ni de buscar un cuerpo perfecto, sino de conocer cómo funciona tu organismo para cuidarlo, disfrutar del movimiento y elegir con criterio.</p>`,
  },
  secciones: [3, 5, 5],
  bloques: [
    {
      h: "El concepto de salud",
      html: `<p>La Organización Mundial de la Salud (OMS) definió en 1948 la <b>salud</b> como «un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades». Esta definición, todavía vigente, tiene tres ideas clave:</p>
      <ul><li>La salud es <b>integral</b>: incluye el cuerpo, la mente y las relaciones con los demás.</li>
      <li>Es un concepto <b>positivo</b>: no basta con no estar enfermo.</li>
      <li>Es <b>dinámica</b>: cambia a lo largo de la vida y se puede mejorar.</li></ul>
      <p>Hoy se entiende además como un recurso para la vida diaria: la capacidad de adaptarse, afrontar dificultades y desarrollar los propios proyectos.</p>
      <p>La <b>calidad de vida</b> es la percepción que cada persona tiene de su bienestar según sus valores, expectativas y circunstancias. La <b>promoción de la salud</b> busca que las personas tengan más control sobre los factores que la determinan, mientras que la <b>prevención</b> trata de evitar las enfermedades (prevención primaria), detectarlas pronto (secundaria) o reducir sus consecuencias (terciaria).</p>
      <p>Las <b>enfermedades no transmisibles</b> (cardiovasculares, cáncer, diabetes y enfermedades respiratorias crónicas) causan alrededor de <mark>siete de cada diez muertes</mark> en el mundo. Comparten cuatro factores de riesgo modificables: el tabaco, el consumo de alcohol, la alimentación poco saludable y la inactividad física. Por eso los hábitos son una de las herramientas más poderosas de la salud pública.</p>`,
      svg: B.ciclo("Dimensiones de la salud según la OMS", "Salud", ["Física", "Mental", "Social"]),
    },
    {
      h: "Los determinantes de la salud",
      html: `<p>Los <b>determinantes de la salud</b> son los factores que influyen en el estado de salud de una persona o una población. El modelo clásico de Lalonde (1974) distingue cuatro grupos:</p>
      <ul><li><b>Biología humana</b>: la herencia genética, la edad y el sexo. Apenas se pueden modificar.</li>
      <li><b>Medio ambiente</b>: la calidad del aire y del agua, el ruido, la vivienda, las condiciones de trabajo y el entorno social y cultural.</li>
      <li><b>Estilo de vida</b>: los hábitos personales: alimentación, actividad física, descanso, consumo de sustancias, conducción, relaciones sexuales, gestión del estrés.</li>
      <li><b>Sistema sanitario</b>: el acceso, la calidad y la cobertura de los servicios de salud.</li></ul>
      <p>Lalonde observó que el <b>estilo de vida</b> era el determinante con más peso en la salud de la población de los países desarrollados, y sin embargo era el que menos recursos recibía. Se estima que supone en torno al 40-45 % de la influencia total.</p>
      <p>Los hábitos no dependen solo de la voluntad individual: están condicionados por los <b>determinantes sociales</b>, como el nivel económico, la educación, el barrio o el tiempo libre. Un barrio con parques, carriles bici y fruta asequible facilita un estilo de vida saludable. Por eso la salud es también una responsabilidad colectiva de familias, centros educativos, ayuntamientos y gobiernos.</p>`,
      svg: B.barras("Peso estimado de cada determinante en la salud según el modelo de Lalonde", [["Estilo de vida", 43], ["Biología", 27], ["Medio ambiente", 19], ["Sistema sanitario", 11]], { t: "Determinantes de la salud (%)", unidad: " %" }),
    },
    {
      h: "Hábitos y adolescencia",
      html: `<p>Un <b>hábito</b> es una conducta que se repite con regularidad hasta hacerse casi automática. En el cerebro, los hábitos se consolidan por la repetición de un ciclo: una <b>señal</b> (salir de clase), una <b>rutina</b> (ir andando a casa o coger el patinete eléctrico) y una <b>recompensa</b> (llegar antes, charlar con amigos). Por eso cambiar un hábito es más fácil si se modifica el entorno y se mantiene la recompensa.</p>
      <p>La <b>adolescencia</b> es un periodo clave:</p>
      <ul><li>Se produce un gran crecimiento y se alcanza buena parte de la masa ósea y muscular del adulto.</li>
      <li>Se gana autonomía en las decisiones sobre comida, horarios, ocio y consumo.</li>
      <li>La influencia del grupo de iguales y de las redes sociales es muy fuerte.</li>
      <li>El cerebro aún está madurando: las zonas del <b>lóbulo frontal</b> que regulan los impulsos y valoran las consecuencias a largo plazo terminan de desarrollarse hacia los 25 años.</li></ul>
      <p>Los datos indican que la actividad física disminuye mucho durante la adolescencia, sobre todo en las chicas, y que aumentan el tiempo de pantalla y el sedentarismo. Los hábitos adquiridos en esta etapa tienden a mantenerse en la edad adulta: un adolescente activo tiene muchas más probabilidades de ser un adulto activo.</p>
      <p>Algunas estrategias para crear hábitos saludables: empezar con cambios <mark>pequeños y concretos</mark>, unirlos a rutinas que ya existen, preparar el entorno (la mochila del deporte lista, fruta a la vista), registrar los progresos y apoyarse en otras personas.</p>`,
      svg: B.ciclo("El ciclo del hábito: señal, rutina y recompensa", "Hábito", ["Señal", "Rutina", "Recompensa"]),
    },
    {
      h: "Actividad física y sedentarismo",
      html: `<p>Conviene distinguir varios conceptos:</p>
      <ul><li><b>Actividad física</b>: cualquier movimiento corporal producido por los músculos que exija gasto de energía (andar, subir escaleras, bailar, jugar, hacer las tareas de casa).</li>
      <li><b>Ejercicio físico</b>: actividad física planificada, estructurada y repetitiva con el objetivo de mejorar o mantener la condición física.</li>
      <li><b>Deporte</b>: actividad física reglada, con normas y, a menudo, competición.</li>
      <li><b>Sedentarismo</b> o conducta sedentaria: cualquier actividad en estado de vigilia, sentado o tumbado, con un gasto energético muy bajo (inferior a 1,5 MET): estar en clase, ver series, jugar a videojuegos.</li></ul>
      <p>Las <b>recomendaciones de la OMS</b> (2020) para niños y adolescentes de 5 a 17 años son:</p>
      <ul><li>Una media de al menos <b>60 minutos diarios</b> de actividad física de intensidad <b>moderada a vigorosa</b>, sobre todo aeróbica.</li>
      <li>Actividades <b>vigorosas</b> y de <b>fortalecimiento</b> de músculos y huesos al menos <b>3 días a la semana</b>.</li>
      <li><b>Limitar el tiempo sedentario</b>, en especial el ocio ante pantallas.</li></ul>
      <p>Para los adultos se recomiendan entre 150 y 300 minutos semanales de actividad moderada (o 75-150 de vigorosa) y fortalecimiento al menos 2 días. La intensidad moderada permite hablar pero no cantar; la vigorosa, solo decir unas pocas palabras.</p>
      <p>En España, una mayoría de adolescentes no cumple estas recomendaciones. Y no basta con entrenar: también hay que <b>interrumpir el tiempo sentado</b> cada 30-60 minutos con pausas activas.</p>`,
      svg: B.rejilla("Recomendaciones de actividad física de la OMS por edades", ["Grupo", "Recomendación"], [["5-17 años", "60 min/día"], ["5-17 años", "fuerza 3 días/sem"], ["Adultos", "150-300 min/sem"], ["Todos", "menos sedentarismo"]], { t: "Recomendaciones OMS" }),
      video: { id: "LbD1Cmo3zRQ", titulo: "Así TRANSFORMA el DEPORTE nuestro CUERPO", canal: "La Hiperactina", vistas: 897763 },
    },
    {
      h: "Beneficios de la actividad física",
      html: `<p>La actividad física regular es una de las intervenciones de salud más eficaces que existen. Sus beneficios afectan a todos los sistemas que has estudiado:</p>
      <ul><li><b>Cardiovascular y respiratorio</b>: corazón más eficiente, presión arterial más baja, mejor perfil de colesterol, más capilares y mayor VO₂ máx (tema 3).</li>
      <li><b>Aparato locomotor</b>: más masa ósea (prevención de la osteoporosis), músculos más fuertes, articulaciones más estables y mejor postura (tema 2).</li>
      <li><b>Metabolismo</b>: mejor sensibilidad a la insulina y control de la glucosa, más gasto energético y mejor composición corporal (tema 4).</li>
      <li><b>Sistema nervioso</b>: mejora la memoria, la atención y el rendimiento escolar; favorece la plasticidad neuronal y el sueño (tema 5).</li>
      <li><b>Salud mental</b>: reduce la ansiedad y los síntomas de depresión, mejora el estado de ánimo (endorfinas y otras sustancias) y la autoestima.</li>
      <li><b>Social</b>: favorece las relaciones, el trabajo en equipo y la integración.</li></ul>
      <p>En la población adulta, ser físicamente activo reduce el riesgo de muerte prematura alrededor de un 20-30 % y disminuye el riesgo de cardiopatía, ictus, diabetes tipo 2, hipertensión y varios tipos de cáncer (colon, mama).</p>
      <p>La relación entre actividad y beneficio es de tipo <b>dosis-respuesta</b>: cualquier cantidad es mejor que nada, y los mayores beneficios se obtienen al pasar de no hacer nada a hacer algo. Por encima de volúmenes muy altos, los beneficios se estabilizan y pueden aparecer riesgos (lesiones, sobreentrenamiento), por lo que el equilibrio es importante.</p>`,
      svg: B.cajas("Beneficios de la actividad física por sistemas", [["Corazón", "menos presión|más VO₂"], ["Huesos y músculos", "más masa ósea|y fuerza"], ["Metabolismo", "mejor glucosa|y composición"], ["Mente", "menos ansiedad|más atención"]], { t: "Beneficios" }),
    },
    {
      h: "La condición física saludable",
      html: `<p>La <b>condición física</b> es el conjunto de capacidades que permiten realizar actividades físicas con eficacia y sin fatiga excesiva. La <b>condición física orientada a la salud</b> se centra en las capacidades más relacionadas con el bienestar y la prevención de enfermedades:</p>
      <ul><li><b>Resistencia cardiorrespiratoria</b> (aeróbica): capacidad de mantener un esfuerzo prolongado. Es el componente más relacionado con la salud cardiovascular. Se mejora con actividades continuas (correr, nadar, bici, bailar) al 60-85 % de la FCmáx.</li>
      <li><b>Fuerza y resistencia muscular</b>: capacidad de los músculos de vencer resistencias y de repetir esfuerzos. Protege las articulaciones, la columna y los huesos. Se mejora con autocargas, gomas, pesas o escalada.</li>
      <li><b>Flexibilidad</b>: amplitud de movimiento de las articulaciones. Se trabaja con estiramientos y actividades como el yoga.</li>
      <li><b>Composición corporal</b>: proporción de masa grasa y masa magra.</li>
      <li>Componentes <b>motores</b>: equilibrio, coordinación, agilidad y velocidad de reacción, importantes para la autonomía y la prevención de caídas.</li></ul>
      <p>La condición física se puede <b>evaluar</b> con pruebas sencillas: el test de ida y vuelta de 20 metros (<i>Course Navette</i>) estima el VO₂ máx; el salto horizontal y la dinamometría manual, la fuerza; el test de flexión de tronco sentado, la flexibilidad; y el IMC y el perímetro de cintura, la composición corporal. La baja forma aeróbica y la baja fuerza en la adolescencia se asocian a más riesgo cardiovascular en la edad adulta.</p>`,
      svg: B.estrella("Componentes de la condición física saludable", "Condición física", ["Resistencia", "Fuerza", "Flexibilidad", "Composición", "Coordinación"]),
    },
    {
      h: "Los principios del entrenamiento",
      html: `<p>Para mejorar la condición física hay que aplicar unos <b>principios</b> basados en cómo se adapta el organismo:</p>
      <ul><li><b>Sobrecarga</b> o umbral: el estímulo debe ser suficientemente intenso para provocar adaptaciones; uno demasiado débil no produce mejoras y uno excesivo produce fatiga y lesión.</li>
      <li><b>Supercompensación</b>: tras una carga, el organismo se fatiga; durante la recuperación no solo repone lo gastado, sino que se prepara por encima del nivel inicial. Si el siguiente estímulo llega en ese momento, la condición física mejora; si llega demasiado pronto, se acumula fatiga; si llega tarde, la mejora se pierde.</li>
      <li><b>Progresión</b>: las cargas deben aumentar de forma gradual. Una regla orientativa es no subir el volumen semanal más de un 10 %.</li>
      <li><b>Continuidad</b>: el entrenamiento debe ser regular; las adaptaciones se pierden si se deja de entrenar (<b>reversibilidad</b>).</li>
      <li><b>Especificidad</b>: se mejora aquello que se entrena; correr mejora la carrera más que la natación.</li>
      <li><b>Individualización</b>: cada persona responde de forma diferente según su edad, nivel, genética y circunstancias.</li>
      <li><b>Alternancia</b> y <b>recuperación</b>: alternar intensidades y grupos musculares y respetar el descanso.</li></ul>
      <p>Las cargas se definen con las variables <b>FITT</b>: <b>F</b>recuencia (días por semana), <b>I</b>ntensidad (% FCmáx, peso, esfuerzo percibido), <b>T</b>iempo (duración) y <b>T</b>ipo de actividad.</p>`,
      svg: supercomp,
    },
    {
      h: "Planificar una sesión segura",
      html: `<p>Una sesión de ejercicio saludable tiene tres partes:</p>
      <ol><li><b>Calentamiento</b> (10-15 min): activación cardiovascular suave, movilidad articular, estiramientos dinámicos y ejercicios específicos de intensidad creciente. Eleva la temperatura muscular, prepara el sistema nervioso y reduce el riesgo de lesión.</li>
      <li><b>Parte principal</b> (20-45 min): el trabajo de resistencia, fuerza, habilidades o el juego.</li>
      <li><b>Vuelta a la calma</b> (5-10 min): actividad suave, estiramientos y respiración, para recuperar el pulso y la temperatura y empezar la recuperación.</li></ol>
      <p>Para practicar de forma segura:</p>
      <ul><li>Controlar la <b>intensidad</b> con la frecuencia cardíaca o con la escala de <b>esfuerzo percibido</b> (de 0 a 10) y con el «test del habla».</li>
      <li>Hidratarse antes, durante y después, y protegerse del calor y del sol.</li>
      <li>Usar <b>ropa y calzado</b> adecuados y material en buen estado; protecciones como el casco cuando corresponda.</li>
      <li>Aprender la <b>técnica</b> correcta de los ejercicios, sobre todo los de fuerza (espalda neutra, control del movimiento, respirar sin bloquear).</li>
      <li>Respetar el <b>dolor</b> como señal: un dolor agudo, punzante o que aumenta obliga a parar.</li>
      <li>Pasar un <b>reconocimiento médico</b> si se va a competir o hay antecedentes de problemas cardíacos.</li></ul>
      <p>Ante un esguince u otra lesión de partes blandas en las primeras horas, se recomienda proteger la zona, reposo relativo, frío local en periodos cortos, compresión y elevación, y después volver a moverla de forma progresiva según la tolerancia.</p>`,
      svg: B.flujo("Partes de una sesión de ejercicio", ["Calentamiento: 10-15 min", "Parte principal: 20-45 min", "Vuelta a la calma: 5-10 min"], { t: "La sesión" }),
      video: { id: "wqFNXmw33Y0", titulo: "Importancia del calentamiento antes del deporte", canal: "FisioOnline", vistas: 140737 },
    },
    {
      h: "Higiene postural",
      html: `<p>La <b>higiene postural</b> es el conjunto de normas para mantener posturas correctas, tanto estáticas como en movimiento, que reduzcan la carga sobre la columna y las articulaciones. El dolor de espalda es uno de los problemas de salud más frecuentes, ya también entre adolescentes, y se relaciona con el sedentarismo, la debilidad de la musculatura del tronco y las malas posturas mantenidas.</p>
      <p>Normas básicas (amplían lo visto en la ergonomía del tema 6):</p>
      <ul><li><b>Sentado</b>: la espalda apoyada en el respaldo, los pies en el suelo, las rodillas y las caderas a unos 90°, la mesa a la altura de los codos y la pantalla a la altura de los ojos. Cambiar de postura con frecuencia: la mejor postura es la <mark>siguiente</mark>.</li>
      <li><b>De pie</b>: repartir el peso entre los dos pies, alternar el apoyo y, si hay que estar mucho rato, apoyar un pie en un escalón.</li>
      <li><b>Al dormir</b>: de lado con las piernas algo flexionadas o boca arriba con una almohada bajo las rodillas; evitar dormir boca abajo; colchón firme pero no duro.</li>
      <li><b>Al cargar</b>: llevar la mochila con las dos asas, ajustada y con peso inferior al 10-15 % de la masa corporal; levantar los objetos flexionando las piernas.</li>
      <li><b>Con el móvil</b>: subirlo a la altura de los ojos en vez de bajar la cabeza.</li></ul>
      <p>La mejor prevención es una musculatura del tronco fuerte y resistente (abdominales, espalda, glúteos) y la actividad física regular.</p>`,
      svg: B.cajas("Normas de higiene postural", [["Sentado", "espalda apoyada|pies en el suelo"], ["De pie", "repartir el peso|alternar apoyo"], ["Dormir", "de lado o|boca arriba"], ["Cargar", "mochila con|dos asas"]], { t: "Higiene postural" }),
      video: { id: "habRvGCOj0s", titulo: "HIGIENE POSTURAL | Qué es, normas y qué se debe tener en cuenta", canal: "FisioOnline", vistas: 45837 },
    },
    {
      h: "El sueño y el descanso",
      html: `<p>El <b>sueño</b> es una necesidad biológica imprescindible. Los adolescentes necesitan entre <b>8 y 10 horas</b> diarias, pero en España muchos duermen menos de 8 entre semana. Durante la adolescencia, el reloj biológico se retrasa: la <b>melatonina</b> se segrega más tarde y cuesta dormirse pronto, mientras que los horarios escolares obligan a madrugar.</p>
      <p>El sueño se organiza en ciclos de unos 90 minutos con distintas fases: el <b>sueño profundo</b> o de ondas lentas, en el que se libera la hormona del crecimiento, se reparan los tejidos y se refuerza el sistema inmunitario, y el sueño <b>REM</b>, con ensoñaciones, importante para la memoria y las emociones.</p>
      <p>Dormir poco tiene consecuencias claras: peor atención, memoria y rendimiento académico; tiempo de reacción más lento y más accidentes; más lesiones deportivas; irritabilidad, ansiedad y peor estado de ánimo; más apetito por alimentos calóricos y mayor riesgo de obesidad.</p>
      <p>Hábitos de <b>higiene del sueño</b>:</p>
      <ul><li>Horarios regulares de acostarse y levantarse, también el fin de semana.</li>
      <li>Apagar las <b>pantallas</b> al menos una hora antes de dormir y no usar el móvil en la cama.</li>
      <li>Dormitorio oscuro, silencioso y fresco.</li>
      <li>Evitar cafeína, bebidas energéticas y cenas copiosas por la noche.</li>
      <li>Hacer ejercicio de forma regular, mejor no justo antes de acostarse.</li>
      <li>Recibir luz natural por la mañana para ajustar el reloj biológico.</li></ul>`,
      svg: B.barras("Horas de sueño recomendadas por edad", [["Infancia 6-12", 10.5], ["Adolescencia", 9], ["Adultos", 8], ["Mayores", 7.5]], { t: "Horas de sueño recomendadas" }),
      video: { id: "LsMUYy8KUbc", titulo: "¿Cómo afecta el sueño al rendimiento escolar? Dr. Javier Albares", canal: "AprendemosJuntos", vistas: 184432 },
    },
    {
      h: "Salud mental y gestión del estrés",
      html: `<p>La <b>salud mental</b> es un estado de bienestar que permite afrontar las tensiones de la vida, desarrollar las propias capacidades, aprender, trabajar y contribuir a la comunidad. Es tan importante como la física y están muy relacionadas. La mitad de los problemas de salud mental del adulto comienzan antes de los 14 años y tres cuartas partes antes de los 25.</p>
      <p>El <b>estrés</b> (tema 5) es una respuesta normal ante las exigencias. En dosis moderadas y breves ayuda a rendir, pero cuando es intenso y mantenido (exámenes, conflictos, presión social, exceso de actividades) produce cansancio, problemas de sueño, irritabilidad, dolores de cabeza o de estómago y dificultad para concentrarse.</p>
      <p>Estrategias para cuidar la salud mental:</p>
      <ul><li><b>Actividad física</b> regular, que reduce la ansiedad y mejora el ánimo.</li>
      <li><b>Sueño</b> suficiente y regular.</li>
      <li><b>Técnicas de relajación</b>: respiración lenta, relajación muscular progresiva, atención plena (mindfulness).</li>
      <li><b>Organización</b> del tiempo, con descansos y tiempo de ocio.</li>
      <li><b>Relaciones</b>: hablar de lo que preocupa con amigos, familia o docentes; el apoyo social protege.</li>
      <li>Un uso equilibrado de las <b>redes sociales</b>: la comparación constante con imágenes idealizadas daña la autoestima y la imagen corporal.</li>
      <li><mark>Pedir ayuda profesional</mark> cuando el malestar es intenso o dura semanas. En España, el teléfono 024 atiende de forma gratuita y confidencial a las personas con ideas de suicidio o en crisis.</li></ul>`,
      svg: B.cajas("Estrategias para cuidar la salud mental", [["Moverse", "menos ansiedad|mejor ánimo"], ["Dormir", "8-10 h|regulares"], ["Relajarse", "respiración|mindfulness"], ["Hablar", "pedir ayuda|apoyo social"]], { t: "Salud mental" }),
    },
    {
      h: "Sustancias adictivas y tecnología",
      html: `<p>Una <b>adicción</b> es una dependencia de una sustancia o de una conducta que la persona sigue consumiendo o realizando a pesar de sus consecuencias negativas. Las sustancias adictivas actúan sobre el <b>sistema de recompensa</b> del cerebro (dopamina), y el cerebro adolescente es especialmente vulnerable.</p>
      <ul><li><b>Tabaco</b> y productos con nicotina (cigarrillos electrónicos, vapeadores): la nicotina es muy adictiva; el humo contiene monóxido de carbono (bloquea la hemoglobina) y miles de sustancias tóxicas y cancerígenas; daña los bronquios, los alvéolos y las arterias y reduce el rendimiento físico.</li>
      <li><b>Alcohol</b>: depresor del sistema nervioso; altera la coordinación, el juicio y la memoria; daña el hígado, el corazón y el cerebro en desarrollo; deshidrata y empeora la recuperación muscular. No existe un consumo seguro en menores.</li>
      <li><b>Cannabis</b>: afecta a la memoria, la atención, la motivación y la coordinación; aumenta el riesgo de trastornos psiquiátricos, sobre todo si se empieza pronto.</li>
      <li><b>Bebidas energéticas</b>: mucha cafeína y azúcar; taquicardia, nerviosismo e insomnio; desaconsejadas en menores.</li>
      <li><b>Dopaje</b>: sustancias para mejorar el rendimiento (anabolizantes, EPO, estimulantes) con efectos graves sobre la salud.</li></ul>
      <p>También existen <b>adicciones comportamentales</b>, como el juego de apuestas, y usos problemáticos de las pantallas, los videojuegos y las redes sociales, diseñados para captar la atención con recompensas inmediatas. Señales de alarma: pérdida de control del tiempo, abandono de otras actividades, malestar al no poder usarlas y problemas de sueño o de estudio.</p>`,
      svg: B.rejilla("Efectos principales de algunas sustancias", ["Sustancia", "Efecto principal"], [["Tabaco", "CO bloquea Hb"], ["Alcohol", "deprime el SNC"], ["Cannabis", "memoria y atención"], ["Energéticas", "taquicardia, insomnio"]], { t: "Sustancias adictivas" }),
    },
    {
      h: "Primeros auxilios y soporte vital",
      html: `<p>Saber actuar ante una emergencia también es un hábito saludable, y puede salvar vidas. La conducta básica es <b>PAS</b>:</p>
      <ul><li><b>Proteger</b>: asegurar el lugar para que ni la víctima ni quien ayuda corran peligro.</li>
      <li><b>Avisar</b>: llamar al <b>112</b> indicando qué ha pasado, dónde y cuántas víctimas hay.</li>
      <li><b>Socorrer</b>: atender a la víctima con los conocimientos que se tengan.</li></ul>
      <p>Ante una persona que se desploma, se comprueba si <b>responde</b> (hablarle y sacudirla suavemente por los hombros) y si <b>respira con normalidad</b> (abrir la vía aérea con la maniobra frente-mentón, y ver, oír y sentir durante no más de 10 segundos):</p>
      <ul><li>Si respira pero no responde, se coloca en <b>posición lateral de seguridad</b> y se vigila.</li>
      <li>Si no responde y no respira con normalidad, se trata de una <b>parada cardiorrespiratoria</b>: llamar al 112, pedir un <b>desfibrilador</b> (DEA) e iniciar la <b>reanimación cardiopulmonar</b>: compresiones en el centro del pecho, con los brazos rectos, a un ritmo de <mark>100-120 por minuto</mark> y una profundidad de 5-6 cm, combinadas con 2 ventilaciones cada 30 compresiones si se sabe hacerlo. Al llegar el DEA, se enciende y se siguen sus instrucciones.</li></ul>
      <p>Cada minuto sin reanimación reduce mucho la probabilidad de sobrevivir. Otras situaciones frecuentes en la actividad física son el <b>atragantamiento</b> (maniobra de Heimlich si no puede toser ni hablar), las hemorragias (presión directa), los golpes de calor (llevar a la sombra, enfriar, hidratar) y las lesiones musculoesqueléticas (inmovilizar y frío).</p>`,
      svg: B.flujo("Cadena de actuación ante una parada cardiorrespiratoria", ["Proteger la zona", "¿Responde? ¿Respira normal?", "Llamar al 112 y pedir un DEA", "Compresiones: 100-120 por minuto", "Usar el DEA y seguir sus órdenes"], { t: "Soporte vital básico" }),
    },
  ],
  figura: {
    titulo: "Hábitos saludables en cuatro ideas",
    items: [["Moverse", "60 min/día", "y fuerza", "3 días/semana"], ["Dormir", "8-10 h", "pantallas fuera", "una hora antes"], ["Entrenar", "FITT", "progresión y", "recuperación"], ["Actuar", "PAS · 112", "RCP a 100-120", "por minuto"]],
  },
  video: { id: "YWGOThGG8-Y", titulo: "HÁBITOS SALUDABLES para adolescentes y niños: aprende a cuidarte", canal: "Smile and Learn - Español", vistas: 514573 },
  quiz: [
    ["Según la OMS, la salud es…", ["la ausencia de enfermedad", "un estado de bienestar físico, mental y social", "estar en forma", "no ir al médico"], 1, "Definición de 1948."],
    ["El determinante con más peso en la salud según Lalonde es…", ["la biología", "el estilo de vida", "el sistema sanitario", "el clima"], 1, "Alrededor del 40-45 %."],
    ["Las enfermedades no transmisibles causan aproximadamente…", ["1 de cada 10 muertes", "3 de cada 10", "7 de cada 10", "todas"], 2, "Cardiovasculares, cáncer, diabetes y respiratorias."],
    ["El ciclo del hábito tiene…", ["señal, rutina y recompensa", "estímulo y reflejo", "carga y descanso", "inicio y fin"], 0, "Se repite hasta automatizarse."],
    ["El ejercicio físico se diferencia de la actividad física en que es…", ["más intenso", "planificado y estructurado", "siempre competitivo", "obligatorio"], 1, "Con el objetivo de mejorar la condición física."],
    ["La OMS recomienda a los adolescentes al menos…", ["30 min a la semana", "60 min diarios de actividad moderada-vigorosa", "3 horas diarias", "10 min diarios"], 1, "Más fuerza 3 días por semana."],
    ["Una conducta sedentaria es…", ["dormir", "estar sentado despierto con muy poco gasto", "andar despacio", "hacer yoga"], 1, "Menos de 1,5 MET en vigilia."],
    ["La intensidad moderada permite…", ["cantar", "hablar pero no cantar", "no decir nada", "dormir"], 1, "Es el «test del habla»."],
    ["El componente de la condición física más relacionado con la salud cardiovascular es…", ["la flexibilidad", "la resistencia aeróbica", "la velocidad", "la agilidad"], 1, "Se mide con el Course Navette."],
    ["El principio según el cual las mejoras se pierden si se deja de entrenar es la…", ["especificidad", "reversibilidad", "sobrecarga", "individualización"], 1, "Por eso hace falta continuidad."],
    ["En la supercompensación, el nuevo estímulo debe llegar…", ["en plena fatiga", "en la fase de supercompensación", "cuando se ha perdido la mejora", "nunca"], 1, "Así la condición física mejora."],
    ["Las siglas FITT corresponden a…", ["fuerza, intensidad, técnica, tiempo", "frecuencia, intensidad, tiempo, tipo", "fase, inicio, tramo, término", "fatiga, impulso, tono, tensión"], 1, "Variables de la carga."],
    ["La vuelta a la calma sirve para…", ["aumentar el pulso", "recuperar el pulso y empezar la recuperación", "calentar", "competir"], 1, "Actividad suave y estiramientos."],
    ["Al dormir, la postura menos recomendable es…", ["de lado", "boca arriba", "boca abajo", "de lado con las piernas flexionadas"], 2, "Fuerza el cuello y la zona lumbar."],
    ["Los adolescentes necesitan dormir…", ["5-6 h", "6-7 h", "8-10 h", "12-14 h"], 2, "Muchos duermen menos."],
    ["En el sueño profundo se libera…", ["adrenalina", "hormona del crecimiento", "insulina", "glucagón"], 1, "Repara tejidos."],
    ["El teléfono de atención a la conducta suicida en España es el…", ["016", "024", "091", "060"], 1, "Gratuito y confidencial."],
    ["La nicotina es…", ["inofensiva", "muy adictiva", "un nutriente", "un relajante muscular sano"], 1, "También en vapeadores."],
    ["La conducta básica ante una emergencia es…", ["PAS", "RICE", "FITT", "IMC"], 0, "Proteger, avisar y socorrer."],
    ["En la RCP las compresiones deben hacerse a un ritmo de…", ["30-40 por minuto", "60 por minuto", "100-120 por minuto", "200 por minuto"], 2, "Y con 5-6 cm de profundidad."],
  ],
  examen: [
    ["Un barrio con parques y carriles bici influye en la salud a través del determinante…", ["biología", "medio ambiente", "sistema sanitario", "genética"], 1, "Facilita el estilo de vida activo."],
    ["Una estudiante corre 30 min tres días por semana. ¿Cumple la recomendación de la OMS?", ["Sí, de sobra", "No: necesita una media de 60 min diarios", "Sí, si corre deprisa", "No hace falta actividad"], 1, "90 min semanales están muy por debajo."],
    ["Un chico entrena fuerza a diario los mismos músculos y está siempre agotado. Incumple el principio de…", ["especificidad", "recuperación y alternancia", "continuidad", "sobrecarga"], 1, "No da tiempo a la supercompensación."],
    ["Si un corredor hace 20 km semanales, el máximo recomendable la semana siguiente es…", ["40 km", "22 km", "30 km", "25 km"], 1, "Aumentar como mucho un 10 %."],
    ["Una persona se desploma, no responde y no respira con normalidad. Lo primero tras proteger es…", ["darle agua", "llamar al 112 y pedir un DEA", "ponerla de lado", "esperar"], 1, "Y empezar la RCP."],
    ["Una persona inconsciente que respira normalmente debe colocarse…", ["boca abajo", "en posición lateral de seguridad", "sentada", "de pie"], 1, "Evita la obstrucción de la vía aérea."],
    ["¿Qué medida mejora más la higiene del sueño de un adolescente?", ["Tomar una bebida energética", "Apagar las pantallas una hora antes de dormir", "Hacer deporte intenso a medianoche", "Dormir mucho solo el fin de semana"], 1, "La luz de las pantallas retrasa la melatonina."],
    ["El monóxido de carbono del tabaco reduce el rendimiento porque…", ["daña el músculo", "bloquea la hemoglobina", "baja la glucosa", "aumenta la flexibilidad"], 1, "Menos oxígeno transportado."],
  ],
  feynman: ["Qué significa la definición de salud de la OMS", "Qué son los determinantes de la salud y cuál pesa más", "Qué diferencia hay entre ser activo y ser sedentario", "Cómo funciona la supercompensación y qué principios del entrenamiento se derivan", "Por qué el sueño es imprescindible para el rendimiento y la salud", "Qué hay que hacer ante una persona que no responde y no respira"],
  mapa: ["HÁBITOS SALUDABLES", [["Salud", "OMS · determinantes · prevención"], ["Actividad física", "60 min · FITT · supercompensación"], ["Descanso", "sueño · postura · salud mental"], ["Riesgos", "adicciones · pantallas · PAS"]]],
  tarjetas: [
    ["Salud (OMS)", "Bienestar físico, mental y social, no solo ausencia de enfermedad."],
    ["Determinantes", "Biología, medio ambiente, estilo de vida y sistema sanitario."],
    ["Hábito", "Conducta repetida: señal, rutina y recompensa."],
    ["Sedentarismo", "Estar sentado o tumbado despierto con muy bajo gasto."],
    ["Recomendación OMS", "60 min diarios moderada-vigorosa y fuerza 3 días/semana."],
    ["Condición física saludable", "Resistencia, fuerza, flexibilidad y composición corporal."],
    ["Supercompensación", "Tras carga y recuperación, el nivel sube por encima del inicial."],
    ["FITT", "Frecuencia, intensidad, tiempo y tipo."],
    ["Progresión", "Aumentar las cargas poco a poco (≈ 10 % semanal)."],
    ["Sueño adolescente", "8-10 h; pantallas fuera una hora antes."],
    ["Salud mental", "Moverse, dormir, relajarse y pedir ayuda; 024."],
    ["PAS y RCP", "Proteger, avisar al 112, socorrer; 100-120 compresiones/min."],
  ],
  ejemplos: [
    ["Analiza con el modelo de Lalonde el caso de una persona con antecedentes familiares de diabetes, que vive en una ciudad con mucho tráfico, come a menudo comida rápida y tiene un centro de salud cerca.", ["Biología: antecedentes familiares (no modificable).", "Medio ambiente: contaminación y poco espacio para caminar.", "Estilo de vida: alimentación poco saludable y, probablemente, sedentarismo.", "Sistema sanitario: buen acceso, útil para la detección precoz."], "El factor más modificable y decisivo es su estilo de vida: alimentación y actividad física."],
    ["Calcula los minutos de actividad moderada-vigorosa semanales de un estudiante que va andando al instituto (2 × 15 min al día, 5 días), hace 3 entrenamientos de 75 min y juega un partido de 60 min. ¿Cumple la recomendación?", ["Desplazamientos: 30 · 5 = 150 min.", "Entrenamientos: 3 · 75 = 225 min.", "Partido: 60 min.", "Total: 435 min; la recomendación es 60 · 7 = 420 min."], "Sí: 435 min semanales (media de 62 min/día). Debe incluir fuerza al menos 3 días."],
    ["Diseña la carga FITT de un plan de resistencia aeróbica de iniciación para una persona de 16 años con 70 lpm en reposo.", ["Frecuencia: 3 días por semana, no consecutivos.", "Intensidad: 60-70 % de la FC de reserva: FCmáx 204; 70 + 0,6 · 134 = 150 a 70 + 0,7 · 134 = 164 lpm.", "Tiempo: 20 min las dos primeras semanas, subiendo 5 min cada dos semanas.", "Tipo: carrera suave alternada con marcha, bici o natación."], "3 días · 150-164 lpm · 20-35 min · actividades aeróbicas variadas."],
    ["Explica con la supercompensación qué ocurre si un deportista entrena intensamente todos los días sin descanso.", ["Cada sesión produce fatiga.", "El siguiente estímulo llega antes de completar la recuperación.", "La fatiga se acumula, el rendimiento baja y no aparece la supercompensación.", "Con el tiempo puede llegar el sobreentrenamiento y las lesiones."], "Sin recuperación no hay mejora: el descanso forma parte del entrenamiento."],
    ["Una estudiante se acuesta a la 1:30 por usar el móvil y se levanta a las 7:15. Calcula sus horas de sueño, compáralas con la recomendación y propón tres cambios.", ["Sueño: 5 h 45 min.", "Recomendación: 8-10 h; le faltan más de 2 horas cada noche (más de 11 h a la semana).", "Cambios: dejar el móvil fuera del dormitorio a las 22:30; horario fijo de acostarse a las 23:00; luz natural por la mañana y evitar cafeína por la tarde."], "Duerme 5,75 h, muy por debajo de lo necesario; las pantallas son el principal factor modificable."],
    ["En el patio, un compañero se desploma tras correr, no responde y no respira con normalidad. Describe la actuación.", ["Proteger: comprobar que no hay peligro.", "Comprobar respuesta y respiración (máximo 10 s).", "Avisar: pedir a alguien que llame al 112 y traiga el DEA del centro.", "Socorrer: compresiones en el centro del pecho a 100-120/min, 5-6 cm, sin interrupciones (30:2 si se sabe ventilar).", "Al llegar el DEA, encenderlo y seguir sus instrucciones hasta que llegue la ayuda."], "Parada cardiorrespiratoria: PAS, 112, RCP de calidad y DEA cuanto antes."],
  ],
  errores: [
    "Pensar que estar sano es solo no estar enfermo.",
    "Creer que entrenar una hora compensa pasar el resto del día sentado sin pausas.",
    "Pensar que «cuanto más, mejor» en el entrenamiento: sin recuperación no hay supercompensación.",
    "Recuperar el sueño perdido solo durmiendo mucho el fin de semana: altera el reloj biológico.",
    "Creer que los vapeadores son inofensivos: contienen nicotina y otras sustancias perjudiciales.",
    "No actuar ante una parada por miedo a hacerlo mal: hacer compresiones siempre es mejor que no hacer nada.",
  ],
  ejercicios: {
    b: [
      ["Escribe la definición de salud de la OMS y explica sus tres dimensiones.", "Estado de completo bienestar físico, mental y social, no solo ausencia de enfermedad. Física (cuerpo), mental (emociones y pensamiento) y social (relaciones)."],
      ["Nombra los cuatro determinantes de la salud del modelo de Lalonde.", "Biología humana, medio ambiente, estilo de vida y sistema sanitario."],
      ["Diferencia actividad física, ejercicio físico y deporte.", "Actividad física: cualquier movimiento con gasto energético. Ejercicio: actividad planificada para mejorar la condición física. Deporte: actividad reglada, a menudo competitiva."],
      ["Indica la recomendación de la OMS de actividad física para adolescentes.", "Al menos 60 min diarios de actividad moderada-vigorosa, vigorosa y de fuerza 3 días a la semana, y limitar el sedentarismo."],
      ["Pon tres ejemplos de conducta sedentaria.", "Ver series, jugar a videojuegos sentado, estar sentado en clase o en el coche."],
      ["Cita cuatro beneficios de la actividad física regular.", "Mejora la salud cardiovascular, aumenta la masa ósea, mejora el control de la glucosa y reduce la ansiedad (también mejora la atención y el sueño)."],
      ["Nombra los componentes de la condición física saludable.", "Resistencia cardiorrespiratoria, fuerza y resistencia muscular, flexibilidad y composición corporal."],
      ["Explica qué significan las siglas FITT.", "Frecuencia, intensidad, tiempo y tipo de actividad."],
      ["Indica las tres partes de una sesión de ejercicio.", "Calentamiento, parte principal y vuelta a la calma."],
      ["Cita cuatro normas de higiene postural.", "Espalda apoyada al sentarse, pantalla a la altura de los ojos, mochila con dos asas y poco peso, levantar cargas flexionando las piernas."],
      ["¿Cuántas horas debe dormir un adolescente? Cita dos consecuencias de dormir poco.", "8-10 horas. Peor atención y rendimiento, más lesiones, irritabilidad (y más apetito)."],
      ["¿Qué significa PAS?", "Proteger, avisar (112) y socorrer."],
    ],
    m: [
      ["Explica por qué el estilo de vida es el determinante más relevante y por qué no depende solo de la voluntad.", "Porque es el que más influye y el más modificable; pero está condicionado por factores sociales (dinero, educación, entorno, tiempo), así que la salud es también responsabilidad colectiva."],
      ["Explica el ciclo del hábito y aplícalo para cambiar el hábito de ir en patinete eléctrico al instituto por ir andando.", "Señal: salir de casa. Rutina: ir andando con un amigo. Recompensa: charlar y llegar despejado. Preparar el entorno (salir 10 min antes) facilita el cambio."],
      ["¿Por qué se dice que una persona puede ser activa y sedentaria a la vez?", "Porque puede cumplir el ejercicio recomendado y pasar muchas horas seguidas sentada; el sedentarismo prolongado es un riesgo independiente."],
      ["Explica la relación dosis-respuesta entre actividad física y salud.", "Cualquier actividad aporta beneficios; los mayores se obtienen al pasar de nada a algo; a volúmenes muy altos se estabilizan y aumentan los riesgos."],
      ["Describe tres pruebas para evaluar la condición física saludable y qué miden.", "Course Navette (resistencia aeróbica, VO₂ máx), salto horizontal o dinamometría (fuerza), flexión de tronco sentado (flexibilidad)."],
      ["Explica el principio de supercompensación con un dibujo o esquema.", "Carga → fatiga (baja el nivel) → recuperación → supercompensación (nivel superior) → si no hay nuevo estímulo, vuelta al nivel inicial."],
      ["Explica los principios de especificidad e individualización con ejemplos.", "Especificidad: se mejora lo que se entrena (correr mejora la carrera). Individualización: dos personas con el mismo plan responden distinto según edad, nivel y genética."],
      ["Indica cómo controlar la intensidad del ejercicio sin pulsómetro.", "Con la escala de esfuerzo percibido de 0 a 10 y con el test del habla (moderada: se puede hablar pero no cantar)."],
      ["Explica por qué la mejor postura es «la siguiente».", "Mantener cualquier postura mucho tiempo sobrecarga las mismas estructuras; cambiar de postura con frecuencia reparte las cargas y activa la circulación."],
      ["Explica por qué a los adolescentes les cuesta dormirse pronto y qué consecuencias tiene con los horarios escolares.", "Su reloj biológico se retrasa y la melatonina se segrega más tarde; al tener que madrugar, acumulan falta de sueño."],
      ["Cita cinco medidas de higiene del sueño.", "Horario regular, pantallas fuera una hora antes, dormitorio oscuro y fresco, evitar cafeína por la tarde, ejercicio regular (y luz natural por la mañana)."],
      ["Explica cómo afectan las redes sociales a la salud mental y propón dos usos saludables.", "La comparación con imágenes idealizadas daña la autoestima y la imagen corporal, y el uso nocturno quita sueño. Usos saludables: limitar el tiempo y silenciar notificaciones; seguir cuentas que aporten y no usarlas en la cama."],
      ["Explica por qué el alcohol empeora el rendimiento y la recuperación deportiva.", "Deprime el SNC (peor coordinación y reacción), deshidrata, altera el sueño y la síntesis de proteínas musculares y daña el hígado."],
      ["Describe la posición lateral de seguridad y cuándo se usa.", "Persona de lado con la pierna de arriba flexionada y la cabeza ligeramente hacia atrás para mantener la vía aérea abierta. Se usa en personas inconscientes que respiran con normalidad."],
    ],
    a: [
      ["Diseña tu plan semanal de hábitos saludables (actividad, sueño, alimentación y ocio) con objetivos concretos y medibles.", "Ejemplo: 60 min diarios de actividad (ir andando, 3 entrenamientos, fin de semana en bici), fuerza lunes, miércoles y viernes, pausas activas cada hora de estudio, acostarse a las 23:00 sin móvil, cinco raciones de fruta y verdura y registro semanal en una tabla."],
      ["Un adolescente quiere empezar a correr y en la primera semana corre 40 minutos diarios. A los diez días tiene dolor en la tibia. Explica qué principios ha incumplido y diseña un plan alternativo.", "Ha incumplido la progresión, la recuperación y la individualización (posible periostitis por sobrecarga). Plan: 3 días por semana, alternar 1 min de carrera y 2 de marcha durante 20 min y aumentar el tiempo de carrera un 10 % por semana; fuerza de piernas y calzado adecuado."],
      ["Relaciona el sedentarismo con al menos cuatro sistemas del cuerpo estudiados en el curso.", "Cardiovascular (peor VO₂, más presión), locomotor (pérdida de masa ósea y muscular, dolor de espalda), metabolismo (resistencia a la insulina, aumento de grasa), nervioso (peor atención y ánimo)."],
      ["Calcula el déficit de sueño semanal de alguien que duerme 6,5 h entre semana y 10 h el fin de semana, frente a 9 h recomendadas. ¿Compensa el fin de semana?", "Entre semana: 5 · 2,5 = 12,5 h de déficit. Fin de semana: 2 · 1 = 2 h de exceso. Déficit neto: 10,5 h. No compensa, y además desajusta el reloj biológico."],
      ["Analiza la publicidad de una bebida energética dirigida a jóvenes deportistas desde el punto de vista de la salud.", "Asocia el producto al éxito deportivo y la energía, pero contiene mucha cafeína y azúcar: taquicardia, nerviosismo, insomnio, caries y exceso de energía; no hidrata mejor que el agua y está desaconsejada en menores."],
      ["Explica por qué es tan importante que haya desfibriladores y personas formadas en RCP en los centros educativos y deportivos.", "En la parada cardíaca, cada minuto sin RCP ni desfibrilación reduce mucho la supervivencia; la ambulancia tarda varios minutos. La RCP mantiene algo de flujo al cerebro y el DEA puede restablecer el ritmo: la actuación de testigos multiplica la supervivencia."],
      ["Diseña una campaña para reducir el uso del móvil en el patio con base en lo estudiado sobre hábitos, actividad física y salud mental.", "Objetivo concreto (patio sin móviles dos días a la semana), alternativas atractivas (juegos, música, deporte), cambio del entorno (material disponible), recompensa social, datos sobre beneficios y evaluación con una encuesta antes y después."],
      ["Explica cómo el estrés crónico puede afectar al rendimiento académico y deportivo desde el sistema endocrino y nervioso.", "El cortisol elevado mantenido altera el sueño, la memoria y el sistema inmunitario; la activación simpática continua produce fatiga y tensión muscular; resultado: peor concentración, más enfermedades y lesiones."],
      ["Una amiga muestra cambios: duerme mal, ha dejado el deporte, se aísla y dice que nada tiene sentido. ¿Cómo actuarías?", "Escucharla sin juzgar, mostrar apoyo, animarla a hablar con un adulto de confianza o un profesional, y comunicarlo a un adulto si hay riesgo; si habla de hacerse daño, buscar ayuda inmediata (112 o 024)."],
      ["Argumenta qué cambiarías en tu centro educativo para que los hábitos saludables fueran más fáciles, relacionándolo con los determinantes de la salud.", "Medio ambiente: patios activos, fuentes de agua, aparcamiento de bicis; estilo de vida: descansos activos en clase, menús saludables en la cafetería; sistema sanitario: formación en RCP y DEA; determinantes sociales: actividades deportivas gratuitas por la tarde."],
    ],
  },
  glosario: [
    ["Salud", "Estado de bienestar físico, mental y social, no solo ausencia de enfermedad."],
    ["Calidad de vida", "Percepción personal del propio bienestar."],
    ["Determinantes de la salud", "Factores que influyen en el estado de salud."],
    ["Estilo de vida", "Conjunto de hábitos personales que influyen en la salud."],
    ["Hábito", "Conducta que se repite hasta hacerse casi automática."],
    ["Actividad física", "Cualquier movimiento corporal con gasto de energía."],
    ["Sedentarismo", "Estar sentado o tumbado despierto con muy bajo gasto energético."],
    ["Condición física", "Capacidades que permiten realizar actividades físicas con eficacia."],
    ["Supercompensación", "Mejora del nivel por encima del inicial tras carga y recuperación."],
    ["Progresión", "Aumento gradual de las cargas de entrenamiento."],
    ["Reversibilidad", "Pérdida de las adaptaciones al dejar de entrenar."],
    ["FITT", "Frecuencia, intensidad, tiempo y tipo de la actividad."],
    ["Higiene postural", "Normas para mantener posturas que no sobrecarguen el cuerpo."],
    ["Higiene del sueño", "Hábitos que favorecen un sueño suficiente y de calidad."],
    ["Estrés", "Respuesta del organismo ante una exigencia o amenaza."],
    ["Adicción", "Dependencia de una sustancia o conducta pese a sus daños."],
    ["RCP", "Reanimación cardiopulmonar: compresiones torácicas y ventilaciones."],
    ["DEA", "Desfibrilador externo automático."],
  ],
  situacion: {
    titulo: "Reto 30 días: mi plan de vida saludable",
    reto: "Cada estudiante diseñará, aplicará durante 30 días y evaluará un plan personal de mejora de hábitos (actividad física, sedentarismo, sueño, alimentación y bienestar), y el grupo elaborará conclusiones colectivas para el centro.",
    pasos: [
      "Registrad durante una semana vuestros hábitos actuales: minutos de actividad, horas sentados, sueño, pantallas y alimentación.",
      "Comparad los datos con las recomendaciones y elegid dos o tres objetivos concretos, medibles y realistas.",
      "Diseñad el plan con las variables FITT y los principios del entrenamiento, y medid vuestra condición física inicial con pruebas sencillas.",
      "Aplicad el plan 30 días registrando el cumplimiento y las sensaciones (energía, sueño, ánimo).",
      "Repetid las mediciones, analizad los cambios y compartid de forma anónima los resultados del grupo.",
    ],
    producto: "Un diario del reto con registros, gráficas antes y después y una reflexión personal, y un póster colectivo con recomendaciones para el centro.",
    evaluacion: [
      "El diagnóstico inicial y los objetivos son concretos y están bien justificados.",
      "El plan aplica correctamente las recomendaciones y los principios del entrenamiento.",
      "Los registros y las mediciones son rigurosos y se analizan con sentido crítico.",
      "La reflexión relaciona los cambios con los contenidos de todo el curso.",
    ],
  },
  familias: [
    "Planificad juntos una actividad física semanal en familia (paseo, ruta en bici, baile).",
    "Acordad una «hora sin pantallas» antes de dormir para todos.",
    "Comprobad dónde está el desfibrilador más cercano y repasad el teléfono 112.",
    "Hablad abiertamente de cómo os sentís y de cómo gestionáis el estrés cada uno.",
  ],
  saberes: B.SAB("Hábitos saludables: concepto y determinantes de la salud, actividad física y sedentarismo, condición física saludable y principios del entrenamiento, planificación segura de la práctica, higiene postural, sueño y descanso, salud mental y gestión del estrés, adicciones y uso de la tecnología, y primeros auxilios"),
  ideas: [
    "Medir con el móvil los pasos y el tiempo sentado de la clase durante una semana y comparar con las recomendaciones.",
    "Realizar la batería de pruebas de condición física saludable al principio y al final del trimestre.",
    "Organizar un taller práctico de RCP y uso del DEA con maniquíes.",
    "Debatir sobre los determinantes sociales de la salud a partir de datos del propio municipio.",
  ],
  fuentes: [
    B.FUENTES.OMS,
    { t: "Ministerio de Sanidad: estilos de vida saludable", url: "https://estilosdevidasaludable.sanidad.gob.es/" },
    B.FUENTES.WIKI("Salud", "Salud"),
  ],
});
