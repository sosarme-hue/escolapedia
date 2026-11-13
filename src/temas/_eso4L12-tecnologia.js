// Nivel libro: Tecnología musical (Música 4º ESO).
const { filas, cadena, vs, rejilla, barras, tabla, marco } = require("./_eso4L12");

// Onda continua y sus muestras.
const muestras = (() => {
  const xs = Array.from({ length: 17 }, (_, i) => 20 + i * 14);
  const y = (x) => 80 - 48 * Math.sin(((x - 20) / 224) * 2 * Math.PI);
  const curva = Array.from({ length: 113 }, (_, i) => { const x = 20 + i * 2; return `${i ? "L" : "M"}${x} ${y(x).toFixed(1)}`; }).join(" ");
  return marco("Muestreo: el ordenador mide la onda a intervalos regulares", `
    <path d="M14 80 H 250" stroke="var(--line)" stroke-width="1.5"/>
    <path d="${curva}" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
    ${xs.map((x) => `<path d="M${x} 80 V ${y(x).toFixed(1)}" stroke="var(--red)" stroke-width="2"/><circle cx="${x}" cy="${y(x).toFixed(1)}" r="3.5" fill="var(--red)"/>`).join("")}
    <g font-size="11" font-weight="700"><text x="130" y="152" text-anchor="middle" fill="var(--pen)">onda real (continua)</text><text x="130" y="170" text-anchor="middle" fill="var(--red)">muestras: números guardados</text></g>`);
})();

// Envolvente ADSR.
const adsr = marco("Envolvente ADSR: ataque, decaimiento, sostenimiento y relajación", `
  <path d="M14 140 H 250" stroke="var(--line)" stroke-width="1.5"/>
  <path d="M20 140 L 60 30 L 100 75 L 180 75 L 240 140" fill="var(--pen)" fill-opacity=".12" stroke="var(--pen)" stroke-width="3"/>
  <g font-size="13" font-weight="700" text-anchor="middle"><text x="40" y="160" fill="var(--red)">A</text><text x="80" y="160" fill="var(--hl-ink)">D</text><text x="140" y="160" fill="var(--leaf)">S</text><text x="210" y="160" fill="var(--muted)">R</text></g>
  <text x="140" y="66" text-anchor="middle" font-size="11" fill="var(--ink)">tecla pulsada</text>
  <text x="130" y="178" text-anchor="middle" font-size="11" fill="var(--muted)">volumen de una nota en el tiempo</text>`);

