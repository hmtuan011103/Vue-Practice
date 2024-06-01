<template>
  <h1>Hello World!</h1>
  <h1>{{ message }}</h1>

  <button @click="removeItem">Remove Item</button>
  <food-item 
    v-for="x in foods"
    :key="x.name"
    :food-name="x.name"
    :food-desc="x.desc"
    :is-favorite="x.favorite"
    @toggle-favorite="receiveEmit"
  />

  <ul>
    <todo-item 
      v-for="x in items"
      :key="x"
      :item-name="x"
      style="background-color: lightgreen;"
    />
  </ul>
  <input type="text" v-model="newItem">
  <button @click="addItem">Add</button>
 
</template>

<script>
  export default {
    data() {
      return {
        newItem: '',
        items: ['Buy apples','Make pizza','Mow the lawn'],
        message: 'This is some text',
        foods: [
          { 
            name: 'Apples',
            desc: 'Apples are a type of fruit that grow on trees.',
            favorite: true 
          },
          { 
            name: 'Pizza',
            desc: 'Pizza has a bread base with tomato sauce.',
            favorite: false 
          },
          { name: 'Rice',
            desc: 'Rice is a type of grain that people like to eat.',
            favorite: false 
          },
          { 
            name: 'Fish',
            desc: 'Fish is an animal that lives in water.',
            favorite: true 
          },
          { 
            name: 'Cake',
            desc: 'Cake is something sweet that tastes good.',
            favorite: false 
          }
        ]
      }
    },
    methods: {
      removeItem() {
        this.foods.splice(1,1);
      },
      receiveEmit(foodName) {
        const foundFood = this.foods.find(
          food => food.name === foodName
        )
        foundFood.favorite = !foundFood.favorite;
      },
      addItem() {
        this.items.push(this.newItem);
        this.newItem = '';
      }
    }
  }
</script>
<style>
  #app > div {
    cursor: pointer;
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
</style>