// creamos la instancia de vue
const vm1 = new Vue({ // este objeto es la logica de la aplicación 
    el: 'main',
    data: {
        mostrar: true,
        mensajes: {
            transicion: 'Transiciones CSS con Vue',
            animacion: 'Animaciones CSS con Vue',
            transicionCustom: 'Transiciones entre elementos con Vue',
            animacionCustom: 'Animaciones custom CSS con Vue'
        }
    }
});