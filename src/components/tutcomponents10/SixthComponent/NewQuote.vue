<template>
  <div >
      <form class="row align-items-center justify-content-center">
      <div class="col-8 col-sm-12 col-md-8">
        <label class="h3">Quote</label>
        <textarea class="form-control" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-8 col-sm-12 col-md-8 mt-3">
        <!-- .prevent modifyer to prevent the default behavior of the form -->
        <button class="btn btn-success" @click.prevent="createNew">Add Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    data() {
      return {
        quote: ''
      }
    },
    methods: {
      createNew() {
        this.$emit('quoteAdded', this.quote);
        this.quote ='';
      }
    }
  }
</script>
