const app = Vue.createApp({
    data() {
        return {
            imgUrl: 'img_salad.svg',
            manyFoods: [
                {name: 'Burrito', url: 'img_burrito.svg'},
                {name: 'Salad', url: 'img_salad.svg'},
                {name: 'Cake', url: 'img_cake.svg'},
                {name: 'Soup', url: 'img_soup.svg'}
            ]
        }
    }
});
app.mount('#app');

