// Educación Física, 1º de Bachillerato. Tema 8, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1-ef");

// Cadena de supervivencia: cuatro eslabones.
const cadena = B.lienzo("Cadena de supervivencia: reconocer y llamar al 112, RCP precoz, desfibrilación precoz y cuidados avanzados", `
  ${[["112", "reconocer y llamar", "var(--red)"], ["RCP", "compresiones inmediatas", "var(--sun)"], ["DEA", "descarga precoz", "var(--leaf)"], ["SVA", "cuidados avanzados", "var(--pen)"]].map(([a, b, c], i) => {
    const x = 18 + i * 58;
    return `<rect x="${x}" y="52" width="50" height="40" rx="20" fill="none" stroke="${c}" stroke-width="5"/>${B.tx(x + 25, 78, a, { fs: 13, maxW: 40, bold: true, color: c })}${B.tx(x + 25, 112, b.split(" ")[0], { fs: 10, maxW: 56 })}${B.tx(x + 25, 126, b.split(" ").slice(1).join(" "), { fs: 10, maxW: 56 })}`;
  }).join("")}
  ${B.tx(130, 30, "Cada minuto sin RCP baja un 10 % la supervivencia", { fs: 11, maxW: 236, bold: true })}
  ${B.tx(130, 158, "tú puedes hacer los tres primeros eslabones", { fs: 10.5, maxW: 236, color: "var(--muted)" })}`, "");

// Posición de las manos y ritmo de la RCP.
const rcp = B.lienzo("RCP: manos entrelazadas en el centro del pecho, brazos rectos, compresiones de 5-6 cm a 100-120 por minuto", `
  <path d="M30 140 H 230" stroke="var(--line)" stroke-width="3"/>
  <ellipse cx="96" cy="128" rx="60" ry="12" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
  <circle cx="30" cy="124" r="12" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <path d="M96 112 L 120 40 M120 40 L 150 60 M120 40 L 140 92" stroke="var(--pen)" stroke-width="4" stroke-linecap="round" fill="none"/><circle cx="124" cy="30" r="9" fill="none" stroke="var(--pen)" stroke-width="3"/>
  <path d="M96 112 V 100" stroke="var(--red)" stroke-width="5"/>
  ${B.tx(200, 56, "5-6 cm", { fs: 12, maxW: 70, bold: true, color: "var(--red)" })}${B.tx(200, 76, "100-120/min", { fs: 12, maxW: 80, bold: true, color: "var(--red)" })}${B.tx(200, 96, "30 : 2", { fs: 12, maxW: 70, bold: true, color: "var(--sun)" })}
  ${B.tx(96, 164, "centro del pecho", { fs: 10, maxW: 90, color: "var(--muted)" })}`, "");

