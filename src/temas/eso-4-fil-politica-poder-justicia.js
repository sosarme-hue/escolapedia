// Filosofía 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, flujo, rueda } = require("./_hum");

module.exports = {
  materia: "Filosofía",
  curso: "4-eso",
  titulo: "La política: el poder y la justicia",
  minutos: 60,
  objetivos: ["Definir poder, autoridad, legitimidad y Estado", "Explicar el origen del Estado según las teorías del contrato social (Hobbes, Locke, Rousseau)", "Comparar distintas concepciones de la justicia", "Valorar la democracia, el Estado de derecho y los derechos humanos"],
  claves: ["poder", "legitimidad", "Estado", "contrato social", "justicia", "democracia"],
  pregunta: {
    texto: "Imagina que mañana desaparecen la policía, los jueces y las leyes. ¿Viviríamos en paz o sería el caos? ¿Por qué obedecemos al Estado?",
    respuesta: "Es la pregunta de la <mark>filosofía política</mark>. Hobbes pensaba que sin Estado sería «la guerra de todos contra todos»; Rousseau, que el ser humano es bueno por naturaleza y la sociedad lo corrompe. Ambos coinciden en que el Estado nace de un <b>pacto</b> y solo es legítimo si sirve a los ciudadanos.",
  },
  bloques: [
    {
      html: `<h3>Poder, autoridad y legitimidad</h3><p>La <b>filosofía política</b> estudia cómo se organiza la vida en común. Su concepto central es el <mark>poder</mark>: la capacidad de hacer que otros actúen como uno quiere. Puede basarse en la fuerza, pero el poder solo por la fuerza es inestable. Cuando los demás lo aceptan como justo, hablamos de <b>autoridad</b>, y decimos que es <b>legítimo</b>. Max Weber distinguió tres fuentes de legitimidad: la <b>tradición</b> (un rey por herencia), el <b>carisma</b> (un líder que arrastra a las masas) y la <b>legalidad racional</b> (un gobierno elegido según la ley).</p>`,
      svg: filas("Tres fuentes de legitimidad según Weber", [["Tradición", "siempre ha sido así: monarquía", "var(--sun)"], ["Carisma", "cualidades del líder", "var(--red)"], ["Legalidad", "elecciones y leyes", "var(--pen)"]]),
    },
    {
      html: `<h3>El ser humano, animal político</h3><p>Para <b>Aristóteles</b>, el ser humano es un «animal político»: solo en la <b>polis</b> (la ciudad) puede desarrollarse plenamente, porque tiene <mark>lenguaje</mark> para hablar de lo justo y lo injusto. Quien vive fuera de la sociedad, decía, «o es una bestia o es un dios». Platón, su maestro, imaginó en <i>La República</i> una ciudad ideal gobernada por los <b>filósofos</b>, los que conocen la Idea del Bien, con guardianes que la defienden y productores que trabajan.</p>`,
    },
    {
      html: `<h3>El contrato social</h3><p>En los siglos XVII y XVIII surgió una idea revolucionaria: el poder no viene de Dios ni de la tradición, sino de un <mark>pacto</mark> entre las personas. Los <b>contractualistas</b> imaginan un «estado de naturaleza» sin gobierno y se preguntan por qué los individuos acordarían crear un Estado.</p>${tabla(["Autor", "Estado de naturaleza", "Por qué se pacta", "Tipo de Estado"], [["Hobbes (1651)", "guerra de todos contra todos", "por miedo, para tener seguridad", "absoluto: el Leviatán"], ["Locke (1690)", "libertad, pero inseguridad", "para proteger vida, libertad y propiedad", "liberal, poderes limitados"], ["Rousseau (1762)", "el ser humano es bueno y libre", "para recuperar la libertad en común", "democracia: voluntad general"]])}`,
      video: { id: "glgU6o4nZQc", titulo: "Hobbes vs. Locke vs. Rousseau: teorías del contrato social comparadas", canal: "Korczyk's Class", vistas: 426724, megusta: 0 },
    },
    {
      html: `<h3>Hobbes, Locke y Rousseau</h3><p><b>Hobbes</b> decía que «el hombre es un lobo para el hombre»: sin Estado, la vida sería «solitaria, pobre, desagradable, brutal y corta». Para evitarlo, entregamos todo el poder a un soberano. <b>Locke</b> respondió que el Estado debe respetar los <mark>derechos naturales</mark> (vida, libertad, propiedad) y que, si no lo hace, el pueblo puede rebelarse; propuso separar poderes. <b>Rousseau</b> defendió que la soberanía pertenece al <b>pueblo</b> y se expresa en la <mark>voluntad general</mark>, que busca el bien común y no los intereses particulares.</p>`,
      svg: dos("Hobbes frente a Rousseau", ["Hobbes", ["el hombre es", "un lobo", "miedo", "seguridad", "poder absoluto"], "var(--red)"], ["Rousseau", ["el hombre nace", "bueno", "libertad", "voluntad general", "soberanía popular"], "var(--leaf)"]),
    },
    {
      html: `<h3>El Estado de derecho y la división de poderes</h3><p>Hoy entendemos que un Estado es legítimo cuando es un <mark>Estado de derecho</mark>: todos, también los gobernantes, están sometidos a la ley, y se respetan los derechos fundamentales. <b>Montesquieu</b> propuso dividir el poder para que nadie lo acumule: el <b>legislativo</b> hace las leyes (Cortes Generales), el <b>ejecutivo</b> las aplica y gobierna (Gobierno) y el <b>judicial</b> juzga (jueces y tribunales). Así «el poder frena al poder».</p>`,
      svg: rueda("División de poderes de Montesquieu", "LEY", [["legislativo", "var(--pen)"], ["ejecutivo", "var(--red)"], ["judicial", "var(--sun)"], ["derechos", "var(--leaf)"]], "var(--ink)"),
    },
    {
      html: `<h3>¿Qué es la justicia?</h3><p>Desde Platón se discute qué es una sociedad justa. Una definición clásica, del jurista romano Ulpiano, es «dar a cada uno lo suyo». Pero ¿qué es «lo suyo»? Hay varias respuestas: según la <b>igualdad</b> (a todos lo mismo), según el <b>mérito</b> (a cada uno según su esfuerzo) o según la <b>necesidad</b> (a cada uno lo que necesita). En el siglo XX, <b>John Rawls</b> propuso un experimento: elegir las reglas de la sociedad bajo un <mark>«velo de ignorancia»</mark>, sin saber si serás rico o pobre, hombre o mujer, sano o enfermo. Así elegiríamos reglas justas para todos.</p>`,
      video: { id: "skm0CwE6b3w", titulo: "El estado de naturaleza y Rousseau explicados con Minecraft", canal: "Platonto", vistas: 388663, megusta: 0 },
    },
    {
      html: `<h3>Democracia y derechos humanos</h3><p>La <b>democracia</b> («gobierno del pueblo») nació en la Atenas del siglo V a. C., aunque entonces solo votaban los varones libres. La democracia actual es <mark>representativa</mark>: elegimos a quienes nos gobiernan en elecciones libres, periódicas y con sufragio universal. No basta con votar: exige libertad de expresión, pluralismo, separación de poderes y respeto a las minorías. Su límite son los <b>derechos humanos</b>, que ni siquiera una mayoría puede suprimir. En España, la Constitución de 1978 define el país como un «Estado social y democrático de Derecho».</p>`,
    },
    {
      html: `<h3>Desobediencia civil</h3><p>¿Debemos obedecer siempre las leyes? La <b>desobediencia civil</b> consiste en incumplir públicamente y sin violencia una ley que se considera <mark>injusta</mark>, aceptando el castigo, para cambiarla. Ejemplos: Henry D. Thoreau, que se negó a pagar impuestos para una guerra; <b>Gandhi</b> y la marcha de la sal en la India; <b>Rosa Parks</b>, que no cedió su asiento de autobús en 1955. Se diferencia de un simple delito porque se hace a la luz, por razones morales y buscando el bien común.</p>`,
    },
  ],
  figura: {
    titulo: "Del estado de naturaleza al Estado",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Estado de naturaleza, contrato social, Estado y derechos protegidos">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      ${[["Estado de", "naturaleza", "var(--red)"], ["Contrato", "social", "var(--sun)"], ["Estado", "legítimo", "var(--pen)"], ["Derechos", "protegidos", "var(--leaf)"]].map(([a, b, c], i) => `<rect x="${24 + i * 164}" y="56" width="136" height="88" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/><text x="${92 + i * 164}" y="94" text-anchor="middle" font-size="16" font-weight="700" fill="${c}" ${D}>${a}</text><text x="${92 + i * 164}" y="118" text-anchor="middle" font-size="15" fill="var(--ink)" ${F}>${b}</text>${i < 3 ? `<path d="M${162 + i * 164} 100 h 22" stroke="var(--ink)" stroke-width="3"/><path d="M${184 + i * 164} 92 l 8 8 l -8 8 z" fill="var(--ink)"/>` : ""}`).join("")}
      <text x="340" y="176" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>Hobbes · Locke · Rousseau</text>
    </svg>`,
  },
  video: { id: "pI5CO5oHC14", titulo: "Filosofía política: Platón, Maquiavelo, Hobbes, Locke, Rousseau", canal: "Doctor Littbarski", vistas: 58306, megusta: 0, busqueda: "filosofía política qué es" },
  ejemplos: [
    { enunciado: "Clasifica la legitimidad de: a) un rey que hereda el trono; b) un líder revolucionario seguido por su carisma; c) una presidenta elegida en las urnas.", pasos: ["a) Se basa en la costumbre y la herencia: legitimidad tradicional.", "b) Se basa en las cualidades personales del líder: legitimidad carismática.", "c) Se basa en procedimientos legales: legitimidad legal-racional."], resultado: "a) Tradicional; b) carismática; c) legal-racional." },
    { enunciado: "Aplica el velo de ignorancia de Rawls a esta pregunta: ¿debe ser gratuita la sanidad pública?", pasos: ["No sé si naceré rico o pobre, sano o enfermo.", "Si fuera pobre y enfermo, sin sanidad pública no podría curarme.", "Bajo el velo, elegiría una sanidad accesible para todos, por si acaso me tocara la peor posición."], resultado: "Bajo el velo de ignorancia la mayoría elegiría una sanidad pública accesible." },
    { enunciado: "¿Es desobediencia civil que alguien rompa escaparates en una protesta?", pasos: ["La desobediencia civil es pública, no violenta y acepta el castigo.", "Romper escaparates es violencia contra bienes de terceros.", "Además no busca cambiar una ley concreta de forma moralmente justificada."], resultado: "No: es un delito, no desobediencia civil." },
  ],
  errores: [
    "Confundir poder y autoridad: el poder puede imponerse por la fuerza; la autoridad se acepta como legítima.",
    "Pensar que el contrato social fue un documento real firmado: es una hipótesis para justificar el Estado.",
    "Atribuir a Rousseau la frase «el hombre es un lobo para el hombre»: es de Hobbes.",
    "Creer que la democracia es solo votar: exige derechos, pluralismo y separación de poderes.",
    "Pensar que la mayoría puede decidirlo todo: los derechos humanos son un límite.",
  ],
  ejercicios: [
    { q: "Define poder, autoridad y legitimidad.", sol: "Poder: capacidad de hacer que otros actúen como uno quiere. Autoridad: poder aceptado como justo. Legitimidad: justificación que hace aceptable el poder." },
    { q: "¿Por qué Aristóteles llama al ser humano «animal político»?", sol: "Porque es social por naturaleza, tiene lenguaje para hablar de lo justo y solo se realiza plenamente en la comunidad." },
    { q: "¿Qué es el estado de naturaleza para los contractualistas?", sol: "Una situación imaginaria sin gobierno ni leyes, que sirve para explicar por qué las personas acuerdan crear un Estado." },
    { q: "Compara el estado de naturaleza en Hobbes y en Rousseau.", sol: "Para Hobbes es una guerra de todos contra todos por el egoísmo humano; para Rousseau, el ser humano es bueno y libre, y es la sociedad la que lo corrompe." },
    { q: "¿Qué derechos naturales defendía Locke?", sol: "La vida, la libertad y la propiedad." },
    { q: "Explica la división de poderes y di qué institución española ejerce cada uno.", sol: "Legislativo (Cortes Generales: Congreso y Senado), ejecutivo (Gobierno) y judicial (jueces y tribunales)." },
    { q: "¿Qué es la voluntad general en Rousseau?", sol: "La voluntad del pueblo orientada al bien común, distinta de la suma de intereses particulares." },
    { q: "Explica tres criterios para repartir con justicia y pon un ejemplo de cada uno.", sol: "Igualdad: un voto por persona. Mérito: la nota según el examen. Necesidad: becas para quien tiene menos recursos." },
    { q: "¿Qué es el velo de ignorancia de Rawls?", sol: "Un experimento mental: elegir las normas sociales sin saber qué lugar ocuparás en la sociedad, para que sean justas para todos." },
    { q: "Explica qué es la desobediencia civil con un ejemplo histórico.", sol: "Incumplir pública y pacíficamente una ley injusta aceptando el castigo para cambiarla. Ejemplo: Rosa Parks se negó a ceder su asiento a un blanco en 1955." },
  ],
  quiz: [
    { q: "El poder aceptado como justo se llama…", o: ["autoridad", "fuerza", "violencia"], a: 0, e: "Es poder legítimo." },
    { q: "«El hombre es un lobo para el hombre» es de…", o: ["Hobbes", "Locke", "Rousseau"], a: 0, e: "Leviatán, 1651." },
    { q: "Para Locke, el Estado debe proteger…", o: ["vida, libertad y propiedad", "solo al rey", "la religión"], a: 0, e: "Derechos naturales." },
    { q: "La voluntad general es un concepto de…", o: ["Rousseau", "Platón", "Weber"], a: 0, e: "El contrato social, 1762." },
    { q: "La división de poderes la propuso…", o: ["Montesquieu", "Hobbes", "Aristóteles"], a: 0, e: "El espíritu de las leyes." },
    { q: "El poder judicial…", o: ["juzga", "hace las leyes", "gobierna"], a: 0, e: "Jueces y tribunales." },
    { q: "«Dar a cada uno lo suyo» es una definición de…", o: ["justicia", "poder", "libertad"], a: 0, e: "Del jurista Ulpiano." },
    { q: "El velo de ignorancia es de…", o: ["Rawls", "Kant", "Marx"], a: 0, e: "Teoría de la justicia, 1971." },
    { q: "La democracia nació en…", o: ["Atenas", "Roma", "París"], a: 0, e: "Siglo V a. C." },
    { q: "Rosa Parks es un ejemplo de…", o: ["desobediencia civil", "dictadura", "contrato social"], a: 0, e: "Protesta pacífica contra la segregación." },
  ],
  examen: [
    { q: "Platón quería que gobernaran…", o: ["los filósofos", "los ricos", "los guerreros"], a: 0, e: "Los que conocen el Bien." },
    { q: "En un Estado de derecho…", o: ["todos están sometidos a la ley", "el gobierno está por encima de la ley", "no hay jueces"], a: 0, e: "Nadie está por encima de la ley." },
    { q: "Hobbes defendía un Estado…", o: ["absoluto", "anarquista", "sin ejército"], a: 0, e: "El Leviatán." },
  ],
  feynman: ["Qué son el poder, la autoridad y la legitimidad", "El contrato social según Hobbes, Locke y Rousseau", "La división de poderes y el Estado de derecho", "Qué es la justicia y el velo de ignorancia"],
  mapa: mapa("POLÍTICA", "var(--pen)", [
    ["Poder", "autoridad · legitimidad", "var(--red)"],
    ["Contrato", "Hobbes · Locke · Rousseau", "var(--sun)"],
    ["Estado", "derecho · división de poderes", "var(--pen)"],
    ["Justicia", "igualdad · mérito · Rawls", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Legitimidad", "Justificación que hace que el poder se acepte como justo."],
    ["Contrato social", "Pacto hipotético por el que las personas crean el Estado."],
    ["Leviatán", "Estado absoluto de Hobbes, nacido del miedo."],
    ["Voluntad general", "Para Rousseau, la voluntad del pueblo orientada al bien común."],
    ["División de poderes", "Legislativo, ejecutivo y judicial separados (Montesquieu)."],
    ["Estado de derecho", "Todos, también los gobernantes, sometidos a la ley."],
    ["Velo de ignorancia", "Elegir normas sin saber qué lugar ocuparás en la sociedad (Rawls)."],
    ["Desobediencia civil", "Incumplir públicamente y sin violencia una ley injusta."],
  ],
  familias: ["Ved juntos las noticias y buscad un ejemplo de cada poder del Estado.", "Repartid algo en casa (tareas, postre) y discutid si es más justo por igualdad, mérito o necesidad.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Filosofía 4º ESO (optativa autonómica): poder y legitimidad, origen del Estado y contrato social, teorías de la justicia, democracia y derechos humanos (marco del RD 217/2022).",
    ideas: ["Simulación de una isla desierta: el grupo debe crear sus normas.", "Debate Hobbes contra Rousseau.", "Análisis de los primeros artículos de la Constitución española."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Constitución española de 1978 (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" },
  ],
  revisado: "2026-11-12",
};
