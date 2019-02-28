<template>
  <div>
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
    mixins:[FruitMixin]
  }
</script>

<style scoped>

</style>