module.exports = B.tema({
  titulo: "Primeros auxilios y prevención de lesiones",
  minutos: 110,
  objetivos: [
    "Aplicar la conducta PAS y la valoración primaria ante una emergencia, y avisar correctamente al 112",
    "Realizar la posición lateral de seguridad, la RCP básica con DEA y la maniobra ante un atragantamiento",
    "Reconocer las lesiones deportivas más frecuentes y actuar ante ellas con criterio",
    "Prevenir lesiones con calentamiento, progresión, técnica, material adecuado y un botiquín básico",
  ],
  claves: ["primeros auxilios", "PAS", "112", "valoración primaria", "PLS", "RCP", "DEA", "atragantamiento", "esguince", "hemorragia", "golpe de calor", "prevención"],
  pregunta: {
    texto: "Si una persona se desploma en la pista y deja de respirar, ¿cuánto tiempo hay para actuar antes de que llegue la ambulancia?",
    respuesta: "Muy poco: <mark>cada minuto sin reanimación reduce en torno a un 10 % la probabilidad de sobrevivir</mark>, y la ambulancia suele tardar más de ocho minutos. Por eso lo que hagan las personas que están allí en los primeros minutos (llamar al 112, empezar las compresiones y usar un desfibrilador) puede salvar la vida. No hace falta ser sanitario: hace falta saber qué hacer y atreverse.",
  },
  lectura: {
    titulo: "Seis minutos en Copenhague",
    html: `<p>El 12 de junio de 2021, durante un partido de la Eurocopa entre Dinamarca y Finlandia, el futbolista danés Christian Eriksen se desplomó en el campo. Sufrió una parada cardiaca. Su compañero Simon Kjær llegó el primero, le colocó de lado, comprobó que no se ahogaba y llamó a gritos a los sanitarios. En pocos segundos empezaron las compresiones torácicas y, a los pocos minutos, una descarga con desfibrilador le devolvió el latido.</p>
    <p>Eriksen volvió a jugar al fútbol profesional meses después. Los médicos coincidieron en que la rapidez de la actuación fue decisiva. Sin embargo, la mayoría de las paradas cardiacas no ocurren en un estadio con sanitarios, sino en casa, en la calle o en un polideportivo, y allí la vida depende de las personas que estén cerca.</p>
    <p>En países donde se enseña reanimación en la escuela, la proporción de testigos que actúan se ha multiplicado. Este tema te enseña a actuar en una emergencia, a atender las lesiones más frecuentes del deporte y, sobre todo, a prevenirlas.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Qué son los primeros auxilios",
      html: `<p>Los <b>primeros auxilios</b> son la atención inmediata que se presta a una persona accidentada o que enferma de forma repentina, hasta que llega la ayuda especializada. No buscan curar, sino:</p>
      <ul><li><b>Mantener la vida</b> (respiración y circulación).</li>
      <li><b>Evitar que empeoren</b> las lesiones.</li>
      <li><b>Aliviar el dolor</b> y tranquilizar.</li>
      <li><b>Facilitar</b> la llegada y el trabajo de los servicios de emergencia.</li></ul>
      <p>Hay que conocer los propios límites: hacer solo lo que se sabe hacer, no mover a un herido salvo que haya peligro, no dar comida, bebida ni medicamentos y no dejar sola a la víctima. Ante la duda, lo correcto es avisar y seguir las instrucciones del 112.</p>
      <p>En España, la omisión del deber de socorro es un delito: no se puede abandonar a una persona en peligro grave si se la puede ayudar sin riesgo para uno mismo. Ayudar puede ser tan sencillo como <mark>llamar al 112 y quedarse con la víctima</mark>.</p>`,
      svg: B.cajas("Objetivos de los primeros auxilios", [["Mantener la vida", "respirar y latir"], ["No empeorar", "no mover sin motivo"], ["Aliviar", "dolor y ansiedad"], ["Facilitar", "avisar y guiar"]], { t: "Primeros auxilios" }),
    },
    {
      h: "La conducta PAS",
      html: `<p>Ante cualquier accidente se sigue la secuencia <b>PAS</b>, en este orden:</p>
      <ul><li><b>Proteger</b>: asegurar el lugar para que no haya más víctimas, empezando por uno mismo. Por ejemplo, señalizar un accidente de tráfico, cortar la corriente si alguien se ha electrocutado, alejarse de un fuego. Si el lugar no es seguro y no se puede asegurar, no se entra.</li>
      <li><b>Avisar</b>: llamar al <b>112</b> (o pedir a alguien concreto que lo haga: «tú, llama al 112 y vuelve»).</li>
      <li><b>Socorrer</b>: atender a la víctima con las técnicas de primeros auxilios, empezando por lo que amenaza la vida.</li></ul>
      <p>El orden es fundamental: un socorrista herido no ayuda a nadie y una víctima sin aviso no recibe ayuda profesional. Si hay varias víctimas, se atiende primero a quien está inconsciente y no respira, después a quien sangra mucho y, por último, a quien grita o se queja (porque respira y está consciente).</p>`,
      svg: B.flujo("Conducta PAS", ["Proteger: lugar seguro para todos", "Avisar: 112 (o encargarlo a alguien)", "Socorrer: primero lo vital", "Quedarse con la víctima", "Informar a la ayuda que llega"], { t: "PAS" }),
      video: { id: "fUh1k5SmlxM", titulo: "Primeros auxilios: conducta PAS y valoración inicial de una persona accidentada", canal: "Cruz Roja en Euskadi", vistas: 104064 },
    },
    {
      h: "La valoración primaria",
      html: `<p>Al llegar a la víctima, la <b>valoración primaria</b> busca lo que amenaza su vida en pocos segundos:</p>
      <ol><li><b>¿Responde?</b> Acercarse, sujetar suavemente los hombros y preguntar en voz alta: «¿Se encuentra bien?». Si responde, se le deja en la posición en que esté (si no hay peligro), se averigua qué le pasa y se pide ayuda si hace falta.</li>
      <li>Si <b>no responde</b>, se grita pidiendo ayuda y se <b>abre la vía aérea</b>: una mano en la frente y dos dedos de la otra bajo el mentón, inclinando la cabeza hacia atrás (maniobra frente-mentón). Así la lengua no tapa la garganta.</li>
      <li><b>¿Respira con normalidad?</b> Durante <b>no más de 10 segundos</b>, ver si se mueve el pecho, oír y sentir la respiración. Unas boqueadas lentas y ruidosas (<b>respiración agónica</b>) <mark>no son respiración normal</mark>: son un signo de parada cardiaca.</li></ol>
      <p>Con el resultado se decide: si responde, se atiende y vigila; si no responde pero respira normal, posición lateral de seguridad; si no responde y no respira normal, llamar al 112 y empezar la RCP.</p>`,
      svg: B.rejilla("Decisión tras la valoración primaria", ["¿Responde?", "¿Respira?", "Qué hacer"], [["Sí", "sí", "atender y vigilar"], ["No", "sí, normal", "PLS y 112"], ["No", "no o agónica", "112 + RCP + DEA"]], { t: "Decidir en 10 segundos" }),
    },
    {
      h: "Llamar al 112",
      html: `<p>El <b>112</b> es el número único de emergencias en toda la Unión Europea. Es gratuito, funciona aunque el móvil no tenga saldo y, si no hay cobertura de tu compañía, usa la de otra. Atiende un operador que coordina sanitarios, bomberos y policía.</p>
      <p>Al llamar, conviene mantener la calma y dar esta información:</p>
      <ul><li><b>Qué</b> ha pasado: una persona inconsciente que no respira, un accidente, una caída.</li>
      <li><b>Dónde</b>: dirección exacta, nombre del polideportivo o de la ruta, punto kilométrico, referencias. Las aplicaciones de emergencia y el GPS del móvil ayudan a localizar.</li>
      <li><b>Cuántas</b> personas están afectadas y <b>cómo</b> están (consciente, respira, sangra).</li>
      <li><b>Quién</b> llama y un teléfono de contacto.</li></ul>
      <p>No hay que colgar hasta que lo diga el operador, que además puede guiarte paso a paso en la RCP. Poner el teléfono en <b>altavoz</b> permite hablar mientras se hacen las compresiones. Si hay más gente, se encarga a alguien concreto que traiga el desfibrilador más cercano.</p>`,
      svg: B.cajas("Qué decir al 112", [["Qué", "ha pasado"], ["Dónde", "lugar exacto"], ["Cuántos y cómo", "estado de las víctimas"], ["Quién", "y teléfono"]], { t: "Llamada eficaz" }),
    },
    {
      h: "La posición lateral de seguridad",
      html: `<p>La <b>posición lateral de seguridad</b> (PLS) se usa con una persona <b>inconsciente que respira con normalidad</b> y sin sospecha de lesión de columna grave. Mantiene la vía aérea abierta y permite que, si vomita, el contenido salga por la boca y no vaya a los pulmones.</p>
      <p>Pasos básicos con la víctima boca arriba:</p>
      <ol><li>Arrodillado a su lado, colocar el brazo más cercano en ángulo recto, con la palma hacia arriba.</li>
      <li>Llevar el otro brazo cruzado sobre el pecho y apoyar el dorso de su mano en la mejilla más cercana a ti.</li>
      <li>Doblar la rodilla de la pierna más alejada, con el pie apoyado en el suelo.</li>
      <li>Tirando de esa rodilla, girar a la persona hacia ti, de lado.</li>
      <li>Colocar la pierna de arriba con la cadera y la rodilla en ángulo recto e inclinar la cabeza hacia atrás para mantener la vía aérea abierta.</li></ol>
      <p>Después se llama al 112 (si no se ha hecho) y se <b>comprueba la respiración</b> de forma continua. Si deja de respirar con normalidad, se vuelve a poner boca arriba y se empieza la RCP. Si la PLS dura mucho, se cambia de lado cada 30 minutos.</p>`,
      svg: B.flujo("Posición lateral de seguridad", ["Brazo cercano en ángulo recto", "Mano lejana en su mejilla", "Doblar la rodilla lejana", "Girar hacia ti tirando de la rodilla", "Cabeza atrás y vigilar respiración"], { t: "PLS" }),
      video: { id: "gbsa_uMjHIQ", titulo: "Posición lateral de seguridad (PLS)", canal: "Cruz Roja en Euskadi", vistas: 516974 },
    },
    {
      h: "La reanimación cardiopulmonar",
      html: `<p>Si la persona <b>no responde y no respira con normalidad</b>, está en <b>parada cardiorrespiratoria</b>: el corazón no bombea sangre y el cerebro empieza a dañarse en pocos minutos. Hay que llamar al 112 y empezar la <b>reanimación cardiopulmonar</b> (RCP):</p>
      <ul><li>Colocar a la persona boca arriba sobre una superficie dura.</li>
      <li>Poner el talón de una mano en el <b>centro del pecho</b> (mitad inferior del esternón) y la otra encima, con los dedos entrelazados.</li>
      <li>Con los <b>brazos rectos</b> y los hombros sobre las manos, comprimir <b>5-6 cm</b> de profundidad a un ritmo de <b>100-120 por minuto</b> (el ritmo de canciones como «La Macarena» o «Stayin' Alive»), dejando que el pecho vuelva a subir del todo.</li>
      <li>Si se sabe y se quiere, alternar <b>30 compresiones y 2 ventilaciones</b> boca a boca. Si no, hacer solo compresiones continuas: <mark>es mucho mejor que no hacer nada</mark>.</li></ul>
      <p>No se para hasta que llegue la ayuda profesional, la víctima empiece a respirar normalmente o el socorrista quede agotado. Si hay varias personas, conviene relevarse cada dos minutos para mantener la calidad. No hay que tener miedo a hacer daño: sin RCP, la persona no sobrevivirá.</p>`,
      svg: rcp,
    },
    {
      h: "El desfibrilador",
      html: `<p>La mayoría de las paradas cardiacas en adultos se deben a una <b>fibrilación ventricular</b>: el corazón tiembla de forma caótica y no bombea. El único tratamiento eficaz es una descarga eléctrica con un <b>desfibrilador</b>. Los desfibriladores externos automáticos o semiautomáticos (<b>DEA</b> o DESA) están pensados para que los use cualquier persona:</p>
      <ol><li><b>Encenderlo</b> y seguir sus instrucciones de voz.</li>
      <li><b>Colocar los parches</b> sobre el pecho desnudo y seco, como indican los dibujos de los propios parches: uno bajo la clavícula derecha y otro en el costado izquierdo, debajo de la axila.</li>
      <li>El aparato <b>analiza</b> el ritmo: nadie debe tocar a la víctima.</li>
      <li>Si recomienda descarga, asegurarse de que nadie toca a la persona y <b>pulsar el botón</b> (en los automáticos la da solo).</li>
      <li><b>Reanudar la RCP</b> de inmediato y seguir las instrucciones; el DEA volverá a analizar cada dos minutos.</li></ol>
      <p>El DEA solo da descarga si es necesaria, así que no se puede hacer daño. Muchos lugares públicos (polideportivos, estaciones, centros comerciales, institutos) tienen uno: conviene saber dónde está el más cercano.</p>`,
      svg: cadena,
    },
    {
      h: "El atragantamiento",
      html: `<p>El <b>atragantamiento</b> ocurre cuando un objeto o alimento obstruye la vía aérea. La actuación depende de si la obstrucción es parcial o total:</p>
      <ul><li><b>Obstrucción parcial</b>: la persona puede toser, hablar o respirar con dificultad. Hay que <b>animarla a toser</b> con fuerza y no hacer nada más; no se le dan golpes ni agua.</li>
      <li><b>Obstrucción total</b>: no puede hablar, toser ni respirar, y a menudo se lleva las manos al cuello. Hay que actuar:<ol>
      <li>Dar hasta <b>5 golpes en la espalda</b>, entre los omóplatos, con el talón de la mano, con la persona inclinada hacia delante.</li>
      <li>Si no sale, hacer hasta <b>5 compresiones abdominales</b> (maniobra de Heimlich): por detrás, un puño entre el ombligo y el esternón, la otra mano encima, y tirar con fuerza hacia dentro y hacia arriba.</li>
      <li>Alternar 5 golpes y 5 compresiones hasta que se expulse el objeto.</li></ol></li></ul>
      <p>Si la persona pierde el conocimiento, se la tumba con cuidado, se llama al 112 y se empieza la RCP. Tras una maniobra de Heimlich conviene una revisión médica. En embarazadas y personas obesas las compresiones se hacen en el pecho, y en bebés la técnica es distinta.</p>`,
      svg: B.comparar("Obstrucción parcial frente a total", ["Parcial", ["tose y habla", "respira con ruido", "animar a toser", "no golpear"]], ["Total", ["no tose ni habla", "manos al cuello", "5 golpes espalda", "5 compresiones"]]),
    },
    {
      h: "Las lesiones deportivas",
      html: `<p>Las lesiones más frecuentes en la práctica deportiva afectan al aparato locomotor:</p>
      <ul><li><b>Contusión</b>: golpe sin herida, con dolor e inflamación; si hay rotura de vasos aparece el hematoma.</li>
      <li><b>Lesiones musculares</b>: <b>calambre</b> (contracción involuntaria y dolorosa), <b>contractura</b> (zona del músculo contraída de forma mantenida), <b>distensión</b> o <b>rotura fibrilar</b> (pinchazo súbito durante un esfuerzo; es el típico «tirón»).</li>
      <li><b>Esguince</b>: lesión de los ligamentos de una articulación al forzar su movimiento (muy frecuente en el tobillo). Hay dolor, inflamación y a veces hematoma.</li>
      <li><b>Luxación</b>: los huesos de una articulación pierden su posición (hombro, dedos). Hay deformidad visible y gran dolor.</li>
      <li><b>Fractura</b>: rotura de un hueso, con dolor intenso, deformidad e impotencia funcional. Puede ser abierta si el hueso rompe la piel.</li>
      <li><b>Tendinopatías</b>: lesiones de los tendones por sobrecarga, como la del tendón de Aquiles o la rodilla del saltador.</li></ul>
      <p>Unas son <b>agudas</b>, por un mecanismo brusco (caída, choque, torcedura), y otras son <b>por sobrecarga</b>, por repetir mucho un gesto sin recuperación suficiente.</p>`,
      svg: B.rejilla("Lesiones deportivas frecuentes", ["Lesión", "Afecta a", "Signo típico"], [["Contusión", "partes blandas", "golpe, hematoma"], ["Rotura fibrilar", "músculo", "pinchazo"], ["Esguince", "ligamento", "torcedura"], ["Luxación", "articulación", "deformidad"], ["Fractura", "hueso", "dolor e impotencia"]], { t: "Tipos de lesión" }),
      video: { id: "u916ORZtiq0", titulo: "Tratamiento y recuperación de un esguince de tobillo", canal: "FisioOnline", vistas: 4666269 },
    },
    {
      h: "Actuar ante una lesión",
      html: `<p>Ante una lesión aguda leve o moderada del aparato locomotor (contusión, esguince, rotura fibrilar), la actuación inicial se resume en el protocolo <b>PRICE</b> (o su versión actualizada <b>POLICE</b>):</p>
      <ul><li><b>Protección</b>: parar la actividad y proteger la zona para no agravar la lesión.</li>
      <li><b>Reposo relativo</b> o <b>carga óptima</b>: no forzar, pero tampoco inmovilizar de más; en cuanto el dolor lo permita, moverse con suavidad ayuda a recuperarse.</li>
      <li><b>Hielo</b> (<i>ice</i>): frío local envuelto en un paño (nunca directo sobre la piel), unos 15-20 minutos, varias veces al día en las primeras 48 horas, para el dolor.</li>
      <li><b>Compresión</b>: vendaje compresivo suave para limitar la inflamación.</li>
      <li><b>Elevación</b>: elevar la zona por encima del corazón.</li></ul>
      <p>En los calambres se estira suavemente el músculo afectado. Ante una sospecha de <b>fractura o luxación</b> no se intenta colocar el hueso: se inmoviliza en la posición encontrada, se aplica frío y se traslada o se llama al 112. Ante un golpe en la cabeza con pérdida de conocimiento, confusión, vómitos o mareo, la persona debe dejar de jugar y ser valorada por un médico: <mark>ante la duda, fuera del campo</mark>.</p>`,
      svg: B.cajas("Protocolo PRICE ante lesiones", [["P · Protección", "parar y proteger"], ["R · Reposo relativo", "carga óptima"], ["I · Hielo", "15-20 min envuelto"], ["C · Compresión", "vendaje suave"], ["E · Elevación", "sobre el corazón"], ["Fractura", "inmovilizar y 112"]], { t: "PRICE / POLICE", cols: 3 }),
    },
    {
      h: "Heridas, hemorragias, calor y otras urgencias",
      html: `<p>Otras situaciones frecuentes en la actividad física:</p>
      <ul><li><b>Heridas</b> leves: lavarse las manos (y usar guantes), limpiar la herida con agua y jabón o suero de dentro hacia fuera, aplicar un antiséptico y cubrir con un apósito. No usar algodón, que deja restos.</li>
      <li><b>Hemorragia externa</b>: presionar directamente sobre la herida con un apósito o paño limpio durante al menos 10 minutos y no levantarlo para mirar. Si sangra mucho, llamar al 112.</li>
      <li><b>Hemorragia nasal</b>: sentarse con la cabeza ligeramente <b>hacia delante</b> (no hacia atrás) y presionar la parte blanda de la nariz 10 minutos.</li>
      <li><b>Golpe de calor</b>: temperatura muy alta, piel caliente, confusión, puede perder el conocimiento. Es una emergencia: llamar al 112, llevar a la sombra, enfriar con agua y paños mojados y, si está consciente, dar agua a sorbos.</li>
      <li><b>Lipotimia</b> o desmayo: tumbar a la persona boca arriba con las piernas elevadas y aflojar la ropa.</li>
      <li><b>Hipoglucemia</b> en una persona con diabetes: si está consciente, darle azúcar (zumo, azucarillos).</li></ul>
      <p>Si un compañero tiene una enfermedad (asma, diabetes, alergia grave), conviene saber dónde guarda su medicación (inhalador, autoinyector de adrenalina) y cómo ayudarle.</p>`,
      svg: B.rejilla("Actuación en urgencias frecuentes", ["Situación", "Qué hacer"], [["Herida", "lavar, antiséptico, apósito"], ["Hemorragia", "presionar 10 min"], ["Nariz", "cabeza adelante y pinzar"], ["Golpe de calor", "112, sombra, enfriar"], ["Desmayo", "tumbar y piernas arriba"]], { t: "Saber qué hacer" }),
    },
    {
      h: "Prevenir lesiones y el botiquín",
      html: `<p>La mejor forma de atender una lesión es <b>evitarla</b>. Las principales medidas de prevención son:</p>
      <ul><li><b>Calentamiento</b> adecuado y vuelta a la calma.</li>
      <li><b>Progresión</b> de las cargas y descanso suficiente, para evitar la sobrecarga (tema 1).</li>
      <li><b>Fuerza</b> y <b>propiocepción</b> (equilibrio y control articular): los programas de prevención con ejercicios de fuerza, saltos y equilibrio reducen notablemente los esguinces y las lesiones de rodilla.</li>
      <li><b>Técnica correcta</b> en los gestos deportivos y en el levantamiento de cargas.</li>
      <li><b>Material</b> adecuado: calzado específico, protecciones (casco en bici, espinilleras, bucal), instalaciones en buen estado.</li>
      <li><b>Hidratación</b>, alimentación y sueño suficientes.</li>
      <li><b>Escuchar al cuerpo</b>: no entrenar con dolor ni con fiebre, y volver a la actividad de forma progresiva tras una lesión.</li></ul>
      <p>En casa, en el instituto y en las salidas conviene tener un <b>botiquín</b> básico: guantes desechables, gasas estériles, suero fisiológico, antiséptico (clorhexidina), apósitos y tiritas, vendas elásticas, esparadrapo, tijeras de punta roma, pinzas, manta térmica y bolsa de frío instantáneo. Se revisa periódicamente la caducidad.</p>`,
      svg: B.estrella("Claves de la prevención de lesiones", "Prevenir", ["Calentar", "Progresar", "Fuerza", "Técnica", "Material", "Descansar"]),
    },
  ],
  figura: {
    titulo: "Primeros auxilios y prevención en cuatro ideas",
    items: [["Actuar", "PAS", "proteger, avisar", "y socorrer"], ["Llamar", "112", "qué, dónde,", "cuántos y cómo"], ["Reanimar", "30 : 2", "100-120/min", "y DEA cuanto antes"], ["Lesiones", "PRICE", "y prevenir con", "fuerza y progresión"]],
  },
  video: { id: "FvqMWfo0Hbs", titulo: "RCP en acción: una mirada en 3D dentro del cuerpo", canal: "SaveStation", vistas: 1771615 },
  quiz: [
    ["Los primeros auxilios buscan…", ["curar la lesión", "mantener la vida y evitar que empeore hasta que llegue la ayuda", "sustituir al médico", "dar medicamentos"], 1, "Atención inicial."],
    ["El orden de la conducta PAS es…", ["socorrer, avisar, proteger", "proteger, avisar, socorrer", "avisar, socorrer, proteger", "da igual"], 1, "Primero la seguridad."],
    ["Si el lugar no es seguro y no se puede asegurar…", ["se entra igual", "no se entra y se avisa", "se mueve a la víctima siempre", "se espera sin avisar"], 1, "Evitar más víctimas."],
    ["Con varias víctimas, se atiende primero a quien…", ["grita más", "está inconsciente y no respira", "tiene una herida pequeña", "está de pie"], 1, "Quien grita respira."],
    ["La maniobra frente-mentón sirve para…", ["comprobar el pulso", "abrir la vía aérea", "hacer compresiones", "colocar la PLS"], 1, "Evita que la lengua tape la garganta."],
    ["Para comprobar la respiración se emplean como máximo…", ["2 segundos", "10 segundos", "1 minuto", "5 minutos"], 1, "Ver, oír y sentir."],
    ["Unas boqueadas lentas y ruidosas son…", ["respiración normal", "un signo de parada cardiaca", "un ronquido sin importancia", "hipo"], 1, "Respiración agónica: RCP."],
    ["El 112…", ["solo funciona con saldo", "es gratuito y único en la UE", "solo es para incendios", "no funciona sin cobertura propia"], 1, "Usa otra red si hace falta."],
    ["La PLS se usa con una persona…", ["consciente", "inconsciente que respira con normalidad", "que no respira", "con fractura de columna"], 1, "Mantiene la vía aérea."],
    ["La profundidad de las compresiones en un adulto es de…", ["1-2 cm", "5-6 cm", "10 cm", "lo que se pueda sin tocar"], 1, "Brazos rectos."],
    ["El ritmo de las compresiones es de…", ["60 por minuto", "100-120 por minuto", "200 por minuto", "30 por minuto"], 1, "Como «Stayin' Alive»."],
    ["La relación compresiones/ventilaciones es…", ["15:2", "30:2", "5:1", "2:30"], 1, "O solo compresiones si no se sabe."],
    ["Cada minuto sin RCP la supervivencia baja aproximadamente…", ["un 1 %", "un 10 %", "un 50 %", "nada"], 1, "Actuar rápido."],
    ["El DEA…", ["puede dar descargas a cualquiera", "solo descarga si es necesario", "requiere ser médico", "sustituye a la RCP"], 1, "Analiza el ritmo."],
    ["Mientras el DEA analiza…", ["se siguen las compresiones", "nadie toca a la víctima", "se le da agua", "se le mueve"], 1, "Para no alterar el análisis."],
    ["Si alguien atragantado tose con fuerza…", ["maniobra de Heimlich", "animarle a toser", "darle agua", "golpearle fuerte"], 1, "Obstrucción parcial."],
    ["En la obstrucción total, primero se dan…", ["10 compresiones", "5 golpes en la espalda", "agua", "RCP"], 1, "Después 5 compresiones abdominales."],
    ["Un esguince es una lesión de…", ["músculo", "ligamento", "hueso", "piel"], 1, "Torcedura articular."],
    ["En el protocolo PRICE, el hielo se aplica…", ["directo sobre la piel 1 hora", "envuelto en un paño 15-20 min", "solo al día siguiente", "nunca"], 1, "Para el dolor."],
    ["Ante una hemorragia nasal la cabeza va…", ["hacia atrás", "ligeramente hacia delante", "tumbado boca arriba", "entre las rodillas"], 1, "Evitar tragar sangre."],
  ],
  examen: [
    ["Un compañero cae en la pista, no responde y respira con normalidad. Haces…", ["RCP", "PLS, 112 y vigilar la respiración", "darle agua", "levantarle"], 1, "Inconsciente que respira."],
    ["Una persona se desploma, no responde y solo hace boqueadas. Lo correcto es…", ["esperar", "112 en altavoz, RCP y pedir el DEA", "PLS", "agua fría"], 1, "Parada cardiaca."],
    ["Estás solo con el móvil ante una parada. ¿Qué haces?", ["buscar ayuda 10 minutos", "llamar al 112 en altavoz y empezar compresiones", "hacer solo ventilaciones", "no hacer nada"], 1, "El operador guía."],
    ["En una RCP de 2 minutos a 110 por minuto se hacen unas…", ["50 compresiones", "220 compresiones", "1.000 compresiones", "30 compresiones"], 1, "Solo compresiones continuas."],
    ["Una jugadora se tuerce el tobillo, puede apoyar con dolor y se hincha. Lo más adecuado es…", ["seguir jugando", "parar, hielo envuelto, compresión, elevación y valoración", "calor intenso", "masaje fuerte"], 1, "Probable esguince."],
    ["Un jugador recibe un golpe en la cabeza y está confuso. Debe…", ["volver al campo en 5 minutos", "dejar de jugar y ser valorado por un médico", "tomar una bebida energética", "dormir en el banquillo sin vigilancia"], 1, "Posible conmoción."],
    ["Una persona tras correr con calor está confusa y con la piel muy caliente. Es…", ["una lipotimia leve", "un posible golpe de calor: 112, sombra y enfriar", "un calambre", "una hipoglucemia"], 1, "Emergencia."],
    ["¿Qué medida reduce más los esguinces de tobillo?", ["no calentar", "programas de fuerza y propiocepción", "estirar solo", "calzado nuevo el día del partido"], 1, "Prevención activa."],
  ],
  feynman: ["Qué significa la conducta PAS y por qué el orden importa", "Cómo se hace la valoración primaria en menos de un minuto", "Qué hay que decir al llamar al 112", "Cómo se hacen la PLS y la RCP con DEA", "Cómo se actúa en un atragantamiento parcial y total", "Qué es el protocolo PRICE y cómo se previenen las lesiones"],
  mapa: ["PRIMEROS AUXILIOS", [["Actuar", "PAS · valoración · 112"], ["Salvar vidas", "PLS · RCP · DEA · Heimlich"], ["Lesiones", "esguince · rotura · PRICE"], ["Prevenir", "calentar · fuerza · botiquín"]]],
  tarjetas: [
    ["PAS", "Proteger, avisar y socorrer."],
    ["112", "Número de emergencias de la UE, gratuito."],
    ["Valoración primaria", "¿Responde? Abrir vía aérea. ¿Respira normal? (≤ 10 s)."],
    ["Respiración agónica", "Boqueadas: signo de parada, iniciar RCP."],
    ["PLS", "Inconsciente que respira: de lado y vigilar."],
    ["RCP", "Centro del pecho, 5-6 cm, 100-120/min, 30:2."],
    ["DEA", "Desfibrilador que analiza y descarga solo si hace falta."],
    ["Cadena de supervivencia", "112, RCP precoz, DEA precoz, cuidados avanzados."],
    ["Atragantamiento total", "5 golpes en la espalda y 5 compresiones abdominales."],
    ["Esguince", "Lesión de ligamento por torcedura."],
    ["PRICE", "Protección, reposo relativo, hielo, compresión, elevación."],
    ["Hemorragia", "Presión directa al menos 10 minutos."],
  ],
  ejemplos: [
    ["Actúa ante un compañero que cae al suelo inconsciente durante una carrera.", ["Proteger: el lugar es seguro (pista).", "Valorar: no responde; abrir vía aérea; respira con normalidad.", "PLS, pedir a alguien concreto que llame al 112 y vigilar la respiración sin parar."], "PAS, valoración, PLS y vigilancia."],
    ["Organiza la actuación de tres personas ante una parada cardiaca en el gimnasio.", ["Persona A: comprueba que no responde ni respira y empieza la RCP.", "Persona B: llama al 112 en altavoz junto a la víctima.", "Persona C: trae el DEA; A y C se relevan cada 2 minutos."], "Trabajo en equipo según la cadena de supervivencia."],
    ["Redacta la llamada al 112 tras una caída en una ruta.", ["Qué: chico de 17 años caído desde 3 m, consciente, dolor intenso en la pierna con deformidad.", "Dónde: sendero PR-X, a 1 km del collado Y; coordenadas del móvil.", "Quién: profesora del grupo, teléfono; 15 alumnos más, todos bien."], "Llamada completa con qué, dónde, cuántos y quién."],
    ["Calcula cuántos ciclos de 30:2 se hacen en 2 minutos si cada ciclo dura unos 24 s.", ["2 minutos = 120 s.", "120 / 24 = 5 ciclos.", "Tras 5 ciclos se relevan los socorristas o analiza el DEA."], "Unos 5 ciclos cada 2 minutos."],
    ["Atiende un esguince de tobillo en un partido de baloncesto.", ["Parar el juego y sentar a la jugadora; valorar si puede apoyar.", "Frío envuelto 15-20 min, vendaje compresivo suave y pierna elevada.", "Valoración médica si no puede apoyar o hay mucha deformidad; vuelta progresiva con ejercicios de propiocepción."], "Protocolo PRICE y valoración."],
    ["Actúa ante un atragantamiento total en el comedor.", ["Reconocer: no puede toser ni hablar y se lleva las manos al cuello.", "5 golpes en la espalda entre los omóplatos, inclinada hacia delante.", "Si no sale, 5 compresiones abdominales; alternar; si pierde la consciencia, 112 y RCP."], "Golpes y compresiones alternos."],
  ],
  errores: [
    "Correr hacia la víctima sin comprobar si el lugar es seguro.",
    "Confundir las boqueadas con respiración normal y no iniciar la RCP.",
    "Hacer compresiones poco profundas, lentas o con los brazos doblados.",
    "Tener miedo a usar el DEA, que solo descarga si es necesario.",
    "Echar la cabeza hacia atrás en una hemorragia nasal o poner hielo directo sobre la piel.",
    "Volver a jugar tras un golpe en la cabeza con síntomas o con dolor articular.",
  ],
  ejercicios: {
    b: [
      ["Define primeros auxilios.", "Atención inmediata a una persona accidentada o enferma de forma repentina hasta que llega la ayuda especializada."],
      ["¿Qué significan las siglas PAS?", "Proteger, avisar y socorrer."],
      ["¿Qué número se marca en una emergencia en la UE?", "El 112."],
      ["¿Qué es la maniobra frente-mentón?", "Inclinar la cabeza hacia atrás con una mano en la frente y dos dedos bajo el mentón para abrir la vía aérea."],
      ["¿Cuánto tiempo se dedica a comprobar la respiración?", "No más de 10 segundos."],
      ["¿Cuándo se usa la PLS?", "En una persona inconsciente que respira con normalidad."],
      ["¿Dónde se colocan las manos en la RCP?", "En el centro del pecho, sobre la mitad inferior del esternón."],
      ["¿Qué profundidad y ritmo tienen las compresiones?", "5-6 cm a 100-120 por minuto."],
      ["¿Qué significan DEA y SVA?", "Desfibrilador externo automático y soporte vital avanzado."],
      ["¿Qué se hace si una persona atragantada tose?", "Animarla a seguir tosiendo y vigilarla."],
      ["¿Qué es un esguince?", "Una lesión de los ligamentos de una articulación por un movimiento forzado."],
      ["Enumera cinco elementos de un botiquín.", "Guantes, gasas estériles, suero fisiológico, antiséptico, apósitos, vendas, esparadrapo, tijeras, manta térmica, frío instantáneo."],
    ],
    m: [
      ["Explica por qué es importante el orden de PAS.", "Proteger evita nuevas víctimas, incluido el socorrista; avisar garantiza la ayuda profesional; socorrer solo es eficaz si los pasos previos están cubiertos."],
      ["Describe la valoración primaria completa.", "Comprobar si responde; si no, pedir ayuda y abrir la vía aérea; comprobar la respiración 10 s; decidir PLS o RCP."],
      ["¿Qué información debe darse al 112?", "Qué ha pasado, dónde exactamente, cuántas personas y su estado, quién llama y un teléfono; no colgar hasta que lo indiquen."],
      ["Describe los pasos de la PLS.", "Brazo cercano en ángulo recto; mano lejana en la mejilla; rodilla lejana doblada; girar hacia uno; ajustar pierna y cabeza; vigilar respiración."],
      ["¿Por qué es mejor hacer solo compresiones que nada?", "Porque mantienen algo de flujo de sangre oxigenada al cerebro y al corazón hasta que llega el DEA o la ayuda; sin ellas, la supervivencia cae un 10 % por minuto."],
      ["Explica los pasos de uso del DEA.", "Encender y seguir las instrucciones; colocar los parches en el pecho desnudo; no tocar durante el análisis; descargar si lo indica sin que nadie toque; reanudar la RCP."],
      ["Diferencia obstrucción parcial y total de la vía aérea.", "Parcial: tose, habla o respira con dificultad: animar a toser. Total: no puede toser, hablar ni respirar: golpes en la espalda y compresiones abdominales."],
      ["Diferencia esguince, luxación y fractura.", "Esguince: lesión de ligamento; luxación: pérdida de la posición de los huesos de una articulación; fractura: rotura del hueso."],
      ["Explica el protocolo PRICE.", "Protección, reposo relativo, hielo envuelto 15-20 min, compresión con vendaje suave y elevación de la zona."],
      ["¿Cómo se actúa ante una hemorragia externa?", "Guantes si es posible, presión directa con apósito o paño limpio al menos 10 minutos sin levantar; si no para o es abundante, 112."],
      ["¿Qué hacer ante un posible golpe de calor?", "Llamar al 112, llevar a la sombra, enfriar con agua y paños mojados, aflojar ropa y dar agua a sorbos si está consciente."],
    ],
    a: [
      ["Diseña un protocolo de emergencias para el polideportivo del instituto.", "Ubicación del DEA y del botiquín señalizada; responsables de llamar al 112 y de traer el DEA; teléfono en altavoz; acceso para la ambulancia despejado; formación anual en RCP; registro de incidencias."],
      ["Analiza el caso Eriksen con la cadena de supervivencia.", "Reconocimiento inmediato y aviso (compañeros y sanitarios), RCP precoz en segundos, desfibrilación en pocos minutos y traslado a cuidados avanzados: todos los eslabones fueron rápidos, de ahí el éxito."],
      ["Debate: ¿debería ser obligatoria la formación en RCP en la ESO y el Bachillerato?", "A favor: aumenta los testigos que actúan y la supervivencia, es barato y rápido de enseñar. En contra: tiempo lectivo y formación del profesorado. Conclusión: integrarla en Educación Física con prácticas periódicas."],
      ["Planifica la vuelta a la actividad tras un esguince de tobillo leve.", "Fase 1: PRICE y movilidad suave; fase 2: fuerza y apoyo progresivo; fase 3: propiocepción (equilibrio a una pierna, superficies inestables); fase 4: carrera, saltos y cambios de dirección; vuelta al deporte sin dolor."],
      ["Diseña un calentamiento de prevención de lesiones para un equipo de fútbol.", "Carrera suave y movilidad; ejercicios de fuerza (sentadilla, nórdicos, plancha); saltos y aterrizajes controlados; equilibrio a una pierna; cambios de dirección y aceleraciones progresivas (modelo FIFA 11+)."],
      ["Explica por qué no se debe mover a un herido salvo peligro.", "Puede agravar fracturas o lesiones de columna y causar daños graves; solo se mueve si el lugar es peligroso o para hacer RCP o PLS."],
      ["Un compañero con alergia grave empieza a tener dificultad para respirar tras una picadura. ¿Qué haces?", "112, ayudarle a usar su autoinyector de adrenalina si lo lleva, sentarle si respira mejor así o tumbarle con las piernas elevadas si se marea, y vigilar; si pierde la consciencia y no respira, RCP."],
      ["Valora las ventajas e inconvenientes de las aplicaciones de emergencia.", "Ventajas: envían la ubicación, permiten llamar rápido y localizar el DEA. Inconvenientes: dependen de batería y cobertura, requieren instalarlas antes; no sustituyen a saber actuar."],
    ],
  },
  glosario: [
    ["Primeros auxilios", "Atención inmediata hasta la llegada de ayuda especializada."],
    ["PAS", "Proteger, avisar y socorrer."],
    ["Valoración primaria", "Comprobación rápida de consciencia y respiración."],
    ["Vía aérea", "Conducto por el que pasa el aire a los pulmones."],
    ["Respiración agónica", "Boqueadas ineficaces propias de la parada."],
    ["Parada cardiorrespiratoria", "Interrupción brusca del latido eficaz y la respiración."],
    ["PLS", "Posición lateral de seguridad."],
    ["RCP", "Reanimación cardiopulmonar."],
    ["DEA", "Desfibrilador externo automático."],
    ["Fibrilación ventricular", "Ritmo cardiaco caótico que no bombea sangre."],
    ["Maniobra de Heimlich", "Compresiones abdominales en el atragantamiento."],
    ["Contractura", "Contracción mantenida de una zona del músculo."],
    ["Rotura fibrilar", "Rotura de fibras musculares durante un esfuerzo."],
    ["Esguince", "Lesión de ligamentos."],
    ["Luxación", "Pérdida de la posición de una articulación."],
    ["PRICE", "Protocolo inicial ante lesiones musculoesqueléticas."],
    ["Propiocepción", "Percepción y control de la posición de las articulaciones."],
  ],
  situacion: {
    titulo: "Instituto cardioprotegido",
    reto: "La clase se formará en soporte vital básico, revisará la seguridad del centro ante emergencias y enseñará RCP y uso del DEA a otros cursos en una jornada de formación entre iguales.",
    pasos: [
      "Practicad por parejas la conducta PAS, la valoración, la PLS y la RCP con maniquíes y DEA de entrenamiento.",
      "Localizad el DEA y los botiquines del centro y revisad su señalización y contenido.",
      "Diseñad un protocolo de emergencias del polideportivo con funciones y un cartel visual.",
      "Preparad estaciones de práctica (PAS y 112, RCP, DEA, atragantamiento, lesiones) para otros cursos.",
      "Realizad la jornada y evaluadla con un cuestionario a los participantes.",
    ],
    producto: "Un protocolo de emergencias del centro con cartel, una guía de las estaciones de práctica y la memoria de la jornada de formación.",
    evaluacion: [
      "Se ejecutan con corrección la valoración primaria, la PLS, la RCP y el uso del DEA.",
      "El protocolo del centro es claro, realista y está bien señalizado.",
      "Las explicaciones a otros cursos son rigurosas y comprensibles.",
      "Se muestra responsabilidad, calma y trabajo en equipo.",
    ],
  },
  familias: [
    "Aprended juntos RCP en un curso de Cruz Roja, SAMUR u otra entidad.",
    "Identificad dónde están los desfibriladores de vuestro barrio y del polideportivo.",
    "Preparad o revisad un botiquín de casa con vuestro hijo o hija.",
    "Repasad qué decir al 112 y tened a mano los datos médicos importantes de la familia.",
  ],
  saberes: B.SAB("Primeros auxilios y prevención de lesiones: conducta PAS, valoración primaria, aviso al 112, posición lateral de seguridad, RCP básica y uso del DEA, atragantamiento, lesiones deportivas y protocolo PRICE, heridas, hemorragias, golpe de calor y otras urgencias, prevención de lesiones y botiquín"),
  ideas: [
    "Practicar RCP con maniquíes y una canción de 100-120 bpm para coger el ritmo.",
    "Invitar a Cruz Roja o a los servicios de emergencia a una jornada práctica.",
    "Hacer simulacros de casos con roles (víctima, testigos, llamada al 112).",
    "Coordinar con Anatomía Aplicada y Biología el estudio del corazón y la respiración.",
  ],
  fuentes: [
    { t: "Consejo Español de Resucitación Cardiopulmonar (CERCP)", url: "https://www.cercp.org/" },
    { t: "Cruz Roja Española: primeros auxilios", url: "https://www.cruzroja.es/" },
    B.FUENTES.WIKI("Reanimación_cardiopulmonar", "Reanimación cardiopulmonar"),
  ],
});
