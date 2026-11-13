// Biología y Geología 3º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso3L4.js.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Sector circular de un gráfico de tarta (ángulos en grados, 0 arriba).
const sector = (cx, cy, r, a0, a1, c) => {
  const p = (a) => [cx + r * Math.sin((a * Math.PI) / 180), cy - r * Math.cos((a * Math.PI) / 180)].map((v) => v.toFixed(1)).join(" ");
  return `<path d="M${cx} ${cy} L ${p(a0)} A ${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${p(a1)} Z" fill="${c}"/>`;
};
const L = require("./_eso3L4");

module.exports = {
  materia: "Biología y Geología",
  curso: "3-eso",
  titulo: "La alimentación y la nutrición",
  minutos: 105,
  objetivos: [
    "Distinguir alimentación y nutrición",
    "Conocer los nutrientes, su función y los alimentos que los contienen",
    "Calcular la energía de un alimento o un menú y compararla con las necesidades diarias",
    "Diseñar una dieta equilibrada basada en la dieta mediterránea",
    "Leer el etiquetado nutricional y reconocer los alimentos ultraprocesados",
    "Conocer la seguridad alimentaria y los trastornos relacionados con la alimentación",
  ],
  claves: ["nutriente", "glúcido", "lípido", "proteína", "vitamina", "kilocaloría", "dieta equilibrada", "dieta mediterránea", "ultraprocesado"],
  pregunta: {
    texto: "Un refresco de lata y un plátano tienen casi la misma energía, unas 140 kcal. ¿Da igual tomar uno que otro?",
    respuesta: "No. El refresco solo aporta <b>azúcar añadido</b>: son «calorías vacías». El plátano trae además <mark>fibra, potasio y vitaminas</mark>, y su azúcar se absorbe más despacio. Lo importante no es solo cuánta energía comemos, sino <b>qué nutrientes</b> la acompañan.",
  },
  lectura: {
    titulo: "El misterio de los marineros enfermos",
    html: `<p>En el siglo XVIII, en los largos viajes por mar, morían más marineros por una enfermedad misteriosa que por las tormentas o las batallas. Primero se sentían cansados; después les sangraban las encías, se les caían los dientes y las heridas viejas se les volvían a abrir. La llamaban <b>escorbuto</b>.</p>
<p>En 1747, el médico escocés James Lind hizo uno de los primeros experimentos controlados de la historia. Repartió a doce marineros enfermos en seis parejas y dio a cada pareja un remedio distinto: sidra, vinagre, agua de mar… y a una de ellas, naranjas y limones. Solo esos dos se recuperaron en pocos días. Hoy sabemos por qué: el escorbuto se debe a la falta de <b>vitamina C</b>, que está en la fruta fresca y que el cuerpo no puede fabricar.</p>
<p>La historia de Lind muestra dos ideas que recorren este tema. La primera: no basta con comer mucho, hay que comer de todo, porque cada nutriente tiene una función que ningún otro puede hacer. La segunda: la ciencia de la nutrición se construye con experimentos y datos, no con modas. Con lo que aprendas podrás decidir mejor qué pones en tu plato.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Alimentación y nutrición no son lo mismo</h3><p>La <b>alimentación</b> es elegir, preparar y comer los alimentos. Es un acto <mark>voluntario</mark> y educable: decidimos qué comemos, cuánto y cuándo. La <b>nutrición</b> es lo que hace el cuerpo después, sin que lo controlemos: digiere los alimentos, absorbe los nutrientes, los reparte a todas las células, los usa y elimina los desechos. En ella trabajan juntos cuatro aparatos: digestivo, respiratorio, circulatorio y excretor. Podemos alimentarnos mucho y estar mal nutridos si la dieta no es variada.</p><p>La nutrición tiene un último destino: la <mark>célula</mark>. Allí los nutrientes se usan para obtener energía en las mitocondrias o para fabricar nuevas moléculas. Los aparatos del cuerpo son, por tanto, un enorme sistema de reparto que lleva a cada célula lo que necesita y se lleva lo que sobra.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La alimentación es voluntaria: elegir y comer. La nutrición es involuntaria: digerir, absorber, repartir, usar y eliminar">${BG}
        ${caja(14, 24, 100, 60, "ALIMENTACIÓN", "var(--leaf)", { size: 11 })}${t(64, 100, "elegir · preparar · comer", { size: 9, weight: 400 })}${t(64, 116, "voluntaria", { size: 11, color: "var(--leaf)" })}
        ${fl(118, 54, 142, 54)}
        ${caja(146, 24, 100, 60, "NUTRICIÓN", "var(--pen)", { size: 11 })}
        ${["digerir", "absorber", "repartir", "usar", "eliminar"].map((p, i) => t(196, 100 + i * 14, p, { size: 9, weight: 400 })).join("")}${t(196, 176, "involuntaria", { size: 11, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>1.2 Los nutrientes</h3><p>Los <b>nutrientes</b> son las sustancias de los alimentos que el cuerpo utiliza. Según su función, pueden ser <mark>energéticos</mark> (dan energía), <mark>estructurales o plásticos</mark> (forman y reparan el cuerpo) y <mark>reguladores</mark> (controlan las reacciones químicas). Ningún alimento, salvo la leche materna para el bebé, los tiene todos en la cantidad necesaria. Por eso hay que comer de todo.</p>${tabla(["Nutriente", "Función principal", "Alimentos ricos"], [["Glúcidos", "energética", "pan, pasta, arroz, legumbres, fruta"], ["Lípidos", "energética y de reserva", "aceite, frutos secos, mantequilla"], ["Proteínas", "estructural", "carne, pescado, huevos, legumbres"], ["Vitaminas", "reguladora", "frutas, verduras"], ["Minerales", "reguladora y estructural", "lácteos (calcio), carne (hierro)"], ["Agua", "medio de todas las reacciones", "agua, frutas, verduras"]])}<p>Los nutrientes se dividen también en <b>orgánicos</b> (glúcidos, lípidos, proteínas y vitaminas), que contienen carbono y proceden de los seres vivos, e <b>inorgánicos</b> (agua y sales minerales). Los alimentos se agrupan según el nutriente que más abunda en ellos: cereales y tubérculos, frutas y verduras, lácteos, carnes, pescados y huevos, legumbres y frutos secos, y aceites.</p>`,
      svg: L.radial("Los seis tipos de nutrientes", "Nutrientes", ["Glúcidos", "Lípidos", "Proteínas", "Vitaminas", "Minerales", "Agua"], "var(--leaf)"),
      video: { id: "OyI0H3BSy8A", titulo: "¿Qué función cumplen los nutrientes en nuestro organismo?", canal: "TICMAS Educación", vistas: 553807 },
    },
    {
      html: `<h3>1.3 Glúcidos y lípidos: el combustible</h3><p>Los <b>glúcidos</b> o hidratos de carbono son la principal fuente de energía. Los <b>simples</b> (glucosa, fructosa, sacarosa) son dulces y se absorben deprisa; los <b>complejos</b>, como el almidón del pan, se digieren despacio y dan energía durante más tiempo. Cada gramo de glúcido aporta <mark>4 kcal</mark>. Los <b>lípidos</b> o grasas son una reserva de energía muy concentrada: <mark>9 kcal por gramo</mark>. Además forman las membranas celulares y aíslan del frío. Las grasas insaturadas del aceite de oliva o del pescado azul son más saludables que las saturadas de la bollería.</p><p>Conviene limitar los <b>azúcares libres</b>, los que se añaden a refrescos, bollería o golosinas: la Organización Mundial de la Salud recomienda que no superen el 10 % de la energía diaria, y mejor aún el 5 %. También hay que evitar las <b>grasas trans</b>, que aparecen en algunos productos industriales y elevan el colesterol «malo».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un gramo de glúcidos o proteínas da 4 kilocalorías; un gramo de lípidos da 9">${BG}
        ${[["glúcidos", 4, "var(--sun)"], ["proteínas", 4, "var(--red)"], ["lípidos", 9, "var(--inf)"]].map(([n, k, c], i) => `<rect x="${40 + i * 70}" y="${140 - k * 12}" width="44" height="${k * 12}" rx="5" fill="${c}"/>${t(62 + i * 70, 134 - k * 12, k + " kcal", { size: 12 })}${t(62 + i * 70, 158, n, { size: 11 })}`).join("")}
        <path d="M24 140 H 240" stroke="var(--muted)" stroke-width="2"/>${t(130, 174, "energía por cada gramo", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>1.4 Proteínas, vitaminas y minerales</h3><p>Las <b>proteínas</b> están formadas por <b>aminoácidos</b>. Construyen músculos, piel, pelo, enzimas y anticuerpos. Nuestro cuerpo no puede fabricar nueve aminoácidos, los <mark>esenciales</mark>, y tiene que tomarlos de la dieta. Las proteínas animales los tienen todos; las vegetales se completan combinando, por ejemplo, legumbres con cereales. Las <b>vitaminas</b> se necesitan en cantidades muy pequeñas, pero su falta produce enfermedades: sin vitamina C aparece el escorbuto y sin vitamina D se debilitan los huesos. Entre los <b>minerales</b> destacan el calcio (huesos), el hierro (sangre) y el yodo (tiroides).</p><p>Las vitaminas se clasifican en <b>liposolubles</b> (A, D, E y K), que se disuelven en grasa y se almacenan en el cuerpo, e <b>hidrosolubles</b> (C y las del grupo B), que se disuelven en agua y se eliminan con la orina, por lo que hay que tomarlas a diario. La vitamina D se fabrica en la piel con la luz del sol, y la B12 solo está en alimentos de origen animal.</p>`,
      svg: L.tabla("Algunas vitaminas y minerales, su función y dónde están", ["Nutriente", "Función", "Alimentos"], [["Vitamina A", "vista, piel", "zanahoria, huevo"], ["Vitamina C", "defensas, encías", "naranja, kiwi"], ["Vitamina D", "huesos", "pescado azul, sol"], ["Hierro", "glóbulos rojos", "legumbres, carne"], ["Calcio", "huesos y dientes", "leche, sardinas"]]),
    },
    {
      html: `<h3>1.5 El agua y la fibra</h3><p>El <b>agua</b> forma alrededor del <mark>60 % del cuerpo</mark> de un adulto. Disuelve y transporta los nutrientes, regula la temperatura con el sudor y elimina desechos en la orina. Perdemos unos 2,5 litros al día, que recuperamos bebiendo y con el agua de los alimentos. La <b>fibra</b> no es un nutriente porque no la digerimos, pero es imprescindible: ayuda al tránsito intestinal, alimenta a las bacterias buenas del intestino y da sensación de saciedad. Está en las frutas, las verduras, las legumbres y los cereales integrales.</p><p>La sed aparece cuando ya hemos perdido algo de agua, así que conviene beber a lo largo del día, sobre todo si hace calor o hacemos deporte. El agua es la mejor bebida: los refrescos y los zumos industriales aportan mucho azúcar. Se recomienda tomar entre 25 y 30 gramos de fibra al día, pero la mayoría de los adolescentes no llegan ni a la mitad.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El cuerpo es un 60 por ciento agua; entradas y salidas diarias de agua">${BG}
        <g transform="translate(70 92)"><circle cy="-56" r="14" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-24 -38 H 24 L 20 50 H -20 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-22.6 -2 H 22.6 L 20 50 H -20 Z" fill="var(--water)" fill-opacity=".7"/></g>
        ${t(70, 116, "60 %", { size: 16, color: "#fff" })}
        ${t(186, 30, "cada día", { size: 12, color: "var(--muted)" })}
        ${t(150, 56, "entra", { size: 11, color: "var(--leaf)", anchor: "start" })}${t(150, 72, "bebida 1,5 L", { size: 10, anchor: "start", weight: 400 })}${t(150, 86, "alimentos 1 L", { size: 10, anchor: "start", weight: 400 })}
        ${t(150, 116, "sale", { size: 11, color: "var(--red)", anchor: "start" })}${t(150, 132, "orina 1,5 L", { size: 10, anchor: "start", weight: 400 })}${t(150, 146, "sudor y aliento 0,9 L", { size: 10, anchor: "start", weight: 400 })}${t(150, 160, "heces 0,1 L", { size: 10, anchor: "start", weight: 400 })}</svg>`,
    },
    {
      html: `<h3>2.1 ¿Cuánta energía necesitamos?</h3><p>La energía de los alimentos se mide en <b>kilocalorías</b> (kcal). Aunque estemos quietos, gastamos energía en respirar, latir y mantener la temperatura: es el <mark>metabolismo basal</mark>. A eso se suma el gasto de la actividad física. Un adolescente necesita entre 2.000 y 2.800 kcal al día, según su edad, su sexo y el ejercicio que haga. Si comemos más energía de la que gastamos, el exceso se guarda como grasa; si comemos menos, el cuerpo usa sus reservas.</p><p>El gasto total de una persona es la suma del <b>metabolismo basal</b>, la energía de la <b>actividad física</b> y la que se gasta en digerir los alimentos. En la adolescencia las necesidades son altas porque el cuerpo está creciendo. Un ciclista de competición puede gastar más de 5.000 kcal en un día de carrera, mientras que una persona sedentaria apenas pasa de 1.800.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Balanza energética: energía que entra con los alimentos frente a energía que se gasta">${BG}
        <path d="M130 50 V 140 M100 150 H 160" stroke="var(--ink)" stroke-width="4"/><path d="M50 62 H 210" stroke="var(--ink)" stroke-width="4"/>
        <path d="M50 62 L 28 100 H 72 Z M210 62 L 188 100 H 232 Z" fill="none" stroke="var(--muted)" stroke-width="2"/>
        <path d="M28 100 Q 50 116 72 100 Z" fill="var(--leaf)" fill-opacity=".5"/><path d="M188 100 Q 210 116 232 100 Z" fill="var(--red)" fill-opacity=".5"/>
        ${t(50, 134, "entra", { size: 12, color: "var(--leaf)" })}${t(50, 150, "alimentos", { size: 10, weight: 400 })}
        ${t(210, 134, "sale", { size: 12, color: "var(--red)" })}${t(210, 150, "basal + actividad", { size: 10, weight: 400 })}
        ${t(130, 32, "balance energético", { size: 12, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>2.2 Calcular la energía de un menú</h3><p>Para saber cuánta energía aporta un alimento basta con conocer cuántos gramos tiene de cada nutriente energético y multiplicar: <mark>glúcidos y proteínas, 4 kcal/g; lípidos, 9 kcal/g</mark>. El agua, las vitaminas, los minerales y la fibra no aportan energía (la fibra, muy poca).</p><p>Por ejemplo, un plato de macarrones con 80 g de pasta seca contiene unos 58 g de glúcidos, 10 g de proteínas y 1 g de lípidos: 58 · 4 + 10 · 4 + 1 · 9 = 281 kcal. Si se añaden 10 g de aceite (10 g de lípidos), se suman 90 kcal más. Sumando todos los platos de una comida obtenemos su energía total y podemos compararla con lo que necesitamos.</p><p>También se puede calcular el <b>porcentaje</b> de energía que procede de cada nutriente y comprobar si se acerca a las recomendaciones: si de 600 kcal de una comida 300 vienen de lípidos, el 50 % es grasa, demasiado.</p>`,
      svg: L.barras("Energía de una comida: macarrones, aceite, pan, fruta y yogur", [["Macarrones", 281, "281 kcal"], ["Aceite 10 g", 90, "90 kcal"], ["Pan 40 g", 100, "100 kcal"], ["Manzana", 70, "70 kcal"], ["Yogur", 104, "104 kcal"]], "Total: 645 kcal", 300),
    },
    {
      html: `<h3>2.3 La dieta equilibrada</h3><p>Una <b>dieta equilibrada</b> aporta la energía justa y todos los nutrientes en la proporción adecuada. Las recomendaciones dicen que, de la energía total, entre un <mark>50 y un 55 %</mark> venga de los glúcidos (sobre todo complejos), entre un <mark>30 y un 35 %</mark> de los lípidos y entre un <mark>10 y un 15 %</mark> de las proteínas. Se reparte en cuatro o cinco comidas, sin saltarse el desayuno. El <b>plato saludable</b> lo resume: la mitad, verduras y fruta; un cuarto, cereales integrales; un cuarto, proteína; y agua para beber.</p><p>La dieta debe ser también <b>variada</b>, porque cada alimento aporta nutrientes distintos, y <b>adaptada</b> a cada persona: no comen igual un bebé, una deportista, una embarazada o un anciano. El desayuno debería cubrir alrededor del 20-25 % de la energía del día y la comida principal, un 30-35 %.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfico de sectores: 55 por ciento glúcidos, 30 por ciento lípidos y 15 por ciento proteínas">${BG}
        ${sector(80, 92, 60, 0, 198, "var(--sun)")}${sector(80, 92, 60, 198, 306, "var(--inf)")}${sector(80, 92, 60, 306, 360, "var(--red)")}
        ${[["glúcidos 55 %", "var(--sun)"], ["lípidos 30 %", "var(--inf)"], ["proteínas 15 %", "var(--red)"]].map(([n, c], i) => `<rect x="156" y="${58 + i * 28}" width="14" height="14" rx="3" fill="${c}"/>${t(176, 70 + i * 28, n, { size: 11, anchor: "start" })}`).join("")}
        ${t(130, 172, "de la energía total del día", { size: 11, color: "var(--muted)" })}</svg>`,
      video: { id: "6ZtiP7bI538", titulo: "ALIMENTACIÓN SANA. LA PIRÁMIDE ALIMENTARIA", canal: "Happy Learning Español", vistas: 1398870 },
    },
    {
      html: `<h3>2.4 La dieta mediterránea</h3><p>La <b>dieta mediterránea</b> es la forma tradicional de comer en España, Italia o Grecia, y la UNESCO la declaró Patrimonio Cultural Inmaterial. Se basa en el <mark>aceite de oliva</mark> como grasa principal, mucha fruta, verdura, legumbres y cereales, pescado varias veces por semana, frutos secos y poca carne roja. También incluye cocinar en casa, comer en compañía y moverse a diario. Se relaciona con menos enfermedades del corazón y más esperanza de vida, pero cada vez se sigue menos y se sustituye por comida ultraprocesada.</p><p>Su <b>pirámide</b> ordena los alimentos según la frecuencia con que se recomienda tomarlos: en la base, todos los días, cereales integrales, frutas, verduras, aceite de oliva y agua; en el medio, varias veces por semana, legumbres, pescado, huevos, lácteos y frutos secos; y en la cúspide, de forma ocasional, carnes rojas, embutidos y dulces. La base de la pirámide es, además, la actividad física diaria y la comida en familia.</p>`,
      svg: L.piramide("Pirámide de la dieta mediterránea", [["Diario: cereales, fruta, verdura, aceite", "var(--leaf)"], ["Semanal: legumbres, pescado, huevos", "var(--pen)"], ["Ocasional: carne roja, dulces", "var(--red)"]], "de la base (más) a la cúspide (menos)"),
    },
    {
      html: `<h3>2.5 Dietas especiales: vegetarianas, alergias e intolerancias</h3><p>Hay personas que siguen dietas distintas por motivos de salud, éticos o religiosos. Una <mark>dieta vegetariana</mark> no incluye carne ni pescado, aunque puede incluir huevos y lácteos; una <b>vegana</b> no incluye ningún alimento de origen animal. Bien planificadas son saludables, pero deben combinar legumbres y cereales para obtener todos los aminoácidos esenciales y, en el caso de la vegana, tomar un suplemento de <b>vitamina B12</b>.</p><p>Una <mark>alergia alimentaria</mark> es una reacción del sistema inmunitario frente a una proteína de un alimento (leche, huevo, frutos secos, marisco); puede ser grave e incluso mortal, por eso los envases deben destacar los alérgenos. Una <mark>intolerancia</mark> es un problema digestivo, no inmunitario: en la intolerancia a la lactosa falta la enzima que digiere el azúcar de la leche. La <b>enfermedad celíaca</b> es una reacción del intestino al gluten del trigo, la cebada y el centeno, y obliga a seguir una dieta sin gluten de por vida.</p>`,
      svg: L.compara("Diferencias entre alergia e intolerancia alimentaria", ["Alergia", "var(--red)", ["sistema inmunitario", "reacción rápida", "puede ser grave", "frutos secos, huevo"]], ["Intolerancia", "var(--sun)", ["digestión", "molestias digestivas", "depende de la dosis", "lactosa"]]),
    },
    {
      html: `<h3>3.1 Leer la etiqueta de un alimento</h3><p>Los envases deben incluir la <b>información nutricional</b> por cada 100 g: energía, grasas, grasas saturadas, hidratos de carbono, azúcares, proteínas y sal. Los <mark>ingredientes</mark> aparecen ordenados de mayor a menor cantidad: si el azúcar está entre los primeros, el producto es muy dulce. Así se comparan dos cereales de desayuno:</p>${tabla(["Por 100 g", "Cereales A", "Cereales B"], [["Energía", "380 kcal", "360 kcal"], ["Azúcares", "35 g", "6 g"], ["Fibra", "2 g", "10 g"], ["Sal", "1,2 g", "0,3 g"]])}<p>B es mejor opción: menos azúcar y sal, y mucha más fibra.</p><p>En España se usa además el <b>Nutri-Score</b>, una etiqueta con cinco letras y colores, de la A verde a la E roja, que resume la calidad nutricional del producto. Es útil para comparar alimentos de la misma categoría, pero no sustituye a la lectura de los ingredientes. Fíjate también en la <b>ración</b>: un paquete puede contener varias.</p>`,
      svg: L.tabla("Comparación de la etiqueta de dos cereales por cada 100 g", ["Por 100 g", "Cereal A", "Cereal B"], [["Energía", "390 kcal", "360 kcal"], ["Azúcares", "35 g", "8 g"], ["Fibra", "2 g", "10 g"], ["Sal", "1,1 g", "0,3 g"]]),
      video: { id: "s-ZNbf8Bn3w", titulo: "¿Cómo leer etiquetas nutricionales fácilmente?", canal: "Balanceando La Vida", vistas: 141845 },
    },
    {
      html: `<h3>3.2 Alimentos frescos, procesados y ultraprocesados</h3><p>No todos los alimentos envasados son iguales. Los <mark>alimentos frescos o mínimamente procesados</mark> llegan casi como en la naturaleza: fruta, verdura, huevos, legumbres secas, leche, pescado o carne. Los <b>procesados</b> se elaboran añadiendo sal, azúcar o aceite a un alimento: el pan, el queso, las conservas de atún o las legumbres cocidas.</p><p>Los <mark>ultraprocesados</mark> son productos industriales con muchos ingredientes que no usaríamos en una cocina: jarabes de glucosa, aceites refinados, aromas, colorantes o edulcorantes. Son ejemplos los refrescos, la bollería, las patatas fritas de bolsa, los nuggets o muchos cereales azucarados. Suelen tener mucha energía, azúcar, sal y grasas de mala calidad y poca fibra, y están diseñados para que comamos más. Su consumo elevado se asocia a obesidad, diabetes y enfermedades del corazón.</p><p>Los <b>aditivos</b> (conservantes, colorantes, espesantes) aparecen en la etiqueta con su nombre o con un código que empieza por E. Están autorizados y controlados, pero una lista larga de ellos es una pista de que el producto es ultraprocesado.</p>`,
      svg: L.flujo("Del alimento fresco al ultraprocesado", ["Fresco: manzana, huevo, lentejas", "Procesado: pan, queso, conservas", "Ultraprocesado: refrescos, bollería, snacks"], "Grado de procesamiento"),
    },
    {
      html: `<h3>3.3 La seguridad alimentaria</h3><p>Un alimento seguro no debe tener microorganismos ni sustancias que causen enfermedades. Las <mark>toxiinfecciones alimentarias</mark>, como la salmonelosis o la producida por la bacteria <i>Listeria</i>, se deben a alimentos mal conservados o mal cocinados y provocan vómitos, diarrea y fiebre.</p><p>Para evitarlas hay que seguir unas normas básicas: <b>lavarse las manos</b> antes de cocinar; separar los alimentos crudos de los cocinados; <b>cocinar bien</b> la carne, los huevos y el pescado; mantener la cadena del frío (el frigorífico, por debajo de 5 °C) y no descongelar a temperatura ambiente.</p><p>Las técnicas de <b>conservación</b> frenan el crecimiento de los microbios: el frío (refrigeración y congelación), el calor (pasteurización y esterilización), la deshidratación, el salado, el ahumado o el envasado al vacío. En las etiquetas, la <b>fecha de caducidad</b> indica hasta cuándo es seguro el alimento; la <b>consumo preferente</b>, hasta cuándo mantiene su calidad, y se puede comer después si el envase está bien.</p>`,
      svg: L.radial("Normas para evitar toxiinfecciones alimentarias", "Comer seguro", ["Lavar las manos", "Cocinar bien", "Cadena del frío", "Separar crudo"], "var(--pen)"),
    },
    {
      html: `<h3>3.4 Cuando la alimentación falla</h3><p>La <b>desnutrición</b> aparece cuando faltan energía o nutrientes; afecta a millones de personas en el mundo. En los países ricos preocupan más la <b>obesidad</b> y el sobrepeso, que aumentan el riesgo de diabetes tipo 2, hipertensión y problemas de corazón. Los <mark>trastornos de la conducta alimentaria</mark>, como la <b>anorexia</b> (miedo intenso a engordar y restricción extrema) y la <b>bulimia</b> (atracones seguidos de vómitos o ayunos), son enfermedades mentales graves que suelen empezar en la adolescencia. Necesitan ayuda profesional y se curan mejor cuanto antes se detectan.</p><p>Algunas señales de alarma de un trastorno alimentario son la obsesión por el peso y las calorías, saltarse comidas a escondidas, el ejercicio excesivo o el aislamiento a la hora de comer. Las redes sociales, con cuerpos irreales y dietas milagro, pueden influir. Si notas estas señales en ti o en alguien cercano, habla con tu familia, tu tutor o tu médico.</p>`,
      svg: L.compara("Desnutrición y obesidad: dos caras de la malnutrición", ["Desnutrición", "var(--sun)", ["faltan energía o nutrientes", "retraso del crecimiento", "países pobres", "anemia, infecciones"]], ["Obesidad", "var(--red)", ["exceso de energía", "grasa acumulada", "países ricos", "diabetes, corazón"]]),
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
    { enunciado: "Una comida aporta 700 kcal, de las que 280 proceden de lípidos. ¿Qué porcentaje es? ¿Cumple las recomendaciones?",
      pasos: ["Porcentaje = 280 / 700 · 100.", "280 / 700 = 0,4, es decir, el 40 %.", "La recomendación es que los lípidos aporten entre el 30 y el 35 %."],
      resultado: "el 40 %: supera lo recomendado y conviene reducir la grasa." },
    { enunciado: "Un refresco de 330 mL tiene 35 g de azúcar. Si una persona necesita 2.000 kcal y la OMS aconseja que los azúcares libres no superen el 10 %, ¿qué parte de ese límite cubre el refresco?",
      pasos: ["Límite: 10 % de 2.000 = 200 kcal de azúcares libres.", "En gramos: 200 / 4 = 50 g de azúcar.", "El refresco tiene 35 g: 35 / 50 = 0,7."],
      resultado: "el 70 % del límite diario con una sola lata." },
    { enunciado: "Lucía es vegana. ¿Qué dos precauciones debe tener para que su dieta sea completa?",
      pasos: ["Las proteínas vegetales suelen carecer de algún aminoácido esencial.", "Combinar legumbres con cereales (lentejas con arroz) aporta todos los aminoácidos esenciales.", "La vitamina B12 solo está en alimentos de origen animal, así que debe tomarla como suplemento."],
      resultado: "combinar legumbres y cereales y tomar un suplemento de vitamina B12." },
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
    { nivel: "básico", ...{ q: "Explica la diferencia entre alimentación y nutrición con un ejemplo.", sol: "Alimentación: elegir y comer un bocadillo (voluntario). Nutrición: digerir el pan y el queso, absorber sus nutrientes y llevarlos a las células (involuntario)." } },
    { nivel: "básico", ...{ q: "Clasifica por su función principal: almidón, calcio, vitamina C, aceite, proteína de la carne.", sol: "Almidón: energética. Calcio: estructural y reguladora. Vitamina C: reguladora. Aceite: energética. Proteína: estructural." } },
    { nivel: "básico", ...{ q: "Nombra una enfermedad por falta de vitamina y explica cómo se previene.", sol: "Escorbuto, por falta de vitamina C. Se previene comiendo fruta y verdura fresca (cítricos, kiwi, pimiento)." } },
    { nivel: "básico", ...{ q: "Explica qué es el metabolismo basal.", sol: "Es la energía que gasta el cuerpo en reposo para mantener las funciones básicas: respirar, latir, mantener la temperatura, renovar células." } },
    { nivel: "básico", ...{ q: "Cita cuatro características de la dieta mediterránea.", sol: "Aceite de oliva como grasa principal, mucha fruta, verdura y legumbres, pescado frecuente y poca carne roja; además, comer en compañía y actividad física." } },
    { nivel: "básico", ...{ q: "En una etiqueta, el primer ingrediente es «azúcar». ¿Qué significa?", sol: "Que es el ingrediente que está en mayor cantidad, porque se ordenan de mayor a menor." } },
    { nivel: "básico", q: "Escribe dos alimentos ricos en cada nutriente: glúcidos, lípidos, proteínas.", sol: "Glúcidos: pan y arroz. Lípidos: aceite de oliva y frutos secos. Proteínas: huevo y lentejas." },
    { nivel: "básico", q: "¿Por qué el agua es imprescindible? Indica tres funciones.", sol: "Disuelve y transporta nutrientes, regula la temperatura mediante el sudor y elimina desechos con la orina." },
    { nivel: "básico", q: "Diferencia vitaminas liposolubles e hidrosolubles y pon un ejemplo de cada una.", sol: "Liposolubles: se disuelven en grasa y se almacenan (vitamina D). Hidrosolubles: se disuelven en agua y se eliminan con la orina, por lo que hay que tomarlas a diario (vitamina C)." },
    { nivel: "básico", q: "Clasifica como fresco, procesado o ultraprocesado: lentejas secas, pan, refresco de cola, queso, galletas rellenas, naranja.", sol: "Frescos: lentejas secas y naranja. Procesados: pan y queso. Ultraprocesados: refresco de cola y galletas rellenas." },
    { nivel: "básico", q: "Escribe cuatro normas para evitar intoxicaciones alimentarias en casa.", sol: "Lavarse las manos antes de cocinar, cocinar bien carnes y huevos, no romper la cadena del frío y separar los alimentos crudos de los cocinados." },
    { nivel: "básico", q: "¿Qué diferencia hay entre la fecha de caducidad y la de consumo preferente?", sol: "La de caducidad indica hasta cuándo es seguro comer el alimento; después no se debe consumir. La de consumo preferente indica hasta cuándo conserva su calidad; después aún puede comerse si el envase está bien." },
    { nivel: "medio", ...{ q: "Calcula la energía de 30 g de almendras con 6 g de proteínas, 3 g de glúcidos y 15 g de lípidos.", sol: "6 · 4 + 3 · 4 + 15 · 9 = 24 + 12 + 135 = 171 kcal." } },
    { nivel: "medio", ...{ q: "¿Por qué hay que combinar legumbres con cereales en una dieta vegetariana?", sol: "Porque cada grupo carece de algún aminoácido esencial y juntos aportan todos los necesarios para fabricar proteínas." } },
    { nivel: "medio", ...{ q: "Pedro necesita 2.500 kcal. ¿Cuántas kcal deberían venir como máximo de los lípidos (35 %)? ¿Cuántos gramos son?", sol: "0,35 · 2.500 = 875 kcal. 875 / 9 ≈ 97 g de lípidos." } },
    { nivel: "medio", ...{ q: "¿Qué son los trastornos de la conducta alimentaria? Cita dos.", sol: "Enfermedades mentales en las que la relación con la comida y el cuerpo se altera gravemente. Por ejemplo, anorexia y bulimia." } },
    { nivel: "medio", q: "Calcula la energía de un bocadillo con 60 g de pan (30 g de glúcidos, 5 g de proteínas, 1 g de lípidos) y 30 g de queso (8 g de proteínas, 9 g de lípidos).", sol: "Glúcidos: 30 · 4 = 120 kcal. Proteínas: (5 + 8) · 4 = 52 kcal. Lípidos: (1 + 9) · 9 = 90 kcal. Total: 262 kcal." },
    { nivel: "medio", q: "Explica la diferencia entre una alergia y una intolerancia alimentaria con un ejemplo.", sol: "La alergia es una reacción del sistema inmunitario a una proteína (alergia al cacahuete) y puede ser grave aunque se tome muy poco. La intolerancia es un problema digestivo, como la falta de la enzima lactasa en la intolerancia a la lactosa, y produce molestias que dependen de la cantidad." },
    { nivel: "medio", q: "¿Por qué los refrescos y los zumos industriales no son una buena forma de hidratarse?", sol: "Porque aportan mucho azúcar libre (energía sin nutrientes), favorecen la caries y el sobrepeso y no tienen la fibra de la fruta entera. El agua hidrata sin aportar energía." },
    { nivel: "medio", q: "Explica por qué la vitamina D se llama a veces «vitamina del sol» y qué pasa si falta.", sol: "Porque la piel la fabrica con la luz solar. Es necesaria para absorber el calcio; si falta, los huesos se debilitan (raquitismo en niños, osteoporosis y osteomalacia en adultos)." },
    { nivel: "medio", q: "Una persona come cada día 300 kcal más de las que gasta. Si 1 kg de grasa corporal equivale a unas 7.700 kcal, ¿cuánto peso ganará aproximadamente en un mes?", sol: "300 · 30 = 9.000 kcal de más. 9.000 / 7.700 ≈ 1,2 kg en un mes." },
    { nivel: "medio", q: "¿Qué técnicas de conservación usan el frío y cuáles el calor? Explica cómo actúan.", sol: "Frío: refrigeración y congelación, que frenan la multiplicación de los microorganismos. Calor: pasteurización (calentar unos segundos para matar la mayoría de los microbios, como en la leche fresca) y esterilización (temperaturas más altas que los matan todos, como en las conservas)." },
    { nivel: "medio", q: "Indica tres rasgos que ayudan a reconocer un producto ultraprocesado en la etiqueta.", sol: "Una lista larga de ingredientes; ingredientes que no se usan en casa (jarabe de glucosa, aceites refinados, aromas, colorantes, edulcorantes); y mucho azúcar, sal o grasa con poca fibra." },
    { nivel: "medio", q: "Compara la pirámide de la dieta mediterránea con lo que comes en una semana normal. ¿Qué cambiarías?", sol: "Respuesta abierta. Debe comparar la frecuencia de cada grupo (fruta y verdura a diario, legumbres y pescado varias veces por semana, carne roja y dulces ocasionalmente) y proponer cambios concretos, como sustituir bollería por fruta o añadir legumbres." },
    { nivel: "avanzado", q: "Diseña el menú de un día para una adolescente que necesita 2.200 kcal, repartido en cinco comidas y siguiendo el plato saludable.", sol: "Ejemplo: desayuno (leche, pan integral con aceite y tomate, fruta); media mañana (bocadillo pequeño y fruta); comida (lentejas con verduras y arroz, ensalada, pan, yogur); merienda (frutos secos y fruta); cena (merluza con patatas y verduras, pan, fruta). Debe repartir la energía (20-25 % desayuno, 30-35 % comida), incluir verdura y fruta en cada comida principal y beber agua." },
    { nivel: "avanzado", q: "En una comida se toman 90 g de glúcidos, 25 g de proteínas y 30 g de lípidos. Calcula la energía total y el porcentaje de cada nutriente. ¿Es equilibrada?", sol: "Glúcidos: 360 kcal; proteínas: 100 kcal; lípidos: 270 kcal; total 730 kcal. Porcentajes: glúcidos 49 %, proteínas 14 %, lípidos 37 %. Está cerca del equilibrio, pero con un poco de exceso de grasa y algo de falta de glúcidos." },
    { nivel: "avanzado", q: "Explica el experimento de James Lind sobre el escorbuto. ¿Por qué se considera un experimento controlado?", sol: "Repartió a doce marineros con escorbuto en seis parejas con las mismas condiciones (comida, alojamiento) y cambió solo un factor: el remedio. Solo la pareja que tomó cítricos se curó. Es controlado porque compara grupos que solo se diferencian en la variable estudiada." },
    { nivel: "avanzado", q: "Argumenta por qué se dice que la dieta mediterránea es también más sostenible para el planeta.", sol: "Se basa en alimentos vegetales, de temporada y de cercanía, con poca carne roja, cuya producción consume mucha agua, suelo y emite muchos gases de efecto invernadero. Además, cocinar en casa reduce envases y desperdicio." },
    { nivel: "avanzado", q: "Un producto anuncia «sin azúcares añadidos» pero su segundo ingrediente es zumo de uva concentrado. ¿Te parece engañoso? Razona.", sol: "Sí, en parte: el zumo concentrado aporta mucho azúcar libre, aunque legalmente no cuente como «azúcar añadido». Por eso hay que leer la lista de ingredientes y la cantidad de azúcares de la tabla nutricional, no solo los reclamos del frontal." },
    { nivel: "avanzado", q: "¿Por qué los trastornos de la conducta alimentaria se consideran enfermedades mentales y no simples problemas de dieta?", sol: "Porque su origen está en la percepción distorsionada del propio cuerpo, el miedo intenso a engordar y la ansiedad, no en la falta de información sobre nutrición. Necesitan tratamiento psicológico y médico, además de nutricional." },
    { nivel: "avanzado", q: "Una persona con 50 kg sale a correr una hora y gasta unas 8 kcal por kg y hora. ¿Cuántas kcal gasta? ¿Cuántos gramos de glúcidos equivalen?", sol: "8 · 50 · 1 = 400 kcal. 400 / 4 = 100 g de glúcidos." },
    { nivel: "avanzado", q: "Propón una investigación para comparar el contenido de azúcar de los desayunos de tu clase con las recomendaciones de la OMS.", sol: "Recoger de forma anónima qué desayuna cada alumno durante una semana; buscar el azúcar de cada producto en las etiquetas; calcular la media de azúcares libres por desayuno; compararla con el límite (10 % de la energía, unos 50 g al día) y presentar los resultados en gráficos con propuestas de mejora." },
  ],
  quiz: [
    { q: "La alimentación es…", o: ["involuntaria", "voluntaria y educable", "lo que hacen las células", "la absorción de nutrientes"], a: 1, e: "Elegimos qué comemos." },
    { q: "Un gramo de lípidos aporta…", o: ["4 kcal", "2 kcal", "9 kcal", "0 kcal"], a: 2, e: "9 kcal por gramo." },
    { q: "El almidón es un glúcido…", o: ["complejo", "simple", "graso", "proteico"], a: 0, e: "Se digiere despacio." },
    { q: "Las proteínas están formadas por…", o: ["ácidos grasos", "glucosas", "vitaminas", "aminoácidos"], a: 3, e: "Unos 20 tipos distintos." },
    { q: "La falta de vitamina C produce…", o: ["raquitismo", "escorbuto", "anemia", "bocio"], a: 1, e: "Lo demostró James Lind." },
    { q: "El agua supone en un adulto en torno al…", o: ["10 % del cuerpo", "30 %", "60 %", "90 %"], a: 2, e: "Alrededor del 60 %." },
    { q: "La fibra…", o: ["aporta mucha energía", "es una proteína", "se digiere por completo", "ayuda al tránsito intestinal"], a: 3, e: "No la digerimos." },
    { q: "El metabolismo basal es la energía que gastamos…", o: ["en reposo", "corriendo", "al comer", "durmiendo solo"], a: 0, e: "Para mantenernos vivos." },
    { q: "De la energía diaria, los glúcidos deberían aportar…", o: ["10-15 %", "50-55 %", "30-35 %", "80 %"], a: 1, e: "Sobre todo complejos." },
    { q: "La grasa principal de la dieta mediterránea es…", o: ["la mantequilla", "el aceite de palma", "el aceite de oliva", "la manteca"], a: 2, e: "Grasa insaturada." },
    { q: "En la etiqueta, los ingredientes se ordenan…", o: ["por orden alfabético", "de menor a mayor cantidad", "al azar", "de mayor a menor cantidad"], a: 3, e: "El primero es el más abundante." },
    { q: "La vitamina B12 solo está en…", o: ["alimentos de origen animal", "frutas", "cereales", "legumbres"], a: 0, e: "Los veganos necesitan suplemento." },
    { q: "La intolerancia a la lactosa se debe a…", o: ["una alergia", "la falta de una enzima digestiva", "un virus", "exceso de calcio"], a: 1, e: "Falta la lactasa." },
    { q: "Un ejemplo de alimento ultraprocesado es…", o: ["una manzana", "las lentejas secas", "un refresco azucarado", "un huevo"], a: 2, e: "Muchos ingredientes industriales." },
    { q: "La pasteurización conserva los alimentos con…", o: ["frío", "sal", "humo", "calor"], a: 3, e: "Calienta para matar microbios." },
    { q: "La enfermedad celíaca obliga a evitar…", o: ["el gluten", "la lactosa", "el azúcar", "la sal"], a: 0, e: "Trigo, cebada y centeno." },
    { q: "El Nutri-Score clasifica los alimentos…", o: ["por su precio", "con letras de la A a la E", "por su caducidad", "por su origen"], a: 1, e: "De verde (A) a rojo (E)." },
    { q: "Los azúcares libres no deberían superar…", o: ["el 50 % de la energía", "el 30 %", "el 10 %", "el 80 %"], a: 2, e: "Recomendación de la OMS." },
    { q: "La anorexia es…", o: ["una alergia", "una intolerancia", "una infección", "un trastorno de la conducta alimentaria"], a: 3, e: "Una enfermedad mental grave." },
    { q: "Un mineral necesario para los glóbulos rojos es…", o: ["el hierro", "el yodo", "el sodio", "el flúor"], a: 0, e: "Forma parte de la hemoglobina." },
  ],
  examen: [
    { q: "Los nutrientes con función reguladora son…", o: ["vitaminas y minerales", "lípidos", "glúcidos", "fibra"], a: 0, e: "Controlan las reacciones químicas." },
    { q: "La energía de 10 g de glúcidos y 10 g de lípidos es…", o: ["80 kcal", "130 kcal", "40 kcal", "200 kcal"], a: 1, e: "40 + 90 = 130 kcal." },
    { q: "Los aminoácidos esenciales…", o: ["los fabrica el cuerpo", "solo están en las frutas", "hay que tomarlos con la dieta", "no sirven para nada"], a: 2, e: "El cuerpo no puede fabricarlos." },
    { q: "El plato saludable recomienda que la mitad sean…", o: ["carnes", "cereales", "dulces", "verduras y fruta"], a: 3, e: "Un cuarto cereales, un cuarto proteína." },
    { q: "En la cúspide de la pirámide mediterránea están…", o: ["las carnes rojas y los dulces", "las verduras", "el aceite", "las legumbres"], a: 0, e: "Consumo ocasional." },
    { q: "Una alergia alimentaria es una reacción…", o: ["digestiva", "del sistema inmunitario", "nerviosa", "hormonal"], a: 1, e: "Puede ser grave." },
    { q: "La fecha de caducidad indica…", o: ["la calidad óptima", "el día de fabricación", "hasta cuándo es seguro comerlo", "el precio"], a: 2, e: "Después no se debe consumir." },
    { q: "La obesidad aumenta el riesgo de…", o: ["escorbuto", "raquitismo", "anemia", "diabetes tipo 2"], a: 3, e: "Y de enfermedades del corazón." },
  ],
  feynman: [...["Por qué alimentación y nutrición son cosas distintas", "Qué hace cada tipo de nutriente", "Cómo es una dieta equilibrada y cómo se lee una etiqueta"], "Qué es un ultraprocesado y cómo se reconoce", "Por qué una alergia y una intolerancia no son lo mismo"],
  mapa: mapa("NUTRICIÓN", "var(--eso)", [
    ["Energéticos", "glúcidos 4 kcal/g · lípidos 9 kcal/g", "var(--sun)"],
    ["Estructurales", "proteínas · calcio", "var(--red)"],
    ["Reguladores", "vitaminas · minerales · agua", "var(--leaf)"],
    ["Dieta equilibrada", "55 % · 30 % · 15 % · mediterránea", "var(--pen)"],
  ], 280),
  tarjetas: [
    ...[
    ["Alimentación", "Elegir y comer los alimentos. Es voluntaria."],
    ["Nutrición", "Procesos del cuerpo para obtener y usar los nutrientes. Es involuntaria."],
    ["Energía por gramo", "Glúcidos y proteínas: 4 kcal. Lípidos: 9 kcal."],
    ["Aminoácidos esenciales", "Los que el cuerpo no fabrica y debe tomar con la dieta."],
    ["Metabolismo basal", "Energía que gastamos en reposo para mantenernos vivos."],
    ["Reparto de la energía", "50-55 % glúcidos, 30-35 % lípidos, 10-15 % proteínas."],
    ["Fibra", "No se digiere; ayuda al intestino y da saciedad."],
    ["Dieta mediterránea", "Aceite de oliva, fruta, verdura, legumbres, pescado y poca carne roja."],
  ],
    ["Vitaminas liposolubles", "A, D, E y K: se disuelven en grasa y se almacenan."],
    ["Ultraprocesado", "Producto industrial con muchos ingredientes, azúcar, sal o grasa y poca fibra."],
    ["Alergia frente a intolerancia", "Alergia: sistema inmunitario. Intolerancia: problema digestivo."],
    ["Caducidad y consumo preferente", "Caducidad: seguridad. Consumo preferente: calidad."],
  ],
  glosario: [
    ["Alimentación", "Elección, preparación e ingesta de alimentos; es voluntaria."],
    ["Nutrición", "Procesos involuntarios para obtener y usar los nutrientes."],
    ["Nutriente", "Sustancia de los alimentos que utiliza el cuerpo."],
    ["Glúcido", "Nutriente energético, como la glucosa o el almidón; 4 kcal/g."],
    ["Lípido", "Grasa; reserva de energía y forma membranas; 9 kcal/g."],
    ["Proteína", "Nutriente formado por aminoácidos con función estructural."],
    ["Aminoácido esencial", "El que el cuerpo no fabrica y debe tomar con la dieta."],
    ["Vitamina", "Nutriente regulador necesario en pequeñas cantidades."],
    ["Kilocaloría", "Unidad de energía de los alimentos."],
    ["Metabolismo basal", "Energía que se gasta en reposo."],
    ["Dieta equilibrada", "La que aporta la energía y los nutrientes en la proporción adecuada."],
    ["Fibra", "Parte de los vegetales que no se digiere y ayuda al intestino."],
    ["Ultraprocesado", "Producto industrial con muchos ingredientes y aditivos."],
    ["Aditivo", "Sustancia añadida para conservar, colorear o espesar; se marca con E."],
    ["Alérgeno", "Sustancia que provoca una reacción alérgica."],
    ["Toxiinfección alimentaria", "Enfermedad causada por un alimento contaminado."],
    ["Pasteurización", "Calentamiento breve que elimina la mayoría de los microbios."],
  ],
  situacion: {
    titulo: "Rediseñamos el menú del comedor",
    reto: "La asociación de familias quiere mejorar el menú del comedor o de la cafetería del instituto. Vuestro grupo analizará la oferta actual y presentará una propuesta equilibrada, sabrosa y sostenible.",
    pasos: [
      "Recoged el menú de dos semanas o los productos de la cafetería y clasificadlos por grupos de alimentos.",
      "Calculad la energía y el reparto de nutrientes de tres comidas usando etiquetas y tablas de composición.",
      "Comparad los resultados con el plato saludable y la pirámide de la dieta mediterránea.",
      "Haced una encuesta a los compañeros sobre sus platos favoritos y alergias.",
      "Diseñad un menú semanal alternativo, con su justificación y un cartel informativo.",
    ],
    producto: "Propuesta de menú semanal con cálculos, gráficos y un cartel para el comedor, presentada a la asociación de familias.",
    evaluacion: [
      "Corrección de los cálculos de energía y nutrientes.",
      "Equilibrio y variedad del menú propuesto según las recomendaciones.",
      "Consideración de alergias, intolerancias y sostenibilidad.",
      "Claridad de la presentación y del cartel.",
    ],
  },
  familias: ["Leed juntos las etiquetas de tres productos del desayuno y comparad azúcar, fibra y sal.", "Planificad un menú semanal siguiendo el plato saludable.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Saberes básicos de «Hábitos saludables» y «Cuerpo humano» de Biología y Geología de 1º a 3º (RD 217/2022, BOE-A-2022-4975): nutrientes y su función, dieta equilibrada y mediterránea, etiquetado, seguridad alimentaria y trastornos de la conducta alimentaria. En Cataluña, saberes equivalentes de Biologia i Geologia del Decret 175/2022.",
    ideas: [
      "Diario de alimentación de tres días y cálculo aproximado de la energía y del reparto de nutrientes.",
      "Análisis comparado de etiquetas y del Nutri-Score de productos del supermercado.",
      "Detección de almidón con lugol y de grasas con papel en distintos alimentos.",
      "Diseño por grupos de un menú escolar equilibrado.",
    ],
  },
  fuentes: [...[RD, wiki("Dieta mediterránea", "Dieta_mediterr%C3%A1nea"), wiki("Nutriente", "Nutriente")], { t: "Agencia Española de Seguridad Alimentaria y Nutrición (AESAN)", url: "https://www.aesan.gob.es/" }],
  revisado: "2026-11-13",
};
