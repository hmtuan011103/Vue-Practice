<template>
    <div>
        <h2>One!</h2>
        <p>Your select: {{ msg }}</p>
        <p>This is component one.</p>
        <Teleport to="body">
            <div>Hello My Friend!</div>
        </Teleport>

       <label for="order1">
            <input type="radio" value="Hehehehe" id="order1" name="order" v-model="msg">
            Hehehehe
       </label>
       <label for="order2">
            <input type="radio" value="Hihihihi" id="order2" name="order" v-model="msg">
            Hihihihi
       </label>
    </div>
</template>

<script>
    export default {
        name: 'CompOne',
        data() {
            return {
                msg: ''
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: blue;
    }
</style>   