<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result ></app-result>
        <appAnotherResult></appAnotherResult>
        <hr>
        <app-counter></app-counter>
        <br><br>
        <appAnotherCounter></appAnotherCounter>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './Counter.vue';
  import Result from './Result.vue';
  import AnotherResult from './AnotherResult'
  import AnotherCounter from './AnotherCounter'

  export default {
    components: {
      appCounter: Counter,
      appResult: Result,
      appAnotherResult: AnotherResult,
      appAnotherCounter: AnotherCounter,
    }
  }
</script>
