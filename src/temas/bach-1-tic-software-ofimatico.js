// Tecnologías de la Información y la Comunicación I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L38");

// Hoja de cálculo con referencias: A1, $B$1 y una fórmula copiada.
const hoja = () => {
  const cols = ["", "A", "B", "C"], filas = [["1", "Precio", "IVA", "21 %"], ["2", "100", "=A2*$C$1", "21"], ["3", "250", "=A3*$C$1", "52,5"], ["4", "40", "=A4*$C$1", "8,4"]];
  const x0 = 12, cw = [24, 70, 82, 60], y0 = 32, rh = 26;
  const xs = cw.reduce((a, w, i) => (a.push(i ? a[i - 1] + cw[i - 1] : x0), a), []);
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Hoja de cálculo: la fórmula =A2*$C$1 copiada hacia abajo cambia A2 por A3 y A4 pero mantiene fija la celda $C$1">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    ${B.tx(130, 20, "Referencias relativas y absolutas", { fs: 12.5, maxW: 236, bold: true, font: B.D })}
    ${cols.map((c, j) => `<rect x="${xs[j]}" y="${y0}" width="${cw[j]}" height="${rh - 6}" fill="var(--line)"/>${B.tx(xs[j] + cw[j] / 2, y0 + 14, c, { fs: 10, maxW: cw[j] - 4, bold: true })}`).join("")}
    ${filas.map((f, i) => f.map((v, j) => { const y = y0 + rh - 6 + i * rh, hi = (j === 3 && i === 0) ? "var(--sun)" : (j === 2 && i > 0 ? "var(--pen)" : "var(--ink)");
      return `<rect x="${xs[j]}" y="${y}" width="${cw[j]}" height="${rh}" fill="${j === 0 ? "var(--line)" : "var(--card)"}" stroke="var(--line)"/>${B.tx(xs[j] + cw[j] / 2, y + 17, v, { fs: 10, maxW: cw[j] - 6, bold: j !== 1, color: hi })}`; }).join("")).join("")}
    <path d="M232 52 V 132" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3"/>
    ${B.tx(130, 168, "A2 → A3 → A4 cambia; $C$1 queda fija", { fs: 10, maxW: 236, bold: true, color: "var(--red)" })}
  </svg>`;
};

// Dos tablas relacionadas por una clave.
const relacional = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Dos tablas relacionadas: ALUMNOS con clave primaria id y PRÉSTAMOS con clave foránea id_alumno, relación uno a muchos">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${B.tx(130, 20, "Relación uno a muchos", { fs: 13, maxW: 236, bold: true, font: B.D })}
  <rect x="12" y="34" width="104" height="120" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/><rect x="12" y="34" width="104" height="24" rx="8" fill="var(--pen)"/>${B.tx(64, 51, "ALUMNOS", { fs: 11, maxW: 96, bold: true, color: "#fff" })}
  ${[["PK id", true], ["nombre", false], ["curso", false], ["email", false]].map(([t, k], i) => B.tx(22, 78 + i * 20, t, { fs: 10.5, maxW: 90, bold: k, color: k ? "var(--sun)" : "var(--ink)", anchor: "start" })).join("")}
  <rect x="144" y="34" width="104" height="120" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/><rect x="144" y="34" width="104" height="24" rx="8" fill="var(--red)"/>${B.tx(196, 51, "PRÉSTAMOS", { fs: 11, maxW: 96, bold: true, color: "#fff" })}
  ${[["PK id_prest", true], ["id_alumno", false], ["libro", false], ["fecha", false]].map(([t, k], i) => B.tx(154, 78 + i * 20, t, { fs: 10.5, maxW: 90, bold: true, color: k ? "var(--sun)" : (i === 1 ? "var(--leaf)" : "var(--ink)"), anchor: "start" })).join("")}
  <path d="M60 74 H 130 V 94 H 150" stroke="var(--leaf)" stroke-width="2.2" fill="none"/>${B.tx(126, 70, "1", { fs: 11, maxW: 10, bold: true, color: "var(--leaf)" })}${B.tx(140, 108, "∞", { fs: 13, maxW: 14, bold: true, color: "var(--leaf)" })}
  ${B.tx(130, 172, "clave primaria → clave foránea", { fs: 10, maxW: 236, color: "var(--leaf)", bold: true })}
</svg>`;

module.exports = B.tema({
  titulo: "Software ofimático",
  minutos: 120,
  objetivos: [
    "Elaborar documentos de texto estructurados con estilos, índices, tablas, referencias y revisión colaborativa",
    "Resolver problemas con hojas de cálculo usando fórmulas, referencias, funciones, gráficos y filtros",
    "Diseñar una base de datos relacional sencilla y obtener información con consultas",
    "Crear presentaciones eficaces y elegir formatos y herramientas de colaboración en la nube",
  ],
  claves: ["ofimática", "procesador de textos", "estilo", "hoja de cálculo", "celda", "fórmula", "referencia absoluta", "función", "gráfico", "base de datos", "clave primaria", "presentación"],
  pregunta: {
    texto: "Una profesora tarda una tarde entera en calcular a mano las notas medias de cinco grupos. Otra lo hace en dos minutos y además genera un gráfico por grupo. ¿Qué sabe hacer la segunda?",
    respuesta: "Domina la <b>hoja de cálculo</b>: escribe una <b>fórmula</b> una vez, con las <b>referencias</b> adecuadas, y la copia a cientos de celdas; usa <b>funciones</b> como PROMEDIO o SI y crea <b>gráficos</b> que se actualizan solos. La <mark>ofimática bien usada</mark> no es escribir más rápido: es automatizar el trabajo repetitivo y presentar la información con claridad.",
  },
  lectura: {
    titulo: "La oficina que cabe en un bolsillo",
    html: `<p>En los años setenta, una oficina estaba llena de máquinas de escribir, archivadores metálicos, calculadoras y papel de calco. Corregir una errata en un informe obligaba a mecanografiar de nuevo la página entera; hacer un presupuesto suponía horas de cálculos que había que repetir si cambiaba un solo precio.</p>
    <p>En 1979 apareció VisiCalc, la primera hoja de cálculo para ordenadores personales. Fue tan útil que mucha gente compró un ordenador solo para usarla. Pocos años después llegaron los procesadores de textos con pantalla gráfica, que mostraban el documento tal como iba a imprimirse, y los programas de presentaciones, que jubilaron las transparencias.</p>
    <p>Hoy esas herramientas, la <b>ofimática</b>, están en el móvil, funcionan en el navegador y permiten que diez personas escriban a la vez el mismo documento desde lugares distintos. Las usarás en todos tus estudios y en casi cualquier trabajo. Pero hay una gran diferencia entre usarlas «a mano» y dominarlas: estilos que generan un índice automáticamente, fórmulas que se copian a mil filas, bases de datos que responden preguntas en segundos. Este tema te enseña a pasar de un nivel a otro.</p>`,
  },
  secciones: [4, 5, 4],
  bloques: [
    {
      h: "La ofimática: suites, formatos y trabajo en la nube",
      html: `<p>La <b>ofimática</b> es el conjunto de aplicaciones para crear, editar, organizar y comunicar información en el trabajo y el estudio. Suelen distribuirse en <b>suites</b> o paquetes que incluyen procesador de textos, hoja de cálculo, presentaciones, base de datos y, a veces, dibujo o correo:</p>
      <ul><li><b>Microsoft 365</b> (Word, Excel, PowerPoint, Access): propietaria, de pago o por suscripción.</li>
      <li><b>LibreOffice</b> (Writer, Calc, Impress, Base): libre y gratuita.</li>
      <li><b>Google Workspace</b> (Documentos, Hojas de cálculo, Presentaciones): en la nube, desde el navegador.</li>
      <li>Otras: Apple iWork (Pages, Numbers, Keynote) u OnlyOffice.</li></ul>
      <p>Cada programa guarda sus documentos en un <b>formato</b>. Conviene distinguir los formatos <b>abiertos</b>, cuya especificación es pública, como <b>ODF</b> (.odt, .ods, .odp), recomendados para las administraciones y para conservar documentos a largo plazo, y los formatos de Microsoft (.docx, .xlsx, .pptx), muy extendidos. El <b>PDF</b> sirve para distribuir documentos finales que se ven igual en cualquier equipo; el <b>CSV</b>, para intercambiar datos en forma de tabla entre programas.</p>
      <p>Las suites en la <b>nube</b> permiten la <b>edición colaborativa</b> en tiempo real: varias personas escriben a la vez y ven los cambios de los demás. Incluyen <b>comentarios</b>, sugerencias, <b>historial de versiones</b> (para recuperar cualquier estado anterior) y <b>permisos</b> para compartir solo lectura, comentario o edición. Son muy útiles para trabajos en grupo, pero hay que gestionar bien con quién se comparte y no guardar en ellas datos personales sensibles sin protección.</p>`,
      svg: B.rejilla("Equivalencias entre suites ofimáticas", ["Tarea", "LibreOffice", "Microsoft"], [["Textos", "Writer .odt", "Word .docx"], ["Cálculo", "Calc .ods", "Excel .xlsx"], ["Presentación", "Impress .odp", "PowerPoint .pptx"], ["Base de datos", "Base .odb", "Access .accdb"]], { t: "Suites ofimáticas" }),
    },
    {
      h: "El procesador de textos: formato del documento",
      html: `<p>Un <b>procesador de textos</b> permite escribir, editar, dar formato e imprimir documentos. Para trabajar bien hay que entender sus tres niveles de formato:</p>
      <ul><li><b>Formato de carácter</b>: tipo de letra (fuente), tamaño en puntos, negrita, cursiva, subrayado, color, superíndice y subíndice. Las fuentes <b>con serifa</b> (con remates, como Times) son cómodas para textos largos impresos; las <b>sin serifa</b> (como Arial), para pantallas y títulos.</li>
      <li><b>Formato de párrafo</b>: alineación (izquierda, centrada, derecha o justificada), sangrías, interlineado, espaciado antes y después, listas numeradas o con viñetas, tabulaciones y bordes.</li>
      <li><b>Formato de página</b>: tamaño del papel (A4), orientación vertical u horizontal, márgenes, columnas, <b>encabezado y pie de página</b>, numeración de páginas y saltos de página o de sección.</li></ul>
      <p>Un error frecuente es dar formato con espacios y saltos de línea repetidos: pulsar «Intro» muchas veces para cambiar de página o la barra espaciadora para centrar. Al añadir texto, todo se descoloca. Lo correcto es usar los <b>saltos de página</b>, el espaciado de párrafo, la alineación y las tabulaciones.</p>
      <p>Las herramientas de <b>revisión</b> ayudan a la calidad del texto: corrector ortográfico y gramatical, sinónimos, buscar y reemplazar, y contar palabras. Ver los <b>caracteres no imprimibles</b> (¶) permite descubrir espacios y saltos ocultos que causan problemas de formato.</p>`,
      svg: B.capas("Niveles de formato en un procesador de textos", [["Página", "márgenes, encabezado"], ["Párrafo", "alineación, sangría"], ["Carácter", "fuente, tamaño"]], { t: "Tres niveles de formato" }),
      video: { id: "ttO5rN8nnNI", titulo: "Procesadores de textos: ¿qué son?", canal: "El Salón de Informática", vistas: 142390 },
    },
    {
      h: "Estilos, índices y documentos largos",
      html: `<p>Un <mark>estilo</mark> es un conjunto de formatos con nombre (por ejemplo, «Título 1»: Arial, 16 puntos, negrita, azul, 12 puntos de espacio antes) que se aplica de una vez a un párrafo. Usar estilos tiene grandes ventajas:</p>
      <ul><li><b>Coherencia</b>: todos los títulos del mismo nivel tienen el mismo aspecto.</li>
      <li><b>Rapidez</b>: si se modifica el estilo, cambian a la vez todos los párrafos que lo usan.</li>
      <li><b>Estructura</b>: los estilos de título (Título 1, 2, 3) definen la jerarquía del documento, que se ve en el <b>navegador</b> o panel de esquema.</li>
      <li><b>Índice automático</b>: con un clic se genera la tabla de contenidos con los títulos y sus números de página, y se actualiza si el documento cambia.</li>
      <li><b>Accesibilidad</b>: los lectores de pantalla usan los títulos para navegar.</li></ul>
      <p>En trabajos largos, como un trabajo de investigación, se usan además:</p>
      <ul><li><b>Notas al pie</b> y <b>notas finales</b>, numeradas automáticamente.</li>
      <li><b>Bibliografía</b> y citas con un formato normalizado (APA, por ejemplo).</li>
      <li><b>Títulos de figuras y tablas</b> numerados e índice de ilustraciones.</li>
      <li><b>Referencias cruzadas</b> («véase la figura 3, página 12»), que se actualizan solas.</li>
      <li><b>Secciones</b>, que permiten cambiar la orientación o la numeración en una parte del documento.</li>
      <li><b>Plantillas</b>: documentos modelo con estilos, logotipos y estructura que sirven de base para crear otros iguales.</li></ul>
      <p>Al terminar, se exporta a <b>PDF</b> para entregarlo: conserva el formato y los enlaces del índice.</p>`,
      svg: B.flujo("Pasos para un documento largo bien estructurado", ["Aplicar estilos de título y de texto", "Insertar figuras con títulos numerados", "Añadir notas, citas y bibliografía", "Generar el índice automático", "Revisar y exportar a PDF"], { t: "Documento largo" }),
    },
    {
      h: "Tablas, objetos, combinación y revisión colaborativa",
      html: `<p>Las <b>tablas</b> organizan información en filas y columnas. Se pueden combinar o dividir celdas, repetir la fila de encabezado en cada página, aplicar estilos de tabla y ordenar su contenido. Deben usarse para datos tabulares, no para maquetar el texto.</p>
      <p>En un documento se insertan también <b>imágenes</b>, formas, gráficos, ecuaciones y <b>enlaces</b>. Las imágenes se colocan con un <b>ajuste del texto</b> (en línea con el texto, cuadrado, detrás o delante) y conviene darles un <b>texto alternativo</b> que describa su contenido para las personas que usan lectores de pantalla.</p>
      <p>La <b>combinación de correspondencia</b> genera muchos documentos personalizados a partir de una plantilla y una fuente de datos (una hoja de cálculo o una base de datos). Por ejemplo, una carta con los campos «Nombre» y «Nota» produce automáticamente una carta para cada alumno de la lista. También sirve para etiquetas, sobres o diplomas.</p>
      <p>Cuando varias personas trabajan sobre un documento se usa la <b>revisión</b>:</p>
      <ul><li><b>Control de cambios</b>: cada inserción o eliminación queda marcada con el nombre de su autor, y luego se aceptan o rechazan una a una.</li>
      <li><b>Comentarios</b>: anotaciones al margen que no modifican el texto.</li>
      <li><b>Comparar documentos</b>: muestra las diferencias entre dos versiones.</li></ul>
      <p>Antes de enviar un documento conviene revisar sus <b>propiedades</b> y metadatos (autor, comentarios ocultos, cambios sin aceptar), que pueden revelar información que no queremos compartir.</p>`,
      svg: B.flujo("Combinación de correspondencia", ["Plantilla con campos «Nombre», «Nota»", "Fuente de datos: hoja con la lista", "Vincular campos y datos", "Vista previa de cada registro", "Generar los documentos personalizados"], { t: "Combinar correspondencia" }),
    },
    {
      h: "La hoja de cálculo: celdas, datos y fórmulas",
      html: `<p>Una <b>hoja de cálculo</b> es una cuadrícula de <b>celdas</b> organizadas en <b>columnas</b> (letras: A, B, C…) y <b>filas</b> (números: 1, 2, 3…). Cada celda se identifica por su <b>referencia</b>: B3 es la celda de la columna B y la fila 3. Un conjunto de celdas contiguas es un <b>rango</b>: A1:C5. Un archivo, llamado <b>libro</b>, contiene varias <b>hojas</b>.</p>
      <p>En una celda se puede escribir:</p>
      <ul><li><b>Texto</b>: etiquetas y nombres; se alinea a la izquierda.</li>
      <li><b>Números</b>, fechas y horas, que se alinean a la derecha y pueden tener <b>formato</b> (decimales, moneda, porcentaje, fecha). El formato cambia cómo se ve el número, no su valor.</li>
      <li><b>Fórmulas</b>: empiezan siempre por el signo <b>=</b> y calculan un resultado a partir de valores y de otras celdas: <code>=B2*C2</code>.</li></ul>
      <p>Los <b>operadores</b> aritméticos son + − * / y ^ (potencia), y se aplican con la <b>prioridad</b> habitual: primero potencias, después multiplicaciones y divisiones, por último sumas y restas; los paréntesis cambian el orden. <code>=2+3*4</code> da 14, y <code>=(2+3)*4</code>, 20. Los operadores de comparación (=, &lt;&gt;, &lt;, &gt;, &lt;=, &gt;=) devuelven VERDADERO o FALSO.</p>
      <p>La gran ventaja de la hoja de cálculo es que las fórmulas se <b>recalculan</b> automáticamente: si cambia un dato, se actualizan todos los resultados que dependen de él. Por eso, en lugar de escribir números en las fórmulas, se escriben referencias a celdas con los datos.</p>`,
      svg: B.cajas("Elementos de una hoja de cálculo", [["Celda", "B3"], ["Rango", "A1:C5"], ["Fórmula", "=B2*C2"], ["Función", "=SUMA(B2:B9)"]], { t: "Hoja de cálculo" }),
    },
    {
      h: "Referencias relativas, absolutas y mixtas",
      html: `<p>Al <b>copiar</b> una fórmula a otras celdas (por ejemplo, arrastrando el controlador de relleno), las referencias se comportan de distinta manera según su tipo:</p>
      <ul><li><b>Referencia relativa</b> (A2): se ajusta al desplazarse. Si copias <code>=A2*B2</code> de la fila 2 a la 3, se convierte en <code>=A3*B3</code>. Es lo que queremos cuando cada fila hace el mismo cálculo con sus propios datos.</li>
      <li><b>Referencia absoluta</b> ($C$1): no cambia al copiar. Se usa para un dato único que comparten todas las filas, como el tipo de IVA o un tipo de cambio. El símbolo $ «fija» la columna y la fila.</li>
      <li><b>Referencia mixta</b> ($A2 o A$2): fija solo la columna o solo la fila. Es útil en tablas de doble entrada, como una tabla de multiplicar, donde una fórmula como <code>=$A2*B$1</code> se copia a toda la tabla.</li></ul>
      <p>En la mayoría de los programas, la tecla <b>F4</b> alterna entre los tipos de referencia mientras se escribe la fórmula.</p>
      <p>También se puede hacer referencia a celdas de otra hoja (<code>=Datos!B4</code> o <code>=$Datos.B4</code> según el programa) y dar <b>nombres</b> a celdas o rangos: si la celda C1 se llama «IVA», la fórmula <code>=A2*IVA</code> es más fácil de leer y equivale a una referencia absoluta. Entender bien las referencias es la clave para construir hojas que se puedan ampliar sin errores.</p>`,
      svg: hoja(),
    },
    {
      h: "Funciones de la hoja de cálculo",
      html: `<p>Una <b>función</b> es una fórmula predefinida con un nombre y unos <b>argumentos</b> entre paréntesis separados por punto y coma (o coma, según la configuración). Las más útiles son:</p>
      <ul><li><b>Matemáticas y estadísticas</b>: <code>SUMA(B2:B30)</code>, <code>PROMEDIO</code>, <code>MAX</code>, <code>MIN</code>, <code>REDONDEAR(A1;2)</code>, <code>CONTAR</code> (celdas con números), <code>CONTARA</code> (celdas no vacías), <code>MEDIANA</code>, <code>MODA</code>.</li>
      <li><b>Lógicas</b>: <code>SI(condición;valor_si_verdadero;valor_si_falso)</code>, por ejemplo <code>=SI(B2&gt;=5;"Aprobado";"Suspenso")</code>. Se combinan con <code>Y()</code> y <code>O()</code> y se pueden <b>anidar</b> para más de dos casos.</li>
      <li><b>Condicionales de recuento y suma</b>: <code>CONTAR.SI(C2:C30;"&gt;=5")</code> cuenta los aprobados; <code>SUMAR.SI</code> suma los valores que cumplen un criterio; <code>PROMEDIO.SI</code>.</li>
      <li><b>Búsqueda</b>: <code>BUSCARV(valor;tabla;columna;FALSO)</code> busca un valor en la primera columna de una tabla y devuelve el dato de la columna indicada. Por ejemplo, buscar el precio de un producto por su código. Las versiones recientes incluyen BUSCARX, más flexible.</li>
      <li><b>Texto y fecha</b>: <code>CONCATENAR</code>, <code>MAYUSC</code>, <code>HOY()</code>, <code>AÑO</code>.</li></ul>
      <p>Cuando algo falla, la hoja muestra un <b>error</b>: #¡DIV/0! (división entre cero), #¿NOMBRE? (función mal escrita), #N/A (BUSCARV no encuentra el valor), #¡REF! (referencia a una celda eliminada) o ##### (la columna es demasiado estrecha).</p>`,
      svg: B.rejilla("Funciones más usadas en la hoja de cálculo", ["Función", "Para qué"], [["SUMA, PROMEDIO", "totales y medias"], ["MAX, MIN", "extremos"], ["SI", "decidir"], ["CONTAR.SI", "contar con criterio"], ["BUSCARV", "buscar en tabla"]], { t: "Funciones" }),
      video: { id: "5BmFpmoBjw8", titulo: "Función BUSCARV en Excel: extraer datos a partir de una lista", canal: "Saber Programas", vistas: 4360169 },
    },
    {
      h: "Gráficos",
      html: `<p>Un <b>gráfico</b> representa visualmente los datos de una hoja y permite ver de un vistazo tendencias, comparaciones y proporciones. Se crea seleccionando el rango de datos (con sus etiquetas) e insertando el tipo adecuado. Elegir bien el tipo es fundamental:</p>
      <ul><li><b>Columnas o barras</b>: comparar cantidades entre categorías (ventas por mes, notas por asignatura).</li>
      <li><b>Líneas</b>: mostrar la evolución de una variable en el tiempo (temperatura diaria).</li>
      <li><b>Circular</b> o de sectores: mostrar partes de un todo que suman el 100 %, con pocas categorías.</li>
      <li><b>Dispersión</b> (XY): relacionar dos variables numéricas (horas de estudio y nota) y ver si hay correlación; se le puede añadir una <b>línea de tendencia</b>.</li>
      <li><b>Histograma</b>: distribución de frecuencias de una variable.</li></ul>
      <p>Un buen gráfico tiene <b>título</b>, <b>ejes</b> con nombre y unidades, <b>leyenda</b> si hay varias series y una escala honesta. Hay que evitar trucos que engañan: un eje vertical que no empieza en cero exagera las diferencias, los efectos 3D distorsionan las proporciones y los gráficos circulares con muchos sectores no se entienden.</p>
      <p>El <b>formato condicional</b> es otra forma visual de destacar datos dentro de las celdas: colorear en rojo las notas menores que 5, añadir barras de datos o escalas de color. Los gráficos están vinculados a los datos: si cambian los valores, el gráfico se actualiza automáticamente.</p>`,
      svg: B.cajas("Qué gráfico usar en cada caso", [["Columnas", "comparar|categorías"], ["Líneas", "evolución|en el tiempo"], ["Circular", "partes de|un todo"], ["Dispersión", "relación entre|dos variables"]], { t: "Elegir el gráfico" }),
    },
    {
      h: "Ordenar, filtrar y analizar datos",
      html: `<p>Cuando una hoja contiene una lista de datos con encabezados, como un registro de préstamos de la biblioteca, se puede analizar con varias herramientas:</p>
      <ul><li><b>Ordenar</b>: por uno o varios criterios (por curso y, dentro de cada curso, por apellido), en orden ascendente o descendente. Hay que seleccionar toda la tabla para no desordenar las filas.</li>
      <li><b>Filtrar</b>: el <b>autofiltro</b> muestra solo las filas que cumplen una condición (los préstamos de un mes, las notas mayores que 7) sin borrar las demás.</li>
      <li><b>Validación de datos</b>: limita lo que se puede escribir en una celda (una lista desplegable de cursos, números entre 0 y 10) para evitar errores al introducir datos.</li>
      <li><b>Tablas dinámicas</b>: resumen grandes cantidades de datos agrupándolos y calculando totales, medias o recuentos por categorías, arrastrando campos. Por ejemplo, número de préstamos por curso y mes en una tabla de doble entrada.</li>
      <li><b>Subtotales</b> y <b>agrupar</b>: calculan totales parciales por grupos.</li>
      <li><b>Inmovilizar paneles</b>: mantiene visibles los encabezados al desplazarse por una tabla larga.</li></ul>
      <p>Las hojas de cálculo permiten también <b>importar</b> datos de archivos CSV o de páginas web, y <b>proteger</b> celdas u hojas para que nadie modifique por error las fórmulas. Para listas muy grandes, con relaciones entre varias tablas o con muchos usuarios a la vez, la herramienta adecuada ya no es la hoja de cálculo, sino una <b>base de datos</b>.</p>`,
      svg: B.flujo("Del registro de datos al resumen", ["Introducir datos con validación", "Ordenar por curso y fecha", "Filtrar los de un mes", "Resumir con tabla dinámica", "Representar en un gráfico"], { t: "Analizar datos" }),
    },
    {
      h: "Las bases de datos",
      html: `<p>Una <b>base de datos</b> es un conjunto organizado de datos relacionados, almacenados de forma que se puedan consultar, actualizar y mantener con facilidad. Se gestionan con un <b>sistema gestor de bases de datos</b> (SGBD), como LibreOffice Base, Microsoft Access, MySQL, PostgreSQL o SQLite. Están detrás de casi todo: la secretaría del instituto, una tienda en línea, una red social o el catálogo de una biblioteca.</p>
      <p>En una base de datos <b>relacional</b>, la información se organiza en <b>tablas</b>:</p>
      <ul><li>Cada <b>registro</b> (fila) corresponde a un elemento: un alumno, un libro.</li>
      <li>Cada <b>campo</b> (columna) es una característica de ese elemento: nombre, curso, fecha de nacimiento. Cada campo tiene un <b>tipo de dato</b> (texto, número, fecha, sí/no) y unas propiedades (tamaño, obligatorio, valor predeterminado).</li></ul>
      <p>Frente a una hoja de cálculo, una base de datos:</p>
      <ul><li>Evita la <b>redundancia</b>: cada dato se guarda una sola vez (el nombre de un alumno no se repite en cada préstamo).</li>
      <li>Garantiza la <b>integridad</b>: impide, por ejemplo, registrar un préstamo de un alumno que no existe.</li>
      <li>Permite el <b>acceso simultáneo</b> de muchos usuarios con distintos <b>permisos</b>.</li>
      <li>Maneja millones de registros con rapidez.</li></ul>
      <p>Existen también bases de datos <b>no relacionales</b> (NoSQL), que guardan documentos, pares clave-valor o grafos; se usan en grandes aplicaciones web y en el big data.</p>`,
      svg: B.comparar("Hoja de cálculo frente a base de datos", ["Hoja de cálculo", ["cálculos y gráficos", "listas pequeñas", "datos repetidos", "un usuario"]], ["Base de datos", ["tablas relacionadas", "millones de registros", "sin redundancia", "muchos usuarios"]]),
      video: { id: "CBVp8sbo1w0", titulo: "Qué son las bases de datos relacionales", canal: "codigofacilito", vistas: 105166 },
    },
    {
      h: "Diseño de una base de datos relacional",
      html: `<p>Diseñar bien una base de datos ahorra muchos problemas. El proceso empieza identificando las <b>entidades</b> (los objetos sobre los que se guarda información: alumnos, libros, préstamos) y sus <b>atributos</b> (los campos de cada una).</p>
      <p>Cada tabla necesita una <mark>clave primaria</mark>: un campo (o combinación de campos) cuyo valor es <b>único</b> y no vacío para cada registro, y que lo identifica sin ambigüedad. El nombre no sirve, porque puede repetirse; se usa un número de identificación o un código (a menudo un número autoincremental).</p>
      <p>Las tablas se conectan mediante <b>relaciones</b>: una <b>clave foránea</b> o externa es un campo de una tabla que contiene valores de la clave primaria de otra. Por ejemplo, la tabla PRÉSTAMOS tiene el campo «id_alumno», que remite a la tabla ALUMNOS. Tipos de relaciones:</p>
      <ul><li><b>Uno a muchos</b> (1:N), la más habitual: un alumno puede tener muchos préstamos, pero cada préstamo es de un solo alumno.</li>
      <li><b>Uno a uno</b> (1:1): a cada registro le corresponde uno solo en la otra tabla.</li>
      <li><b>Muchos a muchos</b> (N:M): un alumno cursa muchas asignaturas y una asignatura tiene muchos alumnos. Se resuelve con una tabla intermedia (MATRÍCULAS).</li></ul>
      <p>Al definir las relaciones se exige la <b>integridad referencial</b>: no se puede añadir un préstamo con un id_alumno que no exista ni borrar un alumno con préstamos pendientes. Los diseñadores representan todo esto en un <b>diagrama entidad-relación</b> antes de crear las tablas.</p>`,
      svg: relacional(),
    },
    {
      h: "Consultas, formularios e informes",
      html: `<p>Los SGBD ofrecen varios objetos para trabajar con los datos:</p>
      <ul><li><b>Consultas</b>: preguntas a la base de datos que seleccionan, combinan, ordenan y calculan datos de una o varias tablas. Su resultado es una tabla temporal.</li>
      <li><b>Formularios</b>: pantallas cómodas para introducir y ver los datos registro a registro, con listas desplegables y botones, sin tocar las tablas directamente.</li>
      <li><b>Informes</b>: documentos con formato para imprimir o exportar a PDF, con agrupaciones y totales (por ejemplo, el listado de préstamos por curso).</li></ul>
      <p>Las consultas se pueden diseñar de forma gráfica o escribir en <b>SQL</b> (lenguaje de consulta estructurado), el lenguaje estándar de las bases de datos relacionales:</p>
      ${B.code(`SELECT nombre, curso
FROM alumnos
WHERE curso = '1BACH'
ORDER BY nombre;`)}
      <p>Esta consulta muestra el nombre y el curso de los alumnos de 1º de Bachillerato ordenados alfabéticamente. <b>SELECT</b> indica los campos, <b>FROM</b> la tabla, <b>WHERE</b> la condición y <b>ORDER BY</b> el orden. Con <b>JOIN</b> se combinan tablas relacionadas, y con funciones como <b>COUNT</b>, <b>SUM</b> o <b>AVG</b> y <b>GROUP BY</b> se calculan resúmenes: cuántos préstamos tiene cada alumno. También hay órdenes para insertar (INSERT), modificar (UPDATE) y borrar (DELETE) datos, que deben usarse con cuidado: un DELETE sin WHERE borra la tabla entera.</p>`,
      svg: B.capas("Objetos de un gestor de bases de datos", [["Informes", "imprimir, resumir"], ["Formularios", "introducir datos"], ["Consultas", "SQL, preguntar"], ["Tablas", "guardar datos"]], { t: "Objetos de la base de datos" }),
    },
    {
      h: "Presentaciones eficaces",
      html: `<p>Los programas de <b>presentaciones</b> (Impress, PowerPoint, Presentaciones de Google, Keynote) crean diapositivas que acompañan una exposición oral. Una presentación <b>apoya</b> al orador; no debe sustituirlo ni ser un documento para leer.</p>
      <p>Pautas de diseño:</p>
      <ul><li><b>Una idea por diapositiva</b>, con un título que la resuma.</li>
      <li><b>Poco texto</b>: palabras clave o frases breves, nunca párrafos para leer en voz alta. Una pauta orientativa es no superar seis líneas.</li>
      <li><b>Letra grande y legible</b> (al menos 24 puntos, sin serifa) y buen <b>contraste</b> entre texto y fondo.</li>
      <li><b>Imágenes, gráficos y esquemas</b> de calidad que aporten información, con sus créditos y licencias.</li>
      <li><b>Coherencia visual</b>: usar el <b>patrón de diapositivas</b> (plantilla maestra) para que fuentes, colores y logotipos sean iguales en todas.</li>
      <li><b>Transiciones y animaciones</b> discretas, solo cuando ayuden a seguir el razonamiento.</li></ul>
      <p>La <b>estructura</b> clásica es: portada, introducción (qué se va a contar y por qué importa), desarrollo en pocas partes, conclusión con las ideas clave y diapositiva de cierre o preguntas. Las <b>notas del orador</b> sirven de guion y solo las ve quien presenta. Antes de exponer hay que ensayar controlando el tiempo, comprobar el equipo y llevar una copia en PDF. Otras herramientas permiten presentaciones no lineales con zoom o la creación de infografías y vídeos.</p>`,
      svg: B.flujo("Estructura de una presentación eficaz", ["Portada: título y autor", "Introducción: por qué importa", "Desarrollo: 3-4 ideas", "Conclusión: lo esencial", "Preguntas y fuentes"], { t: "Presentación" }),
      video: { id: "bUHR7lYepT0", titulo: "Cómo hacer una buena presentación visual (diapositivas)", canal: "Aprendiz Desarrollo", vistas: 180393 },
    },
  ],
  figura: {
    titulo: "Ideas clave del software ofimático",
    items: [["Textos", "estilos", "índice automático", "control de cambios"], ["Cálculo", "=A2*$C$1", "SI · BUSCARV", "y gráficos"], ["Bases de datos", "tablas", "clave primaria", "consultas SQL"], ["Presentación", "1 idea/diapo", "poco texto", "y buen contraste"]],
  },
  video: { id: "MRmmPJId5-k", titulo: "Bases de datos: el modelo relacional", canal: "CodigoCompilado", vistas: 969512 },
  quiz: [
    ["¿Cuál es una suite ofimática libre?", ["Microsoft 365", "LibreOffice", "iWork", "Photoshop"], 1, "Writer, Calc, Impress y Base."],
    ["El formato abierto de documentos de texto es…", [".docx", ".odt", ".pdf", ".txt"], 1, "OpenDocument Text."],
    ["El historial de versiones de un documento en la nube permite…", ["imprimir más rápido", "recuperar estados anteriores", "cifrar el documento", "corregir la ortografía"], 1, "Se puede volver a cualquier versión."],
    ["La alineación y el interlineado son formato de…", ["carácter", "párrafo", "página", "sección"], 1, "Afectan al párrafo completo."],
    ["Para pasar a la página siguiente se debe usar…", ["muchos «Intro»", "un salto de página", "espacios", "una tabla"], 1, "Así no se descoloca al editar."],
    ["La principal ventaja de los estilos es…", ["ocupan menos", "coherencia y cambios globales, e índice automático", "son más bonitos", "evitan la ortografía"], 1, "Al modificar el estilo, cambian todos los párrafos."],
    ["La combinación de correspondencia sirve para…", ["fusionar dos documentos", "generar documentos personalizados desde una lista de datos", "corregir errores", "enviar correo cifrado"], 1, "Cartas, etiquetas, diplomas."],
    ["En una hoja de cálculo, toda fórmula empieza por…", ["+", "=", "#", "$"], 1, "El signo igual."],
    ["El resultado de =2+3*4 es…", ["20", "14", "24", "9"], 1, "Primero se multiplica."],
    ["Al copiar =A2*B2 una fila hacia abajo se obtiene…", ["=A2*B2", "=A3*B3", "=B2*C2", "=A3*B2"], 1, "Las referencias relativas se ajustan."],
    ["La referencia que no cambia al copiar es…", ["A1", "$A1", "A$1", "$A$1"], 3, "Absoluta: columna y fila fijas."],
    ["=SI(B2>=5;\"Apto\";\"No apto\") con B2 = 4,5 devuelve…", ["Apto", "No apto", "4,5", "error"], 1, "La condición es falsa."],
    ["Para contar cuántas notas son mayores o iguales que 5 se usa…", ["SUMA", "CONTAR.SI", "MAX", "BUSCARV"], 1, "Cuenta las celdas que cumplen un criterio."],
    ["El error #¡DIV/0! indica…", ["una función mal escrita", "una división entre cero", "una columna estrecha", "un valor no encontrado"], 1, "El divisor es cero o está vacío."],
    ["Para mostrar la evolución de la temperatura durante un mes se usa un gráfico de…", ["sectores", "líneas", "dispersión", "anillos"], 1, "Las líneas muestran tendencias temporales."],
    ["El autofiltro…", ["borra las filas que no cumplen", "muestra solo las filas que cumplen una condición", "ordena por color", "crea gráficos"], 1, "Oculta temporalmente el resto."],
    ["En una base de datos, cada fila de una tabla es un…", ["campo", "registro", "informe", "formulario"], 1, "Un elemento con todos sus datos."],
    ["La clave primaria debe ser…", ["el nombre", "única y no vacía", "un texto largo", "repetible"], 1, "Identifica cada registro sin ambigüedad."],
    ["En SQL, la cláusula que establece la condición es…", ["SELECT", "FROM", "WHERE", "ORDER BY"], 2, "Filtra los registros."],
    ["En una presentación eficaz…", ["se pone todo el texto que se va a decir", "hay una idea por diapositiva y poco texto", "se usan muchas animaciones", "la letra es pequeña para que quepa más"], 1, "Las diapositivas apoyan al orador."],
  ],
  examen: [
    ["En A1 hay 10, en A2 hay 4 y en B1 la fórmula =A1^2/(A2+1). ¿Qué resultado da?", ["20", "24", "100", "2,5"], 0, "100 / 5 = 20."],
    ["Copias =$A2*B$1 de C2 a D3. ¿Qué fórmula aparece?", ["=$A3*C$1", "=$A2*C$1", "=$A3*B$1", "=$B3*C$1"], 0, "$A fija la columna; $1 fija la fila; lo demás se desplaza."],
    ["Quieres calcular el IVA de 200 productos con el tipo de la celda F1. ¿Qué fórmula pones en C2 para copiarla hacia abajo?", ["=B2*F1", "=B2*$F$1", "=$B$2*F1", "=B$2*F$1"], 1, "El precio cambia por fila; el tipo es fijo."],
    ["Con notas en B2:B31, ¿qué fórmula da el porcentaje de aprobados?", ["=CONTAR.SI(B2:B31;\">=5\")/CONTAR(B2:B31)", "=SUMA(B2:B31)/30", "=PROMEDIO(B2:B31)", "=SI(B2>=5;1;0)"], 0, "Aprobados entre total."],
    ["BUSCARV devuelve #N/A. La causa más probable es…", ["una división entre cero", "que el valor buscado no está en la primera columna de la tabla", "la columna es estrecha", "falta el signo ="], 1, "No encuentra el valor."],
    ["Una biblioteca registra en una sola hoja el nombre, curso y email del alumno en cada préstamo. ¿Qué problema tiene?", ["Ninguno", "Redundancia: los datos del alumno se repiten", "No se puede ordenar", "Ocupa poco"], 1, "Se resuelve con dos tablas relacionadas."],
    ["Alumnos y asignaturas tienen una relación…", ["1:1", "1:N", "N:M, con tabla intermedia", "no se relacionan"], 2, "Un alumno, muchas asignaturas; una asignatura, muchos alumnos."],
    ["¿Qué hace SELECT COUNT(*) FROM prestamos WHERE fecha >= '2026-11-01'?", ["Borra préstamos", "Cuenta los préstamos desde el 1 de noviembre", "Lista todos los alumnos", "Ordena por fecha"], 1, "COUNT cuenta los registros que cumplen el WHERE."],
  ],
  feynman: ["Por qué conviene usar estilos en lugar de dar formato a mano", "Qué diferencia hay entre referencias relativas, absolutas y mixtas", "Cómo funcionan las funciones SI, CONTAR.SI y BUSCARV", "Qué gráfico elegirías para cada tipo de datos y por qué", "Qué es una clave primaria y para qué sirven las relaciones", "Cómo debe ser una buena presentación"],
  mapa: ["SOFTWARE OFIMÁTICO", [["Textos", "formato · estilos · índice · revisión"], ["Hoja de cálculo", "fórmulas · referencias · funciones · gráficos"], ["Bases de datos", "tablas · claves · relaciones · SQL"], ["Presentaciones", "una idea · poco texto · patrón"]]],
  tarjetas: [
    ["Ofimática", "Aplicaciones de textos, cálculo, presentaciones y bases de datos."],
    ["Formatos", "Abiertos (ODF: .odt, .ods, .odp), Microsoft (.docx…), PDF y CSV."],
    ["Niveles de formato", "Carácter, párrafo y página."],
    ["Estilo", "Conjunto de formatos con nombre; permite cambios globales e índice automático."],
    ["Control de cambios", "Marca inserciones y eliminaciones para aceptarlas o rechazarlas."],
    ["Fórmula", "Empieza por =; usa referencias y se recalcula sola."],
    ["Referencias", "Relativa A1, absoluta $A$1, mixta $A1 o A$1 (F4)."],
    ["Función SI", "=SI(condición; si verdadero; si falso)."],
    ["BUSCARV", "Busca un valor en la 1.ª columna y devuelve el dato de otra columna."],
    ["Tipos de gráfico", "Columnas: comparar. Líneas: evolución. Sectores: partes. Dispersión: relación."],
    ["Base de datos relacional", "Tablas (registros y campos) unidas por claves primarias y foráneas."],
    ["SQL", "SELECT campos FROM tabla WHERE condición ORDER BY campo."],
  ],
  ejemplos: [
    ["Calcula en una hoja el precio final de una lista de productos con IVA del 21 % (celda E1) y un descuento del 10 % (celda E2).", ["En A van los productos y en B los precios sin IVA.", "En C2: =B2*(1+$E$1) para añadir el IVA.", "En D2: =C2*(1-$E$2) para aplicar el descuento.", "Se copian C2 y D2 hacia abajo: B cambia en cada fila; E1 y E2 quedan fijos."], "C2: =B2*(1+$E$1); D2: =C2*(1-$E$2)."],
    ["Escribe una fórmula que califique: menos de 5, «Insuficiente»; de 5 a menos de 7, «Bien»; 7 o más, «Notable o más».", ["Hay tres casos: se necesitan dos SI anidados.", "Primero se comprueba el caso más bajo.", "Si no se cumple, se comprueba el siguiente."], "=SI(B2<5;\"Insuficiente\";SI(B2<7;\"Bien\";\"Notable o más\"))"],
    ["Una tabla de productos está en la hoja Precios (código en A, nombre en B, precio en C, filas 2 a 50). En la hoja Pedido, A2 contiene un código. Escribe la fórmula para obtener su precio.", ["El valor buscado es A2.", "La tabla es Precios!$A$2:$C$50 (absoluta para copiarla).", "El precio está en la 3.ª columna; FALSO exige coincidencia exacta."], "=BUSCARV(A2;Precios!$A$2:$C$50;3;FALSO)"],
    ["Construye una tabla de multiplicar del 1 al 10 con una sola fórmula copiada.", ["Números del 1 al 10 en B1:K1 y en A2:A11.", "En B2 se multiplica la cabecera de la fila por la de la columna.", "Se fija la columna A y la fila 1 con referencias mixtas y se copia a todo el rango."], "B2: =$A2*B$1, copiada hasta K11."],
    ["Diseña las tablas de una base de datos para la biblioteca del instituto (alumnos, libros y préstamos).", ["ALUMNOS(id_alumno PK, nombre, apellidos, curso, email).", "LIBROS(id_libro PK, título, autor, ISBN, ejemplares).", "PRÉSTAMOS(id_prestamo PK, id_alumno FK, id_libro FK, fecha_salida, fecha_devolución).", "Relaciones 1:N de ALUMNOS a PRÉSTAMOS y de LIBROS a PRÉSTAMOS, con integridad referencial."], "Tres tablas relacionadas sin datos repetidos."],
    ["Escribe en SQL una consulta que liste el título de los libros prestados a alumnos de 1BACH y que aún no se han devuelto.", ["Hay que combinar las tres tablas con JOIN mediante las claves.", "Condiciones: curso = '1BACH' y fecha_devolución vacía (IS NULL).", "Se ordena por título."], "SELECT l.titulo\nFROM prestamos p\nJOIN alumnos a ON p.id_alumno = a.id_alumno\nJOIN libros l ON p.id_libro = l.id_libro\nWHERE a.curso = '1BACH' AND p.fecha_devolucion IS NULL\nORDER BY l.titulo;"],
  ],
  errores: [
    "Dar formato con espacios y saltos de línea repetidos en lugar de usar estilos, sangrías y saltos de página.",
    "Escribir números fijos dentro de las fórmulas en lugar de referencias a celdas.",
    "Olvidar el $ en el dato común y obtener resultados erróneos al copiar la fórmula.",
    "Usar un gráfico circular para datos que no son partes de un todo o con demasiadas categorías.",
    "Guardar todos los datos en una sola tabla repetidos en lugar de usar tablas relacionadas.",
    "Llenar las diapositivas de texto y leerlas en voz alta durante la exposición.",
  ],
  ejercicios: {
    b: [
      ["Nombra los programas equivalentes de LibreOffice y Microsoft para textos, cálculo y presentaciones.", "Writer y Word; Calc y Excel; Impress y PowerPoint."],
      ["¿Qué ventajas tiene un formato abierto como ODF?", "Su especificación es pública: cualquier programa puede leerlo y escribirlo, no depende de un fabricante y garantiza que el documento se podrá abrir en el futuro."],
      ["Clasifica como formato de carácter, párrafo o página: negrita, márgenes, interlineado, encabezado, tamaño de fuente, sangría.", "Carácter: negrita, tamaño. Párrafo: interlineado, sangría. Página: márgenes, encabezado."],
      ["¿Qué es un estilo y qué tres ventajas tiene?", "Un conjunto de formatos con nombre que se aplica de una vez. Ventajas: coherencia, cambios globales rápidos e índice automático (además de accesibilidad)."],
      ["¿Para qué sirve el control de cambios?", "Para que cada modificación quede marcada con su autor y se pueda aceptar o rechazar, al revisar documentos en grupo."],
      ["Indica la referencia de la celda de la columna D y la fila 7 y el rango de A1 a C4.", "D7 y A1:C4."],
      ["Calcula: =3+2*5, =(3+2)*5, =2^3+1 y =10/4-1.", "13, 25, 9 y 1,5."],
      ["Escribe la fórmula para sumar las celdas de B2 a B20 y la de su media.", "=SUMA(B2:B20) y =PROMEDIO(B2:B20)."],
      ["Clasifica las referencias: A5, $A$5, A$5, $A5.", "Relativa, absoluta, mixta (fila fija) y mixta (columna fija)."],
      ["¿Qué tipo de gráfico usarías para: notas medias de cinco asignaturas; evolución del peso de un bebé; reparto del presupuesto familiar?", "Columnas; líneas; circular (sectores)."],
      ["Define registro, campo y clave primaria.", "Registro: fila con los datos de un elemento. Campo: columna con una característica. Clave primaria: campo único y no vacío que identifica cada registro."],
      ["Da cuatro consejos para diseñar diapositivas.", "Una idea por diapositiva, poco texto, letra grande con buen contraste e imágenes de calidad con coherencia visual (patrón)."],
    ],
    m: [
      ["Explica cómo generarías un índice automático en un trabajo de 30 páginas.", "Aplicando estilos de título (Título 1 a los capítulos, Título 2 a los apartados) y después insertando el índice o tabla de contenidos, que recoge los títulos y sus páginas. Si el documento cambia, se actualiza el índice."],
      ["Describe los pasos para enviar a cada familia una carta personalizada con el nombre del alumno y su tutor.", "Crear en una hoja de cálculo la lista con columnas Nombre, Tutor, Dirección. En el procesador, redactar la carta e insertar los campos de combinación. Vincular la fuente de datos, previsualizar y combinar en un documento o enviar por correo."],
      ["En B2:B10 hay unidades y en C2:C10 precios. Escribe en D2 el importe y en D11 el total; y en D12 el total con IVA del 21 % que está en F1.", "D2: =B2*C2 (copiada hasta D10). D11: =SUMA(D2:D10). D12: =D11*(1+F1)."],
      ["Copias =B3+$C$2-D$1 de E3 a F5. ¿Qué fórmula queda?", "=C5+$C$2-E$1."],
      ["Escribe una fórmula que muestre «Beca» si la nota media (C2) es al menos 7 y la renta (D2) inferior a 20 000, y «No» en otro caso.", "=SI(Y(C2>=7;D2<20000);\"Beca\";\"No\")"],
      ["Con las edades en B2:B200, escribe las fórmulas para contar los mayores de edad y la edad media de los menores.", "=CONTAR.SI(B2:B200;\">=18\") y =PROMEDIO.SI(B2:B200;\"<18\")."],
      ["Identifica la causa de cada error: #¡REF!, #¿NOMBRE?, ##### y #N/A.", "#¡REF!: referencia a una celda borrada. #¿NOMBRE?: función mal escrita. #####: columna demasiado estrecha. #N/A: la búsqueda no encuentra el valor."],
      ["Un gráfico de columnas de ventas tiene el eje vertical de 950 a 1000. ¿Por qué puede engañar?", "Las diferencias de unas pocas unidades parecen enormes: una columna de 990 parece el triple que una de 960. Para comparar cantidades, el eje debe empezar en cero o indicarse claramente el corte."],
      ["Explica para qué sirve una tabla dinámica con un ejemplo.", "Resume una lista grande agrupando y calculando. Ejemplo: con 2000 préstamos (fecha, curso, libro), obtener una tabla con el número de préstamos por curso en filas y por mes en columnas, arrastrando campos."],
      ["¿Qué ventajas tiene la validación de datos? Pon un ejemplo.", "Evita errores al introducir datos limitando los valores permitidos. Ejemplo: en la columna Curso, una lista desplegable con 1ESO… 2BACH; en Nota, solo números entre 0 y 10."],
      ["Indica la clave primaria adecuada para las tablas ALUMNOS, LIBROS y COCHES, justificando por qué el nombre no sirve.", "ALUMNOS: número de identificación o NIA; LIBROS: código del ejemplar (no el ISBN si hay varios ejemplares); COCHES: matrícula. El nombre o el título pueden repetirse."],
      ["Escribe una consulta SQL que muestre nombre y nota de los alumnos con nota mayor que 8, de mayor a menor.", "SELECT nombre, nota FROM alumnos WHERE nota > 8 ORDER BY nota DESC;"],
      ["Explica qué es la integridad referencial con un ejemplo.", "Es la regla que garantiza que una clave foránea siempre apunte a un registro existente. Ejemplo: no se puede registrar un préstamo con id_alumno = 999 si no existe ese alumno, ni borrar un alumno que tiene préstamos."],
      ["Evalúa una diapositiva con 12 líneas de texto en letra de 14 puntos, fondo azul oscuro y texto negro, y propón mejoras.", "Demasiado texto, letra pequeña y poco contraste. Mejoras: dividir en dos diapositivas con 3-4 ideas clave cada una, letra de 28 puntos, texto blanco o amarillo claro sobre el fondo oscuro y una imagen o esquema."],
    ],
    a: [
      ["Diseña una hoja que calcule la nota final de cada alumno con tres exámenes (30 %, 30 %, 40 %; pesos en G1:G3), su calificación con texto y el número de aprobados.", "E2: =B2*$G$1+C2*$G$2+D2*$G$3 (copiada). F2: =SI(E2<5;\"Insuficiente\";SI(E2<6;\"Suficiente\";SI(E2<7;\"Bien\";SI(E2<9;\"Notable\";\"Sobresaliente\")))). Aprobados: =CONTAR.SI(E2:E31;\">=5\")."],
      ["Calcula con una hoja la cuota mensual de un préstamo de 12 000 € al 6 % anual en 4 años y explica la fórmula.", "Con la función PAGO: =PAGO(6%/12;48;-12000) ≈ 281,82 €. Se divide el interés anual entre 12 y se usan 48 meses; el capital se pone negativo porque es dinero que se recibe."],
      ["Una tienda tiene en una hoja 5000 ventas (fecha, vendedor, producto, importe). Explica cómo obtendrías el vendedor que más ha vendido en noviembre.", "Opción 1: tabla dinámica con filtro de fecha en noviembre, vendedor en filas y suma de importe en valores, ordenada de mayor a menor. Opción 2: SUMAR.SI.CONJUNTO por vendedor con los criterios de fecha y MAX para el mayor."],
      ["Normaliza esta tabla: PEDIDOS(nº pedido, fecha, cliente, dirección del cliente, teléfono, producto1, precio1, producto2, precio2).", "Separar en CLIENTES(id_cliente PK, nombre, dirección, teléfono), PRODUCTOS(id_producto PK, nombre, precio), PEDIDOS(id_pedido PK, fecha, id_cliente FK) y LÍNEAS(id_pedido FK, id_producto FK, cantidad), con clave primaria compuesta. Así no se repiten datos ni se limita el número de productos."],
      ["Escribe una consulta SQL que muestre cuántos préstamos tiene cada curso, solo para los cursos con más de 10.", "SELECT a.curso, COUNT(*) AS total\nFROM prestamos p JOIN alumnos a ON p.id_alumno = a.id_alumno\nGROUP BY a.curso\nHAVING COUNT(*) > 10\nORDER BY total DESC;"],
      ["Un compañero ejecuta DELETE FROM alumnos; por error. Explica qué ha pasado y qué medidas lo habrían evitado.", "Ha borrado todos los registros de la tabla porque no había WHERE. Medidas: copias de seguridad, permisos limitados (solo lectura para la mayoría), probar primero con SELECT y la misma condición, y trabajar con transacciones que se puedan deshacer."],
      ["Con datos de horas de estudio y notas de 30 alumnos, explica cómo comprobarías si hay relación entre ambas variables con la hoja de cálculo.", "Gráfico de dispersión con horas en X y notas en Y; añadir línea de tendencia y mostrar R²; calcular el coeficiente de correlación con =COEF.DE.CORREL(B2:B31;C2:C31). Un valor cercano a 1 indica relación lineal positiva fuerte (aunque correlación no implica causalidad)."],
      ["Planifica una presentación de 5 minutos sobre los resultados de una encuesta, con el contenido de cada diapositiva.", "1) Portada. 2) Pregunta de investigación y muestra. 3) Resultado principal con un gráfico de columnas. 4) Segundo hallazgo con un gráfico de sectores. 5) Conclusiones (3 ideas). 6) Propuestas y fuentes. Unos 45-60 s por diapositiva, con notas del orador y ensayo cronometrado."],
      ["Compara para un trabajo en grupo trabajar con documentos en la nube o enviando archivos por correo.", "En la nube: una sola versión actualizada, edición simultánea, comentarios, historial y permisos. Por correo: múltiples copias, conflictos entre versiones, más trabajo de fusión. La nube exige gestionar bien el acceso y la privacidad."],
      ["Diseña la base de datos de un club deportivo (socios, equipos, entrenadores y partidos) con sus claves y relaciones.", "SOCIOS(id_socio PK, nombre, fecha_nac, id_equipo FK); EQUIPOS(id_equipo PK, nombre, categoría, id_entrenador FK); ENTRENADORES(id_entrenador PK, nombre, titulación); PARTIDOS(id_partido PK, fecha, id_equipo FK, rival, resultado). Relaciones 1:N de EQUIPOS a SOCIOS y a PARTIDOS y de ENTRENADORES a EQUIPOS."],
    ],
  },
  glosario: [
    ["Ofimática", "Conjunto de aplicaciones para el trabajo con documentos e información."],
    ["Formato abierto", "Formato de archivo cuya especificación es pública."],
    ["Estilo", "Conjunto de formatos con nombre aplicable a párrafos o caracteres."],
    ["Plantilla", "Documento modelo con estilos y estructura para crear otros."],
    ["Combinación de correspondencia", "Creación de documentos personalizados a partir de una lista de datos."],
    ["Celda", "Intersección de una fila y una columna en una hoja de cálculo."],
    ["Rango", "Conjunto de celdas contiguas, como A1:C5."],
    ["Fórmula", "Expresión que empieza por = y calcula un resultado."],
    ["Referencia absoluta", "Referencia a una celda que no cambia al copiar la fórmula."],
    ["Función", "Fórmula predefinida con nombre y argumentos."],
    ["Tabla dinámica", "Herramienta que resume y agrupa grandes cantidades de datos."],
    ["Base de datos", "Conjunto organizado de datos relacionados."],
    ["Registro", "Fila de una tabla con los datos de un elemento."],
    ["Campo", "Columna de una tabla con un tipo de dato."],
    ["Clave primaria", "Campo que identifica de forma única cada registro."],
    ["Clave foránea", "Campo que contiene la clave primaria de otra tabla."],
    ["SQL", "Lenguaje estándar de consulta de bases de datos relacionales."],
  ],
  situacion: {
    titulo: "La oficina digital de la biblioteca",
    reto: "La biblioteca del instituto lleva los préstamos en un cuaderno. Por equipos, digitalizad su gestión y presentad un informe de uso al claustro.",
    pasos: [
      "Diseñad el diagrama entidad-relación y cread la base de datos con tablas de alumnos, libros y préstamos.",
      "Introducid datos de prueba mediante un formulario con validación.",
      "Cread consultas: préstamos pendientes, libros más prestados y préstamos por curso.",
      "Exportad los datos a una hoja de cálculo, analizadlos con tablas dinámicas y gráficos.",
      "Redactad el informe con estilos, índice, figuras numeradas y conclusiones, y generad avisos personalizados con combinación de correspondencia.",
      "Presentad los resultados con una presentación de cinco minutos.",
    ],
    producto: "Base de datos funcional, hoja de análisis con gráficos, informe en PDF, cartas de aviso y presentación.",
    evaluacion: [
      "La base de datos está bien diseñada, sin redundancias y con integridad referencial.",
      "Las fórmulas, funciones, consultas y gráficos son correctos y adecuados.",
      "El informe usa estilos, índice automático y una estructura clara.",
      "La presentación es visual, clara y se ajusta al tiempo.",
    ],
  },
  familias: [
    "Haced juntos el presupuesto mensual de la familia en una hoja de cálculo con fórmulas y un gráfico.",
    "Pedidle que os enseñe a usar estilos y el índice automático en un documento que tengáis que redactar.",
    "Revisad un documento compartido en la nube y comprobad con quién está compartido y con qué permisos.",
    "Animadle a ensayar delante de la familia sus presentaciones orales con diapositivas.",
  ],
  saberes: "Aplicaciones ofimáticas: procesadores de textos (formato, estilos, índices, tablas, combinación de correspondencia, revisión colaborativa), hojas de cálculo (fórmulas, referencias, funciones, gráficos, filtros y tablas dinámicas), bases de datos relacionales (tablas, claves, relaciones, consultas SQL, formularios e informes) y presentaciones; formatos abiertos y trabajo en la nube (Tecnologías de la Información y la Comunicación I, optativa de 1º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Reto de formato: dar a todo el grupo un texto «roto» con espacios y saltos y arreglarlo solo con estilos.",
    "Liga de hojas de cálculo: problemas de la vida real (factura, notas, viaje) resueltos por parejas.",
    "Usar datos abiertos reales para construir gráficos honestos y otros engañosos y debatir la diferencia.",
    "Crear una base de datos de la colección de algún miembro de la familia (libros, cromos, discos).",
  ],
  fuentes: [
    { t: "Documentación de LibreOffice en español", url: "https://documentation.libreoffice.org/es/documentacion-en-espanol/" },
    { t: "Ayuda de funciones de LibreOffice Calc", url: "https://help.libreoffice.org/latest/es/text/scalc/01/04060100.html" },
  ],
});
