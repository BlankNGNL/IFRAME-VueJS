<template>
  <div class="container">
    <b-row class="text-center">
      <b-col cols="12">
      <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show"> Show Alert</button>
        <br><br>
        <transition name="fade">
        <b-alert variant="success" show v-if="show">Success Alert</b-alert>
        </transition>
        <transition name="slide" type="animation">
          <b-alert variant="success" show v-if="show">Success Alert Twee</b-alert>
        </transition>
        <transition name="fade" appear>
          <b-alert variant="warning" show v-if="show">Show alert First Before Page load</b-alert>
        </transition>
        <br><br><br><br>
        <v-btn color="sucess" @click="selectedComponent =='appBrood' ? selectedComponent ='appKaas': selectedComponent = 'appBrood'"> Toggle Components</v-btn>
        <transition name="fade"  mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
      </b-col>
      </b-row>
      </div>


</template>

<script>
  import Brood from'./Brood';
  import Kaas from './Kaas'
    export default {
       data(){
         return{
           show:true,
           selectedComponent:''
         }
       },
      components:{
        appBrood:Brood,
        appKaas:Kaas
      }
    }
</script>

<style scoped>
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 1s;
  }

  .fade-leave{
   /* opacity: 1;*/
  }

  .fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter{
    /*transform:translteY(20px) Niet nodig door keyframes*/
  }

  .slide-enter-active{
    animation:slide-in 1s ease-out forwards;
    transition:opacity 0.5s;
    opacity: 0;
  }

  .slide-leave{

  }

  .slide-leave-active{
    animation: slide-out 1s ease-out forwards;
    transition:opacity 1s;
    opacity: 0;
  }
/* css animation*/
  @keyframes slide-in {
    from{
      transform: translateY(20px);
    }
    to{
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from{
      transform: translateY(0);
    }
    to{
      transform: translateY(20px);
    }
  }
</style>
