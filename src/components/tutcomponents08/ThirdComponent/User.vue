<template>
    <div class="container component">

      <div class="row">
        <div class="col-12">
          <h3>The User Component</h3>
          <p>I'am awsome User!</p>
          <button @click="changeName" class="btn btn-secondary">Change My Name</button>
          <p>Name  {{ name }}</p>
          <p>Age  {{ age }}</p>
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
            <app-user-detail :myName="name" @nameWasReset="name = $event" :resetFn="resetName" :userAge="age"></app-user-detail>
        </div>
        <div class="col-12 col-md-6">
            <app-user-edit :userAge="age" @ageWasEdited="age = $event"></app-user-edit>
        </div>
      </div>
    </div>
</template>
<script>
/* eslint-disable */
  import UserDetail from '@/components/tutcomponents08/ThirdComponent/UserDetail'
  import UserEdit from '@/components/tutcomponents08/ThirdComponent/UserEdit'

  export default {
    data () {
      return {
        name: 'Max',
        age: 27
      }
    },
    methods: {
      changeName() {
        this.name = 'Anna'
      },
      resetName() {
        this.name = 'Max'
      }
    },
    components: {
      'app-user-detail': UserDetail,
      'app-user-edit': UserEdit
    }
  }
</script>
