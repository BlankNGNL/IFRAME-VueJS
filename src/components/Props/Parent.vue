<template>
  <div>
    <hallo message="voornaam" ></hallo>
  </div>
</template>

<script>
  import child from './Child'

    export default {
    data(){
      return{
        voornaam:'hallo jumbo'
      }
    },
       components:{
         'hallo':child
       }
    }
</script>

<style scoped>

</style>
