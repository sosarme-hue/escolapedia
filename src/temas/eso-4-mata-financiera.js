// Matemáticas A 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Matemática financiera",
  minutos: 40,
  objetivos: ["Calcular el interés simple y el interés compuesto", "Entender la TAE y comparar productos de ahorro y préstamos", "Analizar el coste real de pagar a plazos, las tarjetas y los préstamos rápidos"],
  claves: ["capital", "interés simple", "interés compuesto", "TAE", "préstamo", "inflación"],
  pregunta: {
    texto: "Si ahorras 1.000 € al 5 % anual durante 30 años sin tocar los intereses, ¿cuánto tendrás: 2.500 € o más de 4.000 €?",
    respuesta: "Más de 4.000 €: 1.000 · 1,05³⁰ ≈ <mark>4.322 €</mark>. Con <b>interés compuesto</b>, los intereses también generan intereses. Funciona igual al revés: una deuda que no se paga crece muy deprisa.",
  },
  bloques: [
    {
      html: `<h3>Interés simple</h3><p>El banco paga intereses solo sobre el <b>capital inicial</b> C, cada año la misma cantidad:</p><div class="formula"><span>I = C · r · t</span></div><p>1.000 € al 4 % durante 3 años: I = 1.000 · 0,04 · 3 = <mark>120 €</mark>. Se usa en operaciones cortas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Interés simple: cada año se suma la misma cantidad, 40 euros, y el capital crece en línea recta">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/><path d="M20 150 H 246" stroke="var(--muted)" stroke-width="2"/>
        ${[0, 1, 2, 3].map((t) => `<rect x="${30 + t * 54}" y="70" width="36" height="80" fill="var(--pen)" fill-opacity=".35"/>${[...Array(t)].map((_, k) => `<rect x="${30 + t * 54}" y="${70 - (k + 1) * 14}" width="36" height="14" fill="var(--leaf)" stroke="var(--paper)"/>`).join("")}<text x="${48 + t * 54}" y="168" text-anchor="middle" font-size="12" font-weight="700" fill="var(--muted)" ${F}>año ${t}</text>`).join("")}
        <g ${F} font-size="12" font-weight="700"><text x="34" y="114" fill="var(--pen)">1.000 €</text><text x="24" y="22" fill="var(--leaf)">+40 € cada año</text></g></svg>`,
    },
    {
      html: `<h3>Interés compuesto</h3><p>Los intereses se <mark>suman al capital</mark> y al año siguiente también producen intereses:</p><div class="formula"><span>C_final = C · (1 + r)ᵗ</span></div><p>1.000 € al 4 % durante 3 años: 1.000 · 1,04³ = 1.124,86 €. Es casi lo mismo al principio, pero con muchos años la diferencia es enorme.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación: el interés simple crece en línea recta y el compuesto en curva que se separa cada vez más">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/><path d="M24 150 H 246 M24 150 V 14" stroke="var(--muted)" stroke-width="2"/>
        <path d="M24 120 L 240 75" stroke="var(--pen)" stroke-width="3"/>
        <path d="${[...Array(31)].map((_, t) => `${t ? "L" : "M"}${(24 + t * 7.2).toFixed(1)} ${(150 - 30 * 1.05 ** t).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--red)" stroke-width="3"/>
        <g ${F} font-size="12" font-weight="700"><text x="170" y="118" fill="var(--pen)">simple</text><text x="170" y="30" fill="var(--red)">compuesto</text><text x="200" y="168" fill="var(--muted)">30 años</text></g></svg>`,
    },
    {
      html: `<h3>La TAE: comparar ofertas</h3><p>Los bancos pueden pagar intereses cada mes, cada trimestre… Para comparar, se usa la <b>TAE</b> (tasa anual equivalente): el <mark>interés real en un año</mark>, incluyendo comisiones. Entre dos depósitos, conviene el de <b>TAE mayor</b>; entre dos préstamos, el de <b>TAE menor</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos ofertas de préstamo comparadas por su TAE: la de TAE menor es la más barata">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="16" y="30" width="108" height="110" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="3"/><rect x="136" y="30" width="108" height="110" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="3"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="70" y="58" font-size="13" fill="var(--ink)">Préstamo A</text><text x="70" y="92" font-size="22" fill="var(--leaf)">TAE 6 %</text><text x="70" y="124" font-size="20" fill="var(--leaf)">✓</text>
        <text x="190" y="58" font-size="13" fill="var(--ink)">Préstamo B</text><text x="190" y="92" font-size="22" fill="var(--red)">TAE 9 %</text><text x="190" y="124" font-size="11" fill="var(--muted)">«sin comisiones»</text>
        <text x="130" y="166" font-size="12" fill="var(--muted)">en préstamos, gana la TAE más baja</text></g></svg>`,
    },
    {
      html: `<h3>Préstamos y compras a plazos</h3><p>Pagar a plazos casi siempre cuesta <b>más</b>: una consola de 500 € en 12 cuotas de 47 € cuesta en total <mark>564 €</mark> (64 € de intereses). Los <b>préstamos rápidos</b> y el pago aplazado de las tarjetas pueden tener TAE superiores al 20 %. Antes de firmar, multiplica la cuota por el número de plazos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Precio al contado 500 euros frente a 12 cuotas de 47 euros que suman 564 euros">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/><path d="M20 150 H 246" stroke="var(--muted)" stroke-width="2"/>
        <rect x="40" y="${150 - 100}" width="60" height="100" rx="6" fill="var(--leaf)"/>
        ${[...Array(12)].map((_, i) => `<rect x="150" y="${150 - (i + 1) * 9.4}" width="60" height="9" fill="var(--red)" fill-opacity="${0.55 + (i % 2) * 0.3}"/>`).join("")}
        <g ${F} font-size="13" font-weight="700" text-anchor="middle"><text x="70" y="42" fill="var(--leaf)">500 €</text><text x="180" y="30" fill="var(--red)">12 × 47 = 564 €</text><text x="70" y="168" fill="var(--ink)">al contado</text><text x="180" y="168" fill="var(--ink)">a plazos</text></g></svg>`,
    },
    {
      html: `<h3>Inflación y ahorro</h3><p>La <b>inflación</b> es la subida general de los precios. Si los precios suben un 3 % al año y tu dinero está quieto, <mark>cada año compras menos</mark>. Por eso se dice que el dinero «pierde valor». Ahorrar con un interés al menos igual a la inflación mantiene tu poder de compra.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Con una inflación del 3 por ciento, 100 euros guardados compran cada vez menos: 97, 94 y 91 euros de hoy">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/><path d="M20 150 H 246" stroke="var(--muted)" stroke-width="2"/>
        ${[100, 97, 94.1, 91.3].map((v, i) => `<rect x="${32 + i * 56}" y="${150 - v}" width="40" height="${v}" rx="6" fill="var(--inf)" fill-opacity="${1 - i * 0.18}"/><text x="${52 + i * 56}" y="${144 - v}" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${Math.round(v)} €</text><text x="${52 + i * 56}" y="168" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)" ${F}>año ${i}</text>`).join("")}
        <text x="140" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)" ${F}>poder de compra con 3 % de inflación</text></svg>`,
    },
  ],
  figura: {
    titulo: "Fórmulas para tus finanzas",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Resumen: interés simple, interés compuesto, coste total a plazos y regla del 72">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Interés simple", "I = C · r · t", "var(--pen)"], ["Interés compuesto", "C_final = C · (1 + r)ᵗ", "var(--red)"], ["Coste a plazos", "total = cuota · número de cuotas", "var(--leaf)"], ["Regla del 72", "años para duplicar ≈ 72 / interés %", "var(--inf)"]].map(([n, f, c], i) => `<rect x="20" y="${16 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${43 + i * 50}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="260" y="${43 + i * 50}" font-size="16" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "lEGk3ILeLuQ", titulo: "¿Qué es el interés compuesto?", canal: "Matemáticas profe Alex", vistas: 874469, megusta: 22005, busqueda: "interés compuesto explicación" },
  quiz: [
    { q: "Interés simple de 2.000 € al 3 % durante 2 años:", o: ["120 €", "60 €", "1.200 €"], a: 0, e: "2.000 · 0,03 · 2 = 120 €." },
    { q: "1.000 € al 10 % compuesto durante 2 años se convierten en…", o: ["1.200 €", "1.210 €", "1.100 €"], a: 1, e: "1.000 · 1,1² = 1.210 €." },
    { q: "Para un préstamo conviene la TAE…", o: ["más alta", "más baja", "da igual"], a: 1, e: "Una TAE menor significa pagar menos intereses." },
    { q: "Un móvil cuesta 300 € o 10 cuotas de 33 €. ¿Cuánto pagas de más a plazos?", o: ["30 €", "33 €", "3 €"], a: 0, e: "330 − 300 = 30 €." },
    { q: "Con inflación, el dinero guardado en casa…", o: ["gana valor", "pierde poder de compra", "no cambia"], a: 1, e: "Los precios suben y compras menos con lo mismo." },
  ],
  examen: [
    { q: "Según la regla del 72, al 6 % anual el dinero se duplica en unos…", o: ["12 años", "6 años", "72 años"], a: 0, e: "72 / 6 = 12." },
    { q: "¿En qué tipo de interés los intereses generan intereses?", o: ["Simple", "Compuesto", "Ninguno"], a: 1, e: "Se acumulan al capital." },
    { q: "Un depósito da 2 % TAE y la inflación es del 3 %. Tu dinero en poder de compra…", o: ["crece", "pierde", "se mantiene"], a: 1, e: "Los precios suben más que tus intereses." },
  ],
  feynman: ["Qué diferencia hay entre interés simple y compuesto", "Para qué sirve la TAE", "Cómo calcular cuánto cuesta de verdad comprar a plazos", "Qué es la inflación y cómo afecta a tus ahorros"],
  mapa: mapa("MATEMÁTICA FINANCIERA", "var(--bac)", [
    ["Interés simple", "I = C · r · t", "var(--pen)"],
    ["Interés compuesto", "C · (1 + r)ᵗ", "var(--red)"],
    ["TAE", "comparar ofertas reales", "var(--leaf)"],
    ["Consumo responsable", "plazos · inflación", "var(--inf)"],
  ], 250),
  tarjetas: [
    ["Fórmula del interés simple", "I = C · r · t"],
    ["Fórmula del interés compuesto", "C_final = C · (1 + r)ᵗ"],
    ["¿Qué es la TAE?", "El coste o rendimiento real en un año, con comisiones incluidas."],
    ["Regla del 72", "Años para duplicar ≈ 72 / tipo de interés."],
    ["Inflación", "Subida general de precios; reduce lo que puedes comprar con tu dinero."],
  ],
  familias: ["Revisad juntos una oferta de financiación real y calculad el coste total.", "Abrid una hucha o cuenta de ahorro y anotad cada mes cómo crece.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Sentido numérico y socioafectivo: interés simple y compuesto, TAE, inflación y toma de decisiones financieras responsables (RD 217/2022, Matemáticas A 4º).",
    ideas: ["Simulador en hoja de cálculo de ahorro mensual con interés compuesto.", "Analizar letra pequeña de anuncios de préstamos rápidos.", "Recursos de educación financiera del Banco de España y la CNMV (Finanzas para todos)."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Finanzas para todos (Banco de España y CNMV)", url: "https://www.finanzasparatodos.es/" },
  ],
  revisado: "2026-11-12",
};
