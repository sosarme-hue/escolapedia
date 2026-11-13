// Infantil 5 años · Crecimiento en armonía: entender lo que sienten los demás (empatía).
const { mapa } = require("./_util");
const { ic, vin, dibujos, charla, lista, mural, t, flecha, FUENTES, PROF, CA, vid, nota } = require("./_inf5a");

// Cara sencilla con emoción: alegre, triste, enfadado, asustado.
const cara = (x, y, emo, s = 1) => {
  const boca = { alegre: `<path d="M-10 6 Q0 16 10 6" stroke="#2a2a2a" stroke-width="3" fill="none" stroke-linecap="round"/>`, triste: `<path d="M-9 12 Q0 4 9 12" stroke="#2a2a2a" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M-9 -2 q-2 6 0 8" stroke="var(--water)" stroke-width="3" fill="none"/>`, enfadado: `<path d="M-9 10 H9" stroke="#2a2a2a" stroke-width="3" stroke-linecap="round"/><path d="M-12 -10 L-4 -6 M12 -10 L4 -6" stroke="#2a2a2a" stroke-width="3" stroke-linecap="round"/>`, asustado: `<ellipse cy="9" rx="5" ry="6" fill="#2a2a2a"/><path d="M-12 -12 q4 -3 8 0 M4 -12 q4 -3 8 0" stroke="#2a2a2a" stroke-width="2" fill="none"/>` }[emo];
  const color = { alegre: "var(--sun)", triste: "var(--water)", enfadado: "var(--red)", asustado: "var(--leaf)" }[emo];
  return `<g transform="translate(${x} ${y}) scale(${s})"><circle r="22" fill="${color}" opacity=".9"/><circle cx="-7" cy="-3" r="2.6" fill="#2a2a2a"/><circle cx="7" cy="-3" r="2.6" fill="#2a2a2a"/>${boca}</g>`;
};

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "5-anos",
  titulo: "Entender lo que sienten los demás",
  minutos: 15,
  objetivos: ["Reconocer en la cara y el cuerpo cómo se sienten los demás", "Ponerse en el lugar del otro", "Saber ayudar a quien está triste o asustado"],
  claves: ["emociones", "empatía", "alegre", "triste", "enfadado", "asustado", "ayudar"],
  pregunta: { texto: "Tu amiga llora porque se le ha roto su juguete. ¿Qué puedes hacer?", respuesta: "Acercarte, preguntarle <mark>«¿estás bien?»</mark> y darle un abrazo o ayudarla a buscar otro juego." },
  bloques: [
    {
      html: `<h3>Todos sentimos</h3><p>Igual que tú, los demás también se sienten <mark>alegres</mark>, <mark>tristes</mark>, <mark>enfadados</mark> o <mark>asustados</mark>.</p><p>Las emociones no son buenas ni malas. Todos las tenemos.</p>`,
      svg: vin("Cuatro caras: alegre, triste, enfadado y asustado", `${cara(40, 78, "alegre")}${cara(100, 78, "triste")}${cara(160, 78, "enfadado")}${cara(220, 78, "asustado")}${t(40, 130, "alegre", { size: 14, max: 56 })}${t(100, 130, "triste", { size: 14, max: 56 })}${t(160, 130, "enfadado", { size: 14, max: 56 })}${t(220, 130, "asustado", { size: 14, max: 56 })}`, "Todos sentimos"),
    },
    {
      html: `<h3>Miro la cara</h3><p>La <mark>cara</mark> nos da pistas. Si sonríe, está alegre. Si llora, está triste.</p><p>Si frunce el ceño y aprieta la boca, está enfadado. Si abre mucho los ojos, puede estar asustado.</p>`,
      svg: vin("Pistas de la cara: la sonrisa es alegría y las lágrimas, tristeza", `${cara(70, 76, "alegre", 1.6)}${cara(190, 76, "triste", 1.6)}${t(70, 140, "sonríe", { size: 18, color: "var(--inf)" })}${t(190, 140, "llora", { size: 18, color: "var(--water)" })}${t(130, 168, "¿qué le pasa?", { size: 15, color: "var(--muted)" })}`),
    },
    {
      html: `<h3>Me pongo en su lugar</h3><p><mark>Ponerse en el lugar del otro</mark> se llama <b>empatía</b>.</p><p>Pienso: «Si a mí se me rompiera mi juguete, ¿cómo me sentiría?». Así entiendo lo que siente mi amigo.</p>`,
      svg: vin("Un niño piensa cómo se siente su amiga que está triste", `${ic("nino", 60, 104, 1.6)}${ic("bocadillo", 100, 50, 1.3)}${flecha(110, 110, 150)}${cara(196, 104, "triste", 1.3)}${t(130, 166, "¿y si fuera yo?", { size: 17, color: "var(--pen)" })}`),
    },
    {
      html: `<h3>¿Cómo puedo ayudar?</h3><p>Cuando alguien está triste, puedo <mark>ayudar</mark>.</p><p>Me acerco y pregunto: «¿Estás bien?». Le escucho. Le doy un abrazo si quiere. O le invito a jugar conmigo.</p>`,
      svg: lista("Ayudar: preguntar, escuchar, abrazar e invitar a jugar", [["«¿Estás bien?»", "var(--pen)"], ["le escucho", "var(--leaf)"], ["un abrazo", "var(--red)"], ["¿jugamos?", "var(--inf)"]], { titulo: "Puedo ayudar" }),
    },
    {
      html: `<h3>¿Para qué sirve? Ser buen amigo</h3><p>Si entiendo lo que sienten los demás, soy <mark>buen amigo</mark>.</p><p>No me río de quien llora. No dejo solo a quien está triste. Y todos estamos más a gusto.</p>`,
      svg: charla("Una niña pregunta si su amigo está bien y él contesta que ya está mejor", [["nina", "¿Estás bien?", "var(--pen)"], ["nino", "Ya estoy mejor, gracias", "var(--leaf)"]]),
    },
    {
      html: `<h3>Juego: el espejo de las emociones</h3><p>Uno pone una <mark>cara</mark>: alegre, triste, enfadada o asustada.</p><p>El otro la adivina y la copia, como un espejo. Después decimos qué podría haber pasado.</p>`,
      svg: vin("Dos caras enfrentadas como en un espejo, las dos alegres", `${cara(70, 80, "alegre", 1.7)}<path d="M130 20 V150" stroke="var(--line)" stroke-width="3" stroke-dasharray="6 6"/>${cara(190, 80, "alegre", 1.7)}${t(130, 168, "¿qué cara pongo?", { size: 17, color: "var(--pen)" })}`),
    },
  ],
  figura: {
    titulo: "Miro, pienso y ayudo",
    svg: mural("Mural: miro su cara, pienso cómo se siente, pregunto y ayudo", [["ojo", "miro", "su cara", "var(--pen)"], ["bocadillo", "pienso", "¿y si fuera yo?", "var(--inf)"], ["oido", "pregunto", "¿estás bien?", "var(--leaf)"], ["corazon", "ayudo", "abrazo o juego", "var(--red)"]]),
  },
  video: vid("FhCvg3IKooY", "El enfado de Roqui. Cuento infantil para reforzar la empatía", "guiainfantil", 718903, "cuento empatía niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Un niño nuevo está solo en el patio, mirando al suelo.", pasos: ["Miro su cara: no sonríe, parece triste.", "Pienso: si yo fuera nuevo, me sentiría solo.", "Me acerco y le digo: «¿Quieres jugar?»."], resultado: "le invito a jugar y se siente mejor." },
    { enunciado: "Mi hermana grita porque le he quitado su cuento.", pasos: ["Miro su cara: está enfadada.", "Pienso: a mí tampoco me gusta que me quiten las cosas.", "Le devuelvo el cuento y le pido perdón."], resultado: "entiendo su enfado y lo arreglo." },
  ],
  errores: [
    "Reírse cuando alguien llora o se cae.",
    "Pensar que los demás sienten lo mismo que yo siempre: hay que mirar y preguntar.",
    "Abrazar sin preguntar: a veces el otro prefiere que solo le escuchen.",
  ],
  ejercicios: [
    { q: "Mira fotos de personas y di cómo se sienten.", sol: nota("revistas o fotos familiares sirven; preguntad «¿cómo lo sabes?».") },
    { q: "Pon cara de alegre, triste, enfadado y asustado.", sol: nota("haced el juego del espejo por turnos.") },
    { q: "En un cuento, señala a un personaje triste y di por qué.", sol: nota("parad la lectura y preguntad qué haría para ayudarle.") },
    { q: "Dibuja a alguien triste y cómo le ayudarías.", sol: nota("valorad cualquier idea de ayuda: un abrazo, un juguete, una palabra.") },
    { q: "Pregunta hoy a alguien de casa: «¿Cómo te sientes?».", sol: nota("respondedle con sinceridad; así aprende que los adultos también sienten.") },
    { q: "Haz algo bonito por un amigo de clase.", sol: nota("al día siguiente preguntad cómo reaccionó su amigo.") },
  ],
  quiz: [
    { q: "Si alguien sonríe, está…", o: ["alegre", "triste", "enfadado"], a: 0, e: "Alegre." },
    { q: "Si alguien llora, está…", o: ["alegre", "triste", "dormido"], a: 1, e: "Triste." },
    { q: "Ponerse en el lugar del otro es…", o: ["empatía", "pereza", "un juego"], a: 0, e: "Empatía." },
    { q: "Un amigo se cae. ¿Qué hago?", o: ["me río", "le pregunto si está bien", "me voy"], a: 1, e: "Le pregunto y le ayudo." },
    { q: "¿Los demás también se enfadan?", o: ["sí", "no", "nunca"], a: 0, e: "Todos sentimos." },
    { q: "Para saber cómo está alguien, miro su…", o: ["zapato", "cara", "mochila"], a: 1, e: "Su cara." },
  ],
  examen: [
    { q: "Un niño está solo y triste. Yo…", o: ["le invito a jugar", "no le miro", "me río"], a: 0, e: "Le invito a jugar." },
    { q: "Si me quitan un juguete me siento mal. Si yo lo quito, el otro…", o: ["se siente mal", "se alegra", "no siente nada"], a: 0, e: "También se siente mal." },
    { q: "Ojos muy abiertos y temblar: está…", o: ["asustado", "alegre", "dormido"], a: 0, e: "Asustado." },
  ],
  feynman: ["Cómo sé lo que siente otro", "Qué es la empatía", "Cómo puedo ayudar"],
  mapa: mapa("LO QUE SIENTEN LOS DEMÁS", "var(--inf)", [
    ["Emociones", "alegre · triste · enfado · miedo", "var(--sun)"],
    ["Miro", "la cara y el cuerpo", "var(--pen)"],
    ["Empatía", "me pongo en su lugar", "var(--leaf)"],
    ["Ayudo", "pregunto · escucho · abrazo", "var(--red)"],
  ], 240),
  tarjetas: [
    ["Sonríe: está…", "Alegre"],
    ["Llora: está…", "Triste"],
    ["Ponerse en el lugar del otro", "Empatía"],
    ["¿Qué pregunto?", "«¿Estás bien?»"],
    ["Si alguien está solo…", "Le invito a jugar"],
    ["¿Me río si alguien llora?", "No, le ayudo"],
  ],
  familias: [
    "Poned nombre a las emociones en casa: «veo que estás enfadado».",
    "Al leer cuentos, preguntad cómo se siente cada personaje.",
    "Contad cómo os sentís vosotros y por qué.",
    "Felicitadle cuando consuele o ayude a alguien.",
  ],
  profesores: PROF(CA, "Desarrollo y equilibrio afectivos: identificación y expresión de emociones propias y ajenas, empatía y conductas de ayuda", ["Rincón de las emociones con caras y un termómetro de cómo me siento.", "Cuentos con pausa para preguntar qué siente el personaje.", "Mural de «hoy he ayudado a…» con dibujos de los niños."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
