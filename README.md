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

## Publicación

escolapedia.com se publica desde la rama `claude/project-thread-d876yp` con `hosting_git_deploy-website-repository` (sin despliegue automático: solo cambia cuando se vuelve a lanzar). El `.htaccess` de la raíz sirve la carpeta `dist/`. Solo se publica lo que hay en `dist/` cuando se sube: generar con `node build.js && node tools/pdfs.js` y subir `dist/` únicamente cuando Alex haya dado el visto bueno.
