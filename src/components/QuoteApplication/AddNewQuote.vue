<template>
  <div class="row">
    <form >
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
      <label >Quote</label>
      <textarea name="" id="" v-model="quote" rows="3" class="form-control"></textarea>
    </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
        <v-btn color="warning"  @click.prevent="createNew">Add Quote</v-btn>
      </div>
    </form>
  </div>

</template>

<script>

  export default {
    data(){
      return{
        quote:''
      }
    },
    methods:{
      createNew(){
        /* public accesing quote for MainQuotes Vue*/
        this.$emit('quoteAdded',this.quote);
        this.quote = '';
      }
    }

  }
</script>

<style scoped>

</style>
