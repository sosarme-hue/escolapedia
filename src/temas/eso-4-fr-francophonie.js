// Francés 4º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "4-eso",
  titulo: "La francophonie",
  minutos: 35,
  objetivos: ["Saber dónde se habla francés en el mundo y por qué", "Conocer la Organisation internationale de la Francophonie", "Descubrir variedades del francés y figuras culturales francófonas"],
  claves: ["francophonie", "OIF", "francophone", "Québec", "Afrique", "Belgique", "Suisse", "20 mars"],
  pregunta: {
    texto: "¿En qué continente crees que vive hoy la mayoría de las personas que hablan francés: en Europa o en África?",
    respuesta: "<mark>En África</mark>. Más de la mitad de los francófonos vive allí, en países como la República Democrática del Congo, Costa de Marfil, Senegal o Camerún. El francés es mucho más que Francia: es una lengua de cinco continentes.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la francofonía?</h3><p>La palabra <b>francophonie</b> designa al conjunto de <mark>personas y países que hablan francés</mark>. Son unos <b>320 millones</b> de hablantes según la OIF, lo que la convierte en una de las lenguas más habladas del mundo y lengua oficial de una treintena de países.</p>`,
      svg: L.filas("Datos de la francofonía", [
        ["≈ 320 M", "hablantes de francés", "var(--pen)"], ["5", "continentes", "var(--leaf)"],
        ["≈ 30", "países con el francés oficial", "var(--red)"], ["20 mars", "Journée de la francophonie", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>¿Por qué se habla en tantos sitios?</h3><p>Por la <b>historia</b>: Francia y Bélgica tuvieron <mark>colonias</mark> en África, América, Asia y Oceanía. Tras la independencia, muchos países mantuvieron el francés como lengua oficial, de enseñanza o de comunicación entre pueblos que hablan lenguas distintas (wolof, lingala, árabe, criollo…).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de continentes francófonos con ejemplos de países">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <circle cx="130" cy="90" r="30" fill="var(--pen)"/><text x="130" y="95" font-size="14" fill="#fff">français</text>
          <g font-size="12">
            <rect x="12" y="16" width="86" height="36" rx="10" fill="var(--card)" stroke="var(--inf)" stroke-width="2"/><text x="55" y="31" fill="var(--inf)">Europe</text><text x="55" y="45" font-size="10" fill="var(--ink)">Belgique, Suisse</text>
            <rect x="162" y="16" width="86" height="36" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="205" y="31" fill="var(--red)">Amérique</text><text x="205" y="45" font-size="10" fill="var(--ink)">Québec, Haïti</text>
            <rect x="12" y="128" width="86" height="36" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="55" y="143" fill="var(--leaf)">Afrique</text><text x="55" y="157" font-size="10" fill="var(--ink)">Sénégal, Congo</text>
            <rect x="162" y="128" width="86" height="36" rx="10" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><text x="205" y="143" fill="var(--muted)">Océanie · Asie</text><text x="205" y="157" font-size="10" fill="var(--ink)">Polynésie</text>
          </g>
          <path d="M100 66 L 98 52 M160 66 L 162 52 M100 114 L 98 128 M160 114 L 162 128" stroke="var(--line)" stroke-width="3"/>
        </g></svg>`,
    },
    {
      html: `<h3>La OIF</h3><p>La <b>Organisation internationale de la Francophonie</b> (OIF) reúne a <mark>más de 80 Estados y gobiernos</mark> que comparten el francés y unos valores: democracia, derechos humanos, diversidad cultural y educación. El <b>20 de marzo</b> es la Journée internationale de la Francophonie.</p>`,
      svg: L.filas("La Organisation internationale de la Francophonie", [
        ["Qui ?", "plus de 80 États et gouvernements", "var(--pen)"],
        ["Quoi ?", "langue, éducation, démocratie", "var(--leaf)"],
        ["Quand ?", "fête le 20 mars", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Muchas formas de hablar francés</h3><p>Como el español, el francés tiene variedades. En <b>Bélgica y Suiza</b> se dice <i>septante</i> (70) y <i>nonante</i> (90) en lugar de <i>soixante-dix</i> y <i>quatre-vingt-dix</i>. En <b>Quebec</b>: <i>magasiner</i> (ir de compras), <i>un char</i> (un coche), <i>la fin de semaine</i> (el fin de semana).</p>`,
      svg: L.tabla("Palabras del francés de Francia, Bélgica y Quebec", ["France", "Belgique / Québec"], [
        ["soixante-dix", "septante (BE)"], ["quatre-vingt-dix", "nonante (BE)"], ["faire du shopping", "magasiner (QC)"], ["le week-end", "fin de semaine"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Cultura francófona</h3><p>Autores como el senegalés <b>Léopold Sédar Senghor</b> (poeta y presidente, impulsor de la <i>négritude</i>), el belga <b>Hergé</b> (Tintín), la quebequesa <b>Céline Dion</b>, el belga <b>Stromae</b> o la franco-maliense <b>Aya Nakamura</b>. La francofonía es también música, cómic, cine y gastronomía (poutine, moules-frites, thiéboudienne).</p>`,
      svg: L.filas("Figuras de la cultura francófona", [
        ["Senghor", "poésie · Sénégal", "var(--leaf)"], ["Hergé", "BD Tintin · Belgique", "var(--pen)"],
        ["Céline Dion", "chanson · Québec", "var(--red)"], ["Stromae", "musique · Belgique", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "El francés en cinco continentes",
    svg: L.columnas("Ejemplos de países francófonos por continente", [
      ["origen de la lengua", "EUROPE", ["France · Belgique", "Suisse · Luxembourg"], "var(--inf)"],
      ["la mayoría de hablantes", "AFRIQUE", ["Sénégal · Congo", "Côte d'Ivoire"], "var(--leaf)"],
      ["el francés de América", "AMÉRIQUE", ["Québec · Haïti", "Guyane"], "var(--red)"],
      ["islas del Pacífico", "OCÉANIE", ["Polynésie", "Vanuatu"], "var(--muted)"],
    ]),
  },
  video: { id: "mQvn8Vw-vAE", titulo: "Le français dans le monde (Karambolage)", canal: "ARTE", vistas: 389615, megusta: 7213, busqueda: "la francophonie" },
  quiz: [
    { q: "¿En qué continente vive la mayoría de francófonos?", o: ["Europa", "África", "América"], a: 1, e: "Más de la mitad vive en África." },
    { q: "¿Qué día se celebra la francofonía?", o: ["14 de julio", "20 de marzo", "1 de mayo"], a: 1, e: "Journée internationale de la Francophonie: 20 de marzo." },
    { q: "En Bélgica, 90 se dice…", o: ["quatre-vingt-dix", "nonante", "neuftante"], a: 1, e: "Nonante en Bélgica y Suiza." },
    { q: "¿Qué significa OIF?", o: ["Organisation internationale de la Francophonie", "Office international du français", "Olympiades internationales françaises"], a: 0, e: "Reúne a más de 80 Estados y gobiernos." },
    { q: "Hergé, creador de Tintín, era…", o: ["francés", "belga", "suizo"], a: 1, e: "Georges Remi, «Hergé», era belga." },
  ],
  examen: [
    { q: "¿Por qué se habla francés en Senegal?", o: ["Por la colonización francesa", "Por la cercanía a Francia", "Por casualidad"], a: 0, e: "Fue colonia francesa y mantuvo el francés como lengua oficial." },
    { q: "En Quebec, «magasiner» significa…", o: ["ir de compras", "trabajar", "almacenar"], a: 0, e: "Equivale a «faire du shopping»." },
    { q: "¿Qué país NO es francófono?", o: ["Suiza", "Haití", "Brasil"], a: 2, e: "En Brasil se habla portugués." },
  ],
  feynman: ["Qué es la francofonía y cuántos hablantes tiene", "Por qué se habla francés en África y América", "Qué hace la OIF", "Dos diferencias entre el francés de Francia y el de otros países"],
  mapa: mapa("FRANCOPHONIE", "var(--eso)", [
    ["Chiffres", "≈ 320 millions · 5 continents", "var(--pen)"],
    ["Histoire", "colonisation · indépendances", "var(--leaf)"],
    ["OIF", "plus de 80 membres · 20 mars", "var(--red)"],
    ["Variétés", "septante · magasiner", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Francophonie", "Conjunto de personas y países que hablan francés (unos 320 millones)."],
    ["OIF", "Organisation internationale de la Francophonie: más de 80 Estados y gobiernos."],
    ["20 de marzo", "Journée internationale de la Francophonie."],
    ["Septante y nonante", "70 y 90 en Bélgica y Suiza."],
    ["Léopold Sédar Senghor", "Poeta senegalés y presidente; impulsor de la négritude."],
  ],
  familias: ["Escuchad juntos una canción de Stromae o de un artista africano francófono.", "Buscad en el mapa tres países francófonos de África y apuntad su capital.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Interculturalidad: la francofonía, diversidad lingüística y cultural de los países de habla francesa (RD 217/2022, Segunda Lengua Extranjera 4º).",
    ideas: ["Exposición por grupos: cada uno presenta un país francófono.", "Escucha comparada de acentos (Quebec, Bélgica, Senegal).", "Celebrar el 20 de marzo con un mural de la clase."],
  },
  fuentes: [
    L.BOE,
    { t: "Organisation internationale de la Francophonie (OIF)", url: "https://www.francophonie.org/" },
    { t: "TV5MONDE Apprendre le français", url: "https://apprendre.tv5monde.com/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Situar los principales países y regiones francófonas por continentes", "Reconocer rasgos del francés de Quebec, Bélgica, Suiza y África", "Presentar un país francófono en francés"],
  bloques: [
    { tras: "¿Por qué se habla en tantos sitios?", html: `<h3>La francofonía por continentes</h3>${L.tb(["Continente", "Países y regiones"], [["Europa", "Francia, Bélgica (Valonia y Bruselas), Suiza (oeste), Luxemburgo, Mónaco"], ["América", "Quebec y Nuevo Brunswick (Canadá), Haití, Guayana Francesa, Martinica, Guadalupe"], ["África", "Senegal, Costa de Marfil, Malí, Camerún, R. D. del Congo, Madagascar; Marruecos, Argelia y Túnez como lengua muy usada"], ["Asia", "Vietnam, Camboya y Laos (historia), Líbano"], ["Oceanía e Índico", "Nueva Caledonia, Polinesia Francesa, Reunión, Mauricio, Seychelles"]])}<p>La <b>República Democrática del Congo</b> es el país francófono más poblado del mundo, por delante de Francia, y <b>Kinshasa</b> es la mayor ciudad francófona.</p>` },
    { tras: "Muchas formas de hablar francés", html: `<h3>El francés de Quebec</h3><p>En Quebec viven unos ocho millones de francófonos rodeados de inglés, y defienden su lengua con leyes estrictas: los carteles y los comercios deben estar en francés. Curiosamente, son más «puristas» que en Francia con los anglicismos:</p>${L.tb(["Quebec", "Francia", "Significado"], [["un courriel", "un e-mail, un mail", "correo electrónico"], ["magasiner", "faire du shopping", "ir de compras"], ["une fin de semaine", "un week-end", "fin de semana"], ["un char", "une voiture", "coche"], ["le déjeuner / le dîner / le souper", "le petit-déjeuner / le déjeuner / le dîner", "desayuno / comida / cena"], ["bienvenue", "de rien", "de nada"]])}<p>También tiene un acento muy reconocible y expresiones propias como «C'est <b>plate</b>» (es aburrido) o «<b>Tiguidou</b> !» (¡perfecto!).</p>` },
    { tras: "Muchas formas de hablar francés", html: `<h3>El francés en África</h3><p>Hoy más de la mitad de los francófonos del mundo vive en <b>África</b>, y se calcula que en 2050 serán una gran mayoría. En muchos países el francés convive con lenguas africanas (el wólof en Senegal, el lingala en el Congo, el bambara en Malí) y se usa en la escuela, la administración y los medios.</p><p>El francés africano ha creado palabras propias que han llegado al diccionario: <i>une <b>essencerie</b></i> (gasolinera, en Senegal), <i><b>enceinter</b></i> (dejar embarazada), <i><b>grotto</b></i> (persona rica), <i><b>go</b></i> (chica, en Costa de Marfil). Además, la música urbana francesa debe mucho a artistas de origen africano. El francés ya no «pertenece» a Francia: es una <mark>lengua compartida</mark> por cinco continentes.</p>` },
    { tras: "Cultura francófona", html: `<h3>Comidas y tradiciones francófonas</h3><ul><li><b>Bélgica</b>: las <i>moules-frites</i> (mejillones con patatas fritas), los gofres y el chocolate; la tradición del cómic (Tintín, los Pitufos, Lucky Luke).</li><li><b>Suiza</b>: la <i>fondue</i> y la <i>raclette</i> de queso, los relojes y el chocolate.</li><li><b>Quebec</b>: la <i>poutine</i> (patatas fritas con queso y salsa) y el sirope de arce (<i>sirop d'érable</i>) de las <i>cabanes à sucre</i>.</li><li><b>Senegal</b>: el <i>thiéboudienne</i>, arroz con pescado, plato nacional.</li><li><b>Marruecos</b>: el cuscús y el <i>tajine</i>.</li><li><b>Antillas</b>: la música zouk y el carnaval de Martinica.</li></ul><p>El 20 de marzo, Día de la Francofonía, muchos institutos organizan degustaciones y concursos con estas tradiciones.</p>` },
    { tras: "Cultura francófona", html: `<h3>Presentar un país francófono</h3><p>Una presentación oral de dos minutos puede seguir este guion, con frases hechas:</p><ol><li><b>Situación</b>: «Le Sénégal <b>se trouve</b> en Afrique de l'Ouest. <b>Sa capitale est</b> Dakar.»</li><li><b>Datos</b>: «Il y a environ 18 millions d'habitants. <b>On y parle</b> français et wolof.»</li><li><b>Historia</b>: «C'était une colonie française jusqu'en 1960.»</li><li><b>Cultura</b>: «<b>Il est célèbre pour</b> sa musique et son plat national, le thiéboudienne.»</li><li><b>Opinión</b>: «<b>J'aimerais</b> visiter Dakar parce que…»</li></ol><p>Fíjate en el pronombre <b>y</b> (allí): «on <b>y</b> parle français». Apoya la presentación con un mapa y fotos.</p>` },
  ],
  videos: [
    ["¿Qué es la francofonía?", L.vid("MIvbHbn-tQk", "La francophonie, qu'est-ce que c'est ?", "BONBON – Apprendre le français", 238008)],
    ["Cultura francófona", L.vid("c1vuo1TgqkY", "Chanson francophonie : hymne et ode à la francophonie", "Philippe", 1905021)],
  ],
  ejemplos: [
    ["Escribe tres frases sobre Quebec con los datos: Canadá, capital Quebec, 8 millones, sirope de arce.", ["Situación con se trouver: Le Québec se trouve au Canada.", "Capital y población: Sa capitale est Québec. Il y a environ huit millions d'habitants.", "Cultura con être célèbre pour: Il est célèbre pour son sirop d'érable."], "Le Québec se trouve au Canada. Sa capitale est Québec et il y a environ huit millions d'habitants. Il est célèbre pour son sirop d'érable."],
    ["«Traduce» al francés de Francia: «Cette fin de semaine, je vais magasiner et je t'envoie un courriel.»", ["fin de semaine → week-end.", "magasiner → faire du shopping.", "courriel → e-mail o mail."], "Ce week-end, je vais faire du shopping et je t'envoie un e-mail."],
    ["Explica por qué el francés se habla en Senegal.", ["Senegal fue colonia francesa hasta 1960.", "Tras la independencia, el francés siguió como lengua oficial, de la escuela y de la administración.", "Convive con lenguas africanas como el wólof, la más hablada en la calle."], "por la colonización francesa: tras la independencia se mantuvo como lengua oficial junto a las lenguas africanas."],
  ],
  errores: [
    "Pensar que la mayoría de francófonos vive en Francia: la mayoría vive en África.",
    "Creer que en toda Bélgica o Suiza se habla francés: en Bélgica también neerlandés y alemán; en Suiza, alemán, italiano y romanche.",
    "Considerar «incorrecto» el francés de Quebec o de África: son variedades legítimas.",
    "Decir *en Canada: se dice au Canada (masculino).",
    "Confundir la OIF (organización política) con la francofonía (el conjunto de hablantes).",
    "Pensar que las palabras propias de Quebec o de África son errores: muchas ya aparecen en los diccionarios franceses.",
  ],
  ejercicios: [
    ["Nombra un país francófono en cada continente.", "Europa: Bélgica. América: Haití (o Canadá/Quebec). África: Senegal. Asia: Líbano. Oceanía: Nueva Caledonia (Polinesia Francesa)."],
    ["¿Cuál es el país francófono más poblado?", "La República Democrática del Congo."],
    ["¿Qué significa «magasiner» en Quebec?", "Ir de compras (faire du shopping)."],
    ["En Quebec, ¿qué comida es «le dîner»?", "La comida del mediodía (en Francia, le déjeuner)."],
    ["Nombra dos lenguas africanas que conviven con el francés.", "El wólof (Senegal) y el lingala (Congo). También el bambara (Malí)."],
    ["¿Qué es la poutine?", "Un plato de Quebec: patatas fritas con queso en grano y salsa caliente."],
    ["Completa: «Au Sénégal, on ___ parle français et wolof.»", "y: on y parle (allí)."],
    ["¿Qué tres lenguas oficiales tiene Bélgica?", "Francés, neerlandés y alemán."],
    ["Escribe la frase de introducción para presentar Marruecos.", "Le Maroc se trouve en Afrique du Nord. Sa capitale est Rabat."],
    ["Explica qué quiere decir que el francés es una «lengua compartida».", "Que no pertenece solo a Francia: lo hablan y lo enriquecen personas de cinco continentes, cada una con su variedad."],
  ],
  quiz: [
    ["La mayor ciudad francófona del mundo es…", ["Kinshasa", "Lyon", "Montreal"], 0, "Capital de la R. D. del Congo."],
    ["«Un courriel» (Quebec) es…", ["un e-mail", "un coche", "una tienda"], 0, "Correo electrónico."],
    ["Las moules-frites son típicas de…", ["Bélgica", "Senegal", "Quebec"], 0, "Mejillones con patatas."],
    ["El sirope de arce es típico de…", ["Quebec", "Suiza", "Marruecos"], 0, "Cabanes à sucre."],
    ["¿Dónde vive hoy la mayoría de francófonos?", ["en África", "en Francia", "en América"], 0, "Más de la mitad."],
  ],
  tarjetas: [
    ["R. D. del Congo", "País francófono más poblado; Kinshasa, mayor ciudad francófona."],
    ["Francés de Quebec", "courriel, magasiner, fin de semaine; defiende el francés frente al inglés."],
    ["Se trouver / on y parle", "Para presentar un país: Le Sénégal se trouve…; on y parle wolof."],
  ],
});

// Nivel libro (4º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso4L7").libro(module.exports, {
  lectura: ["Un mismo idioma, cinco continentes", `<p>Imagina una videollamada entre cinco adolescentes: Aminata desde Dakar, Félix desde Montreal, Léa desde Lyon, Noah desde Bruselas y Kevin desde Guadalupe. Hablan de música, del instituto y de sus planes para el verano, y todos se entienden en francés. Pero si escuchas con atención, notarás diferencias: Félix dice «<i>c'est le fun</i>» y «<i>mon char</i>» para el coche; Noah cuenta «<i>septante, nonante</i>»; Aminata mezcla palabras del wolof; Kevin a veces cambia al criollo con su familia.</p><p>El francés no es solo la lengua de Francia. Se habla, en distintos grados, en una treintena de países donde es lengua oficial, y más de 320 millones de personas lo usan en todo el mundo. La mayoría de los francófonos no vive en Europa, sino en África, y las ciudades con más hablantes no son París ni Lyon, sino Kinshasa o Abiyán.</p><p>A ese conjunto de países, personas y culturas unidas por el francés se le llama <b>francophonie</b>. En este tema descubrirás por qué el francés llegó tan lejos, cómo cambia de un lugar a otro, qué tienen en común estas culturas y qué aportan al mundo. Al final, prepararás en francés la presentación de un país francófono.</p>`],
  mas: [
    ["<h3>¿Qué es la francofonía?</h3>", `<p>Conviene distinguir dos palabras: <b>francophonie</b>, con minúscula, es el conjunto de personas y territorios que hablan francés; <b>Francophonie</b>, con mayúscula, es la organización política que reúne a esos países (la OIF). El término lo inventó en el siglo XIX el geógrafo francés Onésime Reclus, que clasificaba a las poblaciones según la lengua que hablaban en casa. Hoy se celebra cada <b>20 de marzo</b>, la <i>Journée internationale de la Francophonie</i>.</p>`],
    ["<h3>Muchas formas de hablar francés</h3>", `<p>Ninguna variedad es «mejor» que otra: todas son francés correcto en su contexto. En los exámenes y textos formales se usa el francés estándar, pero conocer las variantes te ayudará a entender películas, canciones y vídeos de todo el mundo. Lo mismo ocurre en español: un mexicano, un argentino y un madrileño se entienden perfectamente, aunque usen palabras y acentos distintos.</p>`],
    ["<h3>Cultura francófona</h3>", `<p>La francofonía también se celebra con grandes eventos: los <b>Jeux de la Francophonie</b>, que cada cuatro años reúnen deporte y cultura; el festival de cine <b>FESPACO</b> en Uagadugú (Burkina Faso), el más importante de África; y las <b>Francofolies</b>, festivales de música en La Rochelle, Spa (Bélgica) y Montreal. Muchos premios literarios franceses, como el Goncourt, han premiado a autores nacidos fuera de Francia.</p>`],
    ["<h3>La OIF</h3>", `<p>La OIF nació en <b>1970</b> en Niamey (Níger) con el nombre de Agencia de Cooperación Cultural y Técnica, y hoy reúne a más de ochenta Estados y gobiernos, algunos como miembros de pleno derecho y otros como observadores (entre ellos, países donde apenas se habla francés pero que quieren estrechar lazos). Su sede está en París y sus objetivos son promover la lengua francesa, la paz, la democracia, la educación y el desarrollo sostenible.</p>`],
  ],
  svgs: [
    ["<h3>La francofonía por continentes</h3>", "Países francófonos por continentes", [["Europa", "Francia · Bélgica · Suiza"], ["África", "Senegal · RD Congo"], ["América", "Quebec · Haití"], ["Asia y Oceanía", "Líbano · Vanuatu"]]],
    ["<h3>El francés de Quebec</h3>", "Palabras del francés de Quebec", [["courriel", "e-mail (Francia: mail)"], ["magasiner", "ir de compras"], ["le dîner", "la comida del mediodía"], ["char", "coche (Francia: voiture)"]]],
    ["<h3>El francés en África</h3>", "El francés en África", [["Lengua oficial", "escuela, administración"], ["Convive con", "wolof · lingala · árabe"], ["Ciudad más grande", "Kinshasa"]]],
    ["<h3>Comidas y tradiciones francófonas</h3>", "Comidas francófonas", [["Bélgica", "moules-frites · gaufres"], ["Quebec", "poutine · sirop d'érable"], ["Senegal", "thiéboudienne"], ["Marruecos", "couscous · tajine"]]],
    ["<h3>Presentar un país francófono</h3>", "Frases para presentar un país", [["Situar", "Le Sénégal se trouve en Afrique."], ["Lenguas", "On y parle français et wolof."], ["Cultura", "Il est célèbre pour…"]]],
  ],
  bloques: [
    { tras: "<h3>¿Por qué se habla en tantos sitios?</h3>", html: `<h3>Breve historia de la lengua francesa</h3><p>El francés es, como el español, una <b>lengua romance</b>: nació del latín que hablaban los soldados y colonos romanos en la Galia. A ese latín se sumaron palabras de los galos (lengua celta) y, sobre todo, de los francos, un pueblo germánico que dio su nombre al país y a la lengua. El primer texto conservado en una lengua ya distinta del latín son los <b>Juramentos de Estrasburgo</b>, del año <b>842</b>.</p><p>Durante la Edad Media convivían muchas variedades: la <i>langue d'oïl</i> en el norte y la <i>langue d'oc</i> (occitano) en el sur, además del bretón, el vasco o el catalán en algunas zonas. El francés de París se fue imponiendo poco a poco. En <b>1539</b>, el rey Francisco I firmó la <b>Ordenanza de Villers-Cotterêts</b>, que obligaba a usar el francés en lugar del latín en los documentos oficiales. En <b>1635</b> se fundó la <b>Académie française</b>, encargada de fijar las normas de la lengua, y que todavía hoy publica su diccionario.</p><p>Entre los siglos XVII y XIX, el francés fue la lengua de la diplomacia y de la cultura en toda Europa: los reyes de Prusia o de Rusia lo hablaban en la corte. Al mismo tiempo, la expansión colonial lo llevó a América, África, Asia y Oceanía.</p>`, svg: ["Fechas clave de la lengua francesa", [["842", "Juramentos de Estrasburgo"], ["1539", "Villers-Cotterêts"], ["1635", "Académie française"], ["1970", "nace la OIF"]]] },
    { tras: "<h3>Muchas formas de hablar francés</h3>", html: `<h3>El francés en Europa, más allá de Francia</h3><p>En Europa, el francés es lengua oficial en <b>Francia, Bélgica, Suiza, Luxemburgo y Mónaco</b>, y se habla también en el valle de Aosta (Italia) y en las islas del Canal. Cada país tiene sus particularidades.</p><p>En <b>Bélgica</b> conviven tres lenguas oficiales: el neerlandés (en Flandes), el francés (en Valonia) y el alemán (en una pequeña zona del este); Bruselas es oficialmente bilingüe. Los belgas francófonos dicen <b>septante</b> (70) y <b>nonante</b> (90), mucho más lógicos que <i>soixante-dix</i> y <i>quatre-vingt-dix</i>, y llaman <i>déjeuner</i> al desayuno y <i>dîner</i> a la comida del mediodía. En <b>Suiza</b>, el francés es una de las cuatro lenguas nacionales (con el alemán, el italiano y el romanche) y se habla en la parte oeste, la <i>Suisse romande</i>, con ciudades como Ginebra y Lausana; en algunos cantones se dice incluso <b>huitante</b> (80).</p><p>En <b>Luxemburgo</b> se usan a diario tres lenguas: el luxemburgués, el francés y el alemán. Y Bruselas, Estrasburgo y Luxemburgo son sedes de instituciones de la Unión Europea, donde el francés es una de las lenguas de trabajo más usadas.</p>`, svg: ["Números en Francia, Bélgica y Suiza", [["70", "soixante-dix · septante"], ["80", "quatre-vingts · huitante (CH)"], ["90", "quatre-vingt-dix · nonante"]], "Francia · Bélgica / Suiza"] },
    { tras: "<h3>El francés en África</h3>", html: `<h3>El Caribe, el océano Índico y las lenguas criollas</h3><p>Francia conserva territorios fuera de Europa que forman parte del país: los departamentos y regiones de ultramar (<b>Guadalupe, Martinica, Guayana, La Reunión y Mayotte</b>) y otras colectividades como la Polinesia francesa o Nueva Caledonia. Sus habitantes son ciudadanos franceses y votan en las mismas elecciones que los de París.</p><p>En muchos de estos lugares, y también en <b>Haití</b>, se hablan <b>lenguas criollas</b> de base francesa. Nacieron en los siglos XVII y XVIII, en las plantaciones, cuando personas esclavizadas de distintos orígenes africanos necesitaban comunicarse entre ellas y con los colonos. Tomaron gran parte del vocabulario del francés, pero desarrollaron una gramática propia. Por ejemplo, en criollo haitiano «<i>Mwen renmen ou</i>» significa «Je t'aime». Hoy el criollo haitiano es lengua oficial junto al francés y lo habla toda la población.</p><p>En el océano Índico, la isla <b>Mauricio</b> y las <b>Seychelles</b> combinan el francés, el inglés y el criollo, y <b>Madagascar</b> tiene como lenguas oficiales el malgache y el francés. Estos territorios muestran que la francofonía es también una historia de mestizaje, con episodios dolorosos como la esclavitud que conviene conocer.</p>`, svg: ["Francés y criollos fuera de Europa", [["Caribe", "Guadalupe · Martinica · Haití"], ["Océano Índico", "La Reunión · Mauricio"], ["Pacífico", "Polinesia · Nueva Caledonia"], ["Criollo haitiano", "Mwen renmen ou"]]] },
    { tras: "<h3>Comidas y tradiciones francófonas</h3>", html: `<h3>Grandes figuras de la francofonía</h3><p>Muchas personas que han escrito, cantado o creado en francés no son de Francia. Algunos nombres que conviene conocer:</p><ul><li><b>Léopold Sédar Senghor</b> (Senegal): poeta y primer presidente de Senegal, uno de los impulsores de la francofonía y del movimiento de la <i>négritude</i>, que reivindicaba la cultura africana. Fue el primer africano en entrar en la Académie française.</li><li><b>Aimé Césaire</b> (Martinica): poeta y político, también fundador de la <i>négritude</i>.</li><li><b>Hergé</b> (Bélgica): creador de Tintín. Bélgica es la cuna del cómic francófono: Astérix se dibujó en Francia, pero los Pitufos, Lucky Luke y Spirou nacieron en Bélgica.</li><li><b>Céline Dion</b> (Quebec) y <b>Stromae</b> (Bélgica, de padre ruandés): dos de los artistas francófonos más escuchados del mundo.</li><li><b>Maryse Condé</b> (Guadalupe) y <b>Amin Maalouf</b> (Líbano): novelistas premiados que cuentan historias de mestizaje y de identidad.</li><li><b>Dany Laferrière</b> (Haití y Quebec): escritor, miembro de la Académie française.</li></ul><p>Escuchar a Stromae, leer un cómic belga o ver una película quebequesa es una manera fácil y divertida de practicar francés y de descubrir otras culturas.</p>`, svg: ["Figuras de la francofonía", [["Senghor", "poeta, Senegal"], ["Hergé", "Tintín, Bélgica"], ["Céline Dion", "cantante, Quebec"], ["Stromae", "cantante, Bélgica"]]] },
    { html: `<h3>El francés, una lengua de futuro</h3><p>El francés es la <b>quinta lengua más hablada</b> del mundo y una de las que más crece, gracias al aumento de la población en África. Según las previsiones de la OIF, en 2050 podría haber más de <b>700 millones</b> de francófonos, la mayoría de ellos africanos y muy jóvenes.</p><p>Además, el francés es una lengua <b>internacional</b>: es lengua oficial o de trabajo en la ONU, la Unión Europea, el Comité Olímpico Internacional, la Cruz Roja, la Unión Africana y muchas otras organizaciones. En los Juegos Olímpicos, los anuncios se hacen primero en francés, en honor a Pierre de Coubertin, el francés que creó los Juegos modernos. Es también la segunda lengua extranjera más estudiada del mundo, después del inglés.</p><p>Para un estudiante español, aprender francés abre muchas puertas: estudiar con una beca Erasmus en Francia, Bélgica o Suiza, trabajar en turismo, comercio internacional o cooperación, o entender mejor a nuestros vecinos más cercanos. Y como el francés y el español comparten origen latino, muchas palabras se parecen (<i>université, important, possible</i>), lo que facilita el aprendizaje, aunque cuidado con los falsos amigos como <i>la carte</i> (el mapa o la carta del restaurante, no una carta para enviar).</p>`, svg: ["Por qué aprender francés", [["Hablantes", "más de 320 millones"], ["En 2050", "más de 700 millones"], ["Organizaciones", "ONU · UE · COI"], ["Para ti", "Erasmus · trabajo · viajes"]]] },
  ],
  grupos: [3, 4, 3, 3, 2],
  ejemplos: [
    ["Presenta Bélgica en tres frases en francés: situación, lenguas y algo típico.", ["Situar con se trouve.", "Lenguas con on y parle.", "Algo típico con est célèbre pour."], "«La Belgique <b>se trouve</b> en Europe, entre la France et les Pays-Bas. <b>On y parle</b> français, néerlandais et allemand. Elle <b>est célèbre pour</b> ses frites, son chocolat et ses BD.»"],
    ["Escribe en francés estándar y en francés de Bélgica el número 97.", ["Francia: 80 + 17 → quatre-vingt-dix-sept.", "Bélgica: nonante + sept."], "Francia: <b>quatre-vingt-dix-sept</b>. Bélgica: <b>nonante-sept</b>."],
    ["Explica qué es una lengua criolla con un ejemplo.", ["Origen: contacto entre lenguas en las plantaciones.", "Vocabulario sobre todo francés, gramática propia.", "Ejemplo del criollo haitiano."], "Una lengua nacida del contacto entre el francés y lenguas africanas, con gramática propia. Ejemplo: «<b>Mwen renmen ou</b>» (Je t'aime) en criollo haitiano."],
  ],
  errores: [],
  niveles: "bbbmmbbmma",
  ejercicios: [
    ["b", "¿Qué día se celebra la Journée internationale de la Francophonie?", "El <b>20 de marzo</b>."],
    ["b", "Escribe en francés belga: 70, 90.", "<b>septante</b>, <b>nonante</b>."],
    ["b", "Nombra los cinco países europeos donde el francés es lengua oficial.", "Francia, Bélgica, Suiza, Luxemburgo y Mónaco."],
    ["b", "¿Qué lengua es el origen del francés y del español?", "El <b>latín</b>: las dos son lenguas romances."],
    ["b", "Completa: «Le Canada ___ trouve en Amérique du Nord.»", "Le Canada <b>se</b> trouve…"],
    ["b", "¿Quién creó Tintín y de qué país era?", "<b>Hergé</b>, belga."],
    ["b", "Traduce: «En Suiza se habla francés, alemán e italiano.»", "En Suisse, <b>on parle</b> français, allemand et italien."],
    ["m", "Ordena cronológicamente: Académie française, Juramentos de Estrasburgo, Villers-Cotterêts.", "Juramentos de Estrasburgo (842) → Villers-Cotterêts (1539) → Académie française (1635)."],
    ["m", "¿Qué diferencia hay entre «francophonie» y «Francophonie»?", "Con minúscula, el conjunto de hablantes y territorios; con mayúscula, la organización política (OIF)."],
    ["m", "Nombra tres territorios franceses de ultramar.", "Por ejemplo: Guadalupe, Martinica, La Reunión (también Guayana, Mayotte, Polinesia)."],
    ["m", "Completa con en, au o aux: «On parle français ___ Haïti, ___ Sénégal et ___ Seychelles.»", "<b>en</b> Haïti, <b>au</b> Sénégal, <b>aux</b> Seychelles."],
    ["m", "Escribe dos frases en francés sobre Quebec usando on y y.", "Ejemplo: «Au Québec, on parle français. On y mange de la poutine.»"],
    ["m", "¿Qué fue la négritude y quién la impulsó?", "Un movimiento literario y político que reivindicaba la cultura africana; lo impulsaron Senghor y Césaire."],
    ["m", "Explica por qué la mayoría de francófonos del futuro serán africanos.", "Porque la población de los países africanos francófonos es muy joven y crece rápidamente."],
    ["m", "Traduce: «El francés es lengua oficial de la ONU y de los Juegos Olímpicos.»", "Le français est une langue officielle de l'ONU et des Jeux olympiques."],
    ["m", "¿Por qué los anuncios de los Juegos Olímpicos se hacen primero en francés?", "En honor a Pierre de Coubertin, el francés que creó los Juegos modernos (y porque es lengua oficial del COI)."],
    ["m", "Nombra un festival o evento de la francofonía y di dónde se celebra.", "FESPACO en Uagadugú, las Francofolies en La Rochelle o Montreal, los Jeux de la Francophonie."],
    ["a", "Escribe en francés una ficha de 50 palabras sobre Senegal: situación, capital, lenguas, comida y algo famoso.", "Modelo: «Le Sénégal se trouve en Afrique de l'Ouest. Sa capitale est Dakar. On y parle français et wolof. Le plat typique est le thiéboudienne, à base de poisson et de riz. Le pays est célèbre pour sa musique et pour Léopold Sédar Senghor.»"],
    ["a", "Explica en castellano por qué la francofonía tiene también una parte dolorosa de su historia.", "Porque el francés se extendió con la colonización y, en el Caribe y el Índico, con la esclavitud; las lenguas criollas nacieron en ese contexto."],
    ["a", "Compara la situación del francés en Bélgica y en Suiza.", "En los dos es una de las lenguas oficiales en una parte del país (Valonia / Suisse romande); Bélgica tiene tres lenguas oficiales y Suiza cuatro. Los dos usan septante y nonante."],
    ["a", "Escribe un párrafo en francés (40 palabras) explicando por qué estudias francés.", "Modelo: «J'apprends le français parce que c'est une langue internationale. On le parle sur cinq continents. Plus tard, je voudrais faire un Erasmus en Belgique ou en Suisse et voyager en Afrique.»"],
    ["a", "Busca un falso amigo francés-español y explícalo con un ejemplo.", "Ejemplo: <i>la carte</i> = el mapa o la carta del restaurante, no una carta postal (une lettre). «Je regarde la carte du restaurant.»"],
    ["a", "Elige una figura francófona no francesa y escribe tres frases en francés sobre ella.", "Ejemplo: «Stromae est un chanteur belge. Son père était rwandais. Il chante en français et ses chansons parlent de la société.»"],
    ["a", "Explica la relación entre el criollo haitiano y el francés.", "El criollo toma gran parte de su vocabulario del francés, pero tiene gramática propia; en Haití los dos son oficiales y toda la población habla criollo."],
    ["a", "Prepara tres preguntas en francés para entrevistar a un estudiante de Quebec.", "Ejemplos: «Quelles langues est-ce que tu parles ?» «Qu'est-ce que tu manges au dîner ?» «Quelle est ta chanson québécoise préférée ?»"],
    ["a", "Debate en castellano: ¿debería España entrar en la OIF como observador? Da un argumento a favor y otro en contra.", "Respuesta abierta. A favor: lazos culturales y económicos con África y Europa francófona, promoción del aprendizaje del francés. En contra: el francés no es lengua oficial en España y ya pertenece a organizaciones como la UE."],
  ],
  cuartas: ["Asia", "25 de diciembre", "dix-neuf", "Organisation des industries françaises", "canadiense", "Marsella", "un plato típico", "Japón", "Túnez", "en Oceanía", "Por el turismo", "dormir", "Bélgica"],
  quiz: [
    ["El primer texto en francés antiguo son…", ["los Juramentos de Estrasburgo", "la Marsellesa", "el Código Civil", "los Miserables"], 0, "Del año 842."],
    ["La Académie française se fundó en…", ["1635", "842", "1789", "1970"], 0, "Fija las normas de la lengua."],
    ["En Suiza, el francés se habla sobre todo…", ["en el oeste", "en el este", "en el sur", "en ninguna parte"], 0, "La Suisse romande."],
    ["Un territorio francés de ultramar es…", ["Martinica", "Marruecos", "Senegal", "Quebec"], 0, "Martinica forma parte de Francia."],
    ["Una lengua criolla de base francesa se habla en…", ["Haití", "Bélgica", "Suiza", "Luxemburgo"], 0, "El criollo haitiano."],
    ["Senghor fue…", ["poeta y presidente de Senegal", "cantante belga", "creador de Tintín", "rey de Francia"], 0, "Impulsor de la négritude."],
    ["¿Cuántas lenguas oficiales tiene Bélgica?", ["tres", "una", "dos", "cuatro"], 0, "Neerlandés, francés y alemán."],
    ["En 2050 podría haber…", ["más de 700 millones de francófonos", "10 millones", "menos que hoy", "solo europeos"], 0, "Previsión de la OIF."],
    ["Los Pitufos y Lucky Luke nacieron en…", ["Bélgica", "Senegal", "Quebec", "Haití"], 0, "Cuna del cómic francófono."],
    ["«La carte» del restaurante es…", ["el menú", "una carta postal", "una tarjeta de crédito", "un sello"], 0, "Falso amigo."],
  ],
  examen: [
    ["El francés es una lengua…", ["romance", "germánica", "eslava", "celta"], 0, "Viene del latín."],
    ["¿Dónde vive hoy la mayoría de francófonos?", ["en África", "en Francia", "en Asia", "en Oceanía"], 0, "África."],
    ["«Nonante» significa…", ["90", "70", "80", "19"], 0, "Bélgica y Suiza."],
    ["Stromae es…", ["un cantante belga", "un escritor senegalés", "un rey suizo", "un pintor haitiano"], 0, "Artista belga de padre ruandés."],
    ["La Francophonie con mayúscula es…", ["la organización de países", "el conjunto de hablantes", "un festival", "una ciudad"], 0, "La OIF."],
  ],
  tarjetas: [
    ["Villers-Cotterêts (1539)", "El francés sustituye al latín en los documentos oficiales."],
    ["Lengua criolla", "Nacida del contacto entre lenguas, con vocabulario francés y gramática propia."],
    ["Négritude", "Movimiento de Senghor y Césaire que reivindica la cultura africana."],
    ["Francés en 2050", "Más de 700 millones de hablantes, sobre todo en África."],
  ],
  glosario: [
    ["francophonie", "Conjunto de personas y territorios que hablan francés."],
    ["Francophonie / OIF", "Organización internacional de los países francófonos."],
    ["francophone", "Persona o país que habla francés."],
    ["langue romane", "Lengua derivada del latín."],
    ["Académie française", "Institución fundada en 1635 que fija las normas del francés."],
    ["créole", "Lengua criolla nacida del contacto entre lenguas."],
    ["DOM-TOM / outre-mer", "Territorios franceses fuera de Europa."],
    ["Suisse romande", "Parte francófona de Suiza."],
    ["Wallonie", "Región francófona de Bélgica."],
    ["septante / nonante", "70 y 90 en Bélgica y Suiza."],
    ["négritude", "Movimiento literario que reivindica la identidad africana."],
    ["québécois", "Francés de Quebec."],
    ["colonisation", "Ocupación y dominio de territorios por otro país."],
    ["bande dessinée (BD)", "Cómic."],
  ],
  situacion: {
    titulo: "Feria virtual de la francofonía",
    reto: "Para celebrar el 20 de marzo, el instituto organiza una feria virtual de la francofonía. Cada grupo prepara un «stand» digital sobre un país o territorio francófono distinto de Francia, con información en francés, para que los visitantes lo descubran.",
    pasos: ["Elegid un país o territorio francófono (en África, América, Asia, Europa u Oceanía).", "Investigad su situación, lenguas, historia del francés allí, comida, música y una figura famosa.", "Redactad en francés una ficha de 150 palabras con frases de presentación (se trouve, on y parle, est célèbre pour).", "Añadid un mapa, fotos, una canción y una receta o palabra típica de la variante local.", "Grabad un vídeo de un minuto presentando el país en francés.", "Visitad los stands de los otros grupos y responded a un pequeño cuestionario."],
    producto: "Un stand digital con ficha en francés, recursos visuales y un vídeo de presentación.",
    evaluacion: ["La información sobre el país es correcta y está bien seleccionada.", "Usa en francés las estructuras para presentar un país con corrección.", "Muestra la diversidad lingüística y cultural de la francofonía con respeto.", "El vídeo es claro, con pronunciación comprensible."],
  },
  saberes: "Decret 175/2022 de Catalunya (Segona llengua estrangera, 4t d'ESO): consciència intercultural i diversitat lingüística del món francòfon.",
  minutos: 100,
});
