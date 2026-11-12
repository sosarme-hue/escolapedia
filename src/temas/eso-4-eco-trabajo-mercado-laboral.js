// Economía y Emprendimiento 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { piramide, filas, barras, dos, figCols } = require("./_hum");

module.exports = {
  materia: "Economía y Emprendimiento",
  curso: "4-eso",
  titulo: "El trabajo y el mercado laboral",
  minutos: 35,
  objetivos: ["Distinguir población activa, ocupada, parada e inactiva y calcular la tasa de paro", "Identificar los tipos de desempleo y sus causas", "Leer una nómina básica y conocer el salario mínimo"],
  claves: ["población activa", "tasa de paro", "salario", "nómina", "contrato", "Seguridad Social"],
  pregunta: {
    texto: "Las noticias dicen que el paro juvenil en España ronda el 25 %. ¿Significa que uno de cada cuatro jóvenes no trabaja?",
    respuesta: "No exactamente. La <mark>tasa de paro</mark> se calcula solo sobre la <b>población activa</b>: los que trabajan o buscan trabajo. Los que estudian y no buscan empleo son <b>inactivos</b> y no cuentan. Entender cómo se mide el <b>mercado laboral</b> ayuda a leer bien las noticias.",
  },
  bloques: [
    {
      html: `<h3>Cómo se clasifica la población</h3><p>La <b>población en edad de trabajar</b> (16 años o más) se divide en <mark>activa</mark> (quienes trabajan, los <b>ocupados</b>, y quienes buscan trabajo activamente, los <b>parados</b>) e <b>inactiva</b> (estudiantes, jubilados, personas que cuidan del hogar sin buscar empleo). En España la mide cada trimestre el INE con la <b>Encuesta de Población Activa</b> (EPA).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Árbol: población de 16 años o más se divide en activa e inactiva; la activa en ocupados y parados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} text-anchor="middle" font-size="11.5" font-weight="700">
          <path d="M130 42 L 70 82 M130 42 L 196 82 M70 104 L 40 140 M70 104 L 110 140" stroke="var(--line)" stroke-width="2.5"/>
          <rect x="60" y="18" width="140" height="26" rx="13" fill="var(--ink)"/><text x="130" y="35" fill="#fff">16 años o más</text>
          <rect x="30" y="80" width="80" height="26" rx="13" fill="var(--pen)"/><text x="70" y="97" fill="#fff">activos</text>
          <rect x="156" y="80" width="80" height="26" rx="13" fill="var(--muted)"/><text x="196" y="97" fill="#fff">inactivos</text>
          <rect x="8" y="138" width="70" height="26" rx="13" fill="var(--leaf)"/><text x="43" y="155" fill="#fff">ocupados</text>
          <rect x="84" y="138" width="62" height="26" rx="13" fill="var(--red)"/><text x="115" y="155" fill="#fff">parados</text>
          <text x="196" y="130" fill="var(--ink)" font-weight="400" font-size="10.5">estudiantes,</text><text x="196" y="144" fill="var(--ink)" font-weight="400" font-size="10.5">jubilados…</text>
        </g>
      </svg>`,
    },
    {
      html: `<h3>La tasa de paro</h3><p>La <mark>tasa de paro</mark> es el porcentaje de parados sobre la población activa: <b>parados ÷ activos × 100</b>. Si en un pueblo hay 800 activos y 80 parados, la tasa es 80 ÷ 800 × 100 = <b>10 %</b>. En España el paro es más alto entre los jóvenes y entre quienes tienen menos estudios: formarse reduce el riesgo de estar en paro.</p>`,
      svg: barras("Tasa de paro aproximada en España por nivel de estudios", [["primaria", 22, "var(--red)", "≈ 22 %"], ["ESO", 15, "var(--sun)", "≈ 15 %"], ["FP/Bach.", 11, "var(--pen)", "≈ 11 %"], ["universidad", 7, "var(--leaf)", "≈ 7 %"]], 25),
    },
    {
      html: `<h3>Tipos de desempleo</h3><p>No todo el paro es igual. El <b>friccional</b> es el de quien cambia de empleo o busca el primero. El <b>estacional</b> depende de la época del año (turismo en verano, campañas de Navidad). El <b>cíclico</b> aumenta en las crisis económicas. El <mark>estructural</mark> se da cuando lo que saben hacer los trabajadores no coincide con lo que piden las empresas, por ejemplo por cambios tecnológicos.</p>`,
      svg: filas("Cuatro tipos de desempleo", [["Friccional", "cambio o primer empleo", "var(--pen)"], ["Estacional", "según la época del año", "var(--sun)"], ["Cíclico", "por crisis económicas", "var(--red)"], ["Estructural", "formación no encaja", "var(--muted)"]]),
    },
    {
      html: `<h3>El contrato y la nómina</h3><p>El <b>contrato de trabajo</b> recoge el puesto, la jornada, el salario y la duración: puede ser <b>indefinido</b> o <b>temporal</b>. Cada mes el trabajador recibe una <mark>nómina</mark>: el <b>salario bruto</b> menos las retenciones del IRPF y las cotizaciones a la <b>Seguridad Social</b> da el <b>salario neto</b>, lo que llega a la cuenta. En España existe un <b>salario mínimo interprofesional</b> (SMI) que ninguna empresa puede rebajar.</p>`,
      svg: dos("Salario bruto y salario neto", ["Bruto", ["todo lo que", "paga la empresa", "por tu trabajo", "antes de", "descuentos"], "var(--pen)"], ["Neto", ["lo que cobras", "tras restar", "IRPF y", "Seguridad", "Social"], "var(--leaf)"]),
    },
  ],
  figura: {
    titulo: "Fórmulas del mercado laboral",
    svg: figCols("Población activa, tasa de paro y tasa de actividad con sus fórmulas", [
      ["Activos", ["ocupados", "+", "parados", "(16 años o más)", ""], "var(--pen)"],
      ["Tasa de paro", ["parados", "÷ activos", "× 100", "ej.: 80 / 800", "= 10 %"], "var(--red)"],
      ["Tasa de actividad", ["activos", "÷ población ≥ 16", "× 100", "ej.: 800 / 1 400", "≈ 57 %"], "var(--leaf)"],
    ]),
  },
  video: { id: "J_uyyUiC07E", titulo: "El mercado laboral", canal: "Cité de l'Économie (Citéco)", vistas: 600702, megusta: 0, busqueda: "mercado laboral desempleo explicación" },
  quiz: [
    { q: "Un estudiante de 17 años que no busca trabajo es…", o: ["parado", "ocupado", "inactivo"], a: 2, e: "No trabaja ni busca empleo, así que no forma parte de la población activa." },
    { q: "La población activa está formada por…", o: ["ocupados y parados", "ocupados e inactivos", "solo los ocupados"], a: 0, e: "Activos = quienes trabajan + quienes buscan trabajo activamente." },
    { q: "Si hay 50 parados y 500 activos, la tasa de paro es…", o: ["5 %", "10 %", "50 %"], a: 1, e: "50 ÷ 500 × 100 = 10 %." },
    { q: "Un socorrista que solo trabaja en verano sufre paro…", o: ["estacional", "estructural", "cíclico"], a: 0, e: "Depende de la época del año." },
    { q: "El salario neto es…", o: ["el salario antes de descuentos", "lo que cobras tras restar IRPF y Seguridad Social", "el salario mínimo"], a: 1, e: "Es lo que realmente llega a tu cuenta." },
  ],
  examen: [
    { q: "¿Quién elabora la EPA en España?", o: ["El Banco de España", "El INE", "Las empresas"], a: 1, e: "El Instituto Nacional de Estadística la publica cada trimestre." },
    { q: "Si llega una crisis y cierran muchas empresas, aumenta el paro…", o: ["friccional", "cíclico", "estacional"], a: 1, e: "El paro cíclico sube y baja con la actividad económica." },
    { q: "Formarse reduce sobre todo el paro…", o: ["estructural", "estacional", "friccional"], a: 0, e: "Adaptar la formación a lo que piden las empresas reduce el desajuste." },
  ],
  feynman: ["Cómo se clasifica la población respecto al trabajo", "Cómo se calcula la tasa de paro con un ejemplo", "Los cuatro tipos de desempleo", "Qué diferencia hay entre salario bruto y neto"],
  mapa: mapa("MERCADO LABORAL", "var(--leaf)", [
    ["Población", "activa · inactiva", "var(--pen)"],
    ["Paro", "parados / activos × 100", "var(--red)"],
    ["Tipos", "friccional · estacional · cíclico", "var(--sun)"],
    ["Nómina", "bruto − retenciones = neto", "var(--muted)"],
  ], 260),
  tarjetas: [
    ["Población activa", "Ocupados + parados (16 años o más)."],
    ["Tasa de paro", "Parados ÷ activos × 100."],
    ["Paro estructural", "Desajuste entre la formación de los trabajadores y lo que piden las empresas."],
    ["Salario neto", "Salario bruto menos IRPF y cotizaciones a la Seguridad Social."],
    ["EPA", "Encuesta de Población Activa, del INE, cada trimestre."],
  ],
  familias: ["Si alguien de la familia trabaja, mirad juntos una nómina (tapando datos personales) e identificad bruto y neto.", "Buscad en el INE la última tasa de paro de vuestra comunidad.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El mercado de trabajo: población activa, desempleo, contrato y nómina; derechos y deberes laborales (RD 217/2022, Economía y Emprendimiento 4º).",
    ideas: ["Cálculo de tasas con datos reales de la EPA por comunidades.", "Lectura de una nómina ficticia.", "Debate sobre el paro juvenil y sus soluciones."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Encuesta de Población Activa (INE)", url: "https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736176918&menu=ultiDatos&idp=1254735976595" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Calcular tasas de actividad y de paro", "Leer una nómina e identificar sus partes"],
  bloques: [
    { tras: "Cómo se clasifica la población", html: `<h3>La tasa de actividad y la de empleo</h3><p>Además de la tasa de paro, se usan otras dos tasas. La <mark>tasa de actividad</mark> indica qué parte de la población en edad de trabajar (16 años o más) está activa: TA = activos / población de 16 o más × 100. La <b>tasa de empleo</b> indica cuántos de ellos trabajan: TE = ocupados / población de 16 o más × 100. En España, la <b>Encuesta de Población Activa</b> (EPA) del INE las calcula cada trimestre preguntando a unos 65.000 hogares. El paro registrado en el SEPE es otra medida distinta: cuenta solo a quienes se inscriben como demandantes de empleo.</p>` },
    { tras: "Tipos de desempleo", html: `<h3>Por qué el paro juvenil es tan alto</h3><p>En España el paro de los menores de 25 años suele duplicar la media. Influyen la <b>falta de experiencia</b>, el abandono temprano de los estudios, la <b>temporalidad</b> (muchos contratos cortos) y que los jóvenes son los primeros en ser despedidos en las crisis. Por eso la formación es la mejor protección: las personas con estudios superiores o FP tienen tasas de paro mucho más bajas que las que solo tienen la ESO. Programas como la <mark>Garantía Juvenil</mark> o los contratos formativos buscan facilitar el primer empleo.</p>` },
    { tras: "El contrato y la nómina", html: `<h3>Tipos de contrato</h3>${tabla(["Contrato", "Para qué", "Rasgos"], [["Indefinido", "trabajos estables", "sin fecha de fin; el más habitual desde la reforma de 2021"], ["Fijo discontinuo", "trabajos de temporada que se repiten", "p. ej., hostelería en verano o campañas agrícolas"], ["Temporal", "picos de producción o sustituciones", "duración limitada"], ["Formativo", "aprender un oficio o hacer prácticas", "para estudiantes o recién titulados"]])}<p>El contrato debe indicar el puesto, la jornada, el salario y la duración. La <mark>jornada máxima</mark> es de 40 horas semanales de media, y los menores de 18 no pueden hacer horas extra ni trabajo nocturno.</p>` },
    { tras: "El contrato y la nómina", html: `<h3>Cómo se lee una nómina</h3><p>La nómina es el recibo del salario. Tiene tres partes: los <b>devengos</b> (lo que se gana: salario base, complementos, pagas extra prorrateadas), las <b>deducciones</b> (lo que se descuenta) y el <mark>líquido a percibir</mark>, lo que llega a la cuenta. Las deducciones principales son las <b>cotizaciones a la Seguridad Social</b> que paga el trabajador (alrededor del 6,5 %: contingencias comunes, desempleo y formación) y la retención del <b>IRPF</b>, que depende del sueldo y de la situación familiar. La empresa paga además su propia cotización, mucho mayor (en torno al 30 %).</p>`, video: { id: "sdTAOnK51fs", titulo: "¿Qué es la nómina y cómo se calcula?", canal: "ACADEM Cursos para Empresas", vistas: 179864, megusta: 0 } },
    { tras: "El contrato y la nómina", html: `<h3>Salario bruto, neto y salario mínimo</h3><p>El <b>salario bruto</b> es el total antes de descuentos; el <b>neto</b>, lo que se cobra de verdad. El <mark>salario mínimo interprofesional</mark> (SMI) es lo mínimo que se puede pagar por una jornada completa: en 2025 era de 1.184 € brutos al mes en 14 pagas. Los salarios también se negocian en los <b>convenios colectivos</b> entre sindicatos y empresarios de cada sector. Ganar más no depende solo del esfuerzo: influyen la formación, la productividad del sector, la demanda de esa profesión y la negociación.</p>` },
  ],
  ejemplos: [
    { enunciado: "Un país tiene 40 millones de habitantes de 16 años o más; 24 millones son activos y 3 millones están parados. Calcula las tasas de actividad, paro y empleo.", pasos: ["Ocupados = 24 − 3 = 21 millones.", "Tasa de actividad = 24 / 40 · 100 = 60 %.", "Tasa de paro = 3 / 24 · 100 = 12,5 %.", "Tasa de empleo = 21 / 40 · 100 = 52,5 %."], resultado: "Actividad 60 %, paro 12,5 % y empleo 52,5 %." },
    { enunciado: "Lucas tiene un salario bruto mensual de 1.500 €. Cotiza un 6,5 % a la Seguridad Social y tiene una retención de IRPF del 10 %. ¿Cuánto cobra?", pasos: ["Seguridad Social: 1.500 · 0,065 = 97,50 €.", "IRPF: 1.500 · 0,10 = 150 €.", "Deducciones: 97,50 + 150 = 247,50 €.", "Neto: 1.500 − 247,50 = 1.252,50 €."], resultado: "Cobra 1.252,50 € netos." },
    { enunciado: "Clasifica el paro: un camarero de la costa en invierno; una persona que deja su empleo para buscar otro mejor; un trabajador de una fábrica que cierra en una crisis.", pasos: ["Camarero en invierno: paro estacional.", "Cambio de empleo: paro friccional.", "Cierre por la crisis: paro cíclico (o coyuntural)."], resultado: "Estacional, friccional y cíclico." },
  ],
  errores: [
    "Calcular la tasa de paro sobre toda la población: se calcula sobre los activos.",
    "Considerar parado a un estudiante que no busca trabajo: es inactivo.",
    "Confundir salario bruto con neto.",
    "Pensar que el IRPF es igual para todos: depende del sueldo y de la situación personal.",
    "Confundir el paro de la EPA con el paro registrado en el SEPE.",
  ],
  ejercicios: [
    { q: "¿Quiénes forman la población activa?", sol: "Las personas de 16 años o más que trabajan (ocupados) o buscan trabajo activamente (parados)." },
    { q: "Clasifica: una jubilada, un estudiante de 17 años, una persona que busca empleo, un cocinero.", sol: "Jubilada: inactiva. Estudiante: inactivo. Busca empleo: parada (activa). Cocinero: ocupado (activo)." },
    { q: "Con 30 millones de activos y 3,6 millones de parados, ¿cuál es la tasa de paro?", sol: "3,6 / 30 · 100 = 12 %." },
    { q: "¿Qué es la EPA?", sol: "La Encuesta de Población Activa del INE, que mide el empleo y el paro cada trimestre." },
    { q: "Cita dos causas del alto paro juvenil.", sol: "La falta de experiencia y la temporalidad; también el abandono escolar temprano." },
    { q: "¿Qué es un contrato fijo discontinuo?", sol: "Un contrato indefinido para trabajos de temporada que se repiten cada año." },
    { q: "¿Cuál es la jornada máxima legal?", sol: "40 horas semanales de media en cómputo anual." },
    { q: "Explica las tres partes de una nómina.", sol: "Devengos (lo que se gana), deducciones (Seguridad Social e IRPF) y líquido a percibir (lo que se cobra)." },
    { q: "Un bruto de 2.000 € tiene un 6,5 % de Seguridad Social y un 12 % de IRPF. Calcula el neto.", sol: "SS: 130 €. IRPF: 240 €. Neto: 2.000 − 370 = 1.630 €." },
    { q: "¿Qué es un convenio colectivo?", sol: "Un acuerdo entre sindicatos y empresarios de un sector o empresa que fija salarios, jornada y otras condiciones." },
  ],
  quiz: [
    { q: "La tasa de paro se calcula sobre…", o: ["la población total", "la población activa", "los ocupados"], a: 1, e: "Parados / activos × 100." },
    { q: "Un jubilado es…", o: ["parado", "inactivo", "ocupado"], a: 1, e: "No trabaja ni busca empleo." },
    { q: "Lo que llega a tu cuenta es el…", o: ["salario bruto", "líquido a percibir", "devengo"], a: 1, e: "Es el salario neto." },
    { q: "El IRPF es…", o: ["un impuesto sobre la renta", "una cotización a la Seguridad Social", "una paga extra"], a: 0, e: "Impuesto sobre la Renta de las Personas Físicas." },
    { q: "El SMI lo fija…", o: ["cada empresa", "el Gobierno", "el trabajador"], a: 1, e: "Tras consultar a sindicatos y empresarios." },
  ],
  tarjetas: [
    ["Tasa de actividad", "Activos / población de 16 o más × 100."],
    ["Líquido a percibir", "Lo que se cobra tras las deducciones."],
    ["Convenio colectivo", "Acuerdo de condiciones de trabajo de un sector."],
  ],
});
