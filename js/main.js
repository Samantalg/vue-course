const eventBus = new Vue(); // utilizamos esta instancia como puente entre componentes hermanos

Vue.component('listado-productos', {
    props: ['productos'],
    template: `
    <section>
      <ul>
        <li v-for="producto in productos">
          {{ producto.nombre }} -- <small>precio: {{ producto.precio.toFixed(2) }}</small>
          <button @click="eliminarProducto(producto.precio)">-</button>
          <button @click="anadirProducto(producto.precio)">+</button>
        </li>
      </ul>
    </section>
    `,
    methods: {
        anadirProducto(precio) {
            eventBus.$emit('añadir', precio);
        },
        eliminarProducto(precio) {
            eventBus.$emit('quitar', precio);
        }
    }
});

Vue.component('carrito-compra', {
    template: `
    <section>
      <h1>{{ cantidadProductos }}</h1>
      <h3>{{ total }} productos</h3>
    </section>
    `,
    data() {
        return {
            cantidadProductos: 0,
            total: 0
        }
    },
    created() {
        eventBus.$on('añadir', (precio) => {
                if (this.total >= 0) {
                    this.total += precio;
                    this.cantidadProductos++;
                }
            }),
            eventBus.$on('quitar', (precio) => {
                if (this.total > 0) {
                    this.total -= precio;
                    this.cantidadProductos--;
                }
            });
    }
});

const vm1 = new Vue({
    el: 'main',
    data: {
        productos: [
            { nombre: 'Libro', precio: 39 },
            { nombre: 'Portátil', precio: 1300 },
            { nombre: 'Café', precio: 5 },
            { nombre: 'Chocolate', precio: 3 },
            { nombre: 'Bolígrafo', precio: 1 }
        ]
    }
});