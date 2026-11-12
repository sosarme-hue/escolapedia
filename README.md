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

## Publicación

escolapedia.com se publica desde la rama `claude/project-thread-d876yp` (despliegue automático de Hostinger). El `.htaccess` de la raíz sirve la carpeta `dist/`. Solo se publica lo que hay en `dist/` cuando se sube: generar con `node build.js && node tools/pdfs.js` y subir `dist/` únicamente cuando Alex haya dado el visto bueno.
