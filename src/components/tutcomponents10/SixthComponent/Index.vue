<template>
    <div >
        <div class="container">
          <div class="row">
              <div class="col-12">
                  <h2>The Sixth Component</h2>
                  <p>Project - Wonderful Quotes</p>
              </div>
          </div>
          <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
          <app-new-quote @quoteAdded="newQuote"></app-new-quote>
          <app-quote-grid :quotes="quotes" @quoteDeleted="deleteAQuote"></app-quote-grid>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
  import QuoteGrid from '@/components/tutcomponents10/SixthComponent/QuoteGrid'
  import NewQuote from '@/components/tutcomponents10/SixthComponent/NewQuote'
  import Header from '@/components/tutcomponents10/SixthComponent/Header'

  export default {
    data () {
      return {
        quotes: [
          'Just a Quote to see something '
        ],
        maxQuotes: 10
      }
    },
    methods: {
      newQuote(quote) {
        if(this.quotes.length >= this.maxQuotes) {
          return alert('Please delete a quote first')
        }
        this.quotes.push(quote)
      },
      deleteAQuote(index) {
        this.quotes.splice(index,1)
      }
    },
    components: {
      'app-quote-grid': QuoteGrid,
      'app-new-quote': NewQuote,
      'app-header': Header
    }
  }

</script>
