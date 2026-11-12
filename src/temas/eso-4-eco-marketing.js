// Economía y Emprendimiento 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, flujo, figCols } = require("./_hum");

module.exports = {
  materia: "Economía y Emprendimiento",
  curso: "4-eso",
  titulo: "Marketing",
  minutos: 35,
  objetivos: ["Explicar qué es el marketing y la investigación de mercados", "Aplicar las 4 P del marketing mix a un producto", "Analizar el marketing digital y la publicidad de forma crítica"],
  claves: ["marketing", "público objetivo", "marketing mix", "producto", "precio", "promoción"],
  pregunta: {
    texto: "Dos zapatillas casi iguales salen de la misma fábrica. Una se vende a 30 euros y la otra, con un logotipo famoso, a 120. ¿Por qué hay quien paga cuatro veces más?",
    respuesta: "Por el <mark>marketing</mark>: la marca, la imagen, dónde se vende y cómo se anuncia crean un valor percibido que va más allá del producto físico. El marketing estudia a los clientes y decide qué ofrecerles, a qué precio, dónde y cómo comunicarlo.",
  },
  bloques: [
    {
      html: `<h3>Qué es el marketing</h3><p>El <mark>marketing</mark> es el conjunto de actividades para conocer las necesidades de los clientes y ofrecerles productos que las satisfagan mejor que la competencia. Empieza por la <b>investigación de mercados</b> (encuestas, entrevistas, datos de ventas) y la <b>segmentación</b>: dividir el mercado en grupos con rasgos comunes y elegir el <b>público objetivo</b>.</p>`,
      svg: flujo("Pasos del marketing", ["investigar|mercado", "segmentar", "público|objetivo", "marketing|mix", "medir|resultados"], "var(--pen)"),
    },
    {
      html: `<h3>El marketing mix: las 4 P</h3><p>Para llegar al público objetivo la empresa combina cuatro herramientas, el <mark>marketing mix</mark>. <b>Producto</b>: qué ofreces (diseño, calidad, marca, envase). <b>Precio</b>: cuánto cobras (según costes, competencia y lo que el cliente está dispuesto a pagar). <b>Distribución</b> (<i>place</i>): dónde y cómo llega al cliente. <b>Promoción</b>: cómo lo das a conocer (publicidad, redes, ofertas).</p>`,
      svg: rueda("Las 4 P del marketing mix", "MIX", [["Producto", "var(--red)"], ["Precio", "var(--leaf)"], ["Distribución", "var(--pen)"], ["Promoción", "var(--sun)"]], "var(--ink)"),
    },
    {
      html: `<h3>Estrategias de precio</h3><p>Una empresa puede fijar un <b>precio de penetración</b> (bajo al principio para ganar clientes rápido), un <b>precio de prestigio</b> (alto para transmitir calidad y exclusividad) o un <b>precio psicológico</b> (9,99 € parece mucho menos que 10 €). También usa descuentos, promociones 2×1 o suscripciones mensuales.</p>`,
      svg: filas("Estrategias de precio", [["Penetración", "bajo para entrar al mercado", "var(--leaf)"], ["Prestigio", "alto para parecer exclusivo", "var(--bac)"], ["Psicológico", "9,99 € en vez de 10 €", "var(--sun)"], ["Suscripción", "pago fijo cada mes", "var(--pen)"]]),
    },
    {
      html: `<h3>Marketing digital y consumo responsable</h3><p>Hoy gran parte del marketing es <mark>digital</mark>: anuncios personalizados con tus datos, <b>influencers</b>, posicionamiento en buscadores y redes sociales. La ley obliga a que la publicidad se identifique como tal (#publi). Como consumidor conviene tener <b>espíritu crítico</b>: distinguir información de publicidad, comparar precios y pensar si de verdad necesitas lo que te ofrecen.</p>`,
      svg: dos("Marketing tradicional frente a digital", ["Tradicional", ["televisión", "radio, prensa", "carteles", "mismo mensaje", "para todos"], "var(--muted)"], ["Digital", ["redes sociales", "influencers", "buscadores", "anuncio según", "tus datos"], "var(--pen)"]),
    },
  ],
  figura: {
    titulo: "Las 4 P aplicadas a una bebida",
    svg: figCols("Ejemplo de marketing mix de una bebida isotónica para jóvenes deportistas", [
      ["Producto", ["bebida isotónica", "sabor limón", "lata reciclable", "marca joven"], "var(--red)"],
      ["Precio", ["1,49 €", "precio psicológico", "pack de 6", "con descuento"], "var(--leaf)"],
      ["Distribución", ["supermercados", "gimnasios", "máquinas", "tienda online"], "var(--pen)"],
      ["Promoción", ["deportistas", "en redes", "patrocinio de", "carreras"], "var(--sun)"],
    ]),
  },
  video: { id: "M8nC4dgKB9g", titulo: "Las 4P del marketing mix: ejemplos de McDonald's", canal: "Two Teachers", vistas: 443893, megusta: 3667, busqueda: "marketing mix 4p explicación" },
  quiz: [
    { q: "¿Cuáles son las 4 P del marketing mix?", o: ["Producto, precio, distribución y promoción", "Personas, procesos, planes y proveedores", "Publicidad, prensa, precio y pago"], a: 0, e: "En inglés: product, price, place y promotion." },
    { q: "Segmentar el mercado es…", o: ["bajar los precios", "dividir a los clientes en grupos con rasgos comunes", "cerrar tiendas"], a: 1, e: "Permite elegir un público objetivo y adaptar la oferta." },
    { q: "Vender un móvil a 999 € en vez de 1 000 € es un precio…", o: ["de prestigio", "psicológico", "de penetración"], a: 1, e: "El cerebro percibe 999 como bastante menos que 1 000." },
    { q: "Un anuncio en Instagram de un influencer debe…", o: ["ocultar que es publicidad", "identificarse como publicidad", "no mencionar la marca"], a: 1, e: "La ley exige que la publicidad sea reconocible (#publi, #ad)." },
    { q: "La investigación de mercados sirve para…", o: ["conocer a los clientes y la competencia", "fabricar más barato", "pagar menos impuestos"], a: 0, e: "Encuestas, entrevistas y datos ayudan a tomar decisiones." },
  ],
  examen: [
    { q: "Un perfume de lujo con precio muy alto usa una estrategia de…", o: ["precio de prestigio", "precio de penetración", "precio psicológico"], a: 0, e: "El precio alto transmite exclusividad." },
    { q: "Elegir vender solo online es una decisión de…", o: ["producto", "distribución", "precio"], a: 1, e: "La distribución decide dónde y cómo llega el producto al cliente." },
    { q: "¿Qué hace un consumidor responsable ante la publicidad?", o: ["Comprar todo lo anunciado", "Compararla, distinguirla de la información y pensar si lo necesita", "Ignorar siempre los precios"], a: 1, e: "El espíritu crítico protege tu dinero y tus datos." },
  ],
  feynman: ["Para qué sirve el marketing y qué es el público objetivo", "Las 4 P con un ejemplo inventado", "Tres estrategias de precio", "Qué cambia con el marketing digital y cómo protegerse"],
  mapa: mapa("MARKETING", "var(--leaf)", [
    ["Mercado", "investigar · segmentar", "var(--pen)"],
    ["4 P", "producto · precio · distrib. · promo.", "var(--red)"],
    ["Precio", "penetración · prestigio · 9,99", "var(--sun)"],
    ["Digital", "redes · datos · espíritu crítico", "var(--muted)"],
  ], 280),
  tarjetas: [
    ["Marketing mix", "Producto, precio, distribución y promoción (4 P)."],
    ["Público objetivo", "Segmento de clientes al que se dirige la empresa."],
    ["Precio de penetración", "Precio bajo al lanzar un producto para ganar clientes rápido."],
    ["Precio psicológico", "Terminar en 9 o 99 para que parezca más barato."],
    ["#publi", "Indica que un contenido en redes es publicidad pagada."],
  ],
  familias: ["Mirad juntos anuncios de televisión o redes e identificad las 4 P de un producto.", "En el supermercado, buscad productos con precios psicológicos y marcas blancas.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Marketing: investigación de mercados, segmentación, marketing mix y marketing digital; consumo responsable (RD 217/2022, Economía y Emprendimiento 4º).",
    ideas: ["Diseñar las 4 P de un producto inventado y presentarlo en un minuto.", "Encuesta real en el centro para segmentar un mercado.", "Análisis crítico de publicidad de influencers."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Mezcla de mercadotecnia, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Mezcla_de_mercadotecnia" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Segmentar un mercado y definir el público objetivo", "Diseñar acciones de comunicación y analizar publicidad engañosa"],
  bloques: [
    { tras: "Qué es el marketing", html: `<h3>El estudio de mercado</h3><p>Antes de lanzar un producto hay que conocer el <b>mercado</b>: cuántos clientes hay, qué necesitan, cuánto pagarían y qué hace la competencia. La información puede ser <b>secundaria</b> (datos que ya existen: estadísticas del INE, informes, webs) o <b>primaria</b> (la que obtiene la empresa: <mark>encuestas</mark>, entrevistas, observación, grupos de discusión). Una buena encuesta tiene preguntas claras, cortas y sin influir en la respuesta, y se hace a una <b>muestra</b> representativa de los posibles clientes.</p>` },
    { tras: "Qué es el marketing", html: `<h3>Segmentar y posicionar</h3><p>No se puede vender a todo el mundo a la vez. <mark>Segmentar</mark> es dividir el mercado en grupos con necesidades parecidas, según criterios como la edad, el lugar, los ingresos, el estilo de vida o los hábitos de compra. Después se elige el <b>público objetivo</b> (target). El <b>posicionamiento</b> es el lugar que queremos ocupar en la mente del cliente frente a la competencia: «la más barata», «la más ecológica», «la de más calidad». Se suele representar en un <b>mapa de posicionamiento</b> con dos ejes, por ejemplo, precio y calidad.</p>` },
    { tras: "El marketing mix", html: `<h3>El producto y su ciclo de vida</h3><p>Un producto no es solo el objeto: incluye la <b>marca</b>, el <b>envase</b>, el diseño, la garantía y el servicio posventa. Todo producto pasa por un <mark>ciclo de vida</mark>:</p>${tabla(["Fase", "Ventas", "Qué hace la empresa"], [["Introducción", "bajas", "dar a conocer el producto; mucha publicidad"], ["Crecimiento", "suben rápido", "ampliar la distribución; aparecen competidores"], ["Madurez", "estables y altas", "diferenciarse, bajar precios, renovar"], ["Declive", "bajan", "retirar el producto o reinventarlo"]])}`, video: { id: "Mco8vBAwOmA", titulo: "Las 4 P del marketing mix simplificadas", canal: "College & Career Ready Labs", vistas: 1683031, megusta: 0 } },
    { tras: "Estrategias de precio", html: `<h3>Distribución y comunicación</h3><p>La <b>distribución</b> lleva el producto al cliente: de forma <b>directa</b> (la empresa vende sin intermediarios, como en su tienda online) o <b>indirecta</b> (a través de mayoristas y minoristas). La <mark>comunicación</mark> o promoción incluye la <b>publicidad</b> (anuncios pagados), la <b>promoción de ventas</b> (descuentos, 2x1, muestras), las <b>relaciones públicas</b> (eventos, patrocinios, notas de prensa) y la <b>venta personal</b>. Hoy se combina todo con el marketing digital: redes sociales, buscadores, correo y colaboraciones con creadores de contenido.</p>` },
    { tras: "Marketing digital y consumo responsable", html: `<h3>Publicidad engañosa y derechos del consumidor</h3><p>La ley prohíbe la <mark>publicidad engañosa</mark> (la que da información falsa o esconde datos importantes, como el precio final) y la publicidad dirigida a menores que aproveche su inexperiencia. Los <b>influencers</b> deben indicar claramente cuándo un contenido es publicidad (#publi). Los consumidores tienen derecho a la información, a la garantía (3 años en productos nuevos comprados desde 2022), a desistir de una compra online en <b>14 días</b> y a reclamar mediante las hojas de reclamaciones o las oficinas de consumo.</p>` },
  ],
  ejemplos: [
    { enunciado: "Segmenta el mercado de unas zapatillas deportivas.", pasos: ["Por edad: niños, jóvenes, adultos, mayores.", "Por uso: running, baloncesto, moda urbana.", "Por ingresos: gama básica, media y alta.", "Elegimos un target: jóvenes de 15 a 25 años que corren por la ciudad, gama media."], resultado: "Público objetivo: jóvenes corredores urbanos con presupuesto medio." },
    { enunciado: "Un refresco lleva 40 años en el mercado con ventas estables. ¿En qué fase está y qué puede hacer?", pasos: ["Ventas altas y estables: madurez.", "Para alargarla: nuevos sabores, versión sin azúcar, envase nuevo, campañas que lo renueven."], resultado: "Madurez; debe renovarse para no entrar en declive." },
    { enunciado: "Un anuncio dice «vuelo a Roma desde 9 €» pero al pagar cuesta 79 € por tasas obligatorias. ¿Es legal?", pasos: ["El precio anunciado no incluye costes obligatorios.", "La ley exige mostrar el precio final.", "Esconde información relevante para decidir."], resultado: "Es publicidad engañosa; se puede reclamar." },
  ],
  errores: [
    "Pensar que el marketing es solo publicidad.",
    "Intentar vender a todos a la vez sin segmentar.",
    "Confundir distribución directa con indirecta.",
    "Creer que un influencer no tiene que avisar cuando cobra por anunciar algo.",
    "Pensar que las tiendas físicas deben aceptar siempre devoluciones: el derecho de 14 días es para compras a distancia; en tienda depende de su política.",
  ],
  ejercicios: [
    { q: "Diferencia información primaria y secundaria.", sol: "La primaria la obtiene la empresa para su estudio (encuestas); la secundaria ya existe (estadísticas, informes)." },
    { q: "Escribe dos preguntas para una encuesta sobre una nueva cafetería.", sol: "Por ejemplo: «¿Cuántas veces a la semana tomas algo fuera?» y «¿Cuánto pagarías por un café?»." },
    { q: "¿Qué es el público objetivo?", sol: "El grupo de clientes al que se dirige un producto." },
    { q: "Define posicionamiento.", sol: "La imagen que quiere ocupar un producto en la mente del cliente frente a la competencia." },
    { q: "Cita las fases del ciclo de vida de un producto.", sol: "Introducción, crecimiento, madurez y declive." },
    { q: "Pon un ejemplo de distribución directa e indirecta.", sol: "Directa: una marca que vende en su web. Indirecta: un fabricante que vende a un supermercado." },
    { q: "Clasifica: un 2x1, un anuncio en TV, patrocinar un equipo local.", sol: "2x1: promoción de ventas. Anuncio: publicidad. Patrocinio: relaciones públicas." },
    { q: "¿Qué es la publicidad engañosa?", sol: "La que da información falsa o esconde datos importantes y puede llevar al consumidor a error." },
    { q: "¿Cuántos días tienes para devolver una compra online?", sol: "14 días naturales desde que la recibes (derecho de desistimiento)." },
    { q: "¿Qué debe indicar un influencer en un contenido pagado?", sol: "Que es publicidad, con etiquetas claras como #publi o «colaboración pagada»." },
  ],
  quiz: [
    { q: "Una encuesta propia es información…", o: ["primaria", "secundaria", "terciaria"], a: 0, e: "La obtiene la empresa." },
    { q: "Segmentar es…", o: ["dividir el mercado en grupos", "bajar precios", "fabricar más"], a: 0, e: "Para elegir a qué grupo dirigirse." },
    { q: "En la fase de introducción, las ventas son…", o: ["bajas", "máximas", "en declive"], a: 0, e: "El producto aún no se conoce." },
    { q: "Un patrocinio es…", o: ["relaciones públicas", "distribución", "precio"], a: 0, e: "Mejora la imagen de la marca." },
    { q: "La garantía legal de un producto nuevo comprado hoy es de…", o: ["6 meses", "2 años", "3 años"], a: 2, e: "Desde 2022." },
  ],
  tarjetas: [
    ["Público objetivo", "Grupo de clientes al que se dirige un producto."],
    ["Ciclo de vida", "Introducción, crecimiento, madurez y declive."],
    ["Derecho de desistimiento", "14 días para devolver una compra a distancia."],
  ],
});
