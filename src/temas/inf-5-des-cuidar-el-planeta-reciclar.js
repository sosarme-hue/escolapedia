// Infantil 5 años · Descubrimiento y exploración del entorno: cuidar el planeta, reciclar.
const { mapa } = require("./_util");
const { ic, vin, dibujos, mural, t, FUENTES, PROF, DE, vid, nota } = require("./_inf5a");

// Contenedor de color con un dibujo encima y su nombre.
const CONT = [["var(--sun)", "amarillo", "botella"], ["var(--pen)", "azul", "periodico"], ["var(--leaf)", "verde", "tarro"], ["#a0703c", "marrón", "piel_platano"]];
const contenedor = (x, y, c, d, nombre, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-24" y="-22" width="48" height="54" rx="5" fill="${c}"/><rect x="-27" y="-30" width="54" height="10" rx="3" fill="${c}" opacity=".7"/><circle cx="0" cy="4" r="17" fill="#ffffff" opacity=".9"/>${ic(d, 0, 4, 0.75)}</g>${t(x, y + 34 * s + 18, nombre, { size: 15, color: c === "var(--sun)" ? "var(--inf)" : c, max: 60 })}`;

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "5-anos",
  titulo: "Cuidar el planeta: reciclar",
  minutos: 15,
  objetivos: ["Saber que la basura ensucia el planeta", "Separar la basura en los contenedores de colores", "Gastar menos agua y luz y reutilizar las cosas"],
  claves: ["reciclar", "contenedor", "plástico", "papel", "vidrio", "reutilizar", "ahorrar"],
  pregunta: { texto: "¿Dónde tiramos una botella de plástico vacía?", respuesta: "Al contenedor <mark>amarillo</mark>. Así el plástico se puede usar otra vez." },
  bloques: [
    {
      html: `<h3>Nuestro planeta</h3><p>La <mark>Tierra</mark> es nuestra casa. Allí viven las personas, los animales y las plantas.</p><p>Si tiramos basura al suelo, al río o al mar, el planeta se ensucia y los animales enferman.</p>`,
      svg: vin("La Tierra con animales y plantas, y basura que la ensucia", `${ic("tierra", 90, 88, 3.4)}${ic("pez", 210, 56, 1)}${ic("arbol", 210, 130, 1)}${ic("botella", 160, 150, 0.7)}`),
    },
    {
      html: `<h3>Reciclar</h3><p><mark>Reciclar</mark> es separar la basura para que se pueda usar otra vez.</p><p>Con botellas viejas se hacen cosas nuevas: bancos, camisetas o juguetes. ¡La basura se convierte en algo útil!</p>`,
      svg: vin("Una botella vieja se recicla y se convierte en una camiseta", `${ic("botella", 50, 80, 1.8)}<path d="M90 80 q40 -50 80 0" stroke="var(--leaf)" stroke-width="4" fill="none"/><path d="M162 72 L170 82 L158 86" stroke="var(--leaf)" stroke-width="4" fill="none"/>${t(130, 46, "♻", { size: 28, color: "var(--leaf)" })}${ic("camiseta", 210, 84, 1.8)}${t(130, 150, "¡algo nuevo!", { size: 20, color: "var(--leaf)" })}`),
    },
    {
      html: `<h3>Los contenedores</h3><p><mark>Amarillo</mark>: plásticos, latas y briks. <mark>Azul</mark>: papel y cartón. <mark>Verde</mark>: botellas y tarros de vidrio.</p><p><mark>Marrón</mark>: restos de comida, como pieles de fruta.</p>`,
      svg: vin("Contenedores amarillo para plástico, azul para papel, verde para vidrio y marrón para comida", CONT.map(([c, n, d], i) => contenedor(36 + i * 63, 66, c, d, n)).join("")),
    },
    {
      html: `<h3>Gastar menos</h3><p>También cuidamos el planeta si <mark>gastamos menos</mark>.</p><p>Cerramos el grifo al lavarnos los dientes. Apagamos la luz al salir. Y vamos andando o en bici cuando podemos.</p>`,
      svg: dibujos("Cerrar el grifo, apagar la luz e ir en bici", [["grifo", "cierro", "var(--water)"], ["bombilla", "apago", "var(--inf)"], ["pie", "ando", "var(--leaf)"]], { titulo: "Ahorro" }),
    },
    {
      html: `<h3>¿Para qué sirve? Un planeta limpio</h3><p>Reciclando y gastando menos, el aire, el agua y los bosques están más <mark>limpios</mark>.</p><p>Y además <b>reutilizamos</b>: un bote vacío sirve para guardar lápices.</p>`,
      svg: vin("Un tarro de cristal reutilizado como lapicero", `${ic("tarro", 80, 92, 2.6)}${ic("lapiz", 72, 48, 1.2)}${ic("lapiz", 92, 52, 1.1)}${t(186, 80, "reutilizo", { size: 22, color: "var(--leaf)", max: 120 })}${t(186, 112, "un bote", { size: 16, max: 120 })}${t(186, 134, "= lapicero", { size: 16, max: 120 })}`),
    },
    {
      html: `<h3>Juego: ¡a cada uno su contenedor!</h3><p>Pinta <mark>cuatro cajas</mark> de amarillo, azul, verde y marrón.</p><p>Busca basura limpia por casa: un brik, un periódico, un bote… y mete cada cosa en su caja. ¿Has acertado?</p>`,
      svg: vin("Cuatro cajas de colores para separar la basura", `${CONT.map(([c], i) => `<rect x="${14 + i * 62}" y="90" width="54" height="56" rx="6" fill="${c}" opacity=".85"/>`).join("")}${ic("botella", 60, 50, 1)}${ic("periodico", 130, 50, 1)}${ic("tarro", 200, 50, 1)}${t(130, 168, "¿dónde va cada cosa?", { size: 15, color: "var(--muted)" })}`),
    },
  ],
  figura: {
    titulo: "Los contenedores de colores",
    svg: mural("Mural: amarillo plástico y latas, azul papel y cartón, verde vidrio, marrón restos de comida", [["botella", "amarillo", "plástico y latas", "var(--sun)"], ["periodico", "azul", "papel y cartón", "var(--pen)"], ["tarro", "verde", "vidrio", "var(--leaf)"], ["piel_platano", "marrón", "restos de comida", "#a0703c"]]),
  },
  video: vid("NVnAQMIotog", "Luli Pampín - A reciclar", "Luli Pampín", 27077415, "canción a reciclar niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Se ha terminado el cartón de leche. ¿Dónde va?", pasos: ["El brik de leche es un envase.", "Los envases van al amarillo, con los plásticos y las latas.", "Lo vaciamos y lo aplastamos."], resultado: "al contenedor amarillo." },
    { enunciado: "La caja de las galletas está vacía.", pasos: ["Es de cartón.", "El papel y el cartón van al azul.", "La plegamos para que ocupe menos."], resultado: "al contenedor azul." },
  ],
  errores: [
    "Tirar el brik al azul por ser de cartón: el brik va al amarillo.",
    "Echar el vidrio al amarillo: el vidrio va al verde.",
    "Dejar el grifo abierto mientras nos lavamos los dientes.",
  ],
  ejercicios: [
    { q: "Lleva la basura a los contenedores con tu familia.", sol: nota("que sea el niño quien eche cada bolsa en su color.") },
    { q: "Pinta cuatro cajas de colores y separa basura limpia.", sol: nota("amarillo envases, azul papel, verde vidrio, marrón comida.") },
    { q: "Haz un juguete con un rollo de papel o una caja.", sol: nota("reutilizar también es cuidar el planeta.") },
    { q: "Vigila que nadie deje luces encendidas en casa.", sol: nota("nombradle «guardián de la luz» durante una semana.") },
    { q: "Cierra el grifo mientras te cepillas los dientes.", sol: nota("contad cuánta agua se ahorra llenando un vaso.") },
    { q: "Recoge la basura después de merendar en el parque.", sol: nota("llevad siempre una bolsa para la basura en las excursiones.") },
  ],
  quiz: [
    { q: "Una botella de plástico va al…", o: ["amarillo", "verde", "azul"], a: 0, e: "Amarillo." },
    { q: "Un periódico va al…", o: ["azul", "amarillo", "marrón"], a: 0, e: "Azul." },
    { q: "Un tarro de cristal va al…", o: ["verde", "azul", "amarillo"], a: 0, e: "Verde: vidrio." },
    { q: "La piel del plátano va al…", o: ["marrón", "azul", "verde"], a: 0, e: "Marrón." },
    { q: "Reciclar es…", o: ["separar para usar otra vez", "tirar al suelo", "romper"], a: 0, e: "Separar para usar otra vez." },
    { q: "Al salir de una habitación…", o: ["apago la luz", "dejo la luz", "enciendo más"], a: 0, e: "Apago la luz." },
  ],
  examen: [
    { q: "Un brik de zumo va al…", o: ["amarillo", "azul", "verde"], a: 0, e: "Amarillo: envases." },
    { q: "Usar un bote vacío como lapicero es…", o: ["reutilizar", "ensuciar", "gastar"], a: 0, e: "Reutilizar." },
    { q: "La basura en el mar…", o: ["daña a los animales", "es buena", "no pasa nada"], a: 0, e: "Daña a los animales." },
  ],
  feynman: ["Qué es reciclar", "Qué va en cada contenedor", "Cómo gasto menos"],
  mapa: mapa("CUIDAR EL PLANETA", "var(--pen)", [
    ["Amarillo · azul", "envases · papel", "var(--sun)"],
    ["Verde · marrón", "vidrio · comida", "var(--leaf)"],
    ["Ahorrar", "grifo · luz · andar", "var(--water)"],
    ["Reutilizar", "botes · cajas · ropa", "var(--pen)"],
  ], 220),
  tarjetas: [
    ["Contenedor amarillo", "Plásticos, latas y briks"],
    ["Contenedor azul", "Papel y cartón"],
    ["Contenedor verde", "Vidrio"],
    ["Contenedor marrón", "Restos de comida"],
    ["Reciclar es…", "Separar para usar otra vez"],
    ["Al lavarme los dientes…", "Cierro el grifo"],
  ],
  familias: [
    "Tened en casa cubos o bolsas separadas y dejad que él las use.",
    "Bajad juntos la basura a los contenedores de colores.",
    "Reutilizad envases para manualidades y juegos.",
    "Apagad luces y cerrad grifos nombrando por qué lo hacéis.",
  ],
  profesores: PROF(DE, "Exploración de la naturaleza: cuidado del medio ambiente, separación de residuos, reutilización y consumo responsable de agua y energía", ["Papeleras de colores en el aula con pictogramas.", "Taller de juguetes con material reutilizado.", "Patrulla verde semanal que revisa luces y grifos del cole."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
