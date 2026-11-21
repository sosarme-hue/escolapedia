// Tecnologías de la Información y la Comunicación II, 2º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
// El lenguaje SQL con una base de datos de ejemplo de un instituto: DDL, DML, consultas, agrupaciones, JOIN y Python.
const B = require("./_bach2-tic");

// Diagramas de JOIN con círculos.
const joins = () => {
  const par = (cx, cy, t, modo) => {
    const a = `<circle cx="${cx - 14}" cy="${cy}" r="22"`, b = `<circle cx="${cx + 14}" cy="${cy}" r="22"`;
    const lleno = "var(--pen)", id = `jn${modo}`;
    const clip = `<clipPath id="${id}"><circle cx="${cx + 14}" cy="${cy}" r="22"/></clipPath>`;
    const relleno = modo === "inner"
      ? `<circle cx="${cx - 14}" cy="${cy}" r="22" fill="${lleno}" fill-opacity=".55" clip-path="url(#${id})"/>`
      : modo === "left" ? `${a} fill="${lleno}" fill-opacity=".55"/>` : `${a} fill="${lleno}" fill-opacity=".55"/>${b} fill="${lleno}" fill-opacity=".55"/>`;
    return `<defs>${clip}</defs>${relleno}${a} fill="none" stroke="var(--ink)" stroke-width="1.6"/>${b} fill="none" stroke="var(--ink)" stroke-width="1.6"/>
      ${B.tx(cx - 22, cy + 4, "A", { fs: 10, maxW: 12, bold: true })}${B.tx(cx + 22, cy + 4, "B", { fs: 10, maxW: 12, bold: true })}
      ${B.tx(cx, cy + 40, t, { fs: 10.5, maxW: 76, bold: true, color: "var(--pen)" })}`;
  };
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Tipos de combinación de tablas: INNER JOIN devuelve solo las filas con coincidencia en ambas tablas; LEFT JOIN devuelve todas las filas de la tabla izquierda y las coincidentes de la derecha; FULL JOIN devuelve todas las filas de ambas">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${B.tx(130, 20, "Combinar dos tablas A y B", { fs: 12.5, maxW: 236, bold: true, font: B.D })}
  ${par(44, 76, "INNER JOIN", "inner")}${par(130, 76, "LEFT JOIN", "left")}${par(216, 76, "FULL JOIN", "full")}
  ${B.tx(44, 140, "solo coinciden", { fs: 9.5, maxW: 80 })}${B.tx(130, 140, "todas las de A", { fs: 9.5, maxW: 80 })}${B.tx(216, 140, "todas", { fs: 9.5, maxW: 80 })}
  ${B.tx(130, 168, "zona coloreada = filas del resultado", { fs: 10, maxW: 236, color: "var(--muted)" })}
</svg>`;
};

// Esquema de la base de datos de ejemplo.
const esquema = () => {
  const t = (x, y, w, n, cols, c) => `<rect x="${x}" y="${y}" width="${w}" height="${20 + cols.length * 14}" rx="5" fill="var(--card)" stroke="${c}" stroke-width="2"/><rect x="${x}" y="${y}" width="${w}" height="18" rx="5" fill="${c}"/>${B.tx(x + w / 2, y + 13, n, { fs: 10, maxW: w - 6, bold: true, color: "#fff" })}
    ${cols.map((k, i) => B.tx(x + 6, y + 31 + i * 14, k, { fs: 9.5, maxW: w - 10, anchor: "start", bold: k.includes("🔑"), color: k.includes("→") ? "var(--red)" : "var(--ink)" })).join("")}`;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de la base de datos del instituto: GRUPO, ALUMNO con clave ajena al grupo, ASIGNATURA y MATRICULA, que relaciona alumnos y asignaturas con la nota">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${t(8, 10, 74, "grupo", ["🔑 cod_grupo", "nivel", "aula"], "var(--leaf)")}
  ${t(8, 94, 74, "asignatura", ["🔑 cod_asig", "nombre", "horas"], "var(--sun)")}
  ${t(176, 10, 76, "alumno", ["🔑 nia", "nombre", "fecha_nac", "→ cod_grupo"], "var(--pen)")}
  ${t(176, 94, 76, "matricula", ["🔑→ nia", "🔑→ cod_asig", "nota"], "var(--red)")}
  <path d="M176 66 C 130 66, 130 34, 82 34" stroke="var(--muted)" stroke-width="1.6" fill="none" stroke-dasharray="4 3"/>
  <path d="M214 86 V 94" stroke="var(--muted)" stroke-width="1.6" stroke-dasharray="4 3"/>
  <path d="M176 140 C 130 140, 130 118, 82 118" stroke="var(--muted)" stroke-width="1.6" fill="none" stroke-dasharray="4 3"/>
  ${B.tx(130, 172, "🔑 clave primaria · → clave ajena", { fs: 9.5, maxW: 200, color: "var(--muted)" })}
</svg>`;
};