module.exports = {
  minutos: 100,
  revisado: "2026-11-13",
  video: { id: "1gOp3F2-PaA", titulo: "Cómo empezar en la producción musical desde cero", canal: "El Rincón Del Mastering", vistas: 185795, megusta: 0, busqueda: "producción musical desde cero" },
  objetivos: ["Explicar el recorrido del sonido desde el micrófono hasta la plataforma de streaming", "Grabar, editar y mezclar una pieza sencilla cuidando la salud auditiva"],
  claves: ["frecuencia", "compresión de datos", "síntesis", "masterización"],
  lectura: {
    titulo: "Un dormitorio convertido en estudio",
    html: `<p>En enero de 2020, la cantante Billie Eilish ganó cinco premios Grammy, entre ellos los de mejor canción y mejor álbum, con un disco grabado en el pequeño dormitorio de su hermano Finneas O'Connell, en Los Ángeles. Lo habían producido en casa con un ordenador portátil, un micrófono, una interfaz de audio, unos altavoces y un programa de producción. No tenían una gran discográfica pagando un estudio caro: tenían ideas, paciencia y conocimientos técnicos.</p><p>Hace cincuenta años algo así era imposible. Grabar un disco exigía estudios con mesas de mezclas enormes, cintas magnéticas y técnicos especializados, y costaba muchísimo dinero. La <b>tecnología digital</b> ha democratizado la música: hoy cualquier estudiante puede grabar, editar, mezclar y publicar sus canciones en todo el mundo desde su habitación. Pero las herramientas no lo hacen todo: <mark>hay que entender cómo funciona el sonido y cómo se trata</mark> para que el resultado suene bien. En este tema aprenderás cómo se convierte el sonido en números, qué hace cada aparato del estudio, cómo funcionan el MIDI y los sintetizadores, y cómo se mezcla, masteriza y publica una canción sin dañar tu oído.</p>`,
  },
  partes: ["El estudio de grabación", "MIDI e instrumentos virtuales", "Mezcla, efectos y cuidado del oído"],
  mas: {
    "Qué es MIDI y qué no es": `<p>Esta diferencia tiene consecuencias prácticas. Con MIDI se puede cambiar el tempo sin que el sonido se distorsione, transportar la canción a otra tonalidad con un clic o imprimir la partitura automáticamente. Con audio esas operaciones son posibles, pero más delicadas, porque hay que transformar el propio sonido grabado. Por eso muchos productores combinan las dos cosas: MIDI para la batería, el bajo y los teclados, y audio para las voces y los instrumentos acústicos.</p>`,
    "Muestreo y calidad de audio": `<p>¿Por qué 44.100 y no otra cifra? Según el <b>teorema de muestreo</b>, para captar bien una frecuencia hay que medir la onda al menos el doble de veces por segundo. Como el oído llega a unos 20.000 Hz, hacen falta más de 40.000 muestras por segundo. Los estudios profesionales trabajan a menudo a 48 kHz y 24 bits, que dan más margen para editar y procesar el sonido sin perder calidad, aunque la diferencia al escuchar el resultado final es muy pequeña.</p>`,
    "Tipos de micrófonos": `<p>La colocación importa tanto como el micrófono. Para la voz se suele situar a unos 15 o 20 centímetros de la boca, con un <b>filtro antipop</b> delante que frena el aire de consonantes como la «p» o la «b». Si se acerca mucho, los graves aumentan (es el <b>efecto de proximidad</b>, que usan los locutores de radio para tener una voz más profunda). Para una guitarra acústica se apunta al lugar donde se une el mástil con la caja, no a la boca, que suena demasiado grave y retumba.</p>`,
    "MIDI e instrumentos virtuales": `<p>El estándar MIDI se creó en 1983 para que los instrumentos electrónicos de distintas marcas pudieran comunicarse entre sí. Más de cuarenta años después sigue usándose en todo el mundo, y en 2020 se presentó una versión renovada, MIDI 2.0, con más precisión. Además de teclados, existen controladores MIDI con pads para tocar ritmos, mesas con potenciómetros para controlar el DAW e incluso instrumentos de viento y guitarras que envían datos MIDI.</p>`,
    "Del sonido al archivo digital": `<p>El proceso inverso ocurre al escuchar: el archivo se lee, un <b>conversor digital-analógico</b> transforma los números de nuevo en una señal eléctrica, el amplificador la refuerza y el altavoz o el auricular mueve el aire para que llegue a nuestros oídos. Por eso la calidad final depende de todos los eslabones de la cadena: un archivo excelente sonará mal en unos altavoces de baja calidad.</p>`,
    "El estudio de grabación": `<p>La <b>interfaz de audio</b> es el corazón del estudio casero: tiene entradas para micrófonos e instrumentos, preamplificadores que suben el nivel de la señal, los conversores y una salida para auriculares y monitores. Muchas proporcionan la <b>alimentación phantom</b> (48 V) que necesitan los micrófonos de condensador. Para que la grabación no recoja la reverberación de la sala, se usan paneles absorbentes, alfombras, cortinas gruesas o incluso un armario lleno de ropa, que funciona sorprendentemente bien para grabar voces.</p>`,
    "El DAW": `<p>Casi todos los DAW comparten los mismos elementos: la <b>vista de pistas</b> con la línea de tiempo, el <b>mezclador</b> con un canal por pista, el <b>transporte</b> (grabar, reproducir, parar, bucle), el <b>metrónomo</b> o claqué y el navegador de sonidos y efectos. Aprendiendo uno, es fácil pasar a otro. Para clase son muy útiles los DAW en línea y gratuitos, que permiten colaborar en el mismo proyecto desde distintos ordenadores.</p>`,
    "Mezcla, efectos y cuidado del oído": `<p>Algunos efectos básicos: el <b>ecualizador</b> sube o baja frecuencias (graves, medios, agudos) para que cada instrumento tenga su espacio; el <b>compresor</b> reduce la diferencia entre los sonidos fuertes y los suaves; la <b>reverberación</b> simula el sonido de una sala; el <b>delay</b> repite el sonido como un eco. La pérdida de audición por ruido es irreversible: las células del oído interno que se dañan no se regeneran. Por eso los músicos profesionales usan tapones especiales que reducen el volumen sin distorsionar el sonido.</p>`,
  },
  videos: {
    "El estudio de grabación": { id: "qFos6QuiYe8", titulo: "Home studio para principiantes", canal: "Bada Sessions", vistas: 535091 },
  },
  svgs: {
    "Muestreo y calidad de audio": muestras,
    "Tipos de micrófonos": vs("Micrófono dinámico y de condensador", ["Dinámico", ["resistente", "para directo y voces fuertes", "no necesita phantom"], "var(--pen)"], ["Condensador", ["muy sensible y detallado", "para estudio", "necesita phantom 48 V"], "var(--red)"]),
    "Qué es MIDI y qué no es": vs("Audio y MIDI: qué guarda cada uno", ["Audio", ["guarda el sonido grabado", "ocupa megas", "difícil cambiar notas"], "var(--pen)"], ["MIDI", ["guarda instrucciones", "ocupa kilobytes", "se cambia nota e instrumento"], "var(--leaf)"]),
  },
  nuevos: [
    {
      tras: "Del sonido al archivo digital",
      html: `<h3>Las cualidades del sonido y cómo se miden</h3><p>Toda la tecnología musical trabaja con las cuatro <b>cualidades del sonido</b>. La <b>altura</b> depende de la <b>frecuencia</b>, el número de vibraciones por segundo, que se mide en hercios (Hz): cuanto más rápida la vibración, más agudo el sonido. El ser humano oye aproximadamente entre 20 Hz y 20.000 Hz, y con la edad perdemos los agudos. El la de afinar vibra a 440 Hz.</p><p>La <b>intensidad</b> depende de la amplitud de la onda y se mide en <b>decibelios</b> (dB). La escala de decibelios es logarítmica: cada 10 dB más, el sonido es diez veces más intenso, y nuestro oído lo percibe aproximadamente el doble de fuerte. La <b>duración</b> se mide en segundos y el <b>timbre</b>, lo que diferencia un violín de una flauta tocando la misma nota, depende de los <b>armónicos</b>, frecuencias más agudas que acompañan a la nota principal. Los programas de audio muestran todo esto: la forma de onda indica la intensidad en el tiempo y el analizador de espectro, las frecuencias.</p>`,
      svg: barras("Nivel de algunos sonidos en decibelios", [["Susurro", 30, "var(--leaf)"], ["Conversación", 60, "var(--leaf)"], ["Tráfico", 85, "var(--sun)"], ["Concierto", 110, "var(--red)"], ["Avión", 130, "var(--red)"]], " dB", "Desde 85 dB, riesgo con exposición larga"),
    },
    {
      tras: "Muestreo y calidad de audio",
      html: `<h3>Formatos de audio y compresión</h3><p>Los archivos de audio pueden guardarse de tres maneras. Los formatos <b>sin compresión</b>, como <b>WAV</b> o AIFF, guardan todas las muestras tal cual: tienen la máxima calidad y son los que se usan para grabar y mezclar, pero ocupan mucho. Los formatos con <b>compresión sin pérdida</b>, como <b>FLAC</b>, reducen el tamaño a la mitad aproximadamente sin perder ningún dato, igual que un archivo ZIP. Los formatos con <b>compresión con pérdida</b>, como <b>MP3</b>, AAC u Ogg, eliminan la información que el oído casi no percibe, por ejemplo sonidos tapados por otros más fuertes.</p><p>La calidad de un archivo comprimido se mide por su <b>tasa de bits</b> (bitrate) en kilobits por segundo (kbps): 128 kbps es una calidad aceptable y 320 kbps es muy buena. Las plataformas de streaming usan formatos comprimidos para que la música llegue rápido aunque la conexión sea lenta, y algunas ofrecen también calidad sin pérdida. Un consejo práctico: trabaja siempre en WAV y exporta en MP3 solo al final; si comprimes una y otra vez un MP3, la calidad empeora cada vez.</p>`,
      svg: tabla("Formatos de audio más habituales", ["Formato", "Compresión", "Uso"], [["WAV", "ninguna", "grabar"], ["FLAC", "sin pérdida", "archivar"], ["MP3", "con pérdida", "compartir"], ["AAC / Ogg", "con pérdida", "streaming"]]),
    },
    {
      tras: "El DAW",
      html: `<h3>Grabar paso a paso</h3><p>Una buena grabación empieza antes de pulsar el botón rojo. Primero se <b>prepara</b> la sesión: crear el proyecto, fijar el tempo y el compás, activar el metrónomo y nombrar las pistas. Después se ajusta la <b>ganancia</b> en la interfaz: el músico toca o canta a su volumen más fuerte y se sube el control hasta que el medidor llegue a la zona verde-amarilla, sin tocar nunca el rojo. Si la señal se pasa de 0 dB se produce <b>clipping</b>, una distorsión que no se puede arreglar después.</p><p>Durante la grabación, el intérprete se escucha por auriculares cerrados para que el sonido no se cuele en el micrófono. Se graban varias <b>tomas</b> y luego se eligen los mejores fragmentos de cada una. En la <b>edición</b> se cortan los silencios y ruidos, se ajustan las entradas al pulso (cuantización) y se aplican fundidos para evitar chasquidos. Guardar a menudo y hacer copias de seguridad es imprescindible: perder un proyecto por un fallo del ordenador es muy frustrante.</p>`,
      svg: cadena("Cómo se graba una pista", [["Preparar", "tempo, metrónomo, pistas", "var(--pen)"], ["Ganancia", "sin llegar al rojo", "var(--sun)"], ["Tomas", "varias, con auriculares", "var(--red)"], ["Editar", "cortar, cuantizar, fundidos", "var(--leaf)"]]),
    },
    {
      tras: "MIDI e instrumentos virtuales",
      html: `<h3>Síntesis y sampling</h3><p>Los instrumentos virtuales producen el sonido de dos formas. Los <b>sintetizadores</b> lo crean desde cero con circuitos o algoritmos. En la <b>síntesis sustractiva</b>, la más común, un <b>oscilador</b> genera una onda básica (senoidal, cuadrada, de sierra), un <b>filtro</b> elimina parte de sus frecuencias para darle color, y una <b>envolvente</b> controla cómo evoluciona el volumen de cada nota: el <b>ataque</b> (lo que tarda en sonar), el <b>decaimiento</b>, el <b>sostenimiento</b> mientras se mantiene la tecla y la <b>relajación</b> al soltarla. Es la envolvente <b>ADSR</b>.</p><p>Los <b>samplers</b>, en cambio, reproducen grabaciones reales (muestras o <i>samples</i>) de instrumentos. Un buen piano virtual contiene miles de grabaciones de cada tecla a distintas intensidades. El sampling también permite tomar un fragmento de otra canción y reutilizarlo, una técnica clave en el hip hop y la electrónica; pero hay que tener en cuenta que usar un sample de una grabación ajena sin permiso puede vulnerar los derechos de autor.</p>`,
      svg: adsr,
    },
    {
      tras: "Mezcla, efectos y cuidado del oído",
      html: `<h3>Masterización y publicación</h3><p>Cuando la mezcla está terminada llega la <b>masterización</b>, el último paso técnico. El ingeniero de mastering escucha la canción en un equipo de alta calidad y hace ajustes finales de ecualización y compresión para que suene bien en cualquier sistema, desde unos auriculares baratos hasta un equipo de discoteca. También iguala el volumen de todas las canciones de un disco y prepara los archivos finales. Las plataformas de streaming ajustan el volumen de las canciones a un nivel de referencia que se mide en <b>LUFS</b>, así que hacer una canción «más fuerte que nadie» ya no sirve de mucho.</p><p>Para publicar en las plataformas se usa una <b>distribuidora digital</b>, que envía la canción a todas ellas y reparte los ingresos. Hay que preparar los <b>metadatos</b> (título, artista, compositores, año), la portada y registrar la obra para cobrar derechos. Hoy existen además herramientas de <b>inteligencia artificial</b> que ayudan a masterizar, separar instrumentos o incluso generar música; plantean debates sobre la creatividad y los derechos de los artistas que todavía se están resolviendo.</p>`,
      svg: cadena("De la idea a las plataformas", [["Grabar", "pistas en el DAW", "var(--pen)"], ["Mezclar", "volumen, efectos, panorámica", "var(--leaf)"], ["Masterizar", "sonido final equilibrado", "var(--sun)"], ["Publicar", "distribuidora y metadatos", "var(--red)"]]),
    },
  ],
  ejemplos: [
    ["¿Cuántas muestras tiene 1 minuto de audio mono a 44,1 kHz?", ["44.100 muestras por segundo.", "60 s · 44.100 = 2.646.000."], "Más de 2,6 millones de muestras."],
    ["Elige micrófono para grabar una voz en casa y otro para un concierto.", ["Estudio: condensador, por su sensibilidad y detalle.", "Directo: dinámico, resistente y menos sensible al ruido de fondo."], "Condensador para el estudio; dinámico para el directo."],
    ["Graba una melodía MIDI y cambia el instrumento.", ["Grabar las notas con un teclado MIDI en el DAW.", "Corregir en el piano roll una nota equivocada.", "Cambiar el instrumento virtual de piano a violín."], "Misma melodía, otro timbre, sin volver a grabar."],
    ["Calcula cuánto ocupa 1 minuto de audio de CD estéreo en WAV.", ["44.100 muestras · 16 bits · 2 canales = 1.411.200 bits por segundo.", "Por 60 s = 84.672.000 bits.", "Entre 8 bits por byte: unos 10,6 MB."], "Aproximadamente 10 MB por minuto."],
    ["Ajusta la ganancia para grabar una voz.", ["Pedir al cantante el pasaje más fuerte.", "Subir la ganancia hasta que el medidor llegue a la zona amarilla.", "Comprobar que nunca toca el rojo (0 dB)."], "Señal fuerte y limpia, sin clipping."],
    ["Diseña con la envolvente ADSR el sonido de un piano y el de un violín suave.", ["Piano: ataque muy corto, decaimiento largo, sostenimiento bajo.", "Violín suave: ataque lento, sostenimiento alto, relajación media."], "La envolvente cambia el carácter del sonido."],
  ],
  errores: [
    "Pensar que un archivo MIDI contiene sonido grabado.",
    "Usar un micrófono de condensador sin alimentación phantom.",
    "Subir el volumen de todo en la mezcla en vez de equilibrar.",
    "Creer que más bits y más kHz siempre se notan al oír.",
    "Escuchar a mucho volumen durante horas en el estudio.",
    "Grabar con la ganancia tan alta que la señal llega al rojo (clipping).",
  ],
  ejercicios: [
    ["b", "¿En qué unidad se mide la frecuencia y qué cualidad del sonido determina?", "En hercios (Hz); determina la altura."],
    ["b", "¿Entre qué frecuencias oye el ser humano?", "Aproximadamente entre 20 y 20.000 Hz."],
    ["b", "¿En qué unidad se mide la intensidad?", "En decibelios (dB)."],
    ["b", "¿Qué hace un micrófono?", "Convierte la onda de presión del aire en señal eléctrica."],
    ["b", "¿Qué es la frecuencia de muestreo del CD?", "44.100 muestras por segundo (44,1 kHz)."],
    ["b", "Nombra los elementos de la cadena básica de grabación.", "Micrófono, interfaz de audio, ordenador con DAW, monitores o auriculares."],
    ["b", "¿Qué significa DAW? Nombra dos.", "Estación de trabajo de audio digital: Audacity, BandLab, Reaper, GarageBand…"],
    ["b", "¿Qué guarda un archivo MIDI?", "Instrucciones: nota, intensidad (velocity), inicio y final; no sonido."],
    ["b", "Nombra dos formatos sin compresión y dos con pérdida.", "WAV y AIFF; MP3 y AAC (u Ogg)."],
    ["b", "¿Qué es el clipping?", "Distorsión que aparece cuando la señal supera 0 dB."],
    ["b", "¿A partir de cuántos decibelios hay riesgo para el oído con exposición larga?", "A partir de unos 85 dB."],
    ["b", "Nombra cuatro efectos de mezcla.", "Ecualizador, compresor, reverberación y delay."],
    ["m", "Explica la diferencia entre micrófono dinámico y de condensador.", "Dinámico: resistente, para directo, sin phantom. Condensador: sensible y detallado, para estudio, necesita phantom."],
    ["m", "¿Qué es un micrófono cardioide?", "El que capta sobre todo el sonido que le llega por delante."],
    ["m", "¿Qué es la profundidad de bits? ¿Cuántos niveles tiene un CD?", "El número de bits de cada muestra; 16 bits, 65.536 niveles."],
    ["m", "¿Por qué un MP3 ocupa mucho menos que un WAV?", "Porque elimina la información que el oído casi no percibe (compresión con pérdida)."],
    ["m", "Diferencia FLAC y MP3.", "FLAC comprime sin perder datos; MP3 elimina datos y pierde calidad."],
    ["m", "Explica qué es la cuantización.", "Ajustar automáticamente las notas al pulso o a una rejilla rítmica."],
    ["m", "¿Qué hacen el oscilador, el filtro y la envolvente de un sintetizador?", "El oscilador genera la onda, el filtro elimina frecuencias y la envolvente controla el volumen en el tiempo."],
    ["m", "¿Qué diferencia hay entre un sintetizador y un sampler?", "El sintetizador crea el sonido; el sampler reproduce grabaciones reales."],
    ["m", "¿Qué es la panorámica?", "La colocación de cada pista entre el altavoz izquierdo y el derecho."],
    ["m", "¿Para qué sirve la masterización?", "Para los ajustes finales que hacen que la canción suene bien en cualquier equipo e iguale el volumen del disco."],
    ["m", "¿Por qué la pérdida de audición por ruido es tan grave?", "Porque es irreversible: las células del oído interno no se regeneran."],
    ["a", "Calcula cuánto ocupa un minuto de audio estéreo a 48 kHz y 24 bits.", "48.000 · 24 · 2 = 2.304.000 bits/s; · 60 = 138.240.000 bits; / 8 ≈ 17,3 MB."],
    ["a", "Explica por qué 44,1 kHz es suficiente para el oído humano.", "Para captar una frecuencia hay que muestrear al menos al doble; el doble de 20.000 Hz son 40.000, y 44.100 lo supera con margen."],
    ["a", "Graba en un DAW una pista de voz y otra de percusión y mézclalas. Describe los pasos y los ajustes.", "Respuesta práctica: preparar sesión, ajustar ganancia, grabar tomas, editar, equilibrar volúmenes, panoramizar y añadir reverberación ligera."],
    ["a", "Programa en el piano roll un patrón de batería de 2 compases (bombo, caja y charles).", "Respuesta práctica. Ejemplo: bombo en 1 y 3, caja en 2 y 4, charles en corcheas."],
    ["a", "Diseña con ADSR tres sonidos (percusión, cuerda frotada y órgano) y justifica cada envolvente.", "Percusión: ataque y decaimiento cortos, sin sostenimiento. Cuerda: ataque lento, sostenimiento alto. Órgano: ataque inmediato, sostenimiento máximo, relajación corta."],
    ["a", "Elabora una guía de salud auditiva para el estudio de grabación de clase.", "Respuesta abierta: volumen moderado, pausas cada hora, auriculares por debajo del 60 %, tapones en conciertos, limitar el volumen del móvil."],
    ["a", "Explica el camino de una canción desde que se graba hasta que suena en tu móvil por streaming.", "Grabación, mezcla, masterización, exportación, distribuidora con metadatos, plataforma, compresión para streaming, conversor digital-analógico y auricular."],
    ["a", "Debate: ¿puede una inteligencia artificial componer música? ¿De quién son los derechos?", "Respuesta abierta. Debe tratar la creatividad, el uso de obras ajenas para entrenar y la protección de los artistas."],
    ["a", "Compara un estudio de los años 70 con un estudio casero actual: equipo, coste y resultado.", "Años 70: mesa enorme, cinta, técnicos y alto coste. Hoy: ordenador, interfaz, micrófono y DAW a bajo coste, con calidad profesional posible."],
  ],
  quiz: [
    ["La frecuencia se mide en…", ["hercios", "decibelios", "bits", "voltios"], 0, "Hz."],
    ["El la de afinar vibra a…", ["440 Hz", "44 Hz", "4.400 Hz", "20 Hz"], 0, "Referencia universal."],
    ["La intensidad se mide en…", ["decibelios", "hercios", "kilobytes", "segundos"], 0, "dB."],
    ["El timbre depende de…", ["los armónicos", "la duración", "el volumen", "el formato"], 0, "Frecuencias que acompañan."],
    ["El CD usa una frecuencia de muestreo de…", ["44,1 kHz", "8 kHz", "1 kHz", "200 kHz"], 0, "44.100 por segundo."],
    ["El micrófono dinámico es ideal para…", ["el directo", "el silencio", "medir la temperatura", "masterizar"], 0, "Resistente."],
    ["El micrófono de condensador necesita…", ["alimentación phantom", "pilas de reloj", "nada", "cinta"], 0, "48 V."],
    ["La interfaz de audio…", ["conecta micrófonos al ordenador", "es un altavoz", "es un DAW", "es un archivo"], 0, "Preamplifica y convierte."],
    ["Un archivo MIDI contiene…", ["instrucciones", "sonido grabado", "vídeo", "imágenes"], 0, "Notas y velocity."],
    ["La velocity en MIDI va de…", ["0 a 127", "1 a 10", "0 a 1.000", "20 a 20.000"], 0, "Fuerza de la nota."],
    ["WAV es un formato…", ["sin compresión", "con pérdida", "de vídeo", "MIDI"], 0, "Máxima calidad."],
    ["FLAC comprime…", ["sin pérdida", "con mucha pérdida", "solo vídeo", "nada"], 0, "Como un ZIP."],
    ["El clipping aparece cuando la señal…", ["supera 0 dB", "es muy baja", "es MIDI", "está en mono"], 0, "Distorsión."],
    ["La cuantización…", ["ajusta las notas al pulso", "sube el volumen", "comprime el archivo", "afina la voz"], 0, "Rejilla rítmica."],
    ["En la envolvente ADSR, la A es…", ["el ataque", "el agudo", "el audio", "el amplificador"], 0, "Lo que tarda en sonar."],
    ["Un sampler…", ["reproduce grabaciones reales", "crea ondas desde cero", "es un micrófono", "mide decibelios"], 0, "Muestras."],
    ["El compresor…", ["reduce la diferencia entre fuerte y suave", "añade eco", "cambia la altura", "corta la canción"], 0, "Rango dinámico."],
    ["La panorámica coloca el sonido…", ["entre izquierda y derecha", "más agudo", "más rápido", "en MP3"], 0, "Espacio estéreo."],
    ["La masterización es…", ["el último paso técnico antes de publicar", "la primera grabación", "escribir la letra", "afinar la guitarra"], 0, "Sonido final."],
    ["Para proteger el oído, los auriculares deben ir…", ["por debajo del 60 %", "al máximo", "al 90 %", "da igual"], 0, "Recomendación de la OMS."],
  ],
  examen: [
    ["El conversor digital-analógico…", ["convierte números en señal eléctrica", "graba la voz", "crea MIDI", "comprime archivos"], 0, "Para escuchar."],
    ["Una tasa de 320 kbps en un MP3 indica…", ["muy buena calidad", "muy mala calidad", "que es MIDI", "que no tiene sonido"], 0, "Bitrate alto."],
    ["Los auriculares cerrados al grabar evitan…", ["que el sonido se cuele en el micrófono", "el clipping", "la cuantización", "el MIDI"], 0, "Aislamiento."],
    ["En síntesis sustractiva, el filtro…", ["elimina frecuencias", "genera la onda", "graba", "publica"], 0, "Da color."],
    ["Las plataformas igualan el volumen midiendo en…", ["LUFS", "hercios", "píxeles", "voltios"], 0, "Nivel de referencia."],
    ["Una distribuidora digital…", ["envía la canción a las plataformas", "fabrica micrófonos", "mezcla", "compone"], 0, "Reparte ingresos."],
    ["Cada 10 dB más, la intensidad es…", ["diez veces mayor", "igual", "la mitad", "el doble exacto"], 0, "Escala logarítmica."],
    ["Un micrófono cardioide capta sobre todo…", ["por delante", "por detrás", "en todas direcciones", "nada"], 0, "Forma de corazón."],
  ],
  tarjetas: [
    ["Frecuencia y decibelio", "Hz mide la altura; dB, la intensidad."],
    ["WAV, FLAC y MP3", "Sin compresión, sin pérdida y con pérdida."],
    ["Envolvente ADSR", "Ataque, decaimiento, sostenimiento y relajación."],
    ["Masterización", "Ajuste final para que la canción suene bien en todo equipo."],
  ],
  glosario: [
    ["Armónicos", "Frecuencias que acompañan a una nota y forman el timbre."],
    ["Clipping", "Distorsión por superar el nivel máximo."],
    ["Compresor", "Efecto que reduce la diferencia de volumen."],
    ["Cuantización", "Ajuste de las notas a una rejilla rítmica."],
    ["DAW", "Programa para grabar, editar y mezclar audio."],
    ["Decibelio", "Unidad de intensidad del sonido."],
    ["Ecualizador", "Efecto que sube o baja frecuencias."],
    ["Envolvente", "Evolución del volumen de una nota en el tiempo."],
    ["Hercio", "Unidad de frecuencia: vibraciones por segundo."],
    ["Interfaz de audio", "Aparato que conecta micrófonos al ordenador."],
    ["Masterización", "Último ajuste técnico de una grabación."],
    ["MIDI", "Lenguaje de instrucciones musicales entre aparatos."],
    ["Muestreo", "Medición de la onda a intervalos regulares."],
    ["Phantom", "Alimentación de 48 V para micrófonos de condensador."],
    ["Sampler", "Instrumento que reproduce sonidos grabados."],
    ["Sintetizador", "Instrumento que genera sonidos electrónicamente."],
  ],
  situacion: {
    titulo: "Producimos la canción del curso",
    reto: "La clase va a producir una canción original o una versión para la fiesta de fin de curso. Cada grupo se encargará de una fase del proceso, como en un estudio profesional, y la canción se publicará en la web del centro.",
    pasos: ["Preproducción: elegir la canción, fijar tempo y tonalidad y crear el proyecto en un DAW gratuito y colaborativo.", "Programación MIDI: batería y bajo en el piano roll, con instrumentos virtuales.", "Grabación de audio: voces e instrumentos reales, ajustando la ganancia sin clipping.", "Edición y mezcla: limpiar tomas, cuantizar, equilibrar volúmenes, panorámica y efectos.", "Masterización y exportación en WAV y MP3, con metadatos y una guía de escucha segura."],
    producto: "Canción producida en clase, con ficha técnica de cada fase y guía de salud auditiva.",
    evaluacion: ["Uso correcto del DAW y de las herramientas MIDI y audio.", "Calidad técnica: ganancia, edición y mezcla equilibrada.", "Trabajo cooperativo y cumplimiento de cada fase.", "Cuidado de la salud auditiva y respeto de los derechos."],
  },
  familias: ["Probad juntos una app gratuita de producción (BandLab, GarageBand) y grabad algo divertido.", "Revisad el volumen de los auriculares y activad el límite de volumen del móvil.", "Comparad la misma canción en MP3 y en calidad alta: ¿notáis la diferencia?", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: { saberes: "Tecnología aplicada a la música: cualidades del sonido y su medida, digitalización, formatos, grabación, DAW, MIDI, síntesis y sampling, edición, mezcla, masterización y publicación, salud auditiva (RD 217/2022, Música 4º ESO).", ideas: ["Grabar y mezclar una canción de clase en BandLab o Soundtrap.", "Medir decibelios en el centro con una app sonómetro.", "Crear un loop de batería en el piano roll.", "Producción completa de la canción del curso (situación de aprendizaje)."] },
  fuentes: [{ t: "Ministerio de Sanidad: ruido y salud auditiva", url: "https://www.sanidad.gob.es/" }],
};
