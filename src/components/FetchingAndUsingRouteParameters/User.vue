<template>
  <div>
    <h1>User </h1>
    <userheader></userheader>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  import UserHeader from './UserHeader'
  export default {
    components:{
      userheader:UserHeader
    }
  }
</script>

<style scoped>

</style>
