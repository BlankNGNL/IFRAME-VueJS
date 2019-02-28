<template>
  <div class="row">
    <h3>Quotes Added</h3>
    <v-container fluid>
      <v-checkbox label="Custom progress bar" ></v-checkbox>
     {{quoteCount}} / {{maxQuotes}}
      <v-text-field
        color="cyan darken"
        label="Text field"
        placeholder="Start typing..."
        v-model="value"
        loading
      >
        <v-progress-linear

          slot="progress"
          :value="progress"
          height="7"
          :color="color"
        ></v-progress-linear>
      </v-text-field>
    </v-container>
  </div>
</template>

<script>
  export default {
    props:['quoteCount','maxQuotes'],
    data(){
      return{
        value:''
      }
    },
    computed:{
      progress(){
        return Math.min(100, this.quoteCount * 10)
      },
      color(){
        return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
      }
    }
  }
</script>

<style scoped>

</style>
