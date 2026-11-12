// Valores Cívicos y Éticos 2º ESO: el medio ambiente y la sostenibilidad. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Valores Cívicos y Éticos",
  curso: C,
  titulo: "El medio ambiente y la sostenibilidad",
  minutos: 45,
  objetivos: ["Explicar qué es el desarrollo sostenible", "Identificar los principales problemas ambientales y sus causas", "Conocer los Objetivos de Desarrollo Sostenible de la Agenda 2030", "Asumir responsabilidades personales y colectivas con el planeta"],
  claves: ["medio ambiente", "sostenibilidad", "desarrollo sostenible", "cambio climático", "huella ecológica", "ODS", "consumo responsable"],
  pregunta: {
    texto: "Si toda la humanidad consumiera como la media de los españoles, ¿cuántos planetas Tierra necesitaríamos?",
    respuesta: "Más de <b>dos</b>, según los cálculos de la <b>huella ecológica</b> de la Global Footprint Network. Solo tenemos uno. Por eso necesitamos un <mark>desarrollo sostenible</mark>: vivir bien hoy sin quitar a las generaciones futuras la posibilidad de vivir bien mañana.",
  },
  bloques: [
    {
      html: `<h3>Una responsabilidad ética</h3><p>El <b>medio ambiente</b> es el conjunto de elementos naturales (aire, agua, suelo, seres vivos) y sociales que rodean y hacen posible la vida. Cuidarlo no es solo una cuestión científica: es una cuestión <b>ética</b>, porque nuestras acciones afectan a:</p><ul><li>Otras <b>personas</b> de hoy, sobre todo las más pobres, que sufren más los desastres ambientales.</li><li>Las <b>generaciones futuras</b>, que heredarán el planeta.</li><li>Los demás <b>seres vivos</b>, con los que compartimos la Tierra.</li></ul><p>El filósofo <b>Hans Jonas</b> propuso un principio de responsabilidad: actuar de modo que nuestros actos sean compatibles con la permanencia de una vida humana auténtica en la Tierra.</p>`,
    },
    {
      html: `<h3>El desarrollo sostenible</h3><p>El <b>Informe Brundtland</b> (ONU, 1987) lo definió como el desarrollo que satisface las necesidades del presente <mark>sin comprometer la capacidad de las generaciones futuras</mark> para satisfacer las suyas.</p><p>Tiene tres dimensiones que deben equilibrarse:</p><ul><li><b>Ambiental</b>: proteger los ecosistemas y los recursos.</li><li><b>Social</b>: igualdad, salud, educación para todos.</li><li><b>Económica</b>: crear riqueza y empleo de forma duradera.</li></ul>`,
      svg: svg("Tres círculos que se cruzan: ambiental, social y económico; en el centro, la sostenibilidad", `<circle cx="100" cy="68" r="46" fill="var(--leaf)" fill-opacity=".18" stroke="var(--leaf)" stroke-width="2"/><circle cx="160" cy="68" r="46" fill="var(--pen)" fill-opacity=".14" stroke="var(--pen)" stroke-width="2"/><circle cx="130" cy="116" r="46" fill="var(--sun)" fill-opacity=".18" stroke="var(--sun)" stroke-width="2"/>
        ${t(84, 64, "ambiental", { c: "var(--leaf)", s: 11 })}${t(178, 64, "social", { c: "var(--pen)", s: 11 })}${t(130, 148, "económica", { c: "var(--sun)", s: 11 })}${t(130, 92, "sostenible", { c: "var(--ink)", s: 10 })}`),
      video: { id: "MCKH5xk8X-g", titulo: "Los Objetivos de Desarrollo Sostenible: qué son y cómo alcanzarlos", canal: "UNESCO en español", vistas: 6359591 },
    },
    {
      html: `<h3>Los grandes problemas ambientales</h3>${tabla(["Problema", "Causa principal", "Consecuencia"], [["Cambio climático", "gases de efecto invernadero (quema de carbón, petróleo y gas)", "subida de temperaturas, sequías, olas de calor, subida del mar"], ["Pérdida de biodiversidad", "destrucción de hábitats, contaminación, especies invasoras", "extinción de especies"], ["Contaminación", "residuos, plásticos, humos, vertidos", "daños a la salud y a los ecosistemas"], ["Agotamiento de recursos", "consumo excesivo de agua, suelo, minerales", "escasez, conflictos"], ["Deforestación", "tala para agricultura, ganadería y madera", "erosión, menos absorción de CO₂"]])}`,
    },
    {
      html: `<h3>El cambio climático</h3><p>Algunos gases, como el <b>dióxido de carbono</b> (CO₂) y el metano, atrapan el calor en la atmósfera: es el <b>efecto invernadero</b>. Es natural y necesario, pero desde la Revolución Industrial lo hemos intensificado al quemar combustibles fósiles. La temperatura media del planeta ya ha subido algo más de <b>1 °C</b> respecto a la época preindustrial.</p><p>En el <b>Acuerdo de París</b> (2015) casi todos los países se comprometieron a limitar el calentamiento muy por debajo de 2 °C e intentar no superar 1,5 °C. España sufre especialmente sus efectos: sequías, incendios y olas de calor más intensas.</p>`,
      svg: svg("Efecto invernadero: el sol calienta la Tierra y los gases de la atmósfera retienen parte del calor", `<circle cx="34" cy="34" r="18" fill="var(--sun)"/><path d="M12 140 Q 130 108 248 140 V 170 H 12 Z" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)"/><path d="M12 64 Q 130 40 248 64" fill="none" stroke="var(--inf)" stroke-width="6" stroke-opacity=".5"/>
        <path d="M52 46 L 110 120" stroke="var(--sun)" stroke-width="2.5"/><path d="M120 118 L 150 66" stroke="var(--red)" stroke-width="2.5"/><path d="M150 66 L 176 108" stroke="var(--red)" stroke-width="2.5" stroke-dasharray="4 3"/><path d="M190 116 L 214 70 L 230 30" stroke="var(--red)" stroke-width="1.5" opacity=".6"/>
        ${t(130, 30, "gases (CO₂)", { c: "var(--inf)", s: 11 })}${t(130, 160, "Tierra", { c: "var(--leaf)", s: 11 })}${t(176, 124, "calor retenido", { c: "var(--red)", s: 10 })}`),
      video: { id: "miEJI0XQiN4", titulo: "El cambio climático explicado", canal: "El Robot de Platón", vistas: 3045780 },
    },
    {
      html: `<h3>La Agenda 2030 y los ODS</h3><p>En 2015 la ONU aprobó la <b>Agenda 2030</b>, con <b>17 Objetivos de Desarrollo Sostenible</b> (ODS). Combinan lo ambiental con lo social. Algunos:</p><ul><li>ODS 1: fin de la pobreza. ODS 2: hambre cero.</li><li>ODS 4: educación de calidad. ODS 5: igualdad de género.</li><li>ODS 6: agua limpia y saneamiento. ODS 7: energía asequible y no contaminante.</li><li>ODS 12: producción y consumo responsables.</li><li>ODS 13: acción por el clima.</li><li>ODS 14 y 15: vida submarina y vida de ecosistemas terrestres.</li></ul><p>Los ODS muestran que <mark>no hay planeta sano sin justicia social</mark>, ni justicia social sin planeta sano.</p>`,
    },
    {
      html: `<h3>La huella ecológica</h3><p>La <b>huella ecológica</b> mide la superficie de tierra y mar necesaria para producir lo que consume una persona y absorber sus residuos. Es mucho mayor en los países ricos que en los pobres: es una cuestión de <b>justicia</b>.</p><p>Lo que más aumenta nuestra huella:</p><ul><li>El <b>transporte</b> en coche y avión.</li><li>La <b>energía</b> de casa procedente de combustibles fósiles.</li><li>La <b>alimentación</b>: mucha carne, alimentos de lejos, desperdicio.</li><li>Comprar <b>ropa y aparatos</b> que se usan poco y se tiran pronto.</li></ul>`,
    },
    {
      html: `<h3>Las 7 R del consumo responsable</h3>`,
      svg: svg("Siete erres del consumo responsable: repensar, rechazar, reducir, reutilizar, reparar, reciclar y redistribuir", `${[["Repensar", "¿lo necesito?"], ["Rechazar", "usar y tirar"], ["Reducir", "consumir menos"], ["Reutilizar", "dar otro uso"], ["Reparar", "antes que tirar"], ["Reciclar", "separar residuos"], ["Redistribuir", "donar, compartir"]].map(([a, b], i) => { const y = 14 + i * 23; return `<rect x="20" y="${y}" width="220" height="20" rx="5" fill="var(--leaf)" fill-opacity="${0.08 + i * 0.03}" stroke="var(--leaf)"/>${t(30, y + 14, a, { c: "var(--leaf)", s: 11, a: "start" })}${t(230, y + 14, b, { c: "var(--muted)", s: 10, a: "end" })}`; }).join("")}`),
    },
    {
      html: `<h3>Qué puedes hacer tú</h3>${tabla(["Ámbito", "Acciones"], [["Movilidad", "ir andando, en bici o en transporte público"], ["Energía", "apagar luces y aparatos, no abusar de calefacción y aire"], ["Agua", "duchas cortas, cerrar el grifo"], ["Alimentación", "productos de temporada y cercanos, no desperdiciar comida"], ["Consumo", "comprar menos y mejor, segunda mano, reparar"], ["Participación", "proyectos de centro, campañas, voluntariado ambiental"]])}<p>Las acciones individuales importan, pero también hacen falta <b>decisiones colectivas</b>: leyes, energías renovables, transporte público. Como ciudadanos podemos exigirlas.</p>`,
    },
  ],
  figura: {
    titulo: "El medio ambiente y la sostenibilidad",
    svg: filas("Resumen: ética ambiental, desarrollo sostenible, problemas, cambio climático, ODS y consumo responsable", [["Ética", "responsabilidad con futuras generaciones", "var(--ink)"], ["Sostenible", "ambiental · social · económico", "var(--leaf)"], ["Problemas", "clima · biodiversidad · contaminación", "var(--red)"], ["Clima", "efecto invernadero · Acuerdo de París", "var(--sun)"], ["Agenda 2030", "17 ODS", "var(--pen)"], ["Consumo", "7 R · huella ecológica", "var(--inf)"]], 200),
  },
  video: { id: "MCKH5xk8X-g", titulo: "Los Objetivos de Desarrollo Sostenible: qué son y cómo alcanzarlos", canal: "UNESCO en español", vistas: 6359591, megusta: 0, busqueda: "objetivos de desarrollo sostenible" },
  quiz: mezcla([
    { q: "El desarrollo sostenible satisface las necesidades del presente sin comprometer…", o: ["las de las generaciones futuras", "el dinero", "a los gobiernos"], a: 0, e: "Informe Brundtland, 1987." },
    { q: "Las tres dimensiones de la sostenibilidad son…", o: ["ambiental, social y económica", "aire, agua y suelo", "pasado, presente y futuro"], a: 0, e: "Deben equilibrarse." },
    { q: "El principal gas causante del cambio climático es el…", o: ["dióxido de carbono", "oxígeno", "nitrógeno"], a: 0, e: "Quema de combustibles fósiles." },
    { q: "El Acuerdo de París sobre el clima es de…", o: ["2015", "1987", "1948"], a: 0, e: "Limitar el calentamiento." },
    { q: "¿Cuántos ODS hay en la Agenda 2030?", o: ["17", "10", "30"], a: 0, e: "Aprobados en 2015." },
    { q: "El ODS 13 trata de…", o: ["la acción por el clima", "el hambre", "la educación"], a: 0, e: "Clima." },
    { q: "La huella ecológica mide…", o: ["la superficie necesaria para sostener nuestro consumo", "el número de pasos", "el peso"], a: 0, e: "Tierra y mar." },
    { q: "La primera R del consumo responsable es…", o: ["repensar", "reciclar", "reparar"], a: 0, e: "¿Lo necesito?" },
    { q: "Arreglar una bici en vez de comprar otra es…", o: ["reparar", "reciclar", "rechazar"], a: 0, e: "Alarga la vida útil." },
    { q: "La pérdida de biodiversidad se debe sobre todo a…", o: ["la destrucción de hábitats", "la lluvia", "la Luna"], a: 0, e: "Y contaminación." },
  ]),
  examen: mezcla([
    { q: "El filósofo del «principio de responsabilidad» hacia el futuro fue…", o: ["Hans Jonas", "Montesquieu", "Kant"], a: 0, e: "Ética ambiental." },
    { q: "La temperatura media del planeta ha subido respecto a la era preindustrial algo más de…", o: ["1 °C", "10 °C", "0,01 °C"], a: 0, e: "Y sigue subiendo." },
    { q: "Que la huella ecológica de los países ricos sea mucho mayor es un problema de…", o: ["justicia", "geografía", "matemáticas"], a: 0, e: "Reparto desigual." },
  ]),
  feynman: ["Por qué cuidar el medio ambiente es una cuestión ética", "Qué es el desarrollo sostenible", "Causas y consecuencias del cambio climático", "Qué son los ODS", "Las 7 R del consumo responsable"],
  mapa: mapa("SOSTENIBILIDAD", "var(--eso)", [
    ["Problemas", "clima · biodiversidad", "var(--red)"],
    ["Sostenible", "3 dimensiones", "var(--leaf)"],
    ["Agenda 2030", "17 ODS", "var(--pen)"],
    ["Acción", "7 R · participar", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Medio ambiente", "Elementos naturales y sociales que hacen posible la vida."],
    ["Desarrollo sostenible", "Satisfacer el presente sin comprometer el futuro."],
    ["Efecto invernadero", "Gases que retienen calor en la atmósfera."],
    ["Cambio climático", "Calentamiento global causado por la actividad humana."],
    ["Acuerdo de París", "Compromiso de 2015 para limitar el calentamiento."],
    ["ODS", "17 Objetivos de Desarrollo Sostenible (Agenda 2030)."],
    ["Huella ecológica", "Superficie necesaria para sostener nuestro consumo."],
    ["7 R", "Repensar, rechazar, reducir, reutilizar, reparar, reciclar, redistribuir."],
  ],
  familias: ["Calculad juntos la huella ecológica familiar con una calculadora en línea.", "Elegid una «R» para practicar en casa durante un mes.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Sostenibilidad y ética ambiental: la interdependencia entre ser humano y naturaleza; los problemas ecosociales; el desarrollo sostenible y la Agenda 2030; hábitos de consumo responsable (RD 217/2022, Educación en Valores Cívicos y Éticos, bloque C).",
    ideas: ["Auditoría ambiental del aula (luz, papel, residuos).", "Proyecto ligado a un ODS con presentación final.", "Mercadillo de intercambio de segunda mano."],
  },
  fuentes: [RD, { t: "ONU: Objetivos de Desarrollo Sostenible", url: "https://www.un.org/sustainabledevelopment/es/" }, { t: "Ministerio para la Transición Ecológica", url: "https://www.miteco.gob.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Una empresa abre una fábrica que da empleo a 500 personas pero vierte residuos al río. ¿Es sostenible?", pasos: ["Dimensión económica: crea empleo (positivo).", "Dimensión ambiental: contamina (negativo).", "Dimensión social: daña la salud de quien usa el río."], resultado: "No es sostenible: debe depurar sus vertidos." },
    { enunciado: "Relaciona cada acción con su R: donar ropa, llevar bolsa de tela, coser un pantalón roto.", pasos: ["Donar: redistribuir.", "Bolsa de tela: rechazar el plástico de usar y tirar (o reutilizar).", "Coser: reparar."], resultado: "Redistribuir, rechazar/reutilizar y reparar." },
    { enunciado: "¿Qué ODS se relacionan con instalar placas solares en el instituto?", pasos: ["Energía limpia: ODS 7.", "Menos emisiones: ODS 13."], resultado: "ODS 7 y ODS 13." },
  ],
  errores: [
    "Pensar que el cambio climático es un problema solo del futuro.",
    "Confundir el efecto invernadero natural con su intensificación por el ser humano.",
    "Creer que reciclar es lo más importante (antes van reducir y reutilizar).",
    "Pensar que lo que hace una sola persona no importa.",
    "Olvidar la dimensión social y económica de la sostenibilidad.",
  ],
  ejercicios: [
    { q: "¿Por qué cuidar el medio ambiente es una cuestión ética?", sol: "Porque afecta a otras personas, a las generaciones futuras y a otros seres vivos." },
    { q: "Define desarrollo sostenible y di de dónde procede la definición.", sol: "Satisfacer el presente sin comprometer el futuro; Informe Brundtland (1987)." },
    { q: "Escribe las tres dimensiones de la sostenibilidad.", sol: "Ambiental, social y económica." },
    { q: "Explica el efecto invernadero.", sol: "Algunos gases retienen el calor del sol en la atmósfera; al aumentar, sube la temperatura." },
    { q: "Escribe tres consecuencias del cambio climático en España.", sol: "Sequías, incendios, olas de calor." },
    { q: "¿Qué es la Agenda 2030? Nombra cuatro ODS.", sol: "Plan de la ONU con 17 ODS: fin de la pobreza, educación, igualdad, acción por el clima." },
    { q: "¿Qué es la huella ecológica y qué la aumenta?", sol: "Superficie necesaria para sostener nuestro consumo; transporte, energía, alimentación, compras." },
    { q: "Escribe las 7 R.", sol: "Repensar, rechazar, reducir, reutilizar, reparar, reciclar, redistribuir." },
    { q: "Propón dos acciones para cada ámbito: movilidad y alimentación.", sol: "Bici y transporte público; productos de temporada y no desperdiciar." },
    { q: "Diseña una campaña para reducir residuos en tu instituto.", sol: "Respuesta abierta." },
  ],
};
