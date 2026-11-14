// Programación y robótica 2º ESO · Sensores y motores. Tema nivel libro (lote 8).
// Contenido y dibujos propios: esquemas de _eso2L8 y dibujos de la versión anterior del tema.
const H = require("./_eso2L8");
const S = "prog-sensores-motores";
const [, vServo] = H.videos(S);
const vLinea = { id: "kLkZM3t1bgM", titulo: "Carrito seguidor de línea con sensor CNY70", canal: "Antonio Gonzalez", vistas: 30271, busqueda: "sensor infrarrojo seguidor de línea robot" };

const ent = H.flechas("Sistema de control: entrada con sensores, proceso en el controlador con el programa y salida con actuadores", ["Entrada: sensores miden el entorno", "Proceso: el controlador compara y decide", "Salida: actuadores mueven, iluminan, suenan", "El entorno cambia y se vuelve a medir"], "De la entrada a la salida");
const magnitudes = H.radial("Magnitudes que miden los sensores: distancia, luz, temperatura, sonido, contacto e inclinación", "SENSORES", ["Distancia", "Luz", "Temperatura", "Sonido", "Contacto", "Inclinación"], "var(--inf)");
const digitales = H.tablaSvg("Sensores digitales: pulsador, final de carrera, sensor de presencia e interruptor de inclinación; todos dan 0 o 1", ["Sensor", "Da 1 cuando…"], [["Pulsador", "se aprieta"], ["Final de carrera", "algo choca"], ["Presencia (PIR)", "hay movimiento"], ["Inclinación", "se inclina"], ["Botón de la placa", "se pulsa"]]);
const luz = H.scratch("Programa con sensor de luz: por siempre, si el nivel de luz es menor que 30 encender el LED en blanco, si no apagarlo; es una farola automática", [
  ["al hacer clic en ⚑", "eventos"], ["por siempre", "control"], ["si ⟨(nivel de luz) < 30⟩", "control", 1], ["encender LED en blanco", "robot", 2], ["si no", "control", 1], ["apagar LED", "robot", 2],
], "Farola automática");
const linea = H.tablaSvg("Seguidor de línea con dos sensores: si los dos ven negro avanza, si el izquierdo ve blanco gira a la izquierda… según la posición de la línea", ["Izq.", "Der.", "El robot…"], [["negro", "negro", "avanza"], ["negro", "blanco", "gira a la izquierda"], ["blanco", "negro", "gira a la derecha"], ["blanco", "blanco", "busca la línea"]]);
const otros = H.cajas("Otros sensores: temperatura, humedad, acelerómetro, brújula, micrófono y color", [
  ["Temperatura", "°C del aire", "var(--red)"],
  ["Humedad", "del suelo o aire", "var(--inf)"],
  ["Acelerómetro", "movimiento, caídas", "var(--pen)"],
  ["Brújula", "orientación", "var(--sun)"],
  ["Micrófono", "nivel de sonido", "var(--bac)"],
  ["Color", "rojo, verde, azul", "var(--leaf)"],
], "Más sentidos");
const actuadores = H.cajas("Actuadores que no se mueven: LED, LED RGB, zumbador y pantalla", [
  ["LED", "luz de un color", "var(--red)"],
  ["LED RGB", "mezcla de colores", "var(--leaf)"],
  ["Zumbador", "pitidos y notas", "var(--sun)"],
  ["Pantalla", "texto y dibujos", "var(--pen)"],
], "Luz, sonido e imagen");
const tiposMotor = H.compara("Servomotor frente a motor de corriente continua: el servo va a un ángulo exacto entre 0 y 180 grados; el motor de corriente continua gira sin parar a la velocidad que se le indica", ["Motor CC", "var(--pen)", ["gira sin parar", "velocidad con %", "ruedas", "sentido con signo"]], ["Servomotor", "var(--red)", ["va a un ángulo", "de 0° a 180°", "brazos, barreras", "se queda quieto"]], "Dos motores, dos usos");
const calibrar = H.flechas("Calibrar un sensor: medir sobre blanco, medir sobre negro, calcular el umbral como la media y probarlo", ["Medir sobre blanco: por ejemplo 80", "Medir sobre negro: por ejemplo 20", "Umbral = media = (80 + 20) : 2 = 50", "Probar y ajustar con la luz real"], "Calibrar el sensor de línea");
const lazos = H.compara("Lazo abierto frente a lazo cerrado: el abierto no mide el resultado, como un tostador con temporizador; el cerrado mide y corrige, como un termostato", ["Lazo abierto", "var(--sun)", ["no mide el resultado", "avanzar 2 segundos", "tostador", "sencillo"]], ["Lazo cerrado", "var(--leaf)", ["mide y corrige", "avanzar hasta 20 cm", "termostato", "más preciso"]], "Sistemas de control");

