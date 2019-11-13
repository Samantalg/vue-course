// creamos la instancia de vue
const vm1 = new Vue({ // este objeto es la logica de la aplicación 
    el: 'main',
    data: {
        mensaje: 'Instancia Vue 1',
    },
    methods: {
        alReves() {
            this.mensaje = this.mensaje.split('').reverse().join('');
            vm2.mensaje = "Hola desde vm1"
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