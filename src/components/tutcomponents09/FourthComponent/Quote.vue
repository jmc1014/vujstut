<template>
  <div class="border border-white p-3 shadow">
    Named Slot: <slot name="title"></slot>
    <hr>
    Unnamed slot (Default SLot): <slot></slot>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    props: ['qoute']
  }
</script>
