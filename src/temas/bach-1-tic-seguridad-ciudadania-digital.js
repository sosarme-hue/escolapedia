// Tecnologías de la Información y la Comunicación I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L38");

// Tríada CIA: confidencialidad, integridad y disponibilidad.
const triada = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Triángulo de la seguridad: confidencialidad, integridad y disponibilidad alrededor de la información">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <path d="M130 34 L 216 150 H 44 Z" fill="var(--pen)" opacity=".12" stroke="var(--pen)" stroke-width="2.5"/>
  <circle cx="130" cy="108" r="24" fill="var(--eso)"/>${B.tx(130, 112, "Datos", { fs: 11, maxW: 40, bold: true, color: "#fff" })}
  <rect x="70" y="14" width="120" height="26" rx="13" fill="var(--card)" stroke="var(--red)" stroke-width="2.2"/>${B.tx(130, 31, "Confidencialidad", { fs: 11, maxW: 110, bold: true, color: "var(--red)" })}
  <rect x="6" y="140" width="104" height="26" rx="13" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.2"/>${B.tx(58, 157, "Integridad", { fs: 11, maxW: 94, bold: true, color: "var(--leaf)" })}
  <rect x="150" y="140" width="104" height="26" rx="13" fill="var(--card)" stroke="var(--sun)" stroke-width="2.2"/>${B.tx(202, 157, "Disponibilidad", { fs: 11, maxW: 94, bold: true, color: "var(--sun)" })}
  ${B.tx(56, 92, "solo quien", { fs: 9.5, maxW: 70 })}${B.tx(56, 104, "debe verlos", { fs: 9.5, maxW: 70 })}
  ${B.tx(204, 92, "accesibles", { fs: 9.5, maxW: 70 })}${B.tx(204, 104, "cuando hace falta", { fs: 9.5, maxW: 76 })}
</svg>`;

// Cifrado asimétrico: clave pública y privada.
const asimetrico = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Cifrado asimétrico: Ana cifra con la clave pública de Luis y solo Luis puede descifrar con su clave privada">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${B.tx(130, 20, "Cifrado asimétrico", { fs: 13, maxW: 236, bold: true, font: B.D })}
  <rect x="10" y="40" width="64" height="40" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2.2"/>${B.tx(42, 64, "Ana", { fs: 12, maxW: 56, bold: true, color: "var(--pen)" })}
  <rect x="186" y="40" width="64" height="40" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2.2"/>${B.tx(218, 64, "Luis", { fs: 12, maxW: 56, bold: true, color: "var(--red)" })}
  <rect x="94" y="46" width="72" height="28" rx="6" fill="var(--ink)" opacity=".85"/>${B.tx(130, 64, "x7#Qp9!", { fs: 11, maxW: 64, bold: true, color: "#fff" })}
  <path d="M74 60 H 94 M166 60 H 186" stroke="var(--ink)" stroke-width="2"/>
  <rect x="10" y="98" width="110" height="26" rx="8" fill="var(--leaf)"/>${B.tx(65, 115, "cifra con pública de Luis", { fs: 9.5, maxW: 102, bold: true, color: "#fff" })}
  <rect x="140" y="98" width="110" height="26" rx="8" fill="var(--sun)"/>${B.tx(195, 115, "descifra con su privada", { fs: 9.5, maxW: 102, bold: true, color: "#fff" })}
  ${B.tx(130, 148, "La clave pública se comparte;", { fs: 10.5, maxW: 230 })}${B.tx(130, 164, "la privada no sale nunca de Luis", { fs: 10.5, maxW: 230, bold: true })}
</svg>`;

