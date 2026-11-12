// Francés 3º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "3-eso",
  titulo: "La famille et les amis",
  minutos: 50,
  objetivos: ["Nombrar a los miembros de la familia", "Usar los adjetivos posesivos", "Describir el físico y el carácter de una persona"],
  claves: ["la famille", "les parents", "le frère / la sœur", "les grands-parents", "mon / ma / mes", "son / sa / ses", "il est grand", "il a les yeux bleus", "sympa", "un ami / une amie"],
  pregunta: {
    texto: "¿Por qué en francés se dice «mon amie» (mi amiga) si «amie» es femenino y lo normal sería «ma»?",
    respuesta: "Porque delante de una palabra femenina que empieza por <b>vocal</b> o <b>h muda</b>, <i>ma</i>, <i>ta</i> y <i>sa</i> se convierten en <mark>mon, ton, son</mark> para que las dos vocales no choquen: <i>mon amie</i>, <i>ton école</i>, <i>son histoire</i>. Es una cuestión de sonido, no de género.",
  },
  bloques: [
    {
      html: `<h3>Los miembros de la familia</h3><p>Los más cercanos son <b>le père</b> (padre), <b>la mère</b> (madre), <b>les parents</b> (los padres), <b>le frère</b> (hermano), <b>la sœur</b> (hermana) y <b>les enfants</b> (los hijos). Después vienen <b>le grand-père</b> y <b>la grand-mère</b> (abuelos), <b>l'oncle</b> y <b>la tante</b> (tíos), <b>le cousin</b> y <b>la cousine</b> (primos). En casa se dice <mark>papa</mark> y <mark>maman</mark>, y a los abuelos, <i>papi</i> y <i>mamie</i>.</p>`,
      svg: L.filas("Vocabulario de la familia", [
        ["Padres", "le père, la mère", "var(--pen)"],
        ["Hermanos", "le frère, la sœur", "var(--leaf)"],
        ["Abuelos", "le grand-père, la grand-mère", "var(--red)"],
        ["Tíos y primos", "l'oncle, la tante, le cousin", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Los adjetivos posesivos</h3><p>En francés, el posesivo concuerda con la <mark>cosa poseída</mark>, no con el poseedor. <b>Mi</b>: <i>mon</i> (masculino), <i>ma</i> (femenino), <i>mes</i> (plural). <b>Tu</b>: <i>ton, ta, tes</i>. <b>Su</b> (de él o de ella): <i>son, sa, ses</i>. Así, «su padre» es <i>son père</i>, tanto si es el padre de Paul como si es el de Julie.</p>`,
      svg: L.tabla("Adjetivos posesivos", ["", "masc.", "fem.", "pl."], [
        ["mi", "mon", "ma", "mes"], ["tu", "ton", "ta", "tes"], ["su", "son", "sa", "ses"],
      ]),
    },
    {
      html: `<h3>Describir el físico</h3><p>Para describir el aspecto se usa <b>être</b> con adjetivos: <i>Il est grand / petit / mince</i> (alto, bajo, delgado). Para el pelo y los ojos se usa <b>avoir</b>: <i>Elle a les cheveux longs / courts / blonds / bruns</i> y <i>Il a les yeux bleus / verts / marron</i>. Fíjate en que <mark>marron</mark> no cambia nunca: <i>des yeux marron</i>.</p>`,
      svg: L.filas("Describir el físico", [
        ["être", "Il est grand et mince.", "var(--pen)"],
        ["avoir + pelo", "Elle a les cheveux longs.", "var(--leaf)"],
        ["avoir + ojos", "Il a les yeux verts.", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Describir el carácter</h3><p>Algunos adjetivos de carácter muy útiles: <i>sympa</i> (majo), <i>gentil / gentille</i> (amable), <i>drôle</i> (gracioso), <i>timide</i>, <i>bavard / bavarde</i> (hablador), <i>sportif / sportive</i>, <i>paresseux / paresseuse</i> (perezoso), <i>sérieux / sérieuse</i>. Muchos forman el femenino con <b>-e</b>, pero hay terminaciones especiales: <mark>-if → -ive</mark>, <mark>-eux → -euse</mark>.</p>`,
      svg: L.filas("Femenino de los adjetivos de carácter", [
        ["+ e", "bavard → bavarde", "var(--pen)"],
        ["-if → -ive", "sportif → sportive", "var(--leaf)"],
        ["-eux → -euse", "sérieux → sérieuse", "var(--red)"],
        ["igual", "sympa, drôle, timide", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Los amigos</h3><p><b>Un ami</b> y <b>une amie</b> se pronuncian igual; en el lenguaje coloquial se dice también <i>un copain</i> / <i>une copine</i> y, entre jóvenes, <i>un pote</i>. Para presentar a alguien: <i>Je te présente mon ami Théo</i> o <i>Voici ma meilleure amie, Inès</i> (mi mejor amiga). Para decir qué hacéis juntos: <i>On joue au foot ensemble</i>, <i>On se voit le week-end</i>.</p>`,
      svg: L.dialogo("Presentar a un amigo", [
        ["Inès", "Je te présente mon ami Théo.", "var(--red)"],
        ["Léa", "Salut Théo ! Enchantée.", "var(--pen)"],
        ["Théo", "Salut ! Tu es sa cousine ?", "var(--leaf)"],
      ]),
    },
  ],
  figura: {
    titulo: "El árbol de familia de Inès",
    svg: L.columnas("Generaciones de una familia", [
      ["abuelos", "PAPI · MAMIE", ["le grand-père,", "la grand-mère"], "var(--red)"],
      ["padres y tíos", "PAPA · MAMAN", ["le père, la mère,", "l'oncle, la tante"], "var(--pen)"],
      ["hijos y primos", "INÈS", ["son frère, sa sœur,", "ses cousins"], "var(--leaf)"],
    ]),
  },
  video: { id: "njpq5Dooz3E", titulo: "Parler de la famille en français (niveau A1)", canal: "La prof Elisabeth", vistas: 335215, megusta: 0, busqueda: "la famille en français" },
  quiz: [
    { q: "«La hermana» en francés:", o: ["la sœur", "la frère", "la cousine"], a: 0, e: "La sœur." },
    { q: "«Mi madre»:", o: ["ma mère", "mon mère", "mes mère"], a: 0, e: "Femenino singular." },
    { q: "«Su padre» (de Julie):", o: ["son père", "sa père", "ses père"], a: 0, e: "Concuerda con père." },
    { q: "«Tiene los ojos azules»:", o: ["Il a les yeux bleus.", "Il est les yeux bleus.", "Il a les œils bleus."], a: 0, e: "Avoir + les yeux." },
    { q: "Femenino de «sportif»:", o: ["sportive", "sportife", "sportiffe"], a: 0, e: "-if → -ive." },
  ],
  examen: [
    { q: "«Mi amiga»:", o: ["mon amie", "ma amie", "m'amie"], a: 0, e: "Delante de vocal: mon." },
    { q: "«Sus hermanos» (de Paul):", o: ["ses frères", "son frères", "leur frère"], a: 0, e: "Plural: ses." },
    { q: "Femenino de «sérieux»:", o: ["sérieuse", "sérieuxe", "sérieusse"], a: 0, e: "-eux → -euse." },
  ],
  feynman: ["Diez palabras de la familia", "Cómo funcionan los posesivos mon, ma, mes", "Cuándo se usa être y cuándo avoir para describir", "Tres formas de hacer el femenino de los adjetivos"],
  mapa: mapa("LA FAMILLE", "var(--eso)", [
    ["Familia", "père · mère · frère…", "var(--pen)"],
    ["Posesivos", "mon · ma · mes", "var(--leaf)"],
    ["Físico", "être grand · avoir les yeux", "var(--red)"],
    ["Carácter", "sympa · sportif/ive", "var(--inf)"],
  ]),
  tarjetas: [
    ["Les grands-parents", "Los abuelos: le grand-père y la grand-mère."],
    ["Posesivos", "mon, ma, mes (mi); ton, ta, tes (tu); son, sa, ses (su)."],
    ["Mon amie", "Delante de vocal, ma/ta/sa → mon/ton/son."],
    ["Los ojos y el pelo", "Con avoir: il a les yeux bleus, elle a les cheveux courts."],
    ["Femenino -if / -eux", "sportif → sportive; paresseux → paresseuse."],
  ],
  familias: ["Pedidle que os presente en francés a tres miembros de la familia con una foto.", "Haced juntos el árbol genealógico con los nombres en francés.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: describir personas y relaciones familiares; adjetivos posesivos, concordancia de los adjetivos, être y avoir para describir (RD 217/2022, Segunda Lengua Extranjera 3º; nivel A1-A2 del MCER).",
    ideas: ["Árbol genealógico de una familia famosa (real o de ficción) en francés.", "Juego de «¿Quién es quién?» con descripciones.", "Retrato escrito del mejor amigo o amiga."],
  },
  fuentes: [
    L.BOE,
    { t: "TV5MONDE Apprendre le français", url: "https://apprendre.tv5monde.com/" },
    { t: "Le Conjugueur (Le Figaro)", url: "https://leconjugueur.lefigaro.fr/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Usar los posesivos de plural notre, votre, leur", "Escribir un texto sobre la familia"],
  bloques: [
    { tras: "Los miembros de la familia", html: `<h3>Más vocabulario de familia</h3><p>Las familias son muy diversas y el francés tiene palabras para todas:</p>${L.tb(["Francés", "Español"], [["le mari / la femme", "el marido / la mujer"], ["le fils / la fille", "el hijo / la hija"], ["le petit-fils / la petite-fille", "el nieto / la nieta"], ["le neveu / la nièce", "el sobrino / la sobrina"], ["le demi-frère / la demi-sœur", "el medio hermano / la media hermana"], ["le beau-père / la belle-mère", "el padrastro o suegro / la madrastra o suegra"], ["fils unique / fille unique", "hijo único / hija única"]])}<p>Ojo: <i>la fille</i> significa <mark>hija</mark> y también <mark>chica</mark>, según el contexto: <i>C'est ma fille</i> (es mi hija) / <i>une fille de ma classe</i> (una chica de mi clase). Y <i>la femme</i> es la mujer y también la esposa.</p>` },
    { tras: "Los adjetivos posesivos", html: `<h3>Posesivos de varios poseedores</h3><p>Cuando los poseedores son varios, los posesivos solo distinguen <b>singular y plural</b>, no género:</p>${L.tb(["Español", "Singular", "Plural"], [["nuestro/a", "notre", "nos"], ["vuestro/a, su (de usted)", "votre", "vos"], ["su (de ellos)", "leur", "leurs"]])}<p>Ejemplos: <i>notre maison</i> (nuestra casa), <i>nos parents</i> (nuestros padres), <i>votre prof</i> (vuestro profe), <i>leur chien</i> (su perro, de ellos), <i>leurs enfants</i> (sus hijos, de ellos). Fíjate: <i>son frère</i> es «su hermano» de una persona, y <i>leur frère</i>, de <mark>varias personas</mark>.</p>` },
    { tras: "Describir el físico", html: `<h3>Más vocabulario para el físico</h3><p>Para afinar la descripción, combina estas expresiones:</p><ul><li><b>Estatura y complexión</b>: <i>grand(e)</i>, <i>petit(e)</i>, <i>de taille moyenne</i> (de estatura media), <i>mince</i>, <i>costaud</i> (fuerte).</li><li><b>Pelo</b>: <i>les cheveux raides / bouclés / frisés</i> (lisos, ondulados, rizados), <i>roux</i> (pelirrojo), <i>châtains</i> (castaños). <i>Il est chauve</i> (es calvo).</li><li><b>Otros rasgos</b>: <i>il porte des lunettes</i> (lleva gafas), <i>elle a des taches de rousseur</i> (pecas), <i>il a une barbe</i> (barba).</li></ul><p>Recuerda que el adjetivo de color del pelo va en <mark>plural</mark> porque <i>les cheveux</i> es plural: <i>les cheveux blonds</i>. Y para describir con respeto, mejor evitar comentarios sobre el peso o defectos físicos.</p>` },
    { tras: "Describir el carácter", html: `<h3>Matizar con adverbios y contrarios</h3><p>Para no ser tajante, usa adverbios que gradúan la cualidad: <i>très</i> (muy), <i>assez</i> (bastante), <i>un peu</i> (un poco), <i>trop</i> (demasiado). Por ejemplo: <i>Mon frère est un peu timide mais très drôle</i>.</p><p>También es útil conocer los <b>contrarios</b>: <i>sympa ↔ désagréable</i>, <i>calme ↔ nerveux</i>, <i>généreux ↔ égoïste</i>, <i>travailleur ↔ paresseux</i>, <i>ouvert ↔ timide</i>. Y fíjate en estas formas femeninas especiales: <i>gentil → gentille</i>, <i>travailleur → travailleuse</i>, <i>gros → grosse</i>, <i>beau → belle</i>. La palabra <mark>sympa</mark> es la abreviatura de <i>sympathique</i> y es igual en masculino y femenino.</p>` },
    { tras: "Los amigos", html: `<h3>Escribir sobre tu familia</h3><p>Un texto sobre la familia debe estar ordenado: primero quién forma tu familia, luego una descripción de cada persona y, por último, qué hacéis juntos. Mira el modelo:</p><p><i>Dans ma famille, nous sommes quatre : mon père, ma mère, ma petite sœur et moi. Mon père s'appelle Javier, il est grand et il a les cheveux courts. Il est très drôle. Ma mère s'appelle Rosa, elle a les yeux verts et elle est sportive. Ma sœur Carla a huit ans, elle est un peu bavarde mais gentille. Le dimanche, on mange chez mes grands-parents.</i></p><p>Fíjate en los <mark>posesivos</mark>, en la concordancia de los adjetivos y en el uso de <i>on</i> para hablar de lo que hacéis juntos.</p>` },
  ],
  videos: [
    ["Los adjetivos posesivos", L.vid("HNf-b8QrB0Y", "Los adjetivos posesivos en francés (curso de francés básico, clase 7)", "Clases de Francés Fácil con Nelson", 349870)],
    ["Describir el físico", L.vid("CIO1F1PNgpU", "Cómo describir el físico de una persona en francés (nivel A1)", "La prof Elisabeth", 347707)],
  ],
  ejemplos: [
    ["Completa con posesivos: «___ (mi) frère et ___ (mi) sœur aiment ___ (su, de ellos) chien.»", ["Frère es masculino singular → mon.", "Sœur es femenino singular → ma.", "El perro es de varios poseedores → leur."], "Mon frère et ma sœur aiment leur chien."],
    ["Describe a una persona: chica, alta, pelo largo y rizado, simpática.", ["Físico con être: Elle est grande.", "Pelo con avoir: Elle a les cheveux longs et bouclés.", "Carácter: Elle est sympa."], "Elle est grande, elle a les cheveux longs et bouclés et elle est très sympa."],
    ["Pon en femenino: «Mon cousin est sportif, travailleur et gentil.»", ["cousin → cousine, así que el posesivo pasa a femenino: ma cousine.", "sportif → sportive; travailleur → travailleuse.", "gentil → gentille."], "Ma cousine est sportive, travailleuse et gentille."],
  ],
  errores: [
    "Concordar el posesivo con el poseedor: *sa père (de Julie) → son père.",
    "Decir *ma amie: delante de vocal se usa mon amie.",
    "Describir los ojos con être: *il est les yeux bleus → il a les yeux bleus.",
    "Escribir *des yeux marrons: marron es invariable.",
    "Confundir son (de una persona) y leur (de varias).",
  ],
  ejercicios: [
    ["Traduce: el abuelo, la tía, los primos.", "le grand-père, la tante, les cousins."],
    ["Completa: ___ (mi) parents, ___ (tu) école, ___ (su) tante.", "mes parents, ton école, sa tante."],
    ["Completa: ___ (nuestro) maison, ___ (vuestros) amis.", "notre maison, vos amis."],
    ["Traduce: «Ella tiene el pelo corto y castaño».", "Elle a les cheveux courts et châtains."],
    ["Pon en femenino: paresseux, bavard, timide.", "paresseuse, bavarde, timide."],
    ["Escribe el contrario de: calme, généreux, sympa.", "nerveux, égoïste, désagréable."],
    ["¿Qué significa «la fille» en «la fille de mon oncle»?", "La hija: es mi prima."],
    ["Presenta a tu mejor amigo con una frase.", "Por ejemplo: Je te présente mon meilleur ami, Pablo."],
    ["Corrige: «Ma amie a les yeux marrons.»", "Mon amie a les yeux marron."],
    ["Escribe tres frases sobre tu familia.", "Respuesta abierta. Ejemplo: Dans ma famille, nous sommes trois. Ma mère est grande. Mon frère est drôle."],
  ],
  quiz: [
    ["«Sus padres» (de ellos):", ["leurs parents", "ses parents", "leur parents"], 0, "Varios poseedores y plural."],
    ["«Nuestra casa»:", ["notre maison", "nos maison", "notre maisons"], 0, "Singular."],
    ["«Lleva gafas»:", ["Il porte des lunettes.", "Il a les lunettes.", "Il est lunettes."], 0, "Porter."],
    ["Femenino de «gentil»:", ["gentille", "gentile", "gentiline"], 0, "Se dobla la l."],
    ["«Le neveu» es…", ["el sobrino", "el nieto", "el primo"], 0, "La nièce, la sobrina."],
  ],
  tarjetas: [
    ["notre / votre / leur", "Posesivos de varios poseedores; plural: nos, vos, leurs."],
    ["La fille", "Significa hija y también chica."],
    ["Graduar adjetivos", "très, assez, un peu, trop: il est un peu timide."],
  ],
});
