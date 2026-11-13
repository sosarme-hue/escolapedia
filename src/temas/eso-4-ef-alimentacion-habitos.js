// Educación Física 4º ESO. Tema nivel libro. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, rueda, flujo, figCols, piramide, barras } = require("./_hum");
const { escalon, B, QS, EJ, EX, rejilla, zonas, RD } = require("./_eso4L13");

module.exports = {
  materia: "Educación Física",
  curso: "4-eso",
  titulo: "Alimentación y hábitos saludables",
  minutos: 110,
  objetivos: [
    "Conocer los nutrientes, sus funciones y el balance energético",
    "Diseñar menús equilibrados con el modelo del plato saludable y la dieta mediterránea",
    "Leer etiquetas nutricionales y valorar críticamente los ultraprocesados y la publicidad",
    "Adaptar la alimentación y la hidratación a la actividad física",
    "Adoptar hábitos saludables (sueño, postura, pantallas) y rechazar las conductas de riesgo",
  ],
  claves: ["nutrientes", "kcal", "balance energético", "plato saludable", "dieta mediterránea", "etiqueta", "ultraprocesados", "hidratación", "hábitos"],
  pregunta: {
    texto: "Un anuncio dice que una bebida «para deportistas» te dará energía para el partido de esta tarde. ¿La necesitas?",
    respuesta: "Para una actividad de menos de una hora, casi nunca. Lo que necesitas es haber comido bien y <mark>beber agua</mark>. Las bebidas deportivas tienen sentido en esfuerzos largos e intensos; para el día a día aportan azúcar que no hace falta. Saber de alimentación te protege de la publicidad.",
  },
  lectura: {
    titulo: "La dieta que no es una dieta",
    html: `<p>En los años cincuenta, el investigador estadounidense Ancel Keys se hizo una pregunta curiosa: ¿por qué en algunos pueblos de Creta, del sur de Italia o de España había muchos menos infartos que en Estados Unidos, a pesar de ser más pobres? Durante años estudió la forma de vivir de siete países y encontró una respuesta: aquellas personas comían mucha verdura, fruta, legumbres, pan y aceite de oliva, poca carne y pocos dulces; caminaban y trabajaban a diario, y compartían las comidas en familia. Keys llamó a ese estilo de vida <i>dieta mediterránea</i>.</p><p>Hoy, la dieta mediterránea es Patrimonio Cultural Inmaterial de la Humanidad y uno de los patrones de alimentación más estudiados y recomendados del mundo. Sin embargo, paradójicamente, en España cada vez se sigue menos: aumentan el consumo de ultraprocesados, bebidas azucaradas y comida rápida, y el sedentarismo. Casi uno de cada tres niños y adolescentes tiene sobrepeso u obesidad. La buena noticia es que no hacen falta dietas milagro: comer bien, moverse, dormir lo suficiente y evitar el tabaco y el alcohol son decisiones que puedes tomar desde hoy y que te acompañarán toda la vida.</p>`,
  },
  bloques: [
    B("1.1 Alimentación, nutrición y nutrientes", `<p>Aunque se usen como sinónimos, no son lo mismo. La <b>alimentación</b> es el acto voluntario de elegir, preparar y comer alimentos; depende de nuestros gustos, nuestra cultura y nuestra economía, y por eso se puede educar. La <b>nutrición</b> es el proceso involuntario por el que el cuerpo digiere, absorbe y utiliza los <mark>nutrientes</mark> que contienen los alimentos.</p><p>Los nutrientes se clasifican según su función:</p>${tabla(["Nutriente", "Función principal", "Alimentos"], [["Hidratos de carbono", "energética: principal combustible del cuerpo y del cerebro", "cereales, pan, pasta, arroz, patata, legumbres, fruta"], ["Grasas o lípidos", "energética y de reserva; forman membranas y transportan vitaminas", "aceite de oliva, frutos secos, pescado azul, aguacate"], ["Proteínas", "plástica o estructural: construyen y reparan tejidos", "legumbres, huevos, pescado, carne, lácteos, frutos secos"], ["Vitaminas", "reguladora: controlan reacciones del organismo", "frutas, verduras, hortalizas"], ["Minerales", "reguladora y estructural (calcio de los huesos, hierro de la sangre)", "lácteos, legumbres, verduras, frutos secos"], ["Agua", "transporte, regulación de la temperatura, eliminación de desechos", "agua, frutas, verduras"]])}<p>Además, la <b>fibra</b>, presente en vegetales, legumbres y cereales integrales, no se digiere pero es imprescindible para el tránsito intestinal y la salud de la microbiota. Ningún alimento contiene todos los nutrientes en la cantidad necesaria (salvo la leche materna para el bebé), por eso hay que comer de forma <b>variada</b>.</p>`,
      rejilla("Funciones de los nutrientes", [["Energética", "hidratos y grasas"], ["Plástica", "proteínas"], ["Reguladora", "vitaminas y minerales"], ["Agua", "transporte y calor"]])),
    B("1.2 La energía y el balance energético", `<p>Los alimentos aportan <b>energía</b>, que se mide en <mark>kilocalorías (kcal)</mark>. Cada gramo de nutriente aporta una cantidad distinta: <b>hidratos de carbono 4 kcal</b>, <b>proteínas 4 kcal</b> y <b>grasas 9 kcal</b>. Las vitaminas, los minerales y el agua no aportan energía. El alcohol aporta 7 kcal por gramo sin ningún nutriente útil.</p><p>El cuerpo gasta energía de tres formas: el <b>metabolismo basal</b> (la energía necesaria para mantener las funciones vitales en reposo: respirar, latir, mantener la temperatura), que supone un 60-70 % del gasto; la <b>actividad física</b>, que es la parte que más varía de una persona a otra; y la <b>digestión</b> de los alimentos (un 10 %). Un adolescente necesita, de media, entre <b>2.000 y 3.000 kcal</b> al día, según su sexo, tamaño, crecimiento y nivel de actividad.</p><p>El <b>balance energético</b> compara la energía que se ingiere con la que se gasta. Si se ingiere más de lo que se gasta (balance positivo), el exceso se almacena como grasa; si se ingiere menos (balance negativo), se consumen las reservas. Para mantener un peso saludable, el balance debe ser equilibrado. Pero la calidad importa tanto como la cantidad: 200 kcal de refresco no equivalen a 200 kcal de lentejas, que aportan proteínas, fibra, hierro y saciedad.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Balanza energética: a un lado la energía que entra con los alimentos y al otro la que se gasta en metabolismo basal, actividad física y digestión">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 40 V 140 M 112 150 H 148 L 130 136 Z" stroke="var(--ink)" stroke-width="4" fill="var(--ink)" stroke-linejoin="round"/>
        <path d="M40 54 H 220" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>
        <path d="M40 54 L 26 90 H 94 L 80 54 M 180 54 L 166 90 H 234 L 220 54" stroke="var(--muted)" stroke-width="2" fill="none"/>
        <rect x="32" y="74" width="56" height="14" rx="4" fill="var(--leaf)"/>
        <rect x="172" y="62" width="56" height="8" rx="3" fill="var(--pen)"/><rect x="172" y="70" width="56" height="9" rx="3" fill="var(--red)"/><rect x="172" y="79" width="56" height="9" rx="3" fill="var(--sun)"/>
        <g ${F} font-size="10.5" font-weight="700" text-anchor="middle"><text x="60" y="110" fill="var(--leaf)">ENTRA:</text><text x="60" y="124" fill="var(--leaf)">alimentos</text><text x="206" y="110" fill="var(--ink)">SALE:</text><text x="206" y="124" fill="var(--pen)">basal 60-70 %</text><text x="206" y="138" fill="var(--red)">actividad</text><text x="206" y="152" fill="var(--sun)">digestión 10 %</text></g>
      </svg>`),
    B("1.3 La dieta equilibrada y el plato saludable", `<p>Una <mark>dieta equilibrada</mark> es la que aporta la energía y todos los nutrientes necesarios en las proporciones adecuadas. Las recomendaciones actuales indican que, de la energía total, un <b>50-55 %</b> debe proceder de los hidratos de carbono (preferiblemente complejos e integrales, con menos del 10 % de azúcares libres), un <b>30-35 %</b> de las grasas (sobre todo insaturadas, como el aceite de oliva) y un <b>12-15 %</b> de las proteínas.</p><p>Para llevarlo a la práctica es muy útil el modelo del <b>plato saludable</b> (de la Universidad de Harvard), que reparte el plato así:</p>${tabla(["Parte del plato", "Qué incluye", "Consejo"], [["La mitad", "verduras y hortalizas (y algo de fruta)", "variedad de colores; las patatas no cuentan como verdura"], ["Un cuarto", "cereales integrales", "pan, arroz, pasta integrales, avena, quinoa"], ["Un cuarto", "proteína saludable", "legumbres, pescado, huevos, aves; limitar carnes rojas y procesadas"], ["Aparte", "aceite de oliva para cocinar y aliñar", "con moderación"], ["Bebida", "agua", "evitar bebidas azucaradas"]])}<p>Además, conviene repartir la alimentación en <b>4-5 comidas</b> al día, sin saltarse el desayuno: un buen desayuno (lácteo, cereal integral y fruta) mejora la atención y el rendimiento en clase. Y comer despacio, sentado, sin pantallas y, si es posible, en compañía.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Plato saludable: mitad verduras y frutas, un cuarto cereales integrales y un cuarto proteína saludable; agua y aceite de oliva al lado">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="112" cy="90" r="70" fill="var(--card)" stroke="var(--line)" stroke-width="4"/>
        <path d="M112 90 L 112 24 A 66 66 0 0 0 112 156 Z" fill="var(--leaf)"/>
        <path d="M112 90 L 112 24 A 66 66 0 0 1 178 90 Z" fill="var(--sun)"/>
        <path d="M112 90 L 178 90 A 66 66 0 0 1 112 156 Z" fill="var(--red)"/>
        <g ${F} font-size="10.5" font-weight="700" fill="#fff" text-anchor="middle"><text x="80" y="86">verduras</text><text x="80" y="100">y frutas</text><text x="144" y="66">cereales</text><text x="144" y="122">proteína</text></g>
        <rect x="206" y="40" width="22" height="46" rx="5" fill="var(--water)" fill-opacity=".5" stroke="var(--bac)" stroke-width="2"/><text x="217" y="104" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bac)" ${F}>agua</text>
        <path d="M210 124 h 14 v 30 h -14 z" fill="var(--sun)" fill-opacity=".6" stroke="var(--sun)" stroke-width="2"/><text x="217" y="170" text-anchor="middle" font-size="10" font-weight="700" fill="var(--sun)" ${F}>aceite</text>
      </svg>`),
    B("1.4 La dieta mediterránea", `<p>La <mark>dieta mediterránea</mark> es más que una lista de alimentos: es un estilo de vida que incluye la forma de comprar, cocinar, comer y convivir. Fue reconocida por la UNESCO como Patrimonio Cultural Inmaterial de la Humanidad en 2010. Sus rasgos principales son:</p>${tabla(["Frecuencia", "Alimentos"], [["Diaria (en cada comida)", "verduras, hortalizas, frutas, cereales (mejor integrales), aceite de oliva virgen extra, agua"], ["Diaria", "lácteos (preferentemente yogur y queso), frutos secos, especias y hierbas aromáticas"], ["Semanal", "legumbres (3-4 veces), pescado (3-4 veces, sobre todo azul), huevos (3-4), carne blanca (2)"], ["Ocasional", "carne roja y procesada, dulces, bollería, bebidas azucaradas"]])}<p>Su base son los <b>productos frescos, de temporada y de proximidad</b>, cocinados de forma sencilla (al vapor, a la plancha, guisos), y el aceite de oliva como grasa principal. A ello se suman la <b>actividad física diaria</b>, el <b>descanso</b> y la <b>convivencia</b>: comer en familia o con amigos. Numerosos estudios, como el español PREDIMED, han demostrado que esta dieta reduce el riesgo de enfermedades cardiovasculares, diabetes tipo 2 y algunos tipos de cáncer. Además, es más <b>sostenible</b>: consume menos recursos y genera menos emisiones que una dieta basada en carne y alimentos procesados.</p>`,
      escalon("Pirámide mediterránea", [["ocasional: dulces", "var(--red)"], ["semanal: pescado, legumbre", "var(--sun)"], ["diario: lácteos, frutos secos", "var(--bac)"], ["cada comida: verdura, fruta, cereal", "var(--leaf)"]]),
      { id: "00Sx3nKdb-8", titulo: "Dieta mediterránea", canal: "Ministerio de Agricultura, Pesca y Alimentación", vistas: 40141, megusta: 0 }),
    B("1.5 Ultraprocesados y publicidad", `<p>Según la <b>clasificación NOVA</b>, los alimentos se agrupan por su grado de procesamiento: <b>sin procesar o mínimamente procesados</b> (fruta, verdura, legumbres, huevos, leche, carne o pescado frescos), <b>ingredientes culinarios</b> (aceite, sal, azúcar), <b>procesados</b> (conservas, quesos, pan artesano: alimentos con algún ingrediente añadido) y <mark>ultraprocesados</mark>.</p><p>Los ultraprocesados son productos industriales elaborados con muchos ingredientes, la mayoría extraídos de alimentos o creados en laboratorio (jarabes de glucosa, aceites refinados, aromas, colorantes, edulcorantes), que apenas contienen alimento real. Ejemplos: refrescos, bollería industrial, galletas, cereales azucarados, snacks salados, embutidos de baja calidad, comida rápida y precocinados. Suelen ser muy ricos en <b>azúcar, sal y grasas de mala calidad</b>, pobres en fibra y nutrientes, y están diseñados para ser muy apetecibles y fáciles de comer en exceso. Su consumo elevado se asocia a obesidad, diabetes, enfermedades cardiovasculares y peor salud mental.</p><p>La <b>publicidad</b> de estos productos se dirige especialmente a niños y adolescentes con personajes, deportistas famosos, influencers, regalos o mensajes como «fuente de energía» o «con vitaminas». Hay que leerla con espíritu crítico: un refresco no mejora tu rendimiento por aparecer en un anuncio con un futbolista. Un truco sencillo: cuanto más larga es la lista de ingredientes y más difíciles de pronunciar, más procesado es el producto.</p>`,
      zonas("Grado de procesamiento (NOVA)", [["sin procesar: fruta, legumbre", "var(--leaf)"], ["ingredientes: aceite, sal", "var(--bac)"], ["procesados: conservas, queso", "var(--sun)"], ["ultraprocesados: refrescos, bollería", "var(--red)"]], "cuanto más arriba, menos frecuente")),
    B("1.6 Leer la etiqueta de un alimento", `<p>La <mark>etiqueta</mark> de un alimento envasado es la mejor herramienta para elegir bien. Por ley debe incluir: denominación, lista de ingredientes, alérgenos destacados, cantidad neta, fecha de consumo, conservación, origen y la <b>información nutricional</b> por 100 g o 100 ml.</p><p>Claves para leerla: <b>1. Lista de ingredientes</b>: aparecen ordenados de mayor a menor cantidad. Si el azúcar (o sus muchos nombres: jarabe de glucosa, dextrosa, sacarosa, fructosa, miel, concentrado de zumo) aparece entre los primeros, el producto es muy azucarado. <b>2. Información nutricional por 100 g</b>: permite comparar productos. Como referencia, se considera mucho <b>azúcar</b> más de 15 g/100 g, mucha <b>grasa saturada</b> más de 5 g/100 g y mucha <b>sal</b> más de 1,5 g/100 g. <b>3. Fechas</b>: la fecha de <b>caducidad</b> («consumir antes de») se usa en alimentos perecederos y no debe superarse; la de <b>consumo preferente</b> indica que, pasada la fecha, el alimento puede perder calidad pero es seguro, lo que ayuda a evitar el desperdicio.</p><p>El <b>Nutri-Score</b>, un semáforo de letras de la A (verde) a la E (rojo), resume la calidad nutricional, aunque tiene limitaciones: compara productos dentro de una misma categoría y no tiene en cuenta el grado de procesamiento. Desconfía de reclamos como «light», «natural» o «0 %», que no siempre significan saludable.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Etiqueta nutricional por 100 gramos con azúcares, grasa saturada y sal marcados y umbrales de mucho">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="26" y="16" width="208" height="148" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <text x="40" y="36" font-size="12" font-weight="700" fill="var(--ink)" ${D}>Información nutricional / 100 g</text>
        <path d="M36 44 H 224" stroke="var(--ink)" stroke-width="2"/>
        ${[["Energía", "480 kcal", "var(--ink)", ""], ["Grasas", "22 g", "var(--ink)", ""], ["· saturadas", "9 g", "var(--red)", "> 5 g"], ["Hidratos", "62 g", "var(--ink)", ""], ["· azúcares", "35 g", "var(--red)", "> 15 g"], ["Proteínas", "6 g", "var(--ink)", ""], ["Sal", "0,6 g", "var(--leaf)", "< 1,5 g"]].map(([n, v, c, u], i) => `<text x="40" y="${62 + i * 15}" font-size="10.5" font-weight="700" fill="${c}" ${F}>${n}</text><text x="150" y="${62 + i * 15}" font-size="10.5" font-weight="700" text-anchor="end" fill="${c}" ${F}>${v}</text><text x="220" y="${62 + i * 15}" font-size="10" text-anchor="end" fill="${c}" ${F}>${u}</text>`).join("")}
      </svg>`,
      { id: "DDnETndcY2A", titulo: "10 reglas para leer la etiqueta de un alimento", canal: "Doctablet", vistas: 295541, megusta: 0 }),
    B("1.7 Alimentación y actividad física", `<p>Las personas que hacen deporte necesitan más energía y, sobre todo, organizar bien <mark>cuándo y qué comen</mark>. Para un adolescente que entrena varias veces por semana, una dieta mediterránea variada cubre casi siempre todas las necesidades, sin suplementos.</p>${tabla(["Momento", "Recomendación", "Ejemplo"], [["Antes (2-3 h)", "comida rica en hidratos de carbono, moderada en proteínas y pobre en grasas y fibra (para digerirla bien)", "pasta o arroz con verduras y pollo, pan con tomate y queso fresco"], ["Antes (30-60 min)", "si hace falta, algo ligero y fácil de digerir", "un plátano, un yogur"], ["Durante", "agua; en esfuerzos de más de 60-90 minutos, hidratos de carbono de rápida absorción", "agua, bebida isotónica en esfuerzos largos, fruta"], ["Después (hasta 1-2 h)", "reponer energía e hidratos, proteínas para reparar el músculo, agua", "bocadillo integral, batido de leche con fruta, un plato de legumbres"]])}<p>Las <b>proteínas</b> son importantes para la recuperación, pero no hace falta tomar suplementos: con legumbres, huevos, lácteos y pescado se cubren de sobra. Los <b>suplementos</b> y las «bebidas energéticas» con cafeína y taurina no están recomendados en adolescentes: pueden producir taquicardias, nerviosismo e insomnio. Tampoco se deben seguir <b>dietas restrictivas</b> para «definir» o bajar de peso sin control profesional, porque en la etapa de crecimiento pueden causar déficits, lesiones y alteraciones hormonales.</p>`,
      flujo("Comer para entrenar", ["2-3 h antes|hidratos", "durante|agua", "después|hidratos y|proteína"], "var(--leaf)")),
    B("1.8 La hidratación", `<p>El agua es el componente más abundante del cuerpo (alrededor del 60 % del peso en adultos). Durante el ejercicio, los músculos producen calor y el cuerpo lo elimina mediante el <b>sudor</b>, perdiendo agua y sales minerales (sodio, potasio). Una pérdida de solo un <mark>2 % del peso corporal</mark> en agua reduce el rendimiento físico y la concentración; pérdidas mayores pueden causar calambres, mareos y golpe de calor.</p><p>Recomendaciones de <b>hidratación</b>: beber unos 2 litros de agua al día (más con calor y ejercicio); beber antes del ejercicio (unos 400-500 ml en las 2 horas previas); durante el ejercicio, pequeños sorbos cada 15-20 minutos; y después, reponer lo perdido. Una forma de saber cuánto se ha perdido es <b>pesarse antes y después</b> del entrenamiento: cada kilo perdido equivale a aproximadamente un litro de sudor, y se recomienda beber un 150 % de esa cantidad en las horas siguientes. No hay que esperar a tener sed, porque la sed aparece cuando ya hay cierta deshidratación. El <b>color de la orina</b> es un buen indicador: clara, bien hidratado; oscura, hay que beber más.</p><p>Para la mayoría de actividades de menos de una hora, el <b>agua</b> es suficiente. Las bebidas isotónicas solo son útiles en esfuerzos prolongados o con mucho calor. Los refrescos y bebidas energéticas no hidratan bien y aportan mucho azúcar.</p>`,
      zonas("Color de la orina", [["oscura: bebe ya", "var(--red)"], ["amarilla: bebe más", "var(--sun)"], ["clara: bien hidratado", "var(--bac)"]], "señal sencilla de hidratación"),
      { id: "H9VXV3GYloQ", titulo: "Hidratación y deporte: importancia para las lesiones y el rendimiento", canal: "FisioOnline", vistas: 80588, megusta: 0 }),
    B("1.9 Imagen corporal y trastornos de la conducta alimentaria", `<p>En la adolescencia, el cuerpo cambia mucho y es normal prestarle atención. Pero la presión social, los cánones de belleza poco realistas de la publicidad y las redes sociales (con filtros y fotos retocadas) pueden generar una <mark>imagen corporal distorsionada</mark> e insatisfacción con el propio cuerpo.</p><p>En algunos casos aparecen los <b>trastornos de la conducta alimentaria (TCA)</b>, enfermedades mentales graves que afectan cada vez más a adolescentes, tanto chicas como chicos:</p>${tabla(["Trastorno", "Características"], [["Anorexia nerviosa", "restricción extrema de la comida, miedo intenso a engordar y percepción distorsionada del cuerpo, aunque el peso sea muy bajo"], ["Bulimia nerviosa", "episodios de atracones seguidos de conductas compensatorias (vómitos, laxantes, ejercicio excesivo)"], ["Trastorno por atracón", "ingesta de grandes cantidades de comida con sensación de pérdida de control, sin conductas compensatorias"], ["Vigorexia", "obsesión por ganar masa muscular, con ejercicio excesivo y a veces uso de suplementos o anabolizantes"]])}<p>Señales de alerta: saltarse comidas, comer a escondidas, preocupación constante por el peso o las calorías, hacer ejercicio de forma compulsiva, aislamiento, cambios de humor. Si observas estas señales en ti o en un amigo, <b>pide ayuda</b> a tu familia, al profesorado, al orientador o a un profesional sanitario: los TCA tienen tratamiento y cuanto antes se detecten, mejor. Recuerda que un cuerpo sano puede tener muchas formas y tamaños.</p>`,
      rejilla("Señales de alerta", [["Saltar comidas", "o comer a escondidas"], ["Obsesión", "por peso y calorías"], ["Ejercicio", "compulsivo"], ["Aislamiento", "y cambios de humor"]])),
    B("1.10 El descanso y la higiene postural", `<p>El <b>sueño</b> es un hábito saludable tan importante como la alimentación o el ejercicio. Durante el sueño, el cerebro consolida lo aprendido, el cuerpo repara tejidos y se libera la hormona del crecimiento. Los adolescentes necesitan <mark>entre 8 y 10 horas</mark> de sueño, pero la mayoría duerme menos, sobre todo por el uso de pantallas por la noche: la luz azul retrasa la liberación de melatonina, la hormona del sueño. Dormir poco empeora la memoria, la atención, el estado de ánimo y el rendimiento deportivo, y aumenta el riesgo de lesiones y de sobrepeso. Consejos de <b>higiene del sueño</b>: horarios regulares, dejar las pantallas una hora antes de dormir, habitación oscura y fresca, evitar cafeína y bebidas energéticas, y cenar ligero.</p><p>La <b>higiene postural</b> consiste en adoptar posturas correctas en las actividades diarias para proteger la espalda. Al <b>estar sentado</b>: espalda apoyada en el respaldo, pies en el suelo, pantalla a la altura de los ojos. Al <b>levantar peso</b>: flexionar las rodillas, mantener la espalda recta y el objeto cerca del cuerpo. La <b>mochila</b>: con las dos asas, ajustada a la espalda y con un peso inferior al 10-15 % del peso corporal. Al usar el <b>móvil</b>: subirlo a la altura de los ojos, porque mirar hacia abajo multiplica la carga sobre el cuello. Y, sobre todo, cambiar de postura con frecuencia y fortalecer la musculatura del tronco.</p>`,
      filas("Higiene postural", [["Sentado", "espalda apoyada, pies al suelo", "var(--pen)"], ["Levantar peso", "rodillas flexionadas, espalda recta", "var(--leaf)"], ["Mochila", "dos asas, menos del 10-15 %", "var(--sun)"], ["Móvil", "a la altura de los ojos", "var(--bac)"], ["Dormir", "8-10 horas", "var(--inf)"]])),
    B("1.11 Sedentarismo, pantallas y conductas de riesgo", `<p>El <mark>sedentarismo</mark> (pasar mucho tiempo sentado, con muy poco gasto de energía) es uno de los principales problemas de salud actuales. La OMS recomienda a los adolescentes al menos <b>60 minutos diarios</b> de actividad física moderada o vigorosa y <b>limitar el tiempo de pantallas recreativas</b> (se suele recomendar no superar las 2 horas al día). Romper los periodos sentados cada 30-60 minutos con un poco de movimiento ya es beneficioso. Ir andando o en bici al instituto es una forma sencilla de sumar actividad.</p><p>Otras <b>conductas de riesgo</b> perjudican gravemente la salud y el rendimiento:</p>${tabla(["Sustancia", "Efectos"], [["Tabaco y vapeadores", "nicotina muy adictiva; daño pulmonar y cardiovascular; menos capacidad aeróbica; el vapeo también contiene nicotina y sustancias tóxicas"], ["Alcohol", "daña el cerebro en desarrollo, el hígado; deshidrata, empeora la recuperación y los reflejos; riesgo de accidentes"], ["Cannabis y otras drogas", "afectan a la memoria, la motivación y la salud mental; riesgo de dependencia"], ["Bebidas energéticas", "exceso de cafeína y azúcar: nerviosismo, insomnio, taquicardias"]])}<p>Muchas veces estas conductas empiezan por presión del grupo o por curiosidad. Saber decir que no, elegir amigos que respeten tus decisiones y buscar alternativas de ocio activo (deporte, música, naturaleza) son estrategias que funcionan. Nadie es más adulto por fumar o beber.</p>`,
      barras("Un día saludable (minutos)", [["actividad", 60, "var(--leaf)", "≥ 60 min"], ["pantallas", 120, "var(--red)", "≤ 2 h"], ["sueño", 540, "var(--pen)", "8-10 h"]], 600)),
    B("1.12 Mi estilo de vida saludable", `<p>La salud no depende de un solo factor, sino de la suma de muchos <mark>hábitos</mark> diarios: lo que comemos, cuánto nos movemos, cómo dormimos, cómo gestionamos las emociones y las relaciones, y si evitamos las conductas de riesgo. Por eso se habla de <b>estilo de vida saludable</b>. Según la OMS, la salud es «un estado de completo bienestar físico, mental y social, y no solamente la ausencia de enfermedad».</p><p>Cambiar hábitos no es fácil, pero se consigue mejor con <b>pequeños pasos</b> concretos y sostenidos que con grandes propósitos. Algunas estrategias: fijar un objetivo SMART (por ejemplo, «comer dos piezas de fruta al día durante un mes»); llevar un <b>registro</b> (diario de alimentación, de sueño o de actividad) para tomar conciencia; preparar el entorno (tener fruta a la vista, dejar el móvil fuera de la habitación); buscar <b>apoyo</b> en la familia y los amigos; y celebrar los avances. Un error frecuente es pensar en «todo o nada»: comer un dulce un día no arruina una alimentación saludable, lo que cuenta es el conjunto.</p><p>Por último, la <b>salud mental</b> forma parte de la salud: la actividad física, el contacto con la naturaleza, dormir bien, compartir tiempo con otras personas y pedir ayuda cuando algo nos preocupa son también hábitos saludables. Cuidarte hoy es invertir en tu bienestar del futuro.</p>`,
      rueda("Estilo de vida saludable", "SALUD", [["comer bien", "var(--leaf)"], ["moverse", "var(--red)"], ["dormir", "var(--pen)"], ["emociones", "var(--sun)"], ["sin tóxicos", "var(--inf)"], ["relaciones", "var(--bac)"]], "var(--leaf)")),
  ],
  figura: {
    titulo: "Alimentación y hábitos saludables",
    svg: figCols("Alimentación y hábitos saludables", [["Nutrientes", ["hidratos 4 kcal", "proteínas 4 kcal", "grasas 9 kcal"], "var(--sun)"], ["Plato", ["½ verdura", "¼ cereal", "¼ proteína"], "var(--leaf)"], ["Deporte", ["hidratos antes", "agua durante", "reponer después"], "var(--bac)"], ["Hábitos", ["dormir 8-10 h", "60 min activos", "sin tóxicos"], "var(--red)"]]),
  },
  video: { id: "eX5AJX0tv2k", titulo: "¿Qué es el plato saludable o plato Harvard?", canal: "EITB", vistas: 55211, megusta: 0, busqueda: "plato saludable Harvard" },
  ejemplos: [
    EX("Calcula las kcal de un alimento con 60 g de hidratos, 10 g de proteínas y 20 g de grasas por 100 g.", ["Hidratos: 60 × 4 = 240 kcal.", "Proteínas: 10 × 4 = 40 kcal.", "Grasas: 20 × 9 = 180 kcal.", "Total: 460 kcal por 100 g."], "460 kcal/100 g: muy energético."),
    EX("Un refresco tiene 10,6 g de azúcar por 100 ml. ¿Cuánto azúcar hay en una lata de 330 ml?", ["10,6 × 3,3 ≈ 35 g.", "Un terrón de azúcar tiene unos 4 g.", "35 / 4 ≈ 9 terrones."], "Unos 35 g, cerca de 9 terrones."),
    EX("Diseña una comida con el plato saludable.", ["½ ensalada de tomate, lechuga y zanahoria y una pieza de fruta.", "¼ arroz integral.", "¼ garbanzos o merluza a la plancha.", "Aceite de oliva y agua."], "Plato completo y equilibrado."),
    EX("Un jugador pesa 60 kg antes del partido y 59,2 kg después. ¿Cuánto debe beber?", ["Ha perdido 0,8 kg, unos 0,8 l de sudor.", "Se recomienda reponer un 150 %.", "0,8 × 1,5 = 1,2 litros en las horas siguientes."], "1,2 litros de agua."),
    EX("Compara dos cereales de desayuno: A con 30 g de azúcar/100 g y B con 5 g/100 g.", ["Referencia: más de 15 g/100 g es mucho azúcar.", "A supera claramente el umbral.", "B tiene poco azúcar."], "El B es mejor opción; la avena natural, aún mejor."),
    EX("Organiza la alimentación de un día con entrenamiento a las 18:00.", ["Desayuno: leche, tostada integral con aceite, fruta.", "Comida (14:30): pasta con verduras y pollo, fruta.", "Merienda (17:15): plátano y agua.", "Cena (20:30): tortilla de patata con ensalada, yogur."], "Hidratos antes, ligero cerca del entreno y recuperación en la cena."),
  ],
  errores: [
    "Confundir alimentación y nutrición.",
    "Pensar que todas las calorías son iguales sin fijarse en la calidad del alimento.",
    "Saltarse el desayuno o hacer dietas restrictivas sin control profesional.",
    "Creer que los productos «light», «0 %» o «naturales» son siempre saludables.",
    "Esperar a tener sed para beber o usar bebidas energéticas para hacer deporte.",
    "Pensar que dormir poco no afecta al rendimiento ni a la salud.",
  ],
  ejercicios: EJ([
    ["Diferencia alimentación y nutrición.", "Alimentación: acto voluntario de elegir y comer alimentos. Nutrición: proceso involuntario de utilizar los nutrientes."],
    ["Escribe los nutrientes y su función principal.", "Hidratos y grasas: energética. Proteínas: plástica. Vitaminas y minerales: reguladora. Agua: transporte y regulación."],
    ["¿Cuántas kcal aporta un gramo de grasa?", "9 kcal."],
    ["¿Qué es el metabolismo basal?", "La energía para mantener las funciones vitales en reposo."],
    ["¿Cómo se reparte el plato saludable?", "Mitad verduras y frutas, un cuarto cereales integrales y un cuarto proteína saludable."],
    ["Escribe cuatro alimentos de la dieta mediterránea de consumo diario.", "Verduras, frutas, cereales integrales y aceite de oliva."],
    ["¿Qué es un alimento ultraprocesado? Pon dos ejemplos.", "Producto industrial con muchos ingredientes y poco alimento real; refrescos y bollería industrial."],
    ["¿En qué orden aparecen los ingredientes de una etiqueta?", "De mayor a menor cantidad."],
    ["¿Cuánta agua se recomienda beber al día?", "Unos 2 litros, más con calor y ejercicio."],
    ["¿Cuántas horas deben dormir los adolescentes?", "Entre 8 y 10 horas."],
    ["¿Cuánta actividad física diaria recomienda la OMS a los adolescentes?", "Al menos 60 minutos de actividad moderada o vigorosa."],
    ["Escribe dos trastornos de la conducta alimentaria.", "Anorexia y bulimia (también trastorno por atracón y vigorexia)."],
  ], [
    ["Explica el balance energético y qué ocurre si es positivo.", "Compara la energía ingerida con la gastada; si es positivo, el exceso se almacena como grasa."],
    ["¿Por qué 200 kcal de refresco no equivalen a 200 kcal de lentejas?", "Las lentejas aportan proteínas, fibra, hierro y saciedad; el refresco solo azúcar."],
    ["Explica el porcentaje recomendado de cada macronutriente.", "Hidratos 50-55 % (azúcares libres menos del 10 %), grasas 30-35 % y proteínas 12-15 %."],
    ["¿Por qué la dieta mediterránea es más que una lista de alimentos?", "Incluye productos frescos y de temporada, cocina sencilla, actividad física, descanso y convivencia en la mesa."],
    ["Explica la clasificación NOVA.", "Agrupa los alimentos por su procesamiento: sin procesar, ingredientes culinarios, procesados y ultraprocesados."],
    ["¿Qué estrategias usa la publicidad de ultraprocesados para adolescentes?", "Famosos, deportistas, influencers, personajes, regalos y mensajes como «energía» o «con vitaminas»."],
    ["Diferencia fecha de caducidad y de consumo preferente.", "Caducidad: no consumir después (perecederos). Consumo preferente: después puede perder calidad pero es seguro."],
    ["¿Qué valores de una etiqueta indican mucho azúcar, grasa saturada y sal?", "Más de 15 g de azúcar, 5 g de grasa saturada y 1,5 g de sal por 100 g."],
    ["Explica qué comer antes de un entrenamiento y por qué.", "2-3 horas antes, comida rica en hidratos y pobre en grasa y fibra, para tener energía y digerirla bien."],
    ["¿Por qué no se recomiendan bebidas energéticas a adolescentes?", "Por su exceso de cafeína y azúcar, que puede causar nerviosismo, insomnio y taquicardias."],
    ["¿Cómo se puede saber cuánta agua se ha perdido en un entrenamiento?", "Pesándose antes y después: cada kilo perdido equivale a un litro de sudor."],
    ["Describe dos señales de alerta de un TCA y qué hacer.", "Saltarse comidas y obsesión por las calorías; pedir ayuda a la familia, el profesorado o un profesional sanitario."],
    ["Explica por qué las pantallas por la noche perjudican el sueño.", "La luz azul retrasa la liberación de melatonina, la hormona que induce el sueño."],
    ["Escribe tres consejos de higiene postural.", "Sentarse con la espalda apoyada, levantar peso flexionando las rodillas y llevar la mochila con dos asas y poco peso."],
  ], [
    ["Elabora un menú semanal de comidas siguiendo la dieta mediterránea y justifícalo.", "Respuesta abierta: legumbres 3-4 veces, pescado 3-4, huevos, carne blanca 2, verdura y fruta diarias, cereales integrales, aceite de oliva y agua."],
    ["Analiza las etiquetas de tres productos de tu desayuno y clasifícalos según NOVA y los umbrales de azúcar, grasa y sal.", "Respuesta abierta con datos reales y conclusiones razonadas."],
    ["Calcula las kcal y el porcentaje de cada macronutriente de un bocadillo con 50 g de hidratos, 15 g de proteínas y 12 g de grasas.", "200 + 60 + 108 = 368 kcal. Hidratos 54 %, proteínas 16 %, grasas 29 %: bastante equilibrado."],
    ["Diseña una campaña contra un anuncio real de bebida energética o refresco dirigido a jóvenes.", "Respuesta abierta: identificar mensajes engañosos, aportar datos de azúcar y cafeína y proponer alternativas como el agua."],
    ["Planifica la alimentación y la hidratación de un torneo de un día con tres partidos.", "Desayuno rico en hidratos, entre partidos tentempiés ligeros (fruta, bocadillo pequeño), agua constante, isotónica si hace calor, y comida de recuperación al terminar."],
    ["Debate: ¿debería prohibirse la publicidad de ultraprocesados dirigida a menores? Argumenta.", "Respuesta abierta argumentada: protección de la salud infantil frente a libertad comercial; papel de la educación."],
    ["Lleva un diario de sueño durante una semana y analiza los resultados.", "Respuesta abierta: horas, hora de acostarse, uso de pantallas, sensación al despertar y propuestas de mejora."],
    ["Explica la relación entre redes sociales, imagen corporal y TCA, y propón medidas.", "Las imágenes retocadas crean modelos irreales e insatisfacción que pueden favorecer TCA; medidas: pensamiento crítico, seguir cuentas diversas, hablar del tema, pedir ayuda."],
    ["Diseña un plan SMART de un mes para mejorar un hábito personal y cómo lo evaluarás.", "Respuesta abierta: objetivo específico y medible (p. ej., 9 horas de sueño 5 noches por semana), registro diario y valoración final."],
    ["Explica por qué la dieta mediterránea es también más sostenible.", "Se basa en vegetales, productos de temporada y proximidad y poca carne, por lo que consume menos agua y tierra y genera menos emisiones y residuos."],
  ]),
  quiz: QS([
    ["La nutrición es un proceso…", ["involuntario", "voluntario", "educable", "cultural"], "Digestión y uso de nutrientes."],
    ["La función de las proteínas es sobre todo…", ["plástica", "energética", "reguladora", "de transporte"], "Construir tejidos."],
    ["Un gramo de hidratos de carbono aporta…", ["4 kcal", "9 kcal", "7 kcal", "0 kcal"], "Igual que las proteínas."],
    ["La mayor parte del gasto energético es…", ["el metabolismo basal", "la digestión", "el deporte siempre", "el sueño"], "60-70 %."],
    ["En el plato saludable, la mitad son…", ["verduras y frutas", "proteínas", "cereales", "postres"], "Harvard."],
    ["La grasa principal de la dieta mediterránea es…", ["el aceite de oliva", "la mantequilla", "la margarina", "el aceite de palma"], "Virgen extra."],
    ["Las legumbres se recomiendan…", ["3-4 veces por semana", "una vez al mes", "nunca", "solo en invierno"], "Proteína vegetal."],
    ["Un ejemplo de ultraprocesado es…", ["un refresco", "una manzana", "unas lentejas", "un huevo"], "NOVA 4."],
    ["En la etiqueta, los ingredientes aparecen…", ["de mayor a menor cantidad", "en orden alfabético", "al azar", "de menor a mayor"], "El primero es el más abundante."],
    ["Se considera mucho azúcar más de…", ["15 g/100 g", "1 g/100 g", "50 g/100 g", "5 kcal"], "Umbral de referencia."],
    ["Pasada la fecha de consumo preferente, el alimento…", ["puede perder calidad pero es seguro", "es peligroso", "es ilegal", "no tiene nutrientes"], "Evitar el desperdicio."],
    ["2-3 horas antes de entrenar conviene una comida rica en…", ["hidratos de carbono", "grasas", "fibra", "alcohol"], "Energía."],
    ["Para un ejercicio de 45 minutos se recomienda beber…", ["agua", "bebida energética", "refresco", "nada"], "Suficiente."],
    ["Perder un 2 % del peso en agua…", ["reduce el rendimiento", "lo mejora", "no influye", "es recomendable"], "Deshidratación."],
    ["Una orina oscura indica…", ["que hay que beber más", "buena hidratación", "exceso de agua", "nada"], "Indicador sencillo."],
    ["La anorexia se caracteriza por…", ["restricción extrema y miedo a engordar", "atracones", "obsesión por el músculo", "dormir mucho"], "TCA."],
    ["Los adolescentes deben dormir…", ["8-10 horas", "5-6 horas", "12-14 horas", "lo que quieran"], "Crecimiento y aprendizaje."],
    ["Para levantar un peso del suelo…", ["flexionar las rodillas con espalda recta", "doblar la espalda", "estirar las piernas", "girar el tronco"], "Higiene postural."],
    ["La OMS recomienda a los adolescentes…", ["60 minutos diarios de actividad", "10 minutos semanales", "3 horas de pantallas", "nada"], "Moderada o vigorosa."],
    ["El vapeo…", ["también contiene nicotina y tóxicos", "es totalmente inocuo", "mejora la resistencia", "es solo vapor de agua"], "Adictivo."],
  ]),
  examen: QS([
    ["El alcohol aporta por gramo…", ["7 kcal", "0 kcal", "4 kcal", "9 kcal"], "Sin nutrientes útiles."],
    ["El estudio PREDIMED demostró beneficios de…", ["la dieta mediterránea", "la comida rápida", "el ayuno", "los suplementos"], "Cardiovasculares."],
    ["Los azúcares libres deben ser menos del…", ["10 % de la energía", "50 %", "30 %", "80 %"], "OMS."],
    ["Tras perder 1 kg en un entrenamiento hay que beber unos…", ["1,5 litros", "0,2 litros", "5 litros", "nada"], "150 %."],
    ["La vigorexia es…", ["la obsesión por ganar músculo", "falta de apetito", "dormir poco", "una vitamina"], "TCA."],
    ["La luz azul de las pantallas retrasa la liberación de…", ["melatonina", "insulina", "adrenalina", "hemoglobina"], "Hormona del sueño."],
    ["El Nutri-Score…", ["resume la calidad nutricional con letras", "indica la caducidad", "mide el procesamiento", "da el precio"], "De la A a la E."],
    ["La mochila no debe superar…", ["el 10-15 % del peso corporal", "el 50 %", "el 30 %", "los 20 kg"], "Con dos asas."],
  ]),
  feynman: ["Qué nutrientes hay y para qué sirven", "Qué es el balance energético", "Cómo se construye un plato saludable y la dieta mediterránea", "Cómo se lee una etiqueta y se detecta un ultraprocesado", "Cómo comer, beber y descansar para estar sano y rendir"],
  mapa: mapa("ALIMENTACIÓN Y HÁBITOS", "var(--leaf)", [
    ["Nutrientes", "energía · kcal · balance", "var(--sun)"],
    ["Dieta", "plato · mediterránea", "var(--leaf)"],
    ["Elegir", "etiquetas · ultraprocesados", "var(--red)"],
    ["Hábitos", "hidratación · sueño · postura", "var(--bac)"],
  ], 280),
  tarjetas: [
    ["Alimentación", "Acto voluntario y educable de elegir y comer."],
    ["Nutrición", "Proceso involuntario de usar los nutrientes."],
    ["kcal por gramo", "Hidratos 4, proteínas 4, grasas 9."],
    ["Metabolismo basal", "Energía en reposo: 60-70 % del gasto."],
    ["Balance energético", "Energía que entra frente a la que sale."],
    ["Plato saludable", "½ verdura y fruta, ¼ cereal integral, ¼ proteína."],
    ["Dieta mediterránea", "Vegetales, legumbres, pescado, aceite de oliva y estilo de vida."],
    ["Ultraprocesado", "Producto industrial con poco alimento real."],
    ["Etiqueta", "Ingredientes de mayor a menor; datos por 100 g."],
    ["Hidratación", "Beber antes, durante y después; agua."],
    ["TCA", "Anorexia, bulimia, atracón, vigorexia."],
    ["Sueño", "8-10 horas, sin pantallas antes de dormir."],
  ],
  glosario: [
    ["Alimentación", "Proceso voluntario de elegir y consumir alimentos."],
    ["Nutrición", "Conjunto de procesos por los que el cuerpo utiliza los nutrientes."],
    ["Nutriente", "Sustancia de los alimentos que el cuerpo necesita."],
    ["Kilocaloría", "Unidad de medida de la energía de los alimentos."],
    ["Metabolismo basal", "Energía mínima para mantener las funciones vitales."],
    ["Balance energético", "Relación entre la energía ingerida y la gastada."],
    ["Fibra", "Componente vegetal no digerible que favorece el tránsito intestinal."],
    ["Dieta mediterránea", "Patrón alimentario y estilo de vida de los países mediterráneos."],
    ["Ultraprocesado", "Producto industrial con muchos ingredientes y aditivos."],
    ["Azúcares libres", "Azúcares añadidos y los de miel y zumos."],
    ["Nutri-Score", "Sistema de etiquetado con letras de la A a la E."],
    ["Bebida isotónica", "Bebida con agua, sales y azúcares para esfuerzos largos."],
    ["Deshidratación", "Pérdida excesiva de agua del cuerpo."],
    ["TCA", "Trastorno de la conducta alimentaria."],
    ["Sedentarismo", "Estilo de vida con muy poca actividad física."],
    ["Higiene postural", "Hábitos de posturas correctas para cuidar la espalda."],
  ],
  situacion: {
    titulo: "Semana saludable en el instituto",
    reto: "El instituto organiza una «Semana saludable». Vuestra clase debe analizar los hábitos del alumnado y diseñar una campaña con propuestas concretas para mejorar la alimentación, el descanso y la actividad física en el centro.",
    pasos: [
      "Diseñad una encuesta anónima sobre desayuno, almuerzo, bebidas, sueño, pantallas y actividad física.",
      "Aplicadla en varios grupos y representad los resultados en gráficas.",
      "Analizad las etiquetas de los productos que más se consumen en el recreo.",
      "Proponed un almuerzo saludable para cada día de la semana y un reto de actividad física.",
      "Elaborad carteles e infografías con datos y consejos.",
      "Presentad la campaña y evaluad su impacto con una segunda encuesta breve.",
    ],
    producto: "Informe con gráficas, campaña de carteles e infografías y propuesta de almuerzos saludables.",
    evaluacion: [
      "La encuesta y su análisis son rigurosos y bien representados.",
      "Las propuestas se basan en el plato saludable, la dieta mediterránea y las recomendaciones de la OMS.",
      "Los materiales comunican con claridad y sin mensajes que culpabilicen.",
      "Trabaja en equipo y reflexiona sobre sus propios hábitos.",
    ],
  },
  familias: ["Cocinad juntos un plato de legumbres o pescado siguiendo el plato saludable.", "Revisad juntos las etiquetas de los productos del desayuno.", "Acordad un horario sin pantallas antes de dormir.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Vida activa y saludable (RD 217/2022, Educación Física 4º ESO): alimentación saludable y sostenible, balance energético, hidratación y alimentación en la actividad física, análisis crítico de la publicidad y del etiquetado, prevención de TCA, descanso, higiene postural, sedentarismo y consumo de sustancias nocivas.",
    ideas: ["Análisis de etiquetas reales del almuerzo del alumnado.", "Encuesta de hábitos con tratamiento estadístico en coordinación con Matemáticas.", "Taller de almuerzos saludables y semana sin bollería.", "Coordinación con Biología (nutrición) y con el plan de acción tutorial (TCA, adicciones)."],
  },
  fuentes: [
    RD,
    { t: "OMS: alimentación sana", url: "https://www.who.int/es/news-room/fact-sheets/detail/healthy-diet" },
    { t: "Fundación Dieta Mediterránea", url: "https://dietamediterranea.com/" },
    { t: "AESAN: Agencia Española de Seguridad Alimentaria y Nutrición", url: "https://www.aesan.gob.es/" },
    { t: "Harvard T.H. Chan: el plato para comer saludable", url: "https://nutritionsource.hsph.harvard.edu/healthy-eating-plate/translations/spanish/" },
  ],
  revisado: "2026-11-13",
};
