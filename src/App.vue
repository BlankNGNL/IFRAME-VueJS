<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat  v-for="route in this.$router.options.routes" :to="route.path" :key="route.name">{{route.name}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>    <!--<img src="./assets/logo.png">-->
      <router-view name="headertop" ></router-view>
      <router-view ></router-view>

    </main>
  </v-app>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import "./../node_modules/bulma/sass/utilities/_all";

  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>
