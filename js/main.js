Vue.component('elegir-ganador', {
    props: ['listado'],
    /* templat: '#elegir-ganador-template', */
    /* template `
    <div>
      <h4 v-if="ganador">El ganador es {{ganador}}</h4>
      <template v-else>
      <h4>Participantes</h4>
      <ul>
      <li v-for="persona in listado">{{persona}}</li></ul>
      </template>
      <button @click="elegirGanador">Jugar</button>
    </div>
    ` */
    methods: {
        elegirGanador() {
            let cantidad = this.participantes.length;
            let indice = Math.floor((Math.random() * cantidad)); // nos va a devolver entre 1 y 4
            this.ganador = this.participantes[indice - 1];
        }
    },
    data() {
        return {
            ganador: false,
            participantes: this.listado
        }
    }
});

const vm1 = new Vue({
    el: 'main',
    data: {
        personas: [
            'Juan', 'Alicia', 'Pedro', 'Maria'
        ]
    }
});