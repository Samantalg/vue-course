/* Con los componentes dinámicos de Vue.js tenemos un único punto de montaje universal para cualquier cantidad de componentes.
De esta forma podemos decidir qué componente está montado en cada momento. */

Vue.component('lista-tareas', {
    template: ` 
    <div>
      <h1><slot></slot></h1>
      <ul>
        <mi-tarea v-for="tarea in tareas" v-bind:tarea="tarea"></mi-tarea> <!--Componente dentro de componente-->
      </ul>
    </div>
    `,
    data() {
        return {
            tareas: [
                'Primera tarea',
                'Segunda tarea',
                'Tercera tarea',
                'Cuarta tarea',
            ]
        }
    }
});

Vue.component('mi-tarea', {
    props: ['tarea'],
    template: `
    <li>{{ tarea }}</li>
    `
});

Vue.component('contacto', {
    template: `<div><a href="mailto:contacto@vue.es">contacto@vue.es</a><hr></div>`
});

Vue.component('bio', {
    template: `<div><p>Esta es mi biografía</p></div>`
})

const vm1 = new Vue({
    el: 'main',
    data: {
        seleccionado: 'lista-tareas'
    }
});