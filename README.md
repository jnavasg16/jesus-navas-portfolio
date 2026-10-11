# Jesús Navas Guerrero · portfolio

Web personal estática con portada y seis páginas independientes, accesibles desde la navegación superior. El diseño es editorial y minimalista: fondo blanco, tipografía protagonista y un único acento discreto.

GitHub Pages publica directamente la carpeta `docs/` de la rama `main`. No hace falta instalar dependencias ni ejecutar un build.

Para verla en local:

```sh
python3 -m http.server 8765 --directory docs
```

La portada está en `docs/index.html` y cada categoría tiene su propio `docs/<categoria>/index.html`. El contenido profesional inicial procede del CV de noviembre de 2025; conviene revisar los cargos abiertos antes de actualizar su estado actual.
