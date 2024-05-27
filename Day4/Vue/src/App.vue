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