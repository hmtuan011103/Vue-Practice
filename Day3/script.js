const app = Vue.createApp({
    data() {
        return {
          countNumber: 0,
        };
    },
    methods: {
        plusOneNumber() {
            this.countNumber++;
        },
        removeOneNumber() {
            this.countNumber--;
        }
    },
});
app.mount("#events");