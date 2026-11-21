// Tecnologías de la Información y la Comunicación II, 2º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
// Interfaces gráficas con Tkinter, programación orientada a eventos, ciclo de vida del software, pruebas y Git.
const B = require("./_bach2-tic");

// Ventana de Tkinter con sus widgets rotulados.
const ventana = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Ventana de una aplicación con Tkinter: barra de título, una etiqueta, un campo de entrada, un botón y una etiqueta de resultado, cada uno rotulado con el nombre de su widget">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <rect x="16" y="14" width="150" height="152" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/>
  <rect x="16" y="14" width="150" height="20" rx="6" fill="var(--pen)"/>${B.tx(60, 28, "Conversor", { fs: 10, maxW: 80, bold: true, color: "#fff" })}
  <circle cx="150" cy="24" r="4" fill="var(--red)"/><circle cx="138" cy="24" r="4" fill="var(--sun)"/>
  ${B.tx(30, 56, "Euros:", { fs: 11, maxW: 60, anchor: "start" })}
  <rect x="30" y="64" width="122" height="22" rx="3" fill="#fff" stroke="var(--muted)" stroke-width="1.4"/>${B.tx(38, 79, "25", { fs: 11, maxW: 100, anchor: "start" })}
  <rect x="50" y="98" width="82" height="24" rx="5" fill="var(--leaf)"/>${B.tx(91, 114, "Convertir", { fs: 11, maxW: 76, bold: true, color: "#fff" })}
  ${B.tx(91, 148, "= 27,10 $", { fs: 13, maxW: 120, bold: true, color: "var(--red)" })}
  ${[["Tk", 24], ["Label", 52], ["Entry", 75], ["Button", 110], ["Label", 144]].map(([t, y]) => `<path d="M168 ${y} H 186" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="3 2"/>${B.tx(190, y + 4, t, { fs: 11, maxW: 64, bold: true, color: "var(--pen)", anchor: "start" })}`).join("")}
</svg>`;

// Bucle de eventos.
const bucle = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Bucle de eventos: el programa espera; el usuario produce un evento como un clic o una tecla; el bucle lo detecta y llama a la función manejadora, que actualiza la interfaz; y el programa vuelve a esperar">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <defs><marker id="bu1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
  <ellipse cx="130" cy="92" rx="62" ry="40" fill="none" stroke="var(--line)" stroke-width="3" stroke-dasharray="6 5"/>
  ${B.tx(130, 88, "mainloop()", { fs: 12, maxW: 90, bold: true, color: "var(--pen)" })}${B.tx(130, 104, "bucle de eventos", { fs: 10, maxW: 90 })}
  ${[[130, 26, "1 · Espera", "var(--pen)"], [218, 92, "2 · Evento", "var(--red)"], [130, 158, "3 · Manejador", "var(--leaf)"], [42, 92, "4 · Actualiza", "var(--sun)"]].map(([x, y, t, c]) => `<rect x="${x - 40}" y="${y - 13}" width="80" height="26" rx="13" fill="var(--card)" stroke="${c}" stroke-width="2.2"/>${B.tx(x, y + 4, t, { fs: 10.5, maxW: 72, bold: true, color: c })}`).join("")}
  <path d="M172 34 Q 210 46 214 74" stroke="var(--muted)" stroke-width="1.8" fill="none" marker-end="url(#bu1)"/>
  <path d="M212 110 Q 204 142 172 152" stroke="var(--muted)" stroke-width="1.8" fill="none" marker-end="url(#bu1)"/>
  <path d="M88 152 Q 52 140 46 110" stroke="var(--muted)" stroke-width="1.8" fill="none" marker-end="url(#bu1)"/>
  <path d="M46 74 Q 54 44 88 34" stroke="var(--muted)" stroke-width="1.8" fill="none" marker-end="url(#bu1)"/>
  ${B.tx(236, 128, "clic, tecla", { fs: 9, maxW: 46, color: "var(--muted)" })}
</svg>`;

// Pirámide de pruebas.
const piramide = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Pirámide de pruebas: en la base muchas pruebas unitarias, rápidas y baratas; en medio pruebas de integración; arriba pocas pruebas de sistema y de aceptación, más lentas y costosas">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <path d="M130 14 L 176 62 H 84 Z" fill="var(--red)" fill-opacity=".22" stroke="var(--red)" stroke-width="2"/>
  <path d="M84 66 H 176 L 212 110 H 48 Z" fill="var(--sun)" fill-opacity=".22" stroke="var(--sun)" stroke-width="2"/>
  <path d="M48 114 H 212 L 248 162 H 12 Z" fill="var(--leaf)" fill-opacity=".22" stroke="var(--leaf)" stroke-width="2"/>
  ${B.tx(160, 30, "Sistema y aceptación", { fs: 10.5, maxW: 92, bold: true, color: "var(--red)", anchor: "start" })}${B.tx(160, 44, "pocas y costosas", { fs: 9.5, maxW: 92, anchor: "start" })}
  ${B.tx(130, 92, "Integración", { fs: 12, maxW: 130, bold: true, color: "var(--sun)" })}
  ${B.tx(130, 136, "Unitarias", { fs: 13, maxW: 180, bold: true, color: "var(--leaf)" })}${B.tx(130, 152, "muchas, rápidas y baratas", { fs: 10, maxW: 200 })}
  ${B.tx(130, 176, "cuanto más arriba, menos pruebas y más costosas", { fs: 9.5, maxW: 236, color: "var(--muted)" })}
