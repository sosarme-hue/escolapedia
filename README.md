# Escolapedia

Todas las materias de Infantil a Bachillerato (LOMLOE, curso 2026-27) explicadas fácil.

- `src/curriculo.js`: etapas, cursos, materias y lista de temas.
- `src/temas/*.js`: un fichero por tema completo (método de 6 pasos).
- `node build.js` genera la web estática en `dist/` y `node tools/pdfs.js` crea el PDF de cada ficha. `PREVIEW=1 node build.js` genera `preview/` con enlaces a `index.html`.

Sin dependencias. Ninguna clave dentro del repositorio.

## Tema ampliado (nivel libro de texto)

Modelo: `src/temas/eso-4-mata-estadistica.js` (ver la parte «Ampliación» al final). Cada tema debe tener:

- `bloques`: 8 a 11 secciones, unas 1.200 a 1.500 palabras en total. El `svg` es opcional en los bloques nuevos; puede haber tablas (`<table class="tb">`).
- `video` en 1 o 2 bloques clave, además del vídeo general del tema (`python3 -I tools/videos.py "búsqueda" 4`).
- `ejemplos`: 3 ejemplos resueltos `{ enunciado, pasos: [...], resultado }`.
- `errores`: 4 a 6 errores típicos.
- `ejercicios`: 10 `{ q, sol }`, con la solución explicada.
- `quiz`: 10 preguntas; `tarjetas`: 8.
- Después: `node build.js && node tools/desbordes.js <filtro>` (0 desbordes) y `node tools/pdfs.js`.

## Tema de 1º de Primaria (ampliado desde el inicio)

Modelo: `src/temas/pri-1-mat-unidades-decenas.js` (ayudas de dibujo en `src/temas/_pri1.js`). Son niños de 6 años que empiezan a leer: frases cortas (máx. 12 palabras), pero el tema va **completo y ampliado desde el principio**, como un libro de texto de 1º:

- `bloques`: 8 a 10, cada uno de 45 a 80 palabras (dos párrafos cortos) y **siempre** con `svg` propio (grande y claro). Unas 450 a 650 palabras en total. Incluir un bloque de «¿Para qué sirve?» (vida diaria) y uno de repaso o juego.
- `figura`: un dibujo resumen; `video`: vídeo infantil en castellano (Smile and Learn, Happy Learning, etc.) y 1 o 2 vídeos de bloque más (`python3 -I tools/videos.py "búsqueda" 4`; nunca inventar ids).
- `ejemplosTitulo: "Lo hacemos juntos"` con 3 ejemplos guiados; `errores`: 4.
- `ejercicios`: 10 actividades sencillas (contar, rodear, dibujar, decir en voz alta) con solución para las familias.
- `quiz`: 10 preguntas con 3 opciones; `examen`: 4; `tarjetas`: 8.
- `familias` (4 ideas para practicar en casa) y `profesores` (RD 157/2022, BOE-A-2022-3296).
- Las páginas de 1º y 2º de Primaria usan letra grande (clase `peque`).
- Después: `node build.js && node tools/desbordes.js 1-primaria` (0 desbordes) y `node tools/pdfs.js`.

## Tema nivel libro de 1º de Primaria

Mismo esquema que el «Tema nivel libro» (lectura, apartados numerados, ejercicios por niveles, glosario y situación) pero **a la medida de un niño de 6 años**: frases cortas (máx. 12 palabras), vocabulario sencillo y dibujos grandes. Se reescriben los `pri-1-*` existentes (mismo curso, materia y título); ayudas nuevas en `_pri1L<n>.js`.

- `lectura`: «Para empezar», un cuento o situación corta de 80 a 120 palabras con personajes de su edad.
- `bloques`: 10 a 12 apartados numerados, de 50 a 90 palabras cada uno y **siempre** con `svg` propio, grande y claro. Unas 700 a 1.000 palabras en total. Incluir «¿Para qué sirve?», un juego y un repaso.
- `figura`, `video` infantil en castellano y 2 o 3 vídeos de bloque (`python3 -I tools/videos.py`, nunca inventar ids). Inglés y catalán con vídeos en su lengua.
- `ejemplosTitulo: "Lo hacemos juntos"` con 4 ejemplos; `errores`: 4.
- `ejercicios`: 18 a 24 con `nivel` (básico, medio, avanzado; unos 8/9/5), de contar, rodear, unir, dibujar, completar o decir en voz alta, con solución para las familias.
- `quiz`: 12 preguntas con 3 opciones; `examen`: 6; `tarjetas`: 10.
- `glosario`: 8 a 10 «palabras nuevas» con definición de una frase.
- `situacion`: reto sencillo de clase o casa (3 o 4 pasos, producto y cómo se evalúa).
- `familias` (4 ideas) y `profesores` (RD 157/2022). `minutos`: 45 a 60.
- Letra grande (clase `peque`). Después: `node build.js && node tools/desbordes.js 1-primaria` (0 desbordes).

