<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>User Edits</h2>
                <p>Edit me</p>
                <p>User Age: {{ userAgee }}</p>
                <button class="btn btn-warning" @click="editAge">Edit Age</button>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
  import { eventBus } from '@/main'

  export default {
    data () {
      return {
        userAgee: 27
      }
    },
    // props: ['userAge'],
    methods: {
      editAge() {
        this.userAgee = 30;
        // this.$emit('ageWasEdited', this.userAge)
        // $emit('ageWasEdited', this.userAgee)
        eventBus.changeAge(this.userAgee)
      }
    }
  }
</script>
