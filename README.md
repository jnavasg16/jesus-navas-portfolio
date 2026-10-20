# Jesús Navas Guerrero · portfolio

Web personal estática con portada y seis páginas independientes, accesibles desde la navegación horizontal y el índice de la portada. El diseño es deliberadamente mínimo: fondo blanco, tipografía sans serif con titulares de mayor peso, mucho espacio en blanco y líneas finas como único elemento gráfico.

GitHub Pages publica directamente la carpeta `docs/` de la rama `main`. No hace falta instalar dependencias ni ejecutar un build.

Para verla en local:

```sh
python3 -m http.server 8765 --directory docs
```

La portada está en `docs/index.html` y cada categoría tiene su propio `docs/<categoria>/index.html`. El contenido profesional inicial procede del CV de noviembre de 2025; conviene revisar los cargos abiertos antes de actualizar su estado actual.

## Fotos y documentos

La actualización de octubre de 2026 añade `docs/archivo/`, tres imágenes locales en `docs/assets/images/` y el TFG original de 115 páginas en `docs/assets/documents/`. Las fuentes y las decisiones sobre fechas y cargos están en `CONTENT-SOURCES.md`. El sitio sigue siendo estático y se sirve desde `docs/`; los enlaces son relativos y compatibles con GitHub Pages.
