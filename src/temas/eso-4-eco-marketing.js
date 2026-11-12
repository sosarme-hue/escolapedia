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
