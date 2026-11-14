// Programación y robótica 2º ESO · Proyecto final. Tema nivel libro (lote 8).
// Contenido y dibujos propios: esquemas de _eso2L8 y dibujos de la versión anterior del tema.
const H = require("./_eso2L8");
const S = "prog-proyecto-final";
const [vCarton, vMbot] = H.videos(S);

const metodo = H.ciclo("El método de proyectos es un ciclo: identificar el problema, diseñar, planificar, construir y programar, probar y evaluar, y mejorar", "PROYECTO", ["Problema", "Diseño", "Plan", "Construir", "Probar", "Mejorar"], "var(--pen)");
const fases = H.pasos("Fases del proyecto final: identificar el problema, buscar ideas, diseñar, planificar, construir y programar, probar, documentar y presentar", [
  "Identificar el problema y los requisitos",
  "Buscar información e ideas",
  "Diseñar la solución",
  "Planificar y repartir tareas",
  "Construir y programar",
  "Probar y mejorar",
  "Documentar y presentar",
], "Las fases");
const requisitos = H.comparar("Requisitos y restricciones: los requisitos dicen qué debe hacer el robot; las restricciones, los límites de tiempo, dinero y material", [
  ["Requisitos", ["qué debe hacer", "detectar obstáculos", "avisar con luz"], "var(--leaf)"],
  ["Restricciones", ["límites", "4 semanas", "solo material de clase"], "var(--red)"],
], "¿Qué y con qué límites?");
const matriz = H.tablaSvg("Matriz de decisión: tres ideas puntuadas de 1 a 5 en utilidad (U), viabilidad (V) y originalidad (O); gana la idea B con 13 puntos", ["Idea", "U · V · O", "Total"], [["A: robot que riega", "4 · 3 · 3", "10"], ["B: robot guía", "5 · 4 · 4", "13"], ["C: dron repartidor", "4 · 1 · 5", "10"]]);
const roles = H.cajas("Roles del equipo: coordinación, diseño y construcción, programación, pruebas y documentación", [
  ["Coordinación", "plan y plazos", "var(--pen)"],
  ["Construcción", "estructura y montaje", "var(--sun)"],
  ["Programación", "código y sensores", "var(--leaf)"],
  ["Pruebas y memoria", "probar y documentar", "var(--red)"],
], "Repartir el trabajo");
const materiales = H.cajas("Materiales para construir el robot: kit de robótica, cartón y materiales reutilizados, piezas impresas en 3D y herramientas seguras", [
  ["Kit de robótica", "placa, motores, sensores", "var(--pen)"],
  ["Reutilizados", "cartón, tapones, palos", "var(--leaf)"],
  ["Impresión 3D", "piezas a medida", "var(--sun)"],
  ["Herramientas", "tijeras, cola, bridas", "var(--red)"],
], "Construir con lo que hay");
const porPartes = H.pasos("Programar por partes: probar cada sensor, cada motor, cada comportamiento y unirlos, guardando versiones", [
  "Probar cada sensor y mostrar su valor",
  "Probar cada motor y cada actuador",
  "Programar un comportamiento cada vez",
  "Unir las partes con bucles y condicionales",
  "Guardar una versión que funcione (v1, v2…)",
], "Paso a paso");
const pruebas = H.tablaSvg("Plan de pruebas: cada prueba indica qué se hace, qué se espera y si el resultado es correcto", ["Prueba", "Se espera", "¿OK?"], [["Pared a 15 cm", "para y gira", "sí"], ["Pared a 50 cm", "sigue recto", "sí"], ["Cortina", "para", "no"], ["Pilas bajas", "funciona", "lento"]]);
const iterar = H.ciclo("Mejora iterativa: prototipo mínimo, probar, analizar los fallos, corregir y añadir una mejora cada vez", "VERSIÓN", ["Prototipo mínimo", "Probar", "Analizar", "Corregir", "Añadir mejora"], "var(--leaf)");
const memoria = H.pasos("Partes de la memoria técnica: portada, problema y requisitos, diseño, planificación, construcción y programa, pruebas, conclusiones y fuentes", [
  "Portada e índice",
  "Problema y requisitos",
  "Diseño: bocetos y diagramas",
  "Planificación y reparto",
  "Construcción y programa comentado",
  "Pruebas, mejoras y conclusiones",
], "La memoria técnica");
const presentar = H.cajas("Presentar el proyecto: demostración en directo, explicación del problema, vídeo de respaldo y respuesta a preguntas", [
  ["Problema", "por qué es útil", "var(--pen)"],
  ["Demostración", "el robot en directo", "var(--leaf)"],
  ["Vídeo", "por si algo falla", "var(--sun)"],
  ["Preguntas", "todo el equipo", "var(--red)"],
], "El día de la presentación");
const evaluar = H.comparar("Evaluar el proyecto: el producto (funciona, cumple requisitos, es sostenible) y el proceso (trabajo en equipo, planificación, mejoras)", [
  ["Producto", ["cumple requisitos", "funciona y es seguro", "sostenible"], "var(--pen)"],
  ["Proceso", ["trabajo en equipo", "plazos cumplidos", "aprendizajes"], "var(--leaf)"],
], "¿Qué se evalúa?");

