# Reto #3 JS - Lista de contactos

Página web hecha con **HTML, CSS y JavaScript** que consume la API pública de
[JSONPlaceholder](https://jsonplaceholder.typicode.com/users) y muestra los
contactos en una tabla con las columnas **Nombre**, **Email**, **Teléfono** y **Empresa**.

Los datos se insertan en la tabla de forma dinámica con JavaScript y en la consola
aparece un mensaje cuando se obtienen correctamente.

## Estructura

```
/Reto-3-js/
|-- index.html   (Estructura de la página y la tabla)
|-- styles.css   (Estilos de la página y la tabla)
|-- script.js    (Consumo de la API e inserción de las filas)
```

- `index.html`: encabezado, tarjeta con la tabla (`<thead>` con las 4 columnas y un `<tbody>` vacío que se llena con JavaScript), mensaje de estado y pie de página.
- `styles.css`: variables, estilos base, encabezado con degradado, tarjeta, tabla, diseño responsivo y accesibilidad.
- `script.js`: pide los usuarios a la API con `fetch`, crea las filas y las inserta en la tabla.

## Cómo funciona el JavaScript

| Función | Qué hace |
| --- | --- |
| `obtenerContactos()` | Hace la petición con `fetch` y `async/await`. Si la respuesta no es correcta (`!respuesta.ok`) lanza un error. |
| `crearCelda()` / `crearCeldaEnlace()` | Crean las celdas con `document.createElement` y `textContent`. El email y el teléfono quedan como enlaces `mailto:` y `tel:`. |
| `crearFila()` | Arma una fila `<tr>` con el nombre, el email, el teléfono y el nombre de la empresa (`company.name`). |
| `mostrarContactos()` | Convierte los contactos en filas con `map` y las inserta en el `<tbody>`. También actualiza el contador. |
| `iniciar()` | Llama a la API dentro de un `try/catch`. Si todo sale bien muestra en consola `Datos obtenidos correctamente` y llena la tabla; si falla, muestra el error en consola y en la página. |

Se usa `textContent` en lugar de `innerHTML` para que el texto que llega de la API no se interprete como HTML.

## Características

| Característica | Cómo se logra |
| --- | --- |
| Tabla clara y moderna | Encabezados en mayúsculas, filas alternadas con `:nth-child(even)`, resaltado en `:hover` y tarjeta con sombra y bordes redondeados. |
| Estados de la carga | Mientras llegan los datos se ve "Cargando contactos..."; si hay un error el mensaje cambia de color. El contador muestra cuántos contactos hay. |
| Diseño responsivo | La tabla está dentro de un contenedor con `overflow-x: auto`, así en pantallas pequeñas se desplaza de lado sin romper la página. Por debajo de `600px` se reducen los espacios. |
| Accesibilidad | Etiquetas semánticas, `<caption>` oculto visualmente, `scope="col"` en los encabezados, `role="status"` en el mensaje de estado, foco visible y respeto de `prefers-reduced-motion`. |

## Cómo probarlo

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/ujuanpolanco/Reto-3-js.git
   ```
2. Abrir `index.html` en el navegador (o con la extensión **Live Server** de VS Code).
3. Abrir la consola del navegador (`F12`) para ver el mensaje **Datos obtenidos correctamente** con los datos de la API.

> Se necesita conexión a internet porque los datos vienen de la API.

## Autor

Juan Polanco - [ujuanpolanco](https://github.com/ujuanpolanco)
