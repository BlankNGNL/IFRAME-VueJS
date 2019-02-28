<template>
    <div>
      <h1>USER SKUURT</h1>
      <userDetailComp :voornaam="voornaam" :resetNaam="resetNaam"></userDetailComp>
      <v-btn color="success" @click="changeVoornaam">Verander voornaam</v-btn>
      <input type="text" v-model.lazy="inputData" class="text">
     Lazy Data ->  {{inputData}}
    </div>
</template>

<script>
  import UserDetail from './UserDetails'
    export default {
       data(){
         return{
           voornaam:'Dilara',
           inputData:''
         }
       },
      components:{
         'userDetailComp':UserDetail
      },
      methods:{
         changeVoornaam(){
           this.voornaam = 'tjaban'
         },
        resetNaam(){
           this.voornaam = 'Dilara'
        }
      }
    }
</script>

<style scoped>

</style>
