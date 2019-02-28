<template>
  <div>
    <button class="btn btn-primary" @click="asyncIncrement({value : 10, duration:500})">Increment</button>
    <button class="btn btn-primary" @click="asyncDecrement({value : 10, duration:500})">Decrement</button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    methods: {
      ...mapActions(['asyncIncrement', 'asyncDecrement']),
    }
  }
</script>
