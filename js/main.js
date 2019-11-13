Vue.component('candidato', {
    props: {
        nombre: {
            type: String,
            required: true
        },
        correo: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: true
        },
        location: {
            type: Object,
            default () {
                return {
                    ciudad: 'Madrid'
                }
            }
        },
        template: '#candidato-template',
    }
});

const vm1 = new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos: []
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=5')
                .then((respuesta) => {
                    this.candidatos = respuesta.data.results;
                })
        }
    }
});