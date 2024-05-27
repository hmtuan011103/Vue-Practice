<template>
    <div @click="counClicks">
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
        <p id="red">You have clicked me {{ clicks }} times.</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'Apples',
                message: 'I like apples',
                clicks: 0
            }
        },
        methods: {
            counClicks() {
                this.clicks++;
            }
        },
    }
</script>
<style>
  #red {
    font-weight: bold;
    color: blue;
  }
</style>