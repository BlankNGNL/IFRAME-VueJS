<template>
    <div>
      <p>{{text | textUppercase | filter-lowercase}}</p>
      <hr>
      <input v-model="filterInputText">
      <ul>
        <li v-for="fruit in filteredFruits" >{{fruit}}</li>
      </ul>
    </div>
</template>

<script>
  import {FruitMixin} from "./FruitMixin";

  export default {
      data(){
        return{
          text:'Hallo Jumbo',
        }
      },
    mixins:[FruitMixin]
    }
</script>

<style scoped>

</style>
