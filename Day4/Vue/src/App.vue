<template>
  <h1>Hello World!</h1>
  <h1>{{ message }}</h1>
  <food-item/>
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