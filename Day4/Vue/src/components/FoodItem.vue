<template>
    <div>
        <p v-show="isFavorite">LIKE</p>
        <h5>{{ foodName }}</h5>
        <h5>{{ foodDesc }}</h5>
        <p id="red" @click="countClicks">You have clicked me {{ clicks }} times.</p>
        <button @click="toggleFavorite">Favorite</button>
    </div>
</template>
<script>
    export default {
        // props: [
        //     'foodname',
        //     'foodDesc',
        //     'isFavorite'
        // ],
        props: {
            foodName: {
                type: String,
                required: true
            },
            foodDesc: {
                type: String,
                required: false,
                default: '111111111111111111112',
                validator(value) {
                    return 20 < value.length && value.length < 50;
                }
                // validator: function(value) {
                //     return 20 < value.length && value.length < 50;
                // }
            },
            isFavorite: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        emits: ['toggle-favorite'],
        data() {
            return {
                clicks: 0,
                foodIsFavorite: this.isFavorite
            }
        },
        methods: {
            countClicks() {
                this.clicks++;
            },
            toggleFavorite() {
                this.$emit('toggle-favorite', this.foodName);
                // this.foodIsFavorite = !this.foodIsFavorite;
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