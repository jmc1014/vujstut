<template>
    <div class="col-6 col-md-4 col-lg-3 mt-3">
      <div class="card">
        <div class="card-body font-arizonia quote">
          <slot></slot>
        </div>
      </div>
    </div>
</template>
<script>
/* eslint-disable */

  export default {
    props: ['quotes']
  }

</script>
<style>
</style>
