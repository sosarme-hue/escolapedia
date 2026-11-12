// Educación Física 6º de Primaria: juego limpio y primeros auxilios. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, barras, fichas, ciclo, vid, vgen, RD, PROF, nino, suelo, corazon, tick, equis } = require("./_pri6b");

// Cruz de primeros auxilios dentro de un círculo.
const cruz = (cx, cy, r = 22) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" stroke="var(--leaf)" stroke-width="3"/><path d="M${cx - r * 0.18} ${cy - r * 0.6} h${r * 0.36} v${r * 0.42} h${r * 0.42} v${r * 0.36} h${-r * 0.42} v${r * 0.42} h${-r * 0.36} v${-r * 0.42} h${-r * 0.42} v${-r * 0.36} h${r * 0.42} Z" fill="var(--leaf)"/>`;

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Juego limpio y primeros auxilios",
  minutos: 55,
  objetivos: ["Comprender qué es el juego limpio y por qué es importante", "Saber ganar, saber perder y respetar a todos los participantes", "Rechazar la violencia, las trampas y la discriminación en el deporte", "Aplicar la conducta PAS ante un accidente", "Conocer los primeros auxilios básicos ante lesiones frecuentes en la actividad física"],
  claves: ["juego limpio", "deportividad", "respeto", "reglas", "árbitro", "trampa", "violencia", "inclusión", "primeros auxilios", "PAS", "112", "herida", "esguince", "golpe de calor", "posición lateral de seguridad"],
  pregunta: {
    texto: "En un partido, un rival se cae y se hace daño. Tu equipo tiene el balón y está a punto de marcar. ¿Qué haces?",
    respuesta: "Lo correcto es <b>echar el balón fuera</b> o parar el juego para que atiendan al jugador lesionado. Después, cuando se reanuda, el otro equipo suele devolver el balón. Eso es <mark>juego limpio</mark>: la salud y el respeto a las personas están por encima de ganar. Y si estás cerca, también es importante saber qué hacer: avisar a un adulto y ayudar, aplicando unos <b>primeros auxilios</b> básicos.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el juego limpio?</h3><p>El <mark>juego limpio</mark> (en inglés, <i>fair play</i>) es una forma de entender el juego y el deporte basada en el <b>respeto</b>: a las reglas, a los compañeros, a los rivales, a los árbitros, al público y a uno mismo.</p><p>Jugar limpio significa:</p><p>• <b>Cumplir las reglas</b> aunque nadie te esté mirando.<br>• <b>No hacer trampas</b> para ganar.<br>• <b>Respetar al rival</b>: es un compañero de juego, no un enemigo. Sin él no habría partido.<br>• <b>Aceptar las decisiones</b> del árbitro, aunque no estés de acuerdo.<br>• Dar a todos la <b>oportunidad de participar</b>.<br>• <b>Controlar las emociones</b>: el enfado, la frustración o la euforia.<br>• <b>Ayudar</b> a quien se ha hecho daño, aunque sea del otro equipo.</p><p>El juego limpio no está reñido con querer ganar. Esforzarse al máximo para conseguir la victoria es parte del deporte. Lo importante es <b>cómo</b> se gana: con el propio esfuerzo y respetando a los demás.</p><p>Muchas organizaciones deportivas entregan <b>premios al juego limpio</b> para reconocer a los deportistas y equipos que dan ejemplo.</p>`,
      svg: svg("El juego limpio se basa en el respeto a las reglas, rivales, árbitros, compañeros y público", `${tit("Juego limpio = respeto")}${corazon(44, 104, 2)}${filas([["reglas", "cumplirlas", COL.azul], ["rivales", "no son enemigos", COL.rojo], ["árbitro", "aceptarlo", COL.gris], ["compañeros", "todos juegan", COL.verde], ["público", "anima bien", COL.morado]], 50, 25, { x: 86, wa: 74, wb: 86 })}`),
      video: vid("BNIQpWNgIX8"),
    },
    {
      html: `<h3>Saber ganar y saber perder</h3><p>En todos los juegos y deportes alguien gana y alguien pierde. Las dos situaciones requieren <mark>madurez</mark>.</p><p><b>Saber ganar</b> es:</p><p>• Celebrar con alegría, pero <b>sin burlarse</b> ni humillar al rival.<br>• Reconocer el esfuerzo del otro equipo: «Buen partido, ha estado muy igualado».<br>• Agradecer el trabajo de los compañeros, no solo presumir de lo que tú has hecho.<br>• No creerse superior: la próxima vez puede ser distinto.</p><p><b>Saber perder</b> es:</p><p>• Felicitar al ganador con sinceridad.<br>• No buscar excusas ni culpar al árbitro, al campo o a los compañeros.<br>• Aceptar la frustración sin descargarla con malos gestos, insultos o golpes.<br>• Pensar qué se puede mejorar y aprender de los errores.</p><p>Perder es una parte normal del deporte y de la vida. Hasta los mejores deportistas del mundo pierden muchas veces. Lo que los hace grandes es que se levantan, siguen entrenando y vuelven a intentarlo.</p><p>Un gesto sencillo que lo resume: <b>dar la mano</b> o chocar los cinco con todos al final del partido, ganes o pierdas.</p>`,
      svg: svg("Saber ganar sin burlarse y saber perder sin excusas, y dar la mano al final", `${tit("Ganar y perder")}${cj(10, 34, 115, 28, "SABER GANAR", COL.verde)}${cj(135, 34, 115, 28, "SABER PERDER", COL.azul)}${["sin burlas", "reconocer al rival", "agradecer"].map((w, i) => tx(67, 84 + i * 20, w, 112)).join("")}${["felicitar", "sin excusas", "aprender"].map((w, i) => tx(192, 84 + i * 20, w, 112)).join("")}<path d="M130 70 V136" stroke="var(--line)" stroke-width="1.5"/>${tx(130, 162, "¡dar la mano al acabar!", 220, { weight: 700, color: COL.naranja })}`),
    },
    {
      html: `<h3>Lo que no es juego limpio</h3><p>Hay comportamientos que van <mark>contra el juego limpio</mark> y estropean el deporte:</p><p>• <b>Hacer trampas</b>: fingir una falta (piscinazo), tocar el balón con la mano a escondidas, mover la pelota, cantar «fuera» cuando ha entrado.<br>• La <b>violencia</b>: empujones, patadas o codazos a propósito, peleas. Nunca está justificada.<br>• Los <b>insultos</b>, las burlas y los gestos ofensivos, a rivales, compañeros o árbitros.<br>• La <b>discriminación</b>: excluir o despreciar a alguien por su sexo, su origen, su aspecto, su nivel o una discapacidad.<br>• Las <b>protestas</b> constantes al árbitro.<br>• El <b>dopaje</b>: tomar sustancias prohibidas para mejorar el rendimiento. Es hacer trampa y además es muy peligroso para la salud.</p><p>A veces el mal ejemplo viene de fuera del campo: <b>familias</b> o <b>aficionados</b> que gritan e insultan a los niños, al árbitro o al equipo contrario. Desde las gradas también se debe animar con respeto, y en muchos campeonatos escolares hay normas para el público.</p><p>Si ves un comportamiento así, no lo imites. Puedes hablar con tu entrenador o profesor y, si te sientes con confianza, decirle al compañero con calma que eso no está bien.</p>`,
      svg: svg("Conductas contrarias al juego limpio: trampas, violencia, insultos, discriminación y dopaje", `${tit("Esto NO es juego limpio")}${filas([["trampas", "fingir, engañar", COL.rojo], ["violencia", "empujar, pegar", COL.rojo], ["insultos", "y burlas", COL.rojo], ["excluir", "discriminar", COL.rojo], ["dopaje", "sustancias prohibidas", COL.rojo]], 50, 25, { wa: 74, wb: 140 })}${equis(236, 46)}`),
    },
    {
      html: `<h3>Inclusión y respeto a la diversidad</h3><p>En la Educación Física y en el deporte <mark>todos tienen derecho a participar</mark> y a disfrutar, sea cual sea su nivel, su sexo, su origen o sus capacidades.</p><p>• <b>Chicos y chicas</b> pueden practicar cualquier deporte. No hay deportes «de chicos» ni «de chicas». Cada vez hay más deportistas femeninas que son referentes, como las campeonas del mundo de fútbol de 2023 o la jugadora de baloncesto Alba Torrens.<br>• Las personas con <b>discapacidad</b> también hacen deporte, adaptando las reglas o el material. Los <b>Juegos Paralímpicos</b> se celebran justo después de los Olímpicos, con deportes como el baloncesto en silla de ruedas, el goalball (para personas ciegas) o la natación adaptada. Deportistas españoles como Teresa Perales han ganado decenas de medallas.<br>• Quien tiene <b>menos nivel</b> necesita participar igual o más que nadie, para poder mejorar.</p><p>¿Cómo podemos ser más inclusivos en clase?</p><p>• Hacer <b>equipos equilibrados</b> y mixtos, sin que siempre elijan los mismos.<br>• Pasar el balón a todos.<br>• <b>Adaptar las reglas</b> cuando hace falta: un bote más, una zona protegida, un balón más grande.<br>• Animar y ayudar, nunca burlarse de un error.</p>`,
      svg: svg("Deporte para todos: mixto, adaptado y con equipos equilibrados", `${tit("Deporte para todos")}${nino(40, 150, { pose: "arriba", s: 0.8, nina: true })}${nino(86, 150, { pose: "arriba", s: 0.8 })}${nino(150, 150, { pose: "brazos", s: 0.8 })}${nino(214, 150, { pose: "arriba", s: 0.8, nina: true })}${suelo(152)}${tx(130, 172, "mixto · adaptado · equipos equilibrados", 240, { weight: 700, color: COL.verde })}`),
      video: vid("AqatjtIO3kQ"),
    },
    {
      html: `<h3>Los primeros auxilios y la conducta PAS</h3><p>Los <mark>primeros auxilios</mark> son la atención inmediata que se da a una persona que ha sufrido un accidente o se ha puesto enferma de repente, hasta que llega la ayuda especializada (médicos, enfermeros, técnicos de emergencias). No sustituyen al médico, pero pueden evitar que una lesión se agrave e incluso salvar una vida.</p><p>Ante cualquier accidente hay que seguir siempre la <mark>conducta PAS</mark>, en este orden:</p><p>• <b>P de PROTEGER</b>: asegurarte de que el lugar es seguro para ti y para el herido. Por ejemplo, parar el juego, apartar el material peligroso o alejar a los curiosos. No te pongas en peligro: un herido más no ayuda.</p><p>• <b>A de AVISAR</b>: llamar a un <b>adulto</b> (el profesor o la profesora) y, si es grave, al <b>112</b>. Hay que decir con calma: qué ha pasado, dónde estáis, cuántos heridos hay y cómo están (si están conscientes y respiran).</p><p>• <b>S de SOCORRER</b>: ayudar al herido con lo que sepas hacer, sin hacer nada de lo que no estés seguro. Tranquilízalo, háblale, no lo dejes solo y no le muevas si se ha dado un golpe fuerte en la cabeza o la espalda.</p>`,
      svg: svg("Conducta PAS: proteger, avisar y socorrer", `${tit("Conducta PAS")}${columna([["P · PROTEGER", COL.naranja], ["A · AVISAR (112)", COL.rojo], ["S · SOCORRER", COL.verde]], 110, 160, 38, 30, 14)}${cruz(224, 100, 24)}`),
    },
    {
      html: `<h3>Heridas, hemorragias y golpes</h3><p>En la actividad física, las lesiones más frecuentes son leves. Así se actúa:</p><p><b>Herida leve</b> (un rasguño o una rozadura):<br>1. Lavarse las manos (y ponerse guantes si los hay).<br>2. Limpiar la herida con <b>agua y jabón</b> o suero fisiológico, desde el centro hacia fuera.<br>3. Aplicar un antiséptico y cubrir con una gasa o tirita.<br>No uses algodón, que deja pelusas en la herida.</p><p><b>Hemorragia</b> (sangra mucho):<br>• Presionar directamente sobre la herida con una gasa o un pañuelo limpio durante varios minutos y avisar a un adulto.</p><p><b>Sangrado por la nariz</b>:<br>• Sentarse con la cabeza ligeramente <b>hacia delante</b> (no hacia atrás, porque la sangre iría a la garganta) y apretar la parte blanda de la nariz durante unos 10 minutos.</p><p><b>Golpe o contusión</b> (un chichón, un moratón):<br>• Aplicar <b>frío</b> envuelto en un paño (nunca el hielo directamente sobre la piel) durante unos 10-15 minutos.</p><p>Si el golpe ha sido en la <b>cabeza</b> y la persona se marea, vomita, está confusa o se queda dormida, hay que avisar enseguida a un adulto y a emergencias.</p>`,
      svg: svg("Qué hacer ante una herida, sangrado de nariz y un golpe", `${tit("Pequeñas lesiones")}${filas([["herida", "agua y jabón, tapar", COL.azul], ["hemorragia", "presionar con gasa", COL.rojo], ["nariz", "cabeza hacia delante", COL.morado], ["golpe", "frío con un paño", COL.agua]], 54, 30, { wa: 80, wb: 140 })}`),
    },
    {
      html: `<h3>Esguinces, calambres y golpe de calor</h3><p>Un <mark>esguince</mark> es una lesión de los ligamentos de una articulación, normalmente el tobillo, al hacer un giro brusco o pisar mal. Duele, se hincha y puede salir un moratón. Hay que aplicar la regla <b>RICE</b> (en español, <b>RHCE</b>):</p><p>• <b>R</b>eposo: dejar de hacer ejercicio y no apoyar el pie.<br>• <b>H</b>ielo: aplicar frío envuelto en un paño, 15-20 minutos.<br>• <b>C</b>ompresión: un vendaje que no apriete demasiado (lo pone un adulto).<br>• <b>E</b>levación: levantar la pierna por encima del corazón para que baje la hinchazón.<br>Si el dolor es muy fuerte o no se puede apoyar el pie, hay que ir al médico: podría ser una fractura.</p><p>Un <b>calambre</b> es una contracción involuntaria y dolorosa de un músculo, a menudo del gemelo. Se alivia <b>estirando suavemente</b> el músculo (por ejemplo, tirando de la punta del pie hacia ti), dando un masaje suave y bebiendo agua.</p><p>El <b>golpe de calor</b> ocurre cuando el cuerpo se calienta demasiado por el ejercicio con mucho calor. La persona está muy roja o pálida, con dolor de cabeza, mareo, a veces sin sudor. Hay que llevarla a la <b>sombra</b>, aflojar la ropa, refrescarla con agua y darle de beber si está consciente, y avisar al 112.</p>`,
      svg: svg("Regla RHCE para un esguince: reposo, hielo, compresión y elevación", `${tit("Esguince: R-H-C-E")}${fichas([["R · Reposo", "no apoyar", COL.azul], ["H · Hielo", "15-20 min con paño", COL.agua], ["C · Compresión", "vendaje suave", COL.morado], ["E · Elevación", "pierna en alto", COL.verde]])}`),
    },
    {
      html: `<h3>Pérdida de conocimiento y atragantamiento</h3><p>Hay situaciones más <mark>graves</mark> en las que siempre hay que avisar al 112 y a un adulto. Aun así, es bueno saber qué se hace:</p><p><b>Si una persona se desmaya</b> pero <b>respira</b>:<br>• Se la coloca en la <b>posición lateral de seguridad</b>: tumbada de lado, con la pierna de arriba doblada para que no ruede y la cabeza ligeramente hacia atrás. Así, si vomita, no se ahoga.<br>• No darle nada de comer ni de beber.<br>• Vigilar que siga respirando hasta que llegue la ayuda.</p><p><b>Si una persona no responde y no respira</b> con normalidad, hay que llamar al 112 y empezar la <b>reanimación cardiopulmonar</b> (RCP), con compresiones en el centro del pecho. El operador del 112 puede dar las instrucciones por teléfono. En muchos colegios y polideportivos hay un <b>desfibrilador</b> (DEA), un aparato que da instrucciones en voz alta y que cualquiera puede usar.</p><p><b>Atragantamiento</b>: si alguien se atraganta pero puede toser, hay que animarle a <b>toser fuerte</b>. Si no puede toser, hablar ni respirar, un adulto debe darle golpes en la espalda y, si no funciona, hacer la maniobra de compresiones abdominales (maniobra de Heimlich).</p>`,
      svg: svg("Posición lateral de seguridad para una persona inconsciente que respira", `${tit("Posición lateral de seguridad")}${suelo(146)}<g stroke="var(--pen)" stroke-width="5" stroke-linecap="round" fill="none"><path d="M78 128 H158"/><path d="M158 128 L190 120 L198 140"/><path d="M158 128 L192 142"/><path d="M96 128 L104 144"/><path d="M90 128 L74 108"/></g><circle cx="64" cy="124" r="12" fill="#fcd9b6"/>${tx(130, 166, "de lado · pierna doblada · cabeza atrás", 240, { weight: 700 })}${cj(70, 38, 120, 30, "llama al 112", COL.rojo)}`),
    },
    {
      html: `<h3>El botiquín y la prevención</h3><p>Todos los colegios, polideportivos y casas deberían tener un <mark>botiquín</mark> básico, en un lugar conocido, seco y fuera del alcance de los niños pequeños. Debe contener:</p><p>• Gasas estériles, tiritas y vendas.<br>• Esparadrapo y tijeras de punta redonda.<br>• Suero fisiológico y un antiséptico.<br>• Guantes desechables.<br>• Una bolsa de frío instantáneo.<br>• Una manta térmica.<br>• Una lista de teléfonos de emergencia.</p><p>Los medicamentos solo los dan los adultos y siguiendo las indicaciones de un médico.</p><p>Pero lo mejor de todo es <b>prevenir</b> para que los accidentes no ocurran:</p><p>• <b>Calentar</b> antes y estirar después.<br>• Usar <b>ropa y calzado</b> adecuados y quitarse joyas y relojes.<br>• Revisar el <b>material</b> y el espacio de juego.<br>• Respetar las <b>normas</b> de seguridad y del juego. ¡Jugar limpio también evita lesiones!<br>• <b>Beber agua</b> y protegerse del sol.<br>• Avisar si te encuentras mal o te duele algo.</p><p>Aprender primeros auxilios es un acto de responsabilidad y solidaridad. ¡Quizá algún día ayudes a alguien!</p>`,
      svg: svg("Contenido básico de un botiquín", `${tit("El botiquín")}<rect x="30" y="48" width="200" height="110" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="3"/><rect x="110" y="38" width="40" height="12" rx="4" fill="var(--leaf)"/>${cruz(130, 76, 16)}${["gasas y tiritas", "vendas", "suero y antiséptico", "guantes", "frío instantáneo"].map((w, i) => tx(i < 3 ? 82 : 182, 110 + (i % 3) * 18, w, 96)).join("")}`),
    },
  ],
  figura: {
    titulo: "Juego limpio y primeros auxilios en ocho ideas",
    svg: rejilla([
      ["Juego limpio", "respeto a todos", COL.verde],
      ["Saber ganar", "sin burlas", "#15803d"],
      ["Saber perder", "sin excusas", COL.azul],
      ["Inclusión", "todos juegan", COL.morado],
      ["PAS", "proteger, avisar, socorrer", COL.rojo],
      ["112", "emergencias", COL.naranja],
      ["Esguince", "reposo, hielo…", COL.agua],
      ["Prevenir", "calentar y cuidar", COL.marron],
    ], 4, 86, "Resumen de juego limpio y primeros auxilios"),
  },
  video: vgen("rKIMDP4BQMI", "primeros auxilios para niños"),
  ejemplos: [
    { enunciado: "Un compañero se tuerce el tobillo en clase. Aplica la conducta PAS.",
      pasos: ["Proteger: parar el juego y que nadie choque con él.", "Avisar: llamar al profesor o profesora.", "Socorrer: que no apoye el pie, frío con un paño, pierna en alto."],
      resultado: "PAS y regla RHCE para el esguince." },
    { enunciado: "Tu equipo pierde 2-1 por un penalti dudoso. ¿Qué haces al acabar?",
      pasos: ["No culpar al árbitro ni insultar.", "Felicitar al rival y dar la mano.", "Pensar qué podemos mejorar."],
      resultado: "Aceptar la derrota con deportividad." },
    { enunciado: "Llamas al 112 porque un amigo se ha desmayado en el parque. ¿Qué datos das?",
      pasos: ["Qué ha pasado.", "Dónde estáis exactamente.", "Cuántos heridos y si respira y responde."],
      resultado: "Qué, dónde, cuántos y cómo está; y seguir las instrucciones del operador." },
  ],
  errores: [
    "Pensar que el juego limpio significa no querer ganar.",
    "Fingir una falta para engañar al árbitro.",
    "Echar la cabeza hacia atrás cuando sangra la nariz: hay que inclinarla hacia delante.",
    "Poner hielo directamente sobre la piel.",
    "Mover a alguien que se ha dado un golpe fuerte en la espalda o la cabeza.",
  ],
  ejercicios: [
    { q: "¿Qué es el juego limpio?", sol: "Una forma de jugar basada en el respeto a las reglas, rivales, árbitros, compañeros y a uno mismo." },
    { q: "Escribe tres ejemplos de saber ganar y tres de saber perder.", sol: "Ganar: sin burlas, reconocer al rival, agradecer. Perder: felicitar, sin excusas, aprender." },
    { q: "Escribe cuatro comportamientos contrarios al juego limpio.", sol: "Trampas, violencia, insultos, discriminación (también dopaje)." },
    { q: "Propón tres medidas para que todos participen en un partido de clase.", sol: "Equipos mixtos y equilibrados, pasar a todos, adaptar reglas." },
    { q: "¿Qué son los Juegos Paralímpicos?", sol: "La competición para deportistas con discapacidad, que se celebra después de los Juegos Olímpicos." },
    { q: "¿Qué significa PAS?", sol: "Proteger, Avisar y Socorrer." },
    { q: "¿Qué datos hay que dar al llamar al 112?", sol: "Qué ha pasado, dónde, cuántos heridos y cómo están." },
    { q: "¿Cómo se cura una herida leve?", sol: "Lavarse las manos, limpiar con agua y jabón, antiséptico y cubrir con gasa o tirita." },
    { q: "Explica la regla RHCE.", sol: "Reposo, Hielo, Compresión y Elevación, para esguinces." },
    { q: "¿Para qué sirve la posición lateral de seguridad?", sol: "Para que una persona inconsciente que respira no se ahogue si vomita." },
  ],
  quiz: [
    { q: "Juego limpio en inglés es…", o: ["time out", "game over", "fair play"], a: 2, e: "Fair play." },
    { q: "Si un rival se lesiona…", o: ["paras el juego", "te burlas", "sigues jugando"], a: 0, e: "Se para el juego." },
    { q: "Fingir una falta es…", o: ["una trampa", "juego limpio", "una regla"], a: 0, e: "Una trampa." },
    { q: "Tomar sustancias prohibidas para rendir más es…", o: ["hidratación", "dopaje", "calentamiento"], a: 1, e: "Dopaje." },
    { q: "La A de PAS significa…", o: ["andar", "avisar", "atacar"], a: 1, e: "Avisar." },
    { q: "El teléfono de emergencias es el…", o: ["112", "010", "123"], a: 0, e: "El 112." },
    { q: "Con sangrado de nariz la cabeza va…", o: ["tumbada", "hacia delante", "hacia atrás"], a: 1, e: "Hacia delante." },
    { q: "Para un esguince se aplica…", o: ["calor", "nada", "frío"], a: 2, e: "Frío con un paño." },
    { q: "Un calambre se alivia…", o: ["estirando suavemente", "con calor fuerte", "corriendo más"], a: 0, e: "Estirando suavemente." },
    { q: "A una persona inconsciente que respira se la coloca…", o: ["en posición lateral de seguridad", "de pie", "boca arriba sentada"], a: 0, e: "Posición lateral de seguridad." },
  ],
  examen: [
    { q: "Teresa Perales es una famosa deportista…", o: ["paralímpica", "de ajedrez", "de fútbol"], a: 0, e: "Paralímpica, nadadora." },
    { q: "Para limpiar una herida es mejor no usar…", o: ["agua", "algodón", "gasa"], a: 1, e: "Algodón." },
    { q: "Ante un golpe de calor, lo primero es llevar a la persona a…", o: ["correr", "el sol", "la sombra"], a: 2, e: "A la sombra." },
    { q: "El DEA es un…", o: ["vendaje", "desfibrilador", "termómetro"], a: 1, e: "Desfibrilador." },
  ],
  feynman: ["Qué es el juego limpio y cómo se demuestra al ganar y al perder", "Qué hacer ante un accidente: la conducta PAS", "Cómo actuar ante una herida, un esguince o un golpe de calor"],
  mapa: mapa("JUEGO LIMPIO Y AUXILIOS", "var(--pri)", [
    ["Respeto", "reglas · rival · árbitro", COL.verde],
    ["Actitud", "saber ganar · saber perder", COL.azul],
    ["PAS", "proteger · avisar · socorrer", COL.rojo],
    ["Lesiones", "herida · esguince · calor", COL.naranja],
  ], 260),
  tarjetas: [
    ["Juego limpio", "Jugar con respeto a reglas y personas."],
    ["Deportividad", "Saber ganar y saber perder."],
    ["Dopaje", "Tomar sustancias prohibidas para rendir más."],
    ["Inclusión", "Que todos puedan participar."],
    ["PAS", "Proteger, Avisar, Socorrer."],
    ["112", "Teléfono de emergencias en toda Europa."],
    ["RHCE", "Reposo, Hielo, Compresión, Elevación."],
    ["Posición lateral de seguridad", "De lado, para que no se ahogue si vomita."],
  ],
  familias: ["Comentad un partido visto en la tele: ¿hubo ejemplos de juego limpio o lo contrario?", "Revisad juntos el botiquín de casa y completad lo que falte.", "Practicad la llamada al 112 como simulacro (sin marcar): qué, dónde, cuántos.", "Animad en las competiciones con respeto a todos los equipos."],
  profesores: PROF("Educación Física: juego limpio, deportividad y gestión de la victoria y la derrota; prevención de la violencia y la discriminación en el deporte; inclusión y deporte adaptado; protocolo PAS y primeros auxilios básicos ante lesiones frecuentes en la práctica física", ["Tarjeta verde de juego limpio en los partidos de clase.", "Simulacros por grupos de la conducta PAS con casos prácticos.", "Sesión de deporte adaptado (goalball, voleibol sentado) para vivenciar la inclusión."]),
  fuentes: [RD, { t: "Cruz Roja Española: primeros auxilios", url: "https://www2.cruzroja.es/" }, { t: "Comité Paralímpico Español", url: "https://www.paralimpicos.es/" }, wiki("Juego limpio", "Juego_limpio")],
  revisado: REV,
};
