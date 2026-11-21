// Contenido general de la sección PAU 2027. Revisado el 21/11/2026 con el RD 534/2024 (BOE-A-2024-11858, texto consolidado)
// y con los calendarios publicados por las comunidades (Canal Universitats para Cataluña).
const ul = (xs) => `<ul>${xs.map((x) => `<li>${x}</li>`).join("")}</ul>`;
const box = (h, inner) => `<div class="box"><h3>${h}</h3>${inner}</div>`;

module.exports = {
  avisoModelo: "Formato orientativo según el RD 534/2024 y los modelos publicados por las comisiones de la PAU. Cada comunidad concreta el examen: mira siempre el modelo oficial de la tuya. El modelo de esta página es de elaboración propia de Escolapedia.",

  esencial: [
    "<b>Qué es.</b> La Prueba de Acceso a la Universidad (PAU) es el examen que, junto con tu nota de Bachillerato, te da la nota para entrar en un grado universitario. Hasta 2024 se llamaba EBAU, EvAU, PEvAU o ABAU según la comunidad, y todo el mundo la sigue llamando selectividad.",
    "<b>Cuándo.</b> En 2027, la convocatoria ordinaria es el <b>1, 2 y 3 de junio</b> en casi toda España (Canarias, del 1 al 4). La extraordinaria es a finales de junio o en julio (en Cataluña, del 6 al 8 de julio).",
    "<b>Dos fases.</b> La <b>fase de acceso</b> es obligatoria (4 exámenes, o 5 si tu comunidad tiene lengua cooficial). La <b>fase de admisión</b> es voluntaria y sirve para subir nota (hasta 3 materias más y una segunda lengua extranjera).",
    "<b>Los exámenes de acceso.</b> Lengua Castellana y Literatura II; Historia de España <b>o</b> Historia de la Filosofía (tú eliges); Lengua Extranjera II; la materia obligatoria de tu modalidad (por ejemplo, Matemáticas II), y la lengua cooficial si la hay.",
    "<b>Duración.</b> Cada examen dura <b>90 minutos</b> y entre uno y otro hay al menos 30 minutos de descanso.",
    "<b>Preguntas competenciales.</b> Desde 2025 las preguntas parten de situaciones, textos o datos reales. Al menos el 70 % de la nota de cada examen son preguntas abiertas o semiabiertas: hay que razonar y escribir bien.",
    "<b>Nota de acceso.</b> 60 % de la media de Bachillerato + 40 % de la nota de la prueba. La prueba tiene que llegar a 4 y el total a 5. La nota de acceso no caduca.",
    "<b>Nota de admisión.</b> Se suman las dos materias aprobadas que más ponderan para ese grado (× 0,1 o × 0,2). Así se llega hasta 14.",
    "<b>Si sale mal.</b> Puedes pedir revisión en 3 días hábiles y presentarte otra vez (en la extraordinaria o en años siguientes) para mejorar: siempre cuenta la nota más alta.",
    "<b>Cómo prepararla.</b> El temario es el de 2º de Bachillerato. En Escolapedia tienes cada tema explicado y, en esta sección, un modelo de examen resuelto, consejos y un test de repaso de cada materia.",
  ],

  estructura: [
    ["acceso", "1. La fase de acceso (obligatoria)", `<p>Según el artículo 12 del Real Decreto 534/2024, la prueba tiene <b>cuatro ejercicios</b>, o <b>cinco</b> en las comunidades con lengua cooficial:</p>
      <ol><li><b>Lengua Castellana y Literatura II</b> y, si la hay, <b>Lengua Cooficial y Literatura II</b> (catalán, valenciano, gallego, euskera).</li>
      <li><b>Historia de España o Historia de la Filosofía</b>, a elección del alumno.</li>
      <li><b>Lengua Extranjera II</b>: alemán, francés, inglés, italiano o portugués. El examen se plantea y se responde en esa lengua.</li>
      <li><b>La materia específica obligatoria de tu modalidad</b>:<ul>
        <li>Ciencias y Tecnología: <a href="../matematicas-ii/">Matemáticas II</a> o <a href="../matematicas-aplicadas-a-las-ciencias-sociales-ii/">Matemáticas Aplicadas a las Ciencias Sociales II</a>.</li>
        <li>Humanidades y Ciencias Sociales: <a href="../latin-ii/">Latín II</a> o Matemáticas Aplicadas a las Ciencias Sociales II.</li>
        <li>General: <a href="../ciencias-generales/">Ciencias Generales</a>.</li>
        <li>Artes, vía Artes Plásticas, Imagen y Diseño: <a href="../dibujo-artistico-ii/">Dibujo Artístico II</a>.</li>
        <li>Artes, vía Música y Artes Escénicas: <a href="../analisis-musical-ii/">Análisis Musical II</a> o <a href="../artes-escenicas-ii/">Artes Escénicas II</a>.</li></ul></li></ol>
      <p>Las comunidades con dos lenguas oficiales regulan quién puede quedar exento del examen de lengua cooficial (por ejemplo, alumnado llegado hace poco).</p>`],
    ["formato", "2. Cómo son los exámenes", ul([
      "<b>90 minutos</b> por examen y un descanso mínimo de <b>30 minutos</b> entre exámenes seguidos (art. 13.4). El tiempo extra del alumnado con adaptaciones no cuenta como descanso.",
      "<b>Diseño competencial</b>: las preguntas evalúan las competencias específicas del currículo de 2º (RD 243/2022) y se sitúan en contextos reales: un texto, una noticia, unos datos, una obra de arte, un experimento (art. 13.1-13.3).",
      "Puede haber preguntas <b>cerradas</b> (tipo test o respuesta corta), <b>semiconstruidas</b> y <b>abiertas</b>, pero las abiertas y semiconstruidas suman <b>al menos el 70 %</b> de la nota de cada examen (art. 13.6).",
      "Hay <b>un solo modelo de examen</b> por materia. En algunos apartados te dejan <b>elegir</b> entre preguntas (art. 13.7). Lee bien cuántas tienes que contestar.",
      "Se valora la <b>adecuación al enunciado</b> y la <b>calidad de la expresión</b>: en las preguntas de escribir un texto, esa parte vale al menos el 10 % de la pregunta (art. 13.10). Ortografía, orden y presentación cuentan en todas las materias.",
      "Materiales: cada comisión decide si se puede usar calculadora (casi siempre científica no programable), diccionario (habitual en Latín y Griego), tablas o formularios (art. 13.9).",
    ])],
    ["admision", "3. La fase de admisión (voluntaria)", `${ul([
      "Puedes examinarte de <b>hasta tres materias</b> de 2º de Bachillerato, comunes o de modalidad, <b>distintas</b> de las que hayas hecho en la fase de acceso, y además de una <b>segunda lengua extranjera</b> distinta de la de acceso (art. 22.1).",
      "Ejemplo: si en acceso hiciste Historia de España, en admisión puedes hacer Historia de la Filosofía; si hiciste Matemáticas II, en admisión puedes hacer Física, Química y Biología.",
      "Cada universidad publica qué materias <b>ponderan</b> para cada grado y cuánto (normalmente × 0,1 o × 0,2). Solo cuentan las aprobadas (5 o más) y, de ellas, las dos que más te suben (art. 22.2-22.4).",
      "Muchas universidades también ponderan la materia de modalidad que hiciste en la fase de acceso (por ejemplo, Matemáticas II para Ingeniería). Compruébalo en su tabla de ponderaciones.",
      "Las notas de la fase de admisión tienen validez limitada: sirven para el curso siguiente a la prueba y los dos siguientes (art. 22.5). La nota de acceso, en cambio, no caduca.",
    ])}`],
    ["nota", "4. Cómo se calcula la nota", `${ul([
      "Cada examen se califica de 0 a 10 con dos decimales (art. 14.1).",
      "<b>Nota de la prueba</b> = media de los exámenes de la fase de acceso, con tres decimales. Tiene que ser <b>4 o más</b> para que cuente (art. 14.2). No hace falta aprobar cada examen por separado.",
      "<b>Nota de acceso</b> = 0,6 × nota media de Bachillerato (sin Religión) + 0,4 × nota de la prueba. Tiene que ser <b>5 o más</b> (art. 15). Es la nota que te da derecho a entrar en la universidad.",
      "<b>Nota de admisión</b> = nota de acceso + a × M1 + b × M2, donde M1 y M2 son las dos materias que más te suben y a y b sus ponderaciones (0,1 o 0,2). Máximo: 10 + 2 + 2 = <b>14</b>. Es la que se compara con la nota de corte.",
    ])}`],
    ["revision", "5. Revisión y ver el examen", ul([
      "Puedes pedir la <b>revisión</b> de cualquier examen en un plazo de <b>3 días hábiles</b> desde el día siguiente a la publicación de las notas (art. 20.1).",
      "Primero se comprueba que todas las preguntas estén corregidas y que no haya errores al sumar. Después, <b>otro especialista vuelve a corregir</b> el examen entero. La nota es la media de las dos correcciones y, si se diferencian en <b>2 puntos o más</b>, se hace de oficio una <b>tercera corrección</b> (art. 20.2). La nota puede subir, quedarse igual o bajar.",
      "Una vez resuelta la revisión puedes <b>ver tu examen</b> en un plazo de 10 días hábiles (art. 20.5).",
      "Consejo: pide revisión si crees que te falta al menos medio punto y tienes argumentos (has repasado tus respuestas con las soluciones oficiales). Es gratuita en casi todas las comunidades.",
    ])],
    ["mejorar", "6. Mejorar la nota", ul([
      "Para mejorar la nota de acceso hay que repetir la <b>prueba entera</b> de la fase de acceso, en la convocatoria extraordinaria del mismo año o en años siguientes. Cuenta siempre la nota más alta (art. 16.2).",
      "Las materias de admisión se pueden repetir sueltas para mejorarlas; también cuenta la más alta.",
      "No hay límite de convocatorias.",
    ])],
    ["otras", "7. Otras vías y casos especiales", ul([
      "<b>FP de grado superior</b>: el título de Técnico Superior da acceso a la universidad <b>sin hacer la PAU</b>. Tu nota de acceso es la media del ciclo y puedes presentarte a la fase de admisión para subir hasta 14 (arts. 5 y 23).",
      "<b>Alumnado con necesidades específicas</b> (dislexia, TDAH, discapacidad, enfermedad…): las comisiones adaptan tiempos, modelos de examen, espacios y apoyos, sin bajar la nota. Se pide al matricularse en la PAU, con el informe del centro (art. 3.2 y 21).",
      "<b>Mayores de 25, 40 y 45 años</b>: tienen pruebas y procedimientos propios.",
      "<b>Estudiantes de sistemas educativos extranjeros</b>: acreditan su título (UNEDasiss) y pueden hacer las Pruebas de Competencias Específicas (PCE) para subir nota.",
    ])],
  ],

  ejemplosNota: [
    { enunciado: "Lucía tiene un 8,20 de media en Bachillerato. En la PAU saca 7,50 en Lengua, 6,80 en Historia de España, 8,90 en Inglés y 7,25 en Matemáticas II. ¿Cuál es su nota de acceso?",
      pasos: ["Nota de la prueba = (7,50 + 6,80 + 8,90 + 7,25) : 4 = 30,45 : 4 = 7,6125 → 7,613.", "Es mayor que 4: cuenta.", "Nota de acceso = 0,6 × 8,20 + 0,4 × 7,613 = 4,920 + 3,045 = 7,965."],
      resultado: "Nota de acceso: 7,965 sobre 10." },
    { enunciado: "Lucía quiere Biotecnología, donde Biología y Química ponderan 0,2. En admisión saca 8,50 en Biología y 7,00 en Química, y en Física un 6,00 (pondera 0,1). ¿Cuál es su nota de admisión?",
      pasos: ["Aportación de cada materia: Biología 0,2 × 8,50 = 1,70; Química 0,2 × 7,00 = 1,40; Física 0,1 × 6,00 = 0,60.", "Se cogen las dos que más suman: Biología (1,70) y Química (1,40).", "Nota de admisión = 7,965 + 1,70 + 1,40 = 11,065."],
      resultado: "11,065 sobre 14. Si la nota de corte del año pasado fue 11,9, le faltan unos 0,8 puntos: un punto más en Biología y en Química (0,2 + 0,2) y algo más en la prueba de acceso la acercarían." },
    { enunciado: "Pau vive en Cataluña, tiene un 6,50 de media y hace cinco exámenes: Castellano 4,50, Catalán 5,25, Filosofía 3,80, Inglés 6,00 y MACS II 4,10. ¿Aprueba?",
      pasos: ["Nota de la prueba = (4,50 + 5,25 + 3,80 + 6,00 + 4,10) : 5 = 23,65 : 5 = 4,730. Es 4 o más: cuenta, aunque haya suspendido dos exámenes.", "Nota de acceso = 0,6 × 6,50 + 0,4 × 4,730 = 3,900 + 1,892 = 5,792."],
      resultado: "Sí: tiene acceso a la universidad con un 5,792. Puede subir nota en la fase de admisión o repetir la prueba en julio." },
  ],

  fechas: {
    intro: "La convocatoria ordinaria de 2027 se adelanta un día respecto a 2026 y en casi toda España será del <b>martes 1 al jueves 3 de junio</b>. La gran novedad es Cataluña, que adelanta la ordinaria una semana y pasa la extraordinaria de septiembre a julio.",
    filas: [
      ["Cataluña", "1, 2 y 3 de junio", "6, 7 y 8 de julio", "Oficial (Canal Universitats). Tribunal de incidencias: 8, 9 y 10 de junio"],
      ["Canarias", "1, 2, 3 y 4 de junio", "Por confirmar (finales de junio o julio)", "Publicada en medios"],
      ["Asturias", "1, 2 y 3 de junio", "5, 6 y 7 de julio", "Publicada en medios"],
      ["Castilla y León", "1, 2 y 3 de junio", "30 de junio, 1 y 2 de julio", "Publicada en medios"],
      ["Andalucía, Ceuta y Melilla", "1, 2 y 3 de junio (alguna fuente indica hasta el 4)", "Por confirmar", "Por confirmar"],
      ["Comunitat Valenciana", "Principios de junio, por confirmar", "30 de junio, 1 y 2 de julio (según medios)", "Por confirmar"],
      ["Resto de comunidades", "Previsto 1, 2 y 3 de junio", "Finales de junio o principios de julio", "Por confirmar en cada comunidad"],
    ],
    nota: "Datos revisados el 21 de noviembre de 2026. Las fechas «publicadas en medios» se han anunciado, pero conviene confirmarlas en la web oficial de tu comunidad (ver «Por comunidades»). Actualizaremos la tabla cuando se publiquen las resoluciones.",
    pasos: [
      ["Septiembre a diciembre", "Las comisiones publican los modelos de examen y las orientaciones de cada materia. Elige si harás Historia de España o Filosofía y qué materias de admisión te convienen."],
      ["Marzo a abril", "Calendario oficial y horario de cada examen. En Cataluña, prueba de aptitud personal (PAP) para Magisterio: 3 de abril de 2027."],
      ["Mayo", "Fin de 2º de Bachillerato y evaluación final. Matrícula en la PAU a través de tu instituto (suele ser la segunda quincena de mayo; hay que pagar las tasas, con exenciones para familia numerosa y otras situaciones)."],
      ["1 a 3 de junio", "Convocatoria ordinaria."],
      ["Mediados de junio", "Notas provisionales (unos 10 días después del último examen). Se abren 3 días hábiles para pedir revisión."],
      ["Junio a julio", "Preinscripción universitaria en cada comunidad (en Cataluña y otras comunidades, un único proceso para todas sus universidades públicas)."],
      ["Finales de junio o julio", "Convocatoria extraordinaria: para quien no aprobó o quiere subir nota."],
      ["Julio", "Primeras listas de admitidos y matrícula en la universidad."],
    ],
    dias: `<p>El horario exacto se publica en primavera, pero suele seguir este esquema:</p>${ul([
      "<b>Día 1</b>: Lengua Castellana y Literatura II, Historia de España o Filosofía y Lengua Extranjera II (y a veces la lengua cooficial).",
      "<b>Día 2</b>: materias de modalidad (la de acceso y las de admisión).",
      "<b>Día 3</b>: resto de materias de admisión y, a veces, coincidencias o incompatibilidades.",
      "Llega <b>30 minutos antes</b> con el DNI. Si dos exámenes coinciden a la misma hora, la comisión organiza un horario de incompatibilidades: avísalo al matricularte.",
    ])}`,
  },

  comunidades: [
    { n: "Andalucía", nombre: "PAU (antes PEvAU)", org: "Distrito Único Universitario de Andalucía", lengua: "—", web: "https://www.juntadeandalucia.es/economiaconocimientoempresasyuniversidad/sguit/", webT: "Junta de Andalucía (DUA)" },
    { n: "Aragón", nombre: "PAU (antes EvAU)", org: "Universidad de Zaragoza", lengua: "—", web: "https://www.unizar.es", webT: "unizar.es" },
    { n: "Asturias", nombre: "PAU (antes EBAU)", org: "Universidad de Oviedo", lengua: "—", web: "https://www.uniovi.es", webT: "uniovi.es" },
    { n: "Baleares", nombre: "PAU (antes PBAU)", org: "Universitat de les Illes Balears", lengua: "Catalán", web: "https://www.uib.es", webT: "uib.es" },
    { n: "Canarias", nombre: "PAU (antes EBAU)", org: "Universidad de La Laguna y Universidad de Las Palmas de Gran Canaria", lengua: "—", web: "https://www.ull.es", webT: "ull.es / ulpgc.es" },
    { n: "Cantabria", nombre: "PAU (antes EBAU)", org: "Universidad de Cantabria", lengua: "—", web: "https://web.unican.es", webT: "unican.es" },
    { n: "Castilla-La Mancha", nombre: "PAU (antes EvAU)", org: "Universidad de Castilla-La Mancha", lengua: "—", web: "https://www.uclm.es", webT: "uclm.es" },
    { n: "Castilla y León", nombre: "PAU (antes EBAU)", org: "Universidades públicas de Burgos, León, Salamanca y Valladolid", lengua: "—", web: "https://www.usal.es", webT: "usal.es (y las demás)" },
    { n: "Cataluña", nombre: "PAU, «selectivitat»", org: "Oficina d'Accés a la Universitat (Generalitat de Catalunya)", lengua: "Catalán", web: "https://universitats.gencat.cat/ca/pau/", webT: "Canal Universitats" },
    { n: "Comunitat Valenciana", nombre: "PAU", org: "Conselleria y universidades públicas valencianas", lengua: "Valenciano", web: "https://www.uv.es", webT: "uv.es (y las demás)" },
    { n: "Extremadura", nombre: "PAU (antes EBAU)", org: "Universidad de Extremadura", lengua: "—", web: "https://www.unex.es", webT: "unex.es" },
    { n: "Galicia", nombre: "PAU (antes ABAU)", org: "Comisión Interuniversitaria de Galicia (CiUG)", lengua: "Gallego", web: "https://ciug.gal", webT: "ciug.gal" },
    { n: "Madrid", nombre: "PAU (antes EvAU)", org: "Universidades públicas madrileñas", lengua: "—", web: "https://www.ucm.es", webT: "ucm.es (y las demás)" },
    { n: "Murcia", nombre: "PAU (antes EBAU)", org: "Universidad de Murcia y Universidad Politécnica de Cartagena", lengua: "—", web: "https://www.um.es", webT: "um.es" },
    { n: "Navarra", nombre: "PAU (antes EvAU)", org: "Universidad Pública de Navarra", lengua: "Euskera (para quien lo cursa)", web: "https://www.unavarra.es", webT: "unavarra.es" },
    { n: "País Vasco", nombre: "PAU / USaP", org: "Universidad del País Vasco (UPV/EHU)", lengua: "Euskera", web: "https://www.ehu.eus", webT: "ehu.eus" },
    { n: "La Rioja", nombre: "PAU (antes EBAU)", org: "Universidad de La Rioja", lengua: "—", web: "https://www.unirioja.es", webT: "unirioja.es" },
    { n: "Ceuta y Melilla", nombre: "PAU", org: "Universidad de Granada", lengua: "—", web: "https://www.ugr.es", webT: "ugr.es" },
    { n: "Sistemas educativos extranjeros", nombre: "PCE", org: "UNED (UNEDasiss)", lengua: "—", web: "https://www.uned.es", webT: "uned.es" },
  ],
  igual: [
    "Las materias de la fase de acceso y de admisión (RD 534/2024).",
    "La duración de 90 minutos y el descanso mínimo de 30.",
    "Las preguntas competenciales, con al menos un 70 % abiertas o semiabiertas.",
    "La fórmula de la nota (60 % Bachillerato + 40 % prueba) y los mínimos de 4 y 5.",
    "La revisión en 3 días hábiles y la tercera corrección si hay 2 puntos de diferencia.",
    "La nota de acceso sirve para cualquier universidad de España: no hace falta hacer la PAU en la comunidad donde quieres estudiar.",
  ],
  cambia: [
    "Quién pone y corrige los exámenes, y por tanto el estilo de las preguntas: cada comisión publica sus modelos y criterios. Practica con los de tu comunidad.",
    "El examen de lengua cooficial (Cataluña, Baleares, Comunitat Valenciana, Galicia, País Vasco y Navarra) y quién está exento.",
    "Las fechas de la convocatoria extraordinaria, el horario de cada día y las tasas.",
    "Si se puede usar calculadora, diccionario u otros materiales en cada materia.",
    "Las ponderaciones de cada grado: las decide cada universidad.",
    "La preinscripción universitaria: cada comunidad tiene su propio proceso y calendario.",
  ],
  distrito: `<p>Con la nota de la PAU puedes pedir plaza en <b>cualquier universidad pública de España</b> (distrito abierto). Tienes que hacer la preinscripción en <b>cada comunidad</b> donde quieras estudiar, en sus plazos. La nota de admisión se calcula con las ponderaciones de esa universidad, aunque hicieras la PAU en otra comunidad.</p>
    <p>Consejo: haz una lista con 4 o 5 grados y universidades, apunta sus ponderaciones y elige las materias de admisión que más te sirvan para todas. Y presenta preinscripción en todas las comunidades que te interesen: es gratis o casi.</p>`,

  cataluna: [
    ["Fechas 2027", `${ul([
      "<b>Convocatoria ordinaria: martes 1, miércoles 2 y jueves 3 de junio de 2027.</b> Se adelanta una semana respecto a 2026 (9-11 de junio) para coordinarse con el resto de España.",
      "<b>Tribunal de incidencias</b> (para quien tiene coincidencias o incidencias justificadas): 8, 9 y 10 de junio.",
      "<b>Convocatoria extraordinaria: 6, 7 y 8 de julio de 2027.</b> Es la primera vez que se hace en julio: 2026 fue el último año con selectividad en septiembre.",
      "Prueba de aptitud personal (<b>PAP</b>) para los grados de Educación Infantil y Primaria: 3 de abril de 2027 (ordinaria) y 2 de julio de 2027 (extraordinaria).",
      "Mayores de 25 años: fase general el 10 de abril y específica el 17 de abril.",
      "El horario de cada día todavía no se ha publicado.",
    ])}<p class="caption">Fuente: Canal Universitats (Generalitat de Catalunya), consultado el 21/11/2026.</p>`],
    ["Los exámenes", `${ul([
      "En Cataluña la fase de acceso tiene <b>cinco exámenes</b>: Lengua Castellana y Literatura II, <a href=\"../lengua-catalana-y-literatura-ii/\">Llengua Catalana i Literatura II</a>, Historia de España o Historia de la Filosofía, Lengua Extranjera II y la materia de modalidad.",
      "Los exámenes se pueden responder en <b>catalán o en castellano</b> (salvo los de lengua). En el Valle de Arán existe también el aranés.",
      "El alumnado que lleva poco tiempo en Cataluña puede pedir la <b>exención</b> del examen de catalán según la normativa del Departament.",
      "La fase de admisión funciona igual que en el resto de España: hasta tres materias más y una segunda lengua extranjera, que ponderan 0,1 o 0,2.",
      "Los exámenes de años anteriores, con sus criterios de corrección, se publican en la web del Canal Universitats. Son la mejor práctica posible.",
    ])}`],
    ["Preinscripción universitaria", `${ul([
      "En Cataluña hay una <b>única preinscripción</b> para todas las universidades públicas (y algunas privadas adscritas), en el Canal Universitats, en junio y julio.",
      "Ordenas los grados y universidades por preferencia. La primera preferencia es la más importante: elige bien el orden.",
      "Las <b>taules de ponderacions</b> de cada grado se publican cada curso en el Canal Universitats.",
      "Si quieres estudiar fuera de Cataluña, haz también la preinscripción de esa comunidad: tu nota vale en toda España.",
    ])}`],
    ["Consejos para el alumnado de Cataluña", ul([
      "Practica los dos exámenes de lengua con textos de opinión: en los dos se pide comentario y redacción argumentativa.",
      "Repasa la literatura catalana del currículo (Mercè Rodoreda, Pere Calders, Salvador Espriu…) con las lecturas obligatorias que fije la comisión.",
      "Si eliges Historia, la comisión catalana da mucho peso al análisis de fuentes y documentos: practica con textos y gráficos.",
      "Con cinco exámenes, un suspenso pesa menos en la media: no te hundas si un examen sale mal.",
    ])],
  ],
  glosarioCat: [
    ["Proves d'accés a la universitat (PAU)", "Prueba de Acceso a la Universidad, la selectividad."],
    ["Fase d'accés", "Fase de acceso (obligatoria)."],
    ["Fase d'admissió", "Fase de admisión (voluntaria, para subir nota)."],
    ["Nota d'accés", "Nota de acceso: 60 % Bachillerato + 40 % prueba."],
    ["Nota d'admissió", "Nota de admisión, sobre 14."],
    ["Ponderació", "Valor (0,1 o 0,2) por el que se multiplica una materia."],
    ["Nota de tall", "Nota de corte."],
    ["Preinscripció universitària", "Solicitud de plaza en la universidad."],
    ["Convocatòria ordinària / extraordinària", "Convocatoria de junio / de julio."],
    ["Revisió de qualificacions", "Revisión de notas."],
    ["Tribunal d'incidències", "Tribunal para quien no pudo examinarse por causa justificada o tiene coincidencias."],
    ["Prova d'aptitud personal (PAP)", "Prueba obligatoria en Cataluña para entrar en Magisterio."],
  ],

  calcNombres: [["lcl", "Lengua Castellana y Literatura II"], ["his", "Historia de España o Historia de la Filosofía"], ["le", "Lengua Extranjera II"], ["mod", "Materia de modalidad"]],
  calcNotas: [
    "Las notas se redondean como en las actas: la nota de la prueba y la de acceso con tres decimales.",
    "La nota de la prueba tiene que ser 4 o más y la de acceso 5 o más.",
    "Solo suman las materias que ponderan aprobadas (5 o más) y, de ellas, las dos que más aportan. Puedes incluir la materia de modalidad de la fase de acceso si esa universidad la pondera.",
    "Las ponderaciones dependen del grado y de la universidad. Búscalas en la web de la universidad o en el portal de acceso de tu comunidad.",
    "La calculadora es orientativa: la nota oficial es la que publica la comisión organizadora.",
  ],
  calcJS: `(function(){var f=document.getElementById("pau-calc");if(!f)return;var K="ep:pau:calc",$=function(i){return document.getElementById(i)};
var n=function(i){var v=($(i).value||"").replace(",",".");return v===""?null:Math.max(0,Math.min(10,parseFloat(v)))};
var r3=function(x){return Math.round(x*1000)/1000},fx=function(x){return x.toLocaleString("es-ES",{minimumFractionDigits:3,maximumFractionDigits:3})};
function save(){var o={};f.querySelectorAll("input,select").forEach(function(e){o[e.id]=e.type==="checkbox"?e.checked:e.value});try{localStorage.setItem(K,JSON.stringify(o))}catch(e){}}
function load(){var o=null;try{o=JSON.parse(localStorage.getItem(K))}catch(e){}if(!o)return;Object.keys(o).forEach(function(k){var e=$(k);if(!e)return;if(e.type==="checkbox")e.checked=o[k];else e.value=o[k]})}
function calc(){$("c-cof-l").hidden=!$("c-cof").checked;var ids=["c-lcl","c-his","c-le","c-mod"];if($("c-cof").checked)ids.push("c-lc");
var v=ids.map(n),res=$("pau-res"),nmb=n("c-nmb");if(v.some(function(x){return x===null})||nmb===null){res.innerHTML="<p>Rellena la media de Bachillerato y todas las notas de la fase de acceso.</p>";return}
var fa=r3(v.reduce(function(a,b){return a+b},0)/v.length),acc=r3(0.6*nmb+0.4*fa),h="";
h+="<div class=\\"pau-num\\"><span>Nota de la prueba</span><b>"+fx(fa)+"</b><small>"+(fa>=4?"Cuenta (4 o más)":"No llega a 4: no cuenta")+"</small></div>";
h+="<div class=\\"pau-num\\"><span>Nota de acceso</span><b>"+(fa>=4?fx(acc):"—")+"</b><small>"+(fa>=4&&acc>=5?"¡Tienes acceso a la universidad!":"Necesitas 4 en la prueba y 5 de acceso")+"</small></div>";
var ms=[];for(var i=1;i<=4;i++){var x=n("c-m"+i),p=parseFloat($("c-m"+i+"p").value);if(x!==null&&x>=5&&p>0)ms.push({t:$("c-m"+i+"n").value||("Materia "+i),a:r3(x*p)})}
ms.sort(function(a,b){return b.a-a.a});ms=ms.slice(0,2);var adm=fa>=4&&acc>=5?r3(acc+ms.reduce(function(a,b){return a+b.a},0)):null;
h+="<div class=\\"pau-num big\\"><span>Nota de admisión</span><b>"+(adm!==null?fx(adm):"—")+"</b><small>"+(ms.length?"Suman: "+ms.map(function(m){return m.t+" (+"+fx(m.a)+")"}).join(" y "):"Sin materias que ponderen")+"</small></div>";
var c=$("c-corte").value.replace(",",".");if(c!==""&&adm!==null){var d=r3(adm-parseFloat(c));h+="<p class=\\"pau-corte "+(d>=0?"ok":"no")+"\\">"+(d>=0?"Superas la nota de corte del año pasado por "+fx(d)+" puntos.":"Te faltan "+fx(-d)+" puntos para la nota de corte del año pasado. Mira cuánto subiría tu nota con una materia más o con un punto más en las que ponderan.")+"</p>"}
res.innerHTML=h}
load();f.addEventListener("input",function(){calc();save()});calc()})();`,

  corte: [
    ["Qué es la nota de corte", `<p>La <b>nota de corte</b> es la nota de admisión del <b>último estudiante que consiguió plaza</b> en un grado y una universidad el curso anterior. No la fija nadie de antemano: depende de cuántas plazas hay y de las notas de quienes las piden. Por eso cambia cada año, normalmente unas décimas.</p>
      <p>Se mide sobre 14 (nota de admisión). Un grado con «nota de corte 5» significa que el curso pasado entró todo el que lo pidió con la PAU aprobada.</p>`],
    ["Cómo funcionan las ponderaciones", `${ul([
      "Cada universidad publica, para cada grado, qué materias de 2º ponderan y cuánto: <b>0,1</b> (relacionada) o <b>0,2</b> (muy relacionada). Algunas no ponderan nada.",
      "Solo sirven las materias <b>aprobadas</b> (5 o más) y, de todas ellas, cuentan las <b>dos</b> que más aportan.",
      "Una materia con un 8 que pondera 0,2 suma 1,6 puntos; con un 8 que pondera 0,1 suma solo 0,8. Por eso vale la pena examinarse de las que ponderan 0,2 en tus grados.",
      "La misma materia puede ponderar 0,2 en una universidad y 0,1 en otra para el mismo grado. Mira las tablas de todas las universidades que te interesen.",
    ])}`],
    ["Cómo elegir las materias de admisión", `<ol>
      <li>Haz una lista con tus 3 a 5 grados preferidos y las universidades.</li>
      <li>Apunta qué materias ponderan 0,2 en cada uno.</li>
      <li>Elige dos o tres materias que se repitan y que se te den bien. Una tercera materia es un «seguro» por si una sale mal.</li>
      <li>Compara con la nota de corte: si con dos materias a 7 llegas (+2,8), no hace falta arriesgar más.</li>
      <li>No te examines de demasiadas: tres materias más en dos días es muy cansado y puede bajar el rendimiento en las de acceso.</li></ol>`],
    ["Dónde consultar las notas de corte oficiales", ul([
      "En la web de cada universidad (sección «Acceso» o «Admisión»).",
      "En el buscador oficial del Ministerio de Ciencia, Innovación y Universidades (QEDU, «Qué estudiar y dónde en la universidad»).",
      "En Cataluña, en el Canal Universitats («notes de tall»).",
    ])],
  ],
  cortesIntro: "Rangos aproximados de las notas de corte de los últimos cursos en universidades públicas españolas, para que te hagas una idea. Varían mucho entre universidades y de un año a otro: busca siempre el dato oficial de cada universidad.",
  cortes: [
    ["Medicina", "12,5 a 13,7", "Biología, Química (y a menudo Física o Matemáticas II)"],
    ["Doble grado Matemáticas y Física", "13 a 13,9", "Matemáticas II, Física"],
    ["Odontología", "11,5 a 13", "Biología, Química"],
    ["Biotecnología / Bioquímica", "11,5 a 13", "Biología, Química"],
    ["Enfermería", "10,5 a 12,5", "Biología, Química"],
    ["Fisioterapia", "10,5 a 12,5", "Biología, Química, Física"],
    ["Veterinaria", "11 a 12,8", "Biología, Química"],
    ["Ingeniería Aeroespacial", "11 a 13", "Matemáticas II, Física"],
    ["Relaciones Internacionales", "10,5 a 13", "Historia, Geografía, Economía/Empresa, MACS II, Lengua Extranjera"],
    ["Psicología", "8,5 a 12", "Biología, Matemáticas, MACS II"],
    ["Farmacia", "9,5 a 12", "Biología, Química"],
    ["Ingeniería Informática", "7,5 a 12,5", "Matemáticas II, Física"],
    ["Matemáticas", "8 a 13", "Matemáticas II, Física"],
    ["Derecho", "6 a 11", "Historia de España, Historia de la Filosofía, Geografía, Latín II"],
    ["ADE / Economía", "5 a 11", "MACS II, Matemáticas II, Empresa y Diseño de Modelos de Negocio"],
    ["Periodismo / Comunicación Audiovisual", "7 a 11,5", "Lengua, Historia, Geografía, Lengua Extranjera"],
    ["Arquitectura", "6,5 a 11", "Matemáticas II, Dibujo Técnico II, Física"],
    ["Magisterio (Infantil y Primaria)", "5 a 10,5", "Varía mucho (en Cataluña, además, PAP)"],
  ],
  cortesNota: "Orientativo, elaborado por Escolapedia a partir de las notas de corte publicadas en cursos recientes. No es un dato oficial.",
  ramas: [
    ["Ciencias de la Salud", "Biología, Química; a veces Física y Matemáticas II", "Biología y Química son casi siempre la mejor apuesta."],
    ["Ingeniería y Arquitectura", "Matemáticas II, Física; a veces Dibujo Técnico II, Química, Tecnología e Ingeniería II", "Matemáticas II pondera también si la hiciste en acceso: compruébalo."],
    ["Ciencias", "Matemáticas II, Física, Química, Biología, Geología y Ciencias Ambientales", "Elige según el grado: Física para Física, Biología para Biología…"],
    ["Ciencias Sociales y Jurídicas", "MACS II, Empresa y Diseño de Modelos de Negocio, Geografía, Historia, Latín II", "Para Derecho pesan Historia y Filosofía; para ADE, MACS II y Empresa."],
    ["Artes y Humanidades", "Latín II, Griego, Historia del Arte, Historia de la Filosofía, Geografía, Lengua extranjera, materias de Artes", "Historia del Arte y Latín II suelen ponderar 0,2 en muchas filologías y en Historia."],
  ],

  plan: {
    meses: [
      ["Septiembre y octubre", "Organiza el curso: horario semanal fijo, una libreta o carpeta por materia y un calendario con los exámenes del instituto. Decide Historia de España o Filosofía y las materias de admisión."],
      ["Noviembre y diciembre", "Estudia al día cada tema nuevo (resumen + ejercicios). Empieza a hacer preguntas de PAU de los temas que ya has visto, una a la semana por materia."],
      ["Enero", "Repaso de la primera evaluación con modelos de examen. Identifica tus «temas flojos» y apúntalos."],
      ["Febrero y marzo", "Un examen de PAU completo cada semana (rotando materias), en 90 minutos y con reloj. Corrígelo con los criterios oficiales."],
      ["Abril", "Repaso general de 1º y 2º trimestre. Prepara fichas o tarjetas de repaso con lo que más se olvida (fórmulas, fechas, autores, vocabulario)."],
      ["Mayo", "Termina el curso fuerte: la media de Bachillerato es el 60 % de tu nota de acceso. Entre exámenes finales, mantén un modelo de PAU cada dos o tres días."],
      ["Última semana de mayo", "Simulacros de todos los exámenes de acceso, uno al día, en horario real. Repasa tarjetas y errores frecuentes."],
      ["Del 1 al 3 de junio", "Nada nuevo. Repasos cortos, descanso y sueño."],
    ],
    semana: [
      ["Lunes", "Matemáticas (o tu materia de modalidad): ejercicios tipo PAU", "Tarjetas de Historia/Filosofía (10 min)"],
      ["Martes", "Lengua: un comentario de texto completo", "Vocabulario de inglés (10 min)"],
      ["Miércoles", "Materia de admisión 1: preguntas de PAU", "Fórmulas o conceptos clave (10 min)"],
      ["Jueves", "Historia de España o Filosofía: un tema desarrollado + fuente", "Autores y obras de literatura (10 min)"],
      ["Viernes", "Inglés: reading + writing cronometrado", "Repaso de errores de la semana"],
      ["Sábado", "Examen de PAU completo (90 min) de una materia y corrección", "—"],
      ["Domingo", "Descanso. Deporte, familia, amigos.", "Planificar la semana (10 min)"],
    ],
    final: [
      ["Días −21 a −15", "Simulacro de Lengua y repaso de comentario", "Materia de modalidad: dos bloques"],
      ["Días −14 a −8", "Simulacro de Historia/Filosofía y de Inglés", "Materias de admisión: preguntas que más caen"],
      ["Días −7 a −3", "Un simulacro al día en el horario real del examen", "Repaso de errores y tarjetas"],
      ["Días −2 y −1", "Repaso ligero de esquemas", "Preparar material, paseo, cena normal, a dormir pronto"],
    ],
    tecnicas: `${box("Lo que funciona", ul([
      "<b>Recuperar, no releer</b>: cierra el libro y escribe lo que recuerdas, o hazte preguntas. Es la técnica más eficaz que se conoce (práctica de recuperación).",
      "<b>Repaso espaciado</b>: vuelve a cada tema al día siguiente, a los 3 días, a la semana y a las 3 semanas. Las tarjetas de Escolapedia lo hacen solas.",
      "<b>Hacer exámenes reales</b> con tiempo y corregirlos con los criterios oficiales.",
      "<b>Mezclar materias y tipos de ejercicio</b> en una misma sesión (práctica intercalada).",
      "<b>Explicarlo con tus palabras</b> a alguien o en voz alta: si no sabes explicarlo, no lo sabes.",
      "Bloques de <b>45-50 minutos</b> con 10 de descanso, sin móvil cerca.",
    ]))}
    ${box("Lo que no funciona tanto", ul([
      "Subrayar y releer muchas veces: da sensación de saber, pero se olvida rápido.",
      "Estudiar toda la noche antes del examen: el sueño es cuando se fija la memoria.",
      "Copiar resúmenes ajenos sin trabajarlos.",
      "Estudiar con notificaciones del móvil: cada interrupción cuesta minutos de concentración.",
    ]))}`,
  },

  consejos: [
    ["Técnica de examen", [
      "Lee <b>todo el examen</b> al principio (5 minutos) y decide qué preguntas eliges si hay opción. Marca el tiempo de cada una según los puntos: con 90 minutos y 10 puntos, unos 8 minutos por punto.",
      "Empieza por la pregunta que mejor sabes: da seguridad y asegura puntos.",
      "Contesta <b>exactamente lo que se pregunta</b>: si piden «explica» no basta con «define»; si piden «justifica», da razones.",
      "Escribe con <b>orden</b>: introducción breve, desarrollo por párrafos, conclusión. Numera los apartados como en el enunciado.",
      "En ciencias y matemáticas, deja todos los pasos y las unidades. Un resultado sin desarrollo vale poco; un desarrollo correcto con un error de cálculo vale mucho.",
      "Ortografía y presentación: restan en todas las materias. Reserva 5 minutos al final para releer.",
      "Si te bloqueas, pasa a otra pregunta y vuelve después. Nunca dejes una pregunta en blanco: escribe lo que sepas.",
    ]],
    ["Qué llevar", [
      "DNI o pasaporte (imprescindible) y el resguardo de la matrícula.",
      "Dos o tres bolígrafos azules o negros que no se borren. Lápiz, goma y regla para dibujos y gráficas.",
      "Calculadora científica permitida (sin memoria programable ni gráfica, salvo que se diga lo contrario) con pilas nuevas.",
      "Material de dibujo para Dibujo Técnico y Artístico; diccionario si está permitido (Latín, Griego).",
      "Agua, algo de comer para los descansos y una chaqueta (las aulas grandes pueden estar frías).",
      "Reloj analógico (en muchas sedes los relojes inteligentes están prohibidos). El móvil, apagado y guardado: llevarlo encima puede anular el examen.",
    ]],
    ["La semana antes", [
      "No estudies nada nuevo: repasa esquemas, tarjetas y tus errores frecuentes.",
      "Haz un simulacro por día en el mismo horario que el examen real, para que el cuerpo se acostumbre.",
      "Comprueba la sede, el aula y cómo llegar. Ve el día antes si no la conoces.",
      "Mantén el ejercicio físico: 30 minutos de caminar o deporte al día mejoran la atención y el sueño.",
    ]],
    ["Dormir y comer (consejos de salud)", [
      "<b>Dormir 8 horas</b> las noches previas es más útil que estudiar esas horas: el sueño consolida lo aprendido. Mantén un horario fijo de acostarte y levantarte.",
      "Evita pantallas la última hora antes de dormir y no tomes bebidas con cafeína después de media tarde.",
      "<b>Desayuno</b> normal, el que tomas siempre: no es día de probar cosas nuevas. Hidratos de digestión lenta (pan, avena), algo de proteína y fruta.",
      "Bebe agua durante el día. En los descansos, fruta, frutos secos o un bocadillo pequeño.",
      "Bebidas energéticas, pastillas «para concentrarse» o fármacos sin receta: <b>no</b>. Pueden provocar nervios, taquicardia e insomnio. Si tomas una medicación habitual, sigue como siempre y consulta con tu médico si tienes dudas.",
    ]],
    ["Los nervios", [
      "Un poco de nervios es normal y útil: te mantiene alerta. Lo que hay que evitar es el bloqueo.",
      "<b>Respiración 4-6</b>: inspira por la nariz contando 4, suelta el aire por la boca contando 6. Repite 5 veces antes de empezar o si te bloqueas.",
      "Cambia el «tengo que sacar un 13» por «voy a hacer este examen lo mejor que pueda». La PAU tiene segunda oportunidad.",
      "Evita comentar las respuestas con los compañeros en los descansos: solo genera dudas. Piensa en el siguiente examen.",
      "Si la ansiedad no te deja dormir o comer durante días, habla con tu familia, tu tutor o tu médico de familia: tiene solución.",
    ]],
    ["Para las familias", [
      "Lo que más ayuda es un ambiente tranquilo, comidas normales y que el estudiante duerma.",
      "Preguntad «¿cómo estás?» más que «¿cuánto has estudiado?».",
      "Ayudad con la logística: transporte, documentación, despertador.",
      "Si un examen sale mal, recordadle que la nota es la media y que hay convocatoria extraordinaria. Nunca es el final.",
    ]],
    ["Si un examen sale mal", `<p>Respira y piensa en el siguiente: la nota de la prueba es la <b>media</b> de todos los exámenes y basta un 4 para que cuente. Un 3 en un examen se compensa con un 6 en otro. Cuando salgan las notas, compara tus respuestas con las soluciones oficiales y, si crees que te falta nota, pide revisión. Y recuerda: puedes repetir la prueba en la convocatoria extraordinaria o el año que viene para subir nota.</p>`],
  ],

  faqGrupos: [
    ["La prueba", [
      ["¿Hay que aprobar todos los exámenes?", "No. Lo que tiene que ser 4 o más es la <b>media</b> de los exámenes de la fase de acceso, y la nota de acceso (60 % Bachillerato + 40 % prueba) tiene que llegar a 5."],
      ["¿Qué es mejor, Historia de España o Historia de la Filosofía?", "La que mejor se te dé y más hayas trabajado. Piensa también en la admisión: la que no elijas en acceso la puedes hacer en admisión si pondera en tu grado (por ejemplo, para Derecho o Filosofía)."],
      ["¿Puedo examinarme de Matemáticas II si hago Humanidades?", "En la fase de acceso, la materia de modalidad es la tuya (Latín II o MACS II en Humanidades). En la fase de admisión puedes hacer cualquier materia de 2º de Bachillerato, incluso de otra modalidad, aunque no la hayas cursado."],
      ["¿Cuánto dura cada examen?", "90 minutos, con al menos 30 minutos de descanso entre exámenes seguidos."],
      ["¿Cómo son las preguntas competenciales?", "Parten de una situación real (un texto, una noticia, unos datos, un experimento) y piden aplicar lo aprendido, razonar y argumentar. Al menos el 70 % de cada examen son preguntas abiertas o semiabiertas."],
      ["¿Se puede elegir entre preguntas?", "Hay un solo modelo de examen por materia, pero en algunos apartados se puede elegir entre varias preguntas. Lee bien las instrucciones: si contestas más de las pedidas, normalmente solo se corrigen las primeras."],
      ["¿Hay examen oral de inglés?", "No. El RD 534/2024 no incluye una prueba oral; el examen de Lengua Extranjera II es escrito y se plantea y responde en esa lengua. Algunas comisiones incluyen ejercicios de comprensión a partir de textos."],
      ["¿Puedo usar calculadora o diccionario?", "Depende de la materia y de la comisión de cada comunidad. Lo habitual: calculadora científica no programable en Matemáticas, Física, Química y similares; diccionario en Latín y Griego. Míralo en las orientaciones oficiales de tu comunidad."],
    ]],
    ["Notas", [
      ["¿Cuándo salen las notas?", "Unos 10 días después del último examen, a mediados de junio en la convocatoria ordinaria. Se consultan en la web de la universidad o del portal de acceso de tu comunidad."],
      ["¿Cuánto tiempo vale la nota?", "La nota de acceso no caduca. Las notas de las materias de admisión valen para el curso siguiente a la prueba y los dos siguientes."],
      ["¿Cómo subo nota?", "Repitiendo la prueba completa de acceso (en la extraordinaria o en años siguientes) o examinándote otra vez de las materias de admisión. Siempre cuenta la nota más alta."],
      ["¿Cuenta la Religión en la media de Bachillerato?", "No. La media de Bachillerato que se usa para la PAU no incluye Religión."],
      ["¿Qué es la nota de corte?", "La nota de admisión del último estudiante que entró en un grado el curso anterior. Más información en <a href=\"../notas-de-corte-y-ponderaciones/\">Notas de corte y ponderaciones</a>."],
    ]],
    ["Revisión", [
      ["¿Cómo pido revisión?", "En la web de la comisión organizadora de tu comunidad, en los 3 días hábiles siguientes a la publicación de las notas. Puedes pedirla de uno o de varios exámenes."],
      ["¿Me pueden bajar la nota?", "Sí. Otro especialista corrige el examen entero y la nota final es la media de las dos correcciones (o se hace una tercera si se diferencian en 2 puntos o más). Solo los errores materiales (sumas, preguntas sin corregir) se arreglan siempre a favor."],
      ["¿Puedo ver mi examen?", "Sí, una vez resuelta la revisión, en un plazo de 10 días hábiles."],
    ]],
    ["Casos especiales", [
      ["Vengo de FP de grado superior, ¿tengo que hacer la PAU?", "No. Tu título de Técnico Superior te da acceso con la nota media del ciclo. Puedes hacer la fase de admisión para subir hasta 14."],
      ["Tengo dislexia, TDAH u otra necesidad, ¿hay adaptaciones?", "Sí: más tiempo, exámenes adaptados, letra grande, aula aparte, apoyos… Se piden al matricularte en la PAU con el informe del centro. Las adaptaciones nunca bajan la nota."],
      ["Estoy enfermo el día del examen, ¿qué hago?", "Avisa enseguida a la comisión de tu comunidad con un justificante médico. Algunas comunidades tienen un tribunal de incidencias (en Cataluña, del 8 al 10 de junio de 2027). Si no, siempre queda la convocatoria extraordinaria."],
      ["Dos exámenes de admisión coinciden a la misma hora", "Las comisiones tienen un horario de incompatibilidades. Se indica al matricularte."],
      ["¿Puedo hacer la PAU en una comunidad y estudiar en otra?", "Sí. La nota vale en toda España. Tienes que hacer la preinscripción en la comunidad donde quieras estudiar."],
    ]],
  ],
  sinExamen: "Las optativas (Psicología, Ciencias de la Tierra y del Medio Ambiente, Fundamentos de Administración y Gestión, Tecnologías de la Información y la Comunicación II…) y la Religión no tienen examen de PAU. Algunas materias de modalidad muy específicas (como Coro y Técnica Vocal II) solo se examinan donde la comisión lo ofrece: consulta la web oficial de tu comunidad.",
};
