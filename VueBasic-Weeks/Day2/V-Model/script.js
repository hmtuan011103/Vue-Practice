const app = Vue.createApp({
    data() {
        return {
            inpText: 'Initial text',
            valueForm: '111',
            itemName: null,
            itemNumber: null,
            itemImportant: false,
            shoppingList: [
              { name: 'Tomatoes', number: 5, important: false, found: false}
            ]
        }
    },
    methods: {
        inputForm(e) {
            this.valueForm = e.target.value;
        },
        addItem() {
            const item = {
              name: this.itemName,
              number: this.itemNumber,
              important: this.itemImportant,
              found: false
            }
            this.shoppingList.push(item)
            this.itemName = null
            this.itemNumber = null
            this.itemImportant = false
          }
    }
});
app.mount('#app');