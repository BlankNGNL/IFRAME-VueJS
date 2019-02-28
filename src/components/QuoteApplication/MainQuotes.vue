<template>
  <div class="container">
    <appHeaderQuote :maxQuotes="maxQuote" :quoteCount="quotes.length"></appHeaderQuote>
    <addNewQuote @quoteAdded="newQuote"></addNewQuote>
    <appQuoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"></appQuoteGrid>
    <div class="row">
      <div class="col-sm12 text-center">
        <div class="alert alert-info">
          Info:Click on Quite to delete it
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteGrid from './QuoteGrid'
  import AddNewQuote from './AddNewQuote'
  import HeaderQuote from './HeaderQuote'
    export default {
      data(){
        return{
          quotes:['First Quote'],
          maxQuote:10
        }
      },
      components:{
        appQuoteGrid:QuoteGrid,
        addNewQuote: AddNewQuote,
        appHeaderQuote:HeaderQuote
      },
      methods:{
        newQuote(quote){
          if(this.quotes.length >= this.maxQuote){
            return alert("maximum bereikt")
          }
          this.quotes.push(quote)
        },
        deleteQuote(index){
          this.quotes.splice(index,1);
        }
      }
    }
</script>

<style scoped>

</style>
