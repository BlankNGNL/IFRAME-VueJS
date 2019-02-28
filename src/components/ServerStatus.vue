<template>
    <div>
      <p>Server Status : {{status}}</p>
      <v-btn color="succes" @click="changeStatus"> Change Status </v-btn>
    </div>
</template>

<script>
    export default {
       data(){
         return{
           status: "Normal"
         }
       },
      methods:{
         changeStatus(){
           this.status = "Critical";
         }
      }
    }

</script>

<style scoped>

</style>
