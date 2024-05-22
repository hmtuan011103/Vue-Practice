const app = Vue.createApp({
    data() {
        return {
            text: '',
            count: 0,
            xPos: 0,
            yPos: 0
        }
    },
    methods: {
        writeText(e, hey) {
            this.text = e.target.value + hey;
        },
        mousePos() {
            this.xPos = event.offsetX;
            this.yPos = event.offsetY;
        },
        addMoose(number) {
            if(this.count < 0 ) {
                return;
            }
            this.count += number;
        }
    }
});
app.mount('#app');