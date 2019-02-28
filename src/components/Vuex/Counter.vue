<template>
    <div>
        <button class="btn btn-primary" @click="increment(5)">Increment</button>
        <button class="btn btn-primary" @click="decrement(2)">Decrement</button>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
    export default {
    computed:{
      /* ALLEEN VOOR GETTERS*/
    },
      methods: {
        ...mapActions([
          'increment',
          'decrement'
        ])
      }
    }
</script>
