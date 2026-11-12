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
