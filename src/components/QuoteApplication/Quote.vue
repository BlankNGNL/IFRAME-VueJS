<template>
  <div class="col-sm-6 col-md-4 col-lg-3" >
    <div class="panel panel-default">
      <div class="panel-body quote">
        <slot >

        </slot>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "quote"
    }
</script>

<style scoped>
  .panel-body{
    font-family: Arial,cursive;
    font-size: 24px;
  }

  .quote{
    cursor:pointer;
    background-color: deeppink;
  }
</style>
