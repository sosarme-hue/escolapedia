// Inglés 1º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { tema, L, F, tabla } = require("./_eso1d");
const V = require("./_eso1d-videos");

// Árbol genealógico sencillo.
const arbolFam = `<svg viewBox="0 0 260 180" role="img" aria-label="Árbol de familia: abuelos, padres, tía, el chico protagonista, su hermana y su primo">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <g stroke="var(--line)" stroke-width="2" fill="none">
    <path d="M104 34 H 156 M130 34 V 58 M76 58 H 190 M76 58 V 76 M190 58 V 76 M76 100 V 118 M42 118 H 110 M42 118 V 136 M110 118 V 136 M190 100 V 136"/>
  </g>
  <g ${F} font-size="10.5" text-anchor="middle">
    ${[[80, 26, "grandpa", "var(--muted)"], [180, 26, "grandma", "var(--muted)"], [76, 88, "dad · mum", "var(--pen)"], [190, 88, "aunt", "var(--leaf)"], [42, 148, "ME", "var(--red)"], [110, 148, "sister", "var(--pen)"], [190, 148, "cousin", "var(--leaf)"]].map(([x, y, t, c]) => `<rect x="${x - 34}" y="${y - 14}" width="68" height="24" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2"/><text x="${x}" y="${y + 3}" font-weight="700" fill="var(--ink)">${t}</text>`).join("")}
  </g>
