<template>
    <div class="row">
      <!-- .native modifier -->
      <app-quote v-for="(quote, index) in quotes"  @click.native="deleteQuote(index)" :key="quote.id">{{ quote }}</app-quote>
    </div>
</template>
<script>
/* eslint-disable */
  import Quote from '@/components/tutcomponents10/SixthComponent/Quote'

  export default {
    props: ['quotes'],
    components: {
      'app-quote': Quote
    },
    methods: {
      deleteQuote(index) {
          this.$emit('quoteDeleted', index);
      }
    }
  }

</script>


