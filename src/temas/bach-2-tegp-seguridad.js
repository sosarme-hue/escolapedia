// Técnicas de Expresión Gráfico-Plástica 2º Bachillerato · Seguridad, sostenibilidad y conservación (tema ampliado). Dibujos propios en SVG.
const { tema, TRUCO, OBRA, cajas, flujo, versus, rueda, barras, piramide, SIT, WIKI } = require("./_bach2-tegp");

module.exports = tema({
  titulo: "Seguridad, sostenibilidad y conservación de las obras",
  minutos: 60,
  bloque: "A",
  objetivos: [
    "Identificar los riesgos de los materiales artísticos y las medidas de seguridad en el taller",
    "Valorar el impacto ambiental de los materiales y elegir alternativas sostenibles",
    "Conocer los agentes que deterioran las obras y cómo prevenirlos",
    "Distinguir conservación preventiva, conservación curativa y restauración",
  ],
  claves: ["toxicidad", "pictograma", "ficha de seguridad", "ventilación", "residuos", "sostenibilidad", "conservación preventiva", "humedad relativa", "luz ultravioleta", "restauración", "reversibilidad", "mínima intervención"],
  pregunta: {
    texto: "¿Por qué los museos tienen las salas de dibujos casi a oscuras?",
    respuesta: "Porque la <b>luz</b> es uno de los grandes enemigos de las obras sobre papel. La radiación, sobre todo la <mark>ultravioleta</mark>, decolora pigmentos y tintas y vuelve el papel amarillo y frágil, y el daño es <b>acumulativo e irreversible</b>. Por eso los dibujos y grabados se exponen con muy poca luz (unos 50 lux) y durante temporadas cortas, y después «descansan» en cajas a oscuras.",
  },
  bloques: [
    { h: "El taller, un espacio con riesgos", p: [
      "Un taller de artes plásticas tiene herramientas cortantes, prensas, productos químicos y polvo. Muchos accidentes se evitan con hábitos sencillos: <b>ventilar</b>, trabajar con orden, no comer ni beber mientras se pinta, lavarse las manos al terminar y usar <b>guantes</b>, <b>mascarilla</b> o <b>gafas</b> cuando el material lo pide.",
      "Las herramientas de corte, como cúters y gubias, se usan siempre alejando el filo del cuerpo y de la otra mano. En el grabado, el tórculo y los ácidos requieren supervisión del profesor. Saber dónde está el botiquín, el extintor y la ducha lavaojos forma parte de la técnica tanto como mezclar colores.",
    ], svg: cajas("Normas del taller", [["Ventilar", "disolventes y polvo"], ["Proteger", "guantes, gafas, mascarilla"], ["No comer", "mientras se pinta"], ["Cortar", "lejos del cuerpo"], ["Ordenar", "etiquetar envases"], ["Limpiar", "manos y útiles"]]) },
    { h: "La toxicidad de los materiales", p: [
      "Algunos pigmentos históricos son tóxicos: el <b>blanco de plomo</b>, el <b>bermellón</b> (sulfuro de mercurio), los <b>amarillos y rojos de cadmio</b> o el <b>verde esmeralda</b> con arsénico. Su peligro está sobre todo en el <b>polvo</b> que se respira o en la pintura que llega a la boca. Por eso el pigmento en polvo se manipula con mascarilla y nunca se afila un pincel con los labios.",
      "Los <b>disolventes orgánicos</b> como la trementina emiten vapores que irritan y pueden causar mareos; además son inflamables. Las <b>fichas de seguridad</b> y los <b>pictogramas</b> del envase informan del riesgo. Hoy existen alternativas más seguras: blanco de titanio en vez de plomo, esencias sin aromáticos y óleos que se limpian con agua.",
    ], extra: TRUCO("los trapos empapados de aceite de linaza pueden arder solos al oxidarse: extiéndelos para que se sequen o guárdalos en un bote metálico cerrado."), svg: versus("Riesgo y alternativa", ["Más tóxico", ["blanco de plomo", "bermellón", "trementina", "pigmento en polvo sin protección"]], ["Alternativa", ["blanco de titanio", "rojo de naftol o pirrol", "esencia sin aromáticos", "pinturas preparadas"]]), v: ["seg-b", "Toxicidad de la pintura al óleo"] },
    { h: "Impacto ambiental y materiales sostenibles", p: [
      "El arte también deja huella: envases de plástico, disolventes que contaminan el agua, metales pesados, papel de árboles talados. Una práctica <mark>sostenible</mark> empieza por reducir: comprar solo lo necesario, aprovechar los restos de pintura y reutilizar soportes. Después, gestionar bien los <b>residuos</b>: dejar decantar el agua sucia para separar el pigmento, reciclar el disolvente y llevar lo peligroso a un punto limpio.",
      "Hay materiales más respetuosos: <b>papel reciclado</b> o de fibras como el algodón y el cáñamo, pigmentos naturales sin metales pesados, aglutinantes vegetales, <b>pinturas biodegradables</b>, tintas de soja en el grabado y soportes recuperados como cartón, madera o tejidos. Muchos artistas convierten además los residuos en materia de su obra.",
    ], svg: piramide("Jerarquía sostenible", [["Reducir", "comprar lo necesario"], ["Reutilizar", "soportes y restos"], ["Reciclar", "papel, disolvente"], ["Eliminar bien", "punto limpio"]]) },
    { h: "Por qué se deterioran las obras", p: [
      "Las obras envejecen por <b>agentes de deterioro</b>. La <b>luz</b> decolora y debilita. La <b>humedad</b> alta favorece mohos y oxida metales, y sus cambios bruscos hacen que la madera y el lienzo se dilaten y contraigan hasta que la pintura se agrieta o se levanta. El <b>calor</b> acelera las reacciones químicas.",
      "A ello se suman los <b>contaminantes</b> del aire, el <b>polvo</b>, los <b>insectos</b> como la carcoma o el pececillo de plata, y los <b>daños humanos</b>: golpes, manipulación con las manos sucias, malas restauraciones, vandalismo o robo. Los propios materiales también fallan: el papel ácido amarillea y los barnices antiguos oscurecen.",
    ], svg: rueda("DETERIORO", ["luz", "humedad", "temperatura", "contaminación", "insectos y mohos", "daños humanos"]) },
    { h: "La conservación preventiva", p: [
      "La <mark>conservación preventiva</mark> actúa sobre el entorno para evitar el daño antes de que ocurra, y es la más eficaz y barata. Los museos controlan la <b>humedad relativa</b> (estable, en torno al 50 %) y la <b>temperatura</b> (unos 18-21 °C), filtran la luz ultravioleta y limitan los <b>lux</b> según el material: muy pocos para papel y textiles, más para óleos.",
      "También se usan materiales de conservación sin ácido (cartones de museo, papel barrera), se manipulan las obras con guantes, se embalan bien para los traslados y se vigilan las plagas. Tú puedes aplicar estas ideas a tus trabajos: guardar los dibujos en carpetas planas, separados con papel de seda, lejos del sol y de la humedad.",
    ], svg: barras("Luz máxima recomendada (lux)", [["papel y tintas", 50], ["acuarela", 50], ["óleo y temple", 200], ["piedra y metal", 300]]) },
    { h: "Conservación curativa y restauración", p: [
      "Cuando el daño ya existe, interviene un <b>conservador-restaurador</b>. La <b>conservación curativa</b> detiene el deterioro: consolida pintura que se levanta, elimina mohos o estabiliza un papel. La <mark>restauración</mark> va más allá y devuelve legibilidad a la obra: limpia barnices oxidados, reintegra lagunas o elimina repintes antiguos.",
      "Toda intervención sigue unos principios éticos: <b>mínima intervención</b>, <b>reversibilidad</b> (los materiales añadidos deben poder retirarse), <b>compatibilidad</b> con el original, <b>discernibilidad</b> (lo añadido debe distinguirse de cerca) y <b>documentación</b> de cada paso con fotografías e informes. Antes de tocar nada se estudia la obra con luz ultravioleta, infrarrojos y rayos X.",
    ], extra: OBRA("Ecce Homo de Borja", "Elías García Martínez (1930); intervención de una aficionada en 2012", "un caso famoso de restauración sin método ni formación"), svg: flujo("Proceso de restauración", ["Estudio técnico: UV, infrarrojos, rayos X", "Diagnóstico y propuesta", "Consolidación y limpieza", "Reintegración reversible y discernible", "Informe y documentación"]), v: ["seg-a", "Una conservadora explica cómo se restaura un cuadro"] },
    { h: "El caso del papel y la obra gráfica", p: [
      "Las obras sobre papel —dibujos, acuarelas, grabados— son de las más frágiles. Sus problemas típicos son el <b>amarilleo</b> por acidez, las <b>manchas de óxido</b> llamadas <i>foxing</i>, los rotos, los pliegues y la decoloración. Para evitarlos se montan en <b>passe-partout</b> de cartón libre de ácido, se fijan con bisagras de papel japonés y almidón (reversibles) y se enmarcan con vidrio con filtro UV.",
      "Nunca deben usarse cinta adhesiva ni pegamentos comunes: con los años amarillean y dejan manchas difíciles de quitar. Los pasteles y carboncillos necesitan además un marco con separación para que el vidrio no toque el polvo de color.",
    ], svg: cajas("Proteger el papel", [["Passe-partout", "sin ácido"], ["Bisagras", "papel japonés"], ["Vidrio", "con filtro UV"], ["Sin celo", "ni cola común"], ["Separador", "para pastel"], ["Oscuridad", "descanso en caja"]]) },
    { h: "Tu propio archivo", p: [
      "Llevar un registro de tu obra es una costumbre profesional. Para cada trabajo anota título, fecha, técnica, materiales y medidas, y hazle una <b>fotografía</b> con buena luz. Ese archivo te servirá para tu portfolio, para presentarte a pruebas de acceso a estudios artísticos y para que, si un día alguien la restaura, sepa con qué se hizo.",
      "Pensar en la conservación desde el principio también es elegir: un papel de pH neutro, pigmentos sólidos a la luz y una técnica bien ejecutada harán que tu obra dure. La sostenibilidad y la durabilidad van de la mano: lo que se conserva no hay que volver a fabricar.",
    ], svg: flujo("Ficha de cada obra", ["Título, fecha y medidas", "Técnica y materiales", "Fotografía con buena luz", "Lugar de guarda"]) },
  ],
  figura: { titulo: "Seguridad, sostenibilidad y conservación", aria: "Resumen de seguridad en el taller, sostenibilidad, deterioro y conservación", cols: [
    ["Seguridad", ["ventilar", "proteger", "fichas de seguridad", "alternativas"]],
    ["Sostenibilidad", ["reducir", "reutilizar", "reciclar", "punto limpio"]],
    ["Deterioro", ["luz", "humedad y calor", "plagas", "daños humanos"]],
    ["Conservación", ["preventiva", "curativa", "restauración", "reversibilidad"]],
  ] },
  video: ["seg-a", "Una conservadora explica cómo se restaura un cuadro"],
  ejemplos: [
    ["Organiza la limpieza después de una sesión de óleo.", ["Retira el exceso de pintura del pincel con papel.", "Limpia con aceite vegetal y después agua y jabón.", "Deja reposar la esencia usada para reutilizarla.", "Extiende los trapos o guárdalos en bote metálico."], "Limpieza segura y con menos residuos."],
    ["Propón cómo exponer una acuarela durante seis meses.", ["Passe-partout libre de ácido.", "Vidrio con filtro UV.", "Pared sin sol directo, a unos 50 lux.", "Después, guardarla en una carpeta a oscuras."], "Exposición controlada para evitar decoloración."],
    ["Valora una restauración que repinta con óleo la cara de una figura.", ["No es reversible: el óleo no se retira sin dañar.", "No es discernible.", "No respeta la mínima intervención.", "No está documentada."], "Intervención incorrecta según los criterios de restauración."],
  ],
  errores: [
    "Pensar que solo los disolventes son peligrosos: el polvo de pigmento también lo es.",
    "Tirar el agua con pigmento o la esencia por el fregadero.",
    "Pegar los dibujos con cinta adhesiva para exponerlos.",
    "Confundir restaurar con «dejar como nuevo»: se respeta el paso del tiempo y el original.",
    "Exponer obras en papel al sol de una ventana.",
  ],
  ejercicios: {
    b: [
      ["Cita cuatro normas básicas de seguridad en el taller.", "Ventilar, usar protección, no comer mientras se pinta, cortar alejando el filo y lavarse las manos."],
      ["Nombra tres pigmentos tóxicos.", "Blanco de plomo, bermellón, cadmios o verde esmeralda."],
      ["¿Qué es la conservación preventiva?", "La que controla el entorno (luz, humedad, temperatura, plagas) para evitar el daño."],
      ["¿Qué es un passe-partout?", "Un marco interior de cartón que separa la obra del vidrio y la rodea."],
    ],
    m: [
      ["¿Por qué los cambios de humedad dañan un cuadro sobre tabla?", "La madera se dilata y contrae, y la pintura, rígida, se agrieta o se levanta."],
      ["Explica el principio de reversibilidad.", "Los materiales añadidos en una restauración deben poder retirarse en el futuro sin dañar el original."],
      ["¿Qué puede hacer un artista para reducir residuos?", "Comprar lo necesario, aprovechar restos, reutilizar soportes, decantar el agua sucia y reciclar el disolvente."],
      ["¿Qué técnicas de estudio se usan antes de restaurar?", "Luz ultravioleta, reflectografía infrarroja, rayos X y análisis de muestras."],
    ],
    a: [
      ["Elabora un protocolo de seguridad para un taller de grabado.", "Respuesta abierta: ventilación, gafas y guantes con ácidos, ácido siempre sobre agua, supervisión en el tórculo, etiquetado y gestión de residuos."],
      ["Debate: ¿debe restaurarse una obra contemporánea hecha con materiales efímeros?", "Respuesta abierta: respetar la intención del artista, documentar, o aceptar su degradación como parte de la obra."],
      ["Diseña una obra con materiales sostenibles y justifica cada elección.", "Respuesta abierta: soporte recuperado, pigmentos naturales, aglutinante vegetal, limpieza con agua; impacto y durabilidad."],
    ],
  },
  quiz: [
    ["El blanco de plomo es peligroso porque…", ["es tóxico", "no cubre", "es caro", "amarillea"], "Metal pesado."],
    ["El bermellón contiene…", ["mercurio", "hierro", "titanio", "cobalto"], "Cinabrio."],
    ["Los trapos con aceite de linaza pueden…", ["arder solos", "pudrirse en un día", "volverse tóxicos", "evaporarse"], "Autocombustión."],
    ["La luz máxima para obras en papel es de unos…", ["50 lux", "500 lux", "1000 lux", "5 lux"], "Muy poca."],
    ["La humedad relativa recomendada ronda…", ["el 50 %", "el 10 %", "el 90 %", "el 0 %"], "Estable."],
    ["Las manchas de óxido del papel se llaman…", ["foxing", "craquelado", "pentimento", "barniz"], "Puntos rojizos."],
    ["Lo añadido en una restauración debe ser…", ["reversible y discernible", "invisible e irreversible", "más grande", "de otro autor"], "Ética."],
    ["La mejor conservación es la…", ["preventiva", "curativa", "restauración total", "repintado"], "Evitar el daño."],
    ["El agua sucia con pigmento se debe…", ["decantar", "tirar al fregadero", "beber", "quemar"], "Separar el sólido."],
    ["La carcoma ataca…", ["la madera", "el vidrio", "el metal", "la piedra"], "Insecto."],
  ],
  examen: [
    ["Para fijar un dibujo en su passe-partout se usan…", ["bisagras de papel japonés", "cinta adhesiva", "grapas", "pegamento instantáneo"], "Reversible."],
    ["La conservación curativa…", ["detiene un deterioro activo", "controla el clima de la sala", "pinta las lagunas", "fotografía la obra"], "Consolidar."],
    ["Una alternativa al blanco de plomo es…", ["el blanco de titanio", "el bermellón", "el verde esmeralda", "el negro de humo"], "Seguro."],
    ["El caso de Borja es ejemplo de…", ["restauración sin método", "conservación preventiva", "falsificación", "arte digital"], "2012."],
  ],
  feynman: ["normas del taller", "toxicidad y alternativas", "reducir, reutilizar, reciclar", "agentes de deterioro", "principios de la restauración"],
  mapa: ["CUIDAR EL ARTE", [["Seguridad", "ventilar, proteger"], ["Sostenibilidad", "reducir residuos"], ["Deterioro", "luz, humedad, plagas"], ["Conservación", "preventiva y restauración"]]],
  tarjetas: [
    ["Pigmentos tóxicos", "Plomo, mercurio, cadmio, arsénico."],
    ["Trapos con aceite", "Pueden arder solos."],
    ["Conservación preventiva", "Controlar el entorno para evitar el daño."],
    ["Lux para papel", "Unos 50."],
    ["Foxing", "Manchas de óxido en el papel."],
    ["Reversibilidad", "Lo añadido se puede quitar."],
    ["Discernibilidad", "Lo añadido se distingue del original."],
    ["Passe-partout", "Marco de cartón libre de ácido."],
  ],
  glosario: [
    ["Ficha de seguridad", "Documento con los riesgos y precauciones de un producto."],
    ["Pictograma", "Símbolo del envase que indica un peligro."],
    ["Humedad relativa", "Cantidad de vapor de agua del aire respecto al máximo posible."],
    ["Lux", "Unidad que mide la iluminación sobre una superficie."],
    ["Consolidar", "Devolver la cohesión a un material que se disgrega o se levanta."],
    ["Laguna", "Zona en la que falta la pintura original."],
    ["Repinte", "Pintura añadida posteriormente sobre el original."],
    ["Libre de ácido", "Material que no acidifica ni amarillea lo que toca."],
  ],
  situacion: SIT(
    "Un taller verde y seguro",
    "El centro quiere mejorar el aula de plástica. Vuestro grupo hará una auditoría de seguridad y sostenibilidad y propondrá mejoras.",
    [
      "Revisad los envases del aula, sus pictogramas y fichas de seguridad.",
      "Anotad qué residuos se generan y cómo se eliminan.",
      "Proponed alternativas más seguras y sostenibles y un sistema de reciclaje.",
      "Diseñad carteles con las normas del taller y presentadlos al departamento.",
    ],
    "Informe de auditoría y serie de carteles de normas.",
    [
      "El inventario es completo y riguroso.",
      "Las alternativas son viables y están justificadas.",
      "Los carteles son claros y visualmente eficaces.",
    ],
  ),
  familias: [
    "Leed juntos los pictogramas de un producto de limpieza y comparadlos con los de una pintura.",
    "Buscad en casa un dibujo o una foto antigua y comprobad si está al sol o amarillea.",
    "Hablad de qué hacer con los restos de pintura de una reforma (punto limpio).",
    "Mirad el vídeo de una restauración del Museo del Prado y comentad qué os sorprende.",
  ],
  saberes: "seguridad, toxicidad e impacto medioambiental de los materiales artísticos; soportes y materiales sostenibles; la conservación de las obras gráfico-plásticas.",
  ideas: [
    "Inventario de pictogramas de los productos del aula.",
    "Sistema de decantación del agua de limpieza.",
    "Comparar con lámpara UV papeles ácidos y libres de ácido.",
    "Montar una obra del alumnado con passe-partout y bisagras.",
  ],
  fuentes: [
    WIKI("Conservación y restauración de bienes culturales", "Conservaci%C3%B3n_y_restauraci%C3%B3n_de_bienes_culturales"),
    { t: "Instituto del Patrimonio Cultural de España (IPCE)", url: "https://ipce.culturaydeporte.gob.es/" },
  ],
});
