// creamos la instancia de vue
const vm1 = new Vue({ // este objeto es la logica de la aplicación 
    el: 'main',
    data: {
        tareas: [
            { titulo: 'Aprender Vue', completado: false },
            { titulo: 'Aprender Firebase', completado: false },
            { titulo: 'Salir a correr', completado: false },
        ]
    },
    methods: {
        completarTarea(tarea) {
            tarea.completado = !tarea.completado;
        }
    },
    computed: {
        tareasCompletadas() {
            return this.tareas.filter((tarea) => tarea.completado);
        }
    },
});