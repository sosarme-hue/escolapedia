// Tecnologías de la Información y la Comunicación II, 2º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
// Bases de datos: sistemas gestores, modelo entidad-relación, modelo relacional, integridad y normalización.
const B = require("./_bach2-tic");

// Diagrama entidad-relación ALUMNO – se matricula – ASIGNATURA.
const er = () => {
  const ent = (x, t, c) => `<rect x="${x - 40}" y="72" width="80" height="34" fill="var(--card)" stroke="${c}" stroke-width="2.4"/>${B.tx(x, 94, t, { fs: 10.5, maxW: 70, bold: true, color: c })}`;
  const at = (x, y, t, ex, clave) => `<path d="M${ex} ${y < 89 ? 72 : 106} L ${x} ${y}" stroke="var(--line)" stroke-width="1.5"/><ellipse cx="${x}" cy="${y}" rx="30" ry="12" fill="var(--paper)" stroke="var(--muted)" stroke-width="1.5"/>${B.tx(x, y + 4, t, { fs: 9.5, maxW: 54, color: "var(--ink)" })}${clave ? `<path d="M${x - 18} ${y + 6} H ${x + 18}" stroke="var(--ink)" stroke-width="1.2"/>` : ""}`;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama entidad-relación: la entidad ALUMNO, con los atributos NIA (clave), nombre y fecha de nacimiento, se relaciona con la entidad ASIGNATURA, con código (clave), nombre y horas, mediante la relación se matricula, de cardinalidad N a M, con el atributo nota">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${at(36, 32, "NIA", 36, true)}${at(92, 24, "nombre", 60)}${at(46, 146, "fecha_nac", 46)}
  ${at(170, 24, "código", 200, true)}${at(224, 36, "nombre", 224)}${at(214, 146, "horas", 214)}
  ${ent(46, "ALUMNO", "var(--pen)")}${ent(214, "ASIGNATURA", "var(--red)")}
  <path d="M86 89 H 100 M160 89 H 174" stroke="var(--ink)" stroke-width="1.6"/>
  <path d="M130 70 L 160 89 L 130 108 L 100 89 Z" fill="var(--sun)" fill-opacity=".25" stroke="var(--sun)" stroke-width="2.2"/>${B.tx(130, 93, "matrícula", { fs: 9.5, maxW: 52, bold: true })}
  ${B.tx(92, 82, "N", { fs: 11, maxW: 12, bold: true, color: "var(--pen)" })}${B.tx(168, 82, "M", { fs: 11, maxW: 12, bold: true, color: "var(--red)" })}
  <path d="M130 108 L 130 128" stroke="var(--line)" stroke-width="1.5"/><ellipse cx="130" cy="138" rx="24" ry="11" fill="var(--paper)" stroke="var(--muted)" stroke-width="1.5"/>${B.tx(130, 142, "nota", { fs: 9.5, maxW: 40 })}
  ${B.tx(130, 172, "rectángulo: entidad · rombo: relación · elipse: atributo", { fs: 9, maxW: 240, color: "var(--muted)" })}
</svg>`;
};

// Dos tablas con clave primaria y clave ajena.
const tablas = () => {
  const tabla = (x, w, nombre, cab, filas, c) => `<rect x="${x}" y="22" width="${w}" height="${20 + 18 * (filas.length + 1)}" rx="6" fill="var(--card)" stroke="${c}" stroke-width="2"/>
    ${B.tx(x + w / 2, 16, nombre, { fs: 11, maxW: w, bold: true, color: c })}
    <rect x="${x}" y="22" width="${w}" height="20" rx="6" fill="${c}"/>
    ${cab.map((h, j) => B.tx(x + (j + 0.5) * w / cab.length, 36, h, { fs: 9.5, maxW: w / cab.length - 4, bold: true, color: "#fff" })).join("")}
    ${filas.map((f, i) => f.map((v, j) => B.tx(x + (j + 0.5) * w / cab.length, 58 + i * 18, v, { fs: 9.5, maxW: w / cab.length - 4 })).join("")).join("")}`;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Dos tablas relacionadas: CURSO, con clave primaria id_curso, y ALUMNO, cuya columna id_curso es una clave ajena que apunta a la clave primaria de CURSO">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${tabla(8, 84, "CURSO", ["id_curso", "nombre"], [["1", "2º A"], ["2", "2º B"]], "var(--leaf)")}
  ${tabla(104, 148, "ALUMNO", ["NIA", "nombre", "id_curso"], [["101", "Eva", "1"], ["102", "Leo", "2"], ["103", "Iker", "1"]], "var(--pen)")}
  <defs><marker id="tb1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--red)"/></marker></defs>
  <path d="M227 132 C 227 156, 30 160, 30 104" stroke="var(--red)" stroke-width="1.8" fill="none" marker-end="url(#tb1)"/>
  ${B.tx(48, 118, "PK", { fs: 10, maxW: 24, bold: true, color: "var(--leaf)" })}${B.tx(234, 146, "FK", { fs: 10, maxW: 24, bold: true, color: "var(--red)" })}
  ${B.tx(130, 174, "la clave ajena apunta a la clave primaria", { fs: 10, maxW: 236, bold: true, color: "var(--red)" })}
</svg>`;
};

// Cardinalidades.
const cardin = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Tres tipos de cardinalidad: uno a uno, una persona tiene un DNI; uno a muchos, un curso tiene muchos alumnos; muchos a muchos, alumnos y asignaturas">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${[["1 : 1", "PERSONA", "DNI", "var(--pen)"], ["1 : N", "CURSO", "ALUMNO", "var(--leaf)"], ["N : M", "ALUMNO", "ASIGNATURA", "var(--red)"]].map(([k, a, b, c], i) => {
    const y = 18 + i * 54;
    return `<rect x="10" y="${y}" width="72" height="30" fill="var(--card)" stroke="${c}" stroke-width="2"/>${B.tx(46, y + 20, a, { fs: 10, maxW: 64, bold: true, color: c })}
    <path d="M82 ${y + 15} H 178" stroke="var(--ink)" stroke-width="1.6"/>
    <rect x="106" y="${y + 4}" width="48" height="22" rx="11" fill="${c}"/>${B.tx(130, y + 19, k, { fs: 11.5, maxW: 44, bold: true, color: "#fff" })}
    <rect x="178" y="${y}" width="72" height="30" fill="var(--card)" stroke="${c}" stroke-width="2"/>${B.tx(214, y + 20, b, { fs: 10, maxW: 66, bold: true, color: c })}`;
  }).join("")}
