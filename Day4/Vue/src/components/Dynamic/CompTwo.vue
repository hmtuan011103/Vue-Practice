<template>
    <div>
        <h2>Two!</h2>
        <p> Your written: {{ msg }}</p>
        <p>This is component two.</p>

        <input type="text" v-model="msg">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: ''
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: red;
    }
</style>     