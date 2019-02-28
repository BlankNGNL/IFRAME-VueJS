<template>
  <div>
    <p v-highlightTest:backgroundiets.delayed="'red'"> Testen met directives</p>
    <p v-local-highlight:backgroundiets.delayed="'red'"> Nog een keer testen!</p>
  </div>
</template>

<script>
  export default {
    name: "main-directive",
    directives:{
      'local-highlight':{
        bind(el,binding,vnode){
          // el.style.backgroundColor = 'green';
          // el.style.backgroundColor = binding.value;
          var delay = 0;

          if(binding.modifiers['delayed']){
            delay = 1000;
          }
          if(binding.modifiers['blink']){
            let mainColor = binding.value;
            let seconColor = 'blue';
            let currentColor = mainColor;

            setTimeout(()=>{
              setInterval(()=> {
                 currentColor == secondColor?currentColor = mainColor : currentColor = seconColor
                if(binding.arg == 'backgroundiets'){
                  el.style.backgroundColor = currentColor
                }else{
                  el.style.color = currentColor
                }
              },1000)


            },delay)
          }else{
            setTimeout(()=>{
              if(binding.arg == 'backgroundiets'){
                el.style.backgroundColor = binding.value
              }else{
                el.style.color = binding.value
              }
            },delay)
          }

        }
      }
    }
  }
</script>

<style scoped>

</style>
