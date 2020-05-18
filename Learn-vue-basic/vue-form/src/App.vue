<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="userame">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pass: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    submitForm(){
      
      console.log(this.username, this.password);
      const url = 'https://jsonplaceholder.typicode.com/users'
      const data = {
        userame : this.username,
        password : this.password
      }
      //post : 데이터를 생성하거나 조작할때 사용하는 방식
      axios.post(url,data)
        .then(function(response){
          console.log(response);
          
        })
        .catch(function(error){
          console.log(error);
          
        })
    }
  }
}
</script>

<style>

</style>