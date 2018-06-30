<template>
  <div>
    <h4>New Quote</h4>
    <button @click="counter++" class="btn btn-primary">Increase</button>
    <p>{{ counter }}</p>
    <p>To retain the state of the component, by default by switch to another componet the current component is destroed then create the next component, then if we go back to the first component it will recreate the component wich result of losing the previous state of the componet.</p>
    <p>Once you use keep-alive, then you have access to two more lifecycle hooks: activated and deactivated. If you do want to clean up or change data when a keep-alive component is removed, you can do so in the deactivated hook.</p>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    data() {
      return {
        counter: 0
      }
    },
    destroyed() {
      console.log('Destroyed')
    },
    deactivated() {
      console.log('Deactivated')
    },
    activated() {
      console.log('Activicated')
    }
  }
</script>
