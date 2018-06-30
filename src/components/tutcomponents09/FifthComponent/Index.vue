<template>
    <div >
        <div class="container">
          <div class="row">
              <div class="col-12">
                  <h2>The Fifth Component</h2>
                  <p>Advanced Component Usage</p>
                  <p>Switching Multiple Components with Dynamic Components</p>
              </div>
          </div>
          <div class="row">
            <div class="col-12">
              <button class="btn btn-secondary mr-3" @click="selectedComponent = 'app-qoute'">Quote</button>
              <button class="btn btn-secondary mr-3" @click="selectedComponent = 'app-author'">Author</button>
              <button class="btn btn-secondary mr-3" @click="selectedComponent = 'app-new'">New</button>
              <hr>
              <p>{{ selectedComponent }}</p>
              <!--  To maintain their state or avoid re-rendering for performance reasons -->
              <!-- Inactive components will be cached! -->
              <!-- When you wrap a component with keep-alive, its state will be preserved and therefore kept in memory. -->
              <keep-alive>
                <!-- Dynamic Components <component> element with the :is="" special attribute -->
                <component :is="selectedComponent"></component>
              </keep-alive>
            <!--   <app-qoute>
                <h3 slot="title">{{ qouteTitle }} </h3>
                <p class="m-0">A wonderful qoute!</p>
              </app-qoute> -->
            </div>
          </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
  import Qoute from '@/components/tutcomponents09/FifthComponent/Quote'
  import Author from '@/components/tutcomponents09/FifthComponent/Author'
  import New from '@/components/tutcomponents09/FifthComponent/New'

  export default {
    data () {
      return {
        qouteTitle: 'The Quote! Data',
        selectedComponent: 'app-qoute'
      }
    },
    components: {
      'app-qoute': Qoute,
      'app-author': Author,
      'app-new': New
    }
  }

</script>
