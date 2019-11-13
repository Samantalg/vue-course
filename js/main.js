Vue.component('autor', {
    props: ['nombre'],
    mounted() {
        console.log(this.nombre);
    },
    template: `
    <span>
      <h2>El nombre de la autora es {{ nombre }}</h2>
      <button @click="cambiarProp">Cambiar Prop</button>
      </span>
    `,
    methods: {
        cambiarProp() {
            this.nombre = this.nombre.toUpperCase();
            console.log(this.nombre);
        }
    }
});

/*
Cada componente es una isla, aislada del resto, por lo que se necesitan formas de pasar información desde la instancia o
componente parent al componente hijo (One-way data flow). Ese es el objetivo de las propiedades de los componentes.
*/

const vm1 = new Vue({
    el: 'main',
    data: {
        autor: 'Samanta Lara'
    }
});