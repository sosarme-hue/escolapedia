// Biología y Geología 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Sector circular de un gráfico de tarta (ángulos en grados, 0 arriba).
const sector = (cx, cy, r, a0, a1, c) => {
  const p = (a) => [cx + r * Math.sin((a * Math.PI) / 180), cy - r * Math.cos((a * Math.PI) / 180)].map((v) => v.toFixed(1)).join(" ");
  return `<path d="M${cx} ${cy} L ${p(a0)} A ${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${p(a1)} Z" fill="${c}"/>`;
};

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "La alimentación y la nutrición",
  minutos: 50,
  objetivos: ["Distinguir alimentación y nutrición", "Conocer los nutrientes, su función y los alimentos que los contienen", "Calcular la energía de un alimento y comparar con las necesidades diarias", "Diseñar una dieta equilibrada y leer el etiquetado nutricional"],
  claves: ["nutriente", "glúcido", "lípido", "proteína", "vitamina", "kilocaloría", "dieta equilibrada", "dieta mediterránea"],
  pregunta: {
    texto: "Un refresco de lata y un plátano tienen casi la misma energía, unas 140 kcal. ¿Da igual tomar uno que otro?",
    respuesta: "No. El refresco solo aporta <b>azúcar añadido</b>: son «calorías vacías». El plátano trae además <mark>fibra, potasio y vitaminas</mark>, y su azúcar se absorbe más despacio. Lo importante no es solo cuánta energía comemos, sino <b>qué nutrientes</b> la acompañan.",
  },
  bloques: [
    {
      html: `<h3>Alimentación y nutrición no son lo mismo</h3><p>La <b>alimentación</b> es elegir, preparar y comer los alimentos. Es un acto <mark>voluntario</mark> y educable: decidimos qué comemos, cuánto y cuándo. La <b>nutrición</b> es lo que hace el cuerpo después, sin que lo controlemos: digiere los alimentos, absorbe los nutrientes, los reparte a todas las células, los usa y elimina los desechos. En ella trabajan juntos cuatro aparatos: digestivo, respiratorio, circulatorio y excretor. Podemos alimentarnos mucho y estar mal nutridos si la dieta no es variada.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La alimentación es voluntaria: elegir y comer. La nutrición es involuntaria: digerir, absorber, repartir, usar y eliminar">${BG}
        ${caja(14, 24, 100, 60, "ALIMENTACIÓN", "var(--leaf)", { size: 11 })}${t(64, 100, "elegir · preparar · comer", { size: 9, weight: 400 })}${t(64, 116, "voluntaria", { size: 11, color: "var(--leaf)" })}
        ${fl(118, 54, 142, 54)}
        ${caja(146, 24, 100, 60, "NUTRICIÓN", "var(--pen)", { size: 11 })}
        ${["digerir", "absorber", "repartir", "usar", "eliminar"].map((p, i) => t(196, 100 + i * 14, p, { size: 9, weight: 400 })).join("")}${t(196, 176, "involuntaria", { size: 11, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Los nutrientes</h3><p>Los <b>nutrientes</b> son las sustancias de los alimentos que el cuerpo utiliza. Según su función, pueden ser <mark>energéticos</mark> (dan energía), <mark>estructurales o plásticos</mark> (forman y reparan el cuerpo) y <mark>reguladores</mark> (controlan las reacciones químicas). Ningún alimento, salvo la leche materna para el bebé, los tiene todos en la cantidad necesaria. Por eso hay que comer de todo.</p>${tabla(["Nutriente", "Función principal", "Alimentos ricos"], [["Glúcidos", "energética", "pan, pasta, arroz, legumbres, fruta"], ["Lípidos", "energética y de reserva", "aceite, frutos secos, mantequilla"], ["Proteínas", "estructural", "carne, pescado, huevos, legumbres"], ["Vitaminas", "reguladora", "frutas, verduras"], ["Minerales", "reguladora y estructural", "lácteos (calcio), carne (hierro)"], ["Agua", "medio de todas las reacciones", "agua, frutas, verduras"]])}`,
      video: { id: "Wr0_wULJnBE", titulo: "Alimentación saludable - Hidratos de carbono, grasas, proteínas, vitaminas...", canal: "Smile and Learn - Español", vistas: 4089621 },
    },
    {
      html: `<h3>Glúcidos y lípidos: el combustible</h3><p>Los <b>glúcidos</b> o hidratos de carbono son la principal fuente de energía. Los <b>simples</b> (glucosa, fructosa, sacarosa) son dulces y se absorben deprisa; los <b>complejos</b>, como el almidón del pan, se digieren despacio y dan energía durante más tiempo. Cada gramo de glúcido aporta <mark>4 kcal</mark>. Los <b>lípidos</b> o grasas son una reserva de energía muy concentrada: <mark>9 kcal por gramo</mark>. Además forman las membranas celulares y aíslan del frío. Las grasas insaturadas del aceite de oliva o del pescado azul son más saludables que las saturadas de la bollería.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un gramo de glúcidos o proteínas da 4 kilocalorías; un gramo de lípidos da 9">${BG}
        ${[["glúcidos", 4, "var(--sun)"], ["proteínas", 4, "var(--red)"], ["lípidos", 9, "var(--inf)"]].map(([n, k, c], i) => `<rect x="${40 + i * 70}" y="${140 - k * 12}" width="44" height="${k * 12}" rx="5" fill="${c}"/>${t(62 + i * 70, 134 - k * 12, k + " kcal", { size: 12 })}${t(62 + i * 70, 158, n, { size: 11 })}`).join("")}
        <path d="M24 140 H 240" stroke="var(--muted)" stroke-width="2"/>${t(130, 174, "energía por cada gramo", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Proteínas, vitaminas y minerales</h3><p>Las <b>proteínas</b> están formadas por <b>aminoácidos</b>. Construyen músculos, piel, pelo, enzimas y anticuerpos. Nuestro cuerpo no puede fabricar nueve aminoácidos, los <mark>esenciales</mark>, y tiene que tomarlos de la dieta. Las proteínas animales los tienen todos; las vegetales se completan combinando, por ejemplo, legumbres con cereales. Las <b>vitaminas</b> se necesitan en cantidades muy pequeñas, pero su falta produce enfermedades: sin vitamina C aparece el escorbuto y sin vitamina D se debilitan los huesos. Entre los <b>minerales</b> destacan el calcio (huesos), el hierro (sangre) y el yodo (tiroides).</p>`,
    },
    {
      html: `<h3>El agua y la fibra</h3><p>El <b>agua</b> forma alrededor del <mark>60 % del cuerpo</mark> de un adulto. Disuelve y transporta los nutrientes, regula la temperatura con el sudor y elimina desechos en la orina. Perdemos unos 2,5 litros al día, que recuperamos bebiendo y con el agua de los alimentos. La <b>fibra</b> no es un nutriente porque no la digerimos, pero es imprescindible: ayuda al tránsito intestinal, alimenta a las bacterias buenas del intestino y da sensación de saciedad. Está en las frutas, las verduras, las legumbres y los cereales integrales.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El cuerpo es un 60 por ciento agua; entradas y salidas diarias de agua">${BG}
        <g transform="translate(70 92)"><circle cy="-56" r="14" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-24 -38 H 24 L 20 50 H -20 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-22.6 -2 H 22.6 L 20 50 H -20 Z" fill="var(--water)" fill-opacity=".7"/></g>
        ${t(70, 116, "60 %", { size: 16, color: "#fff" })}
        ${t(186, 30, "cada día", { size: 12, color: "var(--muted)" })}
        ${t(150, 56, "entra", { size: 11, color: "var(--leaf)", anchor: "start" })}${t(150, 72, "bebida 1,5 L", { size: 10, anchor: "start", weight: 400 })}${t(150, 86, "alimentos 1 L", { size: 10, anchor: "start", weight: 400 })}
        ${t(150, 116, "sale", { size: 11, color: "var(--red)", anchor: "start" })}${t(150, 132, "orina 1,5 L", { size: 10, anchor: "start", weight: 400 })}${t(150, 146, "sudor y aliento 0,9 L", { size: 10, anchor: "start", weight: 400 })}${t(150, 160, "heces 0,1 L", { size: 10, anchor: "start", weight: 400 })}</svg>`,
    },
    {
      html: `<h3>¿Cuánta energía necesitamos?</h3><p>La energía de los alimentos se mide en <b>kilocalorías</b> (kcal). Aunque estemos quietos, gastamos energía en respirar, latir y mantener la temperatura: es el <mark>metabolismo basal</mark>. A eso se suma el gasto de la actividad física. Un adolescente necesita entre 2.000 y 2.800 kcal al día, según su edad, su sexo y el ejercicio que haga. Si comemos más energía de la que gastamos, el exceso se guarda como grasa; si comemos menos, el cuerpo usa sus reservas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Balanza energética: energía que entra con los alimentos frente a energía que se gasta">${BG}
        <path d="M130 50 V 140 M100 150 H 160" stroke="var(--ink)" stroke-width="4"/><path d="M50 62 H 210" stroke="var(--ink)" stroke-width="4"/>
        <path d="M50 62 L 28 100 H 72 Z M210 62 L 188 100 H 232 Z" fill="none" stroke="var(--muted)" stroke-width="2"/>
        <path d="M28 100 Q 50 116 72 100 Z" fill="var(--leaf)" fill-opacity=".5"/><path d="M188 100 Q 210 116 232 100 Z" fill="var(--red)" fill-opacity=".5"/>
        ${t(50, 134, "entra", { size: 12, color: "var(--leaf)" })}${t(50, 150, "alimentos", { size: 10, weight: 400 })}
        ${t(210, 134, "sale", { size: 12, color: "var(--red)" })}${t(210, 150, "basal + actividad", { size: 10, weight: 400 })}
        ${t(130, 32, "balance energético", { size: 12, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La dieta equilibrada</h3><p>Una <b>dieta equilibrada</b> aporta la energía justa y todos los nutrientes en la proporción adecuada. Las recomendaciones dicen que, de la energía total, entre un <mark>50 y un 55 %</mark> venga de los glúcidos (sobre todo complejos), entre un <mark>30 y un 35 %</mark> de los lípidos y entre un <mark>10 y un 15 %</mark> de las proteínas. Se reparte en cuatro o cinco comidas, sin saltarse el desayuno. El <b>plato saludable</b> lo resume: la mitad, verduras y fruta; un cuarto, cereales integrales; un cuarto, proteína; y agua para beber.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfico de sectores: 55 por ciento glúcidos, 30 por ciento lípidos y 15 por ciento proteínas">${BG}
        ${sector(80, 92, 60, 0, 198, "var(--sun)")}${sector(80, 92, 60, 198, 306, "var(--inf)")}${sector(80, 92, 60, 306, 360, "var(--red)")}
        ${[["glúcidos 55 %", "var(--sun)"], ["lípidos 30 %", "var(--inf)"], ["proteínas 15 %", "var(--red)"]].map(([n, c], i) => `<rect x="156" y="${58 + i * 28}" width="14" height="14" rx="3" fill="${c}"/>${t(176, 70 + i * 28, n, { size: 11, anchor: "start" })}`).join("")}
        ${t(130, 172, "de la energía total del día", { size: 11, color: "var(--muted)" })}</svg>`,
      video: { id: "6ZtiP7bI538", titulo: "ALIMENTACIÓN SANA. LA PIRÁMIDE ALIMENTARIA", canal: "Happy Learning Español", vistas: 1398870 },
    },
    {
      html: `<h3>La dieta mediterránea</h3><p>La <b>dieta mediterránea</b> es la forma tradicional de comer en España, Italia o Grecia, y la UNESCO la declaró Patrimonio Cultural Inmaterial. Se basa en el <mark>aceite de oliva</mark> como grasa principal, mucha fruta, verdura, legumbres y cereales, pescado varias veces por semana, frutos secos y poca carne roja. También incluye cocinar en casa, comer en compañía y moverse a diario. Se relaciona con menos enfermedades del corazón y más esperanza de vida, pero cada vez se sigue menos y se sustituye por comida ultraprocesada.</p>`,
    },
    {
      html: `<h3>Leer la etiqueta de un alimento</h3><p>Los envases deben incluir la <b>información nutricional</b> por cada 100 g: energía, grasas, grasas saturadas, hidratos de carbono, azúcares, proteínas y sal. Los <mark>ingredientes</mark> aparecen ordenados de mayor a menor cantidad: si el azúcar está entre los primeros, el producto es muy dulce. Así se comparan dos cereales de desayuno:</p>${tabla(["Por 100 g", "Cereales A", "Cereales B"], [["Energía", "380 kcal", "360 kcal"], ["Azúcares", "35 g", "6 g"], ["Fibra", "2 g", "10 g"], ["Sal", "1,2 g", "0,3 g"]])}<p>B es mejor opción: menos azúcar y sal, y mucha más fibra.</p>`,
    },
    {
      html: `<h3>Cuando la alimentación falla</h3><p>La <b>desnutrición</b> aparece cuando faltan energía o nutrientes; afecta a millones de personas en el mundo. En los países ricos preocupan más la <b>obesidad</b> y el sobrepeso, que aumentan el riesgo de diabetes tipo 2, hipertensión y problemas de corazón. Los <mark>trastornos de la conducta alimentaria</mark>, como la <b>anorexia</b> (miedo intenso a engordar y restricción extrema) y la <b>bulimia</b> (atracones seguidos de vómitos o ayunos), son enfermedades mentales graves que suelen empezar en la adolescencia. Necesitan ayuda profesional y se curan mejor cuanto antes se detectan.</p>`,
    },
  ],
  figura: {
    titulo: "El plato saludable",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Plato dividido: mitad verduras y frutas, un cuarto cereales integrales y un cuarto proteínas; al lado, un vaso de agua y aceite de oliva">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      <circle cx="200" cy="130" r="108" fill="var(--card)" stroke="var(--line)" stroke-width="6"/>
      ${sector(200, 130, 100, 180, 360, "var(--leaf)")}${sector(200, 130, 100, 0, 90, "var(--sun)")}${sector(200, 130, 100, 90, 180, "var(--red)")}
      ${t(150, 118, "verduras", { size: 16, color: "#fff", font: D })}${t(150, 138, "y frutas", { size: 16, color: "#fff", font: D })}${t(150, 160, "½", { size: 15, color: "#fff" })}
      ${t(250, 100, "cereales", { size: 14, color: "var(--ink)", font: D })}${t(250, 118, "integrales ¼", { size: 12 })}
      ${t(250, 176, "proteínas ¼", { size: 14, color: "#fff", font: D })}
      <path d="M380 70 H 420 L 414 190 H 386 Z" fill="var(--water)" fill-opacity=".4" stroke="var(--ink)" stroke-width="2"/>${t(400, 214, "agua", { size: 14 })}
      <path d="M470 100 Q 470 84 482 80 V 64 H 494 V 80 Q 506 84 506 100 V 190 H 470 Z" fill="var(--sun)" fill-opacity=".6" stroke="var(--ink)" stroke-width="2"/>${t(488, 214, "aceite de oliva", { size: 14 })}
      ${t(560, 120, "y moverse", { size: 14, color: "var(--pen)", font: D })}${t(560, 140, "cada día", { size: 14, color: "var(--pen)", font: D })}
    </svg>`,
  },
  video: { id: "ETIwmxTAxB4", titulo: "Nutrición: ¿Qué es la nutrición?", canal: "Grupo Hospitalario Kennedy", vistas: 909856, megusta: 0, busqueda: "nutrición y alimentación nutrientes" },
  ejemplos: [
    { enunciado: "Un yogur de 125 g tiene 5 g de proteínas, 12 g de glúcidos y 4 g de lípidos. ¿Cuánta energía aporta?",
      pasos: ["Proteínas: 5 g · 4 kcal/g = 20 kcal.", "Glúcidos: 12 g · 4 kcal/g = 48 kcal.", "Lípidos: 4 g · 9 kcal/g = 36 kcal.", "Sumamos: 20 + 48 + 36 = 104 kcal."],
      resultado: "unas 104 kcal." },
    { enunciado: "Laura necesita 2.200 kcal al día. ¿Cuántas deberían venir de los glúcidos (55 %)? ¿Cuántos gramos son?",
      pasos: ["55 % de 2.200 = 0,55 · 2.200 = 1.210 kcal.", "Cada gramo de glúcido da 4 kcal.", "1.210 / 4 = 302,5 g."],
      resultado: "1.210 kcal, unos 300 g de glúcidos." },
    { enunciado: "Desayuno: un vaso de zumo de bote y un bollo industrial. Propón un cambio para hacerlo más equilibrado.",
      pasos: ["El zumo de bote y el bollo tienen mucho azúcar y grasas saturadas, y poca fibra.", "Cambiamos el zumo por una pieza de fruta entera (fibra y vitaminas).", "Cambiamos el bollo por pan integral con aceite de oliva y tomate (glúcidos complejos y grasa saludable).", "Añadimos un lácteo (proteínas y calcio)."],
      resultado: "fruta + tostada integral con aceite y tomate + leche o yogur." },
  ],
  errores: [
    "Usar «alimentación» y «nutrición» como sinónimos: la primera es voluntaria y la segunda no.",
    "Pensar que todas las grasas son malas: las insaturadas son necesarias y saludables.",
    "Creer que la fibra es un nutriente: no se digiere, aunque es imprescindible.",
    "Calcular la energía de los lípidos con 4 kcal/g: dan 9 kcal/g.",
    "Saltarse el desayuno o comidas para adelgazar: desordena el apetito y la energía.",
    "Fiarse del frontal del envase sin leer los ingredientes y la tabla nutricional.",
  ],
  ejercicios: [
    { q: "Explica la diferencia entre alimentación y nutrición con un ejemplo.", sol: "Alimentación: elegir y comer un bocadillo (voluntario). Nutrición: digerir el pan y el queso, absorber sus nutrientes y llevarlos a las células (involuntario)." },
    { q: "Clasifica por su función principal: almidón, calcio, vitamina C, aceite, proteína de la carne.", sol: "Almidón: energética. Calcio: estructural y reguladora. Vitamina C: reguladora. Aceite: energética. Proteína: estructural." },
    { q: "Calcula la energía de 30 g de almendras con 6 g de proteínas, 3 g de glúcidos y 15 g de lípidos.", sol: "6 · 4 + 3 · 4 + 15 · 9 = 24 + 12 + 135 = 171 kcal." },
    { q: "¿Por qué hay que combinar legumbres con cereales en una dieta vegetariana?", sol: "Porque cada grupo carece de algún aminoácido esencial y juntos aportan todos los necesarios para fabricar proteínas." },
    { q: "Nombra una enfermedad por falta de vitamina y explica cómo se previene.", sol: "Escorbuto, por falta de vitamina C. Se previene comiendo fruta y verdura fresca (cítricos, kiwi, pimiento)." },
    { q: "Pedro necesita 2.500 kcal. ¿Cuántas kcal deberían venir como máximo de los lípidos (35 %)? ¿Cuántos gramos son?", sol: "0,35 · 2.500 = 875 kcal. 875 / 9 ≈ 97 g de lípidos." },
    { q: "Explica qué es el metabolismo basal.", sol: "Es la energía que gasta el cuerpo en reposo para mantener las funciones básicas: respirar, latir, mantener la temperatura, renovar células." },
    { q: "Cita cuatro características de la dieta mediterránea.", sol: "Aceite de oliva como grasa principal, mucha fruta, verdura y legumbres, pescado frecuente y poca carne roja; además, comer en compañía y actividad física." },
    { q: "En una etiqueta, el primer ingrediente es «azúcar». ¿Qué significa?", sol: "Que es el ingrediente que está en mayor cantidad, porque se ordenan de mayor a menor." },
    { q: "¿Qué son los trastornos de la conducta alimentaria? Cita dos.", sol: "Enfermedades mentales en las que la relación con la comida y el cuerpo se altera gravemente. Por ejemplo, anorexia y bulimia." },
  ],
  quiz: [
    { q: "La nutrición es…", o: ["voluntaria", "involuntaria", "solo comer"], a: 1, e: "La hace el cuerpo sin que la controlemos." },
    { q: "La principal fuente de energía son…", o: ["los glúcidos", "las vitaminas", "los minerales"], a: 0, e: "Los glúcidos." },
    { q: "1 g de lípidos aporta…", o: ["4 kcal", "9 kcal", "0 kcal"], a: 1, e: "9 kcal." },
    { q: "Las proteínas están formadas por…", o: ["glucosa", "aminoácidos", "ácidos grasos"], a: 1, e: "Aminoácidos." },
    { q: "El hierro es necesario para…", o: ["la sangre", "la vista", "el pelo solo"], a: 0, e: "Forma parte de la hemoglobina." },
    { q: "El agua supone en el adulto aproximadamente…", o: ["el 20 %", "el 60 %", "el 95 %"], a: 1, e: "Alrededor del 60 %." },
    { q: "La fibra…", o: ["se digiere y da mucha energía", "no se digiere y ayuda al intestino", "es una vitamina"], a: 1, e: "No se digiere, pero es imprescindible." },
    { q: "De la energía del día, los glúcidos deben aportar…", o: ["un 10-15 %", "un 30-35 %", "un 50-55 %"], a: 2, e: "Alrededor de la mitad." },
    { q: "La grasa típica de la dieta mediterránea es…", o: ["la mantequilla", "el aceite de oliva", "la manteca"], a: 1, e: "El aceite de oliva." },
    { q: "En la etiqueta, los ingredientes van…", o: ["en orden alfabético", "de mayor a menor cantidad", "al azar"], a: 1, e: "De mayor a menor cantidad." },
  ],
  examen: [
    { q: "Un alimento con 10 g de glúcidos y 2 g de lípidos aporta…", o: ["58 kcal", "48 kcal", "120 kcal"], a: 0, e: "10 · 4 + 2 · 9 = 58." },
    { q: "La falta de vitamina D afecta sobre todo a…", o: ["los huesos", "la vista", "la piel solo"], a: 0, e: "Ayuda a absorber el calcio." },
    { q: "Los aminoácidos esenciales…", o: ["los fabrica el cuerpo", "hay que tomarlos con la dieta", "no existen"], a: 1, e: "El cuerpo no los fabrica." },
  ],
  feynman: ["Por qué alimentación y nutrición son cosas distintas", "Qué hace cada tipo de nutriente", "Cómo es una dieta equilibrada y cómo se lee una etiqueta"],
  mapa: mapa("NUTRICIÓN", "var(--eso)", [
    ["Energéticos", "glúcidos 4 kcal/g · lípidos 9 kcal/g", "var(--sun)"],
    ["Estructurales", "proteínas · calcio", "var(--red)"],
    ["Reguladores", "vitaminas · minerales · agua", "var(--leaf)"],
    ["Dieta equilibrada", "55 % · 30 % · 15 % · mediterránea", "var(--pen)"],
  ], 280),
  tarjetas: [
    ["Alimentación", "Elegir y comer los alimentos. Es voluntaria."],
    ["Nutrición", "Procesos del cuerpo para obtener y usar los nutrientes. Es involuntaria."],
    ["Energía por gramo", "Glúcidos y proteínas: 4 kcal. Lípidos: 9 kcal."],
    ["Aminoácidos esenciales", "Los que el cuerpo no fabrica y debe tomar con la dieta."],
    ["Metabolismo basal", "Energía que gastamos en reposo para mantenernos vivos."],
    ["Reparto de la energía", "50-55 % glúcidos, 30-35 % lípidos, 10-15 % proteínas."],
    ["Fibra", "No se digiere; ayuda al intestino y da saciedad."],
    ["Dieta mediterránea", "Aceite de oliva, fruta, verdura, legumbres, pescado y poca carne roja."],
  ],
  familias: ["Leed juntos las etiquetas de tres productos del desayuno y comparad azúcar, fibra y sal.", "Planificad un menú semanal siguiendo el plato saludable.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Salud y enfermedad: alimentación y nutrición, nutrientes y su función, dietas saludables, etiquetado y trastornos de la conducta alimentaria (RD 217/2022, Biología y Geología 1º a 3º).",
    ideas: ["Diario de alimentación de tres días y cálculo aproximado de la energía y del reparto de nutrientes.", "Análisis comparado de etiquetas de productos del supermercado.", "Diseño por grupos de un menú escolar equilibrado."],
  },
  fuentes: [RD, wiki("Dieta mediterránea", "Dieta_mediterr%C3%A1nea"), wiki("Nutriente", "Nutriente")],
  revisado: "2026-11-12",
};
