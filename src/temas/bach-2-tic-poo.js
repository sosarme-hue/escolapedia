// Tecnologías de la Información y la Comunicación II, 2º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
// Programación orientada a objetos en Python: clases, objetos, encapsulamiento, herencia, polimorfismo y diseño.
const B = require("./_bach2-tic");

// Diagrama de clase UML.
const uml = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de clase UML de la clase CuentaBancaria: en la parte superior el nombre, en la central los atributos titular y saldo (privado) y en la inferior los métodos ingresar, retirar y consultar">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <rect x="64" y="14" width="132" height="152" rx="6" fill="var(--card)" stroke="var(--pen)" stroke-width="2.4"/>
  <rect x="64" y="14" width="132" height="30" rx="6" fill="var(--pen)"/>${B.tx(130, 34, "CuentaBancaria", { fs: 13, maxW: 124, bold: true, color: "#fff" })}
  <path d="M64 92 H 196" stroke="var(--pen)" stroke-width="2"/>
  ${[["+ titular: str", 62], ["− saldo: float", 80]].map(([t, y]) => B.tx(72, y, t, { fs: 11, maxW: 120, anchor: "start", color: t[0] === "−" ? "var(--red)" : "var(--ink)" })).join("")}
  ${[["+ __init__(titular)", 110], ["+ ingresar(cantidad)", 128], ["+ retirar(cantidad)", 146], ["+ consultar(): float", 162]].map(([t, y]) => B.tx(72, y, t, { fs: 10.5, maxW: 120, anchor: "start" })).join("")}
  ${B.tx(228, 70, "atributos", { fs: 9.5, maxW: 56, bold: true, color: "var(--muted)" })}${B.tx(228, 134, "métodos", { fs: 9.5, maxW: 56, bold: true, color: "var(--muted)" })}
  ${B.tx(33, 80, "− privado", { fs: 9, maxW: 56, bold: true, color: "var(--red)" })}${B.tx(33, 62, "+ público", { fs: 9, maxW: 56, bold: true, color: "var(--muted)" })}
</svg>`;

// Clase y objetos (molde y galletas).
const molde = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Una clase Perro es como un molde; a partir de ella se crean varios objetos o instancias, cada uno con sus propios valores de nombre y edad">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <defs><marker id="mo1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
  <rect x="80" y="12" width="100" height="50" rx="8" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.4" stroke-dasharray="6 4"/>
  ${B.tx(130, 32, "clase Perro", { fs: 12.5, maxW: 92, bold: true, color: "var(--pen)" })}${B.tx(130, 50, "nombre · edad · ladrar()", { fs: 9.5, maxW: 92 })}
  ${[[44, "Toby", "3", "var(--red)"], [130, "Luna", "7", "var(--leaf)"], [216, "Coco", "1", "var(--sun)"]].map(([x, n, e, c]) => `
  <path d="M130 64 L ${x} 96" stroke="var(--muted)" stroke-width="1.8" marker-end="url(#mo1)"/>
  <rect x="${x - 38}" y="100" width="76" height="52" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.4"/>
  ${B.tx(x, 120, n, { fs: 12, maxW: 68, bold: true, color: c })}${B.tx(x, 138, "edad = " + e, { fs: 10, maxW: 68 })}`).join("")}
  ${B.tx(130, 172, "una clase, muchos objetos (instancias)", { fs: 10.5, maxW: 236, bold: true })}
</svg>`;

// Jerarquía de herencia.
const herencia = () => {
  const c = (x, y, t, s, col) => `<rect x="${x - 46}" y="${y}" width="92" height="38" rx="7" fill="var(--card)" stroke="${col}" stroke-width="2.2"/>${B.tx(x, y + 16, t, { fs: 11.5, maxW: 84, bold: true, color: col })}${B.tx(x, y + 31, s, { fs: 9, maxW: 84 })}`;
  const fl = (x1, y1, x2, y2) => `<path d="M${x1} ${y1} L ${x2} ${y2}" stroke="var(--muted)" stroke-width="1.8" marker-end="url(#he1)"/>`;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Jerarquía de herencia: Vehículo es la clase base; Coche y Bicicleta heredan de ella; CocheEléctrico hereda de Coche. Las flechas apuntan a la clase padre">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <defs><marker id="he1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--card)" stroke="var(--muted)" stroke-width="1.2"/></marker></defs>
  ${c(130, 10, "Vehiculo", "ruedas · mover()", "var(--pen)")}
  ${c(70, 72, "Coche", "repostar()", "var(--red)")}${c(196, 72, "Bicicleta", "pedalear()", "var(--leaf)")}
  ${c(70, 134, "CocheElectrico", "cargar()", "var(--sun)")}
  ${fl(70, 72, 118, 50)}${fl(196, 72, 144, 50)}${fl(70, 134, 70, 112)}
  ${B.tx(196, 146, "las flechas apuntan", { fs: 10, maxW: 110 })}${B.tx(196, 160, "a la clase padre", { fs: 10, maxW: 110 })}
