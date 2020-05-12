<template>
  <app-header :propsdata="str" @renew="renewStr"></app-header>
</template>

<script>
import AppHeader from './components/AppHeader'
export default {
  data(){
    return{
      str:'hii'
    }
  },
  components:{AppHeader},
  methods:{
    textChange(text){
      // this.str = text
      console.log(text);
      
    },
    renewStr(){
      this.str = 'header'
    }
  }
}
</script>

<style>

</style>