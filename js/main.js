// creamos la instancia de vue
const vm = new Vue({ //si ponemos vm = ... podemos acceder desde fuera a la instacia para cambiar las propiedades
    el: 'main',
    data: {
        laborales: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
        tareas: [
            { nombre: 'Hacer la compra', prioridad: 'baja' },
            { nombre: 'Hacer el curso de Vue', prioridad: 'alta' }
        ],
        persona: {
            nombre: 'Maria',
            profesion: 'dev',
            ciudad: 'Valencia'
        }
    }
});