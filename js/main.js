Vue.component('usuarios', {
    template: '#usuarios-template',
    mounted() {
        axios.get('https://randomuser.me/api/?results=10')
            .then((respuesta) => {
                this.usuarios = respuesta.data.results.map((usuario) => {
                    return {
                        nombre: `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`,
                        correo: usuario.email,
                        foto: usuario.picture.medium
                    }
                });
            })
    },
    data() {
        return {
            usuarios: [],
            busqueda: ''
        }
    },
    computed: {
        filtrarUsuarios() {
            return this.usuarios.filter((usuario) => usuario.nombre.includes(this.busqueda))
        }
    }
});

Vue.component('usuario', {
    props: ['datos'],
    template: '#usuario-template'
});

/* Vue.component('busqueda', {
    template: `<input type="text">`
}) */



new Vue({
    el: 'main',
});