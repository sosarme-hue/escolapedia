// Cultura Clásica 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Cultura Clásica",
  curso: "3-eso",
  titulo: "La vida cotidiana en Grecia y Roma",
  minutos: 35,
  objetivos: ["Describir la sociedad griega y romana y la situación de los esclavos", "Explicar cómo eran la familia, la casa y la educación", "Conocer la alimentación, la ropa y el ocio en la Antigüedad"],
  claves: ["ciudadanos y esclavos", "pater familias", "domus e insula", "escuela", "toga y túnica", "termas", "banquete"],
  pregunta: {
    texto: "Un niño romano se levantaba antes del amanecer, desayunaba pan con queso y caminaba a la escuela con un esclavo. ¿Se parecía su día al tuyo?",
    respuesta: "En algunas cosas sí: iba a la escuela, aprendía a leer, escribir y contar, y tenía juguetes como canicas o muñecas. Pero en otras era muy distinto: su <mark>padre</mark> tenía un poder casi absoluto sobre él, las <b>niñas</b> apenas estudiaban y muchas personas eran <b>esclavas</b>.",
  },
  bloques: [
    {
      html: `<h3>Una sociedad desigual</h3><p>En Grecia y Roma, las personas no tenían los mismos derechos. En <b>Atenas</b>, solo los <mark>ciudadanos</mark> (varones adultos, hijos de padre y madre atenienses) podían votar; los <b>metecos</b> (extranjeros) eran libres pero sin derechos políticos, y los <b>esclavos</b> no eran libres. En <b>Roma</b>, entre los ciudadanos había <b>patricios</b> (familias nobles) y <b>plebeyos</b> (el pueblo); por debajo estaban los <b>libertos</b> (esclavos liberados) y los esclavos. Las <b>mujeres</b> eran libres, pero no podían votar ni ocupar cargos.</p>`,
      svg: filas("Sociedad romana: de más a menos derechos", [["Patricios", "familias nobles", "var(--sun)"], ["Plebeyos", "pueblo libre", "var(--inf)"], ["Libertos", "esclavos liberados", "var(--leaf)"], ["Esclavos", "sin libertad", "var(--muted)"]]),
    },
    {
      html: `<h3>La familia romana</h3><p>La <mark>familia</mark> romana incluía al padre, la madre, los hijos, las esposas de los hijos, los nietos y los esclavos de la casa. Al frente estaba el <b>pater familias</b>, el varón de más edad, con un poder enorme: decidía los matrimonios, administraba los bienes y, en los primeros tiempos, podía incluso vender a sus hijos. La <b>madre</b> (<i>mater familias</i>) dirigía la casa y educaba a los hijos pequeños; en Roma tenía más libertad que en Grecia: salía, iba a los espectáculos y comía con su marido.</p>`,
      svg: filas("Miembros de la familia romana", [["Pater", "autoridad máxima", "var(--pen)"], ["Mater", "dirige la casa", "var(--red)"], ["Hijos", "bajo el poder del padre", "var(--leaf)"], ["Esclavos", "trabajan en la casa", "var(--muted)"]]),
    },
    {
      html: `<h3>La casa: domus e insula</h3><p>Las familias ricas vivían en una <mark>domus</mark>, una casa de una planta que miraba hacia dentro. Se entraba por un pasillo al <b>atrio</b>, un patio con un hueco en el techo (<i>compluvium</i>) por el que caía el agua de lluvia a un estanque (<i>impluvium</i>). Alrededor estaban los dormitorios (<i>cubicula</i>), el comedor (<i>triclinium</i>) y, al fondo, un jardín con columnas, el <b>peristilo</b>. La mayoría de la gente, en cambio, vivía de alquiler en una <mark>insula</mark>: bloques de pisos de hasta seis plantas, ruidosos, sin agua corriente y con riesgo de incendios.</p>`,
      svg: dos("Dos tipos de vivienda en Roma", ["Domus", ["casa de ricos", "atrio e impluvio", "peristilo", "una planta"], "var(--sun)"], ["Insula", ["bloque de pisos", "alquiler", "sin agua", "riesgo de fuego"], "var(--muted)"]),
    },
    {
      html: `<h3>La educación</h3><p>En Roma, a partir de los siete años, niños y algunas niñas iban a la escuela del <mark>litterator</mark> o <i>magister</i>, que enseñaba a leer, escribir y contar. Escribían con un punzón (<i>stilus</i>) en tablillas de cera. Desde los doce años, solo los chicos de familias acomodadas seguían con el <b>grammaticus</b> (literatura griega y latina) y después con el <b>rhetor</b>, que enseñaba a hablar en público, clave para la política. A los niños solía acompañarlos un esclavo, el <b>pedagogo</b>, palabra que hoy significa «experto en educación».</p>`,
      svg: filas("Etapas de la educación romana", [["7 años", "litterator: leer, contar", "var(--leaf)"], ["12 años", "grammaticus: literatura", "var(--pen)"], ["16 años", "rhetor: oratoria", "var(--red)"]]),
    },
    {
      html: `<h3>Comida y vestido</h3><p>Los griegos y romanos tomaban un <b>desayuno</b> ligero (pan, queso, fruta), un almuerzo rápido a mediodía y la comida principal por la tarde: la <mark>cena</mark>. Los ricos celebraban banquetes en el <i>triclinium</i>, comiendo <b>recostados</b> en lechos; se servían platos como lirones, pavo real o pescado con <i>garum</i>, una salsa de pescado fermentado que se fabricaba en Hispania. En cuanto a la ropa, todos llevaban una <b>túnica</b>; encima, los ciudadanos romanos vestían la <mark>toga</mark> y las mujeres casadas la <b>stola</b>; para el frío, un manto.</p>`,
      svg: filas("Comidas del día en Roma", [["Ientaculum", "desayuno ligero", "var(--sun)"], ["Prandium", "almuerzo rápido", "var(--leaf)"], ["Cena", "comida principal", "var(--red)"]]),
    },
  ],
  figura: {
    titulo: "Un día en la vida de tres romanos",
    svg: figCols("Comparación de la vida de un patricio, un plebeyo y un esclavo", [["Patricio", ["domus con atrio", "toga y banquetes", "política y negocios", "estudia con el rhetor"], "var(--sun)"], ["Plebeyo", ["insula de alquiler", "túnica", "artesano o tendero", "termas y circo"], "var(--pen)"], ["Esclavo", ["vive con su dueño", "sin derechos", "campo, casa, minas", "puede ser liberto"], "var(--muted)"]]),
  },
  video: { id: "T3eFi2UXmQg", titulo: "Un día en la Antigua Roma: así vivía un romano común hace 2.000 años", canal: "VEGGIE ODDS", vistas: 64829, megusta: 0, busqueda: "vida cotidiana en la antigua roma" },
  quiz: [
    { q: "¿Quién tenía la autoridad en la familia romana?", o: ["La madre", "El pater familias", "El hijo mayor"], a: 1, e: "El varón de más edad." },
    { q: "¿Qué era una insula?", o: ["Una isla", "Un bloque de pisos", "Un templo"], a: 1, e: "Donde vivía la mayoría." },
    { q: "¿Qué prenda llevaban los ciudadanos romanos?", o: ["La toga", "El quitón", "La stola"], a: 0, e: "La stola era de las mujeres casadas." },
    { q: "¿Cómo comían los ricos en los banquetes?", o: ["Sentados en sillas", "Recostados en lechos", "De pie"], a: 1, e: "En el triclinium." },
    { q: "¿Quién podía votar en Atenas?", o: ["Todos los habitantes", "Los ciudadanos varones", "Los metecos"], a: 1, e: "Ni mujeres, ni extranjeros, ni esclavos." },
  ],
  examen: [
    { q: "El impluvium era…", o: ["un estanque para el agua de lluvia", "un dormitorio", "una escuela"], a: 0, e: "En el atrio de la domus." },
    { q: "El pedagogo era…", o: ["un esclavo que acompañaba a los niños", "un maestro de oratoria", "un sacerdote"], a: 0, e: "Hoy significa experto en educación." },
    { q: "El garum era…", o: ["una salsa de pescado", "un vino", "un pan"], a: 0, e: "Muy apreciado; se fabricaba en Hispania." },
  ],
  feynman: ["Cómo se organizaba la sociedad en Atenas y Roma", "Quién mandaba en la familia romana", "En qué se diferenciaban una domus y una insula", "Cómo era la escuela, la comida y la ropa"],
  mapa: mapa("VIDA COTIDIANA", "var(--sun)", [
    ["Sociedad", "libres · esclavos", "var(--muted)"],
    ["Familia", "pater familias", "var(--pen)"],
    ["Casa", "domus · insula", "var(--sun)"],
    ["Escuela", "litterator · rhetor", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Pater familias", "Cabeza de la familia romana, con gran poder sobre todos."],
    ["Domus", "Casa unifamiliar de los ricos, con atrio y peristilo."],
    ["Insula", "Bloque de pisos de alquiler donde vivía la mayoría."],
    ["Liberto", "Esclavo que había recibido la libertad."],
    ["Toga", "Prenda de lana propia de los ciudadanos romanos."],
  ],
  familias: ["Comparad un día de vuestra semana con el de un niño romano: horarios, comidas y escuela.", "Visitad, si podéis, una domus o una villa romana cercana y buscad el atrio y el peristilo.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La vida cotidiana en Grecia y Roma: organización social, familia, vivienda, educación, alimentación, vestido y ocio (Cultura Clásica, materia optativa que ofertan las comunidades autónomas en el marco del RD 217/2022).",
    ideas: ["Maqueta o plano de una domus con sus partes en latín.", "Menú de un banquete romano con recetas de Apicio.", "Escribir en «tablillas de cera» hechas con plastilina y un palillo."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Museo Nacional de Arte Romano (Mérida)", url: "https://www.culturaydeporte.gob.es/mnromano/home.html" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Comparar la vida de las mujeres en Atenas y en Roma", "Explicar el papel de las termas y el foro en la vida social"],
  bloques: [
    { tras: "Una sociedad desigual", html: `<h3>La esclavitud</h3><p>La esclavitud era normal en el mundo antiguo. Se llegaba a ser esclavo por ser <b>prisionero de guerra</b>, por <b>nacer</b> de madre esclava o por <b>deudas</b>. Los esclavos eran considerados una <mark>propiedad</mark>: se compraban y vendían en mercados. Su vida dependía del trabajo y del dueño: los de las <b>minas</b> y el campo sufrían condiciones durísimas, mientras que algunos esclavos domésticos cultos (médicos, maestros, secretarios) vivían mejor. Podían ser liberados por su dueño (<b>manumisión</b>) y convertirse en libertos. En el siglo I a. C., el gladiador <b>Espartaco</b> encabezó una gran rebelión de esclavos que puso en jaque a Roma.</p>` },
    { tras: "La familia romana", html: `<h3>Las mujeres en Atenas y en Roma</h3><p>En <b>Atenas</b>, las mujeres de familia ciudadana pasaban casi toda su vida en el <mark>gineceo</mark>, la parte de la casa reservada a ellas; se casaban muy jóvenes (hacia los 14 años) con quien elegía su padre y apenas salían salvo para las fiestas religiosas. En <b>Esparta</b> tenían más libertad: hacían deporte y administraban tierras. En <b>Roma</b>, la mujer salía a la calle, iba a las termas y a los espectáculos, comía con su marido y podía heredar y tener bienes. Algunas romanas fueron muy influyentes, como <b>Livia</b>, esposa de Augusto, aunque nunca pudieron votar ni ser magistradas.</p>`, video: { id: "R0JpmeljyZQ", titulo: "Así era vivir en Atenas en el 450 a. C.", canal: "Memoria de las Civilizaciones", vistas: 26558, megusta: 0 } },
    { tras: "Comida y vestido", html: `<h3>Las termas y el foro</h3><p>Las <mark>termas</mark> eran baños públicos muy baratos y uno de los lugares favoritos de los romanos. Tenían un recorrido fijo: vestuario (<i>apodyterium</i>), sala de agua fría (<i>frigidarium</i>), templada (<i>tepidarium</i>) y caliente (<i>caldarium</i>), calentadas con un sistema de aire caliente bajo el suelo, el <b>hipocausto</b>. Además de lavarse, en las termas se hacía ejercicio, se charlaba, se leía y se cerraban negocios. El otro gran centro de la vida urbana era el <b>foro</b>, la plaza principal, con templos, la basílica (donde se juzgaba), tiendas y lugares de reunión política.</p>` },
    { tras: "La educación", html: `<h3>Juegos, ritos y etapas de la vida</h3>${tabla(["Momento", "Costumbre romana"], [["Nacimiento", "el padre levantaba al bebé del suelo para reconocerlo como hijo"], ["Infancia", "la bulla, un amuleto colgado al cuello; juegos de tabas, nueces, muñecas, peonzas"], ["Hacia 16 años", "el chico dejaba la bulla y vestía la toga viril: ya era adulto"], ["Boda", "la novia, con velo naranja, era llevada en brazos al cruzar el umbral"], ["Muerte", "procesión fúnebre y entierro fuera de la ciudad, junto a las calzadas"]])}<p>Algunas de estas costumbres, como cruzar el umbral en brazos o el velo nupcial, siguen vivas hoy.</p>` },
  ],
  ejemplos: [
    { enunciado: "Un hombre nacido libre en Corinto vive y trabaja en Atenas. ¿Puede votar en la asamblea?", pasos: ["En Atenas solo votaban los ciudadanos: varones adultos, hijos de padre y madre atenienses.", "Este hombre es libre, pero extranjero.", "Los extranjeros libres eran metecos, sin derechos políticos."], resultado: "No: es un meteco." },
    { enunciado: "Describe el recorrido de un romano por las termas.", pasos: ["Se desviste en el apodyterium.", "Pasa por el tepidarium y el caldarium para sudar y limpiarse.", "Termina en el frigidarium con un baño frío."], resultado: "Vestuario → templado → caliente → frío (el orden podía variar)." },
    { enunciado: "Explica de dónde viene la palabra «pedagogo» y qué significa hoy.", pasos: ["En griego, paidagogós es «el que conduce al niño».", "Era el esclavo que acompañaba a los niños a la escuela.", "Hoy designa al especialista en educación."], resultado: "Del esclavo acompañante de los niños al experto en educación." },
  ],
  errores: [
    "Pensar que todos los habitantes de Atenas votaban: solo los ciudadanos varones.",
    "Creer que todos los romanos vivían en una domus: la mayoría vivía en insulae.",
    "Confundir toga (ciudadanos) con túnica (prenda básica de todos).",
    "Imaginar que la mujer romana estaba tan encerrada como la ateniense.",
    "Pensar que los esclavos tenían una raza concreta: eran sobre todo prisioneros de guerra de cualquier origen.",
  ],
  ejercicios: [
    { q: "Ordena de más a menos derechos: esclavo, patricio, liberto, plebeyo.", sol: "Patricio, plebeyo, liberto, esclavo." },
    { q: "¿Quiénes eran los metecos?", sol: "Extranjeros libres que vivían en Atenas, sin derechos políticos." },
    { q: "¿Qué poder tenía el pater familias?", sol: "Decidía los matrimonios, administraba los bienes y tenía autoridad casi total sobre hijos, esposa y esclavos." },
    { q: "Nombra cuatro partes de una domus.", sol: "Atrio, impluvium, triclinium, cubicula y peristilo." },
    { q: "¿Qué problemas tenían las insulae?", sol: "Eran ruidosas, sin agua corriente, de alquiler caro y con riesgo de incendios y derrumbes." },
    { q: "¿Qué se aprendía con el grammaticus y con el rhetor?", sol: "Con el grammaticus, literatura griega y latina; con el rhetor, oratoria para la vida pública." },
    { q: "¿Qué era el gineceo?", sol: "La parte de la casa griega reservada a las mujeres." },
    { q: "Explica qué era el hipocausto.", sol: "Un sistema de calefacción por aire caliente que circulaba bajo el suelo de las termas." },
    { q: "¿Cómo podía un esclavo llegar a ser libre?", sol: "Por manumisión: su dueño lo liberaba y pasaba a ser liberto." },
    { q: "Cita una costumbre romana que siga viva hoy.", sol: "Por ejemplo, el velo de la novia o cruzar el umbral en brazos." },
  ],
  quiz: [
    { q: "La sala de agua caliente de las termas era el…", o: ["caldarium", "frigidarium", "atrio"], a: 0, e: "De calidus, «caliente»." },
    { q: "La bulla era…", o: ["un amuleto infantil", "una moneda", "un juego"], a: 0, e: "Se dejaba al hacerse adulto." },
    { q: "Espartaco era…", o: ["un gladiador que lideró una rebelión", "un emperador", "un filósofo"], a: 0, e: "Siglo I a. C." },
    { q: "En el foro estaba la basílica, que servía para…", o: ["juzgar", "rezar", "bañarse"], a: 0, e: "Era un edificio civil." },
    { q: "Las espartanas, a diferencia de las atenienses…", o: ["hacían deporte", "votaban", "eran magistradas"], a: 0, e: "Tenían más libertad." },
  ],
  tarjetas: [
    ["Termas", "Baños públicos con salas fría, templada y caliente."],
    ["Gineceo", "Zona de la casa griega reservada a las mujeres."],
    ["Manumisión", "Liberación de un esclavo por su dueño."],
  ],
});

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["Pompeya, congelada en el tiempo", `<p>El 24 de agosto del año 79, el volcán Vesubio entró en erupción. En pocas horas, una lluvia de ceniza y piedra pómez sepultó la ciudad romana de Pompeya, junto al golfo de Nápoles. Sus habitantes no tuvieron tiempo de recoger nada: los panes quedaron en los hornos, las monedas en las mesas de las tabernas y los mensajes escritos en las paredes. Durante casi diecisiete siglos, la ciudad durmió bajo la tierra hasta que empezó a excavarse en el siglo XVIII.</p><p>Gracias a Pompeya podemos pasear hoy por una ciudad romana real: entrar en sus casas, ver sus pinturas, leer anuncios electorales y bromas de vecinos, y descubrir qué comían, cómo se lavaban o cómo se divertían. En este tema viajarás a la vida diaria de griegos y romanos: cómo se organizaba la sociedad, qué papel tenían el padre, la madre, los hijos y los esclavos, cómo eran las casas y las calles, qué se aprendía en la escuela, qué se comía en un banquete y cómo se honraba a los antepasados. Descubrirás muchas semejanzas con nuestra vida… y también diferencias enormes, como la esclavitud o la falta de derechos de las mujeres.</p>`],
  mas: [
    ["<h3>Una sociedad desigual</h3>", `<p>En Roma, la sociedad se dividía al principio entre <b>patricios</b>, descendientes de las familias más antiguas, y <b>plebeyos</b>, el resto de ciudadanos. Tras siglos de luchas, los plebeyos consiguieron los mismos derechos políticos. Más tarde, lo que contaba era sobre todo la riqueza: los <b>senadores</b> y los <b>caballeros</b> (<i>equites</i>) formaban la élite, y la mayoría eran ciudadanos humildes, libertos y esclavos.</p>`],
    ["<h3>La esclavitud</h3>", `<p>La situación de los esclavos variaba muchísimo. Los que trabajaban en las <b>minas</b> o en los grandes latifundios vivían en condiciones terribles y morían jóvenes. Los esclavos domésticos o cualificados (secretarios, médicos, maestros, administradores) podían vivir mejor e incluso ahorrar dinero, el <b>peculio</b>, para comprar su libertad. En el siglo I a. C., la rebelión de Espartaco reunió a decenas de miles de esclavos contra Roma.</p>`],
    ["<h3>La educación</h3>", `<p>Los métodos eran duros: se aprendía de memoria, repitiendo en voz alta, y los castigos físicos eran habituales. Las clases se daban a veces en un local abierto a la calle, desde el amanecer hasta mediodía. Solo las familias que podían pagar llevaban a sus hijos más allá de la primera enseñanza; la mayoría de los niños pobres empezaba a trabajar muy pronto.</p>`],
    ["<h3>Comida y vestido</h3>", `<p>La ropa también indicaba la posición social. Solo los ciudadanos podían llevar <b>toga</b>, y los senadores la lucían con una franja púrpura, el color más caro, obtenido de un molusco. Las matronas vestían la <b>stola</b> sobre la túnica y se cubrían con un manto, la <b>palla</b>, al salir de casa. Los esclavos y trabajadores llevaban solo una túnica corta.</p>`],
  ],
  svgs: [
    ["<h3>La esclavitud</h3>", "La esclavitud en Roma", [["Origen", "guerra, nacimiento, deudas"], ["Trabajo", "minas, campo, casa"], ["Libertad", "manumisión: liberto"]], "personas sin derechos"],
    ["<h3>Las mujeres en Atenas y en Roma</h3>", "Las mujeres en Grecia y Roma", [["Atenas", "en el gineceo, sin voto"], ["Esparta", "deporte y más libertad"], ["Roma", "salían, pero sin voto"]], "sin derechos políticos"],
    ["<h3>Juegos, ritos y etapas de la vida</h3>", "Etapas de la vida en Roma", [["Nacimiento", "el padre lo reconoce"], ["Infancia", "la bulla protectora"], ["Edad adulta", "toga viril, hacia 16 años"]], "ritos de paso"],
    ["<h3>Las termas y el foro</h3>", "Recorrido por las termas", [["Apodyterium", "vestuario"], ["Tepidarium", "sala templada"], ["Caldarium y frigidarium", "caliente y fría"]], "baños públicos"],
  ],
  bloques: [
    { tras: "<h3>La familia romana</h3>", html: `<h3>El matrimonio y los nombres romanos</h3><p>Los ciudadanos romanos varones tenían tres nombres, los <mark>tria nomina</mark>. El <b>praenomen</b> era el nombre personal (Marco, Cayo, Lucio); el <b>nomen</b>, el de la gens o gran familia (Julio, Cornelio, Tulio); y el <b>cognomen</b>, el de la rama familiar, que a menudo nacía de un apodo (Cicerón viene de <i>cicer</i>, «garbanzo»; Bruto significa «torpe»). Así, Cayo Julio César era Cayo, de la gens Julia, de la rama de los César. Las mujeres solían llevar solo el nomen en femenino: todas las hijas de Marco Tulio Cicerón se llamaban Tulia, y se distinguían como la mayor o la menor.</p><p>Los matrimonios los acordaban las familias, a menudo por interés económico o político. Las chicas se casaban muy jóvenes, desde los doce años, y los hombres algo mayores. La novia aportaba una <b>dote</b>. En la ceremonia llevaba un velo de color anaranjado, se unían las manos derechas de los novios y por la noche una procesión la acompañaba a su nueva casa, donde el marido la cogía en brazos para cruzar la puerta. El divorcio era posible y bastante frecuente entre las familias ricas.</p>`, svg: ["Los tres nombres romanos", [["Praenomen", "nombre: Cayo"], ["Nomen", "gens: Julio"], ["Cognomen", "rama o apodo: César"]], "tria nomina"] },
    { tras: "<h3>La casa: domus e insula</h3>", html: `<h3>La vida en la calle</h3><p>Las ciudades romanas eran ruidosas y bulliciosas. Las calles de Pompeya tenían aceras elevadas y grandes piedras para cruzar sin pisar el barro y la suciedad, con huecos para que pasaran las ruedas de los carros. En los bajos de las casas había <b>tabernas</b>: tiendas, talleres y bares con mostradores en los que se servía comida caliente, como los <b>termopolios</b>, auténticos locales de comida rápida.</p><p>El agua llegaba por los acueductos a <b>fuentes públicas</b> repartidas por la ciudad, y las casas ricas tenían tuberías de plomo. Las aguas sucias se recogían en <b>cloacas</b>; la <b>Cloaca Máxima</b> de Roma, construida en época de los reyes, todavía funciona en parte. Había <b>letrinas públicas</b> con decenas de asientos juntos, donde se charlaba con naturalidad. Los mayores peligros eran los <b>incendios</b>, frecuentes en las insulae de madera, por lo que Augusto creó un cuerpo de bomberos, los <i>vigiles</i>. En las paredes, los vecinos escribían <b>grafitis</b>: anuncios electorales, insultos, declaraciones de amor o resultados de los gladiadores.</p>`, svg: ["La calle romana", [["Tabernas", "tiendas y termopolios"], ["Agua", "fuentes y cloacas"], ["Grafitis", "mensajes en las paredes"]], "Pompeya, año 79"] },
    { tras: "<h3>La educación</h3>", html: `<h3>Escribir y leer en la Antigüedad</h3><p>En la escuela, los alumnos escribían sobre <mark>tablillas de cera</mark> con un punzón llamado <b>stilus</b>: con la punta trazaban las letras y con el otro extremo, plano, alisaban la cera para borrar. De ahí viene la palabra estilo. Para textos largos se usaba el <b>papiro</b>, hecho en Egipto con tiras de una planta acuática, que se enrollaba formando un <b>volumen</b> (rollo); para leerlo había que ir desenrollándolo con las dos manos.</p><p>Más tarde se extendió el <b>pergamino</b>, piel de animal preparada para escribir, más resistente, y con él una gran novedad de los siglos I-IV: el <mark>códice</mark>, hojas cosidas por un lado, como nuestros libros. Era más cómodo, permitía escribir por las dos caras y buscar un pasaje con facilidad, y fue el formato preferido por los cristianos. Los libros se copiaban a mano, a menudo por esclavos, y había librerías y bibliotecas públicas; la de Alejandría fue la más famosa. Se escribía en mayúsculas y sin separar las palabras.</p>`, svg: ["Soportes de escritura", [["Tablilla", "cera y stilus"], ["Papiro", "rollos o volúmenes"], ["Pergamino", "códice: el libro"]], "de la tablilla al libro"] },
    { tras: "<h3>Comida y vestido</h3>", html: `<h3>Un banquete romano</h3><p>Para los romanos ricos, la <b>cena</b> era un acontecimiento social. Se celebraba en el <mark>triclinio</mark>, un comedor con tres lechos en forma de U, en los que se comía recostado sobre el codo izquierdo, normalmente nueve comensales. Los esclavos servían la comida ya cortada, porque se comía con los dedos, con cuchara y con palillos; no había tenedores. Tenía tres partes: la <b>gustatio</b> o entrantes (huevos, aceitunas, verduras), la <b>prima mensa</b> con carnes y pescados, y la <b>secunda mensa</b> con frutas y dulces de miel. De ahí la expresión <i>ab ovo usque ad mala</i>, «del huevo a las manzanas», es decir, de principio a fin.</p><p>Los pobres comían sobre todo <b>puls</b>, unas gachas de cereal, pan, legumbres, algo de queso y verdura; la carne era un lujo. En la cocina romana no existían productos que llegaron de América mucho después: tomate, patata, maíz, pimiento o chocolate. Se condimentaba con <b>garum</b> (salsa de pescado fermentado), miel, vinagre y muchas hierbas, y el vino se bebía mezclado con agua.</p>`, svg: ["Las partes de una cena romana", [["Gustatio", "entrantes: huevos, aceitunas"], ["Prima mensa", "carnes y pescados"], ["Secunda mensa", "frutas y dulces"]], "ab ovo usque ad mala"] },
    { html: `<h3>La religión en casa y la muerte</h3><p>Cada casa romana tenía su propio altar, el <mark>larario</mark>, normalmente en el atrio o en la cocina. Allí se honraba a los <b>lares</b>, protectores de la familia y de la casa, a los <b>penates</b>, guardianes de la despensa, y al <b>genio</b> del pater familias. Cada día se les ofrecían pequeñas porciones de comida, vino o incienso, y en los momentos importantes (un nacimiento, una boda, un viaje) se les pedía protección.</p><p>Los romanos daban gran importancia al culto a los <b>antepasados</b>. Los muertos se enterraban o incineraban siempre <b>fuera de la ciudad</b>, en las <mark>necrópolis</mark> que flanqueaban las calzadas a la salida, para que los viajeros leyeran sus nombres en las lápidas y no los olvidaran. Las inscripciones funerarias empiezan a menudo con las letras <b>D M</b> (<i>Dis Manibus</i>, «a los dioses manes», las almas de los difuntos) y terminan con <b>S T T L</b> (<i>sit tibi terra levis</i>, «que la tierra te sea leve»).</p>`, svg: ["Religión doméstica romana", [["Lares", "protegen la casa"], ["Penates", "guardan la despensa"], ["Antepasados", "necrópolis en las calzadas"]]] },
  ],
  videos: [["<h3>La casa: domus e insula</h3>", "domus"], ["<h3>Las termas y el foro</h3>", "termas"]],
  ejemplos: [
    ["Analiza el nombre «Marco Tulio Cicerón».", ["Marco es el praenomen, el nombre personal.", "Tulio es el nomen: pertenece a la gens Tulia.", "Cicerón es el cognomen, de cicer, «garbanzo», quizá por una verruga de un antepasado."], "Marco, de la familia Tulia, de la rama de los Cicerones."],
    ["Una lápida dice: «D M · LVCIA · AN XX · S T T L». ¿Qué significa?", ["D M: Dis Manibus, «a los dioses manes».", "Lucia es el nombre de la difunta; AN XX, annorum XX: de veinte años.", "S T T L: sit tibi terra levis, «que la tierra te sea leve»."], "Lápida funeraria dedicada a Lucia, muerta a los veinte años, con el deseo de que descanse en paz."],
    ["¿Por qué en las termas se seguía el orden tepidarium, caldarium, frigidarium?", ["Primero una sala templada para acostumbrar el cuerpo al calor.", "Después la sala caliente, para sudar y limpiarse la piel con el estrígilo.", "Al final, agua fría para cerrar los poros y tonificar."], "Para pasar del templado al calor y terminar con el frío, como en un circuito de spa actual."],
  ],
  errores: ["Imaginar a todos los romanos viviendo en lujosas domus: la mayoría vivía en insulae pequeñas, ruidosas y con riesgo de incendio."],
  niveles: "mbbbmbbmbm",
  ejercicios: [
    ["b", "¿Qué eran los tria nomina?", "Los tres nombres de un ciudadano romano: praenomen (nombre personal), nomen (gens) y cognomen (rama o apodo)."],
    ["b", "¿Qué era un termopolio?", "Un local en la planta baja de una casa donde se vendía comida y bebida caliente para llevar o tomar allí, como un bar de comida rápida."],
    ["b", "¿Con qué escribían los niños en la escuela romana?", "Con un stilus o punzón sobre tablillas de cera."],
    ["b", "¿Qué era el larario?", "El pequeño altar doméstico donde se honraba a los lares, los penates y el genio de la familia."],
    ["m", "Explica las tres partes de una cena romana.", "Gustatio (entrantes: huevos, aceitunas, verduras), prima mensa (carnes y pescados) y secunda mensa (frutas y dulces)."],
    ["m", "¿Qué diferencias había entre patricios y plebeyos y cómo cambió su situación?", "Los patricios eran las familias antiguas que monopolizaban el poder; los plebeyos, el resto de ciudadanos. Tras siglos de luchas, los plebeyos consiguieron igualdad de derechos políticos."],
    ["m", "Compara el volumen y el códice.", "El volumen era un rollo de papiro que se leía desenrollando; el códice, hojas de pergamino cosidas por un lado, como un libro: más cómodo, se escribía por las dos caras y era fácil buscar pasajes."],
    ["m", "¿Por qué las necrópolis estaban junto a las calzadas, fuera de la ciudad?", "Porque estaba prohibido enterrar dentro de la ciudad por motivos religiosos y de salud, y junto a los caminos los viajeros leían los nombres de los muertos y mantenían vivo su recuerdo."],
    ["m", "Explica qué era el peculio y para qué servía.", "El dinero que un esclavo podía ir ahorrando con permiso de su amo; servía para comprar su libertad."],
    ["m", "¿Qué alimentos no se comían en Roma y por qué?", "Tomate, patata, maíz, pimiento o chocolate, porque proceden de América y llegaron a Europa a partir del siglo XVI."],
    ["m", "¿Qué problemas de la ciudad romana resolvían los vigiles y las cloacas?", "Los vigiles apagaban los incendios, frecuentes en las insulae; las cloacas evacuaban las aguas sucias y de lluvia."],
    ["m", "Explica el ritual de la boda romana.", "La novia llevaba un velo anaranjado, se unían las manos derechas, se ofrecía un sacrificio y por la noche una procesión la llevaba a su nueva casa, donde el marido la cruzaba en brazos por la puerta."],
    ["m", "¿Qué nos cuentan los grafitis de Pompeya?", "Cómo era la vida diaria: anuncios electorales, propaganda de espectáculos, bromas, insultos, mensajes de amor y cuentas de las tabernas."],
    ["a", "Compara la vida de un esclavo minero y la de un esclavo médico en Roma.", "El minero trabajaba en condiciones durísimas, sin posibilidad de mejora, y moría joven; el médico, por su formación, era valorado, podía tener un trato mejor, ahorrar su peculio y llegar a ser liberto. Ambos, sin embargo, carecían de libertad y derechos."],
    ["a", "¿Por qué el códice fue un invento tan importante?", "Porque permitía reunir textos largos en un objeto manejable, escribir por las dos caras, buscar un pasaje con rapidez y conservar mejor los textos. Es el antecedente directo de nuestros libros y, por la forma de páginas, también del diseño de los documentos digitales."],
    ["a", "Elabora el menú de un banquete romano con sus tres partes y sin productos americanos.", "Respuesta abierta. Ejemplo: gustatio con huevos, aceitunas y queso; prima mensa con pollo asado con garum y pescado; secunda mensa con higos, uvas y pastel de miel; vino mezclado con agua."],
    ["a", "Analiza tu nombre completo como si fueras romano: ¿qué sería praenomen, nomen y cognomen?", "Respuesta abierta. Por ejemplo, el nombre de pila sería el praenomen, el primer apellido el nomen (la gens) y un apodo o el segundo apellido haría de cognomen."],
    ["a", "Compara una calle de Pompeya con una calle actual de tu ciudad.", "Semejanzas: aceras, pasos para cruzar, tiendas y bares en los bajos, fuentes, mensajes en las paredes. Diferencias: hoy hay alcantarillado completo, iluminación, tráfico de coches, normas de higiene y bomberos profesionales."],
    ["a", "¿Qué revela la costumbre de casar a las chicas a los doce años sobre la situación de la mujer en Roma?", "Que se consideraba a la mujer sobre todo como esposa y madre al servicio de alianzas familiares; no decidía sobre su vida ni recibía una educación completa, y pasaba de la autoridad del padre a la del marido."],
    ["a", "Redacta una inscripción funeraria imaginaria al estilo romano y tradúcela.", "Respuesta abierta. Ejemplo: «D M · MARCVS · AN L · S T T L»: «A los dioses manes. Marco, de cincuenta años. Que la tierra te sea leve»."],
    ["a", "¿Qué semejanzas encuentras entre las termas romanas y los gimnasios o spas actuales?", "Ambos combinan higiene, salud, ejercicio y vida social; tienen vestuarios, salas de distinta temperatura, piscinas y zonas de masaje. La diferencia es que las termas eran casi gratuitas y un lugar de reunión diario para toda la ciudad."],
  ],
  cuartas: ["El esclavo de más edad", "Un mercado", "El peplo", "En el suelo", "Los esclavos", "peristilo", "un vestido", "un senador", "cocinar", "gobernaban la ciudad", "un horno", "un general", "un postre de miel"],
  quiz: [
    ["El cognomen de Cayo Julio César es…", ["César", "Cayo", "Julio", "Augusto"], 0, "Rama de la familia."],
    ["Las hijas de un romano llamado Tulio se llamaban…", ["Tulia", "Julia", "Cornelia", "Marcia"], 0, "El nomen en femenino."],
    ["Un termopolio era…", ["un local de comida caliente", "unas termas", "un templo", "un teatro"], 0, "Comida rápida romana."],
    ["Los vigiles eran…", ["bomberos y vigilantes", "sacerdotes", "maestros", "gladiadores"], 0, "Creados por Augusto."],
    ["El stilus servía para…", ["escribir en tablillas de cera", "comer", "pintar", "medir"], 0, "De ahí «estilo»."],
    ["Un códice es…", ["un libro de hojas cosidas", "un rollo de papiro", "una tablilla", "una ley"], 0, "Antecedente del libro actual."],
    ["En el triclinio se comía…", ["recostado", "de pie", "sentado en sillas", "en el suelo"], 0, "Sobre tres lechos."],
    ["«Ab ovo usque ad mala» significa…", ["de principio a fin", "come despacio", "sin postre", "solo huevos"], 0, "Del huevo a las manzanas."],
    ["Los lares eran…", ["dioses protectores de la casa", "esclavos", "monedas", "vasijas"], 0, "Se honraban en el larario."],
    ["Las necrópolis estaban…", ["fuera de la ciudad, junto a las calzadas", "en el foro", "dentro de las casas", "en las termas"], 0, "Estaba prohibido enterrar dentro."],
  ],
  examen: [
    ["El peculio era…", ["el ahorro de un esclavo", "un vestido", "un juego", "una comida"], 0, "Con él podía comprar su libertad."],
    ["¿Qué producto NO conocían los romanos?", ["el tomate", "el aceite", "el vino", "el garum"], 0, "Llegó de América."],
    ["La Cloaca Máxima era…", ["el gran desagüe de Roma", "un templo", "una calzada", "un circo"], 0, "Aún funciona en parte."],
    ["«S T T L» significa…", ["que la tierra te sea leve", "aquí yace", "el Senado y el pueblo", "aprovecha el día"], 0, "Fórmula funeraria."],
    ["Pompeya quedó sepultada en el año…", ["79", "476", "44 a. C.", "1453"], 0, "Erupción del Vesubio."],
  ],
  tarjetas: [["Tria nomina", "Praenomen, nomen y cognomen de un ciudadano."], ["Triclinio", "Comedor romano con tres lechos."], ["Códice", "Libro de hojas cosidas por un lado."], ["Larario", "Altar doméstico de los lares."]],
  glosario: [["Patricio", "Miembro de las familias más antiguas de Roma."], ["Plebeyo", "Ciudadano romano que no era patricio."], ["Liberto", "Esclavo que ha recibido la libertad."], ["Peculio", "Ahorros de un esclavo."], ["Pater familias", "Jefe con autoridad sobre toda la familia."], ["Domus", "Casa unifamiliar de los ricos."], ["Insula", "Bloque de pisos de alquiler."], ["Termopolio", "Local de comida caliente."], ["Tablilla", "Tabla de madera con cera para escribir."], ["Códice", "Libro de hojas cosidas."], ["Triclinio", "Comedor con lechos para comer recostado."], ["Garum", "Salsa de pescado fermentado."], ["Lares", "Dioses protectores del hogar."], ["Necrópolis", "Cementerio, «ciudad de los muertos»."]],
  situacion: { titulo: "Un día en la vida de…", reto: "Reconstruir con rigor un día en la vida de un personaje de Grecia o Roma.", pasos: ["Elegir un personaje: una niña romana, un esclavo doméstico, un liberto tabernero, un senador o una mujer ateniense.", "Investigar su casa, su comida, su ropa, su trabajo o educación y su religión.", "Escribir un diario de un día completo, de la mañana a la noche, con al menos diez datos históricos.", "Añadir notas a pie de página que expliquen cada dato y su fuente.", "Leerlo en voz alta y comparar los distintos personajes de la clase."], producto: "Diario de un día de un personaje antiguo con notas explicativas.", evaluacion: ["Los datos históricos son correctos y variados.", "El relato refleja la posición social del personaje.", "Las notas citan fuentes fiables.", "La lectura es expresiva y clara."] },
  familias: ["Preparad en casa una receta romana sencilla (por ejemplo, pan con miel y queso o un moretum de hierbas) y comentad qué ingredientes no existían en Roma."],
  saberes: "la vida cotidiana en Grecia y Roma: sociedad, familia, vivienda, ciudad, educación, alimentación y religión doméstica.",
  minutos: 100,
});
