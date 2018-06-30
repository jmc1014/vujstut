<template>
    <div >
        <div class="container">
          <div class="row">
              <div class="col-12">
                  <h2>The Fourth Component</h2>
                  <p>Advanced Component Usage - SLOT &lt;slot&gt; </p>
              </div>
          </div>
          <div class="row">
            <div class="col-12">
              <app-qoute>
                <h3 slot="title">{{ qouteTitle }} </h3>
                <p class="m-0">A wonderful qoute!</p>
              </app-qoute>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
  import Qoute from '@/components/tutcomponents09/FourthComponent/Quote'

  export default {
    data () {
      return {
        qouteTitle: 'The Quote! Data'
      }
    },
    components: {
      'app-qoute': Qoute
    }
  }

</script>
