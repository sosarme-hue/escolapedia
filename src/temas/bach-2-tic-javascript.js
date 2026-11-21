// Tecnologías de la Información y la Comunicación II, 2º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
// Programación web con JavaScript: lenguaje, DOM, eventos, formularios, asincronía, fetch, depuración y seguridad.
const B = require("./_bach2-tic");

const T = (s) => `<code>${s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code>`;
const fondo = `<rect width="260" height="180" rx="14" fill="var(--paper)"/>`;

// El DOM modificado por JavaScript.
const dom = () => {
  const n = (x, y, t, c, w = 52) => `<rect x="${x - w / 2}" y="${y - 11}" width="${w}" height="20" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/>${B.tx(x, y + 3, t, { fs: 9, maxW: w - 4, bold: true, color: c })}`;
  const l = (x1, y1, x2, y2, d = "") => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="var(--muted)" stroke-width="1.4" ${d}/>`;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="JavaScript ve la página como un árbol de nodos, el DOM: selecciona un nodo con querySelector, cambia su texto y añade un nuevo elemento li a la lista">
  ${fondo}${B.tx(130, 18, "El DOM: la página como árbol", { fs: 12, maxW: 236, bold: true, font: B.D })}
  ${l(130, 44, 70, 72)}${l(130, 44, 190, 72)}${l(70, 82, 70, 104)}${l(190, 82, 160, 104)}${l(190, 82, 222, 104)}${l(222, 114, 222, 136, 'stroke-dasharray="4 3"')}
  ${n(130, 38, "body", "var(--ink)")}${n(70, 76, "h1", "var(--pen)")}${n(190, 76, "ul", "var(--leaf)")}
  ${n(70, 110, "«Hola»", "var(--pen)", 56)}${n(160, 110, "li", "var(--leaf)", 40)}${n(222, 110, "li", "var(--leaf)", 40)}
  <rect x="198" y="131" width="48" height="20" rx="10" fill="var(--sun)" fill-opacity=".25" stroke="var(--sun)" stroke-width="2" stroke-dasharray="4 2"/>${B.tx(222, 145, "li nuevo", { fs: 9, maxW: 44, bold: true, color: "var(--ink)" })}
  ${B.tx(70, 140, "textContent = …", { fs: 9, maxW: 96, color: "var(--pen)", font: "ui-monospace,monospace" })}
  ${B.tx(130, 170, "ul.append(document.createElement(\"li\"))", { fs: 8.5, maxW: 240, color: "var(--leaf)", font: "ui-monospace,monospace" })}
</svg>`;
};

// Bucle de eventos.
const bucle = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Modelo de ejecución de JavaScript: la pila ejecuta el código; las tareas lentas como temporizadores o peticiones de red las gestiona el navegador; al terminar, su función se pone en la cola, y el bucle de eventos la pasa a la pila cuando está vacía">
  ${fondo}${B.tx(130, 18, "Un solo hilo y un bucle de eventos", { fs: 11.5, maxW: 236, bold: true, font: B.D })}
  <rect x="14" y="30" width="70" height="92" rx="6" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>${B.tx(49, 44, "Pila", { fs: 10.5, maxW: 64, bold: true, color: "var(--pen)" })}
  ${[0, 1, 2].map((i) => `<rect x="22" y="${100 - i * 20}" width="54" height="16" rx="3" fill="var(--pen)" fill-opacity="${0.35 + i * 0.2}"/>`).join("")}
  <rect x="104" y="30" width="142" height="52" rx="6" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/>${B.tx(175, 46, "Navegador", { fs: 10.5, maxW: 130, bold: true, color: "var(--sun)" })}${B.tx(175, 64, "temporizador · red · clics", { fs: 9.5, maxW: 132 })}
  <rect x="104" y="100" width="142" height="30" rx="6" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>${B.tx(130, 119, "Cola", { fs: 10, maxW: 40, bold: true, color: "var(--leaf)" })}
  ${[0, 1, 2].map((i) => `<rect x="${160 + i * 26}" y="107" width="20" height="16" rx="3" fill="var(--leaf)" fill-opacity=".6"/>`).join("")}
  <path d="M84 50 H100" stroke="var(--ink)" stroke-width="1.6" marker-end="url(#fb)"/>
  <path d="M175 82 V96" stroke="var(--ink)" stroke-width="1.6" marker-end="url(#fb)"/>
  <path d="M175 132 C 175 160, 49 160, 49 126" stroke="var(--red)" stroke-width="2" fill="none" marker-end="url(#fb)"/>
  <defs><marker id="fb" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8z" fill="var(--ink)"/></marker></defs>
  ${B.tx(112, 172, "bucle de eventos: si la pila está vacía", { fs: 9.5, maxW: 200, color: "var(--red)" })}
</svg>`;

// Petición fetch a una API.
const fetchDiag = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de una petición fetch: el navegador envía GET a la API; la API responde con datos en JSON; el programa los convierte en objetos y actualiza la página sin recargarla">
  ${fondo}
  <rect x="10" y="14" width="76" height="150" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>${B.tx(48, 32, "Navegador", { fs: 10.5, maxW: 74, bold: true, color: "var(--pen)" })}
  <rect x="174" y="14" width="76" height="150" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>${B.tx(212, 32, "API", { fs: 10.5, maxW: 74, bold: true, color: "var(--leaf)" })}
  <defs><marker id="fa" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8z" fill="var(--ink)"/></marker></defs>
  <path d="M86 56 H172" stroke="var(--ink)" stroke-width="1.6" marker-end="url(#fa)"/>${B.tx(130, 50, "GET /tiempo", { fs: 9, maxW: 80, font: "ui-monospace,monospace" })}
  <path d="M174 96 H88" stroke="var(--ink)" stroke-width="1.6" marker-end="url(#fa)"/>${B.tx(130, 90, "200 · JSON", { fs: 9, maxW: 76, bold: true, color: "var(--leaf)" })}
  ${B.tx(212, 82, "{\"temp\": 14}", { fs: 9, maxW: 70, font: "ui-monospace,monospace" })}
  ${B.tx(48, 70, "await fetch()", { fs: 8.5, maxW: 70, font: "ui-monospace,monospace", color: "var(--pen)" })}
  ${B.tx(48, 118, "res.json()", { fs: 8.5, maxW: 70, font: "ui-monospace,monospace", color: "var(--pen)" })}
  ${B.tx(48, 140, "actualiza", { fs: 9, maxW: 70, bold: true })}${B.tx(48, 152, "el DOM", { fs: 9, maxW: 70, bold: true })}
  ${B.tx(130, 176, "sin recargar la página", { fs: 9.5, maxW: 160, color: "var(--muted)" })}
</svg>`;