</svg>`;

module.exports = B.tema(B.textos({
  titulo: "Bases de datos relacionales y modelo entidad-relación",
  minutos: 120,
  objetivos: [
    "Explicar qué es una base de datos y qué ventajas tiene un sistema gestor frente a los ficheros",
    "Distinguir los tipos de bases de datos, relacionales y NoSQL, y sus usos",
    "Diseñar el modelo conceptual de un problema con diagramas entidad-relación y sus cardinalidades",
    "Describir el modelo relacional: tablas, claves primarias y claves ajenas",
    "Transformar un diagrama entidad-relación en un esquema relacional con sus restricciones de integridad",
    "Normalizar tablas hasta la tercera forma normal y valorar la protección de los datos personales",
  ],
  claves: ["base de datos", "SGBD", "redundancia", "NoSQL", "modelo conceptual", "entidad", "atributo", "relación", "cardinalidad", "modelo relacional", "tabla", "clave primaria", "clave ajena", "integridad referencial", "normalización", "RGPD"],
  pregunta: {
    texto: "Cuando compras una entrada de concierto por internet, miles de personas intentan comprar a la vez la misma butaca. ¿Cómo es posible que nunca se venda dos veces y que, si el pago falla, la butaca vuelva a quedar libre?",
    respuesta: "Porque los datos no están en un simple fichero, sino en una <mark>base de datos</mark> gestionada por un <b>sistema gestor de bases de datos</b> (SGBD). El SGBD controla los accesos simultáneos, de modo que solo una persona puede reservar cada butaca; agrupa las operaciones en <b>transacciones</b>, que se hacen completas o no se hacen; y garantiza la <b>integridad</b> de los datos con reglas. Para que todo funcione, la base de datos debe estar bien <b>diseñada</b>: eso es lo que aprenderás en este tema.",
  },
  lectura: {
    titulo: "Edgar Codd y las tablas que ordenaron el mundo",
    html: `<p>En los años sesenta, los datos de bancos y empresas se guardaban en estructuras jerárquicas complicadas: para consultar algo había que conocer el camino exacto por el que estaban almacenados, y cualquier cambio en la organización obligaba a reescribir los programas. En 1970, un matemático británico que trabajaba en IBM, Edgar F. Codd, publicó un artículo con una idea revolucionaria: guardar todos los datos en <b>tablas</b> sencillas, relacionadas entre sí mediante valores comunes, y consultarlas con un lenguaje basado en las matemáticas de conjuntos.</p>
    <p>Curiosamente, IBM tardó años en hacerle caso. Fue un joven programador, Larry Ellison, quien leyó el artículo y fundó una empresa para venderlo: Oracle, que se convirtió en una de las mayores compañías de software del mundo. Codd recibió el premio Turing en 1981.</p>
    <p>Hoy el <b>modelo relacional</b> está detrás de las cuentas bancarias, las historias clínicas, las matrículas de tu instituto, las tiendas online y las redes sociales. En este tema aprenderás a diseñar una base de datos como lo hacen los profesionales: primero un modelo conceptual con dibujos y después las tablas.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Datos, información y bases de datos",
      html: `<p>Los <b>datos</b> son hechos aislados: «Eva», «8,5», «2º B». Cuando se organizan y relacionan adquieren significado y se convierten en <b>información</b>: «Eva, de 2º B, ha sacado un 8,5 en Química». Una <mark>base de datos</mark> es un conjunto de datos relacionados entre sí, almacenados de forma organizada y permanente, que pueden consultar y modificar varios usuarios y programas.</p>
      <p>En el tema de estructuras de datos guardaste información en ficheros CSV y JSON. Es suficiente para programas pequeños, pero cuando los datos crecen y los usan muchas personas, los ficheros causan graves problemas:</p>
      <ul><li><b>Redundancia</b>: el mismo dato se repite en varios ficheros (la dirección de un alumno en el fichero de matrícula, en el del comedor y en el de la biblioteca), lo que ocupa espacio.</li>
      <li><b>Inconsistencia</b>: si el dato cambia y no se actualiza en todos los sitios, aparecen versiones contradictorias. ¿Cuál es la dirección correcta?</li>
      <li><b>Dependencia</b> entre datos y programas: cada programa debe conocer el formato exacto de cada fichero.</li>
      <li>Dificultad para hacer <b>consultas</b> nuevas, para controlar quién puede ver cada dato (<b>seguridad</b>) y para que varios usuarios modifiquen los datos a la vez sin estropearlos (<b>concurrencia</b>).</li></ul>
      <p>Las bases de datos resuelven estos problemas centralizando los datos: cada dato se guarda <b>una sola vez</b> y todos los programas acceden a él del mismo modo. Así se consiguen la <b>integridad</b> (los datos son correctos y coherentes), la <b>independencia</b> (se puede cambiar el almacenamiento sin tocar los programas) y la posibilidad de compartirlos de forma segura.</p>`,
      svg: B.comparar("Ficheros independientes frente a base de datos", ["Ficheros", ["datos repetidos", "versiones contradictorias", "cada programa, su formato", "difícil compartir"]], ["Base de datos", ["cada dato una vez", "datos coherentes", "acceso común", "seguridad y concurrencia"]]),
      video: B.V("bd-general", "¿Qué son las bases de datos? Explicación fácil"),
    },
    {
      h: "Los sistemas gestores de bases de datos",
      html: `<p>Un <mark>sistema gestor de bases de datos</mark> (SGBD) es el software que permite crear, consultar, modificar y administrar bases de datos, haciendo de intermediario entre los datos almacenados y los usuarios o programas. Sus funciones principales son:</p>
      <ul><li><b>Definir</b> la estructura de los datos (tablas, tipos, restricciones).</li>
      <li><b>Manipular</b> los datos: insertar, consultar, modificar y borrar, normalmente con el lenguaje <b>SQL</b>.</li>
      <li><b>Controlar el acceso</b>: usuarios, contraseñas y permisos para cada tabla u operación.</li>
      <li><b>Garantizar la integridad</b> mediante reglas y gestionar la <b>concurrencia</b> de muchos usuarios a la vez.</li>
      <li>Hacer <b>copias de seguridad</b> y recuperar los datos tras un fallo.</li></ul>
      <p>Una idea clave es la <b>transacción</b>: un conjunto de operaciones que debe hacerse entero o no hacerse. En una transferencia bancaria hay que restar el dinero de una cuenta y sumarlo en otra; si el sistema falla entre las dos operaciones, el SGBD deshace la primera. Las transacciones cumplen las propiedades <b>ACID</b>: atomicidad (todo o nada), consistencia, aislamiento (las transacciones simultáneas no se interfieren) y durabilidad (lo confirmado no se pierde).</p>
      <p>Hay SGBD de muchos tipos. Los grandes servidores, como <b>MySQL</b> y <b>MariaDB</b>, <b>PostgreSQL</b> (libres), <b>Oracle</b> o <b>SQL Server</b>, funcionan con una arquitectura <b>cliente-servidor</b>: la base de datos está en un servidor y muchos programas clientes se conectan a ella por la red. <b>SQLite</b>, en cambio, guarda toda la base de datos en un único fichero y está integrada en los navegadores y en cada móvil. Para usuarios no programadores existen herramientas de escritorio con formularios e informes, como <b>LibreOffice Base</b> o Microsoft Access.</p>`,
      svg: B.capas("Arquitectura de un sistema de bases de datos", [["Usuarios", "personas y aplicaciones"], ["Programas", "web, app, formularios"], ["SGBD", "SQL, permisos, transacciones"], ["Base de datos", "datos en disco"]], { t: "El SGBD como intermediario" }),
    },
    {
      h: "Tipos de bases de datos",
      html: `<p>Según cómo organizan los datos, las bases de datos se clasifican en varios <b>modelos</b>.</p>
      <p>Las <mark>bases de datos relacionales</mark>, basadas en el modelo de Codd, organizan los datos en <b>tablas</b> relacionadas mediante valores comunes y se consultan con SQL. Son las más usadas en el mundo, especialmente cuando los datos tienen una estructura clara y es imprescindible que sean coherentes: bancos, comercios, administración, educación o sanidad.</p>
      <p>Con la llegada de las grandes aplicaciones web y el <i>big data</i> surgieron las bases de datos <b>NoSQL</b> («no solo SQL»), que renuncian a parte de la rigidez del modelo relacional a cambio de flexibilidad y de repartir enormes volúmenes de datos entre muchos servidores. Hay varios tipos:</p>
      <ul><li><b>Documentales</b>, como MongoDB: guardan documentos con formato parecido a JSON, cada uno con sus propios campos.</li>
      <li><b>Clave-valor</b>, como Redis: funcionan como un gran diccionario; son rapidísimas y se usan como memoria caché.</li>
      <li><b>De grafos</b>, como Neo4j: guardan nodos y relaciones; ideales para redes sociales o sistemas de recomendación.</li>
      <li><b>Columnares</b>, como Cassandra: optimizadas para analizar grandes cantidades de datos por columnas.</li></ul>`,
      svg: B.cajas("Tipos de bases de datos", [["Relacional", "tablas y SQL|MySQL, PostgreSQL"], ["Documental", "documentos JSON|MongoDB"], ["Clave-valor", "diccionario|Redis"], ["Grafos", "nodos y aristas|Neo4j"]], { t: "Modelos de bases de datos" }),
    },
    {
      h: "Las fases del diseño de una base de datos",
      html: `<p>Una base de datos mal diseñada provoca datos repetidos, errores y consultas imposibles, y corregirla cuando ya tiene millones de registros es muy costoso. Por eso el diseño se hace con método, en tres fases:</p>
      <ol><li><b>Diseño conceptual</b>: se analiza el problema hablando con los usuarios y se representa qué información hay que guardar y cómo se relaciona, sin pensar todavía en ningún programa concreto. La herramienta habitual es el <b>modelo entidad-relación</b>, con diagramas fáciles de entender por personas no informáticas.</li>
      <li><b>Diseño lógico</b>: el modelo conceptual se transforma en el modelo de datos del tipo de base de datos elegido. Si es relacional, se obtienen las <b>tablas</b>, sus columnas y sus claves, y se comprueba que estén bien construidas mediante la <b>normalización</b>.</li>
      <li><b>Diseño físico</b>: se implementan las tablas en un SGBD concreto (MySQL, SQLite…), eligiendo los tipos de datos, los índices para acelerar las búsquedas y la forma de almacenamiento.</li></ol>`,
      svg: B.flujo("Fases del diseño de una base de datos", ["Análisis de requisitos con los usuarios", "Diseño conceptual: diagrama entidad-relación", "Diseño lógico: tablas, claves y normalización", "Diseño físico: tipos e índices en un SGBD"], { t: "De la idea a las tablas" }),
    },
    {
      h: "El modelo entidad-relación: entidades y atributos",
      html: `<p>El <mark>modelo entidad-relación</mark> (E/R), propuesto por Peter Chen en 1976, representa la realidad mediante entidades, atributos y relaciones, dibujados en un <b>diagrama</b>.</p>
      <p>Una <mark>entidad</mark> es cualquier objeto, persona, lugar o concepto del que se quiere guardar información y que se distingue de los demás: ALUMNO, ASIGNATURA, PROFESOR, LIBRO, PRÉSTAMO. Se dibuja como un <b>rectángulo</b> con su nombre, normalmente en singular y en mayúsculas. Cada ejemplar concreto (Eva, Leo) es una <b>ocurrencia</b> o instancia de la entidad.</p>
      <p>Los <mark>atributos</mark> son las propiedades o características de una entidad que interesa guardar: el alumno tiene NIA, nombre, apellidos, fecha de nacimiento y correo. Se dibujan como <b>elipses</b> unidas a su entidad. Cada atributo toma valores de un <b>dominio</b>, el conjunto de valores permitidos (las notas, números entre 0 y 10). Hay varios tipos:</p>
      <ul><li><b>Atributo clave</b> (o identificador): identifica de forma única cada ocurrencia, de modo que no puede haber dos con el mismo valor. Se subraya en el diagrama. Para un alumno, el NIA; para un libro, el ISBN. El nombre no sirve como clave, porque puede repetirse.</li>
      <li><b>Compuesto</b>: se puede dividir en otros (la dirección, en calle, número y código postal).</li>
      <li><b>Multivaluado</b>: puede tener varios valores para la misma ocurrencia (los teléfonos de una persona).</li>
      <li><b>Derivado</b>: se calcula a partir de otros (la edad, a partir de la fecha de nacimiento); normalmente no se almacena.</li></ul>`,
      svg: B.rejilla("Tipos de atributos de una entidad", ["Tipo", "Ejemplo"], [["Clave", "NIA, ISBN, DNI"], ["Simple", "nombre"], ["Compuesto", "dirección"], ["Multivaluado", "teléfonos"], ["Derivado", "edad"]], { t: "Atributos" }),
      video: B.V("bd-er", "Modelo entidad-relación: conceptos básicos"),
    },
    {
      h: "Relaciones y cardinalidad",
      html: `<p>Una <mark>relación</mark> es una asociación entre entidades. Se dibuja como un <b>rombo</b> con un verbo que la describe, unido con líneas a las entidades que relaciona: un ALUMNO <i>se matricula</i> en una ASIGNATURA; un PROFESOR <i>imparte</i> una ASIGNATURA; un SOCIO <i>toma prestado</i> un LIBRO. Las relaciones también pueden tener atributos propios: la nota es un atributo de la matrícula, porque no pertenece solo al alumno ni solo a la asignatura, sino a la combinación de ambos.</p>
      <p>La <mark>cardinalidad</mark> de una relación indica cuántas ocurrencias de una entidad pueden relacionarse con una ocurrencia de la otra. Hay tres tipos:</p>
      <ul><li><b>Uno a uno (1:1)</b>: a cada ocurrencia de una entidad le corresponde como máximo una de la otra. Una persona tiene un DNI y cada DNI es de una persona; un centro tiene un director.</li>
      <li><b>Uno a muchos (1:N)</b>: una ocurrencia de la primera se relaciona con muchas de la segunda, pero cada una de la segunda solo con una de la primera. Un curso tiene muchos alumnos y cada alumno está en un curso.</li>
      <li><b>Muchos a muchos (N:M)</b>: muchas con muchas. Un alumno cursa muchas asignaturas y cada asignatura la cursan muchos alumnos.</li></ul>
      <p>Para averiguar la cardinalidad se hacen dos preguntas, una en cada sentido: ¿con cuántos cursos puede estar relacionado un alumno? (con uno); ¿con cuántos alumnos un curso? (con muchos); por tanto, 1:N. A menudo se indican también las cardinalidades mínimas, como (0,N) o (1,1), que expresan si la relación es obligatoria u opcional: un socio puede no tener ningún préstamo (mínimo 0). Las cardinalidades dependen de las reglas de cada caso: en un centro puede que un profesor solo tutorice un grupo y en otro, varios. Por eso hay que preguntar siempre a los usuarios.</p>`,
      svg: cardin(),
      video: B.V("bd-relaciones", "Relaciones 1 a 1, 1 a N y N a M en el diagrama entidad-relación"),
    },
    {
      h: "Un diagrama entidad-relación completo",
      html: `<p>Veamos cómo se construye el diagrama a partir de una descripción. Un instituto quiere una base de datos con este enunciado: «De cada alumno se guarda su NIA, nombre y fecha de nacimiento. Cada alumno pertenece a un grupo, del que se conoce su código, nivel y aula; un grupo tiene muchos alumnos y un profesor tutor. De cada profesor se guarda su DNI, nombre y departamento. Los alumnos se matriculan en varias asignaturas (código, nombre, horas semanales), y en cada matrícula se registra la nota final».</p>
      <p>Siguiendo un método ordenado:</p>
      <ol><li><b>Identificar las entidades</b> buscando sustantivos con información propia: ALUMNO, GRUPO, PROFESOR y ASIGNATURA.</li>
      <li><b>Asignar los atributos</b> a cada entidad y elegir su <b>clave</b>: NIA, código de grupo, DNI y código de asignatura.</li>
      <li><b>Identificar las relaciones</b> buscando verbos: ALUMNO <i>pertenece</i> a GRUPO, PROFESOR <i>tutoriza</i> GRUPO, ALUMNO <i>se matricula</i> en ASIGNATURA.</li>
      <li><b>Determinar las cardinalidades</b>: pertenece es 1:N (un grupo, muchos alumnos); tutoriza es 1:1 si cada profesor tutoriza un grupo como máximo; se matricula es N:M.</li>
      <li><b>Añadir los atributos de las relaciones</b>: la nota va en la relación de matrícula.</li>
      <li><b>Revisar el diagrama con los usuarios</b>: ¿falta algún dato?, ¿las cardinalidades reflejan las normas del centro?</li></ol>`,
      svg: er(),
    },
    {
      h: "El modelo relacional",
      html: `<p>En el <mark>modelo relacional</mark>, todos los datos se guardan en <b>tablas</b> (llamadas <i>relaciones</i> en la teoría). Cada tabla representa una entidad o una relación del modelo conceptual. Sus <b>columnas</b> (campos o atributos) son las propiedades, cada una con un nombre y un tipo de dato; sus <b>filas</b> (registros o tuplas) son las ocurrencias. El número de columnas es el <b>grado</b> de la tabla y el de filas, su <b>cardinalidad</b>. En una tabla no puede haber dos filas idénticas, y el orden de filas y columnas no importa.</p>
      <p>Las tablas se describen de forma abreviada con un <b>esquema</b>: ALUMNO(<u>NIA</u>, nombre, fecha_nac, id_grupo). Dos conceptos son fundamentales:</p>
      <ul><li>La <mark>clave primaria</mark> (PK, <i>primary key</i>) es la columna o conjunto de columnas que identifica de forma única cada fila. No puede repetirse ni estar vacía. Se subraya en el esquema. Si no hay ningún atributo natural adecuado, se crea un identificador numérico que el SGBD incrementa automáticamente.</li>
      <li>La <mark>clave ajena</mark> o foránea (FK, <i>foreign key</i>) es una columna cuyos valores hacen referencia a la clave primaria de otra tabla. Es la forma de <b>relacionar</b> las tablas: la columna id_grupo de ALUMNO contiene el código del grupo al que pertenece cada alumno, que debe existir en la tabla GRUPO.</li></ul>
      <p>Gracias a las claves ajenas, cada dato se guarda una sola vez: el aula de un grupo aparece solo en la tabla GRUPO, y para saber en qué aula está un alumno se combinan las dos tablas a través de la clave. Esa combinación se hace con las consultas de SQL, que estudiarás en el próximo tema.</p>`,
      svg: tablas(),
    },
    {
      h: "Del diagrama entidad-relación a las tablas",
      html: `<p>El paso del modelo conceptual al lógico se hace con unas reglas sistemáticas:</p>
      <ol><li><b>Cada entidad se convierte en una tabla</b>, con sus atributos como columnas y su atributo clave como clave primaria. Los atributos compuestos se dividen en sus componentes; los multivaluados se llevan a una tabla aparte; los derivados normalmente no se guardan.</li>
      <li><b>Relación 1:N</b>: no crea tabla nueva. La clave primaria de la entidad del lado «1» se añade como <b>clave ajena</b> en la tabla del lado «N». Como un grupo tiene muchos alumnos, la tabla ALUMNO recibe la columna id_grupo.</li>
      <li><b>Relación N:M</b>: se crea una <b>tabla nueva</b> cuya clave primaria está formada por las claves primarias de las dos entidades, que son a la vez claves ajenas. Los atributos de la relación van en esta tabla. La matrícula se convierte en MATRICULA(<u>NIA</u>, <u>cod_asig</u>, nota).</li>
      <li><b>Relación 1:1</b>: la clave de una de las entidades se añade como clave ajena (con valores únicos) en la otra, normalmente en la que participa de forma obligatoria.</li></ol>
      <p>Aplicando las reglas al ejemplo del instituto se obtiene este esquema relacional:</p>
      <ul><li>GRUPO(<u>cod_grupo</u>, nivel, aula, dni_tutor) — dni_tutor es clave ajena de PROFESOR.</li>
      <li>ALUMNO(<u>NIA</u>, nombre, fecha_nac, cod_grupo) — cod_grupo es clave ajena de GRUPO.</li>
      <li>PROFESOR(<u>DNI</u>, nombre, departamento).</li>
      <li>ASIGNATURA(<u>cod_asig</u>, nombre, horas).</li>
      <li>MATRICULA(<u>NIA</u>, <u>cod_asig</u>, nota) — NIA y cod_asig son claves ajenas.</li></ul>
      <p>Una regla práctica: nunca se guarda una lista de valores en una sola celda (por ejemplo, «Mates, Física, Química» en una columna asignaturas). Si aparece esa necesidad, falta una tabla, normalmente la de una relación N:M.</p>`,
      svg: B.rejilla("Reglas de paso del modelo entidad-relación al relacional", ["Del E/R", "Al relacional"], [["Entidad", "tabla con su PK"], ["Relación 1:N", "FK en el lado N"], ["Relación N:M", "tabla nueva"], ["Relación 1:1", "FK única en una"], ["Multivaluado", "tabla aparte"]], { t: "Transformación" }),
    },
    {
      h: "Tipos de datos e integridad",
      html: `<p>En el diseño físico, cada columna recibe un <b>tipo de dato</b>, que limita los valores que puede guardar y el espacio que ocupa. Los más comunes en SQL son <code>INTEGER</code> (enteros), <code>DECIMAL(p, d)</code> o <code>REAL</code> (decimales; para dinero se usa DECIMAL, que es exacto), <code>VARCHAR(n)</code> (texto de hasta n caracteres), <code>TEXT</code> (textos largos), <code>DATE</code> y <code>DATETIME</code> (fechas y horas) y <code>BOOLEAN</code>. Teléfonos y códigos postales se guardan como texto.</p>
      <p>La <mark>integridad</mark> de los datos es su corrección y coherencia. El SGBD la garantiza con <b>restricciones</b> que impiden guardar datos erróneos, sea cual sea el programa que los introduzca:</p>
      <ul><li><b>Integridad de entidad</b>: la clave primaria no puede repetirse ni ser nula.</li>
      <li><b>Integridad referencial</b>: el valor de una clave ajena debe existir en la tabla a la que hace referencia (no se puede asignar a un alumno el grupo «2º Z» si no existe), o ser nulo si se permite.</li>
      <li><b>Restricciones de dominio</b>: <code>NOT NULL</code> (campo obligatorio), <code>UNIQUE</code> (sin repetidos, como el correo), <code>CHECK</code> (una condición, como nota BETWEEN 0 AND 10) y <code>DEFAULT</code> (valor por defecto).</li></ul>
      <p>¿Qué ocurre si se intenta borrar un grupo que tiene alumnos? La integridad referencial obliga a decidirlo al crear la clave ajena: <b>impedir</b> el borrado (RESTRICT, la opción por defecto), borrar también los alumnos en <b>cascada</b> (CASCADE) o dejar su grupo <b>vacío</b> (SET NULL). Lo mismo se decide para las modificaciones de la clave. En el caso del instituto, lo razonable es impedir borrar un grupo con alumnos, pero borrar en cascada las matrículas de un alumno que se da de baja.</p>`,
      svg: B.cajas("Restricciones de integridad", [["Entidad", "PK única|y no nula"], ["Referencial", "la FK debe existir|en la otra tabla"], ["Dominio", "NOT NULL, UNIQUE,|CHECK, DEFAULT"], ["Al borrar", "RESTRICT, CASCADE|o SET NULL"]], { t: "Datos siempre correctos" }),
    },
    {
      h: "La normalización",
      html: `<p>La <mark>normalización</mark> es un proceso que revisa las tablas para eliminar la redundancia y evitar las <b>anomalías</b>: de inserción (no se puede guardar un dato sin otro que aún no existe), de modificación (un cambio hay que hacerlo en muchas filas) y de borrado (al borrar una fila se pierde información que no se quería perder). Se aplica en pasos llamados <b>formas normales</b>; cada una exige cumplir la anterior.</p>
      <ul><li><b>Primera forma normal (1FN)</b>: todos los valores son <b>atómicos</b>, es decir, cada celda contiene un único valor, y no hay grupos repetidos de columnas (telefono1, telefono2, telefono3). Una celda con «Mates, Física» incumple la 1FN.</li>
      <li><b>Segunda forma normal (2FN)</b>: está en 1FN y cada columna que no es clave depende de <b>toda</b> la clave primaria, no solo de una parte. Solo puede incumplirse con claves compuestas. En MATRICULA(<u>NIA</u>, <u>cod_asig</u>, nota, nombre_alumno), el nombre depende solo del NIA: hay que llevarlo a la tabla ALUMNO.</li>
      <li><b>Tercera forma normal (3FN)</b>: está en 2FN y ninguna columna que no es clave depende de otra columna que no es clave (sin dependencias <b>transitivas</b>). En ALUMNO(<u>NIA</u>, nombre, cod_grupo, aula_grupo), el aula depende del grupo, no del alumno: hay que llevarla a la tabla GRUPO.</li></ul>
      <p>Un resumen fácil de recordar es que cada columna debe depender «de la clave, de toda la clave y nada más que de la clave». En la práctica, si se parte de un buen diagrama entidad-relación y se aplican bien las reglas de paso, las tablas suelen quedar ya en 3FN. La normalización sirve entonces para comprobar el diseño. En algunos sistemas que priorizan la velocidad de las consultas se <b>desnormaliza</b> a propósito, aceptando cierta redundancia controlada.</p>`,
      svg: B.flujo("Pasos de la normalización", ["Tabla sin normalizar: celdas con listas", "1FN: valores atómicos, sin grupos repetidos", "2FN: dependen de toda la clave", "3FN: sin dependencias transitivas"], { t: "Formas normales" }),
      video: B.V("bd-normalizacion", "Normalización de bases de datos: 1FN, 2FN y 3FN"),
    },
    {
      h: "Bases de datos en la práctica y protección de datos",
      html: `<p>Una vez diseñada, la base de datos se crea en un SGBD y se usa desde las aplicaciones. Python incluye el módulo <code>sqlite3</code>, que permite trabajar con una base de datos SQLite sin instalar nada:</p>
      ${B.code(`import sqlite3
con = sqlite3.connect("instituto.db")
cur = con.cursor()
cur.execute("""CREATE TABLE IF NOT EXISTS grupo (
    cod_grupo TEXT PRIMARY KEY, nivel TEXT, aula TEXT)""")
cur.execute("INSERT INTO grupo VALUES (?, ?, ?)", ("2B", "2º Bach", "A12"))
con.commit()
for fila in cur.execute("SELECT * FROM grupo"):
    print(fila)
con.close()`)}
      <p>Los signos <code>?</code> son <b>parámetros</b>: el módulo inserta los valores de forma segura. Nunca deben construirse las órdenes SQL pegando textos escritos por el usuario, porque se abriría la puerta a la <b>inyección SQL</b>, uno de los ataques más frecuentes contra las webs. En el próximo tema aprenderás el lenguaje SQL completo.</p>
      <p>Las bases de datos guardan muchos <b>datos personales</b>, es decir, información sobre personas identificadas o identificables: nombres, direcciones, notas, salud, imágenes. En la Unión Europea están protegidos por el <b>Reglamento General de Protección de Datos</b> (RGPD) y, en España, por la Ley Orgánica 3/2018 (LOPDGDD). Sus principios obligan a recoger solo los datos necesarios para una finalidad concreta (<b>minimización</b>), informar a las personas y, en muchos casos, pedir su consentimiento, guardarlos con seguridad (permisos, cifrado, copias de seguridad) y no conservarlos más tiempo del necesario. Las personas tienen derecho a acceder a sus datos, rectificarlos, suprimirlos u oponerse a su uso. Diseñar pensando en la privacidad desde el principio, y no al final, es una obligación legal y ética de quien crea bases de datos.</p>`,
      svg: B.estrella("Principios de protección de datos personales", "RGPD", ["Finalidad", "Minimización", "Seguridad", "Consentimiento", "Derechos", "Conservación"]),
    },
  ],
  figura: {
    titulo: "Ideas clave de las bases de datos relacionales",
    items: [["SGBD", "SQL · ACID", "integridad, seguridad", "y concurrencia"], ["Entidad-relación", "▭ ◇ ◯", "entidades, relaciones", "y atributos"], ["Tablas", "PK · FK", "clave primaria", "y clave ajena"], ["Normalización", "1FN-3FN", "sin redundancia", "ni anomalías"]],
  },
  video: B.V("bd-general", "Las bases de datos explicadas desde cero"),
  quiz: [
    ["Una base de datos es…", ["un fichero de texto", "un conjunto de datos relacionados, organizados y permanentes", "un lenguaje de programación", "una hoja de cálculo"], 1, "Se consulta y modifica de forma compartida."],
    ["Que el mismo dato aparezca en varios ficheros se llama…", ["integridad", "redundancia", "concurrencia", "normalización"], 1, "Provoca inconsistencias."],
    ["El software que crea y administra bases de datos es el…", ["sistema operativo", "SGBD", "compilador", "navegador"], 1, "MySQL, PostgreSQL, SQLite…"],
    ["Una transacción se caracteriza por…", ["hacerse parcialmente", "hacerse completa o no hacerse", "no usar SQL", "ser solo de lectura"], 1, "Atomicidad."],
    ["SQLite se caracteriza por…", ["necesitar un gran servidor", "guardar la base de datos en un único fichero", "no usar tablas", "ser de pago"], 1, "Está en móviles y navegadores."],
    ["MongoDB es una base de datos…", ["relacional", "documental NoSQL", "jerárquica", "de hoja de cálculo"], 1, "Documentos tipo JSON."],
    ["El diagrama entidad-relación pertenece al diseño…", ["físico", "conceptual", "de la interfaz", "de red"], 1, "Independiente del SGBD."],
    ["En un diagrama E/R, las entidades se dibujan con…", ["rombos", "rectángulos", "elipses", "flechas"], 1, "Rombo: relación; elipse: atributo."],
    ["El atributo que identifica de forma única cada ocurrencia es el…", ["derivado", "clave", "multivaluado", "compuesto"], 1, "Se subraya."],
    ["La edad calculada a partir de la fecha de nacimiento es un atributo…", ["clave", "derivado", "multivaluado", "compuesto"], 1, "Se calcula."],
    ["Un curso tiene muchos alumnos y cada alumno está en un curso: la cardinalidad es…", ["1:1", "1:N", "N:M", "0:0"], 1, "Uno a muchos."],
    ["Alumnos y asignaturas se relacionan con cardinalidad…", ["1:1", "1:N", "N:M", "ninguna"], 2, "Muchos a muchos."],
    ["En el modelo relacional, cada fila de una tabla es…", ["un atributo", "un registro u ocurrencia", "una relación N:M", "un dominio"], 1, "También tupla."],
    ["La clave primaria…", ["puede repetirse", "no puede repetirse ni ser nula", "siempre es un texto", "es opcional"], 1, "Identifica cada fila."],
    ["Una clave ajena…", ["identifica la propia tabla", "hace referencia a la clave primaria de otra tabla", "es siempre numérica", "no puede tener valores"], 1, "Relaciona tablas."],
    ["Una relación N:M se transforma en…", ["una clave ajena", "una tabla nueva", "un atributo", "nada"], 1, "Con las dos claves."],
    ["En una relación 1:N, la clave ajena se coloca en la tabla del lado…", ["1", "N", "en ambas", "en ninguna"], 1, "Cada alumno guarda su curso."],
    ["La integridad referencial exige que…", ["no haya nulos", "el valor de la clave ajena exista en la tabla referida", "todo sea texto", "no haya índices"], 1, "No hay grupos inexistentes."],
    ["Una celda con «Mates, Física, Química» incumple la…", ["1FN", "2FN", "3FN", "ninguna"], 0, "Los valores deben ser atómicos."],
    ["El RGPD obliga a…", ["guardar todos los datos posibles", "recoger solo los datos necesarios y protegerlos", "publicar los datos", "no usar bases de datos"], 1, "Minimización y seguridad."],
  ],
  examen: [
    ["En una biblioteca, un socio puede tener varios préstamos y cada préstamo es de un socio. La cardinalidad SOCIO–PRÉSTAMO es…", ["1:1", "1:N", "N:M", "N:1 al revés"], 1, "Un socio, muchos préstamos."],
    ["Un libro puede tener varios autores y un autor escribe varios libros. ¿Cuántas tablas resultan como mínimo?", ["1", "2", "3", "4"], 2, "LIBRO, AUTOR y la tabla de la relación."],
    ["En PEDIDO(num_pedido, fecha, dni_cliente), dni_cliente es…", ["clave primaria", "clave ajena", "atributo derivado", "dominio"], 1, "Hace referencia a CLIENTE."],
    ["¿Qué columna es mejor clave primaria de una tabla de alumnos?", ["nombre", "NIA", "fecha_nac", "curso"], 1, "Única y no nula."],
    ["En ALUMNO(NIA, nombre, cod_grupo, tutor_grupo), ¿qué forma normal se incumple?", ["1FN", "2FN", "3FN", "ninguna"], 2, "El tutor depende del grupo (dependencia transitiva)."],
    ["En MATRICULA(NIA, cod_asig, nota, nombre_asig) con clave (NIA, cod_asig), ¿qué forma normal se incumple?", ["1FN", "2FN", "3FN", "ninguna"], 1, "nombre_asig depende solo de cod_asig."],
    ["Si se borra un grupo con ON DELETE CASCADE en la clave ajena de ALUMNO…", ["no se puede borrar", "se borran también sus alumnos", "los alumnos quedan con grupo nulo", "se duplica el grupo"], 1, "Borrado en cascada."],
    ["¿Qué tipo de dato es más adecuado para un código postal?", ["INTEGER", "VARCHAR(5)", "REAL", "BOOLEAN"], 1, "Puede empezar por 0 y no se opera con él."],
  ],
  feynman: ["Qué problemas tienen los ficheros independientes y cómo los resuelve una base de datos", "Qué hace un SGBD y qué es una transacción", "Qué diferencias hay entre las bases de datos relacionales y las NoSQL", "Cuáles son las fases del diseño de una base de datos", "Qué son entidades, atributos, relaciones y cardinalidades en el modelo E/R", "Qué son la clave primaria y la clave ajena", "Cómo se transforman las relaciones 1:N y N:M en tablas", "Qué exigen la primera, la segunda y la tercera forma normal"],
  mapa: ["BASES DE DATOS RELACIONALES", [["SGBD", "integridad · transacciones"], ["Modelo E/R", "entidad · atributo · relación"], ["Modelo relacional", "tabla · PK · FK"], ["Normalización", "1FN · 2FN · 3FN"]]],
  tarjetas: [
    ["Base de datos", "Datos relacionados, organizados y permanentes, compartidos por usuarios y programas."],
    ["Problemas de los ficheros", "Redundancia, inconsistencia, dependencia y poca seguridad."],
    ["SGBD", "Software que define, manipula, protege y recupera bases de datos."],
    ["Transacción ACID", "Atomicidad, consistencia, aislamiento y durabilidad."],
    ["NoSQL", "Documental, clave-valor, grafos y columnar."],
    ["Fases del diseño", "Conceptual (E/R), lógico (tablas) y físico (SGBD)."],
    ["Diagrama E/R", "Rectángulo: entidad. Elipse: atributo. Rombo: relación. Clave subrayada."],
    ["Cardinalidad", "1:1, 1:N y N:M."],
    ["Clave primaria", "Identifica cada fila: única y no nula."],
    ["Clave ajena", "Columna que referencia la clave primaria de otra tabla."],
    ["Paso a tablas", "Entidad → tabla. 1:N → FK en el lado N. N:M → tabla nueva."],
    ["Formas normales", "1FN atómicos; 2FN toda la clave; 3FN sin dependencias transitivas."],
  ],
  ejemplos: [
    ["Identifica entidades, atributos y relaciones: «Un videoclub alquila películas a sus socios. De cada socio se guarda el número, nombre y teléfono; de cada película, el código, título y año. En cada alquiler se anota la fecha».", ["Sustantivos con información propia: SOCIO y PELÍCULA.", "Atributos y claves: SOCIO(número, nombre, teléfono); PELÍCULA(código, título, año).", "Verbo: alquila. Un socio alquila muchas películas y una película la alquilan muchos socios."], "Entidades SOCIO y PELÍCULA; relación ALQUILA de cardinalidad N:M con el atributo fecha."],
    ["Determina la cardinalidad de PAÍS – CAPITAL, EQUIPO – JUGADOR y ACTOR – PELÍCULA.", ["Preguntar en los dos sentidos.", "Un país tiene una capital y una capital es de un país.", "Un equipo tiene muchos jugadores; un jugador juega en un equipo (en una temporada).", "Un actor sale en muchas películas y en una película salen muchos actores."], "1:1, 1:N y N:M."],
    ["Transforma en tablas: EQUIPO(nombre, ciudad) — tiene (1:N) — JUGADOR(dorsal_id, nombre, posición).", ["Cada entidad, una tabla con su clave.", "Relación 1:N: la clave de EQUIPO pasa como clave ajena a JUGADOR."], "EQUIPO(nombre, ciudad)\nJUGADOR(id_jugador, nombre, posicion, nombre_equipo)  ← FK a EQUIPO"],
    ["Transforma el ejemplo del videoclub en un esquema relacional.", ["SOCIO y PELÍCULA, una tabla cada una.", "La relación N:M crea la tabla ALQUILER con las dos claves.", "Si un socio puede alquilar la misma película varias veces, la fecha forma parte de la clave."], "SOCIO(num_socio, nombre, telefono)\nPELICULA(cod_peli, titulo, año)\nALQUILER(num_socio, cod_peli, fecha)  ← clave (num_socio, cod_peli, fecha); num_socio y cod_peli son FK"],
    ["Normaliza la tabla PEDIDO(num, fecha, cliente, dir_cliente, productos) donde productos contiene «2 lápices, 1 cuaderno».", ["1FN: productos no es atómico; se crea LINEA(num, producto, cantidad).", "Ahora la dirección depende del cliente, no del pedido: dependencia transitiva.", "3FN: se separa CLIENTE."], "CLIENTE(id_cliente, nombre, direccion)\nPEDIDO(num, fecha, id_cliente)\nLINEA(num, producto, cantidad)"],
    ["Define con restricciones la tabla MATRICULA en SQL para que la nota esté entre 0 y 10 y no se pueda matricular a un alumno inexistente.", ["Clave primaria compuesta.", "Claves ajenas a ALUMNO y ASIGNATURA.", "CHECK para la nota."], "CREATE TABLE matricula (\n  nia INTEGER REFERENCES alumno(nia) ON DELETE CASCADE,\n  cod_asig TEXT REFERENCES asignatura(cod_asig),\n  nota DECIMAL(4,2) CHECK (nota BETWEEN 0 AND 10),\n  PRIMARY KEY (nia, cod_asig)\n);"],
  ],
  errores: [
    "Usar el nombre de una persona como clave primaria, aunque pueda repetirse.",
    "Guardar varios valores en una misma celda (una lista de asignaturas o de teléfonos).",
    "Poner la clave ajena de una relación 1:N en el lado 1 en lugar de en el lado N.",
    "Intentar representar una relación N:M con una clave ajena, sin crear una tabla intermedia.",
    "Colocar el atributo de una relación (la nota) en una de las entidades en lugar de en la relación.",
    "Guardar números de teléfono o códigos postales como enteros, perdiendo los ceros iniciales.",
  ],
  ejercicios: {
    b: [
      ["Explica la diferencia entre dato e información con un ejemplo.", "Dato: valor aislado sin contexto («37,8»). Información: datos organizados con significado («Leo tiene 37,8 °C de fiebre»)."],
      ["Cita tres problemas de guardar los datos en ficheros independientes.", "Redundancia (datos repetidos), inconsistencia (versiones contradictorias), dependencia entre datos y programas, dificultad para hacer consultas, controlar el acceso y permitir usuarios simultáneos."],
      ["¿Qué es un SGBD? Cita tres ejemplos.", "Software que permite crear, consultar, modificar y administrar bases de datos. Ejemplos: MySQL, MariaDB, PostgreSQL, SQLite, Oracle, LibreOffice Base."],
      ["¿Qué significa que una transacción sea atómica? Pon un ejemplo.", "Que se hace completa o no se hace. En una transferencia, si falla el ingreso en la cuenta de destino, también se deshace el cargo en la de origen."],
      ["Indica qué tipo de base de datos NoSQL usarías para: a) recomendar amigos en una red social; b) guardar fichas de productos con campos distintos; c) una caché muy rápida.", "a) De grafos. b) Documental. c) Clave-valor."],
      ["Ordena y describe brevemente las fases del diseño de una base de datos.", "Conceptual (diagrama E/R con lo que hay que guardar), lógico (tablas, claves y normalización) y físico (implementación en un SGBD con tipos e índices)."],
      ["Indica cómo se dibujan en un diagrama E/R: entidad, atributo, atributo clave y relación.", "Entidad: rectángulo. Atributo: elipse. Clave: elipse con el nombre subrayado. Relación: rombo."],
      ["Propón cuatro atributos para la entidad LIBRO e indica cuál sería la clave.", "ISBN (clave), título, editorial, año de publicación, número de páginas."],
      ["Clasifica los atributos: teléfonos de un cliente, dirección completa, edad, DNI.", "Multivaluado, compuesto, derivado y clave."],
      ["Define clave primaria y clave ajena.", "Clave primaria: columna o columnas que identifican de forma única cada fila; no se repiten ni son nulas. Clave ajena: columna que hace referencia a la clave primaria de otra tabla para relacionarlas."],
      ["Indica la cardinalidad: MÉDICO–PACIENTE (un paciente tiene un médico de cabecera), CIUDADANO–PASAPORTE, CANTANTE–CANCIÓN (con colaboraciones).", "1:N, 1:1 y N:M."],
      ["Cita tres principios del RGPD.", "Limitación de la finalidad, minimización de datos, exactitud, limitación del plazo de conservación, integridad y confidencialidad (seguridad) y responsabilidad."],
    ],
    m: [
      ["Diseña el diagrama E/R (descríbelo) de una academia: los alumnos se apuntan a cursos; cada curso lo imparte un profesor; un profesor puede impartir varios cursos.", "Entidades: ALUMNO(id, nombre, email), CURSO(cod, nombre, precio), PROFESOR(dni, nombre). Relaciones: SE APUNTA ALUMNO–CURSO, N:M (atributo fecha de inscripción); IMPARTE PROFESOR–CURSO, 1:N."],
      ["Transforma en tablas el diagrama de la academia.", "ALUMNO(id, nombre, email)\nPROFESOR(dni, nombre)\nCURSO(cod, nombre, precio, dni_profesor)  ← FK a PROFESOR\nINSCRIPCION(id_alumno, cod_curso, fecha)  ← FK a ALUMNO y CURSO"],
      ["¿Por qué la nota de una asignatura no puede ser atributo de ALUMNO ni de ASIGNATURA?", "Porque un alumno tiene una nota distinta en cada asignatura y una asignatura tiene una nota distinta para cada alumno. La nota depende de la combinación de ambos: es un atributo de la relación MATRÍCULA."],
      ["Para la tabla de la ficha de un alumno, elige el tipo de dato SQL de: NIA, nombre, fecha de nacimiento, teléfono, nota media, tiene beca.", "INTEGER (o VARCHAR si tiene letras), VARCHAR(60), DATE, VARCHAR(15), DECIMAL(4,2), BOOLEAN."],
      ["Escribe tres restricciones de integridad razonables para una tabla PRODUCTO(cod, nombre, precio, stock).", "cod PRIMARY KEY; nombre NOT NULL; precio CHECK (precio >= 0); stock DEFAULT 0 CHECK (stock >= 0)."],
      ["Explica qué ocurre al borrar un cliente con pedidos según la opción de la clave ajena: RESTRICT, CASCADE o SET NULL. ¿Cuál elegirías?", "RESTRICT: no deja borrar al cliente mientras tenga pedidos. CASCADE: borra también sus pedidos. SET NULL: los pedidos quedan sin cliente. Lo razonable suele ser RESTRICT, porque los pedidos son documentos que hay que conservar (por ejemplo, por motivos fiscales)."],
      ["Detecta la forma normal que incumple y corrige: EMPLEADO(dni, nombre, idiomas) con idiomas «inglés, francés».", "Incumple la 1FN (valor no atómico). EMPLEADO(dni, nombre) e IDIOMA_EMPLEADO(dni, idioma), con clave (dni, idioma)."],
      ["Corrige: PRESTAMO(isbn, num_socio, fecha, titulo_libro, nombre_socio) con clave (isbn, num_socio, fecha).", "Incumple la 2FN: el título depende solo del ISBN y el nombre solo del socio. LIBRO(isbn, titulo), SOCIO(num_socio, nombre), PRESTAMO(isbn, num_socio, fecha)."],
      ["Corrige: FACTURA(num, fecha, cod_cliente, nombre_cliente, ciudad_cliente).", "Incumple la 3FN: el nombre y la ciudad dependen del cliente, no de la factura. CLIENTE(cod_cliente, nombre, ciudad) y FACTURA(num, fecha, cod_cliente)."],
      ["Describe las anomalías de inserción, modificación y borrado en la tabla CURSO_ALUMNO(NIA, nombre, grupo, aula, tutor).", "Inserción: no se puede registrar un grupo nuevo con su aula hasta que tenga algún alumno. Modificación: si el grupo cambia de aula, hay que cambiarlo en todas las filas de sus alumnos. Borrado: si se borra el último alumno de un grupo, se pierde el aula y el tutor de ese grupo."],
      ["Compara una base de datos relacional y una documental para la tienda online de una pequeña empresa.", "Relacional: ideal para pedidos, clientes y pagos, con integridad y transacciones. Documental: cómoda para un catálogo con productos de características muy distintas (ropa con tallas, libros con ISBN). Para una tienda pequeña basta una relacional; muchas combinan ambas."],
      ["Escribe en Python con sqlite3 la creación de la tabla ALUMNO y la inserción de dos alumnos usando parámetros.", "import sqlite3\ncon = sqlite3.connect(\"cole.db\")\ncon.execute(\"CREATE TABLE IF NOT EXISTS alumno (nia INTEGER PRIMARY KEY, nombre TEXT NOT NULL)\")\ncon.executemany(\"INSERT INTO alumno VALUES (?, ?)\", [(101, \"Eva\"), (102, \"Leo\")])\ncon.commit()\ncon.close()"],
      ["¿Por qué es peligroso construir una consulta así: \"SELECT * FROM usuario WHERE nombre = '\" + texto + \"'\"?", "Porque si el usuario escribe un texto con comillas y código SQL (por ejemplo ' OR '1'='1), modifica la consulta y puede ver o borrar datos: es la inyección SQL. Hay que usar consultas parametrizadas con ? para que el texto se trate siempre como dato."],
      ["Un formulario de inscripción a una actividad pide DNI, nombre, fecha de nacimiento, religión, teléfono y foto. Aplica el principio de minimización.", "Solo deben pedirse los datos necesarios para la finalidad: nombre, un dato de contacto y, si hay límite de edad, la fecha de nacimiento. La religión es un dato especialmente protegido y no es necesaria; el DNI y la foto solo si hay un motivo justificado. Además hay que informar de la finalidad y del plazo de conservación."],
    ],
    a: [
      ["Diseña el diagrama E/R completo de una red social sencilla: usuarios que publican mensajes, comentan mensajes de otros y se siguen entre sí.", "Entidades: USUARIO(id, nombre, email, fecha_alta), MENSAJE(id, texto, fecha). Relaciones: PUBLICA USUARIO–MENSAJE 1:N; COMENTA USUARIO–MENSAJE N:M con atributos texto y fecha; SIGUE USUARIO–USUARIO N:M (relación reflexiva, con fecha)."],
      ["Transforma la red social anterior en tablas, prestando atención a la relación reflexiva.", "USUARIO(id, nombre, email, fecha_alta)\nMENSAJE(id, texto, fecha, id_autor)  ← FK a USUARIO\nCOMENTARIO(id, id_usuario, id_mensaje, texto, fecha)  ← FK a USUARIO y MENSAJE (clave propia porque se puede comentar varias veces)\nSIGUE(id_seguidor, id_seguido, fecha)  ← ambas FK a USUARIO"],
      ["Una relación 1:1 PROFESOR–GRUPO (tutoría) es opcional para el profesor y obligatoria para el grupo. ¿En qué tabla pones la clave ajena y por qué?", "En GRUPO (dni_tutor, NOT NULL y UNIQUE). Como todo grupo tiene tutor y no todo profesor es tutor, ponerla en PROFESOR dejaría muchos valores nulos; en GRUPO nunca es nula y UNIQUE garantiza que un profesor no tutorice dos grupos."],
      ["Normaliza hasta la 3FN la tabla: VENTA(num_venta, fecha, dni_cliente, nombre_cliente, cod_producto, nombre_producto, precio_unidad, cantidad), donde una venta puede tener varios productos.", "Clave inicial (num_venta, cod_producto). 2FN: fecha y dni_cliente dependen solo de num_venta; nombre y precio, solo de cod_producto. 3FN: nombre_cliente depende de dni_cliente. Resultado: CLIENTE(dni, nombre); PRODUCTO(cod, nombre, precio); VENTA(num_venta, fecha, dni_cliente); LINEA_VENTA(num_venta, cod_producto, cantidad, precio_aplicado)."],
      ["Explica por qué en LINEA_VENTA puede tener sentido guardar el precio aplicado aunque el precio ya esté en PRODUCTO. ¿Incumple la normalización?", "Porque el precio del producto cambia con el tiempo y la venta debe conservar el precio que se cobró. No es redundancia: es un dato distinto (precio histórico de esa venta), que depende de la línea, así que no incumple la 3FN."],
      ["Escribe un programa en Python con sqlite3 que cree las tablas GRUPO y ALUMNO con su clave ajena, active la integridad referencial e intente insertar un alumno en un grupo inexistente.", "import sqlite3\ncon = sqlite3.connect(\":memory:\")\ncon.execute(\"PRAGMA foreign_keys = ON\")\ncon.execute(\"CREATE TABLE grupo (cod TEXT PRIMARY KEY, aula TEXT)\")\ncon.execute(\"CREATE TABLE alumno (nia INTEGER PRIMARY KEY, nombre TEXT, cod TEXT REFERENCES grupo(cod))\")\ncon.execute(\"INSERT INTO grupo VALUES ('2B', 'A12')\")\ntry:\n    con.execute(\"INSERT INTO alumno VALUES (1, 'Eva', '2Z')\")\nexcept sqlite3.IntegrityError as e:\n    print(\"Rechazado:\", e)   # FOREIGN KEY constraint failed"],
      ["Diseña la base de datos de la biblioteca del instituto (libros con varios ejemplares, socios, préstamos con fecha de devolución) desde el E/R hasta las tablas en 3FN.", "E/R: LIBRO(isbn, titulo, autor) 1:N EJEMPLAR(id_ejemplar, estado); SOCIO(id, nombre, curso); PRÉSTAMO entre SOCIO y EJEMPLAR, N:M a lo largo del tiempo, con fecha_prestamo y fecha_devolucion. Tablas: LIBRO(isbn, titulo, autor), EJEMPLAR(id_ejemplar, isbn, estado), SOCIO(id, nombre, curso), PRESTAMO(id_prestamo, id_ejemplar, id_socio, fecha_prestamo, fecha_devolucion). (Si un libro tiene varios autores, se añaden AUTOR y LIBRO_AUTOR.)"],
      ["Investiga y explica qué es un índice en una base de datos, qué ventaja aporta y qué inconveniente tiene.", "Es una estructura auxiliar (normalmente un árbol B) que ordena los valores de una columna con referencias a sus filas, como el índice de un libro. Acelera mucho las búsquedas y ordenaciones por esa columna (de O(n) a O(log n)), pero ocupa espacio y hace más lentas las inserciones y modificaciones, que deben actualizar el índice."],
      ["El instituto quiere guardar en la base de datos las alergias y enfermedades del alumnado. ¿Qué medidas exige el RGPD para estos datos?", "Son datos de salud, de categoría especial. Solo pueden tratarse con una base legal clara (proteger la salud del alumno, con consentimiento de las familias), con acceso restringido al personal que los necesita, cifrado y registro de accesos, sin conservarlos más allá de la escolarización y garantizando los derechos de acceso, rectificación y supresión. Conviene hacer una evaluación de impacto."],
      ["Debate: ¿deberían las empresas poder vender las bases de datos de sus clientes a otras empresas? Argumenta con el RGPD.", "El RGPD lo prohíbe sin una base legal, normalmente el consentimiento libre, específico, informado e inequívoco de cada persona para esa cesión concreta; además, las personas pueden oponerse y retirar su consentimiento. Argumentos: el valor económico de los datos frente al derecho fundamental a la protección de datos personales, los riesgos de perfiles y discriminación, y la necesidad de transparencia y control por parte de la ciudadanía."],
    ],
  },
  glosario: [
    ["Base de datos", "Conjunto de datos relacionados, organizados y almacenados de forma permanente."],
    ["SGBD", "Sistema gestor de bases de datos: software para crearlas, consultarlas y administrarlas."],
    ["Redundancia", "Repetición innecesaria de un mismo dato."],
    ["Transacción", "Conjunto de operaciones que se ejecuta entero o no se ejecuta."],
    ["NoSQL", "Bases de datos no relacionales: documentales, clave-valor, de grafos o columnares."],
    ["Entidad", "Objeto o concepto del que se guarda información."],
    ["Atributo", "Propiedad de una entidad o de una relación."],
    ["Relación", "Asociación entre entidades."],
    ["Cardinalidad", "Número de ocurrencias de una entidad que se asocian con otra: 1:1, 1:N o N:M."],
    ["Tabla", "Estructura de filas y columnas que guarda los datos en el modelo relacional."],
    ["Registro", "Fila de una tabla."],
    ["Clave primaria", "Columna o columnas que identifican de forma única cada fila."],
    ["Clave ajena", "Columna que hace referencia a la clave primaria de otra tabla."],
    ["Integridad referencial", "Regla que exige que cada clave ajena exista en la tabla referida."],
    ["Normalización", "Proceso que organiza las tablas para eliminar la redundancia y las anomalías."],
    ["Dependencia transitiva", "Dependencia de una columna respecto a otra que no es clave."],
    ["RGPD", "Reglamento europeo que protege los datos personales."],
  ],
  situacion: {
    titulo: "La base de datos de las actividades extraescolares",
    reto: "En grupos, diseñad la base de datos que necesita el centro para gestionar las actividades extraescolares (actividades, monitores, alumnado inscrito, horarios, pagos y autorizaciones), cumpliendo el RGPD, e implementadla en SQLite.",
    pasos: [
      "Entrevistad a la persona responsable de las extraescolares y redactad los requisitos y las reglas del negocio.",
      "Dibujad el diagrama entidad-relación con atributos, claves y cardinalidades, y validadlo con ella.",
      "Transformad el diagrama en un esquema relacional y comprobad que está en 3FN.",
      "Definid tipos de datos y restricciones de integridad y cread las tablas en SQLite (con Python o con DB Browser for SQLite).",
      "Insertad datos de prueba ficticios y comprobad que las restricciones rechazan los datos erróneos.",
      "Redactad una nota de privacidad: qué datos se guardan, para qué, quién accede y durante cuánto tiempo.",
    ],
    producto: "Diagrama E/R, esquema relacional normalizado, base de datos SQLite con datos de prueba y nota de privacidad.",
    evaluacion: [
      "El diagrama E/R refleja correctamente los requisitos, con cardinalidades justificadas.",
      "El esquema relacional aplica bien las reglas de paso y está en 3FN.",
      "Las restricciones garantizan la integridad y se han probado con datos erróneos.",
      "Se aplican los principios de protección de datos y solo se usan datos ficticios.",
    ],
  },
  familias: [
    "Hablad de qué datos vuestros guardan el centro, el banco o las apps y para qué los usan.",
    "Revisad juntos la política de privacidad de una app que uséis y buscad qué derechos os reconoce.",
    "Pedidle que os explique cómo organizaría en tablas los datos de una colección o de la biblioteca de casa.",
    "Recordad la importancia de no compartir datos personales de otras personas sin su permiso.",
  ],
  saberes: "Bases de datos: datos e información, limitaciones de los ficheros, sistemas gestores de bases de datos, transacciones, tipos de bases de datos (relacionales y NoSQL), fases del diseño, modelo entidad-relación (entidades, atributos, claves, relaciones y cardinalidad), modelo relacional (tablas, clave primaria y ajena), paso a tablas, tipos de datos, restricciones de integridad, normalización (1FN, 2FN y 3FN), uso desde Python con sqlite3 y protección de datos personales (Tecnologías de la Información y la Comunicación II, optativa de 2º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Partir de una hoja de cálculo «mal diseñada» real (con datos ficticios) y descubrir sus anomalías antes de normalizarla.",
    "Dibujar diagramas E/R en grupo en la pizarra a partir de enunciados del entorno del alumnado (un club, una tienda, el comedor).",
    "Usar DB Browser for SQLite para ver las tablas y probar las restricciones de forma visual.",
    "Analizar en clase una noticia sobre una filtración de datos y sus consecuencias según el RGPD.",
  ],
  fuentes: [
    { t: "Documentación de sqlite3 (Python, en español)", url: "https://docs.python.org/es/3/library/sqlite3.html" },
    { t: "Agencia Española de Protección de Datos: guías para centros educativos", url: "https://www.aepd.es/guias-y-herramientas/guias" },
    { t: "Edgar F. Codd, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Edgar_Frank_Codd" },
  ],
}));
