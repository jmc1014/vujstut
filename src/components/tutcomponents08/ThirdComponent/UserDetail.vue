<template>
    <div class="container component bg-warning py-3">
        <div class="row">
            <div class="col-12">
                <h2>You may view the User Details here</h2>
                <p>Many Details</p>
                <p>User Name: {{ switchName() }}</p>
                <p>User Age: {{ userAgee }}</p>
                <button class="btn btn-dark" @click="resetName">Reset Name</button>
                <button class="btn btn-dark" @click="resetFn()">Reset Name using function</button>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
  import { eventBus } from '@/main'

  export default {
    // Link for Props and Props Validation https://vuejs.org/v2/guide/components-props.html#Prop-Validation
    // props: ['myName'], PROOPS CAN BE AN ARRAY JUST LIKE THAT
    // OR AN OBJECT to have a validation of what type the user is passing type
    // It can a String, Number, Boolean, Array, Object
    // It can Be multiple type ex. [String, Array]
    //
    data () {
      return {
        userAgee: 27
      }
    },
    props: {
      myName: String,
      resetFn: Function,
      // userAge: Number
    },
    methods: {
      switchName() {
        return this.myName.split("").reverse().join("");
      },
      resetName() {
        this.myName = 'Max';
        this.$emit('nameWasReset', this.myName);
      }
    },
    created() {
      eventBus.$on('ageWasEdited', (age) => {
        this.userAgee = age;
      })
    }
  }
</script>
