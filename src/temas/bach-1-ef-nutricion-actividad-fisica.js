// Educación Física, 1º de Bachillerato. Tema 3, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1-ef");

// Plato saludable: mitad verduras y fruta, un cuarto cereales integrales, un cuarto proteína; agua y aceite de oliva.
const plato = B.lienzo("Plato saludable: la mitad verduras y frutas, un cuarto cereales integrales y un cuarto proteínas, con agua y aceite de oliva", `
  <circle cx="110" cy="96" r="70" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
  <path d="M110 96 L110 26 A70 70 0 0 0 110 166 Z" fill="var(--leaf)" fill-opacity=".45"/>
  <path d="M110 96 L110 26 A70 70 0 0 1 180 96 Z" fill="var(--sun)" fill-opacity=".5"/>
  <path d="M110 96 L180 96 A70 70 0 0 1 110 166 Z" fill="var(--red)" fill-opacity=".4"/>
  ${B.tx(76, 92, "verduras", { fs: 11, maxW: 60, bold: true })}${B.tx(76, 106, "y frutas", { fs: 11, maxW: 60, bold: true })}
  ${B.tx(140, 70, "cereales", { fs: 10.5, maxW: 54, bold: true })}${B.tx(140, 82, "integrales", { fs: 10.5, maxW: 54, bold: true })}
  ${B.tx(140, 124, "proteínas", { fs: 10.5, maxW: 54, bold: true })}
  <rect x="206" y="40" width="26" height="54" rx="6" fill="var(--pen)" fill-opacity=".35" stroke="var(--pen)" stroke-width="2"/>${B.tx(219, 108, "agua", { fs: 10.5, maxW: 44, bold: true, color: "var(--pen)" })}
  <path d="M212 132 h14 l3 30 h-20 z" fill="var(--sun)" fill-opacity=".6" stroke="var(--sun)" stroke-width="2"/>${B.tx(219, 176, "aceite de oliva", { fs: 9, maxW: 70, color: "var(--muted)" })}`, "");

// Balance energético.
const balanza = B.lienzo("Balance energético: energía que entra con los alimentos frente a energía que se gasta en metabolismo basal, digestión y actividad física", `
  <path d="M130 40 V 150 M70 150 H 190" stroke="var(--ink)" stroke-width="3"/>
  <path d="M40 60 H 220" stroke="var(--ink)" stroke-width="3"/>
  <path d="M40 60 L 20 100 H 60 Z M220 60 L 200 100 H 240 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
  ${B.tx(40, 120, "ENTRA", { fs: 12, maxW: 60, bold: true, color: "var(--leaf)" })}${B.tx(40, 136, "alimentos", { fs: 10, maxW: 70 })}
  ${B.tx(220, 120, "SALE", { fs: 12, maxW: 60, bold: true, color: "var(--red)" })}${B.tx(220, 136, "basal + digestión", { fs: 9.5, maxW: 80 })}${B.tx(220, 150, "+ actividad", { fs: 9.5, maxW: 80 })}
  ${B.tx(130, 28, "Balance energético", { fs: 12, maxW: 200, bold: true })}`, "");

