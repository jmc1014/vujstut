<template>
    <div class="col-4 my-3">
        <p>Server Status: {{status}}</p>
        <button class="btn btn-primary" @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
/* eslint-disable */
    export default {
        data() {
            return {
                status: 'Critical',
            }
        },
        methods: {
            changeStatus() {
                this.status = 'Normal';
            }
        }
    }
</script>
