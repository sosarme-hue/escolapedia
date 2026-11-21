// Análisis Musical II, 2º de Bachillerato. Tema 8 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-am");

module.exports = B.tema({
  titulo: "Desde 1945: serialismo, aleatoriedad, electroacústica y minimalismo",
  minutos: 60,
  objetivos: [
    "Reconocer el serialismo integral y la música aleatoria",
    "Diferenciar música concreta, electrónica y electroacústica",
    "Identificar la música textural y el minimalismo por audición",
    "Situar las tendencias actuales y la creación española contemporánea",
  ],
  claves: ["serialismo integral", "aleatoriedad", "música concreta", "electroacústica", "clúster", "textura", "minimalismo", "fase"],
  pregunta: {
    texto: "¿Puede ser música una obra en la que el pianista no toca ni una nota durante cuatro minutos y medio?",
    respuesta: "En <i>4'33''</i> (1952), John Cage quiso mostrar que <mark>el silencio absoluto no existe</mark>: la «obra» son los sonidos del público, la sala y la calle. Más que una broma, es una pregunta sobre qué es la música, y resume el espíritu experimental de la segunda mitad del siglo XX.",
  },
  lectura: {
    titulo: "Todo vale para sonar",
    html: `<p>Después de la Segunda Guerra Mundial, una generación de jóvenes compositores quiso empezar de cero. Unos llevaron el control al extremo, calculando cada nota, duración e intensidad con series numéricas. Otros dejaron decisiones al azar o a los intérpretes. Otros salieron de los instrumentos: grabaron trenes, voces y ruidos en cinta magnética, o fabricaron sonidos con osciladores en estudios de radio.</p>
    <p>En los años sesenta, en Estados Unidos, surgió la reacción contraria: una música de pocos elementos repetidos durante largo tiempo, el minimalismo, que hoy oyes en películas y anuncios. Este tema te da las claves para analizar música que a veces no se parece a nada que conozcas.</p>`,
  },
  secciones: [2, 3, 3],
  bloques: [
    {
      h: "El serialismo integral",
      html: `<p>Partiendo de Webern, compositores como <b>Pierre Boulez</b> y <b>Karlheinz Stockhausen</b> aplicaron el principio de la serie no solo a las alturas, sino a todos los parámetros: <b>duraciones</b>, <b>intensidades</b>, <b>ataques</b> y <b>timbres</b>. Es el <b>serialismo integral</b>, centrado en los cursos de verano de Darmstadt (Alemania).</p>
      <p>Al oído, el resultado es <b>puntillista</b>: notas aisladas en registros muy distintos, cada una con su dinámica y su timbre, separadas por silencios, sin melodía reconocible ni pulso. Paradójicamente, el control total suena casi como el azar.</p>`,
      svg: B.cajas("Parámetros serializados", [["Altura", "serie de|12 notas"], ["Duración", "serie de|valores"], ["Intensidad", "serie de|matices"], ["Ataque", "serie de|articulaciones"]], { cols: 2 }),
    },
    {
      h: "La música aleatoria",
      html: `<p>En la <b>música aleatoria</b>, parte de la obra queda al azar o a la decisión del intérprete. <b>John Cage</b> usó el <i>I Ching</i> (un libro chino de adivinación) para elegir sonidos, y preparó el piano colocando tornillos y gomas entre las cuerdas. En la <b>forma abierta</b>, el intérprete decide el orden de las secciones; en otras obras, la partitura es una <b>grafía</b> no convencional, con dibujos que cada músico interpreta.</p>
      <p>Por eso dos interpretaciones de la misma obra pueden sonar muy diferentes: en el análisis hay que hablar de los procesos, no solo del resultado.</p>`,
      svg: B.comparar("Control total y azar", ["Serialismo integral", ["todo calculado", "Boulez", "partitura exacta", "puntillismo"]], ["Aleatoriedad", ["azar o intérprete", "Cage", "forma abierta", "grafías nuevas"]]),
    },
    {
      h: "Música concreta y electrónica",
      html: `<p>En 1948, <b>Pierre Schaeffer</b> creó en la radio de París la <b>música concreta</b>: grabaciones de sonidos reales (trenes, puertas, voces) manipuladas en cinta magnética mediante cortes, bucles, cambios de velocidad y reproducción al revés. Poco después, en Colonia, nació la <b>música electrónica</b>, con sonidos generados íntegramente por <b>osciladores</b>.</p>
      <p>Pronto ambas se fundieron en la <b>música electroacústica</b>, que también combina sonidos grabados o sintetizados con instrumentos en directo, como en <i>Gesang der Jünglinge</i> de Stockhausen (1956). Los <b>sintetizadores</b> y los ordenadores llevaron estas técnicas a la música popular.</p>`,
      svg: B.rejilla("Tres músicas tecnológicas", ["Tipo", "Origen del sonido", "Centro"], [["Concreta", "sonidos grabados", "París, 1948"], ["Electrónica", "osciladores", "Colonia, 1951"], ["Electroacústica", "ambos + directo", "desde 1956"]]),
      video: { id: "9Nb6xdOcVUk", titulo: "Electroacústica: música concreta y Elektronische Musik", canal: "Mery's Music", vistas: 10951 },
    },
    {
      h: "La música textural",
      html: `<p>En los años sesenta, <b>Ligeti</b> y <b>Penderecki</b> sustituyeron la melodía por la <b>textura</b>: grandes masas de sonido que cambian lentamente. Usan <b>clústeres</b> (racimos de notas a distancia de semitono o menos), <b>glissandos</b> masivos de cuerda, <b>micropolifonía</b> (decenas de líneas tan próximas que no se distinguen) y técnicas extendidas: golpear el instrumento, tocar detrás del puente.</p>
      <p>Es una música de «nubes» sonoras. El <i>Treno a las víctimas de Hiroshima</i> de Penderecki y <i>Atmosphères</i> de Ligeti (que Kubrick usó en <i>2001: una odisea del espacio</i>) son ejemplos clave.</p>`,
      svg: B.capas("Recursos de la música textural", [["Clúster", "notas apiñadas"], ["Glissando masivo", "deslizar todas"], ["Micropolifonía", "líneas fundidas"]]),
    },
    {
      h: "Cómo analizar música sin melodía",
      html: `<p>Cuando no hay temas ni tonalidad, el análisis se centra en otros parámetros. Describe el <b>timbre</b> (instrumentos y técnicas), la <b>densidad</b> (cuántos sonidos a la vez), el <b>registro</b> (grave, agudo, extremo), la <b>dinámica</b> y su evolución, y el <b>tiempo</b> (pulsado o liso, estático o direccional).</p>
      <p>La forma se deduce de los <b>cambios</b> de esos parámetros: una sección densa y grave da paso a otra aguda y transparente. Marca con minutaje cada transformación, igual que harías con los temas.</p>`,
      svg: B.flujo("Preguntas para música contemporánea", ["¿Qué timbres y técnicas?", "¿Qué densidad?", "¿Qué registro?", "¿Hay pulso?", "¿Dónde cambia?"]),
    },
    {
      h: "El minimalismo",
      html: `<p>Frente a la complejidad europea, en Estados Unidos surge el <b>minimalismo</b> (Terry Riley, <b>Steve Reich</b>, <b>Philip Glass</b>, John Adams): pocos elementos (un motivo breve, una armonía consonante, pulso constante) que se repiten durante mucho tiempo y cambian muy poco a poco. Influido por la música africana, el gamelán y la india, busca un efecto hipnótico.</p>
      <p>Técnicas: <b>proceso aditivo</b> (añadir o quitar notas al motivo) y <b>desfase</b> (Reich): dos músicos tocan el mismo patrón y uno acelera muy ligeramente, creando dibujos rítmicos nuevos. En España, el minimalismo influyó en compositores para cine y danza.</p>`,
      svg: B.formas("Proceso aditivo", [["Paso 1", "A A A A"], ["Paso 2", "A A' A' A'"], ["Paso 3", "A' A' A'' A''"]], "Cambios mínimos y graduales"),
      video: { id: "f-88Wua04tU", titulo: "Philip Glass: el secreto emocional de su estilo compositivo", canal: "Jesús González Compositor", vistas: 5961 },
    },
    {
      h: "Otras tendencias actuales",
      html: `<p>Desde los años setenta conviven muchos caminos: el <b>espectralismo</b> francés (Grisey, Murail), que construye la armonía a partir del análisis de los armónicos del sonido; la <b>nueva simplicidad</b> y el <b>minimalismo sacro</b> de Arvo Pärt (estilo <i>tintinnabuli</i>), muy consonante y espiritual; el <b>poliestilismo</b>, que mezcla citas de épocas distintas; y la integración del jazz, el rock, la electrónica o el arte sonoro.</p>
      <p>Hoy se habla de <b>posmodernidad</b>: no hay un estilo dominante, sino diversidad.</p>`,
      svg: B.estrella("Músicas desde 1975", "Hoy", ["Espectralismo", "Pärt", "Poliestilismo", "Arte sonoro", "Electrónica", "Fusión"]),
    },
    {
      h: "La creación española",
      html: `<p>En España, la <b>Generación del 51</b> (Luis de Pablo, Cristóbal Halffter, Ramón Barce) introdujo el serialismo y las vanguardias pese al aislamiento de la posguerra. Después destacan <b>Tomás Marco</b>, <b>José Manuel López López</b> y <b>Mauricio Sotelo</b>, que une vanguardia y flamenco.</p>
      <p>Hoy la creación española es muy internacional y diversa, con compositoras como <b>María de Alvear</b>, <b>Elena Mendoza</b> o <b>Raquel García-Tomás</b>, y una fuerte presencia de la electroacústica y la ópera contemporánea.</p>`,
      svg: B.cronologia("Desde 1945", [["1948", "m. concreta"], ["1951", "Generación 51"], ["1952", "4'33''"], ["1960", "Treno"], ["1965", "Reich"], ["1977", "Pärt"]]),
    },
  ],
  figura: {
    titulo: "Caminos desde 1945",
    items: [["Control", "serialismo", "integral", "Boulez"], ["Azar", "aleatoriedad", "Cage", "forma abierta"], ["Tecnología", "concreta", "electrónica", "electroacústica"], ["Repetición", "minimalismo", "Reich", "Glass"]],
  },
  video: { id: "7bGU9NTJlIo", titulo: "4'33'' de John Cage explicado: la música del silencio", canal: "Calum Hill", vistas: 184484 },
  quiz: [
    ["El serialismo integral aplica la serie a…", ["solo las alturas", "todos los parámetros", "el texto", "la forma"], 1, "Altura, duración, intensidad, ataque."],
    ["4'33'' es una obra de…", ["Boulez", "Cage", "Reich", "Ligeti"], 1, "1952."],
    ["En la forma abierta…", ["todo está fijado", "el intérprete decide el orden", "no hay partitura", "solo hay electrónica"], 1, "Aleatoriedad."],
    ["La música concreta usa…", ["osciladores", "sonidos grabados manipulados", "orquesta", "coro"], 1, "Schaeffer, París."],
    ["Un clúster es…", ["una escala", "un racimo de notas muy próximas", "un ritmo", "un instrumento"], 1, "Típico de la música textural."],
    ["El Treno a las víctimas de Hiroshima es de…", ["Penderecki", "Glass", "Cage", "Stockhausen"], 0, "Música textural para cuerda."],
    ["El minimalismo se basa en…", ["la complejidad", "la repetición de pocos elementos", "el atonalismo", "el azar"], 1, "Cambios graduales."],
    ["El desfase es una técnica de…", ["Steve Reich", "Boulez", "Ligeti", "Berg"], 0, "Dos patrones que se desplazan."],
    ["El estilo tintinnabuli es de…", ["Arvo Pärt", "Cage", "Glass", "Schaeffer"], 0, "Minimalismo sacro."],
    ["La Generación del 51 es…", ["francesa", "española", "estadounidense", "alemana"], 1, "Luis de Pablo, Halffter."],
  ],
  examen: [
    ["Notas aisladas en registros extremos, cada una con un matiz, sin pulso. ¿Estilo probable?", ["Minimalismo", "Serialismo integral", "Impresionismo", "Romanticismo"], 1, "Puntillismo."],
    ["Escuchas un tren y una puerta grabados, cortados y en bucle. Es…", ["música concreta", "minimalismo", "serialismo", "neoclasicismo"], 0, "Schaeffer."],
    ["Un motivo de marimba se repite durante minutos con cambios mínimos. ¿Estilo?", ["Textural", "Minimalismo", "Aleatorio", "Expresionismo"], 1, "Reich, Glass."],
    ["Una masa de cuerdas en glissandos y clústeres agudos. Es música…", ["minimalista", "textural", "concreta", "tonal"], 1, "Penderecki, Ligeti."],
    ["En una música sin melodía, la forma se deduce de…", ["los temas", "los cambios de timbre, densidad y registro", "la tonalidad", "el texto"], 1, "Parámetros secundarios."],
  ],
  feynman: ["Diferencia entre serialismo integral y aleatoriedad", "Música concreta, electrónica y electroacústica", "Cómo analizar una obra sin melodía", "Las técnicas del minimalismo"],
  mapa: ["DESDE 1945", [["Control y azar", "serialismo · Cage"], ["Tecnología", "concreta · electrónica"], ["Texturas", "Ligeti · Penderecki"], ["Repetición y hoy", "minimalismo · Pärt · España"]]],
  tarjetas: [
    ["Serialismo integral", "Serie aplicada a todos los parámetros del sonido."],
    ["Aleatoriedad", "Intervención del azar o del intérprete en la obra."],
    ["Música concreta", "Música con sonidos grabados manipulados."],
    ["Música electrónica", "Música con sonidos generados por osciladores."],
    ["Clúster", "Racimo de notas a distancia muy pequeña."],
    ["Micropolifonía", "Muchas líneas tan próximas que forman una textura."],
    ["Minimalismo", "Repetición de pocos elementos con cambios graduales."],
    ["Desfase", "Desplazamiento progresivo entre dos patrones iguales."],
  ],
  ejemplos: [
    ["Analiza 4'33'' de Cage.", ["El intérprete no toca.", "Los sonidos son del entorno.", "Cada interpretación es distinta."], "Obra aleatoria y conceptual: el «contenido» es el ambiente; plantea qué es música."],
    ["Dos pianos tocan el mismo patrón; uno acelera y se desplaza poco a poco. Técnica y autor.", ["Mismo patrón, desplazamiento lento.", "Efecto hipnótico."], "Desfase, Steve Reich (Piano Phase)."],
    ["Describe la forma de una obra textural: 0:00 grave y denso, 2:10 agudo y transparente, 4:00 clúster fff.", ["Secciones por cambio de registro y densidad.", "Clímax final."], "Tres secciones: A grave densa, B aguda transparente, C clímax en clúster."],
  ],
  errores: [
    "Decir que la música contemporánea «no tiene forma».",
    "Confundir música concreta con música electrónica.",
    "Pensar que el minimalismo es música sencilla de interpretar.",
    "Analizar solo la melodía en obras que no la tienen.",
  ],
  ejercicios: {
    b: [
      ["Define serialismo integral y música aleatoria.", "Serialismo integral: serie aplicada a todos los parámetros. Aleatoria: parte de la obra queda al azar o al intérprete."],
      ["Diferencia música concreta y electrónica.", "Concreta: sonidos reales grabados y manipulados. Electrónica: sonidos generados por osciladores."],
      ["¿Qué es un clúster?", "Un acorde formado por notas contiguas a distancia de semitono o menos."],
      ["Cita tres compositores minimalistas.", "Steve Reich, Philip Glass y Terry Riley (o John Adams)."],
    ],
    m: [
      ["Explica por qué el serialismo integral y la aleatoriedad pueden sonar parecidos.", "Porque ambos producen sonidos sin melodía, sin pulso ni repeticiones reconocibles: el control total impide percibir patrones."],
      ["Describe dos técnicas del minimalismo.", "Proceso aditivo (añadir o quitar notas gradualmente) y desfase (dos patrones iguales que se desplazan)."],
      ["¿Qué parámetros analizarías en una obra textural?", "Timbre, densidad, registro, dinámica y tiempo, marcando los cambios con minutaje."],
      ["Nombra tres compositores españoles posteriores a 1950 y un rasgo de cada uno.", "Luis de Pablo (vanguardia de la Generación del 51), Cristóbal Halffter (serialismo y orquesta), Mauricio Sotelo (vanguardia y flamenco)."],
    ],
    a: [
      ["Escucha un fragmento de Treno y otro de Music for 18 Musicians y compáralos.", "Respuesta abierta: textura disonante frente a armonía consonante, ausencia de pulso frente a pulso constante, masas frente a patrones repetidos, efecto dramático frente a hipnótico."],
      ["Crea un breve plan de obra aleatoria con cinco secciones que el intérprete ordena.", "Respuesta abierta: cinco instrucciones gráficas o verbales, reglas de orden y duración, y explicación de qué queda al azar."],
    ],
  },
  glosario: [
    ["Puntillismo", "Textura de notas aisladas."],
    ["Piano preparado", "Piano con objetos entre las cuerdas."],
    ["Grafía", "Notación musical no convencional."],
    ["Oscilador", "Aparato que genera ondas sonoras."],
    ["Glissando", "Deslizamiento continuo entre alturas."],
    ["Técnicas extendidas", "Maneras no habituales de tocar un instrumento."],
    ["Espectralismo", "Música basada en el análisis de los armónicos."],
    ["Tintinnabuli", "Estilo de Arvo Pärt basado en tríadas y escalas."],
    ["Poliestilismo", "Mezcla de estilos y citas en una obra."],
  ],
  situacion: {
    titulo: "Paisaje sonoro del instituto",
    reto: "Crear una obra de música concreta con sonidos grabados en el centro.",
    pasos: [
      "Grabad con el móvil diez sonidos del instituto.",
      "Editadlos con un programa gratuito: cortes, bucles, velocidad y reverso.",
      "Organizadlos en tres secciones con distinta densidad.",
      "Presentad la obra con un esquema formal y una ficha de técnicas.",
    ],
    producto: "Una pieza de música concreta de dos minutos.",
    evaluacion: [
      "Usa al menos tres técnicas de manipulación.",
      "La forma es reconocible por cambios de densidad.",
      "El esquema describe bien la obra.",
      "Relaciona el trabajo con Schaeffer.",
    ],
  },
  familias: [
    "Haced juntos la experiencia de 4'33'': escuchad el silencio de casa.",
    "Escuchad Spiegel im Spiegel de Arvo Pärt y comentad su calma.",
    "Ved la escena de 2001 con música de Ligeti.",
    "Grabad sonidos cotidianos y jugad a reconocerlos.",
  ],
  saberes: "Análisis Musical II: la música desde 1945: serialismo integral, aleatoriedad y forma abierta, nuevas grafías; música concreta, electrónica y electroacústica; música textural (clúster, micropolifonía, técnicas extendidas); minimalismo (proceso aditivo, desfase); tendencias actuales y creación española contemporánea.",
  ideas: [
    "Interpretar en clase una partitura gráfica inventada.",
    "Hacer Clapping Music de Reich en parejas.",
    "Crear clústeres con la voz o el piano.",
    "Analizar una obra con una tabla de parámetros sin melodía.",
  ],
  fuentes: [
    { t: "Música concreta, Wikipedia en español", url: "https://es.wikipedia.org/wiki/M%C3%BAsica_concreta" },
    { t: "Minimalismo (música), Wikipedia en español", url: "https://es.wikipedia.org/wiki/M%C3%BAsica_minimalista" },
  ],
});