module.exports = B.tema({
  titulo: "Nutrición y actividad física",
  minutos: 100,
  objetivos: [
    "Distinguir alimentación y nutrición y conocer las funciones de cada nutriente",
    "Estimar las necesidades de energía y comprender el balance energético",
    "Planificar la alimentación y la hidratación antes, durante y después de la actividad física",
    "Analizar con espíritu crítico etiquetas, suplementos, bebidas energéticas y mensajes sobre el cuerpo",
  ],
  claves: ["alimentación", "nutrición", "nutrientes", "hidratos de carbono", "proteínas", "grasas", "hidratación", "balance energético", "dieta mediterránea", "plato saludable", "suplementos", "imagen corporal"],
  pregunta: {
    texto: "Un influencer recomienda tomar batidos de proteínas y quitar el pan para estar en forma. ¿Necesita un estudiante que hace deporte suplementos y dietas especiales?",
    respuesta: "En la gran mayoría de los casos, <mark>no</mark>. Una alimentación variada, basada en verduras, frutas, legumbres, cereales integrales, frutos secos, pescado, huevos y lácteos, cubre de sobra las necesidades de un adolescente activo, incluidas las proteínas. Lo que sí importa es <b>comer suficiente</b>, repartir bien las comidas alrededor del entrenamiento y <b>beber agua</b>. Los suplementos solo tienen sentido en casos concretos y con consejo profesional.",
  },
  lectura: {
    titulo: "La gasolina del deportista",
    html: `<p>Durante años, el desayuno de muchos equipos juveniles era un bollo y un zumo de brik, y la cena de antes de un partido, un plato enorme de pasta. Hoy los nutricionistas deportivos trabajan con los clubes de élite y su mensaje sorprende por lo sencillo: comida real, poco procesada, variada y bien repartida a lo largo del día.</p>
    <p>Una jugadora de baloncesto de 16 años que entrena cuatro días por semana necesita más energía que una compañera sedentaria, pero no comida «especial». Necesita hidratos de carbono para entrenar con intensidad, proteínas repartidas en las comidas para reparar el músculo, grasas saludables, frutas y verduras para las vitaminas y, sobre todo, agua.</p>
    <p>La alimentación influye en cómo rindes, cómo te recuperas, cómo duermes y hasta en cómo te concentras en clase. Pero también es cultura, placer y relación con los demás. En este tema aprenderás a comer para moverte mejor sin obsesionarte, y a defenderte de los mensajes engañosos que llenan las redes sobre dietas, cuerpos y suplementos.</p>`,
  },
  secciones: [3, 5, 4],
  bloques: [
    {
      h: "Alimentación y nutrición",
      html: `<p>Aunque se usan como sinónimos, no son lo mismo:</p>
      <ul><li><b>Alimentación</b>: proceso voluntario y consciente de elegir, preparar y comer los alimentos. Depende de los gustos, la cultura, la economía y la educación, y por eso se puede <b>educar</b>.</li>
      <li><b>Nutrición</b>: conjunto de procesos involuntarios por los que el organismo transforma y utiliza los nutrientes de los alimentos (digestión, absorción, transporte, metabolismo y excreción).</li></ul>
      <p>Los <b>alimentos</b> son los productos que comemos (una manzana, un huevo) y los <b>nutrientes</b>, las sustancias que contienen y que el cuerpo necesita. Ningún alimento, salvo la leche materna para el bebé, contiene todos los nutrientes; por eso la clave es la <mark>variedad</mark>.</p>
      <p>Una <b>dieta equilibrada</b> aporta la energía y los nutrientes necesarios en las proporciones adecuadas, según la edad, el sexo y la actividad física. «Dieta» no significa restricción: es simplemente el conjunto de lo que comemos habitualmente.</p>`,
      svg: B.comparar("Alimentación frente a nutrición", ["Alimentación", ["voluntaria", "elegir y preparar", "se puede educar", "cultura y gustos"]], ["Nutrición", ["involuntaria", "digerir y absorber", "metabolismo", "células"]]),
    },
    {
      h: "Los nutrientes y sus funciones",
      html: `<p>Los nutrientes se agrupan en seis tipos con tres grandes funciones:</p>
      <ul><li><b>Energética</b>: aportan energía. Hidratos de carbono (4 kcal/g), grasas (9 kcal/g) y, en menor medida, proteínas (4 kcal/g).</li>
      <li><b>Plástica o estructural</b>: forman y reparan tejidos. Sobre todo proteínas y algunos minerales como el calcio.</li>
      <li><b>Reguladora</b>: controlan las reacciones del organismo. Vitaminas, minerales y agua.</li></ul>
      <p>Los hidratos de carbono, las grasas y las proteínas son <b>macronutrientes</b>, porque se necesitan en gramos al día. Las vitaminas y los minerales son <b>micronutrientes</b>, necesarios en miligramos o microgramos, pero imprescindibles. El <b>agua</b> es el nutriente más abundante del cuerpo (en torno al 60 % del peso) y la <b>fibra</b>, aunque no se digiere, es fundamental para el intestino.</p>
      <p>Para una persona activa, el reparto orientativo de la energía diaria es de un 50-60 % de hidratos de carbono, un 25-35 % de grasas (sobre todo insaturadas) y un 12-15 % de proteínas.</p>`,
      svg: B.barras("Reparto orientativo de la energía en una persona activa", [["Hidratos", 55], ["Grasas", 30], ["Proteínas", 15]], { t: "% de las calorías diarias", unidad: " %" }),
    },
    {
      h: "Las necesidades de energía y el balance energético",
      html: `<p>La energía de los alimentos se mide en <b>kilocalorías</b> (kcal). El gasto energético diario tiene tres componentes:</p>
      <ul><li><b>Metabolismo basal</b>: lo que gasta el cuerpo en reposo para mantener sus funciones vitales (latido, respiración, temperatura). Supone el 60-70 % del total.</li>
      <li><b>Efecto térmico de los alimentos</b>: la energía de la digestión, en torno al 10 %.</li>
      <li><b>Actividad física</b>: la parte más variable, desde un 15 % en una persona sedentaria hasta más del 40 % en un deportista.</li></ul>
      <p>Un adolescente necesita, según su edad, tamaño y actividad, entre unas 2.000 y más de 3.000 kcal al día. En la adolescencia la energía no solo sirve para moverse: también para <b>crecer</b>.</p>
      <p>El <b>balance energético</b> compara lo que entra con lo que sale. Si es positivo de forma mantenida, se acumula grasa; si es negativo, se pierde peso. Pero el cuerpo no es una calculadora: influyen las hormonas, el sueño, el estrés y la calidad de los alimentos. En deportistas jóvenes es más frecuente el problema contrario: <mark>comer menos de lo que se gasta</mark>, lo que causa fatiga, lesiones y alteraciones hormonales.</p>`,
      svg: balanza,
    },
    {
      h: "Los hidratos de carbono, combustible del ejercicio",
      html: `<p>Los <b>hidratos de carbono</b> son la principal fuente de energía en los esfuerzos de intensidad media y alta. El cuerpo los guarda como <b>glucógeno</b> en el músculo y el hígado, pero sus reservas son limitadas: duran entre 60 y 90 minutos de ejercicio intenso. Cuando se agotan aparece la fatiga brusca que los ciclistas llaman «pájara».</p>
      <p>Se distinguen:</p>
      <ul><li><b>Complejos</b>, de absorción lenta y con fibra: cereales integrales, pan integral, arroz, pasta, patata, legumbres, avena. Deben ser la base.</li>
      <li><b>Simples</b>, de absorción rápida: fruta (con fibra y vitaminas) y azúcares añadidos (refrescos, bollería, golosinas). Estos últimos conviene limitarlos: la OMS aconseja que no superen el 10 % de la energía, e idealmente el 5 %.</li></ul>
      <p>El <b>índice glucémico</b> indica la velocidad con que un alimento sube la glucosa en sangre. Los de índice bajo (legumbres, integrales) son mejores en el día a día; los de índice alto (plátano maduro, bebida isotónica) pueden ser útiles durante esfuerzos largos o justo después para recuperar el glucógeno.</p>`,
      svg: B.comparar("Hidratos de carbono complejos y simples", ["Complejos", ["integrales", "legumbres", "patata y arroz", "energía estable"]], ["Simples", ["fruta (sí)", "refrescos (poco)", "bollería (poco)", "subida rápida"]]),
    },
    {
      h: "Las proteínas",
      html: `<p>Las <b>proteínas</b> forman y reparan músculos, tendones, piel, hormonas, enzimas y anticuerpos. Están formadas por <b>aminoácidos</b>; nueve de ellos son <b>esenciales</b>, porque el cuerpo no los fabrica y hay que tomarlos con la dieta.</p>
      <ul><li><b>Origen animal</b>: carne, pescado, huevos, lácteos. Tienen todos los aminoácidos esenciales.</li>
      <li><b>Origen vegetal</b>: legumbres, frutos secos, cereales, soja. Combinándolas (lentejas con arroz, garbanzos con pan) se obtiene una proteína completa.</li></ul>
      <p>Un adolescente necesita en torno a <b>0,9-1 g por kilo</b> de peso al día; un deportista que entrena fuerza o resistencia con frecuencia, entre 1,2 y 1,6 g/kg. Es más importante <mark>repartirlas</mark> en las comidas (20-30 g en cada una) que tomar grandes cantidades de golpe.</p>
      <p>Con una dieta variada, estas cantidades se cubren sin batidos: un vaso de leche, un yogur, un huevo, un filete de pescado y un plato de legumbres ya aportan más de 80 g. El exceso de proteína no se convierte en músculo; se usa como energía o se elimina, y sobrecarga los riñones.</p>`,
      svg: B.cajas("Fuentes de proteína", [["Animal", "carne, pescado,|huevo, lácteos"], ["Vegetal", "legumbres, soja,|frutos secos"], ["Combinar", "lentejas con arroz,|garbanzos con pan"], ["Cantidad", "1,2-1,6 g/kg|si entrenas"]], { t: "Proteínas" }),
    },
    {
      h: "Grasas, vitaminas y minerales",
      html: `<p>Las <b>grasas</b> o lípidos son la gran reserva de energía del cuerpo y la vía principal en esfuerzos largos y suaves. También forman las membranas celulares y transportan las vitaminas A, D, E y K. Se diferencian por su calidad:</p>
      <ul><li><b>Insaturadas</b> (saludables): aceite de oliva, frutos secos, aguacate, pescado azul (rico en omega-3).</li>
      <li><b>Saturadas</b>: carnes grasas, embutidos, mantequilla. Mejor con moderación.</li>
      <li><b>Trans</b>: bollería industrial y algunos precocinados. Hay que evitarlas.</li></ul>
      <p>Las <b>vitaminas</b> y los <b>minerales</b> regulan el metabolismo. Para quien hace deporte son especialmente importantes el <b>hierro</b> (transporta el oxígeno; su déficit es frecuente en chicas deportistas), el <b>calcio</b> y la <b>vitamina D</b> (huesos; la adolescencia es la etapa clave para formar masa ósea), las vitaminas del grupo B (obtener energía) y los electrolitos como el sodio y el potasio, que se pierden con el sudor.</p>
      <p>Las frutas, verduras, legumbres, frutos secos y lácteos cubren estas necesidades. Los suplementos vitamínicos solo se toman si un profesional detecta un déficit.</p>`,
      svg: B.rejilla("Micronutrientes clave para el deportista", ["Nutriente", "Función", "Dónde"], [["Hierro", "lleva oxígeno", "legumbres, carne"], ["Calcio", "huesos", "lácteos"], ["Vitamina D", "absorbe calcio", "sol, pescado"], ["Vit. B", "energía", "cereales"], ["Sodio/potasio", "sudor", "fruta, sal"]], { t: "Vitaminas y minerales" }),
    },
    {
      h: "La hidratación",
      html: `<p>Durante el ejercicio, el cuerpo produce calor y lo elimina sobre todo con el <b>sudor</b>. Se pueden perder entre 0,5 y 2 litros por hora, más con calor y humedad. Una pérdida de solo el <b>2 % del peso</b> por deshidratación ya reduce el rendimiento, la concentración y la capacidad de regular la temperatura, y aumenta el riesgo de golpe de calor.</p>
      <p>Pautas prácticas:</p>
      <ul><li><b>Antes</b>: llegar bien hidratado; beber 400-600 ml en las dos horas previas.</li>
      <li><b>Durante</b>: en esfuerzos de más de 45-60 minutos, beber pequeños sorbos cada 15-20 minutos (150-250 ml).</li>
      <li><b>Después</b>: reponer lo perdido. Pesarse antes y después indica cuánto: por cada kilo perdido, beber alrededor de 1,5 litros a lo largo de las horas siguientes.</li></ul>
      <p>El color de la orina es un buen indicador: clara, bien; oscura, falta agua. En la mayoría de actividades escolares <mark>el agua es suficiente</mark>. Las bebidas isotónicas (con sales y algo de azúcar) solo son útiles en esfuerzos de más de una hora o con mucho calor. Los refrescos no hidratan bien y aportan mucho azúcar.</p>`,
      svg: B.flujo("Pautas de hidratación en el ejercicio", ["2 h antes: 400-600 ml", "Durante: sorbos cada 15-20 min", "Más de 1 h o calor: isotónica", "Después: 1,5 L por kilo perdido", "Controlar el color de la orina"], { t: "Beber bien" }),
      video: { id: "NAk1ChXPbyw", titulo: "¿Cuánta AGUA necesitas realmente? La ciencia de la HIDRATACIÓN", canal: "Instituto de la Anatomía Humana", vistas: 313176 },
    },
    {
      h: "El plato saludable y la dieta mediterránea",
      html: `<p>Una forma sencilla de organizar las comidas es el <b>plato saludable</b> propuesto por la Universidad de Harvard:</p>
      <ul><li><b>Mitad del plato</b>: verduras y hortalizas (y fruta), variadas y de colores.</li>
      <li><b>Un cuarto</b>: cereales integrales o tubérculos (arroz, pasta, pan integral, patata).</li>
      <li><b>Un cuarto</b>: proteínas saludables (legumbres, pescado, huevos, pollo, frutos secos).</li>
      <li>Aceite de oliva para cocinar y aliñar, y <b>agua</b> como bebida.</li></ul>
      <p>En los días de mucho entrenamiento, la parte de cereales puede ser mayor; en los de descanso, menor.</p>
      <p>La <b>dieta mediterránea</b>, declarada Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO, encaja con este modelo: mucho vegetal, legumbres, aceite de oliva, pescado, poca carne roja, productos de temporada y cercanía y, además, cocinar y comer en compañía. Su gran enemigo son los <b>ultraprocesados</b>: productos industriales con mucho azúcar, sal y grasas de mala calidad (bollería, snacks, refrescos, comida rápida) que desplazan a la comida real.</p>
      <p>También importa el <b>reparto</b>: cuatro o cinco comidas al día, con un desayuno completo, ayuda a mantener la energía en clase y en el entrenamiento.</p>`,
      svg: plato,
    },
    {
      h: "Comer antes, durante y después de entrenar",
      html: `<p>El momento de la comida influye en el rendimiento y la recuperación:</p>
      <ul><li><b>Antes</b> (2-3 horas): comida rica en hidratos de carbono, con algo de proteína, poca grasa y poca fibra para que la digestión no moleste. Por ejemplo, un bocadillo de pan con pavo y tomate, o arroz con pollo. Si queda poco tiempo (30-60 min), algo ligero: un plátano, un yogur o unas galletas sencillas.</li>
      <li><b>Durante</b>: en actividades de menos de una hora basta con agua. En esfuerzos más largos se pueden tomar 30-60 g de hidratos por hora (fruta, bebida isotónica).</li>
      <li><b>Después</b>: en las dos horas siguientes conviene una comida con hidratos para recargar el glucógeno y 20-30 g de proteína para reparar el músculo, además de agua. Un vaso de leche con cacao y un bocadillo, o una comida normal, cumplen esta función.</li></ul>
      <p>Nunca se prueba nada nuevo el día de una competición: la comida y la bebida se ensayan en los entrenamientos. Y entrenar en ayunas no es recomendable en adolescentes: aumenta el riesgo de mareos y empeora el rendimiento.</p>`,
      svg: B.rejilla("Qué comer alrededor del entrenamiento", ["Momento", "Qué", "Ejemplo"], [["2-3 h antes", "hidratos + algo de proteína", "arroz con pollo"], ["30-60 min antes", "ligero", "plátano"], ["Durante (> 1 h)", "agua + hidratos", "isotónica"], ["Después", "hidratos + proteína", "leche y bocadillo"]], { t: "El reloj de la comida" }),
      video: { id: "Z7oDGmgPSUg", titulo: "Qué comer antes y después de entrenar: recetas fáciles", canal: "Rebeca Rubio", vistas: 1174989 },
    },
    {
      h: "Suplementos y bebidas energéticas",
      html: `<p>Los <b>suplementos</b> son productos que se toman para completar la dieta: batidos de proteínas, creatina, vitaminas, quemadores de grasa... Su venta ha crecido enormemente gracias a la publicidad y a las redes sociales. Conviene saber que:</p>
      <ul><li>La mayoría son <b>innecesarios</b> si la dieta es variada y suficiente.</li>
      <li>Algunos pueden estar <b>contaminados</b> con sustancias prohibidas o no declaradas, sobre todo los comprados por internet.</li>
      <li>Los «quemadores de grasa» y muchos productos milagro carecen de eficacia demostrada y pueden ser peligrosos.</li></ul>
      <p>Las <b>bebidas energéticas</b> merecen una atención especial: una lata puede contener 80-160 mg de cafeína y mucho azúcar. En adolescentes pueden causar taquicardia, nerviosismo, insomnio y ansiedad, y su mezcla con alcohol es especialmente peligrosa. Varias comunidades autónomas han prohibido o limitado su venta a menores. <mark>No son bebidas para hidratarse ni para hacer deporte</mark>.</p>
      <p>Cualquier suplemento debe decidirse con un médico o dietista-nutricionista, y en deportistas federados hay que comprobar que no contenga sustancias de la lista antidopaje.</p>`,
      svg: B.comparar("Bebida isotónica frente a bebida energética", ["Isotónica", ["agua, sales, azúcar", "esfuerzos > 1 h", "rehidrata", "sin cafeína"]], ["Energética", ["cafeína y azúcar", "no para deporte", "taquicardia", "no en menores"]]),
    },
    {
      h: "Leer el etiquetado",
      html: `<p>El <b>etiquetado nutricional</b> es obligatorio en la Unión Europea y es la mejor herramienta para elegir con criterio. Hay que fijarse en:</p>
      <ul><li><b>Lista de ingredientes</b>: aparecen ordenados de mayor a menor cantidad. Si el azúcar (o sus nombres: jarabe de glucosa, dextrosa, sacarosa) está entre los primeros, el producto es muy azucarado.</li>
      <li><b>Información nutricional por 100 g</b>: permite comparar productos. Como referencia, un producto con más de 15 g de azúcares o más de 1,25 g de sal por 100 g tiene mucho.</li>
      <li><b>Raciones</b>: a veces los datos se dan por una ración muy pequeña para que parezcan menores.</li>
      <li><b>Nutri-Score</b>: semáforo de la A (verde) a la E (rojo) que resume la calidad nutricional. Es orientativo y conviene comparar dentro de la misma categoría.</li></ul>
      <p>Cuidado con los reclamos: «light», «natural», «fitness», «con proteínas» o «sin azúcares añadidos» no significan que un producto sea saludable. Una barrita «fit» puede tener tanto azúcar como una chocolatina. La mejor regla: <mark>cuantos menos ingredientes y más reconocibles, mejor</mark>.</p>`,
      svg: B.cajas("Qué mirar en una etiqueta", [["Ingredientes", "orden de|mayor a menor"], ["Por 100 g", "para comparar"], ["Azúcar y sal", "> 15 g y > 1,25 g|es mucho"], ["Reclamos", "«fit» no es|sinónimo de sano"]], { t: "Etiquetado" }),
    },
    {
      h: "Imagen corporal y trastornos de la conducta alimentaria",
      html: `<p>La adolescencia es una etapa de cambios corporales rápidos y de mucha presión sobre la imagen. Las redes sociales muestran cuerpos filtrados, retocados o alcanzados con métodos poco saludables, y eso puede llevar a compararse y a estar insatisfecho con el propio cuerpo.</p>
      <p>Los <b>trastornos de la conducta alimentaria</b> (TCA) son enfermedades graves de salud mental. Los más conocidos son la <b>anorexia nerviosa</b> (restricción extrema y miedo intenso a engordar), la <b>bulimia nerviosa</b> (atracones seguidos de conductas compensatorias como el vómito) y el <b>trastorno por atracón</b>. En el deporte existe además la <b>vigorexia</b> (obsesión por ganar músculo) y el déficit de energía relativa en el deporte (comer menos de lo que se gasta), que causa problemas hormonales, óseos y lesiones.</p>
      <p>Señales de alerta: saltarse comidas a menudo, contar calorías de forma obsesiva, hacer ejercicio para «compensar» lo comido, aislarse en las comidas, cambios bruscos de peso o de ánimo. Ante ellas hay que <b>pedir ayuda</b> a la familia, al tutor o a un profesional sanitario. La relación sana con la comida se basa en comer con regularidad, con variedad, con placer y <mark>sin culpa</mark>.</p>`,
      svg: B.estrella("Relación sana con la comida y el cuerpo", "Comer bien", ["Variedad", "Regularidad", "Placer", "Sin culpa", "Respeto", "Pedir ayuda"]),
    },
  ],
  figura: {
    titulo: "Nutrición y actividad física en cuatro ideas",
    items: [["Variedad", "½ ¼ ¼", "verduras, cereales", "y proteínas"], ["Energía", "kcal", "comer suficiente", "para crecer"], ["Agua", "−2 % peso", "ya baja el", "rendimiento"], ["Crítica", "etiquetas", "menos ultraprocesados", "y suplementos"]],
  },
  video: { id: "aeItLkVyJWk", titulo: "¿Qué es el método del plato saludable?", canal: "CAIPaDi", vistas: 217844 },
  quiz: [
    ["La alimentación es un proceso…", ["involuntario", "voluntario y educable", "solo celular", "hormonal"], 1, "Elegir, preparar y comer."],
    ["La nutrición es…", ["elegir alimentos", "el conjunto de procesos involuntarios que transforman los nutrientes", "una dieta para adelgazar", "cocinar"], 1, "Digestión, absorción, metabolismo."],
    ["Un gramo de grasa aporta…", ["4 kcal", "9 kcal", "7 kcal", "0 kcal"], 1, "El doble que hidratos o proteínas."],
    ["La función plástica la cumplen sobre todo…", ["los hidratos", "las proteínas", "las vitaminas", "el agua"], 1, "Forman y reparan tejidos."],
    ["El mayor componente del gasto energético diario suele ser…", ["la actividad física", "el metabolismo basal", "la digestión", "el sueño"], 1, "60-70 % del total."],
    ["El glucógeno es…", ["una proteína", "la reserva de hidratos en músculo e hígado", "una vitamina", "una grasa"], 1, "Dura 60-90 min de esfuerzo intenso."],
    ["La OMS aconseja que los azúcares añadidos no superen…", ["el 50 % de la energía", "el 10 % (idealmente 5 %)", "el 30 %", "el 25 %"], 1, "Mejor cuanto menos."],
    ["Las legumbres son fuente de…", ["solo hidratos", "hidratos, proteína y fibra", "solo grasa", "azúcar"], 1, "Alimento muy completo."],
    ["Las proteínas recomendadas para un adolescente deportista son…", ["0,3 g/kg", "1,2-1,6 g/kg", "4 g/kg", "10 g/kg"], 1, "Repartidas en las comidas."],
    ["Las grasas más saludables son las…", ["trans", "insaturadas", "saturadas", "hidrogenadas"], 1, "Oliva, frutos secos, pescado azul."],
    ["Un mineral cuyo déficit es frecuente en chicas deportistas es…", ["el sodio", "el hierro", "el flúor", "el yodo"], 1, "Transporta el oxígeno."],
    ["Una pérdida de peso por sudor del 2 %…", ["no influye", "ya reduce el rendimiento", "mejora la velocidad", "es imposible"], 1, "Hay que reponer líquidos."],
    ["En actividades de menos de una hora conviene beber…", ["refresco", "agua", "bebida energética", "nada"], 1, "Suficiente en la mayoría de casos."],
    ["En el plato saludable, la mitad la ocupan…", ["las proteínas", "las verduras y frutas", "los cereales", "las grasas"], 1, "Variadas y de colores."],
    ["Los ultraprocesados se caracterizan por…", ["ser frescos", "llevar mucho azúcar, sal y grasas de mala calidad", "ser caseros", "no tener ingredientes"], 1, "Desplazan a la comida real."],
    ["Después de entrenar conviene tomar…", ["solo agua", "hidratos y proteína", "solo grasa", "nada durante 6 h"], 1, "Recargar y reparar."],
    ["Las bebidas energéticas…", ["hidratan mejor que el agua", "contienen cafeína y no son adecuadas para adolescentes", "son isotónicas", "no tienen azúcar"], 1, "Taquicardia, insomnio, ansiedad."],
    ["En la lista de ingredientes, el primero es…", ["el que menos hay", "el que más hay", "el más caro", "el aditivo"], 1, "Orden de mayor a menor."],
    ["El Nutri-Score…", ["indica el precio", "resume la calidad nutricional de la A a la E", "es una dieta", "solo vale para bebidas"], 1, "Orientativo."],
    ["Una señal de alerta de TCA es…", ["comer en familia", "hacer ejercicio para compensar lo comido", "probar platos nuevos", "comer fruta"], 1, "Hay que pedir ayuda."],
  ],
  examen: [
    ["Un alumno de 60 kg que entrena a diario necesita aproximadamente de proteína al día…", ["20-30 g", "72-96 g", "200 g", "300 g"], 1, "1,2-1,6 g × 60 kg."],
    ["Una jugadora pesa 58 kg antes y 57,2 kg después de un partido. Debe reponer…", ["0,2 L", "unos 1,2 L", "3 L", "nada"], 1, "0,8 kg × 1,5 ≈ 1,2 L."],
    ["Pierde 1,2 kg de peso en un partido de 60 kg. ¿Qué porcentaje es?", ["0,5 %", "2 %", "12 %", "20 %"], 1, "1,2 / 60 = 2 %: ya afecta al rendimiento."],
    ["¿Qué comida es más adecuada 2-3 h antes de un partido?", ["hamburguesa con patatas", "arroz con pollo y fruta", "ensalada de legumbres con mucha fibra", "nada"], 1, "Hidratos, algo de proteína, poca grasa."],
    ["Un yogur tiene 16 g de azúcares por 100 g. Se considera…", ["bajo en azúcar", "alto en azúcar", "sin azúcar", "light"], 1, "Más de 15 g/100 g."],
    ["Si los ingredientes de una barrita son: jarabe de glucosa, avena, chocolate…", ["es baja en azúcar", "su ingrediente principal es azúcar", "es solo avena", "no se puede saber"], 1, "Orden de mayor a menor."],
    ["Una deportista adolescente come poco, tiene lesiones frecuentes y alteraciones menstruales. Sospechas…", ["exceso de proteína", "déficit de energía relativa en el deporte", "deshidratación leve", "sobrehidratación"], 1, "Requiere atención profesional."],
    ["En una ruta en bici de 3 horas, lo adecuado durante el esfuerzo es…", ["no comer", "30-60 g de hidratos por hora y beber", "una bebida energética cada hora", "solo proteína"], 1, "Evita agotar el glucógeno."],
  ],
  feynman: ["Qué diferencia hay entre alimentación y nutrición", "Qué función cumple cada tipo de nutriente", "Qué es el balance energético y por qué el cuerpo no es una calculadora", "Por qué el glucógeno es clave en el ejercicio intenso", "Cómo hidratarse antes, durante y después del ejercicio", "Cómo leer una etiqueta y detectar un reclamo engañoso"],
  mapa: ["NUTRICIÓN Y ACTIVIDAD FÍSICA", [["Nutrientes", "energética · plástica · reguladora"], ["Energía", "basal · actividad · balance"], ["Para el deporte", "hidratos · proteína · agua"], ["Espíritu crítico", "etiquetas · suplementos · imagen"]]],
  tarjetas: [
    ["Alimentación", "Proceso voluntario de elegir y comer alimentos."],
    ["Nutrición", "Procesos involuntarios que transforman los nutrientes."],
    ["Macronutrientes", "Hidratos, grasas y proteínas."],
    ["Micronutrientes", "Vitaminas y minerales."],
    ["Metabolismo basal", "Gasto en reposo: 60-70 % del total."],
    ["Glucógeno", "Reserva de hidratos: 60-90 min de esfuerzo intenso."],
    ["Proteínas deportista", "1,2-1,6 g/kg/día, repartidas."],
    ["Deshidratación", "−2 % del peso ya reduce el rendimiento."],
    ["Plato saludable", "½ verduras y fruta, ¼ cereales, ¼ proteínas."],
    ["Después de entrenar", "Hidratos + 20-30 g de proteína + agua."],
    ["Bebida energética", "Cafeína y azúcar: no para deporte ni menores."],
    ["Etiqueta", "Ingredientes de mayor a menor; comparar por 100 g."],
  ],
  ejemplos: [
    ["Calcula la proteína diaria de una alumna de 55 kg que entrena 4 días por semana.", ["Rango: 1,2-1,6 g/kg.", "55 × 1,2 = 66 g; 55 × 1,6 = 88 g.", "Repartida en 4 comidas: unos 17-22 g por comida."], "Entre 66 y 88 g al día."],
    ["Un jugador pesa 70 kg antes y 68,9 kg después de entrenar. ¿Cuánto ha perdido y cuánto debe beber?", ["Pérdida: 1,1 kg ≈ 1,1 L de sudor.", "Porcentaje: 1,1 / 70 ≈ 1,6 %.", "Reponer: 1,1 × 1,5 ≈ 1,65 L en las horas siguientes."], "Pérdida del 1,6 %; beber unos 1,6-1,7 L."],
    ["Diseña el plato de la comida de un día de entrenamiento intenso.", ["Mitad: ensalada de tomate, lechuga y zanahoria, más una pieza de fruta.", "Un cuarto algo mayor de lo habitual: arroz integral.", "Un cuarto: garbanzos o pescado; aliño con aceite de oliva y agua."], "Plato equilibrado con más hidratos por el entrenamiento."],
    ["Compara dos cereales de desayuno por 100 g: A 28 g de azúcar y 4 g de fibra; B 9 g de azúcar y 10 g de fibra.", ["A supera los 15 g de azúcar: es alto en azúcar.", "B tiene poco azúcar y mucha fibra.", "B es mejor elección; A sería ocasional."], "Mejor el B."],
    ["Planifica la comida de un sábado con partido a las 12:00.", ["8:30 desayuno: tostadas integrales con tomate y aceite, yogur, fruta y agua.", "11:00 si hace falta: un plátano; beber 400-500 ml antes del partido.", "Después (13:30): pasta con verduras y pollo, fruta y agua abundante."], "Desayuno completo, tentempié ligero y comida de recuperación."],
    ["Analiza el mensaje: «quema grasa con este té detox y entrena en ayunas».", ["No hay pruebas de que los productos detox «quemen grasa».", "Entrenar en ayunas en adolescentes aumenta el riesgo de mareo y empeora el rendimiento.", "La composición corporal mejora con hábitos sostenidos: dieta variada, actividad y sueño."], "Mensaje engañoso: no seguirlo."],
  ],
  errores: [
    "Confundir «dieta» con restricción o con pasar hambre.",
    "Pensar que hacen falta batidos de proteínas para ganar músculo.",
    "Entrenar en ayunas o después de saltarse comidas.",
    "Beber solo cuando se tiene mucha sed o hidratarse con refrescos.",
    "Usar bebidas energéticas para rendir más en el deporte o en los estudios.",
    "Creer en los reclamos «fit», «light» o «detox» sin leer la etiqueta.",
  ],
  ejercicios: {
    b: [
      ["Diferencia alimento y nutriente.", "El alimento es el producto que se come; el nutriente, la sustancia que contiene y que el cuerpo utiliza."],
      ["Clasifica los nutrientes según su función.", "Energética (hidratos y grasas), plástica (proteínas, calcio), reguladora (vitaminas, minerales, agua)."],
      ["¿Cuántas kcal aporta un gramo de hidratos, de grasa y de proteína?", "4, 9 y 4 kcal respectivamente."],
      ["¿Qué es el metabolismo basal?", "La energía que gasta el cuerpo en reposo para mantener sus funciones vitales."],
      ["Cita tres alimentos ricos en hidratos complejos.", "Pan integral, arroz, pasta, patata, legumbres, avena."],
      ["¿Qué son los aminoácidos esenciales?", "Los que el cuerpo no puede fabricar y hay que obtener de la dieta (nueve)."],
      ["Nombra dos fuentes de grasas insaturadas.", "Aceite de oliva, frutos secos, aguacate, pescado azul."],
      ["¿Por qué es importante el calcio en la adolescencia?", "Porque en esta etapa se forma la mayor parte de la masa ósea."],
      ["¿Cuándo es útil una bebida isotónica?", "En esfuerzos de más de una hora o con mucho calor."],
      ["Describe el plato saludable.", "Mitad verduras y frutas, un cuarto cereales integrales, un cuarto proteínas, aceite de oliva y agua."],
      ["¿Qué indica el orden de la lista de ingredientes?", "La cantidad: de mayor a menor."],
      ["Nombra dos trastornos de la conducta alimentaria.", "Anorexia nerviosa, bulimia nerviosa, trastorno por atracón."],
    ],
    m: [
      ["Explica por qué el balance energético no funciona como una calculadora exacta.", "Porque el gasto y la absorción dependen de las hormonas, el sueño, el estrés, la masa muscular y el tipo de alimento; el cuerpo se adapta a los cambios de ingesta."],
      ["Calcula la proteína diaria de un chico de 72 kg que entrena fuerza.", "72 × 1,2 = 86 g; 72 × 1,6 = 115 g: entre 86 y 115 g al día."],
      ["¿Qué ocurre cuando se agota el glucógeno muscular?", "Aparece una fatiga brusca («pájara»): baja la intensidad que se puede mantener y empeoran la coordinación y la concentración."],
      ["Diseña un menú vegetariano con proteína completa.", "Desayuno: avena con leche o bebida de soja y fruta; comida: lentejas con arroz y ensalada; merienda: yogur y frutos secos; cena: tortilla de patata con verduras."],
      ["Una deportista pesa 50 kg antes y 49,3 kg después de entrenar. ¿Qué porcentaje ha perdido y cuánto debe beber?", "0,7 / 50 = 1,4 %; debe beber unos 1,05 L (0,7 × 1,5)."],
      ["¿Por qué no se debe probar una comida nueva el día de la competición?", "Porque puede causar molestias digestivas o no sentar bien; todo se ensaya antes en los entrenamientos."],
      ["Explica la diferencia entre bebida isotónica y energética.", "La isotónica repone agua, sales y algo de azúcar en esfuerzos largos; la energética contiene cafeína y mucho azúcar, no hidrata bien y no es adecuada para menores."],
      ["Analiza esta etiqueta: «12 g de sal por 100 g de un caldo concentrado».", "Es altísimo (más de 1,25 g/100 g); se usa poco, pero conviene moderar el consumo y preferir caldos caseros."],
      ["Indica qué comer tras un entrenamiento por la tarde.", "Una cena con hidratos (patata, arroz o pan), proteína (pescado, huevo o legumbre), verdura y agua, o un vaso de leche y un bocadillo si la cena va a tardar."],
      ["¿Por qué son un problema los ultraprocesados?", "Aportan mucha energía, azúcar, sal y grasas de baja calidad con pocos nutrientes, sacian poco y desplazan alimentos frescos."],
      ["Cita cuatro señales de alerta de un TCA.", "Saltarse comidas, contar calorías obsesivamente, ejercicio para compensar, aislarse en las comidas, cambios bruscos de peso o de ánimo."],
    ],
    a: [
      ["Planifica un día de comidas para una jugadora de 16 años que entrena de 18:00 a 19:30.", "Desayuno completo (pan integral, aceite, tomate, lácteo, fruta); media mañana: bocadillo y fruta; comida (14:30): plato saludable con legumbres o arroz; merienda (16:30): yogur con avena y plátano; durante: agua; cena (20:30): hidratos, proteína, verdura y agua."],
      ["Debate: ¿deberían prohibirse las bebidas energéticas a menores en toda España?", "A favor: efectos de la cafeína en adolescentes, consumo creciente, mezcla con alcohol, precedentes en varias comunidades. En contra: dificultad de control y otras fuentes de cafeína. Conclusión razonada que valore la salud pública y la educación."],
      ["Un compañero quiere ganar músculo y piensa tomar 3 batidos diarios. Calcula si los necesita y aconséjale.", "Si pesa 65 kg necesita 78-104 g de proteína; con una dieta normal ya toma 80-100 g. Los batidos sobran: mejor entrenar fuerza con progresión, comer suficiente, repartir proteína y dormir bien."],
      ["Explica el déficit de energía relativa en el deporte y sus consecuencias.", "Comer menos energía de la que exige el entrenamiento y las funciones vitales; produce fatiga, más lesiones y fracturas por estrés, alteraciones hormonales y menstruales, peor rendimiento y riesgo de TCA."],
      ["Compara la dieta mediterránea con una dieta basada en comida rápida.", "Mediterránea: vegetal, legumbres, oliva, pescado, fresca y social; previene enfermedades. Comida rápida: ultraprocesados, grasas de baja calidad, sal y azúcar, poca fibra; se asocia a obesidad y enfermedades cardiovasculares."],
      ["Analiza críticamente un anuncio de suplemento «quemagrasas» con tres argumentos.", "Falta de pruebas científicas independientes; posibles efectos secundarios o sustancias no declaradas; la pérdida de grasa depende de hábitos sostenidos, no de un producto."],
      ["Diseña una campaña para mejorar el almuerzo del recreo en tu instituto.", "Diagnóstico de lo que se come; mensajes positivos (bocadillos variados, fruta, agua); concurso de almuerzos saludables; colaboración con la cafetería y las familias; evaluación a los dos meses."],
      ["Relaciona la alimentación con el rendimiento académico.", "Un desayuno completo y comidas regulares mantienen la glucosa estable y la atención; la deshidratación y el exceso de azúcar causan fatiga y bajadas de concentración; dormir y comer bien se refuerzan."],
    ],
  },
  glosario: [
    ["Alimentación", "Proceso voluntario de elegir, preparar y comer alimentos."],
    ["Nutrición", "Procesos involuntarios de utilización de los nutrientes."],
    ["Nutriente", "Sustancia de los alimentos que el cuerpo necesita."],
    ["Kilocaloría", "Unidad de energía de los alimentos."],
    ["Metabolismo basal", "Gasto energético en reposo."],
    ["Balance energético", "Comparación entre la energía que entra y la que se gasta."],
    ["Glucógeno", "Forma de reserva de hidratos en músculo e hígado."],
    ["Índice glucémico", "Velocidad con que un alimento eleva la glucosa en sangre."],
    ["Aminoácido esencial", "Componente de las proteínas que hay que tomar con la dieta."],
    ["Grasas insaturadas", "Grasas saludables de origen vegetal y pescado."],
    ["Electrolitos", "Sales minerales como sodio y potasio que se pierden con el sudor."],
    ["Bebida isotónica", "Bebida con agua, sales y azúcar para esfuerzos largos."],
    ["Ultraprocesado", "Producto industrial con muchos aditivos, azúcar, sal o grasas."],
    ["Nutri-Score", "Etiqueta de calidad nutricional de la A a la E."],
    ["Suplemento", "Producto que complementa la dieta."],
    ["TCA", "Trastorno de la conducta alimentaria."],
  ],
  situacion: {
    titulo: "Come para moverte",
    reto: "Cada estudiante analizará su alimentación e hidratación durante una semana, la relacionará con su actividad física y diseñará un menú semanal equilibrado; el grupo elaborará una guía para deportistas jóvenes del centro.",
    pasos: [
      "Registra durante 5 días lo que comes y bebes y tu actividad física, sin juzgar.",
      "Compara tu registro con el plato saludable y con las pautas de hidratación.",
      "Analiza tres productos que consumes a menudo leyendo su etiqueta.",
      "Diseña un menú semanal adaptado a tus días de entrenamiento y de descanso.",
      "En grupo, redactad una guía visual con consejos y ejemplos de comidas antes y después del deporte.",
    ],
    producto: "Un menú semanal personal justificado y una guía visual (cartel o folleto digital) para los clubes deportivos del centro.",
    evaluacion: [
      "El análisis del registro es honesto y se compara con criterios científicos.",
      "El menú es variado, suficiente y se adapta a la actividad física.",
      "El análisis de etiquetas es correcto y crítico.",
      "La guía es clara, rigurosa y evita mensajes sobre el peso o la imagen.",
    ],
  },
  familias: [
    "Cocinad juntos alguna comida de la semana y planificad la compra con fruta y verdura de temporada.",
    "Ofreced agua como bebida habitual y evitad tener refrescos y bebidas energéticas en casa.",
    "Haced del desayuno y la cena momentos compartidos y sin pantallas.",
    "Evitad comentarios sobre el peso y el cuerpo; si notáis señales de alerta, consultad.",
  ],
  saberes: B.SAB("Nutrición y actividad física: alimentación y nutrición, nutrientes y funciones, necesidades y balance energético, hidratos, proteínas, grasas, vitaminas y minerales, hidratación, dieta mediterránea y plato saludable, alimentación antes, durante y después del ejercicio, suplementos y bebidas energéticas, etiquetado e imagen corporal"),
  ideas: [
    "Pesar a los alumnos (de forma voluntaria y privada) antes y después de una sesión para calcular la pérdida de sudor.",
    "Traer envases y comparar etiquetas con el Nutri-Score y la regla de los 100 g.",
    "Analizar en grupo publicaciones de redes sobre dietas y suplementos con criterios científicos.",
    "Coordinar con Biología o con Anatomía Aplicada una unidad sobre digestión y metabolismo.",
  ],
  fuentes: [
    B.FUENTES.AESAN,
    { t: "El plato para comer saludable, Escuela de Salud Pública de Harvard", url: "https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/translations/spanish/" },
    B.FUENTES.WIKI("Dieta_mediterránea", "Dieta mediterránea"),
  ],
});
