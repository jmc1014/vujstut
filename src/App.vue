<template>
  <div id="app">

    <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <nav class="nav nav-pills col-12">
            <router-link class="nav-link" active-class="active" to="/" exact>Home</router-link>
            <router-link class="nav-link" active-class="active" to="/about">About</router-link>
            <router-link class="nav-link" active-class="active" to="/codeone">CodeOne</router-link>
            <router-link class="nav-link" active-class="active" to="/tutcomponent">Components</router-link>
            <router-link class="nav-link" active-class="active" to="/tutforms">Forms</router-link>
            <router-link class="nav-link" active-class="active" to="/tutdirectives">Directives</router-link>
            <router-link class="nav-link" active-class="active" to="/tutfiltersandmixins">Filters & Mixins</router-link>
            <router-link class="nav-link" active-class="active" to="/tut-animation-and-transition">Animation & Transitions</router-link>
            <router-link to="/http" class="nav-link" active-class="active">Http</router-link>
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
