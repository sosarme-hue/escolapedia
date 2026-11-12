// Economía y Emprendimiento 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { dos, filas, flujo, rueda, figCols } = require("./_hum");

module.exports = {
  materia: "Economía y Emprendimiento",
  curso: "4-eso",
  titulo: "Economía internacional y sostenibilidad",
  minutos: 35,
  objetivos: ["Explicar por qué comercian los países y qué son importaciones y exportaciones", "Valorar el libre comercio y el proteccionismo", "Relacionar la economía con el desarrollo sostenible y la economía circular"],
  claves: ["comercio internacional", "exportación", "importación", "arancel", "economía circular", "desarrollo sostenible"],
  pregunta: {
    texto: "España exporta aceite de oliva y coches a medio mundo, pero importa casi todo el petróleo que consume. ¿Por qué no producimos todo nosotros mismos?",
    respuesta: "Porque cada país es más eficiente produciendo unas cosas que otras. <mark>Especializarse</mark> y comerciar permite que todos tengan más bienes. Pero el comercio también plantea retos: competencia, dependencia y su impacto en el <b>medio ambiente</b>.",
  },
  bloques: [
    {
      html: `<h3>Por qué comercian los países</h3><p>Los países tienen recursos, climas, tecnología y trabajadores distintos. Si cada uno se <mark>especializa</mark> en lo que hace mejor o más barato y compra el resto, todos ganan (la teoría de la <b>ventaja comparativa</b> de David Ricardo). Las ventas al exterior son <b>exportaciones</b> y las compras, <b>importaciones</b>. La diferencia entre ambas es la <b>balanza comercial</b>.</p>`,
      svg: dos("Exportaciones e importaciones de España", ["España vende", ["coches", "alimentos", "aceite y vino", "turismo", "medicamentos"], "var(--leaf)"], ["España compra", ["petróleo y gas", "tecnología", "móviles", "maquinaria", "ropa"], "var(--red)"]),
    },
    {
      html: `<h3>Libre comercio o proteccionismo</h3><p>El <mark>libre comercio</mark> elimina barreras: más competencia, productos más baratos y variedad. El <b>proteccionismo</b> pone <b>aranceles</b> (impuestos a las importaciones), cuotas o normas para proteger a los productores nacionales, aunque encarece los productos. La <b>Organización Mundial del Comercio</b> (OMC) regula el comercio mundial, y la Unión Europea es un <b>mercado único</b> sin aranceles internos.</p>`,
      svg: filas("Barreras al comercio", [["Arancel", "impuesto a lo importado", "var(--red)"], ["Cuota", "límite de cantidad", "var(--sun)"], ["Normas", "requisitos técnicos", "var(--muted)"], ["Subsidio", "ayuda al productor local", "var(--pen)"]]),
    },
    {
      html: `<h3>El tipo de cambio</h3><p>Para comerciar entre países con monedas distintas hay que cambiar dinero. El <mark>tipo de cambio</mark> indica cuántas unidades de una moneda se necesitan para comprar otra (por ejemplo, 1 euro = 1,10 dólares). Si el euro se <b>aprecia</b> (vale más), los productos europeos se encarecen fuera y se exporta menos; si se <b>deprecia</b>, ocurre lo contrario y viajar al extranjero sale más caro.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Balanza de cambio: un euro equivale a 1,10 dólares">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="70" cy="86" r="44" fill="var(--pen)"/><text x="70" y="100" text-anchor="middle" font-size="40" font-weight="700" fill="#fff" ${D}>€</text>
        <circle cx="190" cy="86" r="44" fill="var(--leaf)"/><text x="190" y="100" text-anchor="middle" font-size="40" font-weight="700" fill="#fff" ${D}>$</text>
        <text x="130" y="94" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink)" ${D}>=</text>
        <text x="70" y="156" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${F}>1 euro</text>
        <text x="190" y="156" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${F}>1,10 dólares</text>
      </svg>`,
    },
    {
      html: `<h3>Economía y sostenibilidad</h3><p>El modelo lineal «extraer, fabricar, usar y tirar» agota recursos y contamina. El <mark>desarrollo sostenible</mark> busca satisfacer las necesidades actuales sin comprometer las de las generaciones futuras. La <b>economía circular</b> propone reducir, reutilizar, reparar y reciclar para que los materiales vuelvan al ciclo. También crecen el <b>comercio justo</b>, las energías renovables y el consumo de proximidad.</p>`,
      svg: flujo("Ciclo de la economía circular", ["diseñar", "fabricar", "usar", "reparar|reutilizar", "reciclar", "materia|nueva"], "var(--leaf)"),
    },
  ],
  figura: {
    titulo: "Economía lineal frente a circular",
    svg: figCols("Comparación entre economía lineal y circular con ejemplos", [
      ["Lineal", ["extraer", "fabricar", "usar", "tirar", "→ residuos"], "var(--red)"],
      ["Circular", ["diseño duradero", "reparar", "reutilizar", "reciclar", "→ recursos"], "var(--leaf)"],
      ["Tú puedes", ["comprar menos", "y mejor", "segunda mano", "separar residuos", "comercio justo"], "var(--pen)"],
    ]),
  },
  video: { id: "hMGGfDjAbHw", titulo: "¿Cómo funciona el comercio internacional?", canal: "INCEA Comercio y Aduanas", vistas: 469019, megusta: 4580, busqueda: "comercio internacional explicación" },
  quiz: [
    { q: "Cuando España vende coches a Francia, es una…", o: ["importación", "exportación", "subvención"], a: 1, e: "Las ventas al exterior son exportaciones." },
    { q: "Un arancel es…", o: ["un impuesto sobre los productos importados", "una ayuda a los exportadores", "una moneda"], a: 0, e: "Encarece los productos extranjeros para proteger a los nacionales." },
    { q: "¿Qué organismo regula el comercio mundial?", o: ["La OMS", "La OMC", "La OTAN"], a: 1, e: "La Organización Mundial del Comercio." },
    { q: "La economía circular propone…", o: ["usar y tirar", "reducir, reutilizar, reparar y reciclar", "producir más rápido"], a: 1, e: "Los materiales vuelven al ciclo en lugar de convertirse en residuos." },
    { q: "Si el euro se aprecia frente al dólar…", o: ["los productos europeos se abaratan en EE. UU.", "los productos europeos se encarecen en EE. UU.", "no cambia nada"], a: 1, e: "Los estadounidenses necesitan más dólares para comprar lo mismo." },
  ],
  examen: [
    { q: "La ventaja comparativa dice que conviene…", o: ["producirlo todo en casa", "especializarse en lo que se produce con menor coste relativo", "no comerciar"], a: 1, e: "Fue formulada por David Ricardo en el siglo XIX." },
    { q: "Si un país importa más de lo que exporta, su balanza comercial es…", o: ["positiva (superávit)", "negativa (déficit)", "neutra"], a: 1, e: "Compra más al exterior de lo que vende." },
    { q: "El desarrollo sostenible busca…", o: ["crecer a cualquier precio", "cubrir las necesidades actuales sin comprometer las de las futuras generaciones", "frenar todo el comercio"], a: 1, e: "Es la definición del informe Brundtland de 1987." },
  ],
  feynman: ["Por qué los países se especializan y comercian", "Ventajas del libre comercio y motivos del proteccionismo", "Qué ocurre cuando el euro se aprecia", "Qué es la economía circular con un ejemplo"],
  mapa: mapa("ECONOMÍA MUNDIAL", "var(--leaf)", [
    ["Comercio", "exportar · importar · Ricardo", "var(--pen)"],
    ["Barreras", "aranceles · cuotas · OMC", "var(--red)"],
    ["Cambio", "€ / $ · apreciar · depreciar", "var(--sun)"],
    ["Sostenibilidad", "circular · comercio justo", "var(--leaf)"],
  ], 270),
  tarjetas: [
    ["Exportación", "Venta de bienes o servicios a otro país."],
    ["Arancel", "Impuesto sobre los productos importados."],
    ["Tipo de cambio", "Precio de una moneda expresado en otra."],
    ["Economía circular", "Modelo que reduce, reutiliza, repara y recicla."],
    ["Desarrollo sostenible", "Satisfacer las necesidades actuales sin comprometer las futuras."],
  ],
  familias: ["Buscad en casa productos importados y productos españoles exportados (aceite, vino, ropa).", "Elegid un objeto roto y valorad juntos si se puede reparar antes de tirarlo.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Economía internacional, globalización, sostenibilidad y economía circular; consumo responsable (RD 217/2022, Economía y Emprendimiento 4º).",
    ideas: ["Analizar la balanza comercial de España con datos del ICEX o el INE.", "Rastrear el origen de los ingredientes de un desayuno.", "Proyecto de economía circular en el centro: mercadillo de intercambio."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Comercio internacional, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Comercio_internacional" },
  ],
  revisado: "2026-11-12",
};
