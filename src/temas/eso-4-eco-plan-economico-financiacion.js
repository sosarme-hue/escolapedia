// Economía y Emprendimiento 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, barras, flujo, figCols } = require("./_hum");

module.exports = {
  materia: "Economía y Emprendimiento",
  curso: "4-eso",
  titulo: "Plan económico y financiación",
  minutos: 40,
  objetivos: ["Distinguir inversión inicial, gastos e ingresos previstos de un proyecto", "Calcular el umbral de rentabilidad de un negocio sencillo", "Comparar fuentes de financiación propias y ajenas"],
  claves: ["inversión inicial", "umbral de rentabilidad", "financiación propia", "financiación ajena", "préstamo", "crowdfunding"],
  pregunta: {
    texto: "Quieres montar un puesto de zumos naturales en la feria del instituto. Necesitas una licuadora, fruta, vasos y un toldo. ¿Cuántos zumos tendrás que vender para no perder dinero? ¿Y de dónde sacas el dinero para empezar?",
    respuesta: "Para responder hace falta un <mark>plan económico</mark>: calcular la <b>inversión inicial</b>, los costes y los ingresos previstos, y hallar el <b>umbral de rentabilidad</b> (cuántas unidades hay que vender para cubrir costes). Después, elegir la mejor <b>fuente de financiación</b>.",
  },
  bloques: [
    {
      html: `<h3>Inversión, gastos e ingresos</h3><p>La <mark>inversión inicial</mark> es lo que necesitas comprar para empezar y dura en el tiempo (la licuadora, el toldo, un ordenador). Los <b>gastos</b> son lo que pagas para funcionar: <b>fijos</b> (alquiler, cuota de autónomo) y <b>variables</b> (fruta y vasos por cada zumo). Los <b>ingresos</b> son las ventas previstas: precio × unidades vendidas.</p>`,
      svg: filas("Plan económico del puesto de zumos", [["Inversión", "licuadora y toldo: 200 €", "var(--ink)"], ["Fijos", "permiso de la feria: 50 €", "var(--red)"], ["Variables", "fruta y vaso: 1 € por zumo", "var(--sun)"], ["Ingresos", "precio: 3 € por zumo", "var(--leaf)"]]),
    },
    {
      html: `<h3>El umbral de rentabilidad</h3><p>El <mark>umbral de rentabilidad</mark> o punto muerto es la cantidad que hay que vender para que ingresos = costes (beneficio cero). Se calcula: <b>costes fijos ÷ (precio − coste variable unitario)</b>. Si los costes fijos son 250 € (incluida la inversión), el precio 3 € y el coste variable 1 €, cada zumo deja 2 € de margen: 250 ÷ 2 = <b>125 zumos</b>. A partir del zumo 126, hay beneficio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfico del umbral de rentabilidad: la recta de ingresos corta a la de costes en 125 zumos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M30 150 H 244 M30 150 V 16" stroke="var(--ink)" stroke-width="2"/>
        <path d="M30 150 L 230 30" stroke="var(--leaf)" stroke-width="3"/>
        <path d="M30 120 L 230 80" stroke="var(--red)" stroke-width="3"/>
        <path d="M30 150 L 105 105 L 30 120 Z" fill="var(--red)" opacity=".25"/><path d="M105 105 L 230 30 L 230 80 Z" fill="var(--leaf)" opacity=".25"/>
        <circle cx="105" cy="105" r="6" fill="var(--ink)"/>
        <path d="M105 105 V 150" stroke="var(--ink)" stroke-dasharray="4 3"/>
        <g ${F} font-size="11" font-weight="700">
          <text x="226" y="24" text-anchor="end" fill="var(--leaf)">ingresos</text><text x="236" y="98" text-anchor="end" fill="var(--red)">costes</text>
          <text x="105" y="166" text-anchor="middle" fill="var(--ink)">125 zumos</text>
          <text x="36" y="104" fill="var(--red)">pérdidas</text><text x="168" y="80" fill="var(--leaf)">beneficio</text>
        </g>
      </svg>`,
    },
    {
      html: `<h3>Financiación propia y ajena</h3><p>La <mark>financiación propia</mark> no hay que devolverla: el <b>dinero de los socios</b> (capital), los <b>beneficios reinvertidos</b> y algunas <b>subvenciones</b> públicas. La <mark>financiación ajena</mark> es deuda que hay que devolver, normalmente con intereses: <b>préstamos</b> bancarios, crédito de proveedores (pagarles más tarde) o <i>leasing</i> (alquilar con opción de compra).</p>`,
      svg: dos("Financiación propia frente a ajena", ["Propia", ["ahorros de", "los socios", "beneficios", "subvenciones", "no se devuelve"], "var(--leaf)"], ["Ajena", ["préstamo", "bancario", "proveedores", "leasing", "se devuelve"], "var(--red)"]),
    },
    {
      html: `<h3>Nuevas formas de financiación</h3><p>Los emprendedores también pueden recurrir al <mark>crowdfunding</mark> o micromecenazgo (muchas personas aportan pequeñas cantidades a través de una plataforma a cambio de recompensas), a <b>business angels</b> (inversores particulares que aportan dinero y experiencia a cambio de una parte de la empresa) o a programas públicos como los microcréditos o las aceleradoras de empresas.</p>`,
      svg: barras("Ejemplo de campaña de crowdfunding: aportaciones por tramo", [["5 €", 120, "var(--sun)", "120 personas"], ["20 €", 60, "var(--pen)", "60 personas"], ["50 €", 15, "var(--leaf)", "15 personas"]], 210),
    },
  ],
  figura: {
    titulo: "Cuenta de resultados del puesto de zumos",
    svg: figCols("Ventas de 200 zumos: ingresos, costes y beneficio", [
      ["Ingresos", ["200 zumos × 3 €", "= 600 €", "", "ventas totales"], "var(--leaf)"],
      ["Costes", ["fijos: 250 €", "variables:", "200 × 1 € = 200 €", "total = 450 €"], "var(--red)"],
      ["Resultado", ["600 − 450", "= 150 €", "de beneficio", "(umbral: 125)"], "var(--pen)"],
    ]),
  },
  video: { id: "h_1z8nOgGns", titulo: "Tipos de financiación", canal: "ECONOSUBLIME", vistas: 121124, megusta: 0, busqueda: "fuentes de financiación empresa" },
  quiz: [
    { q: "Una licuadora para el negocio es…", o: ["un gasto variable", "parte de la inversión inicial", "un ingreso"], a: 1, e: "Se compra al principio y se usa durante mucho tiempo." },
    { q: "Costes fijos 300 €, precio 5 €, coste variable 2 €. ¿Umbral de rentabilidad?", o: ["60 unidades", "100 unidades", "150 unidades"], a: 1, e: "300 ÷ (5 − 2) = 300 ÷ 3 = 100 unidades." },
    { q: "¿Cuál es financiación ajena?", o: ["Ahorros de los socios", "Préstamo bancario", "Beneficios reinvertidos"], a: 1, e: "La financiación ajena hay que devolverla, normalmente con intereses." },
    { q: "El crowdfunding consiste en…", o: ["un préstamo del banco", "muchas personas aportando pequeñas cantidades", "vender acciones en Bolsa"], a: 1, e: "Se hace a través de plataformas online a cambio de recompensas o participaciones." },
    { q: "En el umbral de rentabilidad, el beneficio es…", o: ["máximo", "cero", "negativo"], a: 1, e: "Los ingresos igualan exactamente a los costes." },
  ],
  examen: [
    { q: "Un business angel aporta…", o: ["solo un préstamo", "dinero y experiencia a cambio de parte de la empresa", "una subvención pública"], a: 1, e: "Es un inversor particular que se convierte en socio." },
    { q: "Si vendes menos unidades que el umbral de rentabilidad…", o: ["tienes beneficios", "tienes pérdidas", "no pasa nada"], a: 1, e: "Los ingresos no llegan a cubrir los costes." },
    { q: "El leasing es…", o: ["un alquiler con opción de compra", "una subvención", "un tipo de impuesto"], a: 0, e: "Se usa mucho para vehículos y maquinaria." },
  ],
  feynman: ["Diferencia entre inversión, gasto fijo y gasto variable", "Cómo se calcula el umbral de rentabilidad", "Tres fuentes de financiación propia y tres ajenas", "Qué es el crowdfunding y quién es un business angel"],
  mapa: mapa("PLAN ECONÓMICO", "var(--leaf)", [
    ["Inversión", "lo que compras para empezar", "var(--ink)"],
    ["Umbral", "CF ÷ (precio − CV)", "var(--red)"],
    ["Propia", "socios · beneficios · subvención", "var(--leaf)"],
    ["Ajena", "préstamo · proveedores · leasing", "var(--pen)"],
  ], 270),
  tarjetas: [
    ["Umbral de rentabilidad", "Costes fijos ÷ (precio − coste variable unitario)."],
    ["Inversión inicial", "Bienes que se compran para empezar y duran en el tiempo."],
    ["Financiación propia", "Aportaciones de socios, beneficios reinvertidos y subvenciones."],
    ["Financiación ajena", "Deuda que hay que devolver: préstamos, proveedores, leasing."],
    ["Crowdfunding", "Financiación colectiva de muchas pequeñas aportaciones."],
  ],
  familias: ["Calculad juntos el umbral de rentabilidad de una venta solidaria (pasteles, camisetas) del colegio.", "Buscad una campaña de crowdfunding real y comentad qué recompensas ofrece.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Plan económico-financiero: inversión, costes, ingresos, umbral de rentabilidad y fuentes de financiación (RD 217/2022, Economía y Emprendimiento 4º).",
    ideas: ["Hoja de cálculo con gráfico del punto muerto de un proyecto de aula.", "Comparar ofertas de préstamo con su TAE.", "Simular una ronda de inversión ante un jurado de «business angels»."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Punto de equilibrio (economía), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Punto_de_equilibrio_(econom%C3%ADa)" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Elaborar un plan de inversión inicial y una previsión de tesorería", "Calcular el umbral de rentabilidad y la cuota de un préstamo sencillo"],
  bloques: [
    { tras: "Inversión, gastos e ingresos", html: `<h3>El plan de inversión inicial</h3><p>Antes de abrir hay que calcular cuánto dinero hace falta para empezar. La <b>inversión inicial</b> incluye bienes que durarán años, el <mark>activo no corriente</mark> (local, reformas, maquinaria, ordenadores, furgoneta), y lo necesario para funcionar los primeros meses, el <b>activo corriente</b> (existencias de mercancía y un colchón de dinero en caja). Ejemplo para una pequeña cafetería:</p>${tabla(["Concepto", "Importe"], [["Reforma del local", "12.000 €"], ["Cafetera, nevera y mobiliario", "9.000 €"], ["Ordenador y caja registradora", "1.500 €"], ["Primeras existencias", "2.500 €"], ["Fondo para los 3 primeros meses", "5.000 €"], ["<b>Total</b>", "<b>30.000 €</b>"]])}` },
    { tras: "Inversión, gastos e ingresos", html: `<h3>La previsión de tesorería</h3><p>Una empresa puede tener beneficios y, aun así, quedarse sin dinero si cobra tarde y paga pronto. La <mark>previsión de tesorería</mark> anota, mes a mes, los <b>cobros</b> y los <b>pagos</b> esperados y el saldo que queda. Si algún mes sale negativo, hay que prever una solución (una póliza de crédito, retrasar una compra, negociar con proveedores). No es lo mismo un <b>ingreso</b> (una venta) que un <b>cobro</b> (cuando el dinero entra de verdad); ni un <b>gasto</b> que un <b>pago</b>.</p>` },
    { tras: "El umbral de rentabilidad", html: `<h3>Calcular el umbral paso a paso</h3><p>El <mark>umbral de rentabilidad</mark> o punto muerto es la cantidad que hay que vender para cubrir todos los costes: ni se gana ni se pierde. Se calcula así: <b>Q* = costes fijos / (precio − coste variable unitario)</b>. La diferencia precio − coste variable se llama <b>margen de contribución</b>: lo que deja cada unidad para pagar los costes fijos. Por encima de Q* hay beneficio; por debajo, pérdidas. Si suben los costes fijos o baja el margen, hay que vender más para cubrir costes.</p>`, video: { id: "TwgbEkyf9yQ", titulo: "Cálculo del punto muerto o punto de equilibrio", canal: "ECONOSUBLIME", vistas: 437499, megusta: 0 } },
    { tras: "Financiación propia y ajena", html: `<h3>Préstamo, crédito y leasing</h3>${tabla(["Producto", "Cómo funciona", "Cuándo conviene"], [["Préstamo", "el banco da una cantidad y se devuelve en cuotas con intereses", "comprar maquinaria o un local"], ["Póliza de crédito", "el banco deja un límite disponible; se pagan intereses solo por lo usado", "desfases de tesorería"], ["Leasing", "se alquila un bien con opción de compra al final", "vehículos, maquinaria"], ["Renting", "alquiler con mantenimiento incluido, sin opción de compra", "ordenadores, coches"]])}<p>Antes de endeudarse hay que comparar la <b>TAE</b> y asegurarse de que la empresa podrá pagar las cuotas.</p>` },
    { tras: "Nuevas formas de financiación", html: `<h3>Ayudas públicas y business angels</h3><p>Además de bancos y crowdfunding, existen <b>subvenciones</b> y préstamos públicos para emprendedores, por ejemplo de la Empresa Nacional de Innovación (ENISA), de las comunidades autónomas o para jóvenes a través de la Garantía Juvenil. Los <mark>business angels</mark> son personas con experiencia que invierten su dinero en empresas que empiezan a cambio de una parte de ellas y además las aconsejan. Las <b>aceleradoras</b> e incubadoras ofrecen formación, oficinas y contactos.</p>` },
  ],
  ejemplos: [
    { enunciado: "Una tienda de camisetas tiene 6.000 € de costes fijos al mes. Vende cada camiseta a 20 € y le cuesta 8 €. Calcula el umbral de rentabilidad.", pasos: ["Margen de contribución = 20 − 8 = 12 € por camiseta.", "Q* = 6.000 / 12 = 500 camisetas.", "Comprobación: ingresos 500 · 20 = 10.000 €; costes 6.000 + 500 · 8 = 10.000 €."], resultado: "Debe vender 500 camisetas al mes para no perder." },
    { enunciado: "Con esos datos, ¿qué beneficio obtiene si vende 700 camisetas?", pasos: ["Unidades por encima del umbral: 700 − 500 = 200.", "Cada una deja 12 € de margen.", "Beneficio = 200 · 12 = 2.400 €."], resultado: "2.400 € de beneficio." },
    { enunciado: "Pides un préstamo de 6.000 € a devolver en 1 año en 12 cuotas iguales, con un interés total de 300 €. ¿Cuánto pagas al mes?", pasos: ["Total a devolver = 6.000 + 300 = 6.300 €.", "Cuota = 6.300 / 12 = 525 €."], resultado: "525 € al mes (cálculo simplificado; los bancos usan el sistema francés)." },
  ],
  errores: [
    "Confundir inversión inicial con gastos mensuales.",
    "Pensar que tener beneficios garantiza tener dinero en caja.",
    "Restar el precio menos los costes fijos al calcular el margen de contribución: se resta el coste variable unitario.",
    "Pedir un préstamo sin calcular si se pueden pagar las cuotas.",
    "Confundir leasing (opción de compra) y renting (solo alquiler).",
  ],
  ejercicios: [
    { q: "Clasifica en activo no corriente o corriente: furgoneta, mercancía, dinero en caja, local.", sol: "No corriente: furgoneta y local. Corriente: mercancía y dinero en caja." },
    { q: "Diferencia ingreso y cobro.", sol: "El ingreso es la venta; el cobro, el momento en que entra el dinero." },
    { q: "¿Para qué sirve una previsión de tesorería?", sol: "Para saber si cada mes habrá dinero suficiente para pagar y anticipar soluciones." },
    { q: "Una pizzería tiene 4.500 € de costes fijos, vende cada pizza a 12 € y le cuesta 3 €. ¿Cuál es su umbral?", sol: "4.500 / (12 − 3) = 500 pizzas." },
    { q: "Si la pizzería vende 600 pizzas, ¿cuánto gana?", sol: "(600 − 500) · 9 = 900 €." },
    { q: "Si el alquiler sube y los costes fijos pasan a 5.400 €, ¿cuál es el nuevo umbral?", sol: "5.400 / 9 = 600 pizzas." },
    { q: "¿Qué diferencia hay entre préstamo y póliza de crédito?", sol: "En el préstamo recibes todo el dinero y pagas intereses por todo; en la póliza dispones de un límite y pagas intereses solo por lo usado." },
    { q: "¿Qué es un business angel?", sol: "Un inversor particular que aporta dinero y experiencia a empresas nuevas a cambio de una participación." },
    { q: "Cita dos fuentes de financiación propia.", sol: "Aportaciones de los socios y beneficios reinvertidos (autofinanciación)." },
    { q: "¿Por qué conviene tener un fondo para los primeros meses?", sol: "Porque al principio las ventas suelen ser bajas y hay que seguir pagando alquiler, sueldos y proveedores." },
  ],
  quiz: [
    { q: "El umbral de rentabilidad es el punto en que…", o: ["beneficio = 0", "ventas = 0", "costes = 0"], a: 0, e: "Los ingresos igualan a los costes." },
    { q: "El margen de contribución es…", o: ["precio − coste variable unitario", "precio − costes fijos", "ingresos − impuestos"], a: 0, e: "Lo que deja cada unidad." },
    { q: "Una furgoneta de reparto es activo…", o: ["no corriente", "corriente", "pasivo"], a: 0, e: "Se usa durante varios años." },
    { q: "El leasing incluye…", o: ["opción de compra", "un regalo", "subvención"], a: 0, e: "Al final se puede comprar el bien." },
    { q: "Si suben los costes fijos, el umbral…", o: ["sube", "baja", "no cambia"], a: 0, e: "Hay que vender más para cubrirlos." },
  ],
  tarjetas: [
    ["Activo no corriente", "Bienes que la empresa usa durante varios años."],
    ["Previsión de tesorería", "Cobros y pagos previstos mes a mes."],
    ["Margen de contribución", "Precio − coste variable unitario."],
  ],
});
