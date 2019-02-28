<template>
  <div class="convtainer">
    <div class="row">
      <div class="col-cs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="form-group">
          <label >Email </label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input type="password" class="form-control" v-model="user.password">
        </div>
        <button class="btn btn-primary" @click="login(user)">Sign in</button>

      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
    export default {
      data() {
        return {
          user: {
            email: 'test@hallo.com',
            password: 'xqwewqewqsadsadsad'
          }

        }
      },
      methods:{
          ...mapActions('auth',['login'])
      }
    }


</script>

<style scoped>

</style>
