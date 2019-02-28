<template>
  <div>
    <h1>User Edit</h1>
    <p>Local: {{$route.query.local}}</p>
    <p>Analytics: {{$route.query.q}}</p>
  </div>
</template>

<script>
    export default {
        name: "user-edit"
    }
</script>

<style scoped>

</style>
