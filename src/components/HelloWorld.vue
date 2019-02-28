<template>
  <div>
  <my-color></my-color>
  {{msg}}
  <comp-server v-for ="n in 5" :key="n.id">{{n}} </comp-server>
</div>

</template>

<script>
  import ServerStatus from './ServerStatus';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vues.js App'
    }
  },
  components:{
    'comp-server':ServerStatus
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
