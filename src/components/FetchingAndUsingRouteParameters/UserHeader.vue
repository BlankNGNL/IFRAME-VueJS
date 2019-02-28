<template>
  <div>
    <b-nav pills>
      <b-nav-item ><router-link to="/userhome" tag="li" ><a> User Home</a></router-link></b-nav-item>
      <b-nav-item > <router-link to="/user" tag="li" ><a> User</a></router-link></b-nav-item>
    </b-nav>
  </div>
</template>

<script>
    export default {
        name: "user-header"
    }
</script>

<style scoped>

</style>
