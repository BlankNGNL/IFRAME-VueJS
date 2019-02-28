<template>
  <div>
    Parent Component Voornaam: <span>{{ message }}</span>
  </div>
</template>

<script>
    export default {
      props: ['message']
    }
</script>

<style scoped>

</style>
