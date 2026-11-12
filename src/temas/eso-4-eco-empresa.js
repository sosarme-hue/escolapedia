// Economía y Emprendimiento 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { rueda, filas, dos, flujo, figCols } = require("./_hum");

module.exports = {
  materia: "Economía y Emprendimiento",
  curso: "4-eso",
  titulo: "La empresa",
  minutos: 35,
  objetivos: ["Definir la empresa, sus funciones y sus elementos", "Clasificar las empresas por sector, tamaño y forma jurídica", "Calcular el beneficio y conocer la responsabilidad social corporativa"],
  claves: ["empresa", "empresario", "autónomo", "sociedad limitada", "beneficio", "responsabilidad social"],
  pregunta: {
    texto: "Una panadería de barrio con dos personas y una multinacional con 100 000 empleados son muy distintas. ¿Qué tienen en común para que ambas se llamen «empresa»?",
    respuesta: "Las dos combinan <b>factores de producción</b> (trabajo, capital, materias primas) para producir bienes o servicios y venderlos, buscando obtener un <mark>beneficio</mark>. Eso es una <b>empresa</b>, sea grande o pequeña.",
  },
  bloques: [
    {
      html: `<h3>Qué es una empresa</h3><p>Una <mark>empresa</mark> es una organización que combina recursos para producir bienes o servicios y venderlos en el mercado. Sus funciones son <b>producir</b>, <b>crear empleo</b>, generar riqueza y pagar impuestos. Sus elementos son las <b>personas</b> (empresario, trabajadores, socios), el <b>capital</b>, la <b>organización</b> y el <b>entorno</b> (clientes, proveedores, competencia, leyes).</p>`,
      svg: rueda("Elementos de la empresa", "EMPRESA", [["empresario", "var(--red)"], ["trabajadores", "var(--pen)"], ["capital", "var(--muted)"], ["clientes", "var(--leaf)"], ["proveedores", "var(--sun)"], ["competencia", "var(--inf)"]], "var(--leaf)"),
    },
    {
      html: `<h3>Tipos de empresas</h3><p>Por <b>sector</b>: primario (agricultura, pesca, minería), secundario (industria, construcción) y terciario (servicios). Por <b>tamaño</b>: microempresas (menos de 10 trabajadores), pequeñas (menos de 50), medianas (menos de 250) y grandes. En España más del 99 % son <mark>pymes</mark>. Por <b>propiedad</b>: privadas, públicas o mixtas.</p>`,
      svg: filas("Empresas por tamaño según número de trabajadores", [["Micro", "menos de 10 trabajadores", "var(--leaf)"], ["Pequeña", "de 10 a 49", "var(--pen)"], ["Mediana", "de 50 a 249", "var(--sun)"], ["Grande", "250 o más", "var(--red)"]]),
    },
    {
      html: `<h3>Formas jurídicas</h3><p>Al crear una empresa hay que elegir su forma legal. El <mark>empresario individual</mark> o <b>autónomo</b> es la opción más sencilla, pero responde de las deudas con todo su patrimonio personal (<b>responsabilidad ilimitada</b>). En las <b>sociedades</b>, como la <b>Sociedad Limitada</b> (S. L.) o la <b>Sociedad Anónima</b> (S. A.), los socios solo arriesgan el capital que aportan (<b>responsabilidad limitada</b>). También existen cooperativas y sociedades laborales.</p>`,
      svg: dos("Autónomo frente a sociedad limitada", ["Autónomo", ["una persona", "trámites fáciles", "responde con", "todos sus bienes", "(ilimitada)"], "var(--red)"], ["S. L.", ["uno o más socios", "capital mín. 1 €", "responden solo", "con lo aportado", "(limitada)"], "var(--pen)"]),
    },
    {
      html: `<h3>Ingresos, costes y beneficio</h3><p>El <mark>beneficio</mark> es la diferencia entre <b>ingresos</b> (lo que se vende) y <b>costes</b>. Los costes pueden ser <b>fijos</b> (no dependen de lo que produces: alquiler, seguros) o <b>variables</b> (crecen con la producción: harina, envases). Si los costes superan a los ingresos hay <b>pérdidas</b>. Ejemplo: una panadería vende 3 000 € al mes, paga 1 200 € fijos y 1 000 € variables: beneficio = 3 000 − 2 200 = <b>800 €</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Barras: ingresos 3000 euros, costes 2200 euros, beneficio 800 euros">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} text-anchor="middle" font-size="11.5" font-weight="700">
          <rect x="34" y="40" width="54" height="110" fill="var(--pen)"/><text x="61" y="34" fill="var(--ink)">3 000 €</text><text x="61" y="168" fill="var(--ink)">ingresos</text>
          <rect x="104" y="70" width="54" height="36" fill="var(--sun)"/><rect x="104" y="106" width="54" height="44" fill="var(--red)"/><text x="131" y="64" fill="var(--ink)">2 200 €</text><text x="131" y="168" fill="var(--ink)">costes</text>
          <text x="131" y="92" fill="var(--ink)" font-size="10">variables</text><text x="131" y="132" fill="#fff" font-size="10">fijos</text>
          <rect x="174" y="121" width="54" height="29" fill="var(--leaf)"/><text x="201" y="115" fill="var(--ink)">800 €</text><text x="201" y="168" fill="var(--ink)">beneficio</text>
          <path d="M24 150 H 240" stroke="var(--ink)" stroke-width="2"/>
        </g>
      </svg>`,
    },
    {
      html: `<h3>Responsabilidad social corporativa</h3><p>Hoy se espera que las empresas no solo ganen dinero, sino que actúen de forma ética con sus trabajadores, clientes, el entorno y el medio ambiente: es la <mark>responsabilidad social corporativa</mark> (RSC). Por ejemplo, reducir residuos, asegurar condiciones dignas en la cadena de proveedores, garantizar la igualdad salarial o colaborar con la comunidad local.</p>`,
      svg: flujo("Ciclo de la empresa responsable", ["clientes|satisfechos", "plantilla|cuidada", "entorno|limpio", "buena|reputación", "más|ventas", "beneficio|sostenible"], "var(--leaf)"),
    },
  ],
  figura: {
    titulo: "Tres formas de clasificar una empresa",
    svg: figCols("Clasificación de empresas por sector, tamaño y forma jurídica", [
      ["Por sector", ["primario: campo", "secundario:", "industria", "terciario:", "servicios"], "var(--leaf)"],
      ["Por tamaño", ["micro (< 10)", "pequeña (< 50)", "mediana (< 250)", "grande (≥ 250)", "99 % son pymes"], "var(--pen)"],
      ["Por forma jurídica", ["autónomo", "S. L.", "S. A.", "cooperativa", "sociedad laboral"], "var(--red)"],
    ]),
  },
  video: { id: "dBbkaT6jTps", titulo: "Tipos de empresas según su forma jurídica", canal: "ECONOSUBLIME", vistas: 189796, megusta: 2636, busqueda: "qué es una empresa tipos de empresa" },
  quiz: [
    { q: "¿Qué busca principalmente una empresa privada?", o: ["Pagar impuestos", "Obtener beneficio produciendo bienes o servicios", "Contratar al máximo de personas"], a: 1, e: "Combina recursos para producir y vender con beneficio." },
    { q: "Una empresa con 30 trabajadores es…", o: ["micro", "pequeña", "grande"], a: 1, e: "Las pequeñas tienen de 10 a 49 trabajadores." },
    { q: "Un autónomo tiene responsabilidad…", o: ["limitada", "ilimitada", "nula"], a: 1, e: "Responde de las deudas con todo su patrimonio personal." },
    { q: "El alquiler del local es un coste…", o: ["fijo", "variable", "de oportunidad"], a: 0, e: "Se paga igual aunque se produzca más o menos." },
    { q: "Ingresos 5 000 €, costes 4 200 €. El beneficio es…", o: ["800 €", "9 200 €", "−800 €"], a: 0, e: "Beneficio = ingresos − costes = 5 000 − 4 200 = 800 €." },
  ],
  examen: [
    { q: "Un hotel pertenece al sector…", o: ["primario", "secundario", "terciario"], a: 2, e: "Ofrece servicios, como el turismo, el comercio o la educación." },
    { q: "En una S. L., los socios responden de las deudas…", o: ["con todos sus bienes", "solo con el capital aportado", "nunca"], a: 1, e: "Es la principal ventaja de las sociedades de capital." },
    { q: "¿Qué es la responsabilidad social corporativa?", o: ["Pagar dividendos", "Actuar de forma ética con trabajadores, sociedad y medio ambiente", "Tener muchos socios"], a: 1, e: "Va más allá de lo que obliga la ley." },
  ],
  feynman: ["Qué es una empresa y cuáles son sus elementos", "Cómo se clasifican las empresas por sector y tamaño", "La diferencia entre responsabilidad limitada e ilimitada", "Cómo se calcula el beneficio con costes fijos y variables"],
  mapa: mapa("LA EMPRESA", "var(--leaf)", [
    ["Elementos", "personas · capital · entorno", "var(--pen)"],
    ["Tipos", "sector · tamaño · propiedad", "var(--sun)"],
    ["Forma jurídica", "autónomo · S. L. · S. A.", "var(--red)"],
    ["Resultados", "ingresos − costes · RSC", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Pyme", "Pequeña y mediana empresa: menos de 250 trabajadores."],
    ["Responsabilidad ilimitada", "El empresario responde de las deudas con todos sus bienes."],
    ["Coste fijo", "No depende de la cantidad producida (alquiler, seguros)."],
    ["Beneficio", "Ingresos − costes."],
    ["RSC", "Responsabilidad social corporativa: actuar de forma ética con la sociedad y el medio ambiente."],
  ],
  familias: ["Pensad juntos en cinco empresas del barrio y clasificadlas por sector y tamaño.", "Si alguien de la familia trabaja por cuenta propia, que cuente qué ventajas e inconvenientes tiene.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La empresa: funciones, elementos, tipos, formas jurídicas, resultados y responsabilidad social (RD 217/2022, Economía y Emprendimiento 4º).",
    ideas: ["Investigar una empresa local: sector, tamaño, forma jurídica y una acción de RSC.", "Hoja de cálculo de ingresos y costes de un negocio ficticio.", "Visita o videollamada con una persona emprendedora del entorno."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Empresa, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Empresa" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Comparar formas jurídicas según responsabilidad, capital y socios", "Calcular el beneficio y la productividad de una empresa"],
  bloques: [
    { tras: "Qué es una empresa", html: `<h3>Las funciones y áreas de la empresa</h3><p>Una empresa combina factores de producción para ofrecer bienes o servicios y obtener un beneficio. Para ello se organiza en <b>áreas</b> o departamentos: <b>dirección</b> (planifica, organiza y controla), <b>producción</b> (fabrica o presta el servicio), <b>comercial o marketing</b> (vende), <b>financiera</b> (consigue y gestiona el dinero) y <b>recursos humanos</b> (selecciona, forma y paga al personal). El <mark>organigrama</mark> es el dibujo que muestra esas áreas y quién depende de quién.</p>` },
    { tras: "Formas jurídicas", html: `<h3>Comparar formas jurídicas</h3>${tabla(["Forma", "Socios", "Capital mínimo", "Responsabilidad"], [["Autónomo", "1", "no hay", "ilimitada: responde con sus bienes personales"], ["Sociedad limitada (SL)", "1 o más", "1 € (desde 2022)", "limitada al capital aportado"], ["Sociedad anónima (SA)", "1 o más", "60.000 €", "limitada; capital en acciones"], ["Cooperativa", "normalmente 3 o más", "lo fijan los estatutos", "limitada; un socio, un voto"]])}<p>Elegir la forma depende del <mark>riesgo</mark> que se quiere asumir, del número de socios, del dinero disponible y de los impuestos: los autónomos pagan IRPF y las sociedades, el <b>Impuesto sobre Sociedades</b>.</p>`, video: { id: "WHPuqucLN-g", titulo: "La sociedad limitada (características, ventajas e inconvenientes)", canal: "ECONOSUBLIME", vistas: 185868, megusta: 0 } },
    { tras: "Formas jurídicas", html: `<h3>Los trámites para crear una empresa</h3><p>Crear una sociedad limitada exige varios pasos: pedir la <b>certificación negativa del nombre</b> (que no lo use otra empresa), abrir una cuenta y depositar el capital, firmar la <b>escritura</b> ante notario con los estatutos, obtener el <b>NIF</b> en Hacienda, inscribirla en el <b>Registro Mercantil</b> y darse de alta en Hacienda y en la Seguridad Social. Hoy muchos de estos trámites pueden hacerse en línea a través del <mark>Punto de Atención al Emprendedor</mark> (PAE). Además, hay que pedir la licencia de actividad en el ayuntamiento.</p>` },
    { tras: "Ingresos, costes y beneficio", html: `<h3>Costes fijos y costes variables</h3><p>Los <b>costes fijos</b> no cambian aunque se produzca más o menos: alquiler del local, seguros, sueldo del encargado. Los <b>costes variables</b> crecen con la producción: materias primas, envases, transporte. El <mark>coste total</mark> es la suma de ambos, y el <b>coste medio</b> es el coste total dividido entre las unidades producidas. Producir más suele bajar el coste medio, porque los costes fijos se reparten entre más unidades: son las <b>economías de escala</b>.</p>` },
    { tras: "Responsabilidad social corporativa", html: `<h3>Empresa y entorno</h3><p>La empresa no vive aislada. Le afecta el <b>entorno general</b> (economía, leyes, tecnología, cultura, medio ambiente) y el <b>entorno específico</b>: clientes, proveedores, competidores y administraciones. El <mark>análisis DAFO</mark> ayuda a pensar su situación: <b>debilidades</b> y <b>fortalezas</b> (internas) y <b>amenazas</b> y <b>oportunidades</b> (externas). Una empresa responsable cuida también a sus <b>grupos de interés</b>: trabajadores, clientes, vecinos y el planeta.</p>` },
  ],
  ejemplos: [
    { enunciado: "Una heladería vende 4.000 helados a 3 € en un mes. Tiene 2.500 € de costes fijos y un coste variable de 1 € por helado. Calcula el beneficio.", pasos: ["Ingresos = 4.000 · 3 = 12.000 €.", "Costes variables = 4.000 · 1 = 4.000 €.", "Coste total = 2.500 + 4.000 = 6.500 €.", "Beneficio = 12.000 − 6.500 = 5.500 €."], resultado: "5.500 € de beneficio." },
    { enunciado: "Con los mismos datos, calcula el coste medio si vende 1.000 o 4.000 helados.", pasos: ["Con 1.000: (2.500 + 1.000) / 1.000 = 3,50 € por helado.", "Con 4.000: 6.500 / 4.000 = 1,625 € por helado."], resultado: "El coste medio baja de 3,50 € a 1,63 €: economías de escala." },
    { enunciado: "Ana y Luis quieren abrir una tienda online con 3.000 € y no quieren arriesgar su casa. ¿Qué forma jurídica les conviene?", pasos: ["Son dos socios.", "No llegan a los 60.000 € de una SA.", "Quieren responsabilidad limitada, así que descartan ser autónomos."], resultado: "Una sociedad limitada." },
  ],
  errores: [
    "Confundir ingresos con beneficio: el beneficio es ingresos menos costes.",
    "Pensar que el autónomo solo arriesga lo que invierte: responde con todos sus bienes.",
    "Creer que los costes fijos son cero si no se produce nada.",
    "Mezclar factores internos (fortalezas y debilidades) y externos (oportunidades y amenazas) en el DAFO.",
    "Pensar que solo las grandes empresas tienen responsabilidad social.",
  ],
  ejercicios: [
    { q: "Cita las principales áreas de una empresa.", sol: "Dirección, producción, comercial, financiera y recursos humanos." },
    { q: "¿Qué es un organigrama?", sol: "Un esquema que representa la estructura de la empresa y las relaciones de dependencia." },
    { q: "¿Qué significa responsabilidad ilimitada?", sol: "Que, si la empresa debe dinero, el empresario responde también con sus bienes personales." },
    { q: "¿Qué capital mínimo exige una sociedad anónima?", sol: "60.000 €." },
    { q: "¿Qué tiene de especial una cooperativa?", sol: "Los socios trabajan y deciden juntos, con un voto por persona, sin importar cuánto capital aporte cada uno." },
    { q: "Clasifica como fijo o variable: alquiler, harina de una panadería, seguro, electricidad del horno.", sol: "Alquiler: fijo. Harina: variable. Seguro: fijo. Electricidad del horno: variable." },
    { q: "Una empresa ingresa 50.000 € y sus costes suman 42.000 €. ¿Cuál es su beneficio?", sol: "8.000 €." },
    { q: "¿Qué son las economías de escala?", sol: "La reducción del coste medio al aumentar la producción, porque los costes fijos se reparten entre más unidades." },
    { q: "Pon un ejemplo de oportunidad y de amenaza para una tienda de bicis.", sol: "Oportunidad: más carriles bici en la ciudad. Amenaza: una gran cadena abre al lado." },
    { q: "¿Qué es el Registro Mercantil?", sol: "El registro público donde se inscriben las sociedades para que tengan personalidad jurídica." },
  ],
  quiz: [
    { q: "El capital mínimo de una SL desde 2022 es…", o: ["1 €", "3.000 €", "60.000 €"], a: 0, e: "Aunque hay reglas especiales mientras no llegue a 3.000 €." },
    { q: "La materia prima es un coste…", o: ["fijo", "variable", "de oportunidad"], a: 1, e: "Aumenta con la producción." },
    { q: "En el DAFO, las fortalezas son…", o: ["externas", "internas", "amenazas"], a: 1, e: "Dependen de la propia empresa." },
    { q: "Las sociedades pagan…", o: ["el Impuesto sobre Sociedades", "el IBI de los vecinos", "nada"], a: 0, e: "Los autónomos, en cambio, tributan en el IRPF." },
    { q: "El área que busca y gestiona el dinero es la…", o: ["comercial", "financiera", "de producción"], a: 1, e: "Se ocupa de inversiones y financiación." },
  ],
  tarjetas: [
    ["Organigrama", "Esquema de la estructura de la empresa."],
    ["Coste medio", "Coste total / unidades producidas."],
    ["DAFO", "Debilidades, amenazas, fortalezas y oportunidades."],
  ],
});
