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

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar la ventaja comparativa y la balanza comercial", "Relacionar economía circular, huella ecológica y consumo responsable"],
  bloques: [
    { tras: "Por qué comercian los países", html: `<h3>La ventaja comparativa</h3><p>David Ricardo explicó en el siglo XIX que a un país le conviene especializarse en lo que produce con <mark>menor coste de oportunidad</mark>, aunque otro país lo haga todo mejor, y comprar el resto. Así ambos consiguen más. España, por ejemplo, exporta sobre todo <b>automóviles</b>, alimentos (aceite, frutas, hortalizas, vino), productos químicos y farmacéuticos, y <b>servicios turísticos</b>; importa petróleo, gas, tecnología y bienes de equipo. Su principal socio comercial es la <b>Unión Europea</b>: Francia, Alemania, Italia y Portugal.</p>` },
    { tras: "Por qué comercian los países", html: `<h3>La balanza comercial y de pagos</h3><p>La <mark>balanza comercial</mark> compara exportaciones e importaciones de bienes: si se exporta más de lo que se importa, hay <b>superávit</b>; si ocurre lo contrario, <b>déficit</b>. España suele tener déficit comercial, sobre todo por la energía que importa, pero lo compensa con el <b>superávit de servicios</b> gracias al turismo. La <b>balanza de pagos</b> recoge todos los intercambios de un país con el exterior: bienes, servicios, rentas y movimientos de capital.</p>` },
    { tras: "Libre comercio o proteccionismo", html: `<h3>Las organizaciones del comercio mundial</h3>${tabla(["Organización", "Qué hace"], [["OMC (Organización Mundial del Comercio)", "fija normas del comercio entre países y resuelve disputas"], ["FMI (Fondo Monetario Internacional)", "vigila la estabilidad financiera y presta a países en crisis"], ["Banco Mundial", "financia proyectos de desarrollo en países pobres"], ["Unión Europea", "mercado único y política comercial común con el resto del mundo"]])}<p>Hay también otros bloques comerciales, como el <b>Mercosur</b> en América del Sur o el T-MEC en América del Norte.</p>` },
    { tras: "Economía y sostenibilidad", html: `<h3>La economía circular</h3><p>La economía tradicional es <b>lineal</b>: extraer, fabricar, usar y tirar. La <mark>economía circular</mark> intenta cerrar el ciclo para que los materiales se aprovechen el mayor tiempo posible. Se resume en las reglas de las «erres»: <b>reducir</b> el consumo, <b>reutilizar</b>, <b>reparar</b>, <b>reciclar</b> y <b>recuperar</b>. Las empresas pueden diseñar productos que duren más y se reparen con facilidad (ecodiseño), y la UE ha aprobado el <b>derecho a reparar</b> y limita los plásticos de un solo uso.</p>`, video: { id: "MCKH5xk8X-g", titulo: "Los Objetivos de Desarrollo Sostenible: qué son y cómo alcanzarlos", canal: "UNESCO en español", vistas: 6359378, megusta: 0 } },
    { tras: "Economía y sostenibilidad", html: `<h3>Huella ecológica y consumo responsable</h3><p>La <mark>huella ecológica</mark> mide la superficie de tierra y mar necesaria para producir lo que consumimos y absorber nuestros residuos. Si toda la humanidad consumiera como un español medio, harían falta más de dos planetas. El <b>consumo responsable</b> consiste en preguntarse si de verdad necesitamos algo, elegir productos duraderos, locales y de temporada, reducir el desperdicio de comida, preferir el transporte público o la bici y apoyar el <b>comercio justo</b>, que paga precios dignos a los productores de países pobres.</p>` },
  ],
  ejemplos: [
    { enunciado: "En un día, Portugal produce 10 kg de queso o 5 l de vino; España, 6 kg de queso o 6 l de vino. ¿En qué debe especializarse cada uno?", pasos: ["Coste de oportunidad de 1 l de vino en Portugal: 10 / 5 = 2 kg de queso.", "En España: 6 / 6 = 1 kg de queso.", "España produce vino con menor coste de oportunidad.", "Portugal produce queso con menor coste de oportunidad (0,5 l de vino por kg frente a 1 l en España)."], resultado: "España se especializa en vino y Portugal en queso, y ambos ganan intercambiando." },
    { enunciado: "Un país exporta bienes por 380.000 millones de € e importa por 420.000 millones. Calcula su saldo comercial.", pasos: ["Saldo = exportaciones − importaciones.", "380.000 − 420.000 = −40.000 millones."], resultado: "Déficit comercial de 40.000 millones de €." },
    { enunciado: "Propón tres acciones de economía circular para un instituto.", pasos: ["Reducir: imprimir menos y usar documentos digitales.", "Reutilizar: banco de libros de texto usados.", "Reciclar: contenedores separados en cada aula."], resultado: "Reducir, reutilizar y reciclar aplicados al día a día del centro." },
  ],
  errores: [
    "Pensar que solo comercia quien lo produce todo mejor: importa el coste de oportunidad.",
    "Confundir balanza comercial (bienes) con balanza de pagos (todo).",
    "Creer que el déficit comercial siempre es malo: puede compensarse con servicios o reflejar inversión.",
    "Pensar que reciclar es lo más importante: antes van reducir y reutilizar.",
    "Confundir el FMI con el Banco Mundial.",
  ],
  ejercicios: [
    { q: "¿Qué es la ventaja comparativa?", sol: "Producir un bien con menor coste de oportunidad que otro país." },
    { q: "Cita tres productos que exporta España.", sol: "Automóviles, aceite de oliva y frutas (también medicamentos o servicios turísticos)." },
    { q: "¿Por qué España suele tener déficit comercial de bienes?", sol: "Principalmente por las importaciones de petróleo y gas." },
    { q: "¿Qué compensa ese déficit?", sol: "El superávit en servicios, sobre todo el turismo." },
    { q: "¿Qué es un arancel?", sol: "Un impuesto sobre los productos importados." },
    { q: "¿Qué hace la OMC?", sol: "Establece normas del comercio internacional y resuelve conflictos comerciales." },
    { q: "Si el euro se aprecia frente al dólar, ¿qué pasa con las exportaciones europeas a EE. UU.?", sol: "Se encarecen para los compradores estadounidenses y tienden a bajar." },
    { q: "Explica la diferencia entre economía lineal y circular.", sol: "La lineal extrae, usa y tira; la circular mantiene los materiales en uso reparando, reutilizando y reciclando." },
    { q: "¿Qué mide la huella ecológica?", sol: "La superficie necesaria para producir lo que consumimos y absorber nuestros residuos." },
    { q: "Cita cuatro hábitos de consumo responsable.", sol: "Comprar solo lo necesario, elegir productos duraderos y locales, no desperdiciar comida y usar transporte sostenible." },
  ],
  quiz: [
    { q: "La teoría de la ventaja comparativa es de…", o: ["David Ricardo", "Karl Marx", "Keynes"], a: 0, e: "Economista británico del siglo XIX." },
    { q: "Si las importaciones superan a las exportaciones hay…", o: ["superávit", "déficit", "equilibrio"], a: 1, e: "Saldo negativo." },
    { q: "El principal socio comercial de España es…", o: ["la UE", "China", "EE. UU."], a: 0, e: "Sobre todo Francia y Alemania." },
    { q: "El FMI…", o: ["presta a países en crisis", "organiza los Juegos Olímpicos", "fija el IVA"], a: 0, e: "Y vigila la estabilidad financiera." },
    { q: "La primera «erre» de la economía circular es…", o: ["reciclar", "reducir", "recuperar"], a: 1, e: "Lo mejor es no generar el residuo." },
  ],
  tarjetas: [
    ["Ventaja comparativa", "Especializarse en lo que se produce con menor coste de oportunidad."],
    ["Balanza comercial", "Exportaciones menos importaciones de bienes."],
    ["Economía circular", "Modelo que mantiene los materiales en uso el mayor tiempo posible."],
  ],
});