module.exports = B.tema(B.textos({
  titulo: "El lenguaje SQL",
  minutos: 120,
  objetivos: [
    "Explicar qué es SQL y distinguir sus sublenguajes de definición, manipulación y control de datos",
    "Crear y modificar tablas con sus restricciones con CREATE, ALTER y DROP",
    "Insertar, modificar y borrar datos con INSERT, UPDATE y DELETE de forma segura",
    "Escribir consultas con SELECT, filtros, ordenación, funciones y agrupaciones",
    "Combinar varias tablas con JOIN y usar subconsultas y vistas",
    "Ejecutar SQL desde Python con consultas parametrizadas y valorar la seguridad de los datos",
  ],
  claves: ["SQL", "DDL", "DML", "CREATE TABLE", "INSERT", "UPDATE", "DELETE", "SELECT", "WHERE", "ORDER BY", "COUNT", "GROUP BY", "HAVING", "JOIN", "subconsulta", "inyección SQL"],
  pregunta: {
    texto: "En la plataforma de notas de tu instituto, un profesor quiere saber, en un instante, la nota media de cada grupo en Matemáticas y qué alumnos han suspendido más de dos asignaturas. ¿Recorre alguien las tablas a mano?",
    respuesta: "No: escribe una pregunta en <mark>SQL</mark>, el lenguaje de las bases de datos relacionales. En SQL no se explica <i>cómo</i> buscar los datos, sino <i>qué</i> se quiere obtener: «selecciona el grupo y la media de la nota, de las matrículas de Matemáticas, agrupadas por grupo». El sistema gestor decide el modo más rápido de calcularlo, aunque haya millones de filas. Con unas pocas órdenes, <b>SELECT</b>, <b>WHERE</b>, <b>GROUP BY</b> y <b>JOIN</b>, se responde a casi cualquier pregunta sobre los datos.",
  },
  lectura: {
    titulo: "Un lenguaje de los años setenta que sigue en todas partes",
    html: `<p>Cuando Edgar Codd propuso el modelo relacional, faltaba algo: un lenguaje para que las personas pudieran consultar las tablas sin ser matemáticas. En 1974, dos investigadores de IBM, Donald Chamberlin y Raymond Boyce, diseñaron SEQUEL (<i>Structured English Query Language</i>), un lenguaje que se pudiera leer casi como una frase en inglés: <code>SELECT nombre FROM alumno WHERE nota &gt; 5</code>. Por problemas de marca registrada, pasó a llamarse <b>SQL</b>, aunque mucha gente lo sigue pronunciando «síquel».</p>
    <p>En 1986 se convirtió en un estándar internacional, y desde entonces casi todos los sistemas de bases de datos lo hablan: MySQL, PostgreSQL, Oracle, SQL Server o SQLite, que está dentro de cada teléfono móvil. Más de cincuenta años después, SQL sigue entre los lenguajes más demandados en las ofertas de empleo, porque lo usan programadores, analistas de datos, científicos, periodistas de datos y responsables de marketing.</p>
    <p>En este tema aprenderás SQL con una base de datos sencilla de un instituto, con grupos, alumnos, asignaturas y notas. Puedes practicar con SQLite y el programa gratuito DB Browser for SQLite, o desde Python.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Qué es SQL",
      html: `<p><mark>SQL</mark> (<i>Structured Query Language</i>, lenguaje de consulta estructurado) es el lenguaje estándar para definir, manipular y consultar bases de datos relacionales. Es un lenguaje <b>declarativo</b>: se indica qué resultado se quiere y el SGBD decide cómo obtenerlo. Sus órdenes se agrupan en varios sublenguajes:</p>
      <ul><li><b>DDL</b> (<i>Data Definition Language</i>), de definición de datos: crea, modifica y elimina la estructura (tablas, vistas, índices). Órdenes <code>CREATE</code>, <code>ALTER</code> y <code>DROP</code>.</li>
      <li><b>DML</b> (<i>Data Manipulation Language</i>), de manipulación de datos: inserta, modifica, borra y consulta los datos. Órdenes <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code> y <code>SELECT</code>.</li>
      <li><b>DCL</b> (<i>Data Control Language</i>), de control: concede y retira permisos a los usuarios con <code>GRANT</code> y <code>REVOKE</code>.</li>
      <li>Control de <b>transacciones</b>: <code>COMMIT</code> confirma los cambios y <code>ROLLBACK</code> los deshace.</li></ul>
      <p>Algunas normas de escritura: cada orden termina en punto y coma; las palabras reservadas no distinguen mayúsculas de minúsculas, pero se suelen escribir en mayúsculas para distinguirlas de los nombres de tablas y columnas; los textos y las fechas van entre comillas simples (<code>'Eva'</code>, <code>'2026-11-21'</code>); y los comentarios empiezan por dos guiones (<code>-- comentario</code>). Aunque SQL es un estándar, cada SGBD tiene pequeñas diferencias (los tipos de datos, algunas funciones), llamadas <b>dialectos</b>.</p>
      <p>En todo el tema usaremos la base de datos del instituto que diseñaste en el tema anterior, con cuatro tablas: <code>grupo</code>, <code>alumno</code>, <code>asignatura</code> y <code>matricula</code>.</p>`,
      svg: esquema(),
    },
    {
      h: "Crear y modificar tablas: el DDL",
      html: `<p>La orden <code>CREATE TABLE</code> crea una tabla indicando, para cada columna, su nombre, su tipo de dato y sus restricciones; al final se declaran las claves:</p>
      ${B.code(`CREATE TABLE grupo (
  cod_grupo  VARCHAR(5)  PRIMARY KEY,
  nivel      VARCHAR(20) NOT NULL,
  aula       VARCHAR(5)
);

CREATE TABLE alumno (
  nia        INTEGER PRIMARY KEY,
  nombre     VARCHAR(60) NOT NULL,
  fecha_nac  DATE,
  email      VARCHAR(80) UNIQUE,
  cod_grupo  VARCHAR(5) REFERENCES grupo(cod_grupo)
);

CREATE TABLE matricula (
  nia       INTEGER REFERENCES alumno(nia) ON DELETE CASCADE,
  cod_asig  VARCHAR(6) REFERENCES asignatura(cod_asig),
  nota      DECIMAL(4,2) CHECK (nota BETWEEN 0 AND 10),
  PRIMARY KEY (nia, cod_asig)
);`)}
      <p>Las tablas que son referenciadas por claves ajenas deben crearse antes: primero <code>grupo</code> y <code>asignatura</code>, después <code>alumno</code> y por último <code>matricula</code>. Cuando la clave primaria tiene varias columnas, se declara al final con <code>PRIMARY KEY (col1, col2)</code>.</p>
      <p>Para modificar una tabla ya creada se usa <code>ALTER TABLE</code>: <code>ALTER TABLE alumno ADD telefono VARCHAR(15);</code> añade una columna, y <code>DROP COLUMN</code> la elimina. Para borrar una tabla completa, con su estructura y todos sus datos, se usa <code>DROP TABLE alumno;</code>. Es una orden irreversible, así que debe usarse con muchísimo cuidado y siempre con una copia de seguridad.</p>`,
      svg: B.rejilla("Órdenes del lenguaje de definición de datos", ["Orden", "Hace"], [["CREATE TABLE", "crea una tabla"], ["ALTER TABLE … ADD", "añade columna"], ["ALTER … DROP COLUMN", "quita columna"], ["DROP TABLE", "borra la tabla"], ["CREATE INDEX", "crea un índice"]], { t: "DDL" }),
    },
    {
      h: "Insertar, modificar y borrar datos",
      html: `<p>Las tres órdenes del DML que cambian los datos son <code>INSERT</code>, <code>UPDATE</code> y <code>DELETE</code>.</p>
      <p><code>INSERT INTO</code> añade filas. Conviene indicar las columnas, para no depender de su orden y poder omitir las opcionales; se pueden insertar varias filas a la vez:</p>
      ${B.code(`INSERT INTO grupo (cod_grupo, nivel, aula)
VALUES ('2A', '2º Bach', 'A11'), ('2B', '2º Bach', 'A12');

INSERT INTO alumno (nia, nombre, fecha_nac, cod_grupo)
VALUES (101, 'Eva Ruiz', '2008-03-14', '2B');`)}
      <p><code>UPDATE</code> modifica los valores de las filas que cumplen una condición:</p>
      ${B.code(`UPDATE grupo SET aula = 'B05' WHERE cod_grupo = '2A';
UPDATE matricula SET nota = nota + 0.5 WHERE cod_asig = 'TIC2';`)}
      <p><code>DELETE FROM</code> elimina las filas que cumplen una condición:</p>
      ${B.code(`DELETE FROM matricula WHERE nia = 101 AND cod_asig = 'FIS';`)}
      <p>Una advertencia fundamental: en <code>UPDATE</code> y <code>DELETE</code>, la cláusula <code>WHERE</code> indica a qué filas afecta la orden. Si se olvida, la orden se aplica a <b>todas las filas</b> de la tabla: <code>DELETE FROM alumno;</code> borra todos los alumnos. Por eso es buena práctica escribir primero un <code>SELECT</code> con la misma condición para comprobar qué filas se verán afectadas, y trabajar dentro de una transacción para poder deshacer con <code>ROLLBACK</code>.</p>
      <p>Las restricciones definidas con el DDL protegen los datos en estas operaciones: el SGBD rechazará insertar un alumno con un NIA repetido, una matrícula con una nota de 12 o un alumno en un grupo que no existe, y no dejará borrar un grupo que tenga alumnos si la clave ajena es RESTRICT.</p>`,
      svg: B.cajas("Órdenes que modifican los datos", [["INSERT INTO", "añade filas"], ["UPDATE … SET", "cambia valores"], ["DELETE FROM", "borra filas"], ["¡Siempre WHERE!", "sin él, afecta|a todas las filas"]], { t: "DML: cambiar datos" }),
    },
    {
      h: "Consultas básicas con SELECT",
      html: `<p>La orden más importante de SQL es <code>SELECT</code>, que consulta los datos y devuelve el resultado en forma de tabla, sin modificar nada. Su forma más sencilla indica qué columnas se quieren (<code>SELECT</code>) y de qué tabla (<code>FROM</code>):</p>
      ${B.code(`SELECT nombre, fecha_nac FROM alumno;
SELECT * FROM grupo;                       -- todas las columnas
SELECT nombre AS alumno FROM alumno;        -- alias de columna
SELECT DISTINCT cod_grupo FROM alumno;      -- sin repetidos
SELECT nombre, horas * 35 AS horas_curso FROM asignatura;`)}
      <p>El asterisco <code>*</code> selecciona todas las columnas; es cómodo para explorar, pero en los programas conviene indicar solo las que se necesitan. Con <code>AS</code> se da un <b>alias</b>, un nombre más claro para una columna del resultado. <code>DISTINCT</code> elimina las filas repetidas del resultado: la consulta anterior muestra cada grupo una sola vez, aunque tenga muchos alumnos.</p>
      <p>En la lista de columnas también se pueden escribir <b>expresiones</b> con operadores aritméticos (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>) y funciones. Por ejemplo, multiplicar las horas semanales por las 35 semanas del curso.</p>
      <p>Una consulta completa puede tener hasta seis cláusulas, que siempre se escriben en este orden: <code>SELECT</code> (qué columnas), <code>FROM</code> (de qué tablas), <code>WHERE</code> (qué filas), <code>GROUP BY</code> (cómo agrupar), <code>HAVING</code> (qué grupos) y <code>ORDER BY</code> (en qué orden). Sin embargo, el SGBD las ejecuta en otro orden lógico: primero FROM, después WHERE, GROUP BY, HAVING, SELECT y, por último, ORDER BY. Conocer este orden ayuda a entender, por ejemplo, por qué no se puede usar en WHERE un alias definido en SELECT.</p>`,
      svg: B.flujo("Orden lógico de ejecución de una consulta SELECT", ["FROM: de qué tablas", "WHERE: qué filas", "GROUP BY y HAVING: qué grupos", "SELECT: qué columnas", "ORDER BY: en qué orden"], { t: "Cómo se ejecuta SELECT" }),
      video: B.V("sql-general", "SQL desde cero en 10 minutos"),
    },
    {
      h: "Filtrar filas con WHERE",
      html: `<p>La cláusula <code>WHERE</code> selecciona solo las filas que cumplen una <b>condición</b>. Las condiciones se construyen con:</p>
      <ul><li><b>Operadores de comparación</b>: <code>=</code>, <code>&lt;&gt;</code> (distinto, también <code>!=</code>), <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code> y <code>&gt;=</code>. Atención: en SQL la igualdad se escribe con un solo <code>=</code>.</li>
      <li><b>Operadores lógicos</b>: <code>AND</code> (se cumplen las dos), <code>OR</code> (al menos una) y <code>NOT</code>. Conviene usar paréntesis cuando se combinan.</li>
      <li><code>BETWEEN a AND b</code>: valores en un intervalo, incluidos los extremos.</li>
      <li><code>IN (lista)</code>: el valor está en una lista.</li>
      <li><code>LIKE</code>: compara textos con un <b>patrón</b>, en el que <code>%</code> representa cualquier número de caracteres y <code>_</code> exactamente uno.</li>
      <li><code>IS NULL</code> e <code>IS NOT NULL</code>: valores vacíos.</li></ul>
      ${B.code(`SELECT * FROM matricula WHERE nota >= 5 AND cod_asig = 'MAT2';
SELECT * FROM matricula WHERE nota BETWEEN 7 AND 8.99;
SELECT nombre FROM alumno WHERE cod_grupo IN ('2A', '2B');
SELECT nombre FROM alumno WHERE nombre LIKE 'M%';      -- empieza por M
SELECT nombre FROM alumno WHERE email LIKE '%@gmail.com';
SELECT nombre FROM alumno WHERE fecha_nac >= '2008-01-01';
SELECT nombre FROM alumno WHERE email IS NULL;`)}
      <p>El valor <code>NULL</code> significa «desconocido» o «sin valor», que no es lo mismo que cero o un texto vacío. Cualquier comparación con NULL, incluso <code>email = NULL</code>, no da verdadero, por lo que para buscar valores vacíos hay que usar <code>IS NULL</code>. Es uno de los errores más frecuentes al empezar con SQL.</p>`,
      svg: B.rejilla("Operadores de la cláusula WHERE", ["Operador", "Ejemplo"], [["=, <>, <, >=", "nota >= 5"], ["AND, OR, NOT", "a AND (b OR c)"], ["BETWEEN", "nota BETWEEN 7 AND 9"], ["IN", "grupo IN ('2A','2B')"], ["LIKE", "nombre LIKE 'M%'"]].map((f) => f.map((x) => x.replace(/</g, "&lt;").replace(/>/g, "&gt;"))), { t: "Condiciones" }),
    },
    {
      h: "Ordenar y limitar resultados",
      html: `<p>Las filas de una tabla no tienen un orden garantizado. Para ordenar el resultado de una consulta se usa <code>ORDER BY</code>, al final de la orden. Por defecto el orden es ascendente (<code>ASC</code>: de menor a mayor, de la A a la Z, de las fechas más antiguas a las más recientes); con <code>DESC</code> es descendente. Se puede ordenar por varias columnas: la segunda decide el orden cuando hay empate en la primera.</p>
      ${B.code(`SELECT nombre, fecha_nac FROM alumno ORDER BY fecha_nac;
SELECT nia, nota FROM matricula
WHERE cod_asig = 'MAT2'
ORDER BY nota DESC, nia ASC;`)}
      <p>Para obtener solo las primeras filas del resultado se usa <code>LIMIT</code> en MySQL, PostgreSQL y SQLite (en SQL Server, <code>TOP</code>). Combinado con <code>ORDER BY</code> permite responder a preguntas de tipo «los cinco mejores»:</p>
      ${B.code(`SELECT nia, nota FROM matricula
WHERE cod_asig = 'TIC2'
ORDER BY nota DESC
LIMIT 3;                       -- las tres mejores notas

SELECT * FROM alumno ORDER BY nombre LIMIT 10 OFFSET 20;  -- página 3`)}
      <p><code>OFFSET</code> salta un número de filas antes de empezar a devolver resultados. Así funcionan las listas por <b>páginas</b> de las tiendas online o de los buscadores: la página 3, con 10 resultados por página, salta las 20 primeras filas.</p>
      <p>Se puede ordenar también por una expresión o por un alias definido en SELECT (porque ORDER BY se ejecuta después de SELECT), y por columnas que no se muestran en el resultado.</p>`,
      svg: B.comparar("Orden ascendente frente a orden descendente", ["ASC (defecto)", ["menor → mayor", "A → Z", "antigua → reciente", "ORDER BY nota"]], ["DESC", ["mayor → menor", "Z → A", "reciente → antigua", "ORDER BY nota DESC"]]),
    },
    {
      h: "Funciones de fila y funciones agregadas",
      html: `<p>SQL incluye muchas funciones. Las <b>funciones de fila</b> calculan un valor para cada fila: <code>UPPER</code> y <code>LOWER</code> (mayúsculas y minúsculas), <code>LENGTH</code> (longitud de un texto), <code>SUBSTR</code> (un trozo), <code>ROUND(x, d)</code> (redondear), <code>ABS</code>, <code>COALESCE(a, b)</code> (devuelve b si a es NULL) y funciones de fecha, que cambian según el SGBD (en MySQL, <code>YEAR(fecha)</code>; en SQLite, <code>strftime('%Y', fecha)</code>).</p>
      <p>Las <mark>funciones agregadas</mark> resumen <b>muchas filas en un único valor</b>:</p>
      <ul><li><code>COUNT(*)</code>: número de filas; <code>COUNT(columna)</code> cuenta solo los valores no nulos y <code>COUNT(DISTINCT columna)</code>, los valores distintos.</li>
      <li><code>SUM(columna)</code>: suma; <code>AVG(columna)</code>: media.</li>
      <li><code>MIN(columna)</code> y <code>MAX(columna)</code>: mínimo y máximo, también con textos y fechas.</li></ul>
      ${B.code(`SELECT COUNT(*) FROM alumno;                        -- cuántos alumnos
SELECT ROUND(AVG(nota), 2) AS media FROM matricula
WHERE cod_asig = 'MAT2';                           -- media de Matemáticas II
SELECT MAX(nota), MIN(nota) FROM matricula;
SELECT COUNT(*) FROM matricula WHERE nota < 5;     -- suspensos
SELECT MIN(fecha_nac) FROM alumno;                 -- el más mayor`)}
      <p>Las funciones agregadas <b>ignoran los valores NULL</b>: la media de las notas no tiene en cuenta las matrículas que todavía no tienen nota. Por eso <code>COUNT(*)</code> y <code>COUNT(nota)</code> pueden dar resultados distintos.</p>
      <p>Una restricción importante: si en la consulta hay una función agregada, no se pueden pedir a la vez columnas normales, porque el resultado es una sola fila. <code>SELECT nombre, MAX(nota) …</code> no tiene sentido sin agrupar (algunos SGBD lo permiten, pero devuelven un nombre cualquiera). Para obtener un resumen por cada grupo se usa <code>GROUP BY</code>.</p>`,
      svg: B.barras("Funciones agregadas aplicadas a las notas 4, 6, 7, 9 y 9", [["COUNT", 5], ["SUM", 35], ["AVG", 7], ["MIN", 4], ["MAX", 9]], { t: "Notas: 4, 6, 7, 9, 9" }),
    },
    {
      h: "Agrupar con GROUP BY y HAVING",
      html: `<p>La cláusula <mark>GROUP BY</mark> agrupa las filas que tienen el mismo valor en una o varias columnas y aplica las funciones agregadas a <b>cada grupo</b> por separado. El resultado tiene una fila por grupo.</p>
      ${B.code(`-- Nota media de cada asignatura
SELECT cod_asig, ROUND(AVG(nota), 2) AS media, COUNT(*) AS alumnos
FROM matricula
GROUP BY cod_asig;

-- Número de alumnos de cada grupo
SELECT cod_grupo, COUNT(*) FROM alumno GROUP BY cod_grupo;`)}
      <p>La regla es sencilla: en el <code>SELECT</code> de una consulta agrupada solo pueden aparecer las columnas por las que se agrupa y funciones agregadas. Tiene lógica: si se agrupan las matrículas por asignatura, cada asignatura tiene una media, pero muchos alumnos distintos.</p>
      <p>Para filtrar grupos se usa <code>HAVING</code>, que funciona como <code>WHERE</code> pero se aplica <b>después</b> de agrupar, por lo que puede usar funciones agregadas. La diferencia es fundamental:</p>
      <ul><li><code>WHERE</code> filtra <b>filas</b> antes de agrupar: no puede contener funciones agregadas.</li>
      <li><code>HAVING</code> filtra <b>grupos</b> después de agrupar: normalmente contiene funciones agregadas.</li></ul>
      ${B.code(`-- Alumnos con más de dos suspensos
SELECT nia, COUNT(*) AS suspensos
FROM matricula
WHERE nota < 5            -- primero, solo las filas suspensas
GROUP BY nia              -- después, agrupar por alumno
HAVING COUNT(*) > 2       -- y quedarse con los grupos de más de 2
ORDER BY suspensos DESC;`)}
      <p>Esta consulta responde a la pregunta del principio del tema.</p>`,
      svg: B.comparar("WHERE frente a HAVING", ["WHERE", ["filtra filas", "antes de agrupar", "sin funciones agregadas", "WHERE nota < 5"].map((x) => x.replace(/</g, "&lt;"))], ["HAVING", ["filtra grupos", "después de agrupar", "con funciones agregadas", "HAVING COUNT(*) > 2"].map((x) => x.replace(/>/g, "&gt;"))]),
      video: B.V("sql-group", "Consultas SQL: ORDER BY y GROUP BY con ejercicios"),
    },
    {
      h: "Consultas con varias tablas: JOIN",
      html: `<p>En una base de datos bien normalizada, la información está repartida en varias tablas. Para obtener, por ejemplo, el nombre de cada alumno junto con el aula de su grupo hay que <b>combinar</b> las tablas <code>alumno</code> y <code>grupo</code> a través de la clave ajena. Esto se hace con <mark>JOIN</mark>:</p>
      ${B.code(`SELECT a.nombre, g.aula
FROM alumno AS a
JOIN grupo AS g ON a.cod_grupo = g.cod_grupo;`)}
      <p>La cláusula <code>ON</code> indica la condición de combinación: normalmente, que la clave ajena de una tabla sea igual a la clave primaria de la otra. Para cada alumno, el SGBD busca la fila del grupo correspondiente y une ambas en una fila del resultado. Los <b>alias de tabla</b> (<code>a</code>, <code>g</code>) abrevian la consulta, y anteponer el nombre o alias de la tabla a cada columna (<code>a.nombre</code>) evita ambigüedades cuando dos tablas tienen columnas con el mismo nombre, como <code>cod_grupo</code>.</p>
      <p>El <code>JOIN</code> simple es un <b>INNER JOIN</b> (combinación interna): solo aparecen las filas que tienen correspondencia en ambas tablas. Un alumno sin grupo asignado (con <code>cod_grupo</code> nulo) no saldría en el resultado, y tampoco un grupo sin alumnos.</p>
      <p>Si se olvida la condición <code>ON</code>, se obtiene el <b>producto cartesiano</b>: cada fila de una tabla combinada con todas las de la otra. Con 500 alumnos y 20 grupos, 10 000 filas sin sentido.</p>
      <p>Después del JOIN se pueden añadir todas las demás cláusulas. Por ejemplo, la nota media por aula:</p>
      ${B.code(`SELECT g.aula, ROUND(AVG(m.nota), 2) AS media
FROM matricula m
JOIN alumno a ON m.nia = a.nia
JOIN grupo g ON a.cod_grupo = g.cod_grupo
GROUP BY g.aula;`)}`,
      svg: joins(),
      video: B.V("sql-join", "Consultas SQL: INNER JOIN con práctica"),
    },
    {
      h: "Combinaciones externas y relaciones N:M",
      html: `<p>A veces interesa incluir también las filas sin correspondencia. El <code>LEFT JOIN</code> (combinación externa izquierda) devuelve <b>todas las filas de la tabla de la izquierda</b> y, si no tienen correspondencia en la de la derecha, rellena sus columnas con <code>NULL</code>. Es la forma de encontrar «lo que falta»:</p>
      ${B.code(`-- Todos los grupos con su número de alumnos, incluidos los vacíos
SELECT g.cod_grupo, COUNT(a.nia) AS alumnos
FROM grupo g
LEFT JOIN alumno a ON a.cod_grupo = g.cod_grupo
GROUP BY g.cod_grupo;

-- Alumnos que no están matriculados en ninguna asignatura
SELECT a.nombre
FROM alumno a
LEFT JOIN matricula m ON m.nia = a.nia
WHERE m.nia IS NULL;`)}
      <p>En la primera consulta se usa <code>COUNT(a.nia)</code> y no <code>COUNT(*)</code>, para que los grupos vacíos cuenten 0 y no 1. Existen también <code>RIGHT JOIN</code>, simétrico del anterior, y <code>FULL JOIN</code>, que devuelve todas las filas de ambas tablas, aunque no todos los SGBD los admiten.</p>
      <p>Las relaciones <b>N:M</b> se consultan atravesando la tabla intermedia, con dos JOIN. Para ver el nombre de cada alumno, el nombre de cada asignatura y la nota:</p>
      ${B.code(`SELECT a.nombre AS alumno, s.nombre AS asignatura, m.nota
FROM matricula m
JOIN alumno a     ON m.nia = a.nia
JOIN asignatura s ON m.cod_asig = s.cod_asig
WHERE m.nota >= 9
ORDER BY s.nombre, m.nota DESC;`)}
      <p>Una buena estrategia para escribir consultas complejas es construirlas paso a paso: primero el <code>FROM</code> con los <code>JOIN</code>, comprobando que salen las filas esperadas; luego el <code>WHERE</code>; después el agrupamiento; y por último las columnas y el orden.</p>`,
      svg: B.flujo("Consultar una relación N:M paso a paso", ["FROM matricula (tabla intermedia)", "JOIN alumno ON m.nia = a.nia", "JOIN asignatura ON m.cod_asig = s.cod_asig", "WHERE, GROUP BY y ORDER BY"], { t: "Atravesar una N:M" }),
    },
    {
      h: "Subconsultas y vistas",
      html: `<p>Una <mark>subconsulta</mark> es una consulta escrita dentro de otra, entre paréntesis. Permite usar el resultado de una consulta como dato de otra. Las más habituales aparecen en el <code>WHERE</code>:</p>
      ${B.code(`-- Matrículas con nota superior a la media general
SELECT nia, cod_asig, nota
FROM matricula
WHERE nota > (SELECT AVG(nota) FROM matricula);

-- Alumnos del aula A12
SELECT nombre FROM alumno
WHERE cod_grupo IN (SELECT cod_grupo FROM grupo WHERE aula = 'A12');

-- Asignaturas en las que nadie ha suspendido
SELECT nombre FROM asignatura s
WHERE NOT EXISTS (SELECT * FROM matricula m
                  WHERE m.cod_asig = s.cod_asig AND m.nota < 5);`)}
      <p>Si la subconsulta devuelve un único valor (como una media), se compara con <code>=</code>, <code>&gt;</code> o <code>&lt;</code>; si devuelve una lista, se usa <code>IN</code>; y <code>EXISTS</code> comprueba si devuelve alguna fila.</p>
      <p>Una <mark>vista</mark> es una consulta guardada con un nombre, que se usa después como si fuera una tabla. No almacena datos propios: cada vez que se consulta, ejecuta su SELECT con los datos actuales.</p>
      ${B.code(`CREATE VIEW notas_completas AS
SELECT a.nombre AS alumno, a.cod_grupo, s.nombre AS asignatura, m.nota
FROM matricula m
JOIN alumno a ON m.nia = a.nia
JOIN asignatura s ON m.cod_asig = s.cod_asig;

SELECT * FROM notas_completas WHERE cod_grupo = '2B';`)}
      <p>Las vistas simplifican las consultas frecuentes, ocultan la complejidad de los JOIN a los usuarios y mejoran la <b>seguridad</b>: se puede dar a una persona permiso para consultar una vista con solo algunas columnas, sin acceso a las tablas completas, que pueden contener datos personales que no necesita.</p>`,
      svg: B.capas("Una vista como capa sobre las tablas", [["Usuario", "SELECT * FROM vista"], ["Vista", "consulta guardada"], ["JOIN", "combina las tablas"], ["Tablas", "alumno, matricula…"]], { t: "Vistas" }),
    },
    {
      h: "SQL desde Python, transacciones y seguridad",
      html: `<p>Las aplicaciones no piden a sus usuarios que escriban SQL: el programa construye las consultas y muestra los resultados. En Python se usa el módulo <code>sqlite3</code> (o bibliotecas equivalentes para MySQL y PostgreSQL):</p>
      ${B.code(`import sqlite3
con = sqlite3.connect("instituto.db")
grupo = input("Grupo: ")
filas = con.execute(
    "SELECT nombre FROM alumno WHERE cod_grupo = ? ORDER BY nombre",
    (grupo,)
).fetchall()
for (nombre,) in filas:
    print(nombre)

with con:                                  # transacción
    con.execute("UPDATE matricula SET nota = ? WHERE nia = ? AND cod_asig = ?",
                (7.5, 101, "TIC2"))
con.close()`)}
      <p>El bloque <code>with con:</code> agrupa las órdenes en una <b>transacción</b>: si todo va bien, hace <code>COMMIT</code> al terminar; si se produce un error, hace <code>ROLLBACK</code> y la base de datos queda como estaba.</p>
      <p>Los signos <code>?</code> son <b>parámetros</b>, y son imprescindibles por seguridad. Si la consulta se construyera pegando el texto del usuario, <code>"... WHERE cod_grupo = '" + grupo + "'"</code>, alguien podría escribir <code>' OR '1'='1</code> y la condición sería siempre verdadera, mostrando los alumnos de todos los grupos; con otros textos podría incluso borrar tablas. Es la <mark>inyección SQL</mark>, una de las vulnerabilidades más explotadas de la web. Con parámetros, el SGBD trata el texto siempre como un dato, nunca como código.</p>
      <p>La seguridad se completa con el <b>principio de mínimo privilegio</b>: cada usuario o aplicación debe tener solo los permisos imprescindibles, que se conceden con <code>GRANT</code> (<code>GRANT SELECT ON notas_completas TO tutor;</code>) y se retiran con <code>REVOKE</code>. Además, hay que hacer copias de seguridad periódicas y proteger los datos personales como exige el RGPD.</p>`,
      svg: B.comparar("Consulta vulnerable frente a consulta parametrizada", ["Vulnerable", ["pega el texto del usuario", "\"… = '\" + grupo + \"'\"", "' OR '1'='1 → todo", "inyección SQL"]], ["Segura", ["usa parámetros ?", "\"… = ?\", (grupo,)", "el texto es solo un dato", "y mínimo privilegio"]]),
    },
  ],
  figura: {
    titulo: "Ideas clave del lenguaje SQL",
    items: [["DDL", "CREATE", "ALTER y DROP:", "estructura"], ["DML", "INSERT", "UPDATE, DELETE", "¡con WHERE!"], ["Consultar", "SELECT", "WHERE, GROUP BY,", "HAVING, ORDER BY"], ["Combinar", "JOIN … ON", "clave ajena =", "clave primaria"]],
  },
  video: B.V("sql-general", "SQL desde cero: aprende SQL en 10 minutos"),
  quiz: [
    ["SQL es un lenguaje…", ["imperativo", "declarativo", "de marcas", "ensamblador"], 1, "Se indica qué se quiere, no cómo."],
    ["CREATE, ALTER y DROP pertenecen al…", ["DML", "DDL", "DCL", "TCL"], 1, "Definición de datos."],
    ["SELECT, INSERT, UPDATE y DELETE pertenecen al…", ["DDL", "DML", "DCL", "HTML"], 1, "Manipulación de datos."],
    ["GRANT y REVOKE sirven para…", ["crear tablas", "dar y quitar permisos", "ordenar", "agrupar"], 1, "DCL."],
    ["En SQL los textos se escriben…", ["sin comillas", "entre comillas simples", "entre corchetes", "entre llaves"], 1, "'Eva'."],
    ["DELETE FROM alumno; sin WHERE…", ["no hace nada", "borra todos los alumnos", "da error siempre", "borra la tabla y su estructura"], 1, "Afecta a todas las filas."],
    ["DROP TABLE alumno…", ["borra solo los datos", "borra la tabla con su estructura y datos", "vacía una columna", "crea una copia"], 1, "Es irreversible."],
    ["SELECT DISTINCT cod_grupo FROM alumno devuelve…", ["todos los alumnos", "cada grupo una sola vez", "el número de grupos", "un error"], 1, "Elimina repetidos."],
    ["Para buscar nombres que empiezan por «Ma» se usa…", ["nombre = 'Ma'", "nombre LIKE 'Ma%'", "nombre IN 'Ma'", "nombre BETWEEN 'Ma'"], 1, "% es cualquier secuencia."],
    ["Para buscar alumnos sin email se escribe…", ["email = NULL", "email IS NULL", "email = ''", "email = 0"], 1, "NULL no se compara con =."],
    ["nota BETWEEN 5 AND 7 incluye…", ["5 y 7", "solo 6", "5 pero no 7", "ninguno de los extremos"], 0, "Incluye los extremos."],
    ["ORDER BY nota DESC ordena…", ["de menor a mayor", "de mayor a menor", "al azar", "por nombre"], 1, "Descendente."],
    ["LIMIT 5 sirve para…", ["borrar 5 filas", "devolver como máximo 5 filas", "agrupar de 5 en 5", "crear 5 tablas"], 1, "Los primeros resultados."],
    ["COUNT(*) devuelve…", ["la suma", "el número de filas", "la media", "el máximo"], 1, "Función agregada."],
    ["AVG(nota) ignora…", ["las notas altas", "los valores NULL", "los ceros", "nada"], 1, "Las agregadas ignoran NULL."],
    ["GROUP BY cod_asig con AVG(nota) calcula…", ["la media general", "la media de cada asignatura", "el número de asignaturas", "las notas ordenadas"], 1, "Una fila por grupo."],
    ["Para filtrar grupos con una función agregada se usa…", ["WHERE", "HAVING", "ORDER BY", "LIMIT"], 1, "Después de agrupar."],
    ["Un INNER JOIN devuelve…", ["todas las filas de ambas tablas", "solo las filas con correspondencia en ambas", "solo la tabla izquierda", "el producto cartesiano"], 1, "Combinación interna."],
    ["Una vista es…", ["una copia de la tabla", "una consulta guardada que se usa como una tabla", "un índice", "un usuario"], 1, "No guarda datos propios."],
    ["Las consultas con parámetros ? evitan…", ["los errores de sintaxis", "la inyección SQL", "los JOIN", "los NULL"], 1, "El texto se trata como dato."],
  ],
  examen: [
    ["¿Qué devuelve SELECT COUNT(*) FROM matricula WHERE nota >= 5 si hay 40 matrículas y 9 suspensos?", ["9", "31", "40", "49"], 1, "40 − 9 = 31 aprobados."],
    ["¿Qué consulta muestra los alumnos del grupo 2B ordenados alfabéticamente?", ["SELECT nombre FROM alumno ORDER BY '2B'", "SELECT nombre FROM alumno WHERE cod_grupo = '2B' ORDER BY nombre", "SELECT nombre WHERE 2B", "SELECT * FROM 2B"], 1, "WHERE y ORDER BY."],
    ["¿Qué hace UPDATE matricula SET nota = nota + 1 WHERE nota < 4?", ["sube un punto a todas las notas", "sube un punto a las notas menores que 4", "pone un 1 a todos", "borra los suspensos"], 1, "Solo a las filas que cumplen la condición."],
    ["¿Qué falla en SELECT cod_asig, AVG(nota) FROM matricula WHERE AVG(nota) > 6 GROUP BY cod_asig?", ["falta ORDER BY", "WHERE no admite funciones agregadas: debe ser HAVING", "AVG no existe", "nada"], 1, "Filtrar grupos es HAVING."],
    ["Con 30 alumnos y 4 grupos, ¿cuántas filas da FROM alumno, grupo sin condición?", ["30", "34", "120", "4"], 2, "Producto cartesiano 30 × 4."],
    ["¿Qué consulta encuentra los grupos sin ningún alumno?", ["INNER JOIN alumno … WHERE a.nia IS NULL", "LEFT JOIN alumno … WHERE a.nia IS NULL", "SELECT * FROM grupo WHERE alumnos = 0", "DELETE FROM grupo"], 1, "Las filas sin correspondencia tienen NULL."],
    ["¿Qué devuelve SELECT nombre FROM alumno WHERE nombre LIKE '_a%'?", ["nombres que empiezan por a", "nombres cuya segunda letra es a", "nombres que terminan en a", "nombres de dos letras"], 1, "_ es un carácter exacto."],
    ["¿Cuál es el orden lógico de ejecución correcto?", ["SELECT, FROM, WHERE", "FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY", "WHERE, FROM, SELECT", "ORDER BY, SELECT, FROM"], 1, "Por eso un alias de SELECT no sirve en WHERE."],
  ],
  feynman: ["Qué es SQL y qué diferencia hay entre DDL, DML y DCL", "Cómo se crea una tabla con sus claves y restricciones", "Por qué UPDATE y DELETE sin WHERE son peligrosos", "Cómo se filtran filas con WHERE, LIKE, IN, BETWEEN e IS NULL", "Qué hacen las funciones agregadas y por qué ignoran NULL", "Qué diferencia hay entre WHERE y HAVING", "Cómo combina JOIN dos tablas y en qué se diferencia LEFT JOIN", "Qué es la inyección SQL y cómo se evita"],
  mapa: ["EL LENGUAJE SQL", [["DDL", "CREATE · ALTER · DROP"], ["DML", "INSERT · UPDATE · DELETE"], ["SELECT", "WHERE · GROUP BY · ORDER BY"], ["Varias tablas", "JOIN · subconsultas · vistas"]]],
  tarjetas: [
    ["SQL", "Lenguaje declarativo estándar de las bases de datos relacionales."],
    ["DDL", "CREATE TABLE, ALTER TABLE, DROP TABLE: definen la estructura."],
    ["DML", "INSERT INTO, UPDATE … SET, DELETE FROM, SELECT."],
    ["DCL y transacciones", "GRANT y REVOKE; COMMIT y ROLLBACK."],
    ["SELECT básico", "SELECT columnas FROM tabla; *, AS, DISTINCT."],
    ["WHERE", "=, <>, AND, OR, BETWEEN, IN, LIKE ('M%', '_a%'), IS NULL."],
    ["ORDER BY y LIMIT", "ASC/DESC; LIMIT n OFFSET m."],
    ["Agregadas", "COUNT, SUM, AVG, MIN, MAX; ignoran NULL."],
    ["GROUP BY y HAVING", "Agrupar y filtrar grupos (HAVING admite agregadas)."],
    ["JOIN", "FROM a JOIN b ON a.fk = b.pk; LEFT JOIN incluye las filas sin pareja."],
    ["Subconsulta y vista", "Consulta dentro de otra / consulta guardada con nombre."],
    ["Inyección SQL", "Se evita con consultas parametrizadas (?) y mínimo privilegio."],
  ],
  ejemplos: [
    ["Crea la tabla asignatura con código (clave), nombre obligatorio y horas semanales entre 1 y 6, e inserta dos asignaturas.", ["Tipos: texto corto para el código, texto para el nombre y entero para las horas.", "Restricciones: PRIMARY KEY, NOT NULL y CHECK.", "INSERT con lista de columnas y dos filas."], "CREATE TABLE asignatura (\n  cod_asig VARCHAR(6) PRIMARY KEY,\n  nombre   VARCHAR(50) NOT NULL,\n  horas    INTEGER CHECK (horas BETWEEN 1 AND 6)\n);\nINSERT INTO asignatura (cod_asig, nombre, horas)\nVALUES ('MAT2', 'Matemáticas II', 4), ('TIC2', 'TIC II', 4);"],
    ["Muestra el nombre y la fecha de nacimiento de los alumnos nacidos en 2008, del más joven al más mayor.", ["Filtrar por un intervalo de fechas con BETWEEN.", "El más joven es el de fecha más reciente: orden descendente."], "SELECT nombre, fecha_nac\nFROM alumno\nWHERE fecha_nac BETWEEN '2008-01-01' AND '2008-12-31'\nORDER BY fecha_nac DESC;"],
    ["Calcula para cada asignatura el número de matriculados, la nota media redondeada a un decimal y la nota máxima, solo para las asignaturas con más de 20 alumnos.", ["Agrupar las matrículas por cod_asig.", "Calcular COUNT, AVG y MAX.", "Filtrar los grupos con HAVING."], "SELECT cod_asig, COUNT(*) AS alumnos,\n       ROUND(AVG(nota), 1) AS media, MAX(nota) AS maxima\nFROM matricula\nGROUP BY cod_asig\nHAVING COUNT(*) > 20\nORDER BY media DESC;"],
    ["Muestra el nombre de cada alumno con el aula de su grupo, incluidos los alumnos que aún no tienen grupo.", ["Combinar alumno y grupo por cod_grupo.", "Para no perder los alumnos sin grupo, LEFT JOIN desde alumno.", "Su aula saldrá NULL; COALESCE pone un texto."], "SELECT a.nombre, COALESCE(g.aula, 'sin grupo') AS aula\nFROM alumno a\nLEFT JOIN grupo g ON a.cod_grupo = g.cod_grupo\nORDER BY a.nombre;"],
    ["Obtén el nombre del alumno o alumnos con la mejor nota de TIC II.", ["Una subconsulta calcula la nota máxima de TIC2.", "La consulta principal busca las matrículas con esa nota y une con alumno.", "Así salen todos los empatados."], "SELECT a.nombre, m.nota\nFROM matricula m\nJOIN alumno a ON m.nia = a.nia\nWHERE m.cod_asig = 'TIC2'\n  AND m.nota = (SELECT MAX(nota) FROM matricula WHERE cod_asig = 'TIC2');"],
    ["Escribe en Python una función que reciba un NIA y devuelva sus asignaturas y notas, de forma segura.", ["Consulta con dos JOIN atravesando la tabla matricula.", "El NIA va como parámetro ?, nunca concatenado.", "fetchall devuelve una lista de tuplas."], "import sqlite3\ndef boletin(nia):\n    with sqlite3.connect(\"instituto.db\") as con:\n        return con.execute(\n            \"\"\"SELECT s.nombre, m.nota FROM matricula m\n               JOIN asignatura s ON m.cod_asig = s.cod_asig\n               WHERE m.nia = ? ORDER BY s.nombre\"\"\", (nia,)).fetchall()"],
  ],
  errores: [
    "Ejecutar UPDATE o DELETE sin WHERE, modificando o borrando todas las filas.",
    "Comparar con NULL usando = en lugar de IS NULL.",
    "Usar funciones agregadas en WHERE en lugar de en HAVING.",
    "Pedir en el SELECT de una consulta agrupada columnas que no están en el GROUP BY.",
    "Olvidar la condición ON de un JOIN y obtener el producto cartesiano.",
    "Construir consultas pegando textos del usuario, lo que permite la inyección SQL.",
  ],
  ejercicios: {
    b: [
      ["Clasifica cada orden en DDL, DML o DCL: SELECT, CREATE TABLE, GRANT, DELETE, ALTER TABLE, INSERT.", "DML, DDL, DCL, DML, DDL y DML."],
      ["Escribe la orden para crear la tabla grupo con cod_grupo (clave), nivel (obligatorio) y aula.", "CREATE TABLE grupo (\n  cod_grupo VARCHAR(5) PRIMARY KEY,\n  nivel VARCHAR(20) NOT NULL,\n  aula VARCHAR(5)\n);"],
      ["Inserta en alumno a Leo Pérez, NIA 102, nacido el 2 de mayo de 2008, del grupo 2A.", "INSERT INTO alumno (nia, nombre, fecha_nac, cod_grupo)\nVALUES (102, 'Leo Pérez', '2008-05-02', '2A');"],
      ["Cambia el aula del grupo 2B a la C03.", "UPDATE grupo SET aula = 'C03' WHERE cod_grupo = '2B';"],
      ["Muestra todos los datos de la tabla asignatura.", "SELECT * FROM asignatura;"],
      ["Muestra el nombre de las asignaturas de más de 3 horas semanales.", "SELECT nombre FROM asignatura WHERE horas > 3;"],
      ["Muestra los alumnos cuyo nombre contiene «ana» en cualquier posición.", "SELECT nombre FROM alumno WHERE nombre LIKE '%ana%';"],
      ["Muestra las matrículas de Matemáticas II ordenadas de mayor a menor nota.", "SELECT * FROM matricula WHERE cod_asig = 'MAT2' ORDER BY nota DESC;"],
      ["¿Cuántos alumnos hay en total?", "SELECT COUNT(*) FROM alumno;"],
      ["Calcula la nota media de todas las matrículas.", "SELECT AVG(nota) FROM matricula;"],
      ["Explica la diferencia entre DELETE FROM alumno y DROP TABLE alumno.", "DELETE FROM alumno borra todas las filas pero la tabla sigue existiendo, vacía. DROP TABLE alumno elimina la tabla entera, con su estructura y sus datos."],
      ["Muestra los alumnos que no tienen email registrado.", "SELECT nombre FROM alumno WHERE email IS NULL;"],
    ],
    m: [
      ["Añade a la tabla alumno una columna teléfono de hasta 15 caracteres.", "ALTER TABLE alumno ADD telefono VARCHAR(15);"],
      ["Muestra los alumnos de los grupos 2A y 2C nacidos antes de 2008.", "SELECT nombre FROM alumno\nWHERE cod_grupo IN ('2A', '2C') AND fecha_nac < '2008-01-01';"],
      ["Muestra las cinco mejores notas de TIC II con el NIA del alumno.", "SELECT nia, nota FROM matricula\nWHERE cod_asig = 'TIC2'\nORDER BY nota DESC\nLIMIT 5;"],
      ["Cuenta cuántos suspensos (nota < 5) hay en cada asignatura.", "SELECT cod_asig, COUNT(*) AS suspensos\nFROM matricula\nWHERE nota < 5\nGROUP BY cod_asig;"],
      ["Muestra las asignaturas cuya nota media es inferior a 6.", "SELECT cod_asig, AVG(nota) AS media\nFROM matricula\nGROUP BY cod_asig\nHAVING AVG(nota) < 6;"],
      ["Muestra el número de alumnos de cada grupo, de mayor a menor.", "SELECT cod_grupo, COUNT(*) AS alumnos\nFROM alumno\nGROUP BY cod_grupo\nORDER BY alumnos DESC;"],
      ["Muestra el nombre de cada alumno con el nivel y el aula de su grupo.", "SELECT a.nombre, g.nivel, g.aula\nFROM alumno a\nJOIN grupo g ON a.cod_grupo = g.cod_grupo;"],
      ["Muestra el nombre del alumno, el de la asignatura y la nota de todas las matrículas aprobadas.", "SELECT a.nombre, s.nombre, m.nota\nFROM matricula m\nJOIN alumno a ON m.nia = a.nia\nJOIN asignatura s ON m.cod_asig = s.cod_asig\nWHERE m.nota >= 5;"],
      ["Calcula la nota media de cada alumno (con su nombre) y muestra solo los que tienen media de sobresaliente.", "SELECT a.nombre, ROUND(AVG(m.nota), 2) AS media\nFROM matricula m\nJOIN alumno a ON m.nia = a.nia\nGROUP BY a.nia, a.nombre\nHAVING AVG(m.nota) >= 9;"],
      ["Muestra las asignaturas en las que no hay ningún alumno matriculado.", "SELECT s.nombre\nFROM asignatura s\nLEFT JOIN matricula m ON m.cod_asig = s.cod_asig\nWHERE m.cod_asig IS NULL;"],
      ["Muestra los alumnos con alguna nota superior a la media general, sin repetir.", "SELECT DISTINCT a.nombre\nFROM alumno a JOIN matricula m ON a.nia = m.nia\nWHERE m.nota > (SELECT AVG(nota) FROM matricula);"],
      ["Explica por qué esta consulta da error o un resultado sin sentido: SELECT nombre, COUNT(*) FROM alumno.", "Mezcla una columna normal (nombre) con una función agregada sin GROUP BY. COUNT(*) resume todas las filas en una, pero hay muchos nombres: el estándar lo prohíbe y algunos SGBD devuelven un nombre cualquiera."],
      ["Crea una vista suspensos con el nombre del alumno, la asignatura y la nota de las matrículas suspensas.", "CREATE VIEW suspensos AS\nSELECT a.nombre AS alumno, s.nombre AS asignatura, m.nota\nFROM matricula m\nJOIN alumno a ON m.nia = a.nia\nJOIN asignatura s ON m.cod_asig = s.cod_asig\nWHERE m.nota < 5;"],
      ["Sube medio punto a todas las notas de TIC II entre 4,5 y 4,99, sin que ninguna supere el 10. Escribe antes el SELECT de comprobación.", "SELECT * FROM matricula WHERE cod_asig = 'TIC2' AND nota BETWEEN 4.5 AND 4.99;\nUPDATE matricula SET nota = nota + 0.5\nWHERE cod_asig = 'TIC2' AND nota BETWEEN 4.5 AND 4.99;\n(Como la nota máxima resultante es 5,49, no hay riesgo de superar el 10.)"],
    ],
    a: [
      ["Muestra para cada grupo su nota media, su número de alumnos distintos con matrícula y su mejor nota, ordenado por media.", "SELECT a.cod_grupo, ROUND(AVG(m.nota), 2) AS media,\n       COUNT(DISTINCT a.nia) AS alumnos, MAX(m.nota) AS mejor\nFROM matricula m\nJOIN alumno a ON m.nia = a.nia\nGROUP BY a.cod_grupo\nORDER BY media DESC;"],
      ["Muestra los alumnos que han aprobado todas sus asignaturas (y tienen al menos una matrícula).", "SELECT a.nombre\nFROM alumno a JOIN matricula m ON a.nia = m.nia\nGROUP BY a.nia, a.nombre\nHAVING MIN(m.nota) >= 5;"],
      ["Muestra para cada alumno el número de suspensos, incluidos los que tienen 0.", "SELECT a.nombre,\n       COUNT(CASE WHEN m.nota < 5 THEN 1 END) AS suspensos\nFROM alumno a\nLEFT JOIN matricula m ON m.nia = a.nia\nGROUP BY a.nia, a.nombre;\nCOUNT solo cuenta los valores no nulos que devuelve CASE."],
      ["Encuentra la asignatura con la nota media más alta usando una subconsulta en lugar de LIMIT.", "SELECT cod_asig, AVG(nota) AS media\nFROM matricula\nGROUP BY cod_asig\nHAVING AVG(nota) = (SELECT MAX(med) FROM\n  (SELECT AVG(nota) AS med FROM matricula GROUP BY cod_asig) AS t);"],
      ["Una consulta tarda mucho en buscar alumnos por nombre en una tabla de un millón de filas. ¿Qué harías? Escribe la orden.", "Crear un índice sobre la columna nombre, para que el SGBD no recorra toda la tabla: CREATE INDEX idx_alumno_nombre ON alumno(nombre); Las búsquedas pasan de O(n) a O(log n), a cambio de algo más de espacio y de inserciones algo más lentas."],
      ["Una transferencia de 100 € entre dos cuentas consta de dos UPDATE. Escríbela como transacción en SQL y explica qué ocurre si falla el segundo.", "BEGIN TRANSACTION;\nUPDATE cuenta SET saldo = saldo - 100 WHERE id = 1;\nUPDATE cuenta SET saldo = saldo + 100 WHERE id = 2;\nCOMMIT;\nSi el segundo UPDATE falla, se ejecuta ROLLBACK y se deshace también el primero: el dinero no desaparece (atomicidad)."],
      ["Explica qué ocurre con esta consulta si el usuario escribe 2A' OR '1'='1 y cómo se corrige: cur.execute(\"SELECT * FROM alumno WHERE cod_grupo = '\" + g + \"'\").", "La orden queda SELECT * FROM alumno WHERE cod_grupo = '2A' OR '1'='1', que es verdadera para todas las filas y muestra todos los alumnos (fuga de datos). Se corrige con parámetros: cur.execute(\"SELECT * FROM alumno WHERE cod_grupo = ?\", (g,))."],
      ["Programa en Python un pequeño informe que muestre, para cada asignatura, su nombre y el porcentaje de aprobados.", "import sqlite3\ncon = sqlite3.connect(\"instituto.db\")\nsql = \"\"\"SELECT s.nombre,\n          ROUND(100.0 * SUM(CASE WHEN m.nota >= 5 THEN 1 ELSE 0 END) / COUNT(*), 1)\n         FROM matricula m JOIN asignatura s ON m.cod_asig = s.cod_asig\n         GROUP BY s.cod_asig, s.nombre\"\"\"\nfor nombre, pct in con.execute(sql):\n    print(f\"{nombre:<25}{pct:>6}% aprobados\")"],
      ["Diseña los permisos de la base de datos para tres perfiles: dirección (todo), tutor (consultar notas de su grupo) y secretaría (gestionar alumnos pero no notas).", "Dirección: GRANT ALL ON todas las tablas. Tutor: crear una vista notas_2B filtrada por su grupo y GRANT SELECT ON notas_2B TO tutor_2b. Secretaría: GRANT SELECT, INSERT, UPDATE ON alumno, grupo TO secretaria, sin permisos sobre matricula. Se aplica el principio de mínimo privilegio."],
      ["Debate: un periódico publica un análisis de datos hecho con SQL sobre los contratos públicos de un ayuntamiento. ¿Qué precauciones debe tomar para que las conclusiones sean fiables y respeten la privacidad?", "Usar datos oficiales y citar la fuente; revisar duplicados, NULL y errores antes de calcular; documentar las consultas para que puedan reproducirse; no confundir correlación con causalidad; contrastar con las personas implicadas; y anonimizar o no publicar datos personales innecesarios de particulares, respetando el RGPD."],
    ],
  },
  glosario: [
    ["SQL", "Lenguaje estándar para definir, manipular y consultar bases de datos relacionales."],
    ["DDL", "Parte de SQL que define la estructura: CREATE, ALTER y DROP."],
    ["DML", "Parte de SQL que manipula los datos: INSERT, UPDATE, DELETE y SELECT."],
    ["DCL", "Parte de SQL que controla los permisos: GRANT y REVOKE."],
    ["Consulta", "Orden SELECT que obtiene datos de la base de datos."],
    ["Alias", "Nombre alternativo para una columna o tabla, con AS."],
    ["NULL", "Marca de valor desconocido o ausente."],
    ["Patrón", "Texto con comodines (% y _) usado con LIKE."],
    ["Función agregada", "Función que resume muchas filas en un valor: COUNT, SUM, AVG, MIN, MAX."],
    ["GROUP BY", "Cláusula que agrupa filas con el mismo valor."],
    ["HAVING", "Cláusula que filtra los grupos."],
    ["JOIN", "Combinación de dos tablas según una condición."],
    ["Producto cartesiano", "Combinación de cada fila de una tabla con todas las de otra."],
    ["Subconsulta", "Consulta incluida dentro de otra."],
    ["Vista", "Consulta guardada con nombre que se usa como una tabla."],
    ["Índice", "Estructura que acelera las búsquedas en una columna."],
    ["Inyección SQL", "Ataque que introduce código SQL a través de los datos de un usuario."],
  ],
  situacion: {
    titulo: "Analistas de datos del instituto",
    reto: "Por parejas, cread en SQLite una base de datos de notas con datos ficticios (al menos 3 grupos, 60 alumnos y 6 asignaturas) y responded con SQL a las preguntas de un equipo directivo imaginario, presentando un informe con conclusiones.",
    pasos: [
      "Cread las tablas con sus claves y restricciones a partir del esquema relacional del tema anterior.",
      "Generad datos ficticios con un pequeño programa en Python e insertadlos con consultas parametrizadas.",
      "Escribid al menos diez consultas que respondan a preguntas reales: medias por grupo y asignatura, suspensos, mejores notas, alumnos sin matrícula…",
      "Cread dos vistas útiles para las tutorías y comprobad los resultados con casos que conozcáis.",
      "Exportad los resultados a CSV, haced gráficos con una hoja de cálculo y redactad un informe con conclusiones.",
    ],
    producto: "Base de datos SQLite, fichero .sql con las consultas comentadas e informe con gráficos y conclusiones.",
    evaluacion: [
      "Las tablas y restricciones se crean correctamente con DDL.",
      "Las consultas son correctas y usan WHERE, agrupaciones, JOIN y subconsultas cuando corresponde.",
      "El acceso desde Python usa parámetros y transacciones.",
      "Las conclusiones se apoyan en los datos y se comunican con claridad.",
    ],
  },
  familias: [
    "Pedidle que os muestre cómo hace una consulta y qué pregunta responde.",
    "Pensad juntos qué preguntas podríais responder con los datos de gastos de casa organizados en tablas.",
    "Comentad noticias de periodismo de datos y de dónde salen sus cifras.",
    "Hablad de por qué es importante que las webs protejan las bases de datos con nuestros datos.",
  ],
  saberes: "Lenguaje SQL: sublenguajes DDL, DML y DCL, creación y modificación de tablas con restricciones, inserción, modificación y borrado de datos, consultas con SELECT, filtros (WHERE, LIKE, IN, BETWEEN, IS NULL), ordenación y límite, funciones de fila y agregadas, agrupaciones con GROUP BY y HAVING, combinaciones de tablas (JOIN y LEFT JOIN), subconsultas, vistas, índices, transacciones, acceso desde Python y seguridad frente a la inyección SQL (Tecnologías de la Información y la Comunicación II, optativa de 2º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Practicar en el navegador con una base de datos SQLite de ejemplo antes de instalar nada.",
    "Plantear «preguntas de la vida real» y que los alumnos las traduzcan a SQL en parejas.",
    "Hacer la consulta a mano sobre tablas impresas pequeñas para entender JOIN y GROUP BY.",
    "Demostrar en un entorno controlado cómo funciona una inyección SQL y cómo la evitan los parámetros.",
  ],
  fuentes: [
    { t: "Documentación de SQLite: lenguaje SQL", url: "https://www.sqlite.org/lang.html" },
    { t: "DB Browser for SQLite (programa libre)", url: "https://sqlitebrowser.org/" },
    { t: "OWASP: prevención de la inyección SQL", url: "https://owasp.org/www-community/attacks/SQL_Injection" },
  ],
}));
