// Filosofía 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, rueda, arbol } = require("./_hum");

module.exports = {
  materia: "Filosofía",
  curso: "4-eso",
  titulo: "La realidad y la metafísica",
  minutos: 60,
  objetivos: ["Explicar qué estudia la metafísica y cuáles son sus grandes preguntas", "Comparar la visión de la realidad de Platón y la de Aristóteles", "Distinguir apariencia y realidad, sustancia y accidente, materialismo y espiritualismo", "Reflexionar sobre preguntas actuales: el tiempo, la mente o la realidad virtual"],
  claves: ["metafísica", "ser", "apariencia", "sustancia", "idealismo", "materialismo"],
  pregunta: {
    texto: "En la película <i>Matrix</i>, el protagonista descubre que el mundo que veía era una simulación. ¿Cómo sabes tú que no vives en una?",
    respuesta: "No es fácil demostrarlo. La pregunta por lo que <mark>realmente existe</mark>, más allá de lo que parece, es la pregunta de la <b>metafísica</b>. Platón la planteó hace 2.400 años con el mito de la caverna, y hoy sigue viva con la realidad virtual.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la metafísica?</h3><p>La <b>metafísica</b> es la rama de la filosofía que se pregunta por la <mark>realidad en su conjunto</mark>: qué es lo que existe, qué es «ser», por qué hay algo en lugar de nada. El nombre es casual: un editor de Aristóteles colocó sus libros sobre estos temas «después de la física» (<i>meta ta physiká</i>). Aristóteles la llamaba «filosofía primera», porque estudia los principios de todo lo que existe. Su parte central, el estudio del ser, se llama <b>ontología</b>.</p>`,
      svg: rueda("Grandes preguntas de la metafísica", "¿QUÉ|ES REAL?", [["¿qué existe?", "var(--pen)"], ["¿hay Dios?", "var(--sun)"], ["¿el tiempo?", "var(--leaf)"], ["¿alma?", "var(--red)"], ["¿libres?", "var(--inf)"], ["¿por qué algo?", "var(--bac)"]], "var(--ink)"),
    },
    {
      html: `<h3>Apariencia y realidad</h3><p>Desde los primeros filósofos se sospecha que las cosas no son siempre lo que parecen. El Sol parece girar alrededor de la Tierra; una mesa parece maciza, pero está hecha de átomos casi vacíos. La metafísica distingue entre la <b>apariencia</b> (lo que captan los sentidos) y la <mark>realidad</mark> (lo que las cosas son de verdad). Parménides llegó a decir que el cambio y el movimiento son pura apariencia; Heráclito, en cambio, que la realidad es puro cambio.</p>`,
      svg: dos("Apariencia y realidad", ["Parece", ["el Sol gira", "la mesa es maciza", "el palo se dobla", "en el agua", "la Tierra es plana"], "var(--sun)"], ["Es", ["la Tierra gira", "átomos y vacío", "la luz se refracta", "en el agua", "la Tierra es esfera"], "var(--pen)"]),
    },
    {
      html: `<h3>Platón: el mundo de las Ideas</h3><p>Platón propuso que existen <b>dos mundos</b>. El <b>mundo sensible</b>, el que vemos, está lleno de cosas que cambian, nacen y mueren. Por encima está el <mark>mundo de las Ideas</mark>: modelos perfectos, eternos e inmutables de todo lo que existe. Las cosas bellas que vemos son copias imperfectas de la Idea de Belleza; los círculos que dibujamos, copias del Círculo perfecto. La Idea suprema es la del <b>Bien</b>. Solo la razón puede conocer las Ideas; los sentidos solo nos dan sombras.</p>`,
      svg: arbol("Los dos mundos de Platón", [["Ideas", ["eternas", "perfectas"], "var(--pen)", ["razón", "modelos"]], ["Sensible", ["cambiante", "imperfecto"], "var(--sun)", ["sentidos", "copias"]]]),
    },
    {
      html: `<h3>El mito de la caverna</h3><p>Para explicar su teoría, Platón contó una alegoría. Unos prisioneros viven encadenados en una cueva, mirando una pared. Detrás de ellos arde un fuego, y por delante pasan objetos cuyas <b>sombras</b> se proyectan en la pared. Los prisioneros creen que las sombras son la realidad. Si uno se libera y sale, al principio la luz le ciega, pero después ve las cosas reales y, al final, el <mark>Sol</mark>, que representa la Idea del Bien. Si vuelve para contarlo, los demás se burlan de él. La caverna es el mundo sensible; salir de ella es <b>educarse</b>.</p>`,
      video: { id: "nxVwsKNv08Q", titulo: "Mito de la caverna, Platón", canal: "bgmediavilla", vistas: 1989322, megusta: 0 },
    },
    {
      html: `<h3>Aristóteles: un solo mundo</h3><p>Aristóteles, alumno de Platón, rechazó los dos mundos: la realidad es <mark>este mundo</mark> que vemos. Cada cosa es una <b>sustancia</b>, compuesta de <b>materia</b> (de qué está hecha) y <b>forma</b> (lo que es, su estructura). Una estatua de bronce tiene el bronce como materia y la figura como forma. Distinguió también la sustancia de los <b>accidentes</b>, cualidades que pueden cambiar sin que la cosa deje de ser lo que es: tú sigues siendo tú aunque te cortes el pelo.</p>`,
      svg: filas("Conceptos de Aristóteles con un ejemplo", [["Materia", "el bronce de la estatua", "var(--sun)"], ["Forma", "la figura del atleta", "var(--pen)"], ["Sustancia", "esta estatua concreta", "var(--leaf)"], ["Accidente", "color, tamaño, lugar", "var(--muted)"], ["Potencia", "la semilla puede ser árbol", "var(--red)"]]),
    },
    {
      html: `<h3>El cambio: potencia y acto</h3><p>Para explicar el cambio sin caer en las paradojas de Parménides, Aristóteles distinguió entre <b>potencia</b> (lo que algo puede llegar a ser) y <b>acto</b> (lo que ya es). Una bellota es un roble <i>en potencia</i>; cuando crece, pasa a ser un roble <i>en acto</i>. El cambio es el paso de la potencia al acto. Además, todo tiene <mark>cuatro causas</mark>:</p>${tabla(["Causa", "Pregunta", "Ejemplo: una mesa"], [["Material", "¿De qué está hecha?", "madera"], ["Formal", "¿Qué es?", "la forma de mesa"], ["Eficiente", "¿Quién o qué la hizo?", "el carpintero"], ["Final", "¿Para qué?", "para comer o trabajar"]])}`,
    },
    {
      html: `<h3>Materialismo y espiritualismo</h3><p>Una gran pregunta metafísica es <b>de qué está hecha la realidad</b>. El <mark>materialismo</mark> sostiene que solo existe la materia: también la mente sería resultado del cerebro (Demócrito, muchos científicos actuales). El <mark>espiritualismo</mark> o idealismo afirma que existe además, o sobre todo, una realidad espiritual: alma, mente o Dios. El <b>dualismo</b>, como el de Descartes, defiende que hay dos sustancias distintas: el cuerpo (material) y la mente (pensante). Cómo se comunican es todavía un problema abierto.</p>`,
    },
    {
      html: `<h3>Metafísica hoy</h3><p>La metafísica no es cosa del pasado. Hoy se pregunta qué es el <b>tiempo</b> (¿existe solo el presente?), si la <b>conciencia</b> puede explicarse por la física del cerebro, si una inteligencia artificial podría tener mente, o si podríamos vivir en una <mark>simulación</mark>, como plantea el filósofo Nick Bostrom. La física cuántica también ha reavivado viejas preguntas sobre el azar y la naturaleza de la materia. Ninguna tiene respuesta cerrada, pero todas exigen pensar con rigor.</p>`,
    },
  ],
  figura: {
    titulo: "La caverna de Platón",
    svg: `<svg viewBox="0 0 680 220" role="img" aria-label="Prisioneros encadenados mirando sombras en la pared; detrás un fuego; a la derecha la salida hacia el sol">
      <rect width="680" height="220" rx="16" fill="var(--paper)"/>
      <path d="M20 200 V 40 Q 20 20 40 20 H 470 Q 500 20 500 60 V 200 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
      <rect x="34" y="50" width="70" height="120" rx="6" fill="var(--line)"/>
      ${[0, 1].map((i) => `<ellipse cx="${62 + i * 18}" cy="${108 + i * 6}" rx="10" ry="16" fill="var(--muted)" opacity=".7"/>`).join("")}
      ${[0, 1, 2].map((i) => `<circle cx="${150 + i * 34}" cy="128" r="10" fill="var(--ink)"/><rect x="${142 + i * 34}" y="138" width="16" height="30" rx="5" fill="var(--ink)"/>`).join("")}
      <path d="M250 112 H 330" stroke="var(--muted)" stroke-width="3"/><rect x="270" y="90" width="18" height="22" fill="var(--sun)"/><circle cx="310" cy="100" r="10" fill="var(--sun)"/>
      <path d="M380 170 q 12 -40 24 0 q -12 -16 -24 0" fill="var(--red)"/><path d="M386 170 q 6 -24 12 0" fill="var(--sun)"/>
      <circle cx="610" cy="70" r="30" fill="var(--sun)"/><path d="M500 140 Q 540 130 580 90" stroke="var(--sun)" stroke-width="3" fill="none" stroke-dasharray="6 5"/>
      <g ${F} font-size="13" font-weight="700" text-anchor="middle"><text x="69" y="190" fill="var(--muted)">sombras</text><text x="184" y="190" fill="var(--ink)">prisioneros</text><text x="300" y="80" fill="var(--sun)">objetos</text><text x="392" y="190" fill="var(--red)">fuego</text><text x="610" y="124" fill="var(--hl-ink)">Sol = Bien</text><text x="590" y="186" fill="var(--pen)">salida = educación</text></g>
    </svg>`,
  },
  video: { id: "PM0V9IuYDj8", titulo: "La Metafísica en Aristóteles", canal: "Unboxing Philosophy", vistas: 1715630, megusta: 0, busqueda: "metafísica qué es" },
  ejemplos: [
    { enunciado: "Aplica las cuatro causas de Aristóteles a un móvil.", pasos: ["Causa material: plástico, vidrio, metales y silicio.", "Causa formal: su diseño y estructura de teléfono.", "Causa eficiente: la fábrica y los ingenieros que lo montaron.", "Causa final: comunicarse e informarse."], resultado: "Material: componentes; formal: diseño; eficiente: fábrica; final: comunicar." },
    { enunciado: "Interpreta el mito de la caverna en clave actual: un adolescente que solo se informa por vídeos cortos de una red social.", pasos: ["Las sombras serían los vídeos: fragmentos de la realidad elegidos por un algoritmo.", "Las cadenas, la costumbre y la comodidad de no buscar más.", "Salir de la caverna sería contrastar fuentes, leer y pensar críticamente."], resultado: "La caverna representa quedarse en las apariencias; salir es educarse." },
    { enunciado: "Clasifica cada afirmación: a) «La mente es solo actividad cerebral». b) «Tenemos un cuerpo y un alma distintos». c) «Solo existe lo espiritual».", pasos: ["a) Reduce todo a materia: materialismo.", "b) Dos sustancias: dualismo.", "c) Lo real es espiritual: espiritualismo o idealismo."], resultado: "a) Materialismo; b) dualismo; c) espiritualismo." },
  ],
  errores: [
    "Pensar que «metafísica» significa algo esotérico o mágico: es el estudio racional de la realidad.",
    "Confundir las Ideas de Platón con pensamientos de nuestra cabeza: para él existen de verdad, fuera de nosotros.",
    "Creer que Aristóteles aceptó los dos mundos de su maestro: los rechazó.",
    "Confundir sustancia con «material» en sentido cotidiano: sustancia es la cosa concreta que existe por sí misma.",
    "Pensar que la caverna habla de una cueva real: es una alegoría de la ignorancia y la educación.",
  ],
  ejercicios: [
    { q: "¿De dónde viene la palabra «metafísica»?", sol: "Del título que dio un editor a los libros de Aristóteles colocados «después de la física» (meta ta physiká)." },
    { q: "Pon dos ejemplos de diferencia entre apariencia y realidad.", sol: "El Sol parece moverse, pero es la Tierra la que gira; una mesa parece maciza, pero está formada por átomos con mucho espacio vacío." },
    { q: "Describe el mundo sensible y el mundo de las Ideas de Platón.", sol: "El sensible es el que captan los sentidos: cambiante e imperfecto. El de las Ideas es eterno, perfecto e inmutable, y solo se conoce con la razón." },
    { q: "¿Qué representa cada elemento del mito de la caverna?", sol: "La caverna, el mundo sensible; las sombras, las apariencias; los prisioneros, la humanidad sin educar; la salida, la educación; el Sol, la Idea del Bien." },
    { q: "Explica la diferencia entre materia y forma con un ejemplo.", sol: "La materia es aquello de lo que algo está hecho y la forma, lo que lo hace ser lo que es. En una taza, la cerámica es la materia y la forma de taza, la forma." },
    { q: "¿Qué es un accidente según Aristóteles?", sol: "Una cualidad que puede cambiar sin que la cosa deje de ser lo que es, como el color o el tamaño." },
    { q: "Explica potencia y acto con un ejemplo distinto al de la bellota.", sol: "Un niño es un adulto en potencia; cuando crece, es adulto en acto. Un bloque de mármol es una estatua en potencia." },
    { q: "Escribe las cuatro causas de una bicicleta.", sol: "Material: metal, goma. Formal: su diseño de bicicleta. Eficiente: el fabricante. Final: desplazarse." },
    { q: "¿Qué diferencia hay entre materialismo y dualismo?", sol: "El materialismo dice que solo existe la materia; el dualismo, que existen dos sustancias: cuerpo y mente o alma." },
    { q: "Escribe un párrafo sobre si podríamos vivir en una simulación y cómo lo sabríamos.", sol: "Respuesta abierta. Debe dar razones: por ejemplo, que no podemos salir de nuestra experiencia para compararla, o que una simulación perfecta sería indistinguible de la realidad." },
  ],
  quiz: [
    { q: "La metafísica estudia…", o: ["la realidad en su conjunto", "solo los planetas", "las leyes del Estado"], a: 0, e: "Qué existe y qué es ser." },
    { q: "Para Platón, las Ideas son…", o: ["modelos perfectos y eternos", "pensamientos de cada persona", "objetos materiales"], a: 0, e: "Existen en un mundo propio." },
    { q: "En la caverna, el Sol representa…", o: ["la Idea del Bien", "el fuego", "el poder"], a: 0, e: "La Idea suprema." },
    { q: "Aristóteles pensaba que la realidad es…", o: ["dos mundos", "este mundo de sustancias", "una ilusión"], a: 1, e: "Rechazó los dos mundos." },
    { q: "La materia de una estatua de bronce es…", o: ["el bronce", "la figura", "el escultor"], a: 0, e: "Aquello de lo que está hecha." },
    { q: "Una semilla es un árbol…", o: ["en acto", "en potencia", "accidental"], a: 1, e: "Puede llegar a serlo." },
    { q: "La causa final responde a…", o: ["¿para qué?", "¿de qué?", "¿quién?"], a: 0, e: "El fin o propósito." },
    { q: "El dualismo de Descartes distingue…", o: ["cuerpo y mente", "agua y fuego", "Ideas y sombras"], a: 0, e: "Dos sustancias distintas." },
    { q: "Parménides pensaba que el cambio es…", o: ["lo único real", "una apariencia", "potencia"], a: 1, e: "El ser es inmutable." },
    { q: "La ontología es…", o: ["el estudio del ser", "el estudio de los astros", "una teoría política"], a: 0, e: "Parte central de la metafísica." },
  ],
  examen: [
    { q: "El color de tu pelo, según Aristóteles, es…", o: ["un accidente", "tu sustancia", "una Idea"], a: 0, e: "Puede cambiar y sigues siendo tú." },
    { q: "Salir de la caverna simboliza…", o: ["la educación", "un viaje", "la muerte"], a: 0, e: "Pasar de la apariencia al conocimiento." },
    { q: "Quien dice que la mente es solo cerebro defiende el…", o: ["materialismo", "idealismo", "dualismo"], a: 0, e: "Solo existe la materia." },
  ],
  feynman: ["Qué estudia la metafísica y por qué se llama así", "Los dos mundos de Platón y el mito de la caverna", "Sustancia, materia, forma, potencia y acto en Aristóteles", "Materialismo, espiritualismo y dualismo"],
  mapa: mapa("METAFÍSICA", "var(--ink)", [
    ["Qué es", "estudio del ser · ontología", "var(--pen)"],
    ["Platón", "dos mundos · caverna", "var(--sun)"],
    ["Aristóteles", "sustancia · potencia y acto", "var(--leaf)"],
    ["Hoy", "mente · tiempo · simulación", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Metafísica", "Rama de la filosofía que estudia la realidad en su conjunto y el ser."],
    ["Mundo de las Ideas", "Para Platón, el de los modelos perfectos y eternos."],
    ["Mito de la caverna", "Alegoría de Platón sobre la ignorancia y la educación."],
    ["Sustancia", "Para Aristóteles, la cosa concreta que existe por sí misma."],
    ["Materia y forma", "De qué está hecha una cosa y qué es."],
    ["Potencia y acto", "Lo que algo puede llegar a ser y lo que ya es."],
    ["Las cuatro causas", "Material, formal, eficiente y final."],
    ["Dualismo", "Teoría de que existen cuerpo y mente como sustancias distintas."],
  ],
  familias: ["Ved juntos un fragmento de Matrix o El show de Truman y comparadlo con la caverna.", "Elegid un objeto de casa y buscad sus cuatro causas.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Filosofía 4º ESO (optativa autonómica): el problema de la realidad, Platón y Aristóteles, materialismo y espiritualismo, debates metafísicos actuales (marco del RD 217/2022).",
    ideas: ["Representar el mito de la caverna con sombras chinescas.", "Cinefórum: Matrix o El show de Truman.", "Debate: ¿podría una IA tener mente?"],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Metafísica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Metaf%C3%ADsica" },
  ],
  revisado: "2026-11-12",
};
