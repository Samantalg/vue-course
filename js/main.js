// creamos la instancia de vue
const vm1 = new Vue({ // este objeto es la logica de la aplicación 
    el: 'main',
    data: {
        mensaje: 'Instancia Vue 1',
    }, //los métodos relativos al ciclo de vida de vue se ponen directamente en la raíz de la instancia -> en la documentación aparecen las funciones
    beforeUpdate() {
        console.log('BeforeUpdate: ', this.mensaje);
    },
    updated() {
        console.log('Update: ', this.mensaje);
    },
    methods: {
        alReves() {
            this.mensaje = this.mensaje.split('').reverse().join('');
            /* vm2.mensaje = "Hola desde vm1" */
        }
    },
    computed: {
        mensajeEnMayusculas() {
            return this.mensaje.toUpperCase();
        }
    }
});

const vm2 = new Vue({
    el: '#app',
    data: {
        mensaje: 'Instancia Vue 2',
    }
});