<template>
  <v-data-table
    v-bind:headers="headers"
    :items="stateArray"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td >{{ props.item.name }}</td>
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.phone }}</td>
      <!--<td class="text-xs-right">{{ user.id}}</td>-->
    </template>
  </v-data-table>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    data() {
      return {
        name: "random-user",
        headers: [
          {text: 'Name', value: 'name', align: 'left'},
          {text: 'Email', value: 'email', align: 'left'},
          {text: 'Phone', value: 'phone', align: 'left', sortable: false}
        ]
      }
    },
    computed: {
      ...mapState('RandomUser', ['stateArray'])
    },
    methods: {
      findUser(id) {
        this.getUserById(id);

      },
      ...mapActions('RandomUser', ['getAllUsers', 'getUserById'])
    },

    mounted: function () {
      console.log('mounted')

      //  console.log(this.getUserById(1));
    },
    created(){
      this.getAllUsers();
      console.log('created')
    }


  }
</script>

<style scoped>

</style>
