const app = Vue.createApp({
    data() {
        return {
            keyValue: '',
            numberIndex: 0,
            number: 1111,
            numbers: [
                1111,
                2222,
                3333
            ]
        }
    },
    methods: {
        createAlert() {
            alert('Hello World');
        },
        getKey(evt) {
            this.keyValue = evt.key;
            // Lấy tên key của 1 phím
            console.log(evt.key);
        },
        changeNumber() {
            this.numberIndex++;
            if(this.numberIndex >= 3) {
                this.numberIndex = 0;
            }
            this.number = this.numbers[this.numberIndex];
        }
    }
});
app.mount('#app');