</svg>`;
};

module.exports = B.tema(B.textos({
  titulo: "Programación orientada a objetos",
  minutos: 120,
  objetivos: [
    "Distinguir los principales paradigmas de programación y las ideas de la programación orientada a objetos",
    "Definir clases con atributos y métodos en Python y crear objetos a partir de ellas",
    "Aplicar el encapsulamiento con atributos privados y propiedades",
    "Representar clases y sus relaciones con diagramas de clases UML",
    "Reutilizar código mediante herencia, sobrescritura de métodos y polimorfismo",
    "Diseñar programas combinando clases por composición y aplicando buenos principios de diseño",
  ],
  claves: ["paradigma", "clase", "objeto", "instancia", "atributo", "método", "constructor", "self", "encapsulamiento", "propiedad", "UML", "herencia", "super", "polimorfismo", "composición", "clase abstracta"],
  pregunta: {
    texto: "En un videojuego hay cientos de enemigos, cada uno con su vida, su posición y su forma de atacar. ¿Escribe el programador el código de cada enemigo por separado?",
    respuesta: "No. Escribe una <mark>clase</mark> Enemigo, una especie de plantilla que dice qué datos tiene un enemigo (vida, posición) y qué sabe hacer (moverse, atacar). A partir de ella se crean cientos de <mark>objetos</mark>, cada uno con sus propios valores. Si quiere un enemigo especial, crea otra clase que <b>hereda</b> todo lo de Enemigo y solo añade o cambia lo distinto. Así trabaja la <b>programación orientada a objetos</b>, el paradigma con el que se construye la mayor parte del software actual.",
  },
  lectura: {
    titulo: "Del simulador de barcos a tu móvil",
    html: `<p>En los años sesenta, los noruegos Ole-Johan Dahl y Kristen Nygaard tenían que simular el tráfico de barcos en un puerto: cada barco tenía su tamaño, su carga y su ruta, y todos interactuaban entre sí. Programarlo como una lista de instrucciones era un caos. Se les ocurrió agrupar en una misma unidad los datos de cada barco y las acciones que podía realizar. Así nació, en 1967, el lenguaje <b>Simula</b>, el primero con <b>clases</b> y <b>objetos</b>.</p>
    <p>Unos años después, Alan Kay y su equipo en el centro de investigación de Xerox desarrollaron Smalltalk y popularizaron la expresión «programación orientada a objetos». Kay imaginaba los programas como un conjunto de pequeños ordenadores que se envían mensajes. En ese mismo centro nacieron las ventanas, los iconos y el ratón, que también se programaron con objetos.</p>
    <p>Hoy casi todos los lenguajes populares, como Java, C++, C#, JavaScript, Kotlin, Swift o Python, son orientados a objetos. Las aplicaciones de tu móvil, los videojuegos y las webs están llenos de objetos: botones, usuarios, mensajes, personajes. En este tema aprenderás a pensar y programar así.</p>`,
  },
  secciones: [4, 4, 3],
  bloques: [
    {
      h: "Los paradigmas de programación",
      html: `<p>Un <mark>paradigma de programación</mark> es una forma de entender y organizar un programa. Los lenguajes se basan en uno o varios paradigmas, y conocerlos ayuda a elegir el enfoque adecuado para cada problema.</p>
      <ul><li>La <b>programación imperativa</b> describe paso a paso las órdenes que modifican el estado del programa (las variables). La <b>programación estructurada</b> la ordena con tres estructuras: secuencia, selección y repetición, sin saltos desordenados.</li>
      <li>La <b>programación modular</b> o procedimental divide el programa en funciones, como viste al principio del curso.</li>
      <li>La <b>programación funcional</b> construye los programas combinando funciones puras, sin modificar variables; la usan lenguajes como Haskell y, en parte, Python con <code>map</code>, <code>filter</code> y las lambdas.</li>
      <li>La <b>programación declarativa</b> describe <i>qué</i> se quiere obtener, no cómo: es el caso de SQL, que estudiarás en el tema de bases de datos, o de HTML.</li>
      <li>La <mark>programación orientada a objetos</mark> (POO) organiza el programa como un conjunto de <b>objetos</b> que combinan datos y comportamiento y que colaboran enviándose mensajes (llamándose a sus métodos).</li></ul>
      <p>En la programación modular, los datos y las funciones que los manejan están separados: una lista de alumnos por un lado y funciones como <code>calcular_media(alumno)</code> por otro. En la POO se juntan en una misma unidad: cada alumno es un objeto que guarda sus notas y sabe calcular su media, <code>alumno.media()</code>. Esto refleja mejor cómo pensamos el mundo real, en términos de cosas que tienen propiedades y hacen acciones. Python es un lenguaje <b>multiparadigma</b>: permite programar de forma estructurada, funcional u orientada a objetos, e incluso combinarlas.</p>`,
      svg: B.cajas("Paradigmas de programación", [["Estructurado", "secuencia, selección|y repetición"], ["Funcional", "funciones puras"], ["Declarativo", "qué, no cómo|(SQL, HTML)"], ["Orientado a objetos", "datos + acciones|en objetos"]], { t: "Formas de programar" }),
    },
    {
      h: "Clases y objetos",
      html: `<p>Las dos ideas básicas de la POO son la clase y el objeto. Una <mark>clase</mark> es una plantilla o molde que define cómo serán los objetos de un tipo: qué datos tendrán (sus <b>atributos</b>) y qué podrán hacer (sus <b>métodos</b>). Un <mark>objeto</mark> o <b>instancia</b> es un ejemplar concreto creado a partir de una clase, con sus propios valores. La clase <code>Perro</code> describe que todos los perros tienen nombre y edad y saben ladrar; Toby, de 3 años, y Luna, de 7, son dos objetos de esa clase.</p>
      ${B.code(`class Perro:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def ladrar(self):
        return self.nombre + " dice: ¡Guau!"

toby = Perro("Toby", 3)      # se crea un objeto
luna = Perro("Luna", 7)
print(toby.ladrar())         # Toby dice: ¡Guau!
print(luna.edad)             # 7`)}
      <p>Por convenio, los nombres de las clases se escriben con mayúscula inicial en cada palabra (<code>CuentaBancaria</code>). Para crear un objeto se «llama» a la clase como si fuera una función, pasándole los datos iniciales. Se accede a los atributos y métodos de un objeto con el <b>operador punto</b>: <code>objeto.atributo</code>, <code>objeto.metodo()</code>.</p>
      <p>En realidad, en Python todo es un objeto: los números, las cadenas y las listas también son instancias de clases (<code>int</code>, <code>str</code>, <code>list</code>), y por eso escribes <code>texto.upper()</code> o <code>lista.append(x)</code>. Cada objeto tiene una <b>identidad</b> (es único, aunque otro tenga los mismos valores), un <b>estado</b> (los valores de sus atributos en cada momento) y un <b>comportamiento</b> (lo que hacen sus métodos).</p>`,
      svg: molde(),
      video: B.V("poo-clases", "Tutorial de Python: clases y objetos"),
    },
    {
      h: "El constructor, self y los métodos",
      html: `<p>El método especial <code>__init__</code> es el <mark>constructor</mark>: se ejecuta automáticamente cada vez que se crea un objeto y sirve para darle sus valores iniciales. Sus parámetros, salvo el primero, son los datos que se pasan al crear el objeto. Dentro de él, las asignaciones <code>self.nombre = nombre</code> crean los <b>atributos de instancia</b>, que tendrá cada objeto.</p>
      <p>El primer parámetro de todos los métodos es <code>self</code>, que representa <b>al propio objeto</b> sobre el que se llama el método. Cuando escribes <code>toby.ladrar()</code>, Python ejecuta en realidad <code>Perro.ladrar(toby)</code>: <code>self</code> es <code>toby</code>. Gracias a <code>self</code>, un método puede leer y modificar los atributos de su objeto y llamar a otros métodos del mismo objeto (<code>self.otro_metodo()</code>). Es un error muy frecuente olvidar <code>self</code> en la definición del método o al usar un atributo.</p>
      ${B.code(`class Cuenta:
    def __init__(self, titular, saldo=0):
        self.titular = titular
        self.saldo = saldo

    def ingresar(self, cantidad):
        if cantidad <= 0:
            raise ValueError("Cantidad no válida")
        self.saldo += cantidad

    def retirar(self, cantidad):
        if cantidad > self.saldo:
            raise ValueError("Saldo insuficiente")
        self.saldo -= cantidad

c = Cuenta("Eva", 100)
c.ingresar(50); c.retirar(30)
print(c.saldo)        # 120`)}
      <p>Los métodos son, en definitiva, funciones que pertenecen a una clase. Pueden recibir parámetros, devolver valores y lanzar excepciones como cualquier función. Unos <b>consultan</b> el estado del objeto (devuelven información sin cambiarla) y otros lo <b>modifican</b>. Observa que el objeto controla sus propios datos: es el método <code>retirar</code> quien decide si la operación es válida, y no el programa que lo usa.</p>`,
      svg: B.flujo("Qué ocurre al crear un objeto", ["c = Cuenta(\"Eva\", 100)", "Python crea un objeto vacío", "Llama a __init__(self, \"Eva\", 100)", "self.titular y self.saldo quedan guardados", "c apunta al objeto ya inicializado"], { t: "El constructor" }),
    },
    {
      h: "Atributos de clase y métodos especiales",
      html: `<p>Además de los atributos de instancia, una clase puede tener <b>atributos de clase</b>, definidos directamente en el cuerpo de la clase y compartidos por todos sus objetos. Son útiles para constantes o contadores comunes: por ejemplo, el tipo de interés de todas las cuentas o el número de objetos creados.</p>
      ${B.code(`class Alumno:
    total = 0                      # atributo de clase

    def __init__(self, nombre, notas):
        self.nombre = nombre       # atributos de instancia
        self.notas = notas
        Alumno.total += 1

    def media(self):
        return sum(self.notas) / len(self.notas)

    def __str__(self):
        return f"{self.nombre} ({self.media():.1f})"

    def __lt__(self, otro):
        return self.media() < otro.media()`)}
      <p>Python reconoce una serie de <mark>métodos especiales</mark> o «mágicos», con dos guiones bajos delante y detrás, que permiten que los objetos se comporten como los tipos predefinidos:</p>
      <ul><li><code>__str__</code> devuelve el texto que muestra <code>print(objeto)</code>; sin él, se ve algo poco útil como <code>&lt;Alumno object at 0x7f…&gt;</code>.</li>
      <li><code>__eq__</code> y <code>__lt__</code> definen qué significa que dos objetos sean iguales (<code>==</code>) o que uno sea menor que otro (<code>&lt;</code>); con <code>__lt__</code>, una lista de alumnos se puede ordenar con <code>sorted</code>.</li>
      <li><code>__len__</code> permite usar <code>len(objeto)</code> y <code>__add__</code>, el operador <code>+</code>.</li></ul>
      <p>Esta posibilidad de redefinir el significado de los operadores se llama <b>sobrecarga de operadores</b>. Así, una clase <code>Fraccion</code> o <code>Vector</code> puede sumarse con <code>+</code> igual que los números.</p>`,
      svg: B.rejilla("Métodos especiales de Python", ["Método", "Se usa con"], [["__init__", "Clase(…)"], ["__str__", "print(obj)"], ["__eq__", "a == b"], ["__lt__", "a &lt; b, sorted"], ["__add__", "a + b"]], { t: "Métodos «mágicos»" }),
    },
    {
      h: "El encapsulamiento",
      html: `<p>El <mark>encapsulamiento</mark> consiste en ocultar los detalles internos de un objeto y permitir que el resto del programa solo lo use a través de sus métodos públicos, su <b>interfaz</b>. Es como un cajero automático: puedes sacar dinero pulsando botones, pero no puedes abrirlo y tocar los billetes. Así se protege la integridad de los datos (nadie puede poner un saldo negativo saltándose las comprobaciones) y se puede cambiar la implementación interna sin afectar al código que usa la clase.</p>
      <p>Lenguajes como Java tienen palabras clave para indicar si un atributo es público o privado. Python se basa en convenciones: un nombre que empieza por un guion bajo (<code>_saldo</code>) indica que es de uso interno y no debería tocarse desde fuera; con dos guiones bajos (<code>__saldo</code>), Python cambia el nombre internamente para dificultar el acceso. Para leer o modificar estos atributos de forma controlada se usan métodos de acceso (<i>getters</i> y <i>setters</i>) o, de forma más elegante, <b>propiedades</b>:</p>
      ${B.code(`class Termometro:
    def __init__(self, celsius):
        self.celsius = celsius        # usa el setter

    @property
    def celsius(self):                # getter
        return self._celsius

    @celsius.setter
    def celsius(self, valor):         # setter con validación
        if valor < -273.15:
            raise ValueError("Bajo el cero absoluto")
        self._celsius = valor

    @property
    def fahrenheit(self):             # atributo calculado
        return self._celsius * 9 / 5 + 32

t = Termometro(25)
t.celsius = 30           # pasa por la validación
print(t.fahrenheit)      # 86.0`)}
      <p>Con <code>@property</code>, desde fuera se usa <code>t.celsius</code> como si fuera un atributo normal, pero por dentro se ejecutan métodos que validan o calculan el valor. Una regla útil: los atributos que deben cumplir alguna condición nunca deberían poder modificarse directamente.</p>`,
      svg: B.capas("Encapsulamiento: el exterior solo usa la interfaz pública", [["Programa", "usa el objeto"], ["Interfaz pública", "métodos y propiedades"], ["Validaciones", "comprueban los datos"], ["Datos internos", "_celsius, _saldo"]], { t: "Por capas" }),
    },
    {
      h: "La abstracción y los diagramas de clases",
      html: `<p>La <mark>abstracción</mark> consiste en quedarse con las características esenciales de un objeto del mundo real para el problema que se quiere resolver, e ignorar las demás. Un alumno real tiene altura, color de pelo y comida favorita, pero para la aplicación de notas del instituto solo importan su nombre, su curso y sus calificaciones. Diseñar bien las clases es, sobre todo, un ejercicio de abstracción.</p>
      <p>Para diseñar y comunicar la estructura de un programa orientado a objetos se usa el <b>UML</b> (<i>Unified Modeling Language</i>), un lenguaje gráfico estándar. Su diagrama más usado es el <mark>diagrama de clases</mark>. Cada clase se dibuja como un rectángulo con tres partes: el <b>nombre</b> arriba, los <b>atributos</b> en el centro y los <b>métodos</b> abajo. Delante de cada miembro se indica su visibilidad: <code>+</code> público y <code>−</code> privado. También se pueden indicar los tipos: <code>saldo: float</code>, <code>consultar(): float</code>.</p>
      <p>Las clases se unen con líneas que representan sus <b>relaciones</b>:</p>
      <ul><li><b>Asociación</b>: una línea simple; un alumno está matriculado en varias asignaturas. Se puede indicar la <b>multiplicidad</b> en cada extremo (1, 0..1, *).</li>
      <li><b>Agregación y composición</b>: una línea con un rombo, vacío o relleno, en el lado del «todo»; un coche tiene ruedas.</li>
      <li><b>Herencia</b>: una flecha con la punta triangular vacía que apunta a la clase padre; un coche es un vehículo.</li></ul>
      <p>Un método sencillo para encontrar las clases de un problema es leer su descripción y subrayar los <b>sustantivos</b> (candidatos a clases o atributos) y los <b>verbos</b> (candidatos a métodos). En «Una biblioteca presta libros a sus socios», aparecen las clases Biblioteca, Libro y Socio, y el método prestar.</p>`,
      svg: uml(),
    },
    {
      h: "La herencia",
      html: `<p>La <mark>herencia</mark> permite crear una clase nueva a partir de otra existente. La clase nueva, llamada <b>subclase</b>, clase hija o derivada, hereda todos los atributos y métodos de la <b>superclase</b>, clase padre o base, y puede <b>añadir</b> otros nuevos o <b>modificar</b> los heredados. Así se reutiliza el código y se organizan las clases en jerarquías. La herencia expresa una relación «<b>es un</b>»: un coche eléctrico <i>es un</i> coche, que <i>es un</i> vehículo.</p>
      ${B.code(`class Vehiculo:
    def __init__(self, marca, ruedas):
        self.marca = marca
        self.ruedas = ruedas

    def describir(self):
        return f"{self.marca} con {self.ruedas} ruedas"

class Coche(Vehiculo):
    def __init__(self, marca, plazas):
        super().__init__(marca, 4)      # constructor del padre
        self.plazas = plazas

    def describir(self):                # sobrescritura
        return super().describir() + f" y {self.plazas} plazas"

c = Coche("Seat", 5)
print(c.describir())   # Seat con 4 ruedas y 5 plazas`)}
      <p>La clase padre se indica entre paréntesis tras el nombre de la subclase. La función <code>super()</code> da acceso a los métodos de la clase padre; se usa sobre todo en el constructor, para no repetir la inicialización común. Cuando una subclase define un método con el mismo nombre que uno heredado, lo <b>sobrescribe</b> (<i>override</i>): sus objetos usarán la versión nueva, que puede ampliar la original llamando a <code>super()</code>.</p>
      <p>Todas las clases de Python heredan en último término de la clase <code>object</code>. La función <code>isinstance(c, Vehiculo)</code> devuelve <code>True</code>, porque un coche es también un vehículo. Python admite <b>herencia múltiple</b> (una clase con varios padres), aunque conviene usarla con prudencia. Un error de diseño frecuente es abusar de la herencia: si la relación no es claramente «es un», suele ser mejor la composición.</p>`,
      svg: herencia(),
      video: B.V("poo-herencia", "Herencia en Python y el método super()"),
    },
    {
      h: "El polimorfismo",
      html: `<p>El <mark>polimorfismo</mark> («muchas formas») es la capacidad de que objetos de clases distintas respondan al <b>mismo mensaje</b> (la misma llamada a un método) cada uno a su manera. El código que los usa no necesita saber de qué clase concreta es cada objeto: le basta con que tenga ese método.</p>
      ${B.code(`class Figura:
    def area(self):
        raise NotImplementedError

class Circulo(Figura):
    def __init__(self, r):
        self.r = r
    def area(self):
        return 3.1416 * self.r ** 2

class Rectangulo(Figura):
    def __init__(self, b, h):
        self.b, self.h = b, h
    def area(self):
        return self.b * self.h

figuras = [Circulo(1), Rectangulo(2, 3), Circulo(2)]
total = sum(f.area() for f in figuras)   # cada una calcula la suya`)}
      <p>El bucle final funciona con cualquier figura, presente o futura: si mañana se añade una clase <code>Triangulo</code> con su método <code>area</code>, el código que calcula el total no cambia. Esta es la gran ventaja del polimorfismo: el programa es <b>extensible</b> sin tener que modificar lo que ya funciona, y se evitan largas cadenas de <code>if tipo == …: elif tipo == …</code>.</p>
      <p>En Python el polimorfismo es todavía más flexible gracias al <b>tipado pato</b> (<i>duck typing</i>): «si camina como un pato y grazna como un pato, es un pato». No hace falta que las clases hereden de un padre común; basta con que tengan los métodos que se van a usar. Por ejemplo, <code>len()</code> funciona con listas, cadenas, diccionarios y con cualquier objeto que defina <code>__len__</code>, y un bucle <code>for</code> recorre cualquier objeto iterable. El operador <code>+</code> también es polimórfico: suma números, concatena cadenas y une listas.</p>`,
      svg: B.cajas("Polimorfismo: el mismo mensaje area() con respuestas distintas", [["Círculo", "π · r²"], ["Rectángulo", "b · h"], ["Triángulo", "b · h / 2"], ["Cuadrado", "l²"]], { t: "f.area(): cada una a su manera" }),
      video: B.V("poo-polimorfismo", "Polimorfismo en Python"),
    },
    {
      h: "Composición y relaciones entre objetos",
      html: `<p>Los objetos no viven aislados: colaboran entre sí. La forma más habitual de relacionarlos es la <mark>composición</mark>: un objeto contiene a otros como atributos. Expresa una relación «<b>tiene un</b>»: un coche tiene un motor, una biblioteca tiene libros, un pedido tiene líneas de pedido.</p>
      ${B.code(`class Libro:
    def __init__(self, titulo, autor):
        self.titulo, self.autor = titulo, autor
        self.prestado = False

class Biblioteca:
    def __init__(self):
        self.libros = []                 # composición

    def añadir(self, libro):
        self.libros.append(libro)

    def prestar(self, titulo):
        for l in self.libros:
            if l.titulo == titulo and not l.prestado:
                l.prestado = True
                return l
        raise LookupError("No disponible")

    def disponibles(self):
        return [l.titulo for l in self.libros if not l.prestado]`)}
      <p>En sentido estricto, UML distingue la <b>composición</b>, en la que las partes no existen sin el todo (las habitaciones de una casa), de la <b>agregación</b>, en la que las partes tienen vida propia (los jugadores de un equipo pueden cambiar de equipo). En ambos casos, en Python se programan igual: guardando objetos en atributos, a menudo dentro de listas o diccionarios.</p>
      <p>Una recomendación clásica del diseño orientado a objetos es <b>preferir la composición a la herencia</b>. La herencia crea un vínculo muy fuerte entre clases: cualquier cambio en el padre afecta a todos los hijos. La composición es más flexible: se pueden combinar piezas y sustituir una por otra. Un personaje de videojuego puede <i>tener</i> un arma, que se cambia durante la partida, en lugar de <i>ser</i> un «PersonajeConEspada». Las estructuras de datos de árboles y listas enlazadas también se construyen por composición: cada nodo es un objeto que tiene referencias a otros nodos.</p>`,
      svg: B.comparar("Herencia frente a composición", ["Herencia", ["relación «es un»", "class Coche(Vehiculo)", "reutiliza y especializa", "vínculo fuerte"]], ["Composición", ["relación «tiene un»", "self.motor = Motor()", "combina piezas", "más flexible"]]),
    },
    {
      h: "Clases abstractas y excepciones propias",
      html: `<p>A veces una clase representa un concepto general que no tiene sentido crear directamente: no existe una «figura» sin forma concreta, ni un «animal» que no sea de ninguna especie. Una <mark>clase abstracta</mark> define una interfaz común que sus subclases están <b>obligadas</b> a completar. En Python se crean con el módulo <code>abc</code>:</p>
      ${B.code(`from abc import ABC, abstractmethod

class Figura(ABC):
    @abstractmethod
    def area(self):
        ...

class Cuadrado(Figura):
    def __init__(self, l):
        self.l = l
    def area(self):
        return self.l ** 2

Figura()        # TypeError: no se puede instanciar
Cuadrado(3)     # correcto`)}
      <p>Un método marcado con <code>@abstractmethod</code> no tiene implementación en la clase abstracta. Si una subclase no lo implementa, tampoco podrá instanciarse, de modo que el error aparece en cuanto se intenta crear el objeto y no más tarde, cuando se llame al método. Es una forma de garantizar el polimorfismo: todas las figuras tendrán <code>area()</code>. En otros lenguajes, como Java, existen además las <b>interfaces</b>, que solo declaran métodos.</p>
      <p>La POO también se aplica a los errores. Las excepciones son clases organizadas en una jerarquía de herencia, y un programa puede definir las suyas heredando de <code>Exception</code>, para describir con precisión los problemas de su dominio:</p>
      ${B.code(`class SaldoInsuficiente(Exception):
    pass

try:
    raise SaldoInsuficiente("Faltan 20 €")
except SaldoInsuficiente as e:
    print("Operación rechazada:", e)`)}
      <p>Como <code>except</code> captura también las subclases, una aplicación puede crear una excepción base propia (<code>ErrorBanco</code>) y varias hijas, y decidir si las trata una a una o todas juntas.</p>`,
      svg: B.flujo("Clase abstracta y subclases concretas", ["Figura (abstracta): area() sin código", "Cuadrado: implementa area()", "Círculo: implementa area()", "Figura() → TypeError; Cuadrado(3) → correcto"], { t: "Contratos con abc" }),
    },
    {
      h: "Buenas prácticas de diseño orientado a objetos",
      html: `<p>Programar con clases no garantiza un buen programa. Con la experiencia, la comunidad ha reunido una serie de principios de diseño. Los más conocidos son los principios <b>SOLID</b>, de los que destacan tres ideas sencillas:</p>
      <ul><li><b>Responsabilidad única</b>: cada clase debe tener un único motivo para cambiar. Una clase <code>Factura</code> calcula importes; imprimirla o guardarla en un fichero corresponde a otras clases.</li>
      <li><b>Abierto a la extensión, cerrado a la modificación</b>: debe poder añadirse comportamiento nuevo (una figura más, un método de pago más) creando clases nuevas, sin cambiar las que ya funcionan. El polimorfismo lo hace posible.</li>
      <li><b>Sustitución</b>: un objeto de una subclase debe poder usarse en cualquier lugar donde se espere uno de la clase padre sin que el programa falle.</li></ul>
      <p>Otras pautas útiles son mantener las clases pequeñas, con nombres claros (sustantivos para las clases, verbos para los métodos), ocultar los datos internos, no repetir código y escribir pruebas para cada clase. Existen soluciones probadas para problemas de diseño frecuentes, llamadas <b>patrones de diseño</b>, como el patrón Observador, que usan las interfaces gráficas para avisar a varios objetos de que ha ocurrido un evento.</p>
      <p>Python ofrece además atajos para clases que sobre todo guardan datos: con el decorador <code>@dataclass</code> del módulo <code>dataclasses</code>, basta con declarar los atributos y sus tipos, y Python genera automáticamente <code>__init__</code>, <code>__repr__</code> y <code>__eq__</code>. La POO está en la base de los motores de videojuegos como Godot o Unity, de los <i>frameworks</i> web como Django y de las aplicaciones para móviles, así que dominarla abre la puerta a casi cualquier campo del desarrollo de software.</p>`,
      svg: B.cajas("Principios de buen diseño orientado a objetos", [["Una responsabilidad", "un motivo|para cambiar"], ["Extensible", "añadir sin|modificar"], ["Sustituible", "la hija vale|por el padre"], ["Encapsulado", "datos ocultos,|interfaz clara"]], { t: "Diseñar bien" }),
    },
  ],
  figura: {
    titulo: "Los pilares de la programación orientada a objetos",
    items: [["Abstracción", "clase", "lo esencial del", "objeto real"], ["Encapsulamiento", "_privado", "interfaz pública", "y @property"], ["Herencia", "super()", "«es un»:", "reutilizar código"], ["Polimorfismo", "f.area()", "mismo mensaje,", "distinta respuesta"]],
  },
  video: B.V("poo-general", "Programación orientada a objetos: abstracción, encapsulamiento, herencia y polimorfismo"),
  quiz: [
    ["Un paradigma de programación es…", ["un lenguaje concreto", "una forma de entender y organizar los programas", "un tipo de error", "un editor de código"], 1, "Estructurado, funcional, orientado a objetos…"],
    ["SQL y HTML son ejemplos de lenguajes…", ["orientados a objetos", "declarativos", "ensambladores", "funcionales puros"], 1, "Describen qué se quiere, no cómo."],
    ["Una clase es…", ["un objeto concreto", "una plantilla que define atributos y métodos", "una variable global", "un módulo"], 1, "Los objetos se crean a partir de ella."],
    ["Un objeto creado a partir de una clase se llama también…", ["método", "instancia", "atributo", "paquete"], 1, "Ejemplar concreto."],
    ["El método que inicializa un objeto en Python es…", ["__str__", "__init__", "__main__", "start"], 1, "El constructor."],
    ["self representa…", ["la clase padre", "el propio objeto", "un módulo", "el programa principal"], 1, "Primer parámetro de los métodos."],
    ["Un atributo de clase…", ["es distinto en cada objeto", "lo comparten todos los objetos", "es siempre privado", "no existe en Python"], 1, "Se define en el cuerpo de la clase."],
    ["El método que define lo que muestra print(objeto) es…", ["__init__", "__str__", "__eq__", "__len__"], 1, "Devuelve un texto."],
    ["Para que sorted ordene objetos propios se puede definir…", ["__lt__", "__init__", "__main__", "__del__"], 0, "Menor que."],
    ["El encapsulamiento consiste en…", ["copiar código de otra clase", "ocultar los datos internos y usar una interfaz", "crear muchos objetos", "usar solo funciones"], 1, "Protege la integridad de los datos."],
    ["En Python, un atributo que empieza por _ indica…", ["que es una constante", "que es de uso interno", "que es un método", "un error"], 1, "Es una convención."],
    ["@property permite…", ["heredar", "usar un método como si fuera un atributo", "crear clases abstractas", "importar módulos"], 1, "Getter con validación o cálculo."],
    ["En un diagrama de clases UML, el signo − indica…", ["un método", "un miembro privado", "herencia", "una clase abstracta"], 1, "+ es público."],
    ["La herencia expresa una relación…", ["«tiene un»", "«es un»", "«usa un»", "«crea un»"], 1, "Un coche es un vehículo."],
    ["super().__init__(…) sirve para…", ["borrar el objeto", "llamar al constructor de la clase padre", "crear una clase abstracta", "importar la clase"], 1, "Evita repetir código."],
    ["Si una subclase define un método con el mismo nombre que el heredado, lo…", ["sobrecarga", "sobrescribe", "borra", "duplica con error"], 1, "Override."],
    ["El polimorfismo permite que…", ["una clase tenga muchos atributos", "objetos distintos respondan al mismo método a su manera", "un objeto pertenezca a dos programas", "se oculten los datos"], 1, "Muchas formas."],
    ["La composición expresa una relación…", ["«es un»", "«tiene un»", "«hereda de»", "«sobrescribe a»"], 1, "Un coche tiene un motor."],
    ["Una clase abstracta…", ["se instancia normalmente", "no se puede instanciar y obliga a implementar ciertos métodos", "no tiene métodos", "es siempre privada"], 1, "Módulo abc."],
    ["Para crear una excepción propia se define una clase que hereda de…", ["object", "Exception", "list", "ABC"], 1, "class MiError(Exception)."],
  ],
  examen: [
    ["class A:\n    def __init__(self, x): self.x = x\n    def doble(self): return self.x * 2\nprint(A(7).doble())", ["7", "14", "error", "None"], 1, "self.x vale 7."],
    ["class C:\n    n = 0\n    def __init__(self): C.n += 1\nC(); C(); C()\nprint(C.n)", ["0", "1", "3", "error"], 2, "Atributo de clase compartido."],
    ["class P:\n    def hablar(self): return \"P\"\nclass H(P):\n    def hablar(self): return \"H\" + super().hablar()\nprint(H().hablar())", ["P", "H", "HP", "PH"], 2, "Amplía el método del padre."],
    ["Si class Gato(Animal), ¿qué devuelve isinstance(Gato(), Animal)?", ["True", "False", "None", "error"], 0, "Un gato es un animal."],
    ["¿Qué muestra? class X:\n    def __str__(self): return \"soy X\"\nprint(X())", ["<X object>", "soy X", "X", "error"], 1, "Se usa __str__."],
    ["Una tienda tiene productos y un producto puede estar en varias tiendas. ¿Qué relación es?", ["herencia", "asociación o agregación", "polimorfismo", "sobrescritura"], 1, "No es «es un»."],
    ["¿Qué ocurre al ejecutar Figura() si Figura hereda de ABC y tiene un @abstractmethod?", ["crea el objeto", "TypeError", "None", "se crea vacía"], 1, "No se puede instanciar."],
    ["for a in [Perro(), Gato()]: a.sonido()  — cada uno emite su sonido. Es un ejemplo de…", ["encapsulamiento", "polimorfismo", "composición", "abstracción de datos"], 1, "Mismo mensaje, distinta respuesta."],
  ],
  feynman: ["Qué es un paradigma de programación y en qué se diferencia la POO de la programación modular", "Qué diferencia hay entre una clase y un objeto", "Para qué sirven __init__ y self", "Qué es el encapsulamiento y cómo se consigue en Python con propiedades", "Cómo se dibuja una clase en un diagrama UML", "Cómo funcionan la herencia, super() y la sobrescritura de métodos", "Qué es el polimorfismo y por qué hace los programas extensibles", "Cuándo conviene usar composición en lugar de herencia"],
  mapa: ["PROGRAMACIÓN ORIENTADA A OBJETOS", [["Clases y objetos", "__init__ · self · métodos"], ["Encapsulamiento", "_privado · @property"], ["Herencia", "super() · sobrescritura"], ["Polimorfismo", "mismo método · duck typing"]]],
  tarjetas: [
    ["Paradigma", "Forma de organizar un programa: estructurado, funcional, declarativo, POO."],
    ["Clase", "Plantilla que define atributos (datos) y métodos (acciones)."],
    ["Objeto o instancia", "Ejemplar concreto de una clase con sus propios valores."],
    ["Constructor", "__init__(self, …): inicializa los atributos al crear el objeto."],
    ["self", "Referencia al propio objeto en los métodos."],
    ["Atributo de clase", "Compartido por todos los objetos de la clase."],
    ["Métodos especiales", "__str__ (print), __eq__ (==), __lt__ (<), __add__ (+)."],
    ["Encapsulamiento", "Ocultar los datos internos; acceso por métodos o @property."],
    ["UML", "Diagrama de clases: nombre, atributos (+/−) y métodos; flechas de relación."],
    ["Herencia", "class Hija(Padre): «es un»; super() y sobrescritura."],
    ["Polimorfismo", "Objetos distintos responden al mismo método a su manera."],
    ["Composición", "Un objeto contiene a otros: «tiene un»; más flexible que la herencia."],
  ],
  ejemplos: [
    ["Diseña una clase Rectangulo con base y altura, y métodos area, perimetro y es_cuadrado.", ["Atributos: base y altura, en el constructor.", "Métodos que consultan el estado y devuelven un valor.", "es_cuadrado es un predicado."], "class Rectangulo:\n    def __init__(self, base, altura):\n        self.base = base\n        self.altura = altura\n    def area(self):\n        return self.base * self.altura\n    def perimetro(self):\n        return 2 * (self.base + self.altura)\n    def es_cuadrado(self):\n        return self.base == self.altura\n\nr = Rectangulo(4, 4)\nr.area(), r.es_cuadrado()   # (16, True)"],
    ["Añade a una clase Fraccion la suma con + y la representación con print.", ["__add__ recibe otra fracción y devuelve una nueva.", "a/b + c/d = (a·d + c·b)/(b·d).", "__str__ devuelve \"a/b\"."], "class Fraccion:\n    def __init__(self, num, den):\n        self.num, self.den = num, den\n    def __add__(self, o):\n        return Fraccion(self.num * o.den + o.num * self.den, self.den * o.den)\n    def __str__(self):\n        return f\"{self.num}/{self.den}\"\n\nprint(Fraccion(1, 2) + Fraccion(1, 3))   # 5/6"],
    ["Encapsula la edad de una clase Persona para que no pueda ser negativa.", ["Se guarda en un atributo interno _edad.", "Se crea una propiedad edad con getter y setter.", "El setter lanza ValueError si el valor no es válido."], "class Persona:\n    def __init__(self, nombre, edad):\n        self.nombre = nombre\n        self.edad = edad\n    @property\n    def edad(self):\n        return self._edad\n    @edad.setter\n    def edad(self, v):\n        if v < 0:\n            raise ValueError(\"Edad negativa\")\n        self._edad = v"],
    ["Crea una jerarquía Empleado → Gerente en la que el gerente cobra un plus y su descripción lo indica.", ["Gerente hereda de Empleado.", "Su constructor llama a super() y añade el plus.", "Sobrescribe sueldo() y amplía describir()."], "class Empleado:\n    def __init__(self, nombre, base):\n        self.nombre, self.base = nombre, base\n    def sueldo(self):\n        return self.base\n\nclass Gerente(Empleado):\n    def __init__(self, nombre, base, plus):\n        super().__init__(nombre, base)\n        self.plus = plus\n    def sueldo(self):\n        return super().sueldo() + self.plus\n\nGerente(\"Ana\", 2000, 500).sueldo()   # 2500"],
    ["Usa el polimorfismo para calcular el sonido de una lista de animales sin usar if.", ["Clase base Animal con método sonido.", "Cada subclase lo sobrescribe.", "Un bucle llama a sonido() sobre cada objeto."], "class Animal:\n    def sonido(self):\n        return \"...\"\nclass Perro(Animal):\n    def sonido(self):\n        return \"Guau\"\nclass Gato(Animal):\n    def sonido(self):\n        return \"Miau\"\n\nfor a in [Perro(), Gato(), Animal()]:\n    print(a.sonido())   # Guau, Miau, ..."],
    ["Diseña con composición un Carrito de la compra que contiene Productos y calcula el total.", ["Producto: nombre y precio.", "Carrito: lista de pares (producto, cantidad).", "total() recorre la lista; el carrito «tiene» productos."], "class Producto:\n    def __init__(self, nombre, precio):\n        self.nombre, self.precio = nombre, precio\n\nclass Carrito:\n    def __init__(self):\n        self.lineas = []\n    def añadir(self, producto, cantidad=1):\n        self.lineas.append((producto, cantidad))\n    def total(self):\n        return sum(p.precio * c for p, c in self.lineas)\n\nc = Carrito()\nc.añadir(Producto(\"Pan\", 1.2), 2)\nc.total()   # 2.4"],
  ],
  errores: [
    "Olvidar self como primer parámetro de un método o al acceder a un atributo (nombre en lugar de self.nombre).",
    "Confundir la clase con el objeto: llamar a Perro.ladrar() sin haber creado ningún perro.",
    "Usar un atributo de clase mutable (una lista) creyendo que cada objeto tiene la suya.",
    "Modificar directamente atributos internos saltándose las validaciones de los métodos.",
    "Olvidar llamar a super().__init__() en el constructor de la subclase, de modo que faltan atributos del padre.",
    "Usar herencia cuando la relación es «tiene un» (una Biblioteca que hereda de Libro).",
  ],
  ejercicios: {
    b: [
      ["Define clase y objeto y pon un ejemplo de cada uno.", "Clase: plantilla que define los atributos y métodos de un tipo de objetos (Coche). Objeto: ejemplar concreto de la clase con sus valores (mi coche, un Seat rojo de 2020)."],
      ["Indica qué paradigma describe cada frase: a) funciones puras sin modificar variables; b) objetos con datos y métodos; c) describir qué se quiere obtener.", "a) Funcional. b) Orientado a objetos. c) Declarativo."],
      ["Escribe una clase Punto con atributos x e y y un método distancia_origen().", "class Punto:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def distancia_origen(self):\n        return (self.x ** 2 + self.y ** 2) ** 0.5"],
      ["Crea dos objetos de la clase Punto y muestra la distancia del primero al origen.", "p = Punto(3, 4)\nq = Punto(1, 1)\nprint(p.distancia_origen())   # 5.0"],
      ["¿Para qué sirve el método __init__? ¿Cuándo se ejecuta?", "Es el constructor: inicializa los atributos del objeto. Se ejecuta automáticamente al crear cada objeto."],
      ["¿Qué representa self? ¿Por qué Python lo necesita?", "Representa el objeto sobre el que se llama el método. Lo necesita para saber a qué objeto pertenecen los atributos que se leen o modifican, ya que el mismo método sirve para todos los objetos."],
      ["Añade a Punto un método __str__ que devuelva \"(x, y)\".", "def __str__(self):\n    return f\"({self.x}, {self.y})\""],
      ["Explica con un ejemplo cotidiano qué es el encapsulamiento.", "Ocultar el funcionamiento interno y ofrecer solo una interfaz. Un microondas: usas los botones, pero no tocas el magnetrón; así no puedes estropearlo ni ponerlo en un estado peligroso."],
      ["Dibuja (o describe) el diagrama UML de una clase Libro con título, autor y método prestar().", "Rectángulo de tres partes. Arriba: Libro. Centro: + titulo: str, + autor: str, − prestado: bool. Abajo: + prestar(), + devolver()."],
      ["Indica si cada relación es de herencia o de composición: a) Perro – Animal; b) Coche – Rueda; c) Alumno – Persona; d) Clase – Alumno.", "a) Herencia (es un). b) Composición (tiene). c) Herencia. d) Composición o agregación (una clase tiene alumnos)."],
      ["¿Qué es el polimorfismo? Pon un ejemplo de Python sin clases propias.", "Que objetos distintos respondan a la misma operación de forma diferente. Ejemplo: len() funciona con listas, cadenas y diccionarios; + suma números y concatena cadenas."],
      ["Escribe la cabecera de una clase Moto que herede de Vehiculo.", "class Moto(Vehiculo):"],
    ],
    m: [
      ["Escribe una clase Contador con un método incrementar() y otro reiniciar(), y un atributo de clase que cuente cuántos contadores se han creado.", "class Contador:\n    creados = 0\n    def __init__(self):\n        self.valor = 0\n        Contador.creados += 1\n    def incrementar(self):\n        self.valor += 1\n    def reiniciar(self):\n        self.valor = 0"],
      ["Escribe una clase Alumno con nombre y lista de notas, métodos añadir_nota (que valide 0-10) y media (0 si no hay notas).", "class Alumno:\n    def __init__(self, nombre):\n        self.nombre = nombre\n        self.notas = []\n    def añadir_nota(self, n):\n        if not 0 <= n <= 10:\n            raise ValueError(\"Nota fuera de rango\")\n        self.notas.append(n)\n    def media(self):\n        return sum(self.notas) / len(self.notas) if self.notas else 0"],
      ["Añade a Alumno el método __lt__ para ordenar alumnos por media y ordena una lista de tres alumnos.", "def __lt__(self, otro):\n    return self.media() < otro.media()\n\nranking = sorted(alumnos, reverse=True)"],
      ["Explica qué está mal: class Equipo:\n    jugadores = []\n    def fichar(self, j): self.jugadores.append(j)", "jugadores es un atributo de clase y es una lista: todos los equipos comparten la misma, así que un fichaje aparece en todos. Debe crearse en __init__: self.jugadores = []."],
      ["Crea una clase Temperatura con una propiedad kelvin calculada a partir de celsius.", "class Temperatura:\n    def __init__(self, c):\n        self.celsius = c\n    @property\n    def kelvin(self):\n        return self.celsius + 273.15"],
      ["Crea la jerarquía Figura (con nombre) → Circulo y Cuadrado, cada una con su área y un __str__ común heredado que use el área.", "class Figura:\n    nombre = \"figura\"\n    def area(self):\n        return 0\n    def __str__(self):\n        return f\"{self.nombre}: {self.area():.2f}\"\n\nclass Circulo(Figura):\n    nombre = \"círculo\"\n    def __init__(self, r): self.r = r\n    def area(self): return 3.1416 * self.r ** 2\n\nclass Cuadrado(Figura):\n    nombre = \"cuadrado\"\n    def __init__(self, l): self.l = l\n    def area(self): return self.l ** 2"],
      ["¿Qué muestra? class A:\n    def f(self): return \"A\"\nclass B(A): pass\nclass C(B):\n    def f(self): return \"C\"\nprint(B().f(), C().f())", "A C. B no define f y usa la de A; C la sobrescribe."],
      ["Escribe una subclase CuentaAhorro de Cuenta que no permita retirar más de 500 € de una vez, reutilizando el retirar del padre.", "class CuentaAhorro(Cuenta):\n    def retirar(self, cantidad):\n        if cantidad > 500:\n            raise ValueError(\"Máximo 500 €\")\n        super().retirar(cantidad)"],
      ["Escribe una función total_areas(figuras) que funcione con cualquier lista de figuras. ¿Qué principio de la POO aprovecha?", "def total_areas(figuras):\n    return sum(f.area() for f in figuras)\nAprovecha el polimorfismo: no necesita saber la clase de cada figura."],
      ["Diseña con composición una clase Equipo que tenga jugadores (objetos Jugador con nombre y dorsal) y un método buscar(dorsal).", "class Jugador:\n    def __init__(self, nombre, dorsal):\n        self.nombre, self.dorsal = nombre, dorsal\n\nclass Equipo:\n    def __init__(self, nombre):\n        self.nombre = nombre\n        self.jugadores = []\n    def fichar(self, j):\n        self.jugadores.append(j)\n    def buscar(self, dorsal):\n        for j in self.jugadores:\n            if j.dorsal == dorsal:\n                return j\n        return None"],
      ["Define una excepción DorsalRepetido y haz que fichar() la lance si el dorsal ya existe.", "class DorsalRepetido(Exception):\n    pass\n\ndef fichar(self, j):\n    if self.buscar(j.dorsal):\n        raise DorsalRepetido(f\"El {j.dorsal} ya está ocupado\")\n    self.jugadores.append(j)"],
      ["Subraya sustantivos y verbos para encontrar clases y métodos: «Un cine proyecta películas en varias salas; los clientes compran entradas para una sesión».", "Clases: Cine, Película, Sala, Cliente, Entrada, Sesión. Métodos: proyectar (Sesión o Sala), comprar (Cliente o Entrada). Relaciones: un cine tiene salas, una sesión es de una película en una sala, una entrada es para una sesión."],
      ["Reescribe la clase Punto con @dataclass. ¿Qué genera Python automáticamente?", "from dataclasses import dataclass\n\n@dataclass\nclass Punto:\n    x: float\n    y: float\n\nGenera __init__, __repr__ (texto legible) y __eq__ (comparar por valores)."],
      ["Explica la diferencia entre sobrescritura y sobrecarga de operadores con un ejemplo de cada una.", "Sobrescritura: una subclase redefine un método heredado (Coche.describir sustituye a Vehiculo.describir). Sobrecarga de operadores: una clase define qué hace un operador con sus objetos (__add__ para sumar fracciones con +)."],
    ],
    a: [
      ["Implementa una pila como clase con métodos apilar, desapilar (excepción PilaVacia si está vacía), cima y __len__.", "class PilaVacia(Exception):\n    pass\n\nclass Pila:\n    def __init__(self):\n        self._datos = []\n    def apilar(self, x):\n        self._datos.append(x)\n    def desapilar(self):\n        if not self._datos:\n            raise PilaVacia(\"La pila está vacía\")\n        return self._datos.pop()\n    def cima(self):\n        return self._datos[-1] if self._datos else None\n    def __len__(self):\n        return len(self._datos)"],
      ["Implementa una lista enlazada con una clase Nodo (dato y siguiente) y una clase Lista con añadir_al_principio y __str__.", "class Nodo:\n    def __init__(self, dato, siguiente=None):\n        self.dato, self.siguiente = dato, siguiente\n\nclass Lista:\n    def __init__(self):\n        self.cabeza = None\n    def añadir_al_principio(self, x):\n        self.cabeza = Nodo(x, self.cabeza)\n    def __str__(self):\n        partes, n = [], self.cabeza\n        while n:\n            partes.append(str(n.dato)); n = n.siguiente\n        return \" → \".join(partes)"],
      ["Crea una clase abstracta MetodoPago con pagar(importe) y dos subclases (Tarjeta, Bizum). Escribe una función cobrar(metodo, importe) que funcione con cualquiera. ¿Qué principio SOLID se cumple?", "from abc import ABC, abstractmethod\n\nclass MetodoPago(ABC):\n    @abstractmethod\n    def pagar(self, importe): ...\n\nclass Tarjeta(MetodoPago):\n    def pagar(self, importe):\n        return f\"Cobrados {importe} € con tarjeta\"\n\nclass Bizum(MetodoPago):\n    def pagar(self, importe):\n        return f\"Cobrados {importe} € por Bizum\"\n\ndef cobrar(m, importe):\n    return m.pagar(importe)\n\nAbierto/cerrado: un método de pago nuevo es una clase nueva, sin tocar cobrar()."],
      ["Diseña el diagrama de clases (texto) de una aplicación de préstamos de la biblioteca del instituto con al menos cuatro clases, atributos, métodos y relaciones.", "Biblioteca (− libros: list, − socios: list; + prestar(libro, socio), + devolver(libro)). Libro (+ isbn, + titulo, − disponible: bool). Socio (+ nombre, + curso, − prestamos: list; + puede_pedir(): bool). Prestamo (+ libro, + socio, + fecha, + devolucion; + vencido(): bool). Relaciones: Biblioteca tiene Libros y Socios (composición/agregación); Prestamo asocia 1 Libro y 1 Socio; un Socio tiene 0..3 Préstamos."],
      ["Programa un pequeño juego de rol: clase Personaje (nombre, vida, atacar(otro)) y subclases Guerrero (más daño) y Mago (cura). Simula un combate por turnos.", "import random\nclass Personaje:\n    def __init__(self, nombre, vida=100):\n        self.nombre, self.vida = nombre, vida\n    def daño(self):\n        return random.randint(5, 10)\n    def atacar(self, otro):\n        otro.vida -= self.daño()\n    def vivo(self):\n        return self.vida > 0\n\nclass Guerrero(Personaje):\n    def daño(self):\n        return super().daño() + 5\n\nclass Mago(Personaje):\n    def atacar(self, otro):\n        super().atacar(otro)\n        self.vida = min(100, self.vida + 3)\n\ng, m = Guerrero(\"Ruy\"), Mago(\"Ixa\")\nwhile g.vivo() and m.vivo():\n    g.atacar(m)\n    if m.vivo():\n        m.atacar(g)\nprint(\"Gana\", g.nombre if g.vivo() else m.nombre)"],
      ["Explica por qué un Cuadrado que hereda de Rectangulo puede romper el principio de sustitución si se permite cambiar la base y la altura por separado.", "Un programa que espera un rectángulo puede poner base = 5 y altura = 2 y esperar área 10. Si el objeto es un Cuadrado que obliga a que lados sean iguales, al cambiar uno cambia el otro y el área no es la esperada: la subclase no puede sustituir al padre sin alterar el comportamiento. Mejor que sean clases independientes de una abstracta Figura."],
      ["Crea una clase Vector2D con suma (+), producto por escalar (*), igualdad (==) y módulo (abs()).", "class Vector2D:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __add__(self, o):\n        return Vector2D(self.x + o.x, self.y + o.y)\n    def __mul__(self, k):\n        return Vector2D(self.x * k, self.y * k)\n    def __eq__(self, o):\n        return self.x == o.x and self.y == o.y\n    def __abs__(self):\n        return (self.x ** 2 + self.y ** 2) ** 0.5"],
      ["Reescribe con POO el programa de notas del primer tema (lista de diccionarios y funciones). Compara ventajas e inconvenientes.", "Clases Alumno (nombre, notas; media(), aprobado()) y Grupo (alumnos; añadir(), media_grupo(), aprobados(), mejor()). Ventajas: datos y comportamiento juntos, validación encapsulada, fácil de ampliar (AlumnoRepetidor). Inconvenientes: más código para un problema pequeño; para scripts sencillos las funciones bastan."],
      ["Investiga y explica qué es el patrón de diseño Observador y en qué tipo de aplicaciones se usa.", "Un objeto (sujeto) mantiene una lista de observadores y les avisa automáticamente cuando cambia su estado, llamando a un método común (actualizar). Se usa en interfaces gráficas (un botón avisa a los objetos interesados al pulsarse), en hojas de cálculo (al cambiar una celda se actualizan los gráficos) y en notificaciones de redes sociales."],
      ["Debate: ¿siempre es mejor programar con clases? Argumenta con ejemplos cuándo conviene la POO y cuándo no.", "No siempre. La POO conviene en programas grandes, con muchas entidades con estado y comportamiento (juegos, aplicaciones de gestión, interfaces gráficas) y cuando se prevé ampliarlos. Para scripts cortos, cálculos o tratamiento de datos, las funciones (y el estilo funcional) son más simples. Python permite combinar ambos enfoques."],
    ],
  },
  glosario: [
    ["Paradigma de programación", "Forma de entender y organizar un programa."],
    ["Programación orientada a objetos", "Paradigma que organiza el programa en objetos con datos y comportamiento."],
    ["Clase", "Plantilla que define los atributos y métodos de un tipo de objetos."],
    ["Objeto (instancia)", "Ejemplar concreto de una clase."],
    ["Atributo", "Dato que guarda un objeto o una clase."],
    ["Método", "Función definida dentro de una clase."],
    ["Constructor", "Método __init__ que inicializa un objeto al crearlo."],
    ["self", "Parámetro que representa al propio objeto en sus métodos."],
    ["Encapsulamiento", "Ocultación de los datos internos tras una interfaz de métodos."],
    ["Propiedad", "Atributo controlado por métodos con @property."],
    ["Abstracción", "Selección de las características esenciales de un objeto real."],
    ["UML", "Lenguaje gráfico estándar para modelar software."],
    ["Herencia", "Mecanismo por el que una clase hija recibe los miembros de la clase padre."],
    ["Sobrescritura", "Redefinición en una subclase de un método heredado."],
    ["Polimorfismo", "Capacidad de objetos distintos de responder al mismo mensaje a su manera."],
    ["Composición", "Relación en la que un objeto contiene a otros como partes."],
    ["Clase abstracta", "Clase que no puede instanciarse y obliga a implementar ciertos métodos."],
  ],
  situacion: {
    titulo: "El sistema de préstamos de la biblioteca",
    reto: "En equipos de tres, diseñad y programad en Python con POO una aplicación de consola para gestionar los préstamos de la biblioteca del instituto: libros, socios, préstamos y devoluciones con fechas límite.",
    pasos: [
      "Entrevistad a la persona responsable de la biblioteca y escribid la descripción del funcionamiento.",
      "Identificad clases, atributos y métodos y dibujad el diagrama de clases UML con sus relaciones.",
      "Repartid las clases, programadlas con encapsulamiento y excepciones propias, y probad cada una por separado.",
      "Usad la herencia o una clase abstracta donde tenga sentido (por ejemplo, tipos de material: libro, revista, DVD).",
      "Integrad las clases en un menú y guardad los datos en un fichero JSON entre ejecuciones.",
      "Presentad el diagrama y una demostración, y explicad qué cambiaríais para ampliar la aplicación.",
    ],
    producto: "Diagrama de clases UML, código Python documentado y probado y demostración en clase.",
    evaluacion: [
      "El diagrama refleja correctamente el problema y las relaciones entre clases.",
      "Se aplican el encapsulamiento, la herencia o el polimorfismo y la composición de forma justificada.",
      "El programa funciona, valida los datos y gestiona los errores con excepciones.",
      "El trabajo en equipo se organiza por clases con interfaces claras.",
    ],
  },
  familias: [
    "Jugad a describir objetos de casa como «clases»: qué datos tienen y qué acciones hacen.",
    "Pedidle que os explique cómo estaría programado un personaje de su videojuego favorito.",
    "Interesaos por el diagrama de clases de su proyecto y pedid que os lo explique.",
    "Animadle a crear un pequeño juego con clases en Python o con un motor gratuito como Godot.",
  ],
  saberes: "Programación orientada a objetos: paradigmas de programación, clases y objetos, constructor, atributos y métodos de instancia y de clase, métodos especiales y sobrecarga de operadores, encapsulamiento y propiedades, abstracción y diagramas de clases UML, herencia, sobrescritura y super, polimorfismo y tipado pato, composición y agregación, clases abstractas, excepciones propias y principios de diseño (Tecnologías de la Información y la Comunicación II, optativa de 2º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Clases desenchufadas: cada alumno es un «objeto» con una tarjeta de atributos y responde a «mensajes» del profesor.",
    "Partir de un programa con funciones y diccionarios y refactorizarlo a clases en parejas.",
    "Diseñar diagramas UML en la pizarra a partir de textos de problemas reales del centro.",
    "Mostrar cómo están organizadas en clases las escenas y nodos de un motor de videojuegos como Godot.",
  ],
  fuentes: [
    B.PYDOC,
    { t: "Tutorial de Python: clases (documentación oficial en español)", url: "https://docs.python.org/es/3/tutorial/classes.html" },
    { t: "Simula, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Simula" },
  ],
}));
