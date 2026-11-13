// Digitalización 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Digitalización",
  curso: "4-eso",
  titulo: "Seguridad y privacidad digital",
  minutos: 40,
  objetivos: ["Reconocer las amenazas más comunes: malware, phishing y robo de cuentas", "Proteger dispositivos y cuentas con contraseñas fuertes y doble factor", "Cuidar los datos personales y configurar la privacidad"],
  claves: ["malware", "phishing", "contraseña", "doble factor", "datos personales", "cookies"],
  pregunta: {
    texto: "Te llega un SMS: «Tu paquete no se ha podido entregar. Paga 1,99 € aquí para recibirlo». No esperas ningún paquete. ¿Qué harías?",
    respuesta: "No tocar el enlace. Es un caso típico de <mark>phishing</mark> (smishing, por SMS): un engaño que se hace pasar por una empresa conocida para robarte los datos de la tarjeta o las contraseñas. Mete prisa y pide un pago pequeño para que no lo pienses. Lo correcto es borrarlo y, si dudas, entrar en la web oficial escribiendo tú la dirección.",
  },
  bloques: [
    {
      html: `<h3>Las amenazas</h3><p>Se llama <b>malware</b> a cualquier programa malicioso: <b>virus</b> (se pegan a otros archivos), <b>gusanos</b> (se copian solos por la red), <b>troyanos</b> (parecen útiles pero abren la puerta al atacante), <b>espías</b> (spyware) y <mark>ransomware</mark>, que cifra tus archivos y pide un rescate. Entran sobre todo por descargas de sitios no oficiales, archivos adjuntos y enlaces trampa, y aprovechan programas sin actualizar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tipos de malware: virus, gusano, troyano, espía y ransomware">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="130" cy="86" r="30" fill="var(--red)"/>${Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return `<path d="M${130 + 30 * Math.cos(a)} ${86 + 30 * Math.sin(a)} L ${130 + 40 * Math.cos(a)} ${86 + 40 * Math.sin(a)}" stroke="var(--red)" stroke-width="4"/>`; }).join("")}
        <text x="130" y="91" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>malware</text>
        ${[["virus", 44, 30], ["gusano", 216, 30], ["troyano", 40, 150], ["espía", 220, 150], ["ransomware", 130, 172]].map(([t, x, y]) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
        <path d="M60 38 L 100 64 M200 38 L 160 64 M60 140 L 102 104 M200 140 L 158 104 M130 128 V 158" stroke="var(--line)" stroke-width="2"/>
      </svg>`,
    },
    {
      html: `<h3>El engaño: phishing e ingeniería social</h3><p>Muchos ataques no rompen nada: <b>engañan a las personas</b>. Es la <b>ingeniería social</b>. El <mark>phishing</mark> llega por correo, SMS o mensajería haciéndose pasar por un banco, una tienda, una red social o un amigo. Pistas para detectarlo: <b>urgencia</b> («tu cuenta se bloqueará hoy»), premios demasiado buenos, faltas de ortografía, remitente o enlace con una dirección rara y peticiones de contraseñas o códigos. Ninguna empresa seria te pedirá tu contraseña por mensaje.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Mensaje falso con señales de alerta: urgencia, enlace raro y petición de datos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="20" width="150" height="140" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        <g ${F} font-size="10"><text x="30" y="40" font-weight="700" fill="var(--ink)">Banco Seguro</text><text x="30" y="62" fill="var(--red)" font-weight="700">¡URGENTE! Bloqueo hoy</text><text x="30" y="84" fill="var(--ink)">Verifica tu cuenta:</text><text x="30" y="102" fill="var(--pen)" text-decoration="underline">bnco-seguro.xyz</text><text x="30" y="124" fill="var(--ink)">Escribe tu clave y</text><text x="30" y="140" fill="var(--ink)">el código del SMS</text></g>
        ${[[58, "urgencia"], [98, "enlace raro"], [132, "pide datos"]].map(([y, t]) => `<circle cx="186" cy="${y}" r="9" fill="var(--sun)"/><text x="186" y="${y + 4}" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>!</text><text x="198" y="${y + 4}" font-size="9" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>Contraseñas fuertes y doble factor</h3><p>Una buena contraseña es <b>larga</b> (12 caracteres o más), <b>única</b> para cada servicio y difícil de adivinar: nada de fechas de nacimiento ni «123456». Un truco es usar una <b>frase de paso</b> con varias palabras, números y símbolos. Un <b>gestor de contraseñas</b> las recuerda por ti. Y lo más eficaz es activar la <mark>verificación en dos pasos</mark> (2FA): además de la contraseña, se pide un código del móvil o una llave, así que aunque roben la clave no podrán entrar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos pasos para entrar: contraseña larga y código en el móvil">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="16" y="50" width="120" height="30" rx="6" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="26" y="70" font-size="12" fill="var(--pen)" ${F}>••••••••••••••</text>
        <text x="16" y="40" font-size="10" font-weight="700" fill="var(--ink)" ${F}>1. contraseña larga</text>
        <rect x="176" y="32" width="54" height="94" rx="9" fill="var(--ink)"/><rect x="182" y="42" width="42" height="72" rx="3" fill="var(--paper)"/><text x="203" y="84" text-anchor="middle" font-size="10" font-weight="700" fill="var(--leaf)" ${F}>482913</text>
        <text x="203" y="144" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)" ${F}>2. código</text>
        <path d="M140 66 H 168" stroke="var(--ink)" stroke-width="2.5"/><path d="M164 61 L 170 66 L 164 71" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        <rect x="20" y="110" width="110" height="44" rx="8" fill="var(--leaf)"/><text x="75" y="130" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>larga · única</text><text x="75" y="145" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>+ 2FA activado</text>
      </svg>`,
    },
    {
      html: `<h3>Proteger los dispositivos</h3><p>Medidas básicas: mantener <b>actualizados</b> el sistema y las aplicaciones; descargar apps solo de <b>tiendas oficiales</b> y revisar los <b>permisos</b> que piden (¿una linterna necesita tus contactos?); usar un <b>antivirus</b> y el cortafuegos; bloquear la pantalla con PIN o huella; desconfiar de los <mark>wifi públicos</mark> abiertos para cosas importantes y comprobar que las webs donde escribes datos usan <b>HTTPS</b> (el candado). Y hacer copias de seguridad por si algo falla.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escudo rodeado de medidas: actualizar, tienda oficial, permisos, bloqueo y HTTPS">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 30 L 168 44 V 86 C 168 112 150 128 130 138 C 110 128 92 112 92 86 V 44 Z" fill="var(--pen)"/><path d="M114 84 L 126 96 L 148 72" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
        <g ${F} font-size="10" font-weight="700" fill="var(--ink)"><text x="16" y="44">actualizar</text><text x="16" y="88">tienda oficial</text><text x="16" y="132">bloqueo PIN</text><text x="184" y="44">permisos</text><text x="184" y="88">antivirus</text><text x="184" y="132">HTTPS 🔒</text></g>
        <text x="130" y="166" text-anchor="middle" font-size="10" fill="var(--muted)" ${F}>varias capas de protección</text>
      </svg>`,
    },
    {
      html: `<h3>Datos personales y privacidad</h3><p>Son <b>datos personales</b> el nombre, la foto, la dirección, el teléfono, la ubicación, la voz o lo que buscas. Las empresas los recogen, a veces con <b>cookies</b> que siguen lo que haces en la web, para mostrarte publicidad. En Europa, el <mark>Reglamento General de Protección de Datos</mark> (RGPD) obliga a pedir tu consentimiento y te da derechos: acceder a tus datos, corregirlos, borrarlos u oponerte a su uso. En España, hasta los <b>14 años</b> hace falta el permiso de los padres para que una red social trate tus datos. Revisa la configuración de privacidad y comparte lo mínimo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Datos personales alrededor de una persona y el escudo del RGPD">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="130" cy="70" r="18" fill="var(--ink)"/><path d="M100 118 C 100 96 160 96 160 118 Z" fill="var(--ink)"/>
        ${[["nombre", 40, 36], ["ubicación", 220, 36], ["fotos", 34, 96], ["búsquedas", 222, 96], ["teléfono", 54, 146], ["cookies", 206, 146]].map(([t, x, y]) => `<rect x="${x - 32}" y="${y - 13}" width="64" height="20" rx="10" fill="var(--card)" stroke="var(--inf)" stroke-width="2"/><text x="${x}" y="${y + 1}" text-anchor="middle" font-size="9" fill="var(--ink)" ${F}>${t}</text>`).join("")}
        <rect x="104" y="134" width="52" height="24" rx="6" fill="var(--leaf)"/><text x="130" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>RGPD</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Cinco hábitos que evitan la mayoría de los problemas",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Cinco hábitos de seguridad: actualizar, contraseñas únicas, doble factor, desconfiar de enlaces y copias de seguridad">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Actualizar", "sistema y apps", "var(--pen)"], ["Claves únicas", "largas y distintas", "var(--sun)"], ["Doble factor", "código o llave", "var(--leaf)"], ["Desconfiar", "de enlaces y prisas", "var(--red)"], ["Copias", "3-2-1", "var(--inf)"]]
        .map(([n, d, c], i) => `<rect x="${14 + i * 124}" y="30" width="114" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <circle cx="${71 + i * 124}" cy="78" r="22" fill="${c}"/><text x="${71 + i * 124}" y="86" text-anchor="middle" font-size="22" font-weight="700" fill="#fff" ${D}>${i + 1}</text>
          <text x="${71 + i * 124}" y="132" text-anchor="middle" font-size="14" font-weight="700" fill="${c}" ${F}>${n}</text>
          <text x="${71 + i * 124}" y="156" text-anchor="middle" font-size="11" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "2TferQprZ0g", titulo: "Las 10 claves para usar Internet con seguridad", canal: "PantallasAmigas", vistas: 2233145, megusta: 0, busqueda: "seguridad en internet adolescentes claves" },
  quiz: [
    { q: "El malware que cifra tus archivos y pide un rescate es…", o: ["un gusano", "ransomware", "spyware"], a: 1, e: "Ransom significa rescate en inglés." },
    { q: "¿Cuál es una señal típica de phishing?", o: ["Un mensaje que mete prisa y pide tu contraseña", "Una web con HTTPS", "Un aviso de actualización en los ajustes del sistema"], a: 0, e: "Urgencia + petición de datos = alarma." },
    { q: "¿Qué contraseña es más segura?", o: ["123456", "Lucas2010", "Tortuga-azul-come-7-fresas!"], a: 2, e: "Larga, con palabras sin relación, números y símbolos." },
    { q: "La verificación en dos pasos sirve para…", o: ["recordar la contraseña", "que no basten tu contraseña para entrar si te la roban", "navegar más rápido"], a: 1, e: "Hace falta además un código o un dispositivo tuyo." },
    { q: "¿Qué ley europea protege tus datos personales?", o: ["El RGPD", "El REBT", "El TCP/IP"], a: 0, e: "Reglamento General de Protección de Datos." }
  ],
  examen: [
    { q: "Un programa que parece un juego gratis pero da el control del móvil a un atacante es un…", o: ["troyano", "antivirus", "cortafuegos"], a: 0, e: "Como el caballo de Troya: un regalo con sorpresa." },
    { q: "Una app de linterna pide acceso a tus contactos y micrófono. ¿Qué haces?", o: ["Aceptar, es normal", "Desconfiar y no instalarla o denegar permisos", "Instalarla dos veces"], a: 1, e: "Los permisos deben tener sentido con lo que hace la app." },
    { q: "En España, ¿desde qué edad puedes dar tú solo el consentimiento a una red social?", o: ["12 años", "14 años", "18 años"], a: 1, e: "Por debajo de 14 hace falta el permiso de padres o tutores." },
  ],
  feynman: ["Los tipos de malware y cómo entran", "Cómo reconocer un mensaje de phishing", "Cómo crear contraseñas fuertes y para qué sirve el doble factor", "Las medidas básicas para proteger un móvil", "Qué son los datos personales y qué derechos da el RGPD"],
  mapa: mapa("SEGURIDAD Y PRIVACIDAD", "var(--eso)", [
    ["Amenazas", "virus · troyano · ransomware", "var(--red)"],
    ["Engaños", "phishing · ingeniería social", "var(--sun)"],
    ["Protección", "claves · 2FA · actualizar", "var(--leaf)"],
    ["Privacidad", "datos · cookies · RGPD", "var(--pen)"],
  ], 250),
  tarjetas: [
    ["¿Qué es el phishing?", "Un engaño que suplanta a una empresa o persona para robar datos."],
    ["¿Qué es el ransomware?", "Malware que cifra tus archivos y pide un rescate."],
    ["¿Qué es la 2FA?", "Verificación en dos pasos: contraseña más un código o dispositivo."],
    ["¿Qué significa el candado HTTPS?", "Que la conexión con esa web va cifrada."],
    ["Cuatro derechos del RGPD", "Acceder, corregir, borrar y oponerte al uso de tus datos."],
  ],
  familias: ["Activad juntos la verificación en dos pasos en una cuenta importante de casa.", "Buscad un mensaje sospechoso real en el móvil y señalad las pistas de phishing.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Seguridad de dispositivos y de datos: amenazas, medidas de protección, contraseñas y autenticación; protección de datos personales y privacidad (RD 217/2022, Digitalización 4º).",
    ideas: ["Concurso para detectar mensajes de phishing reales anonimizados.", "Comprobar en haveibeenpwned si un correo de prueba aparece en filtraciones.", "Revisar en parejas la configuración de privacidad de una red social."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "INCIBE, Oficina de Seguridad del Internauta", url: "https://www.incibe.es/ciudadania" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Navegar con seguridad en redes públicas y entender el cifrado", "Saber cómo actuar ante un ciberataque o un ciberdelito"],
  tras: {
    "El engaño: phishing e ingeniería social": [
      { html: `<h3>Las técnicas de la ingeniería social</h3><p>La <b>ingeniería social</b> ataca a las personas en vez de a las máquinas: busca que la víctima entregue sus datos o instale algo por confianza, miedo o prisa. Además del phishing por correo, existen el <b>smishing</b> (por SMS, como el falso aviso de un paquete), el <b>vishing</b> (por llamada, alguien que dice ser del banco o del soporte técnico) y la <b>suplantación</b> de amigos o familiares por WhatsApp («Mamá, se me ha roto el móvil, hazme un bizum»). Las señales de alarma se repiten: <mark>urgencia, petición de datos o dinero</mark>, enlaces raros y un remitente que no encaja. Ante la duda, se corta y se contacta por otra vía con la persona o la empresa.</p>`, video: { id: "PN0j35dbG-8", titulo: "¿Sabes qué es ingeniería social?", canal: "Computer Hoy", vistas: 52917 } },
    ],
    "Proteger los dispositivos": [
      { html: `<h3>Cifrado, HTTPS y redes públicas</h3><p><b>Cifrar</b> es transformar la información para que solo pueda leerla quien tiene la clave. Las webs con <b>HTTPS</b> (el candado del navegador) cifran los datos entre tu equipo y el servidor, y las aplicaciones de mensajería con <b>cifrado de extremo a extremo</b> hacen que ni la propia empresa pueda leer los mensajes. Las <b>wifi públicas</b> abiertas de cafeterías o aeropuertos son arriesgadas: otra persona conectada podría espiar el tráfico no cifrado o crear una red falsa con el mismo nombre. En ellas conviene <mark>no hacer gestiones bancarias</mark>, usar los datos móviles para lo importante o una <b>VPN</b>, que crea un túnel cifrado.</p>`, video: { id: "8EQKaVCuGaY", titulo: "Qué es una VPN y cómo funciona", canal: "VPNpro en Español", vistas: 565138 } },
      { html: `<h3>Ransomware y recuperación</h3><p>El <b>ransomware</b> cifra los archivos de la víctima y pide un rescate, normalmente en criptomonedas, para devolverlos. Ha paralizado hospitales, ayuntamientos y empresas. Pagar no garantiza recuperar los datos y financia a los delincuentes. La mejor defensa es tener <mark>copias de seguridad desconectadas</mark> del equipo, mantener el sistema actualizado y no abrir adjuntos sospechosos. Si un equipo se infecta: desconectarlo de la red, no pagar, avisar al responsable o a un adulto, y restaurar desde la copia tras limpiar o reinstalar el sistema.</p>` },
    ],
    "Datos personales y privacidad": [
      { html: `<h3>Ciberdelitos: cómo actuar y denunciar</h3><p>Muchas conductas en Internet son <b>delitos</b>: acceder a la cuenta de otra persona, suplantar su identidad, difundir fotos íntimas sin permiso, estafar o amenazar. Si eres víctima: <b>no borres nada</b> y guarda pruebas (capturas con fecha, enlaces, nombres de usuario); cambia las contraseñas y activa el doble factor; cuéntaselo a un adulto de confianza; y <b>denuncia</b> ante la Policía Nacional, la Guardia Civil o la policía autonómica. En España, el <b>INCIBE</b> atiende gratis el teléfono <mark>017</mark> para dudas de ciberseguridad, y la Agencia de Protección de Datos tiene un canal prioritario para retirar contenidos sensibles.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Recibes un SMS: «Su paquete está retenido. Pague 1,99 € de tasas aquí: bit.ly/…». ¿Qué haces?", pasos: ["Señales: urgencia, pago pequeño y enlace acortado que oculta el destino.", "No pulses el enlace: el objetivo es robar los datos de la tarjeta.", "Si esperas un paquete, consulta en la web oficial de la empresa escribiendo tú la dirección. Borra el SMS."], resultado: "Es smishing: no abrir el enlace y comprobar por la vía oficial." },
    { enunciado: "Estás en la wifi abierta de un aeropuerto y necesitas mirar tu banco. ¿Cómo lo haces con seguridad?", pasos: ["Una red abierta puede estar espiada o ser falsa.", "Desactiva la wifi y usa los datos móviles.", "Si no tienes datos, usa una VPN y comprueba que la web tiene HTTPS."], resultado: "Datos móviles, o VPN y HTTPS si no hay otra opción." },
    { enunciado: "Alguien ha entrado en tu cuenta de Instagram y publica en tu nombre. Ordena los pasos.", pasos: ["Recupera la cuenta con la opción oficial y cambia la contraseña.", "Activa la verificación en dos pasos y cierra las sesiones abiertas.", "Guarda capturas de lo publicado, avisa a tus contactos y denuncia si hay suplantación o daños."], resultado: "Recuperar, proteger, guardar pruebas, avisar y denunciar." },
  ],
  errores: [
    "Pensar que el candado de HTTPS garantiza que la web es honrada: solo indica que la conexión está cifrada.",
    "Hacer compras o gestiones bancarias en una wifi pública abierta.",
    "Pagar el rescate de un ransomware confiando en recuperar los archivos.",
    "Borrar los mensajes de un acoso o una estafa antes de guardar pruebas.",
    "Fiarse de un mensaje porque parece venir de un amigo o de un familiar.",
  ],
  ejercicios: [
    { q: "Explica la diferencia entre virus, troyano y ransomware.", sol: "El virus se copia en otros archivos; el troyano se disfraza de programa útil para abrir la puerta al atacante; el ransomware cifra los archivos y pide un rescate." },
    { q: "Define phishing, smishing y vishing.", sol: "Engaños para robar datos por correo electrónico, por SMS y por llamada telefónica, respectivamente." },
    { q: "Indica cuatro señales de que un mensaje puede ser un fraude.", sol: "Urgencia o amenazas, petición de datos o dinero, enlaces o remitente extraños y faltas de ortografía o un saludo genérico." },
    { q: "¿Es segura la contraseña «Laura2009»? Propón una mejor.", sol: "No: usa un nombre y un año fáciles de adivinar. Mejor una frase larga con símbolos, como «Mi-gato-come-3-pizzas!»." },
    { q: "¿Qué es la autenticación en dos factores y por qué protege?", sol: "Pide, además de la contraseña, un segundo elemento (código en el móvil, huella). Aunque roben la contraseña, no pueden entrar sin él." },
    { q: "¿Qué indica el candado y el HTTPS en el navegador?", sol: "Que la comunicación con la web va cifrada; no garantiza que la web sea fiable." },
    { q: "Indica tres precauciones al usar una wifi pública.", sol: "No hacer gestiones bancarias ni compras, usar VPN o datos móviles y comprobar que la red es la oficial (y desactivar el uso compartido)." },
    { q: "¿Qué harías si un ransomware cifra el ordenador de casa?", sol: "Desconectarlo de la red, no pagar, avisar, y restaurar los archivos desde una copia de seguridad tras limpiar el sistema." },
    { q: "¿Qué es el 017 y quién lo atiende?", sol: "La línea gratuita de ayuda en ciberseguridad del INCIBE." },
    { q: "Indica tres datos personales que no deberías publicar en un perfil abierto.", sol: "Dirección, teléfono y centro de estudios (también DNI, ubicación en tiempo real o datos bancarios)." },
  ],
  quiz: [
    { q: "Un SMS falso de una empresa de paquetería es un caso de…", o: ["smishing", "spam legal", "cookie"], a: 0, e: "Phishing por SMS." },
    { q: "Una VPN…", o: ["crea un túnel cifrado", "acelera siempre la conexión", "elimina los virus"], a: 0, e: "Útil en redes públicas." },
    { q: "El ransomware…", o: ["muestra publicidad", "cifra los archivos y pide un rescate", "acelera el ordenador"], a: 1, e: "La defensa: copias desconectadas." },
    { q: "Si sufres un ciberdelito, lo primero es…", o: ["borrarlo todo", "guardar pruebas", "responder al agresor"], a: 1, e: "Capturas con fecha y enlaces." },
    { q: "El teléfono 017 es de…", o: ["el INCIBE", "Hacienda", "la DGT"], a: 0, e: "Ayuda gratuita en ciberseguridad." },
  ],
  tarjetas: [
    ["Ingeniería social", "Engaño que manipula a las personas para que entreguen datos o accesos."],
    ["VPN", "Conexión cifrada que protege el tráfico, útil en redes públicas."],
    ["Ransomware", "Malware que cifra los archivos y pide un rescate."],
  ],
});

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 100,
  revisado: "2026-11-13",
  lectura: {
    titulo: "El hospital que volvió al papel",
    html: `<p>Un lunes por la mañana, los ordenadores de un hospital europeo mostraron el mismo mensaje: «Sus archivos han sido cifrados. Pague en criptomonedas para recuperarlos». Las historias clínicas, las citas y los resultados de análisis quedaron bloqueados. Durante días, médicos y enfermeras trabajaron con papel y bolígrafo, y algunas operaciones se aplazaron. Todo empezó con un correo aparentemente normal que alguien abrió con prisa.</p>
      <p>La ciberseguridad no es solo cosa de expertos con capucha frente a pantallas negras. La mayoría de los ataques aprovechan un descuido humano: una contraseña repetida, un enlace pulsado sin pensar, una actualización aplazada o una foto que revela más de lo que parece. En este tema conocerás cómo actúan los atacantes, cómo funciona el cifrado que protege tus mensajes y pagos, qué rastro dejas al navegar y qué herramientas tienes para defenderte. Saber protegerte es también proteger a tu familia, a tus amigos y a tu centro.</p>`,
  },
  svgs: {
    "Las técnicas de la ingeniería social": L.estrella("Emociones que explota la ingeniería social", "Engaño", ["prisa", "miedo", "curiosidad", "autoridad", "codicia", "confianza"]),
    "Cifrado, HTTPS y redes públicas": L.flujo("Conexión HTTPS: el texto se cifra, viaja ilegible y se descifra en el servidor", ["Escribes tu contraseña", "El navegador la cifra (HTTPS)", "Viaja como texto ilegible", "El servidor la descifra"], { t: "Qué hace el candado" }),
    "Ransomware y recuperación": L.flujo("Qué hacer ante un ransomware", ["Desconectar de la red", "No pagar el rescate", "Avisar y denunciar", "Limpiar o reinstalar", "Restaurar la copia"], { t: "Plan ante un ransomware" }),
    "Ciberdelitos: cómo actuar y denunciar": L.cajas("Dónde pedir ayuda ante un ciberdelito", [["017", "INCIBE: ayuda|gratuita"], ["Pruebas", "capturas con|fecha y enlace"], ["Denuncia", "Policía o|Guardia Civil"], ["Plataforma", "bloquear|y reportar"]], { t: "Cómo actuar" }),
  },
  tras: {
    "Las amenazas": [
      {
        html: `<h3>Cómo se infecta un dispositivo</h3><p>El malware necesita una puerta de entrada, llamada <b>vector de ataque</b>. Las más habituales son los <b>archivos adjuntos</b> de correos falsos (una factura en .zip o un documento con macros), los <b>enlaces</b> a webs fraudulentas, las <b>descargas</b> de programas pirata o de tiendas no oficiales, las <b>memorias USB</b> que alguien conecta sin saber de dónde vienen y los anuncios maliciosos. También existen ataques que no necesitan que hagas nada: aprovechan una <mark>vulnerabilidad</mark>, un fallo de seguridad de un programa que aún no se ha corregido. El código que la explota se llama <i>exploit</i>.</p>
          <p>Una vez dentro, el malware puede robar contraseñas, espiar con la cámara, cifrar archivos o convertir el equipo en un <b>zombi</b> que forma parte de una <b>botnet</b>: una red de miles de dispositivos controlados a distancia que se usan para enviar spam o tumbar webs con ataques de denegación de servicio (DDoS). Otros instalan <b>mineros</b> de criptomonedas que gastan la batería y la electricidad del usuario. Señales de alarma: el equipo va lento sin motivo, la batería dura poco, aparecen ventanas o programas desconocidos o tus contactos reciben mensajes que no has enviado.</p>`,
        svg: L.cajas("Vías de entrada del malware", [["Adjuntos", "facturas falsas|.zip, macros"], ["Enlaces", "webs|fraudulentas"], ["Descargas", "apps pirata|o no oficiales"], ["Vulnerabilidad", "programa sin|actualizar"]], { t: "Por dónde entra" }),
      },
    ],
    "Contraseñas fuertes y doble factor": [
      {
        html: `<h3>Gestores de contraseñas y llaves de acceso</h3><p>Nadie puede recordar cincuenta contraseñas largas y distintas. La solución es un <b>gestor de contraseñas</b> (Bitwarden, KeePassXC o el del propio navegador o sistema): una caja fuerte cifrada que genera contraseñas aleatorias, las guarda y las rellena por ti. Solo tienes que recordar una <mark>contraseña maestra</mark>, que debe ser muy fuerte y no usarse en ningún otro sitio, y proteger el gestor con doble factor. Además, el gestor solo rellena la contraseña en la web auténtica, lo que ayuda a detectar páginas falsas.</p>
          <p>¿Por qué no repetir contraseñas? Porque las webs sufren <b>filtraciones</b>: si roban la base de datos de un foro donde usabas la misma clave que en tu correo, los atacantes la prueban automáticamente en otros servicios. Webs como «Have I Been Pwned» permiten comprobar si tu correo aparece en alguna filtración. El futuro son las <b>llaves de acceso</b> o <i>passkeys</i>: en lugar de una contraseña, el móvil guarda una clave criptográfica que se desbloquea con la huella, la cara o el PIN. No se puede adivinar, no se puede reutilizar y no sirve en una web falsa, así que acaba con gran parte del phishing.</p>`,
        svg: L.comparar("Contraseña repetida frente a gestor de contraseñas", ["Repetida", ["una clave para todo", "filtran un foro…", "…entran en el correo", "efecto dominó"]], ["Con gestor", ["una distinta en cada web", "aleatorias y largas", "solo recuerdas una", "filtración aislada"]]),
      },
    ],
    "Proteger los dispositivos": [
      {
        html: `<h3>Antivirus, cortafuegos y actualizaciones</h3><p>Los sistemas operativos actuales incluyen un <b>antivirus</b> (por ejemplo, Microsoft Defender) que analiza los archivos y compara su código con una base de datos de <b>firmas</b> de malware conocido. Como cada día aparecen variantes nuevas, también vigila el <b>comportamiento</b>: si un programa empieza a cifrar cientos de archivos de golpe, lo bloquea aunque no lo conozca. Un antivirus solo sirve si está actualizado y nunca es infalible: el mejor antivirus sigue siendo el sentido común.</p>
          <p>El <b>cortafuegos</b> o <i>firewall</i> es un filtro entre tu equipo y la red. Revisa las conexiones que entran y salen y bloquea las que no están permitidas, como una puerta con portero. El router de casa también tiene uno. Las <b>actualizaciones</b> son la medida más importante: corrigen las vulnerabilidades que los atacantes aprovechan. Cuando un fabricante publica un parche, los delincuentes estudian qué arreglaba y atacan a quienes aún no lo han instalado. Por eso conviene activar las actualizaciones automáticas y no usar dispositivos que ya no reciben parches, como móviles con más de cinco o seis años. Las copias de seguridad, el cifrado del disco y el bloqueo de pantalla completan la protección.</p>`,
        svg: L.capas("Capas de protección de un dispositivo", [["Sentido común", "pensar antes de pulsar"], ["Actualizaciones", "cierran fallos"], ["Antivirus", "firmas y conducta"], ["Cortafuegos", "filtra la red"], ["Copias", "último recurso"]], { t: "Defensa por capas" }),
      },
    ],
    "Cifrado, HTTPS y redes públicas": [
      {
        html: `<h3>Cómo funciona el cifrado</h3><p>El cifrado es muy antiguo. Julio César desplazaba cada letra tres posiciones en el alfabeto: la A se convertía en D y la B en E. Es un <b>cifrado simétrico</b>: emisor y receptor usan <mark>la misma clave</mark> (desplazar 3) para cifrar y descifrar. Los sistemas modernos, como AES, siguen esa idea, pero con claves de 128 o 256 bits: probar todas las combinaciones llevaría miles de millones de años incluso a un superordenador. Su problema es cómo hacer llegar la clave al otro sin que nadie la intercepte.</p>
          <p>La solución es el <b>cifrado asimétrico</b> o de clave pública. Cada persona tiene dos claves relacionadas matemáticamente: una <b>pública</b>, que puede conocer todo el mundo, y una <b>privada</b>, que solo tiene ella. Lo que se cifra con la pública solo se puede descifrar con la privada, como un buzón en el que cualquiera puede echar cartas pero solo el dueño tiene la llave. HTTPS combina los dos: usa el asimétrico para acordar una clave secreta y después el simétrico, que es más rápido. El mismo sistema, al revés, sirve para la <b>firma digital</b>: el DNI electrónico o el certificado digital garantizan quién firma un documento y que nadie lo ha cambiado.</p>`,
        svg: L.comparar("Cifrado simétrico frente a asimétrico", ["Simétrico", ["una sola clave", "César, AES", "muy rápido", "¿cómo pasar la clave?"]], ["Asimétrico", ["pública + privada", "como un buzón", "más lento", "firma digital"]]),
      },
    ],
    "Datos personales y privacidad": [
      {
        html: `<h3>Cookies y rastreo en la web</h3><p>Una <b>cookie</b> es un pequeño archivo que una web guarda en tu navegador. Las <b>cookies propias</b> o técnicas son útiles: recuerdan que has iniciado sesión o lo que hay en tu carrito. Las <b>cookies de terceros</b> las ponen empresas de publicidad presentes en muchas webs distintas; así pueden seguirte de página en página y construir un <mark>perfil</mark> con tus gustos, tu edad aproximada o tu ubicación para venderte anuncios personalizados. Por ley, las webs deben pedir tu consentimiento para las cookies no necesarias, y puedes rechazarlas.</p>
          <p>Hay otras formas de rastreo: la <b>huella del navegador</b> (la combinación única de tu navegador, tamaño de pantalla, fuentes e idioma), los píxeles invisibles en los correos, la ubicación del móvil o los identificadores publicitarios de las apps. El <b>modo incógnito</b> solo evita que el historial y las cookies se guarden en tu propio dispositivo: tu proveedor de Internet, tu centro o las webs que visitas siguen viendo lo que haces. Para reducir el rastreo puedes rechazar cookies de terceros, usar navegadores o extensiones que bloquean rastreadores y revisar el identificador publicitario del móvil. Si un servicio es gratis, conviene preguntarse cómo gana dinero: a menudo, con tus datos.</p>`,
        svg: L.flujo("Cómo una cookie de terceros construye un perfil publicitario", ["Visitas una web de deportes", "Una cookie de terceros te marca", "Visitas una tienda y un periódico", "La empresa une tus visitas", "Te muestra anuncios a medida"], { t: "Te siguen de web en web" }),
      },
      {
        html: `<h3>Configurar la privacidad</h3><p>La privacidad se defiende sobre todo en los <b>ajustes</b>. En el móvil, revisa los <b>permisos</b> de cada aplicación: ubicación, cámara, micrófono, contactos y fotos. Elige «solo mientras se usa la app» para la ubicación y quita los permisos que no tengan sentido. En las redes sociales, pon la cuenta en <b>privada</b>, decide quién puede etiquetarte, mencionarte o escribirte y desactiva que te encuentren por tu número de teléfono. Revisa de vez en cuando qué aplicaciones externas tienen acceso a tu cuenta de Google, Apple o la red social y elimina las que ya no uses.</p>
          <p>Ojo con los <b>metadatos</b>: muchas fotos guardan dentro la fecha, el modelo del móvil y las <mark>coordenadas GPS</mark> exactas donde se hicieron. Antes de publicar desde casa, comprueba que esa información no se comparte. Una foto también puede revelar datos por lo que se ve: el uniforme del instituto, el número del portal, una matrícula o una tarjeta de embarque con un código que contiene tu nombre y tu reserva. Aplica el principio de <b>minimización</b>: da a cada servicio solo los datos imprescindibles y usa un correo secundario para registrarte en webs de poca confianza. Y recuerda que la privacidad de los demás también importa: pide permiso antes de publicar fotos de otras personas.</p>`,
        svg: L.rejilla("Permisos recomendados para algunas aplicaciones", ["App", "Ubicación", "Micrófono", "Contactos"], [["Mapas", "al usarla", "no", "no"], ["Mensajería", "no", "al usarla", "sí"], ["Linterna", "no", "no", "no"], ["Juego", "no", "no", "no"]], { t: "Permisos con sentido" }),
      },
    ],
  },
  secciones: [4, 7, 4],
  niveles: "bbbmmbbmbb",
  ejercicios: [
    { nivel: "básico", q: "Nombra cuatro vías por las que el malware puede entrar en un dispositivo.", sol: "Archivos adjuntos de correos falsos, enlaces a webs fraudulentas, descargas de programas pirata o de tiendas no oficiales, memorias USB desconocidas y vulnerabilidades de programas sin actualizar." },
    { nivel: "básico", q: "¿Qué es un cortafuegos? Explícalo con una comparación.", sol: "Es un filtro entre el equipo y la red que deja pasar o bloquea conexiones según unas reglas, como un portero que solo deja entrar a quien está en la lista." },
    { nivel: "básico", q: "Cifra la palabra HOLA con el cifrado César de desplazamiento 3.", sol: "H → K, O → R, L → O, A → D: KROD." },
    { nivel: "básico", q: "¿Qué diferencia hay entre una cookie propia y una de terceros?", sol: "La propia la pone la web que visitas para que funcione (sesión, carrito). La de terceros la pone otra empresa, normalmente de publicidad, para seguirte por muchas webs." },
    { nivel: "básico", q: "¿Qué es una botnet?", sol: "Una red de dispositivos infectados (zombis) controlados a distancia por un atacante, que los usa para enviar spam o atacar webs." },
    { nivel: "medio", q: "Descifra «FDVD» sabiendo que se ha usado César con desplazamiento 3.", sol: "Se retrocede 3 posiciones: F → C, D → A, V → S, D → A: CASA." },
    { nivel: "medio", q: "Explica con la metáfora del buzón cómo funciona el cifrado asimétrico.", sol: "La clave pública es la ranura del buzón: cualquiera puede echar una carta (cifrar). La clave privada es la llave: solo el dueño puede abrirlo y leerla (descifrar)." },
    { nivel: "medio", q: "¿Por qué es peligroso usar la misma contraseña en varias webs?", sol: "Si una web sufre una filtración, los atacantes prueban esa contraseña en otros servicios (correo, redes, banco) y entrarían en todos. Una contraseña distinta en cada web limita el daño a un solo servicio." },
    { nivel: "medio", q: "¿Qué ventajas tiene un gestor de contraseñas? ¿Qué precaución hay que tener?", sol: "Genera y guarda contraseñas largas y únicas, las rellena solo en la web auténtica y solo hay que recordar una. Precaución: la contraseña maestra debe ser muy fuerte y única, y el gestor debe tener doble factor." },
    { nivel: "medio", q: "¿Por qué los ataques aumentan justo después de que un fabricante publica una actualización?", sol: "Los delincuentes analizan qué fallo corrige el parche y crean ataques contra los equipos que todavía no se han actualizado." },
    { nivel: "medio", q: "Un amigo cree que el modo incógnito le hace invisible en Internet. Explícale qué hace y qué no.", sol: "Solo evita que el historial, las cookies y los formularios se guarden en su propio dispositivo. Las webs, su proveedor de Internet y la red del centro o de casa siguen viendo su actividad." },
    { nivel: "medio", q: "¿Qué datos puede revelar una foto subida a una red social, además de lo que se ve?", sol: "Los metadatos: fecha y hora, modelo del móvil y coordenadas GPS del lugar donde se hizo. Con eso se puede saber dónde vives o dónde estás." },
    { nivel: "medio", q: "Revisa estos permisos y di cuáles quitarías: una app de calculadora con acceso a ubicación, cámara y contactos.", sol: "Los tres. Una calculadora no necesita saber dónde estás, ni ver por la cámara, ni leer tus contactos; pedirlos es señal de que recoge datos para otros fines." },
    { nivel: "medio", q: "Indica tres señales de que tu móvil podría estar infectado.", sol: "Va lento sin motivo, la batería se gasta muy rápido o se calienta, aparecen anuncios o apps desconocidas, gasta muchos datos o tus contactos reciben mensajes que no has enviado." },
    { nivel: "medio", q: "¿Qué es una passkey y por qué protege contra el phishing?", sol: "Es una llave criptográfica guardada en el dispositivo que se desbloquea con huella, cara o PIN. No se teclea ni se puede revelar, y solo funciona en la web auténtica, así que una web falsa no puede robarla." },
    { nivel: "medio", q: "¿Qué es el principio de minimización de datos? Pon un ejemplo.", sol: "Dar a cada servicio solo los datos imprescindibles. Ejemplo: para descargar un cupón no dar el teléfono ni la fecha de nacimiento, y usar un correo secundario." },
    { nivel: "avanzado", q: "Una clave de 4 dígitos tiene 10.000 combinaciones. ¿Cuántas tiene una de 8 caracteres con 70 símbolos posibles? Compara.", sol: "70⁸ ≈ 5,8 · 10¹⁴, es decir, unos 576 billones. Es unas 57.000 millones de veces más que la de 4 dígitos. Cada carácter extra multiplica por 70 las posibilidades." },
    { nivel: "avanzado", q: "Explica por qué HTTPS usa cifrado asimétrico y simétrico a la vez.", sol: "El asimétrico resuelve el problema de compartir una clave de forma segura, pero es lento. Por eso se usa solo al principio para acordar una clave secreta; después todo se cifra con el simétrico, que es mucho más rápido." },
    { nivel: "avanzado", q: "Analiza este caso: un alumno conecta al ordenador del aula un USB que encontró en el pasillo. ¿Qué riesgos hay y qué debió hacer?", sol: "El USB puede contener malware que se ejecuta al conectarlo o un archivo trampa; incluso hay USB que se hacen pasar por teclado y escriben órdenes. Debió entregarlo en secretaría o al profesorado sin conectarlo." },
    { nivel: "avanzado", q: "Diseña un plan de seguridad para el móvil de un familiar mayor (5 medidas).", sol: "Actualizaciones automáticas; bloqueo con PIN o huella; apps solo de la tienda oficial y revisión de permisos; verificación en dos pasos en correo, WhatsApp y banco; enseñarle a no pulsar enlaces de SMS de bancos o paquetería y a llamar al 017 si duda; copia de seguridad de fotos en la nube." },
    { nivel: "avanzado", q: "¿Qué es una firma digital y qué garantiza? ¿Para qué la usarás en el futuro?", sol: "Es un dato cifrado con la clave privada del firmante que cualquiera puede comprobar con su clave pública. Garantiza quién firma (autenticidad) y que el documento no se ha modificado (integridad). Se usa para hacer trámites con la Administración, firmar contratos o la matrícula." },
    { nivel: "avanzado", q: "Una red social es gratis. Explica cómo gana dinero y qué relación tiene con tus datos.", sol: "Vende publicidad dirigida: analiza lo que miras, te gusta, buscas y dónde estás para crear un perfil y mostrar anuncios a quien más probablemente compre. Tus datos y tu atención son el producto que vende a los anunciantes." },
    { nivel: "avanzado", q: "Compara un ataque de phishing por correo y una vulnerabilidad sin parchear: quién falla, cómo se evita cada uno.", sol: "En el phishing falla la persona, que se fía de un engaño; se evita con formación, verificación en dos pasos y passkeys. En la vulnerabilidad falla el programa; se evita actualizando. Las dos se combinan a menudo: el correo lleva un archivo que explota un fallo." },
    { nivel: "avanzado", q: "Investiga si tu correo aparece en alguna filtración (con una web de confianza) y explica qué harías si aparece.", sol: "Si aparece: cambiar la contraseña de ese servicio y de cualquier otro donde se repitiera; activar la verificación en dos pasos; vigilar correos de phishing que usen esos datos; y pasar a usar un gestor con contraseñas únicas." },
    { nivel: "avanzado", q: "¿Por qué no se recomienda pagar el rescate de un ransomware? Da tres razones.", sol: "No hay garantía de recuperar los archivos; financia a los delincuentes y anima a nuevos ataques; puede marcarte como víctima que paga y volverán a atacarte; además, en algunos casos puede ser ilegal pagar a ciertos grupos." },
  ],
  ejemplos: [
    { enunciado: "Cifra «ATAQUE» con César de desplazamiento 4.", pasos: ["A + 4 = E.", "T + 4 = X.", "A + 4 = E; Q + 4 = U.", "U + 4 = Y; E + 4 = I."], resultado: "EXEUYI" },
    { enunciado: "Recibes un correo de «Netflx Soporte» que dice que tu cuenta se cerrará en 24 horas si no actualizas el pago en un enlace. Analízalo.", pasos: ["Remitente: «Netflx» está mal escrito y el dominio no es el oficial.", "Mete prisa (24 horas) y amenaza: técnica de ingeniería social.", "Pide datos de pago mediante un enlace.", "Actuación: no pulsar, entrar en la app oficial a comprobarlo, marcar como phishing y borrar."], resultado: "Es phishing: se ignora y se denuncia como correo fraudulento." },
    { enunciado: "Calcula cuánto tardaría un atacante en probar todas las contraseñas de 6 letras minúsculas (26 letras) a mil millones de intentos por segundo.", pasos: ["Combinaciones: 26⁶ = 308.915.776.", "Tiempo: 308.915.776 / 1.000.000.000 ≈ 0,3 segundos.", "Con 12 caracteres de 70 símbolos: 70¹² ≈ 1,4 · 10²² → unos 440.000 años.", "Conclusión: la longitud importa muchísimo."], resultado: "Menos de un segundo para la corta; cientos de miles de años para la larga." },
  ],
  errores: ["Creer que el modo incógnito o una VPN te hacen anónimo: solo protegen una parte de tu actividad."],
  cuarta: ["un cortafuegos", "Un mensaje de un amigo en clase", "qwerty", "cambiar el idioma", "La LOMLOE", "vishing", "borra las cookies", "envía spam", "apagar el router", "la Seguridad Social"],
  quiz: [
    { q: "Un fallo de seguridad de un programa que aún no se ha corregido es…", o: ["una cookie", "una vulnerabilidad", "un cortafuegos", "una passkey"], a: 1, e: "Los atacantes la aprovechan con un exploit." },
    { q: "Una red de dispositivos infectados controlados a distancia es…", o: ["una VPN", "una botnet", "una LAN", "un gestor"], a: 1, e: "Se usa para spam o ataques DDoS." },
    { q: "Un gestor de contraseñas…", o: ["usa la misma clave en todas partes", "genera y guarda contraseñas únicas", "sustituye al antivirus", "elimina las cookies"], a: 1, e: "Solo hay que recordar la contraseña maestra." },
    { q: "El cortafuegos…", o: ["filtra las conexiones de red", "cifra el disco", "hace copias", "borra virus"], a: 0, e: "Bloquea las conexiones no permitidas." },
    { q: "En el cifrado César con desplazamiento 3, la letra C se convierte en…", o: ["D", "E", "F", "Z"], a: 2, e: "C + 3 = F." },
    { q: "En el cifrado asimétrico, lo cifrado con la clave pública se descifra con…", o: ["la misma clave pública", "la clave privada", "cualquier clave", "la contraseña del wifi"], a: 1, e: "Solo el dueño de la privada puede leerlo." },
    { q: "Las cookies de terceros sirven sobre todo para…", o: ["recordar tu carrito", "seguirte entre webs para publicidad", "acelerar la web", "cifrar la conexión"], a: 1, e: "Construyen un perfil de tus gustos." },
    { q: "Los metadatos de una foto pueden incluir…", o: ["tu contraseña", "las coordenadas GPS", "tu saldo bancario", "tu antivirus"], a: 1, e: "Por eso conviene revisarlos antes de publicar." },
    { q: "El modo incógnito evita que…", o: ["tu proveedor vea lo que haces", "el historial se guarde en tu dispositivo", "te llegue publicidad", "te infecte un virus"], a: 1, e: "Solo afecta a tu propio navegador." },
    { q: "La medida que más vulnerabilidades corrige es…", o: ["cambiar el fondo de pantalla", "instalar las actualizaciones", "usar modo oscuro", "borrar el historial"], a: 1, e: "Los parches cierran los fallos conocidos." },
  ],
  cuartaEx: ["parche de seguridad", "Compartir la app con tus amigos", "16 años"],
  examen: [
    { q: "¿Qué es un exploit?", o: ["Un código que aprovecha una vulnerabilidad", "Un tipo de cookie", "Un antivirus", "Una copia de seguridad"], a: 0, e: "Ataca un fallo concreto de un programa." },
    { q: "La firma digital garantiza…", o: ["que el documento es gratis", "quién firma y que no se ha modificado", "que no hay virus", "que es anónimo"], a: 1, e: "Autenticidad e integridad." },
    { q: "Para la ubicación de una app de mapas conviene elegir…", o: ["siempre", "solo mientras se usa", "nunca", "compartir con todos"], a: 1, e: "Así no te localiza en segundo plano." },
    { q: "Una passkey se desbloquea con…", o: ["una contraseña escrita en papel", "la huella, la cara o el PIN del dispositivo", "un SMS", "una cookie"], a: 1, e: "La clave nunca sale del dispositivo." },
    { q: "Si te encuentras un USB en el pasillo, lo correcto es…", o: ["conectarlo para ver de quién es", "entregarlo sin conectarlo", "formatearlo en casa", "compartirlo"], a: 1, e: "Puede contener malware." },
  ],
  tarjetas: [
    ["Vulnerabilidad", "Fallo de seguridad de un programa; se corrige con actualizaciones."],
    ["Gestor de contraseñas", "Caja fuerte cifrada que crea y guarda contraseñas únicas."],
    ["Simétrico y asimétrico", "Una sola clave frente a pareja de clave pública y privada."],
    ["Cookies de terceros", "Archivos de empresas publicitarias que te siguen entre webs."],
  ],
  glosario: [
    ["Malware", "Cualquier programa malicioso: virus, gusanos, troyanos, spyware, ransomware."],
    ["Vector de ataque", "Vía por la que entra un ataque: adjunto, enlace, USB, vulnerabilidad."],
    ["Vulnerabilidad", "Fallo de un programa que permite atacarlo."],
    ["Exploit", "Código que aprovecha una vulnerabilidad."],
    ["Botnet", "Red de dispositivos infectados controlados a distancia."],
    ["Ingeniería social", "Técnicas para engañar a las personas y que entreguen datos o accesos."],
    ["Phishing", "Suplantación de una entidad de confianza para robar datos."],
    ["Doble factor (2FA)", "Verificación con algo que sabes y algo que tienes o eres."],
    ["Gestor de contraseñas", "Programa que guarda cifradas todas tus contraseñas."],
    ["Passkey", "Llave de acceso criptográfica que sustituye a la contraseña."],
    ["Cortafuegos", "Filtro que controla las conexiones entre un equipo y la red."],
    ["Cifrado simétrico", "Cifrado que usa la misma clave para cifrar y descifrar."],
    ["Cifrado asimétrico", "Cifrado con clave pública para cifrar y clave privada para descifrar."],
    ["Firma digital", "Sistema que garantiza la autoría e integridad de un documento."],
    ["Cookie", "Archivo pequeño que una web guarda en el navegador."],
    ["Metadatos", "Datos ocultos sobre un archivo: fecha, dispositivo, ubicación."],
    ["RGPD", "Reglamento europeo de protección de datos personales."],
    ["Ransomware", "Malware que cifra los archivos y pide un rescate."],
  ],
  situacion: {
    titulo: "Campaña de ciberseguridad para las familias",
    reto: "Muchas familias del centro han recibido SMS fraudulentos y no saben configurar la privacidad de los móviles de sus hijos. Vuestro equipo debe preparar y dar un taller de 15 minutos con material práctico para familias.",
    pasos: [
      "Haced una encuesta breve a familias para conocer qué amenazas les preocupan y qué medidas ya aplican.",
      "Recopilad tres ejemplos reales (anonimizados) de phishing o smishing y señalad las pistas que los delatan.",
      "Preparad una guía paso a paso para activar la verificación en dos pasos y revisar permisos en Android e iOS.",
      "Diseñad una demostración del cifrado César y de por qué una contraseña larga es más segura.",
      "Impartid el taller, recoged las dudas y mejorad la guía con ellas.",
    ],
    producto: "Una guía imprimible de dos caras y una presentación breve para el taller con familias.",
    evaluacion: ["La información es correcta, actual y está adaptada a personas sin conocimientos técnicos.", "Los ejemplos de fraude se analizan con criterios claros.", "Las instrucciones de configuración se pueden seguir sin ayuda.", "El equipo comunica con claridad y responde a las dudas."],
  },
  objetivos: ["Explicar cómo funcionan el cifrado simétrico y asimétrico", "Configurar la privacidad del móvil y reducir el rastreo en la web"],
  fuentes: [{ t: "INCIBE: Línea de ayuda en ciberseguridad 017", url: "https://www.incibe.es/linea-de-ayuda-en-ciberseguridad" }],
});
