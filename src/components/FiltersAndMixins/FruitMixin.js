export const FruitMixin ={
  data(){
    return{
      text:'Hallo Jumbo',
      fruits :['Apple','Banana','Mango','Melon'],
      filterInputText:''
    }
  },
  filters:{
    textUppercase(value){
      return value.toUpperCase();
    }
  },
  computed:{
    /* computed property beter dan filter*/
    filteredFruits(){
      return this.fruits.filter((element)=> {
        return element.match(this.filterInputText)
      })
    }
  }
}
