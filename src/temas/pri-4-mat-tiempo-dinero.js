// Matemáticas 4º de Primaria: el tiempo y el dinero. Dibujos propios en SVG.
const P = require("./_pri4a");
const { svg, t, AZ, RO, VE, NA, SO, MO } = P;

// Reloj de agujas en (cx, cy) con radio r marcando h:m.
const reloj = (cx, cy, r, h, m) => {
  const ang = (g) => ((g - 90) * Math.PI) / 180;
  const am = ang(m * 6), ah = ang((h % 12) * 30 + m * 0.5);
  const marcas = [...Array(12)].map((_, i) => { const a = ang(i * 30); return `<path d="M${(cx + Math.cos(a) * r * 0.86).toFixed(1)} ${(cy + Math.sin(a) * r * 0.86).toFixed(1)} L ${(cx + Math.cos(a) * r * 0.96).toFixed(1)} ${(cy + Math.sin(a) * r * 0.96).toFixed(1)}" stroke="var(--ink)" stroke-width="2"/>${t(+(cx + Math.cos(a) * r * 0.7).toFixed(1), +(cy + Math.sin(a) * r * 0.7 + 4).toFixed(1), String(i || 12), { s: r > 40 ? 10 : 8 })}`; }).join("");
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--card)" stroke="var(--ink)" stroke-width="2.4"/>${marcas}<path d="M${cx} ${cy} L ${(cx + Math.cos(ah) * r * 0.45).toFixed(1)} ${(cy + Math.sin(ah) * r * 0.45).toFixed(1)}" stroke="${RO}" stroke-width="4" stroke-linecap="round"/><path d="M${cx} ${cy} L ${(cx + Math.cos(am) * r * 0.78).toFixed(1)} ${(cy + Math.sin(am) * r * 0.78).toFixed(1)}" stroke="${AZ}" stroke-width="2.6" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="3" fill="var(--ink)"/>`;
};
// Moneda o billete.
const moneda = (x, y, txt, r = 15, c = SO) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" fill-opacity=".4" stroke="${c}" stroke-width="2"/>${t(x, y + 4, txt, { s: r > 13 ? 10 : 8 })}`;
const billete = (x, y, txt, c = VE) => `<rect x="${x}" y="${y}" width="56" height="30" rx="4" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2"/>${t(x + 28, y + 20, txt, { s: 12 })}`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "El tiempo y el dinero",
  minutos: 50,
  objetivos: ["Leer la hora en relojes de agujas y digitales, también en formato de 24 horas", "Conocer las equivalencias entre horas, minutos y segundos, y entre días, semanas, meses y años", "Conocer las monedas y billetes de euro y sus equivalencias", "Calcular duraciones, precios y vueltas en problemas cotidianos"],
  claves: ["hora", "minuto", "segundo", "reloj analógico", "reloj digital", "a. m. y p. m.", "día", "semana", "mes", "año", "euro", "céntimo", "billete", "moneda", "vueltas"],
  pregunta: ["El tren sale a las 17:45 y el viaje dura 1 hora y 30 minutos. ¿A qué hora llega?", "Primero sumamos la hora: 17:45 + 1 h = 18:45. Después, los 30 minutos: 18:45 + 15 min = 19:00, y quedan 15 min más → <mark>19:15</mark>. Es decir, llega a las siete y cuarto de la tarde. Contar el tiempo no es como sumar números normales, porque <b>60 minutos forman una hora</b>."],
  bloques: [
    ["Horas, minutos y segundos", `<p>Para medir el tiempo usamos estas unidades:</p><ul><li>1 <b>hora</b> (h) = <mark>60 minutos</mark> (min).</li><li>1 <b>minuto</b> = <mark>60 segundos</mark> (s).</li><li>1 <b>día</b> = 24 horas.</li></ul><p>Fíjate: aquí no contamos de 10 en 10, sino de <b>60 en 60</b>. Así, media hora son 30 minutos y un cuarto de hora, 15 minutos.</p><p>Para pasar de horas a minutos, multiplicamos por 60: 2 h = 120 min. Para pasar de minutos a horas, dividimos entre 60: 180 min = 3 h. Un segundo es muy poco: más o menos lo que tardas en decir «mil uno».</p>`,
      P.filas("Unidades de tiempo", [["1 día", "24 horas", RO], ["1 hora", "60 minutos", AZ], ["1 minuto", "60 segundos", VE], ["1/2 h · 1/4 h", "30 min · 15 min", SO]]),
      P.V("tieB")],
    ["Leer el reloj de agujas", `<p>En el reloj de agujas (analógico):</p><ul><li>La aguja <b>corta</b> marca las <b>horas</b>.</li><li>La aguja <b>larga</b> marca los <b>minutos</b>. Cada número equivale a 5 minutos: el 1 son 5 min, el 2 son 10, el 3 son 15…</li></ul><p>Expresiones que usamos:</p><ul><li><b>En punto</b>: la larga en el 12 (las 4 en punto).</li><li><b>Y cuarto</b>: la larga en el 3 (4:15).</li><li><b>Y media</b>: la larga en el 6 (4:30).</li><li><b>Menos cuarto</b>: la larga en el 9; falta un cuarto para la hora siguiente (las 5 menos cuarto = 4:45).</li></ul>`,
      svg("Reloj de agujas marcando las cinco menos cuarto: cuatro y cuarenta y cinco", `${reloj(80, 90, 62, 4, 45)}${t(196, 70, "4:45", { s: 22, d: true, c: AZ })}${t(196, 98, "las cinco", { s: 12 })}${t(196, 116, "menos cuarto", { s: 12, c: RO })}${t(196, 150, "corta: hora", { s: 10, c: RO })}${t(196, 164, "larga: minutos", { s: 10, c: AZ })}`)],
    ["El reloj digital y las 24 horas", `<p>El reloj <b>digital</b> muestra la hora con números: las horas, dos puntos y los minutos (8:20).</p><p>Como el día tiene 24 horas, hay dos formas de decir la hora:</p><ul><li>Con <b>12 horas</b>, añadiendo «de la mañana», «de la tarde» o «de la noche» (a veces a. m. y p. m.).</li><li>Con <b>24 horas</b>, como en los horarios de trenes, aviones o de la tele: después de las 12 del mediodía se sigue contando 13, 14, 15…</li></ul><p>Para pasar de la tarde al formato de 24 horas, <mark>suma 12</mark>: las 3 de la tarde son las <b>15:00</b>; las 9 de la noche, las 21:00. Las 00:00 son las doce de la noche.</p>`,
      svg("La misma hora en dos formatos: tres y diez de la tarde son las 15:10", `<rect x="20" y="44" width="100" height="56" rx="10" fill="var(--ink)"/>${t(70, 82, "3:10", { s: 24, d: true, c: "#fff" })}${t(70, 122, "de la tarde", { s: 11 })}${P.flecha(126, 72, 138, 72, RO)}<rect x="140" y="44" width="100" height="56" rx="10" fill="var(--ink)"/>${t(190, 82, "15:10", { s: 24, d: true, c: SO })}${t(190, 122, "24 horas", { s: 11 })}${t(130, 158, "tarde y noche: + 12", { s: 13, c: RO })}`)],
    ["Calcular cuánto dura algo", `<p>Para saber cuánto tiempo pasa entre dos horas, lo más fácil es <b>contar a saltos</b>:</p><p><i>La clase de música empieza a las 10:40 y termina a las 11:25. ¿Cuánto dura?</i></p><ol><li>De 10:40 a 11:00 → <b>20 min</b> (hasta la hora en punto).</li><li>De 11:00 a 11:25 → <b>25 min</b>.</li><li>Total: 20 + 25 = <mark>45 minutos</mark>.</li></ol><p>Para saber a qué hora acaba algo, sumamos: si la película empieza a las 18:30 y dura 1 h 50 min → 18:30 + 1 h = 19:30; + 30 min = 20:00; + 20 min = <b>20:20</b>. Si al sumar los minutos pasas de 60, conviértelos en una hora más.</p>`,
      svg("Contar a saltos de 10:40 a 11:25: veinte minutos más veinticinco minutos", `<path d="M20 100 H 240" stroke="var(--muted)" stroke-width="2.5"/>${[[30, "10:40", AZ], [110, "11:00", VE], [210, "11:25", RO]].map(([x, h, c]) => `<circle cx="${x}" cy="100" r="6" fill="${c}"/>${t(x, 126, h, { s: 12, c })}`).join("")}<path d="M34 92 Q 70 50 106 92" fill="none" stroke="${VE}" stroke-width="2"/>${t(70, 60, "20 min", { s: 11, c: VE })}<path d="M114 92 Q 160 44 206 92" fill="none" stroke="${RO}" stroke-width="2"/>${t(160, 56, "25 min", { s: 11, c: RO })}${t(130, 160, "20 + 25 = 45 min", { s: 14, c: AZ })}`)],
    ["Días, semanas, meses y años", `<p>Para periodos más largos usamos el <b>calendario</b>:</p><ul><li>1 <b>semana</b> = 7 días.</li><li>1 <b>mes</b> = 28, 29, 30 o 31 días, según el mes.</li><li>1 <b>año</b> = 12 meses = 365 días (366 en los <b>bisiestos</b>, cada cuatro años, cuando febrero tiene 29 días).</li></ul><p>Otros nombres útiles: una <b>quincena</b> son 15 días; un <b>trimestre</b>, 3 meses; un <b>semestre</b>, 6 meses; una <b>década</b>, 10 años; un <b>siglo</b>, 100 años.</p><p>Truco para los meses: cierra el puño y cuenta por los nudillos. Los meses que caen en un <mark>nudillo</mark> tienen 31 días; los que caen en un hueco, 30 (o febrero, 28 o 29).</p>`,
      P.filas("Unidades de tiempo largas", [["1 semana", "7 días", AZ], ["1 año", "12 meses · 365 días", VE], ["trimestre · semestre", "3 meses · 6 meses", SO], ["década · siglo", "10 años · 100 años", RO]])],
    ["Monedas y billetes de euro", `<p>En España, como en muchos países de Europa, la moneda es el <b>euro (€)</b>. Un euro se divide en <mark>100 céntimos</mark>.</p><ul><li><b>Monedas</b>: 1, 2, 5, 10, 20 y 50 céntimos, y 1 y 2 euros.</li><li><b>Billetes</b>: 5, 10, 20, 50, 100 y 200 euros (también existió el de 500, que ya no se fabrica).</li></ul><p>Equivalencias útiles: 2 monedas de 50 céntimos = 1 €; 5 monedas de 20 céntimos = 1 €; 2 billetes de 5 € = 1 billete de 10 €.</p><p>Las cantidades se escriben con coma: 4,25 € son 4 euros y 25 céntimos.</p>`,
      svg("Monedas de céntimo y de euro y billetes de euro", `${moneda(26, 40, "1c", 10, NA)}${moneda(50, 40, "2c", 11, NA)}${moneda(76, 40, "5c", 12, NA)}${moneda(104, 40, "10c", 12, SO)}${moneda(134, 40, "20c", 13, SO)}${moneda(166, 40, "50c", 14, SO)}${moneda(198, 40, "1 €", 14, MO)}${moneda(232, 40, "2 €", 15, MO)}${billete(14, 74, "5 €", "var(--muted)")}${billete(76, 74, "10 €", RO)}${billete(138, 74, "20 €", AZ)}${billete(200, 74, "50 €", SO)}${billete(44, 114, "100 €", VE)}${billete(160, 114, "200 €", SO)}${t(130, 168, "1 € = 100 céntimos", { s: 13, c: RO })}`),
      P.V("tieB2")],
    ["Contar dinero y comparar precios", `<p>Para contar dinero, empieza por los billetes y monedas de <b>más valor</b> y ve sumando:</p><p>1 billete de 10 € + 2 monedas de 2 € + 3 monedas de 20 c → 10 + 4 = 14 € y 60 c = <mark>14,60 €</mark>.</p><p>Para <b>comparar precios</b>, pon atención a la cantidad. Un paquete de 6 yogures por 3 € sale a 0,50 € cada yogur; uno de 4 por 2,40 € sale a 0,60 € cada uno. El primero es <b>más barato por unidad</b>, aunque cueste más en total.</p><p>Con el dinero también podemos <b>estimar</b>: redondea los precios para saber si te llega.</p>`,
      P.filas("Contar dinero empezando por lo de más valor", [["1 × 10 €", "10 €", VE], ["2 × 2 €", "4 €", MO], ["3 × 20 c", "60 c", SO], ["Total", "14,60 €", RO]])],
    ["Pagar y calcular las vueltas", `<p>Cuando pagamos con más dinero del que cuesta algo, nos devuelven la diferencia: son las <b>vueltas</b> o el <b>cambio</b>.</p><p>Se calculan con una <mark>resta</mark>: dinero entregado − precio.</p><p><i>Un libro cuesta 13,75 € y pago con un billete de 20 €.</i> Vueltas: 20,00 − 13,75 = <b>6,25 €</b>.</p><p>Muchos dependientes lo calculan <b>sumando hacia arriba</b>: de 13,75 a 14 € van 25 c; de 14 a 20 € van 6 €. Total: 6,25 €. ¡Prueba los dos métodos y verás que coinciden!</p>`,
      svg("Calcular las vueltas sumando hacia arriba de 13,75 a 20 euros", `<path d="M20 96 H 240" stroke="var(--muted)" stroke-width="2.5"/>${[[30, "13,75", AZ], [80, "14,00", VE], [220, "20,00", RO]].map(([x, h, c]) => `<circle cx="${x}" cy="96" r="6" fill="${c}"/>${t(x, 122, h, { s: 12, c })}`).join("")}<path d="M34 88 Q 55 60 76 88" fill="none" stroke="${VE}" stroke-width="2"/>${t(55, 62, "+0,25", { s: 11, c: VE })}<path d="M84 88 Q 150 36 216 88" fill="none" stroke="${RO}" stroke-width="2"/>${t(150, 52, "+6", { s: 12, c: RO })}${t(130, 160, "vueltas: 6,25 €", { s: 15, c: AZ })}`)],
    ["Problemas de tiempo y dinero", `<p>Muchas situaciones mezclan el tiempo y el dinero:</p><p><i>Un aparcamiento cobra 1,50 € por cada hora. Si dejas el coche de las 9:00 a las 13:00, ¿cuánto pagas?</i></p><ol><li>Tiempo: de 9:00 a 13:00 son 4 horas.</li><li>Precio: 4 × 1,50 = <mark>6 €</mark>.</li></ol><p><i>Ana ahorra 5 € cada semana. ¿Cuánto tendrá en un trimestre de 13 semanas?</i> 13 × 5 = <b>65 €</b>.</p><p>Recuerda los pasos: comprende, piensa la operación, calcula y comprueba si la respuesta tiene sentido.</p>`,
      svg("Aparcamiento de 9:00 a 13:00: cuatro horas a 1,50 euros", `${[9, 10, 11, 12].map((h, i) => `<rect x="${24 + i * 54}" y="54" width="48" height="40" rx="8" fill="${AZ}" fill-opacity=".18" stroke="${AZ}" stroke-width="2"/>${t(48 + i * 54, 72, `${h}-${h + 1} h`, { s: 10 })}${t(48 + i * 54, 88, "1,50 €", { s: 10, c: RO })}`).join("")}${t(130, 36, "de 9:00 a 13:00 = 4 horas", { s: 12, c: "var(--muted)" })}${t(130, 134, "4 × 1,50 € = 6 €", { s: 16, c: RO })}`)],
  ],
  figura: ["El tiempo y el dinero", P.columnas("Resumen: horas y minutos, reloj, calendario y euro", [["1 h = 60 min", "HORAS", ["1 min = 60 s", "1 día = 24 h"], AZ], ["y cuarto · y media", "RELOJ", ["menos cuarto", "tarde: + 12"], VE], ["7 días · 12 meses", "CALENDARIO", ["365 días", "bisiesto: 366"], SO], ["1 € = 100 c", "DINERO", ["vueltas =", "pago − precio"], RO]])],
  video: P.V("tieV", true),
  ejemplos: [
    ["¿Cuántos minutos son 2 horas y cuarto?", ["2 h = 2 × 60 = 120 min.", "Un cuarto de hora = 15 min.", "120 + 15 = 135 min."], "135 minutos"],
    ["Escribe en formato de 24 horas: las 8 y media de la tarde y las 11 menos cuarto de la noche.", ["8:30 de la tarde → 8 + 12 = 20 → 20:30.", "11 menos cuarto = 10:45 → 10 + 12 = 22 → 22:45."], "20:30 y 22:45"],
    ["Compro una camiseta de 8,90 € y unos calcetines de 3,45 €. Pago con 20 €. ¿Cuánto me devuelven?", ["Total: 8,90 + 3,45 = 12,35 €.", "Vueltas: 20,00 − 12,35 = 7,65 €."], "7,65 €"],
  ],
  errores: [
    "Sumar tiempos como si una hora tuviera 100 minutos (1:50 + 20 min no es 1:70, es 2:10).",
    "Confundir la aguja de las horas con la de los minutos.",
    "Olvidar sumar 12 al pasar una hora de la tarde al formato de 24 horas.",
    "Escribir mal los céntimos: 3 euros y 5 céntimos es 3,05 €, no 3,5 €.",
    "Al calcular las vueltas, restar sin colocar la coma debajo de la coma.",
  ],
  ejercicios: [
    ["¿Cuántos segundos tiene un minuto y medio?", "90 segundos."],
    ["¿Cuántas horas son 240 minutos?", "4 horas."],
    ["Escribe en formato de 24 horas: las 6 de la tarde y las 10 y cuarto de la noche.", "18:00 y 22:15."],
    ["¿Qué hora es a las 16:40 dicho con 12 horas?", "Las cinco menos veinte de la tarde."],
    ["Un partido empieza a las 17:30 y dura 1 h 45 min. ¿A qué hora termina?", "A las 19:15."],
    ["¿Cuánto dura una excursión que va de las 9:15 a las 13:45?", "4 horas y 30 minutos."],
    ["¿Cuántos días tiene un año bisiesto? ¿Y cuántas semanas completas tiene un año?", "366 días; 52 semanas completas (y 1 o 2 días más)."],
    ["¿Cuántas monedas de 20 céntimos hacen falta para tener 3 €?", "15 monedas."],
    ["Pago 4,60 € con un billete de 10 €. ¿Cuánto me devuelven?", "5,40 €."],
    ["Un helado cuesta 1,80 €. ¿Cuánto cuestan 5 helados? ¿Me llega con 10 €?", "9 €; sí, y sobra 1 €."],
  ],
  quiz: [
    ["1 hora =", ["60 minutos", "100 minutos", "30 minutos"], "Se cuenta de 60 en 60."],
    ["Un cuarto de hora son…", ["15 min", "25 min", "4 min"], "60 : 4."],
    ["Las 9 de la noche en formato de 24 h son…", ["las 21:00", "las 19:00", "las 9:00"], "9 + 12."],
    ["Si la aguja larga está en el 6, son…", ["y media", "y cuarto", "en punto"], "6 × 5 = 30 min."],
    ["Un año normal tiene…", ["365 días", "360 días", "366 días"], "Los bisiestos, 366."],
    ["Un trimestre son…", ["3 meses", "3 semanas", "4 meses"], "Tri = tres."],
    ["1 € =", ["100 céntimos", "10 céntimos", "1 000 céntimos"], "Como las centésimas."],
    ["¿Cuál NO es un billete de euro?", ["3 €", "5 €", "20 €"], "No existe el de 3 €."],
    ["Pago 2 € por algo de 1,35 €. Me devuelven…", ["0,65 €", "0,75 €", "1,65 €"], "2,00 − 1,35."],
    ["De 8:50 a 9:20 pasan…", ["30 min", "70 min", "20 min"], "10 + 20."],
  ],
  examen: [
    ["2 h y media =", ["150 min", "250 min", "130 min"], "120 + 30."],
    ["Las 14:45 son…", ["las tres menos cuarto de la tarde", "las dos menos cuarto", "las cuatro y cuarto"], "14 − 12 = 2; 2:45."],
    ["4 monedas de 50 c =", ["2 €", "4 €", "20 €"], "4 × 0,50."],
    ["Una película de 95 min dura…", ["1 h 35 min", "1 h 95 min", "2 h"], "95 − 60 = 35."],
  ],
  feynman: ["Por qué al sumar minutos no podemos pasar de 60", "Cómo se lee la hora en un reloj de agujas", "Cómo se pasa una hora de la tarde al formato de 24 horas", "Qué monedas y billetes de euro existen", "Cómo se calculan las vueltas al pagar"],
  mapa: ["EL TIEMPO Y EL DINERO", [["Tiempo corto", "h · min · s · de 60 en 60", AZ], ["Reloj", "agujas · digital · 24 h", VE], ["Calendario", "semana · mes · año", SO], ["Euro", "1 € = 100 c · vueltas", RO]]],
  tarjetas: [
    ["1 hora", "60 minutos."],
    ["1 minuto", "60 segundos."],
    ["Menos cuarto", "Faltan 15 minutos para la hora siguiente."],
    ["Formato de 24 horas", "Por la tarde y la noche se suma 12: 3 p. m. = 15:00."],
    ["Año bisiesto", "Año de 366 días; febrero tiene 29."],
    ["Trimestre", "3 meses."],
    ["1 euro", "100 céntimos."],
    ["Vueltas", "Dinero entregado menos precio."],
  ],
  familias: ["Preguntad la hora a menudo usando el reloj de agujas de casa.", "Mirad horarios de trenes, autobuses o de la tele en formato de 24 horas.", "Dejad que pague en una tienda y calcule antes las vueltas.", "Repasad las tarjetas dos minutos al día."],
  saberes: "Sentido de la medida: el tiempo (horas, minutos, segundos, calendario), lectura de relojes analógicos y digitales en formato de 12 y 24 horas, cálculo de duraciones; el sistema monetario del euro, equivalencias, precios y vueltas",
  ideas: ["Reloj de cartulina con agujas para practicar por parejas.", "Tienda o mercadillo en el aula con monedas y billetes de juguete.", "Planificar el horario de una excursión con horas de salida y llegada."],
});
