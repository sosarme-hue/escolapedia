// Programación y robótica 3º ESO: programación de aplicaciones. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, caja, tabla, filas, mezcla } = require("./_eso3");

const M = "Programación y robótica";
// Móvil esquemático en (x, y) con ancho w y alto h.
const movil = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="var(--ink)"/><rect x="${x + 6}" y="${y + 14}" width="${w - 12}" height="${h - 28}" rx="4" fill="var(--card)"/><circle cx="${x + w / 2}" cy="${y + h - 7}" r="3" fill="var(--muted)"/>`;

module.exports = {
  materia: M,
  curso: C,
  titulo: "Programación de aplicaciones",
  minutos: 50,
  objetivos: ["Entender qué es una aplicación y cómo se organiza: interfaz y lógica", "Conocer el ciclo de desarrollo de una app", "Crear una aplicación sencilla para móvil con App Inventor", "Aplicar criterios de usabilidad, accesibilidad, privacidad y seguridad"],
  claves: ["aplicación", "interfaz", "componente", "evento", "usabilidad", "App Inventor"],
  pregunta: {
    texto: "Si usas decenas de apps cada día, ¿podrías crear una tú mismo en una clase?",
    respuesta: "Sí. Con herramientas como <mark>App Inventor</mark> del MIT se diseña la pantalla arrastrando botones y textos, y se programa con bloques qué pasa al tocarlos. En una sesión puedes tener una app que habla, una calculadora o un dado funcionando en tu propio móvil.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una aplicación?</h3><p>Una <b>aplicación</b> (<i>app</i>) es un programa diseñado para una tarea concreta: mensajería, juegos, mapas, banca… Según dónde funcionan, hay:</p><ul><li><b>Apps nativas</b>: se instalan desde una tienda y se programan para un sistema concreto, <b>Android</b> o <b>iOS</b>. Aprovechan bien la cámara, el GPS o los sensores.</li><li><b>Apps web</b>: funcionan en el navegador, sin instalar, en cualquier dispositivo.</li><li><b>Apps de escritorio</b>: para ordenadores (procesadores de texto, editores).</li></ul><p>Toda app tiene dos partes: la <b>interfaz</b> (lo que ves y tocas) y la <b>lógica</b> (el programa que decide qué pasa). Detrás, muchas usan además un <b>servidor</b> o una base de datos en la nube.</p>`,
    },
    {
      html: `<h3>El ciclo de desarrollo</h3><p>Crear una app es un proyecto con fases, que se repiten varias veces hasta que funciona bien:</p><ol><li><b>Idea y análisis</b>: ¿qué problema resuelve?, ¿quién la usará?</li><li><b>Diseño</b>: bocetos de cada pantalla (<i>wireframes</i>) y flujo de navegación.</li><li><b>Programación</b>: interfaz y lógica.</li><li><b>Pruebas</b>: en el simulador y en móviles reales, con usuarios.</li><li><b>Publicación</b>: en una tienda de aplicaciones o en la web.</li><li><b>Mantenimiento</b>: corregir errores y añadir mejoras (las actualizaciones).</li></ol><p>Las empresas trabajan con <b>metodologías ágiles</b>: versiones pequeñas que se prueban y mejoran cada pocas semanas.</p>`,
      svg: svg("Ciclo de desarrollo de una aplicación: idea, diseño, programación, pruebas y publicación, volviendo a empezar", `${[["idea", 130, 28, "var(--inf)"], ["diseño", 218, 76, "var(--leaf)"], ["programar", 186, 148, "var(--pen)"], ["probar", 74, 148, "var(--red)"], ["publicar", 42, 76, "var(--ink)"]].map(([n, x, y, c]) => `<rect x="${x - 36}" y="${y - 14}" width="72" height="28" rx="14" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2.2"/>${t(x, y + 4, n, { c, s: 11 })}`).join("")}<circle cx="130" cy="92" r="40" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/>${t(130, 96, "mejorar", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>App Inventor</h3><p><b>MIT App Inventor</b> es un entorno web gratuito para crear apps de Android (y algunas de iOS) con <b>programación por bloques</b>, como Scratch. Tiene dos vistas:</p><ul><li><b>Diseñador</b>: arrastras <b>componentes</b> a la pantalla del móvil y ajustas sus <b>propiedades</b> (texto, color, tamaño).</li><li><b>Bloques</b>: programas qué ocurre cuando el usuario interactúa con esos componentes.</li></ul><p>Para probar la app al momento se usa la aplicación <b>MIT AI2 Companion</b> en el móvil, que se conecta escaneando un código QR. Al terminar, se genera un archivo <code>.apk</code> para instalarla.</p>`,
      video: { id: "BT4YihNXiYw", titulo: "App Inventor: introducción y primera aplicación", canal: "The Coding Bus", vistas: 949171, megusta: 0 },
    },
    {
      html: `<h3>Componentes y propiedades</h3>${tabla(["Componente", "Para qué sirve", "Propiedades típicas"], [["<b>Botón</b>", "que el usuario toque", "Texto, ColorDeFondo, Imagen"], ["<b>Etiqueta</b>", "mostrar texto", "Texto, TamañoDeLetra"], ["<b>Caja de texto</b>", "que el usuario escriba", "Pista, SoloNúmeros"], ["<b>Imagen</b>", "mostrar una foto o dibujo", "Foto, Ancho, Alto"], ["<b>Disposiciones</b>", "ordenar en filas o columnas", "Alineación"], ["<b>No visibles</b>", "TextoAVoz, Sonido, Acelerómetro, Cámara, Reloj, TinyDB", "según el componente"]])}<p>Los componentes <b>no visibles</b> no aparecen en pantalla pero dan acceso a las funciones del móvil: hablar, vibrar, medir la inclinación, guardar datos…</p>`,
    },
    {
      html: `<h3>Programar con eventos</h3><p>Las apps funcionan por <b>eventos</b>: no hacen nada hasta que pasa algo (el usuario toca un botón, agita el móvil, llega un mensaje). Cada evento tiene su bloque:</p><pre>cuando BotónHablar.Clic
    llamar TextoAVoz1.Hablar
        mensaje: CajaTexto1.Texto</pre><p>Este programa lee en voz alta lo que el usuario haya escrito. Otros eventos útiles: <b>Pantalla1.Inicializar</b> (al abrir la app), <b>Acelerómetro.Agitado</b>, <b>Reloj.Temporizador</b> (cada cierto tiempo). Dentro de los eventos se usan variables, condicionales y bucles, exactamente igual que en Scratch.</p>`,
      svg: svg("Una app sencilla: caja de texto, botón Hablar y el bloque de evento que hace que el móvil lea el texto en voz alta", `${movil(16, 14, 92, 156)}<rect x="28" y="44" width="68" height="20" rx="3" fill="var(--paper)" stroke="var(--muted)"/>${t(34, 58, "Hola", { c: "var(--ink)", s: 10, a: "start" })}<rect x="34" y="76" width="56" height="22" rx="6" fill="var(--pen)"/>${t(62, 91, "Hablar", { c: "#fff", s: 10 })}
        <rect x="126" y="40" width="124" height="70" rx="6" fill="#e6a100"/><rect x="140" y="62" width="104" height="22" rx="4" fill="#9a66e0"/><rect x="150" y="88" width="90" height="16" rx="4" fill="#4c7ee8"/>${t(132, 55, "cuando Botón.Clic", { c: "#fff", s: 10, a: "start" })}${t(146, 77, "TextoAVoz.Hablar", { c: "#fff", s: 10, a: "start" })}${t(154, 100, "CajaTexto.Texto", { c: "#fff", s: 9, a: "start" })}
        ${t(62, 128, "interfaz", { c: "var(--muted)", s: 10 })}${t(188, 128, "lógica (bloques)", { c: "var(--muted)", s: 10 })}`),
      video: { id: "3BownSRSiAw", titulo: "Crear una aplicación Android sencilla con MIT App Inventor", canal: "Arturo Mera Dorantes", vistas: 384525, megusta: 0 },
    },
    {
      html: `<h3>Guardar datos y usar varias pantallas</h3><p>Si cierras una app, sus variables se borran. Para que los datos <b>persistan</b> (una lista de tareas, la mejor puntuación) se guardan en una base de datos:</p><ul><li><b>TinyDB</b>: guarda datos en el propio móvil con una <b>etiqueta</b> y un <b>valor</b>.</li><li><b>Bases de datos en la nube</b>: comparten datos entre varios usuarios, como en un chat.</li></ul><p>Las apps más completas tienen <b>varias pantallas</b> (inicio, juego, ajustes). Se pasa de una a otra con el bloque «abrir otra pantalla». Antes de programarlas, dibuja el <b>mapa de navegación</b>: qué pantallas hay y qué botón lleva a cada una.</p>`,
    },
    {
      html: `<h3>Usabilidad y accesibilidad</h3><p>Una app técnicamente perfecta fracasa si es difícil de usar. La <b>usabilidad</b> mide lo fácil que resulta:</p><ul><li>Botones <b>grandes</b> y separados (al menos el tamaño de la yema de un dedo).</li><li>Textos <b>claros</b> y breves; iconos conocidos.</li><li><b>Coherencia</b>: los mismos colores y posiciones en todas las pantallas.</li><li><b>Respuesta</b>: cuando el usuario toca algo, debe notar que ha pasado algo.</li></ul><p>La <b>accesibilidad</b> busca que <mark>todo el mundo</mark> pueda usarla: buen contraste, letra ampliable, descripciones de las imágenes para los lectores de pantalla y no depender solo del color para dar información.</p>`,
    },
    {
      html: `<h3>Privacidad, seguridad y ética</h3><p>Las apps pueden pedir <b>permisos</b>: cámara, micrófono, ubicación, contactos. Como usuario, concede solo los imprescindibles. Como programador, pide <mark>solo los que necesites</mark> y explica para qué.</p><ul><li>Protege los datos personales de los usuarios; en Europa lo exige el <b>Reglamento General de Protección de Datos</b> (RGPD).</li><li>Descarga apps solo de tiendas oficiales.</li><li>Respeta los <b>derechos de autor</b> de imágenes y sonidos que uses.</li><li>Evita diseños que enganchen o manipulen, como notificaciones constantes.</li></ul><p>Una buena app resuelve un problema real <b>sin aprovecharse</b> de quien la usa.</p>`,
    },
    {
      html: `<h3>Otras herramientas y lenguajes</h3><p>App Inventor es ideal para aprender. Otras opciones:</p><ul><li><b>Thunkable</b> y <b>Kodular</b>: también por bloques, con más componentes.</li><li><b>Code.org App Lab</b>: apps web con bloques o JavaScript.</li><li>Profesionales: <b>Android Studio</b> (Kotlin o Java) para Android, <b>Xcode</b> (Swift) para iOS, o <b>Flutter</b> y React Native para ambas a la vez.</li></ul><p>La lógica que has aprendido (eventos, variables, condicionales, bucles, listas) es la misma en todas. Lo que cambia es la forma de escribirla.</p>`,
    },
  ],
  figura: {
    titulo: "Crear una app",
    svg: filas("Interfaz y lógica; ciclo de desarrollo; App Inventor con diseñador y bloques; eventos; usabilidad, accesibilidad y privacidad", [["Interfaz + lógica", "lo que se ve · lo que decide el programa", "var(--pen)"], ["Ciclo", "idea → diseño → programar → probar → publicar", "var(--leaf)"], ["App Inventor", "diseñador (componentes) + bloques (eventos)", "var(--inf)"], ["Datos", "variables · TinyDB · varias pantallas", "var(--red)"], ["Buenas prácticas", "usable · accesible · pocos permisos", "var(--ink)"]], 230),
  },
  video: { id: "DtIgSsvh2V0", titulo: "Crea una aplicación para móviles con App Inventor: traductor", canal: "Programamos", vistas: 265138, megusta: 0, busqueda: "app inventor principiantes" },
  quiz: mezcla([
    { q: "Las dos partes de toda app son…", o: ["interfaz y lógica", "pantalla y batería", "icono y nombre"], a: 0, e: "Lo que se ve y lo que decide." },
    { q: "Una app que funciona en el navegador sin instalar es una app…", o: ["web", "nativa", "de escritorio"], a: 0, e: "Cualquier dispositivo." },
    { q: "App Inventor fue creado por el…", o: ["MIT", "BBC", "Apple"], a: 0, e: "Como Scratch." },
    { q: "En App Inventor, los botones y etiquetas se colocan en el…", o: ["Diseñador", "editor de bloques", "Companion"], a: 0, e: "Vista de diseño." },
    { q: "El componente que lee un texto en voz alta es…", o: ["TextoAVoz", "Etiqueta", "TinyDB"], a: 0, e: "No visible." },
    { q: "Para guardar datos en el móvil aunque se cierre la app se usa…", o: ["TinyDB", "una variable global", "una etiqueta"], a: 0, e: "Etiqueta + valor." },
    { q: "Las apps funcionan principalmente por…", o: ["eventos", "orden alfabético", "azar"], a: 0, e: "Responden a lo que pasa." },
    { q: "Que una app la pueda usar una persona con baja visión es…", o: ["accesibilidad", "rendimiento", "compilación"], a: 0, e: "Para todo el mundo." },
    { q: "El boceto de una pantalla se llama…", o: ["wireframe", "apk", "sprite"], a: 0, e: "Esquema de diseño." },
    { q: "Como programador, debes pedir…", o: ["solo los permisos necesarios", "todos los permisos", "ningún dato nunca"], a: 0, e: "Y explicar para qué." },
  ]),
  examen: mezcla([
    { q: "El archivo para instalar una app de App Inventor en Android es…", o: [".apk", ".hex", ".exe"], a: 0, e: "Paquete de Android." },
    { q: "El evento que se ejecuta al abrir la app es…", o: ["Pantalla1.Inicializar", "Botón.Clic", "Reloj.Temporizador"], a: 0, e: "Al empezar." },
    { q: "La ley europea que protege los datos personales es el…", o: ["RGPD", "IVA", "ISO 9001"], a: 0, e: "Reglamento General de Protección de Datos." },
  ]),
  feynman: ["Qué diferencia hay entre interfaz y lógica", "Las fases del desarrollo de una app", "Cómo se programa un botón en App Inventor", "Qué hace usable y accesible una aplicación"],
  mapa: mapa("APPS", "var(--eso)", [
    ["Interfaz", "componentes", "var(--pen)"],
    ["Lógica", "eventos · bloques", "var(--leaf)"],
    ["Datos", "TinyDB · nube", "var(--red)"],
    ["Usuario", "usable · seguro", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["App nativa", "Se instala y se programa para Android o iOS."],
    ["Interfaz", "La parte de la app que se ve y se toca."],
    ["Componente", "Elemento de la app: botón, etiqueta, sensor…"],
    ["Propiedad", "Característica de un componente: texto, color, tamaño."],
    ["Evento", "Algo que ocurre y dispara un programa: un clic, agitar."],
    ["TinyDB", "Base de datos en el móvil para guardar datos."],
    ["Usabilidad", "Facilidad de uso de una aplicación."],
    ["Permiso", "Acceso que pide una app a cámara, ubicación, etc."],
  ],
  familias: ["Revisad juntos los permisos de las apps de un móvil de casa y quitad los innecesarios.", "Pensad una app que resolvería un problema de la familia y dibujad sus pantallas.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Desarrollo de aplicaciones: tipos, interfaz y lógica, ciclo de desarrollo, programación por eventos con App Inventor, persistencia de datos, usabilidad, accesibilidad, privacidad y seguridad (RD 217/2022, programación y competencia digital).",
    ideas: ["App «Habla conmigo» en la primera sesión con TextoAVoz.", "Reto por grupos: app útil para el centro con prueba de usuarios de otro curso.", "Auditoría de accesibilidad de apps conocidas."],
  },
  fuentes: [RD, { t: "MIT App Inventor: tutoriales", url: "https://appinventor.mit.edu/explore/ai2/tutorials" }, { t: "AEPD: protección de datos y menores", url: "https://www.aepd.es/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Apps resueltas",
  ejemplos: [
    { enunciado: "Crea una app con un botón «Lanzar» que muestre un número al azar del 1 al 6.",
      pasos: ["Diseñador: un Botón (Texto «Lanzar») y una Etiqueta grande.", "Bloques: cuando Botón.Clic → poner Etiqueta.Texto a entero aleatorio entre 1 y 6.", "Probar con AI2 Companion."],
      resultado: "Un dado digital en dos componentes y un bloque." },
    { enunciado: "Haz que el dado se lance también al agitar el móvil y que vibre.",
      pasos: ["Añadir el componente no visible Acelerómetro y Sonido.", "cuando Acelerómetro.Agitado → poner Etiqueta.Texto a aleatorio 1-6; llamar Sonido.Vibrar 200 ms."],
      resultado: "La app usa los sensores del móvil." },
    { enunciado: "Guarda la mejor puntuación de un juego para que no se pierda al cerrar la app.",
      pasos: ["Al terminar la partida: si puntos > récord → récord ← puntos.", "Llamar TinyDB.GuardarValor etiqueta «récord», valor récord.", "En Pantalla1.Inicializar: récord ← TinyDB.ObtenerValor «récord» (si no existe, 0)."],
      resultado: "El récord persiste entre partidas." },
  ],
  errores: [
    "Programar sin haber diseñado antes las pantallas.",
    "Poner botones pequeños y pegados entre sí.",
    "Olvidar que las variables se borran al cerrar la app.",
    "Pedir permisos que la app no necesita.",
    "Probar solo en el simulador y no en un móvil real.",
    "Usar imágenes o música sin permiso de sus autores.",
  ],
  ejercicios: [
    { q: "Explica la diferencia entre una app nativa y una app web.", sol: "La nativa se instala y se programa para un sistema; la web funciona en el navegador sin instalar." },
    { q: "Ordena las fases: pruebas, idea, publicación, programación, diseño.", sol: "Idea, diseño, programación, pruebas, publicación (y mantenimiento)." },
    { q: "¿Qué componentes necesitas para una app que convierta euros a dólares?", sol: "Caja de texto (cantidad), botón (convertir) y etiqueta (resultado)." },
    { q: "Escribe el bloque para la app anterior con un cambio de 1,08.", sol: "cuando Botón.Clic → poner Etiqueta.Texto a CajaTexto.Texto · 1,08." },
    { q: "¿Qué componente no visible usarías para una app que cuente pasos? ¿Y para una linterna?", sol: "Podómetro (o acelerómetro); para la linterna, el componente de la cámara con flash o la pantalla en blanco." },
    { q: "Nombra cuatro criterios de usabilidad.", sol: "Botones grandes, textos claros, coherencia visual, respuesta a las acciones." },
    { q: "Nombra tres medidas de accesibilidad.", sol: "Buen contraste, letra ampliable, descripción de imágenes para lectores de pantalla." },
    { q: "Una app de linterna pide acceso a tus contactos y ubicación. ¿Qué harías?", sol: "Desconfiar y no instalarla o denegar esos permisos: no los necesita." },
    { q: "Dibuja el mapa de navegación de una app de recetas con tres pantallas.", sol: "Inicio → lista de recetas → detalle de la receta, con botón de volver." },
    { q: "Diseña y programa una app de lista de tareas que guarde los datos.", sol: "Respuesta abierta; caja de texto, botón añadir, vista de lista y TinyDB para guardar la lista." },
  ],
};
