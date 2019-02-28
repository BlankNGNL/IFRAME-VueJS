<template>
<div>
  <p v-if="show">Nu zie je me</p>

  <p v-else> Door else zie je me nu</p>

  <v-btn color="success" @click="show = !show">Show the text!</v-btn>
  <v-btn color="success" @click="nuggets.push('Que Pasa')">Add Que Pasa</v-btn>

  <ul>
    <li v-for="(nugget,indexNumber) in nuggets" >{{nugget}} ({{indexNumber}})</li>
  </ul>
  <ul>
    <li v-for="person in persons">
      <div v-for="(value,key,indexKey) in person">key: {{key}} value:{{value}} indexkey:{{indexKey}}</div>
    </li>
  </ul>
  <span v-for="n in 20">{{n}}</span>
</div>
</template>

<script>
  export default {
    name: "conditional-rendering-lists",
    data(){
      return{
        show:false,
        nuggets:['kipnuggets 20','kipnuggets 40','kipnuggets 50'],
        persons:[ {name:'Dilara', age:'21'},
                  {name:'Nochill', age:'24'}]
      }
    }
  }
</script>

<style scoped>

</style>
