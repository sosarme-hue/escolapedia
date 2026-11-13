// Nivel libro: Técnicas gráfico-plásticas (Expresión Artística 4º ESO).
const { filas, cadena, vs, rejilla, escala, barras, tb, tabla, marco } = require("./_eso4L12");

module.exports = {
  minutos: 110,
  revisado: "2026-11-13",
  objetivos: ["Conocer los procedimientos murales, la tinta y las técnicas digitales", "Trabajar en el taller con seguridad y criterios de sostenibilidad"],
  claves: ["veladura", "reserva", "matriz", "fresco"],
  lectura: {
    titulo: "Un taller en una caja de zapatos",
    html: `<p>En 1945, el pintor francés Henri Matisse estaba enfermo y apenas podía levantarse de la cama ni sostener un pincel durante mucho tiempo. Cualquiera habría pensado que su carrera había terminado. En lugar de rendirse, cambió de técnica: pidió a sus ayudantes que pintaran hojas de papel con gouache de colores intensos y él las recortaba con unas tijeras grandes, «dibujando directamente en el color». Así nacieron sus famosos <b>papeles recortados</b>, como <i>El caracol</i> o las figuras azules de <i>Desnudos azules</i>, que hoy están entre sus obras más queridas.</p><p>La historia de Matisse enseña algo importante para este tema: <mark>la técnica no es un detalle</mark>, es una decisión que cambia lo que la obra puede decir. Un mismo paisaje transmite calma en acuarela, fuerza en carboncillo y humor en collage. Elegir un material, un soporte y un procedimiento es como elegir el tono de voz con el que hablas. En este tema conocerás las técnicas secas, húmedas, mixtas y de estampación, aprenderás qué hay dentro de una pintura y por qué se comporta como lo hace, y terminarás con un muestrario propio de técnicas que podrás usar en cualquier proyecto. No hace falta un estudio lleno de caballetes: con una caja de zapatos bien organizada y curiosidad es suficiente para empezar.</p>`,
  },
  partes: ["Técnicas húmedas", "Soportes y herramientas", "Técnicas mixtas y collage", "Estampación y grabado", "Taller seguro y sostenible"],
  mas: {
    "Técnicas secas": `<p>Las técnicas secas son las más inmediatas porque no hay que esperar a que nada se seque: lo que haces aparece al momento y casi todo se puede corregir. Por eso son las preferidas para <b>bocetos, apuntes del natural y estudios de luz</b>. Su recurso principal es la <b>presión</b>: apretando más o menos el mismo lápiz consigues toda una gama de grises. Los lápices de colores se superponen en capas finas para mezclar tonos, y las ceras blandas permiten el <b>esgrafiado</b> rascando una capa sobre otra. Una regla útil: trabaja de lo general a lo particular, primero manchas suaves y al final los negros y los detalles.</p>`,
    "Técnicas húmedas": `<p>Cada técnica húmeda tiene su carácter. La <b>acuarela</b> obliga a planificar, porque el blanco es el del papel y no se puede recuperar. La <b>témpera</b> es económica y opaca, ideal para colores planos en carteles. El <b>acrílico</b> es versátil: diluido con mucha agua se parece a la acuarela, y espeso permite empastes con relieve; además se seca en minutos, lo que acelera el trabajo pero obliga a mezclar rápido. El <b>óleo</b>, la técnica de Velázquez o Van Gogh, permite fundir colores durante días y conseguir transiciones muy suaves, aunque exige paciencia y ventilación.</p>`,
    "Soportes y herramientas": `<p>El <b>gramaje</b> indica el peso del papel en gramos por metro cuadrado: un folio pesa unos 80 g/m², una cartulina unos 200 g/m² y un buen papel de acuarela 300 g/m². La <b>textura</b> también importa: el papel satinado es liso y va bien para tinta y lápiz de detalle, mientras que el de grano grueso atrapa el pigmento del carboncillo o la acuarela. Antes de pintar al óleo o con acrílico sobre madera o lienzo se aplica una <b>imprimación</b> (normalmente gesso), una capa blanca que sella el soporte y hace que la pintura agarre.</p>`,
    "Técnicas mixtas y collage": `<p>El collage permite trabajar con <mark>materiales encontrados</mark>: billetes de autobús, mapas viejos, envoltorios, fotografías. Cada fragmento trae su propio significado, y al juntarlos aparece uno nuevo. Para que la obra funcione hay que pensar en la composición igual que en una pintura: dónde está el centro de interés, qué colores dominan, qué texturas contrastan. Una buena práctica es colocar todas las piezas sin pegar, hacer una foto y probar varias combinaciones antes de fijarlas con cola blanca o barra adhesiva.</p>`,
    "Estampación y grabado": `<p>El <b>monotipo</b> es la forma más sencilla de estampación: se pinta sobre una superficie lisa (un cristal o un plástico) y se presiona un papel encima. Solo sale una copia buena, de ahí su nombre. El <b>sello</b> de goma EVA o de patata permite repetir motivos para crear patrones, como en los tejidos estampados. En el aula, el <b>linograbado</b> es el más usado: se dibuja sobre linóleo, se talla con gubias lo que debe quedar blanco y se entinta con un rodillo.</p>`,
  },
  svgs: {
    "El grafito y el carboncillo a fondo": rejilla("Grafito, carboncillo, pastel y fijador: para qué sirve cada uno", [["Grafito", "detalle y valores", "var(--ink)"], ["Carboncillo", "mancha y gran formato", "var(--muted)"], ["Pastel", "color intenso", "var(--red)"], ["Fijador", "protege el polvo", "var(--pen)"]]),
    "Pigmento, aglutinante y disolvente": tabla("Componentes de la acuarela, el acrílico y el óleo", ["Técnica", "Aglutina", "Limpieza"], [["Acuarela", "goma arábiga", "agua"], ["Acrílico", "resina", "agua (fresco)"], ["Óleo", "aceite", "aguarrás"], ["Témpera", "cola o goma", "agua"]]),
    "Recursos de la acuarela": cadena("Orden de trabajo de una acuarela: de claro a oscuro", [["Reservar blancos", "papel sin pintar o líquido de enmascarar", "var(--muted)"], ["Húmedo sobre húmedo", "fondos y cielos suaves", "var(--water)"], ["Veladuras", "capas transparentes ya secas", "var(--pen)"], ["Detalles en seco", "bordes nítidos al final", "var(--ink)"]]),
    "Ensamblaje, fotomontaje y técnicas de reserva": rejilla("Cuatro técnicas mixtas: reserva con cera, esgrafiado, fotomontaje y ensamblaje", [["Reserva con cera", "la cera repele el agua", "var(--sun)"], ["Esgrafiado", "rascar la capa oscura", "var(--ink)"], ["Fotomontaje", "fragmentos de fotos", "var(--red)"], ["Ensamblaje", "objetos en 3D", "var(--leaf)"]]),
    "Tipos de grabado": filas("Tipos de grabado según la matriz", [["Relieve", "xilografía, linóleo", "var(--hl-ink)"], ["Hueco", "aguafuerte, punta seca", "var(--red)"], ["Plano", "litografía (piedra)", "var(--pen)"], ["Permeográfico", "serigrafía (malla)", "var(--leaf)"]]),
  },
  nuevos: [
    {
      tras: "Recursos de la acuarela",
      html: `<h3>La tinta: plumilla, pincel y aguada</h3><p>La <b>tinta china</b> es un pigmento negro muy fino (negro de humo) con goma o laca como aglutinante. Una vez seca resiste el agua, así que se pueden aplicar capas encima sin que se corra. Con <b>plumilla</b> se consiguen líneas finas y nítidas; el sombreado se hace con <b>tramas</b>: líneas paralelas (rayado), cruzadas (achurado) o puntos (punteado o puntillismo), y cuanto más juntas, más oscura es la zona. Con <b>pincel</b> el trazo varía de grosor según la presión, como en la caligrafía japonesa.</p><p>La <b>aguada</b> consiste en diluir la tinta con agua para obtener grises transparentes, parecidos a la acuarela pero en un solo color. Combinar línea de plumilla y manchas de aguada es la técnica clásica de muchos cuadernos de viaje y de la ilustración de prensa. Hoy los <b>rotuladores calibrados</b> (0,1, 0,3, 0,5 mm…) permiten el mismo tipo de trabajo sin mojar la plumilla, y los rotuladores de pincel imitan el trazo variable.</p>`,
      svg: marco("Tres tramas de tinta: rayado, achurado y punteado, de más claro a más oscuro", `
        ${[0, 1, 2].map((j) => `<rect x="${16 + j * 80}" y="22" width="68" height="100" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="1.5"/>`).join("")}
        <g stroke="var(--ink)" stroke-width="1.4">${[...Array(10)].map((_, i) => `<path d="M${22 + i * 6} 30 V 114"/>`).join("")}</g>
        <g stroke="var(--ink)" stroke-width="1.2">${[...Array(10)].map((_, i) => `<path d="M${102 + i * 6} 30 V 114"/><path d="M98 ${36 + i * 8} H 162"/>`).join("")}</g>
        ${[...Array(60)].map((_, i) => `<circle cx="${182 + (i * 13) % 56}" cy="${30 + (i * 29) % 86}" r="1.8" fill="var(--ink)"/>`).join("")}
        <g font-size="12" font-weight="700" text-anchor="middle" fill="var(--ink)"><text x="50" y="144">rayado</text><text x="130" y="144">achurado</text><text x="210" y="144">punteado</text></g>
        <text x="130" y="168" text-anchor="middle" font-size="11.5" fill="var(--muted)">más juntas las líneas, más oscuro</text>`),
    },
    {
      tras: "Soportes y herramientas",
      html: `<h3>Pintura mural: fresco, grafiti y arte urbano</h3><p>Pintar sobre un muro es una de las formas de arte más antiguas: las cuevas de Altamira tienen más de 15.000 años. En el <b>fresco</b>, la técnica de Giotto o de Miguel Ángel en la Capilla Sixtina, se pinta con pigmentos disueltos en agua sobre un enlucido de cal todavía húmedo. Al secarse, la cal forma una costra que <mark>atrapa el color dentro del muro</mark>, por eso los frescos duran siglos. Hay que trabajar rápido, por partes llamadas «jornadas», porque solo se puede pintar la zona que está húmeda ese día.</p><p>En el siglo XX, los muralistas mexicanos (Diego Rivera, Orozco, Siqueiros) usaron el mural para contar la historia de su país a todo el pueblo. Hoy el <b>arte urbano</b> utiliza aerosol, plantillas (<i>stencil</i>), carteles pegados y pintura plástica. Es importante distinguir el <b>muralismo autorizado</b>, que embellece barrios y a menudo se hace con la participación de los vecinos, de las pintadas sin permiso, que dañan bienes de otras personas. Un mural se planifica con un boceto a escala y una <b>cuadrícula</b> que permite ampliarlo al muro sin perder las proporciones.</p>`,
      svg: marco("Ampliar un boceto a un muro con una cuadrícula", `
        <rect x="18" y="40" width="64" height="48" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
        <g stroke="var(--pen)" stroke-width="1">${[1, 2, 3].map((i) => `<path d="M${18 + i * 16} 40 V 88"/>`).join("")}${[1, 2].map((i) => `<path d="M18 ${40 + i * 16} H 82"/>`).join("")}</g>
        <circle cx="50" cy="64" r="12" fill="var(--sun)"/>
        <path d="M90 64 H 110" stroke="var(--muted)" stroke-width="2.5"/><path d="M104 58 L 111 64 L 104 70" fill="none" stroke="var(--muted)" stroke-width="2.5"/>
        <rect x="118" y="20" width="124" height="96" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>
        <g stroke="var(--red)" stroke-width="1.2">${[1, 2, 3].map((i) => `<path d="M${118 + i * 31} 20 V 116"/>`).join("")}${[1, 2].map((i) => `<path d="M118 ${20 + i * 32} H 242"/>`).join("")}</g>
        <circle cx="180" cy="68" r="24" fill="var(--sun)"/>
        <g font-size="12" font-weight="700" text-anchor="middle"><text x="50" y="108" fill="var(--pen)">boceto</text><text x="180" y="136" fill="var(--red)">muro (×2)</text></g>
        <text x="130" y="166" text-anchor="middle" font-size="11.5" fill="var(--muted)">se copia cuadro a cuadro</text>`),
    },
    {
      tras: "Tipos de grabado",
      html: `<h3>Técnicas digitales que imitan a las tradicionales</h3><p>Las aplicaciones de dibujo y pintura digital (Krita, que es gratuita, Procreate, Photoshop o Clip Studio) ofrecen <b>pinceles</b> que simulan grafito, acuarela, óleo o tinta. Con una tableta gráfica o un lápiz para tableta, la presión cambia el grosor y la opacidad del trazo, igual que con un lápiz real. Las ventajas son claras: deshacer, trabajar en <b>capas</b>, probar colores sin gastar material y compartir el resultado al instante.</p><p>Pero las técnicas tradicionales siguen siendo la base. Quien ha mezclado pigmentos de verdad entiende mejor cómo se comportan los colores digitales, y quien ha manchado con carboncillo sabe construir las luces y sombras de una ilustración. Muchos artistas trabajan de forma <b>híbrida</b>: dibujan a mano, escanean el dibujo y lo colorean en el ordenador, o al revés, imprimen una base digital y pintan encima. Lo importante es elegir la herramienta que mejor sirve a la idea.</p>`,
      svg: vs("Comparación entre técnica tradicional y digital", ["Tradicional", ["textura real", "obra única", "no se deshace", "gasta material"], "var(--hl-ink)"], ["Digital", ["capas", "deshacer", "copias infinitas", "necesita aparato"], "var(--pen)"]),
    },
    {
      html: `<h3>Taller seguro y sostenible</h3><p>Trabajar con materiales artísticos exige unas <b>normas de seguridad</b> básicas. Las gubias del grabado se usan siempre con la mano que sujeta la plancha <mark>detrás de la cuchilla</mark> y empujando hacia fuera del cuerpo. Los disolventes como el aguarrás se usan con ventilación y nunca se tiran por el desagüe; los fijadores y aerosoles, al aire libre o con mascarilla. Hay que leer las etiquetas: algunos pigmentos antiguos (como el blanco de plomo o el amarillo de cadmio) son tóxicos y no deben ingerirse ni tocarse con heridas.</p><p>También podemos reducir el impacto ambiental del taller. Algunas ideas: reutilizar papel por las dos caras para los bocetos, usar cartón de embalaje como soporte, limpiar los pinceles en un bote y dejar que el pigmento se deposite antes de tirar el agua, compartir materiales en lugar de comprar de más y crear obras con <b>residuos</b> (tapones, envases, telas). Un buen hábito final es <b>cuidar las herramientas</b>: un pincel bien lavado y guardado con la punta hacia arriba dura años.</p>`,
      svg: filas("Cuatro normas del taller: gubia hacia fuera, ventilar, no tirar disolventes y reutilizar", [["Gubias", "cortar hacia fuera del cuerpo", "var(--red)"], ["Disolventes", "ventilar, no al desagüe", "var(--sun)"], ["Aerosoles", "al aire libre, con mascarilla", "var(--pen)"], ["Reutilizar", "cartón, papel, envases", "var(--leaf)"]]),
    },
  ],
  ejemplos: [
    ["Quieres pintar un cielo de atardecer suave, con colores que se funden. ¿Qué técnica y procedimiento eliges?", ["Necesitas transiciones suaves y transparencia.", "La acuarela es transparente y se funde bien.", "El procedimiento húmedo sobre húmedo hace que los colores se expandan."], "Acuarela, húmedo sobre húmedo, sobre papel de acuarela de 300 g/m²."],
    ["Debes hacer 30 felicitaciones iguales para el centro. ¿Qué técnica usarías?", ["Necesitas copias idénticas.", "El grabado permite repetir la imagen desde una matriz.", "El linóleo es blando y fácil de tallar con gubias en el aula.", "Hay que dibujar el texto al revés en la matriz."], "Linograbado (grabado en relieve) estampado con tinta y rodillo, con el texto invertido en la plancha."],
    ["Un alumno pinta con témpera sobre folio fino y el papel se arruga y se rompe. ¿Qué ha fallado?", ["La témpera lleva agua y mucha carga.", "El folio de 80 g/m² no aguanta la humedad.", "El soporte debe adecuarse a la técnica."], "Ha elegido mal el soporte: necesita cartulina o papel de unos 200 g/m² o más."],
    ["Quieres dibujar una calle con mucho detalle y sombras graduadas, en blanco y negro, para una revista del instituto que se imprimirá en fotocopiadora. ¿Qué técnica conviene?", ["La fotocopia reproduce mal los grises suaves del lápiz.", "La tinta da negros puros que se fotocopian bien.", "Las sombras se pueden hacer con tramas de líneas o puntos."], "Plumilla o rotulador calibrado con sombreado por tramas (rayado, achurado o punteado)."],
    ["Un grupo va a pintar un mural de 3 × 2 m a partir de un boceto de 30 × 20 cm. ¿Cómo trasladan el dibujo?", ["La escala es 10: cada centímetro del boceto son 10 cm del muro.", "Se dibuja una cuadrícula de 5 cm en el boceto (6 × 4 cuadros).", "En el muro se dibuja la misma cuadrícula con cuadros de 50 cm.", "Se copia el contenido de cada cuadro en su cuadro equivalente."], "Con el método de la cuadrícula a escala 1:10: cuadros de 5 cm en el boceto y de 50 cm en el muro."],
    ["Quieres pintar un fondo de acuarela azul y después unas hojas blancas encima. ¿Cómo lo haces?", ["La acuarela es transparente: el blanco no tapa el azul.", "Hay que reservar las hojas antes de pintar el fondo.", "Se pueden dibujar con cera blanca o cubrir con líquido de enmascarar.", "Se pinta el fondo y, cuando está seco, se retira el enmascarado."], "Reservando las hojas con cera o líquido de enmascarar antes de pintar el fondo azul."],
  ],
  errores: [
    "Usar pintura blanca en la acuarela en lugar de reservar el blanco del papel.",
    "Elegir un soporte inadecuado: folio fino para técnicas húmedas o papel satinado para carboncillo.",
    "Borrar el carboncillo con una goma normal, que ensucia: se usa goma moldeable.",
    "Olvidar que en el grabado la imagen se estampa invertida, como en un espejo (sobre todo con letras).",
    "Confundir opaco y transparente: la témpera tapa, la acuarela deja ver lo de debajo.",
    "Tallar con la gubia hacia la mano que sujeta la plancha o tirar el aguarrás por el desagüe.",
  ],
  ejercicios: [
    ["b", "Ordena de más claro a más oscuro estos lápices: 6B, 2H, HB, 2B.", "2H, HB, 2B, 6B. La serie H (hard) es dura y clara; la B (black) es blanda y oscura; HB está en medio."],
    ["b", "¿Cuáles son los tres componentes de una pintura? Explica para qué sirve cada uno.", "Pigmento (aporta el color), aglutinante (une el pigmento y lo fija al soporte) y disolvente (hace la pintura más líquida y permite limpiarla)."],
    ["b", "Clasifica como seca o húmeda: carboncillo, acuarela, pastel, óleo, cera, acrílico.", "Secas: carboncillo, pastel, cera. Húmedas: acuarela, óleo, acrílico."],
    ["b", "¿Qué significa que una técnica sea opaca? Pon dos ejemplos.", "Que tapa lo que hay debajo. Ejemplos: témpera, gouache (y también el acrílico y el óleo espesos)."],
    ["b", "¿Qué es el gramaje de un papel? ¿Cuál es mayor, el de un folio o el de un papel de acuarela?", "Es el peso del papel en g/m². El de acuarela (unos 300 g/m²) es mucho mayor que el de un folio (80 g/m²)."],
    ["b", "Nombra tres tipos de pincel y la huella que deja cada uno.", "Redondo (trazo fino que engorda con la presión), plano (franja recta y ancha) y abanico (textura de hierba, nubes o pelo)."],
    ["b", "¿Qué es un collage y de qué palabra viene?", "Una obra hecha pegando recortes y materiales sobre un soporte; viene del francés coller, pegar."],
    ["b", "¿Por qué una estampa sale invertida respecto a la matriz?", "Porque el papel se coloca encima de la matriz entintada y recibe la imagen como en un espejo."],
    ["b", "¿Qué es una veladura?", "Una capa de color transparente aplicada sobre otra ya seca para oscurecerla o mezclar colores ópticamente."],
    ["b", "¿Qué técnica usaba Matisse en sus papeles recortados?", "Recortaba papeles pintados previamente con gouache y los pegaba: una forma de collage."],
    ["b", "Escribe dos normas de seguridad para usar gubias.", "Cortar siempre hacia fuera del cuerpo y mantener la mano que sujeta la plancha detrás de la cuchilla (o usar un tope)."],
    ["b", "¿Qué tres tramas se usan para sombrear con tinta?", "Rayado (líneas paralelas), achurado (líneas cruzadas) y punteado (puntos)."],
    ["m", "Explica la diferencia entre húmedo sobre húmedo y húmedo sobre seco y di para qué usarías cada uno.", "En húmedo sobre húmedo el papel está mojado y el color se expande: fondos, cielos, niebla. En húmedo sobre seco el papel está seco y salen bordes nítidos: detalles, contornos, ramas."],
    ["m", "¿Por qué la acuarela se puede volver a disolver una vez seca y el acrílico no?", "Porque el aglutinante de la acuarela (goma arábiga) es soluble en agua siempre; la resina acrílica, al secarse, forma una película plástica que ya no se disuelve."],
    ["m", "Explica cómo funciona la reserva con cera y propón un tema para usarla.", "La cera es grasa y repele el agua, así que la acuarela no se queda encima y el dibujo de cera aparece. Sirve, por ejemplo, para una noche con estrellas o una tela de araña blanca."],
    ["m", "¿Qué es la imprimación y por qué se aplica antes de pintar al óleo?", "Una capa (normalmente gesso) que sella el soporte; evita que el aceite empape la tela o la madera y hace que la pintura agarre."],
    ["m", "¿Por qué los frescos duran siglos? ¿Qué dificultad tiene la técnica?", "Porque el pigmento queda atrapado en la cal al secarse y forma parte del muro. La dificultad es que hay que pintar rápido, por jornadas, mientras el enlucido está húmedo, y casi no se puede corregir."],
    ["m", "Un dibujo a carboncillo se emborrona al guardarlo en la carpeta. ¿Qué ha faltado y cómo se evita?", "Ha faltado fijarlo: el polvo de carbón se desprende. Se evita con un fijador en spray aplicado al aire libre y guardándolo con un papel protector encima."],
    ["m", "Diferencia entre muralismo autorizado y pintada vandálica. ¿Por qué importa?", "El muralismo autorizado tiene permiso del propietario y suele implicar al barrio; la pintada sin permiso daña bienes ajenos y es una infracción. Importa por respeto a la propiedad y a la convivencia."],
    ["m", "Haz una tabla con aglutinante y disolvente de la acuarela, el acrílico y el óleo.", "Acuarela: goma arábiga / agua. Acrílico: resina acrílica / agua (mientras está fresco). Óleo: aceite de linaza / aguarrás o esencia de trementina."],
    ["m", "¿Qué significa la anotación 3/20 bajo un grabado? ¿Qué otras anotaciones lleva?", "Que es la copia 3 de una tirada de 20. Suele llevar también el título y la firma del artista, a lápiz."],
    ["m", "Propón dos ventajas de la pintura digital y dos razones para seguir aprendiendo técnicas tradicionales.", "Ventajas digitales: capas y deshacer; copias infinitas y compartir. Razones tradicionales: entender cómo se mezclan los pigmentos reales y conseguir texturas y obras únicas."],
    ["m", "Ordena los pasos de un linograbado: entintar, dibujar en el linóleo, estampar con el baren o la prensa, tallar con gubias, numerar.", "Dibujar, tallar, entintar con rodillo, estampar y numerar."],
    ["m", "¿Qué diferencia hay entre monotipo y grabado?", "En el monotipo se pinta sobre una superficie lisa y solo sale una copia buena; en el grabado la matriz se talla y permite muchas copias iguales."],
    ["m", "Un compañero quiere pintar un póster con colores planos e intensos y presupuesto bajo. ¿Qué técnica le recomiendas?", "Témpera sobre cartulina: es opaca, da colores planos e intensos y es barata. Con pincel plano para los fondos."],
    ["m", "Describe dos hábitos sostenibles para el taller de plástica.", "Por ejemplo: reutilizar papel y cartón como soporte de bocetos y dejar reposar el agua de los pinceles para no tirar pigmento al desagüe."],
    ["a", "Diseña un muestrario de técnicas en 6 casillas: indica en cada una la técnica, el soporte y el efecto que buscas.", "Respuesta abierta. Ejemplo: 1) grafito 2H-6B en papel de dibujo, escala de valores; 2) carboncillo en papel verjurado, mancha; 3) acuarela húmedo sobre húmedo en papel 300 g, cielo; 4) témpera en cartulina, color plano; 5) tinta con plumilla, tramas; 6) reserva con cera y acuarela, efecto de luz."],
    ["a", "Un mural de 4 × 3 m se hará a partir de un boceto de 20 × 15 cm. Calcula la escala y el tamaño de los cuadros si el boceto se divide en cuadros de 2,5 cm.", "La escala es 400/20 = 20. Cada cuadro de 2,5 cm del boceto mide 2,5 × 20 = 50 cm en el muro. Habrá 8 × 6 cuadros."],
    ["a", "Compara el óleo y el acrílico en tiempo de secado, limpieza, posibilidad de fundir colores y toxicidad. ¿Cuál elegirías para clase y por qué?", "El óleo seca lento (días), permite fundir colores, se limpia con aguarrás y necesita ventilación. El acrílico seca en minutos, se limpia con agua y es menos tóxico. Para clase conviene el acrílico, por limpieza y seguridad."],
    ["a", "Analiza un fotomontaje de Hannah Höch o John Heartfield: qué fragmentos combina y qué mensaje crea con ellos.", "Respuesta abierta. Debe identificar los fragmentos (rostros, máquinas, textos…), explicar el contraste entre ellos y el mensaje crítico, por ejemplo contra la guerra o el poder."],
    ["a", "Escribe el texto «ARTE» como debe tallarse en una matriz de linóleo para que se lea bien en la estampa.", "Debe tallarse en espejo: las letras en orden inverso (E, T, R, A de izquierda a derecha) y cada una invertida horizontalmente."],
    ["a", "Explica por qué la acuarela se trabaja de claro a oscuro y el óleo puede trabajarse de oscuro a claro.", "La acuarela es transparente: un color claro no tapa uno oscuro y el blanco es el papel. El óleo es opaco y se pueden superponer luces claras sobre fondos oscuros."],
    ["a", "Propón una obra de collage o ensamblaje con residuos sobre el consumo. Indica materiales, soporte, adhesivo, composición y título.", "Respuesta abierta. Ejemplo: envases y etiquetas de comida rápida sobre cartón de embalaje imprimado, pegados con cola blanca, formando un mapa del mundo; título «Lo que tiramos»."],
    ["a", "Un museo quiere restaurar un fresco con una grieta. ¿Por qué no se puede repintar sin más con témpera moderna?", "Porque el fresco tiene el pigmento integrado en la cal; una capa superficial de témpera se comportaría distinto, envejecería mal y alteraría el original. La restauración usa materiales compatibles, reversibles y distinguibles."],
    ["a", "Planifica un cuaderno de viaje de una salida escolar combinando dos técnicas. Justifica la elección.", "Respuesta abierta. Ejemplo: rotulador calibrado para la línea (rápido, resistente al agua) y acuarela de viaje para la mancha (ligera y rápida). Se justifica por portabilidad y rapidez."],
  ],
  quiz: [
    ["¿Cuál de estas técnicas es seca?", ["Acuarela", "Carboncillo", "Acrílico", "Gouache"], 1, "El carboncillo se aplica directamente, sin agua."],
    ["Un lápiz 6B es…", ["duro y claro", "blando y oscuro", "de color", "solo para escribir"], 1, "B viene de black: blando y oscuro."],
    ["¿Qué técnica húmeda es transparente?", ["Témpera", "Acuarela", "Gouache", "Acrílico espeso"], 1, "La acuarela deja ver el papel y lo que hay debajo."],
    ["El aglutinante del óleo es…", ["goma arábiga", "aceite de linaza", "resina acrílica", "agua"], 1, "Por eso seca lento y se limpia con aguarrás."],
    ["En acuarela, las zonas blancas se consiguen…", ["con témpera blanca", "reservando el papel", "con lejía", "con tiza"], 1, "Se deja el papel sin pintar o se enmascara."],
    ["La técnica de cera más acuarela se basa en que…", ["la cera absorbe el agua", "la cera repele el agua", "la cera se disuelve", "la acuarela es grasa"], 1, "La cera es grasa y el agua resbala sobre ella."],
    ["El gramaje del papel indica…", ["su color", "su peso en g/m²", "su tamaño", "su precio"], 1, "Más gramaje, papel más grueso."],
    ["La imprimación sirve para…", ["borrar", "sellar el soporte para que agarre la pintura", "dar brillo al final", "diluir el óleo"], 1, "Suele hacerse con gesso."],
    ["¿Qué técnica pega recortes sobre un soporte?", ["Grabado", "Fresco", "Collage", "Aguada"], 2, "Del francés coller, pegar."],
    ["El fotomontaje fue muy usado por…", ["los impresionistas", "los dadaístas como Hannah Höch", "los pintores góticos", "los muralistas romanos"], 1, "Combinaban fotografías con intención crítica."],
    ["En la estampación, la imagen sale…", ["igual que en la matriz", "invertida", "más grande", "en color siempre"], 1, "Como en un espejo."],
    ["La xilografía es un grabado…", ["en hueco sobre metal", "en relieve sobre madera", "plano sobre piedra", "con malla"], 1, "Se tinta lo que sobresale."],
    ["La serigrafía, popularizada por Warhol, usa…", ["una piedra", "una malla de tela", "una plancha de cobre", "madera"], 1, "Es una técnica permeográfica."],
    ["El monotipo permite…", ["muchas copias iguales", "una sola copia buena", "copias en 3D", "solo dibujos a lápiz"], 1, "Por eso se llama mono-tipo."],
    ["El achurado consiste en…", ["puntos", "líneas cruzadas", "manchas de agua", "rascar cera"], 1, "Es una trama de líneas que se cruzan."],
    ["La aguada es…", ["tinta diluida en agua", "pintura al aceite", "cera derretida", "un tipo de papel"], 0, "Da grises transparentes en un solo color."],
    ["En el fresco, el pigmento se aplica sobre…", ["madera seca", "cal húmeda", "lienzo imprimado", "papel"], 1, "Al secar, la cal atrapa el color."],
    ["Para ampliar un boceto a un muro se usa…", ["una cuadrícula", "un fijador", "una gubia", "un baren"], 0, "Cada cuadro del boceto se copia en su cuadro del muro."],
    ["Al usar gubias hay que cortar…", ["hacia la otra mano", "hacia fuera del cuerpo", "sin sujetar la plancha", "con la plancha en el aire"], 1, "Así se evitan cortes."],
    ["¿Qué NO debe tirarse por el desagüe?", ["agua limpia", "aguarrás usado", "agua con jabón", "agua de lavarse las manos"], 1, "Los disolventes contaminan: se llevan a un punto limpio."],
  ],
  examen: [
    ["El aglutinante sirve para…", ["unir el pigmento y fijarlo al soporte", "limpiar los pinceles", "dar brillo al papel", "secar más rápido"], 0, "Mantiene unido el pigmento."],
    ["Si pintas con cera y luego con acuarela encima…", ["la cera repele el agua", "la cera se disuelve", "no se ve nada", "el papel se rompe"], 0, "Es una técnica de reserva."],
    ["¿Qué pintura seca más despacio y permite fundir colores sobre el lienzo?", ["Acrílico", "Óleo", "Témpera", "Acuarela"], 1, "Se basa en aceite."],
    ["Los Caprichos de Goya son grabados…", ["en hueco (aguafuerte)", "en relieve", "en serigrafía", "litografías"], 0, "Sobre plancha de metal mordida con ácido."],
    ["Para un dibujo que se va a fotocopiar conviene…", ["lápiz 2H muy suave", "tinta con tramas", "acuarela muy diluida", "pastel"], 1, "Los negros puros se reproducen bien."],
    ["Un papel de 300 g/m² es adecuado para…", ["acuarela", "fotocopias", "papel de seda", "envolver"], 0, "No se ondula con el agua."],
    ["El esgrafiado consiste en…", ["rascar una capa para descubrir la de debajo", "pegar fotos", "pintar con aerosol", "imprimar"], 0, "Se usa con ceras o en muros."],
    ["¿Qué ventaja tiene trabajar por capas en digital?", ["Modificar una parte sin tocar el resto", "No hace falta dibujar", "La obra es única", "No gasta batería"], 0, "Cada elemento se edita por separado."],
  ],
  tarjetas: [
    ["Fresco", "Pintura con pigmento en agua sobre cal húmeda; al secar, el color queda en el muro."],
    ["Achurado", "Trama de líneas cruzadas para sombrear con tinta."],
    ["Imprimación", "Capa (gesso) que sella el soporte antes de pintar."],
    ["Monotipo", "Estampa única hecha pintando sobre una superficie lisa."],
  ],
  glosario: [
    ["Aglutinante", "Sustancia que une el pigmento y lo fija al soporte (goma arábiga, aceite, resina)."],
    ["Aguada", "Tinta o acuarela de un solo color diluida en agua para conseguir grises."],
    ["Achurado", "Sombreado con líneas cruzadas."],
    ["Collage", "Obra hecha pegando recortes y materiales sobre un soporte."],
    ["Ensamblaje", "Collage en tres dimensiones con objetos reales."],
    ["Esgrafiado", "Técnica que rasca una capa superior para descubrir la inferior."],
    ["Fijador", "Spray que protege el carboncillo o el pastel para que no se desprenda."],
    ["Fresco", "Pintura mural sobre enlucido de cal húmedo."],
    ["Gramaje", "Peso del papel en gramos por metro cuadrado."],
    ["Gubia", "Herramienta de corte para tallar madera o linóleo."],
    ["Imprimación", "Capa preparatoria que sella el soporte."],
    ["Matriz", "Plancha de la que se obtienen las copias en el grabado."],
    ["Pigmento", "Polvo que da el color a la pintura."],
    ["Reserva", "Zona que se protege para que no reciba color."],
    ["Soporte", "Superficie sobre la que se realiza la obra."],
    ["Veladura", "Capa transparente de color sobre otra seca."],
  ],
  situacion: {
    titulo: "Muestrario de técnicas para la biblioteca",
    reto: "La biblioteca del instituto quiere una carpeta de consulta para que cualquier alumno pueda ver cómo es cada técnica antes de elegirla para un trabajo. Vuestro grupo debe crear un muestrario con fichas reales y una estampa de portada.",
    pasos: ["Repartid las técnicas: dos secas, dos húmedas, una mixta y una de estampación.", "Cada persona prueba su técnica en un formato A5 sobre el soporte adecuado y anota materiales y pasos.", "Escribid una ficha por técnica: nombre, materiales, soporte, procedimiento, efecto y un consejo de seguridad.", "Diseñad y tallad un sello o linograbado para la portada y estampad una tirada numerada.", "Montad la carpeta y presentadla a otra clase en 3 minutos."],
    producto: "Carpeta de muestrario con 6 fichas ilustradas y una portada estampada.",
    evaluacion: ["Uso correcto de la técnica y del soporte en cada ficha.", "Claridad y exactitud de las explicaciones (vocabulario del tema).", "Calidad y numeración de la estampa de portada.", "Seguridad, limpieza y aprovechamiento de materiales en el taller."],
  },
  familias: ["Haced juntos un sello con una patata o una goma de borrar y estampad tarjetas o papel de regalo.", "Buscad en casa materiales para un collage: revistas, telas, envoltorios, billetes usados.", "Visitad un museo o buscad en línea los papeles recortados de Matisse y comentad qué os transmiten.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: { saberes: "Técnicas, materiales y soportes: técnicas secas, húmedas y mixtas, estampación, pintura mural, técnicas digitales, seguridad e higiene en el taller y sostenibilidad (RD 217/2022, Expresión Artística 4º ESO; currículo de Cataluña, Decret 175/2022).", ideas: ["Muestrario de técnicas en una carpeta de 6-8 fichas (situación de aprendizaje).", "Linograbado o sellos de goma EVA para una tirada de postales numerada.", "Collage colectivo con material reciclado y debate sobre consumo.", "Pequeño mural con cuadrícula a escala en un panel de madera."] },
  fuentes: [{ t: "Museo Nacional del Prado: técnicas artísticas (glosario)", url: "https://www.museodelprado.es/aprende/enciclopedia" }, { t: "Calcografía Nacional (Real Academia de Bellas Artes de San Fernando)", url: "https://www.realacademiabellasartessanfernando.com/es/calcografia-nacional" }],
};
