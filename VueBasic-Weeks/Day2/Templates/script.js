const app = Vue.createApp({
    template:
        `
            <h1>{{ message }}</h1>
            <p>This is a second line of HTML code, inside backtick quotes</p>
        `,

    data() {
        return {
            message: "Hello World!"
        }
    }
});
app.mount('#app');