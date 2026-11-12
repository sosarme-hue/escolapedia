// Economía y Emprendimiento 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { rueda, filas, flujo, dos, figCols } = require("./_hum");

module.exports = {
  materia: "Economía y Emprendimiento",
  curso: "4-eso",
  titulo: "La economía y las decisiones",
  minutos: 35,
  objetivos: ["Entender la economía como la ciencia que estudia cómo gestionar recursos escasos", "Aplicar el concepto de coste de oportunidad a decisiones cotidianas", "Identificar los agentes económicos y el flujo circular de la renta"],
  claves: ["escasez", "coste de oportunidad", "necesidades", "bienes y servicios", "agentes económicos", "flujo circular"],
  pregunta: {
    texto: "Tienes 20 euros y una tarde libre. Puedes ir al cine con tus amigos o comprarte el videojuego que quieres desde hace semanas. No te llega para las dos cosas. ¿Cómo decides?",
    respuesta: "Acabas de enfrentarte al problema básico de la <mark>economía</mark>: los recursos (dinero, tiempo) son <b>escasos</b> y las necesidades y deseos, casi ilimitados. Elegir una cosa supone renunciar a otra, y eso a lo que renuncias es el <b>coste de oportunidad</b>.",
  },
  bloques: [
    {
      html: `<h3>La escasez, el problema económico</h3><p>Las personas tenemos <b>necesidades</b> (comer, vestir, aprender, divertirnos) que satisfacemos con <b>bienes</b> (objetos) y <b>servicios</b> (actividades, como una clase o un corte de pelo). Pero los recursos para producirlos son limitados: esa es la <mark>escasez</mark>. La economía estudia cómo las personas y las sociedades <b>eligen</b> qué producir, cómo y para quién con esos recursos escasos.</p>`,
      svg: dos("Necesidades ilimitadas frente a recursos escasos", ["Necesidades", ["alimento", "vivienda", "educación", "ocio", "¡casi infinitas!"], "var(--red)"], ["Recursos", ["tierra", "trabajo", "capital", "tiempo", "¡limitados!"], "var(--leaf)"]),
    },
    {
      html: `<h3>El coste de oportunidad</h3><p>Cada decisión tiene un precio oculto: el <mark>coste de oportunidad</mark>, que es el valor de la <b>mejor alternativa a la que renuncias</b>. Si eliges el videojuego, tu coste de oportunidad es la tarde de cine con tus amigos. Si dedicas el sábado a trabajar, renuncias a descansar. Pensar en el coste de oportunidad ayuda a tomar mejores decisiones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Balanza con 20 euros: cine frente a videojuego; lo que dejas es el coste de oportunidad">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 40 V 140 M 90 150 H 170" stroke="var(--ink)" stroke-width="3"/>
        <path d="M50 64 L 210 56" stroke="var(--ink)" stroke-width="3"/>
        <circle cx="130" cy="40" r="14" fill="var(--sun)"/><text x="130" y="45" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>20 €</text>
        <path d="M30 64 H 70 L 62 92 H 38 Z" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>
        <path d="M190 56 H 230 L 222 84 H 198 Z" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>
        <text x="50" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="var(--pen)" ${F}>cine</text>
        <text x="210" y="104" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)" ${F}>videojuego</text>
        <text x="130" y="172" text-anchor="middle" font-size="11.5" fill="var(--muted)" ${F}>lo que dejas = coste de oportunidad</text>
      </svg>`,
    },
    {
      html: `<h3>Los factores de producción</h3><p>Para producir bienes y servicios se combinan los <mark>factores productivos</mark>: la <b>tierra</b> (recursos naturales), el <b>trabajo</b> (esfuerzo físico y mental de las personas), el <b>capital</b> (máquinas, herramientas, edificios) y la <b>iniciativa empresarial</b> (quien organiza los demás y asume el riesgo). Cada uno recibe una recompensa: renta, salario, interés y beneficio.</p>`,
      svg: filas("Factores de producción y su recompensa", [["Tierra", "recursos naturales → renta", "var(--leaf)"], ["Trabajo", "personas → salario", "var(--pen)"], ["Capital", "máquinas → interés", "var(--muted)"], ["Empresa", "iniciativa → beneficio", "var(--red)"]]),
    },
    {
      html: `<h3>Los agentes económicos y el flujo circular</h3><p>En la economía participan tres <mark>agentes</mark>: las <b>familias</b> (consumen y ofrecen su trabajo), las <b>empresas</b> (producen bienes y servicios y contratan trabajo) y el <b>sector público</b> (cobra impuestos y ofrece servicios como sanidad o educación). El dinero circula entre ellos: las familias trabajan en las empresas, cobran un salario y lo gastan comprando lo que las empresas producen. Es el <b>flujo circular de la renta</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Flujo circular: familias y empresas intercambian trabajo y salarios, bienes y pagos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <defs><marker id="eco1a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>
        <rect x="14" y="66" width="76" height="40" rx="10" fill="var(--pen)"/><text x="52" y="91" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" ${F}>familias</text>
        <rect x="170" y="66" width="76" height="40" rx="10" fill="var(--leaf)"/><text x="208" y="91" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" ${F}>empresas</text>
        <path d="M60 62 C 90 18, 170 18, 200 62" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#eco1a)"/>
        <path d="M200 110 C 170 156, 90 156, 60 110" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#eco1a)"/>
        <text x="130" y="28" text-anchor="middle" font-size="11.5" fill="var(--ink)" ${F}>trabajo y gasto en compras</text>
        <text x="130" y="166" text-anchor="middle" font-size="11.5" fill="var(--ink)" ${F}>salarios y bienes</text>
        <text x="130" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)" ${F}>sector público</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Las tres preguntas de toda economía",
    svg: figCols("Qué producir, cómo producir y para quién producir, con ejemplos", [
      ["¿Qué producir?", ["¿coches o bicis?", "¿hospitales o", "carreteras?", "depende de las", "necesidades"], "var(--pen)"],
      ["¿Cómo producir?", ["¿con más máquinas", "o más personas?", "¿energía solar", "o petróleo?", "eficiencia"], "var(--leaf)"],
      ["¿Para quién?", ["¿cómo se reparte", "lo producido?", "salarios, precios", "impuestos y", "ayudas"], "var(--red)"],
    ]),
  },
  video: { id: "pplbyImPNJw", titulo: "Coste de oportunidad explicado en 2 minutos", canal: "GAYTÁN", vistas: 531663, megusta: 0, busqueda: "qué es la economía escasez coste de oportunidad" },
  quiz: [
    { q: "¿Qué estudia la economía?", o: ["Solo el dinero de los bancos", "Cómo gestionar recursos escasos para satisfacer necesidades", "Los precios de la Bolsa"], a: 1, e: "La economía estudia las decisiones sobre qué, cómo y para quién producir con recursos limitados." },
    { q: "Si eliges estudiar en vez de ir al cine, el coste de oportunidad es…", o: ["el precio de la entrada", "la tarde de cine a la que renuncias", "nada"], a: 1, e: "Es el valor de la mejor alternativa a la que renuncias." },
    { q: "¿Cuál de estos es un servicio?", o: ["Una camiseta", "Una clase de guitarra", "Un balón"], a: 1, e: "Los servicios son actividades que no se pueden almacenar." },
    { q: "La recompensa del factor trabajo es…", o: ["el salario", "el interés", "la renta"], a: 0, e: "El trabajo se paga con salarios; el capital, con intereses; la tierra, con rentas." },
    { q: "¿Qué agente económico cobra impuestos?", o: ["Las familias", "Las empresas", "El sector público"], a: 2, e: "El sector público financia con impuestos servicios como sanidad o educación." },
  ],
  examen: [
    { q: "¿Por qué existe la escasez?", o: ["Porque las necesidades son ilimitadas y los recursos limitados", "Porque la gente no trabaja", "Porque hay mucho dinero"], a: 0, e: "Incluso los países ricos tienen que elegir en qué usar sus recursos." },
    { q: "Una fábrica de bicicletas es un ejemplo de…", o: ["factor tierra", "factor capital", "factor trabajo"], a: 1, e: "Las máquinas y edificios que sirven para producir son capital." },
    { q: "En el flujo circular, las familias entregan a las empresas…", o: ["bienes y servicios", "trabajo y pagos por compras", "impuestos"], a: 1, e: "Ofrecen su trabajo y gastan sus ingresos comprando lo que las empresas producen." },
  ],
  feynman: ["Qué es la escasez y por qué obliga a elegir", "El coste de oportunidad con un ejemplo de tu vida", "Los cuatro factores de producción y su recompensa", "Cómo circula el dinero entre familias y empresas"],
  mapa: mapa("ECONOMÍA", "var(--leaf)", [
    ["Escasez", "recursos limitados", "var(--red)"],
    ["Decisiones", "coste de oportunidad", "var(--pen)"],
    ["Factores", "tierra · trabajo · capital", "var(--muted)"],
    ["Agentes", "familias · empresas · Estado", "var(--sun)"],
  ], 260),
  tarjetas: [
    ["Escasez", "Recursos limitados frente a necesidades ilimitadas."],
    ["Coste de oportunidad", "El valor de la mejor alternativa a la que renuncias al elegir."],
    ["Bien frente a servicio", "Un bien es un objeto; un servicio, una actividad."],
    ["Factores de producción", "Tierra, trabajo, capital e iniciativa empresarial."],
    ["Agentes económicos", "Familias, empresas y sector público."],
  ],
  familias: ["Al hacer la compra, pensad juntos en el coste de oportunidad de un capricho.", "Preguntadle qué haría con 50 euros y qué dejaría de hacer al elegir.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Conceptos económicos básicos: escasez, coste de oportunidad, factores productivos y agentes económicos (RD 217/2022, Economía y Emprendimiento 4º).",
    ideas: ["Dilema con presupuesto: la clase reparte 1 000 € entre cinco necesidades del centro.", "Dibujar el flujo circular con ejemplos reales de la familia.", "Registro semanal de decisiones y sus costes de oportunidad."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Coste de oportunidad, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Coste_de_oportunidad" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Representar e interpretar la frontera de posibilidades de producción", "Distinguir economía positiva y normativa, y microeconomía y macroeconomía"],
  bloques: [
    { tras: "La escasez, el problema", html: `<h3>Necesidades y bienes</h3><p>Una <b>necesidad</b> es la sensación de carencia de algo, unida al deseo de satisfacerla. Las hay <b>primarias</b> (alimento, vivienda, salud) y <b>secundarias</b> (ocio, viajes, un móvil nuevo), y crecen con el nivel de vida. Para satisfacerlas usamos <mark>bienes</mark> (objetos: una manzana, una bici) y <mark>servicios</mark> (actividades: una clase, un corte de pelo). Los <b>bienes libres</b>, como el aire, son abundantes y no tienen precio; los <b>bienes económicos</b> son escasos y cuestan dinero. Los bienes pueden ser <b>de consumo</b> (los usa el consumidor) o <b>de capital</b> (sirven para producir otros, como una máquina).</p>`, video: { id: "IUGotDZIb40", titulo: "Concepto de escasez | Economía", canal: "Flex Flix Teens en Español", vistas: 421689, megusta: 0 } },
    { tras: "La escasez, el problema", html: `<h3>Las tres preguntas básicas</h3><p>Como los recursos son escasos, toda sociedad debe responder a tres preguntas: <b>¿qué producir?</b> (y cuánto), <b>¿cómo producir?</b> (con qué técnicas y recursos) y <b>¿para quién producir?</b> (cómo se reparte lo producido). Cada <mark>sistema económico</mark> las responde de forma distinta: en la <b>economía de mercado</b> deciden la oferta y la demanda; en la <b>economía planificada</b> decide el Estado; y en la <b>economía mixta</b>, la de España y casi todos los países, el mercado decide la mayor parte, pero el Estado interviene con impuestos, servicios públicos y leyes.</p>` },
    { tras: "El coste de oportunidad", html: `<h3>La frontera de posibilidades de producción</h3><p>La <mark>frontera de posibilidades de producción</mark> (FPP) muestra las combinaciones máximas de dos bienes que puede producir una economía con sus recursos y su tecnología.</p>${tabla(["Opción", "Ordenadores", "Bicicletas"], [["A", "0", "100"], ["B", "10", "90"], ["C", "20", "70"], ["D", "30", "40"], ["E", "40", "0"]])}<p>Los puntos de la frontera son <b>eficientes</b>; los de dentro, <b>ineficientes</b> (hay recursos sin usar, como trabajadores en paro); los de fuera, <b>inalcanzables</b> por ahora. Si mejora la tecnología o aumentan los recursos, la frontera se desplaza hacia fuera: hay <b>crecimiento económico</b>.</p>` },
    { tras: "Los factores de producción", html: `<h3>Las rentas de los factores</h3><p>Cada factor de producción recibe un pago, llamado <b>renta</b>, por participar en la producción.</p>${tabla(["Factor", "Ejemplo", "Renta que recibe"], [["Tierra (recursos naturales)", "un terreno, un pozo de agua", "alquiler o renta"], ["Trabajo", "el esfuerzo de un cocinero", "salario"], ["Capital", "un horno, un ordenador", "interés"], ["Iniciativa empresarial", "quien organiza el restaurante y asume el riesgo", "beneficio"]])}<p>La <mark>productividad</mark> mide cuánto se produce con cada unidad de factor, por ejemplo, unidades por trabajador y hora.</p>` },
    { tras: "Los agentes económicos", html: `<h3>Cómo estudia la economía el mundo</h3><p>La <b>microeconomía</b> estudia las decisiones de las familias y las empresas: por qué sube el precio de un producto o cuántos trabajadores contrata una empresa. La <b>macroeconomía</b> estudia el conjunto: el crecimiento del país, la inflación, el paro. Además, la <mark>economía positiva</mark> describe lo que es («si sube el precio del tabaco, se fuma menos») y se puede comprobar con datos, mientras que la <mark>economía normativa</mark> opina sobre lo que debería ser («habría que subir el impuesto del tabaco»), y depende de valores.</p>` },
  ],
  ejemplos: [
    { enunciado: "Con la tabla de la FPP, ¿cuál es el coste de oportunidad de pasar de 20 a 30 ordenadores?", pasos: ["Con 20 ordenadores se producen 70 bicicletas (opción C).", "Con 30 ordenadores se producen 40 bicicletas (opción D).", "Se renuncia a 70 − 40 = 30 bicicletas.", "Por cada ordenador extra se pierden 30 / 10 = 3 bicicletas."], resultado: "El coste de oportunidad es de 30 bicicletas (3 por ordenador)." },
    { enunciado: "Lucía tiene la tarde libre: puede trabajar de canguro (ganaría 25 €), estudiar o ir al cine (8 €). Elige el cine. ¿Cuál es su coste de oportunidad?", pasos: ["El coste de oportunidad es la mejor alternativa a la que se renuncia.", "Si valora más ganar dinero que estudiar, la mejor alternativa es el trabajo.", "Además paga 8 € de entrada."], resultado: "Renuncia a 25 € (y a la tarde de estudio), y gasta 8 €: el cine le cuesta en realidad 33 €." },
    { enunciado: "Clasifica: «El paro juvenil en España es más alto que la media europea» y «El Gobierno debería bajar las cotizaciones a los jóvenes».", pasos: ["La primera describe un hecho que se puede comprobar con estadísticas: positiva.", "La segunda propone lo que habría que hacer: normativa."], resultado: "La primera es economía positiva; la segunda, normativa." },
  ],
  errores: [
    "Pensar que el coste de oportunidad es el dinero que pagas: es la mejor alternativa a la que renuncias.",
    "Sumar todas las alternativas perdidas: solo cuenta la mejor.",
    "Confundir escasez con pobreza: hasta el país más rico tiene recursos limitados.",
    "Creer que un punto dentro de la FPP es imposible: es posible, pero ineficiente.",
    "Confundir el dinero con el capital como factor de producción: el capital son máquinas, herramientas y edificios.",
  ],
  ejercicios: [
    { q: "Pon un ejemplo de necesidad primaria y otro de secundaria.", sol: "Primaria: alimentarse. Secundaria: ir a un concierto." },
    { q: "¿Por qué el agua del mar es un bien libre y el agua embotellada, un bien económico?", sol: "La del mar es abundante y nadie cobra por ella; la embotellada requiere recursos para producirla y tiene precio." },
    { q: "¿Qué tres preguntas debe responder todo sistema económico?", sol: "Qué producir, cómo producir y para quién producir." },
    { q: "Describe una economía mixta.", sol: "El mercado decide la mayoría de las cosas, pero el Estado interviene con servicios públicos, impuestos y leyes." },
    { q: "En la tabla de la FPP, ¿qué ocurre si la economía produce 20 ordenadores y 50 bicicletas?", sol: "Está dentro de la frontera: es ineficiente, porque podría producir 70 bicicletas con 20 ordenadores." },
    { q: "¿Qué desplaza la FPP hacia fuera?", sol: "Más recursos (más población activa, más capital) o mejor tecnología." },
    { q: "Asocia cada factor con su renta.", sol: "Tierra: alquiler. Trabajo: salario. Capital: interés. Iniciativa empresarial: beneficio." },
    { q: "Un taller produce 120 piezas al día con 4 trabajadores. ¿Cuál es la productividad por trabajador?", sol: "120 / 4 = 30 piezas por trabajador y día." },
    { q: "¿Estudia la microeconomía o la macroeconomía el paro de España?", sol: "La macroeconomía, porque estudia el conjunto de la economía." },
    { q: "Escribe una frase de economía positiva y otra de normativa sobre el precio de la vivienda.", sol: "Positiva: «El precio del alquiler ha subido en las grandes ciudades». Normativa: «Debería limitarse el precio del alquiler»." },
  ],
  quiz: [
    { q: "Un corte de pelo es…", o: ["un bien", "un servicio", "un factor"], a: 1, e: "Es una actividad, no un objeto." },
    { q: "Un punto fuera de la FPP es…", o: ["eficiente", "ineficiente", "inalcanzable"], a: 2, e: "No hay recursos suficientes para producirlo." },
    { q: "La renta del trabajo es…", o: ["el interés", "el salario", "el beneficio"], a: 1, e: "Lo que se cobra por trabajar." },
    { q: "«Habría que subir el salario mínimo» es economía…", o: ["positiva", "normativa", "planificada"], a: 1, e: "Expresa una opinión sobre lo que debería ser." },
    { q: "En una economía planificada decide…", o: ["el mercado", "el Estado", "cada familia"], a: 1, e: "El Estado fija qué, cómo y para quién." },
  ],
  tarjetas: [
    ["Bien económico", "Bien escaso que tiene precio."],
    ["Frontera de posibilidades de producción", "Combinaciones máximas de dos bienes que puede producir una economía."],
    ["Economía normativa", "Opina sobre lo que debería hacerse."],
  ],
});
