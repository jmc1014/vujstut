<template>

  <section class="bg-dark text-white">
    <div class="container py-3">
      <div class="row justify-content-center">
        <div class="col-6">
          <h2>Sample Form</h2>
          <form>
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" class="form-control" v-model="userData.fullname">
              <!-- Added .trim removing the excess white spaces -->
              <input type="text"  class="form-control" :value="userData.fullname" @input="userData.fullname = $event.target.value">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" class="form-control" v-model.lazy="userData.email">
              <!-- Added .lazy modifier it will sync after the change event -->
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" class="form-control" v-model="userData.password">
            </div>
            <div class="form-group">
              <label for="age">Age</label>
              <input type="number" id="age" class="form-control" v-model.number="userData.age">
              <!-- Added .number modifier This is often useful, because even with type="number", the value of HTML input elements always returns a string. -->
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="5" class="form-control" v-model="message"></textarea>
            </div>
            <div class="form-group">
              <div class="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" id="sendmail" name="sendmail" value="Send Mail" class="custom-control-input" v-model="sendMail">
                <label class="custom-control-label" for="sendmail">Send Mail</label>
              </div>
              <div class="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" id="sendinfomail" name="sendinfomail" value="Send Infomail" class="custom-control-input"  v-model="sendMail">
                <label class="custom-control-label" for="sendinfomail">Send Infomail</label>
              </div>
            </div>
            <div class="form-group">
              <label for="gender">Gender</label>
              <div class="custom-control custom-radio">
                <input type="radio" id="male" name="gender" class="custom-control-input" v-model="gender" value="Male">
                <label class="custom-control-label" for="male">Male</label>
              </div>
              <div class="custom-control custom-radio">
                <input type="radio" id="female" name="gender" class="custom-control-input" v-model="gender" value="Female">
                <label class="custom-control-label" for="female">Female</label>
              </div>
            </div>
            <div class="form-group">
              <label for="priority">Priority</label>
              <select class="custom-select" v-model="selectedPriority">
                <option v-for="(priority, index) in priorities" :key="index">{{ priority }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="switched" class="d-block">Do you agree?</label>
              <app-switch v-model="dataSwitch"></app-switch>
            </div>
            <div class="form-group">
              <button class="btn btn-primary" @click.prevent="submitted">Submit</button>
            </div>
          </form>
        </div>
        <div class="col-6"  v-if="isSubmitted">
          <h2>Result</h2>
          <p>Full Name: <span class="bg-info text-white p-2">{{ userData.fullname }}</span></p>
          <p>Email: <span class="bg-info text-white p-2">{{ userData.email }}</span></p>
          <p>Password: <span class="bg-info text-white p-2">{{ userData.password }}</span></p>
          <p>Age: <span class="bg-info text-white p-2">{{ userData.age }}</span></p>
          <p>Message:</p>
          <div v-if="message" class="bg-info p-2 text-white" style="white-space:pre">{{ message }}</div>
          <p>Send Mail:</p>
          <ul>
            <li v-for="(item, index) in sendMail" :key="index">{{ item }}</li>
          </ul>
          <p>Gender: <span class="bg-info text-white p-2">{{ gender }}</span></p>
          <p>Priority: <span class="bg-info text-white p-2">{{ selectedPriority }}</span></p>
          <p>Switch: <span class="bg-info text-white p-2">{{ dataSwitch }}</span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/*eslint-disable*/
import Switch from '@/components/tutforms11/SeventhComponent/Switch'

export default {
  data () {
    return {
      userData: {
        fullname: '',
        email: '',
        password: '',
        age: 0
      },
      message: '',
      sendMail: [],
      gender: 'Male',
      selectedPriority: 'High',
      priorities: ['High', 'Medium', 'Low'],
      dataSwitch: true,
      isSubmitted: false
    }
  },
  methods: {
    submitted() {
      this.isSubmitted = true
    }
  },
  components: {
    'app-switch': Switch
  }

}
</script>