module.exports = B.tema(B.textos({
  titulo: "Seguridad y ciudadanía digital",
  minutos: 120,
  objetivos: [
    "Identificar amenazas, malware y fraudes de ingeniería social y aplicar medidas de protección activas y pasivas",
    "Gestionar contraseñas, autenticación, copias de seguridad, cifrado y comunicaciones seguras",
    "Cuidar la identidad digital, la privacidad y los derechos de protección de datos",
    "Convivir en la red con respeto, prevenir el ciberacoso y otros riesgos, respetar la propiedad intelectual y cuidar el bienestar digital",
  ],
  claves: ["seguridad de la información", "malware", "ransomware", "phishing", "contraseña", "doble factor", "copia de seguridad", "cifrado", "huella digital", "RGPD", "ciberacoso", "Creative Commons"],
  pregunta: {
    texto: "Te llega un SMS: «Tu paquete está retenido. Paga 1,99 € de aduanas en este enlace». Esperas un pedido. ¿Qué haces?",
    respuesta: "No pulsas el enlace. Es un caso típico de <b>smishing</b>: un mensaje que suplanta a una empresa de mensajería para que introduzcas los datos de tu tarjeta en una web falsa. La pequeña cantidad y la urgencia buscan que actúes sin pensar. Se comprueba el estado del pedido en la web o la app oficial, escribiendo tú la dirección. La mejor defensa contra estos fraudes no es un programa: es tu <mark>sentido crítico</mark>.",
  },
  lectura: {
    titulo: "Un hospital sin ordenadores",
    html: `<p>Una mañana de 2020, el personal de un gran hospital público de Barcelona encendió sus ordenadores y encontró un mensaje: los archivos estaban cifrados y, para recuperarlos, había que pagar. Era un ataque de <b>ransomware</b>. Durante días, médicos y enfermeras tuvieron que volver al papel y al bolígrafo, consultar los resultados de las pruebas por teléfono y retrasar operaciones. El hospital no pagó y fue recuperando sus sistemas gracias a las copias de seguridad.</p>
    <p>Muchos ataques similares han empezado de la forma más sencilla: un correo electrónico con un archivo adjunto que alguien abrió sin sospechar, o una contraseña reutilizada que se había filtrado en otro servicio. Los delincuentes no siempre atacan la tecnología: atacan a las personas.</p>
    <p>La seguridad digital ya no es un asunto solo de informáticos. Afecta a tu dinero, a tus fotos, a tu reputación y a tus relaciones. Y la red no es solo un lugar de riesgos: es un espacio público en el que convivimos, con derechos y responsabilidades. En este último tema aprenderás a protegerte, a proteger a los demás y a ejercer una ciudadanía digital libre, crítica y respetuosa.</p>`,
  },
  secciones: [5, 4, 4],
  bloques: [
    {
      h: "La seguridad de la información",
      html: `<p>La <b>seguridad informática</b> es el conjunto de medidas para proteger los sistemas y la información frente a daños, accesos no autorizados y robos. Su objetivo se resume en tres propiedades, la <mark>tríada CIA</mark>:</p>
      <ul><li><b>Confidencialidad</b>: solo las personas autorizadas pueden acceder a la información.</li>
      <li><b>Integridad</b>: la información no se modifica sin autorización y es exacta y completa.</li>
      <li><b>Disponibilidad</b>: la información y los sistemas están accesibles cuando se necesitan.</li></ul>
      <p>Conviene distinguir tres conceptos: una <b>amenaza</b> es cualquier cosa que puede causar daño (un delincuente, un virus, un incendio, un error humano); una <b>vulnerabilidad</b> es un punto débil que la amenaza puede aprovechar (un programa sin actualizar, una contraseña débil); y el <b>riesgo</b> es la probabilidad de que una amenaza aproveche una vulnerabilidad multiplicada por el impacto del daño.</p>
      <p>Las amenazas pueden ser <b>humanas</b>, intencionadas (ciberdelincuentes, personas de dentro de la organización) o accidentales (borrar un archivo, perder el móvil), <b>lógicas</b> (malware, fallos de software) y <b>físicas</b> (averías, cortes de luz, robos, desastres naturales). La seguridad combina medidas <b>activas</b>, que previenen los incidentes (contraseñas, antivirus, cifrado), y <b>pasivas</b>, que reducen sus consecuencias cuando ocurren (copias de seguridad, planes de recuperación). Ningún sistema es invulnerable: se trata de reducir el riesgo.</p>`,
      svg: triada(),
    },
    {
      h: "El malware",
      html: `<p>El <b>malware</b> (software malicioso) es cualquier programa diseñado para dañar un sistema, robar información o tomar su control sin permiso. Los tipos principales son:</p>
      <ul><li><b>Virus</b>: se adhiere a otros archivos y se propaga cuando estos se ejecutan.</li>
      <li><b>Gusano</b>: se propaga solo por la red, aprovechando vulnerabilidades, sin intervención del usuario.</li>
      <li><b>Troyano</b>: se presenta como un programa útil o legítimo (un juego, un programa «crackeado») y abre una puerta trasera al atacante.</li>
      <li><b>Ransomware</b>: cifra los archivos y pide un rescate, normalmente en criptomonedas. Pagar no garantiza recuperarlos y financia a los delincuentes.</li>
      <li><b>Spyware</b>: espía la actividad y roba datos; los <b>keyloggers</b> registran todo lo que se teclea, incluidas las contraseñas.</li>

      <li><b>Botnet</b>: red de equipos infectados («zombis») controlados a distancia para enviar spam o lanzar ataques de denegación de servicio.</li>
</ul>
      <p>El malware entra sobre todo por <b>adjuntos y enlaces</b> en correos y mensajes, <b>descargas</b> de sitios no oficiales, programas piratas, memorias USB, webs comprometidas y vulnerabilidades sin parchear. Ante la sospecha: desconectar de la red, analizar con un antivirus actualizado y, si hace falta, restaurar desde una copia.</p>`,
      svg: B.cajas("Tipos de malware", [["Virus", "infecta archivos"], ["Gusano", "se propaga solo"], ["Troyano", "se disfraza"], ["Ransomware", "cifra y extorsiona"], ["Spyware", "espía y roba"], ["Botnet", "equipos zombis"]], { t: "Malware", cols: 3 }),
    },
    {
      h: "Ingeniería social y fraudes",
      html: `<p>La <b>ingeniería social</b> manipula a las personas para que revelen información o hagan algo que beneficia al atacante. Aprovecha la <b>confianza</b>, la <b>urgencia</b>, el <b>miedo</b>, la <b>curiosidad</b> o la <b>codicia</b>. Sus formas más comunes:</p>
      <ul><li><b>Phishing</b>: correo que suplanta a un banco, una tienda, una red social o una administración para que la víctima pulse un enlace a una web falsa e introduzca sus credenciales o datos bancarios. Cuando llega por SMS se llama <b>smishing</b>, y por teléfono, <b>vishing</b>.</li>
      <li><b>Fraude del CEO o del familiar</b>: alguien se hace pasar por un jefe o un hijo («he cambiado de número, necesito que me hagas un bizum urgente»).</li>
      <li><b>Falsas tiendas</b>, ofertas de empleo, sorteos y premios que piden un pago o datos.</li>
</ul>
      <p>Cómo detectar un mensaje fraudulento:</p>
      <ul><li>El <b>remitente</b> o la <b>URL</b> no coinciden con los oficiales (<code>correos-envio.info</code>, letras cambiadas, dominios raros). Hay que leer el dominio real, que es lo que va justo antes de la primera barra.</li>
      <li>Transmite <b>urgencia</b> o amenaza («tu cuenta se bloqueará en 24 horas»).</li>
      <li>Pide <b>datos sensibles</b>: contraseñas, códigos que llegan por SMS, PIN o número de tarjeta. Ningún banco los pide por mensaje.</li>
</ul>
      <p>Ante la duda, no se pulsa: se accede escribiendo la dirección oficial o se llama al teléfono de siempre.</p>`,
      svg: B.flujo("Cómo actuar ante un mensaje sospechoso", ["¿Remitente y dominio oficiales?", "¿Urgencia, miedo o premio?", "¿Pide datos o códigos?", "No pulsar: ir a la web oficial", "Si caíste: contraseñas, banco, denuncia"], { t: "¿Es phishing?" }),
      video: { id: "oF0JKaJJFso", titulo: "Cómo identificar un correo malicioso de tipo phishing analizando su URL", canal: "Oficina de Seguridad del Internauta", vistas: 59857 },
    },
    {
      h: "Contraseñas y autenticación",
      html: `<p>La autenticación comprueba la identidad de un usuario mediante uno o varios <b>factores</b>: algo que <b>sabes</b> (contraseña, PIN), algo que <b>tienes</b> (el móvil, una llave de seguridad) y algo que <b>eres</b> (huella dactilar, rostro).</p>
      <p>Una <b>contraseña robusta</b> es <b>larga</b> (al menos 12 caracteres, mejor más), impredecible (sin nombres, fechas ni palabras sueltas del diccionario) y <b>única</b> para cada servicio. La longitud es lo que más aumenta su seguridad: cada carácter añadido multiplica las combinaciones que un atacante tendría que probar. Una buena técnica son las <b>frases de contraseña</b>: varias palabras sin relación con algún número o símbolo, fáciles de recordar y difíciles de adivinar.</p>
      <p>Reutilizar contraseñas es muy peligroso: cuando un servicio sufre una <b>filtración</b>, los delincuentes prueban esas mismas credenciales en otros servicios.</p>
      <p>Medidas recomendadas:</p>
      <ul><li>Usar un <b>gestor de contraseñas</b>, que genera y guarda contraseñas distintas y robustas, protegidas por una única contraseña maestra.</li>
      <li>Activar la <b>verificación en dos pasos</b> (2FA): además de la contraseña, se pide un código de una aplicación autenticadora, una notificación o una llave física. Aunque roben la contraseña, no podrán entrar.</li>
      <li>Usar las <b>llaves de acceso</b> (<i>passkeys</i>) cuando estén disponibles: sustituyen la contraseña por una clave criptográfica guardada en el dispositivo y no pueden robarse con phishing.</li>
      <li>No compartir nunca las contraseñas ni los códigos de verificación, ni con amistades ni con la pareja.</li>
</ul>`,
      svg: B.barras("Tiempo aproximado para adivinar una contraseña por fuerza bruta según su longitud", [["6 car.", 1], ["8 car.", 3], ["10 car.", 6], ["12 car.", 10], ["14 car.", 14]], { t: "Más larga = más segura (escala relativa)" }),
      video: { id: "I8AhGbzzego", titulo: "Tutorial: ¿cómo hacer una contraseña fuerte en tan solo un minuto?", canal: "ESET Latinoamérica", vistas: 646372 },
    },
    {
      h: "Proteger el equipo y los datos",
      html: `<p>Las principales medidas de protección del equipo son:</p>
      <ul><li><b>Actualizaciones</b>: el sistema operativo, el navegador y las aplicaciones deben estar al día, porque las actualizaciones corrigen vulnerabilidades conocidas. Conviene activarlas en automático.</li>
      <li><b>Antivirus</b> o antimalware: detecta y elimina software malicioso comparándolo con firmas conocidas y analizando comportamientos sospechosos. Los sistemas actuales lo incluyen.</li>
      <li><b>Cortafuegos</b>: filtra las conexiones de red entrantes y salientes según unas reglas.</li>
      <li><b>Cuentas sin privilegios</b>: usar a diario una cuenta normal, no la de administrador, limita el daño que puede hacer un malware.</li>
      <li><b>Descargas oficiales</b>: instalar programas y apps solo desde las tiendas o webs oficiales, y nunca software pirata.</li>
      <li><b>Cifrado del disco</b>: si roban o pierden el portátil, los datos no se pueden leer sin la clave.</li></ul>
      <p>La medida pasiva más importante es la <mark>copia de seguridad</mark>, que permite recuperar los datos tras un borrado, una avería, un robo o un ransomware. La <b>regla 3-2-1</b> recomienda tener <b>3</b> copias de los datos (el original y dos más), en <b>2</b> soportes distintos (por ejemplo, el ordenador y un disco externo) y <b>1</b> de ellas fuera de casa o en la nube. La copia externa debe <b>desconectarse</b> después de hacerla, para que un ransomware no la cifre también.</p>
`,
      svg: B.cajas("Regla 3-2-1 de las copias de seguridad", [["3 copias", "original|y dos más"], ["2 soportes", "distintos"], ["1 fuera", "otro lugar|o la nube"]], { t: "Regla 3-2-1", cols: 3 }),
    },
    {
      h: "Comunicaciones seguras y cifrado",
      html: `<p>El <b>cifrado</b> transforma un mensaje legible en otro ininteligible mediante un algoritmo y una <b>clave</b>; solo quien tiene la clave adecuada puede descifrarlo. Hay dos tipos:</p>
      <ul><li><b>Cifrado simétrico</b>: se usa la misma clave para cifrar y descifrar (como AES). Es muy rápido, pero emisor y receptor deben compartir la clave de forma segura.</li>
      <li><b>Cifrado asimétrico</b> o de clave pública: cada persona tiene un par de claves. La <b>clave pública</b> se comparte con todo el mundo; la <b>clave privada</b> solo la tiene su dueño. Lo que se cifra con la pública solo se descifra con la privada correspondiente.</li></ul>
      <p>La <b>firma electrónica</b> usa el sistema al revés: el emisor firma con su clave privada un resumen del documento (<b>hash</b>), y cualquiera puede comprobarlo con su clave pública. Así se garantiza la <b>autenticidad</b> (quién lo firmó), la <b>integridad</b> (no se ha modificado) y el <b>no repudio</b>. Los <b>certificados digitales</b>, emitidos por autoridades de certificación, vinculan una clave pública con una identidad.</p>
      <p>En la práctica:</p>
      <ul><li><b>HTTPS</b> combina ambos cifrados: con el asimétrico y el certificado del servidor se comprueba la identidad de la web y se acuerda una clave simétrica para la sesión. El candado no garantiza que la web sea honrada, solo que la conexión está cifrada con ese dominio: una web de phishing también puede tener candado.</li>
      <li>Las aplicaciones de mensajería con <b>cifrado de extremo a extremo</b> hacen que solo emisor y receptor puedan leer los mensajes, ni siquiera la empresa.</li>
      <li>Las <b>VPN</b> cifran todo el tráfico en redes no fiables.</li></ul>`,
      svg: asimetrico(),
    },
    {
      h: "Seguridad en móviles, wifi y objetos conectados",
      html: `<p>El <b>móvil</b> contiene fotos, conversaciones, contraseñas, ubicación y acceso al banco: es el dispositivo que más hay que proteger. Medidas básicas:</p>
      <ul><li><b>Bloqueo</b> con PIN robusto, patrón complejo o biometría, y bloqueo automático en pocos segundos.</li>
      <li>Instalar apps solo de las <b>tiendas oficiales</b>, revisar sus valoraciones y desinstalar las que no se usan.</li>
      <li>Revisar los <b>permisos</b> de cada app: una linterna no necesita acceso a los contactos, la ubicación o el micrófono. Conceder la ubicación solo «mientras se usa la app».</li>
      <li>Activar la función de <b>localizar y borrar a distancia</b> por si se pierde o lo roban.</li>
      <li>Mantener actualizado el sistema y no «rootear» o liberar el dispositivo, porque desactiva protecciones.</li>
</ul>
      <p>En <b>redes wifi públicas</b>, cualquiera conectado a la misma red podría intentar espiar: hay que evitar operaciones sensibles, comprobar HTTPS, desactivar la conexión automática a redes abiertas y usar los datos móviles o una VPN.</p>
      <p>Los <b>objetos conectados</b> (cámaras, altavoces inteligentes, enchufes, juguetes, relojes) son a menudo el eslabón más débil: muchos salen de fábrica con contraseñas conocidas y reciben pocas actualizaciones. Hay que cambiar sus contraseñas, actualizarlos, conectarlos a una red separada y desactivar lo que no se use, como el micrófono o el acceso remoto.</p>`,
      svg: B.estrella("Seguridad en el móvil", "Móvil", ["Bloqueo", "Apps oficiales", "Permisos", "Localizar", "Actualizar", "Wifi segura"]),
    },
    {
      h: "Identidad digital y huella digital",
      html: `<p>La <b>identidad digital</b> es el conjunto de informaciones sobre una persona que se encuentran en internet: perfiles en redes, fotos, comentarios, publicaciones de otros sobre ella, resultados en buscadores. Se construye con lo que publicamos nosotros y con lo que publican los demás, y forma nuestra <b>reputación en línea</b>, que pueden consultar centros educativos, empresas o futuras parejas.</p>
      <p>La <b>huella digital</b> es el rastro que dejamos al usar la red. Puede ser <b>activa</b> (lo que publicamos voluntariamente) o <b>pasiva</b> (datos recogidos sin que lo notemos: historial de navegación, ubicación, tiempo que miramos cada publicación, dirección IP, compras). Con todos esos datos, las plataformas y los anunciantes crean <b>perfiles</b> muy detallados de cada usuario para personalizar contenidos y publicidad.</p>
      <p>Lo que se publica en internet es difícil de borrar: puede copiarse, capturarse, reenviarse y quedar archivado.</p>
      <p>Para cuidar la identidad digital:</p>
      <ul><li>Configurar la <b>privacidad</b> de los perfiles: quién puede ver las publicaciones, encontrarte o etiquetarte.</li>
      <li>Buscarse a uno mismo de vez en cuando en los buscadores (<b>egosurfing</b>).</li>

      <li>No publicar la ubicación en tiempo real, el colegio, la dirección o los horarios.</li>
      <li>Revisar y borrar publicaciones antiguas y cuentas que ya no se usan.</li></ul>
`,
      svg: B.comparar("Huella digital activa y pasiva", ["Activa", ["publicaciones", "comentarios", "fotos y vídeos", "perfiles"]], ["Pasiva", ["historial", "ubicación", "cookies", "tiempo de visión"]]),
    },
    {
      h: "Privacidad y protección de datos",
      html: `<p>Los <b>datos personales</b> son cualquier información sobre una persona identificada o identificable: nombre, foto, voz, DNI, dirección, correo, IP, ubicación. Algunos son <b>especialmente protegidos</b>: salud, ideología, religión, orientación sexual, origen étnico o datos biométricos.</p>
      <p>En la Unión Europea los protege el <b>Reglamento General de Protección de Datos</b> (RGPD) y, en España, además, la <b>Ley Orgánica de Protección de Datos y garantía de los derechos digitales</b> (LOPDGDD, 2018). Sus principios: los datos solo pueden recogerse para una finalidad concreta, con una base legal (como el <b>consentimiento</b>, que debe ser libre, informado e inequívoco), los mínimos necesarios, exactos, guardados el tiempo imprescindible y protegidos.</p>
      <p>Toda persona tiene <b>derechos</b> sobre sus datos:</p>
      <ul><li><b>Acceso</b>: saber qué datos tiene una organización sobre ti.</li>
      <li><b>Rectificación</b> de los datos incorrectos.</li>
      <li><b>Supresión</b> («derecho al olvido»): pedir que se borren o que un buscador deje de mostrar ciertos resultados.</li>
      <li><b>Oposición</b> y <b>limitación</b> del tratamiento, y <b>portabilidad</b> (llevártelos a otro servicio).</li></ul>
      <p>En España, a partir de los <b>14 años</b> una persona puede dar por sí misma su consentimiento para el tratamiento de sus datos, por ejemplo para abrir una cuenta en una red social; por debajo de esa edad lo dan sus familias. Las webs deben informar de sus <b>cookies</b> y pedir permiso para las que no son técnicas. Las reclamaciones se presentan ante la <b>Agencia Española de Protección de Datos</b> (AEPD), que dispone de un canal prioritario para pedir la retirada urgente de contenidos sexuales o violentos difundidos sin consentimiento.</p>
      <p>Y la otra cara: publicar datos o imágenes de otras personas sin su permiso vulnera sus derechos y puede ser sancionado.</p>`,
      svg: B.cajas("Derechos sobre los datos personales", [["Acceso", "qué datos tienen"], ["Rectificación", "corregir"], ["Supresión", "borrar, olvido"], ["Oposición", "negarse"], ["Limitación", "restringir"], ["Portabilidad", "llevártelos"]], { t: "Tus derechos (RGPD)", cols: 3 }),
    },
    {
      h: "Convivencia en la red y ciberacoso",
      html: `<p>Internet es un espacio público donde se aplican las mismas normas de respeto que en la calle. La <b>netiqueta</b> recoge pautas de buena convivencia: tratar a los demás con respeto, no escribir todo en mayúsculas (equivale a gritar), no difundir rumores ni bulos, pedir permiso antes de publicar fotos de otros, citar las fuentes, respetar las normas de cada comunidad y recordar que detrás de cada pantalla hay una persona.</p>
      <p>El <mark>ciberacoso</mark> (<i>ciberbullying</i>) es el acoso entre iguales a través de medios digitales: insultos, amenazas, humillaciones, difusión de fotos o vídeos, exclusión intencionada de grupos, suplantación de identidad o creación de perfiles falsos para burlarse de alguien. Es especialmente dañino porque:</p>
      <ul><li>Puede producirse a cualquier hora y en cualquier lugar: la víctima no tiene un refugio.</li>
      <li>Llega a una audiencia enorme y el contenido es difícil de eliminar.</li>
      <li>El anonimato puede hacer que los agresores sean más crueles.</li></ul>
      <p>Si sufres ciberacoso: <b>no respondas</b> a las provocaciones, <b>guarda pruebas</b> (capturas con fecha y usuario), <b>bloquea</b> y <b>denuncia</b> en la plataforma y, sobre todo, <b>pide ayuda</b> a una persona adulta de confianza, al centro educativo o a la línea de ayuda en ciberseguridad 017 de INCIBE. No es culpa tuya.</p>
      <p>Si eres testigo, tu papel es clave: no reír las «gracias», no reenviar, apoyar a la víctima y comunicarlo. Quien comparte un contenido humillante también participa en el acoso.</p>`,
      svg: B.flujo("Qué hacer ante el ciberacoso", ["No responder a las provocaciones", "Guardar pruebas con fecha", "Bloquear y denunciar en la plataforma", "Pedir ayuda a un adulto o al centro", "Línea 017 de INCIBE"], { t: "Ciberacoso" }),
      video: { id: "SEC_dOWFN5M", titulo: "Ciberbullying: ciberacoso en redes sociales, videojuegos y smartphones y su prevención", canal: "PantallasAmigas", vistas: 660454 },
    },
    {
      h: "Otros riesgos: grooming, sexting y contenidos dañinos",
      html: `<p>Algunos riesgos afectan especialmente a adolescentes:</p>
      <ul><li><b>Grooming</b>: un adulto se gana la confianza de un menor en la red, a menudo haciéndose pasar por alguien de su edad, con el fin de obtener imágenes íntimas o un encuentro. Señales de alerta: insiste en mantener la relación en secreto, hace regalos (por ejemplo, saldo o artículos de videojuegos), pide fotos o cambiar a una aplicación privada. Es un delito.</li>
      <li><b>Sexting</b>: enviar imágenes o vídeos de contenido sexual propios. Una vez enviados se pierde el control: pueden reenviarse o usarse para chantajear. Difundir imágenes íntimas de otra persona sin su consentimiento es un <b>delito</b> aunque se hayan recibido voluntariamente, y también lo es crear desnudos falsos con IA.</li>
      <li><b>Sextorsión</b>: chantaje con publicar imágenes íntimas si no se paga o no se envían más. Nunca hay que ceder: se guardan pruebas, se corta el contacto y se pide ayuda y se denuncia.</li>
      <li><b>Retos virales</b> peligrosos, comunidades que promueven trastornos alimentarios, autolesiones o violencia, y la <b>desinformación</b>.</li>
      <li><b>Apuestas en línea</b> y mecanismos de azar en videojuegos (cajas de recompensa), que pueden generar adicción y están prohibidos para menores de edad.</li>
</ul>
      <p>En todos estos casos la clave es la misma: <b>no estás solo ni sola</b>. Hay que hablar con una persona adulta de confianza, guardar las pruebas, denunciar en la plataforma y, si es un delito, ante la Policía o la Guardia Civil, que tienen unidades especializadas. La línea 017 de INCIBE ofrece asesoramiento gratuito y confidencial.</p>`,
      svg: B.rejilla("Riesgos en la red y cómo actuar", ["Riesgo", "Qué es", "Actuar"], [["Grooming", "adulto engaña", "cortar, contar"], ["Sexting", "enviar íntimas", "no reenviar"], ["Sextorsión", "chantaje", "no ceder"], ["Suplantación", "perfil falso", "denunciar"]], { t: "Otros riesgos" }),
    },
    {
      h: "Propiedad intelectual y licencias",
      html: `<p>Las obras creativas (textos, fotos, música, vídeos, programas, dibujos) están protegidas por la <b>propiedad intelectual</b> desde el momento de su creación, sin necesidad de registrarlas. Su autor tiene <b>derechos morales</b> (ser reconocido como autor y que se respete la integridad de la obra, que no se pueden ceder) y <b>derechos de explotación</b> (reproducir, distribuir, comunicar públicamente y transformar la obra), que sí se pueden ceder o vender. En España, duran toda la vida del autor y 70 años más; después la obra pasa al <b>dominio público</b> y cualquiera puede usarla.</p>
      <p>Que algo esté en internet no significa que se pueda usar libremente. El modelo tradicional es <b>«todos los derechos reservados»</b> (©): hay que pedir permiso. La ley permite algunas excepciones, como la <b>cita</b> de fragmentos con fines docentes o de análisis, indicando siempre la fuente y el autor.</p>
      <p>Las licencias <mark>Creative Commons</mark> permiten al autor decidir qué usos autoriza («algunos derechos reservados») combinando cuatro condiciones:</p>
      <ul><li><b>BY</b> (reconocimiento): hay que citar al autor. Está en todas las licencias.</li>
      <li><b>NC</b> (no comercial): no se puede usar con fines comerciales.</li>
      <li><b>ND</b> (sin obras derivadas): no se puede modificar.</li>
      <li><b>SA</b> (compartir igual): las obras derivadas deben usar la misma licencia.</li></ul>
      <p>Así, CC BY-SA permite usar y modificar, incluso comercialmente, citando y manteniendo la licencia; CC BY-NC-ND solo permite compartir la obra tal cual, citando y sin fines comerciales. Existen bancos de imágenes, música y vídeos con licencias libres. Y presentar como propio un trabajo ajeno, también uno generado con IA, es <b>plagio</b>.</p>`,
      svg: B.rejilla("Condiciones de las licencias Creative Commons", ["Sigla", "Condición"], [["BY", "citar al autor"], ["NC", "no comercial"], ["ND", "sin modificar"], ["SA", "compartir igual"]], { t: "Creative Commons" }),
    },
    {
      h: "Bienestar digital y ciudadanía activa",
      html: `<p>Las tecnologías digitales pueden afectar a la <b>salud</b> si se usan sin control. Algunos riesgos son la fatiga visual, las malas posturas, la falta de sueño por usar pantallas por la noche, el sedentarismo, la dificultad para concentrarse con notificaciones constantes, la comparación continua con vidas «perfectas» en redes y, en casos extremos, el <b>uso problemático</b> o adicción: cuando el uso del móvil, las redes o los videojuegos interfiere con los estudios, el sueño, la familia o las amistades, y aparece malestar al no poder usarlos.</p>
      <p>El <b>bienestar digital</b> consiste en mantener una relación equilibrada con la tecnología:</p>
      <ul><li>Revisar el <b>tiempo de uso</b> con las herramientas del propio móvil y fijar límites.</li>
      <li>Desactivar las <b>notificaciones</b> innecesarias y usar el modo concentración al estudiar.</li>
      <li>Dejar el móvil fuera del dormitorio por la noche y desconectar una hora antes de dormir.</li>
      <li>Aplicar la regla <b>20-20-20</b>: cada 20 minutos, mirar algo a 20 pies (unos 6 m) durante 20 segundos.</li>
      <li>Cuidar la ergonomía: pantalla a la altura de los ojos, espalda apoyada, pausas para moverse.</li>
</ul>
      <p>Ser ciudadano digital es también <b>participar</b>: informarse con espíritu crítico y contrastar antes de compartir, colaborar en proyectos abiertos, usar la tecnología para mejorar el entorno, defender los derechos propios y ajenos y ayudar a quien tiene menos competencias digitales. La tecnología no es neutral: lo que hagamos con ella depende de las decisiones de cada persona y de la sociedad.</p>`,
      svg: B.ciclo("Hábitos de bienestar digital", "Equilibrio", ["Límites de tiempo", "Sin notificaciones", "Descanso", "Ergonomía", "Tiempo sin pantallas"]),
    },
  ],
  figura: {
    titulo: "Ideas clave de la seguridad y la ciudadanía digital",
    items: [["Seguridad", "C · I · D", "malware", "y fraudes"], ["Protección", "2FA · 3-2-1", "actualizar", "y cifrar"], ["Privacidad", "RGPD · 14 años", "huella", "e identidad"], ["Ciudadanía", "netiqueta · CC", "ciberacoso: 017", "bienestar"]],
  },
  video: { id: "HuasitV4lcw", titulo: "¿Qué es malware? Los principales tipos de ataques informáticos y cómo protegernos", canal: "Computer Hoy", vistas: 114118 },
  quiz: [
    ["Que solo las personas autorizadas accedan a la información es…", ["integridad", "confidencialidad", "disponibilidad", "no repudio"], 1, "Primera propiedad de la tríada CIA."],
    ["Un programa sin actualizar es…", ["una amenaza", "una vulnerabilidad", "un riesgo", "un antivirus"], 1, "Un punto débil que se puede aprovechar."],
    ["Las copias de seguridad son una medida…", ["activa", "pasiva", "física", "lógica"], 1, "Reducen el daño cuando ya ha ocurrido el incidente."],
    ["El malware que cifra los archivos y pide un rescate es…", ["un gusano", "un troyano", "ransomware", "adware"], 2, "Pagar no garantiza la recuperación."],
    ["El malware que se disfraza de programa legítimo es…", ["el troyano", "el gusano", "el adware", "la botnet"], 0, "Como el caballo de Troya."],
    ["Un keylogger…", ["muestra publicidad", "registra lo que se teclea", "cifra archivos", "acelera el equipo"], 1, "Roba contraseñas."],
    ["El phishing por SMS se llama…", ["vishing", "smishing", "spam", "sexting"], 1, "SMS + phishing."],
    ["Un banco te pide por correo tu contraseña y el código del SMS. Debes…", ["enviarlos rápido", "no enviarlos: es un fraude", "enviar solo la contraseña", "responder preguntando"], 1, "Ningún banco los pide por mensaje."],
    ["La característica que más aumenta la seguridad de una contraseña es…", ["que sea tu nombre", "su longitud", "que lleve tu fecha de nacimiento", "usarla en todo"], 1, "Cada carácter multiplica las combinaciones."],
    ["La verificación en dos pasos añade…", ["otra contraseña igual", "un segundo factor, como un código del móvil", "un antivirus", "un cortafuegos"], 1, "Algo que tienes además de algo que sabes."],
    ["La regla 3-2-1 dice…", ["3 contraseñas, 2 correos, 1 móvil", "3 copias, 2 soportes, 1 fuera de casa", "3 antivirus", "copiar cada 3 días"], 1, "La copia externa debe desconectarse."],
    ["En el cifrado asimétrico, para enviar un mensaje secreto a Luis se usa…", ["la clave privada de Luis", "la clave pública de Luis", "la clave privada propia", "ninguna clave"], 1, "Solo Luis podrá descifrarlo con su privada."],
    ["El candado de HTTPS garantiza…", ["que la web es honrada", "que la conexión con ese dominio está cifrada", "que no hay virus", "que es del Gobierno"], 1, "Una web de phishing también puede tenerlo."],
    ["Una app de linterna pide acceso a tus contactos. Lo correcto es…", ["aceptar", "denegarlo y desconfiar de la app", "darle también la ubicación", "reiniciar el móvil"], 1, "No necesita ese permiso."],
    ["El historial de navegación y la ubicación recogidos sin que lo notes forman tu huella…", ["activa", "pasiva", "física", "biométrica"], 1, "La activa es lo que publicas tú."],
    ["En España, la edad a partir de la cual puedes consentir por ti mismo el tratamiento de tus datos es…", ["12 años", "14 años", "16 años", "18 años"], 1, "LOPDGDD."],
    ["El derecho a pedir que se borren tus datos es el de…", ["acceso", "rectificación", "supresión", "portabilidad"], 2, "También llamado derecho al olvido."],
    ["Ante el ciberacoso NO debes…", ["guardar pruebas", "responder a las provocaciones", "bloquear y denunciar", "pedir ayuda"], 1, "Responder suele empeorar la situación."],
    ["La línea de ayuda en ciberseguridad de INCIBE es el…", ["112", "016", "017", "091"], 2, "Gratuita y confidencial."],
    ["Una imagen con licencia CC BY-NC permite…", ["cualquier uso sin citar", "usarla citando al autor y sin fines comerciales", "venderla", "no usarla nunca"], 1, "BY: reconocimiento. NC: no comercial."],
  ],
  examen: [
    ["Un incendio destruye el servidor de una empresa. ¿Qué propiedad se ve afectada principalmente?", ["Confidencialidad", "Integridad", "Disponibilidad", "No repudio"], 2, "Los datos dejan de estar accesibles."],
    ["¿Cuál es la URL más probablemente legítima del banco «Banco Ejemplo» (bancoejemplo.es)?", ["bancoejemplo.es.seguridad-login.com", "https://www.bancoejemplo.es/acceso", "bancoejemp1o.es", "bancoejemplo-es.net"], 1, "El dominio real es lo que va justo antes de la primera barra."],
    ["Con 26 letras minúsculas, ¿cuántas veces más combinaciones tiene una contraseña de 10 caracteres que una de 8?", ["2", "52", "676", "20"], 2, "26¹⁰ / 26⁸ = 26² = 676."],
    ["Un ransomware cifra tu ordenador y el disco externo, que estaba siempre conectado. ¿Qué falló?", ["El antivirus", "La copia debía desconectarse o estar fuera", "La contraseña", "El cortafuegos"], 1, "La copia conectada también se cifra."],
    ["¿Qué garantiza la firma electrónica?", ["Solo la confidencialidad", "Autenticidad, integridad y no repudio", "La disponibilidad", "Que nadie lea el documento"], 1, "Se firma con la clave privada y se verifica con la pública."],
    ["Una compañera te reenvía una foto íntima de otra alumna. ¿Qué haces?", ["Reenviarla a tu grupo", "No reenviarla, borrarla y avisar a un adulto o al centro", "Guardarla", "Comentarla"], 1, "Difundirla es delito y agrava el daño."],
    ["Quieres usar en un vídeo de YouTube con anuncios una música CC BY-NC. ¿Puedes?", ["Sí, citando", "No, porque el uso es comercial", "Sí, si la modificas", "Solo si no citas"], 1, "NC prohíbe el uso comercial."],
    ["Un amigo pasa 7 horas diarias con el móvil, duerme mal y ha bajado sus notas. ¿Qué indica y qué propondrías?", ["Nada, es normal", "Posible uso problemático: límites, sin móvil de noche y pedir ayuda", "Que necesita otro móvil", "Que use más redes"], 1, "Interfiere con el sueño y los estudios."],
  ],
  feynman: ["Qué son la confidencialidad, la integridad y la disponibilidad", "Qué tipos de malware existen y cómo entran en un equipo", "Cómo reconocer un mensaje de phishing", "Cómo crear y gestionar contraseñas seguras y para qué sirve la verificación en dos pasos", "Qué diferencia hay entre cifrado simétrico y asimétrico", "Qué derechos tienes sobre tus datos y qué hacer ante el ciberacoso"],
  mapa: ["SEGURIDAD Y CIUDADANÍA DIGITAL", [["Amenazas", "malware · phishing · ingeniería social"], ["Protección", "contraseñas · 2FA · copias · cifrado"], ["Privacidad", "identidad · huella · RGPD · derechos"], ["Ciudadanía", "netiqueta · ciberacoso · licencias · bienestar"]]],
  tarjetas: [
    ["Tríada CIA", "Confidencialidad, integridad y disponibilidad."],
    ["Amenaza, vulnerabilidad y riesgo", "Lo que daña, el punto débil y la probabilidad por el impacto."],
    ["Malware", "Virus, gusano, troyano, ransomware, spyware, adware, botnet."],
    ["Phishing", "Suplantación para robar datos: correo, SMS (smishing), llamada (vishing)."],
    ["Contraseña robusta", "Larga (12+), impredecible, única y en un gestor."],
    ["2FA", "Segundo factor: algo que tienes o eres además de lo que sabes."],
    ["Regla 3-2-1", "3 copias, 2 soportes, 1 fuera (y desconectada)."],
    ["Cifrado asimétrico", "Clave pública para cifrar; privada para descifrar o firmar."],
    ["Huella digital", "Activa (lo que publicas) y pasiva (lo que se recoge de ti)."],
    ["Derechos RGPD", "Acceso, rectificación, supresión, oposición, limitación y portabilidad."],
    ["Ciberacoso", "No responder, guardar pruebas, bloquear, denunciar y pedir ayuda (017)."],
    ["Creative Commons", "BY citar, NC no comercial, ND sin cambios, SA compartir igual."],
  ],
  ejemplos: [
    ["Analiza este mensaje: «Correos: su paquete no se ha podido entregar. Pague 1,79 € en https://correos-entregas.top/pago antes de 24 h».", ["Dominio: correos-entregas.top no es el oficial de Correos.", "Urgencia: plazo de 24 horas para presionar.", "Pide un pago con tarjeta por un enlace en un SMS.", "Actuación: no pulsar, consultar el envío en la web oficial escribiendo la dirección, borrar el SMS y, si se desea, notificarlo a INCIBE."], "Es smishing: no se pulsa ni se paga."],
    ["Compara cuántas combinaciones tiene una contraseña de 8 caracteres con minúsculas, mayúsculas y números (62 símbolos) frente a una frase de 4 palabras elegidas al azar de una lista de 7776.", ["8 caracteres: 62⁸ ≈ 2,2 · 10¹⁴.", "4 palabras: 7776⁴ ≈ 3,7 · 10¹⁵.", "La frase tiene unas 17 veces más combinaciones y es más fácil de recordar; con 5 palabras serían 2,8 · 10¹⁹."], "La frase de contraseña aleatoria es más segura y memorable."],
    ["Diseña un plan de copias de seguridad 3-2-1 para las fotos y trabajos de una familia.", ["Original: en el ordenador familiar y los móviles.", "Copia 1: disco externo, semanal, que se desconecta y guarda en un cajón.", "Copia 2: servicio en la nube con verificación en dos pasos, sincronizado.", "Cada tres meses se comprueba que se pueden restaurar algunos archivos."], "3 copias, 2 soportes (ordenador y disco), 1 fuera (nube)."],
    ["Explica cómo envía Ana a Luis un documento firmado y cifrado con criptografía de clave pública.", ["Ana calcula el hash del documento y lo cifra con su clave privada: esa es la firma.", "Ana cifra el documento (con una clave simétrica que a su vez cifra con la clave pública de Luis).", "Luis descifra con su clave privada y obtiene el documento.", "Luis verifica la firma con la clave pública de Ana: si el hash coincide, sabe que es de Ana y que no se ha modificado."], "Confidencialidad (clave pública de Luis) y autenticidad e integridad (firma con la privada de Ana)."],
    ["Revisa la configuración de privacidad de un perfil de una red social de una alumna de 15 años.", ["Cuenta privada: solo seguidores aprobados ven las publicaciones.", "Desactivar la ubicación en las publicaciones y que no puedan encontrarla por el teléfono.", "Revisar quién puede etiquetarla y mencionarla, y aprobar las etiquetas.", "Limitar los mensajes directos a personas que sigue y revisar las apps vinculadas."], "Perfil privado, sin ubicación, etiquetas controladas y mensajes limitados."],
    ["Quieres ilustrar un trabajo con una foto CC BY-SA de un banco de imágenes y modificarla. ¿Qué debes hacer?", ["BY: citar autor, título, fuente y licencia.", "SA: la imagen modificada debe compartirse con la misma licencia CC BY-SA.", "Indicar que la has modificado."], "Pie de foto: «Foto: autor, título (fuente), CC BY-SA 4.0, modificada por …», y publicar la versión modificada con CC BY-SA."],
  ],
  errores: [
    "Usar la misma contraseña en todos los servicios: una filtración las compromete todas.",
    "Pensar que el candado de HTTPS significa que una web es fiable.",
    "Hacer copias de seguridad en un disco siempre conectado, que el ransomware también cifra.",
    "Conceder todos los permisos que piden las aplicaciones sin leerlos.",
    "Creer que lo que se publica o se envía por mensaje privado se puede controlar o borrar del todo.",
    "Usar imágenes o música de internet sin comprobar su licencia, pensando que «si está en internet es libre».",
  ],
  ejercicios: {
    b: [
      ["Define confidencialidad, integridad y disponibilidad con un ejemplo de cada una.", "Confidencialidad: solo tú y tu médico ven tu historial. Integridad: nadie cambia tus notas en la plataforma. Disponibilidad: la web de matrícula funciona el día del plazo."],
      ["Distingue amenaza, vulnerabilidad y riesgo.", "Amenaza: lo que puede causar daño (un ciberdelincuente). Vulnerabilidad: el punto débil (una contraseña débil). Riesgo: la probabilidad de que la amenaza aproveche la vulnerabilidad por el impacto."],
      ["Clasifica como medida activa o pasiva: antivirus, copia de seguridad, contraseña, plan de recuperación, cortafuegos.", "Activas: antivirus, contraseña, cortafuegos. Pasivas: copia de seguridad y plan de recuperación."],
      ["Relaciona: troyano, gusano, ransomware, spyware con: espía, se disfraza, cifra y extorsiona, se propaga solo.", "Troyano: se disfraza. Gusano: se propaga solo. Ransomware: cifra y extorsiona. Spyware: espía."],
      ["Nombra cuatro vías de entrada del malware.", "Adjuntos y enlaces de correos y mensajes, descargas no oficiales y programas piratas, memorias USB y vulnerabilidades sin actualizar."],
      ["¿Qué es el phishing y cómo se llama cuando llega por SMS y por teléfono?", "Suplantación de una entidad para robar datos o dinero. Smishing (SMS) y vishing (llamada)."],
      ["Indica cuatro características de una contraseña robusta.", "Larga (12 o más), impredecible (sin datos personales ni palabras sueltas), única para cada servicio y guardada en un gestor."],
      ["¿Qué son los tres tipos de factores de autenticación? Pon un ejemplo de cada uno.", "Algo que sabes (contraseña), algo que tienes (el móvil con un código) y algo que eres (huella dactilar)."],
      ["Explica la regla 3-2-1.", "Tres copias de los datos, en dos soportes distintos y una de ellas fuera de casa o en la nube."],
      ["Diferencia huella digital activa y pasiva con dos ejemplos de cada una.", "Activa: publicar una foto, escribir un comentario. Pasiva: el historial de navegación recogido por cookies, la ubicación registrada por una app."],
      ["Nombra los seis derechos sobre los datos personales del RGPD.", "Acceso, rectificación, supresión, oposición, limitación y portabilidad."],
      ["¿Qué significan las siglas BY, NC, ND y SA en Creative Commons?", "Reconocimiento (citar al autor), no comercial, sin obras derivadas y compartir igual."],
    ],
    m: [
      ["Analiza un correo que dice: «Hemos detectado un acceso inusual a tu cuenta de Instagram. Verifica tu identidad en las próximas 2 horas: instagram-verify.help». Indica las señales de fraude.", "Dominio no oficial (instagram-verify.help), urgencia (2 horas), miedo (acceso inusual) y petición de credenciales por enlace. Hay que entrar en la app oficial para revisar la actividad y no pulsar el enlace."],
      ["Calcula cuántas combinaciones tiene un PIN de 4 cifras y uno de 6. ¿Cuántas veces más seguro es el segundo frente a un ataque de fuerza bruta?", "10⁴ = 10 000 y 10⁶ = 1 000 000: 100 veces más combinaciones."],
      ["Explica por qué reutilizar contraseñas es peligroso aunque sean robustas.", "Si un servicio sufre una filtración, los delincuentes prueban automáticamente el mismo correo y contraseña en otros servicios (relleno de credenciales). Una sola filtración daría acceso a todas las cuentas."],
      ["Describe tres ventajas de usar un gestor de contraseñas.", "Genera contraseñas largas y aleatorias distintas para cada servicio, las recuerda por ti (solo hay que recordar la maestra) y autocompleta solo en el dominio correcto, lo que ayuda a evitar el phishing."],
      ["¿Qué harías si sospechas que tu ordenador tiene malware?", "Desconectarlo de la red, no introducir contraseñas, analizarlo con un antivirus actualizado (o desde un disco de rescate), eliminar lo detectado, cambiar desde otro dispositivo las contraseñas importantes y, si no se soluciona, restaurar el sistema desde una copia limpia."],
      ["Diferencia cifrado simétrico y asimétrico, con su principal ventaja e inconveniente.", "Simétrico: una sola clave compartida; muy rápido, pero hay que hacer llegar la clave de forma segura. Asimétrico: par de claves pública y privada; resuelve el reparto de claves y permite firmar, pero es más lento. HTTPS combina ambos."],
      ["¿Qué significa el cifrado de extremo a extremo en una app de mensajería?", "Que los mensajes se cifran en el dispositivo del emisor y solo se descifran en el del receptor: ni la empresa ni quien intercepte la comunicación puede leerlos."],
      ["Revisa los permisos que debería tener una app de mapas, una de linterna y una de mensajería.", "Mapas: ubicación mientras se usa. Linterna: ninguno especial (cámara para el flash, como mucho). Mensajería: contactos, micrófono y cámara si se usan las llamadas y fotos; ubicación solo al compartirla."],
      ["Una tienda en línea te pide la fecha de nacimiento, el DNI y la religión para enviarte un pedido. ¿Qué principio del RGPD incumple?", "El de minimización de datos: solo puede pedir los necesarios para la finalidad (nombre, dirección, pago). La religión, además, es un dato especialmente protegido."],
      ["Explica qué es el derecho al olvido con un ejemplo.", "El derecho a pedir que se supriman datos personales o que un buscador deje de mostrar enlaces a informaciones antiguas, inexactas o irrelevantes. Ejemplo: una persona pide que no aparezca, al buscar su nombre, una noticia de hace 15 años sobre una deuda ya pagada."],
      ["Un compañero crea un perfil falso de otro alumno y publica memes humillantes. ¿Qué tipo de conducta es y qué deberían hacer víctima y testigos?", "Es ciberacoso con suplantación de identidad. La víctima: guardar capturas, denunciar el perfil en la plataforma, contarlo a un adulto y al centro. Los testigos: no compartir ni reír, apoyar a la víctima y comunicarlo."],
      ["Indica tres señales de alerta de grooming.", "Un desconocido que dice tener tu edad y pide mantener la relación en secreto, hace regalos o promesas, y pide fotos o pasar a una aplicación privada."],
      ["Indica qué puedes hacer con una obra CC BY-NC-SA.", "Copiarla, distribuirla y modificarla citando al autor, sin fines comerciales, y compartiendo las obras derivadas con la misma licencia."],
      ["Propón cinco hábitos de bienestar digital para época de exámenes.", "Modo concentración y notificaciones desactivadas mientras se estudia; móvil en otra habitación; pausas activas cada 50 minutos; nada de pantallas una hora antes de dormir; límite diario de redes con la herramienta del móvil."],
    ],
    a: [
      ["Calcula el tiempo para probar todas las contraseñas de 8 caracteres con 95 símbolos a 10¹⁰ intentos por segundo, y para 12 caracteres.", "8: 95⁸ ≈ 6,6 · 10¹⁵ → 6,6 · 10⁵ s ≈ 7,7 días. 12: 95¹² ≈ 5,4 · 10²³ → 5,4 · 10¹³ s ≈ 1,7 millones de años. Cuatro caracteres más la hacen inexpugnable por fuerza bruta."],
      ["Evalúa el riesgo (probabilidad × impacto, escala 1-5) de tres amenazas para el ordenador de un estudiante y prioriza medidas.", "Robo de contraseña por phishing: 4 × 4 = 16. Pérdida de datos por avería: 3 × 5 = 15. Ransomware: 2 × 5 = 10. Prioridad: 2FA y gestor de contraseñas; copias 3-2-1; actualizaciones y antivirus."],
      ["Explica por qué una web de phishing puede tener candado y cómo se comprueba realmente que una web es la oficial.", "Cualquiera puede obtener un certificado gratuito para su propio dominio, por lo que el candado solo indica cifrado con ese dominio. Hay que comprobar el dominio exacto, llegar escribiendo la dirección o desde un marcador, y desconfiar de enlaces recibidos."],
      ["Explica qué es un hash y por qué se usa para guardar contraseñas en los servidores.", "Es una función que convierte cualquier dato en un resumen de longitud fija; es imposible en la práctica obtener el dato original a partir del resumen y un pequeño cambio produce un hash totalmente distinto. Los servidores guardan el hash (con una «sal» aleatoria) y no la contraseña: si los roban, no obtienen las contraseñas directamente."],
      ["Diseña un plan de respuesta ante un ataque de ransomware en el instituto.", "1) Aislar los equipos afectados de la red. 2) Avisar al responsable TIC y no pagar. 3) Identificar el alcance y el tipo de ransomware. 4) Notificar a INCIBE-CERT y, si hay datos personales afectados, a la AEPD en 72 horas. 5) Restaurar desde copias limpias y desconectadas. 6) Analizar cómo entró y reforzar formación, actualizaciones y copias."],
      ["Analiza la frase «No tengo nada que esconder, así que no me importa la privacidad».", "La privacidad no es esconder delitos sino controlar quién sabe qué de nosotros: datos de salud, ubicación, ideas o relaciones pueden usarse para discriminar, manipular, estafar o perfilar. Es un derecho fundamental que protege también la libertad de expresión y de pensamiento, y los datos de hoy pueden usarse mañana con otros fines."],
      ["Estudia un caso: un alumno sube a redes un vídeo grabado en clase en el que se burla de una profesora. Analiza las implicaciones legales, de convivencia y de identidad digital.", "Vulnera el derecho a la propia imagen y a la protección de datos de la profesora y puede incumplir las normas del centro (sanción). Es una falta de respeto que daña la convivencia y puede ser acoso. Queda en su huella digital y puede afectar a su reputación. Lo correcto: retirarlo, pedir disculpas y reparar el daño."],
      ["Redacta el aviso de licencia y créditos de un trabajo multimedia que usa una foto CC BY de un autor, una música de dominio público y textos propios que quieres compartir permitiendo modificaciones pero no usos comerciales.", "«Foto: Autor, “Título”, fuente, CC BY 4.0. Música: “Título”, compositor (dominio público). Textos y montaje: [nombre], CC BY-NC 4.0 (se permite compartir y modificar citando la autoría, sin fines comerciales).»"],
      ["Diseña una campaña de prevención del ciberacoso para 1º de ESO con tres acciones y un indicador para evaluarla.", "Acciones: taller entre iguales con casos reales anónimos; buzón digital anónimo de comunicación; decálogo de convivencia digital firmado por cada clase. Indicador: encuesta anónima antes y tres meses después sobre situaciones vividas o presenciadas y conocimiento de cómo actuar."],
      ["Investiga y explica cómo funciona una llave de acceso (passkey) y por qué resiste el phishing.", "El dispositivo crea un par de claves para cada web: la pública queda en el servidor y la privada en el dispositivo, protegida por biometría o PIN. Al iniciar sesión, el dispositivo firma un reto del servidor, y solo lo hace para el dominio real con el que se creó. Una web falsa no puede obtener la firma ni hay contraseña que robar."],
    ],
  },
  glosario: [
    ["Seguridad informática", "Medidas para proteger sistemas e información."],
    ["Vulnerabilidad", "Punto débil que puede aprovechar una amenaza."],
    ["Malware", "Software diseñado para causar daño o robar información."],
    ["Ransomware", "Malware que cifra los datos y pide un rescate."],
    ["Troyano", "Malware disfrazado de programa legítimo."],
    ["Ingeniería social", "Manipulación de personas para obtener información o acceso."],
    ["Phishing", "Suplantación de una entidad para robar datos."],
    ["Doble factor (2FA)", "Autenticación con dos tipos de prueba de identidad."],
    ["Gestor de contraseñas", "Programa que genera y guarda contraseñas de forma segura."],
    ["Copia de seguridad", "Duplicado de los datos para recuperarlos en caso de pérdida."],
    ["Cifrado", "Transformación de la información para que solo la lea quien tiene la clave."],
    ["Firma electrónica", "Mecanismo que garantiza autoría e integridad de un documento digital."],
    ["Identidad digital", "Conjunto de informaciones sobre una persona en internet."],
    ["Huella digital", "Rastro de datos que deja la actividad en la red."],
    ["Dato personal", "Información sobre una persona identificada o identificable."],
    ["Ciberacoso", "Acoso entre iguales mediante medios digitales."],
    ["Grooming", "Engaño de un adulto a un menor en la red con fines sexuales."],
    ["Creative Commons", "Licencias que permiten al autor autorizar ciertos usos de su obra."],
  ],
  situacion: {
    titulo: "Agentes de ciberseguridad del instituto",
    reto: "Por equipos, preparad una campaña de seguridad y ciudadanía digital para el centro, con un diagnóstico, materiales y un taller para alumnado de cursos inferiores.",
    pasos: [
      "Haced una encuesta anónima sobre hábitos de seguridad (contraseñas, 2FA, copias, privacidad, situaciones de acoso).",
      "Analizad los resultados con una hoja de cálculo y elegid los tres problemas principales.",
      "Investigad con fuentes fiables (INCIBE, AEPD) las medidas para cada problema.",
      "Cread materiales con licencia Creative Commons: infografía, vídeo corto y guía paso a paso.",
      "Impartid un taller práctico (configurar 2FA, revisar privacidad y permisos, detectar phishing).",
      "Evaluad el impacto con una segunda encuesta y redactad conclusiones.",
    ],
    producto: "Informe del diagnóstico, materiales de campaña con licencia CC, guion del taller y evaluación de resultados.",
    evaluacion: [
      "El diagnóstico se basa en datos bien recogidos y analizados.",
      "Las medidas propuestas son correctas, prácticas y están bien fundamentadas.",
      "Los materiales son claros, accesibles y respetan la propiedad intelectual.",
      "El equipo actúa con respeto, protege la privacidad de los encuestados y reflexiona sobre su propia huella digital.",
    ],
  },
  familias: [
    "Activad juntos la verificación en dos pasos en las cuentas importantes de la familia y usad un gestor de contraseñas.",
    "Acordad un plan familiar de copias de seguridad de fotos y documentos.",
    "Hablad de los fraudes por SMS y teléfono que os han llegado y de cómo reconocerlos.",
    "Pactad normas de uso de pantallas en casa (horarios, móvil fuera del dormitorio) y que sean para todos.",
  ],
  saberes: "Seguridad informática y ciudadanía digital: tríada de la seguridad, amenazas y vulnerabilidades, malware, ingeniería social y fraudes, contraseñas y autenticación, protección de equipos, copias de seguridad, cifrado y firma electrónica, seguridad en móviles, wifi e IoT, identidad y huella digital, protección de datos (RGPD y LOPDGDD), netiqueta, ciberacoso y otros riesgos, propiedad intelectual y licencias, bienestar digital (Tecnologías de la Información y la Comunicación I, optativa de 1º de Bachillerato de oferta autonómica en el marco del RD 243/2022; área de seguridad de DigComp).",
  ideas: [
    "Concurso de detección de phishing con capturas reales anonimizadas.",
    "Taller práctico para configurar 2FA, privacidad y permisos en los dispositivos del alumnado.",
    "Simulación de criptografía con cifrado César y después con un par de claves en papel.",
    "Debate con roles sobre privacidad y seguridad (víctima, empresa, policía, legislador).",
  ],
  fuentes: [
    B.INCIBE,
    B.AEPD,
    { t: "Creative Commons: sobre las licencias", url: "https://creativecommons.org/licenses/?lang=es" },
    { t: "INCIBE: Tu Ayuda en Ciberseguridad (017)", url: "https://www.incibe.es/linea-de-ayuda-en-ciberseguridad" },
  ],
}));
