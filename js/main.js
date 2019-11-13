// creamos la instancia de vue
const vm = new Vue({ //si ponemos vm = ... podemos acceder desde fuera a la instacia para cambiar las propiedades
    el: 'main', // de esta manera accede a lo que esté dentro de <main></main>
    data: {
        conectado: true,
        edad: 44
    }
});