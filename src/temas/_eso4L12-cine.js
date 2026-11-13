// Nivel libro: Cine y audiovisual (Expresión Artística 4º ESO).
const { filas, cadena, vs, rejilla, escala, barras, linea, tabla, marco } = require("./_eso4L12");

module.exports = {
  minutos: 115,
  revisado: "2026-11-13",
  video: { id: "ITwWClZdfBo", titulo: "Planos y movimientos de cámara", canal: "JuanPedroTV", vistas: 827422, megusta: 0, busqueda: "planos y movimientos de cámara" },
  objetivos: ["Conocer las técnicas de animación y la dirección de arte", "Usar la luz y el sonido como herramientas narrativas"],
  claves: ["animación", "foley", "dirección de arte", "iluminación de tres puntos"],
  lectura: {
    titulo: "El público que huyó de un tren",
    html: `<p>Cuenta la leyenda que, en 1896, cuando los hermanos Lumière proyectaron <i>La llegada de un tren a la estación de La Ciotat</i>, algunos espectadores se levantaron asustados de sus asientos al ver la locomotora avanzando hacia ellos. Probablemente es una exageración, pero refleja algo real: <b>nadie había visto nunca imágenes que se movieran</b>. Aquella película de menos de un minuto, en blanco y negro y sin sonido, era magia.</p><p>Hoy vemos horas de imágenes en movimiento cada día: series, tráileres, anuncios, vídeos cortos, retransmisiones en directo. Estamos tan acostumbrados que olvidamos que todo eso está <mark>construido con un lenguaje</mark>: alguien ha decidido dónde poner la cámara, cuánto dura cada plano, qué música suena y qué se queda fuera. Ese lenguaje se puede aprender a leer, para no dejarnos manipular, y a escribir, para contar nuestras propias historias. En este tema verás cómo se pasa de la imagen fija al movimiento, cómo se planifica una producción con guion y storyboard, cómo la luz, el sonido y el montaje crean emociones, y cómo funciona la animación. Al final tendrás las herramientas para rodar tu propio cortometraje con un móvil.</p>`,
  },
  partes: ["Escalas de plano y ángulos", "Las fases de una producción", "El montaje y el sonido", "La animación"],
  mas: {
    "De la imagen fija a la imagen en movimiento": `<p>¿Por qué vemos movimiento donde solo hay imágenes fijas? Porque el cerebro rellena los huecos entre una imagen y la siguiente cuando se suceden muy deprisa: es el llamado <b>efecto phi</b>, unido a la persistencia de la imagen en la retina. Antes del cine existieron juguetes ópticos que lo aprovechaban, como el <b>taumatropo</b> (un disco con un dibujo en cada cara que, al girar, se funden) o el <b>zoótropo</b> (un tambor con ranuras y dibujos en su interior). Hoy el vídeo digital suele grabarse a 24, 25, 30 o 60 fotogramas por segundo.</p>`,
    "Breve historia del cine": `<p>No hay que olvidar a las pioneras: Alice Guy fue, en 1896, una de las primeras personas en dirigir una película de ficción, y dirigió cientos de cortos. En España, Elena Jordi dirigió en 1918 la primera película hecha por una mujer en el país, y hoy directoras como Icíar Bollaín, Carla Simón o Isabel Coixet ganan premios internacionales.</p>`,
    "Movimientos de cámara": `<p>Otros movimientos frecuentes son la <b>grúa</b> (la cámara sube o baja, a menudo para abrir o cerrar una película), el <b>steadicam</b> o estabilizador (permite seguir a un personaje por pasillos y escaleras con suavidad) y los planos con <b>dron</b>, que antes solo podían hacerse desde un helicóptero. Un movimiento debe tener una razón: seguir una acción, descubrir algo o expresar una emoción. Mover la cámara porque sí distrae al espectador.</p>`,
    "Las fases de una producción": `<p>En una producción trabajan muchos oficios: el <b>director</b> o directora decide cómo se cuenta la historia; el <b>productor</b> consigue el dinero y organiza los recursos; el <b>director de fotografía</b> se ocupa de la luz y la cámara; el <b>montador</b> ordena los planos; el equipo de <b>sonido</b> graba y mezcla; y el de <b>arte</b> crea los decorados, el vestuario y el maquillaje. En un corto escolar, cada miembro del grupo puede asumir uno de estos papeles.</p>`,
    "Guion y storyboard": `<p>El storyboard no tiene que estar bien dibujado: bastan figuras esquemáticas, flechas para indicar movimientos y anotaciones sobre el sonido y la duración. Lo importante es que todo el equipo entienda qué plano hay que grabar. En animación y en publicidad se suele hacer además un <b>animatic</b>: las viñetas del storyboard montadas en vídeo con una pista de sonido provisional, para comprobar el ritmo antes de producir.</p>`,
    "El montaje y el sonido": `<p>El sonido de una película tiene cuatro componentes: los <b>diálogos</b>, los <b>efectos</b> (pasos, puertas, coches), el <b>ambiente</b> (el rumor de una ciudad, el viento) y la <b>música</b>. Todos se graban y se mezclan por separado. El <b>silencio</b> también es un recurso: un corte brusco del sonido puede ser más impactante que una explosión.</p>`,
  },
  svgs: {
    "Breve historia del cine": linea("Hitos de la historia del cine", [["1895", "Lumière: primera proyección", "var(--hl-ink)"], ["1902", "Méliès: Viaje a la Luna", "var(--red)"], ["1927", "llega el cine sonoro", "var(--sun)"], ["1929", "Buñuel y Dalí: Un perro andaluz", "var(--leaf)"], ["hoy", "plataformas y vídeo corto", "var(--pen)"]]),
    "Escalas de plano y ángulos": marco("Escalas de plano de una persona: general, medio, primer plano y detalle", `
        ${[["general", 0], ["medio", 1], ["primer", 2], ["detalle", 3]].map(([n, i]) => {
          const x = 14 + i * 60, s = [0.45, 1, 1.9, 4][i];
          return `<rect x="${x}" y="30" width="54" height="96" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><clipPath id="cp-pl${i}"><rect x="${x}" y="30" width="54" height="96"/></clipPath>
          <g clip-path="url(#cp-pl${i})"><g transform="translate(${x + 27} ${i === 0 ? 50 : i === 1 ? 50 : i === 2 ? 64 : 70}) scale(${s})"><circle cx="0" cy="0" r="10" fill="var(--sun)"/><circle cx="-3.5" cy="-1" r="1.4" fill="var(--ink)"/><circle cx="3.5" cy="-1" r="1.4" fill="var(--ink)"/><path d="M-12 14 L 12 14 L 16 60 L -16 60 Z" fill="var(--pen)"/></g></g>
          <text x="${x + 27}" y="146" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">${n}</text>`;
        }).join("")}
        <text x="130" y="170" text-anchor="middle" font-size="11" fill="var(--muted)">cuanto más cerca, más emoción</text>`),
    "Cómo se escribe un guion": marco("Fragmento de guion literario con encabezado, acción y diálogo", `
        <rect x="30" y="12" width="200" height="156" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        <g font-family="Courier New, monospace" font-size="11"><text x="44" y="36" font-weight="700" fill="var(--ink)">INT. COCINA – NOCHE</text>
        <text x="44" y="60" fill="var(--ink)">Lucía abre la nevera.</text><text x="44" y="76" fill="var(--ink)">Está vacía.</text>
        <text x="130" y="104" text-anchor="middle" font-weight="700" fill="var(--pen)">LUCÍA</text><text x="130" y="122" text-anchor="middle" fill="var(--ink)">Otra vez no…</text></g>
        <g font-size="10" font-weight="700" fill="var(--red)"><text x="234" y="36" text-anchor="end">encabezado</text></g>
        <text x="130" y="154" text-anchor="middle" font-size="10.5" fill="var(--muted)">1 página ≈ 1 minuto</text>`),
    "Recursos del montaje": rejilla("Recursos de montaje: corte, fundido, encadenado, plano-contraplano, paralelo y flashback", [["Corte", "paso directo", "var(--ink)"], ["Fundido", "final o salto", "var(--muted)"], ["Encadenado", "mezcla dos planos", "var(--pen)"], ["Plano-contraplano", "diálogos", "var(--leaf)"], ["Paralelo", "dos acciones", "var(--red)"], ["Flashback", "salto al pasado", "var(--sun)"]]),
    "Del corto a las redes": vs("Cine frente a vídeo corto en redes", ["Cine", ["horizontal ancho", "ritmo pausado", "sala, sonido", "historia larga"], "var(--hl-ink)"], ["Redes", ["vertical 9:16", "gancho en 3 s", "subtítulos", "segundos o minutos"], "var(--red)"]),
  },
  nuevos: [
    {
      tras: "Movimientos de cámara",
      html: `<h3>La luz en el audiovisual</h3><p>La iluminación no solo sirve para que se vea la imagen: crea <b>ambientes</b> y dirige la mirada. El esquema básico de los profesionales es la <b>iluminación de tres puntos</b>. La <b>luz principal</b> (o clave) es la más intensa y define las sombras; se coloca a unos 45° del personaje. La <b>luz de relleno</b>, más suave y al otro lado, aclara las sombras que deja la principal. Y el <b>contraluz</b>, detrás del personaje, dibuja un borde luminoso que lo separa del fondo.</p><p>Según cómo se equilibren, hablamos de <b>clave alta</b> (mucha luz, pocas sombras, típica de comedias y anuncios: transmite alegría y optimismo) o <b>clave baja</b> (mucha sombra y contraste, típica del cine negro y del terror: transmite misterio y tensión). El color de la luz también narra: tonos cálidos para escenas íntimas o del pasado, tonos fríos para la noche, la soledad o el peligro. En casa se puede improvisar un esquema de tres puntos con una ventana, una lámpara y un reflector hecho con cartón y papel de aluminio.</p>`,
      svg: marco("Iluminación de tres puntos vista desde arriba: principal, relleno y contraluz", `
        <circle cx="130" cy="90" r="16" fill="var(--sun)"/><text x="130" y="94" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">actor</text>
        <rect x="118" y="148" width="24" height="16" rx="3" fill="var(--ink)"/><text x="150" y="160" font-size="10.5" font-weight="700" fill="var(--ink)">cámara</text>
        <g stroke-width="2"><path d="M54 140 L 116 100" stroke="var(--red)"/><path d="M212 140 L 144 100" stroke="var(--pen)" stroke-dasharray="4 3"/><path d="M130 22 L 130 72" stroke="var(--leaf)"/></g>
        <circle cx="48" cy="146" r="10" fill="var(--red)"/><circle cx="218" cy="146" r="10" fill="var(--pen)"/><circle cx="130" cy="16" r="9" fill="var(--leaf)"/>
        <g font-size="11" font-weight="700"><text x="20" y="124" fill="var(--red)">principal</text><text x="240" y="124" text-anchor="end" fill="var(--pen)">relleno</text><text x="144" y="34" fill="var(--leaf)">contraluz</text></g>`),
    },
    {
      tras: "Guion y storyboard",
      html: `<h3>La dirección de arte</h3><p>Todo lo que aparece delante de la cámara ha sido elegido: es la <b>puesta en escena</b>, de la que se ocupa el equipo de dirección de arte. Incluye el <b>decorado</b> o la localización, el <b>atrezo</b> (los objetos), el <b>vestuario</b>, el <b>maquillaje</b> y la <b>paleta de color</b> de la película. Un buen decorado cuenta cosas del personaje sin necesidad de palabras: una habitación llena de trofeos polvorientos o una mesa con platos sin fregar dicen mucho.</p><p>Muchos directores definen una <mark>paleta de color</mark> para cada película o para cada parte de la historia. Wes Anderson es famoso por sus composiciones simétricas y sus colores pastel; en otras películas, el paso de colores cálidos a fríos marca el cambio de estado de ánimo del protagonista. En un cortometraje escolar se puede trabajar la dirección de arte con pocos medios: elegir dos o tres colores dominantes para el vestuario y los objetos, cuidar que el fondo no tenga elementos que distraigan y pensar qué objetos ayudan a contar la historia.</p>`,
      svg: rejilla("Elementos de la dirección de arte", [["Decorado", "dónde ocurre", "var(--hl-ink)"], ["Atrezo", "objetos que cuentan", "var(--leaf)"], ["Vestuario", "quién es el personaje", "var(--red)"], ["Paleta", "colores dominantes", "var(--pen)"]]),
    },
    {
      tras: "Recursos del montaje",
      html: `<h3>Crear el sonido: foley, banda sonora y mezcla</h3><p>Gran parte de los sonidos que oímos en una película no se grabaron durante el rodaje: se crean después en un estudio. Los artistas de <b>foley</b>, llamados así por Jack Foley, un técnico de Hollywood de los años 20, recrean pasos, roces de ropa, puñetazos o lluvia con objetos cotidianos mientras ven la imagen. Unos guantes de cuero agitados suenan como alas de pájaro; apio partido, como huesos que se rompen; y papel de celofán arrugado, como fuego.</p><p>La música puede ser <b>diegética</b> (la oyen los personajes porque suena dentro de la historia, como una radio) o <b>extradiegética</b> (solo la oye el público, como la banda sonora). En la <b>mezcla</b> final se ajusta el volumen de todas las pistas para que los diálogos se entiendan siempre. Al grabar con un móvil, el sonido es lo primero que delata a un aficionado: conviene acercar el micrófono a quien habla, evitar lugares con eco o ruido de fondo y grabar unos segundos de ambiente para usarlos en el montaje.</p>`,
      svg: filas("Trucos de foley: objetos que imitan sonidos", [["Guantes de cuero", "alas de pájaro", "var(--hl-ink)"], ["Apio que se parte", "huesos rotos", "var(--leaf)"], ["Celofán arrugado", "fuego que crepita", "var(--red)"], ["Cocos huecos", "cascos de caballo", "var(--pen)"]]),
    },
    {
      tras: "Del corto a las redes",
      html: `<h3>La animación</h3><p>La animación crea la ilusión de movimiento fotograma a fotograma. En la <b>animación tradicional</b> o 2D se dibuja cada fase del movimiento: los animadores principales dibujan los <b>fotogramas clave</b> (las posiciones extremas) y otros dibujan los <b>intermedios</b>. Así se hicieron los clásicos de Disney y las películas de Studio Ghibli. En el <b>stop motion</b> se fotografían muñecos de plastilina o figuras articuladas, moviéndolos un poco entre foto y foto, como en <i>Wallace y Gromit</i>; a 12 fotos por segundo, un minuto necesita 720 fotos.</p><p>La <b>animación 3D</b> por ordenador construye modelos virtuales con un esqueleto que se mueve; <i>Toy Story</i> (1995) fue el primer largometraje hecho así por completo. Los animadores siguen unos principios clásicos, como <b>estirar y encoger</b> (una pelota se aplasta al botar), la <b>anticipación</b> (antes de saltar, el personaje se agacha) o la <b>exageración</b>. España tiene una animación muy premiada, con películas como <i>Klaus</i> o <i>Robot Dreams</i>. Con una app de stop motion y un móvil en un soporte fijo se puede hacer una animación en clase.</p>`,
      svg: marco("Pelota que bota: se estira al caer y se aplasta al tocar el suelo", `
        <path d="M14 150 H 246" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M30 30 Q 70 -10 110 150 Q 150 40 190 150" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 4"/>
        <circle cx="34" cy="34" r="12" fill="var(--red)"/><ellipse cx="88" cy="90" rx="9" ry="15" fill="var(--red)"/><ellipse cx="110" cy="142" rx="17" ry="8" fill="var(--red)"/>
        <ellipse cx="132" cy="96" rx="9" ry="14" fill="var(--red)"/><circle cx="150" cy="58" r="12" fill="var(--red)"/>
        <g font-size="11" font-weight="700"><text x="60" y="124" fill="var(--ink)">estira</text><text x="110" y="170" text-anchor="middle" fill="var(--ink)">aplasta</text><text x="196" y="80" fill="var(--muted)">12 fotos/s</text></g>`),
    },
  ],
  ejemplos: [
    ["Quieres que el público sienta que un personaje es poderoso y amenazante. ¿Qué plano y ángulo usas?", ["El contrapicado engrandece al personaje.", "Un plano medio o primer plano muestra su gesto.", "Una iluminación en clave baja y una música grave refuerzan la sensación."], "Contrapicado en plano medio o primer plano, con clave baja."],
    ["Escribe el encabezado de una escena en el patio del instituto por la mañana.", ["Indica si es interior o exterior.", "Indica el lugar.", "Indica el momento del día."], "EXT. PATIO DEL INSTITUTO – DÍA."],
    ["Dos personas hablan sentadas a una mesa. ¿Cómo lo rodarías?", ["Un plano general para situar el espacio.", "Plano-contraplano de cada uno al hablar.", "Respetar la regla de los 180 grados."], "Plano general de situación y plano-contraplano sin cruzar el eje."],
    ["Vas a hacer un stop motion de 20 segundos a 12 fotogramas por segundo. ¿Cuántas fotos necesitas?", ["Fotos = segundos × fotogramas por segundo.", "20 × 12 = 240."], "240 fotografías."],
    ["Necesitas el sonido de una persona caminando sobre nieve, pero grabas en verano. ¿Qué haces?", ["Es un caso de foley.", "Se puede apretar una bolsa de almidón de maíz o de sal gruesa al ritmo de los pasos.", "Se graba mirando la imagen y se sincroniza en el montaje."], "Recrearlo con foley (por ejemplo, almidón en una bolsa) y sincronizarlo."],
    ["Diseña la iluminación de una escena de miedo en una habitación con una sola lámpara.", ["Clave baja: mucha sombra y contraste.", "La lámpara como luz principal desde un lado o desde abajo, que deforma el rostro.", "Sin relleno, o muy poco, para que las sombras sean profundas.", "Un contraluz débil para separar la silueta del fondo."], "Clave baja con una principal lateral o baja, sin apenas relleno y un contraluz suave."],
  ],
  errores: [
    "Confundir zoom con travelling: el zoom no mueve la cámara.",
    "Cruzar el eje de 180 grados y desorientar al espectador.",
    "Escribir en el guion pensamientos que no se ven ni se oyen.",
    "Empezar a grabar sin storyboard ni plan de rodaje.",
    "Olvidar el sonido: un audio malo estropea una buena imagen.",
    "Mover la cámara sin motivo o grabar en vertical un contenido pensado para pantalla horizontal.",
  ],
  ejercicios: [
    ["b", "¿Cuántos fotogramas por segundo usa el cine tradicional?", "24 fotogramas por segundo."],
    ["b", "Define plano, escena y secuencia.", "Plano: lo que se graba sin cortar. Escena: unidad de lugar y tiempo. Secuencia: conjunto de escenas que forman una unidad de la historia."],
    ["b", "¿Quiénes hicieron la primera proyección pública de cine y cuándo?", "Los hermanos Lumière, el 28 de diciembre de 1895, en París."],
    ["b", "Ordena de más abierto a más cerrado: primer plano, plano general, plano detalle, plano medio.", "Plano general, plano medio, primer plano, plano detalle."],
    ["b", "Diferencia entre panorámica y travelling.", "En la panorámica la cámara gira sobre su eje sin desplazarse; en el travelling la cámara se desplaza."],
    ["b", "Nombra las tres fases de una producción audiovisual.", "Preproducción, producción (rodaje) y postproducción."],
    ["b", "¿Qué es un storyboard?", "Una secuencia de viñetas, una por plano, con anotaciones, que planifica cómo se rodará la película."],
    ["b", "¿Qué indica el encabezado «INT. COCINA – NOCHE»?", "Que la escena es en interior, en una cocina y de noche."],
    ["b", "¿Qué es el foley?", "La creación en estudio de efectos de sonido con objetos, sincronizados con la imagen."],
    ["b", "Nombra los tres puntos de la iluminación de tres puntos.", "Luz principal, luz de relleno y contraluz."],
    ["b", "¿Qué es el stop motion?", "Una técnica de animación que fotografía objetos o muñecos moviéndolos un poco entre foto y foto."],
    ["b", "¿Qué expresa un plano holandés?", "Inquietud, desequilibrio o tensión."],
    ["m", "Explica el efecto Kuleshov con un ejemplo.", "El significado de un plano cambia según el que va al lado: el mismo rostro neutro parece hambriento junto a un plato de sopa y triste junto a un ataúd."],
    ["m", "¿Qué es la regla de los 180 grados y qué pasa si se rompe?", "Mantener la cámara a un mismo lado de la línea imaginaria entre los personajes; si se cruza, parece que cambian de sitio y el espectador se desorienta."],
    ["m", "Diferencia entre música diegética y extradiegética, con un ejemplo.", "Diegética: la oyen los personajes (una canción que suena en la radio del coche). Extradiegética: solo la oye el público (la banda sonora de una persecución)."],
    ["m", "¿Qué diferencia hay entre clave alta y clave baja? ¿Qué géneros las usan?", "Clave alta: mucha luz y pocas sombras (comedias, anuncios). Clave baja: mucha sombra y contraste (cine negro, terror)."],
    ["m", "¿Cuántas fotos hacen falta para 45 segundos de stop motion a 12 fps?", "45 × 12 = 540 fotos."],
    ["m", "Explica los principios de animación «estirar y encoger» y «anticipación».", "Estirar y encoger: los cuerpos se deforman con el movimiento (la pelota se aplasta al botar). Anticipación: un movimiento previo prepara la acción (agacharse antes de saltar)."],
    ["m", "¿Qué incluye la dirección de arte? ¿Qué puede contar un decorado?", "Decorados, atrezo, vestuario, maquillaje y paleta de color. Un decorado puede revelar la personalidad, la situación económica o el estado de ánimo del personaje."],
    ["m", "Escribe una escena de guion de media página con encabezado, acción y un diálogo.", "Respuesta abierta. Debe tener encabezado (INT./EXT., lugar, momento), acción en presente que describa solo lo que se ve y se oye, y el nombre del personaje en mayúsculas antes de su diálogo."],
    ["m", "¿Qué hacía Méliès y por qué es importante?", "Introdujo trucos (desapariciones, sobreimpresiones) y la fantasía en el cine, como en Viaje a la Luna (1902); es el padre de los efectos especiales."],
    ["m", "¿Por qué los vídeos cortos de redes suelen llevar subtítulos?", "Porque muchas personas los ven sin sonido y porque ayudan a captar la atención y a la accesibilidad."],
    ["m", "¿Qué cuatro componentes tiene el sonido de una película?", "Diálogos, efectos, ambiente y música (y el silencio como recurso)."],
    ["m", "¿Qué es un animatic y para qué sirve?", "Las viñetas del storyboard montadas en vídeo con sonido provisional; sirve para comprobar el ritmo antes de producir."],
    ["a", "Haz el guion técnico de una escena de 5 planos: alguien encuentra una carta. Indica plano, ángulo, movimiento y sonido de cada uno.", "Respuesta abierta. Ejemplo: 1) PG, normal, fijo, ambiente; 2) PM, normal, travelling de acompañamiento, pasos; 3) PD de la carta, picado, fijo, silencio; 4) PP del rostro, contrapicado suave, zoom lento, música; 5) PG, cenital, grúa que sube, música crece."],
    ["a", "Analiza los primeros 10 segundos de un anuncio: número de planos, tipos, música y mensaje.", "Respuesta abierta: contar los cortes, identificar planos y ángulos, describir música y sonido y relacionarlos con lo que quiere vender."],
    ["a", "Diseña un esquema de tres puntos para entrevistar a una persona en clase con materiales caseros.", "Ventana o lámpara como principal a 45°, cartulina blanca o papel de aluminio como relleno al otro lado, y una lámpara pequeña detrás como contraluz; cámara frente a la persona."],
    ["a", "Compara la animación 2D tradicional, el stop motion y el 3D: proceso, materiales y un ejemplo.", "2D: dibujos fotograma a fotograma (clásicos de Disney o Ghibli). Stop motion: muñecos fotografiados (Wallace y Gromit). 3D: modelos digitales con esqueleto (Toy Story)."],
    ["a", "Propón una lista de 5 efectos de foley para un corto de terror y cómo los crearías.", "Respuesta abierta. Ejemplo: puerta que cruje (silla de madera), pasos en grava (caja con arena), latido (golpe suave en un cojín), viento (soplar cerca del micro con la boca entreabierta), golpe sordo (puño contra un saco)."],
    ["a", "Planifica un corto de 1 minuto: idea en una frase, estructura en tres actos, reparto de oficios y plan de rodaje.", "Respuesta abierta: idea clara, planteamiento-nudo-desenlace en pocas escenas, papeles (dirección, cámara, sonido, arte, montaje) y orden de rodaje por localizaciones."],
    ["a", "Explica cómo la paleta de color puede marcar el cambio emocional de un personaje a lo largo de una película.", "Por ejemplo, empezar con colores fríos y apagados cuando está triste o aislado y pasar a cálidos y saturados cuando encuentra apoyo; el espectador lo percibe aunque no sea consciente."],
    ["a", "Un vídeo viral muestra a un político diciendo algo que nunca dijo. ¿Qué recursos de montaje o de IA podrían haberse usado y cómo lo verificarías?", "Montaje que saca frases de contexto o deepfake de voz e imagen. Se verifica buscando el vídeo original completo, medios fiables y verificadores, y observando incoherencias en labios, voz o iluminación."],
    ["a", "Transforma una escena de cine horizontal en una versión vertical para redes. ¿Qué cambia en el encuadre, el ritmo y el sonido?", "Encuadres más cerrados y centrados en las personas, primeros planos, gancho en los primeros segundos, montaje más rápido y subtítulos grandes dentro de la zona segura."],
    ["a", "Construye (o describe) un zoótropo: materiales, número de dibujos y cómo se ve el movimiento.", "Un tambor de cartulina con 12 ranuras y una tira con 12 dibujos de un ciclo de movimiento en el interior; al girarlo y mirar por las ranuras, los dibujos se suceden y parecen moverse."],
  ],
  quiz: [
    ["El cine tradicional proyecta…", ["12 fotogramas por segundo", "24 fotogramas por segundo", "60 por minuto", "1 por segundo"], 1, "Es el estándar del cine."],
    ["Lo que se graba sin cortar es…", ["una escena", "un plano", "una secuencia", "un guion"], 1, "La unidad básica."],
    ["La primera proyección pública de cine fue de…", ["Méliès", "los hermanos Lumière", "Chaplin", "Buñuel"], 1, "En 1895, en París."],
    ["El plano que muestra solo una parte pequeña (unos ojos, una mano) es el…", ["general", "medio", "detalle", "americano"], 2, "El más cerrado."],
    ["En la panorámica la cámara…", ["se desplaza", "gira sobre su eje", "sube en grúa", "no se mueve"], 1, "Sin desplazarse."],
    ["El zoom…", ["mueve la cámara", "acerca la imagen sin mover la cámara", "es un tipo de fundido", "cambia el ángulo"], 1, "Cambia la focal."],
    ["El storyboard es…", ["la música", "un cómic de la película, plano a plano", "el reparto", "el presupuesto"], 1, "Ahorra tiempo en el rodaje."],
    ["«EXT. PLAYA – DÍA» indica…", ["interior de noche", "exterior de día en una playa", "un flashback", "el título"], 1, "Encabezado de escena."],
    ["Una página de guion equivale a unos…", ["10 segundos", "1 minuto", "10 minutos", "1 hora"], 1, "Regla práctica."],
    ["El efecto Kuleshov demuestra que…", ["el color no importa", "el sentido de un plano depende de los que lo rodean", "el cine necesita sonido", "los actores improvisan"], 1, "Experimento de montaje soviético."],
    ["El plano-contraplano se usa sobre todo en…", ["persecuciones", "diálogos", "paisajes", "títulos"], 1, "Alterna los rostros."],
    ["Respetar los 180 grados evita que…", ["se acabe la batería", "parezca que los personajes cambian de sitio", "se oiga ruido", "se desenfoque"], 1, "Es la regla del eje."],
    ["La luz que separa al personaje del fondo es…", ["la principal", "el relleno", "el contraluz", "la cenital"], 2, "Dibuja un borde luminoso."],
    ["La clave baja es típica del…", ["cine negro y terror", "anuncio de detergente", "programa infantil", "telediario"], 0, "Mucha sombra y contraste."],
    ["El foley consiste en…", ["mezclar colores", "crear efectos de sonido con objetos", "dibujar el storyboard", "iluminar"], 1, "Por Jack Foley."],
    ["La música que oyen los personajes es…", ["extradiegética", "diegética", "foley", "ambiente"], 1, "Suena dentro de la historia."],
    ["El atrezo son…", ["los actores", "los objetos de la escena", "las luces", "los subtítulos"], 1, "Parte de la dirección de arte."],
    ["En stop motion se…", ["dibuja en ordenador", "fotografían objetos moviéndolos poco a poco", "graba en directo", "usan solo actores"], 1, "Foto a foto."],
    ["El primer largometraje hecho por completo en 3D fue…", ["Toy Story (1995)", "Viaje a la Luna", "Un perro andaluz", "Klaus"], 0, "De Pixar."],
    ["Un vídeo vertical para redes debe…", ["empezar despacio", "captar la atención en los primeros segundos", "durar dos horas", "no tener subtítulos"], 1, "Se decide en un instante."],
  ],
  examen: [
    ["El travelling se hace…", ["desplazando la cámara", "girando la cámara", "con zoom", "con un fundido"], 0, "Sobre raíles, dron o estabilizador."],
    ["La postproducción incluye…", ["montaje, sonido y color", "escribir el guion", "buscar localizaciones", "hacer el casting"], 0, "Después del rodaje."],
    ["El fundido a negro suele indicar…", ["un final o un salto de tiempo", "un diálogo", "un primer plano", "una persecución"], 0, "Transición clásica."],
    ["Un perro andaluz (1929) es obra de…", ["Buñuel y Dalí", "Lumière", "Méliès", "Chaplin"], 0, "Cine surrealista."],
    ["Los fotogramas clave en animación son…", ["las posiciones extremas del movimiento", "los títulos", "los fondos", "las voces"], 0, "Luego se dibujan los intermedios."],
    ["La luz principal se coloca a unos…", ["45° del personaje", "justo detrás", "en el suelo", "a 180°"], 0, "Define las sombras."],
    ["El montaje paralelo alterna…", ["dos acciones simultáneas", "dos colores", "dos idiomas", "dos cámaras iguales"], 0, "Lugares distintos, mismo tiempo."],
    ["Mostrar es mejor que contar significa…", ["que se vea la emoción en lugar de decirla", "usar muchos diálogos", "no usar música", "grabar en vertical"], 0, "Regla de guion."],
  ],
  tarjetas: [
    ["Iluminación de tres puntos", "Principal, relleno y contraluz."],
    ["Foley", "Efectos de sonido creados con objetos en estudio."],
    ["Stop motion", "Animación foto a foto moviendo objetos o muñecos."],
    ["Dirección de arte", "Decorado, atrezo, vestuario, maquillaje y paleta de color."],
  ],
  glosario: [
    ["Animatic", "Storyboard montado en vídeo con sonido provisional."],
    ["Atrezo", "Objetos que aparecen en escena."],
    ["Clave baja", "Iluminación con mucha sombra y contraste."],
    ["Contraluz", "Luz situada detrás del personaje."],
    ["Diegético", "Lo que pertenece al mundo de la historia."],
    ["Encadenado", "Transición que mezcla dos planos."],
    ["Foley", "Efectos de sonido creados en estudio con objetos."],
    ["Fotograma", "Cada una de las imágenes fijas de una película."],
    ["Montaje", "Ordenación y duración de los planos."],
    ["Panorámica", "Giro de la cámara sobre su eje."],
    ["Plano", "Fragmento grabado sin cortes."],
    ["Secuencia", "Conjunto de escenas con unidad narrativa."],
    ["Stop motion", "Animación fotografiando objetos en posiciones sucesivas."],
    ["Storyboard", "Guion en viñetas, una por plano."],
    ["Travelling", "Desplazamiento de la cámara."],
    ["Zoótropo", "Juguete óptico que crea movimiento con dibujos en un tambor."],
  ],
  situacion: {
    titulo: "Cortometraje de un minuto: «Un objeto que habla»",
    reto: "Un festival juvenil de cortos convoca la categoría «Un minuto». El tema: un objeto cotidiano que cambia la vida de alguien. Vuestro equipo debe idear, planificar, rodar y montar un cortometraje de 60 segundos con el móvil.",
    pasos: ["Escribid la idea en una frase y un guion literario de una página en tres actos.", "Haced el guion técnico y el storyboard, y repartid los oficios: dirección, cámara, sonido, arte y montaje.", "Preparad la dirección de arte (paleta, objetos) y la iluminación de tres puntos con medios caseros.", "Rodad respetando la regla de los 180 grados y grabad el sonido de cerca; cread al menos dos efectos de foley.", "Montad en un editor gratuito, añadid música con licencia libre y subtítulos, y presentad el corto con un pequeño coloquio."],
    producto: "Cortometraje de 60 segundos con guion, storyboard y ficha técnica.",
    evaluacion: ["Coherencia narrativa y uso expresivo de planos, ángulos y movimientos.", "Calidad técnica de la luz y el sonido (incluido el foley).", "Ritmo y corrección del montaje (eje, transiciones).", "Trabajo en equipo, planificación y respeto de derechos de imagen y de música."],
  },
  familias: ["Ved juntos una escena de una película sin sonido y luego con sonido: ¿qué cambia?", "Contad los cortes de un anuncio de 20 segundos y comentad qué planos usa.", "Haced en casa un stop motion de 10 segundos con objetos y el móvil.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: { saberes: "Imagen en movimiento: lenguaje audiovisual, planos, ángulos y movimientos, iluminación, dirección de arte, sonido y foley, guion técnico, storyboard, montaje, animación y formatos actuales (RD 217/2022, Expresión Artística 4º ESO; Decret 175/2022 en Cataluña).", ideas: ["Cortometraje de 1 minuto por grupos con el móvil y montaje en un editor gratuito (situación de aprendizaje).", "Recrear el efecto Kuleshov con fotos de los alumnos.", "Taller de foley: crear efectos de sonido con objetos y doblar una escena muda.", "Construir un zoótropo y animar un ciclo de 12 dibujos."] },
  fuentes: [{ t: "Academia de Cine: recursos educativos", url: "https://www.academiadecine.com/" }],
};
