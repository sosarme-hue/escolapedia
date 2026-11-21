// Tecnologías de la Información y la Comunicación II, 2º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
// Eficiencia de los algoritmos, búsqueda, ordenación, recursividad y estrategias de diseño, programados en Python.
const B = require("./_bach2-tic");

// Curvas de crecimiento: O(1), O(log n), O(n), O(n log n), O(n²).
const curvas = () => {
  const X = (n) => 40 + n * 20, Y = (v) => 150 - v;
  const f = [["O(1)", () => 10, "var(--leaf)"], ["O(log n)", (n) => 18 * Math.log2(n + 1), "var(--pen)"], ["O(n)", (n) => 11 * n, "var(--sun)"], ["O(n log n)", (n) => 4.6 * n * Math.log2(n + 1), "var(--inf)"], ["O(n²)", (n) => 2.03 * n * n, "var(--red)"]];
  const pts = (g) => Array.from({ length: 41 }, (_, i) => { const n = i / 5; return `${X(n).toFixed(1)},${Y(g(n)).toFixed(1)}`; }).join(" ");
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfica del tiempo frente al tamaño de los datos: la complejidad constante es plana, la logarítmica crece muy despacio, la lineal en línea recta, la n log n algo más y la cuadrática se dispara">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <path d="M40 14 V 150 H 204" stroke="var(--ink)" stroke-width="1.6" fill="none"/>
  ${B.tx(122, 168, "tamaño de los datos (n)", { fs: 10, maxW: 180 })}${B.tx(22, 84, "tiempo", { fs: 10, maxW: 60 }).replace("<text", '<text transform="rotate(-90 22 84)"')}
  ${f.map(([t, g, c]) => `<polyline points="${pts(g)}" fill="none" stroke="${c}" stroke-width="2.4"/>${B.tx(206, Y(g(8)) + 4, t, { fs: 10, maxW: 52, bold: true, color: c, anchor: "start" })}`).join("")}
</svg>`;
};

// Búsqueda binaria de 23 en una lista ordenada.
const binaria = () => {
  const v = [2, 5, 8, 12, 16, 23, 38, 56, 72];
  const fila = (y, lo, hi, mid, nota) => v.map((x, i) => {
    const on = i >= lo && i <= hi, m = i === mid;
    return `<rect x="${14 + i * 26}" y="${y}" width="24" height="22" rx="4" fill="${m ? "var(--sun)" : on ? "var(--pen)" : "var(--card)"}" fill-opacity="${m ? ".9" : on ? ".18" : "1"}" stroke="${on ? "var(--pen)" : "var(--line)"}" stroke-width="1.5"/>${B.tx(26 + i * 26, y + 15, x, { fs: 10, maxW: 22, bold: m, color: on ? "var(--ink)" : "var(--muted)" })}`;
  }).join("");
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Búsqueda binaria del número 23 en una lista ordenada de nueve elementos: se mira el centro, 16, y se descarta la mitad izquierda; luego el centro de la derecha, 38, y se descarta su derecha; por último se encuentra 23 en tres pasos">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${B.tx(130, 20, "Buscar 23 en una lista ordenada", { fs: 12.5, maxW: 236, bold: true, font: B.D })}
  ${fila(32, 0, 8, 4, "1")}${B.tx(130, 68, "23 > 16 → mitad derecha", { fs: 10, maxW: 220 })}
  ${fila(76, 5, 8, 6, "2")}${B.tx(130, 112, "23 < 38 → mitad izquierda", { fs: 10, maxW: 220 })}
  ${fila(120, 5, 5, 5, "3")}${B.tx(130, 162, "encontrado en 3 pasos (secuencial: 6)", { fs: 10.5, maxW: 230, bold: true, color: "var(--leaf)" })}
</svg>`;
};

// Árbol de llamadas de fib(4).
const arbolFib = () => {
  const N = [["fib(4)", 130, 34], ["fib(3)", 76, 76], ["fib(2)", 190, 76], ["fib(2)", 44, 118], ["fib(1)", 108, 118], ["fib(1)", 166, 118], ["fib(0)", 214, 118], ["fib(1)", 26, 158], ["fib(0)", 72, 158]];
  const E = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6], [3, 7], [3, 8]];
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Árbol de llamadas de la función recursiva fib(4): cada llamada se divide en dos y fib(2) se calcula dos veces, lo que muestra que la versión recursiva simple repite cálculos">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${B.tx(130, 16, "Llamadas de fib(4)", { fs: 12, maxW: 200, bold: true, font: B.D })}
  ${E.map(([a, b]) => `<path d="M${N[a][1]} ${N[a][2] + 8} L ${N[b][1]} ${N[b][2] - 10}" stroke="var(--line)" stroke-width="2"/>`).join("")}
  ${N.map(([t, x, y]) => { const r = t === "fib(2)" ? "var(--red)" : t === "fib(1)" || t === "fib(0)" ? "var(--leaf)" : "var(--pen)";
    return `<rect x="${x - 21}" y="${y - 10}" width="42" height="18" rx="9" fill="var(--card)" stroke="${r}" stroke-width="2"/>${B.tx(x, y + 3, t, { fs: 9.5, maxW: 38, bold: true, color: r })}`; }).join("")}
  ${B.tx(196, 160, "en rojo: cálculo repetido", { fs: 9.5, maxW: 110, bold: true, color: "var(--red)" })}${B.tx(196, 174, "en verde: casos base", { fs: 9.5, maxW: 110, bold: true, color: "var(--leaf)" })}
</svg>`;
};

// Merge sort: dividir y mezclar.
const mezcla = () => {
  const caja = (x, y, t, c) => `<rect x="${x - t.length * 5.5 - 6}" y="${y}" width="${t.length * 11 + 12}" height="20" rx="5" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="1.8"/>${B.tx(x, y + 14, t.split("").join(" "), { fs: 10.5, maxW: t.length * 11 + 8, bold: true })}`;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Ordenación por mezcla de la lista 5 2 8 1: se divide en 5 2 y 8 1, luego en elementos sueltos, y al subir se mezclan ordenadas en 2 5 y 1 8 y por último en 1 2 5 8">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${B.tx(56, 18, "dividir ↓", { fs: 10.5, maxW: 80, bold: true, color: "var(--red)" })}${B.tx(206, 18, "mezclar ↑", { fs: 10.5, maxW: 80, bold: true, color: "var(--leaf)" })}
  ${caja(130, 26, "5281", "var(--pen)")}
  ${caja(76, 62, "52", "var(--red)")}${caja(184, 62, "81", "var(--red)")}
  ${caja(52, 98, "5", "var(--sun)")}${caja(100, 98, "2", "var(--sun)")}${caja(160, 98, "8", "var(--sun)")}${caja(208, 98, "1", "var(--sun)")}
  ${caja(76, 134, "25", "var(--leaf)")}${caja(184, 134, "18", "var(--leaf)")}
  <path d="M130 46 L 76 62 M130 46 L 184 62 M76 82 L 52 98 M76 82 L 100 98 M184 82 L 160 98 M184 82 L 208 98" stroke="var(--line)" stroke-width="1.6"/>
  <path d="M52 118 L 76 134 M100 118 L 76 134 M160 118 L 184 134 M208 118 L 184 134" stroke="var(--leaf)" stroke-width="1.6"/>
  ${B.tx(130, 174, "mezcla final: 1 2 5 8", { fs: 11.5, maxW: 200, bold: true, color: "var(--leaf)" })}
</svg>`;
};

