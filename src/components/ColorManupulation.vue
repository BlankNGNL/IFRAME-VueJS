<template>
    <div>
      <div class ="border"
           @click="attachRed = !attachRed"
          :class="{red : attachRed}"> test</div>
      <div class ="border" :class="{blue : attachRed}"> test</div>
      <div class ="border" :style="customCssStyle"> test</div>
      <div class ="border" :class="defaultColor"> test</div>
      {{attachRed}}
      <input type="text" v-model="defaultColor">
    </div>
</template>

<script>
    export default {
        name: "color-manupulation",
      data(){
          return{
            attachRed: false,
            defaultColor: 'green',
            width:1000 + 'px'
          }
      },
      watch:{
          attachRed: function () {
            this.attachRed == false ? 'ITS FALSE':'ITS TRUE'
          }
      },
      computed:{
          customCssStyle () {
            return{
              width:this.width,
              backgroundColor:this.defaultColor
            }
          }
      }
    }
</script>

<style scoped>
.red{
  background-color: red;
}

.blue{
  background-color: blue;

}

.pink{
  background-color: pink;
}
.border{
  width:100px;
  height:100px;
  background-color: black;
  display: inline-block;
  margin: 10px;
}
</style>