## Tema de Infantil (3, 4 y 5 años)

Modelo de estructura: los temas `pri-1-*` (ayudas en `_pri1.js`), pero **más corto**: el niño no lee, el tema se mira y se hace con un adulto. Ficheros `inf-<edad>-<sigla>-<slug>.js` con `curso: "3-anos"`, `"4-anos"` o `"5-anos"`; listas en `src/listas-infantil.js`.

- `bloques`: 6, cada uno de 25 a 45 palabras (frases muy cortas, para leer en voz alta) y **siempre** con `svg` propio, grande y alegre. Unas 200 a 300 palabras en total. Un bloque de «¿Para qué sirve?» y uno de juego.
- `figura` y `video` infantil en castellano (Smile and Learn, Happy Learning, Cantajuego…; `python3 -I tools/videos.py`, nunca inventar ids). Inglés y catalán con vídeo en su lengua si lo hay.
- `ejemplosTitulo: "Lo hacemos juntos"` con 2 ejemplos; `errores`: 3.
- `ejercicios`: 6 actividades de manipular, señalar, dibujar o moverse, con nota para la familia.
- `quiz`: 6 preguntas con 3 opciones (el adulto lee); `examen`: 3; `tarjetas`: 6.
- `familias` (4 ideas en casa) y `profesores` (RD 95/2022, BOE-A-2022-1654).
- Letra grande (clase `peque`). Después: `node build.js && node tools/desbordes.js anos` (0 desbordes).

## Tema nivel libro (4º ESO)

Es el tema ampliado al máximo, como un capítulo de libro de texto. Se reescribe el fichero del tema que ya existe (mismo nombre, `materia`, `curso` y `titulo`), conservando lo bueno y ampliándolo. Todo es contenido propio: nunca se copia de libros.

- `lectura`: `{ titulo, html }`, una lectura inicial motivadora (150-250 palabras) que conecta el tema con la vida real.
- `bloques`: 10 a 16 apartados numerados en el `<h3>` («1.1 …», «1.2 …», «2.1 …»), **2.000 a 3.000 palabras** en total, cada uno con su `svg` propio. Definiciones, propiedades, procedimientos, matices y conexiones con otros temas.
- `ejemplos`: 6 ejemplos resueltos paso a paso; `errores`: 6.
- `ejercicios`: **30 a 40**, cada uno con `nivel: "básico" | "medio" | "avanzado"` (unos 12 / 14 / 10) y `sol` completa (el desarrollo, no solo el resultado).
- `quiz`: **20 preguntas** (autoevaluación) con 4 opciones y explicación; `examen`: 8; `tarjetas`: 12.
- `glosario`: 12 a 20 pares `[término, definición]`.
- `situacion`: `{ titulo, reto, pasos: [4-6], producto, evaluacion: [3-4 criterios] }`, una situación de aprendizaje LOMLOE con un reto práctico.
- `mapa` (resumen final), `figura`, `video` y 2-3 vídeos de bloque (`python3 -I tools/videos.py`, nunca inventar ids ni repetir los de otros temas o ramas), `familias`, `profesores` (saberes básicos del RD 217/2022 y del Decret/currículo autonómico si procede), `fuentes`, `minutos` (90-120), `revisado`.
- Lengua Catalana en catalán; Inglés y Francés con explicación en castellano y ejemplos en el idioma.
- Después: `node build.js && node tools/desbordes.js 4-eso` (0 desbordes) y revisar los dibujos en captura.

## Publicación

`build.js` también genera `dist/sitemap.xml` (todas las páginas salvo las fichas) y `dist/robots.txt`, así que se actualizan solos en cada publicación.

escolapedia.com se publica desde la rama `claude/project-thread-d876yp` con `hosting_git_deploy-website-repository` (sin despliegue automático: solo cambia cuando se vuelve a lanzar). El `.htaccess` de la raíz sirve la carpeta `dist/`. Solo se publica lo que hay en `dist/` cuando se sube: generar con `node build.js && node tools/pdfs.js` y subir `dist/` únicamente cuando Alex haya dado el visto bueno.
