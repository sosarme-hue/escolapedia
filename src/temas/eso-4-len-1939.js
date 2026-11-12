// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "La literatura desde 1939 hasta hoy",
  minutos: 45,
  objetivos: ["Relacionar la literatura de posguerra con la dictadura, la censura y el exilio", "Seguir la evolución de la novela, la poesía y el teatro por décadas", "Conocer a autores actuales"],
  claves: ["posguerra", "exilio", "censura", "tremendismo", "realismo social", "novela experimental", "poesía de la experiencia", "Carmen Laforet"],
  pregunta: {
    texto: "Después de la Guerra Civil, muchos escritores no podían publicar lo que querían. ¿Cómo crees que se puede contar la verdad cuando hay censura?",
    respuesta: "Con mucho ingenio: usando <mark>símbolos</mark>, historias de gente corriente que muestran la pobreza sin decirlo directamente, o escribiendo desde el <mark>exilio</mark>. La literatura española de 1939 a 1975 aprendió a decir mucho con pocas palabras.",
  },
  bloques: [
    {
      html: `<h3>Contexto: guerra, dictadura y exilio</h3><p>Tras la Guerra Civil (1936-1939) empieza la dictadura de Franco, que dura hasta 1975. Hay <mark>censura</mark> y muchos autores parten al <b>exilio</b> (Alberti, Cernuda, Max Aub, María Zambrano). Con la <b>democracia</b> (Constitución de 1978) llega la libertad de expresión.</p>`,
      svg: L.linea("Décadas de la literatura española desde 1939", [
        ["40", "posguerra: angustia, tremendismo", "var(--muted)"],
        ["50", "realismo social", "var(--red)"],
        ["60", "experimentación", "var(--inf)"],
        ["75", "democracia: libertad", "var(--leaf)"],
        ["hoy", "pluralidad de voces", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>La novela</h3><p>En los 40, el <b>tremendismo</b> muestra la violencia (<i>La familia de Pascual Duarte</i>, Cela) y <b>Carmen Laforet</b> gana el primer Premio Nadal con <i>Nada</i> (1945). En los 50, el <mark>realismo social</mark> denuncia injusticias (<i>La colmena</i>, Cela; <i>El Jarama</i>, Sánchez Ferlosio). En los 60, la <b>novela experimental</b> (<i>Tiempo de silencio</i>, Martín-Santos). <b>Miguel Delibes</b> escribe <i>Los santos inocentes</i> (1981).</p>`,
      svg: L.tabla("Novelas importantes desde 1939", ["Novela", "Autor"], [
        ["Nada", "Carmen Laforet"], ["La colmena", "Camilo José Cela"], ["Los santos inocentes", "Miguel Delibes"], ["Tiempo de silencio", "Martín-Santos"],
      ], "var(--red)"),
    },
    {
      html: `<h3>La poesía</h3><p>En la posguerra conviven la <b>poesía arraigada</b> (serena, religiosa) y la <b>desarraigada</b> (angustiada: <i>Hijos de la ira</i>, Dámaso Alonso). En los 50 llega la <mark>poesía social</mark>: <b>Blas de Otero</b>, <b>Gabriel Celaya</b> («La poesía es un arma cargada de futuro»). Después, <b>Gloria Fuertes</b>, <b>Jaime Gil de Biedma</b>, los <i>novísimos</i> y la <b>poesía de la experiencia</b> (Luis García Montero).</p>`,
      svg: L.filas("Etapas de la poesía desde 1939", [
        ["Años 40", "arraigada · desarraigada", "var(--muted)"],
        ["Años 50", "poesía social: Celaya, Otero", "var(--red)"],
        ["Años 60-70", "Gil de Biedma · novísimos", "var(--inf)"],
        ["Desde 1980", "poesía de la experiencia", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>El teatro</h3><p>Junto al teatro comercial de humor (<b>Miguel Mihura</b>, <i>Tres sombreros de copa</i>), aparece un teatro crítico: <b>Antonio Buero Vallejo</b> (<i>Historia de una escalera</i>, 1949) muestra la frustración de varias generaciones de vecinos. <b>Alfonso Sastre</b> y, más tarde, <b>Fernando Arrabal</b> experimentan con nuevas formas.</p>`,
      svg: L.filas("Teatro desde 1939", [
        ["Humor", "Mihura: Tres sombreros de copa", "var(--leaf)"],
        ["Realista", "Buero: Historia de una escalera", "var(--red)"],
        ["Vanguardia", "Arrabal: teatro pánico", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>La literatura actual</h3><p>Desde 1975 hay <mark>libertad y gran variedad</mark>: novela histórica, policiaca, autoficción y muchas autoras. Algunos nombres: <b>Eduardo Mendoza</b>, <b>Almudena Grandes</b>, <b>Javier Marías</b>, <b>Arturo Pérez-Reverte</b>, <b>Rosa Montero</b>, <b>Elvira Lindo</b> y <b>Antonio Muñoz Molina</b>. El Premio Cervantes reconoce cada año a un gran autor en español.</p>`,
      svg: L.tabla("Autores actuales y una obra", ["Autor", "Obra"], [
        ["E. Mendoza", "Sin noticias de Gurb"], ["A. Grandes", "El corazón helado"], ["E. Lindo", "Manolito Gafotas"], ["A. Pérez-Reverte", "El capitán Alatriste"],
      ], "var(--pen)"),
    },
  ],
  figura: {
    titulo: "De la posguerra a hoy",
    svg: L.eje("Obras clave desde 1939 hasta hoy", [
      ["1945", "Nada", ["Carmen Laforet", "posguerra"], "var(--muted)"],
      ["1949", "Escalera", ["Buero Vallejo", "teatro"], "var(--red)"],
      ["1951", "La colmena", ["Cela", "realismo social"], "var(--inf)"],
      ["1981", "Santos inocentes", ["Delibes"], "var(--leaf)"],
      ["hoy", "Pluralidad", ["novela, poesía", "y teatro libres"], "var(--pen)"],
    ]),
  },
  video: { id: "bfVvGDK-Mes", titulo: "La novela española de 1939 a 1974: resumen", canal: "Clases Particulares en Ávila", vistas: 71326, megusta: 0, busqueda: "literatura española de posguerra desde 1939" },
  quiz: [
    { q: "¿Qué dos hechos marcan la literatura de posguerra?", o: ["Censura y exilio", "Romanticismo y Realismo", "Ilustración y Neoclasicismo"], a: 0, e: "La dictadura impuso censura y muchos autores se exiliaron." },
    { q: "¿Quién escribió Nada, primer Premio Nadal?", o: ["Carmen Laforet", "Gloria Fuertes", "Almudena Grandes"], a: 0, e: "Carmen Laforet, 1945." },
    { q: "El realismo social de los años 50 busca…", o: ["denunciar injusticias", "imitar a los clásicos", "evadirse de la realidad"], a: 0, e: "Muestra la pobreza y la desigualdad." },
    { q: "Historia de una escalera es una obra de…", o: ["Buero Vallejo", "Mihura", "Delibes"], a: 0, e: "Antonio Buero Vallejo, 1949." },
    { q: "«La poesía es un arma cargada de futuro» resume la poesía…", o: ["social", "pura", "modernista"], a: 0, e: "Es un verso de Gabriel Celaya." },
  ],
  examen: [
    { q: "El tremendismo se asocia con…", o: ["La familia de Pascual Duarte", "Platero y yo", "La Regenta"], a: 0, e: "Novela de Cela (1942) llena de violencia." },
    { q: "¿Qué novela de los 60 inicia la renovación experimental?", o: ["Tiempo de silencio", "Nada", "El Jarama"], a: 0, e: "Luis Martín-Santos, 1962." },
    { q: "Desde 1975, la literatura española se caracteriza por…", o: ["la variedad y la libertad", "un único movimiento", "la censura"], a: 0, e: "Conviven géneros y estilos muy distintos." },
  ],
  feynman: ["Cómo influyeron la censura y el exilio", "La evolución de la novela por décadas", "Qué es la poesía social", "Tres autores actuales y una obra de cada uno"],
  mapa: mapa("DESDE 1939", "var(--eso)", [
    ["Novela", "Laforet · Cela · Delibes", "var(--red)"],
    ["Poesía", "social · experiencia", "var(--inf)"],
    ["Teatro", "Buero Vallejo · Mihura", "var(--leaf)"],
    ["Hoy", "Mendoza · Grandes · Lindo", "var(--pen)"],
  ], 240),
  tarjetas: [
    ["Tremendismo", "Corriente de los años 40 que muestra la violencia y la miseria con crudeza."],
    ["Realismo social", "Literatura de los años 50 que denuncia las injusticias de la sociedad."],
    ["Nada", "Novela de Carmen Laforet (1945), primer Premio Nadal."],
    ["Historia de una escalera", "Drama de Buero Vallejo (1949) sobre vecinos frustrados de tres generaciones."],
    ["Poesía de la experiencia", "Poesía desde los 80 que cuenta vivencias cotidianas con lenguaje cercano."],
  ],
  familias: ["Preguntad a los abuelos qué libros o autores recuerdan de su juventud.", "Leed juntos un capítulo de Manolito Gafotas o Sin noticias de Gurb y comentad el humor.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación literaria: la literatura española desde 1939 hasta la actualidad; lectura de obras completas y fragmentos (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Línea del tiempo colaborativa con portadas de libros por década.", "Comparar la censura de entonces con los debates actuales sobre libertad de expresión.", "Club de lectura con una novela actual elegida por votación."],
  },
  fuentes: [
    L.BOE,
    { t: "Biblioteca Virtual Miguel de Cervantes: Miguel Delibes", url: "https://www.cervantesvirtual.com/portales/miguel_delibes/" },
    { t: "Literatura española de posguerra, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Literatura_de_la_posguerra_espa%C3%B1ola" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Explicar la evolución de la novela de 1940 a hoy por décadas", "Comentar un fragmento de posguerra", "Conocer a las autoras más importantes del periodo"],
  bloques: [
    { tras: "Contexto: guerra, dictadura y exilio", html: `<h3>La literatura del exilio</h3><p>Al terminar la guerra, cerca de medio millón de españoles cruzaron la frontera. Muchos escritores se instalaron en <b>México</b>, Argentina o Francia y siguieron escribiendo lejos de casa. Sus temas son la <b>nostalgia</b> de España, la reflexión sobre la guerra y la vida en el destierro. Destacan los poetas del 27 (Alberti, Cernuda, Salinas, Guillén), el novelista <b>Max Aub</b> (la serie <i>El laberinto mágico</i>), <b>Ramón J. Sender</b> (<i>Réquiem por un campesino español</i>, 1953, sobre un cura que delata a un joven del pueblo) y la filósofa <b>María Zambrano</b>. Durante años, sus libros no pudieron leerse en España por la censura.</p>` },
    { tras: "La novela", html: `<h3>La novela, década a década</h3>${L.tb(["Década", "Corriente", "Obras"], [["1940", "existencial y tremendista", "La familia de Pascual Duarte (Cela, 1942), Nada (Laforet, 1945)"], ["1950", "realismo social", "La colmena (Cela, 1951), El Jarama (Sánchez Ferlosio, 1955), Entre visillos (Martín Gaite, 1958)"], ["1960", "experimental", "Tiempo de silencio (Martín-Santos, 1962), Cinco horas con Mario (Delibes, 1966)"], ["desde 1975", "pluralidad y vuelta a la narración", "La verdad sobre el caso Savolta (Mendoza, 1975), Los girasoles ciegos (Méndez, 2004)"]])}<p>En los 60 los novelistas, cansados del realismo social, experimentan con la forma: monólogo interior, saltos en el tiempo, párrafos larguísimos, segunda persona. <b>Miguel Delibes</b> (<i>El camino</i>, <i>Los santos inocentes</i>) recorre todas las etapas con un estilo personal, centrado en el mundo rural castellano.</p>` },
    { tras: "La poesía", html: `<h3>De los 60 a hoy</h3><p>En los años 60 aparece la <b>poesía del conocimiento</b> o «Generación del 50»: Jaime Gil de Biedma, Ángel González, José Agustín Goytisolo, Claudio Rodríguez. Escriben sobre la experiencia personal, con ironía y lenguaje coloquial; la poesía es un modo de conocerse. Después llegan los <b>novísimos</b> (Pere Gimferrer, Guillermo Carnero), que en 1970 apuestan por la cultura de masas (el cine, el cómic) y un estilo brillante y culturalista.</p><p>Desde los 80 domina la <b>poesía de la experiencia</b>, cercana y narrativa (Luis García Montero), junto a muchas voces femeninas: <b>Gloria Fuertes</b>, que escribió para niños y adultos, Ana Rossetti o Luisa Castro. Más recientemente, la poesía ha llegado a las redes sociales y a recitales con mucho público.</p>` },
    { tras: "El teatro", html: `<h3>Historia de una escalera</h3><p>Antonio Buero Vallejo estrenó esta obra en 1949. Transcurre en la <b>escalera de una casa de vecinos humildes</b> de Madrid a lo largo de treinta años, en tres actos (1919, 1929 y 1949). Fernando y Urbano, dos jóvenes del inmueble, sueñan con salir de allí: uno quiere ser ingeniero y rico, el otro confía en la lucha sindical. Al final, ambos se han casado con la mujer equivocada y siguen en la misma escalera, igual de pobres. En la última escena, sus hijos se prometen lo mismo que ellos se prometieron.</p><p>La escalera es un <mark>símbolo de la inmovilidad</mark> social y del fracaso. Buero muestra así, de forma indirecta para burlar la censura, la falta de oportunidades de la España de posguerra.</p>` },
    { tras: "La literatura actual", html: `<h3>Las autoras del periodo</h3><p>Las mujeres tuvieron un papel decisivo, a pesar de las dificultades. <b>Carmen Laforet</b> abrió la novela de posguerra con <i>Nada</i>. <b>Ana María Matute</b> retrató la infancia herida por la guerra (<i>Primera memoria</i>) y ganó el Premio Cervantes en 2010. <b>Carmen Martín Gaite</b> contó la vida gris de las jóvenes de provincias en <i>Entre visillos</i> y, ya en democracia, escribió <i>El cuarto de atrás</i>. <b>Elena Fortún</b> creó a Celia para lectores jóvenes, y en la actualidad autoras como Almudena Grandes, Rosa Montero, Elvira Lindo, Dolores Redondo o Irene Vallejo son de las más leídas. La poeta <b>Cristina Peri Rossi</b> (uruguaya, residente en Barcelona) obtuvo el Premio Cervantes 2021.</p>` },
  ],
  videos: [
    ["La poesía", L.vid("By9A7IfGypE", "La poesía de 1939 hasta final del siglo XX", "A toda leche", 46697)],
    ["Historia de una escalera", L.vid("vnAP5HE0gNs", "Teatro para ti: «Historia de una escalera»", "Ministerio de Cultura", 138750)],
  ],
  ejemplos: [
    ["Clasifica: una novela de 1951 con más de 300 personajes que retrata un día del Madrid de posguerra en un café.", ["La fecha (1951) la sitúa en los años 50.", "Muchos personajes y un retrato colectivo: protagonista colectivo.", "Muestra el hambre y la miseria de forma objetiva."], "es La colmena, de Cela: novela del realismo social."],
    ["Explica el simbolismo de la escalera en Historia de una escalera.", ["Una escalera sirve para subir, pero los personajes no suben nunca: siguen en el mismo lugar treinta años.", "Representa la falta de ascenso social y los sueños frustrados.", "El final, con los hijos repitiendo las promesas, sugiere un ciclo que no se rompe."], "la escalera simboliza la inmovilidad social y el fracaso de varias generaciones."],
    ["Comenta el verso de Celaya: «La poesía es un arma cargada de futuro».", ["La poesía se compara con un arma: tiene fuerza para cambiar cosas.", "«Cargada de futuro» indica que su objetivo es transformar la sociedad.", "Es un manifiesto de la poesía social de los años 50."], "resume la poesía social: el poema como herramienta de cambio y denuncia."],
  ],
  errores: [
    "Pensar que la literatura española se detuvo en 1939: siguió dentro y fuera de España.",
    "Confundir la novela tremendista de los 40 con el realismo social de los 50.",
    "Olvidar el papel de la censura: muchos autores escribían de forma indirecta.",
    "Atribuir Nada a Ana María Matute: es de Carmen Laforet.",
    "Creer que la literatura actual sigue una sola corriente: se caracteriza por la variedad.",
  ],
  ejercicios: [
    ["¿Qué es el tremendismo?", "Una corriente de los años 40 que muestra la violencia y la crudeza de la realidad, como en La familia de Pascual Duarte."],
    ["Explica la diferencia entre poesía arraigada y desarraigada.", "La arraigada muestra un mundo ordenado y armonioso, a menudo religioso; la desarraigada expresa angustia y desesperación ante un mundo caótico."],
    ["Nombra dos novelas del realismo social.", "La colmena (Cela) y El Jarama (Sánchez Ferlosio). También Entre visillos (Martín Gaite)."],
    ["¿Qué tiene de experimental Tiempo de silencio?", "Usa monólogo interior, frases muy largas, vocabulario culto y cambios de punto de vista, frente a la narración lineal del realismo social."],
    ["¿Por qué muchos escritores tuvieron que exiliarse?", "Porque habían apoyado a la República y temían la represión del régimen de Franco tras la guerra."],
    ["Resume Réquiem por un campesino español.", "Mosén Millán, el cura de un pueblo aragonés, recuerda a Paco, a quien bautizó y casó, y a quien delató durante la guerra, lo que provocó su fusilamiento."],
    ["¿Qué rasgos tiene la poesía del conocimiento?", "Habla de la experiencia personal con ironía y lenguaje coloquial; entiende la poesía como una forma de conocerse a uno mismo."],
    ["¿Quién es Miguel Delibes y por qué es importante?", "Un novelista vallisoletano que retrata el mundo rural castellano (El camino, Los santos inocentes) y pasa por todas las etapas de la novela de posguerra."],
    ["Nombra tres escritoras del periodo y una obra de cada una.", "Carmen Laforet (Nada), Ana María Matute (Primera memoria), Carmen Martín Gaite (Entre visillos)."],
    ["¿Qué cambia en la literatura desde 1975?", "Desaparece la censura, vuelven los exiliados, se recupera el gusto por contar historias y aparece una gran variedad de géneros: novela histórica, policiaca, autoficción."],
  ],
  quiz: [
    ["Tiempo de silencio (1962) es una novela…", ["experimental", "tremendista", "romántica"], 0, "Rompe con el realismo social."],
    ["Historia de una escalera abarca…", ["treinta años", "un solo día", "un siglo"], 0, "1919, 1929 y 1949."],
    ["Réquiem por un campesino español es de…", ["Ramón J. Sender", "Cela", "Delibes"], 0, "Escrita en el exilio (1953)."],
    ["¿Quién ganó el Premio Cervantes en 2010?", ["Ana María Matute", "Carmen Laforet", "Gloria Fuertes"], 0, "Autora de Primera memoria."],
    ["Los novísimos aparecen hacia…", ["1970", "1940", "1898"], 0, "Antología de Castellet (1970)."],
  ],
  tarjetas: [
    ["Literatura del exilio", "Obras escritas fuera de España tras 1939: Sender, Max Aub, Alberti, Cernuda."],
    ["Novela experimental", "Años 60: monólogo interior, saltos en el tiempo (Tiempo de silencio)."],
    ["Ana María Matute", "Primera memoria; Premio Cervantes 2010."],
  ],
});
