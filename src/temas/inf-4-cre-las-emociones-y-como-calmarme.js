// Infantil 4 años · Crecimiento en armonía: las emociones y cómo calmarme.
const { marco, dibujos, lista, parejas, ic, nino, t, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "4-anos",
  titulo: "Las emociones y cómo calmarme",
  minutos: 15,
  objetivos: ["Reconocer la alegría, la tristeza, el enfado y el miedo", "Decir con palabras cómo se siente", "Usar un truco para calmarse"],
  claves: ["alegría", "tristeza", "enfado", "miedo", "calma"],
  pregunta: {
    texto: "Un amigo te quita tu juguete y te enfadas mucho. ¿Qué puedes hacer en vez de pegar?",
    respuesta: "Puedo <mark>respirar despacio</mark>, contar hasta cinco y decir con palabras: «<mark>me he enfadado</mark>, devuélvemelo, por favor». Si no funciona, pido ayuda a un adulto.",
  },
  bloques: [
    {
      html: `<h3>¿Cómo me siento?</h3><p>Por dentro sentimos cosas: son las <mark>emociones</mark>.</p><p>A veces estoy <b>alegre</b>, otras veces <b>triste</b>, <b>enfadado</b> o con <b>miedo</b>. Todas las emociones están bien. ¡Todos las sentimos! Hoy vamos a conocerlas.</p>`,
      svg: dibujos("Cuatro caras: alegre, triste, enfadado y con miedo", [["feliz", "alegre", "var(--sun)"], ["triste", "triste", "var(--water)"], ["enfadado", "enfadado", "var(--red)"], ["asustado", "miedo", "var(--pen)"]]),
    },
    {
      html: `<h3>Alegría y tristeza</h3><p>Con <mark>alegría</mark> sonrío, salto y quiero jugar: es mi cumpleaños o veo a la abuela.</p><p>Con <mark>tristeza</mark> tengo ganas de llorar: se ha roto mi juguete. Un abrazo me ayuda. Las dos emociones son normales.</p>`,
      svg: parejas("Alegre con un globo y triste con un juguete roto", [["feliz", "alegre", "globo", "fiesta"], ["triste", "triste", "juguete", "se rompió"]], { color: "var(--ink)", color2: "var(--pen)" }),
    },
    {
      html: `<h3>Enfado y miedo</h3><p>Con el <mark>enfado</mark> me pongo rojo y aprieto los puños. Algo no me ha gustado.</p><p>Con el <mark>miedo</mark> quiero esconderme: hay una tormenta o un ruido fuerte. Busco a un adulto. Después de un rato, se pasan.</p>`,
      svg: parejas("Enfadado cuando le quitan algo y con miedo cuando hay rayos", [["enfadado", "enfado", "pelota", "¡es mía!"], ["asustado", "miedo", "rayo", "tormenta"]], { color: "var(--ink)", color2: "var(--pen)" }),
    },
    {
      html: `<h3>Trucos para calmarme</h3><p>Cuando una emoción es muy fuerte, me paro. <mark>Respiro despacio</mark>: huelo una flor y soplo una vela.</p><p>También puedo contar hasta cinco o pedir un abrazo. Poco a poco, el cuerpo se calma.</p>`,
      svg: marco("Oler la flor y soplar la vela: respiración para calmarse", `${ic("flor", 60, 76, 2)}${t(60, 140, "huelo", { color: "var(--leaf)", size: 20 })}${t(130, 86, "→", { color: "var(--muted)", size: 26 })}<g transform="translate(200 92)"><rect x="-8" y="-26" width="16" height="40" rx="3" fill="#fff" stroke="var(--line)" stroke-width="2"/><path d="M0 -28 q-8 -10 0 -22 q8 12 0 22z" fill="var(--sun)"/></g>${t(200, 140, "soplo", { color: "var(--inf)", size: 20 })}${t(130, 168, "despacio, 5 veces", { color: "var(--muted)", size: 14 })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Si digo <mark>cómo me siento</mark>, los demás me entienden y me pueden ayudar.</p><p>«Estoy triste», «tengo miedo», «me he enfadado». Las palabras son mejores que los gritos o los golpes. Los adultos también lo hacen.</p>`,
      svg: lista("Frases para decir cómo me siento", [["Estoy triste", "var(--water)"], ["Tengo miedo", "var(--pen)"], ["Me he enfadado", "var(--red)"]], { titulo: "Lo digo con palabras", marca: "♥" }),
    },
    {
      html: `<h3>Juego: el espejo de las caras</h3><p>Ponte delante del espejo con un adulto. Él dice una emoción y tú <mark>pones la cara</mark>.</p><p>¡Alegre! ¡Triste! ¡Enfadado! ¡Asustado! Y al final… ¡tranquilo! ¿Qué cara te sale mejor?</p>`,
      svg: marco("Un niño delante de un espejo con una cara tranquila", `<rect x="140" y="20" width="96" height="130" rx="40" fill="var(--water)" opacity=".25" stroke="var(--pen)" stroke-width="4"/>${ic("tranquilo", 188, 82, 2)}${nino(80, 165, { s: 1.6, pose: "brazos", c: "var(--leaf)" })}`),
    },
  ],
  figura: figura("Mis emociones", "Alegre, triste, enfadado, con miedo y tranquilo", [["feliz", "alegre", "var(--sun)"], ["triste", "triste", "var(--water)"], ["enfadado", "enfadado", "var(--red)"], ["asustado", "miedo", "var(--pen)"], ["tranquilo", "tranquilo", "var(--leaf)"]]),
  video: vid("xSCCDF0F49Q", "Cuento «El monstruo de colores»", "Lumika", 6507587, "el monstruo de colores cuento"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Se cae la torre de bloques y Lucas se enfada.", pasos: ["Lucas para y respira: huele la flor, sopla la vela.", "Dice: «estoy enfadado porque se ha caído».", "Vuelve a empezar la torre con ayuda."], resultado: "Lucas se calma y sigue jugando." },
    { enunciado: "Hay una tormenta y Ana tiene miedo.", pasos: ["Ana dice: «tengo miedo».", "Mamá la abraza y le explica que es solo ruido.", "Cuentan juntas el tiempo entre rayo y trueno."], resultado: "hablar del miedo lo hace más pequeño." },
  ],
  errores: [
    "Pensar que estar triste o enfadado es malo: todas las emociones son normales.",
    "Pegar o gritar cuando nos enfadamos: mejor respirar y decirlo con palabras.",
    "Guardarse el miedo: contarlo a un adulto ayuda.",
  ],
  ejercicios: [
    { q: "Pon cara de alegre, de triste, de enfadado y de miedo.", sol: "Nota para la familia: hacedlo vosotros también y adivinad la del otro." },
    { q: "Respira como si olieras una flor y soplaras una vela, cinco veces.", sol: "Practicadlo en calma para que sepa usarlo cuando se enfade." },
    { q: "Di una cosa que te pone contento.", sol: "Cualquier respuesta vale: escuchadle sin corregir." },
    { q: "Dibuja una cara que muestre cómo te sientes hoy.", sol: "Preguntadle por qué se siente así." },
    { q: "Cuenta hasta cinco con los dedos muy despacio.", sol: "Es otro truco para calmarse." },
    { q: "Mira un cuento y di cómo se siente el personaje.", sol: "Fijaos en su cara: ¿sonríe? ¿llora?" },
  ],
  quiz: [
    { q: "Si se rompe mi juguete, puedo estar…", o: ["dormido", "triste", "verde"], a: 1, e: "Es normal estar triste." },
    { q: "Cuando estoy enfadado, ¿qué hago?", o: ["Pego", "Rompo cosas", "Respiro despacio"], a: 2, e: "Respirar despacio me calma." },
    { q: "Hay una tormenta y siento…", o: ["miedo", "hambre", "sueño"], a: 0, e: "Los ruidos fuertes dan miedo." },
    { q: "En mi cumpleaños estoy…", o: ["enfadado", "asustado", "alegre"], a: 2, e: "La fiesta me da alegría." },
    { q: "Para calmarme puedo…", o: ["pedir un abrazo", "gritar", "esconder juguetes"], a: 0, e: "Un abrazo ayuda mucho." },
    { q: "Las emociones…", o: ["son solo de mayores", "son todas normales", "son malas"], a: 1, e: "Todos sentimos todas las emociones." },
  ],
  examen: [
    { q: "Huelo la flor y soplo la vela. Estoy…", o: ["comiendo", "respirando para calmarme", "durmiendo"], a: 1, e: "Es un truco de respiración." },
    { q: "Si tengo miedo, busco…", o: ["a un adulto", "un sitio alto", "una pelea"], a: 0, e: "Un adulto me ayuda." },
    { q: "Mejor que gritar es…", o: ["llorar más fuerte", "irme sin avisar", "decirlo con palabras"], a: 2, e: "Las palabras ayudan a que me entiendan." },
  ],
  feynman: ["Las cuatro emociones básicas", "Cómo se nota cada una en la cara", "Un truco para calmarme"],
  mapa: mapa("MIS EMOCIONES", "var(--inf)", [
    ["Alegría", "sonrío y salto", "var(--sun)"],
    ["Tristeza", "lloro, pido abrazo", "var(--water)"],
    ["Enfado", "respiro y lo digo", "var(--red)"],
    ["Miedo", "busco a un adulto", "var(--pen)"],
  ], 220),
  tarjetas: [
    ["¿Qué siento en mi cumpleaños?", "Alegría"],
    ["¿Qué siento si se rompe mi juguete?", "Tristeza"],
    ["¿Qué hago si me enfado?", "Respiro y lo digo"],
    ["¿A quién busco si tengo miedo?", "A un adulto"],
    ["Truco para calmarme", "Oler la flor, soplar la vela"],
    ["¿Las emociones son malas?", "No, son normales"],
  ],
  familias: [
    "Poned nombre a lo que sentís vosotros: «estoy cansado», «estoy contento».",
    "Leed cuentos de emociones y preguntad cómo se siente cada personaje.",
    "Preparad un rincón de la calma con un cojín y un peluche.",
    "Practicad la respiración de la flor y la vela antes de dormir.",
  ],
  profesores: PROF("Crecimiento en armonía: identificación y expresión de emociones; estrategias de autorregulación emocional", ["Termómetro o semáforo de las emociones.", "Rincón de la calma con botella sensorial.", "Lectura de «El monstruo de colores» y caras en el espejo."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
