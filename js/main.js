/* Vue.component('mis-tareas', {
    props: ['_tareas'], // tengo que definirlo para poder pasarlo en <mis-tareas v-bind:tareas="tareas">
    template: `
    <ul>
      <li v-for="tarea in _tareas">{{ tarea.title }}</li>
    </ul>
    `,
});
 */
Vue.component('mi-titulo', {
    props: ['_titulo'],
    template: `
  <h2>{{ _titulo }}</h2>
  `,
});

Vue.component('mis-tareas', {
    template: `<ul><li v-for="tarea in tareas">{{ tarea.title }}</li></ul>`,
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((respuesta) => {
                console.log(respuesta);
                this.tareas = respuesta.data;
            });
    },
    data() {
        return {
            tareas: [],
        }
    }
});

const vm1 = new Vue({
    el: 'main',
    data: {
        titulo: 'Mis tareas'
    }
    /* data: {
        tareas: [],
        tareasLocales: [
            { title: 'Hacer la compra' },
            { title: 'Aprender Vue' }
        ]
    },
    mounted() {
        console.log('Instancia montada');
        this.cargarPersonas();
    },
    methods: {
        cargarPersonas() {
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then((respuesta) => {
                    console.log(respuesta);
                    this.tareas = respuesta.data;
                })

        }
    } */
});