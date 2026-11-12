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

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Distinguir impuestos directos e indirectos, progresivos y proporcionales", "Explicar las políticas fiscal y monetaria y el estado del bienestar"],
  bloques: [
    { tras: "Las funciones del Estado", html: `<h3>El estado del bienestar</h3><p>El <mark>estado del bienestar</mark> es el conjunto de servicios y prestaciones con los que el Estado garantiza un nivel de vida digno a todos. En España incluye la <b>sanidad pública</b> universal, la <b>educación</b> gratuita y obligatoria hasta los 16 años, las <b>pensiones</b> de jubilación, viudedad e incapacidad, el <b>subsidio por desempleo</b>, la atención a la dependencia y el ingreso mínimo vital. Se financia con impuestos y cotizaciones sociales. Su gran reto es el <b>envejecimiento</b>: cada vez hay más pensionistas por cada trabajador que cotiza.</p>` },
    { tras: "Los impuestos", html: `<h3>Tipos de impuestos</h3>${tabla(["Clasificación", "Tipo", "Ejemplo"], [["Según lo que gravan", "directos: sobre la renta o el patrimonio", "IRPF, Impuesto sobre Sociedades, IBI"], ["", "indirectos: sobre el consumo", "IVA, impuestos especiales (gasolina, tabaco, alcohol)"], ["Según cómo crece el tipo", "progresivos: quien más gana paga un porcentaje mayor", "IRPF"], ["", "proporcionales: mismo porcentaje para todos", "IVA, Impuesto sobre Sociedades"]])}<p>En España el IVA general es del <b>21 %</b>; hay un tipo reducido del 10 % (hostelería, transporte) y un superreducido del 4 % (pan, leche, libros, medicinas).</p>` },
    { tras: "Los impuestos", html: `<h3>Fraude fiscal y economía sumergida</h3><p>El <mark>fraude fiscal</mark> consiste en no pagar los impuestos que corresponden: no declarar ingresos, pagar «en negro» sin factura o desviar dinero a paraísos fiscales. La <b>economía sumergida</b> es la actividad que no se declara a Hacienda ni a la Seguridad Social. Perjudica a todos: el Estado recauda menos para hospitales y escuelas, los trabajadores en negro no tienen derecho a paro ni a pensión, y las empresas que cumplen sufren una competencia desleal. La <b>Agencia Tributaria</b> se encarga de recaudar y de perseguir el fraude.</p>` },
    { tras: "Inflación, crecimiento y paro", html: `<h3>Las políticas económicas</h3><p>Para reducir el paro y la inflación y favorecer el crecimiento, los gobiernos usan la <mark>política fiscal</mark>: cambiar el gasto público y los impuestos. En una crisis se puede aumentar el gasto o bajar impuestos para animar la economía (política expansiva); si la economía se recalienta, se hace lo contrario. La <b>política monetaria</b>, que en la eurozona decide el <b>Banco Central Europeo</b>, sube o baja los tipos de interés: subirlos encarece los préstamos y frena la inflación; bajarlos los abarata y estimula el consumo y la inversión.</p>`, video: { id: "TOVvFXR3jA8", titulo: "¿Qué es la inflación? ¿Cómo se crea?", canal: "Memorias de Tiburón", vistas: 2378880, megusta: 0 } },
    { tras: "Inflación, crecimiento y paro", html: `<h3>Cómo se mide la inflación: el IPC</h3><p>El <mark>Índice de Precios de Consumo</mark> (IPC), que calcula el INE cada mes, sigue el precio de una «cesta» de productos que compran los hogares: alimentos, vivienda, transporte, ocio… Si el IPC sube un 3 % en un año, con el mismo dinero se compra un 3 % menos: se pierde <b>poder adquisitivo</b>. La inflación perjudica más a quien tiene ingresos fijos o ahorros sin rentabilidad. El BCE intenta que la inflación esté cerca del <b>2 %</b>, porque una inflación demasiado alta o negativa (deflación) daña la economía.</p>` },
  ],
  ejemplos: [
    { enunciado: "Compras unas zapatillas de 60 € más IVA al 21 %. ¿Cuánto pagas y cuánto es IVA?", pasos: ["IVA = 60 · 0,21 = 12,60 €.", "Total = 60 + 12,60 = 72,60 €."], resultado: "Pagas 72,60 €, de los que 12,60 € son IVA." },
    { enunciado: "Un producto costaba 50 € y la inflación anual ha sido del 4 %. ¿Cuánto cuesta ahora? Si tu sueldo subió un 2 %, ¿qué ha pasado con tu poder adquisitivo?", pasos: ["Nuevo precio = 50 · 1,04 = 52 €.", "Los precios suben más que el sueldo (4 % frente a 2 %).", "Con el mismo sueldo compras menos."], resultado: "Cuesta 52 €; has perdido poder adquisitivo (≈ 2 %)." },
    { enunciado: "Explica por qué el IRPF es progresivo con un ejemplo sencillo.", pasos: ["Imagina: hasta 12.000 € se paga un 19 %; de 12.000 a 20.000 €, un 24 %.", "Quien gana 10.000 € paga 1.900 € (19 %).", "Quien gana 20.000 € paga 12.000 · 0,19 + 8.000 · 0,24 = 2.280 + 1.920 = 4.200 € (21 %)."], resultado: "Quien más gana paga un porcentaje mayor de su renta." },
  ],
  errores: [
    "Pensar que el IVA lo paga la empresa: lo paga el consumidor final al comprar.",
    "Creer que en un impuesto progresivo todo el sueldo paga el tipo más alto: cada tramo paga su tipo.",
    "Confundir inflación (suben los precios) con crecimiento económico.",
    "Pensar que bajar impuestos sale gratis: reduce los ingresos para servicios públicos.",
    "Creer que el Gobierno de España fija los tipos de interés: en la eurozona los decide el BCE.",
  ],
  ejercicios: [
    { q: "Cita cuatro servicios del estado del bienestar.", sol: "Sanidad, educación, pensiones y subsidio por desempleo." },
    { q: "Clasifica en directo o indirecto: IVA, IRPF, impuesto de la gasolina, IBI.", sol: "Directos: IRPF e IBI. Indirectos: IVA e impuesto de la gasolina." },
    { q: "¿Qué tipo de IVA tiene el pan?", sol: "El superreducido del 4 %." },
    { q: "Calcula el precio final de un menú de 15 € más IVA del 10 %.", sol: "15 · 1,10 = 16,50 €." },
    { q: "¿Qué es la economía sumergida y a quién perjudica?", sol: "La actividad no declarada; perjudica al Estado, a los trabajadores sin derechos y a las empresas que cumplen." },
    { q: "¿Qué hace la Agencia Tributaria?", sol: "Recauda los impuestos estatales y persigue el fraude fiscal." },
    { q: "¿Qué es una política fiscal expansiva?", sol: "Aumentar el gasto público o bajar impuestos para estimular la economía." },
    { q: "¿Qué ocurre si el BCE sube los tipos de interés?", sol: "Los préstamos se encarecen, se consume e invierte menos y la inflación tiende a bajar." },
    { q: "¿Qué mide el IPC?", sol: "La evolución de los precios de una cesta de bienes y servicios que consumen los hogares." },
    { q: "¿Por qué el envejecimiento es un reto para las pensiones?", sol: "Porque hay más pensionistas y relativamente menos trabajadores cotizando para pagarlas." },
  ],
  quiz: [
    { q: "El IVA general en España es del…", o: ["10 %", "16 %", "21 %"], a: 2, e: "Hay tipos reducidos del 10 % y 4 %." },
    { q: "El IRPF es un impuesto…", o: ["directo y progresivo", "indirecto", "proporcional"], a: 0, e: "Grava la renta según tramos." },
    { q: "Los tipos de interés del euro los fija…", o: ["el Banco de España", "el BCE", "Hacienda"], a: 1, e: "Banco Central Europeo." },
    { q: "La inflación objetivo del BCE es cercana al…", o: ["0 %", "2 %", "10 %"], a: 1, e: "Ni demasiado alta ni negativa." },
    { q: "Trabajar «en negro» significa…", o: ["sin contrato ni cotizar", "de noche", "en la construcción"], a: 0, e: "Sin derechos ni protección." },
  ],
  tarjetas: [
    ["Estado del bienestar", "Servicios públicos que garantizan un nivel de vida digno."],
    ["Impuesto progresivo", "El porcentaje aumenta con la renta."],
    ["IPC", "Índice que mide la inflación."],
  ],
});
