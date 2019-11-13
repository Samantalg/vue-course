Vue.component('mis-tareas', {
    props: ['listado'],
    template: '#mis-tareas-template'
});

const vm1 = new Vue({
    el: 'main',
    data: {
        tareas: [{
                titulo: 'Sacar al perro'
            },
            {
                titulo: 'Aprender Vue'
            },
            {
                titulo: 'Hacer la cama'
            },
        ]
    }
});