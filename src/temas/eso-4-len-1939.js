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
