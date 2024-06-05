import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import TodoItem from './components/TodoItem.vue'
import AnimalCollection from './components/Route/AnimalCollection.vue'
import FoodItems from './components/Route/FoodItems.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/animals', component: AnimalCollection },
        { path: '/foods', component: FoodItems }
    ]
});

const app = createApp(App);
app.use(router);
app.component('todo-item', TodoItem);
app.component('food-item', FoodItem);
app.mount('#app');
