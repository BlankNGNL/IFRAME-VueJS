<template>
  <div>
    <h1>USER-DETAILS</h1>
    <v-btn color="info" @click="resetNaam"> Reset naam</v-btn>
    Parent Component Voornaam: {{voornaam}}

  </div>
</template>

<script>
  export default {
    name: "user-details",
    props: {
      voornaam: {
        type:String,
        required:true
      },
      resetNaam: Function
    }
  }
</script>

<style scoped>

</style>
