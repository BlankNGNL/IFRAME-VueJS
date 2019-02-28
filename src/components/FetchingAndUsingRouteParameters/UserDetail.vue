<template>
  <div>
    <h1>User Detail</h1>
    <p>User loaded has ID: {{$route.params.id}}</p>
    <router-link tag="button"
                 :to="{name : 'userEdit', params:{id: $route.params.id}, query:{local : 'en', q:100 } }"
                  class="btn btn-primary"> Edit User</router-link>
  </div>
</template>

<script>
    export default {
        name: "user-detail"
    }
</script>

<style scoped>

</style>
