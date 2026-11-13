// Matemáticas 3º de Primaria: el tiempo, reloj y calendario. Dibujos propios en SVG.
const P = require("./_pri3a");
const { svg, t, AZ, RO, VE, NA, SO, MO } = P;

// Reloj analógico con centro (cx, cy), radio r, hora h y minutos m.
const reloj = (cx, cy, r, h, m, o = {}) => {
  const ang = (v) => (v - 15) * (Math.PI / 30);
  const ah = ((h % 12) * 5 + m / 12 - 15) * (Math.PI / 30), am = ang(m);
  let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>`;
  for (let i = 0; i < 12; i++) { const a = ang(i * 5); s += `<path d="M${(cx + Math.cos(a) * r * 0.86).toFixed(1)} ${(cy + Math.sin(a) * r * 0.86).toFixed(1)} L ${(cx + Math.cos(a) * r * 0.96).toFixed(1)} ${(cy + Math.sin(a) * r * 0.96).toFixed(1)}" stroke="var(--ink)" stroke-width="1.6"/>`; if (o.nums !== false && i % 3 === 0) s += t((cx + Math.cos(a) * r * 0.7).toFixed(1), (cy + Math.sin(a) * r * 0.7 + 4).toFixed(1), String(i || 12), { s: r > 40 ? 11 : 9 }); }
  s += `<path d="M${cx} ${cy} L ${(cx + Math.cos(ah) * r * 0.42).toFixed(1)} ${(cy + Math.sin(ah) * r * 0.42).toFixed(1)}" stroke="${RO}" stroke-width="4" stroke-linecap="round"/><path d="M${cx} ${cy} L ${(cx + Math.cos(am) * r * 0.6).toFixed(1)} ${(cy + Math.sin(am) * r * 0.6).toFixed(1)}" stroke="${AZ}" stroke-width="2.6" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="3" fill="var(--ink)"/>`;
  return s;
};
// Reloj digital.
const digital = (x, y, txt, c = VE) => `<rect x="${x}" y="${y}" width="78" height="34" rx="6" fill="var(--ink)" fill-opacity=".85"/>${t(x + 39, y + 24, txt, { s: 18, d: true, c: "#7CFC9A" })}`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "El tiempo: reloj y calendario",
  minutos: 50,
  objetivos: ["Leer la hora en punto, y media, y cuarto, menos cuarto y con minutos en relojes de agujas", "Leer la hora en relojes digitales y relacionar las horas de la mañana y de la tarde", "Conocer las equivalencias entre minutos, horas, días, semanas, meses y años", "Usar el calendario para contar días y resolver problemas de tiempo"],
  claves: ["reloj", "aguja horaria", "minutero", "en punto", "y media", "y cuarto", "menos cuarto", "minuto", "hora", "día", "semana", "mes", "año", "calendario", "reloj digital"],
  pregunta: ["La película empieza a las cinco y cuarto y dura una hora y media. ¿A qué hora termina?", "Si a las 5:15 le sumamos 1 hora, son las 6:15. Y media hora más, <mark>las 6:45</mark>, que también se dice «las siete menos cuarto». Para resolverlo hay que saber leer el reloj y sumar tiempos. ¡Vamos a aprenderlo!"],
  bloques: [
    ["Las agujas del reloj", `<p>El reloj de agujas (o <b>analógico</b>) tiene los números del 1 al 12 y dos agujas:</p><ul><li>La <b>aguja corta</b> (horaria) marca las <mark>horas</mark>. Se mueve muy despacio: tarda 1 hora en ir de un número al siguiente.</li><li>La <b>aguja larga</b> (minutero) marca los <mark>minutos</mark>. Da una vuelta completa en 1 hora.</li></ul><p>Entre número y número hay <b>5 minutos</b>. Por eso, cuando el minutero señala el 1 son las «y cinco»; el 2, «y diez»; el 3, «y cuarto»… Algunos relojes tienen una tercera aguja muy fina, el <b>segundero</b>.</p>`,
      svg("Reloj de agujas: la corta marca las horas y la larga los minutos", `${reloj(90, 90, 64, 3, 0)}${t(200, 66, "corta:", { s: 13, c: RO })}${t(200, 84, "horas", { s: 13, c: RO })}${t(200, 114, "larga:", { s: 13, c: AZ })}${t(200, 132, "minutos", { s: 13, c: AZ })}`)],
    ["En punto y y media", `<p><b>En punto</b>: el minutero (larga) señala el <mark>12</mark>. La aguja corta indica la hora. Si la corta está en el 4, son <b>las cuatro en punto</b>.</p><p><b>Y media</b>: el minutero señala el <mark>6</mark>. Ha dado media vuelta: han pasado 30 minutos. La aguja corta está entre dos números (a mitad de camino). Si está entre el 4 y el 5, son <b>las cuatro y media</b>.</p><p>Fíjate: en las «y media», la hora es la del número que la corta <b>ya ha pasado</b>.</p>`,
      svg("Dos relojes: las cuatro en punto y las cuatro y media", `${reloj(68, 76, 48, 4, 0)}${t(68, 148, "4 en punto", { s: 13, c: AZ })}${reloj(192, 76, 48, 4, 30)}${t(192, 148, "4 y media", { s: 13, c: AZ })}`)],
    ["Y cuarto y menos cuarto", `<p>Si dividimos el reloj en cuatro partes, cada parte es un <b>cuarto de hora</b> = <mark>15 minutos</mark>.</p><ul><li><b>Y cuarto</b>: el minutero señala el <b>3</b>. Ha pasado un cuarto de hora. Ejemplo: las dos y cuarto.</li><li><b>Menos cuarto</b>: el minutero señala el <b>9</b>. Falta un cuarto de hora para la hora siguiente. Ejemplo: si la corta está casi en el 3, son las <b>tres menos cuarto</b>.</li></ul><p>¡Cuidado con el «menos cuarto»! Se dice la hora que <b>va a llegar</b>, no la que ha pasado.</p>`,
      svg("Dos relojes: las dos y cuarto y las tres menos cuarto", `${reloj(68, 76, 48, 2, 15)}${t(68, 148, "2 y cuarto", { s: 13, c: AZ })}${reloj(192, 76, 48, 2, 45)}${t(192, 148, "3 menos cuarto", { s: 13, c: AZ })}`)],
    ["Leer los minutos", `<p>Para leer cualquier minuto, contamos de <b>5 en 5</b> por los números: el 1 son 5 minutos, el 2 son 10, el 3 son 15…</p><ul><li>De la hora en punto a la media (del 12 al 6) decimos «<b>y</b>»: las 7 y 10, las 7 y 25.</li><li>De la media a la hora siguiente (del 6 al 12) solemos decir «<b>menos</b>», contando lo que falta: las 8 menos 20, las 8 menos 5.</li></ul><p>Ejemplo: si la larga está en el 8 y la corta casi en el 10, son las <mark>diez menos veinte</mark> (o las 9 y 40).</p>`,
      svg("Reloj con los minutos de cinco en cinco alrededor; marca las diez menos veinte", `${reloj(96, 92, 62, 9, 40, { nums: false })}${[...Array(12)].map((_, i) => { const a = (i * 5 - 15) * (Math.PI / 30); return t((96 + Math.cos(a) * 76).toFixed(1), (92 + Math.sin(a) * 76 + 4).toFixed(1), String(i * 5), { s: 9.5, c: VE }); }).join("")}${t(214, 80, "10 menos 20", { s: 12, c: RO })}${t(214, 100, "= 9 y 40", { s: 12, c: RO })}`)],
    ["El reloj digital", `<p>El reloj <b>digital</b> muestra la hora con números: primero las <b>horas</b>, después dos puntos y luego los <b>minutos</b>. Por ejemplo, 08:30 son las ocho y media.</p><p>Muchos relojes digitales usan las <mark>24 horas</mark> del día. Por la mañana, las horas van de 0 a 12. Por la tarde, siguen contando: 13, 14, 15… hasta 23.</p><p>Para pasar una hora de la tarde a la forma de 12, le quitamos 12: <b>17:00</b> → 17 − 12 = <b>las 5 de la tarde</b>. Y al revés, las 3 de la tarde son las 15:00.</p>`,
      svg("Relojes digitales: 08:30 son las ocho y media de la mañana y 17:00 las cinco de la tarde", `${digital(30, 30, "08:30")}${t(69, 84, "8 y media", { s: 12, c: AZ })}${t(69, 100, "de la mañana", { s: 11, c: "var(--muted)" })}${digital(152, 30, "17:00")}${t(191, 84, "5 en punto", { s: 12, c: RO })}${t(191, 100, "de la tarde", { s: 11, c: "var(--muted)" })}${t(130, 148, "17 − 12 = 5", { s: 16, d: true, c: RO })}`)],
    ["Minutos, horas y días", `<p>Para medir el tiempo usamos estas unidades:</p>${P.tb(["unidad", "equivale a"], [["1 minuto", "60 segundos"], ["1 hora", "60 minutos"], ["media hora", "30 minutos"], ["un cuarto de hora", "15 minutos"], ["1 día", "24 horas"]])}<p>Un <b>día</b> completo tiene 24 horas: la <b>mañana</b>, la <b>tarde</b> y la <b>noche</b>. Las 12 del mediodía separan la mañana de la tarde, y las 12 de la noche (las 00:00) separan un día del siguiente.</p><p>¿Cuánto es una hora y media? 60 + 30 = <mark>90 minutos</mark>.</p>`,
      P.filas("Equivalencias de tiempo", [["1 minuto", "60 segundos", MO], ["1 hora", "60 minutos", AZ], ["1/2 h · 1/4 h", "30 min · 15 min", VE], ["1 día", "24 horas", RO]])],
    ["Semanas, meses y años", `<p>Para tiempos más largos:</p><ul><li>1 <b>semana</b> = 7 días: lunes, martes, miércoles, jueves, viernes, sábado y domingo.</li><li>1 <b>mes</b> = 28, 29, 30 o 31 días.</li><li>1 <b>año</b> = 12 meses = 365 días (366 en los años <b>bisiestos</b>, cada cuatro años, cuando febrero tiene 29 días).</li></ul><p>Truco de los <b>nudillos</b> para saber cuántos días tiene cada mes: cierra el puño y recorre nudillos y huecos diciendo los meses. Los meses que caen en un <mark>nudillo</mark> tienen 31 días; los de los huecos, 30 (menos febrero, que tiene 28 o 29).</p>`,
      svg("Truco de los nudillos: los meses en un nudillo tienen 31 días y los de los huecos 30", `<rect x="28" y="70" width="194" height="60" rx="10" fill="${NA}" fill-opacity=".25" stroke="${NA}" stroke-width="2"/>${[50, 100, 150, 200].map((x) => `<circle cx="${x}" cy="70" r="22" fill="${NA}" fill-opacity=".35" stroke="${NA}" stroke-width="2"/>`).join("")}${[["ene", 50, 1], ["feb", 75, 0], ["mar", 100, 1], ["abr", 125, 0], ["may", 150, 1], ["jun", 175, 0], ["jul", 200, 1]].map(([m, x, n]) => t(x, n ? 36 : 112, m, { s: 11, c: n ? RO : AZ })).join("")}${t(130, 152, "nudillo: 31 días · hueco: 30", { s: 12, c: "var(--ink)" })}${t(130, 170, "ago, oct y dic también 31", { s: 11, c: RO })}`),
      P.V("tieB")],
    ["El calendario", `<p>El <b>calendario</b> organiza los días del año en meses y semanas. Cada fila es una semana y cada columna, un día de la semana.</p><p>Con el calendario podemos:</p><ul><li>Saber qué <b>día de la semana</b> cae una fecha: ¿el 12 de octubre es martes o jueves?</li><li><b>Contar días</b> que faltan: si hoy es día 5 y tu cumpleaños es el 19, faltan 19 − 5 = <mark>14 días</mark> (2 semanas).</li><li>Apuntar <b>fechas</b> importantes: excursiones, exámenes, fiestas.</li></ul><p>Las fechas se escriben con día, mes y año: 13/11/2026 es el 13 de noviembre de 2026.</p>`,
      svg("Página de calendario de un mes con el día 5 y el día 19 marcados: faltan catorce días", `${["L", "M", "X", "J", "V", "S", "D"].map((d, i) => t(30 + i * 33, 26, d, { s: 11, c: i > 4 ? RO : "var(--muted)" })).join("")}${[...Array(30)].map((_, k) => { const d = k + 1, i = (d + 1) % 7, f = Math.floor((d + 1) / 7); const marc = d === 5 || d === 19; return `${marc ? `<circle cx="${30 + i * 33}" cy="${44 + f * 24}" r="10" fill="none" stroke="${d === 5 ? AZ : RO}" stroke-width="2"/>` : ""}${t(30 + i * 33, 48 + f * 24, String(d), { s: 11, c: i > 4 ? RO : "var(--ink)" })}`; }).join("")}${t(130, 176, "del 5 al 19: faltan 14 días", { s: 11.5, c: AZ })}`, 184)],
    ["Calcular tiempos", `<p>Muchas veces necesitamos saber <b>cuánto dura</b> algo o <b>a qué hora termina</b>.</p><p><b>¿Cuánto dura?</b> El recreo empieza a las 11:00 y acaba a las 11:30. Dura <mark>30 minutos</mark>.</p><p><b>¿A qué hora termina?</b> Entro a la piscina a las 5 y cuarto y estoy 45 minutos. 5:15 + 45 min = 5:60, es decir, <mark>las 6:00</mark>. ¡Recuerda que 60 minutos son una hora!</p><p>Truco: avanza primero hasta la hora en punto y después suma lo que queda. De 5:15 a 6:00 hay 45 minutos.</p>`,
      svg("De las cinco y cuarto a las seis en punto pasan cuarenta y cinco minutos", `${reloj(60, 76, 44, 5, 15)}${reloj(200, 76, 44, 6, 0)}<path d="M108 76 H 152" stroke="${VE}" stroke-width="3"/><path d="M146 70 l 7 6 l -7 6" stroke="${VE}" stroke-width="3" fill="none"/>${t(130, 62, "+ 45 min", { s: 12, c: VE })}${t(60, 140, "5:15", { s: 14, d: true })}${t(200, 140, "6:00", { s: 14, d: true })}${t(130, 168, "dura 45 minutos", { s: 13, c: AZ })}`)],
  ],
  figura: ["El tiempo: reloj y calendario", P.columnas("Resumen: agujas del reloj, en punto y cuartos, reloj digital y calendario", [["corta y larga", "AGUJAS", ["corta: horas", "larga: minutos"], RO], ["12 · 3 · 6 · 9", "CUARTOS", ["en punto · y cuarto", "y media · menos cuarto"], AZ], ["17:00", "DIGITAL", ["tarde: − 12", "= 5 de la tarde"], VE], ["7 días · 12 meses", "CALENDARIO", ["1 h = 60 min", "1 día = 24 h"], SO]])],
  video: P.V("tieV", true),
  ejemplos: [
    ["La aguja corta está entre el 7 y el 8, y la larga en el 6. ¿Qué hora es?", ["La larga en el 6: y media.", "La corta ha pasado el 7."], "Las siete y media (7:30)."],
    ["¿Qué hora es 19:45 en un reloj de agujas?", ["19 − 12 = 7: las 7 de la tarde.", "45 minutos: el minutero en el 9.", "Se dice menos cuarto de la hora siguiente."], "Las ocho menos cuarto de la tarde."],
    ["Las vacaciones empiezan el 22 de diciembre y terminan el 7 de enero. ¿Cuántos días son?", ["Del 22 al 31 de diciembre: 10 días (contando el 22).", "Del 1 al 7 de enero: 7 días.", "10 + 7 = 17."], "17 días de vacaciones."],
  ],
  errores: [
    "Confundir la aguja de las horas con la de los minutos.",
    "En «menos cuarto», decir la hora que ya pasó en vez de la que va a llegar.",
    "Pensar que una hora tiene 100 minutos al sumar tiempos.",
    "No restar 12 al leer las horas de la tarde en formato de 24 horas.",
    "Olvidar contar el primer o el último día al contar días en el calendario.",
  ],
  ejercicios: [
    ["¿Qué aguja marca las horas? ¿Y los minutos?", "La corta marca las horas y la larga los minutos."],
    ["¿Dónde está el minutero en las «y media»? ¿Y en las «menos cuarto»?", "En el 6 y en el 9."],
    ["Escribe en digital: las tres y cuarto de la tarde.", "15:15."],
    ["¿Qué hora es 21:30?", "Las nueve y media de la noche."],
    ["¿Cuántos minutos son una hora y cuarto?", "60 + 15 = 75 minutos."],
    ["¿Cuántas horas tienen 2 días?", "48 horas."],
    ["¿Cuántos días tienen 3 semanas?", "21 días."],
    ["Escribe los meses que tienen 31 días.", "Enero, marzo, mayo, julio, agosto, octubre y diciembre."],
    ["Un partido empieza a las 18:00 y dura 90 minutos. ¿A qué hora acaba?", "A las 19:30 (las siete y media)."],
    ["Hoy es 10 de marzo y la excursión es el 24 de marzo. ¿Cuántos días faltan?", "14 días (dos semanas)."],
  ],
  quiz: [
    ["La aguja larga del reloj marca…", ["los minutos", "las horas", "los días"], "Da una vuelta en una hora."],
    ["Si la larga señala el 12, son las…", ["en punto", "y media", "y cuarto"], "Ha empezado una hora nueva."],
    ["Las «y cuarto»: el minutero señala el…", ["3", "4", "9"], "15 minutos."],
    ["Media hora son…", ["30 minutos", "50 minutos", "15 minutos"], "60 : 2."],
    ["1 día tiene…", ["24 horas", "12 horas", "60 horas"], "Día y noche."],
    ["16:00 son las…", ["4 de la tarde", "6 de la tarde", "4 de la mañana"], "16 − 12."],
    ["Una semana tiene…", ["7 días", "5 días", "10 días"], "De lunes a domingo."],
    ["¿Qué mes tiene 28 o 29 días?", ["febrero", "abril", "agosto"], "El más corto."],
    ["Un año tiene…", ["12 meses", "10 meses", "52 meses"], "365 días."],
    ["De las 10:30 a las 11:00 pasan…", ["30 minutos", "70 minutos", "1 hora"], "Media hora."],
  ],
  examen: [
    ["La corta casi en el 5 y la larga en el 9. Son las…", ["5 menos cuarto", "4 y cuarto", "9 y 5"], "Falta un cuarto para las 5."],
    ["2 horas son…", ["120 minutos", "200 minutos", "60 minutos"], "60 + 60."],
    ["Las 8 de la tarde en digital son…", ["20:00", "18:00", "08:00"], "8 + 12."],
    ["¿Cuántos días tiene noviembre?", ["30", "31", "28"], "Cae en un hueco del puño."],
  ],
  feynman: ["Qué marca cada aguja del reloj", "Dónde está el minutero en punto, y cuarto, y media y menos cuarto", "Cómo se pasan las horas de la tarde del reloj digital a la forma de 12", "Cuántos minutos tiene una hora y cuántas horas un día", "Cómo se usa el calendario para contar días"],
  mapa: ["EL TIEMPO", [["Reloj", "corta: horas · larga: minutos", RO], ["Cuartos", "y cuarto 3 · y media 6 · menos 9", AZ], ["Digital", "tarde: restar 12", VE], ["Calendario", "7 días · 12 meses · 365 días", SO]]],
  tarjetas: [
    ["Aguja horaria", "La corta: marca las horas."],
    ["Minutero", "La larga: marca los minutos; da una vuelta en 1 hora."],
    ["En punto", "Minutero en el 12."],
    ["Y media", "Minutero en el 6: 30 minutos."],
    ["Y cuarto / menos cuarto", "Minutero en el 3 / en el 9: 15 minutos."],
    ["1 hora", "60 minutos."],
    ["1 día", "24 horas. Por la tarde, en digital: 13, 14… 23."],
    ["1 año", "12 meses, 52 semanas, 365 días (366 en bisiesto)."],
  ],
  familias: ["Tened un reloj de agujas en casa y preguntad la hora varias veces al día.", "Apuntad en un calendario los cumpleaños y contad los días que faltan.", "Calculad juntos cuánto dura un viaje, una película o un entrenamiento.", "Practicad el truco de los nudillos con los meses del año."],
  saberes: "Medida: el tiempo; lectura del reloj analógico (en punto, y cuarto, y media, menos cuarto y minutos) y digital (formato de 12 y 24 horas); equivalencias entre segundo, minuto, hora, día, semana, mes y año; uso del calendario; cálculo de duraciones",
  ideas: ["Reloj de cartulina con agujas móviles para cada alumno.", "Horario de clase en formato digital y analógico.", "Calendario de aula con cumpleaños y cuenta atrás de días."],
});
