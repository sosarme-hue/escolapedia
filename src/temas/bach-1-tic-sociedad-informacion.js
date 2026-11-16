// Tecnologías de la Información y la Comunicación I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L38");

// Línea del tiempo de la informática y de internet.
const crono = () => {
  const hitos = [["1946", "ENIAC"], ["1969", "ARPANET"], ["1981", "PC"], ["1991", "web"], ["2007", "smartphone"], ["2022", "IA generativa"]];
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: ENIAC 1946, ARPANET 1969, PC 1981, web 1991, smartphone 2007, IA generativa 2022">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    ${B.tx(130, 20, "Hitos de la era digital", { fs: 13, maxW: 236, bold: true, font: B.D })}
    <path d="M16 96 H 244" stroke="var(--ink)" stroke-width="2.5"/>
    ${hitos.map(([a, t], i) => { const x = 26 + i * 41.6, arriba = i % 2 === 0, c = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"][i % 4];
      return `<circle cx="${x}" cy="96" r="6" fill="${c}"/><path d="M${x} ${arriba ? 90 : 102} V ${arriba ? 66 : 126}" stroke="${c}" stroke-width="2"/>
      ${B.tx(x, arriba ? 46 : 144, a, { fs: 11, maxW: 40, bold: true, color: c })}${B.tx(x, arriba ? 60 : 158, t, { fs: 9.5, maxW: 44 })}`; }).join("")}
  </svg>`;
};

// Pirámide datos → información → conocimiento → sabiduría.
const piramide = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Pirámide: datos en la base, información, conocimiento y sabiduría en la cima">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${B.tx(130, 20, "De los datos al conocimiento", { fs: 13, maxW: 236, bold: true, font: B.D })}
  <path d="M130 32 L 160 64 H 100 Z" fill="var(--sun)" opacity=".85"/>${B.tx(130, 60, "Sabiduría", { fs: 8.5, maxW: 40, bold: true, color: "#fff" })}
  <path d="M98 68 H 162 L 192 102 H 68 Z" fill="var(--leaf)" opacity=".85"/>${B.tx(130, 90, "Conocimiento", { fs: 10.5, maxW: 100, bold: true, color: "#fff" })}
  <path d="M66 106 H 194 L 222 138 H 38 Z" fill="var(--red)" opacity=".85"/>${B.tx(130, 126, "Información: datos con contexto", { fs: 10, maxW: 160, bold: true, color: "#fff" })}
  <path d="M36 142 H 224 L 248 170 H 12 Z" fill="var(--pen)" opacity=".85"/>${B.tx(130, 161, "Datos: 21, «Lleida», 08:15", { fs: 10, maxW: 200, bold: true, color: "#fff" })}
</svg>`;

module.exports = B.tema({
  titulo: "La sociedad de la información",
  minutos: 110,
  objetivos: [
    "Explicar qué es la sociedad de la información y diferenciar dato, información y conocimiento",
    "Situar en el tiempo los grandes hitos de la informática, de internet y de la web",
    "Analizar el impacto de las TIC en la economía, el trabajo, la administración, la comunicación y la educación",
    "Valorar con espíritu crítico la brecha digital, el big data, la inteligencia artificial y la huella ambiental de lo digital",
  ],
  claves: ["sociedad de la información", "dato", "información", "conocimiento", "TIC", "internet", "World Wide Web", "teletrabajo", "administración electrónica", "brecha digital", "big data", "competencia digital"],
  pregunta: {
    texto: "Cada minuto se envían en el mundo cientos de millones de mensajes y se suben cientos de horas de vídeo. ¿Significa eso que estamos mejor informados que nuestros abuelos?",
    respuesta: "No necesariamente. Hoy tenemos acceso a <b>muchísimos más datos</b>, pero los datos solo se convierten en <b>información</b> cuando tienen contexto y en <b>conocimiento</b> cuando alguien los entiende, los contrasta y los usa. La sociedad de la información nos obliga a desarrollar una nueva <mark>competencia digital</mark>: buscar, filtrar, evaluar y crear contenidos con criterio.",
  },
  lectura: {
    titulo: "Un día cualquiera, lleno de bits",
    html: `<p>Son las siete y media. Lucía apaga la alarma del móvil, consulta el tiempo y mira si el autobús llega con retraso: una aplicación sabe en tiempo real dónde está cada vehículo gracias a un receptor GPS y a una conexión de datos. En el instituto entrega una tarea en la plataforma del centro, busca fuentes para un trabajo de Historia y hace una videollamada con un compañero que está en casa enfermo.</p>
    <p>Por la tarde acompaña a su abuela al centro de salud. La cita la pidieron por internet, la receta es electrónica y el médico consulta en pantalla los análisis del mes pasado. De vuelta, la abuela le pregunta cómo se paga con el reloj: ella nunca ha tenido un ordenador y se siente perdida con tantas contraseñas.</p>
    <p>Esa noche, Lucía piensa en todo lo que ha hecho «a través de» una pantalla y en la cantidad de datos sobre ella que se han guardado en servidores repartidos por el mundo. Vivimos en la <b>sociedad de la información</b>: un mundo en el que crear, compartir y usar información es la actividad central de la economía, la política y la vida diaria. Entenderla es el primer paso para participar en ella con libertad y sentido crítico.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "De la sociedad industrial a la sociedad de la información",
      html: `<p>Durante los siglos XIX y XX, la riqueza de un país dependía sobre todo de sus fábricas, de la energía y de las materias primas: era la <b>sociedad industrial</b>. Desde finales del siglo XX, el recurso más valioso pasa a ser la <b>información</b> y la capacidad de procesarla. Llamamos <mark>sociedad de la información</mark> a aquella en la que la creación, distribución y manipulación de información son actividades económicas, culturales y políticas centrales, gracias a las <b>tecnologías de la información y la comunicación</b> (TIC).</p>
      <p>Las TIC reúnen tres grandes familias de tecnologías que antes iban por separado: la <b>informática</b> (procesar y almacenar datos), las <b>telecomunicaciones</b> (transmitirlos a distancia) y los <b>medios audiovisuales</b> (texto, imagen, sonido y vídeo). Su fusión en dispositivos digitales conectados es lo que se conoce como <b>convergencia tecnológica</b>: hoy un mismo móvil es teléfono, cámara, televisor, mapa, cartera y biblioteca.</p>
      <p>Algunos autores hablan ya de <b>sociedad del conocimiento</b>, para subrayar que lo importante no es acumular datos, sino saber transformarlos en aprendizaje e innovación. Sus rasgos principales son la <b>globalización</b> (las distancias apenas importan), la <b>inmediatez</b> (la información circula en tiempo real), la <b>abundancia</b> (hay más información de la que podemos procesar) y la <b>interactividad</b> (cualquiera puede ser emisor, no solo receptor).</p>`,
      svg: B.comparar("Sociedad industrial frente a sociedad de la información", ["Industrial", ["fábricas y energía", "trabajo manual", "medios de masas", "producción en serie"]], ["Información", ["datos y redes", "trabajo del conocimiento", "todos emiten", "servicios digitales"]]),
    },
    {
      h: "Datos, información y conocimiento",
      html: `<p>En el lenguaje cotidiano usamos estas palabras como sinónimos, pero en informática conviene distinguirlas:</p>
      <ul><li>Un <b>dato</b> es una representación simbólica (un número, una palabra, una medida) sin contexto: «21», «Lleida», «08:15».</li>
      <li>La <b>información</b> es un conjunto de datos organizados y con contexto que reduce la incertidumbre de quien la recibe: «En Lleida hay 21 °C a las 08:15».</li>
      <li>El <b>conocimiento</b> aparece cuando una persona interpreta la información, la relaciona con lo que ya sabe y puede usarla para decidir: «Hoy no necesito abrigo».</li></ul>
      <p>Algunos modelos añaden un último escalón, la <b>sabiduría</b>, que sería aplicar el conocimiento con buen juicio y valores. Los ordenadores son extraordinarios procesando datos y generando información, pero el conocimiento sigue requiriendo comprensión y espíritu crítico.</p>
      <p>Para que una información sea útil debe cumplir ciertas <b>cualidades</b>: ser <b>veraz</b> (corresponder a la realidad), <b>relevante</b> (servir para lo que se necesita), <b>actual</b>, <b>completa</b> y <b>accesible</b>. En un entorno de sobreabundancia, la llamada <b>infoxicación</b>, la habilidad clave ya no es encontrar información, sino filtrarla y evaluar su calidad: quién la publica, con qué intención, en qué fecha y con qué pruebas.</p>`,
      svg: piramide(),
    },
    {
      h: "Breve historia de la informática",
      html: `<p>La necesidad de calcular es muy antigua: el <b>ábaco</b>, la máquina de sumar de Pascal (1642) o el telar de Jacquard (1804), que usaba tarjetas perforadas, son antecedentes de los ordenadores. Charles Babbage diseñó en el siglo XIX la <b>máquina analítica</b>, y Ada Lovelace escribió para ella el primer algoritmo pensado para una máquina.</p>
      <p>La informática moderna avanza por <b>generaciones</b>, según la tecnología de sus componentes:</p>
      <ul><li><b>Primera</b> (1940-1956): válvulas de vacío. El ENIAC (1946) pesaba 27 toneladas y ocupaba una sala entera.</li>
      <li><b>Segunda</b> (1956-1964): transistores, más pequeños, fiables y baratos.</li>
      <li><b>Tercera</b> (1964-1971): circuitos integrados, muchos transistores en un chip.</li>
      <li><b>Cuarta</b> (desde 1971): el <b>microprocesador</b> reúne toda la unidad central en un chip. Llegan los ordenadores personales (Apple II en 1977, IBM PC en 1981).</li></ul>
      <p>Desde entonces la evolución ha seguido aproximadamente la <b>ley de Moore</b>: el número de transistores de un chip se duplica cada dos años. Por eso un teléfono actual es millones de veces más potente que los ordenadores que llevaron al ser humano a la Luna. Hoy se investiga en <b>computación cuántica</b>, que usa cúbits capaces de representar varios estados a la vez para resolver ciertos problemas imposibles para los ordenadores clásicos.</p>`,
      svg: crono(),
    },
    {
      h: "Internet y la World Wide Web",
      html: `<p><b>Internet</b> es una red mundial formada por millones de redes interconectadas que se comunican con un mismo conjunto de reglas, los protocolos <b>TCP/IP</b>. Nació en 1969 como <b>ARPANET</b>, un proyecto del Departamento de Defensa de Estados Unidos que conectó cuatro universidades. Su diseño era descentralizado: si un nodo fallaba, los datos buscaban otro camino. En 1983 adoptó TCP/IP y en los años noventa se abrió al uso comercial.</p>
      <p>Hay que distinguir internet de la <b>World Wide Web</b>, que es solo uno de sus servicios. La web la inventó Tim Berners-Lee en el CERN de Ginebra en 1989-1991: un sistema de documentos enlazados mediante <b>hipertexto</b>, escritos en HTML, identificados por una dirección (URL) y transmitidos con el protocolo HTTP. El CERN la liberó sin patentes, y eso explica su expansión.</p>
      <p>La web ha evolucionado en etapas: la <b>web 1.0</b>, de páginas estáticas que solo se leían; la <b>web 2.0</b> o web social (desde 2004), en la que los usuarios crean contenidos en blogs, wikis y redes sociales; y la <b>web semántica</b>, en la que los datos se describen para que las máquinas puedan entender su significado. Otros servicios de internet son el correo electrónico, la transferencia de archivos, la mensajería instantánea, la voz sobre IP o el <i>streaming</i>.</p>`,
      svg: B.capas("Etapas de la web", [["Web 1.0", "leer páginas"], ["Web 2.0", "crear y compartir"], ["Web semántica", "datos con significado"], ["Web móvil e IA", "siempre conectados"]], { t: "Evolución de la web" }),
      video: { id: "i4RE6dBAjH4", titulo: "Historia de internet", canal: "simonfilm", vistas: 1100070 },
    },
    {
      h: "Las TIC en la economía y el trabajo",
      html: `<p>Las TIC han transformado todos los sectores económicos. Las empresas gestionan su inventario, sus clientes y su contabilidad con programas integrados (ERP y CRM), venden en línea mediante el <b>comercio electrónico</b> y analizan los datos de sus clientes para tomar decisiones. Han surgido nuevos modelos de negocio: plataformas que ponen en contacto a oferentes y demandantes (transporte, alojamiento, reparto), servicios por suscripción y la <b>economía de los datos</b>, en la que la información sobre los usuarios es la principal fuente de ingresos.</p>
      <p>En el mundo laboral, la <b>automatización</b> sustituye tareas repetitivas, tanto manuales como administrativas, y a la vez crea nuevas profesiones: analista de datos, desarrollador de aplicaciones, especialista en ciberseguridad, gestor de comunidades digitales. Por eso se habla de la necesidad del <b>aprendizaje a lo largo de la vida</b>: las competencias digitales caducan rápido y hay que actualizarlas.</p>
      <p>El <b>teletrabajo</b> permite trabajar fuera de la oficina gracias a la nube y a las videoconferencias. Tiene ventajas (ahorro de desplazamientos, conciliación, empleo en zonas rurales) e inconvenientes (aislamiento, dificultad para desconectar). En España, la ley reconoce el <b>derecho a la desconexión digital</b>: fuera del horario laboral, nadie está obligado a responder mensajes de trabajo. La <b>economía de plataformas</b> plantea además el debate sobre las condiciones laborales de quienes trabajan a través de aplicaciones.</p>`,
      svg: B.cajas("Impacto de las TIC en la economía y el trabajo", [["Comercio electrónico", "vender en línea|24 horas"], ["Automatización", "tareas repetitivas|nuevas profesiones"], ["Teletrabajo", "nube y videollamada|desconexión digital"], ["Plataformas", "economía de datos|nuevos debates"]], { t: "TIC y trabajo" }),
    },
    {
      h: "Administración electrónica y servicios públicos",
      html: `<p>La <b>administración electrónica</b> permite a la ciudadanía relacionarse con las instituciones por internet: presentar la declaración de la renta, pedir cita médica, matricularse en un centro educativo o solicitar una beca sin desplazarse ni hacer colas. En España, la Ley 39/2015 reconoce el derecho a relacionarse electrónicamente con las administraciones y obliga a las empresas a hacerlo.</p>
      <p>Para que esos trámites sean seguros hace falta <b>identificarse</b> de forma fiable. Los principales sistemas son:</p>
      <ul><li>El <b>certificado digital</b>, un archivo emitido por una autoridad de certificación (como la FNMT) que vincula a una persona con un par de claves criptográficas y permite la <b>firma electrónica</b>, con la misma validez legal que la manuscrita.</li>
      <li>El <b>DNI electrónico</b>, que incorpora un chip con certificados.</li>
      <li><b>Cl@ve</b>, un sistema de identificación con usuario, contraseña y un código que llega al móvil.</li></ul>
      <p>Las administraciones también publican cada vez más <b>datos abiertos</b> (<i>open data</i>): información pública en formatos reutilizables (presupuestos, calidad del aire, transporte) que cualquiera puede analizar o usar para crear aplicaciones. Es una herramienta de <b>transparencia</b>. En sanidad destacan la historia clínica digital y la receta electrónica; en educación, las plataformas de gestión y las aulas virtuales. El reto es que ningún ciudadano quede excluido de un servicio por no saber usarlo o no tener conexión.</p>`,
      svg: B.flujo("Pasos de un trámite electrónico", ["Entrar en la sede electrónica", "Identificarse: certificado, DNIe o Cl@ve", "Rellenar el formulario", "Firmar electrónicamente", "Recibir el justificante con registro"], { t: "Un trámite en línea" }),
    },
    {
      h: "Comunicación, medios y redes sociales",
      html: `<p>Durante el siglo XX la comunicación de masas era <b>unidireccional</b>: unos pocos emisores (prensa, radio, televisión) y millones de receptores. Internet ha creado un modelo <b>multidireccional</b> en el que cualquiera puede publicar y llegar a una audiencia mundial. Esto ha democratizado la palabra, pero también ha cambiado el negocio de los medios y la forma en que nos informamos.</p>
      <p>Las <b>redes sociales</b> son plataformas en las que los usuarios crean un perfil, se conectan con otros y comparten contenidos. Sus contenidos se ordenan mediante <b>algoritmos de recomendación</b> que priorizan lo que más atención genera. Esto tiene consecuencias:</p>
      <ul><li><b>Burbujas de filtro</b> y <b>cámaras de eco</b>: vemos sobre todo opiniones parecidas a las nuestras.</li>
      <li><b>Desinformación</b>: los bulos se difunden más rápido que las desmentidas porque suelen ser más llamativos y emocionales.</li>
      <li><b>Economía de la atención</b>: el diseño de las aplicaciones (notificaciones, desplazamiento infinito, recompensas) busca que pasemos en ellas el máximo tiempo posible.</li></ul>
      <p>Para informarse bien conviene <b>contrastar</b> varias fuentes, comprobar la fecha y el autor, desconfiar de los titulares que buscan indignación y usar servicios de verificación de datos (<i>fact-checking</i>). Ser emisor también implica responsabilidad: antes de compartir hay que pensar si es cierto, si es respetuoso y si puede dañar a alguien.</p>`,
      svg: B.comparar("Comunicación de masas frente a comunicación en red", ["Medios de masas", ["pocos emisores", "unidireccional", "audiencia pasiva", "filtro editorial"]], ["En red", ["todos emiten", "multidireccional", "interacción", "algoritmos"]]),
    },
    {
      h: "Educación y aprendizaje en red",
      html: `<p>Las TIC han ampliado dónde, cuándo y cómo se aprende. Las <b>aulas virtuales</b> (Moodle, Google Classroom, Teams) permiten compartir materiales, entregar tareas y comunicarse fuera del horario escolar. Los <b>cursos en línea masivos y abiertos</b> (MOOC) de universidades de todo el mundo, las enciclopedias colaborativas, los tutoriales en vídeo y los simuladores ponen a disposición de cualquiera recursos que antes estaban en pocas bibliotecas.</p>
      <p>Surgen nuevas metodologías: el <b>aula invertida</b> (se estudia la teoría en casa con vídeos y en clase se hacen actividades), el aprendizaje basado en proyectos con herramientas colaborativas, la <b>gamificación</b> o el uso de la realidad aumentada y virtual. Los <b>recursos educativos abiertos</b>, con licencias que permiten reutilizarlos y adaptarlos, facilitan que el conocimiento circule.</p>
      <p>Cada persona construye su <b>entorno personal de aprendizaje</b> (PLE): el conjunto de herramientas, fuentes y personas con las que aprende de forma continua. Para que sea eficaz necesita las competencias que recoge el marco europeo <b>DigComp</b>: buscar y evaluar información, comunicarse y colaborar, crear contenidos, protegerse y resolver problemas técnicos. La tecnología por sí sola no garantiza el aprendizaje: requiere atención, esfuerzo y criterio, y los estudios muestran que leer y estudiar con notificaciones constantes reduce la comprensión.</p>`,
      svg: B.estrella("Entorno personal de aprendizaje", "Mi PLE", ["Aula virtual", "MOOC", "Vídeos", "Comunidades", "Apuntes", "Simuladores"]),
    },
    {
      h: "La brecha digital",
      html: `<p>La <mark>brecha digital</mark> es la desigualdad entre las personas, los territorios o los países que pueden acceder a las TIC y usarlas con provecho y los que no. No es una sola brecha, sino varias:</p>
      <ul><li><b>Brecha de acceso</b>: no disponer de dispositivos o de conexión de calidad. Afecta sobre todo a zonas rurales y a países con menos recursos: aproximadamente un tercio de la humanidad sigue sin usar internet.</li>
      <li><b>Brecha de uso</b> o de competencias: tener acceso pero no saber aprovecharlo, por ejemplo para hacer trámites o detectar un fraude.</li>
      <li><b>Brecha de calidad de uso</b>: usar la tecnología solo para el ocio y no para aprender, trabajar o participar.</li></ul>
      <p>La brecha se relaciona con la <b>edad</b> (personas mayores), el <b>nivel de renta y de estudios</b>, el <b>territorio</b>, la <b>discapacidad</b> y el <b>género</b>: las mujeres están infrarrepresentadas en las profesiones tecnológicas, lo que se llama brecha digital de género. Durante el confinamiento de 2020 quedó claro que sin conexión no se podía seguir las clases.</p>
      <p>Para reducirla se despliegan redes de banda ancha en zonas rurales, se ofrecen dispositivos y cursos de alfabetización digital, se diseñan servicios <b>accesibles</b> y se mantiene una atención presencial para quien la necesite. También ayudan iniciativas en las que jóvenes enseñan a personas mayores, como hace Lucía con su abuela en la lectura inicial.</p>`,
      svg: B.capas("Niveles de la brecha digital", [["Acceso", "dispositivo y conexión"], ["Uso", "competencias"], ["Calidad", "aprender y participar"]], { t: "Tres brechas digitales" }),
      video: { id: "mtTOB4tFRSs", titulo: "La brecha digital en minuto y medio", canal: "Carlos Loncán Galindo", vistas: 96837 },
    },
    {
      h: "Big data, la nube e inteligencia artificial",
      html: `<p>Cada interacción digital deja datos: compras, búsquedas, ubicaciones, lecturas de sensores. El <b>big data</b> es el conjunto de técnicas para almacenar y analizar volúmenes de datos tan grandes que no caben en los sistemas tradicionales. Se describe con las «uves»: <b>volumen</b> (enormes cantidades), <b>velocidad</b> (se generan y procesan en tiempo real), <b>variedad</b> (textos, imágenes, señales), <b>veracidad</b> (calidad de los datos) y <b>valor</b> (utilidad que se obtiene).</p>
      <p>Esos datos se guardan y procesan en la <b>computación en la nube</b>: en lugar de tener servidores propios, se usan los de grandes centros de datos a través de internet, pagando por uso. Hay tres modelos: infraestructura como servicio (IaaS), plataforma como servicio (PaaS) y software como servicio (SaaS), como el correo web o los ofimáticos en línea.</p>
      <p>La <b>inteligencia artificial</b> (IA) usa esos datos para entrenar modelos que reconocen patrones, traducen, recomiendan o generan textos e imágenes. Sus aplicaciones son enormes: diagnóstico médico, predicción meteorológica, accesibilidad para personas con discapacidad. Pero plantea retos: <b>sesgos</b> aprendidos de datos injustos, <b>falta de transparencia</b> sobre cómo decide, <b>privacidad</b>, autoría y la posibilidad de crear contenidos falsos muy realistas (<i>deepfakes</i>). La Unión Europea aprobó en 2024 el <b>Reglamento de IA</b>, que clasifica los sistemas según su riesgo.</p>`,
      svg: B.estrella("Las uves del big data", "Big data", ["Volumen", "Velocidad", "Variedad", "Veracidad", "Valor"]),
    },
    {
      h: "La huella ambiental de lo digital",
      html: `<p>Lo digital parece inmaterial, pero tiene un impacto físico considerable. Los <b>centros de datos</b> consumen grandes cantidades de electricidad para funcionar y refrigerarse, y las redes y los dispositivos también gastan energía. Se estima que el sector digital es responsable de alrededor del 2 al 4 % de las emisiones mundiales de gases de efecto invernadero, una cifra comparable a la de la aviación, y el entrenamiento de grandes modelos de IA la está haciendo crecer.</p>
      <p>Además, fabricar un dispositivo exige extraer minerales como el litio, el cobalto, el coltán o las tierras raras, a veces en condiciones sociales y ambientales muy duras. La mayor parte del impacto de un móvil se produce en su <b>fabricación</b>, no en su uso. Al final de su vida útil se convierten en <b>residuos de aparatos eléctricos y electrónicos</b> (RAEE): decenas de millones de toneladas al año en el mundo, de las que solo se recicla correctamente una pequeña parte.</p>
      <p>La <b>sostenibilidad digital</b> propone alargar la vida de los dispositivos (repararlos, actualizarlos, comprarlos reacondicionados), llevarlos a puntos limpios, elegir servicios alimentados con renovables, evitar almacenar archivos innecesarios en la nube y bajar la calidad del vídeo cuando no hace falta. La Unión Europea impulsa el <b>derecho a reparar</b> y el cargador universal USB-C. Las TIC también ayudan al medio ambiente: redes eléctricas inteligentes, agricultura de precisión o teletrabajo que evita desplazamientos.</p>`,
      svg: B.ciclo("Ciclo de vida de un dispositivo digital", "Móvil", ["Extracción", "Fabricación", "Uso", "Reparación", "Reciclaje"]),
    },
    {
      h: "Ciudadanía y competencia digital",
      html: `<p>Vivir en la sociedad de la información exige ser un <b>ciudadano digital</b>: alguien que usa la tecnología de forma segura, crítica, responsable y creativa, y que conoce sus derechos y deberes en la red. En España, la <b>Carta de Derechos Digitales</b> (2021) recoge, entre otros, el derecho a la privacidad, a la protección de datos, al olvido en internet, a la desconexión digital, a la accesibilidad y a no ser discriminado por algoritmos.</p>
      <p>El marco europeo <b>DigComp</b> define la <b>competencia digital</b> en cinco áreas:</p>
      <ul><li><b>Búsqueda y gestión de la información</b>: encontrar, evaluar y organizar datos y contenidos.</li>
      <li><b>Comunicación y colaboración</b>: interactuar, compartir y participar con respeto (netiqueta).</li>
      <li><b>Creación de contenidos</b>: producir textos, imágenes, vídeos o programas respetando las licencias.</li>
      <li><b>Seguridad</b>: proteger dispositivos, datos personales, la salud y el medio ambiente.</li>
      <li><b>Resolución de problemas</b>: identificar necesidades técnicas y elegir herramientas.</li></ul>
      <p>Esta materia recorre todas esas áreas: entenderás cómo funcionan el ordenador y las redes, crearás documentos, imágenes, webs y programas, y aprenderás a protegerte. La finalidad no es solo manejar aplicaciones, que cambian cada pocos años, sino comprender los principios que hay detrás para poder adaptarse a cualquier tecnología futura y decidir cómo queremos que sea la sociedad digital.</p>`,
      svg: B.cajas("Áreas de la competencia digital según DigComp", [["Información", "buscar y evaluar"], ["Comunicación", "colaborar"], ["Creación", "contenidos"], ["Seguridad", "protegerse"], ["Problemas", "resolver"], ["Ciudadanía", "derechos y deberes"]], { t: "Competencia digital", cols: 3 }),
    },
  ],
  figura: {
    titulo: "Ideas clave de la sociedad de la información",
    items: [["Información", "dato → saber", "contexto", "y criterio"], ["Internet", "1969 · 1991", "red de redes", "y la web"], ["Impacto", "trabajo · e-adm.", "comunicación", "y educación"], ["Retos", "brecha · IA", "privacidad", "y sostenibilidad"]],
  },
  video: { id: "CzYzVXxbAoA", titulo: "Sociedad de la Información", canal: "Alvaro Castillo", vistas: 275872 },
  quiz: [
    ["La sociedad de la información se caracteriza porque…", ["la industria pesada es el motor económico", "crear y usar información es una actividad central", "no existen medios de comunicación", "solo los gobiernos usan ordenadores"], 1, "La información y su procesamiento son el recurso clave."],
    ["Las TIC resultan de la convergencia de…", ["agricultura, industria y servicios", "informática, telecomunicaciones y audiovisual", "física, química y biología", "radio, prensa y cine"], 1, "Procesar, transmitir y representar información."],
    ["«21» sin más contexto es…", ["conocimiento", "un dato", "sabiduría", "información"], 1, "Un dato no tiene significado por sí solo."],
    ["La infoxicación es…", ["un virus informático", "el exceso de información que dificulta procesarla", "una intoxicación alimentaria", "un tipo de red"], 1, "Hay más información de la que podemos filtrar."],
    ["El ENIAC funcionaba con…", ["transistores", "válvulas de vacío", "microprocesadores", "cúbits"], 1, "Es de la primera generación."],
    ["El microprocesador caracteriza a la generación…", ["primera", "segunda", "tercera", "cuarta"], 3, "Desde 1971 toda la CPU cabe en un chip."],
    ["La ley de Moore dice que…", ["la velocidad de internet se duplica cada mes", "los transistores de un chip se duplican cada dos años aprox.", "los ordenadores pesan menos cada año", "la memoria nunca se llena"], 1, "Es una observación empírica de 1965, revisada en 1975."],
    ["ARPANET, antecedente de internet, nació en…", ["1946", "1969", "1991", "2004"], 1, "Conectó cuatro universidades estadounidenses."],
    ["La World Wide Web la creó…", ["Bill Gates", "Tim Berners-Lee en el CERN", "Steve Jobs", "Ada Lovelace"], 1, "Entre 1989 y 1991."],
    ["La web 2.0 se caracteriza por…", ["páginas solo de lectura", "contenidos creados por los usuarios", "no usar HTML", "no tener enlaces"], 1, "Blogs, wikis y redes sociales."],
    ["El derecho a la desconexión digital protege…", ["a las empresas de los hackers", "al trabajador de responder fuera de su horario", "a los menores de las redes", "los datos bancarios"], 1, "Está reconocido en la legislación laboral española."],
    ["¿Qué permite firmar electrónicamente un documento con validez legal?", ["Un correo electrónico", "Un certificado digital", "Una captura de pantalla", "Un PDF"], 1, "Vincula identidad y claves criptográficas."],
    ["Los datos abiertos son…", ["datos robados", "información pública en formatos reutilizables", "contraseñas sin cifrar", "datos de redes sociales"], 1, "Fomentan la transparencia y la innovación."],
    ["Una burbuja de filtro se produce cuando…", ["el wifi falla", "los algoritmos nos muestran solo contenidos afines", "se borra el historial", "se comparte un archivo"], 1, "Reduce la diversidad de opiniones que vemos."],
    ["Un MOOC es…", ["un virus", "un curso en línea masivo y abierto", "un tipo de cable", "un buscador"], 1, "Massive Open Online Course."],
    ["Tener conexión pero no saber hacer un trámite en línea es brecha de…", ["acceso", "uso o competencias", "género", "velocidad"], 1, "El acceso no basta."],
    ["¿Cuál NO es una de las «uves» del big data?", ["Volumen", "Velocidad", "Variedad", "Visibilidad"], 3, "Volumen, velocidad, variedad, veracidad y valor."],
    ["El correo web es un ejemplo de…", ["IaaS", "PaaS", "SaaS", "hardware"], 2, "Software como servicio."],
    ["La mayor parte del impacto ambiental de un móvil se produce…", ["al cargarlo", "en su fabricación", "al hacer fotos", "al apagarlo"], 1, "Extracción de minerales y fabricación."],
    ["DigComp es…", ["una red social", "el marco europeo de competencia digital", "un lenguaje de programación", "una ley española"], 1, "Define cinco áreas de competencia."],
  ],
  examen: [
    ["Ordena de menor a mayor elaboración: conocimiento, dato, información.", ["dato, información, conocimiento", "información, dato, conocimiento", "conocimiento, dato, información", "dato, conocimiento, información"], 0, "El dato se contextualiza (información) y se interpreta (conocimiento)."],
    ["Si un chip tenía 1 millón de transistores en 2000 y se cumple la ley de Moore, en 2010 tendría unos…", ["2 millones", "10 millones", "32 millones", "1000 millones"], 2, "10 años = 5 duplicaciones: 2⁵ = 32."],
    ["¿Qué afirmación es correcta?", ["Internet y la web son lo mismo", "La web es un servicio que funciona sobre internet", "Internet nació en 1991", "La web usa solo correo"], 1, "Internet es la red; la web, uno de sus servicios."],
    ["Una empresa de reparto que asigna pedidos con una app a trabajadores autónomos es un ejemplo de…", ["sociedad industrial", "economía de plataformas", "administración electrónica", "brecha de acceso"], 1, "La plataforma intermedia entre oferta y demanda."],
    ["Un pueblo sin cobertura de banda ancha sufre brecha…", ["de acceso", "de uso", "de calidad", "de género"], 0, "Falta la infraestructura."],
    ["¿Qué medida reduce la huella ambiental digital?", ["Cambiar de móvil cada año", "Reparar y alargar la vida de los dispositivos", "Guardar todo en la nube por duplicado", "Ver vídeo siempre en máxima calidad"], 1, "La fabricación es la fase más contaminante."],
    ["Un sistema de IA que concede préstamos y rechaza más a un grupo por datos históricos injustos presenta…", ["un sesgo algorítmico", "una brecha de acceso", "un error de sintaxis", "una burbuja de filtro"], 0, "Reproduce discriminaciones de los datos."],
    ["¿Qué área de DigComp trabaja quien comprueba la fecha y el autor de una noticia?", ["Creación de contenidos", "Búsqueda y evaluación de la información", "Resolución de problemas", "Seguridad"], 1, "Evaluar la fiabilidad de las fuentes."],
  ],
  feynman: ["Qué diferencia hay entre dato, información y conocimiento", "Qué son las TIC y qué es la convergencia tecnológica", "Cómo nació internet y en qué se diferencia de la web", "Qué tipos de brecha digital existen y cómo se pueden reducir", "Qué es el big data y qué riesgos tiene la inteligencia artificial", "Por qué lo digital tiene impacto ambiental"],
  mapa: ["SOCIEDAD DE LA INFORMACIÓN", [["Conceptos", "dato · información · TIC"], ["Historia", "generaciones · internet · web"], ["Impacto", "trabajo · e-administración · redes"], ["Retos", "brecha · big data · IA · sostenibilidad"]]],
  tarjetas: [
    ["Sociedad de la información", "Sociedad en la que crear, difundir y usar información es la actividad central, gracias a las TIC."],
    ["TIC", "Convergencia de informática, telecomunicaciones y medios audiovisuales."],
    ["Dato, información, conocimiento", "Símbolo sin contexto → datos organizados con contexto → información interpretada y aplicada."],
    ["Generaciones de ordenadores", "Válvulas → transistores → circuitos integrados → microprocesador."],
    ["Ley de Moore", "Los transistores de un chip se duplican aproximadamente cada dos años."],
    ["Internet", "Red de redes con protocolos TCP/IP; nace como ARPANET en 1969."],
    ["World Wide Web", "Servicio de documentos con hipertexto (HTML, URL, HTTP); Berners-Lee, CERN, 1991."],
    ["Administración electrónica", "Trámites en línea con certificado digital, DNIe o Cl@ve."],
    ["Burbuja de filtro", "Los algoritmos nos muestran solo lo que se parece a nuestros gustos."],
    ["Brecha digital", "Desigualdad de acceso, uso y calidad de uso de las TIC."],
    ["Big data", "Volumen, velocidad, variedad, veracidad y valor."],
    ["DigComp", "Información, comunicación, creación, seguridad y resolución de problemas."],
  ],
  ejemplos: [
    ["Clasifica como dato, información o conocimiento: a) «37,8»; b) «Mi temperatura es 37,8 °C»; c) «Tengo fiebre, así que hoy no iré a entrenar».", ["a) Es un número aislado: no sabemos qué mide.", "b) Los datos tienen contexto (qué, de quién, unidad): es información.", "c) Se interpreta la información con lo que ya se sabe (más de 37,5 °C es fiebre) y se toma una decisión: es conocimiento."], "a) dato; b) información; c) conocimiento."],
    ["Un procesador de 1971 tenía unos 2300 transistores. Estima cuántos tendría uno de 2021 si se hubiera cumplido exactamente la ley de Moore.", ["Entre 1971 y 2021 hay 50 años.", "Duplicación cada 2 años: 50 / 2 = 25 duplicaciones.", "2300 · 2²⁵ = 2300 · 33 554 432 ≈ 7,7 · 10¹⁰."], "Unos 77 000 millones de transistores, del orden de los procesadores más grandes de esa época."],
    ["Evalúa la fiabilidad de una noticia que circula por mensajería: «Un estudio demuestra que el wifi causa insomnio», sin enlace ni fecha.", ["Fuente: no se indica quién publica ni qué estudio es.", "Fecha: no consta, puede ser antigua o inventada.", "Pruebas: no enlaza el estudio; buscamos el título en un buscador académico y en sitios de verificación.", "Tono: el titular es alarmista y busca compartirse."], "No es fiable mientras no se localice el estudio original; no debe reenviarse."],
    ["Explica las ventajas y los riesgos de pedir una beca por la sede electrónica con certificado digital.", ["Ventajas: sin desplazamientos ni horarios, justificante inmediato con fecha y registro, firma con validez legal.", "Riesgos: perder el control del certificado (si alguien lo copia podría firmar en nuestro nombre) y webs fraudulentas que imitan la sede.", "Precauciones: proteger el certificado con contraseña, comprobar que la dirección es la oficial (https y dominio .gob.es) y no compartirlo."], "Trámite cómodo y legalmente válido si se protege la identidad digital."],
    ["Calcula el consumo anual de ver 2 horas de vídeo al día si el streaming en alta definición supone unos 0,08 kWh por hora (red y centros de datos) y en definición estándar la mitad.", ["Horas al año: 2 · 365 = 730 h.", "Alta definición: 730 · 0,08 = 58,4 kWh.", "Definición estándar: 730 · 0,04 = 29,2 kWh.", "Ahorro: 29,2 kWh al año por persona."], "Bajar la calidad cuando no hace falta ahorra unos 29 kWh al año por persona (valores orientativos)."],
    ["Diseña tres acciones para reducir la brecha digital de las personas mayores de tu barrio.", ["Acceso: recoger móviles reacondicionados y configurar en ellos aplicaciones sencillas.", "Uso: organizar sesiones intergeneracionales en el instituto para enseñar videollamadas, cita médica y detección de fraudes.", "Servicios: pedir al ayuntamiento que mantenga atención presencial y webs accesibles."], "Plan con acciones de acceso, competencias y diseño inclusivo."],
  ],
  errores: [
    "Creer que internet y la web son lo mismo: la web es solo uno de los servicios de internet.",
    "Pensar que tener mucha información equivale a estar bien informado.",
    "Reducir la brecha digital al acceso: también hay brecha de competencias y de calidad de uso.",
    "Considerar que lo digital no contamina porque es «virtual».",
    "Confiar en un contenido solo porque tiene muchas visualizaciones o «me gusta».",
    "Pensar que la IA es neutral: aprende de datos que pueden contener sesgos.",
  ],
  ejercicios: {
    b: [
      ["Define sociedad de la información con tus palabras.", "Es la sociedad en la que la creación, difusión y uso de la información, gracias a las TIC, son actividades centrales en la economía, la cultura y la política."],
      ["¿Qué tres tecnologías convergen en las TIC? Pon un ejemplo de dispositivo que las reúna.", "Informática, telecomunicaciones y medios audiovisuales. Ejemplo: el teléfono inteligente, que procesa datos, se conecta a redes y reproduce imagen y sonido."],
      ["Clasifica como dato, información o conocimiento: «12», «El examen es el día 12», «Como el examen es el 12, empiezo a repasar el 5».", "Dato, información y conocimiento."],
      ["Nombra cinco cualidades que debe tener una información útil.", "Veraz, relevante, actual, completa y accesible."],
      ["Ordena cronológicamente: microprocesador, válvulas, circuito integrado, transistor.", "Válvulas (1.ª generación), transistor (2.ª), circuito integrado (3.ª), microprocesador (4.ª)."],
      ["¿Qué es ARPANET y por qué tenía un diseño descentralizado?", "La red precursora de internet (1969), de la Agencia de Proyectos de Investigación Avanzada de Defensa de EE. UU. Era descentralizada para que, si un nodo caía, los datos encontraran otro camino."],
      ["¿Quién inventó la web, dónde y qué tres elementos técnicos la forman?", "Tim Berners-Lee, en el CERN (1989-1991). HTML (lenguaje de las páginas), URL (direcciones) y HTTP (protocolo de transmisión)."],
      ["Diferencia web 1.0 y web 2.0.", "En la web 1.0 las páginas eran estáticas y el usuario solo leía; en la 2.0 los usuarios crean y comparten contenidos (blogs, wikis, redes sociales)."],
      ["Cita tres sistemas de identificación en la administración electrónica española.", "Certificado digital (FNMT), DNI electrónico y Cl@ve."],
      ["¿Qué es la brecha digital? Nombra sus tres niveles.", "La desigualdad en el acceso y el uso de las TIC. Niveles: acceso, uso (competencias) y calidad de uso."],
      ["Enumera las cinco «uves» del big data.", "Volumen, velocidad, variedad, veracidad y valor."],
      ["Nombra las cinco áreas de la competencia digital según DigComp.", "Búsqueda y gestión de la información; comunicación y colaboración; creación de contenidos; seguridad; resolución de problemas."],
    ],
    m: [
      ["Explica con un ejemplo la diferencia entre sociedad de la información y sociedad del conocimiento.", "En la sociedad de la información el foco está en el acceso y la circulación de datos (tener millones de artículos a un clic). En la del conocimiento, en transformarlos en aprendizaje e innovación (un estudiante que contrasta varios artículos y elabora una conclusión propia)."],
      ["Si en 1990 un ordenador personal tenía 1 MB de memoria y la capacidad se duplica cada 2 años, ¿cuánta tendría en 2020?", "30 años = 15 duplicaciones: 1 MB · 2¹⁵ = 32 768 MB ≈ 32 GB."],
      ["Explica por qué la liberación de la web sin patentes favoreció su expansión.", "Cualquiera podía crear servidores, navegadores y páginas sin pagar licencias ni pedir permiso; así surgieron miles de desarrollos y se convirtió en un estándar universal."],
      ["Analiza dos ventajas y dos inconvenientes del teletrabajo.", "Ventajas: ahorro de tiempo y emisiones en desplazamientos; mejor conciliación y empleo en zonas rurales. Inconvenientes: aislamiento social; dificultad para separar trabajo y vida personal (de ahí el derecho a la desconexión)."],
      ["¿Qué son los datos abiertos? Propón una aplicación que podrías crear con ellos.", "Información pública en formatos reutilizables. Ejemplo: con los datos de calidad del aire del ayuntamiento, una app que avise a personas asmáticas de los días con mucha contaminación."],
      ["Explica qué es una cámara de eco y propón dos estrategias para salir de ella.", "Es un entorno en el que solo recibimos opiniones que refuerzan las nuestras, porque los algoritmos priorizan lo afín. Estrategias: seguir fuentes de distintas tendencias y buscar activamente las noticias en medios diversos en lugar de solo en el muro."],
      ["Una noticia dice que «el 80 % de los jóvenes no lee libros». Explica cómo comprobarías su veracidad.", "Buscar la fuente original (encuesta, organismo, fecha, muestra), consultar si coincide con otros estudios (por ejemplo el barómetro de lectura), revisar si la cifra se ha sacado de contexto y consultar servicios de verificación."],
      ["Describe qué es el aula invertida y qué papel tienen en ella las TIC.", "El alumnado estudia la teoría en casa con vídeos o lecturas digitales y en clase realiza actividades prácticas con el docente. Las TIC permiten acceder a los materiales cuando y donde se quiera."],
      ["¿Por qué se habla de brecha digital de género? Propón una medida.", "Porque las mujeres están infrarrepresentadas en estudios y empleos tecnológicos y en la creación de tecnología. Medida: programas de mentoría y referentes femeninos en tecnología desde la ESO."],
      ["Diferencia IaaS, PaaS y SaaS con un ejemplo.", "IaaS: alquilar servidores virtuales. PaaS: plataforma para desplegar una aplicación sin gestionar servidores. SaaS: usar un programa completo en el navegador, como un procesador de textos en línea."],
      ["Explica qué es un deepfake y qué riesgo plantea para la democracia.", "Un vídeo, imagen o audio falso generado con IA que imita a una persona real. Puede usarse para atribuir declaraciones falsas a políticos, manipular elecciones o destruir la reputación de alguien."],
      ["Indica qué son los RAEE y qué debes hacer con un móvil viejo.", "Residuos de aparatos eléctricos y electrónicos. El móvil se debe reutilizar, donar, vender reacondicionado o llevar a un punto limpio o a la tienda, nunca a la basura común; antes hay que borrar los datos."],
      ["Relaciona tres derechos de la Carta de Derechos Digitales con situaciones concretas.", "Derecho al olvido: pedir que un buscador desindexe una noticia antigua irrelevante sobre ti. Desconexión digital: no contestar al jefe a medianoche. Accesibilidad: que la web del ayuntamiento pueda usarse con un lector de pantalla."],
      ["Explica por qué la competencia digital no consiste solo en manejar aplicaciones.", "Las aplicaciones cambian cada pocos años; lo duradero es entender los principios (cómo funcionan las redes, cómo se evalúa la información, cómo protegerse) y saber aprender nuevas herramientas con criterio."],
    ],
    a: [
      ["Calcula: si el tráfico de datos móviles de un país crece un 25 % anual, ¿en cuántos años se duplica? ¿Y se multiplica por 10?", "1,25ⁿ = 2 → n = log 2 / log 1,25 = 3,1 años. 1,25ⁿ = 10 → n = 1 / log 1,25 = 10,3 años."],
      ["Un centro de datos consume 20 MW de forma continua. ¿Cuánta energía consume al año? ¿A cuántos hogares equivale si un hogar consume 3500 kWh al año?", "E = 20 000 kW · 8760 h = 175 200 000 kWh = 175,2 GWh. Hogares: 175 200 000 / 3500 ≈ 50 000 hogares."],
      ["Escribe un texto argumentativo breve (8-10 líneas) sobre si las redes sociales mejoran o empeoran la calidad de la democracia.", "Debe presentar una tesis clara; argumentos a favor (voz para colectivos sin acceso a los medios, movilización, transparencia) y en contra (desinformación, polarización por algoritmos, acoso), con ejemplos, y una conclusión con propuestas (alfabetización mediática, transparencia de algoritmos, regulación europea de servicios digitales)."],
      ["Diseña un indicador para medir la brecha digital en tu municipio con al menos cuatro variables.", "Ejemplo: % de hogares con banda ancha de más de 100 Mb/s; % de personas de 16 a 74 años que han usado internet en los últimos 3 meses; % de mayores de 65 que hacen trámites en línea; nº de puntos públicos de acceso por cada 1000 habitantes. Se normaliza cada variable de 0 a 1 y se promedian."],
      ["Analiza un caso de sesgo algorítmico: un sistema de selección de personal entrenado con los currículos de los últimos diez años de una empresa tecnológica.", "Si en esos años se contrató sobre todo a hombres, el modelo aprende a puntuar mejor rasgos asociados a ellos y penaliza a las mujeres. Soluciones: auditar el modelo por grupos, eliminar variables relacionadas con el género, equilibrar los datos y mantener la decisión final en manos humanas (el Reglamento de IA lo considera de alto riesgo)."],
      ["Compara el ciclo de vida de un móvil usado 2 años con otro usado 5 años si su fabricación emite 60 kg de CO₂ y su uso 2 kg al año.", "2 años: 60 + 4 = 64 kg → 32 kg/año. 5 años: 60 + 10 = 70 kg → 14 kg/año. Alargar la vida útil reduce más de la mitad las emisiones anuales."],
      ["Explica cómo afecta la economía de la atención al diseño de una aplicación y propone tres cambios de diseño ético.", "Busca maximizar el tiempo de uso con notificaciones, desplazamiento infinito, reproducción automática y recompensas variables. Cambios: resúmenes de notificaciones a horas fijas, fin del contenido nuevo visible («ya estás al día») y límites de tiempo configurables por defecto."],
      ["Elabora un decálogo de ciudadanía digital para tu instituto.", "Debe incluir, por ejemplo: proteger contraseñas y datos; pedir permiso antes de publicar fotos de otros; contrastar antes de compartir; respetar las licencias; tratar con respeto; denunciar el acoso; cuidar el tiempo de pantalla y el descanso; desconectar en clase; reciclar dispositivos; ayudar a quien sabe menos."],
      ["¿Hasta qué punto la ley de Moore puede seguir cumpliéndose? Razona con argumentos físicos y económicos.", "Los transistores se acercan a tamaños de pocos átomos, donde aparecen efectos cuánticos (fugas por efecto túnel) y problemas de disipación de calor; además, cada nueva fábrica cuesta decenas de miles de millones. Por eso la mejora se busca hoy con chips en 3D, procesadores especializados, nuevos materiales y computación cuántica."],
      ["Propón un plan de uso de datos abiertos para mejorar la movilidad sostenible de tu ciudad, indicando datos, herramienta y producto final.", "Datos: horarios y posición de autobuses, carriles bici, aparcamientos y contaminación. Herramienta: hoja de cálculo y un mapa web. Producto: un mapa interactivo con rutas recomendadas en bici o transporte público según la hora, con avisos de contaminación."],
    ],
  },
  glosario: [
    ["Sociedad de la información", "Sociedad en la que la información y su tratamiento con TIC son centrales."],
    ["TIC", "Tecnologías de la información y la comunicación."],
    ["Dato", "Representación simbólica sin contexto."],
    ["Información", "Datos organizados con contexto que reducen la incertidumbre."],
    ["Conocimiento", "Información interpretada y aplicada por una persona."],
    ["Infoxicación", "Exceso de información que impide procesarla bien."],
    ["Ley de Moore", "Observación según la cual los transistores de un chip se duplican cada dos años."],
    ["Internet", "Red mundial de redes conectadas con los protocolos TCP/IP."],
    ["World Wide Web", "Sistema de documentos de hipertexto accesibles por internet."],
    ["Certificado digital", "Documento electrónico que acredita la identidad y permite firmar."],
    ["Datos abiertos", "Información pública en formatos libres y reutilizables."],
    ["Burbuja de filtro", "Aislamiento informativo causado por algoritmos de personalización."],
    ["Brecha digital", "Desigualdad en el acceso y el uso de las TIC."],
    ["Big data", "Técnicas para tratar volúmenes masivos de datos."],
    ["Computación en la nube", "Uso de recursos informáticos remotos a través de internet."],
    ["RAEE", "Residuos de aparatos eléctricos y electrónicos."],
    ["Competencia digital", "Uso seguro, crítico y creativo de las tecnologías digitales."],
  ],
  situacion: {
    titulo: "Embajadores digitales del barrio",
    reto: "Por equipos, investigad la brecha digital en vuestro entorno y diseñad un taller práctico para personas mayores o vecinos con poca experiencia digital.",
    pasos: [
      "Elaborad una encuesta en línea sobre acceso, uso y dificultades digitales y pasadla a familiares y vecinos.",
      "Analizad los resultados en una hoja de cálculo y detectad las tres necesidades más frecuentes.",
      "Buscad y evaluad recursos fiables (INCIBE, sedes oficiales, tutoriales) sobre esas necesidades.",
      "Preparad fichas paso a paso con capturas y un guion de taller de una hora.",
      "Impartid el taller en el centro o en un local del barrio y recoged la valoración de los participantes.",
    ],
    producto: "Informe con gráficos de la encuesta, fichas del taller y una memoria con las valoraciones y propuestas de mejora.",
    evaluacion: [
      "La encuesta y el análisis de datos son rigurosos y están bien presentados.",
      "Las fuentes utilizadas son fiables y están citadas.",
      "Los materiales son claros, accesibles y adaptados al público.",
      "El equipo reflexiona sobre la brecha digital y propone mejoras realistas.",
    ],
  },
  familias: [
    "Hablad en casa de cómo ha cambiado la vida desde que los abuelos eran jóvenes: teléfono, televisión, banco, compras.",
    "Pedidle que os ayude con un trámite en línea y que os explique cómo comprobar que la web es oficial.",
    "Comentad juntos alguna noticia dudosa recibida por mensajería y verificadla antes de reenviarla.",
    "Llevad juntos los aparatos electrónicos viejos a un punto limpio o a una tienda que los recicle.",
  ],
  saberes: "Sociedad de la información y competencia digital: evolución de la informática y de internet, impacto de las TIC en la economía, el trabajo, la administración, la comunicación y la educación, brecha digital, big data, inteligencia artificial, sostenibilidad y derechos digitales (Tecnologías de la Información y la Comunicación I, optativa de 1º de Bachillerato de oferta autonómica en el marco del RD 243/2022; competencia digital del perfil de salida y marco DigComp).",
  ideas: [
    "Construir en clase una línea del tiempo colaborativa de la informática con un hito por pareja.",
    "Organizar un debate sobre redes sociales y democracia con roles asignados.",
    "Analizar los datos abiertos del ayuntamiento o de la comunidad autónoma en una hoja de cálculo.",
    "Calcular la huella de carbono digital del grupo durante una semana y proponer compromisos de reducción.",
  ],
  fuentes: [
    B.DIGCOMP,
    { t: "Carta de Derechos Digitales (Gobierno de España, 2021)", url: "https://www.lamoncloa.gob.es/presidente/actividades/Documents/2021/140721-Carta_Derechos_Digitales_RedEs.pdf" },
    { t: "INE: Encuesta sobre equipamiento y uso de TIC en los hogares", url: "https://www.ine.es/" },
  ],
});
