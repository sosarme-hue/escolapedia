// Páginas de Familias y Profesores con contenido propio: guías por etapa, calendario,
// cómo estudiar, preguntas frecuentes, programaciones, situaciones de aprendizaje, rúbricas y exámenes.
module.exports = function recursos({ ETAPAS, page, write, SITE, CURSO_ESCOLAR, cursoNombre, famColor, trimestres }) {
  const ul = (xs) => `<ul>${xs.map((x) => `<li>${x}</li>`).join("")}</ul>`;
  const box = (h, inner) => `<div class="box"><h3>${h}</h3>${inner}</div>`;
  const wrap = (crumbs, h1, intro, html) => `<main><div class="wrap rec" style="padding-bottom:48px">
  <div class="crumbs">${crumbs}</div>
  <div class="page-h"><h1>${h1}</h1>${intro ? `<p>${intro}</p>` : ""}</div>
  ${html}
</div></main>`;
  const cards = (xs) => `<div class="grid rec-cards">${xs.map(([href, t, d, c]) => `<a class="card" style="--c:${c || "var(--pen)"}" href="${href}"><span class="mono">${t[0]}</span><span><b>${t}</b><small>${d}</small></span></a>`).join("")}</div>`;
  const cursosConTemas = [];
  for (const e of ETAPAS) for (const c of e.cursos) {
    const n = c.materias.reduce((a, m) => a + m.temasObj.filter((t) => t.obj).length, 0);
    if (n) cursosConTemas.push({ e, c, n });
  }

  // ======================= FAMILIAS =======================
  const GUIAS = {
    infantil: {
      t: "Infantil (3 a 5 años)", c: "var(--inf)",
      intro: "En Infantil no se trata de adelantar la lectura ni las sumas: se aprende jugando, hablando y explorando.",
      bloques: [
        ["Qué se aprende", ["Tres áreas: crecimiento en armonía (cuerpo, emociones, autonomía), descubrimiento del entorno (números, formas, naturaleza) y comunicación (hablar, escuchar, primeras letras, música, plástica).", "Rutinas: vestirse, recoger, esperar el turno, pedir ayuda.", "Primer contacto con el inglés y, según la comunidad, con la lengua cooficial."]],
        ["Cómo ayudar en casa", ["Leed un cuento cada día y preguntad «¿qué crees que pasará?».", "Contad cosas reales: escalones, fresas en el plato, coches rojos.", "Dejad que haga solo lo que ya puede hacer (abrocharse, poner la mesa).", "Jugad a juegos de mesa sencillos: enseñan a contar, a esperar y a perder."]],
        ["Hábitos que importan", ["Dormir entre 10 y 13 horas (siesta incluida).", "Pantallas: lo mínimo, siempre acompañadas y nunca antes de dormir.", "Juego libre al aire libre todos los días."]],
        ["Cuándo consultar", ["Si a los 3 años casi no habla o no se le entiende.", "Si no responde a su nombre o evita la mirada.", "Si tiene dificultades marcadas de movimiento o de relación. Hablad con la tutora y con el pediatra: cuanto antes, mejor."]],
      ],
    },
    primaria: {
      t: "Primaria (6 a 12 años)", c: "var(--pri)",
      intro: "Es la etapa en la que se construyen las bases: leer bien, calcular con soltura y aprender a estudiar.",
      bloques: [
        ["Qué se aprende", ["Lengua, Matemáticas, Conocimiento del Medio (ciencias naturales y sociales), Inglés, Educación Física, Música y Plástica, y la lengua cooficial donde la haya.", "En 5.º o 6.º, Educación en Valores Cívicos y Éticos.", "Al final de 4.º y de 6.º hay evaluaciones de diagnóstico, que no cuentan para la nota."]],
        ["Cómo ayudar en casa", ["Lectura diaria de 15 a 20 minutos, en voz alta en los primeros cursos.", "Cálculo mental en la vida real: el cambio en la compra, la hora, las recetas.", "Un sitio fijo y tranquilo para los deberes, sin el móvil al lado.", "Preguntad «¿qué has aprendido hoy?» en lugar de «¿qué tal el cole?»."]],
        ["Aprender a estudiar", ["Desde 3.º ya pueden hacer esquemas sencillos y repasar con preguntas.", "En Escolapedia: la pregunta de arranque, las preguntas del paso 3 y las tarjetas del paso 6 enseñan a estudiar recordando, no releyendo."]],
        ["Cuándo consultar", ["Si al final de 2.º todavía lee con mucha dificultad o confunde letras de forma persistente.", "Si los deberes acaban siempre en llanto o bloqueo.", "Si cambia de humor, no quiere ir al colegio o se queja de dolores frecuentes. Hablad con el tutor o la tutora."]],
      ],
    },
    eso: {
      t: "ESO (12 a 16 años)", c: "var(--eso)",
      intro: "La ESO coincide con la adolescencia: más materias, más autonomía y más necesidad de organización.",
      bloques: [
        ["Qué se aprende", ["Materias comunes (Lengua, Matemáticas, Geografía e Historia, Inglés, Educación Física, ciencias, Tecnología) y optativas que varían según la comunidad.", "En 4.º se eligen materias de opción, que orientan hacia Bachillerato o Formación Profesional.", "Se titula al acabar 4.º con la decisión del equipo docente."]],
        ["Cómo ayudar en casa", ["Una agenda (en papel o digital) con exámenes y entregas, revisada juntos el domingo.", "Horario de estudio estable: mejor 45 minutos cada día que 4 horas el día antes.", "El móvil fuera de la habitación mientras estudia y por la noche.", "Interesaos por lo que aprende, no solo por las notas."]],
        ["Orientación", ["En 3.º y 4.º, hablad con el departamento de orientación sobre itinerarios.", "Bachillerato no es el único camino: la FP de grado medio tiene muy buena salida laboral y permite seguir estudiando.", "En Escolapedia, la materia de Formación y Orientación Personal y Profesional de 4.º explica todas las opciones."]],
        ["Cuándo consultar", ["Bajada brusca de notas, aislamiento, cambios de sueño o de alimentación.", "Absentismo o rechazo a ir al instituto.", "Señales de acoso, también en redes sociales. Hablad con la tutoría y, si hace falta, con el centro de salud."]],
      ],
    },
    bachillerato: {
      t: "Bachillerato (16 a 18 años)", c: "var(--bac)",
      intro: "Dos cursos intensos que terminan en la prueba de acceso a la universidad (PAU).",
      bloques: [
        ["Qué se aprende", ["Cuatro modalidades: Ciencias y Tecnología, Humanidades y Ciencias Sociales, Artes y General.", "Materias comunes, de modalidad y optativas.", "La nota de acceso combina la media de Bachillerato (60 %) y la PAU (40 %), más las materias que ponderan."]],
        ["Cómo ayudar en casa", ["Ayudad a planificar por semanas y a repartir el estudio de la PAU desde 1.º.", "Cuidad el sueño (8 horas) y el ejercicio: rinden más que estudiar de madrugada.", "Informaos juntos de las notas de corte y de las ponderaciones de cada grado."]],
        ["Fechas clave", ["La PAU ordinaria suele ser a principios de junio y la extraordinaria a finales de junio o en julio, según la comunidad.", "La preinscripción universitaria se abre justo después de las notas."]],
        ["Cuándo consultar", ["Ansiedad que impide dormir o estudiar, sobre todo cerca de los exámenes.", "Dudas serias sobre la modalidad elegida: aún se puede cambiar en algunos casos. Hablad con orientación."]],
      ],
    },
  };
  for (const [k, g] of Object.entries(GUIAS)) {
    const et = ETAPAS.find((e) => e.slug === k);
    const enlaces = et ? `<div class="box"><h3>Sus cursos en Escolapedia</h3><p>${et.cursos.map((c) => `<a href="../../${et.slug}/${c.slug}/">${cursoNombre(et, c)}</a>`).join(" · ")}</p></div>` : "";
    write(`familias/${k}`, page({ title: `Guía para familias: ${g.t} · ${SITE}`, desc: `Qué se aprende en ${g.t} y cómo ayudar en casa.`, depth: 2, nav: "familias", body: wrap(`<a href="../../">Inicio</a> › <a href="../">Familias</a> › ${g.t}`, `Guía de ${g.t}`, g.intro,
      `<div class="who">${g.bloques.map(([h, xs]) => box(h, ul(xs))).join("")}</div>${enlaces}`) }));
  }

  const CAL = [
    ["Septiembre 2026", "Inicio de curso (entre el 7 y el 10 según la comunidad). Revisad horarios, materiales y fechas de reuniones con tutoría."],
    ["Octubre y noviembre", "Primeros exámenes. Buen momento para fijar la rutina diaria de estudio."],
    ["Diciembre", "Exámenes y notas de la 1.ª evaluación. Vacaciones de Navidad desde el 22-23 de diciembre hasta el 7-8 de enero, aproximadamente."],
    ["Enero a marzo 2027", "2.ª evaluación. Semana Santa: del 22 al 29 de marzo de 2027 (Pascua es el 28 de marzo); las fechas exactas varían por comunidad."],
    ["Abril a junio", "3.ª evaluación y evaluación final. En 2.º de Bachillerato, la PAU es a principios de junio."],
    ["Junio 2027", "Fin de curso alrededor del 18-23 de junio. Evaluación extraordinaria en Bachillerato, según la comunidad."],
  ];
  const ESTUDIO = [
    ["Recuperar, no releer", "Cierra el libro y escribe o di en voz alta lo que recuerdas. Después comprueba. Es la técnica con más evidencia: por eso cada tema tiene preguntas y tarjetas."],
    ["Repasar espaciado", "Mejor 20 minutos hoy, 10 dentro de 3 días y 10 dentro de una semana que 2 horas seguidas. Las tarjetas del paso 6 hacen este calendario solas."],
    ["Explicar con tus palabras", "Si puedes explicar el tema a otra persona (o a un muñeco), lo has entendido. Si te atascas, ahí está lo que falta."],
    ["Mezclar ejercicios", "En Matemáticas y ciencias, alterna tipos de problemas: así aprendes a reconocer qué método usar."],
    ["Bloques de 25 minutos", "25 minutos de estudio sin móvil y 5 de descanso. Cuatro bloques y un descanso largo."],
    ["Plan de 7 días antes de un examen", "Día 1: esquema del tema. Días 2-3: ejercicios y preguntas. Día 4: errores típicos. Día 5: examen de prueba de Escolapedia. Día 6: repasar lo fallado. Día 7: tarjetas y dormir bien."],
  ];
  const FAQ = [
    ["¿Escolapedia sustituye al colegio o al instituto?", "No. Es un refuerzo para repasar y para no descolgarse cuando no se puede ir a clase. La referencia es siempre el profesorado de cada alumno."],
    ["¿Cuesta algo?", "No. Todo es gratuito, sin registro y sin publicidad."],
    ["¿Sigue el temario de mi comunidad?", "Sigue las enseñanzas mínimas estatales de la LOMLOE, que son comunes a toda España. Cada comunidad y cada centro concretan su programación, así que el orden o algunos temas pueden variar."],
    ["Mi hijo ha estado enfermo dos semanas. ¿Por dónde empiezo?", "Pregunta al tutor qué temas se han dado. Busca esos temas en su curso y sigue los seis pasos de cada uno. Las fichas en PDF sirven para trabajar sin pantalla."],
    ["¿Dónde está el PDF?", "Dentro de cada tema, pulsa «Ficha para imprimir» y después «Descargar PDF»."],
    ["¿Se guarda el progreso?", "Sí, en el navegador del dispositivo que use. No se envía a ningún servidor."],
    ["¿Hay versión en catalán?", "La portada y la navegación están en catalán y castellano, y la materia de Lengua Catalana está en catalán."],
    ["He visto un error. ¿Cómo aviso?", "Escribe a partenopides@gmail.com indicando el curso, la materia y el tema."],
  ];
  write("familias", page({ title: `Familias · ${SITE}`, desc: "Guías por etapa, calendario escolar, cómo estudiar y preguntas frecuentes.", depth: 1, nav: "familias", body: wrap(`<a href="../">Inicio</a> › Familias`, "Para familias",
    "No hace falta saberse el temario para ayudar. Aquí tenéis una guía por etapa, el calendario del curso, técnicas de estudio que funcionan y respuestas a las dudas más comunes.",
    `<nav class="rec-toc"><a href="#guias">Guías por etapa</a><a href="#calendario">Calendario ${CURSO_ESCOLAR}</a><a href="#estudiar">Cómo estudiar</a><a href="#rutina">Rutina en casa</a><a href="#faq">Preguntas frecuentes</a></nav>
    <section id="guias" class="rec-sec"><h2>Guías por etapa</h2>${cards(Object.entries(GUIAS).map(([k, g]) => [`${k}/`, g.t, g.intro, g.c]))}</section>
    <section id="calendario" class="rec-sec"><h2>Calendario del curso ${CURSO_ESCOLAR}</h2><p class="caption">Orientativo. Cada comunidad autónoma publica su calendario escolar oficial y cada centro fija sus fechas de exámenes.</p>
      <ol class="rec-cal">${CAL.map(([m, t]) => `<li><b>${m}</b><span>${t}</span></li>`).join("")}</ol>
      <p>Cada materia con temas listos tiene <b>tres exámenes de prueba</b>, uno por trimestre, en la página de la materia.</p></section>
    <section id="estudiar" class="rec-sec"><h2>Cómo estudiar</h2><div class="who">${ESTUDIO.map(([h, t]) => box(h, `<p>${t}</p>`)).join("")}</div></section>
    <section id="rutina" class="rec-sec"><h2>Una rutina de 25 minutos con Escolapedia</h2><div class="who">
      ${box("Con cada tema", ul(["Leed juntos la pregunta de arranque y dejad que intente responder.", "Que haga los pasos 2 y 3 solo; si falla una pregunta, que lea la explicación.", "Pedidle que os explique el tema con sus palabras (paso 4). Si se atasca, ahí está lo que falta repasar."]))}
      ${box("Dos minutos al día", ul(["Las tarjetas del paso 6 vuelven solas al día siguiente, a los 3, 7 y 21 días.", "En cada tema hay un recuadro «Para familias» con ideas para practicar en la vida diaria."]))}
    </div></section>
    <section id="faq" class="rec-sec"><h2>Preguntas frecuentes</h2>${FAQ.map(([q, a]) => `<details class="rec-faq"><summary>${q}</summary><p>${a}</p></details>`).join("")}</section>`) }));

  // ======================= PROFESORES =======================
  // Programaciones por curso
  for (const { e, c, n } of cursosConTemas) {
    const mats = c.materias.filter((m) => m.temasObj.some((t) => t.obj));
    const html = mats.map((m) => {
      const tr = trimestres(m);
      return `<section class="rec-sec prog"><h2><span class="dot" style="background:${famColor(m)}"></span>${m.nombre}</h2>
        <table class="rec-t"><thead><tr><th>Trim.</th><th>Tema</th><th>Saberes básicos</th><th>Recursos</th></tr></thead><tbody>
        ${tr.map((ts, i) => ts.map((t, j) => `<tr>${j === 0 ? `<td rowspan="${ts.length}" class="tri">${i + 1}.º</td>` : ""}<td><b>${t.titulo}</b>${t.obj ? `<small>${t.obj.minutos || 30} min de trabajo autónomo</small>` : ""}</td><td>${t.obj && t.obj.profesores ? t.obj.profesores.saberes : t.obj ? (t.obj.claves || []).join(", ") : "<span class='caption'>Próximamente</span>"}</td><td>${t.obj ? `<a href="../../../${t.url}">Tema</a> · <a href="../../../${t.url}ficha/">Ficha</a>` : ""}${j === ts.length - 1 && ts.some((x) => x.obj) ? ` · <a href="../../../${m.url}examen-${i + 1}-trimestre/">Examen ${i + 1}.º</a>` : ""}</td></tr>`).join("")).join("")}
        </tbody></table></section>`;
    }).join("");
    write(`profesores/programaciones/${c.slug}`, page({ title: `Programación de ${cursoNombre(e, c)} · ${SITE}`, desc: `Temas por trimestre, saberes básicos y recursos de ${cursoNombre(e, c)}.`, depth: 3, nav: "profesores", body: wrap(`<a href="../../../">Inicio</a> › <a href="../../">Profesores</a> › <a href="../">Programaciones</a> › ${cursoNombre(e, c)}`,
      `Programación de ${cursoNombre(e, c)}`, `Propuesta de secuenciación por trimestres según el ${e.decreto}. Adáptala a tu centro: el orden y el número de sesiones dependen de tu horario.`,
      `<p class="noprint"><button type="button" onclick="window.print()" class="toolbtn">Imprimir o guardar en PDF</button></p>${html}`) }));
  }
  write("profesores/programaciones", page({ title: `Programaciones · ${SITE}`, desc: "Programaciones por curso con temas por trimestre.", depth: 2, nav: "profesores", body: wrap(`<a href="../../">Inicio</a> › <a href="../">Profesores</a> › Programaciones`, "Programaciones por curso",
    "Temas repartidos en tres trimestres, con los saberes básicos del currículo y enlaces al tema, la ficha y el examen de prueba. Se pueden imprimir.",
    cards(cursosConTemas.map(({ e, c, n }) => [`${c.slug}/`, cursoNombre(e, c), `${n} temas listos`, e.color]))) }));

  // Situaciones de aprendizaje
  const SDA = [
    ["¿Cuánta agua gastamos?", "3.º-4.º de Primaria", "Matemáticas · Conocimiento del Medio", "El alumnado mide durante una semana el agua que se usa en casa y en el colegio, la representa en gráficos y propone tres medidas de ahorro.", "Cartel o infografía con datos y propuestas, presentado a otras clases.", "6 sesiones", ["STEM", "CPSAA", "CC"], ["Recoge y organiza datos en tablas y gráficos de barras.", "Explica el ciclo del agua y su importancia.", "Propone acciones sostenibles razonadas."]],
    ["Un mercado en clase", "1.º-2.º de Primaria", "Matemáticas · Lengua", "Montamos una tienda con productos de cartón, precios y monedas de juguete. Cada niño compra, paga y devuelve el cambio.", "Tienda funcionando y registro de compras.", "4 sesiones", ["STEM", "CCL", "CE"], ["Cuenta y compone cantidades con monedas y billetes.", "Suma y resta en situaciones reales.", "Se expresa con cortesía en una conversación."]],
    ["Diseñamos un patio inclusivo", "1.º-2.º de ESO", "Matemáticas · Tecnología · Valores", "La clase recibe el encargo de rediseñar el patio para que todo el alumnado pueda jugar. Miden, hacen planos a escala, presupuestan y defienden su propuesta.", "Plano a escala, maqueta o modelo 3D y presentación al equipo directivo.", "8-10 sesiones", ["STEM", "CD", "CC", "CE"], ["Usa escalas, áreas y perímetros con precisión.", "Aplica el proceso tecnológico.", "Argumenta teniendo en cuenta la diversidad."]],
    ["Noticias falsas en mi móvil", "3.º-4.º de ESO", "Lengua · Digitalización · Oratoria", "Los alumnos recogen bulos reales, analizan sus recursos de manipulación y crean una campaña para enseñar a detectarlos.", "Vídeo corto o carrusel para redes y guía de verificación.", "6 sesiones", ["CCL", "CD", "CPSAA", "CC"], ["Identifica falacias y recursos persuasivos.", "Contrasta fuentes y verifica datos.", "Produce un texto multimodal adecuado al público."]],
    ["La química de la cocina", "3.º de ESO", "Física y Química · Biología", "Investigamos qué pasa al hacer pan, un huevo frito o una mayonesa: cambios físicos y químicos, mezclas y nutrientes.", "Recetario científico ilustrado con explicaciones.", "6 sesiones", ["STEM", "CCL", "CPSAA"], ["Diferencia cambios físicos y químicos.", "Aplica el método científico en un experimento.", "Relaciona alimentación y salud."]],
    ["Mi barrio hace 100 años", "2.º-4.º de ESO", "Geografía e Historia · Lengua", "Entrevistas a personas mayores, fotos antiguas y archivo municipal para comparar cómo era y cómo es el barrio.", "Exposición o web con línea del tiempo, mapa y testimonios.", "8 sesiones", ["CCL", "CC", "CCEC", "CD"], ["Usa fuentes primarias y secundarias.", "Explica cambios y continuidades.", "Respeta y valora la memoria colectiva."]],
    ["Un robot que nos ayude", "1.º-3.º de ESO", "Programación y robótica · Tecnología", "Por equipos, diseñan y programan un pequeño robot o un prototipo con micro:bit que resuelva un problema del aula (regar plantas, avisar del ruido…).", "Prototipo funcionando y ficha técnica.", "8-10 sesiones", ["STEM", "CD", "CE"], ["Diseña algoritmos con bucles y condicionales.", "Usa sensores y actuadores.", "Documenta y presenta el proyecto."]],
    ["Debate: ¿deberes sí o no?", "Cualquier curso de ESO", "Oratoria · Lengua · Valores", "Preparamos un debate formal con equipos a favor y en contra, investigación previa y un jurado.", "Debate grabado y acta con conclusiones.", "4 sesiones", ["CCL", "CPSAA", "CC"], ["Construye argumentos con datos y ejemplos.", "Escucha y refuta con respeto.", "Controla la voz, el gesto y el tiempo."]],
  ];
  write("profesores/situaciones-de-aprendizaje", page({ title: `Situaciones de aprendizaje · ${SITE}`, desc: "Ocho situaciones de aprendizaje listas para adaptar.", depth: 2, nav: "profesores", body: wrap(`<a href="../../">Inicio</a> › <a href="../">Profesores</a> › Situaciones de aprendizaje`, "Situaciones de aprendizaje",
    "Propuestas completas para trabajar por retos, como pide la LOMLOE. Cada una indica curso, materias, producto final, sesiones, competencias clave y criterios de evaluación. Combínalas con los temas de Escolapedia y con las rúbricas.",
    `<p class="caption">Competencias clave: CCL (comunicación lingüística), CP (plurilingüe), STEM (matemática, ciencia, tecnología e ingeniería), CD (digital), CPSAA (personal, social y de aprender a aprender), CC (ciudadana), CE (emprendedora), CCEC (conciencia y expresión culturales).</p>
    <div class="who">${SDA.map(([t, cur, mat, reto, prod, ses, comp, crit]) => `<div class="box sda"><h3>${t}</h3><p class="caption">${cur} · ${mat} · ${ses}</p><p><b>Reto:</b> ${reto}</p><p><b>Producto final:</b> ${prod}</p><p><b>Competencias:</b> ${comp.join(", ")}</p><p><b>Criterios de evaluación:</b></p>${ul(crit)}<p class="caption">Evalúa con la <a href="../rubricas/">rúbrica de proyecto</a> y la de exposición oral.</p></div>`).join("")}</div>`) }));

  // Rúbricas
  const NIV = ["Excelente (4)", "Bien (3)", "Suficiente (2)", "Insuficiente (1)"];
  const RUB = [
    ["Exposición oral", [["Contenido", "Completo, preciso y bien explicado.", "Correcto con algún hueco.", "Superficial o con errores.", "Escaso o confuso."], ["Estructura", "Introducción, desarrollo y cierre claros.", "Ordenado, sin cierre claro.", "Saltos de una idea a otra.", "Sin orden."], ["Voz y cuerpo", "Volumen, ritmo y mirada al público.", "Se le oye; mira a ratos.", "Lee casi todo.", "No se le oye o no mira."], ["Apoyo visual", "Claro, breve y útil.", "Correcto, algo cargado.", "Poco útil.", "No hay o distrae."], ["Tiempo", "Ajustado.", "Se desvía poco.", "Muy corto o muy largo.", "No respeta el tiempo."]]],
    ["Trabajo escrito", [["Contenido", "Riguroso, con fuentes citadas.", "Correcto, pocas fuentes.", "Incompleto.", "Copiado o erróneo."], ["Organización", "Apartados claros e índice.", "Bien ordenado.", "Orden mejorable.", "Desordenado."], ["Expresión", "Precisa y variada.", "Clara.", "Repetitiva.", "Difícil de entender."], ["Ortografía", "Sin errores.", "1-3 errores.", "4-8 errores.", "Más de 8 errores."], ["Presentación", "Muy cuidada.", "Cuidada.", "Mejorable.", "Descuidada."]]],
    ["Proyecto o situación de aprendizaje", [["Planificación", "Plan realista y cumplido.", "Plan con pequeños ajustes.", "Plan incompleto.", "Sin plan."], ["Producto final", "Original y de calidad.", "Completo y correcto.", "Cumple lo mínimo.", "Incompleto."], ["Uso de saberes", "Aplica los contenidos con soltura.", "Los aplica bien.", "Los aplica con ayuda.", "No los aplica."], ["Trabajo en equipo", "Todos aportan y se coordinan.", "Reparto equilibrado.", "Desigual.", "Sin colaboración."], ["Reflexión", "Analiza aciertos y mejoras.", "Identifica mejoras.", "Reflexión pobre.", "Sin reflexión."]]],
    ["Cuaderno de clase", [["Completo", "Todas las actividades.", "Casi todas.", "Faltan bastantes.", "Muy incompleto."], ["Correcciones", "Corrige todo en otro color.", "Corrige casi todo.", "Corrige poco.", "No corrige."], ["Orden", "Fechas, títulos y márgenes.", "Bastante ordenado.", "Algo desordenado.", "Desordenado."], ["Esquemas", "Hace esquemas propios.", "Copia esquemas.", "Pocos esquemas.", "Ninguno."]]],
    ["Trabajo en equipo (autoevaluación)", [["Aporto ideas", "Siempre.", "A menudo.", "A veces.", "Casi nunca."], ["Escucho", "Siempre y con respeto.", "A menudo.", "A veces.", "Casi nunca."], ["Cumplo mi parte", "A tiempo y bien.", "A tiempo.", "Con retraso.", "No la cumplo."], ["Ayudo", "Ayudo sin que me lo pidan.", "Si me lo piden.", "Poco.", "Nunca."]]],
  ];
  write("profesores/rubricas", page({ title: `Rúbricas · ${SITE}`, desc: "Cinco rúbricas de evaluación listas para imprimir.", depth: 2, nav: "profesores", body: wrap(`<a href="../../">Inicio</a> › <a href="../">Profesores</a> › Rúbricas`, "Rúbricas de evaluación",
    "Cinco rúbricas con cuatro niveles, pensadas para ESO y adaptables a Primaria. Puedes imprimirlas o guardarlas en PDF.",
    `<p class="noprint"><button type="button" onclick="window.print()" class="toolbtn">Imprimir o guardar en PDF</button></p>
    ${RUB.map(([t, filas]) => `<section class="rec-sec"><h2>${t}</h2><div class="tscroll"><table class="rec-t rub"><thead><tr><th>Criterio</th>${NIV.map((n) => `<th>${n}</th>`).join("")}</tr></thead><tbody>${filas.map(([c, ...d]) => `<tr><td><b>${c}</b></td>${d.map((x) => `<td>${x}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>`).join("")}`) }));

  // Exámenes descargables
  const exHTML = cursosConTemas.map(({ e, c }) => {
    const ms = c.materias.filter((m) => m.temasObj.some((t) => t.obj));
    return `<section class="rec-sec"><h2>${cursoNombre(e, c)}</h2><div class="tscroll"><table class="rec-t"><tbody>${ms.map((m) => `<tr><td><b>${m.nombre}</b></td>${trimestres(m).map((tr, i) => `<td>${tr.some((t) => t.obj) ? `<a href="../../${m.url}examen-${i + 1}-trimestre/">${i + 1}.º trimestre</a>` : `<span class="caption">${i + 1}.º próximamente</span>`}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>`;
  }).join("");
  write("profesores/examenes", page({ title: `Exámenes · ${SITE}`, desc: "Exámenes de prueba por trimestre, con soluciones, para imprimir.", depth: 2, nav: "profesores", body: wrap(`<a href="../../">Inicio</a> › <a href="../">Profesores</a> › Exámenes`, "Exámenes por trimestre",
    "Cada examen reúne preguntas de todos los temas del trimestre, con soluciones al final. Se pueden hacer en pantalla con corrección automática o imprimir con el botón «Imprimir o guardar en PDF».", exHTML) }));

  write("profesores", page({ title: `Profesores · ${SITE}`, desc: "Programaciones, situaciones de aprendizaje, rúbricas y exámenes para el aula.", depth: 1, nav: "profesores", body: wrap(`<a href="../">Inicio</a> › Profesores`, "Para profesores",
    "Material gratuito para el aula, alineado con la LOMLOE. Escolapedia no sustituye vuestra labor: es un apoyo para presentar, repasar y atender al alumnado que no puede asistir a clase.",
    `${cards([["programaciones/", "Programaciones por curso", "Temas por trimestre con saberes básicos y enlaces a fichas y exámenes.", "var(--pen)"], ["situaciones-de-aprendizaje/", "Situaciones de aprendizaje", "Ocho retos completos con producto final, competencias y criterios.", "var(--leaf)"], ["rubricas/", "Rúbricas", "Exposición oral, trabajo escrito, proyecto, cuaderno y trabajo en equipo.", "var(--sun)"], ["examenes/", "Exámenes descargables", "Tres exámenes por materia, con soluciones, para imprimir.", "var(--red)"]])}
    <div class="who" style="margin-top:22px">
      ${box("En cada tema", ul(["<b>Modo proyector:</b> letra grande y sin columna lateral, para la pizarra digital.", "<b>Ficha para imprimir</b> y PDF: explicación, ejercicios, preguntas y soluciones.", "<b>Para profesores:</b> saberes básicos del currículo e ideas de actividades."]))}
      ${box("Currículo", ul(["Estructura según RD 95/2022, RD 157/2022, RD 217/2022 y RD 243/2022.", "Incluye lenguas cooficiales, segunda lengua extranjera, optativas y Religión."]))}
      ${box("Método", ul(["Seis pasos por tema: activación, explicación con doble codificación, recuperación, elaboración, síntesis y repaso espaciado."]))}
      ${box("¿Ves un error?", `<p>Escribe a <a href="mailto:partenopides@gmail.com">partenopides@gmail.com</a> con el curso, la materia y el tema.</p>`)}
    </div>`) }));
};
