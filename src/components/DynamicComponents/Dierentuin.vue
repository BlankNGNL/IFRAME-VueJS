<template>
  <div>
    <h1>{{name}}</h1>
    <v-btn color="success" @click="selectedComponent = 'aapComp'"> Aap</v-btn>
    <v-btn color="success" @click="selectedComponent = 'ezelComp'"> Ezel</v-btn>
    <v-btn color="success" @click="selectedComponent = 'idiootComp'"> Idioot</v-btn>
    <v-btn color="success" @click="selectedComponent = 'randomUserComp'"> RandomUser</v-btn>
    <v-btn color="success" @click="selectedComponent = 'MainQuote'"> Main Quotes</v-btn>
    <v-btn color="success" @click="selectedComponent = 'SaveDataArrays'"> Save Data Arrays</v-btn>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>

  </div>
</template>

<script>
  import Aap from './Aap'
  import Ezel from './Ezel'
  import Idioot from './Idioot'
  import RandomUser from '../RandomUser'
  import MainQuotes from '../QuoteApplication/MainQuotes'
  import SaveDataArray from './SaveDataArrays'

    export default {
      data(){
        return{
          name: "Dierentuin",
          selectedComponent:''
        }
      },
      components:{
        'aapComp':Aap,
        'ezelComp':Ezel,
        'idiootComp':Idioot,
        'randomUserComp':RandomUser,
        'MainQuote':MainQuotes,
        'SaveDataArrays':SaveDataArray,
      }
    }

</script>

<style scoped>

</style>
