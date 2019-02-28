<template>
  <div>
    <h1>{{name}}</h1>
    <v-btn @click="counter++"color="warning">Increase counter</v-btn>

    <p>{{counter}}</p>
  </div>
</template>

<script>
    export default {
       data(){
         return{
           name: "aap",
           counter: 0
         }
       },
      destroyed(){
        // console.log('Component destroyed (als keep-alive niet aanwezig is)')
      },
      deactivated(){
        // console.log('Deactivated!')
      },
      activated(){
        // console.log('Activated!')
      }
    }
</script>

<style scoped>

</style>