module.exports = B.tema(B.textos({
  titulo: "Algoritmos de búsqueda, ordenación y recursividad",
  minutos: 120,
  objetivos: [
    "Valorar la corrección y la eficiencia de un algoritmo y expresar su complejidad con la notación O",
    "Programar la búsqueda secuencial y la búsqueda binaria y comparar su eficiencia",
    "Programar y hacer la traza de los algoritmos de ordenación por burbuja, selección e inserción",
    "Diseñar funciones recursivas con su caso base y su caso recursivo y explicar la pila de llamadas",
    "Explicar la estrategia divide y vencerás en la ordenación por mezcla y en la ordenación rápida",
    "Reconocer otras estrategias de diseño (fuerza bruta, voraz, vuelta atrás) y los límites de la computación",
  ],
  claves: ["algoritmo", "eficiencia", "complejidad", "notación O", "búsqueda secuencial", "búsqueda binaria", "ordenación", "burbuja", "selección", "inserción", "recursividad", "caso base", "divide y vencerás", "mergesort", "quicksort", "algoritmo voraz"],
  pregunta: {
    texto: "En un diccionario de papel buscas «ornitorrinco» en unos segundos, sin leer las palabras una por una. ¿Qué estrategia usas sin darte cuenta, y por qué un ordenador también la necesita?",
    respuesta: "Abres el diccionario por la mitad, miras si la palabra va antes o después y descartas media parte; repites con la mitad que queda. Es la <mark>búsqueda binaria</mark>: con cada paso el problema se reduce a la mitad, así que en un diccionario de 100 000 palabras bastan unos 17 pasos. Un ordenador es rápido, pero los datos que maneja son enormes: con un mal algoritmo una búsqueda tardaría horas. Por eso no basta con que un algoritmo funcione: tiene que ser <b>eficiente</b>, y para usar la búsqueda binaria los datos deben estar <b>ordenados</b>.",
  },
  lectura: {
    titulo: "Cuando Google era una cuestión de algoritmos",
    html: `<p>A finales de los años noventa ya existían buscadores, pero sus resultados eran pobres: ordenaban las páginas por el número de veces que aparecía la palabra buscada, y cualquiera podía engañarlos repitiendo palabras. En 1998, dos estudiantes de doctorado de Stanford, Larry Page y Sergey Brin, propusieron otro algoritmo, el <b>PageRank</b>: una página es importante si la enlazan otras páginas importantes. Con esa idea, y con algoritmos muy eficientes para ordenar y buscar entre millones de páginas, fundaron Google.</p>
    <p>Hoy un buscador recibe miles de millones de consultas al día y responde en fracciones de segundo. Detrás no hay solo ordenadores potentes: hay algoritmos que buscan sin recorrerlo todo, que ordenan millones de datos en segundos y que dividen los problemas grandes en otros pequeños.</p>
    <p>Los algoritmos de búsqueda y ordenación son los más estudiados de la informática porque están en todas partes: en la lista de contactos, en la clasificación de una liga, en las tiendas online. En este tema aprenderás a programarlos, a medir su eficiencia y a pensar de forma recursiva, una de las ideas más potentes de la programación.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Algoritmos correctos y eficientes",
      html: `<p>Un <b>algoritmo</b> es una secuencia finita y precisa de pasos que resuelve un problema. Para un mismo problema suele haber muchos algoritmos posibles, y no todos son igual de buenos. Para compararlos se tienen en cuenta varias propiedades:</p>
      <ul><li><b>Corrección</b>: el algoritmo da el resultado correcto para <b>todas</b> las entradas válidas, incluidos los casos límite (lista vacía, un solo elemento, valores repetidos). Es la propiedad imprescindible.</li>
      <li><b>Eficiencia</b>: cuántos recursos necesita, sobre todo <b>tiempo</b> de ejecución y <b>memoria</b>.</li>
      <li><b>Claridad</b>: si es fácil de entender, programar y mantener.</li></ul>
      <p>Medir la eficiencia con un cronómetro tiene problemas: el resultado depende del ordenador, del lenguaje y de otros programas que se estén ejecutando. Por eso se usa una medida independiente: se cuenta el número de <b>operaciones elementales</b> (comparaciones, asignaciones, operaciones aritméticas) que realiza el algoritmo en función del <b>tamaño de la entrada</b>, que se llama <i>n</i> (el número de elementos de una lista, por ejemplo).</p>
      <p>Además, el número de operaciones puede depender de cómo sean los datos. Al buscar un elemento en una lista, en el <b>mejor caso</b> está el primero y basta una comparación; en el <b>peor caso</b> está el último o no está, y hay que hacer <i>n</i> comparaciones; en el <b>caso medio</b>, unas <i>n</i>/2. Normalmente se estudia el peor caso, porque garantiza que el algoritmo nunca será más lento que eso.</p>`,
      svg: B.cajas("Propiedades de un buen algoritmo", [["Correcto", "resultado bueno|para toda entrada"], ["Eficiente", "poco tiempo|y memoria"], ["Claro", "fácil de entender|y mantener"], ["Finito", "termina siempre"]], { t: "¿Qué pedimos a un algoritmo?" }),
    },
    {
      h: "La complejidad y la notación O",
      html: `<p>La <mark>complejidad</mark> de un algoritmo indica cómo crece el número de operaciones cuando crece el tamaño de los datos. Lo que importa no es el número exacto, sino su <b>orden de crecimiento</b> para valores grandes de <i>n</i>. Se expresa con la <b>notación O grande</b>, que se queda con el término que más crece e ignora las constantes: un algoritmo que hace 3<i>n</i> + 5 operaciones es O(<i>n</i>), y uno que hace <i>n</i>²/2 + <i>n</i> es O(<i>n</i>²).</p>
      <p>Las complejidades más habituales, de mejor a peor, son:</p>
      <ul><li><b>O(1)</b>, constante: no depende de <i>n</i>. Acceder a <code>lista[5]</code> o a una clave de un diccionario.</li>
      <li><b>O(log n)</b>, logarítmica: el problema se reduce a la mitad en cada paso. Búsqueda binaria.</li>
      <li><b>O(n)</b>, lineal: se recorre cada elemento una vez. Búsqueda secuencial, calcular una suma.</li>
      <li><b>O(n log n)</b>: los mejores algoritmos de ordenación, como la ordenación por mezcla.</li>
      <li><b>O(n²)</b>, cuadrática: dos bucles anidados. Ordenación por burbuja.</li>
      <li><b>O(2ⁿ)</b>, exponencial: el tiempo se duplica con cada elemento más. Probar todas las combinaciones.</li></ul>
      <p>La diferencia es enorme con datos reales. Con <i>n</i> = 1 000 000, un algoritmo O(log n) hace unas 20 operaciones; uno O(n), un millón; uno O(n log n), unos 20 millones; y uno O(n²), un billón (10¹²), que a mil millones de operaciones por segundo tardaría más de un cuarto de hora. Por eso, mejorar el algoritmo suele ser mucho más eficaz que comprar un ordenador más rápido.</p>`,
      svg: curvas(),
    },
    {
      h: "La búsqueda secuencial",
      html: `<p>Buscar un elemento en una colección es uno de los problemas más frecuentes. La <mark>búsqueda secuencial</mark> o lineal es la más sencilla: se recorren los elementos uno a uno, desde el principio, comparando cada uno con el valor buscado, hasta encontrarlo o llegar al final.</p>
      ${B.code(`def busqueda_secuencial(lista, x):
    for i in range(len(lista)):
        if lista[i] == x:
            return i        # posición donde está
    return -1               # no está`)}
      <p>Su gran ventaja es que funciona con <b>cualquier lista</b>, esté ordenada o no, y con cualquier tipo de dato. Su inconveniente es la eficiencia: en el peor caso, cuando el elemento está al final o no está, hace <i>n</i> comparaciones, así que es <b>O(n)</b>. Si la lista se duplica, el tiempo de búsqueda también.</p>
      <p>Las funciones de Python <code>x in lista</code>, <code>lista.index(x)</code> y <code>lista.count(x)</code> hacen internamente una búsqueda secuencial. Si la lista está ordenada, se puede mejorar un poco: en cuanto se encuentra un elemento mayor que el buscado, se sabe que ya no está y se para.</p>
      <p>La búsqueda secuencial es la mejor opción cuando la lista es pequeña, cuando solo se va a buscar una vez o cuando los datos no están ordenados y ordenarlos costaría más que buscar. Si se va a buscar muchas veces en los mismos datos, compensa ordenarlos primero o guardarlos en un conjunto o un diccionario.</p>`,
      svg: B.flujo("Algoritmo de búsqueda secuencial", ["Empezar en la posición 0", "¿El elemento es el buscado? → devolver su posición", "Si no, pasar al siguiente", "Si se acaba la lista → devolver −1"], { t: "Búsqueda secuencial · O(n)" }),
    },
    {
      h: "La búsqueda binaria",
      html: `<p>Si la lista está <b>ordenada</b>, se puede buscar mucho más deprisa con la <mark>búsqueda binaria</mark> o dicotómica. Se compara el valor buscado con el elemento <b>central</b>: si coincide, se ha encontrado; si es menor, se descarta la mitad derecha y se sigue buscando en la izquierda; si es mayor, al revés. En cada paso el intervalo de búsqueda se reduce a la mitad, hasta encontrar el elemento o hasta que el intervalo queda vacío.</p>
      ${B.code(`def busqueda_binaria(lista, x):
    izq, der = 0, len(lista) - 1
    while izq <= der:
        medio = (izq + der) // 2
        if lista[medio] == x:
            return medio
        elif lista[medio] < x:
            izq = medio + 1
        else:
            der = medio - 1
    return -1`)}
      <p>¿Cuántos pasos necesita? Con 8 elementos, como mucho 4 (8 → 4 → 2 → 1); con 1 024, unos 11; con un millón, unos 20; con mil millones, unos 30. El número de pasos es el número de veces que se puede dividir <i>n</i> entre 2, es decir, log₂ <i>n</i>: la búsqueda binaria es <b>O(log n)</b>.</p>
      <p>La condición imprescindible es que los datos estén ordenados; si no lo están, el resultado es incorrecto. Ordenar tiene un coste, así que la búsqueda binaria compensa cuando se busca muchas veces en los mismos datos. Python incluye el módulo <code>bisect</code>, que realiza búsquedas binarias y permite insertar elementos en una lista manteniéndola ordenada.</p>`,
      svg: binaria(),
      video: B.V("alg-binaria", "Método de búsqueda binaria"),
    },
    {
      h: "La ordenación por burbuja",
      html: `<p><b>Ordenar</b> consiste en colocar los elementos de una colección según un criterio: de menor a mayor, alfabéticamente, por fecha. Existen decenas de algoritmos de ordenación; los más sencillos son los de burbuja, selección e inserción.</p>
      <p>La <mark>ordenación por burbuja</mark> (<i>bubble sort</i>) recorre la lista comparando cada par de elementos <b>contiguos</b> y los intercambia si están desordenados. Al terminar la primera pasada, el elemento mayor ha «subido como una burbuja» hasta el final. Se repiten las pasadas, cada una con un elemento menos, hasta que la lista está ordenada. Si en una pasada no se hace ningún intercambio, la lista ya está ordenada y se puede parar antes.</p>
      ${B.code(`def burbuja(L):
    n = len(L)
    for i in range(n - 1):
        cambios = False
        for j in range(n - 1 - i):
            if L[j] > L[j + 1]:
                L[j], L[j + 1] = L[j + 1], L[j]
                cambios = True
        if not cambios:
            break`)}
      <p>Ejemplo con [5, 1, 4, 2]. Primera pasada: 5 y 1 se intercambian → [1, 5, 4, 2]; 5 y 4 → [1, 4, 5, 2]; 5 y 2 → [1, 4, 2, 5]. Segunda pasada: 1 y 4 no; 4 y 2 sí → [1, 2, 4, 5]. Tercera pasada: no hay cambios, termina.</p>
      <p>Tiene dos bucles anidados, por lo que en el peor caso (lista ordenada al revés) hace unas <i>n</i>²/2 comparaciones: es <b>O(n²)</b>. Es fácil de entender, pero muy lenta con listas grandes, y se usa sobre todo para aprender.</p>`,
      svg: B.rejilla("Pasadas del método de la burbuja con la lista 5, 1, 4, 2", ["Pasada", "Resultado", "Fijo"], [["inicio", "5 1 4 2", "—"], ["1ª", "1 4 2 5", "5"], ["2ª", "1 2 4 5", "4 y 5"], ["3ª", "sin cambios", "fin"]], { t: "Burbuja paso a paso" }),
      video: B.V("alg-burbuja", "Ordenamiento burbuja explicado"),
    },
    {
      h: "Ordenación por selección e inserción",
      html: `<p>La <mark>ordenación por selección</mark> busca el elemento <b>mínimo</b> de la lista y lo intercambia con el que ocupa la primera posición; después busca el mínimo del resto y lo coloca en la segunda; y así sucesivamente. La parte izquierda de la lista va quedando ordenada. Hace siempre unas <i>n</i>²/2 comparaciones, aunque la lista ya esté ordenada, pero solo <i>n</i> − 1 intercambios, lo que es útil cuando mover datos es costoso. Es <b>O(n²)</b>.</p>
      ${B.code(`def seleccion(L):
    for i in range(len(L) - 1):
        m = i
        for j in range(i + 1, len(L)):
            if L[j] < L[m]:
                m = j
        L[i], L[m] = L[m], L[i]`)}
      <p>La <mark>ordenación por inserción</mark> funciona como cuando ordenamos las cartas de una mano: se toma cada elemento, de izquierda a derecha, y se <b>inserta</b> en su lugar dentro de la parte ya ordenada, desplazando hacia la derecha los mayores que él.</p>
      ${B.code(`def insercion(L):
    for i in range(1, len(L)):
        x = L[i]
        j = i - 1
        while j >= 0 and L[j] > x:
            L[j + 1] = L[j]
            j -= 1
        L[j + 1] = x`)}
      <p>En el peor caso también es <b>O(n²)</b>, pero si la lista está casi ordenada es muy rápida, casi O(n), porque cada elemento se desplaza poco. Por eso se usa en la práctica para listas pequeñas o casi ordenadas, e incluso forma parte de algoritmos más avanzados. Los tres métodos simples ordenan la lista <b>en el sitio</b>, sin necesitar memoria adicional.</p>`,
      svg: B.comparar("Ordenación por selección frente a ordenación por inserción", ["Selección", ["busca el mínimo", "y lo coloca delante", "siempre O(n²)", "pocos intercambios"]], ["Inserción", ["inserta cada elemento", "como en las cartas", "O(n²) en el peor caso", "rápida si casi ordenada"]]),
    },
    {
      h: "La recursividad",
      html: `<p>Una función es <mark>recursiva</mark> cuando se llama a sí misma. La idea es resolver un problema reduciéndolo a una versión <b>más pequeña</b> del mismo problema, hasta llegar a un caso tan sencillo que se resuelve directamente. Toda función recursiva tiene dos partes:</p>
      <ul><li>El <b>caso base</b>: el caso más simple, que se resuelve sin volver a llamar a la función. Sin él, la función se llamaría infinitamente.</li>
      <li>El <b>caso recursivo</b>: la función se llama a sí misma con un problema más pequeño, que se acerca al caso base.</li></ul>
      <p>El ejemplo clásico es el <b>factorial</b>: 5! = 5 · 4 · 3 · 2 · 1. Se puede definir así: 0! = 1 (caso base) y <i>n</i>! = <i>n</i> · (<i>n</i> − 1)! (caso recursivo).</p>
      ${B.code(`def factorial(n):
    if n == 0:                       # caso base
        return 1
    return n * factorial(n - 1)      # caso recursivo

# factorial(3) = 3 * factorial(2)
#              = 3 * 2 * factorial(1)
#              = 3 * 2 * 1 * factorial(0) = 6`)}
      <p>Cada llamada se guarda en la <b>pila de llamadas</b> con su propio valor de <i>n</i>, a la espera de que termine la llamada interior. Al llegar al caso base, las llamadas se resuelven en orden inverso, de dentro hacia fuera. Si no hay caso base, o el caso recursivo no se acerca a él, la pila se llena y Python lanza un <code>RecursionError</code> (por defecto permite unas 1 000 llamadas anidadas).</p>
      <p>Muchos problemas tienen una solución recursiva natural: recorrer las carpetas de un disco (cada carpeta puede contener carpetas), calcular potencias, sumar los dígitos de un número o invertir una cadena. La recursividad es también la base de los algoritmos de ordenación más rápidos.</p>`,
      svg: B.flujo("Esquema de una función recursiva", ["¿Es el caso base? → devolver el resultado directo", "Si no: reducir el problema", "Llamar a la misma función con el problema menor", "Combinar el resultado y devolverlo"], { t: "Pensar de forma recursiva" }),
      video: B.V("alg-recursividad", "Entendiendo la recursividad con las Torres de Hanói"),
    },
    {
      h: "Recursividad frente a iteración",
      html: `<p>Todo lo que se resuelve con recursividad puede resolverse también con bucles (<b>iteración</b>), y al revés. La solución recursiva suele ser más corta y elegante cuando el problema tiene una estructura recursiva, pero consume más memoria (cada llamada ocupa un marco en la pila) y puede ser más lenta.</p>
      <p>Un ejemplo muy claro es la <b>sucesión de Fibonacci</b> (0, 1, 1, 2, 3, 5, 8, 13…), en la que cada término es la suma de los dos anteriores. La versión recursiva directa es muy sencilla de escribir:</p>
      ${B.code(`def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)`)}
      <p>Pero es muy ineficiente: cada llamada genera otras dos, y los mismos valores se calculan una y otra vez. Para calcular fib(4), fib(2) se calcula dos veces; para fib(40), fib(2) se calcula más de 60 millones de veces. Su complejidad es exponencial, O(2ⁿ). Hay dos formas de arreglarlo: la <b>memoización</b>, que guarda en un diccionario los resultados ya calculados para no repetirlos (en Python, el decorador <code>@functools.cache</code> lo hace automáticamente), o una versión iterativa con un bucle que va guardando los dos últimos términos, que es O(n).</p>
      <p>Un problema donde la recursividad brilla son las <b>Torres de Hanói</b>: mover una torre de <i>n</i> discos de un poste a otro, sin poner nunca un disco grande sobre uno pequeño. La solución recursiva es mover <i>n</i> − 1 discos al poste auxiliar, mover el disco mayor al destino y mover los <i>n</i> − 1 discos encima. Necesita 2ⁿ − 1 movimientos: con 64 discos, a un movimiento por segundo, tardaría unos 585 000 millones de años.</p>`,
      svg: arbolFib(),
    },
    {
      h: "Divide y vencerás: la ordenación por mezcla",
      html: `<p>La estrategia <mark>divide y vencerás</mark> resuelve un problema en tres fases: <b>dividirlo</b> en subproblemas más pequeños del mismo tipo, <b>resolverlos</b> de forma recursiva y <b>combinar</b> sus soluciones. La búsqueda binaria es un ejemplo sencillo; los algoritmos de ordenación rápidos, otro.</p>
      <p>La <mark>ordenación por mezcla</mark> (<i>merge sort</i>), propuesta por John von Neumann en 1945, divide la lista en dos mitades, ordena cada mitad de forma recursiva y después las <b>mezcla</b>. El caso base es una lista de cero o un elemento, que ya está ordenada. Para mezclar dos listas ordenadas se comparan sus primeros elementos, se toma el menor y se repite, como al juntar dos montones de exámenes ordenados alfabéticamente.</p>
      ${B.code(`def mezclar(a, b):
    r, i, j = [], 0, 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            r.append(a[i]); i += 1
        else:
            r.append(b[j]); j += 1
    return r + a[i:] + b[j:]

def merge_sort(L):
    if len(L) <= 1:
        return L
    m = len(L) // 2
    return mezclar(merge_sort(L[:m]), merge_sort(L[m:]))`)}
      <p>La lista se divide por la mitad log₂ <i>n</i> veces, y en cada nivel se mezclan en total <i>n</i> elementos, así que su complejidad es <b>O(n log n)</b> en todos los casos. Su inconveniente es que necesita memoria adicional para las listas auxiliares. Es <b>estable</b>: conserva el orden original de los elementos iguales.</p>`,
      svg: mezcla(),
    },
    {
      h: "La ordenación rápida (quicksort)",
      html: `<p>La <mark>ordenación rápida</mark> (<i>quicksort</i>), inventada por Tony Hoare en 1959, también sigue la estrategia divide y vencerás, pero de otra manera. Se elige un elemento llamado <b>pivote</b> (por ejemplo, el primero, el último o uno al azar) y se reparten los demás en dos grupos: los <b>menores</b> que el pivote y los <b>mayores</b> o iguales. Después se ordena cada grupo de forma recursiva y se juntan: menores + pivote + mayores. En esta versión, el trabajo se hace al dividir y la combinación es inmediata.</p>
      ${B.code(`def quicksort(L):
    if len(L) <= 1:
        return L
    pivote = L[0]
    menores = [x for x in L[1:] if x < pivote]
    mayores = [x for x in L[1:] if x >= pivote]
    return quicksort(menores) + [pivote] + quicksort(mayores)`)}
      <p>Ejemplo con [6, 3, 8, 1, 9, 2]: el pivote es 6, menores = [3, 1, 2] y mayores = [8, 9]. Al ordenar cada parte se obtiene [1, 2, 3] + [6] + [8, 9].</p>
      <p>Si el pivote divide la lista en dos partes parecidas, quicksort es <b>O(n log n)</b> y, en la práctica, uno de los algoritmos más rápidos que existen. Pero si el pivote es siempre el menor o el mayor (por ejemplo, tomando el primero en una lista ya ordenada), una parte queda vacía y el algoritmo degenera a <b>O(n²)</b>. Por eso las versiones reales eligen el pivote al azar o como la mediana de tres elementos, y lo ordenan en el sitio, intercambiando elementos dentro de la propia lista para no gastar memoria.</p>`,
      svg: B.flujo("Pasos de la ordenación rápida", ["Elegir un pivote", "Separar menores y mayores que el pivote", "Ordenar cada grupo (recursividad)", "Unir: menores + pivote + mayores"], { t: "Quicksort" }),
      video: B.V("alg-quick", "Quick sort, ordenamiento rápido explicado con cartas"),
    },
    {
      h: "Comparar los algoritmos de ordenación",
      html: `<p>No hay un algoritmo de ordenación perfecto: cada uno tiene ventajas según el tamaño de los datos, si están casi ordenados, la memoria disponible o si se necesita estabilidad. Un algoritmo es <b>estable</b> si mantiene el orden relativo de los elementos con la misma clave: si ordenas por nota una lista que ya estaba por orden alfabético, los alumnos con la misma nota siguen en orden alfabético. Es <b>en el sitio</b> si no necesita memoria adicional apreciable.</p>
      <table class="tb"><tr><th>Algoritmo</th><th>Mejor caso</th><th>Peor caso</th><th>Estable</th><th>En el sitio</th></tr>
      <tr><td>Burbuja</td><td>O(n)</td><td>O(n²)</td><td>sí</td><td>sí</td></tr>
      <tr><td>Selección</td><td>O(n²)</td><td>O(n²)</td><td>no</td><td>sí</td></tr>
      <tr><td>Inserción</td><td>O(n)</td><td>O(n²)</td><td>sí</td><td>sí</td></tr>
      <tr><td>Mezcla</td><td>O(n log n)</td><td>O(n log n)</td><td>sí</td><td>no</td></tr>
      <tr><td>Quicksort</td><td>O(n log n)</td><td>O(n²)</td><td>no</td><td>sí</td></tr></table>
      <p>Se ha demostrado que ningún algoritmo que ordene comparando elementos puede ser mejor que O(n log n) en el peor caso, así que la ordenación por mezcla es óptima en ese sentido.</p>
      <p>En la práctica, en Python no se programan estos algoritmos: se usan <code>lista.sort()</code> o <code>sorted(lista)</code>, que aplican <b>Timsort</b>, un algoritmo híbrido creado por Tim Peters en 2002 que combina la mezcla y la inserción, aprovecha los tramos ya ordenados de los datos reales y es estable. Ambos admiten el parámetro <code>key</code> para ordenar por cualquier criterio y <code>reverse=True</code> para hacerlo de mayor a menor.</p>`,
      svg: B.barras("Operaciones aproximadas para ordenar mil datos", [["Burbuja O(n²)", 500], ["Selección O(n²)", 500], ["Inserción (medio)", 250], ["Mezcla O(n log n)", 10], ["Quicksort (medio)", 12]], { t: "Ordenar 1 000 datos (miles de operaciones)", unidad: " mil" }),
    },
    {
      h: "Otras estrategias y los límites de los algoritmos",
      html: `<p>Además de divide y vencerás, hay otras estrategias generales para diseñar algoritmos:</p>
      <ul><li><b>Fuerza bruta</b>: probar todas las posibilidades. Es sencilla y siempre encuentra la solución, pero solo sirve si hay pocas opciones. Así se descifra una contraseña corta probando todas las combinaciones, y por eso las contraseñas largas son más seguras.</li>
      <li><b>Algoritmos voraces</b> (<i>greedy</i>): en cada paso se elige la opción que parece mejor en ese momento, sin volver atrás. Dar el cambio con el menor número de monedas tomando siempre la mayor posible es un algoritmo voraz. Son rápidos, pero no siempre llegan a la mejor solución.</li>
      <li><b>Vuelta atrás</b> (<i>backtracking</i>): se construye la solución paso a paso y, si se llega a un callejón sin salida, se deshace el último paso y se prueba otra opción. Se usa para resolver sudokus, laberintos o el problema de las ocho reinas.</li>
      <li><b>Programación dinámica</b>: se divide el problema en subproblemas que se repiten y se guarda cada solución para no recalcularla, como en la memoización de Fibonacci.</li></ul>
      <p>Hay problemas para los que no se conoce ningún algoritmo eficiente. En el <b>problema del viajante</b> hay que encontrar la ruta más corta que pasa por <i>n</i> ciudades: con 20 ciudades hay más de 10¹⁷ rutas posibles. Para estos problemas se usan algoritmos aproximados que dan una buena solución en un tiempo razonable. Incluso hay problemas que ningún algoritmo puede resolver, como demostró Alan Turing en 1936. Por último, los algoritmos que ordenan noticias, deciden créditos o seleccionan currículos afectan a las personas: deben ser transparentes, justos y revisables.</p>`,
      svg: B.cajas("Estrategias de diseño de algoritmos", [["Fuerza bruta", "probar todo"], ["Voraz", "lo mejor ahora"], ["Vuelta atrás", "probar y deshacer"], ["Prog. dinámica", "guardar|subproblemas"]], { t: "Estrategias" }),
    },
  ],
  figura: {
    titulo: "Ideas clave de los algoritmos de búsqueda y ordenación",
    items: [["Eficiencia", "O(n)", "cómo crece el", "tiempo con n"], ["Buscar", "O(log n)", "binaria: mitades", "(lista ordenada)"], ["Ordenar", "O(n log n)", "mezcla, quicksort;", "burbuja O(n²)"], ["Recursividad", "f(n−1)", "caso base y", "caso recursivo"]],
  },
  video: B.V("alg-general", "Algoritmos de ordenación: qué son y para qué sirven"),
  quiz: [
    ["La propiedad imprescindible de un algoritmo es…", ["la rapidez", "la corrección", "la brevedad", "usar recursividad"], 1, "Un algoritmo rápido pero erróneo no sirve."],
    ["La eficiencia de un algoritmo se mide habitualmente…", ["con un cronómetro", "contando operaciones según el tamaño n", "por las líneas de código", "por el lenguaje"], 1, "Así no depende del ordenador."],
    ["Un algoritmo que hace 4n² + 3n + 7 operaciones es…", ["O(n)", "O(n²)", "O(4n²)", "O(7)"], 1, "Se queda el término que más crece, sin constantes."],
    ["Acceder a una clave de un diccionario es…", ["O(1)", "O(n)", "O(log n)", "O(n²)"], 0, "Tiempo constante."],
    ["Dos bucles anidados que recorren la lista completa suelen dar…", ["O(n)", "O(log n)", "O(n²)", "O(1)"], 2, "n · n operaciones."],
    ["La búsqueda secuencial funciona…", ["solo con listas ordenadas", "con cualquier lista", "solo con números", "solo con diccionarios"], 1, "Recorre todos los elementos."],
    ["La búsqueda binaria exige que la lista esté…", ["vacía", "ordenada", "desordenada", "sin repetidos"], 1, "Si no, falla."],
    ["¿Cuántos pasos necesita como máximo la búsqueda binaria en un millón de elementos?", ["unos 20", "unos 1 000", "500 000", "1 000 000"], 0, "2²⁰ ≈ 1 000 000."],
    ["En la burbuja, tras la primera pasada…", ["el menor queda al principio", "el mayor queda al final", "la lista está ordenada", "no cambia nada"], 1, "Sube como una burbuja."],
    ["La ordenación por selección…", ["inserta cada elemento en su sitio", "busca el mínimo y lo coloca delante", "divide la lista en mitades", "usa un pivote"], 1, "La parte izquierda queda ordenada."],
    ["El algoritmo más rápido con una lista casi ordenada, entre los simples, es…", ["selección", "inserción", "burbuja sin mejora", "fuerza bruta"], 1, "Casi O(n)."],
    ["Una función recursiva es la que…", ["usa un bucle", "se llama a sí misma", "no tiene parámetros", "devuelve None"], 1, "Reduce el problema."],
    ["El caso base de una función recursiva…", ["vuelve a llamar a la función", "se resuelve sin llamarse a sí misma", "es opcional", "es el problema más grande"], 1, "Detiene la recursión."],
    ["Si una función recursiva no tiene caso base, Python lanza…", ["ValueError", "RecursionError", "IndexError", "nada"], 1, "Se llena la pila."],
    ["La versión recursiva simple de Fibonacci es lenta porque…", ["usa sumas", "repite muchas veces los mismos cálculos", "no tiene caso base", "usa listas"], 1, "Se arregla con memoización."],
    ["Divide y vencerás consiste en…", ["probar todas las opciones", "dividir, resolver los subproblemas y combinar", "elegir siempre lo mejor ahora", "deshacer el último paso"], 1, "Mergesort y quicksort."],
    ["La ordenación por mezcla es…", ["O(n²) siempre", "O(n log n) siempre", "O(log n)", "O(1)"], 1, "Divide en mitades y mezcla."],
    ["En quicksort, el elemento que separa menores y mayores es el…", ["caso base", "pivote", "índice", "centinela"], 1, "Su elección importa."],
    ["Un algoritmo de ordenación estable…", ["nunca falla", "conserva el orden de los elementos iguales", "no usa memoria", "es siempre O(n)"], 1, "Útil al ordenar por varios criterios."],
    ["Dar el cambio usando siempre la moneda más grande posible es un algoritmo…", ["de fuerza bruta", "voraz", "de vuelta atrás", "recursivo obligatoriamente"], 1, "Greedy."],
  ],
  examen: [
    ["En la lista [3, 7, 11, 15, 19, 23, 27], la búsqueda binaria de 23 compara primero con…", ["3", "15", "19", "23"], 1, "El centro, posición 3."],
    ["Tras la primera pasada de la burbuja sobre [4, 3, 2, 1], la lista queda…", ["[3, 2, 1, 4]", "[1, 2, 3, 4]", "[3, 4, 2, 1]", "[4, 3, 2, 1]"], 0, "El 4 sube al final."],
    ["Tras el primer paso de selección sobre [5, 8, 1, 4], la lista queda…", ["[1, 8, 5, 4]", "[1, 5, 8, 4]", "[5, 1, 8, 4]", "[1, 4, 5, 8]"], 0, "Se intercambian 5 y 1."],
    ["¿Qué devuelve f(4)? def f(n): return 1 if n == 1 else n + f(n - 1)", ["4", "10", "24", "error"], 1, "4 + 3 + 2 + 1."],
    ["¿Cuántas llamadas en total hace factorial(5) (incluida la primera), si el caso base es n == 0?", ["5", "6", "4", "120"], 1, "n = 5, 4, 3, 2, 1, 0."],
    ["Quicksort con pivote el primer elemento sobre [4, 9, 2, 7, 1] separa como menores…", ["[2, 1]", "[9, 7]", "[1, 2, 4]", "[2, 7, 1]"], 0, "Los menores que 4."],
    ["Si un algoritmo O(n²) tarda 1 s con 1 000 datos, con 10 000 tardará unos…", ["10 s", "100 s", "2 s", "1 000 s"], 1, "10² = 100 veces más."],
    ["Las Torres de Hanói con 5 discos necesitan como mínimo…", ["10 movimientos", "25 movimientos", "31 movimientos", "32 movimientos"], 2, "2⁵ − 1 = 31."],
  ],
  feynman: ["Qué significa que un algoritmo sea correcto y eficiente", "Qué expresa la notación O y por qué O(n log n) es mucho mejor que O(n²)", "Cómo funciona la búsqueda binaria y por qué necesita datos ordenados", "Cómo funcionan la burbuja, la selección y la inserción", "Qué son el caso base y el caso recursivo y qué ocurre en la pila de llamadas", "Por qué la versión recursiva simple de Fibonacci es lenta y cómo se mejora", "Cómo aplican mergesort y quicksort la estrategia divide y vencerás"],
  mapa: ["ALGORITMOS", [["Eficiencia", "notación O · peor caso"], ["Búsqueda", "secuencial O(n) · binaria O(log n)"], ["Ordenación", "simples O(n²) · mezcla · quicksort"], ["Recursividad", "caso base · pila · divide y vencerás"]]],
  tarjetas: [
    ["Corrección y eficiencia", "Resultado correcto siempre / pocos recursos de tiempo y memoria."],
    ["Notación O", "Orden de crecimiento de las operaciones según n, sin constantes."],
    ["Órdenes habituales", "O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)."],
    ["Búsqueda secuencial", "Uno a uno; cualquier lista; O(n)."],
    ["Búsqueda binaria", "Mirar el centro y descartar la mitad; lista ordenada; O(log n)."],
    ["Burbuja", "Comparar contiguos e intercambiar; el mayor sube al final; O(n²)."],
    ["Selección", "Buscar el mínimo y colocarlo delante; O(n²)."],
    ["Inserción", "Insertar cada elemento en la parte ordenada; rápida si casi ordenada."],
    ["Recursividad", "Función que se llama a sí misma: caso base + caso recursivo."],
    ["Memoización", "Guardar resultados ya calculados para no repetirlos."],
    ["Mezcla (mergesort)", "Dividir en mitades, ordenar y mezclar; O(n log n); estable."],
    ["Quicksort", "Pivote, menores y mayores, recursividad; O(n log n) de media."],
  ],
  ejemplos: [
    ["Calcula cuántas comparaciones hacen, en el peor caso, la búsqueda secuencial y la binaria en una lista de 4 096 elementos.", ["Secuencial: en el peor caso recorre toda la lista.", "Binaria: número de veces que se divide 4 096 entre 2 hasta llegar a 1, más una.", "4 096 = 2¹²."], "Secuencial: 4 096 comparaciones. Binaria: unas 13 (log₂ 4 096 = 12, más la última comprobación)."],
    ["Haz la traza de la búsqueda binaria de 40 en [5, 12, 18, 25, 33, 40, 47, 51].", ["izq = 0, der = 7 → medio = 3, L[3] = 25 < 40 → izq = 4.", "izq = 4, der = 7 → medio = 5, L[5] = 40.", "Coincide."], "Se encuentra en la posición 5 tras 2 comparaciones con el centro."],
    ["Ordena [29, 10, 14, 37, 13] por selección mostrando la lista tras cada paso.", ["Mínimo 10 → intercambio con 29: [10, 29, 14, 37, 13].", "Mínimo del resto 13 → con 29: [10, 13, 14, 37, 29].", "Mínimo del resto 14, ya en su sitio.", "Mínimo del resto 29 → con 37: [10, 13, 14, 29, 37]."], "[10, 13, 14, 29, 37] en 4 pasos."],
    ["Escribe una función recursiva que sume los dígitos de un número entero positivo.", ["Caso base: un número de una cifra es su propia suma.", "Caso recursivo: la última cifra (n % 10) más la suma de las cifras del resto (n // 10).", "Cada llamada quita una cifra, así que se acerca al caso base."], "def suma_digitos(n):\n    if n < 10:\n        return n\n    return n % 10 + suma_digitos(n // 10)\n\nsuma_digitos(2026)   # 10"],
    ["Mejora la función recursiva de Fibonacci con memoización y explica la diferencia de eficiencia.", ["Se guarda cada resultado en un diccionario.", "Antes de calcular se mira si ya está.", "Cada valor se calcula una sola vez."], "memo = {0: 0, 1: 1}\ndef fib(n):\n    if n not in memo:\n        memo[n] = fib(n - 1) + fib(n - 2)\n    return memo[n]\n\nfib(80) es instantáneo: pasa de O(2ⁿ) a O(n)."],
    ["Ordena [38, 27, 43, 3, 9, 82, 10] con mergesort describiendo las divisiones y las mezclas.", ["Dividir: [38, 27, 43] y [3, 9, 82, 10]; después [38], [27, 43], [3, 9], [82, 10].", "Mezclar los niveles inferiores: [27, 43], [3, 9], [10, 82].", "Mezclar: [27, 38, 43] y [3, 9, 10, 82].", "Mezcla final."], "[3, 9, 10, 27, 38, 43, 82]."],
  ],
  errores: [
    "Aplicar la búsqueda binaria a una lista sin ordenar.",
    "Calcular mal el punto medio o actualizar izq = medio en lugar de medio + 1, lo que crea un bucle infinito.",
    "Olvidar el caso base de una función recursiva o hacer que el caso recursivo no se acerque a él.",
    "Pensar que un ordenador más rápido compensa siempre un algoritmo O(n²) frente a uno O(n log n).",
    "Confundir la ordenación por selección (busca el mínimo) con la de inserción (inserta en la parte ordenada).",
    "Usar recursividad sin memoización en problemas que repiten subproblemas, como Fibonacci.",
  ],
  ejercicios: {
    b: [
      ["Define corrección y eficiencia de un algoritmo.", "Corrección: el algoritmo da el resultado correcto para todas las entradas válidas. Eficiencia: la cantidad de recursos (tiempo y memoria) que necesita."],
      ["Ordena de más a menos eficiente: O(n²), O(1), O(n log n), O(log n), O(n).", "O(1), O(log n), O(n), O(n log n), O(n²)."],
      ["Indica la complejidad de: a) sumar los elementos de una lista; b) acceder a lista[0]; c) comparar todos los pares de una lista.", "a) O(n). b) O(1). c) O(n²)."],
      ["¿Qué ventaja y qué inconveniente tiene la búsqueda secuencial?", "Ventaja: funciona con cualquier lista, ordenada o no. Inconveniente: es lenta con muchos datos, O(n)."],
      ["¿Qué condición debe cumplir una lista para aplicar la búsqueda binaria?", "Estar ordenada según el mismo criterio con el que se compara."],
      ["Escribe una función que busque el máximo de una lista recorriéndola una vez.", "def maximo(L):\n    m = L[0]\n    for x in L:\n        if x > m:\n            m = x\n    return m"],
      ["Explica en una frase cómo funciona la ordenación por burbuja.", "Recorre la lista comparando elementos contiguos y los intercambia si están desordenados; tras cada pasada el mayor queda al final, y se repite hasta que no hay cambios."],
      ["Haz la primera pasada de la burbuja sobre [3, 8, 2, 5].", "3 y 8 no; 8 y 2 sí → [3, 2, 8, 5]; 8 y 5 sí → [3, 2, 5, 8]."],
      ["¿Qué dos partes tiene toda función recursiva?", "El caso base, que se resuelve directamente, y el caso recursivo, en el que la función se llama a sí misma con un problema más pequeño."],
      ["Escribe una función recursiva que calcule la potencia b elevado a n (n ≥ 0).", "def potencia(b, n):\n    if n == 0:\n        return 1\n    return b * potencia(b, n - 1)"],
      ["¿En qué consiste la estrategia divide y vencerás? Cita dos algoritmos que la usen.", "Dividir el problema en subproblemas del mismo tipo, resolverlos (normalmente de forma recursiva) y combinar sus soluciones. La usan la búsqueda binaria, mergesort y quicksort."],
      ["¿Qué función de Python ordena una lista sin modificarla? ¿Qué algoritmo usa?", "sorted(lista), que devuelve una lista nueva. Usa Timsort, un algoritmo híbrido de mezcla e inserción."],
    ],
    m: [
      ["Un algoritmo hace n² + 100n operaciones y otro 1 000n. ¿Cuál es mejor para n = 50? ¿Y para n = 10 000? ¿Qué complejidad tiene cada uno?", "n = 50: el primero hace 2 500 + 5 000 = 7 500 y el segundo 50 000; es mejor el primero. n = 10 000: 10⁸ + 10⁶ ≈ 1,01·10⁸ frente a 10⁷; es mejor el segundo. Son O(n²) y O(n): para datos grandes gana siempre el lineal."],
      ["Modifica la búsqueda secuencial para que devuelva una lista con todas las posiciones donde aparece x.", "def todas(L, x):\n    return [i for i in range(len(L)) if L[i] == x]"],
      ["Haz la traza de la búsqueda binaria de 7 en [1, 3, 5, 9, 11, 13]. ¿Qué devuelve?", "izq 0, der 5 → medio 2 (5 < 7) → izq 3. izq 3, der 5 → medio 4 (11 > 7) → der 3. izq 3, der 3 → medio 3 (9 > 7) → der 2. izq > der → devuelve −1: no está."],
      ["Ordena [6, 2, 9, 4] por inserción mostrando la lista tras insertar cada elemento.", "Insertar 2: [2, 6, 9, 4]. Insertar 9: [2, 6, 9, 4]. Insertar 4: [2, 4, 6, 9]."],
      ["¿Cuántas comparaciones hace la burbuja sin mejora sobre una lista de 6 elementos? Generaliza.", "5 + 4 + 3 + 2 + 1 = 15. En general n(n − 1)/2, que es O(n²)."],
      ["Escribe una función recursiva que invierta una cadena.", "def invertir(s):\n    if len(s) <= 1:\n        return s\n    return invertir(s[1:]) + s[0]"],
      ["Escribe una función recursiva que cuente cuántas veces aparece x en una lista.", "def contar(L, x):\n    if not L:\n        return 0\n    return (1 if L[0] == x else 0) + contar(L[1:], x)"],
      ["Escribe la versión iterativa de Fibonacci y compárala con la recursiva simple.", "def fib(n):\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a\nEs O(n) y usa memoria constante; la recursiva simple es O(2ⁿ) y repite cálculos."],
      ["Mezcla paso a paso las listas ordenadas [2, 7, 9] y [1, 3, 8, 10].", "Se compara 2 y 1 → 1; 2 y 3 → 2; 7 y 3 → 3; 7 y 8 → 7; 9 y 8 → 8; 9 y 10 → 9; queda 10. Resultado: [1, 2, 3, 7, 8, 9, 10]."],
      ["Aplica un nivel de quicksort a [5, 3, 8, 6, 2, 7] con el primer elemento como pivote.", "Pivote 5; menores [3, 2]; mayores [8, 6, 7]. Después se ordena cada parte: [2, 3] + [5] + [6, 7, 8]."],
      ["Ordena una lista de tuplas (nombre, edad) por edad y, a igualdad, por nombre, usando sorted.", "sorted(personas, key=lambda p: (p[1], p[0]))"],
      ["¿Por qué quicksort puede ser O(n²)? ¿Cómo se evita?", "Si el pivote es siempre el menor o el mayor (por ejemplo, el primero en una lista ya ordenada), una de las partes queda vacía y hay n niveles de recursión. Se evita eligiendo el pivote al azar o como la mediana de tres elementos."],
      ["Escribe un algoritmo voraz para dar el cambio con monedas de 200, 100, 50, 20, 10, 5, 2 y 1 céntimos.", "def cambio(c):\n    r = []\n    for m in [200, 100, 50, 20, 10, 5, 2, 1]:\n        while c >= m:\n            r.append(m); c -= m\n    return r\n\ncambio(387)   # [200, 100, 50, 20, 10, 5, 2]"],
      ["Explica con un ejemplo qué significa que un algoritmo de ordenación sea estable.", "Conserva el orden de los elementos con la misma clave. Si una lista alfabética [Ana 7, Leo 9, Eva 7] se ordena por nota con un algoritmo estable, queda [Ana 7, Eva 7, Leo 9]: Ana sigue antes que Eva."],
    ],
    a: [
      ["Escribe la búsqueda binaria de forma recursiva.", "def binaria(L, x, izq, der):\n    if izq > der:\n        return -1\n    m = (izq + der) // 2\n    if L[m] == x:\n        return m\n    if L[m] < x:\n        return binaria(L, x, m + 1, der)\n    return binaria(L, x, izq, m - 1)\n\nbinaria(L, x, 0, len(L) - 1)"],
      ["Mide con el módulo time cuánto tardan la burbuja y sorted en ordenar 5 000 números aleatorios. Explica el resultado con la notación O.", "import random, time\nL = [random.random() for _ in range(5000)]\nt = time.time(); burbuja(L[:]); print(time.time() - t)\nt = time.time(); sorted(L); print(time.time() - t)\nLa burbuja tarda varios segundos (unos 12,5 millones de comparaciones, O(n²)); sorted, milésimas (unas 60 000, O(n log n), y además está escrito en C)."],
      ["Programa las Torres de Hanói de forma recursiva mostrando cada movimiento.", "def hanoi(n, origen, destino, aux):\n    if n == 0:\n        return\n    hanoi(n - 1, origen, aux, destino)\n    print(f\"Disco {n}: {origen} → {destino}\")\n    hanoi(n - 1, aux, destino, origen)\n\nhanoi(3, \"A\", \"C\", \"B\")   # 7 movimientos"],
      ["Escribe una función recursiva que genere todas las permutaciones de una lista. ¿Qué complejidad tiene?", "def perm(L):\n    if len(L) <= 1:\n        return [L]\n    r = []\n    for i in range(len(L)):\n        for p in perm(L[:i] + L[i+1:]):\n            r.append([L[i]] + p)\n    return r\nHay n! permutaciones, así que es O(n!), peor aún que exponencial: con 12 elementos ya son 479 millones."],
      ["Demuestra que la búsqueda binaria es O(log n): ¿cuántas veces puede dividirse por la mitad una lista de n elementos?", "Tras k pasos quedan n / 2ᵏ elementos. El algoritmo termina como tarde cuando n / 2ᵏ = 1, es decir, 2ᵏ = n, k = log₂ n. El número de pasos crece como log₂ n, así que es O(log n)."],
      ["Para el sistema de monedas {1, 3, 4}, ¿da el algoritmo voraz el cambio óptimo de 6? Explica qué enseña este ejemplo.", "El voraz toma 4 + 1 + 1 (3 monedas), pero lo óptimo es 3 + 3 (2 monedas). Enseña que la estrategia voraz no siempre da la mejor solución; aquí haría falta programación dinámica o fuerza bruta."],
      ["Escribe una función recursiva que liste todos los ficheros de una carpeta y sus subcarpetas usando pathlib. ¿Cuál es el caso base?", "from pathlib import Path\ndef listar(carpeta):\n    for p in Path(carpeta).iterdir():\n        if p.is_dir():\n            listar(p)\n        else:\n            print(p)\nEl caso base es implícito: un fichero (o una carpeta sin subcarpetas) no provoca nuevas llamadas."],
      ["Un algoritmo de fuerza bruta prueba contraseñas a 10⁹ por segundo. Calcula cuánto tarda, en el peor caso, con 6 letras minúsculas (26) y con 12 caracteres de 94 posibles. Conclusión.", "26⁶ ≈ 3,1·10⁸ → 0,3 segundos. 94¹² ≈ 4,8·10²³ → 4,8·10¹⁴ s, unos 15 millones de años. El número de combinaciones crece exponencialmente con la longitud: las contraseñas largas y variadas son mucho más seguras."],
      ["Escribe quicksort en el sitio con el esquema de partición de Lomuto (pivote el último elemento).", "def particion(L, lo, hi):\n    p = L[hi]; i = lo\n    for j in range(lo, hi):\n        if L[j] < p:\n            L[i], L[j] = L[j], L[i]; i += 1\n    L[i], L[hi] = L[hi], L[i]\n    return i\n\ndef quick(L, lo=0, hi=None):\n    if hi is None:\n        hi = len(L) - 1\n    if lo < hi:\n        k = particion(L, lo, hi)\n        quick(L, lo, k - 1)\n        quick(L, k + 1, hi)"],
      ["Debate: un ayuntamiento usa un algoritmo para asignar plazas escolares. ¿Qué condiciones debería cumplir para ser justo? Relaciónalo con la transparencia de los algoritmos.", "Debería ser correcto y probado, usar criterios públicos y legales (proximidad, hermanos, renta), ser explicable y auditable por terceros, permitir reclamar y que una persona revise los casos dudosos, y evitar sesgos que discriminen a ciertos grupos. Los algoritmos que deciden sobre personas deben ser transparentes, como exige la normativa europea sobre inteligencia artificial y protección de datos."],
    ],
  },
  glosario: [
    ["Algoritmo", "Secuencia finita y precisa de pasos que resuelve un problema."],
    ["Eficiencia", "Cantidad de tiempo y memoria que necesita un algoritmo."],
    ["Complejidad", "Forma en que crece el número de operaciones con el tamaño de los datos."],
    ["Notación O", "Expresión del orden de crecimiento de un algoritmo en el peor caso."],
    ["Peor caso", "Entrada que obliga al algoritmo a hacer el máximo de operaciones."],
    ["Búsqueda secuencial", "Búsqueda que recorre los elementos uno a uno; O(n)."],
    ["Búsqueda binaria", "Búsqueda en datos ordenados que descarta la mitad en cada paso; O(log n)."],
    ["Ordenación por burbuja", "Ordenación que intercambia elementos contiguos desordenados; O(n²)."],
    ["Ordenación por selección", "Ordenación que coloca en cada paso el mínimo del resto; O(n²)."],
    ["Ordenación por inserción", "Ordenación que inserta cada elemento en la parte ya ordenada."],
    ["Recursividad", "Técnica en la que una función se llama a sí misma."],
    ["Caso base", "Caso que una función recursiva resuelve sin volver a llamarse."],
    ["Memoización", "Técnica que guarda resultados ya calculados para reutilizarlos."],
    ["Divide y vencerás", "Estrategia que divide un problema, resuelve las partes y las combina."],
    ["Pivote", "Elemento de quicksort que separa los menores de los mayores."],
    ["Algoritmo estable", "El que conserva el orden relativo de los elementos iguales."],
    ["Algoritmo voraz", "El que elige en cada paso la opción que parece mejor en ese momento."],
  ],
  situacion: {
    titulo: "La carrera de los algoritmos",
    reto: "En grupos, programad varios algoritmos de búsqueda y ordenación, medid su rendimiento con distintos tamaños de datos y presentad a la clase un informe con gráficas que demuestre qué algoritmo conviene en cada situación.",
    pasos: [
      "Programad la búsqueda secuencial y la binaria y tres algoritmos de ordenación (uno simple, mergesort y quicksort).",
      "Comprobad que son correctos con casos de prueba: lista vacía, un elemento, repetidos, ordenada y al revés.",
      "Medid con time el tiempo de cada algoritmo para 1 000, 2 000, 4 000 y 8 000 datos aleatorios y casi ordenados.",
      "Representad los resultados en una hoja de cálculo o con Matplotlib y comparadlos con la complejidad teórica.",
      "Redactad conclusiones: qué algoritmo elegiríais en cada caso y por qué.",
    ],
    producto: "Programa con los algoritmos y sus pruebas, tabla y gráficas de tiempos e informe de conclusiones presentado a la clase.",
    evaluacion: [
      "Los algoritmos están bien programados y superan todos los casos de prueba.",
      "Las mediciones son rigurosas (varias repeticiones, mismos datos para todos).",
      "Se relacionan correctamente los resultados con la notación O.",
      "Las conclusiones son razonadas y se comunican con claridad.",
    ],
  },
  familias: [
    "Jugad a adivinar un número del 1 al 100 con pistas de «mayor» o «menor» y contad cuántos intentos hacen falta.",
    "Pedidle que os enseñe a ordenar una baraja de cartas por inserción y por selección.",
    "Comentad juntos qué algoritmos deciden lo que veis en las redes sociales o en las plataformas de vídeo.",
    "Proponedle resolver un sudoku explicando en voz alta cuándo «vuelve atrás».",
  ],
  saberes: "Algoritmia: corrección y eficiencia, complejidad y notación O, búsqueda secuencial y binaria, ordenación por burbuja, selección e inserción, recursividad (caso base, pila de llamadas, memoización), divide y vencerás (mezcla y ordenación rápida), estabilidad, estrategias voraces, de fuerza bruta, de vuelta atrás y programación dinámica, límites de la computación y ética de los algoritmos (Tecnologías de la Información y la Comunicación II, optativa de 2º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Ordenación desenchufada: la clase ordena tarjetas numeradas con cada algoritmo y se cuentan las comparaciones.",
    "Búsqueda binaria con una guía telefónica o un diccionario de papel antes de programarla.",
    "Usar un visualizador de algoritmos online para comparar burbuja, inserción, mezcla y quicksort.",
    "Torres de Hanói físicas con 3 y 4 discos para descubrir la regla 2ⁿ − 1 antes de programarla.",
  ],
  fuentes: [
    B.PYDOC,
    { t: "Python: guía de ordenación (sorted y key) en español", url: "https://docs.python.org/es/3/howto/sorting.html" },
    { t: "VisuAlgo: visualización de algoritmos de ordenación", url: "https://visualgo.net/es/sorting" },
  ],
}));
