<template>
  <div class="convtainer">
    <div class="row">
      <div class="col-cs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

          <label > UserName</label>
          <input type="text" class="form-control"  v-model="user.username">
          <div class="input" :class="{invalid: $v.email.error}"></div>
          <label>Mail</label>
          <input type="text" class="form-control" @input ="$v.email.$touch()" v-model="user.email">
          <button class="btn btn-primary" @click="signUp(user)">Submit</button>
          <hr>
          <button class="btn btn-primary" @click="navigateToHome">Navigate to Home</button>
          <hr>
          <button class="btn btn-primary" @click="fetchdata">
            FetchData
            <br><br><br>
            <ul class="list-group">
              <li class="list-group-item" v-for="u in users">{{u.username}} - {{u.email}}</li>
            </ul>
          </button>
        </div>
      </div>
    </div>
</template>

<script>
  import {required, email} from 'vuelidate/lib/validators'
  import{mapActions} from 'vuex'
  export default {
    data(){
      return {
        user: {
          username:'',
          email:'',
          password:'xqwewqewqsadsadsad'
        },
        users: []

      }
    },
    validtions:{
      email:{
        required,
        email
      }
    },
    methods:{
      ...mapActions('auth',['signUp']),
      fetchdata(){
        this.$http.get('')
          .then(response =>{
            return response.json();
          })
          .then(data =>{
            for (let user in data){
              this.users.push(data[user])
            }

            console.log(this.users)
          })
      },
      navigateToHome(){
        this.$router.push('/randomuser')
      },
      navigateToMain(){
        this.$router.push('/vuejshttp');
      }
    }
  }
</script>

<style scoped>

</style>
