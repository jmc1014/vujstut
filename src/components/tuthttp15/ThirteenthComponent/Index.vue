<template>
  <section class="bg-light py-3">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <h2> Connecting to Servers via Http - Using vue-resource</h2>
              </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" v-model="user.username">
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" v-model="user.email">
              </div>
              <button class="btn btn-primary" @click="submit('data')">Submit By POST</button>
              <button class="btn btn-secondary" @click="submit('interceptors')">Submit By Interceptor PUT</button>
              <button class="btn btn-info" @click="saveData('data')">Submit Data Via Resource</button>
              <button class="btn btn-warning" @click="saveData('interceptors')">Submit interceptors Data Via Resource</button>
            </div>
            <div class="col-12 mt-3">
              <button class="btn btn-primary" @click="fetchData('data')">Get Data</button>
              <button class="btn btn-secondary" @click="fetchData('interceptors')">Get Inteceptor Data</button>
              <button class="btn btn-info" @click="getFetchData('data')">Get Data Via Resource</button>
              <button class="btn btn-warning" @click="getFetchData('interceptors')">Get Data Via Resource</button>
              <ul class="list-group mt-3">
                <li class="list-group-item" v-for="(u, index) in users" :key="index">{{ u.username }} -- {{ u.email }}</li>
              </ul>
            </div>
          </div>
      </div>
    </section>
</template>

<script>
/* eslint-disable */
// import firebase from 'firebase'
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {}
    };
  },
  methods: {
    submit(uriData) {
      console.log(this.user);

      this.$http.post(uriData + ".json", this.user).then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    },
    fetchData(uriData) {
      this.$http
        .get(uriData + ".json")
        .then(
          response => {
            return response.json();
          },
          error => {
            console.log(error);
          }
        )
        .then(data => {
          // console.log(data)
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          console.log(resultArray, "fetchData");
          this.users = resultArray;
        });
    },
    saveData(uriData) {
      this.resource.saveAlt({ node: uriData }, this.user);
    },
    getFetchData(uriData) {
      this.resource
        .getData({ node: uriData })
        .then(
          response => {
            return response.json();
          },
          error => {
            console.log(error);
          }
        )
        .then(data => {
          // console.log(data)
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          console.log(resultArray, "fetchData");
          this.users = resultArray;
        });
    }
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST" }, ///, url:'alternative.json'
      getData: { method: "GET" }
    };
    this.resource = this.$resource("{node}.json", {}, customActions);
  }
};
</script>