module.exports = B.tema(B.textos({
  titulo: "Programación web con JavaScript",
  minutos: 120,
  objetivos: [
    "Explicar el papel de JavaScript en el navegador e incorporarlo a una página",
    "Usar variables, tipos, estructuras de control, funciones, arrays y objetos de JavaScript",
    "Leer y modificar la página a través del DOM",
    "Responder a las acciones del usuario con eventos y validar formularios en el cliente",
    "Programar tareas asíncronas con promesas, async/await y fetch para consultar APIs que devuelven JSON",
    "Depurar programas con las herramientas del navegador y aplicar buenas prácticas de seguridad",
  ],
  claves: ["JavaScript", "consola", "let", "const", "función flecha", "array", "objeto", "JSON", "DOM", "querySelector", "evento", "addEventListener", "asincronía", "promesa", "fetch", "XSS"],
  pregunta: {
    texto: "Escribes en el buscador de una tienda online y, con cada letra, aparecen sugerencias; añades un producto y el carrito se actualiza sin que la página se recargue. ¿Cómo lo hace?",
    respuesta: "Con <mark>JavaScript</mark>, el único lenguaje de programación que entienden todos los navegadores. Un programa en JavaScript <b>escucha</b> los eventos (cada tecla pulsada), <b>pide</b> datos al servidor en segundo plano con <code>fetch</code>, recibe la respuesta en formato JSON y <b>modifica</b> la página a través del DOM, la representación de la página como un árbol de objetos. HTML pone el contenido, CSS el aspecto y JavaScript el comportamiento.",
  },
  lectura: {
    titulo: "Un lenguaje creado en diez días",
    html: `<p>En mayo de 1995, la empresa Netscape, que fabricaba el navegador más usado del momento, encargó a Brendan Eich un lenguaje sencillo para dar vida a las páginas web. Eich escribió el primer prototipo en solo diez días. Se llamó Mocha, luego LiveScript y, finalmente, <b>JavaScript</b>, un nombre elegido por marketing para aprovechar la fama de Java, con el que apenas tiene relación.</p>
    <p>Durante años se consideró un lenguaje de juguete, lleno de rarezas. Todo cambió en 2004-2005, cuando Gmail y Google Maps demostraron que con JavaScript se podían hacer aplicaciones completas dentro del navegador. En 2008, Google presentó el motor V8, que lo hizo muchísimo más rápido, y en 2009 apareció Node.js, que permitió usarlo también en los servidores. En 2015, la versión ES6 modernizó el lenguaje con <code>let</code>, <code>const</code>, funciones flecha, clases y promesas.</p>
    <p>Hoy JavaScript es el lenguaje más utilizado del mundo según las encuestas a programadores: está en casi todas las páginas web, en aplicaciones de escritorio como Visual Studio Code y en aplicaciones móviles.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "JavaScript en el navegador",
      html: `<p><mark>JavaScript</mark> (JS) es un lenguaje de programación interpretado, de tipado dinámico, que se ejecuta en el <b>motor</b> de cada navegador. Su estándar oficial se llama <b>ECMAScript</b>. Permite que las páginas reaccionen a las acciones del usuario, cambien su contenido y se comuniquen con servidores sin recargarse.</p>
      <p>El código se incluye con el elemento ${T("<script>")}, preferiblemente en un archivo externo:</p>
      ${B.code(`<script src="app.js" defer></script>`)}
      <p>El atributo <code>defer</code> hace que el script se ejecute cuando el HTML ya se ha leído por completo, de modo que puede acceder a todos los elementos de la página. Con <code>type="module"</code> se puede dividir el programa en módulos que se importan entre sí, como en Python.</p>
      <p>La herramienta básica para aprender y depurar es la <b>consola</b> de las herramientas para desarrolladores (tecla F12). En ella se puede escribir código y ver el resultado al instante, y los programas escriben mensajes con <code>console.log()</code>:</p>
      ${B.code(`console.log("Hola desde JavaScript");
console.log(2 + 3 * 4);          // 14
console.log(typeof "texto");      // "string"`)}
      <p>La sintaxis recuerda a la de C o Java: los bloques se delimitan con <b>llaves</b>, las instrucciones terminan en punto y coma (opcional, pero recomendable) y los comentarios empiezan por <code>//</code> o van entre <code>/* */</code>. A diferencia de Python, la sangría no es obligatoria, aunque se usa siempre para que el código sea legible.</p>`,
      svg: B.capas("Las tres capas de una página web", [["JavaScript", "comportamiento"], ["CSS", "presentación"], ["HTML", "contenido"], ["Navegador", "motor que lo ejecuta"]], { t: "Capas de la web" }),
    },
    {
      h: "Variables, tipos y operadores",
      html: `<p>Las variables se declaran con <code>let</code>, si su valor va a cambiar, o con <code>const</code>, si no se va a reasignar. La antigua palabra <code>var</code> tiene un comportamiento confuso y ya no se recomienda.</p>
      ${B.code(`const nombre = "Lucía";      // string
let edad = 17;               // number (enteros y decimales)
let mayor = edad >= 18;      // boolean: false
let nota;                    // undefined: sin valor todavía
let premio = null;           // null: vacío a propósito
edad = edad + 1;
console.log(\`\${nombre} tiene \${edad} años\`);`)}
      <p>Los tipos primitivos son <b>number</b> (todos los números, sin distinguir enteros y decimales), <b>string</b>, <b>boolean</b>, <b>undefined</b> y <b>null</b>. Las <b>plantillas</b> de texto, entre comillas invertidas, permiten insertar expresiones con <code>\${…}</code>, como las <i>f-strings</i> de Python.</p>
      <p>Los operadores aritméticos son los habituales (<code>+ - * / % **</code>), y los lógicos se escriben <code>&amp;&amp;</code> (y), <code>||</code> (o) y <code>!</code> (no). Una particularidad importante: JavaScript tiene dos operadores de igualdad. El <b>doble igual</b> <code>==</code> convierte los tipos antes de comparar, con resultados sorprendentes (<code>"5" == 5</code> es verdadero), mientras que el <b>triple igual</b> <code>===</code> exige que coincidan el valor y el tipo. Se usa siempre <code>===</code> y <code>!==</code>.</p>
      <p>El operador <code>+</code> también une textos, y si se mezcla un texto con un número, convierte el número en texto: <code>"2" + 3</code> da <code>"23"</code>. Para convertir un texto en número se usa <code>Number("23")</code> o <code>parseInt</code>, lo que es imprescindible con los datos de los formularios, que siempre llegan como texto.</p>`,
      svg: B.rejilla("Tipos de datos de JavaScript", ["Tipo", "Ejemplo"], [["number", "17, 3.14"], ["string", "\"Lucía\""], ["boolean", "true, false"], ["undefined / null", "sin valor"], ["object / array", "{…}  […]"]], { t: "Tipos" }),
    },
    {
      h: "Estructuras de control",
      html: `<p>Las estructuras de control de JavaScript son equivalentes a las de Python, con distinta sintaxis: las condiciones van entre paréntesis y los bloques entre llaves.</p>
      ${B.code(`if (nota >= 9) {
  console.log("Sobresaliente");
} else if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}

for (let i = 1; i <= 5; i++) {      // inicio; condición; incremento
  console.log(i * i);
}

const colores = ["rojo", "verde", "azul"];
for (const c of colores) {          // recorre los elementos
  console.log(c);
}

let intentos = 0;
while (intentos < 3) {
  intentos++;
}`)}
      <p>El <code>for</code> clásico tiene tres partes separadas por punto y coma: la inicialización, la condición que se comprueba antes de cada vuelta y la actualización (<code>i++</code> suma uno a <code>i</code>). El <code>for…of</code> recorre directamente los elementos de un array o de un texto, como el <code>for</code> de Python.</p>
      <p>La estructura <code>switch</code> compara un valor con varios casos, y el <b>operador ternario</b> <code>condición ? valorSiSí : valorSiNo</code> permite elegir un valor en una sola línea: <code>const texto = edad &gt;= 18 ? "adulto" : "menor";</code>.</p>
      <p>En las condiciones, JavaScript considera «falsos» los valores <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code> y <code>NaN</code> (<i>Not a Number</i>, el resultado de operaciones numéricas imposibles), y verdadero todo lo demás.</p>`,
      svg: B.comparar("La misma estructura en Python y en JavaScript", ["Python", ["if x > 0:", "elif / else", "for c in lista:", "bloques con sangría"].map((x) => x.replace(/>/g, "&gt;"))], ["JavaScript", ["if (x > 0) {", "else if / else", "for (const c of lista)", "bloques con llaves"].map((x) => x.replace(/>/g, "&gt;"))]),
    },
    {
      h: "Funciones",
      html: `<p>Las <mark>funciones</mark> agrupan código reutilizable. En JavaScript hay varias formas de definirlas:</p>
      ${B.code(`function area(base, altura) {          // declaración
  return base * altura / 2;
}

const saludo = (nombre = "anónimo") => {   // función flecha
  return \`Hola, \${nombre}\`;
};

const doble = x => x * 2;                // flecha abreviada

console.log(area(4, 3));   // 6
console.log(saludo());     // Hola, anónimo`)}
      <p>Las <b>funciones flecha</b> (<code>=&gt;</code>) son una forma compacta, muy usada en el JavaScript moderno. Si solo tienen una expresión, se pueden escribir sin llaves ni <code>return</code>. Los parámetros pueden tener <b>valores por defecto</b>.</p>
      <p>Igual que en Python, las variables declaradas dentro de una función o de un bloque con <code>let</code> y <code>const</code> son <b>locales</b>: solo existen dentro de él. Conviene evitar las variables globales y que cada función reciba lo que necesita por parámetros y devuelva su resultado.</p>
      <p>En JavaScript, las funciones son valores: se pueden guardar en variables y pasar como argumento a otras funciones. Una función que se pasa a otra para que esta la llame más tarde se llama <b>función de retrollamada</b> (<i>callback</i>). Es la base de los eventos y de los métodos de los arrays:</p>
      ${B.code(`setTimeout(() => console.log("Han pasado 2 s"), 2000);`)}
      <p>Aquí se pasa a <code>setTimeout</code> una función flecha, que el navegador ejecutará dos segundos después.</p>`,
      svg: B.cajas("Formas de definir una función en JavaScript", [["function f(a)", "declaración|clásica"], ["(a) => {…}", "función|flecha"], ["a => a * 2", "flecha de|una expresión"], ["callback", "función que se|pasa a otra"]], { t: "Funciones" }),
      video: B.V("js-general", "JavaScript desde cero: curso para principiantes"),
    },
    {
      h: "Arrays, objetos y JSON",
      html: `<p>Los <b>arrays</b> son listas ordenadas, como las listas de Python. Se accede a sus elementos por posición, desde 0, y tienen métodos muy potentes que reciben funciones:</p>
      ${B.code(`const notas = [7, 4.5, 9, 6, 3];
notas.push(8);                                  // añade al final
const aprobadas = notas.filter(n => n >= 5);    // [7, 9, 6, 8]
const subidas   = notas.map(n => n + 0.5);      // suma 0,5 a cada una
const suma      = notas.reduce((a, n) => a + n, 0);
const media     = suma / notas.length;
const primera9  = notas.find(n => n >= 9);      // 9`)}
      <p><code>filter</code> selecciona los elementos que cumplen una condición, <code>map</code> transforma cada elemento y devuelve un nuevo array, <code>reduce</code> acumula todos en un único valor y <code>find</code> devuelve el primero que cumple una condición.</p>
      <p>Los <b>objetos</b> agrupan datos con nombre en pares <b>clave: valor</b>, como los diccionarios de Python:</p>
      ${B.code(`const alumna = { nombre: "Lucía", curso: "2B", notas: [8, 9] };
console.log(alumna.nombre);       // Lucía
alumna.email = "lucia@ejemplo.es"; // añade una propiedad`)}
      <p>Los arrays de objetos son la forma habitual de representar datos: una lista de productos, de alumnos o de mensajes. <mark>JSON</mark> (<i>JavaScript Object Notation</i>) es un formato de texto basado en esta notación, con las claves entre comillas dobles. Es el formato estándar de intercambio de datos en la web, y JavaScript lo convierte con dos funciones: <code>JSON.stringify(obj)</code> pasa de objeto a texto y <code>JSON.parse(texto)</code>, de texto a objeto.</p>`,
      svg: B.flujo("Encadenar métodos de un array", ["[7, 4.5, 9, 6, 3]", "filter(n => n >= 5) → [7, 9, 6]", "map(n => n * 10) → [70, 90, 60]", "reduce(suma) → 220"].map((x) => x.replace(/>/g, "&gt;")), { t: "filter, map y reduce" }),
    },
    {
      h: "El DOM: leer y modificar la página",
      html: `<p>Cuando el navegador carga una página, construye el <mark>DOM</mark> (<i>Document Object Model</i>): una representación de la página como un <b>árbol de objetos</b>, uno por cada elemento. JavaScript accede al DOM a través del objeto <code>document</code>, y cualquier cambio en el DOM se ve inmediatamente en la pantalla.</p>
      <p>Para <b>seleccionar</b> elementos se usan selectores CSS:</p>
      ${B.code(`const titulo = document.querySelector("h1");          // el primero
const boton  = document.querySelector("#enviar");     // por id
const tarjetas = document.querySelectorAll(".tarjeta"); // todos`)}
      <p>Una vez seleccionado, se puede <b>modificar</b> el elemento:</p>
      ${B.code(`titulo.textContent = "Bienvenida";         // cambia el texto
titulo.classList.add("destacado");          // añade una clase CSS
titulo.classList.toggle("oculto");          // la pone o la quita
boton.disabled = true;                      // cambia un atributo
const img = document.querySelector("img");
img.src = "otra.jpg";`)}
      <p>Para <b>crear</b> elementos nuevos y añadirlos a la página:</p>
      ${B.code(`const lista = document.querySelector("ul");
const li = document.createElement("li");
li.textContent = "Nueva tarea";
lista.append(li);
li.remove();                                // y para eliminarlo`)}
      <p>Es mejor cambiar el aspecto añadiendo o quitando <b>clases</b> definidas en el CSS que modificar directamente la propiedad <code>style</code>, porque así la presentación sigue en la hoja de estilos. La propiedad <code>innerHTML</code> permite insertar HTML como texto, pero debe evitarse con datos que procedan del usuario, por el riesgo de seguridad que veremos al final del tema.</p>`,
      svg: dom(),
      video: B.V("js-dom", "Manipulación del DOM con JavaScript"),
    },
    {
      h: "Eventos",
      html: `<p>La programación web es <b>dirigida por eventos</b>: el programa no se ejecuta de principio a fin, sino que espera a que ocurran cosas y reacciona. Un <mark>evento</mark> es cualquier suceso: un clic, una tecla pulsada, el envío de un formulario, el final de la carga de la página. Con <code>addEventListener</code> se asocia a un elemento una función <b>manejadora</b>, que se ejecuta cada vez que ocurre el evento:</p>
      ${B.code(`const boton = document.querySelector("#contar");
const salida = document.querySelector("#total");
let clics = 0;

boton.addEventListener("click", () => {
  clics++;
  salida.textContent = \`Has pulsado \${clics} veces\`;
});

document.querySelector("#busqueda").addEventListener("input", (e) => {
  console.log("Texto actual:", e.target.value);
});`)}
      <p>Los eventos más usados son <code>click</code>, <code>input</code> (cambia el contenido de un campo), <code>change</code>, <code>submit</code> (envío de un formulario), <code>keydown</code> (tecla), <code>mouseover</code> y <code>DOMContentLoaded</code> (página lista).</p>
      <p>La función manejadora recibe un <b>objeto evento</b> (<code>e</code>) con información sobre lo ocurrido: <code>e.target</code> es el elemento que lo produjo, <code>e.key</code> la tecla pulsada. El método <code>e.preventDefault()</code> cancela el comportamiento por defecto del navegador, por ejemplo, el envío de un formulario o la navegación de un enlace.</p>
      <p>Los eventos <b>se propagan</b> hacia arriba en el árbol: un clic en un botón también llega a su contenedor. Esto permite la <b>delegación de eventos</b>: escuchar en un único contenedor, como una lista, los clics de todos sus elementos, incluidos los que se añadan después.</p>`,
      svg: B.flujo("Ciclo de un evento", ["El usuario hace clic", "El navegador crea el objeto evento", "Se ejecuta la función manejadora", "La función modifica el DOM", "La pantalla se actualiza"], { t: "Programación por eventos" }),
      video: B.V("js-eventos", "Eventos en JavaScript con addEventListener"),
    },
    {
      h: "Formularios y almacenamiento local",
      html: `<p>JavaScript permite mejorar los formularios: validar los datos mientras se escriben, mostrar mensajes claros y procesarlos sin recargar la página. El valor de un campo se lee con la propiedad <code>value</code>, que es siempre un texto:</p>
      ${B.code(`const form = document.querySelector("#calculadora");
form.addEventListener("submit", (e) => {
  e.preventDefault();                          // no recargar
  const peso = Number(form.peso.value);
  const altura = Number(form.altura.value) / 100;
  const error = document.querySelector("#error");
  if (!peso || !altura) {
    error.textContent = "Introduce peso y altura válidos";
    return;
  }
  error.textContent = "";
  const imc = peso / altura ** 2;
  document.querySelector("#resultado").textContent = \`IMC: \${imc.toFixed(1)}\`;
});`)}
      <p>Se combina con la validación de HTML5: el método <code>form.checkValidity()</code> indica si todos los campos cumplen sus restricciones. Recuerda que la validación en el cliente mejora la experiencia, pero cualquiera puede saltársela, así que el servidor debe validar siempre de nuevo.</p>
      <p>Para que una aplicación recuerde datos entre visitas, el navegador ofrece el <b>almacenamiento local</b>, <code>localStorage</code>, que guarda pares clave-valor de texto en el propio dispositivo. Para guardar objetos, se convierten a JSON:</p>
      ${B.code(`const tareas = [{ texto: "Estudiar SQL", hecha: false }];
localStorage.setItem("tareas", JSON.stringify(tareas));
const guardadas = JSON.parse(localStorage.getItem("tareas")) ?? [];`)}
      <p>El operador <code>??</code> da un valor por defecto si el resultado es <code>null</code>, como ocurre la primera vez. No deben guardarse en <code>localStorage</code> datos sensibles, porque cualquier script de la página puede leerlos.</p>`,
      svg: B.comparar("Validación en el cliente frente a validación en el servidor", ["En el cliente", ["HTML5 y JavaScript", "respuesta inmediata", "mejora la experiencia", "se puede saltar"]], ["En el servidor", ["Python, PHP, Node…", "tras el envío", "protege los datos", "siempre obligatoria"]]),
    },
    {
      h: "Programación asíncrona",
      html: `<p>JavaScript se ejecuta en un <b>único hilo</b>: solo hace una cosa a la vez. Si una tarea lenta, como descargar datos de internet, bloqueara ese hilo, la página se quedaría congelada. Por eso las operaciones lentas son <mark>asíncronas</mark>: el programa las pone en marcha, sigue con lo demás y, cuando terminan, se ejecuta la función que se indicó.</p>
      <p>Este mecanismo se llama <b>bucle de eventos</b>: el navegador gestiona las esperas (temporizadores, peticiones de red, clics) y, cuando una termina, pone su función en una <b>cola</b>; el bucle la pasa a ejecución cuando la pila de llamadas está vacía.</p>
      ${B.code(`console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// Muestra 1, 3, 2: la función del temporizador espera en la cola`)}
      <p>Para organizar el código asíncrono, el JavaScript moderno usa <b>promesas</b>. Una <mark>promesa</mark> es un objeto que representa un resultado que llegará en el futuro: está <i>pendiente</i> y acaba <i>cumplida</i>, con un valor, o <i>rechazada</i>, con un error. Las palabras <code>async</code> y <code>await</code> permiten escribir código asíncrono que se lee como si fuera secuencial:</p>
      ${B.code(`const esperar = (ms) => new Promise(ok => setTimeout(ok, ms));

async function cuentaAtras() {
  for (let i = 3; i > 0; i--) {
    console.log(i);
    await esperar(1000);      // espera sin bloquear la página
  }
  console.log("¡Ya!");
}
cuentaAtras();`)}
      <p><code>await</code> solo puede usarse dentro de funciones marcadas con <code>async</code>, y detiene esa función, no la página entera: mientras tanto, el usuario puede seguir haciendo clic.</p>`,
      svg: bucle(),
    },
    {
      h: "Consumir APIs con fetch",
      html: `<p>Una <mark>API web</mark> es un servicio que ofrece datos o funciones a otros programas a través de URL. Muchas siguen el estilo <b>REST</b>: cada recurso tiene su URL y se usan los métodos de HTTP para las operaciones (<code>GET</code> para leer, <code>POST</code> para crear, <code>PUT</code> para modificar y <code>DELETE</code> para borrar). Las respuestas suelen venir en JSON. Hay APIs públicas de datos meteorológicos, de transporte, de bibliotecas o de datos abiertos de las administraciones.</p>
      <p>La función <code>fetch</code> hace peticiones HTTP desde JavaScript y devuelve una promesa:</p>
      ${B.code(`async function mostrarUsuarios() {
  const lista = document.querySelector("#usuarios");
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error(\`Error HTTP \${res.status}\`);
    const usuarios = await res.json();          // texto JSON → objetos
    for (const u of usuarios) {
      const li = document.createElement("li");
      li.textContent = \`\${u.name} (\${u.email})\`;
      lista.append(li);
    }
  } catch (err) {
    lista.textContent = "No se han podido cargar los datos.";
    console.error(err);
  }
}
mostrarUsuarios();`)}
      <p>El patrón es siempre el mismo: pedir con <code>await fetch(url)</code>, comprobar que la respuesta es correcta con <code>res.ok</code>, convertir el cuerpo con <code>await res.json()</code> y actualizar el DOM. Las redes fallan, por lo que hay que gestionar los errores con <code>try…catch</code> y mostrar un mensaje comprensible.</p>
      <p>Por seguridad, los navegadores aplican la política del <b>mismo origen</b>: una página solo puede leer respuestas de otros dominios si el servidor lo permite con las cabeceras <b>CORS</b>. Además, muchas APIs exigen una <b>clave</b>, que nunca debe escribirse en el código del cliente, porque cualquiera puede verla: se guarda en el servidor.</p>`,
      svg: fetchDiag(),
      video: B.V("js-fetch", "Fetch, promesas y async/await en JavaScript"),
    },
    {
      h: "Depuración y buenas prácticas",
      html: `<p>Todos los programas tienen errores, y saber encontrarlos es tan importante como saber escribir código. Las <b>herramientas para desarrolladores</b> del navegador (F12) ofrecen:</p>
      <ul><li>La <b>consola</b>, que muestra los mensajes de <code>console.log</code> y los errores con el archivo y la línea donde se produjeron. Hay que leer el mensaje: <code>TypeError: Cannot read properties of null</code> suele significar que <code>querySelector</code> no ha encontrado el elemento.</li>
      <li>El <b>depurador</b> (pestaña Fuentes), que permite poner <b>puntos de interrupción</b>, ejecutar el programa paso a paso y ver el valor de las variables. La instrucción <code>debugger;</code> detiene el programa en esa línea.</li>
      <li>La pestaña <b>Red</b>, que muestra cada petición <code>fetch</code>, su código de estado y la respuesta recibida.</li></ul>
      <p>Errores típicos al empezar: escribir mal un nombre (JavaScript distingue mayúsculas y minúsculas), usar <code>==</code> en lugar de <code>===</code>, sumar textos en lugar de números, olvidar <code>await</code> (y obtener una promesa en vez de los datos) o ejecutar el script antes de que exista el HTML (se evita con <code>defer</code>).</p>
      <p>Buenas prácticas para escribir código mantenible:</p>
      <ul><li>Usar <code>const</code> por defecto y <code>let</code> solo cuando haya que reasignar.</li>
      <li>Dar nombres descriptivos y escribir funciones pequeñas con una sola tarea.</li>
      <li>Separar el HTML, el CSS y el JavaScript en archivos distintos.</li>
      <li>Usar herramientas como <b>ESLint</b>, que detecta errores y malas prácticas, y <b>Prettier</b>, que da formato automático.</li>
      <li>Controlar las versiones con <b>Git</b>.</li></ul>`,
      svg: B.cajas("Herramientas para desarrolladores del navegador", [["Consola", "mensajes|y errores"], ["Fuentes", "puntos de|interrupción"], ["Red", "peticiones|y respuestas"], ["Elementos", "DOM y CSS|en vivo"]], { t: "F12" }),
    },
    {
      h: "Seguridad, accesibilidad y ecosistema",
      html: `<p>El código JavaScript se ejecuta en el ordenador del usuario y cualquiera puede leerlo y modificarlo. De ahí una regla de oro: <b>no confiar nunca en el cliente</b>. Las comprobaciones importantes (permisos, precios, validación) deben repetirse en el servidor, y las claves secretas nunca deben estar en el código del navegador.</p>
      <p>La vulnerabilidad más común es el <mark>XSS</mark> (<i>Cross-Site Scripting</i>): un atacante consigue que una página muestre un texto suyo que contiene código, por ejemplo, en un comentario. Si la página lo inserta con <code>innerHTML</code>, el navegador lo interpreta como HTML y ejecuta el script, que puede robar las sesiones de los usuarios.</p>
      ${B.code(`// Peligroso: el texto del usuario se interpreta como HTML
caja.innerHTML = comentario;
// Seguro: se muestra como texto, con los signos < > tal cual
caja.textContent = comentario;`)}
      <p>Por eso, para mostrar datos que vienen del usuario o de una API se usa siempre <code>textContent</code> o <code>createElement</code>.</p>
      <p>Las páginas dinámicas también deben ser <b>accesibles</b>: usar elementos ${T("<button>")} para las acciones, y no ${T("<div>")} con un evento clic, para que funcionen con el teclado; mantener visible el foco; y avisar a los lectores de pantalla de los cambios importantes con atributos ARIA como <code>aria-live</code>.</p>
      <p>Para aplicaciones grandes se usan <b>bibliotecas y marcos de trabajo</b> (<i>frameworks</i>) como React, Vue, Angular o Svelte, que organizan la interfaz en componentes reutilizables. Antes de usarlos conviene dominar el JavaScript «puro» (<i>vanilla</i>), que es la base de todos ellos.</p>`,
      svg: B.comparar("innerHTML frente a textContent con datos del usuario", ["innerHTML", ["interpreta HTML", "ejecuta scripts", "riesgo de XSS", "solo con HTML propio"]], ["textContent", ["solo texto", "muestra &lt; &gt; tal cual", "seguro", "para datos externos"]]),
    },
  ],
  figura: {
    titulo: "Ideas clave de JavaScript en la web",
    items: [["Lenguaje", "let · const", "funciones flecha,", "arrays y objetos"], ["DOM", "querySelector", "textContent,", "classList, append"], ["Eventos", "addEventListener", "click, input,", "submit"], ["Asíncrono", "async · await", "fetch y JSON", "try…catch"]],
  },
  video: B.V("js-general", "JavaScript desde cero: curso para principiantes"),
  quiz: [
    ["JavaScript se ejecuta principalmente en…", ["el servidor de correo", "el navegador", "la base de datos", "la impresora"], 1, "Lado del cliente, aunque también en Node.js."],
    ["El atributo defer en <script>…", ["borra el script", "ejecuta el script cuando el HTML ya se ha leído", "lo hace más rápido", "lo oculta"], 1, "Evita acceder a elementos que aún no existen."],
    ["Para declarar una variable que no se reasignará se usa…", ["var", "let", "const", "def"], 2, "Constante."],
    ["\"5\" === 5 es…", ["true", "false", "un error", "undefined"], 1, "Distinto tipo."],
    ["\"2\" + 3 da…", ["5", "\"23\"", "error", "NaN"], 1, "Concatena textos."],
    ["Para recorrer los elementos de un array se usa…", ["for…of", "for…in", "while true", "switch"], 0, "Como el for de Python."],
    ["x => x * 2 es…", ["una comparación", "una función flecha", "un array", "un objeto"], 1, "Devuelve el doble."],
    ["notas.filter(n => n >= 5) devuelve…", ["la suma", "un array con las notas aprobadas", "la primera nota", "true"], 1, "Selecciona elementos."],
    ["El método map…", ["filtra", "transforma cada elemento y devuelve un nuevo array", "ordena", "suma"], 1, "Una transformación por elemento."],
    ["JSON.parse convierte…", ["un objeto en texto", "un texto JSON en objeto", "un número en texto", "HTML en CSS"], 1, "De texto a objeto."],
    ["El DOM es…", ["un lenguaje", "la representación de la página como árbol de objetos", "un servidor", "un formato de imagen"], 1, "Document Object Model."],
    ["document.querySelector(\".aviso\") devuelve…", ["todos los avisos", "el primer elemento con clase aviso", "el id aviso", "un texto"], 1, "querySelectorAll devuelve todos."],
    ["Para cambiar el texto de un elemento de forma segura se usa…", ["innerHTML", "textContent", "style", "src"], 1, "No interpreta HTML."],
    ["addEventListener(\"click\", f) hace que…", ["f se ejecute ya", "f se ejecute en cada clic", "se borre el botón", "se recargue la página"], 1, "Función manejadora."],
    ["e.preventDefault() en un submit…", ["envía dos veces", "evita el envío y la recarga por defecto", "borra el formulario", "valida los campos"], 1, "Cancela el comportamiento por defecto."],
    ["El valor de un input se obtiene siempre como…", ["número", "texto", "booleano", "objeto"], 1, "Hay que convertirlo con Number."],
    ["localStorage guarda…", ["datos en el servidor", "pares clave-valor de texto en el navegador", "cookies cifradas", "imágenes"], 1, "Persisten entre visitas."],
    ["await solo puede usarse…", ["en cualquier sitio", "dentro de funciones async (o módulos)", "en CSS", "en bucles while"], 1, "Espera una promesa."],
    ["fetch devuelve…", ["los datos directamente", "una promesa", "un número", "HTML siempre"], 1, "Se espera con await."],
    ["El ataque XSS se evita al mostrar datos del usuario con…", ["innerHTML", "textContent", "eval", "alert"], 1, "Se tratan como texto."],
  ],
  examen: [
    ["¿Qué muestra console.log(1); setTimeout(() => console.log(2), 0); console.log(3)?", ["1 2 3", "1 3 2", "2 1 3", "3 2 1"], 1, "El temporizador espera en la cola."],
    ["¿Qué vale [3, 8, 5].map(n => n * 2).filter(n => n > 8)?", ["[16, 10]", "[6, 16, 10]", "[8]", "[16]"], 0, "[6,16,10] filtrado: [16,10]."],
    ["¿Qué vale [2, 4, 6].reduce((a, n) => a + n, 0)?", ["6", "12", "[2,4,6]", "0"], 1, "Suma acumulada."],
    ["Un script en el head sin defer hace document.querySelector(\"#b\").addEventListener(…) y da TypeError. ¿Por qué?", ["el id está mal siempre", "el elemento aún no existe cuando se ejecuta", "addEventListener no existe", "falta CSS"], 1, "querySelector devuelve null."],
    ["const datos = fetch(url); console.log(datos.length) no funciona porque…", ["fetch no existe", "falta await: datos es una promesa", "la URL es incorrecta", "length no existe en JS"], 1, "Hay que esperar y convertir con json()."],
    ["Si Number(form.edad.value) recibe \"\", el resultado es…", ["NaN", "0", "undefined", "error"], 1, "Number(\"\") es 0: hay que comprobar que el campo no esté vacío."],
    ["¿Qué estructura evita escuchar cada botón de una lista y funciona con los añadidos después?", ["un bucle infinito", "la delegación de eventos en el contenedor", "innerHTML", "setTimeout"], 1, "Los eventos se propagan hacia arriba."],
    ["¿Dónde debe guardarse la clave de una API de pago?", ["en el JavaScript de la página", "en localStorage", "en el servidor, fuera del código del cliente", "en un comentario HTML"], 2, "El cliente es público."],
  ],
  feynman: ["Qué papel tiene JavaScript frente a HTML y CSS", "Qué diferencia hay entre let, const, == y ===", "Cómo se escriben funciones flecha y para qué sirven los callbacks", "Qué hacen filter, map y reduce", "Qué es el DOM y cómo se modifica", "Cómo funciona un evento y su función manejadora", "Por qué JavaScript es asíncrono y qué hacen async y await", "Cómo se consulta una API con fetch y por qué innerHTML puede ser peligroso"],
  mapa: ["JAVASCRIPT", [["Lenguaje", "let/const · funciones · arrays"], ["DOM", "querySelector · textContent"], ["Eventos", "addEventListener · formularios"], ["Asincronía", "promesas · async/await · fetch"]]],
  tarjetas: [
    ["Incluir JS", "<script src=\"app.js\" defer></script>; consola con F12."],
    ["Variables", "const por defecto, let si cambia; evitar var."],
    ["Igualdad", "Usar === y !==; == convierte tipos."],
    ["Plantillas", "`Hola, ${nombre}` con comillas invertidas."],
    ["Función flecha", "const doble = x => x * 2;"],
    ["Métodos de array", "push, filter, map, reduce, find."],
    ["Objeto y JSON", "{ clave: valor }; JSON.stringify y JSON.parse."],
    ["DOM", "querySelector, textContent, classList, createElement, append."],
    ["Eventos", "el.addEventListener(\"click\", e => { … }); e.preventDefault()."],
    ["localStorage", "setItem y getItem con JSON; nada sensible."],
    ["async/await y fetch", "const r = await fetch(url); const d = await r.json();"],
    ["XSS", "Usar textContent con datos externos; validar en el servidor."],
  ],
  ejemplos: [
    ["Escribe una función que reciba un array de notas y devuelva un objeto con la media y el número de aprobados.", ["Sumar con reduce y dividir entre length.", "Contar los aprobados con filter y length.", "Devolver un objeto con dos propiedades."], "const resumen = (notas) => ({\n  media: notas.reduce((a, n) => a + n, 0) / notas.length,\n  aprobados: notas.filter(n => n >= 5).length,\n});\nresumen([4, 6, 8]);  // { media: 6, aprobados: 2 }"],
    ["Haz un botón que cambie entre modo claro y oscuro añadiendo o quitando la clase oscuro al body.", ["Seleccionar el botón.", "Escuchar el evento click.", "classList.toggle pone o quita la clase; el CSS hace el resto."], "document.querySelector(\"#tema\").addEventListener(\"click\", () => {\n  document.body.classList.toggle(\"oscuro\");\n});"],
    ["Un campo de texto debe mostrar debajo cuántos caracteres quedan de un máximo de 280.", ["Escuchar el evento input, que salta con cada tecla.", "Calcular 280 menos la longitud del valor.", "Escribir el resultado con textContent."], "const t = document.querySelector(\"#mensaje\");\nconst q = document.querySelector(\"#quedan\");\nt.addEventListener(\"input\", () => {\n  q.textContent = `Quedan ${280 - t.value.length} caracteres`;\n});"],
    ["Una lista de tareas: al enviar el formulario, añade el texto escrito como un nuevo elemento de la lista y vacía el campo.", ["Escuchar submit y cancelar la recarga.", "Crear un li con createElement y textContent (seguro).", "Añadirlo con append y vaciar el input."], "form.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const li = document.createElement(\"li\");\n  li.textContent = form.tarea.value;\n  document.querySelector(\"#lista\").append(li);\n  form.tarea.value = \"\";\n});"],
    ["Escribe una función asíncrona que obtenga de una API la lista de países y muestre cuántos hay.", ["await fetch y comprobar res.ok.", "await res.json() devuelve un array.", "Gestionar los errores con try…catch."], "async function contarPaises() {\n  try {\n    const res = await fetch(\"https://restcountries.com/v3.1/all?fields=name\");\n    if (!res.ok) throw new Error(res.status);\n    const paises = await res.json();\n    console.log(`Hay ${paises.length} países`);\n  } catch (err) {\n    console.error(\"Error al cargar:\", err);\n  }\n}"],
    ["Guarda la puntuación máxima de un juego en localStorage y recupérala al cargar la página.", ["getItem devuelve null la primera vez: usar ?? 0.", "Convertir el texto a número.", "Si la nueva puntuación es mayor, guardarla."], "let record = Number(localStorage.getItem(\"record\") ?? 0);\nfunction finPartida(puntos) {\n  if (puntos > record) {\n    record = puntos;\n    localStorage.setItem(\"record\", record);\n  }\n}"],
  ],
  errores: [
    "Usar == en lugar de ===, y obtener comparaciones verdaderas entre tipos distintos.",
    "Olvidar convertir a número el value de un campo y sumar textos («2» + «3» = «23»).",
    "Ejecutar el script antes de que exista el HTML y obtener null con querySelector.",
    "Olvidar await con fetch o json() y trabajar con una promesa en lugar de con los datos.",
    "Mostrar datos del usuario con innerHTML, lo que abre la puerta al XSS.",
    "Escribir claves de API o comprobaciones de seguridad solo en el código del cliente.",
  ],
  ejercicios: {
    b: [
      ["Escribe la línea HTML que carga el archivo juego.js cuando la página ya se ha leído.", "<script src=\"juego.js\" defer></script>"],
      ["Declara una constante PI con valor 3.1416 y una variable puntos que empiece en 0.", "const PI = 3.1416;\nlet puntos = 0;"],
      ["¿Qué muestran console.log(\"3\" + 4) y console.log(\"3\" * 4)?", "\"34\" (concatena) y 12 (el * convierte a número)."],
      ["¿Qué devuelven 0 == \"\" y 0 === \"\"?", "true y false. Por eso se usa siempre ===."],
      ["Escribe un if que muestre «Mayor de edad» o «Menor de edad» según la variable edad.", "if (edad >= 18) {\n  console.log(\"Mayor de edad\");\n} else {\n  console.log(\"Menor de edad\");\n}"],
      ["Escribe un bucle que muestre los números pares del 2 al 20.", "for (let i = 2; i <= 20; i += 2) {\n  console.log(i);\n}"],
      ["Escribe una función flecha cuadrado que devuelva el cuadrado de un número.", "const cuadrado = n => n * n;"],
      ["Crea un objeto libro con título, autor y año, y muestra el autor.", "const libro = { titulo: \"Nada\", autor: \"Carmen Laforet\", anio: 1945 };\nconsole.log(libro.autor);"],
      ["Selecciona el elemento con id saludo y cambia su texto por «¡Hola!».", "document.querySelector(\"#saludo\").textContent = \"¡Hola!\";"],
      ["Añade la clase activo al primer elemento con la clase pestaña.", "document.querySelector(\".pestaña\").classList.add(\"activo\");"],
      ["Escribe el código que muestra «Pulsado» en la consola al hacer clic en el botón #b.", "document.querySelector(\"#b\").addEventListener(\"click\", () => {\n  console.log(\"Pulsado\");\n});"],
      ["Convierte el objeto { nombre: \"Ana\" } a texto JSON y explica para qué sirve.", "JSON.stringify({ nombre: \"Ana\" }) da '{\"nombre\":\"Ana\"}'. Sirve para enviarlo a un servidor o guardarlo en localStorage, que solo admiten texto."],
    ],
    m: [
      ["Dado const precios = [12, 5, 30, 8], obtén con métodos de array los precios mayores de 10 con un 21 % de IVA.", "precios.filter(p => p > 10).map(p => p * 1.21)  // [14.52, 36.3]"],
      ["Calcula con reduce el precio máximo de un array sin usar Math.max.", "const max = precios.reduce((m, p) => (p > m ? p : m), precios[0]);"],
      ["Dado un array de objetos alumnos con nombre y nota, obtén los nombres de los aprobados ordenados alfabéticamente.", "alumnos.filter(a => a.nota >= 5)\n       .map(a => a.nombre)\n       .sort((x, y) => x.localeCompare(y));"],
      ["Escribe una función que reciba un array de textos y cree un li por cada uno dentro del ul #lista.", "function pintar(textos) {\n  const ul = document.querySelector(\"#lista\");\n  for (const t of textos) {\n    const li = document.createElement(\"li\");\n    li.textContent = t;\n    ul.append(li);\n  }\n}"],
      ["Haz un contador con dos botones (+ y −) que no permita bajar de 0.", "let n = 0;\nconst out = document.querySelector(\"#n\");\ndocument.querySelector(\"#mas\").addEventListener(\"click\", () => { n++; out.textContent = n; });\ndocument.querySelector(\"#menos\").addEventListener(\"click\", () => {\n  if (n > 0) n--;\n  out.textContent = n;\n});"],
      ["Muestra en un párrafo la tecla que pulsa el usuario en cualquier momento.", "document.addEventListener(\"keydown\", (e) => {\n  document.querySelector(\"#tecla\").textContent = `Has pulsado: ${e.key}`;\n});"],
      ["Programa un conversor de euros a dólares que actualice el resultado mientras se escribe (1 € = 1,08 $).", "const e = document.querySelector(\"#euros\");\ne.addEventListener(\"input\", () => {\n  const d = Number(e.value) * 1.08;\n  document.querySelector(\"#dolares\").textContent = d.toFixed(2) + \" $\";\n});"],
      ["Valida que una contraseña tenga al menos 8 caracteres y un número antes de enviar el formulario.", "form.addEventListener(\"submit\", (e) => {\n  const c = form.clave.value;\n  if (c.length < 8 || !/[0-9]/.test(c)) {\n    e.preventDefault();\n    document.querySelector(\"#error\").textContent =\n      \"Mínimo 8 caracteres y un número\";\n  }\n});"],
      ["Explica en qué orden se muestran los mensajes: console.log(\"A\"); setTimeout(() => console.log(\"B\"), 1000); setTimeout(() => console.log(\"C\"), 0); console.log(\"D\").", "A, D, C y B. Primero se ejecuta todo el código síncrono (A y D); después, las funciones de la cola cuando vencen sus temporizadores: C (0 ms) y B (1 s)."],
      ["Escribe una función async que espere 2 segundos y después muestre «Listo», usando una promesa.", "const esperar = ms => new Promise(r => setTimeout(r, ms));\nasync function avisar() {\n  await esperar(2000);\n  console.log(\"Listo\");\n}"],
      ["Corrige este código: const res = fetch(url); const datos = res.json(); console.log(datos.nombre).", "Falta await, y debe estar dentro de una función async:\nasync function cargar() {\n  const res = await fetch(url);\n  const datos = await res.json();\n  console.log(datos.nombre);\n}"],
      ["Guarda en localStorage un array de tareas y escribe la función que lo recupera, devolviendo un array vacío si no hay nada.", "const guardar = t => localStorage.setItem(\"tareas\", JSON.stringify(t));\nconst cargar = () => JSON.parse(localStorage.getItem(\"tareas\")) ?? [];"],
      ["Implementa la delegación de eventos: al hacer clic en cualquier li de #lista, se tacha añadiendo la clase hecha.", "document.querySelector(\"#lista\").addEventListener(\"click\", (e) => {\n  if (e.target.matches(\"li\")) {\n    e.target.classList.toggle(\"hecha\");\n  }\n});"],
      ["Un compañero muestra los comentarios con caja.innerHTML += comentario. Explica el riesgo con un ejemplo y corrígelo.", "Si alguien escribe <img src=x onerror=\"robar()\">, el navegador lo interpreta y ejecuta el código (XSS). Corrección: const p = document.createElement(\"p\"); p.textContent = comentario; caja.append(p);"],
    ],
    a: [
      ["Programa un juego de adivinar un número del 1 al 100: el usuario escribe en un campo, pulsa un botón y la página dice «mayor», «menor» o «¡correcto!» con el número de intentos.", "const secreto = Math.floor(Math.random() * 100) + 1;\nlet intentos = 0;\ndocument.querySelector(\"#probar\").addEventListener(\"click\", () => {\n  const n = Number(document.querySelector(\"#num\").value);\n  intentos++;\n  const msg = n === secreto ? `¡Correcto en ${intentos} intentos!`\n            : n < secreto ? \"Es mayor\" : \"Es menor\";\n  document.querySelector(\"#pista\").textContent = msg;\n});"],
      ["Crea una lista de tareas completa: añadir, marcar como hecha, borrar y conservar las tareas en localStorage al recargar.", "let tareas = JSON.parse(localStorage.getItem(\"t\")) ?? [];\nconst ul = document.querySelector(\"#lista\");\nfunction pintar() {\n  ul.replaceChildren();\n  tareas.forEach((t, i) => {\n    const li = document.createElement(\"li\");\n    li.textContent = t.texto;\n    li.classList.toggle(\"hecha\", t.hecha);\n    li.dataset.i = i;\n    const x = document.createElement(\"button\");\n    x.textContent = \"Borrar\";\n    li.append(x);\n    ul.append(li);\n  });\n  localStorage.setItem(\"t\", JSON.stringify(tareas));\n}\nform.addEventListener(\"submit\", e => {\n  e.preventDefault();\n  tareas.push({ texto: form.tarea.value, hecha: false });\n  form.tarea.value = \"\";\n  pintar();\n});\nul.addEventListener(\"click\", e => {\n  const i = e.target.closest(\"li\").dataset.i;\n  if (e.target.matches(\"button\")) tareas.splice(i, 1);\n  else tareas[i].hecha = !tareas[i].hecha;\n  pintar();\n});\npintar();"],
      ["Consulta la API https://api.open-meteo.com/v1/forecast?latitude=42.6&longitude=-5.57&current=temperature_2m y muestra la temperatura actual con un mensaje de error si falla.", "async function tiempo() {\n  const out = document.querySelector(\"#temp\");\n  try {\n    const url = \"https://api.open-meteo.com/v1/forecast?latitude=42.6&longitude=-5.57&current=temperature_2m\";\n    const res = await fetch(url);\n    if (!res.ok) throw new Error(res.status);\n    const d = await res.json();\n    out.textContent = `Ahora: ${d.current.temperature_2m} °C`;\n  } catch {\n    out.textContent = \"No se ha podido obtener el tiempo\";\n  }\n}\ntiempo();"],
      ["Implementa un buscador que filtre en directo una lista de 200 productos ya cargada en un array, sin distinguir mayúsculas.", "const input = document.querySelector(\"#buscar\");\ninput.addEventListener(\"input\", () => {\n  const q = input.value.toLowerCase();\n  const res = productos.filter(p => p.nombre.toLowerCase().includes(q));\n  pintar(res.map(p => p.nombre));   // función del ejercicio anterior\n});"],
      ["El buscador anterior hace una petición fetch con cada tecla y satura el servidor. Explica la técnica del debounce e impleméntala.", "Debounce: esperar a que el usuario deje de escribir un tiempo (por ejemplo 300 ms) antes de lanzar la petición, cancelando el temporizador anterior con cada tecla.\nlet t;\ninput.addEventListener(\"input\", () => {\n  clearTimeout(t);\n  t = setTimeout(() => buscarEnServidor(input.value), 300);\n});"],
      ["Escribe una función que lance tres peticiones fetch a la vez y espere a que terminen todas, explicando la ventaja frente a hacerlas una tras otra.", "async function cargarTodo(urls) {\n  const resps = await Promise.all(urls.map(u => fetch(u)));\n  return Promise.all(resps.map(r => r.json()));\n}\nLas peticiones se hacen en paralelo: el tiempo total es el de la más lenta y no la suma de las tres."],
      ["Encuentra los errores de este código: let total = 0; for (const p of document.querySelectorAll(\".precio\")) total += p.textContent; if (total == \"0\") alert(\"vacío\").", "textContent es texto, así que total se concatena: hay que usar Number(p.textContent). Además, == compara con conversión y debería ser total === 0; y mejor mostrar el aviso en la página que con alert, que bloquea y es poco accesible."],
      ["Diseña la arquitectura de una aplicación web de reserva de pistas: qué haría el JavaScript del cliente y qué debe hacer obligatoriamente el servidor.", "Cliente: mostrar el calendario, pedir los huecos libres con fetch, validar el formulario y actualizar la interfaz sin recargar. Servidor: autenticar al usuario, volver a validar los datos, comprobar que la pista sigue libre dentro de una transacción, guardar la reserva en la base de datos y guardar las claves de la pasarela de pago."],
      ["Mejora la accesibilidad de un menú desplegable hecho con un div que se abre con un evento clic.", "Usar un <button> con aria-expanded que cambie entre true y false al abrir, aria-controls con el id del menú, permitir cerrarlo con la tecla Escape, mover el foco al primer enlace y mantener visible el contorno de foco."],
      ["Debate: muchas webs cargan decenas de scripts de terceros (anuncios, analítica, redes sociales). ¿Qué consecuencias tiene para el rendimiento, la seguridad y la privacidad?", "Rendimiento: más descargas y ejecución, páginas más lentas y más consumo de batería y datos. Seguridad: cada script tiene acceso total a la página, y si el proveedor es atacado, también lo es la web. Privacidad: rastrean a los usuarios entre sitios, lo que exige consentimiento según el RGPD. Conviene limitar los terceros y cargar solo los necesarios."],
    ],
  },
  glosario: [
    ["JavaScript", "Lenguaje de programación que se ejecuta en los navegadores y da comportamiento a las páginas."],
    ["ECMAScript", "Estándar oficial del lenguaje JavaScript."],
    ["Consola", "Herramienta del navegador para ejecutar código y ver mensajes y errores."],
    ["Función flecha", "Forma compacta de definir funciones con =>."],
    ["Callback", "Función que se pasa a otra para que la ejecute más tarde."],
    ["Array", "Lista ordenada de valores con métodos como map, filter y reduce."],
    ["Objeto", "Conjunto de pares clave: valor."],
    ["JSON", "Formato de texto para intercambiar datos basado en la notación de objetos."],
    ["DOM", "Representación de la página como árbol de objetos que JavaScript puede modificar."],
    ["Evento", "Suceso (clic, tecla, envío) al que el programa puede reaccionar."],
    ["Función manejadora", "Función que se ejecuta cuando ocurre un evento."],
    ["localStorage", "Almacenamiento de datos de texto en el navegador."],
    ["Asincronía", "Ejecución de tareas lentas sin bloquear el programa."],
    ["Promesa", "Objeto que representa un resultado futuro: pendiente, cumplida o rechazada."],
    ["API web", "Servicio que ofrece datos o funciones a otros programas mediante URL."],
    ["fetch", "Función de JavaScript para hacer peticiones HTTP."],
    ["XSS", "Ataque que inyecta código en una página a través de datos mostrados sin control."],
  ],
  situacion: {
    titulo: "Una aplicación web útil para el instituto",
    reto: "En parejas, programad con HTML, CSS y JavaScript una pequeña aplicación web que resuelva una necesidad real del centro (calculadora de notas, organizador de tareas, cuestionario de repaso, información del tiempo para las excursiones) y que use eventos, el DOM y, si es posible, datos de una API o de localStorage.",
    pasos: [
      "Detectad la necesidad preguntando a compañeros o profesores y definid las funciones mínimas.",
      "Dibujad la interfaz y escribid el HTML semántico y el CSS adaptable.",
      "Programad en JavaScript la lógica, los eventos y la actualización del DOM, con funciones pequeñas.",
      "Añadid persistencia con localStorage o datos de una API pública con fetch y gestión de errores.",
      "Probad la aplicación con usuarios reales, depurad con F12 y revisad la seguridad y la accesibilidad.",
    ],
    producto: "Aplicación web funcional con su código comentado, publicada en un servidor o en GitHub Pages, y una breve guía de uso.",
    evaluacion: [
      "La aplicación funciona y resuelve la necesidad planteada.",
      "El código usa correctamente variables, funciones, arrays, el DOM y los eventos.",
      "Gestiona la asincronía y los errores, y muestra los datos de forma segura.",
      "La interfaz es accesible y se adapta al móvil.",
    ],
  },
  familias: [
    "Pedidle que os enseñe la aplicación que ha programado y que os explique cómo responde a los clics.",
    "Abrid la consola del navegador (F12) en una web y mirad juntos los mensajes que aparecen.",
    "Comentad qué datos guardan las webs en vuestro navegador y cómo borrarlos.",
    "Hablad de por qué no hay que pegar en la consola código que os envíe un desconocido.",
  ],
  saberes: "Programación web en el cliente con JavaScript: inclusión en la página y consola, variables, tipos, operadores, estructuras de control, funciones y funciones flecha, arrays y sus métodos, objetos y JSON, el DOM (selección, modificación y creación de elementos), programación dirigida por eventos, formularios y almacenamiento local, asincronía con promesas y async/await, consumo de APIs con fetch, depuración con las herramientas del navegador, seguridad (XSS) y accesibilidad (Tecnologías de la Información y la Comunicación II, optativa de 2º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Empezar en la consola del navegador para obtener resultados inmediatos sin crear archivos.",
    "Comparar cada estructura de JavaScript con su equivalente en Python, que el alumnado ya conoce.",
    "Usar APIs públicas de datos abiertos españoles (AEMET, datos.gob.es) para proyectos con datos reales.",
    "Hacer sesiones de depuración en las que una pareja introduce errores y otra los encuentra con F12.",
  ],
  fuentes: [
    { t: "MDN Web Docs: JavaScript", url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
    { t: "MDN: introducción al DOM", url: "https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction" },
    { t: "MDN: uso de fetch", url: "https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch" },
    { t: "javascript.info: el tutorial moderno de JavaScript (en español)", url: "https://es.javascript.info/" },
  ],
}));
