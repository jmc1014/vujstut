<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class=" bg-light-gray py-3">
      <div class="container">
        <div class="row">
          <nav class="col-12 nav nav-pills nav-justified">
            <!-- <div class="  bg-light-gray"> -->
              <router-link to="/" class="nav-link" active-class="active" exact>Home</router-link>
              <router-link to="/about" class="nav-link" active-class="active">About</router-link>
              <router-link to="/codeone" class="nav-link" active-class="active">CodeOne</router-link>
              <router-link to="/tutcomponent" class="nav-link" active-class="active">Components</router-link>
              <router-link to="/http" class="nav-link" active-class="active">Http</router-link>
            <!-- </div> -->
          </nav>
        </div>
      </div>
    </div>
    <router-view name="components-nav"></router-view>
    <router-view/>
    <!-- <hr> -->
    <!-- <h4>iF u want wot </h4> -->
    <!-- <app-servers></app-servers> -->

    <!-- <router-view name="app-servers"/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>
