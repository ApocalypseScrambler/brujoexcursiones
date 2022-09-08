document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for( let i = 1; i <= 20; i++ ) {
        // Creamos cada imagen
        const imagen = document.createElement('IMG');
        // Agregamos las clase para CSS
        imagen.classList.add('imagen');
        imagen.classList.add('imagen__galeria');
        imagen.src = `../img/pequenia/${i}.jpeg`;
        imagen.dataset.imagenId = i;

        // Añadir la función de mostrarImagen
        imagen.onclick = mostrarImagen;

       const lista = document.createElement('LI');
       // Agregamos la clase para CSS
       lista.classList.add('item__galeria');

       lista.appendChild(imagen);

       galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    const id = parseInt( e.target.dataset.imagenId );

    // Generar la imagen
    const imagen = document.createElement('IMG');
    // Agregamos las clases
    imagen.classList.add('imagen');
    imagen.classList.add('imagen__grande');
    imagen.src = `../img/grande/${id}.jpeg`;

    // Contenedor con clase
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    // Cuando se da click, cerrar la imagen
    overlay.onclick = function() {
        // Agregamos la clase para la salida
        overlay.classList.add('fadeOut');
        // Esperamos un segundo y eliminamos el contenedor
        setTimeout(function(){
            overlay.remove();
        }, 1000);
    }

    // Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.classList.add('btn-cerrar');
    cerrarImagen.classList.add('btn-close');
    cerrarImagen.classList.add('btn-close-white');
     
    // Cuando se presiona, se cierra la imagen
    cerrarImagen.onclick = function() {
        // Agregamos la clase para la salida
        overlay.classList.add('fadeOut');
        // Esperamos un segundo y eliminamos el contenedor
        setTimeout(function(){
            overlay.remove();
        }, 1000);
        
    }

    overlay.appendChild(cerrarImagen)

    // Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}