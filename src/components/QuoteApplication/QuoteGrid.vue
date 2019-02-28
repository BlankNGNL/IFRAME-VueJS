<template>
  <div class="row">
      <quote  v-for="(quote,index) in quotes" :key="quote.id" @click.native="deleteQuote(index)">{{quote}}</quote>
  </div>

</template>

<script>
  import Quote from './Quote'
    export default {
        props:['quotes'],
        components:{
          quote:Quote
        },
      methods:{
          deleteQuote(index){
              this.$emit('quoteDeleted',index)
          }
      }
    }
</script>

<style scoped>

</style>
