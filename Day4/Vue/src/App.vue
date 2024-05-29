<template>
  <h1>Hello World!</h1>
  <h1>{{ message }}</h1>
  <food-item 
    food-name="Apples"
    food-desc="Apples are a type of fruit that grow on trees."
    :is-favorite="true"
  />
  <food-item 
    food-name="Pizza"
    food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."
    :is-favorite="false"
  />
  <food-item 
    food-name="Rice"
    food-desc="Rice is a type of grain that people like to eat."
    :is-favorite="true"
  />
</template>
<script>
  export default {
    data() {
      return {
        message: 'This is some text'
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