<template>
  <div>
    <input>
    <!--User Name:{{user.name}} ,User id is {{user.id}}-->
    <v-btn color="success" @click="counter++">Counter</v-btn>
    <v-btn color="success" @click="secondCounter++">Second Counter</v-btn>
    <p>{{counter}}| {{secondCounter}} </p>
    <p>{{methodCheckCounter()}} | {{computedCheckCounter}}</p>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'

  export default {
    name: "profile",
    data() {
      return {
        counter: 0,
        secondCounter: 0
      }
    },
    computed: {
      ...mapState('RandomUser', ['user']),
      computedCheckCounter() {
        console.log('computed')
        return this.counter > 5 ? this.counter = 0  : 'Not greater than 5'
      }
    },
    watch:{
      secondCounter:function () {
         this.secondCounter > 5 ? this.secondCounter = 0: 'Nani'
      },

    },
    methods: {
      methodCheckCounter() {
        console.log('Method')
        return this.counter > 5 ? 'skuurt' : 'Not greater than 5'
      }
    }

  }
</script>

<style scoped>

</style>
