<template>
    <h2>Component Three</h2>
    <p>This is a component.</p>
    <button @click="counter++">Add One</button>
    <p>{{ counter }}</p>
  </template>
    
  <script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    renderTracked(evt) {
      console.log("renderTracked: ",evt);
      alert("renderTracked");
    },
    renderTriggered(evt) {
      console.log("renderTriggered: ",evt)
      alert("renderTriggered");
    }
  }
  </script>    