const app = Vue.createApp({
    data() {
        return {
            chbxVal: false,
        }
    },
    computed: {
        isImportant() {
            return this.chbxVal ? 'yes' : 'no';
        }
    },
    methods: {

    }
});

app.mount('#app');