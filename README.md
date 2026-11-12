# Escolapedia

Todas las materias de Infantil a Bachillerato (LOMLOE, curso 2026-27) explicadas fácil.

- `src/curriculo.js`: etapas, cursos, materias y lista de temas.
- `src/temas/*.js`: un fichero por tema completo (método de 6 pasos).
- `node build.js` genera la web estática en `dist/` y `node tools/pdfs.js` crea el PDF de cada ficha. `PREVIEW=1 node build.js` genera `preview/` con enlaces a `index.html`.

Sin dependencias. Ninguna clave dentro del repositorio.
