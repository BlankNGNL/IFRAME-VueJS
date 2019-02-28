<template>
    <div class="convtainer">
      <div class="row">
        <div class="col-cs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <v-btn color="success" @click="selectedComponent = 'SignInApp'"> Sign in</v-btn>
            <v-btn color="success" @click="selectedComponent = 'SignIUpApp'"> Sign up</v-btn>
            <keep-alive>
              <component :is="selectedComponent"></component>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import SignIn from './signin'
  import SignUp from './signup'


    export default {
      data() {
        return {
          selectedComponent: ''
        }
      },
      components: {
        'SignInApp': SignIn,
        'SignIUpApp': SignUp

      }
    }
</script>

<style scoped>

</style>
