<template>
    <div class="pinkBall"></div>
    <li v-bind="$attrs">{{ itemName }}</li>
    <div class="pinkBall"></div>
</template>
<script>
    export default {
        props: [
            'itemName'
        ]
    }
</script>
<style>
    .pinkBall {
        display: inline-block;
        background-color: lightpink;
        padding: 5px;
        margin: 2px;
        border-radius: 50%;
    }
    li {
        margin: 0;
        border-radius: 10px;
        padding: 5px 10px;
    } 
</style>