// Matemáticas A 4º ESO · Matemática financiera. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { F, D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, barras, sectores, comparar } = require("./_eso4L2-mata");

const indice = cajas("Índice de variación: para aumentar un porcentaje se multiplica por 1 más el tanto por uno, y para disminuir por 1 menos", [
  ["Subir 21 %", ["× 1,21"], "var(--red)"], ["Bajar 15 %", ["× 0,85"], "var(--leaf)"],
  ["Subir 5 %", ["× 1,05"], "var(--red)"], ["Bajar 30 %", ["× 0,70"], "var(--leaf)"],
], "Índice de variación");

const encadenados = pasos("Porcentajes encadenados: subir un 20 % y después bajar un 20 % no deja el precio igual", ["Precio inicial: 100 €", "Sube 20 %: 100 · 1,20 = 120 €", "Baja 20 %: 120 · 0,80 = 96 €", "Índice total: 1,20 · 0,80 = 0,96", "Resultado: bajada del 4 %"], "Subir 20 % y bajar 20 %");

const iva = barras("Desglose del precio de un producto de 121 euros: 100 euros de base y 21 euros de IVA", [["Base", 100, "var(--pen)"], ["IVA 21 %", 21, "var(--red)"], ["Total", 121, "var(--leaf)"]], { titulo: "Precio con IVA (€)" });

const simple = formula("Fórmula del interés simple", "I = C · r · t", ["C = capital, r = tanto por uno anual", "t = tiempo en años", "capital final: C_f = C + I"], "var(--pen)");

const despejar = cajas("Despejar en la fórmula del interés simple: capital, rédito o tiempo", [
  ["Capital", ["C = I / (r · t)"], "var(--pen)"], ["Rédito", ["r = I / (C · t)"], "var(--red)"],
  ["Tiempo", ["t = I / (C · r)"], "var(--leaf)"], ["Meses / días", ["t = m/12 · d/360"], "var(--inf)"],
], "Despejar en I = C · r · t");

const compuesto = formula("Fórmula del interés compuesto", "C_f = C · (1 + r)ᵗ", ["los intereses generan intereses", "r = tanto por uno por periodo", "t = número de periodos"], "var(--red)");

const simpleVsComp = ejes("Simple frente a compuesto con 1.000 euros al 8 por ciento: el compuesto crece cada vez más deprisa", { x: [0, 20], y: [0, 5], paso: 5, pasoY: 1, marcasX: [5, 10, 15, 20], marcasY: [1, 2, 3, 4], ex: "años", ey: "miles de €", curvas: [{ f: (x) => 1 + 0.08 * x, c: "var(--pen)", t: "simple", tx: 15.5, ty: 1.6 }, { f: (x) => Math.pow(1.08, x), c: "var(--red)", t: "compuesto", tx: 12, ty: 4.2 }], puntos: [[20, 2.6, "", "var(--pen)"], [20, 4.661, "", "var(--red)"]] });

const regla72 = barras("Regla del 72: años aproximados para duplicar un capital según el tipo de interés", [["2 %", 36], ["4 %", 18], ["6 %", 12], ["8 %", 9], ["12 %", 6]], { titulo: "Años para duplicar ≈ 72 / interés", c: "var(--leaf)" });

const taeFig = comparar("TIN y TAE: el TIN es el tipo nominal y la TAE incluye la frecuencia de pago y las comisiones, por eso sirve para comparar", [
  ["TIN", ["tipo nominal", "6 % anual", "sin comisiones"], "var(--pen)"],
  ["Mensual", ["6 % / 12", "= 0,5 %", "cada mes"], "var(--leaf)"],
  ["TAE", ["1,005¹² − 1", "≈ 6,17 %", "para comparar"], "var(--red)"],
], "TIN, TAE y frecuencia");

const prestamo = barras("Préstamo de 10.000 euros a 4 años al 5 por ciento: se devuelven unos 11.054 euros, de los que 1.054 son intereses", [["Prestado", 10000, "var(--pen)"], ["Intereses", 1054, "var(--red)"], ["Total", 11054, "var(--leaf)"]], { titulo: "Préstamo 10.000 € · 48 cuotas de 230,29 €", fmt: (v) => String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ".") });

const cuota = formula("Fórmula de la cuota mensual de un préstamo con el sistema francés", "cuota = C · i / (1 − (1 + i)⁻ⁿ)", ["i = TIN / 12 (mensual)", "n = número de cuotas", "cuota constante: al principio, más intereses"], "var(--inf)");

const inflacion = ejes("Pérdida de poder adquisitivo: 1.000 euros guardados con una inflación del 3 por ciento valen cada vez menos", { x: [0, 20], y: [0, 1100], paso: 5, pasoY: 250, marcasX: [5, 10, 15, 20], marcasY: [250, 500, 750], ex: "años", ey: "€ reales", curvas: [{ f: (x) => 1000 / Math.pow(1.03, x), c: "var(--red)" }, { f: () => 1000, c: "var(--muted)", disc: true, w: 1.6 }], puntos: [[10, 744, "10 años: 744 €", "var(--red)", "so"], [20, 554, "554 €", "var(--red)", "so"]] });

