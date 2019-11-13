// creamos la instancia de vue
const vm = new Vue({ //si ponemos vm = ... podemos acceder desde fuera a la instacia para cambiar las propiedades
    el: 'main',
    data: {
        nuevaTarea: null,
        tareas: [
            { titulo: 'Hacer la compra', prioridad: false, antiguedad: 23 },
            { titulo: 'Terminar el proyecto de Angular', prioridad: true, antiguedad: 5 },
            { titulo: 'Aprender Vue', prioridad: true, antiguedad: 2 }

        ],
        mensaje: 'Hola Mundo'
    },

    methods: {
        agregarTarea() {
            // this, hace referencia a la instancia vue
            this.tareas.push(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    },

    computed: { // propiedades computadas
        mensajeAlReves() {
            return this.mensaje.split('').reverse().join('') // separa en letras, le da la vuelta al array y vuelve a unir la palabra
        },
        tareasConPrioridad() {
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        tareasPorAntiguedad() {
            return this.sort((a, b) => b.antiguedad - a.antiguedad);
        }
    }
});

// Vanilla Javascript
/* function agregarTarea() {
    const input = document.querySelector('input[type="text"]');
    vm.tareas.push(input.value);
    input.value = '';
} */