</svg>`;

module.exports = tema({
  materia: "Inglés",
  titulo: "Vocabulary: family, school and hobbies",
  objetivos: ["Nombrar a los miembros de la familia y describir relaciones", "Usar el vocabulario del instituto: asignaturas, material y lugares", "Hablar de aficiones con play, go y do", "Aplicar estrategias para aprender y recordar vocabulario"],
  claves: ["parents", "grandparents", "cousin", "aunt / uncle", "subjects", "timetable", "school supplies", "hobbies", "play / go / do", "collocations", "false friends"],
  pregunta: [
    "En español tenemos «padres», «tíos» o «primos», y en inglés hay palabras muy parecidas. Pero ¿sabías que «parents» no significa «parientes», sino «padres»? ¿Por qué hay que tener cuidado con estas palabras?",
    "Porque son <mark>falsos amigos</mark>: palabras que se parecen a una española pero significan otra cosa. <b>Parents</b> son padre y madre; los parientes son <b>relatives</b>. Otros ejemplos: <b>library</b> (biblioteca, no librería) o <b>carpet</b> (alfombra, no carpeta). Aprender vocabulario por temas y con ejemplos ayuda a no caer en la trampa.",
  ],
  bloques: [
    ["La familia", `<p>Los miembros de la <mark>familia</mark> en inglés: <b>mother / mum</b> (madre / mamá), <b>father / dad</b> (padre / papá), <b>parents</b> (padres), <b>brother</b> (hermano), <b>sister</b> (hermana), <b>son</b> (hijo), <b>daughter</b> (hija), <b>grandfather / grandpa</b>, <b>grandmother / grandma</b>, <b>grandparents</b> (abuelos), <b>uncle</b> (tío), <b>aunt</b> (tía), <b>cousin</b> (primo o prima, la misma palabra para los dos), <b>nephew</b> (sobrino) y <b>niece</b> (sobrina).</p><p>Ojo: en español «hermanos» puede incluir chicos y chicas, pero en inglés se dice <b>brothers and sisters</b> o <b>siblings</b>. «¿Tienes hermanos?» → «Have you got any brothers or sisters?».</p>`,
      arbolFam],
    ["Hablar de la familia", `<p>Para hablar de tu familia, combina el vocabulario con el <b>genitivo sajón</b> y los posesivos: «Laura is my <b>mum's sister</b>, so she's my <b>aunt</b>», «My <b>cousins'</b> names are Hugo and Vera».</p><p>Hay familias de muchos tipos, y el inglés tiene palabras para ellas: <b>stepmother / stepfather</b> (madrastra / padrastro, la pareja de tu padre o tu madre), <b>stepbrother / stepsister</b>, <b>half-brother / half-sister</b> (medio hermano), <b>only child</b> (hijo único), <b>twins</b> (gemelos o mellizos) y <b>relatives</b> (parientes). Ejemplos: «I'm an only child», «My best friend has got twin brothers», «I live with my mum and my stepdad».</p>`,
      L.filas("Más palabras de familia", [["only child", "hijo o hija único", "var(--pen)"], ["twins", "gemelos o mellizos", "var(--leaf)"], ["stepdad", "pareja de tu madre", "var(--sun)"], ["relatives", "parientes", "var(--red)"]]), V.in12b],
    ["Las asignaturas", `<p>Las <mark>asignaturas</mark> (subjects) de 1º de ESO en inglés: <b>Maths</b> (Matemáticas), <b>Spanish</b> (Lengua castellana), <b>English</b>, <b>Science</b> o <b>Biology and Geology</b>, <b>Geography and History</b>, <b>PE</b> (Physical Education, Educación Física), <b>Music</b>, <b>Art</b> (Plástica), <b>Technology</b>, <b>French</b> o <b>German</b> y <b>Religion</b>. Los nombres de asignaturas que son idiomas van con mayúscula.</p><p>El horario se llama <b>timetable</b>: «On Mondays we've got Maths, English and PE». Para hablar de preferencias: «My favourite subject is Art», «I'm good at Maths» (se me dan bien las mates), «I'm bad at Music».</p>`,
      tabla(["Inglés", "Español"], [["Maths", "Matemáticas"], ["PE", "Educación Física"], ["Art", "Plástica"], ["Geography and History", "Geografía e Historia"], ["Science", "Ciencias (Biología y Geología)"], ["Technology", "Tecnología"]])],
    ["El material y los lugares del instituto", `<p>El <mark>material escolar</mark> (school supplies): <b>pen</b> (bolígrafo), <b>pencil</b> (lápiz), <b>rubber</b> (goma; en EE. UU., eraser), <b>pencil case</b> (estuche), <b>ruler</b> (regla), <b>sharpener</b> (sacapuntas), <b>notebook</b> (cuaderno), <b>folder</b> (carpeta), <b>scissors</b> (tijeras), <b>glue</b> (pegamento), <b>calculator</b>, <b>schoolbag</b> (mochila) y <b>textbook</b> (libro de texto).</p><p>Los <mark>lugares</mark> del instituto: <b>classroom</b> (aula), <b>gym</b> (gimnasio), <b>library</b> (biblioteca), <b>lab</b> (laboratorio), <b>playground</b> (patio), <b>canteen</b> (comedor), <b>staff room</b> (sala de profesores), <b>toilets</b> (baños) y <b>corridor</b> (pasillo). Recuerda: carpeta es <i>folder</i>, no «carpet».</p>`,
      L.filas("Falsos amigos del instituto", [["folder", "carpeta (no carpet)", "var(--red)"], ["library", "biblioteca", "var(--pen)"], ["rubber", "goma de borrar", "var(--leaf)"], ["lab", "laboratorio", "var(--sun)"]])],
    ["Frases útiles en clase", `<p>En clase de inglés conviene saber pedir ayuda y entender las <mark>instrucciones</mark>. Para el alumno: «Can you repeat that, please?» (¿puede repetirlo?), «How do you say ‘regla’ in English?», «What does ‘timetable’ mean?» (¿qué significa…?), «How do you spell it?» (¿cómo se escribe?), «Can I go to the toilet, please?», «Sorry, I don't understand».</p><p>Instrucciones del profesor: «Open your books at page 20», «Work in pairs» (en parejas), «Listen and repeat», «Match the words» (relaciona), «Fill in the gaps» (completa los huecos), «Underline» (subraya), «Hand in your homework» (entregad los deberes).</p>`,
      L.dialogo("Pedir ayuda en clase", [["Alumna", "How do you say «regla»?", "var(--pen)"], ["Profe", "Ruler.", "var(--leaf)"], ["Alumna", "How do you spell it?", "var(--pen)"], ["Profe", "R-U-L-E-R.", "var(--leaf)"]])],
    ["Las aficiones: play, go, do", `<p>Para hablar de <mark>aficiones</mark> (hobbies) usamos tres verbos. <b>Play</b> con juegos y deportes de pelota o de competición: play football, play basketball, play chess, play video games; y <b>play the</b> con instrumentos: play the guitar.</p><p><b>Go</b> + <b>-ing</b> con actividades que implican desplazarse: go swimming, go cycling, go skating, go hiking (senderismo), go shopping, go fishing. <b>Do</b> con actividades individuales, artes marciales y deportes sin pelota: do karate, do judo, do yoga, do gymnastics, do athletics, do ballet. Otras aficiones usan su propio verbo: <b>read</b>, <b>draw</b>, <b>paint</b>, <b>dance</b>, <b>sing</b>, <b>cook</b>, <b>take photos</b>.</p>`,
      L.tabla("Play, go y do", ["Verbo", "Ejemplos"], [["play", "football, chess"], ["play the", "guitar, piano"], ["go + -ing", "swimming, hiking"], ["do", "karate, yoga"]], "var(--sun)")],
    ["Hablar de tiempo libre", `<p>Para preguntar por las aficiones: «What do you do in your <b>free time</b>?», «What are your <b>hobbies</b>?», «Do you like…?». Para contestar, combina el vocabulario con verbos de gusto + <b>-ing</b> y expresiones de frecuencia: «I <b>love</b> going cycling at the weekend», «I <b>usually</b> play video games after dinner», «I <b>never</b> go shopping, I hate it!».</p><p>También puedes decir con quién y dónde: «I play basketball <b>with my friends</b> <b>in the park</b>», «I do karate <b>at a sports centre</b> twice a week». Y para proponer un plan: «<b>Let's</b> go swimming!», «Do you want to play tennis on Saturday?».</p>`,
      L.dialogo("¿Qué haces en tu tiempo libre?", [["Mía", "What do you do in your free time?", "var(--pen)"], ["Saúl", "I do judo and I love drawing.", "var(--leaf)"], ["Mía", "Do you play any sports?", "var(--pen)"], ["Saúl", "Yes, I play tennis on Fridays.", "var(--leaf)"]])],
    ["Estrategias para aprender vocabulario", `<p>Aprender vocabulario requiere <mark>método</mark>. Organiza las palabras por <b>temas</b> en tu cuaderno (familia, instituto, aficiones) y anótalas con un <b>ejemplo</b> y, si puedes, un dibujo. Aprende las palabras que van juntas (<b>collocations</b>): no solo «homework», sino «do homework»; no solo «photo», sino «take a photo».</p><p>Repasa con <b>tarjetas</b> (una cara en inglés, otra en español) varias veces, dejando cada vez más días entre repaso y repaso. Usa las palabras nuevas en frases sobre ti, escúchalas en canciones o series y cuidado con los <b>falsos amigos</b>: parents (padres), carpet (alfombra), exit (salida), embarrassed (avergonzado, no embarazada).</p>`,
      L.filas("Trucos para recordar", [["Temas", "agrupa las palabras", "var(--pen)"], ["Ejemplo", "una frase sobre ti", "var(--leaf)"], ["Parejas", "do homework, take a photo", "var(--sun)"], ["Repaso", "tarjetas, cada vez más espaciado", "var(--red)"]])],
  ],
  ejemplos: [
    ["Completa: «My dad's brother is my ___. His daughter is my ___.»", ["El hermano del padre es el tío: uncle.", "La hija del tío es la prima: cousin (igual para chico o chica)."], "uncle; cousin."],
    ["Elige play, go o do: «___ judo, ___ the drums, ___ skiing».", ["Arte marcial → do.", "Instrumento → play the.", "Actividad en -ing con desplazamiento → go."], "do judo, play the drums, go skiing."],
    ["Traduce: «Se me dan bien las mates y mi asignatura favorita es Plástica».", ["Se me da bien → I'm good at.", "Plástica → Art."], "I'm good at Maths and my favourite subject is Art."],
  ],
  errores: [
    "Traducir «parents» por «parientes»: parents son padre y madre; parientes es relatives.",
    "Usar «brothers» para chicos y chicas: se dice «brothers and sisters» o «siblings».",
    "Decir «play karate» o «do football»: do karate, play football.",
    "Llamar «carpet» a la carpeta: carpeta es folder.",
    "Escribir las asignaturas de idiomas en minúscula: English, Spanish, French.",
  ],
  ejercicios: [
    ["¿Cómo se dice «abuelos», «tía» y «sobrina»?", "grandparents, aunt, niece."],
    ["¿Qué significa «only child»?", "Hijo o hija único."],
    ["Escribe cinco asignaturas en inglés.", "Maths, English, Science, PE, Music (otras válidas)."],
    ["Traduce: «Mi asignatura favorita es Educación Física».", "My favourite subject is PE."],
    ["Escribe en inglés: goma, estuche, regla, sacapuntas.", "rubber, pencil case, ruler, sharpener."],
    ["¿Cómo pides al profesor que repita algo?", "Can you repeat that, please?"],
    ["Completa con play, go o do: ___ yoga, ___ hiking, ___ basketball.", "do; go; play."],
    ["Pregunta a un compañero por su tiempo libre.", "What do you do in your free time?"],
    ["Escribe dos falsos amigos y su significado real.", "Library (biblioteca), carpet (alfombra), parents (padres), embarrassed (avergonzado)."],
    ["Describe a tu familia en tres frases.", "Respuesta modelo: I've got a sister and a brother. My grandma lives with us. My cousin Lola is twelve, like me."],
  ],
  figura: ["Familia, instituto y aficiones", L.columnas("Vocabulario: familia, instituto y aficiones", [["family", "FAMILY", ["parents, cousin", "aunt, uncle"], "var(--pen)"], ["school", "SCHOOL", ["Maths, PE, Art", "ruler, folder"], "var(--leaf)"], ["hobbies", "PLAY · GO · DO", ["play chess", "go swimming"], "var(--sun)"], ["cuidado", "FALSE FRIENDS", ["parents, library", "carpet"], "var(--red)"]])],
  video: V.in12v,
  quiz: [
    ["«Parents» significa…", ["padres", "parientes", "padrinos"], "Falso amigo."],
    ["La hermana de tu madre es tu…", ["aunt", "niece", "cousin"], "Tía."],
    ["«Cousin» puede ser…", ["primo o prima", "solo primo", "sobrino"], "Misma palabra."],
    ["«PE» es…", ["Educación Física", "Plástica", "Física"], "Physical Education."],
    ["«Folder» es…", ["carpeta", "alfombra", "cuaderno"], "Carpet es alfombra."],
    ["«Library» es…", ["biblioteca", "librería", "laboratorio"], "Falso amigo."],
    ["«___ karate»", ["do", "play", "go"], "Artes marciales con do."],
    ["«___ swimming»", ["go", "play", "do"], "Go + -ing."],
    ["«___ the piano»", ["play", "do", "go"], "Instrumentos."],
    ["«¿Cómo se escribe?» es…", ["How do you spell it?", "How do you write?", "What is it spell?"], "Spell."],
  ],
  examen: [
    ["«Siblings» significa…", ["hermanos (chicos y chicas)", "hijos", "solteros"], "Brothers and sisters."],
    ["«I'm good at Maths» significa…", ["se me dan bien las mates", "soy bueno en matemáticas siempre", "me gustan las mates"], "Be good at."],
    ["«Fill in the gaps» significa…", ["completa los huecos", "rellena la mochila", "pinta los dibujos"], "Instrucción de clase."],
  ],
  feynman: ["Cómo se nombran los miembros de la familia", "Cómo se dicen las asignaturas, el material y los lugares del instituto", "Cuándo se usa play, go y do", "Qué estrategias ayudan a recordar vocabulario"],
  mapa: ["VOCABULARY", "var(--pen)", [["Family", "parents · cousin · aunt", "var(--pen)"], ["School", "subjects · supplies · places", "var(--leaf)"], ["Hobbies", "play · go · do", "var(--sun)"], ["Estrategias", "temas · tarjetas · falsos amigos", "var(--red)"]], 250],
  tarjetas: [
    ["parents / relatives", "Padres / parientes."],
    ["aunt / uncle / cousin", "Tía / tío / primo o prima."],
    ["niece / nephew", "Sobrina / sobrino."],
    ["timetable", "Horario."],
    ["rubber / ruler / folder", "Goma / regla / carpeta."],
    ["play / go / do", "play football, go swimming, do karate."],
    ["free time", "Tiempo libre."],
    ["false friends", "library, carpet, parents, embarrassed."],
  ],
  familias: ["Dibujad juntos el árbol de la familia y etiquetadlo en inglés.", "Poned pósits en inglés en el material de estudio de casa durante una semana."],
  saberes: "Léxico básico de uso común: familia, entorno escolar, tiempo libre y aficiones; estrategias de aprendizaje del vocabulario (Lengua Extranjera, 1º ESO, RD 217/2022).",
  ideas: ["Árbol genealógico de una familia famosa (inventada o real).", "Bingo de vocabulario del instituto.", "Encuesta de aficiones y gráfico de resultados."],
  fuentes: [["British Council LearnEnglish Teens: vocabulary", "https://learnenglishteens.britishcouncil.org/vocabulary"], ["Cambridge Dictionary (inglés-español)", "https://dictionary.cambridge.org/es/diccionario/ingles-espanol/"]],
});
