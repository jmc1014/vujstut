<template>
    <div class="btn-group btn-group-toggle">
      <label class="btn btn-info" :class="{active: value}" @click="switched(true)">
        <input type="radio" name="options" id="switchedyes" autocomplete="off"> Yes
      </label>
      <label  class="btn btn-info" :class="{active: !value}" @click="switched(false)">
        <input type="radio" name="options" id="switchedno" autocomplete="off"> No
      </label>
    </div>
</template>

<script>
/* eslint-disable */
  export default {
    // data() {
    //   return {
    //     isOn: true
    //   }
    // },
    props: ['value'],
    methods: {
      switched(isOn) {
        this.$emit('input', isOn)
      }
    }
  }
</script>
