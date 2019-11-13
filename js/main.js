/*Si las propiedades en los componentes permiten personalizar la lógica de cada instancia, los slots en Vue.js permiten que parte del template
sea dinámico, único para cada instancia.
*/

Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `
      <section class="alerta" v-bind:class="[tipo, posicion]">
        <header class="alerta__header">
        <slot name="header">Hola</slot>
        </header>
        <div class="alerta__contenido">
          <slot>jlsfñjdsfsfk fdsfjps kpfpkf dfjspñsfpñfsk</slot>
        </div>
        <footer class="alerta__footer">
        <slot name="footer">Footer</slot>
        </footer>
      </section>     
    `
});

/*slot anonimo solo puede haber uno */

const vm1 = new Vue({
    el: 'main',
});