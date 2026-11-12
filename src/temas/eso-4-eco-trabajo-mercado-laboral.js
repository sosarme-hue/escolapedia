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
