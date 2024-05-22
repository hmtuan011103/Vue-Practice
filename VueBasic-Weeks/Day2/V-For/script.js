const app = Vue.createApp({
    data() {
        return {
            manyFoods: [
                'img_burrito.svg',
                'img_salad.svg',
                'img_cake.svg',
                'img_soup.svg',
                'img_fish.svg',
                'img_pizza.svg',
                'img_rice.svg'
              ]
        }
    }
});
app.mount('#app');