</svg>`;

module.exports = B.tema(B.textos({
  titulo: "Interfaces gráficas, eventos y pruebas del software",
  minutos: 120,
  objetivos: [
    "Distinguir los tipos de interfaces de usuario y aplicar principios de usabilidad, experiencia de usuario y accesibilidad",
    "Explicar la programación orientada a eventos y el funcionamiento del bucle de eventos",
    "Construir aplicaciones gráficas sencillas en Python con Tkinter, sus widgets y sus gestores de geometría",
    "Describir las fases del ciclo de vida del software y las metodologías en cascada y ágiles",
    "Diseñar y automatizar pruebas del software, en especial pruebas unitarias con unittest",
    "Usar el control de versiones con Git para desarrollar software en equipo",
  ],
  claves: ["interfaz de usuario", "GUI", "usabilidad", "UX", "accesibilidad", "evento", "manejador", "bucle de eventos", "Tkinter", "widget", "ciclo de vida", "metodología ágil", "prueba unitaria", "caja negra", "TDD", "Git"],
  pregunta: {
    texto: "Una aplicación puede tener un código perfecto y aun así fracasar porque nadie entiende cómo usarla, o tener un botón precioso que hace caer el programa. ¿Qué hace falta para que un programa sea de verdad bueno?",
    respuesta: "Dos cosas que van más allá de que el código «funcione». Primero, una <mark>interfaz</mark> pensada para las personas: clara, coherente, accesible y que responda a sus acciones, lo que se consigue con diseño de experiencia de usuario y programación orientada a <b>eventos</b>. Segundo, <mark>pruebas</mark> sistemáticas que comprueben que cada parte hace lo que debe antes de que llegue a los usuarios. Ambas forman parte del <b>ciclo de vida del software</b>, que organiza cómo se analiza, diseña, programa, prueba y mantiene una aplicación.",
  },
  lectura: {
    titulo: "El ratón que cambió la informática",
    html: `<p>El 9 de diciembre de 1968, el ingeniero Douglas Engelbart subió a un escenario de San Francisco y, durante noventa minutos, mostró algo que nadie había visto: movía un pequeño aparato de madera sobre la mesa y un punto se desplazaba por la pantalla; con él abría textos, enlazaba documentos y hacía una videollamada con un compañero a 50 kilómetros. Aquella presentación se conoce como «la madre de todas las demos». El aparato era el primer <b>ratón</b>.</p>
    <p>Hasta entonces, para usar un ordenador había que escribir órdenes en un terminal. Las ideas de Engelbart se desarrollaron en el centro Xerox PARC, donde nacieron las ventanas y los iconos, y llegaron al gran público con el Macintosh de Apple en 1984 y con Windows. Programar estas <b>interfaces gráficas</b> exigió una forma nueva de pensar: el programa ya no decide el orden de las cosas, sino que espera a que el usuario haga clic, escriba o arrastre, y reacciona.</p>
    <p>Hoy tocamos pantallas, hablamos con asistentes de voz y usamos gafas de realidad virtual. En este tema aprenderás a programar interfaces que responden a eventos y a comprobar, con pruebas, que tu software funciona antes de que otros lo usen.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Las interfaces de usuario",
      html: `<p>La <mark>interfaz de usuario</mark> es la parte de un programa con la que interactúan las personas: lo que ven, oyen o tocan, y la forma en que dan órdenes. Una misma lógica (calcular un préstamo, por ejemplo) puede ofrecerse con interfaces muy distintas. Las principales son:</p>
      <ul><li><b>Interfaz de línea de órdenes</b> (CLI): el usuario escribe órdenes de texto en un terminal, como los programas de consola que has hecho con <code>input</code> y <code>print</code>. Es potente y fácil de automatizar, pero hay que conocer las órdenes.</li>
      <li><b>Interfaz gráfica</b> (GUI, <i>Graphical User Interface</i>): ventanas, botones, menús e iconos que se manejan con el ratón o el teclado. Es intuitiva porque se basa en reconocer en lugar de recordar.</li>
      <li><b>Interfaz táctil</b>: la de los móviles y tabletas, con gestos como tocar, deslizar o pellizcar.</li>
      <li><b>Interfaz web</b>: la aplicación se usa desde el navegador; se programa con HTML, CSS y JavaScript, como verás más adelante.</li>
      <li><b>Interfaces de voz</b> y <b>conversacionales</b> (asistentes y chatbots), y <b>naturales</b> (gestos, realidad aumentada y virtual).</li></ul>
      <p>Un principio fundamental del desarrollo de software es <b>separar la lógica de la interfaz</b>. Las funciones y clases que hacen los cálculos no deben depender de cómo se muestran los resultados. Así, la misma lógica puede usarse desde la consola, desde una ventana o desde una web, y se puede probar de forma automática. Muchos programas siguen el patrón <b>Modelo-Vista-Controlador</b> (MVC): el modelo contiene los datos y la lógica; la vista, la presentación; y el controlador recibe las acciones del usuario y las comunica a los otros dos.</p>`,
      svg: B.cajas("Tipos de interfaces de usuario", [["Línea de órdenes", "texto en|un terminal"], ["Gráfica (GUI)", "ventanas, botones|y menús"], ["Táctil y web", "gestos|y navegador"], ["Voz y natural", "asistentes,|realidad virtual"]], { t: "¿Cómo hablamos con el programa?" }),
    },
    {
      h: "Usabilidad, experiencia de usuario y accesibilidad",
      html: `<p>La <mark>usabilidad</mark> mide la facilidad con la que las personas usan un producto para conseguir sus objetivos de forma eficaz, eficiente y satisfactoria. El <b>diseño de interfaz</b> (UI, <i>User Interface</i>) se ocupa del aspecto visual: colores, tipografías, iconos y disposición de los elementos. El <b>diseño de experiencia de usuario</b> (UX, <i>User Experience</i>) es más amplio: estudia a las personas usuarias, sus necesidades y sus emociones al usar el producto, desde que lo descubren hasta que terminan su tarea.</p>
      <p>El experto Jakob Nielsen resumió en diez <b>heurísticas</b> los principios de una buena interfaz. Algunas de las más importantes son:</p>
      <ul><li><b>Visibilidad del estado</b>: el sistema informa de lo que está pasando (una barra de progreso, un mensaje de «guardado»).</li>
      <li><b>Coherencia</b>: los mismos elementos se comportan igual en toda la aplicación y siguen las convenciones habituales.</li>
      <li><b>Prevención de errores</b> y mensajes de error claros, en lenguaje sencillo y que propongan una solución.</li>
      <li><b>Control del usuario</b>: posibilidad de deshacer y de cancelar.</li>
      <li><b>Reconocer mejor que recordar</b> y <b>diseño minimalista</b>, sin información innecesaria.</li></ul>
      <p>La <mark>accesibilidad</mark> garantiza que todas las personas, incluidas las que tienen alguna discapacidad visual, auditiva, motriz o cognitiva, puedan usar el producto. Supone, por ejemplo, un buen contraste de colores, textos alternativos para las imágenes, poder manejarlo todo con el teclado, tamaños de letra ajustables o no transmitir información solo mediante el color. En la Unión Europea, la normativa obliga a que las webs y aplicaciones de las administraciones públicas, y cada vez más las de empresas, sean accesibles.</p>`,
      svg: B.estrella("Principios de una buena interfaz", "Buena interfaz", ["Clara", "Coherente", "Informa", "Permite deshacer", "Accesible", "Previene errores"]),
      video: B.V("gui-ux", "¿Qué es el diseño UX? Experiencia de usuario"),
    },
    {
      h: "La programación orientada a eventos",
      html: `<p>En los programas de consola, el flujo lo marca el programa: pide un dato, calcula, muestra el resultado y pide el siguiente, en un orden fijo. En una interfaz gráfica, en cambio, el usuario puede hacer clic en cualquier botón, escribir en cualquier campo o cerrar la ventana en cualquier momento. Para eso se usa la <mark>programación orientada a eventos</mark>: el programa prepara la interfaz y después <b>espera</b> a que ocurran eventos, y reacciona a cada uno ejecutando el código asociado.</p>
      <p>Un <b>evento</b> es cualquier suceso que el programa puede detectar: un clic, una pulsación de tecla, el movimiento del ratón, el cambio de tamaño de una ventana, el final de una descarga o el paso de cierto tiempo. A cada evento se le asocia una función llamada <mark>manejador</mark> o <i>callback</i> (función de retrollamada), que se ejecutará cuando ocurra.</p>
      <p>El corazón de estos programas es el <b>bucle de eventos</b> (<i>event loop</i>): un bucle infinito, gestionado por la biblioteca gráfica, que espera eventos, los coloca en una cola, los atiende uno a uno llamando a su manejador y vuelve a esperar. En Tkinter se pone en marcha con <code>ventana.mainloop()</code>, normalmente la última línea del programa.</p>
      <p>De aquí se derivan dos reglas importantes. Los manejadores deben ser <b>rápidos</b>: mientras uno se ejecuta, el bucle no atiende otros eventos y la ventana parece «colgada». Las tareas largas se dividen o se ejecutan en segundo plano. Y el código debe estar preparado para recibir los eventos en <b>cualquier orden</b>, por ejemplo que se pulse «Calcular» con el campo vacío. Este modelo no es exclusivo de las ventanas: los botones de una web en JavaScript, los sensores de una placa Arduino o los mensajes de un servidor también se programan con eventos.</p>`,
      svg: bucle(),
    },
    {
      h: "Primeros pasos con Tkinter",
      html: `<p>Python incluye en su biblioteca estándar <mark>Tkinter</mark>, un módulo para crear interfaces gráficas que funciona en Windows, macOS y Linux sin instalar nada. Los elementos de una interfaz se llaman <b>widgets</b> (controles): etiquetas, botones, campos de texto, casillas… Todos se colocan dentro de una ventana principal, que es también un widget.</p>
      ${B.code(`import tkinter as tk

def saludar():
    nombre = entrada.get()
    resultado.config(text=f"¡Hola, {nombre}!")

ventana = tk.Tk()
ventana.title("Saludo")

tk.Label(ventana, text="¿Cómo te llamas?").pack(pady=5)
entrada = tk.Entry(ventana)
entrada.pack()
tk.Button(ventana, text="Saludar", command=saludar).pack(pady=5)
resultado = tk.Label(ventana, text="")
resultado.pack()

ventana.mainloop()`)}
      <p>El programa sigue siempre los mismos pasos: se crea la ventana con <code>tk.Tk()</code>; se crean los widgets indicando su <b>contenedor</b> (la ventana) y sus opciones (texto, colores, tamaño); se colocan con un gestor de geometría, aquí <code>pack()</code>; se asocian los manejadores, como el parámetro <code>command</code> del botón; y por último se inicia el bucle de eventos con <code>mainloop()</code>.</p>
      <p>Fíjate en que a <code>command</code> se le pasa el <b>nombre</b> de la función, <code>saludar</code>, sin paréntesis: no se ejecuta en ese momento, sino que Tkinter la llamará cuando se haga clic. Escribir <code>command=saludar()</code> es un error típico: la función se ejecutaría una sola vez al crear el botón. Para leer el contenido de un campo se usa <code>get()</code>, y para cambiar las opciones de un widget ya creado, <code>config()</code>.</p>`,
      svg: ventana(),
      video: B.V("gui-tkinter", "Introducción a las interfaces gráficas con Tkinter"),
    },
    {
      h: "Widgets y gestores de geometría",
      html: `<p>Tkinter ofrece una amplia colección de widgets. Los más usados son:</p>
      <ul><li><code>Label</code>: muestra un texto o una imagen.</li>
      <li><code>Button</code>: botón que ejecuta una función al pulsarlo.</li>
      <li><code>Entry</code>: campo para escribir una línea de texto; <code>Text</code>, para varias líneas.</li>
      <li><code>Checkbutton</code> (casilla de verificación) y <code>Radiobutton</code> (botones de opción, de los que solo se elige uno).</li>
      <li><code>Listbox</code> (lista de elementos), <code>Scale</code> (deslizador), <code>Spinbox</code> y <code>Combobox</code> (lista desplegable, en el submódulo <code>ttk</code>).</li>
      <li><code>Frame</code>: marco contenedor que agrupa otros widgets; <code>Canvas</code>: lienzo para dibujar formas y animaciones; <code>Menu</code>: barras de menús.</li></ul>
      <p>Para colocar los widgets en la ventana se usan los <b>gestores de geometría</b>. <code>pack()</code> los apila uno tras otro, de arriba abajo o de izquierda a derecha (<code>side="left"</code>); es cómodo para interfaces sencillas. <code>grid()</code> los coloca en una cuadrícula indicando la fila y la columna (<code>row=0, column=1</code>), y es el más práctico para formularios. <code>place()</code> los sitúa en coordenadas exactas, pero no se adapta al cambiar el tamaño de la ventana. En un mismo contenedor no deben mezclarse <code>pack</code> y <code>grid</code>; para combinarlos se usan varios <code>Frame</code>.</p>
      ${B.code(`tk.Label(v, text="Usuario").grid(row=0, column=0, sticky="e")
tk.Entry(v).grid(row=0, column=1, padx=5, pady=3)
tk.Label(v, text="Contraseña").grid(row=1, column=0, sticky="e")
tk.Entry(v, show="*").grid(row=1, column=1, padx=5, pady=3)
tk.Button(v, text="Entrar").grid(row=2, column=0, columnspan=2)`)}
      <p>El submódulo <code>tkinter.ttk</code> ofrece versiones de los widgets con un aspecto más moderno, adaptado al sistema operativo.</p>`,
      svg: B.rejilla("Widgets frecuentes de Tkinter", ["Widget", "Sirve para"], [["Label", "mostrar texto"], ["Button", "ejecutar una acción"], ["Entry", "escribir una línea"], ["Checkbutton", "sí / no"], ["Canvas", "dibujar"]], { t: "Widgets" }),
    },
    {
      h: "Eventos, variables de control y diálogos",
      html: `<p>Además del parámetro <code>command</code> de los botones, cualquier widget puede responder a eventos con el método <code>bind</code>, que asocia un tipo de evento con un manejador. El manejador recibe un objeto <code>event</code> con información, como la tecla pulsada o la posición del ratón:</p>
      ${B.code(`def tecla(event):
    print("Has pulsado", event.keysym)

def clic(event):
    print("Clic en", event.x, event.y)

ventana.bind("<Key>", tecla)
lienzo.bind("<Button-1>", clic)        # botón izquierdo
entrada.bind("<Return>", lambda e: saludar())`)}
      <p>Algunos eventos habituales son <code>&lt;Button-1&gt;</code> (clic izquierdo), <code>&lt;Double-Button-1&gt;</code>, <code>&lt;Motion&gt;</code> (mover el ratón), <code>&lt;Key&gt;</code> y <code>&lt;Return&gt;</code> (tecla Intro). Con <code>ventana.after(1000, funcion)</code> se programa un evento de tiempo, útil para relojes, temporizadores y animaciones.</p>
      <p>Las <b>variables de control</b> (<code>StringVar</code>, <code>IntVar</code>, <code>DoubleVar</code>, <code>BooleanVar</code>) se enlazan a los widgets con la opción <code>textvariable</code> o <code>variable</code>: cuando el programa cambia la variable, el widget se actualiza solo, y al revés. Son la forma más cómoda de leer casillas y botones de opción.</p>
      <p>Para comunicarse con el usuario, el módulo <code>tkinter.messagebox</code> ofrece ventanas de diálogo: <code>showinfo</code>, <code>showwarning</code>, <code>showerror</code> y <code>askyesno</code>, que devuelve <code>True</code> o <code>False</code>. Y <code>tkinter.filedialog</code> abre el selector de ficheros del sistema. Un buen hábito es validar los datos en los manejadores con <code>try/except</code> y mostrar los errores con <code>showerror</code>, en lugar de dejar que el programa falle en silencio.</p>`,
      svg: B.rejilla("Eventos de Tkinter", ["Evento", "Ocurre al"], [["&lt;Button-1&gt;", "clic izquierdo"], ["&lt;Double-Button-1&gt;", "doble clic"], ["&lt;Motion&gt;", "mover el ratón"], ["&lt;Key&gt;", "pulsar una tecla"], ["&lt;Return&gt;", "pulsar Intro"]], { t: "bind(evento, manejador)" }),
    },
    {
      h: "Una aplicación gráfica con POO",
      html: `<p>Cuando la aplicación crece, lo mejor es organizarla como una <b>clase</b>: los widgets y los datos se guardan como atributos y los manejadores son métodos. Además, la lógica se separa en funciones o clases independientes de la interfaz, que se pueden probar por separado.</p>
      ${B.code(`import tkinter as tk
from tkinter import messagebox

def imc(peso, altura):                 # lógica, sin interfaz
    return peso / altura ** 2

class AppIMC:
    def __init__(self, raiz):
        raiz.title("Calculadora de IMC")
        self.peso = tk.DoubleVar()
        self.altura = tk.DoubleVar()
        tk.Label(raiz, text="Peso (kg)").grid(row=0, column=0)
        tk.Entry(raiz, textvariable=self.peso).grid(row=0, column=1)
        tk.Label(raiz, text="Altura (m)").grid(row=1, column=0)
        tk.Entry(raiz, textvariable=self.altura).grid(row=1, column=1)
        tk.Button(raiz, text="Calcular", command=self.calcular).grid(row=2, column=0, columnspan=2)
        self.res = tk.Label(raiz, text="")
        self.res.grid(row=3, column=0, columnspan=2)

    def calcular(self):
        try:
            v = imc(self.peso.get(), self.altura.get())
            self.res.config(text=f"IMC: {v:.1f}")
        except (tk.TclError, ZeroDivisionError):
            messagebox.showerror("Error", "Introduce números válidos")

raiz = tk.Tk()
AppIMC(raiz)
raiz.mainloop()`)}
      <p>Observa la estructura: la función <code>imc</code> no sabe nada de ventanas, así que podría usarse en una web o probarse con <code>assert imc(70, 1.75) &gt; 22</code>. La clase <code>AppIMC</code> solo se ocupa de la presentación y de responder a los eventos. El manejador valida los datos y muestra un mensaje de error comprensible si el usuario escribe letras o deja la altura a cero. Esta separación entre <b>lógica</b> e <b>interfaz</b> es la idea del patrón Modelo-Vista-Controlador.</p>`,
      svg: B.capas("Arquitectura de una aplicación gráfica", [["Vista", "ventana y widgets"], ["Controlador", "manejadores de eventos"], ["Modelo", "datos y lógica: imc()"], ["Datos", "ficheros o base de datos"]], { t: "Separar responsabilidades" }),
    },
    {
      h: "Otras herramientas para crear interfaces",
      html: `<p>Tkinter es ideal para aprender y para pequeñas utilidades, pero hay muchas otras herramientas, cada una adecuada a un tipo de aplicación:</p>
      <ul><li><b>Bibliotecas de escritorio</b>: <i>PyQt</i> o <i>PySide</i> (Qt), con aspecto profesional y un diseñador visual de ventanas; <i>Kivy</i>, que también funciona en móviles con pantallas táctiles; o <i>Pygame</i>, para videojuegos en 2D.</li>
      <li><b>Aplicaciones móviles</b>: se programan en Kotlin para Android y Swift para iOS, o con herramientas multiplataforma como Flutter. Para empezar sin experiencia, <b>MIT App Inventor</b> permite crear apps de Android con bloques, siguiendo exactamente el modelo de eventos: «cuando Botón1.Clic, hacer…».</li>
      <li><b>Aplicaciones web</b>: la interfaz se escribe en HTML, CSS y JavaScript y se ejecuta en el navegador, lo que la hace accesible desde cualquier dispositivo. Muchas aplicaciones de escritorio actuales, como algunos editores de código o de chat, son en realidad webs empaquetadas.</li>
      <li><b>Motores de videojuegos</b> como Godot o Unity, que combinan escenas visuales con código asociado a eventos.</li></ul>
      <p>Antes de programar una interfaz conviene <b>prototiparla</b>. Un <b>boceto</b> o <i>wireframe</i> es un esquema sencillo, en papel o con herramientas digitales, que muestra la disposición de los elementos sin detalles visuales. Un <b>prototipo</b> interactivo, hecho con herramientas como Figma o Penpot, permite navegar entre pantallas como si fuera la aplicación real. Probar los prototipos con usuarios reales, observando dónde dudan o se equivocan, es una forma barata de detectar problemas de usabilidad antes de escribir una sola línea de código.</p>`,
      svg: B.flujo("Del boceto a la aplicación", ["Investigar a los usuarios y sus tareas", "Boceto o wireframe en papel", "Prototipo interactivo (Figma, Penpot)", "Pruebas con usuarios y mejoras", "Programación de la interfaz real"], { t: "Diseño centrado en el usuario" }),
    },
    {
      h: "El ciclo de vida del software",
      html: `<p>Desarrollar software profesional es mucho más que programar. El <mark>ciclo de vida del software</mark> es el conjunto de fases por las que pasa una aplicación desde que se plantea hasta que se retira:</p>
      <ol><li><b>Análisis de requisitos</b>: averiguar qué debe hacer el programa, hablando con los usuarios. Se distinguen los requisitos <b>funcionales</b> (qué hace: «el usuario puede reservar un libro») y los <b>no funcionales</b> (cómo lo hace: rapidez, seguridad, accesibilidad).</li>
      <li><b>Diseño</b>: decidir la arquitectura, las clases, la base de datos y la interfaz, con diagramas UML y prototipos.</li>
      <li><b>Implementación</b>: escribir el código.</li>
      <li><b>Pruebas</b>: comprobar que el programa cumple los requisitos y no tiene errores.</li>
      <li><b>Despliegue</b>: instalarlo o publicarlo para los usuarios.</li>
      <li><b>Mantenimiento</b>: corregir errores, adaptarlo a cambios y añadir funciones. Suele ser la fase más larga y costosa.</li></ol>
      <p>Estas fases pueden organizarse de distintas formas. En el <b>modelo en cascada</b>, cada fase empieza cuando termina la anterior; es ordenado, pero poco flexible: si los requisitos cambian o se descubre un error de diseño al final, corregirlo es muy caro. Las <mark>metodologías ágiles</mark>, como <b>Scrum</b>, trabajan en ciclos cortos, de una a cuatro semanas, llamados <i>sprints</i>: en cada uno se analiza, diseña, programa y prueba una pequeña parte que funciona, se enseña al cliente y se ajusta el plan. Priorizan la colaboración, las entregas frecuentes y la adaptación al cambio. Hoy la mayoría de los equipos de software trabajan con metodologías ágiles.</p>`,
      svg: B.ciclo("Ciclo de vida del software", "software", ["Requisitos", "Diseño", "Código", "Pruebas", "Despliegue", "Mantenimiento"]),
    },
    {
      h: "Las pruebas del software",
      html: `<p>Las <mark>pruebas</mark> (<i>testing</i>) consisten en ejecutar el programa con datos preparados para encontrar errores y comprobar que cumple los requisitos. Como dijo el informático Edsger Dijkstra, las pruebas pueden demostrar la presencia de errores, pero nunca su ausencia: por eso hay que diseñarlas con método. Cuanto antes se detecta un error, más barato es corregirlo; uno descubierto por los usuarios puede costar cien veces más que en el desarrollo.</p>
      <p>Según su alcance, las pruebas se organizan en niveles:</p>
      <ul><li><b>Unitarias</b>: comprueban una pieza pequeña (una función o una clase) de forma aislada.</li>
      <li><b>De integración</b>: comprueban que varias piezas funcionan bien juntas (la interfaz con la base de datos).</li>
      <li><b>De sistema</b>: la aplicación completa, incluido el rendimiento y la seguridad.</li>
      <li><b>De aceptación</b>: el cliente o los usuarios confirman que el programa hace lo que necesitan.</li></ul>
      <p>Según cómo se diseñan, se distingue entre pruebas de <b>caja negra</b>, que se basan solo en lo que debe hacer el programa (entradas y salidas esperadas) sin mirar el código, y de <b>caja blanca</b>, que se diseñan mirando el código para recorrer todas sus ramas y bucles. En las de caja negra se usan dos técnicas: dividir las entradas en <b>clases de equivalencia</b> (para una nota: valores válidos entre 0 y 10, negativos, mayores que 10, texto) y probar los <b>valores límite</b> (−1, 0, 10, 11), donde se concentran muchos errores.</p>
      <p>Cuando se corrige un error o se añade una función, hay que repetir las pruebas para comprobar que no se ha estropeado nada: son las <b>pruebas de regresión</b>. Por eso conviene automatizarlas.</p>`,
      svg: piramide(),
      video: B.V("gui-pruebas", "Qué son las pruebas unitarias"),
    },
    {
      h: "Pruebas unitarias automáticas",
      html: `<p>Las pruebas unitarias se escriben como pequeños programas que se ejecutan automáticamente. Python incluye el módulo <code>unittest</code>: cada grupo de pruebas es una clase que hereda de <code>unittest.TestCase</code>, y cada prueba es un método cuyo nombre empieza por <code>test</code>. Dentro se usan <b>aserciones</b> que comparan el resultado obtenido con el esperado:</p>
      ${B.code(`import unittest
from calculos import imc

class TestIMC(unittest.TestCase):
    def test_normal(self):
        self.assertAlmostEqual(imc(70, 1.75), 22.86, places=2)

    def test_altura_cero(self):
        with self.assertRaises(ZeroDivisionError):
            imc(70, 0)

    def test_tipo(self):
        self.assertIsInstance(imc(50, 1.6), float)

if __name__ == "__main__":
    unittest.main()`)}
      <p>Las aserciones más usadas son <code>assertEqual</code>, <code>assertTrue</code>, <code>assertFalse</code>, <code>assertIn</code>, <code>assertAlmostEqual</code> (para decimales, que no deben compararse con <code>==</code> por los errores de redondeo) y <code>assertRaises</code> (para comprobar que se lanza una excepción). Al ejecutar el fichero, <code>unittest</code> informa de cuántas pruebas pasan y muestra los detalles de las que fallan. Muchos equipos prefieren la biblioteca <i>pytest</i>, que permite escribir pruebas como funciones con un simple <code>assert</code>.</p>
      <p>En el <mark>desarrollo guiado por pruebas</mark> (TDD, <i>Test-Driven Development</i>) se escribe primero la prueba, que falla (rojo); después el código mínimo para que pase (verde); y por último se mejora el código sin cambiar su comportamiento (refactorizar). En los proyectos profesionales, las pruebas se ejecutan automáticamente cada vez que alguien sube un cambio, con sistemas de <b>integración continua</b>: si alguna falla, el cambio no se acepta.</p>`,
      svg: B.ciclo("Ciclo del desarrollo guiado por pruebas: rojo, verde y refactorizar", "TDD", ["Rojo: la prueba falla", "Verde: el código pasa", "Refactorizar"]),
    },
    {
      h: "Control de versiones y trabajo en equipo",
      html: `<p>Cuando varias personas trabajan en el mismo programa, o cuando uno mismo quiere volver a una versión anterior que funcionaba, se necesita un <mark>sistema de control de versiones</mark>. El más usado del mundo es <b>Git</b>, creado en 2005 por Linus Torvalds para desarrollar Linux. Git guarda la historia completa del proyecto en un <b>repositorio</b>: cada vez que se registra un conjunto de cambios con un <b>commit</b>, se guarda una «foto» del proyecto con un mensaje que explica qué se ha cambiado, quién y cuándo.</p>
      ${B.code(`git init                      # crear un repositorio
git add calculos.py           # preparar los cambios
git commit -m "Añade cálculo del IMC"
git log                       # ver la historia
git branch nueva-ventana      # crear una rama
git switch nueva-ventana
git merge nueva-ventana       # (desde main) fusionar la rama`)}
      <p>Las <b>ramas</b> permiten desarrollar una función nueva o probar una idea sin tocar la versión principal (<code>main</code>); cuando está terminada y probada, se <b>fusiona</b>. Si dos personas han modificado las mismas líneas, Git detecta un <b>conflicto</b> que hay que resolver a mano.</p>
      <p>Las plataformas como <b>GitHub</b>, GitLab o Codeberg alojan repositorios en internet y facilitan la colaboración: cada persona trabaja en su copia, sube sus ramas y propone integrarlas mediante una <b>petición de fusión</b> (<i>pull request</i>), que el resto del equipo revisa antes de aceptarla. Allí se publican también la documentación (un fichero <code>README</code>), la lista de errores pendientes y la <b>licencia</b>, que indica qué pueden hacer otros con el código: las licencias libres, como GPL o MIT, permiten usarlo, estudiarlo, modificarlo y compartirlo. Saber trabajar con Git es hoy una competencia básica para cualquier persona que programe.</p>`,
      svg: B.flujo("Flujo de trabajo con Git", ["Crear una rama para la nueva función", "Programar y hacer commits con mensajes claros", "Ejecutar las pruebas automáticas", "Proponer la fusión (pull request) y revisar", "Fusionar en main y desplegar"], { t: "Git en equipo" }),
    },
  ],
  figura: {
    titulo: "Ideas clave de las interfaces y las pruebas del software",
    items: [["Interfaz", "UX · UI", "usable, clara", "y accesible"], ["Eventos", "mainloop()", "evento →", "manejador"], ["Tkinter", "widgets", "pack · grid", "command · bind"], ["Calidad", "pruebas · Git", "unitarias, TDD", "y versiones"]],
  },
  video: B.V("gui-general", "Frameworks de Python para crear aplicaciones de escritorio"),
  quiz: [
    ["La interfaz de usuario es…", ["el procesador", "la parte del programa con la que interactúan las personas", "el código fuente", "la base de datos"], 1, "Lo que se ve, se oye o se toca."],
    ["Una GUI se basa en…", ["escribir órdenes", "ventanas, botones e iconos", "solo la voz", "tarjetas perforadas"], 1, "Graphical User Interface."],
    ["La experiencia de usuario (UX) estudia…", ["solo los colores", "las necesidades y vivencias de las personas al usar el producto", "el hardware", "los virus"], 1, "Es más amplia que la UI."],
    ["Que una aplicación pueda usarse con lector de pantalla o solo con el teclado es una cuestión de…", ["rendimiento", "accesibilidad", "licencia", "compilación"], 1, "Para todas las personas."],
    ["Una barra de progreso aplica la heurística de…", ["visibilidad del estado del sistema", "minimalismo", "control del usuario", "coherencia"], 0, "Informa de lo que pasa."],
    ["En la programación orientada a eventos, el programa…", ["sigue un orden fijo", "espera eventos y reacciona a ellos", "no tiene funciones", "no usa bucles"], 1, "Clics, teclas, tiempo…"],
    ["La función que se ejecuta cuando ocurre un evento es el…", ["constructor", "manejador o callback", "widget", "compilador"], 1, "Se asocia al evento."],
    ["En Tkinter, el bucle de eventos se inicia con…", ["start()", "mainloop()", "run()", "loop()"], 1, "Suele ser la última línea."],
    ["Un manejador que tarda mucho provoca que…", ["la ventana parezca colgada", "el programa vaya más rápido", "se cierre el ordenador", "nada"], 0, "El bucle no atiende otros eventos."],
    ["tk.Button(v, text=\"OK\", command=f()) es un error porque…", ["falta el texto", "f se ejecuta al crear el botón, no al pulsarlo", "Button no existe", "command no existe"], 1, "Se pasa f, sin paréntesis."],
    ["Para leer el texto de un Entry se usa…", ["read()", "get()", "input()", "text()"], 1, "entrada.get()."],
    ["El gestor de geometría que coloca widgets en filas y columnas es…", ["pack", "grid", "place", "frame"], 1, "row y column."],
    ["Para asociar la tecla Intro a una función se usa…", ["command", "bind(\"<Return>\", f)", "mainloop", "config"], 1, "bind asocia eventos."],
    ["Separar la lógica de la interfaz permite…", ["no usar funciones", "reutilizar y probar la lógica por separado", "eliminar la interfaz", "no usar clases"], 1, "Patrón Modelo-Vista-Controlador."],
    ["En el ciclo de vida del software, la fase más larga y costosa suele ser…", ["el análisis", "el mantenimiento", "el despliegue", "el diseño"], 1, "Dura toda la vida del programa."],
    ["Las metodologías ágiles como Scrum trabajan…", ["en una sola fase larga", "en ciclos cortos con entregas frecuentes", "sin cliente", "sin pruebas"], 1, "Sprints."],
    ["Una prueba unitaria comprueba…", ["la aplicación completa", "una pieza pequeña de forma aislada", "solo la interfaz", "el hardware"], 1, "Una función o una clase."],
    ["Las pruebas de caja negra se diseñan…", ["mirando el código", "solo a partir de las entradas y salidas esperadas", "sin datos", "con el depurador"], 1, "Sin ver el interior."],
    ["En TDD, lo primero que se escribe es…", ["la documentación", "la prueba", "la interfaz", "el código final"], 1, "Rojo, verde, refactorizar."],
    ["En Git, un commit es…", ["una rama", "un registro de un conjunto de cambios con su mensaje", "un error", "un servidor"], 1, "Una foto del proyecto."],
  ],
  examen: [
    ["¿Qué widget usarías para que el usuario elija solo una opción entre «Mañana», «Tarde» y «Noche»?", ["Checkbutton", "Radiobutton", "Entry", "Canvas"], 1, "Los Radiobutton se excluyen entre sí."],
    ["¿Qué hace ventana.after(1000, f)?", ["cierra la ventana en 1 s", "ejecuta f dentro de 1 000 ms", "repite f 1 000 veces", "espera 1 000 clics"], 1, "Evento de tiempo."],
    ["¿Qué evento detecta un doble clic izquierdo?", ["<Button-1>", "<Double-Button-1>", "<Key>", "<Motion>"], 1, "Doble clic."],
    ["Para una nota válida entre 0 y 10, ¿cuáles son buenos valores límite para probar?", ["5 y 6", "−1, 0, 10 y 11", "2 y 8", "solo 10"], 1, "En los bordes de las clases de equivalencia."],
    ["Corriges un error y vuelves a ejecutar todas las pruebas antiguas. Son pruebas de…", ["aceptación", "regresión", "caja blanca", "usabilidad"], 1, "Comprueban que no se ha roto nada."],
    ["¿Qué aserción de unittest es adecuada para comparar 0.1 + 0.2 con 0.3?", ["assertEqual", "assertAlmostEqual", "assertTrue", "assertIn"], 1, "Errores de redondeo."],
    ["En el modelo en cascada, ¿qué problema aparece si los requisitos cambian al final?", ["ninguno", "es muy costoso volver atrás", "se borra el código", "no se puede probar"], 1, "Las fases son secuenciales."],
    ["Dos compañeros cambian la misma línea en ramas distintas y fusionan. Git…", ["elige uno al azar", "marca un conflicto para resolverlo a mano", "borra ambos cambios", "crea otro repositorio"], 1, "Conflicto de fusión."],
  ],
  feynman: ["Qué tipos de interfaces de usuario existen y por qué conviene separar la lógica de la interfaz", "Qué diferencia hay entre UI, UX, usabilidad y accesibilidad", "Cómo funcionan los eventos, los manejadores y el bucle de eventos", "Qué pasos sigue un programa con Tkinter y por qué command recibe la función sin paréntesis", "Cuáles son las fases del ciclo de vida del software y en qué se diferencian cascada y Scrum", "Qué niveles y tipos de pruebas existen y qué son los valores límite", "Cómo se escribe una prueba con unittest y qué es TDD", "Para qué sirven Git, los commits y las ramas"],
  mapa: ["INTERFACES Y PRUEBAS", [["Interfaz", "UI · UX · accesibilidad"], ["Eventos", "manejador · mainloop · Tkinter"], ["Ciclo de vida", "cascada · ágil · Scrum"], ["Calidad", "pruebas · TDD · Git"]]],
  tarjetas: [
    ["Interfaz de usuario", "Parte del programa con la que interactúan las personas: CLI, GUI, táctil, web, voz."],
    ["UI y UX", "Aspecto visual / experiencia completa de la persona usuaria."],
    ["Accesibilidad", "Que todas las personas puedan usar el producto: contraste, teclado, textos alternativos."],
    ["Evento", "Suceso que el programa detecta: clic, tecla, tiempo, cambio de tamaño."],
    ["Manejador (callback)", "Función que se ejecuta al ocurrir un evento."],
    ["Bucle de eventos", "Espera eventos y llama a sus manejadores: mainloop()."],
    ["Widgets de Tkinter", "Label, Button, Entry, Checkbutton, Radiobutton, Frame, Canvas."],
    ["Gestores de geometría", "pack (apilar), grid (filas y columnas), place (coordenadas)."],
    ["Ciclo de vida", "Requisitos, diseño, implementación, pruebas, despliegue y mantenimiento."],
    ["Niveles de prueba", "Unitarias, integración, sistema y aceptación."],
    ["unittest y TDD", "Clases TestCase con métodos test_…; primero la prueba, luego el código."],
    ["Git", "Repositorio, commit, rama, fusión; GitHub y pull request para colaborar."],
  ],
  ejemplos: [
    ["Crea una ventana con un contador: un número en grande y dos botones, «+» y «−», que lo cambian.", ["Una IntVar guarda el valor y se enlaza a la etiqueta.", "Cada botón llama a un manejador que suma o resta 1.", "Se colocan con pack en horizontal."], "import tkinter as tk\nv = tk.Tk()\nn = tk.IntVar(value=0)\ntk.Label(v, textvariable=n, font=(\"Arial\", 40)).pack()\ntk.Button(v, text=\"−\", command=lambda: n.set(n.get() - 1)).pack(side=\"left\")\ntk.Button(v, text=\"+\", command=lambda: n.set(n.get() + 1)).pack(side=\"right\")\nv.mainloop()"],
    ["Haz que al pulsar Intro en un campo de texto se añada su contenido a una Listbox y se vacíe el campo.", ["Se asocia el evento <Return> al campo con bind.", "El manejador recibe event y usa get, insert y delete.", "Se evita añadir textos vacíos."], "def añadir(event):\n    t = campo.get().strip()\n    if t:\n        lista.insert(tk.END, t)\n        campo.delete(0, tk.END)\n\ncampo.bind(\"<Return>\", añadir)"],
    ["Programa un reloj digital que se actualice cada segundo con after.", ["Se obtiene la hora con time.strftime.", "El manejador actualiza la etiqueta y se vuelve a programar a sí mismo.", "Nunca se usa time.sleep en una GUI, porque bloquea el bucle."], "import tkinter as tk, time\nv = tk.Tk()\nreloj = tk.Label(v, font=(\"Arial\", 32))\nreloj.pack()\ndef tic():\n    reloj.config(text=time.strftime(\"%H:%M:%S\"))\n    v.after(1000, tic)\ntic()\nv.mainloop()"],
    ["Diseña los casos de prueba de caja negra para una función que clasifica una nota (Suspenso, Aprobado, Notable, Sobresaliente) y lanza ValueError si no está entre 0 y 10.", ["Clases de equivalencia: cada calificación, y fuera de rango por debajo y por encima.", "Valores límite en cada frontera.", "Se anota la salida esperada."], "−0,1 → ValueError; 0 → Suspenso; 4,9 → Suspenso; 5 → Aprobado; 6,9 → Aprobado; 7 → Notable; 8,9 → Notable; 9 → Sobresaliente; 10 → Sobresaliente; 10,1 → ValueError."],
    ["Escribe con unittest las pruebas de una función es_palindromo(texto) que ignora mayúsculas y espacios.", ["Un caso positivo, uno negativo y casos límite (texto vacío, una letra).", "Se usan assertTrue y assertFalse.", "Cada prueba en un método test_."], "import unittest\nfrom textos import es_palindromo\n\nclass TestPalindromo(unittest.TestCase):\n    def test_si(self):\n        self.assertTrue(es_palindromo(\"Anita lava la tina\"))\n    def test_no(self):\n        self.assertFalse(es_palindromo(\"Python\"))\n    def test_limites(self):\n        self.assertTrue(es_palindromo(\"\"))\n        self.assertTrue(es_palindromo(\"a\"))\n\nunittest.main()"],
    ["Organiza con Git el desarrollo de una nueva pantalla de ajustes sin estropear la versión que ya usan los compañeros.", ["Crear una rama a partir de main.", "Hacer commits pequeños con mensajes descriptivos.", "Pasar las pruebas y fusionar."], "git switch -c ajustes\n# … programar …\ngit add ajustes.py\ngit commit -m \"Añade pantalla de ajustes con tema oscuro\"\npython -m unittest\ngit switch main\ngit merge ajustes"],
  ],
  errores: [
    "Escribir command=funcion() en lugar de command=funcion, con lo que se ejecuta al crear el botón.",
    "Olvidar llamar a mainloop() o ponerlo antes de crear los widgets.",
    "Mezclar pack y grid en el mismo contenedor, lo que puede bloquear la ventana.",
    "Usar time.sleep o bucles largos dentro de un manejador, que congelan la interfaz.",
    "Mezclar los cálculos con el código de la interfaz, lo que impide reutilizarlos y probarlos.",
    "Probar solo con datos «normales» y olvidar los valores límite y los datos erróneos.",
  ],
  ejercicios: {
    b: [
      ["Cita cuatro tipos de interfaces de usuario con un ejemplo de cada uno.", "Línea de órdenes (terminal de Linux), gráfica (Windows, LibreOffice), táctil (apps del móvil), de voz (asistentes como Siri o Alexa), web (Gmail en el navegador)."],
      ["Explica la diferencia entre UI y UX.", "UI es el diseño de la interfaz visual (colores, botones, tipografías). UX es la experiencia completa de la persona: si consigue su objetivo con facilidad y satisfacción, desde que descubre el producto hasta que termina."],
      ["Cita tres medidas de accesibilidad para una aplicación.", "Buen contraste de colores, textos alternativos en las imágenes, manejo completo con teclado, tamaño de letra ajustable, subtítulos en los vídeos, no transmitir información solo con el color."],
      ["Define evento y manejador.", "Evento: suceso que el programa puede detectar (clic, tecla, tiempo). Manejador: función asociada a un evento que se ejecuta cuando este ocurre."],
      ["Escribe el programa mínimo de Tkinter que muestre una ventana titulada «Hola».", "import tkinter as tk\nv = tk.Tk()\nv.title(\"Hola\")\nv.mainloop()"],
      ["Añade a la ventana anterior una etiqueta con tu nombre y un botón que la cierre (v.destroy).", "tk.Label(v, text=\"Eva\").pack()\ntk.Button(v, text=\"Salir\", command=v.destroy).pack()"],
      ["¿Qué gestor de geometría usarías para un formulario con etiquetas y campos alineados? ¿Por qué?", "grid, porque coloca los widgets en filas y columnas y así etiquetas y campos quedan alineados."],
      ["Indica qué widget usarías para: escribir un correo, aceptar las condiciones, elegir el curso entre cuatro opciones, dibujar una gráfica.", "Entry, Checkbutton, Radiobutton (o Combobox) y Canvas."],
      ["Ordena las fases del ciclo de vida: pruebas, análisis, mantenimiento, diseño, despliegue, implementación.", "Análisis, diseño, implementación, pruebas, despliegue y mantenimiento."],
      ["Clasifica como funcional o no funcional: a) se pueden exportar las notas a PDF; b) la página carga en menos de 2 s; c) el usuario puede cambiar su contraseña; d) es usable con lector de pantalla.", "a) Funcional. b) No funcional. c) Funcional. d) No funcional."],
      ["Explica qué es una prueba unitaria y una prueba de aceptación.", "Unitaria: comprueba una pieza pequeña (función o clase) aislada. Aceptación: el cliente o los usuarios comprueban que el programa completo hace lo que necesitan."],
      ["¿Para qué sirve Git? Explica qué es un commit.", "Para controlar las versiones de un proyecto: guardar su historia, volver atrás y colaborar. Un commit es un registro de un conjunto de cambios con un mensaje, autor y fecha."],
    ],
    m: [
      ["Evalúa con tres heurísticas de Nielsen una aplicación que conozcas (por ejemplo, la web de tu instituto o una app de transporte) y propón una mejora.", "Respuesta abierta. Debe identificar, por ejemplo, si informa del estado (cargando, enviado), si es coherente (botones iguales en todas las pantallas), si los errores son comprensibles y ofrecen solución, y proponer una mejora concreta (mensaje de confirmación, opción de deshacer…)."],
      ["Explica qué ocurre, paso a paso, desde que el usuario pulsa un botón hasta que cambia el texto de una etiqueta en Tkinter.", "El sistema operativo detecta el clic y lo comunica a Tkinter; el bucle de eventos lo saca de la cola, identifica el widget y llama a la función asociada con command; el manejador lee los datos, calcula y llama a config sobre la etiqueta; el bucle redibuja la ventana y vuelve a esperar."],
      ["Programa un conversor de euros a dólares con un Entry, un Button y un Label, que muestre un error si el dato no es numérico.", "import tkinter as tk\nfrom tkinter import messagebox\nTASA = 1.08\ndef convertir():\n    try:\n        e = float(entrada.get().replace(\",\", \".\"))\n        res.config(text=f\"{e * TASA:.2f} $\")\n    except ValueError:\n        messagebox.showerror(\"Error\", \"Escribe un número\")\nv = tk.Tk()\nentrada = tk.Entry(v); entrada.pack()\ntk.Button(v, text=\"Convertir\", command=convertir).pack()\nres = tk.Label(v); res.pack()\nv.mainloop()"],
      ["Crea con grid un formulario de inicio de sesión (usuario, contraseña oculta y botón) que muestre «Bienvenido» si los datos son «admin» y «1234».", "def entrar():\n    if u.get() == \"admin\" and c.get() == \"1234\":\n        messagebox.showinfo(\"OK\", \"Bienvenido\")\n    else:\n        messagebox.showerror(\"Error\", \"Datos incorrectos\")\ntk.Label(v, text=\"Usuario\").grid(row=0, column=0)\nu = tk.Entry(v); u.grid(row=0, column=1)\ntk.Label(v, text=\"Contraseña\").grid(row=1, column=0)\nc = tk.Entry(v, show=\"*\"); c.grid(row=1, column=1)\ntk.Button(v, text=\"Entrar\", command=entrar).grid(row=2, column=0, columnspan=2)\n(En una aplicación real nunca se escriben las contraseñas en el código.)"],
      ["Escribe un programa con Canvas que dibuje un círculo donde el usuario haga clic.", "def clic(e):\n    lienzo.create_oval(e.x - 10, e.y - 10, e.x + 10, e.y + 10, fill=\"red\")\nlienzo = tk.Canvas(v, width=400, height=300, bg=\"white\")\nlienzo.pack()\nlienzo.bind(\"<Button-1>\", clic)"],
      ["Usa un Checkbutton con BooleanVar para activar o desactivar un botón «Enviar» (state=\"normal\" / \"disabled\").", "acepto = tk.BooleanVar()\ndef cambiar():\n    enviar.config(state=\"normal\" if acepto.get() else \"disabled\")\ntk.Checkbutton(v, text=\"Acepto las condiciones\", variable=acepto, command=cambiar).pack()\nenviar = tk.Button(v, text=\"Enviar\", state=\"disabled\")\nenviar.pack()"],
      ["¿Por qué no debe usarse time.sleep(5) dentro de un manejador? ¿Qué se usa en su lugar?", "Porque detiene el bucle de eventos durante 5 s: la ventana no responde ni se redibuja. Se usa ventana.after(5000, funcion), que programa la función sin bloquear."],
      ["Compara el modelo en cascada con Scrum en tres aspectos.", "Planificación: cascada planifica todo al principio; Scrum planifica por sprints. Entregas: cascada entrega al final; Scrum entrega partes funcionales cada pocas semanas. Cambios: en cascada son caros; Scrum los incorpora en el siguiente sprint."],
      ["Para una función que calcula el precio de una entrada de cine (niños < 12 años, 5 €; adultos, 8 €; mayores de 65, 4 €), diseña las clases de equivalencia y los valores límite.", "Clases: edad negativa (error), 0-11 (5 €), 12-64 (8 €), 65 o más (4 €), dato no numérico (error). Límites: −1, 0, 11, 12, 64, 65."],
      ["Escribe con unittest dos pruebas para la función precio_entrada anterior.", "class TestEntrada(unittest.TestCase):\n    def test_limites(self):\n        self.assertEqual(precio_entrada(11), 5)\n        self.assertEqual(precio_entrada(12), 8)\n        self.assertEqual(precio_entrada(65), 4)\n    def test_error(self):\n        with self.assertRaises(ValueError):\n            precio_entrada(-1)"],
      ["Explica la diferencia entre pruebas de caja negra y de caja blanca con un ejemplo.", "Caja negra: se diseñan con la especificación (entradas y salidas), sin ver el código; por ejemplo, probar el precio de la entrada con edades límite. Caja blanca: se miran las ramas del código para que cada if y bucle se ejecute al menos una vez."],
      ["Describe los pasos para colaborar en un proyecto de GitHub mediante una pull request.", "Clonar el repositorio (o hacer un fork), crear una rama, programar y hacer commits, subir la rama, abrir una pull request explicando el cambio, atender los comentarios de la revisión y, cuando se aprueba, fusionarla en main."],
      ["¿Qué significa que un programa tenga licencia MIT? ¿Y GPL?", "MIT: se puede usar, modificar y distribuir libremente, incluso en software cerrado, manteniendo el aviso de copyright. GPL: también es libre, pero las obras derivadas que se distribuyan deben publicarse con la misma licencia GPL (copyleft)."],
      ["Reescribe el conversor de euros como una clase AppConversor con la lógica separada en una función convertir_euros(e, tasa).", "def convertir_euros(e, tasa=1.08):\n    return round(e * tasa, 2)\n\nclass AppConversor:\n    def __init__(self, raiz):\n        self.e = tk.StringVar()\n        tk.Entry(raiz, textvariable=self.e).pack()\n        tk.Button(raiz, text=\"Convertir\", command=self.convertir).pack()\n        self.res = tk.Label(raiz); self.res.pack()\n    def convertir(self):\n        try:\n            self.res.config(text=f\"{convertir_euros(float(self.e.get()))} $\")\n        except ValueError:\n            self.res.config(text=\"Dato no válido\")"],
    ],
    a: [
      ["Programa una lista de tareas con Tkinter: campo para escribir, botón Añadir, Listbox y botón Borrar la seleccionada. Guarda las tareas en un fichero JSON al cerrar.", "import tkinter as tk, json\nclass Tareas:\n    def __init__(self, r):\n        self.r = r\n        self.campo = tk.Entry(r); self.campo.pack(fill=\"x\")\n        tk.Button(r, text=\"Añadir\", command=self.añadir).pack()\n        self.lista = tk.Listbox(r); self.lista.pack(fill=\"both\", expand=True)\n        tk.Button(r, text=\"Borrar\", command=self.borrar).pack()\n        try:\n            for t in json.load(open(\"tareas.json\", encoding=\"utf-8\")):\n                self.lista.insert(tk.END, t)\n        except FileNotFoundError:\n            pass\n        r.protocol(\"WM_DELETE_WINDOW\", self.cerrar)\n    def añadir(self):\n        if self.campo.get().strip():\n            self.lista.insert(tk.END, self.campo.get().strip()); self.campo.delete(0, tk.END)\n    def borrar(self):\n        for i in reversed(self.lista.curselection()):\n            self.lista.delete(i)\n    def cerrar(self):\n        json.dump(list(self.lista.get(0, tk.END)), open(\"tareas.json\", \"w\", encoding=\"utf-8\"), ensure_ascii=False)\n        self.r.destroy()\nr = tk.Tk(); Tareas(r); r.mainloop()"],
      ["Programa una animación en Canvas: una pelota que rebota en los bordes, usando after cada 20 ms.", "x, y, dx, dy = 50, 50, 4, 3\nbola = lienzo.create_oval(x, y, x + 20, y + 20, fill=\"orange\")\ndef mover():\n    global dx, dy\n    lienzo.move(bola, dx, dy)\n    x1, y1, x2, y2 = lienzo.coords(bola)\n    if x1 <= 0 or x2 >= 400: dx = -dx\n    if y1 <= 0 or y2 >= 300: dy = -dy\n    v.after(20, mover)\nmover()"],
      ["Diseña en papel (wireframe) y describe la interfaz de una app para reservar las pistas deportivas del instituto, justificando tres decisiones de usabilidad y dos de accesibilidad.", "Respuesta abierta. Ejemplo: pantalla de calendario con huecos libres en verde y ocupados en gris con texto «ocupado» (no solo color), botón de reserva grande y confirmación con resumen y opción de cancelar (control del usuario), mensaje de estado tras reservar (visibilidad), mismos botones en todas las pantallas (coherencia), contraste suficiente y navegación con teclado."],
      ["Aplica TDD para crear una función contar_vocales: escribe primero tres pruebas, después el código mínimo y explica la refactorización.", "Pruebas: contar_vocales(\"casa\") == 2; contar_vocales(\"\") == 0; contar_vocales(\"ÁRBOL\") == 2. Primera versión: def contar_vocales(t): return sum(1 for c in t.lower() if c in \"aeiouáéíóúü\"). Refactorización: extraer las vocales a una constante VOCALES y añadir docstring, volviendo a ejecutar las pruebas (siguen en verde)."],
      ["Explica qué es la integración continua y por qué reduce los errores en equipos grandes.", "Un servidor descarga automáticamente cada cambio que se sube al repositorio, compila el programa y ejecuta todas las pruebas; si alguna falla, avisa y el cambio no se fusiona. Así los errores se detectan minutos después de introducirse, cuando es fácil saber qué cambio los causó, y la rama principal siempre funciona."],
      ["Una función tiene un if con tres ramas dentro de un for. Diseña pruebas de caja blanca que recorran todas las ramas y el caso en que el bucle no se ejecuta.", "Se necesita: una entrada vacía (el for no se ejecuta), y datos que hagan entrar al menos una vez en cada rama del if (por ejemplo, un elemento que cumpla la primera condición, otro la segunda y otro ninguna). Una sola lista con los tres tipos de elementos más la lista vacía cubren todas las ramas."],
      ["Investiga el patrón Modelo-Vista-Controlador y aplícalo al diseño de una calculadora gráfica: qué clases habría y qué haría cada una.", "Modelo: clase Calculadora con la operación en curso y métodos (pulsar_dígito, operar, resultado), sin saber nada de ventanas. Vista: clase con la ventana, la pantalla (Label) y los botones. Controlador: conecta los clics de los botones con los métodos del modelo y pide a la vista que muestre el nuevo valor. El modelo se puede probar con unittest sin abrir ninguna ventana."],
      ["Simula un conflicto en Git: explica cómo aparece, qué marcas añade Git en el fichero y cómo se resuelve.", "Dos ramas modifican la misma línea. Al fusionar, Git marca el fichero con <<<<<<< HEAD (versión actual), ======= y >>>>>>> rama (versión entrante). Hay que editar el fichero, decidir el contenido correcto (una versión, la otra o una combinación), borrar las marcas, hacer git add y git commit para terminar la fusión."],
      ["Calcula la reducción de coste: si corregir un error cuesta 1 unidad en el diseño, 10 en las pruebas y 100 en producción, ¿cuánto se ahorra un equipo que detecta en el diseño 20 de los 30 errores que antes descubrían los usuarios?", "Antes: 30 × 100 = 3 000 unidades. Después: 20 × 1 + 10 × 100 = 1 020 unidades. Ahorro: 1 980 unidades, un 66 %. Muestra por qué es rentable invertir en diseño, revisiones y pruebas tempranas."],
      ["Debate: ¿debería ser obligatorio por ley que todas las apps y webs sean accesibles? Argumenta a favor y en contra.", "A favor: garantiza la igualdad de derechos de las personas con discapacidad (más del 15 % de la población), mejora la experiencia de todos (personas mayores, uso con una mano, poca luz) y la UE ya lo exige en muchos servicios. En contra o con matices: supone costes para pequeñas empresas y requiere formación; se puede plantear una aplicación progresiva y con ayudas. Conclusión razonada."],
    ],
  },
  glosario: [
    ["Interfaz de usuario", "Medio por el que las personas interactúan con un programa."],
    ["GUI", "Interfaz gráfica con ventanas, botones, menús e iconos."],
    ["Usabilidad", "Facilidad con que las personas usan un producto de forma eficaz y satisfactoria."],
    ["Experiencia de usuario (UX)", "Conjunto de percepciones y vivencias de una persona al usar un producto."],
    ["Accesibilidad", "Posibilidad de que todas las personas, también con discapacidad, usen un producto."],
    ["Evento", "Suceso que un programa detecta, como un clic o una tecla."],
    ["Manejador (callback)", "Función que se ejecuta cuando ocurre un evento."],
    ["Bucle de eventos", "Bucle que espera eventos y llama a sus manejadores."],
    ["Widget", "Elemento de una interfaz gráfica: botón, etiqueta, campo de texto…"],
    ["Gestor de geometría", "Mecanismo que coloca los widgets en la ventana: pack, grid o place."],
    ["Prototipo", "Modelo previo de una interfaz para probarla antes de programarla."],
    ["Ciclo de vida del software", "Fases de un programa desde su análisis hasta su retirada."],
    ["Metodología ágil", "Forma de desarrollar en ciclos cortos con entregas frecuentes."],
    ["Prueba unitaria", "Prueba de una pieza pequeña del programa de forma aislada."],
    ["Valor límite", "Valor en la frontera entre clases de datos, donde se concentran los errores."],
    ["TDD", "Desarrollo guiado por pruebas: primero la prueba y después el código."],
    ["Git", "Sistema de control de versiones distribuido."],
  ],
  situacion: {
    titulo: "Una app útil para mi instituto",
    reto: "En equipos de tres o cuatro, siguiendo una metodología ágil, desarrollad una aplicación gráfica en Python con Tkinter que resuelva un problema real del centro (préstamo de portátiles, reserva de aulas, encuesta del comedor…), con pruebas automáticas y control de versiones.",
    pasos: [
      "Entrevistad a los futuros usuarios y escribid los requisitos funcionales y no funcionales.",
      "Dibujad los wireframes, probadlos con dos usuarios y mejoradlos.",
      "Organizad el trabajo en dos sprints de una semana con un tablero de tareas y un repositorio Git compartido.",
      "Programad la lógica separada de la interfaz y escribid pruebas unitarias con unittest.",
      "Construid la interfaz con Tkinter, gestionando los errores con mensajes claros y cuidando la accesibilidad.",
      "Presentad la app a los usuarios, recoged su opinión y redactad un README con instrucciones.",
    ],
    producto: "Aplicación gráfica en un repositorio Git con historial de commits, pruebas automáticas, wireframes y README.",
    evaluacion: [
      "La aplicación responde a una necesidad real y cumple los requisitos acordados.",
      "La interfaz es usable, coherente y accesible, y gestiona los eventos y los errores correctamente.",
      "La lógica está separada de la interfaz y cubierta por pruebas unitarias que pasan.",
      "El equipo usa Git y la metodología ágil de forma ordenada y colaborativa.",
    ],
  },
  familias: [
    "Pedidle que os enseñe una aplicación que haya programado y probadla como usuarios, diciéndole qué os cuesta entender.",
    "Fijaos juntos en qué apps os resultan fáciles o difíciles de usar y por qué.",
    "Comentad la importancia de que las apps sean accesibles para personas mayores o con discapacidad.",
    "Interesaos por cómo comprueba que sus programas funcionan antes de darlos por terminados.",
  ],
  saberes: "Interfaces de usuario y desarrollo de software: tipos de interfaces, usabilidad, experiencia de usuario, accesibilidad y prototipado, programación orientada a eventos, interfaces gráficas con Tkinter (widgets, gestores de geometría, eventos, variables de control y diálogos), separación de lógica e interfaz, ciclo de vida del software y metodologías ágiles, niveles y técnicas de prueba, pruebas unitarias y TDD, control de versiones con Git y licencias (Tecnologías de la Información y la Comunicación II, optativa de 2º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Prueba de usabilidad en clase: un alumno usa la app de otro equipo en voz alta mientras los autores observan sin ayudar.",
    "Prototipado en papel: recortar los widgets y simular la app moviendo papeles ante un «usuario».",
    "Torneo de pruebas: cada equipo intenta encontrar fallos en la función de otro diseñando casos límite.",
    "Usar un repositorio de clase en una plataforma Git para que cada equipo practique ramas y pull requests.",
  ],
  fuentes: [
    { t: "Documentación de tkinter (Python, en español)", url: "https://docs.python.org/es/3/library/tkinter.html" },
    { t: "Documentación de unittest (Python, en español)", url: "https://docs.python.org/es/3/library/unittest.html" },
    { t: "Pro Git: libro oficial de Git en español", url: "https://git-scm.com/book/es/v2" },
  ],
}));
