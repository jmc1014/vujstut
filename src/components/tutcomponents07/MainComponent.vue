<template>
    <div>
        <router-view name="components-nav"></router-view>
        <div class="container">
            <div class="row">
                <h1 class="col-12">The Main Component</h1>
            </div>
        </div>
        <router-view></router-view>
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
