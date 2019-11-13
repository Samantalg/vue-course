Vue.component('lista-tareas', {
    props: ['tareas'],
    template: ` 
    <div>
      <h1><slot></slot></h1>
      <ul v-for="tarea in tareas">
      <mi-tarea v-bind:tarea="tarea"></mi-tarea>
      </ul>
    </div>
    `
});

Vue.component('mi-tarea', {
    props: ['tarea'],
    template: `
    <li>{{ tarea }}</li>
    `
});

const vm1 = new Vue({
    el: 'main',
    data: {
        tareas: [
            'Primera tarea',
            'Segunda tarea',
            'Tercera tarea',
            'Cuarta tarea',
        ]
    }
});