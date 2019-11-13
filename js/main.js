Vue.filter('alReves', (valor) => valor.split('').reverse().join('')); // definido antes e la instancia vue para que funcione
/* A diferencia de Vue1, en Vue2 no disponemos de los filtros filterBy y orderBy (entre otros).
Aunque hay quien ha tratado de portarlos, lo mejor esaprender como utilizar las propiedades computadas,
filtros personalizados y librerías de utilidades (lodash, ...).*/

// creamos la instancia de vue
new Vue({ //si ponemos const vm = ... podemos acceder desde fuera a la instacia para cambiar las propiedades
    el: 'main',
    data: {
        busqueda: '',
        minimo: 5,
        juegos: [{
                titulo: 'Juego 1',
                genero: 'FPS',
                puntuacion: 9
            },
            {
                titulo: 'Juego 2',
                genero: 'Estategia',
                puntuacion: 10
            },
            {
                titulo: 'Juego 3',
                genero: 'Estategia',
                puntuacion: 4
            }
        ]
    },

    computed: {
        mejoresJuegos() {
            return this.juegos.filter((juego) => juego.puntuacion > this.minimo);
        },
        juegosOrdenados() { // de menos a mayor
            return this.juegos.sort((a, b) => a.puntuacion - b.puntuacion);
        },
        buscarJuego() {
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
        }

    }
});