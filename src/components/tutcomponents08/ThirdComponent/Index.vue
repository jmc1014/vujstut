<template>
    <div >
        <div class="container">
          <div class="row">
              <div class="col-12">
                  <h2>The Third Component</h2>
                  <p> Communicating between Components</p>
              </div>
          </div>
        </div>
        <app-user></app-user>
    </div>
</template>
<script>
/* eslint-disable */
import User from '@/components/tutcomponents08/ThirdComponent/User'

export default {
  components: {
    'app-user': User
  }
}
</script>
