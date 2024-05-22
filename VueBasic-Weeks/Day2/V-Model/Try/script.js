const app = Vue.createApp({
    data() {
        return {
          itemType: '',
          itemName: '',
          itemUrl: '',
          itemNumber: null,
          preDefItems: [
            { name: 'Burrito', type: 'Dinner'},
            { name: 'Pizza', type: 'Dinner'},
            { name: 'Pho Soup', type: 'Dinner'},
            { name: 'Spaghetti', type: 'Dinner'},
            { name: 'Fish', type: 'Dinner'},
            { name: 'Cake', type: 'Dessert'},
            { name: 'Rice', type: 'Dinner'},
            { name: 'Salad', type: 'Dinner'},
            { name: 'Coke', type: 'Drink'},
            { name: 'Green Soda', type: 'Drink'},
            { name: 'Doughnut', type: 'Dessert'},
            { name: 'Ice Cream', type: 'Dessert'},
            { name: 'Lemonade', type: 'Drink'},
            { name: 'Pancakes', type: 'Dessert'},
            { name: 'Water', type: 'Drink'}
          ],
          order: []  
        }
    },
    methods: {
      addItem(){
        const item = {
          name: this.itemName,
          number: this.itemNumber,
          url: this.itemUrl
        }
        this.order.push(item)
        this.itemType = ''
        this.itemName = ''
        this.itemNumber = null  
        this.itemUrl = ''
      },
      newUrl(e) {
        this.itemUrl = e.target.options[e.target.selectedIndex].getAttribute("data-url")
      }
    }
});
app.mount('#app');