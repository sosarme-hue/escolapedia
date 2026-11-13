// Ciencias Sociales 2º de Primaria: los medios de transporte. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, nino, coche, bus, tren, avion, bici, camion, barca, mar, nube, sol, calzada, suelo, hierba, chip, tick, equis, flechaR, monte, edificio, casco } = require("./_pri2b");

const barco = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-46 -12 H46 L36 8 H-36Z" fill="var(--red)"/><rect x="-30" y="-30" width="50" height="18" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>${[-24, -12, 0, 12].map((a) => `<circle cx="${a}" cy="-21" r="3" fill="var(--water)"/>`).join("")}<rect x="0" y="-46" width="10" height="16" fill="var(--sun)"/></g>`;
const helicoptero = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse rx="22" ry="14" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-4 -8 a10 8 0 0 1 20 0z" fill="var(--water)" opacity=".7"/><path d="M20 -2 H46 M46 -8 V4" stroke="var(--ink)" stroke-width="3"/><path d="M0 -14 V-20 M-30 -20 H30" stroke="var(--ink)" stroke-width="3"/><path d="M-12 14 V20 M12 14 V20 M-18 20 H18" stroke="var(--ink)" stroke-width="2"/></g>`;
const caballo = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cy="-24" rx="22" ry="10" fill="#8a5a2b"/><path d="M16 -28 L28 -46 L36 -42 L24 -24Z" fill="#8a5a2b"/><path d="M-16 -16 V0 M-8 -16 V0 M8 -16 V0 M16 -16 V0" stroke="#8a5a2b" stroke-width="4"/><path d="M-22 -26 q-10 4 -8 16" stroke="#3b2a1a" stroke-width="3" fill="none"/></g>`;
const cohete = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -40 Q12 -24 10 0 H-10 Q-12 -24 0 -40Z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><circle cy="-18" r="4" fill="var(--water)"/><path d="M-10 -8 L-18 6 H-10Z M10 -8 L18 6 H10Z" fill="var(--red)"/><path d="M-6 2 L0 16 L6 2Z" fill="var(--sun)"/></g>`;

