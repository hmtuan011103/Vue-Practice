<template>
  <h1>Hello World!</h1>
  <h1>{{ message }}</h1>

  <food-item 
    v-for="x in foods"
    :key="x.name"
    :food-name="x.name"
    :food-desc="x.desc"
    :is-favorite="x.favorite"
  />
  <button @click="removeItem">Remove Item</button>
</template>

<script>
  export default {
    data() {
      return {
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