module.exports = {
  materia: H.MATERIA,
  curso: H.CURSO,
  titulo: "Proyecto final",
  minutos: 120,
  objetivos: [
    "Aplicar el método de proyectos para resolver un problema real con un robot programado",
    "Definir requisitos y restricciones y elegir la mejor idea con criterios",
    "Diseñar la solución con bocetos, diagramas de flujo, listas de materiales y esquemas",
    "Planificar y repartir el trabajo en equipo con herramientas de organización",
    "Construir, programar, probar y mejorar el prototipo de forma iterativa",
    "Documentar el proyecto en una memoria técnica, presentarlo y evaluarlo",
  ],
  claves: ["proyecto", "método de proyectos", "requisito", "restricción", "lluvia de ideas", "matriz de decisión", "prototipo", "boceto", "lista de materiales", "tablero kanban", "plan de pruebas", "iteración", "control de versiones", "memoria técnica", "autoevaluación"],
  pregunta: {
    texto: "¿Por qué los ingenieros no empiezan un proyecto construyendo directamente la máquina?",
    respuesta: "Porque construir sin pensar suele acabar en algo que no resuelve el problema, que no cabe, que cuesta demasiado o que hay que rehacer. Antes se <b>entiende el problema</b>, se fijan los <mark>requisitos</mark>, se comparan ideas y se <b>diseña</b> y <b>planifica</b>. Después se construye un <mark>prototipo</mark> sencillo, se prueba y se mejora en varias vueltas. Pensar al principio ahorra mucho tiempo y material al final.",
  },
  lectura: {
    titulo: "Los estudiantes que llevaron su robot a una competición mundial",
    html: `<p>Cada año, miles de equipos de jóvenes de todo el mundo participan en competiciones de robótica educativa como la <b>FIRST LEGO League</b>. En cada edición se propone un gran tema, como la energía, el espacio o los océanos, y los equipos tienen unos meses para diseñar, construir y programar un robot que supere misiones en una mesa de juego, además de investigar un problema real y proponer una solución innovadora.</p>
<p>Lo que más valoran los jueces no es solo que el robot funcione, sino <b>cómo ha trabajado el equipo</b>: si han definido bien el problema, si han repartido las tareas, si han probado y mejorado su robot muchas veces, si saben explicar sus decisiones y si han ayudado a otros equipos. Muchos participantes cuentan que el momento más importante fue cuando el robot fallaba una y otra vez y tuvieron que encontrar juntos la causa.</p>
<p>En España participan cada año cientos de equipos de colegios e institutos. Su experiencia demuestra que, con un método de trabajo ordenado, un grupo de estudiantes de tu edad puede crear soluciones tecnológicas sorprendentes. Este tema es la guía de tu propio proyecto final: un reto en el que usarás todo lo aprendido durante el curso.</p>`,
  },
  bloques: [
    {
      html: `<h3>8.1 ¿Qué es un proyecto tecnológico?</h3><p>Un <mark>proyecto tecnológico</mark> es un trabajo organizado para resolver un problema o satisfacer una necesidad creando un objeto, una máquina o un programa. En este curso, el proyecto final consiste en diseñar, construir y programar un <b>robot</b> (o un sistema automático) que resuelva un reto real.</p><p>Para que un proyecto salga bien se sigue el <mark>método de proyectos</mark>, un conjunto de fases ordenadas que usan también los ingenieros y los equipos de las empresas tecnológicas: entender el problema, diseñar una solución, planificar, construir, probar, mejorar y presentar.</p><p>Aunque las fases tienen un orden, el método es un <b>ciclo</b>: las pruebas suelen descubrir problemas que obligan a volver al diseño o a la programación. Eso no es un fracaso, es parte del proceso. El proyecto final reúne todo lo que has aprendido: algoritmos, Scratch, eventos, bucles y condicionales, sensores, motores y trabajo en equipo.</p>`,
      svg: metodo,
    },
    {
      html: `<h3>8.2 Las fases del proyecto</h3><p>El proyecto final se organiza en siete fases:</p><p>1. <b>Identificar el problema</b>: qué necesidad vamos a resolver y qué debe cumplir la solución.<br>2. <b>Buscar información e ideas</b>: investigar soluciones parecidas y proponer ideas propias.<br>3. <b>Diseñar</b>: dibujar el robot, su programa y su circuito, y decidir los materiales.<br>4. <b>Planificar</b>: dividir el trabajo en tareas, repartirlas y fijar plazos.<br>5. <b>Construir y programar</b>: montar la estructura, conectar sensores y motores y escribir el programa.<br>6. <b>Probar y mejorar</b>: comprobar que funciona, encontrar errores y corregirlos.<br>7. <b>Documentar y presentar</b>: escribir la memoria técnica y mostrar el proyecto.</p><p>Cada fase produce algo concreto (un documento, un dibujo, un prototipo) que sirve de base a la siguiente. Al final de cada sesión conviene revisar en qué fase está el equipo y qué falta para pasar a la siguiente.</p>`,
      svg: fases,
    },
    {
      html: `<h3>8.3 Identificar el problema: requisitos y restricciones</h3><p>Todo empieza con un <b>problema</b> bien definido. «Hacer un robot chulo» no es un problema; «los alumnos nuevos se pierden en el instituto el primer día» sí lo es. Una buena forma de encontrar problemas es <b>observar</b> el entorno y <b>preguntar</b> a las personas afectadas.</p><p>Después se escriben los <mark>requisitos</mark>: lo que la solución <b>debe hacer</b>. Por ejemplo: «el robot debe seguir un recorrido por el pasillo», «debe detenerse si hay una persona delante», «debe avisar con luz y sonido al llegar».</p><p>También hay que tener en cuenta las <mark>restricciones</mark>: los <b>límites</b> con los que hay que trabajar. Por ejemplo: «tenemos cuatro semanas», «solo podemos usar el kit de robótica de clase y material reciclado», «no puede medir más de 30 cm». Los requisitos y restricciones se escriben al principio y sirven al final para comprobar si el proyecto ha tenido éxito. Es mejor pocos requisitos claros y realistas que una lista enorme imposible de cumplir.</p>`,
      svg: requisitos,
    },
    {
      html: `<h3>8.4 Buscar ideas y elegir la mejor</h3><p>Antes de decidir, conviene tener <b>muchas ideas</b>. En una <mark>lluvia de ideas</mark>, cada miembro del equipo propone soluciones sin que nadie las critique; cuantas más, mejor, incluso las que parezcan raras. También es útil <b>investigar</b> cómo se ha resuelto antes un problema parecido: buscar proyectos en internet, en la comunidad de Scratch o en vídeos de robótica educativa, citando siempre las fuentes.</p><p>Para elegir, se usa una <mark>matriz de decisión</mark>: una tabla en la que cada idea se puntúa, por ejemplo de 1 a 5, según unos <b>criterios</b>: ¿es útil (U)?, ¿es viable (V) con nuestro material y tiempo?, ¿es original (O)?, ¿es segura? Se suman los puntos y gana la idea con más puntuación.</p><p>La matriz evita decidir solo por quién habla más alto y ayuda a ver los puntos débiles de cada idea. Una idea muy original pero imposible de construir en cuatro semanas (como un dron repartidor) puede perder frente a otra más sencilla y viable.</p>`,
      svg: matriz,
    },
    {
      html: `<h3>8.5 Diseñar la solución</h3><p>En la fase de <b>diseño</b> se define cómo será el robot antes de construirlo. El equipo prepara varios documentos:</p><p>• Un <mark>boceto</mark> del robot, con vistas desde distintos lados, medidas aproximadas y la posición de sensores, motores y placa.<br>• El <b>diagrama de flujo</b> o el pseudocódigo del programa: qué hace el robot y qué decide en cada situación.<br>• La <b>lista de materiales</b>: piezas, cantidades y de dónde salen (kit, reciclado, impresión 3D).<br>• El <b>esquema de conexiones</b>: qué sensor o motor va a cada puerto de la placa.</p><p>Diseñar en papel es mucho más barato y rápido que equivocarse con el robot ya montado. Además, los documentos permiten que todo el equipo comparta la misma idea y que cada uno sepa qué tiene que hacer. Si durante la construcción hay que cambiar algo, se actualizan los documentos: así siempre reflejan el robot real.</p>`,
      svg: H.viejo(S, 2),
    },
    {
      html: `<h3>8.6 Trabajar en equipo</h3><p>Un proyecto de este tamaño solo sale adelante si el equipo se organiza. Una buena práctica es repartir <mark>roles</mark>, que pueden ir rotando:</p><p>• <b>Coordinación</b>: vigila el plan y los plazos, modera las reuniones y comunica al profesorado cómo va el equipo.<br>• <b>Diseño y construcción</b>: se encarga de la estructura, el montaje y los materiales.<br>• <b>Programación</b>: escribe y prueba el programa y los sensores.<br>• <b>Pruebas y documentación</b>: prepara el plan de pruebas, anota los resultados y redacta la memoria.</p><p>Tener un rol no significa trabajar solo: todos ayudan en todo y todos deben entender el robot completo. Algunas normas útiles: escuchar todas las opiniones, tomar las decisiones por consenso o votación, cumplir los compromisos, pedir ayuda a tiempo y resolver los conflictos hablando. Al final de cada sesión, una breve reunión de cinco minutos («¿qué hemos hecho?, ¿qué haremos?, ¿qué nos bloquea?») mantiene a todo el equipo coordinado.</p>`,
      svg: roles,
    },
    {
      html: `<h3>8.7 Planificar y organizar el trabajo</h3><p>La <mark>planificación</mark> consiste en dividir el proyecto en <b>tareas</b> pequeñas y concretas, decidir quién hace cada una y en qué orden, y fijar <b>plazos</b>. Una tarea bien definida es algo como «probar el sensor de ultrasonidos y anotar sus valores», no «hacer el robot».</p><p>Una herramienta muy útil es el <mark>tablero kanban</mark>: un panel con tres columnas, «<b>Por hacer</b>», «<b>Haciendo</b>» y «<b>Hecho</b>». Cada tarea se escribe en una nota adhesiva y se mueve de columna a medida que avanza. De un vistazo, todo el equipo sabe qué falta, quién está con qué y si alguna tarea se ha atascado. Se puede hacer en un corcho, en una cartulina o con una aplicación.</p><p>También ayuda un <b>calendario</b> con las sesiones disponibles y los hitos: diseño terminado, prototipo funcionando, pruebas acabadas, memoria entregada. Es normal que algunas tareas tarden más de lo previsto; por eso conviene dejar sesiones de margen al final para imprevistos.</p>`,
      svg: H.viejo(S, 3),
    },
    {
      html: `<h3>8.8 Construir el robot</h3><p>En la fase de <b>construcción</b> se monta la estructura y se conectan los componentes siguiendo el diseño. Se pueden combinar varios tipos de materiales:</p><p>• Las piezas de un <b>kit de robótica</b>: placa, motores, ruedas, sensores, cables.<br>• <b>Materiales reutilizados</b>: cartón, tapones, palos de helado, botellas. Son baratos, fáciles de cortar y sostenibles.<br>• Piezas hechas con una <b>impresora 3D</b> o cortadas con láser, si el centro dispone de ellas.</p><p>Al construir hay que pensar en la <b>robustez</b> (que no se desmonte al chocar), el <b>peso</b> (un robot pesado gasta más batería y los motores sufren), el <b>centro de gravedad</b> (que no vuelque) y el <b>acceso</b> a la batería y a los cables para poder cambiarlos. Y siempre con <b>seguridad</b>: usar las herramientas adecuadas, cortar sobre una base, tener cuidado con la pistola de cola caliente y desconectar la batería antes de manipular los cables.</p>`,
      svg: materiales,
      video: vCarton,
    },
    {
      html: `<h3>8.9 Programar por partes</h3><p>El error más común es escribir el programa completo de golpe y probarlo al final: cuando falla, es casi imposible saber dónde está el problema. Es mucho mejor <b>programar por partes</b>:</p><p>1. Probar cada <b>sensor</b> por separado, mostrando su valor en la pantalla, y calibrar los umbrales.<br>2. Probar cada <b>motor</b> y cada actuador: ¿gira en el sentido correcto?, ¿a qué velocidad?<br>3. Programar <b>un comportamiento</b> cada vez: primero avanzar y parar ante un obstáculo; luego, girar; después, las luces.<br>4. <b>Unir</b> las partes con bucles y condicionales, probando después de cada unión.</p><p>Cada vez que una versión funcione, <b>guárdala</b> con un nombre que indique el número de versión y la fecha (robot_v1, robot_v2…). A esto se le llama <mark>control de versiones</mark>: si un cambio estropea algo, se puede volver a la última versión buena. Y añade <b>comentarios</b> que expliquen cada parte del programa: el equipo, el profesorado y tú mismo dentro de un mes lo agradeceréis.</p>`,
      svg: porPartes,
      video: vMbot,
    },
    {
      html: `<h3>8.10 Probar con un plan</h3><p>Probar no es encender el robot y ver «si va». Hay que hacerlo de forma <b>sistemática</b>, con un <mark>plan de pruebas</mark>: una tabla con cada prueba, lo que se hace, lo que <b>se espera</b> que ocurra y lo que <b>ocurre de verdad</b>.</p><p>Un buen plan incluye:</p><p>• Pruebas de cada <b>requisito</b>: si el robot debe pararse ante una persona, se prueba con una persona.<br>• Pruebas de <b>casos límite</b>: obstáculos muy cerca o muy lejos, objetos blandos, mucha o poca luz.<br>• Pruebas de <b>resistencia</b>: el robot funcionando un buen rato, con las pilas medio gastadas.<br>• Pruebas de <b>uso real</b>: personas ajenas al equipo usando el robot.</p><p>Cada prueba que falla es una información valiosa: indica algo que hay que mejorar. Anota también el resultado de las pruebas que fallan y lo que hicisteis para arreglarlas; esa información irá a la memoria y demuestra que el equipo ha trabajado con método.</p>`,
      svg: pruebas,
    },
    {
      html: `<h3>8.11 Mejorar por versiones</h3><p>En lugar de intentar un robot perfecto desde el principio, los equipos con experiencia construyen primero un <mark>prototipo mínimo</mark>: la versión más sencilla que ya resuelve lo esencial del problema. Por ejemplo, un robot que avanza y se detiene ante un obstáculo, aunque aún no tenga luces ni carcasa.</p><p>A partir de ahí, se avanza en <mark>iteraciones</mark> o vueltas: probar, analizar qué falla o qué se puede mejorar, corregir y añadir <b>una mejora</b> cada vez. Así siempre hay un robot que funciona, aunque se acabe el tiempo, y los problemas se detectan pronto, cuando aún son pequeños.</p><p>Para decidir qué mejorar primero, ordena las ideas según su <b>importancia</b> para los requisitos y su <b>dificultad</b>: primero lo importante y fácil; lo difícil y poco importante, si sobra tiempo. Aprende también a decir «esto no da tiempo»: renunciar a una mejora para entregar un robot que funcione bien es una decisión profesional, no una derrota.</p>`,
      svg: iterar,
    },
    {
      html: `<h3>8.12 La memoria técnica</h3><p>La <mark>memoria técnica</mark> es el documento que explica el proyecto para que cualquier persona pueda entenderlo e incluso reproducirlo. Sus partes habituales son:</p><p>• <b>Portada e índice</b>: título, nombres del equipo, fecha.<br>• <b>Problema y requisitos</b>: qué necesidad resuelve el robot y qué debía cumplir.<br>• <b>Diseño</b>: bocetos, diagrama de flujo, lista de materiales y esquema de conexiones.<br>• <b>Planificación</b>: tareas, reparto y calendario.<br>• <b>Construcción y programación</b>: fotos del proceso y el programa comentado.<br>• <b>Pruebas y mejoras</b>: tabla de pruebas, problemas encontrados y soluciones.<br>• <b>Conclusiones</b>: qué se ha conseguido, qué se mejoraría y qué ha aprendido el equipo.<br>• <b>Fuentes y créditos</b>: webs, vídeos e ideas de otras personas que se han usado.</p><p>La memoria se escribe <b>durante</b> el proyecto, no al final: hacer fotos y apuntar decisiones cada sesión ahorra mucho trabajo. Un cuaderno de bitácora del equipo es una gran ayuda.</p>`,
      svg: memoria,
    },
    {
      html: `<h3>8.13 Presentar el proyecto</h3><p>Un buen proyecto merece una buena <b>presentación</b>. En pocos minutos, el equipo debe explicar el problema, la solución y cómo ha trabajado. Algunas claves:</p><p>• Empieza por el <b>problema</b>: ¿por qué es importante?, ¿a quién ayuda vuestro robot?<br>• Haz una <b>demostración en directo</b>: es lo que más convence. Prepara el espacio y comprueba las pilas antes.<br>• Ten un <b>vídeo de respaldo</b> por si algo falla en el momento: a todos los equipos les pasa alguna vez.<br>• Explica las <b>decisiones</b> y los <b>problemas</b> que resolvisteis: muestran lo que habéis aprendido.<br>• Usa diapositivas con <b>pocas palabras</b> y muchas imágenes.<br>• Que <b>todo el equipo</b> participe y sepa responder a las preguntas.</p><p>Ensayad la presentación al menos una vez, controlando el tiempo. Hablar con claridad, mirar al público y mostrar entusiasmo por vuestro trabajo marca la diferencia. Escuchar las presentaciones de los demás equipos también es una oportunidad para aprender.</p>`,
      svg: presentar,
    },
    {
      html: `<h3>8.14 Evaluar y reflexionar</h3><p>Al terminar, toca <b>evaluar</b> el proyecto desde dos puntos de vista:</p><p>• El <b>producto</b>: ¿cumple los requisitos?, ¿funciona de forma fiable y segura?, ¿está bien construido y programado?, ¿es sostenible (materiales reutilizados, bajo consumo, piezas que se pueden reaprovechar)?<br>• El <b>proceso</b>: ¿hemos seguido el método?, ¿hemos cumplido los plazos?, ¿cómo ha funcionado el equipo?, ¿hemos documentado bien?</p><p>Además de la evaluación del profesorado, es muy útil la <mark>autoevaluación</mark> (cada uno valora su propio trabajo) y la <b>coevaluación</b> (los compañeros se valoran entre sí y valoran a otros equipos) con una <b>rúbrica</b>, una tabla con los criterios y los niveles de logro.</p><p>Por último, reflexionad: ¿qué haríais diferente?, ¿qué habéis aprendido de programación, de robótica y de trabajar en equipo? ¿Podría vuestro robot tener efectos no deseados, como recoger datos de las personas? Pensar en el impacto de lo que creamos es parte de ser buenos tecnólogos.</p>`,
      svg: evaluar,
    },
  ],
  figura: H.figura(S),
  video: H.video(S),
  ejemplos: [
    { enunciado: "Transforma la idea «un robot para el comedor» en un problema con requisitos y restricciones.", pasos: ["Problema: en el comedor hay mucho ruido y cuesta hablar.", "Requisitos: medir el nivel de sonido; mostrar verde, amarillo o rojo; sonar un aviso si sigue en rojo 10 s.", "Restricciones: 4 semanas, micro:bit y material reciclado, presupuesto 0 €."], resultado: "Un «semáforo de ruido» con requisitos medibles." },
    { enunciado: "Elige entre tres ideas con una matriz de decisión (útil, viable, original, de 1 a 5): A (4, 3, 3), B (5, 4, 4), C (4, 1, 5).", pasos: ["A: 4 + 3 + 3 = 10.", "B: 5 + 4 + 4 = 13.", "C: 4 + 1 + 5 = 10."], resultado: "Se elige B; C es muy original pero poco viable." },
    { enunciado: "Divide en tareas la fase de construir y programar un robot que evita obstáculos.", pasos: ["Montar chasis, ruedas y motores.", "Colocar y conectar el sensor de ultrasonidos.", "Probar motores y sensor por separado.", "Programar «avanzar y parar ante obstáculo».", "Añadir el giro y las luces.", "Hacer las pruebas del plan."], resultado: "Seis tareas concretas para el tablero kanban." },
    { enunciado: "Redacta tres pruebas para el requisito «el robot se detiene a menos de 20 cm de un obstáculo».", pasos: ["Pared lisa a 15 cm: se espera que pare.", "Caja a 40 cm: se espera que siga.", "Peluche a 15 cm (blando): se espera que pare; puede fallar por absorción del sonido."], resultado: "Pruebas normales y de caso límite." },
    { enunciado: "El robot funcionaba en la v2, pero tras añadir las luces en la v3 ya no gira. ¿Qué hace el equipo?", pasos: ["Volver a cargar la v2 y comprobar que gira: el error está en los cambios de la v3.", "Comparar v2 y v3: al añadir las luces se movió el bloque de giro fuera del condicional.", "Corregir y guardar como v4."], resultado: "El control de versiones permite localizar el error rápidamente." },
    { enunciado: "Calcula: 12 sesiones disponibles; diseño 3, construcción 3, programación 3, pruebas 2. ¿Cuántas quedan para memoria y presentación?", pasos: ["3 + 3 + 3 + 2 = 11 sesiones.", "12 − 11 = 1 sesión.", "Es poco: conviene escribir la memoria durante el proyecto y solapar programación y construcción."], resultado: "Solo 1 sesión; hay que replanificar." },
  ],
  errores: [
    "Empezar a construir sin haber definido el problema ni los requisitos.",
    "Elegir una idea demasiado ambiciosa para el tiempo y el material disponibles.",
    "Escribir todo el programa de golpe y probarlo solo al final.",
    "No guardar versiones del programa que funcionan y perderlas al hacer cambios.",
    "Dejar la memoria para el último día en lugar de documentar cada sesión.",
    "Que una sola persona haga todo y el resto del equipo no entienda cómo funciona el robot.",
  ],
  ejercicios: H.nivelar([
    ["¿Qué es un proyecto tecnológico?", "Un trabajo organizado para resolver un problema o necesidad creando un objeto, una máquina o un programa."],
    ["Escribe en orden las fases del proyecto final.", "Identificar el problema, buscar ideas, diseñar, planificar, construir y programar, probar y mejorar, documentar y presentar."],
    ["¿Qué diferencia hay entre un requisito y una restricción?", "El requisito dice qué debe hacer la solución; la restricción indica los límites (tiempo, dinero, material, tamaño)."],
    ["¿Qué es una lluvia de ideas y qué norma tiene?", "Una técnica para proponer muchas ideas; la norma es no criticar ninguna mientras se proponen."],
    ["Nombra cuatro documentos de la fase de diseño.", "Boceto, diagrama de flujo, lista de materiales y esquema de conexiones."],
    ["¿Qué columnas tiene un tablero kanban?", "Por hacer, Haciendo y Hecho."],
    ["Nombra cuatro roles de un equipo de proyecto.", "Coordinación, construcción, programación y pruebas o documentación."],
    ["¿Qué es un prototipo?", "Una primera versión del producto que se construye para probar la idea y mejorarla."],
    ["Escribe tres materiales reutilizados útiles para construir un robot.", "Cartón, tapones de botella y palos de helado (también botellas o tubos)."],
    ["¿Qué partes tiene una memoria técnica?", "Portada e índice, problema y requisitos, diseño, planificación, construcción y programa, pruebas y mejoras, conclusiones y fuentes."],
    ["Escribe un problema real de tu instituto que podría resolver un robot y dos requisitos.", "Ejemplo: las luces de los pasillos se quedan encendidas. Requisitos: detectar si hay personas y apagar la luz si no hay nadie durante 5 minutos."],
    ["Puntúa con una matriz de decisión tres ideas (útil, viable, original, de 1 a 5) y elige una.", "Ejemplo: riego automático (5, 4, 2) = 11; robot camarero (3, 2, 4) = 9; semáforo de ruido (4, 5, 3) = 12. Se elige el semáforo de ruido."],
    ["Explica por qué conviene diseñar en papel antes de construir.", "Porque es más barato y rápido corregir un dibujo que un robot montado, y permite que todo el equipo comparta la misma idea y sepa qué hacer."],
    ["Divide en cinco tareas concretas la tarea «hacer el programa».", "Probar el sensor; probar los motores; programar avanzar y parar; programar el giro; unir todo y añadir luces y sonido."],
    ["¿Por qué es mejor programar por partes que todo de golpe?", "Porque si algo falla se sabe en qué parte está el error; probando cada parte se detectan los problemas pronto y son más fáciles de corregir."],
    ["¿Qué es el control de versiones y cómo lo aplicarías en Scratch o mBlock?", "Guardar copias numeradas de un programa cuando funciona para poder volver atrás. En Scratch, guardar en el ordenador robot_v1.sb3, robot_v2.sb3…"],
    ["Escribe un plan de pruebas de cuatro filas para un robot sigue-líneas.", "Recta: sigue la línea. Curva suave: la sigue. Curva cerrada: la sigue (puede fallar). Línea interrumpida: se para o la busca. Cada fila con resultado esperado y obtenido."],
    ["Explica qué es un prototipo mínimo con un ejemplo.", "La versión más sencilla que ya resuelve lo esencial. Ejemplo: un robot de riego que solo enciende un LED cuando la tierra está seca, antes de conectar la bomba."],
    ["¿Qué normas de seguridad seguirías al construir el robot?", "Usar las herramientas adecuadas y cortar sobre una base, cuidado con la cola caliente, desconectar la batería al manipular cables y probar el robot en el suelo."],
    ["Escribe las preguntas de una reunión de cinco minutos de seguimiento.", "¿Qué hemos hecho? ¿Qué vamos a hacer ahora? ¿Qué nos bloquea o en qué necesitamos ayuda?"],
    ["Diferencia entre autoevaluación, coevaluación y rúbrica.", "Autoevaluación: cada uno valora su trabajo. Coevaluación: los compañeros se valoran entre sí. Rúbrica: tabla de criterios y niveles de logro que se usa para evaluar."],
    ["Prepara el guion de una presentación de 3 minutos de vuestro proyecto.", "30 s problema; 60 s solución y demostración; 45 s decisiones y problemas resueltos; 30 s conclusiones y mejoras; 15 s preguntas. Con vídeo de respaldo."],
    ["Redacta los requisitos y restricciones completos de un robot guía para visitantes.", "Requisitos: seguir un recorrido marcado, parar ante personas, avisar con luz y sonido en cada parada, reanudar al pulsar un botón. Restricciones: 4 semanas, kit de clase y cartón, máximo 30 cm, sin coste."],
    ["El robot falla en la demostración aunque funcionaba ayer. Haz una lista de posibles causas y cómo comprobarlas.", "Pilas bajas (medir o cambiarlas); otra luz en la sala (recalibrar sensores); cable suelto (revisar conexiones); programa distinto cargado (comprobar la versión); suelo diferente (probar velocidad)."],
    ["Planifica en un calendario de 10 sesiones un proyecto completo con margen para imprevistos.", "1: problema; 2: ideas y matriz; 3: diseño; 4: plan y materiales; 5-6: construcción y programación por partes; 7: unión y pruebas; 8: mejoras; 9: memoria y ensayo; 10: presentación. La sesión 8 sirve de margen."],
    ["Propón tres criterios de sostenibilidad para evaluar un robot.", "Uso de materiales reutilizados o reciclables; bajo consumo de energía (apagar motores cuando no hacen falta); piezas desmontables y reaprovechables al terminar."],
    ["Un miembro del equipo no participa. ¿Cómo lo resolveríais de forma respetuosa?", "Hablar con él para entender el motivo, asignarle un rol y tareas concretas que le interesen, revisar el reparto en la reunión y, si no se resuelve, pedir ayuda al profesorado."],
    ["Analiza el impacto ético de un robot que graba vídeo en los pasillos para contar personas.", "Puede vulnerar la privacidad: hay que informar, pedir permiso, no guardar imágenes o usar sensores que solo cuenten (sin cámara), y cumplir las normas de protección de datos."],
    ["Escribe las conclusiones de un proyecto imaginario: qué se ha logrado, qué falló y qué se mejoraría.", "Respuesta abierta. Debe indicar qué requisitos se cumplen, qué problemas aparecieron y cómo se resolvieron, qué no dio tiempo y qué mejoras se proponen, además de lo aprendido en equipo."],
    ["Diseña una rúbrica de cuatro criterios y tres niveles para evaluar el proyecto final.", "Criterios: funcionamiento, diseño y documentación, trabajo en equipo y presentación. Niveles: en proceso, conseguido y excelente, con una descripción breve de cada nivel por criterio."],
  ]),
  quiz: H.test([
    ["El método de proyectos empieza por…", ["identificar el problema", "construir el robot", "presentar", "comprar material"], "Entender qué hay que resolver."],
    ["Un requisito indica…", ["lo que debe hacer la solución", "el tiempo disponible", "el color del robot", "quién presenta"], "Qué debe cumplir."],
    ["«Tenemos 4 semanas» es una…", ["restricción", "idea", "prueba", "fase"], "Un límite."],
    ["En una lluvia de ideas…", ["no se critican las ideas", "solo habla el coordinador", "se elige la primera idea", "se vota antes de proponer"], "Cuantas más, mejor."],
    ["Una matriz de decisión sirve para…", ["elegir la mejor idea con criterios", "programar el robot", "montar la placa", "medir distancias"], "Puntuar ideas."],
    ["El dibujo del robot con medidas es el…", ["boceto", "kanban", "plan de pruebas", "índice"], "Fase de diseño."],
    ["El esquema de conexiones indica…", ["qué componente va a cada puerto", "el calendario", "el reparto de roles", "las conclusiones"], "Circuito."],
    ["El tablero kanban tiene las columnas…", ["por hacer, haciendo y hecho", "lunes, martes y miércoles", "sí, no y quizá", "diseño, código y memoria"], "Organizar tareas."],
    ["Una tarea bien definida es…", ["probar el sensor y anotar sus valores", "hacer el robot", "terminar todo", "trabajar mucho"], "Concreta."],
    ["Tener roles en el equipo significa que…", ["cada uno se responsabiliza de una parte pero todos colaboran", "cada uno trabaja solo", "solo trabaja el coordinador", "no hace falta comunicarse"], "Colaboración."],
    ["Al construir con cartón y tapones se favorece la…", ["sostenibilidad", "velocidad", "potencia", "precisión del sensor"], "Reutilizar."],
    ["Lo mejor para programar el robot es…", ["hacerlo por partes y probar cada una", "escribirlo todo y probar al final", "copiarlo sin entenderlo", "no probarlo"], "Errores localizados."],
    ["Guardar robot_v1, robot_v2… es hacer…", ["control de versiones", "una lluvia de ideas", "un boceto", "una rúbrica"], "Poder volver atrás."],
    ["Un plan de pruebas recoge…", ["qué se prueba, qué se espera y qué ocurre", "solo los fallos", "los nombres del equipo", "el precio"], "Probar con método."],
    ["Un caso límite es…", ["una situación extrema o rara", "la prueba más fácil", "el final del proyecto", "un error de sintaxis"], "Donde suelen aparecer fallos."],
    ["El prototipo mínimo es…", ["la versión más sencilla que ya resuelve lo esencial", "el robot terminado", "un dibujo", "una presentación"], "Base para iterar."],
    ["La memoria técnica se escribe…", ["durante todo el proyecto", "solo el último día", "antes de tener el problema", "nunca"], "Cuaderno de bitácora."],
    ["En la presentación conviene tener un vídeo…", ["de respaldo por si falla la demostración", "de otro equipo", "sin relación", "de una hora"], "Imprevistos."],
    ["Valorar el propio trabajo es…", ["autoevaluación", "coevaluación", "calibración", "planificación"], "Reflexión personal."],
    ["Una rúbrica es…", ["una tabla de criterios y niveles de logro", "un tipo de sensor", "una fase del proyecto", "un material"], "Para evaluar."],
  ], 0),
  examen: H.test([
    ["Ideas: A (3, 4, 2), B (4, 4, 4), C (5, 2, 3). Gana…", ["B con 12", "A con 9", "C con 10", "empate"], "Suma de puntos."],
    ["Si un cambio estropea el programa, lo más rápido es…", ["volver a la última versión que funcionaba", "borrar todo", "empezar otro proyecto", "cambiar de robot"], "Control de versiones."],
    ["«Peluche a 15 cm» en el plan de pruebas es…", ["un caso límite", "un requisito", "una restricción", "un rol"], "Objeto blando."],
    ["12 sesiones y 11 ocupadas en diseño, construcción, programación y pruebas: queda…", ["1 sesión", "3 sesiones", "11 sesiones", "ninguna"], "12 − 11."],
    ["La primera prueba de un sensor consiste en…", ["mostrar su valor en pantalla", "montar la carcasa", "presentar el proyecto", "escribir la memoria"], "Programar por partes."],
    ["Una idea muy original pero imposible de construir a tiempo…", ["pierde puntos en viabilidad", "gana siempre", "no se puntúa", "es un requisito"], "Matriz de decisión."],
    ["La pregunta «¿qué nos bloquea?» es propia de…", ["la reunión de seguimiento", "el boceto", "la lista de materiales", "la portada"], "Coordinación."],
    ["Evaluar si se han cumplido los plazos es evaluar el…", ["proceso", "producto", "sensor", "boceto"], "Cómo se ha trabajado."],
  ], 1),
  feynman: ["Qué fases tiene el método de proyectos y por qué es un ciclo", "Cómo se definen requisitos y restricciones y cómo se elige una idea", "Qué documentos se preparan en la fase de diseño", "Por qué hay que programar por partes, guardar versiones y probar con un plan", "Qué partes tiene una memoria técnica y cómo se evalúa un proyecto"],
  mapa: H.mapa("PROYECTO FINAL", "var(--eso)", [
    ["Pensar", "problema · requisitos · ideas", "var(--pen)"],
    ["Diseñar", "boceto · flujo · materiales", "#b8860b"],
    ["Hacer", "kanban · construir · programar", "var(--red)"],
    ["Cerrar", "pruebas · memoria · presentar", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Método de proyectos", "Fases ordenadas que forman un ciclo."],
    ["Requisito", "Lo que debe hacer la solución."],
    ["Restricción", "Límite de tiempo, dinero, material o tamaño."],
    ["Lluvia de ideas", "Muchas ideas, sin críticas."],
    ["Matriz de decisión", "Puntuar ideas con criterios y sumar."],
    ["Boceto", "Dibujo del robot con medidas."],
    ["Kanban", "Por hacer · Haciendo · Hecho."],
    ["Prototipo mínimo", "Versión más sencilla que ya funciona."],
    ["Control de versiones", "Guardar v1, v2… para poder volver atrás."],
    ["Plan de pruebas", "Prueba, resultado esperado y obtenido."],
    ["Memoria técnica", "Documento que explica todo el proyecto."],
    ["Rúbrica", "Criterios y niveles para evaluar."],
  ],
  glosario: [
    ["Proyecto tecnológico", "Trabajo organizado para resolver un problema creando un objeto, una máquina o un programa."],
    ["Método de proyectos", "Conjunto de fases ordenadas para desarrollar un proyecto tecnológico."],
    ["Requisito", "Condición que debe cumplir la solución."],
    ["Restricción", "Límite con el que hay que trabajar: tiempo, presupuesto, material o tamaño."],
    ["Lluvia de ideas", "Técnica de grupo para proponer muchas ideas sin juzgarlas."],
    ["Matriz de decisión", "Tabla que puntúa varias ideas según unos criterios para elegir la mejor."],
    ["Boceto", "Dibujo a mano alzada que muestra la forma y las partes de un objeto."],
    ["Lista de materiales", "Relación de piezas y materiales necesarios con sus cantidades."],
    ["Planificación", "División del trabajo en tareas con responsables y plazos."],
    ["Tablero kanban", "Panel con columnas para seguir el estado de las tareas."],
    ["Prototipo", "Primera versión de un producto que se construye para probar y mejorar la idea."],
    ["Iteración", "Cada vuelta del ciclo de probar, analizar y mejorar."],
    ["Control de versiones", "Práctica de guardar copias numeradas de un programa para poder volver a una anterior."],
    ["Plan de pruebas", "Lista de comprobaciones con el resultado esperado y el obtenido."],
    ["Memoria técnica", "Documento que describe todo el proceso y el resultado de un proyecto."],
    ["Rúbrica", "Tabla con criterios de evaluación y niveles de logro."],
  ],
  situacion: {
    titulo: "Reto final: un robot al servicio del instituto",
    reto: "Como cierre del curso, cada equipo resolverá un problema real del instituto con un robot o sistema automático programado: guiar visitantes, avisar del ruido, regar el huerto, recordar apagar las luces… Los proyectos se presentarán en una feria abierta a las familias.",
    pasos: [
      "Observad el instituto, entrevistad a alguien afectado y definid el problema, los requisitos y las restricciones.",
      "Haced una lluvia de ideas, elegid con una matriz de decisión y preparad bocetos, diagrama de flujo, lista de materiales y esquema de conexiones.",
      "Repartid roles, organizad las tareas en un tablero kanban y fijad un calendario con hitos.",
      "Construid el prototipo mínimo, programadlo por partes y guardad versiones.",
      "Probad con un plan de pruebas, mejorad por iteraciones y escribid la memoria técnica durante el proceso.",
      "Presentad el proyecto en la feria con demostración, vídeo de respaldo y respuesta a preguntas, y haced la autoevaluación.",
    ],
    producto: "Robot o sistema funcional, memoria técnica, tablero de planificación y presentación en la feria.",
    evaluacion: [
      "El robot resuelve el problema y cumple los requisitos dentro de las restricciones.",
      "El diseño, la planificación y las pruebas están documentados en la memoria técnica.",
      "El programa está organizado, comentado y guardado por versiones.",
      "El equipo colabora, presenta con claridad y reflexiona sobre su trabajo y el impacto del robot.",
    ],
  },
  familias: ["Pedid que os explique el problema que resuelve su proyecto y qué fase están haciendo.", "Ayudad a reunir materiales reutilizables: cartón, tapones, botellas.", "Asistid a la feria de proyectos si es posible y haced preguntas al equipo.", "Comentad juntos qué ha aprendido trabajando en equipo y cómo resolvieron los problemas."],
  profesores: {
    saberes: H.saberes("Proyecto de diseño, construcción y programación de un sistema robótico: fases del método de proyectos, definición de requisitos y restricciones, generación y selección de ideas, documentación de diseño (bocetos, diagramas de flujo, listas de materiales y esquemas), planificación y gestión de tareas, construcción con criterios de seguridad y sostenibilidad, programación modular, control de versiones, plan de pruebas, mejora iterativa, memoria técnica, comunicación y evaluación", "situació d'aprenentatge de projecte tecnològic amb robòtica: treball cooperatiu, disseny, programació, documentació tècnica i comunicació del producte."),
    ideas: [
      "Feria de proyectos abierta a las familias o a los alumnos de Primaria.",
      "Tablero kanban por equipos en la pared del aula, revisado al inicio de cada sesión.",
      "Diario de equipo (bitácora) con fotos y decisiones de cada sesión.",
      "Rúbrica compartida desde el primer día para autoevaluación y coevaluación.",
      "Participación en competiciones de robótica educativa como FIRST LEGO League o retos autonómicos.",
    ],
  },
  fuentes: [H.RD, H.DEC, H.wiki("Kanban (desarrollo)", "Kanban_(desarrollo)"), H.wiki("Prototipo", "Prototipo"), H.wiki("FIRST LEGO League", "FIRST_Lego_League"), { t: "mBlock: entorno de programación de robots", url: "https://mblock.cc/" }],
  revisado: H.REV,
};
