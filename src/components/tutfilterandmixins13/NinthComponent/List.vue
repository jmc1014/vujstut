<template>
  <div class="row justify-content-center mt-5">
    <div class="col-12">
      <h3>Mixins</h3>
    </div>
    <div class="col-12">
      <p>Component has the last word. or the last will execute.</p>
      <input type="text" class="text-dark" v-model="filterText">
      <ul>
        <li v-for="(fruit, index) in filteredFruitsComputed" :key="index">{{ fruit }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
  import { fruitMixin }  from '@/mixins/fruitMixin'
  export default {
    mixins: [fruitMixin],
    created () {
      console.log('Inside List Created Hook')
    }
  }
</script>
