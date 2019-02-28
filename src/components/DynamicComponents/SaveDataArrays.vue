<template>
  <div>
    <v-checkbox :label="'Vliegen'" value ="Vliegen" v-model="arrayCheckBox"></v-checkbox>
    <v-checkbox :label="'Lopen'" value="Lopenxxx" v-model="arrayCheckBox"></v-checkbox>
    <p v-for="item in arrayCheckBox">{{item}}</p>
    <v-radio-group v-model="gender" :mandatory="false">
    <v-radio label="Man" value="man" ></v-radio>
    <v-radio label="Vrouw" value="vrouw" ></v-radio>
    </v-radio-group>
    <v-select  :items="options"
               v-model="optionData"
               label="Select"
               single-line
               auto
               prepend-icon="map"
               hide-details>

    </v-select>
      <p>{{optionData}}</p>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          checkBox:'',
          arrayCheckBox:[],
          gender:'Male',
          options:['Kaas','Brood'],
          optionData: ''
        }
      }
    }
</script>

<style scoped>

</style>
