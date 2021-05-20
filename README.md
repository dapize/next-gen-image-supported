# Next-gen Image supported
Es un pequeño script que verifica que formato de imagen de proxima generación soporta nuestro navegador: Webp, JP2 o JPX.


# Instalación
Agrega el script.js o script.min.js a tu web a través del tag SCRIPT.

```html
<html lang="en">
    <body>
        ...

        <script src="script.js"></script>
    </body>
</html>
    
```

o importalo como módulo:

```js
const nextGenImagesSupported = require('./script')
```

# Uso
En el contexto primario que comunmente es el navegador, osea el objeto 'window' se a creado un método (una función) llamado 'nextGenImagesSupported', al cual le pasaremos una función callback, y en esa función obtendremos un único argumento que nos devolverá el siguiente objeto:

```js
{
    webp: true
    jp2: false,
    jpx: false,
}
```

El boolean que tiene como valor cada propiedad de ese objeto determinará que formato de imagen de proxima generación soporta el navegador.


# Ejemplo

Si leo el objeto con un 'console.log' en el navegador Google Chrome

```js
window.nextGenImagesSupported( function (obj) {
    console.log( obj )
})
```

```js
// el objeto impreso será: 

{
    webp: true
    jp2: false,
    jpx: false,
}
```

# Compatibilidad
IE11+, Google Chrome, Firefox, Safari.
