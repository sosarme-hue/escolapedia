// Fundamentos Artísticos 2º Bachillerato · Tema 8. Grecia y Roma: órdenes, escultura y retrato. Dibujos propios en SVG.
const { tema, CITA, OBRA, cajas, flujo, versus, piramide, rueda, cuadro, crono, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "Grecia y Roma: órdenes, escultura y retrato",
  saber: ["C"],
  objetivos: [
    "Identificar las partes del templo griego y los órdenes dórico, jónico y corintio",
    "Reconocer las obras más relevantes de la arquitectura griega",
    "Explicar la evolución de la escultura griega en sus periodos arcaico, clásico y helenístico",
    "Caracterizar el retrato escultórico romano y su función social y política",
    "Valorar la herencia clásica en el arte posterior",
  ],
  claves: ["orden arquitectónico", "dórico", "jónico", "corintio", "entablamento", "frontón", "Partenón", "canon", "contrapposto", "kouros", "helenístico", "retrato romano", "verismo", "imagines"],
  pregunta: {
    texto: "¿Por qué tantos bancos, museos y parlamentos del mundo tienen columnas y frontones como un templo griego?",
    respuesta: "Porque la arquitectura griega se convirtió en símbolo de <b>orden, razón, democracia y prestigio</b>. Sus columnas y proporciones se repitieron en Roma, en el Renacimiento, en el Neoclasicismo y hasta hoy. Cuando un edificio quiere parecer sólido y respetable, recurre al <mark>lenguaje clásico</mark>: el Capitolio de Washington, el Congreso de los Diputados de Madrid o el Museo del Prado son ejemplos. Conocer los órdenes griegos es aprender un alfabeto que seguimos leyendo en las calles.",
  },
  lectura: {
    titulo: "El color perdido",
    html: `<p>Durante siglos, artistas y viajeros admiraron la blancura de las estatuas y templos griegos. El historiador Winckelmann, en el siglo XVIII, la convirtió en ideal de belleza: el mármol blanco era sinónimo de pureza clásica.</p><p>Se equivocaban. Con luz ultravioleta y análisis químicos, los arqueólogos han descubierto restos de pigmento en muchas esculturas: túnicas rojas y azules, ojos pintados, cabellos dorados, frisos de colores intensos. Las exposiciones <i>Dioses en color</i> han mostrado réplicas policromadas que sorprenden al público. El mundo clásico era mucho más colorido de lo que imaginamos: el tiempo borró la pintura y nosotros inventamos el blanco.</p>`,
  },
  bloques: [
    { h: "El templo griego", p: [
      "El edificio más importante de Grecia era el <mark>templo</mark>, la casa de una divinidad cuya estatua se guardaba en el interior. Los fieles no entraban: los ritos se celebraban en el altar exterior. Por eso el templo se pensaba para ser visto desde fuera, como una gran escultura, y se colocaba en lugares elevados como la <b>acrópolis</b>.",
      "Se levanta sobre una plataforma escalonada, el <b>estilóbato</b>. En el interior está la <b>cella</b> o naos, con la estatua del dios, precedida por un pórtico (pronaos). Alrededor puede haber una fila de columnas: es el templo <b>períptero</b>. Usa el sistema <b>adintelado</b>: columnas que sostienen piezas horizontales, cubiertas por un tejado a dos aguas que forma, en las fachadas, un triángulo llamado <b>frontón</b>.",
    ], svg: cajas("Partes del templo", [["Estilóbato", "plataforma escalonada"], ["Cella", "estatua del dios"], ["Peristilo", "columnas alrededor"], ["Entablamento", "arquitrabe, friso, cornisa"], ["Frontón", "triángulo de fachada"], ["Acrópolis", "ciudad alta"]]) },
    { h: "Los órdenes arquitectónicos", p: [
      "Un <mark>orden</mark> es un sistema de proporciones y elementos decorativos para la columna y el entablamento. El <b>dórico</b>, el más antiguo y sobrio, no tiene basa; el fuste tiene acanaladuras de arista viva, y el capitel es un simple cojín (equino) con una losa (ábaco). Su friso alterna <b>triglifos</b> y <b>metopas</b>.",
      "El <b>jónico</b>, de Asia Menor, es más esbelto y elegante: tiene basa, y su capitel lleva dos <b>volutas</b> en espiral. El friso es corrido, sin divisiones. El <b>corintio</b>, el más decorado, aparece en el siglo IV a. C.: su capitel es una cesta de hojas de acanto. Los romanos añadieron el toscano y el compuesto, una mezcla de jónico y corintio.",
    ], svg: cuadro("Los tres órdenes griegos", [["Orden", "Basa", "Capitel", "Friso"], ["Dórico", "no", "equino y ábaco", "triglifos y metopas"], ["Jónico", "sí", "volutas", "corrido"], ["Corintio", "sí", "hojas de acanto", "corrido"]]) },
    { h: "La Acrópolis de Atenas", p: [
      "Tras las guerras contra Persia, en el siglo V a. C., <b>Pericles</b> impulsó la reconstrucción de la Acrópolis de Atenas. El arquitecto Ictino y el escultor <b>Fidias</b> dirigieron el <mark>Partenón</mark> (447-432 a. C.), templo dórico dedicado a Atenea. Es el ejemplo perfecto de proporción y armonía, pero sus líneas no son rectas: tiene <b>correcciones ópticas</b>, como el estilóbato ligeramente curvo y las columnas algo inclinadas, para que el ojo lo vea perfecto.",
      "En la Acrópolis están también los <b>Propileos</b> (la entrada monumental), el pequeño templo jónico de <b>Atenea Niké</b> y el <b>Erecteion</b>, con su famosa tribuna de las <b>cariátides</b>, columnas en forma de muchachas. Los relieves del Partenón, muchos hoy en el Museo Británico, mostraban la procesión de las fiestas Panateneas.",
    ], extra: OBRA("Partenón", "Ictino, Calícrates y Fidias", "447-432 a. C., mármol, Atenas"), svg: crono("Grecia en el tiempo", [["650 a. C.", "kouroi"], ["480 a. C.", "guerras médicas"], ["447 a. C.", "Partenón"], ["s. IV a. C.", "Praxíteles, Lisipo"], ["323 a. C.", "helenismo"], ["146 a. C.", "conquista romana"]]) },
    { h: "La escultura griega: del arcaico al clásico", p: [
      "En el periodo <b>arcaico</b> (siglos VII-VI a. C.), los escultores hicieron <mark>kouroi</mark> (jóvenes desnudos) y korai (muchachas vestidas), rígidos y frontales, con un pie adelantado, como los egipcios, y la llamada «sonrisa arcaica». Poco a poco ganaron naturalidad.",
      "En el periodo <b>clásico</b> (siglo V a. C.) se alcanzó el equilibrio entre realismo e idealización. <b>Mirón</b> captó el movimiento en el <i>Discóbolo</i>. <b>Policleto</b> fijó un <b>canon</b> de proporciones (la cabeza, una séptima parte del cuerpo) en el <i>Doríforo</i>, y usó el <b>contrapposto</b>: el peso descansa en una pierna, y la cadera y los hombros se inclinan en sentidos opuestos, dando vida a la figura. Fidias esculpió las grandes estatuas de Atenea y Zeus.",
    ], svg: versus("Arcaico y clásico", ["Arcaico", ["rígido y frontal", "pie adelantado", "sonrisa arcaica", "kouros"]], ["Clásico", ["equilibrio", "contrapposto", "canon de Policleto", "Discóbolo, Doríforo"]]) },
    { h: "Del siglo IV al helenismo", p: [
      "En el siglo IV a. C., la escultura se hizo más humana y sensual. <b>Praxíteles</b> creó figuras de curvas suaves, como el <i>Hermes con Dionisio niño</i>, y la <i>Afrodita de Cnido</i>, primer gran desnudo femenino. <b>Lisipo</b> alargó el canon (la cabeza, una octava parte) y fue el retratista de Alejandro Magno. <b>Escopas</b> expresó la pasión y el dolor.",
      "En el periodo <mark>helenístico</mark> (323-31 a. C.), tras las conquistas de Alejandro, el arte se extendió por el Mediterráneo y Oriente. Buscó el <b>dramatismo</b>, el movimiento, el realismo e incluso la fealdad: el <i>Laocoonte</i> y sus hijos atacados por serpientes, el <i>Altar de Pérgamo</i>, la <i>Victoria de Samotracia</i> con sus ropas agitadas por el viento, o ancianos y niños tratados con naturalidad.",
    ], svg: piramide("Evolución de la escultura", [["helenismo", "drama"], ["s. IV", "gracia"], ["clásico", "equilibrio"], ["arcaico", "rigidez"]]) },
    { h: "Roma: la herencia griega y la ingeniería", p: [
      "Roma admiró y copió el arte griego: muchas estatuas griegas solo las conocemos por <b>copias romanas</b> en mármol. Pero los romanos aportaron su sentido práctico y su gran ingeniería. Usaron el <mark>arco</mark>, la bóveda y la cúpula, y un material revolucionario, el <b>hormigón</b> (opus caementicium), que permitía cubrir espacios enormes.",
      "Su arquitectura servía al Estado y a la vida pública: foros, basílicas, termas, teatros, anfiteatros como el <b>Coliseo</b>, acueductos como el de <b>Segovia</b>, puentes y arcos de triunfo. El <b>Panteón</b> de Roma (siglo II) tiene una cúpula de 43 metros de diámetro con un óculo abierto al cielo. Los órdenes griegos se usaron muchas veces como decoración superpuesta sobre los muros.",
    ], svg: rueda("ARQUITECTURA ROMANA", ["arco y bóveda", "hormigón", "Panteón", "Coliseo", "acueducto", "arco de triunfo"]) },
    { h: "El retrato escultórico romano", p: [
      "El <mark>retrato</mark> es la gran aportación de la escultura romana. Tiene raíces en la costumbre de las familias nobles de guardar en casa las <b>imagines</b>, máscaras de cera de los antepasados, que se exhibían en los funerales. Por eso el retrato republicano es <b>verista</b>: muestra con crudeza arrugas, calvas, verrugas y huesos marcados, como signo de experiencia, austeridad y virtud.",
      "Un ejemplo es el <i>Patricio Barberini</i>, que sostiene los bustos de sus antepasados. Los retratos se hacían en busto, en cuerpo entero o a caballo, y en monedas que difundían la imagen del poder por todo el imperio. Los romanos también retrataron a mujeres, con peinados que cambiaban con la moda y ayudan a fecharlos.",
    ], v: ["gre-b", "Evolución del retrato romano"], extra: CITA("En el atrio se exponían los rostros de cera de los antepasados, para que acompañaran los funerales de la familia.", "Plinio el Viejo, Historia natural (traducción libre)"), svg: flujo("Del rito al retrato", ["Máscaras de cera de antepasados", "Se exhiben en funerales y atrios", "Se pasan a mármol y bronce", "Retrato verista republicano"]) },
    { h: "El retrato imperial y su propaganda", p: [
      "Con <b>Augusto</b>, primer emperador, el retrato se idealizó al modo griego. El <i>Augusto de Prima Porta</i> sigue el canon del Doríforo, con coraza decorada con relieves políticos y un Cupido a sus pies que recuerda su origen divino. Era una imagen de <mark>propaganda</mark>: el emperador siempre joven, sereno y victorioso.",
      "Después, el retrato osciló entre idealismo y realismo. <b>Adriano</b> fue el primero en llevar barba, a la griega. La <b>estatua ecuestre de Marco Aurelio</b> en bronce sirvió de modelo al Renacimiento. En el siglo III, los retratos muestran inquietud y crisis, y en el IV, con Constantino, los ojos se agrandan y la figura se vuelve abstracta y simbólica, anunciando el arte medieval.",
    ], svg: cuadro("Retratos imperiales", [["Retrato", "Rasgo"], ["Augusto Prima Porta", "idealizado, propaganda"], ["Adriano", "barba griega"], ["Marco Aurelio", "ecuestre en bronce"], ["Constantino", "ojos grandes, simbólico"]]) },
  ],
  figura: { titulo: "Grecia y Roma de un vistazo", aria: "Resumen de órdenes, arquitectura, escultura griega y retrato romano", cols: [
    ["Órdenes", ["dórico", "jónico", "corintio", "toscano y compuesto"]],
    ["Arquitectura", ["templo y frontón", "Partenón", "arco y hormigón", "Panteón"]],
    ["Escultura griega", ["arcaico: kouros", "clásico: canon", "s. IV: Praxíteles", "helenismo: Laocoonte"]],
    ["Retrato romano", ["imagines", "verismo", "Augusto", "Marco Aurelio"]],
  ] },
  video: ["gre-a", "Los órdenes arquitectónicos griegos"],
  ejemplos: [
    ["Identifica el orden de un capitel con volutas en espiral.", ["Mira el capitel: volutas.", "Fuste esbelto y con basa.", "Friso corrido.", "Origen en Asia Menor."], "Orden jónico."],
    ["Comenta el Doríforo de Policleto.", ["Joven desnudo con lanza.", "Canon: la cabeza es 1/7 del cuerpo.", "Contrapposto: peso en una pierna.", "Equilibrio entre movimiento y reposo."], "Ideal clásico del siglo V a. C."],
    ["Compara un retrato republicano con el Augusto de Prima Porta.", ["El republicano muestra arrugas y edad.", "Augusto aparece joven e ideal.", "El primero honra la virtud familiar.", "El segundo es propaganda imperial."], "Del verismo a la idealización política."],
  ],
  errores: [
    "Pensar que las esculturas griegas eran blancas: estaban pintadas.",
    "Confundir el capitel jónico (volutas) con el corintio (acanto).",
    "Creer que los romanos solo copiaron: aportaron el arco, el hormigón y el retrato.",
    "Decir que el Partenón tiene líneas perfectamente rectas: tiene correcciones ópticas.",
  ],
  ejercicios: {
    b: [
      ["Nombra las partes del entablamento.", "Arquitrabe, friso y cornisa."],
      ["Diferencia los capiteles de los tres órdenes griegos.", "Dórico: equino y ábaco, sin decoración. Jónico: dos volutas. Corintio: cesta de hojas de acanto."],
      ["¿Qué es el contrapposto?", "Postura en la que el peso descansa sobre una pierna, y caderas y hombros se inclinan en sentidos opuestos, dando naturalidad a la figura."],
      ["¿Qué eran las imagines romanas?", "Máscaras de cera de los antepasados que las familias nobles guardaban en el atrio y exhibían en los funerales; están en el origen del retrato verista."],
    ],
    m: [
      ["¿Por qué el Partenón tiene correcciones ópticas?", "Porque las líneas rectas largas parecen curvarse a la vista; para compensarlo, el estilóbato se curva hacia arriba y las columnas se inclinan y engrosan, de modo que el ojo perciba el edificio perfecto."],
      ["Explica la evolución del canon de Policleto a Lisipo.", "Policleto: la cabeza es un séptimo de la altura, figura robusta. Lisipo: la cabeza es un octavo, cuerpo más esbelto y elegante."],
      ["Pon tres rasgos de la escultura helenística con ejemplos.", "Dramatismo (Laocoonte), movimiento (Victoria de Samotracia), realismo de edades y emociones (ancianos, niños, Gálata moribundo)."],
      ["¿Qué función tenía el retrato del emperador?", "Propaganda política: difundir por todo el imperio, en estatuas y monedas, una imagen idealizada, poderosa y, a veces, divina del gobernante."],
    ],
    a: [
      ["Busca en tu ciudad un edificio con lenguaje clásico e identifica orden, frontón y función.", "Respuesta abierta. Debe nombrar el edificio, el orden de sus columnas, si tiene frontón, entablamento o cúpula, la fecha aproximada y por qué eligió ese lenguaje (prestigio, solidez, cultura)."],
      ["Compara el Discóbolo y el Laocoonte.", "Discóbolo (clásico, Mirón): movimiento contenido, rostro sereno, equilibrio. Laocoonte (helenístico): movimiento violento, dolor, diagonales, composición compleja; pasa del ideal de equilibrio al dramatismo."],
    ],
  },
  quiz: [
    ["La cella del templo griego guardaba…", ["la estatua del dios", "el altar de sacrificios", "el tesoro de la ciudad", "a los fieles"], "Los ritos eran fuera."],
    ["El orden sin basa es el…", ["dórico", "jónico", "corintio", "compuesto"], "El más sobrio."],
    ["Las volutas son propias del orden…", ["jónico", "dórico", "toscano", "corintio solo"], "Asia Menor."],
    ["El capitel con hojas de acanto es…", ["corintio", "dórico", "jónico", "toscano"], "Siglo IV a. C."],
    ["El Partenón está dedicado a…", ["Atenea", "Zeus", "Apolo", "Afrodita"], "Acrópolis de Atenas."],
    ["Las cariátides están en el…", ["Erecteion", "Partenón", "Panteón", "Coliseo"], "Columnas con forma de muchacha."],
    ["El canon de Policleto fija la cabeza en…", ["1/7 del cuerpo", "1/8", "1/5", "1/10"], "Doríforo."],
    ["El Laocoonte pertenece al periodo…", ["helenístico", "arcaico", "clásico", "romano republicano"], "Dramatismo."],
    ["El retrato romano republicano es…", ["verista", "idealizado", "abstracto", "arcaico"], "Arrugas y edad."],
    ["El Augusto de Prima Porta sigue el modelo del…", ["Doríforo", "kouros", "Laocoonte", "Discóbolo"], "Idealización griega."],
  ],
  examen: [
    ["Los triglifos y metopas forman el friso…", ["dórico", "jónico", "corintio", "compuesto"], "Alternancia."],
    ["El Panteón de Roma destaca por su…", ["cúpula con óculo", "frontón dórico", "planta de cruz", "torre"], "43 metros."],
    ["Primer emperador retratado con barba…", ["Adriano", "Augusto", "Nerón", "Constantino"], "A la griega."],
    ["La Afrodita de Cnido es de…", ["Praxíteles", "Fidias", "Mirón", "Lisipo"], "Primer gran desnudo femenino."],
  ],
  feynman: ["partes del templo", "los tres órdenes", "contrapposto y canon", "verismo y propaganda en el retrato"],
  mapa: ["ARTE CLÁSICO", [["Órdenes", "dórico, jónico, corintio"], ["Grecia", "Partenón, canon"], ["Roma", "arco, hormigón, Panteón"], ["Retrato", "verismo, Augusto"]]],
  tarjetas: [
    ["Dórico", "Sin basa, capitel liso, triglifos."],
    ["Jónico", "Volutas, friso corrido."],
    ["Corintio", "Capitel de acanto."],
    ["Partenón", "Templo dórico de Atenea, Fidias."],
    ["Contrapposto", "Peso en una pierna, cuerpo vivo."],
    ["Helenismo", "Drama y movimiento: Laocoonte."],
    ["Verismo", "Retrato romano realista."],
    ["Prima Porta", "Augusto idealizado, propaganda."],
  ],
  glosario: [
    ["Estilóbato", "Plataforma escalonada sobre la que se alza el templo."],
    ["Entablamento", "Parte horizontal sobre las columnas: arquitrabe, friso y cornisa."],
    ["Fuste", "Cuerpo de la columna, entre la basa y el capitel."],
    ["Kouros", "Escultura arcaica de joven desnudo."],
    ["Canon", "Sistema de proporciones ideales del cuerpo."],
    ["Corrección óptica", "Deformación calculada para que el edificio se vea perfecto."],
    ["Opus caementicium", "Hormigón romano."],
    ["Estatua ecuestre", "Figura a caballo, modelo de poder."],
  ],
  situacion: SIT(
    "Ruta clásica por la ciudad",
    "Vuestro ayuntamiento quiere una ruta para jóvenes que descubra el lenguaje clásico en edificios de la ciudad.",
    ["Localizad cinco edificios con columnas, frontones o cúpulas", "Fotografiad e identificad orden y elementos", "Escribid una ficha breve con fecha y función", "Diseñad un mapa o una historia de Instagram con la ruta"],
    "Ruta con mapa y cinco fichas ilustradas.",
    ["Identificación correcta de órdenes y elementos", "Rigor de los datos", "Claridad y atractivo del diseño"],
  ),
  familias: [
    "Paseando por la ciudad, jugad a encontrar columnas dóricas, jónicas y corintias.",
    "Visitad un yacimiento romano cercano: Mérida, Tarragona, Itálica o Segovia.",
    "Buscad juntos imágenes de esculturas griegas pintadas (Dioses en color).",
  ],
  saberes: "introducción a la arquitectura y escultura griegas, órdenes, obras y periodos más relevantes; el retrato escultórico en la Roma Antigua.",
  ideas: [
    "Dibujar los tres capiteles con plantilla y compararlos.",
    "Analizar monedas romanas como soporte de propaganda.",
    "Coordinar con Latín y Griego para leer fuentes sobre las imagines.",
  ],
  fuentes: [WIKI("Orden clásico", "Orden_clásico"), WIKI("Retrato romano", "Retrato_romano")],
});
