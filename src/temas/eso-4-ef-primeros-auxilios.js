// Educación Física 4º ESO. Tema nivel libro. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, rueda, flujo, figCols, piramide, barras } = require("./_hum");
const { B, QS, EJ, EX, poses, rejilla, zonas, RD } = require("./_eso4L13");

module.exports = {
  materia: "Educación Física",
  curso: "4-eso",
  titulo: "Primeros auxilios",
  minutos: 115,
  objetivos: [
    "Aplicar la conducta PAS (proteger, avisar, socorrer) ante cualquier accidente",
    "Realizar la valoración primaria de una víctima: consciencia, vía aérea y respiración",
    "Practicar la reanimación cardiopulmonar (RCP) y conocer el uso del desfibrilador (DEA)",
    "Actuar ante un atragantamiento y colocar a una víctima en posición lateral de seguridad",
    "Atender heridas, hemorragias, quemaduras, lesiones deportivas y otras urgencias frecuentes",
  ],
  claves: ["PAS", "112", "valoración primaria", "RCP", "DEA", "Heimlich", "PLS", "hemorragia", "esguince"],
  pregunta: {
    texto: "En un partido, un jugador se desploma de repente y no se mueve. Todo el mundo se queda paralizado. ¿Qué harías tú en el primer minuto?",
    respuesta: "Comprobar que la zona es segura, ver si responde y si respira con normalidad y, si no respira, <mark>llamar al 112</mark>, empezar la RCP y pedir que traigan un desfibrilador. Cada minuto sin RCP reduce cerca de un 10 % las posibilidades de sobrevivir: lo que hagas tú antes de que llegue la ambulancia puede salvar una vida.",
  },
  lectura: {
    titulo: "Cuatro minutos en el estadio",
    html: `<p>El 12 de junio de 2021, durante un partido de la Eurocopa en Copenhague, el futbolista danés Christian Eriksen se desplomó en el césped sin que nadie le tocara. Había sufrido una parada cardiaca. Su capitán, Simon Kjær, fue el primero en llegar: le colocó de lado, se aseguró de que la vía aérea estaba libre y pidió ayuda a gritos. Sus compañeros formaron un círculo para protegerle de las cámaras mientras los servicios médicos, que llegaron en segundos, iniciaban la reanimación cardiopulmonar y usaban un desfibrilador. Tras una descarga, el corazón de Eriksen volvió a latir.</p><p>Eriksen sobrevivió y meses después volvió a jugar al máximo nivel. Su caso mostró al mundo algo que los expertos repiten siempre: en una parada cardiaca, la supervivencia depende de una <i>cadena</i> de acciones rápidas. Reconocer la situación, avisar, empezar la RCP y usar un desfibrilador en los primeros minutos puede multiplicar por dos o por tres las posibilidades de sobrevivir. En la mayoría de los casos no habrá médicos en el campo: la primera persona en actuar será alguien como tú. Por eso los primeros auxilios forman parte de la Educación Física: no hace falta ser médico para salvar una vida, pero sí saber qué hacer.</p>`,
  },
  bloques: [
    B("1.1 ¿Qué son los primeros auxilios?", `<p>Los <b>primeros auxilios</b> son las <mark>primeras actuaciones</mark> que se realizan ante un accidente o una enfermedad repentina, en el mismo lugar y con los medios disponibles, hasta que llega la ayuda profesional. Su objetivo es <b>mantener con vida</b> a la víctima, <b>evitar que empeore</b> y <b>aliviar el dolor y la angustia</b>. No sustituyen a la atención médica: la preparan y la hacen posible.</p><p>Quien presta primeros auxilios debe seguir unas normas básicas: mantener la <b>calma</b> y transmitir tranquilidad; actuar con rapidez pero sin precipitarse; <b>no mover</b> a la víctima salvo que haya peligro inminente (fuego, tráfico, derrumbe); hacer solo aquello que se sabe hacer; no dar de comer ni de beber a una persona herida; y no abandonarla hasta que llegue la ayuda. Además, en España existe el deber de socorro: no ayudar a una persona en peligro grave pudiendo hacerlo sin riesgo propio es un delito. Ayudar puede ser tan sencillo como llamar al 112. Hoy en día, muchos institutos incluyen formación en RCP, porque está demostrado que el alumnado formado actúa con más seguridad y que, si toda la población supiera hacerlo, se salvarían miles de vidas cada año.</p>`,
      rejilla("Normas del socorrista", [["Calma", "transmite tranquilidad"], ["Seguridad", "primero, la tuya"], ["No mover", "salvo peligro"], ["Lo que sabes", "solo eso"], ["Nada por boca", "ni agua ni comida"], ["Acompañar", "hasta que llegue ayuda"]])),
    B("1.2 La conducta PAS", `<p>Ante cualquier accidente se aplica la <mark>conducta PAS</mark>, tres pasos que deben seguirse siempre en este orden:</p>${tabla(["Paso", "Qué hacer", "Ejemplo"], [["P: Proteger", "asegurar la zona para que no haya más víctimas, empezando por uno mismo", "señalizar un accidente de tráfico, cortar la corriente, alejar del fuego"], ["A: Avisar", "llamar al 112 con calma y dar la información necesaria", "dónde, qué ha pasado, cuántas víctimas, estado"], ["S: Socorrer", "atender a la víctima según su estado, empezando por lo vital", "valoración primaria, RCP, PLS, control de hemorragias"]])}<p>Al llamar al <b>112</b> (gratuito, funciona sin saldo y sin cobertura de tu compañía) hay que decir: <b>dónde</b> estás (lo más importante: calle, número, referencias, o la ubicación del móvil), <b>qué ha pasado</b>, <b>cuántas</b> personas están afectadas y su <b>estado</b> (si responden y si respiran). No cuelgues hasta que te lo indiquen: el operador puede guiarte paso a paso, incluso en la RCP, con el altavoz del móvil activado. Si hay varias personas, una llama y otra empieza a socorrer.</p>`,
      flujo("Conducta PAS", ["Proteger", "Avisar|112", "Socorrer"], "var(--red)"),
      { id: "JAgB5RVgHNk", titulo: "Primeros auxilios: valoración primaria y conducta PAS", canal: "Cruz Roja en Euskadi", vistas: 300765, megusta: 0 }),
    B("1.3 La valoración primaria", `<p>Antes de socorrer hay que saber qué le pasa a la víctima. La <mark>valoración primaria</mark> busca en pocos segundos los problemas que amenazan la vida:</p><p><b>1. Consciencia.</b> Nos acercamos, le tocamos los hombros con suavidad y le preguntamos en voz alta: «¿Me oyes? ¿Estás bien?». Si responde o se mueve, está consciente: le preguntamos qué le ocurre y buscamos lesiones. Si no responde, está inconsciente: pedimos ayuda en voz alta sin alejarnos.</p><p><b>2. Vía aérea.</b> En una persona inconsciente, la lengua puede caer hacia atrás y tapar la garganta. Para abrir la vía aérea hacemos la maniobra <b>frente-mentón</b>: una mano en la frente empuja la cabeza hacia atrás y dos dedos de la otra elevan la barbilla. Si sospechamos una lesión de cuello (caída desde altura, accidente de tráfico), la movemos lo menos posible.</p><p><b>3. Respiración.</b> Con la vía aérea abierta, acercamos la mejilla a su boca y miramos al pecho durante un máximo de <b>10 segundos</b>: <b>ver</b> si el pecho se mueve, <b>oír</b> la respiración y <b>sentir</b> el aire. Si respira con normalidad, la colocamos en posición lateral de seguridad. Si <b>no respira o lo hace de forma anormal</b> (boqueadas, ruidos aislados), hay que suponer que está en <b>parada cardiorrespiratoria</b>: llamar al 112 y empezar la RCP de inmediato.</p>`,
      flujo("Valoración primaria", ["¿responde?", "abrir vía|aérea", "ver, oír,|sentir 10 s", "¿respira?"], "var(--pen)")),
    B("1.4 La cadena de supervivencia", `<p>La <b>parada cardiorrespiratoria</b> es la interrupción brusca de la circulación y la respiración. Sin oxígeno, el cerebro empieza a sufrir daños en 4-5 minutos. La mayoría de las paradas en adultos se deben a problemas del corazón; en jóvenes deportistas, aunque son raras, pueden deberse a enfermedades cardiacas no detectadas, por eso son importantes los reconocimientos médicos.</p><p>La supervivencia depende de la <mark>cadena de supervivencia</mark>, cuatro eslabones que deben producirse lo antes posible:</p>${tabla(["Eslabón", "Acción", "Quién"], [["1", "reconocer la parada y llamar al 112", "cualquier testigo"], ["2", "RCP precoz: compresiones torácicas de calidad", "cualquier testigo"], ["3", "desfibrilación precoz con un DEA", "cualquier testigo"], ["4", "soporte vital avanzado y cuidados en el hospital", "profesionales sanitarios"]])}<p>Fíjate en que tres de los cuatro eslabones dependen de las personas que están cerca. Si nadie actúa hasta que llega la ambulancia (unos 10-15 minutos de media), las posibilidades de sobrevivir son muy bajas. Si un testigo empieza la RCP y usa un DEA en los primeros 3-5 minutos, la supervivencia puede superar el 50 %.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Cadena de supervivencia de cuatro eslabones: llamar, RCP, desfibrilar y cuidados avanzados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["112", "llamar", "var(--pen)"], ["RCP", "comprimir", "var(--red)"], ["DEA", "descarga", "var(--sun)"], ["UVI", "hospital", "var(--leaf)"]].map(([t, s, c], i) => `<rect x="${16 + i * 58}" y="58" width="54" height="44" rx="22" fill="none" stroke="${c}" stroke-width="7"/><text x="${43 + i * 58}" y="86" text-anchor="middle" font-size="13" font-weight="700" fill="${c}" ${D}>${t}</text><text x="${43 + i * 58}" y="124" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)" ${F}>${s}</text>`).join("")}
        <text x="130" y="36" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>cada minuto cuenta</text>
        <text x="130" y="156" text-anchor="middle" font-size="10.5" fill="var(--muted)" ${F}>3 de 4 eslabones dependen de ti</text>
      </svg>`),
    B("1.5 La reanimación cardiopulmonar (RCP)", `<p>La <mark>RCP</mark> mantiene un mínimo de circulación de sangre oxigenada hacia el cerebro y el corazón mientras llega el desfibrilador o la ayuda. Así se realiza en un adulto o adolescente, según las recomendaciones del Consejo Europeo de Resucitación:</p><p><b>1.</b> Coloca a la víctima boca arriba sobre una superficie dura. <b>2.</b> Arrodíllate a su lado y pon el talón de una mano en el <b>centro del pecho</b> (mitad inferior del esternón); la otra mano encima, con los dedos entrelazados. <b>3.</b> Con los brazos rectos y los hombros sobre las manos, comprime dejando caer el peso del cuerpo: <b>5-6 cm</b> de profundidad, a un ritmo de <b>100-120 compresiones por minuto</b> (como el ritmo de la canción <i>Stayin' Alive</i>). <b>4.</b> Deja que el pecho vuelva a su posición tras cada compresión, sin despegar las manos. <b>5.</b> Si sabes y quieres, alterna <b>30 compresiones y 2 insuflaciones</b> boca a boca; si no, haz solo compresiones continuas. <b>6.</b> No pares hasta que llegue la ayuda, la víctima respire con normalidad o estés agotado. Si hay otra persona, turnaos cada 2 minutos: la calidad de las compresiones cae con el cansancio.</p><p>Es normal tener miedo a hacer daño, pero una persona en parada ya está clínicamente muerta: <b>no hacer nada es lo peor</b>. Puede haber alguna costilla rota, pero eso se cura.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="RCP: socorrista arrodillado con los brazos rectos comprimiendo el centro del pecho de la víctima">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="148" width="220" height="6" rx="3" fill="var(--line)"/>
        <circle cx="210" cy="132" r="12" fill="none" stroke="var(--ink)" stroke-width="3"/>
        <path d="M198 136 H 60 M 120 136 l -20 -4 M 60 136 l -20 6" stroke="var(--ink)" stroke-width="4" stroke-linecap="round" fill="none"/>
        <circle cx="132" cy="44" r="12" fill="none" stroke="var(--red)" stroke-width="3"/>
        <path d="M128 56 L 112 104 L 92 112 L 92 146 M 112 104 L 70 146" stroke="var(--red)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M126 64 L 150 128" stroke="var(--red)" stroke-width="4" stroke-linecap="round"/>
        <path d="M150 104 v 20 l -6 -8 m 6 8 l 6 -8" stroke="var(--sun)" stroke-width="3" fill="none" stroke-linecap="round"/>
        <g ${F} font-size="10.5" font-weight="700"><text x="168" y="98" fill="var(--sun)">5-6 cm</text><text x="168" y="112" fill="var(--sun)">100-120/min</text><text x="20" y="30" fill="var(--red)">brazos rectos</text><text x="20" y="44" fill="var(--muted)">centro del pecho</text></g>
      </svg>`,
      { id: "FEayzgNGGBQ", titulo: "Primeros auxilios: RCP en adultos", canal: "Cruz Roja en Euskadi", vistas: 1489460, megusta: 17071 }),
    B("1.6 El desfibrilador externo automático (DEA)", `<p>La causa más frecuente de parada cardiaca en adultos es la <b>fibrilación ventricular</b>: el corazón no late, sino que «tiembla» de forma desordenada y no bombea sangre. La única forma de corregirla es una <b>descarga eléctrica</b> que «reinicie» el ritmo: eso hace el <mark>desfibrilador externo automático (DEA)</mark>.</p><p>El DEA está diseñado para que lo use <b>cualquier persona</b>, sin formación previa: al abrirlo, da instrucciones en voz alta. Los pasos son: <b>1.</b> Encenderlo. <b>2.</b> Descubrir el pecho de la víctima (secarlo si está mojado) y pegar los dos parches como indican los dibujos: uno bajo la clavícula derecha y otro en el costado izquierdo, bajo la axila. <b>3.</b> El aparato analiza el ritmo: nadie debe tocar a la víctima. <b>4.</b> Si indica descarga, asegurarse de que nadie la toca y pulsar el botón (algunos modelos la dan solos). <b>5.</b> Reanudar inmediatamente la RCP y seguir las instrucciones. El DEA <b>no da descargas si no son necesarias</b>, por lo que no hay riesgo de hacer daño.</p><p>Los DEA están en lugares públicos (estaciones, centros comerciales, polideportivos, muchos institutos) señalizados con un corazón verde con un rayo. Aplicaciones móviles y el propio 112 indican dónde está el más cercano. Conviene que, mientras uno hace la RCP, otra persona vaya a buscarlo.</p>`,
      flujo("Uso del DEA", ["encender", "parches", "analiza:|no tocar", "descarga", "seguir|RCP"], "var(--leaf)")),
    B("1.7 La posición lateral de seguridad (PLS)", `<p>Si la víctima está <b>inconsciente pero respira con normalidad</b>, hay que colocarla en <mark>posición lateral de seguridad (PLS)</mark>. Esta postura mantiene la vía aérea abierta y permite que, si vomita, el líquido salga por la boca en lugar de pasar a los pulmones.</p><p>Pasos: <b>1.</b> Arrodíllate a un lado de la víctima, que está boca arriba, y quítale gafas y objetos voluminosos de los bolsillos. <b>2.</b> Coloca el brazo más cercano a ti en ángulo recto, con la palma hacia arriba. <b>3.</b> Lleva el otro brazo cruzando el pecho y apoya el dorso de su mano contra su mejilla más cercana a ti, sujetándola. <b>4.</b> Con la otra mano, flexiona la rodilla más alejada, manteniendo el pie en el suelo. <b>5.</b> Tira de esa rodilla hacia ti para girar a la víctima de lado. <b>6.</b> Ajusta la pierna de arriba para que cadera y rodilla formen ángulo recto, e inclina la cabeza hacia atrás para mantener la vía aérea abierta, con la mano bajo la mejilla.</p><p>Una vez colocada, comprueba su respiración de forma periódica. Si deja de respirar con normalidad, ponla boca arriba y empieza la RCP. Si se sospecha una lesión de columna (caída o golpe fuerte), es mejor no moverla salvo que sea imprescindible para mantener la vía aérea.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Posición lateral de seguridad: víctima de lado con la mano bajo la mejilla y la pierna de arriba flexionada">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="140" width="220" height="6" rx="3" fill="var(--line)"/>
        <circle cx="62" cy="112" r="13" fill="none" stroke="var(--pen)" stroke-width="3"/>
        <path d="M76 116 L 150 122" stroke="var(--pen)" stroke-width="4" stroke-linecap="round"/>
        <path d="M84 118 L 70 128 L 54 124" stroke="var(--leaf)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M86 118 L 96 138 L 118 138" stroke="var(--pen)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M150 122 L 178 100 L 196 136" stroke="var(--leaf)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M150 122 L 200 128 L 220 136" stroke="var(--pen)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <g ${F} font-size="10.5" font-weight="700"><text x="24" y="40" fill="var(--leaf)">mano bajo la mejilla</text><text x="24" y="56" fill="var(--leaf)">rodilla en ángulo recto</text><text x="24" y="72" fill="var(--muted)">cabeza hacia atrás, boca abajo</text></g>
      </svg>`),
    B("1.8 El atragantamiento", `<p>El <b>atragantamiento</b> u obstrucción de la vía aérea por un cuerpo extraño (comida, un caramelo, una pieza pequeña) es una urgencia frecuente. Hay que distinguir dos situaciones:</p>${tabla(["Obstrucción", "Señales", "Qué hacer"], [["Leve", "la persona tose con fuerza, puede hablar y respirar", "animarla a seguir tosiendo; no golpear la espalda ni dar agua"], ["Grave", "no puede toser, hablar ni respirar; se lleva las manos al cuello; cambia de color", "5 golpes en la espalda y, si no sale, 5 compresiones abdominales; alternar"], ["Pierde la consciencia", "deja de responder", "tumbarla, llamar al 112 y empezar RCP"]])}<p>Los <b>golpes en la espalda</b> se dan con el talón de la mano entre los omóplatos, con la víctima inclinada hacia delante. Las <mark>compresiones abdominales o maniobra de Heimlich</mark> se hacen desde detrás: rodeamos su cintura, colocamos un puño entre el ombligo y el final del esternón, lo cubrimos con la otra mano y tiramos con fuerza hacia dentro y hacia arriba. Se alternan 5 golpes y 5 compresiones hasta que salga el objeto o la víctima quede inconsciente. Si te atragantas tú solo, puedes hacerte la maniobra con el puño o apoyándote en el respaldo de una silla. Tras unas compresiones abdominales, la persona debe ir al médico para descartar lesiones internas. En embarazadas y en personas muy obesas, las compresiones se hacen en el pecho; en bebés, la técnica es distinta.</p>`,
      dos("Atragantamiento", ["Leve", ["tose con fuerza", "puede hablar", "animar a toser", "no golpear", "vigilar"], "var(--leaf)"], ["Grave", ["no tose ni habla", "manos al cuello", "5 golpes espalda", "5 abdominales", "alternar"], "var(--red)"]),
      { id: "vBvMbXjCA14", titulo: "Enfermeras explican cómo realizar la maniobra de Heimlich", canal: "CODEM Madrid", vistas: 1458404, megusta: 0 }),
    B("1.9 Heridas y hemorragias", `<p>Una <b>herida</b> es una rotura de la piel. En una <b>herida leve</b> (rasguño, corte pequeño): lavarse las manos (o ponerse guantes), limpiar la herida con <b>agua y jabón</b> o suero fisiológico desde el centro hacia fuera, aplicar un antiséptico (no alcohol directamente) y cubrir con un apósito. No se debe usar algodón, que deja restos, ni intentar sacar objetos clavados profundamente: se fijan para que no se muevan y se acude al centro sanitario. Hay que comprobar que la vacuna del tétanos está al día.</p><p>Una <b>hemorragia</b> es la salida de sangre de los vasos sanguíneos. Ante una <mark>hemorragia externa importante</mark>: protegerse con guantes si es posible, tumbar a la víctima, aplicar <b>presión directa</b> firme sobre la herida con un apósito o una tela limpia durante al menos 10 minutos y, si se empapa, añadir más gasas encima sin quitar las primeras; después, un vendaje compresivo. Llamar al 112. El torniquete solo se usa en hemorragias masivas de brazos o piernas que no se controlan con presión, y preferiblemente por personas formadas. Ante una <b>hemorragia nasal</b>: sentar a la persona con la cabeza <b>inclinada hacia delante</b> (nunca hacia atrás, porque la sangre iría a la garganta) y apretar la parte blanda de la nariz durante 10 minutos.</p>`,
      filas("Ante una hemorragia", [["Protegerse", "guantes si es posible", "var(--muted)"], ["Presión directa", "10 minutos sin levantar", "var(--red)"], ["Añadir gasas", "sin quitar las primeras", "var(--sun)"], ["Vendaje", "compresivo", "var(--pen)"], ["Nariz", "cabeza hacia delante", "var(--bac)"]])),
    B("1.10 Quemaduras y lesiones por calor", `<p>Las <b>quemaduras</b> se clasifican según su profundidad: de <b>primer grado</b> (piel roja y dolorosa, como en una quemadura solar), de <b>segundo grado</b> (aparecen ampollas, muy dolorosas) y de <b>tercer grado</b> (piel blanquecina o negra, sin dolor porque se han destruido los nervios). Su gravedad depende también de la extensión y la zona (cara, manos, genitales y articulaciones son más graves).</p><p>Qué hacer: <mark>enfriar con agua</mark> a temperatura ambiente durante unos 20 minutos, quitar anillos, relojes y ropa que no esté pegada, y cubrir con un apósito limpio y húmedo o film transparente. Qué <b>no</b> hacer: aplicar hielo, pasta de dientes, aceite ni pomadas caseras; reventar las ampollas; arrancar la ropa pegada. Acudir al médico si la quemadura es grande, profunda o está en zonas delicadas.</p><p>En verano o al hacer ejercicio intenso con calor puede aparecer el <b>golpe de calor</b>: temperatura muy alta, piel caliente y roja, dolor de cabeza, mareo, confusión y, en casos graves, pérdida de consciencia. Es una emergencia: llamar al 112, llevar a la víctima a la sombra, quitarle ropa y enfriarla con agua o paños húmedos, abanicándola. Se previene evitando las horas centrales del día, bebiendo agua antes, durante y después del ejercicio y usando gorra y ropa clara.</p>`,
      zonas("Grados de quemadura (la más profunda, abajo)", [["3.º: blanca o negra, sin dolor", "var(--ink)"], ["2.º: ampollas", "var(--red)"], ["1.º: roja y dolorosa", "var(--sun)"]], "agua 20 min · sin hielo ni pomadas")),
    B("1.11 Lesiones deportivas: esguinces, luxaciones y fracturas", `<p>En la práctica deportiva son frecuentes las lesiones del aparato locomotor:</p>${tabla(["Lesión", "Qué es", "Señales"], [["Contusión", "golpe sin herida", "dolor, hinchazón, moratón"], ["Calambre", "contracción involuntaria y dolorosa de un músculo", "músculo duro, dolor intenso"], ["Contractura / rotura fibrilar", "contracción mantenida o rotura de fibras musculares", "dolor localizado; en la rotura, pinchazo brusco"], ["Esguince", "estiramiento o rotura de ligamentos de una articulación", "dolor, hinchazón, dificultad para apoyar"], ["Luxación", "los huesos de una articulación se salen de su sitio", "deformidad, dolor intenso, no se puede mover"], ["Fractura", "rotura de un hueso", "dolor, deformidad, impotencia funcional"]])}<p>Para contusiones, esguinces y lesiones musculares se aplica el protocolo <mark>PRICE</mark>: <b>P</b>rotección (dejar de jugar), <b>R</b>eposo, h<b>I</b>elo (envuelto en un paño, 15-20 minutos cada 2-3 horas, nunca directo sobre la piel), <b>C</b>ompresión con un vendaje no muy apretado y <b>E</b>levación del miembro. En un calambre, se estira suavemente el músculo afectado. Ante una sospecha de <b>luxación o fractura</b>: no intentar recolocar el hueso, <b>inmovilizar</b> la zona en la posición en que se encuentra (incluyendo las articulaciones de arriba y abajo) con un cabestrillo o una férula improvisada, y trasladar al centro sanitario o llamar al 112 si es grave o es una fractura abierta.</p>`,
      rejilla("Protocolo PRICE", [["Protección", "parar la actividad"], ["Reposo", "no cargar"], ["Hielo", "envuelto, 15-20 min"], ["Compresión", "vendaje suave"], ["Elevación", "por encima del corazón"], ["Médico", "si no mejora"]])),
    B("1.12 Otras urgencias y el botiquín", `<p>Hay otras situaciones que conviene saber atender:</p>${tabla(["Situación", "Señales", "Qué hacer"], [["Lipotimia o desmayo", "palidez, sudor frío, mareo, pérdida breve de consciencia", "tumbar boca arriba con las piernas elevadas, aflojar ropa, aire fresco"], ["Hipoglucemia (diabetes)", "temblor, sudor, confusión, debilidad", "si está consciente, dar azúcar o un zumo; si no, PLS y 112"], ["Crisis convulsiva", "movimientos bruscos involuntarios, pérdida de consciencia", "apartar objetos, proteger la cabeza, no sujetar ni meter nada en la boca; luego PLS"], ["Crisis de asma", "dificultad para respirar, pitidos", "sentar, tranquilizar, ayudar a usar su inhalador; 112 si no mejora"], ["Golpe en la cabeza", "dolor, vómitos, somnolencia, confusión", "reposo, vigilar 24 horas; urgencias si hay síntomas"]])}<p>En casa, en el instituto y en cualquier salida debería haber un <mark>botiquín</mark> revisado: guantes desechables, gasas estériles, vendas, esparadrapo, apósitos, suero fisiológico, antiséptico (clorhexidina o povidona yodada), tijeras de punta roma, pinzas, manta térmica, bolsa de frío instantáneo y una lista de teléfonos de emergencia. Los medicamentos solo deben darse con indicación médica. Por último, recuerda que tu salud y tu seguridad son lo primero: si la escena es peligrosa, avisa y espera.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Botiquín con su contenido básico: guantes, gasas, vendas, suero, antiséptico, tijeras y manta térmica">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="80" y="18" width="100" height="62" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="3"/>
        <rect x="114" y="10" width="32" height="12" rx="4" fill="none" stroke="var(--red)" stroke-width="3"/>
        <path d="M130 34 v 30 M 115 49 h 30" stroke="var(--red)" stroke-width="8" stroke-linecap="round"/>
        <g ${F} font-size="10.5" font-weight="700" text-anchor="middle">${[["guantes", "var(--pen)"], ["gasas", "var(--leaf)"], ["vendas", "var(--bac)"], ["suero", "var(--inf)"], ["antiséptico", "var(--sun)"], ["tijeras", "var(--muted)"], ["manta térmica", "var(--red)"], ["teléfonos", "var(--ink)"]].map(([t, c], i) => `<text x="${42 + (i % 4) * 59}" y="${112 + Math.floor(i / 4) * 28}" fill="${c}">${t}</text>`).join("")}</g>
      </svg>`),
  ],
  figura: {
    titulo: "Actuar ante una emergencia",
    svg: figCols("Actuar ante una emergencia", [["PAS", ["proteger", "avisar 112", "socorrer"], "var(--red)"], ["No respira", ["RCP 30:2", "100-120/min", "DEA"], "var(--pen)"], ["Respira", ["inconsciente", "PLS", "vigilar"], "var(--leaf)"], ["Lesiones", ["presión directa", "agua 20 min", "PRICE"], "var(--sun)"]]),
  },
  video: { id: "Giqs6LLIx7Y", titulo: "Primeros auxilios: cómo utilizar un desfibrilador", canal: "SIKANA Español", vistas: 801310, megusta: 0, busqueda: "cómo usar un desfibrilador DEA" },
  ejemplos: [
    EX("Una compañera se cae de la bici en una carretera con tráfico. Aplica la conducta PAS.", ["Proteger: señalizar y avisar a los coches, ponerse un chaleco si lo hay.", "Avisar: llamar al 112 indicando lugar exacto, qué ha pasado y su estado.", "Socorrer: valoración primaria y atender lesiones sin moverla si no es necesario."], "Primero la seguridad, después el aviso y la atención."),
    EX("Un hombre está tumbado en el suelo, no responde y respira con normalidad. ¿Qué haces?", ["Comprobar consciencia: no responde.", "Abrir vía aérea con frente-mentón y comprobar respiración 10 s: respira.", "Colocarlo en PLS, llamar al 112 y vigilar su respiración."], "PLS y vigilancia continua."),
    EX("En el polideportivo, una persona se desploma y no respira. Hay tres testigos. Organiza la actuación.", ["Testigo 1: llama al 112 con el altavoz activado.", "Testigo 2: va a buscar el DEA del polideportivo.", "Testigo 3: empieza la RCP de inmediato.", "Al llegar el DEA, se coloca sin interrumpir la RCP más de lo necesario; se turnan cada 2 minutos."], "Repartir tareas acelera toda la cadena de supervivencia."),
    EX("¿Cuántas compresiones hay que hacer en 2 minutos a 110 por minuto con un esquema 30:2?", ["En 2 minutos a 110/min serían 220 compresiones continuas.", "Con pausas para las insuflaciones (unos 5 s cada ciclo), se hacen unos 5 ciclos.", "5 ciclos × 30 = 150 compresiones aprox."], "Unas 150 compresiones y 10 insuflaciones: por eso hay que minimizar las pausas."),
    EX("Un compañero se tuerce el tobillo jugando al baloncesto. Aplica el protocolo.", ["P: dejar de jugar.", "R: no apoyar el pie.", "I: hielo envuelto 15-20 minutos.", "C: vendaje compresivo suave.", "E: pierna elevada; al médico si hay mucho dolor o no puede apoyar."], "Protocolo PRICE."),
    EX("Durante una comida, alguien se lleva las manos al cuello, no puede hablar ni toser. ¿Qué haces?", ["Es una obstrucción grave.", "Darle 5 golpes entre los omóplatos inclinándole hacia delante.", "Si no sale, 5 compresiones abdominales (Heimlich).", "Alternar hasta que salga o pierda la consciencia: entonces, 112 y RCP."], "Golpes en la espalda y compresiones abdominales alternadas."),
  ],
  errores: [
    "Lanzarse a socorrer sin proteger la zona y convertirse en otra víctima.",
    "Colgar el 112 antes de que lo indique el operador o no decir dónde estamos.",
    "No empezar la RCP por miedo a hacer daño.",
    "Echar la cabeza hacia atrás en una hemorragia nasal.",
    "Poner hielo, pasta de dientes o pomadas en una quemadura.",
    "Golpear la espalda a quien tose con fuerza o mover a una víctima con posible lesión de columna sin necesidad.",
  ],
  ejercicios: EJ([
    ["¿Qué son los primeros auxilios?", "Las primeras actuaciones ante un accidente o enfermedad repentina, en el lugar y con los medios disponibles, hasta que llega la ayuda profesional."],
    ["¿Qué significan las siglas PAS?", "Proteger, Avisar y Socorrer."],
    ["¿Cuál es el teléfono de emergencias en Europa?", "El 112."],
    ["¿Qué tres cosas se comprueban en la valoración primaria?", "Consciencia, vía aérea y respiración."],
    ["¿Cuánto tiempo, como máximo, se dedica a comprobar la respiración?", "10 segundos."],
    ["¿Dónde se colocan las manos en la RCP?", "En el centro del pecho, mitad inferior del esternón."],
    ["¿A qué ritmo y profundidad se hacen las compresiones?", "100-120 por minuto y 5-6 cm."],
    ["¿Qué significa DEA?", "Desfibrilador externo automático."],
    ["¿Cuándo se usa la posición lateral de seguridad?", "Cuando la víctima está inconsciente pero respira con normalidad."],
    ["¿Qué haces si alguien atragantado tose con fuerza?", "Animarle a seguir tosiendo."],
    ["¿Cuánto tiempo se enfría una quemadura con agua?", "Unos 20 minutos."],
    ["¿Qué significan las letras de PRICE?", "Protección, reposo, hielo, compresión y elevación."],
  ], [
    ["Explica qué información hay que dar al llamar al 112.", "Dónde estamos (lo más importante), qué ha pasado, cuántas víctimas hay y su estado (si responden y respiran); y no colgar hasta que lo indiquen."],
    ["¿Para qué sirve la maniobra frente-mentón y cómo se hace?", "Para abrir la vía aérea, evitando que la lengua la tape; una mano en la frente echa la cabeza hacia atrás y dos dedos elevan la barbilla."],
    ["¿Qué es la respiración anormal o agónica y qué indica?", "Boqueadas o ruidos aislados que no son una respiración eficaz; indican parada cardiorrespiratoria y hay que empezar la RCP."],
    ["Explica los eslabones de la cadena de supervivencia.", "Reconocer y llamar al 112, RCP precoz, desfibrilación precoz y soporte vital avanzado; los tres primeros los puede hacer cualquier testigo."],
    ["¿Por qué hay que turnarse cada 2 minutos en la RCP?", "Porque el cansancio reduce la calidad (profundidad y ritmo) de las compresiones."],
    ["¿Por qué el DEA es seguro aunque no sepamos usarlo?", "Porque da instrucciones de voz, analiza el ritmo y solo da descarga si es necesaria."],
    ["Describe los pasos de la PLS.", "Brazo cercano en ángulo recto; mano del otro brazo en la mejilla; flexionar la rodilla lejana; girar hacia nosotros; ajustar la pierna en ángulo recto y la cabeza hacia atrás."],
    ["Diferencia obstrucción leve y grave de la vía aérea.", "Leve: tose con fuerza, habla y respira. Grave: no puede toser, hablar ni respirar, se lleva las manos al cuello."],
    ["Explica cómo se realiza la maniobra de Heimlich.", "Desde detrás, rodeando la cintura, un puño entre ombligo y esternón cubierto por la otra mano, y compresiones fuertes hacia dentro y hacia arriba."],
    ["¿Cómo se actúa ante una hemorragia externa importante?", "Guantes si es posible, tumbar, presión directa firme 10 minutos, añadir gasas sin quitar las primeras, vendaje compresivo y llamar al 112."],
    ["Diferencia los tres grados de quemadura.", "Primer grado: piel roja y dolorosa. Segundo: ampollas. Tercero: piel blanca o negra sin dolor por destrucción de nervios."],
    ["¿Qué es el golpe de calor y cómo se actúa?", "Subida grave de la temperatura corporal con piel caliente, mareo y confusión; llamar al 112, sombra, quitar ropa y enfriar con agua."],
    ["¿Cómo se actúa ante una posible fractura?", "No recolocar, inmovilizar en la posición encontrada incluyendo articulaciones vecinas y trasladar o llamar al 112."],
    ["¿Qué hacer ante una crisis convulsiva?", "Apartar objetos, proteger la cabeza, no sujetar ni meter nada en la boca, y al terminar colocar en PLS; llamar al 112 si dura más de 5 minutos o es la primera."],
  ], [
    ["Diseña un cartel para el polideportivo con los pasos a seguir si alguien se desploma.", "Respuesta abierta: seguridad, ¿responde?, ¿respira? (10 s), llamar al 112, RCP 30:2 a 100-120/min, pedir el DEA y seguir sus instrucciones; con dibujos claros y la ubicación del DEA."],
    ["Explica por qué es tan importante que la población sepa hacer RCP, usando datos del tema.", "Sin oxígeno el cerebro se daña en 4-5 minutos y cada minuto sin RCP reduce cerca de un 10 % la supervivencia; la ambulancia tarda de media 10-15 minutos, por lo que solo los testigos pueden actuar a tiempo."],
    ["Analiza la actuación en el caso de Eriksen según la cadena de supervivencia.", "Reconocimiento rápido y aviso por el capitán, protección de la vía aérea, RCP precoz y desfibrilación en los primeros minutos por los servicios médicos: todos los eslabones funcionaron a tiempo."],
    ["Una persona inconsciente tras una caída desde una escalera respira con normalidad. ¿La pondrías en PLS? Razona.", "Hay sospecha de lesión de columna; es preferible no moverla salvo que sea necesario para mantener la vía aérea (vómitos), vigilar la respiración y avisar al 112."],
    ["Escribe el diálogo de una llamada al 112 por un accidente en una excursión.", "Respuesta abierta: incluir ubicación (coordenadas o referencias), qué ha pasado, número de heridos, estado, seguir las indicaciones del operador sin colgar."],
    ["Desmonta tres mitos de primeros auxilios explicando la actuación correcta.", "Echar la cabeza atrás en una hemorragia nasal (no: hacia delante); poner pasta de dientes en una quemadura (no: agua 20 minutos); meter algo en la boca en una convulsión (no: proteger la cabeza)."],
    ["Diseña el contenido de un botiquín para una salida de senderismo de dos días y justifica cada elemento.", "Guantes, gasas, vendas, apósitos para ampollas, suero, antiséptico, tijeras, pinzas, manta térmica, bolsa de frío, crema solar, medicación personal autorizada y teléfonos: cubren heridas, ampollas, esguinces e hipotermia."],
    ["Compara la actuación ante una lipotimia y ante un golpe de calor.", "Lipotimia: tumbar con piernas elevadas, aire fresco, suele recuperarse en minutos. Golpe de calor: emergencia, 112, sombra y enfriamiento activo con agua."],
    ["Organiza un simulacro de emergencia en clase: roles, situación y criterios para evaluarlo.", "Respuesta abierta: víctima, testigos (llamar, buscar DEA, RCP), observadores con lista de control (PAS, valoración, calidad de RCP, tiempo hasta el DEA)."],
    ["Reflexiona: ¿qué miedos impiden a la gente ayudar y cómo se pueden superar?", "Miedo a equivocarse, a hacer daño o a consecuencias legales; se superan con formación práctica, sabiendo que el 112 guía y que el deber de socorro protege a quien ayuda de buena fe."],
  ]),
  quiz: QS([
    ["El primer paso de la conducta PAS es…", ["proteger", "socorrer", "avisar", "trasladar"], "La seguridad primero."],
    ["El teléfono de emergencias es…", ["112", "091", "010", "123"], "Gratuito en toda Europa."],
    ["Lo más importante al llamar al 112 es decir…", ["dónde estás", "tu nombre completo", "tu edad", "la hora"], "Sin ubicación no llega ayuda."],
    ["Para comprobar la consciencia…", ["se le habla y se le tocan los hombros", "se le echa agua", "se le pellizca fuerte", "se espera"], "Estímulo verbal y táctil."],
    ["La maniobra frente-mentón sirve para…", ["abrir la vía aérea", "parar una hemorragia", "colocar la PLS", "hacer RCP"], "La lengua no tapa la garganta."],
    ["Si no respira con normalidad hay que…", ["llamar al 112 e iniciar RCP", "ponerle en PLS", "darle agua", "esperar"], "Parada cardiorrespiratoria."],
    ["La profundidad de las compresiones en un adulto es…", ["5-6 cm", "1-2 cm", "10 cm", "lo que se pueda sin fuerza"], "Brazos rectos."],
    ["El ritmo de compresiones es…", ["100-120 por minuto", "30 por minuto", "200 por minuto", "60 por minuto"], "Ritmo de Stayin' Alive."],
    ["La relación compresiones-insuflaciones es…", ["30:2", "15:1", "5:1", "50:5"], "O solo compresiones."],
    ["El DEA…", ["solo descarga si es necesario", "siempre da descarga", "solo lo usan médicos", "es peligroso"], "Analiza el ritmo."],
    ["Mientras el DEA analiza…", ["nadie toca a la víctima", "se sigue con la RCP", "se mueve a la víctima", "se le da agua"], "Para no alterar el análisis."],
    ["La PLS se usa en una víctima…", ["inconsciente que respira", "consciente", "que no respira", "con una fractura de pierna"], "Mantiene la vía aérea."],
    ["Si alguien atragantado tose con fuerza…", ["se le anima a toser", "se le golpea la espalda", "se le hace Heimlich", "se le da agua"], "Obstrucción leve."],
    ["En la obstrucción grave se alternan…", ["5 golpes en la espalda y 5 compresiones abdominales", "RCP y agua", "PLS y golpes", "nada"], "Hasta que salga."],
    ["Ante una hemorragia importante se aplica…", ["presión directa", "hielo", "alcohol", "un torniquete siempre"], "Al menos 10 minutos."],
    ["En una hemorragia nasal la cabeza va…", ["hacia delante", "hacia atrás", "de lado", "boca abajo"], "La sangre no va a la garganta."],
    ["Una quemadura se enfría con…", ["agua unos 20 minutos", "hielo", "pasta de dientes", "aceite"], "Sin remedios caseros."],
    ["Un esguince es una lesión de…", ["ligamentos", "huesos", "piel", "músculos solo"], "Articulación."],
    ["La «I» de PRICE significa…", ["hielo", "inmovilizar siempre", "insuflar", "inyectar"], "Envuelto, 15-20 minutos."],
    ["Ante una posible fractura…", ["se inmoviliza como está", "se recoloca el hueso", "se masajea", "se camina"], "Sin manipular."],
  ]),
  examen: QS([
    ["Las ampollas indican una quemadura de…", ["segundo grado", "primer grado", "tercer grado", "ninguno"], "Afecta a la dermis."],
    ["Ante una crisis convulsiva no se debe…", ["meter nada en la boca", "proteger la cabeza", "apartar objetos", "llamar al 112"], "Tras la crisis, PLS."],
    ["Ante una lipotimia se colocan las piernas…", ["elevadas", "dobladas", "en PLS", "cruzadas"], "Más sangre al cerebro."],
    ["Si hay varios testigos de una parada…", ["se reparten tareas", "todos hacen RCP a la vez", "nadie actúa", "esperan al médico"], "112, DEA y RCP."],
    ["La causa más frecuente de parada en adultos es…", ["la fibrilación ventricular", "una fractura", "una quemadura", "un esguince"], "Por eso el DEA."],
    ["La maniobra de Heimlich se hace con el puño…", ["entre ombligo y esternón", "en el cuello", "en la espalda", "en las costillas"], "Hacia dentro y arriba."],
    ["A una persona herida y consciente…", ["no se le da de comer ni de beber", "se le da agua siempre", "se le da un analgésico", "se le deja sola"], "Norma del socorrista."],
    ["Un golpe de calor se atiende…", ["enfriando y llamando al 112", "con mantas", "con ejercicio suave", "con bebidas calientes"], "Emergencia."],
  ]),
  feynman: ["Qué es la conducta PAS y cómo se llama al 112", "Cómo se hace la valoración primaria", "Cómo se hace la RCP y se usa un DEA", "Qué hacer ante un atragantamiento y cuándo usar la PLS", "Cómo atender heridas, hemorragias, quemaduras y esguinces"],
  mapa: mapa("PRIMEROS AUXILIOS", "var(--red)", [
    ["PAS", "proteger · avisar · socorrer", "var(--pen)"],
    ["Vital", "valoración · RCP · DEA · PLS", "var(--red)"],
    ["Atragantamiento", "toser · golpes · Heimlich", "var(--bac)"],
    ["Lesiones", "hemorragias · quemaduras · PRICE", "var(--sun)"],
  ], 280),
  tarjetas: [
    ["PAS", "Proteger, avisar y socorrer."],
    ["112", "Teléfono de emergencias europeo."],
    ["Valoración primaria", "Consciencia, vía aérea y respiración."],
    ["Frente-mentón", "Maniobra para abrir la vía aérea."],
    ["RCP", "30 compresiones y 2 insuflaciones, 100-120/min, 5-6 cm."],
    ["DEA", "Desfibrilador que analiza y descarga solo si hace falta."],
    ["PLS", "Postura para víctima inconsciente que respira."],
    ["Heimlich", "Compresiones abdominales en la obstrucción grave."],
    ["Hemorragia", "Presión directa al menos 10 minutos."],
    ["Quemadura", "Agua 20 minutos, sin hielo ni pomadas."],
    ["PRICE", "Protección, reposo, hielo, compresión, elevación."],
    ["Fractura", "Inmovilizar sin recolocar."],
  ],
  glosario: [
    ["Primeros auxilios", "Primeras actuaciones ante un accidente hasta que llega ayuda profesional."],
    ["Conducta PAS", "Secuencia proteger, avisar y socorrer."],
    ["Valoración primaria", "Comprobación de consciencia, vía aérea y respiración."],
    ["Parada cardiorrespiratoria", "Interrupción brusca de la circulación y la respiración."],
    ["RCP", "Reanimación cardiopulmonar: compresiones e insuflaciones."],
    ["DEA", "Desfibrilador externo automático."],
    ["Fibrilación ventricular", "Ritmo cardiaco caótico que impide bombear sangre."],
    ["Cadena de supervivencia", "Secuencia de acciones que aumentan la supervivencia en una parada."],
    ["PLS", "Posición lateral de seguridad."],
    ["Obstrucción de la vía aérea", "Bloqueo del paso del aire por un cuerpo extraño."],
    ["Maniobra de Heimlich", "Compresiones abdominales para desobstruir la vía aérea."],
    ["Hemorragia", "Salida de sangre de los vasos sanguíneos."],
    ["Esguince", "Lesión de los ligamentos de una articulación."],
    ["Luxación", "Desplazamiento de los huesos de una articulación."],
    ["Fractura", "Rotura de un hueso."],
    ["Golpe de calor", "Aumento grave de la temperatura corporal."],
    ["Lipotimia", "Pérdida breve de consciencia por falta de riego cerebral."],
  ],
  situacion: {
    titulo: "Instituto cardioprotegido",
    reto: "El instituto quiere convertirse en un «centro cardioprotegido». Vuestra clase se encargará de formar al alumnado de 1º ESO en la cadena de supervivencia y de preparar un protocolo de emergencias para el centro.",
    pasos: [
      "Aprende y practica por parejas la valoración primaria, la RCP con maniquí, la PLS y la actuación ante un atragantamiento.",
      "Localiza el DEA y el botiquín del centro (o propón dónde deberían estar) y revisa su contenido.",
      "Redacta un protocolo de emergencias de una página: a quién avisar, qué hacer, dónde está el material.",
      "Prepara en grupo un taller de 20 minutos para 1º ESO con demostraciones y una canción para el ritmo de la RCP.",
      "Imparte el taller y evalúa con un cuestionario lo que han aprendido.",
    ],
    producto: "Protocolo de emergencias del centro y taller práctico de RCP para 1º ESO.",
    evaluacion: [
      "Domina la técnica de la RCP (posición, ritmo y profundidad), la PLS y la desobstrucción.",
      "El protocolo es claro, correcto y útil para el centro.",
      "El taller transmite los pasos con rigor y de forma adaptada a los más pequeños.",
      "Coopera con su grupo y actúa con responsabilidad y calma en los simulacros.",
    ],
  },
  familias: ["Comprobad juntos dónde está el DEA más cercano a casa y al polideportivo.", "Revisad el botiquín de casa y la fecha de caducidad de su contenido.", "Pedidle que os enseñe a hacer la RCP con un cojín como maniquí.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Vida activa y saludable (RD 217/2022, Educación Física 4º ESO): protocolos de actuación ante accidentes, conducta PAS, soporte vital básico (RCP y uso del DEA), posición lateral de seguridad, desobstrucción de la vía aérea y atención a lesiones y urgencias frecuentes en la actividad física.",
    ideas: ["Prácticas con maniquíes de RCP y DEA de entrenamiento.", "Simulacros por estaciones con roles y lista de control.", "Colaboración con Cruz Roja o el centro de salud para una sesión práctica.", "Aprendizaje-servicio: taller de RCP impartido por el alumnado a cursos inferiores."],
  },
  fuentes: [
    RD,
    { t: "European Resuscitation Council: guías de resucitación 2021", url: "https://www.cprguidelines.eu/" },
    { t: "Consejo Español de Resucitación Cardiopulmonar", url: "https://www.cercp.org/" },
    { t: "Cruz Roja Española: primeros auxilios", url: "https://www2.cruzroja.es/primeros-auxilios" },
  ],
  revisado: "2026-11-13",
};
