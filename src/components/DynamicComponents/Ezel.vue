<template>
  <div>
    <h1>{{name}}</h1>
    <v-text-field
      name="input-1"
      label="Label Text"
      id="testing"
    ></v-text-field>
    <switchedComp v-model="dataSwitch"></switchedComp>
    <p>{{dataSwitch}}</p>

    <MainDirective></MainDirective>
    <FilterMix></FilterMix>
    <CopyFilter></CopyFilter>
  </div>
</template>

<script>
  import Switched from './Switched'
  import MainDirective from '../Directives/MainDirective'
  import Filter from '../FiltersAndMixins/Filter'
  import CopyFilter from '../FiltersAndMixins/CopyFilter'
  export default {
    data(){
      return{
        name: "ezel",
        dataSwitch:null
      }
    },
    components:{
      'switchedComp':Switched,
      'MainDirective':MainDirective,
      'FilterMix':Filter,
      'CopyFilter':CopyFilter

    }

  }
</script>

<style scoped>

</style>
