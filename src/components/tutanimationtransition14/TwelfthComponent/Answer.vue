<template>
    <div class="alert alert-success text-center">
        <h1>That's Corect!</h1>
        <button class="btn btn-primary" @click="onNextQuestion">Next Question</button> 
    </div>
</template>
   
<script>
/* eslint-disable */
export default {
    methods: {
        onNextQuestion() {
            this.$emit('confirmed')
        }
    }
}
</script>
