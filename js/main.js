// creamos la instancia de vue
const vm = new Vue({ //si ponemos vm = ... podemos acceder desde fuera a la instacia para cambiar las propiedades
    el: 'main',
    data: {
        nuevaTarea: null,
        tareas: [
            'Hacer la compra',
            'Hacer el curso de Vue',
        ]
    },

    methods: {
        agregarTarea() {
            // this, hace referencia a la instancia vue
            this.tareas.push(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    }
});

// Vanilla Javascript
/* function agregarTarea() {
    const input = document.querySelector('input[type="text"]');
    vm.tareas.push(input.value);
    input.value = '';
} */