module.exports = tema({
  materia: "Ciencias Sociales",
  titulo: "Los medios de transporte",
  objetivos: ["Saber para qué sirven los medios de transporte", "Clasificarlos en terrestres, acuáticos y aéreos", "Distinguir transporte público y privado y elegir los menos contaminantes"],
  claves: ["transporte", "terrestre", "acuático", "aéreo", "público", "privado", "pasajeros", "mercancías"],
  pregunta: {
    texto: "Quieres ir a ver a tus abuelos, que viven en una isla muy lejos. ¿Cómo podrías llegar?",
    respuesta: "En <mark>avión</mark>, que va por el aire, o en <mark>barco</mark>, que va por el agua. Para llegar al puerto o al aeropuerto usarías un transporte <b>terrestre</b>, como el coche o el autobús.",
  },
  bloques: [
    {
      html: `<h3>¿Para qué sirven?</h3><p>Los <mark>medios de transporte</mark> sirven para <b>llevar personas y cosas</b> de un lugar a otro.</p><p>Cuando llevan personas, decimos que llevan <b>pasajeros</b>. Cuando llevan cosas, como fruta, muebles o paquetes, llevan <b>mercancías</b>. Gracias a ellos podemos viajar lejos y tener cosas de otros lugares.</p>`,
      svg: svg("Un autobús lleva pasajeros y un camión lleva mercancías", `${calzada(128, 40)}${bus(70, 162, "var(--sun)", 1.1)}${camion(196, 162, "var(--leaf)", 1.1)}${txt(70, 106, "pasajeros", "var(--pen)", 14)}${txt(196, 106, "mercancías", "var(--leaf)", 14)}${big(130, 34, "Personas y cosas", "var(--ink)", 16)}`),
    },
    {
      html: `<h3>Transportes terrestres</h3><p>Los <mark>transportes terrestres</mark> van por <b>tierra</b>: por carreteras, calles o vías.</p><p>Son el <b>coche</b>, la <b>moto</b>, la <b>bicicleta</b>, el <b>autobús</b> y el <b>camión</b>. El <b>tren</b> y el <b>metro</b> van por vías. El metro va por túneles bajo la ciudad. ¡Antes se viajaba a caballo o en carro!</p>`,
      svg: svg("Un coche, una bicicleta y un tren", `${hierba(136)}${coche(46, 136, "var(--red)", 1.1)}${bici(124, 136, 1.1)}${tren(212, 136, 0.75)}${chip(130, 164, 110, "por tierra", "var(--leaf)", 13)}`),
    },
    {
      html: `<h3>Transportes acuáticos</h3><p>Los <mark>transportes acuáticos</mark> van por el <b>agua</b>: por el mar, los ríos o los lagos.</p><p>Son el <b>barco</b>, el <b>velero</b>, la <b>barca</b>, la lancha y el <b>ferri</b>, que lleva coches y personas a las islas. Los barcos grandes, los <b>cargueros</b>, llevan mercancías en contenedores por todo el mundo.</p>`,
      svg: svg("Un barco grande y un velero en el mar", `${mar(104, 66)}${barco(80, 116, 1.1)}${barca(200, 116, "var(--pen)")}${sol(226, 34, 12)}${chip(130, 158, 110, "por agua", "var(--water)", 13)}`),
      video: V("cAKSIRoVfqQ"),
    },
    {
      html: `<h3>Transportes aéreos</h3><p>Los <mark>transportes aéreos</mark> van por el <b>aire</b>. Son los más rápidos para viajar muy lejos.</p><p>El <b>avión</b> sale de un <b>aeropuerto</b>. El <b>helicóptero</b> puede subir y bajar en vertical: se usa para rescates. El globo aerostático vuela con aire caliente. ¡Y los cohetes viajan al espacio!</p>`,
      svg: svg("Un avión, un helicóptero y un globo aerostático en el cielo", `<rect x="0" y="0" width="260" height="180" rx="14" fill="var(--water)" opacity=".1"/>${nube(52, 140, 1)}${avion(90, 60, 1.1)}${helicoptero(178, 128, 1)}<g transform="translate(226 40)"><ellipse rx="18" ry="22" fill="var(--red)"/><path d="M-10 16 L-6 30 H6 L10 16" stroke="var(--ink)" fill="none"/><rect x="-6" y="30" width="12" height="8" fill="#8a5a2b"/></g>${chip(110, 160, 100, "por aire", "var(--pen)", 13)}`),
      video: V("UGEHnztEqgQ"),
    },
    {
      html: `<h3>Público o privado</h3><p>El <mark>transporte privado</mark> es de una persona o una familia, como el coche, la moto o la bici. Va donde quiere su dueño.</p><p>El <mark>transporte público</mark> lo puede usar cualquier persona pagando un billete, como el autobús, el metro o el tren. Tiene <b>horarios</b> y <b>paradas</b> fijas. ¡En un autobús caben tantas personas como en muchos coches!</p>`,
      svg: svg("Un autobús lleno equivale a muchos coches", `${bus(70, 100, "var(--sun)", 1.2)}${txt(70, 124, "1 autobús", "var(--pen)", 14)}${big(140, 76, "=", "var(--ink)", 26)}${[0, 1, 2, 3, 4, 5].map((i) => coche(178 + (i % 2) * 52, 54 + Math.floor(i / 2) * 34, ["var(--red)", "var(--leaf)", "var(--pen)", "var(--inf)", "var(--muted)", "var(--sun)"][i], 0.7)).join("")}${txt(204, 140, "muchos coches", "var(--red)", 13)}${chip(70, 166, 90, "público", "var(--pen)", 13)}${chip(204, 166, 90, "privado", "var(--red)", 13)}`),
    },
    {
      html: `<h3>Los transportes y la contaminación</h3><p>Muchos vehículos funcionan con <b>gasolina</b> o gasóleo y echan <mark>humo</mark> que ensucia el aire. También hacen ruido.</p><p>Para contaminar menos, es mejor ir <b>andando</b>, en <b>bici</b> o en <b>transporte público</b>. Hoy hay coches y autobuses <b>eléctricos</b>, que no echan humo. ¡Cada viaje sin coche ayuda al planeta!</p>`,
      svg: svg("Un coche echando humo y una bici y un peatón sin humo", `${suelo(146)}${coche(64, 146, "var(--muted)", 1.2)}<g fill="#6b7385" opacity=".55"><circle cx="20" cy="132" r="8"/><circle cx="12" cy="118" r="10"/></g>${equis(64, 90)}${bici(170, 146, 1)}${nino(226, 146, { c: "var(--leaf)", pose: "corre", s: 0.9 })}${tick(196, 70)}`),
    },
    {
      html: `<h3>Los transportes antes y ahora</h3><p>Hace mucho tiempo, la gente viajaba <mark>andando</mark>, a <b>caballo</b> o en <b>carro</b>. ¡Un viaje largo duraba semanas!</p><p>Luego se inventaron el <b>tren de vapor</b>, el coche y el avión. Hoy podemos ir de Barcelona a Madrid en dos horas y media en tren. Los transportes han cambiado mucho con el paso del tiempo.</p>`,
      svg: svg("Un caballo con carro antes y un tren rápido ahora", `${suelo(146)}${caballo(70, 146, 1.2)}<g transform="translate(20 146)"><rect x="-10" y="-34" width="34" height="20" fill="#c9a46a" stroke="var(--ink)"/><circle cx="0" cy="-10" r="9" fill="none" stroke="#8a5a2b" stroke-width="3"/></g><g transform="translate(196 146)"><path d="M-50 -10 V-30 H30 Q50 -30 54 -10Z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><rect x="-50" y="-24" width="84" height="5" fill="var(--red)"/>${[-42, -28, -14, 0, 14].map((a) => `<rect x="${a}" y="-18" width="10" height="6" fill="var(--water)"/>`).join("")}</g>${chip(56, 30, 66, "antes", "#8a5a2b", 13)}${chip(196, 30, 66, "ahora", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>¿Para qué sirve? Viajar con seguridad</h3><p>En cada medio de transporte hay <mark>normas</mark> para viajar seguros.</p><p>En el coche, siempre con el <b>cinturón</b> y en tu <b>silla</b> o alzador. En la bici, con <b>casco</b>. En el autobús, sentado o bien agarrado. En el barco, con <b>chaleco salvavidas</b> si hace falta. ¡Y nunca molestes al conductor!</p>`,
      svg: svg("Un niño con cinturón en su silla del coche y una niña con casco en bici", `<g transform="translate(70 100)"><rect x="-40" y="-40" width="80" height="80" rx="14" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="-26" y="-30" width="52" height="64" rx="10" fill="var(--pen)" opacity=".3"/></g>${nino(70, 132, { c: "var(--red)", pose: "sentado", s: 0.9 })}<path d="M58 96 L84 122" stroke="var(--muted)" stroke-width="3"/>${txt(70, 160, "cinturón", "var(--pen)", 14)}${bici(196, 150, 0.9)}${nino(196, 132, { nina: true, c: "var(--leaf)", pose: "sentado", s: 0.7 })}${casco(196, 80, "var(--sun)")}${txt(196, 168, "casco", "var(--sun)", 14)}`),
    },
    {
      html: `<h3>Juego: ¿tierra, agua o aire?</h3><p>Clasifica cada transporte. El <b>tren</b>: <mark>tierra</mark>. El <b>velero</b>: <mark>agua</mark>. El <b>helicóptero</b>: <mark>aire</mark>.</p><p>¿Y el <b>submarino</b>? ¡Agua, pero por debajo! ¿Y el <b>teleférico</b>? Va colgado de un cable, por el aire. ¿Y el <b>cohete</b>? ¡Por el aire y hasta el espacio!</p>`,
      svg: svg("Tres columnas: tierra, agua y aire con un transporte en cada una", `<rect x="10" y="20" width="76" height="150" rx="10" fill="var(--leaf)" opacity=".14"/><rect x="92" y="20" width="76" height="150" rx="10" fill="var(--water)" opacity=".18"/><rect x="174" y="20" width="76" height="150" rx="10" fill="var(--pen)" opacity=".1"/>${coche(48, 112, "var(--red)", 0.9)}${barca(130, 104, "var(--red)")}${cohete(212, 104, 1.2)}${chip(48, 150, 62, "tierra", "var(--leaf)", 12)}${chip(130, 150, 62, "agua", "var(--water)", 12)}${chip(212, 150, 62, "aire", "var(--pen)", 12)}`),
    },
  ],
  figura: {
    titulo: "Por tierra, por agua y por aire",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Transportes terrestres, acuáticos y aéreos">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      <rect x="20" y="20" width="190" height="220" rx="14" fill="var(--leaf)" opacity=".12"/><rect x="225" y="20" width="190" height="220" rx="14" fill="var(--water)" opacity=".16"/><rect x="430" y="20" width="190" height="220" rx="14" fill="var(--pen)" opacity=".08"/>
      ${bus(115, 110, "var(--sun)", 1.4)}${bici(115, 170, 1.1)}
      ${barco(320, 110, 1.2)}${barca(320, 170, "var(--pen)")}
      ${avion(525, 90, 1.3)}${helicoptero(525, 160, 1)}
      ${rot(115, 226, "Terrestres", { size: 20, color: "var(--leaf)", w: 800 })}${rot(320, 226, "Acuáticos", { size: 20, color: "var(--water)", w: 800 })}${rot(525, 226, "Aéreos", { size: 20, color: "var(--pen)", w: 800 })}
    </svg>`,
  },
  video: V("ol11YcbRku8", "medios de transporte para niños"),
  ejemplos: [
    { enunciado: "¿Qué tipo de transporte es el ferri?", pasos: ["El ferri es un barco grande.", "Los barcos van por el agua.", "Los transportes que van por el agua son acuáticos."], resultado: "es un transporte acuático." },
    { enunciado: "¿El metro es público o privado?", pasos: ["Lo puede usar cualquier persona.", "Hay que pagar un billete.", "Tiene paradas y horarios fijos."], resultado: "es un transporte público." },
    { enunciado: "¿Cuál contamina menos para ir al cole, que está cerca?", pasos: ["El coche echa humo.", "El autobús lleva a muchos, pero también puede echar humo.", "Andar o ir en bici no echa nada de humo."], resultado: "ir andando o en bici." },
  ],
  errores: [
    "Pensar que el helicóptero es terrestre porque aterriza: viaja por el aire.",
    "Creer que el metro es privado: es público, lo usa cualquiera con billete.",
    "Pensar que ponerse el cinturón solo sirve en viajes largos: siempre hay que ponerlo.",
    "Creer que la bici no es un medio de transporte: es terrestre y privado.",
  ],
  ejercicios: [
    { q: "¿Para qué sirven los medios de transporte?", sol: "Para llevar personas y mercancías de un lugar a otro." },
    { q: "Di tres transportes terrestres.", sol: "Por ejemplo: coche, autobús y tren." },
    { q: "Di dos transportes acuáticos.", sol: "Por ejemplo: barco y velero." },
    { q: "Di dos transportes aéreos.", sol: "Por ejemplo: avión y helicóptero." },
    { q: "¿Qué diferencia hay entre transporte público y privado?", sol: "El público lo usa cualquiera pagando billete; el privado es de una persona o familia." },
    { q: "¿Qué son las mercancías?", sol: "Las cosas que se transportan, como comida o paquetes." },
    { q: "¿Qué transportes contaminan menos?", sol: "Ir andando, en bici o en transporte público (y los vehículos eléctricos)." },
    { q: "¿Qué tienes que ponerte siempre en el coche?", sol: "El cinturón de seguridad (y usar tu silla o alzador)." },
    { q: "¿Cómo se viajaba hace mucho tiempo?", sol: "Andando, a caballo o en carro." },
    { q: "¿En qué transporte vienes al cole? ¿Es público o privado?", sol: "Respuesta libre." },
  ],
  quiz: [
    { q: "El tren es un transporte…", o: ["terrestre", "acuático", "aéreo"], a: 0, e: "Va por vías en tierra." },
    { q: "El barco es…", o: ["terrestre", "acuático", "aéreo"], a: 1, e: "Va por el agua." },
    { q: "El avión es…", o: ["terrestre", "acuático", "aéreo"], a: 2, e: "Va por el aire." },
    { q: "Las cosas que se transportan son…", o: ["mercancías", "pasajeros", "señales"], a: 0, e: "Como fruta o paquetes." },
    { q: "El autobús de línea es…", o: ["público", "privado", "un juguete"], a: 0, e: "Cualquiera puede subir." },
    { q: "El coche de tu familia es…", o: ["público", "privado", "aéreo"], a: 1, e: "Es vuestro." },
    { q: "¿Cuál contamina menos?", o: ["La bici", "El coche de gasolina", "La moto"], a: 0, e: "No echa humo." },
    { q: "Los aviones salen del…", o: ["aeropuerto", "puerto", "garaje"], a: 0, e: "Los barcos, del puerto." },
    { q: "En la bici hay que llevar…", o: ["casco", "paraguas", "gafas de bucear"], a: 0, e: "Protege la cabeza." },
    { q: "El metro va…", o: ["bajo tierra", "por el mar", "por el aire"], a: 0, e: "Por túneles." },
  ],
  examen: [
    { q: "¿Qué transporte puede subir y bajar en vertical?", o: ["El helicóptero", "El tren", "El velero"], a: 0, e: "Se usa en rescates." },
    { q: "¿Cuál es transporte público?", o: ["El tren", "La bici de mi hermano", "El coche de mi tía"], a: 0, e: "Con billete." },
    { q: "Para ir a una isla puedo ir en…", o: ["barco o avión", "bici", "tren"], a: 0, e: "Hay que cruzar el mar." },
    { q: "En el coche siempre…", o: ["me pongo el cinturón", "voy de pie", "molesto al conductor"], a: 0, e: "Por seguridad." },
  ],
  feynman: ["Para qué sirven los medios de transporte", "Terrestres, acuáticos y aéreos con ejemplos", "Diferencia entre público y privado"],
  mapaT: ["LOS TRANSPORTES", [
    ["Terrestres", "coche · bus · tren · bici", "var(--leaf)"],
    ["Acuáticos", "barco · velero · ferri", "var(--water)"],
    ["Aéreos", "avión · helicóptero", "var(--pen)"],
    ["Público o privado", "billete · de la familia", "var(--red)"],
  ]],
  tarjetas: [
    ["¿Para qué sirven los transportes?", "Para llevar personas y cosas"],
    ["Un transporte terrestre", "El coche o el tren"],
    ["Un transporte acuático", "El barco"],
    ["Un transporte aéreo", "El avión"],
    ["¿Qué son los pasajeros?", "Las personas que viajan"],
    ["¿Qué son las mercancías?", "Las cosas que se transportan"],
    ["Un transporte público", "El autobús o el metro"],
    ["¿Qué llevo en la bici?", "El casco"],
  ],
  familias: [
    "En un viaje, contad los transportes que veis y clasificadlos en tierra, agua y aire.",
    "Usad un día el autobús o el metro y mirad juntos el plano de las paradas.",
    "Revisad que siempre lleve el cinturón y su silla o alzador en el coche.",
    "Preguntad a los abuelos cómo viajaban de pequeños y cuánto tardaban.",
  ],
  saberes: "Sociedades y territorios: los medios de transporte (terrestres, acuáticos y aéreos), transporte público y privado, movilidad sostenible y seguridad en los desplazamientos",
  ideas: ["Clasificación de juguetes o recortes en tres cajas: tierra, agua y aire.", "Encuesta de cómo venimos al cole y gráfico de barras sencillo.", "Línea del tiempo de los transportes: carro, tren de vapor, coche, avión."],
});
