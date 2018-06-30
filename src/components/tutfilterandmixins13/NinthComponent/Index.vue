<template>
  <section class="bg-info text-white py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <h1>Filters & Mixins</h1>
          <p v-text="text"></p>
          <!-- mustache interpolations & in v-bind -->
          <p v-bind:id="text | toUppercase">{{ text | toUppercase }}</p>
          <!-- Chain Multiple Filters -->
          <p>{{ text | toUppercase | toLowercase }}</p>
          <p>{{ '2018-06-08' | dateFormat }}</p>
          <p>{{ text | toUppercase | changeColor('blue') }}</p>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-12">
          <h3>Method Vs Computed Properties</h3>
        </div>
        <div class="col-6 mt-3">
            <h4>Methods Properties</h4>
            <button class="btn btn-primary" v-on:click="a++">Add to A</button>
            <button class="btn btn-primary" v-on:click="b++">Add to B</button>
            <p class="mt-3">Age + A = {{ addToAmethod() }}</p>
            <p>Age + B = {{ addToBmethod() }}</p>
        </div>
        <div class="col-6 mt-3">
            <h4>Computed Properties</h4>
            <button class="btn btn-primary" v-on:click="c++">Add to C</button>
            <button class="btn btn-primary" v-on:click="d++">Add to D</button>
            <p class="mt-3">Age + C = {{ addToCcomputed }}</p>
            <p>Age + D = {{ addToDcomputed }}</p>
        </div>
        <div class="col-12 mt-3">
          <h4>Why all methods gets executed when 1 button is pressed?</h4>
          <p>the reason is that basically Vue doesn't know which one of the methods needs to run depending on what has updated. </p>
          <p>And this is the kind of operations that computed properties do, they watch the variables that need to be computed or recalculated and they only run when needed. </p>
          <h4>And what are the reasons for using methods? It looks like computed properties are just better (assuming we are talking about 'get' methods)</h4>
          <p>but computed properties don't receive arguments.</p>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-12">
          <h3>Computed Properties instead of Filters</h3>
        </div>
        <div class="col-12">
          <button @click="fruits.push('Berries')" class="btn btn-primary">Add Berries</button>
          <input type="text" class="text-dark" v-model="filterText">
          <ul>
            <li v-for="(fruit, index) in filteredFruitsComputed" :key="index">{{ fruit }}</li>
          </ul>
        </div>
        <div class="col-12">
          <p><strong>Filters don't transform the data, just the output that the user sees.</strong> </p>
          <p>Computed properties can be used to do quick calculations of properties that are displayed in the view. These calculations will be cached and will only update when needed.</p>
          <p>Use filters primarily for simple text formatting that needs to be reused all across your app. Filters should be pure - no side effects, just data in and data out.</p>
          <p>Use computed properties for local, component-specific data transforms. Similar to filters, computed getters should be pure.</p>
        </div>
      </div>
      <app-list></app-list>
    </div>
  </section>
</template>

<script>
/*eslint-disable*/
  import List from '@/components/tutfilterandmixins13/NinthComponent/List'
  import { fruitMixin } from '@/mixins/fruitMixin'
  export default {
    mixins: [fruitMixin],
    data () {
      return {
        text: 'Hello there!',
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        age: 20
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      },
    },
    computed: {
        addToCcomputed: function(){
            console.log('addToCcomputed');
            return this.c + this.age;
        },
        addToDcomputed: function(){
            console.log('addToDcomputed');
            return this.d + this.age;
        }
    },
    methods: {
        addToAmethod: function(){
            console.log('addToAmethod');
            return this.a + this.age;
        },
        addToBmethod: function(){
            console.log('addToBmethod');
            return this.b + this.age;
        }
    },
    components: {
      'app-list': List
    }


  }
</script>