const nomina = sectores("Reparto aproximado de un sueldo bruto de 1.800 euros: sueldo neto, IRPF y cotizaciones a la Seguridad Social", [["Neto", 1478, "var(--leaf)"], ["IRPF", 207, "var(--red)"], ["S. Social", 115, "var(--pen)"]], { titulo: "Nómina de 1.800 € brutos", fmt: (v) => String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €" });

const presupuesto = sectores("Presupuesto mensual de una familia según la regla 50, 30, 20: necesidades, deseos y ahorro", [["Necesidades", 50], ["Deseos", 30], ["Ahorro", 20]], { titulo: "Regla 50/30/20", fmt: (v) => v + " %" });

const riesgo = cajas("Productos de ahorro e inversión: a más rentabilidad esperada, más riesgo", [
  ["Cuenta / depósito", ["riesgo bajo", "rentabilidad baja"], "var(--leaf)"], ["Fondos", ["riesgo medio", "diversificados"], "var(--pen)"],
  ["Acciones", ["riesgo alto", "pueden bajar"], "var(--red)"], ["«Chollos»", ["si promete mucho", "desconfía"], "var(--sun)"],
], "Rentabilidad y riesgo");

const resolver = pasos("Pasos para resolver un problema financiero", ["Identificar: % , simple o compuesto", "Pasar el interés a tanto por uno", "Ajustar periodos (años, meses)", "Aplicar la fórmula y calcular", "Interpretar: ¿qué conviene?"], "Problemas financieros");

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Matemática financiera",
  minutos: 110,
  objetivos: [
    "Calcular aumentos y disminuciones porcentuales con el índice de variación, también encadenados",
    "Aplicar el IVA y otros impuestos y descuentos en situaciones de consumo",
    "Calcular el interés simple y el compuesto y despejar sus variables",
    "Interpretar el TIN y la TAE para comparar productos financieros",
    "Entender cómo funcionan un préstamo, la compra a plazos y la inflación",
    "Interpretar una nómina y elaborar un presupuesto personal con criterio",
  ],
  claves: ["porcentaje", "índice de variación", "IVA", "interés simple", "interés compuesto", "TAE", "préstamo", "inflación"],
  pregunta: {
    texto: "Si a los 16 años ahorras 50 € al mes y los inviertes al 5 % anual, ¿cuánto tendrás a los 66? ¿Y si empiezas a los 36?",
    respuesta: "Empezando a los 16 (50 años) tendrías unos <mark>133.000 €</mark>, de los que solo 30.000 € son aportaciones tuyas: el resto son intereses de intereses. Empezando a los 36 (30 años), unos 41.600 €. Diez veces más tiempo de interés compuesto marca una diferencia enorme: por eso <b>empezar pronto</b> es la mejor estrategia de ahorro.",
  },
  lectura: {
    titulo: "La fuerza más poderosa del universo",
    html: `<p>Se suele atribuir a Albert Einstein la frase «el interés compuesto es la fuerza más poderosa del universo». No hay pruebas de que la dijera, pero la idea es cierta: cuando los intereses que genera un dinero se suman al capital y empiezan a generar intereses a su vez, el crecimiento se acelera de forma <b>exponencial</b>. Lo que en pocos años parece poco, en décadas se convierte en mucho.</p><p>Esa misma fuerza funciona al revés con las <b>deudas</b>. Una tarjeta de crédito que cobra un 20 % anual puede convertir una compra pequeña en una deuda difícil de pagar. Y la <b>inflación</b>, la subida general de los precios, hace que el dinero guardado en un cajón pierda valor año tras año. Entender estas ideas no es solo cosa de banqueros: forma parte de la vida de cualquier persona que cobra un sueldo, paga un alquiler o compra un móvil a plazos.</p><p>En este tema aprenderás a trabajar con porcentajes, impuestos, interés simple y compuesto, TAE, préstamos, nóminas y presupuestos. El objetivo es que puedas comparar ofertas, detectar trampas y tomar decisiones informadas sobre tu dinero.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Porcentajes e índice de variación</h3><p>Un <b>porcentaje</b> expresa una proporción sobre 100: el 15 % de 80 es 80 · 0,15 = 12. Para aplicar un aumento o una disminución en un solo paso se usa el <b>índice de variación</b>: subir un r % es multiplicar por <mark>1 + r/100</mark>, y bajar un r % es multiplicar por <mark>1 − r/100</mark>. Un precio de 60 € que sube un 5 % pasa a 60 · 1,05 = 63 €; uno de 80 € con un descuento del 25 % queda en 80 · 0,75 = 60 €.</p><p>El índice también permite hacer el cálculo inverso: si una camiseta rebajada un 30 % cuesta 21 €, su precio inicial era 21 / 0,70 = 30 €. Un error muy común es «sumar el 30 %» a 21 (21 · 1,30 = 27,30 €), lo cual es incorrecto porque el porcentaje se aplicó sobre el precio original, no sobre el rebajado. Para calcular qué porcentaje ha variado un precio, se divide el final entre el inicial: 63/60 = 1,05, una subida del 5 %.</p>`, svg: indice },
    { html: `<h3>1.2 Porcentajes encadenados</h3><p>Cuando se aplican varios porcentajes seguidos, se <b>multiplican los índices</b>, no se suman los porcentajes. Si un producto sube un 20 % y después baja un 20 %, el índice total es 1,20 · 0,80 = 0,96: el precio final es un <b>4 % menor</b> que el inicial, no igual. Un artículo que sube un 10 % dos años seguidos aumenta en total 1,1 · 1,1 = 1,21, es decir, un 21 %, no un 20 %.</p><p>Esto tiene consecuencias prácticas. En las rebajas, un «−20 % adicional» sobre un precio ya rebajado un 30 % no da un 50 % de descuento: 0,70 · 0,80 = 0,56, un descuento total del 44 %. Y si una acción pierde un 50 %, para recuperar su valor no basta con subir un 50 %: necesita un 100 %. Pensar en índices evita estos errores y permite comparar ofertas con rapidez.</p>`, svg: encadenados },
    { html: `<h3>1.3 El IVA y otros impuestos</h3><p>El <b>IVA</b> (impuesto sobre el valor añadido) es un impuesto que se aplica a casi todo lo que compramos. En España el tipo <b>general</b> es el 21 %, el <b>reducido</b> el 10 % (restauración, transporte, algunos alimentos) y el <b>superreducido</b> el 4 % (pan, leche, libros, medicamentos). Para calcular el precio final se multiplica la base por <mark>1,21</mark> (o 1,10, o 1,04).</p><p>Para obtener el precio sin IVA se divide: un producto que cuesta 121 € tiene una base de 121 / 1,21 = 100 € y un IVA de 21 €. ¡Cuidado! No es correcto restar el 21 % de 121: 121 · 0,79 = 95,59 €, que es un error frecuente. En las facturas aparecen siempre la base imponible, el tipo de IVA y la cuota. En Canarias se aplica el IGIC, con tipos distintos. Otros impuestos, como el IRPF, gravan los ingresos en lugar del consumo.</p>`, svg: iva },
    { html: `<h3>2.1 El interés simple</h3><p>Cuando se presta o se deposita un dinero, quien lo recibe paga un <b>interés</b> por usarlo. En el <b>interés simple</b>, los intereses se calculan siempre sobre el capital inicial y no se acumulan: <mark>I = C · r · t</mark>, donde C es el <b>capital</b>, r el <b>rédito</b> o tipo de interés anual en tanto por uno (5 % = 0,05) y t el <b>tiempo</b> en años. El capital final es C_f = C + I = C(1 + r · t).</p><p>Ejemplo: 2.000 € al 4 % durante 3 años generan I = 2.000 · 0,04 · 3 = 240 €, y el capital final es 2.240 €. Si el tiempo se da en meses, se divide entre 12; si se da en días, entre 360 (año comercial) o 365. Así, 5.000 € al 3 % durante 8 meses dan 5.000 · 0,03 · 8/12 = 100 €. El interés simple se usa en operaciones de menos de un año y en algunos productos donde los intereses se cobran periódicamente sin reinvertirse.</p>`, svg: simple, video: { id: "Qe1DLWrJW88", titulo: "Interés simple | Ejemplo 1", canal: "Matemáticas profe Alex", vistas: 3064454, megusta: 0 } },
    { html: `<h3>2.2 Despejar en la fórmula del interés simple</h3><p>La fórmula I = C · r · t tiene cuatro magnitudes; conociendo tres, se puede calcular la cuarta despejando. <b>Capital</b>: C = I / (r · t). <b>Rédito</b>: r = I / (C · t). <b>Tiempo</b>: t = I / (C · r). Siempre hay que tener cuidado con las unidades: el rédito debe ir en tanto por uno y el tiempo en las mismas unidades que el rédito (años si el rédito es anual).</p><p>Ejemplos: ¿qué capital hay que depositar al 2,5 % para obtener 300 € en 4 años? C = 300 / (0,025 · 4) = 3.000 €. ¿A qué interés se han colocado 8.000 € que en 2 años generaron 480 €? r = 480 / (8.000 · 2) = 0,03, es decir, un 3 %. ¿Cuánto tiempo deben estar 1.500 € al 4 % para generar 90 €? t = 90 / (1.500 · 0,04) = 1,5 años, o sea, 18 meses.</p>`, svg: despejar },
    { html: `<h3>2.3 El interés compuesto</h3><p>En el <b>interés compuesto</b>, al final de cada periodo los intereses se <b>suman al capital</b> y en el periodo siguiente también producen intereses: «intereses de los intereses». Después de un año, el capital es C · (1 + r); después de dos, C · (1 + r)²; y después de t años, <mark>C_f = C · (1 + r)ᵗ</mark>. Es una función exponencial.</p><p>Ejemplo: 1.000 € al 5 % compuesto durante 10 años se convierten en 1.000 · 1,05¹⁰ ≈ 1.628,89 €. Con interés simple serían 1.500 €. Para hallar el capital inicial se divide: C = C_f / (1 + r)ᵗ; para calcular el tiempo, se prueba con la calculadora o se usan logaritmos (que verás en cursos superiores). Casi todos los productos de ahorro a largo plazo, los planes de pensiones y también las deudas funcionan con interés compuesto.</p>`, svg: compuesto, video: { id: "P3gWe39mM00", titulo: "Fórmula del interés compuesto | Explicación", canal: "Matemáticas profe Alex", vistas: 732655, megusta: 0 } },
    { html: `<h3>2.4 Simple frente a compuesto, año a año</h3><p>Con interés simple el capital crece en <b>línea recta</b>: cada año se añade la misma cantidad. Con interés compuesto crece como una <b>curva exponencial</b>: cada año se añade más que el anterior. Al principio la diferencia es pequeña, pero con el tiempo se hace enorme. Con 1.000 € al 8 %, después de 20 años el interés simple da 2.600 € y el compuesto, unos 4.661 €.</p><p>La tabla muestra la comparación. Esa diferencia es la razón de dos consejos financieros clásicos: <b>empezar a ahorrar pronto</b>, porque el tiempo es el ingrediente más importante del interés compuesto, y <b>evitar las deudas caras</b>, porque juegan en tu contra con la misma fuerza. Una deuda de tarjeta de 1.000 € al 20 % anual, sin pagar, se convierte en más de 2.400 € en 5 años.</p>${tabla(["Años", "Simple 8 %", "Compuesto 8 %"], [["0", "1.000", "1.000"], ["5", "1.400", "1.469"], ["10", "1.800", "2.159"], ["20", "2.600", "4.661"]])}`, svg: simpleVsComp },
    { html: `<h3>2.5 La regla del 72</h3><p>¿Cuánto tarda en duplicarse un capital a interés compuesto? Hay un truco muy útil, la <b>regla del 72</b>: el número de años es aproximadamente <mark>72 / tipo de interés</mark> (en porcentaje). Al 6 %, un capital se duplica en unos 72/6 = 12 años; al 8 %, en unos 9 años; al 2 %, en unos 36 años. Se puede comprobar: 1,06¹² ≈ 2,01.</p><p>La regla funciona también al revés: si quieres duplicar tu dinero en 10 años, necesitas un interés de un 7,2 % aproximadamente. Y sirve para la inflación: con una inflación del 3 %, los precios se duplican en unos 24 años, es decir, el dinero guardado pierde la mitad de su poder de compra. Es una aproximación, muy buena para tipos entre el 2 % y el 15 %, que permite hacer estimaciones de cabeza sin calculadora.</p>`, svg: regla72 },
    { html: `<h3>2.6 Periodos cortos: TIN y TAE</h3><p>Muchos productos indican un tipo anual, el <b>TIN</b> (tipo de interés nominal), pero pagan o cobran los intereses cada mes o cada trimestre. Entonces se usa el tipo del periodo: con un TIN del 6 % y pago mensual, cada mes se aplica un 6/12 = 0,5 %. Al cabo de un año, el capital se multiplica por 1,005¹² ≈ 1,0617: el interés efectivo es del 6,17 %, algo mayor que el 6 %.</p><p>Ese interés efectivo anual, incluyendo además comisiones y gastos, es la <b>TAE</b> (tasa anual equivalente). Por ley, los bancos deben informar de la TAE para que se puedan <b>comparar</b> productos con distinta frecuencia de pago y distintas comisiones. Regla práctica: en un ahorro conviene la TAE más alta; en un préstamo o una tarjeta, la más baja. Una tarjeta «revolving» con un TIN del 2 % mensual tiene una TAE de 1,02¹² − 1 ≈ 26,8 %.</p>`, svg: taeFig },
    { html: `<h3>3.1 Préstamos y cuotas</h3><p>Un <b>préstamo</b> es una cantidad de dinero que un banco presta y que se devuelve en <b>cuotas</b> periódicas con intereses. En España se usa casi siempre el <b>sistema francés</b>: todas las cuotas son iguales, pero al principio una gran parte es interés y poco a poco aumenta la parte que amortiza (devuelve) el capital. La cuota mensual se calcula con <mark>cuota = C · i / (1 − (1 + i)⁻ⁿ)</mark>, donde i es el interés mensual y n el número de cuotas.</p><p>Ejemplo: 10.000 € a 4 años (48 cuotas) con un TIN del 5 %: i = 0,05/12 ≈ 0,004167 y la cuota sale unos 230,29 €. En total se pagan 48 · 230,29 ≈ 11.054 €, es decir, 1.054 € de intereses. A más plazo, la cuota baja, pero los intereses totales suben mucho. Antes de firmar, hay que mirar la TAE, las comisiones de apertura y cancelación, y si la cuota cabe en el presupuesto (se recomienda que las deudas no superen el 35 % de los ingresos).</p>`, svg: prestamo, video: { id: "N1-i1pXYXOE", titulo: "Cómo calcular la cuota de un préstamo", canal: "Jhon Alexander Castillo", vistas: 631666, megusta: 0 } },
    { html: `<h3>3.2 Compras a plazos y tarjetas</h3><p>Comprar «a plazos» o con «financiación» es pedir un préstamo. Un móvil de 600 € que se paga en 12 cuotas de 55 € cuesta en realidad 660 €: un 10 % más. Las ofertas de «financiación sin intereses» a veces incluyen comisiones de apertura o seguros obligatorios, por lo que su TAE no es 0. Siempre conviene comparar el <b>precio total</b> pagado con el precio al contado.</p><p>Las <b>tarjetas de crédito</b> pueden ser útiles, pero algunas modalidades, como las «revolving», aplazan la deuda indefinidamente cobrando intereses muy altos: con cuotas pequeñas, la deuda casi no baja. La fórmula de la cuota explica el problema: si la cuota apenas supera los intereses del mes, el capital pendiente se amortiza muy despacio. La regla de oro es no aplazar compras de consumo que no sean necesarias.</p>`, svg: cuota },
    { html: `<h3>3.3 La inflación y el poder adquisitivo</h3><p>La <b>inflación</b> es el aumento general de los precios. Se mide con el <b>IPC</b> (índice de precios de consumo), que el INE publica cada mes a partir de una «cesta» de productos típicos. Si la inflación anual es del 3 %, lo que costaba 100 € cuesta 103 € al año siguiente. El dinero no cambia de cifra, pero compra menos: pierde <b>poder adquisitivo</b>.</p><p>Con una inflación del 3 % durante 10 años, 1.000 € guardados en casa equivalen a 1.000 / 1,03¹⁰ ≈ 744 € de hoy. Por eso, para no perder dinero, los ahorros deberían obtener una rentabilidad al menos igual a la inflación: la <b>rentabilidad real</b> es aproximadamente la nominal menos la inflación. Un depósito al 2 % con una inflación del 3 % hace perder un 1 % real cada año. También los sueldos se comparan con el IPC para ver si se gana o se pierde poder adquisitivo.</p>`, svg: inflacion },
    { html: `<h3>3.4 La nómina: sueldo bruto y neto</h3><p>La <b>nómina</b> es el documento que recibe cada mes una persona trabajadora. El <b>sueldo bruto</b> es lo que paga la empresa; de él se descuentan las <b>cotizaciones a la Seguridad Social</b> (alrededor del 6,4 %, para pensiones, desempleo y formación) y la <b>retención del IRPF</b> (un porcentaje que depende de los ingresos anuales y de la situación familiar). Lo que queda es el <b>sueldo neto</b> o líquido, el que llega a la cuenta.</p><p>Ejemplo: con 1.800 € brutos, una retención de IRPF del 11,5 % (207 €) y cotizaciones del 6,4 % (115 €), el neto es 1.800 − 207 − 115 ≈ 1.478 €. Además, la empresa paga sus propias cotizaciones, por lo que el coste total del trabajador es mayor que el bruto. El IRPF es <b>progresivo</b>: los tramos de ingresos más altos pagan porcentajes mayores, y con la declaración de la renta se ajusta lo retenido durante el año.</p>`, svg: nomina },
    { html: `<h3>3.5 Hacer un presupuesto personal</h3><p>Un <b>presupuesto</b> es un plan de ingresos y gastos para un periodo, normalmente un mes. Se apuntan los ingresos y se clasifican los gastos en <b>fijos</b> (alquiler, transporte, suscripciones) y <b>variables</b> (ocio, ropa, comidas fuera). Una regla orientativa es la <mark>50/30/20</mark>: un 50 % para necesidades, un 30 % para deseos y un 20 % para ahorro o para pagar deudas.</p><p>Con unos ingresos de 1.500 €, serían 750 € para necesidades, 450 € para deseos y 300 € para ahorro. Una buena práctica es tener un <b>fondo de emergencia</b> de 3 a 6 meses de gastos para imprevistos. Las hojas de cálculo y las aplicaciones bancarias ayudan a seguir los gastos y a detectar los «gastos hormiga»: un café de 1,50 € al día son unos 550 € al año. Lo importante no es cuánto se gana, sino gastar menos de lo que se ingresa.</p>`, svg: presupuesto },
    { html: `<h3>3.6 Ahorro, inversión y riesgo</h3><p>No todos los productos financieros son iguales. Las <b>cuentas de ahorro</b> y los <b>depósitos</b> tienen poco riesgo (en España están garantizados hasta 100.000 € por el Fondo de Garantía de Depósitos), pero su rentabilidad suele ser baja. Los <b>fondos de inversión</b> reúnen el dinero de muchas personas y lo reparten entre muchas empresas, reduciendo el riesgo por <b>diversificación</b>. Las <b>acciones</b> de una empresa pueden dar mucha rentabilidad, pero también perder valor.</p><p>La regla básica es que <b>a más rentabilidad esperada, más riesgo</b>. Si alguien promete ganancias muy altas, rápidas y «seguras», casi siempre es un engaño: las estafas piramidales y muchos productos que se anuncian en redes sociales funcionan así. Antes de invertir conviene entender el producto, comprobar que la entidad está registrada en la CNMV o el Banco de España y no invertir nunca dinero que se pueda necesitar pronto.</p>`, svg: riesgo },
    { html: `<h3>3.7 Resolver problemas financieros</h3><p>Para resolver un problema de matemática financiera conviene: 1) <b>identificar</b> el tipo de situación (porcentaje, interés simple, compuesto, préstamo); 2) pasar el interés a <b>tanto por uno</b>; 3) ajustar los <b>periodos</b> (si el interés es anual y el tiempo en meses, dividir entre 12; si los intereses son mensuales, usar el tipo mensual); 4) aplicar la <b>fórmula</b> y calcular con cuidado, redondeando solo al final; 5) <b>interpretar</b> el resultado y decidir.</p><p>Las preguntas finales suelen ser de decisión: ¿qué oferta conviene?, ¿cuánto se paga de más?, ¿en cuánto tiempo se alcanza un objetivo? Una hoja de cálculo es la herramienta ideal: con una columna de años y la fórmula =C*(1+r)^t se ve la evolución de un ahorro, y la función PAGO calcula la cuota de un préstamo. Las matemáticas financieras son, sobre todo, una herramienta para la autonomía personal.</p>`, svg: resolver },
  ],
  ejemplos: [
    { enunciado: "Un abrigo cuesta 120 €. Tiene un descuento del 25 % y después se le aplica otro del 10 %. ¿Precio final y descuento total?", pasos: ["Índice total: 0,75 · 0,90 = 0,675.", "Precio: 120 · 0,675 = 81 €.", "Descuento total: 1 − 0,675 = 32,5 %."], resultado: "81 €, un descuento del 32,5 % (no del 35 %)." },
    { enunciado: "Una factura de restaurante es de 55 € con IVA del 10 % incluido. Calcula la base y el IVA.", pasos: ["Base = 55 / 1,10 = 50 €.", "IVA = 55 − 50 = 5 €."], resultado: "Base 50 €, IVA 5 €." },
    { enunciado: "Calcula los intereses de 6.000 € al 3,5 % simple durante 9 meses.", pasos: ["t = 9/12 = 0,75 años.", "I = 6.000 · 0,035 · 0,75."], resultado: "I = 157,50 €; capital final 6.157,50 €." },
    { enunciado: "Se depositan 5.000 € al 4 % compuesto anual. ¿Cuánto habrá en 6 años? ¿Cuánto con interés simple?", pasos: ["Compuesto: 5.000 · 1,04⁶ ≈ 5.000 · 1,2653.", "≈ 6.326,60 €.", "Simple: 5.000 · (1 + 0,04 · 6) = 6.200 €."], resultado: "6.326,60 € frente a 6.200 €." },
    { enunciado: "Un depósito ofrece un TIN del 3 % con liquidación trimestral. Calcula la TAE.", pasos: ["Tipo trimestral: 3/4 = 0,75 % = 0,0075.", "Año: 1,0075⁴ ≈ 1,03034.", "TAE ≈ 3,03 %."], resultado: "TAE ≈ 3,03 %." },
    { enunciado: "¿Qué capital hay que invertir hoy al 5 % compuesto para tener 10.000 € dentro de 8 años?", pasos: ["C = C_f / (1 + r)ᵗ.", "C = 10.000 / 1,05⁸ = 10.000 / 1,4775."], resultado: "≈ 6.768,39 €." },
  ],
  errores: [
    "Sumar porcentajes encadenados en lugar de multiplicar los índices.",
    "Quitar el IVA restando el 21 % del precio final en lugar de dividir entre 1,21.",
    "Usar el rédito en porcentaje (5) en lugar de en tanto por uno (0,05).",
    "Mezclar unidades: interés anual con tiempo en meses sin dividir entre 12.",
    "Confundir el TIN con la TAE al comparar productos.",
    "Pensar que una rebaja del 50 % se compensa con una subida del 50 %.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Calcula: a) el 18 % de 250 b) el 4 % de 1.350 c) el 125 % de 80.", sol: "a) 45 b) 54 c) 100." },
    { nivel: "básico", q: "Escribe el índice de variación de: a) subir 7 % b) bajar 12 % c) subir 150 % d) bajar 3 %.", sol: "a) 1,07 b) 0,88 c) 2,5 d) 0,97." },
    { nivel: "básico", q: "Un pantalón de 45 € se rebaja un 20 %. ¿Cuál es el nuevo precio?", sol: "45 · 0,80 = 36 €." },
    { nivel: "básico", q: "Una entrada cuesta 30 € sin IVA. Calcula el precio con IVA del 21 %.", sol: "30 · 1,21 = 36,30 €." },
    { nivel: "básico", q: "Un libro cuesta 20,80 € con IVA del 4 %. ¿Cuál es su base imponible?", sol: "20,80 / 1,04 = 20 €." },
    { nivel: "básico", q: "Calcula los intereses de 3.000 € al 5 % simple durante 4 años.", sol: "3.000 · 0,05 · 4 = 600 €." },
    { nivel: "básico", q: "Calcula el capital final de 1.200 € al 2 % simple durante 6 meses.", sol: "I = 1.200 · 0,02 · 0,5 = 12 €. C_f = 1.212 €." },
    { nivel: "básico", q: "Calcula el capital final de 2.000 € al 3 % compuesto durante 2 años.", sol: "2.000 · 1,03² = 2.121,80 €." },
    { nivel: "básico", q: "Según la regla del 72, ¿en cuántos años se duplica un capital al 9 %? ¿Y al 3 %?", sol: "72/9 = 8 años; 72/3 = 24 años." },
    { nivel: "básico", q: "Un sueldo bruto es de 1.500 €. Si le retienen un 9 % de IRPF y un 6,4 % de Seguridad Social, ¿cuál es el neto?", sol: "1.500 · (1 − 0,154) = 1.269 €." },
    { nivel: "básico", q: "Con 1.200 € de ingresos, reparte el presupuesto según la regla 50/30/20.", sol: "600 € necesidades, 360 € deseos, 240 € ahorro." },
    { nivel: "básico", q: "Un móvil de 500 € se paga en 10 cuotas de 54 €. ¿Cuánto se paga de más? ¿Qué porcentaje?", sol: "540 − 500 = 40 €; 8 %." },
    { nivel: "medio", q: "Un precio sube un 15 % y después baja un 15 %. ¿Varía el precio? ¿Qué porcentaje?", sol: "1,15 · 0,85 = 0,9775: baja un 2,25 %." },
    { nivel: "medio", q: "Tras subir un 8 %, un alquiler cuesta 756 €. ¿Cuánto costaba antes?", sol: "756 / 1,08 = 700 €." },
    { nivel: "medio", q: "Un ordenador pasa de 850 € a 697 €. ¿Qué porcentaje de descuento se ha aplicado?", sol: "697/850 = 0,82: un 18 %." },
    { nivel: "medio", q: "¿Qué capital colocado al 4 % simple produce 360 € en 3 años?", sol: "C = 360 / (0,04 · 3) = 3.000 €." },
    { nivel: "medio", q: "¿A qué rédito simple se han colocado 2.500 € que en 18 meses produjeron 75 €?", sol: "r = 75 / (2.500 · 1,5) = 0,02: 2 %." },
    { nivel: "medio", q: "¿Cuántos días han de estar 7.200 € al 5 % simple para producir 90 € (año comercial)?", sol: "t = 90/(7.200 · 0,05) = 0,25 años = 90 días." },
    { nivel: "medio", q: "Compara: 4.000 € a 5 años al 4 % simple o al 3,8 % compuesto.", sol: "Simple: 4.800 €. Compuesto: 4.000 · 1,038⁵ ≈ 4.820,94 €. Conviene el compuesto." },
    { nivel: "medio", q: "Calcula la TAE de un TIN del 12 % con pagos mensuales.", sol: "1,01¹² − 1 ≈ 12,68 %." },
    { nivel: "medio", q: "Con una inflación del 2,5 % anual, ¿cuánto costará dentro de 4 años lo que hoy cuesta 200 €?", sol: "200 · 1,025⁴ ≈ 220,76 €." },
    { nivel: "medio", q: "Un depósito da un 1,5 % y la inflación es del 3 %. ¿Se gana o se pierde poder adquisitivo? ¿Cuánto aproximadamente?", sol: "Se pierde: rentabilidad real ≈ 1,5 − 3 = −1,5 % anual." },
    { nivel: "medio", q: "Una población de 20.000 habitantes crece un 2 % anual. ¿Cuántos tendrá en 5 años?", sol: "20.000 · 1,02⁵ ≈ 22.082 habitantes." },
    { nivel: "avanzado", q: "Calcula la cuota mensual de un préstamo de 6.000 € a 2 años con TIN del 6 %.", sol: "i = 0,005, n = 24. 1,005⁻²⁴ ≈ 0,8872. Cuota = 30 / 0,1128 ≈ 265,92 €. Total ≈ 6.382 €." },
    { nivel: "avanzado", q: "Para el préstamo anterior, ¿qué parte de la primera cuota son intereses y qué parte amortiza capital?", sol: "Intereses: 6.000 · 0,005 = 30 €. Amortización: 265,92 − 30 = 235,92 €." },
    { nivel: "avanzado", q: "¿Cuántos años completos tarda un capital en triplicarse al 6 % compuesto? Hazlo tanteando con la calculadora.", sol: "1,06¹⁸ ≈ 2,85; 1,06¹⁹ ≈ 3,03. Unos 19 años." },
    { nivel: "avanzado", q: "Una deuda de tarjeta de 1.500 € al 24 % TAE no se paga durante 3 años. ¿En cuánto se convierte?", sol: "1.500 · 1,24³ ≈ 2.860 €: casi se duplica." },
    { nivel: "avanzado", q: "Un producto subió un 25 % en 2022 y un 20 % en 2023. ¿Qué rebaja habría que aplicar en 2024 para volver al precio de 2021?", sol: "Índice 1,25 · 1,20 = 1,5. Rebaja: 1 − 1/1,5 ≈ 33,3 %." },
    { nivel: "avanzado", q: "Ahorras 100 € al final de cada año durante 3 años al 5 % compuesto. ¿Cuánto tienes al final del tercer año?", sol: "100 · 1,05² + 100 · 1,05 + 100 = 110,25 + 105 + 100 = 315,25 €." },
    { nivel: "avanzado", q: "Un anuncio promete duplicar tu dinero en un año «sin riesgo». Usando la regla del 72 y lo aprendido, argumenta por qué es sospechoso.", sol: "Duplicar en 1 año supone ~100 % de interés; los productos seguros dan pocos puntos. Alta rentabilidad sin riesgo no existe: probable estafa." },
    { nivel: "avanzado", q: "Compara dos préstamos de 10.000 €: A a 3 años con TAE 7 % y cuota 308,77 €; B a 5 años con TAE 6 % y cuota 193,33 €. ¿Cuál cuesta más en total?", sol: "A: 36 · 308,77 ≈ 11.116 €. B: 60 · 193,33 ≈ 11.600 €. B cuesta más aunque tenga menor TAE, por el plazo." },
  ],
  quiz: [
    { q: "Índice de variación para subir un 30 %:", o: ["0,30", "1,30", "0,70", "30"], a: 1, e: "1 + 0,30." },
    { q: "Índice para bajar un 5 %:", o: ["0,05", "1,05", "0,95", "0,5"], a: 2, e: "1 − 0,05." },
    { q: "Subir un 10 % y bajar un 10% deja el precio…", o: ["igual", "1 % más bajo", "1 % más alto", "10 % más bajo"], a: 1, e: "1,1 · 0,9 = 0,99." },
    { q: "El IVA general en España es…", o: ["4 %", "10 %", "16 %", "21 %"], a: 3, e: "Tipo general." },
    { q: "Base de un precio de 242 € con IVA del 21 %:", o: ["191,18 €", "200 €", "221 €", "292,82 €"], a: 1, e: "242 / 1,21." },
    { q: "Fórmula del interés simple:", o: ["C(1 + r)ᵗ", "C · r · t", "C + r + t", "C · rᵗ"], a: 1, e: "I = C · r · t." },
    { q: "Intereses de 1.000 € al 3 % simple en 2 años:", o: ["30 €", "60 €", "61,80 €", "600 €"], a: 1, e: "1.000 · 0,03 · 2." },
    { q: "En el interés compuesto, los intereses…", o: ["se pierden", "se suman al capital", "siempre son iguales", "se pagan al final sin acumular"], a: 1, e: "Generan más intereses." },
    { q: "1.000 € al 10 % compuesto en 2 años:", o: ["1.200 €", "1.210 €", "1.100 €", "1.020 €"], a: 1, e: "1.000 · 1,1²." },
    { q: "Regla del 72 con 6 %:", o: ["6 años", "12 años", "72 años", "18 años"], a: 1, e: "72/6." },
    { q: "La TAE sirve para…", o: ["calcular el IVA", "comparar productos financieros", "calcular la nómina", "medir la inflación"], a: 1, e: "Incluye frecuencia y comisiones." },
    { q: "TIN 12 % mensual: el tipo de cada mes es…", o: ["12 %", "1 %", "0,12 %", "6 %"], a: 1, e: "12/12." },
    { q: "Para un préstamo conviene la TAE…", o: ["más alta", "más baja", "igual al TIN", "da igual"], a: 1, e: "Pagas menos." },
    { q: "En el sistema francés, las cuotas son…", o: ["crecientes", "iguales", "decrecientes", "aleatorias"], a: 1, e: "Constantes." },
    { q: "La inflación mide…", o: ["el paro", "la subida general de precios", "los intereses", "el PIB"], a: 1, e: "Con el IPC." },
    { q: "Si la inflación es mayor que la rentabilidad de tu ahorro…", o: ["ganas poder adquisitivo", "pierdes poder adquisitivo", "no pasa nada", "se duplica"], a: 1, e: "Rentabilidad real negativa." },
    { q: "Sueldo neto es…", o: ["lo que paga la empresa", "bruto menos retenciones", "bruto más pagas extra", "el IRPF"], a: 1, e: "Lo que se cobra." },
    { q: "Regla 50/30/20: el 20 % es para…", o: ["ocio", "necesidades", "ahorro", "impuestos"], a: 2, e: "Ahorro o deudas." },
    { q: "A más rentabilidad esperada…", o: ["menos riesgo", "más riesgo", "igual riesgo", "sin riesgo"], a: 1, e: "Regla básica." },
    { q: "Precio rebajado 40 % que queda en 30 €; precio original:", o: ["42 €", "50 €", "70 €", "75 €"], a: 1, e: "30 / 0,60." },
  ],
  examen: [
    { q: "Precio de 80 € con un 15 % de descuento:", o: ["68 €", "65 €", "92 €", "12 €"], a: 0, e: "80 · 0,85." },
    { q: "Descuentos del 20 % y del 10 % encadenados:", o: ["30 %", "28 %", "32 %", "2 %"], a: 1, e: "0,8 · 0,9 = 0,72." },
    { q: "Intereses de 4.000 € al 2 % simple en 6 meses:", o: ["40 €", "80 €", "480 €", "160 €"], a: 0, e: "4.000 · 0,02 · 0,5." },
    { q: "Capital que al 5 % simple da 100 € en 2 años:", o: ["1.000 €", "2.000 €", "500 €", "10.000 €"], a: 0, e: "100 / 0,1." },
    { q: "500 € al 4 % compuesto en 3 años:", o: ["560 €", "562,43 €", "624 €", "520 €"], a: 1, e: "500 · 1,04³." },
    { q: "TAE de un TIN del 6 % mensual:", o: ["6 %", "6,17 %", "72 %", "0,5 %"], a: 1, e: "1,005¹² − 1." },
    { q: "Con inflación del 4 %, los precios se duplican en unos…", o: ["4 años", "18 años", "36 años", "72 años"], a: 1, e: "72/4." },
    { q: "Precio de 363 € con IVA 21 %; la base es…", o: ["300 €", "286,77 €", "342 €", "439,23 €"], a: 0, e: "363 / 1,21." },
  ],
  feynman: ["Qué es el índice de variación y por qué los porcentajes encadenados se multiplican", "Qué diferencia hay entre interés simple y compuesto", "Por qué hay que fijarse en la TAE y no solo en el TIN", "Cómo afecta la inflación al dinero ahorrado"],
  figura: {
    titulo: "Matemática financiera en una mirada",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Resumen: índice de variación, interés simple, interés compuesto y TAE">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Porcentajes", "subir r %: × (1 + r) · bajar: × (1 − r) · encadenar: multiplicar", "var(--pen)"], ["Simple", "I = C · r · t · tiempo en años · r en tanto por uno", "var(--leaf)"], ["Compuesto", "C_f = C · (1 + r)ᵗ · regla del 72 para duplicar", "var(--red)"], ["TAE · préstamo", "TAE = (1 + TIN/n)ⁿ − 1 · cuota = C·i/(1 − (1+i)⁻ⁿ)", "var(--inf)"]].map(([n, f, c], i) => `<rect x="20" y="${16 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="36" y="${43 + i * 50}" font-size="15" font-weight="700" fill="${c}" ${D}>${n}</text><text x="180" y="${43 + i * 50}" font-size="14" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "cD5xmLtYjYI", titulo: "Interés compuesto | Ejemplo 1", canal: "Matemáticas profe Alex", vistas: 2295756, megusta: 0, busqueda: "interés compuesto ejemplo" },
  mapa: mapa("FINANZAS", "var(--leaf)", [
    ["Porcentajes", "índice · IVA", "var(--pen)"],
    ["Interés", "simple · compuesto", "var(--red)"],
    ["TAE · préstamos", "comparar · cuotas", "var(--inf)"],
    ["Vida diaria", "nómina · presupuesto", "var(--leaf)"],
  ], 230),
  glosario: [
    ["Índice de variación", "Número por el que se multiplica una cantidad para aumentarla o disminuirla un porcentaje."],
    ["IVA", "Impuesto sobre el valor añadido que grava el consumo."],
    ["Base imponible", "Cantidad sobre la que se calcula un impuesto."],
    ["Capital", "Cantidad de dinero que se presta o se deposita."],
    ["Rédito", "Tipo de interés, expresado en porcentaje o tanto por uno."],
    ["Interés simple", "Interés calculado siempre sobre el capital inicial."],
    ["Interés compuesto", "Interés en el que los intereses se suman al capital y generan nuevos intereses."],
    ["TIN", "Tipo de interés nominal anual, sin comisiones ni efecto de la frecuencia de pago."],
    ["TAE", "Tasa anual equivalente: interés efectivo que incluye frecuencia de pago y comisiones."],
    ["Préstamo", "Dinero prestado que se devuelve en cuotas con intereses."],
    ["Amortización", "Parte de la cuota que devuelve el capital prestado."],
    ["Inflación", "Aumento general y continuado de los precios."],
    ["IPC", "Índice de precios de consumo, que mide la inflación."],
    ["Sueldo bruto", "Salario antes de retenciones y cotizaciones."],
    ["Sueldo neto", "Salario que se cobra después de descuentos."],
    ["IRPF", "Impuesto sobre la renta de las personas físicas."],
    ["Diversificación", "Repartir el dinero entre distintos productos para reducir el riesgo."],
  ],
  situacion: {
    titulo: "Mi primer plan financiero",
    reto: "Imaginad que acabáis de conseguir vuestro primer empleo. Vuestro grupo debe elaborar un plan financiero realista para el primer año: presupuesto mensual, objetivo de ahorro y decisión sobre una compra importante (un portátil o una moto) al contado o financiada.",
    pasos: [
      "Elegid una profesión, buscad un sueldo bruto realista y calculad el neto aproximado descontando IRPF y Seguridad Social.",
      "Elaborad un presupuesto mensual con la regla 50/30/20 y precios reales de alquiler, transporte y comida.",
      "Comparad dos productos de ahorro reales a partir de su TAE y calculad cuánto tendríais en 1, 5 y 10 años.",
      "Buscad dos ofertas de financiación para la compra elegida, calculad el coste total y comparadlo con pagar al contado.",
      "Valorad el efecto de la inflación y redactad vuestras decisiones justificadas.",
    ],
    producto: "Una hoja de cálculo con el presupuesto, las simulaciones de ahorro y financiación, y una presentación con las decisiones del plan.",
    evaluacion: ["Calcula correctamente porcentajes, impuestos e intereses.", "Interpreta y compara productos financieros mediante la TAE.", "Usa la hoja de cálculo para simular escenarios.", "Toma decisiones financieras responsables y las argumenta."],
  },
  tarjetas: [
    ["Subir r %", "× (1 + r/100)"],
    ["Bajar r %", "× (1 − r/100)"],
    ["Porcentajes encadenados", "Se multiplican los índices."],
    ["Quitar el IVA", "Dividir entre 1,21 (o 1,10, 1,04)."],
    ["Interés simple", "I = C · r · t"],
    ["Interés compuesto", "C_f = C · (1 + r)ᵗ"],
    ["Regla del 72", "Años para duplicar ≈ 72 / interés."],
    ["TAE", "(1 + TIN/n)ⁿ − 1 + comisiones."],
    ["Cuota francesa", "C · i / (1 − (1 + i)⁻ⁿ)"],
    ["Inflación", "El dinero pierde poder adquisitivo."],
    ["Neto", "Bruto − IRPF − Seguridad Social."],
    ["50/30/20", "Necesidades / deseos / ahorro."],
  ],
  familias: ["Revisad juntos un tique de compra e identificad la base y el IVA.", "Comparad la TAE de dos cuentas o tarjetas reales.", "Haced un presupuesto familiar sencillo de un mes con la regla 50/30/20.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido numérico y algebraico aplicado a la educación financiera: porcentajes e índices de variación, impuestos, interés simple y compuesto, TIN y TAE, préstamos, inflación, nóminas y presupuestos, con toma de decisiones responsables (RD 217/2022, Matemáticas A 4º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Simulador de ahorro y préstamos en hoja de cálculo (funciones VF y PAGO).", "Análisis de folletos bancarios reales: TIN, TAE y comisiones.", "Plan financiero de un primer empleo (situación de aprendizaje).", "Recursos del Plan de Educación Financiera del Banco de España y la CNMV."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Finanzas para todos (Banco de España y CNMV)", url: "https://www.finanzasparatodos.es/" },
    { t: "Portal del Cliente Bancario del Banco de España", url: "https://clientebancario.bde.es/" },
  ],
  revisado: "2026-11-13",
};
