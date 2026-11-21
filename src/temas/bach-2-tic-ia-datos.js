// Tecnologías de la Información y la Comunicación II, 2º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
// Inteligencia artificial y análisis de datos: ciencia de datos con pandas, aprendizaje automático, redes neuronales, IA generativa y ética.
const B = require("./_bach2-tic");

const fondo = `<rect width="260" height="180" rx="14" fill="var(--paper)"/>`;

// Nube de puntos con recta de regresión.
const regresion = () => {
  const pts = [[1, 3.1], [2, 4.2], [3, 5.6], [4, 5.9], [5, 7.4], [6, 7.8], [7, 9.1], [8, 9.6]];
  const X = (x) => 40 + x * 24, Y = (y) => 150 - y * 12;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Regresión lineal: nube de puntos de horas de estudio frente a nota, con la recta que mejor se ajusta, de ecuación aproximada nota igual a 0,93 por horas más 2,4">
  ${fondo}${B.tx(130, 18, "Regresión lineal: horas → nota", { fs: 12, maxW: 236, bold: true, font: B.D })}
  <path d="M40 150 H 240 M40 150 V 28" stroke="var(--ink)" stroke-width="1.4"/>
  ${[2, 4, 6, 8].map((x) => `${B.tx(X(x), 163, String(x), { fs: 9, maxW: 14, color: "var(--muted)" })}`).join("")}${[5, 10].map((y) => `${B.tx(30, Y(y) + 3, String(y), { fs: 9, maxW: 16, color: "var(--muted)" })}`).join("")}
  <path d="M${X(0.5)} ${Y(0.93 * 0.5 + 2.4)} L ${X(8.4)} ${Y(0.93 * 8.4 + 2.4)}" stroke="var(--red)" stroke-width="2.4"/>
  ${pts.map(([x, y]) => `<circle cx="${X(x)}" cy="${Y(y)}" r="4.5" fill="var(--pen)"/>`).join("")}
  ${B.tx(196, 176, "horas de estudio", { fs: 9, maxW: 100, color: "var(--muted)" })}${B.tx(80, 40, "nota", { fs: 9, maxW: 40, color: "var(--muted)" })}
  ${B.tx(112, 64, "y = 0,93x + 2,4", { fs: 10, maxW: 100, bold: true, color: "var(--red)" })}
</svg>`;
};

// Red neuronal de tres capas.
const red = () => {
  const capas = [[3, 30, "var(--pen)"], [4, 120, "var(--sun)"], [2, 210, "var(--leaf)"]];
  const pos = capas.map(([n, x]) => Array.from({ length: n }, (_, i) => [x, 95 + (i - (n - 1) / 2) * 30]));
  const lineas = [0, 1].map((c) => pos[c].map(([x1, y1]) => pos[c + 1].map(([x2, y2]) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="var(--muted)" stroke-width="1" stroke-opacity=".7"/>`).join("")).join("")).join("");
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Red neuronal con una capa de entrada de tres neuronas, una capa oculta de cuatro y una capa de salida de dos; cada conexión tiene un peso que se ajusta durante el entrenamiento">
  ${fondo}${B.tx(130, 18, "Una red neuronal sencilla", { fs: 12, maxW: 236, bold: true, font: B.D })}
  ${lineas}
  ${pos.map((cap, c) => cap.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="10" fill="var(--card)" stroke="${capas[c][2]}" stroke-width="2.4"/>`).join("")).join("")}
  ${B.tx(30, 166, "entrada", { fs: 9.5, maxW: 56, bold: true, color: "var(--pen)" })}${B.tx(120, 166, "capa oculta", { fs: 9.5, maxW: 80, bold: true, color: "var(--sun)" })}${B.tx(210, 166, "salida", { fs: 9.5, maxW: 56, bold: true, color: "var(--leaf)" })}
  ${B.tx(242, 84, "gato", { fs: 9, maxW: 34, color: "var(--leaf)" })}${B.tx(242, 114, "perro", { fs: 9, maxW: 34, color: "var(--leaf)", anchor: "middle" })}
  ${B.tx(76, 40, "pesos w", { fs: 9, maxW: 60, color: "var(--muted)" })}
</svg>`;
};

module.exports = B.tema(B.textos({
  titulo: "Inteligencia artificial y análisis de datos",
  minutos: 120,
  objetivos: [
    "Explicar qué es la inteligencia artificial, su evolución y sus principales enfoques",
    "Aplicar las fases de un proyecto de datos y analizar conjuntos de datos reales con Python y pandas",
    "Interpretar estadísticas descriptivas y elegir visualizaciones adecuadas, distinguiendo correlación y causalidad",
    "Describir los tipos de aprendizaje automático y entrenar y evaluar modelos sencillos con scikit-learn",
    "Explicar el funcionamiento básico de las redes neuronales y de los modelos de lenguaje generativos",
    "Analizar críticamente los sesgos, los riesgos éticos y la regulación europea de la inteligencia artificial",
  ],
  claves: ["inteligencia artificial", "dato", "ciencia de datos", "pandas", "DataFrame", "media", "correlación", "aprendizaje automático", "supervisado", "clasificación", "regresión", "sobreajuste", "red neuronal", "IA generativa", "sesgo", "Reglamento de IA"],
  pregunta: {
    texto: "Tu plataforma de vídeos parece conocerte mejor que tus amigos: acierta casi siempre con lo que te apetece ver. ¿Ha programado alguien una regla para cada persona del mundo?",
    respuesta: "No. Nadie ha escrito esas reglas: el sistema las ha <b>aprendido de los datos</b>. Es el <mark>aprendizaje automático</mark>, la rama de la inteligencia artificial que más ha avanzado. Con los datos de miles de millones de visualizaciones (qué se ve, cuánto tiempo, qué se abandona), un algoritmo ajusta un modelo que predice qué probabilidad hay de que te guste cada vídeo. Lo mismo hacen los filtros de spam, los traductores o los asistentes que conversan. Entender cómo aprenden, y en qué se pueden equivocar, es imprescindible para usarlos con criterio.",
  },
  lectura: {
    titulo: "¿Pueden pensar las máquinas?",
    html: `<p>En 1950, Alan Turing publicó un artículo que empezaba con esta pregunta. Como «pensar» es difícil de definir, propuso un juego: si una persona conversa por escrito con una máquina y no es capaz de distinguirla de un ser humano, podríamos decir que la máquina piensa. Es el famoso <b>test de Turing</b>.</p>
    <p>En 1956, en una reunión en el Dartmouth College (Estados Unidos), John McCarthy acuñó el término «inteligencia artificial». Los pioneros eran muy optimistas, pero los ordenadores eran lentos y faltaban datos, y la financiación se hundió dos veces en los llamados «inviernos de la IA». El gran salto llegó a partir de 2012, cuando la combinación de enormes cantidades de datos, procesadores gráficos potentes y redes neuronales profundas permitió reconocer imágenes y voz con precisión humana.</p>
    <p>Desde finales de 2022, los modelos de lenguaje generativos como ChatGPT, Claude o Gemini han llevado la IA a cientos de millones de personas. Hoy, muchos de ellos superarían el juego de Turing, pero la pregunta de fondo sigue abierta: ¿entienden lo que dicen o solo predicen muy bien la siguiente palabra?</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Qué es la inteligencia artificial",
      html: `<p>La <mark>inteligencia artificial</mark> (IA) es la rama de la informática que desarrolla sistemas capaces de realizar tareas que, cuando las hace una persona, requieren inteligencia: reconocer imágenes y voz, entender y generar lenguaje, tomar decisiones, planificar o aprender de la experiencia. El Reglamento europeo la define como un sistema basado en máquinas que, a partir de la información que recibe, infiere cómo generar resultados, como predicciones, contenidos, recomendaciones o decisiones.</p>
      <p>Se distinguen dos grandes niveles:</p>
      <ul><li>La <b>IA específica</b> o débil, diseñada para una tarea concreta: jugar al ajedrez, detectar tumores en radiografías, traducir. Es la que existe hoy, y en muchas tareas supera a las personas.</li>
      <li>La <b>IA general</b>, que igualaría la capacidad humana en cualquier tarea intelectual. Todavía no existe, y los expertos discrepan sobre si llegará y cuándo.</li></ul>
      <p>La IA está presente en multitud de aplicaciones cotidianas: los asistentes de voz, los filtros de correo basura, las recomendaciones de series y compras, la cámara del móvil, la navegación GPS que predice el tráfico, la detección de fraudes en las tarjetas o los sistemas de ayuda a la conducción. En la ciencia, ha ayudado a predecir la estructura de las proteínas (premio Nobel de Química de 2024).</p>
      <p>Conviene recordar que una IA no tiene intenciones ni conciencia: es software que procesa datos según un modelo matemático. Sus resultados pueden ser muy útiles, pero también erróneos, y siempre dependen de los datos con los que se construyó.</p>`,
      svg: B.flujo("Hitos de la historia de la IA", ["1950: test de Turing", "1956: nace el término en Dartmouth", "1997: Deep Blue gana al ajedrez", "2012: auge del aprendizaje profundo", "2022: IA generativa para todos"], { t: "Breve historia" }),
    },
    {
      h: "Reglas o aprendizaje",
      html: `<p>Hay dos grandes enfoques para construir sistemas inteligentes:</p>
      <ul><li>La <b>IA simbólica</b> o basada en reglas: las personas expertas escriben explícitamente el conocimiento como reglas del tipo «si… entonces…». Los <b>sistemas expertos</b> de los años ochenta diagnosticaban enfermedades o configuraban ordenadores así. Son transparentes, porque se puede seguir su razonamiento, pero muy difíciles de construir para problemas complejos: ¿qué reglas describen una cara o un gato?</li>
      <li>El <mark>aprendizaje automático</mark> (<i>machine learning</i>): en lugar de programar las reglas, se proporciona al sistema una gran cantidad de <b>ejemplos</b> y un algoritmo encuentra por sí mismo los patrones. El resultado es un <b>modelo</b> que puede hacer predicciones sobre datos nuevos.</li></ul>
      <p>Compara los dos enfoques para un filtro de correo basura:</p>
      ${B.code(`# IA basada en reglas: las escribe una persona
def es_spam(asunto):
    sospechosas = ["gratis", "premio", "urgente", "bitcoin"]
    return any(p in asunto.lower() for p in sospechosas)

# Aprendizaje automático: el modelo aprende de miles de correos
# etiquetados como «spam» o «no spam» y descubre él solo
# qué palabras, remitentes y horas son señales de spam.`)}
      <p>Las reglas fallan en cuanto los remitentes escriben «gr4tis», mientras que un modelo entrenado se adapta si se vuelve a entrenar con correos nuevos. A cambio, el aprendizaje automático necesita muchos datos de calidad y sus decisiones son más difíciles de explicar.</p>`,
      svg: B.comparar("Programación clásica frente a aprendizaje automático", ["Programación clásica", ["datos + reglas", "→ resultados", "reglas escritas a mano", "fácil de explicar"]], ["Aprendizaje automático", ["datos + resultados", "→ reglas (modelo)", "aprende de ejemplos", "necesita muchos datos"]]),
    },
    {
      h: "El ciclo de un proyecto de datos",
      html: `<p>Cada día se generan cantidades gigantescas de datos: compras, búsquedas, sensores, satélites, historiales médicos, redes sociales. La <mark>ciencia de datos</mark> combina la estadística, la programación y el conocimiento de cada campo para extraer información útil de ellos. Un proyecto de datos sigue varias fases, que forman un ciclo:</p>
      <ol><li><b>Plantear la pregunta</b>: ¿qué queremos saber o decidir? Por ejemplo, ¿qué factores influyen en el abandono de una actividad extraescolar?</li>
      <li><b>Obtener los datos</b>: de bases de datos propias, encuestas, sensores o portales de <b>datos abiertos</b>, como datos.gob.es, el INE o los de las comunidades autónomas.</li>
      <li><b>Limpiar y preparar</b>: corregir errores, eliminar duplicados, tratar los valores que faltan y unificar formatos. Suele llevar la mayor parte del tiempo.</li>
      <li><b>Explorar</b>: calcular estadísticas y hacer gráficos para descubrir patrones y anomalías.</li>
      <li><b>Modelar</b>: aplicar técnicas estadísticas o de aprendizaje automático.</li>
      <li><b>Comunicar</b>: presentar las conclusiones con claridad, con sus limitaciones, para que sirvan para decidir.</li></ol>
      <p>Los datos pueden ser <b>estructurados</b>, organizados en tablas con filas y columnas (como una hoja de cálculo o una base de datos), o <b>no estructurados</b> (textos, imágenes, audio). Un formato muy usado para intercambiar datos estructurados es el <b>CSV</b>, un archivo de texto con un registro por línea y los valores separados por comas o por punto y coma.</p>
      <p>Un principio fundamental: «basura entra, basura sale». Ningún análisis puede compensar unos datos malos, incompletos o sesgados.</p>`,
      svg: B.ciclo("Fases de un proyecto de ciencia de datos", "Datos", ["Pregunta", "Obtener", "Limpiar", "Explorar", "Modelar", "Comunicar"]),
    },
    {
      h: "Análisis de datos con pandas",
      html: `<p>La biblioteca <mark>pandas</mark> de Python es la herramienta más usada para analizar datos. Su estructura principal es el <b>DataFrame</b>, una tabla con filas y columnas con nombre, parecida a una hoja de cálculo pero capaz de manejar millones de filas con pocas líneas de código.</p>
      ${B.code(`import pandas as pd

df = pd.read_csv("notas.csv")        # cargar un CSV
print(df.head())                     # primeras filas
print(df.shape)                      # (filas, columnas)
df.info()                            # tipos y valores que faltan
print(df.describe())                 # estadísticas de las columnas numéricas`)}
      <p>Las operaciones más habituales son seleccionar columnas, filtrar filas con condiciones, crear columnas nuevas, agrupar y ordenar, como en SQL:</p>
      ${B.code(`print(df["nota"].mean())                          # media de una columna
aprobados = df[df["nota"] >= 5]                    # filtrar filas
df["horas_semana"] = df["horas_total"] / 35        # columna calculada
medias = df.groupby("grupo")["nota"].mean()        # media por grupo
top = df.sort_values("nota", ascending=False).head(5)
df = df.dropna(subset=["nota"])                    # quitar filas sin nota
df = df.drop_duplicates()                          # quitar duplicados`)}
      <p>Para los valores que faltan (<code>NaN</code>) hay dos opciones: eliminar las filas incompletas con <code>dropna</code> o rellenarlas con <code>fillna</code>, por ejemplo con la media.</p>
      <p>Para practicar sin instalar nada se pueden usar cuadernos en línea como Google Colab o Jupyter, que mezclan código, resultados, gráficos y explicaciones en un mismo documento, lo que facilita que otras personas reproduzcan el análisis.</p>`,
      svg: B.rejilla("Operaciones básicas de pandas", ["Operación", "Código"], [["Cargar", "pd.read_csv()"], ["Resumir", "df.describe()"], ["Filtrar", "df[df.nota >= 5]"].map((x) => x.replace(/>/g, "&gt;")), ["Agrupar", "groupby().mean()"], ["Limpiar", "dropna(), fillna()"]], { t: "pandas" }),
      video: B.V("ia-pandas", "Pandas en 14 minutos, Python en español"),
    },
    {
      h: "Estadística descriptiva y visualización",
      html: `<p>El primer paso para entender unos datos es resumirlos con <b>estadísticos</b>:</p>
      <ul><li><b>Medidas de centralización</b>: la <b>media</b> (suma entre número de datos), la <b>mediana</b> (el valor central cuando se ordenan) y la <b>moda</b> (el más frecuente). La media es sensible a los valores extremos: en un barrio donde vive un millonario, el sueldo medio es engañoso y la mediana representa mejor a la mayoría.</li>
      <li><b>Medidas de dispersión</b>: el <b>rango</b> (máximo menos mínimo) y la <b>desviación típica</b>, que mide cuánto se alejan los datos de la media.</li>
      <li>La <b>correlación</b> entre dos variables, entre −1 y 1, que mide si tienden a crecer juntas (positiva), una crece cuando la otra baja (negativa) o no tienen relación lineal (cercana a 0).</li></ul>
      <p>Un error muy frecuente es confundir <b>correlación con causalidad</b>. Que dos variables estén relacionadas no significa que una cause la otra: las ventas de helados y los ahogamientos están correlacionados porque ambos aumentan en verano, que es la verdadera causa común.</p>
      <p>Las <b>visualizaciones</b> revelan patrones que las tablas esconden. Cada tipo de gráfico tiene su uso: <b>barras</b> para comparar categorías, <b>líneas</b> para la evolución en el tiempo, <b>dispersión</b> para la relación entre dos variables, <b>histogramas</b> para la distribución de una variable.</p>
      ${B.code(`import matplotlib.pyplot as plt
medias.plot(kind="bar", title="Nota media por grupo")
plt.ylabel("Nota")
plt.show()`)}
      <p>Un gráfico honesto tiene título, ejes rotulados con unidades, la fuente de los datos y un eje vertical que empieza en cero en las barras: cortarlo exagera las diferencias y es una forma habitual de manipular.</p>`,
      svg: B.barras("Media, mediana y moda de los sueldos de un barrio con un millonario, en miles de euros", [["Media", 98], ["Mediana", 24], ["Moda", 22]], { t: "Sueldos (miles de €)", unidad: " mil" }),
    },
    {
      h: "Tipos de aprendizaje automático",
      html: `<p>Según cómo aprenden, los algoritmos de aprendizaje automático se clasifican en tres grandes tipos:</p>
      <ul><li><b>Aprendizaje supervisado</b>: se entrena con ejemplos <b>etiquetados</b>, es decir, con la respuesta correcta. El modelo aprende la relación entre los datos de entrada (las <b>características</b>) y la etiqueta. Hay dos tareas:
        <ul><li><b>Clasificación</b>: predecir una categoría. ¿Este correo es spam? ¿Qué animal aparece en la foto? ¿Este lunar es benigno o maligno?</li>
        <li><b>Regresión</b>: predecir un número. ¿Qué precio tendrá esta vivienda? ¿Cuántos kilovatios consumirá el instituto mañana?</li></ul></li>
      <li><b>Aprendizaje no supervisado</b>: los datos no tienen etiquetas, y el algoritmo busca por sí solo estructuras ocultas. La tarea más común es el <b>agrupamiento</b> (<i>clustering</i>): dividir los clientes de una tienda en grupos con hábitos de compra parecidos, sin saber de antemano cuáles son. También sirve para detectar anomalías, como transacciones fraudulentas.</li>
      <li><b>Aprendizaje por refuerzo</b>: un <b>agente</b> aprende por ensayo y error interactuando con un entorno, recibiendo <b>recompensas</b> cuando acierta y penalizaciones cuando falla. Así aprendió AlphaGo a jugar al go mejor que cualquier persona.</li></ul>
      <p>En todos los casos, el resultado del entrenamiento es un <b>modelo</b>: una función matemática con muchos parámetros ajustados a partir de los datos. Una vez entrenado, el modelo se usa para hacer <b>predicciones</b> (o <i>inferencias</i>) sobre datos que nunca ha visto.</p>`,
      svg: B.cajas("Tipos de aprendizaje automático", [["Supervisado", "ejemplos con|respuesta"], ["Clasificación", "categoría|o regresión: número"], ["No supervisado", "busca grupos|sin etiquetas"], ["Por refuerzo", "ensayo, error|y recompensa"]], { t: "Aprender de los datos" }),
      video: B.V("ia-ml", "Qué es machine learning o aprendizaje automático"),
    },
    {
      h: "Entrenar y evaluar un modelo",
      html: `<p>Para saber si un modelo funciona, no basta con comprobar que acierta con los datos con los que se entrenó: podría haberlos memorizado. Por eso los datos se dividen en dos partes: un <b>conjunto de entrenamiento</b> (por ejemplo, el 80 %), con el que aprende, y un <b>conjunto de prueba</b> (el 20 % restante), que se reserva para medir cómo funciona con datos nuevos.</p>
      <p>La biblioteca <b>scikit-learn</b> facilita todo el proceso. Este ejemplo entrena un clasificador de <b>k vecinos más próximos</b> (<i>k-NN</i>), que clasifica cada caso nuevo según la clase mayoritaria de los k ejemplos más parecidos:</p>
      ${B.code(`from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

X, y = load_iris(return_X_y=True)        # medidas de 150 flores y su especie
X_ent, X_pru, y_ent, y_pru = train_test_split(X, y, test_size=0.2, random_state=1)

modelo = KNeighborsClassifier(n_neighbors=5)
modelo.fit(X_ent, y_ent)                 # entrenar
pred = modelo.predict(X_pru)             # predecir
print(accuracy_score(y_pru, pred))       # exactitud, cerca de 0,97`)}
      <p>La <b>exactitud</b> (proporción de aciertos) no siempre es suficiente. Si solo el 1 % de los pacientes tiene una enfermedad, un modelo que diga siempre «sano» acierta el 99 %, pero no sirve. Por eso se usa la <b>matriz de confusión</b>, que cuenta los verdaderos y falsos positivos y negativos.</p>
      <p>Los dos problemas típicos son el <b>sobreajuste</b> (<i>overfitting</i>): el modelo se aprende de memoria los datos de entrenamiento, con su ruido, y falla con los nuevos; y el <b>subajuste</b>: el modelo es demasiado simple para captar el patrón. Se detectan comparando los resultados en entrenamiento y en prueba.</p>`,
      svg: B.rejilla("Matriz de confusión de un detector de una enfermedad", ["", "Predice sí · Predice no"], [["Enfermo", "VP acierto · FN se escapa"], ["Sano", "FP falsa alarma · VN acierto"], ["Exactitud", "(VP + VN) / total"], ["Sensibilidad", "VP / (VP + FN)"]], { t: "Matriz de confusión" }),
    },
    {
      h: "Regresión lineal",
      html: `<p>La <mark>regresión lineal</mark> es uno de los modelos más sencillos y útiles de aprendizaje supervisado. Busca la recta <code>y = a·x + b</code> que mejor se ajusta a una nube de puntos, es decir, la que hace mínima la suma de los cuadrados de las distancias verticales entre los puntos y la recta (método de <b>mínimos cuadrados</b>). Los parámetros a (pendiente) y b (ordenada en el origen) son lo que el modelo «aprende».</p>
      <p>Por ejemplo, con los datos de horas de estudio semanales y nota de ocho estudiantes:</p>
      ${B.code(`import numpy as np
from sklearn.linear_model import LinearRegression

horas = np.array([[1], [2], [3], [4], [5], [6], [7], [8]])
nota = np.array([3.1, 4.2, 5.6, 5.9, 7.4, 7.8, 9.1, 9.6])

modelo = LinearRegression().fit(horas, nota)
print(modelo.coef_[0], modelo.intercept_)   # ≈ 0.93 y 2.4
print(modelo.predict([[4.5]]))              # ≈ 6.6
print(modelo.score(horas, nota))            # R² ≈ 0.99`)}
      <p>El modelo indica que cada hora adicional de estudio se asocia con unas 0,93 décimas más de nota… en estos datos. La interpretación requiere cuidado: el coeficiente <b>R²</b> mide qué parte de la variación de la nota explica el modelo (1 es un ajuste perfecto), pero un buen ajuste no demuestra causalidad, y extrapolar fuera del rango de los datos es peligroso: con 20 horas, el modelo predeciría una nota de 21.</p>
      <p>El mismo esquema, con muchas más variables de entrada, se usa para estimar el precio de una vivienda a partir de su superficie, su ubicación y su antigüedad, o la demanda de electricidad a partir de la temperatura y el día de la semana.</p>`,
      svg: regresion(),
    },
    {
      h: "Redes neuronales y aprendizaje profundo",
      html: `<p>Las <mark>redes neuronales artificiales</mark> se inspiran, de forma muy simplificada, en el cerebro. Su unidad básica es la <b>neurona artificial</b>: recibe varios valores de entrada, multiplica cada uno por un <b>peso</b>, suma los resultados y un valor llamado <b>sesgo</b>, y aplica una <b>función de activación</b> que decide la salida.</p>
      ${B.code(`def neurona(entradas, pesos, sesgo):
    suma = sum(x * w for x, w in zip(entradas, pesos)) + sesgo
    return 1 if suma > 0 else 0          # activación escalón

# ¿Voy a la excursión? (hace sol, va mi amiga, es cara)
print(neurona([1, 1, 0], [0.6, 0.5, -0.9], -0.8))   # 1: sí`)}
      <p>Las neuronas se organizan en <b>capas</b>: una capa de entrada que recibe los datos (por ejemplo, los píxeles de una imagen), una o varias <b>capas ocultas</b> y una capa de salida con el resultado (la probabilidad de cada clase). Cuando hay muchas capas ocultas se habla de <mark>aprendizaje profundo</mark> (<i>deep learning</i>). Cada capa aprende rasgos más abstractos: en una imagen, la primera detecta bordes; las siguientes, formas; las últimas, ojos, ruedas o caras.</p>
      <p>Entrenar una red consiste en ajustar sus pesos, que pueden ser miles de millones. Se le muestran ejemplos, se mide el <b>error</b> de sus respuestas con una función de pérdida y, mediante el algoritmo de <b>retropropagación</b> y el <b>descenso del gradiente</b>, se modifican un poco todos los pesos en la dirección que reduce el error. Este proceso se repite millones de veces, y por eso exige enormes cantidades de datos y de cálculo en procesadores gráficos (GPU).</p>
      <p>Las redes neuronales son la base de la visión artificial, el reconocimiento de voz, la traducción automática y la IA generativa. Su principal inconveniente es que funcionan como una <b>caja negra</b>: es muy difícil explicar por qué toman una decisión concreta.</p>`,
      svg: red(),
      video: B.V("ia-redes", "Qué es una red neuronal: la neurona"),
    },
    {
      h: "IA generativa y modelos de lenguaje",
      html: `<p>La <mark>IA generativa</mark> crea contenidos nuevos: textos, imágenes, música, voz, vídeo o código. Los <b>grandes modelos de lenguaje</b> (LLM), como los que hay detrás de ChatGPT, Claude o Gemini, son redes neuronales enormes, de tipo <b>transformer</b>, entrenadas con una cantidad gigantesca de textos para una tarea aparentemente sencilla: <b>predecir el siguiente fragmento de texto</b> (<i>token</i>). Al repetir la predicción una y otra vez, generan respuestas completas. Después se ajustan con ejemplos y valoraciones humanas para que sigan instrucciones y sean útiles y seguros.</p>
      <p>Son herramientas muy potentes para resumir, explicar, traducir, generar ideas o programar, pero tienen limitaciones importantes:</p>
      <ul><li>Pueden producir <b>alucinaciones</b>: datos, citas o referencias falsas expresadas con total seguridad, porque generan texto plausible, no necesariamente verdadero.</li>
      <li>Su conocimiento tiene una <b>fecha de corte</b>, salvo que consulten fuentes externas.</li>
      <li>Pueden reproducir <b>sesgos</b> de los textos con los que se entrenaron.</li>
      <li>Lo que se escribe en ellos puede almacenarse: no hay que introducir <b>datos personales</b> o confidenciales.</li></ul>
      <p>La calidad de la respuesta depende mucho de la <b>instrucción</b> (<i>prompt</i>): conviene dar contexto, indicar el objetivo, el formato y el público, y pedir que se expliquen los pasos o se citen fuentes.</p>
      <p>En el estudio, la IA puede ser un tutor excelente si se usa para entender, practicar y revisar, y no para sustituir el propio aprendizaje. Hay que <b>verificar</b> siempre la información importante, <b>declarar</b> su uso cuando lo exija el profesorado y recordar que la responsabilidad del trabajo es de quien lo entrega.</p>`,
      svg: B.flujo("Cómo genera texto un modelo de lenguaje", ["Instrucción: «La capital de Francia es…»", "Dividir el texto en tokens", "La red calcula probabilidades", "Elegir el siguiente token: «París»", "Repetir hasta terminar"], { t: "Predecir la siguiente palabra" }),
    },
    {
      h: "Sesgos, ética y sociedad",
      html: `<p>Un modelo aprende de los datos, y si los datos reflejan desigualdades del pasado, el modelo las reproduce o incluso las amplifica. Es el <mark>sesgo algorítmico</mark>. Se han documentado casos reales: sistemas de selección de personal que penalizaban los currículos de mujeres porque se entrenaron con contrataciones históricas mayoritariamente masculinas, o sistemas de reconocimiento facial que fallaban mucho más con personas de piel oscura porque había pocas en los datos de entrenamiento.</p>
      <p>Los principales retos éticos de la IA son:</p>
      <ul><li><b>Equidad</b>: evitar la discriminación, revisando los datos y midiendo los resultados en cada grupo de población.</li>
      <li><b>Transparencia y explicabilidad</b>: las personas afectadas por una decisión automatizada (un préstamo, una beca, un diagnóstico) tienen derecho a saberlo y a recibir una explicación.</li>
      <li><b>Privacidad</b>: los modelos se entrenan con enormes cantidades de datos, a veces personales y obtenidos sin consentimiento.</li>
      <li><b>Responsabilidad</b>: debe estar claro quién responde de los errores, y las decisiones importantes deben tener <b>supervisión humana</b>.</li>
      <li><b>Desinformación</b>: los <b>deepfakes</b> (vídeos, imágenes y voces falsos muy realistas) se usan para estafas, acoso y manipulación política.</li>
      <li><b>Propiedad intelectual</b>: el uso de obras protegidas para entrenar modelos y la autoría de lo que generan.</li>
      <li><b>Empleo</b>: la automatización transforma muchas profesiones, lo que exige formación continua.</li>
      <li><b>Medio ambiente</b>: entrenar y usar grandes modelos consume mucha electricidad y agua para refrigerar los centros de datos.</li></ul>
      <p>La IA no es neutral: refleja las decisiones de quienes la diseñan, eligen los datos y la usan. Por eso es necesaria la participación de toda la sociedad, no solo de los técnicos.</p>`,
      svg: B.cajas("Retos éticos de la inteligencia artificial", [["Equidad", "datos con|sesgos"], ["Transparencia", "explicar las|decisiones"], ["Privacidad", "datos|personales"], ["Supervisión", "una persona|responde"]], { t: "IA responsable" }),
    },
    {
      h: "Regulación y uso responsable",
      html: `<p>La Unión Europea aprobó en 2024 el <mark>Reglamento de Inteligencia Artificial</mark>, la primera ley integral sobre IA del mundo, que se aplica de forma progresiva. Clasifica los sistemas según su <b>nivel de riesgo</b> para la salud, la seguridad y los derechos fundamentales:</p>
      <ul><li><b>Riesgo inaceptable</b>: prohibidos. Por ejemplo, la puntuación social de los ciudadanos, la manipulación que explota vulnerabilidades de menores o la detección de emociones en el trabajo y en los centros educativos.</li>
      <li><b>Alto riesgo</b>: permitidos con requisitos estrictos (calidad de los datos, documentación, supervisión humana, ciberseguridad). Incluye sistemas usados en educación (admisión, evaluación), empleo, servicios públicos esenciales, justicia o infraestructuras críticas.</li>
      <li><b>Riesgo limitado</b>: obligaciones de <b>transparencia</b>. Hay que informar a las personas de que hablan con una IA, y los contenidos generados o manipulados, como los deepfakes, deben estar marcados.</li>
      <li><b>Riesgo mínimo</b>: la mayoría de las aplicaciones, como los filtros de spam o los videojuegos, sin obligaciones especiales.</li></ul>
      <p>Los modelos de uso general más potentes deben, además, documentar su entrenamiento, respetar los derechos de autor y evaluar sus riesgos. En España, la <b>Agencia Española de Supervisión de la Inteligencia Artificial</b> (AESIA), con sede en A Coruña, vigila el cumplimiento.</p>
      <p>Como usuarios, un uso responsable de la IA supone: conocer sus limitaciones y verificar los resultados; proteger los datos propios y ajenos; no usarla para engañar, suplantar o acosar; citar su uso; y mantener el juicio crítico. Como futuros profesionales, supone diseñar sistemas justos, transparentes y seguros desde el principio.</p>`,
      svg: B.capas("Niveles de riesgo del Reglamento europeo de IA", [["Inaceptable", "prohibido"], ["Alto", "requisitos estrictos"], ["Limitado", "transparencia"], ["Mínimo", "uso libre"]], { t: "Pirámide de riesgos" }),
    },
  ],
  figura: {
    titulo: "Ideas clave de IA y análisis de datos",
    items: [["Datos", "pandas", "limpiar, explorar,", "visualizar"], ["Aprender", "ML", "supervisado, no sup.,", "por refuerzo"], ["Evaluar", "prueba", "exactitud, matriz,", "sobreajuste"], ["Responsable", "ética", "sesgos, privacidad,", "Reglamento UE"]],
  },
  video: B.V("ia-general", "Qué es la inteligencia artificial, explicado en 5 minutos"),
  quiz: [
    ["La IA que existe hoy es sobre todo…", ["IA general", "IA específica", "consciente", "biológica"], 1, "Diseñada para tareas concretas."],
    ["El test de Turing propone…", ["medir la velocidad de un ordenador", "distinguir por conversación una máquina de una persona", "romper Enigma", "contar neuronas"], 1, "1950."],
    ["En el aprendizaje automático, las reglas…", ["las escribe una persona", "se aprenden a partir de ejemplos", "no existen", "las da el usuario final"], 1, "El resultado es un modelo."],
    ["La fase que suele llevar más tiempo en un proyecto de datos es…", ["comunicar", "limpiar y preparar los datos", "elegir colores", "instalar Python"], 1, "Basura entra, basura sale."],
    ["Un archivo CSV es…", ["una imagen", "texto con valores separados por comas", "un programa", "una red neuronal"], 1, "Datos tabulares."],
    ["En pandas, la tabla principal se llama…", ["Array", "DataFrame", "Hoja", "Tabla"], 1, "Filas y columnas con nombre."],
    ["df[df[\"nota\"] >= 5] sirve para…", ["borrar notas", "filtrar las filas aprobadas", "ordenar", "calcular la media"], 1, "Filtro con condición."],
    ["Con valores extremos, representa mejor el centro…", ["la media", "la mediana", "el rango", "el máximo"], 1, "No le afectan los extremos."],
    ["Una correlación de −0,9 indica…", ["ninguna relación", "fuerte relación inversa", "causalidad", "un error"], 1, "Cuando una sube, la otra baja."],
    ["Correlación entre dos variables…", ["demuestra causalidad", "no implica causalidad", "es siempre positiva", "solo existe en física"], 1, "Puede haber una causa común."],
    ["Para mostrar la evolución en el tiempo se usa un gráfico de…", ["sectores", "líneas", "radar", "tarta"], 1, "Series temporales."],
    ["Predecir si un correo es spam es una tarea de…", ["regresión", "clasificación", "clustering", "refuerzo"], 1, "Categoría."],
    ["Predecir el precio de una vivienda es…", ["clasificación", "regresión", "agrupamiento", "un CMS"], 1, "Valor numérico."],
    ["Agrupar clientes sin etiquetas previas es aprendizaje…", ["supervisado", "no supervisado", "por refuerzo", "manual"], 1, "Clustering."],
    ["Los datos de prueba sirven para…", ["entrenar más", "medir el rendimiento con datos nuevos", "rellenar huecos", "borrar errores"], 1, "No se usan para entrenar."],
    ["El sobreajuste ocurre cuando el modelo…", ["es demasiado simple", "memoriza el entrenamiento y falla con datos nuevos", "no tiene datos", "acierta siempre"], 1, "Overfitting."],
    ["Una neurona artificial multiplica las entradas por…", ["sesgos", "pesos", "píxeles", "tokens"], 1, "Y suma el sesgo."],
    ["Los grandes modelos de lenguaje se entrenan para…", ["buscar en Google", "predecir el siguiente fragmento de texto", "contar palabras", "traducir solo"], 1, "Tokens."],
    ["Una alucinación de un modelo de lenguaje es…", ["un error de hardware", "un dato falso expresado con seguridad", "una imagen", "un virus"], 1, "Verificar siempre."],
    ["Según el Reglamento europeo, la puntuación social de ciudadanos es…", ["riesgo mínimo", "riesgo inaceptable (prohibida)", "riesgo limitado", "obligatoria"], 1, "Prohibida."],
  ],
  examen: [
    ["Calcula la media y la mediana de 2, 3, 3, 4 y 18.", ["6 y 3", "3 y 4", "6 y 4", "5 y 3"], 0, "30/5 = 6; el valor central es 3."],
    ["Un modelo acierta el 99 % en entrenamiento y el 62 % en prueba. ¿Qué ocurre?", ["subajuste", "sobreajuste", "está perfecto", "faltan datos de prueba"], 1, "Ha memorizado."],
    ["Un detector de fraude marca como fraude 30 operaciones, de las que 20 lo son; hay 25 fraudes en total. ¿Sensibilidad?", ["0,67", "0,8", "0,5", "1"], 1, "VP/(VP+FN) = 20/25."],
    ["Con y = 0,93x + 2,4, ¿qué nota predice el modelo para 6 horas?", ["7,98", "5,58", "8,4", "6"], 0, "0,93·6 + 2,4."],
    ["¿Qué hace df.groupby(\"grupo\")[\"nota\"].mean()?", ["borra grupos", "calcula la nota media de cada grupo", "ordena por grupo", "cuenta alumnos"], 1, "Como GROUP BY en SQL."],
    ["Una neurona con entradas [1, 0], pesos [0,7, 0,4] y sesgo −0,5 y activación escalón da…", ["0", "1", "0,2", "−0,5"], 1, "0,7 − 0,5 = 0,2 > 0."],
    ["Un sistema de contratación entrenado con datos históricos rechaza más a mujeres. Es un ejemplo de…", ["sobreajuste", "sesgo algorítmico", "alucinación", "aprendizaje por refuerzo"], 1, "Reproduce desigualdades de los datos."],
    ["Un chatbot de atención al cliente, según el Reglamento europeo, debe…", ["prohibirse", "informar de que es una IA", "no tiene obligaciones", "registrarse como alto riesgo siempre"], 1, "Riesgo limitado: transparencia."],
  ],
  feynman: ["Qué es la IA y en qué se diferencian la IA específica y la general", "Qué diferencia hay entre programar reglas y aprender de los datos", "Cuáles son las fases de un proyecto de datos", "Cómo se carga, filtra y agrupa una tabla con pandas", "Por qué correlación no implica causalidad", "Qué tipos de aprendizaje automático hay y cómo se evalúa un modelo", "Cómo funciona una neurona artificial y cómo genera texto un modelo de lenguaje", "Qué son los sesgos algorítmicos y qué establece el Reglamento europeo de IA"],
  mapa: ["IA Y DATOS", [["Datos", "pandas · estadística · gráficos"], ["Aprendizaje", "supervisado · no sup. · refuerzo"], ["Modelos", "regresión · k-NN · redes"], ["Sociedad", "sesgos · ética · Reglamento UE"]]],
  tarjetas: [
    ["IA", "Sistemas que hacen tareas que requieren inteligencia; hoy, IA específica."],
    ["Aprendizaje automático", "Datos + resultados → modelo que predice."],
    ["Proyecto de datos", "Pregunta, obtener, limpiar, explorar, modelar, comunicar."],
    ["pandas", "read_csv, describe, filtrar, groupby, dropna."],
    ["Media y mediana", "La mediana resiste los valores extremos."],
    ["Correlación", "Entre −1 y 1; no implica causalidad."],
    ["Supervisado", "Ejemplos etiquetados: clasificación o regresión."],
    ["No supervisado y refuerzo", "Agrupar sin etiquetas / aprender con recompensas."],
    ["Evaluación", "Entrenamiento y prueba; exactitud, matriz de confusión, sobreajuste."],
    ["Red neuronal", "Neuronas con pesos y sesgo en capas; se entrena reduciendo el error."],
    ["LLM", "Predice el siguiente token; puede alucinar: verificar."],
    ["Reglamento de IA", "Riesgo inaceptable, alto, limitado y mínimo; AESIA."],
  ],
  ejemplos: [
    ["Carga un CSV de calidad del aire y muestra la media de NO₂ por estación, de mayor a menor.", ["Cargar con read_csv.", "Agrupar por estación y calcular la media de la columna no2.", "Ordenar de forma descendente."], "import pandas as pd\ndf = pd.read_csv(\"aire.csv\")\nprint(df.groupby(\"estacion\")[\"no2\"].mean().sort_values(ascending=False))"],
    ["Calcula media, mediana y desviación típica de las notas 4, 6, 6, 7 y 9.", ["Media: 32/5 = 6,4.", "Mediana: el valor central ordenado, 6.", "Desviación típica (poblacional): raíz de la media de los cuadrados de las desviaciones: (5,76+0,16+0,16+0,36+6,76)/5 = 2,64 → raíz ≈ 1,62."], "Media 6,4; mediana 6; desviación típica ≈ 1,62."],
    ["Un estudio encuentra que los alumnos que desayunan sacan mejores notas. ¿Puede concluirse que desayunar mejora las notas?", ["Hay correlación, pero no necesariamente causalidad.", "Puede haber variables comunes: hábitos de sueño, nivel socioeconómico, organización familiar.", "Para demostrar causalidad haría falta un experimento controlado."], "No con esos datos: solo muestran una asociación que puede deberse a otros factores."],
    ["Clasifica cada tarea: predecir la temperatura de mañana, detectar si una radiografía muestra neumonía, agrupar canciones parecidas sin etiquetas, enseñar a un robot a andar.", ["Número → regresión.", "Categoría con ejemplos etiquetados → clasificación.", "Sin etiquetas → no supervisado.", "Ensayo y error con recompensa → refuerzo."], "Regresión, clasificación, agrupamiento (no supervisado) y aprendizaje por refuerzo."],
    ["Un test de un virus tiene VP = 90, FN = 10, FP = 45 y VN = 855. Calcula la exactitud y la sensibilidad.", ["Total = 1000.", "Exactitud = (90 + 855)/1000.", "Sensibilidad = 90/(90 + 10)."], "Exactitud 0,945 (94,5 %); sensibilidad 0,9 (detecta el 90 % de los positivos)."],
    ["Escribe una buena instrucción para que una IA te ayude a repasar el tema de SQL sin hacerte los ejercicios.", ["Dar contexto: curso y tema.", "Pedir el papel de tutor: preguntas y pistas, no soluciones.", "Indicar el formato y el nivel de dificultad."], "«Soy estudiante de 2º de Bachillerato y estoy repasando consultas SQL con GROUP BY y JOIN. Hazme cinco preguntas de dificultad creciente, de una en una. No me des la solución: si me equivoco, dame una pista y explícame el error.»"],
  ],
  errores: [
    "Creer que la IA entiende o tiene intenciones, o que sus respuestas son siempre correctas.",
    "Analizar datos sin limpiarlos, ignorando duplicados, errores y valores que faltan.",
    "Confundir correlación con causalidad.",
    "Evaluar un modelo con los mismos datos con los que se entrenó.",
    "Fiarse solo de la exactitud cuando las clases están muy desequilibradas.",
    "Introducir datos personales en herramientas de IA o entregar sus respuestas sin verificarlas ni citarlas.",
  ],
  ejercicios: {
    b: [
      ["Define inteligencia artificial y distingue IA específica y general.", "Sistemas que realizan tareas que requieren inteligencia. La específica resuelve una tarea concreta (la que existe hoy); la general igualaría a las personas en cualquier tarea intelectual y aún no existe."],
      ["Nombra cinco aplicaciones de la IA que uses en tu vida diaria.", "Recomendaciones de vídeos, filtro de spam, asistente de voz, cámara del móvil, traductor, navegación GPS, desbloqueo facial."],
      ["Ordena las fases de un proyecto de datos: modelar, obtener, comunicar, plantear la pregunta, limpiar, explorar.", "Plantear la pregunta, obtener, limpiar, explorar, modelar y comunicar."],
      ["¿Qué es un archivo CSV? Escribe las tres primeras líneas de uno con nombre y nota.", "Un archivo de texto con datos en tabla, un registro por línea y valores separados por comas.\nnombre,nota\nEva,8.5\nLeo,6"],
      ["Escribe el código de pandas para cargar datos.csv y mostrar sus cinco primeras filas.", "import pandas as pd\ndf = pd.read_csv(\"datos.csv\")\nprint(df.head())"],
      ["Calcula la media, la mediana y la moda de 5, 7, 7, 8 y 13.", "Media 8; mediana 7; moda 7."],
      ["¿Qué gráfico usarías para mostrar la evolución del paro durante diez años? ¿Y para comparar la población de cinco países?", "Un gráfico de líneas; un gráfico de barras."],
      ["Indica si son clasificación o regresión: predecir el resultado de un partido (gana, empata, pierde) y predecir cuántos goles se marcarán.", "Clasificación y regresión."],
      ["¿Qué diferencia hay entre aprendizaje supervisado y no supervisado?", "En el supervisado los ejemplos tienen la respuesta correcta (etiqueta); en el no supervisado no, y el algoritmo busca estructuras por sí mismo."],
      ["¿Para qué se separan los datos en entrenamiento y prueba?", "Para entrenar con una parte y comprobar con la otra, que el modelo no ha visto, si funciona con datos nuevos."],
      ["¿Qué es una alucinación de un modelo de lenguaje? Pon un ejemplo.", "Un contenido falso presentado con seguridad, por ejemplo, una cita bibliográfica de un libro que no existe."],
      ["Nombra los cuatro niveles de riesgo del Reglamento europeo de IA.", "Inaceptable (prohibido), alto, limitado y mínimo."],
    ],
    m: [
      ["Escribe un programa con pandas que cargue notas.csv, elimine las filas sin nota y muestre la media de cada asignatura.", "import pandas as pd\ndf = pd.read_csv(\"notas.csv\").dropna(subset=[\"nota\"])\nprint(df.groupby(\"asignatura\")[\"nota\"].mean())"],
      ["Con pandas, cuenta cuántos alumnos han aprobado en cada grupo.", "print(df[df[\"nota\"] >= 5].groupby(\"grupo\").size())"],
      ["Añade una columna «resultado» con «Aprobado» o «Suspenso» según la nota.", "df[\"resultado\"] = df[\"nota\"].apply(lambda n: \"Aprobado\" if n >= 5 else \"Suspenso\")"],
      ["Dibuja con matplotlib un gráfico de barras con la nota media de cada grupo, con título y etiquetas.", "import matplotlib.pyplot as plt\nmedias = df.groupby(\"grupo\")[\"nota\"].mean()\nmedias.plot(kind=\"bar\")\nplt.title(\"Nota media por grupo\")\nplt.ylabel(\"Nota\"); plt.ylim(0, 10)\nplt.show()"],
      ["En una empresa de 9 empleados que ganan 1500 € y un director que gana 15 000 €, calcula media y mediana. ¿Qué valor da una idea más justa del sueldo típico?", "Media = (9·1500 + 15 000)/10 = 2850 €; mediana = 1500 €. La mediana representa mejor el sueldo típico."],
      ["Busca un ejemplo de correlación sin causalidad y explica la causa común.", "Los municipios con más bomberos tienen más incendios: ambos dependen del tamaño de la población. O el número de piscinas y de quemaduras solares, que dependen del calor."],
      ["Explica cómo clasifica k-NN con k = 3 un punto nuevo cuyos tres vecinos más próximos son de las clases A, B y A.", "Busca los tres ejemplos más parecidos y asigna la clase mayoritaria: A (2 votos frente a 1)."],
      ["Entrena con scikit-learn un árbol de decisión sobre el conjunto iris y compara su exactitud con la de k-NN.", "from sklearn.tree import DecisionTreeClassifier\narbol = DecisionTreeClassifier(random_state=1).fit(X_ent, y_ent)\nprint(accuracy_score(y_pru, arbol.predict(X_pru)))\n# Ambos rondan el 0,9-1; con tan pocos datos de prueba, la diferencia no es significativa."],
      ["Calcula la exactitud de un modelo que, con 950 sanos y 50 enfermos, dice siempre «sano». ¿Por qué no sirve?", "Exactitud = 950/1000 = 0,95, pero su sensibilidad es 0: no detecta a ningún enfermo, que es lo importante."],
      ["Con la recta y = 0,93x + 2,4, predice la nota para 3 y 20 horas y comenta el segundo resultado.", "3 h → 5,19; 20 h → 21. El segundo es absurdo (la nota máxima es 10): no se debe extrapolar fuera del rango de los datos."],
      ["Calcula la salida de una neurona con entradas [2, 1, 3], pesos [0,5, −1, 0,2], sesgo −0,4 y activación escalón.", "Suma = 1 − 1 + 0,6 − 0,4 = 0,2 > 0 → salida 1."],
      ["Explica en qué consiste entrenar una red neuronal.", "Mostrarle ejemplos, medir el error de sus respuestas y ajustar poco a poco todos los pesos en la dirección que reduce ese error (retropropagación y descenso del gradiente), repitiendo el proceso muchas veces."],
      ["Explica por qué un modelo de lenguaje puede inventarse una referencia bibliográfica.", "Porque genera el texto más probable según los patrones aprendidos, no consulta una base de datos de hechos: una referencia inventada puede tener el aspecto perfecto de una real."],
      ["Clasifica según el Reglamento europeo: un sistema que corrige automáticamente exámenes de acceso a la universidad, un filtro de spam, un chatbot de una tienda y un sistema de puntuación social.", "Alto riesgo (educación), riesgo mínimo, riesgo limitado (transparencia) y riesgo inaceptable (prohibido)."],
    ],
    a: [
      ["Descarga de datos.gob.es o del INE un conjunto de datos de tu comunidad, plantea una pregunta y respóndela con pandas y un gráfico.", "Respuesta abierta. Debe incluir la pregunta, la fuente, la limpieza realizada (duplicados, valores que faltan, tipos), estadísticas descriptivas, un gráfico adecuado y rotulado, y conclusiones con sus limitaciones."],
      ["Implementa en Python, sin bibliotecas de aprendizaje automático, un clasificador k-NN para puntos en el plano.", "from collections import Counter\nimport math\ndef knn(entrenamiento, punto, k=3):\n    # entrenamiento: lista de ((x, y), clase)\n    vecinos = sorted(entrenamiento, key=lambda e: math.dist(e[0], punto))[:k]\n    return Counter(c for _, c in vecinos).most_common(1)[0][0]"],
      ["Programa la regresión lineal por mínimos cuadrados sin scikit-learn y compruébala con los datos de horas y notas.", "def regresion(xs, ys):\n    n = len(xs); mx = sum(xs)/n; my = sum(ys)/n\n    a = sum((x-mx)*(y-my) for x, y in zip(xs, ys)) / sum((x-mx)**2 for x in xs)\n    return a, my - a*mx\nprint(regresion([1,2,3,4,5,6,7,8], [3.1,4.2,5.6,5.9,7.4,7.8,9.1,9.6]))  # ≈ (0.93, 2.4)"],
      ["Programa el agrupamiento k-medias con scikit-learn sobre datos de clientes (gasto y frecuencia) y explica cómo elegirías el número de grupos.", "from sklearn.cluster import KMeans\nkm = KMeans(n_clusters=3, n_init=10, random_state=0).fit(df[[\"gasto\", \"frecuencia\"]])\ndf[\"grupo\"] = km.labels_\nEl número se elige probando varios valores y buscando el «codo» en la gráfica de la inercia, y comprobando que los grupos tienen sentido para el negocio."],
      ["Entrena una neurona (perceptrón) que aprenda la función lógica AND ajustando los pesos con la regla de aprendizaje del perceptrón.", "datos = [([0,0],0), ([0,1],0), ([1,0],0), ([1,1],1)]\nw, b, eta = [0, 0], 0, 0.1\nfor _ in range(20):\n    for x, t in datos:\n        y = 1 if w[0]*x[0] + w[1]*x[1] + b > 0 else 0\n        e = t - y\n        w = [w[0] + eta*e*x[0], w[1] + eta*e*x[1]]; b += eta*e\nprint(w, b)  # p. ej. [0.2, 0.1] y -0.2"],
      ["Diseña un experimento para comprobar si un modelo de clasificación de currículos tiene sesgo de género.", "Comparar las tasas de selección y de error del modelo entre hombres y mujeres con perfiles equivalentes; crear pares de currículos idénticos que solo cambien en el nombre o el género; analizar qué variables pesan más; si hay diferencias, revisar los datos de entrenamiento, eliminar variables que actúan como sustituto del género y volver a medir."],
      ["Compara las respuestas de dos asistentes de IA a la misma pregunta de historia de tu localidad y verifica tres afirmaciones con fuentes fiables.", "Respuesta abierta. Debe documentar las respuestas, señalar coincidencias y contradicciones, contrastar con fuentes primarias o reconocidas (archivo municipal, enciclopedias, publicaciones académicas) e identificar posibles alucinaciones."],
      ["Calcula cuántos parámetros tiene una red con 784 entradas, una capa oculta de 128 neuronas y 10 salidas, contando pesos y sesgos.", "Capa oculta: 784·128 + 128 = 100 480. Salida: 128·10 + 10 = 1290. Total: 101 770 parámetros. Los grandes modelos de lenguaje tienen cientos de miles de millones."],
      ["Debate: ¿debería un sistema de IA decidir automáticamente quién recibe una beca de estudios? Argumenta teniendo en cuenta el Reglamento europeo.", "Respuesta abierta. Es un sistema de alto riesgo: exige datos de calidad sin sesgos, transparencia, documentación y supervisión humana efectiva. A favor: rapidez y criterios homogéneos. En contra: riesgo de discriminación, errores difíciles de detectar y necesidad de explicar cada decisión. Conclusión razonable: la IA puede ayudar, pero la decisión final debe ser humana y recurrible."],
      ["Debate: ¿es lícito y ético entregar un trabajo escrito con ayuda de la IA? Propón unas normas de uso para tu clase.", "Respuesta abierta. Depende de las normas del profesorado y del objetivo de la tarea. Normas posibles: declarar qué herramienta se usó y para qué; usarla para buscar ideas, revisar o practicar, no para sustituir el aprendizaje; verificar los datos; no introducir datos personales; y asumir la responsabilidad del contenido entregado."],
    ],
  },
  glosario: [
    ["Inteligencia artificial", "Rama de la informática que crea sistemas capaces de realizar tareas que requieren inteligencia."],
    ["Aprendizaje automático", "Técnicas con las que un sistema aprende patrones a partir de datos."],
    ["Modelo", "Función matemática ajustada a partir de los datos que hace predicciones."],
    ["Ciencia de datos", "Disciplina que extrae conocimiento de los datos con estadística y programación."],
    ["Datos abiertos", "Datos publicados para que cualquiera pueda reutilizarlos."],
    ["DataFrame", "Tabla de datos con filas y columnas con nombre de la biblioteca pandas."],
    ["Mediana", "Valor central de un conjunto de datos ordenado."],
    ["Correlación", "Medida de la relación lineal entre dos variables, entre −1 y 1."],
    ["Clasificación", "Tarea de predecir una categoría."],
    ["Regresión", "Tarea de predecir un valor numérico."],
    ["Agrupamiento", "Tarea no supervisada que forma grupos de datos parecidos."],
    ["Sobreajuste", "Situación en que un modelo memoriza el entrenamiento y falla con datos nuevos."],
    ["Matriz de confusión", "Tabla con los aciertos y errores de un clasificador por clase."],
    ["Red neuronal", "Modelo formado por capas de neuronas artificiales conectadas con pesos."],
    ["Aprendizaje profundo", "Aprendizaje con redes neuronales de muchas capas."],
    ["Modelo de lenguaje", "Red neuronal que genera texto prediciendo el siguiente token."],
    ["Alucinación", "Contenido falso generado por una IA con apariencia de verdadero."],
    ["Sesgo algorítmico", "Discriminación sistemática que un modelo hereda o amplifica de los datos."],
  ],
  situacion: {
    titulo: "Datos para mejorar nuestro centro",
    reto: "En grupos, investigad con datos una cuestión relevante para el instituto o el municipio (movilidad al centro, consumo energético, calidad del aire, hábitos de lectura), analizadla con Python y, si los datos lo permiten, construid un modelo predictivo sencillo, con un análisis ético de su uso.",
    pasos: [
      "Plantead una pregunta concreta y localizad datos abiertos o diseñad una encuesta anónima respetando la protección de datos.",
      "Limpiad y explorad los datos con pandas, calculando estadísticas y creando al menos tres gráficos adecuados.",
      "Si procede, entrenad y evaluad un modelo de regresión o clasificación con scikit-learn, separando entrenamiento y prueba.",
      "Analizad los posibles sesgos de los datos y del modelo y sus limitaciones.",
      "Presentad las conclusiones y unas propuestas de mejora a la dirección o al ayuntamiento.",
    ],
    producto: "Cuaderno Jupyter con el análisis reproducible, informe de conclusiones con gráficos y análisis ético, y presentación de las propuestas.",
    evaluacion: [
      "La pregunta es relevante y los datos se obtienen, limpian y documentan correctamente.",
      "El análisis y las visualizaciones son adecuados y están bien interpretados.",
      "El modelo, si lo hay, se entrena y evalúa con rigor.",
      "Se analizan los sesgos, la privacidad y las limitaciones, y se comunica con claridad.",
    ],
  },
  familias: [
    "Pedidle que os explique cómo decide la plataforma de vídeos qué os recomienda.",
    "Comentad juntos una noticia con datos y gráficos y valorad si el gráfico es honesto.",
    "Probad juntos un asistente de IA y comprobad alguna de sus respuestas con otras fuentes.",
    "Hablad de qué decisiones os parecería bien y mal dejar en manos de una IA.",
  ],
  saberes: "Inteligencia artificial y análisis de datos: concepto, historia y enfoques de la IA, ciclo de los proyectos de datos y datos abiertos, análisis de datos con Python y pandas, estadística descriptiva y visualización, correlación y causalidad, aprendizaje supervisado, no supervisado y por refuerzo, entrenamiento y evaluación de modelos con scikit-learn, regresión lineal y k vecinos, redes neuronales y aprendizaje profundo, IA generativa y modelos de lenguaje, sesgos, ética y Reglamento europeo de IA (Tecnologías de la Información y la Comunicación II, optativa de 2º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Trabajar con cuadernos de Google Colab para que todo el alumnado pueda ejecutar el código sin instalar nada.",
    "Usar datos abiertos locales (padrón, calidad del aire, transporte) para que los análisis tengan sentido cercano.",
    "Entrenar un clasificador de imágenes sin código con herramientas como Teachable Machine para visualizar el sobreajuste y los sesgos.",
    "Organizar un debate con roles (empresa, usuario, regulador, persona afectada) sobre un caso real de sesgo algorítmico.",
  ],
  fuentes: [
    { t: "Documentación de pandas", url: "https://pandas.pydata.org/docs/" },
    { t: "scikit-learn: guía de usuario", url: "https://scikit-learn.org/stable/user_guide.html" },
    { t: "Portal de datos abiertos del Gobierno de España", url: "https://datos.gob.es/" },
    { t: "Reglamento europeo de Inteligencia Artificial (resumen de la Comisión Europea)", url: "https://digital-strategy.ec.europa.eu/es/policies/regulatory-framework-ai" },
  ],
}));