module.exports = {
  materia: H.MATERIA,
  curso: H.CURSO,
  titulo: "Sensores y motores",
  minutos: 115,
  objetivos: [
    "Entender un sistema de control como entrada, proceso y salida",
    "Distinguir señales digitales y analógicas y usar umbrales para decidir",
    "Conocer el funcionamiento de los sensores de contacto, luz, ultrasonidos e infrarrojos",
    "Usar actuadores: LED, zumbadores, motores de corriente continua y servomotores",
    "Calibrar sensores y programar comportamientos como seguir una línea o evitar obstáculos",
    "Diferenciar los sistemas de control en lazo abierto y en lazo cerrado",
  ],
  claves: ["sensor", "actuador", "señal digital", "señal analógica", "umbral", "pulsador", "LDR", "ultrasonidos", "infrarrojos", "seguidor de línea", "LED", "zumbador", "motor de corriente continua", "servomotor", "calibrar", "lazo cerrado"],
  pregunta: {
    texto: "¿Cómo sabe un robot aspirador que está a punto de caerse por una escalera si no tiene ojos?",
    respuesta: "Lleva debajo unos <mark>sensores de infrarrojos</mark> que emiten una luz invisible hacia el suelo y miden cuánta rebota. Si de repente no vuelve casi nada de luz, es que el suelo ha «desaparecido»: hay un escalón. El programa compara ese valor con un <b>umbral</b> y, si está por debajo, ordena a los <b>motores</b> que paren y retrocedan. Sensores, programa y motores trabajan juntos en cada instante.",
  },
  lectura: {
    titulo: "El coche que frena solo",
    html: `<p>Muchos coches nuevos llevan un sistema llamado <b>frenada automática de emergencia</b>. En la parte delantera tienen un <b>radar</b> y una <b>cámara</b> que vigilan la carretera decenas de veces por segundo. Si un peatón cruza de repente o el coche de delante frena en seco y el conductor no reacciona, el sistema primero avisa con un pitido y una luz, y si aun así no hay respuesta, <b>frena solo</b>.</p>
<p>Desde 2022, la Unión Europea obliga a que los coches nuevos incorporen este tipo de sistemas, porque reducen mucho los atropellos y los choques por alcance. Detrás de esta tecnología hay ideas que vas a aprender en este tema: unos <b>sensores</b> que miden distancias, un <b>programa</b> que compara esas medidas con unos límites de seguridad y unos <b>actuadores</b> que ejecutan la decisión, en este caso los frenos.</p>
<p>Lo más difícil para los ingenieros no es frenar, sino <b>no frenar cuando no hace falta</b>: una bolsa de plástico o la sombra de un puente no deben provocar una frenada brusca. Por eso los sensores se calibran con mucho cuidado y se combinan entre sí. Con los sensores de tu robot de clase te enfrentarás a problemas muy parecidos.</p>`,
  },
  bloques: [
    {
      html: `<h3>7.1 Entrada, proceso y salida</h3><p>Un robot o cualquier sistema automático se puede entender como un <mark>sistema de control</mark> con tres partes:</p><p>• <b>Entrada</b>: los <mark>sensores</mark> miden algo del entorno (la distancia, la luz, la temperatura) y lo convierten en una señal eléctrica.<br>• <b>Proceso</b>: el <b>controlador</b> recibe esa señal, la compara con lo que dice el programa y decide qué hacer.<br>• <b>Salida</b>: los <mark>actuadores</mark> convierten la orden del controlador en una acción: mover un motor, encender una luz, sonar un pitido.</p><p>Este esquema aparece en muchos aparatos de la vida diaria: una farola que se enciende al anochecer (sensor de luz → controlador → lámpara), un grifo que se abre al acercar las manos (sensor de infrarrojos → controlador → válvula) o la calefacción con termostato (sensor de temperatura → controlador → caldera). Para programar un robot hay que saber qué mide cada sensor, qué hace cada actuador y cómo se conectan en el programa.</p>`,
      svg: ent,
    },
    {
      html: `<h3>7.2 ¿Qué es un sensor?</h3><p>Un <mark>sensor</mark> es un dispositivo que detecta una <b>magnitud física</b> del entorno y la transforma en una <b>señal eléctrica</b> que el controlador puede leer. Es como un traductor entre el mundo real y el mundo de los números.</p><p>Hay sensores para casi cualquier magnitud:</p><p>• <b>Distancia</b>: ultrasonidos, infrarrojos, láser.<br>• <b>Luz</b>: fotorresistencias (LDR), fotodiodos.<br>• <b>Temperatura</b>: termistores, sondas.<br>• <b>Sonido</b>: micrófonos.<br>• <b>Contacto</b>: pulsadores, finales de carrera.<br>• <b>Movimiento e inclinación</b>: acelerómetros y giroscopios, como los del móvil.<br>• <b>Posición</b>: GPS, brújula.</p><p>Tu móvil, por ejemplo, tiene más de diez sensores: el acelerómetro gira la pantalla, el sensor de proximidad apaga la pantalla al acercarla a la oreja, el de luz ajusta el brillo y el GPS indica dónde estás. Al elegir un sensor para un robot hay que pensar qué magnitud necesitamos medir, con qué precisión y a qué distancia.</p>`,
      svg: magnitudes,
    },
    {
      html: `<h3>7.3 Señales digitales y analógicas</h3><p>Los sensores pueden dar dos tipos de señal:</p><p>• <mark>Señal digital</mark>: solo tiene <b>dos valores</b>, 0 o 1, apagado o encendido, sí o no. Un pulsador es digital: o está pulsado o no lo está. En el programa se usa directamente como condición: «si botón pulsado entonces…».<br>• <mark>Señal analógica</mark>: puede tomar <b>muchos valores</b> intermedios que varían de forma continua. Un sensor de luz puede dar cualquier valor entre 0 (oscuridad total) y 100 (mucha luz), según la placa. La distancia, la temperatura o el volumen también son analógicos.</p><p>Para tomar decisiones con una señal analógica se usa un <mark>umbral</mark>: un valor límite que separa dos situaciones. Por ejemplo, si el nivel de luz es menor que 30, «es de noche»; si no, «es de día». Elegir bien el umbral es clave: si es demasiado alto o demasiado bajo, el robot se equivocará. Cuando se compara con un umbral, la señal analógica se convierte, en la práctica, en una decisión digital.</p>`,
      svg: H.viejo(S, 1),
    },
    {
      html: `<h3>7.4 Sensores de contacto y presencia</h3><p>Los sensores digitales más sencillos son los de <b>contacto</b>:</p><p>• El <mark>pulsador</mark>: un botón que cierra un circuito mientras se aprieta. Los robots educativos suelen tener uno en la placa para empezar el programa.<br>• El <b>final de carrera</b>: un pulsador con una palanca que se activa cuando algo choca contra ella. Se usa en los parachoques de los robots para detectar choques, en las impresoras 3D para saber dónde termina cada eje y en las puertas de garaje para que el motor se pare al llegar al tope.</p><p>Otros sensores digitales detectan <b>presencia</b>: los <b>sensores PIR</b> (infrarrojos pasivos) captan el calor del cuerpo humano en movimiento y encienden las luces de un pasillo o activan una alarma. Los <b>interruptores de inclinación</b> detectan si un objeto se ha volcado. En el programa, todos ellos se usan igual: una condición verdadera o falsa dentro de un bucle que la comprueba continuamente.</p>`,
      svg: digitales,
    },
    {
      html: `<h3>7.5 El sensor de luz</h3><p>Una <mark>fotorresistencia</mark> o <b>LDR</b> (en inglés, <i>light dependent resistor</i>) es un componente cuya resistencia eléctrica <b>disminuye cuando recibe más luz</b>. La placa mide ese cambio y lo convierte en un número: el <b>nivel de luz</b>. Muchas placas, como micro:bit o mBot, ya traen un sensor de luz integrado.</p><p>Con un sensor de luz se pueden programar muchos comportamientos:</p><p>• Una <b>farola automática</b>: si el nivel de luz es menor que el umbral, encender un LED; si no, apagarlo.<br>• Un robot que <b>busca la luz</b>, como una polilla: si el sensor izquierdo recibe más luz que el derecho, girar a la izquierda.<br>• Una <b>alarma</b> que suena si se abre una caja oscura.</p><p>Para elegir el umbral, primero se miden los valores reales: se muestra el nivel de luz en la pantalla del ordenador o de la placa con la luz encendida y con la sala a oscuras, y se elige un valor intermedio. Ese umbral puede cambiar de un aula a otra, por eso conviene comprobarlo siempre.</p>`,
      svg: luz,
    },
    {
      html: `<h3>7.6 El sensor de ultrasonidos</h3><p>El <mark>sensor de ultrasonidos</mark> mide distancias igual que los murciélagos o los delfines: por <b>ecolocalización</b>. Tiene dos «ojos»: uno es un emisor que lanza un pulso de sonido muy agudo, que no podemos oír (ultrasonido), y el otro es un receptor que escucha el eco cuando el sonido rebota en un obstáculo.</p><p>El sensor mide el <b>tiempo</b> que tarda el sonido en ir y volver. Como el sonido viaja a unos 340 m/s, la distancia es: <b>distancia = velocidad × tiempo : 2</b>. Se divide entre 2 porque el sonido hace el camino de ida y de vuelta. La placa hace el cálculo y entrega la distancia directamente en centímetros.</p><p>Suele medir bien entre unos 3 cm y unos 4 m. Tiene limitaciones: las superficies blandas (cortinas, peluches) absorben el sonido y las superficies muy inclinadas lo desvían, así que el eco puede no volver. Es el sensor típico de los robots que evitan obstáculos y de los sensores de aparcamiento de los coches.</p>`,
      svg: H.viejo(S, 2),
    },
    {
      html: `<h3>7.7 Los infrarrojos y el seguidor de línea</h3><p>Un <mark>sensor de infrarrojos</mark> reflexivo tiene un pequeño LED que emite luz infrarroja (invisible para nosotros) y un receptor que mide cuánta luz rebota. Las superficies <b>blancas</b> reflejan mucha luz; las <b>negras</b> la absorben y reflejan poca. Así, el sensor «sabe» si está sobre blanco o sobre negro.</p><p>Con dos sensores colocados juntos debajo del robot, sobre una línea negra ancha, se construye un <mark>seguidor de línea</mark>. El programa compara lo que ve cada sensor:</p><p>• Los dos ven la línea: el robot va centrado y <b>avanza</b>.<br>• Solo el izquierdo ve la línea: el robot se ha desviado a la derecha y debe <b>girar a la izquierda</b>.<br>• Solo el derecho la ve: <b>girar a la derecha</b>.<br>• Ninguno la ve: se ha salido; puede retroceder o girar para buscarla.</p><p>Los robots que transportan material en fábricas y hospitales usan una idea parecida, siguiendo líneas o marcas en el suelo.</p>`,
      svg: linea,
      video: vLinea,
    },
    {
      html: `<h3>7.8 Otros sensores útiles</h3><p>Además de los anteriores, en los proyectos de clase se usan a menudo estos sensores:</p><p>• <b>Temperatura</b>: mide los grados del aire o de un objeto. Sirve para una estación meteorológica o un ventilador automático.<br>• <b>Humedad</b>: del aire o del suelo. Con un sensor de humedad del suelo se puede programar un sistema de riego que solo riegue cuando la tierra está seca.<br>• <b>Acelerómetro</b>: detecta movimientos, sacudidas, caídas e inclinación. La micro:bit lo usa para detectar si se agita o se gira.<br>• <b>Brújula</b> o magnetómetro: indica hacia qué punto cardinal apunta el robot.<br>• <b>Micrófono</b>: mide el nivel de sonido; útil para un semáforo de ruido en el comedor.<br>• <b>Color</b>: distingue colores midiendo la cantidad de rojo, verde y azul que refleja una superficie.</p><p>Combinar varios sensores permite que el robot entienda mejor su entorno: un coche autónomo combina cámaras, radar, ultrasonidos y GPS para no depender de uno solo.</p>`,
      svg: otros,
    },
    {
      html: `<h3>7.9 Actuadores de luz y sonido</h3><p>Los <mark>actuadores</mark> transforman las órdenes del controlador en acciones. No todos se mueven: algunos producen luz, sonido o imágenes.</p><p>• El <b>LED</b> (diodo emisor de luz) se enciende cuando le llega corriente en el sentido correcto. Consume muy poco y dura mucho. Se usa como indicador: verde «todo bien», rojo «obstáculo».<br>• El <b>LED RGB</b> tiene tres LED dentro (rojo, verde y azul). Mezclando sus intensidades se obtiene casi cualquier color: rojo + verde = amarillo; los tres al máximo = blanco.<br>• El <b>zumbador</b> (o <i>buzzer</i>) produce pitidos y notas musicales vibrando a distintas frecuencias. Sirve para alarmas, avisos o melodías.<br>• La <b>pantalla</b> o matriz de LED muestra números, textos o dibujos, como los 25 LED de la micro:bit.</p><p>Estos actuadores son muy útiles para la <b>depuración</b>: encender un LED de color distinto según la decisión que toma el programa permite ver qué está «pensando» el robot.</p>`,
      svg: actuadores,
    },
    {
      html: `<h3>7.10 Los motores de corriente continua</h3><p>Los <mark>motores de corriente continua</mark> (motores CC) transforman la energía eléctrica en movimiento de giro. Son los que mueven las ruedas de la mayoría de los robots educativos. Normalmente llevan una <b>reductora</b>, un conjunto de engranajes que disminuye la velocidad de giro y aumenta la fuerza.</p><p>En el programa se controlan dos cosas:</p><p>• La <b>velocidad</b>, normalmente en porcentaje (de 0 a 100 %) o en una escala de 0 a 255.<br>• El <b>sentido de giro</b>: hacia delante o hacia atrás, a menudo con un número positivo o negativo.</p><p>Un robot con <b>dos motores</b>, uno en cada rueda (tracción diferencial), puede hacer todos los movimientos: si las dos ruedas giran hacia delante a la misma velocidad, avanza recto; si una gira más deprisa que la otra, describe una curva; si giran en sentidos contrarios, gira sobre sí mismo. Los motores necesitan más corriente que la que da la placa por sí sola, así que se conectan a través de un circuito controlador de motores.</p>`,
      svg: H.viejo(S, 4),
    },
    {
      html: `<h3>7.11 Servomotores y otros motores</h3><p>Un <mark>servomotor</mark> (o servo) es un motor que no gira sin parar, sino que se coloca en un <b>ángulo exacto</b>, normalmente entre 0° y 180°, y se queda ahí. Por dentro lleva un pequeño motor, unos engranajes y un sensor que mide su posición: es un sistema en lazo cerrado en miniatura. En el programa basta con indicar el ángulo: «servo a 90°».</p><p>Los servos son ideales para mover <b>articulaciones</b>: el brazo de un robot, la barrera de un aparcamiento, el timón de un barco teledirigido, la cabeza de un robot que «mira» a los lados con su sensor de ultrasonidos o una pinza que se abre y se cierra.</p><p>Existen también <b>motores paso a paso</b>, que giran en pasos pequeños y exactos (por ejemplo, 200 pasos por vuelta). Se usan cuando hace falta mucha precisión, como en las impresoras 3D y las máquinas de control numérico. Elegir el motor depende de la tarea: ruedas que giran sin fin → motor CC; ángulo preciso y limitado → servo; posición muy precisa en muchas vueltas → paso a paso.</p>`,
      svg: tiposMotor,
      video: vServo,
    },
    {
      html: `<h3>7.12 Calibrar los sensores</h3><p>Los sensores reales no son perfectos. Sus valores dependen de la <b>luz de la sala</b>, del <b>material</b> de las superficies, de la <b>batería</b> y de pequeñas diferencias de fabricación entre un sensor y otro. Además, las medidas tienen <b>ruido</b>: pequeñas variaciones aleatorias aunque nada cambie.</p><p>Por eso, antes de usar un sensor hay que <mark>calibrarlo</mark>: comprobar qué valores da en las situaciones reales y elegir los umbrales a partir de ellos. Para un sensor de línea:</p><p>1. Medir sobre el <b>blanco</b> de la pista (por ejemplo, 80).<br>2. Medir sobre la <b>línea negra</b> (por ejemplo, 20).<br>3. Tomar como <b>umbral</b> el valor intermedio: (80 + 20) : 2 = 50.<br>4. <b>Probar</b> y ajustar si hace falta.</p><p>Para evitar que el ruido provoque decisiones erróneas, se pueden hacer varias medidas y calcular la <b>media</b>, o pedir que la condición se cumpla durante un tiempo antes de actuar. Guarda los valores de calibración en variables: así, si cambias de aula, solo tendrás que medir de nuevo.</p>`,
      svg: calibrar,
    },
    {
      html: `<h3>7.13 Un robot que evita obstáculos</h3><p>Uno de los programas clásicos de robótica combina el sensor de ultrasonidos y los motores: un robot que se mueve por la habitación <b>sin chocar</b>. Su lógica es sencilla:</p><p>• En un bucle «por siempre», leer la <b>distancia</b>.<br>• <b>Si</b> la distancia es menor que 20 cm, hay un obstáculo cerca: parar, retroceder un poco y girar.<br>• <b>Si no</b>, el camino está libre: avanzar.</p><p>Se puede mejorar de muchas formas: girar hacia un lado <b>al azar</b> para no quedarse atrapado en un rincón; <b>reducir la velocidad</b> a medida que se acerca a la pared (por ejemplo, velocidad = distancia); encender un LED rojo cuando detecta un obstáculo; o montar el sensor en un <b>servo</b> que gire a izquierda y derecha para mirar a ambos lados y elegir el más despejado.</p><p>Es el mismo principio que usan los robots aspiradores, aunque ellos combinan varios sensores: ultrasonidos o láser, choque, caída e infrarrojos.</p>`,
      svg: H.viejo(S, 6),
    },
    {
      html: `<h3>7.14 Lazo abierto y lazo cerrado</h3><p>Los sistemas de control pueden funcionar de dos maneras:</p><p>• En <mark>lazo abierto</mark>, el sistema actúa <b>sin medir el resultado</b>. Un tostador con temporizador calienta un tiempo fijo, aunque el pan ya esté quemado. Un robot programado para «avanzar 2 segundos» no sabe si ha llegado a su destino: si las ruedas patinan, se queda corto.<br>• En <mark>lazo cerrado</mark>, el sistema <b>mide el resultado</b> con un sensor y <b>corrige</b> su acción. Un termostato mide la temperatura y enciende o apaga la calefacción para mantenerla. Un robot que «avanza hasta que la distancia sea 20 cm» se detiene en el sitio correcto aunque el suelo resbale.</p><p>Los sistemas en lazo abierto son más sencillos y baratos; los de lazo cerrado son más <b>precisos</b> y se adaptan a los cambios, pero necesitan sensores. A la información que vuelve del sensor al controlador se le llama <b>realimentación</b>. La mayoría de los robots combinan ambos: movimientos rápidos en lazo abierto y correcciones en lazo cerrado.</p>`,
      svg: lazos,
    },
  ],
  figura: H.figura(S),
  video: H.video(S),
  ejemplos: [
    { enunciado: "Un sensor de ultrasonidos recibe el eco 0,002 s después de emitir el pulso. ¿A qué distancia está el obstáculo? (velocidad del sonido: 340 m/s)", pasos: ["El sonido recorre 340 · 0,002 = 0,68 m entre ida y vuelta.", "Distancia = 0,68 : 2 = 0,34 m."], resultado: "El obstáculo está a 34 cm." },
    { enunciado: "Calibra un sensor de línea que da 75 sobre blanco y 15 sobre negro. ¿Qué umbral usarías?", pasos: ["Umbral = (75 + 15) : 2.", "= 90 : 2 = 45.", "Si el valor < 45 → ve negro; si no → ve blanco."], resultado: "Umbral 45." },
    { enunciado: "Programa una farola que se encienda cuando el nivel de luz baje de 30.", pasos: ["por siempre.", "si nivel de luz < 30 entonces encender LED.", "si no, apagar LED."], resultado: "Condicional doble dentro de un bucle por siempre." },
    { enunciado: "Un seguidor de línea: el sensor izquierdo ve blanco y el derecho ve negro. ¿Qué debe hacer?", pasos: ["La línea está bajo el sensor derecho.", "El robot se ha desviado hacia la izquierda.", "Para volver a centrarse debe girar hacia la línea, a la derecha."], resultado: "Girar a la derecha." },
    { enunciado: "¿Qué motor elegirías para la barrera de un aparcamiento, para las ruedas de un robot y para una impresora 3D?", pasos: ["Barrera: sube a 90° y baja a 0° → servomotor.", "Ruedas: giran sin parar → motor de corriente continua.", "Impresora 3D: posiciones muy precisas → motor paso a paso."], resultado: "Servo, motor CC y paso a paso." },
    { enunciado: "Convierte «avanzar 3 segundos» (lazo abierto) en un movimiento en lazo cerrado que pare a 15 cm de la pared.", pasos: ["Lazo abierto: avanzar, esperar 3 s, parar; no sabe dónde acaba.", "Lazo cerrado: repetir hasta que distancia < 15: avanzar.", "Después: parar motores."], resultado: "repetir hasta que distancia < 15 [avanzar]; parar." },
  ],
  errores: [
    "Usar un umbral sin haber medido antes los valores reales del sensor en el aula.",
    "Confundir señal digital (solo 0 o 1) con analógica (muchos valores intermedios).",
    "Olvidar dividir entre 2 al calcular la distancia con ultrasonidos: el sonido va y vuelve.",
    "Comprobar el sensor una sola vez, fuera de un bucle, y esperar que el robot reaccione todo el tiempo.",
    "Pedir a un servomotor que gire sin parar como una rueda: solo va a ángulos entre 0° y 180°.",
    "Pensar que «avanzar 2 segundos» lleva siempre al mismo sitio: sin sensores (lazo abierto) no se corrigen los errores.",
  ],
  ejercicios: H.nivelar([
    ["¿Qué es un sensor? ¿Y un actuador? Pon dos ejemplos de cada uno.", "Un sensor detecta una magnitud del entorno y la convierte en señal eléctrica (ultrasonidos, LDR). Un actuador convierte una orden en acción (motor, LED)."],
    ["Explica las tres partes de un sistema de control.", "Entrada (sensores que miden), proceso (el controlador compara y decide) y salida (actuadores que actúan)."],
    ["Clasifica como digital o analógico: pulsador, sensor de luz, final de carrera, sensor de temperatura.", "Digitales: pulsador y final de carrera. Analógicos: luz y temperatura."],
    ["¿Qué es un umbral?", "Un valor límite que separa dos situaciones al leer un sensor analógico, por ejemplo luz < 30 = noche."],
    ["¿Cómo mide la distancia un sensor de ultrasonidos?", "Emite un sonido muy agudo, recibe el eco y mide el tiempo de ida y vuelta; con la velocidad del sonido calcula la distancia."],
    ["¿Por qué un sensor de infrarrojos distingue el blanco del negro?", "Porque el blanco refleja mucha luz infrarroja y el negro la absorbe y refleja poca."],
    ["Nombra cuatro actuadores que no producen movimiento.", "LED, LED RGB, zumbador y pantalla."],
    ["¿Qué diferencia hay entre un motor de corriente continua y un servomotor?", "El motor CC gira sin parar a la velocidad indicada; el servomotor se coloca en un ángulo exacto (0° a 180°) y se queda quieto."],
    ["Escribe tres sensores que tenga un teléfono móvil y para qué sirven.", "Acelerómetro (girar la pantalla), sensor de luz (ajustar el brillo) y GPS (saber la posición). También proximidad y micrófono."],
    ["¿Qué es una LDR y cómo cambia con la luz?", "Una fotorresistencia: su resistencia eléctrica disminuye cuando recibe más luz."],
    ["Un eco tarda 0,004 s. Calcula la distancia al obstáculo (sonido a 340 m/s).", "340 · 0,004 = 1,36 m (ida y vuelta); 1,36 : 2 = 0,68 m = 68 cm."],
    ["Un sensor de luz da 90 con la luz encendida y 10 a oscuras. ¿Qué umbral pondrías y por qué?", "(90 + 10) : 2 = 50, un valor intermedio que separa bien las dos situaciones."],
    ["Completa la tabla del seguidor de línea con dos sensores (negro-negro, negro-blanco, blanco-negro, blanco-blanco).", "Negro-negro: avanzar. Izquierdo negro y derecho blanco: girar a la izquierda. Izquierdo blanco y derecho negro: girar a la derecha. Blanco-blanco: buscar la línea."],
    ["Escribe un programa que haga sonar el zumbador si alguien pulsa el botón.", "por siempre: si botón pulsado entonces tocar nota Do 0,5 pulsos."],
    ["¿Qué hace un robot con tracción diferencial si la rueda izquierda va al 50 % y la derecha al 20 %?", "Gira hacia la derecha describiendo una curva, porque la rueda izquierda avanza más."],
    ["¿Y si la izquierda va al 50 % hacia delante y la derecha al 50 % hacia atrás?", "Gira sobre sí mismo hacia la derecha, sin avanzar."],
    ["Explica qué es el ruido de un sensor y una forma de reducirlo.", "Pequeñas variaciones aleatorias de las medidas aunque nada cambie. Se reduce haciendo varias medidas y calculando la media."],
    ["Diseña un riego automático: sensor, actuador y programa.", "Sensor de humedad del suelo; actuador: bomba o válvula. Por siempre: si humedad < umbral entonces encender bomba; si no, apagarla."],
    ["¿Qué color da un LED RGB con rojo y azul encendidos al máximo y verde apagado?", "Magenta (morado rosado)."],
    ["Elige el motor adecuado: brazo que coge piezas, ventilador, plotter de dibujo.", "Brazo: servomotores en las articulaciones. Ventilador: motor CC. Plotter: motores paso a paso."],
    ["Explica la diferencia entre lazo abierto y lazo cerrado con dos ejemplos de casa.", "Lazo abierto: microondas que calienta un tiempo fijo. Lazo cerrado: nevera o calefacción con termostato, que mide la temperatura y corrige."],
    ["Programa un robot que avance hasta estar a 10 cm de la pared y luego encienda un LED rojo.", "repetir hasta que distancia < 10: avanzar al 40 % · parar motores · LED en rojo."],
    ["Mejora el robot que evita obstáculos para que no se quede atrapado en los rincones.", "Al detectar un obstáculo: retroceder, y girar a un lado elegido al azar o durante un tiempo aleatorio; también se puede usar un servo para mirar a ambos lados y elegir el más despejado."],
    ["Programa un robot que reduzca la velocidad al acercarse a un obstáculo.", "por siempre: dar a v el valor distancia · si v > 60 entonces v = 60 · si distancia < 8 entonces parar; si no, avanzar a velocidad v %. Cuanto más cerca, más despacio."],
    ["Calcula el tiempo que tarda el eco de un obstáculo situado a 1,7 m.", "Recorre 3,4 m (ida y vuelta); t = 3,4 : 340 = 0,01 s."],
    ["Un seguidor de línea funciona en clase pero falla en el pasillo, con más luz. Explica por qué y cómo solucionarlo.", "La luz ambiente cambia los valores del sensor y el umbral deja de ser válido. Hay que recalibrar en el pasillo (medir blanco y negro y recalcular el umbral) o proteger los sensores de la luz."],
    ["Diseña un semáforo de ruido para el comedor con micrófono y LED RGB, con tres niveles.", "Por siempre: si volumen < 40 → verde; si no, si volumen < 70 → amarillo; si no → rojo y pitido. Umbrales calibrados midiendo el comedor."],
    ["Diseña un robot que siga una fuente de luz con dos sensores de luz.", "Por siempre: si luz izquierda > luz derecha + 5 → girar a la izquierda; si luz derecha > luz izquierda + 5 → girar a la derecha; si no → avanzar. El margen de 5 evita que oscile por el ruido."],
    ["¿Por qué un servomotor se considera un sistema en lazo cerrado?", "Porque lleva dentro un sensor que mide su posición; el circuito compara la posición real con el ángulo pedido y mueve el motor hasta que coinciden."],
    ["Un sensor de ultrasonidos no detecta una cortina. Explica la causa y propón otro sensor.", "La tela blanda absorbe el sonido y el eco casi no vuelve. Se podría usar un sensor de infrarrojos o láser, o un parachoques con final de carrera."],
  ]),
  quiz: H.test([
    ["Un sensor sirve para…", ["medir algo del entorno", "mover las ruedas", "guardar el programa", "dar energía"], "Entrada del sistema."],
    ["Un actuador sirve para…", ["producir una acción", "medir la luz", "decidir", "comparar valores"], "Salida del sistema."],
    ["Una señal digital puede valer…", ["0 o 1", "cualquier número", "solo 100", "entre 0 y 1.000"], "Dos estados."],
    ["Un sensor de temperatura da una señal…", ["analógica", "digital", "binaria fija", "nula"], "Muchos valores."],
    ["Un umbral es…", ["un valor límite para decidir", "un tipo de motor", "un sensor de luz", "un cable"], "Separa dos situaciones."],
    ["Un pulsador es un sensor…", ["digital", "analógico", "de temperatura", "de distancia"], "Pulsado o no."],
    ["La resistencia de una LDR, con más luz…", ["disminuye", "aumenta", "no cambia", "se duplica"], "Fotorresistencia."],
    ["El sensor de ultrasonidos funciona como…", ["el eco de los murciélagos", "una cámara", "un termómetro", "una brújula"], "Ecolocalización."],
    ["En la fórmula de ultrasonidos se divide entre 2 porque…", ["el sonido va y vuelve", "hay dos sensores", "el robot tiene dos ruedas", "se mide dos veces"], "Ida y vuelta."],
    ["Una superficie negra refleja infrarrojos…", ["poco", "mucho", "igual que la blanca", "solo de noche"], "Absorbe la luz."],
    ["Si en un seguidor de línea solo el sensor izquierdo ve la línea, el robot…", ["gira a la izquierda", "gira a la derecha", "avanza recto", "se para siempre"], "Vuelve hacia la línea."],
    ["Un LED RGB con rojo y verde da…", ["amarillo", "azul", "blanco", "morado"], "Mezcla aditiva."],
    ["El zumbador produce…", ["pitidos y notas", "movimiento", "luz", "medidas de distancia"], "Actuador de sonido."],
    ["Las ruedas de un robot suelen moverse con…", ["motores de corriente continua", "servomotores de 180°", "LDR", "zumbadores"], "Giran sin parar."],
    ["Un servomotor se coloca en…", ["un ángulo exacto", "una velocidad sin fin", "un color", "una distancia"], "De 0° a 180°."],
    ["Las impresoras 3D usan motores…", ["paso a paso", "de explosión", "servos de 180°", "sin control"], "Mucha precisión."],
    ["Calibrar un sensor es…", ["medir valores reales para elegir el umbral", "cambiarle el color", "desmontarlo", "pintarlo de negro"], "Antes de usarlo."],
    ["El umbral entre 80 (blanco) y 20 (negro) es…", ["50", "60", "100", "20"], "La media."],
    ["Un termostato es un sistema en…", ["lazo cerrado", "lazo abierto", "modo manual", "modo digital puro"], "Mide y corrige."],
    ["«avanzar 2 segundos» sin sensores es control en…", ["lazo abierto", "lazo cerrado", "realimentación", "calibración"], "No mide el resultado."],
  ], 1),
  examen: H.test([
    ["Eco a los 0,002 s (sonido a 340 m/s): el obstáculo está a…", ["34 cm", "68 cm", "17 cm", "3,4 m"], "340 · 0,002 : 2."],
    ["Sensor: 70 en blanco y 30 en negro. Umbral:", ["50", "40", "100", "35"], "(70 + 30) : 2."],
    ["Rueda izquierda adelante y derecha atrás a la misma velocidad: el robot…", ["gira sobre sí mismo", "avanza recto", "retrocede", "se para"], "Sentidos contrarios."],
    ["Para la barrera de un aparcamiento se usa…", ["un servomotor", "un motor paso a paso", "un LED", "un micrófono"], "Ángulo 0° a 90°."],
    ["El ultrasonido falla con…", ["superficies blandas como cortinas", "paredes lisas", "cajas de cartón rectas", "puertas"], "Absorben el sonido."],
    ["Para que el robot reaccione siempre, la lectura del sensor va en…", ["un bucle por siempre", "un solo «si»", "el final del programa", "otro objeto"], "Comprobación continua."],
    ["Promediar varias medidas sirve para…", ["reducir el ruido", "gastar menos batería", "aumentar la velocidad", "cambiar el umbral"], "Medidas más estables."],
    ["La información que vuelve del sensor al controlador se llama…", ["realimentación", "umbral", "ruido", "actuación"], "Lazo cerrado."],
  ], 3),
  feynman: ["Cómo funciona un sistema de control con entrada, proceso y salida", "Qué diferencia hay entre una señal digital y una analógica y para qué sirve un umbral", "Cómo miden los sensores de ultrasonidos y de infrarrojos", "Qué motor elegir: corriente continua, servo o paso a paso", "Por qué un sistema en lazo cerrado es más preciso que uno en lazo abierto"],
  mapa: H.mapa("SENSORES Y MOTORES", "var(--eso)", [
    ["Sensores", "contacto · luz · ultrasonidos · IR", "var(--inf)"],
    ["Señales", "digital · analógica · umbral", "#b8860b"],
    ["Actuadores", "LED · zumbador · motor CC · servo", "var(--red)"],
    ["Control", "calibrar · lazo abierto y cerrado", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Sensor", "Convierte una magnitud del entorno en señal eléctrica."],
    ["Actuador", "Convierte una orden en acción: mover, iluminar, sonar."],
    ["Señal digital", "Solo 0 o 1."],
    ["Señal analógica", "Muchos valores intermedios."],
    ["Umbral", "Valor límite para decidir."],
    ["LDR", "Su resistencia baja con más luz."],
    ["Ultrasonidos", "Distancia = velocidad × tiempo : 2."],
    ["Infrarrojos", "Blanco refleja, negro absorbe."],
    ["Motor CC", "Gira sin parar; velocidad en %."],
    ["Servomotor", "Va a un ángulo de 0° a 180°."],
    ["Calibrar", "Medir blanco y negro; umbral = media."],
    ["Lazo cerrado", "Mide el resultado y corrige."],
  ],
  glosario: [
    ["Sensor", "Dispositivo que detecta una magnitud física y la convierte en una señal eléctrica."],
    ["Actuador", "Dispositivo que transforma una orden eléctrica en una acción."],
    ["Sistema de control", "Conjunto de sensores, controlador y actuadores que funciona de forma automática."],
    ["Señal digital", "Señal que solo puede tomar dos valores, 0 o 1."],
    ["Señal analógica", "Señal que puede tomar infinitos valores dentro de un intervalo."],
    ["Umbral", "Valor límite con el que se compara una medida para tomar una decisión."],
    ["Pulsador", "Interruptor que cierra un circuito mientras se mantiene apretado."],
    ["Fotorresistencia (LDR)", "Componente cuya resistencia disminuye al aumentar la luz."],
    ["Ultrasonido", "Sonido de frecuencia tan alta que el oído humano no lo percibe."],
    ["Infrarrojo", "Luz invisible para el ojo humano que usan muchos sensores."],
    ["LED", "Diodo que emite luz cuando lo atraviesa la corriente."],
    ["Zumbador", "Actuador que produce pitidos o notas."],
    ["Motor de corriente continua", "Motor eléctrico que gira de forma continua; su velocidad y sentido se pueden controlar."],
    ["Servomotor", "Motor que se coloca en un ángulo concreto y lo mantiene."],
    ["Calibración", "Proceso de medir los valores reales de un sensor para ajustar los umbrales."],
    ["Realimentación", "Información sobre el resultado de una acción que vuelve al controlador para corregirla."],
  ],
  situacion: {
    titulo: "Invernadero inteligente para el huerto escolar",
    reto: "El huerto del instituto sufre en verano: las plantas se secan los fines de semana y en el invernadero hace demasiado calor. Vuestro equipo diseñará y programará un prototipo de invernadero automático con sensores y actuadores.",
    pasos: [
      "Identificad las magnitudes que hay que controlar (humedad del suelo, temperatura, luz) y elegid los sensores.",
      "Elegid los actuadores (bomba o LED que la simule, servo para abrir una ventana, ventilador con motor CC) y dibujad el esquema entrada-proceso-salida.",
      "Calibrad cada sensor en condiciones reales y anotad los umbrales elegidos.",
      "Programad el sistema con bucles y condicionales en lazo cerrado y añadid avisos con LED y zumbador.",
      "Probad el prototipo en distintas situaciones (tierra seca, calor con un secador, oscuridad) y mejoradlo.",
    ],
    producto: "Maqueta o prototipo funcional del invernadero con su programa, el registro de calibración y un vídeo de demostración.",
    evaluacion: [
      "Los sensores y actuadores elegidos son adecuados y están bien conectados.",
      "Los umbrales se obtienen calibrando con datos reales.",
      "El programa funciona en lazo cerrado y responde a todas las situaciones probadas.",
      "La documentación explica el sistema de control y las mejoras realizadas.",
    ],
  },
  familias: ["Buscad en casa y en la calle sistemas con sensores: puertas automáticas, farolas, grifos, cisternas.", "Mirad juntos qué sensores tiene vuestro móvil en sus ajustes o con una app de sensores.", "Calculad la distancia de una tormenta contando los segundos entre el rayo y el trueno (el sonido recorre unos 340 m por segundo).", "Comentad qué aparatos de casa funcionan en lazo abierto y cuáles en lazo cerrado."],
  profesores: {
    saberes: H.saberes("Sistemas de control: entrada, proceso y salida; sensores digitales y analógicos (contacto, luz, ultrasonidos, infrarrojos, temperatura, humedad, acelerómetro); umbrales y calibración; actuadores (LED, zumbador, motores de corriente continua, servomotores y motores paso a paso); tracción diferencial; control en lazo abierto y en lazo cerrado y realimentación; programación de robots con sensores", "sistemes de control automàtic, sensors i actuadors, programació de plaques controladores i resolució de reptes tecnològics."),
    ideas: [
      "Taller de calibración: tabla de valores de un sensor de luz sobre distintos colores y materiales.",
      "Pista de seguidor de línea con cinta aislante negra y concurso de tiempos.",
      "Relación con Física: velocidad del sonido y cálculo de distancias por eco.",
      "Barrera de aparcamiento con servo y sensor de presencia.",
      "Proyecto de huerto o invernadero automático con micro:bit o Arduino.",
    ],
  },
  fuentes: [H.RD, H.DEC, H.wiki("Sensor", "Sensor"), H.wiki("Servomotor", "Servomotor"), H.wiki("Sistema de control", "Sistema_de_control"), { t: "Arduino: documentación oficial", url: "https://docs.arduino.cc/" }],
  revisado: H.REV,
};
