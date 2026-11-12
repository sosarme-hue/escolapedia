// Economía y Emprendimiento 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { barras, filas, dos, linea, figCols } = require("./_hum");

module.exports = {
  materia: "Economía y Emprendimiento",
  curso: "4-eso",
  titulo: "El dinero y las finanzas personales",
  minutos: 35,
  objetivos: ["Conocer las funciones del dinero y los medios de pago", "Elaborar un presupuesto personal distinguiendo ingresos, gastos y ahorro", "Comprender el interés, los préstamos y los riesgos financieros básicos"],
  claves: ["dinero", "presupuesto", "ahorro", "interés compuesto", "tarjeta de débito", "inflación"],
  pregunta: {
    texto: "Si ahorras 1 euro al día desde los 15 años, a los 25 tendrás unos 3 650 euros. Pero si además ese dinero gana un 4 % al año, tendrás bastante más. ¿Por qué el ahorro crece solo?",
    respuesta: "Por el <mark>interés compuesto</mark>: los intereses que gana tu dinero también generan intereses. Por eso es importante entender cómo funciona el dinero, hacer un <b>presupuesto</b> y empezar a ahorrar pronto.",
  },
  bloques: [
    {
      html: `<h3>Qué es el dinero</h3><p>Antes del dinero se usaba el <b>trueque</b> (intercambiar unos bienes por otros), muy incómodo. El <mark>dinero</mark> es cualquier medio aceptado por todos para pagar. Tiene tres funciones: <b>medio de cambio</b> (sirve para comprar), <b>unidad de cuenta</b> (pone precio a las cosas) y <b>depósito de valor</b> (se puede guardar). Hoy casi todo el dinero es <b>digital</b>: tarjetas, transferencias y pagos con el móvil.</p>`,
      svg: filas("Funciones del dinero", [["Cambio", "sirve para comprar y vender", "var(--pen)"], ["Cuenta", "pone precio a las cosas", "var(--leaf)"], ["Depósito", "se puede guardar y ahorrar", "var(--sun)"]]),
    },
    {
      html: `<h3>El presupuesto personal</h3><p>Un <mark>presupuesto</mark> es un plan de tus <b>ingresos</b> (paga, regalos, un trabajo) y tus <b>gastos</b> en un periodo. Los gastos pueden ser <b>fijos</b> (todos los meses igual, como la tarifa del móvil) o <b>variables</b> (ocio, ropa). Una regla sencilla es la <b>50/30/20</b>: 50 % para necesidades, 30 % para deseos y 20 % para ahorro. Si gastas más de lo que ingresas, tienes un déficit.</p>`,
      svg: barras("Reparto de un presupuesto según la regla 50/30/20", [["necesidades", 50, "var(--pen)", "50 %"], ["deseos", 30, "var(--sun)", "30 %"], ["ahorro", 20, "var(--leaf)", "20 %"]], 55),
    },
    {
      html: `<h3>Bancos, cuentas y tarjetas</h3><p>Los <b>bancos</b> guardan el dinero en <b>cuentas</b> y lo prestan a otros. Con una <mark>tarjeta de débito</mark> pagas con el dinero que ya tienes en la cuenta; con una <b>tarjeta de crédito</b> el banco te presta y lo devuelves después, a veces con intereses. Nunca compartas tus claves ni el PIN: los bancos nunca te los pedirán por mensaje o llamada.</p>`,
      svg: dos("Tarjeta de débito frente a tarjeta de crédito", ["Débito", ["dinero de tu", "cuenta", "pagas al", "momento", "sin intereses"], "var(--leaf)"], ["Crédito", ["dinero prestado", "por el banco", "pagas después", "puede tener", "intereses"], "var(--red)"]),
    },
    {
      html: `<h3>Interés, ahorro y deudas</h3><p>El <mark>interés</mark> es el precio del dinero: si ahorras, el banco te paga interés; si pides un <b>préstamo</b>, tú pagas interés. Con el <b>interés compuesto</b> los intereses se suman al capital y generan nuevos intereses. Por eso conviene ahorrar pronto y evitar deudas caras como los minicréditos. Además, la <b>inflación</b> (subida de precios) hace que el dinero guardado en casa pierda valor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfico: 1000 euros al 5 por ciento crecen más con interés compuesto que con simple en 20 años">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M30 150 H 240 M30 150 V 20" stroke="var(--ink)" stroke-width="2"/>
        <path d="${Array.from({ length: 21 }, (_, t) => `${t ? "L" : "M"}${30 + t * 10} ${150 - (1000 * (1 + 0.05 * t) - 1000) * 0.065 - 20}`).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="3"/>
        <path d="${Array.from({ length: 21 }, (_, t) => `${t ? "L" : "M"}${30 + t * 10} ${150 - (1000 * Math.pow(1.05, t) - 1000) * 0.065 - 20}`).join(" ")}" fill="none" stroke="var(--leaf)" stroke-width="3"/>
        <text x="40" y="34" font-size="11.5" font-weight="700" fill="var(--leaf)" ${F}>compuesto: 2 653 €</text>
        <text x="236" y="90" text-anchor="end" font-size="11.5" font-weight="700" fill="var(--pen)" ${F}>simple: 2 000 €</text>
        <text x="135" y="168" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>1 000 € al 5 % durante 20 años</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Plan de finanzas personales en tres pasos",
    svg: figCols("Registrar, planificar y ahorrar", [
      ["1. Registra", ["anota ingresos", "y gastos", "durante un mes", "usa una app", "o una libreta"], "var(--pen)"],
      ["2. Planifica", ["fija un presupuesto", "separa necesidades", "y deseos", "regla 50/30/20", "revisa cada mes"], "var(--sun)"],
      ["3. Ahorra", ["págate primero", "fondo de emergencia", "objetivo concreto", "evita deudas caras", "compara antes"], "var(--leaf)"],
    ]),
  },
  video: { id: "X38MGyuc0ds", titulo: "Educación financiera para principiantes: cómo funcionan las finanzas", canal: "Aprendiz Financiero", vistas: 894784, megusta: 0, busqueda: "educación financiera para adolescentes" },
  quiz: [
    { q: "¿Cuál NO es una función del dinero?", o: ["Medio de cambio", "Unidad de cuenta", "Producir alimentos"], a: 2, e: "Las tres funciones son medio de cambio, unidad de cuenta y depósito de valor." },
    { q: "En la regla 50/30/20, el 20 % se destina a…", o: ["ocio", "ahorro", "necesidades"], a: 1, e: "50 % necesidades, 30 % deseos y 20 % ahorro." },
    { q: "Con una tarjeta de débito pagas…", o: ["con dinero prestado", "con el dinero que tienes en tu cuenta", "solo en el extranjero"], a: 1, e: "El cargo se descuenta directamente de tu cuenta." },
    { q: "¿Qué es el interés compuesto?", o: ["Interés que solo se calcula sobre el capital inicial", "Interés que se suma al capital y genera nuevos intereses", "Una comisión del banco"], a: 1, e: "Por eso el ahorro crece cada vez más rápido con el tiempo." },
    { q: "Si la inflación es del 3 % y guardas el dinero en casa…", o: ["gana valor", "pierde poder de compra", "no cambia nada"], a: 1, e: "Con los mismos euros podrás comprar menos cosas el año siguiente." },
  ],
  examen: [
    { q: "Un gasto fijo es, por ejemplo…", o: ["la cuota mensual del móvil", "una entrada de cine", "un regalo de cumpleaños"], a: 0, e: "Se repite cada mes por la misma cantidad." },
    { q: "Te llega un SMS de tu «banco» pidiendo tu PIN. ¿Qué haces?", o: ["Lo envío rápido", "No respondo: los bancos nunca piden claves por mensaje", "Lo reenvío a mis amigos"], a: 1, e: "Es un intento de fraude (phishing o smishing)." },
    { q: "1 000 € al 10 % de interés compuesto durante 2 años se convierten en…", o: ["1 200 €", "1 210 €", "1 100 €"], a: 1, e: "Primer año 1 100 €; segundo año 1 100 · 1,1 = 1 210 €." },
  ],
  feynman: ["Las tres funciones del dinero", "Cómo se hace un presupuesto con la regla 50/30/20", "Diferencia entre tarjeta de débito y de crédito", "Por qué el interés compuesto premia ahorrar pronto"],
  mapa: mapa("FINANZAS PERSONALES", "var(--leaf)", [
    ["Dinero", "cambio · cuenta · depósito", "var(--pen)"],
    ["Presupuesto", "ingresos · gastos · 50/30/20", "var(--sun)"],
    ["Banco", "cuenta · débito · crédito", "var(--muted)"],
    ["Interés", "compuesto · deuda · inflación", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Funciones del dinero", "Medio de cambio, unidad de cuenta y depósito de valor."],
    ["Regla 50/30/20", "50 % necesidades, 30 % deseos, 20 % ahorro."],
    ["Débito frente a crédito", "Débito: tu dinero. Crédito: dinero prestado que devuelves después."],
    ["Interés compuesto", "Los intereses se suman al capital y generan nuevos intereses."],
    ["Inflación", "Subida general de precios que reduce el poder de compra del dinero."],
  ],
  familias: ["Haced juntos el presupuesto de una salida o de las vacaciones.", "Si tiene paga, proponedle apuntar durante un mes en qué la gasta.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación financiera: el dinero, el presupuesto personal, productos bancarios básicos, ahorro, endeudamiento y fraude (RD 217/2022, Economía y Emprendimiento 4º).",
    ideas: ["Hoja de cálculo con interés simple frente a compuesto.", "Recursos del Plan de Educación Financiera (Banco de España y CNMV, finanzasparatodos.es).", "Análisis de anuncios de minicréditos y su TAE."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Finanzas para todos, Plan de Educación Financiera (Banco de España y CNMV)", url: "https://www.finanzasparatodos.es/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Calcular interés simple y compuesto", "Conocer los productos financieros básicos y cómo protegerse de fraudes"],
  bloques: [
    { tras: "Qué es el dinero", html: `<h3>Las funciones del dinero</h3><p>Antes del dinero se practicaba el <b>trueque</b>, pero era difícil encontrar a alguien que quisiera justo lo que ofrecías. El dinero cumple tres funciones: <mark>medio de cambio</mark> (lo aceptan todos para pagar), <b>unidad de cuenta</b> (sirve para medir el valor de las cosas: un libro vale 20 €) y <b>depósito de valor</b> (se puede guardar para gastarlo después). Hoy la mayor parte del dinero no son billetes, sino <b>dinero bancario</b>: anotaciones en cuentas que se mueven con tarjetas, transferencias o el móvil (Bizum).</p>` },
    { tras: "El presupuesto personal", html: `<h3>Gastos fijos, variables e imprevistos</h3>${tabla(["Tipo", "Qué son", "Ejemplos"], [["Fijos", "se repiten cada mes con la misma cantidad", "alquiler, cuota del gimnasio, tarifa del móvil"], ["Variables", "cambian de un mes a otro", "comida, ropa, ocio, luz"], ["Imprevistos", "no se esperan", "una avería, una multa, un móvil roto"]])}<p>Una regla orientativa es la <mark>regla 50/30/20</mark>: el 50 % de los ingresos para necesidades, el 30 % para deseos y el 20 % para ahorrar. Conviene tener un <b>fondo de emergencia</b> para los imprevistos.</p>` },
    { tras: "Bancos, cuentas y tarjetas", html: `<h3>Tarjeta de débito y de crédito</h3><p>Con la <b>tarjeta de débito</b> el dinero sale al momento de tu cuenta: solo puedes gastar lo que tienes. Con la <b>tarjeta de crédito</b> el banco te presta el dinero y lo devuelves después; si pagas a plazos (el llamado «pago revolving»), los intereses pueden superar el <mark>20 % anual</mark>. Las <b>comisiones</b> son lo que cobra el banco por sus servicios (mantenimiento, transferencias). Antes de firmar hay que mirar la <b>TAE</b> (tasa anual equivalente), que permite comparar el coste real de préstamos y la rentabilidad de depósitos.</p>` },
    { tras: "Interés, ahorro y deudas", html: `<h3>Interés simple e interés compuesto</h3><p>Con <b>interés simple</b> solo genera intereses el capital inicial: I = C · i · t. Con <mark>interés compuesto</mark> los intereses se suman al capital y también generan intereses: Cf = C · (1 + i)ᵗ.</p>${tabla(["Año", "Simple, 1.000 € al 5 %", "Compuesto, 1.000 € al 5 %"], [["0", "1.000 €", "1.000 €"], ["1", "1.050 €", "1.050 €"], ["2", "1.100 €", "1.102,50 €"], ["10", "1.500 €", "1.628,89 €"], ["30", "2.500 €", "4.321,94 €"]])}<p>Cuanto antes se empieza a ahorrar, más trabaja el tiempo a tu favor. Lo mismo ocurre al revés con las deudas.</p>`, video: { id: "7h0USmJk2-A", titulo: "¿Qué es el interés compuesto?", canal: "Memorias de Tiburón", vistas: 724428, megusta: 0 } },
    { tras: "Interés, ahorro y deudas", html: `<h3>Invertir: rentabilidad, riesgo y liquidez</h3><p>Todo producto financiero combina tres rasgos: <b>rentabilidad</b> (cuánto gana), <b>riesgo</b> (posibilidad de perder) y <b>liquidez</b> (rapidez para recuperar el dinero). No existe ninguno que sea a la vez muy rentable, sin riesgo y muy líquido. Un <b>depósito</b> es seguro pero rinde poco; las <b>acciones</b> pueden rendir más, pero su valor sube y baja. Por eso conviene <mark>diversificar</mark>. Cuidado con los fraudes: promesas de ganancias altas y rápidas, «chiringuitos financieros» no registrados en la CNMV, criptoestafas o el <b>phishing</b> (mensajes falsos que piden tus claves).</p>` },
  ],
  ejemplos: [
    { enunciado: "Calcula el interés simple de 2.000 € al 3 % anual durante 4 años.", pasos: ["I = C · i · t.", "I = 2.000 · 0,03 · 4 = 240 €.", "Capital final = 2.000 + 240 = 2.240 €."], resultado: "240 € de intereses; 2.240 € al final." },
    { enunciado: "Calcula el capital final de 2.000 € al 3 % compuesto durante 4 años.", pasos: ["Cf = C · (1 + i)ᵗ.", "Cf = 2.000 · 1,03⁴.", "1,03⁴ ≈ 1,1255.", "Cf ≈ 2.000 · 1,1255 = 2.251 €."], resultado: "≈ 2.251 €, unos 11 € más que con interés simple." },
    { enunciado: "Marta cobra 900 € al mes. Aplica la regla 50/30/20.", pasos: ["Necesidades: 900 · 0,5 = 450 €.", "Deseos: 900 · 0,3 = 270 €.", "Ahorro: 900 · 0,2 = 180 €."], resultado: "450 € para necesidades, 270 € para deseos y 180 € de ahorro." },
  ],
  errores: [
    "Pensar que la tarjeta de crédito es dinero propio: es un préstamo que hay que devolver con intereses.",
    "Comparar préstamos solo por el TIN o la cuota: hay que mirar la TAE.",
    "Confundir interés simple con compuesto.",
    "Creer que existe una inversión muy rentable y sin riesgo.",
    "Dar claves bancarias por SMS o correo: el banco nunca las pide así.",
  ],
  ejercicios: [
    { q: "Cita las tres funciones del dinero.", sol: "Medio de cambio, unidad de cuenta y depósito de valor." },
    { q: "Clasifica en fijo, variable o imprevisto: alquiler, cine, reparar la bici.", sol: "Alquiler: fijo. Cine: variable. Reparar la bici: imprevisto." },
    { q: "¿Qué diferencia hay entre una tarjeta de débito y una de crédito?", sol: "La de débito descuenta el dinero al momento de tu cuenta; la de crédito es un préstamo del banco que pagas después." },
    { q: "¿Para qué sirve la TAE?", sol: "Para comparar el coste real de un préstamo o la rentabilidad de un depósito, porque incluye intereses y comisiones." },
    { q: "Calcula el interés simple de 500 € al 4 % durante 3 años.", sol: "500 · 0,04 · 3 = 60 €." },
    { q: "Calcula el capital final de 1.000 € al 10 % compuesto durante 2 años.", sol: "1.000 · 1,1² = 1.210 €." },
    { q: "¿Qué es la liquidez?", sol: "La facilidad y rapidez para convertir una inversión en dinero sin perder valor." },
    { q: "¿Por qué conviene diversificar?", sol: "Para no depender de una sola inversión: si una va mal, las demás compensan." },
    { q: "Explica qué es el phishing.", sol: "Un engaño por correo, SMS o web falsa para robar contraseñas o datos bancarios." },
    { q: "Un amigo te ofrece duplicar tu dinero en un mes con una criptomoneda. ¿Qué haces?", sol: "Desconfiar: es una señal típica de fraude. Comprobar si la entidad está registrada en la CNMV y no invertir lo que no puedes perder." },
  ],
  quiz: [
    { q: "El dinero como «unidad de cuenta» sirve para…", o: ["medir el valor de las cosas", "guardar riqueza", "pedir préstamos"], a: 0, e: "Todo se expresa en euros." },
    { q: "Con interés compuesto, los intereses…", o: ["se suman al capital y generan más intereses", "se pierden", "se pagan al banco"], a: 0, e: "Es el «interés sobre interés»." },
    { q: "Según la regla 50/30/20, se ahorra…", o: ["el 50 %", "el 30 %", "el 20 %"], a: 2, e: "Es una referencia orientativa." },
    { q: "¿Qué organismo supervisa los mercados de valores en España?", o: ["la CNMV", "la DGT", "el SEPE"], a: 0, e: "Comisión Nacional del Mercado de Valores." },
    { q: "Un depósito bancario es…", o: ["de bajo riesgo y baja rentabilidad", "de alto riesgo", "ilegal"], a: 0, e: "Además está protegido hasta 100.000 € por el Fondo de Garantía de Depósitos." },
  ],
  tarjetas: [
    ["Trueque", "Intercambio de bienes sin dinero."],
    ["TAE", "Tasa anual equivalente: coste o rentabilidad real."],
    ["Diversificar", "Repartir el dinero entre varias inversiones para reducir el riesgo."],
  ],
});
