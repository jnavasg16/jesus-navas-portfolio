# Jesús Navas Guerrero · portfolio

Web personal estática con cuatro páginas independientes: Formación, Reconocimientos, Experiencia y Proyectos, accesibles desde la navegación horizontal. Formación es la página de entrada; no hay una portada independiente ni un apartado «JN» en el menú. El diseño es deliberadamente mínimo: fondo blanco, titulares con serif, textos y menú con sans serif, mucho espacio en blanco y líneas finas como único elemento gráfico.

GitHub Pages publica directamente la carpeta `docs/` de la rama `main`. No hace falta instalar dependencias ni ejecutar un build.

Proyectos muestra tarjetas compactas del mismo tamaño que abren una página propia con la descripción y los hitos. El orden es Karajan, Heliosat, Reconversión inmobiliaria, Attendi, Rolls-Royce, Quant Research y NASA. Las fichas están en los subdirectorios correspondientes de `docs/proyectos/`.

Los textos de Proyectos se orientan a la candidatura de Jesús a Associate en McKinsey Barcelona. El tono es impersonal, breve y descriptivo, con énfasis en responsabilidades, conversaciones y negociaciones, análisis y resultados. Karajan se presenta como un proyecto de defensa en el que fue CEO y cofundador. Los resultados y las cifras se limitan a lo documentado en `CONTENT-SOURCES.md`.

Las cuatro secciones tienen una franja destacada con NASA, Imperial, Rolls-Royce, Fundación «la Caixa» y Entrepreneurs First. Cada logo identifica el vínculo con la institución y enlaza al apartado correspondiente. La selección se mantiene visible al inicio de cada sección, independientemente de cuánto crezca la trayectoria; en móvil se distribuye en dos filas.

Para verla en local:

```sh
python3 scripts/preview.py
```

La vista previa se abre en `http://127.0.0.1:8766/` y sirve siempre los archivos actuales, sin caché. Esto evita mezclar versiones antiguas del menú al cambiar de sección mientras se edita la web. Se puede elegir otro puerto con `--port`.

Las cuatro secciones aprovechan aproximadamente el 92 % del ancho de la pantalla, con márgenes adaptativos y sin un ancho máximo fijo para la página. Los textos, los logos y las fotografías también crecen en pantallas grandes. El menú y las columnas se reorganizan automáticamente según el espacio de la pantalla o del panel del navegador.

La tipografía es compartida por las cuatro secciones: el texto principal parte de 18 px y los textos auxiliares de 15 px, y ambos aumentan con el ancho de la pantalla.

Los titulares y «Jesús Navas» usan Libre Baskerville; el cuerpo y el menú usan Inter. La combinación se inspira en el estilo editorial de McKinsey sin utilizar su fuente Bower. Los archivos WOFF2 y sus licencias se incluyen en `docs/assets/fonts/`, sin peticiones a Google Fonts durante la navegación.

`docs/index.html` redirige directamente a `docs/formacion/index.html` y cada categoría tiene su propio `docs/<categoria>/index.html`. La redirección usa una ruta relativa compatible con GitHub Pages y funciona también sin JavaScript. El contenido profesional inicial procede del CV de noviembre de 2025; conviene revisar los cargos abiertos antes de actualizar su estado actual.

Las antiguas rutas `docs/archivo/` y `docs/reflexiones/` redirigen a Formación. Las imágenes de `docs/assets/images/` y el TFG de `docs/assets/documents/` se utilizan en las secciones restantes. Las fuentes y las decisiones sobre fechas y cargos están en `CONTENT-SOURCES.md`. El sitio sigue siendo estático y se sirve desde `docs/`; los enlaces son relativos y compatibles con GitHub Pages.
