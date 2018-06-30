<template>
    <div class="bg-dark py-3">
      <div class="container">
        <div class="row">
          <nav class="nav nav-pills col-12">
             <router-link class="nav-link text-white" active-class="active" to="/tutcomponent" exact>First</router-link>
             <router-link class="nav-link text-white" active-class="active" to="/tutcomponent/second">Second</router-link>
             <router-link class="nav-link text-white" active-class="active" to="/tutcomponent/third">Third</router-link>
             <router-link class="nav-link text-white" active-class="active" to="/tutcomponent/fourth">Fourth</router-link>
             <router-link class="nav-link text-white" active-class="active" to="/tutcomponent/fifth">Fifth</router-link>
             <router-link class="nav-link text-white" active-class="active" to="/tutcomponent/sixth">Sixth</router-link>
          </nav>
        </div>
      </div>
    </div>
</template>

<script>
/* eslint-disable */
    // export default {
    //     methods: {
    //         navigateToHome() {
    //             this.$router.push({ name: 'home' });
    //         }
    //     }
    // }
</script>
