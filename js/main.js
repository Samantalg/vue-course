Vue.component('password', {
    props: ['password'],
    template: `<input v-bind:value="password" @input="comprobarContrasenia($event.target.value)" ref="pass">`,
    methods: {
        comprobarContrasenia(contrasenia) {
            if (this.noValidas.includes(contrasenia)) {
                this.$refs.pass.value = contrasenia = '';
            }
            this.$emit('input', contrasenia);
        }
    },
    data() {
        return {
            noValidas: ['admin', 'root', '123456', 'abc']
        }
    }
})

/* template: `<input v-model="password">` */
/* $event.target.value -> lo que haya escrito el usuario en el input */
/*ref="pass" identificador de lo que se ha escrito en el input; this.$refs.& devuelve el elemento & del dom */

new Vue({
    el: 'main',
    data: {
        password: 'esQWERT765!'
    }
});