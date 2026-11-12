// Economía y Emprendimiento 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { rueda, dos, barras, filas, figCols } = require("./_hum");

module.exports = {
  materia: "Economía y Emprendimiento",
  curso: "4-eso",
  titulo: "El Estado y la economía",
  minutos: 35,
  objetivos: ["Explicar las funciones del sector público en la economía", "Distinguir impuestos directos e indirectos y entender los Presupuestos", "Relacionar inflación, crecimiento y desempleo con la política económica"],
  claves: ["sector público", "impuestos", "IRPF", "IVA", "Presupuestos Generales", "inflación"],
  pregunta: {
    texto: "Cuando vas al médico de la Seguridad Social o estudias en un instituto público, no pagas nada en ese momento. ¿Quién paga entonces la consulta y tu plaza en clase?",
    respuesta: "La pagamos entre todos con los <mark>impuestos</mark>. El <b>sector público</b> recauda dinero de familias y empresas y lo usa para ofrecer servicios (sanidad, educación, pensiones), construir infraestructuras y reducir las desigualdades.",
  },
  bloques: [
    {
      html: `<h3>Las funciones del Estado</h3><p>En una economía de mercado, el <mark>sector público</mark> (Estado, comunidades autónomas y ayuntamientos) cumple varias funciones: <b>ofrecer bienes y servicios públicos</b> (defensa, justicia, alumbrado, carreteras), <b>redistribuir la renta</b> (pensiones, becas, ayudas), <b>regular</b> los mercados (protección del consumidor, competencia, medio ambiente) y <b>estabilizar</b> la economía en las crisis.</p>`,
      svg: rueda("Funciones del sector público", "ESTADO", [["servicios", "var(--pen)"], ["redistribuir", "var(--red)"], ["regular", "var(--sun)"], ["estabilizar", "var(--leaf)"]], "var(--ink)"),
    },
    {
      html: `<h3>Los impuestos</h3><p>Los <mark>impuestos</mark> son pagos obligatorios al Estado sin una contraprestación directa. Los <b>directos</b> gravan la renta o el patrimonio de cada persona: el <b>IRPF</b> (sobre lo que ganas, progresivo: quien más gana paga un porcentaje mayor) o el Impuesto de Sociedades. Los <b>indirectos</b> gravan el consumo: el <b>IVA</b> (21 % general, 10 % reducido, 4 % superreducido para pan, leche o libros) o los impuestos sobre la gasolina y el tabaco.</p>`,
      svg: dos("Impuestos directos frente a indirectos", ["Directos", ["sobre lo que", "ganas o tienes", "IRPF", "Sociedades", "progresivos"], "var(--pen)"], ["Indirectos", ["sobre lo que", "consumes", "IVA", "carburantes", "todos igual"], "var(--sun)"]),
    },
    {
      html: `<h3>Los Presupuestos Generales del Estado</h3><p>Cada año el gobierno presenta y las Cortes aprueban los <mark>Presupuestos Generales del Estado</mark>: cuánto se espera ingresar y en qué se va a gastar. Las partidas más grandes son las <b>pensiones</b>, los intereses de la deuda, el desempleo y las transferencias a comunidades autónomas, que a su vez pagan sanidad y educación. Si se gasta más de lo que se ingresa hay <b>déficit</b>, que se cubre con <b>deuda pública</b>.</p>`,
      svg: barras("Grandes partidas del gasto de todas las administraciones públicas (orientativo, % del total)", [["pensiones", 28, "var(--pen)", "≈ 28 %"], ["sanidad", 14, "var(--red)", "≈ 14 %"], ["educación", 9, "var(--leaf)", "≈ 9 %"], ["intereses", 5, "var(--muted)", "≈ 5 %"], ["desempleo", 4, "var(--sun)", "≈ 4 %"]], 32),
    },
    {
      html: `<h3>Inflación, crecimiento y paro</h3><p>Los gobiernos y los bancos centrales vigilan tres grandes indicadores. El <b>PIB</b> mide lo que produce un país en un año: si crece, hay más actividad. La <mark>inflación</mark> es la subida general de precios, medida por el <b>IPC</b>; el Banco Central Europeo intenta mantenerla cerca del 2 % subiendo o bajando los tipos de interés. El <b>paro</b> mide cuántas personas activas no encuentran empleo.</p>`,
      svg: filas("Indicadores clave de la economía", [["PIB", "lo que produce el país", "var(--leaf)"], ["IPC", "evolución de los precios", "var(--red)"], ["Paro", "activos sin empleo", "var(--pen)"], ["Déficit", "gasto mayor que ingresos", "var(--muted)"]]),
    },
  ],
  figura: {
    titulo: "Del impuesto al servicio",
    svg: figCols("Ingresos públicos, Presupuestos y servicios que financian", [
      ["Ingresos", ["IRPF", "IVA", "Sociedades", "cotizaciones", "Seguridad Social"], "var(--sun)"],
      ["Presupuestos", ["el gobierno", "los propone", "las Cortes", "los aprueban", "cada año"], "var(--ink)"],
      ["Gastos", ["pensiones", "sanidad", "educación", "infraestructuras", "ayudas y becas"], "var(--leaf)"],
    ]),
  },
  video: { id: "c71Ptm9IUmI", titulo: "¿Qué son los impuestos?", canal: "Ecoduca - Aprende Economía", vistas: 769113, megusta: 0, busqueda: "el estado en la economía impuestos" },
  quiz: [
    { q: "¿Cuál es un impuesto indirecto?", o: ["IRPF", "IVA", "Impuesto de Sociedades"], a: 1, e: "El IVA grava el consumo y lo paga quien compra, sea cual sea su renta." },
    { q: "Un impuesto progresivo es aquel en que…", o: ["todos pagan lo mismo", "quien más gana paga un porcentaje mayor", "solo pagan las empresas"], a: 1, e: "El IRPF sube el tipo por tramos de renta." },
    { q: "¿Quién aprueba los Presupuestos Generales del Estado?", o: ["El Banco de España", "Las Cortes Generales", "Las empresas"], a: 1, e: "El gobierno los presenta y el Congreso y el Senado los aprueban." },
    { q: "El IPC mide…", o: ["la evolución de los precios", "el paro", "la deuda"], a: 0, e: "El Índice de Precios de Consumo sirve para calcular la inflación." },
    { q: "Si el Estado gasta más de lo que ingresa, tiene…", o: ["superávit", "déficit", "inflación"], a: 1, e: "El déficit se financia emitiendo deuda pública." },
  ],
  examen: [
    { q: "Pagar pensiones y becas es una función de…", o: ["redistribución de la renta", "regulación", "defensa"], a: 0, e: "Transfiere recursos a quienes más lo necesitan." },
    { q: "¿Qué tipo de IVA tiene el pan en España?", o: ["21 %", "10 %", "4 % (superreducido)"], a: 2, e: "Los alimentos básicos, los libros y los medicamentos tienen tipos reducidos." },
    { q: "¿Qué hace el Banco Central Europeo para frenar la inflación?", o: ["Bajar los impuestos", "Subir los tipos de interés", "Imprimir más billetes"], a: 1, e: "Al encarecer el crédito, se reduce el consumo y se moderan los precios." },
  ],
  feynman: ["Las cuatro funciones del sector público", "Diferencia entre impuestos directos e indirectos", "Qué son los Presupuestos y qué es el déficit", "Qué miden el PIB, el IPC y la tasa de paro"],
  mapa: mapa("ESTADO Y ECONOMÍA", "var(--leaf)", [
    ["Funciones", "servicios · redistribuir · regular", "var(--ink)"],
    ["Impuestos", "directos (IRPF) · indirectos (IVA)", "var(--sun)"],
    ["Presupuestos", "ingresos · gastos · déficit", "var(--pen)"],
    ["Indicadores", "PIB · IPC · paro", "var(--red)"],
  ], 280),
  tarjetas: [
    ["Impuesto directo", "Grava la renta o el patrimonio (IRPF)."],
    ["Impuesto indirecto", "Grava el consumo (IVA)."],
    ["Déficit público", "Cuando el Estado gasta más de lo que ingresa."],
    ["Inflación", "Subida general y continuada de los precios (se mide con el IPC)."],
    ["PIB", "Valor de todo lo producido en un país en un año."],
  ],
  familias: ["Mirad juntos un tique de la compra y localizad el IVA.", "Pensad qué servicios públicos usa la familia en una semana (colegio, centro de salud, autobús, parque).", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El papel del Estado en la economía: funciones, sistema fiscal, presupuestos públicos y macromagnitudes (RD 217/2022, Economía y Emprendimiento 4º).",
    ideas: ["Calcular el IVA de una cesta de la compra con distintos tipos.", "Simular unos presupuestos municipales con recursos limitados.", "Gráfica de la inflación en España 2019-2025 con datos del INE."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Agencia Tributaria: educación cívico-tributaria", url: "https://sede.agenciatributaria.gob.es/Sede/educacion-civico-tributaria.html" },
  ],
  revisado: "2026-11-12",
};
