const app = Vue.createApp({
    data() {
        return {
            text: 'I like taco, pizza, Thai beef salad, pho soup and tagine.',
            showDiv: false
        }
    }
});
app.mount('#app');