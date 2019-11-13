// creamos la instancia de vue
const vm1 = new Vue({ // este objeto es la logica de la aplicación 
    el: 'main',
    data: {
        personas: []
    },
    mounted() {
        console.log('Instancia montada');
        this.cargarPersonas();
    },
    methods: {
        cargarPersonas() {
            this.$http.get('https://randomuser.me/api/?results=10')
                .then((respuesta) => {
                    this.personas = respuesta.body.results;
                })

        }
    }
});