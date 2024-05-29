<template>
    <div @click="counClicks" v-show="isFavorite">
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
        <h5>{{ foodname }}</h5>
        <h5>{{ foodDesc }}</h5>
        <p id="red">You have clicked me {{ clicks }} times.</p>
    </div>
</template>
<script>
    export default {
        props: [
            'foodname',
            'foodDesc',
            'isFavorite'
        ],
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