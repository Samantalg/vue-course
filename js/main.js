/*
con los custom events de Vue.js podemos pasar información de los hijos a los padres.
*/

Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: '#alerta-template',
    methods: {
        ocultarWidget() {
            console.log('clickado');
            this.$emit('ocultar');
        }
    }
});

const vm1 = new Vue({
    el: 'main',
    data: {
        mostrarExito: false,
        mostrarAdvertencia: false,
        mostrarError: false
    }
});