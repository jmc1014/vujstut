<template>
  <div>
    <p>Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus" class="btn">Change Status</button>
  </div>
</template>

<script>
export default {
  name: 'CodeOne',
  data: function () {
    return {
      status: 'Critical',
      statust: 'Friend'
    }
  },
  methods: {
    changeStatus () {
      this.status = 'Normal'
    }
  }
}
</script>
